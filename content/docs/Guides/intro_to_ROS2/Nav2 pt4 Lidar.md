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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP2GKWGZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIArcfwaWntYBFitpVim%2BS%2FJhh09Wg8DFO5R1Fa6APVJnAiBrfkH9eMk5NEvwF%2BYeS03qrPqTqd2u9kLQ2gNu6IbJSyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMzUZIi8ZX8C1Rb1OsKtwD3P1cEfGvMW%2FGMuhAjoz2PhS4HqoMmcpfB6S7bS7CG%2FinCIr%2FxmXYXRluYpDhawUy3Dco12KIulKa%2FS2s43xiEZ%2FXvbT%2FZjgH1qWAxcpYyXzxbcsS56ziyQou4GZnvVtFSdUqE8DNLh%2BOhp1e6csErAAwYvcDlcESpDO3trcU1ltgNF3BxENWKzrGuKxixogmBCWzfnr19kmjB1b6dlba09j20mSE1%2B5vawWKO7P8cWUiSvVCUN5aH7yYcn37gDawBJBz3Y6LDMmzxL1iuijwgGWJVKbXAroqYATK56WJHA9YGoD7ZkAgZT3jBVfIaFJTCO3%2F5ZKmcb2wsVDkFhWCHxbscU6cEsUGo7MNUp%2BTTMXQlHeYLkI5bKgd3cVQFaDEFiG%2Br3mjtI9WmKXGO3zBZv2Ow140cF3tlimxw8AZeNq%2FILp8psHZHiGw18LS0AS6Gebo38j8MBYrYo7vo0HviFvVghNqYXc3GX0d16iNndwvOiLK1xJiWBGG7adKu2mgJb3uSLEQlcp3YEoE8bOBwICROSCtSwB71A8VSrc%2F%2FCutAyhX8w6GNKaazWyZUAtbucqV9QXLIhkzLJQbSlF%2BbBFZ1nYqSq1EnHYRcqNctfiBY1AK0ajVDy6piIIw1dj%2BxAY6pgG0LrJKi1Df4tznrU9UDCdt8vPfHqeQ2l8Uxr08%2FhLlcjsuFTCRlky4m1hHViq9%2BW1DHYGh3HBiwXb%2FQaioiwakZUnhehCfTIt%2BlgKKIXO0typCy2QQDpkqfuXzhK1zD%2FLPafCwYxqJOiUPm5ag6KaHyRMAjuOBhxd9RScWmxhmbNMIr0TnqSQ%2B2llriBnkuld4E6GNOgz2vl8jpJ8Gn4jDXKnbGHOP&X-Amz-Signature=c10c71ee92ea7651da8efcaa666b9233e0df854691cae5f58084c543997423bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMNYPGJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGq4LitSM0SpmMhD%2BipwZC25C0JXRztinQXpqSsUl9bvAiBDbRsDu8f%2BAIShVSJkSNHiP8vas4hMIeNwW4L%2FST3A3Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpuAfox4MY4QC36%2FzKtwDDja0HUt5xKltWl8Lzrj6NIh59ae2B43X9gNruqVXBxkUrQehLRU2Sqmr2R%2F1ESLa8qqBQ3Gd0N7mCXCW6x3ePdV%2B3Y%2FSclc9mSeUAfhkg6mPE3NWO8TJjjgYPNWrtTz8fnFicMnCns%2B%2BdVzv4fjJpaU%2Bg%2BEvnM2ivWKiPkGaAqdE3dqJxi5kdEDnYaqmOghqOqgB7CRcT1g3Kuo7LMzoKqWT9OkvmoCI3JpphovGxu5XIMgFEaj07GceSCKlYRXk%2BSVU0fJsoRAIz9DImavPYBKirsUUA%2Bjbz7mwQ%2FUnIP%2BlyxhY5IjynikKPHxUYDLayjUCuPaXUX3O%2FiDMx1TUiyVKZg3WoF4vz5R0JYj7tgBoplXAo%2F1n%2Bu3dkHCf6lzXxXVigAzAYNqEcFcpHPBzVpQIsKYlyXJLXiYI%2Bii4MxGESpx3pIiqxdkjwD2ORjzU95Wg58bQqxa1IJKBwzF9u2JmscDjJsc2l41Cm0AqD2%2B3xexAlPQgDikYoNXDycL2eOVjqE8C77u%2FAbkfnfKr7%2BcsnFhvg4s85tERuuewvXfKH2E8owP8t5%2F3lkWt5H5NdezWpv1lkTQw99eo6ITKrENF%2FiDqhSTjY77UvuIwbF2E2w%2BWtjHEb4BKWugwyNj%2BxAY6pgHp4qfqD2KBd%2F7clh61cbJ47qABtjnqfEL%2BZCRhlRPhpuVAvz0jR7l1VPUDJfInqGk6aUpi4%2Be9JplSl1rbKrpEwJk2%2BXjslgMs%2FBYRWBadudU9unKRgWNrKDEqFySlp5URhwTxTmSmQukTh1icOgxRJPKQ8SfqEPdVTY6Jmj%2B7q4%2BdgT63gf5fstAO0JMv9UWuBJkAuTpPoDduoZ5qhk6%2FDXwNIQBo&X-Amz-Signature=54334ff8168de94dda499c7af93f4e90a08722b6f9f02ce505a12460012638e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMNYPGJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGq4LitSM0SpmMhD%2BipwZC25C0JXRztinQXpqSsUl9bvAiBDbRsDu8f%2BAIShVSJkSNHiP8vas4hMIeNwW4L%2FST3A3Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpuAfox4MY4QC36%2FzKtwDDja0HUt5xKltWl8Lzrj6NIh59ae2B43X9gNruqVXBxkUrQehLRU2Sqmr2R%2F1ESLa8qqBQ3Gd0N7mCXCW6x3ePdV%2B3Y%2FSclc9mSeUAfhkg6mPE3NWO8TJjjgYPNWrtTz8fnFicMnCns%2B%2BdVzv4fjJpaU%2Bg%2BEvnM2ivWKiPkGaAqdE3dqJxi5kdEDnYaqmOghqOqgB7CRcT1g3Kuo7LMzoKqWT9OkvmoCI3JpphovGxu5XIMgFEaj07GceSCKlYRXk%2BSVU0fJsoRAIz9DImavPYBKirsUUA%2Bjbz7mwQ%2FUnIP%2BlyxhY5IjynikKPHxUYDLayjUCuPaXUX3O%2FiDMx1TUiyVKZg3WoF4vz5R0JYj7tgBoplXAo%2F1n%2Bu3dkHCf6lzXxXVigAzAYNqEcFcpHPBzVpQIsKYlyXJLXiYI%2Bii4MxGESpx3pIiqxdkjwD2ORjzU95Wg58bQqxa1IJKBwzF9u2JmscDjJsc2l41Cm0AqD2%2B3xexAlPQgDikYoNXDycL2eOVjqE8C77u%2FAbkfnfKr7%2BcsnFhvg4s85tERuuewvXfKH2E8owP8t5%2F3lkWt5H5NdezWpv1lkTQw99eo6ITKrENF%2FiDqhSTjY77UvuIwbF2E2w%2BWtjHEb4BKWugwyNj%2BxAY6pgHp4qfqD2KBd%2F7clh61cbJ47qABtjnqfEL%2BZCRhlRPhpuVAvz0jR7l1VPUDJfInqGk6aUpi4%2Be9JplSl1rbKrpEwJk2%2BXjslgMs%2FBYRWBadudU9unKRgWNrKDEqFySlp5URhwTxTmSmQukTh1icOgxRJPKQ8SfqEPdVTY6Jmj%2B7q4%2BdgT63gf5fstAO0JMv9UWuBJkAuTpPoDduoZ5qhk6%2FDXwNIQBo&X-Amz-Signature=34f955704a57dc555289f4e68b0775b42ba08883ebfbd796db44220d87bb4006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMNYPGJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGq4LitSM0SpmMhD%2BipwZC25C0JXRztinQXpqSsUl9bvAiBDbRsDu8f%2BAIShVSJkSNHiP8vas4hMIeNwW4L%2FST3A3Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpuAfox4MY4QC36%2FzKtwDDja0HUt5xKltWl8Lzrj6NIh59ae2B43X9gNruqVXBxkUrQehLRU2Sqmr2R%2F1ESLa8qqBQ3Gd0N7mCXCW6x3ePdV%2B3Y%2FSclc9mSeUAfhkg6mPE3NWO8TJjjgYPNWrtTz8fnFicMnCns%2B%2BdVzv4fjJpaU%2Bg%2BEvnM2ivWKiPkGaAqdE3dqJxi5kdEDnYaqmOghqOqgB7CRcT1g3Kuo7LMzoKqWT9OkvmoCI3JpphovGxu5XIMgFEaj07GceSCKlYRXk%2BSVU0fJsoRAIz9DImavPYBKirsUUA%2Bjbz7mwQ%2FUnIP%2BlyxhY5IjynikKPHxUYDLayjUCuPaXUX3O%2FiDMx1TUiyVKZg3WoF4vz5R0JYj7tgBoplXAo%2F1n%2Bu3dkHCf6lzXxXVigAzAYNqEcFcpHPBzVpQIsKYlyXJLXiYI%2Bii4MxGESpx3pIiqxdkjwD2ORjzU95Wg58bQqxa1IJKBwzF9u2JmscDjJsc2l41Cm0AqD2%2B3xexAlPQgDikYoNXDycL2eOVjqE8C77u%2FAbkfnfKr7%2BcsnFhvg4s85tERuuewvXfKH2E8owP8t5%2F3lkWt5H5NdezWpv1lkTQw99eo6ITKrENF%2FiDqhSTjY77UvuIwbF2E2w%2BWtjHEb4BKWugwyNj%2BxAY6pgHp4qfqD2KBd%2F7clh61cbJ47qABtjnqfEL%2BZCRhlRPhpuVAvz0jR7l1VPUDJfInqGk6aUpi4%2Be9JplSl1rbKrpEwJk2%2BXjslgMs%2FBYRWBadudU9unKRgWNrKDEqFySlp5URhwTxTmSmQukTh1icOgxRJPKQ8SfqEPdVTY6Jmj%2B7q4%2BdgT63gf5fstAO0JMv9UWuBJkAuTpPoDduoZ5qhk6%2FDXwNIQBo&X-Amz-Signature=bfab3609873c01db2c7769609fdfe89494db2e95592e26daf0d5d80799b0424a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMNYPGJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGq4LitSM0SpmMhD%2BipwZC25C0JXRztinQXpqSsUl9bvAiBDbRsDu8f%2BAIShVSJkSNHiP8vas4hMIeNwW4L%2FST3A3Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpuAfox4MY4QC36%2FzKtwDDja0HUt5xKltWl8Lzrj6NIh59ae2B43X9gNruqVXBxkUrQehLRU2Sqmr2R%2F1ESLa8qqBQ3Gd0N7mCXCW6x3ePdV%2B3Y%2FSclc9mSeUAfhkg6mPE3NWO8TJjjgYPNWrtTz8fnFicMnCns%2B%2BdVzv4fjJpaU%2Bg%2BEvnM2ivWKiPkGaAqdE3dqJxi5kdEDnYaqmOghqOqgB7CRcT1g3Kuo7LMzoKqWT9OkvmoCI3JpphovGxu5XIMgFEaj07GceSCKlYRXk%2BSVU0fJsoRAIz9DImavPYBKirsUUA%2Bjbz7mwQ%2FUnIP%2BlyxhY5IjynikKPHxUYDLayjUCuPaXUX3O%2FiDMx1TUiyVKZg3WoF4vz5R0JYj7tgBoplXAo%2F1n%2Bu3dkHCf6lzXxXVigAzAYNqEcFcpHPBzVpQIsKYlyXJLXiYI%2Bii4MxGESpx3pIiqxdkjwD2ORjzU95Wg58bQqxa1IJKBwzF9u2JmscDjJsc2l41Cm0AqD2%2B3xexAlPQgDikYoNXDycL2eOVjqE8C77u%2FAbkfnfKr7%2BcsnFhvg4s85tERuuewvXfKH2E8owP8t5%2F3lkWt5H5NdezWpv1lkTQw99eo6ITKrENF%2FiDqhSTjY77UvuIwbF2E2w%2BWtjHEb4BKWugwyNj%2BxAY6pgHp4qfqD2KBd%2F7clh61cbJ47qABtjnqfEL%2BZCRhlRPhpuVAvz0jR7l1VPUDJfInqGk6aUpi4%2Be9JplSl1rbKrpEwJk2%2BXjslgMs%2FBYRWBadudU9unKRgWNrKDEqFySlp5URhwTxTmSmQukTh1icOgxRJPKQ8SfqEPdVTY6Jmj%2B7q4%2BdgT63gf5fstAO0JMv9UWuBJkAuTpPoDduoZ5qhk6%2FDXwNIQBo&X-Amz-Signature=c3a4bf9fc25fa4b0c6591f63bacd6dd5c746ca7667c93e5119c6c8e36b07b491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMNYPGJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGq4LitSM0SpmMhD%2BipwZC25C0JXRztinQXpqSsUl9bvAiBDbRsDu8f%2BAIShVSJkSNHiP8vas4hMIeNwW4L%2FST3A3Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpuAfox4MY4QC36%2FzKtwDDja0HUt5xKltWl8Lzrj6NIh59ae2B43X9gNruqVXBxkUrQehLRU2Sqmr2R%2F1ESLa8qqBQ3Gd0N7mCXCW6x3ePdV%2B3Y%2FSclc9mSeUAfhkg6mPE3NWO8TJjjgYPNWrtTz8fnFicMnCns%2B%2BdVzv4fjJpaU%2Bg%2BEvnM2ivWKiPkGaAqdE3dqJxi5kdEDnYaqmOghqOqgB7CRcT1g3Kuo7LMzoKqWT9OkvmoCI3JpphovGxu5XIMgFEaj07GceSCKlYRXk%2BSVU0fJsoRAIz9DImavPYBKirsUUA%2Bjbz7mwQ%2FUnIP%2BlyxhY5IjynikKPHxUYDLayjUCuPaXUX3O%2FiDMx1TUiyVKZg3WoF4vz5R0JYj7tgBoplXAo%2F1n%2Bu3dkHCf6lzXxXVigAzAYNqEcFcpHPBzVpQIsKYlyXJLXiYI%2Bii4MxGESpx3pIiqxdkjwD2ORjzU95Wg58bQqxa1IJKBwzF9u2JmscDjJsc2l41Cm0AqD2%2B3xexAlPQgDikYoNXDycL2eOVjqE8C77u%2FAbkfnfKr7%2BcsnFhvg4s85tERuuewvXfKH2E8owP8t5%2F3lkWt5H5NdezWpv1lkTQw99eo6ITKrENF%2FiDqhSTjY77UvuIwbF2E2w%2BWtjHEb4BKWugwyNj%2BxAY6pgHp4qfqD2KBd%2F7clh61cbJ47qABtjnqfEL%2BZCRhlRPhpuVAvz0jR7l1VPUDJfInqGk6aUpi4%2Be9JplSl1rbKrpEwJk2%2BXjslgMs%2FBYRWBadudU9unKRgWNrKDEqFySlp5URhwTxTmSmQukTh1icOgxRJPKQ8SfqEPdVTY6Jmj%2B7q4%2BdgT63gf5fstAO0JMv9UWuBJkAuTpPoDduoZ5qhk6%2FDXwNIQBo&X-Amz-Signature=a19886e445f0fe67ebddad9a000414f1934a67a0d65da0a6174018d713186a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMNYPGJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGq4LitSM0SpmMhD%2BipwZC25C0JXRztinQXpqSsUl9bvAiBDbRsDu8f%2BAIShVSJkSNHiP8vas4hMIeNwW4L%2FST3A3Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpuAfox4MY4QC36%2FzKtwDDja0HUt5xKltWl8Lzrj6NIh59ae2B43X9gNruqVXBxkUrQehLRU2Sqmr2R%2F1ESLa8qqBQ3Gd0N7mCXCW6x3ePdV%2B3Y%2FSclc9mSeUAfhkg6mPE3NWO8TJjjgYPNWrtTz8fnFicMnCns%2B%2BdVzv4fjJpaU%2Bg%2BEvnM2ivWKiPkGaAqdE3dqJxi5kdEDnYaqmOghqOqgB7CRcT1g3Kuo7LMzoKqWT9OkvmoCI3JpphovGxu5XIMgFEaj07GceSCKlYRXk%2BSVU0fJsoRAIz9DImavPYBKirsUUA%2Bjbz7mwQ%2FUnIP%2BlyxhY5IjynikKPHxUYDLayjUCuPaXUX3O%2FiDMx1TUiyVKZg3WoF4vz5R0JYj7tgBoplXAo%2F1n%2Bu3dkHCf6lzXxXVigAzAYNqEcFcpHPBzVpQIsKYlyXJLXiYI%2Bii4MxGESpx3pIiqxdkjwD2ORjzU95Wg58bQqxa1IJKBwzF9u2JmscDjJsc2l41Cm0AqD2%2B3xexAlPQgDikYoNXDycL2eOVjqE8C77u%2FAbkfnfKr7%2BcsnFhvg4s85tERuuewvXfKH2E8owP8t5%2F3lkWt5H5NdezWpv1lkTQw99eo6ITKrENF%2FiDqhSTjY77UvuIwbF2E2w%2BWtjHEb4BKWugwyNj%2BxAY6pgHp4qfqD2KBd%2F7clh61cbJ47qABtjnqfEL%2BZCRhlRPhpuVAvz0jR7l1VPUDJfInqGk6aUpi4%2Be9JplSl1rbKrpEwJk2%2BXjslgMs%2FBYRWBadudU9unKRgWNrKDEqFySlp5URhwTxTmSmQukTh1icOgxRJPKQ8SfqEPdVTY6Jmj%2B7q4%2BdgT63gf5fstAO0JMv9UWuBJkAuTpPoDduoZ5qhk6%2FDXwNIQBo&X-Amz-Signature=cf0b7d5b8c4f33d48c75644ee8ddf4887960fd4acd75005ac74507861000631a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMNYPGJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGq4LitSM0SpmMhD%2BipwZC25C0JXRztinQXpqSsUl9bvAiBDbRsDu8f%2BAIShVSJkSNHiP8vas4hMIeNwW4L%2FST3A3Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpuAfox4MY4QC36%2FzKtwDDja0HUt5xKltWl8Lzrj6NIh59ae2B43X9gNruqVXBxkUrQehLRU2Sqmr2R%2F1ESLa8qqBQ3Gd0N7mCXCW6x3ePdV%2B3Y%2FSclc9mSeUAfhkg6mPE3NWO8TJjjgYPNWrtTz8fnFicMnCns%2B%2BdVzv4fjJpaU%2Bg%2BEvnM2ivWKiPkGaAqdE3dqJxi5kdEDnYaqmOghqOqgB7CRcT1g3Kuo7LMzoKqWT9OkvmoCI3JpphovGxu5XIMgFEaj07GceSCKlYRXk%2BSVU0fJsoRAIz9DImavPYBKirsUUA%2Bjbz7mwQ%2FUnIP%2BlyxhY5IjynikKPHxUYDLayjUCuPaXUX3O%2FiDMx1TUiyVKZg3WoF4vz5R0JYj7tgBoplXAo%2F1n%2Bu3dkHCf6lzXxXVigAzAYNqEcFcpHPBzVpQIsKYlyXJLXiYI%2Bii4MxGESpx3pIiqxdkjwD2ORjzU95Wg58bQqxa1IJKBwzF9u2JmscDjJsc2l41Cm0AqD2%2B3xexAlPQgDikYoNXDycL2eOVjqE8C77u%2FAbkfnfKr7%2BcsnFhvg4s85tERuuewvXfKH2E8owP8t5%2F3lkWt5H5NdezWpv1lkTQw99eo6ITKrENF%2FiDqhSTjY77UvuIwbF2E2w%2BWtjHEb4BKWugwyNj%2BxAY6pgHp4qfqD2KBd%2F7clh61cbJ47qABtjnqfEL%2BZCRhlRPhpuVAvz0jR7l1VPUDJfInqGk6aUpi4%2Be9JplSl1rbKrpEwJk2%2BXjslgMs%2FBYRWBadudU9unKRgWNrKDEqFySlp5URhwTxTmSmQukTh1icOgxRJPKQ8SfqEPdVTY6Jmj%2B7q4%2BdgT63gf5fstAO0JMv9UWuBJkAuTpPoDduoZ5qhk6%2FDXwNIQBo&X-Amz-Signature=9610a66d8ef38f46fcf1085b6e96cefc475ed32417de567140752a8b14aa5cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMNYPGJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGq4LitSM0SpmMhD%2BipwZC25C0JXRztinQXpqSsUl9bvAiBDbRsDu8f%2BAIShVSJkSNHiP8vas4hMIeNwW4L%2FST3A3Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpuAfox4MY4QC36%2FzKtwDDja0HUt5xKltWl8Lzrj6NIh59ae2B43X9gNruqVXBxkUrQehLRU2Sqmr2R%2F1ESLa8qqBQ3Gd0N7mCXCW6x3ePdV%2B3Y%2FSclc9mSeUAfhkg6mPE3NWO8TJjjgYPNWrtTz8fnFicMnCns%2B%2BdVzv4fjJpaU%2Bg%2BEvnM2ivWKiPkGaAqdE3dqJxi5kdEDnYaqmOghqOqgB7CRcT1g3Kuo7LMzoKqWT9OkvmoCI3JpphovGxu5XIMgFEaj07GceSCKlYRXk%2BSVU0fJsoRAIz9DImavPYBKirsUUA%2Bjbz7mwQ%2FUnIP%2BlyxhY5IjynikKPHxUYDLayjUCuPaXUX3O%2FiDMx1TUiyVKZg3WoF4vz5R0JYj7tgBoplXAo%2F1n%2Bu3dkHCf6lzXxXVigAzAYNqEcFcpHPBzVpQIsKYlyXJLXiYI%2Bii4MxGESpx3pIiqxdkjwD2ORjzU95Wg58bQqxa1IJKBwzF9u2JmscDjJsc2l41Cm0AqD2%2B3xexAlPQgDikYoNXDycL2eOVjqE8C77u%2FAbkfnfKr7%2BcsnFhvg4s85tERuuewvXfKH2E8owP8t5%2F3lkWt5H5NdezWpv1lkTQw99eo6ITKrENF%2FiDqhSTjY77UvuIwbF2E2w%2BWtjHEb4BKWugwyNj%2BxAY6pgHp4qfqD2KBd%2F7clh61cbJ47qABtjnqfEL%2BZCRhlRPhpuVAvz0jR7l1VPUDJfInqGk6aUpi4%2Be9JplSl1rbKrpEwJk2%2BXjslgMs%2FBYRWBadudU9unKRgWNrKDEqFySlp5URhwTxTmSmQukTh1icOgxRJPKQ8SfqEPdVTY6Jmj%2B7q4%2BdgT63gf5fstAO0JMv9UWuBJkAuTpPoDduoZ5qhk6%2FDXwNIQBo&X-Amz-Signature=47d749739a4d1a771bcfb82ae12e11523f4c161fa6220de5596eced32d874ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMNYPGJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGq4LitSM0SpmMhD%2BipwZC25C0JXRztinQXpqSsUl9bvAiBDbRsDu8f%2BAIShVSJkSNHiP8vas4hMIeNwW4L%2FST3A3Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpuAfox4MY4QC36%2FzKtwDDja0HUt5xKltWl8Lzrj6NIh59ae2B43X9gNruqVXBxkUrQehLRU2Sqmr2R%2F1ESLa8qqBQ3Gd0N7mCXCW6x3ePdV%2B3Y%2FSclc9mSeUAfhkg6mPE3NWO8TJjjgYPNWrtTz8fnFicMnCns%2B%2BdVzv4fjJpaU%2Bg%2BEvnM2ivWKiPkGaAqdE3dqJxi5kdEDnYaqmOghqOqgB7CRcT1g3Kuo7LMzoKqWT9OkvmoCI3JpphovGxu5XIMgFEaj07GceSCKlYRXk%2BSVU0fJsoRAIz9DImavPYBKirsUUA%2Bjbz7mwQ%2FUnIP%2BlyxhY5IjynikKPHxUYDLayjUCuPaXUX3O%2FiDMx1TUiyVKZg3WoF4vz5R0JYj7tgBoplXAo%2F1n%2Bu3dkHCf6lzXxXVigAzAYNqEcFcpHPBzVpQIsKYlyXJLXiYI%2Bii4MxGESpx3pIiqxdkjwD2ORjzU95Wg58bQqxa1IJKBwzF9u2JmscDjJsc2l41Cm0AqD2%2B3xexAlPQgDikYoNXDycL2eOVjqE8C77u%2FAbkfnfKr7%2BcsnFhvg4s85tERuuewvXfKH2E8owP8t5%2F3lkWt5H5NdezWpv1lkTQw99eo6ITKrENF%2FiDqhSTjY77UvuIwbF2E2w%2BWtjHEb4BKWugwyNj%2BxAY6pgHp4qfqD2KBd%2F7clh61cbJ47qABtjnqfEL%2BZCRhlRPhpuVAvz0jR7l1VPUDJfInqGk6aUpi4%2Be9JplSl1rbKrpEwJk2%2BXjslgMs%2FBYRWBadudU9unKRgWNrKDEqFySlp5URhwTxTmSmQukTh1icOgxRJPKQ8SfqEPdVTY6Jmj%2B7q4%2BdgT63gf5fstAO0JMv9UWuBJkAuTpPoDduoZ5qhk6%2FDXwNIQBo&X-Amz-Signature=4c0f69deed7dea66f96794777abce166f1b6d6494e5a85722ba24b53fa669ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMNYPGJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGq4LitSM0SpmMhD%2BipwZC25C0JXRztinQXpqSsUl9bvAiBDbRsDu8f%2BAIShVSJkSNHiP8vas4hMIeNwW4L%2FST3A3Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpuAfox4MY4QC36%2FzKtwDDja0HUt5xKltWl8Lzrj6NIh59ae2B43X9gNruqVXBxkUrQehLRU2Sqmr2R%2F1ESLa8qqBQ3Gd0N7mCXCW6x3ePdV%2B3Y%2FSclc9mSeUAfhkg6mPE3NWO8TJjjgYPNWrtTz8fnFicMnCns%2B%2BdVzv4fjJpaU%2Bg%2BEvnM2ivWKiPkGaAqdE3dqJxi5kdEDnYaqmOghqOqgB7CRcT1g3Kuo7LMzoKqWT9OkvmoCI3JpphovGxu5XIMgFEaj07GceSCKlYRXk%2BSVU0fJsoRAIz9DImavPYBKirsUUA%2Bjbz7mwQ%2FUnIP%2BlyxhY5IjynikKPHxUYDLayjUCuPaXUX3O%2FiDMx1TUiyVKZg3WoF4vz5R0JYj7tgBoplXAo%2F1n%2Bu3dkHCf6lzXxXVigAzAYNqEcFcpHPBzVpQIsKYlyXJLXiYI%2Bii4MxGESpx3pIiqxdkjwD2ORjzU95Wg58bQqxa1IJKBwzF9u2JmscDjJsc2l41Cm0AqD2%2B3xexAlPQgDikYoNXDycL2eOVjqE8C77u%2FAbkfnfKr7%2BcsnFhvg4s85tERuuewvXfKH2E8owP8t5%2F3lkWt5H5NdezWpv1lkTQw99eo6ITKrENF%2FiDqhSTjY77UvuIwbF2E2w%2BWtjHEb4BKWugwyNj%2BxAY6pgHp4qfqD2KBd%2F7clh61cbJ47qABtjnqfEL%2BZCRhlRPhpuVAvz0jR7l1VPUDJfInqGk6aUpi4%2Be9JplSl1rbKrpEwJk2%2BXjslgMs%2FBYRWBadudU9unKRgWNrKDEqFySlp5URhwTxTmSmQukTh1icOgxRJPKQ8SfqEPdVTY6Jmj%2B7q4%2BdgT63gf5fstAO0JMv9UWuBJkAuTpPoDduoZ5qhk6%2FDXwNIQBo&X-Amz-Signature=a8097499cdd3e158b2ad78847ca82fd3fa0a34e535fda94bd7e18bb69a6c85cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
