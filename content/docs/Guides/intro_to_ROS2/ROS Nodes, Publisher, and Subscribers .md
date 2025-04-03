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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ67VCT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjkcfYL%2BscYhH2BldIF1N7Y4l%2BpzAPOzXFL%2FJjSZD%2BNAiEAmO6ym065Z%2B6KyVXl2I8vaAi0ajxgMlyNqtBfh%2Fwfm7kqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMcFyKau2%2F%2FjxppgyrcA4gnI69WISusEWg8p7Hn0DpBPf6RQZjZux2JNFsm62lSTFB%2B6tEUE1nJ7sn8%2B0HlF23Q341QvnIi3y4bAeEbYwP%2BwshTJK7LswBUQNUs9hKS%2Bah5bYeVescNIPepwaWedbLK56I%2FImDpyYAhcFxRDOt9VXGG3Y3FptyKXtL2zWYiD7Vx8ozc2RtTdXgx1Y22M%2B09NDPEITPNXsS0ItB6ZMCfYWHHZaHgSmBZDgQ%2FOV4duJggVQ9uk690HU7UArwFqZdtsz41iaEXMChV9R7YlUz9cy5moZ3jHzcBjac5pRX%2FjohsCsKjKtlp1cTq1KXKbJpJS6aYo%2F5hqvPXtmlVd9J8VQypUBxLuJ0cIDs3YQMuGOXOWscVplsaXC9sPjCry6OTfw58lzUSZBv7kCezrrK%2BopSXgg49wRn6Jw9VwbvCph6gbS3QQkq0%2FCM4vYfnK76K7L9Y9FmQZiV3zP29MALc2SuZl4ubbDdsKvD4Duhz0TdskFzFU0V86JPp0Uwemyy6No6zXMNm4bPpd9N%2BvDJE1nQebd7c7DlnUGgwNgh44ZJ8GtLBAA%2BUL5E1Ko6lD%2FEOBQ%2BAtlbk1eLO0atZFBuouX6QfipBE%2Fy8RCMDn2hN4TYBFMi%2B3Cy6TStyMJ78uL8GOqUBN5GCtSyrvkOvr4fPeIiupeseZJ3pDhoe%2BRGqIKH4rrVSnTSyBP6wUpmYjB4qmTT%2FKd74pUqeHAHLfz3i7w1%2Fwpc7UGpwFYyhiGnVBnxUtvbloVvMRMQX3kBrCBxfGN7LvwHtmJ3O0tDCLUe%2Blgo5E4gaapGtGHkBNKjWVj4nNf6QWvXoEC9hO7VwREOnY2LyjzZMLfyy%2FGdGx3ZTCgScQsh7dclv&X-Amz-Signature=1d045300207b183bed936738fe1c996b8138f53cbc28babad3d87c7d844aecee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ67VCT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjkcfYL%2BscYhH2BldIF1N7Y4l%2BpzAPOzXFL%2FJjSZD%2BNAiEAmO6ym065Z%2B6KyVXl2I8vaAi0ajxgMlyNqtBfh%2Fwfm7kqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMcFyKau2%2F%2FjxppgyrcA4gnI69WISusEWg8p7Hn0DpBPf6RQZjZux2JNFsm62lSTFB%2B6tEUE1nJ7sn8%2B0HlF23Q341QvnIi3y4bAeEbYwP%2BwshTJK7LswBUQNUs9hKS%2Bah5bYeVescNIPepwaWedbLK56I%2FImDpyYAhcFxRDOt9VXGG3Y3FptyKXtL2zWYiD7Vx8ozc2RtTdXgx1Y22M%2B09NDPEITPNXsS0ItB6ZMCfYWHHZaHgSmBZDgQ%2FOV4duJggVQ9uk690HU7UArwFqZdtsz41iaEXMChV9R7YlUz9cy5moZ3jHzcBjac5pRX%2FjohsCsKjKtlp1cTq1KXKbJpJS6aYo%2F5hqvPXtmlVd9J8VQypUBxLuJ0cIDs3YQMuGOXOWscVplsaXC9sPjCry6OTfw58lzUSZBv7kCezrrK%2BopSXgg49wRn6Jw9VwbvCph6gbS3QQkq0%2FCM4vYfnK76K7L9Y9FmQZiV3zP29MALc2SuZl4ubbDdsKvD4Duhz0TdskFzFU0V86JPp0Uwemyy6No6zXMNm4bPpd9N%2BvDJE1nQebd7c7DlnUGgwNgh44ZJ8GtLBAA%2BUL5E1Ko6lD%2FEOBQ%2BAtlbk1eLO0atZFBuouX6QfipBE%2Fy8RCMDn2hN4TYBFMi%2B3Cy6TStyMJ78uL8GOqUBN5GCtSyrvkOvr4fPeIiupeseZJ3pDhoe%2BRGqIKH4rrVSnTSyBP6wUpmYjB4qmTT%2FKd74pUqeHAHLfz3i7w1%2Fwpc7UGpwFYyhiGnVBnxUtvbloVvMRMQX3kBrCBxfGN7LvwHtmJ3O0tDCLUe%2Blgo5E4gaapGtGHkBNKjWVj4nNf6QWvXoEC9hO7VwREOnY2LyjzZMLfyy%2FGdGx3ZTCgScQsh7dclv&X-Amz-Signature=166cb0defd3b8b116032c297485da0f520ec8178dc622a1b7b824ff1bbea871b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ67VCT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjkcfYL%2BscYhH2BldIF1N7Y4l%2BpzAPOzXFL%2FJjSZD%2BNAiEAmO6ym065Z%2B6KyVXl2I8vaAi0ajxgMlyNqtBfh%2Fwfm7kqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMcFyKau2%2F%2FjxppgyrcA4gnI69WISusEWg8p7Hn0DpBPf6RQZjZux2JNFsm62lSTFB%2B6tEUE1nJ7sn8%2B0HlF23Q341QvnIi3y4bAeEbYwP%2BwshTJK7LswBUQNUs9hKS%2Bah5bYeVescNIPepwaWedbLK56I%2FImDpyYAhcFxRDOt9VXGG3Y3FptyKXtL2zWYiD7Vx8ozc2RtTdXgx1Y22M%2B09NDPEITPNXsS0ItB6ZMCfYWHHZaHgSmBZDgQ%2FOV4duJggVQ9uk690HU7UArwFqZdtsz41iaEXMChV9R7YlUz9cy5moZ3jHzcBjac5pRX%2FjohsCsKjKtlp1cTq1KXKbJpJS6aYo%2F5hqvPXtmlVd9J8VQypUBxLuJ0cIDs3YQMuGOXOWscVplsaXC9sPjCry6OTfw58lzUSZBv7kCezrrK%2BopSXgg49wRn6Jw9VwbvCph6gbS3QQkq0%2FCM4vYfnK76K7L9Y9FmQZiV3zP29MALc2SuZl4ubbDdsKvD4Duhz0TdskFzFU0V86JPp0Uwemyy6No6zXMNm4bPpd9N%2BvDJE1nQebd7c7DlnUGgwNgh44ZJ8GtLBAA%2BUL5E1Ko6lD%2FEOBQ%2BAtlbk1eLO0atZFBuouX6QfipBE%2Fy8RCMDn2hN4TYBFMi%2B3Cy6TStyMJ78uL8GOqUBN5GCtSyrvkOvr4fPeIiupeseZJ3pDhoe%2BRGqIKH4rrVSnTSyBP6wUpmYjB4qmTT%2FKd74pUqeHAHLfz3i7w1%2Fwpc7UGpwFYyhiGnVBnxUtvbloVvMRMQX3kBrCBxfGN7LvwHtmJ3O0tDCLUe%2Blgo5E4gaapGtGHkBNKjWVj4nNf6QWvXoEC9hO7VwREOnY2LyjzZMLfyy%2FGdGx3ZTCgScQsh7dclv&X-Amz-Signature=e358cc57b27cfc6294cf6750b8a2c07ad36bac837fe2ad0132e4fab37fcc68fe&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ67VCT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjkcfYL%2BscYhH2BldIF1N7Y4l%2BpzAPOzXFL%2FJjSZD%2BNAiEAmO6ym065Z%2B6KyVXl2I8vaAi0ajxgMlyNqtBfh%2Fwfm7kqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMcFyKau2%2F%2FjxppgyrcA4gnI69WISusEWg8p7Hn0DpBPf6RQZjZux2JNFsm62lSTFB%2B6tEUE1nJ7sn8%2B0HlF23Q341QvnIi3y4bAeEbYwP%2BwshTJK7LswBUQNUs9hKS%2Bah5bYeVescNIPepwaWedbLK56I%2FImDpyYAhcFxRDOt9VXGG3Y3FptyKXtL2zWYiD7Vx8ozc2RtTdXgx1Y22M%2B09NDPEITPNXsS0ItB6ZMCfYWHHZaHgSmBZDgQ%2FOV4duJggVQ9uk690HU7UArwFqZdtsz41iaEXMChV9R7YlUz9cy5moZ3jHzcBjac5pRX%2FjohsCsKjKtlp1cTq1KXKbJpJS6aYo%2F5hqvPXtmlVd9J8VQypUBxLuJ0cIDs3YQMuGOXOWscVplsaXC9sPjCry6OTfw58lzUSZBv7kCezrrK%2BopSXgg49wRn6Jw9VwbvCph6gbS3QQkq0%2FCM4vYfnK76K7L9Y9FmQZiV3zP29MALc2SuZl4ubbDdsKvD4Duhz0TdskFzFU0V86JPp0Uwemyy6No6zXMNm4bPpd9N%2BvDJE1nQebd7c7DlnUGgwNgh44ZJ8GtLBAA%2BUL5E1Ko6lD%2FEOBQ%2BAtlbk1eLO0atZFBuouX6QfipBE%2Fy8RCMDn2hN4TYBFMi%2B3Cy6TStyMJ78uL8GOqUBN5GCtSyrvkOvr4fPeIiupeseZJ3pDhoe%2BRGqIKH4rrVSnTSyBP6wUpmYjB4qmTT%2FKd74pUqeHAHLfz3i7w1%2Fwpc7UGpwFYyhiGnVBnxUtvbloVvMRMQX3kBrCBxfGN7LvwHtmJ3O0tDCLUe%2Blgo5E4gaapGtGHkBNKjWVj4nNf6QWvXoEC9hO7VwREOnY2LyjzZMLfyy%2FGdGx3ZTCgScQsh7dclv&X-Amz-Signature=67da20c461c5a396fd61f0f115101c1163c50fb29fd6e7d91de97664202a7379&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ67VCT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjkcfYL%2BscYhH2BldIF1N7Y4l%2BpzAPOzXFL%2FJjSZD%2BNAiEAmO6ym065Z%2B6KyVXl2I8vaAi0ajxgMlyNqtBfh%2Fwfm7kqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMcFyKau2%2F%2FjxppgyrcA4gnI69WISusEWg8p7Hn0DpBPf6RQZjZux2JNFsm62lSTFB%2B6tEUE1nJ7sn8%2B0HlF23Q341QvnIi3y4bAeEbYwP%2BwshTJK7LswBUQNUs9hKS%2Bah5bYeVescNIPepwaWedbLK56I%2FImDpyYAhcFxRDOt9VXGG3Y3FptyKXtL2zWYiD7Vx8ozc2RtTdXgx1Y22M%2B09NDPEITPNXsS0ItB6ZMCfYWHHZaHgSmBZDgQ%2FOV4duJggVQ9uk690HU7UArwFqZdtsz41iaEXMChV9R7YlUz9cy5moZ3jHzcBjac5pRX%2FjohsCsKjKtlp1cTq1KXKbJpJS6aYo%2F5hqvPXtmlVd9J8VQypUBxLuJ0cIDs3YQMuGOXOWscVplsaXC9sPjCry6OTfw58lzUSZBv7kCezrrK%2BopSXgg49wRn6Jw9VwbvCph6gbS3QQkq0%2FCM4vYfnK76K7L9Y9FmQZiV3zP29MALc2SuZl4ubbDdsKvD4Duhz0TdskFzFU0V86JPp0Uwemyy6No6zXMNm4bPpd9N%2BvDJE1nQebd7c7DlnUGgwNgh44ZJ8GtLBAA%2BUL5E1Ko6lD%2FEOBQ%2BAtlbk1eLO0atZFBuouX6QfipBE%2Fy8RCMDn2hN4TYBFMi%2B3Cy6TStyMJ78uL8GOqUBN5GCtSyrvkOvr4fPeIiupeseZJ3pDhoe%2BRGqIKH4rrVSnTSyBP6wUpmYjB4qmTT%2FKd74pUqeHAHLfz3i7w1%2Fwpc7UGpwFYyhiGnVBnxUtvbloVvMRMQX3kBrCBxfGN7LvwHtmJ3O0tDCLUe%2Blgo5E4gaapGtGHkBNKjWVj4nNf6QWvXoEC9hO7VwREOnY2LyjzZMLfyy%2FGdGx3ZTCgScQsh7dclv&X-Amz-Signature=69ecab1dc74d94e882f7dd51d7254999c477a7c5fc072e845beef5614d63a24f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ67VCT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjkcfYL%2BscYhH2BldIF1N7Y4l%2BpzAPOzXFL%2FJjSZD%2BNAiEAmO6ym065Z%2B6KyVXl2I8vaAi0ajxgMlyNqtBfh%2Fwfm7kqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMcFyKau2%2F%2FjxppgyrcA4gnI69WISusEWg8p7Hn0DpBPf6RQZjZux2JNFsm62lSTFB%2B6tEUE1nJ7sn8%2B0HlF23Q341QvnIi3y4bAeEbYwP%2BwshTJK7LswBUQNUs9hKS%2Bah5bYeVescNIPepwaWedbLK56I%2FImDpyYAhcFxRDOt9VXGG3Y3FptyKXtL2zWYiD7Vx8ozc2RtTdXgx1Y22M%2B09NDPEITPNXsS0ItB6ZMCfYWHHZaHgSmBZDgQ%2FOV4duJggVQ9uk690HU7UArwFqZdtsz41iaEXMChV9R7YlUz9cy5moZ3jHzcBjac5pRX%2FjohsCsKjKtlp1cTq1KXKbJpJS6aYo%2F5hqvPXtmlVd9J8VQypUBxLuJ0cIDs3YQMuGOXOWscVplsaXC9sPjCry6OTfw58lzUSZBv7kCezrrK%2BopSXgg49wRn6Jw9VwbvCph6gbS3QQkq0%2FCM4vYfnK76K7L9Y9FmQZiV3zP29MALc2SuZl4ubbDdsKvD4Duhz0TdskFzFU0V86JPp0Uwemyy6No6zXMNm4bPpd9N%2BvDJE1nQebd7c7DlnUGgwNgh44ZJ8GtLBAA%2BUL5E1Ko6lD%2FEOBQ%2BAtlbk1eLO0atZFBuouX6QfipBE%2Fy8RCMDn2hN4TYBFMi%2B3Cy6TStyMJ78uL8GOqUBN5GCtSyrvkOvr4fPeIiupeseZJ3pDhoe%2BRGqIKH4rrVSnTSyBP6wUpmYjB4qmTT%2FKd74pUqeHAHLfz3i7w1%2Fwpc7UGpwFYyhiGnVBnxUtvbloVvMRMQX3kBrCBxfGN7LvwHtmJ3O0tDCLUe%2Blgo5E4gaapGtGHkBNKjWVj4nNf6QWvXoEC9hO7VwREOnY2LyjzZMLfyy%2FGdGx3ZTCgScQsh7dclv&X-Amz-Signature=2fd587366c5e58d1df61dbc6df27d6683eafc11a9b16605eb85e9f8eaa38a43b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ67VCT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjkcfYL%2BscYhH2BldIF1N7Y4l%2BpzAPOzXFL%2FJjSZD%2BNAiEAmO6ym065Z%2B6KyVXl2I8vaAi0ajxgMlyNqtBfh%2Fwfm7kqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMcFyKau2%2F%2FjxppgyrcA4gnI69WISusEWg8p7Hn0DpBPf6RQZjZux2JNFsm62lSTFB%2B6tEUE1nJ7sn8%2B0HlF23Q341QvnIi3y4bAeEbYwP%2BwshTJK7LswBUQNUs9hKS%2Bah5bYeVescNIPepwaWedbLK56I%2FImDpyYAhcFxRDOt9VXGG3Y3FptyKXtL2zWYiD7Vx8ozc2RtTdXgx1Y22M%2B09NDPEITPNXsS0ItB6ZMCfYWHHZaHgSmBZDgQ%2FOV4duJggVQ9uk690HU7UArwFqZdtsz41iaEXMChV9R7YlUz9cy5moZ3jHzcBjac5pRX%2FjohsCsKjKtlp1cTq1KXKbJpJS6aYo%2F5hqvPXtmlVd9J8VQypUBxLuJ0cIDs3YQMuGOXOWscVplsaXC9sPjCry6OTfw58lzUSZBv7kCezrrK%2BopSXgg49wRn6Jw9VwbvCph6gbS3QQkq0%2FCM4vYfnK76K7L9Y9FmQZiV3zP29MALc2SuZl4ubbDdsKvD4Duhz0TdskFzFU0V86JPp0Uwemyy6No6zXMNm4bPpd9N%2BvDJE1nQebd7c7DlnUGgwNgh44ZJ8GtLBAA%2BUL5E1Ko6lD%2FEOBQ%2BAtlbk1eLO0atZFBuouX6QfipBE%2Fy8RCMDn2hN4TYBFMi%2B3Cy6TStyMJ78uL8GOqUBN5GCtSyrvkOvr4fPeIiupeseZJ3pDhoe%2BRGqIKH4rrVSnTSyBP6wUpmYjB4qmTT%2FKd74pUqeHAHLfz3i7w1%2Fwpc7UGpwFYyhiGnVBnxUtvbloVvMRMQX3kBrCBxfGN7LvwHtmJ3O0tDCLUe%2Blgo5E4gaapGtGHkBNKjWVj4nNf6QWvXoEC9hO7VwREOnY2LyjzZMLfyy%2FGdGx3ZTCgScQsh7dclv&X-Amz-Signature=a5af66a53dfc1bd54aeb1037f946fd510c766b2c71e1e81e13b4a166b2a212d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ67VCT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjkcfYL%2BscYhH2BldIF1N7Y4l%2BpzAPOzXFL%2FJjSZD%2BNAiEAmO6ym065Z%2B6KyVXl2I8vaAi0ajxgMlyNqtBfh%2Fwfm7kqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMcFyKau2%2F%2FjxppgyrcA4gnI69WISusEWg8p7Hn0DpBPf6RQZjZux2JNFsm62lSTFB%2B6tEUE1nJ7sn8%2B0HlF23Q341QvnIi3y4bAeEbYwP%2BwshTJK7LswBUQNUs9hKS%2Bah5bYeVescNIPepwaWedbLK56I%2FImDpyYAhcFxRDOt9VXGG3Y3FptyKXtL2zWYiD7Vx8ozc2RtTdXgx1Y22M%2B09NDPEITPNXsS0ItB6ZMCfYWHHZaHgSmBZDgQ%2FOV4duJggVQ9uk690HU7UArwFqZdtsz41iaEXMChV9R7YlUz9cy5moZ3jHzcBjac5pRX%2FjohsCsKjKtlp1cTq1KXKbJpJS6aYo%2F5hqvPXtmlVd9J8VQypUBxLuJ0cIDs3YQMuGOXOWscVplsaXC9sPjCry6OTfw58lzUSZBv7kCezrrK%2BopSXgg49wRn6Jw9VwbvCph6gbS3QQkq0%2FCM4vYfnK76K7L9Y9FmQZiV3zP29MALc2SuZl4ubbDdsKvD4Duhz0TdskFzFU0V86JPp0Uwemyy6No6zXMNm4bPpd9N%2BvDJE1nQebd7c7DlnUGgwNgh44ZJ8GtLBAA%2BUL5E1Ko6lD%2FEOBQ%2BAtlbk1eLO0atZFBuouX6QfipBE%2Fy8RCMDn2hN4TYBFMi%2B3Cy6TStyMJ78uL8GOqUBN5GCtSyrvkOvr4fPeIiupeseZJ3pDhoe%2BRGqIKH4rrVSnTSyBP6wUpmYjB4qmTT%2FKd74pUqeHAHLfz3i7w1%2Fwpc7UGpwFYyhiGnVBnxUtvbloVvMRMQX3kBrCBxfGN7LvwHtmJ3O0tDCLUe%2Blgo5E4gaapGtGHkBNKjWVj4nNf6QWvXoEC9hO7VwREOnY2LyjzZMLfyy%2FGdGx3ZTCgScQsh7dclv&X-Amz-Signature=080a37e52b9a0ef461c17b84f8c93fdf21728a92f244b13fcf8380aafbc6abcd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
