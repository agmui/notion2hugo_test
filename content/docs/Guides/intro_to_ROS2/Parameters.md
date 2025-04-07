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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDCGH2Z%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBo02LGDK5ysMaSUu6oOC9MctNjde7TEFFDwPRvh7wQpAiEA0c8rHfSII2f7Tu9%2FOn39EG2hQ8giBHkH32Twv6HXPOsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPVDjp%2FXPFlox7gLOSrcA5z0ItqSkVbhQ4ls9LEPoStUdtdtW93SavHbXH2%2BLVbYWdXb6uObQ6ZSd%2BLel95VcHqX5BmB3seh4eF5hqDgbbxikYJaIMUe5yMFvlibFkZsU1nfEjUtoVriS2ZQ%2Fn%2F0bD%2BlbKKSbuZ%2B2p%2BINYjS8ujdPfnpXX8jY%2F0%2BvA4rZj9e3OmUQWfr%2BmxvJm7zawI8j2ved1YwhYXh1y9jg%2FAZR2905oOHju6FgmkFfv0kr66AU%2BVV5nw64tpzFzxiAIBkxvTB7cOa6YgNR0jLTldT8ZDUv%2B0Q1Ilr48r60slBsgZxwM5CV2WiGDX2IpeDkza2%2BHkZTBjiVWSP2Oo4eKsWXxVe5Rlbk97uWMFMqJGdW3KlcX%2BBbpqVsMZ%2BvrtI9BBtRt0soKTugtJNs1B%2B0aDnKQKwgg18DthcwpMhU19dJ7LtfyUXkd3Ia%2BlR1HtK3UQHc2%2FVvh6vh1l2UHm58nyepgKF1tC6vnjubUBHF4S9GbMptpP0tHDpVfPx8HKPFslTvLVh3P1G0KT7CXo9dzNWT7IHMLRFkR5rWM9D4rQ1GDYsJwpBzyF8CROKZuK9RjQnzg7Ke%2FBjYHQ73k2GSI5maq6F3fjEYlq08TVE2nO0j4kOxvirGoWPAyq%2FlUtPMNrk0L8GOqUBcRQFg2NVM90rCegBs0CVmHEgq6JM69msH6%2BdLqSb9dzF6X2VbdpNmLZacnz%2FeudyVjMFfxAV35DQ3qSIpPbk47k3bDuPZWqVKGvt3B%2BGZgxdS5CAOGuYPbLpaoVAQn94XmQXEGbH1sACHp82uCv%2FTsEqHR8x2vj4%2BKPCTisZ8dQgNFrw1uEDozW8eDouSUi7XWZzoP%2Fo0SZA%2BhptOgwrkCswy0GW&X-Amz-Signature=00c74a1e279389e1ba3c360ab218bad611fcd71dac07a59cd9630fb68b461685&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
