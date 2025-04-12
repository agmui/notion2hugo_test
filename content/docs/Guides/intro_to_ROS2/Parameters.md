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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GHLV2U%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAVb%2FJeoYmDYDoBA9VrYu2iYkKmtEKQzN1YsKTrx3qwsAiEAozEgYg2tdtHgrA8VCSsccUCaJbLWPregxuNLEnxtdZYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0Y3YnV1PpXYyERHyrcA%2Bxc9xP88TqECVk%2BKCPN2v%2BWl3nTgVD%2BKSoAsuANiS6YmKIjRlL9O9wknkqFwd3BCqDBybDAqlw5I9gYT6rPsx1YsJfuKTWFzCHw%2Fm%2FVUzgSLeYZmdaZZIdxGLmPMjirEipjGlOxmwJ0nKBrllnQM6iMX4Z9f63zCZM0RG2YxbMHRuQ1IPakzj0J4DctghOgtzCK7taQEJ2LPiBLI5v3eLVX5KMa5VIAhPHto9SV2akJ9zVm83bguZNHyEhHB%2BwkWWOF5vn0YI1j7pzfsQ3h049Q7ZfSsnvnwlE2mD0xFQjGuiiqo7Gs2Fit4dGcyO3WIVs3HkUto44bagZX4qy5KloXVyMDXcBGdAdKlfEvJK00Ah98ZSS8XyCv%2BrX9G1AifqfnnDMotq3XakDXIxsCesmWHVzr06AZk3L6%2FFQTpRoKHu2KHKWKw0LYj9Bs63BGQskqEWM4vHb0Gr%2B1RXNicxUspuZa8zTi2sZisy%2FryP%2FTex0qh7jxgxM%2Fk4TtmRAmSCDR6B0s5DUWB6JTvuxFBxsQwXtJhljyXr1yBm2YA9ZxRWOX%2FG2qw6La%2BoPpTMTb%2Fhr2uMV1p0IHbBP6uFAriHaMVTxzRxANfyNw45QaKm4DhsVDEH1hrvj6Rl7lMIe4578GOqUB64ntbWCgHwhyF2PFB9WcK8oAVatxEv3EfRESZ9QU3VOg%2FlcGE59CStCPRSzx910Rx7fUzAS4B82%2BLzwioi%2FZVWzHRKvSMaIbBE8sp2nYXapt%2BOT6lnpj4RUMRbOl2uoVHF2FoEKnuOT7Z1Fw3pDnJeq8rdjxVw6pDvcEFkCSmDs8Q0N83y528%2BfbA2qX%2Fdomc6REO0B9h5EdJt4IxiOhqInttqWx&X-Amz-Signature=40b8b8ec2199511cc7140cde66fa84fb69ee0d964b210f8987b068f858b3a44e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
