---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5SLLVI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCIl8lDbFIK0QPKPLdl2sDCRXnGhz6pB84lOwzXVuw4ngIgcDwkvKI1xZmRVp9wsgSrcgvig1jC0Ksnjd1528mcNXQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFZ21wQwCvewivrwQSrcA%2FM9vF%2Foz7RGofgYZQhxc%2BoiHS%2BSg1Do20ryB%2FKcdVj%2B9HrRqLL%2FG9du6WCxokyrNeUnl%2Faibb45IjqmfnJv09XY7ZK0tPvc0ijTizQxcOc2tRG4x4lRv%2BiBLCo2IDFomODIg9x9rPOkKqNJWwGAFOkPQqdKT0ldFO%2BKAZU8N6hExYbPgXdV6FQEIBN0TeAGBC49d4C2IV6L8GL926q8Z8DZkXISewort%2FYlNrd3uJ4jgPex4AM60PScHrYJU8Z7HF%2F25nKlUhhvlK0Giv89l9Hly39QegP%2BL1cYpOiYNvPuFGDfBK7YT%2BOYc7InyVnTlCPgFM%2BzY1n5cPcHmoaw9s%2F%2BuhBv8HMSJChi%2BOVf%2BqOyu1h8lLcFJtv%2BUVECEb3SyulLhpjEIoVWw6T%2F9xFdTCrFtf%2Blh0yHFAnryHkDQxZn7db5xCI14U6ci8r%2Fkb1XTmK3Cx2T2I4wzDoYXIJse%2BEOFHah9RZs8W3tnLkjIcpxa9eRlY6beLH9q11tFH6zhxkdTzCsXuyyCmTz25J2lms%2BIqnjYMV%2F8XiBEBTW6DThjcHwur95AzPZ6Td75%2FDoNjEcGKHvu%2BqWkzbDpgayyxzOsS3X25NtucfUuZHQ1bkfP0KtmITYCbQGMpsWMNLC%2BMQGOqUBclfrc3p9zG8SnKjGuM2A5Tn2hEq3oxFwmNUe3%2FcLE9yXVIYjbBKsXRO1UO2uTTYV6SgynIywGNoxYDdyhIM99NRfSWyE14cmn8FVgPiaoJUj6BVa3%2F7x7BmTV8Uo41A7KAMVprLc5KFkS%2F7zIfkIsGkY69fr8Y3%2BRmcRiiPXuFVGUhsYhavRzb6JaUstNnRMCCXhGQS8DHQYA2CKPYaAso9ajHax&X-Amz-Signature=209fb80d3da7686a7e5e0052bdcb0b4f46b28205496f301cf0683ea0e6e1da26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5SLLVI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCIl8lDbFIK0QPKPLdl2sDCRXnGhz6pB84lOwzXVuw4ngIgcDwkvKI1xZmRVp9wsgSrcgvig1jC0Ksnjd1528mcNXQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFZ21wQwCvewivrwQSrcA%2FM9vF%2Foz7RGofgYZQhxc%2BoiHS%2BSg1Do20ryB%2FKcdVj%2B9HrRqLL%2FG9du6WCxokyrNeUnl%2Faibb45IjqmfnJv09XY7ZK0tPvc0ijTizQxcOc2tRG4x4lRv%2BiBLCo2IDFomODIg9x9rPOkKqNJWwGAFOkPQqdKT0ldFO%2BKAZU8N6hExYbPgXdV6FQEIBN0TeAGBC49d4C2IV6L8GL926q8Z8DZkXISewort%2FYlNrd3uJ4jgPex4AM60PScHrYJU8Z7HF%2F25nKlUhhvlK0Giv89l9Hly39QegP%2BL1cYpOiYNvPuFGDfBK7YT%2BOYc7InyVnTlCPgFM%2BzY1n5cPcHmoaw9s%2F%2BuhBv8HMSJChi%2BOVf%2BqOyu1h8lLcFJtv%2BUVECEb3SyulLhpjEIoVWw6T%2F9xFdTCrFtf%2Blh0yHFAnryHkDQxZn7db5xCI14U6ci8r%2Fkb1XTmK3Cx2T2I4wzDoYXIJse%2BEOFHah9RZs8W3tnLkjIcpxa9eRlY6beLH9q11tFH6zhxkdTzCsXuyyCmTz25J2lms%2BIqnjYMV%2F8XiBEBTW6DThjcHwur95AzPZ6Td75%2FDoNjEcGKHvu%2BqWkzbDpgayyxzOsS3X25NtucfUuZHQ1bkfP0KtmITYCbQGMpsWMNLC%2BMQGOqUBclfrc3p9zG8SnKjGuM2A5Tn2hEq3oxFwmNUe3%2FcLE9yXVIYjbBKsXRO1UO2uTTYV6SgynIywGNoxYDdyhIM99NRfSWyE14cmn8FVgPiaoJUj6BVa3%2F7x7BmTV8Uo41A7KAMVprLc5KFkS%2F7zIfkIsGkY69fr8Y3%2BRmcRiiPXuFVGUhsYhavRzb6JaUstNnRMCCXhGQS8DHQYA2CKPYaAso9ajHax&X-Amz-Signature=ce6482e5756d283b022399a6c3587b6c146714c315081eaad3e9f026a9fe3d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5SLLVI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCIl8lDbFIK0QPKPLdl2sDCRXnGhz6pB84lOwzXVuw4ngIgcDwkvKI1xZmRVp9wsgSrcgvig1jC0Ksnjd1528mcNXQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFZ21wQwCvewivrwQSrcA%2FM9vF%2Foz7RGofgYZQhxc%2BoiHS%2BSg1Do20ryB%2FKcdVj%2B9HrRqLL%2FG9du6WCxokyrNeUnl%2Faibb45IjqmfnJv09XY7ZK0tPvc0ijTizQxcOc2tRG4x4lRv%2BiBLCo2IDFomODIg9x9rPOkKqNJWwGAFOkPQqdKT0ldFO%2BKAZU8N6hExYbPgXdV6FQEIBN0TeAGBC49d4C2IV6L8GL926q8Z8DZkXISewort%2FYlNrd3uJ4jgPex4AM60PScHrYJU8Z7HF%2F25nKlUhhvlK0Giv89l9Hly39QegP%2BL1cYpOiYNvPuFGDfBK7YT%2BOYc7InyVnTlCPgFM%2BzY1n5cPcHmoaw9s%2F%2BuhBv8HMSJChi%2BOVf%2BqOyu1h8lLcFJtv%2BUVECEb3SyulLhpjEIoVWw6T%2F9xFdTCrFtf%2Blh0yHFAnryHkDQxZn7db5xCI14U6ci8r%2Fkb1XTmK3Cx2T2I4wzDoYXIJse%2BEOFHah9RZs8W3tnLkjIcpxa9eRlY6beLH9q11tFH6zhxkdTzCsXuyyCmTz25J2lms%2BIqnjYMV%2F8XiBEBTW6DThjcHwur95AzPZ6Td75%2FDoNjEcGKHvu%2BqWkzbDpgayyxzOsS3X25NtucfUuZHQ1bkfP0KtmITYCbQGMpsWMNLC%2BMQGOqUBclfrc3p9zG8SnKjGuM2A5Tn2hEq3oxFwmNUe3%2FcLE9yXVIYjbBKsXRO1UO2uTTYV6SgynIywGNoxYDdyhIM99NRfSWyE14cmn8FVgPiaoJUj6BVa3%2F7x7BmTV8Uo41A7KAMVprLc5KFkS%2F7zIfkIsGkY69fr8Y3%2BRmcRiiPXuFVGUhsYhavRzb6JaUstNnRMCCXhGQS8DHQYA2CKPYaAso9ajHax&X-Amz-Signature=b4d959998977842cfda6d16ca2034e511b0ecb655cf34450c2593f34cdb99f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5SLLVI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCIl8lDbFIK0QPKPLdl2sDCRXnGhz6pB84lOwzXVuw4ngIgcDwkvKI1xZmRVp9wsgSrcgvig1jC0Ksnjd1528mcNXQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFZ21wQwCvewivrwQSrcA%2FM9vF%2Foz7RGofgYZQhxc%2BoiHS%2BSg1Do20ryB%2FKcdVj%2B9HrRqLL%2FG9du6WCxokyrNeUnl%2Faibb45IjqmfnJv09XY7ZK0tPvc0ijTizQxcOc2tRG4x4lRv%2BiBLCo2IDFomODIg9x9rPOkKqNJWwGAFOkPQqdKT0ldFO%2BKAZU8N6hExYbPgXdV6FQEIBN0TeAGBC49d4C2IV6L8GL926q8Z8DZkXISewort%2FYlNrd3uJ4jgPex4AM60PScHrYJU8Z7HF%2F25nKlUhhvlK0Giv89l9Hly39QegP%2BL1cYpOiYNvPuFGDfBK7YT%2BOYc7InyVnTlCPgFM%2BzY1n5cPcHmoaw9s%2F%2BuhBv8HMSJChi%2BOVf%2BqOyu1h8lLcFJtv%2BUVECEb3SyulLhpjEIoVWw6T%2F9xFdTCrFtf%2Blh0yHFAnryHkDQxZn7db5xCI14U6ci8r%2Fkb1XTmK3Cx2T2I4wzDoYXIJse%2BEOFHah9RZs8W3tnLkjIcpxa9eRlY6beLH9q11tFH6zhxkdTzCsXuyyCmTz25J2lms%2BIqnjYMV%2F8XiBEBTW6DThjcHwur95AzPZ6Td75%2FDoNjEcGKHvu%2BqWkzbDpgayyxzOsS3X25NtucfUuZHQ1bkfP0KtmITYCbQGMpsWMNLC%2BMQGOqUBclfrc3p9zG8SnKjGuM2A5Tn2hEq3oxFwmNUe3%2FcLE9yXVIYjbBKsXRO1UO2uTTYV6SgynIywGNoxYDdyhIM99NRfSWyE14cmn8FVgPiaoJUj6BVa3%2F7x7BmTV8Uo41A7KAMVprLc5KFkS%2F7zIfkIsGkY69fr8Y3%2BRmcRiiPXuFVGUhsYhavRzb6JaUstNnRMCCXhGQS8DHQYA2CKPYaAso9ajHax&X-Amz-Signature=c0c2b677f029ff222caad45fbbfaa0b0dd346db79b028ac722afdfb01ca057eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5SLLVI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCIl8lDbFIK0QPKPLdl2sDCRXnGhz6pB84lOwzXVuw4ngIgcDwkvKI1xZmRVp9wsgSrcgvig1jC0Ksnjd1528mcNXQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFZ21wQwCvewivrwQSrcA%2FM9vF%2Foz7RGofgYZQhxc%2BoiHS%2BSg1Do20ryB%2FKcdVj%2B9HrRqLL%2FG9du6WCxokyrNeUnl%2Faibb45IjqmfnJv09XY7ZK0tPvc0ijTizQxcOc2tRG4x4lRv%2BiBLCo2IDFomODIg9x9rPOkKqNJWwGAFOkPQqdKT0ldFO%2BKAZU8N6hExYbPgXdV6FQEIBN0TeAGBC49d4C2IV6L8GL926q8Z8DZkXISewort%2FYlNrd3uJ4jgPex4AM60PScHrYJU8Z7HF%2F25nKlUhhvlK0Giv89l9Hly39QegP%2BL1cYpOiYNvPuFGDfBK7YT%2BOYc7InyVnTlCPgFM%2BzY1n5cPcHmoaw9s%2F%2BuhBv8HMSJChi%2BOVf%2BqOyu1h8lLcFJtv%2BUVECEb3SyulLhpjEIoVWw6T%2F9xFdTCrFtf%2Blh0yHFAnryHkDQxZn7db5xCI14U6ci8r%2Fkb1XTmK3Cx2T2I4wzDoYXIJse%2BEOFHah9RZs8W3tnLkjIcpxa9eRlY6beLH9q11tFH6zhxkdTzCsXuyyCmTz25J2lms%2BIqnjYMV%2F8XiBEBTW6DThjcHwur95AzPZ6Td75%2FDoNjEcGKHvu%2BqWkzbDpgayyxzOsS3X25NtucfUuZHQ1bkfP0KtmITYCbQGMpsWMNLC%2BMQGOqUBclfrc3p9zG8SnKjGuM2A5Tn2hEq3oxFwmNUe3%2FcLE9yXVIYjbBKsXRO1UO2uTTYV6SgynIywGNoxYDdyhIM99NRfSWyE14cmn8FVgPiaoJUj6BVa3%2F7x7BmTV8Uo41A7KAMVprLc5KFkS%2F7zIfkIsGkY69fr8Y3%2BRmcRiiPXuFVGUhsYhavRzb6JaUstNnRMCCXhGQS8DHQYA2CKPYaAso9ajHax&X-Amz-Signature=7a5e9fa946963c342541af969a1e046bc68eba84026d7681c367308b91c685bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5SLLVI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCIl8lDbFIK0QPKPLdl2sDCRXnGhz6pB84lOwzXVuw4ngIgcDwkvKI1xZmRVp9wsgSrcgvig1jC0Ksnjd1528mcNXQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFZ21wQwCvewivrwQSrcA%2FM9vF%2Foz7RGofgYZQhxc%2BoiHS%2BSg1Do20ryB%2FKcdVj%2B9HrRqLL%2FG9du6WCxokyrNeUnl%2Faibb45IjqmfnJv09XY7ZK0tPvc0ijTizQxcOc2tRG4x4lRv%2BiBLCo2IDFomODIg9x9rPOkKqNJWwGAFOkPQqdKT0ldFO%2BKAZU8N6hExYbPgXdV6FQEIBN0TeAGBC49d4C2IV6L8GL926q8Z8DZkXISewort%2FYlNrd3uJ4jgPex4AM60PScHrYJU8Z7HF%2F25nKlUhhvlK0Giv89l9Hly39QegP%2BL1cYpOiYNvPuFGDfBK7YT%2BOYc7InyVnTlCPgFM%2BzY1n5cPcHmoaw9s%2F%2BuhBv8HMSJChi%2BOVf%2BqOyu1h8lLcFJtv%2BUVECEb3SyulLhpjEIoVWw6T%2F9xFdTCrFtf%2Blh0yHFAnryHkDQxZn7db5xCI14U6ci8r%2Fkb1XTmK3Cx2T2I4wzDoYXIJse%2BEOFHah9RZs8W3tnLkjIcpxa9eRlY6beLH9q11tFH6zhxkdTzCsXuyyCmTz25J2lms%2BIqnjYMV%2F8XiBEBTW6DThjcHwur95AzPZ6Td75%2FDoNjEcGKHvu%2BqWkzbDpgayyxzOsS3X25NtucfUuZHQ1bkfP0KtmITYCbQGMpsWMNLC%2BMQGOqUBclfrc3p9zG8SnKjGuM2A5Tn2hEq3oxFwmNUe3%2FcLE9yXVIYjbBKsXRO1UO2uTTYV6SgynIywGNoxYDdyhIM99NRfSWyE14cmn8FVgPiaoJUj6BVa3%2F7x7BmTV8Uo41A7KAMVprLc5KFkS%2F7zIfkIsGkY69fr8Y3%2BRmcRiiPXuFVGUhsYhavRzb6JaUstNnRMCCXhGQS8DHQYA2CKPYaAso9ajHax&X-Amz-Signature=fc47006d1cf79e56c00de4a028c635eac6501572231a3f73727ee21a84c757ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5SLLVI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCIl8lDbFIK0QPKPLdl2sDCRXnGhz6pB84lOwzXVuw4ngIgcDwkvKI1xZmRVp9wsgSrcgvig1jC0Ksnjd1528mcNXQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFZ21wQwCvewivrwQSrcA%2FM9vF%2Foz7RGofgYZQhxc%2BoiHS%2BSg1Do20ryB%2FKcdVj%2B9HrRqLL%2FG9du6WCxokyrNeUnl%2Faibb45IjqmfnJv09XY7ZK0tPvc0ijTizQxcOc2tRG4x4lRv%2BiBLCo2IDFomODIg9x9rPOkKqNJWwGAFOkPQqdKT0ldFO%2BKAZU8N6hExYbPgXdV6FQEIBN0TeAGBC49d4C2IV6L8GL926q8Z8DZkXISewort%2FYlNrd3uJ4jgPex4AM60PScHrYJU8Z7HF%2F25nKlUhhvlK0Giv89l9Hly39QegP%2BL1cYpOiYNvPuFGDfBK7YT%2BOYc7InyVnTlCPgFM%2BzY1n5cPcHmoaw9s%2F%2BuhBv8HMSJChi%2BOVf%2BqOyu1h8lLcFJtv%2BUVECEb3SyulLhpjEIoVWw6T%2F9xFdTCrFtf%2Blh0yHFAnryHkDQxZn7db5xCI14U6ci8r%2Fkb1XTmK3Cx2T2I4wzDoYXIJse%2BEOFHah9RZs8W3tnLkjIcpxa9eRlY6beLH9q11tFH6zhxkdTzCsXuyyCmTz25J2lms%2BIqnjYMV%2F8XiBEBTW6DThjcHwur95AzPZ6Td75%2FDoNjEcGKHvu%2BqWkzbDpgayyxzOsS3X25NtucfUuZHQ1bkfP0KtmITYCbQGMpsWMNLC%2BMQGOqUBclfrc3p9zG8SnKjGuM2A5Tn2hEq3oxFwmNUe3%2FcLE9yXVIYjbBKsXRO1UO2uTTYV6SgynIywGNoxYDdyhIM99NRfSWyE14cmn8FVgPiaoJUj6BVa3%2F7x7BmTV8Uo41A7KAMVprLc5KFkS%2F7zIfkIsGkY69fr8Y3%2BRmcRiiPXuFVGUhsYhavRzb6JaUstNnRMCCXhGQS8DHQYA2CKPYaAso9ajHax&X-Amz-Signature=2601e636cde36fc5f34642aac9abaabd220fb2aeab7a5ed602095ce88640d287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5SLLVI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCIl8lDbFIK0QPKPLdl2sDCRXnGhz6pB84lOwzXVuw4ngIgcDwkvKI1xZmRVp9wsgSrcgvig1jC0Ksnjd1528mcNXQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFZ21wQwCvewivrwQSrcA%2FM9vF%2Foz7RGofgYZQhxc%2BoiHS%2BSg1Do20ryB%2FKcdVj%2B9HrRqLL%2FG9du6WCxokyrNeUnl%2Faibb45IjqmfnJv09XY7ZK0tPvc0ijTizQxcOc2tRG4x4lRv%2BiBLCo2IDFomODIg9x9rPOkKqNJWwGAFOkPQqdKT0ldFO%2BKAZU8N6hExYbPgXdV6FQEIBN0TeAGBC49d4C2IV6L8GL926q8Z8DZkXISewort%2FYlNrd3uJ4jgPex4AM60PScHrYJU8Z7HF%2F25nKlUhhvlK0Giv89l9Hly39QegP%2BL1cYpOiYNvPuFGDfBK7YT%2BOYc7InyVnTlCPgFM%2BzY1n5cPcHmoaw9s%2F%2BuhBv8HMSJChi%2BOVf%2BqOyu1h8lLcFJtv%2BUVECEb3SyulLhpjEIoVWw6T%2F9xFdTCrFtf%2Blh0yHFAnryHkDQxZn7db5xCI14U6ci8r%2Fkb1XTmK3Cx2T2I4wzDoYXIJse%2BEOFHah9RZs8W3tnLkjIcpxa9eRlY6beLH9q11tFH6zhxkdTzCsXuyyCmTz25J2lms%2BIqnjYMV%2F8XiBEBTW6DThjcHwur95AzPZ6Td75%2FDoNjEcGKHvu%2BqWkzbDpgayyxzOsS3X25NtucfUuZHQ1bkfP0KtmITYCbQGMpsWMNLC%2BMQGOqUBclfrc3p9zG8SnKjGuM2A5Tn2hEq3oxFwmNUe3%2FcLE9yXVIYjbBKsXRO1UO2uTTYV6SgynIywGNoxYDdyhIM99NRfSWyE14cmn8FVgPiaoJUj6BVa3%2F7x7BmTV8Uo41A7KAMVprLc5KFkS%2F7zIfkIsGkY69fr8Y3%2BRmcRiiPXuFVGUhsYhavRzb6JaUstNnRMCCXhGQS8DHQYA2CKPYaAso9ajHax&X-Amz-Signature=52ad42b6d77f40082fc5f0ae4bf42e8c1c2a90e642b3b89b9e419a90471ce627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5SLLVI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCIl8lDbFIK0QPKPLdl2sDCRXnGhz6pB84lOwzXVuw4ngIgcDwkvKI1xZmRVp9wsgSrcgvig1jC0Ksnjd1528mcNXQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFZ21wQwCvewivrwQSrcA%2FM9vF%2Foz7RGofgYZQhxc%2BoiHS%2BSg1Do20ryB%2FKcdVj%2B9HrRqLL%2FG9du6WCxokyrNeUnl%2Faibb45IjqmfnJv09XY7ZK0tPvc0ijTizQxcOc2tRG4x4lRv%2BiBLCo2IDFomODIg9x9rPOkKqNJWwGAFOkPQqdKT0ldFO%2BKAZU8N6hExYbPgXdV6FQEIBN0TeAGBC49d4C2IV6L8GL926q8Z8DZkXISewort%2FYlNrd3uJ4jgPex4AM60PScHrYJU8Z7HF%2F25nKlUhhvlK0Giv89l9Hly39QegP%2BL1cYpOiYNvPuFGDfBK7YT%2BOYc7InyVnTlCPgFM%2BzY1n5cPcHmoaw9s%2F%2BuhBv8HMSJChi%2BOVf%2BqOyu1h8lLcFJtv%2BUVECEb3SyulLhpjEIoVWw6T%2F9xFdTCrFtf%2Blh0yHFAnryHkDQxZn7db5xCI14U6ci8r%2Fkb1XTmK3Cx2T2I4wzDoYXIJse%2BEOFHah9RZs8W3tnLkjIcpxa9eRlY6beLH9q11tFH6zhxkdTzCsXuyyCmTz25J2lms%2BIqnjYMV%2F8XiBEBTW6DThjcHwur95AzPZ6Td75%2FDoNjEcGKHvu%2BqWkzbDpgayyxzOsS3X25NtucfUuZHQ1bkfP0KtmITYCbQGMpsWMNLC%2BMQGOqUBclfrc3p9zG8SnKjGuM2A5Tn2hEq3oxFwmNUe3%2FcLE9yXVIYjbBKsXRO1UO2uTTYV6SgynIywGNoxYDdyhIM99NRfSWyE14cmn8FVgPiaoJUj6BVa3%2F7x7BmTV8Uo41A7KAMVprLc5KFkS%2F7zIfkIsGkY69fr8Y3%2BRmcRiiPXuFVGUhsYhavRzb6JaUstNnRMCCXhGQS8DHQYA2CKPYaAso9ajHax&X-Amz-Signature=b3b3269938a0666ac8fe2f6d166aecc92d0dd9c8af3265439fa102bc5de0cca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5SLLVI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCIl8lDbFIK0QPKPLdl2sDCRXnGhz6pB84lOwzXVuw4ngIgcDwkvKI1xZmRVp9wsgSrcgvig1jC0Ksnjd1528mcNXQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFZ21wQwCvewivrwQSrcA%2FM9vF%2Foz7RGofgYZQhxc%2BoiHS%2BSg1Do20ryB%2FKcdVj%2B9HrRqLL%2FG9du6WCxokyrNeUnl%2Faibb45IjqmfnJv09XY7ZK0tPvc0ijTizQxcOc2tRG4x4lRv%2BiBLCo2IDFomODIg9x9rPOkKqNJWwGAFOkPQqdKT0ldFO%2BKAZU8N6hExYbPgXdV6FQEIBN0TeAGBC49d4C2IV6L8GL926q8Z8DZkXISewort%2FYlNrd3uJ4jgPex4AM60PScHrYJU8Z7HF%2F25nKlUhhvlK0Giv89l9Hly39QegP%2BL1cYpOiYNvPuFGDfBK7YT%2BOYc7InyVnTlCPgFM%2BzY1n5cPcHmoaw9s%2F%2BuhBv8HMSJChi%2BOVf%2BqOyu1h8lLcFJtv%2BUVECEb3SyulLhpjEIoVWw6T%2F9xFdTCrFtf%2Blh0yHFAnryHkDQxZn7db5xCI14U6ci8r%2Fkb1XTmK3Cx2T2I4wzDoYXIJse%2BEOFHah9RZs8W3tnLkjIcpxa9eRlY6beLH9q11tFH6zhxkdTzCsXuyyCmTz25J2lms%2BIqnjYMV%2F8XiBEBTW6DThjcHwur95AzPZ6Td75%2FDoNjEcGKHvu%2BqWkzbDpgayyxzOsS3X25NtucfUuZHQ1bkfP0KtmITYCbQGMpsWMNLC%2BMQGOqUBclfrc3p9zG8SnKjGuM2A5Tn2hEq3oxFwmNUe3%2FcLE9yXVIYjbBKsXRO1UO2uTTYV6SgynIywGNoxYDdyhIM99NRfSWyE14cmn8FVgPiaoJUj6BVa3%2F7x7BmTV8Uo41A7KAMVprLc5KFkS%2F7zIfkIsGkY69fr8Y3%2BRmcRiiPXuFVGUhsYhavRzb6JaUstNnRMCCXhGQS8DHQYA2CKPYaAso9ajHax&X-Amz-Signature=5e946cffd44ecd730b7b13773ef6a27aa2dc27e1a5389f6a5b715cb1bae319cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7I4OIZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDDqZE2L2fMUhVYthHigBL1MeEGTu9mJGIRiJXtlVX1ZQIgK7IkqG8zBz6ibKGDCcsvnjmNPEyk82sxmpeToZvL%2F1Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKGRD0ITKhafZBpPASrcA3AiLLtc52TyBtcvXs7q%2FEsHGhJwLEnlUaUmlLO0pbaFyy0vCm%2BJjaZFG7XalmB7d8LScXH6Qadpb5bo8ptmf3%2Fg%2F3JaYDHa7MJFFThbVBVg6cqpCFPJYCxSsxuzp1zrV%2BsrnlfvbwBDodpucEhxKBGhCW2lIA4z%2Fcaj2%2Bsv7u8sCDI5kyj2jtEv9Sqnci05iHFO7G%2B7kOHkoxxZQc6ISUtqq1%2BYiJVTesVBPgGsvxj7SwrLiLGD67KyRKZ2Y9XKEpv5N2IVszJLQBwO109Zmlk8fSPmjNXw%2BS%2BVMFshmXeBu2rVg3D856TxLCaXkMz28wou%2FnehzL4ZNMy2xr6rRJrFDCemgUAzY%2BRE3OE5Gi4DqEUxJFttEoAsDrnZewgmC3BvGYOU6LdIStLm44lFmv6E%2FsmlJ0NwJZG7RlDv3qgJ2IJsXd1v6OqLZL4IAvuZZoxY6qTxiNMZRbzDH350EVTfN8gbdhD6%2FZvAPnwMh6Xd29ImBLAaO%2FSLH40elH7qEUD92cpT0jn68vMo0oomVcqshq%2BZGKGtSsqRxtAof8d68aHSim7JIwOj1t1EMs0NSQSk8hBj3R%2BR4cJIAnjkT0cKJ6EurZbQ4gExNbJoEzvdNNQ6YhuCfQX%2F6S7kMPbC%2BMQGOqUBoPWa%2BAWkCnCuPDuTcQ0336yi%2FI7OKZkwfg3aNklGSU66YL1PmWJfoOoSROr1iDXkk4XMXVz%2F%2FpRuM7yOnKfiyABKDCSTyZX5IuhcOvP2oU%2F1h5a0PY5jopXFqvF8nTngstmgd%2FGd8psY%2FXMJlnUftkss%2FCtSCVAKs3pNB%2BlWB2bsQ4ucLLq0DOTrZXAh8Lx5qWXsjpS2%2BxeLxxAG2KP81LyaFUD7&X-Amz-Signature=716773f6a2c1a2ccf3696fcf014d4608a3a606c824a990773dcc9b9358dec7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X3BSPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEE9sRgVn9GRCQFv1Rf4Gt6CQ%2BiMg%2B9MqL18%2Bo%2B%2BbXuHAiA39KP%2FWpFibpclc5RiuC9oy32r8qP2tXQ2vARvsYag1yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWUH3tvjzIHdJST6iKtwDm8wMtN8WQQf4GzFJIlQpntZOC3%2F1DGM3M7SweGTpLubi%2FLoZWV9rMdzWHtbizos7y044qxGVlHEm294DUH%2BNcoJr7dg6tOgz5dBqjAM1mxceivk9s7AHUP2BXwTnhUwxpoWYNNFAokmYj4Nhv2emijUtCTNDFYFEH64%2BVieX77w5pJAgxdl3F7v86cgzAN36nhO3bMi1SFSBdsRiCq4Ie3ItD48gsGyNdVps0x5hBD0onejO3NB51JUuo%2BgcnaePAAaU98EBATXRFdHvKDtgXfb%2BtzmQSHl4pGopS%2FTRJqQplGjHdOwuCll8vsaoiGyLHxMmvIOLl%2FUevsW08xP6kZ7UFyFPnvPF7FYEy3O%2BsrOF2ms207YzY0ya6Kl07%2FJvFgc4XVqUI8kJGCKqBE0fb5XWa2omoJylo2nAS7m%2BYyzLdjaxV3CXRFsTY2nrDSOddEiWw7angyw%2BcaOa33vl21UL8TFaUoimqjs42jcBSwB6IeFPmaeX3elr1SMcgdNnzHCYeOlEZsK8PSjQtJeWnIie3uftvOX%2BvO01DplX%2FDO1u0E58HA7k3ooVzNNJSKmiPPU6CBs08%2FEKPI9stWVovmlnvK3ppaph5k2FQf7R38eprJHkViQV%2BeqIDownsL4xAY6pgHXS4tfeTk6ZEdg5V1vDQOCz29BSNyPinQNX55FId3cE8EOI332ZcJbaY%2F%2BKMrtkwf2PMyBkUdcDSBWQdZacOeA7G0xs4z9GlHIfS9DXFMIFC5zPQQjNvRwir3ORcgQdjPtWDctRFpPxZTmIcTNnYeuWUqJAIWFp5%2BHhncAzmrNWVc2UsqG5S%2BalrCCn3RM1YMokZmD1JhtgiZV0Jpkk6YX2VZYOT62&X-Amz-Signature=ff727f93cdaea05cfe60e9a70a38e4eab1ebd42c96746c14710c9a8b58175361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X3BSPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEE9sRgVn9GRCQFv1Rf4Gt6CQ%2BiMg%2B9MqL18%2Bo%2B%2BbXuHAiA39KP%2FWpFibpclc5RiuC9oy32r8qP2tXQ2vARvsYag1yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWUH3tvjzIHdJST6iKtwDm8wMtN8WQQf4GzFJIlQpntZOC3%2F1DGM3M7SweGTpLubi%2FLoZWV9rMdzWHtbizos7y044qxGVlHEm294DUH%2BNcoJr7dg6tOgz5dBqjAM1mxceivk9s7AHUP2BXwTnhUwxpoWYNNFAokmYj4Nhv2emijUtCTNDFYFEH64%2BVieX77w5pJAgxdl3F7v86cgzAN36nhO3bMi1SFSBdsRiCq4Ie3ItD48gsGyNdVps0x5hBD0onejO3NB51JUuo%2BgcnaePAAaU98EBATXRFdHvKDtgXfb%2BtzmQSHl4pGopS%2FTRJqQplGjHdOwuCll8vsaoiGyLHxMmvIOLl%2FUevsW08xP6kZ7UFyFPnvPF7FYEy3O%2BsrOF2ms207YzY0ya6Kl07%2FJvFgc4XVqUI8kJGCKqBE0fb5XWa2omoJylo2nAS7m%2BYyzLdjaxV3CXRFsTY2nrDSOddEiWw7angyw%2BcaOa33vl21UL8TFaUoimqjs42jcBSwB6IeFPmaeX3elr1SMcgdNnzHCYeOlEZsK8PSjQtJeWnIie3uftvOX%2BvO01DplX%2FDO1u0E58HA7k3ooVzNNJSKmiPPU6CBs08%2FEKPI9stWVovmlnvK3ppaph5k2FQf7R38eprJHkViQV%2BeqIDownsL4xAY6pgHXS4tfeTk6ZEdg5V1vDQOCz29BSNyPinQNX55FId3cE8EOI332ZcJbaY%2F%2BKMrtkwf2PMyBkUdcDSBWQdZacOeA7G0xs4z9GlHIfS9DXFMIFC5zPQQjNvRwir3ORcgQdjPtWDctRFpPxZTmIcTNnYeuWUqJAIWFp5%2BHhncAzmrNWVc2UsqG5S%2BalrCCn3RM1YMokZmD1JhtgiZV0Jpkk6YX2VZYOT62&X-Amz-Signature=0950caaebd988ba6f13887d6d4e70f07bbbbea49096767fdb3dc7b0eaf360945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X3BSPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEE9sRgVn9GRCQFv1Rf4Gt6CQ%2BiMg%2B9MqL18%2Bo%2B%2BbXuHAiA39KP%2FWpFibpclc5RiuC9oy32r8qP2tXQ2vARvsYag1yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWUH3tvjzIHdJST6iKtwDm8wMtN8WQQf4GzFJIlQpntZOC3%2F1DGM3M7SweGTpLubi%2FLoZWV9rMdzWHtbizos7y044qxGVlHEm294DUH%2BNcoJr7dg6tOgz5dBqjAM1mxceivk9s7AHUP2BXwTnhUwxpoWYNNFAokmYj4Nhv2emijUtCTNDFYFEH64%2BVieX77w5pJAgxdl3F7v86cgzAN36nhO3bMi1SFSBdsRiCq4Ie3ItD48gsGyNdVps0x5hBD0onejO3NB51JUuo%2BgcnaePAAaU98EBATXRFdHvKDtgXfb%2BtzmQSHl4pGopS%2FTRJqQplGjHdOwuCll8vsaoiGyLHxMmvIOLl%2FUevsW08xP6kZ7UFyFPnvPF7FYEy3O%2BsrOF2ms207YzY0ya6Kl07%2FJvFgc4XVqUI8kJGCKqBE0fb5XWa2omoJylo2nAS7m%2BYyzLdjaxV3CXRFsTY2nrDSOddEiWw7angyw%2BcaOa33vl21UL8TFaUoimqjs42jcBSwB6IeFPmaeX3elr1SMcgdNnzHCYeOlEZsK8PSjQtJeWnIie3uftvOX%2BvO01DplX%2FDO1u0E58HA7k3ooVzNNJSKmiPPU6CBs08%2FEKPI9stWVovmlnvK3ppaph5k2FQf7R38eprJHkViQV%2BeqIDownsL4xAY6pgHXS4tfeTk6ZEdg5V1vDQOCz29BSNyPinQNX55FId3cE8EOI332ZcJbaY%2F%2BKMrtkwf2PMyBkUdcDSBWQdZacOeA7G0xs4z9GlHIfS9DXFMIFC5zPQQjNvRwir3ORcgQdjPtWDctRFpPxZTmIcTNnYeuWUqJAIWFp5%2BHhncAzmrNWVc2UsqG5S%2BalrCCn3RM1YMokZmD1JhtgiZV0Jpkk6YX2VZYOT62&X-Amz-Signature=dd59316372839ac8f59eb33088a4a2926be8a3e3162bff61b0abb34530f23f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X3BSPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEE9sRgVn9GRCQFv1Rf4Gt6CQ%2BiMg%2B9MqL18%2Bo%2B%2BbXuHAiA39KP%2FWpFibpclc5RiuC9oy32r8qP2tXQ2vARvsYag1yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWUH3tvjzIHdJST6iKtwDm8wMtN8WQQf4GzFJIlQpntZOC3%2F1DGM3M7SweGTpLubi%2FLoZWV9rMdzWHtbizos7y044qxGVlHEm294DUH%2BNcoJr7dg6tOgz5dBqjAM1mxceivk9s7AHUP2BXwTnhUwxpoWYNNFAokmYj4Nhv2emijUtCTNDFYFEH64%2BVieX77w5pJAgxdl3F7v86cgzAN36nhO3bMi1SFSBdsRiCq4Ie3ItD48gsGyNdVps0x5hBD0onejO3NB51JUuo%2BgcnaePAAaU98EBATXRFdHvKDtgXfb%2BtzmQSHl4pGopS%2FTRJqQplGjHdOwuCll8vsaoiGyLHxMmvIOLl%2FUevsW08xP6kZ7UFyFPnvPF7FYEy3O%2BsrOF2ms207YzY0ya6Kl07%2FJvFgc4XVqUI8kJGCKqBE0fb5XWa2omoJylo2nAS7m%2BYyzLdjaxV3CXRFsTY2nrDSOddEiWw7angyw%2BcaOa33vl21UL8TFaUoimqjs42jcBSwB6IeFPmaeX3elr1SMcgdNnzHCYeOlEZsK8PSjQtJeWnIie3uftvOX%2BvO01DplX%2FDO1u0E58HA7k3ooVzNNJSKmiPPU6CBs08%2FEKPI9stWVovmlnvK3ppaph5k2FQf7R38eprJHkViQV%2BeqIDownsL4xAY6pgHXS4tfeTk6ZEdg5V1vDQOCz29BSNyPinQNX55FId3cE8EOI332ZcJbaY%2F%2BKMrtkwf2PMyBkUdcDSBWQdZacOeA7G0xs4z9GlHIfS9DXFMIFC5zPQQjNvRwir3ORcgQdjPtWDctRFpPxZTmIcTNnYeuWUqJAIWFp5%2BHhncAzmrNWVc2UsqG5S%2BalrCCn3RM1YMokZmD1JhtgiZV0Jpkk6YX2VZYOT62&X-Amz-Signature=306d6565518efd28d6960c4703c43be3df9e4e928617887dcd4841687b899e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X3BSPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEE9sRgVn9GRCQFv1Rf4Gt6CQ%2BiMg%2B9MqL18%2Bo%2B%2BbXuHAiA39KP%2FWpFibpclc5RiuC9oy32r8qP2tXQ2vARvsYag1yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWUH3tvjzIHdJST6iKtwDm8wMtN8WQQf4GzFJIlQpntZOC3%2F1DGM3M7SweGTpLubi%2FLoZWV9rMdzWHtbizos7y044qxGVlHEm294DUH%2BNcoJr7dg6tOgz5dBqjAM1mxceivk9s7AHUP2BXwTnhUwxpoWYNNFAokmYj4Nhv2emijUtCTNDFYFEH64%2BVieX77w5pJAgxdl3F7v86cgzAN36nhO3bMi1SFSBdsRiCq4Ie3ItD48gsGyNdVps0x5hBD0onejO3NB51JUuo%2BgcnaePAAaU98EBATXRFdHvKDtgXfb%2BtzmQSHl4pGopS%2FTRJqQplGjHdOwuCll8vsaoiGyLHxMmvIOLl%2FUevsW08xP6kZ7UFyFPnvPF7FYEy3O%2BsrOF2ms207YzY0ya6Kl07%2FJvFgc4XVqUI8kJGCKqBE0fb5XWa2omoJylo2nAS7m%2BYyzLdjaxV3CXRFsTY2nrDSOddEiWw7angyw%2BcaOa33vl21UL8TFaUoimqjs42jcBSwB6IeFPmaeX3elr1SMcgdNnzHCYeOlEZsK8PSjQtJeWnIie3uftvOX%2BvO01DplX%2FDO1u0E58HA7k3ooVzNNJSKmiPPU6CBs08%2FEKPI9stWVovmlnvK3ppaph5k2FQf7R38eprJHkViQV%2BeqIDownsL4xAY6pgHXS4tfeTk6ZEdg5V1vDQOCz29BSNyPinQNX55FId3cE8EOI332ZcJbaY%2F%2BKMrtkwf2PMyBkUdcDSBWQdZacOeA7G0xs4z9GlHIfS9DXFMIFC5zPQQjNvRwir3ORcgQdjPtWDctRFpPxZTmIcTNnYeuWUqJAIWFp5%2BHhncAzmrNWVc2UsqG5S%2BalrCCn3RM1YMokZmD1JhtgiZV0Jpkk6YX2VZYOT62&X-Amz-Signature=224b693f94eb2283202fb59104e7756e84ed031649f059a5d234ecfd8457c0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X3BSPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEE9sRgVn9GRCQFv1Rf4Gt6CQ%2BiMg%2B9MqL18%2Bo%2B%2BbXuHAiA39KP%2FWpFibpclc5RiuC9oy32r8qP2tXQ2vARvsYag1yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWUH3tvjzIHdJST6iKtwDm8wMtN8WQQf4GzFJIlQpntZOC3%2F1DGM3M7SweGTpLubi%2FLoZWV9rMdzWHtbizos7y044qxGVlHEm294DUH%2BNcoJr7dg6tOgz5dBqjAM1mxceivk9s7AHUP2BXwTnhUwxpoWYNNFAokmYj4Nhv2emijUtCTNDFYFEH64%2BVieX77w5pJAgxdl3F7v86cgzAN36nhO3bMi1SFSBdsRiCq4Ie3ItD48gsGyNdVps0x5hBD0onejO3NB51JUuo%2BgcnaePAAaU98EBATXRFdHvKDtgXfb%2BtzmQSHl4pGopS%2FTRJqQplGjHdOwuCll8vsaoiGyLHxMmvIOLl%2FUevsW08xP6kZ7UFyFPnvPF7FYEy3O%2BsrOF2ms207YzY0ya6Kl07%2FJvFgc4XVqUI8kJGCKqBE0fb5XWa2omoJylo2nAS7m%2BYyzLdjaxV3CXRFsTY2nrDSOddEiWw7angyw%2BcaOa33vl21UL8TFaUoimqjs42jcBSwB6IeFPmaeX3elr1SMcgdNnzHCYeOlEZsK8PSjQtJeWnIie3uftvOX%2BvO01DplX%2FDO1u0E58HA7k3ooVzNNJSKmiPPU6CBs08%2FEKPI9stWVovmlnvK3ppaph5k2FQf7R38eprJHkViQV%2BeqIDownsL4xAY6pgHXS4tfeTk6ZEdg5V1vDQOCz29BSNyPinQNX55FId3cE8EOI332ZcJbaY%2F%2BKMrtkwf2PMyBkUdcDSBWQdZacOeA7G0xs4z9GlHIfS9DXFMIFC5zPQQjNvRwir3ORcgQdjPtWDctRFpPxZTmIcTNnYeuWUqJAIWFp5%2BHhncAzmrNWVc2UsqG5S%2BalrCCn3RM1YMokZmD1JhtgiZV0Jpkk6YX2VZYOT62&X-Amz-Signature=040f8e75574b9189b85af048a82f838422d33b978adc4cbb92b99e592b0b81e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X3BSPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEE9sRgVn9GRCQFv1Rf4Gt6CQ%2BiMg%2B9MqL18%2Bo%2B%2BbXuHAiA39KP%2FWpFibpclc5RiuC9oy32r8qP2tXQ2vARvsYag1yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWUH3tvjzIHdJST6iKtwDm8wMtN8WQQf4GzFJIlQpntZOC3%2F1DGM3M7SweGTpLubi%2FLoZWV9rMdzWHtbizos7y044qxGVlHEm294DUH%2BNcoJr7dg6tOgz5dBqjAM1mxceivk9s7AHUP2BXwTnhUwxpoWYNNFAokmYj4Nhv2emijUtCTNDFYFEH64%2BVieX77w5pJAgxdl3F7v86cgzAN36nhO3bMi1SFSBdsRiCq4Ie3ItD48gsGyNdVps0x5hBD0onejO3NB51JUuo%2BgcnaePAAaU98EBATXRFdHvKDtgXfb%2BtzmQSHl4pGopS%2FTRJqQplGjHdOwuCll8vsaoiGyLHxMmvIOLl%2FUevsW08xP6kZ7UFyFPnvPF7FYEy3O%2BsrOF2ms207YzY0ya6Kl07%2FJvFgc4XVqUI8kJGCKqBE0fb5XWa2omoJylo2nAS7m%2BYyzLdjaxV3CXRFsTY2nrDSOddEiWw7angyw%2BcaOa33vl21UL8TFaUoimqjs42jcBSwB6IeFPmaeX3elr1SMcgdNnzHCYeOlEZsK8PSjQtJeWnIie3uftvOX%2BvO01DplX%2FDO1u0E58HA7k3ooVzNNJSKmiPPU6CBs08%2FEKPI9stWVovmlnvK3ppaph5k2FQf7R38eprJHkViQV%2BeqIDownsL4xAY6pgHXS4tfeTk6ZEdg5V1vDQOCz29BSNyPinQNX55FId3cE8EOI332ZcJbaY%2F%2BKMrtkwf2PMyBkUdcDSBWQdZacOeA7G0xs4z9GlHIfS9DXFMIFC5zPQQjNvRwir3ORcgQdjPtWDctRFpPxZTmIcTNnYeuWUqJAIWFp5%2BHhncAzmrNWVc2UsqG5S%2BalrCCn3RM1YMokZmD1JhtgiZV0Jpkk6YX2VZYOT62&X-Amz-Signature=a38e61bfad47edd072f16571c80e2b8439164829994ff04ee9da5b08abd1c7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X3BSPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEE9sRgVn9GRCQFv1Rf4Gt6CQ%2BiMg%2B9MqL18%2Bo%2B%2BbXuHAiA39KP%2FWpFibpclc5RiuC9oy32r8qP2tXQ2vARvsYag1yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWUH3tvjzIHdJST6iKtwDm8wMtN8WQQf4GzFJIlQpntZOC3%2F1DGM3M7SweGTpLubi%2FLoZWV9rMdzWHtbizos7y044qxGVlHEm294DUH%2BNcoJr7dg6tOgz5dBqjAM1mxceivk9s7AHUP2BXwTnhUwxpoWYNNFAokmYj4Nhv2emijUtCTNDFYFEH64%2BVieX77w5pJAgxdl3F7v86cgzAN36nhO3bMi1SFSBdsRiCq4Ie3ItD48gsGyNdVps0x5hBD0onejO3NB51JUuo%2BgcnaePAAaU98EBATXRFdHvKDtgXfb%2BtzmQSHl4pGopS%2FTRJqQplGjHdOwuCll8vsaoiGyLHxMmvIOLl%2FUevsW08xP6kZ7UFyFPnvPF7FYEy3O%2BsrOF2ms207YzY0ya6Kl07%2FJvFgc4XVqUI8kJGCKqBE0fb5XWa2omoJylo2nAS7m%2BYyzLdjaxV3CXRFsTY2nrDSOddEiWw7angyw%2BcaOa33vl21UL8TFaUoimqjs42jcBSwB6IeFPmaeX3elr1SMcgdNnzHCYeOlEZsK8PSjQtJeWnIie3uftvOX%2BvO01DplX%2FDO1u0E58HA7k3ooVzNNJSKmiPPU6CBs08%2FEKPI9stWVovmlnvK3ppaph5k2FQf7R38eprJHkViQV%2BeqIDownsL4xAY6pgHXS4tfeTk6ZEdg5V1vDQOCz29BSNyPinQNX55FId3cE8EOI332ZcJbaY%2F%2BKMrtkwf2PMyBkUdcDSBWQdZacOeA7G0xs4z9GlHIfS9DXFMIFC5zPQQjNvRwir3ORcgQdjPtWDctRFpPxZTmIcTNnYeuWUqJAIWFp5%2BHhncAzmrNWVc2UsqG5S%2BalrCCn3RM1YMokZmD1JhtgiZV0Jpkk6YX2VZYOT62&X-Amz-Signature=21373975e3d45d709df566eec086899e401b71fcc90e2badaf0f2f38e1658fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X3BSPL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEE9sRgVn9GRCQFv1Rf4Gt6CQ%2BiMg%2B9MqL18%2Bo%2B%2BbXuHAiA39KP%2FWpFibpclc5RiuC9oy32r8qP2tXQ2vARvsYag1yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWUH3tvjzIHdJST6iKtwDm8wMtN8WQQf4GzFJIlQpntZOC3%2F1DGM3M7SweGTpLubi%2FLoZWV9rMdzWHtbizos7y044qxGVlHEm294DUH%2BNcoJr7dg6tOgz5dBqjAM1mxceivk9s7AHUP2BXwTnhUwxpoWYNNFAokmYj4Nhv2emijUtCTNDFYFEH64%2BVieX77w5pJAgxdl3F7v86cgzAN36nhO3bMi1SFSBdsRiCq4Ie3ItD48gsGyNdVps0x5hBD0onejO3NB51JUuo%2BgcnaePAAaU98EBATXRFdHvKDtgXfb%2BtzmQSHl4pGopS%2FTRJqQplGjHdOwuCll8vsaoiGyLHxMmvIOLl%2FUevsW08xP6kZ7UFyFPnvPF7FYEy3O%2BsrOF2ms207YzY0ya6Kl07%2FJvFgc4XVqUI8kJGCKqBE0fb5XWa2omoJylo2nAS7m%2BYyzLdjaxV3CXRFsTY2nrDSOddEiWw7angyw%2BcaOa33vl21UL8TFaUoimqjs42jcBSwB6IeFPmaeX3elr1SMcgdNnzHCYeOlEZsK8PSjQtJeWnIie3uftvOX%2BvO01DplX%2FDO1u0E58HA7k3ooVzNNJSKmiPPU6CBs08%2FEKPI9stWVovmlnvK3ppaph5k2FQf7R38eprJHkViQV%2BeqIDownsL4xAY6pgHXS4tfeTk6ZEdg5V1vDQOCz29BSNyPinQNX55FId3cE8EOI332ZcJbaY%2F%2BKMrtkwf2PMyBkUdcDSBWQdZacOeA7G0xs4z9GlHIfS9DXFMIFC5zPQQjNvRwir3ORcgQdjPtWDctRFpPxZTmIcTNnYeuWUqJAIWFp5%2BHhncAzmrNWVc2UsqG5S%2BalrCCn3RM1YMokZmD1JhtgiZV0Jpkk6YX2VZYOT62&X-Amz-Signature=842b19e754c3a5f7f0b1e8214978d1d236abac8ad7d835cfd78d2dc3993281a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
