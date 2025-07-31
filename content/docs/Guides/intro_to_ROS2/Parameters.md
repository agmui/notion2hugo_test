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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZ53V2C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIXTs3VbHCcloSUkEZsm2vcp0ZwGVZdR6WxzJPf5eZQAiAdfv4ePetETvUPXMPx1AUurYCgHk9tw%2F3XcIhzkkksDCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNPJsVW%2FDdcwAXS79KtwDfXZHgiYvzhCGqGZ%2BiqS%2F8jqMHvFWX3HIqmoAyCJ7XDvnXDH0vL2SxQiryYRZAnX8EVXHItV3jLEsp%2Bdblib80mBYaGMmekf2bm36xYuwfo9ejr1tgLNX%2BOwY9hdhN7%2BDINwk%2Bm%2FnJ7qB0UUy9RfUjV0TZFUwt3M9WDfRc8YAgNKiw4BnYyaD4%2BDPK7y9UBb1%2FoOJYRSB6hBbkJEwPXhQp9V8ia4VUsEhHQOORSKcO3D04XyKP5nBNTucNDhzrhhWSAdDmW1Kg%2B2xWLa8tNkx3Oly5jWoNXvlm5GdDzzHibpbP1ZzN4loreDzlBPejh3NYxVQZcWykKJLrS%2FSSYiADwRHV6v6eSOrEtWLL2BD%2FAJrj1DsVZ1sFsaoSY5DmnX5cnsM5N1eddA%2FLAXmaaYOQPPy2Gm32yKZzWKFFlkQnWQQerLC7057nhaTW56UO0r0thk0XhJ4VUWIs5zJUKzgwA2h87qoF0Clzyx6kFZ00nPcujJbQuqgLY%2BQLag4JlNMraSVN2gw0uISIkg7Q9p%2Bxc%2Bo4A44ROtbnQt7T25UWmFrcqjsmCOJnm3UHY5hw4gk3Hoxv6zyRm2fPKPlN4KiG8HGU%2BsByIrjocMWXnlt7P89pYxenDpazVve9%2F0wk8qrxAY6pgGhMxgCipM4Ee9RzpXIrDWVcBreMcCwzhitppsfKWksE3471sykyc0jjx3v%2FhiHeKboJfz7y0jj8M4Hi9sm4jpbnKK6%2FpTzIWxawRMSIg71ZbaeHhGtjcbY7xOYtb77h3cAQhJ4kwbz%2FmkwKOhmXX1badMwSfhSIaG2BFmVoGBzwQLVT3eoeqeckpDtMKLg5BEI8QTPk0jh76Fkw12j9vqhH%2BwFYlwt&X-Amz-Signature=7fc1e8d8b97f27fa01ac2b54ee298303cf577a1e717f49f8de65eb927c868fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
