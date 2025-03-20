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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G6BJTUE%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC%2BLRM0jIjLw%2Fd%2BlRu8L3Uh%2BV9kGSqZC%2Bcm4SMg7RbmNQIhAMmNeXQaFf4Kmf8VA9T4FvdPYjuW5T2b8DtVCBDbrzrSKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf37e9xVXLaa%2Bxfc4q3AP1AUVYHz1KdNf9n73l2dcC33hSLxd1tjvWjbwabenhEY7fHhSaFtuA%2Bp3aavEdpLkKlHmm46Y7jfH%2Fv1wEmzb%2FNp4T%2FlnReTq2lBv%2FEzql2u52XcSmHB3M6Ngz%2BwhvxbV2xIOFtCTQRXwHiTdVlvtWP2EbRhP5LU6wFHTZOXABwbBIrDYbaXlTASOx4jk8ofTBzq8ArSIyg4skPqaS2lkf7FdrJY3IV%2FL7oygjqUqG26c52mAgvpRSiaJFMCjaShNOzLvrJp9%2FNnuoAzXWaOnx0SgyWaBsSE0%2F192uNZCIN9VbIUY530jv5p16HiQzbfEgLDetpyeBzGSu4hnpVascbpUROxEfnIgIvAxeIa1eMPVZ1S%2BzIxLEAp7Ch8EVsPib8e0Fbya%2BruhkdQzTL%2BkGV2sjFvvfmH6lx4Nbinfo5myswlkJGWfSzlVP1LwqyvrUDKC6W66EV8x5bEmeZojNnOxsN4Rkbjjb11HCzjJ0YxEAXkkGeMHwuYSdw2VF8%2F6jjOY3PT9S7KAhMoMxJYaYqV%2BGS4R%2FbIXsMITiRPJYl%2BWHD3ZMBj3il5rx2IVZWP6tz%2BDXDi%2FxEXv34GYfSYwMImmU21sko%2FovABs%2BjtW8csapNxemTNhK2a%2BdvjDO6e6%2BBjqkAX8D2yts9IS9Iv%2FuDU%2B9S5OT51UU1Ehasdc2M7NevugtwCGvSsLI8NzXcZ5dVURXTk31HVpv%2FO546mm8wQG2uphKHAJJ%2BAXzPVrt7%2BQPQcGIOfz7FO8Kd6WumFOI1y1nCkRjKHDZscciN9pkJPkLZrEknpJpqKv5LrBQNvBWouqUSn1cMUW%2Bep%2BpM4LmaguPfmDnf6IhxdAzV39C5xCSp3GglBkT&X-Amz-Signature=f85a7f6881bf5c4d8ccf06ef75b9717f0377b3c7b181f8e44c752c5a3023af4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
