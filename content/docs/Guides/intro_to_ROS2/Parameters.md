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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635IJCDL6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICg0oO%2FnIdQEto%2BsIYEw%2BCFDqY1MWbh%2Bi5tfQXO%2F%2FFDpAiB6IdCV%2B%2F46JbwlM289VagG1jroJfmgjQyUUuUNWBczGyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk3FJOwEaljhgvHeHKtwD3Vt%2BoT3rG3o0B%2B95d3ypsfnL7362WcsZZ7JENs18L5ioX2q5gw1V6qs5kfY09Oc%2FV5Yahr5ByJBu7eMl8sf6Zb2K%2FWMK4uRA7AkVeF%2FMQdx%2BPP8bpHFC0yrj5eh5%2BwyKL%2FgvAK8rV1zAhv3qe14DOIeU%2F5Rq74jGApLVYB62nNm%2FZFz5CRyXsxqrs6P5kkRClj9BcgmpElSBTWOCrfFc2L1xKkT7yISsNDeshFVohPvt7kEIMvsnR7HE%2Fbs3aUVVujozrNEeKtDtYOl0cHNefijfiYwHE0vLj8%2BbGLntgRarWuBJaKwNV9CI0TkYPuU7NQPyBvVge5gzucEGjsnK9H1KQPWJsmjqVtXfKNzasvH8IGorgL523pOi8FfMFilhq1mQnu5zTRDq6r2ayRDNHqUS8u0zZEZsuFbfla7l3dFcRbp79KI6GEeaw6ZKFm6b1HomI4AaBcKzycdpe%2FxxaNgufpTIzUA%2B4Fim%2BtOcbLcdzfBXqetwGH6P8lrW6hVjgoX50mJRqPDRlzNrfNCr1x2xSXJ%2FKmTQcANhQ294a%2BprfIOXG06QcJVB3BLiS4FKfMi%2FqYvkaogaUT6fDdL%2FSsvRz5cS7awCG3lGQARNzw2n2fnToEY2aI3yQxEwtPHkvwY6pgHTu1s1uay%2FbR5TJQ%2FVkCdEZv%2B4Po3MV9VET%2FAvjwMRRGZmEe28s1o0fm9dztKM0nPfdyT9blqgwDdasN8rdLwzMY9jeuYBdJTbxeHr8ypSBEb1yjhhR0Bzga2enhqDzKGGghPKWhGat9%2BWrvGzIeqfPCaHqD8z21iCjd43i6DfYuUsnD1jxHlH7LzIOOvwAYl93V3OiUW5HBBiTxQbCl7uFfoqvKxN&X-Amz-Signature=baa656e5eccde0a94354c0a1fc17960af9e0ebdc418cc3f932ac228236f7b49d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
