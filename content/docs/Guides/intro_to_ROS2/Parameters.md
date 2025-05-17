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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7AP2AH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZX%2B%2FQ2FQp5oAnuNyZrGPzH6zZhTsiChmxiT5uEblkUwIgRwpPJ4moOEh5vCFyshAYyg98txfW3VcDfc58mHU9rowq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMJkQ6ANE2H77hDSSircAwpHlTtuMLoa%2BH6uzFQDS2SJymBkwlu8wSDLAIwRGqiipo%2FwtZ%2FFQ5ysqvZQuq9DbhQFMcQI0d1oEIkOnhecKZwvBdc7J6fBz0D4cmNlW3UWU%2FDClSMQr2HtUfB89ovX2DY0TdnziXTcm7JFtmUomF4ITFibKWac2y%2B8zWYL2bHPKBALETm6mxhiIYWNQGF1gsgiJ6SuHF%2Bfyffe%2FjWAqqu1IDyNicnz3GHrh8LsxxHQUc8ag2Dr3elN5WsKgUwaP4SjN7Eh%2FYsbBKJnQsWMTFni9D24%2BS6%2F%2FUIOdiG0D7NSn0tf5NXV9qCcTWndQSewVHeA5WcwOCy9%2FaWT4cIlAVXbiE7g7HMEoDsgSDKAxWkE%2BSECvVHoa14Q0I6tNLrO5B2ZGWb5tckN0wUwMT6aIOO%2FyCj33swuu8IIic%2F6qsqs2mDLrm6DApKDn6PPY732YnlDu0wM61mmVwTE5nm0JsMG3dYctsaJseVlWq8Q4DyGdwTreOTwfqpQkDOa5wrmlvyTpcJdb9lpOk7M4AT4VKWw9DvJd02AmmBNqNwQZvtQqBTU3dNIN1ShXdsSdGxai6Zz26l867I3%2FlbnoeZt9udbj%2FyvYoDFviLL3%2BYzUKQIC8x7YnAzkqodKz5LMPGQpMEGOqUB0UPKBtOAtQsIU1KJnYoAjPaQaTPYaOaWK5S%2FysyvO684KoWMODsA0mynAlMJBTUyDaRFgeGwdq8%2FXyvY31%2B8BUMayV%2FErJuU9Vvhx%2F67G0%2FWSZvWVzTAkjRwIjPjJ9zFeIZ0Yq2dK8TpPVTS4FY8h2RrRahdsSyj1Bvb2XmLrjL8mARfRuLT5TBG3TQTb035ePJ0P9MQSkt0ZEvsOcl9HLhHCZAg&X-Amz-Signature=73003c1998eb9552a1e4fefd9e17d4851b2c5f2ac5d792dfe8f8123eafd06f71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
