---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECTDUK3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq5awt%2Fyb30iYtB38Kv6Bi2jrQGP%2BnXqxLU30h8dlv5QIhAM%2B%2B%2FNK0Vepnk2wkT%2FxHH8cMOpRElSqCo7MDTNlbxWstKv8DCCwQABoMNjM3NDIzMTgzODA1Igyy%2FkVavVLg0aMsumEq3AO9aW6UM6YNVt7JsOIWtj%2BCQAvsAvDAI2ElZxj5EpoKbybFzDbLltli%2BKaRAs3GQcTUz%2BLPIxcxPYjJQgG2nY2dv4x70EQk7Q3WmCt1XOWJIKpErnUXxeabLChYOlOTkl90TQXnJgsWSmpZjORB2%2FZgVt3AeyKc4za1MYjANGra1Xm%2BuL4pa26CWQZcUKBk67PrcIL2FoibhOJeAKacd5zLLzLoExHZgd15lVRCrYaItEpU7F6KXAcHwhjdUOowrtv9NIv0tZbCWUMqi%2FIBACOxTES7tYhLC5ndwtgrkPs6bu9SL07an6UNKfLq4TdEw3mhb2vCc60EP2pnAbU7N8b3EAQkQ1Ms%2Ben5IU80tUz9I8Xwb2bCsIJHLSGV%2FCDJXyobytFVViu51InufA5TaQ2mA5JGricOViJr3jtoba%2FCufMjvc6yiQNAf7lPUE6tSIrGEp4CCkt%2BV%2FPNNAhJ1%2BAPZj6ptb8E8w94MTKFcl4dqV8WEoNy%2FpbeysVpZZ62IhS3LGpzhyhlzYAar8UU1KfmfzhIvBtdhVlNxgvRJgBAO%2BGzqOLDTZ8ffv6qMywH3TMLRD6SLlj%2FlNy%2ByTMJbpUvixxDiqx8vGWzTtb0JfqIDk0wvpfEq0s94M6N6DCi6fHEBjqkAWVEDBxPUXBGYjCgKtZxe5XzEBF6anY7rGoCC0RKqYo9ZMx0yZvm0%2FLTnrCe%2F5S25uMZNilnQij0HgLRdj9b7OgswT8hvdXqZz6rJ14hLXLZ70dzG8BFHvkkdN61EIuFrOMqCSsUmFt2EF%2F9MT6JOJLwXYfmIEAe4hTeuxxLYd%2BYtQEaO21BUuCK61%2Fy6SWcVy12uVpi8jAPr0GoFL3zSRJ%2BUtlB&X-Amz-Signature=9fa46d9896090d3990bdeaf6781e0863c31960e6bf239aa9799d381a328ce1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
