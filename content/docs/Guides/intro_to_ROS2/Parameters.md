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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664REUNX77%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC7FRSIOJNOQsva5HdrA5ndy5CT4ujFl6mOoGiM7CG17gIgHj4nVbBHdiN6IYWGHogLQSDYmvErlxK2wL2VEAwaE2kqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWRsdBJjeVEFxnvpSrcAzyPcEfI%2BfWHLMX7eEtaw%2BwlIDzxU2PRKlRlONZap68YDMtBfzH9VdJZhn3F7LPPXxaJyYSXMGOpyiiopIK9WUD4d6BgMX8cFMXzRcDHOdgJRlQ%2BwhTRmn7AaKwhW75x52hKyopaM56Gd7KqPLcxjRD3IWG4dM2sYiEZEAX00qX9s8cYPV4SarTCU3bTM9VbIHvMrbsVYBZ2mAEzgKGVEqwqlQJPJwKzyLZs%2BJGF6NvDa1nYtTYbRaJcUbqLlSqK0m9MI0dEAdomAvflxDPD2ZvXFLY9TeGI23obKLfcXCA%2FttmYs9sjKJY84NfpNAshh%2FjVP89OCviyTmRSbSU12jlfDeb%2FpSq4m1TS08yMWLKyMkv66xuzDEuBksox4LmyOchN2dGDK9IOvjSnor81bwYw8lZysneIrsaG%2BoYd9cKkWRMENzmZNi%2FngdLvIdgmuhErInNtOZipSg6V0vqvXYb7U1al9IaxMqlY%2BmJSGeTlw90yGZGNRlOpULyDktl7B%2BZs4IaFRj83DwckRDH%2BD2SIDqGuLMlQjXe%2BcqSm852X8JxvZTjYPR%2BupUNvATEDPg3JnqI5QzXeToaeMYBgjUpL%2F8SnM9i5yAylKyrSUlYmn04tr8i0e9VFLLSxMOqi1b0GOqUBF3pdx7Lr4ozi0qi0ZXH9R7GRsY5thHgf7aV1th9BYmKP3jFO8jctynvBGKQota%2B56Gemyz82lTiXPdGZe1bMvEQRLSHKWjTe%2FSHHqB6t7Lvm3XxObMrZeZO6KUafTibZWOKL9Zd6vGmnGjZNSTMN1sKefOOCDWnHKcDKO4fwh3yW8tBjXXaRkeN%2BXZ1U5HeQJQC7bBFOXbysxFWiAUadKZfGcP4b&X-Amz-Signature=a9039b54ff2b5d1566972aa0ba6c6e6f2487005c6e2f19f95ac147419c067ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
