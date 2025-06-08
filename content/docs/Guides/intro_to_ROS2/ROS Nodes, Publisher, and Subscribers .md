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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5ERMNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3471pEsQsWPQDD6Cmd9%2F8p1pIcuv0m8LG1GQfSvjoQIhAIJ0oyGxQ8JImsKHTv66qvrPj0CpqpEozxB2MhWKKePwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5gU7p1iZRtJdQYwwq3AM88SPXOspSgdMYRlhZOgQ3yicFw7ENvOEqBj7%2FfwQ2ajfcUg%2FaV4ETeuwXJFyXvV%2FzV0YEP99XRBAVAXmVxEjCkzsk7uaLYkC7JxLCxN%2B5s8R8tqj8RW7M1bvdsn0uaaEsS5WEW1rWvJg7oi0TdHgp3kyJ8tKCpMpkhxcTasr%2FXyh4vUSGvSQiLP2E1ecuOi8%2FVC0CbC%2FotNfU%2BL%2B1Wzu1JCcLb%2Fbm63ohmMXnjvH15yzKajppK93dFigXULdPDdoA%2BjBqgxbeQEOMLzLimjzx8aFZTtD%2FGUh6d7p9o7mAloeMfRNjPkQ06x6m3b3zy8MorXl3%2BiPEkn3FwPtccGQFT47usMODF9MGsET6Q4f%2FtsuaEdTgr3Tx321vHYyzd1DkEL0qJNBljawl%2FzX6NV71ZS9UOAMSeLE7pR4TUDw8My9x5TpDHSuEjFyomBsgr7QKURajfCx7h2uyDoX95A4ZCyQBG8noOhAFgzdkmAL7a1StJ5M0xirbi1e9QPbH88bB%2BYE5NSYhJT39eztHB2j2BUz398ZFTSav87OlHL5mEiOi5YlVynIO0%2B2wjoX%2BWNq9sGDpnp%2F%2B5mDbpyM%2F3dYSWprYkqEHYV1IsHLgDkXhxoPrO2CVQbZpM%2B%2FoczC%2FnJPCBjqkAWzQgHf9yE7bbCeRYgyEpeGmaDC1c4NK7jhmoTQORq%2Bh3Uj3kL4hkb0LAQ8m19j5GwswHggNoqCQntQi2%2BsV6Pv7rc1InfKRReNIF6XpEPjr0TGyRlH8h3w39IKvCFdsfpUOUBT06RpgZejWvSBrPfgSR84oK1TMkTPgf9w1tYy2cjMSIxq5CpWN0ue1ZkrEiY9DHBDlJ8eNo9f6lw1Qu3Lw6v1J&X-Amz-Signature=01429ba535a6bc86d1f526cfe01de41d6780463b348f0c577c50bd0719855d00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5ERMNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3471pEsQsWPQDD6Cmd9%2F8p1pIcuv0m8LG1GQfSvjoQIhAIJ0oyGxQ8JImsKHTv66qvrPj0CpqpEozxB2MhWKKePwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5gU7p1iZRtJdQYwwq3AM88SPXOspSgdMYRlhZOgQ3yicFw7ENvOEqBj7%2FfwQ2ajfcUg%2FaV4ETeuwXJFyXvV%2FzV0YEP99XRBAVAXmVxEjCkzsk7uaLYkC7JxLCxN%2B5s8R8tqj8RW7M1bvdsn0uaaEsS5WEW1rWvJg7oi0TdHgp3kyJ8tKCpMpkhxcTasr%2FXyh4vUSGvSQiLP2E1ecuOi8%2FVC0CbC%2FotNfU%2BL%2B1Wzu1JCcLb%2Fbm63ohmMXnjvH15yzKajppK93dFigXULdPDdoA%2BjBqgxbeQEOMLzLimjzx8aFZTtD%2FGUh6d7p9o7mAloeMfRNjPkQ06x6m3b3zy8MorXl3%2BiPEkn3FwPtccGQFT47usMODF9MGsET6Q4f%2FtsuaEdTgr3Tx321vHYyzd1DkEL0qJNBljawl%2FzX6NV71ZS9UOAMSeLE7pR4TUDw8My9x5TpDHSuEjFyomBsgr7QKURajfCx7h2uyDoX95A4ZCyQBG8noOhAFgzdkmAL7a1StJ5M0xirbi1e9QPbH88bB%2BYE5NSYhJT39eztHB2j2BUz398ZFTSav87OlHL5mEiOi5YlVynIO0%2B2wjoX%2BWNq9sGDpnp%2F%2B5mDbpyM%2F3dYSWprYkqEHYV1IsHLgDkXhxoPrO2CVQbZpM%2B%2FoczC%2FnJPCBjqkAWzQgHf9yE7bbCeRYgyEpeGmaDC1c4NK7jhmoTQORq%2Bh3Uj3kL4hkb0LAQ8m19j5GwswHggNoqCQntQi2%2BsV6Pv7rc1InfKRReNIF6XpEPjr0TGyRlH8h3w39IKvCFdsfpUOUBT06RpgZejWvSBrPfgSR84oK1TMkTPgf9w1tYy2cjMSIxq5CpWN0ue1ZkrEiY9DHBDlJ8eNo9f6lw1Qu3Lw6v1J&X-Amz-Signature=f99cff58d1cd58464554ba6ad301c934a9a6cc2239bbab4d9744ee251c554125&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5ERMNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3471pEsQsWPQDD6Cmd9%2F8p1pIcuv0m8LG1GQfSvjoQIhAIJ0oyGxQ8JImsKHTv66qvrPj0CpqpEozxB2MhWKKePwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5gU7p1iZRtJdQYwwq3AM88SPXOspSgdMYRlhZOgQ3yicFw7ENvOEqBj7%2FfwQ2ajfcUg%2FaV4ETeuwXJFyXvV%2FzV0YEP99XRBAVAXmVxEjCkzsk7uaLYkC7JxLCxN%2B5s8R8tqj8RW7M1bvdsn0uaaEsS5WEW1rWvJg7oi0TdHgp3kyJ8tKCpMpkhxcTasr%2FXyh4vUSGvSQiLP2E1ecuOi8%2FVC0CbC%2FotNfU%2BL%2B1Wzu1JCcLb%2Fbm63ohmMXnjvH15yzKajppK93dFigXULdPDdoA%2BjBqgxbeQEOMLzLimjzx8aFZTtD%2FGUh6d7p9o7mAloeMfRNjPkQ06x6m3b3zy8MorXl3%2BiPEkn3FwPtccGQFT47usMODF9MGsET6Q4f%2FtsuaEdTgr3Tx321vHYyzd1DkEL0qJNBljawl%2FzX6NV71ZS9UOAMSeLE7pR4TUDw8My9x5TpDHSuEjFyomBsgr7QKURajfCx7h2uyDoX95A4ZCyQBG8noOhAFgzdkmAL7a1StJ5M0xirbi1e9QPbH88bB%2BYE5NSYhJT39eztHB2j2BUz398ZFTSav87OlHL5mEiOi5YlVynIO0%2B2wjoX%2BWNq9sGDpnp%2F%2B5mDbpyM%2F3dYSWprYkqEHYV1IsHLgDkXhxoPrO2CVQbZpM%2B%2FoczC%2FnJPCBjqkAWzQgHf9yE7bbCeRYgyEpeGmaDC1c4NK7jhmoTQORq%2Bh3Uj3kL4hkb0LAQ8m19j5GwswHggNoqCQntQi2%2BsV6Pv7rc1InfKRReNIF6XpEPjr0TGyRlH8h3w39IKvCFdsfpUOUBT06RpgZejWvSBrPfgSR84oK1TMkTPgf9w1tYy2cjMSIxq5CpWN0ue1ZkrEiY9DHBDlJ8eNo9f6lw1Qu3Lw6v1J&X-Amz-Signature=084ecae5dcb8c02ff0946ee0ba94945461ef99d2f2eb3079db0b2736d084cc83&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5ERMNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3471pEsQsWPQDD6Cmd9%2F8p1pIcuv0m8LG1GQfSvjoQIhAIJ0oyGxQ8JImsKHTv66qvrPj0CpqpEozxB2MhWKKePwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5gU7p1iZRtJdQYwwq3AM88SPXOspSgdMYRlhZOgQ3yicFw7ENvOEqBj7%2FfwQ2ajfcUg%2FaV4ETeuwXJFyXvV%2FzV0YEP99XRBAVAXmVxEjCkzsk7uaLYkC7JxLCxN%2B5s8R8tqj8RW7M1bvdsn0uaaEsS5WEW1rWvJg7oi0TdHgp3kyJ8tKCpMpkhxcTasr%2FXyh4vUSGvSQiLP2E1ecuOi8%2FVC0CbC%2FotNfU%2BL%2B1Wzu1JCcLb%2Fbm63ohmMXnjvH15yzKajppK93dFigXULdPDdoA%2BjBqgxbeQEOMLzLimjzx8aFZTtD%2FGUh6d7p9o7mAloeMfRNjPkQ06x6m3b3zy8MorXl3%2BiPEkn3FwPtccGQFT47usMODF9MGsET6Q4f%2FtsuaEdTgr3Tx321vHYyzd1DkEL0qJNBljawl%2FzX6NV71ZS9UOAMSeLE7pR4TUDw8My9x5TpDHSuEjFyomBsgr7QKURajfCx7h2uyDoX95A4ZCyQBG8noOhAFgzdkmAL7a1StJ5M0xirbi1e9QPbH88bB%2BYE5NSYhJT39eztHB2j2BUz398ZFTSav87OlHL5mEiOi5YlVynIO0%2B2wjoX%2BWNq9sGDpnp%2F%2B5mDbpyM%2F3dYSWprYkqEHYV1IsHLgDkXhxoPrO2CVQbZpM%2B%2FoczC%2FnJPCBjqkAWzQgHf9yE7bbCeRYgyEpeGmaDC1c4NK7jhmoTQORq%2Bh3Uj3kL4hkb0LAQ8m19j5GwswHggNoqCQntQi2%2BsV6Pv7rc1InfKRReNIF6XpEPjr0TGyRlH8h3w39IKvCFdsfpUOUBT06RpgZejWvSBrPfgSR84oK1TMkTPgf9w1tYy2cjMSIxq5CpWN0ue1ZkrEiY9DHBDlJ8eNo9f6lw1Qu3Lw6v1J&X-Amz-Signature=3024dd801130312c865af23316d0b196c1aaad2fe1f28c7a36220cac56b9f8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5ERMNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3471pEsQsWPQDD6Cmd9%2F8p1pIcuv0m8LG1GQfSvjoQIhAIJ0oyGxQ8JImsKHTv66qvrPj0CpqpEozxB2MhWKKePwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5gU7p1iZRtJdQYwwq3AM88SPXOspSgdMYRlhZOgQ3yicFw7ENvOEqBj7%2FfwQ2ajfcUg%2FaV4ETeuwXJFyXvV%2FzV0YEP99XRBAVAXmVxEjCkzsk7uaLYkC7JxLCxN%2B5s8R8tqj8RW7M1bvdsn0uaaEsS5WEW1rWvJg7oi0TdHgp3kyJ8tKCpMpkhxcTasr%2FXyh4vUSGvSQiLP2E1ecuOi8%2FVC0CbC%2FotNfU%2BL%2B1Wzu1JCcLb%2Fbm63ohmMXnjvH15yzKajppK93dFigXULdPDdoA%2BjBqgxbeQEOMLzLimjzx8aFZTtD%2FGUh6d7p9o7mAloeMfRNjPkQ06x6m3b3zy8MorXl3%2BiPEkn3FwPtccGQFT47usMODF9MGsET6Q4f%2FtsuaEdTgr3Tx321vHYyzd1DkEL0qJNBljawl%2FzX6NV71ZS9UOAMSeLE7pR4TUDw8My9x5TpDHSuEjFyomBsgr7QKURajfCx7h2uyDoX95A4ZCyQBG8noOhAFgzdkmAL7a1StJ5M0xirbi1e9QPbH88bB%2BYE5NSYhJT39eztHB2j2BUz398ZFTSav87OlHL5mEiOi5YlVynIO0%2B2wjoX%2BWNq9sGDpnp%2F%2B5mDbpyM%2F3dYSWprYkqEHYV1IsHLgDkXhxoPrO2CVQbZpM%2B%2FoczC%2FnJPCBjqkAWzQgHf9yE7bbCeRYgyEpeGmaDC1c4NK7jhmoTQORq%2Bh3Uj3kL4hkb0LAQ8m19j5GwswHggNoqCQntQi2%2BsV6Pv7rc1InfKRReNIF6XpEPjr0TGyRlH8h3w39IKvCFdsfpUOUBT06RpgZejWvSBrPfgSR84oK1TMkTPgf9w1tYy2cjMSIxq5CpWN0ue1ZkrEiY9DHBDlJ8eNo9f6lw1Qu3Lw6v1J&X-Amz-Signature=2e88afe341603fa224837d9ebb82153c1ba4e7c4657304e7f872efb4df399800&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5ERMNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3471pEsQsWPQDD6Cmd9%2F8p1pIcuv0m8LG1GQfSvjoQIhAIJ0oyGxQ8JImsKHTv66qvrPj0CpqpEozxB2MhWKKePwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5gU7p1iZRtJdQYwwq3AM88SPXOspSgdMYRlhZOgQ3yicFw7ENvOEqBj7%2FfwQ2ajfcUg%2FaV4ETeuwXJFyXvV%2FzV0YEP99XRBAVAXmVxEjCkzsk7uaLYkC7JxLCxN%2B5s8R8tqj8RW7M1bvdsn0uaaEsS5WEW1rWvJg7oi0TdHgp3kyJ8tKCpMpkhxcTasr%2FXyh4vUSGvSQiLP2E1ecuOi8%2FVC0CbC%2FotNfU%2BL%2B1Wzu1JCcLb%2Fbm63ohmMXnjvH15yzKajppK93dFigXULdPDdoA%2BjBqgxbeQEOMLzLimjzx8aFZTtD%2FGUh6d7p9o7mAloeMfRNjPkQ06x6m3b3zy8MorXl3%2BiPEkn3FwPtccGQFT47usMODF9MGsET6Q4f%2FtsuaEdTgr3Tx321vHYyzd1DkEL0qJNBljawl%2FzX6NV71ZS9UOAMSeLE7pR4TUDw8My9x5TpDHSuEjFyomBsgr7QKURajfCx7h2uyDoX95A4ZCyQBG8noOhAFgzdkmAL7a1StJ5M0xirbi1e9QPbH88bB%2BYE5NSYhJT39eztHB2j2BUz398ZFTSav87OlHL5mEiOi5YlVynIO0%2B2wjoX%2BWNq9sGDpnp%2F%2B5mDbpyM%2F3dYSWprYkqEHYV1IsHLgDkXhxoPrO2CVQbZpM%2B%2FoczC%2FnJPCBjqkAWzQgHf9yE7bbCeRYgyEpeGmaDC1c4NK7jhmoTQORq%2Bh3Uj3kL4hkb0LAQ8m19j5GwswHggNoqCQntQi2%2BsV6Pv7rc1InfKRReNIF6XpEPjr0TGyRlH8h3w39IKvCFdsfpUOUBT06RpgZejWvSBrPfgSR84oK1TMkTPgf9w1tYy2cjMSIxq5CpWN0ue1ZkrEiY9DHBDlJ8eNo9f6lw1Qu3Lw6v1J&X-Amz-Signature=8c0d94d45934cda3629b6747fe6736e486d0a5e37b4cdea9dc30172667a0426f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5ERMNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3471pEsQsWPQDD6Cmd9%2F8p1pIcuv0m8LG1GQfSvjoQIhAIJ0oyGxQ8JImsKHTv66qvrPj0CpqpEozxB2MhWKKePwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5gU7p1iZRtJdQYwwq3AM88SPXOspSgdMYRlhZOgQ3yicFw7ENvOEqBj7%2FfwQ2ajfcUg%2FaV4ETeuwXJFyXvV%2FzV0YEP99XRBAVAXmVxEjCkzsk7uaLYkC7JxLCxN%2B5s8R8tqj8RW7M1bvdsn0uaaEsS5WEW1rWvJg7oi0TdHgp3kyJ8tKCpMpkhxcTasr%2FXyh4vUSGvSQiLP2E1ecuOi8%2FVC0CbC%2FotNfU%2BL%2B1Wzu1JCcLb%2Fbm63ohmMXnjvH15yzKajppK93dFigXULdPDdoA%2BjBqgxbeQEOMLzLimjzx8aFZTtD%2FGUh6d7p9o7mAloeMfRNjPkQ06x6m3b3zy8MorXl3%2BiPEkn3FwPtccGQFT47usMODF9MGsET6Q4f%2FtsuaEdTgr3Tx321vHYyzd1DkEL0qJNBljawl%2FzX6NV71ZS9UOAMSeLE7pR4TUDw8My9x5TpDHSuEjFyomBsgr7QKURajfCx7h2uyDoX95A4ZCyQBG8noOhAFgzdkmAL7a1StJ5M0xirbi1e9QPbH88bB%2BYE5NSYhJT39eztHB2j2BUz398ZFTSav87OlHL5mEiOi5YlVynIO0%2B2wjoX%2BWNq9sGDpnp%2F%2B5mDbpyM%2F3dYSWprYkqEHYV1IsHLgDkXhxoPrO2CVQbZpM%2B%2FoczC%2FnJPCBjqkAWzQgHf9yE7bbCeRYgyEpeGmaDC1c4NK7jhmoTQORq%2Bh3Uj3kL4hkb0LAQ8m19j5GwswHggNoqCQntQi2%2BsV6Pv7rc1InfKRReNIF6XpEPjr0TGyRlH8h3w39IKvCFdsfpUOUBT06RpgZejWvSBrPfgSR84oK1TMkTPgf9w1tYy2cjMSIxq5CpWN0ue1ZkrEiY9DHBDlJ8eNo9f6lw1Qu3Lw6v1J&X-Amz-Signature=2aabaa01a97c3149227e03b41692f284473fa5ff3ee58d4f92f2b56455c8e26c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5ERMNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3471pEsQsWPQDD6Cmd9%2F8p1pIcuv0m8LG1GQfSvjoQIhAIJ0oyGxQ8JImsKHTv66qvrPj0CpqpEozxB2MhWKKePwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5gU7p1iZRtJdQYwwq3AM88SPXOspSgdMYRlhZOgQ3yicFw7ENvOEqBj7%2FfwQ2ajfcUg%2FaV4ETeuwXJFyXvV%2FzV0YEP99XRBAVAXmVxEjCkzsk7uaLYkC7JxLCxN%2B5s8R8tqj8RW7M1bvdsn0uaaEsS5WEW1rWvJg7oi0TdHgp3kyJ8tKCpMpkhxcTasr%2FXyh4vUSGvSQiLP2E1ecuOi8%2FVC0CbC%2FotNfU%2BL%2B1Wzu1JCcLb%2Fbm63ohmMXnjvH15yzKajppK93dFigXULdPDdoA%2BjBqgxbeQEOMLzLimjzx8aFZTtD%2FGUh6d7p9o7mAloeMfRNjPkQ06x6m3b3zy8MorXl3%2BiPEkn3FwPtccGQFT47usMODF9MGsET6Q4f%2FtsuaEdTgr3Tx321vHYyzd1DkEL0qJNBljawl%2FzX6NV71ZS9UOAMSeLE7pR4TUDw8My9x5TpDHSuEjFyomBsgr7QKURajfCx7h2uyDoX95A4ZCyQBG8noOhAFgzdkmAL7a1StJ5M0xirbi1e9QPbH88bB%2BYE5NSYhJT39eztHB2j2BUz398ZFTSav87OlHL5mEiOi5YlVynIO0%2B2wjoX%2BWNq9sGDpnp%2F%2B5mDbpyM%2F3dYSWprYkqEHYV1IsHLgDkXhxoPrO2CVQbZpM%2B%2FoczC%2FnJPCBjqkAWzQgHf9yE7bbCeRYgyEpeGmaDC1c4NK7jhmoTQORq%2Bh3Uj3kL4hkb0LAQ8m19j5GwswHggNoqCQntQi2%2BsV6Pv7rc1InfKRReNIF6XpEPjr0TGyRlH8h3w39IKvCFdsfpUOUBT06RpgZejWvSBrPfgSR84oK1TMkTPgf9w1tYy2cjMSIxq5CpWN0ue1ZkrEiY9DHBDlJ8eNo9f6lw1Qu3Lw6v1J&X-Amz-Signature=f935ffcc940e63b52e1b9d4e95285ee3012505f738da7b0a0422ab7321d6c030&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
