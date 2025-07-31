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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQA7GB2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhvEgT2%2FO%2BJisKnaS%2BStQXXzrcQLDfAj%2F%2Fq%2B7YENI05AiBy1TzeEAC6KHcAKqm10z6IYh9i%2BMbQoT56Wzf19jZooiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPLZkwT%2B7oLOWHIIrKtwDTpbCgHZA25mpurRvnAqYFVMs9JxUCLqOQLNmlvd2Sbx7DOsJPjFLUe8%2Bx2S%2BCEKD6OOC6RuIPzcp8r13cjhdMLV19YLV7SDDbuZgffNF7vlNkpfeuCKxLNkCXgruvkeD0n8500QY8U9xZlVYrBGqzRSVWjo%2BU976PvdJHaqiQH1DJQZnvyVytqD9fGiKddRGoPmVBlNqHhW1g05m8ILtsjKc6GIxyXwCX6%2BtA9JnRiQXhUO0JFfOiweVfmKoO%2BkGtCrJ%2BXmlo9zLhXvpkvoShQoubYNOhOB6Vtm5zVffUgGsq1zxw9hlzTVeo4JJnAX9wIQtkl3xYOAh9m1zywC%2BgQmZMW3Eu20MWbfVKjoLSiOGITWMFybpGIylXid0qZiWydyjl1OV0xIfq9mfHiqYbF8txg3hxGQohAf%2FLocA5LBZbC%2BkkodZzYiGOXSipudwqItA%2Fkpfn010L99iBVFrSebOF2puWxrbRYe70Pn39lwknidTNZWGaD%2BV1Q2IfEYJGbLUOjAs87xA75dJbQPMoHsRosQYDL71I5XrPvPJMhTE5mv5fQ4eh7hPjYsoQqqw7rmZ0admRBdlpCI2L59yigpXnRq2ZwskyK2hRUo49VbUEb2emXQNuCNw3j0w18qrxAY6pgFJKI8cQ40cRbp%2FTZt%2BNC9ua8lBeVXe5VnWqBiMqTdFa1XMIz7Xp%2FF6H%2Fni6M7TO%2FXx52FA8ZGBfqkXDPPtCKsZU267j8U3Qd2k36F5ZeLU0%2BuPWVTF3r0FMkMIUVi2QsWMwmBf0uv7ug1Kw4bT0RCF95ucduRmXTP6M8Tnti%2BAllSYJtnWiIoJ0TQNtHTi6mutpPe1M7zK%2Bvv4%2F%2F2zzheMwJg4eOt7&X-Amz-Signature=b84ec4ed565d4df68fd71a26420699317639a68ce36a6398480e77413af5ee6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
