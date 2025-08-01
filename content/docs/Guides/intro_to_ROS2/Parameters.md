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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJCGTQ5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzx%2FyD9TIa6krpYeLK%2B1muI8XO1TpN42xewTVmfn5mfAiB9NRBEKHz7ycuDMPAdRwAsA7b3vqWFxDNjx8N3O8oxASqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0OPNpVsefCl%2Br7yVKtwDQFuEj4ArHewiSkxLzuzOm%2Bk7KmCmoVUdWWrWZWOcUl5bcWwvoLSIj3d7P%2BTqzBh0pRSddYEowHQaBtdBcgYvqP4Y97GTzKiYzCkNDTQEYHXscquMycMaxjWDYFFbrf8zUbWXAm%2FVD%2Bqdnc%2FnYyUHTErXDmBN%2BQ15hlFSuEpEpJxq6FvXjJPtClbGPelidIaMQUC7BmaPNJTdsjZ8EtAn4pUewRaqxnQxOB%2BYtzbNlaUFaBtWlGqj2bOJydu7DF%2FT8KhCIRw2oxZgK8%2B%2BGILQqEVUWCOB0aIF9kiETU5RsDzOZ0AtgFxjQZe1zRMOI1TDsYPvnWc1ft5WvcdIIUE7uhbYPulXF5XLHkGfNFFGikjH%2Fx38wfoAnGk8gqsBF%2ByfJVi0Ep3svjAIy6RJGjparuFeCrSrkdMGumMaEHOVvmMF%2F9ln%2Fz7zAaS3lek34a4b%2FFgLmOlrrm7xeBRvzbYuzWQIlzqhujoBxSwnVXYaw4eFW7dx2x8Ws1Tf%2FFk7BdQ2MaxRdqRN5hm0jRpNHnqTFxk2bxnZxDATCiREHR48vqD7JN5g8viGaLIGFpgebwetPBYvO%2BGdKSDvU8xV5gVyz67ID%2B7Bf9sJZt8W6YjXdx7euua%2B%2BWx9oOsc%2BSsw2bWyxAY6pgGUE%2FTtQgWlfybF60Rw%2BFVzJabJr6keBw0bi%2F1eikSEzKnXquZwm7En41E0qZYMev2eR%2BBtacgj6qFFD9XRZuVrP1r%2FeaEKzvcmC0XxQeH5Axphgrw0UjqK7B7UBC9K%2F%2Bf03%2FN3Hqi3nGwX2CF2FoaWsJGiddaniBP0TeNIj%2F6RLJRUQHgbfBiTxXjFextQB0d7AJaFQVrQCxBsZhAOE2OaqpoID1gk&X-Amz-Signature=16836efe5620624a84489998f83211c58aeade9c502fb4d7f4112524f4339ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
