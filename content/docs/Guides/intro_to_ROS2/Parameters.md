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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SH7ONE6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCTU%2FEveTPFv45syusMEEa9k4b5o8W7p90hg%2B3QGh3sVAIgdACMMV0gNnI7i3Wt28YOCkDGDSEGisntNS9sMoPss0wq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOzxOEK4rOAFsjw7DSrcA3KAtgJHq9BU0HSaMKQqR%2FmXEyOj%2B0suQfjt%2FkMm7cSvzqZKw0iEVohvi1r5wrYOxMFqzEO%2F3v28yl0dGaKHxtYQmoDKDvPAGuZ1PQQHU%2FsLZK6RINm5yoCb7wl4rA8cs3ligi98HRQA61nGJtU6yLLDJhNQ506vqaqzxJIEfJC6pj58fo7P6Z38faIulCYTCUfGIApaVYABnyfKuY8sVN%2BqBNiYNvtJPWct0T7bB9PwfeN5enpZqJPtOEb3E86bRsG8fOJQvZV10KwhzNJjos05zhn4ASZvQfTwlNc9bsIu21Vj05rzF9yWzpaS4AQOHOHlbA9SI%2Bq%2B8msF9rXZP0bq0Zk4hM2y2zamue33NceO3XalCCpWvogBawQHl9ELpdTvJgEdeOInSQ8oFtsHyhzl67p45%2FX05648yHioIZFUqIrGwpJd8sRKwtnHR2hvEILE1z1ILHsaK2arkTOOaO%2FtTcPjAmNgwonWkNRLbhNohMEQJclWZC2JacdGNHY4OBt9OY9sjtwYqEbhFPqCfSftJWw%2BA42Z3qb4w9bXGLKVCePKzd8aEQcvR9e07Njh69si%2BJPfYRMiZKAvacgULu2IDOiw3XGGH2j702CE8mHitM73rtHu5Uughwy7MMqkmcEGOqUBfr7WDjoUf4Rd1nN0sOBIN6tDzyalYU6J9vYJ7KapgN2hs%2B%2F800zY8k3jRwicEK35zRnjJPllfRfbqQUvd36inSIuClZNzeQJqA8Ueu1npigs1rWBDnolACCk29aPaO7JdzSrjQIlc%2FODbPdE%2FrECGmt8CrbuKczwDV5c%2Bg48EJGQrhwHHwHjP%2FrpBJIXZomFLnkM5IQ2vlSHd4YHBw4aCCO1qiyD&X-Amz-Signature=b6797689e523e5c4a99991c791732ca69cecc08430a849d214574e0cef61ceb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
