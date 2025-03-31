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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ245BT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDwVTbnS4EXK%2Br1Qcb5iWKzSPK1KBgFPslOeCs6hfPcDgIhANsiolZ5LY%2F56UHxDpj55bEJwVy4m2YiVWjavB9K7aKLKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL%2FKI67ocvUCjIpa4q3AN2JnxHgd4XxxScyawBj9DkMqJg9LWgZXYb8siNlcUh4YlvrFRKy8B1oEDaRXSrBvPpyeTjVJ7lCvdKtWS91NIK1EtEQVk9Jpeaoy2sbRFTb8UzM75cWbmVqU4KWQMRjfZWE%2B80zgFkJudDiEmDqRjHV5TBt8sO9rBAoLvzptU2cP1pIZgZ0pthK7%2Bh5f615N0gZlaoaMB1KkvV%2F4LN%2Fq10lvjKaSFHYETb78gG%2BkuuqaN7eDY7%2BrII%2FUOZdkWuqfWVeuF71DXsEmXd9Y92Ag%2BCurCl5U4Zp9s9bujfrktN59Y312QeOl82k%2BYTw99Xohu94daBjvKwpsAyo%2FPinEuBNHGV07lON2e0XEShtACyguNxWvWjl6WVZg5X%2FPdJCGpk1KQChInDrz1rsW6NqbRbFcqUECxsXbtiQMEo4ty6ClhELU5PZvzOKxFs%2BMS%2F7ZtJ0L6p8W8nccoG5sWG0JHtYy3i6LOvbX3NkZAIEX7t4yKqs7en3Gwvy3aSOVnPRTYXjbfWB9PSmPr8%2FwU5OmA%2BI9JhkA1C8ayOzAEHGzRIirKq54%2Bd090eZbCodAQ8nwvF774oEX%2BpRcpzCDmbeMJ2zinSl1fJXHD96uyy%2FPhe8IwhUhsBOOd97p27rzChzKm%2FBjqkASiM0uepT1NidU6%2BLjMVHFd%2F8POmDWStABhOiq2LdCUZxwZVVcwc5OXQlNHs7LSMRFL2KyBzH%2BQvQHTKmyG8z9QV2u0ly%2BU%2Fn33LytiQO16sh5CF7SggQmPji1e12TEqXV%2BpS%2FgjmT0XT5qQabxETTKDbq47pLOgdXES9X3Au7%2FBhJr%2F59J0qod0o4%2FYMt0JtwXH0FMFiZtg4yK00lHlHVtZeAkd&X-Amz-Signature=7574d2567dbe401495ccbfa5773a532d32142b9b308e35cf38688caa08d7fb04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ245BT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDwVTbnS4EXK%2Br1Qcb5iWKzSPK1KBgFPslOeCs6hfPcDgIhANsiolZ5LY%2F56UHxDpj55bEJwVy4m2YiVWjavB9K7aKLKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL%2FKI67ocvUCjIpa4q3AN2JnxHgd4XxxScyawBj9DkMqJg9LWgZXYb8siNlcUh4YlvrFRKy8B1oEDaRXSrBvPpyeTjVJ7lCvdKtWS91NIK1EtEQVk9Jpeaoy2sbRFTb8UzM75cWbmVqU4KWQMRjfZWE%2B80zgFkJudDiEmDqRjHV5TBt8sO9rBAoLvzptU2cP1pIZgZ0pthK7%2Bh5f615N0gZlaoaMB1KkvV%2F4LN%2Fq10lvjKaSFHYETb78gG%2BkuuqaN7eDY7%2BrII%2FUOZdkWuqfWVeuF71DXsEmXd9Y92Ag%2BCurCl5U4Zp9s9bujfrktN59Y312QeOl82k%2BYTw99Xohu94daBjvKwpsAyo%2FPinEuBNHGV07lON2e0XEShtACyguNxWvWjl6WVZg5X%2FPdJCGpk1KQChInDrz1rsW6NqbRbFcqUECxsXbtiQMEo4ty6ClhELU5PZvzOKxFs%2BMS%2F7ZtJ0L6p8W8nccoG5sWG0JHtYy3i6LOvbX3NkZAIEX7t4yKqs7en3Gwvy3aSOVnPRTYXjbfWB9PSmPr8%2FwU5OmA%2BI9JhkA1C8ayOzAEHGzRIirKq54%2Bd090eZbCodAQ8nwvF774oEX%2BpRcpzCDmbeMJ2zinSl1fJXHD96uyy%2FPhe8IwhUhsBOOd97p27rzChzKm%2FBjqkASiM0uepT1NidU6%2BLjMVHFd%2F8POmDWStABhOiq2LdCUZxwZVVcwc5OXQlNHs7LSMRFL2KyBzH%2BQvQHTKmyG8z9QV2u0ly%2BU%2Fn33LytiQO16sh5CF7SggQmPji1e12TEqXV%2BpS%2FgjmT0XT5qQabxETTKDbq47pLOgdXES9X3Au7%2FBhJr%2F59J0qod0o4%2FYMt0JtwXH0FMFiZtg4yK00lHlHVtZeAkd&X-Amz-Signature=da3bd69b13f7fd45b7d1573ae670f9d6cc1b96f9807c1d898344565098825324&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ245BT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDwVTbnS4EXK%2Br1Qcb5iWKzSPK1KBgFPslOeCs6hfPcDgIhANsiolZ5LY%2F56UHxDpj55bEJwVy4m2YiVWjavB9K7aKLKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL%2FKI67ocvUCjIpa4q3AN2JnxHgd4XxxScyawBj9DkMqJg9LWgZXYb8siNlcUh4YlvrFRKy8B1oEDaRXSrBvPpyeTjVJ7lCvdKtWS91NIK1EtEQVk9Jpeaoy2sbRFTb8UzM75cWbmVqU4KWQMRjfZWE%2B80zgFkJudDiEmDqRjHV5TBt8sO9rBAoLvzptU2cP1pIZgZ0pthK7%2Bh5f615N0gZlaoaMB1KkvV%2F4LN%2Fq10lvjKaSFHYETb78gG%2BkuuqaN7eDY7%2BrII%2FUOZdkWuqfWVeuF71DXsEmXd9Y92Ag%2BCurCl5U4Zp9s9bujfrktN59Y312QeOl82k%2BYTw99Xohu94daBjvKwpsAyo%2FPinEuBNHGV07lON2e0XEShtACyguNxWvWjl6WVZg5X%2FPdJCGpk1KQChInDrz1rsW6NqbRbFcqUECxsXbtiQMEo4ty6ClhELU5PZvzOKxFs%2BMS%2F7ZtJ0L6p8W8nccoG5sWG0JHtYy3i6LOvbX3NkZAIEX7t4yKqs7en3Gwvy3aSOVnPRTYXjbfWB9PSmPr8%2FwU5OmA%2BI9JhkA1C8ayOzAEHGzRIirKq54%2Bd090eZbCodAQ8nwvF774oEX%2BpRcpzCDmbeMJ2zinSl1fJXHD96uyy%2FPhe8IwhUhsBOOd97p27rzChzKm%2FBjqkASiM0uepT1NidU6%2BLjMVHFd%2F8POmDWStABhOiq2LdCUZxwZVVcwc5OXQlNHs7LSMRFL2KyBzH%2BQvQHTKmyG8z9QV2u0ly%2BU%2Fn33LytiQO16sh5CF7SggQmPji1e12TEqXV%2BpS%2FgjmT0XT5qQabxETTKDbq47pLOgdXES9X3Au7%2FBhJr%2F59J0qod0o4%2FYMt0JtwXH0FMFiZtg4yK00lHlHVtZeAkd&X-Amz-Signature=d39cffbc3a88fe3eabd56946113d5a6a86948e00f796d3f60a4a6731c32ca684&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ245BT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDwVTbnS4EXK%2Br1Qcb5iWKzSPK1KBgFPslOeCs6hfPcDgIhANsiolZ5LY%2F56UHxDpj55bEJwVy4m2YiVWjavB9K7aKLKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL%2FKI67ocvUCjIpa4q3AN2JnxHgd4XxxScyawBj9DkMqJg9LWgZXYb8siNlcUh4YlvrFRKy8B1oEDaRXSrBvPpyeTjVJ7lCvdKtWS91NIK1EtEQVk9Jpeaoy2sbRFTb8UzM75cWbmVqU4KWQMRjfZWE%2B80zgFkJudDiEmDqRjHV5TBt8sO9rBAoLvzptU2cP1pIZgZ0pthK7%2Bh5f615N0gZlaoaMB1KkvV%2F4LN%2Fq10lvjKaSFHYETb78gG%2BkuuqaN7eDY7%2BrII%2FUOZdkWuqfWVeuF71DXsEmXd9Y92Ag%2BCurCl5U4Zp9s9bujfrktN59Y312QeOl82k%2BYTw99Xohu94daBjvKwpsAyo%2FPinEuBNHGV07lON2e0XEShtACyguNxWvWjl6WVZg5X%2FPdJCGpk1KQChInDrz1rsW6NqbRbFcqUECxsXbtiQMEo4ty6ClhELU5PZvzOKxFs%2BMS%2F7ZtJ0L6p8W8nccoG5sWG0JHtYy3i6LOvbX3NkZAIEX7t4yKqs7en3Gwvy3aSOVnPRTYXjbfWB9PSmPr8%2FwU5OmA%2BI9JhkA1C8ayOzAEHGzRIirKq54%2Bd090eZbCodAQ8nwvF774oEX%2BpRcpzCDmbeMJ2zinSl1fJXHD96uyy%2FPhe8IwhUhsBOOd97p27rzChzKm%2FBjqkASiM0uepT1NidU6%2BLjMVHFd%2F8POmDWStABhOiq2LdCUZxwZVVcwc5OXQlNHs7LSMRFL2KyBzH%2BQvQHTKmyG8z9QV2u0ly%2BU%2Fn33LytiQO16sh5CF7SggQmPji1e12TEqXV%2BpS%2FgjmT0XT5qQabxETTKDbq47pLOgdXES9X3Au7%2FBhJr%2F59J0qod0o4%2FYMt0JtwXH0FMFiZtg4yK00lHlHVtZeAkd&X-Amz-Signature=aca6bbaa6382eae04ee9637e49613b36c1d12228ffddfc8bfd51fe869d0ee64d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ245BT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDwVTbnS4EXK%2Br1Qcb5iWKzSPK1KBgFPslOeCs6hfPcDgIhANsiolZ5LY%2F56UHxDpj55bEJwVy4m2YiVWjavB9K7aKLKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL%2FKI67ocvUCjIpa4q3AN2JnxHgd4XxxScyawBj9DkMqJg9LWgZXYb8siNlcUh4YlvrFRKy8B1oEDaRXSrBvPpyeTjVJ7lCvdKtWS91NIK1EtEQVk9Jpeaoy2sbRFTb8UzM75cWbmVqU4KWQMRjfZWE%2B80zgFkJudDiEmDqRjHV5TBt8sO9rBAoLvzptU2cP1pIZgZ0pthK7%2Bh5f615N0gZlaoaMB1KkvV%2F4LN%2Fq10lvjKaSFHYETb78gG%2BkuuqaN7eDY7%2BrII%2FUOZdkWuqfWVeuF71DXsEmXd9Y92Ag%2BCurCl5U4Zp9s9bujfrktN59Y312QeOl82k%2BYTw99Xohu94daBjvKwpsAyo%2FPinEuBNHGV07lON2e0XEShtACyguNxWvWjl6WVZg5X%2FPdJCGpk1KQChInDrz1rsW6NqbRbFcqUECxsXbtiQMEo4ty6ClhELU5PZvzOKxFs%2BMS%2F7ZtJ0L6p8W8nccoG5sWG0JHtYy3i6LOvbX3NkZAIEX7t4yKqs7en3Gwvy3aSOVnPRTYXjbfWB9PSmPr8%2FwU5OmA%2BI9JhkA1C8ayOzAEHGzRIirKq54%2Bd090eZbCodAQ8nwvF774oEX%2BpRcpzCDmbeMJ2zinSl1fJXHD96uyy%2FPhe8IwhUhsBOOd97p27rzChzKm%2FBjqkASiM0uepT1NidU6%2BLjMVHFd%2F8POmDWStABhOiq2LdCUZxwZVVcwc5OXQlNHs7LSMRFL2KyBzH%2BQvQHTKmyG8z9QV2u0ly%2BU%2Fn33LytiQO16sh5CF7SggQmPji1e12TEqXV%2BpS%2FgjmT0XT5qQabxETTKDbq47pLOgdXES9X3Au7%2FBhJr%2F59J0qod0o4%2FYMt0JtwXH0FMFiZtg4yK00lHlHVtZeAkd&X-Amz-Signature=4e2dad39805086550725117477ddd451d49ea168a252e238715dc06c6076ca06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ245BT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDwVTbnS4EXK%2Br1Qcb5iWKzSPK1KBgFPslOeCs6hfPcDgIhANsiolZ5LY%2F56UHxDpj55bEJwVy4m2YiVWjavB9K7aKLKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL%2FKI67ocvUCjIpa4q3AN2JnxHgd4XxxScyawBj9DkMqJg9LWgZXYb8siNlcUh4YlvrFRKy8B1oEDaRXSrBvPpyeTjVJ7lCvdKtWS91NIK1EtEQVk9Jpeaoy2sbRFTb8UzM75cWbmVqU4KWQMRjfZWE%2B80zgFkJudDiEmDqRjHV5TBt8sO9rBAoLvzptU2cP1pIZgZ0pthK7%2Bh5f615N0gZlaoaMB1KkvV%2F4LN%2Fq10lvjKaSFHYETb78gG%2BkuuqaN7eDY7%2BrII%2FUOZdkWuqfWVeuF71DXsEmXd9Y92Ag%2BCurCl5U4Zp9s9bujfrktN59Y312QeOl82k%2BYTw99Xohu94daBjvKwpsAyo%2FPinEuBNHGV07lON2e0XEShtACyguNxWvWjl6WVZg5X%2FPdJCGpk1KQChInDrz1rsW6NqbRbFcqUECxsXbtiQMEo4ty6ClhELU5PZvzOKxFs%2BMS%2F7ZtJ0L6p8W8nccoG5sWG0JHtYy3i6LOvbX3NkZAIEX7t4yKqs7en3Gwvy3aSOVnPRTYXjbfWB9PSmPr8%2FwU5OmA%2BI9JhkA1C8ayOzAEHGzRIirKq54%2Bd090eZbCodAQ8nwvF774oEX%2BpRcpzCDmbeMJ2zinSl1fJXHD96uyy%2FPhe8IwhUhsBOOd97p27rzChzKm%2FBjqkASiM0uepT1NidU6%2BLjMVHFd%2F8POmDWStABhOiq2LdCUZxwZVVcwc5OXQlNHs7LSMRFL2KyBzH%2BQvQHTKmyG8z9QV2u0ly%2BU%2Fn33LytiQO16sh5CF7SggQmPji1e12TEqXV%2BpS%2FgjmT0XT5qQabxETTKDbq47pLOgdXES9X3Au7%2FBhJr%2F59J0qod0o4%2FYMt0JtwXH0FMFiZtg4yK00lHlHVtZeAkd&X-Amz-Signature=70bf6d2bb127b12f659ddf6be98c8010d98b6953971c262a4092397b24addf16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ245BT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDwVTbnS4EXK%2Br1Qcb5iWKzSPK1KBgFPslOeCs6hfPcDgIhANsiolZ5LY%2F56UHxDpj55bEJwVy4m2YiVWjavB9K7aKLKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL%2FKI67ocvUCjIpa4q3AN2JnxHgd4XxxScyawBj9DkMqJg9LWgZXYb8siNlcUh4YlvrFRKy8B1oEDaRXSrBvPpyeTjVJ7lCvdKtWS91NIK1EtEQVk9Jpeaoy2sbRFTb8UzM75cWbmVqU4KWQMRjfZWE%2B80zgFkJudDiEmDqRjHV5TBt8sO9rBAoLvzptU2cP1pIZgZ0pthK7%2Bh5f615N0gZlaoaMB1KkvV%2F4LN%2Fq10lvjKaSFHYETb78gG%2BkuuqaN7eDY7%2BrII%2FUOZdkWuqfWVeuF71DXsEmXd9Y92Ag%2BCurCl5U4Zp9s9bujfrktN59Y312QeOl82k%2BYTw99Xohu94daBjvKwpsAyo%2FPinEuBNHGV07lON2e0XEShtACyguNxWvWjl6WVZg5X%2FPdJCGpk1KQChInDrz1rsW6NqbRbFcqUECxsXbtiQMEo4ty6ClhELU5PZvzOKxFs%2BMS%2F7ZtJ0L6p8W8nccoG5sWG0JHtYy3i6LOvbX3NkZAIEX7t4yKqs7en3Gwvy3aSOVnPRTYXjbfWB9PSmPr8%2FwU5OmA%2BI9JhkA1C8ayOzAEHGzRIirKq54%2Bd090eZbCodAQ8nwvF774oEX%2BpRcpzCDmbeMJ2zinSl1fJXHD96uyy%2FPhe8IwhUhsBOOd97p27rzChzKm%2FBjqkASiM0uepT1NidU6%2BLjMVHFd%2F8POmDWStABhOiq2LdCUZxwZVVcwc5OXQlNHs7LSMRFL2KyBzH%2BQvQHTKmyG8z9QV2u0ly%2BU%2Fn33LytiQO16sh5CF7SggQmPji1e12TEqXV%2BpS%2FgjmT0XT5qQabxETTKDbq47pLOgdXES9X3Au7%2FBhJr%2F59J0qod0o4%2FYMt0JtwXH0FMFiZtg4yK00lHlHVtZeAkd&X-Amz-Signature=7e850f6a507bf54aa3fda8b852cbf6d29e0dba1f048451070e9d1d95056eb27a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ245BT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDwVTbnS4EXK%2Br1Qcb5iWKzSPK1KBgFPslOeCs6hfPcDgIhANsiolZ5LY%2F56UHxDpj55bEJwVy4m2YiVWjavB9K7aKLKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL%2FKI67ocvUCjIpa4q3AN2JnxHgd4XxxScyawBj9DkMqJg9LWgZXYb8siNlcUh4YlvrFRKy8B1oEDaRXSrBvPpyeTjVJ7lCvdKtWS91NIK1EtEQVk9Jpeaoy2sbRFTb8UzM75cWbmVqU4KWQMRjfZWE%2B80zgFkJudDiEmDqRjHV5TBt8sO9rBAoLvzptU2cP1pIZgZ0pthK7%2Bh5f615N0gZlaoaMB1KkvV%2F4LN%2Fq10lvjKaSFHYETb78gG%2BkuuqaN7eDY7%2BrII%2FUOZdkWuqfWVeuF71DXsEmXd9Y92Ag%2BCurCl5U4Zp9s9bujfrktN59Y312QeOl82k%2BYTw99Xohu94daBjvKwpsAyo%2FPinEuBNHGV07lON2e0XEShtACyguNxWvWjl6WVZg5X%2FPdJCGpk1KQChInDrz1rsW6NqbRbFcqUECxsXbtiQMEo4ty6ClhELU5PZvzOKxFs%2BMS%2F7ZtJ0L6p8W8nccoG5sWG0JHtYy3i6LOvbX3NkZAIEX7t4yKqs7en3Gwvy3aSOVnPRTYXjbfWB9PSmPr8%2FwU5OmA%2BI9JhkA1C8ayOzAEHGzRIirKq54%2Bd090eZbCodAQ8nwvF774oEX%2BpRcpzCDmbeMJ2zinSl1fJXHD96uyy%2FPhe8IwhUhsBOOd97p27rzChzKm%2FBjqkASiM0uepT1NidU6%2BLjMVHFd%2F8POmDWStABhOiq2LdCUZxwZVVcwc5OXQlNHs7LSMRFL2KyBzH%2BQvQHTKmyG8z9QV2u0ly%2BU%2Fn33LytiQO16sh5CF7SggQmPji1e12TEqXV%2BpS%2FgjmT0XT5qQabxETTKDbq47pLOgdXES9X3Au7%2FBhJr%2F59J0qod0o4%2FYMt0JtwXH0FMFiZtg4yK00lHlHVtZeAkd&X-Amz-Signature=a4ebe176da556126923fac084a9c8df221fb65d8727c3c1dcd577fa74d5306a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
