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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5KPGRO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKrf3%2FZdtgLB%2BviYdD43Ozvf26apub0W4bsX607n6FQwIgUZXCw86q4q5IhrpulpyPlUnLkouSmlK3SLJVhRlAqlQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJwMedZyuCJYcUz25SrcA0VbFGR4mB3hpBgLvFPjVuHfHgQHLN2jD%2F6ehp%2FetgTFyiiRWyGTl7p6cioo0luX8Q4y%2FIywcILreWSFy6CKl0FOJO%2BLeBL0PoH%2FWX4%2BQvee%2FtsKxn5fdEFjUrJSQF%2BUkz9bgz0jjczRI4vOWdg2Nx%2FVEByGAoJx76DY1%2FOImDME4MH5kiUs8gqF%2B%2Buz6KjXlst9Ue6fzgY1UaeI25H%2FIRWemz56os8Tqy1pydZCuDylfSq7V08XF1kcNzzLWb0wAyQVPk3Uw7KGVNHvtHBVZ11a3ubcVj7Pw8zkH2k8uX6c%2BsWZ%2B%2BuqOm9sNZUaCFjf931Q4bL2jAJF74Yp52dqbnBfVY5ZEWKeUGzUhvyNKLl01z0AK5fQ1ye0iamRuQ4X%2Fj33W%2FjNe98FNAonF6tw%2BQadBuycfXigeEW6gEJgq9lIWk7s7usIxzwHdthlp5oBmICsq%2FPYpzmizTQTedn8efzTwloyKUvrM%2B7B9%2Bi8ZXw8hXMRuui9fkF2SC%2F%2FMW50JfoLJ46z39ZWfUzb5Owan%2F2jyol6U%2FnXkhDUIs8XVK8b3eiVQ%2FYA4M%2FeJFnyWMx8UpMDmm26yaKMooI1%2FYARcO3xsoRx0ee9xg736NYlsOIg7tDTT9NkZuzw%2FIVrMM6L9cQGOqUBEmLartxZTDRv9sTOxzlvKzj5LGpzygOf143KzJEH78nGPgAx5AsQzjcAoyv%2FKG68tX34TwFzx6gH8yUDluEkoEBZdnufAfYPVHHBO%2B9J86CYpqIu%2F7TmzhdOHjjvr12tbvkQOkReya9Nzs2bu1vh5p3eyYUM9d%2BLKBIDemC3qv%2B%2Bwcn2eXvDAruhVldd%2Bf66k9hVgVvrD9YYsr9weVLyEEQbQhk1&X-Amz-Signature=d191852460abbefd2616555d4f986061c4a676c6bd0044fa152864c5307491ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
