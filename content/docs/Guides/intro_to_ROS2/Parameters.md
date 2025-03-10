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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIX6STOM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICO7K0ecypEa5EiZ7r7Mt2UVFAsEovL26njQPPOaKzM%2FAiBBLPBpesWD3KnOJFYbJIhVPNbRaJGHDbOu800e6z%2F%2BPSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRRCqh4uPaoUUAaREKtwD56ulaXBag36k3PMzwEglB3u%2BMI5EJlxBMxOBNJMx0tyExdYaGh3qXirWGlAsTrfVRBo%2BS8lbAM50pRWj93rnM%2FucuLbpNY1dsu8TObBAe1YVVEQhKcz297FVVU7q8LiXeThp3zQd%2FVEbVglA3DdaN1f40Np54kXMMZF7KRJFsgIdoZsVnFkqXAeXRTCNpr4qQzdjZjg5nAiQQ8y%2Bgh64U9R%2Fgiwj8Hd2VHnxw6Myb6gWmcYm6XTW7ctY4QsG%2FxnL4dcdYw62kID5xuEIpeUljKOyRHH2U0JcyiezJvTSJA0xAK20XoRPL9rcUVb87p1OKcmlhBiOARnEcQd0yL%2FaAMzUR1gnO9eX91LHMc279fxcX6oQt%2B8sdqcdzwEPaj6CWef5TPLFxrQM7GI6M5hKgXr0dNN04evHsOPzphN%2FaWz%2FSbXsSWhX3ay%2F904gzPod3nDEQO%2B310OUeJODekCNomm3DZoNkYX%2FYAv4M2H7VFjJ4vruqw95bZepWfdJjXYxuiBMby%2Bmbik6h0nO1mM3KQ8kNLmS80LbVStR%2FtRKP7hZ2Ukh7hW3ETNZMoNA8FrqAu3vVpuei7YL42kmxaU7xPAwHXC2pxMoy%2FFsc4tGrmTjr%2FAJRlgQ4c0F%2BGow6fq4vgY6pgGLHJHhXIJltPuDjrKMLzYwabCYoRuMZ6WQxXPJ4QUe%2B2fj%2BKU%2BMwHKC0TpmFhsE4Z7wP8m1kuHFaneVfuJ7R0EOVZrjYFvvkYYi3Bg6WmL5%2FlqsYVHNdIOX3iQDeFF%2BJmnu4mUZrCU5s3L%2BQifW9ltT%2FniBI4VKslFJBx5PMvFQX15FflQws6v26ajMmtaTTqzYsTt%2FDyCn8Ix9vB6XcK4CScAr4Br&X-Amz-Signature=b669c9ddc891c87bdcc781d838596fc157a96ec80ca2c9ef4077999a5d6428a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
