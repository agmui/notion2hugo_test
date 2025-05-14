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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSZKTEL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCGArlFUP7uRggNtr38PbsGO0CXZrFZzj9Dn7mX7UFZsAIgGGa8zA9qmphY39X2TNBW97s276Bj4PsD00Ow9q6D5oQq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEnrsgtirTMuR3PBLCrcA1qJC5TTw63X1NnkcNroKFm69734w%2Bk%2BRIstSJbWsHVb6Fl0hqHJ1BSRPutBnDXlYJMIYokb6yXDTkYW3GmjFkaiuZOh3G2XEXG7YXiMlAoZk8it1LzM9znkVnS0U7FNesvznlyau38tZtpujPUStrQlrCJlsryBsW3y3PCVTaxB1yGmVo9KakvXKJWst9MlGOjjdW3DcVn9ls%2BdV5oLvIwxI%2BaKtWLfIidGvewaqLtUKqrZyizy1w08hhN%2FAuRZbiIckYUMpA4ZzcPtsUzl4tNb8edBIqtzjZ106w1DgEB94df1zDpBWy5hqrqn9kY2qcPL1b3qzffW6tPPDqkUejVWbyPgV7zZONQiEwvBCSCxn9gb2DEqYe6by2dQu9bLX10TtZ1hyEuHcAE%2Bj%2FoKOK2m7xEU%2BaMp%2BClbFOQvJaIMewg785dl4nKbEExWA4waGZ%2BXscXwSwOy2GPbe%2F4WO%2F1DnkaX%2FlBmpzx9lnXV9pL6oW2BDjDIft3aO1yiJq%2B9Ijufz9fa%2FFbQaWID6V1zhXy9FbC1V%2F5ZeVoGHxdCouG0DWLnOm%2By5KUfWSN1xJxOOwyAtBFq6ABX8hFKX79jZtfpgoufSLwttcSKEgdpH%2F1tuPeIaN0QjWcCNWiaMNfPk8EGOqUBL%2BDXf7fUo2iWK8wAmc%2BlICxJUgwh3xl1dCBnmpnNv9iP2wS4IbfPPZLxDSaY2CD8yuWtDx%2B1p4k311gzeC6ndC%2B1%2BF06KdDmKExO%2BWa40zOpODhcpl%2BJJwjAV42SAKF0LQbhmq%2FQY8WDdFJByrzjlkhmwq1ihY8hLfZuJFV6%2BOBtHEidhcJvOxxPkoofOw0vLwINMK6KDzHCMv%2F8ticV05JKXx%2BG&X-Amz-Signature=1ca99eecb448ff4dca87fbcf828504fc2d2ab360c32685965baa6cd997c5d633&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
