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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNY3IETA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM25kckqduJpLqyDnjWdGuoBWazfscLFRT2MEIA%2FvRxAiBj9UzzNLrZAd3SGJEeuzDSUKERsCJ4QoNm8QMz6qTKRir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMBzuO1Hce0LkN4GevKtwDoOlc3SGk3L6jLV1LLpcDRovu84y5kWoy2Aw6oiV5nu%2Bg06XCbO4kMVBsPc%2FuCKoB7sUgjFN%2FMpwwJuG7vWyWOflKDG2L89sViS3iqL6ONYtBUxuxk5MrV8gxAJSBRw4%2FXAEwY8Wm3%2FN35UtE7AvHYnK5YenPp2j69Wza%2F25J%2Fn2ldjsHc52mrS6XzEH1%2B17LZWr4V06jU4ofDffw%2Bssovj5Y30fck4ctc0tEawUK1ZRIBB4L7oRYi82L02kv5eO7%2Fk%2BQl5AZlKkduBrUi%2B2YNpdVpNEFI3h0xp8s3yentPAHs7CpVxVVqHHW%2Fclglmfxh%2BWH17JPoOyA5ndYjonAVPk91Vo43VK7U%2FceHYXUlkWnWpPSfyCLL5r2SMAMiimnZr5OIehviOLRXfHBWW7g9RzT6tdhN%2FHY%2FDwgcEOfX0V5ruV%2BGGMwty3%2B%2F23CQNef4Aw0zhKLQ1GlnVv6NQMa5VzI9COlQwCK8S97%2BGTY1u0ul39fq8Dnyae%2B18%2BFsDUXo9xMcNxgaB%2BDIvmZ7yRZAMAz6OchKEBDeCjdHsVHyVz%2Fcn1GfOrMjfxAkraGBKfm26aTu8LcL1pJzqrqnLk0YlwINnlvIdQBF040a5QE0H8UdVFRJHWWosNQjgowrpzAvwY6pgFPeBboynTgFUQmOVKjBAXw8maLKNA%2FRn9Saf8uK387nAwW2k%2B%2BhxtPG2z%2BAhlvPgbnX5Nh8ThOzfCUCzpl4InR7x0JoqxiH5SNXMcqa%2FlRN%2BViqJ4MECfM7H%2BNpiB705hbLQuEDKui5CvCJbQwvWr05UiqGCvThzHoCxbNhAxFKFXuxcZD2aeWwG8byicR0cRJM%2FOmj7PZSMfDzTm0WtK24Z%2BKtr5r&X-Amz-Signature=883b0788f41a55e7b50ac63488385f3abd1b3cfd0f7162c4f946adc2fd072df9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
