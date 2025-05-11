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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XBADSUH%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICGe4cSZaKcfqPVDyY7UIwDEbUfAButRUStX9Y0eDro5AiB%2BX3ATvCms1IPbhYlibgJNIz%2BgKKd8mwBj5Z%2BnldkiDiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvRcfbBUnPH8k5brKtwDmRXFwZkHN2i9dvn%2F4vmOxWqbVJCeRMbOHsSLg%2FaxPJei5CK9rvQbfeMbjmmNIPd9CswBTmO5eezpijV11grxDNqiZUtNsWRNFHyNFzx6x5scXSgGGQZTLVhDTGDa5tkHSZ4mt5CuOmmAyPxtfhlA%2BsxjT2%2FLnIOFfW7G3e%2FEBG30sdMKU%2B0JKKIrOZShTKAuvsRXh0BkmYXAXL7%2BAvBDSEAS5TO09KPYP7oVkB1nPPDFKgYU%2BCI2Ui8XiCSTlUBf9vNyYyODOVPsC63aZ18ApBicEdoT%2B%2FDkFZbcY4edQaGWVZetUDJyasULqukHI0%2FAPieqhYByEGt6pj6AeeooErwv7nE0tNBzzW93p7FHEQ5wf1Jm9TBKtBhrIC6gaiVWUL5%2BQ%2Bl4Q%2FAXZcP7DwClUs8mD0nYQORzN8Nioxi%2FQrB%2FuM1jlo74Hevh33fGpJNGQ%2FfRpI3IG8GLBzufhS5DJPfHaZADtLG3E6cX7JXLCC4vvmVRX%2BFhyhGGTw32oeLnxiP1Z1quWolBvWtnrfepI4lbrK%2FnldA97NFJ3JVlmUC7ypyfS9BujXNk5TFv%2FCk5tlnQM60S2mEDwaPmaJYdv1gbX56Dr3bmlz%2BOQ40en1VJnSImn6tCWmtXg2AwoJ6AwQY6pgH1Z8e7q5DpQalboIza5NbeVfTXZ3zWhvv%2Bb5YkpggQyFVc8jg%2FgI%2BoVwZ5PUbwh36XgQDaPYz%2BCDjijD06fkbxZi1Dgcgxbrss5La22XzbMfGCLv7yerVvgPcaQ%2Bygpths7Z2uv9QXlTE%2BhK3RzrCwD5bBmtorqiTKiF3L9mZhYFvWlEbUYW6lToC%2FO7O8S5ErNqGc6eB5oUijq4ul70IfrezPr0hq&X-Amz-Signature=480c0753692317a4ef5f580c208769c42a50a8084dfe04a62fd1c2a2827bd6ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
