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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VEHCED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPKZJxxqwiun%2FmiL15wV%2BJiADoIkruTawB%2BwxgrXhXwIhAITS2ZRTFffGr%2B8m3h3jmwd0oa2RGhHJW2sOcpqknOLVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1F0PwM3qoruqdAcq3AO9hJIld8H2MOBz1a7aqOFTIK0rIijKgJ7lo4J5KF45uL89rmmwbb4BuOdhKOPW8splgK%2BI%2BKmwQFRv2fpe4AWwqFePszkWJxIhby5%2BDm6foDZTEI3CKO6Kj0PH%2Bwx2h2zTERsAIE8AyzCAlLPQO1eCoOyUDz2Rvch96HnyYR935VHOom3a%2Bz0ueMwP%2FUmH0Kp0PCmaIpRdWRTCzuSMsCOKE2HytGOE0hOX2Lu%2FDRrR%2BXg5WrQIy89ypeqViAXt4Gi1JDxAKZAc8t8HsrWrtH8rXbU52qTV%2F9nIqBG0qu89rzhzBP5iKlaVMSgduwGvzpT3570nsxytih5bFWSaLerW1oEQPCreTiGa%2F40AERtYG7H5RAUv%2BEsVh43fdkFW%2BXOkwu8sc3%2FtDmDEl7mRlIEhcloCif0L%2Fb0Y4u0kMGO9F4ev1ag2ysTT635%2Fu2jdKyDCHkB3FMNa5Utx5GRSF%2Fr8PrJ8fyr5qaZ0Lgkhlbah0IIJwNgNcV%2FG17dl7MKJRGz1VxphzM1GMvPs6yBwzwNpYuTgYzOcOmUcNpmeK1FJz8UpR%2BiUAfrOGRIpm79MhaXIYA2YeyiyZ6QTeEXnTExbpvco6cqt3ndv%2BbLO3oLEwY2TlatGXRBulWilWDDz9%2BXEBjqkAaHMJsd2v%2BX%2FD24UxCZbrsS8lKzmecspzvGOxvTHY8EfF5Xsrd6L5wmkQbauMQT3VIBr8RdKBMU7703MsDOzvvvV%2BN1jJa3Smkhre%2FEbhLqhIQYkeQi%2FiEQieTOjXsO6gO7z%2BFbT0rS%2FeX%2FCRJeF%2FPNEGNNr77yXJYajzy1Uoiaij91G4C7cbL2XpqgB0OtkkcuvZgJfBDG0Q5VNni9nLS6r23r2&X-Amz-Signature=aca3ed561d1dcf0a162d774ad4ce84c2227e5dbc6649a8e48f5a5b4e452e4de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VEHCED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPKZJxxqwiun%2FmiL15wV%2BJiADoIkruTawB%2BwxgrXhXwIhAITS2ZRTFffGr%2B8m3h3jmwd0oa2RGhHJW2sOcpqknOLVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1F0PwM3qoruqdAcq3AO9hJIld8H2MOBz1a7aqOFTIK0rIijKgJ7lo4J5KF45uL89rmmwbb4BuOdhKOPW8splgK%2BI%2BKmwQFRv2fpe4AWwqFePszkWJxIhby5%2BDm6foDZTEI3CKO6Kj0PH%2Bwx2h2zTERsAIE8AyzCAlLPQO1eCoOyUDz2Rvch96HnyYR935VHOom3a%2Bz0ueMwP%2FUmH0Kp0PCmaIpRdWRTCzuSMsCOKE2HytGOE0hOX2Lu%2FDRrR%2BXg5WrQIy89ypeqViAXt4Gi1JDxAKZAc8t8HsrWrtH8rXbU52qTV%2F9nIqBG0qu89rzhzBP5iKlaVMSgduwGvzpT3570nsxytih5bFWSaLerW1oEQPCreTiGa%2F40AERtYG7H5RAUv%2BEsVh43fdkFW%2BXOkwu8sc3%2FtDmDEl7mRlIEhcloCif0L%2Fb0Y4u0kMGO9F4ev1ag2ysTT635%2Fu2jdKyDCHkB3FMNa5Utx5GRSF%2Fr8PrJ8fyr5qaZ0Lgkhlbah0IIJwNgNcV%2FG17dl7MKJRGz1VxphzM1GMvPs6yBwzwNpYuTgYzOcOmUcNpmeK1FJz8UpR%2BiUAfrOGRIpm79MhaXIYA2YeyiyZ6QTeEXnTExbpvco6cqt3ndv%2BbLO3oLEwY2TlatGXRBulWilWDDz9%2BXEBjqkAaHMJsd2v%2BX%2FD24UxCZbrsS8lKzmecspzvGOxvTHY8EfF5Xsrd6L5wmkQbauMQT3VIBr8RdKBMU7703MsDOzvvvV%2BN1jJa3Smkhre%2FEbhLqhIQYkeQi%2FiEQieTOjXsO6gO7z%2BFbT0rS%2FeX%2FCRJeF%2FPNEGNNr77yXJYajzy1Uoiaij91G4C7cbL2XpqgB0OtkkcuvZgJfBDG0Q5VNni9nLS6r23r2&X-Amz-Signature=6bc2816160f05a7ad09c3e524eb4c63127cde0e9c7501cff001bffd2134fa164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VEHCED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPKZJxxqwiun%2FmiL15wV%2BJiADoIkruTawB%2BwxgrXhXwIhAITS2ZRTFffGr%2B8m3h3jmwd0oa2RGhHJW2sOcpqknOLVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1F0PwM3qoruqdAcq3AO9hJIld8H2MOBz1a7aqOFTIK0rIijKgJ7lo4J5KF45uL89rmmwbb4BuOdhKOPW8splgK%2BI%2BKmwQFRv2fpe4AWwqFePszkWJxIhby5%2BDm6foDZTEI3CKO6Kj0PH%2Bwx2h2zTERsAIE8AyzCAlLPQO1eCoOyUDz2Rvch96HnyYR935VHOom3a%2Bz0ueMwP%2FUmH0Kp0PCmaIpRdWRTCzuSMsCOKE2HytGOE0hOX2Lu%2FDRrR%2BXg5WrQIy89ypeqViAXt4Gi1JDxAKZAc8t8HsrWrtH8rXbU52qTV%2F9nIqBG0qu89rzhzBP5iKlaVMSgduwGvzpT3570nsxytih5bFWSaLerW1oEQPCreTiGa%2F40AERtYG7H5RAUv%2BEsVh43fdkFW%2BXOkwu8sc3%2FtDmDEl7mRlIEhcloCif0L%2Fb0Y4u0kMGO9F4ev1ag2ysTT635%2Fu2jdKyDCHkB3FMNa5Utx5GRSF%2Fr8PrJ8fyr5qaZ0Lgkhlbah0IIJwNgNcV%2FG17dl7MKJRGz1VxphzM1GMvPs6yBwzwNpYuTgYzOcOmUcNpmeK1FJz8UpR%2BiUAfrOGRIpm79MhaXIYA2YeyiyZ6QTeEXnTExbpvco6cqt3ndv%2BbLO3oLEwY2TlatGXRBulWilWDDz9%2BXEBjqkAaHMJsd2v%2BX%2FD24UxCZbrsS8lKzmecspzvGOxvTHY8EfF5Xsrd6L5wmkQbauMQT3VIBr8RdKBMU7703MsDOzvvvV%2BN1jJa3Smkhre%2FEbhLqhIQYkeQi%2FiEQieTOjXsO6gO7z%2BFbT0rS%2FeX%2FCRJeF%2FPNEGNNr77yXJYajzy1Uoiaij91G4C7cbL2XpqgB0OtkkcuvZgJfBDG0Q5VNni9nLS6r23r2&X-Amz-Signature=25e12f46e9cb774a299f5e35a46e06f73e3984b9b93d5344eeef56ac6eacd81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VEHCED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPKZJxxqwiun%2FmiL15wV%2BJiADoIkruTawB%2BwxgrXhXwIhAITS2ZRTFffGr%2B8m3h3jmwd0oa2RGhHJW2sOcpqknOLVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1F0PwM3qoruqdAcq3AO9hJIld8H2MOBz1a7aqOFTIK0rIijKgJ7lo4J5KF45uL89rmmwbb4BuOdhKOPW8splgK%2BI%2BKmwQFRv2fpe4AWwqFePszkWJxIhby5%2BDm6foDZTEI3CKO6Kj0PH%2Bwx2h2zTERsAIE8AyzCAlLPQO1eCoOyUDz2Rvch96HnyYR935VHOom3a%2Bz0ueMwP%2FUmH0Kp0PCmaIpRdWRTCzuSMsCOKE2HytGOE0hOX2Lu%2FDRrR%2BXg5WrQIy89ypeqViAXt4Gi1JDxAKZAc8t8HsrWrtH8rXbU52qTV%2F9nIqBG0qu89rzhzBP5iKlaVMSgduwGvzpT3570nsxytih5bFWSaLerW1oEQPCreTiGa%2F40AERtYG7H5RAUv%2BEsVh43fdkFW%2BXOkwu8sc3%2FtDmDEl7mRlIEhcloCif0L%2Fb0Y4u0kMGO9F4ev1ag2ysTT635%2Fu2jdKyDCHkB3FMNa5Utx5GRSF%2Fr8PrJ8fyr5qaZ0Lgkhlbah0IIJwNgNcV%2FG17dl7MKJRGz1VxphzM1GMvPs6yBwzwNpYuTgYzOcOmUcNpmeK1FJz8UpR%2BiUAfrOGRIpm79MhaXIYA2YeyiyZ6QTeEXnTExbpvco6cqt3ndv%2BbLO3oLEwY2TlatGXRBulWilWDDz9%2BXEBjqkAaHMJsd2v%2BX%2FD24UxCZbrsS8lKzmecspzvGOxvTHY8EfF5Xsrd6L5wmkQbauMQT3VIBr8RdKBMU7703MsDOzvvvV%2BN1jJa3Smkhre%2FEbhLqhIQYkeQi%2FiEQieTOjXsO6gO7z%2BFbT0rS%2FeX%2FCRJeF%2FPNEGNNr77yXJYajzy1Uoiaij91G4C7cbL2XpqgB0OtkkcuvZgJfBDG0Q5VNni9nLS6r23r2&X-Amz-Signature=ad2baf2fd102be82bb0a705f274d59f0f0735354c58a5c4e2e695ea0f4620f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VEHCED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPKZJxxqwiun%2FmiL15wV%2BJiADoIkruTawB%2BwxgrXhXwIhAITS2ZRTFffGr%2B8m3h3jmwd0oa2RGhHJW2sOcpqknOLVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1F0PwM3qoruqdAcq3AO9hJIld8H2MOBz1a7aqOFTIK0rIijKgJ7lo4J5KF45uL89rmmwbb4BuOdhKOPW8splgK%2BI%2BKmwQFRv2fpe4AWwqFePszkWJxIhby5%2BDm6foDZTEI3CKO6Kj0PH%2Bwx2h2zTERsAIE8AyzCAlLPQO1eCoOyUDz2Rvch96HnyYR935VHOom3a%2Bz0ueMwP%2FUmH0Kp0PCmaIpRdWRTCzuSMsCOKE2HytGOE0hOX2Lu%2FDRrR%2BXg5WrQIy89ypeqViAXt4Gi1JDxAKZAc8t8HsrWrtH8rXbU52qTV%2F9nIqBG0qu89rzhzBP5iKlaVMSgduwGvzpT3570nsxytih5bFWSaLerW1oEQPCreTiGa%2F40AERtYG7H5RAUv%2BEsVh43fdkFW%2BXOkwu8sc3%2FtDmDEl7mRlIEhcloCif0L%2Fb0Y4u0kMGO9F4ev1ag2ysTT635%2Fu2jdKyDCHkB3FMNa5Utx5GRSF%2Fr8PrJ8fyr5qaZ0Lgkhlbah0IIJwNgNcV%2FG17dl7MKJRGz1VxphzM1GMvPs6yBwzwNpYuTgYzOcOmUcNpmeK1FJz8UpR%2BiUAfrOGRIpm79MhaXIYA2YeyiyZ6QTeEXnTExbpvco6cqt3ndv%2BbLO3oLEwY2TlatGXRBulWilWDDz9%2BXEBjqkAaHMJsd2v%2BX%2FD24UxCZbrsS8lKzmecspzvGOxvTHY8EfF5Xsrd6L5wmkQbauMQT3VIBr8RdKBMU7703MsDOzvvvV%2BN1jJa3Smkhre%2FEbhLqhIQYkeQi%2FiEQieTOjXsO6gO7z%2BFbT0rS%2FeX%2FCRJeF%2FPNEGNNr77yXJYajzy1Uoiaij91G4C7cbL2XpqgB0OtkkcuvZgJfBDG0Q5VNni9nLS6r23r2&X-Amz-Signature=7d72aa232403f0eb616ec1f4d931c026feb882ccded327bc9b6f357ec78a6a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VEHCED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPKZJxxqwiun%2FmiL15wV%2BJiADoIkruTawB%2BwxgrXhXwIhAITS2ZRTFffGr%2B8m3h3jmwd0oa2RGhHJW2sOcpqknOLVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1F0PwM3qoruqdAcq3AO9hJIld8H2MOBz1a7aqOFTIK0rIijKgJ7lo4J5KF45uL89rmmwbb4BuOdhKOPW8splgK%2BI%2BKmwQFRv2fpe4AWwqFePszkWJxIhby5%2BDm6foDZTEI3CKO6Kj0PH%2Bwx2h2zTERsAIE8AyzCAlLPQO1eCoOyUDz2Rvch96HnyYR935VHOom3a%2Bz0ueMwP%2FUmH0Kp0PCmaIpRdWRTCzuSMsCOKE2HytGOE0hOX2Lu%2FDRrR%2BXg5WrQIy89ypeqViAXt4Gi1JDxAKZAc8t8HsrWrtH8rXbU52qTV%2F9nIqBG0qu89rzhzBP5iKlaVMSgduwGvzpT3570nsxytih5bFWSaLerW1oEQPCreTiGa%2F40AERtYG7H5RAUv%2BEsVh43fdkFW%2BXOkwu8sc3%2FtDmDEl7mRlIEhcloCif0L%2Fb0Y4u0kMGO9F4ev1ag2ysTT635%2Fu2jdKyDCHkB3FMNa5Utx5GRSF%2Fr8PrJ8fyr5qaZ0Lgkhlbah0IIJwNgNcV%2FG17dl7MKJRGz1VxphzM1GMvPs6yBwzwNpYuTgYzOcOmUcNpmeK1FJz8UpR%2BiUAfrOGRIpm79MhaXIYA2YeyiyZ6QTeEXnTExbpvco6cqt3ndv%2BbLO3oLEwY2TlatGXRBulWilWDDz9%2BXEBjqkAaHMJsd2v%2BX%2FD24UxCZbrsS8lKzmecspzvGOxvTHY8EfF5Xsrd6L5wmkQbauMQT3VIBr8RdKBMU7703MsDOzvvvV%2BN1jJa3Smkhre%2FEbhLqhIQYkeQi%2FiEQieTOjXsO6gO7z%2BFbT0rS%2FeX%2FCRJeF%2FPNEGNNr77yXJYajzy1Uoiaij91G4C7cbL2XpqgB0OtkkcuvZgJfBDG0Q5VNni9nLS6r23r2&X-Amz-Signature=01b6a11d6a48534af8d189d7ea0af0b45bf4dd8f88fe44a956a0cb7193f100d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VEHCED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPKZJxxqwiun%2FmiL15wV%2BJiADoIkruTawB%2BwxgrXhXwIhAITS2ZRTFffGr%2B8m3h3jmwd0oa2RGhHJW2sOcpqknOLVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1F0PwM3qoruqdAcq3AO9hJIld8H2MOBz1a7aqOFTIK0rIijKgJ7lo4J5KF45uL89rmmwbb4BuOdhKOPW8splgK%2BI%2BKmwQFRv2fpe4AWwqFePszkWJxIhby5%2BDm6foDZTEI3CKO6Kj0PH%2Bwx2h2zTERsAIE8AyzCAlLPQO1eCoOyUDz2Rvch96HnyYR935VHOom3a%2Bz0ueMwP%2FUmH0Kp0PCmaIpRdWRTCzuSMsCOKE2HytGOE0hOX2Lu%2FDRrR%2BXg5WrQIy89ypeqViAXt4Gi1JDxAKZAc8t8HsrWrtH8rXbU52qTV%2F9nIqBG0qu89rzhzBP5iKlaVMSgduwGvzpT3570nsxytih5bFWSaLerW1oEQPCreTiGa%2F40AERtYG7H5RAUv%2BEsVh43fdkFW%2BXOkwu8sc3%2FtDmDEl7mRlIEhcloCif0L%2Fb0Y4u0kMGO9F4ev1ag2ysTT635%2Fu2jdKyDCHkB3FMNa5Utx5GRSF%2Fr8PrJ8fyr5qaZ0Lgkhlbah0IIJwNgNcV%2FG17dl7MKJRGz1VxphzM1GMvPs6yBwzwNpYuTgYzOcOmUcNpmeK1FJz8UpR%2BiUAfrOGRIpm79MhaXIYA2YeyiyZ6QTeEXnTExbpvco6cqt3ndv%2BbLO3oLEwY2TlatGXRBulWilWDDz9%2BXEBjqkAaHMJsd2v%2BX%2FD24UxCZbrsS8lKzmecspzvGOxvTHY8EfF5Xsrd6L5wmkQbauMQT3VIBr8RdKBMU7703MsDOzvvvV%2BN1jJa3Smkhre%2FEbhLqhIQYkeQi%2FiEQieTOjXsO6gO7z%2BFbT0rS%2FeX%2FCRJeF%2FPNEGNNr77yXJYajzy1Uoiaij91G4C7cbL2XpqgB0OtkkcuvZgJfBDG0Q5VNni9nLS6r23r2&X-Amz-Signature=298ec88f52fefea8ceada4999005a7e5eee59a4d72ad42c3c19df4878521ed75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VEHCED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPKZJxxqwiun%2FmiL15wV%2BJiADoIkruTawB%2BwxgrXhXwIhAITS2ZRTFffGr%2B8m3h3jmwd0oa2RGhHJW2sOcpqknOLVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1F0PwM3qoruqdAcq3AO9hJIld8H2MOBz1a7aqOFTIK0rIijKgJ7lo4J5KF45uL89rmmwbb4BuOdhKOPW8splgK%2BI%2BKmwQFRv2fpe4AWwqFePszkWJxIhby5%2BDm6foDZTEI3CKO6Kj0PH%2Bwx2h2zTERsAIE8AyzCAlLPQO1eCoOyUDz2Rvch96HnyYR935VHOom3a%2Bz0ueMwP%2FUmH0Kp0PCmaIpRdWRTCzuSMsCOKE2HytGOE0hOX2Lu%2FDRrR%2BXg5WrQIy89ypeqViAXt4Gi1JDxAKZAc8t8HsrWrtH8rXbU52qTV%2F9nIqBG0qu89rzhzBP5iKlaVMSgduwGvzpT3570nsxytih5bFWSaLerW1oEQPCreTiGa%2F40AERtYG7H5RAUv%2BEsVh43fdkFW%2BXOkwu8sc3%2FtDmDEl7mRlIEhcloCif0L%2Fb0Y4u0kMGO9F4ev1ag2ysTT635%2Fu2jdKyDCHkB3FMNa5Utx5GRSF%2Fr8PrJ8fyr5qaZ0Lgkhlbah0IIJwNgNcV%2FG17dl7MKJRGz1VxphzM1GMvPs6yBwzwNpYuTgYzOcOmUcNpmeK1FJz8UpR%2BiUAfrOGRIpm79MhaXIYA2YeyiyZ6QTeEXnTExbpvco6cqt3ndv%2BbLO3oLEwY2TlatGXRBulWilWDDz9%2BXEBjqkAaHMJsd2v%2BX%2FD24UxCZbrsS8lKzmecspzvGOxvTHY8EfF5Xsrd6L5wmkQbauMQT3VIBr8RdKBMU7703MsDOzvvvV%2BN1jJa3Smkhre%2FEbhLqhIQYkeQi%2FiEQieTOjXsO6gO7z%2BFbT0rS%2FeX%2FCRJeF%2FPNEGNNr77yXJYajzy1Uoiaij91G4C7cbL2XpqgB0OtkkcuvZgJfBDG0Q5VNni9nLS6r23r2&X-Amz-Signature=30f1e55cfaf32bb5117c56d62da5911832dfe74ad43a24c258e13d7b1e5e110a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VEHCED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPKZJxxqwiun%2FmiL15wV%2BJiADoIkruTawB%2BwxgrXhXwIhAITS2ZRTFffGr%2B8m3h3jmwd0oa2RGhHJW2sOcpqknOLVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1F0PwM3qoruqdAcq3AO9hJIld8H2MOBz1a7aqOFTIK0rIijKgJ7lo4J5KF45uL89rmmwbb4BuOdhKOPW8splgK%2BI%2BKmwQFRv2fpe4AWwqFePszkWJxIhby5%2BDm6foDZTEI3CKO6Kj0PH%2Bwx2h2zTERsAIE8AyzCAlLPQO1eCoOyUDz2Rvch96HnyYR935VHOom3a%2Bz0ueMwP%2FUmH0Kp0PCmaIpRdWRTCzuSMsCOKE2HytGOE0hOX2Lu%2FDRrR%2BXg5WrQIy89ypeqViAXt4Gi1JDxAKZAc8t8HsrWrtH8rXbU52qTV%2F9nIqBG0qu89rzhzBP5iKlaVMSgduwGvzpT3570nsxytih5bFWSaLerW1oEQPCreTiGa%2F40AERtYG7H5RAUv%2BEsVh43fdkFW%2BXOkwu8sc3%2FtDmDEl7mRlIEhcloCif0L%2Fb0Y4u0kMGO9F4ev1ag2ysTT635%2Fu2jdKyDCHkB3FMNa5Utx5GRSF%2Fr8PrJ8fyr5qaZ0Lgkhlbah0IIJwNgNcV%2FG17dl7MKJRGz1VxphzM1GMvPs6yBwzwNpYuTgYzOcOmUcNpmeK1FJz8UpR%2BiUAfrOGRIpm79MhaXIYA2YeyiyZ6QTeEXnTExbpvco6cqt3ndv%2BbLO3oLEwY2TlatGXRBulWilWDDz9%2BXEBjqkAaHMJsd2v%2BX%2FD24UxCZbrsS8lKzmecspzvGOxvTHY8EfF5Xsrd6L5wmkQbauMQT3VIBr8RdKBMU7703MsDOzvvvV%2BN1jJa3Smkhre%2FEbhLqhIQYkeQi%2FiEQieTOjXsO6gO7z%2BFbT0rS%2FeX%2FCRJeF%2FPNEGNNr77yXJYajzy1Uoiaij91G4C7cbL2XpqgB0OtkkcuvZgJfBDG0Q5VNni9nLS6r23r2&X-Amz-Signature=01054f800feb5ec30b1ebd6688f5a375c85feaac1151ba62c5c2ad39cd253b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VEHCED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPKZJxxqwiun%2FmiL15wV%2BJiADoIkruTawB%2BwxgrXhXwIhAITS2ZRTFffGr%2B8m3h3jmwd0oa2RGhHJW2sOcpqknOLVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1F0PwM3qoruqdAcq3AO9hJIld8H2MOBz1a7aqOFTIK0rIijKgJ7lo4J5KF45uL89rmmwbb4BuOdhKOPW8splgK%2BI%2BKmwQFRv2fpe4AWwqFePszkWJxIhby5%2BDm6foDZTEI3CKO6Kj0PH%2Bwx2h2zTERsAIE8AyzCAlLPQO1eCoOyUDz2Rvch96HnyYR935VHOom3a%2Bz0ueMwP%2FUmH0Kp0PCmaIpRdWRTCzuSMsCOKE2HytGOE0hOX2Lu%2FDRrR%2BXg5WrQIy89ypeqViAXt4Gi1JDxAKZAc8t8HsrWrtH8rXbU52qTV%2F9nIqBG0qu89rzhzBP5iKlaVMSgduwGvzpT3570nsxytih5bFWSaLerW1oEQPCreTiGa%2F40AERtYG7H5RAUv%2BEsVh43fdkFW%2BXOkwu8sc3%2FtDmDEl7mRlIEhcloCif0L%2Fb0Y4u0kMGO9F4ev1ag2ysTT635%2Fu2jdKyDCHkB3FMNa5Utx5GRSF%2Fr8PrJ8fyr5qaZ0Lgkhlbah0IIJwNgNcV%2FG17dl7MKJRGz1VxphzM1GMvPs6yBwzwNpYuTgYzOcOmUcNpmeK1FJz8UpR%2BiUAfrOGRIpm79MhaXIYA2YeyiyZ6QTeEXnTExbpvco6cqt3ndv%2BbLO3oLEwY2TlatGXRBulWilWDDz9%2BXEBjqkAaHMJsd2v%2BX%2FD24UxCZbrsS8lKzmecspzvGOxvTHY8EfF5Xsrd6L5wmkQbauMQT3VIBr8RdKBMU7703MsDOzvvvV%2BN1jJa3Smkhre%2FEbhLqhIQYkeQi%2FiEQieTOjXsO6gO7z%2BFbT0rS%2FeX%2FCRJeF%2FPNEGNNr77yXJYajzy1Uoiaij91G4C7cbL2XpqgB0OtkkcuvZgJfBDG0Q5VNni9nLS6r23r2&X-Amz-Signature=ef0b7b9cf2a89f82f3741f051bc713159a9e7ae31ecd7339f8555cb35e9beba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MCFPJZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNkzARTYuEt7baRthlf3IRgEaz7nzvp5tLSfYrrsOGbQIgF746zlH0vcUiYrUsIPE%2FQb%2BCJ1rvlbJQDJ1ClC0u%2BLsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsMVkx8TR0CZNQtkCrcA4SOuKTLquydz9aw3G%2BcMpl6qOmtGsxGNanMA9jwSharAUGiUI3WK%2B2ttuwDiTzWhJBRYRYQV4MHnMc61zSQRFJ6qWNSreqT5L4b%2B6kEKBwIzXuR08RIn9a8zk4XoJDF%2Fg681awLA9qUvZBiZ0PFB1%2BL7mPFgNGkhquy612tPe8UB6VZLEJY2A8eMltulKglz4GaejIH6WWRUaZzaagmfwDZ%2FnVwo1JZSBLgGtHPwdoA2ScZia5AuvH2Jn4brM501f3NZnYxdTinKRVKrOCm%2BsUjeRJja4E9PVIniCEtqq7s5%2FlI0Y16NY8Pd%2FJu6%2FJDQWjDui68H5NdEYFJaVN042Ut1R7%2BGmznu6NZn1n2KgAYpLyfz%2BpziHOqUVTom4bRdQbmc2XEGag0F%2F%2F89w2uVReLnzrs62%2FG1QFjnz%2BN3An8TxkQPsjDxVggESsQNW1QnvrPGzwtB5yL%2Fl7tge0M88G%2FeIaPD1pxqK24Fh1bNG%2BcjEHCTORZCDKA2GT4lDxWq02FeV%2FCw66UlDIkqOoBXN1Oz3g2WDC%2Bgt4el4S3iCtfWJsjrxD4pSY6rt4NTOvz%2F5hckS41eW8Sy0sb13fIhwadVsB%2FaebFgIXDCJPXgH8x7iLULKd23UcMcu9RMMr35cQGOqUBkKNZbn1dNZmXQODlbIGQWV7f4bG6H7mj4VSuxMsxy6fri6%2B0oFRfewebm9v9%2BKKCcA1pRY9AiFCHIrjMjb1uH0%2B0Hl4MsCnAtw2fShtzVmCtDhr%2F6V1O46S1Ajji7ZanIcncnksrXnuZdrJGW4IZrJYymgStxoPc%2F28IuORBtVRb5dLBO9XffnLaUdbvdni3lokNBc0DjQVTz46l5xzyy%2Fj2BatG&X-Amz-Signature=cd6b7a1b05342dbb535c9e4a8274d217481f054c7d7cdfb0579d1dd75d1bd78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIBLVCH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMHu8c7rPzTrGxDNUSszmhdq%2Bj1dvT9y9ZJJWLDApxAiEAmwkTAVTQcJVZrhxTYBpkF7R%2BnVMRPaMe9Kx7DLbv6d0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuqbW0%2ByzYoo%2FWkCrcA4H7DFWgGR3SuDWlKtt9SENiym2flxnIeB6TJi8HFfbevqjYBYRB1pNq0uIwF25ot%2B3Lp9uHi6lz4690JpIX1QmxPrwfci04onK%2BwoPM6HI0V1ekR6fUo3qBE4Xh2Z57yQlYwOHgc%2BksDNfZOTqPCpZTnGzeagq0TQ8xGbXttqDPd1GHdaB7e%2BftlU3X0kY8chzrjI%2F5Q8Nm6u1gRd9gzW0jzMI0l%2F%2FxBr52tkLPR3arJzJYQql%2FXz8cZ09d8%2B6I%2BuNGHUGrCc6FdmDXKUIhY0ttn4GiRhy4lbYKSFws8ySJZCVZwHGs0ZL2Vp3SLoSUnfox61Af5MK7f5wnFUEKJk7yBv%2B3BRQpphVYeQlGdrBpw708jVz%2B26VjOqSWtC0n33URkfNB2kOBQ9s3ewjkltjoJYnSuUfziA7B6uKRPBgF0vSd%2B0VczmDXNwPvV2NY52wWLL3uB84Bksj7iN%2Fb4Gcv8WkefULZFY%2BDPma%2FnHjSr722oflgl82bfZwFwh1TzcOOF0vB0ZuPR4BQpqclcFXVaRK33UH1sY8OeCRsQUFrXyFZeGuzJZZlT8yAxtqRHLb7PwWTr3RouI4O5ws7CihoVdAvIwyOqa5jv6eE%2BYRB2bG3NoCYLxMq3y%2B%2FMP335cQGOqUBsh9AxAbm4w5YoddqDotuBO4LiX43xR%2F1nDRA7%2BKF7pqenU%2Fk2S55eWIIw%2Fz2Pg31qj18ewbROhkTuumDkPeSPNmrex5VoFBGjyi%2B0P67TIYZvgj12Wx46XzQmN4W4KzYsdRsMEcBpKbyayavpeCNowRFeabc0rCfRErTBhNSupWrWC%2FsxWIOT%2FK4J0y0JyOYtcq%2BRasC15DSIqGFdauavYnogCOP&X-Amz-Signature=0ac4a0ffb6e778298ee0c5b795da60baa07ee8bcfa2429d82837c58934fd1d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIBLVCH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMHu8c7rPzTrGxDNUSszmhdq%2Bj1dvT9y9ZJJWLDApxAiEAmwkTAVTQcJVZrhxTYBpkF7R%2BnVMRPaMe9Kx7DLbv6d0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuqbW0%2ByzYoo%2FWkCrcA4H7DFWgGR3SuDWlKtt9SENiym2flxnIeB6TJi8HFfbevqjYBYRB1pNq0uIwF25ot%2B3Lp9uHi6lz4690JpIX1QmxPrwfci04onK%2BwoPM6HI0V1ekR6fUo3qBE4Xh2Z57yQlYwOHgc%2BksDNfZOTqPCpZTnGzeagq0TQ8xGbXttqDPd1GHdaB7e%2BftlU3X0kY8chzrjI%2F5Q8Nm6u1gRd9gzW0jzMI0l%2F%2FxBr52tkLPR3arJzJYQql%2FXz8cZ09d8%2B6I%2BuNGHUGrCc6FdmDXKUIhY0ttn4GiRhy4lbYKSFws8ySJZCVZwHGs0ZL2Vp3SLoSUnfox61Af5MK7f5wnFUEKJk7yBv%2B3BRQpphVYeQlGdrBpw708jVz%2B26VjOqSWtC0n33URkfNB2kOBQ9s3ewjkltjoJYnSuUfziA7B6uKRPBgF0vSd%2B0VczmDXNwPvV2NY52wWLL3uB84Bksj7iN%2Fb4Gcv8WkefULZFY%2BDPma%2FnHjSr722oflgl82bfZwFwh1TzcOOF0vB0ZuPR4BQpqclcFXVaRK33UH1sY8OeCRsQUFrXyFZeGuzJZZlT8yAxtqRHLb7PwWTr3RouI4O5ws7CihoVdAvIwyOqa5jv6eE%2BYRB2bG3NoCYLxMq3y%2B%2FMP335cQGOqUBsh9AxAbm4w5YoddqDotuBO4LiX43xR%2F1nDRA7%2BKF7pqenU%2Fk2S55eWIIw%2Fz2Pg31qj18ewbROhkTuumDkPeSPNmrex5VoFBGjyi%2B0P67TIYZvgj12Wx46XzQmN4W4KzYsdRsMEcBpKbyayavpeCNowRFeabc0rCfRErTBhNSupWrWC%2FsxWIOT%2FK4J0y0JyOYtcq%2BRasC15DSIqGFdauavYnogCOP&X-Amz-Signature=ec33d7bb6eb60497cb2887a9aecd11e349c075171028ed53827716e850aaa268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIBLVCH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMHu8c7rPzTrGxDNUSszmhdq%2Bj1dvT9y9ZJJWLDApxAiEAmwkTAVTQcJVZrhxTYBpkF7R%2BnVMRPaMe9Kx7DLbv6d0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuqbW0%2ByzYoo%2FWkCrcA4H7DFWgGR3SuDWlKtt9SENiym2flxnIeB6TJi8HFfbevqjYBYRB1pNq0uIwF25ot%2B3Lp9uHi6lz4690JpIX1QmxPrwfci04onK%2BwoPM6HI0V1ekR6fUo3qBE4Xh2Z57yQlYwOHgc%2BksDNfZOTqPCpZTnGzeagq0TQ8xGbXttqDPd1GHdaB7e%2BftlU3X0kY8chzrjI%2F5Q8Nm6u1gRd9gzW0jzMI0l%2F%2FxBr52tkLPR3arJzJYQql%2FXz8cZ09d8%2B6I%2BuNGHUGrCc6FdmDXKUIhY0ttn4GiRhy4lbYKSFws8ySJZCVZwHGs0ZL2Vp3SLoSUnfox61Af5MK7f5wnFUEKJk7yBv%2B3BRQpphVYeQlGdrBpw708jVz%2B26VjOqSWtC0n33URkfNB2kOBQ9s3ewjkltjoJYnSuUfziA7B6uKRPBgF0vSd%2B0VczmDXNwPvV2NY52wWLL3uB84Bksj7iN%2Fb4Gcv8WkefULZFY%2BDPma%2FnHjSr722oflgl82bfZwFwh1TzcOOF0vB0ZuPR4BQpqclcFXVaRK33UH1sY8OeCRsQUFrXyFZeGuzJZZlT8yAxtqRHLb7PwWTr3RouI4O5ws7CihoVdAvIwyOqa5jv6eE%2BYRB2bG3NoCYLxMq3y%2B%2FMP335cQGOqUBsh9AxAbm4w5YoddqDotuBO4LiX43xR%2F1nDRA7%2BKF7pqenU%2Fk2S55eWIIw%2Fz2Pg31qj18ewbROhkTuumDkPeSPNmrex5VoFBGjyi%2B0P67TIYZvgj12Wx46XzQmN4W4KzYsdRsMEcBpKbyayavpeCNowRFeabc0rCfRErTBhNSupWrWC%2FsxWIOT%2FK4J0y0JyOYtcq%2BRasC15DSIqGFdauavYnogCOP&X-Amz-Signature=cb8045811c5e578875cd9f3c864816faa2bff75547f6a355a49595b0387b0de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIBLVCH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMHu8c7rPzTrGxDNUSszmhdq%2Bj1dvT9y9ZJJWLDApxAiEAmwkTAVTQcJVZrhxTYBpkF7R%2BnVMRPaMe9Kx7DLbv6d0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuqbW0%2ByzYoo%2FWkCrcA4H7DFWgGR3SuDWlKtt9SENiym2flxnIeB6TJi8HFfbevqjYBYRB1pNq0uIwF25ot%2B3Lp9uHi6lz4690JpIX1QmxPrwfci04onK%2BwoPM6HI0V1ekR6fUo3qBE4Xh2Z57yQlYwOHgc%2BksDNfZOTqPCpZTnGzeagq0TQ8xGbXttqDPd1GHdaB7e%2BftlU3X0kY8chzrjI%2F5Q8Nm6u1gRd9gzW0jzMI0l%2F%2FxBr52tkLPR3arJzJYQql%2FXz8cZ09d8%2B6I%2BuNGHUGrCc6FdmDXKUIhY0ttn4GiRhy4lbYKSFws8ySJZCVZwHGs0ZL2Vp3SLoSUnfox61Af5MK7f5wnFUEKJk7yBv%2B3BRQpphVYeQlGdrBpw708jVz%2B26VjOqSWtC0n33URkfNB2kOBQ9s3ewjkltjoJYnSuUfziA7B6uKRPBgF0vSd%2B0VczmDXNwPvV2NY52wWLL3uB84Bksj7iN%2Fb4Gcv8WkefULZFY%2BDPma%2FnHjSr722oflgl82bfZwFwh1TzcOOF0vB0ZuPR4BQpqclcFXVaRK33UH1sY8OeCRsQUFrXyFZeGuzJZZlT8yAxtqRHLb7PwWTr3RouI4O5ws7CihoVdAvIwyOqa5jv6eE%2BYRB2bG3NoCYLxMq3y%2B%2FMP335cQGOqUBsh9AxAbm4w5YoddqDotuBO4LiX43xR%2F1nDRA7%2BKF7pqenU%2Fk2S55eWIIw%2Fz2Pg31qj18ewbROhkTuumDkPeSPNmrex5VoFBGjyi%2B0P67TIYZvgj12Wx46XzQmN4W4KzYsdRsMEcBpKbyayavpeCNowRFeabc0rCfRErTBhNSupWrWC%2FsxWIOT%2FK4J0y0JyOYtcq%2BRasC15DSIqGFdauavYnogCOP&X-Amz-Signature=439228c86987468b1ad0e5d5fe778bed93f1b83159f2d011788689f635715032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIBLVCH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMHu8c7rPzTrGxDNUSszmhdq%2Bj1dvT9y9ZJJWLDApxAiEAmwkTAVTQcJVZrhxTYBpkF7R%2BnVMRPaMe9Kx7DLbv6d0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuqbW0%2ByzYoo%2FWkCrcA4H7DFWgGR3SuDWlKtt9SENiym2flxnIeB6TJi8HFfbevqjYBYRB1pNq0uIwF25ot%2B3Lp9uHi6lz4690JpIX1QmxPrwfci04onK%2BwoPM6HI0V1ekR6fUo3qBE4Xh2Z57yQlYwOHgc%2BksDNfZOTqPCpZTnGzeagq0TQ8xGbXttqDPd1GHdaB7e%2BftlU3X0kY8chzrjI%2F5Q8Nm6u1gRd9gzW0jzMI0l%2F%2FxBr52tkLPR3arJzJYQql%2FXz8cZ09d8%2B6I%2BuNGHUGrCc6FdmDXKUIhY0ttn4GiRhy4lbYKSFws8ySJZCVZwHGs0ZL2Vp3SLoSUnfox61Af5MK7f5wnFUEKJk7yBv%2B3BRQpphVYeQlGdrBpw708jVz%2B26VjOqSWtC0n33URkfNB2kOBQ9s3ewjkltjoJYnSuUfziA7B6uKRPBgF0vSd%2B0VczmDXNwPvV2NY52wWLL3uB84Bksj7iN%2Fb4Gcv8WkefULZFY%2BDPma%2FnHjSr722oflgl82bfZwFwh1TzcOOF0vB0ZuPR4BQpqclcFXVaRK33UH1sY8OeCRsQUFrXyFZeGuzJZZlT8yAxtqRHLb7PwWTr3RouI4O5ws7CihoVdAvIwyOqa5jv6eE%2BYRB2bG3NoCYLxMq3y%2B%2FMP335cQGOqUBsh9AxAbm4w5YoddqDotuBO4LiX43xR%2F1nDRA7%2BKF7pqenU%2Fk2S55eWIIw%2Fz2Pg31qj18ewbROhkTuumDkPeSPNmrex5VoFBGjyi%2B0P67TIYZvgj12Wx46XzQmN4W4KzYsdRsMEcBpKbyayavpeCNowRFeabc0rCfRErTBhNSupWrWC%2FsxWIOT%2FK4J0y0JyOYtcq%2BRasC15DSIqGFdauavYnogCOP&X-Amz-Signature=ee827e641781f6fa5f7b25a88d4c8abfba40b965b80f257439dac2e2d4808e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIBLVCH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMHu8c7rPzTrGxDNUSszmhdq%2Bj1dvT9y9ZJJWLDApxAiEAmwkTAVTQcJVZrhxTYBpkF7R%2BnVMRPaMe9Kx7DLbv6d0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuqbW0%2ByzYoo%2FWkCrcA4H7DFWgGR3SuDWlKtt9SENiym2flxnIeB6TJi8HFfbevqjYBYRB1pNq0uIwF25ot%2B3Lp9uHi6lz4690JpIX1QmxPrwfci04onK%2BwoPM6HI0V1ekR6fUo3qBE4Xh2Z57yQlYwOHgc%2BksDNfZOTqPCpZTnGzeagq0TQ8xGbXttqDPd1GHdaB7e%2BftlU3X0kY8chzrjI%2F5Q8Nm6u1gRd9gzW0jzMI0l%2F%2FxBr52tkLPR3arJzJYQql%2FXz8cZ09d8%2B6I%2BuNGHUGrCc6FdmDXKUIhY0ttn4GiRhy4lbYKSFws8ySJZCVZwHGs0ZL2Vp3SLoSUnfox61Af5MK7f5wnFUEKJk7yBv%2B3BRQpphVYeQlGdrBpw708jVz%2B26VjOqSWtC0n33URkfNB2kOBQ9s3ewjkltjoJYnSuUfziA7B6uKRPBgF0vSd%2B0VczmDXNwPvV2NY52wWLL3uB84Bksj7iN%2Fb4Gcv8WkefULZFY%2BDPma%2FnHjSr722oflgl82bfZwFwh1TzcOOF0vB0ZuPR4BQpqclcFXVaRK33UH1sY8OeCRsQUFrXyFZeGuzJZZlT8yAxtqRHLb7PwWTr3RouI4O5ws7CihoVdAvIwyOqa5jv6eE%2BYRB2bG3NoCYLxMq3y%2B%2FMP335cQGOqUBsh9AxAbm4w5YoddqDotuBO4LiX43xR%2F1nDRA7%2BKF7pqenU%2Fk2S55eWIIw%2Fz2Pg31qj18ewbROhkTuumDkPeSPNmrex5VoFBGjyi%2B0P67TIYZvgj12Wx46XzQmN4W4KzYsdRsMEcBpKbyayavpeCNowRFeabc0rCfRErTBhNSupWrWC%2FsxWIOT%2FK4J0y0JyOYtcq%2BRasC15DSIqGFdauavYnogCOP&X-Amz-Signature=28161de71fd39f2454f0f14d1939d9415c006a4b9d7cdfea8e5957d9378d64df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIBLVCH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMHu8c7rPzTrGxDNUSszmhdq%2Bj1dvT9y9ZJJWLDApxAiEAmwkTAVTQcJVZrhxTYBpkF7R%2BnVMRPaMe9Kx7DLbv6d0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuqbW0%2ByzYoo%2FWkCrcA4H7DFWgGR3SuDWlKtt9SENiym2flxnIeB6TJi8HFfbevqjYBYRB1pNq0uIwF25ot%2B3Lp9uHi6lz4690JpIX1QmxPrwfci04onK%2BwoPM6HI0V1ekR6fUo3qBE4Xh2Z57yQlYwOHgc%2BksDNfZOTqPCpZTnGzeagq0TQ8xGbXttqDPd1GHdaB7e%2BftlU3X0kY8chzrjI%2F5Q8Nm6u1gRd9gzW0jzMI0l%2F%2FxBr52tkLPR3arJzJYQql%2FXz8cZ09d8%2B6I%2BuNGHUGrCc6FdmDXKUIhY0ttn4GiRhy4lbYKSFws8ySJZCVZwHGs0ZL2Vp3SLoSUnfox61Af5MK7f5wnFUEKJk7yBv%2B3BRQpphVYeQlGdrBpw708jVz%2B26VjOqSWtC0n33URkfNB2kOBQ9s3ewjkltjoJYnSuUfziA7B6uKRPBgF0vSd%2B0VczmDXNwPvV2NY52wWLL3uB84Bksj7iN%2Fb4Gcv8WkefULZFY%2BDPma%2FnHjSr722oflgl82bfZwFwh1TzcOOF0vB0ZuPR4BQpqclcFXVaRK33UH1sY8OeCRsQUFrXyFZeGuzJZZlT8yAxtqRHLb7PwWTr3RouI4O5ws7CihoVdAvIwyOqa5jv6eE%2BYRB2bG3NoCYLxMq3y%2B%2FMP335cQGOqUBsh9AxAbm4w5YoddqDotuBO4LiX43xR%2F1nDRA7%2BKF7pqenU%2Fk2S55eWIIw%2Fz2Pg31qj18ewbROhkTuumDkPeSPNmrex5VoFBGjyi%2B0P67TIYZvgj12Wx46XzQmN4W4KzYsdRsMEcBpKbyayavpeCNowRFeabc0rCfRErTBhNSupWrWC%2FsxWIOT%2FK4J0y0JyOYtcq%2BRasC15DSIqGFdauavYnogCOP&X-Amz-Signature=11b4e3027b3a458520d53fd0707e7589dfcf236142eabd2b5a8dd388ba99d9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIBLVCH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMHu8c7rPzTrGxDNUSszmhdq%2Bj1dvT9y9ZJJWLDApxAiEAmwkTAVTQcJVZrhxTYBpkF7R%2BnVMRPaMe9Kx7DLbv6d0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuqbW0%2ByzYoo%2FWkCrcA4H7DFWgGR3SuDWlKtt9SENiym2flxnIeB6TJi8HFfbevqjYBYRB1pNq0uIwF25ot%2B3Lp9uHi6lz4690JpIX1QmxPrwfci04onK%2BwoPM6HI0V1ekR6fUo3qBE4Xh2Z57yQlYwOHgc%2BksDNfZOTqPCpZTnGzeagq0TQ8xGbXttqDPd1GHdaB7e%2BftlU3X0kY8chzrjI%2F5Q8Nm6u1gRd9gzW0jzMI0l%2F%2FxBr52tkLPR3arJzJYQql%2FXz8cZ09d8%2B6I%2BuNGHUGrCc6FdmDXKUIhY0ttn4GiRhy4lbYKSFws8ySJZCVZwHGs0ZL2Vp3SLoSUnfox61Af5MK7f5wnFUEKJk7yBv%2B3BRQpphVYeQlGdrBpw708jVz%2B26VjOqSWtC0n33URkfNB2kOBQ9s3ewjkltjoJYnSuUfziA7B6uKRPBgF0vSd%2B0VczmDXNwPvV2NY52wWLL3uB84Bksj7iN%2Fb4Gcv8WkefULZFY%2BDPma%2FnHjSr722oflgl82bfZwFwh1TzcOOF0vB0ZuPR4BQpqclcFXVaRK33UH1sY8OeCRsQUFrXyFZeGuzJZZlT8yAxtqRHLb7PwWTr3RouI4O5ws7CihoVdAvIwyOqa5jv6eE%2BYRB2bG3NoCYLxMq3y%2B%2FMP335cQGOqUBsh9AxAbm4w5YoddqDotuBO4LiX43xR%2F1nDRA7%2BKF7pqenU%2Fk2S55eWIIw%2Fz2Pg31qj18ewbROhkTuumDkPeSPNmrex5VoFBGjyi%2B0P67TIYZvgj12Wx46XzQmN4W4KzYsdRsMEcBpKbyayavpeCNowRFeabc0rCfRErTBhNSupWrWC%2FsxWIOT%2FK4J0y0JyOYtcq%2BRasC15DSIqGFdauavYnogCOP&X-Amz-Signature=93994fb10a24decee4fdf3b6424f517cd96b11db13c83c37bf3e0f17e47cabfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIBLVCH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMHu8c7rPzTrGxDNUSszmhdq%2Bj1dvT9y9ZJJWLDApxAiEAmwkTAVTQcJVZrhxTYBpkF7R%2BnVMRPaMe9Kx7DLbv6d0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuqbW0%2ByzYoo%2FWkCrcA4H7DFWgGR3SuDWlKtt9SENiym2flxnIeB6TJi8HFfbevqjYBYRB1pNq0uIwF25ot%2B3Lp9uHi6lz4690JpIX1QmxPrwfci04onK%2BwoPM6HI0V1ekR6fUo3qBE4Xh2Z57yQlYwOHgc%2BksDNfZOTqPCpZTnGzeagq0TQ8xGbXttqDPd1GHdaB7e%2BftlU3X0kY8chzrjI%2F5Q8Nm6u1gRd9gzW0jzMI0l%2F%2FxBr52tkLPR3arJzJYQql%2FXz8cZ09d8%2B6I%2BuNGHUGrCc6FdmDXKUIhY0ttn4GiRhy4lbYKSFws8ySJZCVZwHGs0ZL2Vp3SLoSUnfox61Af5MK7f5wnFUEKJk7yBv%2B3BRQpphVYeQlGdrBpw708jVz%2B26VjOqSWtC0n33URkfNB2kOBQ9s3ewjkltjoJYnSuUfziA7B6uKRPBgF0vSd%2B0VczmDXNwPvV2NY52wWLL3uB84Bksj7iN%2Fb4Gcv8WkefULZFY%2BDPma%2FnHjSr722oflgl82bfZwFwh1TzcOOF0vB0ZuPR4BQpqclcFXVaRK33UH1sY8OeCRsQUFrXyFZeGuzJZZlT8yAxtqRHLb7PwWTr3RouI4O5ws7CihoVdAvIwyOqa5jv6eE%2BYRB2bG3NoCYLxMq3y%2B%2FMP335cQGOqUBsh9AxAbm4w5YoddqDotuBO4LiX43xR%2F1nDRA7%2BKF7pqenU%2Fk2S55eWIIw%2Fz2Pg31qj18ewbROhkTuumDkPeSPNmrex5VoFBGjyi%2B0P67TIYZvgj12Wx46XzQmN4W4KzYsdRsMEcBpKbyayavpeCNowRFeabc0rCfRErTBhNSupWrWC%2FsxWIOT%2FK4J0y0JyOYtcq%2BRasC15DSIqGFdauavYnogCOP&X-Amz-Signature=7f30fa99d553e11cb649f19cdabe495052cf09305ddd2d3b6876447869c5a1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
