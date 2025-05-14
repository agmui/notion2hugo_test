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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654V4XND4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDDhxAa4vpmKyESrwga6tTgG6%2BqdLeZwjHfnVsLeGd5xwIhAMrVyfjffcc1WSoYWEti%2FBJIoRPG%2FewumMfaU617GJ%2BRKv8DCBIQABoMNjM3NDIzMTgzODA1IgwtuDzfHT9rcP93czkq3APaLno4yyXJ0jAfe8jswzWYZUBwlpYgCnrou1pS7iVNnE%2B7swtlncLeVYtIgCGWuh8TUZ3cDaAbb6Dbe5M1dLQjsopn8jW54czeVutDF1DbfSUBtSh3T2o3InedsT8iitGszSgkH70AKg2XhXkABYjCKInmFirvcalC1AEzptsIpVcqwk3BrhavMWHOCM8I8opeK%2BkWJy6gon2l%2FQck79hqlC3BpaWY0VACzOiqqpCKyK9I5bhBJtYUODGuLZIWuanz8yQUmkGbcxtbpRWWVVp%2FtRgjuP2bfvI%2Fc%2BvvQnGq1D4G2rw5vU1HYK4gyey3B2AHugnEQGfItHO2xUAEUlwwBR5dQhZRMWR0aeo2LbjY9qlfH2rcw92P%2BxaDa6S5ageU4J16g2yqQPZ8p3tTOtXToyk9ESXR9QH%2FuEDuVQG%2B5eTplJzpqJsvT8MXbY%2Bjhi2nZZbyGT5I8XW2fq4EwvcUU3GQYYL2jMhspA0bN3LT6N94eMxz5UJ%2FCgmKZ1z4yd7wuCMlx%2FRSfUpWxj0mF8gJoo2BOnd6yWA10Qg4XzemJYT9i4Qr8jnNv9HIz14q2A4E6UUgQ2Br8GgTiu2Q%2F8qPNi7FFjRYUmFwo4Mpwi5eGWjC%2BrQjk1snMbXMZTCnuJHBBjqkAa87l5sYXGKeUa3lm3mj54oFEzRPixS0eLMq%2Fc%2FtAqbKZfUbXAZYLhRcOqf7Xnq2%2F4CBtjtdjKTutq%2BDQReG0uUqlI0W0LSzJuoD0pPXlbsP1wLvAWlunS5PNov37Oe9m7jEa9XCRY3qRyqOGNnsxQLx%2F%2BzuNkCxDNd5Pdf%2BJHaomR6WPcLJ7KuRTVL10wXg2an418CyZ0BrtjAlOgMrojPZNq5%2B&X-Amz-Signature=86ed177579c297ee7eb7e61604c55f5976f63fea47accfb0a3314360c6a7cbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
