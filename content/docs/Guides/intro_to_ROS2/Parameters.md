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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWGVKHAO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjZ%2Fr%2FAMyWDuyLYEdhzr5KbP6yt%2FT35quCg5MZz8VfgQIgT0I1noZyALQp4JsB3JAtv8yypu5CLiNMkRwsYp%2FSjQYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMKWgPw5rjCSE3NT0ircA2VzYxoLDbN2ph7LqWYkG%2FbHKGxMbOJ224vqv7J64%2FDmoI3W81CSAU02N2sYgHttpw%2F4QUh762uOxS6fEKSmaEAEkRMz0bVogk5Uy9rUFvazijZkkf6JrQLMhs6C9heB1ixYmsbPMIhfVFClXwcjfMzj2bn2ldQjoxqO2DCSRrzhyyeEW2LjovELxYJKN6oVDLSIIBULa%2B7OwOaVmgUhAQM56FCM7lbqVSdAGvgdtZHE8hoAQR8pZULKon67lloZTqhdMvYnlYBaWmkUMeO%2FWuEr4zDZraXrCBZl%2BH9zlmjoKyVS3weO2jSmYzjxj2RJh3Pg%2FaD3WlX8z0T2hkWtOCDAxDoR7Nj0tVGtFWI0ERSEKnfPe%2B142uXW%2Ft%2B4REE9dSV6MbNMsqez4qaXW7sMyRsE5kxeNQLSynrQSzrEaL1cXVp6RJ9B0HMHHCBkixs5kdu%2FcIrYiluchEmg10450P7UomCcb5AYsGRAWEqubvNs9t0IuPPTAiH%2BygA1lkvJ1wwp3%2BlBY3ckEdKsgz8EJw7ay%2F4qgkNuAc%2FmRxadfmOx%2B42CDRgjBZW%2BMFajqZ1imc3KQeXX2iUy1b8DAnDDrLD2L39tTfM6HB3ojpPr3kP2OGzByP8xpZGCh8r3MO2qq8AGOqUBlytDDW5eZoqkQ%2Bfh7ezHKY4vAkwY4N6tGqgzy8xd32RowSylWv0EY8N3sWS3GXIINi75K4m9d%2FZpEPvIJ%2FPfMtn4I6zNWgg%2BgqR6Ibw%2BpXOhiiyB%2Ft2AhAqj2qay%2FQQeVgLxNC%2FY%2BEcR9MathCak4q6NXlZziLmguUTj6163bISDFLz7Pktnq22vOxwVIj28HhITsuPA5a7d%2BSOGIjPMjTGJM8hj&X-Amz-Signature=f4227f9cafa253f68cd056bdb8e4bf87329e0de2dc776eb9bb0540745a00a40c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
