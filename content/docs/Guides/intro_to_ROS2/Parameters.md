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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOYSWMIT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDigG11LNp01XEICmZDBhYUhv%2Bz1oAfXCB5NAEwm0ajRAIgSgW%2Fb6iqPyzattrq46IVia2jP3mEeO%2BAsMkPTQu6tOEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDA1%2FWMvOZBW9%2FPTl6yrcAzr%2BKDauWhMM5MBE7d7NBR%2BChimVSCDzFBW%2BcIzoWTn9M%2BHj%2F%2BEyMSkuoVJt8Iqt4mTi0jqhmq31GDm9YPXg3U7wW%2BjmWJhjyOPjaXW0y7dXTZ8%2FHS75He7zBTxNt8apgHYIhHjmbA4mjc%2Fvu7a4FHFRVdc4rKDxLSU7IJEULytU75gUonissUtVH%2BDZjcFI8dcmm7yKBmJJudkmRGg1QUKUoxE5ex7razb5YQl1U2vBEybpr%2FNIOkvEFhQfMxpnaMdkPMCeRSkSF9zu5KZmENs5aJBRxEPIe1EH518I1guYdQCZOI4tqLJ8sEDxT8u2aXnrYaPqWalA%2FDyJocaVw15zGcSpbRyDOO%2B%2FDOyWOnDr1fYlcbG57DMF2JovtbrEAyJGB6fgM52I25KS9D7xdD64swX4MwHWxJ%2Fd7DT8VrWJT9mbwgkFltNpR7BlOnC75IEpzZJRWe%2FlOWxLeOVE5PPOhDKTeomkN8LXVOkSfEFvkcgXyQQNa2toqwO2hjlMP6NVym8zU8thx79KChsLW7LNXCbFqZRGpkQ1jOFKdNIpCeKq4cMtYrBmjfLoh5Pn6mgPRx191tpRBp%2BiIklAKjEWiftT%2BgPT5rUj5MUHCuXx3gRssQgxOs4ljXrDMICw374GOqUBdIZrxocCwy%2BokfQk9uLARESqbnvwQmDybB0cM71WEL0YTvlrTE7%2B7u3ewGuEIWnbrrbxBNCUvORQKHsZn1Uv%2BrSzPKIiT3TJt9F1Xxn1TghX1tiBqvi47GDsTkuq%2Fsx4wtq3KP1deWa1CTQF4%2FqpP%2FHz4J2pYJHsarB%2FgqF5rcRCw6uMq2LZ%2Flc62175FugD62M04C53lg1nDbwFsY%2FASWU%2FVRCR&X-Amz-Signature=d8a79ecc5ce875d4757c66f45e1c741381b5fb8ae113e4b5fc79bedd7f94ede0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
