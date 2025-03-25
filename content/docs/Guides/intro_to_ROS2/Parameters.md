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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXORAOS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobtEIPoIa9jVGmb5yTlfBJpHeyFFlK%2Bx1FvVI349NqgIhAM4xw%2BGVx6vdcImU%2FgEmHHjOPbbYYp1HAqHMofkxA%2BZ1Kv8DCB0QABoMNjM3NDIzMTgzODA1IgwLKKOj5ZvNBwn0%2Bj0q3AORzA6ZgmhUi8fkpSBjCGgnpMGqptHZtH1aySEXcFZo3bSb016%2FqZn9ag5j%2BTnJfV5%2BC5ZjTGxTIPZq0wMRGbpSlIWHFRd9%2BC1b6sL5Uw6l1oWW6DR5V1zSm4jujUV4HI%2BPs3BjOQkBuDEy0AhuOLtH%2BChZHOT5kjus2S3Qc8rM69yH%2BRp%2FjclfwSf0xqNTNYSOP5Xun5vVuOBj%2FdkOHQc9j0EW8qOQKBDdCyUMIgcZqaivYG%2FQRVSoGCPS2pk81XdVKAEeMx5TSnMEjgyJhqyNKdIClNGAaZC%2BX0i%2B%2FTdh84y0BH4CH6ITdMyrUGVF%2BgtoYnAIgiMNDiSSFznppHj7ozEVw%2BOaaZA%2FNWGOwND7sS57R5NL3dMs8VVOR10T5SgvSXJ14oRuk9hwEgA6jlx0brpS2DiLoW2IlO2Ucwvf0evwHgXwN1b9tTC4W7z9za0ICCUQxIcsjaxBEx%2B3dDJIEZWXKWB%2BGAMQpdtd9DUFl%2BZnvIAwhLAqYrFx1ZqWCGYw43tSncX0H4rSvchB%2B3QpNjOxPz5hU1KyfWQBiK1IyUP%2FMT4rIROkdTSlHtk2D8HJFShe5ZekfC%2FV0vqu9p18%2FYSQpQSd7JKKMdBOHYyJjYp3bz23oz0bfDhLyjCEmIy%2FBjqkAb%2FWt0L8UZBBbcxJ%2FW%2FPbzSL8KvJudAHChXuZUQnvt9u9JC1hkIda%2FDcxAMetYGg4DM3y1e4ENnV3oB%2BepH6U%2BfEP%2BbJlyoV7iBLMfC8%2FMuVL7bZMT%2FR%2FzubmADh28ktbf34%2B80JLupFsvGr8RkMf%2Bu1jwfMse%2BOB%2Bd7YHT53rmBdt%2BclxO9xMrm0p1LQyGQWf5P%2Bqdk92W1E4kPUP8vwOrZ3X2W&X-Amz-Signature=5c7455bd9a04caf5e3532e167d1db67f7aa0cb169b7e1bfd9ca451508a6af176&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
