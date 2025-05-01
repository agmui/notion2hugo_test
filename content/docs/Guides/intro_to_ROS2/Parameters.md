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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JB5IKZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQClBWXkaISz05Wb%2F%2BoIU7SLMqGYNjHPjGqA1bM0JApw1AIhAIy8RNlcZbKsEUzQLvFbP1XbUM6VNb4lwpEJwQenNEVYKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB8FBMmqnJeVDQbNAq3APTNu8tiy%2FM9F4yvguajYQ5eWVHjR8adsviAKyWl%2B8zxCiC%2FFOjhHl5fO5%2B%2F07qOXSS%2BjO14YrLhj5W51n4%2BwLk2nYWuEYjrYwY8e6AU4UIuqnQlK79lNS0fF8CtS%2FrHjAAQ8oMcu3Nux4kmIs8hehMXAV05nBAum679yJ0KN60xzPIkFv6LJ%2BxxrT8UnV%2BAG4CTOhfIE1UJrjAdN%2FC19LTTQeGmxZj8nq6fvRWtPRxwUAiOTpKfgqrO6%2Bwvxt44lnbd2HiXnq7xDCC%2BqPL45aZGbcWUrnopPttf%2F5CMzy0ePV2K%2FLsKbtTzvkoLaFvfcJZ54v2yM8beiaE4NNQEG9zeVjgKBZw46MzTc6pOz14qaqMAripTf8bkzTkqFIW0CssiJPZPVKYVL3kJruL29OYYxVfZxEaT2%2BD8RFSNw7%2FXGbKeEOOsAeNEB6kW%2Faucku9pJC4zS95CINIYpDkjTbnGKkCWacFl8a7E4FTIr8CKBmECWRNlwDyAqPQfcfIg1qGVE0oKM%2BkDDlvCDZ5lR2anAUum%2BVbNnQezsTOtJvwTd6FYxbfBL%2BtoyLPN20oVJvjLWrvQVZVEe%2F2v9EbUZ6pA6c6TGEn6jPoL0YoXlFtQksylljlDT1IXhRA%2FDCHyc3ABjqkAYDEHdDAPDZ26zOgFCbbFRoP2a4ufUj%2BOpf1jXjmhDg8T7TeuL%2BS4ORgc8sqjeBFjwBDlTSc%2F4Kg0xphl6QS7y51xkjl2IEuv9kF5NEGzpzzST6%2BBzd18N3nMYVa%2FhgZq5A3O4ONr%2FBo%2Bwv84k2yjfgZbwG3ca4QuwEHzz5m0wCDNplze71t84C6rZ8zBnZZTrERsNbhD1l08fk8%2BkRBG0D3EThG&X-Amz-Signature=5ac60c89b8fe629e9d92d9fb2f9d63a6721c353d0b103498a974c2793420f0d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
