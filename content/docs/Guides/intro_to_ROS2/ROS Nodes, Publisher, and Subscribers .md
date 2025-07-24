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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4HTPSZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD%2BmrKfdJCd3b6khwNv4NtQ7gwb12IvsMjuv9t9UPoTFgIhAONR0LMe3gALYGnhaDFZHgjwNMx0InfNtmZGOiLv9ho2Kv8DCDcQABoMNjM3NDIzMTgzODA1Igy3mWOuYT4ro7XXhKwq3ANmdgdIwb3TBGM7qRORK9KkEcWmjiRf1DmA6emNEfweKZwXer2pGmuCHa%2B37%2B7GLarLcgIm96HW6DJW0ipvcgoTBvl0%2F9FBCWrvajz3wPyiRFfbwo2f02c7Y7nLuCngoYlYY0ORRZ%2FKyY%2FnnC8bqsi3LlF6hvEQ9kdyL5bXPWf2ZMivKKiYjwQjzRQi5%2FWN8xveKTvMR%2ByH99nsRuIQ1%2BFqD2eCHfGoTdvQdDMLlZ0G%2FiBmKVsjQuLLvZ6vftp8l2ZNX2iabkUuYg8e6%2Fj2fC0yjgZctVAd0zOoIQtneWE7u202oSIhEkd9LHgvGZPiQmvho%2B%2BfHLcRP1HZ7N1g54SSZynqyLNsBk5HBJ0hk4%2BGh2BEtqVbbjeBZXn6uSzN4IeaoufsMgDw2i2BIp%2FHamtoBlO%2Fl0lzYDw%2F07TWlHeYg%2FjEMh%2Bdvsl6BsnEHdXX93HvlHaXiiTrgz%2F8ILYbfhISiI51QcwK5j7SDy3Z8frQcK4kKA4nbNpZeVL%2BEfDNxbE%2B5P4B13dAQE6x2x4y2JgkJgfmqSOKLVnEVRzv1AMeHYjL9kWO8bttgN1McCCJf%2BO60KbDcHVZS2L0dXGULawIKHSQFWytiNDhL5Fl3ibroRWJjWDq4K1%2BUSCdvDCX2IrEBjqkAUXbRKLsKsPubkmlVBjWnz4d8cwPji9%2FS3rAQ8FvykgIJefA%2Fj1hNFPEvRU0RzhaAqNZIrNZDhS9CzG0UTFY%2Be8OAChXYo0sTIXRv4pQAY1R1FRO4K6banBTP8B7ZRdokk2vGK15vaNCitWe4wOqkWbfxpnBTrRSNgDbpZOqQuHkMHhGv5wBMgiEm1dnx%2F4YG1ukx7yBWkuW0A75gscOGVWMnLL3&X-Amz-Signature=c35e0812a59243bea01255f7aa07679c53bbd4b3c32b71fed07418898fda17a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4HTPSZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD%2BmrKfdJCd3b6khwNv4NtQ7gwb12IvsMjuv9t9UPoTFgIhAONR0LMe3gALYGnhaDFZHgjwNMx0InfNtmZGOiLv9ho2Kv8DCDcQABoMNjM3NDIzMTgzODA1Igy3mWOuYT4ro7XXhKwq3ANmdgdIwb3TBGM7qRORK9KkEcWmjiRf1DmA6emNEfweKZwXer2pGmuCHa%2B37%2B7GLarLcgIm96HW6DJW0ipvcgoTBvl0%2F9FBCWrvajz3wPyiRFfbwo2f02c7Y7nLuCngoYlYY0ORRZ%2FKyY%2FnnC8bqsi3LlF6hvEQ9kdyL5bXPWf2ZMivKKiYjwQjzRQi5%2FWN8xveKTvMR%2ByH99nsRuIQ1%2BFqD2eCHfGoTdvQdDMLlZ0G%2FiBmKVsjQuLLvZ6vftp8l2ZNX2iabkUuYg8e6%2Fj2fC0yjgZctVAd0zOoIQtneWE7u202oSIhEkd9LHgvGZPiQmvho%2B%2BfHLcRP1HZ7N1g54SSZynqyLNsBk5HBJ0hk4%2BGh2BEtqVbbjeBZXn6uSzN4IeaoufsMgDw2i2BIp%2FHamtoBlO%2Fl0lzYDw%2F07TWlHeYg%2FjEMh%2Bdvsl6BsnEHdXX93HvlHaXiiTrgz%2F8ILYbfhISiI51QcwK5j7SDy3Z8frQcK4kKA4nbNpZeVL%2BEfDNxbE%2B5P4B13dAQE6x2x4y2JgkJgfmqSOKLVnEVRzv1AMeHYjL9kWO8bttgN1McCCJf%2BO60KbDcHVZS2L0dXGULawIKHSQFWytiNDhL5Fl3ibroRWJjWDq4K1%2BUSCdvDCX2IrEBjqkAUXbRKLsKsPubkmlVBjWnz4d8cwPji9%2FS3rAQ8FvykgIJefA%2Fj1hNFPEvRU0RzhaAqNZIrNZDhS9CzG0UTFY%2Be8OAChXYo0sTIXRv4pQAY1R1FRO4K6banBTP8B7ZRdokk2vGK15vaNCitWe4wOqkWbfxpnBTrRSNgDbpZOqQuHkMHhGv5wBMgiEm1dnx%2F4YG1ukx7yBWkuW0A75gscOGVWMnLL3&X-Amz-Signature=cc36de353bf97c8683d7dc6da2efd898e0aaa18b09e67156642946589fd8cbf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4HTPSZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD%2BmrKfdJCd3b6khwNv4NtQ7gwb12IvsMjuv9t9UPoTFgIhAONR0LMe3gALYGnhaDFZHgjwNMx0InfNtmZGOiLv9ho2Kv8DCDcQABoMNjM3NDIzMTgzODA1Igy3mWOuYT4ro7XXhKwq3ANmdgdIwb3TBGM7qRORK9KkEcWmjiRf1DmA6emNEfweKZwXer2pGmuCHa%2B37%2B7GLarLcgIm96HW6DJW0ipvcgoTBvl0%2F9FBCWrvajz3wPyiRFfbwo2f02c7Y7nLuCngoYlYY0ORRZ%2FKyY%2FnnC8bqsi3LlF6hvEQ9kdyL5bXPWf2ZMivKKiYjwQjzRQi5%2FWN8xveKTvMR%2ByH99nsRuIQ1%2BFqD2eCHfGoTdvQdDMLlZ0G%2FiBmKVsjQuLLvZ6vftp8l2ZNX2iabkUuYg8e6%2Fj2fC0yjgZctVAd0zOoIQtneWE7u202oSIhEkd9LHgvGZPiQmvho%2B%2BfHLcRP1HZ7N1g54SSZynqyLNsBk5HBJ0hk4%2BGh2BEtqVbbjeBZXn6uSzN4IeaoufsMgDw2i2BIp%2FHamtoBlO%2Fl0lzYDw%2F07TWlHeYg%2FjEMh%2Bdvsl6BsnEHdXX93HvlHaXiiTrgz%2F8ILYbfhISiI51QcwK5j7SDy3Z8frQcK4kKA4nbNpZeVL%2BEfDNxbE%2B5P4B13dAQE6x2x4y2JgkJgfmqSOKLVnEVRzv1AMeHYjL9kWO8bttgN1McCCJf%2BO60KbDcHVZS2L0dXGULawIKHSQFWytiNDhL5Fl3ibroRWJjWDq4K1%2BUSCdvDCX2IrEBjqkAUXbRKLsKsPubkmlVBjWnz4d8cwPji9%2FS3rAQ8FvykgIJefA%2Fj1hNFPEvRU0RzhaAqNZIrNZDhS9CzG0UTFY%2Be8OAChXYo0sTIXRv4pQAY1R1FRO4K6banBTP8B7ZRdokk2vGK15vaNCitWe4wOqkWbfxpnBTrRSNgDbpZOqQuHkMHhGv5wBMgiEm1dnx%2F4YG1ukx7yBWkuW0A75gscOGVWMnLL3&X-Amz-Signature=36eda906e2ce6f4e26cdb9d40a2bc0efdfe949ef0a40ccf31fd1781ea56e545e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4HTPSZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD%2BmrKfdJCd3b6khwNv4NtQ7gwb12IvsMjuv9t9UPoTFgIhAONR0LMe3gALYGnhaDFZHgjwNMx0InfNtmZGOiLv9ho2Kv8DCDcQABoMNjM3NDIzMTgzODA1Igy3mWOuYT4ro7XXhKwq3ANmdgdIwb3TBGM7qRORK9KkEcWmjiRf1DmA6emNEfweKZwXer2pGmuCHa%2B37%2B7GLarLcgIm96HW6DJW0ipvcgoTBvl0%2F9FBCWrvajz3wPyiRFfbwo2f02c7Y7nLuCngoYlYY0ORRZ%2FKyY%2FnnC8bqsi3LlF6hvEQ9kdyL5bXPWf2ZMivKKiYjwQjzRQi5%2FWN8xveKTvMR%2ByH99nsRuIQ1%2BFqD2eCHfGoTdvQdDMLlZ0G%2FiBmKVsjQuLLvZ6vftp8l2ZNX2iabkUuYg8e6%2Fj2fC0yjgZctVAd0zOoIQtneWE7u202oSIhEkd9LHgvGZPiQmvho%2B%2BfHLcRP1HZ7N1g54SSZynqyLNsBk5HBJ0hk4%2BGh2BEtqVbbjeBZXn6uSzN4IeaoufsMgDw2i2BIp%2FHamtoBlO%2Fl0lzYDw%2F07TWlHeYg%2FjEMh%2Bdvsl6BsnEHdXX93HvlHaXiiTrgz%2F8ILYbfhISiI51QcwK5j7SDy3Z8frQcK4kKA4nbNpZeVL%2BEfDNxbE%2B5P4B13dAQE6x2x4y2JgkJgfmqSOKLVnEVRzv1AMeHYjL9kWO8bttgN1McCCJf%2BO60KbDcHVZS2L0dXGULawIKHSQFWytiNDhL5Fl3ibroRWJjWDq4K1%2BUSCdvDCX2IrEBjqkAUXbRKLsKsPubkmlVBjWnz4d8cwPji9%2FS3rAQ8FvykgIJefA%2Fj1hNFPEvRU0RzhaAqNZIrNZDhS9CzG0UTFY%2Be8OAChXYo0sTIXRv4pQAY1R1FRO4K6banBTP8B7ZRdokk2vGK15vaNCitWe4wOqkWbfxpnBTrRSNgDbpZOqQuHkMHhGv5wBMgiEm1dnx%2F4YG1ukx7yBWkuW0A75gscOGVWMnLL3&X-Amz-Signature=47cf196f044b25bcfb9ff0047296a57a27385f5bf743727d8f7961bab2270413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4HTPSZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD%2BmrKfdJCd3b6khwNv4NtQ7gwb12IvsMjuv9t9UPoTFgIhAONR0LMe3gALYGnhaDFZHgjwNMx0InfNtmZGOiLv9ho2Kv8DCDcQABoMNjM3NDIzMTgzODA1Igy3mWOuYT4ro7XXhKwq3ANmdgdIwb3TBGM7qRORK9KkEcWmjiRf1DmA6emNEfweKZwXer2pGmuCHa%2B37%2B7GLarLcgIm96HW6DJW0ipvcgoTBvl0%2F9FBCWrvajz3wPyiRFfbwo2f02c7Y7nLuCngoYlYY0ORRZ%2FKyY%2FnnC8bqsi3LlF6hvEQ9kdyL5bXPWf2ZMivKKiYjwQjzRQi5%2FWN8xveKTvMR%2ByH99nsRuIQ1%2BFqD2eCHfGoTdvQdDMLlZ0G%2FiBmKVsjQuLLvZ6vftp8l2ZNX2iabkUuYg8e6%2Fj2fC0yjgZctVAd0zOoIQtneWE7u202oSIhEkd9LHgvGZPiQmvho%2B%2BfHLcRP1HZ7N1g54SSZynqyLNsBk5HBJ0hk4%2BGh2BEtqVbbjeBZXn6uSzN4IeaoufsMgDw2i2BIp%2FHamtoBlO%2Fl0lzYDw%2F07TWlHeYg%2FjEMh%2Bdvsl6BsnEHdXX93HvlHaXiiTrgz%2F8ILYbfhISiI51QcwK5j7SDy3Z8frQcK4kKA4nbNpZeVL%2BEfDNxbE%2B5P4B13dAQE6x2x4y2JgkJgfmqSOKLVnEVRzv1AMeHYjL9kWO8bttgN1McCCJf%2BO60KbDcHVZS2L0dXGULawIKHSQFWytiNDhL5Fl3ibroRWJjWDq4K1%2BUSCdvDCX2IrEBjqkAUXbRKLsKsPubkmlVBjWnz4d8cwPji9%2FS3rAQ8FvykgIJefA%2Fj1hNFPEvRU0RzhaAqNZIrNZDhS9CzG0UTFY%2Be8OAChXYo0sTIXRv4pQAY1R1FRO4K6banBTP8B7ZRdokk2vGK15vaNCitWe4wOqkWbfxpnBTrRSNgDbpZOqQuHkMHhGv5wBMgiEm1dnx%2F4YG1ukx7yBWkuW0A75gscOGVWMnLL3&X-Amz-Signature=7589951dda1c0ae08a5b9d5ada39a4ad3733f50a5bf33ca602e04d9ce3b98993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4HTPSZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD%2BmrKfdJCd3b6khwNv4NtQ7gwb12IvsMjuv9t9UPoTFgIhAONR0LMe3gALYGnhaDFZHgjwNMx0InfNtmZGOiLv9ho2Kv8DCDcQABoMNjM3NDIzMTgzODA1Igy3mWOuYT4ro7XXhKwq3ANmdgdIwb3TBGM7qRORK9KkEcWmjiRf1DmA6emNEfweKZwXer2pGmuCHa%2B37%2B7GLarLcgIm96HW6DJW0ipvcgoTBvl0%2F9FBCWrvajz3wPyiRFfbwo2f02c7Y7nLuCngoYlYY0ORRZ%2FKyY%2FnnC8bqsi3LlF6hvEQ9kdyL5bXPWf2ZMivKKiYjwQjzRQi5%2FWN8xveKTvMR%2ByH99nsRuIQ1%2BFqD2eCHfGoTdvQdDMLlZ0G%2FiBmKVsjQuLLvZ6vftp8l2ZNX2iabkUuYg8e6%2Fj2fC0yjgZctVAd0zOoIQtneWE7u202oSIhEkd9LHgvGZPiQmvho%2B%2BfHLcRP1HZ7N1g54SSZynqyLNsBk5HBJ0hk4%2BGh2BEtqVbbjeBZXn6uSzN4IeaoufsMgDw2i2BIp%2FHamtoBlO%2Fl0lzYDw%2F07TWlHeYg%2FjEMh%2Bdvsl6BsnEHdXX93HvlHaXiiTrgz%2F8ILYbfhISiI51QcwK5j7SDy3Z8frQcK4kKA4nbNpZeVL%2BEfDNxbE%2B5P4B13dAQE6x2x4y2JgkJgfmqSOKLVnEVRzv1AMeHYjL9kWO8bttgN1McCCJf%2BO60KbDcHVZS2L0dXGULawIKHSQFWytiNDhL5Fl3ibroRWJjWDq4K1%2BUSCdvDCX2IrEBjqkAUXbRKLsKsPubkmlVBjWnz4d8cwPji9%2FS3rAQ8FvykgIJefA%2Fj1hNFPEvRU0RzhaAqNZIrNZDhS9CzG0UTFY%2Be8OAChXYo0sTIXRv4pQAY1R1FRO4K6banBTP8B7ZRdokk2vGK15vaNCitWe4wOqkWbfxpnBTrRSNgDbpZOqQuHkMHhGv5wBMgiEm1dnx%2F4YG1ukx7yBWkuW0A75gscOGVWMnLL3&X-Amz-Signature=eb7d1d5c593678fe87dc22d6b3b0ff063d46897ae695493c3273753d21e2b8c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4HTPSZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD%2BmrKfdJCd3b6khwNv4NtQ7gwb12IvsMjuv9t9UPoTFgIhAONR0LMe3gALYGnhaDFZHgjwNMx0InfNtmZGOiLv9ho2Kv8DCDcQABoMNjM3NDIzMTgzODA1Igy3mWOuYT4ro7XXhKwq3ANmdgdIwb3TBGM7qRORK9KkEcWmjiRf1DmA6emNEfweKZwXer2pGmuCHa%2B37%2B7GLarLcgIm96HW6DJW0ipvcgoTBvl0%2F9FBCWrvajz3wPyiRFfbwo2f02c7Y7nLuCngoYlYY0ORRZ%2FKyY%2FnnC8bqsi3LlF6hvEQ9kdyL5bXPWf2ZMivKKiYjwQjzRQi5%2FWN8xveKTvMR%2ByH99nsRuIQ1%2BFqD2eCHfGoTdvQdDMLlZ0G%2FiBmKVsjQuLLvZ6vftp8l2ZNX2iabkUuYg8e6%2Fj2fC0yjgZctVAd0zOoIQtneWE7u202oSIhEkd9LHgvGZPiQmvho%2B%2BfHLcRP1HZ7N1g54SSZynqyLNsBk5HBJ0hk4%2BGh2BEtqVbbjeBZXn6uSzN4IeaoufsMgDw2i2BIp%2FHamtoBlO%2Fl0lzYDw%2F07TWlHeYg%2FjEMh%2Bdvsl6BsnEHdXX93HvlHaXiiTrgz%2F8ILYbfhISiI51QcwK5j7SDy3Z8frQcK4kKA4nbNpZeVL%2BEfDNxbE%2B5P4B13dAQE6x2x4y2JgkJgfmqSOKLVnEVRzv1AMeHYjL9kWO8bttgN1McCCJf%2BO60KbDcHVZS2L0dXGULawIKHSQFWytiNDhL5Fl3ibroRWJjWDq4K1%2BUSCdvDCX2IrEBjqkAUXbRKLsKsPubkmlVBjWnz4d8cwPji9%2FS3rAQ8FvykgIJefA%2Fj1hNFPEvRU0RzhaAqNZIrNZDhS9CzG0UTFY%2Be8OAChXYo0sTIXRv4pQAY1R1FRO4K6banBTP8B7ZRdokk2vGK15vaNCitWe4wOqkWbfxpnBTrRSNgDbpZOqQuHkMHhGv5wBMgiEm1dnx%2F4YG1ukx7yBWkuW0A75gscOGVWMnLL3&X-Amz-Signature=7cb1e9b804b0dd553866bf85fba3dd677ebe287da53bb2df0d2b668d6a869d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4HTPSZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD%2BmrKfdJCd3b6khwNv4NtQ7gwb12IvsMjuv9t9UPoTFgIhAONR0LMe3gALYGnhaDFZHgjwNMx0InfNtmZGOiLv9ho2Kv8DCDcQABoMNjM3NDIzMTgzODA1Igy3mWOuYT4ro7XXhKwq3ANmdgdIwb3TBGM7qRORK9KkEcWmjiRf1DmA6emNEfweKZwXer2pGmuCHa%2B37%2B7GLarLcgIm96HW6DJW0ipvcgoTBvl0%2F9FBCWrvajz3wPyiRFfbwo2f02c7Y7nLuCngoYlYY0ORRZ%2FKyY%2FnnC8bqsi3LlF6hvEQ9kdyL5bXPWf2ZMivKKiYjwQjzRQi5%2FWN8xveKTvMR%2ByH99nsRuIQ1%2BFqD2eCHfGoTdvQdDMLlZ0G%2FiBmKVsjQuLLvZ6vftp8l2ZNX2iabkUuYg8e6%2Fj2fC0yjgZctVAd0zOoIQtneWE7u202oSIhEkd9LHgvGZPiQmvho%2B%2BfHLcRP1HZ7N1g54SSZynqyLNsBk5HBJ0hk4%2BGh2BEtqVbbjeBZXn6uSzN4IeaoufsMgDw2i2BIp%2FHamtoBlO%2Fl0lzYDw%2F07TWlHeYg%2FjEMh%2Bdvsl6BsnEHdXX93HvlHaXiiTrgz%2F8ILYbfhISiI51QcwK5j7SDy3Z8frQcK4kKA4nbNpZeVL%2BEfDNxbE%2B5P4B13dAQE6x2x4y2JgkJgfmqSOKLVnEVRzv1AMeHYjL9kWO8bttgN1McCCJf%2BO60KbDcHVZS2L0dXGULawIKHSQFWytiNDhL5Fl3ibroRWJjWDq4K1%2BUSCdvDCX2IrEBjqkAUXbRKLsKsPubkmlVBjWnz4d8cwPji9%2FS3rAQ8FvykgIJefA%2Fj1hNFPEvRU0RzhaAqNZIrNZDhS9CzG0UTFY%2Be8OAChXYo0sTIXRv4pQAY1R1FRO4K6banBTP8B7ZRdokk2vGK15vaNCitWe4wOqkWbfxpnBTrRSNgDbpZOqQuHkMHhGv5wBMgiEm1dnx%2F4YG1ukx7yBWkuW0A75gscOGVWMnLL3&X-Amz-Signature=17be2ffb9aa1bb605fa1f5ac4e2a2d794d21e8d3440da11a6daa9a4d2cc5ab3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
