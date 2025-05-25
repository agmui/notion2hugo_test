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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAEXRFT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEZADGybMRW8Z2MB5phTaouvd3yzCLakbhAd6qZRcELAIhAMQS9UwVAGn%2BwktNzDb%2BAlksWHCbYjMJ7ZQvjkjT3%2FH7Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxPAsyOALIBFhbG3nsq3ANhehCT92w4lPxsohnZoKceBqC%2Bh2OHjBKBPCqwbWTIuef9JgeWzWbhERWQL40i2fheys9AgWkxN5x80XQA35u0rjn7ow5eLv9a7vMIS%2FRETjTLAQhhFgILkBsIQBvpl166XdvuDp1S00HYYhCX8cit2rSl9yYTAcQ%2B%2FBv0Gsa6RDly%2FXViFkHNXxApNJnvl0sEw%2FN8PhWPpBzlY8nAG1FUc%2B1egz3nO7D%2BmECk0Yom5ARkYGVaeOrAvJRf96FtRjcjv4QXJR%2BgjAHdlPpJuX%2BOtsrwwAyLY3daHmhBAgIBFow8VDIFjYlzmJg5%2Fs0XtJvI0u6h5qKVBABNPsp8WVHv4MMPbbKk8L4ub466JK1aolLry7JjNGaBGoGYs4Sa%2BCddHXQ9OaKUq6Afvm6us6o%2BuTSk%2Bkd5cZQDy0CTNBv0ZU%2BfJd9y%2FhNUCGSZchpdwhoYk0C%2B3nGciGYCmk5CB5coCFIGQAQYGJTIawexJxx2S7ZFJ2zarbIY4UpfI3XkLX%2BuJSpYz1%2B8xMqZrbW5HpDA1M9zvXSL1w8LrMCLXi7dXvtzCdoyFwhs4xpSABAB2pyiag5KQ43KyZeKKbvQ4KR8RPoSBVrY8PByzSIvk1pPtSznIuovXsr8UMUDuzCY3svBBjqkAW83awcUiP3eujHMsU5Tyv9BlTDpP7ssAXHME03rhl3nC6OEixTuzAyyuH9pNhAcZU845SFqQn8yFRqZYUVGac1Hbx6tYbUH8FURhnZzNlHB8gOGeruBATCmJaZ398EM6RlB572Od4Zs8WRFYzf6gnVrmr6ai2bYqovvHpci8DOYpQWPDfZhYxO0MnFkoSVOra4BPbqPbkhDAub06a3eG%2ByToavT&X-Amz-Signature=172e6969af70993078ae1386b4468cbd5ce79fce37138e2f319312339203bb5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
