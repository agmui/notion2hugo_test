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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGK2JZAB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDpu7NbSliryb3oCJV%2Bzyoaz%2BoSHrNSM2UiZEJrMo4WNAiEA7At796rSePp7LZ0pKxkXfInZdW1Iz1ylhk8CBcTnjjMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEbo%2BeGNPpsBv0N3ZSrcA5ajakq9khyu%2F%2FyJfj55AtMQF8YzKa5mnI3PIVPdcWMHX49ih3hMhgReQnZBe%2FHeHw6NOH%2B%2BIlstEsSiplJv6xhd3q50xr3A66khoNN3gJE%2FPOk88794QJgcw2EigBQIDAJNLeSBvNf%2F8Zu7Z4ef5pD%2B77guKWo%2BkSzWaZJjkFE5A4XQpxZA2EeqHOrka%2BsuWc2mmYZ1L3SZCh0zUdl8SRyIqFi6oPQLKPYxZ%2FYrwrZN5uBmhMR4fiDxK0LOIbgglYYnRe%2B8QizaYCjWza%2BmjCUYF0Vk3NXUodCMYUm8q%2F7jHY6WVXWoLFFH0rxjGIFoG%2F3gWZS3QsTmy%2FFW%2FGxqpYvxZngpPw%2FNDunSu2mMrrfmz7EY7uVDOgaDpMNcTh3vh6eoI5jLrI1lXqQiXObmnglBLHUpPTEJiKZNZK0xfE8VOBwuEAq1tZfMSuGHg2Cspb2qEbT921mmTMYHcCdF0FLbu8xIbaIGhb8IY4vj4QceVv75biFhTV%2BHydb5MzC0MSpOdSXD78iBIQ05dmr353a0qNgufwh%2B9thSNODkTRRuHrXWI3uFFZtt8riO%2FpNxb4wG406kmYledLmze3M8g%2FodIBOF5Eu3OT4PfwMlspVXxA8X8iRnlc5QYaUlMOTvmMQGOqUBTqCHOgiU7BToHZvHfG3eOMkRwqLI08fHzBJpPHzLgfOIOHPsYqaxMvPAZ2N%2FTzNWB299y8RQew7TOGCNMkkXmEYwtBCAWNgS2veF0rS6BbTdXOLruVEbZY5jGhPupT6JHTky%2BkKP4S%2Bm9h9YXL2Sk9d%2BK17AkuoFGEgcxrtp9fM9%2Bv7Y0%2FZebmNEdWbuctNx1O2LM%2FPVozjNE3cb0WcHJNmHR6v1&X-Amz-Signature=92ec048a4f036ce8d66b34b8a6cf3d65233c55079b3a24f9b62bce0ebc29399e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
