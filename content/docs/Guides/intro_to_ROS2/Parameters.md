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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FKNV3C%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtPLSGOxkNksZOkE4IMBmJofMqIDaxWtq8%2BMvmYqq5XAiEA29%2FxU%2FoQwXIi0rJbxIWfSq8l4ZGX6eboYesgJ%2BfuDNoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJoSPMrGTEfhRactjSrcA2dRj1DwOaWmiKrSfRXWEJIiVTkmvnASmzDTrLqw9zIQfApN5c%2FqeY%2F8Co%2FkiOnewc2CPHv%2BY08kVhZpbsXpCVOMLNIs78gFYX%2FRHVPmHuRnp9wU8Xzg0SgwUXGmMMnLoCWVeBxCQJJb5EyxiwQaNnvfdEqRW3eNPx7TyYaexBi45wEVKlImu%2BevyxxNrfwoHJSZrm50EteJ4QaRhCGoSb%2BBHcZF8YPAh1JGTVmoNBucbX1zStR5BQlGmVEkFuNosPXGsppXamiApAftKX0HeewI3HkuhoS5hDZxpR5cF8NJxHO96b8hyEyeMJbjLmt7vCmJEf4UeoQz0ejqMWCmGcGawpO4qDy3vomd0AfoGTzkr7C9m8%2FpW0Uvv2OSFUC5voVoI4QIxEfc%2BfFmZEgzqd7SfoXFLHd7Ua8kIF18jecGWYibv1%2BfzMPnnTnr46IksvlMtzjP4EbBpaCllFFWh5WPJE6iw8xl1VCkw0UQxMtlxL%2BCJEC9eoKGdjagbl%2FppHi6%2FsU8pjFB%2F%2FYWEBWWqQOWMRFVYaicreyriP1zuTphUemZ7z9cbVAjlA2%2BCvZ%2Bn6E6ADWl4xw0EdKSzxy2A2lhpAVt%2BrSOEQGwUMnj44DfiAouAnK0XAYU0UFMMJadsMsGOqUB6BZDRV8CDGwunzJNAjvcM0PGjVGXA%2FXffl3NUzAl2XxseIAJlQ0kRuFFQy%2FD9GK6nGbeUd4zoI9EBCxClJJVS%2B7w%2BNwfSw%2FfE089Lq7G7d0ADjpe7MaKBfPUKmThyrxL0tBvmTQG05bWHOfNeQGRaO%2BGLz1%2BvuPooH5wN8tpWpwo%2BOTkjHER5LbDJuVmCCFLvMgbg87SvgwEyPPQhF7S51aDRS5C&X-Amz-Signature=4d9a764c90ece73bc9ce412e21f967c72c78daafd9e233179b79fcf0eda16d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
