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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7DLZRN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDWmMAuB8f2OH9z2apMT9v5WY2Y6AOgem6YUNLjdWszxwIhAMIV%2Bt8jlSg1Ns3nMWOk1tSXD1AKIc5m88lNUnK84QWVKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjB2M9BPP68eBpi%2BMq3ANzidgs5Q38V222m9DShbvHrnHOVlYwtFK0ryFLLQB4n%2BVKWL%2Bw0mwQWgIucNZTgc1mSf2sEE1iJJpzBtRU%2BpyvN33stCtDbW4%2FoObn3mhKI9RXgftnO11Yv%2F9f0mGYupKE17B0MKA6k6dLk11mc%2FlHMsYEe2iJOR%2F782SxkU%2FZ%2BTRvHzao1XJiY1eUNq9q7SGUYr%2B%2FsEiEvhq8AH%2F%2FYjnSZGcgYvbf%2FKYFOPBcKWqVmZh8tXGO%2BNBnsdfVziGGD19wjFxIbAw3Lwh5%2FevF4%2BfGPRKV5QSUtzSwk4PxDtB3eZMhHdfR%2B26LingSMhScHv6YatJq36TcJ4FhoGZZZrjKVuBoniYWawhNs0jMED%2BzgnucFoDMQpfmGn3d%2BdQOSiPkZ3iSQKeTCpIotbXTTFI%2F%2BpS4Dt0nLhnj8KzfspOAcCRXck8KgBWXqBZHvE7X3QdlYei2%2FHBW74OHgqViyuQCfATlFnJdSRLUreP%2BoJLsGeYtmcac5NpuhtfQfb32%2Fp6vBt5U0MciLjyl7szuD19yVOFOKb9GjDtvY0ykobB%2BakQHzJJxEhFhlbWS23I5epju6Gwy2qkM3idOMKbeV4pkMHRnIPgrDo9DLlgrh02q5TSxsJaPWmL%2BHj5v1DCFx7DCBjqkAUvr%2B4vu7rXm6UAVRByLYTb%2FC8xEvwpaDAL9PNWaboUwYo7VcAKOKMI0n6UYYuN%2BGRJBoOSLMae7vrUktwJJaptn5%2BxOW48EGgO%2FX6oS7%2BFnv7qkpWDlGMhhcc7hu7LghCEaM2RxXLgnAROzIb160AiHW94pz9vrTpPEtWobh%2BgqVvFwpzEaFjCZyI2qYy84wsecBvlGDKXeVWj8dbMhPnCx7%2BrK&X-Amz-Signature=96b5765249abcd8881e9d715a4d258e971db9bb58dbf077dff525948f907e80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
