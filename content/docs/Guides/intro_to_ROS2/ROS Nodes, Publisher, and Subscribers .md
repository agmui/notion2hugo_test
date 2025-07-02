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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOJA7RK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIQZFCMJz9hueSO4Ys6WEN9lbMcc4uhkBp9beSvYZYaAiBm2efsyhm2%2FhxmYO8FmnYVADn5utnszmLFk%2Fha55ajRCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6fHvy4pHY5HbYoXPKtwDBJ5Zp97V97m1xediuL0%2BzlANoKn5IaTGD7pk7fpZblCn51tanpjdMWX3gu%2BPbrYFsNtuGI2p07Svjlifjsu8qnnsS%2BCrJlq887AmC7ImfDN3u92eB9K2290rmYj%2B0ldk%2Fy0uQ%2BP%2BM5oEFcR%2FYB1mAUC5tj7ovD4bYkGm1a8lec%2FFZpbGnDQc3j3gGm9fwk6u24%2BbvJf0eu64LnMgwaGsHDcj1ajmOqQUssZxa%2Bro8Ejnn0WwZ8hdc7W4V%2FCLLuKLTqxN6pa6IwyYdSerR25UIHvjbioCohWen5WvoG0SQJja73moBKQlg%2F0Mjil%2B%2BgCZkFdgkdxuMFH3z0VsBEd5RVW80b9rxqrzyC6QaJ0h9gjwlbqLkrPRMq2coUHR7jCK1nAF0PpVbGOSqxqd%2B5CRFp4jpYvKFUuj0RDDJtAUwUl%2FPEB2pe92cGKeEeRCfD76jygF6IUUctnRFH8pCKIRwbB4%2BskpWH9nBrY8KCHuiky8MYrMB6N%2BFVfK5BazRnAvaAZfzZRaSqfDPrQdLZ8QUUNyQ71p9fEQCVDAFI5RqkdesjaxEIY%2FJeOBQQ5jw5sIBQOLlM5MZt4N%2BGHfrleXmPfiAakpNhek2dzfo3QZlrPJiruDmewgmyTZDWUw7tqSwwY6pgGD5le9BKXMXvYAV750DXDyACm0HmqoecPp1vob827jJAULtig2TQPw6YAxUEx4SBfzcnh0eMy6WsBpQnQ9XKUGJLKD6YpbOc5TDuHL9kdfrcI3oBFWjL0BksY8HioG9JX4OLHIqNe%2FeRbFU0HFtUF32d%2FMZyr8WoPfqeRKN0C3HBBNeVFgoRuTSBqeOdSb%2Fr4RicP5FHWehy%2BNAjLRJxE5ZXounfW1&X-Amz-Signature=032a2752e424b036727e3d20687466f3fe96aaf741d68a13511609c78d986859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOJA7RK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIQZFCMJz9hueSO4Ys6WEN9lbMcc4uhkBp9beSvYZYaAiBm2efsyhm2%2FhxmYO8FmnYVADn5utnszmLFk%2Fha55ajRCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6fHvy4pHY5HbYoXPKtwDBJ5Zp97V97m1xediuL0%2BzlANoKn5IaTGD7pk7fpZblCn51tanpjdMWX3gu%2BPbrYFsNtuGI2p07Svjlifjsu8qnnsS%2BCrJlq887AmC7ImfDN3u92eB9K2290rmYj%2B0ldk%2Fy0uQ%2BP%2BM5oEFcR%2FYB1mAUC5tj7ovD4bYkGm1a8lec%2FFZpbGnDQc3j3gGm9fwk6u24%2BbvJf0eu64LnMgwaGsHDcj1ajmOqQUssZxa%2Bro8Ejnn0WwZ8hdc7W4V%2FCLLuKLTqxN6pa6IwyYdSerR25UIHvjbioCohWen5WvoG0SQJja73moBKQlg%2F0Mjil%2B%2BgCZkFdgkdxuMFH3z0VsBEd5RVW80b9rxqrzyC6QaJ0h9gjwlbqLkrPRMq2coUHR7jCK1nAF0PpVbGOSqxqd%2B5CRFp4jpYvKFUuj0RDDJtAUwUl%2FPEB2pe92cGKeEeRCfD76jygF6IUUctnRFH8pCKIRwbB4%2BskpWH9nBrY8KCHuiky8MYrMB6N%2BFVfK5BazRnAvaAZfzZRaSqfDPrQdLZ8QUUNyQ71p9fEQCVDAFI5RqkdesjaxEIY%2FJeOBQQ5jw5sIBQOLlM5MZt4N%2BGHfrleXmPfiAakpNhek2dzfo3QZlrPJiruDmewgmyTZDWUw7tqSwwY6pgGD5le9BKXMXvYAV750DXDyACm0HmqoecPp1vob827jJAULtig2TQPw6YAxUEx4SBfzcnh0eMy6WsBpQnQ9XKUGJLKD6YpbOc5TDuHL9kdfrcI3oBFWjL0BksY8HioG9JX4OLHIqNe%2FeRbFU0HFtUF32d%2FMZyr8WoPfqeRKN0C3HBBNeVFgoRuTSBqeOdSb%2Fr4RicP5FHWehy%2BNAjLRJxE5ZXounfW1&X-Amz-Signature=9126ac9df2d1e316640ee416a53a6621a11a01070f1da528e7c842f797d9393e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOJA7RK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIQZFCMJz9hueSO4Ys6WEN9lbMcc4uhkBp9beSvYZYaAiBm2efsyhm2%2FhxmYO8FmnYVADn5utnszmLFk%2Fha55ajRCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6fHvy4pHY5HbYoXPKtwDBJ5Zp97V97m1xediuL0%2BzlANoKn5IaTGD7pk7fpZblCn51tanpjdMWX3gu%2BPbrYFsNtuGI2p07Svjlifjsu8qnnsS%2BCrJlq887AmC7ImfDN3u92eB9K2290rmYj%2B0ldk%2Fy0uQ%2BP%2BM5oEFcR%2FYB1mAUC5tj7ovD4bYkGm1a8lec%2FFZpbGnDQc3j3gGm9fwk6u24%2BbvJf0eu64LnMgwaGsHDcj1ajmOqQUssZxa%2Bro8Ejnn0WwZ8hdc7W4V%2FCLLuKLTqxN6pa6IwyYdSerR25UIHvjbioCohWen5WvoG0SQJja73moBKQlg%2F0Mjil%2B%2BgCZkFdgkdxuMFH3z0VsBEd5RVW80b9rxqrzyC6QaJ0h9gjwlbqLkrPRMq2coUHR7jCK1nAF0PpVbGOSqxqd%2B5CRFp4jpYvKFUuj0RDDJtAUwUl%2FPEB2pe92cGKeEeRCfD76jygF6IUUctnRFH8pCKIRwbB4%2BskpWH9nBrY8KCHuiky8MYrMB6N%2BFVfK5BazRnAvaAZfzZRaSqfDPrQdLZ8QUUNyQ71p9fEQCVDAFI5RqkdesjaxEIY%2FJeOBQQ5jw5sIBQOLlM5MZt4N%2BGHfrleXmPfiAakpNhek2dzfo3QZlrPJiruDmewgmyTZDWUw7tqSwwY6pgGD5le9BKXMXvYAV750DXDyACm0HmqoecPp1vob827jJAULtig2TQPw6YAxUEx4SBfzcnh0eMy6WsBpQnQ9XKUGJLKD6YpbOc5TDuHL9kdfrcI3oBFWjL0BksY8HioG9JX4OLHIqNe%2FeRbFU0HFtUF32d%2FMZyr8WoPfqeRKN0C3HBBNeVFgoRuTSBqeOdSb%2Fr4RicP5FHWehy%2BNAjLRJxE5ZXounfW1&X-Amz-Signature=b3a31f235fdc2014e1a53ca5b91285b038948835cc2f1b6a20737bc5a480e1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOJA7RK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIQZFCMJz9hueSO4Ys6WEN9lbMcc4uhkBp9beSvYZYaAiBm2efsyhm2%2FhxmYO8FmnYVADn5utnszmLFk%2Fha55ajRCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6fHvy4pHY5HbYoXPKtwDBJ5Zp97V97m1xediuL0%2BzlANoKn5IaTGD7pk7fpZblCn51tanpjdMWX3gu%2BPbrYFsNtuGI2p07Svjlifjsu8qnnsS%2BCrJlq887AmC7ImfDN3u92eB9K2290rmYj%2B0ldk%2Fy0uQ%2BP%2BM5oEFcR%2FYB1mAUC5tj7ovD4bYkGm1a8lec%2FFZpbGnDQc3j3gGm9fwk6u24%2BbvJf0eu64LnMgwaGsHDcj1ajmOqQUssZxa%2Bro8Ejnn0WwZ8hdc7W4V%2FCLLuKLTqxN6pa6IwyYdSerR25UIHvjbioCohWen5WvoG0SQJja73moBKQlg%2F0Mjil%2B%2BgCZkFdgkdxuMFH3z0VsBEd5RVW80b9rxqrzyC6QaJ0h9gjwlbqLkrPRMq2coUHR7jCK1nAF0PpVbGOSqxqd%2B5CRFp4jpYvKFUuj0RDDJtAUwUl%2FPEB2pe92cGKeEeRCfD76jygF6IUUctnRFH8pCKIRwbB4%2BskpWH9nBrY8KCHuiky8MYrMB6N%2BFVfK5BazRnAvaAZfzZRaSqfDPrQdLZ8QUUNyQ71p9fEQCVDAFI5RqkdesjaxEIY%2FJeOBQQ5jw5sIBQOLlM5MZt4N%2BGHfrleXmPfiAakpNhek2dzfo3QZlrPJiruDmewgmyTZDWUw7tqSwwY6pgGD5le9BKXMXvYAV750DXDyACm0HmqoecPp1vob827jJAULtig2TQPw6YAxUEx4SBfzcnh0eMy6WsBpQnQ9XKUGJLKD6YpbOc5TDuHL9kdfrcI3oBFWjL0BksY8HioG9JX4OLHIqNe%2FeRbFU0HFtUF32d%2FMZyr8WoPfqeRKN0C3HBBNeVFgoRuTSBqeOdSb%2Fr4RicP5FHWehy%2BNAjLRJxE5ZXounfW1&X-Amz-Signature=c523eef62d94e92b07eb02ef56927bfbdf0c4ffa3ecce3dc461a49d436f10461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOJA7RK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIQZFCMJz9hueSO4Ys6WEN9lbMcc4uhkBp9beSvYZYaAiBm2efsyhm2%2FhxmYO8FmnYVADn5utnszmLFk%2Fha55ajRCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6fHvy4pHY5HbYoXPKtwDBJ5Zp97V97m1xediuL0%2BzlANoKn5IaTGD7pk7fpZblCn51tanpjdMWX3gu%2BPbrYFsNtuGI2p07Svjlifjsu8qnnsS%2BCrJlq887AmC7ImfDN3u92eB9K2290rmYj%2B0ldk%2Fy0uQ%2BP%2BM5oEFcR%2FYB1mAUC5tj7ovD4bYkGm1a8lec%2FFZpbGnDQc3j3gGm9fwk6u24%2BbvJf0eu64LnMgwaGsHDcj1ajmOqQUssZxa%2Bro8Ejnn0WwZ8hdc7W4V%2FCLLuKLTqxN6pa6IwyYdSerR25UIHvjbioCohWen5WvoG0SQJja73moBKQlg%2F0Mjil%2B%2BgCZkFdgkdxuMFH3z0VsBEd5RVW80b9rxqrzyC6QaJ0h9gjwlbqLkrPRMq2coUHR7jCK1nAF0PpVbGOSqxqd%2B5CRFp4jpYvKFUuj0RDDJtAUwUl%2FPEB2pe92cGKeEeRCfD76jygF6IUUctnRFH8pCKIRwbB4%2BskpWH9nBrY8KCHuiky8MYrMB6N%2BFVfK5BazRnAvaAZfzZRaSqfDPrQdLZ8QUUNyQ71p9fEQCVDAFI5RqkdesjaxEIY%2FJeOBQQ5jw5sIBQOLlM5MZt4N%2BGHfrleXmPfiAakpNhek2dzfo3QZlrPJiruDmewgmyTZDWUw7tqSwwY6pgGD5le9BKXMXvYAV750DXDyACm0HmqoecPp1vob827jJAULtig2TQPw6YAxUEx4SBfzcnh0eMy6WsBpQnQ9XKUGJLKD6YpbOc5TDuHL9kdfrcI3oBFWjL0BksY8HioG9JX4OLHIqNe%2FeRbFU0HFtUF32d%2FMZyr8WoPfqeRKN0C3HBBNeVFgoRuTSBqeOdSb%2Fr4RicP5FHWehy%2BNAjLRJxE5ZXounfW1&X-Amz-Signature=6d45535b6384c5f30f8764d3e3f9699042da54cb66ae8a2f5182ea5959237fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOJA7RK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIQZFCMJz9hueSO4Ys6WEN9lbMcc4uhkBp9beSvYZYaAiBm2efsyhm2%2FhxmYO8FmnYVADn5utnszmLFk%2Fha55ajRCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6fHvy4pHY5HbYoXPKtwDBJ5Zp97V97m1xediuL0%2BzlANoKn5IaTGD7pk7fpZblCn51tanpjdMWX3gu%2BPbrYFsNtuGI2p07Svjlifjsu8qnnsS%2BCrJlq887AmC7ImfDN3u92eB9K2290rmYj%2B0ldk%2Fy0uQ%2BP%2BM5oEFcR%2FYB1mAUC5tj7ovD4bYkGm1a8lec%2FFZpbGnDQc3j3gGm9fwk6u24%2BbvJf0eu64LnMgwaGsHDcj1ajmOqQUssZxa%2Bro8Ejnn0WwZ8hdc7W4V%2FCLLuKLTqxN6pa6IwyYdSerR25UIHvjbioCohWen5WvoG0SQJja73moBKQlg%2F0Mjil%2B%2BgCZkFdgkdxuMFH3z0VsBEd5RVW80b9rxqrzyC6QaJ0h9gjwlbqLkrPRMq2coUHR7jCK1nAF0PpVbGOSqxqd%2B5CRFp4jpYvKFUuj0RDDJtAUwUl%2FPEB2pe92cGKeEeRCfD76jygF6IUUctnRFH8pCKIRwbB4%2BskpWH9nBrY8KCHuiky8MYrMB6N%2BFVfK5BazRnAvaAZfzZRaSqfDPrQdLZ8QUUNyQ71p9fEQCVDAFI5RqkdesjaxEIY%2FJeOBQQ5jw5sIBQOLlM5MZt4N%2BGHfrleXmPfiAakpNhek2dzfo3QZlrPJiruDmewgmyTZDWUw7tqSwwY6pgGD5le9BKXMXvYAV750DXDyACm0HmqoecPp1vob827jJAULtig2TQPw6YAxUEx4SBfzcnh0eMy6WsBpQnQ9XKUGJLKD6YpbOc5TDuHL9kdfrcI3oBFWjL0BksY8HioG9JX4OLHIqNe%2FeRbFU0HFtUF32d%2FMZyr8WoPfqeRKN0C3HBBNeVFgoRuTSBqeOdSb%2Fr4RicP5FHWehy%2BNAjLRJxE5ZXounfW1&X-Amz-Signature=4a5f949b4151c4a84cb392001479efa80af805e53b85cd85f5e869fab0176c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOJA7RK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIQZFCMJz9hueSO4Ys6WEN9lbMcc4uhkBp9beSvYZYaAiBm2efsyhm2%2FhxmYO8FmnYVADn5utnszmLFk%2Fha55ajRCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6fHvy4pHY5HbYoXPKtwDBJ5Zp97V97m1xediuL0%2BzlANoKn5IaTGD7pk7fpZblCn51tanpjdMWX3gu%2BPbrYFsNtuGI2p07Svjlifjsu8qnnsS%2BCrJlq887AmC7ImfDN3u92eB9K2290rmYj%2B0ldk%2Fy0uQ%2BP%2BM5oEFcR%2FYB1mAUC5tj7ovD4bYkGm1a8lec%2FFZpbGnDQc3j3gGm9fwk6u24%2BbvJf0eu64LnMgwaGsHDcj1ajmOqQUssZxa%2Bro8Ejnn0WwZ8hdc7W4V%2FCLLuKLTqxN6pa6IwyYdSerR25UIHvjbioCohWen5WvoG0SQJja73moBKQlg%2F0Mjil%2B%2BgCZkFdgkdxuMFH3z0VsBEd5RVW80b9rxqrzyC6QaJ0h9gjwlbqLkrPRMq2coUHR7jCK1nAF0PpVbGOSqxqd%2B5CRFp4jpYvKFUuj0RDDJtAUwUl%2FPEB2pe92cGKeEeRCfD76jygF6IUUctnRFH8pCKIRwbB4%2BskpWH9nBrY8KCHuiky8MYrMB6N%2BFVfK5BazRnAvaAZfzZRaSqfDPrQdLZ8QUUNyQ71p9fEQCVDAFI5RqkdesjaxEIY%2FJeOBQQ5jw5sIBQOLlM5MZt4N%2BGHfrleXmPfiAakpNhek2dzfo3QZlrPJiruDmewgmyTZDWUw7tqSwwY6pgGD5le9BKXMXvYAV750DXDyACm0HmqoecPp1vob827jJAULtig2TQPw6YAxUEx4SBfzcnh0eMy6WsBpQnQ9XKUGJLKD6YpbOc5TDuHL9kdfrcI3oBFWjL0BksY8HioG9JX4OLHIqNe%2FeRbFU0HFtUF32d%2FMZyr8WoPfqeRKN0C3HBBNeVFgoRuTSBqeOdSb%2Fr4RicP5FHWehy%2BNAjLRJxE5ZXounfW1&X-Amz-Signature=06d28b686dd61204c12986c1fa1374976cd9f3fc2f60b8d2a4840ff8a6d4d820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOJA7RK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIQZFCMJz9hueSO4Ys6WEN9lbMcc4uhkBp9beSvYZYaAiBm2efsyhm2%2FhxmYO8FmnYVADn5utnszmLFk%2Fha55ajRCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6fHvy4pHY5HbYoXPKtwDBJ5Zp97V97m1xediuL0%2BzlANoKn5IaTGD7pk7fpZblCn51tanpjdMWX3gu%2BPbrYFsNtuGI2p07Svjlifjsu8qnnsS%2BCrJlq887AmC7ImfDN3u92eB9K2290rmYj%2B0ldk%2Fy0uQ%2BP%2BM5oEFcR%2FYB1mAUC5tj7ovD4bYkGm1a8lec%2FFZpbGnDQc3j3gGm9fwk6u24%2BbvJf0eu64LnMgwaGsHDcj1ajmOqQUssZxa%2Bro8Ejnn0WwZ8hdc7W4V%2FCLLuKLTqxN6pa6IwyYdSerR25UIHvjbioCohWen5WvoG0SQJja73moBKQlg%2F0Mjil%2B%2BgCZkFdgkdxuMFH3z0VsBEd5RVW80b9rxqrzyC6QaJ0h9gjwlbqLkrPRMq2coUHR7jCK1nAF0PpVbGOSqxqd%2B5CRFp4jpYvKFUuj0RDDJtAUwUl%2FPEB2pe92cGKeEeRCfD76jygF6IUUctnRFH8pCKIRwbB4%2BskpWH9nBrY8KCHuiky8MYrMB6N%2BFVfK5BazRnAvaAZfzZRaSqfDPrQdLZ8QUUNyQ71p9fEQCVDAFI5RqkdesjaxEIY%2FJeOBQQ5jw5sIBQOLlM5MZt4N%2BGHfrleXmPfiAakpNhek2dzfo3QZlrPJiruDmewgmyTZDWUw7tqSwwY6pgGD5le9BKXMXvYAV750DXDyACm0HmqoecPp1vob827jJAULtig2TQPw6YAxUEx4SBfzcnh0eMy6WsBpQnQ9XKUGJLKD6YpbOc5TDuHL9kdfrcI3oBFWjL0BksY8HioG9JX4OLHIqNe%2FeRbFU0HFtUF32d%2FMZyr8WoPfqeRKN0C3HBBNeVFgoRuTSBqeOdSb%2Fr4RicP5FHWehy%2BNAjLRJxE5ZXounfW1&X-Amz-Signature=a60960ea3c71ed4cbff905ac59c5c21a31c200a8046f92f29562358e8a357624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
