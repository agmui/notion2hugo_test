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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5BFL7TA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDqfmvkicbKyceICkgi6ADnMDbw0iPzyLV0P4v4Mzs9ngIgWZoGYNL6dx%2BKLBGiCTYq81WRxIz16VZVnXVZ3oW4Yn0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7ewqoM5e58U2L3ryrcA6rZtngh2lufGQcWlmCYF5hdB6B46vCDc3DEOFV3rqUFLPws4Fguq7K%2BMe1uwHMJZjHMlLsuLpsj95UTdzP6KzPtd5v5hvIABZVO5Tsc2n3zdzqpNmQNgK2WJQX6pxyfmMqCep6C9RzElfWNvcAWgK%2FG07xIW9c%2BB3IgnCzcq5BeROr7UhGCEY%2FE2Q0Y%2BtRyGRdBC1vGRTVVevf6iXGpfYXKKPlaH%2BoefMbxEAwRp5qOY%2FRBbjjBTCkjkkS1IKH7cD2k7vzkEUsCzeR1RjLov%2F5%2B%2FmmvfAQGexA%2FwFNcKDhNar2T18KXSQndNRALvu%2Bt3j2qznsJtzQw4hgmanEUWOFW2KOfqtwXP363nok%2Bug8CzQjclti46IUMDoXhERBo1UuiUW6ajWF25AOBKUxOmAIbOHN43QvDx8U%2BU8uu8NhdB4SIGcANx5DIkciNeAwn74tBzdbXof%2FMEb864EBw2k8HgM7jFzmeOqka%2BDcOOQ8CvwtZoSzwVPL9k1Xu%2B0yAOAkYPbncFxGM8Lx%2Bthu6Zyb9QAkeQRR2WDAwzIgvu8tv1U18wYoTC8ipNjpiPO8i0iKhTOggEpuMDTHPLSRR%2BVgd9qVpz3LYABWtqik7aq6AAsnP8vnLBmz0%2FaunMK%2Fq2MQGOqUBbe%2BuyHviFQWjONz%2B0NfVGZzb6RgTUBQAnWlxEcMY95y7gKl2H7VT4pBW0J8rr2icmhV6yaSC3%2F0O0PnHkHdFH7ouYxKT2p5T%2FebLQpS4eOs%2FvgG9whFH%2FsZ5WM59V0t4YSCIK6qLtjCsgyJ6BMbtjL5W6uSw3sz7fe%2Bfv%2FQT6zNNhP0JVDoFAKV%2FcfjlJEM%2FfbOEe47aUqBqBhLcbxYC6wArk1cw&X-Amz-Signature=de9f3cea11d39c5d7eae8ac3e3f1cbf98fd2f4b53081c88d8faa2ecc674fc5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOQIFFH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDaH73ydhk6BkBEKyb1Am89ymL9pZj7ldZRcGMHaijgbwIgFkpkkiEXPOn1FYOIl%2BVDzOvfVAvnkXNCuvm7FgQEH5sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLV5iMGuXswHO0%2F9CrcA8P4kZ4ZRIU2ZpDs%2FZKwRJjvM0ipIQio1vMq3Pql%2Bterl%2BbvjtpvH0HRo4BTqpTnwO1Y%2F0Pc9ROtyPcLcsYz6rMTAtOF8SYe%2B4nmEmNYUrYjNrFHtekc2HUYHmjbZE7aV5cds3C0Eybcrt%2FN3GbCQJKmbH%2ByNTWjqfFOAhi999%2Fqm3BI30Bz9h12N0vxzY6UQ2GcVTBOYPrcIofPHTgaVfzaOhv0Tx5yreEVzAPGB5zi6tTuMd8tX5qmWyACk9jlSwfhpp0leSD5qR3sl6U8OKRm6iEMLCY8nfRoGh8Bx6T0dBg0E85CbUyWOEZ3KfoE8Xpr5sVHR2rvdnUNaHXOtctGLVKE4ej7IGbLEyFi%2BP768H0LQlI%2FP3G8P%2ByzTOwvi46GyV%2BMiaisFTjd8aAbm3Ls%2BGGs5bnzcgiZNM8aHrjIZU7zdkR7M8PbT1z5rtnPzR0x%2FjXeZPWmV1CQRldtOmJoFBWua3z58lkbIXSKs0XCL46cQfwowFS3p4ef6jQsVtmfdIB34Jf3l9K%2Fb6MFQg48NI4pXg7uGJ4tZfHluAdEiWqk4g1oo7zDopyEM%2FSX%2BZkD4puN21I9qJ6lqAmX2T0ieaVKE9lUMVg0QVqI3e4LFtXmtD8R%2BYov70zGMJzq2MQGOqUBVejdyYQkZrhj2Iz14vWqBUQaNphZmgpP8T35lYba1f9lHAWbro3bf31iTT8Wl%2B9GFTF3Pmysd52cerVksMwwEIZ9GXXvxpZ5%2BKwpNzVQhtT9bVONQBhqhz%2BO%2BY2IanyFAYL1bJ5zvWZ8jsAK6AVAbr6ChC9fz83TrNxRL0YpmI9ZZvuHdqWzy%2FaC4cbXLNP6bTItZZ3vI155fs8s0Yq1CRIyHtz2&X-Amz-Signature=9611adf5c452f1b64ebbca9422243c4d01c90c1f601c04b1eeb811e477e3a6a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOQIFFH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDaH73ydhk6BkBEKyb1Am89ymL9pZj7ldZRcGMHaijgbwIgFkpkkiEXPOn1FYOIl%2BVDzOvfVAvnkXNCuvm7FgQEH5sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLV5iMGuXswHO0%2F9CrcA8P4kZ4ZRIU2ZpDs%2FZKwRJjvM0ipIQio1vMq3Pql%2Bterl%2BbvjtpvH0HRo4BTqpTnwO1Y%2F0Pc9ROtyPcLcsYz6rMTAtOF8SYe%2B4nmEmNYUrYjNrFHtekc2HUYHmjbZE7aV5cds3C0Eybcrt%2FN3GbCQJKmbH%2ByNTWjqfFOAhi999%2Fqm3BI30Bz9h12N0vxzY6UQ2GcVTBOYPrcIofPHTgaVfzaOhv0Tx5yreEVzAPGB5zi6tTuMd8tX5qmWyACk9jlSwfhpp0leSD5qR3sl6U8OKRm6iEMLCY8nfRoGh8Bx6T0dBg0E85CbUyWOEZ3KfoE8Xpr5sVHR2rvdnUNaHXOtctGLVKE4ej7IGbLEyFi%2BP768H0LQlI%2FP3G8P%2ByzTOwvi46GyV%2BMiaisFTjd8aAbm3Ls%2BGGs5bnzcgiZNM8aHrjIZU7zdkR7M8PbT1z5rtnPzR0x%2FjXeZPWmV1CQRldtOmJoFBWua3z58lkbIXSKs0XCL46cQfwowFS3p4ef6jQsVtmfdIB34Jf3l9K%2Fb6MFQg48NI4pXg7uGJ4tZfHluAdEiWqk4g1oo7zDopyEM%2FSX%2BZkD4puN21I9qJ6lqAmX2T0ieaVKE9lUMVg0QVqI3e4LFtXmtD8R%2BYov70zGMJzq2MQGOqUBVejdyYQkZrhj2Iz14vWqBUQaNphZmgpP8T35lYba1f9lHAWbro3bf31iTT8Wl%2B9GFTF3Pmysd52cerVksMwwEIZ9GXXvxpZ5%2BKwpNzVQhtT9bVONQBhqhz%2BO%2BY2IanyFAYL1bJ5zvWZ8jsAK6AVAbr6ChC9fz83TrNxRL0YpmI9ZZvuHdqWzy%2FaC4cbXLNP6bTItZZ3vI155fs8s0Yq1CRIyHtz2&X-Amz-Signature=ebd069022dd3bf908695022c31c9a1386697c349a143931d0bc4a40bf4eb82d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOQIFFH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDaH73ydhk6BkBEKyb1Am89ymL9pZj7ldZRcGMHaijgbwIgFkpkkiEXPOn1FYOIl%2BVDzOvfVAvnkXNCuvm7FgQEH5sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLV5iMGuXswHO0%2F9CrcA8P4kZ4ZRIU2ZpDs%2FZKwRJjvM0ipIQio1vMq3Pql%2Bterl%2BbvjtpvH0HRo4BTqpTnwO1Y%2F0Pc9ROtyPcLcsYz6rMTAtOF8SYe%2B4nmEmNYUrYjNrFHtekc2HUYHmjbZE7aV5cds3C0Eybcrt%2FN3GbCQJKmbH%2ByNTWjqfFOAhi999%2Fqm3BI30Bz9h12N0vxzY6UQ2GcVTBOYPrcIofPHTgaVfzaOhv0Tx5yreEVzAPGB5zi6tTuMd8tX5qmWyACk9jlSwfhpp0leSD5qR3sl6U8OKRm6iEMLCY8nfRoGh8Bx6T0dBg0E85CbUyWOEZ3KfoE8Xpr5sVHR2rvdnUNaHXOtctGLVKE4ej7IGbLEyFi%2BP768H0LQlI%2FP3G8P%2ByzTOwvi46GyV%2BMiaisFTjd8aAbm3Ls%2BGGs5bnzcgiZNM8aHrjIZU7zdkR7M8PbT1z5rtnPzR0x%2FjXeZPWmV1CQRldtOmJoFBWua3z58lkbIXSKs0XCL46cQfwowFS3p4ef6jQsVtmfdIB34Jf3l9K%2Fb6MFQg48NI4pXg7uGJ4tZfHluAdEiWqk4g1oo7zDopyEM%2FSX%2BZkD4puN21I9qJ6lqAmX2T0ieaVKE9lUMVg0QVqI3e4LFtXmtD8R%2BYov70zGMJzq2MQGOqUBVejdyYQkZrhj2Iz14vWqBUQaNphZmgpP8T35lYba1f9lHAWbro3bf31iTT8Wl%2B9GFTF3Pmysd52cerVksMwwEIZ9GXXvxpZ5%2BKwpNzVQhtT9bVONQBhqhz%2BO%2BY2IanyFAYL1bJ5zvWZ8jsAK6AVAbr6ChC9fz83TrNxRL0YpmI9ZZvuHdqWzy%2FaC4cbXLNP6bTItZZ3vI155fs8s0Yq1CRIyHtz2&X-Amz-Signature=bb4f6488958c11ef20bb80f0fa4f50e5df67da82af366a44a78f0eca75725935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOQIFFH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDaH73ydhk6BkBEKyb1Am89ymL9pZj7ldZRcGMHaijgbwIgFkpkkiEXPOn1FYOIl%2BVDzOvfVAvnkXNCuvm7FgQEH5sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLV5iMGuXswHO0%2F9CrcA8P4kZ4ZRIU2ZpDs%2FZKwRJjvM0ipIQio1vMq3Pql%2Bterl%2BbvjtpvH0HRo4BTqpTnwO1Y%2F0Pc9ROtyPcLcsYz6rMTAtOF8SYe%2B4nmEmNYUrYjNrFHtekc2HUYHmjbZE7aV5cds3C0Eybcrt%2FN3GbCQJKmbH%2ByNTWjqfFOAhi999%2Fqm3BI30Bz9h12N0vxzY6UQ2GcVTBOYPrcIofPHTgaVfzaOhv0Tx5yreEVzAPGB5zi6tTuMd8tX5qmWyACk9jlSwfhpp0leSD5qR3sl6U8OKRm6iEMLCY8nfRoGh8Bx6T0dBg0E85CbUyWOEZ3KfoE8Xpr5sVHR2rvdnUNaHXOtctGLVKE4ej7IGbLEyFi%2BP768H0LQlI%2FP3G8P%2ByzTOwvi46GyV%2BMiaisFTjd8aAbm3Ls%2BGGs5bnzcgiZNM8aHrjIZU7zdkR7M8PbT1z5rtnPzR0x%2FjXeZPWmV1CQRldtOmJoFBWua3z58lkbIXSKs0XCL46cQfwowFS3p4ef6jQsVtmfdIB34Jf3l9K%2Fb6MFQg48NI4pXg7uGJ4tZfHluAdEiWqk4g1oo7zDopyEM%2FSX%2BZkD4puN21I9qJ6lqAmX2T0ieaVKE9lUMVg0QVqI3e4LFtXmtD8R%2BYov70zGMJzq2MQGOqUBVejdyYQkZrhj2Iz14vWqBUQaNphZmgpP8T35lYba1f9lHAWbro3bf31iTT8Wl%2B9GFTF3Pmysd52cerVksMwwEIZ9GXXvxpZ5%2BKwpNzVQhtT9bVONQBhqhz%2BO%2BY2IanyFAYL1bJ5zvWZ8jsAK6AVAbr6ChC9fz83TrNxRL0YpmI9ZZvuHdqWzy%2FaC4cbXLNP6bTItZZ3vI155fs8s0Yq1CRIyHtz2&X-Amz-Signature=462856b0331e89369fffc709d7943d98245a392dba8d1dce7df81f1cb012226e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOQIFFH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDaH73ydhk6BkBEKyb1Am89ymL9pZj7ldZRcGMHaijgbwIgFkpkkiEXPOn1FYOIl%2BVDzOvfVAvnkXNCuvm7FgQEH5sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLV5iMGuXswHO0%2F9CrcA8P4kZ4ZRIU2ZpDs%2FZKwRJjvM0ipIQio1vMq3Pql%2Bterl%2BbvjtpvH0HRo4BTqpTnwO1Y%2F0Pc9ROtyPcLcsYz6rMTAtOF8SYe%2B4nmEmNYUrYjNrFHtekc2HUYHmjbZE7aV5cds3C0Eybcrt%2FN3GbCQJKmbH%2ByNTWjqfFOAhi999%2Fqm3BI30Bz9h12N0vxzY6UQ2GcVTBOYPrcIofPHTgaVfzaOhv0Tx5yreEVzAPGB5zi6tTuMd8tX5qmWyACk9jlSwfhpp0leSD5qR3sl6U8OKRm6iEMLCY8nfRoGh8Bx6T0dBg0E85CbUyWOEZ3KfoE8Xpr5sVHR2rvdnUNaHXOtctGLVKE4ej7IGbLEyFi%2BP768H0LQlI%2FP3G8P%2ByzTOwvi46GyV%2BMiaisFTjd8aAbm3Ls%2BGGs5bnzcgiZNM8aHrjIZU7zdkR7M8PbT1z5rtnPzR0x%2FjXeZPWmV1CQRldtOmJoFBWua3z58lkbIXSKs0XCL46cQfwowFS3p4ef6jQsVtmfdIB34Jf3l9K%2Fb6MFQg48NI4pXg7uGJ4tZfHluAdEiWqk4g1oo7zDopyEM%2FSX%2BZkD4puN21I9qJ6lqAmX2T0ieaVKE9lUMVg0QVqI3e4LFtXmtD8R%2BYov70zGMJzq2MQGOqUBVejdyYQkZrhj2Iz14vWqBUQaNphZmgpP8T35lYba1f9lHAWbro3bf31iTT8Wl%2B9GFTF3Pmysd52cerVksMwwEIZ9GXXvxpZ5%2BKwpNzVQhtT9bVONQBhqhz%2BO%2BY2IanyFAYL1bJ5zvWZ8jsAK6AVAbr6ChC9fz83TrNxRL0YpmI9ZZvuHdqWzy%2FaC4cbXLNP6bTItZZ3vI155fs8s0Yq1CRIyHtz2&X-Amz-Signature=0769878e8af974ea0664979497dbc53995b3dea5765bbce6064a51763231a41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOQIFFH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDaH73ydhk6BkBEKyb1Am89ymL9pZj7ldZRcGMHaijgbwIgFkpkkiEXPOn1FYOIl%2BVDzOvfVAvnkXNCuvm7FgQEH5sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLV5iMGuXswHO0%2F9CrcA8P4kZ4ZRIU2ZpDs%2FZKwRJjvM0ipIQio1vMq3Pql%2Bterl%2BbvjtpvH0HRo4BTqpTnwO1Y%2F0Pc9ROtyPcLcsYz6rMTAtOF8SYe%2B4nmEmNYUrYjNrFHtekc2HUYHmjbZE7aV5cds3C0Eybcrt%2FN3GbCQJKmbH%2ByNTWjqfFOAhi999%2Fqm3BI30Bz9h12N0vxzY6UQ2GcVTBOYPrcIofPHTgaVfzaOhv0Tx5yreEVzAPGB5zi6tTuMd8tX5qmWyACk9jlSwfhpp0leSD5qR3sl6U8OKRm6iEMLCY8nfRoGh8Bx6T0dBg0E85CbUyWOEZ3KfoE8Xpr5sVHR2rvdnUNaHXOtctGLVKE4ej7IGbLEyFi%2BP768H0LQlI%2FP3G8P%2ByzTOwvi46GyV%2BMiaisFTjd8aAbm3Ls%2BGGs5bnzcgiZNM8aHrjIZU7zdkR7M8PbT1z5rtnPzR0x%2FjXeZPWmV1CQRldtOmJoFBWua3z58lkbIXSKs0XCL46cQfwowFS3p4ef6jQsVtmfdIB34Jf3l9K%2Fb6MFQg48NI4pXg7uGJ4tZfHluAdEiWqk4g1oo7zDopyEM%2FSX%2BZkD4puN21I9qJ6lqAmX2T0ieaVKE9lUMVg0QVqI3e4LFtXmtD8R%2BYov70zGMJzq2MQGOqUBVejdyYQkZrhj2Iz14vWqBUQaNphZmgpP8T35lYba1f9lHAWbro3bf31iTT8Wl%2B9GFTF3Pmysd52cerVksMwwEIZ9GXXvxpZ5%2BKwpNzVQhtT9bVONQBhqhz%2BO%2BY2IanyFAYL1bJ5zvWZ8jsAK6AVAbr6ChC9fz83TrNxRL0YpmI9ZZvuHdqWzy%2FaC4cbXLNP6bTItZZ3vI155fs8s0Yq1CRIyHtz2&X-Amz-Signature=f1373a4c351fa0b54345c5ca63248dd42d13be15ee42093f9f28f053e00a6490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOQIFFH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDaH73ydhk6BkBEKyb1Am89ymL9pZj7ldZRcGMHaijgbwIgFkpkkiEXPOn1FYOIl%2BVDzOvfVAvnkXNCuvm7FgQEH5sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLV5iMGuXswHO0%2F9CrcA8P4kZ4ZRIU2ZpDs%2FZKwRJjvM0ipIQio1vMq3Pql%2Bterl%2BbvjtpvH0HRo4BTqpTnwO1Y%2F0Pc9ROtyPcLcsYz6rMTAtOF8SYe%2B4nmEmNYUrYjNrFHtekc2HUYHmjbZE7aV5cds3C0Eybcrt%2FN3GbCQJKmbH%2ByNTWjqfFOAhi999%2Fqm3BI30Bz9h12N0vxzY6UQ2GcVTBOYPrcIofPHTgaVfzaOhv0Tx5yreEVzAPGB5zi6tTuMd8tX5qmWyACk9jlSwfhpp0leSD5qR3sl6U8OKRm6iEMLCY8nfRoGh8Bx6T0dBg0E85CbUyWOEZ3KfoE8Xpr5sVHR2rvdnUNaHXOtctGLVKE4ej7IGbLEyFi%2BP768H0LQlI%2FP3G8P%2ByzTOwvi46GyV%2BMiaisFTjd8aAbm3Ls%2BGGs5bnzcgiZNM8aHrjIZU7zdkR7M8PbT1z5rtnPzR0x%2FjXeZPWmV1CQRldtOmJoFBWua3z58lkbIXSKs0XCL46cQfwowFS3p4ef6jQsVtmfdIB34Jf3l9K%2Fb6MFQg48NI4pXg7uGJ4tZfHluAdEiWqk4g1oo7zDopyEM%2FSX%2BZkD4puN21I9qJ6lqAmX2T0ieaVKE9lUMVg0QVqI3e4LFtXmtD8R%2BYov70zGMJzq2MQGOqUBVejdyYQkZrhj2Iz14vWqBUQaNphZmgpP8T35lYba1f9lHAWbro3bf31iTT8Wl%2B9GFTF3Pmysd52cerVksMwwEIZ9GXXvxpZ5%2BKwpNzVQhtT9bVONQBhqhz%2BO%2BY2IanyFAYL1bJ5zvWZ8jsAK6AVAbr6ChC9fz83TrNxRL0YpmI9ZZvuHdqWzy%2FaC4cbXLNP6bTItZZ3vI155fs8s0Yq1CRIyHtz2&X-Amz-Signature=3d603b5c0eed6e7fe471182362fc492a90a29c9c6daf992fcfcd5b44fcb86c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOQIFFH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDaH73ydhk6BkBEKyb1Am89ymL9pZj7ldZRcGMHaijgbwIgFkpkkiEXPOn1FYOIl%2BVDzOvfVAvnkXNCuvm7FgQEH5sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLV5iMGuXswHO0%2F9CrcA8P4kZ4ZRIU2ZpDs%2FZKwRJjvM0ipIQio1vMq3Pql%2Bterl%2BbvjtpvH0HRo4BTqpTnwO1Y%2F0Pc9ROtyPcLcsYz6rMTAtOF8SYe%2B4nmEmNYUrYjNrFHtekc2HUYHmjbZE7aV5cds3C0Eybcrt%2FN3GbCQJKmbH%2ByNTWjqfFOAhi999%2Fqm3BI30Bz9h12N0vxzY6UQ2GcVTBOYPrcIofPHTgaVfzaOhv0Tx5yreEVzAPGB5zi6tTuMd8tX5qmWyACk9jlSwfhpp0leSD5qR3sl6U8OKRm6iEMLCY8nfRoGh8Bx6T0dBg0E85CbUyWOEZ3KfoE8Xpr5sVHR2rvdnUNaHXOtctGLVKE4ej7IGbLEyFi%2BP768H0LQlI%2FP3G8P%2ByzTOwvi46GyV%2BMiaisFTjd8aAbm3Ls%2BGGs5bnzcgiZNM8aHrjIZU7zdkR7M8PbT1z5rtnPzR0x%2FjXeZPWmV1CQRldtOmJoFBWua3z58lkbIXSKs0XCL46cQfwowFS3p4ef6jQsVtmfdIB34Jf3l9K%2Fb6MFQg48NI4pXg7uGJ4tZfHluAdEiWqk4g1oo7zDopyEM%2FSX%2BZkD4puN21I9qJ6lqAmX2T0ieaVKE9lUMVg0QVqI3e4LFtXmtD8R%2BYov70zGMJzq2MQGOqUBVejdyYQkZrhj2Iz14vWqBUQaNphZmgpP8T35lYba1f9lHAWbro3bf31iTT8Wl%2B9GFTF3Pmysd52cerVksMwwEIZ9GXXvxpZ5%2BKwpNzVQhtT9bVONQBhqhz%2BO%2BY2IanyFAYL1bJ5zvWZ8jsAK6AVAbr6ChC9fz83TrNxRL0YpmI9ZZvuHdqWzy%2FaC4cbXLNP6bTItZZ3vI155fs8s0Yq1CRIyHtz2&X-Amz-Signature=1e801d04481d916c6c09febcc9b2377e6fddfc1138cf19a12658a63358ef62b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOQIFFH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDaH73ydhk6BkBEKyb1Am89ymL9pZj7ldZRcGMHaijgbwIgFkpkkiEXPOn1FYOIl%2BVDzOvfVAvnkXNCuvm7FgQEH5sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLV5iMGuXswHO0%2F9CrcA8P4kZ4ZRIU2ZpDs%2FZKwRJjvM0ipIQio1vMq3Pql%2Bterl%2BbvjtpvH0HRo4BTqpTnwO1Y%2F0Pc9ROtyPcLcsYz6rMTAtOF8SYe%2B4nmEmNYUrYjNrFHtekc2HUYHmjbZE7aV5cds3C0Eybcrt%2FN3GbCQJKmbH%2ByNTWjqfFOAhi999%2Fqm3BI30Bz9h12N0vxzY6UQ2GcVTBOYPrcIofPHTgaVfzaOhv0Tx5yreEVzAPGB5zi6tTuMd8tX5qmWyACk9jlSwfhpp0leSD5qR3sl6U8OKRm6iEMLCY8nfRoGh8Bx6T0dBg0E85CbUyWOEZ3KfoE8Xpr5sVHR2rvdnUNaHXOtctGLVKE4ej7IGbLEyFi%2BP768H0LQlI%2FP3G8P%2ByzTOwvi46GyV%2BMiaisFTjd8aAbm3Ls%2BGGs5bnzcgiZNM8aHrjIZU7zdkR7M8PbT1z5rtnPzR0x%2FjXeZPWmV1CQRldtOmJoFBWua3z58lkbIXSKs0XCL46cQfwowFS3p4ef6jQsVtmfdIB34Jf3l9K%2Fb6MFQg48NI4pXg7uGJ4tZfHluAdEiWqk4g1oo7zDopyEM%2FSX%2BZkD4puN21I9qJ6lqAmX2T0ieaVKE9lUMVg0QVqI3e4LFtXmtD8R%2BYov70zGMJzq2MQGOqUBVejdyYQkZrhj2Iz14vWqBUQaNphZmgpP8T35lYba1f9lHAWbro3bf31iTT8Wl%2B9GFTF3Pmysd52cerVksMwwEIZ9GXXvxpZ5%2BKwpNzVQhtT9bVONQBhqhz%2BO%2BY2IanyFAYL1bJ5zvWZ8jsAK6AVAbr6ChC9fz83TrNxRL0YpmI9ZZvuHdqWzy%2FaC4cbXLNP6bTItZZ3vI155fs8s0Yq1CRIyHtz2&X-Amz-Signature=4445fb5cb97038a2fac956e24d705839aa92de7621d22591e32463fd03e890b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOQIFFH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDaH73ydhk6BkBEKyb1Am89ymL9pZj7ldZRcGMHaijgbwIgFkpkkiEXPOn1FYOIl%2BVDzOvfVAvnkXNCuvm7FgQEH5sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLV5iMGuXswHO0%2F9CrcA8P4kZ4ZRIU2ZpDs%2FZKwRJjvM0ipIQio1vMq3Pql%2Bterl%2BbvjtpvH0HRo4BTqpTnwO1Y%2F0Pc9ROtyPcLcsYz6rMTAtOF8SYe%2B4nmEmNYUrYjNrFHtekc2HUYHmjbZE7aV5cds3C0Eybcrt%2FN3GbCQJKmbH%2ByNTWjqfFOAhi999%2Fqm3BI30Bz9h12N0vxzY6UQ2GcVTBOYPrcIofPHTgaVfzaOhv0Tx5yreEVzAPGB5zi6tTuMd8tX5qmWyACk9jlSwfhpp0leSD5qR3sl6U8OKRm6iEMLCY8nfRoGh8Bx6T0dBg0E85CbUyWOEZ3KfoE8Xpr5sVHR2rvdnUNaHXOtctGLVKE4ej7IGbLEyFi%2BP768H0LQlI%2FP3G8P%2ByzTOwvi46GyV%2BMiaisFTjd8aAbm3Ls%2BGGs5bnzcgiZNM8aHrjIZU7zdkR7M8PbT1z5rtnPzR0x%2FjXeZPWmV1CQRldtOmJoFBWua3z58lkbIXSKs0XCL46cQfwowFS3p4ef6jQsVtmfdIB34Jf3l9K%2Fb6MFQg48NI4pXg7uGJ4tZfHluAdEiWqk4g1oo7zDopyEM%2FSX%2BZkD4puN21I9qJ6lqAmX2T0ieaVKE9lUMVg0QVqI3e4LFtXmtD8R%2BYov70zGMJzq2MQGOqUBVejdyYQkZrhj2Iz14vWqBUQaNphZmgpP8T35lYba1f9lHAWbro3bf31iTT8Wl%2B9GFTF3Pmysd52cerVksMwwEIZ9GXXvxpZ5%2BKwpNzVQhtT9bVONQBhqhz%2BO%2BY2IanyFAYL1bJ5zvWZ8jsAK6AVAbr6ChC9fz83TrNxRL0YpmI9ZZvuHdqWzy%2FaC4cbXLNP6bTItZZ3vI155fs8s0Yq1CRIyHtz2&X-Amz-Signature=6e1c37f0424b4b2f8dee4066884cda33749a511d9b3197ecd1a852e5d4903366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
