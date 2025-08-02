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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDYKIBH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtHw6CWnsUUM%2BHnXGpKI9tgoZUTe76pHK0TZoTMZTXCAiBUUj84G99iH7k%2BU4oESOgWtrmuwPMXhEFhKbuvj3uEayqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaahmlzLlssNYcJsRKtwDt9QuwKetVskoPDAt12RvFzH3qNVSOQR%2BNANYicq11vt0XKcprciN6Fx5n7GanBWkPR2QrULYcmPGwQIoFB5pmDZHrSLWoP0WmKuJoZYzPobaDOf5tbkarvKohVOZBMR%2Fggws7ihQE4kNgb8sVEjCzcKKB%2FPOjegN4Zp9WMacJKML3SzWaczHRjpRUkJ10OeyovBid5mJ7C1JQX7S3tBVZYGNtruRO85AF3lti3kc0Zj31yco3cNsh7xLdE1qgHfPLiMtmAk6R0TxCq6NlFe2yR2u78j6reYTii4EGJoXe2hQkhv6dg0OXJhEgt98v63XwvTlsOoUf%2F9h%2FuBO44twuC8PZdHYyVS6OThSM6KFnmkFhi2u0lBJGQRGuV9jguyH%2FsCSAcNbowtcvbmBHBhMzzsEkyIy63wEtSK5xHbVjlkFmYlLyF8yDUXa2K%2BsBx2w8OYdA7V9RZoPGDc%2FZnYHbUc4Rd1q2%2FOkk9gbE4OLAvefseSfoUsxgd4P2vTsHNcp4Hqvu9PVxhGyfjF4JWoNWsZmvYrX%2FRu6cjp429K0Ym%2FKmloH0UgQwLd4U4BOnvOoKjFbZkFjC%2FXUByhhyid5Sy9eW9ib6%2FdO3Q4shShUMnPbDrEATdMHNfK759kwzsq2xAY6pgH4C%2FIHBZBxGRPNpD3uyI3KZngxmD7F7wkLofUQDAQNHgUndT%2B2jIRa5UfryPDFPoJawaQPc8Yb225U1ZrqCCaflNQfYT7pKiZFh0xQP0j74ydMmBX%2F%2FgFNAErIKsNSd1RiSGMaGTMoLMB0B5qOuWe9uVw5nh4LzQM5XDMUnsGQV8dH1tIwN%2FpPBuSL2xR%2Bo5EQtacGFg4X6UpgxiU3LibplMG3NBR6&X-Amz-Signature=27560f1a9e02fe3c699f96340cc9afc3360123ba55ad85a55534b9cfb0a98eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
