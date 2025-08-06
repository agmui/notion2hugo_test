---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPBXMD5P%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDFxEt80OWYK1bPeg1yYzMD%2BXRd%2BSQwo%2B%2BcS7KNqa%2Bt2AiEAlOwvV%2Bx5DNxEymtUg6ALyD4NkvTfM3quYejaiqNEnjoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCETRpLmIx5sdshgVyrcA6hBMKDdN13Lvpo%2FTQVdnA0LXUOXi7icDwHnKeu3rCfOba23HfqjZe574jbEj1%2Fsy0cqxgGiwLCJWXoijzS35g5rB3fsaeJCpeFndMQk%2FxIch%2F9TGdl8V6WnwqjvjPsKDMorjxaqgdBCfnsiIEwiBfil7JBELJ3Gbv5d3VZrYxKkNLyeQdY9p1djFKq6mpcmxM8XmnxTaWTxecy0E5gppJVtzSxSzKeud%2FG404aubDgp8vgvi0xFAEiPmU4urErfVsqx8kmszdkPMykP7YjLSoZQTKntRseJqQ6Yrrn4ZgkapJQRed6C1nUzAjJ3TzAuGxtRCHAClEMMyzkrxsXZrV3MQMY9fCjSUt%2BIUJuo%2FCehzeyoWHRcHgCs1%2FBvF559NKmRBRskRM0kiJthRixLIeGtF1eKPuY1HypHnsB2L%2Bn800UKz4j6h2Dj4FfdLDFThYul%2Bo9TWC8Ttxj%2BoDNn8V5qeJcMiPE%2FtiW8zUTmi8u3CMdiyMO4LT1l0kigqKKrtKHQbQpEW%2B2rg5C3p20%2FEJ21DQxkCIq36qX5f%2Fizi2DYWM%2BBJBt9j4pHql1BkNuhcxWjOcFmtliRxfRUSrxjlep%2Fb4VEn6FFu8pDDzaOu7AtEDztz6NwOvRir0avMML7zcQGOqUBiPkVn38Xe7Wd932olF25Q8N2YhBQrGS%2BDxXDtcannuh%2FTxbXS9pG%2B3YMnEpDR3y5gk1ptkZ2H6cggyWrRmBmqUeY0RKvSU3g1mP1oDrXErcp2v%2FQrlqONa2nAgnqe79g2RP4xFkGDuY%2BnlUJY%2BQiEycfb7NQhj52wp3AuXLAxFxo1k0SxWg%2B%2FlvuJJt3y%2F%2FBe14e0aWF8jzK8NYY6YxA%2FADX2rsF&X-Amz-Signature=8358d6e39f2f45cdfed88002d4a73a5b7c397a5966d073bb9aa850820528f2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5VBLZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC1sMl9nQ750DmmO6edk1PAEcdsbzdpwndUiszlqP9CrgIhAI8JfjT9qmFPAmchsh6s2yg6UM%2BXKqtMBG2%2BhAcHtjxvKv8DCHkQABoMNjM3NDIzMTgzODA1Igyt%2BmHY7vmT%2BP2Uk%2Bgq3AOrg3N2PWooWKtRFEw5YAGRJQf%2FFAPr2lQYWDcRzhOD0Fucb4X7eKWYvuzeIgY57u%2BXShlQ8ZLG%2BvKeCxkO0REzCAvb13gfLFxn2fDSLeyjuZhgUTuSakscK0d5QPgsFT21900Bd0FTwWLDRk0cl9mzBcFnPxMbQL4xKhvgFuSWZ%2FZgqztc8IUdgF0ELOhKtspjWXbbvenjHCxiHPs%2F8in1ZE%2B3laFq%2BPJQOEScThIX9592FSvNVY7Z1rxdt%2F5xIzPnrpB8NT8MQl%2BUJodJf3Ohbpu7os%2F5ClBGZav5ucN3pXuMpjhyRFjTFDy0wj%2FqbeI9AR%2Fc4yAOo6XSYbh7v%2FTcNzFflL8kLx%2FpW6PbUu2EDBMQzy7Yp55t57YAJ%2FR7qfDzgaGrIZKlzn5j9bD3LY351fwPos7pSpPErUSUNq4nDsi5rFhT93dDPTOTgNw4wVQE1kcFD8x%2B%2F9Gxfw6zDP84MqGdExecM7ox92fxLhwhTnmAIpMLneylCt3qYOHVE5VssQ7K6IA8uP%2BbShwAuBkKvNcov6JHIj%2B8N%2Fd7CQoqJVvHFzULM7XGzGHtaaa%2F5TBxSHg%2BaIt6wD%2Ba0vu4F0zYkHfP5E24CjIrugEQHvS5jFZnL%2Ff1G3kp3J2kmjDh%2Bs3EBjqkAU5QEH1KvZ7O5nAICAT7U9SUFQWJBuaXyeDlOnCDeSwg0CSXOj0sculyY1ZHuEdFX9PaVR8Vmb4dcCwS3tpAvqH2Qs3%2FGwAekqknc8C7JHMlEgmN1SdJcYhw3UxWkI0ZfBr%2BoTmXvR14IXw4fsZoMq1yYhoOcW7GMhl5mXyZKDn7CoaY436oMWDK%2F0ygbESKX3FXfceKEixZg%2FMpq0Ydn%2FQ47An2&X-Amz-Signature=2cc479b83b811687815bf7374a53256500cd91aa6a0a993d5529019e2c286f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5VBLZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC1sMl9nQ750DmmO6edk1PAEcdsbzdpwndUiszlqP9CrgIhAI8JfjT9qmFPAmchsh6s2yg6UM%2BXKqtMBG2%2BhAcHtjxvKv8DCHkQABoMNjM3NDIzMTgzODA1Igyt%2BmHY7vmT%2BP2Uk%2Bgq3AOrg3N2PWooWKtRFEw5YAGRJQf%2FFAPr2lQYWDcRzhOD0Fucb4X7eKWYvuzeIgY57u%2BXShlQ8ZLG%2BvKeCxkO0REzCAvb13gfLFxn2fDSLeyjuZhgUTuSakscK0d5QPgsFT21900Bd0FTwWLDRk0cl9mzBcFnPxMbQL4xKhvgFuSWZ%2FZgqztc8IUdgF0ELOhKtspjWXbbvenjHCxiHPs%2F8in1ZE%2B3laFq%2BPJQOEScThIX9592FSvNVY7Z1rxdt%2F5xIzPnrpB8NT8MQl%2BUJodJf3Ohbpu7os%2F5ClBGZav5ucN3pXuMpjhyRFjTFDy0wj%2FqbeI9AR%2Fc4yAOo6XSYbh7v%2FTcNzFflL8kLx%2FpW6PbUu2EDBMQzy7Yp55t57YAJ%2FR7qfDzgaGrIZKlzn5j9bD3LY351fwPos7pSpPErUSUNq4nDsi5rFhT93dDPTOTgNw4wVQE1kcFD8x%2B%2F9Gxfw6zDP84MqGdExecM7ox92fxLhwhTnmAIpMLneylCt3qYOHVE5VssQ7K6IA8uP%2BbShwAuBkKvNcov6JHIj%2B8N%2Fd7CQoqJVvHFzULM7XGzGHtaaa%2F5TBxSHg%2BaIt6wD%2Ba0vu4F0zYkHfP5E24CjIrugEQHvS5jFZnL%2Ff1G3kp3J2kmjDh%2Bs3EBjqkAU5QEH1KvZ7O5nAICAT7U9SUFQWJBuaXyeDlOnCDeSwg0CSXOj0sculyY1ZHuEdFX9PaVR8Vmb4dcCwS3tpAvqH2Qs3%2FGwAekqknc8C7JHMlEgmN1SdJcYhw3UxWkI0ZfBr%2BoTmXvR14IXw4fsZoMq1yYhoOcW7GMhl5mXyZKDn7CoaY436oMWDK%2F0ygbESKX3FXfceKEixZg%2FMpq0Ydn%2FQ47An2&X-Amz-Signature=47de9e4b11451847ef3e010f9665b6eca967b5108f2555dd18898b6a18162a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5VBLZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC1sMl9nQ750DmmO6edk1PAEcdsbzdpwndUiszlqP9CrgIhAI8JfjT9qmFPAmchsh6s2yg6UM%2BXKqtMBG2%2BhAcHtjxvKv8DCHkQABoMNjM3NDIzMTgzODA1Igyt%2BmHY7vmT%2BP2Uk%2Bgq3AOrg3N2PWooWKtRFEw5YAGRJQf%2FFAPr2lQYWDcRzhOD0Fucb4X7eKWYvuzeIgY57u%2BXShlQ8ZLG%2BvKeCxkO0REzCAvb13gfLFxn2fDSLeyjuZhgUTuSakscK0d5QPgsFT21900Bd0FTwWLDRk0cl9mzBcFnPxMbQL4xKhvgFuSWZ%2FZgqztc8IUdgF0ELOhKtspjWXbbvenjHCxiHPs%2F8in1ZE%2B3laFq%2BPJQOEScThIX9592FSvNVY7Z1rxdt%2F5xIzPnrpB8NT8MQl%2BUJodJf3Ohbpu7os%2F5ClBGZav5ucN3pXuMpjhyRFjTFDy0wj%2FqbeI9AR%2Fc4yAOo6XSYbh7v%2FTcNzFflL8kLx%2FpW6PbUu2EDBMQzy7Yp55t57YAJ%2FR7qfDzgaGrIZKlzn5j9bD3LY351fwPos7pSpPErUSUNq4nDsi5rFhT93dDPTOTgNw4wVQE1kcFD8x%2B%2F9Gxfw6zDP84MqGdExecM7ox92fxLhwhTnmAIpMLneylCt3qYOHVE5VssQ7K6IA8uP%2BbShwAuBkKvNcov6JHIj%2B8N%2Fd7CQoqJVvHFzULM7XGzGHtaaa%2F5TBxSHg%2BaIt6wD%2Ba0vu4F0zYkHfP5E24CjIrugEQHvS5jFZnL%2Ff1G3kp3J2kmjDh%2Bs3EBjqkAU5QEH1KvZ7O5nAICAT7U9SUFQWJBuaXyeDlOnCDeSwg0CSXOj0sculyY1ZHuEdFX9PaVR8Vmb4dcCwS3tpAvqH2Qs3%2FGwAekqknc8C7JHMlEgmN1SdJcYhw3UxWkI0ZfBr%2BoTmXvR14IXw4fsZoMq1yYhoOcW7GMhl5mXyZKDn7CoaY436oMWDK%2F0ygbESKX3FXfceKEixZg%2FMpq0Ydn%2FQ47An2&X-Amz-Signature=cacc82875078478ce514606571326b5049b6be0ecb3e8cce0f93736b85a27599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5VBLZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC1sMl9nQ750DmmO6edk1PAEcdsbzdpwndUiszlqP9CrgIhAI8JfjT9qmFPAmchsh6s2yg6UM%2BXKqtMBG2%2BhAcHtjxvKv8DCHkQABoMNjM3NDIzMTgzODA1Igyt%2BmHY7vmT%2BP2Uk%2Bgq3AOrg3N2PWooWKtRFEw5YAGRJQf%2FFAPr2lQYWDcRzhOD0Fucb4X7eKWYvuzeIgY57u%2BXShlQ8ZLG%2BvKeCxkO0REzCAvb13gfLFxn2fDSLeyjuZhgUTuSakscK0d5QPgsFT21900Bd0FTwWLDRk0cl9mzBcFnPxMbQL4xKhvgFuSWZ%2FZgqztc8IUdgF0ELOhKtspjWXbbvenjHCxiHPs%2F8in1ZE%2B3laFq%2BPJQOEScThIX9592FSvNVY7Z1rxdt%2F5xIzPnrpB8NT8MQl%2BUJodJf3Ohbpu7os%2F5ClBGZav5ucN3pXuMpjhyRFjTFDy0wj%2FqbeI9AR%2Fc4yAOo6XSYbh7v%2FTcNzFflL8kLx%2FpW6PbUu2EDBMQzy7Yp55t57YAJ%2FR7qfDzgaGrIZKlzn5j9bD3LY351fwPos7pSpPErUSUNq4nDsi5rFhT93dDPTOTgNw4wVQE1kcFD8x%2B%2F9Gxfw6zDP84MqGdExecM7ox92fxLhwhTnmAIpMLneylCt3qYOHVE5VssQ7K6IA8uP%2BbShwAuBkKvNcov6JHIj%2B8N%2Fd7CQoqJVvHFzULM7XGzGHtaaa%2F5TBxSHg%2BaIt6wD%2Ba0vu4F0zYkHfP5E24CjIrugEQHvS5jFZnL%2Ff1G3kp3J2kmjDh%2Bs3EBjqkAU5QEH1KvZ7O5nAICAT7U9SUFQWJBuaXyeDlOnCDeSwg0CSXOj0sculyY1ZHuEdFX9PaVR8Vmb4dcCwS3tpAvqH2Qs3%2FGwAekqknc8C7JHMlEgmN1SdJcYhw3UxWkI0ZfBr%2BoTmXvR14IXw4fsZoMq1yYhoOcW7GMhl5mXyZKDn7CoaY436oMWDK%2F0ygbESKX3FXfceKEixZg%2FMpq0Ydn%2FQ47An2&X-Amz-Signature=bc3a289bc9318987f14543205d84b6a940399a5be021769b9904c8ffed22daad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5VBLZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC1sMl9nQ750DmmO6edk1PAEcdsbzdpwndUiszlqP9CrgIhAI8JfjT9qmFPAmchsh6s2yg6UM%2BXKqtMBG2%2BhAcHtjxvKv8DCHkQABoMNjM3NDIzMTgzODA1Igyt%2BmHY7vmT%2BP2Uk%2Bgq3AOrg3N2PWooWKtRFEw5YAGRJQf%2FFAPr2lQYWDcRzhOD0Fucb4X7eKWYvuzeIgY57u%2BXShlQ8ZLG%2BvKeCxkO0REzCAvb13gfLFxn2fDSLeyjuZhgUTuSakscK0d5QPgsFT21900Bd0FTwWLDRk0cl9mzBcFnPxMbQL4xKhvgFuSWZ%2FZgqztc8IUdgF0ELOhKtspjWXbbvenjHCxiHPs%2F8in1ZE%2B3laFq%2BPJQOEScThIX9592FSvNVY7Z1rxdt%2F5xIzPnrpB8NT8MQl%2BUJodJf3Ohbpu7os%2F5ClBGZav5ucN3pXuMpjhyRFjTFDy0wj%2FqbeI9AR%2Fc4yAOo6XSYbh7v%2FTcNzFflL8kLx%2FpW6PbUu2EDBMQzy7Yp55t57YAJ%2FR7qfDzgaGrIZKlzn5j9bD3LY351fwPos7pSpPErUSUNq4nDsi5rFhT93dDPTOTgNw4wVQE1kcFD8x%2B%2F9Gxfw6zDP84MqGdExecM7ox92fxLhwhTnmAIpMLneylCt3qYOHVE5VssQ7K6IA8uP%2BbShwAuBkKvNcov6JHIj%2B8N%2Fd7CQoqJVvHFzULM7XGzGHtaaa%2F5TBxSHg%2BaIt6wD%2Ba0vu4F0zYkHfP5E24CjIrugEQHvS5jFZnL%2Ff1G3kp3J2kmjDh%2Bs3EBjqkAU5QEH1KvZ7O5nAICAT7U9SUFQWJBuaXyeDlOnCDeSwg0CSXOj0sculyY1ZHuEdFX9PaVR8Vmb4dcCwS3tpAvqH2Qs3%2FGwAekqknc8C7JHMlEgmN1SdJcYhw3UxWkI0ZfBr%2BoTmXvR14IXw4fsZoMq1yYhoOcW7GMhl5mXyZKDn7CoaY436oMWDK%2F0ygbESKX3FXfceKEixZg%2FMpq0Ydn%2FQ47An2&X-Amz-Signature=90835e457fd7089681f67ba7fd3217b00b9c14c24a43389294a754d2055ee9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5VBLZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC1sMl9nQ750DmmO6edk1PAEcdsbzdpwndUiszlqP9CrgIhAI8JfjT9qmFPAmchsh6s2yg6UM%2BXKqtMBG2%2BhAcHtjxvKv8DCHkQABoMNjM3NDIzMTgzODA1Igyt%2BmHY7vmT%2BP2Uk%2Bgq3AOrg3N2PWooWKtRFEw5YAGRJQf%2FFAPr2lQYWDcRzhOD0Fucb4X7eKWYvuzeIgY57u%2BXShlQ8ZLG%2BvKeCxkO0REzCAvb13gfLFxn2fDSLeyjuZhgUTuSakscK0d5QPgsFT21900Bd0FTwWLDRk0cl9mzBcFnPxMbQL4xKhvgFuSWZ%2FZgqztc8IUdgF0ELOhKtspjWXbbvenjHCxiHPs%2F8in1ZE%2B3laFq%2BPJQOEScThIX9592FSvNVY7Z1rxdt%2F5xIzPnrpB8NT8MQl%2BUJodJf3Ohbpu7os%2F5ClBGZav5ucN3pXuMpjhyRFjTFDy0wj%2FqbeI9AR%2Fc4yAOo6XSYbh7v%2FTcNzFflL8kLx%2FpW6PbUu2EDBMQzy7Yp55t57YAJ%2FR7qfDzgaGrIZKlzn5j9bD3LY351fwPos7pSpPErUSUNq4nDsi5rFhT93dDPTOTgNw4wVQE1kcFD8x%2B%2F9Gxfw6zDP84MqGdExecM7ox92fxLhwhTnmAIpMLneylCt3qYOHVE5VssQ7K6IA8uP%2BbShwAuBkKvNcov6JHIj%2B8N%2Fd7CQoqJVvHFzULM7XGzGHtaaa%2F5TBxSHg%2BaIt6wD%2Ba0vu4F0zYkHfP5E24CjIrugEQHvS5jFZnL%2Ff1G3kp3J2kmjDh%2Bs3EBjqkAU5QEH1KvZ7O5nAICAT7U9SUFQWJBuaXyeDlOnCDeSwg0CSXOj0sculyY1ZHuEdFX9PaVR8Vmb4dcCwS3tpAvqH2Qs3%2FGwAekqknc8C7JHMlEgmN1SdJcYhw3UxWkI0ZfBr%2BoTmXvR14IXw4fsZoMq1yYhoOcW7GMhl5mXyZKDn7CoaY436oMWDK%2F0ygbESKX3FXfceKEixZg%2FMpq0Ydn%2FQ47An2&X-Amz-Signature=7f85270270ac7056d4db4d68d20a095eb0237f9825ba3d96b81c2dfa2817f740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5VBLZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC1sMl9nQ750DmmO6edk1PAEcdsbzdpwndUiszlqP9CrgIhAI8JfjT9qmFPAmchsh6s2yg6UM%2BXKqtMBG2%2BhAcHtjxvKv8DCHkQABoMNjM3NDIzMTgzODA1Igyt%2BmHY7vmT%2BP2Uk%2Bgq3AOrg3N2PWooWKtRFEw5YAGRJQf%2FFAPr2lQYWDcRzhOD0Fucb4X7eKWYvuzeIgY57u%2BXShlQ8ZLG%2BvKeCxkO0REzCAvb13gfLFxn2fDSLeyjuZhgUTuSakscK0d5QPgsFT21900Bd0FTwWLDRk0cl9mzBcFnPxMbQL4xKhvgFuSWZ%2FZgqztc8IUdgF0ELOhKtspjWXbbvenjHCxiHPs%2F8in1ZE%2B3laFq%2BPJQOEScThIX9592FSvNVY7Z1rxdt%2F5xIzPnrpB8NT8MQl%2BUJodJf3Ohbpu7os%2F5ClBGZav5ucN3pXuMpjhyRFjTFDy0wj%2FqbeI9AR%2Fc4yAOo6XSYbh7v%2FTcNzFflL8kLx%2FpW6PbUu2EDBMQzy7Yp55t57YAJ%2FR7qfDzgaGrIZKlzn5j9bD3LY351fwPos7pSpPErUSUNq4nDsi5rFhT93dDPTOTgNw4wVQE1kcFD8x%2B%2F9Gxfw6zDP84MqGdExecM7ox92fxLhwhTnmAIpMLneylCt3qYOHVE5VssQ7K6IA8uP%2BbShwAuBkKvNcov6JHIj%2B8N%2Fd7CQoqJVvHFzULM7XGzGHtaaa%2F5TBxSHg%2BaIt6wD%2Ba0vu4F0zYkHfP5E24CjIrugEQHvS5jFZnL%2Ff1G3kp3J2kmjDh%2Bs3EBjqkAU5QEH1KvZ7O5nAICAT7U9SUFQWJBuaXyeDlOnCDeSwg0CSXOj0sculyY1ZHuEdFX9PaVR8Vmb4dcCwS3tpAvqH2Qs3%2FGwAekqknc8C7JHMlEgmN1SdJcYhw3UxWkI0ZfBr%2BoTmXvR14IXw4fsZoMq1yYhoOcW7GMhl5mXyZKDn7CoaY436oMWDK%2F0ygbESKX3FXfceKEixZg%2FMpq0Ydn%2FQ47An2&X-Amz-Signature=6d5166f7fb529ecf620469e76771874fe78ae9b13d954fa2c57fe7bf6809447c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5VBLZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC1sMl9nQ750DmmO6edk1PAEcdsbzdpwndUiszlqP9CrgIhAI8JfjT9qmFPAmchsh6s2yg6UM%2BXKqtMBG2%2BhAcHtjxvKv8DCHkQABoMNjM3NDIzMTgzODA1Igyt%2BmHY7vmT%2BP2Uk%2Bgq3AOrg3N2PWooWKtRFEw5YAGRJQf%2FFAPr2lQYWDcRzhOD0Fucb4X7eKWYvuzeIgY57u%2BXShlQ8ZLG%2BvKeCxkO0REzCAvb13gfLFxn2fDSLeyjuZhgUTuSakscK0d5QPgsFT21900Bd0FTwWLDRk0cl9mzBcFnPxMbQL4xKhvgFuSWZ%2FZgqztc8IUdgF0ELOhKtspjWXbbvenjHCxiHPs%2F8in1ZE%2B3laFq%2BPJQOEScThIX9592FSvNVY7Z1rxdt%2F5xIzPnrpB8NT8MQl%2BUJodJf3Ohbpu7os%2F5ClBGZav5ucN3pXuMpjhyRFjTFDy0wj%2FqbeI9AR%2Fc4yAOo6XSYbh7v%2FTcNzFflL8kLx%2FpW6PbUu2EDBMQzy7Yp55t57YAJ%2FR7qfDzgaGrIZKlzn5j9bD3LY351fwPos7pSpPErUSUNq4nDsi5rFhT93dDPTOTgNw4wVQE1kcFD8x%2B%2F9Gxfw6zDP84MqGdExecM7ox92fxLhwhTnmAIpMLneylCt3qYOHVE5VssQ7K6IA8uP%2BbShwAuBkKvNcov6JHIj%2B8N%2Fd7CQoqJVvHFzULM7XGzGHtaaa%2F5TBxSHg%2BaIt6wD%2Ba0vu4F0zYkHfP5E24CjIrugEQHvS5jFZnL%2Ff1G3kp3J2kmjDh%2Bs3EBjqkAU5QEH1KvZ7O5nAICAT7U9SUFQWJBuaXyeDlOnCDeSwg0CSXOj0sculyY1ZHuEdFX9PaVR8Vmb4dcCwS3tpAvqH2Qs3%2FGwAekqknc8C7JHMlEgmN1SdJcYhw3UxWkI0ZfBr%2BoTmXvR14IXw4fsZoMq1yYhoOcW7GMhl5mXyZKDn7CoaY436oMWDK%2F0ygbESKX3FXfceKEixZg%2FMpq0Ydn%2FQ47An2&X-Amz-Signature=4edda751072f9b957d37535f4de39c9fde0658709daae1d2e8b427ec373d109b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

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

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5VBLZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC1sMl9nQ750DmmO6edk1PAEcdsbzdpwndUiszlqP9CrgIhAI8JfjT9qmFPAmchsh6s2yg6UM%2BXKqtMBG2%2BhAcHtjxvKv8DCHkQABoMNjM3NDIzMTgzODA1Igyt%2BmHY7vmT%2BP2Uk%2Bgq3AOrg3N2PWooWKtRFEw5YAGRJQf%2FFAPr2lQYWDcRzhOD0Fucb4X7eKWYvuzeIgY57u%2BXShlQ8ZLG%2BvKeCxkO0REzCAvb13gfLFxn2fDSLeyjuZhgUTuSakscK0d5QPgsFT21900Bd0FTwWLDRk0cl9mzBcFnPxMbQL4xKhvgFuSWZ%2FZgqztc8IUdgF0ELOhKtspjWXbbvenjHCxiHPs%2F8in1ZE%2B3laFq%2BPJQOEScThIX9592FSvNVY7Z1rxdt%2F5xIzPnrpB8NT8MQl%2BUJodJf3Ohbpu7os%2F5ClBGZav5ucN3pXuMpjhyRFjTFDy0wj%2FqbeI9AR%2Fc4yAOo6XSYbh7v%2FTcNzFflL8kLx%2FpW6PbUu2EDBMQzy7Yp55t57YAJ%2FR7qfDzgaGrIZKlzn5j9bD3LY351fwPos7pSpPErUSUNq4nDsi5rFhT93dDPTOTgNw4wVQE1kcFD8x%2B%2F9Gxfw6zDP84MqGdExecM7ox92fxLhwhTnmAIpMLneylCt3qYOHVE5VssQ7K6IA8uP%2BbShwAuBkKvNcov6JHIj%2B8N%2Fd7CQoqJVvHFzULM7XGzGHtaaa%2F5TBxSHg%2BaIt6wD%2Ba0vu4F0zYkHfP5E24CjIrugEQHvS5jFZnL%2Ff1G3kp3J2kmjDh%2Bs3EBjqkAU5QEH1KvZ7O5nAICAT7U9SUFQWJBuaXyeDlOnCDeSwg0CSXOj0sculyY1ZHuEdFX9PaVR8Vmb4dcCwS3tpAvqH2Qs3%2FGwAekqknc8C7JHMlEgmN1SdJcYhw3UxWkI0ZfBr%2BoTmXvR14IXw4fsZoMq1yYhoOcW7GMhl5mXyZKDn7CoaY436oMWDK%2F0ygbESKX3FXfceKEixZg%2FMpq0Ydn%2FQ47An2&X-Amz-Signature=14628b3815c3d052ed275958f18e6af3ac8e0f08855ee957ef378ec3a7c23ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5VBLZP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC1sMl9nQ750DmmO6edk1PAEcdsbzdpwndUiszlqP9CrgIhAI8JfjT9qmFPAmchsh6s2yg6UM%2BXKqtMBG2%2BhAcHtjxvKv8DCHkQABoMNjM3NDIzMTgzODA1Igyt%2BmHY7vmT%2BP2Uk%2Bgq3AOrg3N2PWooWKtRFEw5YAGRJQf%2FFAPr2lQYWDcRzhOD0Fucb4X7eKWYvuzeIgY57u%2BXShlQ8ZLG%2BvKeCxkO0REzCAvb13gfLFxn2fDSLeyjuZhgUTuSakscK0d5QPgsFT21900Bd0FTwWLDRk0cl9mzBcFnPxMbQL4xKhvgFuSWZ%2FZgqztc8IUdgF0ELOhKtspjWXbbvenjHCxiHPs%2F8in1ZE%2B3laFq%2BPJQOEScThIX9592FSvNVY7Z1rxdt%2F5xIzPnrpB8NT8MQl%2BUJodJf3Ohbpu7os%2F5ClBGZav5ucN3pXuMpjhyRFjTFDy0wj%2FqbeI9AR%2Fc4yAOo6XSYbh7v%2FTcNzFflL8kLx%2FpW6PbUu2EDBMQzy7Yp55t57YAJ%2FR7qfDzgaGrIZKlzn5j9bD3LY351fwPos7pSpPErUSUNq4nDsi5rFhT93dDPTOTgNw4wVQE1kcFD8x%2B%2F9Gxfw6zDP84MqGdExecM7ox92fxLhwhTnmAIpMLneylCt3qYOHVE5VssQ7K6IA8uP%2BbShwAuBkKvNcov6JHIj%2B8N%2Fd7CQoqJVvHFzULM7XGzGHtaaa%2F5TBxSHg%2BaIt6wD%2Ba0vu4F0zYkHfP5E24CjIrugEQHvS5jFZnL%2Ff1G3kp3J2kmjDh%2Bs3EBjqkAU5QEH1KvZ7O5nAICAT7U9SUFQWJBuaXyeDlOnCDeSwg0CSXOj0sculyY1ZHuEdFX9PaVR8Vmb4dcCwS3tpAvqH2Qs3%2FGwAekqknc8C7JHMlEgmN1SdJcYhw3UxWkI0ZfBr%2BoTmXvR14IXw4fsZoMq1yYhoOcW7GMhl5mXyZKDn7CoaY436oMWDK%2F0ygbESKX3FXfceKEixZg%2FMpq0Ydn%2FQ47An2&X-Amz-Signature=bc3a289bc9318987f14543205d84b6a940399a5be021769b9904c8ffed22daad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
