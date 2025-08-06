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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQ2TCF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGXxRtaagcDeOO1kFycRQhKerLDlz9qPU4qgnw5P7R0dAiEAmLA78i%2FZb4n1HHnB3WoJqIKzwyslVO37kGu221M3wvAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG%2BFeqlpxdxNlErU8yrcA25XzKk6VScfjQyHjIVEmge62Ec5T%2BGM4V5NoqWwTNz6pt%2Fk8rcHDnSk35MfczmrWcl6C7Qyx1SS66cSRFYXTeRpAQZ56MGCGY0%2Fd4ZbnFO3%2FWgTsshphnnRrGAeS3rjFoC6hTle4HikY4S81eXnieWAGiCoYPjM0DjJrVnLntihAp387hN%2Fk2YQYBA4QsnAm1x3CsTEggz7topCCbCVivaEwS9sbJUVPQZOH3PBlSQVyNCkDbFH3PpBQvuMZ5DSG8UVllFa306TsKfbK868xh5vK3L4e39h4JCcP0O4j6Cn7dL4%2F5wldfgtOp7mOhUFFma1zRzI5HHQOz39udBxf5uxZdjm9QaCKC1zONhtCQ0rDs7ZRLkS3opy3P%2B%2BQK%2FLgYJxrpF0OTt0Q%2BvdmAlx5sBwsd1ItuhiHAdXyG%2BI02CLfHPSmN3IKA8oozpr%2FFRDKVYBwoyme%2FMifYVCI8xTJo1Akids4z2n7bgEvMrJIaR8pFJtUl2dpWIUik9GcFqR4f5YvgWjUHvruph2ZVUi6rWC29loA2tYcX7W4g8E%2BTjDCklaiRDYdfKVrfZQGpbnlc%2BxGbzAQA%2FWiPgYt2vAxdakrBS7Rh6kAV2%2FPNOn59F4UsrUQo%2FO64DeVeLxMLnrzsQGOqUBHB0JDe5GJ%2BvbIVX4CyA580dWfsYIW3VV1hkHw3ezKWqmDkFuz%2FE0Gcs8Bw4YNJFhVI7RGquBsXAHSCWbTuCw8jPdw1A3d0qUHDxZ1fSXZR5JlgHBFpmF4E1rWzq8iUWONyY0PjtM4lCQshpZGslSlX5XdRDqZ7O6IMMx9Qw2%2FCaryHPgLBDWkqmp8kNTPYQ4vGHjPLAzuA9Q7Zq3YlTdL0qppVBR&X-Amz-Signature=5df5322e579d34e3ffa9fa90243a98761ed81301efef30a81dfceb5f76d211a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQ2TCF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGXxRtaagcDeOO1kFycRQhKerLDlz9qPU4qgnw5P7R0dAiEAmLA78i%2FZb4n1HHnB3WoJqIKzwyslVO37kGu221M3wvAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG%2BFeqlpxdxNlErU8yrcA25XzKk6VScfjQyHjIVEmge62Ec5T%2BGM4V5NoqWwTNz6pt%2Fk8rcHDnSk35MfczmrWcl6C7Qyx1SS66cSRFYXTeRpAQZ56MGCGY0%2Fd4ZbnFO3%2FWgTsshphnnRrGAeS3rjFoC6hTle4HikY4S81eXnieWAGiCoYPjM0DjJrVnLntihAp387hN%2Fk2YQYBA4QsnAm1x3CsTEggz7topCCbCVivaEwS9sbJUVPQZOH3PBlSQVyNCkDbFH3PpBQvuMZ5DSG8UVllFa306TsKfbK868xh5vK3L4e39h4JCcP0O4j6Cn7dL4%2F5wldfgtOp7mOhUFFma1zRzI5HHQOz39udBxf5uxZdjm9QaCKC1zONhtCQ0rDs7ZRLkS3opy3P%2B%2BQK%2FLgYJxrpF0OTt0Q%2BvdmAlx5sBwsd1ItuhiHAdXyG%2BI02CLfHPSmN3IKA8oozpr%2FFRDKVYBwoyme%2FMifYVCI8xTJo1Akids4z2n7bgEvMrJIaR8pFJtUl2dpWIUik9GcFqR4f5YvgWjUHvruph2ZVUi6rWC29loA2tYcX7W4g8E%2BTjDCklaiRDYdfKVrfZQGpbnlc%2BxGbzAQA%2FWiPgYt2vAxdakrBS7Rh6kAV2%2FPNOn59F4UsrUQo%2FO64DeVeLxMLnrzsQGOqUBHB0JDe5GJ%2BvbIVX4CyA580dWfsYIW3VV1hkHw3ezKWqmDkFuz%2FE0Gcs8Bw4YNJFhVI7RGquBsXAHSCWbTuCw8jPdw1A3d0qUHDxZ1fSXZR5JlgHBFpmF4E1rWzq8iUWONyY0PjtM4lCQshpZGslSlX5XdRDqZ7O6IMMx9Qw2%2FCaryHPgLBDWkqmp8kNTPYQ4vGHjPLAzuA9Q7Zq3YlTdL0qppVBR&X-Amz-Signature=3b084e6bf260b6088f5a09818add39e54f5cb9a04f234fff3d3626113db55333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQ2TCF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGXxRtaagcDeOO1kFycRQhKerLDlz9qPU4qgnw5P7R0dAiEAmLA78i%2FZb4n1HHnB3WoJqIKzwyslVO37kGu221M3wvAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG%2BFeqlpxdxNlErU8yrcA25XzKk6VScfjQyHjIVEmge62Ec5T%2BGM4V5NoqWwTNz6pt%2Fk8rcHDnSk35MfczmrWcl6C7Qyx1SS66cSRFYXTeRpAQZ56MGCGY0%2Fd4ZbnFO3%2FWgTsshphnnRrGAeS3rjFoC6hTle4HikY4S81eXnieWAGiCoYPjM0DjJrVnLntihAp387hN%2Fk2YQYBA4QsnAm1x3CsTEggz7topCCbCVivaEwS9sbJUVPQZOH3PBlSQVyNCkDbFH3PpBQvuMZ5DSG8UVllFa306TsKfbK868xh5vK3L4e39h4JCcP0O4j6Cn7dL4%2F5wldfgtOp7mOhUFFma1zRzI5HHQOz39udBxf5uxZdjm9QaCKC1zONhtCQ0rDs7ZRLkS3opy3P%2B%2BQK%2FLgYJxrpF0OTt0Q%2BvdmAlx5sBwsd1ItuhiHAdXyG%2BI02CLfHPSmN3IKA8oozpr%2FFRDKVYBwoyme%2FMifYVCI8xTJo1Akids4z2n7bgEvMrJIaR8pFJtUl2dpWIUik9GcFqR4f5YvgWjUHvruph2ZVUi6rWC29loA2tYcX7W4g8E%2BTjDCklaiRDYdfKVrfZQGpbnlc%2BxGbzAQA%2FWiPgYt2vAxdakrBS7Rh6kAV2%2FPNOn59F4UsrUQo%2FO64DeVeLxMLnrzsQGOqUBHB0JDe5GJ%2BvbIVX4CyA580dWfsYIW3VV1hkHw3ezKWqmDkFuz%2FE0Gcs8Bw4YNJFhVI7RGquBsXAHSCWbTuCw8jPdw1A3d0qUHDxZ1fSXZR5JlgHBFpmF4E1rWzq8iUWONyY0PjtM4lCQshpZGslSlX5XdRDqZ7O6IMMx9Qw2%2FCaryHPgLBDWkqmp8kNTPYQ4vGHjPLAzuA9Q7Zq3YlTdL0qppVBR&X-Amz-Signature=a39df425ac0bf0e2823040f1307931c4f6769a6ed97c311ee53c3bea0ebf35fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQ2TCF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGXxRtaagcDeOO1kFycRQhKerLDlz9qPU4qgnw5P7R0dAiEAmLA78i%2FZb4n1HHnB3WoJqIKzwyslVO37kGu221M3wvAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG%2BFeqlpxdxNlErU8yrcA25XzKk6VScfjQyHjIVEmge62Ec5T%2BGM4V5NoqWwTNz6pt%2Fk8rcHDnSk35MfczmrWcl6C7Qyx1SS66cSRFYXTeRpAQZ56MGCGY0%2Fd4ZbnFO3%2FWgTsshphnnRrGAeS3rjFoC6hTle4HikY4S81eXnieWAGiCoYPjM0DjJrVnLntihAp387hN%2Fk2YQYBA4QsnAm1x3CsTEggz7topCCbCVivaEwS9sbJUVPQZOH3PBlSQVyNCkDbFH3PpBQvuMZ5DSG8UVllFa306TsKfbK868xh5vK3L4e39h4JCcP0O4j6Cn7dL4%2F5wldfgtOp7mOhUFFma1zRzI5HHQOz39udBxf5uxZdjm9QaCKC1zONhtCQ0rDs7ZRLkS3opy3P%2B%2BQK%2FLgYJxrpF0OTt0Q%2BvdmAlx5sBwsd1ItuhiHAdXyG%2BI02CLfHPSmN3IKA8oozpr%2FFRDKVYBwoyme%2FMifYVCI8xTJo1Akids4z2n7bgEvMrJIaR8pFJtUl2dpWIUik9GcFqR4f5YvgWjUHvruph2ZVUi6rWC29loA2tYcX7W4g8E%2BTjDCklaiRDYdfKVrfZQGpbnlc%2BxGbzAQA%2FWiPgYt2vAxdakrBS7Rh6kAV2%2FPNOn59F4UsrUQo%2FO64DeVeLxMLnrzsQGOqUBHB0JDe5GJ%2BvbIVX4CyA580dWfsYIW3VV1hkHw3ezKWqmDkFuz%2FE0Gcs8Bw4YNJFhVI7RGquBsXAHSCWbTuCw8jPdw1A3d0qUHDxZ1fSXZR5JlgHBFpmF4E1rWzq8iUWONyY0PjtM4lCQshpZGslSlX5XdRDqZ7O6IMMx9Qw2%2FCaryHPgLBDWkqmp8kNTPYQ4vGHjPLAzuA9Q7Zq3YlTdL0qppVBR&X-Amz-Signature=58c84c1cdc8c9a2869e5a67b341ad3b695b976b02fd1fcd369f7542034d30bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQ2TCF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGXxRtaagcDeOO1kFycRQhKerLDlz9qPU4qgnw5P7R0dAiEAmLA78i%2FZb4n1HHnB3WoJqIKzwyslVO37kGu221M3wvAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG%2BFeqlpxdxNlErU8yrcA25XzKk6VScfjQyHjIVEmge62Ec5T%2BGM4V5NoqWwTNz6pt%2Fk8rcHDnSk35MfczmrWcl6C7Qyx1SS66cSRFYXTeRpAQZ56MGCGY0%2Fd4ZbnFO3%2FWgTsshphnnRrGAeS3rjFoC6hTle4HikY4S81eXnieWAGiCoYPjM0DjJrVnLntihAp387hN%2Fk2YQYBA4QsnAm1x3CsTEggz7topCCbCVivaEwS9sbJUVPQZOH3PBlSQVyNCkDbFH3PpBQvuMZ5DSG8UVllFa306TsKfbK868xh5vK3L4e39h4JCcP0O4j6Cn7dL4%2F5wldfgtOp7mOhUFFma1zRzI5HHQOz39udBxf5uxZdjm9QaCKC1zONhtCQ0rDs7ZRLkS3opy3P%2B%2BQK%2FLgYJxrpF0OTt0Q%2BvdmAlx5sBwsd1ItuhiHAdXyG%2BI02CLfHPSmN3IKA8oozpr%2FFRDKVYBwoyme%2FMifYVCI8xTJo1Akids4z2n7bgEvMrJIaR8pFJtUl2dpWIUik9GcFqR4f5YvgWjUHvruph2ZVUi6rWC29loA2tYcX7W4g8E%2BTjDCklaiRDYdfKVrfZQGpbnlc%2BxGbzAQA%2FWiPgYt2vAxdakrBS7Rh6kAV2%2FPNOn59F4UsrUQo%2FO64DeVeLxMLnrzsQGOqUBHB0JDe5GJ%2BvbIVX4CyA580dWfsYIW3VV1hkHw3ezKWqmDkFuz%2FE0Gcs8Bw4YNJFhVI7RGquBsXAHSCWbTuCw8jPdw1A3d0qUHDxZ1fSXZR5JlgHBFpmF4E1rWzq8iUWONyY0PjtM4lCQshpZGslSlX5XdRDqZ7O6IMMx9Qw2%2FCaryHPgLBDWkqmp8kNTPYQ4vGHjPLAzuA9Q7Zq3YlTdL0qppVBR&X-Amz-Signature=b972f5d351a9a54d953b08f370afca058ecbd273a9b34fb10dacc35b14bbeed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQ2TCF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGXxRtaagcDeOO1kFycRQhKerLDlz9qPU4qgnw5P7R0dAiEAmLA78i%2FZb4n1HHnB3WoJqIKzwyslVO37kGu221M3wvAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG%2BFeqlpxdxNlErU8yrcA25XzKk6VScfjQyHjIVEmge62Ec5T%2BGM4V5NoqWwTNz6pt%2Fk8rcHDnSk35MfczmrWcl6C7Qyx1SS66cSRFYXTeRpAQZ56MGCGY0%2Fd4ZbnFO3%2FWgTsshphnnRrGAeS3rjFoC6hTle4HikY4S81eXnieWAGiCoYPjM0DjJrVnLntihAp387hN%2Fk2YQYBA4QsnAm1x3CsTEggz7topCCbCVivaEwS9sbJUVPQZOH3PBlSQVyNCkDbFH3PpBQvuMZ5DSG8UVllFa306TsKfbK868xh5vK3L4e39h4JCcP0O4j6Cn7dL4%2F5wldfgtOp7mOhUFFma1zRzI5HHQOz39udBxf5uxZdjm9QaCKC1zONhtCQ0rDs7ZRLkS3opy3P%2B%2BQK%2FLgYJxrpF0OTt0Q%2BvdmAlx5sBwsd1ItuhiHAdXyG%2BI02CLfHPSmN3IKA8oozpr%2FFRDKVYBwoyme%2FMifYVCI8xTJo1Akids4z2n7bgEvMrJIaR8pFJtUl2dpWIUik9GcFqR4f5YvgWjUHvruph2ZVUi6rWC29loA2tYcX7W4g8E%2BTjDCklaiRDYdfKVrfZQGpbnlc%2BxGbzAQA%2FWiPgYt2vAxdakrBS7Rh6kAV2%2FPNOn59F4UsrUQo%2FO64DeVeLxMLnrzsQGOqUBHB0JDe5GJ%2BvbIVX4CyA580dWfsYIW3VV1hkHw3ezKWqmDkFuz%2FE0Gcs8Bw4YNJFhVI7RGquBsXAHSCWbTuCw8jPdw1A3d0qUHDxZ1fSXZR5JlgHBFpmF4E1rWzq8iUWONyY0PjtM4lCQshpZGslSlX5XdRDqZ7O6IMMx9Qw2%2FCaryHPgLBDWkqmp8kNTPYQ4vGHjPLAzuA9Q7Zq3YlTdL0qppVBR&X-Amz-Signature=95027309e983ac34a1f479b782f8200a19ff5573dfec643b71e4460cd0b055b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQ2TCF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGXxRtaagcDeOO1kFycRQhKerLDlz9qPU4qgnw5P7R0dAiEAmLA78i%2FZb4n1HHnB3WoJqIKzwyslVO37kGu221M3wvAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG%2BFeqlpxdxNlErU8yrcA25XzKk6VScfjQyHjIVEmge62Ec5T%2BGM4V5NoqWwTNz6pt%2Fk8rcHDnSk35MfczmrWcl6C7Qyx1SS66cSRFYXTeRpAQZ56MGCGY0%2Fd4ZbnFO3%2FWgTsshphnnRrGAeS3rjFoC6hTle4HikY4S81eXnieWAGiCoYPjM0DjJrVnLntihAp387hN%2Fk2YQYBA4QsnAm1x3CsTEggz7topCCbCVivaEwS9sbJUVPQZOH3PBlSQVyNCkDbFH3PpBQvuMZ5DSG8UVllFa306TsKfbK868xh5vK3L4e39h4JCcP0O4j6Cn7dL4%2F5wldfgtOp7mOhUFFma1zRzI5HHQOz39udBxf5uxZdjm9QaCKC1zONhtCQ0rDs7ZRLkS3opy3P%2B%2BQK%2FLgYJxrpF0OTt0Q%2BvdmAlx5sBwsd1ItuhiHAdXyG%2BI02CLfHPSmN3IKA8oozpr%2FFRDKVYBwoyme%2FMifYVCI8xTJo1Akids4z2n7bgEvMrJIaR8pFJtUl2dpWIUik9GcFqR4f5YvgWjUHvruph2ZVUi6rWC29loA2tYcX7W4g8E%2BTjDCklaiRDYdfKVrfZQGpbnlc%2BxGbzAQA%2FWiPgYt2vAxdakrBS7Rh6kAV2%2FPNOn59F4UsrUQo%2FO64DeVeLxMLnrzsQGOqUBHB0JDe5GJ%2BvbIVX4CyA580dWfsYIW3VV1hkHw3ezKWqmDkFuz%2FE0Gcs8Bw4YNJFhVI7RGquBsXAHSCWbTuCw8jPdw1A3d0qUHDxZ1fSXZR5JlgHBFpmF4E1rWzq8iUWONyY0PjtM4lCQshpZGslSlX5XdRDqZ7O6IMMx9Qw2%2FCaryHPgLBDWkqmp8kNTPYQ4vGHjPLAzuA9Q7Zq3YlTdL0qppVBR&X-Amz-Signature=9c0c3cddb3ab00522c92cc2814852c4690460e4f1671683e032366991bdaddf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQ2TCF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGXxRtaagcDeOO1kFycRQhKerLDlz9qPU4qgnw5P7R0dAiEAmLA78i%2FZb4n1HHnB3WoJqIKzwyslVO37kGu221M3wvAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG%2BFeqlpxdxNlErU8yrcA25XzKk6VScfjQyHjIVEmge62Ec5T%2BGM4V5NoqWwTNz6pt%2Fk8rcHDnSk35MfczmrWcl6C7Qyx1SS66cSRFYXTeRpAQZ56MGCGY0%2Fd4ZbnFO3%2FWgTsshphnnRrGAeS3rjFoC6hTle4HikY4S81eXnieWAGiCoYPjM0DjJrVnLntihAp387hN%2Fk2YQYBA4QsnAm1x3CsTEggz7topCCbCVivaEwS9sbJUVPQZOH3PBlSQVyNCkDbFH3PpBQvuMZ5DSG8UVllFa306TsKfbK868xh5vK3L4e39h4JCcP0O4j6Cn7dL4%2F5wldfgtOp7mOhUFFma1zRzI5HHQOz39udBxf5uxZdjm9QaCKC1zONhtCQ0rDs7ZRLkS3opy3P%2B%2BQK%2FLgYJxrpF0OTt0Q%2BvdmAlx5sBwsd1ItuhiHAdXyG%2BI02CLfHPSmN3IKA8oozpr%2FFRDKVYBwoyme%2FMifYVCI8xTJo1Akids4z2n7bgEvMrJIaR8pFJtUl2dpWIUik9GcFqR4f5YvgWjUHvruph2ZVUi6rWC29loA2tYcX7W4g8E%2BTjDCklaiRDYdfKVrfZQGpbnlc%2BxGbzAQA%2FWiPgYt2vAxdakrBS7Rh6kAV2%2FPNOn59F4UsrUQo%2FO64DeVeLxMLnrzsQGOqUBHB0JDe5GJ%2BvbIVX4CyA580dWfsYIW3VV1hkHw3ezKWqmDkFuz%2FE0Gcs8Bw4YNJFhVI7RGquBsXAHSCWbTuCw8jPdw1A3d0qUHDxZ1fSXZR5JlgHBFpmF4E1rWzq8iUWONyY0PjtM4lCQshpZGslSlX5XdRDqZ7O6IMMx9Qw2%2FCaryHPgLBDWkqmp8kNTPYQ4vGHjPLAzuA9Q7Zq3YlTdL0qppVBR&X-Amz-Signature=213822b8a975fccdbc15a863c1e550c26a8a22f59cd18a0e8712329bdb99d30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQ2TCF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGXxRtaagcDeOO1kFycRQhKerLDlz9qPU4qgnw5P7R0dAiEAmLA78i%2FZb4n1HHnB3WoJqIKzwyslVO37kGu221M3wvAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG%2BFeqlpxdxNlErU8yrcA25XzKk6VScfjQyHjIVEmge62Ec5T%2BGM4V5NoqWwTNz6pt%2Fk8rcHDnSk35MfczmrWcl6C7Qyx1SS66cSRFYXTeRpAQZ56MGCGY0%2Fd4ZbnFO3%2FWgTsshphnnRrGAeS3rjFoC6hTle4HikY4S81eXnieWAGiCoYPjM0DjJrVnLntihAp387hN%2Fk2YQYBA4QsnAm1x3CsTEggz7topCCbCVivaEwS9sbJUVPQZOH3PBlSQVyNCkDbFH3PpBQvuMZ5DSG8UVllFa306TsKfbK868xh5vK3L4e39h4JCcP0O4j6Cn7dL4%2F5wldfgtOp7mOhUFFma1zRzI5HHQOz39udBxf5uxZdjm9QaCKC1zONhtCQ0rDs7ZRLkS3opy3P%2B%2BQK%2FLgYJxrpF0OTt0Q%2BvdmAlx5sBwsd1ItuhiHAdXyG%2BI02CLfHPSmN3IKA8oozpr%2FFRDKVYBwoyme%2FMifYVCI8xTJo1Akids4z2n7bgEvMrJIaR8pFJtUl2dpWIUik9GcFqR4f5YvgWjUHvruph2ZVUi6rWC29loA2tYcX7W4g8E%2BTjDCklaiRDYdfKVrfZQGpbnlc%2BxGbzAQA%2FWiPgYt2vAxdakrBS7Rh6kAV2%2FPNOn59F4UsrUQo%2FO64DeVeLxMLnrzsQGOqUBHB0JDe5GJ%2BvbIVX4CyA580dWfsYIW3VV1hkHw3ezKWqmDkFuz%2FE0Gcs8Bw4YNJFhVI7RGquBsXAHSCWbTuCw8jPdw1A3d0qUHDxZ1fSXZR5JlgHBFpmF4E1rWzq8iUWONyY0PjtM4lCQshpZGslSlX5XdRDqZ7O6IMMx9Qw2%2FCaryHPgLBDWkqmp8kNTPYQ4vGHjPLAzuA9Q7Zq3YlTdL0qppVBR&X-Amz-Signature=5833d1a85966e3fefc097cb77686ee0cb5cbd7c1702e322f13b574544c3e97e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQ2TCF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGXxRtaagcDeOO1kFycRQhKerLDlz9qPU4qgnw5P7R0dAiEAmLA78i%2FZb4n1HHnB3WoJqIKzwyslVO37kGu221M3wvAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG%2BFeqlpxdxNlErU8yrcA25XzKk6VScfjQyHjIVEmge62Ec5T%2BGM4V5NoqWwTNz6pt%2Fk8rcHDnSk35MfczmrWcl6C7Qyx1SS66cSRFYXTeRpAQZ56MGCGY0%2Fd4ZbnFO3%2FWgTsshphnnRrGAeS3rjFoC6hTle4HikY4S81eXnieWAGiCoYPjM0DjJrVnLntihAp387hN%2Fk2YQYBA4QsnAm1x3CsTEggz7topCCbCVivaEwS9sbJUVPQZOH3PBlSQVyNCkDbFH3PpBQvuMZ5DSG8UVllFa306TsKfbK868xh5vK3L4e39h4JCcP0O4j6Cn7dL4%2F5wldfgtOp7mOhUFFma1zRzI5HHQOz39udBxf5uxZdjm9QaCKC1zONhtCQ0rDs7ZRLkS3opy3P%2B%2BQK%2FLgYJxrpF0OTt0Q%2BvdmAlx5sBwsd1ItuhiHAdXyG%2BI02CLfHPSmN3IKA8oozpr%2FFRDKVYBwoyme%2FMifYVCI8xTJo1Akids4z2n7bgEvMrJIaR8pFJtUl2dpWIUik9GcFqR4f5YvgWjUHvruph2ZVUi6rWC29loA2tYcX7W4g8E%2BTjDCklaiRDYdfKVrfZQGpbnlc%2BxGbzAQA%2FWiPgYt2vAxdakrBS7Rh6kAV2%2FPNOn59F4UsrUQo%2FO64DeVeLxMLnrzsQGOqUBHB0JDe5GJ%2BvbIVX4CyA580dWfsYIW3VV1hkHw3ezKWqmDkFuz%2FE0Gcs8Bw4YNJFhVI7RGquBsXAHSCWbTuCw8jPdw1A3d0qUHDxZ1fSXZR5JlgHBFpmF4E1rWzq8iUWONyY0PjtM4lCQshpZGslSlX5XdRDqZ7O6IMMx9Qw2%2FCaryHPgLBDWkqmp8kNTPYQ4vGHjPLAzuA9Q7Zq3YlTdL0qppVBR&X-Amz-Signature=6cc1dfff6f6bdad0113e15185bd681212312db0e36bc5e0fc6bde7e6493d41ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3DEZ2AR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDu7pOV1IPSx6xnZNEtRtiyfACXj5QhW3gbLzBmc9L1xAiBgcUnj74KKnkGFlRPFuGn6s7ksAr1lv0i0H%2FDxWasceir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMuyTWXKDl4TYadltMKtwDO%2BhpRFRYvrmYuUsXgwUqqq8MPMwP559NRKhnaajOGS%2Fhc5e6D4jVGcRdrgVLMVViND%2FNHegXkQxFXScXE%2FRDvmUzNaR7SuU9Me%2Bfh7WsGDvUtNOuKIJQZPmKQRBxaSvI5xZ4eAtzG3nb3LcOtFPA1oFL3mEwkF%2FHc8qYa82yxENLT%2F8ysG6wRmBHIcJbq%2FhipGo3BXP5M3G9HaN%2BArDR6w4l6R5gOkKgsw51oBW1yaf4HabFqIp0SzVtgQsnLVlyAN38UTUfhtl5A9wxy1Wo%2F3OuqBDufFt6CVAzYooO9BKB0it4YczO5Bc0cdY83olbOQrmok45H%2BwwTQwPLZVA3Vo1%2FNpXBiP%2FjqIO4BCgv%2F2upcc2I9y69JOlKkDIqG1VltCYracrmIN3xqKKUMlHvzA0BxrF1nnfwxbJpceC0L9RIWpHfxCmVRyBn6ZeVvYXCOnrMQUKkir07WNwocrHUj4ETIMyTpalF43m5GMZqWWmAWkJ%2FgIrmIWnaV38ZZrwXV4i8djsrP4piwOIQi7v%2Bb8BmaNNjBorNVotpzp%2FvT3gwOee0fAi5l6d8DjoBhZET0BkGVo%2BCprbfJ6oBylFArP7LtXB5geSuAWTeoB%2B4aBnXPSlq8Y2FYW1UMIw4urOxAY6pgHUnIvz9QGHNSmGv5xJFTJ7ztisYcusYpTYqM0EYp%2BdJAQkXQM3JNpchLHSLcg3Rt1IzPt4XjhJB4qAH6gL6YTBauyxRTOB7T0jaq5dIZ5C%2FXBAjqhaozeVfN1IVwXp%2F9Gz4Q%2BCiKjBm%2F6ukYfCvUvuCET5J1bOoZnzJtsEUG%2BtIpYAZ1ueeiswfSmD6iz4otr2PqGjN1bFl1rGDWTQVxcPjLtl8vHH&X-Amz-Signature=59a8da0785c6f800c7406b8fdb0ac60c3c1acc6c30673e6eb5d0ebc4991191ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM2JVPG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCDgh8oL2T8PXfBr6m5mhcFQ%2FuuFRC3kwbOzY3tnx776QIgfNmFb1OKubKil4aoPSnIBPM4j81UdCESFBr9oQBI8BIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF3Ki6DVbNVgKfOkjircAwziqkmGcLc8Ei8hUwFTfbyYtOvDZ1IRypj78dzWi8%2FbTY8lJaznqCrD4e%2FprChfrBbjKE2drbiPi3XwAKHz4n8s%2FD%2BHuQi92aGTdzDv08EO8l6jNlP013peXHO7MU%2FI0s%2F9%2FZMDIa1j7PZViJ5TJEn9rHS21oojoLYKz4d5iwD6kwobps5Zb1BeN0fm0abnf8gKOElMNHZmx5VVo9GrO6dTX0m8crrc6vdoRKbpwrP9WUXzs2Oqp3HfUZmqpw7lRmjLqZA3U7jrZJJG1JBal3c3YjgfOeo%2FYO3RiosoDuZeqNTWRJ3afB2MxPL4rrFuBrI26bVY440vE%2Bvm3fFViYdWN%2BqEFr6YD1SpjEU%2FAhSDcZJgT0OHLBv0FZkdhoT8Nyja67ivIMV6tEP5tXs0Ylg9p9mAmLr%2BbC6rL%2Bpoe2%2BkKWABHweWGa8yq%2F1COCLiuw1GHFwkXGGEAO3S9ofbatnWEVDdc7uJFhDkGB9kqfbJj699m%2FRBJFGKNM%2BiOx1%2FZu8OENJOwYWpUKtitD9rcDnVADpW%2BiqHWsGD0EvMCvGQhgY%2FWeo1OIuAhTem9JTzWNR7SLpT91tANynvMlXQ5bdZ2EUcUQ%2BY64bRTmR%2BAnfBCQUZzDXrfmg83PgSMI%2FrzsQGOqUBXlOtmbGNeQ5jHe2zyFXMOZmGSbfaiHC7xFgdt%2Bk3KuYHSfVQTCiUYbp7P03M3PxH9eQy01lC9kbRD%2FPUHjAscyHgL6uVzYUrY%2FhzBvJl4IHvMZ901p8DUq4Hkkol0iaxSCi58IXfwIHKtWPJTlnUtufDrHwGVncON7E2anaJu3RLjLwU6ykUSRekvkjkTTBdgJl4z7BUv5QAmCBcdL5AEjfdaWVo&X-Amz-Signature=4d2e61a398b1aecc88255af7cdfa29089cf90d58506853aeb21c096d4d93ce99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM2JVPG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCDgh8oL2T8PXfBr6m5mhcFQ%2FuuFRC3kwbOzY3tnx776QIgfNmFb1OKubKil4aoPSnIBPM4j81UdCESFBr9oQBI8BIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF3Ki6DVbNVgKfOkjircAwziqkmGcLc8Ei8hUwFTfbyYtOvDZ1IRypj78dzWi8%2FbTY8lJaznqCrD4e%2FprChfrBbjKE2drbiPi3XwAKHz4n8s%2FD%2BHuQi92aGTdzDv08EO8l6jNlP013peXHO7MU%2FI0s%2F9%2FZMDIa1j7PZViJ5TJEn9rHS21oojoLYKz4d5iwD6kwobps5Zb1BeN0fm0abnf8gKOElMNHZmx5VVo9GrO6dTX0m8crrc6vdoRKbpwrP9WUXzs2Oqp3HfUZmqpw7lRmjLqZA3U7jrZJJG1JBal3c3YjgfOeo%2FYO3RiosoDuZeqNTWRJ3afB2MxPL4rrFuBrI26bVY440vE%2Bvm3fFViYdWN%2BqEFr6YD1SpjEU%2FAhSDcZJgT0OHLBv0FZkdhoT8Nyja67ivIMV6tEP5tXs0Ylg9p9mAmLr%2BbC6rL%2Bpoe2%2BkKWABHweWGa8yq%2F1COCLiuw1GHFwkXGGEAO3S9ofbatnWEVDdc7uJFhDkGB9kqfbJj699m%2FRBJFGKNM%2BiOx1%2FZu8OENJOwYWpUKtitD9rcDnVADpW%2BiqHWsGD0EvMCvGQhgY%2FWeo1OIuAhTem9JTzWNR7SLpT91tANynvMlXQ5bdZ2EUcUQ%2BY64bRTmR%2BAnfBCQUZzDXrfmg83PgSMI%2FrzsQGOqUBXlOtmbGNeQ5jHe2zyFXMOZmGSbfaiHC7xFgdt%2Bk3KuYHSfVQTCiUYbp7P03M3PxH9eQy01lC9kbRD%2FPUHjAscyHgL6uVzYUrY%2FhzBvJl4IHvMZ901p8DUq4Hkkol0iaxSCi58IXfwIHKtWPJTlnUtufDrHwGVncON7E2anaJu3RLjLwU6ykUSRekvkjkTTBdgJl4z7BUv5QAmCBcdL5AEjfdaWVo&X-Amz-Signature=6113e55e5fa1988a526b8953064404f8f696d9276b3c8ba279101aa1f26d0ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM2JVPG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCDgh8oL2T8PXfBr6m5mhcFQ%2FuuFRC3kwbOzY3tnx776QIgfNmFb1OKubKil4aoPSnIBPM4j81UdCESFBr9oQBI8BIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF3Ki6DVbNVgKfOkjircAwziqkmGcLc8Ei8hUwFTfbyYtOvDZ1IRypj78dzWi8%2FbTY8lJaznqCrD4e%2FprChfrBbjKE2drbiPi3XwAKHz4n8s%2FD%2BHuQi92aGTdzDv08EO8l6jNlP013peXHO7MU%2FI0s%2F9%2FZMDIa1j7PZViJ5TJEn9rHS21oojoLYKz4d5iwD6kwobps5Zb1BeN0fm0abnf8gKOElMNHZmx5VVo9GrO6dTX0m8crrc6vdoRKbpwrP9WUXzs2Oqp3HfUZmqpw7lRmjLqZA3U7jrZJJG1JBal3c3YjgfOeo%2FYO3RiosoDuZeqNTWRJ3afB2MxPL4rrFuBrI26bVY440vE%2Bvm3fFViYdWN%2BqEFr6YD1SpjEU%2FAhSDcZJgT0OHLBv0FZkdhoT8Nyja67ivIMV6tEP5tXs0Ylg9p9mAmLr%2BbC6rL%2Bpoe2%2BkKWABHweWGa8yq%2F1COCLiuw1GHFwkXGGEAO3S9ofbatnWEVDdc7uJFhDkGB9kqfbJj699m%2FRBJFGKNM%2BiOx1%2FZu8OENJOwYWpUKtitD9rcDnVADpW%2BiqHWsGD0EvMCvGQhgY%2FWeo1OIuAhTem9JTzWNR7SLpT91tANynvMlXQ5bdZ2EUcUQ%2BY64bRTmR%2BAnfBCQUZzDXrfmg83PgSMI%2FrzsQGOqUBXlOtmbGNeQ5jHe2zyFXMOZmGSbfaiHC7xFgdt%2Bk3KuYHSfVQTCiUYbp7P03M3PxH9eQy01lC9kbRD%2FPUHjAscyHgL6uVzYUrY%2FhzBvJl4IHvMZ901p8DUq4Hkkol0iaxSCi58IXfwIHKtWPJTlnUtufDrHwGVncON7E2anaJu3RLjLwU6ykUSRekvkjkTTBdgJl4z7BUv5QAmCBcdL5AEjfdaWVo&X-Amz-Signature=461af7d62cbe07d3ca772370273ce6043a0053a57df8fb5b608ccdba1c3ae7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM2JVPG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCDgh8oL2T8PXfBr6m5mhcFQ%2FuuFRC3kwbOzY3tnx776QIgfNmFb1OKubKil4aoPSnIBPM4j81UdCESFBr9oQBI8BIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF3Ki6DVbNVgKfOkjircAwziqkmGcLc8Ei8hUwFTfbyYtOvDZ1IRypj78dzWi8%2FbTY8lJaznqCrD4e%2FprChfrBbjKE2drbiPi3XwAKHz4n8s%2FD%2BHuQi92aGTdzDv08EO8l6jNlP013peXHO7MU%2FI0s%2F9%2FZMDIa1j7PZViJ5TJEn9rHS21oojoLYKz4d5iwD6kwobps5Zb1BeN0fm0abnf8gKOElMNHZmx5VVo9GrO6dTX0m8crrc6vdoRKbpwrP9WUXzs2Oqp3HfUZmqpw7lRmjLqZA3U7jrZJJG1JBal3c3YjgfOeo%2FYO3RiosoDuZeqNTWRJ3afB2MxPL4rrFuBrI26bVY440vE%2Bvm3fFViYdWN%2BqEFr6YD1SpjEU%2FAhSDcZJgT0OHLBv0FZkdhoT8Nyja67ivIMV6tEP5tXs0Ylg9p9mAmLr%2BbC6rL%2Bpoe2%2BkKWABHweWGa8yq%2F1COCLiuw1GHFwkXGGEAO3S9ofbatnWEVDdc7uJFhDkGB9kqfbJj699m%2FRBJFGKNM%2BiOx1%2FZu8OENJOwYWpUKtitD9rcDnVADpW%2BiqHWsGD0EvMCvGQhgY%2FWeo1OIuAhTem9JTzWNR7SLpT91tANynvMlXQ5bdZ2EUcUQ%2BY64bRTmR%2BAnfBCQUZzDXrfmg83PgSMI%2FrzsQGOqUBXlOtmbGNeQ5jHe2zyFXMOZmGSbfaiHC7xFgdt%2Bk3KuYHSfVQTCiUYbp7P03M3PxH9eQy01lC9kbRD%2FPUHjAscyHgL6uVzYUrY%2FhzBvJl4IHvMZ901p8DUq4Hkkol0iaxSCi58IXfwIHKtWPJTlnUtufDrHwGVncON7E2anaJu3RLjLwU6ykUSRekvkjkTTBdgJl4z7BUv5QAmCBcdL5AEjfdaWVo&X-Amz-Signature=933933bacff402b576bdd8a220f0f55f010c338e6d4e14d4c5e235bcd2f23b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM2JVPG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCDgh8oL2T8PXfBr6m5mhcFQ%2FuuFRC3kwbOzY3tnx776QIgfNmFb1OKubKil4aoPSnIBPM4j81UdCESFBr9oQBI8BIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF3Ki6DVbNVgKfOkjircAwziqkmGcLc8Ei8hUwFTfbyYtOvDZ1IRypj78dzWi8%2FbTY8lJaznqCrD4e%2FprChfrBbjKE2drbiPi3XwAKHz4n8s%2FD%2BHuQi92aGTdzDv08EO8l6jNlP013peXHO7MU%2FI0s%2F9%2FZMDIa1j7PZViJ5TJEn9rHS21oojoLYKz4d5iwD6kwobps5Zb1BeN0fm0abnf8gKOElMNHZmx5VVo9GrO6dTX0m8crrc6vdoRKbpwrP9WUXzs2Oqp3HfUZmqpw7lRmjLqZA3U7jrZJJG1JBal3c3YjgfOeo%2FYO3RiosoDuZeqNTWRJ3afB2MxPL4rrFuBrI26bVY440vE%2Bvm3fFViYdWN%2BqEFr6YD1SpjEU%2FAhSDcZJgT0OHLBv0FZkdhoT8Nyja67ivIMV6tEP5tXs0Ylg9p9mAmLr%2BbC6rL%2Bpoe2%2BkKWABHweWGa8yq%2F1COCLiuw1GHFwkXGGEAO3S9ofbatnWEVDdc7uJFhDkGB9kqfbJj699m%2FRBJFGKNM%2BiOx1%2FZu8OENJOwYWpUKtitD9rcDnVADpW%2BiqHWsGD0EvMCvGQhgY%2FWeo1OIuAhTem9JTzWNR7SLpT91tANynvMlXQ5bdZ2EUcUQ%2BY64bRTmR%2BAnfBCQUZzDXrfmg83PgSMI%2FrzsQGOqUBXlOtmbGNeQ5jHe2zyFXMOZmGSbfaiHC7xFgdt%2Bk3KuYHSfVQTCiUYbp7P03M3PxH9eQy01lC9kbRD%2FPUHjAscyHgL6uVzYUrY%2FhzBvJl4IHvMZ901p8DUq4Hkkol0iaxSCi58IXfwIHKtWPJTlnUtufDrHwGVncON7E2anaJu3RLjLwU6ykUSRekvkjkTTBdgJl4z7BUv5QAmCBcdL5AEjfdaWVo&X-Amz-Signature=c31cfe9c5404433ea8bd2e8454487c8561d5fb2ab96f94239d311b5f25a6f83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM2JVPG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCDgh8oL2T8PXfBr6m5mhcFQ%2FuuFRC3kwbOzY3tnx776QIgfNmFb1OKubKil4aoPSnIBPM4j81UdCESFBr9oQBI8BIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF3Ki6DVbNVgKfOkjircAwziqkmGcLc8Ei8hUwFTfbyYtOvDZ1IRypj78dzWi8%2FbTY8lJaznqCrD4e%2FprChfrBbjKE2drbiPi3XwAKHz4n8s%2FD%2BHuQi92aGTdzDv08EO8l6jNlP013peXHO7MU%2FI0s%2F9%2FZMDIa1j7PZViJ5TJEn9rHS21oojoLYKz4d5iwD6kwobps5Zb1BeN0fm0abnf8gKOElMNHZmx5VVo9GrO6dTX0m8crrc6vdoRKbpwrP9WUXzs2Oqp3HfUZmqpw7lRmjLqZA3U7jrZJJG1JBal3c3YjgfOeo%2FYO3RiosoDuZeqNTWRJ3afB2MxPL4rrFuBrI26bVY440vE%2Bvm3fFViYdWN%2BqEFr6YD1SpjEU%2FAhSDcZJgT0OHLBv0FZkdhoT8Nyja67ivIMV6tEP5tXs0Ylg9p9mAmLr%2BbC6rL%2Bpoe2%2BkKWABHweWGa8yq%2F1COCLiuw1GHFwkXGGEAO3S9ofbatnWEVDdc7uJFhDkGB9kqfbJj699m%2FRBJFGKNM%2BiOx1%2FZu8OENJOwYWpUKtitD9rcDnVADpW%2BiqHWsGD0EvMCvGQhgY%2FWeo1OIuAhTem9JTzWNR7SLpT91tANynvMlXQ5bdZ2EUcUQ%2BY64bRTmR%2BAnfBCQUZzDXrfmg83PgSMI%2FrzsQGOqUBXlOtmbGNeQ5jHe2zyFXMOZmGSbfaiHC7xFgdt%2Bk3KuYHSfVQTCiUYbp7P03M3PxH9eQy01lC9kbRD%2FPUHjAscyHgL6uVzYUrY%2FhzBvJl4IHvMZ901p8DUq4Hkkol0iaxSCi58IXfwIHKtWPJTlnUtufDrHwGVncON7E2anaJu3RLjLwU6ykUSRekvkjkTTBdgJl4z7BUv5QAmCBcdL5AEjfdaWVo&X-Amz-Signature=fc383512c8bdf7a5c7cb90ace3da76112dc7781873ade89b8dd3b3cd00b8a2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM2JVPG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCDgh8oL2T8PXfBr6m5mhcFQ%2FuuFRC3kwbOzY3tnx776QIgfNmFb1OKubKil4aoPSnIBPM4j81UdCESFBr9oQBI8BIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF3Ki6DVbNVgKfOkjircAwziqkmGcLc8Ei8hUwFTfbyYtOvDZ1IRypj78dzWi8%2FbTY8lJaznqCrD4e%2FprChfrBbjKE2drbiPi3XwAKHz4n8s%2FD%2BHuQi92aGTdzDv08EO8l6jNlP013peXHO7MU%2FI0s%2F9%2FZMDIa1j7PZViJ5TJEn9rHS21oojoLYKz4d5iwD6kwobps5Zb1BeN0fm0abnf8gKOElMNHZmx5VVo9GrO6dTX0m8crrc6vdoRKbpwrP9WUXzs2Oqp3HfUZmqpw7lRmjLqZA3U7jrZJJG1JBal3c3YjgfOeo%2FYO3RiosoDuZeqNTWRJ3afB2MxPL4rrFuBrI26bVY440vE%2Bvm3fFViYdWN%2BqEFr6YD1SpjEU%2FAhSDcZJgT0OHLBv0FZkdhoT8Nyja67ivIMV6tEP5tXs0Ylg9p9mAmLr%2BbC6rL%2Bpoe2%2BkKWABHweWGa8yq%2F1COCLiuw1GHFwkXGGEAO3S9ofbatnWEVDdc7uJFhDkGB9kqfbJj699m%2FRBJFGKNM%2BiOx1%2FZu8OENJOwYWpUKtitD9rcDnVADpW%2BiqHWsGD0EvMCvGQhgY%2FWeo1OIuAhTem9JTzWNR7SLpT91tANynvMlXQ5bdZ2EUcUQ%2BY64bRTmR%2BAnfBCQUZzDXrfmg83PgSMI%2FrzsQGOqUBXlOtmbGNeQ5jHe2zyFXMOZmGSbfaiHC7xFgdt%2Bk3KuYHSfVQTCiUYbp7P03M3PxH9eQy01lC9kbRD%2FPUHjAscyHgL6uVzYUrY%2FhzBvJl4IHvMZ901p8DUq4Hkkol0iaxSCi58IXfwIHKtWPJTlnUtufDrHwGVncON7E2anaJu3RLjLwU6ykUSRekvkjkTTBdgJl4z7BUv5QAmCBcdL5AEjfdaWVo&X-Amz-Signature=0f4a0a8e1f1eeba3cfc42addc8e8a6e444cf01df5339edb5c003820fd5b8e9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM2JVPG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCDgh8oL2T8PXfBr6m5mhcFQ%2FuuFRC3kwbOzY3tnx776QIgfNmFb1OKubKil4aoPSnIBPM4j81UdCESFBr9oQBI8BIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF3Ki6DVbNVgKfOkjircAwziqkmGcLc8Ei8hUwFTfbyYtOvDZ1IRypj78dzWi8%2FbTY8lJaznqCrD4e%2FprChfrBbjKE2drbiPi3XwAKHz4n8s%2FD%2BHuQi92aGTdzDv08EO8l6jNlP013peXHO7MU%2FI0s%2F9%2FZMDIa1j7PZViJ5TJEn9rHS21oojoLYKz4d5iwD6kwobps5Zb1BeN0fm0abnf8gKOElMNHZmx5VVo9GrO6dTX0m8crrc6vdoRKbpwrP9WUXzs2Oqp3HfUZmqpw7lRmjLqZA3U7jrZJJG1JBal3c3YjgfOeo%2FYO3RiosoDuZeqNTWRJ3afB2MxPL4rrFuBrI26bVY440vE%2Bvm3fFViYdWN%2BqEFr6YD1SpjEU%2FAhSDcZJgT0OHLBv0FZkdhoT8Nyja67ivIMV6tEP5tXs0Ylg9p9mAmLr%2BbC6rL%2Bpoe2%2BkKWABHweWGa8yq%2F1COCLiuw1GHFwkXGGEAO3S9ofbatnWEVDdc7uJFhDkGB9kqfbJj699m%2FRBJFGKNM%2BiOx1%2FZu8OENJOwYWpUKtitD9rcDnVADpW%2BiqHWsGD0EvMCvGQhgY%2FWeo1OIuAhTem9JTzWNR7SLpT91tANynvMlXQ5bdZ2EUcUQ%2BY64bRTmR%2BAnfBCQUZzDXrfmg83PgSMI%2FrzsQGOqUBXlOtmbGNeQ5jHe2zyFXMOZmGSbfaiHC7xFgdt%2Bk3KuYHSfVQTCiUYbp7P03M3PxH9eQy01lC9kbRD%2FPUHjAscyHgL6uVzYUrY%2FhzBvJl4IHvMZ901p8DUq4Hkkol0iaxSCi58IXfwIHKtWPJTlnUtufDrHwGVncON7E2anaJu3RLjLwU6ykUSRekvkjkTTBdgJl4z7BUv5QAmCBcdL5AEjfdaWVo&X-Amz-Signature=933b016d66780a50eb2b0e3470abed891b64df21a6c496c3364d123e3e53a063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM2JVPG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCDgh8oL2T8PXfBr6m5mhcFQ%2FuuFRC3kwbOzY3tnx776QIgfNmFb1OKubKil4aoPSnIBPM4j81UdCESFBr9oQBI8BIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF3Ki6DVbNVgKfOkjircAwziqkmGcLc8Ei8hUwFTfbyYtOvDZ1IRypj78dzWi8%2FbTY8lJaznqCrD4e%2FprChfrBbjKE2drbiPi3XwAKHz4n8s%2FD%2BHuQi92aGTdzDv08EO8l6jNlP013peXHO7MU%2FI0s%2F9%2FZMDIa1j7PZViJ5TJEn9rHS21oojoLYKz4d5iwD6kwobps5Zb1BeN0fm0abnf8gKOElMNHZmx5VVo9GrO6dTX0m8crrc6vdoRKbpwrP9WUXzs2Oqp3HfUZmqpw7lRmjLqZA3U7jrZJJG1JBal3c3YjgfOeo%2FYO3RiosoDuZeqNTWRJ3afB2MxPL4rrFuBrI26bVY440vE%2Bvm3fFViYdWN%2BqEFr6YD1SpjEU%2FAhSDcZJgT0OHLBv0FZkdhoT8Nyja67ivIMV6tEP5tXs0Ylg9p9mAmLr%2BbC6rL%2Bpoe2%2BkKWABHweWGa8yq%2F1COCLiuw1GHFwkXGGEAO3S9ofbatnWEVDdc7uJFhDkGB9kqfbJj699m%2FRBJFGKNM%2BiOx1%2FZu8OENJOwYWpUKtitD9rcDnVADpW%2BiqHWsGD0EvMCvGQhgY%2FWeo1OIuAhTem9JTzWNR7SLpT91tANynvMlXQ5bdZ2EUcUQ%2BY64bRTmR%2BAnfBCQUZzDXrfmg83PgSMI%2FrzsQGOqUBXlOtmbGNeQ5jHe2zyFXMOZmGSbfaiHC7xFgdt%2Bk3KuYHSfVQTCiUYbp7P03M3PxH9eQy01lC9kbRD%2FPUHjAscyHgL6uVzYUrY%2FhzBvJl4IHvMZ901p8DUq4Hkkol0iaxSCi58IXfwIHKtWPJTlnUtufDrHwGVncON7E2anaJu3RLjLwU6ykUSRekvkjkTTBdgJl4z7BUv5QAmCBcdL5AEjfdaWVo&X-Amz-Signature=4c0d857b706d7eb09b0eec024ea036f570f2a41d0f29f0fd2c2045d8a322c2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
