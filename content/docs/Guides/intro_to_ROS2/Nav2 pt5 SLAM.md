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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=7a7497fa0b05ac2036aaa70928dd76ad8b3843b3940999f6dfa3321020db0fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=bede56dac013e22a2731aa3ac6e2af3f91d74511c12eaca82a857920594bca37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=3e58382fbf91d66a8167260ff7572e32f0e8c2aca2aacfba266b0884cd26c11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=199f16822684b232e11b218890f43f4fbb80a775951b7baa5746af23affa89e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=502f997f2f49221a6f3cc1ec063635f45b5beb113a8c66a62ea35d85745f3d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=0cb15ea135e4173b77c65b7b37d5ea83d1263dd7993392614727c18a0bc09113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=25118e35261be417705fdeacda04113628a5aa1d93971ff0a569fa4411535e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=0b174736d818cc3e891da7b4c8148c7b0bef55f9aa45daec49617fb760a18d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=68c886fe2754a44ba1495922fb460a14069f8596b8f4fcffa80d44c13a35de8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=0098bc95248cdd2aac20480c8ab44374798098cf5504d8d8c1e142f9d3189220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=aae7df61773e0d6cf5b405ea9647ca7102752cfd568fc5ebc7d72690cc07ad07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=ceac2be9e97f1ecefe2e2d8c0bd8c32120ea9033f9cf8849d3334c79b490bb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=eec22fecb2efd2ad27fd657e469bc2c798945f1220c409161ac6f11684049d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675I35TZP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDzS1UGqdMPO9ld7UKkaPooSqFcEdtV%2BsFQ0HeLxA4d2AIgFPf5BO4T1nNmA%2BUrkLYgoc0kK%2BefzUGi46IOoOl2fJkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx98683OWqeMtKPUSrcAw6Ym0zJgutHsDxAlSZU1tq%2FGq7r9KdfhCm3ovB4PNahN61%2FFCaCD%2Bs2uZ6xdNj3%2B4RbgO88q5JT%2BUaGZLfxuABuKx%2FdmqWFrXHj26oL5n4reJYLuzNxVwH5%2B1Rc6Mol1aKHG3HEQhuQbX5nB%2FjrlqiqRCHpwUSRbONbnjnCzCu6JHhC9VsUPiuIcIClpUJzdbPBjJbj7yr5j7NERatbkkacxC3LI1yDogTjA4GDzBCiDTZ2nseX95zE2hteRwjaTrBl%2BQC3pRBsF5CNTCZthsC8UOOv7QqLSbGXaE8AHFMYChv6M78TvvvNjul8Iah2NpIhaY%2Bl1bzc6uHmzHCO0cSWBwgbmMkwR10Cp%2BrJgVIOUlOvmdpJxNXRm%2FIOrwDSg1b7SdfsK%2BLDaySeFV6SgOm6F1XdTg%2BVJVW0teq3eBp7zEHE5ycxU5LobXVVwSVkQSJo0AXIlKDUZ76uKseft8ZD4%2FSB3RjhRf0GW4zQbYQsJBo23lANYnKDLIyldLCWaMNrYMK10WxfF0WfgTbbw%2FxlzJY1CXQO5NSQ9%2BvpxS9kVM4M2Q%2B27NsflnF8iniITM2jixQ2EOAyfcaOoLUj7X31oO%2BIB1GprpD7RuFe8JKL%2FjPTEiNKGLB4lejNMImt28cGOqUBOZeXxNat6wyxMZ6Gz0ylAJ7G55cp5T86z5wzBOdMgDS2Grosqz3PRBYnN1hyk1WvFeMqOOfLyg6G71lGGXG%2BvLDrara%2F8bmhrNscQKWS3IzDWLrgo29H8aYo1PPUftmRiNIaVSkwruc5YsleHvkCoZ3U%2BMy7QVf550BmSB4iZlXpvfGPlEAFE8JRGs9McdVbaqfnU2XFTByO2dKFFtXQNb3pEH37&X-Amz-Signature=e0f91eb147c6b059fe1d71b9f16d3699756d097ee46c00ba483e945beb566f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
