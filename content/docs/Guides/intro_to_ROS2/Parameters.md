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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7XJJ4QM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAHcQJK%2F1eMzZYYRxhTn1T0xUzKB5jm4MSVFeVvAw8TbAiAhlwZwxE%2F4I8s6DYS50disA1M4%2Fvsh%2FW0TS2sYeenoliqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFyLRXQx1R8YgoFz%2BKtwDZrg80gCb2exJ5LDIqdFBtkPGB1A3%2FORr%2F4Z2KCGaI96uFi2lnX27SH8sA%2F%2FPDX4YzS4bjj%2F6r9I%2F4PkH1V1%2Fxkb%2BTo%2BZvEVujtKZ8wFkVV109nal8Bq%2BCN%2BH3%2BDDCf1AELzLq3RIERnTJ8K%2FZReJx7wS0%2BThhNiAhIsd5HnsPCMzZOGW2ebigV9Quru9ycKvx%2B3C6pqG1rbEEjGiKYaDaujkiTis1pH5V%2FQyNk7d14ar2g1tczKpXynOZfWHSOxRXC0qGOWUnqS3CxZ7Rg%2Bc%2FJlOLpm168bFwuLKnwYp%2BFvH%2F%2F7phnXpbjw8TBl5YFrJC9ikQ%2BWjDM5g44WLQvm1IMEt%2FJsQ26ax82CNxcRL9aze0IXXzclUUy5GVOfYHoDX5qqnqNGz06K2b5dnBcwmi5dqxQuhAvpVW98Hk9wval1p3fHxahTo4Xxigz0Ye8D%2BYsanl3AowgYOciEB8emlEScTWQ2WtNO2WtmlHdtKdLLd4zPm3Gs90mC1TNsFZDojwXvwHDLMxQBRQZtxcXmt8%2BRIGLIovVRURbuZYXpsOPP8R4ki36qUaqwovQEtFe5GkU7dbJ8CZmyPoBTO3e6c1b9eG6ZnfCk%2FjLeonW37n6zMEMxrbHztv3zPKO4wu4uIvgY6pgE6ovu%2F9%2Bih677FK8nfJi%2B1pGQz0GfApOEhSfZZQ5W%2BuHtjxeMXKXSCM6z7DA7EuetDmLy98lQD0DhFxDlAHwYCSaD0divj4mDa43AmXx2hM9zAzg4qCCl9vKnE7Pa9S3pWM6SX%2Fx%2FuKA9jfGwhR%2Ff1pTioyYiejoJYhMo4fQaozaEY3J4HGr254xKBK8tc7OhQhVLqaaSqCdwJXScv%2BQl%2Bw%2F8upNCm&X-Amz-Signature=63cb77847ca04f7b49526981ca3f690aa17903fa7abf644c149a2e4c14d679f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
