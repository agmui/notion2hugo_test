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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIPYFYT6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcP5dVhXG2qONmSpqTjrYnumRuHUJdC3CzVLpqer2D0AiBXmEGvxmVugLAZ2WC9GtIq5PyEezAoqL3WwlVa8H9Lmyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMt1nVd5450dNCe1JKKtwDh5eXq8%2BG0BXodLnopUt5gD89Gd2XxWZLStrnzBbPuFVFwLT57yMcQ0MLJGLbjfC7%2FIIUqCj7RFQuI5Ax6ViTCHdpAauoYMjhrVU9Jz4Bzr%2Bo6obbI9aVZ3l7sZ5ZSZohtxtEhCO0aq2dN7%2FpNMjz0rQ59Ab3GylQ7JBWwxJO2Qg9TKiubayYkoRxnI8uVrYnfxnSB5olLd4Mly5oJa4R%2Fdu1MhVkwotr0f9xCeXkfj5hyPObweuhlbDyeWB3gv8n3Jlq58cudc0BC7dA8kLP83y8cRFJpEhVmNVjsndvIaWPG%2F%2BWtZ2oVpoMsrCr0ucikufrkFFzGyMyH9DjsFdJGkqLrrjTdABDiYthn604B%2Blsx6%2FYkV4AyqpsL4%2BlrjS%2FRYeKPDJeCitoIzp%2FY8nXJ7PupVrzKswpgSSW2sCRrxzpdtZfbdbYgU2iNlHUoKzhg1FKPpW6%2BA8mE6SwGOcEhMdxvj0YZBj1%2FG34XhssiSLb2YalNio7Ox2PBIqNFHg1SkVcaH%2FowRF22fCBqIie7j5MQhSEtzU2541dCPzLxyOfQb5yqz2cOuQHhTQpO9OWoGgLLhycYc0s1nEUef1l15t8dzRllsaBMv52UWD0l%2Fhw6unq17EO4UkyYmwwndTTvwY6pgHaWg1S9tx4U0bBBcYrZTxpt8ClxZWFEE2S3izpBNHUipLTY71NUzFWKEDWQQwKNcgg4V4LMH6hvzVIrDauDx0zSNPI7qv%2BZAob6J%2FX0TaPnRbhTMrP2wBBevve7C%2B7BAJ2XpdD9JRKZa1w9For1kNOKIrWWpTMZHN%2BsBYjTa9PFMspcu73BA3Op%2FCrwnVcTBqy9oj0lt27v740UREbkcOiHn5olmQl&X-Amz-Signature=e5315b9e3213bce4e96aafbe5f9b7fd8ca9cc1b9fa48698224736058fc3fa0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
