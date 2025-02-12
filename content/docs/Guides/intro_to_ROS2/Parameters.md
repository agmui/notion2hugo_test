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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOWFENYJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHqRcziVI0Omssmmz0OVsoif5sAaQAb%2B%2B5Rl8XNP1cgAiEAuLNVES5ea82LqTxd%2FngRfsWBHIegVVQcs8opHutZuqAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNDd4HIZOpYJDuK7yrcAzUz9qEDsTe86zr2oxO3SicBxx%2Bp0FnoIJ6f%2Bs0aCEkZrBYMNCVdLWND3VyFRA0V4%2FefPpgxu8j3MoTbnop%2FxbfkUXoWCOVy1cjWkokCOC08%2Fgn%2FZiK%2Fo662rl%2BbkPnJKV%2FBasf7CImaVSBL8ttnJyk4C%2B8yFdqq4btbgVTDpNJbJZJImjAOgOQVljPKrK4jX2Mq9VWxlE3j48ZqVyv0d6aK6xKpEeAX%2FzWw7OxVKiwED3nLtuczeXg2WRxR6nF1zsvvJYYJPMLR7XVgv9VwyImhamiWFJ%2FQoGB4yOdqof5zDywn4aOcnyo1kYCi%2FusB6VrdGN%2BZWl%2B6mnCHHVkUBqZQ6yqnDk3nQnwFSiDLokTpvPsOIgUwP74Z4CGXkHsnDfGr4IPtdx1HVNbVnsgSsdLB1JLsQkdShdUNsH%2F1SMMH811lXYrH3ayg85%2FLzE8bl4P8zVLK2SPCtr4bbSwYTi6VTN%2BjSPC%2FgLgK1XwRzxyXzqzhxyK2kNCWXPTDYegkse571tIDiacjfC2IyK2PgdH353dFcKhtBhPRhZevqlcnFpFyLrmJ8%2FCB3SfFaDvjIJc4zWcOfI6Dq8ffdEZB%2FOXRYbhWs0zBqDzYZq3OdpVI4DIKMpHe%2BvJDmtjpMMPzs70GOqUBodyJGe2KgECIRIj54cVgrF7%2FoNjmvFdfmiMJySFJz5mOZUnvOfWxftqbH2uvKo0cLU1FyhbnEZib3mowC1BbRVltndVhxlkZV5eSqWW0F5J%2ByhaEu5JBHx38YEE2KMd82Er7%2B0WQuuj82MAQFDtAyoFbTYm85Q4aOhgTAtxRgs9jCT9izAdIePgIELnlYnumD3vp2IPoMXUD0SOanAOcc%2BMrVOi5&X-Amz-Signature=266d94a376637bdb5d96f1355394f9fe6d2f93b997733deb83f40b68998fb42c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
