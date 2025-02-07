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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFNE5JD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC190XaUrTfwLDrncPsCjkMcBgb3ESF3pRU37WPRh7S9QIhAIsZKmU1Fox0n0wW574Vbe6XQT2I5oYYFL%2BiOAUHbneyKv8DCH8QABoMNjM3NDIzMTgzODA1IgzBFVsZCzm8HWI04PYq3AM2aCkDsOJZN0Tuqv2Vbnica6wAv4vAaoCjJPgL6i1PlDrKZ%2Bgifx5uXppjgt%2FumVxobCOqSZDZOmlgFofsQNnRKRwXBJWoGG5e4f4NYFURGIKCA2Zn4MwehV0ViNbOor1PmvXKGaOeiYtxqe%2BV5mKICM1qhQBxUmAt4IxVA4lfuJ1DoN2f1606Pn6qzfLJjGZ6OAl7UaDSaMz%2F8Dc7u1kgzqsphDcxxKiguYJEcHHpuysSzHtoEB%2FSfAtdHivftGtEW1ZDldNEgffdk1JCB9cTSQq%2FHqslr6ONgOq6ua3cHBA6pfR7kcm071TpfGVOT%2Bjc%2F2xvy3okUp0d03yGKivfL2N2o6%2Fds3GAsaGHcbN3SeYWxA9Wifm6eTu5rsQKXnNOk%2FMF17D%2FEAxDWTTFfVX%2FV7OcX7JSIGfQullXdPBxRqZd878jF5b%2FvuhWoWlUXVT2x7AOZi1Cqu%2BlDd2sDJSR57X4GHye9%2F3Yuk%2FuS07p11fEuCWk8kEd%2FTbPQ8rCPnH8673e11ydrjhsQzVZObm1g1oqmYUqh%2BnvBdcQJ4%2FUU2EWEZMYLHEKoqxO60zDN2kC1zgTG4zUMoIAL2me42FiVjcpbAbWkkVFqbfSrZsC2SSnRqB8VFgzAOojnDCMgJq9BjqkAag7rd4Mai93aeg3ZDV1MxvIAnUDKfXJz9VpEKRn0Adaj5TNlxEPsPSxNAa3qITVbkfWNBml%2B%2BmcbFKJN%2BN19IyCUOk6kl4Eb%2F26RCteyf%2Bo379os8rILTD0z9xsBH8DpEPfQoM6WEWGtief7vxUFcD0euFacOgeAyYRVFmB3AKzPvo%2FXuds5xbhSDITh%2BFLfv3kVBIzV9YnPmczMqPbVl9%2BYqwh&X-Amz-Signature=f325ba2af58fecf327a3eb939100a92bf0cd685e28bb973706623078a1f2cdfc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
