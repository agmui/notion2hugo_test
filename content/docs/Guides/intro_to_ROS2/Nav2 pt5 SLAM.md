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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=1522add6374cb88d4911eb2209ee3e9dd99e7e6670dc88f8d7cae6d9dcb1921a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=4f7b1c51d3d87df3eeda8b64cb9dc8ad86b137d1753af0201d9683f8fcc64e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=857f7e79aa322f33aece1635e820380cf7de70daa1a8805b3adbea76c0526d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=13f0eb3587da2e20dc50741ba6225f24d2f073c480521c24243d5aa4667703e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=99bb5d1b5745a72623e740ab9278defec815ec24d7c3d96f24104329e814b884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=585605ffc022aeb324bcd1d6116a4721d98e1c5e0da5ab671d6ecf2f2327508c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=8d0741cf014acddd2562c179d4134526defe25156b5bef7b68b486f84310df4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=93c3b39ae57df6d97f7101737810cce49d0f2eeb64ae159d03387eec6c997a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=2576d47a08e7c9a04cc9e32901943eeab66c94fca77289d2026c82fb0225aa60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=e84668f5328fc16d8118c5fa10841ef0a0110cf2dc2b95550d1696ad2dd168a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=80dec24f6c6ff0af0aa95df2376774414d257250ba2703103b2d211b0f04de3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=2354a0c2da2a74f4fb72f9fd226784938624951e2bbf6c025cc3cf2cde05f49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=30a36dfa412072c738cd8ddc1211a5fa3ac0425b990ce8b2d1db7a0a2425f3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7SEL22%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB3ugsd5HPuHM0iP2Iuu9BDXWE6hECdtMfHCIcpz%2FPBgAiEAwDKbEx7QtXVLwgwx4MdeCm18WZtqEhlFEKP2gSgYu5Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFHZOo5VqR2vjVUKZyrcA%2BGyvA1pStw%2FEG%2Bv9ZUY%2F4UCLCyEJHSsyr%2FoDQ17k1tXkoBtFq2WUS3%2BLsjrVrUvbMDPtkHuGXbbS%2B2g8xLVQziMQfFVopy6%2BoV54%2FV9Hd%2BARhVGamq0BEqq1zqnTZwUw1%2F0jeBqwNN2zuV%2ByhKv9TpTmzJoOsHsrnZD6h9gOwWdApGgdkQBxSoJjkZhyV1xCbwAfOUWCDPMwB6y2CdFw%2FH2cke9ZpPlS55TWokrDHH3Ip85gVrmMRdJVz5XhW%2F4D0tVx8by6csfQOwmoJceYkZAHmdPtZy%2BymsUqPrawPh0o8ULZ%2B6eL3uyzzQ6TQ%2FlUySJbZOFMO22Lq6shkj3UJBSDcUa4HhUZ%2BL4qrLC3gJMfhdf89uYnC3ShnKUjAy8%2BcNEebC5VsAAFSwtbMZKwKInv%2BilZYyvgaSVfxeaj2kqMHxW%2BzFRMh1Cg20zcHhJBrexZGVI6Pl8VjY9Q4tRpE9EgbP6xr4EbC1eiuNF%2BbXnnmUuFwC%2BlDGL5Vf09RajyzX6L8LGvAiaX%2BAJ%2FhE4AcW2M2EmxnHtGL2l1Vk63lT6z%2F7s3NsPenkCkLaPhEt8BPdltBwq8%2BtjaeqXdOxpDG11%2BAx%2FumQzvKHynW4EF9a1%2BjL0Wfb4a%2FDakCPeMKLZrM4GOqUBF1fG73dpVUwp76REOr1OUkbyRgk%2BIEicdy8Yxc64rleWxdQ3TO0IrPrpknunaN4hy69yJWB%2BhV9CvOMBwpb9AC%2Bim4VKGo7sKvbHMgYrUum3PE1eKVLM8SfeEBq6LOuJMyy09aOYJvRkjJTOTR61gxjbCy3c50DgBRw2DMBq%2BXDvZJJ17YZwSxzJJmn5t%2FKxQi8mTAWDozoMYTPE%2B1lnEc2d8Hw3&X-Amz-Signature=42efedfec6f234a312f3090f345fb4a725bf7b49b8c4575b6d0df81e5cdca313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
