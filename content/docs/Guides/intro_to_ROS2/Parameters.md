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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KR7RIKJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU87CyxRIY6sFinuR76jZHOFi6KuV5%2F0GapeqWS9Zy9AiEAtLIu%2F822pZv%2BdywbD%2FJJSYd5cv4M2nMPia61irOMj10qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm9R1IaYOrqtUYqQircA4%2B%2F7vFQeXcFKvFHnIEMATeWJPo4vAbMadNjqTBwAe%2B7DCe%2F12wWiqaJivcolU1wLuvsOizMNLeBvqmbQMNgKha8sOxarxBZQHdBVQvq5%2B%2B5FBXWh5vBIWM3%2FqCqGDhukCDOtRhpRCUCFmN2Q8YhYrpKl8GD7Zdrb9DFuNZEpC2b6p5Lj%2Br0vFFAe7sInxwZI0ICI05WJw%2BYTiVwvqE88gWxg8vXqnGP%2BxIl3QLA9w3UAPylXYMhiR1CUVPKoUl7Rx%2BmOQLZtGMKQKaPTzJGDQ4GV8TM4poafGRMWdm1vQRpryIO9gfdDP5ATX2wZLvtVy8pWk8d3Y25XPbjNlm5Zer9ERU%2Fd%2BTPGC8dHCDuhJQsn14eEwp9mb1VXuY%2FNnTEblvKi5v7SIpn%2FjCSgZSObvgr5HtoNsuhORCR9iuxNp9pyxQ2GtMx8eEkt7VG64miFcSSK0wbYElp6ovvjgdkdRTVxtz1VpTxJsy%2BrtQjP140XRXjVS6c6%2BIcj1vYSVLFldqiyRwhFKE%2BUS4lIkZPjczuPkPBi3VBVAlUJDtbm7%2F8f21no4q9T%2BrLUNYX7AGzgsefLz9gw5s5yb7%2B%2Bd%2FD1pNuRmFHBiWmVwYBs8RSMSrRjwXz8StHOb6n2nIbMPzs5L0GOqUB3hUKitU6kSrsBKPosw4NhC55ARLL%2BGFhs2okZkFMVxpQhAtkA7IAM332YacY%2BnsbvQvO3otf%2FKGNrxREXpN%2FZ7Z1DlTowjLF1aXd1iuhQ4louq4lr0qHoXYOo8Be94%2BFYZr7RMEmZIvRW%2FpdwwDuI0Hp7Ubi2dcZeo8fG8xkBQyxorIcIwaTXluXzLKVXBVQ0Wsfe5kwwXa%2FbZ19IdGc09%2Bf4B9j&X-Amz-Signature=d88b08b629845c3255e9ed25fcb6c67610f0a1bda25c09e987d696beead2b771&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
