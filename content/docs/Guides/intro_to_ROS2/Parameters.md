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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXJAP2G%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxbrihXkvoMWjoeRphzJzRWWC%2B0DBYXOw4g54TgeNRjAiEA%2FKQEd94C8sKZ%2FqW8w1Q%2F81%2FmcHCnhOG2oMqprqkKObEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDT9rQ550WYDQsVlJSrcA7d55hiZrANZNxKHZTlpZkpaOj9C79gNPMUHhNQA%2BdDTV0mlNLp1o%2F72YciCnTBxnO%2BXtbmpdb%2F53HVAhdkyJQt90ZCxTS28cQDvNOSiQf9gUEq%2FdGtbXJ8pFKNIznIy37RvCGpenfPTM7DXI0V91y%2Fjuu9cVWeRFSyaQUr4XeggozMvr8ruEyFGWfJk9cex7APAmA56UqV%2FQXxoIvNJdd863KtFtq7Zyb%2FzlHUzSuoklR9kiQe7ztPUP5ixQVnxOmhswwCT3qXroPDvefEiFtguedqAe7RpsYKSYH2tiIi0aUJpdSpsbJ0H5M1APtuJe3jx51maEvxGJ1uPud378MyXRZ56amKeyNB%2Bgm5UXRdL4hMGHjLAwcc%2FVv1KySpDSmbXJIsN0AEKf1r2sKfym435woLXXzrvaX6ySi8mLOpWiiEfYnY7ECDzyFB8qPvUm5KcFFLYUlt9BKJluZOjadRbH%2BINKAYxtXyzYnCp2VWqNIosoME1WYI2NEaJZ31NaoudpV%2BBNwnDM1xF4qDbGLwxotsdBN%2B4Gx2zKFNwh3lWDYKldZuFBbJCp7zgaRw2i0OLF%2FFrFwB0GH%2B7yr9ttSEa9KR8f4hEnIN8bOJPFMoIH%2FQhDoWCpXrMfaEZMOnNvcAGOqUBsgJCjl88hs%2Bt4De5W%2FCmOJp15cILltKc7l4nAOkJF8LTDtl4cpZSmXcW3WWpdjjSOpKuUY2Vk0N7pa%2FqCkrux1ijL%2BamRnyd15uf6tN9yaR2yCsULwdKlFjPcx1Q%2Bm973DS2XPn00iZ1gqDXoV%2FEEMVyI1WS7aZG2waaF0QSG2e8w6NeSPl3iSRDjyA6IIkEJ6QxarsYaAGqyOzJaDBpF8JrauIJ&X-Amz-Signature=0a876880e4e20955da9a8df68c6427a9a3bf618c8ae2c2a755de521bf1cff098&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
