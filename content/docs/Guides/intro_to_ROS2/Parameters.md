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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF3KQEWQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGl6ejX71Yhihp0n0JbCL0HAWrJE87svh57EYHgEkMwvAiBbTdlgisQQlwpyh7uAIC1Lpr8qlVtBaBT%2FH3A4QTsFjiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIiLMY8Lt1lsegzOKtwDLv1MvQx4L98G4QFxeHFqmJf65PficLoTqK%2BO2NBljJR5nSk8RC12GO5jgtKXKFBEqcPL8M8aNrClZTGcLq3nP2YIYEZVxjRLJ2Uqog5e4rhwh%2FTri%2BZUeh3ITd5kWONPjkp8uBApDurILgbS85W4glB6Z5GHCDtWcbOffzszwdPapXYJVXq5JhAQbppadNZ18FwHZ7r%2Fmd13dDmusfI%2B6ntZMccnEsPQKjCmB9Et%2FGpUeBtU9Boq8odfQfzRVkeAW00iXmU%2BvKTedxTY3cNqFE5rlqEtCFxc8G5u7igcFWXSqBY5Zk31Xff1qfHDROfIkyP9FKGCyqIZylMC6b899HV9eAzn4wYH8oFNpbT27nDImGRdbJz1iPsGS81FyNxO7HZh6H9c8aHXn4elvCA71xhx2EVs%2FRB4qEvXK7yW0xGl4f78PMDpYGfQwvscjyZ8ajj%2BRJjowxecU9LJe92cTLy8Nfm%2BGlh3xmdr5dfBtYSXTUtcXGp17Ly1QFvDLLVOStFPk%2BmL70DOzozT%2FeECNAlF7g96zTIC%2BUUh3M8DYHvhD1YGjpjA%2B%2F89oWg2NUFNstyFSCD6LzTDb8hZ5l9u1DVIWqg9t6zzhs%2F0WOYYNu9%2F9v2i2i5ifVg1waYwuMC4wQY6pgFPuqz%2BDplPv1YDEIhW2MxaornCj02OB%2FcgvdfWmdJxq2zil39lIcBR3uTtdnfvnrdMinYXq5ZE%2FcyRR6LXqBYacAsfEC838n3BaJisC7%2B9qv50cuHS68uRSPP1%2FeU72mynM5OykzxnlXNK%2BQbWAlsqmN9IRaUe9jtSdoADO6dBAqmeu8MHOsAMHSO1sltmPhEXT1PX9E22yZMn4h4WIiMmcqirwIF6&X-Amz-Signature=802072e48466bb2041116d4912aa6697a0aec2aa35c6dedd6c7c8306ae6557d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
