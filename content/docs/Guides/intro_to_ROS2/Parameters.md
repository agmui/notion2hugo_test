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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZ3XXIJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCPn39tkhbTbBDRvrUKmFmwuOCsHHShMFsZXsjeICRJgIhAPzSAFC7GHxCBa1B4E9TkL%2BeHx1y7lu2rMe74F1TGNz1Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwFSfHQFjYUZCqyIlQq3AM1ax%2B40by5YT398k1lsglw%2BxHDPmeedax%2BlySpQl4sWMzAvpKXP07zMiShOce6QxUx7%2FTIUz1YN3SNbz4VOTlzsTwDCS5RySYLll%2BZz%2BXzSFf5tUv86U0lchk3cMrqdPNadnLLFd%2FdmlTPRqSgC0pjaTZ6PukncJ8%2BATwJItjcRJz2sGrrrhssmVPGQmwpVVkYX42gC67dxsslvqcjXZ%2FO7U9O%2FsHUk7C732veNlYpsOiWRoKu9hlZXxgHQmO8AvzvdAhwXI0wQduT%2Bf4FcwqE1wNHx99OTuUdd3a9Pn06mRxEL%2BSVfuNPbb%2Flu4QVeetrcf74l3BMd%2BzuM%2FyQO1D7q38P%2BjHD3SYb7E3FN4BO0v5y7A9ZXvUsfMNUeMtJkFpdZClFSN2YYQg1u8aC6c%2B1nTBQJoRMp9eGQGyTdNn0gQVciW1QnhXVWeR2bIWPLkkP%2FKy28d1rE36ZmcHrndbZ8lAUaQPV0ZMG5QHFNFevClOwBv5zYMFCEwE105Nry1rx8TIGww1%2BzeLYIBSyxeA7KBcTciSuesLqFlabtpqvipVXy3JN6nA5vNf88FwBS6%2Bm3qYvXGZPUTKQXqh0aSDKMzir7pOL0sD3liqcpVhnDT2XGyrBcJyqcOfFSTCBgti%2BBjqkAahI1B1jRSe6mJsyvYna3Ci8hwRJM8A2KMuKiEeGf4PeG6LKWw9EPfZD4B4td5FymmoP4cODoVbI9ppfuYg2eC848mfHZJNmV%2BhaGbW5ApZkLxGF6uPr6Ve4xrlrDPRm1qB3EQWcQvES1reYUo3%2BPWl9TIOX3FNflPZaejPivtfm4dP62DWFuFtOzlBHX1P1XzDKAxC6HtNCEqvJjNJZgvR2QmpZ&X-Amz-Signature=e863a58b84c435088add6f65f095c51b4a35342a04080ad1dbd1afd24f27f973&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
