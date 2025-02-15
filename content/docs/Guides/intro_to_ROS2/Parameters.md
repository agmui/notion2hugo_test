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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZQKETT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCRrISGB%2B17qFamj6l76g5VhD%2BKE7husMF%2F72Xx%2Bd3YxgIhAPe6ijmNAsK3rQ%2BO5b%2Fa8p42BeagDQpBC%2FXmO8bYAAfPKv8DCFAQABoMNjM3NDIzMTgzODA1Igwe3%2BMrfRKRz5ipfcsq3AMccZygwS5tlAQTV9zbBVTYLoXuev%2FH6Gq8JzsdPODsx%2F23jjpxeVONrnjpaTrW7S8JVKrbgbcZX1JfWg1QFnCa9ws%2BWMvLn8KlGgNlgWxdLsk8sElOJOjiFdFcx6ErHr0T8tSSB6isfS0tJcBOANR44s95pdvomfR2wcadg2f36g6aJxtIj5xqQau9BdmpuwcgNeV8jf129lzxsV47VmAgqmC23URcR2Kg6GlX3JzY2Owe2LKSFoMfRpYv3lj89ipLbs8USm2kNKMt0M2zOwqwUESijR5pFc7zko1vr%2BwLbzNyReu%2Fiu4WSXgm8vWfkTyXz78nP33vzOMBcFmE%2F%2Fd1Qr6ddBSH9ZHx51PPq2IsC7Xmh6mu98mgf405nJpbVmyqa33jXs0J%2FoGxP0Qpth4JQcAXo%2FwKj1citAZyke6Hue5Aa4I0eXT8PIwf4lWkzQ1tvategWC9BHYz%2F5tLxHMYrOUxAAbgIrI68NZ2OYgota7QVC%2F%2B8auxVrIrHqupr93grrvOXfaiqyyKohD8ZpzcU7ZKLvZcGh2WDMVBJR7wlfuupgi%2BMwu79SSPL1wo2V26OEkQJWCSAekCg6coujrMZf5H%2B3naeDO%2Bu48Dtdbt3C2%2FUlnMNPsV72YxLjCgrsS9BjqkAXg1Fi9EY1HojcU0ExTRbr3o6ma6NUybowXdAF%2BT55oC72dlOtP5z3%2Bqt%2BMBYLPKmRtaT1WJwcWL2s16lra6Pl5blRIu20b0CV4gFv9dHsDEy6VoDoR7hV5HeKcQnL5w1Q2GVKledAGctsoOZHmvDbKhPI8tl9PSVvb1ZgF2jXCRRoICffUOHFdnJwyflg%2FYKrzvh8WELp4RztufHCwt77dTM6v8&X-Amz-Signature=2b71eadfa28bcb36f01808cfa5d35dfb1d78b984e70c2870f307e3374745576e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
