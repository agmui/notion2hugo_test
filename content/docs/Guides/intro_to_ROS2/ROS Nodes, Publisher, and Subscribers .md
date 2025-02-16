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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MW4EIG3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAyMGNtDoB9f7t15iW1Y3y2pnc3w3RqgtjaF0jTnRSOFAiEAsE7HtT7yYD3omywJumadQ3J%2BWX3twvpkNoHydLX1clgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJhEqiUDWQlX9AfPPyrcA0urmNtjjR6D%2FDh3Fg4bT9lk%2BtdrFwi8Z7FSaQNaEaJbhujp%2F4sbPshv6ByYUqMwYhs7p0RpFk9BmPfjhDNb%2FU934GWOWRUmnsjZ%2Fmr%2B%2B%2B%2ByoXXC6IPjsN5MBn1n%2BY5lOe23xRDpvH7Ef%2FYIGK40eHm2oaL5hX1AfhyJDt34A6k0bEfxMa4ayVtEWZr84SD5qrkMf%2BRsFrgz8zkXEADJECvENxFEG3%2FWTAIFo52Ww%2FuPmhZqvkNNY50VGZByyarakovSh4LLEuTH9iHBSN4kSlCQ6Bqsa5mKf0vzyuvZ0%2Beo6fgyIxkfkorB1D3A8XWRnIcr0bdfPqUDyEJG52o7qI2FJVupUrfbmpglzVnR8IpdkWdOKGIG8LkAX8DVSwZn2QJ0QjGodNEaZ78Xv4pmJrhiJJBhbKSlSxgmJ0CMhHnbsgqjexU0jhWZKB2UJ9owZ4OWaeg4VcOX8pPCzjmmODm5Brq1EFlOCh75P8Og7y6%2Fa%2FQxF4InYWwjpajjA69ny3eJEEmNvBXIJroZEfucx6%2BGQQ79zpBg2f%2FsX4U6Pxt0KvtD8f8a2M5NoyGr1nST9319hYqiUlEo8fhYn39OgORKBoXhk3ZZK%2Bce3ZSr6Ig8XV02T%2BF7IUJ1XHECMILLxL0GOqUBjAMRHkfWVVixkMiRmXOtDLAfkxP4UbC2Tuq3lqcW5UlomMDDzybxKo%2F3hWU6Y3xnI6fcB4t3Ow3xsocN9sXRvFqO7g63kjH%2FLwnJolkXE0hKwh%2BGpzednq9jzdb9ZHL7OVp2hNCuCaKH8%2FJD1lkUqQkvPv0sAEovuC9q2yhKbKKdf%2BQprL1pj7d1oRu0aQzr72Te2tftPdWwkrLr38uC3RtQJ55H&X-Amz-Signature=1df992080f785653b008c5008a141d03c8377587954092df9db4a536ccb4698a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MW4EIG3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAyMGNtDoB9f7t15iW1Y3y2pnc3w3RqgtjaF0jTnRSOFAiEAsE7HtT7yYD3omywJumadQ3J%2BWX3twvpkNoHydLX1clgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJhEqiUDWQlX9AfPPyrcA0urmNtjjR6D%2FDh3Fg4bT9lk%2BtdrFwi8Z7FSaQNaEaJbhujp%2F4sbPshv6ByYUqMwYhs7p0RpFk9BmPfjhDNb%2FU934GWOWRUmnsjZ%2Fmr%2B%2B%2B%2ByoXXC6IPjsN5MBn1n%2BY5lOe23xRDpvH7Ef%2FYIGK40eHm2oaL5hX1AfhyJDt34A6k0bEfxMa4ayVtEWZr84SD5qrkMf%2BRsFrgz8zkXEADJECvENxFEG3%2FWTAIFo52Ww%2FuPmhZqvkNNY50VGZByyarakovSh4LLEuTH9iHBSN4kSlCQ6Bqsa5mKf0vzyuvZ0%2Beo6fgyIxkfkorB1D3A8XWRnIcr0bdfPqUDyEJG52o7qI2FJVupUrfbmpglzVnR8IpdkWdOKGIG8LkAX8DVSwZn2QJ0QjGodNEaZ78Xv4pmJrhiJJBhbKSlSxgmJ0CMhHnbsgqjexU0jhWZKB2UJ9owZ4OWaeg4VcOX8pPCzjmmODm5Brq1EFlOCh75P8Og7y6%2Fa%2FQxF4InYWwjpajjA69ny3eJEEmNvBXIJroZEfucx6%2BGQQ79zpBg2f%2FsX4U6Pxt0KvtD8f8a2M5NoyGr1nST9319hYqiUlEo8fhYn39OgORKBoXhk3ZZK%2Bce3ZSr6Ig8XV02T%2BF7IUJ1XHECMILLxL0GOqUBjAMRHkfWVVixkMiRmXOtDLAfkxP4UbC2Tuq3lqcW5UlomMDDzybxKo%2F3hWU6Y3xnI6fcB4t3Ow3xsocN9sXRvFqO7g63kjH%2FLwnJolkXE0hKwh%2BGpzednq9jzdb9ZHL7OVp2hNCuCaKH8%2FJD1lkUqQkvPv0sAEovuC9q2yhKbKKdf%2BQprL1pj7d1oRu0aQzr72Te2tftPdWwkrLr38uC3RtQJ55H&X-Amz-Signature=53e97742d15af136120fc5e83b2f8802d3b3b53ac043ac2871b0f5ed120d4aff&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MW4EIG3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAyMGNtDoB9f7t15iW1Y3y2pnc3w3RqgtjaF0jTnRSOFAiEAsE7HtT7yYD3omywJumadQ3J%2BWX3twvpkNoHydLX1clgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJhEqiUDWQlX9AfPPyrcA0urmNtjjR6D%2FDh3Fg4bT9lk%2BtdrFwi8Z7FSaQNaEaJbhujp%2F4sbPshv6ByYUqMwYhs7p0RpFk9BmPfjhDNb%2FU934GWOWRUmnsjZ%2Fmr%2B%2B%2B%2ByoXXC6IPjsN5MBn1n%2BY5lOe23xRDpvH7Ef%2FYIGK40eHm2oaL5hX1AfhyJDt34A6k0bEfxMa4ayVtEWZr84SD5qrkMf%2BRsFrgz8zkXEADJECvENxFEG3%2FWTAIFo52Ww%2FuPmhZqvkNNY50VGZByyarakovSh4LLEuTH9iHBSN4kSlCQ6Bqsa5mKf0vzyuvZ0%2Beo6fgyIxkfkorB1D3A8XWRnIcr0bdfPqUDyEJG52o7qI2FJVupUrfbmpglzVnR8IpdkWdOKGIG8LkAX8DVSwZn2QJ0QjGodNEaZ78Xv4pmJrhiJJBhbKSlSxgmJ0CMhHnbsgqjexU0jhWZKB2UJ9owZ4OWaeg4VcOX8pPCzjmmODm5Brq1EFlOCh75P8Og7y6%2Fa%2FQxF4InYWwjpajjA69ny3eJEEmNvBXIJroZEfucx6%2BGQQ79zpBg2f%2FsX4U6Pxt0KvtD8f8a2M5NoyGr1nST9319hYqiUlEo8fhYn39OgORKBoXhk3ZZK%2Bce3ZSr6Ig8XV02T%2BF7IUJ1XHECMILLxL0GOqUBjAMRHkfWVVixkMiRmXOtDLAfkxP4UbC2Tuq3lqcW5UlomMDDzybxKo%2F3hWU6Y3xnI6fcB4t3Ow3xsocN9sXRvFqO7g63kjH%2FLwnJolkXE0hKwh%2BGpzednq9jzdb9ZHL7OVp2hNCuCaKH8%2FJD1lkUqQkvPv0sAEovuC9q2yhKbKKdf%2BQprL1pj7d1oRu0aQzr72Te2tftPdWwkrLr38uC3RtQJ55H&X-Amz-Signature=c7d16f76534b34a2e9f76942f3351277720a394084f2a6fcd0d2459ab9bbaa4b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MW4EIG3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAyMGNtDoB9f7t15iW1Y3y2pnc3w3RqgtjaF0jTnRSOFAiEAsE7HtT7yYD3omywJumadQ3J%2BWX3twvpkNoHydLX1clgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJhEqiUDWQlX9AfPPyrcA0urmNtjjR6D%2FDh3Fg4bT9lk%2BtdrFwi8Z7FSaQNaEaJbhujp%2F4sbPshv6ByYUqMwYhs7p0RpFk9BmPfjhDNb%2FU934GWOWRUmnsjZ%2Fmr%2B%2B%2B%2ByoXXC6IPjsN5MBn1n%2BY5lOe23xRDpvH7Ef%2FYIGK40eHm2oaL5hX1AfhyJDt34A6k0bEfxMa4ayVtEWZr84SD5qrkMf%2BRsFrgz8zkXEADJECvENxFEG3%2FWTAIFo52Ww%2FuPmhZqvkNNY50VGZByyarakovSh4LLEuTH9iHBSN4kSlCQ6Bqsa5mKf0vzyuvZ0%2Beo6fgyIxkfkorB1D3A8XWRnIcr0bdfPqUDyEJG52o7qI2FJVupUrfbmpglzVnR8IpdkWdOKGIG8LkAX8DVSwZn2QJ0QjGodNEaZ78Xv4pmJrhiJJBhbKSlSxgmJ0CMhHnbsgqjexU0jhWZKB2UJ9owZ4OWaeg4VcOX8pPCzjmmODm5Brq1EFlOCh75P8Og7y6%2Fa%2FQxF4InYWwjpajjA69ny3eJEEmNvBXIJroZEfucx6%2BGQQ79zpBg2f%2FsX4U6Pxt0KvtD8f8a2M5NoyGr1nST9319hYqiUlEo8fhYn39OgORKBoXhk3ZZK%2Bce3ZSr6Ig8XV02T%2BF7IUJ1XHECMILLxL0GOqUBjAMRHkfWVVixkMiRmXOtDLAfkxP4UbC2Tuq3lqcW5UlomMDDzybxKo%2F3hWU6Y3xnI6fcB4t3Ow3xsocN9sXRvFqO7g63kjH%2FLwnJolkXE0hKwh%2BGpzednq9jzdb9ZHL7OVp2hNCuCaKH8%2FJD1lkUqQkvPv0sAEovuC9q2yhKbKKdf%2BQprL1pj7d1oRu0aQzr72Te2tftPdWwkrLr38uC3RtQJ55H&X-Amz-Signature=c24712d2b0a85fb10e279363c2f70aacb2e57971545f260d1b7ad431e6aa4b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MW4EIG3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAyMGNtDoB9f7t15iW1Y3y2pnc3w3RqgtjaF0jTnRSOFAiEAsE7HtT7yYD3omywJumadQ3J%2BWX3twvpkNoHydLX1clgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJhEqiUDWQlX9AfPPyrcA0urmNtjjR6D%2FDh3Fg4bT9lk%2BtdrFwi8Z7FSaQNaEaJbhujp%2F4sbPshv6ByYUqMwYhs7p0RpFk9BmPfjhDNb%2FU934GWOWRUmnsjZ%2Fmr%2B%2B%2B%2ByoXXC6IPjsN5MBn1n%2BY5lOe23xRDpvH7Ef%2FYIGK40eHm2oaL5hX1AfhyJDt34A6k0bEfxMa4ayVtEWZr84SD5qrkMf%2BRsFrgz8zkXEADJECvENxFEG3%2FWTAIFo52Ww%2FuPmhZqvkNNY50VGZByyarakovSh4LLEuTH9iHBSN4kSlCQ6Bqsa5mKf0vzyuvZ0%2Beo6fgyIxkfkorB1D3A8XWRnIcr0bdfPqUDyEJG52o7qI2FJVupUrfbmpglzVnR8IpdkWdOKGIG8LkAX8DVSwZn2QJ0QjGodNEaZ78Xv4pmJrhiJJBhbKSlSxgmJ0CMhHnbsgqjexU0jhWZKB2UJ9owZ4OWaeg4VcOX8pPCzjmmODm5Brq1EFlOCh75P8Og7y6%2Fa%2FQxF4InYWwjpajjA69ny3eJEEmNvBXIJroZEfucx6%2BGQQ79zpBg2f%2FsX4U6Pxt0KvtD8f8a2M5NoyGr1nST9319hYqiUlEo8fhYn39OgORKBoXhk3ZZK%2Bce3ZSr6Ig8XV02T%2BF7IUJ1XHECMILLxL0GOqUBjAMRHkfWVVixkMiRmXOtDLAfkxP4UbC2Tuq3lqcW5UlomMDDzybxKo%2F3hWU6Y3xnI6fcB4t3Ow3xsocN9sXRvFqO7g63kjH%2FLwnJolkXE0hKwh%2BGpzednq9jzdb9ZHL7OVp2hNCuCaKH8%2FJD1lkUqQkvPv0sAEovuC9q2yhKbKKdf%2BQprL1pj7d1oRu0aQzr72Te2tftPdWwkrLr38uC3RtQJ55H&X-Amz-Signature=8839f5ff56ff6742afa9993bf47f8653a9089d76efe3612c3384f37dd8587706&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MW4EIG3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAyMGNtDoB9f7t15iW1Y3y2pnc3w3RqgtjaF0jTnRSOFAiEAsE7HtT7yYD3omywJumadQ3J%2BWX3twvpkNoHydLX1clgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJhEqiUDWQlX9AfPPyrcA0urmNtjjR6D%2FDh3Fg4bT9lk%2BtdrFwi8Z7FSaQNaEaJbhujp%2F4sbPshv6ByYUqMwYhs7p0RpFk9BmPfjhDNb%2FU934GWOWRUmnsjZ%2Fmr%2B%2B%2B%2ByoXXC6IPjsN5MBn1n%2BY5lOe23xRDpvH7Ef%2FYIGK40eHm2oaL5hX1AfhyJDt34A6k0bEfxMa4ayVtEWZr84SD5qrkMf%2BRsFrgz8zkXEADJECvENxFEG3%2FWTAIFo52Ww%2FuPmhZqvkNNY50VGZByyarakovSh4LLEuTH9iHBSN4kSlCQ6Bqsa5mKf0vzyuvZ0%2Beo6fgyIxkfkorB1D3A8XWRnIcr0bdfPqUDyEJG52o7qI2FJVupUrfbmpglzVnR8IpdkWdOKGIG8LkAX8DVSwZn2QJ0QjGodNEaZ78Xv4pmJrhiJJBhbKSlSxgmJ0CMhHnbsgqjexU0jhWZKB2UJ9owZ4OWaeg4VcOX8pPCzjmmODm5Brq1EFlOCh75P8Og7y6%2Fa%2FQxF4InYWwjpajjA69ny3eJEEmNvBXIJroZEfucx6%2BGQQ79zpBg2f%2FsX4U6Pxt0KvtD8f8a2M5NoyGr1nST9319hYqiUlEo8fhYn39OgORKBoXhk3ZZK%2Bce3ZSr6Ig8XV02T%2BF7IUJ1XHECMILLxL0GOqUBjAMRHkfWVVixkMiRmXOtDLAfkxP4UbC2Tuq3lqcW5UlomMDDzybxKo%2F3hWU6Y3xnI6fcB4t3Ow3xsocN9sXRvFqO7g63kjH%2FLwnJolkXE0hKwh%2BGpzednq9jzdb9ZHL7OVp2hNCuCaKH8%2FJD1lkUqQkvPv0sAEovuC9q2yhKbKKdf%2BQprL1pj7d1oRu0aQzr72Te2tftPdWwkrLr38uC3RtQJ55H&X-Amz-Signature=6ba1ec7aab8be10358e24f5d1cba708a2300c2358b4ebbec0398d18f70cf075a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MW4EIG3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAyMGNtDoB9f7t15iW1Y3y2pnc3w3RqgtjaF0jTnRSOFAiEAsE7HtT7yYD3omywJumadQ3J%2BWX3twvpkNoHydLX1clgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJhEqiUDWQlX9AfPPyrcA0urmNtjjR6D%2FDh3Fg4bT9lk%2BtdrFwi8Z7FSaQNaEaJbhujp%2F4sbPshv6ByYUqMwYhs7p0RpFk9BmPfjhDNb%2FU934GWOWRUmnsjZ%2Fmr%2B%2B%2B%2ByoXXC6IPjsN5MBn1n%2BY5lOe23xRDpvH7Ef%2FYIGK40eHm2oaL5hX1AfhyJDt34A6k0bEfxMa4ayVtEWZr84SD5qrkMf%2BRsFrgz8zkXEADJECvENxFEG3%2FWTAIFo52Ww%2FuPmhZqvkNNY50VGZByyarakovSh4LLEuTH9iHBSN4kSlCQ6Bqsa5mKf0vzyuvZ0%2Beo6fgyIxkfkorB1D3A8XWRnIcr0bdfPqUDyEJG52o7qI2FJVupUrfbmpglzVnR8IpdkWdOKGIG8LkAX8DVSwZn2QJ0QjGodNEaZ78Xv4pmJrhiJJBhbKSlSxgmJ0CMhHnbsgqjexU0jhWZKB2UJ9owZ4OWaeg4VcOX8pPCzjmmODm5Brq1EFlOCh75P8Og7y6%2Fa%2FQxF4InYWwjpajjA69ny3eJEEmNvBXIJroZEfucx6%2BGQQ79zpBg2f%2FsX4U6Pxt0KvtD8f8a2M5NoyGr1nST9319hYqiUlEo8fhYn39OgORKBoXhk3ZZK%2Bce3ZSr6Ig8XV02T%2BF7IUJ1XHECMILLxL0GOqUBjAMRHkfWVVixkMiRmXOtDLAfkxP4UbC2Tuq3lqcW5UlomMDDzybxKo%2F3hWU6Y3xnI6fcB4t3Ow3xsocN9sXRvFqO7g63kjH%2FLwnJolkXE0hKwh%2BGpzednq9jzdb9ZHL7OVp2hNCuCaKH8%2FJD1lkUqQkvPv0sAEovuC9q2yhKbKKdf%2BQprL1pj7d1oRu0aQzr72Te2tftPdWwkrLr38uC3RtQJ55H&X-Amz-Signature=57ca614d21c34ef2e6b9ea63743c751e2b738beb17fff1b9879de5baec1388f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MW4EIG3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAyMGNtDoB9f7t15iW1Y3y2pnc3w3RqgtjaF0jTnRSOFAiEAsE7HtT7yYD3omywJumadQ3J%2BWX3twvpkNoHydLX1clgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJhEqiUDWQlX9AfPPyrcA0urmNtjjR6D%2FDh3Fg4bT9lk%2BtdrFwi8Z7FSaQNaEaJbhujp%2F4sbPshv6ByYUqMwYhs7p0RpFk9BmPfjhDNb%2FU934GWOWRUmnsjZ%2Fmr%2B%2B%2B%2ByoXXC6IPjsN5MBn1n%2BY5lOe23xRDpvH7Ef%2FYIGK40eHm2oaL5hX1AfhyJDt34A6k0bEfxMa4ayVtEWZr84SD5qrkMf%2BRsFrgz8zkXEADJECvENxFEG3%2FWTAIFo52Ww%2FuPmhZqvkNNY50VGZByyarakovSh4LLEuTH9iHBSN4kSlCQ6Bqsa5mKf0vzyuvZ0%2Beo6fgyIxkfkorB1D3A8XWRnIcr0bdfPqUDyEJG52o7qI2FJVupUrfbmpglzVnR8IpdkWdOKGIG8LkAX8DVSwZn2QJ0QjGodNEaZ78Xv4pmJrhiJJBhbKSlSxgmJ0CMhHnbsgqjexU0jhWZKB2UJ9owZ4OWaeg4VcOX8pPCzjmmODm5Brq1EFlOCh75P8Og7y6%2Fa%2FQxF4InYWwjpajjA69ny3eJEEmNvBXIJroZEfucx6%2BGQQ79zpBg2f%2FsX4U6Pxt0KvtD8f8a2M5NoyGr1nST9319hYqiUlEo8fhYn39OgORKBoXhk3ZZK%2Bce3ZSr6Ig8XV02T%2BF7IUJ1XHECMILLxL0GOqUBjAMRHkfWVVixkMiRmXOtDLAfkxP4UbC2Tuq3lqcW5UlomMDDzybxKo%2F3hWU6Y3xnI6fcB4t3Ow3xsocN9sXRvFqO7g63kjH%2FLwnJolkXE0hKwh%2BGpzednq9jzdb9ZHL7OVp2hNCuCaKH8%2FJD1lkUqQkvPv0sAEovuC9q2yhKbKKdf%2BQprL1pj7d1oRu0aQzr72Te2tftPdWwkrLr38uC3RtQJ55H&X-Amz-Signature=c069ad56d7d9dbeef7494e429920c7083fc85e00fbb0c0b54c39d02ca790b8f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
