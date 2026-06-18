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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCUIKF4%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsbvgcNRVI5KfwFcB5BGfibDNaec%2BV1sdTOWACk4VT8wIhAN5oPUG3i9wIm5Hj%2FntPSZ%2BR%2BFuOmyh7fXhOtuQW2eyUKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwft5Gm8pciHHIdeacq3AP89Ec6scMg4YM6Ihdn2HZjxfIh56Qb7Xs1nkekJiBPmZ5YmZNsrd1b60d%2FR3%2F5ImJH9sxNFMDb4ITslAkaSDucvQxwOKiCTILoiUBqsmSh2HESIsBrUW3we592cLfrt7awotIc1n85IQWiYk4HL2BPXEM7IHV7zN9aV8y37AM9dYEgQ%2F5vA1mjlDyjtO%2BvlN%2B9a2JNV6JBdjh3%2FNUyoYAjVrRngP3we9Sv281UlOx8IJeB2bRkAFA5vmjsieKGA8%2BFh8azgEIemaMccJ4NmRRQyKVc5vvwE3mGWhK3WLMC9LnHXC3nVHqsvyYTNpnEMKSbtg2gVzf0fdmSwUIZttYp2vZSpLu8U7N%2FyHCUQQZL2bgfwM77Sl0nlQ4o%2FBUwKTCOUjHYT1xZR4nzUDdAa%2FIfdVXzIGRJDhtZYFvOVHeTpojZVifCrIb%2BhKyYTxyTqldKwZ7SOL3L2EmVq2QdSVkZOYahTPqG96dpIpVggxi7UAzJqhTYe0BXcRK9rUnOHlEYlk8G%2FjJHSj%2BmdhNv7dtG6Cg4eo0DRi8oWAHvec6adIN4TnVNgzR%2FOmSMiN70nfaKu4XoMqL3h%2FAUjWyvbpg7lKE%2Bhi6lRCwC1Efm9kqfpjBCI6JxSdQdcZk9NzCYsc3RBjqkAVDDeWoRDBw3fltnAc3QyCD0BiAUzm1YLCEQ%2FPQ8pwlTkKnkgRI2Fr1LWqsTwFixJw7UlRg9TbD8k65MMDsFQtdhJ2AlAvTnDX%2FnSXGWUoIQDeieB3tYwBW6MP5AI8fd2Ql7aLmUuXuoKpaffqKA1PB%2Fzgm%2FEG0TQs%2F6epURmKA01m9JbOheqUW6XJpzPVB6BRSqGQg2%2FoS1wZXp6X8WdGFW4tJe&X-Amz-Signature=edc861dd9af5313951fc8fa48a57c0812ce08192a2f22ee6f4feb533ea0ceed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZCOKZ7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLptbjbl%2FOltdXVVMcK9VV65vFeVtg9iMDGuVZPCSazgIhAJK%2BG0oPgf6hJ8s3bCMSH%2BYRiPfb9fgd9fB9UmRMWblFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3zAn9FWnV8iuJsYAq3AMIzdEqV5PEwsIiVWnygOk%2B0POHVW%2BQy%2FpbBFbNFbJhZLfkIFF8XiuZ%2BIdggKYgsCxm2BewkWAkgjnh%2BKWO6zIzYdPrKbsZJHMIpY63wRlzZTdm2NS6r8Zj41xopqBrcg9ykxtSEdUBliyWLsEwQjmdpNlXa%2BzMFMub6O651s3ReoS4Cu%2FtxBC0%2FJ2BAC3W65pQgs2RSRw1aEvaYaJG0g%2BuyAB2AE1usHPNbpXeo9%2FqxNZJ2fBYXcban0x8bgNwBo4rEG34vG%2FXM0FAYqQJJu%2FzrB8%2F30D7fWdZFNFuCpjiCEBs4P7viiF5y963uxjjE%2FCpXNssa3xu6dLB1UTc6DciJ2xp3u7Cv8SvXTb7GvULv9kWGrjNlISn28V1KF4j%2BnuGuzm1BeQSF9WsHbSZIOAsEDE5IrIOY7IPU%2B9A%2Bv8V7hsFlRJqSH4fXbzSFZoHR7HBbCdpKFO56E2%2F4e9hY6VotYk%2FmZ0YoLkz2MjHXpctpySVGx4awlRcazHGMwfLNeT5pO3yquZi19PEEn7Cdlo8NEJ51D64qSWhS8CmwSPCCbIF9FEn4%2FiWU5eguiYUN7bAvbehoruNsL5PL2TDUdzXrwKtcylAz7tDBA%2BYuRrqlyYVBFPAM9MFLVxwrzCGsc3RBjqkAbUMlOuUm3nPxJLSDvART1j5yujkCSWy6nneQKf98i9P8ZvgoAUPOwC2zGh9gxtXMpFJPinjVcVVrQSjmlvEtfv9KFMGuZXytnIdfpa8PmU3mSxVzwvWW2wZAnVYQz5%2BQAnYyrhDemS7cogJttU5bF%2FZSstXFS7NO%2FftNVoJpHVhaQLpo1ExMPw4ps%2BKzzeqSy5gUrz65Ms4iWPfF7oHvd%2FMHVZL&X-Amz-Signature=345eca6d5e4422d52e9432b6cfa0e79b4b2b44353bbda66670a3fd978bd3e48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZCOKZ7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLptbjbl%2FOltdXVVMcK9VV65vFeVtg9iMDGuVZPCSazgIhAJK%2BG0oPgf6hJ8s3bCMSH%2BYRiPfb9fgd9fB9UmRMWblFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3zAn9FWnV8iuJsYAq3AMIzdEqV5PEwsIiVWnygOk%2B0POHVW%2BQy%2FpbBFbNFbJhZLfkIFF8XiuZ%2BIdggKYgsCxm2BewkWAkgjnh%2BKWO6zIzYdPrKbsZJHMIpY63wRlzZTdm2NS6r8Zj41xopqBrcg9ykxtSEdUBliyWLsEwQjmdpNlXa%2BzMFMub6O651s3ReoS4Cu%2FtxBC0%2FJ2BAC3W65pQgs2RSRw1aEvaYaJG0g%2BuyAB2AE1usHPNbpXeo9%2FqxNZJ2fBYXcban0x8bgNwBo4rEG34vG%2FXM0FAYqQJJu%2FzrB8%2F30D7fWdZFNFuCpjiCEBs4P7viiF5y963uxjjE%2FCpXNssa3xu6dLB1UTc6DciJ2xp3u7Cv8SvXTb7GvULv9kWGrjNlISn28V1KF4j%2BnuGuzm1BeQSF9WsHbSZIOAsEDE5IrIOY7IPU%2B9A%2Bv8V7hsFlRJqSH4fXbzSFZoHR7HBbCdpKFO56E2%2F4e9hY6VotYk%2FmZ0YoLkz2MjHXpctpySVGx4awlRcazHGMwfLNeT5pO3yquZi19PEEn7Cdlo8NEJ51D64qSWhS8CmwSPCCbIF9FEn4%2FiWU5eguiYUN7bAvbehoruNsL5PL2TDUdzXrwKtcylAz7tDBA%2BYuRrqlyYVBFPAM9MFLVxwrzCGsc3RBjqkAbUMlOuUm3nPxJLSDvART1j5yujkCSWy6nneQKf98i9P8ZvgoAUPOwC2zGh9gxtXMpFJPinjVcVVrQSjmlvEtfv9KFMGuZXytnIdfpa8PmU3mSxVzwvWW2wZAnVYQz5%2BQAnYyrhDemS7cogJttU5bF%2FZSstXFS7NO%2FftNVoJpHVhaQLpo1ExMPw4ps%2BKzzeqSy5gUrz65Ms4iWPfF7oHvd%2FMHVZL&X-Amz-Signature=1bdb1d8a87143ede60fff9ac45ae4870eb6043733f739b523cf0afd551c183e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZCOKZ7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLptbjbl%2FOltdXVVMcK9VV65vFeVtg9iMDGuVZPCSazgIhAJK%2BG0oPgf6hJ8s3bCMSH%2BYRiPfb9fgd9fB9UmRMWblFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3zAn9FWnV8iuJsYAq3AMIzdEqV5PEwsIiVWnygOk%2B0POHVW%2BQy%2FpbBFbNFbJhZLfkIFF8XiuZ%2BIdggKYgsCxm2BewkWAkgjnh%2BKWO6zIzYdPrKbsZJHMIpY63wRlzZTdm2NS6r8Zj41xopqBrcg9ykxtSEdUBliyWLsEwQjmdpNlXa%2BzMFMub6O651s3ReoS4Cu%2FtxBC0%2FJ2BAC3W65pQgs2RSRw1aEvaYaJG0g%2BuyAB2AE1usHPNbpXeo9%2FqxNZJ2fBYXcban0x8bgNwBo4rEG34vG%2FXM0FAYqQJJu%2FzrB8%2F30D7fWdZFNFuCpjiCEBs4P7viiF5y963uxjjE%2FCpXNssa3xu6dLB1UTc6DciJ2xp3u7Cv8SvXTb7GvULv9kWGrjNlISn28V1KF4j%2BnuGuzm1BeQSF9WsHbSZIOAsEDE5IrIOY7IPU%2B9A%2Bv8V7hsFlRJqSH4fXbzSFZoHR7HBbCdpKFO56E2%2F4e9hY6VotYk%2FmZ0YoLkz2MjHXpctpySVGx4awlRcazHGMwfLNeT5pO3yquZi19PEEn7Cdlo8NEJ51D64qSWhS8CmwSPCCbIF9FEn4%2FiWU5eguiYUN7bAvbehoruNsL5PL2TDUdzXrwKtcylAz7tDBA%2BYuRrqlyYVBFPAM9MFLVxwrzCGsc3RBjqkAbUMlOuUm3nPxJLSDvART1j5yujkCSWy6nneQKf98i9P8ZvgoAUPOwC2zGh9gxtXMpFJPinjVcVVrQSjmlvEtfv9KFMGuZXytnIdfpa8PmU3mSxVzwvWW2wZAnVYQz5%2BQAnYyrhDemS7cogJttU5bF%2FZSstXFS7NO%2FftNVoJpHVhaQLpo1ExMPw4ps%2BKzzeqSy5gUrz65Ms4iWPfF7oHvd%2FMHVZL&X-Amz-Signature=1576a89e7e61fdeb21936a23b88cd275fd71312cd2270d4f96105923287dc8dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZCOKZ7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLptbjbl%2FOltdXVVMcK9VV65vFeVtg9iMDGuVZPCSazgIhAJK%2BG0oPgf6hJ8s3bCMSH%2BYRiPfb9fgd9fB9UmRMWblFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3zAn9FWnV8iuJsYAq3AMIzdEqV5PEwsIiVWnygOk%2B0POHVW%2BQy%2FpbBFbNFbJhZLfkIFF8XiuZ%2BIdggKYgsCxm2BewkWAkgjnh%2BKWO6zIzYdPrKbsZJHMIpY63wRlzZTdm2NS6r8Zj41xopqBrcg9ykxtSEdUBliyWLsEwQjmdpNlXa%2BzMFMub6O651s3ReoS4Cu%2FtxBC0%2FJ2BAC3W65pQgs2RSRw1aEvaYaJG0g%2BuyAB2AE1usHPNbpXeo9%2FqxNZJ2fBYXcban0x8bgNwBo4rEG34vG%2FXM0FAYqQJJu%2FzrB8%2F30D7fWdZFNFuCpjiCEBs4P7viiF5y963uxjjE%2FCpXNssa3xu6dLB1UTc6DciJ2xp3u7Cv8SvXTb7GvULv9kWGrjNlISn28V1KF4j%2BnuGuzm1BeQSF9WsHbSZIOAsEDE5IrIOY7IPU%2B9A%2Bv8V7hsFlRJqSH4fXbzSFZoHR7HBbCdpKFO56E2%2F4e9hY6VotYk%2FmZ0YoLkz2MjHXpctpySVGx4awlRcazHGMwfLNeT5pO3yquZi19PEEn7Cdlo8NEJ51D64qSWhS8CmwSPCCbIF9FEn4%2FiWU5eguiYUN7bAvbehoruNsL5PL2TDUdzXrwKtcylAz7tDBA%2BYuRrqlyYVBFPAM9MFLVxwrzCGsc3RBjqkAbUMlOuUm3nPxJLSDvART1j5yujkCSWy6nneQKf98i9P8ZvgoAUPOwC2zGh9gxtXMpFJPinjVcVVrQSjmlvEtfv9KFMGuZXytnIdfpa8PmU3mSxVzwvWW2wZAnVYQz5%2BQAnYyrhDemS7cogJttU5bF%2FZSstXFS7NO%2FftNVoJpHVhaQLpo1ExMPw4ps%2BKzzeqSy5gUrz65Ms4iWPfF7oHvd%2FMHVZL&X-Amz-Signature=c875c22095259dc60e996fd934a2cc9580f6672bd3f02e5d48585347c01d5a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZCOKZ7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLptbjbl%2FOltdXVVMcK9VV65vFeVtg9iMDGuVZPCSazgIhAJK%2BG0oPgf6hJ8s3bCMSH%2BYRiPfb9fgd9fB9UmRMWblFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3zAn9FWnV8iuJsYAq3AMIzdEqV5PEwsIiVWnygOk%2B0POHVW%2BQy%2FpbBFbNFbJhZLfkIFF8XiuZ%2BIdggKYgsCxm2BewkWAkgjnh%2BKWO6zIzYdPrKbsZJHMIpY63wRlzZTdm2NS6r8Zj41xopqBrcg9ykxtSEdUBliyWLsEwQjmdpNlXa%2BzMFMub6O651s3ReoS4Cu%2FtxBC0%2FJ2BAC3W65pQgs2RSRw1aEvaYaJG0g%2BuyAB2AE1usHPNbpXeo9%2FqxNZJ2fBYXcban0x8bgNwBo4rEG34vG%2FXM0FAYqQJJu%2FzrB8%2F30D7fWdZFNFuCpjiCEBs4P7viiF5y963uxjjE%2FCpXNssa3xu6dLB1UTc6DciJ2xp3u7Cv8SvXTb7GvULv9kWGrjNlISn28V1KF4j%2BnuGuzm1BeQSF9WsHbSZIOAsEDE5IrIOY7IPU%2B9A%2Bv8V7hsFlRJqSH4fXbzSFZoHR7HBbCdpKFO56E2%2F4e9hY6VotYk%2FmZ0YoLkz2MjHXpctpySVGx4awlRcazHGMwfLNeT5pO3yquZi19PEEn7Cdlo8NEJ51D64qSWhS8CmwSPCCbIF9FEn4%2FiWU5eguiYUN7bAvbehoruNsL5PL2TDUdzXrwKtcylAz7tDBA%2BYuRrqlyYVBFPAM9MFLVxwrzCGsc3RBjqkAbUMlOuUm3nPxJLSDvART1j5yujkCSWy6nneQKf98i9P8ZvgoAUPOwC2zGh9gxtXMpFJPinjVcVVrQSjmlvEtfv9KFMGuZXytnIdfpa8PmU3mSxVzwvWW2wZAnVYQz5%2BQAnYyrhDemS7cogJttU5bF%2FZSstXFS7NO%2FftNVoJpHVhaQLpo1ExMPw4ps%2BKzzeqSy5gUrz65Ms4iWPfF7oHvd%2FMHVZL&X-Amz-Signature=4872b66cc3548d2011656db108e3380b0cfc0b437e0967173b3a6d7093905bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZCOKZ7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLptbjbl%2FOltdXVVMcK9VV65vFeVtg9iMDGuVZPCSazgIhAJK%2BG0oPgf6hJ8s3bCMSH%2BYRiPfb9fgd9fB9UmRMWblFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3zAn9FWnV8iuJsYAq3AMIzdEqV5PEwsIiVWnygOk%2B0POHVW%2BQy%2FpbBFbNFbJhZLfkIFF8XiuZ%2BIdggKYgsCxm2BewkWAkgjnh%2BKWO6zIzYdPrKbsZJHMIpY63wRlzZTdm2NS6r8Zj41xopqBrcg9ykxtSEdUBliyWLsEwQjmdpNlXa%2BzMFMub6O651s3ReoS4Cu%2FtxBC0%2FJ2BAC3W65pQgs2RSRw1aEvaYaJG0g%2BuyAB2AE1usHPNbpXeo9%2FqxNZJ2fBYXcban0x8bgNwBo4rEG34vG%2FXM0FAYqQJJu%2FzrB8%2F30D7fWdZFNFuCpjiCEBs4P7viiF5y963uxjjE%2FCpXNssa3xu6dLB1UTc6DciJ2xp3u7Cv8SvXTb7GvULv9kWGrjNlISn28V1KF4j%2BnuGuzm1BeQSF9WsHbSZIOAsEDE5IrIOY7IPU%2B9A%2Bv8V7hsFlRJqSH4fXbzSFZoHR7HBbCdpKFO56E2%2F4e9hY6VotYk%2FmZ0YoLkz2MjHXpctpySVGx4awlRcazHGMwfLNeT5pO3yquZi19PEEn7Cdlo8NEJ51D64qSWhS8CmwSPCCbIF9FEn4%2FiWU5eguiYUN7bAvbehoruNsL5PL2TDUdzXrwKtcylAz7tDBA%2BYuRrqlyYVBFPAM9MFLVxwrzCGsc3RBjqkAbUMlOuUm3nPxJLSDvART1j5yujkCSWy6nneQKf98i9P8ZvgoAUPOwC2zGh9gxtXMpFJPinjVcVVrQSjmlvEtfv9KFMGuZXytnIdfpa8PmU3mSxVzwvWW2wZAnVYQz5%2BQAnYyrhDemS7cogJttU5bF%2FZSstXFS7NO%2FftNVoJpHVhaQLpo1ExMPw4ps%2BKzzeqSy5gUrz65Ms4iWPfF7oHvd%2FMHVZL&X-Amz-Signature=d02543f45403c531d1b200462debf683eb922f5267c699b92f1dd5c937541695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZCOKZ7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLptbjbl%2FOltdXVVMcK9VV65vFeVtg9iMDGuVZPCSazgIhAJK%2BG0oPgf6hJ8s3bCMSH%2BYRiPfb9fgd9fB9UmRMWblFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3zAn9FWnV8iuJsYAq3AMIzdEqV5PEwsIiVWnygOk%2B0POHVW%2BQy%2FpbBFbNFbJhZLfkIFF8XiuZ%2BIdggKYgsCxm2BewkWAkgjnh%2BKWO6zIzYdPrKbsZJHMIpY63wRlzZTdm2NS6r8Zj41xopqBrcg9ykxtSEdUBliyWLsEwQjmdpNlXa%2BzMFMub6O651s3ReoS4Cu%2FtxBC0%2FJ2BAC3W65pQgs2RSRw1aEvaYaJG0g%2BuyAB2AE1usHPNbpXeo9%2FqxNZJ2fBYXcban0x8bgNwBo4rEG34vG%2FXM0FAYqQJJu%2FzrB8%2F30D7fWdZFNFuCpjiCEBs4P7viiF5y963uxjjE%2FCpXNssa3xu6dLB1UTc6DciJ2xp3u7Cv8SvXTb7GvULv9kWGrjNlISn28V1KF4j%2BnuGuzm1BeQSF9WsHbSZIOAsEDE5IrIOY7IPU%2B9A%2Bv8V7hsFlRJqSH4fXbzSFZoHR7HBbCdpKFO56E2%2F4e9hY6VotYk%2FmZ0YoLkz2MjHXpctpySVGx4awlRcazHGMwfLNeT5pO3yquZi19PEEn7Cdlo8NEJ51D64qSWhS8CmwSPCCbIF9FEn4%2FiWU5eguiYUN7bAvbehoruNsL5PL2TDUdzXrwKtcylAz7tDBA%2BYuRrqlyYVBFPAM9MFLVxwrzCGsc3RBjqkAbUMlOuUm3nPxJLSDvART1j5yujkCSWy6nneQKf98i9P8ZvgoAUPOwC2zGh9gxtXMpFJPinjVcVVrQSjmlvEtfv9KFMGuZXytnIdfpa8PmU3mSxVzwvWW2wZAnVYQz5%2BQAnYyrhDemS7cogJttU5bF%2FZSstXFS7NO%2FftNVoJpHVhaQLpo1ExMPw4ps%2BKzzeqSy5gUrz65Ms4iWPfF7oHvd%2FMHVZL&X-Amz-Signature=f2b2b84a7c87a5ba4a8b25221029f2d50dd2977af7bebfa0fc822190be6b0e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZCOKZ7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLptbjbl%2FOltdXVVMcK9VV65vFeVtg9iMDGuVZPCSazgIhAJK%2BG0oPgf6hJ8s3bCMSH%2BYRiPfb9fgd9fB9UmRMWblFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3zAn9FWnV8iuJsYAq3AMIzdEqV5PEwsIiVWnygOk%2B0POHVW%2BQy%2FpbBFbNFbJhZLfkIFF8XiuZ%2BIdggKYgsCxm2BewkWAkgjnh%2BKWO6zIzYdPrKbsZJHMIpY63wRlzZTdm2NS6r8Zj41xopqBrcg9ykxtSEdUBliyWLsEwQjmdpNlXa%2BzMFMub6O651s3ReoS4Cu%2FtxBC0%2FJ2BAC3W65pQgs2RSRw1aEvaYaJG0g%2BuyAB2AE1usHPNbpXeo9%2FqxNZJ2fBYXcban0x8bgNwBo4rEG34vG%2FXM0FAYqQJJu%2FzrB8%2F30D7fWdZFNFuCpjiCEBs4P7viiF5y963uxjjE%2FCpXNssa3xu6dLB1UTc6DciJ2xp3u7Cv8SvXTb7GvULv9kWGrjNlISn28V1KF4j%2BnuGuzm1BeQSF9WsHbSZIOAsEDE5IrIOY7IPU%2B9A%2Bv8V7hsFlRJqSH4fXbzSFZoHR7HBbCdpKFO56E2%2F4e9hY6VotYk%2FmZ0YoLkz2MjHXpctpySVGx4awlRcazHGMwfLNeT5pO3yquZi19PEEn7Cdlo8NEJ51D64qSWhS8CmwSPCCbIF9FEn4%2FiWU5eguiYUN7bAvbehoruNsL5PL2TDUdzXrwKtcylAz7tDBA%2BYuRrqlyYVBFPAM9MFLVxwrzCGsc3RBjqkAbUMlOuUm3nPxJLSDvART1j5yujkCSWy6nneQKf98i9P8ZvgoAUPOwC2zGh9gxtXMpFJPinjVcVVrQSjmlvEtfv9KFMGuZXytnIdfpa8PmU3mSxVzwvWW2wZAnVYQz5%2BQAnYyrhDemS7cogJttU5bF%2FZSstXFS7NO%2FftNVoJpHVhaQLpo1ExMPw4ps%2BKzzeqSy5gUrz65Ms4iWPfF7oHvd%2FMHVZL&X-Amz-Signature=b8c587a9014efe56236816a385cbf6cafa897310013e2eee3ea95d2f7503c131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZCOKZ7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLptbjbl%2FOltdXVVMcK9VV65vFeVtg9iMDGuVZPCSazgIhAJK%2BG0oPgf6hJ8s3bCMSH%2BYRiPfb9fgd9fB9UmRMWblFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3zAn9FWnV8iuJsYAq3AMIzdEqV5PEwsIiVWnygOk%2B0POHVW%2BQy%2FpbBFbNFbJhZLfkIFF8XiuZ%2BIdggKYgsCxm2BewkWAkgjnh%2BKWO6zIzYdPrKbsZJHMIpY63wRlzZTdm2NS6r8Zj41xopqBrcg9ykxtSEdUBliyWLsEwQjmdpNlXa%2BzMFMub6O651s3ReoS4Cu%2FtxBC0%2FJ2BAC3W65pQgs2RSRw1aEvaYaJG0g%2BuyAB2AE1usHPNbpXeo9%2FqxNZJ2fBYXcban0x8bgNwBo4rEG34vG%2FXM0FAYqQJJu%2FzrB8%2F30D7fWdZFNFuCpjiCEBs4P7viiF5y963uxjjE%2FCpXNssa3xu6dLB1UTc6DciJ2xp3u7Cv8SvXTb7GvULv9kWGrjNlISn28V1KF4j%2BnuGuzm1BeQSF9WsHbSZIOAsEDE5IrIOY7IPU%2B9A%2Bv8V7hsFlRJqSH4fXbzSFZoHR7HBbCdpKFO56E2%2F4e9hY6VotYk%2FmZ0YoLkz2MjHXpctpySVGx4awlRcazHGMwfLNeT5pO3yquZi19PEEn7Cdlo8NEJ51D64qSWhS8CmwSPCCbIF9FEn4%2FiWU5eguiYUN7bAvbehoruNsL5PL2TDUdzXrwKtcylAz7tDBA%2BYuRrqlyYVBFPAM9MFLVxwrzCGsc3RBjqkAbUMlOuUm3nPxJLSDvART1j5yujkCSWy6nneQKf98i9P8ZvgoAUPOwC2zGh9gxtXMpFJPinjVcVVrQSjmlvEtfv9KFMGuZXytnIdfpa8PmU3mSxVzwvWW2wZAnVYQz5%2BQAnYyrhDemS7cogJttU5bF%2FZSstXFS7NO%2FftNVoJpHVhaQLpo1ExMPw4ps%2BKzzeqSy5gUrz65Ms4iWPfF7oHvd%2FMHVZL&X-Amz-Signature=a864a1eb58ff9c1782bbe0c1824d3f2bcaadbbe1ff271fbf56e208bb7593d042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZCOKZ7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLptbjbl%2FOltdXVVMcK9VV65vFeVtg9iMDGuVZPCSazgIhAJK%2BG0oPgf6hJ8s3bCMSH%2BYRiPfb9fgd9fB9UmRMWblFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3zAn9FWnV8iuJsYAq3AMIzdEqV5PEwsIiVWnygOk%2B0POHVW%2BQy%2FpbBFbNFbJhZLfkIFF8XiuZ%2BIdggKYgsCxm2BewkWAkgjnh%2BKWO6zIzYdPrKbsZJHMIpY63wRlzZTdm2NS6r8Zj41xopqBrcg9ykxtSEdUBliyWLsEwQjmdpNlXa%2BzMFMub6O651s3ReoS4Cu%2FtxBC0%2FJ2BAC3W65pQgs2RSRw1aEvaYaJG0g%2BuyAB2AE1usHPNbpXeo9%2FqxNZJ2fBYXcban0x8bgNwBo4rEG34vG%2FXM0FAYqQJJu%2FzrB8%2F30D7fWdZFNFuCpjiCEBs4P7viiF5y963uxjjE%2FCpXNssa3xu6dLB1UTc6DciJ2xp3u7Cv8SvXTb7GvULv9kWGrjNlISn28V1KF4j%2BnuGuzm1BeQSF9WsHbSZIOAsEDE5IrIOY7IPU%2B9A%2Bv8V7hsFlRJqSH4fXbzSFZoHR7HBbCdpKFO56E2%2F4e9hY6VotYk%2FmZ0YoLkz2MjHXpctpySVGx4awlRcazHGMwfLNeT5pO3yquZi19PEEn7Cdlo8NEJ51D64qSWhS8CmwSPCCbIF9FEn4%2FiWU5eguiYUN7bAvbehoruNsL5PL2TDUdzXrwKtcylAz7tDBA%2BYuRrqlyYVBFPAM9MFLVxwrzCGsc3RBjqkAbUMlOuUm3nPxJLSDvART1j5yujkCSWy6nneQKf98i9P8ZvgoAUPOwC2zGh9gxtXMpFJPinjVcVVrQSjmlvEtfv9KFMGuZXytnIdfpa8PmU3mSxVzwvWW2wZAnVYQz5%2BQAnYyrhDemS7cogJttU5bF%2FZSstXFS7NO%2FftNVoJpHVhaQLpo1ExMPw4ps%2BKzzeqSy5gUrz65Ms4iWPfF7oHvd%2FMHVZL&X-Amz-Signature=c875c22095259dc60e996fd934a2cc9580f6672bd3f02e5d48585347c01d5a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
