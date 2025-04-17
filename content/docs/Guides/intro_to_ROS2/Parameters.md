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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOIDHDSO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkGrdVSR4ogfycdqkcf6Bn%2FTjsiSJIrGmqlSGoFlfLCAiEArlKj14BgX0S5ou0aWVbEgzFa9ASHjXeyv2BNQM1D4kgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMap0xpytYP9VVSEESrcAyglcEDK%2B9d4vo5FyjwjxG9XG80k6FcTf9uMsYeMRJlqXFtAlAKs%2B6oUtSvDH%2Bxnn1m5ou6hFxUm%2Fa8V9lPA8cZJ1xUFDAD9RXqvivrkvVWVq%2FVErPpdJFuHbbaHe7sDBKbk5ucJq2QEN1065PZrGXwlo9LqktfrUtEI9CQPZXUo1BlmlogzciI8gFM0sx7RInbeO4aoYXCVGSagoN9goqOvKhsANhjpLEwbXiPXL%2F6YUt3GE4zUF68Pt3%2F10VqFsRQpzz9owkPBtyqtB%2B1E5lSFYIBEK6sqgIEWm0Nse8ll8N1xO1iBEYrMi8jVsa6l9vPThnG3n3foKABe0IGEmtWV4u6YxVi9rxb03lQXRdhcPneHxqN6LXfCfjtCY6NOsZPvdpknfZQRwxwiNnX02YKxmbYO48RgKLMF2t5b6xDx%2BNQkKr5Q5%2B3BIpd6WViTVE1npI%2FfwC8w%2Bp2z3t3Gl9xXhi09UNhicAjJqLgJR9WwAemmha9rLz05htfrCZRyssG6jQXAulNq8B3VBUkNokaUOCwy6hmzXgsRJv4VO4ASS%2B1NJaXyCs0PDpyGMnyycRPuD2v2Jz8kJS62DEhfCdqVN9smlkEjmPGsGbwiMsU%2FX85XtXb0mbqGpQj%2FML6vhMAGOqUBMnJtZQhxbEP6wRNFlxtPDbnYJFQQ7uw1sJE645XFu660HNpQRHrUOZtJ%2BFxVJJ7MjF%2F4nE1J7TEWp3WSr9BbxsEB3cg6V7lxrm22ZWXV%2F7f7wJHlc%2BGEMCvpEoYh2eq0dAPo7Ijuw3pwaN5l4ewGFJ%2FhI9VTpZq2%2FFKCmbmbBT4pQpZ7D9iAf%2B0MRkOxiE0QGqoPa76ol8YGhyj8UKlksUTw%2FXCQ&X-Amz-Signature=6493c3b476e15bc30b4cfd537228deb1421d40422be54ba249d670ae2811a321&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
