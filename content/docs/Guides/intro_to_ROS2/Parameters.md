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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTH7IGU%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoOOU%2BQ5mYVWCjUemAaMeGb3sU91JWij4RB5HnsXXJWAIhAKdo20wau2wIJ11PhOAiahJrKj2IHFTKNB%2FMuk2%2FbqNFKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWmvMqsbgIc%2FfeKyQq3APXHY4iGUMgBkiWfo3Y3m5NgrgRiCIiAEfJiX4SMN6c5kbVHmqAA%2B42aVI4bx772H90oPhqvTougHknH1KZ2FN1uvQDjxfTqeqwVmOZoTnghDLx7HBw9RJfWGPBb%2Bj1%2FoH1RKjyTTBXqD5FGVgnBGy5cnY1alET2UIRPL6hE9cpLn%2FU8PhpRpqf2359YDgXOCS8V%2BxU5GKjjY8wDdGEW0qjCwlnQzvqeNxdh4gMdKtiPVE7tlTgtB%2FEmvqjjZFcJ0nntvdlEVIwVTAnES2nHXxOMBCe6O0guBop0NIdjVEeGi6%2B7FtjaJo6ZOUFJV3bqpnDzKa%2B%2B0%2FbobRPGxVY80AEuugCibhf9FcnyGHie5b%2BjiSksMsqPWBCbSx1dLud%2BsYQFBTjsK99%2Bj6IatIWSGa1qvMUdmGJ%2FotTwowSdnN12ymLKqN46S%2B2aIE%2FoMpeaUkEXkjK%2BpBfOXFTZ9Zq8UV7HMEgk5iNHZYa7Dcv7cXjIlFRYv4vHOcDdK%2FYPq%2BvXz5mIg5ywgHk%2B3gqb%2BtBg4Y39gL9jbZ7SpGJrUe%2BfoznRzJ3XVvcsuqKtBp8hIBMFHAbuYPer7rVcfJ6lgtKGIHrMSvG6z9HrLnIOWoPKEaADXuFpK3DgZZG6X%2F5xzDW8K%2FIBjqkATiV4bfd2rY6YmfsHZ4%2BHCGxXDrtQKB6qdAmAWknY0pF6Hvdloax81Djiy%2FAcMG%2BqcH2uZoDnWDas9%2Ba5%2FFABnfB0PsmiG0%2BXF%2FkdI9aZQs22tjaLNQNWmYbo47AuWrBiPTJY%2BVDqrDm746Bt%2F0TD8pcl%2FPkBjClLz11oWlzcf8TXb8F6l3%2BbnO9Udp%2FvwhCPcx2VSLloq1LdnoXRE72zdahuHaQ&X-Amz-Signature=279f8a9954e287fa2296c6fe9d39dc0231cd679eb077f0101c5892130a3dd431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
