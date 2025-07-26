---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFIPYEC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBsSwP7%2Fz9XSgQ0rrG%2BrZmeMWcV1B0nBqu9Hx9sB8u8mAiEA%2B62ETs1alnwRcGoWwhBVYCylsvqVuSkN%2Flazj6AFfoUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDdnKemMKrWlhGDpLyrcA3sBG3dOV4TceoiD3nZ%2FKEIE38C3iH638%2F6D0ogcbvB%2Ftd87cpcfvyY%2FBTio76fyI3%2FutSmanE0aygFc1KzASd7EqndRFRpFmN3EOTOv7VX5DXI3i3qS1euoUyG5HQo9xlrm9QfqNhYLgPyu8rWWmWC46uDeb1pmRezp4zUkrST2J7NlNaatSqK%2BN1%2F7GgPd2iJvUQeUfHzG6QtBodi8H7PdifZq224aZdgdhVNMwkNXuwUsSwbK6wmo7ktmKRPVJQyVOR2L6wOzupnmn68ccv19QSoVwJv2Vpc24B6GjSH6N177TVfGy72hDwfkWlpLzuQgUtUIZEX1RHg%2BHT%2BbSJmAtxfSgFgpTf6m1EyhXZmBMs8nffeI6IuN98%2B2bNpjk9eLP%2FQ9%2B0VwkC6YiSwHQoUrw7KyUqMbAiart%2FmRDfC8o8kRGjnQPlbDtTUD%2BST3v6PtvLqDxlwkcdM0%2Fqrakj8nxRpgSi875nrvgomBxNik5O2iXTsnxCNMBNcE8QYC6sdCpw9tvvzGXu2Iq2cUzECEobPAGw0l49DzA73akboqzk1bRJSWDMAJKSYtkAzUM6OyT1EsHsEjUdykwEBC2VSnXZ7lcOSG4TEqSUVh8bq5YbKC56HxR0CBhYpFMJnikcQGOqUBRydkxBeO%2BX2K0swoEFmUFr3tI5%2Fljjf%2FzD4mzqJjPBZ3bla2Rcz4BtgNthhBIzHIM1a%2B%2FkdOfQxfc4QpIrqKDBejL%2BOe4Qol99kMCvZVCOsFurxMPlj0%2FgIkIrRY47np8tj3JP4XKSYY7q0bNsZx6gPf%2FNlZXt3eGnIcOKeqxLiMUSrFSmsEQHhvnbjtyT8pdMfBovSxWvlAlY9cHMvUuYZTpIpi&X-Amz-Signature=21a04bb9c44e248f91968b2b9cc9dbceafc6d6c2644bf6d0ca1254521a496d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFIPYEC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBsSwP7%2Fz9XSgQ0rrG%2BrZmeMWcV1B0nBqu9Hx9sB8u8mAiEA%2B62ETs1alnwRcGoWwhBVYCylsvqVuSkN%2Flazj6AFfoUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDdnKemMKrWlhGDpLyrcA3sBG3dOV4TceoiD3nZ%2FKEIE38C3iH638%2F6D0ogcbvB%2Ftd87cpcfvyY%2FBTio76fyI3%2FutSmanE0aygFc1KzASd7EqndRFRpFmN3EOTOv7VX5DXI3i3qS1euoUyG5HQo9xlrm9QfqNhYLgPyu8rWWmWC46uDeb1pmRezp4zUkrST2J7NlNaatSqK%2BN1%2F7GgPd2iJvUQeUfHzG6QtBodi8H7PdifZq224aZdgdhVNMwkNXuwUsSwbK6wmo7ktmKRPVJQyVOR2L6wOzupnmn68ccv19QSoVwJv2Vpc24B6GjSH6N177TVfGy72hDwfkWlpLzuQgUtUIZEX1RHg%2BHT%2BbSJmAtxfSgFgpTf6m1EyhXZmBMs8nffeI6IuN98%2B2bNpjk9eLP%2FQ9%2B0VwkC6YiSwHQoUrw7KyUqMbAiart%2FmRDfC8o8kRGjnQPlbDtTUD%2BST3v6PtvLqDxlwkcdM0%2Fqrakj8nxRpgSi875nrvgomBxNik5O2iXTsnxCNMBNcE8QYC6sdCpw9tvvzGXu2Iq2cUzECEobPAGw0l49DzA73akboqzk1bRJSWDMAJKSYtkAzUM6OyT1EsHsEjUdykwEBC2VSnXZ7lcOSG4TEqSUVh8bq5YbKC56HxR0CBhYpFMJnikcQGOqUBRydkxBeO%2BX2K0swoEFmUFr3tI5%2Fljjf%2FzD4mzqJjPBZ3bla2Rcz4BtgNthhBIzHIM1a%2B%2FkdOfQxfc4QpIrqKDBejL%2BOe4Qol99kMCvZVCOsFurxMPlj0%2FgIkIrRY47np8tj3JP4XKSYY7q0bNsZx6gPf%2FNlZXt3eGnIcOKeqxLiMUSrFSmsEQHhvnbjtyT8pdMfBovSxWvlAlY9cHMvUuYZTpIpi&X-Amz-Signature=9b0fc948e706a254440b42863fb6a6aede41eed1eef285e6b2234268eeefbd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFIPYEC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBsSwP7%2Fz9XSgQ0rrG%2BrZmeMWcV1B0nBqu9Hx9sB8u8mAiEA%2B62ETs1alnwRcGoWwhBVYCylsvqVuSkN%2Flazj6AFfoUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDdnKemMKrWlhGDpLyrcA3sBG3dOV4TceoiD3nZ%2FKEIE38C3iH638%2F6D0ogcbvB%2Ftd87cpcfvyY%2FBTio76fyI3%2FutSmanE0aygFc1KzASd7EqndRFRpFmN3EOTOv7VX5DXI3i3qS1euoUyG5HQo9xlrm9QfqNhYLgPyu8rWWmWC46uDeb1pmRezp4zUkrST2J7NlNaatSqK%2BN1%2F7GgPd2iJvUQeUfHzG6QtBodi8H7PdifZq224aZdgdhVNMwkNXuwUsSwbK6wmo7ktmKRPVJQyVOR2L6wOzupnmn68ccv19QSoVwJv2Vpc24B6GjSH6N177TVfGy72hDwfkWlpLzuQgUtUIZEX1RHg%2BHT%2BbSJmAtxfSgFgpTf6m1EyhXZmBMs8nffeI6IuN98%2B2bNpjk9eLP%2FQ9%2B0VwkC6YiSwHQoUrw7KyUqMbAiart%2FmRDfC8o8kRGjnQPlbDtTUD%2BST3v6PtvLqDxlwkcdM0%2Fqrakj8nxRpgSi875nrvgomBxNik5O2iXTsnxCNMBNcE8QYC6sdCpw9tvvzGXu2Iq2cUzECEobPAGw0l49DzA73akboqzk1bRJSWDMAJKSYtkAzUM6OyT1EsHsEjUdykwEBC2VSnXZ7lcOSG4TEqSUVh8bq5YbKC56HxR0CBhYpFMJnikcQGOqUBRydkxBeO%2BX2K0swoEFmUFr3tI5%2Fljjf%2FzD4mzqJjPBZ3bla2Rcz4BtgNthhBIzHIM1a%2B%2FkdOfQxfc4QpIrqKDBejL%2BOe4Qol99kMCvZVCOsFurxMPlj0%2FgIkIrRY47np8tj3JP4XKSYY7q0bNsZx6gPf%2FNlZXt3eGnIcOKeqxLiMUSrFSmsEQHhvnbjtyT8pdMfBovSxWvlAlY9cHMvUuYZTpIpi&X-Amz-Signature=1c1b0e24f8fa38d3c0043b738ff06b123f39fadef37c8c7225d7b98605b7b87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFIPYEC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBsSwP7%2Fz9XSgQ0rrG%2BrZmeMWcV1B0nBqu9Hx9sB8u8mAiEA%2B62ETs1alnwRcGoWwhBVYCylsvqVuSkN%2Flazj6AFfoUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDdnKemMKrWlhGDpLyrcA3sBG3dOV4TceoiD3nZ%2FKEIE38C3iH638%2F6D0ogcbvB%2Ftd87cpcfvyY%2FBTio76fyI3%2FutSmanE0aygFc1KzASd7EqndRFRpFmN3EOTOv7VX5DXI3i3qS1euoUyG5HQo9xlrm9QfqNhYLgPyu8rWWmWC46uDeb1pmRezp4zUkrST2J7NlNaatSqK%2BN1%2F7GgPd2iJvUQeUfHzG6QtBodi8H7PdifZq224aZdgdhVNMwkNXuwUsSwbK6wmo7ktmKRPVJQyVOR2L6wOzupnmn68ccv19QSoVwJv2Vpc24B6GjSH6N177TVfGy72hDwfkWlpLzuQgUtUIZEX1RHg%2BHT%2BbSJmAtxfSgFgpTf6m1EyhXZmBMs8nffeI6IuN98%2B2bNpjk9eLP%2FQ9%2B0VwkC6YiSwHQoUrw7KyUqMbAiart%2FmRDfC8o8kRGjnQPlbDtTUD%2BST3v6PtvLqDxlwkcdM0%2Fqrakj8nxRpgSi875nrvgomBxNik5O2iXTsnxCNMBNcE8QYC6sdCpw9tvvzGXu2Iq2cUzECEobPAGw0l49DzA73akboqzk1bRJSWDMAJKSYtkAzUM6OyT1EsHsEjUdykwEBC2VSnXZ7lcOSG4TEqSUVh8bq5YbKC56HxR0CBhYpFMJnikcQGOqUBRydkxBeO%2BX2K0swoEFmUFr3tI5%2Fljjf%2FzD4mzqJjPBZ3bla2Rcz4BtgNthhBIzHIM1a%2B%2FkdOfQxfc4QpIrqKDBejL%2BOe4Qol99kMCvZVCOsFurxMPlj0%2FgIkIrRY47np8tj3JP4XKSYY7q0bNsZx6gPf%2FNlZXt3eGnIcOKeqxLiMUSrFSmsEQHhvnbjtyT8pdMfBovSxWvlAlY9cHMvUuYZTpIpi&X-Amz-Signature=bd07a755e4dddfe2e594ba1064816ad101afbf9b1cfffe5da695102f56eff251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFIPYEC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBsSwP7%2Fz9XSgQ0rrG%2BrZmeMWcV1B0nBqu9Hx9sB8u8mAiEA%2B62ETs1alnwRcGoWwhBVYCylsvqVuSkN%2Flazj6AFfoUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDdnKemMKrWlhGDpLyrcA3sBG3dOV4TceoiD3nZ%2FKEIE38C3iH638%2F6D0ogcbvB%2Ftd87cpcfvyY%2FBTio76fyI3%2FutSmanE0aygFc1KzASd7EqndRFRpFmN3EOTOv7VX5DXI3i3qS1euoUyG5HQo9xlrm9QfqNhYLgPyu8rWWmWC46uDeb1pmRezp4zUkrST2J7NlNaatSqK%2BN1%2F7GgPd2iJvUQeUfHzG6QtBodi8H7PdifZq224aZdgdhVNMwkNXuwUsSwbK6wmo7ktmKRPVJQyVOR2L6wOzupnmn68ccv19QSoVwJv2Vpc24B6GjSH6N177TVfGy72hDwfkWlpLzuQgUtUIZEX1RHg%2BHT%2BbSJmAtxfSgFgpTf6m1EyhXZmBMs8nffeI6IuN98%2B2bNpjk9eLP%2FQ9%2B0VwkC6YiSwHQoUrw7KyUqMbAiart%2FmRDfC8o8kRGjnQPlbDtTUD%2BST3v6PtvLqDxlwkcdM0%2Fqrakj8nxRpgSi875nrvgomBxNik5O2iXTsnxCNMBNcE8QYC6sdCpw9tvvzGXu2Iq2cUzECEobPAGw0l49DzA73akboqzk1bRJSWDMAJKSYtkAzUM6OyT1EsHsEjUdykwEBC2VSnXZ7lcOSG4TEqSUVh8bq5YbKC56HxR0CBhYpFMJnikcQGOqUBRydkxBeO%2BX2K0swoEFmUFr3tI5%2Fljjf%2FzD4mzqJjPBZ3bla2Rcz4BtgNthhBIzHIM1a%2B%2FkdOfQxfc4QpIrqKDBejL%2BOe4Qol99kMCvZVCOsFurxMPlj0%2FgIkIrRY47np8tj3JP4XKSYY7q0bNsZx6gPf%2FNlZXt3eGnIcOKeqxLiMUSrFSmsEQHhvnbjtyT8pdMfBovSxWvlAlY9cHMvUuYZTpIpi&X-Amz-Signature=e9a5e1ac34aed14d3c7edd14d62e78ec876c2b26c5dc894eee461098ea8f6c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFIPYEC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBsSwP7%2Fz9XSgQ0rrG%2BrZmeMWcV1B0nBqu9Hx9sB8u8mAiEA%2B62ETs1alnwRcGoWwhBVYCylsvqVuSkN%2Flazj6AFfoUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDdnKemMKrWlhGDpLyrcA3sBG3dOV4TceoiD3nZ%2FKEIE38C3iH638%2F6D0ogcbvB%2Ftd87cpcfvyY%2FBTio76fyI3%2FutSmanE0aygFc1KzASd7EqndRFRpFmN3EOTOv7VX5DXI3i3qS1euoUyG5HQo9xlrm9QfqNhYLgPyu8rWWmWC46uDeb1pmRezp4zUkrST2J7NlNaatSqK%2BN1%2F7GgPd2iJvUQeUfHzG6QtBodi8H7PdifZq224aZdgdhVNMwkNXuwUsSwbK6wmo7ktmKRPVJQyVOR2L6wOzupnmn68ccv19QSoVwJv2Vpc24B6GjSH6N177TVfGy72hDwfkWlpLzuQgUtUIZEX1RHg%2BHT%2BbSJmAtxfSgFgpTf6m1EyhXZmBMs8nffeI6IuN98%2B2bNpjk9eLP%2FQ9%2B0VwkC6YiSwHQoUrw7KyUqMbAiart%2FmRDfC8o8kRGjnQPlbDtTUD%2BST3v6PtvLqDxlwkcdM0%2Fqrakj8nxRpgSi875nrvgomBxNik5O2iXTsnxCNMBNcE8QYC6sdCpw9tvvzGXu2Iq2cUzECEobPAGw0l49DzA73akboqzk1bRJSWDMAJKSYtkAzUM6OyT1EsHsEjUdykwEBC2VSnXZ7lcOSG4TEqSUVh8bq5YbKC56HxR0CBhYpFMJnikcQGOqUBRydkxBeO%2BX2K0swoEFmUFr3tI5%2Fljjf%2FzD4mzqJjPBZ3bla2Rcz4BtgNthhBIzHIM1a%2B%2FkdOfQxfc4QpIrqKDBejL%2BOe4Qol99kMCvZVCOsFurxMPlj0%2FgIkIrRY47np8tj3JP4XKSYY7q0bNsZx6gPf%2FNlZXt3eGnIcOKeqxLiMUSrFSmsEQHhvnbjtyT8pdMfBovSxWvlAlY9cHMvUuYZTpIpi&X-Amz-Signature=714268050fa1754e22413d2fea3777a6909a2631abeafb6c31a250ac0e911feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFIPYEC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBsSwP7%2Fz9XSgQ0rrG%2BrZmeMWcV1B0nBqu9Hx9sB8u8mAiEA%2B62ETs1alnwRcGoWwhBVYCylsvqVuSkN%2Flazj6AFfoUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDdnKemMKrWlhGDpLyrcA3sBG3dOV4TceoiD3nZ%2FKEIE38C3iH638%2F6D0ogcbvB%2Ftd87cpcfvyY%2FBTio76fyI3%2FutSmanE0aygFc1KzASd7EqndRFRpFmN3EOTOv7VX5DXI3i3qS1euoUyG5HQo9xlrm9QfqNhYLgPyu8rWWmWC46uDeb1pmRezp4zUkrST2J7NlNaatSqK%2BN1%2F7GgPd2iJvUQeUfHzG6QtBodi8H7PdifZq224aZdgdhVNMwkNXuwUsSwbK6wmo7ktmKRPVJQyVOR2L6wOzupnmn68ccv19QSoVwJv2Vpc24B6GjSH6N177TVfGy72hDwfkWlpLzuQgUtUIZEX1RHg%2BHT%2BbSJmAtxfSgFgpTf6m1EyhXZmBMs8nffeI6IuN98%2B2bNpjk9eLP%2FQ9%2B0VwkC6YiSwHQoUrw7KyUqMbAiart%2FmRDfC8o8kRGjnQPlbDtTUD%2BST3v6PtvLqDxlwkcdM0%2Fqrakj8nxRpgSi875nrvgomBxNik5O2iXTsnxCNMBNcE8QYC6sdCpw9tvvzGXu2Iq2cUzECEobPAGw0l49DzA73akboqzk1bRJSWDMAJKSYtkAzUM6OyT1EsHsEjUdykwEBC2VSnXZ7lcOSG4TEqSUVh8bq5YbKC56HxR0CBhYpFMJnikcQGOqUBRydkxBeO%2BX2K0swoEFmUFr3tI5%2Fljjf%2FzD4mzqJjPBZ3bla2Rcz4BtgNthhBIzHIM1a%2B%2FkdOfQxfc4QpIrqKDBejL%2BOe4Qol99kMCvZVCOsFurxMPlj0%2FgIkIrRY47np8tj3JP4XKSYY7q0bNsZx6gPf%2FNlZXt3eGnIcOKeqxLiMUSrFSmsEQHhvnbjtyT8pdMfBovSxWvlAlY9cHMvUuYZTpIpi&X-Amz-Signature=0d11fbb9a6663df99256d7c1e576d1b512531aee86133dccc34ba3fa94bcabe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFIPYEC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBsSwP7%2Fz9XSgQ0rrG%2BrZmeMWcV1B0nBqu9Hx9sB8u8mAiEA%2B62ETs1alnwRcGoWwhBVYCylsvqVuSkN%2Flazj6AFfoUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDdnKemMKrWlhGDpLyrcA3sBG3dOV4TceoiD3nZ%2FKEIE38C3iH638%2F6D0ogcbvB%2Ftd87cpcfvyY%2FBTio76fyI3%2FutSmanE0aygFc1KzASd7EqndRFRpFmN3EOTOv7VX5DXI3i3qS1euoUyG5HQo9xlrm9QfqNhYLgPyu8rWWmWC46uDeb1pmRezp4zUkrST2J7NlNaatSqK%2BN1%2F7GgPd2iJvUQeUfHzG6QtBodi8H7PdifZq224aZdgdhVNMwkNXuwUsSwbK6wmo7ktmKRPVJQyVOR2L6wOzupnmn68ccv19QSoVwJv2Vpc24B6GjSH6N177TVfGy72hDwfkWlpLzuQgUtUIZEX1RHg%2BHT%2BbSJmAtxfSgFgpTf6m1EyhXZmBMs8nffeI6IuN98%2B2bNpjk9eLP%2FQ9%2B0VwkC6YiSwHQoUrw7KyUqMbAiart%2FmRDfC8o8kRGjnQPlbDtTUD%2BST3v6PtvLqDxlwkcdM0%2Fqrakj8nxRpgSi875nrvgomBxNik5O2iXTsnxCNMBNcE8QYC6sdCpw9tvvzGXu2Iq2cUzECEobPAGw0l49DzA73akboqzk1bRJSWDMAJKSYtkAzUM6OyT1EsHsEjUdykwEBC2VSnXZ7lcOSG4TEqSUVh8bq5YbKC56HxR0CBhYpFMJnikcQGOqUBRydkxBeO%2BX2K0swoEFmUFr3tI5%2Fljjf%2FzD4mzqJjPBZ3bla2Rcz4BtgNthhBIzHIM1a%2B%2FkdOfQxfc4QpIrqKDBejL%2BOe4Qol99kMCvZVCOsFurxMPlj0%2FgIkIrRY47np8tj3JP4XKSYY7q0bNsZx6gPf%2FNlZXt3eGnIcOKeqxLiMUSrFSmsEQHhvnbjtyT8pdMfBovSxWvlAlY9cHMvUuYZTpIpi&X-Amz-Signature=399208a3d5192a71b3f47b2f836d2227ef85d2c3736b92751cc743206302a44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFIPYEC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBsSwP7%2Fz9XSgQ0rrG%2BrZmeMWcV1B0nBqu9Hx9sB8u8mAiEA%2B62ETs1alnwRcGoWwhBVYCylsvqVuSkN%2Flazj6AFfoUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDdnKemMKrWlhGDpLyrcA3sBG3dOV4TceoiD3nZ%2FKEIE38C3iH638%2F6D0ogcbvB%2Ftd87cpcfvyY%2FBTio76fyI3%2FutSmanE0aygFc1KzASd7EqndRFRpFmN3EOTOv7VX5DXI3i3qS1euoUyG5HQo9xlrm9QfqNhYLgPyu8rWWmWC46uDeb1pmRezp4zUkrST2J7NlNaatSqK%2BN1%2F7GgPd2iJvUQeUfHzG6QtBodi8H7PdifZq224aZdgdhVNMwkNXuwUsSwbK6wmo7ktmKRPVJQyVOR2L6wOzupnmn68ccv19QSoVwJv2Vpc24B6GjSH6N177TVfGy72hDwfkWlpLzuQgUtUIZEX1RHg%2BHT%2BbSJmAtxfSgFgpTf6m1EyhXZmBMs8nffeI6IuN98%2B2bNpjk9eLP%2FQ9%2B0VwkC6YiSwHQoUrw7KyUqMbAiart%2FmRDfC8o8kRGjnQPlbDtTUD%2BST3v6PtvLqDxlwkcdM0%2Fqrakj8nxRpgSi875nrvgomBxNik5O2iXTsnxCNMBNcE8QYC6sdCpw9tvvzGXu2Iq2cUzECEobPAGw0l49DzA73akboqzk1bRJSWDMAJKSYtkAzUM6OyT1EsHsEjUdykwEBC2VSnXZ7lcOSG4TEqSUVh8bq5YbKC56HxR0CBhYpFMJnikcQGOqUBRydkxBeO%2BX2K0swoEFmUFr3tI5%2Fljjf%2FzD4mzqJjPBZ3bla2Rcz4BtgNthhBIzHIM1a%2B%2FkdOfQxfc4QpIrqKDBejL%2BOe4Qol99kMCvZVCOsFurxMPlj0%2FgIkIrRY47np8tj3JP4XKSYY7q0bNsZx6gPf%2FNlZXt3eGnIcOKeqxLiMUSrFSmsEQHhvnbjtyT8pdMfBovSxWvlAlY9cHMvUuYZTpIpi&X-Amz-Signature=261f7640325b82b642ea3e5fa9e4ded5ad2edce91bdaa39f4e99e0aa10f1a1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653O2E57I%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXt1d8oGSK4NOcbRaBzu95ItkK8vtpsp3NBnmqU0YqngIgVAsljyxTEXqjhDB9FN8v6NYa%2B2ec4ipiJJ6HXgmXOygq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOusuceca0%2BI2tZO%2FCrcA8pUGWu5ET3739XR26qL6JxfcXlf953Jy7eGjIy4%2Fc0WaRWM%2BFEazXGCnrnUsgLlxY9QGhi7%2FGY8pfV5MC18Cmnx9RaMfvTFVRXKDPZ%2B3PllM2LNiyYCZWfgR3QGMugpGmU5eJENB2rk69eANfB%2Ftrl32pIuIdetEpDpyP%2BnkA%2BsSOCCMUX5UloDtWedyoN7wLO8M1tGc2BlUcDMLhKhttneeLUcGBDu1rcOvkDj5mPlPQ49JYmV4HbiHlI9yX0RGv7DfHYcT%2FGEcWUOvt5boO6Mh3%2FHiUCM7TuWA9w3BYIwKQ1CF7ep7yfW5mDWAIL3mpUPv2%2F0PUis6I8xMHa0%2FWbajumLm%2BN47KZovvGMOoLK%2FDZB3mV%2BAB1jWLaIcihlqWT4P8AE4AGeDpA92WWHVylfQurNcCz8bSdBJ4%2B5lemJfUDMeE88HO%2BoM0qsPhyNxEv%2FlfV62HmqF5KZ%2B7EMSxJ7jKOXbqPMMAH8r%2FQnk74Zr6%2FOtg1G7OJkUPYUSsOm8dY9WCXQ3nOODgRt1BfBkQpk7o%2Bp2LqqoudX2HPPNPNKQmtgeXoXzU8dEBfGjQw4Q6cTBCGLgA%2FEEKlZvJydItuyVORioVHdSrzJiERDT7J9%2FqzrITKVhrVMVOyhMJnikcQGOqUB0VOS5pM9Qc%2FVyOLl5Dqh7YU5IDCVFJZ7xSip5LkpLa8OAGjZhxfuKBAjOEpefc3zyflZVMmp6C5drDNG9t7kD6ZLIEbWLqV7bzLC1mmTmW0%2FIFrMGmsaiUUarcHBrsh%2FbaDxc5pOYvOilcLnxnOCXwPDMcI678Zvlbn4DBTXJHaDETiAcYtvLr1Yitlur3rtHD9dJaHQi1ntMsN2bRh6IaOETkcn&X-Amz-Signature=719c88297a014f53e9aca6a891cb1abe500808b9e4921c44d37c47bac78815c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

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

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFIPYEC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBsSwP7%2Fz9XSgQ0rrG%2BrZmeMWcV1B0nBqu9Hx9sB8u8mAiEA%2B62ETs1alnwRcGoWwhBVYCylsvqVuSkN%2Flazj6AFfoUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDdnKemMKrWlhGDpLyrcA3sBG3dOV4TceoiD3nZ%2FKEIE38C3iH638%2F6D0ogcbvB%2Ftd87cpcfvyY%2FBTio76fyI3%2FutSmanE0aygFc1KzASd7EqndRFRpFmN3EOTOv7VX5DXI3i3qS1euoUyG5HQo9xlrm9QfqNhYLgPyu8rWWmWC46uDeb1pmRezp4zUkrST2J7NlNaatSqK%2BN1%2F7GgPd2iJvUQeUfHzG6QtBodi8H7PdifZq224aZdgdhVNMwkNXuwUsSwbK6wmo7ktmKRPVJQyVOR2L6wOzupnmn68ccv19QSoVwJv2Vpc24B6GjSH6N177TVfGy72hDwfkWlpLzuQgUtUIZEX1RHg%2BHT%2BbSJmAtxfSgFgpTf6m1EyhXZmBMs8nffeI6IuN98%2B2bNpjk9eLP%2FQ9%2B0VwkC6YiSwHQoUrw7KyUqMbAiart%2FmRDfC8o8kRGjnQPlbDtTUD%2BST3v6PtvLqDxlwkcdM0%2Fqrakj8nxRpgSi875nrvgomBxNik5O2iXTsnxCNMBNcE8QYC6sdCpw9tvvzGXu2Iq2cUzECEobPAGw0l49DzA73akboqzk1bRJSWDMAJKSYtkAzUM6OyT1EsHsEjUdykwEBC2VSnXZ7lcOSG4TEqSUVh8bq5YbKC56HxR0CBhYpFMJnikcQGOqUBRydkxBeO%2BX2K0swoEFmUFr3tI5%2Fljjf%2FzD4mzqJjPBZ3bla2Rcz4BtgNthhBIzHIM1a%2B%2FkdOfQxfc4QpIrqKDBejL%2BOe4Qol99kMCvZVCOsFurxMPlj0%2FgIkIrRY47np8tj3JP4XKSYY7q0bNsZx6gPf%2FNlZXt3eGnIcOKeqxLiMUSrFSmsEQHhvnbjtyT8pdMfBovSxWvlAlY9cHMvUuYZTpIpi&X-Amz-Signature=f142c9219e97527053c7bfbeceadac053ea6c7b719462752737166758d51f193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUNOG65%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGHLKg4t65miEY4nnKHwlTsslRo7Fz9GkVvSgzQvoEv%2BAiBEX6zBEAKwJJfA5Yui0vIrG4930K52cOghiwG7ONp8rSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMF6Dy5qkZVMagaeTbKtwD13FV2edyEZwS%2F7DlJVremuEpDuN7%2BsuVKzQBoVQpqsWXL5XYp7qEeqatzh5M8oMTk1lPI7Hm3Jn%2BwbIbLflfd8GlOr5hIhs27WzGPpCDK31DoM8VfXe%2B2UqrOaqxC%2B4NyWfirXQyN1qSDejyqjz9AC2cRyu9MzkKqdVrjwBwtc1fR%2BaE%2BYag%2FKSMyOo1Id52lXwmHtNNbTGDrOWFQEeFP4lYrp5k2cg2J0JKVt3ztVn8cDPW%2B820yrcERlH%2BHWf9Y9X%2FqxGDF3WX98teokNrs3Iy6btSwUsD6QqT%2B5KZSrChFZH1eqJMAWEW1X2cyILxbRmHcEWef5qGmIuxmUYN9QGpA98dM56COBPTKbUN%2F7e%2FGpwcwipV1QAEZLoEAFZ2nyCNvcBZNovSpjqipt28UxYr66HPH3pta4iwxbUKmm0uIyrQyGJH13lWSb%2BoCsF2fLod6E9ZQDL03G56Fy3Oqrx3YqhiqE87Yv0tyNSM7ug188MWldpY0R91H6wIIqxrfAlYx%2FxLKNrGJuZR9Laa6l96cXlgK1QM6lesc4Ac5OsG%2FVVFI7Ln6TjPK%2F%2BAfBCBq3mdi76wtpeUR0016jreaFfyHWETxp%2BkjJn%2B3uxecuinuv2dGWUyYpTD3CYw3OKRxAY6pgFsQexRAVtfLQESrouaIG0RL6Pucby6euOTYhtzWd%2Fd39DzoBl%2BL4tVydDxfDsUoaHYj2EMRaK5Le%2B5EPrXbZVhkmJFXTyk%2BR1TN8u6hC50A%2BnkSlAC980TrZJ2dVZ2hPqqYnAwImUcte%2BLL3i7fxqUKewKgevGhygepST2QYCtxAzHIEb2UGWfYP32%2BX8VZ%2FPNgHcJ8HOrhmDJfhTPLggHwhAx81bp&X-Amz-Signature=270bffbb351d930e47f8c44de5d0b0edf2ac2fa64c79e8802861cba01fb6111f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUNOG65%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGHLKg4t65miEY4nnKHwlTsslRo7Fz9GkVvSgzQvoEv%2BAiBEX6zBEAKwJJfA5Yui0vIrG4930K52cOghiwG7ONp8rSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMF6Dy5qkZVMagaeTbKtwD13FV2edyEZwS%2F7DlJVremuEpDuN7%2BsuVKzQBoVQpqsWXL5XYp7qEeqatzh5M8oMTk1lPI7Hm3Jn%2BwbIbLflfd8GlOr5hIhs27WzGPpCDK31DoM8VfXe%2B2UqrOaqxC%2B4NyWfirXQyN1qSDejyqjz9AC2cRyu9MzkKqdVrjwBwtc1fR%2BaE%2BYag%2FKSMyOo1Id52lXwmHtNNbTGDrOWFQEeFP4lYrp5k2cg2J0JKVt3ztVn8cDPW%2B820yrcERlH%2BHWf9Y9X%2FqxGDF3WX98teokNrs3Iy6btSwUsD6QqT%2B5KZSrChFZH1eqJMAWEW1X2cyILxbRmHcEWef5qGmIuxmUYN9QGpA98dM56COBPTKbUN%2F7e%2FGpwcwipV1QAEZLoEAFZ2nyCNvcBZNovSpjqipt28UxYr66HPH3pta4iwxbUKmm0uIyrQyGJH13lWSb%2BoCsF2fLod6E9ZQDL03G56Fy3Oqrx3YqhiqE87Yv0tyNSM7ug188MWldpY0R91H6wIIqxrfAlYx%2FxLKNrGJuZR9Laa6l96cXlgK1QM6lesc4Ac5OsG%2FVVFI7Ln6TjPK%2F%2BAfBCBq3mdi76wtpeUR0016jreaFfyHWETxp%2BkjJn%2B3uxecuinuv2dGWUyYpTD3CYw3OKRxAY6pgFsQexRAVtfLQESrouaIG0RL6Pucby6euOTYhtzWd%2Fd39DzoBl%2BL4tVydDxfDsUoaHYj2EMRaK5Le%2B5EPrXbZVhkmJFXTyk%2BR1TN8u6hC50A%2BnkSlAC980TrZJ2dVZ2hPqqYnAwImUcte%2BLL3i7fxqUKewKgevGhygepST2QYCtxAzHIEb2UGWfYP32%2BX8VZ%2FPNgHcJ8HOrhmDJfhTPLggHwhAx81bp&X-Amz-Signature=092b567a7201bddb13d5ec045a3a58f4b07bd167427d76b1aed50cfa7fcc6a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUNOG65%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGHLKg4t65miEY4nnKHwlTsslRo7Fz9GkVvSgzQvoEv%2BAiBEX6zBEAKwJJfA5Yui0vIrG4930K52cOghiwG7ONp8rSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMF6Dy5qkZVMagaeTbKtwD13FV2edyEZwS%2F7DlJVremuEpDuN7%2BsuVKzQBoVQpqsWXL5XYp7qEeqatzh5M8oMTk1lPI7Hm3Jn%2BwbIbLflfd8GlOr5hIhs27WzGPpCDK31DoM8VfXe%2B2UqrOaqxC%2B4NyWfirXQyN1qSDejyqjz9AC2cRyu9MzkKqdVrjwBwtc1fR%2BaE%2BYag%2FKSMyOo1Id52lXwmHtNNbTGDrOWFQEeFP4lYrp5k2cg2J0JKVt3ztVn8cDPW%2B820yrcERlH%2BHWf9Y9X%2FqxGDF3WX98teokNrs3Iy6btSwUsD6QqT%2B5KZSrChFZH1eqJMAWEW1X2cyILxbRmHcEWef5qGmIuxmUYN9QGpA98dM56COBPTKbUN%2F7e%2FGpwcwipV1QAEZLoEAFZ2nyCNvcBZNovSpjqipt28UxYr66HPH3pta4iwxbUKmm0uIyrQyGJH13lWSb%2BoCsF2fLod6E9ZQDL03G56Fy3Oqrx3YqhiqE87Yv0tyNSM7ug188MWldpY0R91H6wIIqxrfAlYx%2FxLKNrGJuZR9Laa6l96cXlgK1QM6lesc4Ac5OsG%2FVVFI7Ln6TjPK%2F%2BAfBCBq3mdi76wtpeUR0016jreaFfyHWETxp%2BkjJn%2B3uxecuinuv2dGWUyYpTD3CYw3OKRxAY6pgFsQexRAVtfLQESrouaIG0RL6Pucby6euOTYhtzWd%2Fd39DzoBl%2BL4tVydDxfDsUoaHYj2EMRaK5Le%2B5EPrXbZVhkmJFXTyk%2BR1TN8u6hC50A%2BnkSlAC980TrZJ2dVZ2hPqqYnAwImUcte%2BLL3i7fxqUKewKgevGhygepST2QYCtxAzHIEb2UGWfYP32%2BX8VZ%2FPNgHcJ8HOrhmDJfhTPLggHwhAx81bp&X-Amz-Signature=d943b4ef75a5118aa4dd80c8dfde524f5d85690a22e08f41db682b2540149d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUNOG65%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGHLKg4t65miEY4nnKHwlTsslRo7Fz9GkVvSgzQvoEv%2BAiBEX6zBEAKwJJfA5Yui0vIrG4930K52cOghiwG7ONp8rSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMF6Dy5qkZVMagaeTbKtwD13FV2edyEZwS%2F7DlJVremuEpDuN7%2BsuVKzQBoVQpqsWXL5XYp7qEeqatzh5M8oMTk1lPI7Hm3Jn%2BwbIbLflfd8GlOr5hIhs27WzGPpCDK31DoM8VfXe%2B2UqrOaqxC%2B4NyWfirXQyN1qSDejyqjz9AC2cRyu9MzkKqdVrjwBwtc1fR%2BaE%2BYag%2FKSMyOo1Id52lXwmHtNNbTGDrOWFQEeFP4lYrp5k2cg2J0JKVt3ztVn8cDPW%2B820yrcERlH%2BHWf9Y9X%2FqxGDF3WX98teokNrs3Iy6btSwUsD6QqT%2B5KZSrChFZH1eqJMAWEW1X2cyILxbRmHcEWef5qGmIuxmUYN9QGpA98dM56COBPTKbUN%2F7e%2FGpwcwipV1QAEZLoEAFZ2nyCNvcBZNovSpjqipt28UxYr66HPH3pta4iwxbUKmm0uIyrQyGJH13lWSb%2BoCsF2fLod6E9ZQDL03G56Fy3Oqrx3YqhiqE87Yv0tyNSM7ug188MWldpY0R91H6wIIqxrfAlYx%2FxLKNrGJuZR9Laa6l96cXlgK1QM6lesc4Ac5OsG%2FVVFI7Ln6TjPK%2F%2BAfBCBq3mdi76wtpeUR0016jreaFfyHWETxp%2BkjJn%2B3uxecuinuv2dGWUyYpTD3CYw3OKRxAY6pgFsQexRAVtfLQESrouaIG0RL6Pucby6euOTYhtzWd%2Fd39DzoBl%2BL4tVydDxfDsUoaHYj2EMRaK5Le%2B5EPrXbZVhkmJFXTyk%2BR1TN8u6hC50A%2BnkSlAC980TrZJ2dVZ2hPqqYnAwImUcte%2BLL3i7fxqUKewKgevGhygepST2QYCtxAzHIEb2UGWfYP32%2BX8VZ%2FPNgHcJ8HOrhmDJfhTPLggHwhAx81bp&X-Amz-Signature=eadd1b7b359f498b57a69b249abd0049b09ff7bf426097bde6ad6cfb24f0acf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUNOG65%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGHLKg4t65miEY4nnKHwlTsslRo7Fz9GkVvSgzQvoEv%2BAiBEX6zBEAKwJJfA5Yui0vIrG4930K52cOghiwG7ONp8rSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMF6Dy5qkZVMagaeTbKtwD13FV2edyEZwS%2F7DlJVremuEpDuN7%2BsuVKzQBoVQpqsWXL5XYp7qEeqatzh5M8oMTk1lPI7Hm3Jn%2BwbIbLflfd8GlOr5hIhs27WzGPpCDK31DoM8VfXe%2B2UqrOaqxC%2B4NyWfirXQyN1qSDejyqjz9AC2cRyu9MzkKqdVrjwBwtc1fR%2BaE%2BYag%2FKSMyOo1Id52lXwmHtNNbTGDrOWFQEeFP4lYrp5k2cg2J0JKVt3ztVn8cDPW%2B820yrcERlH%2BHWf9Y9X%2FqxGDF3WX98teokNrs3Iy6btSwUsD6QqT%2B5KZSrChFZH1eqJMAWEW1X2cyILxbRmHcEWef5qGmIuxmUYN9QGpA98dM56COBPTKbUN%2F7e%2FGpwcwipV1QAEZLoEAFZ2nyCNvcBZNovSpjqipt28UxYr66HPH3pta4iwxbUKmm0uIyrQyGJH13lWSb%2BoCsF2fLod6E9ZQDL03G56Fy3Oqrx3YqhiqE87Yv0tyNSM7ug188MWldpY0R91H6wIIqxrfAlYx%2FxLKNrGJuZR9Laa6l96cXlgK1QM6lesc4Ac5OsG%2FVVFI7Ln6TjPK%2F%2BAfBCBq3mdi76wtpeUR0016jreaFfyHWETxp%2BkjJn%2B3uxecuinuv2dGWUyYpTD3CYw3OKRxAY6pgFsQexRAVtfLQESrouaIG0RL6Pucby6euOTYhtzWd%2Fd39DzoBl%2BL4tVydDxfDsUoaHYj2EMRaK5Le%2B5EPrXbZVhkmJFXTyk%2BR1TN8u6hC50A%2BnkSlAC980TrZJ2dVZ2hPqqYnAwImUcte%2BLL3i7fxqUKewKgevGhygepST2QYCtxAzHIEb2UGWfYP32%2BX8VZ%2FPNgHcJ8HOrhmDJfhTPLggHwhAx81bp&X-Amz-Signature=3c27495ad1b0ee9c1420d98ac9e9f4d1ebfdeccfe346ed665493a4dad3a3a466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUNOG65%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGHLKg4t65miEY4nnKHwlTsslRo7Fz9GkVvSgzQvoEv%2BAiBEX6zBEAKwJJfA5Yui0vIrG4930K52cOghiwG7ONp8rSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMF6Dy5qkZVMagaeTbKtwD13FV2edyEZwS%2F7DlJVremuEpDuN7%2BsuVKzQBoVQpqsWXL5XYp7qEeqatzh5M8oMTk1lPI7Hm3Jn%2BwbIbLflfd8GlOr5hIhs27WzGPpCDK31DoM8VfXe%2B2UqrOaqxC%2B4NyWfirXQyN1qSDejyqjz9AC2cRyu9MzkKqdVrjwBwtc1fR%2BaE%2BYag%2FKSMyOo1Id52lXwmHtNNbTGDrOWFQEeFP4lYrp5k2cg2J0JKVt3ztVn8cDPW%2B820yrcERlH%2BHWf9Y9X%2FqxGDF3WX98teokNrs3Iy6btSwUsD6QqT%2B5KZSrChFZH1eqJMAWEW1X2cyILxbRmHcEWef5qGmIuxmUYN9QGpA98dM56COBPTKbUN%2F7e%2FGpwcwipV1QAEZLoEAFZ2nyCNvcBZNovSpjqipt28UxYr66HPH3pta4iwxbUKmm0uIyrQyGJH13lWSb%2BoCsF2fLod6E9ZQDL03G56Fy3Oqrx3YqhiqE87Yv0tyNSM7ug188MWldpY0R91H6wIIqxrfAlYx%2FxLKNrGJuZR9Laa6l96cXlgK1QM6lesc4Ac5OsG%2FVVFI7Ln6TjPK%2F%2BAfBCBq3mdi76wtpeUR0016jreaFfyHWETxp%2BkjJn%2B3uxecuinuv2dGWUyYpTD3CYw3OKRxAY6pgFsQexRAVtfLQESrouaIG0RL6Pucby6euOTYhtzWd%2Fd39DzoBl%2BL4tVydDxfDsUoaHYj2EMRaK5Le%2B5EPrXbZVhkmJFXTyk%2BR1TN8u6hC50A%2BnkSlAC980TrZJ2dVZ2hPqqYnAwImUcte%2BLL3i7fxqUKewKgevGhygepST2QYCtxAzHIEb2UGWfYP32%2BX8VZ%2FPNgHcJ8HOrhmDJfhTPLggHwhAx81bp&X-Amz-Signature=d9dfe0c33a29b408bb97f31670b57d2c568a6b4e67201916f8223fb8868d5860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUNOG65%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGHLKg4t65miEY4nnKHwlTsslRo7Fz9GkVvSgzQvoEv%2BAiBEX6zBEAKwJJfA5Yui0vIrG4930K52cOghiwG7ONp8rSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMF6Dy5qkZVMagaeTbKtwD13FV2edyEZwS%2F7DlJVremuEpDuN7%2BsuVKzQBoVQpqsWXL5XYp7qEeqatzh5M8oMTk1lPI7Hm3Jn%2BwbIbLflfd8GlOr5hIhs27WzGPpCDK31DoM8VfXe%2B2UqrOaqxC%2B4NyWfirXQyN1qSDejyqjz9AC2cRyu9MzkKqdVrjwBwtc1fR%2BaE%2BYag%2FKSMyOo1Id52lXwmHtNNbTGDrOWFQEeFP4lYrp5k2cg2J0JKVt3ztVn8cDPW%2B820yrcERlH%2BHWf9Y9X%2FqxGDF3WX98teokNrs3Iy6btSwUsD6QqT%2B5KZSrChFZH1eqJMAWEW1X2cyILxbRmHcEWef5qGmIuxmUYN9QGpA98dM56COBPTKbUN%2F7e%2FGpwcwipV1QAEZLoEAFZ2nyCNvcBZNovSpjqipt28UxYr66HPH3pta4iwxbUKmm0uIyrQyGJH13lWSb%2BoCsF2fLod6E9ZQDL03G56Fy3Oqrx3YqhiqE87Yv0tyNSM7ug188MWldpY0R91H6wIIqxrfAlYx%2FxLKNrGJuZR9Laa6l96cXlgK1QM6lesc4Ac5OsG%2FVVFI7Ln6TjPK%2F%2BAfBCBq3mdi76wtpeUR0016jreaFfyHWETxp%2BkjJn%2B3uxecuinuv2dGWUyYpTD3CYw3OKRxAY6pgFsQexRAVtfLQESrouaIG0RL6Pucby6euOTYhtzWd%2Fd39DzoBl%2BL4tVydDxfDsUoaHYj2EMRaK5Le%2B5EPrXbZVhkmJFXTyk%2BR1TN8u6hC50A%2BnkSlAC980TrZJ2dVZ2hPqqYnAwImUcte%2BLL3i7fxqUKewKgevGhygepST2QYCtxAzHIEb2UGWfYP32%2BX8VZ%2FPNgHcJ8HOrhmDJfhTPLggHwhAx81bp&X-Amz-Signature=07fe568eba29c30df41ebf8742684a8ad35a52113bdf6284b7774919b2a16ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk mention + link Robot Localization node
