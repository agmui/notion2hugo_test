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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YTPICC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpzUkP94pfj3gBj4Hr1HCeOt%2BTbwLSsZNilJHGVpvcQIhALLxGzzt%2F5MsrjXBF9OQMQccBQTx67aAFkneLvJdhpmCKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN%2FxE1LvOBwSfiP7Mq3AMrsxmS76qoSwpoT3s8WhTrUQWutRvQ5MsPQuka7FZnBiAf42lX3UBPSdrWw1aGSZIy3HqrbbmCTdAhwyrqiBr8hnVOxV%2BCX6rpj4vfiMHPM4KECf1h841mgv1dG%2FmgSRhGY4dGkghz%2F8Krn%2B%2F%2FIV2wsC8YM4L078gtjfzoyuJ6Ac8C2IfOyw%2B8nF22pkUb4UGUz5SZadDKU1IM3RINcpM9aiYAtAQkZJnY3cdSwQsfsWZ3uUT5lWHktA4E1JdFhskq1h6wzTtIsZ6s54p5HlIQGCUSVeyrBGUkhPqnuHGbzdo2bIQZuK0VA3ApLW6mLLPGDttZ3o%2FLgyQqnQMg5veUMDxKGRg%2B75uON1m3aagmszsKyq6vTr6qA%2FJQDUBe4MGPVTIC91%2FyrAFnrA8aKmvDNEBPtBZx%2FJW3Xaov7gbfXLiHPVNrT%2FI5xVDcF6KqeWrlEMAj5NnyXx8zNzW49Bs0T10v9LfVUWd2%2FggvvwvuHWQW4Rj0BYVfTrFbEQar9axXYb2xHFnY7LKE4xx1XhR5DctSu2e4PDX7YWtGTj4zAHc3TsS8midikPLczY3E9hEvfP5oIwWVnSea4na47tH9Y%2Bf55w0E9lwuDbtG3qhz%2FsEUYDfC2uV1EGyqSDDYhem8BjqkAYohfBzFTGydNsLITZeyl%2FvvERd6apbEKz05Lg165XahG3riB75ZweMq7ohIl3yK0JwnX%2FtFCSgcVeuswJkU1Ca%2FWqLI%2FwG%2B51Su7iuQFyU%2BtgDH2nsnhCoLQBeYJtV4wUMsP2icIYk874o5slkrc%2BvMFuqHFU5DfmRtbvwnhOrBD8Zk8FXs%2B5oCmamO9rzNVWzA436xIOe7CBWpQLM%2F%2BeHMID4%2F&X-Amz-Signature=93329ee3902a96d767478da319def4e158aeb696e7371700e733613e17eca0b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
