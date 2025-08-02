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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YNM4AK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDztoH%2FWK28tGRv87lnD%2BgljVGVD516SJjNNWNRXHP9ZQIhALHEzNNZSeHZss1qZglKdoeJsdqGQdbyEdH9%2Fpdw1OAOKv8DCBAQABoMNjM3NDIzMTgzODA1Igwsa0at3up2HouCzWAq3ANO1y2pnGhzaFQElq9Juo8vVcBn4Dq5hiUPb1lw9n5i%2FrH0z4OF8PcIp5A%2FSZiqydiJcCGKno%2FtQtoxSRGoZ9rwihD7TEyMCYNqG1RZmB8TatJOuG4FmcbXyihSqUSp4c3Sy1UPSXpmSmZGEwykCr5HCVE%2BXM%2B4YJfzT7YC%2BPbptxGofC3uFJE%2F%2FVBjW4hWVo3nabF4Hb8bKL%2BMj5nO%2FReuHBqecAILkhTprp4PdHDdfHzcEtbECzvP1ykue0KBwrMVgNgYZwz8UeDMk0yZz9uLx2aQXwMGuticn3xWBTFbJcL4S%2BfswtPAWefk1XTibJfTtz5aFS%2F9WowxMiLjmC879ivLaR3rXvT7ZllalSj3jHTmtNMiBAYZ%2FWaNexUOmUuQZk4RFtXe%2BDDo113OGIBK2NAd7jxaQlNGgcCC6CvA1z1z6D5mGCy8Jp%2BEkSGBGLp2WOkwfmtXXL%2FdEQwvPL7l6B6UAskhED%2FZvllqBEV0dB8Tgzkr0jYG6MQZ8VFGoWTgirhm6YY%2BPX80oWLoJdk6UGv0NYJsNFCXk9i%2Fe4l1MM3A3u2CHYeKRwSwcN9l9hMKxpvQTNCo4Og30ZVCnCeHx27ry2jgPa4XdGTYmqFs5eAWnSt37RkM7Gfg1TDa77bEBjqkAbY6gpNj2xqWWUAt4NgRiipAC%2BjlTwu2PnlOw9oqhD4GMF4V1hSViMwx4yDRl5yLclkkXu2E%2B%2BrKmo2CdFho9ikWRcuu02MKWdjtzjIP6fstcbUrCmQ39EOJ5uAY7YYR1M6g0bv%2FuK6RX9tG14jfa%2F2zl3yrsPvvx3ee19W4dQClvG4G9CdymyJ31mu4dgb0cTH9tl09aYK6od46dA9WPrg2NE43&X-Amz-Signature=96fa5dac55b270e3d0966667348f30a6bf31a22aa51062418a3bbf59f3cc9059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
