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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOOQYQF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBRnXK7lPQ58pCvSL5clssTDIDKRgRIBnjWpyfmF1VOvAiEAoWY54SvlEup3g%2BNTx8TggKhjvbp4ycu%2Bh%2F1azSJQuyQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0xDCI8bqicVOIMbyrcA5MJSUcU1N3p8hM4fiMHT9vPyZ8d9QiaGj3qulOqn8%2BwTnWpWb6ywbAmx8ydOekCkZau9ygv%2FJZdIq4amF74g3ZlHktC6VffjVrWkEp1N5kzwor%2BxRQVKG6XlEWCYHLATX1gwBIOUgc0W8I%2B%2BVj9hLhAnWklmsS%2FcMGwIWS2TXtehyWWoxYElkaCdRmwvOCuotFol%2BE%2BDeyy2axyEHabIQasqnInljEKM9vymrVlboQXLIWFoEhfljPlSxGoUTBoRsRyyAeuj9636fa8LXbLmHIii66An2de7YZAHW8PxGACuLvtQxh3S8ZRoeLHk6hJmFYBjXIXKolwCtBYABjy%2FbstNCxsA9an%2BhmFWa%2F319K10GbjN%2BfcbuOl6bPuii6iE1J0Z1gpzD2QwKn7L39iBRi6jBdspFqydX93afrRJ0QngQL9IZ%2BzBldRnc5kCp9TAyHqQlUQaBJXl%2BjEb057W2BJiO6kxA%2FTJCV5sFWlUXguMbPglz3sx0ko2IA8FMw9BCAAENYNbX65E%2FJxXPE8sWn8bVyyvBh63WHv0oRsilZ2GmekqaDk8k%2FEMT%2BUxxXoMy7nDiZ3ZQCdJDUo4cd%2FLYBKC%2FBEq7N7OhfKg6gIv5ipeOSk7RdbTvJZSHO%2FMIPr28AGOqUB0METaqZA0ipTmN7CC8Kv%2BClHMfDWDEv4pkgzrcP4Q0PCMuIrtJsXYhns0I7d95uk9KRAOr63KbOGLCjtHn9WjJC2maEVWWX482rKXlKdaAvTK1Am2VA2ymucQ%2BNzPvrv8KfeFBEnn297Cmy21w8eVSBEUPmWpJ333yV66BYA8cwT1BBHDqEye7HKFgg5aGbA%2FLIiPtQMhHWxpnT07gIYYbOax0l%2F&X-Amz-Signature=a49b0017835e8097680aba8ccae20f58eb5569d2bf86d08543b4667584ae8f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
