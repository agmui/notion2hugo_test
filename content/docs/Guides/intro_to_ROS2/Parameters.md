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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4W5A2U%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFk%2B3uHVdfGs4UaeQLYI7lM4P%2BHweTZttIPz0sbn5rJsAiEApKJ%2BbLeZQQAX%2FR6fFk%2B%2FcWAT6mDcxL14zhyXsWemAtgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaGhyKfAulKvhmbHSrcA69tL3cJhNz6W7oE7yors4BemGptld9hymgXrp5x7JprvY%2FU4XNNiUXBiI%2FTSdHzNEIj4cXBRfAfRF%2BmQJ9cS6wbkhUeFQIb35oJnrjXlPz8PQQM2tqawQ0QxlHiMLf0Z7%2FuDII59Fg%2Fa0PKvrJTOLVFcvyBkLq2VZsLPGMzEFMGktV07JxPhQK7N7b%2BRQsSdO0el7RBy5jn6HLGY4GGC4soygsU74Vvfvfr8XsmOMybP1evllALZkp0Dz%2BNZMTCNLNoQbGQ2ZpJG7%2BBCC2M74qNZf1KNiJ%2BUQIxWwvVYCkwjQGkIFbnPRw36oylIVSod44ayEqd4hJY1qKHL6eC%2BgQjdZRWIMMih7PPd9r4YTYSCXFVgnv5hkOiQ%2B6RZUoQEZnRzfD4e5p6VXtNuJ69w%2FIKHk7iiu38i0pTxWa%2FHpCsYlmzWw7Mg%2F7QrsDmZx2%2B6OA2wnbthjdoduvHrKK7ZQ0kzDBH%2BN0ic0oC%2Fa0GwojG1c6eEcaW6QA9mSUmiQvIqolpwu4GEWI9YDM6TBSozBhnvZa77ja8bJDfyD2nYvMhGFKjwNUkd1eQdq%2Fsq%2Fuc0BePyeLu8BMi1ASHHlb6XjryUOkkiSoTE2ug4bXNdB6t6fayJTcc3SFzViYbMK%2BjxcAGOqUBbfIl3fB1c%2Bo%2BNGq%2BhSd%2Fnb3Df%2BkA92YJ4u7wXLrOegYiyrMkrxjXiJqWZdQROSc13ZDNMNYIZb%2FNvtEnaHqFcZhMOYoA6CFaAcPcK%2FekPvuz9529hYtXCwaoFT5mFRcL5KyBf3gVclF%2FUV%2BJ5xqH%2B4xGQjVLWzJtsJL4H3g8iughF9hvGsyRtKEZ4GJHdXReeAgXztVJVz0bVasmyACTsv1QrUYf&X-Amz-Signature=db34bbdd6dccc6cb22da820cfb3be16259cd95f52094a95d1c10795804bcb57b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
