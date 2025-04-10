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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKMPKQX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIEGB0Grw1TRr5zEk3qvlhlSa4xsakINW1pQxZCvSEOBJAiEAlQvZPE6zy6oTxCUXO%2Bgl9K7cTiT%2BES7s0uu1nqrN4N4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJUc5nya8wwQT7ZFSrcA9tofvmShPjVg9Ol%2FLw229in82gZIgNizqtlX8qUokbiSlem5meIsPvB0mF54veKtuc2oelrc6m2reb4xxxz3MmgccM30N6i%2BLibSLjT683h5KexuQbiogm6O%2ByWyX5k%2BupzYqxjeJhfCGt3B3sSggBCBXOX9BnMpbeIcG4zaM4PI02EhxWPDg595yPFo6yHnp6JyM72RD%2BwfTSD%2BBM4qDv5zmPOlzgrHHiwAwYjuRElcfJVt%2BMRzZRBgWqN%2BhE3LAqfsinromPRs9otN%2BboB9a6RRLJ%2FwtaAwk0pqn8p9lU110y%2F92d6Rov%2BQSfM1GCjs7UEOvVRCOMrckZ2HvclkhnUujzPl81V%2BoN%2BFhwS1GxxVDA%2FnDDhJHa8u%2BXxndAXN8AxSZYaTPbyNEgl9pjRmtAS9GVRQ%2BzpHDO%2B6E5nCTc3VrapqwaCF1dkQGsX%2BSoeYKsDbKuyCFBfNGyNxvG0%2FAdkBucFFM8gQduGHot%2BIFtHoHJjoQHoNLeK656z3zdvp2jN18DPqlUEUr0kKQLs3Hjj02Xg1g9mdwwloP3Pu%2FaXkguHd1GoHdmJPxY9E2pPiySROBcqxHm7FQ%2BIS66HDCcmUB%2FCMGRCsXEN12%2FtlhIDCNalhHW88An8AJYMMyk3r8GOqUBd7xtg3VCm%2F33IgzD2%2F03b5jeZ8SPSViGgCnbOKyoo7ETgHHXT%2FZuFnxgjb%2BShD4EqBt4Alqk7PgENV8thmgId4paZtumF9vyEQuGe5betASH%2Fey3uJfOfgT3XQCqLgCuYGDjFyhgeoCZ7MJFrmwazbgBMDMSOnRtJqREsxLxy16p94bu9OPG2YBFY1rEvHcEnylHBbK0GP2R97WBJIKBxNGtjQvS&X-Amz-Signature=725717d0058aaf31b525037f10e85e8fb8a34ef98562f524b703f8dc61d103bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
