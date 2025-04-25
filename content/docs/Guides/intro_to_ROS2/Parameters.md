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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3R3QE6M%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGY5eOkInh3ufCTC2QIg4yidzrIR5nuAFfD4dT3082E7AiAZq9yz9C5rUeeRz%2FhZQOBTkylpYKXpxsam%2F59V8uOGRCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMXtWApfeygDjrEVN%2FKtwDnB2yX3ElbRu97hoyH8VcUxL2MyGTS4BdzaAfaZ7uSdZ%2F0RJclr35MC69miEyXaZc21kUiI%2FB%2BOkNQaoswJVNDqS0MUmactf6zr1Yf40fvQ9T2dkTEW5U%2FgvOXQHa3gIpu4A4HOeAKhR1zOONDFO%2FViuiWm4smS%2FEIsXMhhofYhcetrS1dRWtpbbzPAB6qoR%2F1DBVLq6BPAZuNFQwZKUQsST13Cw3iC4I%2BOzFvUKmi96g%2FKWBz5A31VLeO%2Bsm9Zfn6OIEUf%2F%2FyZ20k%2F7P39I7EOU7BhoAh18xiJmA1QZgYWVpbQyzpr%2BjVVC42KcGUGSFSFLQixlk8%2BK39xJgU24r3K9z%2BySOOt4A52FQXwcsL4CPTKuELUksK0djAx4MmecqokyJBBcI2sOKvr6v%2FX6TWbiVvtxPEkEDHPiAqSlDjbIMP1PrRIzx93igqZNRkEt1JycrBu56a6yfM7QPJRL1Kd6Fs4%2Fj6E%2Flv8YoNdjSzmCkijDqmBpjSwXV1oB0mxArihKMlcPKdFl6o0QlITujN6Hra4aevv7wPFTa8TOeWG1ZJadbkW%2FXUayGrPu1W1joytVmvTOCG258YvdiS5EfcDMFCvrSNkGeSBNHoapPLhBoz5xEvviQHRYx2aowlZWswAY6pgEoOhhzPPJp4rrQt7a1yH5TOTfR%2FbQmduFhXbUcu6UMw42hyGtFJLhv49QzGKCdn3XVjiu36EyH3RS31kbg8%2BouLR%2BCRTGB8weYw62FsVk43pPFwhsLQEQRnI3z6QyY2BRsRadGp%2BD7jYFRATbSiD5I6HclsjdGgq%2BxKRc7hkLNWW8Fax%2B14%2BwVP5%2FS2UQpma%2BzcNX1ipyQtxUQi7VXwaXD77mqHMg0&X-Amz-Signature=6e925cbcd0a6c297cfb5c395d0dbf675f3f69d8b88add379422e2c164760a427&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
