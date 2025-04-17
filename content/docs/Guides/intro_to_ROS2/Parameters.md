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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJ6EQ3U%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC%2BQ6zVAdV5aqOc2gNGvcPpRZoom3KzJD%2BcdthcRKnVAiBf1ObL63ooIxnbWO6%2B08YNgmw%2BxVVPCghsL%2FnfT77%2B8yr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIML3b04m3lCfHo4ZnbKtwDiASjEjsc%2BX2KmepfvVqIEMVXZHRuszysTH69I0OG8tcSMwQO5jSmuAwQTG1Brm1L3Wz5W3C66qvqeoWsCMMzti7UoMS2yqwLJK1%2Fwm7v60YuU0vHWwTkMPYJvOpbUkdA4vORR1GB0kbM5kWLDW6aKm1WLL3CKhEtXpOOIwxXyojFuYwXZRYfgWexj3ca7yry2ynNqy9lSN1VZnQsoFA2R9f%2FR55m9LH6%2BqVKmEM4vi1MVkLeUIMrTJR9yu6larUuGpuS%2F0odCQmd5iNjD3nsAj2%2FhviEj79xIJK63AXNHBxKnsJ%2FOR%2FGdBblTDlM%2BA1SF4gcriK7vUWXinN6rs1oj1wcH9Asz3CgeQQoleCl8WiUC70OsyV0EsVhORD5SPqhvkUjokMK%2FkIEEjn73YD2ibHA9Un4bTSrSSkVJUf8wf7NExvaWrUkWXNIz%2BRAWIFkdrgH7Wex9o9zmgoV5wyUlMI9Yp9pdL5SEjs138N7BSPWJDf%2FEpJ7p1ID1nTjrGPECCew7mDG8nboWcOhuhcIQXiw4yP9B4JdpwxVC4%2BGDFeZAV%2FDbESlV3XExu8hYno8s0Ef8rEO9841hXlibd1RcNLL9Kof885kX9TSkFveWhgCvvRVlU%2FEiFuVkh0wyfyDwAY6pgEGKLweKKUInkcdhJCx7biGjv6iweOvp%2FwaQJW5KTmpy5Cut5PAn%2BaR5qegUEJtY0LMFdKumNBdbHzE9lVst9TSA%2F9Ugf6vCnkmkqW1EKqNUav%2BaNGPWO7vKBTbY3xheJgD%2FeFDsUtg0lNdhpRzfGx4IR2y4vB1TbldQMK2TlCT3GxZKHZ6xYyXTRTCmun4j4m2t%2FPtR%2F08Ep%2FB1wkSPQ%2BSzTFh8pQG&X-Amz-Signature=1bbc0f482af03000f813b132e804339f636555ee73a8b46aa946c94ea2a95258&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
