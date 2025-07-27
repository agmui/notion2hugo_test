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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZ6TQFB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGfW2aGKSIHItoJbGLrjsUzBhwDSdaVWEvzAuL6JlNbrAiEA8Tle%2BTPTqTIBWhlj037w%2Frz3v3gDsRJ1o7GjINHEa2cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIFxvsk50QRrrHJ1kyrcAw7PpShf82oDe7SZkChr7squZctmplCdNyou3D%2Bu7mFfz5hl9UO97QPF%2FvLQ7THVtSpOT%2BCwImn23WcNz4VxTrnjKu3VgfN2PSfMqfoSNEwMEsddS5I8wTXdHVG2Mv3BVhK2A%2B%2B2YFWyFX25QsjIm%2BVMIzA5LHkwdh57m2btq9hW4pxQtApYcxNuhtL995F0bNmfRrDeqO7O3QNSDwMGXOmzJ%2FaZ6rMz6jCkkF1ZRjIJw4v8iG6C7kwEZgjTINTCJawcl8ZYokcVLV4fbIHVAEXpIJqR8ia7%2FQbvf9V%2FqAkDV5fEnou2zTyKflY94sI1Moks5mT4YcLnYZD1NDanrFc7eVSmGTjoUX%2FgfbNNRBL6BHmIkxtW%2F4P7wsklMa%2FNYr9hfSkHZDM5oH5N%2FJ2zkAq13nsVxge19Rfr9x9LA8gbNZSJHcx0QcIWSl8UPP9gtCmT1i8qUyBIbt0UvWmiKnaHTijGbH5LEnqszPVw8hFXs4RBdPH36mQIrJ%2B3irw5VAyBwN%2F8nacYMiG1DhUPzx3MvKu8XReKSdeRqd4WtRSk31YH2f49fuS9LhZklKrrgW1jR6HXTUMUQavfG2Zixqj5UFwCrDKy3KwTaGShNeiUBS%2BZ437lXaYikH0YMOa6lsQGOqUBq9ObKvWXfSGmYBdMPNF2K84FMF9coPdRfL4uNZvfJMBoETlITvSBE4jqoFftCKyl7HYv5AtG699KTg6%2B%2Bu2lYWH584fGExbBKf1khaC3TerHaZabxRfaJpm%2BE03YzrhRkXAQECk7Aob0oYKqwQVa05P%2B%2Bxkvvx3oZHEMohvFyXx795FXLH9FZAJ3xRcb%2F%2FGbna3Q6okib6H%2Bq55g8jEXMAPhzlou&X-Amz-Signature=36c9f5031a8bd55303dbba31f788c8b492a1e9353dc56d21533be09bb7ce4cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
