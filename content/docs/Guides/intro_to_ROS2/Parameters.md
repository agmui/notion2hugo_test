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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CLOYAAF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIDYX9cDO%2BtP63VxhsVTu2xgI2QDC%2Ftz4vcWglPknvKzWAiAoWnNCEsfRn1noXNvLLIfXW%2FVLOeaYLePU3zabF48jGiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvGFnKNZVpuSlwgp6KtwDarClVW%2BIFC13fRki2qyE1SK%2BlQJ7thEzGIciIAg8FP64MEp58Gbrla4K175M%2FRvLdlbN58e1%2Fd%2BZfRx4o1IAwB8iPD939pYi5CejXys9lzF5KmMfum3RrgNK0VKQOnVznFTzF8KVCek%2Fy2rgatEFlNdMwZz2j0QBvKekfMWWe5tZaCIDESREvrgacn3sAr6PljIpk2zr4FtehAflnY6IjfJ6NI9AMMJ7Slc3lw3FDMz7HW3RmCc71bWLCy5hzgRADqCb7gfF9TBx6QXwVe85cQo%2FYF%2Fz%2FcWarmC7lf%2B%2Fi9s%2BQqCSsIL0qDthAB7GUKz%2B6rCg84qy946DcGRD84WfXEcrv5ZnqQh68VCy3jTW7kr3lS8X45ljDYKtElbMjSY8Jg%2FrNJlP%2BmW7rbtnrYLlTRVSBIXJ07pKteZVy7vY3s0kbdfn1I3L7zVKDElFb4QmmlMRW8gc7A1s6WD%2B1dqM1l0GOcdBYkss%2F%2FICR%2BIpDM5Z5gVTwjkzbedL6UA1Uetrr7WmaCI%2B%2Fks%2Fai0WyxKXXLQmVIV8ezVw6lumllPMXJEt%2Fq8cF%2F4nR29AQyyenRP1NRV4Ga1SSQ6YuprTlsVXpCcrzOFHKohUWoMUAFy42U%2BnxOBU%2FPor8a5gkrswg92svwY6pgGfy3hH%2FZKAis0pXEMRvpZH8GK8Q5mqEWSKGHU4vZusf6Tjs2Kqy3pRSSUh1sO%2FX7UuH%2BXkpV4%2B64A5uq0DQy4mKH9C6zFRDZKakXb0p1gOKMptgSKq9JoKAxjmvaUJYIbCpRVl7%2Fn7JNDf3aSrB1hY3TIp4wg%2ByBt8AJblghRwAeahxuW0dYKLiIO0bHKKs9E4D6nLnAfpgp0bbw8%2BJfjmkEyAUtZ8&X-Amz-Signature=de65a29940ae53a265030f270c5e28a81644391c847c1db78d786f0dff6f222f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
