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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UKERJG4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQClqNHevpJzs53vHG%2FQE4cn3u70Yc0K47DeH%2BX5mSFvDAIhAI12%2FJiywMMx0ohEcuinFIGGaSOwMBWYNY486LaPHhMvKv8DCDEQABoMNjM3NDIzMTgzODA1IgyjrsK54d3vIt9aARMq3ANprI%2FJ%2F0Fpv%2Bz4puxoqsFZRsOJZZASwX4YjZHfzeFhd%2FMfWmAHLy5yj1u7%2F6Mt6FsPYawqhKLeA%2F82OJ6pRVYfxyCsZ%2FyswtwUaZMkPL48ALgnZ%2B8fZjl7hokSSghieXBe96tdalajStHK1LnrK%2FrRR714WbHb3j%2BYYkkZnhu0a9WPbTEGz1HjVfwCvv9oRAJvW8hYJ27VhRnMWhRrD6TjQ3DfkanHJ18INrCUCN6rRAIyWRdAwACeky%2FWU4qxl34XN0ig6oVVJQBv%2FXbgPhN%2Bptc8tCpnUAbBwEWJT3oKNtmDvlsin9huXMDNSdujz7U5hZxnhgLs2bGygFHd4T1f4G8ijD3H6Pfu7R%2By86jIOXPOZbrem%2BJu9rSsHrDVj7py%2B9mFuRL6LylTzGhETsLA1XdiXrvhOouYtFB68D6%2Bzv4FcDP%2FfoLlCuP9zfGimiNrEsZifEM8TgPV1QtUiAJznmerX%2BYrwdi9iD8HFffF6sr2luuPhXpLfBIem58DXz8d19OcEVcGLjUsxuwKCjsGPb8ijdD0Gxpq8gBwFFk8k6XTRhhzYQbDyFLOFZ9VMs1G5r4M8y%2BWGDUS1%2BUD9TXeOiVc2fpV3apde98NJTVsozCn67nzwGhLathB5DCK%2F8zBBjqkAfrKgZsVk48YLVeCeqUIMH1BUtzgZALMh4MIgjfJqgaMEGMCaTExCDf5qN%2F8znFEu9hkJJxJNlllP3JWfrOYkzKMlOgjXgJu7me5bUESDCmT%2FizlrZSJa%2BwFCtf5NGs223wFc6ZL9I3VAnvv5CeEDp37vj%2Be%2FU8%2BRmW%2BnfnQPjY5E4hkayew8FXEEzAGeeeO7DvTHfgq9ONnQb8ZzW9dzF78PVgP&X-Amz-Signature=1f74434eaf06b701d67b0953e8e41167c830fa8f128e55b27e7a2dfbbfdfe6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
