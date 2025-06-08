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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5V7FAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2BP6chvQcpLZmh15qGoEPecBOIDKkvSLTyQgbeRHLVQIhANme%2B2KRrmouWngO5yG6y2IaioVBKvW5HD4I5cskVJKgKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzES9UzttgeWxvcgRYq3ANXALZ0yUWARI%2BmcWYelZ8k7y1LOYTSN4UUI2OaoU97E8apB%2BSEBvMiuPd2Kut7kTtcOgjU9lhng%2Fpz6f0HHRX49cnt37M451QWkQ8AZhKaaQOZf2GOh%2BzvsDMqFqJmM5S3XAM85qjHynaifLCURhrSm9Gww9UpLaXdZ%2FFiAvH3sODfhmM5qjUxZdGprJcyCb5s4Z5ZeqkBcDrkN4gOjZAueYEPP3B2qE7qeOmyVMH6Vqj1uCPe4f3X86Qt8SX7CqZiNVX2P3nPe7kCUsItb7qW%2BgKCTktVobRbwXkdTcSUNso2zr3GP9jTL9FR24kS4O9k4YshQOzFnil9JhusYrGf1Zmy%2ByQW4J9t0KsRFSEhg2I8V7NQfZmxH166jz3Y8SduayfDlCyKGngiIVgIRhkP3UCqsSYyqkAtOh9vhAgVh4H5b%2BH3zSFtZza52Up5kGhslHAyjwX%2BH%2B%2FiMjIhorHaVWZUzY9bIrV2MHVTI6Lu3gJpVCcxiTVWiefg1Nbbr6AmGPnXo54GkllBwWEkdHIa86SPii7pdBK9HpAWe658TYuZQOxS4Hb7XjTly8t9PYX%2Flzt0RvraTfVt2rc2yRtzyyg8DOrvDuUm3P4XoN%2F9jIDU6VgsfuzSkiReVDD8sJTCBjqkAXBxFY%2BcTRqXLEVPjYYeflcuCsLdDsaB%2FzHRSGzwCaTN%2F1bYBjb37tr%2Bqo2YYCpaAtFNG4k96aZpJTBbjfLdCqpumk4snyaISX4EaNTYVV9VsXT6oNvK544qZi%2F7gg5208Zo%2Fwa3hWcUafskQCDjCyDcIHJiVz5t3orAoyWAFg%2F44qLasmbh4BIGFYtziyQEe66ixQmxl%2FTi8AcE1iTQGPgglSp4&X-Amz-Signature=721d8ec90922a30779b2fe4103f1b132e5f936165b9caa821cbf9ceb47317037&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5V7FAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2BP6chvQcpLZmh15qGoEPecBOIDKkvSLTyQgbeRHLVQIhANme%2B2KRrmouWngO5yG6y2IaioVBKvW5HD4I5cskVJKgKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzES9UzttgeWxvcgRYq3ANXALZ0yUWARI%2BmcWYelZ8k7y1LOYTSN4UUI2OaoU97E8apB%2BSEBvMiuPd2Kut7kTtcOgjU9lhng%2Fpz6f0HHRX49cnt37M451QWkQ8AZhKaaQOZf2GOh%2BzvsDMqFqJmM5S3XAM85qjHynaifLCURhrSm9Gww9UpLaXdZ%2FFiAvH3sODfhmM5qjUxZdGprJcyCb5s4Z5ZeqkBcDrkN4gOjZAueYEPP3B2qE7qeOmyVMH6Vqj1uCPe4f3X86Qt8SX7CqZiNVX2P3nPe7kCUsItb7qW%2BgKCTktVobRbwXkdTcSUNso2zr3GP9jTL9FR24kS4O9k4YshQOzFnil9JhusYrGf1Zmy%2ByQW4J9t0KsRFSEhg2I8V7NQfZmxH166jz3Y8SduayfDlCyKGngiIVgIRhkP3UCqsSYyqkAtOh9vhAgVh4H5b%2BH3zSFtZza52Up5kGhslHAyjwX%2BH%2B%2FiMjIhorHaVWZUzY9bIrV2MHVTI6Lu3gJpVCcxiTVWiefg1Nbbr6AmGPnXo54GkllBwWEkdHIa86SPii7pdBK9HpAWe658TYuZQOxS4Hb7XjTly8t9PYX%2Flzt0RvraTfVt2rc2yRtzyyg8DOrvDuUm3P4XoN%2F9jIDU6VgsfuzSkiReVDD8sJTCBjqkAXBxFY%2BcTRqXLEVPjYYeflcuCsLdDsaB%2FzHRSGzwCaTN%2F1bYBjb37tr%2Bqo2YYCpaAtFNG4k96aZpJTBbjfLdCqpumk4snyaISX4EaNTYVV9VsXT6oNvK544qZi%2F7gg5208Zo%2Fwa3hWcUafskQCDjCyDcIHJiVz5t3orAoyWAFg%2F44qLasmbh4BIGFYtziyQEe66ixQmxl%2FTi8AcE1iTQGPgglSp4&X-Amz-Signature=a8cdb5488fc0122fa6f4b2fc18b355b917911f05c68baca92d769d7f08fe0ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5V7FAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2BP6chvQcpLZmh15qGoEPecBOIDKkvSLTyQgbeRHLVQIhANme%2B2KRrmouWngO5yG6y2IaioVBKvW5HD4I5cskVJKgKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzES9UzttgeWxvcgRYq3ANXALZ0yUWARI%2BmcWYelZ8k7y1LOYTSN4UUI2OaoU97E8apB%2BSEBvMiuPd2Kut7kTtcOgjU9lhng%2Fpz6f0HHRX49cnt37M451QWkQ8AZhKaaQOZf2GOh%2BzvsDMqFqJmM5S3XAM85qjHynaifLCURhrSm9Gww9UpLaXdZ%2FFiAvH3sODfhmM5qjUxZdGprJcyCb5s4Z5ZeqkBcDrkN4gOjZAueYEPP3B2qE7qeOmyVMH6Vqj1uCPe4f3X86Qt8SX7CqZiNVX2P3nPe7kCUsItb7qW%2BgKCTktVobRbwXkdTcSUNso2zr3GP9jTL9FR24kS4O9k4YshQOzFnil9JhusYrGf1Zmy%2ByQW4J9t0KsRFSEhg2I8V7NQfZmxH166jz3Y8SduayfDlCyKGngiIVgIRhkP3UCqsSYyqkAtOh9vhAgVh4H5b%2BH3zSFtZza52Up5kGhslHAyjwX%2BH%2B%2FiMjIhorHaVWZUzY9bIrV2MHVTI6Lu3gJpVCcxiTVWiefg1Nbbr6AmGPnXo54GkllBwWEkdHIa86SPii7pdBK9HpAWe658TYuZQOxS4Hb7XjTly8t9PYX%2Flzt0RvraTfVt2rc2yRtzyyg8DOrvDuUm3P4XoN%2F9jIDU6VgsfuzSkiReVDD8sJTCBjqkAXBxFY%2BcTRqXLEVPjYYeflcuCsLdDsaB%2FzHRSGzwCaTN%2F1bYBjb37tr%2Bqo2YYCpaAtFNG4k96aZpJTBbjfLdCqpumk4snyaISX4EaNTYVV9VsXT6oNvK544qZi%2F7gg5208Zo%2Fwa3hWcUafskQCDjCyDcIHJiVz5t3orAoyWAFg%2F44qLasmbh4BIGFYtziyQEe66ixQmxl%2FTi8AcE1iTQGPgglSp4&X-Amz-Signature=1c4302bdf943578af2ef3fb14d8486499d39b95f008c3519c483346ba3ef6ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5V7FAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2BP6chvQcpLZmh15qGoEPecBOIDKkvSLTyQgbeRHLVQIhANme%2B2KRrmouWngO5yG6y2IaioVBKvW5HD4I5cskVJKgKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzES9UzttgeWxvcgRYq3ANXALZ0yUWARI%2BmcWYelZ8k7y1LOYTSN4UUI2OaoU97E8apB%2BSEBvMiuPd2Kut7kTtcOgjU9lhng%2Fpz6f0HHRX49cnt37M451QWkQ8AZhKaaQOZf2GOh%2BzvsDMqFqJmM5S3XAM85qjHynaifLCURhrSm9Gww9UpLaXdZ%2FFiAvH3sODfhmM5qjUxZdGprJcyCb5s4Z5ZeqkBcDrkN4gOjZAueYEPP3B2qE7qeOmyVMH6Vqj1uCPe4f3X86Qt8SX7CqZiNVX2P3nPe7kCUsItb7qW%2BgKCTktVobRbwXkdTcSUNso2zr3GP9jTL9FR24kS4O9k4YshQOzFnil9JhusYrGf1Zmy%2ByQW4J9t0KsRFSEhg2I8V7NQfZmxH166jz3Y8SduayfDlCyKGngiIVgIRhkP3UCqsSYyqkAtOh9vhAgVh4H5b%2BH3zSFtZza52Up5kGhslHAyjwX%2BH%2B%2FiMjIhorHaVWZUzY9bIrV2MHVTI6Lu3gJpVCcxiTVWiefg1Nbbr6AmGPnXo54GkllBwWEkdHIa86SPii7pdBK9HpAWe658TYuZQOxS4Hb7XjTly8t9PYX%2Flzt0RvraTfVt2rc2yRtzyyg8DOrvDuUm3P4XoN%2F9jIDU6VgsfuzSkiReVDD8sJTCBjqkAXBxFY%2BcTRqXLEVPjYYeflcuCsLdDsaB%2FzHRSGzwCaTN%2F1bYBjb37tr%2Bqo2YYCpaAtFNG4k96aZpJTBbjfLdCqpumk4snyaISX4EaNTYVV9VsXT6oNvK544qZi%2F7gg5208Zo%2Fwa3hWcUafskQCDjCyDcIHJiVz5t3orAoyWAFg%2F44qLasmbh4BIGFYtziyQEe66ixQmxl%2FTi8AcE1iTQGPgglSp4&X-Amz-Signature=425c82e862d53991cd7f8c8a64a6018774b2409067280b1124a7bdfa81376660&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5V7FAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2BP6chvQcpLZmh15qGoEPecBOIDKkvSLTyQgbeRHLVQIhANme%2B2KRrmouWngO5yG6y2IaioVBKvW5HD4I5cskVJKgKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzES9UzttgeWxvcgRYq3ANXALZ0yUWARI%2BmcWYelZ8k7y1LOYTSN4UUI2OaoU97E8apB%2BSEBvMiuPd2Kut7kTtcOgjU9lhng%2Fpz6f0HHRX49cnt37M451QWkQ8AZhKaaQOZf2GOh%2BzvsDMqFqJmM5S3XAM85qjHynaifLCURhrSm9Gww9UpLaXdZ%2FFiAvH3sODfhmM5qjUxZdGprJcyCb5s4Z5ZeqkBcDrkN4gOjZAueYEPP3B2qE7qeOmyVMH6Vqj1uCPe4f3X86Qt8SX7CqZiNVX2P3nPe7kCUsItb7qW%2BgKCTktVobRbwXkdTcSUNso2zr3GP9jTL9FR24kS4O9k4YshQOzFnil9JhusYrGf1Zmy%2ByQW4J9t0KsRFSEhg2I8V7NQfZmxH166jz3Y8SduayfDlCyKGngiIVgIRhkP3UCqsSYyqkAtOh9vhAgVh4H5b%2BH3zSFtZza52Up5kGhslHAyjwX%2BH%2B%2FiMjIhorHaVWZUzY9bIrV2MHVTI6Lu3gJpVCcxiTVWiefg1Nbbr6AmGPnXo54GkllBwWEkdHIa86SPii7pdBK9HpAWe658TYuZQOxS4Hb7XjTly8t9PYX%2Flzt0RvraTfVt2rc2yRtzyyg8DOrvDuUm3P4XoN%2F9jIDU6VgsfuzSkiReVDD8sJTCBjqkAXBxFY%2BcTRqXLEVPjYYeflcuCsLdDsaB%2FzHRSGzwCaTN%2F1bYBjb37tr%2Bqo2YYCpaAtFNG4k96aZpJTBbjfLdCqpumk4snyaISX4EaNTYVV9VsXT6oNvK544qZi%2F7gg5208Zo%2Fwa3hWcUafskQCDjCyDcIHJiVz5t3orAoyWAFg%2F44qLasmbh4BIGFYtziyQEe66ixQmxl%2FTi8AcE1iTQGPgglSp4&X-Amz-Signature=b311850a57f7543d099470ab520bc39f2b70413250b59215f46d549ac67b5b72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5V7FAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2BP6chvQcpLZmh15qGoEPecBOIDKkvSLTyQgbeRHLVQIhANme%2B2KRrmouWngO5yG6y2IaioVBKvW5HD4I5cskVJKgKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzES9UzttgeWxvcgRYq3ANXALZ0yUWARI%2BmcWYelZ8k7y1LOYTSN4UUI2OaoU97E8apB%2BSEBvMiuPd2Kut7kTtcOgjU9lhng%2Fpz6f0HHRX49cnt37M451QWkQ8AZhKaaQOZf2GOh%2BzvsDMqFqJmM5S3XAM85qjHynaifLCURhrSm9Gww9UpLaXdZ%2FFiAvH3sODfhmM5qjUxZdGprJcyCb5s4Z5ZeqkBcDrkN4gOjZAueYEPP3B2qE7qeOmyVMH6Vqj1uCPe4f3X86Qt8SX7CqZiNVX2P3nPe7kCUsItb7qW%2BgKCTktVobRbwXkdTcSUNso2zr3GP9jTL9FR24kS4O9k4YshQOzFnil9JhusYrGf1Zmy%2ByQW4J9t0KsRFSEhg2I8V7NQfZmxH166jz3Y8SduayfDlCyKGngiIVgIRhkP3UCqsSYyqkAtOh9vhAgVh4H5b%2BH3zSFtZza52Up5kGhslHAyjwX%2BH%2B%2FiMjIhorHaVWZUzY9bIrV2MHVTI6Lu3gJpVCcxiTVWiefg1Nbbr6AmGPnXo54GkllBwWEkdHIa86SPii7pdBK9HpAWe658TYuZQOxS4Hb7XjTly8t9PYX%2Flzt0RvraTfVt2rc2yRtzyyg8DOrvDuUm3P4XoN%2F9jIDU6VgsfuzSkiReVDD8sJTCBjqkAXBxFY%2BcTRqXLEVPjYYeflcuCsLdDsaB%2FzHRSGzwCaTN%2F1bYBjb37tr%2Bqo2YYCpaAtFNG4k96aZpJTBbjfLdCqpumk4snyaISX4EaNTYVV9VsXT6oNvK544qZi%2F7gg5208Zo%2Fwa3hWcUafskQCDjCyDcIHJiVz5t3orAoyWAFg%2F44qLasmbh4BIGFYtziyQEe66ixQmxl%2FTi8AcE1iTQGPgglSp4&X-Amz-Signature=66b5767ffd6aed94cb19a7fa4637248a509a2014c4a0c0555db6ec1432ea9642&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5V7FAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2BP6chvQcpLZmh15qGoEPecBOIDKkvSLTyQgbeRHLVQIhANme%2B2KRrmouWngO5yG6y2IaioVBKvW5HD4I5cskVJKgKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzES9UzttgeWxvcgRYq3ANXALZ0yUWARI%2BmcWYelZ8k7y1LOYTSN4UUI2OaoU97E8apB%2BSEBvMiuPd2Kut7kTtcOgjU9lhng%2Fpz6f0HHRX49cnt37M451QWkQ8AZhKaaQOZf2GOh%2BzvsDMqFqJmM5S3XAM85qjHynaifLCURhrSm9Gww9UpLaXdZ%2FFiAvH3sODfhmM5qjUxZdGprJcyCb5s4Z5ZeqkBcDrkN4gOjZAueYEPP3B2qE7qeOmyVMH6Vqj1uCPe4f3X86Qt8SX7CqZiNVX2P3nPe7kCUsItb7qW%2BgKCTktVobRbwXkdTcSUNso2zr3GP9jTL9FR24kS4O9k4YshQOzFnil9JhusYrGf1Zmy%2ByQW4J9t0KsRFSEhg2I8V7NQfZmxH166jz3Y8SduayfDlCyKGngiIVgIRhkP3UCqsSYyqkAtOh9vhAgVh4H5b%2BH3zSFtZza52Up5kGhslHAyjwX%2BH%2B%2FiMjIhorHaVWZUzY9bIrV2MHVTI6Lu3gJpVCcxiTVWiefg1Nbbr6AmGPnXo54GkllBwWEkdHIa86SPii7pdBK9HpAWe658TYuZQOxS4Hb7XjTly8t9PYX%2Flzt0RvraTfVt2rc2yRtzyyg8DOrvDuUm3P4XoN%2F9jIDU6VgsfuzSkiReVDD8sJTCBjqkAXBxFY%2BcTRqXLEVPjYYeflcuCsLdDsaB%2FzHRSGzwCaTN%2F1bYBjb37tr%2Bqo2YYCpaAtFNG4k96aZpJTBbjfLdCqpumk4snyaISX4EaNTYVV9VsXT6oNvK544qZi%2F7gg5208Zo%2Fwa3hWcUafskQCDjCyDcIHJiVz5t3orAoyWAFg%2F44qLasmbh4BIGFYtziyQEe66ixQmxl%2FTi8AcE1iTQGPgglSp4&X-Amz-Signature=b0783de479366928993ab6901cf6ab84301562e69a845768d757956ef256b43e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5V7FAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2BP6chvQcpLZmh15qGoEPecBOIDKkvSLTyQgbeRHLVQIhANme%2B2KRrmouWngO5yG6y2IaioVBKvW5HD4I5cskVJKgKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzES9UzttgeWxvcgRYq3ANXALZ0yUWARI%2BmcWYelZ8k7y1LOYTSN4UUI2OaoU97E8apB%2BSEBvMiuPd2Kut7kTtcOgjU9lhng%2Fpz6f0HHRX49cnt37M451QWkQ8AZhKaaQOZf2GOh%2BzvsDMqFqJmM5S3XAM85qjHynaifLCURhrSm9Gww9UpLaXdZ%2FFiAvH3sODfhmM5qjUxZdGprJcyCb5s4Z5ZeqkBcDrkN4gOjZAueYEPP3B2qE7qeOmyVMH6Vqj1uCPe4f3X86Qt8SX7CqZiNVX2P3nPe7kCUsItb7qW%2BgKCTktVobRbwXkdTcSUNso2zr3GP9jTL9FR24kS4O9k4YshQOzFnil9JhusYrGf1Zmy%2ByQW4J9t0KsRFSEhg2I8V7NQfZmxH166jz3Y8SduayfDlCyKGngiIVgIRhkP3UCqsSYyqkAtOh9vhAgVh4H5b%2BH3zSFtZza52Up5kGhslHAyjwX%2BH%2B%2FiMjIhorHaVWZUzY9bIrV2MHVTI6Lu3gJpVCcxiTVWiefg1Nbbr6AmGPnXo54GkllBwWEkdHIa86SPii7pdBK9HpAWe658TYuZQOxS4Hb7XjTly8t9PYX%2Flzt0RvraTfVt2rc2yRtzyyg8DOrvDuUm3P4XoN%2F9jIDU6VgsfuzSkiReVDD8sJTCBjqkAXBxFY%2BcTRqXLEVPjYYeflcuCsLdDsaB%2FzHRSGzwCaTN%2F1bYBjb37tr%2Bqo2YYCpaAtFNG4k96aZpJTBbjfLdCqpumk4snyaISX4EaNTYVV9VsXT6oNvK544qZi%2F7gg5208Zo%2Fwa3hWcUafskQCDjCyDcIHJiVz5t3orAoyWAFg%2F44qLasmbh4BIGFYtziyQEe66ixQmxl%2FTi8AcE1iTQGPgglSp4&X-Amz-Signature=4113affa4923d33898ed82608fc1aab51e4bb53ccb2e456c592556999ac5f540&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
