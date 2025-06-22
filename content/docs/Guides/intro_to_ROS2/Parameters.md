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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5LA7TI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIA%2F8O9UKbBoJvnAOHLut8FfrNdfgfTlR4uRqV%2F7wYI7iAiBHRAa64%2FIu%2F9qgZM5qXfrk1FOMTHIIbpjdfdGy0z0G0yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0SYNjB49OiMjlGDKtwDh0Xa2yIsdUeCHOu97RlamaUDAJzF%2FSZX9mC%2F5mi2CiImOSpn8j2nfq%2BS0fCRIHrdljGX8rbZSa4OMECzMjSq0VKfM8XtrQybL9a36tG4W6olXz1Ojy696b%2B8Pb91DRFf67AsuqWX8bnsLwCinO16f6P0DL5rgcuo4NBmA6w4WPOpvetFEmjtIEBCZFmnBKMFU2IKcn6qEzFt6nKv1%2FZDVQCNrXCjrL%2BbD%2F3HRPZzov5OjVzEOD69RptisVQNaQBjqGWt9GiqHE9x6TUqtHH6VnMU7Wj1q2jJNBXMw%2B59G4zYdck5DssKlfi5S5ugzNBkF%2FTAPCqji8a%2FCxm7OhLaaPRkySa15vWl39xJt9UH2GvPDbBEkj6U7qh20sBkOEJHSW6R4dN0ve0U56BBzDFeiXFvpOR5e3LsBtvwS4UwEZL4oFfcu7rcOUS7LAebBznUWGQT5Z%2BbTCfa11h4PKmWqw2PLlq4%2Bg5uZ0LHnVlJj4LUwnJndNOA9nVauhSSTz%2B8S93HFmnGvKZczapDGUGPdiqsagsjuwOJMcffPubrXw5mA%2BFtquEWIAl5hQMT8DprN1sJgyogLqN4uqt3jCTWC5DGVwUKoe6STiSG8TuOpJhYsHRgmmQCQbAElMEwyMfhwgY6pgGn5oGCf3v8ebBg7olnFeFXJnu0Wju1kwv%2FWQ%2F2QugufPGyCsYAha%2BYMpIBQw%2BibFTw24YyveafDlViw6YHB7b9vrIZ9v19ZmKP7HGzpJJoRtwHyljUqMNSuYhqy%2FZWmpdw7QQuGmdDg8RvMmfSUjby%2FU4Et5RHZ3uLuss3rXhYdq6bjTeuvPf7NXSodyzHowv47UIJmq9Nwu5l%2BGFrio9vFGmUmNaT&X-Amz-Signature=4e080053d5cfcef77f63941bb225195ed0860ab51a829dfb138925b0b3d42024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
