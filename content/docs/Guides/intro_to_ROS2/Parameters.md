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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RILHZ3Q%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6refGXj1s8RbQx84hDDvc0VDcXG1vyEdBr2lsKDZopAiEAoLxAT0SqA4CQiL4vifbD4DObEE4YCB4N1uuj%2F8aRCfwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMKzZW9DfAGCziS74ircAy0JyxlqmzXR49dURf6wCTVFijmc0tbo6MLgbVWN9zXDD4tuC8bVr%2FCRDduweBFELyTzOLYKE3Ra%2BCBsHj4qYCAmBBNZ2CoMfHSoa4J0KKXX9mtQVx%2B9Qd%2Fbb5P5L6LvRL9V9Tq%2FXVSmW65BakZpWHEaAjOR5BSV4063ZTwz4lUT0ZyBQFK7oL8WfLoFAscxDEDSVOukWK7A8aXr46pEAlmW%2B73k69RwYqrk%2B7kQSusKbwjoYZtAtkgjPUQCs3n1%2FbL5WHLUUjMQrEFHDV4sUt1f1pYEF1ouS7CeSGkEBbZhl%2FlsZnEFpvqV27x5m5CHwcMAmdhURG471fJIXenJ4DmUB7iykB5VDxDcv4oboKbjfmDToqETAzVloMETJvdddbEXr%2F85TybazzThb6kfbv9JFkpg7rsNOXy1CH%2BvmwWuAbDXEgRWyb3na0B00R0MVoCq08rFUmsC4ck%2BJpBlbK44Py8Rf15Dt2KfHcf9hGafQz8iAoM2x9cpJUX0Klr4bVK2cIr2AgNYH1nmlClozsQlNcUj0kkm%2F2sybnR6PIyxhDT%2FJGDcUQfkBiC2%2BC9%2B%2FG%2FyE61ZAR5wRMgj9Przk3Na7kXltzpp5NyHeAvM5PgAnOGZnN2kAXvdS%2FrQMPyKusAGOqUBhWIVRgKpYwhlq2zx95nWbDF%2B%2B%2F0O3HNk6ZcXoq5Ba%2BcugoiC0Z4X6G5rO%2BwEG5Ktaq3KjF3iZnUkmWFsa39EtG%2F3FQgtCUac8zkYYzKGK3%2F7V5FuF3bvrIaoJDu9ojdR6J1p2wTr8fIitquVOGGUzqOBTe1z6VueCyt3x0vCNt7xpt%2FE6TqGEPnfA0usfIK9g%2FRH2VBa3yGuhsDvBu4IkGfWLCQz&X-Amz-Signature=87d0dc6e4d82d75e5f53eea73d70f839f0d6036636b26f3ae6efa9634ca46fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
