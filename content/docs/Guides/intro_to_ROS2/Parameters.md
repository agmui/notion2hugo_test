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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6EZ46F5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC2Cw6lDsoTAwGteOTgp4tGw9%2BzHkj%2FB68EK996dd%2B2IgIhAMoo2ZGtqtJH4%2FPf5lu9zZvfjph4mD5Jq%2FZskyEKk4pfKv8DCEIQABoMNjM3NDIzMTgzODA1IgwvZZ3oA04oHoPR%2BV0q3ANgQLWd5rLwuZVpigxRGBHuk1fK%2B%2BtXxdaqf0Bm9fUFd40mV10Eu9G8ULNuRdXics%2FJ%2Fv0P%2B7pFxefbB3qtR4wlPEPlLqAQTV75mDP6LawOr5Kg8DcOSQVlnvwVNb%2FBzv3uEqOV1qlbsZ%2Bxe4SC03L9SwkxVx0r61w1hgEbXPmyA5DeGQgBdJxmMJXKvYqZ9Azojuxc%2FKP2LebZ5BL6lv%2Fds1z%2BhFbNAZBtTxVAYVbDj9Bv9430%2Brh%2FwY4u%2BQf03oioY5QudMr9FVO2lewLVrjpa337So8CTZ%2BKRy07Wuh0sXo4veSRJYDlKFkVBHzUY6TMWarprOhkXNhWK188DvsCdDCioytfKl0%2F4MLG7hv4urdSw37J2sSxSV6mRvxhzt47e20w0gL3El4%2FYobTlJ8pX%2FPWYmRdWB7JI8AxdVZSA6vIGZGxMFxQgTUFhrKq%2B6UBJgtsCdoA4X8D1rxjUVhlCNrxKoFmiIvXZnu9kVksO2NAGIGoobWMUcckkPa2u2amCMrz2DCWhTOd1S5lQglGhLbtWQZo%2BJ1aVBh0ETD9c8psBfeQ%2F2GxxtQrKIt09hS1VHHzeHy7YhxF0A48gi3A5nNVUdl%2F399bULuXIO14tOsUgk%2FCcxwDc%2FRxbDDEsdjDBjqkAXwMvKzp3xyz%2F7LeTem31hxGV6ayiuoQ5oh35Up6BBllvl3CIN0ay8XfX%2FUutpirbfp7tP33J9CoifUrsljmNKfVPZPKdwK8yuE699ZrpiVvdKJDFscbizGlxnrSJ%2Bft23LawGGed5jG2Lu9q9aL9IBTNsLoqIV3KqNm61ymis1pxAhQecvWrasEdAXw%2BlA5Qx6cGPO0IkFnBLCVD8Htdkp9rPGr&X-Amz-Signature=7fe4b8f80e00ee2e9ec9fc9da1e88bfd77ae40c41ee7891c4c2e0ebc4f0ac696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
