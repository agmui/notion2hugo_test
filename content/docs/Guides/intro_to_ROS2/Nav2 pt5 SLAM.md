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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=fa317f1f349e5eac0afe5332508afe40a6c6bb4335e379292be8961a1eeafc2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=1c3126e2d3dacf4aab8a218e841d51d2ca79b5c227789d488bd06a70045048f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=4a456d689a9f5fc798a422d7078fad87012327f01263f6750361752d7febfa2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=3c5dd1dcc561565b812c992ce70e99eaf611a4d473cff912cfadf838153f30af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=4ea7ecba438717c169c26e9cf7b99846261ab00024a9d973beee623afa7d548c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=a284d47c59a8e38f2fd89ec548e81e7b40752dd9f863f03d0668fb5f6a97f85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=cdfadb476b933a38857ff9e0d351f371672c84434b7a3e54376ae6ea706e3a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=0c1845a0466b47fbc13a0abdec17a6afff3696a83c9a3e7fbe6a37b0007a4a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=6371f30b9e0c85acbc7302e20ac3a31d3f354ac83fc1cdb54250976ac947e13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=bc6bb0b489942def800e8daee5b5b94b0c2e40249b6cc9ae4b8b1df255cdcbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=3a4c7414b0497f86a1942b57ab9daa9880f8276437eee3bbe9420aadb66373c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=7f26e139dd8a3dc5d0bdedbe9676ad9339c7c00fb491b3e4c54e021c9252102f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=2dd137c3ca43df048873d184b0abe3429c98f24a77da3af8747be60ba2b19a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP6IS7D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkTp8AZduwfbp0CbjoCjT56nJKBPQDFECu7kwTFIs%2BFAiEAyVgum9HUbFki0Ddpc2F7FSPuOMPAfpJNOvyfVnObPbMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJk7YbS%2BgDSnkPZnircA%2Fj%2B%2BuXw2UvUfsLRNJo0MyVNhdnPcBeP%2BkzymkSC7W4tj5bBe0ZGAu6pLLLgQ%2BcH%2FLO1oKIyQmRjD4Ynf2Rh0H9%2Blhqi%2FZnogdZCJ1GXJVoQoOfcyTKzaKv6G%2BP2mNjXYphzQL56ls0tsq%2B2soZP4ZItlEhECZ6ywayvp04kUfoaQDE5Yaq09%2FPcAoSpT5bj1tBbKbfP5%2FzP2FCfxFXMSxsG7Jjon0mBnMx8DYJMiyw9fX43B3RGCGLkYTCxDu9OFwUJxfcV%2BVKJZvYZX0atZWYJ7iOHtivdmk6ODI0b%2BgTtPltWP20D9%2FoIx9yumXzSIHBND4zWs77OsJiA8i5X2sAvx6vDZEaUXV1SA3sVqQpconl8CXi9R0Teemc8ymN%2FTiCr6HRodtphSlbdBfqI%2B9ZUp83zxPWJPn3aldSId8o1cp0csEVwm11spoTARxXbNCKr%2BYd6Fpbg6yujrLwGnkidBAeqmCGDEp5jpsHv0izYhwwfICvSxRbff7r%2FoRNS7MHdTUbzKHvUDkNNaJLUVK%2FJ950cJWZG0KtZGjHEMzxdRMnuT%2BA6RKAZ%2Fjszm8UFyPGNGZ5eFZVAQRxmaL48xD7fkcP6yxWS5iwQorpoeJ%2BS6QlNG%2BDnIDjQ%2Bv%2FMMLr14MQGOqUBWdwnIqfEahVcB9PmK6wpIP7nvCHZSbt2MGFy0na0zcRQI1W9jFVgHu0APS07XRw66Rtqh%2B5W1X1R9X8CWstZz13xNL3vOpb1BP7XyParnFBonwO0AsD1EoyEAMATWfLDxBrgCID91fue5HDBHH7Z5BZBMaZw0M5x24QKiggfh%2FQrjPfXXAoVb2ZsH6KUMyfnkbe8EKOXaNFjzXbpmdTOfXfvuIwc&X-Amz-Signature=6cd1482bcc2ca44853f47c15dc8e0f6f25dcd867bb585821c24273874d15b848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
