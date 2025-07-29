---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6XRN3N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC3s4gciUT07OnYBOrmyxe2XCjhYNBx4BkG8qC%2BaeRwQIhAJQcjS8XRbDRH0lhVBetMofB2mctz%2BzLQPRrRSa2hCcLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXL7bvc49Ztte4gXYq3AOxS8bIReFBR8Am25QOId9KaTN6sl9o3jV2mr8hA%2F638C5R1uJs93HjmLBFF4hKZ%2BDVOJsplwmZC4Rl7X%2FtApBux0%2FfksRp4bf6sLaUBj2pEKJDnyS0buQPNKEG3QikHgvz2wwTz%2FN2pQaHNWptyzM%2Bia4SBCPyX3tqeMT%2FQKE087MIXMeN4SuDsXysP7Shtf%2BqRvhlH4QtsUkOsEtg23J8jyjb87dSaNMGxXkdK%2BU7As%2BDGHtbH048olIBQZqbDBSf665xfxlphX9k8w8dFy4WmvA5BnpZ%2BzdZvzpdmh71ad4rQzypnrd6Yg7ERJpYBicN3KieRM%2FSh6ONQ81FzumB%2BWhPHar%2BYNDOE0siNSDT9rTcmmGDlGME1AiIgWwaSqNA4fQ4Zs%2FAdlz9YlTCtT7PhXLhho6mX5sMmjeOnvCqF%2FIWipAAPiJZsKWGk6AEaqmKcCdJ%2BAymkzg5UTnUv8CCRwJsmLB%2Fh9wejD%2BR20fBhz%2BmD3HhoAjzk7qUmteXjBXZwJMz1rzxqflTv8i8QCW1gfw0b44A9PYfgeeXU7HBy9%2Fa9cMDsbFUswTDNoETFUiCBSGdRTByLAT5d3QMaI89G%2FbjthvBTtow%2BnKC4ZZ%2BBrKa5mjGVqa9LYVGuzC%2B56LEBjqkARZJeg7KUSJRnfsFgdaaLt50qBM3Dokj7NdWQqol61d%2BnGOntDRh5Yg%2BE%2F54%2FuZVRWF3MHDiGohRm4QvAyZHvLOBGT49yO1JpEgfVquCw30iRQSpK2EzmuFh98MDJ5d6YAHhEjRRAXLGJsLkHKBjMNzSU97XpzvX%2FYbQ3furzQT9f0MY9dlCr%2FXIrJ4q%2FlfPHMno0bBPdmBqocONpoLC9KkPr2eg&X-Amz-Signature=39384557ec5f077678e78d0fa7484694a4e6cfcbaa201e22ba23b93eaa40c324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6XRN3N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC3s4gciUT07OnYBOrmyxe2XCjhYNBx4BkG8qC%2BaeRwQIhAJQcjS8XRbDRH0lhVBetMofB2mctz%2BzLQPRrRSa2hCcLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXL7bvc49Ztte4gXYq3AOxS8bIReFBR8Am25QOId9KaTN6sl9o3jV2mr8hA%2F638C5R1uJs93HjmLBFF4hKZ%2BDVOJsplwmZC4Rl7X%2FtApBux0%2FfksRp4bf6sLaUBj2pEKJDnyS0buQPNKEG3QikHgvz2wwTz%2FN2pQaHNWptyzM%2Bia4SBCPyX3tqeMT%2FQKE087MIXMeN4SuDsXysP7Shtf%2BqRvhlH4QtsUkOsEtg23J8jyjb87dSaNMGxXkdK%2BU7As%2BDGHtbH048olIBQZqbDBSf665xfxlphX9k8w8dFy4WmvA5BnpZ%2BzdZvzpdmh71ad4rQzypnrd6Yg7ERJpYBicN3KieRM%2FSh6ONQ81FzumB%2BWhPHar%2BYNDOE0siNSDT9rTcmmGDlGME1AiIgWwaSqNA4fQ4Zs%2FAdlz9YlTCtT7PhXLhho6mX5sMmjeOnvCqF%2FIWipAAPiJZsKWGk6AEaqmKcCdJ%2BAymkzg5UTnUv8CCRwJsmLB%2Fh9wejD%2BR20fBhz%2BmD3HhoAjzk7qUmteXjBXZwJMz1rzxqflTv8i8QCW1gfw0b44A9PYfgeeXU7HBy9%2Fa9cMDsbFUswTDNoETFUiCBSGdRTByLAT5d3QMaI89G%2FbjthvBTtow%2BnKC4ZZ%2BBrKa5mjGVqa9LYVGuzC%2B56LEBjqkARZJeg7KUSJRnfsFgdaaLt50qBM3Dokj7NdWQqol61d%2BnGOntDRh5Yg%2BE%2F54%2FuZVRWF3MHDiGohRm4QvAyZHvLOBGT49yO1JpEgfVquCw30iRQSpK2EzmuFh98MDJ5d6YAHhEjRRAXLGJsLkHKBjMNzSU97XpzvX%2FYbQ3furzQT9f0MY9dlCr%2FXIrJ4q%2FlfPHMno0bBPdmBqocONpoLC9KkPr2eg&X-Amz-Signature=be0390ceec931020f33f63448ff6a465fb0f387bcfe75b1b4abb07aa9c85e7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6XRN3N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC3s4gciUT07OnYBOrmyxe2XCjhYNBx4BkG8qC%2BaeRwQIhAJQcjS8XRbDRH0lhVBetMofB2mctz%2BzLQPRrRSa2hCcLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXL7bvc49Ztte4gXYq3AOxS8bIReFBR8Am25QOId9KaTN6sl9o3jV2mr8hA%2F638C5R1uJs93HjmLBFF4hKZ%2BDVOJsplwmZC4Rl7X%2FtApBux0%2FfksRp4bf6sLaUBj2pEKJDnyS0buQPNKEG3QikHgvz2wwTz%2FN2pQaHNWptyzM%2Bia4SBCPyX3tqeMT%2FQKE087MIXMeN4SuDsXysP7Shtf%2BqRvhlH4QtsUkOsEtg23J8jyjb87dSaNMGxXkdK%2BU7As%2BDGHtbH048olIBQZqbDBSf665xfxlphX9k8w8dFy4WmvA5BnpZ%2BzdZvzpdmh71ad4rQzypnrd6Yg7ERJpYBicN3KieRM%2FSh6ONQ81FzumB%2BWhPHar%2BYNDOE0siNSDT9rTcmmGDlGME1AiIgWwaSqNA4fQ4Zs%2FAdlz9YlTCtT7PhXLhho6mX5sMmjeOnvCqF%2FIWipAAPiJZsKWGk6AEaqmKcCdJ%2BAymkzg5UTnUv8CCRwJsmLB%2Fh9wejD%2BR20fBhz%2BmD3HhoAjzk7qUmteXjBXZwJMz1rzxqflTv8i8QCW1gfw0b44A9PYfgeeXU7HBy9%2Fa9cMDsbFUswTDNoETFUiCBSGdRTByLAT5d3QMaI89G%2FbjthvBTtow%2BnKC4ZZ%2BBrKa5mjGVqa9LYVGuzC%2B56LEBjqkARZJeg7KUSJRnfsFgdaaLt50qBM3Dokj7NdWQqol61d%2BnGOntDRh5Yg%2BE%2F54%2FuZVRWF3MHDiGohRm4QvAyZHvLOBGT49yO1JpEgfVquCw30iRQSpK2EzmuFh98MDJ5d6YAHhEjRRAXLGJsLkHKBjMNzSU97XpzvX%2FYbQ3furzQT9f0MY9dlCr%2FXIrJ4q%2FlfPHMno0bBPdmBqocONpoLC9KkPr2eg&X-Amz-Signature=abea6ec241114f22f98353d6d9718e50e3785867c1a882b035bfb46e1d5e6e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6XRN3N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC3s4gciUT07OnYBOrmyxe2XCjhYNBx4BkG8qC%2BaeRwQIhAJQcjS8XRbDRH0lhVBetMofB2mctz%2BzLQPRrRSa2hCcLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXL7bvc49Ztte4gXYq3AOxS8bIReFBR8Am25QOId9KaTN6sl9o3jV2mr8hA%2F638C5R1uJs93HjmLBFF4hKZ%2BDVOJsplwmZC4Rl7X%2FtApBux0%2FfksRp4bf6sLaUBj2pEKJDnyS0buQPNKEG3QikHgvz2wwTz%2FN2pQaHNWptyzM%2Bia4SBCPyX3tqeMT%2FQKE087MIXMeN4SuDsXysP7Shtf%2BqRvhlH4QtsUkOsEtg23J8jyjb87dSaNMGxXkdK%2BU7As%2BDGHtbH048olIBQZqbDBSf665xfxlphX9k8w8dFy4WmvA5BnpZ%2BzdZvzpdmh71ad4rQzypnrd6Yg7ERJpYBicN3KieRM%2FSh6ONQ81FzumB%2BWhPHar%2BYNDOE0siNSDT9rTcmmGDlGME1AiIgWwaSqNA4fQ4Zs%2FAdlz9YlTCtT7PhXLhho6mX5sMmjeOnvCqF%2FIWipAAPiJZsKWGk6AEaqmKcCdJ%2BAymkzg5UTnUv8CCRwJsmLB%2Fh9wejD%2BR20fBhz%2BmD3HhoAjzk7qUmteXjBXZwJMz1rzxqflTv8i8QCW1gfw0b44A9PYfgeeXU7HBy9%2Fa9cMDsbFUswTDNoETFUiCBSGdRTByLAT5d3QMaI89G%2FbjthvBTtow%2BnKC4ZZ%2BBrKa5mjGVqa9LYVGuzC%2B56LEBjqkARZJeg7KUSJRnfsFgdaaLt50qBM3Dokj7NdWQqol61d%2BnGOntDRh5Yg%2BE%2F54%2FuZVRWF3MHDiGohRm4QvAyZHvLOBGT49yO1JpEgfVquCw30iRQSpK2EzmuFh98MDJ5d6YAHhEjRRAXLGJsLkHKBjMNzSU97XpzvX%2FYbQ3furzQT9f0MY9dlCr%2FXIrJ4q%2FlfPHMno0bBPdmBqocONpoLC9KkPr2eg&X-Amz-Signature=44729f64c039a739584cc199275b1476f5e2e452fa2a2514c2517d365b122f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6XRN3N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC3s4gciUT07OnYBOrmyxe2XCjhYNBx4BkG8qC%2BaeRwQIhAJQcjS8XRbDRH0lhVBetMofB2mctz%2BzLQPRrRSa2hCcLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXL7bvc49Ztte4gXYq3AOxS8bIReFBR8Am25QOId9KaTN6sl9o3jV2mr8hA%2F638C5R1uJs93HjmLBFF4hKZ%2BDVOJsplwmZC4Rl7X%2FtApBux0%2FfksRp4bf6sLaUBj2pEKJDnyS0buQPNKEG3QikHgvz2wwTz%2FN2pQaHNWptyzM%2Bia4SBCPyX3tqeMT%2FQKE087MIXMeN4SuDsXysP7Shtf%2BqRvhlH4QtsUkOsEtg23J8jyjb87dSaNMGxXkdK%2BU7As%2BDGHtbH048olIBQZqbDBSf665xfxlphX9k8w8dFy4WmvA5BnpZ%2BzdZvzpdmh71ad4rQzypnrd6Yg7ERJpYBicN3KieRM%2FSh6ONQ81FzumB%2BWhPHar%2BYNDOE0siNSDT9rTcmmGDlGME1AiIgWwaSqNA4fQ4Zs%2FAdlz9YlTCtT7PhXLhho6mX5sMmjeOnvCqF%2FIWipAAPiJZsKWGk6AEaqmKcCdJ%2BAymkzg5UTnUv8CCRwJsmLB%2Fh9wejD%2BR20fBhz%2BmD3HhoAjzk7qUmteXjBXZwJMz1rzxqflTv8i8QCW1gfw0b44A9PYfgeeXU7HBy9%2Fa9cMDsbFUswTDNoETFUiCBSGdRTByLAT5d3QMaI89G%2FbjthvBTtow%2BnKC4ZZ%2BBrKa5mjGVqa9LYVGuzC%2B56LEBjqkARZJeg7KUSJRnfsFgdaaLt50qBM3Dokj7NdWQqol61d%2BnGOntDRh5Yg%2BE%2F54%2FuZVRWF3MHDiGohRm4QvAyZHvLOBGT49yO1JpEgfVquCw30iRQSpK2EzmuFh98MDJ5d6YAHhEjRRAXLGJsLkHKBjMNzSU97XpzvX%2FYbQ3furzQT9f0MY9dlCr%2FXIrJ4q%2FlfPHMno0bBPdmBqocONpoLC9KkPr2eg&X-Amz-Signature=ea00abd4b3b86811891881b11e83f3b5eaf451ccbc63297d917ee818ec072312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6XRN3N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC3s4gciUT07OnYBOrmyxe2XCjhYNBx4BkG8qC%2BaeRwQIhAJQcjS8XRbDRH0lhVBetMofB2mctz%2BzLQPRrRSa2hCcLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXL7bvc49Ztte4gXYq3AOxS8bIReFBR8Am25QOId9KaTN6sl9o3jV2mr8hA%2F638C5R1uJs93HjmLBFF4hKZ%2BDVOJsplwmZC4Rl7X%2FtApBux0%2FfksRp4bf6sLaUBj2pEKJDnyS0buQPNKEG3QikHgvz2wwTz%2FN2pQaHNWptyzM%2Bia4SBCPyX3tqeMT%2FQKE087MIXMeN4SuDsXysP7Shtf%2BqRvhlH4QtsUkOsEtg23J8jyjb87dSaNMGxXkdK%2BU7As%2BDGHtbH048olIBQZqbDBSf665xfxlphX9k8w8dFy4WmvA5BnpZ%2BzdZvzpdmh71ad4rQzypnrd6Yg7ERJpYBicN3KieRM%2FSh6ONQ81FzumB%2BWhPHar%2BYNDOE0siNSDT9rTcmmGDlGME1AiIgWwaSqNA4fQ4Zs%2FAdlz9YlTCtT7PhXLhho6mX5sMmjeOnvCqF%2FIWipAAPiJZsKWGk6AEaqmKcCdJ%2BAymkzg5UTnUv8CCRwJsmLB%2Fh9wejD%2BR20fBhz%2BmD3HhoAjzk7qUmteXjBXZwJMz1rzxqflTv8i8QCW1gfw0b44A9PYfgeeXU7HBy9%2Fa9cMDsbFUswTDNoETFUiCBSGdRTByLAT5d3QMaI89G%2FbjthvBTtow%2BnKC4ZZ%2BBrKa5mjGVqa9LYVGuzC%2B56LEBjqkARZJeg7KUSJRnfsFgdaaLt50qBM3Dokj7NdWQqol61d%2BnGOntDRh5Yg%2BE%2F54%2FuZVRWF3MHDiGohRm4QvAyZHvLOBGT49yO1JpEgfVquCw30iRQSpK2EzmuFh98MDJ5d6YAHhEjRRAXLGJsLkHKBjMNzSU97XpzvX%2FYbQ3furzQT9f0MY9dlCr%2FXIrJ4q%2FlfPHMno0bBPdmBqocONpoLC9KkPr2eg&X-Amz-Signature=587e3008ec49cae239babc85057be57ed885aec7494b621ad7e8decdcd006530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6XRN3N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC3s4gciUT07OnYBOrmyxe2XCjhYNBx4BkG8qC%2BaeRwQIhAJQcjS8XRbDRH0lhVBetMofB2mctz%2BzLQPRrRSa2hCcLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXL7bvc49Ztte4gXYq3AOxS8bIReFBR8Am25QOId9KaTN6sl9o3jV2mr8hA%2F638C5R1uJs93HjmLBFF4hKZ%2BDVOJsplwmZC4Rl7X%2FtApBux0%2FfksRp4bf6sLaUBj2pEKJDnyS0buQPNKEG3QikHgvz2wwTz%2FN2pQaHNWptyzM%2Bia4SBCPyX3tqeMT%2FQKE087MIXMeN4SuDsXysP7Shtf%2BqRvhlH4QtsUkOsEtg23J8jyjb87dSaNMGxXkdK%2BU7As%2BDGHtbH048olIBQZqbDBSf665xfxlphX9k8w8dFy4WmvA5BnpZ%2BzdZvzpdmh71ad4rQzypnrd6Yg7ERJpYBicN3KieRM%2FSh6ONQ81FzumB%2BWhPHar%2BYNDOE0siNSDT9rTcmmGDlGME1AiIgWwaSqNA4fQ4Zs%2FAdlz9YlTCtT7PhXLhho6mX5sMmjeOnvCqF%2FIWipAAPiJZsKWGk6AEaqmKcCdJ%2BAymkzg5UTnUv8CCRwJsmLB%2Fh9wejD%2BR20fBhz%2BmD3HhoAjzk7qUmteXjBXZwJMz1rzxqflTv8i8QCW1gfw0b44A9PYfgeeXU7HBy9%2Fa9cMDsbFUswTDNoETFUiCBSGdRTByLAT5d3QMaI89G%2FbjthvBTtow%2BnKC4ZZ%2BBrKa5mjGVqa9LYVGuzC%2B56LEBjqkARZJeg7KUSJRnfsFgdaaLt50qBM3Dokj7NdWQqol61d%2BnGOntDRh5Yg%2BE%2F54%2FuZVRWF3MHDiGohRm4QvAyZHvLOBGT49yO1JpEgfVquCw30iRQSpK2EzmuFh98MDJ5d6YAHhEjRRAXLGJsLkHKBjMNzSU97XpzvX%2FYbQ3furzQT9f0MY9dlCr%2FXIrJ4q%2FlfPHMno0bBPdmBqocONpoLC9KkPr2eg&X-Amz-Signature=51fa617468443ae0d93df766c37b5867292a9581cfff74883293d571602b6ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6XRN3N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC3s4gciUT07OnYBOrmyxe2XCjhYNBx4BkG8qC%2BaeRwQIhAJQcjS8XRbDRH0lhVBetMofB2mctz%2BzLQPRrRSa2hCcLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXL7bvc49Ztte4gXYq3AOxS8bIReFBR8Am25QOId9KaTN6sl9o3jV2mr8hA%2F638C5R1uJs93HjmLBFF4hKZ%2BDVOJsplwmZC4Rl7X%2FtApBux0%2FfksRp4bf6sLaUBj2pEKJDnyS0buQPNKEG3QikHgvz2wwTz%2FN2pQaHNWptyzM%2Bia4SBCPyX3tqeMT%2FQKE087MIXMeN4SuDsXysP7Shtf%2BqRvhlH4QtsUkOsEtg23J8jyjb87dSaNMGxXkdK%2BU7As%2BDGHtbH048olIBQZqbDBSf665xfxlphX9k8w8dFy4WmvA5BnpZ%2BzdZvzpdmh71ad4rQzypnrd6Yg7ERJpYBicN3KieRM%2FSh6ONQ81FzumB%2BWhPHar%2BYNDOE0siNSDT9rTcmmGDlGME1AiIgWwaSqNA4fQ4Zs%2FAdlz9YlTCtT7PhXLhho6mX5sMmjeOnvCqF%2FIWipAAPiJZsKWGk6AEaqmKcCdJ%2BAymkzg5UTnUv8CCRwJsmLB%2Fh9wejD%2BR20fBhz%2BmD3HhoAjzk7qUmteXjBXZwJMz1rzxqflTv8i8QCW1gfw0b44A9PYfgeeXU7HBy9%2Fa9cMDsbFUswTDNoETFUiCBSGdRTByLAT5d3QMaI89G%2FbjthvBTtow%2BnKC4ZZ%2BBrKa5mjGVqa9LYVGuzC%2B56LEBjqkARZJeg7KUSJRnfsFgdaaLt50qBM3Dokj7NdWQqol61d%2BnGOntDRh5Yg%2BE%2F54%2FuZVRWF3MHDiGohRm4QvAyZHvLOBGT49yO1JpEgfVquCw30iRQSpK2EzmuFh98MDJ5d6YAHhEjRRAXLGJsLkHKBjMNzSU97XpzvX%2FYbQ3furzQT9f0MY9dlCr%2FXIrJ4q%2FlfPHMno0bBPdmBqocONpoLC9KkPr2eg&X-Amz-Signature=7c627ef5a8be9bd244ea21f217871b07fe13e2fe83d4964dfa4b1e46002ee83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6XRN3N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC3s4gciUT07OnYBOrmyxe2XCjhYNBx4BkG8qC%2BaeRwQIhAJQcjS8XRbDRH0lhVBetMofB2mctz%2BzLQPRrRSa2hCcLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXL7bvc49Ztte4gXYq3AOxS8bIReFBR8Am25QOId9KaTN6sl9o3jV2mr8hA%2F638C5R1uJs93HjmLBFF4hKZ%2BDVOJsplwmZC4Rl7X%2FtApBux0%2FfksRp4bf6sLaUBj2pEKJDnyS0buQPNKEG3QikHgvz2wwTz%2FN2pQaHNWptyzM%2Bia4SBCPyX3tqeMT%2FQKE087MIXMeN4SuDsXysP7Shtf%2BqRvhlH4QtsUkOsEtg23J8jyjb87dSaNMGxXkdK%2BU7As%2BDGHtbH048olIBQZqbDBSf665xfxlphX9k8w8dFy4WmvA5BnpZ%2BzdZvzpdmh71ad4rQzypnrd6Yg7ERJpYBicN3KieRM%2FSh6ONQ81FzumB%2BWhPHar%2BYNDOE0siNSDT9rTcmmGDlGME1AiIgWwaSqNA4fQ4Zs%2FAdlz9YlTCtT7PhXLhho6mX5sMmjeOnvCqF%2FIWipAAPiJZsKWGk6AEaqmKcCdJ%2BAymkzg5UTnUv8CCRwJsmLB%2Fh9wejD%2BR20fBhz%2BmD3HhoAjzk7qUmteXjBXZwJMz1rzxqflTv8i8QCW1gfw0b44A9PYfgeeXU7HBy9%2Fa9cMDsbFUswTDNoETFUiCBSGdRTByLAT5d3QMaI89G%2FbjthvBTtow%2BnKC4ZZ%2BBrKa5mjGVqa9LYVGuzC%2B56LEBjqkARZJeg7KUSJRnfsFgdaaLt50qBM3Dokj7NdWQqol61d%2BnGOntDRh5Yg%2BE%2F54%2FuZVRWF3MHDiGohRm4QvAyZHvLOBGT49yO1JpEgfVquCw30iRQSpK2EzmuFh98MDJ5d6YAHhEjRRAXLGJsLkHKBjMNzSU97XpzvX%2FYbQ3furzQT9f0MY9dlCr%2FXIrJ4q%2FlfPHMno0bBPdmBqocONpoLC9KkPr2eg&X-Amz-Signature=c4953a4839b5ff9d24d43663905e5c651e0e4a16218a93e0b5a1f69d75724ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJKENAO7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCh8O5hgJD45m2yC1JCJUg7uyJFvYW%2FiMCNy306T15mNgIgGLTKRNAb8okkTdgEH40anWSXgdOMiH44jhHsLTNXBXkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdKM29cNB0TaH6snircA44EXMZZdaBiMk2j9D%2B52%2FkIYD8o70cx6newrqB7%2FCNWjzwf5Qiui9GCYWs205iX607yxjuYHTBnoXDFw7vHZMWAvLFnNpiXT7awxz9FD58E8W02mW7loHpVP5%2FAcO6lUr2K3Pv%2BAPHJn1fn8HSZ6YKNHClALfCq1U%2F4P1Je9inq1y5vhyZBHX0oWVtS%2BUHbJtT5Oz8khQPwQZT8QDXmUpcG4JpCeYbTSwb16yIB8kX1K5dBgztwfvmiLloCkwKTmO8N7F6qY%2B5REW01XyiYHWnNjG0Yb%2Bj0A%2B%2F5Y9uYEipFzlVFMG%2B8DNMuGC4o10ZSkDK%2FeVIIFj%2FmJGO%2FYcxRL4JLmYQZwMYobLg7gab60HgBK4AcwoIjEpoB5hMf8lm2TeyBKWHe1eUiPd56tRAzfPcGndZwOb1R%2FYB9Q1djfJJbYTslSh4McmqJB76sHtgCR2mhxGCPwXsgOIs3zEs1%2FPFKP1tAl4HHweJXF8NC2tKkJpRovq4TcJsIDB5cWEiUs%2FOW7OBQo4q6XyBE119ucyaHj%2B7vQ0Dm2THV4TTONZzAnbNfoJAezZOV0WuGNnUKl9AMwIwjoEottuxkz8k9vU%2FVYyflXDsmgzhacf%2BB146X5awPbO%2BSAVPhc5NpML3nosQGOqUBKkyiZMYrk3nMfHCD0oaPvXCLfGM1cvE%2B3xZZE5Cmgk9buNyOyv9kintA6y10a%2FFJqOyWT0e%2FdxLVdMbKKLnm1pKM9oGOiwNkjZ2v%2FP5XIKVCRWZCyNwIxh38hxPbiX8leAIjmlcZUb%2FNik3V0l68OVaSmpX%2FAAzGCX6mq6axDtk73VaQHVi%2B6iEl3JJOr13QqM1CA%2B1rW%2BQaL95Gi5JC6fgTpEgS&X-Amz-Signature=9d52737346dd1b895801d5120d1262839621fefb1245c0b8dd82b1e156eeba62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6XRN3N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC3s4gciUT07OnYBOrmyxe2XCjhYNBx4BkG8qC%2BaeRwQIhAJQcjS8XRbDRH0lhVBetMofB2mctz%2BzLQPRrRSa2hCcLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXL7bvc49Ztte4gXYq3AOxS8bIReFBR8Am25QOId9KaTN6sl9o3jV2mr8hA%2F638C5R1uJs93HjmLBFF4hKZ%2BDVOJsplwmZC4Rl7X%2FtApBux0%2FfksRp4bf6sLaUBj2pEKJDnyS0buQPNKEG3QikHgvz2wwTz%2FN2pQaHNWptyzM%2Bia4SBCPyX3tqeMT%2FQKE087MIXMeN4SuDsXysP7Shtf%2BqRvhlH4QtsUkOsEtg23J8jyjb87dSaNMGxXkdK%2BU7As%2BDGHtbH048olIBQZqbDBSf665xfxlphX9k8w8dFy4WmvA5BnpZ%2BzdZvzpdmh71ad4rQzypnrd6Yg7ERJpYBicN3KieRM%2FSh6ONQ81FzumB%2BWhPHar%2BYNDOE0siNSDT9rTcmmGDlGME1AiIgWwaSqNA4fQ4Zs%2FAdlz9YlTCtT7PhXLhho6mX5sMmjeOnvCqF%2FIWipAAPiJZsKWGk6AEaqmKcCdJ%2BAymkzg5UTnUv8CCRwJsmLB%2Fh9wejD%2BR20fBhz%2BmD3HhoAjzk7qUmteXjBXZwJMz1rzxqflTv8i8QCW1gfw0b44A9PYfgeeXU7HBy9%2Fa9cMDsbFUswTDNoETFUiCBSGdRTByLAT5d3QMaI89G%2FbjthvBTtow%2BnKC4ZZ%2BBrKa5mjGVqa9LYVGuzC%2B56LEBjqkARZJeg7KUSJRnfsFgdaaLt50qBM3Dokj7NdWQqol61d%2BnGOntDRh5Yg%2BE%2F54%2FuZVRWF3MHDiGohRm4QvAyZHvLOBGT49yO1JpEgfVquCw30iRQSpK2EzmuFh98MDJ5d6YAHhEjRRAXLGJsLkHKBjMNzSU97XpzvX%2FYbQ3furzQT9f0MY9dlCr%2FXIrJ4q%2FlfPHMno0bBPdmBqocONpoLC9KkPr2eg&X-Amz-Signature=a3baf0dce51c6eca4670600dcdb4a178a128201a970dfb1e97e2d071de68f6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVX3X3E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCUu9TWJtuXMFi1d%2Bs2VYGt%2B%2B9lAUHx9t542xEdJZFTFAIgJM9ljtNvT0UMZeGFrz%2B16T7N76I2GbH%2BvtXOnjpuHlMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET%2BNhEJIgINLCobQCrcA%2FvtzoBKehUNewcXjrHzB28sZobPxwgu4u8f3oQ91jyxMzqqYjYHis0X1vfp5Sb%2FyA%2Fkff2nrEnFdvSmm%2Be45bT4lOAzAPbI%2B41YLW1kX9AlyjeqAiSbNay6NaCd6Uo8NWBOIQtbcWup1%2Brn5X7crEQJPh4F3tUnyZdypu%2BPxgailkv3Njs0GSnLn%2FAM041DJjOQZf6YGAzzOZcFL%2BM7JeajbhepWpvGwzxvq%2FNcqw39YMBVrTN1Rlt%2BhVJLP2OilstwULDHY6UpHVOksAWy2TKNIQo7mKa1jKXLw5wbopcJy1SsGj7rDelpsW1QlruugIrM16iS7nfZJ0uodYxtogMLWGCZ%2FZSr3mgnldeXMH5K77SVaJwWnbAzM2anF4NaI8xT2m3IG%2FIyvhUOOpR8QnK9JcQgQCYS2tNxty2r07EyG5T5Bf9d74h6KDhzbKnOlYTJUYXNTYSJsfRs%2FMNZliMv5awQNgaKl4h4CeayfK%2BVpNSrk6m84VH0W%2FXDgkiFfiJGBGbfTc2JnNBR8TTh0IkQCFqi8%2BA3FGWSGu6bO7Bnbb2DQJzxSDUKQP7DDg1ovJBqCpru%2B0JXr6y%2FfWFoEwVfJ8F%2BlNIbbj2nmBS5etdTbyWaIYc9tV37tWnDMKLnosQGOqUB40r%2F%2Bxxe8gRyJ2gZUD5F9fEdPm4eIHhkt%2FUPJfHmX5OJf5lx2W6ECora4gyxy182XTZMWCE%2BlFq22QALnmFe5UHF0shkiHA4kWpsjJiJqFgoX6hpqnZmL%2BpesrpvUUOVbcgkNJ4IE4UumLUKhNskRAwOEfadx%2BjhCaKOuV46TeDFbdrp8Wgp5Is1qCCQjgUDOYqdRMcWQM3sZYS1bFewO6YHQc0G&X-Amz-Signature=35e8ef9820fdec12176f20c671a8f783ef25c8565e5bd8ab973e25e39b16ac5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVX3X3E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCUu9TWJtuXMFi1d%2Bs2VYGt%2B%2B9lAUHx9t542xEdJZFTFAIgJM9ljtNvT0UMZeGFrz%2B16T7N76I2GbH%2BvtXOnjpuHlMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET%2BNhEJIgINLCobQCrcA%2FvtzoBKehUNewcXjrHzB28sZobPxwgu4u8f3oQ91jyxMzqqYjYHis0X1vfp5Sb%2FyA%2Fkff2nrEnFdvSmm%2Be45bT4lOAzAPbI%2B41YLW1kX9AlyjeqAiSbNay6NaCd6Uo8NWBOIQtbcWup1%2Brn5X7crEQJPh4F3tUnyZdypu%2BPxgailkv3Njs0GSnLn%2FAM041DJjOQZf6YGAzzOZcFL%2BM7JeajbhepWpvGwzxvq%2FNcqw39YMBVrTN1Rlt%2BhVJLP2OilstwULDHY6UpHVOksAWy2TKNIQo7mKa1jKXLw5wbopcJy1SsGj7rDelpsW1QlruugIrM16iS7nfZJ0uodYxtogMLWGCZ%2FZSr3mgnldeXMH5K77SVaJwWnbAzM2anF4NaI8xT2m3IG%2FIyvhUOOpR8QnK9JcQgQCYS2tNxty2r07EyG5T5Bf9d74h6KDhzbKnOlYTJUYXNTYSJsfRs%2FMNZliMv5awQNgaKl4h4CeayfK%2BVpNSrk6m84VH0W%2FXDgkiFfiJGBGbfTc2JnNBR8TTh0IkQCFqi8%2BA3FGWSGu6bO7Bnbb2DQJzxSDUKQP7DDg1ovJBqCpru%2B0JXr6y%2FfWFoEwVfJ8F%2BlNIbbj2nmBS5etdTbyWaIYc9tV37tWnDMKLnosQGOqUB40r%2F%2Bxxe8gRyJ2gZUD5F9fEdPm4eIHhkt%2FUPJfHmX5OJf5lx2W6ECora4gyxy182XTZMWCE%2BlFq22QALnmFe5UHF0shkiHA4kWpsjJiJqFgoX6hpqnZmL%2BpesrpvUUOVbcgkNJ4IE4UumLUKhNskRAwOEfadx%2BjhCaKOuV46TeDFbdrp8Wgp5Is1qCCQjgUDOYqdRMcWQM3sZYS1bFewO6YHQc0G&X-Amz-Signature=bb1bbeab18db3fd0509569c9a2f1729f70c92f33e8157ec02867ca7f3b1413cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVX3X3E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCUu9TWJtuXMFi1d%2Bs2VYGt%2B%2B9lAUHx9t542xEdJZFTFAIgJM9ljtNvT0UMZeGFrz%2B16T7N76I2GbH%2BvtXOnjpuHlMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET%2BNhEJIgINLCobQCrcA%2FvtzoBKehUNewcXjrHzB28sZobPxwgu4u8f3oQ91jyxMzqqYjYHis0X1vfp5Sb%2FyA%2Fkff2nrEnFdvSmm%2Be45bT4lOAzAPbI%2B41YLW1kX9AlyjeqAiSbNay6NaCd6Uo8NWBOIQtbcWup1%2Brn5X7crEQJPh4F3tUnyZdypu%2BPxgailkv3Njs0GSnLn%2FAM041DJjOQZf6YGAzzOZcFL%2BM7JeajbhepWpvGwzxvq%2FNcqw39YMBVrTN1Rlt%2BhVJLP2OilstwULDHY6UpHVOksAWy2TKNIQo7mKa1jKXLw5wbopcJy1SsGj7rDelpsW1QlruugIrM16iS7nfZJ0uodYxtogMLWGCZ%2FZSr3mgnldeXMH5K77SVaJwWnbAzM2anF4NaI8xT2m3IG%2FIyvhUOOpR8QnK9JcQgQCYS2tNxty2r07EyG5T5Bf9d74h6KDhzbKnOlYTJUYXNTYSJsfRs%2FMNZliMv5awQNgaKl4h4CeayfK%2BVpNSrk6m84VH0W%2FXDgkiFfiJGBGbfTc2JnNBR8TTh0IkQCFqi8%2BA3FGWSGu6bO7Bnbb2DQJzxSDUKQP7DDg1ovJBqCpru%2B0JXr6y%2FfWFoEwVfJ8F%2BlNIbbj2nmBS5etdTbyWaIYc9tV37tWnDMKLnosQGOqUB40r%2F%2Bxxe8gRyJ2gZUD5F9fEdPm4eIHhkt%2FUPJfHmX5OJf5lx2W6ECora4gyxy182XTZMWCE%2BlFq22QALnmFe5UHF0shkiHA4kWpsjJiJqFgoX6hpqnZmL%2BpesrpvUUOVbcgkNJ4IE4UumLUKhNskRAwOEfadx%2BjhCaKOuV46TeDFbdrp8Wgp5Is1qCCQjgUDOYqdRMcWQM3sZYS1bFewO6YHQc0G&X-Amz-Signature=3b49a0e587091e5567bfac9dadee4fec5d23bb179fd711e54373369ac3d92337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVX3X3E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCUu9TWJtuXMFi1d%2Bs2VYGt%2B%2B9lAUHx9t542xEdJZFTFAIgJM9ljtNvT0UMZeGFrz%2B16T7N76I2GbH%2BvtXOnjpuHlMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET%2BNhEJIgINLCobQCrcA%2FvtzoBKehUNewcXjrHzB28sZobPxwgu4u8f3oQ91jyxMzqqYjYHis0X1vfp5Sb%2FyA%2Fkff2nrEnFdvSmm%2Be45bT4lOAzAPbI%2B41YLW1kX9AlyjeqAiSbNay6NaCd6Uo8NWBOIQtbcWup1%2Brn5X7crEQJPh4F3tUnyZdypu%2BPxgailkv3Njs0GSnLn%2FAM041DJjOQZf6YGAzzOZcFL%2BM7JeajbhepWpvGwzxvq%2FNcqw39YMBVrTN1Rlt%2BhVJLP2OilstwULDHY6UpHVOksAWy2TKNIQo7mKa1jKXLw5wbopcJy1SsGj7rDelpsW1QlruugIrM16iS7nfZJ0uodYxtogMLWGCZ%2FZSr3mgnldeXMH5K77SVaJwWnbAzM2anF4NaI8xT2m3IG%2FIyvhUOOpR8QnK9JcQgQCYS2tNxty2r07EyG5T5Bf9d74h6KDhzbKnOlYTJUYXNTYSJsfRs%2FMNZliMv5awQNgaKl4h4CeayfK%2BVpNSrk6m84VH0W%2FXDgkiFfiJGBGbfTc2JnNBR8TTh0IkQCFqi8%2BA3FGWSGu6bO7Bnbb2DQJzxSDUKQP7DDg1ovJBqCpru%2B0JXr6y%2FfWFoEwVfJ8F%2BlNIbbj2nmBS5etdTbyWaIYc9tV37tWnDMKLnosQGOqUB40r%2F%2Bxxe8gRyJ2gZUD5F9fEdPm4eIHhkt%2FUPJfHmX5OJf5lx2W6ECora4gyxy182XTZMWCE%2BlFq22QALnmFe5UHF0shkiHA4kWpsjJiJqFgoX6hpqnZmL%2BpesrpvUUOVbcgkNJ4IE4UumLUKhNskRAwOEfadx%2BjhCaKOuV46TeDFbdrp8Wgp5Is1qCCQjgUDOYqdRMcWQM3sZYS1bFewO6YHQc0G&X-Amz-Signature=e968d4b835a1a6918fd9b66f59b2de3cf08285a93681ce66865094c9308003dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVX3X3E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCUu9TWJtuXMFi1d%2Bs2VYGt%2B%2B9lAUHx9t542xEdJZFTFAIgJM9ljtNvT0UMZeGFrz%2B16T7N76I2GbH%2BvtXOnjpuHlMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET%2BNhEJIgINLCobQCrcA%2FvtzoBKehUNewcXjrHzB28sZobPxwgu4u8f3oQ91jyxMzqqYjYHis0X1vfp5Sb%2FyA%2Fkff2nrEnFdvSmm%2Be45bT4lOAzAPbI%2B41YLW1kX9AlyjeqAiSbNay6NaCd6Uo8NWBOIQtbcWup1%2Brn5X7crEQJPh4F3tUnyZdypu%2BPxgailkv3Njs0GSnLn%2FAM041DJjOQZf6YGAzzOZcFL%2BM7JeajbhepWpvGwzxvq%2FNcqw39YMBVrTN1Rlt%2BhVJLP2OilstwULDHY6UpHVOksAWy2TKNIQo7mKa1jKXLw5wbopcJy1SsGj7rDelpsW1QlruugIrM16iS7nfZJ0uodYxtogMLWGCZ%2FZSr3mgnldeXMH5K77SVaJwWnbAzM2anF4NaI8xT2m3IG%2FIyvhUOOpR8QnK9JcQgQCYS2tNxty2r07EyG5T5Bf9d74h6KDhzbKnOlYTJUYXNTYSJsfRs%2FMNZliMv5awQNgaKl4h4CeayfK%2BVpNSrk6m84VH0W%2FXDgkiFfiJGBGbfTc2JnNBR8TTh0IkQCFqi8%2BA3FGWSGu6bO7Bnbb2DQJzxSDUKQP7DDg1ovJBqCpru%2B0JXr6y%2FfWFoEwVfJ8F%2BlNIbbj2nmBS5etdTbyWaIYc9tV37tWnDMKLnosQGOqUB40r%2F%2Bxxe8gRyJ2gZUD5F9fEdPm4eIHhkt%2FUPJfHmX5OJf5lx2W6ECora4gyxy182XTZMWCE%2BlFq22QALnmFe5UHF0shkiHA4kWpsjJiJqFgoX6hpqnZmL%2BpesrpvUUOVbcgkNJ4IE4UumLUKhNskRAwOEfadx%2BjhCaKOuV46TeDFbdrp8Wgp5Is1qCCQjgUDOYqdRMcWQM3sZYS1bFewO6YHQc0G&X-Amz-Signature=61ef79a4e8bffbbb4414d774ffeba6ad0d3d1e6c938d3983f358b9d602fa2afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVX3X3E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCUu9TWJtuXMFi1d%2Bs2VYGt%2B%2B9lAUHx9t542xEdJZFTFAIgJM9ljtNvT0UMZeGFrz%2B16T7N76I2GbH%2BvtXOnjpuHlMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET%2BNhEJIgINLCobQCrcA%2FvtzoBKehUNewcXjrHzB28sZobPxwgu4u8f3oQ91jyxMzqqYjYHis0X1vfp5Sb%2FyA%2Fkff2nrEnFdvSmm%2Be45bT4lOAzAPbI%2B41YLW1kX9AlyjeqAiSbNay6NaCd6Uo8NWBOIQtbcWup1%2Brn5X7crEQJPh4F3tUnyZdypu%2BPxgailkv3Njs0GSnLn%2FAM041DJjOQZf6YGAzzOZcFL%2BM7JeajbhepWpvGwzxvq%2FNcqw39YMBVrTN1Rlt%2BhVJLP2OilstwULDHY6UpHVOksAWy2TKNIQo7mKa1jKXLw5wbopcJy1SsGj7rDelpsW1QlruugIrM16iS7nfZJ0uodYxtogMLWGCZ%2FZSr3mgnldeXMH5K77SVaJwWnbAzM2anF4NaI8xT2m3IG%2FIyvhUOOpR8QnK9JcQgQCYS2tNxty2r07EyG5T5Bf9d74h6KDhzbKnOlYTJUYXNTYSJsfRs%2FMNZliMv5awQNgaKl4h4CeayfK%2BVpNSrk6m84VH0W%2FXDgkiFfiJGBGbfTc2JnNBR8TTh0IkQCFqi8%2BA3FGWSGu6bO7Bnbb2DQJzxSDUKQP7DDg1ovJBqCpru%2B0JXr6y%2FfWFoEwVfJ8F%2BlNIbbj2nmBS5etdTbyWaIYc9tV37tWnDMKLnosQGOqUB40r%2F%2Bxxe8gRyJ2gZUD5F9fEdPm4eIHhkt%2FUPJfHmX5OJf5lx2W6ECora4gyxy182XTZMWCE%2BlFq22QALnmFe5UHF0shkiHA4kWpsjJiJqFgoX6hpqnZmL%2BpesrpvUUOVbcgkNJ4IE4UumLUKhNskRAwOEfadx%2BjhCaKOuV46TeDFbdrp8Wgp5Is1qCCQjgUDOYqdRMcWQM3sZYS1bFewO6YHQc0G&X-Amz-Signature=096ec542eec4a487258f843c266cba746cc29f95544f97a8a84b130360b0e76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVX3X3E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCUu9TWJtuXMFi1d%2Bs2VYGt%2B%2B9lAUHx9t542xEdJZFTFAIgJM9ljtNvT0UMZeGFrz%2B16T7N76I2GbH%2BvtXOnjpuHlMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET%2BNhEJIgINLCobQCrcA%2FvtzoBKehUNewcXjrHzB28sZobPxwgu4u8f3oQ91jyxMzqqYjYHis0X1vfp5Sb%2FyA%2Fkff2nrEnFdvSmm%2Be45bT4lOAzAPbI%2B41YLW1kX9AlyjeqAiSbNay6NaCd6Uo8NWBOIQtbcWup1%2Brn5X7crEQJPh4F3tUnyZdypu%2BPxgailkv3Njs0GSnLn%2FAM041DJjOQZf6YGAzzOZcFL%2BM7JeajbhepWpvGwzxvq%2FNcqw39YMBVrTN1Rlt%2BhVJLP2OilstwULDHY6UpHVOksAWy2TKNIQo7mKa1jKXLw5wbopcJy1SsGj7rDelpsW1QlruugIrM16iS7nfZJ0uodYxtogMLWGCZ%2FZSr3mgnldeXMH5K77SVaJwWnbAzM2anF4NaI8xT2m3IG%2FIyvhUOOpR8QnK9JcQgQCYS2tNxty2r07EyG5T5Bf9d74h6KDhzbKnOlYTJUYXNTYSJsfRs%2FMNZliMv5awQNgaKl4h4CeayfK%2BVpNSrk6m84VH0W%2FXDgkiFfiJGBGbfTc2JnNBR8TTh0IkQCFqi8%2BA3FGWSGu6bO7Bnbb2DQJzxSDUKQP7DDg1ovJBqCpru%2B0JXr6y%2FfWFoEwVfJ8F%2BlNIbbj2nmBS5etdTbyWaIYc9tV37tWnDMKLnosQGOqUB40r%2F%2Bxxe8gRyJ2gZUD5F9fEdPm4eIHhkt%2FUPJfHmX5OJf5lx2W6ECora4gyxy182XTZMWCE%2BlFq22QALnmFe5UHF0shkiHA4kWpsjJiJqFgoX6hpqnZmL%2BpesrpvUUOVbcgkNJ4IE4UumLUKhNskRAwOEfadx%2BjhCaKOuV46TeDFbdrp8Wgp5Is1qCCQjgUDOYqdRMcWQM3sZYS1bFewO6YHQc0G&X-Amz-Signature=ec67e2d4c923f6e98cd02d1d64363cf41ffe77e6a47aa0b16849cc41737754e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVX3X3E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCUu9TWJtuXMFi1d%2Bs2VYGt%2B%2B9lAUHx9t542xEdJZFTFAIgJM9ljtNvT0UMZeGFrz%2B16T7N76I2GbH%2BvtXOnjpuHlMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET%2BNhEJIgINLCobQCrcA%2FvtzoBKehUNewcXjrHzB28sZobPxwgu4u8f3oQ91jyxMzqqYjYHis0X1vfp5Sb%2FyA%2Fkff2nrEnFdvSmm%2Be45bT4lOAzAPbI%2B41YLW1kX9AlyjeqAiSbNay6NaCd6Uo8NWBOIQtbcWup1%2Brn5X7crEQJPh4F3tUnyZdypu%2BPxgailkv3Njs0GSnLn%2FAM041DJjOQZf6YGAzzOZcFL%2BM7JeajbhepWpvGwzxvq%2FNcqw39YMBVrTN1Rlt%2BhVJLP2OilstwULDHY6UpHVOksAWy2TKNIQo7mKa1jKXLw5wbopcJy1SsGj7rDelpsW1QlruugIrM16iS7nfZJ0uodYxtogMLWGCZ%2FZSr3mgnldeXMH5K77SVaJwWnbAzM2anF4NaI8xT2m3IG%2FIyvhUOOpR8QnK9JcQgQCYS2tNxty2r07EyG5T5Bf9d74h6KDhzbKnOlYTJUYXNTYSJsfRs%2FMNZliMv5awQNgaKl4h4CeayfK%2BVpNSrk6m84VH0W%2FXDgkiFfiJGBGbfTc2JnNBR8TTh0IkQCFqi8%2BA3FGWSGu6bO7Bnbb2DQJzxSDUKQP7DDg1ovJBqCpru%2B0JXr6y%2FfWFoEwVfJ8F%2BlNIbbj2nmBS5etdTbyWaIYc9tV37tWnDMKLnosQGOqUB40r%2F%2Bxxe8gRyJ2gZUD5F9fEdPm4eIHhkt%2FUPJfHmX5OJf5lx2W6ECora4gyxy182XTZMWCE%2BlFq22QALnmFe5UHF0shkiHA4kWpsjJiJqFgoX6hpqnZmL%2BpesrpvUUOVbcgkNJ4IE4UumLUKhNskRAwOEfadx%2BjhCaKOuV46TeDFbdrp8Wgp5Is1qCCQjgUDOYqdRMcWQM3sZYS1bFewO6YHQc0G&X-Amz-Signature=e22830e33fcb03ad83ca131ecac6e079179ea5ef9c94637ad0c5964a78cb81c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
