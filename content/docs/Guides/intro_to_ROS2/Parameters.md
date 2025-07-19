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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBUQLI4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzUK1pfBW6uvMrgiaT8YzI%2Fo7jFxz%2BQ9CfFRNJBPuOgIhAI5Rq4QrKRUOC%2FH8t4rT3870PYNozkJ0JU2PWz1gssrbKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7ksQLVcjpvufGwQ8q3ANR7ft7I4rJh7nnaM7%2F2m9Kz%2FWFcbyKMC0FfQQ%2FhVxiJqH3UF1%2B%2F6NtPjODhahNUVfNKJVuU9YilEc9V6MGc%2Bc78%2BsSoExoGEIJ8FHKYXAgBZmAAoJ8Tf39EjDM0LgUUNXyaSQ1Y8NZsyo2vS74PzI1mYGAm5cJrTe2XVeyb5%2FR%2F3JBF7AzC3sYToo8xIuyyJdGcknYcru13rwbveynhaDbKi8Y7%2B6fuSotQ37xSRxm1arqAz9ma0PvqU8oujkWxAazSiCRZKl19DD%2FhwJPZMDdHMgETDYDM6AjPlm7sq08Mq2CjWOnj1VY%2FbR%2Fx%2BAyILjFK0vMc1fui1e51XendzUEYurOsjANaMkPvOOJGgDeoTlAmYREvkLo3kItimjFeyvCG%2BPa24DXydjy87yh%2BfQD0aAw3d8%2BkHFQyAnGMDwxTWBfaTKSFFfj2zKibhtFpR9x5%2F3t1ctjCYe%2Ff350T742%2FbDgcv76QdAlbZBCgoo5jsItMV5MXOrkPcMnEpNwa2W7pSAS6XbXk16teqZtZC1VR1uhH92oWq3sI4DTFHR9Q1L5MnIpU2GROQB2uv0Pq7Gxa%2FAJqw9t0m%2FJiZho0%2F7EBtJGRJ8Vf1ZDnjaotSw6AqzGyEHqB6U29iIFuDCF%2BevDBjqkAduzRwX2sQNnAnzPv3wzwP8s4rIY3RwMajlTe1bP6vS%2Fl6D5Xj3ROqGBqVvYVptEeKZVN8H1XiOG%2FMgUquOxpwOPpzMvTk20vK2mIB8XFi6aOJ0QAvM4iEyl52xblwqNbK4GcMi%2BNY%2Bgv5ril%2FEITbMQqQ%2BHRtjtBJ65EGEclyyd%2FOTnwcmpbIdVkFZW4ZtNyldV2cj3i%2BPG%2FNaVLFMzK1VwVB%2Bj&X-Amz-Signature=b82cbc0134d6e94bb802558264fa47a1edc4a4f6db9ba6a645298997b73ec3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
