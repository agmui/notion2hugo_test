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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKUYEIO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCqaMBzFeUdbFV4i3SnKO%2BH6bNH8CgfPYgRGruR8VUtNwIhALujXY9BuNqk3g%2F%2FK%2BYylnr%2FAz1WtcBFJQ0vWOzjpczkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFJGFyiacwSzywP1cq3AOO%2By8gu0od4lf8wtRNqQTtugGRUdkvDbDcP9rSYKwyFzRcT3AHHO1gxhUwY9xHxXdr9cYS8KPzdDVxzJet02usJqmaOWo08c9HoDaaufIo4iHUE1X%2B2JjruXo37YPnOf%2FvLaRclT%2FLTyYhD3a7MAaQz6ovsLzsOJyt4%2Fwo0BysxhmJjPimNc2UQ4ZOAMTtjrc3EvEA%2FlTPSEOAlKq2rTa3F%2Fg%2BF8rBtXwxL67cxkmY%2Fu4qXgMmntCvW05iXSOHNSlKpAC2ZFxoIM5VyGtbfhpc6iM3ypM7Hi2wCUmSPkzZMgVLXpyDac%2FF6ImAjZUsI%2F89FiQzqkM%2B%2Blmczu0mutVvrV94sg0XnFUTDCA8nhRPkPRyKpHg28D7xz8abzTeR8PVa1yEWVd1KHncfmq40SciGw8EOBnkQ5Yna5cfeuUQOSWaEya3IFtgS04YQUZzYjUPLeAv5CfHu2UGTNZv4DdzoaIlA5lK4NWQ6g38xrfODppxsbXrvjvh%2BDCrsohsOX9uUdMt%2FM6fVyxQy3e7V99elCUlrFA0j9ychRFqIEHVHhiLQO%2B53FjaLQtKvbRDiE2ImkUQjsICeanVgUJXTnY0YxglxC22mqf9vplsQ605zj9ccQgjSblQob9dETCk8%2F6%2BBjqkAfUbBJajqV3XQ6wRv3ijANl1VuMmKbLrJ%2Be85tdXBU61A2pSgiU3f1yDiDmYnR5rMSMoBEsUTRLv%2BaALanlBsHKq8iINNJv0etqYXlu%2FyjPCiVkFMbj9USFw3LbOH5JOmf1YLWODAGQxRyryCklzAD2447ScR%2FDbP%2BDIblazwc7sGHAzU%2F6lLNRrBjdb%2BxanjOLEQzASD8fS3%2BYiUzKVZIT9%2FSFl&X-Amz-Signature=aac701bab90d3d5f6fc645925e688d69b5bf5d51e651e98e0ea236c5e60a2f66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
