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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWJQWG5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVNydBRR8RtuBVsTN2zpGmGxUfiT%2BcTOHO4TJByuDHTwIhAJVn8mqUKxex2hMspfDEgGUCRUBcnMsHkaLsPnqgH4UzKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRZUl2nzPMJpz0zMQq3AOU%2FUwAfPKdUxifw82fTO1EyxMsPRG69Xl1IZVcY85kfnh3OZzcx78T9dOCQUE5Y%2FJEg4sa1FRzulJCPEzV8BdoMyoenglGNcSSjelMcQyV45NmL9zT6f9pOoV8HT0F9eMkssaoB%2FzxC6N%2Fizjy7bmWAGvJ3%2BvChbTFSG9mNc8BhWKIDD%2BDWPq7KgRoMQGrAMbfrA67EJZyY88sOQpU11GZY0kCD8cKD%2FTxPT8Y2Xvw5eXSgCV2k4%2BtL4n5sMsBfjFu6TtbtP2TmRVWngWgFRQ9ngCk%2FEV1x1R31R1ly5N%2B7FHhUJj1Tlkr9g2CXGj%2BKNtjC35KXS4dcC6i4tyVSoxeTF%2B%2B1sbvmTU3bjqZ9Z18ZCdtAF2nyP5Exf%2BiY%2BeXdqrVZhZLGt3pcae%2FQp6prfSXsTy1WtUCd9ACdviOe5CKoG7DrA%2Bsyb6DYArt7U%2FUDGg0PdCwCGfaXs1USwb5z%2BTS9apKO%2F81JvZ715r0%2BZ78z2MDoixcRvjMbJULMklAb5dhwtpUEzErSzQmJZXC9iXmsdDawL6Ydw9mvj6UVJ55%2FDvjrojnA9N79M%2BnYSh2SoarcPMSRt7K3wjXcziFm1Uy%2B7670xgkjtZRbAcIY%2FhRkIop95S%2Bl4diia0tzDDRra7BBjqkAcBQ3JMTRxTM7YuIHEcBqElRnMO1iRjW%2BJa%2BJlp7N%2BdvjfvHk4%2FNhHGxJqz4Jm1IMC4w5JFpgh30PpM67BhQ5kbiqf57h8Qnn3ySh68opuLMgT8eR%2FtYGGm5l5MQkyvsDowV7CzMZkMq1cNaPmOf%2BMvHCqg%2BjWOTEYbz66Px84BrU4KQvd%2BicDmZFs0vvYV4xvkQhrucXhkBEGGVfBiv3mNgHWLn&X-Amz-Signature=638994b27dea2726cffaaf1c88c467dac0817134bab3fed835ebb66a7c77c9a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
