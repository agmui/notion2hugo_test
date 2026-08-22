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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ID4MHPE%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRuAHb30LqUgtjCKl7pilCAEIlGnJ8wM9LpTOP3936fAiEAhvVb1YM%2FNTGvLyYnCAXryVA6qnsL3dNYMeXUPDGhb%2BMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbltKrhGQS%2B24ySZircA2xPsGClIwkMJKTmfGq13WUs6RMLHu1wYQRvqy8sBnXywIIuelATNoP4J%2B7DZeme8YY6WLilUUCh8BPcRMUQG7QQ4F%2F5T2hY80zyWXvCLBddfrAaOMynMeiVCgW5oRtJSfH9OVmVsrWrWlQ6cRdAwEt9UU0OiJNwvnqKDpdijltXaKkE0mmjJ5XbxX3p853Y8fbEMz%2FfIIUjtDEsSD3C8Zz1IkeHvioyt%2BE%2B7Jte0zKe7dDzCXSx9dcLb%2BsACd8NzH7xLS5hORoXmdYmtIE%2Bvmj9r1KfW0ix%2BjbtUfpEZg%2BEjQvlNK%2BoRkSi3%2BIuQnbvNdxHGHjW3LZkX5HS4AKoWQzVXppxv5BQqH%2F%2BuAySYNDqHNI46QzKSdhehJLJwXJwo5NAWOL6FyQksEIwMF38U7CLnP5%2F93JE0wSY84wo540FZPw6qdP6TGa4KsAxnfqkfQgnS%2BM%2BQ9WnRFceub3zxAm3q%2FixB%2FTqxiGdMGJYQVCKVZEEt1T4ZD58jIy%2BCSMlUXOOXhLKvhRasWZP%2FH8R6CbA1BbiLnOM3p6eaZUKSLbhsRwOaZnftpJPIBs2biVLNUyIo%2BTK7diIclt7VbCkQmonZCyjNY1TqLErR2AWloLDmVDvhGwCT84UwJJXMJzDo9QGOqUBopIxf6ycHSkK1ufk6ExT4C2cr1jKKHayqA%2FM8xqW1OKnXyVAipfnnphpq7HZJ%2BDEdc4fs94cbJO%2FMCsGG4gHdBePE%2Fg%2BKdyef%2BjfpzbCIanDEBsl5qPDO55x4asbrUSv0okkaSIjadwtq2EE3lX8GpLo4Z1kHtQnHu4MUkbZDnlcKOYOh3u2EQxsX3Q3Y7tWWqdkt%2FpbNMQB0MAfMHXYe2A72Fbi&X-Amz-Signature=fbbaaf3ca7684d6db2a73fcfc8763981c87ed76bc375e858b013d7552253e008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE5QD66%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9kkk3wHO4KqEi5io8Va9QTDayHXmbGGKYjDE3SiPmAiBOUv6L%2FjcQYm8Cf4Ptd4hlVHpVy3HFaxO9DDx6aceozCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRE36dLbS%2Fre4me5KtwDNw9%2FwCEuELZq4N0YWA%2BL2krf7Oqi7qYSduZvku9J7YIA%2B0b5j0R3nqp3J8eNHwbPNm1lwESp%2BXDs%2B%2FfHWVz%2BRD0v5%2FMtpOvkncC0Cyi%2F0Yv1u3Sh7o6CUvtV4DNytdms2Z0o%2FXtp87EhuiqE8MeVA0LyZfmNFfQod47olHLvJ6Fch4DFhu%2FOpCHVVHLMshND%2FNs5ZG7lB2wHHLmpNiQNBjWrF4zTZJeEi0bNvJrfub5mxczYsA3k12HmsteBVguiAbmQkGxh%2F2hT00ZZWo3aja984gYa8dLvRkLmRacJl11Kwp1wvaIB%2FO%2FBOaJhZK4i%2F5NZkb%2FyVDmvegCOA0WHGBMXbgp2Ub6zxbTICNs%2FGh%2Bw5g%2BJE7v95O3fqTYbTGVGaYhM7b5ffkp44bSnDufj8aEIuV2S%2FICCfsICUrsYRLR%2B5g6u8r8n7kLHCyc%2BYplCmNaTsh3BDMuujAbF4MND4oLIAB%2BJsHKj3IV6suP7GXGSQE0K86KWXq4q%2ButMb3J8Z0k%2FdZg69K1KBKjGZsC%2BFUGgrMWQI3fgw%2FjnfPNyiGEe65aRW1UXWnDACul6hM3KDdkXkeWechXgeAh%2BN8sFAkaOSPqX87R3vme77n6GR6FkmiLyoDBTlvlVcfcwssOj1AY6pgELed07aPj1IhzgmcSwTL28vScbklHIlmqyHO5Qi4Z4wRekR65mIZ86%2B2xFVtotVzq2teMB0X8%2Bbo7W%2BiWkEuZf3Kh3twOJlArIrxoYCovvW3cEMs9v%2BSA8hDlFWULS4O2pCVlbcytJ7cD6NN4dYVlGR9HLJMv8vGg6MQgikQqQsX%2BLX7Yx1oUh7qWpWST397nICB0CzE3ORCcmA9dhUF5cWiCKaXvm&X-Amz-Signature=4364b9d9961fe4fe9a7b96f471779540066d5f5808b26c4deb78cc2af052b3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE5QD66%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9kkk3wHO4KqEi5io8Va9QTDayHXmbGGKYjDE3SiPmAiBOUv6L%2FjcQYm8Cf4Ptd4hlVHpVy3HFaxO9DDx6aceozCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRE36dLbS%2Fre4me5KtwDNw9%2FwCEuELZq4N0YWA%2BL2krf7Oqi7qYSduZvku9J7YIA%2B0b5j0R3nqp3J8eNHwbPNm1lwESp%2BXDs%2B%2FfHWVz%2BRD0v5%2FMtpOvkncC0Cyi%2F0Yv1u3Sh7o6CUvtV4DNytdms2Z0o%2FXtp87EhuiqE8MeVA0LyZfmNFfQod47olHLvJ6Fch4DFhu%2FOpCHVVHLMshND%2FNs5ZG7lB2wHHLmpNiQNBjWrF4zTZJeEi0bNvJrfub5mxczYsA3k12HmsteBVguiAbmQkGxh%2F2hT00ZZWo3aja984gYa8dLvRkLmRacJl11Kwp1wvaIB%2FO%2FBOaJhZK4i%2F5NZkb%2FyVDmvegCOA0WHGBMXbgp2Ub6zxbTICNs%2FGh%2Bw5g%2BJE7v95O3fqTYbTGVGaYhM7b5ffkp44bSnDufj8aEIuV2S%2FICCfsICUrsYRLR%2B5g6u8r8n7kLHCyc%2BYplCmNaTsh3BDMuujAbF4MND4oLIAB%2BJsHKj3IV6suP7GXGSQE0K86KWXq4q%2ButMb3J8Z0k%2FdZg69K1KBKjGZsC%2BFUGgrMWQI3fgw%2FjnfPNyiGEe65aRW1UXWnDACul6hM3KDdkXkeWechXgeAh%2BN8sFAkaOSPqX87R3vme77n6GR6FkmiLyoDBTlvlVcfcwssOj1AY6pgELed07aPj1IhzgmcSwTL28vScbklHIlmqyHO5Qi4Z4wRekR65mIZ86%2B2xFVtotVzq2teMB0X8%2Bbo7W%2BiWkEuZf3Kh3twOJlArIrxoYCovvW3cEMs9v%2BSA8hDlFWULS4O2pCVlbcytJ7cD6NN4dYVlGR9HLJMv8vGg6MQgikQqQsX%2BLX7Yx1oUh7qWpWST397nICB0CzE3ORCcmA9dhUF5cWiCKaXvm&X-Amz-Signature=a02273699a7b997c7e24966a6e2d858774f6b43471d789851a1a2f1ead67003b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE5QD66%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9kkk3wHO4KqEi5io8Va9QTDayHXmbGGKYjDE3SiPmAiBOUv6L%2FjcQYm8Cf4Ptd4hlVHpVy3HFaxO9DDx6aceozCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRE36dLbS%2Fre4me5KtwDNw9%2FwCEuELZq4N0YWA%2BL2krf7Oqi7qYSduZvku9J7YIA%2B0b5j0R3nqp3J8eNHwbPNm1lwESp%2BXDs%2B%2FfHWVz%2BRD0v5%2FMtpOvkncC0Cyi%2F0Yv1u3Sh7o6CUvtV4DNytdms2Z0o%2FXtp87EhuiqE8MeVA0LyZfmNFfQod47olHLvJ6Fch4DFhu%2FOpCHVVHLMshND%2FNs5ZG7lB2wHHLmpNiQNBjWrF4zTZJeEi0bNvJrfub5mxczYsA3k12HmsteBVguiAbmQkGxh%2F2hT00ZZWo3aja984gYa8dLvRkLmRacJl11Kwp1wvaIB%2FO%2FBOaJhZK4i%2F5NZkb%2FyVDmvegCOA0WHGBMXbgp2Ub6zxbTICNs%2FGh%2Bw5g%2BJE7v95O3fqTYbTGVGaYhM7b5ffkp44bSnDufj8aEIuV2S%2FICCfsICUrsYRLR%2B5g6u8r8n7kLHCyc%2BYplCmNaTsh3BDMuujAbF4MND4oLIAB%2BJsHKj3IV6suP7GXGSQE0K86KWXq4q%2ButMb3J8Z0k%2FdZg69K1KBKjGZsC%2BFUGgrMWQI3fgw%2FjnfPNyiGEe65aRW1UXWnDACul6hM3KDdkXkeWechXgeAh%2BN8sFAkaOSPqX87R3vme77n6GR6FkmiLyoDBTlvlVcfcwssOj1AY6pgELed07aPj1IhzgmcSwTL28vScbklHIlmqyHO5Qi4Z4wRekR65mIZ86%2B2xFVtotVzq2teMB0X8%2Bbo7W%2BiWkEuZf3Kh3twOJlArIrxoYCovvW3cEMs9v%2BSA8hDlFWULS4O2pCVlbcytJ7cD6NN4dYVlGR9HLJMv8vGg6MQgikQqQsX%2BLX7Yx1oUh7qWpWST397nICB0CzE3ORCcmA9dhUF5cWiCKaXvm&X-Amz-Signature=b0679d6f5ac0873a0f4e28c4310385b449cebfc08a8b77c40c7993b995af9b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE5QD66%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9kkk3wHO4KqEi5io8Va9QTDayHXmbGGKYjDE3SiPmAiBOUv6L%2FjcQYm8Cf4Ptd4hlVHpVy3HFaxO9DDx6aceozCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRE36dLbS%2Fre4me5KtwDNw9%2FwCEuELZq4N0YWA%2BL2krf7Oqi7qYSduZvku9J7YIA%2B0b5j0R3nqp3J8eNHwbPNm1lwESp%2BXDs%2B%2FfHWVz%2BRD0v5%2FMtpOvkncC0Cyi%2F0Yv1u3Sh7o6CUvtV4DNytdms2Z0o%2FXtp87EhuiqE8MeVA0LyZfmNFfQod47olHLvJ6Fch4DFhu%2FOpCHVVHLMshND%2FNs5ZG7lB2wHHLmpNiQNBjWrF4zTZJeEi0bNvJrfub5mxczYsA3k12HmsteBVguiAbmQkGxh%2F2hT00ZZWo3aja984gYa8dLvRkLmRacJl11Kwp1wvaIB%2FO%2FBOaJhZK4i%2F5NZkb%2FyVDmvegCOA0WHGBMXbgp2Ub6zxbTICNs%2FGh%2Bw5g%2BJE7v95O3fqTYbTGVGaYhM7b5ffkp44bSnDufj8aEIuV2S%2FICCfsICUrsYRLR%2B5g6u8r8n7kLHCyc%2BYplCmNaTsh3BDMuujAbF4MND4oLIAB%2BJsHKj3IV6suP7GXGSQE0K86KWXq4q%2ButMb3J8Z0k%2FdZg69K1KBKjGZsC%2BFUGgrMWQI3fgw%2FjnfPNyiGEe65aRW1UXWnDACul6hM3KDdkXkeWechXgeAh%2BN8sFAkaOSPqX87R3vme77n6GR6FkmiLyoDBTlvlVcfcwssOj1AY6pgELed07aPj1IhzgmcSwTL28vScbklHIlmqyHO5Qi4Z4wRekR65mIZ86%2B2xFVtotVzq2teMB0X8%2Bbo7W%2BiWkEuZf3Kh3twOJlArIrxoYCovvW3cEMs9v%2BSA8hDlFWULS4O2pCVlbcytJ7cD6NN4dYVlGR9HLJMv8vGg6MQgikQqQsX%2BLX7Yx1oUh7qWpWST397nICB0CzE3ORCcmA9dhUF5cWiCKaXvm&X-Amz-Signature=2f4b500f16a719017da904caca65c89dfd4df7ffb6bcd72e394fb28833f0e7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE5QD66%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9kkk3wHO4KqEi5io8Va9QTDayHXmbGGKYjDE3SiPmAiBOUv6L%2FjcQYm8Cf4Ptd4hlVHpVy3HFaxO9DDx6aceozCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRE36dLbS%2Fre4me5KtwDNw9%2FwCEuELZq4N0YWA%2BL2krf7Oqi7qYSduZvku9J7YIA%2B0b5j0R3nqp3J8eNHwbPNm1lwESp%2BXDs%2B%2FfHWVz%2BRD0v5%2FMtpOvkncC0Cyi%2F0Yv1u3Sh7o6CUvtV4DNytdms2Z0o%2FXtp87EhuiqE8MeVA0LyZfmNFfQod47olHLvJ6Fch4DFhu%2FOpCHVVHLMshND%2FNs5ZG7lB2wHHLmpNiQNBjWrF4zTZJeEi0bNvJrfub5mxczYsA3k12HmsteBVguiAbmQkGxh%2F2hT00ZZWo3aja984gYa8dLvRkLmRacJl11Kwp1wvaIB%2FO%2FBOaJhZK4i%2F5NZkb%2FyVDmvegCOA0WHGBMXbgp2Ub6zxbTICNs%2FGh%2Bw5g%2BJE7v95O3fqTYbTGVGaYhM7b5ffkp44bSnDufj8aEIuV2S%2FICCfsICUrsYRLR%2B5g6u8r8n7kLHCyc%2BYplCmNaTsh3BDMuujAbF4MND4oLIAB%2BJsHKj3IV6suP7GXGSQE0K86KWXq4q%2ButMb3J8Z0k%2FdZg69K1KBKjGZsC%2BFUGgrMWQI3fgw%2FjnfPNyiGEe65aRW1UXWnDACul6hM3KDdkXkeWechXgeAh%2BN8sFAkaOSPqX87R3vme77n6GR6FkmiLyoDBTlvlVcfcwssOj1AY6pgELed07aPj1IhzgmcSwTL28vScbklHIlmqyHO5Qi4Z4wRekR65mIZ86%2B2xFVtotVzq2teMB0X8%2Bbo7W%2BiWkEuZf3Kh3twOJlArIrxoYCovvW3cEMs9v%2BSA8hDlFWULS4O2pCVlbcytJ7cD6NN4dYVlGR9HLJMv8vGg6MQgikQqQsX%2BLX7Yx1oUh7qWpWST397nICB0CzE3ORCcmA9dhUF5cWiCKaXvm&X-Amz-Signature=c2f377c5a3660a4fda0ff2bdbd6f968bb1ea31b26803a6ead17cd1ccc7530831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE5QD66%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9kkk3wHO4KqEi5io8Va9QTDayHXmbGGKYjDE3SiPmAiBOUv6L%2FjcQYm8Cf4Ptd4hlVHpVy3HFaxO9DDx6aceozCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRE36dLbS%2Fre4me5KtwDNw9%2FwCEuELZq4N0YWA%2BL2krf7Oqi7qYSduZvku9J7YIA%2B0b5j0R3nqp3J8eNHwbPNm1lwESp%2BXDs%2B%2FfHWVz%2BRD0v5%2FMtpOvkncC0Cyi%2F0Yv1u3Sh7o6CUvtV4DNytdms2Z0o%2FXtp87EhuiqE8MeVA0LyZfmNFfQod47olHLvJ6Fch4DFhu%2FOpCHVVHLMshND%2FNs5ZG7lB2wHHLmpNiQNBjWrF4zTZJeEi0bNvJrfub5mxczYsA3k12HmsteBVguiAbmQkGxh%2F2hT00ZZWo3aja984gYa8dLvRkLmRacJl11Kwp1wvaIB%2FO%2FBOaJhZK4i%2F5NZkb%2FyVDmvegCOA0WHGBMXbgp2Ub6zxbTICNs%2FGh%2Bw5g%2BJE7v95O3fqTYbTGVGaYhM7b5ffkp44bSnDufj8aEIuV2S%2FICCfsICUrsYRLR%2B5g6u8r8n7kLHCyc%2BYplCmNaTsh3BDMuujAbF4MND4oLIAB%2BJsHKj3IV6suP7GXGSQE0K86KWXq4q%2ButMb3J8Z0k%2FdZg69K1KBKjGZsC%2BFUGgrMWQI3fgw%2FjnfPNyiGEe65aRW1UXWnDACul6hM3KDdkXkeWechXgeAh%2BN8sFAkaOSPqX87R3vme77n6GR6FkmiLyoDBTlvlVcfcwssOj1AY6pgELed07aPj1IhzgmcSwTL28vScbklHIlmqyHO5Qi4Z4wRekR65mIZ86%2B2xFVtotVzq2teMB0X8%2Bbo7W%2BiWkEuZf3Kh3twOJlArIrxoYCovvW3cEMs9v%2BSA8hDlFWULS4O2pCVlbcytJ7cD6NN4dYVlGR9HLJMv8vGg6MQgikQqQsX%2BLX7Yx1oUh7qWpWST397nICB0CzE3ORCcmA9dhUF5cWiCKaXvm&X-Amz-Signature=561f7a8670ae49af408a6c3798549689254de88dc218165e280fbc1e8a1dc69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE5QD66%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9kkk3wHO4KqEi5io8Va9QTDayHXmbGGKYjDE3SiPmAiBOUv6L%2FjcQYm8Cf4Ptd4hlVHpVy3HFaxO9DDx6aceozCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRE36dLbS%2Fre4me5KtwDNw9%2FwCEuELZq4N0YWA%2BL2krf7Oqi7qYSduZvku9J7YIA%2B0b5j0R3nqp3J8eNHwbPNm1lwESp%2BXDs%2B%2FfHWVz%2BRD0v5%2FMtpOvkncC0Cyi%2F0Yv1u3Sh7o6CUvtV4DNytdms2Z0o%2FXtp87EhuiqE8MeVA0LyZfmNFfQod47olHLvJ6Fch4DFhu%2FOpCHVVHLMshND%2FNs5ZG7lB2wHHLmpNiQNBjWrF4zTZJeEi0bNvJrfub5mxczYsA3k12HmsteBVguiAbmQkGxh%2F2hT00ZZWo3aja984gYa8dLvRkLmRacJl11Kwp1wvaIB%2FO%2FBOaJhZK4i%2F5NZkb%2FyVDmvegCOA0WHGBMXbgp2Ub6zxbTICNs%2FGh%2Bw5g%2BJE7v95O3fqTYbTGVGaYhM7b5ffkp44bSnDufj8aEIuV2S%2FICCfsICUrsYRLR%2B5g6u8r8n7kLHCyc%2BYplCmNaTsh3BDMuujAbF4MND4oLIAB%2BJsHKj3IV6suP7GXGSQE0K86KWXq4q%2ButMb3J8Z0k%2FdZg69K1KBKjGZsC%2BFUGgrMWQI3fgw%2FjnfPNyiGEe65aRW1UXWnDACul6hM3KDdkXkeWechXgeAh%2BN8sFAkaOSPqX87R3vme77n6GR6FkmiLyoDBTlvlVcfcwssOj1AY6pgELed07aPj1IhzgmcSwTL28vScbklHIlmqyHO5Qi4Z4wRekR65mIZ86%2B2xFVtotVzq2teMB0X8%2Bbo7W%2BiWkEuZf3Kh3twOJlArIrxoYCovvW3cEMs9v%2BSA8hDlFWULS4O2pCVlbcytJ7cD6NN4dYVlGR9HLJMv8vGg6MQgikQqQsX%2BLX7Yx1oUh7qWpWST397nICB0CzE3ORCcmA9dhUF5cWiCKaXvm&X-Amz-Signature=d5358a765f187e7f8722d8fe0f1259c25b9ebafc5394abe80c7255dc8347e438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE5QD66%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9kkk3wHO4KqEi5io8Va9QTDayHXmbGGKYjDE3SiPmAiBOUv6L%2FjcQYm8Cf4Ptd4hlVHpVy3HFaxO9DDx6aceozCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRE36dLbS%2Fre4me5KtwDNw9%2FwCEuELZq4N0YWA%2BL2krf7Oqi7qYSduZvku9J7YIA%2B0b5j0R3nqp3J8eNHwbPNm1lwESp%2BXDs%2B%2FfHWVz%2BRD0v5%2FMtpOvkncC0Cyi%2F0Yv1u3Sh7o6CUvtV4DNytdms2Z0o%2FXtp87EhuiqE8MeVA0LyZfmNFfQod47olHLvJ6Fch4DFhu%2FOpCHVVHLMshND%2FNs5ZG7lB2wHHLmpNiQNBjWrF4zTZJeEi0bNvJrfub5mxczYsA3k12HmsteBVguiAbmQkGxh%2F2hT00ZZWo3aja984gYa8dLvRkLmRacJl11Kwp1wvaIB%2FO%2FBOaJhZK4i%2F5NZkb%2FyVDmvegCOA0WHGBMXbgp2Ub6zxbTICNs%2FGh%2Bw5g%2BJE7v95O3fqTYbTGVGaYhM7b5ffkp44bSnDufj8aEIuV2S%2FICCfsICUrsYRLR%2B5g6u8r8n7kLHCyc%2BYplCmNaTsh3BDMuujAbF4MND4oLIAB%2BJsHKj3IV6suP7GXGSQE0K86KWXq4q%2ButMb3J8Z0k%2FdZg69K1KBKjGZsC%2BFUGgrMWQI3fgw%2FjnfPNyiGEe65aRW1UXWnDACul6hM3KDdkXkeWechXgeAh%2BN8sFAkaOSPqX87R3vme77n6GR6FkmiLyoDBTlvlVcfcwssOj1AY6pgELed07aPj1IhzgmcSwTL28vScbklHIlmqyHO5Qi4Z4wRekR65mIZ86%2B2xFVtotVzq2teMB0X8%2Bbo7W%2BiWkEuZf3Kh3twOJlArIrxoYCovvW3cEMs9v%2BSA8hDlFWULS4O2pCVlbcytJ7cD6NN4dYVlGR9HLJMv8vGg6MQgikQqQsX%2BLX7Yx1oUh7qWpWST397nICB0CzE3ORCcmA9dhUF5cWiCKaXvm&X-Amz-Signature=bde063e106095504aa6529dc5e88375afd1ba04b752cfa73707eec0f0403f19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE5QD66%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9kkk3wHO4KqEi5io8Va9QTDayHXmbGGKYjDE3SiPmAiBOUv6L%2FjcQYm8Cf4Ptd4hlVHpVy3HFaxO9DDx6aceozCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRE36dLbS%2Fre4me5KtwDNw9%2FwCEuELZq4N0YWA%2BL2krf7Oqi7qYSduZvku9J7YIA%2B0b5j0R3nqp3J8eNHwbPNm1lwESp%2BXDs%2B%2FfHWVz%2BRD0v5%2FMtpOvkncC0Cyi%2F0Yv1u3Sh7o6CUvtV4DNytdms2Z0o%2FXtp87EhuiqE8MeVA0LyZfmNFfQod47olHLvJ6Fch4DFhu%2FOpCHVVHLMshND%2FNs5ZG7lB2wHHLmpNiQNBjWrF4zTZJeEi0bNvJrfub5mxczYsA3k12HmsteBVguiAbmQkGxh%2F2hT00ZZWo3aja984gYa8dLvRkLmRacJl11Kwp1wvaIB%2FO%2FBOaJhZK4i%2F5NZkb%2FyVDmvegCOA0WHGBMXbgp2Ub6zxbTICNs%2FGh%2Bw5g%2BJE7v95O3fqTYbTGVGaYhM7b5ffkp44bSnDufj8aEIuV2S%2FICCfsICUrsYRLR%2B5g6u8r8n7kLHCyc%2BYplCmNaTsh3BDMuujAbF4MND4oLIAB%2BJsHKj3IV6suP7GXGSQE0K86KWXq4q%2ButMb3J8Z0k%2FdZg69K1KBKjGZsC%2BFUGgrMWQI3fgw%2FjnfPNyiGEe65aRW1UXWnDACul6hM3KDdkXkeWechXgeAh%2BN8sFAkaOSPqX87R3vme77n6GR6FkmiLyoDBTlvlVcfcwssOj1AY6pgELed07aPj1IhzgmcSwTL28vScbklHIlmqyHO5Qi4Z4wRekR65mIZ86%2B2xFVtotVzq2teMB0X8%2Bbo7W%2BiWkEuZf3Kh3twOJlArIrxoYCovvW3cEMs9v%2BSA8hDlFWULS4O2pCVlbcytJ7cD6NN4dYVlGR9HLJMv8vGg6MQgikQqQsX%2BLX7Yx1oUh7qWpWST397nICB0CzE3ORCcmA9dhUF5cWiCKaXvm&X-Amz-Signature=7b28fad0c2009f53a11fcb4d939b1b366f215863bc1bfb3e037dd09e44ad4845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE5QD66%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9kkk3wHO4KqEi5io8Va9QTDayHXmbGGKYjDE3SiPmAiBOUv6L%2FjcQYm8Cf4Ptd4hlVHpVy3HFaxO9DDx6aceozCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FRE36dLbS%2Fre4me5KtwDNw9%2FwCEuELZq4N0YWA%2BL2krf7Oqi7qYSduZvku9J7YIA%2B0b5j0R3nqp3J8eNHwbPNm1lwESp%2BXDs%2B%2FfHWVz%2BRD0v5%2FMtpOvkncC0Cyi%2F0Yv1u3Sh7o6CUvtV4DNytdms2Z0o%2FXtp87EhuiqE8MeVA0LyZfmNFfQod47olHLvJ6Fch4DFhu%2FOpCHVVHLMshND%2FNs5ZG7lB2wHHLmpNiQNBjWrF4zTZJeEi0bNvJrfub5mxczYsA3k12HmsteBVguiAbmQkGxh%2F2hT00ZZWo3aja984gYa8dLvRkLmRacJl11Kwp1wvaIB%2FO%2FBOaJhZK4i%2F5NZkb%2FyVDmvegCOA0WHGBMXbgp2Ub6zxbTICNs%2FGh%2Bw5g%2BJE7v95O3fqTYbTGVGaYhM7b5ffkp44bSnDufj8aEIuV2S%2FICCfsICUrsYRLR%2B5g6u8r8n7kLHCyc%2BYplCmNaTsh3BDMuujAbF4MND4oLIAB%2BJsHKj3IV6suP7GXGSQE0K86KWXq4q%2ButMb3J8Z0k%2FdZg69K1KBKjGZsC%2BFUGgrMWQI3fgw%2FjnfPNyiGEe65aRW1UXWnDACul6hM3KDdkXkeWechXgeAh%2BN8sFAkaOSPqX87R3vme77n6GR6FkmiLyoDBTlvlVcfcwssOj1AY6pgELed07aPj1IhzgmcSwTL28vScbklHIlmqyHO5Qi4Z4wRekR65mIZ86%2B2xFVtotVzq2teMB0X8%2Bbo7W%2BiWkEuZf3Kh3twOJlArIrxoYCovvW3cEMs9v%2BSA8hDlFWULS4O2pCVlbcytJ7cD6NN4dYVlGR9HLJMv8vGg6MQgikQqQsX%2BLX7Yx1oUh7qWpWST397nICB0CzE3ORCcmA9dhUF5cWiCKaXvm&X-Amz-Signature=2f4b500f16a719017da904caca65c89dfd4df7ffb6bcd72e394fb28833f0e7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
