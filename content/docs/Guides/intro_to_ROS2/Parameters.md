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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFJ26QA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFljGwn7kxCq%2BJPRY8rFrm9h8ECeTbLVQGV%2BFwXV1OW7AiBiP1OEiEbDFVdTXpy8fzZS%2BH%2F98IAKIclQjHFxETY0dSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxmjmb3joCY4jgAlKtwDzA33LF9ad1JUAZRqIotG9ZSADYMetafggXgxwntyhGRr6ql2ZzCmpfOxeD1unqrgnCySXLVG0%2BBL3BOV1E2luKnSgTzEzJnV275TZdl%2Fgr6USuWfk9XiSV52sFs%2BffYKVspYNU4Cq0gMQa15z3yDW6FTEwVQcnUaOx7rFIDBWbm38Ja1hKWbYUJHw5TxGFRHNyz4JsAoL5ZVVTJGNlrLNoEDq0%2Feg%2B%2B86L3mQb5Ts8FbndKDnsTIVS9jdz%2BUi9A9H0DCp0VEVcv5B4MtV8byi5ptZge18ARi%2B4ATCKVTQ1%2BDAcjq0EqUEd%2BdMwx1%2FY8OIdyzc49dg9r6k%2BX84Gs6pvndbKzPOh8uV6L4t4F43f1aha4PJor%2BwAmKeI%2BYFe6w1TJJdpM%2BG0LdViL7qEXOREgnqRMzUI8K0zSDNxinrogLRBFwfzS1r42XQpwVFOgHWR76%2BdmpD5EIvMX8Zuy9iFcKi5iC6IyrtpHZmzwMyhQVmiNsibfsraDlrvHbtp6r9FJ%2BULWdzInswAs170PYNwixgts9dx4tBjSvRnnPXGpnUQHLFIPgmr220cQX6K8rkP4Dpeot5wj2SgeKwWUWJb3l12bww%2F3f2l8lnuFrEriRvkiHRE0F9huQNisw4sOevgY6pgHX0%2B9KUQcQTfENdywsKoxNT3S7RL6u1nAwBHgOiDjNuIaoI5k%2FxpJSiTCjR5K%2FFmzK9kSUJJp9Slm20b2g6RK9xZp6xkXH8zjmm1EcvdQdMBDiLDzCVdnawviFNaY652C%2FULZ3dkjIy%2Bo26GNEGGZ4oRO3hNMsgD8KUq2Gstwx5FDufcsHiYGRpT%2BhjC%2BNIzq2t1eP3Ygh5J%2FqNnx3rn7RGxYz8TE7&X-Amz-Signature=2e8fb750ebd0fd3b67c3a408350de7bd643e42498c7801c6dccec49a09f202bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
