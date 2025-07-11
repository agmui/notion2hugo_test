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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHAE5ZR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF90%2BHAJmndhfxHiPQhDAPwYDZWi%2Bm7OwJsvjdIn3LswAiA78XkUIW5Fi2OAyhteMBEKQ6o1MimhETdZhnVccbtGziqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyU80jaGylflBWFmPKtwD9aTY6KacUA%2BMYrfby%2FqyEGwv7a0dd3JqBAsspmcVJ47e0NPUFX49st%2Bwp4O0v4ay9pYx25mXT%2BT%2BDYyE2r3Uf3fiOlaFGlxujFwIu%2BRm59eSQjem305V6HEPV7a3LUglons57dwp5gWwav5I%2FQUwsmoku%2FV28264MSeGNliPm5uehzXaFKiMyVuG2w%2Bc%2FJf27lAp%2F%2F1db1%2FqMF2WTHpFQapaMQDNhKatOgPQi9O2sINynwM7rm6D3oscumDgTjhnHfnA8nm%2F9%2BYEOH5fM%2FlfSTLEc2YmMx8EDrgPOo%2FOkb4rR6AAQU3n%2B7gx9EaQ1WT0iOsLS9SURQInV9vEkRSxRfnKfTgAG5PeI7vqkr5qTyY6i3X78dLIGEl6d%2BH361%2BbXU9RnVI5mN0DDboa1wJwqSUv4N2myYTYqHzfApg44gh34FDBuwLo9HAj7VYINj1vV6tUXPOR%2F6YRcJ08wCo6MxZfeXRSKKxC1OEB2jtM2NOZQT4D9oQ086PVo%2FST4N%2FPqOexPLQlP1Rcv2tD%2F06%2BtLk3S8%2FKhPPlLJJFB%2BebKMlh4556O7bdcTrhk87DtqgmeRzLobI9U5XBdc5I7%2B%2BkIc0HaCTKdYDlvrHY7xFuyn1J%2F2eAA65Tf%2BKB%2FsUw2qnEwwY6pgGdoY40XrNzwbqmPYzD7x87dY4ZaJhAYcLkrjqs3p%2Fl9suwqAmMDD80PCo4EkLwhZHJQI%2FV5Dht%2FQENiKduQ8n4uB3c%2BYnk3nZ3X6LhUTjCcm1eXx5gyvudvkHKRyuVch3bWuDeerb8P%2BuZb1PPd8QLKB%2Bmg%2FVP2ngOPmMNqOBvgLxXoMCSudubZpOlT4KmkAUrpzl5BjeGEp0vzbpAEBW0tB%2BPUnFO&X-Amz-Signature=d992b9e181ca8f66bad9a58235fbae2b6dc4c23be33edf049629e73dd6ae6c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
