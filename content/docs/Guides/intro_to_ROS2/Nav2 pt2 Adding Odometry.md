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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=c8ebbba6a766e27ebc9be1e2afc201d2db296c740bc43b8fa4aa39946d9b5f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=5922157f05db6a769c40af90fb7f85635139e99ed5c8b0e5ef865847ce197e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=50decbfa55eac687237564585700fe68829a2981def92239cc11e70e4b863ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=b9dca5f5da9d9ef682b0cd7849796307884f247fb9c3eb398ac0f908e0356bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=5d54154d0954d6e4f3bebc9a9edf92db8d0ea83be6c3f2f8e5e9ec10e62ecfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=b1ddb47a6ccc4ec537b485d9fc1ecc12a8d535417e71bfca11df2d2baba50449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=8c479f2684468aa704f70856ddef42740fe935115f6e60326f1a6b27526997d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=02c55211cfaf14aa727a8f105fb866e7c9834c1721bde645767dadd5be28588c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=c12d4c061de1805fd7086c5185098c957af9e30d271fc0621d3ab5564389696c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AE6PVPN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCV9mC%2FDdLPHivPcDBchRIYZ7ldaMuMhN84QN1exp6AbwIgb43V4FXlUCYxHCVALNAZzf78StwpIfwofQ6rfa7SHXcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMnCg6MJAV32yfejcSrcA1kvQtD6gIGb3XMHBsf%2BNZHJOFIB%2Bs1u832sop6TgWIiappOWRnVf5A3Y%2FdVuBZ%2Fyq%2BBA4bKvmYx%2FxvcWPi7pov2S9qZ6eaxCLlPPz4XD8x%2BbbuhclZaR9dZ9%2FXIu0pBbVHsrFstir2dVS6weNhpdl%2FnnU%2Bq1fzaTkbbF%2BJ5kyaiRZKySE%2BkB81F7j1MP0ndhEx5aLCI0MMCUhStLe2kL6S5vGnokr2P3SvUheN1Htxtjpze%2FH6geccEutV9kkoXn5pMp4HoY24GSQjlIO8qtrWKijiq8aUyqqk1lijZ1k%2FFpcsvINUXoLNf%2F7vDZopIyOoFIecGzHtoktZVS45C9MMffVY%2FLG4yg6j1NtEsge69tKEhlLV%2FIOXFfjYyssLEzAIHgE%2B69qQ4xUzZRPUte7jvIK1zzVgdPuBycJYyZ15%2BlPRJb8IV%2FIs%2BwZurUTCPNDzaVLFMxDIY6mRy%2B%2FiNSoBFdB9Zcsqkti9RifDgLGZkNahAOiyEygPp41YiMn3wczsFHWC%2F5V99fRCV2xfM4ZpTaCEOCl8WT58QkDUZbSRgswa6rizXYuV1Lhq18MOsWkhPD76G7vH4GT3hyREhen4bCJ%2B3lnOBInF7sQ3WMKifct14NQOOB0jVMNflMOqJi8QGOqUBpNtG7hfrK5nynm%2BTy9k1yuknjZwmyI1VUJxWOpyI8fTnwTzAKIk%2BkJt4PIiZCfjyykmoZqIgAh1eZqaJKZGs5QiCYMs8ok%2B770pqzINA8snmTnv1qOp2P5YIqaAfd9BGmUZij0kZe93osIy8LCIxrxF2CSO%2BlJz7zO4PmEfjfa0Ajq8SD%2ByVt6SxXPCKdM%2FNxBhvZy4jfeDt88%2Bs5dUk2RT5M146&X-Amz-Signature=3848ddb74716ca3369cf9df771b83d39c18c74c26965c9e7e5aaf4e5d5241c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56IY4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDuBFayZT7zClylZS%2FXyymEw5XbJdkGwPily5RY%2F5So8gIgS8R85XP2xUdu7ECWBDAXAiG4oKFzFyEVRB0%2Fn3TnaY0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOI%2FdK9V2sHGMaxTiircA%2BnpKdeymDK%2BwRUEBW5cVGg%2BCAysR3Vprla6JzQlw2IqEf8WGH4F5nj%2BzjzMNkdt5KYSDwuSZdgQ30NRY2go9XYmfSJO8%2B%2FqRowS1GqZfL7giWRCUN3FIPHQls0Bbb5a4YksFJHv2%2FAQndfcaz6u0FqbiY4ahcbVb6XJgX7Qgr0ebV43ztUEM24M22eS6T4FD9OyWysks6LqZLJ05CPV6SpqDFX0lcGxkWegfevsie2MfZGQaC2AefHY8rEBTVn7QRn4Fz3VdRZP9hhtZnjZ9JyqgkAjUFWE2zaRp%2B7dpPMpEaXeCU1Q%2BKU846bXbPouU3fIkKnXJoai7IC2WZBeQVUgJnKk6NHMlVUAFBEzmzWwjKNu9Hdl%2B5PyC3vixcQd6bcEIxszEuC5njpQMg0Yg%2Bm9mRWIVyi0FTEgugkpFtRyU0PPrTDGud4CalFfGjQmbUjym7eSTiyuwubPDK6Y0H%2BXznR9A2jdhLIquKEofotN5QaEOI9IPG2KZufYiuXmsyBLyzs6tBJwFyaHqJLrmXjSIVsUkFyz2ZniMloVozyJhQR9UUlkjijmGiGV%2Fv%2F7wH5hqtCPZtUyrpl1bvU0lxDoRfEjS7J7uAIeAYQ5b%2FAWDu8tpeHYatfV8%2BZ3MJ6Ki8QGOqUBJjU%2ByWRVszn%2FREX9awULjC3iFFMDTXTG0N9oqXOkPUcHCFsFYQSLaSm7Kwyp7RR3uT7IG1ZcJiurdrQXnlma8lKHBBfTx29LFQKX%2FA7%2BVctMTAiXxzVBKNa7e%2BcqCTxUyJHYGJvtiwhraUS6xVr8D1A%2FZjAgIi2hU4H53w6ecqPOmPwnmNIXTAra9Y8XDj%2Fu1GT%2FmXy4x83Z5kWRJ7wXl2KPzM8O&X-Amz-Signature=2b6a954c4f9a158153b3b0159c55c1319d98135228da66e9156e4828a93da6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZI736P%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDx9unT0JcD%2FD9Ih1tsYS80HJgBPLKfOlsTlTFytA1GAiEA4VgdyJwQ%2FaWgTbN%2FAUhjhDHIqTVq1lkBPgsRzE6ruZkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCa9YnEsDSunecUUlyrcA4RCwUA9OwV2A1tArG8wUdhJ9AG7LPQpCjfmwvTk1CZuI%2FhaxmBHF%2FHD8vlgouBwPPjNjkWQuzNlm6%2FCRPV9Q8N4BvUlKXDE5ZtAeKmoExYR8v%2FDKXesVTINDWxKyKRYHS27SLVC%2BFJt2lkLEdCC0ysFf8CSpXSTLsWFOOOFJFaaL9radYQaR5DBZLnWMM9vGam7eIztTuzJ%2BUTXd2v63IJT0ma8n4eiGzB68mISRI%2FB5sGcfTqGSqc5nJ%2B0IqdXeusKvE%2BfiyzhaWBitxDWHtrOzJR3CxNRB%2B1vg%2BKjsWyxiOvYXeGfn%2FQUeF7yLv4x8QWvbRKXsUtgn0vqeRbSIG4PrLTsicmv%2BVvHu7QcyGCBHax0hI%2B%2FgfgGgVPXe%2B5xxuotF%2FmPLYDgL2OUBNZwWjcM5jlCAKB4N91jNCaSA1orwBWaz8tr8GrVt62253kQsiHoiUJ2ho9cdgOBiDDr5RHLqxQ1OR9CU38YfDLZjrO%2BwrK85EalDs55vu1RQY7hVbowe6HqqtDX7HNZnt20TN3uNdO6CU3P2y0hvPWAOdUmfWyeadys%2FzC4EsPoCXKjF22MvzMjJzWWd%2FKIFMR25BHnhCZAE7CREDOu3EUiXMVo0ydNqNXo8dN5BRtJMLaKi8QGOqUBAl5qeniFwhYD4c4jz%2FzzvJ%2FShz3tYPUs1OrKMNudWipEOHr3hPtpzWXMd%2BpIfEUYExK1RAYomNb8y9Z9D8E5yLCPxbOpw7gYYca5hPMjpMJ1Umc8vXmu8K2OuSIPmo8jTqBDcjczYJMHY4HiLSxZSdZvOpeatL2Qs46SXM3QL7Uli%2BQ1b9BE%2BkW8Yerte7ZzxcczwDlrDnNETSfTNg64L5uYjICv&X-Amz-Signature=90f9fbd6491fedd47973f8c6de603be1f2807abd8069a021cbb453bf007d9d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZI736P%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDx9unT0JcD%2FD9Ih1tsYS80HJgBPLKfOlsTlTFytA1GAiEA4VgdyJwQ%2FaWgTbN%2FAUhjhDHIqTVq1lkBPgsRzE6ruZkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCa9YnEsDSunecUUlyrcA4RCwUA9OwV2A1tArG8wUdhJ9AG7LPQpCjfmwvTk1CZuI%2FhaxmBHF%2FHD8vlgouBwPPjNjkWQuzNlm6%2FCRPV9Q8N4BvUlKXDE5ZtAeKmoExYR8v%2FDKXesVTINDWxKyKRYHS27SLVC%2BFJt2lkLEdCC0ysFf8CSpXSTLsWFOOOFJFaaL9radYQaR5DBZLnWMM9vGam7eIztTuzJ%2BUTXd2v63IJT0ma8n4eiGzB68mISRI%2FB5sGcfTqGSqc5nJ%2B0IqdXeusKvE%2BfiyzhaWBitxDWHtrOzJR3CxNRB%2B1vg%2BKjsWyxiOvYXeGfn%2FQUeF7yLv4x8QWvbRKXsUtgn0vqeRbSIG4PrLTsicmv%2BVvHu7QcyGCBHax0hI%2B%2FgfgGgVPXe%2B5xxuotF%2FmPLYDgL2OUBNZwWjcM5jlCAKB4N91jNCaSA1orwBWaz8tr8GrVt62253kQsiHoiUJ2ho9cdgOBiDDr5RHLqxQ1OR9CU38YfDLZjrO%2BwrK85EalDs55vu1RQY7hVbowe6HqqtDX7HNZnt20TN3uNdO6CU3P2y0hvPWAOdUmfWyeadys%2FzC4EsPoCXKjF22MvzMjJzWWd%2FKIFMR25BHnhCZAE7CREDOu3EUiXMVo0ydNqNXo8dN5BRtJMLaKi8QGOqUBAl5qeniFwhYD4c4jz%2FzzvJ%2FShz3tYPUs1OrKMNudWipEOHr3hPtpzWXMd%2BpIfEUYExK1RAYomNb8y9Z9D8E5yLCPxbOpw7gYYca5hPMjpMJ1Umc8vXmu8K2OuSIPmo8jTqBDcjczYJMHY4HiLSxZSdZvOpeatL2Qs46SXM3QL7Uli%2BQ1b9BE%2BkW8Yerte7ZzxcczwDlrDnNETSfTNg64L5uYjICv&X-Amz-Signature=12f8ce173144b264118bd419e29c9cf35653323f00a8454d946bc4e51886f614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZI736P%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDx9unT0JcD%2FD9Ih1tsYS80HJgBPLKfOlsTlTFytA1GAiEA4VgdyJwQ%2FaWgTbN%2FAUhjhDHIqTVq1lkBPgsRzE6ruZkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCa9YnEsDSunecUUlyrcA4RCwUA9OwV2A1tArG8wUdhJ9AG7LPQpCjfmwvTk1CZuI%2FhaxmBHF%2FHD8vlgouBwPPjNjkWQuzNlm6%2FCRPV9Q8N4BvUlKXDE5ZtAeKmoExYR8v%2FDKXesVTINDWxKyKRYHS27SLVC%2BFJt2lkLEdCC0ysFf8CSpXSTLsWFOOOFJFaaL9radYQaR5DBZLnWMM9vGam7eIztTuzJ%2BUTXd2v63IJT0ma8n4eiGzB68mISRI%2FB5sGcfTqGSqc5nJ%2B0IqdXeusKvE%2BfiyzhaWBitxDWHtrOzJR3CxNRB%2B1vg%2BKjsWyxiOvYXeGfn%2FQUeF7yLv4x8QWvbRKXsUtgn0vqeRbSIG4PrLTsicmv%2BVvHu7QcyGCBHax0hI%2B%2FgfgGgVPXe%2B5xxuotF%2FmPLYDgL2OUBNZwWjcM5jlCAKB4N91jNCaSA1orwBWaz8tr8GrVt62253kQsiHoiUJ2ho9cdgOBiDDr5RHLqxQ1OR9CU38YfDLZjrO%2BwrK85EalDs55vu1RQY7hVbowe6HqqtDX7HNZnt20TN3uNdO6CU3P2y0hvPWAOdUmfWyeadys%2FzC4EsPoCXKjF22MvzMjJzWWd%2FKIFMR25BHnhCZAE7CREDOu3EUiXMVo0ydNqNXo8dN5BRtJMLaKi8QGOqUBAl5qeniFwhYD4c4jz%2FzzvJ%2FShz3tYPUs1OrKMNudWipEOHr3hPtpzWXMd%2BpIfEUYExK1RAYomNb8y9Z9D8E5yLCPxbOpw7gYYca5hPMjpMJ1Umc8vXmu8K2OuSIPmo8jTqBDcjczYJMHY4HiLSxZSdZvOpeatL2Qs46SXM3QL7Uli%2BQ1b9BE%2BkW8Yerte7ZzxcczwDlrDnNETSfTNg64L5uYjICv&X-Amz-Signature=f138e1fdfd942aa4534e5070b5f910b8c4de165949cfaad1f08057451f160cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZI736P%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDx9unT0JcD%2FD9Ih1tsYS80HJgBPLKfOlsTlTFytA1GAiEA4VgdyJwQ%2FaWgTbN%2FAUhjhDHIqTVq1lkBPgsRzE6ruZkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCa9YnEsDSunecUUlyrcA4RCwUA9OwV2A1tArG8wUdhJ9AG7LPQpCjfmwvTk1CZuI%2FhaxmBHF%2FHD8vlgouBwPPjNjkWQuzNlm6%2FCRPV9Q8N4BvUlKXDE5ZtAeKmoExYR8v%2FDKXesVTINDWxKyKRYHS27SLVC%2BFJt2lkLEdCC0ysFf8CSpXSTLsWFOOOFJFaaL9radYQaR5DBZLnWMM9vGam7eIztTuzJ%2BUTXd2v63IJT0ma8n4eiGzB68mISRI%2FB5sGcfTqGSqc5nJ%2B0IqdXeusKvE%2BfiyzhaWBitxDWHtrOzJR3CxNRB%2B1vg%2BKjsWyxiOvYXeGfn%2FQUeF7yLv4x8QWvbRKXsUtgn0vqeRbSIG4PrLTsicmv%2BVvHu7QcyGCBHax0hI%2B%2FgfgGgVPXe%2B5xxuotF%2FmPLYDgL2OUBNZwWjcM5jlCAKB4N91jNCaSA1orwBWaz8tr8GrVt62253kQsiHoiUJ2ho9cdgOBiDDr5RHLqxQ1OR9CU38YfDLZjrO%2BwrK85EalDs55vu1RQY7hVbowe6HqqtDX7HNZnt20TN3uNdO6CU3P2y0hvPWAOdUmfWyeadys%2FzC4EsPoCXKjF22MvzMjJzWWd%2FKIFMR25BHnhCZAE7CREDOu3EUiXMVo0ydNqNXo8dN5BRtJMLaKi8QGOqUBAl5qeniFwhYD4c4jz%2FzzvJ%2FShz3tYPUs1OrKMNudWipEOHr3hPtpzWXMd%2BpIfEUYExK1RAYomNb8y9Z9D8E5yLCPxbOpw7gYYca5hPMjpMJ1Umc8vXmu8K2OuSIPmo8jTqBDcjczYJMHY4HiLSxZSdZvOpeatL2Qs46SXM3QL7Uli%2BQ1b9BE%2BkW8Yerte7ZzxcczwDlrDnNETSfTNg64L5uYjICv&X-Amz-Signature=10fd23a79ade1ca6e9455a1cc8a8fd3ab4043692cf2caecd01967ce9e1726f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZI736P%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDx9unT0JcD%2FD9Ih1tsYS80HJgBPLKfOlsTlTFytA1GAiEA4VgdyJwQ%2FaWgTbN%2FAUhjhDHIqTVq1lkBPgsRzE6ruZkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCa9YnEsDSunecUUlyrcA4RCwUA9OwV2A1tArG8wUdhJ9AG7LPQpCjfmwvTk1CZuI%2FhaxmBHF%2FHD8vlgouBwPPjNjkWQuzNlm6%2FCRPV9Q8N4BvUlKXDE5ZtAeKmoExYR8v%2FDKXesVTINDWxKyKRYHS27SLVC%2BFJt2lkLEdCC0ysFf8CSpXSTLsWFOOOFJFaaL9radYQaR5DBZLnWMM9vGam7eIztTuzJ%2BUTXd2v63IJT0ma8n4eiGzB68mISRI%2FB5sGcfTqGSqc5nJ%2B0IqdXeusKvE%2BfiyzhaWBitxDWHtrOzJR3CxNRB%2B1vg%2BKjsWyxiOvYXeGfn%2FQUeF7yLv4x8QWvbRKXsUtgn0vqeRbSIG4PrLTsicmv%2BVvHu7QcyGCBHax0hI%2B%2FgfgGgVPXe%2B5xxuotF%2FmPLYDgL2OUBNZwWjcM5jlCAKB4N91jNCaSA1orwBWaz8tr8GrVt62253kQsiHoiUJ2ho9cdgOBiDDr5RHLqxQ1OR9CU38YfDLZjrO%2BwrK85EalDs55vu1RQY7hVbowe6HqqtDX7HNZnt20TN3uNdO6CU3P2y0hvPWAOdUmfWyeadys%2FzC4EsPoCXKjF22MvzMjJzWWd%2FKIFMR25BHnhCZAE7CREDOu3EUiXMVo0ydNqNXo8dN5BRtJMLaKi8QGOqUBAl5qeniFwhYD4c4jz%2FzzvJ%2FShz3tYPUs1OrKMNudWipEOHr3hPtpzWXMd%2BpIfEUYExK1RAYomNb8y9Z9D8E5yLCPxbOpw7gYYca5hPMjpMJ1Umc8vXmu8K2OuSIPmo8jTqBDcjczYJMHY4HiLSxZSdZvOpeatL2Qs46SXM3QL7Uli%2BQ1b9BE%2BkW8Yerte7ZzxcczwDlrDnNETSfTNg64L5uYjICv&X-Amz-Signature=e0196ae59d3662db74accea54138c0b25e503404e7ab84bde70457298c2550ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZI736P%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDx9unT0JcD%2FD9Ih1tsYS80HJgBPLKfOlsTlTFytA1GAiEA4VgdyJwQ%2FaWgTbN%2FAUhjhDHIqTVq1lkBPgsRzE6ruZkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCa9YnEsDSunecUUlyrcA4RCwUA9OwV2A1tArG8wUdhJ9AG7LPQpCjfmwvTk1CZuI%2FhaxmBHF%2FHD8vlgouBwPPjNjkWQuzNlm6%2FCRPV9Q8N4BvUlKXDE5ZtAeKmoExYR8v%2FDKXesVTINDWxKyKRYHS27SLVC%2BFJt2lkLEdCC0ysFf8CSpXSTLsWFOOOFJFaaL9radYQaR5DBZLnWMM9vGam7eIztTuzJ%2BUTXd2v63IJT0ma8n4eiGzB68mISRI%2FB5sGcfTqGSqc5nJ%2B0IqdXeusKvE%2BfiyzhaWBitxDWHtrOzJR3CxNRB%2B1vg%2BKjsWyxiOvYXeGfn%2FQUeF7yLv4x8QWvbRKXsUtgn0vqeRbSIG4PrLTsicmv%2BVvHu7QcyGCBHax0hI%2B%2FgfgGgVPXe%2B5xxuotF%2FmPLYDgL2OUBNZwWjcM5jlCAKB4N91jNCaSA1orwBWaz8tr8GrVt62253kQsiHoiUJ2ho9cdgOBiDDr5RHLqxQ1OR9CU38YfDLZjrO%2BwrK85EalDs55vu1RQY7hVbowe6HqqtDX7HNZnt20TN3uNdO6CU3P2y0hvPWAOdUmfWyeadys%2FzC4EsPoCXKjF22MvzMjJzWWd%2FKIFMR25BHnhCZAE7CREDOu3EUiXMVo0ydNqNXo8dN5BRtJMLaKi8QGOqUBAl5qeniFwhYD4c4jz%2FzzvJ%2FShz3tYPUs1OrKMNudWipEOHr3hPtpzWXMd%2BpIfEUYExK1RAYomNb8y9Z9D8E5yLCPxbOpw7gYYca5hPMjpMJ1Umc8vXmu8K2OuSIPmo8jTqBDcjczYJMHY4HiLSxZSdZvOpeatL2Qs46SXM3QL7Uli%2BQ1b9BE%2BkW8Yerte7ZzxcczwDlrDnNETSfTNg64L5uYjICv&X-Amz-Signature=3e2c71c303e9c391ce6a8c183f395b5173327d21f9ff4ee7d0599c8710fb2193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZI736P%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDx9unT0JcD%2FD9Ih1tsYS80HJgBPLKfOlsTlTFytA1GAiEA4VgdyJwQ%2FaWgTbN%2FAUhjhDHIqTVq1lkBPgsRzE6ruZkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCa9YnEsDSunecUUlyrcA4RCwUA9OwV2A1tArG8wUdhJ9AG7LPQpCjfmwvTk1CZuI%2FhaxmBHF%2FHD8vlgouBwPPjNjkWQuzNlm6%2FCRPV9Q8N4BvUlKXDE5ZtAeKmoExYR8v%2FDKXesVTINDWxKyKRYHS27SLVC%2BFJt2lkLEdCC0ysFf8CSpXSTLsWFOOOFJFaaL9radYQaR5DBZLnWMM9vGam7eIztTuzJ%2BUTXd2v63IJT0ma8n4eiGzB68mISRI%2FB5sGcfTqGSqc5nJ%2B0IqdXeusKvE%2BfiyzhaWBitxDWHtrOzJR3CxNRB%2B1vg%2BKjsWyxiOvYXeGfn%2FQUeF7yLv4x8QWvbRKXsUtgn0vqeRbSIG4PrLTsicmv%2BVvHu7QcyGCBHax0hI%2B%2FgfgGgVPXe%2B5xxuotF%2FmPLYDgL2OUBNZwWjcM5jlCAKB4N91jNCaSA1orwBWaz8tr8GrVt62253kQsiHoiUJ2ho9cdgOBiDDr5RHLqxQ1OR9CU38YfDLZjrO%2BwrK85EalDs55vu1RQY7hVbowe6HqqtDX7HNZnt20TN3uNdO6CU3P2y0hvPWAOdUmfWyeadys%2FzC4EsPoCXKjF22MvzMjJzWWd%2FKIFMR25BHnhCZAE7CREDOu3EUiXMVo0ydNqNXo8dN5BRtJMLaKi8QGOqUBAl5qeniFwhYD4c4jz%2FzzvJ%2FShz3tYPUs1OrKMNudWipEOHr3hPtpzWXMd%2BpIfEUYExK1RAYomNb8y9Z9D8E5yLCPxbOpw7gYYca5hPMjpMJ1Umc8vXmu8K2OuSIPmo8jTqBDcjczYJMHY4HiLSxZSdZvOpeatL2Qs46SXM3QL7Uli%2BQ1b9BE%2BkW8Yerte7ZzxcczwDlrDnNETSfTNg64L5uYjICv&X-Amz-Signature=06c36bec19e812862962ba936c61ad9eaca2f0f53c981d12daa18007ff098030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
