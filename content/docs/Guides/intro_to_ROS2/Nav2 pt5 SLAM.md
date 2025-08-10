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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=46bb0d520ab06840adef53ad08f2d3e2e4fd57e01e0a4bf42278e71ea1d26510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=53029187efab4cf917f613c3031e11f47c23953255fca47d353bc61cf40e0fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=0a3a88f15cefc27a5f6d3e6e28e623bd15650d8171501a666807fcf14610b931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=66446f072efb03939ecd156adbca83a9e393b56288734946a0e415989e534f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=d80d6d53c521a4530591a059504329f669322cee7507c5e7bcad8a97e768a2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=60adf27358b9a90bdeb15e036376013f7a6f4f809124e88f5517c8a3a1fa2941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=6b38521022469aeddd94e35b1a443ad83e4f9775daba4b49a657e2dc0e9aea6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=e36e50a3da5bb006cc8b18882452bbb8e4835e24c7df0c41ccafacfe0087721f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=e79c7d5bd45da2d4b7d31e954197b63bdf0fe60a49bb266591e37fe18dce6a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=a6c95304347d6fcf6440be7e1fcbcb34577ad8e2c13265fefe4971bacbc2a4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=37316005cf599d67b9d15f27ce0b9915c988baeeb1af1f428fe66fe8f3aef333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=409383731a8865cfbe9b7a0c39da110e2c757b5ddb9b77207faeb4bd9283e6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=c96f4667a2af956e3893a4723d4e4d03d48f751d52002b858ad8c4e65e4bf64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX4MKKY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ%2BKeNXDzvmc5v%2BQK4wbooA%2FTVZm5TfiLiFbXhuzX0QIhAPVVyhi7ykqtIMqaVJEADDGD3hC1DD2DHuq%2FxqKLON4BKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk7zvyjTsCs98ZEj0q3AMIjAH2Oht3XjP3U6FO6g6oGbbTDqrBUrH2O6EWYS2s0Ze7ShejCKeCBPFcKxBfRitJOP5YTwcYiazar2jbvhM6qPCBFkOKiTvJNp9xYRrCVzApSf5%2F6IgPuy3KkplqDkmQlHMUjNg%2FBWag%2FVVejMpsaQ2nEQajuKe8CK8JdqRDeqolOCpEoikBZjwnpTcSwkOEZL%2Bke7d5dt12FXIDqv5FbGLfloEWtR6JJj6Hl1SF%2FOw7PY8QSVoDWlJIcSL4ynCw9cSP%2B%2BJYacEGoF42n1Tj6Af%2BhI7g5G1%2FPRmCquI0sn8F1gscvOz%2BVCzyhIX7xbAUkre9s0Bs9CIwshpcBgUgzPL1F9QZd58crTunBYqJDtwHWUHE1DS1KhKqRgP7jDgKI1FJoo8jaxNCXviB%2Ff1Yrc%2FcqBhUe5QrSs7VxRlsR82IL9j4RwUuc8LgGME30Q3xVI%2FISGws7pf0%2FU6FHctXQy%2F1dBcsuC9qY0yAoPr1vn0%2B9n1pO%2F9h5pnUaI2jkRRnVCAR1RtzrwqvCICfJ6pSdv0t1IYLZWlmy91rtsiQSVXfn%2BmdC7Q5DAIZQWqKJvYEP33ojmFRrT1vrWbi20JrE7Im5lww%2FPTfveJ7trIzrcd90IyINm6HaZpwDjC30eDEBjqkAaAuH4CUvjP430vtYSVGQRw8fdTUStaYymEOR2jXe%2Bkct2cXEVxJo0Oe3VjyGfLmuSVJ9AMSj%2BeV0SIuNOnOsOH%2FhJE6x4nizFpeaZk9Yi%2BKb%2FY8WSmp4QY%2FH%2BBiFD8tQB6TI%2FV5f5JL49%2B4XH5OgNOvCi2qWAK5Ewszv61aklTTvFM%2FIb0AEf3oPuCKWpX8FtiGK65HlXfL4mmvA17zFNnGRe0f&X-Amz-Signature=9c8f802b9b60582b4f51b04455562e1b0339f854770ea92c842459229ae0334d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
