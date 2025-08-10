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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIN7773Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFf0jF%2BYA26HD2ivRnAbQUWnsVcZDNA%2B9z%2FA8dafHUgIgaXV18NvQhWlWs4JvKGjvwXVoo3rQmDxnrdjwZPot74gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLYSHVSbe%2FfI21dyCrcA96aNAox%2BwMTfmrQ496x6eA%2BIJTYo4OFbAC50nFOsDSBNtoIm%2FlsDa28lIX3rz9Q0z4GZVO7ciudDS2AFHQIz8t0iI4kOZqXcAiLLY8w%2FrgSOOsSAdWPQQrzoLcliwZK7X5ggBexaVYm35n%2Fl5kmOeqZk317trr%2B8NQLXyeI5CXH20ebNCCpJhP4Stx5kcS7F%2F0HqWxAcoxNjOSfoW35ilQ4P5dzq1PdZSLZRfm5pDGeF9rwsdxUs5jgoVC%2Fsk0ogAXVCnPwX4Rb%2BND0tXxMqfEpzF2ajelKs7f3OuqU3VSC8VYkO1FA1iKyDUXnNMUF4eX3zOXx5JZ39Bl2YaEyI8App4EbrmxMnyfX5DR%2B%2FWdQD2Ic%2F5AUSqKh%2BSEFqZRD4rUkyUtJ%2BSLWU7GKMKNLZqxi027CFSNkXKnpqQRpBIFmHnfpsnrD3sq6ynYgvhNe7ewrSLjIrVyqpNBxKnhvZeymddpcrHwzKNLZ9zSh5ynra1%2FneSQ6EBL0C6piHPnQMWHyGVYmpHRP2%2Fuj9XAScjlhm5P7bI4N05sVbWN6zYojvt29hGtGrEibgcQF6F7kRU6K611lwFveJ9FCHfnI6MaSs4iguW3CA9UsAibVa%2FLIm%2FgliYvXmzeTdjVqMLCY4sQGOqUB6wA3br5LXhMCC4np4Mhn%2FwFz1C339pVrus9v0fFRcHEEbyrmk4YFThqiN%2ByQHPKUhI0%2BaSI6yP6h369xlwn8IH2DBVMxRzweRcfnUJSSypeCnj3%2FBHeO88%2BleI7CYTwpJ1uNZnZBRxhTMFPx2plcbGsH8%2B6EcYlysUPrWEp5BzNG6rnYtv2DAPpcArOb8BNEYsTLAa51DOUy%2FQOEDjYViHvx0qfc&X-Amz-Signature=0cce610048dfe4777c31f0f73c5a9ec4eef8c19052597dadc21ec84580fef53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIN7773Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFf0jF%2BYA26HD2ivRnAbQUWnsVcZDNA%2B9z%2FA8dafHUgIgaXV18NvQhWlWs4JvKGjvwXVoo3rQmDxnrdjwZPot74gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLYSHVSbe%2FfI21dyCrcA96aNAox%2BwMTfmrQ496x6eA%2BIJTYo4OFbAC50nFOsDSBNtoIm%2FlsDa28lIX3rz9Q0z4GZVO7ciudDS2AFHQIz8t0iI4kOZqXcAiLLY8w%2FrgSOOsSAdWPQQrzoLcliwZK7X5ggBexaVYm35n%2Fl5kmOeqZk317trr%2B8NQLXyeI5CXH20ebNCCpJhP4Stx5kcS7F%2F0HqWxAcoxNjOSfoW35ilQ4P5dzq1PdZSLZRfm5pDGeF9rwsdxUs5jgoVC%2Fsk0ogAXVCnPwX4Rb%2BND0tXxMqfEpzF2ajelKs7f3OuqU3VSC8VYkO1FA1iKyDUXnNMUF4eX3zOXx5JZ39Bl2YaEyI8App4EbrmxMnyfX5DR%2B%2FWdQD2Ic%2F5AUSqKh%2BSEFqZRD4rUkyUtJ%2BSLWU7GKMKNLZqxi027CFSNkXKnpqQRpBIFmHnfpsnrD3sq6ynYgvhNe7ewrSLjIrVyqpNBxKnhvZeymddpcrHwzKNLZ9zSh5ynra1%2FneSQ6EBL0C6piHPnQMWHyGVYmpHRP2%2Fuj9XAScjlhm5P7bI4N05sVbWN6zYojvt29hGtGrEibgcQF6F7kRU6K611lwFveJ9FCHfnI6MaSs4iguW3CA9UsAibVa%2FLIm%2FgliYvXmzeTdjVqMLCY4sQGOqUB6wA3br5LXhMCC4np4Mhn%2FwFz1C339pVrus9v0fFRcHEEbyrmk4YFThqiN%2ByQHPKUhI0%2BaSI6yP6h369xlwn8IH2DBVMxRzweRcfnUJSSypeCnj3%2FBHeO88%2BleI7CYTwpJ1uNZnZBRxhTMFPx2plcbGsH8%2B6EcYlysUPrWEp5BzNG6rnYtv2DAPpcArOb8BNEYsTLAa51DOUy%2FQOEDjYViHvx0qfc&X-Amz-Signature=8222ef88714d628fe6e5251fb2039222fa599ea8036afdb5867b73d22b35690a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIN7773Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFf0jF%2BYA26HD2ivRnAbQUWnsVcZDNA%2B9z%2FA8dafHUgIgaXV18NvQhWlWs4JvKGjvwXVoo3rQmDxnrdjwZPot74gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLYSHVSbe%2FfI21dyCrcA96aNAox%2BwMTfmrQ496x6eA%2BIJTYo4OFbAC50nFOsDSBNtoIm%2FlsDa28lIX3rz9Q0z4GZVO7ciudDS2AFHQIz8t0iI4kOZqXcAiLLY8w%2FrgSOOsSAdWPQQrzoLcliwZK7X5ggBexaVYm35n%2Fl5kmOeqZk317trr%2B8NQLXyeI5CXH20ebNCCpJhP4Stx5kcS7F%2F0HqWxAcoxNjOSfoW35ilQ4P5dzq1PdZSLZRfm5pDGeF9rwsdxUs5jgoVC%2Fsk0ogAXVCnPwX4Rb%2BND0tXxMqfEpzF2ajelKs7f3OuqU3VSC8VYkO1FA1iKyDUXnNMUF4eX3zOXx5JZ39Bl2YaEyI8App4EbrmxMnyfX5DR%2B%2FWdQD2Ic%2F5AUSqKh%2BSEFqZRD4rUkyUtJ%2BSLWU7GKMKNLZqxi027CFSNkXKnpqQRpBIFmHnfpsnrD3sq6ynYgvhNe7ewrSLjIrVyqpNBxKnhvZeymddpcrHwzKNLZ9zSh5ynra1%2FneSQ6EBL0C6piHPnQMWHyGVYmpHRP2%2Fuj9XAScjlhm5P7bI4N05sVbWN6zYojvt29hGtGrEibgcQF6F7kRU6K611lwFveJ9FCHfnI6MaSs4iguW3CA9UsAibVa%2FLIm%2FgliYvXmzeTdjVqMLCY4sQGOqUB6wA3br5LXhMCC4np4Mhn%2FwFz1C339pVrus9v0fFRcHEEbyrmk4YFThqiN%2ByQHPKUhI0%2BaSI6yP6h369xlwn8IH2DBVMxRzweRcfnUJSSypeCnj3%2FBHeO88%2BleI7CYTwpJ1uNZnZBRxhTMFPx2plcbGsH8%2B6EcYlysUPrWEp5BzNG6rnYtv2DAPpcArOb8BNEYsTLAa51DOUy%2FQOEDjYViHvx0qfc&X-Amz-Signature=cca655a5366b3d50471e2accdc10a7821c866857fa31f1fca7ee29021e967bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIN7773Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFf0jF%2BYA26HD2ivRnAbQUWnsVcZDNA%2B9z%2FA8dafHUgIgaXV18NvQhWlWs4JvKGjvwXVoo3rQmDxnrdjwZPot74gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLYSHVSbe%2FfI21dyCrcA96aNAox%2BwMTfmrQ496x6eA%2BIJTYo4OFbAC50nFOsDSBNtoIm%2FlsDa28lIX3rz9Q0z4GZVO7ciudDS2AFHQIz8t0iI4kOZqXcAiLLY8w%2FrgSOOsSAdWPQQrzoLcliwZK7X5ggBexaVYm35n%2Fl5kmOeqZk317trr%2B8NQLXyeI5CXH20ebNCCpJhP4Stx5kcS7F%2F0HqWxAcoxNjOSfoW35ilQ4P5dzq1PdZSLZRfm5pDGeF9rwsdxUs5jgoVC%2Fsk0ogAXVCnPwX4Rb%2BND0tXxMqfEpzF2ajelKs7f3OuqU3VSC8VYkO1FA1iKyDUXnNMUF4eX3zOXx5JZ39Bl2YaEyI8App4EbrmxMnyfX5DR%2B%2FWdQD2Ic%2F5AUSqKh%2BSEFqZRD4rUkyUtJ%2BSLWU7GKMKNLZqxi027CFSNkXKnpqQRpBIFmHnfpsnrD3sq6ynYgvhNe7ewrSLjIrVyqpNBxKnhvZeymddpcrHwzKNLZ9zSh5ynra1%2FneSQ6EBL0C6piHPnQMWHyGVYmpHRP2%2Fuj9XAScjlhm5P7bI4N05sVbWN6zYojvt29hGtGrEibgcQF6F7kRU6K611lwFveJ9FCHfnI6MaSs4iguW3CA9UsAibVa%2FLIm%2FgliYvXmzeTdjVqMLCY4sQGOqUB6wA3br5LXhMCC4np4Mhn%2FwFz1C339pVrus9v0fFRcHEEbyrmk4YFThqiN%2ByQHPKUhI0%2BaSI6yP6h369xlwn8IH2DBVMxRzweRcfnUJSSypeCnj3%2FBHeO88%2BleI7CYTwpJ1uNZnZBRxhTMFPx2plcbGsH8%2B6EcYlysUPrWEp5BzNG6rnYtv2DAPpcArOb8BNEYsTLAa51DOUy%2FQOEDjYViHvx0qfc&X-Amz-Signature=dcf16fb4f9827311ab33fb0864af9c9a07bbe246f8ca2d7bb2f5490aa338ed24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIN7773Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFf0jF%2BYA26HD2ivRnAbQUWnsVcZDNA%2B9z%2FA8dafHUgIgaXV18NvQhWlWs4JvKGjvwXVoo3rQmDxnrdjwZPot74gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLYSHVSbe%2FfI21dyCrcA96aNAox%2BwMTfmrQ496x6eA%2BIJTYo4OFbAC50nFOsDSBNtoIm%2FlsDa28lIX3rz9Q0z4GZVO7ciudDS2AFHQIz8t0iI4kOZqXcAiLLY8w%2FrgSOOsSAdWPQQrzoLcliwZK7X5ggBexaVYm35n%2Fl5kmOeqZk317trr%2B8NQLXyeI5CXH20ebNCCpJhP4Stx5kcS7F%2F0HqWxAcoxNjOSfoW35ilQ4P5dzq1PdZSLZRfm5pDGeF9rwsdxUs5jgoVC%2Fsk0ogAXVCnPwX4Rb%2BND0tXxMqfEpzF2ajelKs7f3OuqU3VSC8VYkO1FA1iKyDUXnNMUF4eX3zOXx5JZ39Bl2YaEyI8App4EbrmxMnyfX5DR%2B%2FWdQD2Ic%2F5AUSqKh%2BSEFqZRD4rUkyUtJ%2BSLWU7GKMKNLZqxi027CFSNkXKnpqQRpBIFmHnfpsnrD3sq6ynYgvhNe7ewrSLjIrVyqpNBxKnhvZeymddpcrHwzKNLZ9zSh5ynra1%2FneSQ6EBL0C6piHPnQMWHyGVYmpHRP2%2Fuj9XAScjlhm5P7bI4N05sVbWN6zYojvt29hGtGrEibgcQF6F7kRU6K611lwFveJ9FCHfnI6MaSs4iguW3CA9UsAibVa%2FLIm%2FgliYvXmzeTdjVqMLCY4sQGOqUB6wA3br5LXhMCC4np4Mhn%2FwFz1C339pVrus9v0fFRcHEEbyrmk4YFThqiN%2ByQHPKUhI0%2BaSI6yP6h369xlwn8IH2DBVMxRzweRcfnUJSSypeCnj3%2FBHeO88%2BleI7CYTwpJ1uNZnZBRxhTMFPx2plcbGsH8%2B6EcYlysUPrWEp5BzNG6rnYtv2DAPpcArOb8BNEYsTLAa51DOUy%2FQOEDjYViHvx0qfc&X-Amz-Signature=63d563eff89e42d224658b27953a18e595e6670ab2df1271dfc51a9a0689087c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIN7773Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFf0jF%2BYA26HD2ivRnAbQUWnsVcZDNA%2B9z%2FA8dafHUgIgaXV18NvQhWlWs4JvKGjvwXVoo3rQmDxnrdjwZPot74gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLYSHVSbe%2FfI21dyCrcA96aNAox%2BwMTfmrQ496x6eA%2BIJTYo4OFbAC50nFOsDSBNtoIm%2FlsDa28lIX3rz9Q0z4GZVO7ciudDS2AFHQIz8t0iI4kOZqXcAiLLY8w%2FrgSOOsSAdWPQQrzoLcliwZK7X5ggBexaVYm35n%2Fl5kmOeqZk317trr%2B8NQLXyeI5CXH20ebNCCpJhP4Stx5kcS7F%2F0HqWxAcoxNjOSfoW35ilQ4P5dzq1PdZSLZRfm5pDGeF9rwsdxUs5jgoVC%2Fsk0ogAXVCnPwX4Rb%2BND0tXxMqfEpzF2ajelKs7f3OuqU3VSC8VYkO1FA1iKyDUXnNMUF4eX3zOXx5JZ39Bl2YaEyI8App4EbrmxMnyfX5DR%2B%2FWdQD2Ic%2F5AUSqKh%2BSEFqZRD4rUkyUtJ%2BSLWU7GKMKNLZqxi027CFSNkXKnpqQRpBIFmHnfpsnrD3sq6ynYgvhNe7ewrSLjIrVyqpNBxKnhvZeymddpcrHwzKNLZ9zSh5ynra1%2FneSQ6EBL0C6piHPnQMWHyGVYmpHRP2%2Fuj9XAScjlhm5P7bI4N05sVbWN6zYojvt29hGtGrEibgcQF6F7kRU6K611lwFveJ9FCHfnI6MaSs4iguW3CA9UsAibVa%2FLIm%2FgliYvXmzeTdjVqMLCY4sQGOqUB6wA3br5LXhMCC4np4Mhn%2FwFz1C339pVrus9v0fFRcHEEbyrmk4YFThqiN%2ByQHPKUhI0%2BaSI6yP6h369xlwn8IH2DBVMxRzweRcfnUJSSypeCnj3%2FBHeO88%2BleI7CYTwpJ1uNZnZBRxhTMFPx2plcbGsH8%2B6EcYlysUPrWEp5BzNG6rnYtv2DAPpcArOb8BNEYsTLAa51DOUy%2FQOEDjYViHvx0qfc&X-Amz-Signature=9bf4bd5d25ea6014b4ebd9c7c7c5525838d1e571c82cb7d12ba644b0428ca8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIN7773Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFf0jF%2BYA26HD2ivRnAbQUWnsVcZDNA%2B9z%2FA8dafHUgIgaXV18NvQhWlWs4JvKGjvwXVoo3rQmDxnrdjwZPot74gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLYSHVSbe%2FfI21dyCrcA96aNAox%2BwMTfmrQ496x6eA%2BIJTYo4OFbAC50nFOsDSBNtoIm%2FlsDa28lIX3rz9Q0z4GZVO7ciudDS2AFHQIz8t0iI4kOZqXcAiLLY8w%2FrgSOOsSAdWPQQrzoLcliwZK7X5ggBexaVYm35n%2Fl5kmOeqZk317trr%2B8NQLXyeI5CXH20ebNCCpJhP4Stx5kcS7F%2F0HqWxAcoxNjOSfoW35ilQ4P5dzq1PdZSLZRfm5pDGeF9rwsdxUs5jgoVC%2Fsk0ogAXVCnPwX4Rb%2BND0tXxMqfEpzF2ajelKs7f3OuqU3VSC8VYkO1FA1iKyDUXnNMUF4eX3zOXx5JZ39Bl2YaEyI8App4EbrmxMnyfX5DR%2B%2FWdQD2Ic%2F5AUSqKh%2BSEFqZRD4rUkyUtJ%2BSLWU7GKMKNLZqxi027CFSNkXKnpqQRpBIFmHnfpsnrD3sq6ynYgvhNe7ewrSLjIrVyqpNBxKnhvZeymddpcrHwzKNLZ9zSh5ynra1%2FneSQ6EBL0C6piHPnQMWHyGVYmpHRP2%2Fuj9XAScjlhm5P7bI4N05sVbWN6zYojvt29hGtGrEibgcQF6F7kRU6K611lwFveJ9FCHfnI6MaSs4iguW3CA9UsAibVa%2FLIm%2FgliYvXmzeTdjVqMLCY4sQGOqUB6wA3br5LXhMCC4np4Mhn%2FwFz1C339pVrus9v0fFRcHEEbyrmk4YFThqiN%2ByQHPKUhI0%2BaSI6yP6h369xlwn8IH2DBVMxRzweRcfnUJSSypeCnj3%2FBHeO88%2BleI7CYTwpJ1uNZnZBRxhTMFPx2plcbGsH8%2B6EcYlysUPrWEp5BzNG6rnYtv2DAPpcArOb8BNEYsTLAa51DOUy%2FQOEDjYViHvx0qfc&X-Amz-Signature=fe26daed4c1a12073cd2c49fb0f9b0341dfd6bdfea20b4f6146183e418208cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIN7773Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFf0jF%2BYA26HD2ivRnAbQUWnsVcZDNA%2B9z%2FA8dafHUgIgaXV18NvQhWlWs4JvKGjvwXVoo3rQmDxnrdjwZPot74gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLYSHVSbe%2FfI21dyCrcA96aNAox%2BwMTfmrQ496x6eA%2BIJTYo4OFbAC50nFOsDSBNtoIm%2FlsDa28lIX3rz9Q0z4GZVO7ciudDS2AFHQIz8t0iI4kOZqXcAiLLY8w%2FrgSOOsSAdWPQQrzoLcliwZK7X5ggBexaVYm35n%2Fl5kmOeqZk317trr%2B8NQLXyeI5CXH20ebNCCpJhP4Stx5kcS7F%2F0HqWxAcoxNjOSfoW35ilQ4P5dzq1PdZSLZRfm5pDGeF9rwsdxUs5jgoVC%2Fsk0ogAXVCnPwX4Rb%2BND0tXxMqfEpzF2ajelKs7f3OuqU3VSC8VYkO1FA1iKyDUXnNMUF4eX3zOXx5JZ39Bl2YaEyI8App4EbrmxMnyfX5DR%2B%2FWdQD2Ic%2F5AUSqKh%2BSEFqZRD4rUkyUtJ%2BSLWU7GKMKNLZqxi027CFSNkXKnpqQRpBIFmHnfpsnrD3sq6ynYgvhNe7ewrSLjIrVyqpNBxKnhvZeymddpcrHwzKNLZ9zSh5ynra1%2FneSQ6EBL0C6piHPnQMWHyGVYmpHRP2%2Fuj9XAScjlhm5P7bI4N05sVbWN6zYojvt29hGtGrEibgcQF6F7kRU6K611lwFveJ9FCHfnI6MaSs4iguW3CA9UsAibVa%2FLIm%2FgliYvXmzeTdjVqMLCY4sQGOqUB6wA3br5LXhMCC4np4Mhn%2FwFz1C339pVrus9v0fFRcHEEbyrmk4YFThqiN%2ByQHPKUhI0%2BaSI6yP6h369xlwn8IH2DBVMxRzweRcfnUJSSypeCnj3%2FBHeO88%2BleI7CYTwpJ1uNZnZBRxhTMFPx2plcbGsH8%2B6EcYlysUPrWEp5BzNG6rnYtv2DAPpcArOb8BNEYsTLAa51DOUy%2FQOEDjYViHvx0qfc&X-Amz-Signature=e39e7def913f5473583e8f1c7157c953f746c65d1eda540c367bb075e17c9855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIN7773Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFf0jF%2BYA26HD2ivRnAbQUWnsVcZDNA%2B9z%2FA8dafHUgIgaXV18NvQhWlWs4JvKGjvwXVoo3rQmDxnrdjwZPot74gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLYSHVSbe%2FfI21dyCrcA96aNAox%2BwMTfmrQ496x6eA%2BIJTYo4OFbAC50nFOsDSBNtoIm%2FlsDa28lIX3rz9Q0z4GZVO7ciudDS2AFHQIz8t0iI4kOZqXcAiLLY8w%2FrgSOOsSAdWPQQrzoLcliwZK7X5ggBexaVYm35n%2Fl5kmOeqZk317trr%2B8NQLXyeI5CXH20ebNCCpJhP4Stx5kcS7F%2F0HqWxAcoxNjOSfoW35ilQ4P5dzq1PdZSLZRfm5pDGeF9rwsdxUs5jgoVC%2Fsk0ogAXVCnPwX4Rb%2BND0tXxMqfEpzF2ajelKs7f3OuqU3VSC8VYkO1FA1iKyDUXnNMUF4eX3zOXx5JZ39Bl2YaEyI8App4EbrmxMnyfX5DR%2B%2FWdQD2Ic%2F5AUSqKh%2BSEFqZRD4rUkyUtJ%2BSLWU7GKMKNLZqxi027CFSNkXKnpqQRpBIFmHnfpsnrD3sq6ynYgvhNe7ewrSLjIrVyqpNBxKnhvZeymddpcrHwzKNLZ9zSh5ynra1%2FneSQ6EBL0C6piHPnQMWHyGVYmpHRP2%2Fuj9XAScjlhm5P7bI4N05sVbWN6zYojvt29hGtGrEibgcQF6F7kRU6K611lwFveJ9FCHfnI6MaSs4iguW3CA9UsAibVa%2FLIm%2FgliYvXmzeTdjVqMLCY4sQGOqUB6wA3br5LXhMCC4np4Mhn%2FwFz1C339pVrus9v0fFRcHEEbyrmk4YFThqiN%2ByQHPKUhI0%2BaSI6yP6h369xlwn8IH2DBVMxRzweRcfnUJSSypeCnj3%2FBHeO88%2BleI7CYTwpJ1uNZnZBRxhTMFPx2plcbGsH8%2B6EcYlysUPrWEp5BzNG6rnYtv2DAPpcArOb8BNEYsTLAa51DOUy%2FQOEDjYViHvx0qfc&X-Amz-Signature=91ed2cd20eaa6cbf08657d6c3eb03b42bf8641a493700f5582d7a2a5367953bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIN7773Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFf0jF%2BYA26HD2ivRnAbQUWnsVcZDNA%2B9z%2FA8dafHUgIgaXV18NvQhWlWs4JvKGjvwXVoo3rQmDxnrdjwZPot74gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLYSHVSbe%2FfI21dyCrcA96aNAox%2BwMTfmrQ496x6eA%2BIJTYo4OFbAC50nFOsDSBNtoIm%2FlsDa28lIX3rz9Q0z4GZVO7ciudDS2AFHQIz8t0iI4kOZqXcAiLLY8w%2FrgSOOsSAdWPQQrzoLcliwZK7X5ggBexaVYm35n%2Fl5kmOeqZk317trr%2B8NQLXyeI5CXH20ebNCCpJhP4Stx5kcS7F%2F0HqWxAcoxNjOSfoW35ilQ4P5dzq1PdZSLZRfm5pDGeF9rwsdxUs5jgoVC%2Fsk0ogAXVCnPwX4Rb%2BND0tXxMqfEpzF2ajelKs7f3OuqU3VSC8VYkO1FA1iKyDUXnNMUF4eX3zOXx5JZ39Bl2YaEyI8App4EbrmxMnyfX5DR%2B%2FWdQD2Ic%2F5AUSqKh%2BSEFqZRD4rUkyUtJ%2BSLWU7GKMKNLZqxi027CFSNkXKnpqQRpBIFmHnfpsnrD3sq6ynYgvhNe7ewrSLjIrVyqpNBxKnhvZeymddpcrHwzKNLZ9zSh5ynra1%2FneSQ6EBL0C6piHPnQMWHyGVYmpHRP2%2Fuj9XAScjlhm5P7bI4N05sVbWN6zYojvt29hGtGrEibgcQF6F7kRU6K611lwFveJ9FCHfnI6MaSs4iguW3CA9UsAibVa%2FLIm%2FgliYvXmzeTdjVqMLCY4sQGOqUB6wA3br5LXhMCC4np4Mhn%2FwFz1C339pVrus9v0fFRcHEEbyrmk4YFThqiN%2ByQHPKUhI0%2BaSI6yP6h369xlwn8IH2DBVMxRzweRcfnUJSSypeCnj3%2FBHeO88%2BleI7CYTwpJ1uNZnZBRxhTMFPx2plcbGsH8%2B6EcYlysUPrWEp5BzNG6rnYtv2DAPpcArOb8BNEYsTLAa51DOUy%2FQOEDjYViHvx0qfc&X-Amz-Signature=e8d1997ae56c61e61d5f4d6a41c47b64e527fbbf3576f1ffa9ddd6ab58bed804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQYC2OD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCGsH2RUFDJzk%2Bl%2FgqIC1NSHbPDLwnGGAsc7NGkd4BiAiEAorLAgL7ypiV04F8bVATToM98arcr52s7vJ0DhZf%2FxogqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6dHXVaK0oSwJrM1ircAwMFkg4%2BMdlgSybH80%2BOtv%2F1X2EDVT2YnqJEF3tn8jwlynnYNZhZtuWnmhmNApbF6M9UhJjoGtBODc4ZW7GWWHPqxc%2FUXF8iv7YPRKpTPdQN6wjCO5FzeB0I1Kaa9zXEIXVscUhkb0a2gWAnU4V5uHP%2FzoKD%2F703%2F%2FJEGk%2F4P27V%2FQ934Ee4Qeq%2FyjfmTexRx0Bkm7nnknhowHlenjpD%2BhaxXfOjpn7TKja3kOEuw83QCEn4stcVP%2FHbwsYBdlUhmRw4GcbP01d6M7uSquBQ4%2FX4lXNWYcpuhFJOffeCjFHM0%2F%2FsajVRdlJCn%2BJJOhC6cGsIyPUHxDN86Ht86xb2DwQNKSIOyNIxkQHnAYHjhW%2Fw8eNOw3htOOCrhJ3wk3UuBLl6Is1b6glh3KUIHO%2F%2F6JbZMHAcoFs1B7lOeXCpVpcpYiW%2FARE%2B3xwqy9wUewVR%2BbxSxE9PlQuHrF464KytMNoZt9TlSrVuVRXSJ48L9RhvmmhLyDxG%2BgmUoJXcVyMUX4CNHlEyf8De1NeT9VyMANrAjx5KW%2BAvzYtOmoxS1RlrDII2HVcvfYC2PvcWkyWBKU1J0uEraWnYzsqwg620k72kITJEHNXuBUgZ6AkxFeRbopFYGKlJLRj2WyRFMMKY4sQGOqUBO3sOOryciXcUMdLiu1BdX1Zw6vP5E71x7ZIOPaI%2BRb1UBUa6t0wwO0IP3HZhQpyd2HVRR4Jr0Tvvu5S5difJ6kQbOgcimNVJ%2BbOp1ZBZlxc47dq9DsAFuSo%2BVFq2UtawN7yyXS530AOhUfJf3H2Y%2Ft8JZCPdBchXkqEgs76NMgVmAF7H1s3HSY1Z%2Fu%2FOdEGm1Km8YmPkLM0DmPX0FPGMKvF%2BM3FK&X-Amz-Signature=d914165b8e955486a67f236142a22abb8d968dd22b30b61e043c4194e5082497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXWIHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDud%2FY8D1EwiqCsRuqM%2BJybAzX%2FGahcSyJLPhx6ESqNRgIhAIeMYusitmn2mKtRoEpFWfCF5YQJZ6X8UPWLdvAHRlOiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykgUmkBtkrr4skJqoq3ANKLP8aIn0D5SucSDtxYjF7nZIps5BAs85LOjXn7zW5Op1nEljCh2p4nZv1ZICkp%2BjOuslC%2BOka5B%2BYWO4svGkbwEuw8wx6KW%2FsrSbbf2RwbnR%2F7N48H2Y4h2gv5OlMYWriJTS45uwccx4oCsEUzW7PA2k%2BoXlK%2F1El9%2BwInPy%2FNXzXegk7zeBnRVI2Jg%2F5PD27k%2FKP4GT9m4oZDElHiKoETULKmzhUlz7Tc6uHN8JNty920Cm95Su4LA96ms%2BaIhekjLHMpjU8ELGkKQDDvd7fHWquadnZO%2BNMRyqN6odGnHw5eCN8LGGYpELUHbJoRHleQXXWbVk4cALoHUpSx4L%2FkVGAoY9Z%2FpkfZXkiGyy4ZNcuiUh2toyBggBL2bz0eYShDJ0OAXZMq6UIPdbJrncyVv%2FV2wiTpCd0qEZiQheZEDJO4XrFnnN%2BP5CK59QpGp4uglYnGs7fRXDVUqrmEKqHG2etmGdLPnTfHvMsTp5CmHJgurklgDF701usU88vyR8ALSZaHmPqEeln8RajsPPDvPonbp8YB03MzT3WrCgs1kFIjD2EY4M2gxMNdFwdGrZUjkdLTyYQA8C%2FSPccI9ve999lIKOcsHglu8P%2F8J5vuPKUcytYbV7Dql98mTDomOLEBjqkAXIqS3dbH9V7IBKsf8WJckIvW%2FNZpTTdEB0oz0pmwBPFB6LO26o93niJaP0GxbLB1jN7XoUZzUei5XD6kGqtyeGpa4Iy%2FXRzoHcVZbUZ5HNsKRu6tr2iffWYeq5pMSx1NHGsttnwpHVSpUMrldk2d6JRHxoSCWAbQE1oc%2BIontBryp43Fu2y2lEDm%2FwdPtfiSPzmO3NZZpszMsDAsIWuAb960Egw&X-Amz-Signature=a18e7937c384a4a46a8d27e020a14a559d2193e96e93b4e497bfa80416be262e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXWIHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDud%2FY8D1EwiqCsRuqM%2BJybAzX%2FGahcSyJLPhx6ESqNRgIhAIeMYusitmn2mKtRoEpFWfCF5YQJZ6X8UPWLdvAHRlOiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykgUmkBtkrr4skJqoq3ANKLP8aIn0D5SucSDtxYjF7nZIps5BAs85LOjXn7zW5Op1nEljCh2p4nZv1ZICkp%2BjOuslC%2BOka5B%2BYWO4svGkbwEuw8wx6KW%2FsrSbbf2RwbnR%2F7N48H2Y4h2gv5OlMYWriJTS45uwccx4oCsEUzW7PA2k%2BoXlK%2F1El9%2BwInPy%2FNXzXegk7zeBnRVI2Jg%2F5PD27k%2FKP4GT9m4oZDElHiKoETULKmzhUlz7Tc6uHN8JNty920Cm95Su4LA96ms%2BaIhekjLHMpjU8ELGkKQDDvd7fHWquadnZO%2BNMRyqN6odGnHw5eCN8LGGYpELUHbJoRHleQXXWbVk4cALoHUpSx4L%2FkVGAoY9Z%2FpkfZXkiGyy4ZNcuiUh2toyBggBL2bz0eYShDJ0OAXZMq6UIPdbJrncyVv%2FV2wiTpCd0qEZiQheZEDJO4XrFnnN%2BP5CK59QpGp4uglYnGs7fRXDVUqrmEKqHG2etmGdLPnTfHvMsTp5CmHJgurklgDF701usU88vyR8ALSZaHmPqEeln8RajsPPDvPonbp8YB03MzT3WrCgs1kFIjD2EY4M2gxMNdFwdGrZUjkdLTyYQA8C%2FSPccI9ve999lIKOcsHglu8P%2F8J5vuPKUcytYbV7Dql98mTDomOLEBjqkAXIqS3dbH9V7IBKsf8WJckIvW%2FNZpTTdEB0oz0pmwBPFB6LO26o93niJaP0GxbLB1jN7XoUZzUei5XD6kGqtyeGpa4Iy%2FXRzoHcVZbUZ5HNsKRu6tr2iffWYeq5pMSx1NHGsttnwpHVSpUMrldk2d6JRHxoSCWAbQE1oc%2BIontBryp43Fu2y2lEDm%2FwdPtfiSPzmO3NZZpszMsDAsIWuAb960Egw&X-Amz-Signature=e2cafa4433d3d121d6a4dba04dce040645f08472e223f79580aa07cf6d4099a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXWIHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDud%2FY8D1EwiqCsRuqM%2BJybAzX%2FGahcSyJLPhx6ESqNRgIhAIeMYusitmn2mKtRoEpFWfCF5YQJZ6X8UPWLdvAHRlOiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykgUmkBtkrr4skJqoq3ANKLP8aIn0D5SucSDtxYjF7nZIps5BAs85LOjXn7zW5Op1nEljCh2p4nZv1ZICkp%2BjOuslC%2BOka5B%2BYWO4svGkbwEuw8wx6KW%2FsrSbbf2RwbnR%2F7N48H2Y4h2gv5OlMYWriJTS45uwccx4oCsEUzW7PA2k%2BoXlK%2F1El9%2BwInPy%2FNXzXegk7zeBnRVI2Jg%2F5PD27k%2FKP4GT9m4oZDElHiKoETULKmzhUlz7Tc6uHN8JNty920Cm95Su4LA96ms%2BaIhekjLHMpjU8ELGkKQDDvd7fHWquadnZO%2BNMRyqN6odGnHw5eCN8LGGYpELUHbJoRHleQXXWbVk4cALoHUpSx4L%2FkVGAoY9Z%2FpkfZXkiGyy4ZNcuiUh2toyBggBL2bz0eYShDJ0OAXZMq6UIPdbJrncyVv%2FV2wiTpCd0qEZiQheZEDJO4XrFnnN%2BP5CK59QpGp4uglYnGs7fRXDVUqrmEKqHG2etmGdLPnTfHvMsTp5CmHJgurklgDF701usU88vyR8ALSZaHmPqEeln8RajsPPDvPonbp8YB03MzT3WrCgs1kFIjD2EY4M2gxMNdFwdGrZUjkdLTyYQA8C%2FSPccI9ve999lIKOcsHglu8P%2F8J5vuPKUcytYbV7Dql98mTDomOLEBjqkAXIqS3dbH9V7IBKsf8WJckIvW%2FNZpTTdEB0oz0pmwBPFB6LO26o93niJaP0GxbLB1jN7XoUZzUei5XD6kGqtyeGpa4Iy%2FXRzoHcVZbUZ5HNsKRu6tr2iffWYeq5pMSx1NHGsttnwpHVSpUMrldk2d6JRHxoSCWAbQE1oc%2BIontBryp43Fu2y2lEDm%2FwdPtfiSPzmO3NZZpszMsDAsIWuAb960Egw&X-Amz-Signature=20e59ada19e03efb6ccb6b242c948f54db3e7fda34e036bdbb7fac559155ffe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXWIHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDud%2FY8D1EwiqCsRuqM%2BJybAzX%2FGahcSyJLPhx6ESqNRgIhAIeMYusitmn2mKtRoEpFWfCF5YQJZ6X8UPWLdvAHRlOiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykgUmkBtkrr4skJqoq3ANKLP8aIn0D5SucSDtxYjF7nZIps5BAs85LOjXn7zW5Op1nEljCh2p4nZv1ZICkp%2BjOuslC%2BOka5B%2BYWO4svGkbwEuw8wx6KW%2FsrSbbf2RwbnR%2F7N48H2Y4h2gv5OlMYWriJTS45uwccx4oCsEUzW7PA2k%2BoXlK%2F1El9%2BwInPy%2FNXzXegk7zeBnRVI2Jg%2F5PD27k%2FKP4GT9m4oZDElHiKoETULKmzhUlz7Tc6uHN8JNty920Cm95Su4LA96ms%2BaIhekjLHMpjU8ELGkKQDDvd7fHWquadnZO%2BNMRyqN6odGnHw5eCN8LGGYpELUHbJoRHleQXXWbVk4cALoHUpSx4L%2FkVGAoY9Z%2FpkfZXkiGyy4ZNcuiUh2toyBggBL2bz0eYShDJ0OAXZMq6UIPdbJrncyVv%2FV2wiTpCd0qEZiQheZEDJO4XrFnnN%2BP5CK59QpGp4uglYnGs7fRXDVUqrmEKqHG2etmGdLPnTfHvMsTp5CmHJgurklgDF701usU88vyR8ALSZaHmPqEeln8RajsPPDvPonbp8YB03MzT3WrCgs1kFIjD2EY4M2gxMNdFwdGrZUjkdLTyYQA8C%2FSPccI9ve999lIKOcsHglu8P%2F8J5vuPKUcytYbV7Dql98mTDomOLEBjqkAXIqS3dbH9V7IBKsf8WJckIvW%2FNZpTTdEB0oz0pmwBPFB6LO26o93niJaP0GxbLB1jN7XoUZzUei5XD6kGqtyeGpa4Iy%2FXRzoHcVZbUZ5HNsKRu6tr2iffWYeq5pMSx1NHGsttnwpHVSpUMrldk2d6JRHxoSCWAbQE1oc%2BIontBryp43Fu2y2lEDm%2FwdPtfiSPzmO3NZZpszMsDAsIWuAb960Egw&X-Amz-Signature=d8ebeeac4836afdfe60b61b51d05b8666914cf9c0adc9bd7baab3efa80dd9d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXWIHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDud%2FY8D1EwiqCsRuqM%2BJybAzX%2FGahcSyJLPhx6ESqNRgIhAIeMYusitmn2mKtRoEpFWfCF5YQJZ6X8UPWLdvAHRlOiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykgUmkBtkrr4skJqoq3ANKLP8aIn0D5SucSDtxYjF7nZIps5BAs85LOjXn7zW5Op1nEljCh2p4nZv1ZICkp%2BjOuslC%2BOka5B%2BYWO4svGkbwEuw8wx6KW%2FsrSbbf2RwbnR%2F7N48H2Y4h2gv5OlMYWriJTS45uwccx4oCsEUzW7PA2k%2BoXlK%2F1El9%2BwInPy%2FNXzXegk7zeBnRVI2Jg%2F5PD27k%2FKP4GT9m4oZDElHiKoETULKmzhUlz7Tc6uHN8JNty920Cm95Su4LA96ms%2BaIhekjLHMpjU8ELGkKQDDvd7fHWquadnZO%2BNMRyqN6odGnHw5eCN8LGGYpELUHbJoRHleQXXWbVk4cALoHUpSx4L%2FkVGAoY9Z%2FpkfZXkiGyy4ZNcuiUh2toyBggBL2bz0eYShDJ0OAXZMq6UIPdbJrncyVv%2FV2wiTpCd0qEZiQheZEDJO4XrFnnN%2BP5CK59QpGp4uglYnGs7fRXDVUqrmEKqHG2etmGdLPnTfHvMsTp5CmHJgurklgDF701usU88vyR8ALSZaHmPqEeln8RajsPPDvPonbp8YB03MzT3WrCgs1kFIjD2EY4M2gxMNdFwdGrZUjkdLTyYQA8C%2FSPccI9ve999lIKOcsHglu8P%2F8J5vuPKUcytYbV7Dql98mTDomOLEBjqkAXIqS3dbH9V7IBKsf8WJckIvW%2FNZpTTdEB0oz0pmwBPFB6LO26o93niJaP0GxbLB1jN7XoUZzUei5XD6kGqtyeGpa4Iy%2FXRzoHcVZbUZ5HNsKRu6tr2iffWYeq5pMSx1NHGsttnwpHVSpUMrldk2d6JRHxoSCWAbQE1oc%2BIontBryp43Fu2y2lEDm%2FwdPtfiSPzmO3NZZpszMsDAsIWuAb960Egw&X-Amz-Signature=aa6de6012cfd500babfdf6af79bd39ce3db9e419594767aa6f729a9d3a2263e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXWIHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDud%2FY8D1EwiqCsRuqM%2BJybAzX%2FGahcSyJLPhx6ESqNRgIhAIeMYusitmn2mKtRoEpFWfCF5YQJZ6X8UPWLdvAHRlOiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykgUmkBtkrr4skJqoq3ANKLP8aIn0D5SucSDtxYjF7nZIps5BAs85LOjXn7zW5Op1nEljCh2p4nZv1ZICkp%2BjOuslC%2BOka5B%2BYWO4svGkbwEuw8wx6KW%2FsrSbbf2RwbnR%2F7N48H2Y4h2gv5OlMYWriJTS45uwccx4oCsEUzW7PA2k%2BoXlK%2F1El9%2BwInPy%2FNXzXegk7zeBnRVI2Jg%2F5PD27k%2FKP4GT9m4oZDElHiKoETULKmzhUlz7Tc6uHN8JNty920Cm95Su4LA96ms%2BaIhekjLHMpjU8ELGkKQDDvd7fHWquadnZO%2BNMRyqN6odGnHw5eCN8LGGYpELUHbJoRHleQXXWbVk4cALoHUpSx4L%2FkVGAoY9Z%2FpkfZXkiGyy4ZNcuiUh2toyBggBL2bz0eYShDJ0OAXZMq6UIPdbJrncyVv%2FV2wiTpCd0qEZiQheZEDJO4XrFnnN%2BP5CK59QpGp4uglYnGs7fRXDVUqrmEKqHG2etmGdLPnTfHvMsTp5CmHJgurklgDF701usU88vyR8ALSZaHmPqEeln8RajsPPDvPonbp8YB03MzT3WrCgs1kFIjD2EY4M2gxMNdFwdGrZUjkdLTyYQA8C%2FSPccI9ve999lIKOcsHglu8P%2F8J5vuPKUcytYbV7Dql98mTDomOLEBjqkAXIqS3dbH9V7IBKsf8WJckIvW%2FNZpTTdEB0oz0pmwBPFB6LO26o93niJaP0GxbLB1jN7XoUZzUei5XD6kGqtyeGpa4Iy%2FXRzoHcVZbUZ5HNsKRu6tr2iffWYeq5pMSx1NHGsttnwpHVSpUMrldk2d6JRHxoSCWAbQE1oc%2BIontBryp43Fu2y2lEDm%2FwdPtfiSPzmO3NZZpszMsDAsIWuAb960Egw&X-Amz-Signature=947ae2d13adfce9ce1a4baddfe807c5e56eaf56c202e70c9da3eea759ff88410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXWIHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDud%2FY8D1EwiqCsRuqM%2BJybAzX%2FGahcSyJLPhx6ESqNRgIhAIeMYusitmn2mKtRoEpFWfCF5YQJZ6X8UPWLdvAHRlOiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykgUmkBtkrr4skJqoq3ANKLP8aIn0D5SucSDtxYjF7nZIps5BAs85LOjXn7zW5Op1nEljCh2p4nZv1ZICkp%2BjOuslC%2BOka5B%2BYWO4svGkbwEuw8wx6KW%2FsrSbbf2RwbnR%2F7N48H2Y4h2gv5OlMYWriJTS45uwccx4oCsEUzW7PA2k%2BoXlK%2F1El9%2BwInPy%2FNXzXegk7zeBnRVI2Jg%2F5PD27k%2FKP4GT9m4oZDElHiKoETULKmzhUlz7Tc6uHN8JNty920Cm95Su4LA96ms%2BaIhekjLHMpjU8ELGkKQDDvd7fHWquadnZO%2BNMRyqN6odGnHw5eCN8LGGYpELUHbJoRHleQXXWbVk4cALoHUpSx4L%2FkVGAoY9Z%2FpkfZXkiGyy4ZNcuiUh2toyBggBL2bz0eYShDJ0OAXZMq6UIPdbJrncyVv%2FV2wiTpCd0qEZiQheZEDJO4XrFnnN%2BP5CK59QpGp4uglYnGs7fRXDVUqrmEKqHG2etmGdLPnTfHvMsTp5CmHJgurklgDF701usU88vyR8ALSZaHmPqEeln8RajsPPDvPonbp8YB03MzT3WrCgs1kFIjD2EY4M2gxMNdFwdGrZUjkdLTyYQA8C%2FSPccI9ve999lIKOcsHglu8P%2F8J5vuPKUcytYbV7Dql98mTDomOLEBjqkAXIqS3dbH9V7IBKsf8WJckIvW%2FNZpTTdEB0oz0pmwBPFB6LO26o93niJaP0GxbLB1jN7XoUZzUei5XD6kGqtyeGpa4Iy%2FXRzoHcVZbUZ5HNsKRu6tr2iffWYeq5pMSx1NHGsttnwpHVSpUMrldk2d6JRHxoSCWAbQE1oc%2BIontBryp43Fu2y2lEDm%2FwdPtfiSPzmO3NZZpszMsDAsIWuAb960Egw&X-Amz-Signature=60abc292c928aa3f0ac7e604330296bfc226b9f6beb424c7bebc3b2b767fd3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXWIHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDud%2FY8D1EwiqCsRuqM%2BJybAzX%2FGahcSyJLPhx6ESqNRgIhAIeMYusitmn2mKtRoEpFWfCF5YQJZ6X8UPWLdvAHRlOiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykgUmkBtkrr4skJqoq3ANKLP8aIn0D5SucSDtxYjF7nZIps5BAs85LOjXn7zW5Op1nEljCh2p4nZv1ZICkp%2BjOuslC%2BOka5B%2BYWO4svGkbwEuw8wx6KW%2FsrSbbf2RwbnR%2F7N48H2Y4h2gv5OlMYWriJTS45uwccx4oCsEUzW7PA2k%2BoXlK%2F1El9%2BwInPy%2FNXzXegk7zeBnRVI2Jg%2F5PD27k%2FKP4GT9m4oZDElHiKoETULKmzhUlz7Tc6uHN8JNty920Cm95Su4LA96ms%2BaIhekjLHMpjU8ELGkKQDDvd7fHWquadnZO%2BNMRyqN6odGnHw5eCN8LGGYpELUHbJoRHleQXXWbVk4cALoHUpSx4L%2FkVGAoY9Z%2FpkfZXkiGyy4ZNcuiUh2toyBggBL2bz0eYShDJ0OAXZMq6UIPdbJrncyVv%2FV2wiTpCd0qEZiQheZEDJO4XrFnnN%2BP5CK59QpGp4uglYnGs7fRXDVUqrmEKqHG2etmGdLPnTfHvMsTp5CmHJgurklgDF701usU88vyR8ALSZaHmPqEeln8RajsPPDvPonbp8YB03MzT3WrCgs1kFIjD2EY4M2gxMNdFwdGrZUjkdLTyYQA8C%2FSPccI9ve999lIKOcsHglu8P%2F8J5vuPKUcytYbV7Dql98mTDomOLEBjqkAXIqS3dbH9V7IBKsf8WJckIvW%2FNZpTTdEB0oz0pmwBPFB6LO26o93niJaP0GxbLB1jN7XoUZzUei5XD6kGqtyeGpa4Iy%2FXRzoHcVZbUZ5HNsKRu6tr2iffWYeq5pMSx1NHGsttnwpHVSpUMrldk2d6JRHxoSCWAbQE1oc%2BIontBryp43Fu2y2lEDm%2FwdPtfiSPzmO3NZZpszMsDAsIWuAb960Egw&X-Amz-Signature=b507daeeb2f8fc14ef528ba2d17335f8ecda696d5bc9d5d525de1f1895466159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXWIHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDud%2FY8D1EwiqCsRuqM%2BJybAzX%2FGahcSyJLPhx6ESqNRgIhAIeMYusitmn2mKtRoEpFWfCF5YQJZ6X8UPWLdvAHRlOiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykgUmkBtkrr4skJqoq3ANKLP8aIn0D5SucSDtxYjF7nZIps5BAs85LOjXn7zW5Op1nEljCh2p4nZv1ZICkp%2BjOuslC%2BOka5B%2BYWO4svGkbwEuw8wx6KW%2FsrSbbf2RwbnR%2F7N48H2Y4h2gv5OlMYWriJTS45uwccx4oCsEUzW7PA2k%2BoXlK%2F1El9%2BwInPy%2FNXzXegk7zeBnRVI2Jg%2F5PD27k%2FKP4GT9m4oZDElHiKoETULKmzhUlz7Tc6uHN8JNty920Cm95Su4LA96ms%2BaIhekjLHMpjU8ELGkKQDDvd7fHWquadnZO%2BNMRyqN6odGnHw5eCN8LGGYpELUHbJoRHleQXXWbVk4cALoHUpSx4L%2FkVGAoY9Z%2FpkfZXkiGyy4ZNcuiUh2toyBggBL2bz0eYShDJ0OAXZMq6UIPdbJrncyVv%2FV2wiTpCd0qEZiQheZEDJO4XrFnnN%2BP5CK59QpGp4uglYnGs7fRXDVUqrmEKqHG2etmGdLPnTfHvMsTp5CmHJgurklgDF701usU88vyR8ALSZaHmPqEeln8RajsPPDvPonbp8YB03MzT3WrCgs1kFIjD2EY4M2gxMNdFwdGrZUjkdLTyYQA8C%2FSPccI9ve999lIKOcsHglu8P%2F8J5vuPKUcytYbV7Dql98mTDomOLEBjqkAXIqS3dbH9V7IBKsf8WJckIvW%2FNZpTTdEB0oz0pmwBPFB6LO26o93niJaP0GxbLB1jN7XoUZzUei5XD6kGqtyeGpa4Iy%2FXRzoHcVZbUZ5HNsKRu6tr2iffWYeq5pMSx1NHGsttnwpHVSpUMrldk2d6JRHxoSCWAbQE1oc%2BIontBryp43Fu2y2lEDm%2FwdPtfiSPzmO3NZZpszMsDAsIWuAb960Egw&X-Amz-Signature=c2be9db534b443ff3279bf805355dd3ff3ebb229a4ba81659da89d2e8fc1b0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
