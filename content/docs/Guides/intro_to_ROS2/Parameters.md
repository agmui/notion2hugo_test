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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCW5OFZL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE23DW5rb7NVuzy68pT5ejnWgWcGq0HPQ%2B2JtM1LO1zIAiAfaxKADWdBVMkQ1qQSNHdeRGiIkZFED8%2F9HycssFciViqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSszVUEgcwvLXEXSXKtwDejKgHygFRdDmRa9%2Bh6YKU86HfXQHBP9K5wopmR3f0julkQlHdMUXuhnR%2BIQx1%2BmnmlI0GIxfp7%2Fp1NcsesWvxFyTscaQLbLTWaGLIcJEoe9r8xIRC%2FOIJQu7piHY8TAuVGMzJnZd9iZihXl4Qq%2B8zum0MxtA6vNCDfETTCX70tUJYu%2Bw8tnkvfipjHi7bmLKVzkLLkFYjKkKEGE6XALhS7B4A95CXAsiDKKFXLJlIhpl6KWhwckrewepewEFXRWVgpNTlAYqHW2lACen9Woh%2FvWRb%2FrwZyhQkbQZ09vppf09UxnNte8vKZf8Xs81UOixJ03EGgcMt4aL%2BPPXoqlkszlAICZqjsaDllxr98xhA8xYqELJHqU2ooeEsoC3IMdpRmWPjHDeQMybfiE5mqRR9JBVEwLy7GJVNCU4JLIXReCmoqTwDAwHYrTsDs5VKQtXBljBGd%2B4Bx55WXL5HGWUNDmySrq3sTK2hPm1eOAeLzj%2BG8ttCzCDNvW%2FddDIEAzYnJBAxSzzFF2QcXG2vfnxwLDBQoPuvBFboAJgHfA%2BHnMiNGU5E6oN1UJ%2BdMpKAnmNndz9oym5ia1ZGg2%2FUcSU3z%2FSo%2BpJGV%2BNNB0C8aIl1DhlWuLuwAOYVMoXd0sw7vC7wwY6pgE9Uo6oFi%2FwSL%2BwMdWVynKhya3n0lgKlRLMvwxqGNF2%2Fraqq4JL3hK1Via4dt%2BgXSvWDNOYmugGvTmZsj97j9%2BTsVGN4l3kL%2By4rx%2BGBYVZEzex9NN44lT75Wctuvl5xbM8iVhkg8oT7wVMNDS2jdLm2C%2FmWLUgHhREMbPQkSVDOU%2F0wd9gGffTq%2FWAKLlTel3eUqjAEZrLtQOZAVdoC972%2B0NMeXzK&X-Amz-Signature=0f30e92d7f5bf646564a79feb24bc16f1c7e2a3b78355f695299e3a413c4372a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
