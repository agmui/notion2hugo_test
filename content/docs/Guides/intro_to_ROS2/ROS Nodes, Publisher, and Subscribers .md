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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSK6CTU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICnykM5Lw7XE8NWvfSTvqfP03x5vrMRkekghjhAA%2FUWUAiEAzNI9pFduQPT2cENIFpNp5JDOnq9Ixs%2B1hnFwkbJnWp4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL2Cf9BM2TS3iO8uyrcAwa%2F0Y5CxrhJk%2BdgknqRxjzPQxpKQeQGKP%2Fn7bdKIFLqiBx6ypi3Aiu0nv2a0HFUtCBa51S3hOo58M9k5m8I9fu68DSGs4n9%2F6gQNalROpi2msJCICsEjOn35fo3193kbUUbXFXL0LAu7hXOAmXbZhlHXCs6UEXweFUr6uFRSVxlFO2vGnGGP%2BEQh8IqNdSJT8dIFAcMelxssFYbZWzVt0Pe%2BJnUAK0pe%2FC5vCcQSulFqL2ArRe%2BWwwNluakVQRxhF6%2BAaGK1L9sEFLFRi6K6b%2Br4ld%2Bb52Cbals%2BjkRP0wLTIq9CSvcwqeMLdhLLwwdI9i6FacUt%2FRbp2dZfB%2FQZqE5e7reHBwTw2jg%2BcykR%2FK0DoiOvF2B95Wwkrt4V4F95soj6cxlupLIb7Tlwn4RPAztNOyrAvHxerJdh5WNqatO4Hn5oQlepO1fSPP8Y9VgOisUBpbjFKq3KgQFip5BrZXdJj81Kt3UaAu2quISs6vWulwuqGBVLx62pQAEhkQB0iWg3v61EItWDC%2BtZKETikFzBzvRYAZLXvjaHko9n6ny4%2BB633D49OaQ%2BiiOo4v46h7c1DQtc%2Bp%2FYYyaqswCiNOv8pFk%2BtjlbWidqt1s6TOctY5Lae9VJ2cvNm7LMOLQs78GOqUBAMJ9%2FosMImyyeUpb6sbTHB13Q%2BsrV787Ndq5kVh84rLozK5O9DCqUWJ2PATHz5fpQA79221tH8gYDW3kydLIzvsnjnbcnJfyX6dIlmGQE6sIr31vQIuPwRjOu9UUqFUdViv5cO4NKGQGbVB45juk50PxDI08sUSqfkmNT0r4W3jZ85l2t9dsvBsEsGIGt%2BV47WihfuRY5hqqHc9m0p60kla0Y3n9&X-Amz-Signature=6d784018a8c35f1be29c444f3adb98447d2c89b82068d16e7ee263b199579214&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSK6CTU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICnykM5Lw7XE8NWvfSTvqfP03x5vrMRkekghjhAA%2FUWUAiEAzNI9pFduQPT2cENIFpNp5JDOnq9Ixs%2B1hnFwkbJnWp4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL2Cf9BM2TS3iO8uyrcAwa%2F0Y5CxrhJk%2BdgknqRxjzPQxpKQeQGKP%2Fn7bdKIFLqiBx6ypi3Aiu0nv2a0HFUtCBa51S3hOo58M9k5m8I9fu68DSGs4n9%2F6gQNalROpi2msJCICsEjOn35fo3193kbUUbXFXL0LAu7hXOAmXbZhlHXCs6UEXweFUr6uFRSVxlFO2vGnGGP%2BEQh8IqNdSJT8dIFAcMelxssFYbZWzVt0Pe%2BJnUAK0pe%2FC5vCcQSulFqL2ArRe%2BWwwNluakVQRxhF6%2BAaGK1L9sEFLFRi6K6b%2Br4ld%2Bb52Cbals%2BjkRP0wLTIq9CSvcwqeMLdhLLwwdI9i6FacUt%2FRbp2dZfB%2FQZqE5e7reHBwTw2jg%2BcykR%2FK0DoiOvF2B95Wwkrt4V4F95soj6cxlupLIb7Tlwn4RPAztNOyrAvHxerJdh5WNqatO4Hn5oQlepO1fSPP8Y9VgOisUBpbjFKq3KgQFip5BrZXdJj81Kt3UaAu2quISs6vWulwuqGBVLx62pQAEhkQB0iWg3v61EItWDC%2BtZKETikFzBzvRYAZLXvjaHko9n6ny4%2BB633D49OaQ%2BiiOo4v46h7c1DQtc%2Bp%2FYYyaqswCiNOv8pFk%2BtjlbWidqt1s6TOctY5Lae9VJ2cvNm7LMOLQs78GOqUBAMJ9%2FosMImyyeUpb6sbTHB13Q%2BsrV787Ndq5kVh84rLozK5O9DCqUWJ2PATHz5fpQA79221tH8gYDW3kydLIzvsnjnbcnJfyX6dIlmGQE6sIr31vQIuPwRjOu9UUqFUdViv5cO4NKGQGbVB45juk50PxDI08sUSqfkmNT0r4W3jZ85l2t9dsvBsEsGIGt%2BV47WihfuRY5hqqHc9m0p60kla0Y3n9&X-Amz-Signature=3bc49a01a5821ed29810d6ac5b480a3feb8a5525a760a7cbef26c0749219f303&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSK6CTU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICnykM5Lw7XE8NWvfSTvqfP03x5vrMRkekghjhAA%2FUWUAiEAzNI9pFduQPT2cENIFpNp5JDOnq9Ixs%2B1hnFwkbJnWp4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL2Cf9BM2TS3iO8uyrcAwa%2F0Y5CxrhJk%2BdgknqRxjzPQxpKQeQGKP%2Fn7bdKIFLqiBx6ypi3Aiu0nv2a0HFUtCBa51S3hOo58M9k5m8I9fu68DSGs4n9%2F6gQNalROpi2msJCICsEjOn35fo3193kbUUbXFXL0LAu7hXOAmXbZhlHXCs6UEXweFUr6uFRSVxlFO2vGnGGP%2BEQh8IqNdSJT8dIFAcMelxssFYbZWzVt0Pe%2BJnUAK0pe%2FC5vCcQSulFqL2ArRe%2BWwwNluakVQRxhF6%2BAaGK1L9sEFLFRi6K6b%2Br4ld%2Bb52Cbals%2BjkRP0wLTIq9CSvcwqeMLdhLLwwdI9i6FacUt%2FRbp2dZfB%2FQZqE5e7reHBwTw2jg%2BcykR%2FK0DoiOvF2B95Wwkrt4V4F95soj6cxlupLIb7Tlwn4RPAztNOyrAvHxerJdh5WNqatO4Hn5oQlepO1fSPP8Y9VgOisUBpbjFKq3KgQFip5BrZXdJj81Kt3UaAu2quISs6vWulwuqGBVLx62pQAEhkQB0iWg3v61EItWDC%2BtZKETikFzBzvRYAZLXvjaHko9n6ny4%2BB633D49OaQ%2BiiOo4v46h7c1DQtc%2Bp%2FYYyaqswCiNOv8pFk%2BtjlbWidqt1s6TOctY5Lae9VJ2cvNm7LMOLQs78GOqUBAMJ9%2FosMImyyeUpb6sbTHB13Q%2BsrV787Ndq5kVh84rLozK5O9DCqUWJ2PATHz5fpQA79221tH8gYDW3kydLIzvsnjnbcnJfyX6dIlmGQE6sIr31vQIuPwRjOu9UUqFUdViv5cO4NKGQGbVB45juk50PxDI08sUSqfkmNT0r4W3jZ85l2t9dsvBsEsGIGt%2BV47WihfuRY5hqqHc9m0p60kla0Y3n9&X-Amz-Signature=e39cbdef9b5972cc2fa8be5d3f503fd7ecdf3d9a80d04bd78632ffe434c59486&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSK6CTU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICnykM5Lw7XE8NWvfSTvqfP03x5vrMRkekghjhAA%2FUWUAiEAzNI9pFduQPT2cENIFpNp5JDOnq9Ixs%2B1hnFwkbJnWp4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL2Cf9BM2TS3iO8uyrcAwa%2F0Y5CxrhJk%2BdgknqRxjzPQxpKQeQGKP%2Fn7bdKIFLqiBx6ypi3Aiu0nv2a0HFUtCBa51S3hOo58M9k5m8I9fu68DSGs4n9%2F6gQNalROpi2msJCICsEjOn35fo3193kbUUbXFXL0LAu7hXOAmXbZhlHXCs6UEXweFUr6uFRSVxlFO2vGnGGP%2BEQh8IqNdSJT8dIFAcMelxssFYbZWzVt0Pe%2BJnUAK0pe%2FC5vCcQSulFqL2ArRe%2BWwwNluakVQRxhF6%2BAaGK1L9sEFLFRi6K6b%2Br4ld%2Bb52Cbals%2BjkRP0wLTIq9CSvcwqeMLdhLLwwdI9i6FacUt%2FRbp2dZfB%2FQZqE5e7reHBwTw2jg%2BcykR%2FK0DoiOvF2B95Wwkrt4V4F95soj6cxlupLIb7Tlwn4RPAztNOyrAvHxerJdh5WNqatO4Hn5oQlepO1fSPP8Y9VgOisUBpbjFKq3KgQFip5BrZXdJj81Kt3UaAu2quISs6vWulwuqGBVLx62pQAEhkQB0iWg3v61EItWDC%2BtZKETikFzBzvRYAZLXvjaHko9n6ny4%2BB633D49OaQ%2BiiOo4v46h7c1DQtc%2Bp%2FYYyaqswCiNOv8pFk%2BtjlbWidqt1s6TOctY5Lae9VJ2cvNm7LMOLQs78GOqUBAMJ9%2FosMImyyeUpb6sbTHB13Q%2BsrV787Ndq5kVh84rLozK5O9DCqUWJ2PATHz5fpQA79221tH8gYDW3kydLIzvsnjnbcnJfyX6dIlmGQE6sIr31vQIuPwRjOu9UUqFUdViv5cO4NKGQGbVB45juk50PxDI08sUSqfkmNT0r4W3jZ85l2t9dsvBsEsGIGt%2BV47WihfuRY5hqqHc9m0p60kla0Y3n9&X-Amz-Signature=d8825467b8bad82f406e0321f589fc5077b2fa6bdcb1fe3ab96c9e2750373e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSK6CTU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICnykM5Lw7XE8NWvfSTvqfP03x5vrMRkekghjhAA%2FUWUAiEAzNI9pFduQPT2cENIFpNp5JDOnq9Ixs%2B1hnFwkbJnWp4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL2Cf9BM2TS3iO8uyrcAwa%2F0Y5CxrhJk%2BdgknqRxjzPQxpKQeQGKP%2Fn7bdKIFLqiBx6ypi3Aiu0nv2a0HFUtCBa51S3hOo58M9k5m8I9fu68DSGs4n9%2F6gQNalROpi2msJCICsEjOn35fo3193kbUUbXFXL0LAu7hXOAmXbZhlHXCs6UEXweFUr6uFRSVxlFO2vGnGGP%2BEQh8IqNdSJT8dIFAcMelxssFYbZWzVt0Pe%2BJnUAK0pe%2FC5vCcQSulFqL2ArRe%2BWwwNluakVQRxhF6%2BAaGK1L9sEFLFRi6K6b%2Br4ld%2Bb52Cbals%2BjkRP0wLTIq9CSvcwqeMLdhLLwwdI9i6FacUt%2FRbp2dZfB%2FQZqE5e7reHBwTw2jg%2BcykR%2FK0DoiOvF2B95Wwkrt4V4F95soj6cxlupLIb7Tlwn4RPAztNOyrAvHxerJdh5WNqatO4Hn5oQlepO1fSPP8Y9VgOisUBpbjFKq3KgQFip5BrZXdJj81Kt3UaAu2quISs6vWulwuqGBVLx62pQAEhkQB0iWg3v61EItWDC%2BtZKETikFzBzvRYAZLXvjaHko9n6ny4%2BB633D49OaQ%2BiiOo4v46h7c1DQtc%2Bp%2FYYyaqswCiNOv8pFk%2BtjlbWidqt1s6TOctY5Lae9VJ2cvNm7LMOLQs78GOqUBAMJ9%2FosMImyyeUpb6sbTHB13Q%2BsrV787Ndq5kVh84rLozK5O9DCqUWJ2PATHz5fpQA79221tH8gYDW3kydLIzvsnjnbcnJfyX6dIlmGQE6sIr31vQIuPwRjOu9UUqFUdViv5cO4NKGQGbVB45juk50PxDI08sUSqfkmNT0r4W3jZ85l2t9dsvBsEsGIGt%2BV47WihfuRY5hqqHc9m0p60kla0Y3n9&X-Amz-Signature=f312c64486a9e7013a78c2f79e31ce95f638958c674310958f49f700a17bcf89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSK6CTU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICnykM5Lw7XE8NWvfSTvqfP03x5vrMRkekghjhAA%2FUWUAiEAzNI9pFduQPT2cENIFpNp5JDOnq9Ixs%2B1hnFwkbJnWp4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL2Cf9BM2TS3iO8uyrcAwa%2F0Y5CxrhJk%2BdgknqRxjzPQxpKQeQGKP%2Fn7bdKIFLqiBx6ypi3Aiu0nv2a0HFUtCBa51S3hOo58M9k5m8I9fu68DSGs4n9%2F6gQNalROpi2msJCICsEjOn35fo3193kbUUbXFXL0LAu7hXOAmXbZhlHXCs6UEXweFUr6uFRSVxlFO2vGnGGP%2BEQh8IqNdSJT8dIFAcMelxssFYbZWzVt0Pe%2BJnUAK0pe%2FC5vCcQSulFqL2ArRe%2BWwwNluakVQRxhF6%2BAaGK1L9sEFLFRi6K6b%2Br4ld%2Bb52Cbals%2BjkRP0wLTIq9CSvcwqeMLdhLLwwdI9i6FacUt%2FRbp2dZfB%2FQZqE5e7reHBwTw2jg%2BcykR%2FK0DoiOvF2B95Wwkrt4V4F95soj6cxlupLIb7Tlwn4RPAztNOyrAvHxerJdh5WNqatO4Hn5oQlepO1fSPP8Y9VgOisUBpbjFKq3KgQFip5BrZXdJj81Kt3UaAu2quISs6vWulwuqGBVLx62pQAEhkQB0iWg3v61EItWDC%2BtZKETikFzBzvRYAZLXvjaHko9n6ny4%2BB633D49OaQ%2BiiOo4v46h7c1DQtc%2Bp%2FYYyaqswCiNOv8pFk%2BtjlbWidqt1s6TOctY5Lae9VJ2cvNm7LMOLQs78GOqUBAMJ9%2FosMImyyeUpb6sbTHB13Q%2BsrV787Ndq5kVh84rLozK5O9DCqUWJ2PATHz5fpQA79221tH8gYDW3kydLIzvsnjnbcnJfyX6dIlmGQE6sIr31vQIuPwRjOu9UUqFUdViv5cO4NKGQGbVB45juk50PxDI08sUSqfkmNT0r4W3jZ85l2t9dsvBsEsGIGt%2BV47WihfuRY5hqqHc9m0p60kla0Y3n9&X-Amz-Signature=7c135db9b63319d6f0bc1eb9222b108370de40ac2fe60f5a0151db15b36dd47f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSK6CTU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICnykM5Lw7XE8NWvfSTvqfP03x5vrMRkekghjhAA%2FUWUAiEAzNI9pFduQPT2cENIFpNp5JDOnq9Ixs%2B1hnFwkbJnWp4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL2Cf9BM2TS3iO8uyrcAwa%2F0Y5CxrhJk%2BdgknqRxjzPQxpKQeQGKP%2Fn7bdKIFLqiBx6ypi3Aiu0nv2a0HFUtCBa51S3hOo58M9k5m8I9fu68DSGs4n9%2F6gQNalROpi2msJCICsEjOn35fo3193kbUUbXFXL0LAu7hXOAmXbZhlHXCs6UEXweFUr6uFRSVxlFO2vGnGGP%2BEQh8IqNdSJT8dIFAcMelxssFYbZWzVt0Pe%2BJnUAK0pe%2FC5vCcQSulFqL2ArRe%2BWwwNluakVQRxhF6%2BAaGK1L9sEFLFRi6K6b%2Br4ld%2Bb52Cbals%2BjkRP0wLTIq9CSvcwqeMLdhLLwwdI9i6FacUt%2FRbp2dZfB%2FQZqE5e7reHBwTw2jg%2BcykR%2FK0DoiOvF2B95Wwkrt4V4F95soj6cxlupLIb7Tlwn4RPAztNOyrAvHxerJdh5WNqatO4Hn5oQlepO1fSPP8Y9VgOisUBpbjFKq3KgQFip5BrZXdJj81Kt3UaAu2quISs6vWulwuqGBVLx62pQAEhkQB0iWg3v61EItWDC%2BtZKETikFzBzvRYAZLXvjaHko9n6ny4%2BB633D49OaQ%2BiiOo4v46h7c1DQtc%2Bp%2FYYyaqswCiNOv8pFk%2BtjlbWidqt1s6TOctY5Lae9VJ2cvNm7LMOLQs78GOqUBAMJ9%2FosMImyyeUpb6sbTHB13Q%2BsrV787Ndq5kVh84rLozK5O9DCqUWJ2PATHz5fpQA79221tH8gYDW3kydLIzvsnjnbcnJfyX6dIlmGQE6sIr31vQIuPwRjOu9UUqFUdViv5cO4NKGQGbVB45juk50PxDI08sUSqfkmNT0r4W3jZ85l2t9dsvBsEsGIGt%2BV47WihfuRY5hqqHc9m0p60kla0Y3n9&X-Amz-Signature=c9f7c0fa220c6d226c5e70ae3604ec8f90b6644fa511d04030af37a275e09ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSK6CTU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICnykM5Lw7XE8NWvfSTvqfP03x5vrMRkekghjhAA%2FUWUAiEAzNI9pFduQPT2cENIFpNp5JDOnq9Ixs%2B1hnFwkbJnWp4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL2Cf9BM2TS3iO8uyrcAwa%2F0Y5CxrhJk%2BdgknqRxjzPQxpKQeQGKP%2Fn7bdKIFLqiBx6ypi3Aiu0nv2a0HFUtCBa51S3hOo58M9k5m8I9fu68DSGs4n9%2F6gQNalROpi2msJCICsEjOn35fo3193kbUUbXFXL0LAu7hXOAmXbZhlHXCs6UEXweFUr6uFRSVxlFO2vGnGGP%2BEQh8IqNdSJT8dIFAcMelxssFYbZWzVt0Pe%2BJnUAK0pe%2FC5vCcQSulFqL2ArRe%2BWwwNluakVQRxhF6%2BAaGK1L9sEFLFRi6K6b%2Br4ld%2Bb52Cbals%2BjkRP0wLTIq9CSvcwqeMLdhLLwwdI9i6FacUt%2FRbp2dZfB%2FQZqE5e7reHBwTw2jg%2BcykR%2FK0DoiOvF2B95Wwkrt4V4F95soj6cxlupLIb7Tlwn4RPAztNOyrAvHxerJdh5WNqatO4Hn5oQlepO1fSPP8Y9VgOisUBpbjFKq3KgQFip5BrZXdJj81Kt3UaAu2quISs6vWulwuqGBVLx62pQAEhkQB0iWg3v61EItWDC%2BtZKETikFzBzvRYAZLXvjaHko9n6ny4%2BB633D49OaQ%2BiiOo4v46h7c1DQtc%2Bp%2FYYyaqswCiNOv8pFk%2BtjlbWidqt1s6TOctY5Lae9VJ2cvNm7LMOLQs78GOqUBAMJ9%2FosMImyyeUpb6sbTHB13Q%2BsrV787Ndq5kVh84rLozK5O9DCqUWJ2PATHz5fpQA79221tH8gYDW3kydLIzvsnjnbcnJfyX6dIlmGQE6sIr31vQIuPwRjOu9UUqFUdViv5cO4NKGQGbVB45juk50PxDI08sUSqfkmNT0r4W3jZ85l2t9dsvBsEsGIGt%2BV47WihfuRY5hqqHc9m0p60kla0Y3n9&X-Amz-Signature=bbdc084288d79e22479b7682636af2b2593055f0a7e158cd49f74d2eb171a1f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
