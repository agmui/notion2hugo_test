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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SGZHO2X%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDE%2F%2Fs5e2kfKXgIzf9gSd%2BKJ5njbj2BbQRDYgOucxQkgIhAMszhj3H29hmml5VLzmV8HEofx3kbEIf%2BTuaCu7XgOz9Kv8DCCYQABoMNjM3NDIzMTgzODA1IgwrZLT3k%2Fj%2FWdkezNgq3AOkhfUepb%2BwygXbkOyWQ1EGZ6GrChhRAq%2FeXlR3vRj65XtH0nXRezGHvYip1TAnHNj7gEws6i0sbnfPCPQxjdbJ1TEaf2YIXZ9%2BnWcbuXpQdjgBwU95NCyK2B%2B6OedDmctl4o5oaIPAr8A7zLaLcceUSPpNCm0K5uMD8jhZVBeixf9mb%2F9BEi6PQseQGhUxR%2BnUxUWS34rTMgCC9JGGJWH9XItw8EmUal4VPGi5cRmUMSJ19PIUV1kWfAjd3saFpDU%2BjPeAjDEnYSpoKaod6RjNOgGJFcCUeKHoxpqX19tUlPlS3toScL5Ktg%2Fyyj6Vr3g6qwFlDDmqxdy2H6YhuOeIh0VlxvVki2V%2FjFP4B9f3GS5T%2BAVE7LbaJo3NpZHsgfwU752b%2F7FZTIKmCnirYhvXl6MFpPBVIYr5PcH9%2FmNO%2FHxxDZJeYqEsfHO9yPGyOEBrvTFJLg8%2BLAsOb8uNtGfTLnX5gpeXbCXUyH401wvaJmxMG5J5%2FqLvvj7EcQ08k7tzyCBIPlLnIsRDcRUStoXYk5HcrxDmEA6ubfrx2rl3SxTnwsZ9Rc0sO1USJVkNXgZzX6wEfwe9fARPhe4M3Wb%2FnIE9wonoB7ebHNN04Dhq5GhgQ91xwUDxGEaiIzC72KS%2BBjqkAXwYmam%2B8zAJNmMMi0m4irm6sZu93DRLX5YO%2FmviuJKUcOA6lRdW2wNqDTHhqY4wpAM71Jez0%2Fjtbz6vmxkEkjSDTNy7FeRAuvF%2B52pYs5n93WxVTHmJtf2KuHlJvKMtgW9REN6e1CnacGXGJHblDwVbFVtwXryylq6pALVe1eZiuAAPBTtwhX%2FBYVsRlxWJ7n%2BV1pT54%2Fdmh%2FqH4Yl85KHarEX%2F&X-Amz-Signature=3442d2caa53215f7944ce6720eab24ae03f7c4a175d139e9c088662472661db5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
