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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVMTIKO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmVzzzkAkDfIRurmWGGj278hSgxoxYYnmS9hN%2FOyftKAiA%2FTGneC5ZHMSG1OaSgWGy9TYYxnhUEAesWBtxypWOfHSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9ffxtwCeXyInptXKtwDscTIdJNAIU9htdADeH9VXHkBRE8N5NHdIDOdw0bfuWfZrhsmrF4P9ofUFHXyZKGSoM9fg9goG1uJwH%2BWUtBILQNEkUl5daU45EXl%2FTMwla6V2J1pO61LhKckAkyOjG75NWCRLLQvxs8hy3JSkJnfglBcdDJGSWYbV4GEO4ENx7nMXcZzEuYUQ1Oc1DgAejoaV72yrTA%2FLHbMUl%2BVEeHMzXuRZ%2B8n96WjMsknQJzFCt8nNddFO2quycwrMYjF8AxDBEAnKkgvsjSt9JFk7iQk2BafOpVVfVbfIL1H6rxL55OawYX6fEJnh0Yzvr8vHVVK0oQHjuKMxRNX6W%2FiOTIzmfm1EFiB%2F3l4W45%2B2xO8W9PW6PdPt6M9ftLIZjLPqA%2BdRJtAkLMQSzXvsCeay7Sp5cR%2Fg0k2o45aYvohPLQN2lkaLSBwNQrEEBPc6pS2ozs3fR8fERf%2FDhEt9XmoNtYMsR56Mg%2BFQpfAreQMdH7ArSZkk5N%2FBhCHphmkIOkcfZFldJQgXBzdpOVAZaIfOS9QH85MOlku0WWzkhX8xf9FZrTNSqjoOWBcW1akP8zGxmOt9pqznsg775E41r69%2FlyNHvkX2T0zxJWGaumlDh2vfHfXk6CVOP6D3%2BgclYow4rnQvgY6pgG4ArZUL%2B%2BpwtmpOLSq9LwEAbVvOWi%2FQnF16PVA9rfA6EaxG%2BTpBsMG3i02lFiPf7HlJE5j590%2BEqvm5rauRLtroros7yyR83K1YEkpwohVI8xdpmQlaTA%2FZOiZh1Fzq0wjQqYW5Ei5NTSwcX%2FVFNOuoPfwQ72y0BcF%2Fp61hzCT%2Fs3VHReC%2B1BvaFmeXxl8dmOCSO7bNLnjRfByqWtet06FJ9su0ira&X-Amz-Signature=579bbe07c00e92c7281d4edbfc8ec8684b11f702427be120c06ad8975334458f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
