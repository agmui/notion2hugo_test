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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LB25E5%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC8cMvOshfaatoeb0gPvLrPKS9ziA2B4GTRsHTjjrgVcQIgcC9JO076X6wEbSxEwrhctaYkVUL%2BkXZiknJT9v1%2BztQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJxBrAlTg%2FZ72WDnrSrcA%2BrS32ZQ3Z9bxZKiuIm0hSSanmLG94FCyR08GAH%2Fp81nTNbrbUsR%2F68oWLmNfVDBbHGuRnldLaT2Mkm4JR9QokzacQKwU6mgbto7JF46tlMMHwzzrKaizFXjH%2FmCWzf64P7iig0myiceL3TFAMgfYqioX4aSJyUNoMsWT%2FO5owqRGqZpvGsOLkNM3UZ9%2Bg%2F4ToPZYGO17mxAWGDo9fAiCagSRByuDFltZmap9zwUuafgsllhZ8NZ0%2F%2BHR5Yvkk086DceI4K7Ys8UtV1DgyF4LJ9qg0QuJ0SfTveQZHKEGMiuQXe6bZ4l8mJpJ90r0YyKds1eukiYtRwKt%2Fub9JugKrHZRVn%2B5%2F6Js%2B3%2B6D1K1FpGszrsABr5nK1wT0stNMPrmSsJ%2B1D%2Fsia5emj%2BNGzSRGJOVuxZ5bYYVTdcTUKH%2Broz88Rx%2FRcQ6E0xd5YvbGqZBcO9pvXzbqER%2Fspb%2FdiGKWgMDmkqRV3LeVR02zBQZVBz1%2FDvtq%2BsnCoaqQQtL%2B2hGwTHINCqHnuEe4QlS7lPzmXw%2FoAcCFURczsEeblOaquqZWVNYTeRMPNLjk5ELIk0wpDaql2X5dJEJsLhGPZuHAkODcNHdy8LwhF4Ag1rasmcQdVsTLB%2FgzPMeMqSMM6bkb0GOqUBQ7rtOIVCWyelmxIlG7VlIggz1hY5cNheTZd9iM9Pr%2FKoOXKTQE3iQ4QqtSjfE7wrp1%2FxXWPTBJQedEBgvbFuVpvvrSDnWSPbKWFdHCRkBN9WmCl0i8pJV8hUAhlKJPdrvqWKhxzVQHarBXzNGbVT40GwqCxUNA6vWkiVLj9yhazm3Y4i4h1u7Co5NR0T8%2BC4hRINsTS7%2FMcUb3RjgYC31GBql%2B8G&X-Amz-Signature=38034a0aaf109db46549691d9b179ef9a4eb37a332bc997aa46d7f43d0ab63a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
