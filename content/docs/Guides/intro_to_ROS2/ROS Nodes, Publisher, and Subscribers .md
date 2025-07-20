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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PC5G2WG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtjS0hkjYcpxuOnWD5C6ZWe44ciSCR5OuaL%2Bidd636DAiAKD6P1V1XqiHhzvzwwauPvS58l%2B29M9fpKeFPskqy5RCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBiYEDN3TVrgHrsRqKtwDieDbASRZ%2BP7PZuLNutubyZIFNZOyXuCOlix7nu69docGarAJkWoJFSGnRTA9KhLg4kLiYr%2FEe8%2BXwsh3dL%2FTfc0D3WqbDsLH6aUkPdsFXEZzf6j6vqacy6HKf3ShNdC0q3PSQMUV8P5CL1DVrXCE8CRNvwHfMs0o6zeh2LvxJfOLR7CqpBhpm0OrMrc%2FPH7u230UhsYFkOdOZh%2BtsYp03JaTaB6oOZ0FHPO7z%2FIqzwAGh5nZeCU%2FE%2FzDI9Zg8lQ2%2FpAWJ1iUUFQykZu%2FgFppi2Ng1GuasE1zHHVNekYRvgZCkr4Ew%2FgY4whYgbNmr98r4FfWeyrWHHh%2FdVjbyLIL1Jbi7xEJ3u%2FnxSzY%2BHQanC8pZRzH0T03fUkiXQLUgqsaX3%2B6AZh7RmI%2BIZ%2BI5RB2W7ek%2FRb03H%2BGKhkEX7LkE5pOZbRQwrFfCf9GhfDjqF34RXCAqUU3KJH%2BKlLSHmBrHCtP0g0tHBRLJBYbtvxPsoHgvy%2BjWKVa4S9lAFiXCFpNr5geZvBjxT9ivvvoMVwtjBUZ%2BJSdegt9aoBGD3Su57aGgjZr8xWihyXhxzhNe2pwFNp2ZMS0oviCdQMAM8lRu9F7eT4gmHoEKLtl6MPCL%2B5Ps2XfZ5B1A7zkJUMwk5vxwwY6pgHphCyDgONpU9LrpxNwod3TdrSUfEn2BcfC7B1bMDtUwGrIcW23YtrdPafSNFzy4ONKZwvR6Nhxl0snyyutHovcS%2B0LNyBNm7j2mjdh7fMA%2BWaSS%2FD3IKJkZQvH1eZolDgotOY3wnyrHUpnSFvZ6U%2BYQylhMO%2BG4v3mir8t4ud%2F7JDQH2c8H5vTwK3MmkKmVYpSo2PIFoWLOdhMuaQACjX8x15RvSPb&X-Amz-Signature=dc522be13c2bc8cb36f0488db257e7a3c9648a524a7c742ebaa3d5f5d8ba30c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PC5G2WG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtjS0hkjYcpxuOnWD5C6ZWe44ciSCR5OuaL%2Bidd636DAiAKD6P1V1XqiHhzvzwwauPvS58l%2B29M9fpKeFPskqy5RCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBiYEDN3TVrgHrsRqKtwDieDbASRZ%2BP7PZuLNutubyZIFNZOyXuCOlix7nu69docGarAJkWoJFSGnRTA9KhLg4kLiYr%2FEe8%2BXwsh3dL%2FTfc0D3WqbDsLH6aUkPdsFXEZzf6j6vqacy6HKf3ShNdC0q3PSQMUV8P5CL1DVrXCE8CRNvwHfMs0o6zeh2LvxJfOLR7CqpBhpm0OrMrc%2FPH7u230UhsYFkOdOZh%2BtsYp03JaTaB6oOZ0FHPO7z%2FIqzwAGh5nZeCU%2FE%2FzDI9Zg8lQ2%2FpAWJ1iUUFQykZu%2FgFppi2Ng1GuasE1zHHVNekYRvgZCkr4Ew%2FgY4whYgbNmr98r4FfWeyrWHHh%2FdVjbyLIL1Jbi7xEJ3u%2FnxSzY%2BHQanC8pZRzH0T03fUkiXQLUgqsaX3%2B6AZh7RmI%2BIZ%2BI5RB2W7ek%2FRb03H%2BGKhkEX7LkE5pOZbRQwrFfCf9GhfDjqF34RXCAqUU3KJH%2BKlLSHmBrHCtP0g0tHBRLJBYbtvxPsoHgvy%2BjWKVa4S9lAFiXCFpNr5geZvBjxT9ivvvoMVwtjBUZ%2BJSdegt9aoBGD3Su57aGgjZr8xWihyXhxzhNe2pwFNp2ZMS0oviCdQMAM8lRu9F7eT4gmHoEKLtl6MPCL%2B5Ps2XfZ5B1A7zkJUMwk5vxwwY6pgHphCyDgONpU9LrpxNwod3TdrSUfEn2BcfC7B1bMDtUwGrIcW23YtrdPafSNFzy4ONKZwvR6Nhxl0snyyutHovcS%2B0LNyBNm7j2mjdh7fMA%2BWaSS%2FD3IKJkZQvH1eZolDgotOY3wnyrHUpnSFvZ6U%2BYQylhMO%2BG4v3mir8t4ud%2F7JDQH2c8H5vTwK3MmkKmVYpSo2PIFoWLOdhMuaQACjX8x15RvSPb&X-Amz-Signature=b923787b2b37416b64d6a13f6b60dccfb55be44e9832b9f1a4d03109a49c75d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PC5G2WG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtjS0hkjYcpxuOnWD5C6ZWe44ciSCR5OuaL%2Bidd636DAiAKD6P1V1XqiHhzvzwwauPvS58l%2B29M9fpKeFPskqy5RCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBiYEDN3TVrgHrsRqKtwDieDbASRZ%2BP7PZuLNutubyZIFNZOyXuCOlix7nu69docGarAJkWoJFSGnRTA9KhLg4kLiYr%2FEe8%2BXwsh3dL%2FTfc0D3WqbDsLH6aUkPdsFXEZzf6j6vqacy6HKf3ShNdC0q3PSQMUV8P5CL1DVrXCE8CRNvwHfMs0o6zeh2LvxJfOLR7CqpBhpm0OrMrc%2FPH7u230UhsYFkOdOZh%2BtsYp03JaTaB6oOZ0FHPO7z%2FIqzwAGh5nZeCU%2FE%2FzDI9Zg8lQ2%2FpAWJ1iUUFQykZu%2FgFppi2Ng1GuasE1zHHVNekYRvgZCkr4Ew%2FgY4whYgbNmr98r4FfWeyrWHHh%2FdVjbyLIL1Jbi7xEJ3u%2FnxSzY%2BHQanC8pZRzH0T03fUkiXQLUgqsaX3%2B6AZh7RmI%2BIZ%2BI5RB2W7ek%2FRb03H%2BGKhkEX7LkE5pOZbRQwrFfCf9GhfDjqF34RXCAqUU3KJH%2BKlLSHmBrHCtP0g0tHBRLJBYbtvxPsoHgvy%2BjWKVa4S9lAFiXCFpNr5geZvBjxT9ivvvoMVwtjBUZ%2BJSdegt9aoBGD3Su57aGgjZr8xWihyXhxzhNe2pwFNp2ZMS0oviCdQMAM8lRu9F7eT4gmHoEKLtl6MPCL%2B5Ps2XfZ5B1A7zkJUMwk5vxwwY6pgHphCyDgONpU9LrpxNwod3TdrSUfEn2BcfC7B1bMDtUwGrIcW23YtrdPafSNFzy4ONKZwvR6Nhxl0snyyutHovcS%2B0LNyBNm7j2mjdh7fMA%2BWaSS%2FD3IKJkZQvH1eZolDgotOY3wnyrHUpnSFvZ6U%2BYQylhMO%2BG4v3mir8t4ud%2F7JDQH2c8H5vTwK3MmkKmVYpSo2PIFoWLOdhMuaQACjX8x15RvSPb&X-Amz-Signature=b73b69e87ee7f8339ccd2c7e11fe78df55f7a46b699796d8830bcae852b2196f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PC5G2WG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtjS0hkjYcpxuOnWD5C6ZWe44ciSCR5OuaL%2Bidd636DAiAKD6P1V1XqiHhzvzwwauPvS58l%2B29M9fpKeFPskqy5RCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBiYEDN3TVrgHrsRqKtwDieDbASRZ%2BP7PZuLNutubyZIFNZOyXuCOlix7nu69docGarAJkWoJFSGnRTA9KhLg4kLiYr%2FEe8%2BXwsh3dL%2FTfc0D3WqbDsLH6aUkPdsFXEZzf6j6vqacy6HKf3ShNdC0q3PSQMUV8P5CL1DVrXCE8CRNvwHfMs0o6zeh2LvxJfOLR7CqpBhpm0OrMrc%2FPH7u230UhsYFkOdOZh%2BtsYp03JaTaB6oOZ0FHPO7z%2FIqzwAGh5nZeCU%2FE%2FzDI9Zg8lQ2%2FpAWJ1iUUFQykZu%2FgFppi2Ng1GuasE1zHHVNekYRvgZCkr4Ew%2FgY4whYgbNmr98r4FfWeyrWHHh%2FdVjbyLIL1Jbi7xEJ3u%2FnxSzY%2BHQanC8pZRzH0T03fUkiXQLUgqsaX3%2B6AZh7RmI%2BIZ%2BI5RB2W7ek%2FRb03H%2BGKhkEX7LkE5pOZbRQwrFfCf9GhfDjqF34RXCAqUU3KJH%2BKlLSHmBrHCtP0g0tHBRLJBYbtvxPsoHgvy%2BjWKVa4S9lAFiXCFpNr5geZvBjxT9ivvvoMVwtjBUZ%2BJSdegt9aoBGD3Su57aGgjZr8xWihyXhxzhNe2pwFNp2ZMS0oviCdQMAM8lRu9F7eT4gmHoEKLtl6MPCL%2B5Ps2XfZ5B1A7zkJUMwk5vxwwY6pgHphCyDgONpU9LrpxNwod3TdrSUfEn2BcfC7B1bMDtUwGrIcW23YtrdPafSNFzy4ONKZwvR6Nhxl0snyyutHovcS%2B0LNyBNm7j2mjdh7fMA%2BWaSS%2FD3IKJkZQvH1eZolDgotOY3wnyrHUpnSFvZ6U%2BYQylhMO%2BG4v3mir8t4ud%2F7JDQH2c8H5vTwK3MmkKmVYpSo2PIFoWLOdhMuaQACjX8x15RvSPb&X-Amz-Signature=ef1493ca273adb37084fd627b1a9bf0f55953b307c02d9a537b2711105a182e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PC5G2WG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtjS0hkjYcpxuOnWD5C6ZWe44ciSCR5OuaL%2Bidd636DAiAKD6P1V1XqiHhzvzwwauPvS58l%2B29M9fpKeFPskqy5RCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBiYEDN3TVrgHrsRqKtwDieDbASRZ%2BP7PZuLNutubyZIFNZOyXuCOlix7nu69docGarAJkWoJFSGnRTA9KhLg4kLiYr%2FEe8%2BXwsh3dL%2FTfc0D3WqbDsLH6aUkPdsFXEZzf6j6vqacy6HKf3ShNdC0q3PSQMUV8P5CL1DVrXCE8CRNvwHfMs0o6zeh2LvxJfOLR7CqpBhpm0OrMrc%2FPH7u230UhsYFkOdOZh%2BtsYp03JaTaB6oOZ0FHPO7z%2FIqzwAGh5nZeCU%2FE%2FzDI9Zg8lQ2%2FpAWJ1iUUFQykZu%2FgFppi2Ng1GuasE1zHHVNekYRvgZCkr4Ew%2FgY4whYgbNmr98r4FfWeyrWHHh%2FdVjbyLIL1Jbi7xEJ3u%2FnxSzY%2BHQanC8pZRzH0T03fUkiXQLUgqsaX3%2B6AZh7RmI%2BIZ%2BI5RB2W7ek%2FRb03H%2BGKhkEX7LkE5pOZbRQwrFfCf9GhfDjqF34RXCAqUU3KJH%2BKlLSHmBrHCtP0g0tHBRLJBYbtvxPsoHgvy%2BjWKVa4S9lAFiXCFpNr5geZvBjxT9ivvvoMVwtjBUZ%2BJSdegt9aoBGD3Su57aGgjZr8xWihyXhxzhNe2pwFNp2ZMS0oviCdQMAM8lRu9F7eT4gmHoEKLtl6MPCL%2B5Ps2XfZ5B1A7zkJUMwk5vxwwY6pgHphCyDgONpU9LrpxNwod3TdrSUfEn2BcfC7B1bMDtUwGrIcW23YtrdPafSNFzy4ONKZwvR6Nhxl0snyyutHovcS%2B0LNyBNm7j2mjdh7fMA%2BWaSS%2FD3IKJkZQvH1eZolDgotOY3wnyrHUpnSFvZ6U%2BYQylhMO%2BG4v3mir8t4ud%2F7JDQH2c8H5vTwK3MmkKmVYpSo2PIFoWLOdhMuaQACjX8x15RvSPb&X-Amz-Signature=92c18be937c16c2a3ff2b3b648e02dccf57af7c0dbf67d7d5712392b8119fd0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PC5G2WG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtjS0hkjYcpxuOnWD5C6ZWe44ciSCR5OuaL%2Bidd636DAiAKD6P1V1XqiHhzvzwwauPvS58l%2B29M9fpKeFPskqy5RCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBiYEDN3TVrgHrsRqKtwDieDbASRZ%2BP7PZuLNutubyZIFNZOyXuCOlix7nu69docGarAJkWoJFSGnRTA9KhLg4kLiYr%2FEe8%2BXwsh3dL%2FTfc0D3WqbDsLH6aUkPdsFXEZzf6j6vqacy6HKf3ShNdC0q3PSQMUV8P5CL1DVrXCE8CRNvwHfMs0o6zeh2LvxJfOLR7CqpBhpm0OrMrc%2FPH7u230UhsYFkOdOZh%2BtsYp03JaTaB6oOZ0FHPO7z%2FIqzwAGh5nZeCU%2FE%2FzDI9Zg8lQ2%2FpAWJ1iUUFQykZu%2FgFppi2Ng1GuasE1zHHVNekYRvgZCkr4Ew%2FgY4whYgbNmr98r4FfWeyrWHHh%2FdVjbyLIL1Jbi7xEJ3u%2FnxSzY%2BHQanC8pZRzH0T03fUkiXQLUgqsaX3%2B6AZh7RmI%2BIZ%2BI5RB2W7ek%2FRb03H%2BGKhkEX7LkE5pOZbRQwrFfCf9GhfDjqF34RXCAqUU3KJH%2BKlLSHmBrHCtP0g0tHBRLJBYbtvxPsoHgvy%2BjWKVa4S9lAFiXCFpNr5geZvBjxT9ivvvoMVwtjBUZ%2BJSdegt9aoBGD3Su57aGgjZr8xWihyXhxzhNe2pwFNp2ZMS0oviCdQMAM8lRu9F7eT4gmHoEKLtl6MPCL%2B5Ps2XfZ5B1A7zkJUMwk5vxwwY6pgHphCyDgONpU9LrpxNwod3TdrSUfEn2BcfC7B1bMDtUwGrIcW23YtrdPafSNFzy4ONKZwvR6Nhxl0snyyutHovcS%2B0LNyBNm7j2mjdh7fMA%2BWaSS%2FD3IKJkZQvH1eZolDgotOY3wnyrHUpnSFvZ6U%2BYQylhMO%2BG4v3mir8t4ud%2F7JDQH2c8H5vTwK3MmkKmVYpSo2PIFoWLOdhMuaQACjX8x15RvSPb&X-Amz-Signature=688df20ca52acdb19d50c15976eea7bdfd54d4a44f8c8e725bbc3ec1b419630a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PC5G2WG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtjS0hkjYcpxuOnWD5C6ZWe44ciSCR5OuaL%2Bidd636DAiAKD6P1V1XqiHhzvzwwauPvS58l%2B29M9fpKeFPskqy5RCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBiYEDN3TVrgHrsRqKtwDieDbASRZ%2BP7PZuLNutubyZIFNZOyXuCOlix7nu69docGarAJkWoJFSGnRTA9KhLg4kLiYr%2FEe8%2BXwsh3dL%2FTfc0D3WqbDsLH6aUkPdsFXEZzf6j6vqacy6HKf3ShNdC0q3PSQMUV8P5CL1DVrXCE8CRNvwHfMs0o6zeh2LvxJfOLR7CqpBhpm0OrMrc%2FPH7u230UhsYFkOdOZh%2BtsYp03JaTaB6oOZ0FHPO7z%2FIqzwAGh5nZeCU%2FE%2FzDI9Zg8lQ2%2FpAWJ1iUUFQykZu%2FgFppi2Ng1GuasE1zHHVNekYRvgZCkr4Ew%2FgY4whYgbNmr98r4FfWeyrWHHh%2FdVjbyLIL1Jbi7xEJ3u%2FnxSzY%2BHQanC8pZRzH0T03fUkiXQLUgqsaX3%2B6AZh7RmI%2BIZ%2BI5RB2W7ek%2FRb03H%2BGKhkEX7LkE5pOZbRQwrFfCf9GhfDjqF34RXCAqUU3KJH%2BKlLSHmBrHCtP0g0tHBRLJBYbtvxPsoHgvy%2BjWKVa4S9lAFiXCFpNr5geZvBjxT9ivvvoMVwtjBUZ%2BJSdegt9aoBGD3Su57aGgjZr8xWihyXhxzhNe2pwFNp2ZMS0oviCdQMAM8lRu9F7eT4gmHoEKLtl6MPCL%2B5Ps2XfZ5B1A7zkJUMwk5vxwwY6pgHphCyDgONpU9LrpxNwod3TdrSUfEn2BcfC7B1bMDtUwGrIcW23YtrdPafSNFzy4ONKZwvR6Nhxl0snyyutHovcS%2B0LNyBNm7j2mjdh7fMA%2BWaSS%2FD3IKJkZQvH1eZolDgotOY3wnyrHUpnSFvZ6U%2BYQylhMO%2BG4v3mir8t4ud%2F7JDQH2c8H5vTwK3MmkKmVYpSo2PIFoWLOdhMuaQACjX8x15RvSPb&X-Amz-Signature=3b8cc26018a5d619416dcbfdecbe4d3742f155842494384773b8222675f3e763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PC5G2WG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtjS0hkjYcpxuOnWD5C6ZWe44ciSCR5OuaL%2Bidd636DAiAKD6P1V1XqiHhzvzwwauPvS58l%2B29M9fpKeFPskqy5RCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBiYEDN3TVrgHrsRqKtwDieDbASRZ%2BP7PZuLNutubyZIFNZOyXuCOlix7nu69docGarAJkWoJFSGnRTA9KhLg4kLiYr%2FEe8%2BXwsh3dL%2FTfc0D3WqbDsLH6aUkPdsFXEZzf6j6vqacy6HKf3ShNdC0q3PSQMUV8P5CL1DVrXCE8CRNvwHfMs0o6zeh2LvxJfOLR7CqpBhpm0OrMrc%2FPH7u230UhsYFkOdOZh%2BtsYp03JaTaB6oOZ0FHPO7z%2FIqzwAGh5nZeCU%2FE%2FzDI9Zg8lQ2%2FpAWJ1iUUFQykZu%2FgFppi2Ng1GuasE1zHHVNekYRvgZCkr4Ew%2FgY4whYgbNmr98r4FfWeyrWHHh%2FdVjbyLIL1Jbi7xEJ3u%2FnxSzY%2BHQanC8pZRzH0T03fUkiXQLUgqsaX3%2B6AZh7RmI%2BIZ%2BI5RB2W7ek%2FRb03H%2BGKhkEX7LkE5pOZbRQwrFfCf9GhfDjqF34RXCAqUU3KJH%2BKlLSHmBrHCtP0g0tHBRLJBYbtvxPsoHgvy%2BjWKVa4S9lAFiXCFpNr5geZvBjxT9ivvvoMVwtjBUZ%2BJSdegt9aoBGD3Su57aGgjZr8xWihyXhxzhNe2pwFNp2ZMS0oviCdQMAM8lRu9F7eT4gmHoEKLtl6MPCL%2B5Ps2XfZ5B1A7zkJUMwk5vxwwY6pgHphCyDgONpU9LrpxNwod3TdrSUfEn2BcfC7B1bMDtUwGrIcW23YtrdPafSNFzy4ONKZwvR6Nhxl0snyyutHovcS%2B0LNyBNm7j2mjdh7fMA%2BWaSS%2FD3IKJkZQvH1eZolDgotOY3wnyrHUpnSFvZ6U%2BYQylhMO%2BG4v3mir8t4ud%2F7JDQH2c8H5vTwK3MmkKmVYpSo2PIFoWLOdhMuaQACjX8x15RvSPb&X-Amz-Signature=4378def05d3cfbc807e4588855db6ae7c5db8efd96f4efb20179288600aaa264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
