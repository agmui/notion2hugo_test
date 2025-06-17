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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3HXIXA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCayN%2F2HtcPc9bOaCW1msvA3l4tKJqR4b4q1tV%2BLjKrAIgCVeYqR3rktQx84O%2FaVRJ22e50PYCHPQZ%2FrxuedBr460q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFs%2Bdn%2Ff7PQEoZ4GtSrcA84PBPJt%2B17BL%2FI3xg73E9%2Bc%2FPvy3i0nd2ViSg61nhYqEALP8yhBHNPnU49np9xjfVwpzu5Du8ny%2BBAq9YpDyRh2C8uTlNq%2FhXxo7oKcsLYBmBm0k66lHybnnBQEROpCa%2BmB2nkFswyFNp14kT9RezKvtB1QP4B89bP374wedfBCYAgDHANQ9SgWBFTEnT40Zzff8pPrRnFpftA8Osi0MYCbc8%2BtdckqLMs2FrN%2BAZ4Yv6Cz%2B1yk9j77HOjMt3ogjhTpXwyQTN%2BIYl4DpHftX7zeMUIK%2BiQWZOuAV4taMPNzjmctVg19otHQ5FG%2FzrxPjejx%2FuYE1q304uppAiDdS71utggW3wD3CrA4rU3MSiISqeyKny7xa2szNx9xgXaK5NcRQbY7j6x6AU7gLCP%2BlcqNnGe8Jl%2BwKhHc2RfBPvJP275Bk%2F33h%2FmA0r%2BnuTQ7hknR0Db7lPk94OY%2BmUv9mumuAyk5mEKEklDcN23asCVNYZdRJ6h60BxHCzDd5uoeou%2FIR2kbC%2BgoOvhE%2BiVjAUvl3lfoTUjlMTgtSzxCyizsjmXGTO%2Bscexq63TemUw4OWAVcDjYeFJU5zjwvXfJv3oTBRhyYTQtcmSOvYMVHTVVzoVFioQVWx7IgN0SMIvvxMIGOqUB3%2BXqyVlpsqjnSyHRwrhKMwAgUhVo7jcaxjQ289CZZw9dhTejeWe7lLkMdG6g3FV4PKwrNnbynZCNv3dr%2BkrID5KerEZL2pO9vaOR5v6w76ImKPibZBxU%2BTC4z98wMCBQMOks5feZSBtBQIagsaIvc%2B2jIN7EAaB%2FuaLUGv2A5LT0tL4G8YMfPtu6Vcv076sZzPepDZnXn7BJoQEHQyWDZCD9LssW&X-Amz-Signature=8fcb3a33b9a510d7558846645be33e9e22ff2099e576508a61f234ba38ab20cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
