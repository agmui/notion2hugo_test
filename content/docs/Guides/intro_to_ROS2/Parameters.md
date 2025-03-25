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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJNNJP4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4VVSN4qhcennRP%2B7Xek3IWoYq85vkzim4fjYc0OK8OQIgNSEEgo7gBvjckudGy7So5Q%2F61tW0EX06Gpsz1W%2BFbpoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW972QcVWKJGiYj8yrcA5xJRA7x113WSwU5SgJzG68gW7EgL35qGxJqSSJxWR9oColBKozzcw4iX4Y%2BMzzp%2FZvD7bI0%2F9sJdt5zdl3B4ykYddpXAuPJ3gCYxAmVl9cKnmZUpx1sqrG6tIyLv86nB1WDi9P5dk7rMTCV%2FtgWG7ESP3yvMk3%2BwsCNs8BmPNpsmC9ZbmhUUiVaKQfQIffkWymqlhwx2Nl7Yn%2BTGqrsVkuVRtxsx2dAcKtng1NZ2psnbjyWQnAVjoaYSrDp3MoHk9GO6g5hWQMYWRtMbvKaBXwudvTFWWUAqgV%2FSQ6MTQkjBa1Lh4l4FKkh3rItHP3JB58xN0mSCRhc3Xp5LNCwZEEnfNK95xnJbyLzr3WMwBcse4D2pfj2G4hSB27EG2wzX7CjAq13p27K%2F10fZwGlujZwBSsDr6MYMoqlO66vkfXVOcY9UIPfQsXkk0bCDFjnlOVvfccq9prU9ERp0LaziY8zc9I2ZCQfbJoa0KN5Hf6zwVWJQgL9xPXxXCraexxeoilYI6jSm%2FXTuMypConwqcpgM710IlmgKAe1tp0vfDMs7YdMalQ5%2B5rNIeWrHo7DBzs34ngCPq2eIaVk5RpmMWOo%2FEQhpwhWFZbFoaJ5EdbYLiCk2kSSGSRejcmkMNaziL8GOqUBZzSdxuTXtez11c1CHv8bmxwwCgq6VlMDxfd%2F6k9%2Bf7E7SDa%2Fp1poQdwoeByyZLwxTO5l1XnQnDKWYFbjX15PtN1wNtgBbeAjou2ARy2P1W%2BDe5RpP%2BIXRkSjniqPkBEYxgAWBR7JIs598KVbDJn5vnImiE27WRnl9dAdBZdotD%2Bw6OcLQoKZWagmngoVZtCw%2BBpb9xJeIKo94F2KSJhb2r85nd4f&X-Amz-Signature=b208d5f07bd9a14c6d984626dac54d76f54b2b40cecf724eaf3c78a34b66b19d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
