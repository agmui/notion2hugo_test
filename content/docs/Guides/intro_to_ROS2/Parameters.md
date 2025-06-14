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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNXRYTNC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGe7gEHZAm7d4o3DzNMgCaome3BBp4bHt9LJnNoVSdkzAiEA6BkXTIAbBRAx1TYwQGQHj%2BWCey3P3uR06Dt6DmeWZAQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDM9FzGLN4oA2gXJqcSrcA%2BDRv1E%2Bj6YRYEhtxkd9gKsR%2BMXm4lfONyCel2YZUgoUBcQnnyOcdANNWz%2Fd8nS0YivAwQkuYnNPl4J1K0U0J9NnDd6IerbfV6XeOmaJxd86pGP3fKuoZmhjQsf62IgB2G36aVPjTCzDwLqJ%2BSBl7BXvO3y%2BiNmzvAIqeEFXmlzNsp4fGTqU0kQK4vbvNMtAQAM3CpfPAaQCwqKZQJpWwRm65VFhlbWK2VN6KMnAttKGxSUQUsFQQ5dupPblfQFOQTQF8aVTwFKjHueuXYUpa%2FMjd3XSARdVdHtx9wCb1ZZhHrsTiLnUAPGHQl6CjX49ciP7uLlGMSt%2F%2FzyepshJ9m%2FndvWw1qhcUUsh8BJ25Xk7E8krmaOSR9%2FNIe3soWHnvfW%2BJe5UchK%2BbXsjjuKxx5vPWn4x0iXd8yjTkQqpheMZEaPinQecebllU7XkwctS5xCJNfnc2TXXxGpQogyDVfvHJP1T3zRRM%2BPcfaaUqT1Lp%2B8NBK8ezN%2BgTTt%2BssrVPlmAA%2BNFfHZB9AE5GSM9MbdGM2pH4XRcNzzetY6N44XmTJs7WKlJDN9H69uQ5hHmAKmiQnoCYh1YciUy5yXaR7djIDKFQWmTwc7qn7AHST2HULWCNBnmi7K8bCnsMJa7tsIGOqUB6od6rtVqq1%2FFfXise4JxPJKjWjDFEfJUW%2FLg0NNLOzoQh%2Bi7xOkpJwat65sxuiRbN%2FsAQy%2Fib9OWClLXRRIS6JkATQmqout2XRz7UTCzDPzdwWyiDRgaGvH1EUur2hZEARrqHUKwXpjqAKiXnak%2FZBvrYDA8enpyUFbZUJKbWsRbgCNkY4yJyuCw%2BzhNmkrBZE3XAsnbRbnnD1Y8r3dqtmeb2IYe&X-Amz-Signature=50f214395de88b858f9382eca21c88663c8fe6228eed5115b152746947cec006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
