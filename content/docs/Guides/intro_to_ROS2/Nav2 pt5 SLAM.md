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
      <summary>What is slam?</summary>
      TODO:
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=142b32f2cab492420a124176838c5268c60692ae5bbfe4fdc9c8f6e238c39a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=be23c041fcdab8559f1c6bc2bc7279218fbdbe19d8564a754c935fedf883ce2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=40dfe5f2a1e49d0a6040413b78a51a42d239b184c2f0139cb8998910f48f8da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=904d9ac16a1b32c9f6945f49fd5384469b5f10676fe53cfa7df546e268bd8e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=af65e33ff6a51a1a036ff1885d79f6b566d0cb7f9b698169b7791424b0f379d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=c6cbc79646771d587d1b494b153b3f1443db354364d2f52e4cd719a4e9d046dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=f03dc689d67785a304b8315f3700fd72f9ceb21137591e2c6de5f149dab927c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=c8fcb941be706e7dfc1b8284cb0d56d26d7de296f3f0a6f48c2e48ed9a031db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=90c8081fb277f4e9811dcea9614d1a278fd7b73e6d542eab242eede667a7389f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=9ec0981aedff89ab68a262004bda15354a77668df77c199c07cb3ac14171bb7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=005b71120a5baed805cf894f1137ee32b6f6a65075da56eb086f7d57e302db7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=a04923e8412eb1610692f32120f5aa243ea68b0237bdf95997629d2b0ffc878c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=8b0351d6117e4100ddedcb06056fa466d2d3e6b34d9aced2ff2b68ee84eeb51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPC6O3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHV00JBmlh%2BnQpBTl6FOPOmQlkmbXa2G%2BHSK2qdKANDgIhAKpRt5n1HQ5DKdrh2YBUy0ZoERQrrAUm4XKXTrZLfeEHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBFNX8qq8PNStop8q3ANZ00rTkPIOm%2BS9DdPNZNGb8q59kyzFMt3IPwKZR902HnZASw1o%2Focxudp0K6Rs%2B5r7Vvc1lyF0ZJ1U%2FIJHBFQMkWBtlIwfqrAW9rbvx5X%2BUW4PcqCEYToBrc7XzJZYAkx2swdxJY8oDPZXvNBnSFr4fcJGlgfhL%2B2RZKznOUwPvYvshgKHGj%2BYziE8%2F5XZlWRMZi0By5HH4tS7U%2BEGy1us9MxAsNX5IrSR96YKFor64yZEZGwZcrlTRJN9YgebJzZyDOev2r4mM6BMYrBVNxBJ%2FdhwjALHJwySrigeKSPA02JROLC9LHmfHIvecUSFHGsDnh%2BXVxb77NSQgpSJ5kLJAhDfEJzbQ5M1nXaRN7O9OW0ieOAOsxqCLMGjUyA2LSoz38s8E4UdBHfJVnxKyC9myYyHXQCf%2BGzoPeo7lc9z0JY5a3mWAcmk86nACqVe4ncuoygyPAiosT7Hb4AYm5wmcYIznRx5tGT0Q2Yjf06WxfFv64IikKx%2FcHGuhydmDv5zPWDqa1Htos%2F00cqul2Ax9HoVnka8LA7%2F7w8kZ%2Bv6jxR8aaPOppmZUeKW3SfLoUQzUSp4BnDcVQE4VMrWRHcHZZT38TIaNH8yT2lX7EaNE7vEKw2hQvAVT%2Fp0EzDbi9%2FEBjqkAXqZIa9wdm4mss78TLJgmHirJrZqCM5Wh6tuV%2FwyCCpJYwBR9%2FikXQSGR3Fw9uyQUhw38BvE3E9Kvvf1RkNOEqGsRnCsNXYmSuRkBuLRGRQcWCQp8ePUg2YqQjx2JQlMpQyeHp1xqd5duq6IOaQqVw30k4xxldZc8siRJHk%2BVL%2FMGboLkLQOpxU%2B8TmeEIfOPxPzZB4gknJ3aEjtSNaUlsAKyyub&X-Amz-Signature=e84929db4a372ee1b5e53066915bb9cbcbca7ad48c0de3397b6bcd968ad6be47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
