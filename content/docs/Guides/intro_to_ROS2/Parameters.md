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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3FYSRSN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfChKfP7Ju5eFv2xzT%2BGt4DS4QqXFZFe9pftAdYxZwFAiB3Y64DoEJEFOMSwtLmYXHClmlA%2Bbk7mJZzuavPOoDRzSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMoxU3g1lsMQ7xtHMDKtwD9H9V0cmLd50qyvsK0fzVWgpNdA5oBHQMT4mSyVsdxOCPITzAwmPPTtZcT3H14efuRWK72hNjYl%2BCNritxWksk3B8egVmLtLF5UG2pGY0a%2B%2Bm9F3Qaw7ZHrT2prFyAoiZQ1nixmCV1aNoJC%2BEYi2rN01lxeJmXxulZCpIxDaoQv%2BnogeWhWxfVXUOB9ZWLsuOzJGcp5CL1SLcpdUxTrzX4UYljX%2FCHy7TEH4lwpv3XezI0HrH3EGKIaRrgEO08RIcZptf05J5WxsTW6q%2BPQm8adXssz6OeuKGhzeOpbchHQh5vYW7%2F814UxGC5dsUekbJKe8PEfPjZsW7l3fTXV3fbOn09MwG3tOl3KvotKbdTqkgjWQceUzcpq1zS3TFylqix3aPT4k1GFlwKC3U5XRFVm6dp3Zo6EMztkgRbDvTiMUtef0ijDG9cThqt5C1GCRhgxKX4HPUxTqYhDYYKLldU1TseUVsXFXpx%2Fzz7aV5saMCeFJ5nh%2Fkt8boRA7Eumpk0CrsOTHpiJslXBmHPa47iRF98XP9eknnpjy5k3c7jDXsfJEK1hu216Wj%2BTYyFoMr4TdRwI%2FgCROB1Ee3GGV%2FwCx898osPreXDNjSDQgdfGpgblHr7WjpcIk0lRkwsuTsvQY6pgGvpRY%2Bmn89l23OVPSGr2LPdUYbQKpjH4RS6qUbjFoFPWCEmRMqrDkzCL40Och0DQy3FD7S6kPY%2ByciydmMvKh8sXwQZV4vu2SJH1C7rZ9Kt8Qxm1kJPwFtCkWgoW5bmJxvukhgj9zda263sNp48UUHJs2IZ%2BAf%2B%2FhsvpyNJpgJ65wf9bDbjcdqwkFt1S%2BbgIo1c%2BDMJ022C16nC6narm5N8sn3830L&X-Amz-Signature=676c3959d9fbf0d1459e17676559222029d4bdec9326fd831b18c496df23841e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
