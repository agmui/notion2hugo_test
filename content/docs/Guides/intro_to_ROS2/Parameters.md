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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHM3R655%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1Ayu18C%2B7yPXNz9v1WGPhTebiin8v3V0XqnyCuHSdCAiBs0cKJz1NnSNuBOUT9i22tYdcJpwsdbkzq86MHd96dqiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2eZF%2FAvDfJvmpxHKtwDUVIieHQjvoLZbHC9NuQ1eLP%2FEpqrdECYRv27N424QpeR4EVOYBsXxF7RtMmHb190Tw5%2FJF1kXQNmuU1ZDEN%2FOFR1x3nH01I%2BtTmiDuagGOTow5ongRA1FaH28RmJyk0DKKkXrRA1eQ%2FXE6iq6jt%2FxhNh%2FgiKfP2E7LkF694ZV8ExXItLUikdmGjGukJQN9x7K9%2Fl39g1Er3d716PLoYQ6jeiEmyw9ecsuZYmgzxzqfccEgMFp9y0zz3SfNza8WVb87GHHXdw4Iw7mIP1iMQBqgb1S1nG2RscvRgW2xsdmuygaJdJbUTGMw%2BVuUD4nr4zoxe6vB8VqC2qzxOFgsrfH2Zw3fEjiAmbYH1zta7kOf4dgo%2BEhnzeqkafCUpUfsCOypN91i6gS6788ysDOzMpKLosrw1rJIU7lYCE9Qokh8ibedI02%2BsuQU%2FYF1Nf9Nu%2Fi3fk9E22zHrU8k%2Fji9h6GmQJkdZuOO0%2FX69nbEBXs8sLXZdB%2F%2B0ugALb54anYRUlgmlKemTsEVwTWsXghe7ndhVg3TME662zKFGyhf4PmL2tvFqXUXnAeDVDFSBE31PcOIC4RMgP7oPc0OYy7iS5ri1tLII4hoAV4%2BSsYJWVeqdz4kmte%2BsXsbFISPwwrauBvwY6pgFtSQklP2v6R2ZCJhZ621YONUBoSgpjLUhnyRKIeHGzroE7NV3R%2BnDEYdGPBVkXGKxngyw5DKRveF0HClxGvu5QMWlp2Ur4yqoxmL4brkyfQPgbBuW0DnTwYZyMVmmCe6M6TMuYdQ%2FoNRrSJo2R4v7bbrUiMWiJ0oTleMvbVIT52llxGEI4OBXBV9lF1LcxidbaSHlEm0oz8HjVVnZ2rMXkXdc1wxhx&X-Amz-Signature=ceafb52f826e9a33778077e1722759741460b3917c8fb7737231248b44aa8205&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
