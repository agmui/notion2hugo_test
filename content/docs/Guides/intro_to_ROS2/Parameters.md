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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGUJGD4J%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmwRHbLDOFKPwUL%2B%2Bber4XLpTYoPAsWGW5xAyKGes0wAiBRlkIalSsn9nJgFJmGYnbni%2FZB3AIGQgX3DAY%2F0UXDXir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMpn2Lo%2BzSQ1Ui2kFkKtwDl5Ah%2FLzrdx07FFoIQEFcULSsaW5gMkYSUM4GE6orhdgJU4LkgxDeKCxf1vq4SSMOGNdmb5t7CMvpzkEYjdihxSyP%2B4giX%2BfcrmK2%2Fhd5101mz1ZCsjRDo7rRdLL8YpT0w7WM34ryuqjBthqEP90CjdaJHfgqJvAkcj4EBDYhsE1Ug%2BX1LLbeQ3cCmYV8spFOTU4BXSOYvorG2Qj7S%2FdZAg4a5%2F8pKA57ode%2F6ppi%2FUN4ON5asncufmJMkpNC6duRuXjV%2FByMZs0tC2tk62QAZA3ufapqPBYTJrcgdta%2FaGMveg9YEI%2BECERyZbgV9MvGx%2FKbhhr4zDsUk7VsEwTgdrPBLg2PoutVqnWAzD8pd%2FFo8WXN6lFCSEh0GatPOdB7N%2FtsIVZqG%2F7M5RcjlhjiTPSDYxJTJQUMNnX1cFBH0rV%2BF0zjZBdIhYN1oyAIivhTofouaVl8s9DQ0rnFex2OCAN5cB7kO7BufN4xjO%2FtG3K26Z1lFFvRKfZEry9TMw3Jp%2FU9jkrhs%2B665A8HVlKsHpG1PU1ioM5lxREv6x6whA8eczftH%2BHEG6jnr6AzLfjMasVp9vxAbLp1tzEUFJmKwskGWi%2FjrDLZsSQ5LBKb823DHfza3ftPyaO6efYwxd2WvwY6pgGMV5V%2FlU3MzZbj1n71bEM8igdOUd0TzCbPH0HhRcrrzLGfq86NHTdGLabH%2BJLCRTAEL9173dHka3XruEjXGoFFJvDPpCEo57E3BmVmZq2wkZ3QpzmKiHgIvvaelaOhU3eOLiVuY%2FvUM3m%2FD9N8KcEzb0UjFY%2FsLdysV821yThZooA3253mYWIWn%2F6wNPmkk7%2B8AInTVhCaB1uiWXcONtkuboUsSUjD&X-Amz-Signature=460cdfd8b54a3fd74c2b024fce417702aae2eb43c7fdbea1b8d788f959e7d4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
