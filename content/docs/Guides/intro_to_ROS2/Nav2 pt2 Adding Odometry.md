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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWTSVGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNpVcvHoreFsdaqEjJnp1pNuj%2BZqNjYqpSviR4ba1PUAiBMn2i3a7JA7IqfMhVVRuYnYFEopLpoCRoUA02G2R%2Fekir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMeMeMgSDU0Ws8d0e2KtwDITWjUAU9CkNNX6AuBWxNSRr0%2FhZ%2FHOjyPuIeN4P0mNb1HSjk8dCetjlm7pGa8SGslqhrlZTeQgXZnHNUUHTJ3hrJohzDciJloP7%2BX5cjYjGWXeDRXpR4NJozv%2FWTlldNsbls%2FMxfDEbnKBWxU%2Fj4D1E2Hff2pBR6GrBRON17izmKCrewtciMWRf%2BSQjCEX4i4t%2FwAvxKGTPqPAIPyArbXTb55nAh7gKnTtpr8o7rP48zTYOrBHfGL%2F9VwNcHGfUmXklffM9JFE48U6PK5hg8StmSuv2q4cL3CwuCbbRkhgNtfCpCWGvqW9%2F7u2JljRdwTgTde0YMKd8h%2FMepw%2Bo2AVjPx78aVfiL5Qkn%2BbrdKNRwKJx5lr43Rgg9M%2F0WTpU3MaUrVJ%2FNq2A2jyLil3IhT5xQzAkgaOTUcGZUZMY0GQGlZ22lQuNsGq9igNIz4nDiRAct7i8Cuds3sLJcFvXhyxxX9lPJlNgK8zXbYl0eIuPPswM79Zt7rt5Mv2awO0JLuRs7vUG1HsGg8oelrZ9wNsMikOs6kcD%2BJvQYKqn9FfGY2Alv%2BJK4CcjInN%2BN2fr%2BiAKyBYU3dyVr5HRE7wLKHjztLld2Kf0mqUHw0FwMJKsMuy5j5g4x7gV7GhQwpNm%2BxAY6pgEQS07WU2mZwYyXk4bZvoyUkVrGe3iKu6PZXI8XQ3raHpUBkjOz4%2F%2Fg61zv9zE7AvroZ3Osnw0YHcn%2BVBCSIqNs4x4Eu2TR%2Bi0XQC7xWns%2F8ETTYoWmPI5jLSGXkg8zPZH7JtxK9gULtM9yCuL%2BWomi8bmzypBeLhhMiENMSbFgQvKQgQ2KgCXn3PpWSbw80QGgH%2BCL0DSRZr5%2BwymaxUIQpKOGXjzk&X-Amz-Signature=388d3b477442384062a3ac6db57e7b2b3258a1a22171abdb4240e6c4d79dca07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWTSVGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNpVcvHoreFsdaqEjJnp1pNuj%2BZqNjYqpSviR4ba1PUAiBMn2i3a7JA7IqfMhVVRuYnYFEopLpoCRoUA02G2R%2Fekir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMeMeMgSDU0Ws8d0e2KtwDITWjUAU9CkNNX6AuBWxNSRr0%2FhZ%2FHOjyPuIeN4P0mNb1HSjk8dCetjlm7pGa8SGslqhrlZTeQgXZnHNUUHTJ3hrJohzDciJloP7%2BX5cjYjGWXeDRXpR4NJozv%2FWTlldNsbls%2FMxfDEbnKBWxU%2Fj4D1E2Hff2pBR6GrBRON17izmKCrewtciMWRf%2BSQjCEX4i4t%2FwAvxKGTPqPAIPyArbXTb55nAh7gKnTtpr8o7rP48zTYOrBHfGL%2F9VwNcHGfUmXklffM9JFE48U6PK5hg8StmSuv2q4cL3CwuCbbRkhgNtfCpCWGvqW9%2F7u2JljRdwTgTde0YMKd8h%2FMepw%2Bo2AVjPx78aVfiL5Qkn%2BbrdKNRwKJx5lr43Rgg9M%2F0WTpU3MaUrVJ%2FNq2A2jyLil3IhT5xQzAkgaOTUcGZUZMY0GQGlZ22lQuNsGq9igNIz4nDiRAct7i8Cuds3sLJcFvXhyxxX9lPJlNgK8zXbYl0eIuPPswM79Zt7rt5Mv2awO0JLuRs7vUG1HsGg8oelrZ9wNsMikOs6kcD%2BJvQYKqn9FfGY2Alv%2BJK4CcjInN%2BN2fr%2BiAKyBYU3dyVr5HRE7wLKHjztLld2Kf0mqUHw0FwMJKsMuy5j5g4x7gV7GhQwpNm%2BxAY6pgEQS07WU2mZwYyXk4bZvoyUkVrGe3iKu6PZXI8XQ3raHpUBkjOz4%2F%2Fg61zv9zE7AvroZ3Osnw0YHcn%2BVBCSIqNs4x4Eu2TR%2Bi0XQC7xWns%2F8ETTYoWmPI5jLSGXkg8zPZH7JtxK9gULtM9yCuL%2BWomi8bmzypBeLhhMiENMSbFgQvKQgQ2KgCXn3PpWSbw80QGgH%2BCL0DSRZr5%2BwymaxUIQpKOGXjzk&X-Amz-Signature=d7fe1893fd8fb01bd22e01b7f8d9391b60c49cd0ba27a836e9d0409161fa2db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWTSVGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNpVcvHoreFsdaqEjJnp1pNuj%2BZqNjYqpSviR4ba1PUAiBMn2i3a7JA7IqfMhVVRuYnYFEopLpoCRoUA02G2R%2Fekir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMeMeMgSDU0Ws8d0e2KtwDITWjUAU9CkNNX6AuBWxNSRr0%2FhZ%2FHOjyPuIeN4P0mNb1HSjk8dCetjlm7pGa8SGslqhrlZTeQgXZnHNUUHTJ3hrJohzDciJloP7%2BX5cjYjGWXeDRXpR4NJozv%2FWTlldNsbls%2FMxfDEbnKBWxU%2Fj4D1E2Hff2pBR6GrBRON17izmKCrewtciMWRf%2BSQjCEX4i4t%2FwAvxKGTPqPAIPyArbXTb55nAh7gKnTtpr8o7rP48zTYOrBHfGL%2F9VwNcHGfUmXklffM9JFE48U6PK5hg8StmSuv2q4cL3CwuCbbRkhgNtfCpCWGvqW9%2F7u2JljRdwTgTde0YMKd8h%2FMepw%2Bo2AVjPx78aVfiL5Qkn%2BbrdKNRwKJx5lr43Rgg9M%2F0WTpU3MaUrVJ%2FNq2A2jyLil3IhT5xQzAkgaOTUcGZUZMY0GQGlZ22lQuNsGq9igNIz4nDiRAct7i8Cuds3sLJcFvXhyxxX9lPJlNgK8zXbYl0eIuPPswM79Zt7rt5Mv2awO0JLuRs7vUG1HsGg8oelrZ9wNsMikOs6kcD%2BJvQYKqn9FfGY2Alv%2BJK4CcjInN%2BN2fr%2BiAKyBYU3dyVr5HRE7wLKHjztLld2Kf0mqUHw0FwMJKsMuy5j5g4x7gV7GhQwpNm%2BxAY6pgEQS07WU2mZwYyXk4bZvoyUkVrGe3iKu6PZXI8XQ3raHpUBkjOz4%2F%2Fg61zv9zE7AvroZ3Osnw0YHcn%2BVBCSIqNs4x4Eu2TR%2Bi0XQC7xWns%2F8ETTYoWmPI5jLSGXkg8zPZH7JtxK9gULtM9yCuL%2BWomi8bmzypBeLhhMiENMSbFgQvKQgQ2KgCXn3PpWSbw80QGgH%2BCL0DSRZr5%2BwymaxUIQpKOGXjzk&X-Amz-Signature=f2434daf3850bd98819f62e5234428bcb83e3c5291aa5d7f5cb5bbd76207dfcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWTSVGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNpVcvHoreFsdaqEjJnp1pNuj%2BZqNjYqpSviR4ba1PUAiBMn2i3a7JA7IqfMhVVRuYnYFEopLpoCRoUA02G2R%2Fekir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMeMeMgSDU0Ws8d0e2KtwDITWjUAU9CkNNX6AuBWxNSRr0%2FhZ%2FHOjyPuIeN4P0mNb1HSjk8dCetjlm7pGa8SGslqhrlZTeQgXZnHNUUHTJ3hrJohzDciJloP7%2BX5cjYjGWXeDRXpR4NJozv%2FWTlldNsbls%2FMxfDEbnKBWxU%2Fj4D1E2Hff2pBR6GrBRON17izmKCrewtciMWRf%2BSQjCEX4i4t%2FwAvxKGTPqPAIPyArbXTb55nAh7gKnTtpr8o7rP48zTYOrBHfGL%2F9VwNcHGfUmXklffM9JFE48U6PK5hg8StmSuv2q4cL3CwuCbbRkhgNtfCpCWGvqW9%2F7u2JljRdwTgTde0YMKd8h%2FMepw%2Bo2AVjPx78aVfiL5Qkn%2BbrdKNRwKJx5lr43Rgg9M%2F0WTpU3MaUrVJ%2FNq2A2jyLil3IhT5xQzAkgaOTUcGZUZMY0GQGlZ22lQuNsGq9igNIz4nDiRAct7i8Cuds3sLJcFvXhyxxX9lPJlNgK8zXbYl0eIuPPswM79Zt7rt5Mv2awO0JLuRs7vUG1HsGg8oelrZ9wNsMikOs6kcD%2BJvQYKqn9FfGY2Alv%2BJK4CcjInN%2BN2fr%2BiAKyBYU3dyVr5HRE7wLKHjztLld2Kf0mqUHw0FwMJKsMuy5j5g4x7gV7GhQwpNm%2BxAY6pgEQS07WU2mZwYyXk4bZvoyUkVrGe3iKu6PZXI8XQ3raHpUBkjOz4%2F%2Fg61zv9zE7AvroZ3Osnw0YHcn%2BVBCSIqNs4x4Eu2TR%2Bi0XQC7xWns%2F8ETTYoWmPI5jLSGXkg8zPZH7JtxK9gULtM9yCuL%2BWomi8bmzypBeLhhMiENMSbFgQvKQgQ2KgCXn3PpWSbw80QGgH%2BCL0DSRZr5%2BwymaxUIQpKOGXjzk&X-Amz-Signature=548057ef2915db02aa3dee6488cf6b25545195816a079690f5a215e4502b02a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWTSVGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNpVcvHoreFsdaqEjJnp1pNuj%2BZqNjYqpSviR4ba1PUAiBMn2i3a7JA7IqfMhVVRuYnYFEopLpoCRoUA02G2R%2Fekir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMeMeMgSDU0Ws8d0e2KtwDITWjUAU9CkNNX6AuBWxNSRr0%2FhZ%2FHOjyPuIeN4P0mNb1HSjk8dCetjlm7pGa8SGslqhrlZTeQgXZnHNUUHTJ3hrJohzDciJloP7%2BX5cjYjGWXeDRXpR4NJozv%2FWTlldNsbls%2FMxfDEbnKBWxU%2Fj4D1E2Hff2pBR6GrBRON17izmKCrewtciMWRf%2BSQjCEX4i4t%2FwAvxKGTPqPAIPyArbXTb55nAh7gKnTtpr8o7rP48zTYOrBHfGL%2F9VwNcHGfUmXklffM9JFE48U6PK5hg8StmSuv2q4cL3CwuCbbRkhgNtfCpCWGvqW9%2F7u2JljRdwTgTde0YMKd8h%2FMepw%2Bo2AVjPx78aVfiL5Qkn%2BbrdKNRwKJx5lr43Rgg9M%2F0WTpU3MaUrVJ%2FNq2A2jyLil3IhT5xQzAkgaOTUcGZUZMY0GQGlZ22lQuNsGq9igNIz4nDiRAct7i8Cuds3sLJcFvXhyxxX9lPJlNgK8zXbYl0eIuPPswM79Zt7rt5Mv2awO0JLuRs7vUG1HsGg8oelrZ9wNsMikOs6kcD%2BJvQYKqn9FfGY2Alv%2BJK4CcjInN%2BN2fr%2BiAKyBYU3dyVr5HRE7wLKHjztLld2Kf0mqUHw0FwMJKsMuy5j5g4x7gV7GhQwpNm%2BxAY6pgEQS07WU2mZwYyXk4bZvoyUkVrGe3iKu6PZXI8XQ3raHpUBkjOz4%2F%2Fg61zv9zE7AvroZ3Osnw0YHcn%2BVBCSIqNs4x4Eu2TR%2Bi0XQC7xWns%2F8ETTYoWmPI5jLSGXkg8zPZH7JtxK9gULtM9yCuL%2BWomi8bmzypBeLhhMiENMSbFgQvKQgQ2KgCXn3PpWSbw80QGgH%2BCL0DSRZr5%2BwymaxUIQpKOGXjzk&X-Amz-Signature=cd9060622a965c8e74db8ce75933a0488d483063c70e1e2fcccded99ff1ad598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWTSVGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNpVcvHoreFsdaqEjJnp1pNuj%2BZqNjYqpSviR4ba1PUAiBMn2i3a7JA7IqfMhVVRuYnYFEopLpoCRoUA02G2R%2Fekir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMeMeMgSDU0Ws8d0e2KtwDITWjUAU9CkNNX6AuBWxNSRr0%2FhZ%2FHOjyPuIeN4P0mNb1HSjk8dCetjlm7pGa8SGslqhrlZTeQgXZnHNUUHTJ3hrJohzDciJloP7%2BX5cjYjGWXeDRXpR4NJozv%2FWTlldNsbls%2FMxfDEbnKBWxU%2Fj4D1E2Hff2pBR6GrBRON17izmKCrewtciMWRf%2BSQjCEX4i4t%2FwAvxKGTPqPAIPyArbXTb55nAh7gKnTtpr8o7rP48zTYOrBHfGL%2F9VwNcHGfUmXklffM9JFE48U6PK5hg8StmSuv2q4cL3CwuCbbRkhgNtfCpCWGvqW9%2F7u2JljRdwTgTde0YMKd8h%2FMepw%2Bo2AVjPx78aVfiL5Qkn%2BbrdKNRwKJx5lr43Rgg9M%2F0WTpU3MaUrVJ%2FNq2A2jyLil3IhT5xQzAkgaOTUcGZUZMY0GQGlZ22lQuNsGq9igNIz4nDiRAct7i8Cuds3sLJcFvXhyxxX9lPJlNgK8zXbYl0eIuPPswM79Zt7rt5Mv2awO0JLuRs7vUG1HsGg8oelrZ9wNsMikOs6kcD%2BJvQYKqn9FfGY2Alv%2BJK4CcjInN%2BN2fr%2BiAKyBYU3dyVr5HRE7wLKHjztLld2Kf0mqUHw0FwMJKsMuy5j5g4x7gV7GhQwpNm%2BxAY6pgEQS07WU2mZwYyXk4bZvoyUkVrGe3iKu6PZXI8XQ3raHpUBkjOz4%2F%2Fg61zv9zE7AvroZ3Osnw0YHcn%2BVBCSIqNs4x4Eu2TR%2Bi0XQC7xWns%2F8ETTYoWmPI5jLSGXkg8zPZH7JtxK9gULtM9yCuL%2BWomi8bmzypBeLhhMiENMSbFgQvKQgQ2KgCXn3PpWSbw80QGgH%2BCL0DSRZr5%2BwymaxUIQpKOGXjzk&X-Amz-Signature=9f8839f29233da07c70c685bdd73734d5b8d0b5b8aa4fef316726ebeb3b03291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWTSVGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNpVcvHoreFsdaqEjJnp1pNuj%2BZqNjYqpSviR4ba1PUAiBMn2i3a7JA7IqfMhVVRuYnYFEopLpoCRoUA02G2R%2Fekir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMeMeMgSDU0Ws8d0e2KtwDITWjUAU9CkNNX6AuBWxNSRr0%2FhZ%2FHOjyPuIeN4P0mNb1HSjk8dCetjlm7pGa8SGslqhrlZTeQgXZnHNUUHTJ3hrJohzDciJloP7%2BX5cjYjGWXeDRXpR4NJozv%2FWTlldNsbls%2FMxfDEbnKBWxU%2Fj4D1E2Hff2pBR6GrBRON17izmKCrewtciMWRf%2BSQjCEX4i4t%2FwAvxKGTPqPAIPyArbXTb55nAh7gKnTtpr8o7rP48zTYOrBHfGL%2F9VwNcHGfUmXklffM9JFE48U6PK5hg8StmSuv2q4cL3CwuCbbRkhgNtfCpCWGvqW9%2F7u2JljRdwTgTde0YMKd8h%2FMepw%2Bo2AVjPx78aVfiL5Qkn%2BbrdKNRwKJx5lr43Rgg9M%2F0WTpU3MaUrVJ%2FNq2A2jyLil3IhT5xQzAkgaOTUcGZUZMY0GQGlZ22lQuNsGq9igNIz4nDiRAct7i8Cuds3sLJcFvXhyxxX9lPJlNgK8zXbYl0eIuPPswM79Zt7rt5Mv2awO0JLuRs7vUG1HsGg8oelrZ9wNsMikOs6kcD%2BJvQYKqn9FfGY2Alv%2BJK4CcjInN%2BN2fr%2BiAKyBYU3dyVr5HRE7wLKHjztLld2Kf0mqUHw0FwMJKsMuy5j5g4x7gV7GhQwpNm%2BxAY6pgEQS07WU2mZwYyXk4bZvoyUkVrGe3iKu6PZXI8XQ3raHpUBkjOz4%2F%2Fg61zv9zE7AvroZ3Osnw0YHcn%2BVBCSIqNs4x4Eu2TR%2Bi0XQC7xWns%2F8ETTYoWmPI5jLSGXkg8zPZH7JtxK9gULtM9yCuL%2BWomi8bmzypBeLhhMiENMSbFgQvKQgQ2KgCXn3PpWSbw80QGgH%2BCL0DSRZr5%2BwymaxUIQpKOGXjzk&X-Amz-Signature=d368860e173cebe17dfc28d9f7e9d0ce2d1bb9d35346456674bc344b6157e3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWTSVGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNpVcvHoreFsdaqEjJnp1pNuj%2BZqNjYqpSviR4ba1PUAiBMn2i3a7JA7IqfMhVVRuYnYFEopLpoCRoUA02G2R%2Fekir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMeMeMgSDU0Ws8d0e2KtwDITWjUAU9CkNNX6AuBWxNSRr0%2FhZ%2FHOjyPuIeN4P0mNb1HSjk8dCetjlm7pGa8SGslqhrlZTeQgXZnHNUUHTJ3hrJohzDciJloP7%2BX5cjYjGWXeDRXpR4NJozv%2FWTlldNsbls%2FMxfDEbnKBWxU%2Fj4D1E2Hff2pBR6GrBRON17izmKCrewtciMWRf%2BSQjCEX4i4t%2FwAvxKGTPqPAIPyArbXTb55nAh7gKnTtpr8o7rP48zTYOrBHfGL%2F9VwNcHGfUmXklffM9JFE48U6PK5hg8StmSuv2q4cL3CwuCbbRkhgNtfCpCWGvqW9%2F7u2JljRdwTgTde0YMKd8h%2FMepw%2Bo2AVjPx78aVfiL5Qkn%2BbrdKNRwKJx5lr43Rgg9M%2F0WTpU3MaUrVJ%2FNq2A2jyLil3IhT5xQzAkgaOTUcGZUZMY0GQGlZ22lQuNsGq9igNIz4nDiRAct7i8Cuds3sLJcFvXhyxxX9lPJlNgK8zXbYl0eIuPPswM79Zt7rt5Mv2awO0JLuRs7vUG1HsGg8oelrZ9wNsMikOs6kcD%2BJvQYKqn9FfGY2Alv%2BJK4CcjInN%2BN2fr%2BiAKyBYU3dyVr5HRE7wLKHjztLld2Kf0mqUHw0FwMJKsMuy5j5g4x7gV7GhQwpNm%2BxAY6pgEQS07WU2mZwYyXk4bZvoyUkVrGe3iKu6PZXI8XQ3raHpUBkjOz4%2F%2Fg61zv9zE7AvroZ3Osnw0YHcn%2BVBCSIqNs4x4Eu2TR%2Bi0XQC7xWns%2F8ETTYoWmPI5jLSGXkg8zPZH7JtxK9gULtM9yCuL%2BWomi8bmzypBeLhhMiENMSbFgQvKQgQ2KgCXn3PpWSbw80QGgH%2BCL0DSRZr5%2BwymaxUIQpKOGXjzk&X-Amz-Signature=b92c22314af2de1bc8ec1d941e1eaf1d5d86228e6cea9c87d1ed514c481a241a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWTSVGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNpVcvHoreFsdaqEjJnp1pNuj%2BZqNjYqpSviR4ba1PUAiBMn2i3a7JA7IqfMhVVRuYnYFEopLpoCRoUA02G2R%2Fekir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMeMeMgSDU0Ws8d0e2KtwDITWjUAU9CkNNX6AuBWxNSRr0%2FhZ%2FHOjyPuIeN4P0mNb1HSjk8dCetjlm7pGa8SGslqhrlZTeQgXZnHNUUHTJ3hrJohzDciJloP7%2BX5cjYjGWXeDRXpR4NJozv%2FWTlldNsbls%2FMxfDEbnKBWxU%2Fj4D1E2Hff2pBR6GrBRON17izmKCrewtciMWRf%2BSQjCEX4i4t%2FwAvxKGTPqPAIPyArbXTb55nAh7gKnTtpr8o7rP48zTYOrBHfGL%2F9VwNcHGfUmXklffM9JFE48U6PK5hg8StmSuv2q4cL3CwuCbbRkhgNtfCpCWGvqW9%2F7u2JljRdwTgTde0YMKd8h%2FMepw%2Bo2AVjPx78aVfiL5Qkn%2BbrdKNRwKJx5lr43Rgg9M%2F0WTpU3MaUrVJ%2FNq2A2jyLil3IhT5xQzAkgaOTUcGZUZMY0GQGlZ22lQuNsGq9igNIz4nDiRAct7i8Cuds3sLJcFvXhyxxX9lPJlNgK8zXbYl0eIuPPswM79Zt7rt5Mv2awO0JLuRs7vUG1HsGg8oelrZ9wNsMikOs6kcD%2BJvQYKqn9FfGY2Alv%2BJK4CcjInN%2BN2fr%2BiAKyBYU3dyVr5HRE7wLKHjztLld2Kf0mqUHw0FwMJKsMuy5j5g4x7gV7GhQwpNm%2BxAY6pgEQS07WU2mZwYyXk4bZvoyUkVrGe3iKu6PZXI8XQ3raHpUBkjOz4%2F%2Fg61zv9zE7AvroZ3Osnw0YHcn%2BVBCSIqNs4x4Eu2TR%2Bi0XQC7xWns%2F8ETTYoWmPI5jLSGXkg8zPZH7JtxK9gULtM9yCuL%2BWomi8bmzypBeLhhMiENMSbFgQvKQgQ2KgCXn3PpWSbw80QGgH%2BCL0DSRZr5%2BwymaxUIQpKOGXjzk&X-Amz-Signature=7ee79c3d313f29283a79efbd33d962817cb5dc9063fcd7da4f930374c3e88da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWTSVGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNpVcvHoreFsdaqEjJnp1pNuj%2BZqNjYqpSviR4ba1PUAiBMn2i3a7JA7IqfMhVVRuYnYFEopLpoCRoUA02G2R%2Fekir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMeMeMgSDU0Ws8d0e2KtwDITWjUAU9CkNNX6AuBWxNSRr0%2FhZ%2FHOjyPuIeN4P0mNb1HSjk8dCetjlm7pGa8SGslqhrlZTeQgXZnHNUUHTJ3hrJohzDciJloP7%2BX5cjYjGWXeDRXpR4NJozv%2FWTlldNsbls%2FMxfDEbnKBWxU%2Fj4D1E2Hff2pBR6GrBRON17izmKCrewtciMWRf%2BSQjCEX4i4t%2FwAvxKGTPqPAIPyArbXTb55nAh7gKnTtpr8o7rP48zTYOrBHfGL%2F9VwNcHGfUmXklffM9JFE48U6PK5hg8StmSuv2q4cL3CwuCbbRkhgNtfCpCWGvqW9%2F7u2JljRdwTgTde0YMKd8h%2FMepw%2Bo2AVjPx78aVfiL5Qkn%2BbrdKNRwKJx5lr43Rgg9M%2F0WTpU3MaUrVJ%2FNq2A2jyLil3IhT5xQzAkgaOTUcGZUZMY0GQGlZ22lQuNsGq9igNIz4nDiRAct7i8Cuds3sLJcFvXhyxxX9lPJlNgK8zXbYl0eIuPPswM79Zt7rt5Mv2awO0JLuRs7vUG1HsGg8oelrZ9wNsMikOs6kcD%2BJvQYKqn9FfGY2Alv%2BJK4CcjInN%2BN2fr%2BiAKyBYU3dyVr5HRE7wLKHjztLld2Kf0mqUHw0FwMJKsMuy5j5g4x7gV7GhQwpNm%2BxAY6pgEQS07WU2mZwYyXk4bZvoyUkVrGe3iKu6PZXI8XQ3raHpUBkjOz4%2F%2Fg61zv9zE7AvroZ3Osnw0YHcn%2BVBCSIqNs4x4Eu2TR%2Bi0XQC7xWns%2F8ETTYoWmPI5jLSGXkg8zPZH7JtxK9gULtM9yCuL%2BWomi8bmzypBeLhhMiENMSbFgQvKQgQ2KgCXn3PpWSbw80QGgH%2BCL0DSRZr5%2BwymaxUIQpKOGXjzk&X-Amz-Signature=31157e253680496c65c343e908cd9118afdd0e0cbab879889f1aa0b1368f9baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ5RD5KT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDViXdKjgppXr3iEpzITc%2But5qzUkC1Pzdd%2By7ZxFv5aAiEA0Iho5ooLWcv5uVFSrwe1CZhvUx7ikNrr0J1H5u4b0woq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP280a2%2FuSSbaZaFtyrcA8FRXp%2B76moE5JyhS6%2B5cWozHlHf99zduKJsc6tTHpMcbgIQv2pSWpJQ%2F3B1Vufj0R4DApf6a9zZF9BDl2vpd5GaiEtaniW9YKP6KDFtrpWtfga%2B6rYiF%2FTzrSWitDcFJ3MA%2BqslFSoNMNPlQXL76f%2BNXypBpL%2FDirwTqabqmXMCJoZWqb3efKaaT%2FkNUKmirtfrAVygiaLmhEu6Z2Wat1I%2BiUcRGA1a6QcE0EC%2Fs99LRRFEdK6Qgc2CZjaZS%2F3Pg55HDKeMphvi5jDWcR38c9zIcgCbHU6y%2FHKx4dCEbCmuVqCRvwTtLehbDg35gUgaXNX7q7bzqnEypDbMLgzxdVW5DZmfbGDHEZ0%2Fu5RH2LBM%2BrRyV5CFKJWoZWn62R1vfrpxtd1%2BVa1mYOkr5RVdFvb94yW54IwikyC1sI8FnEsr6dv36LQGiQajDWYQNs8OJMseadSUrLkwsXCv%2FlP1oSvHS2J33zCtYKuzkOu3MRys%2FqaFBJG5uLSHoLe8o5vUKgR1D3GjEzc%2BbwlmH0%2BCsmKBaif%2BPUjHWquKISZptMIftCyXJlKEDWvMqVgweWyCKSAryVz%2FMue6s5MYu1BedM1gS3UOPmCVJLIX3jQPTbGwakwdWSyPoJjO4ynAMIjZvsQGOqUBgb2N0A3dw53wPrMAk6wtI3nMuXsQ9Hc8wwKQ6mBfgzh%2FLPB%2FYzI23KwmykRVTkN8ghX0ofXXayRTa9HX%2BpZkBlca6CSbju1xh7tKatnXg6NitzQairNixUdHRjoWKlllrEFC2ZUx9wtDbZfCUro0WkD5pgdAQq1XBQTCnaZdvM5wkTF0aKQGoD%2BUq8%2FmA45ipzILLmrQy3bTg7uTm4BHI6a9Y%2FUp&X-Amz-Signature=004f215db0aca991b0b7214e1e2e6870cb5b307345e88e6de67aa82b38c1ea49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTIO6HA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnel7Z4FiWr2VW5CY5SD4SkcoqmjjvJJfF7O8OQ8RZTAiEAookeiIDBpiJDPW2cTkXLliXTZvlHf0T8K2ixO%2B2eTV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPiMbWXVTP8UCElvAyrcA3EDhBUQ5dwH%2BtCvL0nf6nRlDIR9InfsnyMrAqdtprCpMMe83f6EastJLcsDiXJugrDAFamcaDS0cqWGRhQGCOe8XaBpjRgJDeCIPjwAgJ47N21q6mYR3qD2iVzyBUThjzTzjRQVooXsGG%2BwPBarDK98cdNtwDZsst9QVco7e%2By9K8oJoW%2FC1bQenBn%2BWxRDUn9uxDt%2FGozTxu2WKBf4MUy4qZ4paSm8gqHZKAqUgn6Ovp5K9dLSRZFZCvYc8%2BWkJzCJjc6EV1hrP8LvIaJWhQRA8d%2F4TpeBJ5Wym0bmIAb2Ou5bPGOx8dN13OcxupGYX%2BXDoLRDggy7qpYJVemE1uShIgrjP4GFQil%2Fn%2BEYaKsGUJOP3gfM4NRaavb%2B73wruLju7raEbWZn1n9TKJnsKJx8Difso6gLzzZ2gOHnaZ7zNdTb6dJ6r5voAkMWMEqjG16mQ4cBix9zeMbepOCnKpBTM8r5yAffMYDWC4YIm3RnrLDi2OYemqNIqkmDPsQex6evb%2FqnWiGmlNUDA2wu%2FQArm7KeZKmnGVi3dLAQ1T1cHN84p4G1etbRATqZuCtaVhyi6BF7oqObHRgr%2BZ%2BJON8lAyCi%2FVsJCJG3cccd5oNnkKhZ11e7nuvytGOzMP3ZvsQGOqUBwfxmGnT7CPCUgTEljz2Y3qxFdDj5hqAZykm09Hr%2BndwGat2GUtI3eAXwyMY%2BSqUHmukR%2F0vBCEl%2BP8o%2BKaCA47UbbBoZrmpU40UzePQhb6khu90dxA605MNMQjAVjoCpY9oFqCvg507TkoKwG9aO4ed71gla%2FvYXopxL%2BuN8tMCAshh74amwpfFLzKuIR3a6Jhnz%2BSn%2FSyt8OR4R7pyFzhwsG5us&X-Amz-Signature=8c0173965df2e52bff2e5ebc78ee5b1b58b1689e59913c3bd51acf7e3f0711bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTIO6HA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnel7Z4FiWr2VW5CY5SD4SkcoqmjjvJJfF7O8OQ8RZTAiEAookeiIDBpiJDPW2cTkXLliXTZvlHf0T8K2ixO%2B2eTV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPiMbWXVTP8UCElvAyrcA3EDhBUQ5dwH%2BtCvL0nf6nRlDIR9InfsnyMrAqdtprCpMMe83f6EastJLcsDiXJugrDAFamcaDS0cqWGRhQGCOe8XaBpjRgJDeCIPjwAgJ47N21q6mYR3qD2iVzyBUThjzTzjRQVooXsGG%2BwPBarDK98cdNtwDZsst9QVco7e%2By9K8oJoW%2FC1bQenBn%2BWxRDUn9uxDt%2FGozTxu2WKBf4MUy4qZ4paSm8gqHZKAqUgn6Ovp5K9dLSRZFZCvYc8%2BWkJzCJjc6EV1hrP8LvIaJWhQRA8d%2F4TpeBJ5Wym0bmIAb2Ou5bPGOx8dN13OcxupGYX%2BXDoLRDggy7qpYJVemE1uShIgrjP4GFQil%2Fn%2BEYaKsGUJOP3gfM4NRaavb%2B73wruLju7raEbWZn1n9TKJnsKJx8Difso6gLzzZ2gOHnaZ7zNdTb6dJ6r5voAkMWMEqjG16mQ4cBix9zeMbepOCnKpBTM8r5yAffMYDWC4YIm3RnrLDi2OYemqNIqkmDPsQex6evb%2FqnWiGmlNUDA2wu%2FQArm7KeZKmnGVi3dLAQ1T1cHN84p4G1etbRATqZuCtaVhyi6BF7oqObHRgr%2BZ%2BJON8lAyCi%2FVsJCJG3cccd5oNnkKhZ11e7nuvytGOzMP3ZvsQGOqUBwfxmGnT7CPCUgTEljz2Y3qxFdDj5hqAZykm09Hr%2BndwGat2GUtI3eAXwyMY%2BSqUHmukR%2F0vBCEl%2BP8o%2BKaCA47UbbBoZrmpU40UzePQhb6khu90dxA605MNMQjAVjoCpY9oFqCvg507TkoKwG9aO4ed71gla%2FvYXopxL%2BuN8tMCAshh74amwpfFLzKuIR3a6Jhnz%2BSn%2FSyt8OR4R7pyFzhwsG5us&X-Amz-Signature=baad695cb926f871fdce29b726c02fb22c0d313c405cb6fb36494729851d7a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTIO6HA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnel7Z4FiWr2VW5CY5SD4SkcoqmjjvJJfF7O8OQ8RZTAiEAookeiIDBpiJDPW2cTkXLliXTZvlHf0T8K2ixO%2B2eTV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPiMbWXVTP8UCElvAyrcA3EDhBUQ5dwH%2BtCvL0nf6nRlDIR9InfsnyMrAqdtprCpMMe83f6EastJLcsDiXJugrDAFamcaDS0cqWGRhQGCOe8XaBpjRgJDeCIPjwAgJ47N21q6mYR3qD2iVzyBUThjzTzjRQVooXsGG%2BwPBarDK98cdNtwDZsst9QVco7e%2By9K8oJoW%2FC1bQenBn%2BWxRDUn9uxDt%2FGozTxu2WKBf4MUy4qZ4paSm8gqHZKAqUgn6Ovp5K9dLSRZFZCvYc8%2BWkJzCJjc6EV1hrP8LvIaJWhQRA8d%2F4TpeBJ5Wym0bmIAb2Ou5bPGOx8dN13OcxupGYX%2BXDoLRDggy7qpYJVemE1uShIgrjP4GFQil%2Fn%2BEYaKsGUJOP3gfM4NRaavb%2B73wruLju7raEbWZn1n9TKJnsKJx8Difso6gLzzZ2gOHnaZ7zNdTb6dJ6r5voAkMWMEqjG16mQ4cBix9zeMbepOCnKpBTM8r5yAffMYDWC4YIm3RnrLDi2OYemqNIqkmDPsQex6evb%2FqnWiGmlNUDA2wu%2FQArm7KeZKmnGVi3dLAQ1T1cHN84p4G1etbRATqZuCtaVhyi6BF7oqObHRgr%2BZ%2BJON8lAyCi%2FVsJCJG3cccd5oNnkKhZ11e7nuvytGOzMP3ZvsQGOqUBwfxmGnT7CPCUgTEljz2Y3qxFdDj5hqAZykm09Hr%2BndwGat2GUtI3eAXwyMY%2BSqUHmukR%2F0vBCEl%2BP8o%2BKaCA47UbbBoZrmpU40UzePQhb6khu90dxA605MNMQjAVjoCpY9oFqCvg507TkoKwG9aO4ed71gla%2FvYXopxL%2BuN8tMCAshh74amwpfFLzKuIR3a6Jhnz%2BSn%2FSyt8OR4R7pyFzhwsG5us&X-Amz-Signature=fe5adbb46b235681927db767a61af7d2b345fc6ca445ce74bf1329db0bdb5fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTIO6HA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnel7Z4FiWr2VW5CY5SD4SkcoqmjjvJJfF7O8OQ8RZTAiEAookeiIDBpiJDPW2cTkXLliXTZvlHf0T8K2ixO%2B2eTV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPiMbWXVTP8UCElvAyrcA3EDhBUQ5dwH%2BtCvL0nf6nRlDIR9InfsnyMrAqdtprCpMMe83f6EastJLcsDiXJugrDAFamcaDS0cqWGRhQGCOe8XaBpjRgJDeCIPjwAgJ47N21q6mYR3qD2iVzyBUThjzTzjRQVooXsGG%2BwPBarDK98cdNtwDZsst9QVco7e%2By9K8oJoW%2FC1bQenBn%2BWxRDUn9uxDt%2FGozTxu2WKBf4MUy4qZ4paSm8gqHZKAqUgn6Ovp5K9dLSRZFZCvYc8%2BWkJzCJjc6EV1hrP8LvIaJWhQRA8d%2F4TpeBJ5Wym0bmIAb2Ou5bPGOx8dN13OcxupGYX%2BXDoLRDggy7qpYJVemE1uShIgrjP4GFQil%2Fn%2BEYaKsGUJOP3gfM4NRaavb%2B73wruLju7raEbWZn1n9TKJnsKJx8Difso6gLzzZ2gOHnaZ7zNdTb6dJ6r5voAkMWMEqjG16mQ4cBix9zeMbepOCnKpBTM8r5yAffMYDWC4YIm3RnrLDi2OYemqNIqkmDPsQex6evb%2FqnWiGmlNUDA2wu%2FQArm7KeZKmnGVi3dLAQ1T1cHN84p4G1etbRATqZuCtaVhyi6BF7oqObHRgr%2BZ%2BJON8lAyCi%2FVsJCJG3cccd5oNnkKhZ11e7nuvytGOzMP3ZvsQGOqUBwfxmGnT7CPCUgTEljz2Y3qxFdDj5hqAZykm09Hr%2BndwGat2GUtI3eAXwyMY%2BSqUHmukR%2F0vBCEl%2BP8o%2BKaCA47UbbBoZrmpU40UzePQhb6khu90dxA605MNMQjAVjoCpY9oFqCvg507TkoKwG9aO4ed71gla%2FvYXopxL%2BuN8tMCAshh74amwpfFLzKuIR3a6Jhnz%2BSn%2FSyt8OR4R7pyFzhwsG5us&X-Amz-Signature=3a65e9b1fecd31b418249d28be67f9926e2fbb6a0c45dcf47acf07053a511c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTIO6HA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnel7Z4FiWr2VW5CY5SD4SkcoqmjjvJJfF7O8OQ8RZTAiEAookeiIDBpiJDPW2cTkXLliXTZvlHf0T8K2ixO%2B2eTV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPiMbWXVTP8UCElvAyrcA3EDhBUQ5dwH%2BtCvL0nf6nRlDIR9InfsnyMrAqdtprCpMMe83f6EastJLcsDiXJugrDAFamcaDS0cqWGRhQGCOe8XaBpjRgJDeCIPjwAgJ47N21q6mYR3qD2iVzyBUThjzTzjRQVooXsGG%2BwPBarDK98cdNtwDZsst9QVco7e%2By9K8oJoW%2FC1bQenBn%2BWxRDUn9uxDt%2FGozTxu2WKBf4MUy4qZ4paSm8gqHZKAqUgn6Ovp5K9dLSRZFZCvYc8%2BWkJzCJjc6EV1hrP8LvIaJWhQRA8d%2F4TpeBJ5Wym0bmIAb2Ou5bPGOx8dN13OcxupGYX%2BXDoLRDggy7qpYJVemE1uShIgrjP4GFQil%2Fn%2BEYaKsGUJOP3gfM4NRaavb%2B73wruLju7raEbWZn1n9TKJnsKJx8Difso6gLzzZ2gOHnaZ7zNdTb6dJ6r5voAkMWMEqjG16mQ4cBix9zeMbepOCnKpBTM8r5yAffMYDWC4YIm3RnrLDi2OYemqNIqkmDPsQex6evb%2FqnWiGmlNUDA2wu%2FQArm7KeZKmnGVi3dLAQ1T1cHN84p4G1etbRATqZuCtaVhyi6BF7oqObHRgr%2BZ%2BJON8lAyCi%2FVsJCJG3cccd5oNnkKhZ11e7nuvytGOzMP3ZvsQGOqUBwfxmGnT7CPCUgTEljz2Y3qxFdDj5hqAZykm09Hr%2BndwGat2GUtI3eAXwyMY%2BSqUHmukR%2F0vBCEl%2BP8o%2BKaCA47UbbBoZrmpU40UzePQhb6khu90dxA605MNMQjAVjoCpY9oFqCvg507TkoKwG9aO4ed71gla%2FvYXopxL%2BuN8tMCAshh74amwpfFLzKuIR3a6Jhnz%2BSn%2FSyt8OR4R7pyFzhwsG5us&X-Amz-Signature=6c22f8e0044db2d34d65a46b4ca7b461364087aaf195ce28be4b55cbed330c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTIO6HA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnel7Z4FiWr2VW5CY5SD4SkcoqmjjvJJfF7O8OQ8RZTAiEAookeiIDBpiJDPW2cTkXLliXTZvlHf0T8K2ixO%2B2eTV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPiMbWXVTP8UCElvAyrcA3EDhBUQ5dwH%2BtCvL0nf6nRlDIR9InfsnyMrAqdtprCpMMe83f6EastJLcsDiXJugrDAFamcaDS0cqWGRhQGCOe8XaBpjRgJDeCIPjwAgJ47N21q6mYR3qD2iVzyBUThjzTzjRQVooXsGG%2BwPBarDK98cdNtwDZsst9QVco7e%2By9K8oJoW%2FC1bQenBn%2BWxRDUn9uxDt%2FGozTxu2WKBf4MUy4qZ4paSm8gqHZKAqUgn6Ovp5K9dLSRZFZCvYc8%2BWkJzCJjc6EV1hrP8LvIaJWhQRA8d%2F4TpeBJ5Wym0bmIAb2Ou5bPGOx8dN13OcxupGYX%2BXDoLRDggy7qpYJVemE1uShIgrjP4GFQil%2Fn%2BEYaKsGUJOP3gfM4NRaavb%2B73wruLju7raEbWZn1n9TKJnsKJx8Difso6gLzzZ2gOHnaZ7zNdTb6dJ6r5voAkMWMEqjG16mQ4cBix9zeMbepOCnKpBTM8r5yAffMYDWC4YIm3RnrLDi2OYemqNIqkmDPsQex6evb%2FqnWiGmlNUDA2wu%2FQArm7KeZKmnGVi3dLAQ1T1cHN84p4G1etbRATqZuCtaVhyi6BF7oqObHRgr%2BZ%2BJON8lAyCi%2FVsJCJG3cccd5oNnkKhZ11e7nuvytGOzMP3ZvsQGOqUBwfxmGnT7CPCUgTEljz2Y3qxFdDj5hqAZykm09Hr%2BndwGat2GUtI3eAXwyMY%2BSqUHmukR%2F0vBCEl%2BP8o%2BKaCA47UbbBoZrmpU40UzePQhb6khu90dxA605MNMQjAVjoCpY9oFqCvg507TkoKwG9aO4ed71gla%2FvYXopxL%2BuN8tMCAshh74amwpfFLzKuIR3a6Jhnz%2BSn%2FSyt8OR4R7pyFzhwsG5us&X-Amz-Signature=cf3cae0a19d72273293b785957a66a65676549fb7cdfe651ed77efaaac42aa38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTIO6HA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnel7Z4FiWr2VW5CY5SD4SkcoqmjjvJJfF7O8OQ8RZTAiEAookeiIDBpiJDPW2cTkXLliXTZvlHf0T8K2ixO%2B2eTV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPiMbWXVTP8UCElvAyrcA3EDhBUQ5dwH%2BtCvL0nf6nRlDIR9InfsnyMrAqdtprCpMMe83f6EastJLcsDiXJugrDAFamcaDS0cqWGRhQGCOe8XaBpjRgJDeCIPjwAgJ47N21q6mYR3qD2iVzyBUThjzTzjRQVooXsGG%2BwPBarDK98cdNtwDZsst9QVco7e%2By9K8oJoW%2FC1bQenBn%2BWxRDUn9uxDt%2FGozTxu2WKBf4MUy4qZ4paSm8gqHZKAqUgn6Ovp5K9dLSRZFZCvYc8%2BWkJzCJjc6EV1hrP8LvIaJWhQRA8d%2F4TpeBJ5Wym0bmIAb2Ou5bPGOx8dN13OcxupGYX%2BXDoLRDggy7qpYJVemE1uShIgrjP4GFQil%2Fn%2BEYaKsGUJOP3gfM4NRaavb%2B73wruLju7raEbWZn1n9TKJnsKJx8Difso6gLzzZ2gOHnaZ7zNdTb6dJ6r5voAkMWMEqjG16mQ4cBix9zeMbepOCnKpBTM8r5yAffMYDWC4YIm3RnrLDi2OYemqNIqkmDPsQex6evb%2FqnWiGmlNUDA2wu%2FQArm7KeZKmnGVi3dLAQ1T1cHN84p4G1etbRATqZuCtaVhyi6BF7oqObHRgr%2BZ%2BJON8lAyCi%2FVsJCJG3cccd5oNnkKhZ11e7nuvytGOzMP3ZvsQGOqUBwfxmGnT7CPCUgTEljz2Y3qxFdDj5hqAZykm09Hr%2BndwGat2GUtI3eAXwyMY%2BSqUHmukR%2F0vBCEl%2BP8o%2BKaCA47UbbBoZrmpU40UzePQhb6khu90dxA605MNMQjAVjoCpY9oFqCvg507TkoKwG9aO4ed71gla%2FvYXopxL%2BuN8tMCAshh74amwpfFLzKuIR3a6Jhnz%2BSn%2FSyt8OR4R7pyFzhwsG5us&X-Amz-Signature=551e87e111d469382eb8ac4f4c8a3fa613ed7f10aae66a5b9a380bef6726b8c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTIO6HA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnel7Z4FiWr2VW5CY5SD4SkcoqmjjvJJfF7O8OQ8RZTAiEAookeiIDBpiJDPW2cTkXLliXTZvlHf0T8K2ixO%2B2eTV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPiMbWXVTP8UCElvAyrcA3EDhBUQ5dwH%2BtCvL0nf6nRlDIR9InfsnyMrAqdtprCpMMe83f6EastJLcsDiXJugrDAFamcaDS0cqWGRhQGCOe8XaBpjRgJDeCIPjwAgJ47N21q6mYR3qD2iVzyBUThjzTzjRQVooXsGG%2BwPBarDK98cdNtwDZsst9QVco7e%2By9K8oJoW%2FC1bQenBn%2BWxRDUn9uxDt%2FGozTxu2WKBf4MUy4qZ4paSm8gqHZKAqUgn6Ovp5K9dLSRZFZCvYc8%2BWkJzCJjc6EV1hrP8LvIaJWhQRA8d%2F4TpeBJ5Wym0bmIAb2Ou5bPGOx8dN13OcxupGYX%2BXDoLRDggy7qpYJVemE1uShIgrjP4GFQil%2Fn%2BEYaKsGUJOP3gfM4NRaavb%2B73wruLju7raEbWZn1n9TKJnsKJx8Difso6gLzzZ2gOHnaZ7zNdTb6dJ6r5voAkMWMEqjG16mQ4cBix9zeMbepOCnKpBTM8r5yAffMYDWC4YIm3RnrLDi2OYemqNIqkmDPsQex6evb%2FqnWiGmlNUDA2wu%2FQArm7KeZKmnGVi3dLAQ1T1cHN84p4G1etbRATqZuCtaVhyi6BF7oqObHRgr%2BZ%2BJON8lAyCi%2FVsJCJG3cccd5oNnkKhZ11e7nuvytGOzMP3ZvsQGOqUBwfxmGnT7CPCUgTEljz2Y3qxFdDj5hqAZykm09Hr%2BndwGat2GUtI3eAXwyMY%2BSqUHmukR%2F0vBCEl%2BP8o%2BKaCA47UbbBoZrmpU40UzePQhb6khu90dxA605MNMQjAVjoCpY9oFqCvg507TkoKwG9aO4ed71gla%2FvYXopxL%2BuN8tMCAshh74amwpfFLzKuIR3a6Jhnz%2BSn%2FSyt8OR4R7pyFzhwsG5us&X-Amz-Signature=5303312e2672e55b0c12dd09931196d5e154f0a3ac31c72c5cef7475a7ebae4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTIO6HA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnel7Z4FiWr2VW5CY5SD4SkcoqmjjvJJfF7O8OQ8RZTAiEAookeiIDBpiJDPW2cTkXLliXTZvlHf0T8K2ixO%2B2eTV8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPiMbWXVTP8UCElvAyrcA3EDhBUQ5dwH%2BtCvL0nf6nRlDIR9InfsnyMrAqdtprCpMMe83f6EastJLcsDiXJugrDAFamcaDS0cqWGRhQGCOe8XaBpjRgJDeCIPjwAgJ47N21q6mYR3qD2iVzyBUThjzTzjRQVooXsGG%2BwPBarDK98cdNtwDZsst9QVco7e%2By9K8oJoW%2FC1bQenBn%2BWxRDUn9uxDt%2FGozTxu2WKBf4MUy4qZ4paSm8gqHZKAqUgn6Ovp5K9dLSRZFZCvYc8%2BWkJzCJjc6EV1hrP8LvIaJWhQRA8d%2F4TpeBJ5Wym0bmIAb2Ou5bPGOx8dN13OcxupGYX%2BXDoLRDggy7qpYJVemE1uShIgrjP4GFQil%2Fn%2BEYaKsGUJOP3gfM4NRaavb%2B73wruLju7raEbWZn1n9TKJnsKJx8Difso6gLzzZ2gOHnaZ7zNdTb6dJ6r5voAkMWMEqjG16mQ4cBix9zeMbepOCnKpBTM8r5yAffMYDWC4YIm3RnrLDi2OYemqNIqkmDPsQex6evb%2FqnWiGmlNUDA2wu%2FQArm7KeZKmnGVi3dLAQ1T1cHN84p4G1etbRATqZuCtaVhyi6BF7oqObHRgr%2BZ%2BJON8lAyCi%2FVsJCJG3cccd5oNnkKhZ11e7nuvytGOzMP3ZvsQGOqUBwfxmGnT7CPCUgTEljz2Y3qxFdDj5hqAZykm09Hr%2BndwGat2GUtI3eAXwyMY%2BSqUHmukR%2F0vBCEl%2BP8o%2BKaCA47UbbBoZrmpU40UzePQhb6khu90dxA605MNMQjAVjoCpY9oFqCvg507TkoKwG9aO4ed71gla%2FvYXopxL%2BuN8tMCAshh74amwpfFLzKuIR3a6Jhnz%2BSn%2FSyt8OR4R7pyFzhwsG5us&X-Amz-Signature=dad0dd1adb8118b36eda760c2fdf13cfdef97d594f8f55d0932d70a44d85dca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
