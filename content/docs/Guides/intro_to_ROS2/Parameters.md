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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7DFLPV%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH95kd00AOtK8VBDJSpIhlMuFJORraFClSOjWZRM8OnwIhAOxo4drS32RPJGY3SggAMW6iL25Oc30H1QOkmT6ZLBHhKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWfYqW56iVVh3wUj8q3AO3gsVZd4uj14fI1oP0zJgriZIyupiowBvqDV%2B8S6i3aUXAXQCONhUwoxWMw%2FO3aFbbwnJ%2FkJkfY6RF3H7sctZV%2FqYSahEnlc9sqZ%2F1X1UGxhTGpZ6go5QOfZnPEcxNkojmPHc0te5FKN8FvRU%2BOv6RzvVPz8HunkVWzFqwLRMz59dcwkO6%2Bv0gtH53pMYe81wZRjCEZsa9qeUpT9620q5li5%2Bskc9cpR31cg0HGqxRM6T%2BN2sbVXyacqS8ttbG2GpkCv5WklFHhdXJWbG%2BSFtCYfILQmhHbTM4iQmr0uphBigRi1TAIJwvINX83r0CRrM8lolcNJ10QL%2BkuuoqD5WqYagKT%2F9rUJDhlhnkj%2F9hdyffILncfvJj%2BRiM2SsPR5o0oA6IfDTSNhzMg1CmLRz1rxlhC5c%2FSbtjwGENKWqLm2OVL9P5WUJJV7wTGQ6onGc%2BAI1VIbFLBnJUNbh6Z3M8Z%2Bo%2FijkSVaamE1Q%2FD25fCJ%2BaPsVry1alrCvG093JB9F8mFQe8g7f07gPIQ1Jln6e8CEiWeROSzpxoZ0FaeDe1v%2FQmPa22GhV2Wu0WcK%2FutgUyxdFdQFiqBROdy8ZFbGvI1X%2B0en7Z9xWJprVru2PsrZbu5RB6hYB8NOB%2FDCB4vvOBjqkAdaAnl5VoZPOZW5ZOJ%2Fu3bP2J9ybMxjC4OdFSVWT5HxE4FAK%2F75vjqvRBTSOojtDxnSVhBSDXAdXUEhQ3FG11edcomCE5CgU%2B5My%2BMFMQAfd8sCLpk7SorB7bmBjieF3RNI981ipItCqLkLkjc9F1BberXPmYnx4aG50eRFZbLLDNkWlhf247PK8okdSRoRRX1QbPc%2FeXn7ASWB0PAoGRXMVzbQJ&X-Amz-Signature=85872ad88cf0a38e57a50f8ec2105d327bcfe50e0ce6b1c72be69f8eb574f97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
