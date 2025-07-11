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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKIILSH5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH51WT5vNcMBskXl7dlgidN1mE6JZaxs5iEL%2BGvpABlgIgeACqyivbXvZnqWtrXgJN2qaFCAGK3N%2BuHyj5n9AZi6IqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQdsp7SbeqYInWMESrcA3XsD%2FX4j26ENN1XPN0I1tp%2B2f%2BWOXI2%2F8J55zc2s95VX93AbB1Ky775JvAqP4LdA0aMKXeaJ3%2FQh2Sw50yE2%2BcDhSGmNtLg2LSj10Nvn9tVI5idyk%2BRY916uJYYKTP6RJGBz0a5G%2FQQcO3UODbOcnY4i1Ht4pzBAkHcQ4%2FJSfiPB5MrmTkpAzbolm8ikWEwC6YgKrgb4oGcIsSvd5tCb2Z%2FzdEfLLIrYD1fWzk6nC1ti4MQeV1y8MFwPFdhDphiKC76gvGUMNENV3W7c1uek3j5F9j9Jfz4XAv1dSdT%2F%2BhHgRphCgSAQxN4AK94iWaHD4mGRtCeHqtc%2Btb8wGLaegHYx20m4Ht6clOQETcHjqDZxwXmAFzvMpJ0G7NZ%2Bszs3VIQlEa2Cw%2FqOzP0ANCBw%2Bn8QDf%2FNFI2TU5iBS%2BhW%2FrBrfNcqefHVXeg5uYKhat%2BRGBbi7X6wjcORmrH88rTDjkVhncQWmWLTteU6VkikekYEX29xpHzSxvCz8l%2FSDzeIobGFj5Abh9Yp6YnUzCI5z8153yUVIlsaOjXk5ec%2FYYACXtKXqNSyXIl%2FsHUc%2FZ1AmZE0UaOU9oRU5IzlD2Spy8LkiTD3dUICmsGBM7rotVYefP9nm19yEhUAMNiMMH8wcMGOqUB2OUW3EHV7a%2FFwXNOUYEdekHnPeL5fWgSfyg3I1iti9Ac6IJqCTTa3w1gMUFSW7ueDGDOcnKX%2Fh9CkXgJacANPJvK%2BKRRTVYa28jZ1YDjkKAeY4Xpx2AjBZXH4vZyznHxRR%2FSR10DhDjrX8f8Y72J0qvDxyauQr78yvaR%2F2Mb9%2BA%2FKWWraBMDBkrTA5QggXx5IxY8vpadDYlf2lIkCoIVVTzkBfuY&X-Amz-Signature=438da72ae9f6d0efaf7a937a7184fcb7cc494dabe39dec17b7e9d45ef065b9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
