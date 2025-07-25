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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK2KPOV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFM7nNOkmok1xLYrQ3niyidH07J%2BlDajzTgfV3SU1xOiAiEAl2YiRa67eK%2BSZ7x8dt1vggkk71baNs5eqeonbbULDQIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDA1%2Fp4lBLWzoCWoECCrcA3xe40Jt4RrrvGmHfG%2FwbH%2BmE92z2U2nIj%2FuRthGaFmMlhHj%2BKGjelwtHL84avYtRDY0MPxfozuXjOTeVMaIOJePORbrmZ8jZVPzSm65RHA0lbFsca0jQSAZYItx2jHRsnCB%2BIQJNX0npQ%2Bz3%2BUerxGmo8wsYaZI0MqFxElE%2FWsPG9Qd482MOXeE61Kos4e6dyJh6ijmFHysXF3FsExbe9E4zaWma9zJ3xc6VijjeaSVujQzLQEKavbI139WB%2BktbrPosoGvXjq3qKdhNwMwU5EdIyC%2B6zLXYgdao0VK7PqMJiMhNueGCA0TKMIT0GKlEpstfnoQ6dqsuTaoqJMWyhb2KjTtw0Rmqp%2FNLpqJyTW61Zcpt%2BdAkq3RUvEpgVydzEUhrKxwC4zEcImTtq9hakpV2HBGUbxKYmy8MWOVmAgadMwzuYy%2BrtJkva0HNmYsMQrKPgmEtENlqwRbh6gAH28ijsAnHX%2B5cUiAJAMkeZe0QjOr4HnzrxpBEKaqA%2BdX8iKE%2BbsT6jRhyJSJfuCM13SIGEumXys00u9vj2P3diDVm8bGUewBeZNBUVxuWsQWpV1HKBnW8u6a4utmoKdcjiPDpJMdzolhCfM2%2BWUq1OaZ8psqZwf1zAosoLSwMMGcjMQGOqUB1tP0zFfm1ZorBYUbH4OyOYO9qWuVfV3NuUmJrJSlQmikOzWxXKc1Zt7m04rp15wh%2FN8e9fVdraDhsOp%2F6hiQOlmEpllr0h8tpB0AUmiC1b3dI6wMsYTIVCfNeneb6Ygcsz1ojvj1B3cCxPsNmRwr10lvC8qs2aZdr5YhwNtxOzAzr7Sdm69w9XPPkxmsqXCw%2B%2FumfVq2r3N0kCI9pff9M1mGkvMu&X-Amz-Signature=89a2a596cea6ac79fc274ad2a90b440027426e9c99a4b69e232459b9777783ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
