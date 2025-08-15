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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=010deef4180c37e417884ab08f530a186953af4c5e37467eb1fbfde9da60a63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=3a94039d9e3766121901971c7ad12bdfc570a2c37c3098c5c808ed522feacc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=7707cee2ef0f42f926a7f81d3a8251ac7ee32aff7a32e273f9acbb937b117dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=31cb8e6736717a93fa487f9a8d461ace578c707bc5158d58655a4ed32f63ab3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=b55d132005567799b84a1ff9e87db5a4c4b198b907d5d9b80c5e6c432711cf9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=1545170e13c726e05bc5ac9b7635c66bf60b0f811df634c6fa2de842a8d5bb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=6171c30c314a7d9fda59b1e7e0bd0e2e638a3e8f3331b3ce7600685764e7e74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=06b0ec31dba41bd80f36df912395a5b163c2045160b421b981a6fcb2e24aca9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=314dcfdf30be3c4877f78232cf450d83b6859851356414823828e4705e8a6b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=05d90f1bd9fb05311834a6597d8b822403335c35cc843c1e1a0ac42f346d57e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=43b7fa44c8b998acd04e48f413a2ccdeae71a950f6ac6c480bd85f26c204808c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=5826b235925032ebaba771cc683699f7714986065f7db5bd7914238a52967e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=a3c9f7d7976bc52ee49564598571f9d0caa3c6a4630d5a991d6ea1ec5e5ba3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIRDP5P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAmJyYP3dmK0spbowuLwky%2Bhq0Ltw3vhtlmKGIqH9Km6AiEAhZf%2B%2FdMVn7LIhvFdHmMVdNEbIjaDCmRMNz4DbTaALrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSHMiDSgLQ6s5qQsyrcA4Q2uq3VEQMZo4n540pIGhyzD9jdywsW7HbiYyvECnDaY391iAVaap4SKPhMYnujxQiRLQ0QrdVEFLLLBfM6qUdjxReorF6eaAC6Qg%2BWBFIHYHFZ2qVaK2Asq9km0rJb06lDsXlA3kzd2hNFpTL9FZfBkMeTwAvRvvZ7FSJgs6wOXmCL9G%2Br6dSxVJwgpQLVNZnZz0W0l%2FCXan%2BcNG%2FSRWRlL0a%2Bzo6dheBIlFNuM7sFTnFJwh%2B8t5g7wWuRoNziPK6eWrZNLmINfELRWlYoL4IdEny%2B6JpfXZyQY%2FTPPDeaZGyxB7lXhgaRUWPH1fRkRYO8gUP32H%2FCdPX7vfq9N%2BgCRW11SX9kjE6SjHsx8G7ds3j7FzQFvQNtE%2Fdo%2FGCJtJlt0xRajA4k9HXJcIjJPW4522%2F05smxkUCX9ibucLVjLkvL8oK6%2Bs0MljrnYLB9Ch%2FVXq84SjYukPo6ka9ZiMUY%2Bqz924eoCJr1ZVvI3WxXa72FZ3CvcFORtwWqjJtTG%2FRHSF9QSjXwfa5XXQMbtYRZVIkQU9YLPwqW1U2C3kXJepT93dYgN3sA2uaYQMv1XVD%2FEv8qtg8v%2B2Ah5dRUnL7Hhmq8yA87nVy%2FLbrtprE%2FeVZVCb8mFyTVgiP4MMjY%2FsQGOqUBcgt2LYWlghBRW4QzHb3I2t4Wnev2WaLP1R3unchQkH3sfM6L2CwUrtmP1lyRazL9fjsd9cmNblxelp8Kp5QYnBcemuJ3WMCH%2B5xdSFWRhGhr9WzEeLtEwZiu2UugPxF7l0vBGMiYe7VEKSIWt3pzKLcIFpPupPXijsyb%2FRy53%2B9qs4eRanzeVQHClAgn4o4jgLaS54FTIAXXTLbIMd16egOuuuI2&X-Amz-Signature=f28b3d35eb067419c3765ae77c63f4bf070be72e38abf2df8c77f22a505296e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
