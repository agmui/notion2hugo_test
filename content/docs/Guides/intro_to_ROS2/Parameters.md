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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXMHAYYN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEzGOqlsR7ANXToF9VXhkZmoaEFau7tTvxG9erYAkRAAiEAipfjc%2FAWBnrDfoIqpCEzZ7kpMZkKFSy9wm47S3juyzYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLq9vCOMh7nRK15WhyrcA6XcFwOCpMMFbvRjt9pzFnGz9t7tbfBrn70OMyYlVRkFmDRlCZVD9Wt9uZj0YQYT7Hdw0LTh7asULdQSvB2R8%2BdnHL0guA6Qrn13SQrf%2BXjxmXRg5WeIhoC4a8qf8ItQ1TkaWLYuHiWhkmc%2BmLQ3w6yd3mffNYolITHUrqEX0wvB%2BwR5fJADLafD5W3OZjWmb4uluK%2BZhhPSQZWVhip75%2FIFNfaceNI2oWdRHAx7xAWTExvPCRxzYHmXvs3AtLXJsNrTtZXeuyz9ddmnX7IT%2Bnkxr4FWh16V2tVaB%2BSY6RLBYOtN4xOpNJKn2E7FbhFdCl9%2BhRenFm9JxeusxuPf0tTjXeGjyrFmQL4s1se8wn62p6f6H7YY9h5S3tdWdYTXLF5iqjwXAaRW%2BgFuqf2OYDCIbHzZUvj4Gzf2bBJtwAt9zxVTb4xM25gYfajywyPdYeBdHzl7AlZVaaFliA%2FC9u7fPrKwGTdXFl4Y32b7OWIcZvZ2DFZaHe3sn%2FUOvB240kbirBNjUpqufkZNI2MA2PwFmFUEtxP6CXDnSaT8dbG4oyGU7d32LuRJyxEigZ%2FDYcWEfYo1l4ymh64o8yFRWmd1%2FtIgRAXX8BbOM956cBorKg6GMRKJ31iIZ2REMI%2FhoMEGOqUBOH0G2buekNarz4qII%2FLdsGn1flpIZW4eM8lVn6oiDsx5U1ncu%2F%2B3AvK4ui%2BGOeau7kYx7rgPyyi0Ufrsl%2F%2BCKTreTbc7qg986Gp7zhAGUOK5YcqsRF836wvNJIlwzb3qzcxHCssYMmwyeQETqUidmYPSaRE3jnZcTeCsD5RoFsDcw7cW4%2B5ADrCmUdDv4tRZB552hIko8hRM2sHWiUQEIE5B0XCj&X-Amz-Signature=a74853743c3f257f305a5e7419c5b3cadfc1964d61d2eb49e15dfcf84845f9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
