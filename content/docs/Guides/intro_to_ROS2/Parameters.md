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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEHUHGM%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC5c1v8LqqFyMnm0ps%2Fqhb51bazPmifMa0PrqeEc4R6uAIhANjmQNO4fRKxKu6M093B7yy7QqQqZSFlhvAy5WcQgUcbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXvl3vTPxTyb5ozSAq3AM0zsSkJRl8%2BV5Adtj%2Bz8Kvtq4dc1E%2Bkd8Mm%2Bcyzj0krb2XJZfElQxA1xcERwNXVlZRzH0AOsusB23Pfjyyywh4%2B1rG9UYkhL5yMGojyvgLlGPsD%2BLtxHZVeDMaFqZV2%2FjALYfU%2BKrgbgSuKWPzjVdv8wnoSD6WUfMslu%2FxF0QGHAD%2FtQjTtJbrlst%2BNpGyLqSTKhyJsfzH99LJnmySnLh%2BIT2EFB5O73abtJBXO%2BzTd0URh9tlYP8hV%2BlYBlMVmlngiFDyFz52emWW6nC%2Fml52naJLPM75Cb7TQ%2FnAsI90PcaQRBi%2FkhpVasqduNu1rfUFx4olxqb%2BXEQVLwAUw5tB9ru4osQEgZ1s7OWQIJrakopvbOSGJuXWyf9P5NenXlLq7L0vklIYnrDsad5wvBBCx458I%2FYIN4U4mNV7gyCxQdAIhMalJYade9mqTGWCZi%2Bv%2Fw2aW5lsRH0SDTWrjvE81SVkbhI7gs%2FdS5PdmBdTka%2Fq5oUk2Cm5rh93mzB8yezBB5bX%2BU9DVNVCt1XvDbjbNeLeAMoYap%2BATxOwCT2yCTKF%2F8bClrd84taCaeXZMPdIGIM5RD628DMJiSnThlYJPjRZT26Z%2F33r6GNzee2l38qAiE15UVbgyDhb6DDrkoXBBjqkAV7BHWSDLoOojybhYKoA%2Bud8b6AKONTM5XP1I8Rn1wghVa4lfSDFSOwY2IC9GBzBz6p7MjQAq3FiayyeYujvIrKd8KRxLTixHwzEy60Wzi5RQiWCkuzc5KypCjlRhawIaX6tf1%2BGty88Q36SxBMnDD8ZXv5y5vDqyG6FeM4DmQoCtzhSKnwHTwuSdH5vE9n3WrgVfBEJUhCG%2BOHgvixTW790HOy9&X-Amz-Signature=bc306ef28582836be67e9fc5938fd7f266a0904674034e41b27d4e5d7ac1796e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
