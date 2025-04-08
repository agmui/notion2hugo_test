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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JOAOI6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNtw0qQvM6ZF516ZXGs8JQTTvAgAfsqDiKQSd7Wei%2FlQIgXHgBZ6OQ3jTAa5PXX3aIFAK0M0ghjNKuCrmi%2FFvBXwEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDM5gKE5mlC1H7mL4DircA6F49x4cTbqhxU17CkmXBRQ5T%2BN%2FEhwncGDht5eGmL2NQeR5SycQamKZzMBi1euc5d3o%2Fu6xS%2BrPDZdIbToYsOYENQa4k3dYzcY3uSG9awwIRF%2FKqXZRlYZGthAH450DwlJxKrAk6fdXFE4WHZub18arAskeEdafjkNoD3uoB%2BEl9o7YIva2D%2BcUwHTYhJSl4sfDk5%2FOvMOo6FDQLXOydQad%2FhancIHoWlvtx1CaI6vUyTnF8jHozNaD9N8h0tj71qkFMapf1r32Ohq3ruoxTvSkfaDam%2B8KXfH4Kfof7cDa5qnCs90RzfqVayW7qFMxau5zX0OlyjIl7wzdyoA%2ByiCbshJFpX73j2TPveBn6QSwYcSX324LA9qFDN4%2BcME6DimsHMcyY%2FUtolm%2FxadYb9zXu5JCOVQlaJdZ3C5asMi3DcTGMEND47JjIkcTPmuzm9Inm6FO4Q6XfJKME6ZpF86HjL9cgWMJx3z8rE9xSXi8tKQQvZuzxxaPY5thG8wLf7XPr3dseXZreqdOADVGAqLB3LXBpFYhzIlamPRyHGuQpxRGS3nBRaV3gSZak%2FjBoxHBDVQisFK7ToPmQqhShqeHT9xOgy6u2CxZQ%2BCUDa42svJGlALYfixNPqU2MIC%2F1L8GOqUBdjvU9fK4sIbN8Ye%2FRtbIyCKjCEOxUglhb8ELXnZRbVypBFXAIsFBl10YwBI220QPw0wZGmc8kXwGTwBAs497hEp0jGefRk8ipahDxXs%2FbNzeBb%2B%2FfrMXIzq5AW2BE2QWJMhuggOHnWJZRpMAok8Gj9CngtkcfuTW5%2BgMWQwWyoKtGQlg4c60pyJZ65fqz6WYW4yqkwyLzV0Y8PVbsP0JDRGk0Nzu&X-Amz-Signature=9e7037d5825db88dd865f64f179d1d4d115ec2ef8eb798f4dac731d105feaf67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
