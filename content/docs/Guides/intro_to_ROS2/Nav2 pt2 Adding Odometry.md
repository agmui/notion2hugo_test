---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T10:24:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=6fd175e8151896ea817a11be3edd93d82baf794a519d206cab94df3fec734f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=3bbac5befeb71e66653384a797b9997a27562172ac355c9fd3e47ec52532c095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=5900fd7ae64b65f30ac3589647af01a468639ceda4b8f97650a5eb33069d3ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=8d73a7d11bb2d314b465ab9fe4c57f1c5d8945ab7273794c698b9ea55b76be72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=6df38fc7b61a1f0fce086c9a4cdcf105d8a74e7810776fa09a98b55292db86c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>Final code:</summary>
      ```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=cfd838529201310b9426615d4d7d5847986caa1031a547efe8b2218d5f05611c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=2059e394e0edd64060eb421fd575205fcb931bac20ae270676459e860a0efa19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=8904a053059ff3b308e3fe3a7f81d305859cfe90d3ec2addf8c31309c8ecb48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=e3d155fbb441ad68d3c53e292da63a37adec193427d8ac4b74614b3bf2a096c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=c3af37ddf327709311c52d9783b80b01bee5540e6ddd5231093f0e992f985c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVOYG2JP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FN7bwQVO1iq%2BE0GXIBMJkIX5EGDSTqQT8UevAX0Eg1AiEA5Vq2uKOX9iB2nda%2BomFPEfIyfdqTiFLimrx%2FyCVEhloq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKHyMG1utsTaJs2WaircA0%2B9YauGm2C1a4KyUOsrOtd%2FYdtRqXnqE%2BZUOIIsjN%2B8mimk5mXXb5FnTBOqrCtaSCjPV7E7JJktWBTJH47S9lPMWrowL%2F1KR%2Brdg0tupSmuD%2FtqvmceJMw88h7yLDk7eljg9cWVQPcuKDbPY7I%2FWgWwe5fKKwm3n2bzXVzXBiYJXqxH64zAKrQT7S1u31XDcujUmnzcP38Bhdpo6VdPSi8e0AfE5%2Fzq%2FDt6JuHrYYxErih3Uw93hv0AHzuIhxmjWM22sY%2BzfOxj67881LxNIcLWH9JF66TRuqLhrPVfJLKsG6bxrBLErQzlaEzxhB1aMfvjUjxG3qOhPmZ3G604lbFnzoaMYtXO7ZFmNJIG7IFt0JvFZiJ6hN0a%2BETGk5NHmXvYWI4pvJ9qlCUSCOtKayYVZx0MMckyP314xsSY9%2Fp8gXor5zGSgtfFgAJXsfCGr9LWr%2BBYScDUbb6og4GebN5J5S9wmZyN%2FOKOwJvOHcUCOc%2F4jQUdJpuOa3qwNDtDEp3yAKmw3JNw1nE%2FE7eARulnEydr8KTrigqh4xXQDGr9mLSQCNTpH1DicJvSSB8T6ywkw5IvDi99TfdHq7xFx4uK1Fl1lxr709tQ4ETsAy4nUI2s%2BWVMKxsF8FckMOeOuMQGOqUBuxoOYlrofEYFNXshFFPAEmJTujF5CzhNmIvvoUiS0vnLG5aLQf94nijHkMotqRQTFdgwC%2FukJrfnChtAGuNT55eRSMwG9D1K6l2rm5nvOQkhJz9L2g4dOYXJD24fwdJcUgjCJGP1yZZeOygp%2Fltyt%2BOiU5JLqwSzOHJJ8DqJm9KUIWB%2F5cP0z18NurM0yRdNLv7QRxPjXnj89k%2FlYGITPRMJn8pf&X-Amz-Signature=28c25b1f6acec660d2ae7fddc04f2664c4ae30ac8b1f173b6c1fa4bd6c10b888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52SRBG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FJttw%2BY4%2BWjqmubACZ3QKUFLjOqZjDKR9caldbhynlAiEAr3TBwe%2FLxDkE45tLZBZG142pxjeV5oO50fiWgHxI2y0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsWni%2BjDYaAJW11oCrcA4VTl0QfIh%2BGviz%2BAjaQ6OxhBjCZkBeNKVMO77CeiU%2FMlXhloCXTreMI%2BT21wGYKLcG9gx%2FVmwybYbVDcuNYz5KT2RkhCin3v6LGXyELD4Fb9fINgXu6GIixpA5s8LW%2BvYzOc40aZJyGwzsN6HMiwgF36SoOsE9%2FHDupBuppGj3P2WMp8hvzJwDGp5D%2FjylelEfm8WsUQHcDsNInwudam5jpoQRSVyzXVd%2FCdasKMjj9FoWQ%2B7IaClxms%2BZ3fu45kHmHJ5VXn2LN9bTzfXidKZUVjvM9PF31lOexW0LkN%2FnJDlvCKrZ8WMz0goSqpTDck6BBjDMSCFPRjhGDzKiVR25FerbWnxdhsRoHpG8BAfplwCL51JE2YBjbTrX%2B4NdJo0N%2Bn6Fr%2FjPYnYrxQgkUYnhzB1dVpmG0i8pXZ88TCYGYFdmfQ7rLUPZoRsw6oK6bST%2BmPQ3W%2FMTf8861zgvbcMbnktgN6JQzsyJewS8mJH369txnOZBQqPGy2Cr1h3bas2D%2BW5Ldmxaits8Soh5bsoOr89ihQCO%2BR7DjJUApwxNifiDVVTofxop4KK%2FAv4A9adeT4xUKGoc1UBYFzGVybcJdG6vF90d0FQChVwJvu0vdwYgDgwTCfEMYYBrOMM%2BTuMQGOqUBnz%2Fxhi1tv7Xmjed%2F6Qg5kiqA%2FM9PmIqe%2FDVaRR%2FiDEkcRi%2B3aPV%2B0XppU0ppZmZwfppcOPnwwSurppXuha4AWweuZ7gjEyf9B1cTa%2BYQcqCsaosV7SSYQcj2AYWGdMoPvYDD4kewa84ZW8UmH%2BkJK1fHLl4sDvvVA5V54JFJWR6wSppMTnqgFzX7pWtmdC7VMFE87Eoxbetj5CHwEbkHjDanXc%2B%2B&X-Amz-Signature=41857d29463b42dc16a6fe2b0cc359d7752cf1e2d7db0582d2842950977f2e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M5LZ3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADavtLwllHMv%2BAOR%2FFrvbKOJkmvjgvXQ%2Fc4lck5ch2OAiAmYTA4ppWcJYbUp6C3hFtFWp6JITRVMeFnKM1v5y%2FITyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMypQqXQtmZ0zquA46KtwDNuLVIh9bbQBHvZaimty29XJziZYeIeJaWnO4lIYQ9QrTBWUfQz31KlWRs8beRoGqtoK4mIEYCI%2FgnUS4SrYQXgNU596sNOywQmnJ3jEiauKxrfBfaAjhzIu3A3K9P0r3EZ%2FGkg9lmuHMzo9bjt%2FkFT8%2BgS%2FtjHUxLzyl%2Bb3eN7EwRIpZVJZaqi5So7I%2FdH84F5k3axFebTemwIgIAYr33OCnGq4WYHkKylYgcJ0cO3PMlG1VbPhhOyFl1Z1GizXUHlOG4SFrs1J6IoLfmuxz%2FNe1ViIDkGPO2ORlu3i3NHpdlD5GSKARqCHtlA6kfrnvnZDqU9jZluXrC2vj2rFH6dDsKsiNwN%2F7nvoiKhJuyL9uAiJB19qkTouqKn2PC2yzFr8gYhTNqzb2Brsa2oSC0w0JV2y9w5T8pq2t5mAegvjj8SalYdiWbtHZlwseiFoL9edgLlqxcuWriD7zn3jAs7BF31pw4lOjIFOGEV7oGserQUsEfqC%2FfA5a9eY6e4aVVktMJke7rIz2OSDhCzPkTsJIcfmfaOUuxp0rbTog8Oz6C6Sv0eZ86iW5WDg2LRd%2FfcOaTsdKvj%2BpUt7sguMzsQoQOOXO2fADqwiFNlJCMySDT14XhEMjcFeVbK4wsJW4xAY6pgFAMNTmaylLqUYuY9aKs8vOGeshUsMfx8ue%2Fl%2FQnMEszR97OnrHhgRf1DKT9vIzmcpuo6KW2brAbsqdRepPmSMCi7MgsMzH6uwrMkjVJNd4fXI%2FmwQGwOo%2BuRVIulEvFQrBwCSYpX%2BlUKu3o%2BIEzMNyzmzGzyq2OFPICYYHniX2E4t8Kzx7BiLDug5Ultu5NP8HPH6cuAek4uzdKX9AGcdSkuy2b6RM&X-Amz-Signature=10e9650875ebc874440c755273021688dbc7afa66de46bc633f05a29e7cdf007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M5LZ3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADavtLwllHMv%2BAOR%2FFrvbKOJkmvjgvXQ%2Fc4lck5ch2OAiAmYTA4ppWcJYbUp6C3hFtFWp6JITRVMeFnKM1v5y%2FITyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMypQqXQtmZ0zquA46KtwDNuLVIh9bbQBHvZaimty29XJziZYeIeJaWnO4lIYQ9QrTBWUfQz31KlWRs8beRoGqtoK4mIEYCI%2FgnUS4SrYQXgNU596sNOywQmnJ3jEiauKxrfBfaAjhzIu3A3K9P0r3EZ%2FGkg9lmuHMzo9bjt%2FkFT8%2BgS%2FtjHUxLzyl%2Bb3eN7EwRIpZVJZaqi5So7I%2FdH84F5k3axFebTemwIgIAYr33OCnGq4WYHkKylYgcJ0cO3PMlG1VbPhhOyFl1Z1GizXUHlOG4SFrs1J6IoLfmuxz%2FNe1ViIDkGPO2ORlu3i3NHpdlD5GSKARqCHtlA6kfrnvnZDqU9jZluXrC2vj2rFH6dDsKsiNwN%2F7nvoiKhJuyL9uAiJB19qkTouqKn2PC2yzFr8gYhTNqzb2Brsa2oSC0w0JV2y9w5T8pq2t5mAegvjj8SalYdiWbtHZlwseiFoL9edgLlqxcuWriD7zn3jAs7BF31pw4lOjIFOGEV7oGserQUsEfqC%2FfA5a9eY6e4aVVktMJke7rIz2OSDhCzPkTsJIcfmfaOUuxp0rbTog8Oz6C6Sv0eZ86iW5WDg2LRd%2FfcOaTsdKvj%2BpUt7sguMzsQoQOOXO2fADqwiFNlJCMySDT14XhEMjcFeVbK4wsJW4xAY6pgFAMNTmaylLqUYuY9aKs8vOGeshUsMfx8ue%2Fl%2FQnMEszR97OnrHhgRf1DKT9vIzmcpuo6KW2brAbsqdRepPmSMCi7MgsMzH6uwrMkjVJNd4fXI%2FmwQGwOo%2BuRVIulEvFQrBwCSYpX%2BlUKu3o%2BIEzMNyzmzGzyq2OFPICYYHniX2E4t8Kzx7BiLDug5Ultu5NP8HPH6cuAek4uzdKX9AGcdSkuy2b6RM&X-Amz-Signature=7ae0bd9a21cde677654d194e4a7e0a1b380c9c1a6166eff84c90f6f706118932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M5LZ3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADavtLwllHMv%2BAOR%2FFrvbKOJkmvjgvXQ%2Fc4lck5ch2OAiAmYTA4ppWcJYbUp6C3hFtFWp6JITRVMeFnKM1v5y%2FITyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMypQqXQtmZ0zquA46KtwDNuLVIh9bbQBHvZaimty29XJziZYeIeJaWnO4lIYQ9QrTBWUfQz31KlWRs8beRoGqtoK4mIEYCI%2FgnUS4SrYQXgNU596sNOywQmnJ3jEiauKxrfBfaAjhzIu3A3K9P0r3EZ%2FGkg9lmuHMzo9bjt%2FkFT8%2BgS%2FtjHUxLzyl%2Bb3eN7EwRIpZVJZaqi5So7I%2FdH84F5k3axFebTemwIgIAYr33OCnGq4WYHkKylYgcJ0cO3PMlG1VbPhhOyFl1Z1GizXUHlOG4SFrs1J6IoLfmuxz%2FNe1ViIDkGPO2ORlu3i3NHpdlD5GSKARqCHtlA6kfrnvnZDqU9jZluXrC2vj2rFH6dDsKsiNwN%2F7nvoiKhJuyL9uAiJB19qkTouqKn2PC2yzFr8gYhTNqzb2Brsa2oSC0w0JV2y9w5T8pq2t5mAegvjj8SalYdiWbtHZlwseiFoL9edgLlqxcuWriD7zn3jAs7BF31pw4lOjIFOGEV7oGserQUsEfqC%2FfA5a9eY6e4aVVktMJke7rIz2OSDhCzPkTsJIcfmfaOUuxp0rbTog8Oz6C6Sv0eZ86iW5WDg2LRd%2FfcOaTsdKvj%2BpUt7sguMzsQoQOOXO2fADqwiFNlJCMySDT14XhEMjcFeVbK4wsJW4xAY6pgFAMNTmaylLqUYuY9aKs8vOGeshUsMfx8ue%2Fl%2FQnMEszR97OnrHhgRf1DKT9vIzmcpuo6KW2brAbsqdRepPmSMCi7MgsMzH6uwrMkjVJNd4fXI%2FmwQGwOo%2BuRVIulEvFQrBwCSYpX%2BlUKu3o%2BIEzMNyzmzGzyq2OFPICYYHniX2E4t8Kzx7BiLDug5Ultu5NP8HPH6cuAek4uzdKX9AGcdSkuy2b6RM&X-Amz-Signature=d8bb6826c40f9654e44e9510c1afb044784770b63bc080ce0a3db1f3d8640ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M5LZ3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADavtLwllHMv%2BAOR%2FFrvbKOJkmvjgvXQ%2Fc4lck5ch2OAiAmYTA4ppWcJYbUp6C3hFtFWp6JITRVMeFnKM1v5y%2FITyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMypQqXQtmZ0zquA46KtwDNuLVIh9bbQBHvZaimty29XJziZYeIeJaWnO4lIYQ9QrTBWUfQz31KlWRs8beRoGqtoK4mIEYCI%2FgnUS4SrYQXgNU596sNOywQmnJ3jEiauKxrfBfaAjhzIu3A3K9P0r3EZ%2FGkg9lmuHMzo9bjt%2FkFT8%2BgS%2FtjHUxLzyl%2Bb3eN7EwRIpZVJZaqi5So7I%2FdH84F5k3axFebTemwIgIAYr33OCnGq4WYHkKylYgcJ0cO3PMlG1VbPhhOyFl1Z1GizXUHlOG4SFrs1J6IoLfmuxz%2FNe1ViIDkGPO2ORlu3i3NHpdlD5GSKARqCHtlA6kfrnvnZDqU9jZluXrC2vj2rFH6dDsKsiNwN%2F7nvoiKhJuyL9uAiJB19qkTouqKn2PC2yzFr8gYhTNqzb2Brsa2oSC0w0JV2y9w5T8pq2t5mAegvjj8SalYdiWbtHZlwseiFoL9edgLlqxcuWriD7zn3jAs7BF31pw4lOjIFOGEV7oGserQUsEfqC%2FfA5a9eY6e4aVVktMJke7rIz2OSDhCzPkTsJIcfmfaOUuxp0rbTog8Oz6C6Sv0eZ86iW5WDg2LRd%2FfcOaTsdKvj%2BpUt7sguMzsQoQOOXO2fADqwiFNlJCMySDT14XhEMjcFeVbK4wsJW4xAY6pgFAMNTmaylLqUYuY9aKs8vOGeshUsMfx8ue%2Fl%2FQnMEszR97OnrHhgRf1DKT9vIzmcpuo6KW2brAbsqdRepPmSMCi7MgsMzH6uwrMkjVJNd4fXI%2FmwQGwOo%2BuRVIulEvFQrBwCSYpX%2BlUKu3o%2BIEzMNyzmzGzyq2OFPICYYHniX2E4t8Kzx7BiLDug5Ultu5NP8HPH6cuAek4uzdKX9AGcdSkuy2b6RM&X-Amz-Signature=9d93e2510fb7a2ae7a88ead44be863400b5f1a7c2e8b40cd07d06d7c14a67998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M5LZ3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADavtLwllHMv%2BAOR%2FFrvbKOJkmvjgvXQ%2Fc4lck5ch2OAiAmYTA4ppWcJYbUp6C3hFtFWp6JITRVMeFnKM1v5y%2FITyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMypQqXQtmZ0zquA46KtwDNuLVIh9bbQBHvZaimty29XJziZYeIeJaWnO4lIYQ9QrTBWUfQz31KlWRs8beRoGqtoK4mIEYCI%2FgnUS4SrYQXgNU596sNOywQmnJ3jEiauKxrfBfaAjhzIu3A3K9P0r3EZ%2FGkg9lmuHMzo9bjt%2FkFT8%2BgS%2FtjHUxLzyl%2Bb3eN7EwRIpZVJZaqi5So7I%2FdH84F5k3axFebTemwIgIAYr33OCnGq4WYHkKylYgcJ0cO3PMlG1VbPhhOyFl1Z1GizXUHlOG4SFrs1J6IoLfmuxz%2FNe1ViIDkGPO2ORlu3i3NHpdlD5GSKARqCHtlA6kfrnvnZDqU9jZluXrC2vj2rFH6dDsKsiNwN%2F7nvoiKhJuyL9uAiJB19qkTouqKn2PC2yzFr8gYhTNqzb2Brsa2oSC0w0JV2y9w5T8pq2t5mAegvjj8SalYdiWbtHZlwseiFoL9edgLlqxcuWriD7zn3jAs7BF31pw4lOjIFOGEV7oGserQUsEfqC%2FfA5a9eY6e4aVVktMJke7rIz2OSDhCzPkTsJIcfmfaOUuxp0rbTog8Oz6C6Sv0eZ86iW5WDg2LRd%2FfcOaTsdKvj%2BpUt7sguMzsQoQOOXO2fADqwiFNlJCMySDT14XhEMjcFeVbK4wsJW4xAY6pgFAMNTmaylLqUYuY9aKs8vOGeshUsMfx8ue%2Fl%2FQnMEszR97OnrHhgRf1DKT9vIzmcpuo6KW2brAbsqdRepPmSMCi7MgsMzH6uwrMkjVJNd4fXI%2FmwQGwOo%2BuRVIulEvFQrBwCSYpX%2BlUKu3o%2BIEzMNyzmzGzyq2OFPICYYHniX2E4t8Kzx7BiLDug5Ultu5NP8HPH6cuAek4uzdKX9AGcdSkuy2b6RM&X-Amz-Signature=097a5df68ba676171f4e080761394089907d4f50a6cf143dd9c7d631c463628a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M5LZ3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADavtLwllHMv%2BAOR%2FFrvbKOJkmvjgvXQ%2Fc4lck5ch2OAiAmYTA4ppWcJYbUp6C3hFtFWp6JITRVMeFnKM1v5y%2FITyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMypQqXQtmZ0zquA46KtwDNuLVIh9bbQBHvZaimty29XJziZYeIeJaWnO4lIYQ9QrTBWUfQz31KlWRs8beRoGqtoK4mIEYCI%2FgnUS4SrYQXgNU596sNOywQmnJ3jEiauKxrfBfaAjhzIu3A3K9P0r3EZ%2FGkg9lmuHMzo9bjt%2FkFT8%2BgS%2FtjHUxLzyl%2Bb3eN7EwRIpZVJZaqi5So7I%2FdH84F5k3axFebTemwIgIAYr33OCnGq4WYHkKylYgcJ0cO3PMlG1VbPhhOyFl1Z1GizXUHlOG4SFrs1J6IoLfmuxz%2FNe1ViIDkGPO2ORlu3i3NHpdlD5GSKARqCHtlA6kfrnvnZDqU9jZluXrC2vj2rFH6dDsKsiNwN%2F7nvoiKhJuyL9uAiJB19qkTouqKn2PC2yzFr8gYhTNqzb2Brsa2oSC0w0JV2y9w5T8pq2t5mAegvjj8SalYdiWbtHZlwseiFoL9edgLlqxcuWriD7zn3jAs7BF31pw4lOjIFOGEV7oGserQUsEfqC%2FfA5a9eY6e4aVVktMJke7rIz2OSDhCzPkTsJIcfmfaOUuxp0rbTog8Oz6C6Sv0eZ86iW5WDg2LRd%2FfcOaTsdKvj%2BpUt7sguMzsQoQOOXO2fADqwiFNlJCMySDT14XhEMjcFeVbK4wsJW4xAY6pgFAMNTmaylLqUYuY9aKs8vOGeshUsMfx8ue%2Fl%2FQnMEszR97OnrHhgRf1DKT9vIzmcpuo6KW2brAbsqdRepPmSMCi7MgsMzH6uwrMkjVJNd4fXI%2FmwQGwOo%2BuRVIulEvFQrBwCSYpX%2BlUKu3o%2BIEzMNyzmzGzyq2OFPICYYHniX2E4t8Kzx7BiLDug5Ultu5NP8HPH6cuAek4uzdKX9AGcdSkuy2b6RM&X-Amz-Signature=2099d43880360a73f63de0a5a83222090ccfd2c78d6d82a250a3ceb3f98f2129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M5LZ3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADavtLwllHMv%2BAOR%2FFrvbKOJkmvjgvXQ%2Fc4lck5ch2OAiAmYTA4ppWcJYbUp6C3hFtFWp6JITRVMeFnKM1v5y%2FITyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMypQqXQtmZ0zquA46KtwDNuLVIh9bbQBHvZaimty29XJziZYeIeJaWnO4lIYQ9QrTBWUfQz31KlWRs8beRoGqtoK4mIEYCI%2FgnUS4SrYQXgNU596sNOywQmnJ3jEiauKxrfBfaAjhzIu3A3K9P0r3EZ%2FGkg9lmuHMzo9bjt%2FkFT8%2BgS%2FtjHUxLzyl%2Bb3eN7EwRIpZVJZaqi5So7I%2FdH84F5k3axFebTemwIgIAYr33OCnGq4WYHkKylYgcJ0cO3PMlG1VbPhhOyFl1Z1GizXUHlOG4SFrs1J6IoLfmuxz%2FNe1ViIDkGPO2ORlu3i3NHpdlD5GSKARqCHtlA6kfrnvnZDqU9jZluXrC2vj2rFH6dDsKsiNwN%2F7nvoiKhJuyL9uAiJB19qkTouqKn2PC2yzFr8gYhTNqzb2Brsa2oSC0w0JV2y9w5T8pq2t5mAegvjj8SalYdiWbtHZlwseiFoL9edgLlqxcuWriD7zn3jAs7BF31pw4lOjIFOGEV7oGserQUsEfqC%2FfA5a9eY6e4aVVktMJke7rIz2OSDhCzPkTsJIcfmfaOUuxp0rbTog8Oz6C6Sv0eZ86iW5WDg2LRd%2FfcOaTsdKvj%2BpUt7sguMzsQoQOOXO2fADqwiFNlJCMySDT14XhEMjcFeVbK4wsJW4xAY6pgFAMNTmaylLqUYuY9aKs8vOGeshUsMfx8ue%2Fl%2FQnMEszR97OnrHhgRf1DKT9vIzmcpuo6KW2brAbsqdRepPmSMCi7MgsMzH6uwrMkjVJNd4fXI%2FmwQGwOo%2BuRVIulEvFQrBwCSYpX%2BlUKu3o%2BIEzMNyzmzGzyq2OFPICYYHniX2E4t8Kzx7BiLDug5Ultu5NP8HPH6cuAek4uzdKX9AGcdSkuy2b6RM&X-Amz-Signature=da84bf060d0b9f96de1acd56b9849ee324384f4f7f1e7f6102358544c6c83c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M5LZ3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADavtLwllHMv%2BAOR%2FFrvbKOJkmvjgvXQ%2Fc4lck5ch2OAiAmYTA4ppWcJYbUp6C3hFtFWp6JITRVMeFnKM1v5y%2FITyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMypQqXQtmZ0zquA46KtwDNuLVIh9bbQBHvZaimty29XJziZYeIeJaWnO4lIYQ9QrTBWUfQz31KlWRs8beRoGqtoK4mIEYCI%2FgnUS4SrYQXgNU596sNOywQmnJ3jEiauKxrfBfaAjhzIu3A3K9P0r3EZ%2FGkg9lmuHMzo9bjt%2FkFT8%2BgS%2FtjHUxLzyl%2Bb3eN7EwRIpZVJZaqi5So7I%2FdH84F5k3axFebTemwIgIAYr33OCnGq4WYHkKylYgcJ0cO3PMlG1VbPhhOyFl1Z1GizXUHlOG4SFrs1J6IoLfmuxz%2FNe1ViIDkGPO2ORlu3i3NHpdlD5GSKARqCHtlA6kfrnvnZDqU9jZluXrC2vj2rFH6dDsKsiNwN%2F7nvoiKhJuyL9uAiJB19qkTouqKn2PC2yzFr8gYhTNqzb2Brsa2oSC0w0JV2y9w5T8pq2t5mAegvjj8SalYdiWbtHZlwseiFoL9edgLlqxcuWriD7zn3jAs7BF31pw4lOjIFOGEV7oGserQUsEfqC%2FfA5a9eY6e4aVVktMJke7rIz2OSDhCzPkTsJIcfmfaOUuxp0rbTog8Oz6C6Sv0eZ86iW5WDg2LRd%2FfcOaTsdKvj%2BpUt7sguMzsQoQOOXO2fADqwiFNlJCMySDT14XhEMjcFeVbK4wsJW4xAY6pgFAMNTmaylLqUYuY9aKs8vOGeshUsMfx8ue%2Fl%2FQnMEszR97OnrHhgRf1DKT9vIzmcpuo6KW2brAbsqdRepPmSMCi7MgsMzH6uwrMkjVJNd4fXI%2FmwQGwOo%2BuRVIulEvFQrBwCSYpX%2BlUKu3o%2BIEzMNyzmzGzyq2OFPICYYHniX2E4t8Kzx7BiLDug5Ultu5NP8HPH6cuAek4uzdKX9AGcdSkuy2b6RM&X-Amz-Signature=8ed19a2ec1b8d7d63a8b53c7158500e4bb4f2d550b1b44d6c59d0240225dcde1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
