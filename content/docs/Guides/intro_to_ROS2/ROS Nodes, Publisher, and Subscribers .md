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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEYQT7M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohNlUaa5PLWVSq3g6QnTT0Cb5AI2Dq6qtM6vvIGDMjAiBH99v9pGXz28rxzg%2B8ClgjPlzWW3rqJVEkIw3QmsZsyir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN34UIrKIqyCxyOK6KtwDCWMvE985%2Fcohlg7Bs0FKve2JZ85tfph2Yq4ipSZmbHjZ5N9MjCIzAEOFEIP%2FNbEdvb2eP65Ib1J7HZGzHX7kR6FODO4GNb1fiCV6KnVNELd0Iue9bNhQlx%2FySpZZc2887nm%2FcZLF1ffilJraMFzTV%2Bkw%2Ff0jFLcYxodYe4JYLM6ccchqAf4qbmrKcHC2mLiSeii5jfB1%2F3bvwXSHeRIDA8nahKNvi%2BROwsKFgDUzLY6ruHTSL%2BsqTyqkitLdOGJhAfbzwKh4B6eAC2MKA9wVvQl2xViDdK0cfI9GXYPId7SqoBAhmmnRPAw6GMwkhwsgUXZgIcWdpemC%2F6snzNLmVvYarGY2kSC0HtR9ZJsnH5GjKVPVjoONvZwGB%2B0dtttwYKIioCI%2Fi8VrVDPthHosqyf59pREkQBZmRIwm1zbqd1JCkbihkUyiSY73qPh1fc7XyoC646lfkFD%2B%2BhUFYmgeXYSueprEu7OgRgwpr0DM9vUiEu01qTF%2FBNmOpgDgMRVR0CCYU66h6a7Chggv%2FVXM6FYJd%2ByaT23rdqdxrloXNxHvScIlbCwk9Rdwytw3hHHcAy3sjzpDRsYrWB%2FVsBW%2FsoRmjxHQJK08yuxKdjmrAHTBZ6%2FyUDeXhmjmhYwtt6HwAY6pgEPKS2SqbuOx1VIHXpxgMicE8%2ByCpWLPRFtugUY6bcemJu7WRD%2BEnXUI28eemocXZktbbQ1HOfI7RoYjKDdSJxoxxoKOjko830C4qENQzfliSIc2%2BvdwVJO%2BXGgEk%2FIkVEL9XfPhnFste6HXHdzQu5RSVt7OPGJLtC9ODNQt6fuVIG0I3QcX1UKO3BjIK8xMdKdYF%2FkPtDA3R%2BFWSDCv%2BpBA6XFouqe&X-Amz-Signature=953b93f601e13bb2174a18c786eb10d39527dc578564d4cdcfdd728bc7993538&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEYQT7M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohNlUaa5PLWVSq3g6QnTT0Cb5AI2Dq6qtM6vvIGDMjAiBH99v9pGXz28rxzg%2B8ClgjPlzWW3rqJVEkIw3QmsZsyir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN34UIrKIqyCxyOK6KtwDCWMvE985%2Fcohlg7Bs0FKve2JZ85tfph2Yq4ipSZmbHjZ5N9MjCIzAEOFEIP%2FNbEdvb2eP65Ib1J7HZGzHX7kR6FODO4GNb1fiCV6KnVNELd0Iue9bNhQlx%2FySpZZc2887nm%2FcZLF1ffilJraMFzTV%2Bkw%2Ff0jFLcYxodYe4JYLM6ccchqAf4qbmrKcHC2mLiSeii5jfB1%2F3bvwXSHeRIDA8nahKNvi%2BROwsKFgDUzLY6ruHTSL%2BsqTyqkitLdOGJhAfbzwKh4B6eAC2MKA9wVvQl2xViDdK0cfI9GXYPId7SqoBAhmmnRPAw6GMwkhwsgUXZgIcWdpemC%2F6snzNLmVvYarGY2kSC0HtR9ZJsnH5GjKVPVjoONvZwGB%2B0dtttwYKIioCI%2Fi8VrVDPthHosqyf59pREkQBZmRIwm1zbqd1JCkbihkUyiSY73qPh1fc7XyoC646lfkFD%2B%2BhUFYmgeXYSueprEu7OgRgwpr0DM9vUiEu01qTF%2FBNmOpgDgMRVR0CCYU66h6a7Chggv%2FVXM6FYJd%2ByaT23rdqdxrloXNxHvScIlbCwk9Rdwytw3hHHcAy3sjzpDRsYrWB%2FVsBW%2FsoRmjxHQJK08yuxKdjmrAHTBZ6%2FyUDeXhmjmhYwtt6HwAY6pgEPKS2SqbuOx1VIHXpxgMicE8%2ByCpWLPRFtugUY6bcemJu7WRD%2BEnXUI28eemocXZktbbQ1HOfI7RoYjKDdSJxoxxoKOjko830C4qENQzfliSIc2%2BvdwVJO%2BXGgEk%2FIkVEL9XfPhnFste6HXHdzQu5RSVt7OPGJLtC9ODNQt6fuVIG0I3QcX1UKO3BjIK8xMdKdYF%2FkPtDA3R%2BFWSDCv%2BpBA6XFouqe&X-Amz-Signature=5bd8cf448b2f9ba022c15a39b0e62beb36aac251638c8486b3dbcab83577783f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEYQT7M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohNlUaa5PLWVSq3g6QnTT0Cb5AI2Dq6qtM6vvIGDMjAiBH99v9pGXz28rxzg%2B8ClgjPlzWW3rqJVEkIw3QmsZsyir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN34UIrKIqyCxyOK6KtwDCWMvE985%2Fcohlg7Bs0FKve2JZ85tfph2Yq4ipSZmbHjZ5N9MjCIzAEOFEIP%2FNbEdvb2eP65Ib1J7HZGzHX7kR6FODO4GNb1fiCV6KnVNELd0Iue9bNhQlx%2FySpZZc2887nm%2FcZLF1ffilJraMFzTV%2Bkw%2Ff0jFLcYxodYe4JYLM6ccchqAf4qbmrKcHC2mLiSeii5jfB1%2F3bvwXSHeRIDA8nahKNvi%2BROwsKFgDUzLY6ruHTSL%2BsqTyqkitLdOGJhAfbzwKh4B6eAC2MKA9wVvQl2xViDdK0cfI9GXYPId7SqoBAhmmnRPAw6GMwkhwsgUXZgIcWdpemC%2F6snzNLmVvYarGY2kSC0HtR9ZJsnH5GjKVPVjoONvZwGB%2B0dtttwYKIioCI%2Fi8VrVDPthHosqyf59pREkQBZmRIwm1zbqd1JCkbihkUyiSY73qPh1fc7XyoC646lfkFD%2B%2BhUFYmgeXYSueprEu7OgRgwpr0DM9vUiEu01qTF%2FBNmOpgDgMRVR0CCYU66h6a7Chggv%2FVXM6FYJd%2ByaT23rdqdxrloXNxHvScIlbCwk9Rdwytw3hHHcAy3sjzpDRsYrWB%2FVsBW%2FsoRmjxHQJK08yuxKdjmrAHTBZ6%2FyUDeXhmjmhYwtt6HwAY6pgEPKS2SqbuOx1VIHXpxgMicE8%2ByCpWLPRFtugUY6bcemJu7WRD%2BEnXUI28eemocXZktbbQ1HOfI7RoYjKDdSJxoxxoKOjko830C4qENQzfliSIc2%2BvdwVJO%2BXGgEk%2FIkVEL9XfPhnFste6HXHdzQu5RSVt7OPGJLtC9ODNQt6fuVIG0I3QcX1UKO3BjIK8xMdKdYF%2FkPtDA3R%2BFWSDCv%2BpBA6XFouqe&X-Amz-Signature=1558bfa36cbbff13e9d83677e15f04a8ee1cd568377584fa0d40d044f6cb5f79&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEYQT7M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohNlUaa5PLWVSq3g6QnTT0Cb5AI2Dq6qtM6vvIGDMjAiBH99v9pGXz28rxzg%2B8ClgjPlzWW3rqJVEkIw3QmsZsyir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN34UIrKIqyCxyOK6KtwDCWMvE985%2Fcohlg7Bs0FKve2JZ85tfph2Yq4ipSZmbHjZ5N9MjCIzAEOFEIP%2FNbEdvb2eP65Ib1J7HZGzHX7kR6FODO4GNb1fiCV6KnVNELd0Iue9bNhQlx%2FySpZZc2887nm%2FcZLF1ffilJraMFzTV%2Bkw%2Ff0jFLcYxodYe4JYLM6ccchqAf4qbmrKcHC2mLiSeii5jfB1%2F3bvwXSHeRIDA8nahKNvi%2BROwsKFgDUzLY6ruHTSL%2BsqTyqkitLdOGJhAfbzwKh4B6eAC2MKA9wVvQl2xViDdK0cfI9GXYPId7SqoBAhmmnRPAw6GMwkhwsgUXZgIcWdpemC%2F6snzNLmVvYarGY2kSC0HtR9ZJsnH5GjKVPVjoONvZwGB%2B0dtttwYKIioCI%2Fi8VrVDPthHosqyf59pREkQBZmRIwm1zbqd1JCkbihkUyiSY73qPh1fc7XyoC646lfkFD%2B%2BhUFYmgeXYSueprEu7OgRgwpr0DM9vUiEu01qTF%2FBNmOpgDgMRVR0CCYU66h6a7Chggv%2FVXM6FYJd%2ByaT23rdqdxrloXNxHvScIlbCwk9Rdwytw3hHHcAy3sjzpDRsYrWB%2FVsBW%2FsoRmjxHQJK08yuxKdjmrAHTBZ6%2FyUDeXhmjmhYwtt6HwAY6pgEPKS2SqbuOx1VIHXpxgMicE8%2ByCpWLPRFtugUY6bcemJu7WRD%2BEnXUI28eemocXZktbbQ1HOfI7RoYjKDdSJxoxxoKOjko830C4qENQzfliSIc2%2BvdwVJO%2BXGgEk%2FIkVEL9XfPhnFste6HXHdzQu5RSVt7OPGJLtC9ODNQt6fuVIG0I3QcX1UKO3BjIK8xMdKdYF%2FkPtDA3R%2BFWSDCv%2BpBA6XFouqe&X-Amz-Signature=b148468789045474fe2b9096e1a0aa1c53e1ac4e18f910accfa8a8d38d91e074&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEYQT7M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohNlUaa5PLWVSq3g6QnTT0Cb5AI2Dq6qtM6vvIGDMjAiBH99v9pGXz28rxzg%2B8ClgjPlzWW3rqJVEkIw3QmsZsyir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN34UIrKIqyCxyOK6KtwDCWMvE985%2Fcohlg7Bs0FKve2JZ85tfph2Yq4ipSZmbHjZ5N9MjCIzAEOFEIP%2FNbEdvb2eP65Ib1J7HZGzHX7kR6FODO4GNb1fiCV6KnVNELd0Iue9bNhQlx%2FySpZZc2887nm%2FcZLF1ffilJraMFzTV%2Bkw%2Ff0jFLcYxodYe4JYLM6ccchqAf4qbmrKcHC2mLiSeii5jfB1%2F3bvwXSHeRIDA8nahKNvi%2BROwsKFgDUzLY6ruHTSL%2BsqTyqkitLdOGJhAfbzwKh4B6eAC2MKA9wVvQl2xViDdK0cfI9GXYPId7SqoBAhmmnRPAw6GMwkhwsgUXZgIcWdpemC%2F6snzNLmVvYarGY2kSC0HtR9ZJsnH5GjKVPVjoONvZwGB%2B0dtttwYKIioCI%2Fi8VrVDPthHosqyf59pREkQBZmRIwm1zbqd1JCkbihkUyiSY73qPh1fc7XyoC646lfkFD%2B%2BhUFYmgeXYSueprEu7OgRgwpr0DM9vUiEu01qTF%2FBNmOpgDgMRVR0CCYU66h6a7Chggv%2FVXM6FYJd%2ByaT23rdqdxrloXNxHvScIlbCwk9Rdwytw3hHHcAy3sjzpDRsYrWB%2FVsBW%2FsoRmjxHQJK08yuxKdjmrAHTBZ6%2FyUDeXhmjmhYwtt6HwAY6pgEPKS2SqbuOx1VIHXpxgMicE8%2ByCpWLPRFtugUY6bcemJu7WRD%2BEnXUI28eemocXZktbbQ1HOfI7RoYjKDdSJxoxxoKOjko830C4qENQzfliSIc2%2BvdwVJO%2BXGgEk%2FIkVEL9XfPhnFste6HXHdzQu5RSVt7OPGJLtC9ODNQt6fuVIG0I3QcX1UKO3BjIK8xMdKdYF%2FkPtDA3R%2BFWSDCv%2BpBA6XFouqe&X-Amz-Signature=e975b737d1cde4f24434194e9ca2860ce26f701a59df691af8d9d03968dfc653&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEYQT7M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohNlUaa5PLWVSq3g6QnTT0Cb5AI2Dq6qtM6vvIGDMjAiBH99v9pGXz28rxzg%2B8ClgjPlzWW3rqJVEkIw3QmsZsyir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN34UIrKIqyCxyOK6KtwDCWMvE985%2Fcohlg7Bs0FKve2JZ85tfph2Yq4ipSZmbHjZ5N9MjCIzAEOFEIP%2FNbEdvb2eP65Ib1J7HZGzHX7kR6FODO4GNb1fiCV6KnVNELd0Iue9bNhQlx%2FySpZZc2887nm%2FcZLF1ffilJraMFzTV%2Bkw%2Ff0jFLcYxodYe4JYLM6ccchqAf4qbmrKcHC2mLiSeii5jfB1%2F3bvwXSHeRIDA8nahKNvi%2BROwsKFgDUzLY6ruHTSL%2BsqTyqkitLdOGJhAfbzwKh4B6eAC2MKA9wVvQl2xViDdK0cfI9GXYPId7SqoBAhmmnRPAw6GMwkhwsgUXZgIcWdpemC%2F6snzNLmVvYarGY2kSC0HtR9ZJsnH5GjKVPVjoONvZwGB%2B0dtttwYKIioCI%2Fi8VrVDPthHosqyf59pREkQBZmRIwm1zbqd1JCkbihkUyiSY73qPh1fc7XyoC646lfkFD%2B%2BhUFYmgeXYSueprEu7OgRgwpr0DM9vUiEu01qTF%2FBNmOpgDgMRVR0CCYU66h6a7Chggv%2FVXM6FYJd%2ByaT23rdqdxrloXNxHvScIlbCwk9Rdwytw3hHHcAy3sjzpDRsYrWB%2FVsBW%2FsoRmjxHQJK08yuxKdjmrAHTBZ6%2FyUDeXhmjmhYwtt6HwAY6pgEPKS2SqbuOx1VIHXpxgMicE8%2ByCpWLPRFtugUY6bcemJu7WRD%2BEnXUI28eemocXZktbbQ1HOfI7RoYjKDdSJxoxxoKOjko830C4qENQzfliSIc2%2BvdwVJO%2BXGgEk%2FIkVEL9XfPhnFste6HXHdzQu5RSVt7OPGJLtC9ODNQt6fuVIG0I3QcX1UKO3BjIK8xMdKdYF%2FkPtDA3R%2BFWSDCv%2BpBA6XFouqe&X-Amz-Signature=01ea4a2e5d1d6907755dba289ee95f505eef33f4eda2c33530967da31f279125&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEYQT7M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohNlUaa5PLWVSq3g6QnTT0Cb5AI2Dq6qtM6vvIGDMjAiBH99v9pGXz28rxzg%2B8ClgjPlzWW3rqJVEkIw3QmsZsyir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN34UIrKIqyCxyOK6KtwDCWMvE985%2Fcohlg7Bs0FKve2JZ85tfph2Yq4ipSZmbHjZ5N9MjCIzAEOFEIP%2FNbEdvb2eP65Ib1J7HZGzHX7kR6FODO4GNb1fiCV6KnVNELd0Iue9bNhQlx%2FySpZZc2887nm%2FcZLF1ffilJraMFzTV%2Bkw%2Ff0jFLcYxodYe4JYLM6ccchqAf4qbmrKcHC2mLiSeii5jfB1%2F3bvwXSHeRIDA8nahKNvi%2BROwsKFgDUzLY6ruHTSL%2BsqTyqkitLdOGJhAfbzwKh4B6eAC2MKA9wVvQl2xViDdK0cfI9GXYPId7SqoBAhmmnRPAw6GMwkhwsgUXZgIcWdpemC%2F6snzNLmVvYarGY2kSC0HtR9ZJsnH5GjKVPVjoONvZwGB%2B0dtttwYKIioCI%2Fi8VrVDPthHosqyf59pREkQBZmRIwm1zbqd1JCkbihkUyiSY73qPh1fc7XyoC646lfkFD%2B%2BhUFYmgeXYSueprEu7OgRgwpr0DM9vUiEu01qTF%2FBNmOpgDgMRVR0CCYU66h6a7Chggv%2FVXM6FYJd%2ByaT23rdqdxrloXNxHvScIlbCwk9Rdwytw3hHHcAy3sjzpDRsYrWB%2FVsBW%2FsoRmjxHQJK08yuxKdjmrAHTBZ6%2FyUDeXhmjmhYwtt6HwAY6pgEPKS2SqbuOx1VIHXpxgMicE8%2ByCpWLPRFtugUY6bcemJu7WRD%2BEnXUI28eemocXZktbbQ1HOfI7RoYjKDdSJxoxxoKOjko830C4qENQzfliSIc2%2BvdwVJO%2BXGgEk%2FIkVEL9XfPhnFste6HXHdzQu5RSVt7OPGJLtC9ODNQt6fuVIG0I3QcX1UKO3BjIK8xMdKdYF%2FkPtDA3R%2BFWSDCv%2BpBA6XFouqe&X-Amz-Signature=529ea32327f315f8041ebb37a2b7ebd14c954c51e80f3234042267c2f766db99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEYQT7M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohNlUaa5PLWVSq3g6QnTT0Cb5AI2Dq6qtM6vvIGDMjAiBH99v9pGXz28rxzg%2B8ClgjPlzWW3rqJVEkIw3QmsZsyir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN34UIrKIqyCxyOK6KtwDCWMvE985%2Fcohlg7Bs0FKve2JZ85tfph2Yq4ipSZmbHjZ5N9MjCIzAEOFEIP%2FNbEdvb2eP65Ib1J7HZGzHX7kR6FODO4GNb1fiCV6KnVNELd0Iue9bNhQlx%2FySpZZc2887nm%2FcZLF1ffilJraMFzTV%2Bkw%2Ff0jFLcYxodYe4JYLM6ccchqAf4qbmrKcHC2mLiSeii5jfB1%2F3bvwXSHeRIDA8nahKNvi%2BROwsKFgDUzLY6ruHTSL%2BsqTyqkitLdOGJhAfbzwKh4B6eAC2MKA9wVvQl2xViDdK0cfI9GXYPId7SqoBAhmmnRPAw6GMwkhwsgUXZgIcWdpemC%2F6snzNLmVvYarGY2kSC0HtR9ZJsnH5GjKVPVjoONvZwGB%2B0dtttwYKIioCI%2Fi8VrVDPthHosqyf59pREkQBZmRIwm1zbqd1JCkbihkUyiSY73qPh1fc7XyoC646lfkFD%2B%2BhUFYmgeXYSueprEu7OgRgwpr0DM9vUiEu01qTF%2FBNmOpgDgMRVR0CCYU66h6a7Chggv%2FVXM6FYJd%2ByaT23rdqdxrloXNxHvScIlbCwk9Rdwytw3hHHcAy3sjzpDRsYrWB%2FVsBW%2FsoRmjxHQJK08yuxKdjmrAHTBZ6%2FyUDeXhmjmhYwtt6HwAY6pgEPKS2SqbuOx1VIHXpxgMicE8%2ByCpWLPRFtugUY6bcemJu7WRD%2BEnXUI28eemocXZktbbQ1HOfI7RoYjKDdSJxoxxoKOjko830C4qENQzfliSIc2%2BvdwVJO%2BXGgEk%2FIkVEL9XfPhnFste6HXHdzQu5RSVt7OPGJLtC9ODNQt6fuVIG0I3QcX1UKO3BjIK8xMdKdYF%2FkPtDA3R%2BFWSDCv%2BpBA6XFouqe&X-Amz-Signature=92c2bc11da423ee73c83bcff82e99c119b45966089ae02a3637da3aa7dc1a616&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
