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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7E3K3U7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd245CopEqN1wwamRuZ4mDomtIId5oNTH0qcfvfjzC4QIgBUD22azcXaDtv4Imp46shu2kwWTyhI03MY0Hv8bumHwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDF6e7uHQl327ktSLLCrcA5l6M5anpfAYMp7PHEtsRn12X536XHnRc31VljiMepoZqs6hVYsY%2F912zXftvBqyCigBRJjNbAudqK1ZBvBYlTRsyjKFPzCPlqACnBlKcCleFv8OpfLH7MbNao6SV8jnWk89pv5BDvmjWQAv0e%2FhSaKkiTSnLbh6vYryxcniibMhpg3wJksqs3CaI0C3ZLFnhnvjnnlTCf0%2FkGwp36SsxtTzlp4M7KwmHvt0cOB3j2SGvPdlEEkDiw7RYKs64nfRo6tsJFAYl0ImCp4VoODAzqSuD5cJ%2BCI6w4KJHIGntpvgpi5vZbv%2FaHsW9M8m9w5t1%2FWzYl8zkX%2BB2raTIOGxPDLAtXUYDlhqhJ9NXK74j8oAo2TcOwkOqPhshXk9Z27D2S9MNq%2FC%2FW03fJX6dhqASbQPqUssMXVC9HdS22yld5vbS21TSu8mKPiOasidabBgQ8kSZ7hCV8AJUVaM2Ke1HM5AaDfeJDo9b%2FvNb4f1JWMjjlc0qHA%2FLLIQMKFPQC8EYhluY2kowsu5G2W%2BUyR76uoQJHuvkysu6yBAmm2jA5yGNxo72tazIHRzBrgkzXgrZ0dB6R4Hejl7qsSMPJOO2hF5Sc3MseUDl6JZht3D2R4JNLUeMzGsYNsmTOuCMIyOkr8GOqUBTwtzUqRnBczUBc%2Bfs5eb6Rre5j3qbcnLRo%2FqEFa%2Fs1m1C%2B%2BeH0AoWldT2fCNGdmRb01roJv2b75zmdlVI3cxSV%2FuJsvpS5WBkU8MfqlQgGYm7SVFBTFa3tgvr268LbRdUcP2Wx1B9GsWwI8LFncBvpnKC7JAiBKEj1WUwMyGaSXG%2FGiIGC%2Fs9My8B9zd83WBDMk4K2gQAEKYYks5ZON5N%2BtNxNPa&X-Amz-Signature=8f17c624f8c7221b6420572c482fc1991bc4df78e5f86f68b05fac7435b41a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
