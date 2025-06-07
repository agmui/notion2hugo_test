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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR5VPVLF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD1G2Z22WR%2F12cZfXIfHdj8lPDC2sFq6JVh3yWh1ff%2BgIgSbmZ1gZLIpvds9OLn1%2FRJHgxKJpSNUAplwTwLnXDVw8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK3%2BabFaxj6IsHc3ZyrcA%2FtiOWQ%2FxyqR%2F%2Bu1HArt8cbZj7SjbK814avoso7b0DVKItr4Y3Paqdw9VunDC%2FuB%2F9qLHY4axNB6F7QIsYTpfrlT1bizkcJGs47z5Iz%2FiBGEJzMJG8d5NBH4lw0CMEzXqkArG9US%2BEHvsdcBmtRgbB7HuirOXl1xSy80pVQevO9cvUa3YfMLk7yyJRTlF%2F5LUU5T%2F3rlaV8WWNzpRB5OQdyFAMfgFt8mlj7924rzLo9VeAa7V5KYLKRqhI%2BMPDcKWQuCX3hOomLJKQOdSwvzPMM7DHBbE5UxZtQxYmdg4S8e7u3x73h7Ytwl9ajGLTgo98dLxo5rLlnf8wt7B69D4cfJyPWtu7zH%2FGYDrLETrfvQqkbuiWbyHBwhlRZvLah3XSLKf7hfx8Oi6HBwHQXH2eaVId2gCDfc%2FolBQcQsUq%2FInySRtxxPgzHPejtk9rE9gMxWrNnOXrYNoAMvAUwRI%2F73zTdU5aoYt%2FhLFeLZA3Ka0ScpPpsemm5HGCnHStC3VqPWGOMWXAx9gJmixpz%2F2IhtIbdwsN%2FMd7DKlgaMM6fpGAXXnFUBmIpsobeUwGL1m%2B43PhUvOMOdh3iEZLRYnWB7ePgOSxhy5EVi8pOOyFf73YxqVATkJnCIupRTMLb6j8IGOqUBbl%2BK6Y27MRJr1drGK2Ij%2FEkY9PqWc0iAE%2Bwl3LVSM5zlsAUF9hjztBY3bhX6%2F1upUGIC2m5xLsQDj9ANTEGvTI56xMUjBUvbsZowkJNpzFmK0f7VE9bXuAmf1b7ZB05aKzUbzCnByK0ucwZrNb2qeOhBrgpF0a6qZTZTjeqcowudllA%2B5K6Em4pajKUloQ51qtHKkgMt9zm7jbmdN%2B2e7d4BIs6X&X-Amz-Signature=7e52f084a88895f44bf872df48b91d85a327a3a5418a064de7d104b8e677022b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
