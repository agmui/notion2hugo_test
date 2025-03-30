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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655I2FOHN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD0N9i0NrL2pxY7ulpKwujda0lxTTbtjSAzRrP8PXs8yQIgVOeR%2BAPOIcS%2FAONBqj91RJh8ac87liiCaQ93LiMA3rsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBK19kIdtBqcFV%2FR%2BSrcA%2FmqyxU%2BYbw2%2BzWQwvraYQNpT4L9MPvl3ooBfo5hKMkc2bP6oQ1uYPNtMqGnd2K0f0ul7emeEvhlT5r1TmeNw5PjEVC%2FZCNemyjTofz4mVZelk8sBREQReAAKEYEQq3WRqSAtHxrA7i3jjtNBGTvdmllStW4evT3m%2B2M%2BAlYzavYs%2BfW8tLs2KZFBD84H50ONbfY%2BUIXrGlbXForfO6UhywcLAQ8sWs9NQQbJ9yBp6QQE%2BpG0JkakAx0XefAVwSHH00k01ZOjuOz9%2B7pm%2B%2BBFBF100K%2Fh%2FasnqIxBua6M7xIg2ftHoqkj5jKnSb7%2FzwhEPUphuQmU%2Bc1BU8Zx%2BKLEiIuzkfynMU7ujg3JXdV0wBheXpY4RBanxFXeroTO%2FAFbhg43%2FR%2FOg8GPSLe4ctU2xPzq7u2pqcW0zWVXfjvjW7qeWIG6NpbDdpRI1qqQTReoqMHWgFqFHe6Gm8vyPogk9b4gk%2B7hW4KMoA2YqhZMd2%2FmX%2F0OTKoXF9qluuBMg0QYJgraNA89uC6XUOpudQL4D%2FNPNwtQ%2FrjMy47ZCd6G3kS0ldRrzmTkcS69MlHti9ob49%2BVvIiqYitLE2yXokpTZSh8fq54gRUpoqtlaYw9ctwIjf5p5iO6QP144F8MKnTpb8GOqUBoCUQRkwNSSfzsO21havKmQQLpvDztDrvg9Wmu7oG18KuytEYduuSxUW4DiZGD6%2F9mklsaxzgO8DHI1HicBRQnZpG74XIe9Nz1MjExwsOynPcJhFy2r6RhR9a71fr%2FY7hKgw5p3PHhV3lORo7M5%2BB%2FzYirU%2FO%2B07QB94jzNus7eXJkjoQ2MJTNlVGUjnYqr8l96QwmKzrzkWXEt0Qp4RF2DyRn3sC&X-Amz-Signature=b64f71b0e0466e711b934dbb5ea4846be9d443de3b9148965210cd6132cd3b60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
