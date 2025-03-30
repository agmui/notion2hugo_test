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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NW7AAPU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDaGZ71OixIkg4ixEdfJUAnmYUOuNtdNrX2NxP78%2BjV4QIhAKIDuiPSN7SWodGmmecuZ%2Brmg0sKZ9dnkunmMY2dVol5KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvILPqsD2Qt9YZxtIq3AO6f%2FJkdDwnJw4zdfUePKlYb1zgajfEs7dQ0G6okAby0fJpXSQQJWMvebvcUeCXEcLcsdNeVT7sKLSxz%2FjJVljl6vBIaaAikYL2OjwU31I1Jq%2F9KxThtEk%2BJafuJAYcC%2BHAlBqOoIhprsOYEkARoyQmq9wj2vk2Jk%2FQSybiBVgfS%2F2wS11rttiMX1aeDuzd0uZeSd2vkXedlAyi6D0ImMfhUcX2%2FoVYNB69oOGyjM1TKUdupqhUTakUUsfeFaRRYgP6l2zqH7PPB0ZffrQsCJaOC53kBlwdXQh%2BNHFM0s1ugEMYAJP3CNpBJdyzgBFhv8Cnh1IZ1Ne15QXNu4BJIRlrDkUfAB%2By4Xn%2BlCFTSfT66JHVAsUKCp7OVJqMVK2E4Li7sGy8h0TBiMS5yGGpLERy%2FLth9zh%2BYg2wptCfZ%2FkHim0XWWTUM%2BLFunl1j04xuQdb5oBrZVeVcxrWUcHxdCUXbJ94elqdjyLErXIT62VMXRmlGsV1PPr%2FyELtt2uZnJN36zu%2BxxaOrku9Hh9Ix0C4n9D9mA%2FCX73rKjVIHZuwTdyZU5BNqqe0ph%2Bpp5Z22EjdYzSsSjmvar6yPSbVqq2j0O0fa9LMbhG96S6qXeqMXp4uA39ZfmB4dNueOzCX0aK%2FBjqkAcn%2BWT%2F8%2Ffjs8%2Fcxxq6XEZo%2B3a7ZHcmWgQ4ifRcVo9uKjNYR3ISZJxnwx4wlCEakhxt0UCAUYEOcGSoPFn%2FeYqtzj1Lt8eHe9AaqmpVeBtrnE1gyGS3K6vohiyFmgxzGhGfWcSLioao3qt34eVRx%2BUm5lTI35XTM2Ay04DZZIghZP%2FYMtz9HZXzl5yKx4D6YQ%2F1SJZf3fUlSZUKsblspteXeV62v&X-Amz-Signature=8261d37e06d60e0a66afdefcb281c3f6bf7cbb1e02e9c95118ca600fe7e0a581&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
