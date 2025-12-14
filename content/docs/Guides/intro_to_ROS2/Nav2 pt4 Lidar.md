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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBA5HUZR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDC10g3vHYjg%2FjUmtscAxFk9LZ8Jv7%2BCkuY70iSd%2FpXvgIgLO9IpLMDqT38nqlAcPeROiIEyrU28Vu9%2Fcd%2FkFfnRFsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL6wW06k8%2BougsF42ircAySsu%2FZbMs6kTSX6lFXi9Ogdcc4Q2NDBC%2B0vAYyfOosj0uxYskssuy%2F%2BhKgHrJmaPaipwuwLUAHqw3cw8cPZDRauyIirFCQMLZIHTK5twA7A%2BmdQh8QUX1vfa7uwHr8EBJOjIxsza0IEReAPuh%2FO%2FouhaHXJMF8JWr5tiKDF2E8Z3vUjFBwO7OiXI5cehls3TLFqie6rng6r%2FzOSuZ9veekyFU48Mkzv7NN7ZkBKGGLyGBi3YAU1ZKFaubaURB3sl%2B1YkOKr%2BnDjRPB4zj9Acvfcd40IqDbsIBzTJPpE9gUV%2F0QCIoFfFWxOBHnGYVWsZJX340x34MC6DAoBXYRoe%2BMzOHgknnDiCoPEMn824cgyDPqlxdCUChbO9VA7SMhpgqHMqfHKJiuuvhH21LL4r%2Ffm1RauWwfmb6FKnZegJ5yWsCQN5wH1kKy8D1WfHxmR42QBjXdT%2BC8Nz8%2B%2FYxuDsApbaxTFM3gihgUmeI9c6Vg%2BV6ptnj%2Bv%2FsKXtr2HEnkqsoZtVK7yVNAAOxXCSD574rsC%2FebZimUcXCCJU4Yf4gpIN6%2BaNQi%2F9t8%2BmvHPHGhKI9DquAa1ORKDqZaC7Lh649Q7uxPjfVqzGJK7WYnwMVW7%2FUpXuTmxyfVsfR8cMI%2BX%2BMkGOqUBdioAf5HMeeztW2183VuvmuuFTKac3cpz1CSmuiPfrYInJ5Lvqaqrds9kMB5dHCpiWqffmV%2Bcz6LNFHYa7Iq%2FZjlcsna84%2FvkXSaXekP4HHG33uxLsy4refCYw7JAnw3%2FalNY%2FesCwuFu%2Fi8g%2B%2BNybY8bTCh6JybqWJv3ejH0a9Nl6ezUAWY6ZrzD3BlN6woFc%2FYSNGrN1x89Ken0RHNlkLBsrs5Y&X-Amz-Signature=1419a6e883e604c3624c1c60fd3e3ea01851e3aaa27101f762e9a2204e42ec9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4YSHMU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2FY5LQJS3rTWTJw8OhMazE6ctR%2BbhT5WWnJMIz2oiROQIgMFpZTQqyF6gBy7q03Q48cDDxPlbx3KHNMzkzx72NXSQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDUqBWdaEstZEsAYZyrcAwo0IRcUzCIKc1W4O1Zlo3HaH6yPWtAbtZ0lPGXMFPK7OJCah23dOYw5skdPYznVBlwRCmRZwI%2B8BXQ83cBEwmBrMda2FTkQ%2FOxXwb4jDWKSv8UGq43bjHRfLLHBGiyh9YoKgwrw%2BI0sOtVqVI3pGtphvZRbkcsvc4FS2IPftJt6OZTXDgN77CDYHltNgQ3JdPNVDz9ZsM6otznH5ZtyWboK9hc75Dqa7beOxf51Qv0%2BR3BNNM0halv3uP8ufafxlFM%2B8ioea5dKO5ZOz7KydZ1perSqJ%2FXJgBX1otsQsfymx9LvNupEjd%2B4j%2BpsFRB3qrI5C%2FfI3TpoFoVeijUHyY%2B8IuuHQV6QpXKF4as%2BGQDqKdnNxpX%2BDD58T1UzPx0%2B9KGCR89FPkr5LsxNikzEJpUSWAUPOP3qX6epJ0Os%2FFHQ0JFp5lAa0kUY7f6rX9QXa%2FWDXkq0Wocv5z0YhNx9vuOLqg7WQfES9RfE03Dzve98tqjbdL0quvAnBmS7aXT1jq%2F5BvSl0g1akHFK9dOVjna%2FI9YzXdgPyA2bAsucBYKNj6k9Ix0yyjhnjwJ4SIwwmYw8GKiNO0NzF8lIVn8cTsx0ob8au9B74OB6CSYp6IooDgUsvGntp0kZJz2sMJ2W%2BMkGOqUB56UTSwfoELPR3IFqjgWF7kv9yWfqLERTWJkRapW83X3QHcMnTzoBnvRm5GCG2SaEsfPs0nsFXdx1UWqurf9oDp7gxSGT%2F%2BpiSrAmNMEj77bwfZPqTY%2F4OtzLm3r%2FD8s9dlOlRsM3K0fZqQhIfslPaAXfLezXWz0MLMDGFd8WtvjfNTCkYED4KPusFFEdXy8Z%2B%2B%2F9NwTRwe60sOYZsZTLBN1J8C1K&X-Amz-Signature=ab6a3254d85370076939bdfd70557b133d2c36a15bad2049b195c96f8feb7eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4YSHMU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2FY5LQJS3rTWTJw8OhMazE6ctR%2BbhT5WWnJMIz2oiROQIgMFpZTQqyF6gBy7q03Q48cDDxPlbx3KHNMzkzx72NXSQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDUqBWdaEstZEsAYZyrcAwo0IRcUzCIKc1W4O1Zlo3HaH6yPWtAbtZ0lPGXMFPK7OJCah23dOYw5skdPYznVBlwRCmRZwI%2B8BXQ83cBEwmBrMda2FTkQ%2FOxXwb4jDWKSv8UGq43bjHRfLLHBGiyh9YoKgwrw%2BI0sOtVqVI3pGtphvZRbkcsvc4FS2IPftJt6OZTXDgN77CDYHltNgQ3JdPNVDz9ZsM6otznH5ZtyWboK9hc75Dqa7beOxf51Qv0%2BR3BNNM0halv3uP8ufafxlFM%2B8ioea5dKO5ZOz7KydZ1perSqJ%2FXJgBX1otsQsfymx9LvNupEjd%2B4j%2BpsFRB3qrI5C%2FfI3TpoFoVeijUHyY%2B8IuuHQV6QpXKF4as%2BGQDqKdnNxpX%2BDD58T1UzPx0%2B9KGCR89FPkr5LsxNikzEJpUSWAUPOP3qX6epJ0Os%2FFHQ0JFp5lAa0kUY7f6rX9QXa%2FWDXkq0Wocv5z0YhNx9vuOLqg7WQfES9RfE03Dzve98tqjbdL0quvAnBmS7aXT1jq%2F5BvSl0g1akHFK9dOVjna%2FI9YzXdgPyA2bAsucBYKNj6k9Ix0yyjhnjwJ4SIwwmYw8GKiNO0NzF8lIVn8cTsx0ob8au9B74OB6CSYp6IooDgUsvGntp0kZJz2sMJ2W%2BMkGOqUB56UTSwfoELPR3IFqjgWF7kv9yWfqLERTWJkRapW83X3QHcMnTzoBnvRm5GCG2SaEsfPs0nsFXdx1UWqurf9oDp7gxSGT%2F%2BpiSrAmNMEj77bwfZPqTY%2F4OtzLm3r%2FD8s9dlOlRsM3K0fZqQhIfslPaAXfLezXWz0MLMDGFd8WtvjfNTCkYED4KPusFFEdXy8Z%2B%2B%2F9NwTRwe60sOYZsZTLBN1J8C1K&X-Amz-Signature=c9bc77948ef73fa78fbabb1b1453f0cbd8078a0465026953473ca15dba85c669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4YSHMU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2FY5LQJS3rTWTJw8OhMazE6ctR%2BbhT5WWnJMIz2oiROQIgMFpZTQqyF6gBy7q03Q48cDDxPlbx3KHNMzkzx72NXSQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDUqBWdaEstZEsAYZyrcAwo0IRcUzCIKc1W4O1Zlo3HaH6yPWtAbtZ0lPGXMFPK7OJCah23dOYw5skdPYznVBlwRCmRZwI%2B8BXQ83cBEwmBrMda2FTkQ%2FOxXwb4jDWKSv8UGq43bjHRfLLHBGiyh9YoKgwrw%2BI0sOtVqVI3pGtphvZRbkcsvc4FS2IPftJt6OZTXDgN77CDYHltNgQ3JdPNVDz9ZsM6otznH5ZtyWboK9hc75Dqa7beOxf51Qv0%2BR3BNNM0halv3uP8ufafxlFM%2B8ioea5dKO5ZOz7KydZ1perSqJ%2FXJgBX1otsQsfymx9LvNupEjd%2B4j%2BpsFRB3qrI5C%2FfI3TpoFoVeijUHyY%2B8IuuHQV6QpXKF4as%2BGQDqKdnNxpX%2BDD58T1UzPx0%2B9KGCR89FPkr5LsxNikzEJpUSWAUPOP3qX6epJ0Os%2FFHQ0JFp5lAa0kUY7f6rX9QXa%2FWDXkq0Wocv5z0YhNx9vuOLqg7WQfES9RfE03Dzve98tqjbdL0quvAnBmS7aXT1jq%2F5BvSl0g1akHFK9dOVjna%2FI9YzXdgPyA2bAsucBYKNj6k9Ix0yyjhnjwJ4SIwwmYw8GKiNO0NzF8lIVn8cTsx0ob8au9B74OB6CSYp6IooDgUsvGntp0kZJz2sMJ2W%2BMkGOqUB56UTSwfoELPR3IFqjgWF7kv9yWfqLERTWJkRapW83X3QHcMnTzoBnvRm5GCG2SaEsfPs0nsFXdx1UWqurf9oDp7gxSGT%2F%2BpiSrAmNMEj77bwfZPqTY%2F4OtzLm3r%2FD8s9dlOlRsM3K0fZqQhIfslPaAXfLezXWz0MLMDGFd8WtvjfNTCkYED4KPusFFEdXy8Z%2B%2B%2F9NwTRwe60sOYZsZTLBN1J8C1K&X-Amz-Signature=387a7658d7f9551f9f6ba358857e676e3859cf4a20bea80fd212af4a008391fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4YSHMU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2FY5LQJS3rTWTJw8OhMazE6ctR%2BbhT5WWnJMIz2oiROQIgMFpZTQqyF6gBy7q03Q48cDDxPlbx3KHNMzkzx72NXSQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDUqBWdaEstZEsAYZyrcAwo0IRcUzCIKc1W4O1Zlo3HaH6yPWtAbtZ0lPGXMFPK7OJCah23dOYw5skdPYznVBlwRCmRZwI%2B8BXQ83cBEwmBrMda2FTkQ%2FOxXwb4jDWKSv8UGq43bjHRfLLHBGiyh9YoKgwrw%2BI0sOtVqVI3pGtphvZRbkcsvc4FS2IPftJt6OZTXDgN77CDYHltNgQ3JdPNVDz9ZsM6otznH5ZtyWboK9hc75Dqa7beOxf51Qv0%2BR3BNNM0halv3uP8ufafxlFM%2B8ioea5dKO5ZOz7KydZ1perSqJ%2FXJgBX1otsQsfymx9LvNupEjd%2B4j%2BpsFRB3qrI5C%2FfI3TpoFoVeijUHyY%2B8IuuHQV6QpXKF4as%2BGQDqKdnNxpX%2BDD58T1UzPx0%2B9KGCR89FPkr5LsxNikzEJpUSWAUPOP3qX6epJ0Os%2FFHQ0JFp5lAa0kUY7f6rX9QXa%2FWDXkq0Wocv5z0YhNx9vuOLqg7WQfES9RfE03Dzve98tqjbdL0quvAnBmS7aXT1jq%2F5BvSl0g1akHFK9dOVjna%2FI9YzXdgPyA2bAsucBYKNj6k9Ix0yyjhnjwJ4SIwwmYw8GKiNO0NzF8lIVn8cTsx0ob8au9B74OB6CSYp6IooDgUsvGntp0kZJz2sMJ2W%2BMkGOqUB56UTSwfoELPR3IFqjgWF7kv9yWfqLERTWJkRapW83X3QHcMnTzoBnvRm5GCG2SaEsfPs0nsFXdx1UWqurf9oDp7gxSGT%2F%2BpiSrAmNMEj77bwfZPqTY%2F4OtzLm3r%2FD8s9dlOlRsM3K0fZqQhIfslPaAXfLezXWz0MLMDGFd8WtvjfNTCkYED4KPusFFEdXy8Z%2B%2B%2F9NwTRwe60sOYZsZTLBN1J8C1K&X-Amz-Signature=a03cab7acf06db40b6f374ac22f29067e20a7ad6ae74ce85802aa7c6006affc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4YSHMU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2FY5LQJS3rTWTJw8OhMazE6ctR%2BbhT5WWnJMIz2oiROQIgMFpZTQqyF6gBy7q03Q48cDDxPlbx3KHNMzkzx72NXSQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDUqBWdaEstZEsAYZyrcAwo0IRcUzCIKc1W4O1Zlo3HaH6yPWtAbtZ0lPGXMFPK7OJCah23dOYw5skdPYznVBlwRCmRZwI%2B8BXQ83cBEwmBrMda2FTkQ%2FOxXwb4jDWKSv8UGq43bjHRfLLHBGiyh9YoKgwrw%2BI0sOtVqVI3pGtphvZRbkcsvc4FS2IPftJt6OZTXDgN77CDYHltNgQ3JdPNVDz9ZsM6otznH5ZtyWboK9hc75Dqa7beOxf51Qv0%2BR3BNNM0halv3uP8ufafxlFM%2B8ioea5dKO5ZOz7KydZ1perSqJ%2FXJgBX1otsQsfymx9LvNupEjd%2B4j%2BpsFRB3qrI5C%2FfI3TpoFoVeijUHyY%2B8IuuHQV6QpXKF4as%2BGQDqKdnNxpX%2BDD58T1UzPx0%2B9KGCR89FPkr5LsxNikzEJpUSWAUPOP3qX6epJ0Os%2FFHQ0JFp5lAa0kUY7f6rX9QXa%2FWDXkq0Wocv5z0YhNx9vuOLqg7WQfES9RfE03Dzve98tqjbdL0quvAnBmS7aXT1jq%2F5BvSl0g1akHFK9dOVjna%2FI9YzXdgPyA2bAsucBYKNj6k9Ix0yyjhnjwJ4SIwwmYw8GKiNO0NzF8lIVn8cTsx0ob8au9B74OB6CSYp6IooDgUsvGntp0kZJz2sMJ2W%2BMkGOqUB56UTSwfoELPR3IFqjgWF7kv9yWfqLERTWJkRapW83X3QHcMnTzoBnvRm5GCG2SaEsfPs0nsFXdx1UWqurf9oDp7gxSGT%2F%2BpiSrAmNMEj77bwfZPqTY%2F4OtzLm3r%2FD8s9dlOlRsM3K0fZqQhIfslPaAXfLezXWz0MLMDGFd8WtvjfNTCkYED4KPusFFEdXy8Z%2B%2B%2F9NwTRwe60sOYZsZTLBN1J8C1K&X-Amz-Signature=f11ccf8b4e29419fbdfc37dedb3eac644e84a2ffe55abfc55fb0819d6d389b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4YSHMU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2FY5LQJS3rTWTJw8OhMazE6ctR%2BbhT5WWnJMIz2oiROQIgMFpZTQqyF6gBy7q03Q48cDDxPlbx3KHNMzkzx72NXSQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDUqBWdaEstZEsAYZyrcAwo0IRcUzCIKc1W4O1Zlo3HaH6yPWtAbtZ0lPGXMFPK7OJCah23dOYw5skdPYznVBlwRCmRZwI%2B8BXQ83cBEwmBrMda2FTkQ%2FOxXwb4jDWKSv8UGq43bjHRfLLHBGiyh9YoKgwrw%2BI0sOtVqVI3pGtphvZRbkcsvc4FS2IPftJt6OZTXDgN77CDYHltNgQ3JdPNVDz9ZsM6otznH5ZtyWboK9hc75Dqa7beOxf51Qv0%2BR3BNNM0halv3uP8ufafxlFM%2B8ioea5dKO5ZOz7KydZ1perSqJ%2FXJgBX1otsQsfymx9LvNupEjd%2B4j%2BpsFRB3qrI5C%2FfI3TpoFoVeijUHyY%2B8IuuHQV6QpXKF4as%2BGQDqKdnNxpX%2BDD58T1UzPx0%2B9KGCR89FPkr5LsxNikzEJpUSWAUPOP3qX6epJ0Os%2FFHQ0JFp5lAa0kUY7f6rX9QXa%2FWDXkq0Wocv5z0YhNx9vuOLqg7WQfES9RfE03Dzve98tqjbdL0quvAnBmS7aXT1jq%2F5BvSl0g1akHFK9dOVjna%2FI9YzXdgPyA2bAsucBYKNj6k9Ix0yyjhnjwJ4SIwwmYw8GKiNO0NzF8lIVn8cTsx0ob8au9B74OB6CSYp6IooDgUsvGntp0kZJz2sMJ2W%2BMkGOqUB56UTSwfoELPR3IFqjgWF7kv9yWfqLERTWJkRapW83X3QHcMnTzoBnvRm5GCG2SaEsfPs0nsFXdx1UWqurf9oDp7gxSGT%2F%2BpiSrAmNMEj77bwfZPqTY%2F4OtzLm3r%2FD8s9dlOlRsM3K0fZqQhIfslPaAXfLezXWz0MLMDGFd8WtvjfNTCkYED4KPusFFEdXy8Z%2B%2B%2F9NwTRwe60sOYZsZTLBN1J8C1K&X-Amz-Signature=5ebf17adcf56335843433b137f492e1270aa339b5ae2fbc467a69cd5d0909af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4YSHMU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2FY5LQJS3rTWTJw8OhMazE6ctR%2BbhT5WWnJMIz2oiROQIgMFpZTQqyF6gBy7q03Q48cDDxPlbx3KHNMzkzx72NXSQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDUqBWdaEstZEsAYZyrcAwo0IRcUzCIKc1W4O1Zlo3HaH6yPWtAbtZ0lPGXMFPK7OJCah23dOYw5skdPYznVBlwRCmRZwI%2B8BXQ83cBEwmBrMda2FTkQ%2FOxXwb4jDWKSv8UGq43bjHRfLLHBGiyh9YoKgwrw%2BI0sOtVqVI3pGtphvZRbkcsvc4FS2IPftJt6OZTXDgN77CDYHltNgQ3JdPNVDz9ZsM6otznH5ZtyWboK9hc75Dqa7beOxf51Qv0%2BR3BNNM0halv3uP8ufafxlFM%2B8ioea5dKO5ZOz7KydZ1perSqJ%2FXJgBX1otsQsfymx9LvNupEjd%2B4j%2BpsFRB3qrI5C%2FfI3TpoFoVeijUHyY%2B8IuuHQV6QpXKF4as%2BGQDqKdnNxpX%2BDD58T1UzPx0%2B9KGCR89FPkr5LsxNikzEJpUSWAUPOP3qX6epJ0Os%2FFHQ0JFp5lAa0kUY7f6rX9QXa%2FWDXkq0Wocv5z0YhNx9vuOLqg7WQfES9RfE03Dzve98tqjbdL0quvAnBmS7aXT1jq%2F5BvSl0g1akHFK9dOVjna%2FI9YzXdgPyA2bAsucBYKNj6k9Ix0yyjhnjwJ4SIwwmYw8GKiNO0NzF8lIVn8cTsx0ob8au9B74OB6CSYp6IooDgUsvGntp0kZJz2sMJ2W%2BMkGOqUB56UTSwfoELPR3IFqjgWF7kv9yWfqLERTWJkRapW83X3QHcMnTzoBnvRm5GCG2SaEsfPs0nsFXdx1UWqurf9oDp7gxSGT%2F%2BpiSrAmNMEj77bwfZPqTY%2F4OtzLm3r%2FD8s9dlOlRsM3K0fZqQhIfslPaAXfLezXWz0MLMDGFd8WtvjfNTCkYED4KPusFFEdXy8Z%2B%2B%2F9NwTRwe60sOYZsZTLBN1J8C1K&X-Amz-Signature=e6881260e5dbe7a051529e39acd5aaea33d78105813aa04f0375dc5c236730c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4YSHMU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2FY5LQJS3rTWTJw8OhMazE6ctR%2BbhT5WWnJMIz2oiROQIgMFpZTQqyF6gBy7q03Q48cDDxPlbx3KHNMzkzx72NXSQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDUqBWdaEstZEsAYZyrcAwo0IRcUzCIKc1W4O1Zlo3HaH6yPWtAbtZ0lPGXMFPK7OJCah23dOYw5skdPYznVBlwRCmRZwI%2B8BXQ83cBEwmBrMda2FTkQ%2FOxXwb4jDWKSv8UGq43bjHRfLLHBGiyh9YoKgwrw%2BI0sOtVqVI3pGtphvZRbkcsvc4FS2IPftJt6OZTXDgN77CDYHltNgQ3JdPNVDz9ZsM6otznH5ZtyWboK9hc75Dqa7beOxf51Qv0%2BR3BNNM0halv3uP8ufafxlFM%2B8ioea5dKO5ZOz7KydZ1perSqJ%2FXJgBX1otsQsfymx9LvNupEjd%2B4j%2BpsFRB3qrI5C%2FfI3TpoFoVeijUHyY%2B8IuuHQV6QpXKF4as%2BGQDqKdnNxpX%2BDD58T1UzPx0%2B9KGCR89FPkr5LsxNikzEJpUSWAUPOP3qX6epJ0Os%2FFHQ0JFp5lAa0kUY7f6rX9QXa%2FWDXkq0Wocv5z0YhNx9vuOLqg7WQfES9RfE03Dzve98tqjbdL0quvAnBmS7aXT1jq%2F5BvSl0g1akHFK9dOVjna%2FI9YzXdgPyA2bAsucBYKNj6k9Ix0yyjhnjwJ4SIwwmYw8GKiNO0NzF8lIVn8cTsx0ob8au9B74OB6CSYp6IooDgUsvGntp0kZJz2sMJ2W%2BMkGOqUB56UTSwfoELPR3IFqjgWF7kv9yWfqLERTWJkRapW83X3QHcMnTzoBnvRm5GCG2SaEsfPs0nsFXdx1UWqurf9oDp7gxSGT%2F%2BpiSrAmNMEj77bwfZPqTY%2F4OtzLm3r%2FD8s9dlOlRsM3K0fZqQhIfslPaAXfLezXWz0MLMDGFd8WtvjfNTCkYED4KPusFFEdXy8Z%2B%2B%2F9NwTRwe60sOYZsZTLBN1J8C1K&X-Amz-Signature=d10f760f05373e1add1ecceb6521ca4cf00c460380ea5584dc570302dd34efcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4YSHMU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2FY5LQJS3rTWTJw8OhMazE6ctR%2BbhT5WWnJMIz2oiROQIgMFpZTQqyF6gBy7q03Q48cDDxPlbx3KHNMzkzx72NXSQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDUqBWdaEstZEsAYZyrcAwo0IRcUzCIKc1W4O1Zlo3HaH6yPWtAbtZ0lPGXMFPK7OJCah23dOYw5skdPYznVBlwRCmRZwI%2B8BXQ83cBEwmBrMda2FTkQ%2FOxXwb4jDWKSv8UGq43bjHRfLLHBGiyh9YoKgwrw%2BI0sOtVqVI3pGtphvZRbkcsvc4FS2IPftJt6OZTXDgN77CDYHltNgQ3JdPNVDz9ZsM6otznH5ZtyWboK9hc75Dqa7beOxf51Qv0%2BR3BNNM0halv3uP8ufafxlFM%2B8ioea5dKO5ZOz7KydZ1perSqJ%2FXJgBX1otsQsfymx9LvNupEjd%2B4j%2BpsFRB3qrI5C%2FfI3TpoFoVeijUHyY%2B8IuuHQV6QpXKF4as%2BGQDqKdnNxpX%2BDD58T1UzPx0%2B9KGCR89FPkr5LsxNikzEJpUSWAUPOP3qX6epJ0Os%2FFHQ0JFp5lAa0kUY7f6rX9QXa%2FWDXkq0Wocv5z0YhNx9vuOLqg7WQfES9RfE03Dzve98tqjbdL0quvAnBmS7aXT1jq%2F5BvSl0g1akHFK9dOVjna%2FI9YzXdgPyA2bAsucBYKNj6k9Ix0yyjhnjwJ4SIwwmYw8GKiNO0NzF8lIVn8cTsx0ob8au9B74OB6CSYp6IooDgUsvGntp0kZJz2sMJ2W%2BMkGOqUB56UTSwfoELPR3IFqjgWF7kv9yWfqLERTWJkRapW83X3QHcMnTzoBnvRm5GCG2SaEsfPs0nsFXdx1UWqurf9oDp7gxSGT%2F%2BpiSrAmNMEj77bwfZPqTY%2F4OtzLm3r%2FD8s9dlOlRsM3K0fZqQhIfslPaAXfLezXWz0MLMDGFd8WtvjfNTCkYED4KPusFFEdXy8Z%2B%2B%2F9NwTRwe60sOYZsZTLBN1J8C1K&X-Amz-Signature=5e5ca8549048b6bfc4af3b3559c5e79172780d18305069ec4df50d23d1b9b760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4YSHMU%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2FY5LQJS3rTWTJw8OhMazE6ctR%2BbhT5WWnJMIz2oiROQIgMFpZTQqyF6gBy7q03Q48cDDxPlbx3KHNMzkzx72NXSQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDUqBWdaEstZEsAYZyrcAwo0IRcUzCIKc1W4O1Zlo3HaH6yPWtAbtZ0lPGXMFPK7OJCah23dOYw5skdPYznVBlwRCmRZwI%2B8BXQ83cBEwmBrMda2FTkQ%2FOxXwb4jDWKSv8UGq43bjHRfLLHBGiyh9YoKgwrw%2BI0sOtVqVI3pGtphvZRbkcsvc4FS2IPftJt6OZTXDgN77CDYHltNgQ3JdPNVDz9ZsM6otznH5ZtyWboK9hc75Dqa7beOxf51Qv0%2BR3BNNM0halv3uP8ufafxlFM%2B8ioea5dKO5ZOz7KydZ1perSqJ%2FXJgBX1otsQsfymx9LvNupEjd%2B4j%2BpsFRB3qrI5C%2FfI3TpoFoVeijUHyY%2B8IuuHQV6QpXKF4as%2BGQDqKdnNxpX%2BDD58T1UzPx0%2B9KGCR89FPkr5LsxNikzEJpUSWAUPOP3qX6epJ0Os%2FFHQ0JFp5lAa0kUY7f6rX9QXa%2FWDXkq0Wocv5z0YhNx9vuOLqg7WQfES9RfE03Dzve98tqjbdL0quvAnBmS7aXT1jq%2F5BvSl0g1akHFK9dOVjna%2FI9YzXdgPyA2bAsucBYKNj6k9Ix0yyjhnjwJ4SIwwmYw8GKiNO0NzF8lIVn8cTsx0ob8au9B74OB6CSYp6IooDgUsvGntp0kZJz2sMJ2W%2BMkGOqUB56UTSwfoELPR3IFqjgWF7kv9yWfqLERTWJkRapW83X3QHcMnTzoBnvRm5GCG2SaEsfPs0nsFXdx1UWqurf9oDp7gxSGT%2F%2BpiSrAmNMEj77bwfZPqTY%2F4OtzLm3r%2FD8s9dlOlRsM3K0fZqQhIfslPaAXfLezXWz0MLMDGFd8WtvjfNTCkYED4KPusFFEdXy8Z%2B%2B%2F9NwTRwe60sOYZsZTLBN1J8C1K&X-Amz-Signature=18b26ec3a793429b5b30d4e3989ba55aab7664c8130a3687bfe632c6996c1a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
