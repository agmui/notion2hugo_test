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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR54Z3AH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGVoGCfnWLuyg81bkF%2FJAOGdEljexh5FrEe5sURHh6e%2FAiAUQrRXrz81j4luKZG3zNrN%2B%2Fohssw6vxONtj2l6iyKxCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMNJ%2BK6qTL6fw0hUOVKtwDkpTrRrL1Q1CaBi9Abfe0zaIKJq2UE%2FY9JjllAY2GMsMiOrOSBA7aARUjKptUf6LgANVdaIZJyfpbarnXnmOiJemL1jzJYiF4AsO3P8ket5%2FB9ILvzd9ANV2Kpn1FuPV6BsA6uZryTdkPbBWyjf4BugfUFK%2BMXSWtweDXmcrm7qxf9dyvopJtVZMmbqYzGy3P1DE2dvR9RzoJ7vYbM%2Bz56L46VmiVnFP9f%2FWwqokMa%2BUmzFFVFMLRLBHXHXZjNWvq07da2X3olvHfueJSG5GghDvY9e%2FuxjZG1r3o1Inr0Tvr4rycqBccmnlPnAUyk86kVMDFXM8ro2m5f2%2FX%2B%2BX5ZXFCUYTpzHQDzBm99FZrVy9QHqrVtRcJlNACyPOyFs1frAsnD9Pr66vtShkZtwJPLVvoUUyslqjuyBMGdEF9ViOJWYRpPkaIHrlmQc2J34ZP7kaovhJ%2FaO6pZgQBMm4Tku2josc%2FjXCsLA3DnlJze5Z4pVQ8rLMsVMeqwLssA9mflZhwclg9lA%2FCpYkshB9fvCefmtOId%2B1j9p023vC%2BIIurojHoh5N3JcXS6oz%2F6Kf1YTt0KTxUVCsxVaco07XJ4wslBca75I0x1Ar03rduTS1tFBUkTP9vr4fdJYcwma3HxAY6pgHVz4Nr3j3vVjylxFwQfQBV8fppqbspRD%2Bo2irw8VGUUm3uu9WlurSf%2FwxNMRcCTP1IGZrWFwoXSFDywiJQg4mZh45DpgTk9qzvF%2ByBTQnjWhyvqxwAc7dF5oSONMtwuhQw7ajxPxlLQMj5Jdc0MR78vptpJc61TArYFAnDzEDOobBj1Ob6EwEifqi1%2FwfjhStpAfpGfhfdBwJgZR2pttw0lLd1r%2FHw&X-Amz-Signature=8d5e57ed83d9ef6f0bd164ddb7425622d996aedab82926d01aa8201b09da7092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
