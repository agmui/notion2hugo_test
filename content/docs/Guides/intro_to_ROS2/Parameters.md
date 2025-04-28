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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIV6ZR5H%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTE7lbxaf%2BYPdXzJsr2yooUHtgNdT3b6vvXoKLj3fzMAIhAJvjvIYI6x8J42CYAdUM%2FBLracrv4CPyZB5gXGk0ytF1Kv8DCH8QABoMNjM3NDIzMTgzODA1Igz4i2DrF08Oj5zwu1cq3APawFKKKKogU9vrL2BUGcx6AAG7Bw5G7b5tK2YaQL06%2BPCeuBPuhUrPLoPIb2I9XkCJyIMF7H3dqpnIRwIvoFIClf5GRXm7yDk%2FK20JRujgG63Trs7am9Zk65VZ6SyjXqf26fg8JrWHXE%2F2WdQD1aOGwX5iKNTe%2BljbWBG9zLoIgds8MJJ5p9alWdfH3mlfX6gbt3irZfTD0SDjOfQvyb5Gx5BhJVIB3WUa8TOXBHSMat22yTll%2BLD76xP79lDMUB4WaD%2F7rHzc9Yn3hutvqX2mYRrmqFPJQ29s8CEOCuiFt%2FZPlj5FCoZtLaIy9pYCz3QnCzvXMX3oO9UfVDFpGWOP2cyw1bVEw36EeeSMJtZv3vTnTmO%2FlxoH0RSEsxigW7jwSyTPnkPkFIVhuaq3LciCxWUqbvjOFdvm8TCsqHfw9gwvfhBgVXOacDf8Z%2F%2FFOLlm56hBe4xkdZ7bCwDmtJX1J4unpxz8euQ4mLKFXcLznE6nB%2BiPBVNuDpEJQEQqHnDb33bWL2FnMUs18NjNfhSS4HsLUK5dX9kFVoKonsoa76aeMQrRbZIYKQlxa%2FaGTd6v9hevcGmdOJyf%2F5iKqhTQsVV0guPIfkRgFhBLTvTq%2B%2FkQUskLJFTxPhaj0DCD7b%2FABjqkAfaNt334MTzkB3Vf0fqzhhO507nBR%2FbO1oAU%2Bj5S1C0dVuouq5w0EOCUGUJIYI8hm5wZ4xADaVH%2FQ0%2FqGNJFLWYJyBU4%2B48A7detjDrNiMynKWJvTyp5AoBGWrybXOeJIpV3MCsKBmFfQKkPtKwIOZ%2B%2FkKL%2BCTQgPUYx3ceGtIcg5aREd7hHu5S1lCOZ%2BKzWl%2Fyln8NU1ad5vcdI6aYfQrnvs15X&X-Amz-Signature=f5709445159a585af17fc774f39ac6eec8db5f6db7750448527861480a99ff71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
