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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW62S23R%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD8WiLjTBLKIvh5FyGjNqEJ4dQQ1HMACKjZDZM8lBeQSwIhAMYj9cxYNq2HGbhdqVfu6TmgePuo2dNJe7TD3uU13dzzKv8DCGsQABoMNjM3NDIzMTgzODA1IgyRY%2BY64W37pBM8BGMq3AOvrJn7PguHxKkDS%2ByA%2BWbE2sm5l8QMji3EF8VFcE%2FUK6VQytnvwAnpEOO13W8md%2FOyn4%2ByyOGPOTNjChfMS3XdGSzK%2FBfw2cFf7An%2F9W4%2Boi0sf2vDdU9HvZIbPaVaskKjUNw3H17Akvd%2FvbuVzexmxBxMWU39fSXLVUmCjXfJMfGwoLVwdfNE%2BhQMyq1jfm%2FCb9HERyA3eALxqOa3J6km6kgbYOZKITcNnSkxqJREggHK%2FwFrJDcNAjl6ZIavZIr%2Bgz168hUll0xKOpnr5qL3WfxnfcRHgvFD85KnG525JkZLBC7YlxNTic8Lp5dLmBydtTRuRsa4zs7uT%2BjX8BdW0MES%2BgIWLawy3YiZ8xVXN6NQn1JaJvWOiZBCvxQ3fplca%2BC11WouHVeRkRZQ5BA5h5xiBq9M1LR4IYJre1ARlqa4c4aV0bh9TnrjOH9xhz51S%2BkR2nXOGudhhZy12KKBl5YnppeQJ1xHDT54GWfDYNJw3UpAZ5zEt%2B1tl3H9k8CiOZCjngGibwrVyT0tlnowcEXk%2F35e4ODt9XpNvA6MZymuILORq4%2Ba0YPZf6r6kxX67VUw4hxHgadlBLBRsZnja%2BjcANidPGR6p%2FeXi13tIDaHPFUrs8ksoL%2BqxDDK9ffCBjqkAQZHcy%2FpkPMwptWcgWg%2FrSMy9Dtg1PhCzkwu%2FUVKJEWEEtfKPVinh3LvwhHh9pnonegPq91t2IPnBhvMAwE7ee1aq2585Z3R8pT5e7pwOD%2Fd9PXhMmA12YT7UJzMfTwHtB2tKVZiphLHCkkLU6UgMPXe6u5edaj7ZW04uV%2FgtzLuGHKzIIOh6OiT%2FykBcasZp3P2ZnKPeRlUa7RaNFGFfukNHKt1&X-Amz-Signature=a88d47bd9ee56edc7dca3cbc19f9c69aca2abd928307dc7250d1f687a0549b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
