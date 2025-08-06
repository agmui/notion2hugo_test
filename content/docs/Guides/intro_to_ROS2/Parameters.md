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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JW3NGL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIC6yvdAKHpp13NkorkD58dEr%2BP0WnYbUhFGCQfSyrzNVAiAE1MljuqkTiMy%2B27UqGvBx9S2aZVykjt8h3YInLX1onSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzaabMfdyKAuXMSDXKtwD4wkcaOZM7911NsRCRudmYcJBWBNJyV0uDScO26Me0xQr6exn71ONHMk5oPiYPgnHwAzQcE6jkYddtwXXYBNZIln1%2BSGZDuek3iiOvshkNLsoQ4Hd%2FgD99%2BzEAeLBYAPqJNV3QV8nm16v%2BlHIZPMWomM2QH9JZd%2FPC4MEXri681jEhD5TiIqoTURIyHsk%2FBT27lEFC7NyDzQf5uYPf58Hbi2lnrRsz474oq0lyeq8a4JfqrLfD1802dIRLqKDZjzMjhLtjqi1yZcJn%2B3XHU9wfI05bn0ojVpJ1Dmxw2%2FqboDAoSZrcDXg13nleZIOMkHuOg6KT1%2FIfZSmMd3eA%2B2IYbys1AubonC55G215QJb2Wq2KEQwZY9beBcWAztrx6sXktllemRCLwWTkz62QfDXBhREqftrTf5Fa6i9oWWBmA2H1YbQzMnjZeKuONaT1nGKQ5YLMOiJlCCC85eypogh23ESc7lfVoYDzEj7b%2Bs%2FPIU%2FD6FggAJdnytfKJIDbG1KT%2BuGaukl9USfN1TWHQ%2BgwUy4GQpTnagq%2FMMsqkugm3LFWNNdC%2Bk9DJ919Tj%2ByQ1X3x4yvhpN9Xx5Kc6mf4ujfLoCKXe97ZrnHZal2d9XWu5TZ8N2Rm3dDV1hefswmuvOxAY6pgHO%2FnNWFpNLg0pqF5DTffFtkK7mwe6yFnQdhVdAvBOOv21ZwczX9Y1TEKhIm3XEL2kgIepDzmHkzijlGh%2BusA7DO1%2FBNEFu2SiDBSKoKvEABDlul8IZ3mTkCiMch3Gvcn%2Bq88tvkNGbUjzDQffznI3%2B59vZ8oG2DASU5rimsDNc9DLFObZDdTecY6Fudq6wCno7jQ8Qv8H82mAdTpWpuOJsDhCUg4Mu&X-Amz-Signature=a33cc52031dfbd646f0bab965ba00ecdd2330524fb31a7f4367db0276288d0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
