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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVON7SG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZzFKvWx8oNKNPB%2B%2FRwfBbyzUZJ%2FJTwx%2BN81vzYly79AiEAqYrHBuMhEeclervdgMnmT5g%2BGfl2LSujcxnVLx7SiIUqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxD4oSxpN4r9Rs5SrcAziL%2BOpV6J8TLglAhrtolXKpcaSVbhJUuq60EMRVsheLpESppsbhiYUtisRmflT%2Fl02xG4qbCm%2FtGhMNdRTQmbWXqxIzfsG92y6B9kp4mN4ts3EwpLy0zoQDgJiUFlKB8aXak4yBuoecmdAUdgWgYkeb2WyIa1MB823Sdcxv1wc8RRp6QC%2FqobWUPpWRl85auPe%2FR1H1vRsDl5dUuzqsov4u4G7hzgIH5KBbw1wwto5TzKQy7t8lKNkbcjS9Nvj89XKFljowlCA5nQSfiDUd23%2BY0zipBdRiSfTQTtrl4FFJatjeR8Lk1GPOroUL8xpZ6l7Y4cNypuNLeeKuFYDWkX3RWssg4iAB12rH27quwnkV4xqZdLv13O%2FfpEIOFKvc%2FrSvZtRkrRoJhxu9r%2Fyegry3wATNYkw8xTW0BEFQp8o9MwZ3rjThOM97sOkmDt0PZr5kybna7YjVP18aaFohCw0yZg6oOLcRrn2AlVcP2wYzwon264KxS8oyBuD3thJHUx4VFd8xsYO06jAGTMOhOFBNHJ83F1J3DY9GrMDmecEyKF3IrHsToQ2XfsDr84DdDsihp8%2FuWDXdJv97SFULZu%2FK4fmJpU8LHawS1i65VKOQX6t7SGQD6yRsiLI7MIXLgb8GOqUB29W2UB%2FoeRinVLQeWKIDa4%2BWXQlDhmYwU5%2F5FVMm4rU5UhW0sdEqyLvO0lwHpoB%2BIN7RL%2BT7spApdIts5d7LsgzWnqM%2FkoZ8SwBr62KZzYvU6p2OvwDBJT7HbawArDib4YxweBT3sYyWf%2FVrQex0wImlHGvydSKa0c1CdAZnPq0DKieokmfQzOsPhTc1hX6vLwu4Fkd3V1TobXCAeow1sJ8H5Djv&X-Amz-Signature=329b58b5ed2aab647bd04d9f59ea6d83821fcaa64a30005cbdbaca7f544e601c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
