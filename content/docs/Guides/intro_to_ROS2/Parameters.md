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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JJWELXN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCvabAOEdex5ocmxeF06FpiqvxCK5iq6cwUqUSnqJOrbgIhAKoAyYjJEtqU1wZ3ObbMWoVVaOkrdsHOpa0jRHLD70ApKv8DCDQQABoMNjM3NDIzMTgzODA1IgxPVrDfsljaWGTL1%2FIq3AMmNH3zsxGHOJtxsRofsmRRzyYFtJtn6f9PYKfgSWXpj%2BRTksAKWPoDA8RlQ%2Fe6wwpJWsawrjZnsm8gLFNh6d5K6tMXkagssLUTZsYqks%2FrHgd1WOKH0969QuRnoW5dUcIaACtGkROtYGxM0%2Fb1wqWPrb%2FXRx5f7HKgonsAaVBmttd9N6Xr1nL52CA81XlBhYwASqTif%2BvQyHUi9iEH6cIoAu8%2FHwDXA8TNxw9dx7DELIlfPH6iqeBKxfl3VZWEMJuvyoD7W%2FBpSjitoY%2BrT0r%2BkKsMRf8%2ByhUcEA8GxTjq0hm31OcGAM%2B01k6rHRYzAGKdgkrFbXSKhDRKfgkadpVsBuQkKwwMnRyNcPK8KvdXdDaDOa8%2FojLRy8wLSoSrIOce2OxMSgZ6Agld1dEIf2HepKOJMJadi3V%2Fi0pRRjHi90H80eJPbrSasuDMQtlsS%2BAvn2jt8dEbn9O19GzswFUmrvTYLepz6sarptGzI%2BPzRiqo7yYRdCmZ7765Rd6Xjwt5QFTmeGS5NZuiXIEPYXQIJUaDp2pGEcT4BKhGv%2FqYbvdHLhriweQuih1FNtVQInbmqttU7dwVAgr2YlpxVywUThGdPBJFyPcMq%2FsED%2FFKPNaP2UYJwtOKjfkL3jDQ%2B5jBBjqkAVkvKFFKmpN60LvUSkt8j8pSLlRCNknagVfBRaZP69Uf7jH0Ee07aS1eUWO3hRNE3tOBHQhhFDnLOsImJvihhK7VLD161hU%2BZmMQH6zQ1Rk%2B9QSJi%2FfafiLpELSnHQ4IKJpeelGiQgsbkllEuH78d5zk1fqryFtvD1B9BLoP69skmTBToqKVum2Ei0Ligte0u58cctuUzZNOb7jO%2BCr5YSf71FZL&X-Amz-Signature=df100036814dbee9824d331db299eda49cd04ff725fd3a3e5e233e2c82ff6be8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
