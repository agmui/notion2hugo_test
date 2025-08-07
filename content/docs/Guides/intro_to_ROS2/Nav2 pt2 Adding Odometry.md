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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TROB3M4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWiSsn70nE9DudG1E1dh4OYkma2pVpx4cml0uh66TrLgIhAJM%2FAIQaNImcI7CjEcd2wq0gFWSEgYiNTHv%2BBeB4eWj%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR8NpSvD3Xmy2T54q3AMWo6kp07CLwk5LyhwMB805ajnoXrtfweULe4qh2l3MGcIwEevNwYYIuKhawkzUqFS7uc1qXehJodRQOm94s%2F9ribpqeuTofY46vh2Zj29%2FdcGfVIJHNSFeEGxyKwoe9N5v04XphbTddDRcBB%2FPgmI2US0aHpENWIi2EyYklsGLvO6I7yGvcRcF6sJATcPiin%2F%2FHCF6gQAkzY5T9o%2Fly2XWc8Q%2FJhVHZboKpXNRv%2FIbLau8du%2FeX1YOt8BfPme1ySxzzsAoma3r3634sbigP8XKjiy5DNNmB0cqX%2FE1kxWdHh3kjZpPQmJ2SQbU1XhCy6u%2B5wcqvXUwZjbnGft%2B5wzvN4CGIenEjkn8ikxfgk5BLeEXQzCCVqjtItSAabzwEJyZh0bzjnvZFIki62XyXZyTtXY3bbumdIo8%2Fj6WStJmHnJhFf02GjN8ldZqfKxDCUTX8XdujTpWG7aNZovngmfbr20%2BO1eQ%2FpWPgDpIOMC%2BXQyDR56tN3Y1ejETtUk4y46w8nmj%2Bt5tNNYhPcqyvsCb72OsBwpjYUISeYd5pMCDrFErLAuMCcMZopwxyincOylLIGiODXcQM1AUa2uzVmdQqtCmLl%2FWvuVgFmc%2FHRyw4L4oaxmbmRnTT2qZuDCb7tPEBjqkAQcUjrqmw%2FHgRI5atqy07KUaQqrpAKiiqoarOwhaCp1%2FGs0%2FiJYpQrUy8FqezxP4WLYGc26pndBgx2b1Ccm75dnRG%2BOofl9ILh3ZcLfJazo%2BVfXNQu5JMgUinmVeSNq9LKF5lj2lPBYCKai8X0jg%2Fkvkkv7Od3zkctWA236f2CO7tEjAtvd2lGkn%2B47P7VOaotPIkY2Z3hM8Qcux0%2FXv6rpTpDyu&X-Amz-Signature=d6dcee7726981ddc0fc5e7d83bcbaebadad7ed0dced3bd9b8bdf707a7f67885d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TROB3M4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWiSsn70nE9DudG1E1dh4OYkma2pVpx4cml0uh66TrLgIhAJM%2FAIQaNImcI7CjEcd2wq0gFWSEgYiNTHv%2BBeB4eWj%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR8NpSvD3Xmy2T54q3AMWo6kp07CLwk5LyhwMB805ajnoXrtfweULe4qh2l3MGcIwEevNwYYIuKhawkzUqFS7uc1qXehJodRQOm94s%2F9ribpqeuTofY46vh2Zj29%2FdcGfVIJHNSFeEGxyKwoe9N5v04XphbTddDRcBB%2FPgmI2US0aHpENWIi2EyYklsGLvO6I7yGvcRcF6sJATcPiin%2F%2FHCF6gQAkzY5T9o%2Fly2XWc8Q%2FJhVHZboKpXNRv%2FIbLau8du%2FeX1YOt8BfPme1ySxzzsAoma3r3634sbigP8XKjiy5DNNmB0cqX%2FE1kxWdHh3kjZpPQmJ2SQbU1XhCy6u%2B5wcqvXUwZjbnGft%2B5wzvN4CGIenEjkn8ikxfgk5BLeEXQzCCVqjtItSAabzwEJyZh0bzjnvZFIki62XyXZyTtXY3bbumdIo8%2Fj6WStJmHnJhFf02GjN8ldZqfKxDCUTX8XdujTpWG7aNZovngmfbr20%2BO1eQ%2FpWPgDpIOMC%2BXQyDR56tN3Y1ejETtUk4y46w8nmj%2Bt5tNNYhPcqyvsCb72OsBwpjYUISeYd5pMCDrFErLAuMCcMZopwxyincOylLIGiODXcQM1AUa2uzVmdQqtCmLl%2FWvuVgFmc%2FHRyw4L4oaxmbmRnTT2qZuDCb7tPEBjqkAQcUjrqmw%2FHgRI5atqy07KUaQqrpAKiiqoarOwhaCp1%2FGs0%2FiJYpQrUy8FqezxP4WLYGc26pndBgx2b1Ccm75dnRG%2BOofl9ILh3ZcLfJazo%2BVfXNQu5JMgUinmVeSNq9LKF5lj2lPBYCKai8X0jg%2Fkvkkv7Od3zkctWA236f2CO7tEjAtvd2lGkn%2B47P7VOaotPIkY2Z3hM8Qcux0%2FXv6rpTpDyu&X-Amz-Signature=043ac690ac4a67232fa8c4a81324a432096f895e81ac5a89268e4bdf27bed106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TROB3M4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWiSsn70nE9DudG1E1dh4OYkma2pVpx4cml0uh66TrLgIhAJM%2FAIQaNImcI7CjEcd2wq0gFWSEgYiNTHv%2BBeB4eWj%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR8NpSvD3Xmy2T54q3AMWo6kp07CLwk5LyhwMB805ajnoXrtfweULe4qh2l3MGcIwEevNwYYIuKhawkzUqFS7uc1qXehJodRQOm94s%2F9ribpqeuTofY46vh2Zj29%2FdcGfVIJHNSFeEGxyKwoe9N5v04XphbTddDRcBB%2FPgmI2US0aHpENWIi2EyYklsGLvO6I7yGvcRcF6sJATcPiin%2F%2FHCF6gQAkzY5T9o%2Fly2XWc8Q%2FJhVHZboKpXNRv%2FIbLau8du%2FeX1YOt8BfPme1ySxzzsAoma3r3634sbigP8XKjiy5DNNmB0cqX%2FE1kxWdHh3kjZpPQmJ2SQbU1XhCy6u%2B5wcqvXUwZjbnGft%2B5wzvN4CGIenEjkn8ikxfgk5BLeEXQzCCVqjtItSAabzwEJyZh0bzjnvZFIki62XyXZyTtXY3bbumdIo8%2Fj6WStJmHnJhFf02GjN8ldZqfKxDCUTX8XdujTpWG7aNZovngmfbr20%2BO1eQ%2FpWPgDpIOMC%2BXQyDR56tN3Y1ejETtUk4y46w8nmj%2Bt5tNNYhPcqyvsCb72OsBwpjYUISeYd5pMCDrFErLAuMCcMZopwxyincOylLIGiODXcQM1AUa2uzVmdQqtCmLl%2FWvuVgFmc%2FHRyw4L4oaxmbmRnTT2qZuDCb7tPEBjqkAQcUjrqmw%2FHgRI5atqy07KUaQqrpAKiiqoarOwhaCp1%2FGs0%2FiJYpQrUy8FqezxP4WLYGc26pndBgx2b1Ccm75dnRG%2BOofl9ILh3ZcLfJazo%2BVfXNQu5JMgUinmVeSNq9LKF5lj2lPBYCKai8X0jg%2Fkvkkv7Od3zkctWA236f2CO7tEjAtvd2lGkn%2B47P7VOaotPIkY2Z3hM8Qcux0%2FXv6rpTpDyu&X-Amz-Signature=23ad0e2e15b157b7ca3d4870886b46eaec77270796b1b84faec33c6bcb2fe544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TROB3M4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWiSsn70nE9DudG1E1dh4OYkma2pVpx4cml0uh66TrLgIhAJM%2FAIQaNImcI7CjEcd2wq0gFWSEgYiNTHv%2BBeB4eWj%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR8NpSvD3Xmy2T54q3AMWo6kp07CLwk5LyhwMB805ajnoXrtfweULe4qh2l3MGcIwEevNwYYIuKhawkzUqFS7uc1qXehJodRQOm94s%2F9ribpqeuTofY46vh2Zj29%2FdcGfVIJHNSFeEGxyKwoe9N5v04XphbTddDRcBB%2FPgmI2US0aHpENWIi2EyYklsGLvO6I7yGvcRcF6sJATcPiin%2F%2FHCF6gQAkzY5T9o%2Fly2XWc8Q%2FJhVHZboKpXNRv%2FIbLau8du%2FeX1YOt8BfPme1ySxzzsAoma3r3634sbigP8XKjiy5DNNmB0cqX%2FE1kxWdHh3kjZpPQmJ2SQbU1XhCy6u%2B5wcqvXUwZjbnGft%2B5wzvN4CGIenEjkn8ikxfgk5BLeEXQzCCVqjtItSAabzwEJyZh0bzjnvZFIki62XyXZyTtXY3bbumdIo8%2Fj6WStJmHnJhFf02GjN8ldZqfKxDCUTX8XdujTpWG7aNZovngmfbr20%2BO1eQ%2FpWPgDpIOMC%2BXQyDR56tN3Y1ejETtUk4y46w8nmj%2Bt5tNNYhPcqyvsCb72OsBwpjYUISeYd5pMCDrFErLAuMCcMZopwxyincOylLIGiODXcQM1AUa2uzVmdQqtCmLl%2FWvuVgFmc%2FHRyw4L4oaxmbmRnTT2qZuDCb7tPEBjqkAQcUjrqmw%2FHgRI5atqy07KUaQqrpAKiiqoarOwhaCp1%2FGs0%2FiJYpQrUy8FqezxP4WLYGc26pndBgx2b1Ccm75dnRG%2BOofl9ILh3ZcLfJazo%2BVfXNQu5JMgUinmVeSNq9LKF5lj2lPBYCKai8X0jg%2Fkvkkv7Od3zkctWA236f2CO7tEjAtvd2lGkn%2B47P7VOaotPIkY2Z3hM8Qcux0%2FXv6rpTpDyu&X-Amz-Signature=e3448621fee0ea3e4cb7b1e465151674c3169b0601d2f9ac4bc65ea3c377e516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TROB3M4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWiSsn70nE9DudG1E1dh4OYkma2pVpx4cml0uh66TrLgIhAJM%2FAIQaNImcI7CjEcd2wq0gFWSEgYiNTHv%2BBeB4eWj%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR8NpSvD3Xmy2T54q3AMWo6kp07CLwk5LyhwMB805ajnoXrtfweULe4qh2l3MGcIwEevNwYYIuKhawkzUqFS7uc1qXehJodRQOm94s%2F9ribpqeuTofY46vh2Zj29%2FdcGfVIJHNSFeEGxyKwoe9N5v04XphbTddDRcBB%2FPgmI2US0aHpENWIi2EyYklsGLvO6I7yGvcRcF6sJATcPiin%2F%2FHCF6gQAkzY5T9o%2Fly2XWc8Q%2FJhVHZboKpXNRv%2FIbLau8du%2FeX1YOt8BfPme1ySxzzsAoma3r3634sbigP8XKjiy5DNNmB0cqX%2FE1kxWdHh3kjZpPQmJ2SQbU1XhCy6u%2B5wcqvXUwZjbnGft%2B5wzvN4CGIenEjkn8ikxfgk5BLeEXQzCCVqjtItSAabzwEJyZh0bzjnvZFIki62XyXZyTtXY3bbumdIo8%2Fj6WStJmHnJhFf02GjN8ldZqfKxDCUTX8XdujTpWG7aNZovngmfbr20%2BO1eQ%2FpWPgDpIOMC%2BXQyDR56tN3Y1ejETtUk4y46w8nmj%2Bt5tNNYhPcqyvsCb72OsBwpjYUISeYd5pMCDrFErLAuMCcMZopwxyincOylLIGiODXcQM1AUa2uzVmdQqtCmLl%2FWvuVgFmc%2FHRyw4L4oaxmbmRnTT2qZuDCb7tPEBjqkAQcUjrqmw%2FHgRI5atqy07KUaQqrpAKiiqoarOwhaCp1%2FGs0%2FiJYpQrUy8FqezxP4WLYGc26pndBgx2b1Ccm75dnRG%2BOofl9ILh3ZcLfJazo%2BVfXNQu5JMgUinmVeSNq9LKF5lj2lPBYCKai8X0jg%2Fkvkkv7Od3zkctWA236f2CO7tEjAtvd2lGkn%2B47P7VOaotPIkY2Z3hM8Qcux0%2FXv6rpTpDyu&X-Amz-Signature=895d1b60f1345693f3cc0ec4cd2ac2726cfe44d80caf267b977e74a915756233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TROB3M4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWiSsn70nE9DudG1E1dh4OYkma2pVpx4cml0uh66TrLgIhAJM%2FAIQaNImcI7CjEcd2wq0gFWSEgYiNTHv%2BBeB4eWj%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR8NpSvD3Xmy2T54q3AMWo6kp07CLwk5LyhwMB805ajnoXrtfweULe4qh2l3MGcIwEevNwYYIuKhawkzUqFS7uc1qXehJodRQOm94s%2F9ribpqeuTofY46vh2Zj29%2FdcGfVIJHNSFeEGxyKwoe9N5v04XphbTddDRcBB%2FPgmI2US0aHpENWIi2EyYklsGLvO6I7yGvcRcF6sJATcPiin%2F%2FHCF6gQAkzY5T9o%2Fly2XWc8Q%2FJhVHZboKpXNRv%2FIbLau8du%2FeX1YOt8BfPme1ySxzzsAoma3r3634sbigP8XKjiy5DNNmB0cqX%2FE1kxWdHh3kjZpPQmJ2SQbU1XhCy6u%2B5wcqvXUwZjbnGft%2B5wzvN4CGIenEjkn8ikxfgk5BLeEXQzCCVqjtItSAabzwEJyZh0bzjnvZFIki62XyXZyTtXY3bbumdIo8%2Fj6WStJmHnJhFf02GjN8ldZqfKxDCUTX8XdujTpWG7aNZovngmfbr20%2BO1eQ%2FpWPgDpIOMC%2BXQyDR56tN3Y1ejETtUk4y46w8nmj%2Bt5tNNYhPcqyvsCb72OsBwpjYUISeYd5pMCDrFErLAuMCcMZopwxyincOylLIGiODXcQM1AUa2uzVmdQqtCmLl%2FWvuVgFmc%2FHRyw4L4oaxmbmRnTT2qZuDCb7tPEBjqkAQcUjrqmw%2FHgRI5atqy07KUaQqrpAKiiqoarOwhaCp1%2FGs0%2FiJYpQrUy8FqezxP4WLYGc26pndBgx2b1Ccm75dnRG%2BOofl9ILh3ZcLfJazo%2BVfXNQu5JMgUinmVeSNq9LKF5lj2lPBYCKai8X0jg%2Fkvkkv7Od3zkctWA236f2CO7tEjAtvd2lGkn%2B47P7VOaotPIkY2Z3hM8Qcux0%2FXv6rpTpDyu&X-Amz-Signature=391029306c1bd88f8a37a461628d11a6668f363b03d1abcc66e79424d005d4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TROB3M4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWiSsn70nE9DudG1E1dh4OYkma2pVpx4cml0uh66TrLgIhAJM%2FAIQaNImcI7CjEcd2wq0gFWSEgYiNTHv%2BBeB4eWj%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR8NpSvD3Xmy2T54q3AMWo6kp07CLwk5LyhwMB805ajnoXrtfweULe4qh2l3MGcIwEevNwYYIuKhawkzUqFS7uc1qXehJodRQOm94s%2F9ribpqeuTofY46vh2Zj29%2FdcGfVIJHNSFeEGxyKwoe9N5v04XphbTddDRcBB%2FPgmI2US0aHpENWIi2EyYklsGLvO6I7yGvcRcF6sJATcPiin%2F%2FHCF6gQAkzY5T9o%2Fly2XWc8Q%2FJhVHZboKpXNRv%2FIbLau8du%2FeX1YOt8BfPme1ySxzzsAoma3r3634sbigP8XKjiy5DNNmB0cqX%2FE1kxWdHh3kjZpPQmJ2SQbU1XhCy6u%2B5wcqvXUwZjbnGft%2B5wzvN4CGIenEjkn8ikxfgk5BLeEXQzCCVqjtItSAabzwEJyZh0bzjnvZFIki62XyXZyTtXY3bbumdIo8%2Fj6WStJmHnJhFf02GjN8ldZqfKxDCUTX8XdujTpWG7aNZovngmfbr20%2BO1eQ%2FpWPgDpIOMC%2BXQyDR56tN3Y1ejETtUk4y46w8nmj%2Bt5tNNYhPcqyvsCb72OsBwpjYUISeYd5pMCDrFErLAuMCcMZopwxyincOylLIGiODXcQM1AUa2uzVmdQqtCmLl%2FWvuVgFmc%2FHRyw4L4oaxmbmRnTT2qZuDCb7tPEBjqkAQcUjrqmw%2FHgRI5atqy07KUaQqrpAKiiqoarOwhaCp1%2FGs0%2FiJYpQrUy8FqezxP4WLYGc26pndBgx2b1Ccm75dnRG%2BOofl9ILh3ZcLfJazo%2BVfXNQu5JMgUinmVeSNq9LKF5lj2lPBYCKai8X0jg%2Fkvkkv7Od3zkctWA236f2CO7tEjAtvd2lGkn%2B47P7VOaotPIkY2Z3hM8Qcux0%2FXv6rpTpDyu&X-Amz-Signature=bcd82ac2abf75829293cb7e46936e68bdf64b260fe305edae783571f0bb2de05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TROB3M4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWiSsn70nE9DudG1E1dh4OYkma2pVpx4cml0uh66TrLgIhAJM%2FAIQaNImcI7CjEcd2wq0gFWSEgYiNTHv%2BBeB4eWj%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR8NpSvD3Xmy2T54q3AMWo6kp07CLwk5LyhwMB805ajnoXrtfweULe4qh2l3MGcIwEevNwYYIuKhawkzUqFS7uc1qXehJodRQOm94s%2F9ribpqeuTofY46vh2Zj29%2FdcGfVIJHNSFeEGxyKwoe9N5v04XphbTddDRcBB%2FPgmI2US0aHpENWIi2EyYklsGLvO6I7yGvcRcF6sJATcPiin%2F%2FHCF6gQAkzY5T9o%2Fly2XWc8Q%2FJhVHZboKpXNRv%2FIbLau8du%2FeX1YOt8BfPme1ySxzzsAoma3r3634sbigP8XKjiy5DNNmB0cqX%2FE1kxWdHh3kjZpPQmJ2SQbU1XhCy6u%2B5wcqvXUwZjbnGft%2B5wzvN4CGIenEjkn8ikxfgk5BLeEXQzCCVqjtItSAabzwEJyZh0bzjnvZFIki62XyXZyTtXY3bbumdIo8%2Fj6WStJmHnJhFf02GjN8ldZqfKxDCUTX8XdujTpWG7aNZovngmfbr20%2BO1eQ%2FpWPgDpIOMC%2BXQyDR56tN3Y1ejETtUk4y46w8nmj%2Bt5tNNYhPcqyvsCb72OsBwpjYUISeYd5pMCDrFErLAuMCcMZopwxyincOylLIGiODXcQM1AUa2uzVmdQqtCmLl%2FWvuVgFmc%2FHRyw4L4oaxmbmRnTT2qZuDCb7tPEBjqkAQcUjrqmw%2FHgRI5atqy07KUaQqrpAKiiqoarOwhaCp1%2FGs0%2FiJYpQrUy8FqezxP4WLYGc26pndBgx2b1Ccm75dnRG%2BOofl9ILh3ZcLfJazo%2BVfXNQu5JMgUinmVeSNq9LKF5lj2lPBYCKai8X0jg%2Fkvkkv7Od3zkctWA236f2CO7tEjAtvd2lGkn%2B47P7VOaotPIkY2Z3hM8Qcux0%2FXv6rpTpDyu&X-Amz-Signature=90e5da9df90c4a676fbf941a81be3eda81e4e62547fe183f1b098c9f993f1e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TROB3M4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWiSsn70nE9DudG1E1dh4OYkma2pVpx4cml0uh66TrLgIhAJM%2FAIQaNImcI7CjEcd2wq0gFWSEgYiNTHv%2BBeB4eWj%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR8NpSvD3Xmy2T54q3AMWo6kp07CLwk5LyhwMB805ajnoXrtfweULe4qh2l3MGcIwEevNwYYIuKhawkzUqFS7uc1qXehJodRQOm94s%2F9ribpqeuTofY46vh2Zj29%2FdcGfVIJHNSFeEGxyKwoe9N5v04XphbTddDRcBB%2FPgmI2US0aHpENWIi2EyYklsGLvO6I7yGvcRcF6sJATcPiin%2F%2FHCF6gQAkzY5T9o%2Fly2XWc8Q%2FJhVHZboKpXNRv%2FIbLau8du%2FeX1YOt8BfPme1ySxzzsAoma3r3634sbigP8XKjiy5DNNmB0cqX%2FE1kxWdHh3kjZpPQmJ2SQbU1XhCy6u%2B5wcqvXUwZjbnGft%2B5wzvN4CGIenEjkn8ikxfgk5BLeEXQzCCVqjtItSAabzwEJyZh0bzjnvZFIki62XyXZyTtXY3bbumdIo8%2Fj6WStJmHnJhFf02GjN8ldZqfKxDCUTX8XdujTpWG7aNZovngmfbr20%2BO1eQ%2FpWPgDpIOMC%2BXQyDR56tN3Y1ejETtUk4y46w8nmj%2Bt5tNNYhPcqyvsCb72OsBwpjYUISeYd5pMCDrFErLAuMCcMZopwxyincOylLIGiODXcQM1AUa2uzVmdQqtCmLl%2FWvuVgFmc%2FHRyw4L4oaxmbmRnTT2qZuDCb7tPEBjqkAQcUjrqmw%2FHgRI5atqy07KUaQqrpAKiiqoarOwhaCp1%2FGs0%2FiJYpQrUy8FqezxP4WLYGc26pndBgx2b1Ccm75dnRG%2BOofl9ILh3ZcLfJazo%2BVfXNQu5JMgUinmVeSNq9LKF5lj2lPBYCKai8X0jg%2Fkvkkv7Od3zkctWA236f2CO7tEjAtvd2lGkn%2B47P7VOaotPIkY2Z3hM8Qcux0%2FXv6rpTpDyu&X-Amz-Signature=07e0a835e2b48b60a292a653a24574f5dc0ae34224562bc86d141fa90cf8f51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TROB3M4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWiSsn70nE9DudG1E1dh4OYkma2pVpx4cml0uh66TrLgIhAJM%2FAIQaNImcI7CjEcd2wq0gFWSEgYiNTHv%2BBeB4eWj%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR8NpSvD3Xmy2T54q3AMWo6kp07CLwk5LyhwMB805ajnoXrtfweULe4qh2l3MGcIwEevNwYYIuKhawkzUqFS7uc1qXehJodRQOm94s%2F9ribpqeuTofY46vh2Zj29%2FdcGfVIJHNSFeEGxyKwoe9N5v04XphbTddDRcBB%2FPgmI2US0aHpENWIi2EyYklsGLvO6I7yGvcRcF6sJATcPiin%2F%2FHCF6gQAkzY5T9o%2Fly2XWc8Q%2FJhVHZboKpXNRv%2FIbLau8du%2FeX1YOt8BfPme1ySxzzsAoma3r3634sbigP8XKjiy5DNNmB0cqX%2FE1kxWdHh3kjZpPQmJ2SQbU1XhCy6u%2B5wcqvXUwZjbnGft%2B5wzvN4CGIenEjkn8ikxfgk5BLeEXQzCCVqjtItSAabzwEJyZh0bzjnvZFIki62XyXZyTtXY3bbumdIo8%2Fj6WStJmHnJhFf02GjN8ldZqfKxDCUTX8XdujTpWG7aNZovngmfbr20%2BO1eQ%2FpWPgDpIOMC%2BXQyDR56tN3Y1ejETtUk4y46w8nmj%2Bt5tNNYhPcqyvsCb72OsBwpjYUISeYd5pMCDrFErLAuMCcMZopwxyincOylLIGiODXcQM1AUa2uzVmdQqtCmLl%2FWvuVgFmc%2FHRyw4L4oaxmbmRnTT2qZuDCb7tPEBjqkAQcUjrqmw%2FHgRI5atqy07KUaQqrpAKiiqoarOwhaCp1%2FGs0%2FiJYpQrUy8FqezxP4WLYGc26pndBgx2b1Ccm75dnRG%2BOofl9ILh3ZcLfJazo%2BVfXNQu5JMgUinmVeSNq9LKF5lj2lPBYCKai8X0jg%2Fkvkkv7Od3zkctWA236f2CO7tEjAtvd2lGkn%2B47P7VOaotPIkY2Z3hM8Qcux0%2FXv6rpTpDyu&X-Amz-Signature=040ca1241c2a804f25fbe1681280d9ad88f1aec5a0987840ef30f78665fab05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E3Z6AF2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCJLMl%2B5SFGFfbwoJ%2FZyW9YMT%2BHhYmOP33b2rkqIVmr5QIhALbhrHT6PohENS8svrTi5LiP4Wg946lmXrSjjWlMcPy3KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEA2Itut%2B%2Bs2FRrUMq3AM0ErPiKK%2FMV4BYR67zVWUtyQHgC7ee%2FaAIDpdcnApthrQ20wJOTOTDW0P3DBuAQbJSE%2BOGn9vN2YOVhbkLKjTkoTIrlKIiHD57AYVGQRECBZzkeTKGdJ3Mk2kGNkLr5IsDMFbplJ76hMQwZYmSI5D%2B6DCcJ%2BoYmi3aRiwaEwDGXGjAYmAy7y%2BhnI%2BTd%2FRLqeJHJmgNWA1QRHMksJwGp2DqKiiYrmLXg64DV8BZ5z%2FCl3GYFNlX3iriTN9I%2B6HGuRvq7jaaUbILOCuWi2of9b8XyVSlc6dejETfha%2FyCvyLZR5N7vewB%2FumUUUzE9MJUEdR8JRvocNfGHT0S2Vpk6Cdde1yQyTOcpurDt76blo88ut1mf5jvHv1Mj%2BdgP7XjnFu4KSNjEqE1rKwCHp8c4c77SnpYpY1%2BgrzreQYb6wKPASwdBZi8Kd6%2Fry4Sdj6ljSUiTVyCZ5qMZzXmyioYIHacWlSFdcvPPqLxGAo9APYbGdJC5FL%2FlY6SVivVZG7VwKcoF4yYmBbFl4jskn52sLXKXblxK9aN8Wm0GOjEJgPBNHwO3UYuJ93cFqrZflwC7EYIU0NstrSCp%2BA89ZM2zkm8rN95TdPUQa%2Bo2bySiDpiSi%2BfFjytRGItCBrPDCl7tPEBjqkAc%2F%2FfW6537Wyzc2rnBZDo%2F4Ki2Gr0XPrphGhK%2FzBnKKRGLYT3s1K5%2FBZQHQWzKFGzx%2BDJ1alCEHb%2BHnsUYAitscBbeidc9rn0swcdjn7AcKFyA0v2JfMeNvJ5nQwVQ3eeSZF3emn4TELcajgiC3BOxgUwT5rcKFFM0ORa8yoaNDlFehr3OWGrvnLabs2S%2F2QGWQgrSQCXt6qrfpHdUbIPsPOO4zh&X-Amz-Signature=543822138412a5b05ec08b1e9e426aeddc0890c90ecac128cd26a81258ba9096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPCBPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCTVZ0ttVhVbJEsN9lP%2Bo8yTZNp83a3RIrbyOLHrQeODwIgNZVvGKgMIkm5cKic0UFvrj%2FsP3MXPaoVX5FkkIek22UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh8QZrjcU2rbttJ7ircA6dYPGWCMrljAHBWk9QIoZ%2Fv5Mb8Yr%2FA8WEacT7Et40ksBJ9Bk4zUAPEUqXKs6AgfxVGOdj7AAptOJr6iLXQ5e5yONRkH2Nq4O1uOn%2FAd7tY92EK1DAt31BzXI33WvuBHacjLJrbe%2B3%2F6885XG%2FHbA5CePBN6mv7Q4LDgfcbYQ%2FaTZCzBN4ALFaxJTuY6X1AbyV7oPQu0KUWVsPjjcPd5Rp3UggrkjAN5W7CpGI6dupEADVpk2VhmC3cRfD91B1dS%2BY9exoWutYlCXiHlykXerb4ROauGeUX88NIq3APcZo0LDHZG08tUYReBi8WCWGlvp%2Bn%2FEIqwPO3NI7rcB5FQh22SxfP3Gkmv2h3KLO9SlJAOz%2F9enh4C9LcqUOgk%2Fb5U7auGVfO8CNzRddJ3IMO6F8dBl0FOkoYZknMtWyycA8OKwxrtusM4NL0KFmU1k2ANTOVBfRIRnc2OpYFqekG%2FBidAaOLC8MkdqzGqRUdl5nvS0X8plS1oBWDFr%2BntHTtEABGNO8sYp5FeHzWpcV7dKdJOlr%2B2KNvygY%2BZ9pSdaglr0t9iCgADWEbGfC61ATHhi%2BEY6ppKliSFLl7WG1d7AA%2BBSACotB6HYmjp2%2Bos03EAW69YXpgOZxB%2B%2FhxMNXt08QGOqUBv034emsoSX8uor5xI5P8jRKZMT5gT2mJDDTIj7e%2Finr6fQkOCW9q20TOFj01Tntc9J9D5pb%2FH6ep9WIHtI73y3QiEk3sKng9mGQHqkw1vJaid1NaWE1555tbCsbG2IxxNE7BYWF4uzFlASGIluCkByM3qlpYCwSA5ibpn2QFVNCjaXfYY8%2FKiNuuxOlCzDTquJxMABgjM54anLBISoBZof3gxmxp&X-Amz-Signature=e29cb7d0aab7a34dde31bc503f995da1485f939f9261563e791ec34e7561afe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPCBPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCTVZ0ttVhVbJEsN9lP%2Bo8yTZNp83a3RIrbyOLHrQeODwIgNZVvGKgMIkm5cKic0UFvrj%2FsP3MXPaoVX5FkkIek22UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh8QZrjcU2rbttJ7ircA6dYPGWCMrljAHBWk9QIoZ%2Fv5Mb8Yr%2FA8WEacT7Et40ksBJ9Bk4zUAPEUqXKs6AgfxVGOdj7AAptOJr6iLXQ5e5yONRkH2Nq4O1uOn%2FAd7tY92EK1DAt31BzXI33WvuBHacjLJrbe%2B3%2F6885XG%2FHbA5CePBN6mv7Q4LDgfcbYQ%2FaTZCzBN4ALFaxJTuY6X1AbyV7oPQu0KUWVsPjjcPd5Rp3UggrkjAN5W7CpGI6dupEADVpk2VhmC3cRfD91B1dS%2BY9exoWutYlCXiHlykXerb4ROauGeUX88NIq3APcZo0LDHZG08tUYReBi8WCWGlvp%2Bn%2FEIqwPO3NI7rcB5FQh22SxfP3Gkmv2h3KLO9SlJAOz%2F9enh4C9LcqUOgk%2Fb5U7auGVfO8CNzRddJ3IMO6F8dBl0FOkoYZknMtWyycA8OKwxrtusM4NL0KFmU1k2ANTOVBfRIRnc2OpYFqekG%2FBidAaOLC8MkdqzGqRUdl5nvS0X8plS1oBWDFr%2BntHTtEABGNO8sYp5FeHzWpcV7dKdJOlr%2B2KNvygY%2BZ9pSdaglr0t9iCgADWEbGfC61ATHhi%2BEY6ppKliSFLl7WG1d7AA%2BBSACotB6HYmjp2%2Bos03EAW69YXpgOZxB%2B%2FhxMNXt08QGOqUBv034emsoSX8uor5xI5P8jRKZMT5gT2mJDDTIj7e%2Finr6fQkOCW9q20TOFj01Tntc9J9D5pb%2FH6ep9WIHtI73y3QiEk3sKng9mGQHqkw1vJaid1NaWE1555tbCsbG2IxxNE7BYWF4uzFlASGIluCkByM3qlpYCwSA5ibpn2QFVNCjaXfYY8%2FKiNuuxOlCzDTquJxMABgjM54anLBISoBZof3gxmxp&X-Amz-Signature=d2b26cc09a4fa23235ed25d18d9dcae4026beaa8d19743830f11cdc9638ddfca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPCBPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCTVZ0ttVhVbJEsN9lP%2Bo8yTZNp83a3RIrbyOLHrQeODwIgNZVvGKgMIkm5cKic0UFvrj%2FsP3MXPaoVX5FkkIek22UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh8QZrjcU2rbttJ7ircA6dYPGWCMrljAHBWk9QIoZ%2Fv5Mb8Yr%2FA8WEacT7Et40ksBJ9Bk4zUAPEUqXKs6AgfxVGOdj7AAptOJr6iLXQ5e5yONRkH2Nq4O1uOn%2FAd7tY92EK1DAt31BzXI33WvuBHacjLJrbe%2B3%2F6885XG%2FHbA5CePBN6mv7Q4LDgfcbYQ%2FaTZCzBN4ALFaxJTuY6X1AbyV7oPQu0KUWVsPjjcPd5Rp3UggrkjAN5W7CpGI6dupEADVpk2VhmC3cRfD91B1dS%2BY9exoWutYlCXiHlykXerb4ROauGeUX88NIq3APcZo0LDHZG08tUYReBi8WCWGlvp%2Bn%2FEIqwPO3NI7rcB5FQh22SxfP3Gkmv2h3KLO9SlJAOz%2F9enh4C9LcqUOgk%2Fb5U7auGVfO8CNzRddJ3IMO6F8dBl0FOkoYZknMtWyycA8OKwxrtusM4NL0KFmU1k2ANTOVBfRIRnc2OpYFqekG%2FBidAaOLC8MkdqzGqRUdl5nvS0X8plS1oBWDFr%2BntHTtEABGNO8sYp5FeHzWpcV7dKdJOlr%2B2KNvygY%2BZ9pSdaglr0t9iCgADWEbGfC61ATHhi%2BEY6ppKliSFLl7WG1d7AA%2BBSACotB6HYmjp2%2Bos03EAW69YXpgOZxB%2B%2FhxMNXt08QGOqUBv034emsoSX8uor5xI5P8jRKZMT5gT2mJDDTIj7e%2Finr6fQkOCW9q20TOFj01Tntc9J9D5pb%2FH6ep9WIHtI73y3QiEk3sKng9mGQHqkw1vJaid1NaWE1555tbCsbG2IxxNE7BYWF4uzFlASGIluCkByM3qlpYCwSA5ibpn2QFVNCjaXfYY8%2FKiNuuxOlCzDTquJxMABgjM54anLBISoBZof3gxmxp&X-Amz-Signature=dd19f145c8f19ec86c9d442a1e2868a209e074a8c79f1f870be116f07ec902d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPCBPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCTVZ0ttVhVbJEsN9lP%2Bo8yTZNp83a3RIrbyOLHrQeODwIgNZVvGKgMIkm5cKic0UFvrj%2FsP3MXPaoVX5FkkIek22UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh8QZrjcU2rbttJ7ircA6dYPGWCMrljAHBWk9QIoZ%2Fv5Mb8Yr%2FA8WEacT7Et40ksBJ9Bk4zUAPEUqXKs6AgfxVGOdj7AAptOJr6iLXQ5e5yONRkH2Nq4O1uOn%2FAd7tY92EK1DAt31BzXI33WvuBHacjLJrbe%2B3%2F6885XG%2FHbA5CePBN6mv7Q4LDgfcbYQ%2FaTZCzBN4ALFaxJTuY6X1AbyV7oPQu0KUWVsPjjcPd5Rp3UggrkjAN5W7CpGI6dupEADVpk2VhmC3cRfD91B1dS%2BY9exoWutYlCXiHlykXerb4ROauGeUX88NIq3APcZo0LDHZG08tUYReBi8WCWGlvp%2Bn%2FEIqwPO3NI7rcB5FQh22SxfP3Gkmv2h3KLO9SlJAOz%2F9enh4C9LcqUOgk%2Fb5U7auGVfO8CNzRddJ3IMO6F8dBl0FOkoYZknMtWyycA8OKwxrtusM4NL0KFmU1k2ANTOVBfRIRnc2OpYFqekG%2FBidAaOLC8MkdqzGqRUdl5nvS0X8plS1oBWDFr%2BntHTtEABGNO8sYp5FeHzWpcV7dKdJOlr%2B2KNvygY%2BZ9pSdaglr0t9iCgADWEbGfC61ATHhi%2BEY6ppKliSFLl7WG1d7AA%2BBSACotB6HYmjp2%2Bos03EAW69YXpgOZxB%2B%2FhxMNXt08QGOqUBv034emsoSX8uor5xI5P8jRKZMT5gT2mJDDTIj7e%2Finr6fQkOCW9q20TOFj01Tntc9J9D5pb%2FH6ep9WIHtI73y3QiEk3sKng9mGQHqkw1vJaid1NaWE1555tbCsbG2IxxNE7BYWF4uzFlASGIluCkByM3qlpYCwSA5ibpn2QFVNCjaXfYY8%2FKiNuuxOlCzDTquJxMABgjM54anLBISoBZof3gxmxp&X-Amz-Signature=d57bc5b8571d4f8cad6608813de2da4dae7e3ee50d62336f3cecaa3642b7f5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPCBPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCTVZ0ttVhVbJEsN9lP%2Bo8yTZNp83a3RIrbyOLHrQeODwIgNZVvGKgMIkm5cKic0UFvrj%2FsP3MXPaoVX5FkkIek22UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh8QZrjcU2rbttJ7ircA6dYPGWCMrljAHBWk9QIoZ%2Fv5Mb8Yr%2FA8WEacT7Et40ksBJ9Bk4zUAPEUqXKs6AgfxVGOdj7AAptOJr6iLXQ5e5yONRkH2Nq4O1uOn%2FAd7tY92EK1DAt31BzXI33WvuBHacjLJrbe%2B3%2F6885XG%2FHbA5CePBN6mv7Q4LDgfcbYQ%2FaTZCzBN4ALFaxJTuY6X1AbyV7oPQu0KUWVsPjjcPd5Rp3UggrkjAN5W7CpGI6dupEADVpk2VhmC3cRfD91B1dS%2BY9exoWutYlCXiHlykXerb4ROauGeUX88NIq3APcZo0LDHZG08tUYReBi8WCWGlvp%2Bn%2FEIqwPO3NI7rcB5FQh22SxfP3Gkmv2h3KLO9SlJAOz%2F9enh4C9LcqUOgk%2Fb5U7auGVfO8CNzRddJ3IMO6F8dBl0FOkoYZknMtWyycA8OKwxrtusM4NL0KFmU1k2ANTOVBfRIRnc2OpYFqekG%2FBidAaOLC8MkdqzGqRUdl5nvS0X8plS1oBWDFr%2BntHTtEABGNO8sYp5FeHzWpcV7dKdJOlr%2B2KNvygY%2BZ9pSdaglr0t9iCgADWEbGfC61ATHhi%2BEY6ppKliSFLl7WG1d7AA%2BBSACotB6HYmjp2%2Bos03EAW69YXpgOZxB%2B%2FhxMNXt08QGOqUBv034emsoSX8uor5xI5P8jRKZMT5gT2mJDDTIj7e%2Finr6fQkOCW9q20TOFj01Tntc9J9D5pb%2FH6ep9WIHtI73y3QiEk3sKng9mGQHqkw1vJaid1NaWE1555tbCsbG2IxxNE7BYWF4uzFlASGIluCkByM3qlpYCwSA5ibpn2QFVNCjaXfYY8%2FKiNuuxOlCzDTquJxMABgjM54anLBISoBZof3gxmxp&X-Amz-Signature=f74fe49d8f9560ba069de01a56eec554d2b8ef0f1d1418fef065b4a92ea88e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPCBPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCTVZ0ttVhVbJEsN9lP%2Bo8yTZNp83a3RIrbyOLHrQeODwIgNZVvGKgMIkm5cKic0UFvrj%2FsP3MXPaoVX5FkkIek22UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh8QZrjcU2rbttJ7ircA6dYPGWCMrljAHBWk9QIoZ%2Fv5Mb8Yr%2FA8WEacT7Et40ksBJ9Bk4zUAPEUqXKs6AgfxVGOdj7AAptOJr6iLXQ5e5yONRkH2Nq4O1uOn%2FAd7tY92EK1DAt31BzXI33WvuBHacjLJrbe%2B3%2F6885XG%2FHbA5CePBN6mv7Q4LDgfcbYQ%2FaTZCzBN4ALFaxJTuY6X1AbyV7oPQu0KUWVsPjjcPd5Rp3UggrkjAN5W7CpGI6dupEADVpk2VhmC3cRfD91B1dS%2BY9exoWutYlCXiHlykXerb4ROauGeUX88NIq3APcZo0LDHZG08tUYReBi8WCWGlvp%2Bn%2FEIqwPO3NI7rcB5FQh22SxfP3Gkmv2h3KLO9SlJAOz%2F9enh4C9LcqUOgk%2Fb5U7auGVfO8CNzRddJ3IMO6F8dBl0FOkoYZknMtWyycA8OKwxrtusM4NL0KFmU1k2ANTOVBfRIRnc2OpYFqekG%2FBidAaOLC8MkdqzGqRUdl5nvS0X8plS1oBWDFr%2BntHTtEABGNO8sYp5FeHzWpcV7dKdJOlr%2B2KNvygY%2BZ9pSdaglr0t9iCgADWEbGfC61ATHhi%2BEY6ppKliSFLl7WG1d7AA%2BBSACotB6HYmjp2%2Bos03EAW69YXpgOZxB%2B%2FhxMNXt08QGOqUBv034emsoSX8uor5xI5P8jRKZMT5gT2mJDDTIj7e%2Finr6fQkOCW9q20TOFj01Tntc9J9D5pb%2FH6ep9WIHtI73y3QiEk3sKng9mGQHqkw1vJaid1NaWE1555tbCsbG2IxxNE7BYWF4uzFlASGIluCkByM3qlpYCwSA5ibpn2QFVNCjaXfYY8%2FKiNuuxOlCzDTquJxMABgjM54anLBISoBZof3gxmxp&X-Amz-Signature=958eb01bf8aedde3a7657dbf465eca22daf8d2d54feb2928cfaa0be611d4b469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPCBPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCTVZ0ttVhVbJEsN9lP%2Bo8yTZNp83a3RIrbyOLHrQeODwIgNZVvGKgMIkm5cKic0UFvrj%2FsP3MXPaoVX5FkkIek22UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh8QZrjcU2rbttJ7ircA6dYPGWCMrljAHBWk9QIoZ%2Fv5Mb8Yr%2FA8WEacT7Et40ksBJ9Bk4zUAPEUqXKs6AgfxVGOdj7AAptOJr6iLXQ5e5yONRkH2Nq4O1uOn%2FAd7tY92EK1DAt31BzXI33WvuBHacjLJrbe%2B3%2F6885XG%2FHbA5CePBN6mv7Q4LDgfcbYQ%2FaTZCzBN4ALFaxJTuY6X1AbyV7oPQu0KUWVsPjjcPd5Rp3UggrkjAN5W7CpGI6dupEADVpk2VhmC3cRfD91B1dS%2BY9exoWutYlCXiHlykXerb4ROauGeUX88NIq3APcZo0LDHZG08tUYReBi8WCWGlvp%2Bn%2FEIqwPO3NI7rcB5FQh22SxfP3Gkmv2h3KLO9SlJAOz%2F9enh4C9LcqUOgk%2Fb5U7auGVfO8CNzRddJ3IMO6F8dBl0FOkoYZknMtWyycA8OKwxrtusM4NL0KFmU1k2ANTOVBfRIRnc2OpYFqekG%2FBidAaOLC8MkdqzGqRUdl5nvS0X8plS1oBWDFr%2BntHTtEABGNO8sYp5FeHzWpcV7dKdJOlr%2B2KNvygY%2BZ9pSdaglr0t9iCgADWEbGfC61ATHhi%2BEY6ppKliSFLl7WG1d7AA%2BBSACotB6HYmjp2%2Bos03EAW69YXpgOZxB%2B%2FhxMNXt08QGOqUBv034emsoSX8uor5xI5P8jRKZMT5gT2mJDDTIj7e%2Finr6fQkOCW9q20TOFj01Tntc9J9D5pb%2FH6ep9WIHtI73y3QiEk3sKng9mGQHqkw1vJaid1NaWE1555tbCsbG2IxxNE7BYWF4uzFlASGIluCkByM3qlpYCwSA5ibpn2QFVNCjaXfYY8%2FKiNuuxOlCzDTquJxMABgjM54anLBISoBZof3gxmxp&X-Amz-Signature=52208ee5f21dfcbb2f65a384ea837f4fed6f67fd671390020e1d68d8493f8c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPCBPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCTVZ0ttVhVbJEsN9lP%2Bo8yTZNp83a3RIrbyOLHrQeODwIgNZVvGKgMIkm5cKic0UFvrj%2FsP3MXPaoVX5FkkIek22UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh8QZrjcU2rbttJ7ircA6dYPGWCMrljAHBWk9QIoZ%2Fv5Mb8Yr%2FA8WEacT7Et40ksBJ9Bk4zUAPEUqXKs6AgfxVGOdj7AAptOJr6iLXQ5e5yONRkH2Nq4O1uOn%2FAd7tY92EK1DAt31BzXI33WvuBHacjLJrbe%2B3%2F6885XG%2FHbA5CePBN6mv7Q4LDgfcbYQ%2FaTZCzBN4ALFaxJTuY6X1AbyV7oPQu0KUWVsPjjcPd5Rp3UggrkjAN5W7CpGI6dupEADVpk2VhmC3cRfD91B1dS%2BY9exoWutYlCXiHlykXerb4ROauGeUX88NIq3APcZo0LDHZG08tUYReBi8WCWGlvp%2Bn%2FEIqwPO3NI7rcB5FQh22SxfP3Gkmv2h3KLO9SlJAOz%2F9enh4C9LcqUOgk%2Fb5U7auGVfO8CNzRddJ3IMO6F8dBl0FOkoYZknMtWyycA8OKwxrtusM4NL0KFmU1k2ANTOVBfRIRnc2OpYFqekG%2FBidAaOLC8MkdqzGqRUdl5nvS0X8plS1oBWDFr%2BntHTtEABGNO8sYp5FeHzWpcV7dKdJOlr%2B2KNvygY%2BZ9pSdaglr0t9iCgADWEbGfC61ATHhi%2BEY6ppKliSFLl7WG1d7AA%2BBSACotB6HYmjp2%2Bos03EAW69YXpgOZxB%2B%2FhxMNXt08QGOqUBv034emsoSX8uor5xI5P8jRKZMT5gT2mJDDTIj7e%2Finr6fQkOCW9q20TOFj01Tntc9J9D5pb%2FH6ep9WIHtI73y3QiEk3sKng9mGQHqkw1vJaid1NaWE1555tbCsbG2IxxNE7BYWF4uzFlASGIluCkByM3qlpYCwSA5ibpn2QFVNCjaXfYY8%2FKiNuuxOlCzDTquJxMABgjM54anLBISoBZof3gxmxp&X-Amz-Signature=9aedb8998f0f6e3ec74413db0b4c85edb2711b45d3cbc193328567a7b7e40a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPCBPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCTVZ0ttVhVbJEsN9lP%2Bo8yTZNp83a3RIrbyOLHrQeODwIgNZVvGKgMIkm5cKic0UFvrj%2FsP3MXPaoVX5FkkIek22UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh8QZrjcU2rbttJ7ircA6dYPGWCMrljAHBWk9QIoZ%2Fv5Mb8Yr%2FA8WEacT7Et40ksBJ9Bk4zUAPEUqXKs6AgfxVGOdj7AAptOJr6iLXQ5e5yONRkH2Nq4O1uOn%2FAd7tY92EK1DAt31BzXI33WvuBHacjLJrbe%2B3%2F6885XG%2FHbA5CePBN6mv7Q4LDgfcbYQ%2FaTZCzBN4ALFaxJTuY6X1AbyV7oPQu0KUWVsPjjcPd5Rp3UggrkjAN5W7CpGI6dupEADVpk2VhmC3cRfD91B1dS%2BY9exoWutYlCXiHlykXerb4ROauGeUX88NIq3APcZo0LDHZG08tUYReBi8WCWGlvp%2Bn%2FEIqwPO3NI7rcB5FQh22SxfP3Gkmv2h3KLO9SlJAOz%2F9enh4C9LcqUOgk%2Fb5U7auGVfO8CNzRddJ3IMO6F8dBl0FOkoYZknMtWyycA8OKwxrtusM4NL0KFmU1k2ANTOVBfRIRnc2OpYFqekG%2FBidAaOLC8MkdqzGqRUdl5nvS0X8plS1oBWDFr%2BntHTtEABGNO8sYp5FeHzWpcV7dKdJOlr%2B2KNvygY%2BZ9pSdaglr0t9iCgADWEbGfC61ATHhi%2BEY6ppKliSFLl7WG1d7AA%2BBSACotB6HYmjp2%2Bos03EAW69YXpgOZxB%2B%2FhxMNXt08QGOqUBv034emsoSX8uor5xI5P8jRKZMT5gT2mJDDTIj7e%2Finr6fQkOCW9q20TOFj01Tntc9J9D5pb%2FH6ep9WIHtI73y3QiEk3sKng9mGQHqkw1vJaid1NaWE1555tbCsbG2IxxNE7BYWF4uzFlASGIluCkByM3qlpYCwSA5ibpn2QFVNCjaXfYY8%2FKiNuuxOlCzDTquJxMABgjM54anLBISoBZof3gxmxp&X-Amz-Signature=ca3f2c4e46d62121eec401b8ba09309b1f01df5b12e1c2214ee2664ec925a1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
