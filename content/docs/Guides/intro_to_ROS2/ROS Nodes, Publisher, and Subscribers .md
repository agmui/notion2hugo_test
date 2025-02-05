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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX37KSNU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC09VKoPy9mDfNOaVusd8xwIh0zGG1hfvT3yBnzEb%2BIXAiAxF8kLNIs1kneTQdxiGCtk1ApKN7taZJJEHODM8LAFrir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMAItNR7DJJFT1NKB6KtwDby6ogOQZZ1SiXBaFjGBoG6PE6VnqG53YIMt0%2FXGTN9%2BUwJDR1wtKW%2Bm%2BwvAEOplCkAW1RkqDNVLxUVVgT5PoBuo8cQQo7%2B2UpuubAxm4g6ttIRkKqaGyejNiu6J%2FDnOJ0v7rqNT9KHmAy0CHaur2rBSWprSfbPng761m1EPmy7%2FU1EelPcxqkXre1MLw9hRz9VTx6YFAi003sj%2FzJLufOfSQsXG0JwCnVeLCbXAmBnY2EoSAzAMBQHoFGvDdDKoC%2FR%2FOwU4qzzJjTVOZ%2FssXgT6suQT91K%2FVW1cChQkqBI%2BERkpSlJWElC5txeeYCpmPzVRknkZc4FeYD%2FwVKRpgo7KBb4oi%2BFzSh8RTO2gQdhj%2BkJdsgjuTnahV61bOG9owGA9gM7%2FM5xMha1TlX1UGIy54rHiUvXakBztqFjnXXfpJTTIt7oN2rHi1cvrq42QrXEixRc4eLa3c1tjgDzHyr5RiBjkm6CfHd2EXF9vky9ZLi7dVkXX%2B%2BkJTknOIsqQEnGMf5sOZJTOnzb9o9DB%2BPztXbpcx0X9s8TqLkIzw%2BPClWutmPW30XIMnrUGsBIzdMOnwZy2AEXxs4EjJI2lRpHW6Odup8utSzVxguVE2W64pbOj9Ya3T6%2BpPjAwwqtCMvQY6pgFwv5V8HG0%2F%2Bx7zXoCII6%2FCaa%2BzPcl0YpxsGtbqKfbtXU0Zn09HQwO3mmP1%2FHaurtYegSA2wc96Nu%2BWA12B6NWMd8cFiOT2fenUXovzeEeor8eZwPillLEi3DLlBAHh8TSYoeKEN94Rb0XhVZzrtleFDxxatqT7pgPRQ%2FtTW4hra6Y5R9F%2BAky6C1RSE%2BlCej2Jfxwc%2FU4IERa7yKcgtctI4Nm8BTy%2F&X-Amz-Signature=7a313d8e20f08809e946e3d45d49e0d1fb074d327d1e502d86d80c250d42fe24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX37KSNU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC09VKoPy9mDfNOaVusd8xwIh0zGG1hfvT3yBnzEb%2BIXAiAxF8kLNIs1kneTQdxiGCtk1ApKN7taZJJEHODM8LAFrir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMAItNR7DJJFT1NKB6KtwDby6ogOQZZ1SiXBaFjGBoG6PE6VnqG53YIMt0%2FXGTN9%2BUwJDR1wtKW%2Bm%2BwvAEOplCkAW1RkqDNVLxUVVgT5PoBuo8cQQo7%2B2UpuubAxm4g6ttIRkKqaGyejNiu6J%2FDnOJ0v7rqNT9KHmAy0CHaur2rBSWprSfbPng761m1EPmy7%2FU1EelPcxqkXre1MLw9hRz9VTx6YFAi003sj%2FzJLufOfSQsXG0JwCnVeLCbXAmBnY2EoSAzAMBQHoFGvDdDKoC%2FR%2FOwU4qzzJjTVOZ%2FssXgT6suQT91K%2FVW1cChQkqBI%2BERkpSlJWElC5txeeYCpmPzVRknkZc4FeYD%2FwVKRpgo7KBb4oi%2BFzSh8RTO2gQdhj%2BkJdsgjuTnahV61bOG9owGA9gM7%2FM5xMha1TlX1UGIy54rHiUvXakBztqFjnXXfpJTTIt7oN2rHi1cvrq42QrXEixRc4eLa3c1tjgDzHyr5RiBjkm6CfHd2EXF9vky9ZLi7dVkXX%2B%2BkJTknOIsqQEnGMf5sOZJTOnzb9o9DB%2BPztXbpcx0X9s8TqLkIzw%2BPClWutmPW30XIMnrUGsBIzdMOnwZy2AEXxs4EjJI2lRpHW6Odup8utSzVxguVE2W64pbOj9Ya3T6%2BpPjAwwqtCMvQY6pgFwv5V8HG0%2F%2Bx7zXoCII6%2FCaa%2BzPcl0YpxsGtbqKfbtXU0Zn09HQwO3mmP1%2FHaurtYegSA2wc96Nu%2BWA12B6NWMd8cFiOT2fenUXovzeEeor8eZwPillLEi3DLlBAHh8TSYoeKEN94Rb0XhVZzrtleFDxxatqT7pgPRQ%2FtTW4hra6Y5R9F%2BAky6C1RSE%2BlCej2Jfxwc%2FU4IERa7yKcgtctI4Nm8BTy%2F&X-Amz-Signature=6f660bb507c15435ccfe3dafd8d39022a9d814f9187597d2fc8eb69c6247ef40&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX37KSNU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC09VKoPy9mDfNOaVusd8xwIh0zGG1hfvT3yBnzEb%2BIXAiAxF8kLNIs1kneTQdxiGCtk1ApKN7taZJJEHODM8LAFrir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMAItNR7DJJFT1NKB6KtwDby6ogOQZZ1SiXBaFjGBoG6PE6VnqG53YIMt0%2FXGTN9%2BUwJDR1wtKW%2Bm%2BwvAEOplCkAW1RkqDNVLxUVVgT5PoBuo8cQQo7%2B2UpuubAxm4g6ttIRkKqaGyejNiu6J%2FDnOJ0v7rqNT9KHmAy0CHaur2rBSWprSfbPng761m1EPmy7%2FU1EelPcxqkXre1MLw9hRz9VTx6YFAi003sj%2FzJLufOfSQsXG0JwCnVeLCbXAmBnY2EoSAzAMBQHoFGvDdDKoC%2FR%2FOwU4qzzJjTVOZ%2FssXgT6suQT91K%2FVW1cChQkqBI%2BERkpSlJWElC5txeeYCpmPzVRknkZc4FeYD%2FwVKRpgo7KBb4oi%2BFzSh8RTO2gQdhj%2BkJdsgjuTnahV61bOG9owGA9gM7%2FM5xMha1TlX1UGIy54rHiUvXakBztqFjnXXfpJTTIt7oN2rHi1cvrq42QrXEixRc4eLa3c1tjgDzHyr5RiBjkm6CfHd2EXF9vky9ZLi7dVkXX%2B%2BkJTknOIsqQEnGMf5sOZJTOnzb9o9DB%2BPztXbpcx0X9s8TqLkIzw%2BPClWutmPW30XIMnrUGsBIzdMOnwZy2AEXxs4EjJI2lRpHW6Odup8utSzVxguVE2W64pbOj9Ya3T6%2BpPjAwwqtCMvQY6pgFwv5V8HG0%2F%2Bx7zXoCII6%2FCaa%2BzPcl0YpxsGtbqKfbtXU0Zn09HQwO3mmP1%2FHaurtYegSA2wc96Nu%2BWA12B6NWMd8cFiOT2fenUXovzeEeor8eZwPillLEi3DLlBAHh8TSYoeKEN94Rb0XhVZzrtleFDxxatqT7pgPRQ%2FtTW4hra6Y5R9F%2BAky6C1RSE%2BlCej2Jfxwc%2FU4IERa7yKcgtctI4Nm8BTy%2F&X-Amz-Signature=6718c62054d74723d31cfc38ada90e75708238b78477b03fac6bcaeeec36db9a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX37KSNU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC09VKoPy9mDfNOaVusd8xwIh0zGG1hfvT3yBnzEb%2BIXAiAxF8kLNIs1kneTQdxiGCtk1ApKN7taZJJEHODM8LAFrir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMAItNR7DJJFT1NKB6KtwDby6ogOQZZ1SiXBaFjGBoG6PE6VnqG53YIMt0%2FXGTN9%2BUwJDR1wtKW%2Bm%2BwvAEOplCkAW1RkqDNVLxUVVgT5PoBuo8cQQo7%2B2UpuubAxm4g6ttIRkKqaGyejNiu6J%2FDnOJ0v7rqNT9KHmAy0CHaur2rBSWprSfbPng761m1EPmy7%2FU1EelPcxqkXre1MLw9hRz9VTx6YFAi003sj%2FzJLufOfSQsXG0JwCnVeLCbXAmBnY2EoSAzAMBQHoFGvDdDKoC%2FR%2FOwU4qzzJjTVOZ%2FssXgT6suQT91K%2FVW1cChQkqBI%2BERkpSlJWElC5txeeYCpmPzVRknkZc4FeYD%2FwVKRpgo7KBb4oi%2BFzSh8RTO2gQdhj%2BkJdsgjuTnahV61bOG9owGA9gM7%2FM5xMha1TlX1UGIy54rHiUvXakBztqFjnXXfpJTTIt7oN2rHi1cvrq42QrXEixRc4eLa3c1tjgDzHyr5RiBjkm6CfHd2EXF9vky9ZLi7dVkXX%2B%2BkJTknOIsqQEnGMf5sOZJTOnzb9o9DB%2BPztXbpcx0X9s8TqLkIzw%2BPClWutmPW30XIMnrUGsBIzdMOnwZy2AEXxs4EjJI2lRpHW6Odup8utSzVxguVE2W64pbOj9Ya3T6%2BpPjAwwqtCMvQY6pgFwv5V8HG0%2F%2Bx7zXoCII6%2FCaa%2BzPcl0YpxsGtbqKfbtXU0Zn09HQwO3mmP1%2FHaurtYegSA2wc96Nu%2BWA12B6NWMd8cFiOT2fenUXovzeEeor8eZwPillLEi3DLlBAHh8TSYoeKEN94Rb0XhVZzrtleFDxxatqT7pgPRQ%2FtTW4hra6Y5R9F%2BAky6C1RSE%2BlCej2Jfxwc%2FU4IERa7yKcgtctI4Nm8BTy%2F&X-Amz-Signature=fa69f5d62edd86206559877779063044b0a5f93dab46ce54c341cbe109a9f6db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX37KSNU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC09VKoPy9mDfNOaVusd8xwIh0zGG1hfvT3yBnzEb%2BIXAiAxF8kLNIs1kneTQdxiGCtk1ApKN7taZJJEHODM8LAFrir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMAItNR7DJJFT1NKB6KtwDby6ogOQZZ1SiXBaFjGBoG6PE6VnqG53YIMt0%2FXGTN9%2BUwJDR1wtKW%2Bm%2BwvAEOplCkAW1RkqDNVLxUVVgT5PoBuo8cQQo7%2B2UpuubAxm4g6ttIRkKqaGyejNiu6J%2FDnOJ0v7rqNT9KHmAy0CHaur2rBSWprSfbPng761m1EPmy7%2FU1EelPcxqkXre1MLw9hRz9VTx6YFAi003sj%2FzJLufOfSQsXG0JwCnVeLCbXAmBnY2EoSAzAMBQHoFGvDdDKoC%2FR%2FOwU4qzzJjTVOZ%2FssXgT6suQT91K%2FVW1cChQkqBI%2BERkpSlJWElC5txeeYCpmPzVRknkZc4FeYD%2FwVKRpgo7KBb4oi%2BFzSh8RTO2gQdhj%2BkJdsgjuTnahV61bOG9owGA9gM7%2FM5xMha1TlX1UGIy54rHiUvXakBztqFjnXXfpJTTIt7oN2rHi1cvrq42QrXEixRc4eLa3c1tjgDzHyr5RiBjkm6CfHd2EXF9vky9ZLi7dVkXX%2B%2BkJTknOIsqQEnGMf5sOZJTOnzb9o9DB%2BPztXbpcx0X9s8TqLkIzw%2BPClWutmPW30XIMnrUGsBIzdMOnwZy2AEXxs4EjJI2lRpHW6Odup8utSzVxguVE2W64pbOj9Ya3T6%2BpPjAwwqtCMvQY6pgFwv5V8HG0%2F%2Bx7zXoCII6%2FCaa%2BzPcl0YpxsGtbqKfbtXU0Zn09HQwO3mmP1%2FHaurtYegSA2wc96Nu%2BWA12B6NWMd8cFiOT2fenUXovzeEeor8eZwPillLEi3DLlBAHh8TSYoeKEN94Rb0XhVZzrtleFDxxatqT7pgPRQ%2FtTW4hra6Y5R9F%2BAky6C1RSE%2BlCej2Jfxwc%2FU4IERa7yKcgtctI4Nm8BTy%2F&X-Amz-Signature=37ca145a93103a489e4930ca10f32aa1d59320512752e331fcce410fdba442bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX37KSNU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC09VKoPy9mDfNOaVusd8xwIh0zGG1hfvT3yBnzEb%2BIXAiAxF8kLNIs1kneTQdxiGCtk1ApKN7taZJJEHODM8LAFrir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMAItNR7DJJFT1NKB6KtwDby6ogOQZZ1SiXBaFjGBoG6PE6VnqG53YIMt0%2FXGTN9%2BUwJDR1wtKW%2Bm%2BwvAEOplCkAW1RkqDNVLxUVVgT5PoBuo8cQQo7%2B2UpuubAxm4g6ttIRkKqaGyejNiu6J%2FDnOJ0v7rqNT9KHmAy0CHaur2rBSWprSfbPng761m1EPmy7%2FU1EelPcxqkXre1MLw9hRz9VTx6YFAi003sj%2FzJLufOfSQsXG0JwCnVeLCbXAmBnY2EoSAzAMBQHoFGvDdDKoC%2FR%2FOwU4qzzJjTVOZ%2FssXgT6suQT91K%2FVW1cChQkqBI%2BERkpSlJWElC5txeeYCpmPzVRknkZc4FeYD%2FwVKRpgo7KBb4oi%2BFzSh8RTO2gQdhj%2BkJdsgjuTnahV61bOG9owGA9gM7%2FM5xMha1TlX1UGIy54rHiUvXakBztqFjnXXfpJTTIt7oN2rHi1cvrq42QrXEixRc4eLa3c1tjgDzHyr5RiBjkm6CfHd2EXF9vky9ZLi7dVkXX%2B%2BkJTknOIsqQEnGMf5sOZJTOnzb9o9DB%2BPztXbpcx0X9s8TqLkIzw%2BPClWutmPW30XIMnrUGsBIzdMOnwZy2AEXxs4EjJI2lRpHW6Odup8utSzVxguVE2W64pbOj9Ya3T6%2BpPjAwwqtCMvQY6pgFwv5V8HG0%2F%2Bx7zXoCII6%2FCaa%2BzPcl0YpxsGtbqKfbtXU0Zn09HQwO3mmP1%2FHaurtYegSA2wc96Nu%2BWA12B6NWMd8cFiOT2fenUXovzeEeor8eZwPillLEi3DLlBAHh8TSYoeKEN94Rb0XhVZzrtleFDxxatqT7pgPRQ%2FtTW4hra6Y5R9F%2BAky6C1RSE%2BlCej2Jfxwc%2FU4IERa7yKcgtctI4Nm8BTy%2F&X-Amz-Signature=e5986a3d929197a8680fef79910fbcd697b3e261c50f49a4cf5c3febb0b39b15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX37KSNU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC09VKoPy9mDfNOaVusd8xwIh0zGG1hfvT3yBnzEb%2BIXAiAxF8kLNIs1kneTQdxiGCtk1ApKN7taZJJEHODM8LAFrir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMAItNR7DJJFT1NKB6KtwDby6ogOQZZ1SiXBaFjGBoG6PE6VnqG53YIMt0%2FXGTN9%2BUwJDR1wtKW%2Bm%2BwvAEOplCkAW1RkqDNVLxUVVgT5PoBuo8cQQo7%2B2UpuubAxm4g6ttIRkKqaGyejNiu6J%2FDnOJ0v7rqNT9KHmAy0CHaur2rBSWprSfbPng761m1EPmy7%2FU1EelPcxqkXre1MLw9hRz9VTx6YFAi003sj%2FzJLufOfSQsXG0JwCnVeLCbXAmBnY2EoSAzAMBQHoFGvDdDKoC%2FR%2FOwU4qzzJjTVOZ%2FssXgT6suQT91K%2FVW1cChQkqBI%2BERkpSlJWElC5txeeYCpmPzVRknkZc4FeYD%2FwVKRpgo7KBb4oi%2BFzSh8RTO2gQdhj%2BkJdsgjuTnahV61bOG9owGA9gM7%2FM5xMha1TlX1UGIy54rHiUvXakBztqFjnXXfpJTTIt7oN2rHi1cvrq42QrXEixRc4eLa3c1tjgDzHyr5RiBjkm6CfHd2EXF9vky9ZLi7dVkXX%2B%2BkJTknOIsqQEnGMf5sOZJTOnzb9o9DB%2BPztXbpcx0X9s8TqLkIzw%2BPClWutmPW30XIMnrUGsBIzdMOnwZy2AEXxs4EjJI2lRpHW6Odup8utSzVxguVE2W64pbOj9Ya3T6%2BpPjAwwqtCMvQY6pgFwv5V8HG0%2F%2Bx7zXoCII6%2FCaa%2BzPcl0YpxsGtbqKfbtXU0Zn09HQwO3mmP1%2FHaurtYegSA2wc96Nu%2BWA12B6NWMd8cFiOT2fenUXovzeEeor8eZwPillLEi3DLlBAHh8TSYoeKEN94Rb0XhVZzrtleFDxxatqT7pgPRQ%2FtTW4hra6Y5R9F%2BAky6C1RSE%2BlCej2Jfxwc%2FU4IERa7yKcgtctI4Nm8BTy%2F&X-Amz-Signature=0bc8dadc925c2b40d8602af5670cf76fec62c3a83bdc086f5977434382ee08ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX37KSNU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC09VKoPy9mDfNOaVusd8xwIh0zGG1hfvT3yBnzEb%2BIXAiAxF8kLNIs1kneTQdxiGCtk1ApKN7taZJJEHODM8LAFrir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMAItNR7DJJFT1NKB6KtwDby6ogOQZZ1SiXBaFjGBoG6PE6VnqG53YIMt0%2FXGTN9%2BUwJDR1wtKW%2Bm%2BwvAEOplCkAW1RkqDNVLxUVVgT5PoBuo8cQQo7%2B2UpuubAxm4g6ttIRkKqaGyejNiu6J%2FDnOJ0v7rqNT9KHmAy0CHaur2rBSWprSfbPng761m1EPmy7%2FU1EelPcxqkXre1MLw9hRz9VTx6YFAi003sj%2FzJLufOfSQsXG0JwCnVeLCbXAmBnY2EoSAzAMBQHoFGvDdDKoC%2FR%2FOwU4qzzJjTVOZ%2FssXgT6suQT91K%2FVW1cChQkqBI%2BERkpSlJWElC5txeeYCpmPzVRknkZc4FeYD%2FwVKRpgo7KBb4oi%2BFzSh8RTO2gQdhj%2BkJdsgjuTnahV61bOG9owGA9gM7%2FM5xMha1TlX1UGIy54rHiUvXakBztqFjnXXfpJTTIt7oN2rHi1cvrq42QrXEixRc4eLa3c1tjgDzHyr5RiBjkm6CfHd2EXF9vky9ZLi7dVkXX%2B%2BkJTknOIsqQEnGMf5sOZJTOnzb9o9DB%2BPztXbpcx0X9s8TqLkIzw%2BPClWutmPW30XIMnrUGsBIzdMOnwZy2AEXxs4EjJI2lRpHW6Odup8utSzVxguVE2W64pbOj9Ya3T6%2BpPjAwwqtCMvQY6pgFwv5V8HG0%2F%2Bx7zXoCII6%2FCaa%2BzPcl0YpxsGtbqKfbtXU0Zn09HQwO3mmP1%2FHaurtYegSA2wc96Nu%2BWA12B6NWMd8cFiOT2fenUXovzeEeor8eZwPillLEi3DLlBAHh8TSYoeKEN94Rb0XhVZzrtleFDxxatqT7pgPRQ%2FtTW4hra6Y5R9F%2BAky6C1RSE%2BlCej2Jfxwc%2FU4IERa7yKcgtctI4Nm8BTy%2F&X-Amz-Signature=5f5ea1a2b266b41290221a0086ce14fc5934af50b6ac1491fdda1ab9ec836e80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
