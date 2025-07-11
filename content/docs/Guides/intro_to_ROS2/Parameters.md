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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNANBMMX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC4aFsKb6wEhBEo4dB7yZ1Jabklwt0F6k2flPp8bDKUgIgHR2qsyIAe39J4Izgrum%2BcB3FuvkaWRVctFBIMd96EOUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYYMieBBbKPmkYodyrcAyiu%2BDBMMbKsp7O3zBdppHYl1uMZ%2BqX6ZSdxVBnP1WqIXxYcZ53ruazA8ZHgejJFrr64Qu%2FyiR0dctbH7dNuCcOhXlYEZiqIXsgk7KqhHs22rHHactsWWUWHB%2BSR89fqXApGJOnDrigh59ui%2FsNgp%2B8OIiqVnRIn8UZnbd3RrG78XqbOA6tHLSKksmVD%2BqyiIO7OdfiGwDeoJp3oZKu%2BhBCTu%2B%2BSuQXOXinDSi%2BqgEbiPhnaG7zCKYG%2B9S7hXZs3m0lpLgLBACtWdO%2FpOSOAxfuQyHlpJlFGa%2F3KHsyHT1cZH7MMukC6FtnGIC4VF%2BkuQ1dVEtu7UT9NoN7Xmj8IsSvEcEnd6IH6MLn%2BLggHY3HPECX2uLu1f2vsD4ZsPeogLYjBG7mGYVvOPMdWFR2ZH5gVl4kXebSnreEDJbmJLdpmoIK%2FBeCsq30LZ0cz4dZINNHPj45rVNg9F7n55H7vzxND8Lc2HW4ED3U6hGLly%2F9RG1rX%2FhV9qhvSk2q3mJNvTvTVuMHsOvrVkBmxakgnLmO%2BNF9rABoDczzDBG%2Fuy1gyP0PaI5bw%2B8c2L0dPeaFU77dTE3XWqlh4KD4Wv4eVJpYD4uVwnQ9pdK6P6lYnkbq8AvDlvnhkZtCl355hMK7SwsMGOqUBQ9sauym3nbuQBYVJFhxGw7E5bFcEEpIBluII2uVB2bEUceFmLd2fc%2BxVOkoi9O2B7mHb7Wdv6cGo%2FVeyjLqkFZYjDSdLf%2FGfawxIPcf2qbcrXQD%2FPAW8f567Rmv2td77HCO1qSKol5KdhNOVqE2%2ByGsi%2BwQDNIYOCpJWgKGxQBrH%2F%2B9JhgKDM8Q1NobpTLUbAat9He74jGy%2FLLLpCtMlvot%2FJdcI&X-Amz-Signature=459663bc3383338a3891d37e876bbefce193f7d5323f42459a51be782e84e558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
