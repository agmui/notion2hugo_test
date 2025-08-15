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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVE56AB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIC7wnc2WpSLhuLohvXh40sejeha0LbOgxgvpZrQ3GUKCAiEAxX91G2eaCm%2BMqln7jSd11owgP2BBa1dF3duF%2Bxm5Gy0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBRdnXb56vVRX9PI1SrcA43CWE9Diywl%2FTpaR1U2Kguj7UgAqktB6UqmFQH7yibbE0pFDfP0aie5jOYICy61EBWF17hjgqAsdizhBTvtNr%2FWVKX0i%2FYDy1RowqerYnlcmf2epJZI73guKaqH8NYcHQfZ7Dk%2FNrNacskczLchgmntjz2GSQjwJze9KRCzii2hMFIr2YQVaOqScSgZRCXmzvcTm9BAnsFCFTBwUUekpHxaCdZUGqDkgU%2BfB3o7dcP0Ai79Cgvyk4FXuVh0NQC1uo8uwaUf3L9J0Y86QUAa4LiMetodVFNIFxL2WcnB%2BlWFrhxR7%2BZynXymH2cU6GWFx50mOh3%2Bc0pgNesvN%2F8%2B2aIjCacGVRA8nc3KBNyo8gim9aCN7GTQZNfGWkboBMEt6UZ%2BBRIfuP%2FxHwBt3X3h6TLIFLpW9WYpywAJ7dZTqrmw5hSZ3nB42%2F%2FuBt9e5QJW4d0opE85MdRxivJDSTkye7jy0mg5VBrB%2FFrbKSXaFdsINFeAt0Ik8xxvq45XboVpaDDqfp9LAR17LV%2Bt3J9ZWrMPzvXYWE%2FCnyOewe0KNy27JaXBBsoLRfkg1E8FKntXpB%2FCx2B4idOnXolKI7LIssnwb1WseVbOKP4nl5nI3NHQP1nWfZG5NJxuXoCkMMza%2FcQGOqUBwxMex05Sdn%2FbWsRn3niAiH0Z%2FpN6v5kn%2Byr86ck%2F9F9MfZIvcrotmyifLwErazCaOjn1LOz8DCCATm4227q2IKztYmhHa1bwWwVVI8FJZLYkN2GOs7SI4a3DRPHShB8qjsga8vyC04lL7%2FRoNSqMmcVr5q47TIbY3d0ZB4loLt1RnH%2FHleGiqmPbsZgxMWGafr3r8Qjp0Dg8S%2FKH6sgHjEvvrMfQ&X-Amz-Signature=1ffda48237444b2bad2efd5aaf9d23a779bdbc0317942b9a669b12cf50fabdc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
