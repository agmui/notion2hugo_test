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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNGIGNJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHoj8RZzGVIzBEEYd5WRk3czDuCRJuBIKOtQ0yOJXSsQAiBV5gJuOP3Z0%2Bp1O89MTeq%2FA3pLpsbmGWfpvvTBkVOnKir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM9Bu%2Blq4ube8pWlRPKtwDrYtsMUJIIabj09wNy1Mb6RzyO9l5yajFjPCOqPZZWgdFF3lkkECh8zmqfxD2ckjDD3LuK0T6xZ1YMLKRhREeodIn%2BPUeJK2d79bDaAXSO3hOMgoDqsHt6fVJ2Xu4%2BqC1%2BZDe86OC%2FtxOjxAWApWhPUjZs5k8qVpTz8%2Bt6Pcz%2FrZd1mWvZ2wYB%2BtcVp0AiqOGXeI49vFtBCJxF3%2BiUtPr90X066pGHeqJAOxegudyncrfz9JrqL%2BExRETY9CqygQy3db0sdTl5i90pfKtMS3x1WIp0EmaKIXR8p%2FKloJSTvHpkSSF4lvTVLvF3qoGOyKMoqb8opvzj30iUYBVP5GJY6R7tduLWEgKV9cww1uvfdEQtooCygWFx6gjmJLh3aLPvKltHAyo5XPgVPgM7bv4Ldci%2BbYeiWoStjgjwdatM1ITN1M5hKl3jnA7yF3M2JnJbZlu03ruo6yu1w0u9fbZL4NvsgYTawn%2BWibLpgIJ25cMil%2FAyA3vkuPj4qugDtpu%2B%2BNgW5eZ9fHOvlVTykN7F6aPJ2FddTNt0BUNw12K9P9JQSS%2B%2FYJbys6q6DLNctnETDbtMC3L4g6OshigyMqqecKjojY36AnE5S2wIRX38sBb%2FpXB%2B7O5soE9nRAwp%2F69wgY6pgG3Lnsjhjqm2oSg2PzrZgW9nyYX4vXzBPLPCzcmn4Zg6b9pGfq%2FUlW9JW1AHxB6oLAs8CkCey6zWqfd0gjWrrGA80NBzcBLli2Kczt7WLuhMNT7SOzVYGkaknAqML3TmRbQWXOr8K65B6ujLxATAGzrKeFqu7jMkFfPjXD6iWdEplQQZ7pcbYEFffkeaEpg1W6rgwiK7ZUYupGjoBAjGQgHVi52zH%2Bb&X-Amz-Signature=f7b2848135e30eef8ab85e9964988a39fb2971fd9c5b58a713d254437b281e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
