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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCXONZB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEUmHb9R0H8tYx9FIJYLqGpmglprEgeI%2FRFga673NRI%2FAiEAtwp75R4JbfZQ%2FWRE%2BF56A%2Bo2oNxxZbr5fBP8HF%2FP8McqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU0b4bsezrVplcGWircA2r3Zplo4hAsxoFncCV96VxXCh7%2B9BrGwk3IYBMjYSYRxTUzosVJcci8rgpx4hid48ScKycJvEqmYWMhR0CdhJQ2OGAsHrLXsI8HA4SWQiJze9fOGvZnRchj7c9vC3tSjkucqokcxt1b3YY%2FU1THuLpPXd%2BMfRHvAljjOvLYA%2BCZ4Xrp%2FXVMhNc2FTNw3CFFlCYuWCAPDe8h5NWV9XggByhK8dAQqht0lBtFZyQ96zoC5p%2FXTEM%2BYAGYAT4zNS7NUUeOh1KBZ5IVAkdDEXBkQU3BTVaklM3nis7eeZpTKtd0CYmS9T4ZS3fuL8xTktZHbNCD6d4gdHg78BmrHGJSgZ61MMsfJi5B%2BU%2BtSeHZ2s7rpUehgC%2FYuPzJuK28Vl6GPN9OQh67HJsJ39%2F0F3SlMtloyKkEJk3K9iV8KekzkaQ%2B%2BcSFVYNZxh4IUkpX9%2F8eErXm7Mpz3HGGUl1Db4lDaFDPnAWNpPumYVkbwkvncM2P4lPY7ACYYCWCHn%2BNEMqBlXXS9pD8NFR4cJSyAJnMEa2ky02puf%2FgDPg3oxl5AyPTitAE0Q%2FZHiaTc63SOjLni4B72gxyekb0P73NBMM99%2BnZ74nZD8syzyAIn46pookeW5z0NIGixeDuHjR9MKv76b8GOqUBXsApP3kx0WdNZjlk0gq%2FgZZKVO2f5ySZmYOSf0IOk%2FvSE5c2HctLRjun0BctLUoxiZa13iMg%2FmflKde79cf5Yl2WEauoo3Ukjrapmv5bofu0mn6NF6MYLAns1Ba5Z4NRguQuhebI%2FcUr6I2hO4c37LVxR0DrRbtl%2F%2BPBDjRWuedvNbCBCIg3kVIyclqU4wa7J5WVT%2FKzmcjF8BsGazPiOGcJ%2BZZ6&X-Amz-Signature=0353c27772e27146878c3b3704523856b76f4133991fed7f604fdd1204ec1bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
