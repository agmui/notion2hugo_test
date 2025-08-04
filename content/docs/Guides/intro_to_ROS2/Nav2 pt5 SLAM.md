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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=e3a0616c163a4aaa47d0a1b829993212b8934cfb3c6d705eb20fd0012c0e5aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=ccef6bc4067c79e2a38b6979826526383bd8ff0d2c6b5cd062b93c42c560ee50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=11398fd60a4e3758b4fd5dafdc5821b4d938fbcb55b69f2d7c435a983ecf6292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=18403567cf0e0fdb1f7ced0d87d9e2d1f2182ad7d2f2a4571b994c0ffafeca8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=8284265a8fbf0f32af1b6dd3713adeea0f09887aaf32f161c42b589c307a1ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=17a6cfb79e1a1a241a14f3e6eda4570934c66ea323d3767f627861b5c36601f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=417f1dc3b70e5bc35123c63f63b91f368359022a536d186874c48c3c7615b43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=ff0353afe11ecf284cc7ee8a99436ebfe41efa268d9a0288809976e6f6009fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=eeb3cbc9e9909c18e03f2c078cc20d82c46053f69685f81be4070bf4275074f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=3aaaf458fca16e55a82627a643bdfaefb27f51f130ffa229f7e4f5fd4357a74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=d4bb240c64adbf907988a241b40a0575cfeba5b636c14a4c0b26f3d3bcef39db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=fa51526fc24b7089d83a073ebf1783978665624117f29239f1c30247821b179a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=8de9c17d294b618ded922c873bb782c22ea35507279a7b53f6573673550f3302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=8e56b03d71765d340a0710eaa66ec0524bebabc00b87e8430b6b973205f58c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
