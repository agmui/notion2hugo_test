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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3TPTQV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD0qjE%2B6HPzqMISHRirZ0pbkAzuw6Dhomv%2BtzDWtQ9BbQIhAKmwJPptMBTrmJUZE3aZbotyXaCWe7qJgC%2FmwagX%2FCdsKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiOJmPXffHGTP6XbAq3APKcdTDgTgr0fAVEHdCCFwI43g%2BifKnRtSHMfhwes%2B%2FczVca4RsOasKVBHpYfl9UWdn1ZlgRusr0taKHlaWL0H7XuWBOfGnTvzrwL1KwGLuI8YY6x%2FCMYS74iiTsqveMJ1Yu%2FYIpAI0WlcTqwAigLUbu%2F7crvjjDL0cyuMiXspHOi8Qorx9z%2B1TNK%2FsjqINL%2FXz3ARluh4%2FRG2zL%2FAg7CZU9swx8mh8j4nzVXWG3%2FstJ4uCroRbb7YmF0UDOxCBzHri8VZimHMWhGnvAcSmnLtEGiGZHQ5r7V1rjUYuWiPxNaQEfrw7%2F1MCPJ0hoIRgwBmLucqt%2Fe0AS6SMIy4m%2FwIioMZFjSqrLMNAm4c4bzCFh7%2Bj%2FPRa%2FIp9q4k%2FlxemWDOftj83aPzebMlz3sZAfljgEzlH3OfArw7yMWvwXEO1ZxFf6RIOCFGz569uy2XK1bE3xTHj%2FXFhWCtyhp8voZjt%2Bw5sKxHFQXRGbeapS%2BlJLTi5Dxl5Hs0gSL4FXeLiGuTTZ%2F31eQk%2Bmnpyr3jjY%2B50Ue5RoETaa43K2BBjuKaq7%2BZktlGJs0hJBCHUHtt58mcZdZ%2FlH4KBoeJWli9%2Bgh3fzHYFk6y2URvqKja6Gt%2FtHG4F9jsdyXVDX2S1yzDT5%2FjBBjqkAXutFe0%2FUyugMULi0mwFpQg40QPGxPTqAAVhykop8yLKNskeeUAknjiOnQiiWtfjOv%2F4cXrqdc3q9%2BzrpRYN5%2FNtOgeps1z%2BqjAhItedjz1PUqZBCXC3fgrlejbMwXv8ThyYjWb58crxDYexzV2Yo%2B49A0TTd2JqhI4Q4FY9ZyzwNS8H4rdAoQ8GVcW6RWeW2YYVHvfzh2WbeHSGmf6hlV9M3JY0&X-Amz-Signature=26773dfc6bfe6ba47a6702572a212bbd6969f0dd2b9bd7cf702acf9f0a542a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
