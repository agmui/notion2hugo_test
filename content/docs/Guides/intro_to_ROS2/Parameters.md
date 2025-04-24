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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCOB6CX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BLSXdwyslR1C29oW8PmvmPzRl4CdKf3%2FGmHMH%2Fi6GXQIhAL3NLyCTFEE7c0Y4qkQeiBummmep99%2FcFLTMk2dF84EdKv8DCBoQABoMNjM3NDIzMTgzODA1IgxcBRNr2RVh%2BbcFJuAq3AN%2B4JooimmeIzYT9RS9uMGofxxB9nQHJz%2BRDETsimHlxD1JXTwdsMb4CLeh94Y3hF%2F8dH3xBpU0%2FW%2F96N5FRs76qPDZJjxPFZcKB0c3As4irX3WRgHEvz1zTs7lI97OAqBmjHMmVS5BcGNo%2BqdCpNS5xmWYWqAJSNuxf74HWNH7dWY0XwKF%2BjjNiks11RkkhCdFJa3QKmiK9NtIw%2FwCHorr1BxwEg7HUUvcmuJkVsHbKr1Cyc9jGYjHRB1L11f22m7KsSukZfYa9BQm7OysIOi66Tz27tviAlLswaeqC5S0g6iG0%2BF1ADv6SdLuwMdVhfPtYzzt%2BdJCvTTPv4vDbPO9B6y%2FxmkXnrRBdmnKN42GqcMaOfyEbLL28FkElZYxfhECBc1oYadtA48dghbiRDq%2BvI9Q2mGfk%2BfzQe6ELNxmEsxHBD83BaQaWjxRuthC4jDNRqguKNLEoJOySjcbTWKTW6H%2BLrUpCbXsO%2FhxdOPZL5nzVOK%2FXxrkEx3z8YSj5GNwHdfhK7uKrj6zJuoVvDQx1oeBE8KnsRQWIivwr4nO3vPsEwdbCVBSJIFJO7eWfOhdGwJ7W2t831Nr%2FZdlccmKYYp2WsdXIsBK5xp9WrGgyv%2BpKsYkQ3LnSaXumzDA1anABjqkAR%2BV8%2Fr%2F7HCWDwZqBNkS2AC06QKTQh9WjfNVXyo4GqVMTxbMqWXn8ykiule0Q0TX4KJI230w0QRMy16WMgJ4HBqXV2z%2FFMqpqeXQMR%2F7VsNcljFIf%2BTtCRyTqZ483NCN9Zbu64PUB%2FQCqD8ZRfyLImZ04e1BoSNJnPUy5m7FmjhfI64RZqF%2FrAEtp8kXP5%2BntUbED8b0gflHrSF3oxkP2rkgASuh&X-Amz-Signature=769ce76848763e97e273f12c8de7b696e8bba448ab64bcedd32833781f8e4750&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
