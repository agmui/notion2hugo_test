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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDW7CMLV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC4tUuAH0kaxrEq4t6lQyF6BscZKvhENwtSFYSyFLRV5QIhAP2x6rLvZ5peZ6Y4dshE9UfSvw8pNkR5BOxhZexZF92CKv8DCGcQABoMNjM3NDIzMTgzODA1IgzKHbvL1LYHyjphQYsq3AM7N15zw6Ig5cNf1XGCRaJDhhgwZ4jtyPF%2B99Yob037rRbC%2BlUMiKuNAYrOch6nrKOZ72%2BZJ5PKLApW4L6%2FCQqw3qH34e8pXKZ1C2nfws9QhNwjTV2CBqsbJ9t1claaQDNA1mCMC%2FDv3qBG5aUxCDMJ91H1aDCjGVDsKOkoZzI7IRdtFM3AVZNHgmDDpIyU8rXBUamlUYW9kkjYXsQamIfyvXj78TFGVrs9ij0pUnoDKtT2E72b57Gjq1xuM8iScksUOWT4p1APhdd%2BVkDV2kr9zrC7wYcv%2BdjbTN1Bdj%2FQGPR8yk%2FJK6mdnS2ixDaYeRYczW1lXtI6sL0sxrzPojepMW8vSV90waG4McGas8hYtS%2BrnFVRxulJ3eKSjYoHIGc8tfqZWCDBZXyECg%2BM8aF%2BUwkQnpvtpy%2FmU8WxISkG0WWvEiUsl3g%2BuXYkBO731rypouWsuZ8fpPEWJGfTdA369%2F8gb1%2BdoG3cnTGPEr9U1JtU7i1QxD80o8T4jm1fYCKJIYvWck4e6muaAIgftnnDTHPtuNB8CGQ67oIhllD%2Bqd5PAnG5AU5c1kgCRKSCmeaPrSSP1oFcnguJw2AUp8RrQkqXIGK8Tp1Mf7cvol2UhN4o%2BmpozavAw4j8JTCP87K%2BBjqkAQFZnum%2BHVYF5WaZeWR0vxRg0hJ%2BePY1BReg2eGA7lsphDwO4pbKWTnLGf0cAyMTXGBpj7%2Bzb11ZqDKd1p6j7FAI77bxtjszxdDYCs890LWntaG2ZR7fJyXPtye8UMzc5RX2RIW1BObtmKETkwvKPg7TKU7qzQTVpzjWdcrq5Eys6sxOxXXQ5HrJ9k68tuoXZ%2Bgjvwy5I2UdynIoGNQk4Jjbs%2FdN&X-Amz-Signature=aa86242c3d38cae6188d0651397e3ed46888544b22661a4b3c88c8bdee8650b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
