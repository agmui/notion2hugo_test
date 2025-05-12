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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQQO5VRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQD6lzN9YFwPp9BMUqsQSrC9t0cp2wTJ%2FinnrlgdGmTZ4QIgBw%2B5J31mSyLkasVteaWLBQ3kKQ9hShruGQesIHTJJa0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDz6lKTMNN%2FGkH0wrCrcA%2F0K7mWMyWa4ExHfLR5Et6anNM771Oa8rJJRaS1YsFxNIUnkIV5G8OQ1m2oJ60q%2FTA5dRUNzT0TEAw5ehVA%2B7fYU0FhE9P21x808WQZVeB9IFVNfP5fP07AIiiusq9LsyORi7zykFMgjDapAwjj%2FmRWkBOibcVCpqFPH%2B%2FWvhAmDUGbJEbNQjiWdWOyWoDWztdG5GlAoPQ%2Ba0in6CHeEHZmGfK4aOniZriw9G5%2FcEW4CcP7tuWEPUIeY%2FV862cxyqMKW43swSbTQx29ALKV%2BYIdK2bV19EzZwyY%2FH5R5egTJK6V6a2w0W65wm1vCmCS%2BrFmRgzSq1ajP%2BmRc2wjckG82eSDtDrhIX8yID4niSyXWeSk6FjK1YPGJ7E5JeQT0%2BMUTqpXuaRQz8qdX%2BZEZrinos7OiJlQVPZVGupcE3QFpjUd7eN%2B7uYs1B%2F3cVB%2B6bAPMud2YoJpPfsz5AeryPtav1gxw%2BGwF8do26%2BpqsSm6nX6eDJehbLczsTDkEQamyUG900IBL0cVF9NhL%2BV%2BGoFbecAZjQKsedT9StDNK8DqvxDLFX8hTwW8%2B3DjvzEFDJL2EUfBqwv4io%2F1amWsfX7lW%2FfG80SpZngUEPhkZepCcfAmbzrFPs8km1qAMMKUhcEGOqUB0tfCk3dRnIlCevo%2BvADf5oBFcHOnkyHI%2BYJqr%2BObDrw3v2R8WpjMTAPnWsf0akSLdmi0UNg6Hmw4xrN7L%2FseAhQSGI%2BhiRTJlL3tnvXbXATBOl39r7L7nmiS3ZZdqfW6E2fJ8DCMpbrcidusoacQBvfz%2FSRFRrNUegfGtpWprE%2Fu10%2FfXQjC5RRtddt2W2xOTgh6KeUaR6dRSHQVJURmqKwrklAU&X-Amz-Signature=3b40492c6d9c23cb741f688969af2a7a6ce9410459f329d3044abcaab450d37f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
