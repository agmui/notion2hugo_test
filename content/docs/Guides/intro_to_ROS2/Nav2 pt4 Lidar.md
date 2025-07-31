---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUNXIPV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHm5Fv5Umo%2Bkzv3OIpKr2c0X0tG2dXYDSSUn%2BXoscPagIgK3lxkoArnQfFh1nO2MRQFDnHN6f5EtC0FidRVr4G1XYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXMz9A%2Bs%2F2LLfsPircA%2FEDuqIWTpz%2FHeQaFthLMFjFiQEnA%2BRdbJSjozBqILmzwLkLpj3jhy%2BYJMhaMfEFikurKi9aIIP1pCWYY4D5N2KeEW96cK6%2BVq4HhN2EhhjXFaxqDyMLehVZDWZu5DETJIm7vNIaXdFX%2BA2IqTvRfX6%2BkOFqHJcsM7tdWNSq8yg2UtrSWnQGtLwxe1R%2FN7qBDWjm8OXrYXp5X7hbc0B%2F11WMqsU95H1yOPCEsTnu7qnOvdAKDdp5b8gP0WUsJR0b9NPCfsJG0AHHKPmQ8Ov%2BsJCIu65AoQBsYVnGA%2FN%2BztRizfBcNcZFrTH0y%2F2zJf8Iwf5RP3nRsCKe2WqzqvcxGrLaq23KwCVkQI%2BqbrfXRyEcxyUhuOG7GMvAyJqYNOkoAmuv740Q0znXe1Zv3PUtJYmQNiArnNbndoat6VWyCHJ1xmfm7XUPQjbq%2FKqvtOFH9dw1hqoXtHKpvgFHEWp64DUPz8%2Fn6SIscGkqC7lmOui5JQ1sHsBXAz1psIIF5Fut7YED%2FXvEAZqe9QSHFjbQtU9TJXfFRVqk%2FfKEDJTLTv4Jq3KwWpe0X2%2FNSaviTynHkahmYRxmkL3OpILT9jmGahjSshLLBx7LN%2BHkXXdkNAqFOHZLvtpUvgkrdbtDMIn2q8QGOqUBzd7QP0jWmeCorfXOpVgo9e0SiZxoD3HTWH%2Fg%2FoPvkLJ%2BphdAoB5JX5LU0NTnYhGP%2B387x49%2FNrd54Gpc3BwtV3x2vrhGqRYIltsWRGSYj6vuS%2Fh4qWEeDOAmMoSstYhkpr7C3JZWTElciur9eOjNjU%2Bfrqa%2F%2FX1goGyjpZvBDVwAm2wen6JBsgB8fSWlHQX8LmiifrtoMctT69GHzJLBpS32E66M&X-Amz-Signature=c5534a3bae6804d99f66e89be714529520ddc45245eaf223bcbd8928556a5b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUNXIPV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHm5Fv5Umo%2Bkzv3OIpKr2c0X0tG2dXYDSSUn%2BXoscPagIgK3lxkoArnQfFh1nO2MRQFDnHN6f5EtC0FidRVr4G1XYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXMz9A%2Bs%2F2LLfsPircA%2FEDuqIWTpz%2FHeQaFthLMFjFiQEnA%2BRdbJSjozBqILmzwLkLpj3jhy%2BYJMhaMfEFikurKi9aIIP1pCWYY4D5N2KeEW96cK6%2BVq4HhN2EhhjXFaxqDyMLehVZDWZu5DETJIm7vNIaXdFX%2BA2IqTvRfX6%2BkOFqHJcsM7tdWNSq8yg2UtrSWnQGtLwxe1R%2FN7qBDWjm8OXrYXp5X7hbc0B%2F11WMqsU95H1yOPCEsTnu7qnOvdAKDdp5b8gP0WUsJR0b9NPCfsJG0AHHKPmQ8Ov%2BsJCIu65AoQBsYVnGA%2FN%2BztRizfBcNcZFrTH0y%2F2zJf8Iwf5RP3nRsCKe2WqzqvcxGrLaq23KwCVkQI%2BqbrfXRyEcxyUhuOG7GMvAyJqYNOkoAmuv740Q0znXe1Zv3PUtJYmQNiArnNbndoat6VWyCHJ1xmfm7XUPQjbq%2FKqvtOFH9dw1hqoXtHKpvgFHEWp64DUPz8%2Fn6SIscGkqC7lmOui5JQ1sHsBXAz1psIIF5Fut7YED%2FXvEAZqe9QSHFjbQtU9TJXfFRVqk%2FfKEDJTLTv4Jq3KwWpe0X2%2FNSaviTynHkahmYRxmkL3OpILT9jmGahjSshLLBx7LN%2BHkXXdkNAqFOHZLvtpUvgkrdbtDMIn2q8QGOqUBzd7QP0jWmeCorfXOpVgo9e0SiZxoD3HTWH%2Fg%2FoPvkLJ%2BphdAoB5JX5LU0NTnYhGP%2B387x49%2FNrd54Gpc3BwtV3x2vrhGqRYIltsWRGSYj6vuS%2Fh4qWEeDOAmMoSstYhkpr7C3JZWTElciur9eOjNjU%2Bfrqa%2F%2FX1goGyjpZvBDVwAm2wen6JBsgB8fSWlHQX8LmiifrtoMctT69GHzJLBpS32E66M&X-Amz-Signature=484c5b16927e47fbacfa0dab3af2bb1f3e297c09775b53fd79936142011d5388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUNXIPV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHm5Fv5Umo%2Bkzv3OIpKr2c0X0tG2dXYDSSUn%2BXoscPagIgK3lxkoArnQfFh1nO2MRQFDnHN6f5EtC0FidRVr4G1XYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXMz9A%2Bs%2F2LLfsPircA%2FEDuqIWTpz%2FHeQaFthLMFjFiQEnA%2BRdbJSjozBqILmzwLkLpj3jhy%2BYJMhaMfEFikurKi9aIIP1pCWYY4D5N2KeEW96cK6%2BVq4HhN2EhhjXFaxqDyMLehVZDWZu5DETJIm7vNIaXdFX%2BA2IqTvRfX6%2BkOFqHJcsM7tdWNSq8yg2UtrSWnQGtLwxe1R%2FN7qBDWjm8OXrYXp5X7hbc0B%2F11WMqsU95H1yOPCEsTnu7qnOvdAKDdp5b8gP0WUsJR0b9NPCfsJG0AHHKPmQ8Ov%2BsJCIu65AoQBsYVnGA%2FN%2BztRizfBcNcZFrTH0y%2F2zJf8Iwf5RP3nRsCKe2WqzqvcxGrLaq23KwCVkQI%2BqbrfXRyEcxyUhuOG7GMvAyJqYNOkoAmuv740Q0znXe1Zv3PUtJYmQNiArnNbndoat6VWyCHJ1xmfm7XUPQjbq%2FKqvtOFH9dw1hqoXtHKpvgFHEWp64DUPz8%2Fn6SIscGkqC7lmOui5JQ1sHsBXAz1psIIF5Fut7YED%2FXvEAZqe9QSHFjbQtU9TJXfFRVqk%2FfKEDJTLTv4Jq3KwWpe0X2%2FNSaviTynHkahmYRxmkL3OpILT9jmGahjSshLLBx7LN%2BHkXXdkNAqFOHZLvtpUvgkrdbtDMIn2q8QGOqUBzd7QP0jWmeCorfXOpVgo9e0SiZxoD3HTWH%2Fg%2FoPvkLJ%2BphdAoB5JX5LU0NTnYhGP%2B387x49%2FNrd54Gpc3BwtV3x2vrhGqRYIltsWRGSYj6vuS%2Fh4qWEeDOAmMoSstYhkpr7C3JZWTElciur9eOjNjU%2Bfrqa%2F%2FX1goGyjpZvBDVwAm2wen6JBsgB8fSWlHQX8LmiifrtoMctT69GHzJLBpS32E66M&X-Amz-Signature=af33cae9c0a01c23e76d747899e914a38675f7902b07113e14a29b6fe314d998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUNXIPV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHm5Fv5Umo%2Bkzv3OIpKr2c0X0tG2dXYDSSUn%2BXoscPagIgK3lxkoArnQfFh1nO2MRQFDnHN6f5EtC0FidRVr4G1XYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXMz9A%2Bs%2F2LLfsPircA%2FEDuqIWTpz%2FHeQaFthLMFjFiQEnA%2BRdbJSjozBqILmzwLkLpj3jhy%2BYJMhaMfEFikurKi9aIIP1pCWYY4D5N2KeEW96cK6%2BVq4HhN2EhhjXFaxqDyMLehVZDWZu5DETJIm7vNIaXdFX%2BA2IqTvRfX6%2BkOFqHJcsM7tdWNSq8yg2UtrSWnQGtLwxe1R%2FN7qBDWjm8OXrYXp5X7hbc0B%2F11WMqsU95H1yOPCEsTnu7qnOvdAKDdp5b8gP0WUsJR0b9NPCfsJG0AHHKPmQ8Ov%2BsJCIu65AoQBsYVnGA%2FN%2BztRizfBcNcZFrTH0y%2F2zJf8Iwf5RP3nRsCKe2WqzqvcxGrLaq23KwCVkQI%2BqbrfXRyEcxyUhuOG7GMvAyJqYNOkoAmuv740Q0znXe1Zv3PUtJYmQNiArnNbndoat6VWyCHJ1xmfm7XUPQjbq%2FKqvtOFH9dw1hqoXtHKpvgFHEWp64DUPz8%2Fn6SIscGkqC7lmOui5JQ1sHsBXAz1psIIF5Fut7YED%2FXvEAZqe9QSHFjbQtU9TJXfFRVqk%2FfKEDJTLTv4Jq3KwWpe0X2%2FNSaviTynHkahmYRxmkL3OpILT9jmGahjSshLLBx7LN%2BHkXXdkNAqFOHZLvtpUvgkrdbtDMIn2q8QGOqUBzd7QP0jWmeCorfXOpVgo9e0SiZxoD3HTWH%2Fg%2FoPvkLJ%2BphdAoB5JX5LU0NTnYhGP%2B387x49%2FNrd54Gpc3BwtV3x2vrhGqRYIltsWRGSYj6vuS%2Fh4qWEeDOAmMoSstYhkpr7C3JZWTElciur9eOjNjU%2Bfrqa%2F%2FX1goGyjpZvBDVwAm2wen6JBsgB8fSWlHQX8LmiifrtoMctT69GHzJLBpS32E66M&X-Amz-Signature=e015059b33248b53f98a4aa4e016fb6db0a2ccbf4aa5789af364499ebde16270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUNXIPV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHm5Fv5Umo%2Bkzv3OIpKr2c0X0tG2dXYDSSUn%2BXoscPagIgK3lxkoArnQfFh1nO2MRQFDnHN6f5EtC0FidRVr4G1XYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXMz9A%2Bs%2F2LLfsPircA%2FEDuqIWTpz%2FHeQaFthLMFjFiQEnA%2BRdbJSjozBqILmzwLkLpj3jhy%2BYJMhaMfEFikurKi9aIIP1pCWYY4D5N2KeEW96cK6%2BVq4HhN2EhhjXFaxqDyMLehVZDWZu5DETJIm7vNIaXdFX%2BA2IqTvRfX6%2BkOFqHJcsM7tdWNSq8yg2UtrSWnQGtLwxe1R%2FN7qBDWjm8OXrYXp5X7hbc0B%2F11WMqsU95H1yOPCEsTnu7qnOvdAKDdp5b8gP0WUsJR0b9NPCfsJG0AHHKPmQ8Ov%2BsJCIu65AoQBsYVnGA%2FN%2BztRizfBcNcZFrTH0y%2F2zJf8Iwf5RP3nRsCKe2WqzqvcxGrLaq23KwCVkQI%2BqbrfXRyEcxyUhuOG7GMvAyJqYNOkoAmuv740Q0znXe1Zv3PUtJYmQNiArnNbndoat6VWyCHJ1xmfm7XUPQjbq%2FKqvtOFH9dw1hqoXtHKpvgFHEWp64DUPz8%2Fn6SIscGkqC7lmOui5JQ1sHsBXAz1psIIF5Fut7YED%2FXvEAZqe9QSHFjbQtU9TJXfFRVqk%2FfKEDJTLTv4Jq3KwWpe0X2%2FNSaviTynHkahmYRxmkL3OpILT9jmGahjSshLLBx7LN%2BHkXXdkNAqFOHZLvtpUvgkrdbtDMIn2q8QGOqUBzd7QP0jWmeCorfXOpVgo9e0SiZxoD3HTWH%2Fg%2FoPvkLJ%2BphdAoB5JX5LU0NTnYhGP%2B387x49%2FNrd54Gpc3BwtV3x2vrhGqRYIltsWRGSYj6vuS%2Fh4qWEeDOAmMoSstYhkpr7C3JZWTElciur9eOjNjU%2Bfrqa%2F%2FX1goGyjpZvBDVwAm2wen6JBsgB8fSWlHQX8LmiifrtoMctT69GHzJLBpS32E66M&X-Amz-Signature=1f574b7966519450a30579853eae21d187381b7ed550ecfb5a36c71d51baf133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUNXIPV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHm5Fv5Umo%2Bkzv3OIpKr2c0X0tG2dXYDSSUn%2BXoscPagIgK3lxkoArnQfFh1nO2MRQFDnHN6f5EtC0FidRVr4G1XYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXMz9A%2Bs%2F2LLfsPircA%2FEDuqIWTpz%2FHeQaFthLMFjFiQEnA%2BRdbJSjozBqILmzwLkLpj3jhy%2BYJMhaMfEFikurKi9aIIP1pCWYY4D5N2KeEW96cK6%2BVq4HhN2EhhjXFaxqDyMLehVZDWZu5DETJIm7vNIaXdFX%2BA2IqTvRfX6%2BkOFqHJcsM7tdWNSq8yg2UtrSWnQGtLwxe1R%2FN7qBDWjm8OXrYXp5X7hbc0B%2F11WMqsU95H1yOPCEsTnu7qnOvdAKDdp5b8gP0WUsJR0b9NPCfsJG0AHHKPmQ8Ov%2BsJCIu65AoQBsYVnGA%2FN%2BztRizfBcNcZFrTH0y%2F2zJf8Iwf5RP3nRsCKe2WqzqvcxGrLaq23KwCVkQI%2BqbrfXRyEcxyUhuOG7GMvAyJqYNOkoAmuv740Q0znXe1Zv3PUtJYmQNiArnNbndoat6VWyCHJ1xmfm7XUPQjbq%2FKqvtOFH9dw1hqoXtHKpvgFHEWp64DUPz8%2Fn6SIscGkqC7lmOui5JQ1sHsBXAz1psIIF5Fut7YED%2FXvEAZqe9QSHFjbQtU9TJXfFRVqk%2FfKEDJTLTv4Jq3KwWpe0X2%2FNSaviTynHkahmYRxmkL3OpILT9jmGahjSshLLBx7LN%2BHkXXdkNAqFOHZLvtpUvgkrdbtDMIn2q8QGOqUBzd7QP0jWmeCorfXOpVgo9e0SiZxoD3HTWH%2Fg%2FoPvkLJ%2BphdAoB5JX5LU0NTnYhGP%2B387x49%2FNrd54Gpc3BwtV3x2vrhGqRYIltsWRGSYj6vuS%2Fh4qWEeDOAmMoSstYhkpr7C3JZWTElciur9eOjNjU%2Bfrqa%2F%2FX1goGyjpZvBDVwAm2wen6JBsgB8fSWlHQX8LmiifrtoMctT69GHzJLBpS32E66M&X-Amz-Signature=276e0e19df1643d75a70b13a25d87059a1d66a2a90e26e5ef8d169badd2867bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUNXIPV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHm5Fv5Umo%2Bkzv3OIpKr2c0X0tG2dXYDSSUn%2BXoscPagIgK3lxkoArnQfFh1nO2MRQFDnHN6f5EtC0FidRVr4G1XYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXMz9A%2Bs%2F2LLfsPircA%2FEDuqIWTpz%2FHeQaFthLMFjFiQEnA%2BRdbJSjozBqILmzwLkLpj3jhy%2BYJMhaMfEFikurKi9aIIP1pCWYY4D5N2KeEW96cK6%2BVq4HhN2EhhjXFaxqDyMLehVZDWZu5DETJIm7vNIaXdFX%2BA2IqTvRfX6%2BkOFqHJcsM7tdWNSq8yg2UtrSWnQGtLwxe1R%2FN7qBDWjm8OXrYXp5X7hbc0B%2F11WMqsU95H1yOPCEsTnu7qnOvdAKDdp5b8gP0WUsJR0b9NPCfsJG0AHHKPmQ8Ov%2BsJCIu65AoQBsYVnGA%2FN%2BztRizfBcNcZFrTH0y%2F2zJf8Iwf5RP3nRsCKe2WqzqvcxGrLaq23KwCVkQI%2BqbrfXRyEcxyUhuOG7GMvAyJqYNOkoAmuv740Q0znXe1Zv3PUtJYmQNiArnNbndoat6VWyCHJ1xmfm7XUPQjbq%2FKqvtOFH9dw1hqoXtHKpvgFHEWp64DUPz8%2Fn6SIscGkqC7lmOui5JQ1sHsBXAz1psIIF5Fut7YED%2FXvEAZqe9QSHFjbQtU9TJXfFRVqk%2FfKEDJTLTv4Jq3KwWpe0X2%2FNSaviTynHkahmYRxmkL3OpILT9jmGahjSshLLBx7LN%2BHkXXdkNAqFOHZLvtpUvgkrdbtDMIn2q8QGOqUBzd7QP0jWmeCorfXOpVgo9e0SiZxoD3HTWH%2Fg%2FoPvkLJ%2BphdAoB5JX5LU0NTnYhGP%2B387x49%2FNrd54Gpc3BwtV3x2vrhGqRYIltsWRGSYj6vuS%2Fh4qWEeDOAmMoSstYhkpr7C3JZWTElciur9eOjNjU%2Bfrqa%2F%2FX1goGyjpZvBDVwAm2wen6JBsgB8fSWlHQX8LmiifrtoMctT69GHzJLBpS32E66M&X-Amz-Signature=0cf417d2e7d7149c82f2cbcce0999fa42352b25bd5bd79655dd1b3ffb094bafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUNXIPV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHm5Fv5Umo%2Bkzv3OIpKr2c0X0tG2dXYDSSUn%2BXoscPagIgK3lxkoArnQfFh1nO2MRQFDnHN6f5EtC0FidRVr4G1XYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXMz9A%2Bs%2F2LLfsPircA%2FEDuqIWTpz%2FHeQaFthLMFjFiQEnA%2BRdbJSjozBqILmzwLkLpj3jhy%2BYJMhaMfEFikurKi9aIIP1pCWYY4D5N2KeEW96cK6%2BVq4HhN2EhhjXFaxqDyMLehVZDWZu5DETJIm7vNIaXdFX%2BA2IqTvRfX6%2BkOFqHJcsM7tdWNSq8yg2UtrSWnQGtLwxe1R%2FN7qBDWjm8OXrYXp5X7hbc0B%2F11WMqsU95H1yOPCEsTnu7qnOvdAKDdp5b8gP0WUsJR0b9NPCfsJG0AHHKPmQ8Ov%2BsJCIu65AoQBsYVnGA%2FN%2BztRizfBcNcZFrTH0y%2F2zJf8Iwf5RP3nRsCKe2WqzqvcxGrLaq23KwCVkQI%2BqbrfXRyEcxyUhuOG7GMvAyJqYNOkoAmuv740Q0znXe1Zv3PUtJYmQNiArnNbndoat6VWyCHJ1xmfm7XUPQjbq%2FKqvtOFH9dw1hqoXtHKpvgFHEWp64DUPz8%2Fn6SIscGkqC7lmOui5JQ1sHsBXAz1psIIF5Fut7YED%2FXvEAZqe9QSHFjbQtU9TJXfFRVqk%2FfKEDJTLTv4Jq3KwWpe0X2%2FNSaviTynHkahmYRxmkL3OpILT9jmGahjSshLLBx7LN%2BHkXXdkNAqFOHZLvtpUvgkrdbtDMIn2q8QGOqUBzd7QP0jWmeCorfXOpVgo9e0SiZxoD3HTWH%2Fg%2FoPvkLJ%2BphdAoB5JX5LU0NTnYhGP%2B387x49%2FNrd54Gpc3BwtV3x2vrhGqRYIltsWRGSYj6vuS%2Fh4qWEeDOAmMoSstYhkpr7C3JZWTElciur9eOjNjU%2Bfrqa%2F%2FX1goGyjpZvBDVwAm2wen6JBsgB8fSWlHQX8LmiifrtoMctT69GHzJLBpS32E66M&X-Amz-Signature=cf26208e5e33976a53c6b6f0cbe6d55c57b9f943857670f1e8146ca680a676ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUNXIPV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHm5Fv5Umo%2Bkzv3OIpKr2c0X0tG2dXYDSSUn%2BXoscPagIgK3lxkoArnQfFh1nO2MRQFDnHN6f5EtC0FidRVr4G1XYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXMz9A%2Bs%2F2LLfsPircA%2FEDuqIWTpz%2FHeQaFthLMFjFiQEnA%2BRdbJSjozBqILmzwLkLpj3jhy%2BYJMhaMfEFikurKi9aIIP1pCWYY4D5N2KeEW96cK6%2BVq4HhN2EhhjXFaxqDyMLehVZDWZu5DETJIm7vNIaXdFX%2BA2IqTvRfX6%2BkOFqHJcsM7tdWNSq8yg2UtrSWnQGtLwxe1R%2FN7qBDWjm8OXrYXp5X7hbc0B%2F11WMqsU95H1yOPCEsTnu7qnOvdAKDdp5b8gP0WUsJR0b9NPCfsJG0AHHKPmQ8Ov%2BsJCIu65AoQBsYVnGA%2FN%2BztRizfBcNcZFrTH0y%2F2zJf8Iwf5RP3nRsCKe2WqzqvcxGrLaq23KwCVkQI%2BqbrfXRyEcxyUhuOG7GMvAyJqYNOkoAmuv740Q0znXe1Zv3PUtJYmQNiArnNbndoat6VWyCHJ1xmfm7XUPQjbq%2FKqvtOFH9dw1hqoXtHKpvgFHEWp64DUPz8%2Fn6SIscGkqC7lmOui5JQ1sHsBXAz1psIIF5Fut7YED%2FXvEAZqe9QSHFjbQtU9TJXfFRVqk%2FfKEDJTLTv4Jq3KwWpe0X2%2FNSaviTynHkahmYRxmkL3OpILT9jmGahjSshLLBx7LN%2BHkXXdkNAqFOHZLvtpUvgkrdbtDMIn2q8QGOqUBzd7QP0jWmeCorfXOpVgo9e0SiZxoD3HTWH%2Fg%2FoPvkLJ%2BphdAoB5JX5LU0NTnYhGP%2B387x49%2FNrd54Gpc3BwtV3x2vrhGqRYIltsWRGSYj6vuS%2Fh4qWEeDOAmMoSstYhkpr7C3JZWTElciur9eOjNjU%2Bfrqa%2F%2FX1goGyjpZvBDVwAm2wen6JBsgB8fSWlHQX8LmiifrtoMctT69GHzJLBpS32E66M&X-Amz-Signature=55098fa3dcbc9faea59f397d9ecd6dead5fb3436d77b9cad36e7b32e26910c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUNXIPV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHm5Fv5Umo%2Bkzv3OIpKr2c0X0tG2dXYDSSUn%2BXoscPagIgK3lxkoArnQfFh1nO2MRQFDnHN6f5EtC0FidRVr4G1XYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXMz9A%2Bs%2F2LLfsPircA%2FEDuqIWTpz%2FHeQaFthLMFjFiQEnA%2BRdbJSjozBqILmzwLkLpj3jhy%2BYJMhaMfEFikurKi9aIIP1pCWYY4D5N2KeEW96cK6%2BVq4HhN2EhhjXFaxqDyMLehVZDWZu5DETJIm7vNIaXdFX%2BA2IqTvRfX6%2BkOFqHJcsM7tdWNSq8yg2UtrSWnQGtLwxe1R%2FN7qBDWjm8OXrYXp5X7hbc0B%2F11WMqsU95H1yOPCEsTnu7qnOvdAKDdp5b8gP0WUsJR0b9NPCfsJG0AHHKPmQ8Ov%2BsJCIu65AoQBsYVnGA%2FN%2BztRizfBcNcZFrTH0y%2F2zJf8Iwf5RP3nRsCKe2WqzqvcxGrLaq23KwCVkQI%2BqbrfXRyEcxyUhuOG7GMvAyJqYNOkoAmuv740Q0znXe1Zv3PUtJYmQNiArnNbndoat6VWyCHJ1xmfm7XUPQjbq%2FKqvtOFH9dw1hqoXtHKpvgFHEWp64DUPz8%2Fn6SIscGkqC7lmOui5JQ1sHsBXAz1psIIF5Fut7YED%2FXvEAZqe9QSHFjbQtU9TJXfFRVqk%2FfKEDJTLTv4Jq3KwWpe0X2%2FNSaviTynHkahmYRxmkL3OpILT9jmGahjSshLLBx7LN%2BHkXXdkNAqFOHZLvtpUvgkrdbtDMIn2q8QGOqUBzd7QP0jWmeCorfXOpVgo9e0SiZxoD3HTWH%2Fg%2FoPvkLJ%2BphdAoB5JX5LU0NTnYhGP%2B387x49%2FNrd54Gpc3BwtV3x2vrhGqRYIltsWRGSYj6vuS%2Fh4qWEeDOAmMoSstYhkpr7C3JZWTElciur9eOjNjU%2Bfrqa%2F%2FX1goGyjpZvBDVwAm2wen6JBsgB8fSWlHQX8LmiifrtoMctT69GHzJLBpS32E66M&X-Amz-Signature=deb68f887dce96ab4673351d5be5b88553eb1ac8003e788eca6ea5bb3999d188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
