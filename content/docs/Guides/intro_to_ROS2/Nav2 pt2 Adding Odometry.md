---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=34c6c2e4bcb284cef9697284102182b9788db18aaad973834b524b58c569f529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=3178854c772f27c0031094104ad73a8289e52724ed75c660d4a832e983978401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=362be6c2de11c4256396df7070cc26f9d9c13fb6c07d41363f24f2c38e9c1b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=8681dc19dbfc8965b679faef5b0ae855ca9e9c0faadf30efdd9edd41ee824f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=143ffcaddfab66b06f357480a9907a74c84f7994702b5a922ba85320a2b91960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=8d7d2134aa2fd6dd938771952b918e3fed82790eaddb00deb226f772254c3ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=955945ac9ce44e421546cd4e46f00afc9afca3a31e679ea2e0963bd8e3910b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=2a37cea2a502d9a71eb711375ce4ee9bb56f63a6e3f69b3aced702fc7297a7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=038696974f21f1c0b19cbf00f9a31a42929cbca0d6c5f9ca11453588f07a30f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=6b11e52305fe5f3fa442ae834a3e316e711784e6021235f1ce480fd129a79abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQ7ATPD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcfS%2FszLetnbYO7rP7SiweNjLe9tJNuihw7J7jrWy87wIgbBIFhadwkTDpHQiXa6ORpvRGO%2FWLu2bmzFBKjY0k5uoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNtRym4wmS50WE8w2CrcA0c5A3MsrRkgkF%2Fe3d4U7woCQk28ZXBN9aMQxbRQgRv10T%2BCEQLCdgHgvNZVFXRfcAIegNf%2B%2BGlZ1vcxgbAd1V9decJTUPGKqBFoCMSecbV%2BuEWsroCrcMtZYGxVvC%2BC3bYJsI3dp8%2BjM%2FnSN1OvOTqdSnf3b76DiOYme%2BU13xLKGkdj49yyi3Q0wkVNh8%2Bu533sRmR2z1SXYV5ZBnoiYoyIb9gw1APfPx9ywZ6b9%2FUWaA4oqzDT%2B8OepIczGH6Aqszuh85cZc8Li534u6JwQ4CqepUcgK9Muqs8kTFSBNxAYI3Zsyo%2Fd80PXe4JnLFEKE4jOmC4qzB6q%2Bx1BzwOAH3j38MZ7K2AMYAMVbAG9hsYzkMZ6rZeXc5xQUddNQBqNnq8xXj6%2B%2BY0zDPnBeKkegKAFOeMOPRCdMXwnQrM9yZLvbiT0g8X0mLX%2B9xtBnjUacRQBQHhU3951oDBeGQRuZaqReL9eiQIx74ei0M5pm5gMaod5PBzhbW2Ds%2FhvtmVs%2Fxp71bzM6rrKR3MZuf4NcHhcrQQarqbdcTMVXi2oBIs2kXdDpDvawnWrYMj5hejG0g646zp3zlRfRvjA88fEJkhxh1HN5yyMRUR1yL1hawDa5CVcZw%2FArKx1XgiMP6qvsQGOqUBWO6QF38kQ7YH3JZceZCEMl%2BzI5vmdW00I9Xz4BIPeHBLoeZD5XC3LlJK9YdzepkTo7WaEGJeytVd1%2BljFZN8ImpuowdmQhWUjaMF4GeqDgQ7wwB%2BMSNRu5gszO7g0CfE4qQnaIUSak9Y%2FaogCug1xxHwJ4s46EAp7Uddqg9YoAhvr6lt%2BCdbjwE3GhsHOE3phZl7E69uqDKz9otb5C6KU%2BNkP64F&X-Amz-Signature=77c4b8a9af53fd038af0fbaea38f3e8d5fcff1cbde0ccc9743d755c8164471f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFPU6PU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSzwi6%2BihXEwOzOVo%2FjAvhmgpapCSBg2ifTs8Lj%2BakdAiEAzYAihylR5zb5fXx7L%2Ffc9bPsXwVVnQcJyV0YKl7iQ1Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLebNWiHXu3mh5YmBircA6rgXqyW8c11SnlBJjEOQv0qoKAuBnDnRTlDMohLSxZjNJK9x5wS4GRprAveYkeurVg1VMycLa1baZsf4WdJwge%2FlET5%2FpmF2n89SilOdesLCODF0j8WpUN1I6aLwnfHnCqkn7Wd9bnogBnQHuqSC0ug0h5TZORrIyawsWWF%2BBVPeFfO8J3BUWx82U2s%2Fga4suKfjPqhFFWalNax4wGd%2BJsTxvJI4WRISw2XRcO9FFtrfk4EhR%2FaKtZIckNLd1If%2BmErOSiT%2BvjKfeer0%2FaaLQ%2F%2BH1o8ESQQ6PTVaxk7Lgl6h2xrQaYWImfHIni9AKZUwykbativ7ZmU0S5hRpDT3zdaIagFzEjUXoXx4J85eF7Ta7PWnvFfkBgj5PsoFe7sYJtHFSB%2FcitYJXXatlenHEoY0gEb3DKnOfAgm1MTtAlfA05%2BL8wpL90RfSjVzhCflXO7F4Jk%2FuIaJD7mXCQImbZ5ncjvJoC9VybN8dcmZyc6QLDjHvWgfA9ZeWoIe85S7%2Fyw%2Fw0GFnmdN5sCleJfBL8EXacCxc0H5n0Qu0wHpc%2FJeO5wD1xZstUbZWkDVJnzljNuWLJvh0DdIhzRk52DX%2FtIM3R5PLtLt2VSpWjXStPczobwijZhkTqauAT5MP2qvsQGOqUBKQ8tpu921dXwZgJc21gA0PQFNgXZZAB%2Bw86oisg6jmieZjhob2fA5k8xv3b1rwky7BVt6RdZu6m3nH1foitBKfYu3P170Y6YOvSC%2FNICIGZY8by%2FKXNnioNAmTsVKF4%2BaIonj74Bjq7bdHf2gfM0eOWXaQCQ%2FhOAsNWbQ3HpdHj6qZzBVmek5rcIIKKegHjTp%2BNaLjD9qC%2B%2F5AtK11YzaHxn34Z2&X-Amz-Signature=56344d68d2c559850a6058e6694078cafd01c13d154af6f546f8103fa425828c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJG2TQBR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FWps7RReYS%2Fs%2FAVhk7fSy7PZSA6UwPTuc3yV4gFaCAAIgIkCVfeO2M0NOPiFxu1mItIzpSQTwqTLcTxsQGbGOMUcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCE05cC5VLH4TLHeayrcA3uPzgEFXFRdexYdbp1qSt%2Fh3WxpPtMebWTsc7P3tlRIFJb6YrdT6Vl9lMrf7GzYBN7PRZju1HfG%2BVbYpQPrpD9J2BLYfLBXSSoEjHR%2FaYkaBljkZaSU0tOBEVmDMHGSLwo6gcTSzoQrWWN0Ax4UsrfbnJ54Z2%2F4vPNst78Zlx3wNz%2Fv47D7632D%2FWP00oUdyovrxoMnFaUTcwjsj55DthWbW4DqmUe3cJD2LbVWHLC1pynIqtG4DADA7fcMoChpeRaANDb3pjaK3d8t5%2Fq2IXOTFVC2fiNOH%2F6oPoNzqbDEb5ZpKRfisVwaM6h5cmJth6%2F%2FEpYtbZSmZ2OjrZGXWg3wopdts%2FaLNyXdQTu19dJ41ufW%2BuljLAl%2BRRSHA51Lb8Q%2FvUx3501PC63YPmfoAwHrzq%2BnHqyD9LvqwcpWnWoPwmlOTanJWJEm2kXKExHFSNQHHhtyVxJ4wWLb3%2FdZuXKpbUt0Y29kkm%2BB3jxn43YO%2FNyAmmOcEW2FPDXcHgWx5Y9Os2zJEbltHUzy7XtG2L42hBb4yOWtRKlgC6PXnA0W3b4tv29jVbfubqayFhcoenqGfgqNaGS7%2BtkvUXEIFoCAinQLT1wtN9ZouQBj5NQ9UourVhN7RNSE6yNOMMervsQGOqUBO2pBys8beV084WjXKjOT%2BJgwWqQ0IMmIcn35uaklvG20xgPM1qx4tedK5n3cElg2KbqSAokQJ%2FL5E66oqa%2Fjrm9FlLyuvyIIjurdvqaWDZ3cR2rQQNO6y%2Bc8eVyumCwg64WOgGO9scmf823uC4CyeMN5t879bZD0PJPRWlB%2FIn%2B22c8sf62EwosESk%2F9lV8%2BaQUuFwLyHJ82MuANitLhWxhTzF3h&X-Amz-Signature=b56250915538a8fc6f336d4afc54c5fb11978db097a09c9b4f3414231d539b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJG2TQBR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FWps7RReYS%2Fs%2FAVhk7fSy7PZSA6UwPTuc3yV4gFaCAAIgIkCVfeO2M0NOPiFxu1mItIzpSQTwqTLcTxsQGbGOMUcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCE05cC5VLH4TLHeayrcA3uPzgEFXFRdexYdbp1qSt%2Fh3WxpPtMebWTsc7P3tlRIFJb6YrdT6Vl9lMrf7GzYBN7PRZju1HfG%2BVbYpQPrpD9J2BLYfLBXSSoEjHR%2FaYkaBljkZaSU0tOBEVmDMHGSLwo6gcTSzoQrWWN0Ax4UsrfbnJ54Z2%2F4vPNst78Zlx3wNz%2Fv47D7632D%2FWP00oUdyovrxoMnFaUTcwjsj55DthWbW4DqmUe3cJD2LbVWHLC1pynIqtG4DADA7fcMoChpeRaANDb3pjaK3d8t5%2Fq2IXOTFVC2fiNOH%2F6oPoNzqbDEb5ZpKRfisVwaM6h5cmJth6%2F%2FEpYtbZSmZ2OjrZGXWg3wopdts%2FaLNyXdQTu19dJ41ufW%2BuljLAl%2BRRSHA51Lb8Q%2FvUx3501PC63YPmfoAwHrzq%2BnHqyD9LvqwcpWnWoPwmlOTanJWJEm2kXKExHFSNQHHhtyVxJ4wWLb3%2FdZuXKpbUt0Y29kkm%2BB3jxn43YO%2FNyAmmOcEW2FPDXcHgWx5Y9Os2zJEbltHUzy7XtG2L42hBb4yOWtRKlgC6PXnA0W3b4tv29jVbfubqayFhcoenqGfgqNaGS7%2BtkvUXEIFoCAinQLT1wtN9ZouQBj5NQ9UourVhN7RNSE6yNOMMervsQGOqUBO2pBys8beV084WjXKjOT%2BJgwWqQ0IMmIcn35uaklvG20xgPM1qx4tedK5n3cElg2KbqSAokQJ%2FL5E66oqa%2Fjrm9FlLyuvyIIjurdvqaWDZ3cR2rQQNO6y%2Bc8eVyumCwg64WOgGO9scmf823uC4CyeMN5t879bZD0PJPRWlB%2FIn%2B22c8sf62EwosESk%2F9lV8%2BaQUuFwLyHJ82MuANitLhWxhTzF3h&X-Amz-Signature=b3ac9873759f8c481399f400d5465f631a80c575b96e274a429243c77d29daaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJG2TQBR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FWps7RReYS%2Fs%2FAVhk7fSy7PZSA6UwPTuc3yV4gFaCAAIgIkCVfeO2M0NOPiFxu1mItIzpSQTwqTLcTxsQGbGOMUcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCE05cC5VLH4TLHeayrcA3uPzgEFXFRdexYdbp1qSt%2Fh3WxpPtMebWTsc7P3tlRIFJb6YrdT6Vl9lMrf7GzYBN7PRZju1HfG%2BVbYpQPrpD9J2BLYfLBXSSoEjHR%2FaYkaBljkZaSU0tOBEVmDMHGSLwo6gcTSzoQrWWN0Ax4UsrfbnJ54Z2%2F4vPNst78Zlx3wNz%2Fv47D7632D%2FWP00oUdyovrxoMnFaUTcwjsj55DthWbW4DqmUe3cJD2LbVWHLC1pynIqtG4DADA7fcMoChpeRaANDb3pjaK3d8t5%2Fq2IXOTFVC2fiNOH%2F6oPoNzqbDEb5ZpKRfisVwaM6h5cmJth6%2F%2FEpYtbZSmZ2OjrZGXWg3wopdts%2FaLNyXdQTu19dJ41ufW%2BuljLAl%2BRRSHA51Lb8Q%2FvUx3501PC63YPmfoAwHrzq%2BnHqyD9LvqwcpWnWoPwmlOTanJWJEm2kXKExHFSNQHHhtyVxJ4wWLb3%2FdZuXKpbUt0Y29kkm%2BB3jxn43YO%2FNyAmmOcEW2FPDXcHgWx5Y9Os2zJEbltHUzy7XtG2L42hBb4yOWtRKlgC6PXnA0W3b4tv29jVbfubqayFhcoenqGfgqNaGS7%2BtkvUXEIFoCAinQLT1wtN9ZouQBj5NQ9UourVhN7RNSE6yNOMMervsQGOqUBO2pBys8beV084WjXKjOT%2BJgwWqQ0IMmIcn35uaklvG20xgPM1qx4tedK5n3cElg2KbqSAokQJ%2FL5E66oqa%2Fjrm9FlLyuvyIIjurdvqaWDZ3cR2rQQNO6y%2Bc8eVyumCwg64WOgGO9scmf823uC4CyeMN5t879bZD0PJPRWlB%2FIn%2B22c8sf62EwosESk%2F9lV8%2BaQUuFwLyHJ82MuANitLhWxhTzF3h&X-Amz-Signature=c7c5238de96eae7900364789105ce8fcc5f1541cffcba3624b5aab9206aeb6bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJG2TQBR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FWps7RReYS%2Fs%2FAVhk7fSy7PZSA6UwPTuc3yV4gFaCAAIgIkCVfeO2M0NOPiFxu1mItIzpSQTwqTLcTxsQGbGOMUcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCE05cC5VLH4TLHeayrcA3uPzgEFXFRdexYdbp1qSt%2Fh3WxpPtMebWTsc7P3tlRIFJb6YrdT6Vl9lMrf7GzYBN7PRZju1HfG%2BVbYpQPrpD9J2BLYfLBXSSoEjHR%2FaYkaBljkZaSU0tOBEVmDMHGSLwo6gcTSzoQrWWN0Ax4UsrfbnJ54Z2%2F4vPNst78Zlx3wNz%2Fv47D7632D%2FWP00oUdyovrxoMnFaUTcwjsj55DthWbW4DqmUe3cJD2LbVWHLC1pynIqtG4DADA7fcMoChpeRaANDb3pjaK3d8t5%2Fq2IXOTFVC2fiNOH%2F6oPoNzqbDEb5ZpKRfisVwaM6h5cmJth6%2F%2FEpYtbZSmZ2OjrZGXWg3wopdts%2FaLNyXdQTu19dJ41ufW%2BuljLAl%2BRRSHA51Lb8Q%2FvUx3501PC63YPmfoAwHrzq%2BnHqyD9LvqwcpWnWoPwmlOTanJWJEm2kXKExHFSNQHHhtyVxJ4wWLb3%2FdZuXKpbUt0Y29kkm%2BB3jxn43YO%2FNyAmmOcEW2FPDXcHgWx5Y9Os2zJEbltHUzy7XtG2L42hBb4yOWtRKlgC6PXnA0W3b4tv29jVbfubqayFhcoenqGfgqNaGS7%2BtkvUXEIFoCAinQLT1wtN9ZouQBj5NQ9UourVhN7RNSE6yNOMMervsQGOqUBO2pBys8beV084WjXKjOT%2BJgwWqQ0IMmIcn35uaklvG20xgPM1qx4tedK5n3cElg2KbqSAokQJ%2FL5E66oqa%2Fjrm9FlLyuvyIIjurdvqaWDZ3cR2rQQNO6y%2Bc8eVyumCwg64WOgGO9scmf823uC4CyeMN5t879bZD0PJPRWlB%2FIn%2B22c8sf62EwosESk%2F9lV8%2BaQUuFwLyHJ82MuANitLhWxhTzF3h&X-Amz-Signature=aa7f1dd842ac6993ac2f8058db2ef454849282fa30d81bb45105690489e77367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJG2TQBR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FWps7RReYS%2Fs%2FAVhk7fSy7PZSA6UwPTuc3yV4gFaCAAIgIkCVfeO2M0NOPiFxu1mItIzpSQTwqTLcTxsQGbGOMUcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCE05cC5VLH4TLHeayrcA3uPzgEFXFRdexYdbp1qSt%2Fh3WxpPtMebWTsc7P3tlRIFJb6YrdT6Vl9lMrf7GzYBN7PRZju1HfG%2BVbYpQPrpD9J2BLYfLBXSSoEjHR%2FaYkaBljkZaSU0tOBEVmDMHGSLwo6gcTSzoQrWWN0Ax4UsrfbnJ54Z2%2F4vPNst78Zlx3wNz%2Fv47D7632D%2FWP00oUdyovrxoMnFaUTcwjsj55DthWbW4DqmUe3cJD2LbVWHLC1pynIqtG4DADA7fcMoChpeRaANDb3pjaK3d8t5%2Fq2IXOTFVC2fiNOH%2F6oPoNzqbDEb5ZpKRfisVwaM6h5cmJth6%2F%2FEpYtbZSmZ2OjrZGXWg3wopdts%2FaLNyXdQTu19dJ41ufW%2BuljLAl%2BRRSHA51Lb8Q%2FvUx3501PC63YPmfoAwHrzq%2BnHqyD9LvqwcpWnWoPwmlOTanJWJEm2kXKExHFSNQHHhtyVxJ4wWLb3%2FdZuXKpbUt0Y29kkm%2BB3jxn43YO%2FNyAmmOcEW2FPDXcHgWx5Y9Os2zJEbltHUzy7XtG2L42hBb4yOWtRKlgC6PXnA0W3b4tv29jVbfubqayFhcoenqGfgqNaGS7%2BtkvUXEIFoCAinQLT1wtN9ZouQBj5NQ9UourVhN7RNSE6yNOMMervsQGOqUBO2pBys8beV084WjXKjOT%2BJgwWqQ0IMmIcn35uaklvG20xgPM1qx4tedK5n3cElg2KbqSAokQJ%2FL5E66oqa%2Fjrm9FlLyuvyIIjurdvqaWDZ3cR2rQQNO6y%2Bc8eVyumCwg64WOgGO9scmf823uC4CyeMN5t879bZD0PJPRWlB%2FIn%2B22c8sf62EwosESk%2F9lV8%2BaQUuFwLyHJ82MuANitLhWxhTzF3h&X-Amz-Signature=694c33390935c9d5990be21d6015c22132a08e4e729f88253884490de590b54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJG2TQBR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FWps7RReYS%2Fs%2FAVhk7fSy7PZSA6UwPTuc3yV4gFaCAAIgIkCVfeO2M0NOPiFxu1mItIzpSQTwqTLcTxsQGbGOMUcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCE05cC5VLH4TLHeayrcA3uPzgEFXFRdexYdbp1qSt%2Fh3WxpPtMebWTsc7P3tlRIFJb6YrdT6Vl9lMrf7GzYBN7PRZju1HfG%2BVbYpQPrpD9J2BLYfLBXSSoEjHR%2FaYkaBljkZaSU0tOBEVmDMHGSLwo6gcTSzoQrWWN0Ax4UsrfbnJ54Z2%2F4vPNst78Zlx3wNz%2Fv47D7632D%2FWP00oUdyovrxoMnFaUTcwjsj55DthWbW4DqmUe3cJD2LbVWHLC1pynIqtG4DADA7fcMoChpeRaANDb3pjaK3d8t5%2Fq2IXOTFVC2fiNOH%2F6oPoNzqbDEb5ZpKRfisVwaM6h5cmJth6%2F%2FEpYtbZSmZ2OjrZGXWg3wopdts%2FaLNyXdQTu19dJ41ufW%2BuljLAl%2BRRSHA51Lb8Q%2FvUx3501PC63YPmfoAwHrzq%2BnHqyD9LvqwcpWnWoPwmlOTanJWJEm2kXKExHFSNQHHhtyVxJ4wWLb3%2FdZuXKpbUt0Y29kkm%2BB3jxn43YO%2FNyAmmOcEW2FPDXcHgWx5Y9Os2zJEbltHUzy7XtG2L42hBb4yOWtRKlgC6PXnA0W3b4tv29jVbfubqayFhcoenqGfgqNaGS7%2BtkvUXEIFoCAinQLT1wtN9ZouQBj5NQ9UourVhN7RNSE6yNOMMervsQGOqUBO2pBys8beV084WjXKjOT%2BJgwWqQ0IMmIcn35uaklvG20xgPM1qx4tedK5n3cElg2KbqSAokQJ%2FL5E66oqa%2Fjrm9FlLyuvyIIjurdvqaWDZ3cR2rQQNO6y%2Bc8eVyumCwg64WOgGO9scmf823uC4CyeMN5t879bZD0PJPRWlB%2FIn%2B22c8sf62EwosESk%2F9lV8%2BaQUuFwLyHJ82MuANitLhWxhTzF3h&X-Amz-Signature=7c90a4d476d3a7ddf8edc4f06b4c71c56cea6a5144cb63e100280c1ef9a236c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJG2TQBR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FWps7RReYS%2Fs%2FAVhk7fSy7PZSA6UwPTuc3yV4gFaCAAIgIkCVfeO2M0NOPiFxu1mItIzpSQTwqTLcTxsQGbGOMUcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCE05cC5VLH4TLHeayrcA3uPzgEFXFRdexYdbp1qSt%2Fh3WxpPtMebWTsc7P3tlRIFJb6YrdT6Vl9lMrf7GzYBN7PRZju1HfG%2BVbYpQPrpD9J2BLYfLBXSSoEjHR%2FaYkaBljkZaSU0tOBEVmDMHGSLwo6gcTSzoQrWWN0Ax4UsrfbnJ54Z2%2F4vPNst78Zlx3wNz%2Fv47D7632D%2FWP00oUdyovrxoMnFaUTcwjsj55DthWbW4DqmUe3cJD2LbVWHLC1pynIqtG4DADA7fcMoChpeRaANDb3pjaK3d8t5%2Fq2IXOTFVC2fiNOH%2F6oPoNzqbDEb5ZpKRfisVwaM6h5cmJth6%2F%2FEpYtbZSmZ2OjrZGXWg3wopdts%2FaLNyXdQTu19dJ41ufW%2BuljLAl%2BRRSHA51Lb8Q%2FvUx3501PC63YPmfoAwHrzq%2BnHqyD9LvqwcpWnWoPwmlOTanJWJEm2kXKExHFSNQHHhtyVxJ4wWLb3%2FdZuXKpbUt0Y29kkm%2BB3jxn43YO%2FNyAmmOcEW2FPDXcHgWx5Y9Os2zJEbltHUzy7XtG2L42hBb4yOWtRKlgC6PXnA0W3b4tv29jVbfubqayFhcoenqGfgqNaGS7%2BtkvUXEIFoCAinQLT1wtN9ZouQBj5NQ9UourVhN7RNSE6yNOMMervsQGOqUBO2pBys8beV084WjXKjOT%2BJgwWqQ0IMmIcn35uaklvG20xgPM1qx4tedK5n3cElg2KbqSAokQJ%2FL5E66oqa%2Fjrm9FlLyuvyIIjurdvqaWDZ3cR2rQQNO6y%2Bc8eVyumCwg64WOgGO9scmf823uC4CyeMN5t879bZD0PJPRWlB%2FIn%2B22c8sf62EwosESk%2F9lV8%2BaQUuFwLyHJ82MuANitLhWxhTzF3h&X-Amz-Signature=855af1fdf0fc0561b0873e5dfaee6915c3ef7f9ee9fc1651bee6e92ce317b214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJG2TQBR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FWps7RReYS%2Fs%2FAVhk7fSy7PZSA6UwPTuc3yV4gFaCAAIgIkCVfeO2M0NOPiFxu1mItIzpSQTwqTLcTxsQGbGOMUcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCE05cC5VLH4TLHeayrcA3uPzgEFXFRdexYdbp1qSt%2Fh3WxpPtMebWTsc7P3tlRIFJb6YrdT6Vl9lMrf7GzYBN7PRZju1HfG%2BVbYpQPrpD9J2BLYfLBXSSoEjHR%2FaYkaBljkZaSU0tOBEVmDMHGSLwo6gcTSzoQrWWN0Ax4UsrfbnJ54Z2%2F4vPNst78Zlx3wNz%2Fv47D7632D%2FWP00oUdyovrxoMnFaUTcwjsj55DthWbW4DqmUe3cJD2LbVWHLC1pynIqtG4DADA7fcMoChpeRaANDb3pjaK3d8t5%2Fq2IXOTFVC2fiNOH%2F6oPoNzqbDEb5ZpKRfisVwaM6h5cmJth6%2F%2FEpYtbZSmZ2OjrZGXWg3wopdts%2FaLNyXdQTu19dJ41ufW%2BuljLAl%2BRRSHA51Lb8Q%2FvUx3501PC63YPmfoAwHrzq%2BnHqyD9LvqwcpWnWoPwmlOTanJWJEm2kXKExHFSNQHHhtyVxJ4wWLb3%2FdZuXKpbUt0Y29kkm%2BB3jxn43YO%2FNyAmmOcEW2FPDXcHgWx5Y9Os2zJEbltHUzy7XtG2L42hBb4yOWtRKlgC6PXnA0W3b4tv29jVbfubqayFhcoenqGfgqNaGS7%2BtkvUXEIFoCAinQLT1wtN9ZouQBj5NQ9UourVhN7RNSE6yNOMMervsQGOqUBO2pBys8beV084WjXKjOT%2BJgwWqQ0IMmIcn35uaklvG20xgPM1qx4tedK5n3cElg2KbqSAokQJ%2FL5E66oqa%2Fjrm9FlLyuvyIIjurdvqaWDZ3cR2rQQNO6y%2Bc8eVyumCwg64WOgGO9scmf823uC4CyeMN5t879bZD0PJPRWlB%2FIn%2B22c8sf62EwosESk%2F9lV8%2BaQUuFwLyHJ82MuANitLhWxhTzF3h&X-Amz-Signature=002903b20d84490b04b781b950339d2d3ddb211ec070389836378074c1b4a791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
