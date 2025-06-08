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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYKLPIN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC77F%2BtQPeEj26GkZF7vqC5V5%2BscyyR8K8Nj716eiYhnAIhANsLS3TiJqzFeHnfU9%2BHN65Ndk5mljgVQvN1c7h4XKZsKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxM0XmhxeSVHA75vwq3AO91kCNSk35vVt8Bb38kxNwadwvsEQTzI7LSluauYJB9TCYhVbDSBDHdy%2BEOO1XCNHtlwQs2BfxusM3uIVAsJBTLVJ6YeVfj%2FRts7ujgEHkg0l24k9Knt24ZjRF5lGr%2B%2BO3diQP1UY7MlcMX3eaO%2FGwDecJMDMt3VJw5GqCNVFe3ZMmfWtaRQ9zAbu7HO0xSV7zCCMB3%2F9nszoGUAXEAsBOdhdm03iU%2F30dCCdZpFXJ5njqgIqckm3XlsSaTdDsYF%2BsYVzXHmCcstB%2BXteYwPEkj3NSIjz4IBlM%2B87jO8CriYLnB9vJ2w28x2CuZrBtAek9oCb0hBHpfJlGz7tMEdRMeiLgFJJGsVW7ZAKW7l7VuGUtq19FTVmlkSdDAM1GjMrWuPChL6A0YgvJ34E%2BxjypAkgCx1iMVvP%2FPab%2B%2BqtiTd355MrQNwHbUPhnaJ4o%2BeUhPZvyXqBUz0AmksuFn4yX%2FVGwaANHu2FopHuKQdIMknvuivOn9F%2BoyY8skL4rw45SEtrwlcIQrnhJXvZdt6%2BeyW3pNXpmf7msQJGyPRWciewELOw6EW8PnKEFahtreTbNC012Otwc%2Fze0CXGCQbj1kJiO%2FgeYNvh5Hb8FjUCXg94r%2FyLx8Xuv8KTp1DDysJPCBjqkAdAC8H1i1bAI5LHhWe%2Fd9aQ%2BRCA2gFgRvgXqiI31LILQQ%2B4aCnYbFpvQ77XabVWSUrEG24fy2rBsSV43aCYWq1GwSpi6%2FX84npQdMdsX079S7CN1Q6KunBB34fCdIR6R4A2484CefUS1Dk8hDghILv26fKuK2W%2BN%2FMXM1n%2FY8dmk2BnHQfFH7rG2iHjrluOXfmH8qV1diU%2FjO5U%2B%2B2YUDdFFXFtD&X-Amz-Signature=ad74c825a052bfc7cf8c68859bf345e91cc21234edd5646fd2be5ed48966fb6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
