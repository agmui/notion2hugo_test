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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA26RT7O%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCAGLYFjx%2Bon7hQSnbfxTCIbbG8MxX88lgqXEDEcgc8JQIgE%2BUUbrQ%2FmBrNvQv9YZ0dSkvNDJkyeoc3i2gGvrwQdUUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQ81TZPUjATeYJ7ISrcA2MeodFkUjtbsX2pzDzi0X0vQAuFjkbjJAhXRfRxy%2FNUQfaTldG59YOLJ7z5v0mpu3YxTvApmbPR%2FaqxrwjpvU%2F3N5RrTMwQ61TTSptnN%2FO%2BaBGqbHz%2FpPY5hBNAIsKjm5wuRbRFK4mJEax%2Bd7%2B5Mzy395pLeGpPQAjIE%2BMWmX03O3lOSgsywLF6jVlS8ciujyyws5D0eY4U4vwLeYjgOws%2BZaasn3w23JDWXrD1wrYxYNKjGwBOByO7jYWdDQPLIVZX6J40gNQxEPLeH1RijDWpbvchiPKtOvd43u8n2Gus7D3k6RunMsAYx13qdzCYdVbinCtHWp3YKdB1z9QucFRv0BmJ9kXHYeolJy063qFWrg7TbO5XaoCB%2FVige2sNgFS2zuJhTuSZ%2BDo4qVPm7KKfy3sGvQD%2F7J2p4c4KusskuJTNvRej2iNESuqN25xvnzqeJzrEzyYX5Ede8lJnOYE1n%2B3ULHm%2BkERLASdMbe8iH9ViHA0q5LZxiCK5qwCOsHu01JEcqLdqyOwee6mlM6RnrrACqqx5CRuIMIYY8gHmYge1beEMiJEAryji5pfaVnjlu34BqqMsvZpbB9ZNCvjAQvIahl2KRXr9u3IhayfYR6kZoBLbK2jC%2BH3TMIDn9r4GOqUB5uuPRulRKG8KG6OWOzu3s%2FCZZRq5MHhlFbc7JqPGZ6rZHHCYVCkS6nmHsV9xYC0EPetBY3IyQ7CTpqI1PmonFOoNe%2BPDKivkPi4Lv45M%2FW0CSnXxdtmGEuTBK6nFSKuGJSshnWMA9kFosI%2Fbt2Qotu16FPoQrCpnPWZ7I7rSZAx7MBqLtNOzzFDlj906qZ39QJ9gcpn4xM9Lwthky0WLnJcj4l9e&X-Amz-Signature=7f221e2fc8a2b765513c439924f780339d35a34033d2d0b0908398fe09ff50a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
