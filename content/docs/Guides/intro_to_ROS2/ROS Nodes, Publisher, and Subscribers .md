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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBMZEEB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2F9WXttmSicndjIQub1Zk3lR74khHFs8gMZMqkJuRfwIhAJNiRA45FNDbDgG59JsM%2B2%2FvrqAwaTjkBsP8TVwBJsM2KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzup7m80kIINjrEJQwq3ANVFewmWNrhBJGoRfsGpSsO0loQDCrM3FjejqID8FvqquVPr00HbrZS0bR0GMcP93ZNrOiJiws7KE61ot29NUuvoOLdNmD9i%2BSXESePl09WYCw%2FWw%2FbS5vDKKlEZ3jXbVLjiVhGuzq1CBqND50%2FS8VJFf5x0YEeHsFTqt2gLEMEFmIg0m1tLr7ZS9ttQIHH2s6M8iox3BwZRlf0yECpL%2Bh9SHAHyhIzM2G5He8uSr4Z2ZJlVFRjOU4VqhB%2BJgWuMCXOUHLiJ0ksE7%2F44FZPTuoxmbpBIJoYm1D9fNkIE0yosxljEEogLwHy%2B6sIcilYz5yE7ZeCBqQVmGMBshoezY4DSEBYl1lKF%2FJ6zoUAyZzAi6%2F7uTfKeJJPMPOfp2w6yt14ObiFtJkfcbhLcRfXdgwj%2FX6nh5KHC4nLo8HQ80F9mwUjgZ8N1jRvqTxe3K%2FeoMPL1l4uxkvXWAulDnCdhkR6T9ZfJ35KasjzXLSRoB7tQ4LmRiCDpeWcLM7afO%2B5y05zY32jWv0j1VWb5kuGykmFAznzCrTRXzZKk5CExf%2BATJQVBobLsSeC918VC5hAuc%2F9sSCRoap9Xqvn1M7gvOe43PS9vRV9ItQSUvvQZclb7Pv83%2B87hXHQd3FwCzCAwvS8BjqkAZikG5BevAD1j%2Blqb6pSXJxHzFuCCulTrMjZdSVJqPAp2JIOJqK7tN1y%2FBSSgxpjSRbcLPxuK57T49OvAikqGk382oBmyS%2Byf0LpcsNDPAK9diY%2BUZ6JgzLRcKGIaZtlY%2FpHE4i0wYzcTjf3ELxj1D00x9cEGEesSONAYhWJdgJRWVupnEEJ6jxWMmzMguwtyqJJmcq6u7F43oFcfVGYHBdbfy8C&X-Amz-Signature=bbfc90c8e93a1d2c94c13ebcc6a1776d371efce3f06bb890064afbde316ba198&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBMZEEB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2F9WXttmSicndjIQub1Zk3lR74khHFs8gMZMqkJuRfwIhAJNiRA45FNDbDgG59JsM%2B2%2FvrqAwaTjkBsP8TVwBJsM2KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzup7m80kIINjrEJQwq3ANVFewmWNrhBJGoRfsGpSsO0loQDCrM3FjejqID8FvqquVPr00HbrZS0bR0GMcP93ZNrOiJiws7KE61ot29NUuvoOLdNmD9i%2BSXESePl09WYCw%2FWw%2FbS5vDKKlEZ3jXbVLjiVhGuzq1CBqND50%2FS8VJFf5x0YEeHsFTqt2gLEMEFmIg0m1tLr7ZS9ttQIHH2s6M8iox3BwZRlf0yECpL%2Bh9SHAHyhIzM2G5He8uSr4Z2ZJlVFRjOU4VqhB%2BJgWuMCXOUHLiJ0ksE7%2F44FZPTuoxmbpBIJoYm1D9fNkIE0yosxljEEogLwHy%2B6sIcilYz5yE7ZeCBqQVmGMBshoezY4DSEBYl1lKF%2FJ6zoUAyZzAi6%2F7uTfKeJJPMPOfp2w6yt14ObiFtJkfcbhLcRfXdgwj%2FX6nh5KHC4nLo8HQ80F9mwUjgZ8N1jRvqTxe3K%2FeoMPL1l4uxkvXWAulDnCdhkR6T9ZfJ35KasjzXLSRoB7tQ4LmRiCDpeWcLM7afO%2B5y05zY32jWv0j1VWb5kuGykmFAznzCrTRXzZKk5CExf%2BATJQVBobLsSeC918VC5hAuc%2F9sSCRoap9Xqvn1M7gvOe43PS9vRV9ItQSUvvQZclb7Pv83%2B87hXHQd3FwCzCAwvS8BjqkAZikG5BevAD1j%2Blqb6pSXJxHzFuCCulTrMjZdSVJqPAp2JIOJqK7tN1y%2FBSSgxpjSRbcLPxuK57T49OvAikqGk382oBmyS%2Byf0LpcsNDPAK9diY%2BUZ6JgzLRcKGIaZtlY%2FpHE4i0wYzcTjf3ELxj1D00x9cEGEesSONAYhWJdgJRWVupnEEJ6jxWMmzMguwtyqJJmcq6u7F43oFcfVGYHBdbfy8C&X-Amz-Signature=ddb1c55632111c8d055ac4a62b4d20cd11c3fe95fc1a6ca7497e042a290754b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBMZEEB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2F9WXttmSicndjIQub1Zk3lR74khHFs8gMZMqkJuRfwIhAJNiRA45FNDbDgG59JsM%2B2%2FvrqAwaTjkBsP8TVwBJsM2KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzup7m80kIINjrEJQwq3ANVFewmWNrhBJGoRfsGpSsO0loQDCrM3FjejqID8FvqquVPr00HbrZS0bR0GMcP93ZNrOiJiws7KE61ot29NUuvoOLdNmD9i%2BSXESePl09WYCw%2FWw%2FbS5vDKKlEZ3jXbVLjiVhGuzq1CBqND50%2FS8VJFf5x0YEeHsFTqt2gLEMEFmIg0m1tLr7ZS9ttQIHH2s6M8iox3BwZRlf0yECpL%2Bh9SHAHyhIzM2G5He8uSr4Z2ZJlVFRjOU4VqhB%2BJgWuMCXOUHLiJ0ksE7%2F44FZPTuoxmbpBIJoYm1D9fNkIE0yosxljEEogLwHy%2B6sIcilYz5yE7ZeCBqQVmGMBshoezY4DSEBYl1lKF%2FJ6zoUAyZzAi6%2F7uTfKeJJPMPOfp2w6yt14ObiFtJkfcbhLcRfXdgwj%2FX6nh5KHC4nLo8HQ80F9mwUjgZ8N1jRvqTxe3K%2FeoMPL1l4uxkvXWAulDnCdhkR6T9ZfJ35KasjzXLSRoB7tQ4LmRiCDpeWcLM7afO%2B5y05zY32jWv0j1VWb5kuGykmFAznzCrTRXzZKk5CExf%2BATJQVBobLsSeC918VC5hAuc%2F9sSCRoap9Xqvn1M7gvOe43PS9vRV9ItQSUvvQZclb7Pv83%2B87hXHQd3FwCzCAwvS8BjqkAZikG5BevAD1j%2Blqb6pSXJxHzFuCCulTrMjZdSVJqPAp2JIOJqK7tN1y%2FBSSgxpjSRbcLPxuK57T49OvAikqGk382oBmyS%2Byf0LpcsNDPAK9diY%2BUZ6JgzLRcKGIaZtlY%2FpHE4i0wYzcTjf3ELxj1D00x9cEGEesSONAYhWJdgJRWVupnEEJ6jxWMmzMguwtyqJJmcq6u7F43oFcfVGYHBdbfy8C&X-Amz-Signature=06aa146d9ffdfccc8f6763be7d30adb73925d79ed5c039bf276b14d8b612a04e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBMZEEB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2F9WXttmSicndjIQub1Zk3lR74khHFs8gMZMqkJuRfwIhAJNiRA45FNDbDgG59JsM%2B2%2FvrqAwaTjkBsP8TVwBJsM2KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzup7m80kIINjrEJQwq3ANVFewmWNrhBJGoRfsGpSsO0loQDCrM3FjejqID8FvqquVPr00HbrZS0bR0GMcP93ZNrOiJiws7KE61ot29NUuvoOLdNmD9i%2BSXESePl09WYCw%2FWw%2FbS5vDKKlEZ3jXbVLjiVhGuzq1CBqND50%2FS8VJFf5x0YEeHsFTqt2gLEMEFmIg0m1tLr7ZS9ttQIHH2s6M8iox3BwZRlf0yECpL%2Bh9SHAHyhIzM2G5He8uSr4Z2ZJlVFRjOU4VqhB%2BJgWuMCXOUHLiJ0ksE7%2F44FZPTuoxmbpBIJoYm1D9fNkIE0yosxljEEogLwHy%2B6sIcilYz5yE7ZeCBqQVmGMBshoezY4DSEBYl1lKF%2FJ6zoUAyZzAi6%2F7uTfKeJJPMPOfp2w6yt14ObiFtJkfcbhLcRfXdgwj%2FX6nh5KHC4nLo8HQ80F9mwUjgZ8N1jRvqTxe3K%2FeoMPL1l4uxkvXWAulDnCdhkR6T9ZfJ35KasjzXLSRoB7tQ4LmRiCDpeWcLM7afO%2B5y05zY32jWv0j1VWb5kuGykmFAznzCrTRXzZKk5CExf%2BATJQVBobLsSeC918VC5hAuc%2F9sSCRoap9Xqvn1M7gvOe43PS9vRV9ItQSUvvQZclb7Pv83%2B87hXHQd3FwCzCAwvS8BjqkAZikG5BevAD1j%2Blqb6pSXJxHzFuCCulTrMjZdSVJqPAp2JIOJqK7tN1y%2FBSSgxpjSRbcLPxuK57T49OvAikqGk382oBmyS%2Byf0LpcsNDPAK9diY%2BUZ6JgzLRcKGIaZtlY%2FpHE4i0wYzcTjf3ELxj1D00x9cEGEesSONAYhWJdgJRWVupnEEJ6jxWMmzMguwtyqJJmcq6u7F43oFcfVGYHBdbfy8C&X-Amz-Signature=4e83ca582ac24d11e67e1e0baed4e52ebb20bd12949e909a417613de1c44583f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBMZEEB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2F9WXttmSicndjIQub1Zk3lR74khHFs8gMZMqkJuRfwIhAJNiRA45FNDbDgG59JsM%2B2%2FvrqAwaTjkBsP8TVwBJsM2KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzup7m80kIINjrEJQwq3ANVFewmWNrhBJGoRfsGpSsO0loQDCrM3FjejqID8FvqquVPr00HbrZS0bR0GMcP93ZNrOiJiws7KE61ot29NUuvoOLdNmD9i%2BSXESePl09WYCw%2FWw%2FbS5vDKKlEZ3jXbVLjiVhGuzq1CBqND50%2FS8VJFf5x0YEeHsFTqt2gLEMEFmIg0m1tLr7ZS9ttQIHH2s6M8iox3BwZRlf0yECpL%2Bh9SHAHyhIzM2G5He8uSr4Z2ZJlVFRjOU4VqhB%2BJgWuMCXOUHLiJ0ksE7%2F44FZPTuoxmbpBIJoYm1D9fNkIE0yosxljEEogLwHy%2B6sIcilYz5yE7ZeCBqQVmGMBshoezY4DSEBYl1lKF%2FJ6zoUAyZzAi6%2F7uTfKeJJPMPOfp2w6yt14ObiFtJkfcbhLcRfXdgwj%2FX6nh5KHC4nLo8HQ80F9mwUjgZ8N1jRvqTxe3K%2FeoMPL1l4uxkvXWAulDnCdhkR6T9ZfJ35KasjzXLSRoB7tQ4LmRiCDpeWcLM7afO%2B5y05zY32jWv0j1VWb5kuGykmFAznzCrTRXzZKk5CExf%2BATJQVBobLsSeC918VC5hAuc%2F9sSCRoap9Xqvn1M7gvOe43PS9vRV9ItQSUvvQZclb7Pv83%2B87hXHQd3FwCzCAwvS8BjqkAZikG5BevAD1j%2Blqb6pSXJxHzFuCCulTrMjZdSVJqPAp2JIOJqK7tN1y%2FBSSgxpjSRbcLPxuK57T49OvAikqGk382oBmyS%2Byf0LpcsNDPAK9diY%2BUZ6JgzLRcKGIaZtlY%2FpHE4i0wYzcTjf3ELxj1D00x9cEGEesSONAYhWJdgJRWVupnEEJ6jxWMmzMguwtyqJJmcq6u7F43oFcfVGYHBdbfy8C&X-Amz-Signature=549c34380210ac2a1c5fe0dd819c3ad6f9f6f136df0b5a8fac081e8f845ef3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBMZEEB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2F9WXttmSicndjIQub1Zk3lR74khHFs8gMZMqkJuRfwIhAJNiRA45FNDbDgG59JsM%2B2%2FvrqAwaTjkBsP8TVwBJsM2KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzup7m80kIINjrEJQwq3ANVFewmWNrhBJGoRfsGpSsO0loQDCrM3FjejqID8FvqquVPr00HbrZS0bR0GMcP93ZNrOiJiws7KE61ot29NUuvoOLdNmD9i%2BSXESePl09WYCw%2FWw%2FbS5vDKKlEZ3jXbVLjiVhGuzq1CBqND50%2FS8VJFf5x0YEeHsFTqt2gLEMEFmIg0m1tLr7ZS9ttQIHH2s6M8iox3BwZRlf0yECpL%2Bh9SHAHyhIzM2G5He8uSr4Z2ZJlVFRjOU4VqhB%2BJgWuMCXOUHLiJ0ksE7%2F44FZPTuoxmbpBIJoYm1D9fNkIE0yosxljEEogLwHy%2B6sIcilYz5yE7ZeCBqQVmGMBshoezY4DSEBYl1lKF%2FJ6zoUAyZzAi6%2F7uTfKeJJPMPOfp2w6yt14ObiFtJkfcbhLcRfXdgwj%2FX6nh5KHC4nLo8HQ80F9mwUjgZ8N1jRvqTxe3K%2FeoMPL1l4uxkvXWAulDnCdhkR6T9ZfJ35KasjzXLSRoB7tQ4LmRiCDpeWcLM7afO%2B5y05zY32jWv0j1VWb5kuGykmFAznzCrTRXzZKk5CExf%2BATJQVBobLsSeC918VC5hAuc%2F9sSCRoap9Xqvn1M7gvOe43PS9vRV9ItQSUvvQZclb7Pv83%2B87hXHQd3FwCzCAwvS8BjqkAZikG5BevAD1j%2Blqb6pSXJxHzFuCCulTrMjZdSVJqPAp2JIOJqK7tN1y%2FBSSgxpjSRbcLPxuK57T49OvAikqGk382oBmyS%2Byf0LpcsNDPAK9diY%2BUZ6JgzLRcKGIaZtlY%2FpHE4i0wYzcTjf3ELxj1D00x9cEGEesSONAYhWJdgJRWVupnEEJ6jxWMmzMguwtyqJJmcq6u7F43oFcfVGYHBdbfy8C&X-Amz-Signature=3963c76e12d1c264f2efe6a3d065d42b9a717b92013e1582b748a20cbfc6d875&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBMZEEB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2F9WXttmSicndjIQub1Zk3lR74khHFs8gMZMqkJuRfwIhAJNiRA45FNDbDgG59JsM%2B2%2FvrqAwaTjkBsP8TVwBJsM2KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzup7m80kIINjrEJQwq3ANVFewmWNrhBJGoRfsGpSsO0loQDCrM3FjejqID8FvqquVPr00HbrZS0bR0GMcP93ZNrOiJiws7KE61ot29NUuvoOLdNmD9i%2BSXESePl09WYCw%2FWw%2FbS5vDKKlEZ3jXbVLjiVhGuzq1CBqND50%2FS8VJFf5x0YEeHsFTqt2gLEMEFmIg0m1tLr7ZS9ttQIHH2s6M8iox3BwZRlf0yECpL%2Bh9SHAHyhIzM2G5He8uSr4Z2ZJlVFRjOU4VqhB%2BJgWuMCXOUHLiJ0ksE7%2F44FZPTuoxmbpBIJoYm1D9fNkIE0yosxljEEogLwHy%2B6sIcilYz5yE7ZeCBqQVmGMBshoezY4DSEBYl1lKF%2FJ6zoUAyZzAi6%2F7uTfKeJJPMPOfp2w6yt14ObiFtJkfcbhLcRfXdgwj%2FX6nh5KHC4nLo8HQ80F9mwUjgZ8N1jRvqTxe3K%2FeoMPL1l4uxkvXWAulDnCdhkR6T9ZfJ35KasjzXLSRoB7tQ4LmRiCDpeWcLM7afO%2B5y05zY32jWv0j1VWb5kuGykmFAznzCrTRXzZKk5CExf%2BATJQVBobLsSeC918VC5hAuc%2F9sSCRoap9Xqvn1M7gvOe43PS9vRV9ItQSUvvQZclb7Pv83%2B87hXHQd3FwCzCAwvS8BjqkAZikG5BevAD1j%2Blqb6pSXJxHzFuCCulTrMjZdSVJqPAp2JIOJqK7tN1y%2FBSSgxpjSRbcLPxuK57T49OvAikqGk382oBmyS%2Byf0LpcsNDPAK9diY%2BUZ6JgzLRcKGIaZtlY%2FpHE4i0wYzcTjf3ELxj1D00x9cEGEesSONAYhWJdgJRWVupnEEJ6jxWMmzMguwtyqJJmcq6u7F43oFcfVGYHBdbfy8C&X-Amz-Signature=13c00db1252afb0ce975ba5be07105392856303b4ab555bb535050a4697690cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBMZEEB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2F9WXttmSicndjIQub1Zk3lR74khHFs8gMZMqkJuRfwIhAJNiRA45FNDbDgG59JsM%2B2%2FvrqAwaTjkBsP8TVwBJsM2KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzup7m80kIINjrEJQwq3ANVFewmWNrhBJGoRfsGpSsO0loQDCrM3FjejqID8FvqquVPr00HbrZS0bR0GMcP93ZNrOiJiws7KE61ot29NUuvoOLdNmD9i%2BSXESePl09WYCw%2FWw%2FbS5vDKKlEZ3jXbVLjiVhGuzq1CBqND50%2FS8VJFf5x0YEeHsFTqt2gLEMEFmIg0m1tLr7ZS9ttQIHH2s6M8iox3BwZRlf0yECpL%2Bh9SHAHyhIzM2G5He8uSr4Z2ZJlVFRjOU4VqhB%2BJgWuMCXOUHLiJ0ksE7%2F44FZPTuoxmbpBIJoYm1D9fNkIE0yosxljEEogLwHy%2B6sIcilYz5yE7ZeCBqQVmGMBshoezY4DSEBYl1lKF%2FJ6zoUAyZzAi6%2F7uTfKeJJPMPOfp2w6yt14ObiFtJkfcbhLcRfXdgwj%2FX6nh5KHC4nLo8HQ80F9mwUjgZ8N1jRvqTxe3K%2FeoMPL1l4uxkvXWAulDnCdhkR6T9ZfJ35KasjzXLSRoB7tQ4LmRiCDpeWcLM7afO%2B5y05zY32jWv0j1VWb5kuGykmFAznzCrTRXzZKk5CExf%2BATJQVBobLsSeC918VC5hAuc%2F9sSCRoap9Xqvn1M7gvOe43PS9vRV9ItQSUvvQZclb7Pv83%2B87hXHQd3FwCzCAwvS8BjqkAZikG5BevAD1j%2Blqb6pSXJxHzFuCCulTrMjZdSVJqPAp2JIOJqK7tN1y%2FBSSgxpjSRbcLPxuK57T49OvAikqGk382oBmyS%2Byf0LpcsNDPAK9diY%2BUZ6JgzLRcKGIaZtlY%2FpHE4i0wYzcTjf3ELxj1D00x9cEGEesSONAYhWJdgJRWVupnEEJ6jxWMmzMguwtyqJJmcq6u7F43oFcfVGYHBdbfy8C&X-Amz-Signature=bd88e958098b6de943ef9d29651867ee52018c33b6747744b36cbe9269d1ae07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
