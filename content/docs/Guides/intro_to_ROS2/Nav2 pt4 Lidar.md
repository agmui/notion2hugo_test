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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM5DO2MW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGIA8mZiHN0yG0%2Fr1uMhjOE5SEfLlJw8d2qgpHMt580pAiB0k0CKtyKnwnLwRKocmQM5DkDo6ObRMsrmT%2FGnEgY6hCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2BBpov0wwFZ1dcKmiKtwDalsSBiqENyYXip9FzThCnVUzgHg%2BszG%2BR%2BXL3BdMPoieIU%2BrwPyoEl2N2bn54PwqB5ZwKy%2BiH7dBbGD8%2BwhyME%2FFMLlFS8R6Cl%2FHfE9vHF03OKzUyQk7R1fRsrzGz9XtL6MqqxfTnkv50B7RTiGKkMGS6GuUx1itPPOO5RcEAIxlb%2Boaz1BgxNOYSYqqAtkQbX6Qi41aNJ9RquQJ%2B1YAq3BN5An0wDm77d%2B0HsKSuWRNnIAhIsLp2iEewDf9QtKEHsV06Nfj3u7wA4sX6UqRZNoI3AwZl6OM5okJdqyNiQ%2FFbJIDnB85pR5gNRZqAcDs3oF1ugjDTEhd6zFo24UiQUSAytqZHKSIHN3c2hDnGKHIG8oGutZj7cgAifuyPQwre8YFgVL9ShXxrdQFMo2d%2FTW0bubANMuKwDCXNrgXQJXx7BRDVR4QEsyHS%2Fy1KpfDFIcnaI5bgDlF7gc0qSmv3tVhvcsdUqaKjyJFMu%2FRC6%2Fv%2B1TMUiLnHfEcx7gNgr2CdoOcrLXJZyOexaFD9Noi6FSnTWr%2FdV5EikKJ%2Fn9BaMb3Ke99HsSmdpMJr5Gp4xd0NKR2J0vLTZB7haQYIkpgZHuTmOpA6%2FDr1P%2B%2FkGnFc8B3fvVlrkadGOEpSykwtdv9xAY6pgGq1A%2FlJbnymovmRn1uh0oPPz5JBMnXVokdn%2BMJAlP4YoUgBPtO0g8ERNbThSlvgeNUvxmPHJqIfhRFs4kfBlYeYb34wqKddud8NT7vd2xovcZfhkyILROu3vePGxgXPEUGfEiGh5lQ7oW7zwb1lw9Adpyvf69rf2ng4S0L8LT8%2Feu8pDAY%2F8%2FI6ptQ4f2jzSyLxX8qKvc2FMZTWh3YmHPHUIOG2kNJ&X-Amz-Signature=a7ad19f4d9dc457aa14ad80f1e80db434b5fb184f27c477195032dce01fc359b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7UVIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEFd9%2Bo2Gy3%2BTIP9TDzCe2lbhAqfPvrTI4WauhmPmEmkAiEA9VEzxdRbIRoX3FtbJ3uO%2BvyLJlmpCuBkxCjw3nJEOKYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNNKpH1NbNiBbFA1jSrcA7yGU4rkzwDTTTifmPWsUamNFY2I7Uw7D2G97Uk15JPawBdrMEmf3ZoWQ2ji3W%2BdelGy8qFgvgYZJ8KpG%2FihwF2sFaOF3jgY%2BTun%2FXxBY618XT6a6j22GBIkmu0i6nUoK1zBc%2FgFAGDMGkoIrjcYC3L1KwcZbDh1pP9QXO4DcV9fXGyw4GrP1EdESZ0NNqvoSy%2FtSuEE7Usnb6%2FcKh96YJ14x8G2U5MZDIU2FJBaH0cRORZel%2FrwRNBDA3wCWlnBInOFIuLfgwzr9q%2BS7Ffe7Iwq20fe2T66iwbrlrvbKfGQF%2FxFbcvx8vctR929PhSHrfpmpYsj5NB528Rk0emhA0Pev%2BQgpaYVC3bUQAuF%2Bqgq5X0tLOLhtkp44Bz5mlZlV60iqFx6OSuD349D8mJdtHzrtVk6KYMGQQ35VUEzQkTntKbdC%2BdIIg%2Fcs78gQKPMB%2FTGnR%2FGgFAHBroWOZNW1bwHcY50XJU%2BKwzFQjTFopRaHSkS%2BH3Kn8V%2FyWX%2BQqDUJaVfoe97qetILdBMmpWp0MQbt%2B67y56IEx%2BJ5HfwdoMFIr8kEGpLVuZ7j4iymeHiV2fUCGref4JZpMgUUBjonQfRCd5fuHkm7Bx7T1rwKMPdHhI5pwWgKzPDpQhiMK%2Fa%2FcQGOqUB2QxbFzONHPS8M31gqKq40%2FG%2Br6FfooA1IVKnOjZEcrDj1rVJcvCZnMiFBEUy0eS2otOV0VWE3YjTiXyE5nkU%2BV9iPlvTBQ4f6FAUEx2Doylf2%2F6Vykmcwmm2vwMHYFQ04dP4msT59Bjs2BsP2PAJ3U7TZaNVcRisr0MoOrQKNE4BrrjNom9wFGvFLkVd9dy7xADf4xXkfuoB5xnHboVsyml1eJjY&X-Amz-Signature=a7f9aba0366fa63f25d4f495189565b98c87b80ae8880469504f75670318a678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7UVIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEFd9%2Bo2Gy3%2BTIP9TDzCe2lbhAqfPvrTI4WauhmPmEmkAiEA9VEzxdRbIRoX3FtbJ3uO%2BvyLJlmpCuBkxCjw3nJEOKYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNNKpH1NbNiBbFA1jSrcA7yGU4rkzwDTTTifmPWsUamNFY2I7Uw7D2G97Uk15JPawBdrMEmf3ZoWQ2ji3W%2BdelGy8qFgvgYZJ8KpG%2FihwF2sFaOF3jgY%2BTun%2FXxBY618XT6a6j22GBIkmu0i6nUoK1zBc%2FgFAGDMGkoIrjcYC3L1KwcZbDh1pP9QXO4DcV9fXGyw4GrP1EdESZ0NNqvoSy%2FtSuEE7Usnb6%2FcKh96YJ14x8G2U5MZDIU2FJBaH0cRORZel%2FrwRNBDA3wCWlnBInOFIuLfgwzr9q%2BS7Ffe7Iwq20fe2T66iwbrlrvbKfGQF%2FxFbcvx8vctR929PhSHrfpmpYsj5NB528Rk0emhA0Pev%2BQgpaYVC3bUQAuF%2Bqgq5X0tLOLhtkp44Bz5mlZlV60iqFx6OSuD349D8mJdtHzrtVk6KYMGQQ35VUEzQkTntKbdC%2BdIIg%2Fcs78gQKPMB%2FTGnR%2FGgFAHBroWOZNW1bwHcY50XJU%2BKwzFQjTFopRaHSkS%2BH3Kn8V%2FyWX%2BQqDUJaVfoe97qetILdBMmpWp0MQbt%2B67y56IEx%2BJ5HfwdoMFIr8kEGpLVuZ7j4iymeHiV2fUCGref4JZpMgUUBjonQfRCd5fuHkm7Bx7T1rwKMPdHhI5pwWgKzPDpQhiMK%2Fa%2FcQGOqUB2QxbFzONHPS8M31gqKq40%2FG%2Br6FfooA1IVKnOjZEcrDj1rVJcvCZnMiFBEUy0eS2otOV0VWE3YjTiXyE5nkU%2BV9iPlvTBQ4f6FAUEx2Doylf2%2F6Vykmcwmm2vwMHYFQ04dP4msT59Bjs2BsP2PAJ3U7TZaNVcRisr0MoOrQKNE4BrrjNom9wFGvFLkVd9dy7xADf4xXkfuoB5xnHboVsyml1eJjY&X-Amz-Signature=6186b7ba1344d834178099dfc7906905e6f0afedb8980ab941da8bf545e5ccd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7UVIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEFd9%2Bo2Gy3%2BTIP9TDzCe2lbhAqfPvrTI4WauhmPmEmkAiEA9VEzxdRbIRoX3FtbJ3uO%2BvyLJlmpCuBkxCjw3nJEOKYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNNKpH1NbNiBbFA1jSrcA7yGU4rkzwDTTTifmPWsUamNFY2I7Uw7D2G97Uk15JPawBdrMEmf3ZoWQ2ji3W%2BdelGy8qFgvgYZJ8KpG%2FihwF2sFaOF3jgY%2BTun%2FXxBY618XT6a6j22GBIkmu0i6nUoK1zBc%2FgFAGDMGkoIrjcYC3L1KwcZbDh1pP9QXO4DcV9fXGyw4GrP1EdESZ0NNqvoSy%2FtSuEE7Usnb6%2FcKh96YJ14x8G2U5MZDIU2FJBaH0cRORZel%2FrwRNBDA3wCWlnBInOFIuLfgwzr9q%2BS7Ffe7Iwq20fe2T66iwbrlrvbKfGQF%2FxFbcvx8vctR929PhSHrfpmpYsj5NB528Rk0emhA0Pev%2BQgpaYVC3bUQAuF%2Bqgq5X0tLOLhtkp44Bz5mlZlV60iqFx6OSuD349D8mJdtHzrtVk6KYMGQQ35VUEzQkTntKbdC%2BdIIg%2Fcs78gQKPMB%2FTGnR%2FGgFAHBroWOZNW1bwHcY50XJU%2BKwzFQjTFopRaHSkS%2BH3Kn8V%2FyWX%2BQqDUJaVfoe97qetILdBMmpWp0MQbt%2B67y56IEx%2BJ5HfwdoMFIr8kEGpLVuZ7j4iymeHiV2fUCGref4JZpMgUUBjonQfRCd5fuHkm7Bx7T1rwKMPdHhI5pwWgKzPDpQhiMK%2Fa%2FcQGOqUB2QxbFzONHPS8M31gqKq40%2FG%2Br6FfooA1IVKnOjZEcrDj1rVJcvCZnMiFBEUy0eS2otOV0VWE3YjTiXyE5nkU%2BV9iPlvTBQ4f6FAUEx2Doylf2%2F6Vykmcwmm2vwMHYFQ04dP4msT59Bjs2BsP2PAJ3U7TZaNVcRisr0MoOrQKNE4BrrjNom9wFGvFLkVd9dy7xADf4xXkfuoB5xnHboVsyml1eJjY&X-Amz-Signature=42bc06997f9170c880264e86e8cef5d8e3454f291f7a4d74cabe0ec8e2161309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7UVIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEFd9%2Bo2Gy3%2BTIP9TDzCe2lbhAqfPvrTI4WauhmPmEmkAiEA9VEzxdRbIRoX3FtbJ3uO%2BvyLJlmpCuBkxCjw3nJEOKYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNNKpH1NbNiBbFA1jSrcA7yGU4rkzwDTTTifmPWsUamNFY2I7Uw7D2G97Uk15JPawBdrMEmf3ZoWQ2ji3W%2BdelGy8qFgvgYZJ8KpG%2FihwF2sFaOF3jgY%2BTun%2FXxBY618XT6a6j22GBIkmu0i6nUoK1zBc%2FgFAGDMGkoIrjcYC3L1KwcZbDh1pP9QXO4DcV9fXGyw4GrP1EdESZ0NNqvoSy%2FtSuEE7Usnb6%2FcKh96YJ14x8G2U5MZDIU2FJBaH0cRORZel%2FrwRNBDA3wCWlnBInOFIuLfgwzr9q%2BS7Ffe7Iwq20fe2T66iwbrlrvbKfGQF%2FxFbcvx8vctR929PhSHrfpmpYsj5NB528Rk0emhA0Pev%2BQgpaYVC3bUQAuF%2Bqgq5X0tLOLhtkp44Bz5mlZlV60iqFx6OSuD349D8mJdtHzrtVk6KYMGQQ35VUEzQkTntKbdC%2BdIIg%2Fcs78gQKPMB%2FTGnR%2FGgFAHBroWOZNW1bwHcY50XJU%2BKwzFQjTFopRaHSkS%2BH3Kn8V%2FyWX%2BQqDUJaVfoe97qetILdBMmpWp0MQbt%2B67y56IEx%2BJ5HfwdoMFIr8kEGpLVuZ7j4iymeHiV2fUCGref4JZpMgUUBjonQfRCd5fuHkm7Bx7T1rwKMPdHhI5pwWgKzPDpQhiMK%2Fa%2FcQGOqUB2QxbFzONHPS8M31gqKq40%2FG%2Br6FfooA1IVKnOjZEcrDj1rVJcvCZnMiFBEUy0eS2otOV0VWE3YjTiXyE5nkU%2BV9iPlvTBQ4f6FAUEx2Doylf2%2F6Vykmcwmm2vwMHYFQ04dP4msT59Bjs2BsP2PAJ3U7TZaNVcRisr0MoOrQKNE4BrrjNom9wFGvFLkVd9dy7xADf4xXkfuoB5xnHboVsyml1eJjY&X-Amz-Signature=90ef6ba133b7859e97aae70b6b82ddbb7f3ebebbcf4f7f7565f80292cb61d005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7UVIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEFd9%2Bo2Gy3%2BTIP9TDzCe2lbhAqfPvrTI4WauhmPmEmkAiEA9VEzxdRbIRoX3FtbJ3uO%2BvyLJlmpCuBkxCjw3nJEOKYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNNKpH1NbNiBbFA1jSrcA7yGU4rkzwDTTTifmPWsUamNFY2I7Uw7D2G97Uk15JPawBdrMEmf3ZoWQ2ji3W%2BdelGy8qFgvgYZJ8KpG%2FihwF2sFaOF3jgY%2BTun%2FXxBY618XT6a6j22GBIkmu0i6nUoK1zBc%2FgFAGDMGkoIrjcYC3L1KwcZbDh1pP9QXO4DcV9fXGyw4GrP1EdESZ0NNqvoSy%2FtSuEE7Usnb6%2FcKh96YJ14x8G2U5MZDIU2FJBaH0cRORZel%2FrwRNBDA3wCWlnBInOFIuLfgwzr9q%2BS7Ffe7Iwq20fe2T66iwbrlrvbKfGQF%2FxFbcvx8vctR929PhSHrfpmpYsj5NB528Rk0emhA0Pev%2BQgpaYVC3bUQAuF%2Bqgq5X0tLOLhtkp44Bz5mlZlV60iqFx6OSuD349D8mJdtHzrtVk6KYMGQQ35VUEzQkTntKbdC%2BdIIg%2Fcs78gQKPMB%2FTGnR%2FGgFAHBroWOZNW1bwHcY50XJU%2BKwzFQjTFopRaHSkS%2BH3Kn8V%2FyWX%2BQqDUJaVfoe97qetILdBMmpWp0MQbt%2B67y56IEx%2BJ5HfwdoMFIr8kEGpLVuZ7j4iymeHiV2fUCGref4JZpMgUUBjonQfRCd5fuHkm7Bx7T1rwKMPdHhI5pwWgKzPDpQhiMK%2Fa%2FcQGOqUB2QxbFzONHPS8M31gqKq40%2FG%2Br6FfooA1IVKnOjZEcrDj1rVJcvCZnMiFBEUy0eS2otOV0VWE3YjTiXyE5nkU%2BV9iPlvTBQ4f6FAUEx2Doylf2%2F6Vykmcwmm2vwMHYFQ04dP4msT59Bjs2BsP2PAJ3U7TZaNVcRisr0MoOrQKNE4BrrjNom9wFGvFLkVd9dy7xADf4xXkfuoB5xnHboVsyml1eJjY&X-Amz-Signature=d042f61063d79f9d2de678406dbd4b48e4d32d3898d3b104ed33a090334bb857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7UVIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEFd9%2Bo2Gy3%2BTIP9TDzCe2lbhAqfPvrTI4WauhmPmEmkAiEA9VEzxdRbIRoX3FtbJ3uO%2BvyLJlmpCuBkxCjw3nJEOKYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNNKpH1NbNiBbFA1jSrcA7yGU4rkzwDTTTifmPWsUamNFY2I7Uw7D2G97Uk15JPawBdrMEmf3ZoWQ2ji3W%2BdelGy8qFgvgYZJ8KpG%2FihwF2sFaOF3jgY%2BTun%2FXxBY618XT6a6j22GBIkmu0i6nUoK1zBc%2FgFAGDMGkoIrjcYC3L1KwcZbDh1pP9QXO4DcV9fXGyw4GrP1EdESZ0NNqvoSy%2FtSuEE7Usnb6%2FcKh96YJ14x8G2U5MZDIU2FJBaH0cRORZel%2FrwRNBDA3wCWlnBInOFIuLfgwzr9q%2BS7Ffe7Iwq20fe2T66iwbrlrvbKfGQF%2FxFbcvx8vctR929PhSHrfpmpYsj5NB528Rk0emhA0Pev%2BQgpaYVC3bUQAuF%2Bqgq5X0tLOLhtkp44Bz5mlZlV60iqFx6OSuD349D8mJdtHzrtVk6KYMGQQ35VUEzQkTntKbdC%2BdIIg%2Fcs78gQKPMB%2FTGnR%2FGgFAHBroWOZNW1bwHcY50XJU%2BKwzFQjTFopRaHSkS%2BH3Kn8V%2FyWX%2BQqDUJaVfoe97qetILdBMmpWp0MQbt%2B67y56IEx%2BJ5HfwdoMFIr8kEGpLVuZ7j4iymeHiV2fUCGref4JZpMgUUBjonQfRCd5fuHkm7Bx7T1rwKMPdHhI5pwWgKzPDpQhiMK%2Fa%2FcQGOqUB2QxbFzONHPS8M31gqKq40%2FG%2Br6FfooA1IVKnOjZEcrDj1rVJcvCZnMiFBEUy0eS2otOV0VWE3YjTiXyE5nkU%2BV9iPlvTBQ4f6FAUEx2Doylf2%2F6Vykmcwmm2vwMHYFQ04dP4msT59Bjs2BsP2PAJ3U7TZaNVcRisr0MoOrQKNE4BrrjNom9wFGvFLkVd9dy7xADf4xXkfuoB5xnHboVsyml1eJjY&X-Amz-Signature=c9efd0362168cfdbe1622207672d8acb847b8a8950baac84aba1894af2abcee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7UVIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEFd9%2Bo2Gy3%2BTIP9TDzCe2lbhAqfPvrTI4WauhmPmEmkAiEA9VEzxdRbIRoX3FtbJ3uO%2BvyLJlmpCuBkxCjw3nJEOKYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNNKpH1NbNiBbFA1jSrcA7yGU4rkzwDTTTifmPWsUamNFY2I7Uw7D2G97Uk15JPawBdrMEmf3ZoWQ2ji3W%2BdelGy8qFgvgYZJ8KpG%2FihwF2sFaOF3jgY%2BTun%2FXxBY618XT6a6j22GBIkmu0i6nUoK1zBc%2FgFAGDMGkoIrjcYC3L1KwcZbDh1pP9QXO4DcV9fXGyw4GrP1EdESZ0NNqvoSy%2FtSuEE7Usnb6%2FcKh96YJ14x8G2U5MZDIU2FJBaH0cRORZel%2FrwRNBDA3wCWlnBInOFIuLfgwzr9q%2BS7Ffe7Iwq20fe2T66iwbrlrvbKfGQF%2FxFbcvx8vctR929PhSHrfpmpYsj5NB528Rk0emhA0Pev%2BQgpaYVC3bUQAuF%2Bqgq5X0tLOLhtkp44Bz5mlZlV60iqFx6OSuD349D8mJdtHzrtVk6KYMGQQ35VUEzQkTntKbdC%2BdIIg%2Fcs78gQKPMB%2FTGnR%2FGgFAHBroWOZNW1bwHcY50XJU%2BKwzFQjTFopRaHSkS%2BH3Kn8V%2FyWX%2BQqDUJaVfoe97qetILdBMmpWp0MQbt%2B67y56IEx%2BJ5HfwdoMFIr8kEGpLVuZ7j4iymeHiV2fUCGref4JZpMgUUBjonQfRCd5fuHkm7Bx7T1rwKMPdHhI5pwWgKzPDpQhiMK%2Fa%2FcQGOqUB2QxbFzONHPS8M31gqKq40%2FG%2Br6FfooA1IVKnOjZEcrDj1rVJcvCZnMiFBEUy0eS2otOV0VWE3YjTiXyE5nkU%2BV9iPlvTBQ4f6FAUEx2Doylf2%2F6Vykmcwmm2vwMHYFQ04dP4msT59Bjs2BsP2PAJ3U7TZaNVcRisr0MoOrQKNE4BrrjNom9wFGvFLkVd9dy7xADf4xXkfuoB5xnHboVsyml1eJjY&X-Amz-Signature=0937c9c4acbcf9fe64fc8847d73052f55afe2d3be03e7797c448e0281fefb8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7UVIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEFd9%2Bo2Gy3%2BTIP9TDzCe2lbhAqfPvrTI4WauhmPmEmkAiEA9VEzxdRbIRoX3FtbJ3uO%2BvyLJlmpCuBkxCjw3nJEOKYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNNKpH1NbNiBbFA1jSrcA7yGU4rkzwDTTTifmPWsUamNFY2I7Uw7D2G97Uk15JPawBdrMEmf3ZoWQ2ji3W%2BdelGy8qFgvgYZJ8KpG%2FihwF2sFaOF3jgY%2BTun%2FXxBY618XT6a6j22GBIkmu0i6nUoK1zBc%2FgFAGDMGkoIrjcYC3L1KwcZbDh1pP9QXO4DcV9fXGyw4GrP1EdESZ0NNqvoSy%2FtSuEE7Usnb6%2FcKh96YJ14x8G2U5MZDIU2FJBaH0cRORZel%2FrwRNBDA3wCWlnBInOFIuLfgwzr9q%2BS7Ffe7Iwq20fe2T66iwbrlrvbKfGQF%2FxFbcvx8vctR929PhSHrfpmpYsj5NB528Rk0emhA0Pev%2BQgpaYVC3bUQAuF%2Bqgq5X0tLOLhtkp44Bz5mlZlV60iqFx6OSuD349D8mJdtHzrtVk6KYMGQQ35VUEzQkTntKbdC%2BdIIg%2Fcs78gQKPMB%2FTGnR%2FGgFAHBroWOZNW1bwHcY50XJU%2BKwzFQjTFopRaHSkS%2BH3Kn8V%2FyWX%2BQqDUJaVfoe97qetILdBMmpWp0MQbt%2B67y56IEx%2BJ5HfwdoMFIr8kEGpLVuZ7j4iymeHiV2fUCGref4JZpMgUUBjonQfRCd5fuHkm7Bx7T1rwKMPdHhI5pwWgKzPDpQhiMK%2Fa%2FcQGOqUB2QxbFzONHPS8M31gqKq40%2FG%2Br6FfooA1IVKnOjZEcrDj1rVJcvCZnMiFBEUy0eS2otOV0VWE3YjTiXyE5nkU%2BV9iPlvTBQ4f6FAUEx2Doylf2%2F6Vykmcwmm2vwMHYFQ04dP4msT59Bjs2BsP2PAJ3U7TZaNVcRisr0MoOrQKNE4BrrjNom9wFGvFLkVd9dy7xADf4xXkfuoB5xnHboVsyml1eJjY&X-Amz-Signature=a514f752fffeb9374a284a0ac92ce2a16bed7a9bad4a454c1aa13815440606de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7UVIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEFd9%2Bo2Gy3%2BTIP9TDzCe2lbhAqfPvrTI4WauhmPmEmkAiEA9VEzxdRbIRoX3FtbJ3uO%2BvyLJlmpCuBkxCjw3nJEOKYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNNKpH1NbNiBbFA1jSrcA7yGU4rkzwDTTTifmPWsUamNFY2I7Uw7D2G97Uk15JPawBdrMEmf3ZoWQ2ji3W%2BdelGy8qFgvgYZJ8KpG%2FihwF2sFaOF3jgY%2BTun%2FXxBY618XT6a6j22GBIkmu0i6nUoK1zBc%2FgFAGDMGkoIrjcYC3L1KwcZbDh1pP9QXO4DcV9fXGyw4GrP1EdESZ0NNqvoSy%2FtSuEE7Usnb6%2FcKh96YJ14x8G2U5MZDIU2FJBaH0cRORZel%2FrwRNBDA3wCWlnBInOFIuLfgwzr9q%2BS7Ffe7Iwq20fe2T66iwbrlrvbKfGQF%2FxFbcvx8vctR929PhSHrfpmpYsj5NB528Rk0emhA0Pev%2BQgpaYVC3bUQAuF%2Bqgq5X0tLOLhtkp44Bz5mlZlV60iqFx6OSuD349D8mJdtHzrtVk6KYMGQQ35VUEzQkTntKbdC%2BdIIg%2Fcs78gQKPMB%2FTGnR%2FGgFAHBroWOZNW1bwHcY50XJU%2BKwzFQjTFopRaHSkS%2BH3Kn8V%2FyWX%2BQqDUJaVfoe97qetILdBMmpWp0MQbt%2B67y56IEx%2BJ5HfwdoMFIr8kEGpLVuZ7j4iymeHiV2fUCGref4JZpMgUUBjonQfRCd5fuHkm7Bx7T1rwKMPdHhI5pwWgKzPDpQhiMK%2Fa%2FcQGOqUB2QxbFzONHPS8M31gqKq40%2FG%2Br6FfooA1IVKnOjZEcrDj1rVJcvCZnMiFBEUy0eS2otOV0VWE3YjTiXyE5nkU%2BV9iPlvTBQ4f6FAUEx2Doylf2%2F6Vykmcwmm2vwMHYFQ04dP4msT59Bjs2BsP2PAJ3U7TZaNVcRisr0MoOrQKNE4BrrjNom9wFGvFLkVd9dy7xADf4xXkfuoB5xnHboVsyml1eJjY&X-Amz-Signature=908296edefc0c37665e33c2d4200410659ef15a28eecd1c17409f65af132651b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7UVIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEFd9%2Bo2Gy3%2BTIP9TDzCe2lbhAqfPvrTI4WauhmPmEmkAiEA9VEzxdRbIRoX3FtbJ3uO%2BvyLJlmpCuBkxCjw3nJEOKYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNNKpH1NbNiBbFA1jSrcA7yGU4rkzwDTTTifmPWsUamNFY2I7Uw7D2G97Uk15JPawBdrMEmf3ZoWQ2ji3W%2BdelGy8qFgvgYZJ8KpG%2FihwF2sFaOF3jgY%2BTun%2FXxBY618XT6a6j22GBIkmu0i6nUoK1zBc%2FgFAGDMGkoIrjcYC3L1KwcZbDh1pP9QXO4DcV9fXGyw4GrP1EdESZ0NNqvoSy%2FtSuEE7Usnb6%2FcKh96YJ14x8G2U5MZDIU2FJBaH0cRORZel%2FrwRNBDA3wCWlnBInOFIuLfgwzr9q%2BS7Ffe7Iwq20fe2T66iwbrlrvbKfGQF%2FxFbcvx8vctR929PhSHrfpmpYsj5NB528Rk0emhA0Pev%2BQgpaYVC3bUQAuF%2Bqgq5X0tLOLhtkp44Bz5mlZlV60iqFx6OSuD349D8mJdtHzrtVk6KYMGQQ35VUEzQkTntKbdC%2BdIIg%2Fcs78gQKPMB%2FTGnR%2FGgFAHBroWOZNW1bwHcY50XJU%2BKwzFQjTFopRaHSkS%2BH3Kn8V%2FyWX%2BQqDUJaVfoe97qetILdBMmpWp0MQbt%2B67y56IEx%2BJ5HfwdoMFIr8kEGpLVuZ7j4iymeHiV2fUCGref4JZpMgUUBjonQfRCd5fuHkm7Bx7T1rwKMPdHhI5pwWgKzPDpQhiMK%2Fa%2FcQGOqUB2QxbFzONHPS8M31gqKq40%2FG%2Br6FfooA1IVKnOjZEcrDj1rVJcvCZnMiFBEUy0eS2otOV0VWE3YjTiXyE5nkU%2BV9iPlvTBQ4f6FAUEx2Doylf2%2F6Vykmcwmm2vwMHYFQ04dP4msT59Bjs2BsP2PAJ3U7TZaNVcRisr0MoOrQKNE4BrrjNom9wFGvFLkVd9dy7xADf4xXkfuoB5xnHboVsyml1eJjY&X-Amz-Signature=90ef6ba133b7859e97aae70b6b82ddbb7f3ebebbcf4f7f7565f80292cb61d005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
