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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677G6NZOE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIC4gZ1TKddw3hiJWlKWL3WgejUJ3WeNOyh5hO1ekw23gAiEA732MfC6j9G7qzJLli0Cz8ctwDdhrOdkp%2Fd1n3sTH088qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGf2574PNYj904BGCrcA8xaYrz30VbM%2FTkagi6RA1OnuczSuD%2BW8NLXH89uSkEQBBG9M2zvjxXGxhkwgICUtn%2FlzDX1G85jB5JMG2hdaT1Jp3dym24IwAxAR70fYt5KIZ6VKKtOedSG%2Bm3tWBhR45CCVlXkw1yaitk6vmHNhOWiM3YfB0McbDqysmJu5RhAOrlcwKvb36dazCKaB8oH5Vr7Usw%2F%2Fsdf7U56kSmt8lKWKRCtkZWTl3zEK8cobONzVg%2B1RJWp4K4fQFrEk1QOP5SZJjeXfoYDLSFAS7GMex59Z39h3MYlfO4tk9FvYE%2FiezblKltmKmf2oeedkziRLNEGgts6pVig7hTFhAcinfG8xbR1%2FTk6DwmPdRk%2FQuNMSgzgOrhTQSrO4DV6cMerlQbdhultDaFUhLd3WqhwzJIjXH148xHam%2FlbZXDv3NIpKgAZWoRsVdl7dk24T7KXY6mMV39zqTECA8TVe9tKpMTC3erak9Al5WuiKbh17Zin97oLKzylzcake49Aismhj3hxWNFothvTySlbiDajjy7oplGfX38xYaQ3TQ9wTOWcBN88sg2BFai7ihRdDM3nIAFdElYvup3%2BnO92uLRIbCkH3aCZ%2FdKrDPwkvF81jy%2B6cgotNsoJoAk%2BbT4lMIXbjsEGOqUB7xwWk8CRKGB%2FgzAmQG0UCgVFmcZ1slpnPSy%2BQtyvZu7g%2B%2BhalgAZ%2BaE%2FrXACHsIY0DZ%2BmO92v3dm5yIxapRPH5Nvwo2LEfelgsXhNWXw068oEH306cYLdF%2FQHblxWLymo7q6e6oEFs2Y1Pc3LTdc5dRu%2BRYMeBeilKCpOVhP8nJ%2Fa7E1oxqdJxb1wxeqzfubi%2B10OAY3ADtmtG7pj0D9Gj2A2mx7&X-Amz-Signature=183c7d571d633ded11ebe02b1b5823f002b3d3833cf3fc18aafa4a742e741b77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
