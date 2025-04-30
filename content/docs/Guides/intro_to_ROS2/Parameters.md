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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667IPLSDL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIAk%2FBEmSWGybf749aZjiTsODReA8njXSs34LxkNXZUsuAiEAl4jGjOhyW9dlDzovmAmS51B44%2FVHylqzfxXpZck%2BURoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNM6%2BhcUy6QHKDNGyrcA1DM2Noo5xLMexkyoOs6YFlU7YqV3TDS1LmC3oi6oXspeK4cakrLSyekWOVrSJthRvhl4%2Fo5zBqYtCh20oU%2BpZ0%2BH%2FXLbVUIheiFVRERIjjS8yHTTD%2Fn1zsIB7dIDgyyufkkqax3wxn3Gl04vNOddJznMqsxE%2BM2VOOumE450v3W1%2FbAWWUPUd%2FLIsspl7KZ%2F9Sl1%2FEdrGmFEqIUIqtGAdffkhMn%2Byd5l4tepUvh6%2Frkyomrng0WlmyBTqkth%2BPvH3VgWs2LSQo3LieD87g00H2QTcGFPbbk%2FEMTzzurl5z4uJ05JddxQVTOJT%2FqnbLpvw0tAbO5ITKJagnu3XNEVAmnSl8iQuImMUND%2B4kV%2FfinvdNcs%2BhM3H1ueizugCI1ilgK2KCI5iWe32W6PJ6jEtTSP8VB4bVPYKWUfeeSpBVkXHSF%2FsGrkhwslwZw9oFyJVC9XkW02v7qKorFZZ299ljHA5S4XfZ8yNYxGo3AcOuoRtklWgsCscE40%2FRUcHe3sgdPvwNvZwE9G3OmbaPOaqnX5gUEehP%2Ftyb0NpC7geUXTp1BICOXE%2BRRLceQ6bo%2Bl2ym05PrumA1%2BmnPLR0J9mDAjeExJQVXc8uUyPiH%2FtD6xSfZDixwRINc0zi5MJ%2FOx8AGOqUB3IvOQV%2BNXzQjpPmJrqrBkDUMTOZhcstwMoNeOQGwMDT76Gjlbv66YGlSIYyTv0H8LxqZdRHc663eXPKNB5wyEVOzdWV7F90kt5h%2BeiN0dW%2Bpj6V3Kyr5iaPjahA5rv%2BPocdfRgQnR%2FxqQInIpJyc5NfNDLFYavczEjJyAlIk0CNnd7tLYhYxyxhaOngkigZiXGKwUNwyjkv%2BrQglJ5LET%2FqK9Zka&X-Amz-Signature=6355b3b6c4e8b34f0828461d10ae8cc077eef05e44155ba4da17dc58cfa2f826&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
