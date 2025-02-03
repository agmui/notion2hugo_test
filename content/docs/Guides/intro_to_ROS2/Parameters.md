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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UANSLJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu2809H9RmLfDJo8zAXPWqSfAGc%2Brmj2lnFv4a9OHUVgIhAK6XfmGtWLfUd2g49ESLFYsv0D65Mrws1kHMZnt46TZJKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1G9D0QWgowBsGT58q3AOAHzKDWsTctxLmKmrBqaSf3I2MNjOKkQuOa1JmO8lq711P6rQ2TYdh%2FurO0L5w3UTwN1RMGCKjRnJZ7zx94bTkz3ZpX8I0HN9OMMwwJH4rm5SkCdVcr79v4p63JSk1vDYgPqQPBe1Tw5iTCZA36v8JG%2FzW6csue2Z3Q9lkaUOquXBqBPXeBCMZptgfVMFT7hzWDctsAObn9523ribQhH2yYyqPri3TyNvOiuxhEfnmut%2F60qO%2BJkzkksF2gZF9OWDuRg2%2FtJasickASXRBWZ8bO2pDuLvWvppN%2FH0fK7%2FS8LvlSmmho1CAz2op82fAJpJG1WR7HYfB5ryegKT6o2qpittGIyqWbKh13VvE5dKhAsAUtGi4g6QHoa8ASNbTKRDccbZMTnUnuFNrQmqmd6A2XIoojVMkqCy3rOf1qpzaotuZEPT0mqcT7FNU3CBBTaqvHxYfHq6vTHD6%2Bls7PXzeUrvhkk9iKP7aNy7Dgu4JbI2x1d2NB0z4rFomqXZXqMgKDMoSoC5SlJO73EYPBgO3sfljht%2BXyrCzQDfqynik3O4WLGsFmW3VuJLeMZGp%2FcvyvFRLhYb5IWhjH4VBKzSKav5m3w2ouBOrc%2BMD%2FfyqBcOpdzhvD60pKI2XIzDJwIC9BjqkAYxBBCo%2Fl%2F0jJGvIhR47G0JPUCsdB9gq6ZW143pivWIu3nqFQG58MdohvT9ktXes6NOxwkbMzQbNtNfua5Zhn7Ti72zyxKwOcWFece1UBOJqsXlRNF79NDdKOSg4O3pwGgfeCdm4pABC6Gmqdu0OgMQEjr8tfyLQMjUCMnU33c3X3x%2FA8i3IXp0LPlwl2WgNLW3nKhu%2BBWitVMiYNM8Fv41errEA&X-Amz-Signature=df9239436cdfc66236d01b1b005a5d8936364901b277a5642c2d8b82613bbba5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
