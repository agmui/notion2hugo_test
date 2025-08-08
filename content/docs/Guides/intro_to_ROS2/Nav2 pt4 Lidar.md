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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U3L6TXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBVjzyTA683qRQRwVKCyywqU6JlXxUXrY7kApbMfVIBrAiEA5K4mYrkoSOS0tk19p5lNwGSWfyUiT22cMoVeesUoTEcqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWDOqvR48qYDKkwqyrcA45EgqR9KNEFOilCPXHPtXqLP%2B8lPdc3wDqK2kmAtsuX7SSw%2Fr%2BKX5vb9V%2FsRWG9ij1dLKMmWpudoMNHA8k3N5oYzo4jYRQs0bGsu%2FGuckngWzOCR6B%2F%2F4%2BUh2rtw7HV73pgUgGGL94vNZkkTzvKvkPq4wXvNUVOPiA2LSIyHIqVYofLLzrU4oCIxiMQ42G9PfgJh5oAGediyQYmwFzDzDq5jfNG2nPpy8ZyV4fK76YJ5hIk5WRE5%2BnD346yv36%2B1cS0P6yQH%2FGN6ezzpHJ3h%2BpnZlPPP6IceOmQh9sYMC2Vmfn4LwOIp%2FMU0Fs7Nm8SvkplyE1p6sBb5fQc7QIGldKX1YtaG8NGkyxT5531dGZ2Un19oNrOwAUlJMBFxrBj%2Fw%2Bil6ficphlOvfG0mZG9Y8y%2FBRPCC8K5lREnAUl409PQr6HO%2FFQD%2FfIfmvSYZCE%2Bc3HyLy%2B73SWq6MZuHLaaFIDeCexwemyK3jRJcUceflvnPoYbJEQcHLsYbfWNkU26fRFlA80gOkF%2Bf8PJVu2hhH%2FBMdPQtqCRuyAF%2F848KTRS0QenDJLG7TPDYvCDtXFaOo0TrWbRtkxm6ygtFmAAH%2B%2FGeqRoDYW8VrKCE5sV8n7kCGvNxpuhh%2FP%2FNpsMKWf1sQGOqUBD36KEzEwxFOA6ZUOz3CwrRT9xfLx8RB6SkHcVZaIwvKSQwkClB3eu4Vnha0vQbsVz5GSr%2F0xwcNPQ0XqvLoMOZmhT5%2F%2BPsGuidaiX00Y63M40Td1HYaS9IaZ2LqbIgllpUZJaAQ8nMz%2BYhLlw29ptciZMMNySL%2FSDcM09RcKwlZXfpurAvDWNKmw5zAo6HtCFTk45pmL4wwKvGEQb5s5w3cOOQuP&X-Amz-Signature=04010fd63ac66846bfd039d06ebd0174e442a4f144ae0f9b50188f6baf5676fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5VYE24%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDciaw0bakzBbmimo0FOa4oXeB3YCT3S6nBpWYEO%2BVu3gIgFrTQzf5ldlob54TNRIz6IBCmiJpBXqleM2QHioQwzx0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1xvFu8Cg%2BbZFFfPircA5MzZUlLhELbnotvzRaPUGKwxK1jp6%2BJYi1Q2JUbc1TBx6%2F8%2F%2BONRIaK3hkLHgX4ZqfPcR2jtTff%2BVX0O9mJUWW2FZAQF4iQQfymYyMvKSIsPu22LCBfYVx%2Bw83ERF%2F034AqqiAkdnzaPEqF6cvY2AgyqMxBTMkCuw9STGZsfS9pMYTmITMkvs%2FlR6%2BJ%2FI2gGK9YdJ1htOFA9w5BS4peVzgWvyPvrKg6vUgbfvNYF47H9XBZ04v7f4hc09qE%2Fj3rox7tfEJ%2BJSUIgmnnVzdIGO4zQHjWrjxjSlY7WzdUhm0siPDoF1U%2BTJKdMESkOA6QHF%2F%2B37B5n7s3JOVJoQJ4Fl18WB%2F19k%2BshhRG%2FcsCm5a9eYDWcn5loSpP1ceMhkUiPy4flfTLwkRyj3Mt6D1IcbD8%2FdRfXWXiwp4uWCU1QpoBdEAY4d2fMtW%2FsSm%2BWpey7K6tLIw7b75ENlkPR2tzxaNpYgGM2NSOD591vSIkRYS1kjPQanGKbw4R9zf6dX%2Fj%2F6Pkt8%2BvyHGOn7Vjtm%2FjWu34dlMS7BPJ8yPsJUlex861itPavdFwxqkek4TJK7sQEpWy%2Bdmly1Lb4eQnV9iakyJCfgb44rO958ssiv1UyS3SVgXhm9CpPDOe0nbPMJOg1sQGOqUBpWrta%2FkPODevyyjco%2FU%2F3Aodek5GmTX5yXzmhCioDFN7YaJbAwDkCx85y%2FGQ3Wx8WWfsPTk58xOXiQIhKwYylRzzAQPyfHsCdVc1mWGhBJPfRjn5eCVq2zUfRWqxNAqGsq9rMJ1XCs1BCpotR3vxF%2Fi3BxPS1NbKVkPFhcfodX5DaINeQ%2BcS83vsB66b%2BkXErbb0iRjg2Vh85JvFhxKRauVToHOl&X-Amz-Signature=1bc93b867cfe82a49c492baf3599fb104f34877f2c6ef79cc88ebcaf70beb1c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5VYE24%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDciaw0bakzBbmimo0FOa4oXeB3YCT3S6nBpWYEO%2BVu3gIgFrTQzf5ldlob54TNRIz6IBCmiJpBXqleM2QHioQwzx0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1xvFu8Cg%2BbZFFfPircA5MzZUlLhELbnotvzRaPUGKwxK1jp6%2BJYi1Q2JUbc1TBx6%2F8%2F%2BONRIaK3hkLHgX4ZqfPcR2jtTff%2BVX0O9mJUWW2FZAQF4iQQfymYyMvKSIsPu22LCBfYVx%2Bw83ERF%2F034AqqiAkdnzaPEqF6cvY2AgyqMxBTMkCuw9STGZsfS9pMYTmITMkvs%2FlR6%2BJ%2FI2gGK9YdJ1htOFA9w5BS4peVzgWvyPvrKg6vUgbfvNYF47H9XBZ04v7f4hc09qE%2Fj3rox7tfEJ%2BJSUIgmnnVzdIGO4zQHjWrjxjSlY7WzdUhm0siPDoF1U%2BTJKdMESkOA6QHF%2F%2B37B5n7s3JOVJoQJ4Fl18WB%2F19k%2BshhRG%2FcsCm5a9eYDWcn5loSpP1ceMhkUiPy4flfTLwkRyj3Mt6D1IcbD8%2FdRfXWXiwp4uWCU1QpoBdEAY4d2fMtW%2FsSm%2BWpey7K6tLIw7b75ENlkPR2tzxaNpYgGM2NSOD591vSIkRYS1kjPQanGKbw4R9zf6dX%2Fj%2F6Pkt8%2BvyHGOn7Vjtm%2FjWu34dlMS7BPJ8yPsJUlex861itPavdFwxqkek4TJK7sQEpWy%2Bdmly1Lb4eQnV9iakyJCfgb44rO958ssiv1UyS3SVgXhm9CpPDOe0nbPMJOg1sQGOqUBpWrta%2FkPODevyyjco%2FU%2F3Aodek5GmTX5yXzmhCioDFN7YaJbAwDkCx85y%2FGQ3Wx8WWfsPTk58xOXiQIhKwYylRzzAQPyfHsCdVc1mWGhBJPfRjn5eCVq2zUfRWqxNAqGsq9rMJ1XCs1BCpotR3vxF%2Fi3BxPS1NbKVkPFhcfodX5DaINeQ%2BcS83vsB66b%2BkXErbb0iRjg2Vh85JvFhxKRauVToHOl&X-Amz-Signature=b50187ffb3b6df01d6029bda916565234478006ec7915f039b23de38175f71be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5VYE24%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDciaw0bakzBbmimo0FOa4oXeB3YCT3S6nBpWYEO%2BVu3gIgFrTQzf5ldlob54TNRIz6IBCmiJpBXqleM2QHioQwzx0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1xvFu8Cg%2BbZFFfPircA5MzZUlLhELbnotvzRaPUGKwxK1jp6%2BJYi1Q2JUbc1TBx6%2F8%2F%2BONRIaK3hkLHgX4ZqfPcR2jtTff%2BVX0O9mJUWW2FZAQF4iQQfymYyMvKSIsPu22LCBfYVx%2Bw83ERF%2F034AqqiAkdnzaPEqF6cvY2AgyqMxBTMkCuw9STGZsfS9pMYTmITMkvs%2FlR6%2BJ%2FI2gGK9YdJ1htOFA9w5BS4peVzgWvyPvrKg6vUgbfvNYF47H9XBZ04v7f4hc09qE%2Fj3rox7tfEJ%2BJSUIgmnnVzdIGO4zQHjWrjxjSlY7WzdUhm0siPDoF1U%2BTJKdMESkOA6QHF%2F%2B37B5n7s3JOVJoQJ4Fl18WB%2F19k%2BshhRG%2FcsCm5a9eYDWcn5loSpP1ceMhkUiPy4flfTLwkRyj3Mt6D1IcbD8%2FdRfXWXiwp4uWCU1QpoBdEAY4d2fMtW%2FsSm%2BWpey7K6tLIw7b75ENlkPR2tzxaNpYgGM2NSOD591vSIkRYS1kjPQanGKbw4R9zf6dX%2Fj%2F6Pkt8%2BvyHGOn7Vjtm%2FjWu34dlMS7BPJ8yPsJUlex861itPavdFwxqkek4TJK7sQEpWy%2Bdmly1Lb4eQnV9iakyJCfgb44rO958ssiv1UyS3SVgXhm9CpPDOe0nbPMJOg1sQGOqUBpWrta%2FkPODevyyjco%2FU%2F3Aodek5GmTX5yXzmhCioDFN7YaJbAwDkCx85y%2FGQ3Wx8WWfsPTk58xOXiQIhKwYylRzzAQPyfHsCdVc1mWGhBJPfRjn5eCVq2zUfRWqxNAqGsq9rMJ1XCs1BCpotR3vxF%2Fi3BxPS1NbKVkPFhcfodX5DaINeQ%2BcS83vsB66b%2BkXErbb0iRjg2Vh85JvFhxKRauVToHOl&X-Amz-Signature=8907ffd1458a906c69a0e2a01b5a682f1365e861e8a30a13134065193004557c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5VYE24%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDciaw0bakzBbmimo0FOa4oXeB3YCT3S6nBpWYEO%2BVu3gIgFrTQzf5ldlob54TNRIz6IBCmiJpBXqleM2QHioQwzx0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1xvFu8Cg%2BbZFFfPircA5MzZUlLhELbnotvzRaPUGKwxK1jp6%2BJYi1Q2JUbc1TBx6%2F8%2F%2BONRIaK3hkLHgX4ZqfPcR2jtTff%2BVX0O9mJUWW2FZAQF4iQQfymYyMvKSIsPu22LCBfYVx%2Bw83ERF%2F034AqqiAkdnzaPEqF6cvY2AgyqMxBTMkCuw9STGZsfS9pMYTmITMkvs%2FlR6%2BJ%2FI2gGK9YdJ1htOFA9w5BS4peVzgWvyPvrKg6vUgbfvNYF47H9XBZ04v7f4hc09qE%2Fj3rox7tfEJ%2BJSUIgmnnVzdIGO4zQHjWrjxjSlY7WzdUhm0siPDoF1U%2BTJKdMESkOA6QHF%2F%2B37B5n7s3JOVJoQJ4Fl18WB%2F19k%2BshhRG%2FcsCm5a9eYDWcn5loSpP1ceMhkUiPy4flfTLwkRyj3Mt6D1IcbD8%2FdRfXWXiwp4uWCU1QpoBdEAY4d2fMtW%2FsSm%2BWpey7K6tLIw7b75ENlkPR2tzxaNpYgGM2NSOD591vSIkRYS1kjPQanGKbw4R9zf6dX%2Fj%2F6Pkt8%2BvyHGOn7Vjtm%2FjWu34dlMS7BPJ8yPsJUlex861itPavdFwxqkek4TJK7sQEpWy%2Bdmly1Lb4eQnV9iakyJCfgb44rO958ssiv1UyS3SVgXhm9CpPDOe0nbPMJOg1sQGOqUBpWrta%2FkPODevyyjco%2FU%2F3Aodek5GmTX5yXzmhCioDFN7YaJbAwDkCx85y%2FGQ3Wx8WWfsPTk58xOXiQIhKwYylRzzAQPyfHsCdVc1mWGhBJPfRjn5eCVq2zUfRWqxNAqGsq9rMJ1XCs1BCpotR3vxF%2Fi3BxPS1NbKVkPFhcfodX5DaINeQ%2BcS83vsB66b%2BkXErbb0iRjg2Vh85JvFhxKRauVToHOl&X-Amz-Signature=4a9be086405d4f25c5f51988fb4f24bc768818eff024d1c56f3aeba9de0891ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5VYE24%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDciaw0bakzBbmimo0FOa4oXeB3YCT3S6nBpWYEO%2BVu3gIgFrTQzf5ldlob54TNRIz6IBCmiJpBXqleM2QHioQwzx0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1xvFu8Cg%2BbZFFfPircA5MzZUlLhELbnotvzRaPUGKwxK1jp6%2BJYi1Q2JUbc1TBx6%2F8%2F%2BONRIaK3hkLHgX4ZqfPcR2jtTff%2BVX0O9mJUWW2FZAQF4iQQfymYyMvKSIsPu22LCBfYVx%2Bw83ERF%2F034AqqiAkdnzaPEqF6cvY2AgyqMxBTMkCuw9STGZsfS9pMYTmITMkvs%2FlR6%2BJ%2FI2gGK9YdJ1htOFA9w5BS4peVzgWvyPvrKg6vUgbfvNYF47H9XBZ04v7f4hc09qE%2Fj3rox7tfEJ%2BJSUIgmnnVzdIGO4zQHjWrjxjSlY7WzdUhm0siPDoF1U%2BTJKdMESkOA6QHF%2F%2B37B5n7s3JOVJoQJ4Fl18WB%2F19k%2BshhRG%2FcsCm5a9eYDWcn5loSpP1ceMhkUiPy4flfTLwkRyj3Mt6D1IcbD8%2FdRfXWXiwp4uWCU1QpoBdEAY4d2fMtW%2FsSm%2BWpey7K6tLIw7b75ENlkPR2tzxaNpYgGM2NSOD591vSIkRYS1kjPQanGKbw4R9zf6dX%2Fj%2F6Pkt8%2BvyHGOn7Vjtm%2FjWu34dlMS7BPJ8yPsJUlex861itPavdFwxqkek4TJK7sQEpWy%2Bdmly1Lb4eQnV9iakyJCfgb44rO958ssiv1UyS3SVgXhm9CpPDOe0nbPMJOg1sQGOqUBpWrta%2FkPODevyyjco%2FU%2F3Aodek5GmTX5yXzmhCioDFN7YaJbAwDkCx85y%2FGQ3Wx8WWfsPTk58xOXiQIhKwYylRzzAQPyfHsCdVc1mWGhBJPfRjn5eCVq2zUfRWqxNAqGsq9rMJ1XCs1BCpotR3vxF%2Fi3BxPS1NbKVkPFhcfodX5DaINeQ%2BcS83vsB66b%2BkXErbb0iRjg2Vh85JvFhxKRauVToHOl&X-Amz-Signature=51a119a81c272075653f57d562aa2041309a1dd52a0b7bfd50bdf3904cc7c529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5VYE24%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDciaw0bakzBbmimo0FOa4oXeB3YCT3S6nBpWYEO%2BVu3gIgFrTQzf5ldlob54TNRIz6IBCmiJpBXqleM2QHioQwzx0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1xvFu8Cg%2BbZFFfPircA5MzZUlLhELbnotvzRaPUGKwxK1jp6%2BJYi1Q2JUbc1TBx6%2F8%2F%2BONRIaK3hkLHgX4ZqfPcR2jtTff%2BVX0O9mJUWW2FZAQF4iQQfymYyMvKSIsPu22LCBfYVx%2Bw83ERF%2F034AqqiAkdnzaPEqF6cvY2AgyqMxBTMkCuw9STGZsfS9pMYTmITMkvs%2FlR6%2BJ%2FI2gGK9YdJ1htOFA9w5BS4peVzgWvyPvrKg6vUgbfvNYF47H9XBZ04v7f4hc09qE%2Fj3rox7tfEJ%2BJSUIgmnnVzdIGO4zQHjWrjxjSlY7WzdUhm0siPDoF1U%2BTJKdMESkOA6QHF%2F%2B37B5n7s3JOVJoQJ4Fl18WB%2F19k%2BshhRG%2FcsCm5a9eYDWcn5loSpP1ceMhkUiPy4flfTLwkRyj3Mt6D1IcbD8%2FdRfXWXiwp4uWCU1QpoBdEAY4d2fMtW%2FsSm%2BWpey7K6tLIw7b75ENlkPR2tzxaNpYgGM2NSOD591vSIkRYS1kjPQanGKbw4R9zf6dX%2Fj%2F6Pkt8%2BvyHGOn7Vjtm%2FjWu34dlMS7BPJ8yPsJUlex861itPavdFwxqkek4TJK7sQEpWy%2Bdmly1Lb4eQnV9iakyJCfgb44rO958ssiv1UyS3SVgXhm9CpPDOe0nbPMJOg1sQGOqUBpWrta%2FkPODevyyjco%2FU%2F3Aodek5GmTX5yXzmhCioDFN7YaJbAwDkCx85y%2FGQ3Wx8WWfsPTk58xOXiQIhKwYylRzzAQPyfHsCdVc1mWGhBJPfRjn5eCVq2zUfRWqxNAqGsq9rMJ1XCs1BCpotR3vxF%2Fi3BxPS1NbKVkPFhcfodX5DaINeQ%2BcS83vsB66b%2BkXErbb0iRjg2Vh85JvFhxKRauVToHOl&X-Amz-Signature=308995be0daa96b26e150436dc7ebf9635efe21092d5f81817c23345f86b5751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5VYE24%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDciaw0bakzBbmimo0FOa4oXeB3YCT3S6nBpWYEO%2BVu3gIgFrTQzf5ldlob54TNRIz6IBCmiJpBXqleM2QHioQwzx0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1xvFu8Cg%2BbZFFfPircA5MzZUlLhELbnotvzRaPUGKwxK1jp6%2BJYi1Q2JUbc1TBx6%2F8%2F%2BONRIaK3hkLHgX4ZqfPcR2jtTff%2BVX0O9mJUWW2FZAQF4iQQfymYyMvKSIsPu22LCBfYVx%2Bw83ERF%2F034AqqiAkdnzaPEqF6cvY2AgyqMxBTMkCuw9STGZsfS9pMYTmITMkvs%2FlR6%2BJ%2FI2gGK9YdJ1htOFA9w5BS4peVzgWvyPvrKg6vUgbfvNYF47H9XBZ04v7f4hc09qE%2Fj3rox7tfEJ%2BJSUIgmnnVzdIGO4zQHjWrjxjSlY7WzdUhm0siPDoF1U%2BTJKdMESkOA6QHF%2F%2B37B5n7s3JOVJoQJ4Fl18WB%2F19k%2BshhRG%2FcsCm5a9eYDWcn5loSpP1ceMhkUiPy4flfTLwkRyj3Mt6D1IcbD8%2FdRfXWXiwp4uWCU1QpoBdEAY4d2fMtW%2FsSm%2BWpey7K6tLIw7b75ENlkPR2tzxaNpYgGM2NSOD591vSIkRYS1kjPQanGKbw4R9zf6dX%2Fj%2F6Pkt8%2BvyHGOn7Vjtm%2FjWu34dlMS7BPJ8yPsJUlex861itPavdFwxqkek4TJK7sQEpWy%2Bdmly1Lb4eQnV9iakyJCfgb44rO958ssiv1UyS3SVgXhm9CpPDOe0nbPMJOg1sQGOqUBpWrta%2FkPODevyyjco%2FU%2F3Aodek5GmTX5yXzmhCioDFN7YaJbAwDkCx85y%2FGQ3Wx8WWfsPTk58xOXiQIhKwYylRzzAQPyfHsCdVc1mWGhBJPfRjn5eCVq2zUfRWqxNAqGsq9rMJ1XCs1BCpotR3vxF%2Fi3BxPS1NbKVkPFhcfodX5DaINeQ%2BcS83vsB66b%2BkXErbb0iRjg2Vh85JvFhxKRauVToHOl&X-Amz-Signature=23d788c795658d86e2928a8817549df07bd773c2574987d4825a541240364cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5VYE24%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDciaw0bakzBbmimo0FOa4oXeB3YCT3S6nBpWYEO%2BVu3gIgFrTQzf5ldlob54TNRIz6IBCmiJpBXqleM2QHioQwzx0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1xvFu8Cg%2BbZFFfPircA5MzZUlLhELbnotvzRaPUGKwxK1jp6%2BJYi1Q2JUbc1TBx6%2F8%2F%2BONRIaK3hkLHgX4ZqfPcR2jtTff%2BVX0O9mJUWW2FZAQF4iQQfymYyMvKSIsPu22LCBfYVx%2Bw83ERF%2F034AqqiAkdnzaPEqF6cvY2AgyqMxBTMkCuw9STGZsfS9pMYTmITMkvs%2FlR6%2BJ%2FI2gGK9YdJ1htOFA9w5BS4peVzgWvyPvrKg6vUgbfvNYF47H9XBZ04v7f4hc09qE%2Fj3rox7tfEJ%2BJSUIgmnnVzdIGO4zQHjWrjxjSlY7WzdUhm0siPDoF1U%2BTJKdMESkOA6QHF%2F%2B37B5n7s3JOVJoQJ4Fl18WB%2F19k%2BshhRG%2FcsCm5a9eYDWcn5loSpP1ceMhkUiPy4flfTLwkRyj3Mt6D1IcbD8%2FdRfXWXiwp4uWCU1QpoBdEAY4d2fMtW%2FsSm%2BWpey7K6tLIw7b75ENlkPR2tzxaNpYgGM2NSOD591vSIkRYS1kjPQanGKbw4R9zf6dX%2Fj%2F6Pkt8%2BvyHGOn7Vjtm%2FjWu34dlMS7BPJ8yPsJUlex861itPavdFwxqkek4TJK7sQEpWy%2Bdmly1Lb4eQnV9iakyJCfgb44rO958ssiv1UyS3SVgXhm9CpPDOe0nbPMJOg1sQGOqUBpWrta%2FkPODevyyjco%2FU%2F3Aodek5GmTX5yXzmhCioDFN7YaJbAwDkCx85y%2FGQ3Wx8WWfsPTk58xOXiQIhKwYylRzzAQPyfHsCdVc1mWGhBJPfRjn5eCVq2zUfRWqxNAqGsq9rMJ1XCs1BCpotR3vxF%2Fi3BxPS1NbKVkPFhcfodX5DaINeQ%2BcS83vsB66b%2BkXErbb0iRjg2Vh85JvFhxKRauVToHOl&X-Amz-Signature=dc1f53e568b05c329b1bdc7d082dfcf04f4070107435c0e15147995b3fe8af67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5VYE24%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDciaw0bakzBbmimo0FOa4oXeB3YCT3S6nBpWYEO%2BVu3gIgFrTQzf5ldlob54TNRIz6IBCmiJpBXqleM2QHioQwzx0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1xvFu8Cg%2BbZFFfPircA5MzZUlLhELbnotvzRaPUGKwxK1jp6%2BJYi1Q2JUbc1TBx6%2F8%2F%2BONRIaK3hkLHgX4ZqfPcR2jtTff%2BVX0O9mJUWW2FZAQF4iQQfymYyMvKSIsPu22LCBfYVx%2Bw83ERF%2F034AqqiAkdnzaPEqF6cvY2AgyqMxBTMkCuw9STGZsfS9pMYTmITMkvs%2FlR6%2BJ%2FI2gGK9YdJ1htOFA9w5BS4peVzgWvyPvrKg6vUgbfvNYF47H9XBZ04v7f4hc09qE%2Fj3rox7tfEJ%2BJSUIgmnnVzdIGO4zQHjWrjxjSlY7WzdUhm0siPDoF1U%2BTJKdMESkOA6QHF%2F%2B37B5n7s3JOVJoQJ4Fl18WB%2F19k%2BshhRG%2FcsCm5a9eYDWcn5loSpP1ceMhkUiPy4flfTLwkRyj3Mt6D1IcbD8%2FdRfXWXiwp4uWCU1QpoBdEAY4d2fMtW%2FsSm%2BWpey7K6tLIw7b75ENlkPR2tzxaNpYgGM2NSOD591vSIkRYS1kjPQanGKbw4R9zf6dX%2Fj%2F6Pkt8%2BvyHGOn7Vjtm%2FjWu34dlMS7BPJ8yPsJUlex861itPavdFwxqkek4TJK7sQEpWy%2Bdmly1Lb4eQnV9iakyJCfgb44rO958ssiv1UyS3SVgXhm9CpPDOe0nbPMJOg1sQGOqUBpWrta%2FkPODevyyjco%2FU%2F3Aodek5GmTX5yXzmhCioDFN7YaJbAwDkCx85y%2FGQ3Wx8WWfsPTk58xOXiQIhKwYylRzzAQPyfHsCdVc1mWGhBJPfRjn5eCVq2zUfRWqxNAqGsq9rMJ1XCs1BCpotR3vxF%2Fi3BxPS1NbKVkPFhcfodX5DaINeQ%2BcS83vsB66b%2BkXErbb0iRjg2Vh85JvFhxKRauVToHOl&X-Amz-Signature=76bac3c1381236cf6faf62ddde3eb96c6de760cd4a20790a5325df8a8eba639f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5VYE24%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDciaw0bakzBbmimo0FOa4oXeB3YCT3S6nBpWYEO%2BVu3gIgFrTQzf5ldlob54TNRIz6IBCmiJpBXqleM2QHioQwzx0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1xvFu8Cg%2BbZFFfPircA5MzZUlLhELbnotvzRaPUGKwxK1jp6%2BJYi1Q2JUbc1TBx6%2F8%2F%2BONRIaK3hkLHgX4ZqfPcR2jtTff%2BVX0O9mJUWW2FZAQF4iQQfymYyMvKSIsPu22LCBfYVx%2Bw83ERF%2F034AqqiAkdnzaPEqF6cvY2AgyqMxBTMkCuw9STGZsfS9pMYTmITMkvs%2FlR6%2BJ%2FI2gGK9YdJ1htOFA9w5BS4peVzgWvyPvrKg6vUgbfvNYF47H9XBZ04v7f4hc09qE%2Fj3rox7tfEJ%2BJSUIgmnnVzdIGO4zQHjWrjxjSlY7WzdUhm0siPDoF1U%2BTJKdMESkOA6QHF%2F%2B37B5n7s3JOVJoQJ4Fl18WB%2F19k%2BshhRG%2FcsCm5a9eYDWcn5loSpP1ceMhkUiPy4flfTLwkRyj3Mt6D1IcbD8%2FdRfXWXiwp4uWCU1QpoBdEAY4d2fMtW%2FsSm%2BWpey7K6tLIw7b75ENlkPR2tzxaNpYgGM2NSOD591vSIkRYS1kjPQanGKbw4R9zf6dX%2Fj%2F6Pkt8%2BvyHGOn7Vjtm%2FjWu34dlMS7BPJ8yPsJUlex861itPavdFwxqkek4TJK7sQEpWy%2Bdmly1Lb4eQnV9iakyJCfgb44rO958ssiv1UyS3SVgXhm9CpPDOe0nbPMJOg1sQGOqUBpWrta%2FkPODevyyjco%2FU%2F3Aodek5GmTX5yXzmhCioDFN7YaJbAwDkCx85y%2FGQ3Wx8WWfsPTk58xOXiQIhKwYylRzzAQPyfHsCdVc1mWGhBJPfRjn5eCVq2zUfRWqxNAqGsq9rMJ1XCs1BCpotR3vxF%2Fi3BxPS1NbKVkPFhcfodX5DaINeQ%2BcS83vsB66b%2BkXErbb0iRjg2Vh85JvFhxKRauVToHOl&X-Amz-Signature=4a9be086405d4f25c5f51988fb4f24bc768818eff024d1c56f3aeba9de0891ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
