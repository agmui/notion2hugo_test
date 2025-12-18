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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V55R64T%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FNK9BhWMW2gp65nmp9mRzU8i3OW6ghxvDyP2vqNq3%2BgIhAPKea9uNaKIuwXiCkqdwhBsDJZwHQkgRU%2FXoOd627xp2KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjjkImuFr1HFFKc6gq3AMcipu1rkg93tcqjNsAs3DY9bzxKCYQ3lWMoN0rGBOgEWmwHTRAK6Q8%2FHLno0c6aU9DpMciYHpxSDwJqGNKmawb5x3ZbyMYItZjhbvHyjwCyW%2BSV5zSTRmcG8aP4wmTr7zeeKDysmtOSsQrG9VCTvG7FlDhr6OdVH9O2NZEbW7i00TFG%2F9biMcFYXtS7hLspJ0o9ddenlR3pCDbXnfR54KB6N63sS1FlHmkVKDQ2gH5MAYD1MsBar47EgNRTZzBeDLmCkAPPu3Rwm8MWFzmhf5g9LHedGo9aZbcIpu%2FcUYzeGJ0CcSDdSJWArUelM4ubDWy1iPqe72WilEyjN0xKuJVKnUDQX1fEnguaU7gGkTwThFiSRwIZo2ndmPQtRmiTGI7S254DC3spW41Wmq8IpNIhxVAVh3xWwgV17VNhqawRKgp7l1AiCWwlkgJDqYIdwbSvEQ4XM0gZZ%2FfoW9XxUxzQYZQelUTcwR%2Fa8GpOsY7NOOwHInex7eHQhfIyUr2tDsfxD1byAIjTBNMuBYxVNRAuu1ECKU0T8PVqvQCe7BZMvd54iiexm0k%2FGI4UVNDTKiYRmXGd73WzPWSc0boVOxOwO2TbIrm7qFOqbmkI%2B9bBh3nol2zkBzkrapZ%2FDDzrI3KBjqkAdgG2d0x6syBlPES4VhZeXJCPiXdr3L5wIKcHcY41WwGIlt7L1i378wmeohwauh1BjIrasVcoveJ7Imyd0Z0f7cTJPGEv4BTQ%2FR83RLmtEOdInzhscjVZvwoUs6PdJnR1XZZEyTkb%2B4ROEohlMqKTTr3HsirBuN4LZrQ26pglkSUNvn8NOl69%2FvNHW3xSRhBMtCOrvGqpoIjh6xZ%2FbW2oA3T52sN&X-Amz-Signature=8ba3cc65e20fe8b09580419d9b46c4fb45efcfd3ffa4ad2f5a00d0fc8a7a3d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V2V6E5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9itC0gS0JEeKnnYo2qL9uQZwvrkBSEUaO5c5ujXL0ygIhAN1Wse3KH1hsLESaFXqcXHIIai5cmlj8c%2BgZAGJws2txKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7tzwZH4%2FvyqHFCkq3ANmHKxAeglo9gfGuRMgYP%2FK33gspH6KZS2CfyYqG2BUeOwT0Ognmp1z1DJ5psm7pKbduj4vy9fpP6i0UNjFMzrvDv%2F2OG0%2FQdZGYbkCQtl9lwC786sX4NgGqP%2FR8sNVAoBFtYHhNflBpZMZaoHkUPm50iwzAtq%2F33a07%2BIlNQHG8miQwEA7jzT2xkelbiwHri4ubz1B17urjgcsdkRxqPjEEN7w4QDFi90kueQltuhGJswiGOa6bC4QvE18Z1v60oMGSmuCxQ%2F6yT%2BsUmKEtc6DBh0fPjJQ1c6C1ZmB77GBTgFXjjjGB1i1s%2F2s5x0pC1Sbxe7PFyPvIaOdlyt45YAXE3jyis5orRg13duHYBSENxG6qfGrLD5nnE6EM49MiyWUjp3QODMHtJm%2B0PGoGO4EghwimzoUVIwQ8XINF582hQ9OcN17PMlVGBQwxtqg%2BH5GpelmkGcu8ueAix5uSl53QNnL1gsLc2oNQqwjC7v4CC8LTT%2FY454SVeTtADpKdqJBzrPVBrC%2FuXj%2Fe%2BnTdLyk9F2plXoz03pCAiqLCPPk4IGwYLjZAXwkOnNMh4CcgqWh09uKzV28q0rI%2FY4nVPHiO6Oa5ucfRgSQ5r0ihl368uxZmSvjZ29az8F57jCPr43KBjqkAYPruQ7n3a%2FLJ5NosAvceezDkl0GkMe6OrWFw3Beg1VSOsGFdSm8ns3JQYSt597arHySb7vPvtyalTwrfzO6wAdVvKDIU9HHGyUsOquQL4RkoIDrdiUZ9s4nGf4ak1jhCBFsIXyqBGvnFFibOfHBsR1Q%2F40Jzru6NGrbIfAaCZRovy7Q8Fuj6CkNbR3gV3vlHtIcZYSW9YiFHcwPtANVgeHxp0%2FO&X-Amz-Signature=c15dac60764b24f2a7ecac444d4f6d5847efc5e8b44b625aff84cd73bb8eb6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V2V6E5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9itC0gS0JEeKnnYo2qL9uQZwvrkBSEUaO5c5ujXL0ygIhAN1Wse3KH1hsLESaFXqcXHIIai5cmlj8c%2BgZAGJws2txKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7tzwZH4%2FvyqHFCkq3ANmHKxAeglo9gfGuRMgYP%2FK33gspH6KZS2CfyYqG2BUeOwT0Ognmp1z1DJ5psm7pKbduj4vy9fpP6i0UNjFMzrvDv%2F2OG0%2FQdZGYbkCQtl9lwC786sX4NgGqP%2FR8sNVAoBFtYHhNflBpZMZaoHkUPm50iwzAtq%2F33a07%2BIlNQHG8miQwEA7jzT2xkelbiwHri4ubz1B17urjgcsdkRxqPjEEN7w4QDFi90kueQltuhGJswiGOa6bC4QvE18Z1v60oMGSmuCxQ%2F6yT%2BsUmKEtc6DBh0fPjJQ1c6C1ZmB77GBTgFXjjjGB1i1s%2F2s5x0pC1Sbxe7PFyPvIaOdlyt45YAXE3jyis5orRg13duHYBSENxG6qfGrLD5nnE6EM49MiyWUjp3QODMHtJm%2B0PGoGO4EghwimzoUVIwQ8XINF582hQ9OcN17PMlVGBQwxtqg%2BH5GpelmkGcu8ueAix5uSl53QNnL1gsLc2oNQqwjC7v4CC8LTT%2FY454SVeTtADpKdqJBzrPVBrC%2FuXj%2Fe%2BnTdLyk9F2plXoz03pCAiqLCPPk4IGwYLjZAXwkOnNMh4CcgqWh09uKzV28q0rI%2FY4nVPHiO6Oa5ucfRgSQ5r0ihl368uxZmSvjZ29az8F57jCPr43KBjqkAYPruQ7n3a%2FLJ5NosAvceezDkl0GkMe6OrWFw3Beg1VSOsGFdSm8ns3JQYSt597arHySb7vPvtyalTwrfzO6wAdVvKDIU9HHGyUsOquQL4RkoIDrdiUZ9s4nGf4ak1jhCBFsIXyqBGvnFFibOfHBsR1Q%2F40Jzru6NGrbIfAaCZRovy7Q8Fuj6CkNbR3gV3vlHtIcZYSW9YiFHcwPtANVgeHxp0%2FO&X-Amz-Signature=e347948ed112c6b047d02fc692df8fc50a711ed7a8d4be703b76d157dbc8a4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V2V6E5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9itC0gS0JEeKnnYo2qL9uQZwvrkBSEUaO5c5ujXL0ygIhAN1Wse3KH1hsLESaFXqcXHIIai5cmlj8c%2BgZAGJws2txKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7tzwZH4%2FvyqHFCkq3ANmHKxAeglo9gfGuRMgYP%2FK33gspH6KZS2CfyYqG2BUeOwT0Ognmp1z1DJ5psm7pKbduj4vy9fpP6i0UNjFMzrvDv%2F2OG0%2FQdZGYbkCQtl9lwC786sX4NgGqP%2FR8sNVAoBFtYHhNflBpZMZaoHkUPm50iwzAtq%2F33a07%2BIlNQHG8miQwEA7jzT2xkelbiwHri4ubz1B17urjgcsdkRxqPjEEN7w4QDFi90kueQltuhGJswiGOa6bC4QvE18Z1v60oMGSmuCxQ%2F6yT%2BsUmKEtc6DBh0fPjJQ1c6C1ZmB77GBTgFXjjjGB1i1s%2F2s5x0pC1Sbxe7PFyPvIaOdlyt45YAXE3jyis5orRg13duHYBSENxG6qfGrLD5nnE6EM49MiyWUjp3QODMHtJm%2B0PGoGO4EghwimzoUVIwQ8XINF582hQ9OcN17PMlVGBQwxtqg%2BH5GpelmkGcu8ueAix5uSl53QNnL1gsLc2oNQqwjC7v4CC8LTT%2FY454SVeTtADpKdqJBzrPVBrC%2FuXj%2Fe%2BnTdLyk9F2plXoz03pCAiqLCPPk4IGwYLjZAXwkOnNMh4CcgqWh09uKzV28q0rI%2FY4nVPHiO6Oa5ucfRgSQ5r0ihl368uxZmSvjZ29az8F57jCPr43KBjqkAYPruQ7n3a%2FLJ5NosAvceezDkl0GkMe6OrWFw3Beg1VSOsGFdSm8ns3JQYSt597arHySb7vPvtyalTwrfzO6wAdVvKDIU9HHGyUsOquQL4RkoIDrdiUZ9s4nGf4ak1jhCBFsIXyqBGvnFFibOfHBsR1Q%2F40Jzru6NGrbIfAaCZRovy7Q8Fuj6CkNbR3gV3vlHtIcZYSW9YiFHcwPtANVgeHxp0%2FO&X-Amz-Signature=f747fa5e1ccba0cdf5676d7c7cb603a3d1269664ae96a340196575c4969947b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V2V6E5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9itC0gS0JEeKnnYo2qL9uQZwvrkBSEUaO5c5ujXL0ygIhAN1Wse3KH1hsLESaFXqcXHIIai5cmlj8c%2BgZAGJws2txKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7tzwZH4%2FvyqHFCkq3ANmHKxAeglo9gfGuRMgYP%2FK33gspH6KZS2CfyYqG2BUeOwT0Ognmp1z1DJ5psm7pKbduj4vy9fpP6i0UNjFMzrvDv%2F2OG0%2FQdZGYbkCQtl9lwC786sX4NgGqP%2FR8sNVAoBFtYHhNflBpZMZaoHkUPm50iwzAtq%2F33a07%2BIlNQHG8miQwEA7jzT2xkelbiwHri4ubz1B17urjgcsdkRxqPjEEN7w4QDFi90kueQltuhGJswiGOa6bC4QvE18Z1v60oMGSmuCxQ%2F6yT%2BsUmKEtc6DBh0fPjJQ1c6C1ZmB77GBTgFXjjjGB1i1s%2F2s5x0pC1Sbxe7PFyPvIaOdlyt45YAXE3jyis5orRg13duHYBSENxG6qfGrLD5nnE6EM49MiyWUjp3QODMHtJm%2B0PGoGO4EghwimzoUVIwQ8XINF582hQ9OcN17PMlVGBQwxtqg%2BH5GpelmkGcu8ueAix5uSl53QNnL1gsLc2oNQqwjC7v4CC8LTT%2FY454SVeTtADpKdqJBzrPVBrC%2FuXj%2Fe%2BnTdLyk9F2plXoz03pCAiqLCPPk4IGwYLjZAXwkOnNMh4CcgqWh09uKzV28q0rI%2FY4nVPHiO6Oa5ucfRgSQ5r0ihl368uxZmSvjZ29az8F57jCPr43KBjqkAYPruQ7n3a%2FLJ5NosAvceezDkl0GkMe6OrWFw3Beg1VSOsGFdSm8ns3JQYSt597arHySb7vPvtyalTwrfzO6wAdVvKDIU9HHGyUsOquQL4RkoIDrdiUZ9s4nGf4ak1jhCBFsIXyqBGvnFFibOfHBsR1Q%2F40Jzru6NGrbIfAaCZRovy7Q8Fuj6CkNbR3gV3vlHtIcZYSW9YiFHcwPtANVgeHxp0%2FO&X-Amz-Signature=fae929216e2f0616048b80c5989f855a855c92c432e7027e330a1c11791e6f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V2V6E5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9itC0gS0JEeKnnYo2qL9uQZwvrkBSEUaO5c5ujXL0ygIhAN1Wse3KH1hsLESaFXqcXHIIai5cmlj8c%2BgZAGJws2txKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7tzwZH4%2FvyqHFCkq3ANmHKxAeglo9gfGuRMgYP%2FK33gspH6KZS2CfyYqG2BUeOwT0Ognmp1z1DJ5psm7pKbduj4vy9fpP6i0UNjFMzrvDv%2F2OG0%2FQdZGYbkCQtl9lwC786sX4NgGqP%2FR8sNVAoBFtYHhNflBpZMZaoHkUPm50iwzAtq%2F33a07%2BIlNQHG8miQwEA7jzT2xkelbiwHri4ubz1B17urjgcsdkRxqPjEEN7w4QDFi90kueQltuhGJswiGOa6bC4QvE18Z1v60oMGSmuCxQ%2F6yT%2BsUmKEtc6DBh0fPjJQ1c6C1ZmB77GBTgFXjjjGB1i1s%2F2s5x0pC1Sbxe7PFyPvIaOdlyt45YAXE3jyis5orRg13duHYBSENxG6qfGrLD5nnE6EM49MiyWUjp3QODMHtJm%2B0PGoGO4EghwimzoUVIwQ8XINF582hQ9OcN17PMlVGBQwxtqg%2BH5GpelmkGcu8ueAix5uSl53QNnL1gsLc2oNQqwjC7v4CC8LTT%2FY454SVeTtADpKdqJBzrPVBrC%2FuXj%2Fe%2BnTdLyk9F2plXoz03pCAiqLCPPk4IGwYLjZAXwkOnNMh4CcgqWh09uKzV28q0rI%2FY4nVPHiO6Oa5ucfRgSQ5r0ihl368uxZmSvjZ29az8F57jCPr43KBjqkAYPruQ7n3a%2FLJ5NosAvceezDkl0GkMe6OrWFw3Beg1VSOsGFdSm8ns3JQYSt597arHySb7vPvtyalTwrfzO6wAdVvKDIU9HHGyUsOquQL4RkoIDrdiUZ9s4nGf4ak1jhCBFsIXyqBGvnFFibOfHBsR1Q%2F40Jzru6NGrbIfAaCZRovy7Q8Fuj6CkNbR3gV3vlHtIcZYSW9YiFHcwPtANVgeHxp0%2FO&X-Amz-Signature=d1586ef12c9204939173ac7615cc4cff7c5fa1f283685d52eab047dd5bc2b2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V2V6E5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9itC0gS0JEeKnnYo2qL9uQZwvrkBSEUaO5c5ujXL0ygIhAN1Wse3KH1hsLESaFXqcXHIIai5cmlj8c%2BgZAGJws2txKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7tzwZH4%2FvyqHFCkq3ANmHKxAeglo9gfGuRMgYP%2FK33gspH6KZS2CfyYqG2BUeOwT0Ognmp1z1DJ5psm7pKbduj4vy9fpP6i0UNjFMzrvDv%2F2OG0%2FQdZGYbkCQtl9lwC786sX4NgGqP%2FR8sNVAoBFtYHhNflBpZMZaoHkUPm50iwzAtq%2F33a07%2BIlNQHG8miQwEA7jzT2xkelbiwHri4ubz1B17urjgcsdkRxqPjEEN7w4QDFi90kueQltuhGJswiGOa6bC4QvE18Z1v60oMGSmuCxQ%2F6yT%2BsUmKEtc6DBh0fPjJQ1c6C1ZmB77GBTgFXjjjGB1i1s%2F2s5x0pC1Sbxe7PFyPvIaOdlyt45YAXE3jyis5orRg13duHYBSENxG6qfGrLD5nnE6EM49MiyWUjp3QODMHtJm%2B0PGoGO4EghwimzoUVIwQ8XINF582hQ9OcN17PMlVGBQwxtqg%2BH5GpelmkGcu8ueAix5uSl53QNnL1gsLc2oNQqwjC7v4CC8LTT%2FY454SVeTtADpKdqJBzrPVBrC%2FuXj%2Fe%2BnTdLyk9F2plXoz03pCAiqLCPPk4IGwYLjZAXwkOnNMh4CcgqWh09uKzV28q0rI%2FY4nVPHiO6Oa5ucfRgSQ5r0ihl368uxZmSvjZ29az8F57jCPr43KBjqkAYPruQ7n3a%2FLJ5NosAvceezDkl0GkMe6OrWFw3Beg1VSOsGFdSm8ns3JQYSt597arHySb7vPvtyalTwrfzO6wAdVvKDIU9HHGyUsOquQL4RkoIDrdiUZ9s4nGf4ak1jhCBFsIXyqBGvnFFibOfHBsR1Q%2F40Jzru6NGrbIfAaCZRovy7Q8Fuj6CkNbR3gV3vlHtIcZYSW9YiFHcwPtANVgeHxp0%2FO&X-Amz-Signature=5d51c21e3f7c2342c5760e9f52a51975e563dd1ff7871d66a6605489aa926dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V2V6E5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9itC0gS0JEeKnnYo2qL9uQZwvrkBSEUaO5c5ujXL0ygIhAN1Wse3KH1hsLESaFXqcXHIIai5cmlj8c%2BgZAGJws2txKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7tzwZH4%2FvyqHFCkq3ANmHKxAeglo9gfGuRMgYP%2FK33gspH6KZS2CfyYqG2BUeOwT0Ognmp1z1DJ5psm7pKbduj4vy9fpP6i0UNjFMzrvDv%2F2OG0%2FQdZGYbkCQtl9lwC786sX4NgGqP%2FR8sNVAoBFtYHhNflBpZMZaoHkUPm50iwzAtq%2F33a07%2BIlNQHG8miQwEA7jzT2xkelbiwHri4ubz1B17urjgcsdkRxqPjEEN7w4QDFi90kueQltuhGJswiGOa6bC4QvE18Z1v60oMGSmuCxQ%2F6yT%2BsUmKEtc6DBh0fPjJQ1c6C1ZmB77GBTgFXjjjGB1i1s%2F2s5x0pC1Sbxe7PFyPvIaOdlyt45YAXE3jyis5orRg13duHYBSENxG6qfGrLD5nnE6EM49MiyWUjp3QODMHtJm%2B0PGoGO4EghwimzoUVIwQ8XINF582hQ9OcN17PMlVGBQwxtqg%2BH5GpelmkGcu8ueAix5uSl53QNnL1gsLc2oNQqwjC7v4CC8LTT%2FY454SVeTtADpKdqJBzrPVBrC%2FuXj%2Fe%2BnTdLyk9F2plXoz03pCAiqLCPPk4IGwYLjZAXwkOnNMh4CcgqWh09uKzV28q0rI%2FY4nVPHiO6Oa5ucfRgSQ5r0ihl368uxZmSvjZ29az8F57jCPr43KBjqkAYPruQ7n3a%2FLJ5NosAvceezDkl0GkMe6OrWFw3Beg1VSOsGFdSm8ns3JQYSt597arHySb7vPvtyalTwrfzO6wAdVvKDIU9HHGyUsOquQL4RkoIDrdiUZ9s4nGf4ak1jhCBFsIXyqBGvnFFibOfHBsR1Q%2F40Jzru6NGrbIfAaCZRovy7Q8Fuj6CkNbR3gV3vlHtIcZYSW9YiFHcwPtANVgeHxp0%2FO&X-Amz-Signature=cd70024b5040dec392249ebba313e847dfcf4bf48de637d82cd1fdbf422ed16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V2V6E5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9itC0gS0JEeKnnYo2qL9uQZwvrkBSEUaO5c5ujXL0ygIhAN1Wse3KH1hsLESaFXqcXHIIai5cmlj8c%2BgZAGJws2txKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7tzwZH4%2FvyqHFCkq3ANmHKxAeglo9gfGuRMgYP%2FK33gspH6KZS2CfyYqG2BUeOwT0Ognmp1z1DJ5psm7pKbduj4vy9fpP6i0UNjFMzrvDv%2F2OG0%2FQdZGYbkCQtl9lwC786sX4NgGqP%2FR8sNVAoBFtYHhNflBpZMZaoHkUPm50iwzAtq%2F33a07%2BIlNQHG8miQwEA7jzT2xkelbiwHri4ubz1B17urjgcsdkRxqPjEEN7w4QDFi90kueQltuhGJswiGOa6bC4QvE18Z1v60oMGSmuCxQ%2F6yT%2BsUmKEtc6DBh0fPjJQ1c6C1ZmB77GBTgFXjjjGB1i1s%2F2s5x0pC1Sbxe7PFyPvIaOdlyt45YAXE3jyis5orRg13duHYBSENxG6qfGrLD5nnE6EM49MiyWUjp3QODMHtJm%2B0PGoGO4EghwimzoUVIwQ8XINF582hQ9OcN17PMlVGBQwxtqg%2BH5GpelmkGcu8ueAix5uSl53QNnL1gsLc2oNQqwjC7v4CC8LTT%2FY454SVeTtADpKdqJBzrPVBrC%2FuXj%2Fe%2BnTdLyk9F2plXoz03pCAiqLCPPk4IGwYLjZAXwkOnNMh4CcgqWh09uKzV28q0rI%2FY4nVPHiO6Oa5ucfRgSQ5r0ihl368uxZmSvjZ29az8F57jCPr43KBjqkAYPruQ7n3a%2FLJ5NosAvceezDkl0GkMe6OrWFw3Beg1VSOsGFdSm8ns3JQYSt597arHySb7vPvtyalTwrfzO6wAdVvKDIU9HHGyUsOquQL4RkoIDrdiUZ9s4nGf4ak1jhCBFsIXyqBGvnFFibOfHBsR1Q%2F40Jzru6NGrbIfAaCZRovy7Q8Fuj6CkNbR3gV3vlHtIcZYSW9YiFHcwPtANVgeHxp0%2FO&X-Amz-Signature=b7657b2bec8289dffa07d2fb7eeec236a70906ea95b03bd126a7b4080661bc57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V2V6E5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9itC0gS0JEeKnnYo2qL9uQZwvrkBSEUaO5c5ujXL0ygIhAN1Wse3KH1hsLESaFXqcXHIIai5cmlj8c%2BgZAGJws2txKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7tzwZH4%2FvyqHFCkq3ANmHKxAeglo9gfGuRMgYP%2FK33gspH6KZS2CfyYqG2BUeOwT0Ognmp1z1DJ5psm7pKbduj4vy9fpP6i0UNjFMzrvDv%2F2OG0%2FQdZGYbkCQtl9lwC786sX4NgGqP%2FR8sNVAoBFtYHhNflBpZMZaoHkUPm50iwzAtq%2F33a07%2BIlNQHG8miQwEA7jzT2xkelbiwHri4ubz1B17urjgcsdkRxqPjEEN7w4QDFi90kueQltuhGJswiGOa6bC4QvE18Z1v60oMGSmuCxQ%2F6yT%2BsUmKEtc6DBh0fPjJQ1c6C1ZmB77GBTgFXjjjGB1i1s%2F2s5x0pC1Sbxe7PFyPvIaOdlyt45YAXE3jyis5orRg13duHYBSENxG6qfGrLD5nnE6EM49MiyWUjp3QODMHtJm%2B0PGoGO4EghwimzoUVIwQ8XINF582hQ9OcN17PMlVGBQwxtqg%2BH5GpelmkGcu8ueAix5uSl53QNnL1gsLc2oNQqwjC7v4CC8LTT%2FY454SVeTtADpKdqJBzrPVBrC%2FuXj%2Fe%2BnTdLyk9F2plXoz03pCAiqLCPPk4IGwYLjZAXwkOnNMh4CcgqWh09uKzV28q0rI%2FY4nVPHiO6Oa5ucfRgSQ5r0ihl368uxZmSvjZ29az8F57jCPr43KBjqkAYPruQ7n3a%2FLJ5NosAvceezDkl0GkMe6OrWFw3Beg1VSOsGFdSm8ns3JQYSt597arHySb7vPvtyalTwrfzO6wAdVvKDIU9HHGyUsOquQL4RkoIDrdiUZ9s4nGf4ak1jhCBFsIXyqBGvnFFibOfHBsR1Q%2F40Jzru6NGrbIfAaCZRovy7Q8Fuj6CkNbR3gV3vlHtIcZYSW9YiFHcwPtANVgeHxp0%2FO&X-Amz-Signature=ec3076ea7a973e4cc5daf2f95f0ed38c11a61f59d38cb6b7c45e16df6ffbe156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V2V6E5%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9itC0gS0JEeKnnYo2qL9uQZwvrkBSEUaO5c5ujXL0ygIhAN1Wse3KH1hsLESaFXqcXHIIai5cmlj8c%2BgZAGJws2txKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7tzwZH4%2FvyqHFCkq3ANmHKxAeglo9gfGuRMgYP%2FK33gspH6KZS2CfyYqG2BUeOwT0Ognmp1z1DJ5psm7pKbduj4vy9fpP6i0UNjFMzrvDv%2F2OG0%2FQdZGYbkCQtl9lwC786sX4NgGqP%2FR8sNVAoBFtYHhNflBpZMZaoHkUPm50iwzAtq%2F33a07%2BIlNQHG8miQwEA7jzT2xkelbiwHri4ubz1B17urjgcsdkRxqPjEEN7w4QDFi90kueQltuhGJswiGOa6bC4QvE18Z1v60oMGSmuCxQ%2F6yT%2BsUmKEtc6DBh0fPjJQ1c6C1ZmB77GBTgFXjjjGB1i1s%2F2s5x0pC1Sbxe7PFyPvIaOdlyt45YAXE3jyis5orRg13duHYBSENxG6qfGrLD5nnE6EM49MiyWUjp3QODMHtJm%2B0PGoGO4EghwimzoUVIwQ8XINF582hQ9OcN17PMlVGBQwxtqg%2BH5GpelmkGcu8ueAix5uSl53QNnL1gsLc2oNQqwjC7v4CC8LTT%2FY454SVeTtADpKdqJBzrPVBrC%2FuXj%2Fe%2BnTdLyk9F2plXoz03pCAiqLCPPk4IGwYLjZAXwkOnNMh4CcgqWh09uKzV28q0rI%2FY4nVPHiO6Oa5ucfRgSQ5r0ihl368uxZmSvjZ29az8F57jCPr43KBjqkAYPruQ7n3a%2FLJ5NosAvceezDkl0GkMe6OrWFw3Beg1VSOsGFdSm8ns3JQYSt597arHySb7vPvtyalTwrfzO6wAdVvKDIU9HHGyUsOquQL4RkoIDrdiUZ9s4nGf4ak1jhCBFsIXyqBGvnFFibOfHBsR1Q%2F40Jzru6NGrbIfAaCZRovy7Q8Fuj6CkNbR3gV3vlHtIcZYSW9YiFHcwPtANVgeHxp0%2FO&X-Amz-Signature=fae929216e2f0616048b80c5989f855a855c92c432e7027e330a1c11791e6f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
