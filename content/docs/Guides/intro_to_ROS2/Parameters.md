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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666KDG4HK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDcicP8NXahhrhDwnwkEfNFboXr%2BytetjgZ%2BU%2FsQMLwwgIhAIY2tilnsnemXofkP3WyVFIuEoBdi%2BlYi9sWRJjHmpHUKv8DCEoQABoMNjM3NDIzMTgzODA1IgwbPnbJfxZ0hZO7dtAq3AOshVIu9HOUVlCd0Zs5gYmPkoEetiKezUjN7%2FaHEN7PFmVdv1YjYRbI8iklrxwUNsflL6FJZHXJ0PKVvi6bgAmXdHd3jVTrCTAuaVYcTBaqIF2lk0WUKznXrZMcnk3Bv7VC1VKYojS3dGNnOSvt5R8xQXwJRmA%2BxqviLbWSnHjjL4niBprwVzF07KD8jm8IPDRKVYDNccA7KzLQTNeTwDeL78fgvXOx%2FXTFHKOeHMHJUMYxKUHQtXHNtg1V2Aa85nYEYrC9oG5GyI%2FO%2FINsdaY8Yu%2FT%2FoQt0FwBjGLewM1dHz%2BLGjNdGeJYjROC18t%2F15hZI4HmuX%2BIte0w7ufWOBomWyezXy4XZa44LLfopZGYrCp8TuiiXOsU%2F8GQqpZ734zPA1r9sSAfXStlDSBLWnYl%2BwmadsFpmy9KUBgnyEVfqPusstS2FE%2FJCpWn3Xezf0UWVF%2F%2F69SGL5Ckfyi5c%2BscKyjhHuh1slheBk6cC4ghLIMIIf8ORHafZLa3CStnuhD%2BQpk5mfZJbQJSnlZOm5ZmO8Kw7VptTIk869wbZlcIBDlB3LJBV7XhhU3iNaVUTO%2B6K7A1BlHCXYGu3HNnOXcTlVELJumcUI1hcFtHD7%2B%2FTU%2BL%2FerXuNlko2aO%2BzDGu469BjqkAU3%2FYAHqgsMhuLbM2Li7EGpznCqPgXveDJa35oqsr%2BFuG%2FL83dGZHTqi2WvvD91bh6tYfa1E%2Bu3ywNMhxkqe6nf3L%2F5Aafs6DBlGiXUs47NT4IdYpCK768XhpKwMgsV56nMPh361nxszYPkHScS8fN%2Bl1vZjXOK6dGaw4nnmQL17lPTXLHmFZoy5Xr%2Bahpik0hKEPVD7pfle3qOTsE25Ywxc8Y5h&X-Amz-Signature=c10e13229e96f52bd9dcaf9f79aee92db3d7041354323e7d0434dcdd26708cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
