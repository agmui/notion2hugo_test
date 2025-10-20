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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=ab59fa2f1e9705b7d8941e3fdb42a1bd26c946d1fa3080abcdd604d967138a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=b66fdd9a095af4f1204d7526e0fb69282bd4184c560729f90dbc878f76492ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=1230a6093cec4a098cd2973f4408dc0b3fe57fd2e405276a64df06b1a6b802ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=f700f67e4b4ae48f714ba16488b6b543185be1023c631faff62a125b67f729d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=bb3309fd48aa31f7767dc839c5bba32feddd742d452ed7f8ae43c7ece42bb54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=5d9b7a284fd3a0fd228f011886edc1833c37c21aadd714de0a4078cc3ed28237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=3c7c742218be1868e46565f2192c8524e27ac63bab74963345161a3d5950c09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=32dc0c3f334280422cbb242fc8984e5c5535834400565353f19d7afddab32e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=54beed594e25bb937a832590d3f646d8ecf65f2da23d2ef10c7b291c4e389b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=13fedb35ec9b9cd24b5c9b895c4caaad16a612c52ef0090d86bb74120eda58d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=015c23e5917625b883d75622e730d7dfabe2c62f3035d0940ce4e6b2886aa221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=ee4b5bb9601b8fd9413c6e4380b45ad5cd0c95cbab48b5df16103e0a51e3eba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=6fdc0300ef10744acb3046e096682eba91a94aabd08d7075765eb785d5e3b90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYJJ7EU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDSt2K8N4AsU3rcJUmOq0EAEkC3HyF9I2Pvl78LViR%2F7AiAl1wg5cM4RnRZTfBjJvLwhWkGPwxt7StPTJ8m4KnmMwyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CN3hl2C%2FIgUoEDvKtwDDAQ7Ii7G5PjkU63hZCCFeYFXthoXZ4tfyk%2BQ%2FdPWgdCJ4AmalXH6zAohpzAg506%2FUg1PtKlqww2obT3COSBiGdcyTujJPbklbmqi6eGBXBzGfpUyFKarGrl8g6UcLvWsdvoKfep4cMAhXCVs2q%2BP4aauErkQI83BFe7atip7Fy5vPTn0ZTL9dOC8AZ2UggNvFR%2B7hih9TZdSEYoE4ukTSjkEJ%2FBRTPGwEsPIusYtPSGvCllf9WtBAZH0tptj%2FVGL16KVeoEw9TEWJB5x2oxfR14PPXTg4Na1fwH4yyLlihePbg7hONcH2LEv4my4SusWvuFk2fhgsT5XcB55HftRsoAeOz1r0Q3qSkgtSX8l52aFdgBDRQtgajbNbytU0AxPhl2ggi0XhmhrGa%2BEpOhkSWUV7ckxK1tsoPOkSUX2GtM%2BlFYj6H2F6jmBRfI7Saa7XZgir1ZD%2FMdIHmKyEe2pbn1wGXqftCWSUjpFtXkH6p4X2DW749uM7oa%2FOnNynK%2BRj6GUpA4W6nR8rLCRmt%2Bou0ynLAeA2FRHn7sjY0PKKwMnlYjbZg48I5JQKctWtYxw74qlmf1l1R%2F295KiqRAKVcuj2RKWzzbnHXqOvigB5VX4QufknV49IswnyA0wqIzWxwY6pgFAZQaqfuPVeBjKu0AgzQed5tbqg7v51yS4Ba1RiJycoGKix1iV9Hv%2BXwAZWNfUtUZIQeC5uHwIBx3kv0jdcR8UgUTX01rfMSpDWE4VsdOJC9EEHSKiTEKDK%2FfQcCgETyK70mamAodk22jnYwiL8zaFeQJdBUKmOkwuRwOPnX2xla1nvfzCx3ElxiC1p8xeylamCWzrmJZ45AoO3WQSDeg2vBuufAKb&X-Amz-Signature=36445213cb41950efcc50c1ed6a5745dafc32de79bc79bd0f8ceeb3b951ccd7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
