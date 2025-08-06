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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=ba1593fbb610192ae3c98740314a13f58f678a5fd3476ad36e77d98e3ecb88b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=fa7820526910f4b31f16b4e458207b91d0669a0bcb71755422c089bc694906b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=6e7412b05c801df91fb2a4e2ded4b869d6ebb26f510f54baed51549b228e8146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=e3c7bca6c9400d875c2325e885e413e4136bcca4b163c380e593add438eb7771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=4544029b6276418b06e1cd1a04fc68c46b2c4ff3aeb4bae2eb5042b360304019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=1a0e61cc56868c35ea87e81d0c23ef2fc45eb9a8e853bb1901bd3911767901d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=837e2bccf7ea593a661579d9c9bbda25ae2b409d518404d8ec8aa766ae7cb615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=bfbbcb3cfbd7f7b88b207f12dfeef2a32753f2c64184020f9aaf5ae81adc76b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=3305fd89d9199a166e4d9021776de915baf01eacb0fa6c0c0390b7361868e562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=6cb0eaa21d068c91a0c42d0de8caed4305b8648e34aed6f0e8b38bec42720e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=a9516544d17ada446b4e23acb23bcea6006561e1342b4f6078194131d0cdf838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=e3a95d2e6572800b23d76f74f8ffe019a90a693bc1161dc82daab8ec3d89a0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=bb24251ae54cd9f1eec3a98a2d29799b3825ed21e77d832ab2742171074486cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAIRDCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCCHhUOmYgtTocOvvRc1MOacA%2FrKSlpn8iaqiocrdmkfAIgL08ovgty1%2FeeIa1qQ0L7ExouNIxkh6T9JLkwbuZx9OQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcYPrOO6v6V6Nsz%2BircA5U1gzR9mLfLvz8Lt2BxJmTypBc0Z3wu4udofWRi%2FSBrnA07snXDLfitJ%2BqVDBBDB%2Bms0ALZ%2BoSR2PxG3kxy6yW6tD2UZZ42iLnWMoRqXtDKyQBg6TL3VA45ecb5%2FVbLNTMU8TBL2U5b5scWFvhE0KKfcOtZUGPHPK9c7nu98KNsoqR1dee%2FgiNGG%2BO5dyqhLN0H3qKtUVCpcOeWAdvbeUdgUBlwKgLhKhafWqo5xetDGvE8r9FXmv3f%2BYxtnaRHmUqxkUdFaE1wKeamPzE51oIXpinheO910gJ4iyXC7LtPKu%2B6%2Fv0ZHntekvK5G%2BYRiWlR7UDOJh3SKxvWii%2BDEyYZ72KCpDB0s5qJ%2BR4ph%2B34k66vlWxodPGvc8S8InwEva3vVOHhlhqbOuteCfA9%2BorHx7IEbAIVxwwp2r3Dg1o6q3IFbLS4%2FH7Fv2s3YEBR3CI6RsUJTT%2BafZVXNs1XmxLbnAEb6qrENzKL1i901H6UI1b%2F7Kuc0PLsfYpUgcBFTY0K43w7zm5GAoHib3j30CLG1PkydDSn%2BZFq692ca9Y%2FwCTRG4%2F4Pc4l2LC%2FqNd1eItiaU7BT%2FRYsnMmFybJjY7bMdIJCUf5x6TkJHg3IGB3uET6SssgY6COySQcMO2XzMQGOqUBswrNKbYuJkEu4YXC3YH0ytAFkzGdM0NqpmApFuirNcUWqBZ46E0Z9UeMTU6je9neSIGigMVpRFvYbpB%2B7C368Zwp3Wr%2Finpqe2n63%2FUoVDyDrH%2B2Uj87%2BUiDnXF7AtAhAV%2FKlJmOOTV9jRaiXAxhk8%2F25GiBwKGgkJDLx6noQ6GU4vbe4ScL6raMW3r83UK1gSbT6ix6hzqL0PBZ%2FskkuP%2F30nyN&X-Amz-Signature=2384a314b0c0b2c664f674236d76a95d0e40f3d280debf2485838b2419706a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
