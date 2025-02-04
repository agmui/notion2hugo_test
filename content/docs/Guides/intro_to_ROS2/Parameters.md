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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAOH5YD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFYN%2B2tbFz0lXfPMQ%2FQOFKm%2BRRErulB0KPUhspJnfgfmAiBObPI71tIhgeubjsFbOpgGNHQ3R8WROxzsEz53vk4%2B7Cr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAB4Wa8PUE7bLOhvJKtwD8Z75TnAm1N9BfR94oaplJ42%2F%2F90wpqHdEP%2FI%2B2dksgZ%2F8%2BW7%2FL3uNV8FvAGPclblJPUwytC0pnidVzWXisADmPlsW6ia%2B%2BZ0Cf6cbZayVFTjq4geQExoq%2B7oOHwkkAkBZFESn4nHrqZuMc65JoYh%2F4sasCZFDuaxuUmjbEpUW5BQ15qJo27VeRIzeoNxJ7gPnuIMri%2BpJfiN8bE07HH2HxuHvyODx88bcr6zas7ajPjNo5dhnnEe9MMC5GqcZZalsU%2FpYYYyPjvOWONOaWfC%2BiKalbD2C%2FWTVRCArcuzMac%2FzEA%2B6zUXdcn7VOI55X4bsqspwlikP5eA4QYAm03dvrhW0SsqchTItT9P%2BNOrEX6AKtsPh7ZpJ6N0fE%2FinONv2WrLkQTwDtQhQ0DImYUXEn4sOLgw3l%2FllcJe9GcELLqhbb3F4ehOZtjAr3l72Qy6yJ2G5VkdzDlLplG0pVVCOli1g%2FtK0eq8BwEY7qEdpEzYgzmauzSGGQY6bGMR0%2FD47qm6XekLkctPDlIERUqwEiko7uuyNKnjVMGKmmPFb7fv4e2sTevSC1viuLAg1r6mm0nJl3Epua7rMP%2BaFyNaw%2B%2BZ6g88%2BtoGC4ponO2rcY3ypDvuJ5a6U79pDHYw14WJvQY6pgGGo9RoezyCfB4TP4gDWojfdg85A%2F3BS9Ah%2F182oct4KDDDEWzjPt1gOmtmju%2FN5UcNmxOfzXXiCg1YRxUX%2BZbghVyu5k1SRxU660BxHHn1FgmsS%2B1vX3mvepwH%2FLZMauH2JNhr8yzEaAPKv8R9dB%2BVjgc2xwLDbgemaKOyH%2Bc3QtDXlQwjm2fInYeTn%2F5G605qJ8JDLBaai60KAaT4f%2ByDX1R0JmK2&X-Amz-Signature=90b9bd4cda9e9240f5430f0d99eee855dfe56e4d014617fea5b906f09b9a1a99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
