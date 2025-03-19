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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ3LM64Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDRQqJlazPmc%2BKGb%2FdFr20%2FCyXNzvQ55aKN9dGVWXdHAAIhAImhXHGWGvWCbK%2F73Z0IGKNkNoMRqTRVdLiP6%2F0Bx6H2Kv8DCG0QABoMNjM3NDIzMTgzODA1Igyc6uPzb%2FIRAbJoUGYq3APRd8OCTdE0jyfnvEo%2FEqWfE7QrViXewnRDdr%2Bh7xO6L4DSukyM8ZqOZz1lNZvJnLapSnPehAuyH1%2F0YyirB9Yrwy1Eb3XTa7PbbuvI2zv2uM1Jz4%2FaPUWC33x8sX62DRoMKGMmqNaOqfrME2yZXLTkyKEehw0aVxJB1CKuCXR9HHQf50nd5ZkYUkE5dFKf%2FedeS7j%2Fct3n6lERTqoMwqiaq%2BkSTD4HZdWXKELyEGl22Ca61SINqvehDDwjy0hndmU4SQek292luFEYtJvf3JkaJAEh4cUlYunbnXCXXKmaZyxV096Kz62FFiFUPCuHmiaDL4Mrq4pPoZpuGZRmAje1kIpKLNW68lLiuioRMQ8RBFerVud9MtIcyvqDUErJ17%2BcbZ37bo%2Bc4TZRKwGkIpSVK2NPYoadDLmvIVuYhiElC7YitOqcn73Wd21J7DnsjC7LN2BdO7Wcro5MEccp8Z6%2BynQ6USNY6PMxiDDn1nPH5pgg%2FO2OVbMDO%2FTziews6yZWoiS1pSSf9sxzw5PAqEP2dJcGhxxKo1%2F%2BkENtfpMf81s%2BXwXcwlGWG13hlYvDBsVGJVJynoAJVIxTBYXnmEO%2BV36%2B05x6bBfzYMDgUj2a5bwjPmY3TFvU9wbxkDDp%2Fei%2BBjqkAeyD9fDmN1SmE3Zo%2FGJbJrtO5VRtxaLbtJLrsd7UeiDATDrkjb2DB6fegdQasyAcEYjeUKgfjbgnFovwaqxAHQaQDXwWTvB%2FvMEhUwSwGTQUmjZWiFzYlL3R7SPu2cM966JGjYWZRPzJsyvNLE7duaFGeM56zS9UJK5bTIbma4zj%2BCN%2Fs7DgtANqsojd96Ui6iJsamMg1DvlhChIlNkkB2IadlxB&X-Amz-Signature=ea2c85df2a4fa6d824f845219d1ebf3c4691de80474862ec3475457e40097a43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
