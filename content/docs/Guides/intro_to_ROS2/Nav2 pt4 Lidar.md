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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FGTJBAB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD%2ByHyVtKUda9Nl9GW7qgEeYfboyQwuDqSGAtxWKeQ4YgIhAIG6X%2F44D%2Bf4T7uoPcqu8gCywECpFNlHDJ26IGw2of%2FmKv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2BrCKwzF22rEHUHtYq3AO6T1UgiW03uLYPILilMhlLz88zAXbekFj15lMS0Q4mbc3xlIcILWZndfKno1IhiKBWPjDdIakJFaZ7Z5iz4KoRDBmy7UqBeN%2Fd1m%2BqYoITl%2FKZX%2FjSjL7pm3RlztY9tgLmnyovnQo4JfrgsXrsGipKBkcJnXhuHG2utgR3NLP00vvmgGmkFXAiot8PEfNxoTtn8n4%2B%2F2c2HlxwHCzR7z%2BcauhpIHR%2BqBqsO7NyH%2FZTyBS1yVRJpX4Jz%2BEEQ%2BlZo5BTnh%2F9kWEnVTfk9bq1Ej6syRdM%2BeJmFK8GvwxcIj%2FHB4%2FP34nEQ9GJUCTVdCmdpOqJC4M2Qz7jptUxm1%2B0CgtEcNXjBOKKsM4kL4wjNP3YJK6JrZHoYVXEYwvcqIs%2F3L04AkIs%2BHOVajoQ2diqqQy%2B9LiBQ2faXpbBVRNgAFQLk39J9dgxGBDjKCIr%2BbOp5oO2dFEtHJoJYbvDuVmvVsqxvwa%2BvTaSYaqtDroXOgiKmTxnmBOHpVaCLQgrTLqdnPW%2BydNBADQOhMFGbN1aqe8ITyuxyc2NscOJtZAx7N6yK%2BLJcwMvoyQ%2FFMxqcJz3bCWvqiXDnjH9fWB9HzNBo6dBxro9Hr076rXg%2Bd3d9EPXEF3doT9%2FzJfcBZBYnjD08ezRBjqkAQYK56y53GH%2FVgceR4eZBllVBgKzSA3EFY5%2BnhrIQYRMFac1PdfK1bBOzdgOIcG4WFt3BcSO4uZimKPB3Mh3ueURdAdyLqGNquLuKlbikoMm7kxxBnKE%2BiOLKSXf8uo28La3b1cB5M1DXn83Vk8g5m%2FpXOB0MD%2B11cwmg8B4tRKRabGowxQf8lR3%2F4yggfZ3pMBB9D7YXAJ8llsdvU5WnRXxRnAV&X-Amz-Signature=ccfd6a48f7c0434eb66d54bdd53a7e72fad746817c087b73c92b431bb8911d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COVLNOB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQClJBhVXx1oIWnwGVM9zAcxLGRDuUBDjXE7jQBQce0hkAIgSxw%2F4IGFGfrT4%2B%2BHP66p9TGVy3zs7Emcf7yMWBDdWbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIUteLlTWY4nLFwIwyrcAyq5hfYYy9aPuMq3rvpd5ftEhVvYcJCK5aiOmyONB55Ud%2FvmpdYHc%2BDpBE1ZHMcLfMvr4rErxiWEAceIUs5S0hJ28m3jxpSBhv7YMR5RoRptgzHMTgeClM%2FMouvUCSOPCK22JCE0j4oTQhcjT0yUqVIOqNw1ch4xEiji1tKdnFLqzPMuBbaGrMresz3vP4kHx%2F1LVZZ1zZS3ReCNP4FyayUmeU800%2BnDC%2BGMdD8ywxtNO8J4LSuc3q93mRNKjq49Q40OL%2BgS8JBnofIlwnhOr52YNp7cozHZ9FWLlzCyfUOXOmDJ%2F0yPlce80PKXXGGapLwW%2Fo4LV1%2Bq5Q7fvc86D9pyTTqfdxZTxeXc6S5LDtHAqhaoz6K%2FErtdEj6EXC39vlyccABf5nK9J43twXNHFheOkhhyOVyHrXu2c2LNTlBwWlnp3nzo2vxTINOhcO7Js255saoSp7ydTk4ISQ1JaQebfws8RN8ceFN7QygjdN8d%2BxDNx5LZoSlysv%2BcHKa7pBXxXTG3A37N8fz3qfc%2BQIWoZ9zdaiPo2S%2BDVAqzffd4eIM%2FLgjsxT%2FKlsgCZRCFvn9dt8CDC9bJ4WsLu9qFVKLLDjlTv26Y5IDF0H%2BS9oHvB1Yu3l9t6Qn7ipH4MJry7NEGOqUB26BxLIzYfYykLU6fBVsI0ev8ni%2FUJx5%2FIEyMWS0gWbHzvV7Kzo3tmzy%2BTQIqEkR9V%2BCo2fMhr2qO1%2B78rAMYd%2F6PfmZqgAuMylUuk3sg1K%2FnIfLEiRYeUsavh99UB3fAYS%2BZw3L7Q%2B2SvfVln0fNK5SQORpthFh1ZGpsrxeZ6%2FnEIdBnWXnymq1mKnhW1z2vcrB0w3K4dpEzBJ%2FZJWTTa6P7g93H&X-Amz-Signature=7bfdf29e89b1beae64907b62babd7640064faa2d243ea6e754b6459378d3e2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COVLNOB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQClJBhVXx1oIWnwGVM9zAcxLGRDuUBDjXE7jQBQce0hkAIgSxw%2F4IGFGfrT4%2B%2BHP66p9TGVy3zs7Emcf7yMWBDdWbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIUteLlTWY4nLFwIwyrcAyq5hfYYy9aPuMq3rvpd5ftEhVvYcJCK5aiOmyONB55Ud%2FvmpdYHc%2BDpBE1ZHMcLfMvr4rErxiWEAceIUs5S0hJ28m3jxpSBhv7YMR5RoRptgzHMTgeClM%2FMouvUCSOPCK22JCE0j4oTQhcjT0yUqVIOqNw1ch4xEiji1tKdnFLqzPMuBbaGrMresz3vP4kHx%2F1LVZZ1zZS3ReCNP4FyayUmeU800%2BnDC%2BGMdD8ywxtNO8J4LSuc3q93mRNKjq49Q40OL%2BgS8JBnofIlwnhOr52YNp7cozHZ9FWLlzCyfUOXOmDJ%2F0yPlce80PKXXGGapLwW%2Fo4LV1%2Bq5Q7fvc86D9pyTTqfdxZTxeXc6S5LDtHAqhaoz6K%2FErtdEj6EXC39vlyccABf5nK9J43twXNHFheOkhhyOVyHrXu2c2LNTlBwWlnp3nzo2vxTINOhcO7Js255saoSp7ydTk4ISQ1JaQebfws8RN8ceFN7QygjdN8d%2BxDNx5LZoSlysv%2BcHKa7pBXxXTG3A37N8fz3qfc%2BQIWoZ9zdaiPo2S%2BDVAqzffd4eIM%2FLgjsxT%2FKlsgCZRCFvn9dt8CDC9bJ4WsLu9qFVKLLDjlTv26Y5IDF0H%2BS9oHvB1Yu3l9t6Qn7ipH4MJry7NEGOqUB26BxLIzYfYykLU6fBVsI0ev8ni%2FUJx5%2FIEyMWS0gWbHzvV7Kzo3tmzy%2BTQIqEkR9V%2BCo2fMhr2qO1%2B78rAMYd%2F6PfmZqgAuMylUuk3sg1K%2FnIfLEiRYeUsavh99UB3fAYS%2BZw3L7Q%2B2SvfVln0fNK5SQORpthFh1ZGpsrxeZ6%2FnEIdBnWXnymq1mKnhW1z2vcrB0w3K4dpEzBJ%2FZJWTTa6P7g93H&X-Amz-Signature=9889f80426f889c930e479d90e15138d7c5f8bcd78f3bd614a7fd8ad5701ff23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COVLNOB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQClJBhVXx1oIWnwGVM9zAcxLGRDuUBDjXE7jQBQce0hkAIgSxw%2F4IGFGfrT4%2B%2BHP66p9TGVy3zs7Emcf7yMWBDdWbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIUteLlTWY4nLFwIwyrcAyq5hfYYy9aPuMq3rvpd5ftEhVvYcJCK5aiOmyONB55Ud%2FvmpdYHc%2BDpBE1ZHMcLfMvr4rErxiWEAceIUs5S0hJ28m3jxpSBhv7YMR5RoRptgzHMTgeClM%2FMouvUCSOPCK22JCE0j4oTQhcjT0yUqVIOqNw1ch4xEiji1tKdnFLqzPMuBbaGrMresz3vP4kHx%2F1LVZZ1zZS3ReCNP4FyayUmeU800%2BnDC%2BGMdD8ywxtNO8J4LSuc3q93mRNKjq49Q40OL%2BgS8JBnofIlwnhOr52YNp7cozHZ9FWLlzCyfUOXOmDJ%2F0yPlce80PKXXGGapLwW%2Fo4LV1%2Bq5Q7fvc86D9pyTTqfdxZTxeXc6S5LDtHAqhaoz6K%2FErtdEj6EXC39vlyccABf5nK9J43twXNHFheOkhhyOVyHrXu2c2LNTlBwWlnp3nzo2vxTINOhcO7Js255saoSp7ydTk4ISQ1JaQebfws8RN8ceFN7QygjdN8d%2BxDNx5LZoSlysv%2BcHKa7pBXxXTG3A37N8fz3qfc%2BQIWoZ9zdaiPo2S%2BDVAqzffd4eIM%2FLgjsxT%2FKlsgCZRCFvn9dt8CDC9bJ4WsLu9qFVKLLDjlTv26Y5IDF0H%2BS9oHvB1Yu3l9t6Qn7ipH4MJry7NEGOqUB26BxLIzYfYykLU6fBVsI0ev8ni%2FUJx5%2FIEyMWS0gWbHzvV7Kzo3tmzy%2BTQIqEkR9V%2BCo2fMhr2qO1%2B78rAMYd%2F6PfmZqgAuMylUuk3sg1K%2FnIfLEiRYeUsavh99UB3fAYS%2BZw3L7Q%2B2SvfVln0fNK5SQORpthFh1ZGpsrxeZ6%2FnEIdBnWXnymq1mKnhW1z2vcrB0w3K4dpEzBJ%2FZJWTTa6P7g93H&X-Amz-Signature=8fea4dbf48b0b7cfcd6d62f1ed26801a3e973b0ca90c98139fc91680ff000cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COVLNOB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQClJBhVXx1oIWnwGVM9zAcxLGRDuUBDjXE7jQBQce0hkAIgSxw%2F4IGFGfrT4%2B%2BHP66p9TGVy3zs7Emcf7yMWBDdWbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIUteLlTWY4nLFwIwyrcAyq5hfYYy9aPuMq3rvpd5ftEhVvYcJCK5aiOmyONB55Ud%2FvmpdYHc%2BDpBE1ZHMcLfMvr4rErxiWEAceIUs5S0hJ28m3jxpSBhv7YMR5RoRptgzHMTgeClM%2FMouvUCSOPCK22JCE0j4oTQhcjT0yUqVIOqNw1ch4xEiji1tKdnFLqzPMuBbaGrMresz3vP4kHx%2F1LVZZ1zZS3ReCNP4FyayUmeU800%2BnDC%2BGMdD8ywxtNO8J4LSuc3q93mRNKjq49Q40OL%2BgS8JBnofIlwnhOr52YNp7cozHZ9FWLlzCyfUOXOmDJ%2F0yPlce80PKXXGGapLwW%2Fo4LV1%2Bq5Q7fvc86D9pyTTqfdxZTxeXc6S5LDtHAqhaoz6K%2FErtdEj6EXC39vlyccABf5nK9J43twXNHFheOkhhyOVyHrXu2c2LNTlBwWlnp3nzo2vxTINOhcO7Js255saoSp7ydTk4ISQ1JaQebfws8RN8ceFN7QygjdN8d%2BxDNx5LZoSlysv%2BcHKa7pBXxXTG3A37N8fz3qfc%2BQIWoZ9zdaiPo2S%2BDVAqzffd4eIM%2FLgjsxT%2FKlsgCZRCFvn9dt8CDC9bJ4WsLu9qFVKLLDjlTv26Y5IDF0H%2BS9oHvB1Yu3l9t6Qn7ipH4MJry7NEGOqUB26BxLIzYfYykLU6fBVsI0ev8ni%2FUJx5%2FIEyMWS0gWbHzvV7Kzo3tmzy%2BTQIqEkR9V%2BCo2fMhr2qO1%2B78rAMYd%2F6PfmZqgAuMylUuk3sg1K%2FnIfLEiRYeUsavh99UB3fAYS%2BZw3L7Q%2B2SvfVln0fNK5SQORpthFh1ZGpsrxeZ6%2FnEIdBnWXnymq1mKnhW1z2vcrB0w3K4dpEzBJ%2FZJWTTa6P7g93H&X-Amz-Signature=f3f0bae4f402c08a466dfd4d49a71b94ddb7d0d561d11e01d8d4bc8f36cc777e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COVLNOB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQClJBhVXx1oIWnwGVM9zAcxLGRDuUBDjXE7jQBQce0hkAIgSxw%2F4IGFGfrT4%2B%2BHP66p9TGVy3zs7Emcf7yMWBDdWbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIUteLlTWY4nLFwIwyrcAyq5hfYYy9aPuMq3rvpd5ftEhVvYcJCK5aiOmyONB55Ud%2FvmpdYHc%2BDpBE1ZHMcLfMvr4rErxiWEAceIUs5S0hJ28m3jxpSBhv7YMR5RoRptgzHMTgeClM%2FMouvUCSOPCK22JCE0j4oTQhcjT0yUqVIOqNw1ch4xEiji1tKdnFLqzPMuBbaGrMresz3vP4kHx%2F1LVZZ1zZS3ReCNP4FyayUmeU800%2BnDC%2BGMdD8ywxtNO8J4LSuc3q93mRNKjq49Q40OL%2BgS8JBnofIlwnhOr52YNp7cozHZ9FWLlzCyfUOXOmDJ%2F0yPlce80PKXXGGapLwW%2Fo4LV1%2Bq5Q7fvc86D9pyTTqfdxZTxeXc6S5LDtHAqhaoz6K%2FErtdEj6EXC39vlyccABf5nK9J43twXNHFheOkhhyOVyHrXu2c2LNTlBwWlnp3nzo2vxTINOhcO7Js255saoSp7ydTk4ISQ1JaQebfws8RN8ceFN7QygjdN8d%2BxDNx5LZoSlysv%2BcHKa7pBXxXTG3A37N8fz3qfc%2BQIWoZ9zdaiPo2S%2BDVAqzffd4eIM%2FLgjsxT%2FKlsgCZRCFvn9dt8CDC9bJ4WsLu9qFVKLLDjlTv26Y5IDF0H%2BS9oHvB1Yu3l9t6Qn7ipH4MJry7NEGOqUB26BxLIzYfYykLU6fBVsI0ev8ni%2FUJx5%2FIEyMWS0gWbHzvV7Kzo3tmzy%2BTQIqEkR9V%2BCo2fMhr2qO1%2B78rAMYd%2F6PfmZqgAuMylUuk3sg1K%2FnIfLEiRYeUsavh99UB3fAYS%2BZw3L7Q%2B2SvfVln0fNK5SQORpthFh1ZGpsrxeZ6%2FnEIdBnWXnymq1mKnhW1z2vcrB0w3K4dpEzBJ%2FZJWTTa6P7g93H&X-Amz-Signature=f4bbaa14681d99613e4d43149376cb40d01ea57efd1f4c5a778c84c618932f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COVLNOB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQClJBhVXx1oIWnwGVM9zAcxLGRDuUBDjXE7jQBQce0hkAIgSxw%2F4IGFGfrT4%2B%2BHP66p9TGVy3zs7Emcf7yMWBDdWbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIUteLlTWY4nLFwIwyrcAyq5hfYYy9aPuMq3rvpd5ftEhVvYcJCK5aiOmyONB55Ud%2FvmpdYHc%2BDpBE1ZHMcLfMvr4rErxiWEAceIUs5S0hJ28m3jxpSBhv7YMR5RoRptgzHMTgeClM%2FMouvUCSOPCK22JCE0j4oTQhcjT0yUqVIOqNw1ch4xEiji1tKdnFLqzPMuBbaGrMresz3vP4kHx%2F1LVZZ1zZS3ReCNP4FyayUmeU800%2BnDC%2BGMdD8ywxtNO8J4LSuc3q93mRNKjq49Q40OL%2BgS8JBnofIlwnhOr52YNp7cozHZ9FWLlzCyfUOXOmDJ%2F0yPlce80PKXXGGapLwW%2Fo4LV1%2Bq5Q7fvc86D9pyTTqfdxZTxeXc6S5LDtHAqhaoz6K%2FErtdEj6EXC39vlyccABf5nK9J43twXNHFheOkhhyOVyHrXu2c2LNTlBwWlnp3nzo2vxTINOhcO7Js255saoSp7ydTk4ISQ1JaQebfws8RN8ceFN7QygjdN8d%2BxDNx5LZoSlysv%2BcHKa7pBXxXTG3A37N8fz3qfc%2BQIWoZ9zdaiPo2S%2BDVAqzffd4eIM%2FLgjsxT%2FKlsgCZRCFvn9dt8CDC9bJ4WsLu9qFVKLLDjlTv26Y5IDF0H%2BS9oHvB1Yu3l9t6Qn7ipH4MJry7NEGOqUB26BxLIzYfYykLU6fBVsI0ev8ni%2FUJx5%2FIEyMWS0gWbHzvV7Kzo3tmzy%2BTQIqEkR9V%2BCo2fMhr2qO1%2B78rAMYd%2F6PfmZqgAuMylUuk3sg1K%2FnIfLEiRYeUsavh99UB3fAYS%2BZw3L7Q%2B2SvfVln0fNK5SQORpthFh1ZGpsrxeZ6%2FnEIdBnWXnymq1mKnhW1z2vcrB0w3K4dpEzBJ%2FZJWTTa6P7g93H&X-Amz-Signature=8c375af01750df6de5d2c6211e755ed9b51759c79b54aaf39e91ab0ea365d8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COVLNOB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQClJBhVXx1oIWnwGVM9zAcxLGRDuUBDjXE7jQBQce0hkAIgSxw%2F4IGFGfrT4%2B%2BHP66p9TGVy3zs7Emcf7yMWBDdWbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIUteLlTWY4nLFwIwyrcAyq5hfYYy9aPuMq3rvpd5ftEhVvYcJCK5aiOmyONB55Ud%2FvmpdYHc%2BDpBE1ZHMcLfMvr4rErxiWEAceIUs5S0hJ28m3jxpSBhv7YMR5RoRptgzHMTgeClM%2FMouvUCSOPCK22JCE0j4oTQhcjT0yUqVIOqNw1ch4xEiji1tKdnFLqzPMuBbaGrMresz3vP4kHx%2F1LVZZ1zZS3ReCNP4FyayUmeU800%2BnDC%2BGMdD8ywxtNO8J4LSuc3q93mRNKjq49Q40OL%2BgS8JBnofIlwnhOr52YNp7cozHZ9FWLlzCyfUOXOmDJ%2F0yPlce80PKXXGGapLwW%2Fo4LV1%2Bq5Q7fvc86D9pyTTqfdxZTxeXc6S5LDtHAqhaoz6K%2FErtdEj6EXC39vlyccABf5nK9J43twXNHFheOkhhyOVyHrXu2c2LNTlBwWlnp3nzo2vxTINOhcO7Js255saoSp7ydTk4ISQ1JaQebfws8RN8ceFN7QygjdN8d%2BxDNx5LZoSlysv%2BcHKa7pBXxXTG3A37N8fz3qfc%2BQIWoZ9zdaiPo2S%2BDVAqzffd4eIM%2FLgjsxT%2FKlsgCZRCFvn9dt8CDC9bJ4WsLu9qFVKLLDjlTv26Y5IDF0H%2BS9oHvB1Yu3l9t6Qn7ipH4MJry7NEGOqUB26BxLIzYfYykLU6fBVsI0ev8ni%2FUJx5%2FIEyMWS0gWbHzvV7Kzo3tmzy%2BTQIqEkR9V%2BCo2fMhr2qO1%2B78rAMYd%2F6PfmZqgAuMylUuk3sg1K%2FnIfLEiRYeUsavh99UB3fAYS%2BZw3L7Q%2B2SvfVln0fNK5SQORpthFh1ZGpsrxeZ6%2FnEIdBnWXnymq1mKnhW1z2vcrB0w3K4dpEzBJ%2FZJWTTa6P7g93H&X-Amz-Signature=b5c57d67ccfe6e23ea2c40ad8816f750e11ac3b817f7f9220f34db56d39a75d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COVLNOB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQClJBhVXx1oIWnwGVM9zAcxLGRDuUBDjXE7jQBQce0hkAIgSxw%2F4IGFGfrT4%2B%2BHP66p9TGVy3zs7Emcf7yMWBDdWbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIUteLlTWY4nLFwIwyrcAyq5hfYYy9aPuMq3rvpd5ftEhVvYcJCK5aiOmyONB55Ud%2FvmpdYHc%2BDpBE1ZHMcLfMvr4rErxiWEAceIUs5S0hJ28m3jxpSBhv7YMR5RoRptgzHMTgeClM%2FMouvUCSOPCK22JCE0j4oTQhcjT0yUqVIOqNw1ch4xEiji1tKdnFLqzPMuBbaGrMresz3vP4kHx%2F1LVZZ1zZS3ReCNP4FyayUmeU800%2BnDC%2BGMdD8ywxtNO8J4LSuc3q93mRNKjq49Q40OL%2BgS8JBnofIlwnhOr52YNp7cozHZ9FWLlzCyfUOXOmDJ%2F0yPlce80PKXXGGapLwW%2Fo4LV1%2Bq5Q7fvc86D9pyTTqfdxZTxeXc6S5LDtHAqhaoz6K%2FErtdEj6EXC39vlyccABf5nK9J43twXNHFheOkhhyOVyHrXu2c2LNTlBwWlnp3nzo2vxTINOhcO7Js255saoSp7ydTk4ISQ1JaQebfws8RN8ceFN7QygjdN8d%2BxDNx5LZoSlysv%2BcHKa7pBXxXTG3A37N8fz3qfc%2BQIWoZ9zdaiPo2S%2BDVAqzffd4eIM%2FLgjsxT%2FKlsgCZRCFvn9dt8CDC9bJ4WsLu9qFVKLLDjlTv26Y5IDF0H%2BS9oHvB1Yu3l9t6Qn7ipH4MJry7NEGOqUB26BxLIzYfYykLU6fBVsI0ev8ni%2FUJx5%2FIEyMWS0gWbHzvV7Kzo3tmzy%2BTQIqEkR9V%2BCo2fMhr2qO1%2B78rAMYd%2F6PfmZqgAuMylUuk3sg1K%2FnIfLEiRYeUsavh99UB3fAYS%2BZw3L7Q%2B2SvfVln0fNK5SQORpthFh1ZGpsrxeZ6%2FnEIdBnWXnymq1mKnhW1z2vcrB0w3K4dpEzBJ%2FZJWTTa6P7g93H&X-Amz-Signature=3b6b073fb243b0a6232761505f615e3bf3895a8f0460795e85ee5c13daf52cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COVLNOB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQClJBhVXx1oIWnwGVM9zAcxLGRDuUBDjXE7jQBQce0hkAIgSxw%2F4IGFGfrT4%2B%2BHP66p9TGVy3zs7Emcf7yMWBDdWbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIUteLlTWY4nLFwIwyrcAyq5hfYYy9aPuMq3rvpd5ftEhVvYcJCK5aiOmyONB55Ud%2FvmpdYHc%2BDpBE1ZHMcLfMvr4rErxiWEAceIUs5S0hJ28m3jxpSBhv7YMR5RoRptgzHMTgeClM%2FMouvUCSOPCK22JCE0j4oTQhcjT0yUqVIOqNw1ch4xEiji1tKdnFLqzPMuBbaGrMresz3vP4kHx%2F1LVZZ1zZS3ReCNP4FyayUmeU800%2BnDC%2BGMdD8ywxtNO8J4LSuc3q93mRNKjq49Q40OL%2BgS8JBnofIlwnhOr52YNp7cozHZ9FWLlzCyfUOXOmDJ%2F0yPlce80PKXXGGapLwW%2Fo4LV1%2Bq5Q7fvc86D9pyTTqfdxZTxeXc6S5LDtHAqhaoz6K%2FErtdEj6EXC39vlyccABf5nK9J43twXNHFheOkhhyOVyHrXu2c2LNTlBwWlnp3nzo2vxTINOhcO7Js255saoSp7ydTk4ISQ1JaQebfws8RN8ceFN7QygjdN8d%2BxDNx5LZoSlysv%2BcHKa7pBXxXTG3A37N8fz3qfc%2BQIWoZ9zdaiPo2S%2BDVAqzffd4eIM%2FLgjsxT%2FKlsgCZRCFvn9dt8CDC9bJ4WsLu9qFVKLLDjlTv26Y5IDF0H%2BS9oHvB1Yu3l9t6Qn7ipH4MJry7NEGOqUB26BxLIzYfYykLU6fBVsI0ev8ni%2FUJx5%2FIEyMWS0gWbHzvV7Kzo3tmzy%2BTQIqEkR9V%2BCo2fMhr2qO1%2B78rAMYd%2F6PfmZqgAuMylUuk3sg1K%2FnIfLEiRYeUsavh99UB3fAYS%2BZw3L7Q%2B2SvfVln0fNK5SQORpthFh1ZGpsrxeZ6%2FnEIdBnWXnymq1mKnhW1z2vcrB0w3K4dpEzBJ%2FZJWTTa6P7g93H&X-Amz-Signature=d6587bd684e3210483135ef79bc742e766d843e58ab3de55678a575086790ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COVLNOB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQClJBhVXx1oIWnwGVM9zAcxLGRDuUBDjXE7jQBQce0hkAIgSxw%2F4IGFGfrT4%2B%2BHP66p9TGVy3zs7Emcf7yMWBDdWbIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIUteLlTWY4nLFwIwyrcAyq5hfYYy9aPuMq3rvpd5ftEhVvYcJCK5aiOmyONB55Ud%2FvmpdYHc%2BDpBE1ZHMcLfMvr4rErxiWEAceIUs5S0hJ28m3jxpSBhv7YMR5RoRptgzHMTgeClM%2FMouvUCSOPCK22JCE0j4oTQhcjT0yUqVIOqNw1ch4xEiji1tKdnFLqzPMuBbaGrMresz3vP4kHx%2F1LVZZ1zZS3ReCNP4FyayUmeU800%2BnDC%2BGMdD8ywxtNO8J4LSuc3q93mRNKjq49Q40OL%2BgS8JBnofIlwnhOr52YNp7cozHZ9FWLlzCyfUOXOmDJ%2F0yPlce80PKXXGGapLwW%2Fo4LV1%2Bq5Q7fvc86D9pyTTqfdxZTxeXc6S5LDtHAqhaoz6K%2FErtdEj6EXC39vlyccABf5nK9J43twXNHFheOkhhyOVyHrXu2c2LNTlBwWlnp3nzo2vxTINOhcO7Js255saoSp7ydTk4ISQ1JaQebfws8RN8ceFN7QygjdN8d%2BxDNx5LZoSlysv%2BcHKa7pBXxXTG3A37N8fz3qfc%2BQIWoZ9zdaiPo2S%2BDVAqzffd4eIM%2FLgjsxT%2FKlsgCZRCFvn9dt8CDC9bJ4WsLu9qFVKLLDjlTv26Y5IDF0H%2BS9oHvB1Yu3l9t6Qn7ipH4MJry7NEGOqUB26BxLIzYfYykLU6fBVsI0ev8ni%2FUJx5%2FIEyMWS0gWbHzvV7Kzo3tmzy%2BTQIqEkR9V%2BCo2fMhr2qO1%2B78rAMYd%2F6PfmZqgAuMylUuk3sg1K%2FnIfLEiRYeUsavh99UB3fAYS%2BZw3L7Q%2B2SvfVln0fNK5SQORpthFh1ZGpsrxeZ6%2FnEIdBnWXnymq1mKnhW1z2vcrB0w3K4dpEzBJ%2FZJWTTa6P7g93H&X-Amz-Signature=f3f0bae4f402c08a466dfd4d49a71b94ddb7d0d561d11e01d8d4bc8f36cc777e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
