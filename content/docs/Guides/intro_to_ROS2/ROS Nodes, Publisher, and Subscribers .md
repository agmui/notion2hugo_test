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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDE44BSH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC1kL0gXsplQE5Y5tjBvrN0m2UnjIy0C2tvpizre9MJPgIgeU2K0%2FvQTeAleoQtWGZ6bBSAwu%2BoFNoXBE7u40us1rYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCaNKxzDzWmRQayqcSrcA7Hc9Uu8HT9p%2BfRmYf1GmKqcrDj13QJWBf0WLnuEQ%2BdL1UIQbjRD80p4%2Ff2YfMjCqvD3lDQrnRV0wy%2BTUB9AhjzA0RBH5n0oi1Rry7HT%2BtSMq%2FK6%2BdYKCDINdttWmjvQ4jid4Xmca70nwUCQNxaZibBxRxIEnQSMfhof3AU1N5aMHaeN8hY89ul2LEIznbkaqTNPZl3767SddaTy3labopfO%2FMRojjr9kU%2F71xOrD8wHjFU6kKsFfuBNrU%2FyWjBatMKsyzIk90xZeFFr%2BOMAGUlJ59Q4cTXxG7wxTS5LrhKA1ecZe3oX9f%2Byq7lGnDhrE5AFRzgsGjqISHBVeBz1y%2F9O0TPm0bkZ%2Br5gq5q3oa2VwldDfjr%2FMlI6R0H2iqgTKazr5QPT5DsVyJDrvbfMT9wvatfD3Ualk0zUmPj8bDTSLsVmNDO0Nqb4csFSXoPMvuwTegHzriVHduWKYYrdMv%2BtD1fCNZVIU8rYmR0BA9lsW6RU6ETtfUCgBQFATg2Xq2yqEoOipWT31ShkRwFXQRCnekXPgXizgB8bkL5FuR5dKH%2FcUU2qnndyowaPv8295%2BYGGfqcBLheU1eDWSk3YhadzkVydWLFQntuWwIMOWH3bFRusSnAqpjwVBOIMPafoL8GOqUBRmW0T392gEn0NV3EBCSMW9eVHanhbhPCPQtbt%2FsrQnwVVb8H5w%2FZnK8ml%2B1tv1aGKhPp34Fq4DaxfIV2rSebnKMcs%2BNyYBdTvdkN7hRHz8AKD1ueI0mt0tphC7Zaioix%2FFMqbGUSv0dMdlOzpLgfIimn7oyP5xnKvtAaAguyUTOZNSO3I6Z0poz1ny9XNdeLDjq5osiT7OXaG8PkY2YvD%2Bl9GfQz&X-Amz-Signature=5437b79ef5f2a0fe50851b699c081f50f989c0042dd4fea427e0806a6ce306ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDE44BSH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC1kL0gXsplQE5Y5tjBvrN0m2UnjIy0C2tvpizre9MJPgIgeU2K0%2FvQTeAleoQtWGZ6bBSAwu%2BoFNoXBE7u40us1rYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCaNKxzDzWmRQayqcSrcA7Hc9Uu8HT9p%2BfRmYf1GmKqcrDj13QJWBf0WLnuEQ%2BdL1UIQbjRD80p4%2Ff2YfMjCqvD3lDQrnRV0wy%2BTUB9AhjzA0RBH5n0oi1Rry7HT%2BtSMq%2FK6%2BdYKCDINdttWmjvQ4jid4Xmca70nwUCQNxaZibBxRxIEnQSMfhof3AU1N5aMHaeN8hY89ul2LEIznbkaqTNPZl3767SddaTy3labopfO%2FMRojjr9kU%2F71xOrD8wHjFU6kKsFfuBNrU%2FyWjBatMKsyzIk90xZeFFr%2BOMAGUlJ59Q4cTXxG7wxTS5LrhKA1ecZe3oX9f%2Byq7lGnDhrE5AFRzgsGjqISHBVeBz1y%2F9O0TPm0bkZ%2Br5gq5q3oa2VwldDfjr%2FMlI6R0H2iqgTKazr5QPT5DsVyJDrvbfMT9wvatfD3Ualk0zUmPj8bDTSLsVmNDO0Nqb4csFSXoPMvuwTegHzriVHduWKYYrdMv%2BtD1fCNZVIU8rYmR0BA9lsW6RU6ETtfUCgBQFATg2Xq2yqEoOipWT31ShkRwFXQRCnekXPgXizgB8bkL5FuR5dKH%2FcUU2qnndyowaPv8295%2BYGGfqcBLheU1eDWSk3YhadzkVydWLFQntuWwIMOWH3bFRusSnAqpjwVBOIMPafoL8GOqUBRmW0T392gEn0NV3EBCSMW9eVHanhbhPCPQtbt%2FsrQnwVVb8H5w%2FZnK8ml%2B1tv1aGKhPp34Fq4DaxfIV2rSebnKMcs%2BNyYBdTvdkN7hRHz8AKD1ueI0mt0tphC7Zaioix%2FFMqbGUSv0dMdlOzpLgfIimn7oyP5xnKvtAaAguyUTOZNSO3I6Z0poz1ny9XNdeLDjq5osiT7OXaG8PkY2YvD%2Bl9GfQz&X-Amz-Signature=1176b071e4b38d6d9ee660a5ff617daef857da3c37b7959615034d9f7a061d31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDE44BSH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC1kL0gXsplQE5Y5tjBvrN0m2UnjIy0C2tvpizre9MJPgIgeU2K0%2FvQTeAleoQtWGZ6bBSAwu%2BoFNoXBE7u40us1rYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCaNKxzDzWmRQayqcSrcA7Hc9Uu8HT9p%2BfRmYf1GmKqcrDj13QJWBf0WLnuEQ%2BdL1UIQbjRD80p4%2Ff2YfMjCqvD3lDQrnRV0wy%2BTUB9AhjzA0RBH5n0oi1Rry7HT%2BtSMq%2FK6%2BdYKCDINdttWmjvQ4jid4Xmca70nwUCQNxaZibBxRxIEnQSMfhof3AU1N5aMHaeN8hY89ul2LEIznbkaqTNPZl3767SddaTy3labopfO%2FMRojjr9kU%2F71xOrD8wHjFU6kKsFfuBNrU%2FyWjBatMKsyzIk90xZeFFr%2BOMAGUlJ59Q4cTXxG7wxTS5LrhKA1ecZe3oX9f%2Byq7lGnDhrE5AFRzgsGjqISHBVeBz1y%2F9O0TPm0bkZ%2Br5gq5q3oa2VwldDfjr%2FMlI6R0H2iqgTKazr5QPT5DsVyJDrvbfMT9wvatfD3Ualk0zUmPj8bDTSLsVmNDO0Nqb4csFSXoPMvuwTegHzriVHduWKYYrdMv%2BtD1fCNZVIU8rYmR0BA9lsW6RU6ETtfUCgBQFATg2Xq2yqEoOipWT31ShkRwFXQRCnekXPgXizgB8bkL5FuR5dKH%2FcUU2qnndyowaPv8295%2BYGGfqcBLheU1eDWSk3YhadzkVydWLFQntuWwIMOWH3bFRusSnAqpjwVBOIMPafoL8GOqUBRmW0T392gEn0NV3EBCSMW9eVHanhbhPCPQtbt%2FsrQnwVVb8H5w%2FZnK8ml%2B1tv1aGKhPp34Fq4DaxfIV2rSebnKMcs%2BNyYBdTvdkN7hRHz8AKD1ueI0mt0tphC7Zaioix%2FFMqbGUSv0dMdlOzpLgfIimn7oyP5xnKvtAaAguyUTOZNSO3I6Z0poz1ny9XNdeLDjq5osiT7OXaG8PkY2YvD%2Bl9GfQz&X-Amz-Signature=d273f43ba91ba1e4d04fd11ee4a9a7bb9ea7819ec748245940c92ec04e996e41&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDE44BSH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC1kL0gXsplQE5Y5tjBvrN0m2UnjIy0C2tvpizre9MJPgIgeU2K0%2FvQTeAleoQtWGZ6bBSAwu%2BoFNoXBE7u40us1rYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCaNKxzDzWmRQayqcSrcA7Hc9Uu8HT9p%2BfRmYf1GmKqcrDj13QJWBf0WLnuEQ%2BdL1UIQbjRD80p4%2Ff2YfMjCqvD3lDQrnRV0wy%2BTUB9AhjzA0RBH5n0oi1Rry7HT%2BtSMq%2FK6%2BdYKCDINdttWmjvQ4jid4Xmca70nwUCQNxaZibBxRxIEnQSMfhof3AU1N5aMHaeN8hY89ul2LEIznbkaqTNPZl3767SddaTy3labopfO%2FMRojjr9kU%2F71xOrD8wHjFU6kKsFfuBNrU%2FyWjBatMKsyzIk90xZeFFr%2BOMAGUlJ59Q4cTXxG7wxTS5LrhKA1ecZe3oX9f%2Byq7lGnDhrE5AFRzgsGjqISHBVeBz1y%2F9O0TPm0bkZ%2Br5gq5q3oa2VwldDfjr%2FMlI6R0H2iqgTKazr5QPT5DsVyJDrvbfMT9wvatfD3Ualk0zUmPj8bDTSLsVmNDO0Nqb4csFSXoPMvuwTegHzriVHduWKYYrdMv%2BtD1fCNZVIU8rYmR0BA9lsW6RU6ETtfUCgBQFATg2Xq2yqEoOipWT31ShkRwFXQRCnekXPgXizgB8bkL5FuR5dKH%2FcUU2qnndyowaPv8295%2BYGGfqcBLheU1eDWSk3YhadzkVydWLFQntuWwIMOWH3bFRusSnAqpjwVBOIMPafoL8GOqUBRmW0T392gEn0NV3EBCSMW9eVHanhbhPCPQtbt%2FsrQnwVVb8H5w%2FZnK8ml%2B1tv1aGKhPp34Fq4DaxfIV2rSebnKMcs%2BNyYBdTvdkN7hRHz8AKD1ueI0mt0tphC7Zaioix%2FFMqbGUSv0dMdlOzpLgfIimn7oyP5xnKvtAaAguyUTOZNSO3I6Z0poz1ny9XNdeLDjq5osiT7OXaG8PkY2YvD%2Bl9GfQz&X-Amz-Signature=94468618dc4e065074606b3f9ac2dd22922a9fe843ffef47cea39a30d5f61e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDE44BSH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC1kL0gXsplQE5Y5tjBvrN0m2UnjIy0C2tvpizre9MJPgIgeU2K0%2FvQTeAleoQtWGZ6bBSAwu%2BoFNoXBE7u40us1rYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCaNKxzDzWmRQayqcSrcA7Hc9Uu8HT9p%2BfRmYf1GmKqcrDj13QJWBf0WLnuEQ%2BdL1UIQbjRD80p4%2Ff2YfMjCqvD3lDQrnRV0wy%2BTUB9AhjzA0RBH5n0oi1Rry7HT%2BtSMq%2FK6%2BdYKCDINdttWmjvQ4jid4Xmca70nwUCQNxaZibBxRxIEnQSMfhof3AU1N5aMHaeN8hY89ul2LEIznbkaqTNPZl3767SddaTy3labopfO%2FMRojjr9kU%2F71xOrD8wHjFU6kKsFfuBNrU%2FyWjBatMKsyzIk90xZeFFr%2BOMAGUlJ59Q4cTXxG7wxTS5LrhKA1ecZe3oX9f%2Byq7lGnDhrE5AFRzgsGjqISHBVeBz1y%2F9O0TPm0bkZ%2Br5gq5q3oa2VwldDfjr%2FMlI6R0H2iqgTKazr5QPT5DsVyJDrvbfMT9wvatfD3Ualk0zUmPj8bDTSLsVmNDO0Nqb4csFSXoPMvuwTegHzriVHduWKYYrdMv%2BtD1fCNZVIU8rYmR0BA9lsW6RU6ETtfUCgBQFATg2Xq2yqEoOipWT31ShkRwFXQRCnekXPgXizgB8bkL5FuR5dKH%2FcUU2qnndyowaPv8295%2BYGGfqcBLheU1eDWSk3YhadzkVydWLFQntuWwIMOWH3bFRusSnAqpjwVBOIMPafoL8GOqUBRmW0T392gEn0NV3EBCSMW9eVHanhbhPCPQtbt%2FsrQnwVVb8H5w%2FZnK8ml%2B1tv1aGKhPp34Fq4DaxfIV2rSebnKMcs%2BNyYBdTvdkN7hRHz8AKD1ueI0mt0tphC7Zaioix%2FFMqbGUSv0dMdlOzpLgfIimn7oyP5xnKvtAaAguyUTOZNSO3I6Z0poz1ny9XNdeLDjq5osiT7OXaG8PkY2YvD%2Bl9GfQz&X-Amz-Signature=3725f3a28b3d3098ce552b82d7cd78c7a7cf02f2158ea2c2d5389cd2ed2e8710&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDE44BSH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC1kL0gXsplQE5Y5tjBvrN0m2UnjIy0C2tvpizre9MJPgIgeU2K0%2FvQTeAleoQtWGZ6bBSAwu%2BoFNoXBE7u40us1rYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCaNKxzDzWmRQayqcSrcA7Hc9Uu8HT9p%2BfRmYf1GmKqcrDj13QJWBf0WLnuEQ%2BdL1UIQbjRD80p4%2Ff2YfMjCqvD3lDQrnRV0wy%2BTUB9AhjzA0RBH5n0oi1Rry7HT%2BtSMq%2FK6%2BdYKCDINdttWmjvQ4jid4Xmca70nwUCQNxaZibBxRxIEnQSMfhof3AU1N5aMHaeN8hY89ul2LEIznbkaqTNPZl3767SddaTy3labopfO%2FMRojjr9kU%2F71xOrD8wHjFU6kKsFfuBNrU%2FyWjBatMKsyzIk90xZeFFr%2BOMAGUlJ59Q4cTXxG7wxTS5LrhKA1ecZe3oX9f%2Byq7lGnDhrE5AFRzgsGjqISHBVeBz1y%2F9O0TPm0bkZ%2Br5gq5q3oa2VwldDfjr%2FMlI6R0H2iqgTKazr5QPT5DsVyJDrvbfMT9wvatfD3Ualk0zUmPj8bDTSLsVmNDO0Nqb4csFSXoPMvuwTegHzriVHduWKYYrdMv%2BtD1fCNZVIU8rYmR0BA9lsW6RU6ETtfUCgBQFATg2Xq2yqEoOipWT31ShkRwFXQRCnekXPgXizgB8bkL5FuR5dKH%2FcUU2qnndyowaPv8295%2BYGGfqcBLheU1eDWSk3YhadzkVydWLFQntuWwIMOWH3bFRusSnAqpjwVBOIMPafoL8GOqUBRmW0T392gEn0NV3EBCSMW9eVHanhbhPCPQtbt%2FsrQnwVVb8H5w%2FZnK8ml%2B1tv1aGKhPp34Fq4DaxfIV2rSebnKMcs%2BNyYBdTvdkN7hRHz8AKD1ueI0mt0tphC7Zaioix%2FFMqbGUSv0dMdlOzpLgfIimn7oyP5xnKvtAaAguyUTOZNSO3I6Z0poz1ny9XNdeLDjq5osiT7OXaG8PkY2YvD%2Bl9GfQz&X-Amz-Signature=0f34f9d4f3cf433d721470d66d538f4c9abb43134fd21c9ab2f275cd15a0a985&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDE44BSH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC1kL0gXsplQE5Y5tjBvrN0m2UnjIy0C2tvpizre9MJPgIgeU2K0%2FvQTeAleoQtWGZ6bBSAwu%2BoFNoXBE7u40us1rYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCaNKxzDzWmRQayqcSrcA7Hc9Uu8HT9p%2BfRmYf1GmKqcrDj13QJWBf0WLnuEQ%2BdL1UIQbjRD80p4%2Ff2YfMjCqvD3lDQrnRV0wy%2BTUB9AhjzA0RBH5n0oi1Rry7HT%2BtSMq%2FK6%2BdYKCDINdttWmjvQ4jid4Xmca70nwUCQNxaZibBxRxIEnQSMfhof3AU1N5aMHaeN8hY89ul2LEIznbkaqTNPZl3767SddaTy3labopfO%2FMRojjr9kU%2F71xOrD8wHjFU6kKsFfuBNrU%2FyWjBatMKsyzIk90xZeFFr%2BOMAGUlJ59Q4cTXxG7wxTS5LrhKA1ecZe3oX9f%2Byq7lGnDhrE5AFRzgsGjqISHBVeBz1y%2F9O0TPm0bkZ%2Br5gq5q3oa2VwldDfjr%2FMlI6R0H2iqgTKazr5QPT5DsVyJDrvbfMT9wvatfD3Ualk0zUmPj8bDTSLsVmNDO0Nqb4csFSXoPMvuwTegHzriVHduWKYYrdMv%2BtD1fCNZVIU8rYmR0BA9lsW6RU6ETtfUCgBQFATg2Xq2yqEoOipWT31ShkRwFXQRCnekXPgXizgB8bkL5FuR5dKH%2FcUU2qnndyowaPv8295%2BYGGfqcBLheU1eDWSk3YhadzkVydWLFQntuWwIMOWH3bFRusSnAqpjwVBOIMPafoL8GOqUBRmW0T392gEn0NV3EBCSMW9eVHanhbhPCPQtbt%2FsrQnwVVb8H5w%2FZnK8ml%2B1tv1aGKhPp34Fq4DaxfIV2rSebnKMcs%2BNyYBdTvdkN7hRHz8AKD1ueI0mt0tphC7Zaioix%2FFMqbGUSv0dMdlOzpLgfIimn7oyP5xnKvtAaAguyUTOZNSO3I6Z0poz1ny9XNdeLDjq5osiT7OXaG8PkY2YvD%2Bl9GfQz&X-Amz-Signature=4c9884fa4f213066fd0c2bb3399d4bdd7ea626d8b46a5b22e27113d7dc71d199&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDE44BSH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC1kL0gXsplQE5Y5tjBvrN0m2UnjIy0C2tvpizre9MJPgIgeU2K0%2FvQTeAleoQtWGZ6bBSAwu%2BoFNoXBE7u40us1rYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCaNKxzDzWmRQayqcSrcA7Hc9Uu8HT9p%2BfRmYf1GmKqcrDj13QJWBf0WLnuEQ%2BdL1UIQbjRD80p4%2Ff2YfMjCqvD3lDQrnRV0wy%2BTUB9AhjzA0RBH5n0oi1Rry7HT%2BtSMq%2FK6%2BdYKCDINdttWmjvQ4jid4Xmca70nwUCQNxaZibBxRxIEnQSMfhof3AU1N5aMHaeN8hY89ul2LEIznbkaqTNPZl3767SddaTy3labopfO%2FMRojjr9kU%2F71xOrD8wHjFU6kKsFfuBNrU%2FyWjBatMKsyzIk90xZeFFr%2BOMAGUlJ59Q4cTXxG7wxTS5LrhKA1ecZe3oX9f%2Byq7lGnDhrE5AFRzgsGjqISHBVeBz1y%2F9O0TPm0bkZ%2Br5gq5q3oa2VwldDfjr%2FMlI6R0H2iqgTKazr5QPT5DsVyJDrvbfMT9wvatfD3Ualk0zUmPj8bDTSLsVmNDO0Nqb4csFSXoPMvuwTegHzriVHduWKYYrdMv%2BtD1fCNZVIU8rYmR0BA9lsW6RU6ETtfUCgBQFATg2Xq2yqEoOipWT31ShkRwFXQRCnekXPgXizgB8bkL5FuR5dKH%2FcUU2qnndyowaPv8295%2BYGGfqcBLheU1eDWSk3YhadzkVydWLFQntuWwIMOWH3bFRusSnAqpjwVBOIMPafoL8GOqUBRmW0T392gEn0NV3EBCSMW9eVHanhbhPCPQtbt%2FsrQnwVVb8H5w%2FZnK8ml%2B1tv1aGKhPp34Fq4DaxfIV2rSebnKMcs%2BNyYBdTvdkN7hRHz8AKD1ueI0mt0tphC7Zaioix%2FFMqbGUSv0dMdlOzpLgfIimn7oyP5xnKvtAaAguyUTOZNSO3I6Z0poz1ny9XNdeLDjq5osiT7OXaG8PkY2YvD%2Bl9GfQz&X-Amz-Signature=90b84b30495fcecfcac1cb574efe881c620c0e2e4167aa0960cfc32d8ed60684&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
