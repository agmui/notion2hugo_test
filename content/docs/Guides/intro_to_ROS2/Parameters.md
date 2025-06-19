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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z27YI7TI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNfBZcTJ1HXDAvlyFUvjpljqoQQULbt8MwK1m%2Fh5WmyQIhAKQIEjCUrwkdTjHbDXti6sVRPzn6oE32HPckCCYtda5xKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BL2T1Q59P0b1n3TQq3ANCMb6cf5k7mHo3ActHhllFIzSQF4hxHzntJjzJGlTPALx8C8PswEsAkckmv36tDPx9v%2Ftt4j1L%2FROWhDQDqKPxk9rk%2FwCxUp7Gww2hOg226%2B8Ttlrwq6PLWKoNGoaObmGXnlm1KTmSVIBplB7brzHaGbf6BHyH4rooOfb28PfTUTR8X3xRsrCjHuyNzTdq%2BXO845QoMQfruf24KHwwFs3Bc0Sela1cVHG1KijwmihEuYRtABB%2BLeL%2Fj8SVQy2ghfBbLOFYnJp2RkCq29j6LQ%2Bv2fvipaTAGMex5R0HSEPixn7mPBF01AEogx13vXE2Lr%2B7NUt7yzYfI9uGJHLfCPN9%2FnV72yfIeeWMOlirQChpFjFhcbsmjkQaCwakuMscgvJ982fz%2FOmIGDu069bPOvx2P8dm25456Hxv5MDq4JOrmFGo4eDj0tGkoAz%2BFYh3pExIM6yxcF6oS%2FkEr53WLkJ3TGf7HG5TxCAMbb4JHMRBiJyiwwHXCME3ATGO%2Fms0L5BRjeQS%2FHwVYdViJu911Hiiz%2FvOQqjiwTEOau2sP%2B53YFq56sWvUGSwzTZdrOOx7SMJuW9OBwjg1hOBRA0H66%2F8lwft2X%2FPCTf1pYWCd6li7RdGp4CUhUtMzaiZwTDG39DCBjqkAfnnA83JMkCe4ULgJZMtnu0hinD4BLwGW5yQ0DtZNd5DHoTnFLJBYaTSx1GfnJmXf0ID7PiOYT0OWbUwH1gzthu%2BwQTrS4pQTcBxGnjRplSTzxs5%2BXrdJxOanm%2BEMyhH%2BYT6RlqqH0OLw%2FuzdQPdE0T8J7Hj4C%2BVnjGacb48CBIX7qv3ixB00xS6mYy%2B8WkHp6L9x%2FpEihVwzKOCPiQVh0Fl6p6P&X-Amz-Signature=39c66ea7be1e3ded81e7ef33a4d736a37995958955dbf83d22da80c9648cb02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
