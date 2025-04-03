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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4B7B37%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5GxDt%2FYxajxS1D5XEG2MiY%2B4Z2%2Br8HZrRss1hiQ%2BeAIhAMI9oAgYCcAdir4WvgOt8TD3CyoHeUtWF0yU3Ova0ZtLKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQkE5qRKahknbFY0q3AM6DtjR8pA5THvRqSibbq8BUD4svqVFDxG0rNLtd%2FLJSJWNb0WCOZVIL98MTRwVS1gRFz097k7bYF8baYWdTkJ3mYGSjqWi4C90jbY2GB5lE3REr1D2RTDQZlauHa0tI9%2Bo9SMTo46lrvLcurmCR6imOUcV5silvj5u0sANFol5nMpbvidYPAh8Xsdp%2FljSfMSpTFhjeIfjFYaxxYwH8cGQ%2BFLWhtUW%2BdK2cQvH4JG2wMFrBQSWXF0eZGYnH9xKS5CGyVYILTDZO0FU%2FaBZw0z%2BrdlrMQFLpGOQZ%2Fs6a0C1BwMce%2Fl9YY3s2OFTg52nKmrJQAz1w0qnz5NrZ8mS0vWN9HMvlNyvmUdQ4ZAJhvvKumRlOzWHhA%2BK4eReFLfKX%2BGIWuJCmMLg4HxSZurmm2B5z3k21Yhnz8JDRmcAQZNprYlu5%2Fob8Z%2FmA7xf4w7%2F%2BVokjollugtozWe9IHdDUQ0wKRwF3%2FNIE5QlzNfv1yJoR0pKJVxXWYooRv%2F3tYXuTvjDy6oFGt%2BbzJH4ERv9FLKo%2FMf%2FkEK04tP0uaXNVPQlCHuvN5yMas2rLG9dmJc3ctaL%2B4T0lebxZSaXxAa%2FlAshGE%2Fwpt2aqTOpzUVjt%2FystBCQSmJxPeVkO0shFzC3mLq%2FBjqkAZyTL%2BgCbM7fb5f0g7Vck4pdE6iR2dfPLFpObYJA0nDGLsMh8StmVCktv7i%2Fb68WzbRC37xDg%2FcRKrv6PfoIWuI5R0aPPjDwObjPSPOWUew7IIyXVwjF6HqZm%2BvQxIEYyJbt0ZcTWhxHvBHuBOPr76LQc45mt1VmmujehfnQB%2FRIOEOoXbaL70BgkKUJqHlZ8XaEU7weeAMla3%2BObwe8ww2FkieR&X-Amz-Signature=5c3e3d614bd666d20d28e04ce7e70d8651f1f32a0955d75ab09314f59b40138a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4B7B37%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5GxDt%2FYxajxS1D5XEG2MiY%2B4Z2%2Br8HZrRss1hiQ%2BeAIhAMI9oAgYCcAdir4WvgOt8TD3CyoHeUtWF0yU3Ova0ZtLKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQkE5qRKahknbFY0q3AM6DtjR8pA5THvRqSibbq8BUD4svqVFDxG0rNLtd%2FLJSJWNb0WCOZVIL98MTRwVS1gRFz097k7bYF8baYWdTkJ3mYGSjqWi4C90jbY2GB5lE3REr1D2RTDQZlauHa0tI9%2Bo9SMTo46lrvLcurmCR6imOUcV5silvj5u0sANFol5nMpbvidYPAh8Xsdp%2FljSfMSpTFhjeIfjFYaxxYwH8cGQ%2BFLWhtUW%2BdK2cQvH4JG2wMFrBQSWXF0eZGYnH9xKS5CGyVYILTDZO0FU%2FaBZw0z%2BrdlrMQFLpGOQZ%2Fs6a0C1BwMce%2Fl9YY3s2OFTg52nKmrJQAz1w0qnz5NrZ8mS0vWN9HMvlNyvmUdQ4ZAJhvvKumRlOzWHhA%2BK4eReFLfKX%2BGIWuJCmMLg4HxSZurmm2B5z3k21Yhnz8JDRmcAQZNprYlu5%2Fob8Z%2FmA7xf4w7%2F%2BVokjollugtozWe9IHdDUQ0wKRwF3%2FNIE5QlzNfv1yJoR0pKJVxXWYooRv%2F3tYXuTvjDy6oFGt%2BbzJH4ERv9FLKo%2FMf%2FkEK04tP0uaXNVPQlCHuvN5yMas2rLG9dmJc3ctaL%2B4T0lebxZSaXxAa%2FlAshGE%2Fwpt2aqTOpzUVjt%2FystBCQSmJxPeVkO0shFzC3mLq%2FBjqkAZyTL%2BgCbM7fb5f0g7Vck4pdE6iR2dfPLFpObYJA0nDGLsMh8StmVCktv7i%2Fb68WzbRC37xDg%2FcRKrv6PfoIWuI5R0aPPjDwObjPSPOWUew7IIyXVwjF6HqZm%2BvQxIEYyJbt0ZcTWhxHvBHuBOPr76LQc45mt1VmmujehfnQB%2FRIOEOoXbaL70BgkKUJqHlZ8XaEU7weeAMla3%2BObwe8ww2FkieR&X-Amz-Signature=ae87c1cf260e48a0df864466b214298b06ce6cdd01b08452fd2ad6aa84c4706b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4B7B37%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5GxDt%2FYxajxS1D5XEG2MiY%2B4Z2%2Br8HZrRss1hiQ%2BeAIhAMI9oAgYCcAdir4WvgOt8TD3CyoHeUtWF0yU3Ova0ZtLKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQkE5qRKahknbFY0q3AM6DtjR8pA5THvRqSibbq8BUD4svqVFDxG0rNLtd%2FLJSJWNb0WCOZVIL98MTRwVS1gRFz097k7bYF8baYWdTkJ3mYGSjqWi4C90jbY2GB5lE3REr1D2RTDQZlauHa0tI9%2Bo9SMTo46lrvLcurmCR6imOUcV5silvj5u0sANFol5nMpbvidYPAh8Xsdp%2FljSfMSpTFhjeIfjFYaxxYwH8cGQ%2BFLWhtUW%2BdK2cQvH4JG2wMFrBQSWXF0eZGYnH9xKS5CGyVYILTDZO0FU%2FaBZw0z%2BrdlrMQFLpGOQZ%2Fs6a0C1BwMce%2Fl9YY3s2OFTg52nKmrJQAz1w0qnz5NrZ8mS0vWN9HMvlNyvmUdQ4ZAJhvvKumRlOzWHhA%2BK4eReFLfKX%2BGIWuJCmMLg4HxSZurmm2B5z3k21Yhnz8JDRmcAQZNprYlu5%2Fob8Z%2FmA7xf4w7%2F%2BVokjollugtozWe9IHdDUQ0wKRwF3%2FNIE5QlzNfv1yJoR0pKJVxXWYooRv%2F3tYXuTvjDy6oFGt%2BbzJH4ERv9FLKo%2FMf%2FkEK04tP0uaXNVPQlCHuvN5yMas2rLG9dmJc3ctaL%2B4T0lebxZSaXxAa%2FlAshGE%2Fwpt2aqTOpzUVjt%2FystBCQSmJxPeVkO0shFzC3mLq%2FBjqkAZyTL%2BgCbM7fb5f0g7Vck4pdE6iR2dfPLFpObYJA0nDGLsMh8StmVCktv7i%2Fb68WzbRC37xDg%2FcRKrv6PfoIWuI5R0aPPjDwObjPSPOWUew7IIyXVwjF6HqZm%2BvQxIEYyJbt0ZcTWhxHvBHuBOPr76LQc45mt1VmmujehfnQB%2FRIOEOoXbaL70BgkKUJqHlZ8XaEU7weeAMla3%2BObwe8ww2FkieR&X-Amz-Signature=a2def4e63b86bbda564d681982aadd397c271715cfacaf8102bedb2f7ac47481&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4B7B37%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5GxDt%2FYxajxS1D5XEG2MiY%2B4Z2%2Br8HZrRss1hiQ%2BeAIhAMI9oAgYCcAdir4WvgOt8TD3CyoHeUtWF0yU3Ova0ZtLKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQkE5qRKahknbFY0q3AM6DtjR8pA5THvRqSibbq8BUD4svqVFDxG0rNLtd%2FLJSJWNb0WCOZVIL98MTRwVS1gRFz097k7bYF8baYWdTkJ3mYGSjqWi4C90jbY2GB5lE3REr1D2RTDQZlauHa0tI9%2Bo9SMTo46lrvLcurmCR6imOUcV5silvj5u0sANFol5nMpbvidYPAh8Xsdp%2FljSfMSpTFhjeIfjFYaxxYwH8cGQ%2BFLWhtUW%2BdK2cQvH4JG2wMFrBQSWXF0eZGYnH9xKS5CGyVYILTDZO0FU%2FaBZw0z%2BrdlrMQFLpGOQZ%2Fs6a0C1BwMce%2Fl9YY3s2OFTg52nKmrJQAz1w0qnz5NrZ8mS0vWN9HMvlNyvmUdQ4ZAJhvvKumRlOzWHhA%2BK4eReFLfKX%2BGIWuJCmMLg4HxSZurmm2B5z3k21Yhnz8JDRmcAQZNprYlu5%2Fob8Z%2FmA7xf4w7%2F%2BVokjollugtozWe9IHdDUQ0wKRwF3%2FNIE5QlzNfv1yJoR0pKJVxXWYooRv%2F3tYXuTvjDy6oFGt%2BbzJH4ERv9FLKo%2FMf%2FkEK04tP0uaXNVPQlCHuvN5yMas2rLG9dmJc3ctaL%2B4T0lebxZSaXxAa%2FlAshGE%2Fwpt2aqTOpzUVjt%2FystBCQSmJxPeVkO0shFzC3mLq%2FBjqkAZyTL%2BgCbM7fb5f0g7Vck4pdE6iR2dfPLFpObYJA0nDGLsMh8StmVCktv7i%2Fb68WzbRC37xDg%2FcRKrv6PfoIWuI5R0aPPjDwObjPSPOWUew7IIyXVwjF6HqZm%2BvQxIEYyJbt0ZcTWhxHvBHuBOPr76LQc45mt1VmmujehfnQB%2FRIOEOoXbaL70BgkKUJqHlZ8XaEU7weeAMla3%2BObwe8ww2FkieR&X-Amz-Signature=362a37e4ab6bef078fae9b061b9e6b52997d879a93a219f6b3cf5600051cca2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4B7B37%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5GxDt%2FYxajxS1D5XEG2MiY%2B4Z2%2Br8HZrRss1hiQ%2BeAIhAMI9oAgYCcAdir4WvgOt8TD3CyoHeUtWF0yU3Ova0ZtLKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQkE5qRKahknbFY0q3AM6DtjR8pA5THvRqSibbq8BUD4svqVFDxG0rNLtd%2FLJSJWNb0WCOZVIL98MTRwVS1gRFz097k7bYF8baYWdTkJ3mYGSjqWi4C90jbY2GB5lE3REr1D2RTDQZlauHa0tI9%2Bo9SMTo46lrvLcurmCR6imOUcV5silvj5u0sANFol5nMpbvidYPAh8Xsdp%2FljSfMSpTFhjeIfjFYaxxYwH8cGQ%2BFLWhtUW%2BdK2cQvH4JG2wMFrBQSWXF0eZGYnH9xKS5CGyVYILTDZO0FU%2FaBZw0z%2BrdlrMQFLpGOQZ%2Fs6a0C1BwMce%2Fl9YY3s2OFTg52nKmrJQAz1w0qnz5NrZ8mS0vWN9HMvlNyvmUdQ4ZAJhvvKumRlOzWHhA%2BK4eReFLfKX%2BGIWuJCmMLg4HxSZurmm2B5z3k21Yhnz8JDRmcAQZNprYlu5%2Fob8Z%2FmA7xf4w7%2F%2BVokjollugtozWe9IHdDUQ0wKRwF3%2FNIE5QlzNfv1yJoR0pKJVxXWYooRv%2F3tYXuTvjDy6oFGt%2BbzJH4ERv9FLKo%2FMf%2FkEK04tP0uaXNVPQlCHuvN5yMas2rLG9dmJc3ctaL%2B4T0lebxZSaXxAa%2FlAshGE%2Fwpt2aqTOpzUVjt%2FystBCQSmJxPeVkO0shFzC3mLq%2FBjqkAZyTL%2BgCbM7fb5f0g7Vck4pdE6iR2dfPLFpObYJA0nDGLsMh8StmVCktv7i%2Fb68WzbRC37xDg%2FcRKrv6PfoIWuI5R0aPPjDwObjPSPOWUew7IIyXVwjF6HqZm%2BvQxIEYyJbt0ZcTWhxHvBHuBOPr76LQc45mt1VmmujehfnQB%2FRIOEOoXbaL70BgkKUJqHlZ8XaEU7weeAMla3%2BObwe8ww2FkieR&X-Amz-Signature=455aa5e9562d6d5171d1dba203992894111099ccad9df7ce99eae9c3e5b5a407&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4B7B37%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5GxDt%2FYxajxS1D5XEG2MiY%2B4Z2%2Br8HZrRss1hiQ%2BeAIhAMI9oAgYCcAdir4WvgOt8TD3CyoHeUtWF0yU3Ova0ZtLKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQkE5qRKahknbFY0q3AM6DtjR8pA5THvRqSibbq8BUD4svqVFDxG0rNLtd%2FLJSJWNb0WCOZVIL98MTRwVS1gRFz097k7bYF8baYWdTkJ3mYGSjqWi4C90jbY2GB5lE3REr1D2RTDQZlauHa0tI9%2Bo9SMTo46lrvLcurmCR6imOUcV5silvj5u0sANFol5nMpbvidYPAh8Xsdp%2FljSfMSpTFhjeIfjFYaxxYwH8cGQ%2BFLWhtUW%2BdK2cQvH4JG2wMFrBQSWXF0eZGYnH9xKS5CGyVYILTDZO0FU%2FaBZw0z%2BrdlrMQFLpGOQZ%2Fs6a0C1BwMce%2Fl9YY3s2OFTg52nKmrJQAz1w0qnz5NrZ8mS0vWN9HMvlNyvmUdQ4ZAJhvvKumRlOzWHhA%2BK4eReFLfKX%2BGIWuJCmMLg4HxSZurmm2B5z3k21Yhnz8JDRmcAQZNprYlu5%2Fob8Z%2FmA7xf4w7%2F%2BVokjollugtozWe9IHdDUQ0wKRwF3%2FNIE5QlzNfv1yJoR0pKJVxXWYooRv%2F3tYXuTvjDy6oFGt%2BbzJH4ERv9FLKo%2FMf%2FkEK04tP0uaXNVPQlCHuvN5yMas2rLG9dmJc3ctaL%2B4T0lebxZSaXxAa%2FlAshGE%2Fwpt2aqTOpzUVjt%2FystBCQSmJxPeVkO0shFzC3mLq%2FBjqkAZyTL%2BgCbM7fb5f0g7Vck4pdE6iR2dfPLFpObYJA0nDGLsMh8StmVCktv7i%2Fb68WzbRC37xDg%2FcRKrv6PfoIWuI5R0aPPjDwObjPSPOWUew7IIyXVwjF6HqZm%2BvQxIEYyJbt0ZcTWhxHvBHuBOPr76LQc45mt1VmmujehfnQB%2FRIOEOoXbaL70BgkKUJqHlZ8XaEU7weeAMla3%2BObwe8ww2FkieR&X-Amz-Signature=04d97d483e5b43f82be91b5b15021b758dff179c5c5ec8bde83f9ba50ac028c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4B7B37%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5GxDt%2FYxajxS1D5XEG2MiY%2B4Z2%2Br8HZrRss1hiQ%2BeAIhAMI9oAgYCcAdir4WvgOt8TD3CyoHeUtWF0yU3Ova0ZtLKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQkE5qRKahknbFY0q3AM6DtjR8pA5THvRqSibbq8BUD4svqVFDxG0rNLtd%2FLJSJWNb0WCOZVIL98MTRwVS1gRFz097k7bYF8baYWdTkJ3mYGSjqWi4C90jbY2GB5lE3REr1D2RTDQZlauHa0tI9%2Bo9SMTo46lrvLcurmCR6imOUcV5silvj5u0sANFol5nMpbvidYPAh8Xsdp%2FljSfMSpTFhjeIfjFYaxxYwH8cGQ%2BFLWhtUW%2BdK2cQvH4JG2wMFrBQSWXF0eZGYnH9xKS5CGyVYILTDZO0FU%2FaBZw0z%2BrdlrMQFLpGOQZ%2Fs6a0C1BwMce%2Fl9YY3s2OFTg52nKmrJQAz1w0qnz5NrZ8mS0vWN9HMvlNyvmUdQ4ZAJhvvKumRlOzWHhA%2BK4eReFLfKX%2BGIWuJCmMLg4HxSZurmm2B5z3k21Yhnz8JDRmcAQZNprYlu5%2Fob8Z%2FmA7xf4w7%2F%2BVokjollugtozWe9IHdDUQ0wKRwF3%2FNIE5QlzNfv1yJoR0pKJVxXWYooRv%2F3tYXuTvjDy6oFGt%2BbzJH4ERv9FLKo%2FMf%2FkEK04tP0uaXNVPQlCHuvN5yMas2rLG9dmJc3ctaL%2B4T0lebxZSaXxAa%2FlAshGE%2Fwpt2aqTOpzUVjt%2FystBCQSmJxPeVkO0shFzC3mLq%2FBjqkAZyTL%2BgCbM7fb5f0g7Vck4pdE6iR2dfPLFpObYJA0nDGLsMh8StmVCktv7i%2Fb68WzbRC37xDg%2FcRKrv6PfoIWuI5R0aPPjDwObjPSPOWUew7IIyXVwjF6HqZm%2BvQxIEYyJbt0ZcTWhxHvBHuBOPr76LQc45mt1VmmujehfnQB%2FRIOEOoXbaL70BgkKUJqHlZ8XaEU7weeAMla3%2BObwe8ww2FkieR&X-Amz-Signature=585e34b0f933f01d9ef0f7239fdf2899baecf0013f94be5f24f3be664e17db1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4B7B37%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5GxDt%2FYxajxS1D5XEG2MiY%2B4Z2%2Br8HZrRss1hiQ%2BeAIhAMI9oAgYCcAdir4WvgOt8TD3CyoHeUtWF0yU3Ova0ZtLKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQkE5qRKahknbFY0q3AM6DtjR8pA5THvRqSibbq8BUD4svqVFDxG0rNLtd%2FLJSJWNb0WCOZVIL98MTRwVS1gRFz097k7bYF8baYWdTkJ3mYGSjqWi4C90jbY2GB5lE3REr1D2RTDQZlauHa0tI9%2Bo9SMTo46lrvLcurmCR6imOUcV5silvj5u0sANFol5nMpbvidYPAh8Xsdp%2FljSfMSpTFhjeIfjFYaxxYwH8cGQ%2BFLWhtUW%2BdK2cQvH4JG2wMFrBQSWXF0eZGYnH9xKS5CGyVYILTDZO0FU%2FaBZw0z%2BrdlrMQFLpGOQZ%2Fs6a0C1BwMce%2Fl9YY3s2OFTg52nKmrJQAz1w0qnz5NrZ8mS0vWN9HMvlNyvmUdQ4ZAJhvvKumRlOzWHhA%2BK4eReFLfKX%2BGIWuJCmMLg4HxSZurmm2B5z3k21Yhnz8JDRmcAQZNprYlu5%2Fob8Z%2FmA7xf4w7%2F%2BVokjollugtozWe9IHdDUQ0wKRwF3%2FNIE5QlzNfv1yJoR0pKJVxXWYooRv%2F3tYXuTvjDy6oFGt%2BbzJH4ERv9FLKo%2FMf%2FkEK04tP0uaXNVPQlCHuvN5yMas2rLG9dmJc3ctaL%2B4T0lebxZSaXxAa%2FlAshGE%2Fwpt2aqTOpzUVjt%2FystBCQSmJxPeVkO0shFzC3mLq%2FBjqkAZyTL%2BgCbM7fb5f0g7Vck4pdE6iR2dfPLFpObYJA0nDGLsMh8StmVCktv7i%2Fb68WzbRC37xDg%2FcRKrv6PfoIWuI5R0aPPjDwObjPSPOWUew7IIyXVwjF6HqZm%2BvQxIEYyJbt0ZcTWhxHvBHuBOPr76LQc45mt1VmmujehfnQB%2FRIOEOoXbaL70BgkKUJqHlZ8XaEU7weeAMla3%2BObwe8ww2FkieR&X-Amz-Signature=09d2f4e3a3b10b2f1354c887808d09dc1cf2e50cc2580e7737a2039a13a9921c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
