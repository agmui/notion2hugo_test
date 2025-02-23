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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAVJ4EC%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMXHkthKNVsZan1XSv71r1LnhyIJ4UTPzQiP64Q0k3DwIhAKNZ23QDBNulrIyezZ95qjq8CVRkBAdC5j3H2A1s03tjKv8DCBkQABoMNjM3NDIzMTgzODA1Igx004joXT6%2BsBr4od0q3AO9ytL5TVzjltftcpkS3Jo9S3A14%2BQAFvZauOSQtLKyz7Fhm%2B69nrSQP2s3N4fzlNhNJm6LDTKIqmoaWIpd5QmQ1CcKqqHj%2BDh%2B2AKH3EZqx63CbzNXKKzIsxTBKqeaNhu4DG8bLvcwTF3aguYl89p3osG2H91Q%2F3aKu3e2675LTUch6fXarRA2QdZ845gqsdnGoaYi0UlNI1yaNY5v6ldosKkxal4tZv2YkkWXOw95CMclNaqehYlbsG%2FJzShzbjsgrXx1asAClOE7RANeuG8qrEyLbQkqmROm24UM1UIZPY1NbrGEC9KTKuLM56jEv4Fe4%2FIFY2atpw7F2XNlsw%2FqV%2B%2B9lU4C7r7CDvifjEKQSqiaIovpj%2Bkbs2NmRBKZSwiSAk1P%2Bhcxy1XTvSDeTMwnEIcITAzri5qT26rIeQyBmp2aD%2F1LXiPLJz1i2iJiuzzrP6r61bQV3N662W10RIzpV8krBZQP7EGsd%2BKkiqqix4QJq13I696%2FGTdrqpGvE%2F30SsypRURQVYodiPFV6FNsjAIm1TA1xookKlI4qBQ%2FsEt3pMx23WI7xwqf45g04NK0oGKcx0wXZj4Yx1cSdq4%2BKRKrmz1GeBjgMouvbFG4ktrG073iJrYJ9jIVATCLlO29BjqkAfym3afW8UCmitNno%2FxWdnvURk95%2BOIdWwrtlG6aZZs3NYBBxk2Df5e1A%2BKW8DYmD3%2BO2PQO8%2BH3ISze9NLqr8ntoWunGECnVBxnEhvktxISmomK%2FLts7wlXnvvc0VBkVNvuj3cSu1d%2BVJ607Vzn6W7%2FW%2BRvk2FOVdO8ZGikTmnQ8okN3sAfw9rsqPY6%2FfOOZLnGZRoZUNzWRr684ZuoPhY653as&X-Amz-Signature=696f628e6cd630172db897e87173774b3881f1f42a37b3ca5b331ffeeaf7d882&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
