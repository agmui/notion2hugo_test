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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNCWQ24%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDtbLnz9JE61DDJ38z7PhuT1NXhzDr%2B6kwrQig8FR6%2FaAIgXAUzdnGBjM8oCRYyyn78PJ6iTA8CZlX5qWUsflgPRuYq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCVxWKLfyPEJnJJ94CrcA%2BHoH6NJt3dYtvm5FBtRw14FanrOdSCgNgT2XyzR%2Bf5Yzj5kagyuZqrBP9Ahe7C0kLI4a8gvt2PMKLWLV%2FGeXR7sUKhW47McIGlIkeRtJikRutg%2BdHi7WiQyJN2rlMxoswc2E21BWJJGQPNsiDlKH8MX5zNhSZXNt1H1ltnaGTfqsMwNHkCEdvNHe5LTotDzvwJsn%2Fx3G2xc2IuCoiy7RVjTjo%2B912%2BJo28OMvO00CCeC9h1rTS2hsdH%2BHgLwEKG1Iff%2B9muQpV2g0kc9bK5Clq5ADm3nhZTBGDe0DeeBFtKKXXiCPWZlp1iBxiSgwkbWRfYiYwYxEG5qU6hHpFMQZaz3vwOj5vJoh%2B%2Bxfd7nTPHFRvgqsQqtUjg%2BpaY5%2FrQmVJAX8OdmvGJCo2MocI5OXBJdu%2BU15p6PUfnDgwJXVDfU4RG1idAskZFynBXY79ayMk1cBTqi4TMXBfgy%2F5Hz0NKaL6brQRq1PaNWqg%2BAxb5YOz2rBf78DHQlt7bo1o5%2BFsli%2BWf8S19KeoTUUMahiMQ1AOl1Ot%2By2hMr8KCdycdQxw%2FBMGNtrrlMhRsyeNrv%2Bn3QaWqvo8JCIHBoNU6%2B6aRJaDhEdb2PaeqG%2FhjhKqwx7N2o125DnMXWLx8MLydkcEGOqUBwJ59R8eGmEJpdFKkmLI%2FWsRcgWTUbUsDZhIPt6Kllj5U4TpCtUAH8HXNOFacbrT4jO0AUCNNLzxzij39tawDry%2B4Rkuy6R82P9onOBDsw5b0LXFmzUfUjtV7vDGjMZ3Hu%2FnbRyi2Prw3feMExYpxWTiWBoQKYzIxRk7RB%2FZrdbJNxkmZCmatmPbvxPX4je%2FhCyexxBnlJ31CrAXaDakn2M7pr2bZ&X-Amz-Signature=4b468c4c02ed3c82f35c7a874bab7c318efe6481e4dd3286f1a69b3124d004c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
