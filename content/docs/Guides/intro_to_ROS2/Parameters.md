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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BRRJQD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAgblNjjoQIza35DxxTWx7xH8gzAs8JyQ%2BjNTNrrQxZAIhAOrUyQjRyJ47pQJ0V7Ww%2F0MRT9Y8%2BaTPxZxzZv039I18Kv8DCDUQABoMNjM3NDIzMTgzODA1IgxOZQSeZ6GnafcIIScq3AObe4m74kNii%2BRx7ionj82PtctP9YqxFy%2Fhfm70hZbck%2FtdOvGk5EUrogB9RHMpfaKR4CxiwwI1adKPXwlR%2FQJSh94nrSUC8Xa5aJ6Eect4ArVM%2BDuVB7S8KkZOStOzVHJePoZw3F8ZVd%2BO4XM6D7roIHcE0tyV1ypf9hVrp9DjG%2Bb2vMm2joU9lRTMP44pIQhPl%2FOQHHz7BdbmrIyqqpEKa5LyW4hBF2rIOvgdzodYHuwu9uFGUm5xhzSo0Dk10htb1V9Xe4PnDarmFySHtM9ergP7IU6lF5YuWpLDiJ3%2BDIuAIR8vbr2BM9uipDghWYLQYiZg7SIUMcy0w4L0nRkcB7o8HMZDCZx%2FbjOx89Dls4WhGkie7HZqkrrhd2RLoyyHowzdCI9p61LN1UJ9w5T%2FcPS%2Fz43XMjOKzoaA%2Be1Z1Pkb7wCn5tbuddaRYlFEtYPftQkKpFxlCt%2B%2BMgqO3%2FgdDg5zPz5orOkUyKkzujMgZNT3U%2BliTj%2BxcV34hGA7YeA2Jr3x6xyyWUNUxVFJAqPPSpuzraJGOnvkQN1yT4IVJANh8w6M6W%2Bqmlrlr%2FHLR0E7g0xPz%2FyDxOJMtLuCsT9ROrGaXpD%2FDNDv27%2BEKn04FW7IQTIL1lMAcjovtjCyksa%2FBjqkAb5L%2BGw4N5AgMWb%2BKOdvLG%2Fd9KISszfO72at2MO6cA9uQUMQrnF91POZ8Xs%2B5%2FBIhnrNb5QJS%2BW4WljuA6UrhpNecjw8Q8%2F4weJN0Dxjj7N%2B4vAdH2DzcD16CHlQCAbEbBTMFJQYKQ1SnZPtgeTVc5I%2BYIuH9wLB50AzofQNSWDf%2B54bp2HrmP2YO8o62ywHmXaU8pIP6%2FIv%2BFc6Fr5MMlNrJoFR&X-Amz-Signature=3f39b070bdce3161a53574852846ffe9571de40efac424c4356120b2857d5030&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
