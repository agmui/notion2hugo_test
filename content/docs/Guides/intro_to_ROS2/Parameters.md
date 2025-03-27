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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4OTJAP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5QBZRa8rvbtiYbc8Pkev5Fnkm09K8gp4aJtCWh9jYCAIhAIfa%2F8NXgVQKsP6EIXbai2wp169VFxT0iPb3wrJgdRhFKv8DCEAQABoMNjM3NDIzMTgzODA1IgwghCuZ4qCxMiJIwakq3ANmgHAyNE%2Bcn456dx1nvy4dQMd5GmsdykH934dlMg95gYmjJ%2BeCkj84DZ5q%2Bdsakpt6SnbbhhadTzA0q8PPMPbYb2crLRcM7y1o%2BJt4ofi%2BQXZz2H1bUBygK3JIvGUpty9Ec3oZVIRcj1%2FkwdWEjPWV9D%2FwK1vNGmijYrvdi0%2FmVLvt2jOaQmlhv2sVsQBsbgW4gz%2BUC3qmQImjy0hbnM1X0RztWjcUf%2BvX6be5X0Y8yv%2BJQJdJ3nS0cHuYWrYOTYsExn7lN0kHsQLQCMntYCSKdF2os1W8GLF5sRqiaysU0ix6Ou6DjThnKxPCmGkk3gRevCNKZ9hUMK8uvUMbkbq0PfIUBwKuiNdG7w3lBFHx5rUesy8rKpVrtQYCq6qgokzMcGRiFDvCJRLE6X6ZlqOj4%2BYqn3R5%2B%2BLcaZ1rOQZUO4vbAM8VmBEjO8Fc8cNUL0CwOuaorhAfI%2FRN1Sepc1KoJQcXQj%2BHXrcnZS5C%2FCDF0mqfbLEG4%2BnQEkN3CZqu%2BK7NlnzAPBFkiiNtp9Fdt50Cf8TGDroj4gWTf975X2gbOlpUt9gufY%2BKy4bjbRRnq5RToOD0jr89tMA5pxeXP71heh7a%2BaPsIg5YR8Jy9Tnc4lTXYFbhftB%2Fn1RHHTDb6JO%2FBjqkAUK0kQmxZiShvqyvzvFJv%2Fg4Ey%2BXua28TJTjC%2BSWd%2FvEf%2BMPn2MLTCCOl3biEDD6fU4KwR46MQyjoazzqr6blp7eq8B9%2F1KnVC3OedGOLHEnM7Fh2EQmen1lcqzNd57MYyIpkPMScikMHZW2aoU73uyPFMNBCdY79jpRw1KShd2NJ9LsqHQVwZBGsEDu9dSYHObUf2IkZL%2BFqK3hPmDJsJYJJcrd&X-Amz-Signature=46a65bfc7b811921f639aae9614b1a0310a94de4d6630845088a98d906266df0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
