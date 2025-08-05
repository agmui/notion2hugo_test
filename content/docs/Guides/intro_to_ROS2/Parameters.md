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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDWSKYN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCv3rkh2sdsSmf4%2FnID4xkFh%2BFbToitA%2F7i2IDyQacuVQIhAPrO3s6Tj9dt0v6J%2FsdRlregcp9y1YNsMrv%2BVOOqz%2FH6Kv8DCGcQABoMNjM3NDIzMTgzODA1IgyLnrvgap%2BlH4vmF1Iq3APZdqDsjHv%2FsXqyEWhlSOprK0nYYmXNWnKA25QyPhkRR0oVxquin%2BZ3lmtJ4HLgrCwsY3CJqjiKqxBN%2BTY%2FZZNrUjETfEOeU%2FHpM0T%2Fg9pVo03fHU0cX5GQnHiIoKKfEZp779NS5RWbt4fluMBKLfsx4JPwTFM474kjNwcVUyi4F3KrYrBJda9epB7PYF8OaYZ6LXmr5C2x9gFsFdL0BLpnHLxxaD3g4GhdD0UiqEwKfXLElkKSvkhX%2Bjvia2kDks0OPWPdsiJNrN6IKgNSTP0X9Ea%2BczxUAH3cms5ruA%2BOfAQwVycgLqFGV5syAONSdNTvyN7F7Gm5Y%2Fkut2br4qFzRqaZaynWqH6dJXp9QWxVG9FHw06jjymp370Tfqdguu0Kzbqf%2BSmCLdZdPmYfS%2FIWEOBaSg%2Bc0c4W2B0YFHGNWReZtNdkJUAdXfc0cO2FR0QdMq%2FVkcaLGlUSsnQ24yAmSt8xWyot6VW08jjt33%2FQLO6W0HC0c3WBI6RAQb2%2B%2BaFFxeC3DQjTE2NDgoQFMUfRBBuxJjsXXSlV0h5vTo%2FeydPne%2F4Fw%2F%2Fz8c2bjaInHwiRi9KvnfGBKH2RIXoJp16jpp%2Bw7HTxG1lTi8uN9Pd%2F8%2FQss7HjpHjFyU1JaTCQicrEBjqkAbcaavkBktKONcvgxjp%2FQ82xdv1KgtU9KzX3K7ZWzqJNaBKjVg7IGkOYmluRnG6ARb6YaoxtZxGFGX3%2FO29VKQ4pbNp8SISkiNm6YPturheaJccu%2Bb5RjFyz1hgvTCIr0k1GORN9QXlJ6CfpgNk%2BuwUeCYvS7MVepAOqwgkTVa5JvNUp0moANPKJrxg%2F05%2BZg%2BjfF7t6F7tPhutAKEyd5crTQoQz&X-Amz-Signature=3e2f7dac3c6a28ed3fb5f79fde6d91af74cdfc9fc98af751a08fb56af0c83f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
