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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MK2ITUS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIUNyA4C4E%2BRZjh46jgeola9V4GnujGmNYF1LnTGZgIgIhAN2604GAJFGEIhlyi9GLivQG2COeNzWhAP7TEBiDwY5hKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7gp%2FMb4YKPRh2mUUq3AMloRgeK97xMWPD0%2FF84tXx6k9rvDdZLiLcKxM4OV0JRqKu478O6fRuBeu76aYrkohqQ9EHZqRDXgqlstNfCoG2nu68%2BWaXU1aXdBK3Bpkqo7BQawDS%2FGPaKj%2BhPkDVFzdrLPW%2BYS0ftOmiaWKsD84PGC%2FQzs8BI1lkl9imxpKd5wsXWHu0IbM24aCWXgXvTvM30wk3aHFTMNUt4gtfw5c2cAnIIAaUtovbCcOMHTOk2Ge1RfQZysqRhJAyllWACwIJkvCW1R2oxOBbaFM69mt7czPOkvW8vkhiXxY%2BWtwQH%2BmwgFX%2BUALLV6szoZUoZO4Pe5Tsf25fKajauWoVJsIiHqjqkpwvL0ZVTqIn2BpH6tTuvf%2BCC2MltaoSVOkeq9cX8vYp3jj6w4%2FXHBudESefqO8GGI%2B8iCxdinO6RuNMEYHhWqNVE%2FDfh6qW917NiWbJ9tsFP1S9A1pwdFpvX4DtX4NAil00UsCxx8cdW%2FPMKKCNYzfJmumvwRzvK5GAvDeR57WiFNIjH%2FIwlnj2%2FGtEpoN9icDOI65yZDjxouVjT6rTPElzABUXF4RVpWCwimhG0PbrA8MTYJ5vT5NkmePB%2BESwQCiMG%2BIrduU5n%2FuYgeSv3Gacfo98SywGqDDYvbnDBjqkAS5BFfL%2B43wv29K9E1o155FmbY4SnQsK2%2F6C%2FdVADCEyWPKlHVmw4jcZfpCR5Ykq6HLdDCHUHjSiN%2F87Po0M7IYIazIodY83rxWhI60ZUsJsvMmxQxC571yFk5GQQjcRx90mY2E3Qmf9Ut78XfnkJsVbJcM50XiGofEC1c3uFd91bvpZI4rKW9L2Zpx63fvzdxdiKrJb3orWmtwWJ9kNaXgWHrGY&X-Amz-Signature=449fd8e29bf8692d600cc557c40f691dab14f5ca05393b3fc57e2abc7086c2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
