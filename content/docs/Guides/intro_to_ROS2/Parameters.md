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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QLIRE2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIA71m0ScHOjag%2FsCzk6WVCchSg4kx%2BfejhDgh29J151sAiAKwhEFmQSI8yDRukM%2F1cwlixIeatKqs2nr16DdU3RlpCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9nmOFGtjVKWJNbt7KtwDMRx%2F32NQhy6Iq5BnPZzNFcV0kDJbg%2Bmkni3FZ%2BeEeS1TycgV8Cs8EZ75A1RCJn8hHIkRmKa61K%2BhGTxPfawuxOca2VxdD6EH9RUtts8rp3ArhRjWnKT%2Bp23InXdv%2BH%2FqMadU%2Bc1oSjvgqwzTryJTsXJBU2ruRvp3ezBRYqV%2FQb9DFM52xrc5aSlOc0Pkc1uVW6P2pBp4WfGIzPDLwa8Gwo%2BHR8d%2FNwWHRZVw3lslW99qJKBI65wS1%2F6qVsT%2Fgxp9ZF%2BNqt4lgyqAMrgoGptEhgrMmhUSASytr2FY%2Ba5YClGqyzCjIdY9poJ8kfx2B6%2BByKL72TOx0lHtNERf7QjFi%2FpPisWu7JpD%2FbZjVe6h8w5RTxj2%2FovQZjswfGOnTEa%2BCQ2ZPZDctwbZPsnURGxTQ66ROkO%2BTm3AZcRFJ9gYbhvhj4VvHxxS7RHfRCg9Dn52cGrRv414x%2BHSY8bCWJ3nzAe747QN4jJmhk2OhjEJTXp2eAqhbvdom8oV6N0EVH%2BVv21G0jo8bFgAiZQ9JqwlzKkqWV4bab4OriOMFlNh5lZrZmzXvtvpFztAQ4yyogvntMLxp2Ds5XhemOY8NZ1lVivGXBJKrnYJrBf0nSRJv%2BL0WLarIHAYGUmy5fEwt%2BWmwAY6pgERX1ZqsO2b1T85dvVqrWkqPwulhx%2FRMxWhMsF4Ew2UPL3nXF7NYiXioFvn7qSFGo0HtP2HTNC0PN45qvQSSWhO1XPmpKZ8hppPxs8eSVlCLPSqR39cTpc1xkzT8VhHi6bfWGCUd85G8QLm5LxEHvGASPZGKqQDxXouWF1p5STp4AHg%2BZODBTbXe%2FYtOQz5Le0pw4xeXjs06LTHmR%2FdeLtKtt0%2FICuE&X-Amz-Signature=daa748cdc3b1250eb72418356bc324f813a08f7d3dd496388f18696e7eb7a232&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
