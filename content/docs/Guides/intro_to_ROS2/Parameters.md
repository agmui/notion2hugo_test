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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EEDPG77%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6gLoBLPGTjhXjMpUF6V8tkYPaAEpyFaQXiyo5%2B1MDiAiEAxQ4VWgu9UvvwK3qa0PzkQt7xb5UTbYTnw7KR0zS9ypYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaNfEHf%2BMmKYqe%2BdSrcAzbxSs79JSSvkM2eznJsNrMqHHsbpTn1Ox%2FiXu4aMiJriZxkxsYF7lZSWSck2TfVt7va5BMqzIMKoHa%2BUxPgk526ZkysJ6eWBp%2B%2Bvf5wGqnK9leLKCYhsM%2FSs5cr0QDKET23divcpLo2%2B6og%2FU8Gw4qDLNoU8s5tW63ij%2BieH5wSqGA1UN9OE0n6c9pxxrdAzxYMHW8nerKmpZQySC3A0W7S8mhWr%2Bdxi7ZHiDkw2AeEGD8%2FSqm%2FxkIRVHkPFTnztV5aODRydHGFsjpeSzbgrIXAru4y3JzNevs7FKyCjJphnij86ldEPHRZqXFXxUkvmxBpXDXPjzAgwfwiru7w7sWeEINIIA6Qanp8EifpGpcJc0QR58dO4M6MkDHGaEeAVGnQvO%2B1zngX3tltS0CjybNcpgowJKu%2BJnfMxCpsGwvHrAd3%2F9fpLk1ytJhOFdyFQF22%2FrQlNTVfcs%2FJ%2BnstPlnZWOeCyS%2Fh6dOStXx9kOsvPmR%2FmPxYNP5EO0Er9jtPiOEWGQP0fZ8OxcNnPpdFNKAt08asJB5bUsSmQKqYhdkBu0wZMNe1xju6sM4ap3ZmE1ZjIYVxxnPFBUHiZd%2BmSImBJRf9X71V8FPixI6ruFsFDvvfwyOcTnbu8ts%2FMP2BycMGOqUBm9h%2BktQXvuraHhH2ueOwgasfRaSLorD0WB%2FZIFOoqqrexem3iWAqCG%2B%2BVBliEtw%2FVHMCoPsqRyJNy%2FsQyMzi7la588sV8B9rLksaknxrUgYRZ6GcjNdhCG86Iq5EC7GGr5wUMcacIEZtSjYGBJUcyzNOfliK8QuF2xvmTfIwN3aUcYADJOiJ%2B2UKq%2FxJ05ZzuD4LZeNWb070a62DX44%2BSPmJGzBM&X-Amz-Signature=9cf8718a8dd24f578d4674536b1bf30730ad943fec246113a035bec3b8f34470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
