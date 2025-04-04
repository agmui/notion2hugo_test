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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WLVRBFC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDph01whSpHd%2B3FlfmarmNtMeFnEjewXbdppjHRWgW0WAiBXMjIjE36674YUWTz2z1W4a7RzyMGTKioVqnsFBxZJ4SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZRZIAF4FK%2BNQ%2BPZKtwDp6vyWLJq5fZ3sNfuGYmYuVh0TAT%2FIzOZLXuGIg0e7hDF7n8N5hWdyu2vr40IhpBAHa20X5Doo8Mhj2EMQi0NJ7VbTsFaMqMOzNKkGJM7HMgYbIJAuRR8D6tJGPmOjMrQOIAjzR0uM3nraMh8%2FBr%2FQFyRqbKiE%2F8bEoNfljqCG8ZMb7ZNK72OGRYwvr9x%2BrJzqN5mYAcCz%2B9U0ite8t5rXwsUINNgpRnRFBQ4d1nXVf%2BnjIkLNJVtGbQXaGn0m%2FjoSUaTAmi1FT0XYIjiopRc9EdsfwcG%2B6tklZ7vjwXaKEqJpDxdn46GXC7DKkfRllG9karkATss85us29H08LXh2z32lMBhwrCtx3%2BDo%2F1F56WQ2Vzk2ZpEWL7dHfcV8baeIVSzOj8q%2FeAp6DcRyDeSOiJVBoSNW9J998BuKSofYFqrgsWoSe%2BPZN6PYblrJTdLuojv1DKQK6fS9ghZAf9XJm7rrA%2BVH2nD8xYNUj0%2FvcitKPx95go4Uu9mmlX2Syh57uXVVryfZZY117NRm4Txmbh1cF2BOwuTatjDzHEl9pToeTp%2Bd17U1e68bBZUa2E2I4WCjvqTGp8LDyBthL2FBRtZ72U53gK828ZTOq%2BTL93fjkWE5AEqdUtYiOww%2FOi8vwY6pgH2HV8Zu7IvBttbmyuF9dNTUAorFSxDNw3dX71eB9h02Ugcsw4RzzoNWWKjPdTo3LWwG%2FXLdPWoYpy7ENCRTAzp9aS7aN9XOYdmrfot0bh%2BnrnljQIfLqn63cmnVB7Q2dHsPfoKuPDeIVuWUhzscZHrYR9cggmrJmkQPb5pn%2BDVn6HO8J8pY7YA3Ki2Y62dNaHbNnsYLEuykN2MpEmlPLRApKl8%2F8pz&X-Amz-Signature=24fa32cf0997fe319f0141d24a44890e08d053fd8d2fc4b82b1392abb9df16b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
