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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJOYDCN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDI40Dyu4%2Fn2Za3kzmGOdXNECu%2FsMJdnKwBx9zTciiJoAiEA6RGRxH6anBAIEbYdOUZAcU1nDARD2Wa6NisWIrUItJoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFLO3jX7JX0wqzv6MSrcA4vgETXv%2FqGgb6l%2BuiRROLCpSAOiDmid2GiwHEjjPmOCF5gQAOiQBjrMdOLs8gkyFArwyfTC8CcACTWAgNZ5Nwz%2F0JdzJ%2BAiheFckc9kEANMBNHgV3sS0mXzgbbPFObfHZvBjemtFG1A5oKeuDZgpL9JeXoK1LV65rdCJ4vA7gpJIoDxHN8usobIzJp57O300bzxgpZBO0wLJR751oRI3UEVzZbVXrcACX4CjNE6lcaj3m6hZhj6DhXkRYMN7X1LO5OZU1ysEEXq9gbLt0X%2B%2BxN35HlQXoVfCTyE%2FHGsLMd8qdjbpQTO1weksN%2FWhhh08YawHmYmeGUQd1N2xUaLhuPUM6SmpL0wfrBgONCG6QhKlbv6qasS87JRm5GmhOMdmCIL75%2FGq9vm8KXvy%2Boc%2Bh3cRmc5ro3%2Bckxzu11xiyVLfVDr%2FFU8TKOdokFuTZTv0mx84wo4URfRz1gYdN0Y1SGJtkhQu6Cyd539OZqFrQYuUDOhfdIfy5twPayJ3nysYG%2Fsm8jgG57QZq0XgmaukmjeyjQrz8agiPvh3TbQ7DbBbmXwB70UnwC%2FjZiC%2BvCVHDcXq9hJyD%2FFjUNuLddsZpUQOwmisvpo2MaYsFVu5wPcHe00mwLMfTfz5i5ZMNvo9b0GOqUBPurutUkLRdp%2BcGOR%2FXzteMLBxWHS8%2F5irIUu2dMv2i8Ld5yA%2BQ%2B%2FC5qbFP0ygOUd%2Bv8TiL%2BLikyXXbYKcV3pEiBBuy%2FIKMcB7wcX3tJN%2FXDtxh0xwb0VjQYZhsWgZX3rH32ScLK4Yd0AA6UAS8ejP9lAD09ln3BiyMLHdABgKPBt7rsvHz7hCbe%2BLfMO9vmUvYlGxmw5%2BYKC4rJJ3d6eXU1LVoU0&X-Amz-Signature=c50c706604628bd314276b7e6bc0766c22ab74909bd22bf70df4c000cc7e47f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
