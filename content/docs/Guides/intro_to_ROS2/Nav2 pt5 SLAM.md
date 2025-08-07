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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=ffa264fe6e0490a50d068033c06c96fcad8f8226b6531b0eff083513d8088f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=77dfc0675da035c21ab21fb662f2021c5ddf9975a3fdfeef792b6650adf38935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=49326da87a3cfd786f1e2ac361068b5cb97a3e62eac4355ba1aac60b92db312f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=e68d01419b0a92f0f499c1229f062c0d0874c44c2bf94f2164dfaaca252310fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=7b518285bc5c718136a88c1bc39aaa6445fc048d5bda62704e855d3210364b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=4b726e5c7ea3306a89f638ca4fb4e49037c7ed2a65f5978196b8565f6df9cadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=33b499ffd1f7cedb2519430d3cafbc0e3a21f09b53350e84c8b64288a4273030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=38301679dc6b2134788cae5321a4ca317f3d9ae56610a62ddc806d591a49ac07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=0c7b74ea1e228f9ac34cc332e937c0c0e6fb87a3bac10895860e5aeef7c2e206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=d6536b3440be1714538604b45814aba36a0614b8feb211002e54c175ff879236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=c3e8c7873cc69146c0f4fd6034b1e5f57c86b4fbfa6ca6cf3d20c1f095589e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=cc34e3e9aca66697901f4a684d756bd7479db14e80731b6150f17e4dbf2fb6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=4cf796de6215d8890ae0924fc0c7aa8e52b70556037612b45867d3828537988c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4ABTEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIErLhxGDICNk7nsTeaKjh4STF8rBBp5%2F2au90J7nBFU%2BAiAYaTBnzf7fzJz7BBoSOrxWX4mt5%2FTiL4Wn3K3LiysmSCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNVNFQLCONYN%2FK3uKtwDaPazMUqZgdC13ZsH9kQcN6WNiPVQUOnYRQbfB2dIM6hoSfpT2wVLd9waJTp3JYmqdFlciA3L9KCp1zZJooZxNs%2FQBBrKPJjSifF2OmnLCX%2BQ%2BdqLIJI7l0Ap2o1RmtZzfsOxW%2F%2BRtNYxgp2EjH5Ygwhfb7f5iuxKckpZh8i4s%2FPO7TtGjylsTpQO8XF0qax%2F72h3cdPkFgujbh2DbY5HbTgaKGZ%2FlPCQs%2BMfVL7%2B%2FTMRZRNYYZDwtrB%2FHS%2FPXxflaJIdBqAFWrez8OVTGiXGjbik29wq6vpIUmB1a%2ByFfHOt4O%2B7jUxXnXYbv420tcCEjj8iqWFLSpSj1gGT1J%2F3KJc4Mqw8%2BLpL05YS3wPGZuryX%2FhDkCVX0E2MQydCOIKzYS0LYceKkSj2eZetw304hs43Ga00hcK7iV5gxhzTn4dKPejI4YNwlU465gMgDOdqHwMFgNFDRIankZHEN1zYsIQs1NF3eFI%2BJUeLfFIYeuvxg8mBLupT0885XgeZXuZCMEvTYvY7zW6JHRv6HeNs4CdACjzRlUgmDm1J1aaKlpe%2BdWIGZmvzE%2Be7fPO8S4CNUV1GvrmSCAzhE2vrWk0Vg0Acxy%2FHnxfKSDUZakueV%2BMb%2BPM3ITGv6vhBe1Mwx6LTxAY6pgGdKTOfYkErq4s8aiHlfQwTFlyI1zTKhomUYLh%2BM4uZDGuTl0qwoMPCa4siwFC6wu9YuWJgX9HDe9CYr2pJLQ%2BhkGJgHatk7oAKAqvfEw9JxFh6RSGWLpTm%2FJyxfCPIStZTgiTNyTNW%2BWOMimPmRKkY0eB5G5zZ2fu1cDq%2F5WVXojj4IgmsK0RH%2FSUzvfdMSPp2IbbPNW5S%2Fi7feOnyPMIvDDuxZpIf&X-Amz-Signature=656052d3d951425cf79c1a7118ea893381617e327f38ebb04d3bf85fa22d9db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
