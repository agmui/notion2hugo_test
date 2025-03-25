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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXD35QFS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWDSjpiPhal7DU7T0iwWNMi8qEG52AocQAhtbkAF%2FItAiEAlYe7iBLWqc%2F1bhvjVex9%2BaFjTjFgfblB1lBBOjaQ%2BOIq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGWcTmAqm0DhLT5xByrcA4B%2BujkOmTnesBkLh4jH86Sq7PECli0avpWrF2HiMFgsGOqBCKqp8RJLVr4sMslvysq6Czi5emIqv0QKMsAR1IR5Hv3HAtWRVs8Ismc6vTSFGg3hZA5b7DThfs105HqoJQHeHYfQQX%2BtXqOrgwPqYRFmP5%2BD1VA61iBP7fvvpnSf5djLHwbfasHafjYBKzJciTW8OnOq2AevIKDsePncL8VbLlwPrV%2Fk9MwGXQBMl%2BWfuFQqtIoDD3EsE407hZqiYXJVAMwBgM0EyFa4UVA03l1LHQ71r7XQB%2BcfGyvXi2PNVsFDQ3CSZ2dZjhls2GSl1LHL07g%2BlViSq77SxNJbazNZa7wYnCc0XCeTZfMcgyas8sL7G7eUDiDusrMdS7F0%2F2EqNKomTAjhjx%2FcEaCbHiavXBeIIzMph78K%2B7kvUO9BFBLszosq7pQW8QK7ylAxKAY10MAV79J%2BlDECYN4sBmWQ2hUTEGHC51ylPHZjP%2F1l3h1OYIKK6gzoQpD7iq5mSoZpsJiczG35Y%2BL10RzkC2U6zKQ5gj%2BEuAUZxWe8aIFeESaCqdQTHdNgczzu%2B31p8pEKUSKd4SUDrotePpEtVPU%2Fk5QdJTNy4xQj96BmCZdmm7NfsokJR7%2Fna61CML2Fi78GOqUB%2BQVDmWow8XAK9549rPa%2BXhrhBevV5bUA%2BLl%2FAC5J2IO3uyYW3prkNOdKJKbEu0y32iKxy5UuxGqAnFii6GDot0o%2FL2IZDDWZZZNBJNrihg5oS%2BsfC4sShqgx8brJKiA9oUwR%2BGPGtpni2Hi%2Ftejor3XGKPYhEVa894axnQEGUa4CHS6%2Bm7xZrIfhjx60d%2B7j5n3EHNoCSrLA3GTnHTTEJ1n3ovUY&X-Amz-Signature=d68d310702358e7e79182920b02a9619b2581bea49637c7fdbad2e7257184272&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
