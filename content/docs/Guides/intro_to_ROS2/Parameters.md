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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LX5GE3R%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBn6OPTWZL8WdrfZ84HIbl46uau3Kn8oV9L0NEFBiek3AiEArkKJf89kKQ72%2B82ZoLUyw7L0uMytxb3ihEdC%2F5JJIfMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqoRIQMaaq2CTeHRyrcAxI5Uxu08oqGtvrXBdM29r55oYQ9omBqVr4t4EZ4wh7jf7xiocsQS32BuYEnW9qnIM388vWJinGLGZG%2FUItw3SP0NQCsUF1eV9paIJ3VJUTYvWm8TPk%2Fvm5xrS2RndRdXprAUrPtTYF%2Fg06rRc6LXVxAAvrl7JkaURgOHCZvzK7guyfPz3Adjzo%2Fa0J715CXPgqH35swLfWOWeq%2BS2N7zJqJiHJ5owhcdEVLA%2Fa89fGB%2BwJJsGIMOyIDs8innbvugmsLvXLXvin4WEFlXBijigiXr7Xv%2FFbVwkRC0x1ikurtI57CLUbz3WnTVB94WOS2gEge3TN%2FV57%2FZEuJy6wyNELmrIWkMl8x713nr71BJS61lPYWeOvcd4EiOONfVwpGrv6CXXkdHICWhq298uXwgc1TzcExKXNRJX1%2BQCPGe5l77cdZomEkDRE9YMeg8%2BG9jFgbOrvQn2WNRIRtMhz42G6iAojVkMvzt827RmuQtpegVtaEyptI5XXbSUS0OjL4qzZWtAcBU1EyYVl9Z3pu1VVnwsZTc2tiiRKfLBpCooWy0sHXObmI0V05t7zvsF1PgSYauXs4ApcLY13h%2Bg5zuFY9%2BQ44v8f7NT3i2NCPd86RVzQbyV1FOzbMGZFOMLjos78GOqUB%2FiOooXl4kA7fEGg6uwOz6Lhb1YjiZ%2B9W0ACW83dYQRs52inWdDWX92DVR4kehaa1KNWYybSPcwiuTJVQCMiOy%2B1leWrB2IvEmfs1hluX%2BbhSjJCitbduYmn2cERGNrp576CrwlcmL6FXZdiv0Fwa%2BRnlO485G17QNQ%2BJbAOk6mBtqT2o9td%2B%2FQP%2FBQAUaXqee%2FotgAnMLw9yckkki2dePs2jQdmB&X-Amz-Signature=fff103246470cf5a89096cfeb05f80856e75e7d02cea2a97f20382a3f1a8dd65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
