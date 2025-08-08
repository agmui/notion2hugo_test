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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQEBHES%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICfvEKDEIgM4NsHJ%2FpKDFHj%2BKjbpo1kp0QIPVJ9nurMhAiBYGW9mOtrNZS%2BkSR638U8z4jbu%2FxEWhifbrfC3cPlWcCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdpN7aQzMwtbUiH6dKtwDtWw0Z9vOLwo6V1dP%2FF4m7JQMBvPWEM7Iw2TUaXrhzmOKZFF9WNi1KJR7UBJxmwXNwLWz4G2xW%2FLwR0SMaMzNPk%2BqCOQPk%2FsEEdSqeT026RejqsrOi3WTtWvJFzaqP8uzkKa2vNAUS4UWNdgSQ5uqCk3L7YnChZAeNw7RMYhrobF1E9Qae0CzP%2F%2FIjMyydF6RPPIIq7n%2B%2BUhudtnDW1y3CLAinTyR81JDhNCvEQHNyN8wtWUKfsoqtbWs4DG%2B9u0ZJNLek9aeenQO0IN2izqbk7%2BzhHTocYzj5RtdZJrmZ5JH6XBstJaxbS4dabDshxBb2dnXuGq1SSOioUwZ4TI5NQE6Dm7is3Abem3vEEtjAfF%2BF3BJ0lJNS9%2BEvafM67OPA8H%2BwVio1A3nnXEnF%2B91hdydeokOrdk%2FJcjCG%2FxjNV%2FR5nYcKPtj215t%2B6xKMyfwoqvWEACJIaR3B7o6rR6uMRJPsYM78%2F2KGUv83fZ0JfZOdZrLkh5p0p9Y32BP6Ocggjr7SPCCvGVzhveZ4fmaTWDj%2Bn%2BWfTEw1GLJVVOjFaYngdiId1n%2FAWeVCfENedzswMZjcCDrHu%2BMcvrN4E53Lx49EHtomg9s944XHoVIY2z0aW3N2y060mECBfEwnbvZxAY6pgFQSXf%2Fgml9nouISrPtgwv4DPSBXnFFncoZ5QH8g1NebB9fAmRGDSlntjrqdNs7o6M68Mt5z30zZVt%2B4VFyy1W2u9iqlNTOGqs%2F2z2M8PB9u4zDl1Rb7O43GnAjQMuzcWs6lF8OItdTPOYsvkZnJwpG8KEexjc7h%2FKOCF%2BMHRsK%2FrN5VuUeowGS9%2FLkpSVL%2BjqFaIz7WQ6NBq%2BPw7wv%2FeTuDXWHtbUS&X-Amz-Signature=4f1de05d3d590567afbfa101ef7888607a1dc9c702c28725d293d38fb9289f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATNPEBA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICPi1XiKlYmX%2BKdPnYrfwhOjT1qowf6zx5mAyoGEq99RAiAy2rAYbIvkqEGYv82aPFAg4mrq2q01s2nHG%2FrEiRcrCyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXF2J5OvXmHMAL%2BXKtwDHOPSKn9XQoIsf6qezmlZYnSxyEk2LQFLTyWIBRJsElLvyBsmu9f%2BRAcFFt6chaScsi0Sl%2BK%2BR5YAp%2FtiGzW5b7QIquYSLNrsEIAcY3UPrrK2YF0BV1%2FnzvVsz%2BLFSmA5HtwlRVdoTtTHFx8wuZpWZzQfWAiTxo9NS3g%2FfdlUW2DyGQoduYl6okb8I9JsWGxaX2hPanxk677zfol0LTazMw3WfDcF0FUYJmb9tEqMqyTso%2FlfDkvZUtEQ9G0spbEeDiUw8x%2Fnv7qyB5jBOmXTyBQTNb%2Bgns7uqGQGSPp%2BQwYkffGiHTM3153n5dKonwXO73nqpIZQnYGTXU3finnNILh98AX2YoA5Pr0OQHjBG7HQGOiyu%2FGnJoXBSS9hvag1q7Z2RvYbJcUvtkqlrC04%2BxT1TYJPEEM3XkTBgm9uQfSCki5jAcad9wCAtNSV6sE7L7nozNX1arvIhX42ACdKeDG2sdmo3ufuDeMTb%2B41DrfdKFQDvsvjI6NDc1FPbAWNoD71wOMlMbaPEArhAMPNTuYgn8B5RNKQn5zHJzhbs0jkbi%2Fy%2B1eHXWf1xcCSTYaVMkoH99nY8iGBameE2gVpx9GnMyUqyEEWduJFqhUx7o4Qijta8o4tW4xiRVEwibvZxAY6pgH3iKvcW82%2FJYKTFVvSSSmONB8m4W8XtFsN792Bw9AwRcIa5seaYNgdK2HTkvpHxSE0jcIY1CdPPQ2z5xWGF%2B%2BRKIR7OHNzq5RQh96IRF8xAGYHfpzZiPQvYfeFaCWFOVfdEr8m1dOnb5z1SnUXwy%2B9ZyrIRrks4cHC6%2BGScRwg0rhcU%2B1uvnD2i%2BahwE7S4ygi%2Fj54qAeqA7XdsvXClDvroBPr8zJw&X-Amz-Signature=e1b5c814a81201ccfcd1d7cc6e8ffa0d0bc5ed82289244402636ac72375d281c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATNPEBA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICPi1XiKlYmX%2BKdPnYrfwhOjT1qowf6zx5mAyoGEq99RAiAy2rAYbIvkqEGYv82aPFAg4mrq2q01s2nHG%2FrEiRcrCyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXF2J5OvXmHMAL%2BXKtwDHOPSKn9XQoIsf6qezmlZYnSxyEk2LQFLTyWIBRJsElLvyBsmu9f%2BRAcFFt6chaScsi0Sl%2BK%2BR5YAp%2FtiGzW5b7QIquYSLNrsEIAcY3UPrrK2YF0BV1%2FnzvVsz%2BLFSmA5HtwlRVdoTtTHFx8wuZpWZzQfWAiTxo9NS3g%2FfdlUW2DyGQoduYl6okb8I9JsWGxaX2hPanxk677zfol0LTazMw3WfDcF0FUYJmb9tEqMqyTso%2FlfDkvZUtEQ9G0spbEeDiUw8x%2Fnv7qyB5jBOmXTyBQTNb%2Bgns7uqGQGSPp%2BQwYkffGiHTM3153n5dKonwXO73nqpIZQnYGTXU3finnNILh98AX2YoA5Pr0OQHjBG7HQGOiyu%2FGnJoXBSS9hvag1q7Z2RvYbJcUvtkqlrC04%2BxT1TYJPEEM3XkTBgm9uQfSCki5jAcad9wCAtNSV6sE7L7nozNX1arvIhX42ACdKeDG2sdmo3ufuDeMTb%2B41DrfdKFQDvsvjI6NDc1FPbAWNoD71wOMlMbaPEArhAMPNTuYgn8B5RNKQn5zHJzhbs0jkbi%2Fy%2B1eHXWf1xcCSTYaVMkoH99nY8iGBameE2gVpx9GnMyUqyEEWduJFqhUx7o4Qijta8o4tW4xiRVEwibvZxAY6pgH3iKvcW82%2FJYKTFVvSSSmONB8m4W8XtFsN792Bw9AwRcIa5seaYNgdK2HTkvpHxSE0jcIY1CdPPQ2z5xWGF%2B%2BRKIR7OHNzq5RQh96IRF8xAGYHfpzZiPQvYfeFaCWFOVfdEr8m1dOnb5z1SnUXwy%2B9ZyrIRrks4cHC6%2BGScRwg0rhcU%2B1uvnD2i%2BahwE7S4ygi%2Fj54qAeqA7XdsvXClDvroBPr8zJw&X-Amz-Signature=5ee36e30d57fececd7932aa4b549e37d266280d302effb7fa45b51007417bed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATNPEBA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICPi1XiKlYmX%2BKdPnYrfwhOjT1qowf6zx5mAyoGEq99RAiAy2rAYbIvkqEGYv82aPFAg4mrq2q01s2nHG%2FrEiRcrCyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXF2J5OvXmHMAL%2BXKtwDHOPSKn9XQoIsf6qezmlZYnSxyEk2LQFLTyWIBRJsElLvyBsmu9f%2BRAcFFt6chaScsi0Sl%2BK%2BR5YAp%2FtiGzW5b7QIquYSLNrsEIAcY3UPrrK2YF0BV1%2FnzvVsz%2BLFSmA5HtwlRVdoTtTHFx8wuZpWZzQfWAiTxo9NS3g%2FfdlUW2DyGQoduYl6okb8I9JsWGxaX2hPanxk677zfol0LTazMw3WfDcF0FUYJmb9tEqMqyTso%2FlfDkvZUtEQ9G0spbEeDiUw8x%2Fnv7qyB5jBOmXTyBQTNb%2Bgns7uqGQGSPp%2BQwYkffGiHTM3153n5dKonwXO73nqpIZQnYGTXU3finnNILh98AX2YoA5Pr0OQHjBG7HQGOiyu%2FGnJoXBSS9hvag1q7Z2RvYbJcUvtkqlrC04%2BxT1TYJPEEM3XkTBgm9uQfSCki5jAcad9wCAtNSV6sE7L7nozNX1arvIhX42ACdKeDG2sdmo3ufuDeMTb%2B41DrfdKFQDvsvjI6NDc1FPbAWNoD71wOMlMbaPEArhAMPNTuYgn8B5RNKQn5zHJzhbs0jkbi%2Fy%2B1eHXWf1xcCSTYaVMkoH99nY8iGBameE2gVpx9GnMyUqyEEWduJFqhUx7o4Qijta8o4tW4xiRVEwibvZxAY6pgH3iKvcW82%2FJYKTFVvSSSmONB8m4W8XtFsN792Bw9AwRcIa5seaYNgdK2HTkvpHxSE0jcIY1CdPPQ2z5xWGF%2B%2BRKIR7OHNzq5RQh96IRF8xAGYHfpzZiPQvYfeFaCWFOVfdEr8m1dOnb5z1SnUXwy%2B9ZyrIRrks4cHC6%2BGScRwg0rhcU%2B1uvnD2i%2BahwE7S4ygi%2Fj54qAeqA7XdsvXClDvroBPr8zJw&X-Amz-Signature=01f16c389729c07061e9ca78eca735fbf866d90fac0521cfc06900a000fdc908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATNPEBA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICPi1XiKlYmX%2BKdPnYrfwhOjT1qowf6zx5mAyoGEq99RAiAy2rAYbIvkqEGYv82aPFAg4mrq2q01s2nHG%2FrEiRcrCyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXF2J5OvXmHMAL%2BXKtwDHOPSKn9XQoIsf6qezmlZYnSxyEk2LQFLTyWIBRJsElLvyBsmu9f%2BRAcFFt6chaScsi0Sl%2BK%2BR5YAp%2FtiGzW5b7QIquYSLNrsEIAcY3UPrrK2YF0BV1%2FnzvVsz%2BLFSmA5HtwlRVdoTtTHFx8wuZpWZzQfWAiTxo9NS3g%2FfdlUW2DyGQoduYl6okb8I9JsWGxaX2hPanxk677zfol0LTazMw3WfDcF0FUYJmb9tEqMqyTso%2FlfDkvZUtEQ9G0spbEeDiUw8x%2Fnv7qyB5jBOmXTyBQTNb%2Bgns7uqGQGSPp%2BQwYkffGiHTM3153n5dKonwXO73nqpIZQnYGTXU3finnNILh98AX2YoA5Pr0OQHjBG7HQGOiyu%2FGnJoXBSS9hvag1q7Z2RvYbJcUvtkqlrC04%2BxT1TYJPEEM3XkTBgm9uQfSCki5jAcad9wCAtNSV6sE7L7nozNX1arvIhX42ACdKeDG2sdmo3ufuDeMTb%2B41DrfdKFQDvsvjI6NDc1FPbAWNoD71wOMlMbaPEArhAMPNTuYgn8B5RNKQn5zHJzhbs0jkbi%2Fy%2B1eHXWf1xcCSTYaVMkoH99nY8iGBameE2gVpx9GnMyUqyEEWduJFqhUx7o4Qijta8o4tW4xiRVEwibvZxAY6pgH3iKvcW82%2FJYKTFVvSSSmONB8m4W8XtFsN792Bw9AwRcIa5seaYNgdK2HTkvpHxSE0jcIY1CdPPQ2z5xWGF%2B%2BRKIR7OHNzq5RQh96IRF8xAGYHfpzZiPQvYfeFaCWFOVfdEr8m1dOnb5z1SnUXwy%2B9ZyrIRrks4cHC6%2BGScRwg0rhcU%2B1uvnD2i%2BahwE7S4ygi%2Fj54qAeqA7XdsvXClDvroBPr8zJw&X-Amz-Signature=b865bd74ca58ed466a515d2d52219a8a6e38d552f1ef0f36b93ff56cc525473b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATNPEBA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICPi1XiKlYmX%2BKdPnYrfwhOjT1qowf6zx5mAyoGEq99RAiAy2rAYbIvkqEGYv82aPFAg4mrq2q01s2nHG%2FrEiRcrCyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXF2J5OvXmHMAL%2BXKtwDHOPSKn9XQoIsf6qezmlZYnSxyEk2LQFLTyWIBRJsElLvyBsmu9f%2BRAcFFt6chaScsi0Sl%2BK%2BR5YAp%2FtiGzW5b7QIquYSLNrsEIAcY3UPrrK2YF0BV1%2FnzvVsz%2BLFSmA5HtwlRVdoTtTHFx8wuZpWZzQfWAiTxo9NS3g%2FfdlUW2DyGQoduYl6okb8I9JsWGxaX2hPanxk677zfol0LTazMw3WfDcF0FUYJmb9tEqMqyTso%2FlfDkvZUtEQ9G0spbEeDiUw8x%2Fnv7qyB5jBOmXTyBQTNb%2Bgns7uqGQGSPp%2BQwYkffGiHTM3153n5dKonwXO73nqpIZQnYGTXU3finnNILh98AX2YoA5Pr0OQHjBG7HQGOiyu%2FGnJoXBSS9hvag1q7Z2RvYbJcUvtkqlrC04%2BxT1TYJPEEM3XkTBgm9uQfSCki5jAcad9wCAtNSV6sE7L7nozNX1arvIhX42ACdKeDG2sdmo3ufuDeMTb%2B41DrfdKFQDvsvjI6NDc1FPbAWNoD71wOMlMbaPEArhAMPNTuYgn8B5RNKQn5zHJzhbs0jkbi%2Fy%2B1eHXWf1xcCSTYaVMkoH99nY8iGBameE2gVpx9GnMyUqyEEWduJFqhUx7o4Qijta8o4tW4xiRVEwibvZxAY6pgH3iKvcW82%2FJYKTFVvSSSmONB8m4W8XtFsN792Bw9AwRcIa5seaYNgdK2HTkvpHxSE0jcIY1CdPPQ2z5xWGF%2B%2BRKIR7OHNzq5RQh96IRF8xAGYHfpzZiPQvYfeFaCWFOVfdEr8m1dOnb5z1SnUXwy%2B9ZyrIRrks4cHC6%2BGScRwg0rhcU%2B1uvnD2i%2BahwE7S4ygi%2Fj54qAeqA7XdsvXClDvroBPr8zJw&X-Amz-Signature=dfa63e1dce1e481099247ac38c3da5842f692e6a4b084b1685e6c11b890f8f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATNPEBA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICPi1XiKlYmX%2BKdPnYrfwhOjT1qowf6zx5mAyoGEq99RAiAy2rAYbIvkqEGYv82aPFAg4mrq2q01s2nHG%2FrEiRcrCyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXF2J5OvXmHMAL%2BXKtwDHOPSKn9XQoIsf6qezmlZYnSxyEk2LQFLTyWIBRJsElLvyBsmu9f%2BRAcFFt6chaScsi0Sl%2BK%2BR5YAp%2FtiGzW5b7QIquYSLNrsEIAcY3UPrrK2YF0BV1%2FnzvVsz%2BLFSmA5HtwlRVdoTtTHFx8wuZpWZzQfWAiTxo9NS3g%2FfdlUW2DyGQoduYl6okb8I9JsWGxaX2hPanxk677zfol0LTazMw3WfDcF0FUYJmb9tEqMqyTso%2FlfDkvZUtEQ9G0spbEeDiUw8x%2Fnv7qyB5jBOmXTyBQTNb%2Bgns7uqGQGSPp%2BQwYkffGiHTM3153n5dKonwXO73nqpIZQnYGTXU3finnNILh98AX2YoA5Pr0OQHjBG7HQGOiyu%2FGnJoXBSS9hvag1q7Z2RvYbJcUvtkqlrC04%2BxT1TYJPEEM3XkTBgm9uQfSCki5jAcad9wCAtNSV6sE7L7nozNX1arvIhX42ACdKeDG2sdmo3ufuDeMTb%2B41DrfdKFQDvsvjI6NDc1FPbAWNoD71wOMlMbaPEArhAMPNTuYgn8B5RNKQn5zHJzhbs0jkbi%2Fy%2B1eHXWf1xcCSTYaVMkoH99nY8iGBameE2gVpx9GnMyUqyEEWduJFqhUx7o4Qijta8o4tW4xiRVEwibvZxAY6pgH3iKvcW82%2FJYKTFVvSSSmONB8m4W8XtFsN792Bw9AwRcIa5seaYNgdK2HTkvpHxSE0jcIY1CdPPQ2z5xWGF%2B%2BRKIR7OHNzq5RQh96IRF8xAGYHfpzZiPQvYfeFaCWFOVfdEr8m1dOnb5z1SnUXwy%2B9ZyrIRrks4cHC6%2BGScRwg0rhcU%2B1uvnD2i%2BahwE7S4ygi%2Fj54qAeqA7XdsvXClDvroBPr8zJw&X-Amz-Signature=6c906221ef3c3e122b07a3d14ba950078b7dc1f7a96c3bf0fb584766faf045e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATNPEBA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICPi1XiKlYmX%2BKdPnYrfwhOjT1qowf6zx5mAyoGEq99RAiAy2rAYbIvkqEGYv82aPFAg4mrq2q01s2nHG%2FrEiRcrCyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXF2J5OvXmHMAL%2BXKtwDHOPSKn9XQoIsf6qezmlZYnSxyEk2LQFLTyWIBRJsElLvyBsmu9f%2BRAcFFt6chaScsi0Sl%2BK%2BR5YAp%2FtiGzW5b7QIquYSLNrsEIAcY3UPrrK2YF0BV1%2FnzvVsz%2BLFSmA5HtwlRVdoTtTHFx8wuZpWZzQfWAiTxo9NS3g%2FfdlUW2DyGQoduYl6okb8I9JsWGxaX2hPanxk677zfol0LTazMw3WfDcF0FUYJmb9tEqMqyTso%2FlfDkvZUtEQ9G0spbEeDiUw8x%2Fnv7qyB5jBOmXTyBQTNb%2Bgns7uqGQGSPp%2BQwYkffGiHTM3153n5dKonwXO73nqpIZQnYGTXU3finnNILh98AX2YoA5Pr0OQHjBG7HQGOiyu%2FGnJoXBSS9hvag1q7Z2RvYbJcUvtkqlrC04%2BxT1TYJPEEM3XkTBgm9uQfSCki5jAcad9wCAtNSV6sE7L7nozNX1arvIhX42ACdKeDG2sdmo3ufuDeMTb%2B41DrfdKFQDvsvjI6NDc1FPbAWNoD71wOMlMbaPEArhAMPNTuYgn8B5RNKQn5zHJzhbs0jkbi%2Fy%2B1eHXWf1xcCSTYaVMkoH99nY8iGBameE2gVpx9GnMyUqyEEWduJFqhUx7o4Qijta8o4tW4xiRVEwibvZxAY6pgH3iKvcW82%2FJYKTFVvSSSmONB8m4W8XtFsN792Bw9AwRcIa5seaYNgdK2HTkvpHxSE0jcIY1CdPPQ2z5xWGF%2B%2BRKIR7OHNzq5RQh96IRF8xAGYHfpzZiPQvYfeFaCWFOVfdEr8m1dOnb5z1SnUXwy%2B9ZyrIRrks4cHC6%2BGScRwg0rhcU%2B1uvnD2i%2BahwE7S4ygi%2Fj54qAeqA7XdsvXClDvroBPr8zJw&X-Amz-Signature=b5762fa63414e1f8856bfca05c1080f3c7cd81041a83188eb3efc7f01097dd85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATNPEBA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICPi1XiKlYmX%2BKdPnYrfwhOjT1qowf6zx5mAyoGEq99RAiAy2rAYbIvkqEGYv82aPFAg4mrq2q01s2nHG%2FrEiRcrCyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXF2J5OvXmHMAL%2BXKtwDHOPSKn9XQoIsf6qezmlZYnSxyEk2LQFLTyWIBRJsElLvyBsmu9f%2BRAcFFt6chaScsi0Sl%2BK%2BR5YAp%2FtiGzW5b7QIquYSLNrsEIAcY3UPrrK2YF0BV1%2FnzvVsz%2BLFSmA5HtwlRVdoTtTHFx8wuZpWZzQfWAiTxo9NS3g%2FfdlUW2DyGQoduYl6okb8I9JsWGxaX2hPanxk677zfol0LTazMw3WfDcF0FUYJmb9tEqMqyTso%2FlfDkvZUtEQ9G0spbEeDiUw8x%2Fnv7qyB5jBOmXTyBQTNb%2Bgns7uqGQGSPp%2BQwYkffGiHTM3153n5dKonwXO73nqpIZQnYGTXU3finnNILh98AX2YoA5Pr0OQHjBG7HQGOiyu%2FGnJoXBSS9hvag1q7Z2RvYbJcUvtkqlrC04%2BxT1TYJPEEM3XkTBgm9uQfSCki5jAcad9wCAtNSV6sE7L7nozNX1arvIhX42ACdKeDG2sdmo3ufuDeMTb%2B41DrfdKFQDvsvjI6NDc1FPbAWNoD71wOMlMbaPEArhAMPNTuYgn8B5RNKQn5zHJzhbs0jkbi%2Fy%2B1eHXWf1xcCSTYaVMkoH99nY8iGBameE2gVpx9GnMyUqyEEWduJFqhUx7o4Qijta8o4tW4xiRVEwibvZxAY6pgH3iKvcW82%2FJYKTFVvSSSmONB8m4W8XtFsN792Bw9AwRcIa5seaYNgdK2HTkvpHxSE0jcIY1CdPPQ2z5xWGF%2B%2BRKIR7OHNzq5RQh96IRF8xAGYHfpzZiPQvYfeFaCWFOVfdEr8m1dOnb5z1SnUXwy%2B9ZyrIRrks4cHC6%2BGScRwg0rhcU%2B1uvnD2i%2BahwE7S4ygi%2Fj54qAeqA7XdsvXClDvroBPr8zJw&X-Amz-Signature=1226a8559a2fbfc4dd14b725453398c7ad9607c571fd023d4cf7d658105d2692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATNPEBA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICPi1XiKlYmX%2BKdPnYrfwhOjT1qowf6zx5mAyoGEq99RAiAy2rAYbIvkqEGYv82aPFAg4mrq2q01s2nHG%2FrEiRcrCyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXF2J5OvXmHMAL%2BXKtwDHOPSKn9XQoIsf6qezmlZYnSxyEk2LQFLTyWIBRJsElLvyBsmu9f%2BRAcFFt6chaScsi0Sl%2BK%2BR5YAp%2FtiGzW5b7QIquYSLNrsEIAcY3UPrrK2YF0BV1%2FnzvVsz%2BLFSmA5HtwlRVdoTtTHFx8wuZpWZzQfWAiTxo9NS3g%2FfdlUW2DyGQoduYl6okb8I9JsWGxaX2hPanxk677zfol0LTazMw3WfDcF0FUYJmb9tEqMqyTso%2FlfDkvZUtEQ9G0spbEeDiUw8x%2Fnv7qyB5jBOmXTyBQTNb%2Bgns7uqGQGSPp%2BQwYkffGiHTM3153n5dKonwXO73nqpIZQnYGTXU3finnNILh98AX2YoA5Pr0OQHjBG7HQGOiyu%2FGnJoXBSS9hvag1q7Z2RvYbJcUvtkqlrC04%2BxT1TYJPEEM3XkTBgm9uQfSCki5jAcad9wCAtNSV6sE7L7nozNX1arvIhX42ACdKeDG2sdmo3ufuDeMTb%2B41DrfdKFQDvsvjI6NDc1FPbAWNoD71wOMlMbaPEArhAMPNTuYgn8B5RNKQn5zHJzhbs0jkbi%2Fy%2B1eHXWf1xcCSTYaVMkoH99nY8iGBameE2gVpx9GnMyUqyEEWduJFqhUx7o4Qijta8o4tW4xiRVEwibvZxAY6pgH3iKvcW82%2FJYKTFVvSSSmONB8m4W8XtFsN792Bw9AwRcIa5seaYNgdK2HTkvpHxSE0jcIY1CdPPQ2z5xWGF%2B%2BRKIR7OHNzq5RQh96IRF8xAGYHfpzZiPQvYfeFaCWFOVfdEr8m1dOnb5z1SnUXwy%2B9ZyrIRrks4cHC6%2BGScRwg0rhcU%2B1uvnD2i%2BahwE7S4ygi%2Fj54qAeqA7XdsvXClDvroBPr8zJw&X-Amz-Signature=ddbe533c4d365c2d65dd4cc71e22557e17e0a54b1cc5f4caa41027cc177c5ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATNPEBA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICPi1XiKlYmX%2BKdPnYrfwhOjT1qowf6zx5mAyoGEq99RAiAy2rAYbIvkqEGYv82aPFAg4mrq2q01s2nHG%2FrEiRcrCyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXF2J5OvXmHMAL%2BXKtwDHOPSKn9XQoIsf6qezmlZYnSxyEk2LQFLTyWIBRJsElLvyBsmu9f%2BRAcFFt6chaScsi0Sl%2BK%2BR5YAp%2FtiGzW5b7QIquYSLNrsEIAcY3UPrrK2YF0BV1%2FnzvVsz%2BLFSmA5HtwlRVdoTtTHFx8wuZpWZzQfWAiTxo9NS3g%2FfdlUW2DyGQoduYl6okb8I9JsWGxaX2hPanxk677zfol0LTazMw3WfDcF0FUYJmb9tEqMqyTso%2FlfDkvZUtEQ9G0spbEeDiUw8x%2Fnv7qyB5jBOmXTyBQTNb%2Bgns7uqGQGSPp%2BQwYkffGiHTM3153n5dKonwXO73nqpIZQnYGTXU3finnNILh98AX2YoA5Pr0OQHjBG7HQGOiyu%2FGnJoXBSS9hvag1q7Z2RvYbJcUvtkqlrC04%2BxT1TYJPEEM3XkTBgm9uQfSCki5jAcad9wCAtNSV6sE7L7nozNX1arvIhX42ACdKeDG2sdmo3ufuDeMTb%2B41DrfdKFQDvsvjI6NDc1FPbAWNoD71wOMlMbaPEArhAMPNTuYgn8B5RNKQn5zHJzhbs0jkbi%2Fy%2B1eHXWf1xcCSTYaVMkoH99nY8iGBameE2gVpx9GnMyUqyEEWduJFqhUx7o4Qijta8o4tW4xiRVEwibvZxAY6pgH3iKvcW82%2FJYKTFVvSSSmONB8m4W8XtFsN792Bw9AwRcIa5seaYNgdK2HTkvpHxSE0jcIY1CdPPQ2z5xWGF%2B%2BRKIR7OHNzq5RQh96IRF8xAGYHfpzZiPQvYfeFaCWFOVfdEr8m1dOnb5z1SnUXwy%2B9ZyrIRrks4cHC6%2BGScRwg0rhcU%2B1uvnD2i%2BahwE7S4ygi%2Fj54qAeqA7XdsvXClDvroBPr8zJw&X-Amz-Signature=b865bd74ca58ed466a515d2d52219a8a6e38d552f1ef0f36b93ff56cc525473b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
