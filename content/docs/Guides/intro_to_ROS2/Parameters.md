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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRZCK4MQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH8ds39g4eG6eatBH7z9n9MqjJa8VqPdIDLQkdEfgoRUAiEAuAnSF79rbcabEPjUElurJBWONbSC1QMk4wLIEnFQaZgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDN3xCJMEWlnbD1HV6CrcA9lguIgF9tJZHItiBQN3V7tEB3sYpAtXbV1xk%2FNCY36vWu%2FBcEiCFe5sPN2wzFcN9VkjI%2F1%2F0QomunKvVZZH9cGKa2SW0AY6yvcXo%2B%2BkBKAZVsnTAlUCEKSHGBKl2NZa6kwpu3t8%2BYZkfYAiQfW%2FJyOXTllcAJ1FSqK%2Bmsbl6XywLSdDVaWC%2BtofMRuBrRLNZmwOl6PXtvlD%2BCLFNX8owRCy2sH6jTliXEm9k8Ev0AJ0pqDfLMIkPh9TdEAsTA7s1RkDlNK3nedrEaeqfRQfpGw0WoidlPVygoMI6sfye8hWwdvB3EQRQJOyccnMO%2FbhQJX5rCW%2BBj35oNg0zv4sbzZim6SsDXlRBaUBh8c3dM5itC1vQXX4xxgk7vuo8cbSqXdkBjrCxO%2BwxCWLRdmvTQdR5wJmcJdzqzogkqk1OqSGS5EfXrJO7QOYpZA3Yn8GgEIK8BNyjKaUzREJMiO71GDh%2FKOHs1IMztsaJk2TE04JhaBYEiDBnK1ZxLkwRfY7AaUePVW0jW2CBpK5yYpf%2B7Ej7Ws67UwB7p%2Ft9ELRFth3wTeZs6yMZd2JzhAM2Pz2qJUO4jrv%2BK3V%2FyRUD8kHcGLHspAtc9pCg7eVLv6VrV3lUkFeSLXzvK8PiPb%2BMJfNyMQGOqUBAgsgEjyU6lJlasriqHbaeu1LxfW%2FLke9HGbgc8ec9FCbySY4LcI3xNYt%2BDuedIc%2BBLTGtyTgKklVbekUjbEeBs9%2F1OIngmGQYOTB4o1hXg2mNaVTuGig9aPu2Prbdw8rJJzBDfz8tiaA5N1LFqnKCFPDVhEATzEziZmGOr7NEyXtkmcBlr6kKKtzV7AnRRNN%2FZaLtSBM7caNNZ1dJW6HfhRwiCCu&X-Amz-Signature=d60875dd24a93036a6b1cd637451736216d403a9c9f2b812e07505ac80df214c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
