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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPPOZ25%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN52dsDwpqF7hsBHUeB781iOK2FI0VncwjV3Jo%2FLuhSgIgW6KfAfLqtNCET9iIIjr6Rca5SQBO2YFJ9n64EOQpFbAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0ANA55fnSDTyGcFyrcAyJET%2FoqEAh99PutyIwZsU2QorUb7DP1CtFGNxX%2BuEOwBj3VoXylJlQY6zEXA3BUU8ouQPy1ib%2BHg%2FT17UHlRwykOKlUnQRKarPnp4cmrgAq0mUrGQpOW3Mtj2v%2BepdNuXqPMmuPFYKw2HbZ6AkKp5rhffPIO3NoPacr0xtZou1xPoFVDuM%2FbVXmxcMcsvcBN8Rp%2FTASKK50ZQvH%2B7VqzakIlG8EJO5O8Jaupqzd7msoHw1i6%2B1V%2FktkntPcdyfv4dGdgi9gIfhVP0HP%2Bykhz%2B1lZecGEAQd%2BiYCoHnTP%2BgYzPQvWgYPvPUNZ7g0lvXgUN1Dsv8oyBUIxiTAybvW4HYn4X4SuaJdz%2F8PI6QnOP3sxPenVwUKODy9I5B%2FvmPtYe9Ssmj%2BfUJsNvPR8EX2uf4PYK0btyNCw0mwy7dAKp3PZj8GptwDcheuGQ0GxBq7cJvpnjc0sKeL4rphPqNpWvswgBL7Kx8ZYJisnZJjYvh6XsWFlApfvwfb%2FzmuFYGauzlZZ0CaZ6aWPtmLPTkj0g%2FgF%2FvLdq8ViLPzCyb0df6grWuoyLXJLmrH4QUSJWNhj0m1NJCSGKh2GFqzHfvkBemHVVP8oIv9YS5X5nmyByvlqRs2p0MEuBor9V%2BDMOeXncIGOqUBwYK5GwtOpEwBXBjO8uJXVnwhDR5Yorj2st%2FKzF4D7xYg6nbkAhHHis0srllxSPLE1OvYqy5NG30WT6X6rYn%2Br%2BEzbVOM47H5V%2FnEqNiJKM3WQIWKVJaXA6wLJtmxe0ksZNUbcNUWNNQMzDIkAeBjM4IpEQo3DFk13JHXrYgpwTJiMOv09mi1K7kgyGpWfpvkL5vddUKBVbJSQRMuioAYzNeDNfmT&X-Amz-Signature=43e7acfe97027ab27ad9c3cfc6188c8d8749baa0f700b6b67e50d9c77444ddc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPPOZ25%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN52dsDwpqF7hsBHUeB781iOK2FI0VncwjV3Jo%2FLuhSgIgW6KfAfLqtNCET9iIIjr6Rca5SQBO2YFJ9n64EOQpFbAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0ANA55fnSDTyGcFyrcAyJET%2FoqEAh99PutyIwZsU2QorUb7DP1CtFGNxX%2BuEOwBj3VoXylJlQY6zEXA3BUU8ouQPy1ib%2BHg%2FT17UHlRwykOKlUnQRKarPnp4cmrgAq0mUrGQpOW3Mtj2v%2BepdNuXqPMmuPFYKw2HbZ6AkKp5rhffPIO3NoPacr0xtZou1xPoFVDuM%2FbVXmxcMcsvcBN8Rp%2FTASKK50ZQvH%2B7VqzakIlG8EJO5O8Jaupqzd7msoHw1i6%2B1V%2FktkntPcdyfv4dGdgi9gIfhVP0HP%2Bykhz%2B1lZecGEAQd%2BiYCoHnTP%2BgYzPQvWgYPvPUNZ7g0lvXgUN1Dsv8oyBUIxiTAybvW4HYn4X4SuaJdz%2F8PI6QnOP3sxPenVwUKODy9I5B%2FvmPtYe9Ssmj%2BfUJsNvPR8EX2uf4PYK0btyNCw0mwy7dAKp3PZj8GptwDcheuGQ0GxBq7cJvpnjc0sKeL4rphPqNpWvswgBL7Kx8ZYJisnZJjYvh6XsWFlApfvwfb%2FzmuFYGauzlZZ0CaZ6aWPtmLPTkj0g%2FgF%2FvLdq8ViLPzCyb0df6grWuoyLXJLmrH4QUSJWNhj0m1NJCSGKh2GFqzHfvkBemHVVP8oIv9YS5X5nmyByvlqRs2p0MEuBor9V%2BDMOeXncIGOqUBwYK5GwtOpEwBXBjO8uJXVnwhDR5Yorj2st%2FKzF4D7xYg6nbkAhHHis0srllxSPLE1OvYqy5NG30WT6X6rYn%2Br%2BEzbVOM47H5V%2FnEqNiJKM3WQIWKVJaXA6wLJtmxe0ksZNUbcNUWNNQMzDIkAeBjM4IpEQo3DFk13JHXrYgpwTJiMOv09mi1K7kgyGpWfpvkL5vddUKBVbJSQRMuioAYzNeDNfmT&X-Amz-Signature=06da05f8e3d476809d241b16915bfe29bf02ed911117d5367c8df96029b6218c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPPOZ25%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN52dsDwpqF7hsBHUeB781iOK2FI0VncwjV3Jo%2FLuhSgIgW6KfAfLqtNCET9iIIjr6Rca5SQBO2YFJ9n64EOQpFbAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0ANA55fnSDTyGcFyrcAyJET%2FoqEAh99PutyIwZsU2QorUb7DP1CtFGNxX%2BuEOwBj3VoXylJlQY6zEXA3BUU8ouQPy1ib%2BHg%2FT17UHlRwykOKlUnQRKarPnp4cmrgAq0mUrGQpOW3Mtj2v%2BepdNuXqPMmuPFYKw2HbZ6AkKp5rhffPIO3NoPacr0xtZou1xPoFVDuM%2FbVXmxcMcsvcBN8Rp%2FTASKK50ZQvH%2B7VqzakIlG8EJO5O8Jaupqzd7msoHw1i6%2B1V%2FktkntPcdyfv4dGdgi9gIfhVP0HP%2Bykhz%2B1lZecGEAQd%2BiYCoHnTP%2BgYzPQvWgYPvPUNZ7g0lvXgUN1Dsv8oyBUIxiTAybvW4HYn4X4SuaJdz%2F8PI6QnOP3sxPenVwUKODy9I5B%2FvmPtYe9Ssmj%2BfUJsNvPR8EX2uf4PYK0btyNCw0mwy7dAKp3PZj8GptwDcheuGQ0GxBq7cJvpnjc0sKeL4rphPqNpWvswgBL7Kx8ZYJisnZJjYvh6XsWFlApfvwfb%2FzmuFYGauzlZZ0CaZ6aWPtmLPTkj0g%2FgF%2FvLdq8ViLPzCyb0df6grWuoyLXJLmrH4QUSJWNhj0m1NJCSGKh2GFqzHfvkBemHVVP8oIv9YS5X5nmyByvlqRs2p0MEuBor9V%2BDMOeXncIGOqUBwYK5GwtOpEwBXBjO8uJXVnwhDR5Yorj2st%2FKzF4D7xYg6nbkAhHHis0srllxSPLE1OvYqy5NG30WT6X6rYn%2Br%2BEzbVOM47H5V%2FnEqNiJKM3WQIWKVJaXA6wLJtmxe0ksZNUbcNUWNNQMzDIkAeBjM4IpEQo3DFk13JHXrYgpwTJiMOv09mi1K7kgyGpWfpvkL5vddUKBVbJSQRMuioAYzNeDNfmT&X-Amz-Signature=aac00c70ae2c44d08a011a4bd388960a0d8ae602f2a3d453d97ddf9a61ec5348&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPPOZ25%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN52dsDwpqF7hsBHUeB781iOK2FI0VncwjV3Jo%2FLuhSgIgW6KfAfLqtNCET9iIIjr6Rca5SQBO2YFJ9n64EOQpFbAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0ANA55fnSDTyGcFyrcAyJET%2FoqEAh99PutyIwZsU2QorUb7DP1CtFGNxX%2BuEOwBj3VoXylJlQY6zEXA3BUU8ouQPy1ib%2BHg%2FT17UHlRwykOKlUnQRKarPnp4cmrgAq0mUrGQpOW3Mtj2v%2BepdNuXqPMmuPFYKw2HbZ6AkKp5rhffPIO3NoPacr0xtZou1xPoFVDuM%2FbVXmxcMcsvcBN8Rp%2FTASKK50ZQvH%2B7VqzakIlG8EJO5O8Jaupqzd7msoHw1i6%2B1V%2FktkntPcdyfv4dGdgi9gIfhVP0HP%2Bykhz%2B1lZecGEAQd%2BiYCoHnTP%2BgYzPQvWgYPvPUNZ7g0lvXgUN1Dsv8oyBUIxiTAybvW4HYn4X4SuaJdz%2F8PI6QnOP3sxPenVwUKODy9I5B%2FvmPtYe9Ssmj%2BfUJsNvPR8EX2uf4PYK0btyNCw0mwy7dAKp3PZj8GptwDcheuGQ0GxBq7cJvpnjc0sKeL4rphPqNpWvswgBL7Kx8ZYJisnZJjYvh6XsWFlApfvwfb%2FzmuFYGauzlZZ0CaZ6aWPtmLPTkj0g%2FgF%2FvLdq8ViLPzCyb0df6grWuoyLXJLmrH4QUSJWNhj0m1NJCSGKh2GFqzHfvkBemHVVP8oIv9YS5X5nmyByvlqRs2p0MEuBor9V%2BDMOeXncIGOqUBwYK5GwtOpEwBXBjO8uJXVnwhDR5Yorj2st%2FKzF4D7xYg6nbkAhHHis0srllxSPLE1OvYqy5NG30WT6X6rYn%2Br%2BEzbVOM47H5V%2FnEqNiJKM3WQIWKVJaXA6wLJtmxe0ksZNUbcNUWNNQMzDIkAeBjM4IpEQo3DFk13JHXrYgpwTJiMOv09mi1K7kgyGpWfpvkL5vddUKBVbJSQRMuioAYzNeDNfmT&X-Amz-Signature=ac0d9efca442b17a415fd2040fc1b43f5756bf9a70213c4f7c318efdd336e82e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPPOZ25%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN52dsDwpqF7hsBHUeB781iOK2FI0VncwjV3Jo%2FLuhSgIgW6KfAfLqtNCET9iIIjr6Rca5SQBO2YFJ9n64EOQpFbAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0ANA55fnSDTyGcFyrcAyJET%2FoqEAh99PutyIwZsU2QorUb7DP1CtFGNxX%2BuEOwBj3VoXylJlQY6zEXA3BUU8ouQPy1ib%2BHg%2FT17UHlRwykOKlUnQRKarPnp4cmrgAq0mUrGQpOW3Mtj2v%2BepdNuXqPMmuPFYKw2HbZ6AkKp5rhffPIO3NoPacr0xtZou1xPoFVDuM%2FbVXmxcMcsvcBN8Rp%2FTASKK50ZQvH%2B7VqzakIlG8EJO5O8Jaupqzd7msoHw1i6%2B1V%2FktkntPcdyfv4dGdgi9gIfhVP0HP%2Bykhz%2B1lZecGEAQd%2BiYCoHnTP%2BgYzPQvWgYPvPUNZ7g0lvXgUN1Dsv8oyBUIxiTAybvW4HYn4X4SuaJdz%2F8PI6QnOP3sxPenVwUKODy9I5B%2FvmPtYe9Ssmj%2BfUJsNvPR8EX2uf4PYK0btyNCw0mwy7dAKp3PZj8GptwDcheuGQ0GxBq7cJvpnjc0sKeL4rphPqNpWvswgBL7Kx8ZYJisnZJjYvh6XsWFlApfvwfb%2FzmuFYGauzlZZ0CaZ6aWPtmLPTkj0g%2FgF%2FvLdq8ViLPzCyb0df6grWuoyLXJLmrH4QUSJWNhj0m1NJCSGKh2GFqzHfvkBemHVVP8oIv9YS5X5nmyByvlqRs2p0MEuBor9V%2BDMOeXncIGOqUBwYK5GwtOpEwBXBjO8uJXVnwhDR5Yorj2st%2FKzF4D7xYg6nbkAhHHis0srllxSPLE1OvYqy5NG30WT6X6rYn%2Br%2BEzbVOM47H5V%2FnEqNiJKM3WQIWKVJaXA6wLJtmxe0ksZNUbcNUWNNQMzDIkAeBjM4IpEQo3DFk13JHXrYgpwTJiMOv09mi1K7kgyGpWfpvkL5vddUKBVbJSQRMuioAYzNeDNfmT&X-Amz-Signature=5c14b38d293fe08db0197ff4a56ea5881e17ff6c54c7874996279ed466d5cac6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPPOZ25%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN52dsDwpqF7hsBHUeB781iOK2FI0VncwjV3Jo%2FLuhSgIgW6KfAfLqtNCET9iIIjr6Rca5SQBO2YFJ9n64EOQpFbAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0ANA55fnSDTyGcFyrcAyJET%2FoqEAh99PutyIwZsU2QorUb7DP1CtFGNxX%2BuEOwBj3VoXylJlQY6zEXA3BUU8ouQPy1ib%2BHg%2FT17UHlRwykOKlUnQRKarPnp4cmrgAq0mUrGQpOW3Mtj2v%2BepdNuXqPMmuPFYKw2HbZ6AkKp5rhffPIO3NoPacr0xtZou1xPoFVDuM%2FbVXmxcMcsvcBN8Rp%2FTASKK50ZQvH%2B7VqzakIlG8EJO5O8Jaupqzd7msoHw1i6%2B1V%2FktkntPcdyfv4dGdgi9gIfhVP0HP%2Bykhz%2B1lZecGEAQd%2BiYCoHnTP%2BgYzPQvWgYPvPUNZ7g0lvXgUN1Dsv8oyBUIxiTAybvW4HYn4X4SuaJdz%2F8PI6QnOP3sxPenVwUKODy9I5B%2FvmPtYe9Ssmj%2BfUJsNvPR8EX2uf4PYK0btyNCw0mwy7dAKp3PZj8GptwDcheuGQ0GxBq7cJvpnjc0sKeL4rphPqNpWvswgBL7Kx8ZYJisnZJjYvh6XsWFlApfvwfb%2FzmuFYGauzlZZ0CaZ6aWPtmLPTkj0g%2FgF%2FvLdq8ViLPzCyb0df6grWuoyLXJLmrH4QUSJWNhj0m1NJCSGKh2GFqzHfvkBemHVVP8oIv9YS5X5nmyByvlqRs2p0MEuBor9V%2BDMOeXncIGOqUBwYK5GwtOpEwBXBjO8uJXVnwhDR5Yorj2st%2FKzF4D7xYg6nbkAhHHis0srllxSPLE1OvYqy5NG30WT6X6rYn%2Br%2BEzbVOM47H5V%2FnEqNiJKM3WQIWKVJaXA6wLJtmxe0ksZNUbcNUWNNQMzDIkAeBjM4IpEQo3DFk13JHXrYgpwTJiMOv09mi1K7kgyGpWfpvkL5vddUKBVbJSQRMuioAYzNeDNfmT&X-Amz-Signature=2aca59af3736d11f6016a8752e6f6f730ce0cfb01cda57639e7edb0008b7a891&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPPOZ25%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN52dsDwpqF7hsBHUeB781iOK2FI0VncwjV3Jo%2FLuhSgIgW6KfAfLqtNCET9iIIjr6Rca5SQBO2YFJ9n64EOQpFbAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0ANA55fnSDTyGcFyrcAyJET%2FoqEAh99PutyIwZsU2QorUb7DP1CtFGNxX%2BuEOwBj3VoXylJlQY6zEXA3BUU8ouQPy1ib%2BHg%2FT17UHlRwykOKlUnQRKarPnp4cmrgAq0mUrGQpOW3Mtj2v%2BepdNuXqPMmuPFYKw2HbZ6AkKp5rhffPIO3NoPacr0xtZou1xPoFVDuM%2FbVXmxcMcsvcBN8Rp%2FTASKK50ZQvH%2B7VqzakIlG8EJO5O8Jaupqzd7msoHw1i6%2B1V%2FktkntPcdyfv4dGdgi9gIfhVP0HP%2Bykhz%2B1lZecGEAQd%2BiYCoHnTP%2BgYzPQvWgYPvPUNZ7g0lvXgUN1Dsv8oyBUIxiTAybvW4HYn4X4SuaJdz%2F8PI6QnOP3sxPenVwUKODy9I5B%2FvmPtYe9Ssmj%2BfUJsNvPR8EX2uf4PYK0btyNCw0mwy7dAKp3PZj8GptwDcheuGQ0GxBq7cJvpnjc0sKeL4rphPqNpWvswgBL7Kx8ZYJisnZJjYvh6XsWFlApfvwfb%2FzmuFYGauzlZZ0CaZ6aWPtmLPTkj0g%2FgF%2FvLdq8ViLPzCyb0df6grWuoyLXJLmrH4QUSJWNhj0m1NJCSGKh2GFqzHfvkBemHVVP8oIv9YS5X5nmyByvlqRs2p0MEuBor9V%2BDMOeXncIGOqUBwYK5GwtOpEwBXBjO8uJXVnwhDR5Yorj2st%2FKzF4D7xYg6nbkAhHHis0srllxSPLE1OvYqy5NG30WT6X6rYn%2Br%2BEzbVOM47H5V%2FnEqNiJKM3WQIWKVJaXA6wLJtmxe0ksZNUbcNUWNNQMzDIkAeBjM4IpEQo3DFk13JHXrYgpwTJiMOv09mi1K7kgyGpWfpvkL5vddUKBVbJSQRMuioAYzNeDNfmT&X-Amz-Signature=9ee03ec54aeab43f71d02b7f83b735851a1758e0f539faf884e08ec528aa8c03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPPOZ25%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN52dsDwpqF7hsBHUeB781iOK2FI0VncwjV3Jo%2FLuhSgIgW6KfAfLqtNCET9iIIjr6Rca5SQBO2YFJ9n64EOQpFbAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0ANA55fnSDTyGcFyrcAyJET%2FoqEAh99PutyIwZsU2QorUb7DP1CtFGNxX%2BuEOwBj3VoXylJlQY6zEXA3BUU8ouQPy1ib%2BHg%2FT17UHlRwykOKlUnQRKarPnp4cmrgAq0mUrGQpOW3Mtj2v%2BepdNuXqPMmuPFYKw2HbZ6AkKp5rhffPIO3NoPacr0xtZou1xPoFVDuM%2FbVXmxcMcsvcBN8Rp%2FTASKK50ZQvH%2B7VqzakIlG8EJO5O8Jaupqzd7msoHw1i6%2B1V%2FktkntPcdyfv4dGdgi9gIfhVP0HP%2Bykhz%2B1lZecGEAQd%2BiYCoHnTP%2BgYzPQvWgYPvPUNZ7g0lvXgUN1Dsv8oyBUIxiTAybvW4HYn4X4SuaJdz%2F8PI6QnOP3sxPenVwUKODy9I5B%2FvmPtYe9Ssmj%2BfUJsNvPR8EX2uf4PYK0btyNCw0mwy7dAKp3PZj8GptwDcheuGQ0GxBq7cJvpnjc0sKeL4rphPqNpWvswgBL7Kx8ZYJisnZJjYvh6XsWFlApfvwfb%2FzmuFYGauzlZZ0CaZ6aWPtmLPTkj0g%2FgF%2FvLdq8ViLPzCyb0df6grWuoyLXJLmrH4QUSJWNhj0m1NJCSGKh2GFqzHfvkBemHVVP8oIv9YS5X5nmyByvlqRs2p0MEuBor9V%2BDMOeXncIGOqUBwYK5GwtOpEwBXBjO8uJXVnwhDR5Yorj2st%2FKzF4D7xYg6nbkAhHHis0srllxSPLE1OvYqy5NG30WT6X6rYn%2Br%2BEzbVOM47H5V%2FnEqNiJKM3WQIWKVJaXA6wLJtmxe0ksZNUbcNUWNNQMzDIkAeBjM4IpEQo3DFk13JHXrYgpwTJiMOv09mi1K7kgyGpWfpvkL5vddUKBVbJSQRMuioAYzNeDNfmT&X-Amz-Signature=5a01c7dd8526596c33085e89033290785c90a5a976a2b251980b7d35240beadc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
