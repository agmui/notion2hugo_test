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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEUWEBQU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTxhYN0Cf%2BTTqBMZ4JEHXHSTZjWEJV9PzrY6FB%2FFPT4QIhAOZ3a2G0DnnEr%2BRSRf5TWc9VF6cwHlR2MP%2FJVAE57uqOKv8DCCoQABoMNjM3NDIzMTgzODA1Igz7TANL27%2FRk8pytacq3AMoSY4%2BhBY1WTXdP7MaaHrNrcGNqAs0cznsuu0RS5gA0jNSPqFgpMrMGFcMD4wLwqgzhCq6CIsxmaMPtDm4A%2B3%2BP0Ix9nIDmsjDxRsWdkAbHelZ5s1syKd5W7Grb7u7DVl00TioF84AEQMVCR0qi8oPVPySqa3D5K2NcQSQBTHQ30Oxd%2F1e%2FIK19e6D%2FdRS6hwhGmq8DOaHIKZp%2Fxrob2CHIMIGEDBdQHI9qOd26R17bCmBHtX0mQpMXMCZd4n4pQfZnEmn8gVMxChX609WLTzNutglMdgYoBRW7m%2BKg1%2BsGc9NVPRd8DzrWUHgmMFRjmeJSwK%2FGEIUB6mfgZVooKc73w2Ihz03gjmArPz2Gf9y79ozoJ7E6ocG1NGOBc4bxqPdEzsoX3NC2enDAFchAouVcegVpUREP1F%2FM50WRTAyJpFF98eBBgI5spT4ENVmYCPfPkS6QbjeNM%2FMYopph7NTqYkLrOXNtMGM8Lqh2i3Q3B8oUGihGejQXd8S%2BdkLtzb7VXuZoSeLBWQUo2xj3mySY%2FFT%2BaH3dgDcxd98BmBeHCdzuah7iACW2snrMud52tLtbQ%2Fq6cSG1G757ehNb2bVAvr9UBklN1c3PzhBO4GZfXMS6VzRHuhMWXO7dzDUxbzEBjqkAeV6KbFH7jGrNQFFTPy8Spt5%2B3FHOZv0pMqVNcBYEyhEU0ZoipFjZEjwynwlbR1Vr9Na3HXMJZRHKAhQ%2BBb%2BSR9s0xSOQ7xGJUCZ87UxUuXXZQJGgDuCZrzUQVOwsW045PD0nFxyDiIiUUeqc2HCcAQzBl48VuKN3%2FbL9%2Feblwva66NpM7Bv1eK8PKMgn%2BUrOjJEsNXaXKCjkHJYWIaa3XEVAcEP&X-Amz-Signature=156711dcfbacff217ddbba84e92daba66fed2688e64829df36e56c369967537c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
