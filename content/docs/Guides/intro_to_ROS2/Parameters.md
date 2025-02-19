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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653S2N7IH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNhjD3fY0bZedFCC9KIvZ9LtS%2FmRJ045Oz%2Fv4AgvlLwIgWonOIYfXMqWPDBb5ehFRVr8eanIgObF7smNH6WHYYpQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0Vz%2BLqzWRU3O84PyrcA72ksy3ugQ%2FuHTkjwjKfANDoe%2FuPqFIe2iaPrK3NhdxU21BQon6Q7CZTkPCogl%2FVQP3%2FDCTk8GSHSXX9uZ5Krg01jGTdYpozmLQBENlsonT8eqGqQaA278nKUt1UlqIOHy24yejmpncal2IWHRS3zxMKUq3pIBAcBDjYXngoEKemcuF4FocM%2FGqkDzo0KRBsm4EdoKmsVZYue1ZI1mgTbMxuf0N77GvNRmV0NhSN78htrI%2BV22K81Fw1NPR3PGdbFKJdk%2BWUMZeiMA7UqY8ElfH7oBiqQkrcLk7JfpwyqZjEIgavGmrS8cGfUj927vAU5ylVXz6%2B3P29tdo9rIZHqmcVwjauSDqL4hmGyU85jwjYHitmA3u7QSOlrShdpTiIfgJb0RC0%2FLG%2BNAS0bDvXgl2Bu6JcGem0zT62gZj4qFJzICffw%2FHaj9UEl3fatQ8ti06OoEqjx2iFvpVp9dqCMLgs9HxX4Ky8vn4fFe2xMAJ806soDOFXjSBvPj16jL5vxLREi%2FUD1LYVynW0B%2Fia5WmclaPfLGe561nCOBfDyEjpqXP%2BDfgwrZi32Q26bh7EqZwYxiimwDI%2FBVkvVdQvz%2FSjGjVsVT8LmormSBEaJFi3tOjj2ZQefN5eFHadMKTT2L0GOqUBDeiJR9rwudGIFlZgFulqgValSdHCg2WYbvlnngo9Tmp1aTt94%2F5rVV0DJFqkZS2fDvsIRLT4ODMaINROZyF7cT5%2F8NZxZBaVGGBNFBWU%2BP6Ac0hWQNCati12h09suDZPiRexXq7oVo9F8dDEvzVn8cD8a4VBIRxaIHF%2BBqeXD25Pz0f62DEfdqJmB9fwF2RvJtVEyaTAzAoXagXLevFo6hi9m%2B19&X-Amz-Signature=ce434c4013227a8e8326cd5045cb3e6f5ebb2add3ecbe8368165aec37b223fff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
