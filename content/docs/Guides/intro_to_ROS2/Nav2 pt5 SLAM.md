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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=2888e2dfaf61aa91f8860c53580a4e8f8940ab3b421e4869ad8c12957d5ee309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=f47d91a9c853c12c2e7cda8e584c5dc134cf6da8ee447c908a009d1d5ba5a2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=4c08f2cd886fe6b6f87d14a2fe48767251315d13133cd7162c50cb0088753ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=c5a3bfc0487f1394d7f0b6cea1e919522b563f492ed4b256bbb61eb245be3089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=45e10fc668daf6b90ea0f787f018179337ac2da565ea186f93aba043fa5f6e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=d43432c20aa51fec3d3e7fc605253b76b83a6f072a0d94ac01254c588ab61ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=35625c9c4be23dbf5f40ea6e09e88ff7978059bbba9c45d112eb40c249b578aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=d2dc48a61f619e7ba3eba7e598c1c618bd3d0f4798a7a9b1bfefeebeddcf4b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=10cd3d10432527df1e07e92f35284285f1d7fc169f2b56beaddba4e829b2c7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=b3be930d0ac8caa889fe70fa9b42787c692c71d95a8428d0b6c69e70caf0dcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=9047fe4b6d186b7cc8beb9fdff89df96f4fe8854da6b5e66ca78591eb461ef48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=daad0a1d084df532e8cc458216d5b21d6f0939df84c700f562231a33882063ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=345652460bf090c28b2643264030b740473788d79cf434db162409edac0fa687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGC3754%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC3ObkMpyrN6MP%2BCnBpqfa9AQx3%2FYgXgukE8QR5OUjQIgHKqmeic2jXMHdrRyASOBuVoXPy8i%2FNyNuO6HPgCb1Z0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjW3yWXWRKrEG7NTyrcA28rMLiMr32%2BJ582zFpVdthsopnREhQCGHOViG%2FX1teSU7n3t9Ekiu7U4mRK9JrrQgK%2BC3FX60TKsaLYMfKYcwE3DEXDUoDRWrPIA9nS%2F8oE3vJx%2B6A%2FbzY1x7x1Lvllo17YpCajUDbwQQZL704an9uCzyBkxi5j1%2BJZiVkhtrdu%2BQeItOd9y9CY5Gl6LM3MKlLGh7mTb5N1WrWHCUPlY%2FKPd6goLrQdwk%2BCwzHxobPFcRC7KrtSSskC3A81RqEVPA7vUZC1g0eyCeN0hOzlnJc4YqpqVrPeLLZ0LpkoC2DTqCTy379uDSDWlq877DUqqh1%2FiS%2FG%2FriXQakpt7ANALyJoX%2BtNlJx3MGAWFNiROwRL%2B%2FUS0gmw1xBpL22jR5UCnQJ%2FSQUgA8E2DF02TfVyEmKQnnnv5utanH550gO7TazBmMDrG3m78djo6BDEacujZJs54cOC%2B%2BbugYAwc%2BxDu4m151TUyhERy9uk5%2Bjy1w%2FSIOrWeFVAVlhWxSD0sWRyqhvOyqnRFI7iB69VNMfDE5ZcplwNi97ZkQ8mnK4ACkg7nu%2BrdHP%2FABPbGSGTFsElQWHDhNs8YkD3cXUUz8EfEJ8fC5VepuQ9XQIcSSpblzvKHAF7McynTpP16mbMLH4lcUGOqUBK88lbkFr4vrgTdL4cdiO23GOpfdbCH4rI5ApSZ0gT0Y5x5qQKxJTN73YraUe97Dtp5RiF2P7KFvDUcVGV13mXcTOBI%2FVWXyZXomXu5df9xxon9jQu0sGUyKwZ5%2FKFOMKJ1538KnI4pzla3zPf1P%2BMRiXNSiUcdwebjwLq3DRZr7zrGmmfVgqg%2F232mPNQjUKKhuI5HLIZVEmGLcJ7spnM%2BDKR1oU&X-Amz-Signature=d7206df4955dafdc131a47de20ed1362cc47510a43f13d67ec5c7216f3088a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
