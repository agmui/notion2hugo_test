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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZK36HLK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCOhSp3UGk6rsoAueqysou%2B%2F5ojVqKpsgnn9X77JtLTTAIgWCAR2RsKu0KNU0%2BVjwmxt70lpm5P7%2FrwgJqjl2JmXqMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDA51eKpNcm7G8cFo2ircA8sozkXpQwkXtAckADcUfxEcbCgYZdBDXpqiADx5xdeBmkyC6Vc6615ZoTLKoeDkScpt7EcA0ULW8q5yQyJ2MYGj5WMnJNq5E9VoDCmwjjeIYZBhn0ZaPpy7oRh7xBNEplA74ANTRpfLNZjrAM5KWPqtnJPUKrxtSmwqePY2v%2BTCtbxpKbvdPZ%2F%2FdCPqmuiM%2FCilxQg8XrG2GIt58Gh0ahkUmPSSPAwjQXid%2FRg7pB8vKOVvuG6ZYAm7RApAQW8MeFC5Q3p6F7JQ0PZYbai8aHlsEaDp%2BxULbZhR5MDEjvvvORIgGasymwc7R16armMYjZUADe0zF8VtMV1YbLrLLA49Ou0%2Fscj8zblUQdkQB2jTBjjX02UTj7OV2KRn55dTNOvDGTHELykDQZTDq6QE412E9sU%2FWRxRWKZ6KIIIKnkxvK1NP1EFmCPzWdblhpaLf9E4uOR8%2FJkeNE%2FtVojICeplodSh%2FBcTUobSz37sGS9BYGKVfSquI7rr5GOFdLVT4PfrdEdDGW5zGcPyY5FwbuGhPeExcMODthLJC1bR4uuma8sFRq%2BfzyEFB9fXBSFa8WK%2BVrflbBVpgFShVPSShUf1UUH7CxS7XI19MjcW1%2BtNXCmyPkZhUq9Hir2yMMeNvsIGOqUB7zszL6FtJ5n3R2Yr0qO7l7WvTgoLJztd4knsfC8BFVppLJLORuVL2uKwH%2BaT%2F98U4gZkLygz7tnPxeNBueLmSq8vo39YKB1pBnZgrx1peD8cWtjSjpklrImAG7xa6RwKxOXyKKpRzvuQ54dlPYwUiZgjzBG6K2lgDwHYIvTJYIzwayOj%2FxCGhDkhmnGwKrBbrjV7tORLufn81WjFxOcC6MGCjmlN&X-Amz-Signature=2e14bd0f4af2b175b5c93e4573a6b92f35d0e52c9feb829ab3c288f61d019b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
