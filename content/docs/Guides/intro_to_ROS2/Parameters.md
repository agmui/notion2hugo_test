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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQGSYQM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIANIZKstrb19RR%2BAi7bnVbQ7I73VXFwthZUVI0Uk5bNaAiAXTv%2BHTqbgTeMUgUAKCUIsbRoOPuWYfxyj248E2lBbWyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMKB2mf4KBxUveO7baKtwDdqH0dzZguGKqFYwx%2FktRCtJlwSbUQXy7IV4Jlswc2w793NOw0pWitK8y2dPdZPD%2B2Pf11DGdRH263ctwyxUwvUvtW2Uuu1m0xIvnz6ucgcvIu5WvCric64p8VELINSYRz8i2eAyi%2FQQgRK0ojnicB9e%2F020K6I5oTZ%2BK%2FoaPY%2FnbVXVWKHmsrBqQ5JUV9CMoqyrzCKmX%2FnJoDOAP525POCIb9BhQjVmukjLD2oVrg4PgmHCSriXnK3gTAnAtz29vwe2Xqg7Vo2phOzjdHcRUwBPGCA2KLXDbDRGOcmuPquRAttAihwmbvv%2FPlkONPp5GoOP6X81MrPFkLiIRhgfZjyaOUjaSWDeqFSVWSXPiDs0hb%2FrhxCUZpfHl9DnkpdPsSFjO5AMYPLBneMYxY10nSgdtVxLt%2B20a5etadepftoiSCylMNCgwD%2FrXhXmx1jAinaQwoeqmXEaGV%2B%2Fv7XMRy6oZoP3jL2gmqX8NBJycIXJZKaWFUD7lNF%2FwRqZPZuY004Xg6Xdb536%2BhHB8C6grTagASZ1Op9QvZUuJ76pabzen9xSoxC09kiXKWevgMz1iT5N3mg8iPli1vIcOxyLQsBsMAbgTYt3dL79gQ0U1oDhw7k6lh2g7g%2BgrGvcwz9KCvgY6pgGLlYNjOs%2BuBmVlv72g%2FkkQf9F2wmAL%2FXfdBQNoVs%2BGy%2B1QDT3rm1xgNC26459TnRWPii3OhdUG3BmZQpGlXTnS21ZS6pgz%2Fw93v8dk71wpnK0I%2Bbo05pGSF4A0KuNDifYcOiWThDZdKUQ6V%2BCRBZNj6FhL07YCVGrZy76itcRFEMgGgxZKF1pMRnTB4KHtPwA9VCjUw4RfDuyF%2FWQdhO4LWpG6OysT&X-Amz-Signature=933a90b24ca3855603df5e3bf6c3c8679b3f9cd93e3b918b201c42919a50450e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
