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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SOBIXU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDEoU3khZ4rzsld6I2GIJgdIJUyXJfTu2ThwqdISugyLAIhALOo0BqJUOni%2FUyqqI%2FK4Mx%2FmYvA30jIZFtO94kEJTsrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvpp2ikeT%2BBvn5ew8q3ANFYXdDiKahczj%2B82sAo4Y5tKLeIZPDmx0b0OGTeUGguTD9ra40OYh4oZKE7CmCyTkM4jj%2B2MLhtHjq8UgEWSCZenYq3u3bqtri6biqrMS4fdXD4nGDKnERd71UvJoTV3RmvSckyZY7PwqidkrFUXFYaKwFZPamlnn8kSIZcTjGIpcBhtnCPCEpUEs9EuCuX5ZZ9M5CQqL9G5PqVWWXs2U%2F3knZMlkzkE9wflV9dDxWxHw9jxM%2FGVb0HA7BmFgPAF5CpuMGptrECUB9pdAn5tySAXyiXTxdW%2FAn4hEek%2BkIjD0ke53G1V70PT3KCcegdZRyu0N%2Fk2P%2B6HHTpAZeNNi4qS6nofxmJ7VIENZUo%2BLb0c9zTYTLjIgtorpS1%2FBtrhEu6Hzf8Nac4J2CohC0o4eyqUQ7DKEG1auzieNclZY8iUA80CUhnNtjLeeJm%2FQ7MuMOIEKYcm9ol9OBv6zS8o01hM7I3DgYXFS8%2F%2BF2M0BR4PahfafC0lT2YBZ8JtKPMBo18FMlgRRYY67t8APo0%2B%2BbnvnH4IJjoVAV4NQoZ1LRVcc3ejAEzg8Yg76171JW%2BCk4sB9klgTt35VlelcxTlmotLZ2GMIPUjBY8trhGaj9dMwjeCwzNaC2eXD1xDDM4rzBBjqkAVE25O2R1IjdzEOIm8lAnCZqF2nj8SzoQDgeX6EGAFaMSBIqL%2Fy91v95KPr8L88cnFTF%2FrmMkwyyrp8SJflph1qSqf%2F1CMflAqpk%2B6Oai0p%2FCNB5LO%2BvmuMjQfLfjiSEmdQMUGCwI4sZ2fL%2F89P7cEpQi1fqmGXFRwtoyYbxrTtCTh2uufXhZOGX3LvqOEo4MOPurego%2B20aFPoKXZmNaI6LOZcH&X-Amz-Signature=eebc55116d34fd83486bbd8c9abcbf9d3cda106b42ababa9853ad24d3f43d4a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
