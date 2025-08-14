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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=32d319472a0e1974bd3af45dd420854734e792dccdcdf70e7fbcaff6d01f3c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=bfeaaf228d890b03dbcd7fb4c1e348416573db80ba9e5b7a635ca947cfd1feec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=844da9956f7d716c77e7721a17c038a657176bc42c0059149a799f8b3bf6447c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=3773be235793fc4a6502da92637d261e73f0d6b60f8f719f34f2290aa3737397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=3f322cb46591bc42c0e5876d108bf4c854f1f5aed342ac3684412659d20540b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=c42b6be0f9c52333804b170534124b4040a5ea05cfa638ff6801a2ebea995346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=4ba3df6ea7a367fbf834b0e6272de16a76c38414f18a2a5c9e721845c10813b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=0d4c6a7860393d65c4b053d1b9f11a713e6f32e3b103b085967b6995edc98250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=bd9cb96c00e220945f4b197c1503e825d41c84c1b364eda9050698ae75cfcb81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=fee03d687c07ad34bd499d486a298a56b88f76ea9123f5a8456d2e8f77787f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=513dff74cc2d15e5ffdfaefae0ad8e97c66fe47936808e6b74b3d737a4b33075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=a3e6bebdaeea26e5e28ee783c858d5a68db8852a3c37521c652200d51561dd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=f140e2ebcf79c5161aa92a203259543c10f26858607da8826574f5c48063754e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTITZJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC62dHtW58%2Bg0llPhqBSNbhZQ7T%2BRBk14VUpBGecFxBvAIgfIYebV1ldbaQY1%2FFnIlOs99ptkjw%2FlSwNWNl81qhqFIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE9tVjNXhKTrwipkKSrcA6y7be6fhfU8%2BWX%2BQSm8ep%2BPoBJ8fagP6OefybMB0LwGFFxEYtczVQhUe1mxbPAjMBIyY8ibWjuPnKc446t2TckrO%2FQ27qrqtCrO8De2oq1zit7yVgS6kme3HdalusnhMsj1jFT%2Be3DU9828%2F7AC5DLWYGwrc4i1%2FD%2BIEtGEUdL8JcTmSTEbxnpFHV0YHpjlX1nqzECNnYmpM8TrC8zJed0CRhVcY6fIpj7hj7OgMXY%2FVIA%2FdCniYHivGtPzmk331BEyFJYVaF9w5zEYfTUY7%2B4YxTBtSA1JqFtZRznsssvysnebNFFjG1BBG11Azy1XZO4QZQKGBh9avP%2BjzU8N4wCPUiFy8qeZUv7MMgwRwctIi0dpd68ZlynWcsClygPAH1k32u2v9BxQ78WCplULschjFW0W5Oa7ivro%2BEokuzbPRZ3nj1iDPfmHDq4S6N02LZxaYT1%2FV0t1ingmZ6qIdw%2BES6iGr3ZqV2bYpunyhl4LTSSPB%2Bp1FEw%2BSDQih92hTlPgQwXLGlcV0XeCepnoTvTFrk6iqJQJp6Bc9zwGeuFPl5DL6HMwm6DBUSJ5Hebrw6pH84NGELUvZIStdGgOZjVMDmTiEJxcld3Fm6mB7SUA5GYzlYv5Yc1iE1pRMPzf9sQGOqUBhLRa9IDwxE8x6fgvFWrOfjMuBFDhAzMAxkk3fG%2FyBWZG1%2Bj%2BpkTqLWqplj2lUU371E1TToW9CLHP4SBd3UdnWVG%2F%2FtJnwdSf6JeJP5g3YY7FdPkJyXGJHZPQMdYRiA6WVoVkTGGk%2BOjMo%2BwvZeQRjA8mvuTKauchc4mfRzzzuGij2CO%2F0LG%2FaMLhAWjivHfHBLcRtXHJd3h7eOB%2B3LGniebYThpK&X-Amz-Signature=9aa2a17dae281234ae7ec44da79aa79ed589ec65b623afe5069577b5a4bf2019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
