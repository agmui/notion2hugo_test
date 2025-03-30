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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4ZPG2T%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCsFf3c3secTTWMetQez3uljORBIxxVQDmyLbyclf5iCQIhAMS8ehPFLfkJiz6zWxJQ5qxGJAc%2BfeK5OIO2pb407%2FFaKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo20bTYyxErkSHDdQq3APM5yo%2BgZi5gazcflyzb2%2FOToHqApEVj86F5vsUd6hEjsUjFHBoDnqeqULPrnLdWFLr%2BzuKl2vL732b4GZQ93ENpFdxb2gsDY49Z%2Bxr5yhIoq11fV21GhYMx%2F98MzyS6hx2aAuUM82gxZKlgV1e7SbZyN294dnEevaAjItB7ESlRBfC3V4YHGp44qZhvny1oIy%2F8WeBHrFCD74eMUhzavSVSF2PLf6nADIkFx2RIUb5LH3q1n21YZ%2FZgtsP9Bw91UENB3djKBxiuvvJ9iILgq7qCfWLOZlXTSuC%2FD%2FikwR%2B10f63JTLS%2FuhvYbnMrCH886UDcSeoqqUVlkf7gcK%2Fo%2B5wKbu9fK36ST3c0iA4i%2BIt84wQ6nFE1dYbzUWsWWwUOoaCTA40XLwcS83E6aEcq7k1BbPxmdtTOQbBuEn3JfEH0vSgXViTZvvqyfWUwqCyK3%2FJZoK8iXb2rqg0JlOQnK39sms82%2FoG2iHxkyafvK%2FlMiS0FI3ANvy20mG6I%2Fn2idzk6T3gtD5mvixShKD%2Ffq2CLMNNFzprEyOcZipcOElzJjdiO5svTLzaF1XxNgXJvxxu%2F%2FZH2orTpgGKw185XKabC55sE1dVmjqlZ39v9Q6sN9bqQyGyJDXOXJdnDD%2Fmqa%2FBjqkAQzQ1jgODxAmi0fTBQUmrus4JLbaKqnJrHcKr%2FbXhf3nBujw7MNAx2Y%2BMhwBkdLf5rF4L7wuiycarHwam83wWuzCijlZTTU7i82Xk93sSyY5Gr257ZrAV2cYmqzMZCMQ6UzRfOeGdlw8HfdpD%2FxOPWUa%2BTW795U4W%2FkkAybEEwczlFyiCkpvDbLw6E6KUjiQ6EJX%2BpGqagQXNiQpjEs1JoUmsPsN&X-Amz-Signature=990b0e8417b72d97642fb7db74f6aa5a435c49923809033a3b162e77b177781d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
