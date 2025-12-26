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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=a22bac7c9f0bb82fcdbfc11fa71d9c7999bf4b0068388b165960bafd3ee9853b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=7f45134d84fd773fb20d51532d9b7ee92377406922001a4b5db17b6ad7fcda47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=c804019ab15927efc72cedb0d4c84de3cf2ea5cf5fa046a2c3221951c4b53028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=e65cc57756eb973202edca5d47dcacccf49ea58586c3766c1e8f23d010b36045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=d04213b573aee9d9ba3826665ffe31361c16a683cf1b4e1a0d432652680b3c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=bf6199816d4726b2bc30ba9d32a1f2688e1b81529c1e7995808cc7cbdf68dbd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=10026995e0cf3c03412cafa9543c4c1cd3c8e13c3880d6b0b9a5fcecf8b2ff52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=4ec49f66d8b018c8cbd376eb267a348f970d04561ed03bd66e42988e1a873687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=688b154a0d317a4e8c52e2c6d3b7d36205e07428fd1fd5a5ec939098e9850003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=266b084ac061368fad5c4d639f4ba15cc5d9234dfbc6ddc7ef817d4a7700b68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=6efe9e140f086caa7d40eaaffb78c14113b20f2e6b6aa09abf3f5eef2203d4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=e76686d48c32b5612bd4d2317a1a1d439e878055fc5d64dc377bda63803583e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=a2328dc4ef04d187d6e76b94da2357c4c79e2b02a6b71638553dd359b7e1a8c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOA6ZMS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEQsxiw9zPhcGtD3PFXY7AxsVy%2FaCJoPFS0HYkb%2BC6o2AiB2guvwCHmBiGx9GONepKJu7H4Rl7IxxaTlZ6IS4CaH2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQWserLIoaevghgD6KtwDdBi7F%2FgGpGO10pESA%2FyDGGEJ%2FBreQsisDsJqDuTx5nryXTazPssa4bLYzWrmsOi2oR%2FTI%2FMAoKyb7emsgulJ%2BJc%2FLpVtRko3Wx9xj01lL%2FwbsKtykY51wwAyogsasgBqIFotzRA4ZYTONU4xsrHVb2ERmML6%2BKKwTILGKjrgn43AZJyHhJcsyzNB7i9UPQFExzlWGNzh9WtpQjlXRBmv91NjQD%2BNH9ptBsaFQs8yIiSVc%2BScmpRIhShaBpR%2Bqhu6S8K6UdWdZmKYu1v7HrEfPZIhxxjBSRk4yFWS6YsnY%2BFFO2yHzWVh6fO9FCauVjrfisBuW7bzsV%2B1cSoGpkPK%2F1bSAN%2BhMGd%2FI6IlmO921hSr4ONiYSvS9rLg5lu6mCTek%2BzPnuUGAotzN3BuKiB9yQvyUl%2BxzFEl5I1JVz4GizegkuDa%2FJHUWy2%2BFTXyql5UcK3r0d822djtgyma3w%2FHMkdCRy%2BtiYmxmzCiGcyk67Ps4Zv0qAm4D%2BY%2B997%2Bh%2FPMhCL4Bwx9W62KWuPCGPvGcporep92cvFbcRPvUyNBv6sdhp24d4xqadSA8aTyMRe1Nf5qltGPLPmn3E3EMpyUyTSvxSLxS0ndtvPZMMCmIP%2FQUBi%2B7UfwFoaQJOcwlK%2B2ygY6pgH%2BSx4MJyGHpq%2BK%2BgBHADOjmXNXnFz0NHsO1de1Tr7jhgp8528OT7CV7Zaohl0uRrGXh2sMY568W%2BOJ%2Btub5Elg5st3ni%2FumWo%2Fnj%2BobObiSGy9%2BjqroYwIxwNjgF59dKXMF7%2Bh6tCbMrAXg6hi7mQYg46oWu1aZQl%2BnZHqzadGT56Y%2BG22haJabnR4CBWkTrMbEtm%2BPqDqvGe1n3hFIts4kPgPOGJg&X-Amz-Signature=f734e4126f40ae69922b8af79af3dbf86d4b05fca78626e3d4899a0e296aad0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
