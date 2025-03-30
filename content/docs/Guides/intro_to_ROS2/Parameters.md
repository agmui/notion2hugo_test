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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJODGRJI%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIB%2FzDhMLQ6syYUT11oirRQDHlGRcr8tw%2FrBtVjYfTiY6AiASHVisYsT98cyPmWT8DLGDfqZLkadcJ1TUp6rDhhTquiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX4PakKbSb8vr4G4vKtwDLDDdRr73QyxV1Y%2FPClULUCupmTNZ%2FeqEji%2BgKr24kPk1ckxDjr2nnj%2BgVNeOH8H7Fc59NZ96ahe90nESWG1QW5%2FJZZq50YzsgLBc7ZnCPFDcoETy9EFcR6Xb7pJyf%2B8PjtGrc5IOta4CaBr2mDJErpFS42w6Rf1xY7Q0RtSLS7T6nbvXZGkoPbygCQdebhZaxzHWBO%2B1hQxhdy%2BwWEFFh0EL8hnuiRG6vnYX7i67CWeVd%2FW6W95So9xYscrSpFTlqjY%2FAjN1aawGTgSyFiygE27rxxcpBYSwwbqnWplUTpTKXRGXarQsEgptxqkZwiziZdrMOov5gmwidq%2Fa%2BvKTM%2FaZKcxAb1PEqzk23wwmdlFz35EwUXEMVXnFIqKWwO4nw%2Fa6EZaMOe7sudgEIHP4I4jkaf%2F1VcKy2AASAZ1ex4iayd3boK7z3P0TT19K4oFjNQQMnHDAtP1Glt%2B1LqFpCc9H1B9ACloGN1ljuT2QykpW%2BJ%2F%2FL%2BqhbV2lcELYIlBLhAATO%2BO60Jl1ttMHORhIFcDS1wHBa2Wi%2F4ld%2B5sIbF5JwgQsXkKoxIJlr4ArYzE9AbHz8dATAd4yVEdTfe9%2BOQ0Hy5eMlUzXQIggv3T4N28g6RR9Slb21ANlLtMwxfCjvwY6pgFfm120a2UD3PgZzKxxFSliaUI%2F%2FDlmapZPm2jrLwnHwvr2WHENaZzYrxOAdFd8PdionNIS6HtsA%2Fv%2Fjkp1C79KD%2FQA%2BBuagLxdeLp%2FEOoL5dVlz01KLIQmbVZD5Ypxt5ycaAzri6hKZUM%2Fg7UqAHRbVL28czFzJjffvjAz0aGACse3FpE66J%2F49m%2FoDuucsnHKVwdmWPnsFzeLla7t7Mfpp18W9k7z&X-Amz-Signature=fc760293303c133b54baa177355edf30fa9c9d44bce5e18a489d8cd0d6ea713e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
