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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEFO6B4%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB%2Fk1MRD2OrwU%2BvXJvxyfyGyY88Ps9R2xZYqe6SvXBoDAiA2TrY0LTZPTfYgDDg30KekkLEi0pTYFsoSfEPYQXvleyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HQqdWu9n%2Fg%2Bz56lKtwDbcX1%2BYldjF5HxjDEub24a7BFVBpQP9xHva27gJLi7ecsBYl4B%2BjHtshMD%2B6vjt0rd9oxZzHDYjZksv7X0BiB4bkW1lx4%2BoX7i5I1fnvTEHWRDgIN56uuF0ewn5gGQOEwaiE90i4RBb9AADZTmyWeCCCCIoqcXkNGEzYjb%2B0euV59JScRhPn%2FpjrUkB4MF5Mxht6r6TN1zlZv2EDRJSkOLaSWMTi4o629IzWFcYEOszbM2UAk1Mx%2BClK1voSrVhL6XksVG%2F7x2%2FA0s3khNGkTfJWKbTkwPcWCnR%2BRU0Zzmgq55rcRB1vV%2BjGWrcqwF5PmOsmQsMxGBriz%2F%2BoiqudKI06VkQKsFLdmjHLq6hmHv2OZVQrn1GobQTfBO0bPLKHUtCZo4WpXpPKBPF94gMbKfRLeIuDWwKfL0a6eU3O5de8kZo9iDYvfpPJE7hXhMpoGbDVsjIR4fR7JuTSLVRMYBTXVQc6vKNJc9TZrIXwA3u33HdKCDXRIiSISgwxlcWLUEZxHnpcP4a%2B4pTf60sEfPQKBE9wnhoNxRRhUazBRO3O%2F7Zp%2BvxxOLPBdyHCd%2FGSHw%2BLNu8ADNI77XaepLXs4nAqEgEFNk6o24nqzGVMCiOGSy%2Fxi7MLwgjV6SVswyOitzQY6pgGg4FK2iS22LgVbC2%2FmX0dei3anDkW6QLgk8cpkqg66wBOrN%2BVlDNcFwI%2BokAAauEisSQcGa6eXyH2WNgM6D1zQXzTv7ztFzWOmeWYLwjh5YUW42%2FzPt6WgANYT0VLfo8ECmrE3f2kJBqej4gJjbaoS2GNVDA%2B%2BksfRfSdL%2B992nM%2FF4%2BfcTv%2FxKFZTbMqlwwgznJhyA%2BUu1L6m%2BrFWo3fQxeO4grI5&X-Amz-Signature=c7eaf27dcba58868c605e1046d142a284a2f80754d6364c3e860690d6ac90ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEFO6B4%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB%2Fk1MRD2OrwU%2BvXJvxyfyGyY88Ps9R2xZYqe6SvXBoDAiA2TrY0LTZPTfYgDDg30KekkLEi0pTYFsoSfEPYQXvleyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HQqdWu9n%2Fg%2Bz56lKtwDbcX1%2BYldjF5HxjDEub24a7BFVBpQP9xHva27gJLi7ecsBYl4B%2BjHtshMD%2B6vjt0rd9oxZzHDYjZksv7X0BiB4bkW1lx4%2BoX7i5I1fnvTEHWRDgIN56uuF0ewn5gGQOEwaiE90i4RBb9AADZTmyWeCCCCIoqcXkNGEzYjb%2B0euV59JScRhPn%2FpjrUkB4MF5Mxht6r6TN1zlZv2EDRJSkOLaSWMTi4o629IzWFcYEOszbM2UAk1Mx%2BClK1voSrVhL6XksVG%2F7x2%2FA0s3khNGkTfJWKbTkwPcWCnR%2BRU0Zzmgq55rcRB1vV%2BjGWrcqwF5PmOsmQsMxGBriz%2F%2BoiqudKI06VkQKsFLdmjHLq6hmHv2OZVQrn1GobQTfBO0bPLKHUtCZo4WpXpPKBPF94gMbKfRLeIuDWwKfL0a6eU3O5de8kZo9iDYvfpPJE7hXhMpoGbDVsjIR4fR7JuTSLVRMYBTXVQc6vKNJc9TZrIXwA3u33HdKCDXRIiSISgwxlcWLUEZxHnpcP4a%2B4pTf60sEfPQKBE9wnhoNxRRhUazBRO3O%2F7Zp%2BvxxOLPBdyHCd%2FGSHw%2BLNu8ADNI77XaepLXs4nAqEgEFNk6o24nqzGVMCiOGSy%2Fxi7MLwgjV6SVswyOitzQY6pgGg4FK2iS22LgVbC2%2FmX0dei3anDkW6QLgk8cpkqg66wBOrN%2BVlDNcFwI%2BokAAauEisSQcGa6eXyH2WNgM6D1zQXzTv7ztFzWOmeWYLwjh5YUW42%2FzPt6WgANYT0VLfo8ECmrE3f2kJBqej4gJjbaoS2GNVDA%2B%2BksfRfSdL%2B992nM%2FF4%2BfcTv%2FxKFZTbMqlwwgznJhyA%2BUu1L6m%2BrFWo3fQxeO4grI5&X-Amz-Signature=f27a27e544b9be331e1958efd6d6ab32a7d42137bd7ea73a8526fd05998f028b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEFO6B4%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB%2Fk1MRD2OrwU%2BvXJvxyfyGyY88Ps9R2xZYqe6SvXBoDAiA2TrY0LTZPTfYgDDg30KekkLEi0pTYFsoSfEPYQXvleyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HQqdWu9n%2Fg%2Bz56lKtwDbcX1%2BYldjF5HxjDEub24a7BFVBpQP9xHva27gJLi7ecsBYl4B%2BjHtshMD%2B6vjt0rd9oxZzHDYjZksv7X0BiB4bkW1lx4%2BoX7i5I1fnvTEHWRDgIN56uuF0ewn5gGQOEwaiE90i4RBb9AADZTmyWeCCCCIoqcXkNGEzYjb%2B0euV59JScRhPn%2FpjrUkB4MF5Mxht6r6TN1zlZv2EDRJSkOLaSWMTi4o629IzWFcYEOszbM2UAk1Mx%2BClK1voSrVhL6XksVG%2F7x2%2FA0s3khNGkTfJWKbTkwPcWCnR%2BRU0Zzmgq55rcRB1vV%2BjGWrcqwF5PmOsmQsMxGBriz%2F%2BoiqudKI06VkQKsFLdmjHLq6hmHv2OZVQrn1GobQTfBO0bPLKHUtCZo4WpXpPKBPF94gMbKfRLeIuDWwKfL0a6eU3O5de8kZo9iDYvfpPJE7hXhMpoGbDVsjIR4fR7JuTSLVRMYBTXVQc6vKNJc9TZrIXwA3u33HdKCDXRIiSISgwxlcWLUEZxHnpcP4a%2B4pTf60sEfPQKBE9wnhoNxRRhUazBRO3O%2F7Zp%2BvxxOLPBdyHCd%2FGSHw%2BLNu8ADNI77XaepLXs4nAqEgEFNk6o24nqzGVMCiOGSy%2Fxi7MLwgjV6SVswyOitzQY6pgGg4FK2iS22LgVbC2%2FmX0dei3anDkW6QLgk8cpkqg66wBOrN%2BVlDNcFwI%2BokAAauEisSQcGa6eXyH2WNgM6D1zQXzTv7ztFzWOmeWYLwjh5YUW42%2FzPt6WgANYT0VLfo8ECmrE3f2kJBqej4gJjbaoS2GNVDA%2B%2BksfRfSdL%2B992nM%2FF4%2BfcTv%2FxKFZTbMqlwwgznJhyA%2BUu1L6m%2BrFWo3fQxeO4grI5&X-Amz-Signature=371d922f00a474b7009b278897a85b82c1eac328181d239c0c2f829fee3d711d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEFO6B4%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB%2Fk1MRD2OrwU%2BvXJvxyfyGyY88Ps9R2xZYqe6SvXBoDAiA2TrY0LTZPTfYgDDg30KekkLEi0pTYFsoSfEPYQXvleyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HQqdWu9n%2Fg%2Bz56lKtwDbcX1%2BYldjF5HxjDEub24a7BFVBpQP9xHva27gJLi7ecsBYl4B%2BjHtshMD%2B6vjt0rd9oxZzHDYjZksv7X0BiB4bkW1lx4%2BoX7i5I1fnvTEHWRDgIN56uuF0ewn5gGQOEwaiE90i4RBb9AADZTmyWeCCCCIoqcXkNGEzYjb%2B0euV59JScRhPn%2FpjrUkB4MF5Mxht6r6TN1zlZv2EDRJSkOLaSWMTi4o629IzWFcYEOszbM2UAk1Mx%2BClK1voSrVhL6XksVG%2F7x2%2FA0s3khNGkTfJWKbTkwPcWCnR%2BRU0Zzmgq55rcRB1vV%2BjGWrcqwF5PmOsmQsMxGBriz%2F%2BoiqudKI06VkQKsFLdmjHLq6hmHv2OZVQrn1GobQTfBO0bPLKHUtCZo4WpXpPKBPF94gMbKfRLeIuDWwKfL0a6eU3O5de8kZo9iDYvfpPJE7hXhMpoGbDVsjIR4fR7JuTSLVRMYBTXVQc6vKNJc9TZrIXwA3u33HdKCDXRIiSISgwxlcWLUEZxHnpcP4a%2B4pTf60sEfPQKBE9wnhoNxRRhUazBRO3O%2F7Zp%2BvxxOLPBdyHCd%2FGSHw%2BLNu8ADNI77XaepLXs4nAqEgEFNk6o24nqzGVMCiOGSy%2Fxi7MLwgjV6SVswyOitzQY6pgGg4FK2iS22LgVbC2%2FmX0dei3anDkW6QLgk8cpkqg66wBOrN%2BVlDNcFwI%2BokAAauEisSQcGa6eXyH2WNgM6D1zQXzTv7ztFzWOmeWYLwjh5YUW42%2FzPt6WgANYT0VLfo8ECmrE3f2kJBqej4gJjbaoS2GNVDA%2B%2BksfRfSdL%2B992nM%2FF4%2BfcTv%2FxKFZTbMqlwwgznJhyA%2BUu1L6m%2BrFWo3fQxeO4grI5&X-Amz-Signature=5cb7d00303ed83bfebb1949ec1756a73c46709b3e0c50ff40bb363a2de684dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEFO6B4%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB%2Fk1MRD2OrwU%2BvXJvxyfyGyY88Ps9R2xZYqe6SvXBoDAiA2TrY0LTZPTfYgDDg30KekkLEi0pTYFsoSfEPYQXvleyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HQqdWu9n%2Fg%2Bz56lKtwDbcX1%2BYldjF5HxjDEub24a7BFVBpQP9xHva27gJLi7ecsBYl4B%2BjHtshMD%2B6vjt0rd9oxZzHDYjZksv7X0BiB4bkW1lx4%2BoX7i5I1fnvTEHWRDgIN56uuF0ewn5gGQOEwaiE90i4RBb9AADZTmyWeCCCCIoqcXkNGEzYjb%2B0euV59JScRhPn%2FpjrUkB4MF5Mxht6r6TN1zlZv2EDRJSkOLaSWMTi4o629IzWFcYEOszbM2UAk1Mx%2BClK1voSrVhL6XksVG%2F7x2%2FA0s3khNGkTfJWKbTkwPcWCnR%2BRU0Zzmgq55rcRB1vV%2BjGWrcqwF5PmOsmQsMxGBriz%2F%2BoiqudKI06VkQKsFLdmjHLq6hmHv2OZVQrn1GobQTfBO0bPLKHUtCZo4WpXpPKBPF94gMbKfRLeIuDWwKfL0a6eU3O5de8kZo9iDYvfpPJE7hXhMpoGbDVsjIR4fR7JuTSLVRMYBTXVQc6vKNJc9TZrIXwA3u33HdKCDXRIiSISgwxlcWLUEZxHnpcP4a%2B4pTf60sEfPQKBE9wnhoNxRRhUazBRO3O%2F7Zp%2BvxxOLPBdyHCd%2FGSHw%2BLNu8ADNI77XaepLXs4nAqEgEFNk6o24nqzGVMCiOGSy%2Fxi7MLwgjV6SVswyOitzQY6pgGg4FK2iS22LgVbC2%2FmX0dei3anDkW6QLgk8cpkqg66wBOrN%2BVlDNcFwI%2BokAAauEisSQcGa6eXyH2WNgM6D1zQXzTv7ztFzWOmeWYLwjh5YUW42%2FzPt6WgANYT0VLfo8ECmrE3f2kJBqej4gJjbaoS2GNVDA%2B%2BksfRfSdL%2B992nM%2FF4%2BfcTv%2FxKFZTbMqlwwgznJhyA%2BUu1L6m%2BrFWo3fQxeO4grI5&X-Amz-Signature=35047fdbeb3ea3b3999d20a6e380b68e3844b42cd950c09f390ae821dbba2d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEFO6B4%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB%2Fk1MRD2OrwU%2BvXJvxyfyGyY88Ps9R2xZYqe6SvXBoDAiA2TrY0LTZPTfYgDDg30KekkLEi0pTYFsoSfEPYQXvleyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HQqdWu9n%2Fg%2Bz56lKtwDbcX1%2BYldjF5HxjDEub24a7BFVBpQP9xHva27gJLi7ecsBYl4B%2BjHtshMD%2B6vjt0rd9oxZzHDYjZksv7X0BiB4bkW1lx4%2BoX7i5I1fnvTEHWRDgIN56uuF0ewn5gGQOEwaiE90i4RBb9AADZTmyWeCCCCIoqcXkNGEzYjb%2B0euV59JScRhPn%2FpjrUkB4MF5Mxht6r6TN1zlZv2EDRJSkOLaSWMTi4o629IzWFcYEOszbM2UAk1Mx%2BClK1voSrVhL6XksVG%2F7x2%2FA0s3khNGkTfJWKbTkwPcWCnR%2BRU0Zzmgq55rcRB1vV%2BjGWrcqwF5PmOsmQsMxGBriz%2F%2BoiqudKI06VkQKsFLdmjHLq6hmHv2OZVQrn1GobQTfBO0bPLKHUtCZo4WpXpPKBPF94gMbKfRLeIuDWwKfL0a6eU3O5de8kZo9iDYvfpPJE7hXhMpoGbDVsjIR4fR7JuTSLVRMYBTXVQc6vKNJc9TZrIXwA3u33HdKCDXRIiSISgwxlcWLUEZxHnpcP4a%2B4pTf60sEfPQKBE9wnhoNxRRhUazBRO3O%2F7Zp%2BvxxOLPBdyHCd%2FGSHw%2BLNu8ADNI77XaepLXs4nAqEgEFNk6o24nqzGVMCiOGSy%2Fxi7MLwgjV6SVswyOitzQY6pgGg4FK2iS22LgVbC2%2FmX0dei3anDkW6QLgk8cpkqg66wBOrN%2BVlDNcFwI%2BokAAauEisSQcGa6eXyH2WNgM6D1zQXzTv7ztFzWOmeWYLwjh5YUW42%2FzPt6WgANYT0VLfo8ECmrE3f2kJBqej4gJjbaoS2GNVDA%2B%2BksfRfSdL%2B992nM%2FF4%2BfcTv%2FxKFZTbMqlwwgznJhyA%2BUu1L6m%2BrFWo3fQxeO4grI5&X-Amz-Signature=edf0bff67ce4223bf51b712ccaef83b90e53a81ffcf6da80f847e10a7f07c2a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEFO6B4%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB%2Fk1MRD2OrwU%2BvXJvxyfyGyY88Ps9R2xZYqe6SvXBoDAiA2TrY0LTZPTfYgDDg30KekkLEi0pTYFsoSfEPYQXvleyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HQqdWu9n%2Fg%2Bz56lKtwDbcX1%2BYldjF5HxjDEub24a7BFVBpQP9xHva27gJLi7ecsBYl4B%2BjHtshMD%2B6vjt0rd9oxZzHDYjZksv7X0BiB4bkW1lx4%2BoX7i5I1fnvTEHWRDgIN56uuF0ewn5gGQOEwaiE90i4RBb9AADZTmyWeCCCCIoqcXkNGEzYjb%2B0euV59JScRhPn%2FpjrUkB4MF5Mxht6r6TN1zlZv2EDRJSkOLaSWMTi4o629IzWFcYEOszbM2UAk1Mx%2BClK1voSrVhL6XksVG%2F7x2%2FA0s3khNGkTfJWKbTkwPcWCnR%2BRU0Zzmgq55rcRB1vV%2BjGWrcqwF5PmOsmQsMxGBriz%2F%2BoiqudKI06VkQKsFLdmjHLq6hmHv2OZVQrn1GobQTfBO0bPLKHUtCZo4WpXpPKBPF94gMbKfRLeIuDWwKfL0a6eU3O5de8kZo9iDYvfpPJE7hXhMpoGbDVsjIR4fR7JuTSLVRMYBTXVQc6vKNJc9TZrIXwA3u33HdKCDXRIiSISgwxlcWLUEZxHnpcP4a%2B4pTf60sEfPQKBE9wnhoNxRRhUazBRO3O%2F7Zp%2BvxxOLPBdyHCd%2FGSHw%2BLNu8ADNI77XaepLXs4nAqEgEFNk6o24nqzGVMCiOGSy%2Fxi7MLwgjV6SVswyOitzQY6pgGg4FK2iS22LgVbC2%2FmX0dei3anDkW6QLgk8cpkqg66wBOrN%2BVlDNcFwI%2BokAAauEisSQcGa6eXyH2WNgM6D1zQXzTv7ztFzWOmeWYLwjh5YUW42%2FzPt6WgANYT0VLfo8ECmrE3f2kJBqej4gJjbaoS2GNVDA%2B%2BksfRfSdL%2B992nM%2FF4%2BfcTv%2FxKFZTbMqlwwgznJhyA%2BUu1L6m%2BrFWo3fQxeO4grI5&X-Amz-Signature=3ebfe3d6fada51e662f9ad031dae7053d3bbc621412cc429a1d5d0b6f0e3744d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEFO6B4%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB%2Fk1MRD2OrwU%2BvXJvxyfyGyY88Ps9R2xZYqe6SvXBoDAiA2TrY0LTZPTfYgDDg30KekkLEi0pTYFsoSfEPYQXvleyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HQqdWu9n%2Fg%2Bz56lKtwDbcX1%2BYldjF5HxjDEub24a7BFVBpQP9xHva27gJLi7ecsBYl4B%2BjHtshMD%2B6vjt0rd9oxZzHDYjZksv7X0BiB4bkW1lx4%2BoX7i5I1fnvTEHWRDgIN56uuF0ewn5gGQOEwaiE90i4RBb9AADZTmyWeCCCCIoqcXkNGEzYjb%2B0euV59JScRhPn%2FpjrUkB4MF5Mxht6r6TN1zlZv2EDRJSkOLaSWMTi4o629IzWFcYEOszbM2UAk1Mx%2BClK1voSrVhL6XksVG%2F7x2%2FA0s3khNGkTfJWKbTkwPcWCnR%2BRU0Zzmgq55rcRB1vV%2BjGWrcqwF5PmOsmQsMxGBriz%2F%2BoiqudKI06VkQKsFLdmjHLq6hmHv2OZVQrn1GobQTfBO0bPLKHUtCZo4WpXpPKBPF94gMbKfRLeIuDWwKfL0a6eU3O5de8kZo9iDYvfpPJE7hXhMpoGbDVsjIR4fR7JuTSLVRMYBTXVQc6vKNJc9TZrIXwA3u33HdKCDXRIiSISgwxlcWLUEZxHnpcP4a%2B4pTf60sEfPQKBE9wnhoNxRRhUazBRO3O%2F7Zp%2BvxxOLPBdyHCd%2FGSHw%2BLNu8ADNI77XaepLXs4nAqEgEFNk6o24nqzGVMCiOGSy%2Fxi7MLwgjV6SVswyOitzQY6pgGg4FK2iS22LgVbC2%2FmX0dei3anDkW6QLgk8cpkqg66wBOrN%2BVlDNcFwI%2BokAAauEisSQcGa6eXyH2WNgM6D1zQXzTv7ztFzWOmeWYLwjh5YUW42%2FzPt6WgANYT0VLfo8ECmrE3f2kJBqej4gJjbaoS2GNVDA%2B%2BksfRfSdL%2B992nM%2FF4%2BfcTv%2FxKFZTbMqlwwgznJhyA%2BUu1L6m%2BrFWo3fQxeO4grI5&X-Amz-Signature=aaf7f3fa8042aa93cb42325b69f8a987ce57863c3e6d7390e58334afd74c5570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEFO6B4%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB%2Fk1MRD2OrwU%2BvXJvxyfyGyY88Ps9R2xZYqe6SvXBoDAiA2TrY0LTZPTfYgDDg30KekkLEi0pTYFsoSfEPYQXvleyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HQqdWu9n%2Fg%2Bz56lKtwDbcX1%2BYldjF5HxjDEub24a7BFVBpQP9xHva27gJLi7ecsBYl4B%2BjHtshMD%2B6vjt0rd9oxZzHDYjZksv7X0BiB4bkW1lx4%2BoX7i5I1fnvTEHWRDgIN56uuF0ewn5gGQOEwaiE90i4RBb9AADZTmyWeCCCCIoqcXkNGEzYjb%2B0euV59JScRhPn%2FpjrUkB4MF5Mxht6r6TN1zlZv2EDRJSkOLaSWMTi4o629IzWFcYEOszbM2UAk1Mx%2BClK1voSrVhL6XksVG%2F7x2%2FA0s3khNGkTfJWKbTkwPcWCnR%2BRU0Zzmgq55rcRB1vV%2BjGWrcqwF5PmOsmQsMxGBriz%2F%2BoiqudKI06VkQKsFLdmjHLq6hmHv2OZVQrn1GobQTfBO0bPLKHUtCZo4WpXpPKBPF94gMbKfRLeIuDWwKfL0a6eU3O5de8kZo9iDYvfpPJE7hXhMpoGbDVsjIR4fR7JuTSLVRMYBTXVQc6vKNJc9TZrIXwA3u33HdKCDXRIiSISgwxlcWLUEZxHnpcP4a%2B4pTf60sEfPQKBE9wnhoNxRRhUazBRO3O%2F7Zp%2BvxxOLPBdyHCd%2FGSHw%2BLNu8ADNI77XaepLXs4nAqEgEFNk6o24nqzGVMCiOGSy%2Fxi7MLwgjV6SVswyOitzQY6pgGg4FK2iS22LgVbC2%2FmX0dei3anDkW6QLgk8cpkqg66wBOrN%2BVlDNcFwI%2BokAAauEisSQcGa6eXyH2WNgM6D1zQXzTv7ztFzWOmeWYLwjh5YUW42%2FzPt6WgANYT0VLfo8ECmrE3f2kJBqej4gJjbaoS2GNVDA%2B%2BksfRfSdL%2B992nM%2FF4%2BfcTv%2FxKFZTbMqlwwgznJhyA%2BUu1L6m%2BrFWo3fQxeO4grI5&X-Amz-Signature=f70ab56dc7f19573880f32b22412f683b7ecbf74feb495d3bd0af82deb9fe4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEFO6B4%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB%2Fk1MRD2OrwU%2BvXJvxyfyGyY88Ps9R2xZYqe6SvXBoDAiA2TrY0LTZPTfYgDDg30KekkLEi0pTYFsoSfEPYQXvleyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6HQqdWu9n%2Fg%2Bz56lKtwDbcX1%2BYldjF5HxjDEub24a7BFVBpQP9xHva27gJLi7ecsBYl4B%2BjHtshMD%2B6vjt0rd9oxZzHDYjZksv7X0BiB4bkW1lx4%2BoX7i5I1fnvTEHWRDgIN56uuF0ewn5gGQOEwaiE90i4RBb9AADZTmyWeCCCCIoqcXkNGEzYjb%2B0euV59JScRhPn%2FpjrUkB4MF5Mxht6r6TN1zlZv2EDRJSkOLaSWMTi4o629IzWFcYEOszbM2UAk1Mx%2BClK1voSrVhL6XksVG%2F7x2%2FA0s3khNGkTfJWKbTkwPcWCnR%2BRU0Zzmgq55rcRB1vV%2BjGWrcqwF5PmOsmQsMxGBriz%2F%2BoiqudKI06VkQKsFLdmjHLq6hmHv2OZVQrn1GobQTfBO0bPLKHUtCZo4WpXpPKBPF94gMbKfRLeIuDWwKfL0a6eU3O5de8kZo9iDYvfpPJE7hXhMpoGbDVsjIR4fR7JuTSLVRMYBTXVQc6vKNJc9TZrIXwA3u33HdKCDXRIiSISgwxlcWLUEZxHnpcP4a%2B4pTf60sEfPQKBE9wnhoNxRRhUazBRO3O%2F7Zp%2BvxxOLPBdyHCd%2FGSHw%2BLNu8ADNI77XaepLXs4nAqEgEFNk6o24nqzGVMCiOGSy%2Fxi7MLwgjV6SVswyOitzQY6pgGg4FK2iS22LgVbC2%2FmX0dei3anDkW6QLgk8cpkqg66wBOrN%2BVlDNcFwI%2BokAAauEisSQcGa6eXyH2WNgM6D1zQXzTv7ztFzWOmeWYLwjh5YUW42%2FzPt6WgANYT0VLfo8ECmrE3f2kJBqej4gJjbaoS2GNVDA%2B%2BksfRfSdL%2B992nM%2FF4%2BfcTv%2FxKFZTbMqlwwgznJhyA%2BUu1L6m%2BrFWo3fQxeO4grI5&X-Amz-Signature=8d26cf845e5ad2482049fac403c9afd72d397e3a93105cbbf4172361de726628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJNNW4K%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGlhpwtAiG%2BL8rOqlcxKtjZZc0%2B7h1%2BGKUeHHf0JyiC5AiB2Dr57NxcNetqgP21YemMlD%2F2a2tbN%2FZAAt8bRC%2BjfRSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BzGSB2gbtwchGe4KtwDUr6ZZtANgDpFvIWEvLnFnbM2mN13eeMVMjJ7laWa0%2FUAeUhjLidFk8t09uHvJE3TdBhjms2hcTnu%2Fya7%2Fvgt9cNMEOi%2BmIOW5uBYFlgN4Z0MOcWduQHhhY7lThyaa0NFIFD6YE2Zilvqfu2riS9Ppek0i5SOn2LL2VtZg4u7eHljf7j1SiwkME%2BTqyoVy7m%2Bs1vElIZubGki%2B7wE71cvHmQetmRx2K%2BmeDGfOOWABLvYE76EXrN2Kv%2FHO8%2F7uMGuUx0%2BC%2BeRkm77xu%2BFWIwlrRerHkz0TOfp1IK1o%2FEjV01RNmZzsWJA6KduT%2F8OUBjOijscoAH%2ByHQx3Mc53p%2F5yCW35aKELBkF0pV1Y%2BFghbj9kgf0kSBtA1%2Fc0A6OlbJz9s8P6H7u%2F03oQisZWm3wVvImSIrtQnZ6EqmaX4O39WnjJwyc23%2FYnykFGz9RxR4ZZMy7Tm%2FjgS94UTJPoCQvypftb5rDMEW%2BwlFmsWZHzHRPHGI%2Fo4hNEEIXqtQBoOoJcFDrNN4PODsOI1SZa8sGomBBri8K8JOix9%2FgzJw6NxcJ8flrvGUPp92ec5eTL6xWQR%2BjTkwL3LNQmcXImsRiVVZbqJbrNlNgvv%2BawPKyltH5B%2FZThzJGx4JRXXYw6%2BitzQY6pgFTB7OeaZBRXJOGGSgoMD18aT7AX2GicgIEoWr1uPvI2%2F8RmO2hH%2FKSoDIBjfbKlfFP7dtELcsDjlCCJdwuLU%2F9pJCaqmZV9xFazIHGAzmA3%2Fs2WQ78LDgiacYAzLf614kDf7QxgvapR1Yymdi3C41e8%2FpeTbvekm6%2FWJSL9sndLq%2BSfkq3hPCP0qGdlJ9zrrU8WgCV4V%2BqQ3kxTQiXQ%2FFd%2FaA1G%2FT6&X-Amz-Signature=4df9fd9294c30b8e03208fb09577f34134b4fc8fe75d55da99ea821e88cd5a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGUAO5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDkvFUfCe49uKuS8%2B3FcwyFt%2B9sAwFZ4lqBRblW%2FOlEKgIgRPwnvjIa166%2BCWZ3ljacmtBXb1hD%2Bk4yzs2oPyNoB5AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxJb%2BDC9rgUgfYk7CrcA9%2Fu9bexwnheDKst2Y0kG%2Fw7YUb2IFvpNKAPB7VYOy02719Zkqd5Rr43fwNrrXEAWzIGBgDk32E%2BorwNpkIhwloT3ssm%2FEQwrlSVzWYlfrdwYjWd9uLImbU%2FZaZPdFZNiEsKIctxcejmn4zJV8SgxM2AsQl2arMHAmMxWHCzTYfVaeaZ6qHSoy%2FR9O40vvyKaVy%2BbBXguzcBih2NDLtdG6iW%2FqZL%2Becea73AmECJ3fnafa42Ek12AfY88BEVCWfjUc7BZhgkFkEbCY16tIpEe9rgoBjcKElYURa1eMXiermPAJktqUZM2wb4H7MBXLTjg7w0uJS%2FoNRw%2F2gvr7Pij95jgEmxGJfmSa9cS8LJ6viIiVuWdeJw%2FQgnspOhGcjRUugCKUg5RI9FNpo8sBwOqilycH%2Bf3xuDTmMPO4OJ0LePtdpYmjNElK2WWYa6KUodCYIHxbFYjO4wepzg%2FN%2Bso0JuTyvAs6ibxZcjhqF3cMyphQrTfe69FnKa3fZbgUlaZWzeFy%2BpgFQXu3m731lyjj1tkMFX2uxqf%2BVjGjHYbeG93xNrj7PWSNOnXQt1imKQu%2FrqZsIuDbpbzJZ4XzhUZXz2P393cwykjshsAoFsrT8R4VzlgZ%2BzhktXb0RVMIrprc0GOqUB8DQnI9dXVHm4HG1Os8%2BrKgvq4cjI%2FFN1HTS7EUieQxZV6qEzeGtMcfyNAEeEhCMfQm4knoYb5ectz2%2BB%2F%2FvwGcvjeyI5dF5lUdCx5RrMtvRHAXIy2lCufj3mRh092zUelXqjCtumOkr6lTDkspWo8uzFKy3xsGn0TdD6sJnujtrPwXozgNjlRMI99BCryzizlZRh4n6Rgce0ATG32j5ih7l2c%2F14&X-Amz-Signature=16858dcb45c6ed00635bbe1f3a0ec931510c485904bedd513d2eeaa4fe8d611a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGUAO5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDkvFUfCe49uKuS8%2B3FcwyFt%2B9sAwFZ4lqBRblW%2FOlEKgIgRPwnvjIa166%2BCWZ3ljacmtBXb1hD%2Bk4yzs2oPyNoB5AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxJb%2BDC9rgUgfYk7CrcA9%2Fu9bexwnheDKst2Y0kG%2Fw7YUb2IFvpNKAPB7VYOy02719Zkqd5Rr43fwNrrXEAWzIGBgDk32E%2BorwNpkIhwloT3ssm%2FEQwrlSVzWYlfrdwYjWd9uLImbU%2FZaZPdFZNiEsKIctxcejmn4zJV8SgxM2AsQl2arMHAmMxWHCzTYfVaeaZ6qHSoy%2FR9O40vvyKaVy%2BbBXguzcBih2NDLtdG6iW%2FqZL%2Becea73AmECJ3fnafa42Ek12AfY88BEVCWfjUc7BZhgkFkEbCY16tIpEe9rgoBjcKElYURa1eMXiermPAJktqUZM2wb4H7MBXLTjg7w0uJS%2FoNRw%2F2gvr7Pij95jgEmxGJfmSa9cS8LJ6viIiVuWdeJw%2FQgnspOhGcjRUugCKUg5RI9FNpo8sBwOqilycH%2Bf3xuDTmMPO4OJ0LePtdpYmjNElK2WWYa6KUodCYIHxbFYjO4wepzg%2FN%2Bso0JuTyvAs6ibxZcjhqF3cMyphQrTfe69FnKa3fZbgUlaZWzeFy%2BpgFQXu3m731lyjj1tkMFX2uxqf%2BVjGjHYbeG93xNrj7PWSNOnXQt1imKQu%2FrqZsIuDbpbzJZ4XzhUZXz2P393cwykjshsAoFsrT8R4VzlgZ%2BzhktXb0RVMIrprc0GOqUB8DQnI9dXVHm4HG1Os8%2BrKgvq4cjI%2FFN1HTS7EUieQxZV6qEzeGtMcfyNAEeEhCMfQm4knoYb5ectz2%2BB%2F%2FvwGcvjeyI5dF5lUdCx5RrMtvRHAXIy2lCufj3mRh092zUelXqjCtumOkr6lTDkspWo8uzFKy3xsGn0TdD6sJnujtrPwXozgNjlRMI99BCryzizlZRh4n6Rgce0ATG32j5ih7l2c%2F14&X-Amz-Signature=e42209a1caefa8f80016968eadc9ec52f005fdb81326436f2321fd309bd192bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGUAO5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDkvFUfCe49uKuS8%2B3FcwyFt%2B9sAwFZ4lqBRblW%2FOlEKgIgRPwnvjIa166%2BCWZ3ljacmtBXb1hD%2Bk4yzs2oPyNoB5AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxJb%2BDC9rgUgfYk7CrcA9%2Fu9bexwnheDKst2Y0kG%2Fw7YUb2IFvpNKAPB7VYOy02719Zkqd5Rr43fwNrrXEAWzIGBgDk32E%2BorwNpkIhwloT3ssm%2FEQwrlSVzWYlfrdwYjWd9uLImbU%2FZaZPdFZNiEsKIctxcejmn4zJV8SgxM2AsQl2arMHAmMxWHCzTYfVaeaZ6qHSoy%2FR9O40vvyKaVy%2BbBXguzcBih2NDLtdG6iW%2FqZL%2Becea73AmECJ3fnafa42Ek12AfY88BEVCWfjUc7BZhgkFkEbCY16tIpEe9rgoBjcKElYURa1eMXiermPAJktqUZM2wb4H7MBXLTjg7w0uJS%2FoNRw%2F2gvr7Pij95jgEmxGJfmSa9cS8LJ6viIiVuWdeJw%2FQgnspOhGcjRUugCKUg5RI9FNpo8sBwOqilycH%2Bf3xuDTmMPO4OJ0LePtdpYmjNElK2WWYa6KUodCYIHxbFYjO4wepzg%2FN%2Bso0JuTyvAs6ibxZcjhqF3cMyphQrTfe69FnKa3fZbgUlaZWzeFy%2BpgFQXu3m731lyjj1tkMFX2uxqf%2BVjGjHYbeG93xNrj7PWSNOnXQt1imKQu%2FrqZsIuDbpbzJZ4XzhUZXz2P393cwykjshsAoFsrT8R4VzlgZ%2BzhktXb0RVMIrprc0GOqUB8DQnI9dXVHm4HG1Os8%2BrKgvq4cjI%2FFN1HTS7EUieQxZV6qEzeGtMcfyNAEeEhCMfQm4knoYb5ectz2%2BB%2F%2FvwGcvjeyI5dF5lUdCx5RrMtvRHAXIy2lCufj3mRh092zUelXqjCtumOkr6lTDkspWo8uzFKy3xsGn0TdD6sJnujtrPwXozgNjlRMI99BCryzizlZRh4n6Rgce0ATG32j5ih7l2c%2F14&X-Amz-Signature=a3e2f5660794c3bb5263ae48b9a58c079a294a3f8026a20e15cd913dfdbff925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGUAO5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDkvFUfCe49uKuS8%2B3FcwyFt%2B9sAwFZ4lqBRblW%2FOlEKgIgRPwnvjIa166%2BCWZ3ljacmtBXb1hD%2Bk4yzs2oPyNoB5AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxJb%2BDC9rgUgfYk7CrcA9%2Fu9bexwnheDKst2Y0kG%2Fw7YUb2IFvpNKAPB7VYOy02719Zkqd5Rr43fwNrrXEAWzIGBgDk32E%2BorwNpkIhwloT3ssm%2FEQwrlSVzWYlfrdwYjWd9uLImbU%2FZaZPdFZNiEsKIctxcejmn4zJV8SgxM2AsQl2arMHAmMxWHCzTYfVaeaZ6qHSoy%2FR9O40vvyKaVy%2BbBXguzcBih2NDLtdG6iW%2FqZL%2Becea73AmECJ3fnafa42Ek12AfY88BEVCWfjUc7BZhgkFkEbCY16tIpEe9rgoBjcKElYURa1eMXiermPAJktqUZM2wb4H7MBXLTjg7w0uJS%2FoNRw%2F2gvr7Pij95jgEmxGJfmSa9cS8LJ6viIiVuWdeJw%2FQgnspOhGcjRUugCKUg5RI9FNpo8sBwOqilycH%2Bf3xuDTmMPO4OJ0LePtdpYmjNElK2WWYa6KUodCYIHxbFYjO4wepzg%2FN%2Bso0JuTyvAs6ibxZcjhqF3cMyphQrTfe69FnKa3fZbgUlaZWzeFy%2BpgFQXu3m731lyjj1tkMFX2uxqf%2BVjGjHYbeG93xNrj7PWSNOnXQt1imKQu%2FrqZsIuDbpbzJZ4XzhUZXz2P393cwykjshsAoFsrT8R4VzlgZ%2BzhktXb0RVMIrprc0GOqUB8DQnI9dXVHm4HG1Os8%2BrKgvq4cjI%2FFN1HTS7EUieQxZV6qEzeGtMcfyNAEeEhCMfQm4knoYb5ectz2%2BB%2F%2FvwGcvjeyI5dF5lUdCx5RrMtvRHAXIy2lCufj3mRh092zUelXqjCtumOkr6lTDkspWo8uzFKy3xsGn0TdD6sJnujtrPwXozgNjlRMI99BCryzizlZRh4n6Rgce0ATG32j5ih7l2c%2F14&X-Amz-Signature=2bf288462367cd9b4ef14ae1f93b85f3b160c13f4295c2f69ceff64ffa5be6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGUAO5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDkvFUfCe49uKuS8%2B3FcwyFt%2B9sAwFZ4lqBRblW%2FOlEKgIgRPwnvjIa166%2BCWZ3ljacmtBXb1hD%2Bk4yzs2oPyNoB5AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxJb%2BDC9rgUgfYk7CrcA9%2Fu9bexwnheDKst2Y0kG%2Fw7YUb2IFvpNKAPB7VYOy02719Zkqd5Rr43fwNrrXEAWzIGBgDk32E%2BorwNpkIhwloT3ssm%2FEQwrlSVzWYlfrdwYjWd9uLImbU%2FZaZPdFZNiEsKIctxcejmn4zJV8SgxM2AsQl2arMHAmMxWHCzTYfVaeaZ6qHSoy%2FR9O40vvyKaVy%2BbBXguzcBih2NDLtdG6iW%2FqZL%2Becea73AmECJ3fnafa42Ek12AfY88BEVCWfjUc7BZhgkFkEbCY16tIpEe9rgoBjcKElYURa1eMXiermPAJktqUZM2wb4H7MBXLTjg7w0uJS%2FoNRw%2F2gvr7Pij95jgEmxGJfmSa9cS8LJ6viIiVuWdeJw%2FQgnspOhGcjRUugCKUg5RI9FNpo8sBwOqilycH%2Bf3xuDTmMPO4OJ0LePtdpYmjNElK2WWYa6KUodCYIHxbFYjO4wepzg%2FN%2Bso0JuTyvAs6ibxZcjhqF3cMyphQrTfe69FnKa3fZbgUlaZWzeFy%2BpgFQXu3m731lyjj1tkMFX2uxqf%2BVjGjHYbeG93xNrj7PWSNOnXQt1imKQu%2FrqZsIuDbpbzJZ4XzhUZXz2P393cwykjshsAoFsrT8R4VzlgZ%2BzhktXb0RVMIrprc0GOqUB8DQnI9dXVHm4HG1Os8%2BrKgvq4cjI%2FFN1HTS7EUieQxZV6qEzeGtMcfyNAEeEhCMfQm4knoYb5ectz2%2BB%2F%2FvwGcvjeyI5dF5lUdCx5RrMtvRHAXIy2lCufj3mRh092zUelXqjCtumOkr6lTDkspWo8uzFKy3xsGn0TdD6sJnujtrPwXozgNjlRMI99BCryzizlZRh4n6Rgce0ATG32j5ih7l2c%2F14&X-Amz-Signature=ff129c7076d06e83e7f4c38fc4aaaf5785054f9e51ebe2b3788e209320fc2334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGUAO5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDkvFUfCe49uKuS8%2B3FcwyFt%2B9sAwFZ4lqBRblW%2FOlEKgIgRPwnvjIa166%2BCWZ3ljacmtBXb1hD%2Bk4yzs2oPyNoB5AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxJb%2BDC9rgUgfYk7CrcA9%2Fu9bexwnheDKst2Y0kG%2Fw7YUb2IFvpNKAPB7VYOy02719Zkqd5Rr43fwNrrXEAWzIGBgDk32E%2BorwNpkIhwloT3ssm%2FEQwrlSVzWYlfrdwYjWd9uLImbU%2FZaZPdFZNiEsKIctxcejmn4zJV8SgxM2AsQl2arMHAmMxWHCzTYfVaeaZ6qHSoy%2FR9O40vvyKaVy%2BbBXguzcBih2NDLtdG6iW%2FqZL%2Becea73AmECJ3fnafa42Ek12AfY88BEVCWfjUc7BZhgkFkEbCY16tIpEe9rgoBjcKElYURa1eMXiermPAJktqUZM2wb4H7MBXLTjg7w0uJS%2FoNRw%2F2gvr7Pij95jgEmxGJfmSa9cS8LJ6viIiVuWdeJw%2FQgnspOhGcjRUugCKUg5RI9FNpo8sBwOqilycH%2Bf3xuDTmMPO4OJ0LePtdpYmjNElK2WWYa6KUodCYIHxbFYjO4wepzg%2FN%2Bso0JuTyvAs6ibxZcjhqF3cMyphQrTfe69FnKa3fZbgUlaZWzeFy%2BpgFQXu3m731lyjj1tkMFX2uxqf%2BVjGjHYbeG93xNrj7PWSNOnXQt1imKQu%2FrqZsIuDbpbzJZ4XzhUZXz2P393cwykjshsAoFsrT8R4VzlgZ%2BzhktXb0RVMIrprc0GOqUB8DQnI9dXVHm4HG1Os8%2BrKgvq4cjI%2FFN1HTS7EUieQxZV6qEzeGtMcfyNAEeEhCMfQm4knoYb5ectz2%2BB%2F%2FvwGcvjeyI5dF5lUdCx5RrMtvRHAXIy2lCufj3mRh092zUelXqjCtumOkr6lTDkspWo8uzFKy3xsGn0TdD6sJnujtrPwXozgNjlRMI99BCryzizlZRh4n6Rgce0ATG32j5ih7l2c%2F14&X-Amz-Signature=c5c99c90d74552058981c9b22232e2a5c0001c2f306ab94b4cf5d1ab85143c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGUAO5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDkvFUfCe49uKuS8%2B3FcwyFt%2B9sAwFZ4lqBRblW%2FOlEKgIgRPwnvjIa166%2BCWZ3ljacmtBXb1hD%2Bk4yzs2oPyNoB5AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxJb%2BDC9rgUgfYk7CrcA9%2Fu9bexwnheDKst2Y0kG%2Fw7YUb2IFvpNKAPB7VYOy02719Zkqd5Rr43fwNrrXEAWzIGBgDk32E%2BorwNpkIhwloT3ssm%2FEQwrlSVzWYlfrdwYjWd9uLImbU%2FZaZPdFZNiEsKIctxcejmn4zJV8SgxM2AsQl2arMHAmMxWHCzTYfVaeaZ6qHSoy%2FR9O40vvyKaVy%2BbBXguzcBih2NDLtdG6iW%2FqZL%2Becea73AmECJ3fnafa42Ek12AfY88BEVCWfjUc7BZhgkFkEbCY16tIpEe9rgoBjcKElYURa1eMXiermPAJktqUZM2wb4H7MBXLTjg7w0uJS%2FoNRw%2F2gvr7Pij95jgEmxGJfmSa9cS8LJ6viIiVuWdeJw%2FQgnspOhGcjRUugCKUg5RI9FNpo8sBwOqilycH%2Bf3xuDTmMPO4OJ0LePtdpYmjNElK2WWYa6KUodCYIHxbFYjO4wepzg%2FN%2Bso0JuTyvAs6ibxZcjhqF3cMyphQrTfe69FnKa3fZbgUlaZWzeFy%2BpgFQXu3m731lyjj1tkMFX2uxqf%2BVjGjHYbeG93xNrj7PWSNOnXQt1imKQu%2FrqZsIuDbpbzJZ4XzhUZXz2P393cwykjshsAoFsrT8R4VzlgZ%2BzhktXb0RVMIrprc0GOqUB8DQnI9dXVHm4HG1Os8%2BrKgvq4cjI%2FFN1HTS7EUieQxZV6qEzeGtMcfyNAEeEhCMfQm4knoYb5ectz2%2BB%2F%2FvwGcvjeyI5dF5lUdCx5RrMtvRHAXIy2lCufj3mRh092zUelXqjCtumOkr6lTDkspWo8uzFKy3xsGn0TdD6sJnujtrPwXozgNjlRMI99BCryzizlZRh4n6Rgce0ATG32j5ih7l2c%2F14&X-Amz-Signature=134d679725bf208cf8e4038dc3b69464960adf7f2f37edc51e9ddacff53679fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGUAO5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDkvFUfCe49uKuS8%2B3FcwyFt%2B9sAwFZ4lqBRblW%2FOlEKgIgRPwnvjIa166%2BCWZ3ljacmtBXb1hD%2Bk4yzs2oPyNoB5AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxJb%2BDC9rgUgfYk7CrcA9%2Fu9bexwnheDKst2Y0kG%2Fw7YUb2IFvpNKAPB7VYOy02719Zkqd5Rr43fwNrrXEAWzIGBgDk32E%2BorwNpkIhwloT3ssm%2FEQwrlSVzWYlfrdwYjWd9uLImbU%2FZaZPdFZNiEsKIctxcejmn4zJV8SgxM2AsQl2arMHAmMxWHCzTYfVaeaZ6qHSoy%2FR9O40vvyKaVy%2BbBXguzcBih2NDLtdG6iW%2FqZL%2Becea73AmECJ3fnafa42Ek12AfY88BEVCWfjUc7BZhgkFkEbCY16tIpEe9rgoBjcKElYURa1eMXiermPAJktqUZM2wb4H7MBXLTjg7w0uJS%2FoNRw%2F2gvr7Pij95jgEmxGJfmSa9cS8LJ6viIiVuWdeJw%2FQgnspOhGcjRUugCKUg5RI9FNpo8sBwOqilycH%2Bf3xuDTmMPO4OJ0LePtdpYmjNElK2WWYa6KUodCYIHxbFYjO4wepzg%2FN%2Bso0JuTyvAs6ibxZcjhqF3cMyphQrTfe69FnKa3fZbgUlaZWzeFy%2BpgFQXu3m731lyjj1tkMFX2uxqf%2BVjGjHYbeG93xNrj7PWSNOnXQt1imKQu%2FrqZsIuDbpbzJZ4XzhUZXz2P393cwykjshsAoFsrT8R4VzlgZ%2BzhktXb0RVMIrprc0GOqUB8DQnI9dXVHm4HG1Os8%2BrKgvq4cjI%2FFN1HTS7EUieQxZV6qEzeGtMcfyNAEeEhCMfQm4knoYb5ectz2%2BB%2F%2FvwGcvjeyI5dF5lUdCx5RrMtvRHAXIy2lCufj3mRh092zUelXqjCtumOkr6lTDkspWo8uzFKy3xsGn0TdD6sJnujtrPwXozgNjlRMI99BCryzizlZRh4n6Rgce0ATG32j5ih7l2c%2F14&X-Amz-Signature=f56bc87fb0e251daf49866f64cb8cfaeb8c3193dcbbcf0067f0d938cbebc235c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIGUAO5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDkvFUfCe49uKuS8%2B3FcwyFt%2B9sAwFZ4lqBRblW%2FOlEKgIgRPwnvjIa166%2BCWZ3ljacmtBXb1hD%2Bk4yzs2oPyNoB5AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxJb%2BDC9rgUgfYk7CrcA9%2Fu9bexwnheDKst2Y0kG%2Fw7YUb2IFvpNKAPB7VYOy02719Zkqd5Rr43fwNrrXEAWzIGBgDk32E%2BorwNpkIhwloT3ssm%2FEQwrlSVzWYlfrdwYjWd9uLImbU%2FZaZPdFZNiEsKIctxcejmn4zJV8SgxM2AsQl2arMHAmMxWHCzTYfVaeaZ6qHSoy%2FR9O40vvyKaVy%2BbBXguzcBih2NDLtdG6iW%2FqZL%2Becea73AmECJ3fnafa42Ek12AfY88BEVCWfjUc7BZhgkFkEbCY16tIpEe9rgoBjcKElYURa1eMXiermPAJktqUZM2wb4H7MBXLTjg7w0uJS%2FoNRw%2F2gvr7Pij95jgEmxGJfmSa9cS8LJ6viIiVuWdeJw%2FQgnspOhGcjRUugCKUg5RI9FNpo8sBwOqilycH%2Bf3xuDTmMPO4OJ0LePtdpYmjNElK2WWYa6KUodCYIHxbFYjO4wepzg%2FN%2Bso0JuTyvAs6ibxZcjhqF3cMyphQrTfe69FnKa3fZbgUlaZWzeFy%2BpgFQXu3m731lyjj1tkMFX2uxqf%2BVjGjHYbeG93xNrj7PWSNOnXQt1imKQu%2FrqZsIuDbpbzJZ4XzhUZXz2P393cwykjshsAoFsrT8R4VzlgZ%2BzhktXb0RVMIrprc0GOqUB8DQnI9dXVHm4HG1Os8%2BrKgvq4cjI%2FFN1HTS7EUieQxZV6qEzeGtMcfyNAEeEhCMfQm4knoYb5ectz2%2BB%2F%2FvwGcvjeyI5dF5lUdCx5RrMtvRHAXIy2lCufj3mRh092zUelXqjCtumOkr6lTDkspWo8uzFKy3xsGn0TdD6sJnujtrPwXozgNjlRMI99BCryzizlZRh4n6Rgce0ATG32j5ih7l2c%2F14&X-Amz-Signature=8436f4df11373ce119d6406df1b48370537684a8d4bb47f0c3cc144627004bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
