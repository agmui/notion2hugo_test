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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFEKQCFL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCbpP7vryaR7gBa6vZq6HMSwaJpCxIsByhb1%2BVsC3YBdwIhAJc5Qhw%2BHCnadm68PgYFwk6%2F05ILn6YvRFe3ScqxoeGhKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD0fCIofNkU1%2FPotUq3AOydLeG2rmJ79a3%2FgraPc%2ByGuK%2FhHI8E5F1EKmyoQrQkHZKwnfrXAdU%2FpresaaQD1FzxAaf9iQLEgBCbnnn4eEZOy1Wm3bFOk%2BGw3BsD1gSpS0Dy2GgOyLt13iFRVH55bxAlibIwHcp9Thco9lxifWoj1cedYyxrjrHu7Abdijz%2Fegwn79IOPbmf62PeVgPMwGdAvvHL5N%2BuH6%2FGM%2Fb%2FGMywvRr7FhI%2B7E%2FOV0Ru8ByPe%2FtHs2RT178YraBWeMkRXswaHnpbxwtMx6vnYxHyHKib4XKcdGAOO8EptCaQT6GQVyNAHkzxpS%2BBBhYWIOCRHSUfIqDVh5%2BR6Ic93cSd4f1bvbTDFgLhX%2B8WBLt%2BO3Jck%2FJEv80iHk5EOEwtX%2FGXEQEMR0qqwta71vMwtN7Q651ys3k2eAlmrl%2Fih6e%2BN%2FdGHrSxUJBMw4CAErO3KVrxoD%2B2NCjGVknjdAdyHDFCKM7kACVHtT6grkg2d9ejROZSLTlPPtDYN2Mphz5IYzymMymL7ZI7gWQJ2LG4%2BTciGMc9UvlXW6jwWKxeQEmrelYOYU2fTqO7T6Q8QEtza09ihy9v7FmatoGPVgB6TEN%2Byx%2FvmE%2BF0MjBweyWmbjQR9pvgdihCA0m2BAnPSxbDD%2BuK3CBjqkAbUzrJMuQuf9GOllkR8eJXqYlTfE5h5cqFMC9JRNGk9vfspagWhyJYFtpOcABmK%2B%2BKDIWi3H8ExLH9NFRCr6Rn8E6gj94u8nAYYyiXEn9A3inU1rdXS7mP%2B%2FzxWnB62VDbrEJjfM0KBfEC%2BQU5a19FdgmxcrOr6hSVietZV9rj%2FyyOhV%2FAjtJHl8Q7XMKwGdHwvBHyYSv9P2KNbxQDgQo%2BlaRRWM&X-Amz-Signature=beb9ba7daa9e69dedd4537f7c3eb1e5c3bfe0a895135dbf9195354c8ef2876d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
