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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSYLE4M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCPPgO%2BbPep6hkK60Eijb5OggVgjq4NDM%2BcRXestnXN6QIhANdec130zTD3uy8HgO2cHQCok4zwM8vAMRgdBX5nMBGIKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysH1v2Bv4VyTloeagq3AO5o8iqU5SxrsD89KrLiHLmHHQv9J0fg7Y0IoeWYKmXlfXPmwxzcc4KE7GODY3MT%2BScaVzwo3tU6WGSAGu8E%2FcFQPWfYKfw7cw%2BKR4M90uPgXjEN46AGmxeOOOPnzENGEbdwxJkOUToiuop43qGaYbHaNKWoXuMzZKoAVvhJKoe%2BK5BOkIHvWVDUJb2XOOfIprZ5CwbJ0sT%2BVsLWJGYXXEBe2d8fDEYY5OtLcO0gcLTwLtd4IIGGsStNHgx%2BgPOXXygEgg4UwaFnE%2FaWn9tcu5eJ06tRPNRPXPc3JdchpoDUm6rPnLMhPW2gBjUIInx6snAZcVla3tZBR66zf8hNrT8%2Bjux16KONnSFN9X1TDI5KoN6yusJj363loGW5yE4sbA7UpEpKE0iuj5voQQ0j6uG%2FaxNqhY%2B1QYem%2BtpHd%2BdzzwwWkVLTCh6D2Bbdq2oer32okzhH64oyHOGL1ed6bVW5MEmqM57nXX%2FjiZ5BxEPnvlcbqFah35oSWl%2FR4wA%2F6YFgvdvQlfhyinNG2mvH5b1IdyMXNPDoDvGwPaBKhSv%2FNkytVas1P8tirb2Efb3dsWdxKClncvXWikqdXAbU0fJD3WyRjwLEHenaHYsxr%2FSbM3F%2Fk%2FzmHQqFz14PTDm39nEBjqkAVG8%2BtFE1%2FIR9EBkwIYhZXsAwskHQTVhg%2BdZ%2B14OSKPOwgozW%2B%2FCjCS%2FEOEMVH9LpSbSpt4eNcDLxqu5nW8WqfZ9gKnAm1WrxThxLMlq31PECZ6r1Wc6ccYvcJSO5a35OIBvZRbCq6Lxdem5Wf7pF02nEfXPl06Hq6nA%2FxWj5I8XOuanypU2edcdwcktE3ALZ6LwPsNFJWscQx5pYHk2Saj%2BDeQx&X-Amz-Signature=9bb6172f7f23ba1c0cc4b09fba7b0819510c29d1fd4406bccc7cef64ed55749a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
