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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SI5EVW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuIm6yD9oLpffLfw3P40IVTRRA5NT7sf8RIEWZeASHqAIhAIpPEhEmosFyKeNoqljSNy1QmCAhnsUBf3EClGCyPlVfKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0ABtBVKPa5htaRsq3AMTNS8MUmij4Cr1Y11I%2Bz72VqIZ0c1OjA0fiSlEXWNaTlJHMFY16oDhoEq51CkNCZMZMOSPD68TfrUw5I4cJg8dfsXjBfYtXwZ8ujbwxpaNwRn5a4f5SCAf5u41%2FDdRTdz5FcxZDevInt7nVHis1LD8WhQLESj62nJFs3IbR01bjU4GF3X4fqIY1AtklF2A%2FOsdqN%2Fl39oR3h26cGOXZoB4BhtaNpB4Ca92TVFb1QsUCSOJh6RTgsac63mYqj5Av7kfuTUav9slbZBL9WIJFAFF3b0Ur3fsP%2B9eEGlLyAgEpXcmyXoid1%2FLCyqjDOKQF3u4rHSqaL3bfMSm4P%2BAJldGYMaoQWVQdMUKyOt99TxO0wR6tkuYPg2cGsKZS193O1ltPfvyAHd6zgov9Tn89LwKLh7GQSDZQ0f73bfCqjyQIVt8QvmrZROpEa9MFo3Sli5sWK9YfbdQTr7vv8xv9e0z3p1GzKYQSr4R%2BEKBQReHiTeMfoqedg0BOQxQbjcj9ujwNp6Nm74ToeajFtCJH0LhMzcAkJ18Z%2FTUEMqXZpHcIIMwBMhR1L1nlW7Thf0Hp3KDnGvzvh%2F3CiXKWZzyjV0ZAPaSF7YWZygSIj7Pn%2BQiBApESMetuCoTpXiAJzDtnarEBjqkAWo0BStnoZ25hZEgI267FfZKuVSKuOwrJwL4nGrvgaFWtNfT5n8CCXD3%2BdO7KFa02GU%2FgldSz3TIsEGVBxCOQr8xWWWW%2BKDQBb5TfVZYlt73RR0DrcpXYKmcno1U55wjkXL8WZ4Jz8RAxwip%2BD4tCuRGmh3hFmRDYqu3bVVlf2hAkPMj7i9B1JeTk7t00rTy%2BLcDhoNlXUnZ%2FZVzElqaBfJnVFRm&X-Amz-Signature=22b6faa39be0101e3e15d977ae2f11e82c83c3b01950ef897e91f8f4ce178919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
