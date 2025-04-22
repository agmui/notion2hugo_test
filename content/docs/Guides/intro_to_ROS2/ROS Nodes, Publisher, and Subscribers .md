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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXVRHV2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD3Tdr%2BUg1mzze7WUvRFBOBT44DQxcnwUTkuzzIvH4ffwIhAMVsiCMn9UNQHFuF17wmRKV4pvmuqGDtcDWxq46ugkMNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtzsa4yKKglYec03Aq3ANAUUMjxWXNwj8fC%2F5FDm65HFxm2XCzXoNfNONkkV3nFht%2B4YQJgygQ3ueyyqPQsz8DLcnH09R0EbUXEhE%2BN1J3wjXQ1vFdoUa1P2kp0jML57dJXOb6wLPDZVNviykzcs%2FO%2B7u8vfIzTYsuqfVnfaMd4hW3oNvo5fB877r5gX3kStgCkNmUF1M7CeP1JxGse0yx1TFcStnDDt1CXFWFy5OGIyF4hF3V9suVDzsn7NEi2zu7FC%2BeWuzbJC6WX5EQiK%2F3cjKgboTxRGqKIcu66rXP9Sdi4X5WxrKl5ynLFszKws%2BqcA8ycnCtPJ70tPyj1heiFcMaqPfJtHZNv0rOBJCEBW0E6pJeMjGrtEcMXOpu%2FwvC20SYJE7%2Bw557N0iNl5xRr3yLu0pNjvkoqZSP5IzzpsBZFoqjJepPE%2Fr1doRzKQCFG%2BibBGsLrACY6zlk6eJgiTBOKBkFiGCqjXHAjX%2BUSfo2qanhxAbGTw9CDbtx00fpx2W32%2Fs8o7WfyTsszHqFaAGdZSBAcn97cGok%2Fzz%2Bv3Is7zY3Qc8g8EaYRxn1BER82T%2FrDkrV7PpLJijhpNIsSBCHOWRfJZ1vHrhmMN6MUndQDRmPhq%2F2C5WPjgmiwpCSnGJBD%2BrRewaYxjDZ357ABjqkAePL2fLvjWfNZc6FtbmIQctsgMOCO%2FD4VjECfEBAduxHTggBUTSPgLP3SWPLmfdo8hxD9Tlna0NDDs3WkMkYx2gR7PCQKzMAkdQUSVTSw%2FyirTmD0DZkuShS0x7jJN2wNp3Xbz4Ka6m2JYkKtWm7XjReXUj8YYrwQreJM7dM5XRg76GdZ%2B9GvXDPcrMnqoPCsX0a4BvbNKdUxlC7opMFGbY2KpVl&X-Amz-Signature=d991c1ccf8077c8d257f82efecd194e82b9dde5fc978af153e9d06cbe7159927&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXVRHV2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD3Tdr%2BUg1mzze7WUvRFBOBT44DQxcnwUTkuzzIvH4ffwIhAMVsiCMn9UNQHFuF17wmRKV4pvmuqGDtcDWxq46ugkMNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtzsa4yKKglYec03Aq3ANAUUMjxWXNwj8fC%2F5FDm65HFxm2XCzXoNfNONkkV3nFht%2B4YQJgygQ3ueyyqPQsz8DLcnH09R0EbUXEhE%2BN1J3wjXQ1vFdoUa1P2kp0jML57dJXOb6wLPDZVNviykzcs%2FO%2B7u8vfIzTYsuqfVnfaMd4hW3oNvo5fB877r5gX3kStgCkNmUF1M7CeP1JxGse0yx1TFcStnDDt1CXFWFy5OGIyF4hF3V9suVDzsn7NEi2zu7FC%2BeWuzbJC6WX5EQiK%2F3cjKgboTxRGqKIcu66rXP9Sdi4X5WxrKl5ynLFszKws%2BqcA8ycnCtPJ70tPyj1heiFcMaqPfJtHZNv0rOBJCEBW0E6pJeMjGrtEcMXOpu%2FwvC20SYJE7%2Bw557N0iNl5xRr3yLu0pNjvkoqZSP5IzzpsBZFoqjJepPE%2Fr1doRzKQCFG%2BibBGsLrACY6zlk6eJgiTBOKBkFiGCqjXHAjX%2BUSfo2qanhxAbGTw9CDbtx00fpx2W32%2Fs8o7WfyTsszHqFaAGdZSBAcn97cGok%2Fzz%2Bv3Is7zY3Qc8g8EaYRxn1BER82T%2FrDkrV7PpLJijhpNIsSBCHOWRfJZ1vHrhmMN6MUndQDRmPhq%2F2C5WPjgmiwpCSnGJBD%2BrRewaYxjDZ357ABjqkAePL2fLvjWfNZc6FtbmIQctsgMOCO%2FD4VjECfEBAduxHTggBUTSPgLP3SWPLmfdo8hxD9Tlna0NDDs3WkMkYx2gR7PCQKzMAkdQUSVTSw%2FyirTmD0DZkuShS0x7jJN2wNp3Xbz4Ka6m2JYkKtWm7XjReXUj8YYrwQreJM7dM5XRg76GdZ%2B9GvXDPcrMnqoPCsX0a4BvbNKdUxlC7opMFGbY2KpVl&X-Amz-Signature=4a8838022155eb03b342b468c3d92a4f454ea7be6c66f230ed04d5a6daf17a36&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXVRHV2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD3Tdr%2BUg1mzze7WUvRFBOBT44DQxcnwUTkuzzIvH4ffwIhAMVsiCMn9UNQHFuF17wmRKV4pvmuqGDtcDWxq46ugkMNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtzsa4yKKglYec03Aq3ANAUUMjxWXNwj8fC%2F5FDm65HFxm2XCzXoNfNONkkV3nFht%2B4YQJgygQ3ueyyqPQsz8DLcnH09R0EbUXEhE%2BN1J3wjXQ1vFdoUa1P2kp0jML57dJXOb6wLPDZVNviykzcs%2FO%2B7u8vfIzTYsuqfVnfaMd4hW3oNvo5fB877r5gX3kStgCkNmUF1M7CeP1JxGse0yx1TFcStnDDt1CXFWFy5OGIyF4hF3V9suVDzsn7NEi2zu7FC%2BeWuzbJC6WX5EQiK%2F3cjKgboTxRGqKIcu66rXP9Sdi4X5WxrKl5ynLFszKws%2BqcA8ycnCtPJ70tPyj1heiFcMaqPfJtHZNv0rOBJCEBW0E6pJeMjGrtEcMXOpu%2FwvC20SYJE7%2Bw557N0iNl5xRr3yLu0pNjvkoqZSP5IzzpsBZFoqjJepPE%2Fr1doRzKQCFG%2BibBGsLrACY6zlk6eJgiTBOKBkFiGCqjXHAjX%2BUSfo2qanhxAbGTw9CDbtx00fpx2W32%2Fs8o7WfyTsszHqFaAGdZSBAcn97cGok%2Fzz%2Bv3Is7zY3Qc8g8EaYRxn1BER82T%2FrDkrV7PpLJijhpNIsSBCHOWRfJZ1vHrhmMN6MUndQDRmPhq%2F2C5WPjgmiwpCSnGJBD%2BrRewaYxjDZ357ABjqkAePL2fLvjWfNZc6FtbmIQctsgMOCO%2FD4VjECfEBAduxHTggBUTSPgLP3SWPLmfdo8hxD9Tlna0NDDs3WkMkYx2gR7PCQKzMAkdQUSVTSw%2FyirTmD0DZkuShS0x7jJN2wNp3Xbz4Ka6m2JYkKtWm7XjReXUj8YYrwQreJM7dM5XRg76GdZ%2B9GvXDPcrMnqoPCsX0a4BvbNKdUxlC7opMFGbY2KpVl&X-Amz-Signature=645cd2a1e59cef5e1c550a53caa42449e14308bbef063d74dcc250846e2c6c26&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXVRHV2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD3Tdr%2BUg1mzze7WUvRFBOBT44DQxcnwUTkuzzIvH4ffwIhAMVsiCMn9UNQHFuF17wmRKV4pvmuqGDtcDWxq46ugkMNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtzsa4yKKglYec03Aq3ANAUUMjxWXNwj8fC%2F5FDm65HFxm2XCzXoNfNONkkV3nFht%2B4YQJgygQ3ueyyqPQsz8DLcnH09R0EbUXEhE%2BN1J3wjXQ1vFdoUa1P2kp0jML57dJXOb6wLPDZVNviykzcs%2FO%2B7u8vfIzTYsuqfVnfaMd4hW3oNvo5fB877r5gX3kStgCkNmUF1M7CeP1JxGse0yx1TFcStnDDt1CXFWFy5OGIyF4hF3V9suVDzsn7NEi2zu7FC%2BeWuzbJC6WX5EQiK%2F3cjKgboTxRGqKIcu66rXP9Sdi4X5WxrKl5ynLFszKws%2BqcA8ycnCtPJ70tPyj1heiFcMaqPfJtHZNv0rOBJCEBW0E6pJeMjGrtEcMXOpu%2FwvC20SYJE7%2Bw557N0iNl5xRr3yLu0pNjvkoqZSP5IzzpsBZFoqjJepPE%2Fr1doRzKQCFG%2BibBGsLrACY6zlk6eJgiTBOKBkFiGCqjXHAjX%2BUSfo2qanhxAbGTw9CDbtx00fpx2W32%2Fs8o7WfyTsszHqFaAGdZSBAcn97cGok%2Fzz%2Bv3Is7zY3Qc8g8EaYRxn1BER82T%2FrDkrV7PpLJijhpNIsSBCHOWRfJZ1vHrhmMN6MUndQDRmPhq%2F2C5WPjgmiwpCSnGJBD%2BrRewaYxjDZ357ABjqkAePL2fLvjWfNZc6FtbmIQctsgMOCO%2FD4VjECfEBAduxHTggBUTSPgLP3SWPLmfdo8hxD9Tlna0NDDs3WkMkYx2gR7PCQKzMAkdQUSVTSw%2FyirTmD0DZkuShS0x7jJN2wNp3Xbz4Ka6m2JYkKtWm7XjReXUj8YYrwQreJM7dM5XRg76GdZ%2B9GvXDPcrMnqoPCsX0a4BvbNKdUxlC7opMFGbY2KpVl&X-Amz-Signature=12cacdef041dcf4059144eac796768eac96fd5f6a57ba4d880c1ce4fbc2f1294&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXVRHV2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD3Tdr%2BUg1mzze7WUvRFBOBT44DQxcnwUTkuzzIvH4ffwIhAMVsiCMn9UNQHFuF17wmRKV4pvmuqGDtcDWxq46ugkMNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtzsa4yKKglYec03Aq3ANAUUMjxWXNwj8fC%2F5FDm65HFxm2XCzXoNfNONkkV3nFht%2B4YQJgygQ3ueyyqPQsz8DLcnH09R0EbUXEhE%2BN1J3wjXQ1vFdoUa1P2kp0jML57dJXOb6wLPDZVNviykzcs%2FO%2B7u8vfIzTYsuqfVnfaMd4hW3oNvo5fB877r5gX3kStgCkNmUF1M7CeP1JxGse0yx1TFcStnDDt1CXFWFy5OGIyF4hF3V9suVDzsn7NEi2zu7FC%2BeWuzbJC6WX5EQiK%2F3cjKgboTxRGqKIcu66rXP9Sdi4X5WxrKl5ynLFszKws%2BqcA8ycnCtPJ70tPyj1heiFcMaqPfJtHZNv0rOBJCEBW0E6pJeMjGrtEcMXOpu%2FwvC20SYJE7%2Bw557N0iNl5xRr3yLu0pNjvkoqZSP5IzzpsBZFoqjJepPE%2Fr1doRzKQCFG%2BibBGsLrACY6zlk6eJgiTBOKBkFiGCqjXHAjX%2BUSfo2qanhxAbGTw9CDbtx00fpx2W32%2Fs8o7WfyTsszHqFaAGdZSBAcn97cGok%2Fzz%2Bv3Is7zY3Qc8g8EaYRxn1BER82T%2FrDkrV7PpLJijhpNIsSBCHOWRfJZ1vHrhmMN6MUndQDRmPhq%2F2C5WPjgmiwpCSnGJBD%2BrRewaYxjDZ357ABjqkAePL2fLvjWfNZc6FtbmIQctsgMOCO%2FD4VjECfEBAduxHTggBUTSPgLP3SWPLmfdo8hxD9Tlna0NDDs3WkMkYx2gR7PCQKzMAkdQUSVTSw%2FyirTmD0DZkuShS0x7jJN2wNp3Xbz4Ka6m2JYkKtWm7XjReXUj8YYrwQreJM7dM5XRg76GdZ%2B9GvXDPcrMnqoPCsX0a4BvbNKdUxlC7opMFGbY2KpVl&X-Amz-Signature=a43bc3c52a5e83d8f3c2cd2e0f4b087b7b1deeac561931529c1c0814ca3aeda8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXVRHV2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD3Tdr%2BUg1mzze7WUvRFBOBT44DQxcnwUTkuzzIvH4ffwIhAMVsiCMn9UNQHFuF17wmRKV4pvmuqGDtcDWxq46ugkMNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtzsa4yKKglYec03Aq3ANAUUMjxWXNwj8fC%2F5FDm65HFxm2XCzXoNfNONkkV3nFht%2B4YQJgygQ3ueyyqPQsz8DLcnH09R0EbUXEhE%2BN1J3wjXQ1vFdoUa1P2kp0jML57dJXOb6wLPDZVNviykzcs%2FO%2B7u8vfIzTYsuqfVnfaMd4hW3oNvo5fB877r5gX3kStgCkNmUF1M7CeP1JxGse0yx1TFcStnDDt1CXFWFy5OGIyF4hF3V9suVDzsn7NEi2zu7FC%2BeWuzbJC6WX5EQiK%2F3cjKgboTxRGqKIcu66rXP9Sdi4X5WxrKl5ynLFszKws%2BqcA8ycnCtPJ70tPyj1heiFcMaqPfJtHZNv0rOBJCEBW0E6pJeMjGrtEcMXOpu%2FwvC20SYJE7%2Bw557N0iNl5xRr3yLu0pNjvkoqZSP5IzzpsBZFoqjJepPE%2Fr1doRzKQCFG%2BibBGsLrACY6zlk6eJgiTBOKBkFiGCqjXHAjX%2BUSfo2qanhxAbGTw9CDbtx00fpx2W32%2Fs8o7WfyTsszHqFaAGdZSBAcn97cGok%2Fzz%2Bv3Is7zY3Qc8g8EaYRxn1BER82T%2FrDkrV7PpLJijhpNIsSBCHOWRfJZ1vHrhmMN6MUndQDRmPhq%2F2C5WPjgmiwpCSnGJBD%2BrRewaYxjDZ357ABjqkAePL2fLvjWfNZc6FtbmIQctsgMOCO%2FD4VjECfEBAduxHTggBUTSPgLP3SWPLmfdo8hxD9Tlna0NDDs3WkMkYx2gR7PCQKzMAkdQUSVTSw%2FyirTmD0DZkuShS0x7jJN2wNp3Xbz4Ka6m2JYkKtWm7XjReXUj8YYrwQreJM7dM5XRg76GdZ%2B9GvXDPcrMnqoPCsX0a4BvbNKdUxlC7opMFGbY2KpVl&X-Amz-Signature=6f7a6d9a0b6666923c769757a02f64647cebd78955ff1a17ed93c1c2a7b1d303&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXVRHV2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD3Tdr%2BUg1mzze7WUvRFBOBT44DQxcnwUTkuzzIvH4ffwIhAMVsiCMn9UNQHFuF17wmRKV4pvmuqGDtcDWxq46ugkMNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtzsa4yKKglYec03Aq3ANAUUMjxWXNwj8fC%2F5FDm65HFxm2XCzXoNfNONkkV3nFht%2B4YQJgygQ3ueyyqPQsz8DLcnH09R0EbUXEhE%2BN1J3wjXQ1vFdoUa1P2kp0jML57dJXOb6wLPDZVNviykzcs%2FO%2B7u8vfIzTYsuqfVnfaMd4hW3oNvo5fB877r5gX3kStgCkNmUF1M7CeP1JxGse0yx1TFcStnDDt1CXFWFy5OGIyF4hF3V9suVDzsn7NEi2zu7FC%2BeWuzbJC6WX5EQiK%2F3cjKgboTxRGqKIcu66rXP9Sdi4X5WxrKl5ynLFszKws%2BqcA8ycnCtPJ70tPyj1heiFcMaqPfJtHZNv0rOBJCEBW0E6pJeMjGrtEcMXOpu%2FwvC20SYJE7%2Bw557N0iNl5xRr3yLu0pNjvkoqZSP5IzzpsBZFoqjJepPE%2Fr1doRzKQCFG%2BibBGsLrACY6zlk6eJgiTBOKBkFiGCqjXHAjX%2BUSfo2qanhxAbGTw9CDbtx00fpx2W32%2Fs8o7WfyTsszHqFaAGdZSBAcn97cGok%2Fzz%2Bv3Is7zY3Qc8g8EaYRxn1BER82T%2FrDkrV7PpLJijhpNIsSBCHOWRfJZ1vHrhmMN6MUndQDRmPhq%2F2C5WPjgmiwpCSnGJBD%2BrRewaYxjDZ357ABjqkAePL2fLvjWfNZc6FtbmIQctsgMOCO%2FD4VjECfEBAduxHTggBUTSPgLP3SWPLmfdo8hxD9Tlna0NDDs3WkMkYx2gR7PCQKzMAkdQUSVTSw%2FyirTmD0DZkuShS0x7jJN2wNp3Xbz4Ka6m2JYkKtWm7XjReXUj8YYrwQreJM7dM5XRg76GdZ%2B9GvXDPcrMnqoPCsX0a4BvbNKdUxlC7opMFGbY2KpVl&X-Amz-Signature=ff1a87faf49545affd1728308bf959b516f63154a6c0225f5db3e08b11123962&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXVRHV2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD3Tdr%2BUg1mzze7WUvRFBOBT44DQxcnwUTkuzzIvH4ffwIhAMVsiCMn9UNQHFuF17wmRKV4pvmuqGDtcDWxq46ugkMNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtzsa4yKKglYec03Aq3ANAUUMjxWXNwj8fC%2F5FDm65HFxm2XCzXoNfNONkkV3nFht%2B4YQJgygQ3ueyyqPQsz8DLcnH09R0EbUXEhE%2BN1J3wjXQ1vFdoUa1P2kp0jML57dJXOb6wLPDZVNviykzcs%2FO%2B7u8vfIzTYsuqfVnfaMd4hW3oNvo5fB877r5gX3kStgCkNmUF1M7CeP1JxGse0yx1TFcStnDDt1CXFWFy5OGIyF4hF3V9suVDzsn7NEi2zu7FC%2BeWuzbJC6WX5EQiK%2F3cjKgboTxRGqKIcu66rXP9Sdi4X5WxrKl5ynLFszKws%2BqcA8ycnCtPJ70tPyj1heiFcMaqPfJtHZNv0rOBJCEBW0E6pJeMjGrtEcMXOpu%2FwvC20SYJE7%2Bw557N0iNl5xRr3yLu0pNjvkoqZSP5IzzpsBZFoqjJepPE%2Fr1doRzKQCFG%2BibBGsLrACY6zlk6eJgiTBOKBkFiGCqjXHAjX%2BUSfo2qanhxAbGTw9CDbtx00fpx2W32%2Fs8o7WfyTsszHqFaAGdZSBAcn97cGok%2Fzz%2Bv3Is7zY3Qc8g8EaYRxn1BER82T%2FrDkrV7PpLJijhpNIsSBCHOWRfJZ1vHrhmMN6MUndQDRmPhq%2F2C5WPjgmiwpCSnGJBD%2BrRewaYxjDZ357ABjqkAePL2fLvjWfNZc6FtbmIQctsgMOCO%2FD4VjECfEBAduxHTggBUTSPgLP3SWPLmfdo8hxD9Tlna0NDDs3WkMkYx2gR7PCQKzMAkdQUSVTSw%2FyirTmD0DZkuShS0x7jJN2wNp3Xbz4Ka6m2JYkKtWm7XjReXUj8YYrwQreJM7dM5XRg76GdZ%2B9GvXDPcrMnqoPCsX0a4BvbNKdUxlC7opMFGbY2KpVl&X-Amz-Signature=6a3137b5614fce86ab02e1e0300de99692eec8560b0e4c2f1ee54e71fbf663b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
