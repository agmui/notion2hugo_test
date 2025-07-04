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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLB4IBJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLMJErpTqiJo%2FTZ%2B0CFxwblx12EgbkYfDJlimz0r%2FuFgIhAIAmhUOrsAHljNLrSDsba4jXtqq%2F40k33AD3fe5VOErdKv8DCCcQABoMNjM3NDIzMTgzODA1Igy1wo0v0NplW5FBNcEq3ANTpr1DzaO%2BDhyMLMd00JvVu92hDp4AD%2BhLuqGZfWAlo9k%2BK4ujncLf19jwTH7PuUBr5CSUYRjn7E55FNH%2F9RQVeUSj6r%2B%2BLifk%2BZCcNTdF47iNF48RXEPRECHnFkpkjbN3CrO5ji%2F3khLDoFYpxUl0iKmiHryBBHEFioKXVPNiAUIjfggBhfI%2B%2Fyi%2BI5YlH7R%2BnEcamp28LoYFLxxOo2Cb9RiBDJuTzA1U798m8n%2B8sxUn5NHB2icBSdUh44CJ6I3XCpydjUSUC7wBR1lqmNx7BXw5RNM2bpC4WiyKPTVrBnFp7jB4CRolo7FFydCCkin%2BVMrgFUzzgjg%2FMnU1eNTDrUVwDMvgW609AZlTsX17V3gLVqH0dhIwJFM%2FTudngs2gH6RrTfPsL4gOFZZWLLwDJGiTbm6NTPR7P4dpuqFJyiMDrowqSsELs2FUjbGJg5lccG3DlBXJghrhwiTWQYF45yGoOrH4g8v7Xip%2FGKXau%2FqxQ0Xh4fx1bnuWNgUhhLnIdVYs%2F%2BV7337J181Sjj0Am4ANQ%2BHYsh%2BU9xTRUzSC1D36hjySmsU%2FMzR9uHUf7lUstSaN3IiLaEYclamSlGEe0GSXm7chmZR7nKxZ9saPVzCi4Vs6YpmKYtLsaTDu4J3DBjqkAf8HQVuoVgmpdWpei3Ig1TGigGhegS2dDMuO2oVQtXQMz2L2KqEkU6bCO%2B0WG7nT7MhZt%2FSYSDX7AAr%2F31dHMW8W6daD%2BGQqXAQ4%2BCAjcpijUERWBuoYdepKESpUY%2F7NFZtd7l656V4czUYGR%2FMZtWuNvkKNmUuaHn%2FrseuELWBjBSKWDfNZSXzr%2BF6LbhTwHsfqJcNxo4TAvGCM3qhpIIkmZDf%2B&X-Amz-Signature=ba0ec026aca18f006d9e938469015a1ba1240594693d1685fb4bbad27ac58626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
