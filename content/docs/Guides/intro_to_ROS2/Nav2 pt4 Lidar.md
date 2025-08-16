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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635OISA42%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBA5WeMryr%2FHgyaDhLnNB4a8ndtwooOBHLX8i5clg3hdAiApRilIYK2uaOub3xecLrsIk89bEs%2F47UhvRg%2F5f0NFcCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM3EwDTLa2KT%2FIHjj6KtwDAymTEw88BpRk%2BI93hDk5oHE3%2Baw%2B5rB3fXLA91GIZURp8ZwlLV8XlEE2unz5QLiDHQOb5NfVdhq5MJO3M2NZu3GOsIt4VXhIa%2FJZZsQgyTvbWzHNyzBKWwydW08TZW8e16JTrKrl%2FEtrubZgh2D3fo3xDlqOBf8t1l0hof3c4hCtDchqotoRDHGKLPx9Qs4qVCFD9wWyktMn5SSI%2FjNAKlEL%2FlS4%2Fdr9r3say%2BwUpZ9iCQZhZMy4NqUB07DSSxTDiAl%2BZvHwkpwlhnGjCYYXXFFKxBYlABMD7FLwpJVmwUR4cHwUMefM9s2C3bQ5tngTWPk%2FkqDhaFGG6Lw9l2pA6%2Brolq6oTf1oHI%2BnXUgUa7uvaB0ps%2BbPcDLsDLfKKLF8NnbN9qn6vAt%2FGE3%2FpiQ0B8uYDViPeA0Vl3nYzKMmRZVK4A5yxyJXCQU87JhkT3nJLH1US1eSxskSteEpm0ADCG3gRjzQ03%2BDynMR6o4xAvGxptOysjOyAfnSQli4A1Nhdd53PXWgQjYJOwqoa0qRdxRVA8xie9Tr16jxPfqzln87uNxskMuWJM9WFf4dU4qN%2BYW8NiWOJHXZ0SFejAOj1D5nGUPiWEiqkHM2jxVIGcrZo%2BAVjYquaZDgHUIw9Nf%2BxAY6pgGrb1FkHYMYVCyhBEA1aKhaPscHn3r9jY2czJNLw%2BD52gI469lXjp4IfPxKr1XRlpKx5XEPdRygRRZ1VmST9RVy%2BkBIV3Q6B5wm2pvzTGCEqAgxJe2Yi8d269OShOd5NkOh%2BD%2FRSxX9YueYaO4RWdrAkQLylrHp4SYhaKU3mAlQYnScQu0eQkkfmHdf%2BNm7WzV5N0woNwwYZtNTh13x%2B%2BD%2FbDm%2BKVZX&X-Amz-Signature=6f3e82713878086a0e687fb7f2f113c413457bd881eb36a0459ca2deb9ab1c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=d5b3c33ab2672d4b79eebe7226a9676e88e2691cc8681f02c9370d2a845642c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=21d6c99cebcf1c5e8dc6049b6379df23cc3681579ca722a040b0f60d9c8e6259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=c49e98e45a0efe75f3b6c9eacaca01c0ef3fdf8f6dec0f5df2f83d11e5a1bd3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=39d911c109b977536a93cc12fc9e48c17186f7627e047eed3bf420e0fa619247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=003a2c4977c9888770de2f7c026f887442e18bcb0027da1cb2564de3d2c6bbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=8d08a4724675518b2f7c3d027fe9c24ba26dc7c3b4daea7489bfd39dfd7d0309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=5fd5c9a80f87ea746340f78a3dfaae70b75559628d06e96465411a59e730bc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=46372d4f6ad9bdf574e0843673a563f3d0268af0d66504ffb274f88d71413ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=d2effb7ac84a6134d2804a4899ac2ba5f543191dfeede2899c2be7e5bf9a12dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=6f614e7043029a00be5db75d1cfc96ed72a996ade5268f3607f88c4e8ae8f2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
