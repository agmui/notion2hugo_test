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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWWINT5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHNEpENqrv6au30kcGa08a7o3n7LQ7LlUrGXGFCriRmHAiBnmCuo0i3itltztmGA%2FKmjYjHPivYUhsTe4AZZ%2FasLUyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM30hV2iTqhLPayvyAKtwD9IMhcP%2BDMVYZBP4T4rn4xrtJ1dQ2hY6jjEtUfAR0kV3WZMkQAsFE%2FTZKK6FiS5tfGYApQStyKmvpuacRR5q835jD2MpSIUHEfgVkzz%2FMXpPzz99QRFy%2BFIYi%2FQ1IFOhDZSqyX9tVmVEJKBU8CS8Vtl%2FzbDuCNCw4op6A%2F%2Felh1R64qPXhhQ4G7bPhn9m5daEBJBtUR3xgUEhCO%2BVNgRqz5N9cQ2pcNazDiJfGawYd%2F3GfqLN%2FbXElLA99oMSOVB%2FQaYM2Yq%2BDD2XL3BuPEESoc0ruXq6Qumjb9%2BybkOrqwmMdU3MslUe1VGxVWY9TuP2Yv9PGoD2Gj1BOtvQhHb2jaGsKifAWQLBHC1YT7FdsVh0E1ez4skMr7M9ziiY48sBEkrdG28%2B7S6oLb6hbDnOvaWpPdGswn%2FGu2B2BxQBiGa3Cxak5ViszPc7dwdV2ClClNUMNK05b1evYJbrPQ8j5i4nWLPHranzOPdAiMVoQakZbYsajj6dD1cwN54sLoGvXenOa%2FZ3Cjx2EZyu3xXGHK%2FHqsx9GtBKrsnRnmNYXJ2wbRgzYCVlL19JoBRKlv%2BHAVV4Kuqe%2Byi0dmsAf69dBYqqm9VygMhxedm9%2FkkWIdoy9Z1uhgTfClBC%2FsswntnsvgY6pgFhKjXFGtL2FKXNrJHGC4%2FsjhbQedIaGhQOoCHYx%2FmszctsSEr0SVAztgXcjt8lMlkXGQ04%2B0MVeG78%2FJ590H59%2FQ0c4vOgcjeKRk2PPXWJ5DYSsdrK7wTYyZnFLcyqfeJ3%2BsNK%2BfAfGlBh6KJ4JGp77SAeBYF8ejJW0FY93Zfe4jbEKdVELyYsGuNh8fjhPkxQOVyhs4ck%2BlOW%2B8wUYIzrcpUeADcT&X-Amz-Signature=f21457674093185a001aab8f73892d5ebd94a702e168369fb7076ac80ab61659&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWWINT5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHNEpENqrv6au30kcGa08a7o3n7LQ7LlUrGXGFCriRmHAiBnmCuo0i3itltztmGA%2FKmjYjHPivYUhsTe4AZZ%2FasLUyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM30hV2iTqhLPayvyAKtwD9IMhcP%2BDMVYZBP4T4rn4xrtJ1dQ2hY6jjEtUfAR0kV3WZMkQAsFE%2FTZKK6FiS5tfGYApQStyKmvpuacRR5q835jD2MpSIUHEfgVkzz%2FMXpPzz99QRFy%2BFIYi%2FQ1IFOhDZSqyX9tVmVEJKBU8CS8Vtl%2FzbDuCNCw4op6A%2F%2Felh1R64qPXhhQ4G7bPhn9m5daEBJBtUR3xgUEhCO%2BVNgRqz5N9cQ2pcNazDiJfGawYd%2F3GfqLN%2FbXElLA99oMSOVB%2FQaYM2Yq%2BDD2XL3BuPEESoc0ruXq6Qumjb9%2BybkOrqwmMdU3MslUe1VGxVWY9TuP2Yv9PGoD2Gj1BOtvQhHb2jaGsKifAWQLBHC1YT7FdsVh0E1ez4skMr7M9ziiY48sBEkrdG28%2B7S6oLb6hbDnOvaWpPdGswn%2FGu2B2BxQBiGa3Cxak5ViszPc7dwdV2ClClNUMNK05b1evYJbrPQ8j5i4nWLPHranzOPdAiMVoQakZbYsajj6dD1cwN54sLoGvXenOa%2FZ3Cjx2EZyu3xXGHK%2FHqsx9GtBKrsnRnmNYXJ2wbRgzYCVlL19JoBRKlv%2BHAVV4Kuqe%2Byi0dmsAf69dBYqqm9VygMhxedm9%2FkkWIdoy9Z1uhgTfClBC%2FsswntnsvgY6pgFhKjXFGtL2FKXNrJHGC4%2FsjhbQedIaGhQOoCHYx%2FmszctsSEr0SVAztgXcjt8lMlkXGQ04%2B0MVeG78%2FJ590H59%2FQ0c4vOgcjeKRk2PPXWJ5DYSsdrK7wTYyZnFLcyqfeJ3%2BsNK%2BfAfGlBh6KJ4JGp77SAeBYF8ejJW0FY93Zfe4jbEKdVELyYsGuNh8fjhPkxQOVyhs4ck%2BlOW%2B8wUYIzrcpUeADcT&X-Amz-Signature=bd08d787622890e1c6f9311d3476d117a07051ca581ed4509129791b71fe8db8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWWINT5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHNEpENqrv6au30kcGa08a7o3n7LQ7LlUrGXGFCriRmHAiBnmCuo0i3itltztmGA%2FKmjYjHPivYUhsTe4AZZ%2FasLUyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM30hV2iTqhLPayvyAKtwD9IMhcP%2BDMVYZBP4T4rn4xrtJ1dQ2hY6jjEtUfAR0kV3WZMkQAsFE%2FTZKK6FiS5tfGYApQStyKmvpuacRR5q835jD2MpSIUHEfgVkzz%2FMXpPzz99QRFy%2BFIYi%2FQ1IFOhDZSqyX9tVmVEJKBU8CS8Vtl%2FzbDuCNCw4op6A%2F%2Felh1R64qPXhhQ4G7bPhn9m5daEBJBtUR3xgUEhCO%2BVNgRqz5N9cQ2pcNazDiJfGawYd%2F3GfqLN%2FbXElLA99oMSOVB%2FQaYM2Yq%2BDD2XL3BuPEESoc0ruXq6Qumjb9%2BybkOrqwmMdU3MslUe1VGxVWY9TuP2Yv9PGoD2Gj1BOtvQhHb2jaGsKifAWQLBHC1YT7FdsVh0E1ez4skMr7M9ziiY48sBEkrdG28%2B7S6oLb6hbDnOvaWpPdGswn%2FGu2B2BxQBiGa3Cxak5ViszPc7dwdV2ClClNUMNK05b1evYJbrPQ8j5i4nWLPHranzOPdAiMVoQakZbYsajj6dD1cwN54sLoGvXenOa%2FZ3Cjx2EZyu3xXGHK%2FHqsx9GtBKrsnRnmNYXJ2wbRgzYCVlL19JoBRKlv%2BHAVV4Kuqe%2Byi0dmsAf69dBYqqm9VygMhxedm9%2FkkWIdoy9Z1uhgTfClBC%2FsswntnsvgY6pgFhKjXFGtL2FKXNrJHGC4%2FsjhbQedIaGhQOoCHYx%2FmszctsSEr0SVAztgXcjt8lMlkXGQ04%2B0MVeG78%2FJ590H59%2FQ0c4vOgcjeKRk2PPXWJ5DYSsdrK7wTYyZnFLcyqfeJ3%2BsNK%2BfAfGlBh6KJ4JGp77SAeBYF8ejJW0FY93Zfe4jbEKdVELyYsGuNh8fjhPkxQOVyhs4ck%2BlOW%2B8wUYIzrcpUeADcT&X-Amz-Signature=377b366b034b4d343a50173628930b56124b3451fd1164cc4794ab4a9ab65f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWWINT5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHNEpENqrv6au30kcGa08a7o3n7LQ7LlUrGXGFCriRmHAiBnmCuo0i3itltztmGA%2FKmjYjHPivYUhsTe4AZZ%2FasLUyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM30hV2iTqhLPayvyAKtwD9IMhcP%2BDMVYZBP4T4rn4xrtJ1dQ2hY6jjEtUfAR0kV3WZMkQAsFE%2FTZKK6FiS5tfGYApQStyKmvpuacRR5q835jD2MpSIUHEfgVkzz%2FMXpPzz99QRFy%2BFIYi%2FQ1IFOhDZSqyX9tVmVEJKBU8CS8Vtl%2FzbDuCNCw4op6A%2F%2Felh1R64qPXhhQ4G7bPhn9m5daEBJBtUR3xgUEhCO%2BVNgRqz5N9cQ2pcNazDiJfGawYd%2F3GfqLN%2FbXElLA99oMSOVB%2FQaYM2Yq%2BDD2XL3BuPEESoc0ruXq6Qumjb9%2BybkOrqwmMdU3MslUe1VGxVWY9TuP2Yv9PGoD2Gj1BOtvQhHb2jaGsKifAWQLBHC1YT7FdsVh0E1ez4skMr7M9ziiY48sBEkrdG28%2B7S6oLb6hbDnOvaWpPdGswn%2FGu2B2BxQBiGa3Cxak5ViszPc7dwdV2ClClNUMNK05b1evYJbrPQ8j5i4nWLPHranzOPdAiMVoQakZbYsajj6dD1cwN54sLoGvXenOa%2FZ3Cjx2EZyu3xXGHK%2FHqsx9GtBKrsnRnmNYXJ2wbRgzYCVlL19JoBRKlv%2BHAVV4Kuqe%2Byi0dmsAf69dBYqqm9VygMhxedm9%2FkkWIdoy9Z1uhgTfClBC%2FsswntnsvgY6pgFhKjXFGtL2FKXNrJHGC4%2FsjhbQedIaGhQOoCHYx%2FmszctsSEr0SVAztgXcjt8lMlkXGQ04%2B0MVeG78%2FJ590H59%2FQ0c4vOgcjeKRk2PPXWJ5DYSsdrK7wTYyZnFLcyqfeJ3%2BsNK%2BfAfGlBh6KJ4JGp77SAeBYF8ejJW0FY93Zfe4jbEKdVELyYsGuNh8fjhPkxQOVyhs4ck%2BlOW%2B8wUYIzrcpUeADcT&X-Amz-Signature=113ee8c5644ad3ec61185221d16253df9f39c5ef72347815ecef0c14c1f2bacc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWWINT5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHNEpENqrv6au30kcGa08a7o3n7LQ7LlUrGXGFCriRmHAiBnmCuo0i3itltztmGA%2FKmjYjHPivYUhsTe4AZZ%2FasLUyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM30hV2iTqhLPayvyAKtwD9IMhcP%2BDMVYZBP4T4rn4xrtJ1dQ2hY6jjEtUfAR0kV3WZMkQAsFE%2FTZKK6FiS5tfGYApQStyKmvpuacRR5q835jD2MpSIUHEfgVkzz%2FMXpPzz99QRFy%2BFIYi%2FQ1IFOhDZSqyX9tVmVEJKBU8CS8Vtl%2FzbDuCNCw4op6A%2F%2Felh1R64qPXhhQ4G7bPhn9m5daEBJBtUR3xgUEhCO%2BVNgRqz5N9cQ2pcNazDiJfGawYd%2F3GfqLN%2FbXElLA99oMSOVB%2FQaYM2Yq%2BDD2XL3BuPEESoc0ruXq6Qumjb9%2BybkOrqwmMdU3MslUe1VGxVWY9TuP2Yv9PGoD2Gj1BOtvQhHb2jaGsKifAWQLBHC1YT7FdsVh0E1ez4skMr7M9ziiY48sBEkrdG28%2B7S6oLb6hbDnOvaWpPdGswn%2FGu2B2BxQBiGa3Cxak5ViszPc7dwdV2ClClNUMNK05b1evYJbrPQ8j5i4nWLPHranzOPdAiMVoQakZbYsajj6dD1cwN54sLoGvXenOa%2FZ3Cjx2EZyu3xXGHK%2FHqsx9GtBKrsnRnmNYXJ2wbRgzYCVlL19JoBRKlv%2BHAVV4Kuqe%2Byi0dmsAf69dBYqqm9VygMhxedm9%2FkkWIdoy9Z1uhgTfClBC%2FsswntnsvgY6pgFhKjXFGtL2FKXNrJHGC4%2FsjhbQedIaGhQOoCHYx%2FmszctsSEr0SVAztgXcjt8lMlkXGQ04%2B0MVeG78%2FJ590H59%2FQ0c4vOgcjeKRk2PPXWJ5DYSsdrK7wTYyZnFLcyqfeJ3%2BsNK%2BfAfGlBh6KJ4JGp77SAeBYF8ejJW0FY93Zfe4jbEKdVELyYsGuNh8fjhPkxQOVyhs4ck%2BlOW%2B8wUYIzrcpUeADcT&X-Amz-Signature=012179fcbf4c3e35d3648275b9dd3f8f54c6b4068bc67b285d6c94a7fb84a812&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWWINT5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHNEpENqrv6au30kcGa08a7o3n7LQ7LlUrGXGFCriRmHAiBnmCuo0i3itltztmGA%2FKmjYjHPivYUhsTe4AZZ%2FasLUyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM30hV2iTqhLPayvyAKtwD9IMhcP%2BDMVYZBP4T4rn4xrtJ1dQ2hY6jjEtUfAR0kV3WZMkQAsFE%2FTZKK6FiS5tfGYApQStyKmvpuacRR5q835jD2MpSIUHEfgVkzz%2FMXpPzz99QRFy%2BFIYi%2FQ1IFOhDZSqyX9tVmVEJKBU8CS8Vtl%2FzbDuCNCw4op6A%2F%2Felh1R64qPXhhQ4G7bPhn9m5daEBJBtUR3xgUEhCO%2BVNgRqz5N9cQ2pcNazDiJfGawYd%2F3GfqLN%2FbXElLA99oMSOVB%2FQaYM2Yq%2BDD2XL3BuPEESoc0ruXq6Qumjb9%2BybkOrqwmMdU3MslUe1VGxVWY9TuP2Yv9PGoD2Gj1BOtvQhHb2jaGsKifAWQLBHC1YT7FdsVh0E1ez4skMr7M9ziiY48sBEkrdG28%2B7S6oLb6hbDnOvaWpPdGswn%2FGu2B2BxQBiGa3Cxak5ViszPc7dwdV2ClClNUMNK05b1evYJbrPQ8j5i4nWLPHranzOPdAiMVoQakZbYsajj6dD1cwN54sLoGvXenOa%2FZ3Cjx2EZyu3xXGHK%2FHqsx9GtBKrsnRnmNYXJ2wbRgzYCVlL19JoBRKlv%2BHAVV4Kuqe%2Byi0dmsAf69dBYqqm9VygMhxedm9%2FkkWIdoy9Z1uhgTfClBC%2FsswntnsvgY6pgFhKjXFGtL2FKXNrJHGC4%2FsjhbQedIaGhQOoCHYx%2FmszctsSEr0SVAztgXcjt8lMlkXGQ04%2B0MVeG78%2FJ590H59%2FQ0c4vOgcjeKRk2PPXWJ5DYSsdrK7wTYyZnFLcyqfeJ3%2BsNK%2BfAfGlBh6KJ4JGp77SAeBYF8ejJW0FY93Zfe4jbEKdVELyYsGuNh8fjhPkxQOVyhs4ck%2BlOW%2B8wUYIzrcpUeADcT&X-Amz-Signature=b4c06bf545c749d0e60fe26ee063b05dd1a62d30add7851fecfe555cfb768312&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWWINT5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHNEpENqrv6au30kcGa08a7o3n7LQ7LlUrGXGFCriRmHAiBnmCuo0i3itltztmGA%2FKmjYjHPivYUhsTe4AZZ%2FasLUyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM30hV2iTqhLPayvyAKtwD9IMhcP%2BDMVYZBP4T4rn4xrtJ1dQ2hY6jjEtUfAR0kV3WZMkQAsFE%2FTZKK6FiS5tfGYApQStyKmvpuacRR5q835jD2MpSIUHEfgVkzz%2FMXpPzz99QRFy%2BFIYi%2FQ1IFOhDZSqyX9tVmVEJKBU8CS8Vtl%2FzbDuCNCw4op6A%2F%2Felh1R64qPXhhQ4G7bPhn9m5daEBJBtUR3xgUEhCO%2BVNgRqz5N9cQ2pcNazDiJfGawYd%2F3GfqLN%2FbXElLA99oMSOVB%2FQaYM2Yq%2BDD2XL3BuPEESoc0ruXq6Qumjb9%2BybkOrqwmMdU3MslUe1VGxVWY9TuP2Yv9PGoD2Gj1BOtvQhHb2jaGsKifAWQLBHC1YT7FdsVh0E1ez4skMr7M9ziiY48sBEkrdG28%2B7S6oLb6hbDnOvaWpPdGswn%2FGu2B2BxQBiGa3Cxak5ViszPc7dwdV2ClClNUMNK05b1evYJbrPQ8j5i4nWLPHranzOPdAiMVoQakZbYsajj6dD1cwN54sLoGvXenOa%2FZ3Cjx2EZyu3xXGHK%2FHqsx9GtBKrsnRnmNYXJ2wbRgzYCVlL19JoBRKlv%2BHAVV4Kuqe%2Byi0dmsAf69dBYqqm9VygMhxedm9%2FkkWIdoy9Z1uhgTfClBC%2FsswntnsvgY6pgFhKjXFGtL2FKXNrJHGC4%2FsjhbQedIaGhQOoCHYx%2FmszctsSEr0SVAztgXcjt8lMlkXGQ04%2B0MVeG78%2FJ590H59%2FQ0c4vOgcjeKRk2PPXWJ5DYSsdrK7wTYyZnFLcyqfeJ3%2BsNK%2BfAfGlBh6KJ4JGp77SAeBYF8ejJW0FY93Zfe4jbEKdVELyYsGuNh8fjhPkxQOVyhs4ck%2BlOW%2B8wUYIzrcpUeADcT&X-Amz-Signature=85117cb494fdff707200dc63697b24729ebc5334e47b0890df50e19a42ea41b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWWINT5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHNEpENqrv6au30kcGa08a7o3n7LQ7LlUrGXGFCriRmHAiBnmCuo0i3itltztmGA%2FKmjYjHPivYUhsTe4AZZ%2FasLUyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM30hV2iTqhLPayvyAKtwD9IMhcP%2BDMVYZBP4T4rn4xrtJ1dQ2hY6jjEtUfAR0kV3WZMkQAsFE%2FTZKK6FiS5tfGYApQStyKmvpuacRR5q835jD2MpSIUHEfgVkzz%2FMXpPzz99QRFy%2BFIYi%2FQ1IFOhDZSqyX9tVmVEJKBU8CS8Vtl%2FzbDuCNCw4op6A%2F%2Felh1R64qPXhhQ4G7bPhn9m5daEBJBtUR3xgUEhCO%2BVNgRqz5N9cQ2pcNazDiJfGawYd%2F3GfqLN%2FbXElLA99oMSOVB%2FQaYM2Yq%2BDD2XL3BuPEESoc0ruXq6Qumjb9%2BybkOrqwmMdU3MslUe1VGxVWY9TuP2Yv9PGoD2Gj1BOtvQhHb2jaGsKifAWQLBHC1YT7FdsVh0E1ez4skMr7M9ziiY48sBEkrdG28%2B7S6oLb6hbDnOvaWpPdGswn%2FGu2B2BxQBiGa3Cxak5ViszPc7dwdV2ClClNUMNK05b1evYJbrPQ8j5i4nWLPHranzOPdAiMVoQakZbYsajj6dD1cwN54sLoGvXenOa%2FZ3Cjx2EZyu3xXGHK%2FHqsx9GtBKrsnRnmNYXJ2wbRgzYCVlL19JoBRKlv%2BHAVV4Kuqe%2Byi0dmsAf69dBYqqm9VygMhxedm9%2FkkWIdoy9Z1uhgTfClBC%2FsswntnsvgY6pgFhKjXFGtL2FKXNrJHGC4%2FsjhbQedIaGhQOoCHYx%2FmszctsSEr0SVAztgXcjt8lMlkXGQ04%2B0MVeG78%2FJ590H59%2FQ0c4vOgcjeKRk2PPXWJ5DYSsdrK7wTYyZnFLcyqfeJ3%2BsNK%2BfAfGlBh6KJ4JGp77SAeBYF8ejJW0FY93Zfe4jbEKdVELyYsGuNh8fjhPkxQOVyhs4ck%2BlOW%2B8wUYIzrcpUeADcT&X-Amz-Signature=368d571563c0d04932ab1a1cb50b26b6920f40cc339e9a3c98dd26afb7e90c04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
