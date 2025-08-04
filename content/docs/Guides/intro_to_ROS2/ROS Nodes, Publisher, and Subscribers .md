---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPLMP5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNtGVhSvWj25CkawHJnqf4lX4TnVpCc30XUDIRJb5LJwIhAPSyQ988OLiHrY%2BMlNWuCj2Im51VNspJnk2WxM9xz5A6Kv8DCD0QABoMNjM3NDIzMTgzODA1Igx20ir%2BlyU%2Fyfc7YoUq3ANxHCwgHqMHy3aF7uBaST%2FF3ki6A6e5WGN31Fm8N%2BjaZ7Gq1zzGU8jQxEn7w7uopVzvathCKefz0D2llOdWlcaK%2B0p4br5A85kBjmDz6UyxULprd7GdRky0YFaAaxhs36VsaqFREaoCccRyA5xgyD%2F97LGSMFwIynVi0o4bI6FkgvZ00pdvVrB6LokpVy1nCabHoP9e%2FaU%2FMBlNGHxRw7NPhCQr6ypCJc5Ar9me93Vjrx%2BGt2jIY4eebWkyVVlFD8sJ6Ls3pYIt7Xi4rlASWaBJa1fpgaUEncHBjFW%2FFOm%2F4REJVqBu9e9JLrLWW9PfnlUZnqKjp1Th73pl4KpXbb9Jc4%2BeUYIkHBuhWLRAqCOyPN5WmEFS0FD9AUoWQzT55397J3fg4XCAcqAU4vixyQbthoINs4jY5nH4y%2FV%2BqZQpLNHmjqDzN2HAssKxnJMuck0%2BqNcE3JKbI9Q1g%2BeIG%2BPxF0WtcIuOWNB0kMxsvP8xyJCqq7B0vGSnaIyX7cgGwNB7nmRRFLOrD%2FXmFb4yysjHCi%2Bx3eBxhHCh2czyRy1GPogh2zAYE7D5mreAVnztydbvHydG6DNcQolJlVZNlVqqAbgZhVgWZ%2F6z1LGFlkaxeDyCCjf3wfM%2Bhcm0XTDA6cDEBjqkAekzBN6FXImXKmaG%2B%2FLfpozaOrlb4XnRZMglaw3QkLrqpB0bTplhD%2FgjFGp2Zyk9MrLx2kDqQ7Tnfy013chB%2FHfQ9l1iZpYlua946H9SIRSUBYnCgJ1Fg4o72%2FMgro74bgnu5li0BjHjyd9GEsfffCgXTZylPX9miBKWGCaWOyKi%2F%2BAaQkIi8dY8XpTS7RRpRt8PJL7BlQeZntnL8pxm3Aa%2F2HJc&X-Amz-Signature=acc4c17235e0eb3cee94070d3cf13fb57afaabaf8d28ef6eec8402ecc914c0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPLMP5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNtGVhSvWj25CkawHJnqf4lX4TnVpCc30XUDIRJb5LJwIhAPSyQ988OLiHrY%2BMlNWuCj2Im51VNspJnk2WxM9xz5A6Kv8DCD0QABoMNjM3NDIzMTgzODA1Igx20ir%2BlyU%2Fyfc7YoUq3ANxHCwgHqMHy3aF7uBaST%2FF3ki6A6e5WGN31Fm8N%2BjaZ7Gq1zzGU8jQxEn7w7uopVzvathCKefz0D2llOdWlcaK%2B0p4br5A85kBjmDz6UyxULprd7GdRky0YFaAaxhs36VsaqFREaoCccRyA5xgyD%2F97LGSMFwIynVi0o4bI6FkgvZ00pdvVrB6LokpVy1nCabHoP9e%2FaU%2FMBlNGHxRw7NPhCQr6ypCJc5Ar9me93Vjrx%2BGt2jIY4eebWkyVVlFD8sJ6Ls3pYIt7Xi4rlASWaBJa1fpgaUEncHBjFW%2FFOm%2F4REJVqBu9e9JLrLWW9PfnlUZnqKjp1Th73pl4KpXbb9Jc4%2BeUYIkHBuhWLRAqCOyPN5WmEFS0FD9AUoWQzT55397J3fg4XCAcqAU4vixyQbthoINs4jY5nH4y%2FV%2BqZQpLNHmjqDzN2HAssKxnJMuck0%2BqNcE3JKbI9Q1g%2BeIG%2BPxF0WtcIuOWNB0kMxsvP8xyJCqq7B0vGSnaIyX7cgGwNB7nmRRFLOrD%2FXmFb4yysjHCi%2Bx3eBxhHCh2czyRy1GPogh2zAYE7D5mreAVnztydbvHydG6DNcQolJlVZNlVqqAbgZhVgWZ%2F6z1LGFlkaxeDyCCjf3wfM%2Bhcm0XTDA6cDEBjqkAekzBN6FXImXKmaG%2B%2FLfpozaOrlb4XnRZMglaw3QkLrqpB0bTplhD%2FgjFGp2Zyk9MrLx2kDqQ7Tnfy013chB%2FHfQ9l1iZpYlua946H9SIRSUBYnCgJ1Fg4o72%2FMgro74bgnu5li0BjHjyd9GEsfffCgXTZylPX9miBKWGCaWOyKi%2F%2BAaQkIi8dY8XpTS7RRpRt8PJL7BlQeZntnL8pxm3Aa%2F2HJc&X-Amz-Signature=84ec07a8da0b45dc264e16146d80c2d015a0ebc315797228311dcea8d69c630a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPLMP5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNtGVhSvWj25CkawHJnqf4lX4TnVpCc30XUDIRJb5LJwIhAPSyQ988OLiHrY%2BMlNWuCj2Im51VNspJnk2WxM9xz5A6Kv8DCD0QABoMNjM3NDIzMTgzODA1Igx20ir%2BlyU%2Fyfc7YoUq3ANxHCwgHqMHy3aF7uBaST%2FF3ki6A6e5WGN31Fm8N%2BjaZ7Gq1zzGU8jQxEn7w7uopVzvathCKefz0D2llOdWlcaK%2B0p4br5A85kBjmDz6UyxULprd7GdRky0YFaAaxhs36VsaqFREaoCccRyA5xgyD%2F97LGSMFwIynVi0o4bI6FkgvZ00pdvVrB6LokpVy1nCabHoP9e%2FaU%2FMBlNGHxRw7NPhCQr6ypCJc5Ar9me93Vjrx%2BGt2jIY4eebWkyVVlFD8sJ6Ls3pYIt7Xi4rlASWaBJa1fpgaUEncHBjFW%2FFOm%2F4REJVqBu9e9JLrLWW9PfnlUZnqKjp1Th73pl4KpXbb9Jc4%2BeUYIkHBuhWLRAqCOyPN5WmEFS0FD9AUoWQzT55397J3fg4XCAcqAU4vixyQbthoINs4jY5nH4y%2FV%2BqZQpLNHmjqDzN2HAssKxnJMuck0%2BqNcE3JKbI9Q1g%2BeIG%2BPxF0WtcIuOWNB0kMxsvP8xyJCqq7B0vGSnaIyX7cgGwNB7nmRRFLOrD%2FXmFb4yysjHCi%2Bx3eBxhHCh2czyRy1GPogh2zAYE7D5mreAVnztydbvHydG6DNcQolJlVZNlVqqAbgZhVgWZ%2F6z1LGFlkaxeDyCCjf3wfM%2Bhcm0XTDA6cDEBjqkAekzBN6FXImXKmaG%2B%2FLfpozaOrlb4XnRZMglaw3QkLrqpB0bTplhD%2FgjFGp2Zyk9MrLx2kDqQ7Tnfy013chB%2FHfQ9l1iZpYlua946H9SIRSUBYnCgJ1Fg4o72%2FMgro74bgnu5li0BjHjyd9GEsfffCgXTZylPX9miBKWGCaWOyKi%2F%2BAaQkIi8dY8XpTS7RRpRt8PJL7BlQeZntnL8pxm3Aa%2F2HJc&X-Amz-Signature=0e6e9da5fabc873fabe8e822148bb342ff8df771bb46a3cd0df2e5408de731b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPLMP5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNtGVhSvWj25CkawHJnqf4lX4TnVpCc30XUDIRJb5LJwIhAPSyQ988OLiHrY%2BMlNWuCj2Im51VNspJnk2WxM9xz5A6Kv8DCD0QABoMNjM3NDIzMTgzODA1Igx20ir%2BlyU%2Fyfc7YoUq3ANxHCwgHqMHy3aF7uBaST%2FF3ki6A6e5WGN31Fm8N%2BjaZ7Gq1zzGU8jQxEn7w7uopVzvathCKefz0D2llOdWlcaK%2B0p4br5A85kBjmDz6UyxULprd7GdRky0YFaAaxhs36VsaqFREaoCccRyA5xgyD%2F97LGSMFwIynVi0o4bI6FkgvZ00pdvVrB6LokpVy1nCabHoP9e%2FaU%2FMBlNGHxRw7NPhCQr6ypCJc5Ar9me93Vjrx%2BGt2jIY4eebWkyVVlFD8sJ6Ls3pYIt7Xi4rlASWaBJa1fpgaUEncHBjFW%2FFOm%2F4REJVqBu9e9JLrLWW9PfnlUZnqKjp1Th73pl4KpXbb9Jc4%2BeUYIkHBuhWLRAqCOyPN5WmEFS0FD9AUoWQzT55397J3fg4XCAcqAU4vixyQbthoINs4jY5nH4y%2FV%2BqZQpLNHmjqDzN2HAssKxnJMuck0%2BqNcE3JKbI9Q1g%2BeIG%2BPxF0WtcIuOWNB0kMxsvP8xyJCqq7B0vGSnaIyX7cgGwNB7nmRRFLOrD%2FXmFb4yysjHCi%2Bx3eBxhHCh2czyRy1GPogh2zAYE7D5mreAVnztydbvHydG6DNcQolJlVZNlVqqAbgZhVgWZ%2F6z1LGFlkaxeDyCCjf3wfM%2Bhcm0XTDA6cDEBjqkAekzBN6FXImXKmaG%2B%2FLfpozaOrlb4XnRZMglaw3QkLrqpB0bTplhD%2FgjFGp2Zyk9MrLx2kDqQ7Tnfy013chB%2FHfQ9l1iZpYlua946H9SIRSUBYnCgJ1Fg4o72%2FMgro74bgnu5li0BjHjyd9GEsfffCgXTZylPX9miBKWGCaWOyKi%2F%2BAaQkIi8dY8XpTS7RRpRt8PJL7BlQeZntnL8pxm3Aa%2F2HJc&X-Amz-Signature=0586ff460853d47b923dd850b83b1e93d7acb8a66cfd72b6343498c145ae91df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPLMP5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNtGVhSvWj25CkawHJnqf4lX4TnVpCc30XUDIRJb5LJwIhAPSyQ988OLiHrY%2BMlNWuCj2Im51VNspJnk2WxM9xz5A6Kv8DCD0QABoMNjM3NDIzMTgzODA1Igx20ir%2BlyU%2Fyfc7YoUq3ANxHCwgHqMHy3aF7uBaST%2FF3ki6A6e5WGN31Fm8N%2BjaZ7Gq1zzGU8jQxEn7w7uopVzvathCKefz0D2llOdWlcaK%2B0p4br5A85kBjmDz6UyxULprd7GdRky0YFaAaxhs36VsaqFREaoCccRyA5xgyD%2F97LGSMFwIynVi0o4bI6FkgvZ00pdvVrB6LokpVy1nCabHoP9e%2FaU%2FMBlNGHxRw7NPhCQr6ypCJc5Ar9me93Vjrx%2BGt2jIY4eebWkyVVlFD8sJ6Ls3pYIt7Xi4rlASWaBJa1fpgaUEncHBjFW%2FFOm%2F4REJVqBu9e9JLrLWW9PfnlUZnqKjp1Th73pl4KpXbb9Jc4%2BeUYIkHBuhWLRAqCOyPN5WmEFS0FD9AUoWQzT55397J3fg4XCAcqAU4vixyQbthoINs4jY5nH4y%2FV%2BqZQpLNHmjqDzN2HAssKxnJMuck0%2BqNcE3JKbI9Q1g%2BeIG%2BPxF0WtcIuOWNB0kMxsvP8xyJCqq7B0vGSnaIyX7cgGwNB7nmRRFLOrD%2FXmFb4yysjHCi%2Bx3eBxhHCh2czyRy1GPogh2zAYE7D5mreAVnztydbvHydG6DNcQolJlVZNlVqqAbgZhVgWZ%2F6z1LGFlkaxeDyCCjf3wfM%2Bhcm0XTDA6cDEBjqkAekzBN6FXImXKmaG%2B%2FLfpozaOrlb4XnRZMglaw3QkLrqpB0bTplhD%2FgjFGp2Zyk9MrLx2kDqQ7Tnfy013chB%2FHfQ9l1iZpYlua946H9SIRSUBYnCgJ1Fg4o72%2FMgro74bgnu5li0BjHjyd9GEsfffCgXTZylPX9miBKWGCaWOyKi%2F%2BAaQkIi8dY8XpTS7RRpRt8PJL7BlQeZntnL8pxm3Aa%2F2HJc&X-Amz-Signature=e2c4fd83a7657a9de8b4f1a3a3296105251be0850b6808a21dc2a6c1dc5a9a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPLMP5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNtGVhSvWj25CkawHJnqf4lX4TnVpCc30XUDIRJb5LJwIhAPSyQ988OLiHrY%2BMlNWuCj2Im51VNspJnk2WxM9xz5A6Kv8DCD0QABoMNjM3NDIzMTgzODA1Igx20ir%2BlyU%2Fyfc7YoUq3ANxHCwgHqMHy3aF7uBaST%2FF3ki6A6e5WGN31Fm8N%2BjaZ7Gq1zzGU8jQxEn7w7uopVzvathCKefz0D2llOdWlcaK%2B0p4br5A85kBjmDz6UyxULprd7GdRky0YFaAaxhs36VsaqFREaoCccRyA5xgyD%2F97LGSMFwIynVi0o4bI6FkgvZ00pdvVrB6LokpVy1nCabHoP9e%2FaU%2FMBlNGHxRw7NPhCQr6ypCJc5Ar9me93Vjrx%2BGt2jIY4eebWkyVVlFD8sJ6Ls3pYIt7Xi4rlASWaBJa1fpgaUEncHBjFW%2FFOm%2F4REJVqBu9e9JLrLWW9PfnlUZnqKjp1Th73pl4KpXbb9Jc4%2BeUYIkHBuhWLRAqCOyPN5WmEFS0FD9AUoWQzT55397J3fg4XCAcqAU4vixyQbthoINs4jY5nH4y%2FV%2BqZQpLNHmjqDzN2HAssKxnJMuck0%2BqNcE3JKbI9Q1g%2BeIG%2BPxF0WtcIuOWNB0kMxsvP8xyJCqq7B0vGSnaIyX7cgGwNB7nmRRFLOrD%2FXmFb4yysjHCi%2Bx3eBxhHCh2czyRy1GPogh2zAYE7D5mreAVnztydbvHydG6DNcQolJlVZNlVqqAbgZhVgWZ%2F6z1LGFlkaxeDyCCjf3wfM%2Bhcm0XTDA6cDEBjqkAekzBN6FXImXKmaG%2B%2FLfpozaOrlb4XnRZMglaw3QkLrqpB0bTplhD%2FgjFGp2Zyk9MrLx2kDqQ7Tnfy013chB%2FHfQ9l1iZpYlua946H9SIRSUBYnCgJ1Fg4o72%2FMgro74bgnu5li0BjHjyd9GEsfffCgXTZylPX9miBKWGCaWOyKi%2F%2BAaQkIi8dY8XpTS7RRpRt8PJL7BlQeZntnL8pxm3Aa%2F2HJc&X-Amz-Signature=59ab24f3c80e48dfb5dc34c6e71fc3e2c906163b7a70480a64ec9749d8890e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPLMP5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNtGVhSvWj25CkawHJnqf4lX4TnVpCc30XUDIRJb5LJwIhAPSyQ988OLiHrY%2BMlNWuCj2Im51VNspJnk2WxM9xz5A6Kv8DCD0QABoMNjM3NDIzMTgzODA1Igx20ir%2BlyU%2Fyfc7YoUq3ANxHCwgHqMHy3aF7uBaST%2FF3ki6A6e5WGN31Fm8N%2BjaZ7Gq1zzGU8jQxEn7w7uopVzvathCKefz0D2llOdWlcaK%2B0p4br5A85kBjmDz6UyxULprd7GdRky0YFaAaxhs36VsaqFREaoCccRyA5xgyD%2F97LGSMFwIynVi0o4bI6FkgvZ00pdvVrB6LokpVy1nCabHoP9e%2FaU%2FMBlNGHxRw7NPhCQr6ypCJc5Ar9me93Vjrx%2BGt2jIY4eebWkyVVlFD8sJ6Ls3pYIt7Xi4rlASWaBJa1fpgaUEncHBjFW%2FFOm%2F4REJVqBu9e9JLrLWW9PfnlUZnqKjp1Th73pl4KpXbb9Jc4%2BeUYIkHBuhWLRAqCOyPN5WmEFS0FD9AUoWQzT55397J3fg4XCAcqAU4vixyQbthoINs4jY5nH4y%2FV%2BqZQpLNHmjqDzN2HAssKxnJMuck0%2BqNcE3JKbI9Q1g%2BeIG%2BPxF0WtcIuOWNB0kMxsvP8xyJCqq7B0vGSnaIyX7cgGwNB7nmRRFLOrD%2FXmFb4yysjHCi%2Bx3eBxhHCh2czyRy1GPogh2zAYE7D5mreAVnztydbvHydG6DNcQolJlVZNlVqqAbgZhVgWZ%2F6z1LGFlkaxeDyCCjf3wfM%2Bhcm0XTDA6cDEBjqkAekzBN6FXImXKmaG%2B%2FLfpozaOrlb4XnRZMglaw3QkLrqpB0bTplhD%2FgjFGp2Zyk9MrLx2kDqQ7Tnfy013chB%2FHfQ9l1iZpYlua946H9SIRSUBYnCgJ1Fg4o72%2FMgro74bgnu5li0BjHjyd9GEsfffCgXTZylPX9miBKWGCaWOyKi%2F%2BAaQkIi8dY8XpTS7RRpRt8PJL7BlQeZntnL8pxm3Aa%2F2HJc&X-Amz-Signature=93f110ac8ee310b738770a04e8f62a282d80389ced7da437c008221cc3f91acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPLMP5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNtGVhSvWj25CkawHJnqf4lX4TnVpCc30XUDIRJb5LJwIhAPSyQ988OLiHrY%2BMlNWuCj2Im51VNspJnk2WxM9xz5A6Kv8DCD0QABoMNjM3NDIzMTgzODA1Igx20ir%2BlyU%2Fyfc7YoUq3ANxHCwgHqMHy3aF7uBaST%2FF3ki6A6e5WGN31Fm8N%2BjaZ7Gq1zzGU8jQxEn7w7uopVzvathCKefz0D2llOdWlcaK%2B0p4br5A85kBjmDz6UyxULprd7GdRky0YFaAaxhs36VsaqFREaoCccRyA5xgyD%2F97LGSMFwIynVi0o4bI6FkgvZ00pdvVrB6LokpVy1nCabHoP9e%2FaU%2FMBlNGHxRw7NPhCQr6ypCJc5Ar9me93Vjrx%2BGt2jIY4eebWkyVVlFD8sJ6Ls3pYIt7Xi4rlASWaBJa1fpgaUEncHBjFW%2FFOm%2F4REJVqBu9e9JLrLWW9PfnlUZnqKjp1Th73pl4KpXbb9Jc4%2BeUYIkHBuhWLRAqCOyPN5WmEFS0FD9AUoWQzT55397J3fg4XCAcqAU4vixyQbthoINs4jY5nH4y%2FV%2BqZQpLNHmjqDzN2HAssKxnJMuck0%2BqNcE3JKbI9Q1g%2BeIG%2BPxF0WtcIuOWNB0kMxsvP8xyJCqq7B0vGSnaIyX7cgGwNB7nmRRFLOrD%2FXmFb4yysjHCi%2Bx3eBxhHCh2czyRy1GPogh2zAYE7D5mreAVnztydbvHydG6DNcQolJlVZNlVqqAbgZhVgWZ%2F6z1LGFlkaxeDyCCjf3wfM%2Bhcm0XTDA6cDEBjqkAekzBN6FXImXKmaG%2B%2FLfpozaOrlb4XnRZMglaw3QkLrqpB0bTplhD%2FgjFGp2Zyk9MrLx2kDqQ7Tnfy013chB%2FHfQ9l1iZpYlua946H9SIRSUBYnCgJ1Fg4o72%2FMgro74bgnu5li0BjHjyd9GEsfffCgXTZylPX9miBKWGCaWOyKi%2F%2BAaQkIi8dY8XpTS7RRpRt8PJL7BlQeZntnL8pxm3Aa%2F2HJc&X-Amz-Signature=e69f7f6d072c67e138e47b5beec199d55103d6f6180f621b523b54476e3e22fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
