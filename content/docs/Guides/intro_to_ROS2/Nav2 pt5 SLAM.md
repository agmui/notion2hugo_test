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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=0d77c44d9cbd399468e62c3530cfac09409e1277ea15fc35939f55ffd0413c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=8660cc7ae0c0490c66a3f5a584f30e17d958032731a689eafec1e6c0e0c67fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=0cb6bb5e0e91bb94eb2019b43e39ce12ff27cbccbfba7bf90e62c2baef6eb5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=a5736567d4025a18efc556d066c34c053b4cb2f2a2f576f8bd0e2f5c59d2737b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=631e2ac12b2aad0c38a38d3d59f98608bd7b5b3b8aae9b6570dd14b78d496f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=6c53eb31287994c280e34d87e484129f1ecc95f13ae6d5c9f9b966ffab45e1d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=6921052df5e6005810242f99eb50dbe8209f313854129dfe19abc4607bb52119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=43648a38ce50786b4781b9d965c5db3211464129c09d1ed7904088b26111ad02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=e89ce10641c3d03dfff5eeee80a70b29e8afb32a52af2daf76efc15005b59134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=e4fb8aba73c4ae5457fa52e493a538a612ce15a4b4d90a5c7122eca0321bfa11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=4c49a7219d0b26f302f91c5794e7a803260e57bf0e64c6be15b7e8fc323cd213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=3d1794466b372d8b709e98aff8ad935be68b6df2c6c18f2987b52f35d557b274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=0938785f429dec2541e0b5be8a557c0b3709eb7a6d609e7119b7964ed35ee10a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SLUA4B%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICIcKaw6%2FH5DT4AiDhl3FAcFW%2F20cv%2Bjmz8pi8jf0BQBAiEAr%2FjCjtQAbfhiMNu2jVXvQ4r%2F5yvzPDvl4HlfCM0S8bIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqusHRidfYj1TRGtyrcA0xsvYC62M9gFX0oySQYTQ6swsWQjBnUigvaGdbfxR8sU5Oa3%2FrDvJqBC6Oj7p3eQBQrZCZDvP2hKIGORVQA8yQXKVY%2Bad%2Fl8jCrfgiiDXcYmYcCYeEWKk9urUHOVyid8rAe5Sw2GmKlFSJ1BDKC6j%2F0PVMrhtaPrR4fzXsaJ9v4BzVxUMUKeC%2F1rWt6mfjuJc3qRlGkqkVz6tkAKur3vkTkvhLy6MNCR0iLy0kUOKCnNM2dt%2BR3OwT9ZCfanETbVZolXzZqr4gxrttmfF%2BxEkX8pcom0LuMQP6UNNQyPh8wSkJED5T%2F1xaUILuikmKWT2diXxugdl3k%2FbXHs3N0vUPPo9x1pKr%2BuFmNAqLt3%2BWqszwewTHxa560dFcLJEDIGdLBXVZLQB962qCF8Q5jmNemC8oTsPAAVH7%2BmxgYFnNGwCuIZ9YzFNzHVUrku2%2Bj0Y%2BRegqHIHGtqXLx%2BL4MSGvzV4QaFpM8HcLRjbUNWK3MdFQbavd%2BHv7suPTmdW2uQgM7z9cnN4ZtoLNxjpkgq%2BP%2Fe1vu3apzHMN4ukgMLwz9vucrIEB5%2FDbG%2FSrouoUguOcxjFyBgSbVQy2cH1SLljhDN8loCq%2FaPWlgur%2FmY58Nu6x9pJf9PhK9XRjTMOPqicUGOqUBrF9zVY%2Bd8rlEaBBBLnRwhh8bo1Diy8gUTuHW7Xfz38%2B9bX%2BKYrHVKsFml4AzMAA6iRryeSa0cSRnhUDwwfV6s1uvr3uQKcxFKo4jMkhYj%2Bb3j2UMlOB%2BD0oFZGHVGIIUtmJB9lp587MlsB8UM%2Bg6d4QLtCe4Vtz41Q4JF%2FG4%2FEmsRQiOikj89F4Ycv%2BpYSsKfGaBRAnEaZBKODAaf6H%2BPya1abJ%2B&X-Amz-Signature=683b9a1f4dbe9d178c62ce2c6dac93c62943904e3877a132d34eb9de650e586a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
