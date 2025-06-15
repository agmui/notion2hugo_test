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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TVLDCG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGb9TlcJiVPxcClbtsrhfjOq0wDcyzbXzmmEtDVMIS9eAiB3pWEAmuYzFqxzaReZNje8O0zyFDseOAzhIrhmei7T8ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMtMQXiTehaflHQCFXKtwDh7PEDg3otONkdDnswqW9K8RewqeIqj4oOITkp%2B2k%2FVxQd5%2FPlgkimOXcFEDKoB0VgWCw3L%2B743achCW5XWDH9%2BXJfO3PPtjzFMAtt5eYpLnQ8qzdYXJOJYJelNfqy9UIdb5dPXNrtYf0sq9c%2B7p9aDN0X%2BRt3Cjqt1zERBJSlkpQdJtLjB%2FoZB%2BotJ6j8HAP1KDmrnpzFT0RstDg7JKzymxdbCHYfl7qsL9kzBxxosr3Fs9gQF%2Bz0jI382AvuiX7VSXzAwRctK7YAZsGiASWeItq70bvM8pGRT8hzieHhDA%2BokzMo8kCMkzzZXeWIvg9kTKgq6YUpjBiZ07YBRXI4DIknwKnGZ1FX%2B8rmpkITOMCftpBlZ61ugl1tmZvlPFUPibLCz%2FbMX%2Bs9HX%2FHWcO3aCb05xNx7Dtip2QFjKanXk80J9waW4TPI9pFIPnMPxfrgbNaJiY34eCBGVqUmlzPtznQTPAXX1YO%2BtzK0rlAbXLDP8qqm1k7nFSRTPy9MoJ9l0fPDk8B1mHUnCUZD74RO5pdS9aDRklEFkyPLAlO658Rw5BKE8eaG4cx74R32tZJyrmbzC4wIXHbYWbon%2B5ZjQtB5a8nh3w40WZrLDqxeBDHDjs8evrA%2BJQBQww04W6wgY6pgFwsKiOHBqOjiMjjXn2I17Qu1aY4jgUyUEpI4LArC3XR%2BLXIK04fJ7RHt8F8UVswmxEoKAKm5zQQ9iec3nrhuNHIYBYNHZ6qZYPCKU%2FuQQce54WLDfOt0jhATF6Wgm6HEBCGIf%2FLCD0%2BmLjvN7gQgCohlxT627UAAMvAHlcyl0nFCfcT0ADXF%2F252MutG86NXSIDyumjIUcsgBGhnVFM%2BOW4iOCa5Zd&X-Amz-Signature=037099657b0d5605fc6c5ad1fdcdce2bb7e1dd3f4ebcd04f70f3dcccd638dccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
