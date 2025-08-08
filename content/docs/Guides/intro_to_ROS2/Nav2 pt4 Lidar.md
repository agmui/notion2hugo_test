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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXIJEWC2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDQItvvZmMJdq475ZKaSV7cCVG1lZPp5CWU0QWPaOA9SAIgLKR%2FcAJuznGobcV5tGGWymHEjF5OozbuY8BoWsis29kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FGoGn7BQRGa%2F0royrcA6h%2FziMM5YibHyzVM9i5z6C2G1zwDmTnEULwd5SVGqzx6faaYm7nPXAUjQlIDtq%2F6zAkbcrH6VNqsqUIdmDoNfyu65bhHe%2F3fy%2FytJGGe53qR4hO3SUKZSIHeb5CIW%2Fgj4NOxKiGOEPxIn2QtD7lX7%2FRcZKjBEME1ht8y1xNP8pbfmf60N7hwi6LvU8EolzX6Bnwui7SEgheNzJ0gwfS7oHEAhXC6Ie9zAu3yJtO8ubDXfsQL2h6hSJuCTnuBiTUaizkWIhgL30AW9SeCf14pY%2B0B03WKWIPPEmkxj0aiQPDKHyo1KngOEOr%2BTz0WSs5xfngjGo6u6ZyaTYHxuwYcjvwxWBuTihwM%2BhJFpHhzmsDZYkCCS%2Fc5oPFxZcIJfXOnotIBiP4lYwsQQxpPBjVegC8UeAf00xL3zidHgjOD7CYfVka71IYErFryv0uc7Czucf90WBkAvq9YsZU9ErZ4keAhvCunjQZTc2SeOstbkVm90vzEW1RusCY%2Bl8mXHQZeaS3uV8eSoLg%2FviNMlsFQ9EaR7EOUN1DudVevoe6hP4uZdteoQb6kG1ipcJaBLohsaCm1DVh4EoVvhDX7TzFE4xaev6E1S%2B9056MbX8TsekBhLpHEmu%2FhMu8kHc4MMbs1sQGOqUBueg5hTkv%2BXQebJi6uVwXMIHacNzuzq1dxHPBOafQ8L4LVcKnCrW2Pmb77ZgF82Iu87wp5BUPB1g0Qxegzl%2FCLVo3PRB0p36abSmtYfzYd0dRVUrmtVI7OSqBXs2hoHsXf4mpo1dShpmLYVfGYZn8%2BU2elS%2BkgrZhsx9N2l8NfRLFYLIHKKDFh%2B4nDh%2BhY8IA2L%2FQwqHqr2yaIXiBMSpmM%2BP5eQby&X-Amz-Signature=9d832cf67319175c75bf92a457f1815485cff9935fe00cbb2eab2866b8be01b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475GBIPA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDVW5Rqg29qbOhbMB2NVzeRp3PR%2Byz%2BqwDPtCgzka%2F51AiAQUYg0qoUrWcuhn59VdJJRmj%2FWY%2F8o8WRsTOPQ3%2B3xXCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuV%2FBapVXRJU6KVBKtwD4zUN5PuSbAlSflm2Bxi4y9c%2FpYp8x%2FTtqMJy6dHpKh4ESY4VPul6C3kJ9jxtrOKSO0QIQ35EfvuypwtDSWBKUK7w7NWTVeahC5RAxJevejXCyHkflqlUr8o97KYiUer7rMcq8AFrx8gYJbQ3p3A2p1n8k3Ieh%2BdkmTTyjT6njeCjZE6nsGC%2BSeISweJMTktxdhohvMgGK0wjDlqQfB6vqNwhXc9k1W299gjmv%2FOLBXuiKebsmxyI1oc5LuHsCOeBvvP16Boui8Fm5WbOW%2BR7cVOd%2B6FWztrK0%2B9dyQ0dm9Fut1c%2FJRNa9oydvGzDmgp4NGRxGeGQTKCr2%2Ffn%2Fqqv2FQ74cvshIOqTM9ahDg8lbGx8Yo9oC76zWHtK%2FqPr8qzGoihs35SFjcRxG5v35XgLHgygHDhmp6tI%2F14OHD8idGWhmsSuXJs4gekqXn4tdhSem9PscDazpbJ%2FmwgfIxd7nD%2BhHyiyHv4Z8csTWO7w7wvtLYQ8utTu3b2lQKbEoSNLSLy13A4G%2F5F6WGKADp05IluCtqNc6Oke8p7hQrK9ZNAZTWfZOYMTvzpCGsZkSb%2ByOBRpdWEwB%2Bzni%2F6ubcB%2ByT8Nq2nF6aw3IG7QTy76v6w8xpqLsUjmbb0DNcwke3WxAY6pgG0CSl7UEks0V7rBMN%2FiJSNX80LRvqHbfe8Q0l5yO7ys1Bg5wf582S3n8hnJuzsgzPcsn7Pac%2BFDyzGKsFeGJ7MfP0Kl%2Bt1EdUgNvCl5tDF0hjVpkalB1dQEy6m1NGSPxiVSf1XQRJQMvQVYk5lLr%2Bxd27MiAfC%2Bm%2BPcGpGC0fUYqlbGefjJgGkSZzT3a2jz6R2KAckzDbLUrWg2Ru0j3I9ebwxofrW&X-Amz-Signature=33026ccdb938bad51b77dca4aaba8c3105f41607478f5318490511fee42c6d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475GBIPA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDVW5Rqg29qbOhbMB2NVzeRp3PR%2Byz%2BqwDPtCgzka%2F51AiAQUYg0qoUrWcuhn59VdJJRmj%2FWY%2F8o8WRsTOPQ3%2B3xXCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuV%2FBapVXRJU6KVBKtwD4zUN5PuSbAlSflm2Bxi4y9c%2FpYp8x%2FTtqMJy6dHpKh4ESY4VPul6C3kJ9jxtrOKSO0QIQ35EfvuypwtDSWBKUK7w7NWTVeahC5RAxJevejXCyHkflqlUr8o97KYiUer7rMcq8AFrx8gYJbQ3p3A2p1n8k3Ieh%2BdkmTTyjT6njeCjZE6nsGC%2BSeISweJMTktxdhohvMgGK0wjDlqQfB6vqNwhXc9k1W299gjmv%2FOLBXuiKebsmxyI1oc5LuHsCOeBvvP16Boui8Fm5WbOW%2BR7cVOd%2B6FWztrK0%2B9dyQ0dm9Fut1c%2FJRNa9oydvGzDmgp4NGRxGeGQTKCr2%2Ffn%2Fqqv2FQ74cvshIOqTM9ahDg8lbGx8Yo9oC76zWHtK%2FqPr8qzGoihs35SFjcRxG5v35XgLHgygHDhmp6tI%2F14OHD8idGWhmsSuXJs4gekqXn4tdhSem9PscDazpbJ%2FmwgfIxd7nD%2BhHyiyHv4Z8csTWO7w7wvtLYQ8utTu3b2lQKbEoSNLSLy13A4G%2F5F6WGKADp05IluCtqNc6Oke8p7hQrK9ZNAZTWfZOYMTvzpCGsZkSb%2ByOBRpdWEwB%2Bzni%2F6ubcB%2ByT8Nq2nF6aw3IG7QTy76v6w8xpqLsUjmbb0DNcwke3WxAY6pgG0CSl7UEks0V7rBMN%2FiJSNX80LRvqHbfe8Q0l5yO7ys1Bg5wf582S3n8hnJuzsgzPcsn7Pac%2BFDyzGKsFeGJ7MfP0Kl%2Bt1EdUgNvCl5tDF0hjVpkalB1dQEy6m1NGSPxiVSf1XQRJQMvQVYk5lLr%2Bxd27MiAfC%2Bm%2BPcGpGC0fUYqlbGefjJgGkSZzT3a2jz6R2KAckzDbLUrWg2Ru0j3I9ebwxofrW&X-Amz-Signature=e4d58643832d06f83aaabea4136e20c16508a78223939282f3674db8d48e87ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475GBIPA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDVW5Rqg29qbOhbMB2NVzeRp3PR%2Byz%2BqwDPtCgzka%2F51AiAQUYg0qoUrWcuhn59VdJJRmj%2FWY%2F8o8WRsTOPQ3%2B3xXCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuV%2FBapVXRJU6KVBKtwD4zUN5PuSbAlSflm2Bxi4y9c%2FpYp8x%2FTtqMJy6dHpKh4ESY4VPul6C3kJ9jxtrOKSO0QIQ35EfvuypwtDSWBKUK7w7NWTVeahC5RAxJevejXCyHkflqlUr8o97KYiUer7rMcq8AFrx8gYJbQ3p3A2p1n8k3Ieh%2BdkmTTyjT6njeCjZE6nsGC%2BSeISweJMTktxdhohvMgGK0wjDlqQfB6vqNwhXc9k1W299gjmv%2FOLBXuiKebsmxyI1oc5LuHsCOeBvvP16Boui8Fm5WbOW%2BR7cVOd%2B6FWztrK0%2B9dyQ0dm9Fut1c%2FJRNa9oydvGzDmgp4NGRxGeGQTKCr2%2Ffn%2Fqqv2FQ74cvshIOqTM9ahDg8lbGx8Yo9oC76zWHtK%2FqPr8qzGoihs35SFjcRxG5v35XgLHgygHDhmp6tI%2F14OHD8idGWhmsSuXJs4gekqXn4tdhSem9PscDazpbJ%2FmwgfIxd7nD%2BhHyiyHv4Z8csTWO7w7wvtLYQ8utTu3b2lQKbEoSNLSLy13A4G%2F5F6WGKADp05IluCtqNc6Oke8p7hQrK9ZNAZTWfZOYMTvzpCGsZkSb%2ByOBRpdWEwB%2Bzni%2F6ubcB%2ByT8Nq2nF6aw3IG7QTy76v6w8xpqLsUjmbb0DNcwke3WxAY6pgG0CSl7UEks0V7rBMN%2FiJSNX80LRvqHbfe8Q0l5yO7ys1Bg5wf582S3n8hnJuzsgzPcsn7Pac%2BFDyzGKsFeGJ7MfP0Kl%2Bt1EdUgNvCl5tDF0hjVpkalB1dQEy6m1NGSPxiVSf1XQRJQMvQVYk5lLr%2Bxd27MiAfC%2Bm%2BPcGpGC0fUYqlbGefjJgGkSZzT3a2jz6R2KAckzDbLUrWg2Ru0j3I9ebwxofrW&X-Amz-Signature=3fb6149b281a01affef580842c9035bf5003b6f9dc334dd520c05aaebfa4aede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475GBIPA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDVW5Rqg29qbOhbMB2NVzeRp3PR%2Byz%2BqwDPtCgzka%2F51AiAQUYg0qoUrWcuhn59VdJJRmj%2FWY%2F8o8WRsTOPQ3%2B3xXCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuV%2FBapVXRJU6KVBKtwD4zUN5PuSbAlSflm2Bxi4y9c%2FpYp8x%2FTtqMJy6dHpKh4ESY4VPul6C3kJ9jxtrOKSO0QIQ35EfvuypwtDSWBKUK7w7NWTVeahC5RAxJevejXCyHkflqlUr8o97KYiUer7rMcq8AFrx8gYJbQ3p3A2p1n8k3Ieh%2BdkmTTyjT6njeCjZE6nsGC%2BSeISweJMTktxdhohvMgGK0wjDlqQfB6vqNwhXc9k1W299gjmv%2FOLBXuiKebsmxyI1oc5LuHsCOeBvvP16Boui8Fm5WbOW%2BR7cVOd%2B6FWztrK0%2B9dyQ0dm9Fut1c%2FJRNa9oydvGzDmgp4NGRxGeGQTKCr2%2Ffn%2Fqqv2FQ74cvshIOqTM9ahDg8lbGx8Yo9oC76zWHtK%2FqPr8qzGoihs35SFjcRxG5v35XgLHgygHDhmp6tI%2F14OHD8idGWhmsSuXJs4gekqXn4tdhSem9PscDazpbJ%2FmwgfIxd7nD%2BhHyiyHv4Z8csTWO7w7wvtLYQ8utTu3b2lQKbEoSNLSLy13A4G%2F5F6WGKADp05IluCtqNc6Oke8p7hQrK9ZNAZTWfZOYMTvzpCGsZkSb%2ByOBRpdWEwB%2Bzni%2F6ubcB%2ByT8Nq2nF6aw3IG7QTy76v6w8xpqLsUjmbb0DNcwke3WxAY6pgG0CSl7UEks0V7rBMN%2FiJSNX80LRvqHbfe8Q0l5yO7ys1Bg5wf582S3n8hnJuzsgzPcsn7Pac%2BFDyzGKsFeGJ7MfP0Kl%2Bt1EdUgNvCl5tDF0hjVpkalB1dQEy6m1NGSPxiVSf1XQRJQMvQVYk5lLr%2Bxd27MiAfC%2Bm%2BPcGpGC0fUYqlbGefjJgGkSZzT3a2jz6R2KAckzDbLUrWg2Ru0j3I9ebwxofrW&X-Amz-Signature=59b88ddbd37593af18f87043bb1ea39bd731cb87611f61c73b3bf431f38c4f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475GBIPA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDVW5Rqg29qbOhbMB2NVzeRp3PR%2Byz%2BqwDPtCgzka%2F51AiAQUYg0qoUrWcuhn59VdJJRmj%2FWY%2F8o8WRsTOPQ3%2B3xXCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuV%2FBapVXRJU6KVBKtwD4zUN5PuSbAlSflm2Bxi4y9c%2FpYp8x%2FTtqMJy6dHpKh4ESY4VPul6C3kJ9jxtrOKSO0QIQ35EfvuypwtDSWBKUK7w7NWTVeahC5RAxJevejXCyHkflqlUr8o97KYiUer7rMcq8AFrx8gYJbQ3p3A2p1n8k3Ieh%2BdkmTTyjT6njeCjZE6nsGC%2BSeISweJMTktxdhohvMgGK0wjDlqQfB6vqNwhXc9k1W299gjmv%2FOLBXuiKebsmxyI1oc5LuHsCOeBvvP16Boui8Fm5WbOW%2BR7cVOd%2B6FWztrK0%2B9dyQ0dm9Fut1c%2FJRNa9oydvGzDmgp4NGRxGeGQTKCr2%2Ffn%2Fqqv2FQ74cvshIOqTM9ahDg8lbGx8Yo9oC76zWHtK%2FqPr8qzGoihs35SFjcRxG5v35XgLHgygHDhmp6tI%2F14OHD8idGWhmsSuXJs4gekqXn4tdhSem9PscDazpbJ%2FmwgfIxd7nD%2BhHyiyHv4Z8csTWO7w7wvtLYQ8utTu3b2lQKbEoSNLSLy13A4G%2F5F6WGKADp05IluCtqNc6Oke8p7hQrK9ZNAZTWfZOYMTvzpCGsZkSb%2ByOBRpdWEwB%2Bzni%2F6ubcB%2ByT8Nq2nF6aw3IG7QTy76v6w8xpqLsUjmbb0DNcwke3WxAY6pgG0CSl7UEks0V7rBMN%2FiJSNX80LRvqHbfe8Q0l5yO7ys1Bg5wf582S3n8hnJuzsgzPcsn7Pac%2BFDyzGKsFeGJ7MfP0Kl%2Bt1EdUgNvCl5tDF0hjVpkalB1dQEy6m1NGSPxiVSf1XQRJQMvQVYk5lLr%2Bxd27MiAfC%2Bm%2BPcGpGC0fUYqlbGefjJgGkSZzT3a2jz6R2KAckzDbLUrWg2Ru0j3I9ebwxofrW&X-Amz-Signature=c7b3bdc2b6936511af4a8acd963d78a0e4e94d22fbca6fda94ff6d0a1d20a1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475GBIPA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDVW5Rqg29qbOhbMB2NVzeRp3PR%2Byz%2BqwDPtCgzka%2F51AiAQUYg0qoUrWcuhn59VdJJRmj%2FWY%2F8o8WRsTOPQ3%2B3xXCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuV%2FBapVXRJU6KVBKtwD4zUN5PuSbAlSflm2Bxi4y9c%2FpYp8x%2FTtqMJy6dHpKh4ESY4VPul6C3kJ9jxtrOKSO0QIQ35EfvuypwtDSWBKUK7w7NWTVeahC5RAxJevejXCyHkflqlUr8o97KYiUer7rMcq8AFrx8gYJbQ3p3A2p1n8k3Ieh%2BdkmTTyjT6njeCjZE6nsGC%2BSeISweJMTktxdhohvMgGK0wjDlqQfB6vqNwhXc9k1W299gjmv%2FOLBXuiKebsmxyI1oc5LuHsCOeBvvP16Boui8Fm5WbOW%2BR7cVOd%2B6FWztrK0%2B9dyQ0dm9Fut1c%2FJRNa9oydvGzDmgp4NGRxGeGQTKCr2%2Ffn%2Fqqv2FQ74cvshIOqTM9ahDg8lbGx8Yo9oC76zWHtK%2FqPr8qzGoihs35SFjcRxG5v35XgLHgygHDhmp6tI%2F14OHD8idGWhmsSuXJs4gekqXn4tdhSem9PscDazpbJ%2FmwgfIxd7nD%2BhHyiyHv4Z8csTWO7w7wvtLYQ8utTu3b2lQKbEoSNLSLy13A4G%2F5F6WGKADp05IluCtqNc6Oke8p7hQrK9ZNAZTWfZOYMTvzpCGsZkSb%2ByOBRpdWEwB%2Bzni%2F6ubcB%2ByT8Nq2nF6aw3IG7QTy76v6w8xpqLsUjmbb0DNcwke3WxAY6pgG0CSl7UEks0V7rBMN%2FiJSNX80LRvqHbfe8Q0l5yO7ys1Bg5wf582S3n8hnJuzsgzPcsn7Pac%2BFDyzGKsFeGJ7MfP0Kl%2Bt1EdUgNvCl5tDF0hjVpkalB1dQEy6m1NGSPxiVSf1XQRJQMvQVYk5lLr%2Bxd27MiAfC%2Bm%2BPcGpGC0fUYqlbGefjJgGkSZzT3a2jz6R2KAckzDbLUrWg2Ru0j3I9ebwxofrW&X-Amz-Signature=08a8c07afb111ffaff1f0c5fa643ddeca0c21bf5d0a7ccd91e8102e6c05bed32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475GBIPA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDVW5Rqg29qbOhbMB2NVzeRp3PR%2Byz%2BqwDPtCgzka%2F51AiAQUYg0qoUrWcuhn59VdJJRmj%2FWY%2F8o8WRsTOPQ3%2B3xXCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuV%2FBapVXRJU6KVBKtwD4zUN5PuSbAlSflm2Bxi4y9c%2FpYp8x%2FTtqMJy6dHpKh4ESY4VPul6C3kJ9jxtrOKSO0QIQ35EfvuypwtDSWBKUK7w7NWTVeahC5RAxJevejXCyHkflqlUr8o97KYiUer7rMcq8AFrx8gYJbQ3p3A2p1n8k3Ieh%2BdkmTTyjT6njeCjZE6nsGC%2BSeISweJMTktxdhohvMgGK0wjDlqQfB6vqNwhXc9k1W299gjmv%2FOLBXuiKebsmxyI1oc5LuHsCOeBvvP16Boui8Fm5WbOW%2BR7cVOd%2B6FWztrK0%2B9dyQ0dm9Fut1c%2FJRNa9oydvGzDmgp4NGRxGeGQTKCr2%2Ffn%2Fqqv2FQ74cvshIOqTM9ahDg8lbGx8Yo9oC76zWHtK%2FqPr8qzGoihs35SFjcRxG5v35XgLHgygHDhmp6tI%2F14OHD8idGWhmsSuXJs4gekqXn4tdhSem9PscDazpbJ%2FmwgfIxd7nD%2BhHyiyHv4Z8csTWO7w7wvtLYQ8utTu3b2lQKbEoSNLSLy13A4G%2F5F6WGKADp05IluCtqNc6Oke8p7hQrK9ZNAZTWfZOYMTvzpCGsZkSb%2ByOBRpdWEwB%2Bzni%2F6ubcB%2ByT8Nq2nF6aw3IG7QTy76v6w8xpqLsUjmbb0DNcwke3WxAY6pgG0CSl7UEks0V7rBMN%2FiJSNX80LRvqHbfe8Q0l5yO7ys1Bg5wf582S3n8hnJuzsgzPcsn7Pac%2BFDyzGKsFeGJ7MfP0Kl%2Bt1EdUgNvCl5tDF0hjVpkalB1dQEy6m1NGSPxiVSf1XQRJQMvQVYk5lLr%2Bxd27MiAfC%2Bm%2BPcGpGC0fUYqlbGefjJgGkSZzT3a2jz6R2KAckzDbLUrWg2Ru0j3I9ebwxofrW&X-Amz-Signature=2f51fbf9836debbffad85b7a9d9634b2aceef96486dc79a28195e69fae4edcd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475GBIPA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDVW5Rqg29qbOhbMB2NVzeRp3PR%2Byz%2BqwDPtCgzka%2F51AiAQUYg0qoUrWcuhn59VdJJRmj%2FWY%2F8o8WRsTOPQ3%2B3xXCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuV%2FBapVXRJU6KVBKtwD4zUN5PuSbAlSflm2Bxi4y9c%2FpYp8x%2FTtqMJy6dHpKh4ESY4VPul6C3kJ9jxtrOKSO0QIQ35EfvuypwtDSWBKUK7w7NWTVeahC5RAxJevejXCyHkflqlUr8o97KYiUer7rMcq8AFrx8gYJbQ3p3A2p1n8k3Ieh%2BdkmTTyjT6njeCjZE6nsGC%2BSeISweJMTktxdhohvMgGK0wjDlqQfB6vqNwhXc9k1W299gjmv%2FOLBXuiKebsmxyI1oc5LuHsCOeBvvP16Boui8Fm5WbOW%2BR7cVOd%2B6FWztrK0%2B9dyQ0dm9Fut1c%2FJRNa9oydvGzDmgp4NGRxGeGQTKCr2%2Ffn%2Fqqv2FQ74cvshIOqTM9ahDg8lbGx8Yo9oC76zWHtK%2FqPr8qzGoihs35SFjcRxG5v35XgLHgygHDhmp6tI%2F14OHD8idGWhmsSuXJs4gekqXn4tdhSem9PscDazpbJ%2FmwgfIxd7nD%2BhHyiyHv4Z8csTWO7w7wvtLYQ8utTu3b2lQKbEoSNLSLy13A4G%2F5F6WGKADp05IluCtqNc6Oke8p7hQrK9ZNAZTWfZOYMTvzpCGsZkSb%2ByOBRpdWEwB%2Bzni%2F6ubcB%2ByT8Nq2nF6aw3IG7QTy76v6w8xpqLsUjmbb0DNcwke3WxAY6pgG0CSl7UEks0V7rBMN%2FiJSNX80LRvqHbfe8Q0l5yO7ys1Bg5wf582S3n8hnJuzsgzPcsn7Pac%2BFDyzGKsFeGJ7MfP0Kl%2Bt1EdUgNvCl5tDF0hjVpkalB1dQEy6m1NGSPxiVSf1XQRJQMvQVYk5lLr%2Bxd27MiAfC%2Bm%2BPcGpGC0fUYqlbGefjJgGkSZzT3a2jz6R2KAckzDbLUrWg2Ru0j3I9ebwxofrW&X-Amz-Signature=67f2fe9f0558d5d1afebfda7585fa1386ea481a38d71658aac743cd67d885c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475GBIPA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDVW5Rqg29qbOhbMB2NVzeRp3PR%2Byz%2BqwDPtCgzka%2F51AiAQUYg0qoUrWcuhn59VdJJRmj%2FWY%2F8o8WRsTOPQ3%2B3xXCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuV%2FBapVXRJU6KVBKtwD4zUN5PuSbAlSflm2Bxi4y9c%2FpYp8x%2FTtqMJy6dHpKh4ESY4VPul6C3kJ9jxtrOKSO0QIQ35EfvuypwtDSWBKUK7w7NWTVeahC5RAxJevejXCyHkflqlUr8o97KYiUer7rMcq8AFrx8gYJbQ3p3A2p1n8k3Ieh%2BdkmTTyjT6njeCjZE6nsGC%2BSeISweJMTktxdhohvMgGK0wjDlqQfB6vqNwhXc9k1W299gjmv%2FOLBXuiKebsmxyI1oc5LuHsCOeBvvP16Boui8Fm5WbOW%2BR7cVOd%2B6FWztrK0%2B9dyQ0dm9Fut1c%2FJRNa9oydvGzDmgp4NGRxGeGQTKCr2%2Ffn%2Fqqv2FQ74cvshIOqTM9ahDg8lbGx8Yo9oC76zWHtK%2FqPr8qzGoihs35SFjcRxG5v35XgLHgygHDhmp6tI%2F14OHD8idGWhmsSuXJs4gekqXn4tdhSem9PscDazpbJ%2FmwgfIxd7nD%2BhHyiyHv4Z8csTWO7w7wvtLYQ8utTu3b2lQKbEoSNLSLy13A4G%2F5F6WGKADp05IluCtqNc6Oke8p7hQrK9ZNAZTWfZOYMTvzpCGsZkSb%2ByOBRpdWEwB%2Bzni%2F6ubcB%2ByT8Nq2nF6aw3IG7QTy76v6w8xpqLsUjmbb0DNcwke3WxAY6pgG0CSl7UEks0V7rBMN%2FiJSNX80LRvqHbfe8Q0l5yO7ys1Bg5wf582S3n8hnJuzsgzPcsn7Pac%2BFDyzGKsFeGJ7MfP0Kl%2Bt1EdUgNvCl5tDF0hjVpkalB1dQEy6m1NGSPxiVSf1XQRJQMvQVYk5lLr%2Bxd27MiAfC%2Bm%2BPcGpGC0fUYqlbGefjJgGkSZzT3a2jz6R2KAckzDbLUrWg2Ru0j3I9ebwxofrW&X-Amz-Signature=056c8c2149878ec5679fe12c134dafcaa8b32da1451d5e24de4c3e8996ed6963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475GBIPA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDVW5Rqg29qbOhbMB2NVzeRp3PR%2Byz%2BqwDPtCgzka%2F51AiAQUYg0qoUrWcuhn59VdJJRmj%2FWY%2F8o8WRsTOPQ3%2B3xXCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuV%2FBapVXRJU6KVBKtwD4zUN5PuSbAlSflm2Bxi4y9c%2FpYp8x%2FTtqMJy6dHpKh4ESY4VPul6C3kJ9jxtrOKSO0QIQ35EfvuypwtDSWBKUK7w7NWTVeahC5RAxJevejXCyHkflqlUr8o97KYiUer7rMcq8AFrx8gYJbQ3p3A2p1n8k3Ieh%2BdkmTTyjT6njeCjZE6nsGC%2BSeISweJMTktxdhohvMgGK0wjDlqQfB6vqNwhXc9k1W299gjmv%2FOLBXuiKebsmxyI1oc5LuHsCOeBvvP16Boui8Fm5WbOW%2BR7cVOd%2B6FWztrK0%2B9dyQ0dm9Fut1c%2FJRNa9oydvGzDmgp4NGRxGeGQTKCr2%2Ffn%2Fqqv2FQ74cvshIOqTM9ahDg8lbGx8Yo9oC76zWHtK%2FqPr8qzGoihs35SFjcRxG5v35XgLHgygHDhmp6tI%2F14OHD8idGWhmsSuXJs4gekqXn4tdhSem9PscDazpbJ%2FmwgfIxd7nD%2BhHyiyHv4Z8csTWO7w7wvtLYQ8utTu3b2lQKbEoSNLSLy13A4G%2F5F6WGKADp05IluCtqNc6Oke8p7hQrK9ZNAZTWfZOYMTvzpCGsZkSb%2ByOBRpdWEwB%2Bzni%2F6ubcB%2ByT8Nq2nF6aw3IG7QTy76v6w8xpqLsUjmbb0DNcwke3WxAY6pgG0CSl7UEks0V7rBMN%2FiJSNX80LRvqHbfe8Q0l5yO7ys1Bg5wf582S3n8hnJuzsgzPcsn7Pac%2BFDyzGKsFeGJ7MfP0Kl%2Bt1EdUgNvCl5tDF0hjVpkalB1dQEy6m1NGSPxiVSf1XQRJQMvQVYk5lLr%2Bxd27MiAfC%2Bm%2BPcGpGC0fUYqlbGefjJgGkSZzT3a2jz6R2KAckzDbLUrWg2Ru0j3I9ebwxofrW&X-Amz-Signature=46d7fede1bc6f61fb271cf3e6421ed6666ca39948ecdfec00534b5bffabca958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
