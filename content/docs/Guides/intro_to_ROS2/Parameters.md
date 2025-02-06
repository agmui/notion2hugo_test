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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XV2SW5%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICXtT1ImAdFtv8a%2Fr8gY7yzENiDDeTTuJ%2BB7ujXUknihAiA%2Fp3%2BQqQDwxEaw0QM%2Fe3yfl7JwlB9jTYy%2F%2BtbiXBcriyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMtvASKhq%2FlxxKScvfKtwDnWvswtPFyRFyXmVKcrJNLLzRw18nHwsKa%2BLBNv65ByHgs3LqujfXEyIssAdGdKEGw%2BKc1gcR2lIJ1LMVkhLX%2F9qI859luVgfqnuejJPfDG%2FHFiNL%2B8gciuY78Qyd5iFojuoJdHD%2BqZjSVcrcbHY7W1jYbHDn7dmk4HhSim3i543Jay%2BIYUWDHOeuphjLvjufcup3R3KCSoTOcX0XR4Pv1UdaRHebl%2B5XdD9nzlXYkStZXltO1B%2FxYKrAx45NI0xPew3LuLue%2F%2BVML0Kmz1Xh1bTtICkBW646%2FSTMfiQb%2BfahS%2FGGyFC9jay7BxL%2FvJ6wo%2Bmg3DELN7srCODfu7igsJnhVdblotiwR%2BVJyZ6XgyBs3i9TRcHUby%2F%2FNm39fZWWZDtDyHkc5uUd2f563HDDJheFDDTkftQi7%2FG%2FrU2ofbL0oQIRcPJLZpzhWDhZFdomrYL%2FpCXqgj1Rqv7IRunlVJnAn3H6hXHhJNmryHaovMi6JUNGVet6RP0gsLZtIVH3GkqC9To7AeAV8cWhbWDIVqpftloWSQ8PmmLIlwrhCLUgH%2B881Fqxya4Mj21eqSw1xdegPfmlTdcLZuCnQJKkHWLt5y8YRyEuMVLP%2FnJM882njaj99EkLdslctGswxvqSvQY6pgE2u5kM5KWnnWXT5jhlEdpwk2IncjeuvNoXMw1hh1iGN2t0EyKr3ebfbwuC%2BkRKGf8VYSG8zvx%2B78RbJ45VJS06KaMsE9HExT%2BSW9HhX1pOCsnebBJJa8J234h3ShKMEFDK4aEIVzOFipNCESdnVv9sYvs9flXXus63OJa6Z0ADC53zYyiXhkNaF3p6IHC%2FWLzv791hAAHG1e7gqqHU8HdEOkt%2FmW%2B7&X-Amz-Signature=7d57a8da0f00d1255c1402649536c5e286847c687808fda99e2313afaa6f0a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
