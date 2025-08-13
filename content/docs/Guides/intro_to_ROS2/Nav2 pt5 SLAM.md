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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=03740f7929a2a807ba2bb6dbbf9738089de683f86b3778851048f203a595d7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=1b55f0d1876232f9bc00e13a50b9f98f53e1b80ed894043a72a806d9b79ae88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=35936c2789f467432929c72dd98fa3dfa279aa0d81f1f20e61ca37874a908dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=4501bb2e1b67668deaa8aa7caa1e759a7a19b69d274236cbf9ababc24bcbac3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=1f50647987e11837bf17aedfae8d3a04e24d6eabb4b6e43031d5d97237448849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=2e496b3ddc2e7129377f4bd20655e966a539b75411b8cf1fdf8b0ad4b621a14d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=23a83d4a56edb800bef09e94cd5f378e8e4245592d0d91e5706a369789a2a0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=e262090ec57c1cdadd996859b8be539ee4e6a13a199d98d369a6008f567f05b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=8a1980e0b6204c79eea86bced02fb7769d961d4efd7329fb47c5396f1230dacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=0fd398380badebde2b0cafe4e40f618fbddf7b66ea5bf49c472cf91269d201c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=b74f8f2a95f0309c0d08aac063ae9459544a8406a69d76ad9a9fe056a1eed6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=9ffcf6d2a1458f29bb3a45f5abbdb0a39b87b2939cabe5eb1aecef3a086b2777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=407878a95f16637dd88a9c330076db4a8e6b4257eb023313858053887c22fd5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5CFBM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFb5HcAJKMD3vWS7yV0OUQZeQUqpP82W4knbLihWUlXQIhAKWUYdzUF0XqRPGzhFlWtAprj1fAYNcN14D%2BQ9JTZ6X0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwzAix4TwQNuGjhO8Mq3ANb%2Fkz1B4Q6%2FedgixrJlKm%2FBZXPXYldg8qgeSQlrDhbOGOIOjKoN1CJ9q09PfkwFBMuuhfFWZDdqJhIEO%2BEqW0sHo5gvUFpGCFTsVNJeTAwz1JzOHO%2FU8FQGKuNvMRNroRlAejNdPg7Xz4F0lhphdJA9gQ9bVqsn6veynQv9WMNRR922szu8z9bCela1nQHt4oCsnmeRK00IxCgHl%2F7PomXNXJzBsxSS9%2Bye5unlvspdV1u9NcyoSprMhiHhkHme1sn472AVsJOcMNNYmYtvNV7hQXlzX09%2Btl%2BbG0R0yeanyqC4WheUXEboGiCFmK2p%2FMSx3ZAvZUXOPyLUUvVt%2FYaJ88Yd8j3yh4nyrQERrwtf4WACK8oSMlOiVKVs3hvH8%2BduZkwU4dhrigHCdohUYUc9EypwrlT6DNgofAkcdqstc%2FxeX2bkD47sS7P40qzZCjmd%2FQqKL3Y0d9va%2FOa5rRJy904mQPKCX%2F0H%2Fo96Cbi8r%2FUlRM1btZZMJLtNdPPpGKPcTqfcm4gGT8DV0FspDxqIqykUilq90270eVJTacAMkLBx2PFCAr2xWZ3D0ElqBeIGhfYocejNSPhIgcIfoTq8uDr1Quu4aoUh%2FMiQB8I1LHQvhgzQEDQpmMLszD7j%2FTEBjqkAYrhnc1CJEfeWcgAhsgDvomyZCYNEiKw8hLRO0xoEuLmShmCzi53d0wNCONp2XdOpm4cX0em2WPmODWZbXFG0lb2vS%2BmvodBrEQXJYvGegnxuIoU0bp5ODpM4wfwYXiFM0ii0QE5kkEst%2Bwj0DB6trTuiBWsDpGZKpAgDc1j%2FHO56J%2Fmdr5Ew5VdRuFDB4OjWSn5wRTPnnueXfYy3vEaw4g1q8PJ&X-Amz-Signature=47a9e6505b99db0dba0947e31ab50c532ecfd329ab4cfbb56589f6c0b1fedf92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
