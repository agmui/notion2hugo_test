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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVDA2FOR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuQ5wzPYqmAmHs5rie4SyLvUZ%2BCwDhbpvvNjVE1FFErAiEA%2BuaIStCdokI810%2Fgb%2BBwV2SZFM94WAbAkF56ARPLY74q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP8QFS3q2HFuF74FbSrcA53FxVqdMTqecGgSfK6k6MQaPi4hVvRR4VkD%2BWMuzXk9uBajblHceEcLy%2Bu3rhNFJRU1v4hqrwuxe%2FLtQGb5Mjy4cpz6NPH76uNNN%2FAuO16hwnWbT0nSL%2Bt36A59YoEttdRvQhwjNM91%2F7veP28yfaFvDfiYNyq%2B1fVQd5HiXd0h2JmT9TvNbhyZt%2BXNAgWqspya9piRP%2Fhw%2B7TF60sV8DnMuOW1gPUn9n80bMNkyvjPZXf1ACqsSdbPwCHakqGEmc1Z7e0deBydrpVyJzBSgJIhYyZR%2BL78xqT2qKIiZtwBd2BtBtEWklGK%2BFNVGgFSqbKbqCM4vpwbLnIJr1YNXWJCPyEdg%2F0QGhGchkvbI8M36qwX5Lhj5BLIIPf9ZGHVvYP9hy%2B3P9ZqUCHv4HKMhblDmScqPq7NBNyhbHQQCfypP3mNcpeh7IkT%2BZL0IU%2FzTKI%2BGcL46FMg3WsynMwXCXKxgaaSn07P9O2B%2BW0KRdWUjkapHznUUHSiYC10y0TcRApb6Z87g73c4daTHlsNuA2hpBxgPG8huK8hLuHt%2BEdWtRY9z5Z6GevpZLv%2B%2FxQO99hPdpvVNc0JipRN4LDh7ZLcPzGOBYbUug1rhWioGFC%2FUBOq3b5fdjGw6xlyMPmjo74GOqUBySa0nH9eqeNvFIbLI2pHFBQ3tO7TkgREB0HwqB3LJmy7NEMATPNYyp49vT1NE%2BhJ%2B8ZQxfGzZ7We4srG9GNWXze296GHLhGBlsgHg%2BJ4qzRBHbbky49o78dYBYOgKrV0a1jeFu5G4hk2ltt%2BedZ1YainhYuKbE09%2FiVTTONJonhfreQaUQA9MSq9hmWos607bDYVuDOeWUG%2BNHleXjJtw4ugGdKh&X-Amz-Signature=d0dcf09166115ffa1842aba3544ffec6d8abd357a45375cdc56ae246694fd973&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
