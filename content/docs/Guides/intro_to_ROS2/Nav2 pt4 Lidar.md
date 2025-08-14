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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UMFUENC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQPgaVUlEuXF8iyRXdEDghKpJJOBM820%2BcsE7bzFBF0gIhAJ4CHUID58e%2F3tiVaFd3824azWfHPq6qjvvpjqCVMhelKv8DCEMQABoMNjM3NDIzMTgzODA1IgwK6h0o%2F6F4rYOzbUkq3ANqOVsauUerj%2FyUjRnfCZ0CYdZke88Z640LXimgVxSkF8BqiCA0eM%2FGfSvWvl8xGDrZv5Vrmr4PYXhC9596vXPxTH6UTkigFbuXYe2Qn6RT8mcOOPfwdxrpWHbtC50g54v03X5%2BaJO59K6Uk5%2FmrjogtocJsnwu8FmUecnByiyMUJx5nhqR7ecNa6IoEgsrO6tn4QPw4saGoaUymANpIRp1FX1YQTFIHZSV6IWrz6kISnGD7xtPrS9Y1ra3xVIPD1pNxgPqDx9dTLy5DU%2Fn9pr6O97GLcGe4Pt6D9Eftfnv%2B1Rp7KA633v7Aul%2BmSjWujlPNfzT4L4OQfRJIKpUgNw4WZXKM6q2BU6ThUhjv3nGLBdsLeDczSNg1gLkHl0n6Ur2iqqsGQ27Z%2FSHroYt4LOfpygU4J0rW0G%2BBlDjHj%2BNUnCzO1rLu%2FibNuZtx6cC73KWkjSLgtIGjmmeCsHtEotvaVyZmd1LfSJH5pYyOAifsOg95cHFHoyNiR9OvLo%2F%2BGK9wgqcRJ61ryNl97h9AbU3xrrDQJ4mL5bVeuuj92MoJ6Fu1OkItTzYW7c3X4eQ0kANd3YLRSVI0ocBkSPO7%2BC%2BYmxJBS0M2wRJL3d13cN6NPFIwBsSLVj4TYLb6zD53%2FbEBjqkASquMT6LZQOUQcKvN%2BWBzGYX6aSzFLTtXD%2FvpmsZOvZtuFrhg7htdvXyypgwGSJzRYA%2BjmntnQ2VJ7LFi%2BiVcrTUGCO3JjLjE87BawnxPdP3oZfO3SgJZqKPfZFITGARqlbqk8ACa2TQjkGKEoXEGIbDptm%2FO0V%2Bfos7boX%2FhuQpBW%2Bqa%2Fg%2BUVaGbJ9HDB9ioUBJJ7v6jVqqaalSwVzUnMozCk07&X-Amz-Signature=48da0ff15335b49ac3bc9c44215278abbd83abbcca3aa783d0e0d5278d7dc444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=9f311ec707e93bcd8e531012b846d092e19b2850a57048ed00faefa46254d6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=e8cd9de42c1f878df3296c121bfc63cad0f28cea01e4423d68ec8e2029129428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=e60672972fa5b2a1bcf9b968b037bb1a4af96d3abbdc420c16dc41a2a26a6059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=4fa537473adcbaa04fc4ad3943c0a1e6f39f3c6351c06562bcd85fbe880fa5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=32c82b0a66bfc5d948a4bf51e3f6fdfc5a3099a8dd95f6aa714a2bf1e1254733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=0e40a0098976f59a943616d2db0c6560d266787d2a5da02703f8572cb5a904ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=434fdb08e5e9951118fe3e687e552a08e44b68c6a15f80ec6bc6d635e627ef1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=c7341e44538063cca848b044ba73cd46608369999aadf8bf6bb62d39c2062f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=cd714a9f8a2b46c788dd327fc92f55bd0be978c7056c76bee0d7d9262d47aeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=4fa537473adcbaa04fc4ad3943c0a1e6f39f3c6351c06562bcd85fbe880fa5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
