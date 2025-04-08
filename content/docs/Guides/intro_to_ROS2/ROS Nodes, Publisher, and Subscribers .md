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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4M25QQ4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDNgSEDFkGZeWqj1YtYrX3RCb1hrRcWTBW7aghzWhTOrAiAh1yJOCVe8yw%2FFrbMocWY3alCACE3j9AQio0X2vYSteSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMluWMxJ%2B6iLzC0iRmKtwD6fZPEZA43oAEYjfgbdHL3%2FBfBtsP0t6scDcLO9xh9EWLK%2BzLfkix4wtNsVQkcivTBFVSq3WrPPKd6JtJ3zJUYtjc1XTFIEh7IZcHteMbjWdikZsYpLqHwRop311F3XdVdzOC3BqkKjscDqMI47a4PzNOfzonvvkBS4q5CRRWn45t4MarA2%2FQtjHOnSnt92UtGwsHlzYcqGgQic%2BGJdfHQPIE24qPRiX8LabWtbzHkO6Voys2zLJy%2FwquuYEQP93eoOvgQaW9CFegEfiES6yVsZURnvGbQx579k61fDWLLwozKQDYRu4j3EfdRj3rdUIOxWWRsN%2B6lpRxcjjTCtPkdFBxLutd9xK9bXZzXkvVAdRRPTXvG2U4QWGjbI7ky6bijozs9eEpeSS%2Ba0De2uRxdg91JlJjQ3jhqNk1QHKo%2FS9bIoMsJFfeJFnWRSp2vV9U7gNFGlx2vzsW%2BTVLN37dipnLxDiZRO5U8Qk6%2BTaaZ3cT6ghmmUUSefopmENbiop6tYh1xDf%2BrRrm6ycKxpy8xp9PpZWVNoPDMpiLPQ10Uaniht%2FJC7FaYO2ET4uiw95eRanXE4%2FsmxM4t%2FrY1v6NmWPB%2FvgWpFcCyG%2F51xihwNsRmbNLMV18hXBHGqowmu%2FVvwY6pgFyWhM67I6lzUBf6pvnMAebwwChM4RhkMSOPEHAYWuh7boOBqjDXMZpOQMrVFg7o3aeL6fNBZKQfA4yjXp7rohhfXa7KMjp8xl5csUNiE0uoX1oE9tD%2FKzbKZrH4pWLkXlVbsTkWRnioo6HJoF%2FYX3klWRPLNWxys9F7%2BM8WoPNmXQpQR5miCdFDYPTr7P6PkFIyoZG%2Fo%2Fsa%2FmzKP2HND%2FKZnXH1OQU&X-Amz-Signature=828c2ad12e7e618ffdbc228b0ffe6849ed0626e2d6df1acd722df2f4068c3f54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4M25QQ4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDNgSEDFkGZeWqj1YtYrX3RCb1hrRcWTBW7aghzWhTOrAiAh1yJOCVe8yw%2FFrbMocWY3alCACE3j9AQio0X2vYSteSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMluWMxJ%2B6iLzC0iRmKtwD6fZPEZA43oAEYjfgbdHL3%2FBfBtsP0t6scDcLO9xh9EWLK%2BzLfkix4wtNsVQkcivTBFVSq3WrPPKd6JtJ3zJUYtjc1XTFIEh7IZcHteMbjWdikZsYpLqHwRop311F3XdVdzOC3BqkKjscDqMI47a4PzNOfzonvvkBS4q5CRRWn45t4MarA2%2FQtjHOnSnt92UtGwsHlzYcqGgQic%2BGJdfHQPIE24qPRiX8LabWtbzHkO6Voys2zLJy%2FwquuYEQP93eoOvgQaW9CFegEfiES6yVsZURnvGbQx579k61fDWLLwozKQDYRu4j3EfdRj3rdUIOxWWRsN%2B6lpRxcjjTCtPkdFBxLutd9xK9bXZzXkvVAdRRPTXvG2U4QWGjbI7ky6bijozs9eEpeSS%2Ba0De2uRxdg91JlJjQ3jhqNk1QHKo%2FS9bIoMsJFfeJFnWRSp2vV9U7gNFGlx2vzsW%2BTVLN37dipnLxDiZRO5U8Qk6%2BTaaZ3cT6ghmmUUSefopmENbiop6tYh1xDf%2BrRrm6ycKxpy8xp9PpZWVNoPDMpiLPQ10Uaniht%2FJC7FaYO2ET4uiw95eRanXE4%2FsmxM4t%2FrY1v6NmWPB%2FvgWpFcCyG%2F51xihwNsRmbNLMV18hXBHGqowmu%2FVvwY6pgFyWhM67I6lzUBf6pvnMAebwwChM4RhkMSOPEHAYWuh7boOBqjDXMZpOQMrVFg7o3aeL6fNBZKQfA4yjXp7rohhfXa7KMjp8xl5csUNiE0uoX1oE9tD%2FKzbKZrH4pWLkXlVbsTkWRnioo6HJoF%2FYX3klWRPLNWxys9F7%2BM8WoPNmXQpQR5miCdFDYPTr7P6PkFIyoZG%2Fo%2Fsa%2FmzKP2HND%2FKZnXH1OQU&X-Amz-Signature=cd4a671469e8e110e500be614b6fa999c50d3647a993a48e7c46616084bc4392&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4M25QQ4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDNgSEDFkGZeWqj1YtYrX3RCb1hrRcWTBW7aghzWhTOrAiAh1yJOCVe8yw%2FFrbMocWY3alCACE3j9AQio0X2vYSteSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMluWMxJ%2B6iLzC0iRmKtwD6fZPEZA43oAEYjfgbdHL3%2FBfBtsP0t6scDcLO9xh9EWLK%2BzLfkix4wtNsVQkcivTBFVSq3WrPPKd6JtJ3zJUYtjc1XTFIEh7IZcHteMbjWdikZsYpLqHwRop311F3XdVdzOC3BqkKjscDqMI47a4PzNOfzonvvkBS4q5CRRWn45t4MarA2%2FQtjHOnSnt92UtGwsHlzYcqGgQic%2BGJdfHQPIE24qPRiX8LabWtbzHkO6Voys2zLJy%2FwquuYEQP93eoOvgQaW9CFegEfiES6yVsZURnvGbQx579k61fDWLLwozKQDYRu4j3EfdRj3rdUIOxWWRsN%2B6lpRxcjjTCtPkdFBxLutd9xK9bXZzXkvVAdRRPTXvG2U4QWGjbI7ky6bijozs9eEpeSS%2Ba0De2uRxdg91JlJjQ3jhqNk1QHKo%2FS9bIoMsJFfeJFnWRSp2vV9U7gNFGlx2vzsW%2BTVLN37dipnLxDiZRO5U8Qk6%2BTaaZ3cT6ghmmUUSefopmENbiop6tYh1xDf%2BrRrm6ycKxpy8xp9PpZWVNoPDMpiLPQ10Uaniht%2FJC7FaYO2ET4uiw95eRanXE4%2FsmxM4t%2FrY1v6NmWPB%2FvgWpFcCyG%2F51xihwNsRmbNLMV18hXBHGqowmu%2FVvwY6pgFyWhM67I6lzUBf6pvnMAebwwChM4RhkMSOPEHAYWuh7boOBqjDXMZpOQMrVFg7o3aeL6fNBZKQfA4yjXp7rohhfXa7KMjp8xl5csUNiE0uoX1oE9tD%2FKzbKZrH4pWLkXlVbsTkWRnioo6HJoF%2FYX3klWRPLNWxys9F7%2BM8WoPNmXQpQR5miCdFDYPTr7P6PkFIyoZG%2Fo%2Fsa%2FmzKP2HND%2FKZnXH1OQU&X-Amz-Signature=aed7f98bc965749f493c5967ea525b9f237d6069d97096bd90a8ec4429653e24&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4M25QQ4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDNgSEDFkGZeWqj1YtYrX3RCb1hrRcWTBW7aghzWhTOrAiAh1yJOCVe8yw%2FFrbMocWY3alCACE3j9AQio0X2vYSteSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMluWMxJ%2B6iLzC0iRmKtwD6fZPEZA43oAEYjfgbdHL3%2FBfBtsP0t6scDcLO9xh9EWLK%2BzLfkix4wtNsVQkcivTBFVSq3WrPPKd6JtJ3zJUYtjc1XTFIEh7IZcHteMbjWdikZsYpLqHwRop311F3XdVdzOC3BqkKjscDqMI47a4PzNOfzonvvkBS4q5CRRWn45t4MarA2%2FQtjHOnSnt92UtGwsHlzYcqGgQic%2BGJdfHQPIE24qPRiX8LabWtbzHkO6Voys2zLJy%2FwquuYEQP93eoOvgQaW9CFegEfiES6yVsZURnvGbQx579k61fDWLLwozKQDYRu4j3EfdRj3rdUIOxWWRsN%2B6lpRxcjjTCtPkdFBxLutd9xK9bXZzXkvVAdRRPTXvG2U4QWGjbI7ky6bijozs9eEpeSS%2Ba0De2uRxdg91JlJjQ3jhqNk1QHKo%2FS9bIoMsJFfeJFnWRSp2vV9U7gNFGlx2vzsW%2BTVLN37dipnLxDiZRO5U8Qk6%2BTaaZ3cT6ghmmUUSefopmENbiop6tYh1xDf%2BrRrm6ycKxpy8xp9PpZWVNoPDMpiLPQ10Uaniht%2FJC7FaYO2ET4uiw95eRanXE4%2FsmxM4t%2FrY1v6NmWPB%2FvgWpFcCyG%2F51xihwNsRmbNLMV18hXBHGqowmu%2FVvwY6pgFyWhM67I6lzUBf6pvnMAebwwChM4RhkMSOPEHAYWuh7boOBqjDXMZpOQMrVFg7o3aeL6fNBZKQfA4yjXp7rohhfXa7KMjp8xl5csUNiE0uoX1oE9tD%2FKzbKZrH4pWLkXlVbsTkWRnioo6HJoF%2FYX3klWRPLNWxys9F7%2BM8WoPNmXQpQR5miCdFDYPTr7P6PkFIyoZG%2Fo%2Fsa%2FmzKP2HND%2FKZnXH1OQU&X-Amz-Signature=f79b2253b779e30aa08452c44124eaedcb9d45b80500ba02cda2563cd4d5aecc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4M25QQ4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDNgSEDFkGZeWqj1YtYrX3RCb1hrRcWTBW7aghzWhTOrAiAh1yJOCVe8yw%2FFrbMocWY3alCACE3j9AQio0X2vYSteSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMluWMxJ%2B6iLzC0iRmKtwD6fZPEZA43oAEYjfgbdHL3%2FBfBtsP0t6scDcLO9xh9EWLK%2BzLfkix4wtNsVQkcivTBFVSq3WrPPKd6JtJ3zJUYtjc1XTFIEh7IZcHteMbjWdikZsYpLqHwRop311F3XdVdzOC3BqkKjscDqMI47a4PzNOfzonvvkBS4q5CRRWn45t4MarA2%2FQtjHOnSnt92UtGwsHlzYcqGgQic%2BGJdfHQPIE24qPRiX8LabWtbzHkO6Voys2zLJy%2FwquuYEQP93eoOvgQaW9CFegEfiES6yVsZURnvGbQx579k61fDWLLwozKQDYRu4j3EfdRj3rdUIOxWWRsN%2B6lpRxcjjTCtPkdFBxLutd9xK9bXZzXkvVAdRRPTXvG2U4QWGjbI7ky6bijozs9eEpeSS%2Ba0De2uRxdg91JlJjQ3jhqNk1QHKo%2FS9bIoMsJFfeJFnWRSp2vV9U7gNFGlx2vzsW%2BTVLN37dipnLxDiZRO5U8Qk6%2BTaaZ3cT6ghmmUUSefopmENbiop6tYh1xDf%2BrRrm6ycKxpy8xp9PpZWVNoPDMpiLPQ10Uaniht%2FJC7FaYO2ET4uiw95eRanXE4%2FsmxM4t%2FrY1v6NmWPB%2FvgWpFcCyG%2F51xihwNsRmbNLMV18hXBHGqowmu%2FVvwY6pgFyWhM67I6lzUBf6pvnMAebwwChM4RhkMSOPEHAYWuh7boOBqjDXMZpOQMrVFg7o3aeL6fNBZKQfA4yjXp7rohhfXa7KMjp8xl5csUNiE0uoX1oE9tD%2FKzbKZrH4pWLkXlVbsTkWRnioo6HJoF%2FYX3klWRPLNWxys9F7%2BM8WoPNmXQpQR5miCdFDYPTr7P6PkFIyoZG%2Fo%2Fsa%2FmzKP2HND%2FKZnXH1OQU&X-Amz-Signature=240caa188a983e0ac041e95f901df701974fdb7d7c81ce0431e33a454c12daad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4M25QQ4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDNgSEDFkGZeWqj1YtYrX3RCb1hrRcWTBW7aghzWhTOrAiAh1yJOCVe8yw%2FFrbMocWY3alCACE3j9AQio0X2vYSteSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMluWMxJ%2B6iLzC0iRmKtwD6fZPEZA43oAEYjfgbdHL3%2FBfBtsP0t6scDcLO9xh9EWLK%2BzLfkix4wtNsVQkcivTBFVSq3WrPPKd6JtJ3zJUYtjc1XTFIEh7IZcHteMbjWdikZsYpLqHwRop311F3XdVdzOC3BqkKjscDqMI47a4PzNOfzonvvkBS4q5CRRWn45t4MarA2%2FQtjHOnSnt92UtGwsHlzYcqGgQic%2BGJdfHQPIE24qPRiX8LabWtbzHkO6Voys2zLJy%2FwquuYEQP93eoOvgQaW9CFegEfiES6yVsZURnvGbQx579k61fDWLLwozKQDYRu4j3EfdRj3rdUIOxWWRsN%2B6lpRxcjjTCtPkdFBxLutd9xK9bXZzXkvVAdRRPTXvG2U4QWGjbI7ky6bijozs9eEpeSS%2Ba0De2uRxdg91JlJjQ3jhqNk1QHKo%2FS9bIoMsJFfeJFnWRSp2vV9U7gNFGlx2vzsW%2BTVLN37dipnLxDiZRO5U8Qk6%2BTaaZ3cT6ghmmUUSefopmENbiop6tYh1xDf%2BrRrm6ycKxpy8xp9PpZWVNoPDMpiLPQ10Uaniht%2FJC7FaYO2ET4uiw95eRanXE4%2FsmxM4t%2FrY1v6NmWPB%2FvgWpFcCyG%2F51xihwNsRmbNLMV18hXBHGqowmu%2FVvwY6pgFyWhM67I6lzUBf6pvnMAebwwChM4RhkMSOPEHAYWuh7boOBqjDXMZpOQMrVFg7o3aeL6fNBZKQfA4yjXp7rohhfXa7KMjp8xl5csUNiE0uoX1oE9tD%2FKzbKZrH4pWLkXlVbsTkWRnioo6HJoF%2FYX3klWRPLNWxys9F7%2BM8WoPNmXQpQR5miCdFDYPTr7P6PkFIyoZG%2Fo%2Fsa%2FmzKP2HND%2FKZnXH1OQU&X-Amz-Signature=3172186c97c366b984459a4975afac725d30481a448707c7f81a5b14badcfc44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4M25QQ4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDNgSEDFkGZeWqj1YtYrX3RCb1hrRcWTBW7aghzWhTOrAiAh1yJOCVe8yw%2FFrbMocWY3alCACE3j9AQio0X2vYSteSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMluWMxJ%2B6iLzC0iRmKtwD6fZPEZA43oAEYjfgbdHL3%2FBfBtsP0t6scDcLO9xh9EWLK%2BzLfkix4wtNsVQkcivTBFVSq3WrPPKd6JtJ3zJUYtjc1XTFIEh7IZcHteMbjWdikZsYpLqHwRop311F3XdVdzOC3BqkKjscDqMI47a4PzNOfzonvvkBS4q5CRRWn45t4MarA2%2FQtjHOnSnt92UtGwsHlzYcqGgQic%2BGJdfHQPIE24qPRiX8LabWtbzHkO6Voys2zLJy%2FwquuYEQP93eoOvgQaW9CFegEfiES6yVsZURnvGbQx579k61fDWLLwozKQDYRu4j3EfdRj3rdUIOxWWRsN%2B6lpRxcjjTCtPkdFBxLutd9xK9bXZzXkvVAdRRPTXvG2U4QWGjbI7ky6bijozs9eEpeSS%2Ba0De2uRxdg91JlJjQ3jhqNk1QHKo%2FS9bIoMsJFfeJFnWRSp2vV9U7gNFGlx2vzsW%2BTVLN37dipnLxDiZRO5U8Qk6%2BTaaZ3cT6ghmmUUSefopmENbiop6tYh1xDf%2BrRrm6ycKxpy8xp9PpZWVNoPDMpiLPQ10Uaniht%2FJC7FaYO2ET4uiw95eRanXE4%2FsmxM4t%2FrY1v6NmWPB%2FvgWpFcCyG%2F51xihwNsRmbNLMV18hXBHGqowmu%2FVvwY6pgFyWhM67I6lzUBf6pvnMAebwwChM4RhkMSOPEHAYWuh7boOBqjDXMZpOQMrVFg7o3aeL6fNBZKQfA4yjXp7rohhfXa7KMjp8xl5csUNiE0uoX1oE9tD%2FKzbKZrH4pWLkXlVbsTkWRnioo6HJoF%2FYX3klWRPLNWxys9F7%2BM8WoPNmXQpQR5miCdFDYPTr7P6PkFIyoZG%2Fo%2Fsa%2FmzKP2HND%2FKZnXH1OQU&X-Amz-Signature=e99899396d4b8deb5727056556f128a3fba280d048de9b829acf574afcf87778&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4M25QQ4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDNgSEDFkGZeWqj1YtYrX3RCb1hrRcWTBW7aghzWhTOrAiAh1yJOCVe8yw%2FFrbMocWY3alCACE3j9AQio0X2vYSteSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMluWMxJ%2B6iLzC0iRmKtwD6fZPEZA43oAEYjfgbdHL3%2FBfBtsP0t6scDcLO9xh9EWLK%2BzLfkix4wtNsVQkcivTBFVSq3WrPPKd6JtJ3zJUYtjc1XTFIEh7IZcHteMbjWdikZsYpLqHwRop311F3XdVdzOC3BqkKjscDqMI47a4PzNOfzonvvkBS4q5CRRWn45t4MarA2%2FQtjHOnSnt92UtGwsHlzYcqGgQic%2BGJdfHQPIE24qPRiX8LabWtbzHkO6Voys2zLJy%2FwquuYEQP93eoOvgQaW9CFegEfiES6yVsZURnvGbQx579k61fDWLLwozKQDYRu4j3EfdRj3rdUIOxWWRsN%2B6lpRxcjjTCtPkdFBxLutd9xK9bXZzXkvVAdRRPTXvG2U4QWGjbI7ky6bijozs9eEpeSS%2Ba0De2uRxdg91JlJjQ3jhqNk1QHKo%2FS9bIoMsJFfeJFnWRSp2vV9U7gNFGlx2vzsW%2BTVLN37dipnLxDiZRO5U8Qk6%2BTaaZ3cT6ghmmUUSefopmENbiop6tYh1xDf%2BrRrm6ycKxpy8xp9PpZWVNoPDMpiLPQ10Uaniht%2FJC7FaYO2ET4uiw95eRanXE4%2FsmxM4t%2FrY1v6NmWPB%2FvgWpFcCyG%2F51xihwNsRmbNLMV18hXBHGqowmu%2FVvwY6pgFyWhM67I6lzUBf6pvnMAebwwChM4RhkMSOPEHAYWuh7boOBqjDXMZpOQMrVFg7o3aeL6fNBZKQfA4yjXp7rohhfXa7KMjp8xl5csUNiE0uoX1oE9tD%2FKzbKZrH4pWLkXlVbsTkWRnioo6HJoF%2FYX3klWRPLNWxys9F7%2BM8WoPNmXQpQR5miCdFDYPTr7P6PkFIyoZG%2Fo%2Fsa%2FmzKP2HND%2FKZnXH1OQU&X-Amz-Signature=afd799b06fb204944a295d611defe61db8cfaedcae70ca9580a284f5d9316c27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
