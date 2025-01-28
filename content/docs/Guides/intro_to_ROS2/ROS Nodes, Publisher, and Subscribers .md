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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HY5Z2YF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC8tsUqTZqfDe%2B7Hqn15EammT1DoCnbbmEZkeZ5XgPWzgIhALc%2Ftquj9LgwEvPEcw2tGhTuIq90JByZzC5du9G0m0HRKv8DCH8QABoMNjM3NDIzMTgzODA1Igyl8usGv%2FFaOiRyLxwq3AMmzJB53bAAMhib7dYoYjewZktKy0PNQHjrWU%2BbcK%2B7l9HQ7nY7HgY5DAju02FcaT0yLlOl5wELPf0lcOAxxJ5ZzUhqZChx%2FrxJDHw5wiGyDSnxCLouqaGQqWydz3LnKCwpoQgN0DRaW3daJDaYNT162qRf%2B9NHHKXDg7VUKguCu8MnErRdv2cYrYinaw1oSx4kfSfyKySw%2BnbzxYzcCfesH2PNPToyH7aCw0asntncpF9ocXwc8tCVTDcmqCk1192%2BGgypkxJLvR09%2BZd1ONaC%2FzvFH2TrxXQuPX7Nms8FUbvbfIYluZmeZBbu6tsI2Dna2FhwScLi7OaXWXVXLrldxQbqlDrJklwQ2%2F6e%2BwhiVgWIM93e68hoAEjg6zQvOqIA5pAoRaGvDZqD18CIo59eDCXZ7PlNTik411iZFUsvSEu6vA3C%2Fi31Z2fntMLCXA94rjBj3ToApYO0uYMBoLoiGDpcx%2F5tov8%2Fj94uYZncYK0c%2BSQBr%2BrNXyCGnetiXSbXPh3q5e%2BLIXFj34TGgXosb5%2B9Wpx8o1tQ2EISRwqBlIhr9p2iomxmcGHA3HWCVVBDsfKvqHEpWkjI9p1VJFuLxR7ovfgc9%2BUq5Bzhw1bHOwCeXSKhPJErOxeoHDDgseW8BjqkAQTClA1tyUUBVuBjzPNktGUPX4T6PkYW8VB3YvxpG22IFle22UkFzT4XabB4RbJukop8%2BVw2aqrJamqrfa38ow6dG0WrpXCtO%2BfcAo%2FscgaQf1wUc9Gj4A6FT9MESAaEJ66KKOMBitEdjABPtxwDqjLazfqCLx2N8kBLPVJ12YtUELjMLsJEE4fvhANeBZ2enRsNCBVReHK5TSsvUK3QAp7FNnsj&X-Amz-Signature=8d8df24c492fcb885546981434838045cca7551d53aca15b0c26af7e83d21568&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HY5Z2YF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC8tsUqTZqfDe%2B7Hqn15EammT1DoCnbbmEZkeZ5XgPWzgIhALc%2Ftquj9LgwEvPEcw2tGhTuIq90JByZzC5du9G0m0HRKv8DCH8QABoMNjM3NDIzMTgzODA1Igyl8usGv%2FFaOiRyLxwq3AMmzJB53bAAMhib7dYoYjewZktKy0PNQHjrWU%2BbcK%2B7l9HQ7nY7HgY5DAju02FcaT0yLlOl5wELPf0lcOAxxJ5ZzUhqZChx%2FrxJDHw5wiGyDSnxCLouqaGQqWydz3LnKCwpoQgN0DRaW3daJDaYNT162qRf%2B9NHHKXDg7VUKguCu8MnErRdv2cYrYinaw1oSx4kfSfyKySw%2BnbzxYzcCfesH2PNPToyH7aCw0asntncpF9ocXwc8tCVTDcmqCk1192%2BGgypkxJLvR09%2BZd1ONaC%2FzvFH2TrxXQuPX7Nms8FUbvbfIYluZmeZBbu6tsI2Dna2FhwScLi7OaXWXVXLrldxQbqlDrJklwQ2%2F6e%2BwhiVgWIM93e68hoAEjg6zQvOqIA5pAoRaGvDZqD18CIo59eDCXZ7PlNTik411iZFUsvSEu6vA3C%2Fi31Z2fntMLCXA94rjBj3ToApYO0uYMBoLoiGDpcx%2F5tov8%2Fj94uYZncYK0c%2BSQBr%2BrNXyCGnetiXSbXPh3q5e%2BLIXFj34TGgXosb5%2B9Wpx8o1tQ2EISRwqBlIhr9p2iomxmcGHA3HWCVVBDsfKvqHEpWkjI9p1VJFuLxR7ovfgc9%2BUq5Bzhw1bHOwCeXSKhPJErOxeoHDDgseW8BjqkAQTClA1tyUUBVuBjzPNktGUPX4T6PkYW8VB3YvxpG22IFle22UkFzT4XabB4RbJukop8%2BVw2aqrJamqrfa38ow6dG0WrpXCtO%2BfcAo%2FscgaQf1wUc9Gj4A6FT9MESAaEJ66KKOMBitEdjABPtxwDqjLazfqCLx2N8kBLPVJ12YtUELjMLsJEE4fvhANeBZ2enRsNCBVReHK5TSsvUK3QAp7FNnsj&X-Amz-Signature=3ae6a023bcfa1bf95d0517270fc3e5858c1a7066a29320cde8c635f53fad64c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HY5Z2YF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC8tsUqTZqfDe%2B7Hqn15EammT1DoCnbbmEZkeZ5XgPWzgIhALc%2Ftquj9LgwEvPEcw2tGhTuIq90JByZzC5du9G0m0HRKv8DCH8QABoMNjM3NDIzMTgzODA1Igyl8usGv%2FFaOiRyLxwq3AMmzJB53bAAMhib7dYoYjewZktKy0PNQHjrWU%2BbcK%2B7l9HQ7nY7HgY5DAju02FcaT0yLlOl5wELPf0lcOAxxJ5ZzUhqZChx%2FrxJDHw5wiGyDSnxCLouqaGQqWydz3LnKCwpoQgN0DRaW3daJDaYNT162qRf%2B9NHHKXDg7VUKguCu8MnErRdv2cYrYinaw1oSx4kfSfyKySw%2BnbzxYzcCfesH2PNPToyH7aCw0asntncpF9ocXwc8tCVTDcmqCk1192%2BGgypkxJLvR09%2BZd1ONaC%2FzvFH2TrxXQuPX7Nms8FUbvbfIYluZmeZBbu6tsI2Dna2FhwScLi7OaXWXVXLrldxQbqlDrJklwQ2%2F6e%2BwhiVgWIM93e68hoAEjg6zQvOqIA5pAoRaGvDZqD18CIo59eDCXZ7PlNTik411iZFUsvSEu6vA3C%2Fi31Z2fntMLCXA94rjBj3ToApYO0uYMBoLoiGDpcx%2F5tov8%2Fj94uYZncYK0c%2BSQBr%2BrNXyCGnetiXSbXPh3q5e%2BLIXFj34TGgXosb5%2B9Wpx8o1tQ2EISRwqBlIhr9p2iomxmcGHA3HWCVVBDsfKvqHEpWkjI9p1VJFuLxR7ovfgc9%2BUq5Bzhw1bHOwCeXSKhPJErOxeoHDDgseW8BjqkAQTClA1tyUUBVuBjzPNktGUPX4T6PkYW8VB3YvxpG22IFle22UkFzT4XabB4RbJukop8%2BVw2aqrJamqrfa38ow6dG0WrpXCtO%2BfcAo%2FscgaQf1wUc9Gj4A6FT9MESAaEJ66KKOMBitEdjABPtxwDqjLazfqCLx2N8kBLPVJ12YtUELjMLsJEE4fvhANeBZ2enRsNCBVReHK5TSsvUK3QAp7FNnsj&X-Amz-Signature=416ee3dbc2f394ed713795eb89b9aec8753105cd9dbb895d954b49ac3d8f78d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HY5Z2YF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC8tsUqTZqfDe%2B7Hqn15EammT1DoCnbbmEZkeZ5XgPWzgIhALc%2Ftquj9LgwEvPEcw2tGhTuIq90JByZzC5du9G0m0HRKv8DCH8QABoMNjM3NDIzMTgzODA1Igyl8usGv%2FFaOiRyLxwq3AMmzJB53bAAMhib7dYoYjewZktKy0PNQHjrWU%2BbcK%2B7l9HQ7nY7HgY5DAju02FcaT0yLlOl5wELPf0lcOAxxJ5ZzUhqZChx%2FrxJDHw5wiGyDSnxCLouqaGQqWydz3LnKCwpoQgN0DRaW3daJDaYNT162qRf%2B9NHHKXDg7VUKguCu8MnErRdv2cYrYinaw1oSx4kfSfyKySw%2BnbzxYzcCfesH2PNPToyH7aCw0asntncpF9ocXwc8tCVTDcmqCk1192%2BGgypkxJLvR09%2BZd1ONaC%2FzvFH2TrxXQuPX7Nms8FUbvbfIYluZmeZBbu6tsI2Dna2FhwScLi7OaXWXVXLrldxQbqlDrJklwQ2%2F6e%2BwhiVgWIM93e68hoAEjg6zQvOqIA5pAoRaGvDZqD18CIo59eDCXZ7PlNTik411iZFUsvSEu6vA3C%2Fi31Z2fntMLCXA94rjBj3ToApYO0uYMBoLoiGDpcx%2F5tov8%2Fj94uYZncYK0c%2BSQBr%2BrNXyCGnetiXSbXPh3q5e%2BLIXFj34TGgXosb5%2B9Wpx8o1tQ2EISRwqBlIhr9p2iomxmcGHA3HWCVVBDsfKvqHEpWkjI9p1VJFuLxR7ovfgc9%2BUq5Bzhw1bHOwCeXSKhPJErOxeoHDDgseW8BjqkAQTClA1tyUUBVuBjzPNktGUPX4T6PkYW8VB3YvxpG22IFle22UkFzT4XabB4RbJukop8%2BVw2aqrJamqrfa38ow6dG0WrpXCtO%2BfcAo%2FscgaQf1wUc9Gj4A6FT9MESAaEJ66KKOMBitEdjABPtxwDqjLazfqCLx2N8kBLPVJ12YtUELjMLsJEE4fvhANeBZ2enRsNCBVReHK5TSsvUK3QAp7FNnsj&X-Amz-Signature=a90790af317558d2606131c3d243ea6b938595eb068878ba85f4f6b7fc623089&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HY5Z2YF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC8tsUqTZqfDe%2B7Hqn15EammT1DoCnbbmEZkeZ5XgPWzgIhALc%2Ftquj9LgwEvPEcw2tGhTuIq90JByZzC5du9G0m0HRKv8DCH8QABoMNjM3NDIzMTgzODA1Igyl8usGv%2FFaOiRyLxwq3AMmzJB53bAAMhib7dYoYjewZktKy0PNQHjrWU%2BbcK%2B7l9HQ7nY7HgY5DAju02FcaT0yLlOl5wELPf0lcOAxxJ5ZzUhqZChx%2FrxJDHw5wiGyDSnxCLouqaGQqWydz3LnKCwpoQgN0DRaW3daJDaYNT162qRf%2B9NHHKXDg7VUKguCu8MnErRdv2cYrYinaw1oSx4kfSfyKySw%2BnbzxYzcCfesH2PNPToyH7aCw0asntncpF9ocXwc8tCVTDcmqCk1192%2BGgypkxJLvR09%2BZd1ONaC%2FzvFH2TrxXQuPX7Nms8FUbvbfIYluZmeZBbu6tsI2Dna2FhwScLi7OaXWXVXLrldxQbqlDrJklwQ2%2F6e%2BwhiVgWIM93e68hoAEjg6zQvOqIA5pAoRaGvDZqD18CIo59eDCXZ7PlNTik411iZFUsvSEu6vA3C%2Fi31Z2fntMLCXA94rjBj3ToApYO0uYMBoLoiGDpcx%2F5tov8%2Fj94uYZncYK0c%2BSQBr%2BrNXyCGnetiXSbXPh3q5e%2BLIXFj34TGgXosb5%2B9Wpx8o1tQ2EISRwqBlIhr9p2iomxmcGHA3HWCVVBDsfKvqHEpWkjI9p1VJFuLxR7ovfgc9%2BUq5Bzhw1bHOwCeXSKhPJErOxeoHDDgseW8BjqkAQTClA1tyUUBVuBjzPNktGUPX4T6PkYW8VB3YvxpG22IFle22UkFzT4XabB4RbJukop8%2BVw2aqrJamqrfa38ow6dG0WrpXCtO%2BfcAo%2FscgaQf1wUc9Gj4A6FT9MESAaEJ66KKOMBitEdjABPtxwDqjLazfqCLx2N8kBLPVJ12YtUELjMLsJEE4fvhANeBZ2enRsNCBVReHK5TSsvUK3QAp7FNnsj&X-Amz-Signature=06820b8185c2969b00c8e1941dd5083a29b2c985e4252576ff41b044c961a91a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HY5Z2YF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC8tsUqTZqfDe%2B7Hqn15EammT1DoCnbbmEZkeZ5XgPWzgIhALc%2Ftquj9LgwEvPEcw2tGhTuIq90JByZzC5du9G0m0HRKv8DCH8QABoMNjM3NDIzMTgzODA1Igyl8usGv%2FFaOiRyLxwq3AMmzJB53bAAMhib7dYoYjewZktKy0PNQHjrWU%2BbcK%2B7l9HQ7nY7HgY5DAju02FcaT0yLlOl5wELPf0lcOAxxJ5ZzUhqZChx%2FrxJDHw5wiGyDSnxCLouqaGQqWydz3LnKCwpoQgN0DRaW3daJDaYNT162qRf%2B9NHHKXDg7VUKguCu8MnErRdv2cYrYinaw1oSx4kfSfyKySw%2BnbzxYzcCfesH2PNPToyH7aCw0asntncpF9ocXwc8tCVTDcmqCk1192%2BGgypkxJLvR09%2BZd1ONaC%2FzvFH2TrxXQuPX7Nms8FUbvbfIYluZmeZBbu6tsI2Dna2FhwScLi7OaXWXVXLrldxQbqlDrJklwQ2%2F6e%2BwhiVgWIM93e68hoAEjg6zQvOqIA5pAoRaGvDZqD18CIo59eDCXZ7PlNTik411iZFUsvSEu6vA3C%2Fi31Z2fntMLCXA94rjBj3ToApYO0uYMBoLoiGDpcx%2F5tov8%2Fj94uYZncYK0c%2BSQBr%2BrNXyCGnetiXSbXPh3q5e%2BLIXFj34TGgXosb5%2B9Wpx8o1tQ2EISRwqBlIhr9p2iomxmcGHA3HWCVVBDsfKvqHEpWkjI9p1VJFuLxR7ovfgc9%2BUq5Bzhw1bHOwCeXSKhPJErOxeoHDDgseW8BjqkAQTClA1tyUUBVuBjzPNktGUPX4T6PkYW8VB3YvxpG22IFle22UkFzT4XabB4RbJukop8%2BVw2aqrJamqrfa38ow6dG0WrpXCtO%2BfcAo%2FscgaQf1wUc9Gj4A6FT9MESAaEJ66KKOMBitEdjABPtxwDqjLazfqCLx2N8kBLPVJ12YtUELjMLsJEE4fvhANeBZ2enRsNCBVReHK5TSsvUK3QAp7FNnsj&X-Amz-Signature=0321d8a3eef6bde6f044dff83ce24cacaa19a7c2104276cf0c9d81fe4944bf86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HY5Z2YF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC8tsUqTZqfDe%2B7Hqn15EammT1DoCnbbmEZkeZ5XgPWzgIhALc%2Ftquj9LgwEvPEcw2tGhTuIq90JByZzC5du9G0m0HRKv8DCH8QABoMNjM3NDIzMTgzODA1Igyl8usGv%2FFaOiRyLxwq3AMmzJB53bAAMhib7dYoYjewZktKy0PNQHjrWU%2BbcK%2B7l9HQ7nY7HgY5DAju02FcaT0yLlOl5wELPf0lcOAxxJ5ZzUhqZChx%2FrxJDHw5wiGyDSnxCLouqaGQqWydz3LnKCwpoQgN0DRaW3daJDaYNT162qRf%2B9NHHKXDg7VUKguCu8MnErRdv2cYrYinaw1oSx4kfSfyKySw%2BnbzxYzcCfesH2PNPToyH7aCw0asntncpF9ocXwc8tCVTDcmqCk1192%2BGgypkxJLvR09%2BZd1ONaC%2FzvFH2TrxXQuPX7Nms8FUbvbfIYluZmeZBbu6tsI2Dna2FhwScLi7OaXWXVXLrldxQbqlDrJklwQ2%2F6e%2BwhiVgWIM93e68hoAEjg6zQvOqIA5pAoRaGvDZqD18CIo59eDCXZ7PlNTik411iZFUsvSEu6vA3C%2Fi31Z2fntMLCXA94rjBj3ToApYO0uYMBoLoiGDpcx%2F5tov8%2Fj94uYZncYK0c%2BSQBr%2BrNXyCGnetiXSbXPh3q5e%2BLIXFj34TGgXosb5%2B9Wpx8o1tQ2EISRwqBlIhr9p2iomxmcGHA3HWCVVBDsfKvqHEpWkjI9p1VJFuLxR7ovfgc9%2BUq5Bzhw1bHOwCeXSKhPJErOxeoHDDgseW8BjqkAQTClA1tyUUBVuBjzPNktGUPX4T6PkYW8VB3YvxpG22IFle22UkFzT4XabB4RbJukop8%2BVw2aqrJamqrfa38ow6dG0WrpXCtO%2BfcAo%2FscgaQf1wUc9Gj4A6FT9MESAaEJ66KKOMBitEdjABPtxwDqjLazfqCLx2N8kBLPVJ12YtUELjMLsJEE4fvhANeBZ2enRsNCBVReHK5TSsvUK3QAp7FNnsj&X-Amz-Signature=1ac4cfe0c594f2c553e3cda1b6e5e41d0b34ff23c68d738c23a4818d61cdaa4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HY5Z2YF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC8tsUqTZqfDe%2B7Hqn15EammT1DoCnbbmEZkeZ5XgPWzgIhALc%2Ftquj9LgwEvPEcw2tGhTuIq90JByZzC5du9G0m0HRKv8DCH8QABoMNjM3NDIzMTgzODA1Igyl8usGv%2FFaOiRyLxwq3AMmzJB53bAAMhib7dYoYjewZktKy0PNQHjrWU%2BbcK%2B7l9HQ7nY7HgY5DAju02FcaT0yLlOl5wELPf0lcOAxxJ5ZzUhqZChx%2FrxJDHw5wiGyDSnxCLouqaGQqWydz3LnKCwpoQgN0DRaW3daJDaYNT162qRf%2B9NHHKXDg7VUKguCu8MnErRdv2cYrYinaw1oSx4kfSfyKySw%2BnbzxYzcCfesH2PNPToyH7aCw0asntncpF9ocXwc8tCVTDcmqCk1192%2BGgypkxJLvR09%2BZd1ONaC%2FzvFH2TrxXQuPX7Nms8FUbvbfIYluZmeZBbu6tsI2Dna2FhwScLi7OaXWXVXLrldxQbqlDrJklwQ2%2F6e%2BwhiVgWIM93e68hoAEjg6zQvOqIA5pAoRaGvDZqD18CIo59eDCXZ7PlNTik411iZFUsvSEu6vA3C%2Fi31Z2fntMLCXA94rjBj3ToApYO0uYMBoLoiGDpcx%2F5tov8%2Fj94uYZncYK0c%2BSQBr%2BrNXyCGnetiXSbXPh3q5e%2BLIXFj34TGgXosb5%2B9Wpx8o1tQ2EISRwqBlIhr9p2iomxmcGHA3HWCVVBDsfKvqHEpWkjI9p1VJFuLxR7ovfgc9%2BUq5Bzhw1bHOwCeXSKhPJErOxeoHDDgseW8BjqkAQTClA1tyUUBVuBjzPNktGUPX4T6PkYW8VB3YvxpG22IFle22UkFzT4XabB4RbJukop8%2BVw2aqrJamqrfa38ow6dG0WrpXCtO%2BfcAo%2FscgaQf1wUc9Gj4A6FT9MESAaEJ66KKOMBitEdjABPtxwDqjLazfqCLx2N8kBLPVJ12YtUELjMLsJEE4fvhANeBZ2enRsNCBVReHK5TSsvUK3QAp7FNnsj&X-Amz-Signature=70a054daa074a59721d7336f589fa121cc7ab4635005cf203eeea52e5293985d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
