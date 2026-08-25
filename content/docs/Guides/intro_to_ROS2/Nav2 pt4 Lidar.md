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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTEGR3QI%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIC1Yh1QFHFpLPHTM7mf0NpxGpzgsuuYn479UGZllke3aAiBh%2B4Ba0rquoDs4eNdGVJ1iRVxkIhyB440CywY%2FTrFJ0CqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkUq01SGRICkSIOJJKtwDzBzLBOjCJCk6U611HJTkYX%2F8lDRI0MYgCFA6ARX9tWaEH2gp7xGV9GtoNKhTdh9E0wHSDMXen1CgvN8Xecp8mOzUQppAzpSrK6BgZe858wh5SN5JxDkwwgordiFB%2F8Q6ThWr6ySmZYMwV5UpSVwIvUYre7rWWH4hRw%2BkIsJdF2OA7%2FkCFF6e4MmJ7ECwGalGsd6%2FTy8WVx9kV%2FTrgoxiCVWmrzdo3UyM2egfPNoQayZClKPpiUzbX833C1HGGjeEpofyqJQTVuO0ceA7hD3E4MI2GrcXvdOMvC2FnM03JeUbnUMNdwon8aPT88KdWwDyEjwjYyWD%2Bo62JOW8HLEAz8wVkpadZsi3AoYxmQ4hiie8pdif4YQ%2B14OrvUbVUSfdCMp1zw2Bc%2BzWeSRuItRAC%2BnNJQCFTgNDGSCEYn8XnYZISuo9e8az3iErTmnU5DSmihlq3D69TyIynYiL8iTRnK2e7k%2FZt06oIQcBw46tLRZsEitZhbhLT9uJYw4yMWUXKzApoSwIK9P8FNS7aV1qgCH17cbEmkK9qMos1CYfXIDTrTapUwUCLfqjEDyFpDxZQJUBQR%2BzRBzcJVEkmLP8x9twU1eYm2gUy3VonNSb7ke9IEk7zbLBJKAn0c0wotGz1AY6pgG55qk7M5qjt9x75ve7pRDzKFDpMeCxMzORFGr7TuecYVm8DOp5G%2BHtipUmCT%2BC4SSMmqvG1TWg2okacFdFXpbS0QwtlGJ%2BXwycxSGU1Tf49eHLp%2FQmZqlvDdmIDt4K8kejOLv%2Bf%2FIPytT8v1kB3VMHwFRad3Gb2F070iIBZ7n%2FetVKuMeQd4Q4oSbWJm7%2BTbc19Xi3bOXAw7U6aoLJbc3GTu1b8JYu&X-Amz-Signature=2f1a32b1e3c294efb76dc15f373b433c6f21c4f8caf190db359fda718b2414f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJZAPIB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBJLMnx12bdlBOyGVPoIGHduM60Hwi44Wr57iRjbJXIzAiAkU9Tqmc6LbHxiJnkFCNDmZuS824r2%2BjTYmXLXqKlm4SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IvK01BUD1gXb2kbKtwDvEUHhCj2vO8qJ5xiXmyVQyTiEhFhx5KOOryQQbh8a3fAgeWYR%2BH1iQq9g%2BYQO6Zl02flzitdihCNUZCzgoK7BG%2Fq4PYB%2F3qVurqQHwfBS1X9Aqt22QoS4pXn2eb1GAObnyCc5v8oEfjagI8i4ZQ16Ft7CPs%2FKLLLjcq5cnP1QdFIBS0c32c3x5yD%2Fr1Wr4roA%2FcnUAvCqWgOwbwhggiK%2Bl%2BcGqJCSZ6B8N5egA%2BH8IjxM%2FyH8AQK2Vx6Hd0aS2JYbs7IPPBrq3xfN7QxhgaNceLcLNV3XZ9zc%2B%2FCoHW%2FmxxAHBGcd5NP6Y9fJdDhkQxIaU3%2FP12ZAJYtHc9KwLFboCP6afWa9OXuzQzohje%2B5GCOOl%2BOjSsDAuMB9dsRDQoW6UMH6X4WBKBSxbfLWORZ45VqXmS0qR4ksnlu7NGlliqQggSo0%2F1%2FbttWj1BGX79Lc9yzRHo8LGUuHAy%2B1QtxCVDhBnM88HLGljsLUNGsiXwtCAmmMeOZgzCbwsjMFft3GNhjRMFLG7UT5cDyHPsXZM1LkPfZKqnM5gvYcJchqzWS3etEDPGmY8USna3ZaV%2FmyfrYfzWEIPSkX6XtywF1Kyb7%2BmOqr3dBCzy%2BA4YW4AV7F5e1rv3hAIU%2F%2BAIwpNSz1AY6pgGv0%2FUcgugt%2BT%2FH6OJW7wcmVRNpvb0UkNgDwBxeyxOnmCmz5Swte%2BEvvCS8wcVdeJv4id7%2Bappa9cPCgu5W05isxSbI1SgVYUtxosidMu8mLvxST8xavf15D44Fo67ePsherC3kq%2BuIo2GcD3J7BcBPzbv7FBvo%2BM9sWDNR1HuHvYVPCOzL0eRppEuCzGvRCBYxT4Xc%2FQFBhi342fc8%2B8rDNhZPrxng&X-Amz-Signature=7c2effc79435dcc007725db300e9cee49805f3242f2fa36ebe46209f2b89651e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJZAPIB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBJLMnx12bdlBOyGVPoIGHduM60Hwi44Wr57iRjbJXIzAiAkU9Tqmc6LbHxiJnkFCNDmZuS824r2%2BjTYmXLXqKlm4SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IvK01BUD1gXb2kbKtwDvEUHhCj2vO8qJ5xiXmyVQyTiEhFhx5KOOryQQbh8a3fAgeWYR%2BH1iQq9g%2BYQO6Zl02flzitdihCNUZCzgoK7BG%2Fq4PYB%2F3qVurqQHwfBS1X9Aqt22QoS4pXn2eb1GAObnyCc5v8oEfjagI8i4ZQ16Ft7CPs%2FKLLLjcq5cnP1QdFIBS0c32c3x5yD%2Fr1Wr4roA%2FcnUAvCqWgOwbwhggiK%2Bl%2BcGqJCSZ6B8N5egA%2BH8IjxM%2FyH8AQK2Vx6Hd0aS2JYbs7IPPBrq3xfN7QxhgaNceLcLNV3XZ9zc%2B%2FCoHW%2FmxxAHBGcd5NP6Y9fJdDhkQxIaU3%2FP12ZAJYtHc9KwLFboCP6afWa9OXuzQzohje%2B5GCOOl%2BOjSsDAuMB9dsRDQoW6UMH6X4WBKBSxbfLWORZ45VqXmS0qR4ksnlu7NGlliqQggSo0%2F1%2FbttWj1BGX79Lc9yzRHo8LGUuHAy%2B1QtxCVDhBnM88HLGljsLUNGsiXwtCAmmMeOZgzCbwsjMFft3GNhjRMFLG7UT5cDyHPsXZM1LkPfZKqnM5gvYcJchqzWS3etEDPGmY8USna3ZaV%2FmyfrYfzWEIPSkX6XtywF1Kyb7%2BmOqr3dBCzy%2BA4YW4AV7F5e1rv3hAIU%2F%2BAIwpNSz1AY6pgGv0%2FUcgugt%2BT%2FH6OJW7wcmVRNpvb0UkNgDwBxeyxOnmCmz5Swte%2BEvvCS8wcVdeJv4id7%2Bappa9cPCgu5W05isxSbI1SgVYUtxosidMu8mLvxST8xavf15D44Fo67ePsherC3kq%2BuIo2GcD3J7BcBPzbv7FBvo%2BM9sWDNR1HuHvYVPCOzL0eRppEuCzGvRCBYxT4Xc%2FQFBhi342fc8%2B8rDNhZPrxng&X-Amz-Signature=80d98be8f2001b9112e27074d8230cbc37301655f25a3a9bad05217dbb00f0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJZAPIB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBJLMnx12bdlBOyGVPoIGHduM60Hwi44Wr57iRjbJXIzAiAkU9Tqmc6LbHxiJnkFCNDmZuS824r2%2BjTYmXLXqKlm4SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IvK01BUD1gXb2kbKtwDvEUHhCj2vO8qJ5xiXmyVQyTiEhFhx5KOOryQQbh8a3fAgeWYR%2BH1iQq9g%2BYQO6Zl02flzitdihCNUZCzgoK7BG%2Fq4PYB%2F3qVurqQHwfBS1X9Aqt22QoS4pXn2eb1GAObnyCc5v8oEfjagI8i4ZQ16Ft7CPs%2FKLLLjcq5cnP1QdFIBS0c32c3x5yD%2Fr1Wr4roA%2FcnUAvCqWgOwbwhggiK%2Bl%2BcGqJCSZ6B8N5egA%2BH8IjxM%2FyH8AQK2Vx6Hd0aS2JYbs7IPPBrq3xfN7QxhgaNceLcLNV3XZ9zc%2B%2FCoHW%2FmxxAHBGcd5NP6Y9fJdDhkQxIaU3%2FP12ZAJYtHc9KwLFboCP6afWa9OXuzQzohje%2B5GCOOl%2BOjSsDAuMB9dsRDQoW6UMH6X4WBKBSxbfLWORZ45VqXmS0qR4ksnlu7NGlliqQggSo0%2F1%2FbttWj1BGX79Lc9yzRHo8LGUuHAy%2B1QtxCVDhBnM88HLGljsLUNGsiXwtCAmmMeOZgzCbwsjMFft3GNhjRMFLG7UT5cDyHPsXZM1LkPfZKqnM5gvYcJchqzWS3etEDPGmY8USna3ZaV%2FmyfrYfzWEIPSkX6XtywF1Kyb7%2BmOqr3dBCzy%2BA4YW4AV7F5e1rv3hAIU%2F%2BAIwpNSz1AY6pgGv0%2FUcgugt%2BT%2FH6OJW7wcmVRNpvb0UkNgDwBxeyxOnmCmz5Swte%2BEvvCS8wcVdeJv4id7%2Bappa9cPCgu5W05isxSbI1SgVYUtxosidMu8mLvxST8xavf15D44Fo67ePsherC3kq%2BuIo2GcD3J7BcBPzbv7FBvo%2BM9sWDNR1HuHvYVPCOzL0eRppEuCzGvRCBYxT4Xc%2FQFBhi342fc8%2B8rDNhZPrxng&X-Amz-Signature=e2aad0fe7bf767b35ee61c0fbadea5ebdc5f4c5b7c73718a72d558c6dab08ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJZAPIB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBJLMnx12bdlBOyGVPoIGHduM60Hwi44Wr57iRjbJXIzAiAkU9Tqmc6LbHxiJnkFCNDmZuS824r2%2BjTYmXLXqKlm4SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IvK01BUD1gXb2kbKtwDvEUHhCj2vO8qJ5xiXmyVQyTiEhFhx5KOOryQQbh8a3fAgeWYR%2BH1iQq9g%2BYQO6Zl02flzitdihCNUZCzgoK7BG%2Fq4PYB%2F3qVurqQHwfBS1X9Aqt22QoS4pXn2eb1GAObnyCc5v8oEfjagI8i4ZQ16Ft7CPs%2FKLLLjcq5cnP1QdFIBS0c32c3x5yD%2Fr1Wr4roA%2FcnUAvCqWgOwbwhggiK%2Bl%2BcGqJCSZ6B8N5egA%2BH8IjxM%2FyH8AQK2Vx6Hd0aS2JYbs7IPPBrq3xfN7QxhgaNceLcLNV3XZ9zc%2B%2FCoHW%2FmxxAHBGcd5NP6Y9fJdDhkQxIaU3%2FP12ZAJYtHc9KwLFboCP6afWa9OXuzQzohje%2B5GCOOl%2BOjSsDAuMB9dsRDQoW6UMH6X4WBKBSxbfLWORZ45VqXmS0qR4ksnlu7NGlliqQggSo0%2F1%2FbttWj1BGX79Lc9yzRHo8LGUuHAy%2B1QtxCVDhBnM88HLGljsLUNGsiXwtCAmmMeOZgzCbwsjMFft3GNhjRMFLG7UT5cDyHPsXZM1LkPfZKqnM5gvYcJchqzWS3etEDPGmY8USna3ZaV%2FmyfrYfzWEIPSkX6XtywF1Kyb7%2BmOqr3dBCzy%2BA4YW4AV7F5e1rv3hAIU%2F%2BAIwpNSz1AY6pgGv0%2FUcgugt%2BT%2FH6OJW7wcmVRNpvb0UkNgDwBxeyxOnmCmz5Swte%2BEvvCS8wcVdeJv4id7%2Bappa9cPCgu5W05isxSbI1SgVYUtxosidMu8mLvxST8xavf15D44Fo67ePsherC3kq%2BuIo2GcD3J7BcBPzbv7FBvo%2BM9sWDNR1HuHvYVPCOzL0eRppEuCzGvRCBYxT4Xc%2FQFBhi342fc8%2B8rDNhZPrxng&X-Amz-Signature=d5fbbca326d458a5e65051ae0fe4ff05790e6e3d27bed2ec73fc48d2815aad67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJZAPIB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBJLMnx12bdlBOyGVPoIGHduM60Hwi44Wr57iRjbJXIzAiAkU9Tqmc6LbHxiJnkFCNDmZuS824r2%2BjTYmXLXqKlm4SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IvK01BUD1gXb2kbKtwDvEUHhCj2vO8qJ5xiXmyVQyTiEhFhx5KOOryQQbh8a3fAgeWYR%2BH1iQq9g%2BYQO6Zl02flzitdihCNUZCzgoK7BG%2Fq4PYB%2F3qVurqQHwfBS1X9Aqt22QoS4pXn2eb1GAObnyCc5v8oEfjagI8i4ZQ16Ft7CPs%2FKLLLjcq5cnP1QdFIBS0c32c3x5yD%2Fr1Wr4roA%2FcnUAvCqWgOwbwhggiK%2Bl%2BcGqJCSZ6B8N5egA%2BH8IjxM%2FyH8AQK2Vx6Hd0aS2JYbs7IPPBrq3xfN7QxhgaNceLcLNV3XZ9zc%2B%2FCoHW%2FmxxAHBGcd5NP6Y9fJdDhkQxIaU3%2FP12ZAJYtHc9KwLFboCP6afWa9OXuzQzohje%2B5GCOOl%2BOjSsDAuMB9dsRDQoW6UMH6X4WBKBSxbfLWORZ45VqXmS0qR4ksnlu7NGlliqQggSo0%2F1%2FbttWj1BGX79Lc9yzRHo8LGUuHAy%2B1QtxCVDhBnM88HLGljsLUNGsiXwtCAmmMeOZgzCbwsjMFft3GNhjRMFLG7UT5cDyHPsXZM1LkPfZKqnM5gvYcJchqzWS3etEDPGmY8USna3ZaV%2FmyfrYfzWEIPSkX6XtywF1Kyb7%2BmOqr3dBCzy%2BA4YW4AV7F5e1rv3hAIU%2F%2BAIwpNSz1AY6pgGv0%2FUcgugt%2BT%2FH6OJW7wcmVRNpvb0UkNgDwBxeyxOnmCmz5Swte%2BEvvCS8wcVdeJv4id7%2Bappa9cPCgu5W05isxSbI1SgVYUtxosidMu8mLvxST8xavf15D44Fo67ePsherC3kq%2BuIo2GcD3J7BcBPzbv7FBvo%2BM9sWDNR1HuHvYVPCOzL0eRppEuCzGvRCBYxT4Xc%2FQFBhi342fc8%2B8rDNhZPrxng&X-Amz-Signature=7c3996fdf313ac0f03a01f728d6474f26f95a5f6ffcf5a39981074ff4fb96ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJZAPIB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBJLMnx12bdlBOyGVPoIGHduM60Hwi44Wr57iRjbJXIzAiAkU9Tqmc6LbHxiJnkFCNDmZuS824r2%2BjTYmXLXqKlm4SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IvK01BUD1gXb2kbKtwDvEUHhCj2vO8qJ5xiXmyVQyTiEhFhx5KOOryQQbh8a3fAgeWYR%2BH1iQq9g%2BYQO6Zl02flzitdihCNUZCzgoK7BG%2Fq4PYB%2F3qVurqQHwfBS1X9Aqt22QoS4pXn2eb1GAObnyCc5v8oEfjagI8i4ZQ16Ft7CPs%2FKLLLjcq5cnP1QdFIBS0c32c3x5yD%2Fr1Wr4roA%2FcnUAvCqWgOwbwhggiK%2Bl%2BcGqJCSZ6B8N5egA%2BH8IjxM%2FyH8AQK2Vx6Hd0aS2JYbs7IPPBrq3xfN7QxhgaNceLcLNV3XZ9zc%2B%2FCoHW%2FmxxAHBGcd5NP6Y9fJdDhkQxIaU3%2FP12ZAJYtHc9KwLFboCP6afWa9OXuzQzohje%2B5GCOOl%2BOjSsDAuMB9dsRDQoW6UMH6X4WBKBSxbfLWORZ45VqXmS0qR4ksnlu7NGlliqQggSo0%2F1%2FbttWj1BGX79Lc9yzRHo8LGUuHAy%2B1QtxCVDhBnM88HLGljsLUNGsiXwtCAmmMeOZgzCbwsjMFft3GNhjRMFLG7UT5cDyHPsXZM1LkPfZKqnM5gvYcJchqzWS3etEDPGmY8USna3ZaV%2FmyfrYfzWEIPSkX6XtywF1Kyb7%2BmOqr3dBCzy%2BA4YW4AV7F5e1rv3hAIU%2F%2BAIwpNSz1AY6pgGv0%2FUcgugt%2BT%2FH6OJW7wcmVRNpvb0UkNgDwBxeyxOnmCmz5Swte%2BEvvCS8wcVdeJv4id7%2Bappa9cPCgu5W05isxSbI1SgVYUtxosidMu8mLvxST8xavf15D44Fo67ePsherC3kq%2BuIo2GcD3J7BcBPzbv7FBvo%2BM9sWDNR1HuHvYVPCOzL0eRppEuCzGvRCBYxT4Xc%2FQFBhi342fc8%2B8rDNhZPrxng&X-Amz-Signature=d4ff75415abd9d86626c909ac96d975c1e2d57e726dc532689b0d1a30f03f1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJZAPIB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBJLMnx12bdlBOyGVPoIGHduM60Hwi44Wr57iRjbJXIzAiAkU9Tqmc6LbHxiJnkFCNDmZuS824r2%2BjTYmXLXqKlm4SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IvK01BUD1gXb2kbKtwDvEUHhCj2vO8qJ5xiXmyVQyTiEhFhx5KOOryQQbh8a3fAgeWYR%2BH1iQq9g%2BYQO6Zl02flzitdihCNUZCzgoK7BG%2Fq4PYB%2F3qVurqQHwfBS1X9Aqt22QoS4pXn2eb1GAObnyCc5v8oEfjagI8i4ZQ16Ft7CPs%2FKLLLjcq5cnP1QdFIBS0c32c3x5yD%2Fr1Wr4roA%2FcnUAvCqWgOwbwhggiK%2Bl%2BcGqJCSZ6B8N5egA%2BH8IjxM%2FyH8AQK2Vx6Hd0aS2JYbs7IPPBrq3xfN7QxhgaNceLcLNV3XZ9zc%2B%2FCoHW%2FmxxAHBGcd5NP6Y9fJdDhkQxIaU3%2FP12ZAJYtHc9KwLFboCP6afWa9OXuzQzohje%2B5GCOOl%2BOjSsDAuMB9dsRDQoW6UMH6X4WBKBSxbfLWORZ45VqXmS0qR4ksnlu7NGlliqQggSo0%2F1%2FbttWj1BGX79Lc9yzRHo8LGUuHAy%2B1QtxCVDhBnM88HLGljsLUNGsiXwtCAmmMeOZgzCbwsjMFft3GNhjRMFLG7UT5cDyHPsXZM1LkPfZKqnM5gvYcJchqzWS3etEDPGmY8USna3ZaV%2FmyfrYfzWEIPSkX6XtywF1Kyb7%2BmOqr3dBCzy%2BA4YW4AV7F5e1rv3hAIU%2F%2BAIwpNSz1AY6pgGv0%2FUcgugt%2BT%2FH6OJW7wcmVRNpvb0UkNgDwBxeyxOnmCmz5Swte%2BEvvCS8wcVdeJv4id7%2Bappa9cPCgu5W05isxSbI1SgVYUtxosidMu8mLvxST8xavf15D44Fo67ePsherC3kq%2BuIo2GcD3J7BcBPzbv7FBvo%2BM9sWDNR1HuHvYVPCOzL0eRppEuCzGvRCBYxT4Xc%2FQFBhi342fc8%2B8rDNhZPrxng&X-Amz-Signature=9a59485d73d65af9fad1c473ea3d97b7f02db1d720f0bb4dad26c447b317ae8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJZAPIB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBJLMnx12bdlBOyGVPoIGHduM60Hwi44Wr57iRjbJXIzAiAkU9Tqmc6LbHxiJnkFCNDmZuS824r2%2BjTYmXLXqKlm4SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IvK01BUD1gXb2kbKtwDvEUHhCj2vO8qJ5xiXmyVQyTiEhFhx5KOOryQQbh8a3fAgeWYR%2BH1iQq9g%2BYQO6Zl02flzitdihCNUZCzgoK7BG%2Fq4PYB%2F3qVurqQHwfBS1X9Aqt22QoS4pXn2eb1GAObnyCc5v8oEfjagI8i4ZQ16Ft7CPs%2FKLLLjcq5cnP1QdFIBS0c32c3x5yD%2Fr1Wr4roA%2FcnUAvCqWgOwbwhggiK%2Bl%2BcGqJCSZ6B8N5egA%2BH8IjxM%2FyH8AQK2Vx6Hd0aS2JYbs7IPPBrq3xfN7QxhgaNceLcLNV3XZ9zc%2B%2FCoHW%2FmxxAHBGcd5NP6Y9fJdDhkQxIaU3%2FP12ZAJYtHc9KwLFboCP6afWa9OXuzQzohje%2B5GCOOl%2BOjSsDAuMB9dsRDQoW6UMH6X4WBKBSxbfLWORZ45VqXmS0qR4ksnlu7NGlliqQggSo0%2F1%2FbttWj1BGX79Lc9yzRHo8LGUuHAy%2B1QtxCVDhBnM88HLGljsLUNGsiXwtCAmmMeOZgzCbwsjMFft3GNhjRMFLG7UT5cDyHPsXZM1LkPfZKqnM5gvYcJchqzWS3etEDPGmY8USna3ZaV%2FmyfrYfzWEIPSkX6XtywF1Kyb7%2BmOqr3dBCzy%2BA4YW4AV7F5e1rv3hAIU%2F%2BAIwpNSz1AY6pgGv0%2FUcgugt%2BT%2FH6OJW7wcmVRNpvb0UkNgDwBxeyxOnmCmz5Swte%2BEvvCS8wcVdeJv4id7%2Bappa9cPCgu5W05isxSbI1SgVYUtxosidMu8mLvxST8xavf15D44Fo67ePsherC3kq%2BuIo2GcD3J7BcBPzbv7FBvo%2BM9sWDNR1HuHvYVPCOzL0eRppEuCzGvRCBYxT4Xc%2FQFBhi342fc8%2B8rDNhZPrxng&X-Amz-Signature=f6ed3594670d9cc4d491c52f4d8168bc9033eaef7dbf090ba12661798e56f38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJZAPIB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBJLMnx12bdlBOyGVPoIGHduM60Hwi44Wr57iRjbJXIzAiAkU9Tqmc6LbHxiJnkFCNDmZuS824r2%2BjTYmXLXqKlm4SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IvK01BUD1gXb2kbKtwDvEUHhCj2vO8qJ5xiXmyVQyTiEhFhx5KOOryQQbh8a3fAgeWYR%2BH1iQq9g%2BYQO6Zl02flzitdihCNUZCzgoK7BG%2Fq4PYB%2F3qVurqQHwfBS1X9Aqt22QoS4pXn2eb1GAObnyCc5v8oEfjagI8i4ZQ16Ft7CPs%2FKLLLjcq5cnP1QdFIBS0c32c3x5yD%2Fr1Wr4roA%2FcnUAvCqWgOwbwhggiK%2Bl%2BcGqJCSZ6B8N5egA%2BH8IjxM%2FyH8AQK2Vx6Hd0aS2JYbs7IPPBrq3xfN7QxhgaNceLcLNV3XZ9zc%2B%2FCoHW%2FmxxAHBGcd5NP6Y9fJdDhkQxIaU3%2FP12ZAJYtHc9KwLFboCP6afWa9OXuzQzohje%2B5GCOOl%2BOjSsDAuMB9dsRDQoW6UMH6X4WBKBSxbfLWORZ45VqXmS0qR4ksnlu7NGlliqQggSo0%2F1%2FbttWj1BGX79Lc9yzRHo8LGUuHAy%2B1QtxCVDhBnM88HLGljsLUNGsiXwtCAmmMeOZgzCbwsjMFft3GNhjRMFLG7UT5cDyHPsXZM1LkPfZKqnM5gvYcJchqzWS3etEDPGmY8USna3ZaV%2FmyfrYfzWEIPSkX6XtywF1Kyb7%2BmOqr3dBCzy%2BA4YW4AV7F5e1rv3hAIU%2F%2BAIwpNSz1AY6pgGv0%2FUcgugt%2BT%2FH6OJW7wcmVRNpvb0UkNgDwBxeyxOnmCmz5Swte%2BEvvCS8wcVdeJv4id7%2Bappa9cPCgu5W05isxSbI1SgVYUtxosidMu8mLvxST8xavf15D44Fo67ePsherC3kq%2BuIo2GcD3J7BcBPzbv7FBvo%2BM9sWDNR1HuHvYVPCOzL0eRppEuCzGvRCBYxT4Xc%2FQFBhi342fc8%2B8rDNhZPrxng&X-Amz-Signature=cfbe45d0582390147b4880b7a3aa2ef166e5027ab18aac7b52a2bad0f5c85a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJZAPIB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBJLMnx12bdlBOyGVPoIGHduM60Hwi44Wr57iRjbJXIzAiAkU9Tqmc6LbHxiJnkFCNDmZuS824r2%2BjTYmXLXqKlm4SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IvK01BUD1gXb2kbKtwDvEUHhCj2vO8qJ5xiXmyVQyTiEhFhx5KOOryQQbh8a3fAgeWYR%2BH1iQq9g%2BYQO6Zl02flzitdihCNUZCzgoK7BG%2Fq4PYB%2F3qVurqQHwfBS1X9Aqt22QoS4pXn2eb1GAObnyCc5v8oEfjagI8i4ZQ16Ft7CPs%2FKLLLjcq5cnP1QdFIBS0c32c3x5yD%2Fr1Wr4roA%2FcnUAvCqWgOwbwhggiK%2Bl%2BcGqJCSZ6B8N5egA%2BH8IjxM%2FyH8AQK2Vx6Hd0aS2JYbs7IPPBrq3xfN7QxhgaNceLcLNV3XZ9zc%2B%2FCoHW%2FmxxAHBGcd5NP6Y9fJdDhkQxIaU3%2FP12ZAJYtHc9KwLFboCP6afWa9OXuzQzohje%2B5GCOOl%2BOjSsDAuMB9dsRDQoW6UMH6X4WBKBSxbfLWORZ45VqXmS0qR4ksnlu7NGlliqQggSo0%2F1%2FbttWj1BGX79Lc9yzRHo8LGUuHAy%2B1QtxCVDhBnM88HLGljsLUNGsiXwtCAmmMeOZgzCbwsjMFft3GNhjRMFLG7UT5cDyHPsXZM1LkPfZKqnM5gvYcJchqzWS3etEDPGmY8USna3ZaV%2FmyfrYfzWEIPSkX6XtywF1Kyb7%2BmOqr3dBCzy%2BA4YW4AV7F5e1rv3hAIU%2F%2BAIwpNSz1AY6pgGv0%2FUcgugt%2BT%2FH6OJW7wcmVRNpvb0UkNgDwBxeyxOnmCmz5Swte%2BEvvCS8wcVdeJv4id7%2Bappa9cPCgu5W05isxSbI1SgVYUtxosidMu8mLvxST8xavf15D44Fo67ePsherC3kq%2BuIo2GcD3J7BcBPzbv7FBvo%2BM9sWDNR1HuHvYVPCOzL0eRppEuCzGvRCBYxT4Xc%2FQFBhi342fc8%2B8rDNhZPrxng&X-Amz-Signature=d5fbbca326d458a5e65051ae0fe4ff05790e6e3d27bed2ec73fc48d2815aad67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
