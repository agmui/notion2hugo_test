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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSP5SE6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4Bizhu%2BF9avaTgA9p0Pt1Lz4oKPQ%2F4UBTSyT8NmjKAIgXAVOWVN8PLsuEi6SvNsRvSC9N0anQrQptuNBYYR%2F%2FhYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7%2F8P%2B%2F5mtGRKj3WSrcA8iYwU%2F8%2B4KR%2BUkmWnXlhR5yH%2BoHOufCiKEleyv%2BzeOv1hUeJaaUH11Y%2F2z0GbWbVxlXcmdMjCIybiX%2BSUuzpAGBjFbZOU9oibm5t8d90wifs%2ByJE33Rze%2Bm6iX2bGHX58faYeoMZDkHHhYFpv66SwwUzIUgFxMknKeBMjJ3MLqvXBmB1kJ8kMHOzKI6h4%2BOMf%2B4wKjcHHMNOMfTF3zovellgnTfeTOyL1y5py8B8jDALc0wn1sMThdSO7YfqZ04Xz7JjQkUhiJmAlLRATBs8LMlm597BXbY7xTWz1UKJl5esmVz%2B7hE43o%2BEtgRBAzZs9svbZK%2BzF3slycudE1xJzqHvWu17Gu5MKbcOHZ%2FGM2fYBSEwv1n7Scf0Qz7hKmV9LzhXrLqnn4%2BQLSgpYUKVST67h4fcTjiQVLabVPTUHrEl9eoVVoyOwnkjO5eY5kWGCQn7oJVD%2F8nAjxEwOnT5hvEMKgn5888bTTsgz5VQoeN94REiw2B9kwAIINuF3fedY96t4dL%2FB3hH1emiAUVW78K%2BObGgQcRx%2F0oYVKRuJkWNAW88MUEKhVYjvvOSCH1yI1eVzTKitUlyqV66CThD%2FIn2PC2akBUyRslnSK5ForCUTk5%2FlE1KhNmgswPML7K%2FsIGOqUBQZQb3pADA4m0DVp8afKwH%2BimGD%2B4awzZtj%2Fh8PI66u3jJ1cl53EohtAfROMuZN5cxKpsR2ynsxQwfI%2Bp2TPyzf%2FKmUPKY5mUIBu1K9Mqz8Qh8NJLDesnD3wDBr4VFcDr3gqRJbusw3wQL1mFJHVMFyNm7hOUsu5JUE1wx6a9xbiciDFqZVddKjXJJ2RK3wNWOAXufb79EO0Q2h%2BYAj7b8HEH%2BlKM&X-Amz-Signature=eed6d6cd451fc087f5f1ee71e43ec06b158843466880b4ce5daad85832025663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
