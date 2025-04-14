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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWM5YZI2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgh5cimEkkIeaTDax%2BN5Z4mCuCfsWuPJFe04Q47JZ44AiEAkMHtiPYFOBJwreZKogAWfimfZst0UQnEWgtBOCAAZ74q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFfgfqBlKo%2BRdEhvKCrcA5l9HWPmOCm1mdVWGNQw%2FZCFVlOk95qcGu4XTonpPWM%2F5pfVUfNXMsF3che2kUh%2FelwcQSNqQ%2BJWEpR51iU%2FnhWZKu4NACQBb4qPLnE8qvkULw%2FQag%2FUOMG%2FwgYPEohOwSoDazaTvmezAAov6U3eIySoJTI2xtpaqVBt09fFRHa0qJdIHAr7tAr4UhGnHDzT4A1w23CJGBuE%2F66iqU6jGCLaBDVaBOZcyR1BB5fLHkIz3dkkXVmlKKq61qL89QYIBmPJ2Mzjd3bE8Q15fB3bDEPJho%2Fg%2BZut%2BIU6zY8QZRNzU2NrWlsvsK6TCOPn3Ps0gQsUexrqkFZcRR5Vyf1KVh2vpj%2Bka9CSleQ6eOtoLVaoIaqechJdSh%2FUqcb%2FtvyvK3QoFAoYVq8JZrU8QeUEoyELR9wzFdLX%2B7YRv2f6o1HUsniUMbizhBBFqTSBRQ%2BCLgtWC1wlklIafmpUspK1jOgLSStGwufPBvZ42gczdkmp3eUxmiioujXei3lpaHVQQrK1IIIm9X%2FL%2Bqdn9a8Rt9Q5xVNncXyOyXXIRKVdWMbz6m2ecZrGwtlMLYyFcInQbuB5y8ZMFF1ATGx477pDb8xvKdv6CTuzunk%2BrcVPvfClLkOSAyqM2T5dMwI4MJLj8r8GOqUBSMzpVAkxoIOzgXuBEmbwZZfJgh%2FxKhmWZizMZ8AL3rDcmDwQicYzmqaRx0YSnjfauguGlMo7XnXxn0M3gYb5gtlhechhgo466m56TZZBUpo9LOWwAezbP4zUYx8qb6H%2BJs63cXZLgU2Bd%2BIsmpTDs1LxQ0teLQWQ9R3zP88zRl4qNj%2B%2BMwccylDb53PodWYKuVrpfK8H%2Bcl3z%2BDjqTROwZYd1y%2F7&X-Amz-Signature=85bddf739c14b4e14165a263b49f19172192f8fe656751237efc22cc838c5b58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
