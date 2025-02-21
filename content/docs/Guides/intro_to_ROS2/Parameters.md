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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UOFA7BZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtxFnaozK%2BGvcaphnoF1diUcVCPUvAqJjdv99LIs2XhAiBokVAWZvkzA%2FQxFJV733%2B0owLMxKx3oAHdGoE8ILwoWSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6RpsdcU7L%2F2hBVoYKtwDWfjeNAYdUQs0QtFxvVBeUlLG%2BGxx1ZpoFCF5ETZNUXdbCeEyqpbHTk1M4ZBUO6crNEzkGJFfD88oj06ba6HgKPSjj8KgzrpTnD4%2BHTnhOnqEdLrCFPQ73do8mPxXIDY3NYgUxlR72w8TMfCE6j7NcSgZ1yO7JwjXbZJM1cVBb7Pe0BpQoYJCkaWPjG6DcKImVh8OAp2SNWWHA6Rdf7YzD8JFFhWO74gfrMTxQptgV4zNZZAEdyM9icPxv6mNNTJ3osbmpHCZ1Zsx23royvQDgyVruxkgGQUIkfu1lsTmgMvql1ANBgzzzfMSVtoirZLnK8X3CKyUN2Woo8hC7zESL6uHjQg3uSlVl6qA6QukXDxgusq68jdRWTgo3QZGaai1vesF57vcktNYBCaZCAHgsBbHvF5Wua1SLW4mbrD51mHcuaEg6w5f%2FszaA2aYGazY5eeUzY2sJWfWONAmLsq6JEgBQHpfErN5KRFWLfKNpI%2BxOn4Qm1aWi2mcJzHFcml7iw8Cns3wUfRViCbo7pz1SfK%2BRGKYLMdZzZbgF4iPqt50yEU6hLJW7D%2BCU69DovmjnRweGrN%2FSyqNVn1%2FdyMWhRmVcNDQrlURTI%2FRjHp48G%2FM67h55ozWymwN6d8wid7gvQY6pgGbkaVeMJiWFJPl0PtMnPHh5fU%2BgW66zWKaYG3Ga%2FSy%2BI6g1Bn5LZR78O0A%2FE4IU9yUJ4BRufRXYoOHPvep0iqwyrNvsLqS%2FjBwMs63e%2F7VuJroW5c0UupGUHWTKy9kF3CsTaFXpZPwLs0h6iNLdN%2FtMixt2ZX3r3CPTINlkRcwuC9Lv2hazoJcHgu%2BQMmbBiyI8%2BoF7CNtYyGTGRUodN7NHDUBZlfu&X-Amz-Signature=e84cc5bc58a771cdcade41b9fd701d68e98a5643ae6859b4a833a89d0eb1afeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
