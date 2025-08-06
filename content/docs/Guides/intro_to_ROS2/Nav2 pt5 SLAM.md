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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=83775a3ee9ecfcd73b85f102aa3ef9c8c54779d463ffa78d2b5fc009e2804350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=e85a6e9e6cb5e4011b8a15eb977d55bf047a28fbd3d83b02a858210a551b3c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=d034e499c97725e07f95f8ed6b2bc6752ad2baba50f08c8ed9b8a106e517bad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=aa4d0f81c95ba88337d71521398ab0173e37234103bf5d27f94d85b879d4d016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=8102f0a23000391049d4bbbc910a4f902040b223b0654b4211985103295c58a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=1b6d92b91b7cccf991e2eb92b3156c9f1be0d237ab92c7511a1fef463176e08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=74886c548637fef244309434fa35de3f26d00328c59289c9cb22badcd1b6e720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=c4dcd593bbe28ed149c1c45173218b42320e1a409c96f3eca842db162c783e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=0db9fd3f1c4af8aa455bd1a44f2171b8db3b271fe243220d163105e31c58371c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=0b6d60fc64ba8c44e64b744f5be96eac4cf97ea51c1851314110fef20d717c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=a986a18f0c212b4f6b701b21ffd9a2402826bfa406504ec3b92fe13792ee185c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=b42f2c697893c14a4a4dc55fdda4a0b8dd3d256a74f343dadc3a235cdbaf8dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=24cd8d3365f7c73f93bec9f325e45f5c9326b641acf029a7ac9ce0a900b27c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USCNDDQC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCs9i8ZoVsIFAxtZOQdYXQ5sISYFNaQ6Vkgms82INbbYgIhANsGhkRdTEJ9kWn1BSnenm7l2j97T0nnvC8di1wXD56TKv8DCG4QABoMNjM3NDIzMTgzODA1IgxXWqmvzjU%2BOhk6yWoq3AOfDPuMTotwcydd7w8gx7Gbj4RQeOBnLCGqipri9pg2atWVxUP1LRQrTff75HE1SAtQCZ1l7rzYktrBorqzWnrO40obBrHa1wdSOblZuyN%2FQcOtsv5%2BRz4zs4nwldokLQrBdO%2BMPSwvXDOlNDWDqLNFDVjOXp9Ftdj%2Fob6IJDW5032gWJqUcBYnx3IMU0SVEeND4lMNoqgnrHNcHRL3c8Vkm5Fb1v6wi12rfVAigaVsz4T%2BxeUCp5FwQMmx2x7TOH%2FRhiIRoOP1xAGBsKmRJ1I2ee78wMqPpfPumLCkpIlWaRk4L2bYxGpdQjNWoezvXYxVLshLr06fG6dRAVkk5H1DyqD7Jv5jFKIDUwiDiPqjSptVO7D0Yz4neRs9rZJm%2Bq%2BfZlKPTXo4ikNcyg6Re02H82iSsXDewBhrqEIgmZFm0RVOXLzGQNAhlCFzHK92T6fIBpBzSesrENz18u5n3E7%2BlHG1e0QKVmWS7G5T9SEqAaCUEzXIznbOLa9aDye4Cd5qA%2FnnM%2B67RcujO971x6g37rcKk%2BP4lhYXCMUHhjJD%2BP7A1j%2FubMgC%2BDs5YbI5BX%2FlupJj4kA5e%2BcVLcTtY6AjIoBHyTOh26chs4waQjnUvEwo%2FTBkCcQPkQ2bzzCEy8vEBjqkAZKmfDHiaBpk7Gr4A7l8lQymlxxeJjbJ35Ah%2BgQvX7cRyTVflvAEQx6xMLLtIltsec8DBZgQdrG4gSomQDFzDYFEuszxYOQ00Qoy9i2zpojaDdmv0YPGzyQHCZhrxWD4Y2eBsq6h%2Fhqu44VYaq7WIzFyDFBrB1QO1gEdxGYn4zv1jm3lkuaONUqFGma%2B6vxBmFLWPFSYKa8O0cE1SL2aPnS3ercX&X-Amz-Signature=3c3b0b2a8f2a90c190aeb899d6e8f9cb623450ca8fac44527f81c45c572cd907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
