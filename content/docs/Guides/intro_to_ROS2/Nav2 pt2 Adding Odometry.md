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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKGE6JP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEbAIXRb2d56HDt%2BiHiTzE8oQGbnSmE8WRPpV16UibCYAiEA02x8Ux4IQv073gf%2FHBr2lh%2BFOvgabEWJqPw5NIBHw3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1hRgjpoEV6RtfWZyrcAxGR6kAUQukoXMANZQTdRZsMfsLymRQVB72vguh3d%2F8QpJGkzoyNVbsooYOKAnHkwhncD%2FBeEoACW1wVMmw%2BEEuE74xIUGBofLeEtkAh5UIHQ2Aa2PIsNmMeZyMSks9wYOPBp0p6EiTm0%2B%2BSBYGMsXFiRkyaWCjwg6Xkb8olMi59co2InZbG38KpfuY2RDDrhdLUTezZwrC0cgBiPJGq8M5JZESuNedqVWQjsJ9qWCkpfHZ1Hti89bV8rNb0umL9oFQE5ltUTFA%2Bi8wk46CoIY8MSHS37IoBYx93aaTn3r9HHqeiZupaG%2Bb%2BvphBMzur1kpIuQdOSac52YVTAiTs4ADR6fclxsMdYxxVuoo%2FV1C2qqjttwHEs%2BJ1ge2WacAxSS3l4uKFJEsBSqgXnmFmuyfNsxTlPgFDpah9jg3K1V24u8BFh%2FYE82UzbZ9JeJn6VS1bcG7Bx5QGWymcSZ%2BQlMYO50vFlRMo8hFHTAsX5UaZqDfzYut%2BWTDhaiJjhFlEV4HPgTR%2BtnrU6b3vJp7hdq%2BP5wj8dLISNR%2FnOoAjELCjYartk3DR1eaNCGuQUttg3kSFXylho%2F%2FecowHfi5r7Z5QNWmjM1e5VQZDy4FOf2IpTzJhpNfpuoGLhhO1MIPT1cQGOqUBPISOdpVewMTtugSIlYfPI%2BY4JKwOfdQxx5F1t0DpQJAKA7%2Bu%2B6bXy4uad0rJuqPh%2Bc1FoUyKukqmVhS7SvU53AtwAjB9h2v%2Br1UErzoO6oyMFgUCdqRnVuyPsATF61i%2FBc5QeFWT3IuMWvO1kj5mfQ3Ur2UH%2F4O2OIbH8v3SoaMmNi4WW6NOlcTgLYq3ScJ77ijIdp2oM%2F%2Bh3RgivaF1xal3LLHI&X-Amz-Signature=aa1d699239b470878cf74a9c5c5742dcf289ea6f1643afafb94c0a47212e6fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKGE6JP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEbAIXRb2d56HDt%2BiHiTzE8oQGbnSmE8WRPpV16UibCYAiEA02x8Ux4IQv073gf%2FHBr2lh%2BFOvgabEWJqPw5NIBHw3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1hRgjpoEV6RtfWZyrcAxGR6kAUQukoXMANZQTdRZsMfsLymRQVB72vguh3d%2F8QpJGkzoyNVbsooYOKAnHkwhncD%2FBeEoACW1wVMmw%2BEEuE74xIUGBofLeEtkAh5UIHQ2Aa2PIsNmMeZyMSks9wYOPBp0p6EiTm0%2B%2BSBYGMsXFiRkyaWCjwg6Xkb8olMi59co2InZbG38KpfuY2RDDrhdLUTezZwrC0cgBiPJGq8M5JZESuNedqVWQjsJ9qWCkpfHZ1Hti89bV8rNb0umL9oFQE5ltUTFA%2Bi8wk46CoIY8MSHS37IoBYx93aaTn3r9HHqeiZupaG%2Bb%2BvphBMzur1kpIuQdOSac52YVTAiTs4ADR6fclxsMdYxxVuoo%2FV1C2qqjttwHEs%2BJ1ge2WacAxSS3l4uKFJEsBSqgXnmFmuyfNsxTlPgFDpah9jg3K1V24u8BFh%2FYE82UzbZ9JeJn6VS1bcG7Bx5QGWymcSZ%2BQlMYO50vFlRMo8hFHTAsX5UaZqDfzYut%2BWTDhaiJjhFlEV4HPgTR%2BtnrU6b3vJp7hdq%2BP5wj8dLISNR%2FnOoAjELCjYartk3DR1eaNCGuQUttg3kSFXylho%2F%2FecowHfi5r7Z5QNWmjM1e5VQZDy4FOf2IpTzJhpNfpuoGLhhO1MIPT1cQGOqUBPISOdpVewMTtugSIlYfPI%2BY4JKwOfdQxx5F1t0DpQJAKA7%2Bu%2B6bXy4uad0rJuqPh%2Bc1FoUyKukqmVhS7SvU53AtwAjB9h2v%2Br1UErzoO6oyMFgUCdqRnVuyPsATF61i%2FBc5QeFWT3IuMWvO1kj5mfQ3Ur2UH%2F4O2OIbH8v3SoaMmNi4WW6NOlcTgLYq3ScJ77ijIdp2oM%2F%2Bh3RgivaF1xal3LLHI&X-Amz-Signature=5b4b5685893a01d64eec4995141327b29889b4dd010d264bdc89a4f14b1717ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKGE6JP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEbAIXRb2d56HDt%2BiHiTzE8oQGbnSmE8WRPpV16UibCYAiEA02x8Ux4IQv073gf%2FHBr2lh%2BFOvgabEWJqPw5NIBHw3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1hRgjpoEV6RtfWZyrcAxGR6kAUQukoXMANZQTdRZsMfsLymRQVB72vguh3d%2F8QpJGkzoyNVbsooYOKAnHkwhncD%2FBeEoACW1wVMmw%2BEEuE74xIUGBofLeEtkAh5UIHQ2Aa2PIsNmMeZyMSks9wYOPBp0p6EiTm0%2B%2BSBYGMsXFiRkyaWCjwg6Xkb8olMi59co2InZbG38KpfuY2RDDrhdLUTezZwrC0cgBiPJGq8M5JZESuNedqVWQjsJ9qWCkpfHZ1Hti89bV8rNb0umL9oFQE5ltUTFA%2Bi8wk46CoIY8MSHS37IoBYx93aaTn3r9HHqeiZupaG%2Bb%2BvphBMzur1kpIuQdOSac52YVTAiTs4ADR6fclxsMdYxxVuoo%2FV1C2qqjttwHEs%2BJ1ge2WacAxSS3l4uKFJEsBSqgXnmFmuyfNsxTlPgFDpah9jg3K1V24u8BFh%2FYE82UzbZ9JeJn6VS1bcG7Bx5QGWymcSZ%2BQlMYO50vFlRMo8hFHTAsX5UaZqDfzYut%2BWTDhaiJjhFlEV4HPgTR%2BtnrU6b3vJp7hdq%2BP5wj8dLISNR%2FnOoAjELCjYartk3DR1eaNCGuQUttg3kSFXylho%2F%2FecowHfi5r7Z5QNWmjM1e5VQZDy4FOf2IpTzJhpNfpuoGLhhO1MIPT1cQGOqUBPISOdpVewMTtugSIlYfPI%2BY4JKwOfdQxx5F1t0DpQJAKA7%2Bu%2B6bXy4uad0rJuqPh%2Bc1FoUyKukqmVhS7SvU53AtwAjB9h2v%2Br1UErzoO6oyMFgUCdqRnVuyPsATF61i%2FBc5QeFWT3IuMWvO1kj5mfQ3Ur2UH%2F4O2OIbH8v3SoaMmNi4WW6NOlcTgLYq3ScJ77ijIdp2oM%2F%2Bh3RgivaF1xal3LLHI&X-Amz-Signature=73cdc8ba466f8f5dc059afc9aa3b47ff3eba554c94375064dd7e25bf7dece095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKGE6JP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEbAIXRb2d56HDt%2BiHiTzE8oQGbnSmE8WRPpV16UibCYAiEA02x8Ux4IQv073gf%2FHBr2lh%2BFOvgabEWJqPw5NIBHw3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1hRgjpoEV6RtfWZyrcAxGR6kAUQukoXMANZQTdRZsMfsLymRQVB72vguh3d%2F8QpJGkzoyNVbsooYOKAnHkwhncD%2FBeEoACW1wVMmw%2BEEuE74xIUGBofLeEtkAh5UIHQ2Aa2PIsNmMeZyMSks9wYOPBp0p6EiTm0%2B%2BSBYGMsXFiRkyaWCjwg6Xkb8olMi59co2InZbG38KpfuY2RDDrhdLUTezZwrC0cgBiPJGq8M5JZESuNedqVWQjsJ9qWCkpfHZ1Hti89bV8rNb0umL9oFQE5ltUTFA%2Bi8wk46CoIY8MSHS37IoBYx93aaTn3r9HHqeiZupaG%2Bb%2BvphBMzur1kpIuQdOSac52YVTAiTs4ADR6fclxsMdYxxVuoo%2FV1C2qqjttwHEs%2BJ1ge2WacAxSS3l4uKFJEsBSqgXnmFmuyfNsxTlPgFDpah9jg3K1V24u8BFh%2FYE82UzbZ9JeJn6VS1bcG7Bx5QGWymcSZ%2BQlMYO50vFlRMo8hFHTAsX5UaZqDfzYut%2BWTDhaiJjhFlEV4HPgTR%2BtnrU6b3vJp7hdq%2BP5wj8dLISNR%2FnOoAjELCjYartk3DR1eaNCGuQUttg3kSFXylho%2F%2FecowHfi5r7Z5QNWmjM1e5VQZDy4FOf2IpTzJhpNfpuoGLhhO1MIPT1cQGOqUBPISOdpVewMTtugSIlYfPI%2BY4JKwOfdQxx5F1t0DpQJAKA7%2Bu%2B6bXy4uad0rJuqPh%2Bc1FoUyKukqmVhS7SvU53AtwAjB9h2v%2Br1UErzoO6oyMFgUCdqRnVuyPsATF61i%2FBc5QeFWT3IuMWvO1kj5mfQ3Ur2UH%2F4O2OIbH8v3SoaMmNi4WW6NOlcTgLYq3ScJ77ijIdp2oM%2F%2Bh3RgivaF1xal3LLHI&X-Amz-Signature=503e5603ba2aed2b00cd9f4336c0762c5028aa802d5d575730ae20bf58134055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKGE6JP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEbAIXRb2d56HDt%2BiHiTzE8oQGbnSmE8WRPpV16UibCYAiEA02x8Ux4IQv073gf%2FHBr2lh%2BFOvgabEWJqPw5NIBHw3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1hRgjpoEV6RtfWZyrcAxGR6kAUQukoXMANZQTdRZsMfsLymRQVB72vguh3d%2F8QpJGkzoyNVbsooYOKAnHkwhncD%2FBeEoACW1wVMmw%2BEEuE74xIUGBofLeEtkAh5UIHQ2Aa2PIsNmMeZyMSks9wYOPBp0p6EiTm0%2B%2BSBYGMsXFiRkyaWCjwg6Xkb8olMi59co2InZbG38KpfuY2RDDrhdLUTezZwrC0cgBiPJGq8M5JZESuNedqVWQjsJ9qWCkpfHZ1Hti89bV8rNb0umL9oFQE5ltUTFA%2Bi8wk46CoIY8MSHS37IoBYx93aaTn3r9HHqeiZupaG%2Bb%2BvphBMzur1kpIuQdOSac52YVTAiTs4ADR6fclxsMdYxxVuoo%2FV1C2qqjttwHEs%2BJ1ge2WacAxSS3l4uKFJEsBSqgXnmFmuyfNsxTlPgFDpah9jg3K1V24u8BFh%2FYE82UzbZ9JeJn6VS1bcG7Bx5QGWymcSZ%2BQlMYO50vFlRMo8hFHTAsX5UaZqDfzYut%2BWTDhaiJjhFlEV4HPgTR%2BtnrU6b3vJp7hdq%2BP5wj8dLISNR%2FnOoAjELCjYartk3DR1eaNCGuQUttg3kSFXylho%2F%2FecowHfi5r7Z5QNWmjM1e5VQZDy4FOf2IpTzJhpNfpuoGLhhO1MIPT1cQGOqUBPISOdpVewMTtugSIlYfPI%2BY4JKwOfdQxx5F1t0DpQJAKA7%2Bu%2B6bXy4uad0rJuqPh%2Bc1FoUyKukqmVhS7SvU53AtwAjB9h2v%2Br1UErzoO6oyMFgUCdqRnVuyPsATF61i%2FBc5QeFWT3IuMWvO1kj5mfQ3Ur2UH%2F4O2OIbH8v3SoaMmNi4WW6NOlcTgLYq3ScJ77ijIdp2oM%2F%2Bh3RgivaF1xal3LLHI&X-Amz-Signature=0fbaf274bd2f2cae09aaff0418f8df282d827371a15d84b8bf66452532514c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKGE6JP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEbAIXRb2d56HDt%2BiHiTzE8oQGbnSmE8WRPpV16UibCYAiEA02x8Ux4IQv073gf%2FHBr2lh%2BFOvgabEWJqPw5NIBHw3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1hRgjpoEV6RtfWZyrcAxGR6kAUQukoXMANZQTdRZsMfsLymRQVB72vguh3d%2F8QpJGkzoyNVbsooYOKAnHkwhncD%2FBeEoACW1wVMmw%2BEEuE74xIUGBofLeEtkAh5UIHQ2Aa2PIsNmMeZyMSks9wYOPBp0p6EiTm0%2B%2BSBYGMsXFiRkyaWCjwg6Xkb8olMi59co2InZbG38KpfuY2RDDrhdLUTezZwrC0cgBiPJGq8M5JZESuNedqVWQjsJ9qWCkpfHZ1Hti89bV8rNb0umL9oFQE5ltUTFA%2Bi8wk46CoIY8MSHS37IoBYx93aaTn3r9HHqeiZupaG%2Bb%2BvphBMzur1kpIuQdOSac52YVTAiTs4ADR6fclxsMdYxxVuoo%2FV1C2qqjttwHEs%2BJ1ge2WacAxSS3l4uKFJEsBSqgXnmFmuyfNsxTlPgFDpah9jg3K1V24u8BFh%2FYE82UzbZ9JeJn6VS1bcG7Bx5QGWymcSZ%2BQlMYO50vFlRMo8hFHTAsX5UaZqDfzYut%2BWTDhaiJjhFlEV4HPgTR%2BtnrU6b3vJp7hdq%2BP5wj8dLISNR%2FnOoAjELCjYartk3DR1eaNCGuQUttg3kSFXylho%2F%2FecowHfi5r7Z5QNWmjM1e5VQZDy4FOf2IpTzJhpNfpuoGLhhO1MIPT1cQGOqUBPISOdpVewMTtugSIlYfPI%2BY4JKwOfdQxx5F1t0DpQJAKA7%2Bu%2B6bXy4uad0rJuqPh%2Bc1FoUyKukqmVhS7SvU53AtwAjB9h2v%2Br1UErzoO6oyMFgUCdqRnVuyPsATF61i%2FBc5QeFWT3IuMWvO1kj5mfQ3Ur2UH%2F4O2OIbH8v3SoaMmNi4WW6NOlcTgLYq3ScJ77ijIdp2oM%2F%2Bh3RgivaF1xal3LLHI&X-Amz-Signature=274a35ee234fe41f5f6211d8e2ce322b4cc52dac53b97f8ad7ef7001ca30cf7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKGE6JP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEbAIXRb2d56HDt%2BiHiTzE8oQGbnSmE8WRPpV16UibCYAiEA02x8Ux4IQv073gf%2FHBr2lh%2BFOvgabEWJqPw5NIBHw3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1hRgjpoEV6RtfWZyrcAxGR6kAUQukoXMANZQTdRZsMfsLymRQVB72vguh3d%2F8QpJGkzoyNVbsooYOKAnHkwhncD%2FBeEoACW1wVMmw%2BEEuE74xIUGBofLeEtkAh5UIHQ2Aa2PIsNmMeZyMSks9wYOPBp0p6EiTm0%2B%2BSBYGMsXFiRkyaWCjwg6Xkb8olMi59co2InZbG38KpfuY2RDDrhdLUTezZwrC0cgBiPJGq8M5JZESuNedqVWQjsJ9qWCkpfHZ1Hti89bV8rNb0umL9oFQE5ltUTFA%2Bi8wk46CoIY8MSHS37IoBYx93aaTn3r9HHqeiZupaG%2Bb%2BvphBMzur1kpIuQdOSac52YVTAiTs4ADR6fclxsMdYxxVuoo%2FV1C2qqjttwHEs%2BJ1ge2WacAxSS3l4uKFJEsBSqgXnmFmuyfNsxTlPgFDpah9jg3K1V24u8BFh%2FYE82UzbZ9JeJn6VS1bcG7Bx5QGWymcSZ%2BQlMYO50vFlRMo8hFHTAsX5UaZqDfzYut%2BWTDhaiJjhFlEV4HPgTR%2BtnrU6b3vJp7hdq%2BP5wj8dLISNR%2FnOoAjELCjYartk3DR1eaNCGuQUttg3kSFXylho%2F%2FecowHfi5r7Z5QNWmjM1e5VQZDy4FOf2IpTzJhpNfpuoGLhhO1MIPT1cQGOqUBPISOdpVewMTtugSIlYfPI%2BY4JKwOfdQxx5F1t0DpQJAKA7%2Bu%2B6bXy4uad0rJuqPh%2Bc1FoUyKukqmVhS7SvU53AtwAjB9h2v%2Br1UErzoO6oyMFgUCdqRnVuyPsATF61i%2FBc5QeFWT3IuMWvO1kj5mfQ3Ur2UH%2F4O2OIbH8v3SoaMmNi4WW6NOlcTgLYq3ScJ77ijIdp2oM%2F%2Bh3RgivaF1xal3LLHI&X-Amz-Signature=897b490a684b7193c53fe36041aba6859cb59ff94f78bdf28752b7bf26fa2653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKGE6JP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEbAIXRb2d56HDt%2BiHiTzE8oQGbnSmE8WRPpV16UibCYAiEA02x8Ux4IQv073gf%2FHBr2lh%2BFOvgabEWJqPw5NIBHw3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1hRgjpoEV6RtfWZyrcAxGR6kAUQukoXMANZQTdRZsMfsLymRQVB72vguh3d%2F8QpJGkzoyNVbsooYOKAnHkwhncD%2FBeEoACW1wVMmw%2BEEuE74xIUGBofLeEtkAh5UIHQ2Aa2PIsNmMeZyMSks9wYOPBp0p6EiTm0%2B%2BSBYGMsXFiRkyaWCjwg6Xkb8olMi59co2InZbG38KpfuY2RDDrhdLUTezZwrC0cgBiPJGq8M5JZESuNedqVWQjsJ9qWCkpfHZ1Hti89bV8rNb0umL9oFQE5ltUTFA%2Bi8wk46CoIY8MSHS37IoBYx93aaTn3r9HHqeiZupaG%2Bb%2BvphBMzur1kpIuQdOSac52YVTAiTs4ADR6fclxsMdYxxVuoo%2FV1C2qqjttwHEs%2BJ1ge2WacAxSS3l4uKFJEsBSqgXnmFmuyfNsxTlPgFDpah9jg3K1V24u8BFh%2FYE82UzbZ9JeJn6VS1bcG7Bx5QGWymcSZ%2BQlMYO50vFlRMo8hFHTAsX5UaZqDfzYut%2BWTDhaiJjhFlEV4HPgTR%2BtnrU6b3vJp7hdq%2BP5wj8dLISNR%2FnOoAjELCjYartk3DR1eaNCGuQUttg3kSFXylho%2F%2FecowHfi5r7Z5QNWmjM1e5VQZDy4FOf2IpTzJhpNfpuoGLhhO1MIPT1cQGOqUBPISOdpVewMTtugSIlYfPI%2BY4JKwOfdQxx5F1t0DpQJAKA7%2Bu%2B6bXy4uad0rJuqPh%2Bc1FoUyKukqmVhS7SvU53AtwAjB9h2v%2Br1UErzoO6oyMFgUCdqRnVuyPsATF61i%2FBc5QeFWT3IuMWvO1kj5mfQ3Ur2UH%2F4O2OIbH8v3SoaMmNi4WW6NOlcTgLYq3ScJ77ijIdp2oM%2F%2Bh3RgivaF1xal3LLHI&X-Amz-Signature=18a7504494391af302488d7454db061814eb5c998b9d58a6670e946cc083d60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKGE6JP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEbAIXRb2d56HDt%2BiHiTzE8oQGbnSmE8WRPpV16UibCYAiEA02x8Ux4IQv073gf%2FHBr2lh%2BFOvgabEWJqPw5NIBHw3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1hRgjpoEV6RtfWZyrcAxGR6kAUQukoXMANZQTdRZsMfsLymRQVB72vguh3d%2F8QpJGkzoyNVbsooYOKAnHkwhncD%2FBeEoACW1wVMmw%2BEEuE74xIUGBofLeEtkAh5UIHQ2Aa2PIsNmMeZyMSks9wYOPBp0p6EiTm0%2B%2BSBYGMsXFiRkyaWCjwg6Xkb8olMi59co2InZbG38KpfuY2RDDrhdLUTezZwrC0cgBiPJGq8M5JZESuNedqVWQjsJ9qWCkpfHZ1Hti89bV8rNb0umL9oFQE5ltUTFA%2Bi8wk46CoIY8MSHS37IoBYx93aaTn3r9HHqeiZupaG%2Bb%2BvphBMzur1kpIuQdOSac52YVTAiTs4ADR6fclxsMdYxxVuoo%2FV1C2qqjttwHEs%2BJ1ge2WacAxSS3l4uKFJEsBSqgXnmFmuyfNsxTlPgFDpah9jg3K1V24u8BFh%2FYE82UzbZ9JeJn6VS1bcG7Bx5QGWymcSZ%2BQlMYO50vFlRMo8hFHTAsX5UaZqDfzYut%2BWTDhaiJjhFlEV4HPgTR%2BtnrU6b3vJp7hdq%2BP5wj8dLISNR%2FnOoAjELCjYartk3DR1eaNCGuQUttg3kSFXylho%2F%2FecowHfi5r7Z5QNWmjM1e5VQZDy4FOf2IpTzJhpNfpuoGLhhO1MIPT1cQGOqUBPISOdpVewMTtugSIlYfPI%2BY4JKwOfdQxx5F1t0DpQJAKA7%2Bu%2B6bXy4uad0rJuqPh%2Bc1FoUyKukqmVhS7SvU53AtwAjB9h2v%2Br1UErzoO6oyMFgUCdqRnVuyPsATF61i%2FBc5QeFWT3IuMWvO1kj5mfQ3Ur2UH%2F4O2OIbH8v3SoaMmNi4WW6NOlcTgLYq3ScJ77ijIdp2oM%2F%2Bh3RgivaF1xal3LLHI&X-Amz-Signature=a0f98fc5958cf29037d935682c6a7486756544403cee7b6e2b3e23e6d04ff10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKGE6JP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEbAIXRb2d56HDt%2BiHiTzE8oQGbnSmE8WRPpV16UibCYAiEA02x8Ux4IQv073gf%2FHBr2lh%2BFOvgabEWJqPw5NIBHw3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1hRgjpoEV6RtfWZyrcAxGR6kAUQukoXMANZQTdRZsMfsLymRQVB72vguh3d%2F8QpJGkzoyNVbsooYOKAnHkwhncD%2FBeEoACW1wVMmw%2BEEuE74xIUGBofLeEtkAh5UIHQ2Aa2PIsNmMeZyMSks9wYOPBp0p6EiTm0%2B%2BSBYGMsXFiRkyaWCjwg6Xkb8olMi59co2InZbG38KpfuY2RDDrhdLUTezZwrC0cgBiPJGq8M5JZESuNedqVWQjsJ9qWCkpfHZ1Hti89bV8rNb0umL9oFQE5ltUTFA%2Bi8wk46CoIY8MSHS37IoBYx93aaTn3r9HHqeiZupaG%2Bb%2BvphBMzur1kpIuQdOSac52YVTAiTs4ADR6fclxsMdYxxVuoo%2FV1C2qqjttwHEs%2BJ1ge2WacAxSS3l4uKFJEsBSqgXnmFmuyfNsxTlPgFDpah9jg3K1V24u8BFh%2FYE82UzbZ9JeJn6VS1bcG7Bx5QGWymcSZ%2BQlMYO50vFlRMo8hFHTAsX5UaZqDfzYut%2BWTDhaiJjhFlEV4HPgTR%2BtnrU6b3vJp7hdq%2BP5wj8dLISNR%2FnOoAjELCjYartk3DR1eaNCGuQUttg3kSFXylho%2F%2FecowHfi5r7Z5QNWmjM1e5VQZDy4FOf2IpTzJhpNfpuoGLhhO1MIPT1cQGOqUBPISOdpVewMTtugSIlYfPI%2BY4JKwOfdQxx5F1t0DpQJAKA7%2Bu%2B6bXy4uad0rJuqPh%2Bc1FoUyKukqmVhS7SvU53AtwAjB9h2v%2Br1UErzoO6oyMFgUCdqRnVuyPsATF61i%2FBc5QeFWT3IuMWvO1kj5mfQ3Ur2UH%2F4O2OIbH8v3SoaMmNi4WW6NOlcTgLYq3ScJ77ijIdp2oM%2F%2Bh3RgivaF1xal3LLHI&X-Amz-Signature=d8de78ac0a05ea94eaa9579a70fa1d04fe5e13cef26dc406c8764eabad718e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CK6F3NA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDSCKzeHq%2B7FgzteiAd%2B1UV%2FMPDPjdjOgZVQ5iAXcgCSQIhAMkWU6WvbOeCcB0GRsQ2r3QvcZ2q0mcCN4Cz1ylG2f%2F3KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUxO27W%2Fc3aMiUsycq3AOPz6TclPf1formLEJ%2BisIw%2FQwTvP6zj39qCCe2b9Gdfnxt7TJZhujwjibHJf63LR4nnYlCxMZqzbTCZnYfyLlnM3%2BDJTONVYaxTByC6oJCiJspMsbLBgESGTXAlJ5KiGwOssC3F4y%2FTnRSQs6qhJytk%2FVrUA3%2FHJufcVmoCSXSgm4wmRlkUxixcp6zJsGWvBvE7xHoZxJhmmdRUfBp4e%2FtDiJLBALnXfZO2OzlTkHOHp2fcZaqqHdIPfLS8lyapJwuQVbq85jZSyioOfIoyr3co2grRbxIFPfgNMeU9Ns0NY05xHotKlvNBmsBP%2BHr1iDJmStA0%2FlzJ1e2neoralztyKyskU6air1PTLQCaFLn9BAGAGg94Qkv2mSTU3tfCXLwSGEB9kwHPhzqYKLAM8GxYHOeHW9sUC%2Fy4FrAFi841MrDFRi8fTas4%2BLe%2FLTTxGRGSx%2B%2FpRn1AtRK296Akp34aBc4rZVpwdUonZkW1Mdx3Q9uASgRmRPYZ7%2FeRcc4AP1bVFztpDcOtUAy75WnzduM7%2FxrawDcKFf40%2BLqCyxh%2Bf2IYNvZD3nc%2B6zwxkwewTY4u0fT5KENmGuA570h6X6F%2BePBQp%2FLDvPhzoDWRf%2FNFvfAhw%2BCdlls2zqkyDCV09XEBjqkAdx1C%2FSC%2BErqgQKFO2WNmTIVTY8biBqC7AjsKagZacCjze89ICzSV1Sj%2FDGDLgkchmWR6VJl%2BUmx8ywipSmOd5rpuZuDJAulufDPRsE0d9GogmDHaqHFt0Rshk%2FUNjNXDyCGquxiPpCFoniA2V297OEF34CTfjGd5NP%2BCG3bEegcXqKXRnRyzbDBS609YSEOw7RyrLB9L1eDVF9datSayhMmCYmW&X-Amz-Signature=84ce8d2c67054e2ad6bb5c3fddedfc733d99f7da3ab292870ecd8cc95e4ffe6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDPI5S4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUqCwlNOzI6RK8ed8j4wKnKWp462FYBpFDy1oYO0T2cAiBg4%2F%2BD%2FlVhwMyZxR7fu84%2Bo%2FqcG%2F72zwtM%2F2sPHUvZ8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRsCjOb%2BLsks%2BBtZKtwDcPBJUDoYW4%2BrUBTo66BHSpdCvyECqTGV8eaWWvpwatT0rLmy4lGfZCG1FdAiKz%2FvhSO7Tn7Z%2FJ1lBxb5YM1%2BiOZkMQYQnsIfCqr47B1q9Fn6nYhgGs66zb3Eb7oOk9dFJ3hE7Sv9tDpS%2FiiTvjjX9uiuYrTfLri7ffFwAkd99HJuynVnQq3hXWvfIWHamCwwUGUZsuBOGG22cgWC9lLEw7UOFg4QYaqWFPKdy2rLOS%2FX5311FRgtSaqVGuCp5kOiKYGS2XU1p8GLuaKt%2F234HEffIJBhXfEJURsVvbPHZ7nWjsDnUCuwX%2FD0QP6DIvw2GVO3pMdJWZQ3KsCTR46WT7YIAJSAQfzmrBlebSiIPLWmXUa0RG7gWbO7Aj2EnNBUtb4MgjUcKm2sAHs45i9T4lwOHALKyb8GnT2zl3kpha%2BoIES5CHLzRNyslpvut823U2uiyf2nvL%2FDEfSZdkIibFzC%2F%2F%2BW4xYkShs820k5RQfIXJZFjl6INDYTW%2BviBsAVMe0fYp8PCoJGOhTgHoKjS5IiMF3ADb5VDhl5yjdhSxyv4p%2B2uXMkImuLUEPWTKzGKPWVxOKgWwtAR%2FOcXWPykun9iKL0%2BebrqdY461omsfWii5FDkRbmZzoNPAQwitPVxAY6pgHgzKPIZFAJHf7MkNO5Z02FAK0A9cLJLhGQrjnNXXHW3ok%2FI%2Bu%2BSsG5DijZfWI%2BRPibDZ6toNmov2%2BLolBm9C1tJJ%2FqM%2BxyeozzHZm3TKiVQba9vjMspI2pIf8TnWUCImSKD4YTDZIazrNJW6%2FjlyLPDLJz%2Fxa1X5eIA55aLJWHu5pa%2B6vO0l%2BhmgFWnvfpzKXAG8Kaq4Nc9yR3m7gBxTf7N5LOtKPc&X-Amz-Signature=8b5ca79a517f1785148a0c5599430170866c6dc4a01b3be931e8ece817c794e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDPI5S4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUqCwlNOzI6RK8ed8j4wKnKWp462FYBpFDy1oYO0T2cAiBg4%2F%2BD%2FlVhwMyZxR7fu84%2Bo%2FqcG%2F72zwtM%2F2sPHUvZ8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRsCjOb%2BLsks%2BBtZKtwDcPBJUDoYW4%2BrUBTo66BHSpdCvyECqTGV8eaWWvpwatT0rLmy4lGfZCG1FdAiKz%2FvhSO7Tn7Z%2FJ1lBxb5YM1%2BiOZkMQYQnsIfCqr47B1q9Fn6nYhgGs66zb3Eb7oOk9dFJ3hE7Sv9tDpS%2FiiTvjjX9uiuYrTfLri7ffFwAkd99HJuynVnQq3hXWvfIWHamCwwUGUZsuBOGG22cgWC9lLEw7UOFg4QYaqWFPKdy2rLOS%2FX5311FRgtSaqVGuCp5kOiKYGS2XU1p8GLuaKt%2F234HEffIJBhXfEJURsVvbPHZ7nWjsDnUCuwX%2FD0QP6DIvw2GVO3pMdJWZQ3KsCTR46WT7YIAJSAQfzmrBlebSiIPLWmXUa0RG7gWbO7Aj2EnNBUtb4MgjUcKm2sAHs45i9T4lwOHALKyb8GnT2zl3kpha%2BoIES5CHLzRNyslpvut823U2uiyf2nvL%2FDEfSZdkIibFzC%2F%2F%2BW4xYkShs820k5RQfIXJZFjl6INDYTW%2BviBsAVMe0fYp8PCoJGOhTgHoKjS5IiMF3ADb5VDhl5yjdhSxyv4p%2B2uXMkImuLUEPWTKzGKPWVxOKgWwtAR%2FOcXWPykun9iKL0%2BebrqdY461omsfWii5FDkRbmZzoNPAQwitPVxAY6pgHgzKPIZFAJHf7MkNO5Z02FAK0A9cLJLhGQrjnNXXHW3ok%2FI%2Bu%2BSsG5DijZfWI%2BRPibDZ6toNmov2%2BLolBm9C1tJJ%2FqM%2BxyeozzHZm3TKiVQba9vjMspI2pIf8TnWUCImSKD4YTDZIazrNJW6%2FjlyLPDLJz%2Fxa1X5eIA55aLJWHu5pa%2B6vO0l%2BhmgFWnvfpzKXAG8Kaq4Nc9yR3m7gBxTf7N5LOtKPc&X-Amz-Signature=b262e2070b775b6942768ed83268c156093fc705763f8771ac74550ab9ba0128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDPI5S4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUqCwlNOzI6RK8ed8j4wKnKWp462FYBpFDy1oYO0T2cAiBg4%2F%2BD%2FlVhwMyZxR7fu84%2Bo%2FqcG%2F72zwtM%2F2sPHUvZ8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRsCjOb%2BLsks%2BBtZKtwDcPBJUDoYW4%2BrUBTo66BHSpdCvyECqTGV8eaWWvpwatT0rLmy4lGfZCG1FdAiKz%2FvhSO7Tn7Z%2FJ1lBxb5YM1%2BiOZkMQYQnsIfCqr47B1q9Fn6nYhgGs66zb3Eb7oOk9dFJ3hE7Sv9tDpS%2FiiTvjjX9uiuYrTfLri7ffFwAkd99HJuynVnQq3hXWvfIWHamCwwUGUZsuBOGG22cgWC9lLEw7UOFg4QYaqWFPKdy2rLOS%2FX5311FRgtSaqVGuCp5kOiKYGS2XU1p8GLuaKt%2F234HEffIJBhXfEJURsVvbPHZ7nWjsDnUCuwX%2FD0QP6DIvw2GVO3pMdJWZQ3KsCTR46WT7YIAJSAQfzmrBlebSiIPLWmXUa0RG7gWbO7Aj2EnNBUtb4MgjUcKm2sAHs45i9T4lwOHALKyb8GnT2zl3kpha%2BoIES5CHLzRNyslpvut823U2uiyf2nvL%2FDEfSZdkIibFzC%2F%2F%2BW4xYkShs820k5RQfIXJZFjl6INDYTW%2BviBsAVMe0fYp8PCoJGOhTgHoKjS5IiMF3ADb5VDhl5yjdhSxyv4p%2B2uXMkImuLUEPWTKzGKPWVxOKgWwtAR%2FOcXWPykun9iKL0%2BebrqdY461omsfWii5FDkRbmZzoNPAQwitPVxAY6pgHgzKPIZFAJHf7MkNO5Z02FAK0A9cLJLhGQrjnNXXHW3ok%2FI%2Bu%2BSsG5DijZfWI%2BRPibDZ6toNmov2%2BLolBm9C1tJJ%2FqM%2BxyeozzHZm3TKiVQba9vjMspI2pIf8TnWUCImSKD4YTDZIazrNJW6%2FjlyLPDLJz%2Fxa1X5eIA55aLJWHu5pa%2B6vO0l%2BhmgFWnvfpzKXAG8Kaq4Nc9yR3m7gBxTf7N5LOtKPc&X-Amz-Signature=4b50ac1161387e1a1b5af7195af3f5bed8dd253122275e119470a7c49828a4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDPI5S4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUqCwlNOzI6RK8ed8j4wKnKWp462FYBpFDy1oYO0T2cAiBg4%2F%2BD%2FlVhwMyZxR7fu84%2Bo%2FqcG%2F72zwtM%2F2sPHUvZ8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRsCjOb%2BLsks%2BBtZKtwDcPBJUDoYW4%2BrUBTo66BHSpdCvyECqTGV8eaWWvpwatT0rLmy4lGfZCG1FdAiKz%2FvhSO7Tn7Z%2FJ1lBxb5YM1%2BiOZkMQYQnsIfCqr47B1q9Fn6nYhgGs66zb3Eb7oOk9dFJ3hE7Sv9tDpS%2FiiTvjjX9uiuYrTfLri7ffFwAkd99HJuynVnQq3hXWvfIWHamCwwUGUZsuBOGG22cgWC9lLEw7UOFg4QYaqWFPKdy2rLOS%2FX5311FRgtSaqVGuCp5kOiKYGS2XU1p8GLuaKt%2F234HEffIJBhXfEJURsVvbPHZ7nWjsDnUCuwX%2FD0QP6DIvw2GVO3pMdJWZQ3KsCTR46WT7YIAJSAQfzmrBlebSiIPLWmXUa0RG7gWbO7Aj2EnNBUtb4MgjUcKm2sAHs45i9T4lwOHALKyb8GnT2zl3kpha%2BoIES5CHLzRNyslpvut823U2uiyf2nvL%2FDEfSZdkIibFzC%2F%2F%2BW4xYkShs820k5RQfIXJZFjl6INDYTW%2BviBsAVMe0fYp8PCoJGOhTgHoKjS5IiMF3ADb5VDhl5yjdhSxyv4p%2B2uXMkImuLUEPWTKzGKPWVxOKgWwtAR%2FOcXWPykun9iKL0%2BebrqdY461omsfWii5FDkRbmZzoNPAQwitPVxAY6pgHgzKPIZFAJHf7MkNO5Z02FAK0A9cLJLhGQrjnNXXHW3ok%2FI%2Bu%2BSsG5DijZfWI%2BRPibDZ6toNmov2%2BLolBm9C1tJJ%2FqM%2BxyeozzHZm3TKiVQba9vjMspI2pIf8TnWUCImSKD4YTDZIazrNJW6%2FjlyLPDLJz%2Fxa1X5eIA55aLJWHu5pa%2B6vO0l%2BhmgFWnvfpzKXAG8Kaq4Nc9yR3m7gBxTf7N5LOtKPc&X-Amz-Signature=f43d364cdf08e92f3c132d5f5efb393d58dd6a6b2ce3d89d2aa27970621fa80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDPI5S4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUqCwlNOzI6RK8ed8j4wKnKWp462FYBpFDy1oYO0T2cAiBg4%2F%2BD%2FlVhwMyZxR7fu84%2Bo%2FqcG%2F72zwtM%2F2sPHUvZ8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRsCjOb%2BLsks%2BBtZKtwDcPBJUDoYW4%2BrUBTo66BHSpdCvyECqTGV8eaWWvpwatT0rLmy4lGfZCG1FdAiKz%2FvhSO7Tn7Z%2FJ1lBxb5YM1%2BiOZkMQYQnsIfCqr47B1q9Fn6nYhgGs66zb3Eb7oOk9dFJ3hE7Sv9tDpS%2FiiTvjjX9uiuYrTfLri7ffFwAkd99HJuynVnQq3hXWvfIWHamCwwUGUZsuBOGG22cgWC9lLEw7UOFg4QYaqWFPKdy2rLOS%2FX5311FRgtSaqVGuCp5kOiKYGS2XU1p8GLuaKt%2F234HEffIJBhXfEJURsVvbPHZ7nWjsDnUCuwX%2FD0QP6DIvw2GVO3pMdJWZQ3KsCTR46WT7YIAJSAQfzmrBlebSiIPLWmXUa0RG7gWbO7Aj2EnNBUtb4MgjUcKm2sAHs45i9T4lwOHALKyb8GnT2zl3kpha%2BoIES5CHLzRNyslpvut823U2uiyf2nvL%2FDEfSZdkIibFzC%2F%2F%2BW4xYkShs820k5RQfIXJZFjl6INDYTW%2BviBsAVMe0fYp8PCoJGOhTgHoKjS5IiMF3ADb5VDhl5yjdhSxyv4p%2B2uXMkImuLUEPWTKzGKPWVxOKgWwtAR%2FOcXWPykun9iKL0%2BebrqdY461omsfWii5FDkRbmZzoNPAQwitPVxAY6pgHgzKPIZFAJHf7MkNO5Z02FAK0A9cLJLhGQrjnNXXHW3ok%2FI%2Bu%2BSsG5DijZfWI%2BRPibDZ6toNmov2%2BLolBm9C1tJJ%2FqM%2BxyeozzHZm3TKiVQba9vjMspI2pIf8TnWUCImSKD4YTDZIazrNJW6%2FjlyLPDLJz%2Fxa1X5eIA55aLJWHu5pa%2B6vO0l%2BhmgFWnvfpzKXAG8Kaq4Nc9yR3m7gBxTf7N5LOtKPc&X-Amz-Signature=c547f0c7edb7e915f83a4d863c1fba50952b991bdb7e080bef4fb2ded7f9360d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDPI5S4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUqCwlNOzI6RK8ed8j4wKnKWp462FYBpFDy1oYO0T2cAiBg4%2F%2BD%2FlVhwMyZxR7fu84%2Bo%2FqcG%2F72zwtM%2F2sPHUvZ8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRsCjOb%2BLsks%2BBtZKtwDcPBJUDoYW4%2BrUBTo66BHSpdCvyECqTGV8eaWWvpwatT0rLmy4lGfZCG1FdAiKz%2FvhSO7Tn7Z%2FJ1lBxb5YM1%2BiOZkMQYQnsIfCqr47B1q9Fn6nYhgGs66zb3Eb7oOk9dFJ3hE7Sv9tDpS%2FiiTvjjX9uiuYrTfLri7ffFwAkd99HJuynVnQq3hXWvfIWHamCwwUGUZsuBOGG22cgWC9lLEw7UOFg4QYaqWFPKdy2rLOS%2FX5311FRgtSaqVGuCp5kOiKYGS2XU1p8GLuaKt%2F234HEffIJBhXfEJURsVvbPHZ7nWjsDnUCuwX%2FD0QP6DIvw2GVO3pMdJWZQ3KsCTR46WT7YIAJSAQfzmrBlebSiIPLWmXUa0RG7gWbO7Aj2EnNBUtb4MgjUcKm2sAHs45i9T4lwOHALKyb8GnT2zl3kpha%2BoIES5CHLzRNyslpvut823U2uiyf2nvL%2FDEfSZdkIibFzC%2F%2F%2BW4xYkShs820k5RQfIXJZFjl6INDYTW%2BviBsAVMe0fYp8PCoJGOhTgHoKjS5IiMF3ADb5VDhl5yjdhSxyv4p%2B2uXMkImuLUEPWTKzGKPWVxOKgWwtAR%2FOcXWPykun9iKL0%2BebrqdY461omsfWii5FDkRbmZzoNPAQwitPVxAY6pgHgzKPIZFAJHf7MkNO5Z02FAK0A9cLJLhGQrjnNXXHW3ok%2FI%2Bu%2BSsG5DijZfWI%2BRPibDZ6toNmov2%2BLolBm9C1tJJ%2FqM%2BxyeozzHZm3TKiVQba9vjMspI2pIf8TnWUCImSKD4YTDZIazrNJW6%2FjlyLPDLJz%2Fxa1X5eIA55aLJWHu5pa%2B6vO0l%2BhmgFWnvfpzKXAG8Kaq4Nc9yR3m7gBxTf7N5LOtKPc&X-Amz-Signature=304e25025f213ef25c5e05ab0db9164eba00844b5769ea976baec224e8ca09eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDPI5S4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUqCwlNOzI6RK8ed8j4wKnKWp462FYBpFDy1oYO0T2cAiBg4%2F%2BD%2FlVhwMyZxR7fu84%2Bo%2FqcG%2F72zwtM%2F2sPHUvZ8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRsCjOb%2BLsks%2BBtZKtwDcPBJUDoYW4%2BrUBTo66BHSpdCvyECqTGV8eaWWvpwatT0rLmy4lGfZCG1FdAiKz%2FvhSO7Tn7Z%2FJ1lBxb5YM1%2BiOZkMQYQnsIfCqr47B1q9Fn6nYhgGs66zb3Eb7oOk9dFJ3hE7Sv9tDpS%2FiiTvjjX9uiuYrTfLri7ffFwAkd99HJuynVnQq3hXWvfIWHamCwwUGUZsuBOGG22cgWC9lLEw7UOFg4QYaqWFPKdy2rLOS%2FX5311FRgtSaqVGuCp5kOiKYGS2XU1p8GLuaKt%2F234HEffIJBhXfEJURsVvbPHZ7nWjsDnUCuwX%2FD0QP6DIvw2GVO3pMdJWZQ3KsCTR46WT7YIAJSAQfzmrBlebSiIPLWmXUa0RG7gWbO7Aj2EnNBUtb4MgjUcKm2sAHs45i9T4lwOHALKyb8GnT2zl3kpha%2BoIES5CHLzRNyslpvut823U2uiyf2nvL%2FDEfSZdkIibFzC%2F%2F%2BW4xYkShs820k5RQfIXJZFjl6INDYTW%2BviBsAVMe0fYp8PCoJGOhTgHoKjS5IiMF3ADb5VDhl5yjdhSxyv4p%2B2uXMkImuLUEPWTKzGKPWVxOKgWwtAR%2FOcXWPykun9iKL0%2BebrqdY461omsfWii5FDkRbmZzoNPAQwitPVxAY6pgHgzKPIZFAJHf7MkNO5Z02FAK0A9cLJLhGQrjnNXXHW3ok%2FI%2Bu%2BSsG5DijZfWI%2BRPibDZ6toNmov2%2BLolBm9C1tJJ%2FqM%2BxyeozzHZm3TKiVQba9vjMspI2pIf8TnWUCImSKD4YTDZIazrNJW6%2FjlyLPDLJz%2Fxa1X5eIA55aLJWHu5pa%2B6vO0l%2BhmgFWnvfpzKXAG8Kaq4Nc9yR3m7gBxTf7N5LOtKPc&X-Amz-Signature=27ce8538086777f608348b0daf23b510a4e52eb96ec144fa6b448ec66387f387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDPI5S4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUqCwlNOzI6RK8ed8j4wKnKWp462FYBpFDy1oYO0T2cAiBg4%2F%2BD%2FlVhwMyZxR7fu84%2Bo%2FqcG%2F72zwtM%2F2sPHUvZ8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRsCjOb%2BLsks%2BBtZKtwDcPBJUDoYW4%2BrUBTo66BHSpdCvyECqTGV8eaWWvpwatT0rLmy4lGfZCG1FdAiKz%2FvhSO7Tn7Z%2FJ1lBxb5YM1%2BiOZkMQYQnsIfCqr47B1q9Fn6nYhgGs66zb3Eb7oOk9dFJ3hE7Sv9tDpS%2FiiTvjjX9uiuYrTfLri7ffFwAkd99HJuynVnQq3hXWvfIWHamCwwUGUZsuBOGG22cgWC9lLEw7UOFg4QYaqWFPKdy2rLOS%2FX5311FRgtSaqVGuCp5kOiKYGS2XU1p8GLuaKt%2F234HEffIJBhXfEJURsVvbPHZ7nWjsDnUCuwX%2FD0QP6DIvw2GVO3pMdJWZQ3KsCTR46WT7YIAJSAQfzmrBlebSiIPLWmXUa0RG7gWbO7Aj2EnNBUtb4MgjUcKm2sAHs45i9T4lwOHALKyb8GnT2zl3kpha%2BoIES5CHLzRNyslpvut823U2uiyf2nvL%2FDEfSZdkIibFzC%2F%2F%2BW4xYkShs820k5RQfIXJZFjl6INDYTW%2BviBsAVMe0fYp8PCoJGOhTgHoKjS5IiMF3ADb5VDhl5yjdhSxyv4p%2B2uXMkImuLUEPWTKzGKPWVxOKgWwtAR%2FOcXWPykun9iKL0%2BebrqdY461omsfWii5FDkRbmZzoNPAQwitPVxAY6pgHgzKPIZFAJHf7MkNO5Z02FAK0A9cLJLhGQrjnNXXHW3ok%2FI%2Bu%2BSsG5DijZfWI%2BRPibDZ6toNmov2%2BLolBm9C1tJJ%2FqM%2BxyeozzHZm3TKiVQba9vjMspI2pIf8TnWUCImSKD4YTDZIazrNJW6%2FjlyLPDLJz%2Fxa1X5eIA55aLJWHu5pa%2B6vO0l%2BhmgFWnvfpzKXAG8Kaq4Nc9yR3m7gBxTf7N5LOtKPc&X-Amz-Signature=b66ee66692609ce23e6e189ede89cccc5b78ac8cb72348b9b5ca47ede169b91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDPI5S4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAUqCwlNOzI6RK8ed8j4wKnKWp462FYBpFDy1oYO0T2cAiBg4%2F%2BD%2FlVhwMyZxR7fu84%2Bo%2FqcG%2F72zwtM%2F2sPHUvZ8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRsCjOb%2BLsks%2BBtZKtwDcPBJUDoYW4%2BrUBTo66BHSpdCvyECqTGV8eaWWvpwatT0rLmy4lGfZCG1FdAiKz%2FvhSO7Tn7Z%2FJ1lBxb5YM1%2BiOZkMQYQnsIfCqr47B1q9Fn6nYhgGs66zb3Eb7oOk9dFJ3hE7Sv9tDpS%2FiiTvjjX9uiuYrTfLri7ffFwAkd99HJuynVnQq3hXWvfIWHamCwwUGUZsuBOGG22cgWC9lLEw7UOFg4QYaqWFPKdy2rLOS%2FX5311FRgtSaqVGuCp5kOiKYGS2XU1p8GLuaKt%2F234HEffIJBhXfEJURsVvbPHZ7nWjsDnUCuwX%2FD0QP6DIvw2GVO3pMdJWZQ3KsCTR46WT7YIAJSAQfzmrBlebSiIPLWmXUa0RG7gWbO7Aj2EnNBUtb4MgjUcKm2sAHs45i9T4lwOHALKyb8GnT2zl3kpha%2BoIES5CHLzRNyslpvut823U2uiyf2nvL%2FDEfSZdkIibFzC%2F%2F%2BW4xYkShs820k5RQfIXJZFjl6INDYTW%2BviBsAVMe0fYp8PCoJGOhTgHoKjS5IiMF3ADb5VDhl5yjdhSxyv4p%2B2uXMkImuLUEPWTKzGKPWVxOKgWwtAR%2FOcXWPykun9iKL0%2BebrqdY461omsfWii5FDkRbmZzoNPAQwitPVxAY6pgHgzKPIZFAJHf7MkNO5Z02FAK0A9cLJLhGQrjnNXXHW3ok%2FI%2Bu%2BSsG5DijZfWI%2BRPibDZ6toNmov2%2BLolBm9C1tJJ%2FqM%2BxyeozzHZm3TKiVQba9vjMspI2pIf8TnWUCImSKD4YTDZIazrNJW6%2FjlyLPDLJz%2Fxa1X5eIA55aLJWHu5pa%2B6vO0l%2BhmgFWnvfpzKXAG8Kaq4Nc9yR3m7gBxTf7N5LOtKPc&X-Amz-Signature=2bc8feb5f53250f3880417ef529b18639c9f0301dc2217f957c950fba0a21910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
