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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW22UOWH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCpmXnH4Rm2QwGgHp%2FRKW9KdxaiGugPCEICHucnZV9xJwIgHQHdLW4vVTR%2FrnIa8SXWqofBDu2qsdM2izY0grdLnZIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgRvT5sY2wgTmKNNircA3k%2BTp0fuovwIW2JGV2jCsBkPLrrYPKkqBYjiG9Xyjuij6bEPBcs95uC4%2BTpVYmjK13MJexBIV5ID9UU%2BRTAITKKqoYgFTFL1P0JvNkBdor%2BWn4NEOFDsvVhueau15ww9TIDfsAMhPgQDBHf3lKyyP6FYmq%2FEh4BBz39w%2BCSPOO74NyTlV0utg7I8J2gjt9scKwHOELyHN22F91tsXC%2FdM3izOr%2F3mkywGtUVvg%2B3a4JJZ4gw0JcLvi4Y9jaKheQWxLR0GXbhgHLM43rGJ%2FpBTekYbq3L49tLEOAZ1Bg3d9tolTlL%2BEOpq7lryq%2FjkgrRRkrFUb4QjxlInbZH%2Berv%2B1wJA4r%2BAG%2BsH5Sm95yCrGfjiv%2F0fa6J5dZg%2FKqXZIsGXvcE%2FVtBGHUOy8Kp9phRxeqCvSfkRDd5%2Br5rIl7eDCbR6RSTuBjPYbLKJgON7Lw6MTNLOal4iieiO4zqySfUljxUjHnbTr77TMvgaxjyDt4OtucnyK00pwmD8%2Fh5UZZwkSmonwGmBcwfFjLjJGfLBO8O8jG%2FSFion99e6b3PvLhHgq3882lxqLJgaLRGD4cFCxpdTxgnE64zBBuf6hOIOYew7wQzApO44wm91WbwuGqrzAS8GCp7bkQ6TwSMOf48r4GOqUBiH6iEsaMXLTuY64RM6wRU9LWswDharDeXlb9E%2Bn9nW8rqa5wlx9zgVAg3Kl1zy7jUMElQFajb6yoYesKYRTUOaLQMdqCnkCsahHpzhi93xcX1R8tNpFV1t1qrNG1FByWnCO%2BpRsL3OAH3a%2FZxo2qycRAGpG5aQMFkWm2u6FgqL%2B0Im1IVO92oFVN1Aoml7McFaj02qZx80kvujfTLWkakoXen3fP&X-Amz-Signature=4b07f15b546f607f0f9e35c42c3eb4fcc2d336b1d50b650188c2a16b022ec541&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
