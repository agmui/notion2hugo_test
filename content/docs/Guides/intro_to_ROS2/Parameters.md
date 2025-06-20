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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFA5VGUY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH43%2BLPkRKpjLd5fuNhb%2FGDE%2FHOIXYQ3nR%2FYVFJDR7DMAiA9LGFJPf6jkJ17sQLVMi1BJbJBu77OTa3Q4pwt6Ipt%2ByqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuO7c5whxwLT%2BGQ86KtwDkluT75fq6chjlb3HR0rwfiLnGU%2FVuKuOA0Sxn%2Fst2VYvOEU3uQ6SsMCrI5D1ioUoa7xqnxmVzdCDbGr3we2%2Fxb5clGFC1zypEBLeIBs4Tsz43JuKbYaVe0QTVR4dtBSS0tJlXQ4jS4NBHPFzPUtGxHj0pXBX2lgETBoCO82akuBt5TPYPeRqiKnNzOyQxleMz5bUpu8kfa6%2B%2BPo0PWIktOVmd%2BYRqkv4r1wlaIK2CIN%2Fgy%2FQFP38JJySQq2SIK2irUFU6JmdyLT921sixzOJPAb8g9S6UWg21wvC37Ky3r1y3sIi9lH5nc40e4f3eeMECbFB6eADHhx8Gqwl1eBqadQuhQ3XPHuJ%2B2AYiXNN2ASKnjcApxfiMFeVIvsXaFGx8sZ6ouBQhkS94iYt33HNMadNV%2BLlLmadFe69A9Q04mSCt6FgAaG09lDVoztBhIAouwIesfSxmppm%2FsZmterVAna0%2BOuQTOE10wKMSXw19Vg7Ymq%2BMmIBvYk6qev%2FbIHQxDJJYjoWkWmXUcCkVeEctqT%2Fe6iYBe2MFfCiKDPwM%2FpdrxGCEL47%2FhU7VRTAwJHd2%2Fttu9bXkdOVEg1XTzRlzHnBpMxlA%2FqRNjnxmzSOwZzgeJXYhctR6ydPJPEwtrPWwgY6pgGnK4qvjSKTUiAj8iQPENejlSIaJm5cKqaut4CWfgf0zKm8uZ3lWNn43KnY%2Bnm5T6B7xKca0PoHM%2Bnm09FEaHEW1T4t5fBCV0mC46lvUKvjG9Gty8NIVYJRtzJweszZyTccxX4PlPJIK0uevIX6u55bQJ9o2uv0n8ew3XHHrSnGWXL6Pt3peNo%2Fr6DFDZr8dhpuk1WaRKgEIXf3u3%2B45RRUJwD65Ou9&X-Amz-Signature=078df62c0d52f09bda01f4e5bc1136588955dcdf585b4be61e849535a8ccab0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
