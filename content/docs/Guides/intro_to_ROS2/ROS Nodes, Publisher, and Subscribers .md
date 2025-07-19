---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GHZTZV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGtdHLaaLcqRpgCepGLz84gM79aLmAwFFcQTosR4Ic1AiEA%2ByVjmYdz%2FEBGJxF8QNN09WhUoBm3h1Zxhse%2FMJ683HIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2FHqQ9wY6M2ofmKircA5oNq%2FBnup%2ByQvkUNxLMTzGuJt9t6owPbkGZkujN1Iq6GWLlUN7vJJbZxxJ4DyJDHUpT0XwPPhGWa7Tt8VsEFGeTe9%2BklcGBaskh3LA%2FhkPyZ7gwMzYHWgzoChC2Ym9Y1hiI7scd9jwwoIXsD%2F4BHcMy6eMMbfhwSbUO7kesHj04ZMb7JjmFdU5ykvavQlkCxMu1xxfF7otztgA1QeijSRy8sFkjklzfRK%2B7dl4FQ%2FQp8zl%2BKZyN2R0l%2F9LymTa%2Fc318BFeoDouLevPhpEHEZV%2BM%2FPlPBILs72DXsF8eg%2FtNEXTK%2BTBGtwwwe6GdvkIJz070sl0knhm4Y%2FfzgiIS8SIkBE49AtSKZUVWhTHXj3%2FToFwMPUPQpbMkPvOWNF0YAnmfm5dw8xf3QU4bfmGBU5dyTvY%2FnkI8ZYBQLa8NKiRuaSWcv6cANgROhA08fMbaY2s9%2BFebXZB3X3YekOOlpvYDWzVM169dA6f5YxybEl2cPhtZE07dt6tjCc5M2556%2B2r2AAyD9M4NfQAjgSmMeymYxpPC8ickLjrEy7Yf7uFqfIbwU0biJEQ9Fjutw6tObfQSo5751ufwULJHzWpCgiXmUUSkdM6XkxAC3CM5ykBaJ2PaXUVsBvfeIjxjMI%2FF7MMGOqUBWR%2BIG5qvuaM75BTM7yRYA53gSucPMgP7KrQALkz6td26K%2F64h7bfosJrXQ%2FaxGY1I7shpuspXqy2ox2bCi5Z0Upu0tFnBLyOSOoK3S%2BfX9YoJ1DNZeSntnNYV58cX4s0qd%2BSvyNJuQSRtp2Z2QmQQ%2BpeTAwynZhMLSJlDisSlHKQGu6wI%2BZoLfjkcfh%2FZTWUbCzvMs17ZoKo3Z%2FtZHCq74tZGaj0&X-Amz-Signature=1e440c3bc4be5c6d09750d581fc743a684391607760c40b412065a8e99a54a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GHZTZV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGtdHLaaLcqRpgCepGLz84gM79aLmAwFFcQTosR4Ic1AiEA%2ByVjmYdz%2FEBGJxF8QNN09WhUoBm3h1Zxhse%2FMJ683HIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2FHqQ9wY6M2ofmKircA5oNq%2FBnup%2ByQvkUNxLMTzGuJt9t6owPbkGZkujN1Iq6GWLlUN7vJJbZxxJ4DyJDHUpT0XwPPhGWa7Tt8VsEFGeTe9%2BklcGBaskh3LA%2FhkPyZ7gwMzYHWgzoChC2Ym9Y1hiI7scd9jwwoIXsD%2F4BHcMy6eMMbfhwSbUO7kesHj04ZMb7JjmFdU5ykvavQlkCxMu1xxfF7otztgA1QeijSRy8sFkjklzfRK%2B7dl4FQ%2FQp8zl%2BKZyN2R0l%2F9LymTa%2Fc318BFeoDouLevPhpEHEZV%2BM%2FPlPBILs72DXsF8eg%2FtNEXTK%2BTBGtwwwe6GdvkIJz070sl0knhm4Y%2FfzgiIS8SIkBE49AtSKZUVWhTHXj3%2FToFwMPUPQpbMkPvOWNF0YAnmfm5dw8xf3QU4bfmGBU5dyTvY%2FnkI8ZYBQLa8NKiRuaSWcv6cANgROhA08fMbaY2s9%2BFebXZB3X3YekOOlpvYDWzVM169dA6f5YxybEl2cPhtZE07dt6tjCc5M2556%2B2r2AAyD9M4NfQAjgSmMeymYxpPC8ickLjrEy7Yf7uFqfIbwU0biJEQ9Fjutw6tObfQSo5751ufwULJHzWpCgiXmUUSkdM6XkxAC3CM5ykBaJ2PaXUVsBvfeIjxjMI%2FF7MMGOqUBWR%2BIG5qvuaM75BTM7yRYA53gSucPMgP7KrQALkz6td26K%2F64h7bfosJrXQ%2FaxGY1I7shpuspXqy2ox2bCi5Z0Upu0tFnBLyOSOoK3S%2BfX9YoJ1DNZeSntnNYV58cX4s0qd%2BSvyNJuQSRtp2Z2QmQQ%2BpeTAwynZhMLSJlDisSlHKQGu6wI%2BZoLfjkcfh%2FZTWUbCzvMs17ZoKo3Z%2FtZHCq74tZGaj0&X-Amz-Signature=857dcfa16f7a221c5d3c81427cefd8a65b7dd6b4379c09e4a697c15bd0e664e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GHZTZV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGtdHLaaLcqRpgCepGLz84gM79aLmAwFFcQTosR4Ic1AiEA%2ByVjmYdz%2FEBGJxF8QNN09WhUoBm3h1Zxhse%2FMJ683HIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2FHqQ9wY6M2ofmKircA5oNq%2FBnup%2ByQvkUNxLMTzGuJt9t6owPbkGZkujN1Iq6GWLlUN7vJJbZxxJ4DyJDHUpT0XwPPhGWa7Tt8VsEFGeTe9%2BklcGBaskh3LA%2FhkPyZ7gwMzYHWgzoChC2Ym9Y1hiI7scd9jwwoIXsD%2F4BHcMy6eMMbfhwSbUO7kesHj04ZMb7JjmFdU5ykvavQlkCxMu1xxfF7otztgA1QeijSRy8sFkjklzfRK%2B7dl4FQ%2FQp8zl%2BKZyN2R0l%2F9LymTa%2Fc318BFeoDouLevPhpEHEZV%2BM%2FPlPBILs72DXsF8eg%2FtNEXTK%2BTBGtwwwe6GdvkIJz070sl0knhm4Y%2FfzgiIS8SIkBE49AtSKZUVWhTHXj3%2FToFwMPUPQpbMkPvOWNF0YAnmfm5dw8xf3QU4bfmGBU5dyTvY%2FnkI8ZYBQLa8NKiRuaSWcv6cANgROhA08fMbaY2s9%2BFebXZB3X3YekOOlpvYDWzVM169dA6f5YxybEl2cPhtZE07dt6tjCc5M2556%2B2r2AAyD9M4NfQAjgSmMeymYxpPC8ickLjrEy7Yf7uFqfIbwU0biJEQ9Fjutw6tObfQSo5751ufwULJHzWpCgiXmUUSkdM6XkxAC3CM5ykBaJ2PaXUVsBvfeIjxjMI%2FF7MMGOqUBWR%2BIG5qvuaM75BTM7yRYA53gSucPMgP7KrQALkz6td26K%2F64h7bfosJrXQ%2FaxGY1I7shpuspXqy2ox2bCi5Z0Upu0tFnBLyOSOoK3S%2BfX9YoJ1DNZeSntnNYV58cX4s0qd%2BSvyNJuQSRtp2Z2QmQQ%2BpeTAwynZhMLSJlDisSlHKQGu6wI%2BZoLfjkcfh%2FZTWUbCzvMs17ZoKo3Z%2FtZHCq74tZGaj0&X-Amz-Signature=374544c72cfc8b68923b497c540687f22e0e910a144408ed701a637b9d6a8695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GHZTZV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGtdHLaaLcqRpgCepGLz84gM79aLmAwFFcQTosR4Ic1AiEA%2ByVjmYdz%2FEBGJxF8QNN09WhUoBm3h1Zxhse%2FMJ683HIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2FHqQ9wY6M2ofmKircA5oNq%2FBnup%2ByQvkUNxLMTzGuJt9t6owPbkGZkujN1Iq6GWLlUN7vJJbZxxJ4DyJDHUpT0XwPPhGWa7Tt8VsEFGeTe9%2BklcGBaskh3LA%2FhkPyZ7gwMzYHWgzoChC2Ym9Y1hiI7scd9jwwoIXsD%2F4BHcMy6eMMbfhwSbUO7kesHj04ZMb7JjmFdU5ykvavQlkCxMu1xxfF7otztgA1QeijSRy8sFkjklzfRK%2B7dl4FQ%2FQp8zl%2BKZyN2R0l%2F9LymTa%2Fc318BFeoDouLevPhpEHEZV%2BM%2FPlPBILs72DXsF8eg%2FtNEXTK%2BTBGtwwwe6GdvkIJz070sl0knhm4Y%2FfzgiIS8SIkBE49AtSKZUVWhTHXj3%2FToFwMPUPQpbMkPvOWNF0YAnmfm5dw8xf3QU4bfmGBU5dyTvY%2FnkI8ZYBQLa8NKiRuaSWcv6cANgROhA08fMbaY2s9%2BFebXZB3X3YekOOlpvYDWzVM169dA6f5YxybEl2cPhtZE07dt6tjCc5M2556%2B2r2AAyD9M4NfQAjgSmMeymYxpPC8ickLjrEy7Yf7uFqfIbwU0biJEQ9Fjutw6tObfQSo5751ufwULJHzWpCgiXmUUSkdM6XkxAC3CM5ykBaJ2PaXUVsBvfeIjxjMI%2FF7MMGOqUBWR%2BIG5qvuaM75BTM7yRYA53gSucPMgP7KrQALkz6td26K%2F64h7bfosJrXQ%2FaxGY1I7shpuspXqy2ox2bCi5Z0Upu0tFnBLyOSOoK3S%2BfX9YoJ1DNZeSntnNYV58cX4s0qd%2BSvyNJuQSRtp2Z2QmQQ%2BpeTAwynZhMLSJlDisSlHKQGu6wI%2BZoLfjkcfh%2FZTWUbCzvMs17ZoKo3Z%2FtZHCq74tZGaj0&X-Amz-Signature=20b73b330b92edf4612454c11b462cca27311aa105b4ec4e4f4225577ac0a005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GHZTZV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGtdHLaaLcqRpgCepGLz84gM79aLmAwFFcQTosR4Ic1AiEA%2ByVjmYdz%2FEBGJxF8QNN09WhUoBm3h1Zxhse%2FMJ683HIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2FHqQ9wY6M2ofmKircA5oNq%2FBnup%2ByQvkUNxLMTzGuJt9t6owPbkGZkujN1Iq6GWLlUN7vJJbZxxJ4DyJDHUpT0XwPPhGWa7Tt8VsEFGeTe9%2BklcGBaskh3LA%2FhkPyZ7gwMzYHWgzoChC2Ym9Y1hiI7scd9jwwoIXsD%2F4BHcMy6eMMbfhwSbUO7kesHj04ZMb7JjmFdU5ykvavQlkCxMu1xxfF7otztgA1QeijSRy8sFkjklzfRK%2B7dl4FQ%2FQp8zl%2BKZyN2R0l%2F9LymTa%2Fc318BFeoDouLevPhpEHEZV%2BM%2FPlPBILs72DXsF8eg%2FtNEXTK%2BTBGtwwwe6GdvkIJz070sl0knhm4Y%2FfzgiIS8SIkBE49AtSKZUVWhTHXj3%2FToFwMPUPQpbMkPvOWNF0YAnmfm5dw8xf3QU4bfmGBU5dyTvY%2FnkI8ZYBQLa8NKiRuaSWcv6cANgROhA08fMbaY2s9%2BFebXZB3X3YekOOlpvYDWzVM169dA6f5YxybEl2cPhtZE07dt6tjCc5M2556%2B2r2AAyD9M4NfQAjgSmMeymYxpPC8ickLjrEy7Yf7uFqfIbwU0biJEQ9Fjutw6tObfQSo5751ufwULJHzWpCgiXmUUSkdM6XkxAC3CM5ykBaJ2PaXUVsBvfeIjxjMI%2FF7MMGOqUBWR%2BIG5qvuaM75BTM7yRYA53gSucPMgP7KrQALkz6td26K%2F64h7bfosJrXQ%2FaxGY1I7shpuspXqy2ox2bCi5Z0Upu0tFnBLyOSOoK3S%2BfX9YoJ1DNZeSntnNYV58cX4s0qd%2BSvyNJuQSRtp2Z2QmQQ%2BpeTAwynZhMLSJlDisSlHKQGu6wI%2BZoLfjkcfh%2FZTWUbCzvMs17ZoKo3Z%2FtZHCq74tZGaj0&X-Amz-Signature=6e673dac3c9a46279744ffc2c72b21d0108528cf463c0c3c31ffc330984a59f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GHZTZV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGtdHLaaLcqRpgCepGLz84gM79aLmAwFFcQTosR4Ic1AiEA%2ByVjmYdz%2FEBGJxF8QNN09WhUoBm3h1Zxhse%2FMJ683HIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2FHqQ9wY6M2ofmKircA5oNq%2FBnup%2ByQvkUNxLMTzGuJt9t6owPbkGZkujN1Iq6GWLlUN7vJJbZxxJ4DyJDHUpT0XwPPhGWa7Tt8VsEFGeTe9%2BklcGBaskh3LA%2FhkPyZ7gwMzYHWgzoChC2Ym9Y1hiI7scd9jwwoIXsD%2F4BHcMy6eMMbfhwSbUO7kesHj04ZMb7JjmFdU5ykvavQlkCxMu1xxfF7otztgA1QeijSRy8sFkjklzfRK%2B7dl4FQ%2FQp8zl%2BKZyN2R0l%2F9LymTa%2Fc318BFeoDouLevPhpEHEZV%2BM%2FPlPBILs72DXsF8eg%2FtNEXTK%2BTBGtwwwe6GdvkIJz070sl0knhm4Y%2FfzgiIS8SIkBE49AtSKZUVWhTHXj3%2FToFwMPUPQpbMkPvOWNF0YAnmfm5dw8xf3QU4bfmGBU5dyTvY%2FnkI8ZYBQLa8NKiRuaSWcv6cANgROhA08fMbaY2s9%2BFebXZB3X3YekOOlpvYDWzVM169dA6f5YxybEl2cPhtZE07dt6tjCc5M2556%2B2r2AAyD9M4NfQAjgSmMeymYxpPC8ickLjrEy7Yf7uFqfIbwU0biJEQ9Fjutw6tObfQSo5751ufwULJHzWpCgiXmUUSkdM6XkxAC3CM5ykBaJ2PaXUVsBvfeIjxjMI%2FF7MMGOqUBWR%2BIG5qvuaM75BTM7yRYA53gSucPMgP7KrQALkz6td26K%2F64h7bfosJrXQ%2FaxGY1I7shpuspXqy2ox2bCi5Z0Upu0tFnBLyOSOoK3S%2BfX9YoJ1DNZeSntnNYV58cX4s0qd%2BSvyNJuQSRtp2Z2QmQQ%2BpeTAwynZhMLSJlDisSlHKQGu6wI%2BZoLfjkcfh%2FZTWUbCzvMs17ZoKo3Z%2FtZHCq74tZGaj0&X-Amz-Signature=4254c9aea10d8eebfeb99025f4ab0ee36c712711a6adc405f3f10c2e61cd6fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GHZTZV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGtdHLaaLcqRpgCepGLz84gM79aLmAwFFcQTosR4Ic1AiEA%2ByVjmYdz%2FEBGJxF8QNN09WhUoBm3h1Zxhse%2FMJ683HIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2FHqQ9wY6M2ofmKircA5oNq%2FBnup%2ByQvkUNxLMTzGuJt9t6owPbkGZkujN1Iq6GWLlUN7vJJbZxxJ4DyJDHUpT0XwPPhGWa7Tt8VsEFGeTe9%2BklcGBaskh3LA%2FhkPyZ7gwMzYHWgzoChC2Ym9Y1hiI7scd9jwwoIXsD%2F4BHcMy6eMMbfhwSbUO7kesHj04ZMb7JjmFdU5ykvavQlkCxMu1xxfF7otztgA1QeijSRy8sFkjklzfRK%2B7dl4FQ%2FQp8zl%2BKZyN2R0l%2F9LymTa%2Fc318BFeoDouLevPhpEHEZV%2BM%2FPlPBILs72DXsF8eg%2FtNEXTK%2BTBGtwwwe6GdvkIJz070sl0knhm4Y%2FfzgiIS8SIkBE49AtSKZUVWhTHXj3%2FToFwMPUPQpbMkPvOWNF0YAnmfm5dw8xf3QU4bfmGBU5dyTvY%2FnkI8ZYBQLa8NKiRuaSWcv6cANgROhA08fMbaY2s9%2BFebXZB3X3YekOOlpvYDWzVM169dA6f5YxybEl2cPhtZE07dt6tjCc5M2556%2B2r2AAyD9M4NfQAjgSmMeymYxpPC8ickLjrEy7Yf7uFqfIbwU0biJEQ9Fjutw6tObfQSo5751ufwULJHzWpCgiXmUUSkdM6XkxAC3CM5ykBaJ2PaXUVsBvfeIjxjMI%2FF7MMGOqUBWR%2BIG5qvuaM75BTM7yRYA53gSucPMgP7KrQALkz6td26K%2F64h7bfosJrXQ%2FaxGY1I7shpuspXqy2ox2bCi5Z0Upu0tFnBLyOSOoK3S%2BfX9YoJ1DNZeSntnNYV58cX4s0qd%2BSvyNJuQSRtp2Z2QmQQ%2BpeTAwynZhMLSJlDisSlHKQGu6wI%2BZoLfjkcfh%2FZTWUbCzvMs17ZoKo3Z%2FtZHCq74tZGaj0&X-Amz-Signature=9364627ac1acc31a5b882a352290d2ce098203f6491d5f1c69514665c61fb543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GHZTZV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGtdHLaaLcqRpgCepGLz84gM79aLmAwFFcQTosR4Ic1AiEA%2ByVjmYdz%2FEBGJxF8QNN09WhUoBm3h1Zxhse%2FMJ683HIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2FHqQ9wY6M2ofmKircA5oNq%2FBnup%2ByQvkUNxLMTzGuJt9t6owPbkGZkujN1Iq6GWLlUN7vJJbZxxJ4DyJDHUpT0XwPPhGWa7Tt8VsEFGeTe9%2BklcGBaskh3LA%2FhkPyZ7gwMzYHWgzoChC2Ym9Y1hiI7scd9jwwoIXsD%2F4BHcMy6eMMbfhwSbUO7kesHj04ZMb7JjmFdU5ykvavQlkCxMu1xxfF7otztgA1QeijSRy8sFkjklzfRK%2B7dl4FQ%2FQp8zl%2BKZyN2R0l%2F9LymTa%2Fc318BFeoDouLevPhpEHEZV%2BM%2FPlPBILs72DXsF8eg%2FtNEXTK%2BTBGtwwwe6GdvkIJz070sl0knhm4Y%2FfzgiIS8SIkBE49AtSKZUVWhTHXj3%2FToFwMPUPQpbMkPvOWNF0YAnmfm5dw8xf3QU4bfmGBU5dyTvY%2FnkI8ZYBQLa8NKiRuaSWcv6cANgROhA08fMbaY2s9%2BFebXZB3X3YekOOlpvYDWzVM169dA6f5YxybEl2cPhtZE07dt6tjCc5M2556%2B2r2AAyD9M4NfQAjgSmMeymYxpPC8ickLjrEy7Yf7uFqfIbwU0biJEQ9Fjutw6tObfQSo5751ufwULJHzWpCgiXmUUSkdM6XkxAC3CM5ykBaJ2PaXUVsBvfeIjxjMI%2FF7MMGOqUBWR%2BIG5qvuaM75BTM7yRYA53gSucPMgP7KrQALkz6td26K%2F64h7bfosJrXQ%2FaxGY1I7shpuspXqy2ox2bCi5Z0Upu0tFnBLyOSOoK3S%2BfX9YoJ1DNZeSntnNYV58cX4s0qd%2BSvyNJuQSRtp2Z2QmQQ%2BpeTAwynZhMLSJlDisSlHKQGu6wI%2BZoLfjkcfh%2FZTWUbCzvMs17ZoKo3Z%2FtZHCq74tZGaj0&X-Amz-Signature=c3602eba365755a1ccabc605ef4f2705824e4449af9b91e91063e16a18da844a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
