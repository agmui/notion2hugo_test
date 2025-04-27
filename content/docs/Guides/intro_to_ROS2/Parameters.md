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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3HBRW6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrlOaLaKp7KROs9NSC%2F0qnYvdcwgUYAqcw2jhIXXRdZAIhAPKscXIlZhmf7E7p7Oh%2BgD%2F2mXRbfeTxSRLkkqVgI2VBKv8DCF8QABoMNjM3NDIzMTgzODA1IgwMCs9mkBTBa3vgehQq3AMDV0kz%2F2SMFw5U%2FxBYqNQ8c0fTb8faQH%2BYiMQTWnvL24Xf1eVyIZMmiNAN8lIKdIJ559oIKgbOBbuiJfA%2FrQ1Lj14r1xdIzMeuryDCNukZV4ruDdCxjaHBnd2andfJpsjQCBBHIJXdZMyregHaOgdFmePBkjXqa%2F0fNFPHv8tg2Xr145oRiwHRjEFf%2BSlMkBeH4srq58otA2FKZc4TQbWYge44%2FQnVj80nKGVFScVF0ygfBoI3BT90%2BWmCIrpf0o7Ff%2F%2B1dDt7I5HY7LIEnPvxKrFy9mhatcja8b%2B9RnMxoUFkEw1Y7hc7nlv8p%2BGlSblGQvCPT8QiuP2BLWIJwz6PCQpAwwo9GjauM1Ku4XquVt7Ev71VsNwdfr3aaYTj4QjvditDLiq%2F9HSd4nJfmCMnppDSRttU3AjBw0AOnP2EmFkr4VKpFW4QdTuA7H6GCYvU6MG6cYm%2FMoFm%2BqoatHoDyKWAXZ%2B1OcmeMWKaB4utOB%2F7bLQsxnfKI0LpAZQkEINAumqN%2BSqZqR%2FNTnWlE5Jp%2FonLBg9Hlb%2FYFMy6s3%2BN9FweDZSb4A0arAODhyfursoBPs%2B%2BNFcwHspY5XXrMrL2UzGY%2BSzdf3%2B4hTRgUYvdP%2BL%2BiUc1oJMBrW9X9DD347jABjqkAWWNbMzwt%2BucrnXEk0%2FqBmW28UZN5kg714OLex7v%2F4821OsBvyTx3g9nTWK5%2FsQNxqQ3zGywkRmFBZnAHtMlWWfH8bfC1Xy0cynaYKpzBgCpJitACwWtxYfrTxUfce6rglKOxwLfVStVSz5mbFZ3akx5la1YJIz0GeqmozW5yGaOf9AOZMc%2BaB49EFEbs4coerc8ZIWi14M4sqfCzbS0VuN3glWq&X-Amz-Signature=677fbd688adb29ef009436fc6c7acb0eed1890a0d3843fcce24aa1e2e1d9303d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
