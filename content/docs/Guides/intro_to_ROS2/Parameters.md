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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VIN5ZUW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANqWHbEY5vHjhyYmMyKaHE9CYTa6BjjLlKoAuEXhSGbAiEA1Imv2rVG3GKgD3j8Rv3e8eF88bNjGaj5Bq%2FFO48EshUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHzyEdaGAG8VA%2BBgSrcA%2FBJfDwSGP%2B19%2B9a3ScjVs2Eb%2BdVEutd3knUo4lttk%2FBj4IBMnt6BB2SDCkl9Jblp310qNZNxYo9MRyBICYhc7zwSlzU5bIq2Q9P%2FnBZP5i498tLsnhqtjAhyElXQIQGicOlW6Djzs3537LJNhJ7LAUyKFgk4j06KP4XAJfwzuV7TeN9110JBvT%2BqH7oaqbrMvi7Giy6NBxpBZH5Bl1gXszE6rhYt2uBu99SkTxyqW0ZeHkaoPD0ALdkhe1%2BaeyxDCsUkYkpU6J%2BIgGe2SyBkLGQAbpuV6Hs6XYcPUUMxkvO38ST1bkC%2B1Hobs2B1kT5DtlYiJLRObSEVW2oiAnOKlbfPXyd2uhIRJIEOXxjYyvRA%2FwjROlRSXVVHMGAQ3j51gSpUi%2FmTlQQuNyPI%2BoJ7LrrmfPfejlR2%2F6NUglZBIHg1QDGHN13rz1fgHLKqsJWjmOUt%2BMt%2F4vPaPYcAGWg%2BzvXPhrrueiIx1E1oRrY00IlbqxQo8CKEvKIGM7M%2B1x7r5rsis7HDu8Aev92sxcDgTskoQ%2BoCp9J5NzpFpKEjE4FaK6QrS7KyZaKY%2FXz1QhCvDF20AhKG6%2By4aM8lpv03MFXub1s66y%2B1z18uLrq0ZFjU%2FAXpRSil%2Bq3DJ%2BwMN%2B0k8MGOqUB3%2BUp4Os3wFZb%2BrJpPWsKztmsDDXtJE%2Fj8ItrYkYGNdXI4xyo8IHhblrnQtTclZ3OJMlZlFUn3aCDELccbo4AGIDtH7NUD6WWgDUSb5JLXTD61uIdDxNWtcFrH2vY6wUDSl4ARtdWIK8K9iUbm7c6exl8unKTNyugNYehjSpvwTtpKinLErUIX4pnfK1cI3P7zdLQ%2BME27fCe38Loxw4kGQPmfeG2&X-Amz-Signature=cdcc77878f026c0fe7ad1532a0dd5abfd67b793a5366015091f7b699ad7bb013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
