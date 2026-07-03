---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

</details>



ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=758115309203a70b015cf7b5d6f0d07bc5c6fdf3827e1baea27b08f2db2128d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=660994c9d4e39f2d972ae0db548f4116f83417a0e5dbf78631d3bf71e47eed51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=0c2ab2912c535626f9926b90262b09e020c8690557deaa8f6650277eebfce2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=8c0d7c562f2e5e713259dad9e0e77823ac7439bf1fd8e272ecd9f0ad5d7ccc28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=e387766abed19be800a7da84b5cce9e68c47bb778f2534da356c9510c11dbc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=0d4629a1bcf9849c549badc385a45177a263858d875a284d1de1860484950689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=3627b1c0f7f89b46e583d9afa011c1c1a6d69d7574b0ba35b42852955428d47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=531bf6e519547688ca42a9c8f280c808b526d7035633abc0edb8abe18743614b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=a90629a486c1c6d37996a5fef7c7a071c65efeef54603de5cc5788e3017bd6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
        }.items()
    )
    
    
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=6b89acca343dd30f9738c6c57ad7f257d6a84a72d8e048f0e4d944eb007fba12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=657c0114f903023062840bc1e4f3789cb68aa3811351b5f1e31b9cd0130b9407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=84a89e448a769e61766a2f7b2ea49764f80052a30e1d1d0949dafb0aae96cebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=d117d106cba313ca2da1754ea0c3ed9f8f9b83cfd7213f04be07d321b6620354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWUSXYE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDK5%2FpUGCcgMPY7s4njnm%2FObQjRT6Hz3q350kkxP%2BPeAQIhALl9Zzgo8x%2F6Fj60kUwEy6S3FxDwbxbcJ2zY9WYhPsHIKv8DCAQQABoMNjM3NDIzMTgzODA1Igx237oHJ%2BNXjWthleIq3AM6k%2F4B6G7WYOsylQ2Nc8e2ty%2Bwb8pP5guOBy%2F6XVSc76RR9MEIxZ7S5mRfpSZKiWKKhw3TRRJ%2B2MFtw7SNEHIeGZvgha1mAZIuvnHceSOnUsdwmwef66PtoN2YNgDKLsszffOdMQEzuA%2BJUWV1Bns4plOwdjC92CnWK%2FXQhM4obRJtTCOJtN4E6sot1sK5U8tClGtHCo876gVn3YiuLP5xhi%2FLmUqrPtsQ%2FFnKg%2Fkv7b%2BlEVc03lRDiTyjDLRjlgib148igYbPBN1MKViHsQD%2FHMCXQQ9ea3GqPbucNvaYc3RyBQUopw8BGWhmJLyAmj7dlm4sJgExfqi17YN2sshxxCs5IVJbs1LGhR9xT9wkyrTmjnyEuKvR3kEYg0DL3RprERkabYG3liPPpcDiwzv2quKe3evNwSjZkMSp8hZGDM6wL0Xi%2F79HDkZzxP92uaFlD7BBLgdsA8%2ByanhFb%2FecdH6g21ZWFKcGGXv2M0qNv4eP%2F5HA%2BIDhLCV%2BpAEudNd9w%2BknrqSzyGw1HxMRkgr7KRNJSIXSOVbj%2BMqAOqyR01%2BsDOkA0CJ5U2a9hpyvS3RCxRICZ7HnyExbwKBmAxTWux0jqumIe8zS2i62L7aFf%2BMEyhM%2BSkBlsIvZ%2FzD1upzSBjqkAbkirEqkGHLgXH7RwLj5e2tv98WOCHk7sYDEO%2BY3B0qHnQ6VqStOJJUFMzZyGk2zj4su7gzfB3mtkaQmk%2BkQlEEeKVU%2Foi5ihZdzluNfzNWzkZA5K0gvCs8zlxLPCErWR20fAjjesQvpb6S4a4jtKeW%2F1VKNHkp%2F9X4yB3oL6L8PkBDMSu9ZmVxudhHe5R1yf%2BJ0Fq%2FMkmVNLJytpAbmBVg72%2Fvj&X-Amz-Signature=a72b123467e86e7f9a281e381d84fec64d37b6958e87d8b675d5122cb4483245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
