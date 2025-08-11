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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJCM346%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFPWqY5vba3OSAesoMSDJDuAky%2FzGL0cux8m%2BGLa%2B2gIgJLUzUoRPtcpp1yWFdQDg3LcnQvVZySCY3IddVNgAiJkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAF74yfS7YB2apeRircAxxu38%2BryHJlLnIxUuEW%2FQfY84%2FOx7Q%2Brafa8uPgAD7jNjcWwqUSq1Ofr5R%2BOGNZvkaqvqU58GzxpU2fhBerHkdqzVGS26gHkiJ%2FG8QO1aC6cd7brzejdSiXlEALuL3OSqPdvKL1qECyqeQnMJpreBEZGDdgXrW6OPrUrwq7JzzoqhMxrUVE7vJjD3fADDMWp79rmkKuQFeH0V810p8Y9J2gE2NkM8S0lqZdY0Z71LRqDBOwG5RA7Lyt5vFkTSaNRMdSUTqTO3Ob0RA2EdEuP%2BMbZCh%2BU0BwYAxkEwFXohKQ%2BxAUQfusokWj2F2LMng8MSplxfrMpCJARuuwCqg2MtpHOYplvLCuNeS154CLohedGIpiH6dqA3doMQfwvujmb1tNLGg05jyKqu99gi%2FVF%2FUt5O5Z%2BWgKFVGpjKYK2LWHv%2BcOX1xbbJtvApRxayK7OoxL6eyRsXT2u3c8yrnxvpP5dftcmZl%2BqXsdBaXo6UpkFUhmqIbGFo%2F1W7hCl1u0JWDzobzpZYRFeLLJ4mLScJL%2Fn%2FUdMWJMN2SRqDo97%2BhSlTIadMFRLb1Ub7zBCJoRDJ397VDy%2FIMv7mlAlJaY3qoXxtxh6kTcCd%2Bo66ivYJ0zwlclQhRZoZYR3oVtMOT45sQGOqUB8XMnfSW8SoLYk4k8FuxKjcSU2e3xlriZm3SDPrvGSdATpdf9jj%2FVJRpL%2F1KW1dc8J17WHhsOqWxqxlXd0kw25UZs%2Fs1%2B3rh8VQz94kABu3CvP1B7nLnj2IAtjzoOf48Ps45X3YorYRHF97dffsQ9ZWCVboPU4polnVoS0sjcb0tIe0bB%2Bq5gDX8cw8%2FZoX2OywjcWi0bveS6DhZeI1LyYKd0ul9L&X-Amz-Signature=3d1739630bdb1c0f4206e67c784c39df7c13a4e039eaca064eb0a638fb05fa3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYTZSCW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TsLWyBfiTZ4X2BKucjhHN5iKdB7LBxg7c2OFbyI3WQIgIRuGb4WpfNAkIoenR1BJ3XkQ9NeQdx1guIYE6DJgMOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TcsGuyaHGuWog2SrcA28UyXVYQYPEn66VInodhgSQYSpQzKbZX%2B0VrOSTMKcNgcVLDUtqcAKAQoWHimB1WOliDGiCTBW1B8Q89VHkM8OMpTiyOSKnfm8a22HcPCu5MtdVIU8xhbEtDT1Bb%2FX6kWS9GrDnQjUsorhGXzKx3Ojj7rwLQN4nxUdaAV78s434CEq%2BwDWB6Uf%2B0L4y6b40X1xBACPuMIKYkcZg3nkQx9oAvC8P2gW4W%2FmByosRJW3jwy38sDnVhsqhH5Q1meb4iwyHuNzXk1pHBCw9bu%2Ba8iTdK4eFA%2FfjOdHPnikGnjvzzgSXl%2F3haojMhyTPYFukzm2xGAp2qx5%2Faxldd4iSN2bXtClX4l7b%2B3YEwHDBVbT0sY93HaOZcxi3BgFA7HfOPHuUyQ8fcYyECJ3t%2BalScHFPvHq%2FRpaaZqgr4aFBPB9%2BCLvNFAW8kvXzBErjc66SOf373bBgUIMHNQKC6VnhnLGzvpl%2FRZNkEr8PsjZ2S5nCvZpo7NljU9l4n8KRE4XbV4XKhxg%2B54zE%2Fx1bIgTh3aR%2Fnney0bxsik933F6BG2JtceEon%2B0LUTGjWwoEaAKuzi6tSFqEPre%2BKWSJb04WSmqqr7kP%2FnOoMwiZ1ZZEGh2aglzJCVNqeXqVugRHMPf45sQGOqUBP2ufHl1v3%2F4KGK3iFwbpCWeqvsUjYzSrrHfo%2Buv6pugq00E24HgXMGYx%2FlY2ZfZTHEfS5JXCOcx4GxwP3w6J8LDn3JaVMC1MdFBmotuOJgJk9OXXsCYlMQDa8C5Ktr4Vxets4QEQ3CameAZsIziEfBXoZV%2FOzfuQ%2BM77AuOMEvrN7O60UOmCxUgD0LbXD2IK7sQz%2F59D91Kjm5m8BIPOIOo63RGH&X-Amz-Signature=9fc75df12f7fb81621662d731b9d5b27fdc4987eb1279a1816d90d791623f83b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYTZSCW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TsLWyBfiTZ4X2BKucjhHN5iKdB7LBxg7c2OFbyI3WQIgIRuGb4WpfNAkIoenR1BJ3XkQ9NeQdx1guIYE6DJgMOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TcsGuyaHGuWog2SrcA28UyXVYQYPEn66VInodhgSQYSpQzKbZX%2B0VrOSTMKcNgcVLDUtqcAKAQoWHimB1WOliDGiCTBW1B8Q89VHkM8OMpTiyOSKnfm8a22HcPCu5MtdVIU8xhbEtDT1Bb%2FX6kWS9GrDnQjUsorhGXzKx3Ojj7rwLQN4nxUdaAV78s434CEq%2BwDWB6Uf%2B0L4y6b40X1xBACPuMIKYkcZg3nkQx9oAvC8P2gW4W%2FmByosRJW3jwy38sDnVhsqhH5Q1meb4iwyHuNzXk1pHBCw9bu%2Ba8iTdK4eFA%2FfjOdHPnikGnjvzzgSXl%2F3haojMhyTPYFukzm2xGAp2qx5%2Faxldd4iSN2bXtClX4l7b%2B3YEwHDBVbT0sY93HaOZcxi3BgFA7HfOPHuUyQ8fcYyECJ3t%2BalScHFPvHq%2FRpaaZqgr4aFBPB9%2BCLvNFAW8kvXzBErjc66SOf373bBgUIMHNQKC6VnhnLGzvpl%2FRZNkEr8PsjZ2S5nCvZpo7NljU9l4n8KRE4XbV4XKhxg%2B54zE%2Fx1bIgTh3aR%2Fnney0bxsik933F6BG2JtceEon%2B0LUTGjWwoEaAKuzi6tSFqEPre%2BKWSJb04WSmqqr7kP%2FnOoMwiZ1ZZEGh2aglzJCVNqeXqVugRHMPf45sQGOqUBP2ufHl1v3%2F4KGK3iFwbpCWeqvsUjYzSrrHfo%2Buv6pugq00E24HgXMGYx%2FlY2ZfZTHEfS5JXCOcx4GxwP3w6J8LDn3JaVMC1MdFBmotuOJgJk9OXXsCYlMQDa8C5Ktr4Vxets4QEQ3CameAZsIziEfBXoZV%2FOzfuQ%2BM77AuOMEvrN7O60UOmCxUgD0LbXD2IK7sQz%2F59D91Kjm5m8BIPOIOo63RGH&X-Amz-Signature=bbcd01675d6542f4b35e744f3c80f3e7e3ef21d523042c192f68891f7db7ba82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYTZSCW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TsLWyBfiTZ4X2BKucjhHN5iKdB7LBxg7c2OFbyI3WQIgIRuGb4WpfNAkIoenR1BJ3XkQ9NeQdx1guIYE6DJgMOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TcsGuyaHGuWog2SrcA28UyXVYQYPEn66VInodhgSQYSpQzKbZX%2B0VrOSTMKcNgcVLDUtqcAKAQoWHimB1WOliDGiCTBW1B8Q89VHkM8OMpTiyOSKnfm8a22HcPCu5MtdVIU8xhbEtDT1Bb%2FX6kWS9GrDnQjUsorhGXzKx3Ojj7rwLQN4nxUdaAV78s434CEq%2BwDWB6Uf%2B0L4y6b40X1xBACPuMIKYkcZg3nkQx9oAvC8P2gW4W%2FmByosRJW3jwy38sDnVhsqhH5Q1meb4iwyHuNzXk1pHBCw9bu%2Ba8iTdK4eFA%2FfjOdHPnikGnjvzzgSXl%2F3haojMhyTPYFukzm2xGAp2qx5%2Faxldd4iSN2bXtClX4l7b%2B3YEwHDBVbT0sY93HaOZcxi3BgFA7HfOPHuUyQ8fcYyECJ3t%2BalScHFPvHq%2FRpaaZqgr4aFBPB9%2BCLvNFAW8kvXzBErjc66SOf373bBgUIMHNQKC6VnhnLGzvpl%2FRZNkEr8PsjZ2S5nCvZpo7NljU9l4n8KRE4XbV4XKhxg%2B54zE%2Fx1bIgTh3aR%2Fnney0bxsik933F6BG2JtceEon%2B0LUTGjWwoEaAKuzi6tSFqEPre%2BKWSJb04WSmqqr7kP%2FnOoMwiZ1ZZEGh2aglzJCVNqeXqVugRHMPf45sQGOqUBP2ufHl1v3%2F4KGK3iFwbpCWeqvsUjYzSrrHfo%2Buv6pugq00E24HgXMGYx%2FlY2ZfZTHEfS5JXCOcx4GxwP3w6J8LDn3JaVMC1MdFBmotuOJgJk9OXXsCYlMQDa8C5Ktr4Vxets4QEQ3CameAZsIziEfBXoZV%2FOzfuQ%2BM77AuOMEvrN7O60UOmCxUgD0LbXD2IK7sQz%2F59D91Kjm5m8BIPOIOo63RGH&X-Amz-Signature=4907c7337ef51b6c684192e7cd233fa9bebebb030c8a085d815ea2da3fec8e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYTZSCW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TsLWyBfiTZ4X2BKucjhHN5iKdB7LBxg7c2OFbyI3WQIgIRuGb4WpfNAkIoenR1BJ3XkQ9NeQdx1guIYE6DJgMOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TcsGuyaHGuWog2SrcA28UyXVYQYPEn66VInodhgSQYSpQzKbZX%2B0VrOSTMKcNgcVLDUtqcAKAQoWHimB1WOliDGiCTBW1B8Q89VHkM8OMpTiyOSKnfm8a22HcPCu5MtdVIU8xhbEtDT1Bb%2FX6kWS9GrDnQjUsorhGXzKx3Ojj7rwLQN4nxUdaAV78s434CEq%2BwDWB6Uf%2B0L4y6b40X1xBACPuMIKYkcZg3nkQx9oAvC8P2gW4W%2FmByosRJW3jwy38sDnVhsqhH5Q1meb4iwyHuNzXk1pHBCw9bu%2Ba8iTdK4eFA%2FfjOdHPnikGnjvzzgSXl%2F3haojMhyTPYFukzm2xGAp2qx5%2Faxldd4iSN2bXtClX4l7b%2B3YEwHDBVbT0sY93HaOZcxi3BgFA7HfOPHuUyQ8fcYyECJ3t%2BalScHFPvHq%2FRpaaZqgr4aFBPB9%2BCLvNFAW8kvXzBErjc66SOf373bBgUIMHNQKC6VnhnLGzvpl%2FRZNkEr8PsjZ2S5nCvZpo7NljU9l4n8KRE4XbV4XKhxg%2B54zE%2Fx1bIgTh3aR%2Fnney0bxsik933F6BG2JtceEon%2B0LUTGjWwoEaAKuzi6tSFqEPre%2BKWSJb04WSmqqr7kP%2FnOoMwiZ1ZZEGh2aglzJCVNqeXqVugRHMPf45sQGOqUBP2ufHl1v3%2F4KGK3iFwbpCWeqvsUjYzSrrHfo%2Buv6pugq00E24HgXMGYx%2FlY2ZfZTHEfS5JXCOcx4GxwP3w6J8LDn3JaVMC1MdFBmotuOJgJk9OXXsCYlMQDa8C5Ktr4Vxets4QEQ3CameAZsIziEfBXoZV%2FOzfuQ%2BM77AuOMEvrN7O60UOmCxUgD0LbXD2IK7sQz%2F59D91Kjm5m8BIPOIOo63RGH&X-Amz-Signature=a7b9215403abc4ffff1e35f30f8ccf44a44c33c5ab6c018fa13a19c7f9fcfcae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYTZSCW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TsLWyBfiTZ4X2BKucjhHN5iKdB7LBxg7c2OFbyI3WQIgIRuGb4WpfNAkIoenR1BJ3XkQ9NeQdx1guIYE6DJgMOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TcsGuyaHGuWog2SrcA28UyXVYQYPEn66VInodhgSQYSpQzKbZX%2B0VrOSTMKcNgcVLDUtqcAKAQoWHimB1WOliDGiCTBW1B8Q89VHkM8OMpTiyOSKnfm8a22HcPCu5MtdVIU8xhbEtDT1Bb%2FX6kWS9GrDnQjUsorhGXzKx3Ojj7rwLQN4nxUdaAV78s434CEq%2BwDWB6Uf%2B0L4y6b40X1xBACPuMIKYkcZg3nkQx9oAvC8P2gW4W%2FmByosRJW3jwy38sDnVhsqhH5Q1meb4iwyHuNzXk1pHBCw9bu%2Ba8iTdK4eFA%2FfjOdHPnikGnjvzzgSXl%2F3haojMhyTPYFukzm2xGAp2qx5%2Faxldd4iSN2bXtClX4l7b%2B3YEwHDBVbT0sY93HaOZcxi3BgFA7HfOPHuUyQ8fcYyECJ3t%2BalScHFPvHq%2FRpaaZqgr4aFBPB9%2BCLvNFAW8kvXzBErjc66SOf373bBgUIMHNQKC6VnhnLGzvpl%2FRZNkEr8PsjZ2S5nCvZpo7NljU9l4n8KRE4XbV4XKhxg%2B54zE%2Fx1bIgTh3aR%2Fnney0bxsik933F6BG2JtceEon%2B0LUTGjWwoEaAKuzi6tSFqEPre%2BKWSJb04WSmqqr7kP%2FnOoMwiZ1ZZEGh2aglzJCVNqeXqVugRHMPf45sQGOqUBP2ufHl1v3%2F4KGK3iFwbpCWeqvsUjYzSrrHfo%2Buv6pugq00E24HgXMGYx%2FlY2ZfZTHEfS5JXCOcx4GxwP3w6J8LDn3JaVMC1MdFBmotuOJgJk9OXXsCYlMQDa8C5Ktr4Vxets4QEQ3CameAZsIziEfBXoZV%2FOzfuQ%2BM77AuOMEvrN7O60UOmCxUgD0LbXD2IK7sQz%2F59D91Kjm5m8BIPOIOo63RGH&X-Amz-Signature=30a198851f25d729059d5ad2db874a3dd9f469b6ccb284c0ed41a41f05250ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYTZSCW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TsLWyBfiTZ4X2BKucjhHN5iKdB7LBxg7c2OFbyI3WQIgIRuGb4WpfNAkIoenR1BJ3XkQ9NeQdx1guIYE6DJgMOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TcsGuyaHGuWog2SrcA28UyXVYQYPEn66VInodhgSQYSpQzKbZX%2B0VrOSTMKcNgcVLDUtqcAKAQoWHimB1WOliDGiCTBW1B8Q89VHkM8OMpTiyOSKnfm8a22HcPCu5MtdVIU8xhbEtDT1Bb%2FX6kWS9GrDnQjUsorhGXzKx3Ojj7rwLQN4nxUdaAV78s434CEq%2BwDWB6Uf%2B0L4y6b40X1xBACPuMIKYkcZg3nkQx9oAvC8P2gW4W%2FmByosRJW3jwy38sDnVhsqhH5Q1meb4iwyHuNzXk1pHBCw9bu%2Ba8iTdK4eFA%2FfjOdHPnikGnjvzzgSXl%2F3haojMhyTPYFukzm2xGAp2qx5%2Faxldd4iSN2bXtClX4l7b%2B3YEwHDBVbT0sY93HaOZcxi3BgFA7HfOPHuUyQ8fcYyECJ3t%2BalScHFPvHq%2FRpaaZqgr4aFBPB9%2BCLvNFAW8kvXzBErjc66SOf373bBgUIMHNQKC6VnhnLGzvpl%2FRZNkEr8PsjZ2S5nCvZpo7NljU9l4n8KRE4XbV4XKhxg%2B54zE%2Fx1bIgTh3aR%2Fnney0bxsik933F6BG2JtceEon%2B0LUTGjWwoEaAKuzi6tSFqEPre%2BKWSJb04WSmqqr7kP%2FnOoMwiZ1ZZEGh2aglzJCVNqeXqVugRHMPf45sQGOqUBP2ufHl1v3%2F4KGK3iFwbpCWeqvsUjYzSrrHfo%2Buv6pugq00E24HgXMGYx%2FlY2ZfZTHEfS5JXCOcx4GxwP3w6J8LDn3JaVMC1MdFBmotuOJgJk9OXXsCYlMQDa8C5Ktr4Vxets4QEQ3CameAZsIziEfBXoZV%2FOzfuQ%2BM77AuOMEvrN7O60UOmCxUgD0LbXD2IK7sQz%2F59D91Kjm5m8BIPOIOo63RGH&X-Amz-Signature=971731ce6ecbbc2d2b4c8323badfb71a00304703b4d193c84cd74764e9bd872b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYTZSCW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TsLWyBfiTZ4X2BKucjhHN5iKdB7LBxg7c2OFbyI3WQIgIRuGb4WpfNAkIoenR1BJ3XkQ9NeQdx1guIYE6DJgMOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TcsGuyaHGuWog2SrcA28UyXVYQYPEn66VInodhgSQYSpQzKbZX%2B0VrOSTMKcNgcVLDUtqcAKAQoWHimB1WOliDGiCTBW1B8Q89VHkM8OMpTiyOSKnfm8a22HcPCu5MtdVIU8xhbEtDT1Bb%2FX6kWS9GrDnQjUsorhGXzKx3Ojj7rwLQN4nxUdaAV78s434CEq%2BwDWB6Uf%2B0L4y6b40X1xBACPuMIKYkcZg3nkQx9oAvC8P2gW4W%2FmByosRJW3jwy38sDnVhsqhH5Q1meb4iwyHuNzXk1pHBCw9bu%2Ba8iTdK4eFA%2FfjOdHPnikGnjvzzgSXl%2F3haojMhyTPYFukzm2xGAp2qx5%2Faxldd4iSN2bXtClX4l7b%2B3YEwHDBVbT0sY93HaOZcxi3BgFA7HfOPHuUyQ8fcYyECJ3t%2BalScHFPvHq%2FRpaaZqgr4aFBPB9%2BCLvNFAW8kvXzBErjc66SOf373bBgUIMHNQKC6VnhnLGzvpl%2FRZNkEr8PsjZ2S5nCvZpo7NljU9l4n8KRE4XbV4XKhxg%2B54zE%2Fx1bIgTh3aR%2Fnney0bxsik933F6BG2JtceEon%2B0LUTGjWwoEaAKuzi6tSFqEPre%2BKWSJb04WSmqqr7kP%2FnOoMwiZ1ZZEGh2aglzJCVNqeXqVugRHMPf45sQGOqUBP2ufHl1v3%2F4KGK3iFwbpCWeqvsUjYzSrrHfo%2Buv6pugq00E24HgXMGYx%2FlY2ZfZTHEfS5JXCOcx4GxwP3w6J8LDn3JaVMC1MdFBmotuOJgJk9OXXsCYlMQDa8C5Ktr4Vxets4QEQ3CameAZsIziEfBXoZV%2FOzfuQ%2BM77AuOMEvrN7O60UOmCxUgD0LbXD2IK7sQz%2F59D91Kjm5m8BIPOIOo63RGH&X-Amz-Signature=8514d789daa13169bcb24c5390167e8a1be21d1e9e546c2b810a4e5fd8722102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYTZSCW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TsLWyBfiTZ4X2BKucjhHN5iKdB7LBxg7c2OFbyI3WQIgIRuGb4WpfNAkIoenR1BJ3XkQ9NeQdx1guIYE6DJgMOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TcsGuyaHGuWog2SrcA28UyXVYQYPEn66VInodhgSQYSpQzKbZX%2B0VrOSTMKcNgcVLDUtqcAKAQoWHimB1WOliDGiCTBW1B8Q89VHkM8OMpTiyOSKnfm8a22HcPCu5MtdVIU8xhbEtDT1Bb%2FX6kWS9GrDnQjUsorhGXzKx3Ojj7rwLQN4nxUdaAV78s434CEq%2BwDWB6Uf%2B0L4y6b40X1xBACPuMIKYkcZg3nkQx9oAvC8P2gW4W%2FmByosRJW3jwy38sDnVhsqhH5Q1meb4iwyHuNzXk1pHBCw9bu%2Ba8iTdK4eFA%2FfjOdHPnikGnjvzzgSXl%2F3haojMhyTPYFukzm2xGAp2qx5%2Faxldd4iSN2bXtClX4l7b%2B3YEwHDBVbT0sY93HaOZcxi3BgFA7HfOPHuUyQ8fcYyECJ3t%2BalScHFPvHq%2FRpaaZqgr4aFBPB9%2BCLvNFAW8kvXzBErjc66SOf373bBgUIMHNQKC6VnhnLGzvpl%2FRZNkEr8PsjZ2S5nCvZpo7NljU9l4n8KRE4XbV4XKhxg%2B54zE%2Fx1bIgTh3aR%2Fnney0bxsik933F6BG2JtceEon%2B0LUTGjWwoEaAKuzi6tSFqEPre%2BKWSJb04WSmqqr7kP%2FnOoMwiZ1ZZEGh2aglzJCVNqeXqVugRHMPf45sQGOqUBP2ufHl1v3%2F4KGK3iFwbpCWeqvsUjYzSrrHfo%2Buv6pugq00E24HgXMGYx%2FlY2ZfZTHEfS5JXCOcx4GxwP3w6J8LDn3JaVMC1MdFBmotuOJgJk9OXXsCYlMQDa8C5Ktr4Vxets4QEQ3CameAZsIziEfBXoZV%2FOzfuQ%2BM77AuOMEvrN7O60UOmCxUgD0LbXD2IK7sQz%2F59D91Kjm5m8BIPOIOo63RGH&X-Amz-Signature=05fbaf4123908ed1c2c5deaf98ea28786e3b65eeb34dc80eb40a405f47a959f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYTZSCW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TsLWyBfiTZ4X2BKucjhHN5iKdB7LBxg7c2OFbyI3WQIgIRuGb4WpfNAkIoenR1BJ3XkQ9NeQdx1guIYE6DJgMOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TcsGuyaHGuWog2SrcA28UyXVYQYPEn66VInodhgSQYSpQzKbZX%2B0VrOSTMKcNgcVLDUtqcAKAQoWHimB1WOliDGiCTBW1B8Q89VHkM8OMpTiyOSKnfm8a22HcPCu5MtdVIU8xhbEtDT1Bb%2FX6kWS9GrDnQjUsorhGXzKx3Ojj7rwLQN4nxUdaAV78s434CEq%2BwDWB6Uf%2B0L4y6b40X1xBACPuMIKYkcZg3nkQx9oAvC8P2gW4W%2FmByosRJW3jwy38sDnVhsqhH5Q1meb4iwyHuNzXk1pHBCw9bu%2Ba8iTdK4eFA%2FfjOdHPnikGnjvzzgSXl%2F3haojMhyTPYFukzm2xGAp2qx5%2Faxldd4iSN2bXtClX4l7b%2B3YEwHDBVbT0sY93HaOZcxi3BgFA7HfOPHuUyQ8fcYyECJ3t%2BalScHFPvHq%2FRpaaZqgr4aFBPB9%2BCLvNFAW8kvXzBErjc66SOf373bBgUIMHNQKC6VnhnLGzvpl%2FRZNkEr8PsjZ2S5nCvZpo7NljU9l4n8KRE4XbV4XKhxg%2B54zE%2Fx1bIgTh3aR%2Fnney0bxsik933F6BG2JtceEon%2B0LUTGjWwoEaAKuzi6tSFqEPre%2BKWSJb04WSmqqr7kP%2FnOoMwiZ1ZZEGh2aglzJCVNqeXqVugRHMPf45sQGOqUBP2ufHl1v3%2F4KGK3iFwbpCWeqvsUjYzSrrHfo%2Buv6pugq00E24HgXMGYx%2FlY2ZfZTHEfS5JXCOcx4GxwP3w6J8LDn3JaVMC1MdFBmotuOJgJk9OXXsCYlMQDa8C5Ktr4Vxets4QEQ3CameAZsIziEfBXoZV%2FOzfuQ%2BM77AuOMEvrN7O60UOmCxUgD0LbXD2IK7sQz%2F59D91Kjm5m8BIPOIOo63RGH&X-Amz-Signature=29863fe0cbe699b9af514d5399a5d6a152d6e8ff4174e9df00dccb0e2840a580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYTZSCW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TsLWyBfiTZ4X2BKucjhHN5iKdB7LBxg7c2OFbyI3WQIgIRuGb4WpfNAkIoenR1BJ3XkQ9NeQdx1guIYE6DJgMOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TcsGuyaHGuWog2SrcA28UyXVYQYPEn66VInodhgSQYSpQzKbZX%2B0VrOSTMKcNgcVLDUtqcAKAQoWHimB1WOliDGiCTBW1B8Q89VHkM8OMpTiyOSKnfm8a22HcPCu5MtdVIU8xhbEtDT1Bb%2FX6kWS9GrDnQjUsorhGXzKx3Ojj7rwLQN4nxUdaAV78s434CEq%2BwDWB6Uf%2B0L4y6b40X1xBACPuMIKYkcZg3nkQx9oAvC8P2gW4W%2FmByosRJW3jwy38sDnVhsqhH5Q1meb4iwyHuNzXk1pHBCw9bu%2Ba8iTdK4eFA%2FfjOdHPnikGnjvzzgSXl%2F3haojMhyTPYFukzm2xGAp2qx5%2Faxldd4iSN2bXtClX4l7b%2B3YEwHDBVbT0sY93HaOZcxi3BgFA7HfOPHuUyQ8fcYyECJ3t%2BalScHFPvHq%2FRpaaZqgr4aFBPB9%2BCLvNFAW8kvXzBErjc66SOf373bBgUIMHNQKC6VnhnLGzvpl%2FRZNkEr8PsjZ2S5nCvZpo7NljU9l4n8KRE4XbV4XKhxg%2B54zE%2Fx1bIgTh3aR%2Fnney0bxsik933F6BG2JtceEon%2B0LUTGjWwoEaAKuzi6tSFqEPre%2BKWSJb04WSmqqr7kP%2FnOoMwiZ1ZZEGh2aglzJCVNqeXqVugRHMPf45sQGOqUBP2ufHl1v3%2F4KGK3iFwbpCWeqvsUjYzSrrHfo%2Buv6pugq00E24HgXMGYx%2FlY2ZfZTHEfS5JXCOcx4GxwP3w6J8LDn3JaVMC1MdFBmotuOJgJk9OXXsCYlMQDa8C5Ktr4Vxets4QEQ3CameAZsIziEfBXoZV%2FOzfuQ%2BM77AuOMEvrN7O60UOmCxUgD0LbXD2IK7sQz%2F59D91Kjm5m8BIPOIOo63RGH&X-Amz-Signature=a7b9215403abc4ffff1e35f30f8ccf44a44c33c5ab6c018fa13a19c7f9fcfcae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
