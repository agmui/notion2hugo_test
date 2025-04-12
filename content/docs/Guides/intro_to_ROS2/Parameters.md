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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJTIROB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDQVdjFo%2FzqLHqTyH8Kyix5JNuO6%2FR4CHA2JnGiUQjiFwIhAIEymIPGd%2B%2B5wskawSQwMI14C3B0KiF2p2Syr77eAU0oKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoEpXMSvdyOGqkFrkq3ANd38gg1LWCggsPp6MpvHqsJq%2FzQZG5BdTVfVuaXIoZUxaJwR8RqxMWxlYSDfknBFCopMOGDgRoQdFgzxXt3iqKN%2FpQytnVcoaOOf6kGUFK03HUYnygDxYwAE6QTKQXyVFvNAJosV%2BeR8qI3dOhPSGwlctrJAtlajdUiEwVoHyXDP%2FV%2FwTOIfY7LD7UlVBg83hhD6VEzyO5UKYeSbB1SJwCb7E%2BKdWMYjviM34DfhW11anc%2FDbKxPCjmvaCNRxIyGit8J6wrCIk1yXaubt9pzJTrKrGLqeg4lf61SuaaIuypir2BHwcFc3PdjfyCTIIerWiNkGjwuvI23GoCeC6Zz1ZTH7lMoJ0SVe0neWhdg2mZgXdDrZ4XOvYXG1ifs3opK4UeblPHrfpyOy5YG%2FrTWclmU%2FpVUs%2FoMICfMvSCQBnMUJwrc4O3SBf5r%2BTGJZex%2BqFuEeOGUcysWAK8ZOAd8ozRer2xeBxbJH4yUd%2Ba6%2FAAbYZ9tuwzWD3B8XzWzgAeOnekyogd%2B4lY%2FVLpx%2FaD4efpx5wqr%2FufbqluxqyE7uVGs2%2Fbv8hJTYdhq7Nz%2FgXhAMb9Jj5c9R8orUv1exMSWuZfgHxpvIp0FdVOsaujY0ugjL5zjJIJ26m0TAgMTCUp%2Bi%2FBjqkAU2gxDiR7dB0dcO76xW6s4eADVYFfC0u1TmyYoqsAe3NqCmNHy8BqG0r2IBL%2FncDZL5rshMf2MEm1rQyHXEt5hPRLSEt5Lzt%2FVrUQky4KRM5MbIEXmtuDLq57z6k4pmILBbk6n3A0GF%2BPcqoVT0r9%2BcrMsR5%2B6ukzDaRY4cLO3Cop0He10k3k%2BdXNSqPmE4a%2ByPynSU0lCs%2BDtsaLlSoA0qZWEO6&X-Amz-Signature=56490683f47e619c0de4aec9948799d75aca4800613eff2c3e20f59318257bce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
