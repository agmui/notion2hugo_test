---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJIGQRU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ0hN8PcDPckT8jziNmz56NHUkZjfhMOu3USCYvyRoYAiEAgQ7JA9yUZENrjMNZP4Aks81hVCMvEa5%2BooeRf1RdvI8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMadGPpIs7wbILAtySrcA1UOayFiGBAXmGfm4dH14aOVxnF1DWqQD3KQPoFf3zunBFonVqMUpTKeYfXjQ5wh8GecTRNZcchAk8%2B0iyf5gzDDmnRyys%2BuKXRf5L8K2sAVuo9Si8Lt%2BQEF%2BCr55%2FNcrGdhtyxym4pU6bwAJ11b64fWQU75Qqw9CWshdfd1cFXJJmrEmThYfrYosuEiFKUfPA5iM5oFVutD69NCDxh7AK004OJFfqdr1TfrS5X86O9M9bFivcIr%2Fa1C7QcD6%2FKl%2BTsD%2B7Ned90MZ7lOs68P9Bjo0FfROUB%2BHuJTlRhAS40%2FEGmZDuoF%2Bhu1lYslQQnpaUtaG6GIM7bUTGpsX59C%2Bvnb4jUI8N1DD6%2FczaHh2M9xFIy2Q5tFx87qYv%2FRM3oJSOCtB%2FSQIt8a7ggdtWsqvb664J7KNSWDS8NyG93puTm%2BOhAiaE9sqpQqzhWkEeDKcuj3Ye6j0hGWN65elYrHaU0HohRnH1KoBTWAaZkblL%2Fppqie6NaDdAG%2Bdy4MHXqSkVVmxZ%2BNE5HyuLCAXaFay%2BTwox2sova6Jq8E2K6G0p1o64rDpq51kd4Y0PIPeK5vDX1Ht8Q%2BR1T44yuVC65kkE%2FGRb2F519CzlUEmjxIAq3%2BHbPAIgeQ6nK3KVgMMKqeucQGOqUB34UFc28Q6ldjU%2Bh%2BnoG8wYD5QluSjCTu9iPKyye4Un890cPjhebPXjVixx8afnWcDMrTaaIeuO1jepBTprsKugdt7yV6MwrnUyOCt9R8oCufy35Zm5tiEOybR0SPlDARd2tPHETPKqC6Vs4vqhjkyCLbEwgEYBv1AmRTINeZ8QT2R6J%2BECn2azQoJoZxJ2l655Xv8%2Fp6QGW9SFUEmSik0Dilh%2F3r&X-Amz-Signature=a6fc6aea2d9ae42f33f003539f568b9acefd46b393808bc0531cd4bfde5ae537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WTPCQY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboOqh6cLeA9i9Aw%2FznMCUxEk06Aqfqn2XyUJ%2BCCx6vAIgGo57fW2SPJ01Mtd6YJuYBcH6ufKrp7A%2FLJMdO41f62Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE0R4AXwL4d3KlKnRCrcA4Pp9M5hlGu5pyyOkzo58DfWEddDqUvz5NW3AqIB2%2FclomET74ngg8aSTPFy2zpLYWT%2FWBIJHhr8iQ67JPMPeZg0W35w%2Brf8Aw4Bx5IEfvrNIJEagqVSwxKgE%2FRqzDuAv1ZU9QkEyt9EqFlPOXPy61YvBEwWmjYqH5j%2F9ci50eeElHs1wMBQvFPCDJrSbcpc9Yb34nzHuvgVblUSIis4F04mOomLukl1Jsw6KZBSx8NXNXmuAMXPMubCc%2FdcbL%2BmQSPAxF9QF%2Fv0%2B97DelKEAwxQSEL7sclBm0DhUP59s%2FPUTHzoGiqhuvS4XdOzDh1Qxw%2Fabukk8FKVm3xJjDwgxEDs%2BKMXONK9ICoeAS5i7hydKsQ0rEEIwdRvQxYw71IQ9Io1YM%2BZI6%2FuZl2%2BsFgygjWVhs4UycTx0%2B7kXaYjXL%2FzCmRa%2BCmUbTpN7E6yXSCLmhLcWA4sXcwtZUTUiEnA6qEyDYMlqX6DSiV8PBMkm6Hoftc2vTdZ6CXZp%2F4sxefFompOf%2B15RfTxz%2Fpn95V4fS2Uyi8uEP9yeQnvB5htP2yhJ4D6s3%2Fz4Soodfi8NlDwrBYKsmyunxW2CYuo6AsPYGE%2FcA%2BFRgIOCt3lw2XI2fd7Qd7HZvvMJEpJ%2BDKzMNieucQGOqUBOulWNMwQjS8z86KvVX9fQM8q0qbwmnLeLU5%2FIOjjZrWj2xiYa1vQXQh5DHbFqSvIaXQMsLZj7Jc%2BLYIBopT5YJ%2BiUoQv5IIr12ebadRHKkt%2BZm8cwH4vmqbQ%2BKK1G%2Bf5akSnQbqUmLkg6DseFNT9uyLKzQ7JqHetgddSlMmptIRIb2R8mkX9wO76a8tWo9eAT8qV7mshZ3fGYUxDb%2Bay%2BgminUyg&X-Amz-Signature=356c18f92b44242a8b2db78315c1dec86dcfd782c4622493c6951294526f9688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WTPCQY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboOqh6cLeA9i9Aw%2FznMCUxEk06Aqfqn2XyUJ%2BCCx6vAIgGo57fW2SPJ01Mtd6YJuYBcH6ufKrp7A%2FLJMdO41f62Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE0R4AXwL4d3KlKnRCrcA4Pp9M5hlGu5pyyOkzo58DfWEddDqUvz5NW3AqIB2%2FclomET74ngg8aSTPFy2zpLYWT%2FWBIJHhr8iQ67JPMPeZg0W35w%2Brf8Aw4Bx5IEfvrNIJEagqVSwxKgE%2FRqzDuAv1ZU9QkEyt9EqFlPOXPy61YvBEwWmjYqH5j%2F9ci50eeElHs1wMBQvFPCDJrSbcpc9Yb34nzHuvgVblUSIis4F04mOomLukl1Jsw6KZBSx8NXNXmuAMXPMubCc%2FdcbL%2BmQSPAxF9QF%2Fv0%2B97DelKEAwxQSEL7sclBm0DhUP59s%2FPUTHzoGiqhuvS4XdOzDh1Qxw%2Fabukk8FKVm3xJjDwgxEDs%2BKMXONK9ICoeAS5i7hydKsQ0rEEIwdRvQxYw71IQ9Io1YM%2BZI6%2FuZl2%2BsFgygjWVhs4UycTx0%2B7kXaYjXL%2FzCmRa%2BCmUbTpN7E6yXSCLmhLcWA4sXcwtZUTUiEnA6qEyDYMlqX6DSiV8PBMkm6Hoftc2vTdZ6CXZp%2F4sxefFompOf%2B15RfTxz%2Fpn95V4fS2Uyi8uEP9yeQnvB5htP2yhJ4D6s3%2Fz4Soodfi8NlDwrBYKsmyunxW2CYuo6AsPYGE%2FcA%2BFRgIOCt3lw2XI2fd7Qd7HZvvMJEpJ%2BDKzMNieucQGOqUBOulWNMwQjS8z86KvVX9fQM8q0qbwmnLeLU5%2FIOjjZrWj2xiYa1vQXQh5DHbFqSvIaXQMsLZj7Jc%2BLYIBopT5YJ%2BiUoQv5IIr12ebadRHKkt%2BZm8cwH4vmqbQ%2BKK1G%2Bf5akSnQbqUmLkg6DseFNT9uyLKzQ7JqHetgddSlMmptIRIb2R8mkX9wO76a8tWo9eAT8qV7mshZ3fGYUxDb%2Bay%2BgminUyg&X-Amz-Signature=a4d6c6c00a8ba395a01f1c96f54e3860b61cd516cc6231de790fec145be2152b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WTPCQY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboOqh6cLeA9i9Aw%2FznMCUxEk06Aqfqn2XyUJ%2BCCx6vAIgGo57fW2SPJ01Mtd6YJuYBcH6ufKrp7A%2FLJMdO41f62Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE0R4AXwL4d3KlKnRCrcA4Pp9M5hlGu5pyyOkzo58DfWEddDqUvz5NW3AqIB2%2FclomET74ngg8aSTPFy2zpLYWT%2FWBIJHhr8iQ67JPMPeZg0W35w%2Brf8Aw4Bx5IEfvrNIJEagqVSwxKgE%2FRqzDuAv1ZU9QkEyt9EqFlPOXPy61YvBEwWmjYqH5j%2F9ci50eeElHs1wMBQvFPCDJrSbcpc9Yb34nzHuvgVblUSIis4F04mOomLukl1Jsw6KZBSx8NXNXmuAMXPMubCc%2FdcbL%2BmQSPAxF9QF%2Fv0%2B97DelKEAwxQSEL7sclBm0DhUP59s%2FPUTHzoGiqhuvS4XdOzDh1Qxw%2Fabukk8FKVm3xJjDwgxEDs%2BKMXONK9ICoeAS5i7hydKsQ0rEEIwdRvQxYw71IQ9Io1YM%2BZI6%2FuZl2%2BsFgygjWVhs4UycTx0%2B7kXaYjXL%2FzCmRa%2BCmUbTpN7E6yXSCLmhLcWA4sXcwtZUTUiEnA6qEyDYMlqX6DSiV8PBMkm6Hoftc2vTdZ6CXZp%2F4sxefFompOf%2B15RfTxz%2Fpn95V4fS2Uyi8uEP9yeQnvB5htP2yhJ4D6s3%2Fz4Soodfi8NlDwrBYKsmyunxW2CYuo6AsPYGE%2FcA%2BFRgIOCt3lw2XI2fd7Qd7HZvvMJEpJ%2BDKzMNieucQGOqUBOulWNMwQjS8z86KvVX9fQM8q0qbwmnLeLU5%2FIOjjZrWj2xiYa1vQXQh5DHbFqSvIaXQMsLZj7Jc%2BLYIBopT5YJ%2BiUoQv5IIr12ebadRHKkt%2BZm8cwH4vmqbQ%2BKK1G%2Bf5akSnQbqUmLkg6DseFNT9uyLKzQ7JqHetgddSlMmptIRIb2R8mkX9wO76a8tWo9eAT8qV7mshZ3fGYUxDb%2Bay%2BgminUyg&X-Amz-Signature=f029194b02ed4bba421350aba60eabb63e313abaecdbb49e70b6913dc0bc25e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WTPCQY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboOqh6cLeA9i9Aw%2FznMCUxEk06Aqfqn2XyUJ%2BCCx6vAIgGo57fW2SPJ01Mtd6YJuYBcH6ufKrp7A%2FLJMdO41f62Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE0R4AXwL4d3KlKnRCrcA4Pp9M5hlGu5pyyOkzo58DfWEddDqUvz5NW3AqIB2%2FclomET74ngg8aSTPFy2zpLYWT%2FWBIJHhr8iQ67JPMPeZg0W35w%2Brf8Aw4Bx5IEfvrNIJEagqVSwxKgE%2FRqzDuAv1ZU9QkEyt9EqFlPOXPy61YvBEwWmjYqH5j%2F9ci50eeElHs1wMBQvFPCDJrSbcpc9Yb34nzHuvgVblUSIis4F04mOomLukl1Jsw6KZBSx8NXNXmuAMXPMubCc%2FdcbL%2BmQSPAxF9QF%2Fv0%2B97DelKEAwxQSEL7sclBm0DhUP59s%2FPUTHzoGiqhuvS4XdOzDh1Qxw%2Fabukk8FKVm3xJjDwgxEDs%2BKMXONK9ICoeAS5i7hydKsQ0rEEIwdRvQxYw71IQ9Io1YM%2BZI6%2FuZl2%2BsFgygjWVhs4UycTx0%2B7kXaYjXL%2FzCmRa%2BCmUbTpN7E6yXSCLmhLcWA4sXcwtZUTUiEnA6qEyDYMlqX6DSiV8PBMkm6Hoftc2vTdZ6CXZp%2F4sxefFompOf%2B15RfTxz%2Fpn95V4fS2Uyi8uEP9yeQnvB5htP2yhJ4D6s3%2Fz4Soodfi8NlDwrBYKsmyunxW2CYuo6AsPYGE%2FcA%2BFRgIOCt3lw2XI2fd7Qd7HZvvMJEpJ%2BDKzMNieucQGOqUBOulWNMwQjS8z86KvVX9fQM8q0qbwmnLeLU5%2FIOjjZrWj2xiYa1vQXQh5DHbFqSvIaXQMsLZj7Jc%2BLYIBopT5YJ%2BiUoQv5IIr12ebadRHKkt%2BZm8cwH4vmqbQ%2BKK1G%2Bf5akSnQbqUmLkg6DseFNT9uyLKzQ7JqHetgddSlMmptIRIb2R8mkX9wO76a8tWo9eAT8qV7mshZ3fGYUxDb%2Bay%2BgminUyg&X-Amz-Signature=97d2d01dfaaa935347e728846b5641109744ae737058725028515823888c9a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WTPCQY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboOqh6cLeA9i9Aw%2FznMCUxEk06Aqfqn2XyUJ%2BCCx6vAIgGo57fW2SPJ01Mtd6YJuYBcH6ufKrp7A%2FLJMdO41f62Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE0R4AXwL4d3KlKnRCrcA4Pp9M5hlGu5pyyOkzo58DfWEddDqUvz5NW3AqIB2%2FclomET74ngg8aSTPFy2zpLYWT%2FWBIJHhr8iQ67JPMPeZg0W35w%2Brf8Aw4Bx5IEfvrNIJEagqVSwxKgE%2FRqzDuAv1ZU9QkEyt9EqFlPOXPy61YvBEwWmjYqH5j%2F9ci50eeElHs1wMBQvFPCDJrSbcpc9Yb34nzHuvgVblUSIis4F04mOomLukl1Jsw6KZBSx8NXNXmuAMXPMubCc%2FdcbL%2BmQSPAxF9QF%2Fv0%2B97DelKEAwxQSEL7sclBm0DhUP59s%2FPUTHzoGiqhuvS4XdOzDh1Qxw%2Fabukk8FKVm3xJjDwgxEDs%2BKMXONK9ICoeAS5i7hydKsQ0rEEIwdRvQxYw71IQ9Io1YM%2BZI6%2FuZl2%2BsFgygjWVhs4UycTx0%2B7kXaYjXL%2FzCmRa%2BCmUbTpN7E6yXSCLmhLcWA4sXcwtZUTUiEnA6qEyDYMlqX6DSiV8PBMkm6Hoftc2vTdZ6CXZp%2F4sxefFompOf%2B15RfTxz%2Fpn95V4fS2Uyi8uEP9yeQnvB5htP2yhJ4D6s3%2Fz4Soodfi8NlDwrBYKsmyunxW2CYuo6AsPYGE%2FcA%2BFRgIOCt3lw2XI2fd7Qd7HZvvMJEpJ%2BDKzMNieucQGOqUBOulWNMwQjS8z86KvVX9fQM8q0qbwmnLeLU5%2FIOjjZrWj2xiYa1vQXQh5DHbFqSvIaXQMsLZj7Jc%2BLYIBopT5YJ%2BiUoQv5IIr12ebadRHKkt%2BZm8cwH4vmqbQ%2BKK1G%2Bf5akSnQbqUmLkg6DseFNT9uyLKzQ7JqHetgddSlMmptIRIb2R8mkX9wO76a8tWo9eAT8qV7mshZ3fGYUxDb%2Bay%2BgminUyg&X-Amz-Signature=fbe12d7d2f3b53fd0a006492cf1083897c5a5c672c84c0e96ce3ba3296cd2094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WTPCQY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboOqh6cLeA9i9Aw%2FznMCUxEk06Aqfqn2XyUJ%2BCCx6vAIgGo57fW2SPJ01Mtd6YJuYBcH6ufKrp7A%2FLJMdO41f62Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE0R4AXwL4d3KlKnRCrcA4Pp9M5hlGu5pyyOkzo58DfWEddDqUvz5NW3AqIB2%2FclomET74ngg8aSTPFy2zpLYWT%2FWBIJHhr8iQ67JPMPeZg0W35w%2Brf8Aw4Bx5IEfvrNIJEagqVSwxKgE%2FRqzDuAv1ZU9QkEyt9EqFlPOXPy61YvBEwWmjYqH5j%2F9ci50eeElHs1wMBQvFPCDJrSbcpc9Yb34nzHuvgVblUSIis4F04mOomLukl1Jsw6KZBSx8NXNXmuAMXPMubCc%2FdcbL%2BmQSPAxF9QF%2Fv0%2B97DelKEAwxQSEL7sclBm0DhUP59s%2FPUTHzoGiqhuvS4XdOzDh1Qxw%2Fabukk8FKVm3xJjDwgxEDs%2BKMXONK9ICoeAS5i7hydKsQ0rEEIwdRvQxYw71IQ9Io1YM%2BZI6%2FuZl2%2BsFgygjWVhs4UycTx0%2B7kXaYjXL%2FzCmRa%2BCmUbTpN7E6yXSCLmhLcWA4sXcwtZUTUiEnA6qEyDYMlqX6DSiV8PBMkm6Hoftc2vTdZ6CXZp%2F4sxefFompOf%2B15RfTxz%2Fpn95V4fS2Uyi8uEP9yeQnvB5htP2yhJ4D6s3%2Fz4Soodfi8NlDwrBYKsmyunxW2CYuo6AsPYGE%2FcA%2BFRgIOCt3lw2XI2fd7Qd7HZvvMJEpJ%2BDKzMNieucQGOqUBOulWNMwQjS8z86KvVX9fQM8q0qbwmnLeLU5%2FIOjjZrWj2xiYa1vQXQh5DHbFqSvIaXQMsLZj7Jc%2BLYIBopT5YJ%2BiUoQv5IIr12ebadRHKkt%2BZm8cwH4vmqbQ%2BKK1G%2Bf5akSnQbqUmLkg6DseFNT9uyLKzQ7JqHetgddSlMmptIRIb2R8mkX9wO76a8tWo9eAT8qV7mshZ3fGYUxDb%2Bay%2BgminUyg&X-Amz-Signature=7bc3e1521c875208412de8ce62146c876e1275265e65922bc474a143e7db2e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WTPCQY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboOqh6cLeA9i9Aw%2FznMCUxEk06Aqfqn2XyUJ%2BCCx6vAIgGo57fW2SPJ01Mtd6YJuYBcH6ufKrp7A%2FLJMdO41f62Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE0R4AXwL4d3KlKnRCrcA4Pp9M5hlGu5pyyOkzo58DfWEddDqUvz5NW3AqIB2%2FclomET74ngg8aSTPFy2zpLYWT%2FWBIJHhr8iQ67JPMPeZg0W35w%2Brf8Aw4Bx5IEfvrNIJEagqVSwxKgE%2FRqzDuAv1ZU9QkEyt9EqFlPOXPy61YvBEwWmjYqH5j%2F9ci50eeElHs1wMBQvFPCDJrSbcpc9Yb34nzHuvgVblUSIis4F04mOomLukl1Jsw6KZBSx8NXNXmuAMXPMubCc%2FdcbL%2BmQSPAxF9QF%2Fv0%2B97DelKEAwxQSEL7sclBm0DhUP59s%2FPUTHzoGiqhuvS4XdOzDh1Qxw%2Fabukk8FKVm3xJjDwgxEDs%2BKMXONK9ICoeAS5i7hydKsQ0rEEIwdRvQxYw71IQ9Io1YM%2BZI6%2FuZl2%2BsFgygjWVhs4UycTx0%2B7kXaYjXL%2FzCmRa%2BCmUbTpN7E6yXSCLmhLcWA4sXcwtZUTUiEnA6qEyDYMlqX6DSiV8PBMkm6Hoftc2vTdZ6CXZp%2F4sxefFompOf%2B15RfTxz%2Fpn95V4fS2Uyi8uEP9yeQnvB5htP2yhJ4D6s3%2Fz4Soodfi8NlDwrBYKsmyunxW2CYuo6AsPYGE%2FcA%2BFRgIOCt3lw2XI2fd7Qd7HZvvMJEpJ%2BDKzMNieucQGOqUBOulWNMwQjS8z86KvVX9fQM8q0qbwmnLeLU5%2FIOjjZrWj2xiYa1vQXQh5DHbFqSvIaXQMsLZj7Jc%2BLYIBopT5YJ%2BiUoQv5IIr12ebadRHKkt%2BZm8cwH4vmqbQ%2BKK1G%2Bf5akSnQbqUmLkg6DseFNT9uyLKzQ7JqHetgddSlMmptIRIb2R8mkX9wO76a8tWo9eAT8qV7mshZ3fGYUxDb%2Bay%2BgminUyg&X-Amz-Signature=c2bffcf3e8c18f7372f37bedffd59762c17ee3a1ecf79c9a152be3f8d4f044e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WTPCQY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboOqh6cLeA9i9Aw%2FznMCUxEk06Aqfqn2XyUJ%2BCCx6vAIgGo57fW2SPJ01Mtd6YJuYBcH6ufKrp7A%2FLJMdO41f62Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE0R4AXwL4d3KlKnRCrcA4Pp9M5hlGu5pyyOkzo58DfWEddDqUvz5NW3AqIB2%2FclomET74ngg8aSTPFy2zpLYWT%2FWBIJHhr8iQ67JPMPeZg0W35w%2Brf8Aw4Bx5IEfvrNIJEagqVSwxKgE%2FRqzDuAv1ZU9QkEyt9EqFlPOXPy61YvBEwWmjYqH5j%2F9ci50eeElHs1wMBQvFPCDJrSbcpc9Yb34nzHuvgVblUSIis4F04mOomLukl1Jsw6KZBSx8NXNXmuAMXPMubCc%2FdcbL%2BmQSPAxF9QF%2Fv0%2B97DelKEAwxQSEL7sclBm0DhUP59s%2FPUTHzoGiqhuvS4XdOzDh1Qxw%2Fabukk8FKVm3xJjDwgxEDs%2BKMXONK9ICoeAS5i7hydKsQ0rEEIwdRvQxYw71IQ9Io1YM%2BZI6%2FuZl2%2BsFgygjWVhs4UycTx0%2B7kXaYjXL%2FzCmRa%2BCmUbTpN7E6yXSCLmhLcWA4sXcwtZUTUiEnA6qEyDYMlqX6DSiV8PBMkm6Hoftc2vTdZ6CXZp%2F4sxefFompOf%2B15RfTxz%2Fpn95V4fS2Uyi8uEP9yeQnvB5htP2yhJ4D6s3%2Fz4Soodfi8NlDwrBYKsmyunxW2CYuo6AsPYGE%2FcA%2BFRgIOCt3lw2XI2fd7Qd7HZvvMJEpJ%2BDKzMNieucQGOqUBOulWNMwQjS8z86KvVX9fQM8q0qbwmnLeLU5%2FIOjjZrWj2xiYa1vQXQh5DHbFqSvIaXQMsLZj7Jc%2BLYIBopT5YJ%2BiUoQv5IIr12ebadRHKkt%2BZm8cwH4vmqbQ%2BKK1G%2Bf5akSnQbqUmLkg6DseFNT9uyLKzQ7JqHetgddSlMmptIRIb2R8mkX9wO76a8tWo9eAT8qV7mshZ3fGYUxDb%2Bay%2BgminUyg&X-Amz-Signature=830855e86cc4837c873110ca19bfa5dd4e95bcaafbc6bcf12654becdd9f498d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WTPCQY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboOqh6cLeA9i9Aw%2FznMCUxEk06Aqfqn2XyUJ%2BCCx6vAIgGo57fW2SPJ01Mtd6YJuYBcH6ufKrp7A%2FLJMdO41f62Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE0R4AXwL4d3KlKnRCrcA4Pp9M5hlGu5pyyOkzo58DfWEddDqUvz5NW3AqIB2%2FclomET74ngg8aSTPFy2zpLYWT%2FWBIJHhr8iQ67JPMPeZg0W35w%2Brf8Aw4Bx5IEfvrNIJEagqVSwxKgE%2FRqzDuAv1ZU9QkEyt9EqFlPOXPy61YvBEwWmjYqH5j%2F9ci50eeElHs1wMBQvFPCDJrSbcpc9Yb34nzHuvgVblUSIis4F04mOomLukl1Jsw6KZBSx8NXNXmuAMXPMubCc%2FdcbL%2BmQSPAxF9QF%2Fv0%2B97DelKEAwxQSEL7sclBm0DhUP59s%2FPUTHzoGiqhuvS4XdOzDh1Qxw%2Fabukk8FKVm3xJjDwgxEDs%2BKMXONK9ICoeAS5i7hydKsQ0rEEIwdRvQxYw71IQ9Io1YM%2BZI6%2FuZl2%2BsFgygjWVhs4UycTx0%2B7kXaYjXL%2FzCmRa%2BCmUbTpN7E6yXSCLmhLcWA4sXcwtZUTUiEnA6qEyDYMlqX6DSiV8PBMkm6Hoftc2vTdZ6CXZp%2F4sxefFompOf%2B15RfTxz%2Fpn95V4fS2Uyi8uEP9yeQnvB5htP2yhJ4D6s3%2Fz4Soodfi8NlDwrBYKsmyunxW2CYuo6AsPYGE%2FcA%2BFRgIOCt3lw2XI2fd7Qd7HZvvMJEpJ%2BDKzMNieucQGOqUBOulWNMwQjS8z86KvVX9fQM8q0qbwmnLeLU5%2FIOjjZrWj2xiYa1vQXQh5DHbFqSvIaXQMsLZj7Jc%2BLYIBopT5YJ%2BiUoQv5IIr12ebadRHKkt%2BZm8cwH4vmqbQ%2BKK1G%2Bf5akSnQbqUmLkg6DseFNT9uyLKzQ7JqHetgddSlMmptIRIb2R8mkX9wO76a8tWo9eAT8qV7mshZ3fGYUxDb%2Bay%2BgminUyg&X-Amz-Signature=26d63e08d48737749dc5a9e21d13e371b3258df51849e252fff3577f3ad0efae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WTPCQY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboOqh6cLeA9i9Aw%2FznMCUxEk06Aqfqn2XyUJ%2BCCx6vAIgGo57fW2SPJ01Mtd6YJuYBcH6ufKrp7A%2FLJMdO41f62Mq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE0R4AXwL4d3KlKnRCrcA4Pp9M5hlGu5pyyOkzo58DfWEddDqUvz5NW3AqIB2%2FclomET74ngg8aSTPFy2zpLYWT%2FWBIJHhr8iQ67JPMPeZg0W35w%2Brf8Aw4Bx5IEfvrNIJEagqVSwxKgE%2FRqzDuAv1ZU9QkEyt9EqFlPOXPy61YvBEwWmjYqH5j%2F9ci50eeElHs1wMBQvFPCDJrSbcpc9Yb34nzHuvgVblUSIis4F04mOomLukl1Jsw6KZBSx8NXNXmuAMXPMubCc%2FdcbL%2BmQSPAxF9QF%2Fv0%2B97DelKEAwxQSEL7sclBm0DhUP59s%2FPUTHzoGiqhuvS4XdOzDh1Qxw%2Fabukk8FKVm3xJjDwgxEDs%2BKMXONK9ICoeAS5i7hydKsQ0rEEIwdRvQxYw71IQ9Io1YM%2BZI6%2FuZl2%2BsFgygjWVhs4UycTx0%2B7kXaYjXL%2FzCmRa%2BCmUbTpN7E6yXSCLmhLcWA4sXcwtZUTUiEnA6qEyDYMlqX6DSiV8PBMkm6Hoftc2vTdZ6CXZp%2F4sxefFompOf%2B15RfTxz%2Fpn95V4fS2Uyi8uEP9yeQnvB5htP2yhJ4D6s3%2Fz4Soodfi8NlDwrBYKsmyunxW2CYuo6AsPYGE%2FcA%2BFRgIOCt3lw2XI2fd7Qd7HZvvMJEpJ%2BDKzMNieucQGOqUBOulWNMwQjS8z86KvVX9fQM8q0qbwmnLeLU5%2FIOjjZrWj2xiYa1vQXQh5DHbFqSvIaXQMsLZj7Jc%2BLYIBopT5YJ%2BiUoQv5IIr12ebadRHKkt%2BZm8cwH4vmqbQ%2BKK1G%2Bf5akSnQbqUmLkg6DseFNT9uyLKzQ7JqHetgddSlMmptIRIb2R8mkX9wO76a8tWo9eAT8qV7mshZ3fGYUxDb%2Bay%2BgminUyg&X-Amz-Signature=97d2d01dfaaa935347e728846b5641109744ae737058725028515823888c9a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
