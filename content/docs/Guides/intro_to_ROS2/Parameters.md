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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFITMBPO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD5K8DprJj8OTI87MLDDmxXNGtLScr5X9wIyLJCVYf3pwIhAPXtvllKxe6ZnTkzQpdiWKljAeIrOg95HO19e7GLBM%2FeKv8DCDcQABoMNjM3NDIzMTgzODA1IgxVEZxcJW5wunbI0Esq3ANfaR4gS1U8TOGQB4%2FU%2BrkWRmuhX8FulYSCbtoK%2FF0cFHxKlmciPHTJxDWL%2BPCHiGAk9PXd0%2BKtrQvfKvywVVdzOAjjxOSQ38s2%2BujFbvzqXgsLqgSSP0%2FRtAHRoiYllB1AqM2xrpwsRAVCk1kB4QYYO84SyMQZqebTCNp%2FkdyAJiBS7wF7DXIzCYrxwZdRPgJ8UyxVGxAzsDdiyMGj6%2FOXa8yh%2FHe8y7o6LXi9V7RlGwtVYITCMEnrpbCnBwPWhCNwo377km4nHQAOk%2FndfbYuMqGa2sPta3LzDIa96M3DUy63yn%2Fw3g6Vqc5HS%2FKCDWbxk5Vudh8yRwsKUAaPIhZG24iQcufbP2ZV%2BHKJjMvYTNyS3d3rurZRVvLnNJ1%2Fk9TfKEXxIQ8L4K%2BvmF7QCUVVMBoUHnZ2LRYIQSz8Z2tuPU2n0VIhN%2FQ0ff22UL88ZBAMXQ4xzpR4Z5HhVhCpXOyI%2FYo44pD1SoayyGQpJDDPD9PIrRmWtoPFRAGCTxQoBt3%2B74CEujz8Pra%2B99xJGeiIl4MJo%2FSSDPTuEnQYWyloyeEfzC21pe0sUC9nF3Tq79kVyS5tA3HFQhyNwGFYIvDAQ4wrgdYlpoKrIBqfPudTG%2BQetqjhgE%2ByR%2BlEyDDIqs7BBjqkAcUjtu1ukUJCVBrswUSIvi8MXIt3%2BS8HRR5fsvQsWXUHsw1LGaFo7T8ffNwugDwNYAJsoMGP1mkXKpBbnllp9wd2aR9yBUOM%2BuIoGXQysma2OYP%2F2cz8VaUnrJHdsy0ouTvET9GMQQ9hbOVWi%2Fy%2F1k0pmDHgGUFrqQWOpYneP97djB%2BRj%2BbxvzwhS3eEagAdE7vSAd3nPLt8wdyd14piQPX%2F5RmW&X-Amz-Signature=da264e4fd074ea5a3ca74d6c88a428f76fea875f74cccf7785b002c32144b2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
