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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIG2ZU6H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOOzqc%2BTtVaT0mMnRiRmm5YQOLlAbjQfKJwYUvu2UVGAiAP7TDL0w7Lk9c5IUY86%2B6Tvy3uvbsX8jhQskQY5VhAKyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2BftyeoDLGf8MihJWKtwDFyj5hO8lq%2F%2Bjbjd7IXdiGcdpvTY%2BbJQRm724QcDkmFUb0L11rmykZ%2FElOzF3iFQd4R2o0qWox2irnsUogmmPfeX5HpROVVHHxFyTigUlErvpCATNuFa1crPeEUnEWoELidbBsiopKqm01ecNXpN5fTqBR8G9C24mrdq1o9GLp3AoyBD0FASnn5gRE4LSRCCOO4cFUAuGnSukpokEHJjB9bMsx7T68o3bgpiTd%2F1dQk%2BODsdwORBNnIXbg%2BtDI%2FVugSa%2F8V%2FiIUKS2JNSPGUy4Xd8qc33Y%2FukHdV7Zaq4FKh5ehv%2BwoaG1qdCyrMuTxX33NQOc4TaRbto8cL2CkPTOeqhtUXFEd5r83JUeqYbxWZVoi9o%2FtmjVgqBn4yF59f74ikhsEAQSAK8V9e%2F%2FpMZ2cUsPdzQ37rFSW4XxUSKvnoy3b4hbizgeQqYHtIos7IRehFZv%2BPheCQ1IgaK%2FJFpf2QuDxBvnFJ8DtGL%2FULK%2B0h3qs9T7Cw7T7zyWEHaCGWJnyo5WWTwI4bONXbwgyzIPKElR2HnQ2Bg63AlZjik85uLQ55iyen0G6y4%2B1zjBRr6QFo4aUJZka6k9g3ixomrdze40SOTxm6jpFouU1y6viOZGrMlHIBvNadA76Uw9NaMwgY6pgEEA9GlCpWO2uXwGorIpFUpMdLFp0k33vV8gV14bmmiscYTDORT%2FazBEqV0MUlSgMOXnrUehFYqg6TxRjICtg38LLMmypQnzZKMfAbHNt5cNkba7h84XWITG1PwlgtLi%2Bd5ciw4Jbfb179Cj%2F7Mi8bsx4CLX929EA60K2wJ09o95EkP10rOWW3wTHzH4wF1uznsZeBD%2Bf0S3rS%2FrcR1rMMm6uf5hXx9&X-Amz-Signature=0a986a7ec76f7b8399b3d2ecd4286b043556f902a0bc437bfc2b40d0a0f105da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
