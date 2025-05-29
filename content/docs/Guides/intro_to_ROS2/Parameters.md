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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YATMRMN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjA3dhMoiHNFGIdOatGWGw%2Bo8VqbFL7h1GBc8xsQ6UBAiBIM5Y2xYzfu9EPQHT6%2BLEqCcebqkhwONYM6W1pVFQTQCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYejyazWf8ZqGWIFVKtwDQWb90E%2BJrcpFEpwGASDmR2ztL2cT16vxElg5p3ydDYvgj6OD56NraV1YctnflCw%2Bp7xVhlK8JfUsg0cjmH5yuRJIl51JhguORy%2FE0uRGD4sAYsjr3CpPDmvatmm%2BfGsbUC8XWV1c1zcQXuv8Z2Y0K6tO5%2FPz34HnJpN79fUU%2Bvlg8D%2F6fHFwm5jq0dwHXyrSeo0ZKZV041g2tQ8QoYOhChGuncUWMEN5Kil%2BcojJX3Ha8Qs7x7K%2Fp%2ByjSQIhzbpJg%2FUx6Z%2Fr8u5j20seaUBujHxpFAKX2ya%2Fkon65unlU3cna5oJ9iNwOQOcXgs5x75O6YipC%2FcpveCTy34dz1FGdB9vtGRyguxLcdT4bR%2FqYx7ZeYD8RhHyNNxpUZ84eRGJXuzY8pdgGnSPhAYeXgdU3UGUlIRrSzofqg4%2BSn2AJDq7uPMTw8SXNMO2Ot96PG9755zxQv1Rn09snVf%2BbjHr2oX4c7L45ct1B5m4zpkh7RAcDC8a0CwSy7pDrSwQ5XYSb1C9Q0V8OY0550ISyw2fq6OJ1iuk%2Fm3xz%2F%2BnrrEgKPlZ7YvZyjpqQbDHvoFJ%2BhrTwp%2F527qHTz11lLYUs8d2ZO7b8MH4Bl7zxsuXHOjAgG6YudSGL5U5rq2gogEw%2F4ffwQY6pgGdU06lu48npZlR%2B34FnjCspRFMjnLeDsFxsOWS1EeiPV90%2BZe1e2UcqlProvFzSPSs%2BfYQcFYFRbPEcXD%2FU0ZQqo%2FsZNfLCE9eGcp8GcXDRKcSP7AiIh7Jqh6saJlXZ1tfkAUGb1ox9bWkRxEmDT3wyBtbytFb6Y%2FUd621IJEgIp87sSdPzIjsuK6uAK%2B%2FrphXAmm9Tmi9Enh34o8AnBgdyF56ignl&X-Amz-Signature=f201e108b0b028da7df7bcbc370917120777d8de9f1e0ea40ee190c599de778c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
