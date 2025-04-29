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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GDQYSD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcscwsJZJ9zsIQ%2F0k5v0g9eSjKo%2FPbnK7d7vM%2Biiu1iQIhAMHcq7cJ%2FAbXCMD4AHJ9RxG2IDSlKWGf6xVwGRJ%2BeSQ4KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyKCb3IiBhTlrWR68q3AP3Ia3p0xaLUIZMQEYYkRmzUdbqM1qhCSE3nmdEuPrbOXfJucElh563ddiOTgdc9G9ycdqPLpqTGfGJhCVWyioXD4HXzmFh57%2BdXXrAzZY7223XRqXzfKDx7J2gKmLZp6doX56u9ysT2fTWGYKC59rGro7HR05vrdE3rje%2BIDbUAtYgMiyiOVzDdM2Y4cklZBbP%2FxS4Yo%2B%2Ff3tUF2EKa7j4wJvWYwT%2FvCo21UaIpagIHGk%2BGH4DQWxBVY5ht0COKjJ0AE7QIoj0KA%2Bvatt7PJYJPmRZcJA7CdEyMhcLnazEgEyLGNmB6wYG4vqWbr8JRFJmPQTw5yyUvRgD5f8PHKHScus0P3KlThJnR8JgVagmMDhon7mrabhy%2B3PMQG1AEj%2Fyiy9SJMJZMp5lh7s23C8q5sf6l%2BcboUCSacJyMHPrOb1Xf%2FSitKQblL64zUTi0pYPpot1q4Tollm6rrekD%2Fq%2F5Ga8xlPyfinVvwaZapTDgclezlyvVPtPcLkNgmZeUl8BMjfcYOcLOjTm3RlTfayv9Bl9XpvEj40jtAFECl5Sarmm6CjQ4xPDkF3TQE8vBXmjZ5QHUtkqTxSuDkxC4KaKdIIqiNsoNwnUiNd%2F8YQ6A7JN%2B%2FDAqepCf6kiDjCGxMLABjqkAbdXhO7U62NVL5DM1zrH30og9fivDyu6BIFJalUj8MgdBVZwwLcu6HUg2PhnkvMGdoDHzJZgMJjoJDtsKLys5GR%2Bo3rMkHwK9S9DuCpLpPPt4WIV8CO3uDOKZYg%2BzF4S%2F184lqYZq10e1sOr1X4jWx3SWlXzc9MQ2w%2FWK804hN5y8ThlHwRmQOnz9egAwUmakPCoyLJ2LAISUP%2F5sWg099pIUH7h&X-Amz-Signature=703be088a6d5fec8862d5ca62b9f179069d228b0b0ebded7fff714de5a7dc54a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
