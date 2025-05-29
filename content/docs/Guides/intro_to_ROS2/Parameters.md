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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5EYNW6J%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUje1ry6vKs5PfGo3otQrS3gWM8gE2cViq5lXz67ONnAiEAvaaK7kE7Lk9xjt0SALfXJoThHhfQOzY6lO4Ba7wd9tEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKHNyUOJLyLkW7HvSrcA0erfz0pT%2BZMxzMyJhbJ4xl2%2FGQyiYo82LTzYwJ%2FBZ6kKMMX%2FQRPzFd%2FFCePa%2B6W4CAKYj6Z8XUomAHPSJS%2BlABUVmQJMi1jEdk5CbB8XGBgWDyvhwHyhChXKxlfLtbZfhGKisK8fjkz8tRk6fKhQu8oPGqXQxPVhSh2NOlZHleM1naaKguoj1tL1AkHe56SBU3wcsjO89OxfuUiAIBVu1lCRig%2BJPZnp%2BlBOlPj%2FVs4k257crmKkD4ezOPjNIVzsrXmWF3RKCwGf9uCQYyCnLdCwHi5ilJbijZ1cbUEolNyIZYGlIuWBIpxVfMzn%2BqmCiTzg0nebKvc6IvNM8%2F5R84I28pZQqG%2BSJRaD3UeQsKlGhBMKwFjfIh8xva3IT3YwQgLAEaaLOZ3Vls5a7fIq9mDEvkRsZf9Yq3xYYaWpDtrbSDE51rfDshqeHYCxZrrLKNXhHuaCVH7BCPUycrWM0jrcWyRcmHewMfSI%2B0Q%2BoXd63EJast7uoDvEtXe69tvV0gN4jmC8zquFJM88a01Mk4h3YJjrzBHfXo%2FrmH%2FHU5UD3medb7One42AY2mv7ablOEN2loToB3TteNZu3EugAij0x5StSdvd%2FIiIN%2FucNIhCgtjAeaS6Kp5knwKMPP838EGOqUBaPVta5ywyGZ6crQYr%2BKSBsaot1b8Ri7B58og8nK3GUgwx3W2BX3NoxvJII11sHZEmlgJAUpBfZxkKsWl7%2BX9rRLVqH1PnX6iFtrdE5BVM0ZRJb%2BK3E%2FowmQLRj1R5uNGx4AaxLy%2BJaYUsp5skGYslpGnMJPk%2FWpJiyYSXS4JogBJjrZU4y93l424zJSvGKVfpIlo0ttoD4Ty%2FOMLBXv1gvxeweiI&X-Amz-Signature=c240a9bf85e2035e7ad5fc8cf8d2fd48fe9a80a11bb361130f35785e7363a5fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
