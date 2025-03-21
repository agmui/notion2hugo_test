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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHMFIYI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC3DouwCfoC5Dqr1QDSquaOyqWVU%2FIvSqL2VhsKwG3dPAiEAultmHqbrar63uazYHJ52KjVdJyFEO0hldb3OkJJnBFUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxrkk9SHKjMgGV%2BzyrcA0md7TomD0%2BdZ1TRk%2FCrS7D7JcZEfdWlBLlpDXuztp8rpKb%2FluE1OhiXtZ7%2BA%2F%2BcAY11NuSkzPKUYXVJqsqR%2BlltRsTu7KQUHvrkd1yI1V2gD8jFUEsEduzrxVno4bqPMCCMxtaguGpqGElW9O2czd5g8oXtGFP6yierqchRzy%2ByC66UbSKT%2FlvnI5OMtnl6KpEvAgGC4B5xvh1oNLymgDjnbx0pmyPZbe6NZuEFCc3kpG2v5CvkUu%2BKCN5E%2Bk3bgb%2F08bsdugRFnnW82WkfBMCPOaFYlBzF4aSJz5fDr0XSqTGhbUwLw7T7J2TqFKLzwHLnQObdcW%2BkFp55gm%2FsM7cGcHjre9Q2dFy5IrYszJMrx3CCo1Qz81NsPTCoZUkOhynY7px90H7kW4tWNPkSQw36Cvbm6ocRPsFRZ48qtoV4qWD2AJX9pDsVh1Lfqm2gl1C8xGoPgKsJeSAXg7pY93XZ6pKEqYCnLUUm3ZcsYBg%2Bi9nhOghjZYbiSLR02PKqoebqdL2M5KNNLA4eQklYxE9qkhPyP46yNyL1x16n%2F03an1VOYT9s2X93hXrCrcL4ulRxYrRyYuimHJv5N0ESqeod9ksFcvlxVR000CIiUcDImjmmNg7A4VHy3WeNMKbc9r4GOqUBk2ZzBDV%2F5j5Wzi3G4t6VKXtuklIs%2BLwICC6RJDjjT6C2fcAau1KtfnY1v9ZiNuzIgzwsL%2FQCEAtCQG2EW5PIo9ZAfdjhUpi5Tl5WJWN669jTN4SmJeClBp7ckdLfTZw40%2FWNnP9YNluQWi9LdsodHQjPkWhc5LfaFTa4DnJLTzZleHvgic%2FDFmxf%2FIMHYQnPez14z7FBavUT5P2ynuNiZPsNt8j3&X-Amz-Signature=42d974bc67ace91bb7fb02441420eb5591f6ff8ddf8214b6ce9f28edd2f7a19f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
