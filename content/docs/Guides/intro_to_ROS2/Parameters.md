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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG4DSNP6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAWxivzveB9DbkLx0oyrre%2F4P%2B%2FXm8ndqOJ3FmW7zoO7AiEA5PG1vm78kySzKQGjlsKD7zrwdpQo8d%2FGDrRQimzGGIYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXd8pK7wYhZwf0JpircAzN5OxUzcxVbqvRXn%2BaEE25ZTHOYbjVFCYkO6Ou%2BRjRZ%2FJOr2JHtnraYk4zxBRTEXfdh65LVVt%2B4OBhvECVLV0Kbo17lPS2d5BuyvPmhRzfDRIjdgqQBkebTQdHfqEJmr5RF3ZPwQ%2BoJYQTWVhK5vXTeCt4nakzJc0km%2B8Rjl43SHy19bBqcQl0jC7UJV1wB2junlWLwNY75JCOVG9eF4pIlfv3gIuXxkvnyJIcKj8k%2FK61zN9BA%2FaWfhqDGo0GJS5JPQ0P3Xk6urU%2FEzCG1sSAhO5ZvtCHI9HMf5xVF4lj33oXQ%2Fz%2B%2F4TW0aUFNscqcrZcBy04IRNKT6y4nANLVBjMVG5CrKHlyfp1AIRfTgOYOU9eVcxtvMmgTChD6XmOSKlc5K8mhZILVak8NksIyrYU0xe9dYtJrKeCt13NgcMSiVtBwqOArdRuTnCHZcs5Tpxo8bFz3tKtRms2iL9b%2FBTZ2edxGSldKCq6NHTIt%2FfKZpu%2FG1bIsv94Hptu4rq9SDTjGo5Bh0fRgLhQbHCN%2BK8obg%2FUiL8V7lrcUstOD6l6VBnXEUaBCxi8e7X%2B9Tv2LiZmB%2BCOA1NnqPLkc9smgcQKDO96Wyz4ZEOUIC8fYtDuJ5aitTcA0RMx7MgqHMN2B%2BsEGOqUBsTOYcseLKLm8amXRGCJdissXiOlMdP0B8BvARaefuFCEPx9X%2Bmm9VitZ6peIhFPDQE5aGfUj%2FkflRzHIOmvlVrGSSG%2Fr2q%2FEww71CI36j78l0QqlB7Oi%2BxWo05%2B7hQdyj9z2nq7n%2BH%2BJXK7DSCypbBqCqG01K%2BcLu49sQZLyAxNNnDfLfZ6ItwUhWjNkqnzpk64XzxLLDuFa22oEmIFY5r0DSYh%2B&X-Amz-Signature=44842fb9decd3b4c4e20b9ddcc71672a8bf814d9f3e3750d2f7fe5e48672710e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
