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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSG6FI2G%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCRpqdVXDJVTzQ7Qv98DT7BPstX2pUKsv1woEca3vbe%2FQIhALRWhRqkNMQKdgRrq3TvcS4kW4VhUwXy1qlzCgG7%2FxayKv8DCC0QABoMNjM3NDIzMTgzODA1IgwqlGZ0bxJlFzaaSAgq3APaaQJ46iegQqDtnbFd0J9uUg82LNDAvskVMzyC0kwOV0LkGQRr7WcEVCrFZCbJGKdsKukNIkn3Wk3iZP4rnpDlxRvDge2ZH0zcpSsGoa0l0pCax%2Ft3zdS1vUDZIti2skIp70cTFZ0D9RBBY4IqBA0Epqgmsgo6uKS7obtjTo%2BsVpXPry1U6mBPDDIeslA3JzCZF5AjLeQ7LWIjQXdgwmbaFJMhWl8KFyi9KM%2FCmelXbv6aVmFMGRBW5VmbbsU4rcVKLdnT0UCz%2Bteo8p3O8FO%2B4zhISN6Ne7P9VA1q4EBap0JI1ooMMIDW0%2Foz8ubSykQ6ozAyp4Vgy1e7OCn0g2KE%2BIIB4vSDKvY6BwYSGb2R275OWkjsmF%2FkBT%2BJvDrAgLzi2Chek8e3ke6ZKscpfk%2Bi4TZ0jlluKNqttF%2FeZKMgkEnFIubKrEFRDyMMrM2Kyk5H5GwEoA2gQzUPxoh4Y1mQN8nklRp%2BGdrK2mPKYtg%2FJpKG%2FoA%2BCC20fNix4H%2BQQrjEv914a%2BsDqSJyf8sXI32tkpNiXLmp3ZkUoe2JLegn2s5ZcKceERsqRhkvlPH32ga7VIYDHeFwJG3CDtx0Cq6DLj%2BsxnJPu40Lr9fGLjcQw7u2LyvthJmZclL5jjCJ67y9BjqkAegqZJai0QtgwtdBxzI9521MbNWGJDKTYel5N5XTaGBl1cUmw5l%2FdnsqwRI5P65jS1GbKrITEkzBnNXRCbItHNGGXxnpJub%2FUBV%2FqcxmPqbc4kldVdXM7bi%2BNStXYGsliqoGnUssXcNJg1nYSc%2BN3YSWHyziMPo8hBNj8VoXBARhp0AVesdPD9VpbNPshABGm1FlP11NrNbJiWJmerY8xXCE1okC&X-Amz-Signature=503ad567b9029a6250f84b9439a6acaaeb5ebba6bccc120111e880dfd0a8d3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
