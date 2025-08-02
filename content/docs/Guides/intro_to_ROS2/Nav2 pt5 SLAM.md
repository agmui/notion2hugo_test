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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=96ebd65ace3a52b69076e160efaa764a43aa93bc34fa430365b7a238cd2d246c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=f6fb950ff50ae627a3c15c2d68319a3a4bd7265438cd0c2ea3bd18114939ed49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=7d37fbb6865cbfc0a91f91d5edd7c2a4be7017e8c3dfae8046d84624cecd1d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=b49970dfa6832c560d2822cec350669994ec5103a775040532071231066edebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=47a4d59617cff1b1dd296ba4615324401acf85e33e49cee42b37514ef96c8c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=1965b00bc2cd772de688eac0438281e35f65ed066071d759ff0f3a7864286aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=8fcc26ab5f49d64f0f078ae9b6b05f73f2b4886b0dd9aa852f891833b262d9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=89d1eb300fca3712ac63652a6cf7e53b297ce46bfbf5c6875d6ccdd1fd0ab4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=f0280ed5345a8dc64c885ba92b04edd2b0b6b928537c5a6332830122449c008f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=286baf16cd5cf2c2b9ba62048487883db010d10fbf2522839ceb8070a293c28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=64162377fc049437c6325c249861600519a7dd83fe9a7c0248627b02912ce3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=5dfdbcc42e48e772dda1ce9c2e8537ecdfbeb48d9a7314db9a5300f1151970c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=d239799f7c43b5eba91cedbbd00a339ab462dbf5349865e76b1d4768b1ba596e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHRUH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh36spdbx5CKwuAjCgTaqHFZR7h4SsAvLKYJC27g4wSAiEAuohTaVqX09ydKheKxfbCsTE0stHyChzYfpMB7mT9iEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM6%2By%2FBzp5MIP8XMSrcA29%2B5tGRBBW2%2BbXnsBbBPPUzS8%2FHAPuVmsOkk5pg6%2FUFLhLkX2O%2F%2BsTMUSf6qfeTsjH3j%2Fl4qAZXMoHBzYx0y9VoK19Wu%2FPA3VQxQWRDEby5EJAzIAkKPYC1AHmwEeQvewVXaJxJDrRihAkXO01NNGrA9myKcsc9VW3p2p609qnHnuBM%2BpyoqM3j8SFlogxCnwWyja2tGqmLeT5mFpLa%2FCkOMAf%2BWomUaKexRjw8r%2BEqddnOGP57P9DcE1xHTcFJQwRiSTYF%2FFgsNbRmKDNAvZEKFnys7ZuKD7C5ic9gSX2SaRmH7KwHZW%2F5wS0Crvl%2BXRLdiYe9t9uPUw2RAENrbd37kGyUktXModDHobJwPiL0Wppfb5Skil06l8gCbSH9%2Fwzf08ih4LC22D5r8a2iFSHC%2F16hlUanSXlQfTJaLL2KkSBNkdP2RDTp6twqAquulMJB1drI%2FJv66BmSCVFsNG0uu%2BwJL3oPXzDQ12w3p6bkD%2BL78yKBfsUqj11CBuGErYBKhHX6x%2FfT%2FTIQ%2FR8%2B6ZewkwurROIoaejCVOhjdqOocjjQv1gvgToETZkpWO%2BfkcK2U9iExfQpEx0wRtsSjsX2HEfZ1nmoR9e%2FtQKfCxAaHeRWkF%2Feo%2Fd6rmAOMOaPuMQGOqUBkbQqlVd56Ctyi3ZC4COUuKkyxnmE7plGrWwsZLE8kk5A1M3jvMxBdbWH%2BT95Xj3CglHjfx%2FBKWHnaXUB08tcWKvW3yfaLJ%2BQbf0RdCkwTx9NbB%2BE7czIppcAsd%2FgyaoK3yncDfSQ64FHOK3AM6WmUnqVslWZFBLXCXEOmA2AQM%2FsLMjhnARkbjygcN%2BE5HtPyc8JsgigfxKS1gRFKt20uDL5Nqb2&X-Amz-Signature=416595961de09d9fe4d49aa83efedba30ffaaa8e90c6bc978f6091bd619c9076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
