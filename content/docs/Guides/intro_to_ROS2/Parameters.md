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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGMFL4DZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6%2FdFtWICBjjXRMneenATpumZUVHnPNHdZLPOExslAFAIhAKUqdVaFauWFzCbHXLb1DBGK%2F82%2FRQoeXk0hIJsmAGROKv8DCHwQABoMNjM3NDIzMTgzODA1Igwiz2wIWtU8wAi0feAq3AMwtDPe0aullfaaMjxCal3uAz8KkZsrXY7ddgQu06cSgWb50YNx0e%2FXD7x7ylspm06hZ6n4lRcinglB21%2FDzeINVKFQJ6%2BISOeCelfjcrDpuurv9uAb3Cg1FNkUbaDTJITkd9haa2G7q4alnfKf2rbmHah4nG%2BpKOlfZVivDjdqFrt%2BkcM7IBAUwdh47DLRmWBs8ecGpawf471%2Finja9R1XwZRfzLwPZd37tj3eSrv3fv3HUGID1nYnrPmqDTOu4nuJUCLbB6Lvj8Gl2HsZxi2%2BAHT40OAoJAfYq5WLmkQaI9VMuXBuf0%2BlM9oRdtQt6W6WReixYQRYnbp4pynNOfWYRe8htRqvRCsmQa3%2F8F4Dhc6lzBIMBRtyLJNQFwKNbV6aUNRMa1HVZocoUbdJgrfSU%2BqK1V3J92SqSWHqLWTEkucM%2BVLp3UXdBUIXehWPucrDJMewXq8YreSOMAmDa2ohm%2FwRLmg8BxXvPuDl4AFCY5kCrZFsY5X7ZqWhNg%2BGSeGikWqrj%2Bx%2BtQdoLxTDsmU1A1SQnc%2B4aaKC8kmCl6XWgfgdXWWETBsplIveopVQPyvl4tQg0kTNd6HCycK9MLPjctqyrmFlkFKafPEYU%2FBEQkpiJ2L%2F9HSETZtBKTCPy%2FvCBjqkAfZBckF7eLzdzOGqq8eO8yPPav3qGZ7QG6gcXocT6fji7ZMLi2IWgN68GCvwUyesWDgmxt0VxScEDkcL4K6v0naojFruvWJ%2B8KsuOwfZA2z4U9R5fwuUyP9lSu9U8zgFjkpg5GSoGo%2BwfjuZq7qLr4KllAf3g77V0Mho3zUO4%2BdkJbzfTftxX9pW0j3hiVIJnYOk7dNEQrmjnonEgtOHnkebKAUP&X-Amz-Signature=73ec0a3b417a148b5a640bae372f908c7719d101a4c64feee3a08c9c806d7e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
