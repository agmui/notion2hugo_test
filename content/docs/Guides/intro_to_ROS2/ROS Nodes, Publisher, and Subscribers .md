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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYG6MTR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD8zwUezRN9h7YbuGfhg4RKhAtAaIqd5vRO00DEddOujgIhANUUOrK6PkQMUqBq8rDjonFturzZ1rbtj5QAcXMkEsukKv8DCB4QABoMNjM3NDIzMTgzODA1Igx4I3iLkrw6j5TLBCkq3ANLYDvv13%2FkyfubxXc8quq6YTrWWN4mQ0%2FP3GK3xAd8yd1MTgHfTdm%2BPYw6i0yTK%2F%2BsPEATrfmZUXfTT14QdTDo806Q35ZqJ8EKdoHo5kZJRPNNj0XciSOD7io1ZVp46yfTRlXiKnBCpclq2za9FK%2B8fRxqgTGpdDQEAJK79SzgflInDJmwH2Gml5EcVZyIf35ZhFsLipa4OQzMP1hUM9lPig62ugFYRjGo3qtTsAJqsLaxNZJUABUbVRQrEHvql4JLFcZfAhIwndlzT1vOO3Q2rFcyF%2FQvW6FJbMnp8pDjHOQqkRctPcv9Bvoh5PnfQwxszFX3WjEdnu%2BbcyAYBHe3rPBvuiLzcjnG44DSSSLDvQrxr5TWcM%2FSmSBqxKzqNl4Ouwy1qmGcUt5HonsL39TjSVCmh9jFABKupAKv0URuIAtc%2F5btsSgwwkDLrKO5vh7Hv5YopN3ZvwiQgD%2FX%2FO6YhOUbz0egrEo3mtNc1kSbz29hNQIHshLaKekdRRw2Zz7lAXADinCyZ4jIOt9OlUL9ZUAImN1oNrYzdWiiJon1h2R6%2FUbDqDh2c7pe1Pdix19Ta0MP%2BGwUIiVTCyVHP8STzBBrf7O8aeUMqwJ2l2KSa6KDjvaCzuE%2BW3WUQDDk2oS9BjqkAanu0moSZ5s8Z3oXHwhBN2JVO3PD%2F3A%2BEOZGwIT%2BmaIA0o%2F6sbWDvdDGFxc0TJ9YmUBkei0H5oAC2Ob%2FMm2qWLyfFdIcWUviFc184ImWRZwPfoaXdNtGyESiyzPuu51iutMktPp3EhrG%2F2Q4%2B3ZyQuxYvT8k2G6e6WGtFsB1F8u15tMG0xRzQwoul7meWZcTqTXeMsI%2FnZTMSzXGsGXg7hphtVh7&X-Amz-Signature=a11d65da0b4760219bfb13ea0ab8ec300257e62ebfc90a40ddf7ddfcb72cd32f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYG6MTR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD8zwUezRN9h7YbuGfhg4RKhAtAaIqd5vRO00DEddOujgIhANUUOrK6PkQMUqBq8rDjonFturzZ1rbtj5QAcXMkEsukKv8DCB4QABoMNjM3NDIzMTgzODA1Igx4I3iLkrw6j5TLBCkq3ANLYDvv13%2FkyfubxXc8quq6YTrWWN4mQ0%2FP3GK3xAd8yd1MTgHfTdm%2BPYw6i0yTK%2F%2BsPEATrfmZUXfTT14QdTDo806Q35ZqJ8EKdoHo5kZJRPNNj0XciSOD7io1ZVp46yfTRlXiKnBCpclq2za9FK%2B8fRxqgTGpdDQEAJK79SzgflInDJmwH2Gml5EcVZyIf35ZhFsLipa4OQzMP1hUM9lPig62ugFYRjGo3qtTsAJqsLaxNZJUABUbVRQrEHvql4JLFcZfAhIwndlzT1vOO3Q2rFcyF%2FQvW6FJbMnp8pDjHOQqkRctPcv9Bvoh5PnfQwxszFX3WjEdnu%2BbcyAYBHe3rPBvuiLzcjnG44DSSSLDvQrxr5TWcM%2FSmSBqxKzqNl4Ouwy1qmGcUt5HonsL39TjSVCmh9jFABKupAKv0URuIAtc%2F5btsSgwwkDLrKO5vh7Hv5YopN3ZvwiQgD%2FX%2FO6YhOUbz0egrEo3mtNc1kSbz29hNQIHshLaKekdRRw2Zz7lAXADinCyZ4jIOt9OlUL9ZUAImN1oNrYzdWiiJon1h2R6%2FUbDqDh2c7pe1Pdix19Ta0MP%2BGwUIiVTCyVHP8STzBBrf7O8aeUMqwJ2l2KSa6KDjvaCzuE%2BW3WUQDDk2oS9BjqkAanu0moSZ5s8Z3oXHwhBN2JVO3PD%2F3A%2BEOZGwIT%2BmaIA0o%2F6sbWDvdDGFxc0TJ9YmUBkei0H5oAC2Ob%2FMm2qWLyfFdIcWUviFc184ImWRZwPfoaXdNtGyESiyzPuu51iutMktPp3EhrG%2F2Q4%2B3ZyQuxYvT8k2G6e6WGtFsB1F8u15tMG0xRzQwoul7meWZcTqTXeMsI%2FnZTMSzXGsGXg7hphtVh7&X-Amz-Signature=67d923434dd42b9acbf9b03335a80169d3e925fa536ce58c7c9012dc740e0cdb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYG6MTR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD8zwUezRN9h7YbuGfhg4RKhAtAaIqd5vRO00DEddOujgIhANUUOrK6PkQMUqBq8rDjonFturzZ1rbtj5QAcXMkEsukKv8DCB4QABoMNjM3NDIzMTgzODA1Igx4I3iLkrw6j5TLBCkq3ANLYDvv13%2FkyfubxXc8quq6YTrWWN4mQ0%2FP3GK3xAd8yd1MTgHfTdm%2BPYw6i0yTK%2F%2BsPEATrfmZUXfTT14QdTDo806Q35ZqJ8EKdoHo5kZJRPNNj0XciSOD7io1ZVp46yfTRlXiKnBCpclq2za9FK%2B8fRxqgTGpdDQEAJK79SzgflInDJmwH2Gml5EcVZyIf35ZhFsLipa4OQzMP1hUM9lPig62ugFYRjGo3qtTsAJqsLaxNZJUABUbVRQrEHvql4JLFcZfAhIwndlzT1vOO3Q2rFcyF%2FQvW6FJbMnp8pDjHOQqkRctPcv9Bvoh5PnfQwxszFX3WjEdnu%2BbcyAYBHe3rPBvuiLzcjnG44DSSSLDvQrxr5TWcM%2FSmSBqxKzqNl4Ouwy1qmGcUt5HonsL39TjSVCmh9jFABKupAKv0URuIAtc%2F5btsSgwwkDLrKO5vh7Hv5YopN3ZvwiQgD%2FX%2FO6YhOUbz0egrEo3mtNc1kSbz29hNQIHshLaKekdRRw2Zz7lAXADinCyZ4jIOt9OlUL9ZUAImN1oNrYzdWiiJon1h2R6%2FUbDqDh2c7pe1Pdix19Ta0MP%2BGwUIiVTCyVHP8STzBBrf7O8aeUMqwJ2l2KSa6KDjvaCzuE%2BW3WUQDDk2oS9BjqkAanu0moSZ5s8Z3oXHwhBN2JVO3PD%2F3A%2BEOZGwIT%2BmaIA0o%2F6sbWDvdDGFxc0TJ9YmUBkei0H5oAC2Ob%2FMm2qWLyfFdIcWUviFc184ImWRZwPfoaXdNtGyESiyzPuu51iutMktPp3EhrG%2F2Q4%2B3ZyQuxYvT8k2G6e6WGtFsB1F8u15tMG0xRzQwoul7meWZcTqTXeMsI%2FnZTMSzXGsGXg7hphtVh7&X-Amz-Signature=a1472176b93caab9ff5709bd9524a5fb670bcb8438a5a25a87e3f73c5a89ae63&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYG6MTR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD8zwUezRN9h7YbuGfhg4RKhAtAaIqd5vRO00DEddOujgIhANUUOrK6PkQMUqBq8rDjonFturzZ1rbtj5QAcXMkEsukKv8DCB4QABoMNjM3NDIzMTgzODA1Igx4I3iLkrw6j5TLBCkq3ANLYDvv13%2FkyfubxXc8quq6YTrWWN4mQ0%2FP3GK3xAd8yd1MTgHfTdm%2BPYw6i0yTK%2F%2BsPEATrfmZUXfTT14QdTDo806Q35ZqJ8EKdoHo5kZJRPNNj0XciSOD7io1ZVp46yfTRlXiKnBCpclq2za9FK%2B8fRxqgTGpdDQEAJK79SzgflInDJmwH2Gml5EcVZyIf35ZhFsLipa4OQzMP1hUM9lPig62ugFYRjGo3qtTsAJqsLaxNZJUABUbVRQrEHvql4JLFcZfAhIwndlzT1vOO3Q2rFcyF%2FQvW6FJbMnp8pDjHOQqkRctPcv9Bvoh5PnfQwxszFX3WjEdnu%2BbcyAYBHe3rPBvuiLzcjnG44DSSSLDvQrxr5TWcM%2FSmSBqxKzqNl4Ouwy1qmGcUt5HonsL39TjSVCmh9jFABKupAKv0URuIAtc%2F5btsSgwwkDLrKO5vh7Hv5YopN3ZvwiQgD%2FX%2FO6YhOUbz0egrEo3mtNc1kSbz29hNQIHshLaKekdRRw2Zz7lAXADinCyZ4jIOt9OlUL9ZUAImN1oNrYzdWiiJon1h2R6%2FUbDqDh2c7pe1Pdix19Ta0MP%2BGwUIiVTCyVHP8STzBBrf7O8aeUMqwJ2l2KSa6KDjvaCzuE%2BW3WUQDDk2oS9BjqkAanu0moSZ5s8Z3oXHwhBN2JVO3PD%2F3A%2BEOZGwIT%2BmaIA0o%2F6sbWDvdDGFxc0TJ9YmUBkei0H5oAC2Ob%2FMm2qWLyfFdIcWUviFc184ImWRZwPfoaXdNtGyESiyzPuu51iutMktPp3EhrG%2F2Q4%2B3ZyQuxYvT8k2G6e6WGtFsB1F8u15tMG0xRzQwoul7meWZcTqTXeMsI%2FnZTMSzXGsGXg7hphtVh7&X-Amz-Signature=8a0e615492ecc676d7d189df815ab98d5f8c7450aff8f7ac96517020ff47b95c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYG6MTR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD8zwUezRN9h7YbuGfhg4RKhAtAaIqd5vRO00DEddOujgIhANUUOrK6PkQMUqBq8rDjonFturzZ1rbtj5QAcXMkEsukKv8DCB4QABoMNjM3NDIzMTgzODA1Igx4I3iLkrw6j5TLBCkq3ANLYDvv13%2FkyfubxXc8quq6YTrWWN4mQ0%2FP3GK3xAd8yd1MTgHfTdm%2BPYw6i0yTK%2F%2BsPEATrfmZUXfTT14QdTDo806Q35ZqJ8EKdoHo5kZJRPNNj0XciSOD7io1ZVp46yfTRlXiKnBCpclq2za9FK%2B8fRxqgTGpdDQEAJK79SzgflInDJmwH2Gml5EcVZyIf35ZhFsLipa4OQzMP1hUM9lPig62ugFYRjGo3qtTsAJqsLaxNZJUABUbVRQrEHvql4JLFcZfAhIwndlzT1vOO3Q2rFcyF%2FQvW6FJbMnp8pDjHOQqkRctPcv9Bvoh5PnfQwxszFX3WjEdnu%2BbcyAYBHe3rPBvuiLzcjnG44DSSSLDvQrxr5TWcM%2FSmSBqxKzqNl4Ouwy1qmGcUt5HonsL39TjSVCmh9jFABKupAKv0URuIAtc%2F5btsSgwwkDLrKO5vh7Hv5YopN3ZvwiQgD%2FX%2FO6YhOUbz0egrEo3mtNc1kSbz29hNQIHshLaKekdRRw2Zz7lAXADinCyZ4jIOt9OlUL9ZUAImN1oNrYzdWiiJon1h2R6%2FUbDqDh2c7pe1Pdix19Ta0MP%2BGwUIiVTCyVHP8STzBBrf7O8aeUMqwJ2l2KSa6KDjvaCzuE%2BW3WUQDDk2oS9BjqkAanu0moSZ5s8Z3oXHwhBN2JVO3PD%2F3A%2BEOZGwIT%2BmaIA0o%2F6sbWDvdDGFxc0TJ9YmUBkei0H5oAC2Ob%2FMm2qWLyfFdIcWUviFc184ImWRZwPfoaXdNtGyESiyzPuu51iutMktPp3EhrG%2F2Q4%2B3ZyQuxYvT8k2G6e6WGtFsB1F8u15tMG0xRzQwoul7meWZcTqTXeMsI%2FnZTMSzXGsGXg7hphtVh7&X-Amz-Signature=989b7a001e6ea2292257009336190172d4ca82945478cc2f7310e45efbb0d408&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYG6MTR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD8zwUezRN9h7YbuGfhg4RKhAtAaIqd5vRO00DEddOujgIhANUUOrK6PkQMUqBq8rDjonFturzZ1rbtj5QAcXMkEsukKv8DCB4QABoMNjM3NDIzMTgzODA1Igx4I3iLkrw6j5TLBCkq3ANLYDvv13%2FkyfubxXc8quq6YTrWWN4mQ0%2FP3GK3xAd8yd1MTgHfTdm%2BPYw6i0yTK%2F%2BsPEATrfmZUXfTT14QdTDo806Q35ZqJ8EKdoHo5kZJRPNNj0XciSOD7io1ZVp46yfTRlXiKnBCpclq2za9FK%2B8fRxqgTGpdDQEAJK79SzgflInDJmwH2Gml5EcVZyIf35ZhFsLipa4OQzMP1hUM9lPig62ugFYRjGo3qtTsAJqsLaxNZJUABUbVRQrEHvql4JLFcZfAhIwndlzT1vOO3Q2rFcyF%2FQvW6FJbMnp8pDjHOQqkRctPcv9Bvoh5PnfQwxszFX3WjEdnu%2BbcyAYBHe3rPBvuiLzcjnG44DSSSLDvQrxr5TWcM%2FSmSBqxKzqNl4Ouwy1qmGcUt5HonsL39TjSVCmh9jFABKupAKv0URuIAtc%2F5btsSgwwkDLrKO5vh7Hv5YopN3ZvwiQgD%2FX%2FO6YhOUbz0egrEo3mtNc1kSbz29hNQIHshLaKekdRRw2Zz7lAXADinCyZ4jIOt9OlUL9ZUAImN1oNrYzdWiiJon1h2R6%2FUbDqDh2c7pe1Pdix19Ta0MP%2BGwUIiVTCyVHP8STzBBrf7O8aeUMqwJ2l2KSa6KDjvaCzuE%2BW3WUQDDk2oS9BjqkAanu0moSZ5s8Z3oXHwhBN2JVO3PD%2F3A%2BEOZGwIT%2BmaIA0o%2F6sbWDvdDGFxc0TJ9YmUBkei0H5oAC2Ob%2FMm2qWLyfFdIcWUviFc184ImWRZwPfoaXdNtGyESiyzPuu51iutMktPp3EhrG%2F2Q4%2B3ZyQuxYvT8k2G6e6WGtFsB1F8u15tMG0xRzQwoul7meWZcTqTXeMsI%2FnZTMSzXGsGXg7hphtVh7&X-Amz-Signature=0c3a6028759af6fa9698e08d11c0abf852b1cffdc599a31fcb59c808d084f3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYG6MTR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD8zwUezRN9h7YbuGfhg4RKhAtAaIqd5vRO00DEddOujgIhANUUOrK6PkQMUqBq8rDjonFturzZ1rbtj5QAcXMkEsukKv8DCB4QABoMNjM3NDIzMTgzODA1Igx4I3iLkrw6j5TLBCkq3ANLYDvv13%2FkyfubxXc8quq6YTrWWN4mQ0%2FP3GK3xAd8yd1MTgHfTdm%2BPYw6i0yTK%2F%2BsPEATrfmZUXfTT14QdTDo806Q35ZqJ8EKdoHo5kZJRPNNj0XciSOD7io1ZVp46yfTRlXiKnBCpclq2za9FK%2B8fRxqgTGpdDQEAJK79SzgflInDJmwH2Gml5EcVZyIf35ZhFsLipa4OQzMP1hUM9lPig62ugFYRjGo3qtTsAJqsLaxNZJUABUbVRQrEHvql4JLFcZfAhIwndlzT1vOO3Q2rFcyF%2FQvW6FJbMnp8pDjHOQqkRctPcv9Bvoh5PnfQwxszFX3WjEdnu%2BbcyAYBHe3rPBvuiLzcjnG44DSSSLDvQrxr5TWcM%2FSmSBqxKzqNl4Ouwy1qmGcUt5HonsL39TjSVCmh9jFABKupAKv0URuIAtc%2F5btsSgwwkDLrKO5vh7Hv5YopN3ZvwiQgD%2FX%2FO6YhOUbz0egrEo3mtNc1kSbz29hNQIHshLaKekdRRw2Zz7lAXADinCyZ4jIOt9OlUL9ZUAImN1oNrYzdWiiJon1h2R6%2FUbDqDh2c7pe1Pdix19Ta0MP%2BGwUIiVTCyVHP8STzBBrf7O8aeUMqwJ2l2KSa6KDjvaCzuE%2BW3WUQDDk2oS9BjqkAanu0moSZ5s8Z3oXHwhBN2JVO3PD%2F3A%2BEOZGwIT%2BmaIA0o%2F6sbWDvdDGFxc0TJ9YmUBkei0H5oAC2Ob%2FMm2qWLyfFdIcWUviFc184ImWRZwPfoaXdNtGyESiyzPuu51iutMktPp3EhrG%2F2Q4%2B3ZyQuxYvT8k2G6e6WGtFsB1F8u15tMG0xRzQwoul7meWZcTqTXeMsI%2FnZTMSzXGsGXg7hphtVh7&X-Amz-Signature=f3b8e285e54718c054c35930c86c7b0e96dc3ef32d44820eb4d84345f950d47a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYG6MTR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD8zwUezRN9h7YbuGfhg4RKhAtAaIqd5vRO00DEddOujgIhANUUOrK6PkQMUqBq8rDjonFturzZ1rbtj5QAcXMkEsukKv8DCB4QABoMNjM3NDIzMTgzODA1Igx4I3iLkrw6j5TLBCkq3ANLYDvv13%2FkyfubxXc8quq6YTrWWN4mQ0%2FP3GK3xAd8yd1MTgHfTdm%2BPYw6i0yTK%2F%2BsPEATrfmZUXfTT14QdTDo806Q35ZqJ8EKdoHo5kZJRPNNj0XciSOD7io1ZVp46yfTRlXiKnBCpclq2za9FK%2B8fRxqgTGpdDQEAJK79SzgflInDJmwH2Gml5EcVZyIf35ZhFsLipa4OQzMP1hUM9lPig62ugFYRjGo3qtTsAJqsLaxNZJUABUbVRQrEHvql4JLFcZfAhIwndlzT1vOO3Q2rFcyF%2FQvW6FJbMnp8pDjHOQqkRctPcv9Bvoh5PnfQwxszFX3WjEdnu%2BbcyAYBHe3rPBvuiLzcjnG44DSSSLDvQrxr5TWcM%2FSmSBqxKzqNl4Ouwy1qmGcUt5HonsL39TjSVCmh9jFABKupAKv0URuIAtc%2F5btsSgwwkDLrKO5vh7Hv5YopN3ZvwiQgD%2FX%2FO6YhOUbz0egrEo3mtNc1kSbz29hNQIHshLaKekdRRw2Zz7lAXADinCyZ4jIOt9OlUL9ZUAImN1oNrYzdWiiJon1h2R6%2FUbDqDh2c7pe1Pdix19Ta0MP%2BGwUIiVTCyVHP8STzBBrf7O8aeUMqwJ2l2KSa6KDjvaCzuE%2BW3WUQDDk2oS9BjqkAanu0moSZ5s8Z3oXHwhBN2JVO3PD%2F3A%2BEOZGwIT%2BmaIA0o%2F6sbWDvdDGFxc0TJ9YmUBkei0H5oAC2Ob%2FMm2qWLyfFdIcWUviFc184ImWRZwPfoaXdNtGyESiyzPuu51iutMktPp3EhrG%2F2Q4%2B3ZyQuxYvT8k2G6e6WGtFsB1F8u15tMG0xRzQwoul7meWZcTqTXeMsI%2FnZTMSzXGsGXg7hphtVh7&X-Amz-Signature=22c2b7a52b012991a072ad56ce13bcb445cb83a9c9f0b1b5a181528d245d6707&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
