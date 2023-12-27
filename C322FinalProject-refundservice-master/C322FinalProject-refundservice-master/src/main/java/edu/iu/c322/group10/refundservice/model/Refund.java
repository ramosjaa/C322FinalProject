package edu.iu.c322.group10.refundservice.model;

import jakarta.persistence.*;
import org.hibernate.annotations.LazyToOne;

import javax.annotation.processing.Generated;

@Entity
public class Refund {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int refundId;


    private int orderId;

    private int customerId;

    private String reason;


    private String status;

    public int getOrderId() {
        return orderId;
    }

    public int getCustomerId() {
        return customerId;
    }

    public String getReason() {
        return reason;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }



    public int getRefundId() {
        return refundId;
    }

    public void setRefundId(int refundId) {
        this.refundId = refundId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
