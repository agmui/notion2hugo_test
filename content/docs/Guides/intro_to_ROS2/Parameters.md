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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FUDHXEF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHrDGcggpGRekKSCp9VygppiIu%2F6lannY3%2B0wL7qCBQxAiAE8ACyaEpUtkYzwTp%2FENhA1Zi%2BrVXo%2F8OtGlWyA7caUyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuOzIoOfE4nGWcV9KtwD9gq4FY6psU99LJtdmvvg8LgKyay0xd4mQVbqc1cjYaipQ2jgu0BVeL3TL%2FQacNCxqnOfPEX6om683eitGlr1%2BeHG6k8qPJzuwCDuxGj4egK1MVtgGWeT47crDGor6Lo4efR6sa6L0Rkt1%2BZLpwXLERuXpohJZarIxB5P1OorSTqOZisr5dXFoAlJBJ%2Fn2fkVTtRthA%2BcPZHBW5OSvErosPGpLjeuculh1siz8TxOZTNhgHN2t6JMUU8ayqMYwAeRWqsbtLm%2BCm%2BJI8mHy7lQLlX8TWhAajbcpaIGEdVip%2FU75%2BQXJMerNMTqI6gU0wOXJkYPH%2FljUT2aoh%2FImQZKZdZaSPo3ihTon5hc%2BWHJDkdT3IRLtO92J7eFGkoitwp2fJlAiG%2BtVCdijClK9wPUA%2F2upNeR%2FCRGlsFvzc%2BbrS5U04p%2BNffnCvhKvmN1crv36OyF7jTb%2BRfnnpB9iRaFFAXos1WRfeX8c99mu8EnLbSeFubQ55s4RsNscJWNL%2BHRDPnxs5C8gQknQumoNW23G7qAJyc4MHXyMTro1TB%2FjX53fdnD%2Bt5VSibFI%2Fo1DmfT747R%2FP4Jyu%2BLWmfn5cn5mhLArbek%2BokB5tKhBYTqmu53nl22X%2FylKS%2BSgxAwp7fnvwY6pgH21TcxYSsYQuga4l4DeMKTHTnfXm3I25IHx9NtX2oLl4K9k7egDnix%2FJgGF4iQa9AvgSIl5p5XQ5%2F%2BtLCrAl0QWVfUT3%2FGVFmopg6K7XS06BZtBEyq5mXUYq2R18ZhLbPF77%2F%2FOnQA%2B8uH006Fwd6q%2BrqlnyFbikkXO%2B3kGQCjODb35da4u0IiKlURjzdiQDfw%2B91DLHuq01Av50EsNgwxE4C1iWDF&X-Amz-Signature=f5b51a537e1666574787c58df959100bc6cb1783067458c075e71b172c8837ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
