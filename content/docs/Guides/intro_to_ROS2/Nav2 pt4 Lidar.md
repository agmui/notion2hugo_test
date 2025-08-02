---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T01:09:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T01:09:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

TODO: check inertial block

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>


    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    ~~<inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>~~

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JU74IWZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxoLUKYlX4wwCEiznNtBJdUXFk%2B1H9IFnrrkK6KamhKgIhAL4goJTMnjfJ5wJx8sl8dJ1j0XciL%2BYE5Q%2Bi1f0Tww4%2FKv8DCBAQABoMNjM3NDIzMTgzODA1IgwZpckJFQs73Bx7WiUq3ANeV2Utyss9uebdl%2BdYFXnvpA%2FiZ4XTm4SEqr5uzVb%2Fa8qAJgYqPt%2FXco5QWXcJMisok%2FP8ZY%2BMT6oKWqoXLgvPoGoFTo5GTxQ84iXzJcSQS8QTZHJEX2LvuDHsLGo4BUhnw7Y%2BHXG89vTto2WZqH3eNYdrWHCPIVEmrx9rEu4sx5Azo1S8RKwWGhc2J35%2FcRweLQ5iEHLXNj%2FfjUPwO%2F7kwoRjPFBQyeUVou66GEvABnd0FP6OVaH1PSvkPILCNIMcmrs6SJ%2B8C0QJatvER5Bhk3OOX5cCXaqVZH2o5XbPJRJpVEJluwE5MGiF4jbV3ArIfT9D9M62562lQLrPhdmUYkpt7RFp%2B%2BrKySZGPEUl%2BROiBQVRjm2Zv7zsMVf1sym4GzEOLJb%2FT5hWM7Td71GXV07GD7iZPWZ%2FAeNSyLzYdQ7QrDV%2F%2BlhJ6ze4oKY9ZqV4oZoQOayT7muXnmO7Hh5YQii%2FWURXaDRksOWyJd6hIf6aenOyyP5Jsa5Ksn4f9UGbn%2Byk5Iu0YGUQCzUCfGoWRkxVV2298slLzwub0e3PWKy%2F%2FlZ4VDLqvSNu5%2BQpx%2FXZu3R707VRryOH4tKbSccy5o4qGc5g9EnPHyqm50rpl76e0vG6RKvySoo9vTCH8LbEBjqkATaRmG7l3MvYONGLWVq7hwxcE9OLsk1lAPz4tpMPTd0KMya12OjC3hHFAJOSlOqBjZB4wIyzDPV%2Fl49IBQaMV2bzH5VvRLq7aZiMw1vCUMnxEKnDXH%2BL4fo7cl9LDqJIN2BGnylOnpNfqJx4aZBxDsUegdmxWemN4zbPffwxicyhonCyvAj%2Fx%2FGKjrwG7pI%2FM9GVQoUxxkTpLeXJ6KOX1r7S3KcM&X-Amz-Signature=366ce05039d416f93dbd80b1965ae1e280e4ee4fccddac5856e5ce61dc8a055f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUP5HAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnp79UpkNBK9lTWSQY61LfMMJpUj4dOQNGxx3F2v8HAiArecN7BmQe4gOkzjDgVkXvgYsdDs9oGeMLLK1E8t25eyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMVNg0JAvJk1G6IBJiKtwDeIQ8LbJqrNfZPCABpnE9W0Zay%2BCQA7%2B%2FY5VbearGmwXpl64QazMHg%2FmrjIy79igOfxwklUAoGUe%2FyphnSEt%2FLR4h9AIgyoU4lfpazbqEhPEXmIZq6QUF2n8u4BH%2Fz8hPI51tZPCvCRs1FPIhDzOY0Pc9ndjiJOLGjMtIzODTSRpYf328YwwcY7IQRXcFn69hc5CCNLBsAgMrNeXzRMz5HdsP9VZbMaGWdQ1CBhYfVoB5RvWPyofiyXiGhNH536GsPV2YR5eHSDAAT86DceXVL83R00n7n4nVBqTWeLQSsK1lAj%2ByhfPtmavacwFcXsL5avSiscGlhvaYzMjJYFOWMwmXdVuO983PSzGiK90LlscE9HkEy%2FnP6KirAuL%2B8EfICyyIPTZ6dyETzF0BjPcRVF0N8CjEQSIXnlAMUA%2BPc0uPWKQIoZWy8zJFJeT%2F4%2FI5xZ9F4nSk7Qs3qF4qqd9bK9W5EUSAoV700h9yiYmzmVUIMozOugWjEe0mQmJaqkmDoZFvVWVWJYRWuM7dQZaww8tryiZ8reoIXJ3kpcrGH5Ei6HNKhUoClhuUXVNGr469EwauH9kuyEI3Kos7zEw42r%2FBMa%2BoRfxaXP6mMaZv2oEjy6BCNaYOfYCCfvAw1%2B%2B2xAY6pgGtU%2BWIp%2FiAW5Pjn3mFIS9Lx45xPTngwNAXXIp3TyzdjRJbogN1AcjYRIa4d2omx3CCBwCLFLJLZ4VKYwT6ECHKdbckdnKxSIGwsnaaqGK2AAYXm3p8nRwyzxoRLvuELKAt5YpmhSnouIYwxwT%2Fq7j7mdmq1iHWSy2KsmyD9xXV%2BEpsCin%2FGQgXisHrehbP%2FUddg8EhLyiSyLFOxVUji1ACDUuwF0El&X-Amz-Signature=15d4c476a3b44f0a068163f354d8ed4aa58e6f477339e12362316e00b29c44f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUP5HAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnp79UpkNBK9lTWSQY61LfMMJpUj4dOQNGxx3F2v8HAiArecN7BmQe4gOkzjDgVkXvgYsdDs9oGeMLLK1E8t25eyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMVNg0JAvJk1G6IBJiKtwDeIQ8LbJqrNfZPCABpnE9W0Zay%2BCQA7%2B%2FY5VbearGmwXpl64QazMHg%2FmrjIy79igOfxwklUAoGUe%2FyphnSEt%2FLR4h9AIgyoU4lfpazbqEhPEXmIZq6QUF2n8u4BH%2Fz8hPI51tZPCvCRs1FPIhDzOY0Pc9ndjiJOLGjMtIzODTSRpYf328YwwcY7IQRXcFn69hc5CCNLBsAgMrNeXzRMz5HdsP9VZbMaGWdQ1CBhYfVoB5RvWPyofiyXiGhNH536GsPV2YR5eHSDAAT86DceXVL83R00n7n4nVBqTWeLQSsK1lAj%2ByhfPtmavacwFcXsL5avSiscGlhvaYzMjJYFOWMwmXdVuO983PSzGiK90LlscE9HkEy%2FnP6KirAuL%2B8EfICyyIPTZ6dyETzF0BjPcRVF0N8CjEQSIXnlAMUA%2BPc0uPWKQIoZWy8zJFJeT%2F4%2FI5xZ9F4nSk7Qs3qF4qqd9bK9W5EUSAoV700h9yiYmzmVUIMozOugWjEe0mQmJaqkmDoZFvVWVWJYRWuM7dQZaww8tryiZ8reoIXJ3kpcrGH5Ei6HNKhUoClhuUXVNGr469EwauH9kuyEI3Kos7zEw42r%2FBMa%2BoRfxaXP6mMaZv2oEjy6BCNaYOfYCCfvAw1%2B%2B2xAY6pgGtU%2BWIp%2FiAW5Pjn3mFIS9Lx45xPTngwNAXXIp3TyzdjRJbogN1AcjYRIa4d2omx3CCBwCLFLJLZ4VKYwT6ECHKdbckdnKxSIGwsnaaqGK2AAYXm3p8nRwyzxoRLvuELKAt5YpmhSnouIYwxwT%2Fq7j7mdmq1iHWSy2KsmyD9xXV%2BEpsCin%2FGQgXisHrehbP%2FUddg8EhLyiSyLFOxVUji1ACDUuwF0El&X-Amz-Signature=7861448d5cf98ed74d2cf2ffd20811755ff562de915d613d740c92bd17784b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUP5HAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnp79UpkNBK9lTWSQY61LfMMJpUj4dOQNGxx3F2v8HAiArecN7BmQe4gOkzjDgVkXvgYsdDs9oGeMLLK1E8t25eyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMVNg0JAvJk1G6IBJiKtwDeIQ8LbJqrNfZPCABpnE9W0Zay%2BCQA7%2B%2FY5VbearGmwXpl64QazMHg%2FmrjIy79igOfxwklUAoGUe%2FyphnSEt%2FLR4h9AIgyoU4lfpazbqEhPEXmIZq6QUF2n8u4BH%2Fz8hPI51tZPCvCRs1FPIhDzOY0Pc9ndjiJOLGjMtIzODTSRpYf328YwwcY7IQRXcFn69hc5CCNLBsAgMrNeXzRMz5HdsP9VZbMaGWdQ1CBhYfVoB5RvWPyofiyXiGhNH536GsPV2YR5eHSDAAT86DceXVL83R00n7n4nVBqTWeLQSsK1lAj%2ByhfPtmavacwFcXsL5avSiscGlhvaYzMjJYFOWMwmXdVuO983PSzGiK90LlscE9HkEy%2FnP6KirAuL%2B8EfICyyIPTZ6dyETzF0BjPcRVF0N8CjEQSIXnlAMUA%2BPc0uPWKQIoZWy8zJFJeT%2F4%2FI5xZ9F4nSk7Qs3qF4qqd9bK9W5EUSAoV700h9yiYmzmVUIMozOugWjEe0mQmJaqkmDoZFvVWVWJYRWuM7dQZaww8tryiZ8reoIXJ3kpcrGH5Ei6HNKhUoClhuUXVNGr469EwauH9kuyEI3Kos7zEw42r%2FBMa%2BoRfxaXP6mMaZv2oEjy6BCNaYOfYCCfvAw1%2B%2B2xAY6pgGtU%2BWIp%2FiAW5Pjn3mFIS9Lx45xPTngwNAXXIp3TyzdjRJbogN1AcjYRIa4d2omx3CCBwCLFLJLZ4VKYwT6ECHKdbckdnKxSIGwsnaaqGK2AAYXm3p8nRwyzxoRLvuELKAt5YpmhSnouIYwxwT%2Fq7j7mdmq1iHWSy2KsmyD9xXV%2BEpsCin%2FGQgXisHrehbP%2FUddg8EhLyiSyLFOxVUji1ACDUuwF0El&X-Amz-Signature=520ec9ec75d1b61c1c6701d04b420d00d7a27ebc0f63628f11d924e20644b59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUP5HAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnp79UpkNBK9lTWSQY61LfMMJpUj4dOQNGxx3F2v8HAiArecN7BmQe4gOkzjDgVkXvgYsdDs9oGeMLLK1E8t25eyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMVNg0JAvJk1G6IBJiKtwDeIQ8LbJqrNfZPCABpnE9W0Zay%2BCQA7%2B%2FY5VbearGmwXpl64QazMHg%2FmrjIy79igOfxwklUAoGUe%2FyphnSEt%2FLR4h9AIgyoU4lfpazbqEhPEXmIZq6QUF2n8u4BH%2Fz8hPI51tZPCvCRs1FPIhDzOY0Pc9ndjiJOLGjMtIzODTSRpYf328YwwcY7IQRXcFn69hc5CCNLBsAgMrNeXzRMz5HdsP9VZbMaGWdQ1CBhYfVoB5RvWPyofiyXiGhNH536GsPV2YR5eHSDAAT86DceXVL83R00n7n4nVBqTWeLQSsK1lAj%2ByhfPtmavacwFcXsL5avSiscGlhvaYzMjJYFOWMwmXdVuO983PSzGiK90LlscE9HkEy%2FnP6KirAuL%2B8EfICyyIPTZ6dyETzF0BjPcRVF0N8CjEQSIXnlAMUA%2BPc0uPWKQIoZWy8zJFJeT%2F4%2FI5xZ9F4nSk7Qs3qF4qqd9bK9W5EUSAoV700h9yiYmzmVUIMozOugWjEe0mQmJaqkmDoZFvVWVWJYRWuM7dQZaww8tryiZ8reoIXJ3kpcrGH5Ei6HNKhUoClhuUXVNGr469EwauH9kuyEI3Kos7zEw42r%2FBMa%2BoRfxaXP6mMaZv2oEjy6BCNaYOfYCCfvAw1%2B%2B2xAY6pgGtU%2BWIp%2FiAW5Pjn3mFIS9Lx45xPTngwNAXXIp3TyzdjRJbogN1AcjYRIa4d2omx3CCBwCLFLJLZ4VKYwT6ECHKdbckdnKxSIGwsnaaqGK2AAYXm3p8nRwyzxoRLvuELKAt5YpmhSnouIYwxwT%2Fq7j7mdmq1iHWSy2KsmyD9xXV%2BEpsCin%2FGQgXisHrehbP%2FUddg8EhLyiSyLFOxVUji1ACDUuwF0El&X-Amz-Signature=91c4ba93907ee367e8274f677e8002b93951076d048a0d78131ef330c0085b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUP5HAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnp79UpkNBK9lTWSQY61LfMMJpUj4dOQNGxx3F2v8HAiArecN7BmQe4gOkzjDgVkXvgYsdDs9oGeMLLK1E8t25eyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMVNg0JAvJk1G6IBJiKtwDeIQ8LbJqrNfZPCABpnE9W0Zay%2BCQA7%2B%2FY5VbearGmwXpl64QazMHg%2FmrjIy79igOfxwklUAoGUe%2FyphnSEt%2FLR4h9AIgyoU4lfpazbqEhPEXmIZq6QUF2n8u4BH%2Fz8hPI51tZPCvCRs1FPIhDzOY0Pc9ndjiJOLGjMtIzODTSRpYf328YwwcY7IQRXcFn69hc5CCNLBsAgMrNeXzRMz5HdsP9VZbMaGWdQ1CBhYfVoB5RvWPyofiyXiGhNH536GsPV2YR5eHSDAAT86DceXVL83R00n7n4nVBqTWeLQSsK1lAj%2ByhfPtmavacwFcXsL5avSiscGlhvaYzMjJYFOWMwmXdVuO983PSzGiK90LlscE9HkEy%2FnP6KirAuL%2B8EfICyyIPTZ6dyETzF0BjPcRVF0N8CjEQSIXnlAMUA%2BPc0uPWKQIoZWy8zJFJeT%2F4%2FI5xZ9F4nSk7Qs3qF4qqd9bK9W5EUSAoV700h9yiYmzmVUIMozOugWjEe0mQmJaqkmDoZFvVWVWJYRWuM7dQZaww8tryiZ8reoIXJ3kpcrGH5Ei6HNKhUoClhuUXVNGr469EwauH9kuyEI3Kos7zEw42r%2FBMa%2BoRfxaXP6mMaZv2oEjy6BCNaYOfYCCfvAw1%2B%2B2xAY6pgGtU%2BWIp%2FiAW5Pjn3mFIS9Lx45xPTngwNAXXIp3TyzdjRJbogN1AcjYRIa4d2omx3CCBwCLFLJLZ4VKYwT6ECHKdbckdnKxSIGwsnaaqGK2AAYXm3p8nRwyzxoRLvuELKAt5YpmhSnouIYwxwT%2Fq7j7mdmq1iHWSy2KsmyD9xXV%2BEpsCin%2FGQgXisHrehbP%2FUddg8EhLyiSyLFOxVUji1ACDUuwF0El&X-Amz-Signature=5e9ac8fb78c2818155ed7e712f80d78fe3dcbaf38dd97e3aeb4e51ecba82ec89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUP5HAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnp79UpkNBK9lTWSQY61LfMMJpUj4dOQNGxx3F2v8HAiArecN7BmQe4gOkzjDgVkXvgYsdDs9oGeMLLK1E8t25eyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMVNg0JAvJk1G6IBJiKtwDeIQ8LbJqrNfZPCABpnE9W0Zay%2BCQA7%2B%2FY5VbearGmwXpl64QazMHg%2FmrjIy79igOfxwklUAoGUe%2FyphnSEt%2FLR4h9AIgyoU4lfpazbqEhPEXmIZq6QUF2n8u4BH%2Fz8hPI51tZPCvCRs1FPIhDzOY0Pc9ndjiJOLGjMtIzODTSRpYf328YwwcY7IQRXcFn69hc5CCNLBsAgMrNeXzRMz5HdsP9VZbMaGWdQ1CBhYfVoB5RvWPyofiyXiGhNH536GsPV2YR5eHSDAAT86DceXVL83R00n7n4nVBqTWeLQSsK1lAj%2ByhfPtmavacwFcXsL5avSiscGlhvaYzMjJYFOWMwmXdVuO983PSzGiK90LlscE9HkEy%2FnP6KirAuL%2B8EfICyyIPTZ6dyETzF0BjPcRVF0N8CjEQSIXnlAMUA%2BPc0uPWKQIoZWy8zJFJeT%2F4%2FI5xZ9F4nSk7Qs3qF4qqd9bK9W5EUSAoV700h9yiYmzmVUIMozOugWjEe0mQmJaqkmDoZFvVWVWJYRWuM7dQZaww8tryiZ8reoIXJ3kpcrGH5Ei6HNKhUoClhuUXVNGr469EwauH9kuyEI3Kos7zEw42r%2FBMa%2BoRfxaXP6mMaZv2oEjy6BCNaYOfYCCfvAw1%2B%2B2xAY6pgGtU%2BWIp%2FiAW5Pjn3mFIS9Lx45xPTngwNAXXIp3TyzdjRJbogN1AcjYRIa4d2omx3CCBwCLFLJLZ4VKYwT6ECHKdbckdnKxSIGwsnaaqGK2AAYXm3p8nRwyzxoRLvuELKAt5YpmhSnouIYwxwT%2Fq7j7mdmq1iHWSy2KsmyD9xXV%2BEpsCin%2FGQgXisHrehbP%2FUddg8EhLyiSyLFOxVUji1ACDUuwF0El&X-Amz-Signature=a915bc7a15493d96b65b752d981fbdcda5e48aecc3d2367a470df3d65f09cc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUP5HAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnp79UpkNBK9lTWSQY61LfMMJpUj4dOQNGxx3F2v8HAiArecN7BmQe4gOkzjDgVkXvgYsdDs9oGeMLLK1E8t25eyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMVNg0JAvJk1G6IBJiKtwDeIQ8LbJqrNfZPCABpnE9W0Zay%2BCQA7%2B%2FY5VbearGmwXpl64QazMHg%2FmrjIy79igOfxwklUAoGUe%2FyphnSEt%2FLR4h9AIgyoU4lfpazbqEhPEXmIZq6QUF2n8u4BH%2Fz8hPI51tZPCvCRs1FPIhDzOY0Pc9ndjiJOLGjMtIzODTSRpYf328YwwcY7IQRXcFn69hc5CCNLBsAgMrNeXzRMz5HdsP9VZbMaGWdQ1CBhYfVoB5RvWPyofiyXiGhNH536GsPV2YR5eHSDAAT86DceXVL83R00n7n4nVBqTWeLQSsK1lAj%2ByhfPtmavacwFcXsL5avSiscGlhvaYzMjJYFOWMwmXdVuO983PSzGiK90LlscE9HkEy%2FnP6KirAuL%2B8EfICyyIPTZ6dyETzF0BjPcRVF0N8CjEQSIXnlAMUA%2BPc0uPWKQIoZWy8zJFJeT%2F4%2FI5xZ9F4nSk7Qs3qF4qqd9bK9W5EUSAoV700h9yiYmzmVUIMozOugWjEe0mQmJaqkmDoZFvVWVWJYRWuM7dQZaww8tryiZ8reoIXJ3kpcrGH5Ei6HNKhUoClhuUXVNGr469EwauH9kuyEI3Kos7zEw42r%2FBMa%2BoRfxaXP6mMaZv2oEjy6BCNaYOfYCCfvAw1%2B%2B2xAY6pgGtU%2BWIp%2FiAW5Pjn3mFIS9Lx45xPTngwNAXXIp3TyzdjRJbogN1AcjYRIa4d2omx3CCBwCLFLJLZ4VKYwT6ECHKdbckdnKxSIGwsnaaqGK2AAYXm3p8nRwyzxoRLvuELKAt5YpmhSnouIYwxwT%2Fq7j7mdmq1iHWSy2KsmyD9xXV%2BEpsCin%2FGQgXisHrehbP%2FUddg8EhLyiSyLFOxVUji1ACDUuwF0El&X-Amz-Signature=ff1014090c12f95a1c0e3240b1d0e2ce807d757c76532046d721cc77cd3fb96e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUP5HAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnp79UpkNBK9lTWSQY61LfMMJpUj4dOQNGxx3F2v8HAiArecN7BmQe4gOkzjDgVkXvgYsdDs9oGeMLLK1E8t25eyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMVNg0JAvJk1G6IBJiKtwDeIQ8LbJqrNfZPCABpnE9W0Zay%2BCQA7%2B%2FY5VbearGmwXpl64QazMHg%2FmrjIy79igOfxwklUAoGUe%2FyphnSEt%2FLR4h9AIgyoU4lfpazbqEhPEXmIZq6QUF2n8u4BH%2Fz8hPI51tZPCvCRs1FPIhDzOY0Pc9ndjiJOLGjMtIzODTSRpYf328YwwcY7IQRXcFn69hc5CCNLBsAgMrNeXzRMz5HdsP9VZbMaGWdQ1CBhYfVoB5RvWPyofiyXiGhNH536GsPV2YR5eHSDAAT86DceXVL83R00n7n4nVBqTWeLQSsK1lAj%2ByhfPtmavacwFcXsL5avSiscGlhvaYzMjJYFOWMwmXdVuO983PSzGiK90LlscE9HkEy%2FnP6KirAuL%2B8EfICyyIPTZ6dyETzF0BjPcRVF0N8CjEQSIXnlAMUA%2BPc0uPWKQIoZWy8zJFJeT%2F4%2FI5xZ9F4nSk7Qs3qF4qqd9bK9W5EUSAoV700h9yiYmzmVUIMozOugWjEe0mQmJaqkmDoZFvVWVWJYRWuM7dQZaww8tryiZ8reoIXJ3kpcrGH5Ei6HNKhUoClhuUXVNGr469EwauH9kuyEI3Kos7zEw42r%2FBMa%2BoRfxaXP6mMaZv2oEjy6BCNaYOfYCCfvAw1%2B%2B2xAY6pgGtU%2BWIp%2FiAW5Pjn3mFIS9Lx45xPTngwNAXXIp3TyzdjRJbogN1AcjYRIa4d2omx3CCBwCLFLJLZ4VKYwT6ECHKdbckdnKxSIGwsnaaqGK2AAYXm3p8nRwyzxoRLvuELKAt5YpmhSnouIYwxwT%2Fq7j7mdmq1iHWSy2KsmyD9xXV%2BEpsCin%2FGQgXisHrehbP%2FUddg8EhLyiSyLFOxVUji1ACDUuwF0El&X-Amz-Signature=6a7f66f775d5f7185b601f8eb82d3a9280d2b46a0f25d1a5d01dfb47b6f760e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

TODO: get official docs link

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUP5HAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnp79UpkNBK9lTWSQY61LfMMJpUj4dOQNGxx3F2v8HAiArecN7BmQe4gOkzjDgVkXvgYsdDs9oGeMLLK1E8t25eyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMVNg0JAvJk1G6IBJiKtwDeIQ8LbJqrNfZPCABpnE9W0Zay%2BCQA7%2B%2FY5VbearGmwXpl64QazMHg%2FmrjIy79igOfxwklUAoGUe%2FyphnSEt%2FLR4h9AIgyoU4lfpazbqEhPEXmIZq6QUF2n8u4BH%2Fz8hPI51tZPCvCRs1FPIhDzOY0Pc9ndjiJOLGjMtIzODTSRpYf328YwwcY7IQRXcFn69hc5CCNLBsAgMrNeXzRMz5HdsP9VZbMaGWdQ1CBhYfVoB5RvWPyofiyXiGhNH536GsPV2YR5eHSDAAT86DceXVL83R00n7n4nVBqTWeLQSsK1lAj%2ByhfPtmavacwFcXsL5avSiscGlhvaYzMjJYFOWMwmXdVuO983PSzGiK90LlscE9HkEy%2FnP6KirAuL%2B8EfICyyIPTZ6dyETzF0BjPcRVF0N8CjEQSIXnlAMUA%2BPc0uPWKQIoZWy8zJFJeT%2F4%2FI5xZ9F4nSk7Qs3qF4qqd9bK9W5EUSAoV700h9yiYmzmVUIMozOugWjEe0mQmJaqkmDoZFvVWVWJYRWuM7dQZaww8tryiZ8reoIXJ3kpcrGH5Ei6HNKhUoClhuUXVNGr469EwauH9kuyEI3Kos7zEw42r%2FBMa%2BoRfxaXP6mMaZv2oEjy6BCNaYOfYCCfvAw1%2B%2B2xAY6pgGtU%2BWIp%2FiAW5Pjn3mFIS9Lx45xPTngwNAXXIp3TyzdjRJbogN1AcjYRIa4d2omx3CCBwCLFLJLZ4VKYwT6ECHKdbckdnKxSIGwsnaaqGK2AAYXm3p8nRwyzxoRLvuELKAt5YpmhSnouIYwxwT%2Fq7j7mdmq1iHWSy2KsmyD9xXV%2BEpsCin%2FGQgXisHrehbP%2FUddg8EhLyiSyLFOxVUji1ACDUuwF0El&X-Amz-Signature=115de8f67fd4124028a05a24f366ce56c1ea46b2a760e7ab6b8aa81647cad015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUP5HAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnp79UpkNBK9lTWSQY61LfMMJpUj4dOQNGxx3F2v8HAiArecN7BmQe4gOkzjDgVkXvgYsdDs9oGeMLLK1E8t25eyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMVNg0JAvJk1G6IBJiKtwDeIQ8LbJqrNfZPCABpnE9W0Zay%2BCQA7%2B%2FY5VbearGmwXpl64QazMHg%2FmrjIy79igOfxwklUAoGUe%2FyphnSEt%2FLR4h9AIgyoU4lfpazbqEhPEXmIZq6QUF2n8u4BH%2Fz8hPI51tZPCvCRs1FPIhDzOY0Pc9ndjiJOLGjMtIzODTSRpYf328YwwcY7IQRXcFn69hc5CCNLBsAgMrNeXzRMz5HdsP9VZbMaGWdQ1CBhYfVoB5RvWPyofiyXiGhNH536GsPV2YR5eHSDAAT86DceXVL83R00n7n4nVBqTWeLQSsK1lAj%2ByhfPtmavacwFcXsL5avSiscGlhvaYzMjJYFOWMwmXdVuO983PSzGiK90LlscE9HkEy%2FnP6KirAuL%2B8EfICyyIPTZ6dyETzF0BjPcRVF0N8CjEQSIXnlAMUA%2BPc0uPWKQIoZWy8zJFJeT%2F4%2FI5xZ9F4nSk7Qs3qF4qqd9bK9W5EUSAoV700h9yiYmzmVUIMozOugWjEe0mQmJaqkmDoZFvVWVWJYRWuM7dQZaww8tryiZ8reoIXJ3kpcrGH5Ei6HNKhUoClhuUXVNGr469EwauH9kuyEI3Kos7zEw42r%2FBMa%2BoRfxaXP6mMaZv2oEjy6BCNaYOfYCCfvAw1%2B%2B2xAY6pgGtU%2BWIp%2FiAW5Pjn3mFIS9Lx45xPTngwNAXXIp3TyzdjRJbogN1AcjYRIa4d2omx3CCBwCLFLJLZ4VKYwT6ECHKdbckdnKxSIGwsnaaqGK2AAYXm3p8nRwyzxoRLvuELKAt5YpmhSnouIYwxwT%2Fq7j7mdmq1iHWSy2KsmyD9xXV%2BEpsCin%2FGQgXisHrehbP%2FUddg8EhLyiSyLFOxVUji1ACDUuwF0El&X-Amz-Signature=786e068065e887ff7e39e1327417ed4d09f7d71c545d83ea285403281af403ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
