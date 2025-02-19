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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ24C2QY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1n%2B7ilPScEb3qv943CDb9ZJOZtKlSNB75nSjrkchsXgIhAKij8ygBDhhamWWzrMZ7wXxbf3WzGci2SkowPY%2FoVdebKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0vKDd%2FygupdB31mgq3ANmHEvxMVsDP6PZn%2BdRxMKAF2FLDruyc3sUxJsr6nDuhc2WXBIcg5DOUOK980RXlZkW7Os16NGa7IwlU3JhEGIe%2BciHujpnyhR4xr7AbgRQzbSPXcU91Fi75QcFy8ohDUx7gaU5ZUTLPVowthf38VANk8fhg6lql8yL15th2F14imF8cpNDlietRbXooSSc5INCfYQVjkOoA5%2B%2B84q6oJWfZ1cAA%2F3Okx5huzSFPjfiJFPNHfQafG5RXPWXliX%2FuutAoppG8mn3naMstLYqvApGvpsHk6Tqdi6fsmGlXEKw3wlgGLpl0ZatfMbfQf8A7OcQW6RoNwtJN%2FihZVrL3dgLglFFCpXL4Y6M6C7xYO9m4Fx%2BwaptR8K37eNsO7wrZpLTu4ltyFVjJSHtQos%2BZLOBXU6gXv2GxgkWI832c90NwUBi8%2F1GFjkvYOlMboJ%2FSwoh2E6WaEYpxWLu0sN%2BXR4yLsJTEOFpGzqzheU2iycz6OOov%2FKQyrgnXjPfgzZwfhDVQUik2d0eS88PqRKS37NBqgxNvL%2BOGjuo4oEio%2BtyGKPPfXQtwqyIpq9YeQ0zPSjbykN8eK3bJsG7Kq%2F14ycLmU%2F9HIPRx7Dv32qVrUNYTRwcVHSv%2B9kPYVJbUzCT%2B9a9BjqkAQ5EEe%2BLnRv5Nk2%2F7b%2BRQg%2B0xNoi1i8PDwAX7TA7sfX3RpXtQpFC6kJNAferlszUj9ScFZ4%2Fk%2FmKso%2FSUuc0X2rwtrAoJTdzXC1PCOAuKmgg9Q9RHiVhnBm9ilVdiBn1cTdcuseZkDV8fKn4vsMNtqhZpJzF1aPKF4cuCQkw7tNmWIvNlEwW8Vxj9XVa7an%2FPwmkisTGr%2FKhX%2FV4xgbDe8xGi5Mc&X-Amz-Signature=737866ef8a34966fbf77c0d4f4eae6c6609244c42677cde91ea3aee39e79653e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ24C2QY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1n%2B7ilPScEb3qv943CDb9ZJOZtKlSNB75nSjrkchsXgIhAKij8ygBDhhamWWzrMZ7wXxbf3WzGci2SkowPY%2FoVdebKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0vKDd%2FygupdB31mgq3ANmHEvxMVsDP6PZn%2BdRxMKAF2FLDruyc3sUxJsr6nDuhc2WXBIcg5DOUOK980RXlZkW7Os16NGa7IwlU3JhEGIe%2BciHujpnyhR4xr7AbgRQzbSPXcU91Fi75QcFy8ohDUx7gaU5ZUTLPVowthf38VANk8fhg6lql8yL15th2F14imF8cpNDlietRbXooSSc5INCfYQVjkOoA5%2B%2B84q6oJWfZ1cAA%2F3Okx5huzSFPjfiJFPNHfQafG5RXPWXliX%2FuutAoppG8mn3naMstLYqvApGvpsHk6Tqdi6fsmGlXEKw3wlgGLpl0ZatfMbfQf8A7OcQW6RoNwtJN%2FihZVrL3dgLglFFCpXL4Y6M6C7xYO9m4Fx%2BwaptR8K37eNsO7wrZpLTu4ltyFVjJSHtQos%2BZLOBXU6gXv2GxgkWI832c90NwUBi8%2F1GFjkvYOlMboJ%2FSwoh2E6WaEYpxWLu0sN%2BXR4yLsJTEOFpGzqzheU2iycz6OOov%2FKQyrgnXjPfgzZwfhDVQUik2d0eS88PqRKS37NBqgxNvL%2BOGjuo4oEio%2BtyGKPPfXQtwqyIpq9YeQ0zPSjbykN8eK3bJsG7Kq%2F14ycLmU%2F9HIPRx7Dv32qVrUNYTRwcVHSv%2B9kPYVJbUzCT%2B9a9BjqkAQ5EEe%2BLnRv5Nk2%2F7b%2BRQg%2B0xNoi1i8PDwAX7TA7sfX3RpXtQpFC6kJNAferlszUj9ScFZ4%2Fk%2FmKso%2FSUuc0X2rwtrAoJTdzXC1PCOAuKmgg9Q9RHiVhnBm9ilVdiBn1cTdcuseZkDV8fKn4vsMNtqhZpJzF1aPKF4cuCQkw7tNmWIvNlEwW8Vxj9XVa7an%2FPwmkisTGr%2FKhX%2FV4xgbDe8xGi5Mc&X-Amz-Signature=bf9f557b060af46bbba7c8a20cb7b44b4c986ff84f5d0cb6d7030381bca2b1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ24C2QY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1n%2B7ilPScEb3qv943CDb9ZJOZtKlSNB75nSjrkchsXgIhAKij8ygBDhhamWWzrMZ7wXxbf3WzGci2SkowPY%2FoVdebKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0vKDd%2FygupdB31mgq3ANmHEvxMVsDP6PZn%2BdRxMKAF2FLDruyc3sUxJsr6nDuhc2WXBIcg5DOUOK980RXlZkW7Os16NGa7IwlU3JhEGIe%2BciHujpnyhR4xr7AbgRQzbSPXcU91Fi75QcFy8ohDUx7gaU5ZUTLPVowthf38VANk8fhg6lql8yL15th2F14imF8cpNDlietRbXooSSc5INCfYQVjkOoA5%2B%2B84q6oJWfZ1cAA%2F3Okx5huzSFPjfiJFPNHfQafG5RXPWXliX%2FuutAoppG8mn3naMstLYqvApGvpsHk6Tqdi6fsmGlXEKw3wlgGLpl0ZatfMbfQf8A7OcQW6RoNwtJN%2FihZVrL3dgLglFFCpXL4Y6M6C7xYO9m4Fx%2BwaptR8K37eNsO7wrZpLTu4ltyFVjJSHtQos%2BZLOBXU6gXv2GxgkWI832c90NwUBi8%2F1GFjkvYOlMboJ%2FSwoh2E6WaEYpxWLu0sN%2BXR4yLsJTEOFpGzqzheU2iycz6OOov%2FKQyrgnXjPfgzZwfhDVQUik2d0eS88PqRKS37NBqgxNvL%2BOGjuo4oEio%2BtyGKPPfXQtwqyIpq9YeQ0zPSjbykN8eK3bJsG7Kq%2F14ycLmU%2F9HIPRx7Dv32qVrUNYTRwcVHSv%2B9kPYVJbUzCT%2B9a9BjqkAQ5EEe%2BLnRv5Nk2%2F7b%2BRQg%2B0xNoi1i8PDwAX7TA7sfX3RpXtQpFC6kJNAferlszUj9ScFZ4%2Fk%2FmKso%2FSUuc0X2rwtrAoJTdzXC1PCOAuKmgg9Q9RHiVhnBm9ilVdiBn1cTdcuseZkDV8fKn4vsMNtqhZpJzF1aPKF4cuCQkw7tNmWIvNlEwW8Vxj9XVa7an%2FPwmkisTGr%2FKhX%2FV4xgbDe8xGi5Mc&X-Amz-Signature=e4c37e19f14003c8b4cfeac4b58c11734122fc69d5ea2ed8999ff1abe2735004&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ24C2QY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1n%2B7ilPScEb3qv943CDb9ZJOZtKlSNB75nSjrkchsXgIhAKij8ygBDhhamWWzrMZ7wXxbf3WzGci2SkowPY%2FoVdebKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0vKDd%2FygupdB31mgq3ANmHEvxMVsDP6PZn%2BdRxMKAF2FLDruyc3sUxJsr6nDuhc2WXBIcg5DOUOK980RXlZkW7Os16NGa7IwlU3JhEGIe%2BciHujpnyhR4xr7AbgRQzbSPXcU91Fi75QcFy8ohDUx7gaU5ZUTLPVowthf38VANk8fhg6lql8yL15th2F14imF8cpNDlietRbXooSSc5INCfYQVjkOoA5%2B%2B84q6oJWfZ1cAA%2F3Okx5huzSFPjfiJFPNHfQafG5RXPWXliX%2FuutAoppG8mn3naMstLYqvApGvpsHk6Tqdi6fsmGlXEKw3wlgGLpl0ZatfMbfQf8A7OcQW6RoNwtJN%2FihZVrL3dgLglFFCpXL4Y6M6C7xYO9m4Fx%2BwaptR8K37eNsO7wrZpLTu4ltyFVjJSHtQos%2BZLOBXU6gXv2GxgkWI832c90NwUBi8%2F1GFjkvYOlMboJ%2FSwoh2E6WaEYpxWLu0sN%2BXR4yLsJTEOFpGzqzheU2iycz6OOov%2FKQyrgnXjPfgzZwfhDVQUik2d0eS88PqRKS37NBqgxNvL%2BOGjuo4oEio%2BtyGKPPfXQtwqyIpq9YeQ0zPSjbykN8eK3bJsG7Kq%2F14ycLmU%2F9HIPRx7Dv32qVrUNYTRwcVHSv%2B9kPYVJbUzCT%2B9a9BjqkAQ5EEe%2BLnRv5Nk2%2F7b%2BRQg%2B0xNoi1i8PDwAX7TA7sfX3RpXtQpFC6kJNAferlszUj9ScFZ4%2Fk%2FmKso%2FSUuc0X2rwtrAoJTdzXC1PCOAuKmgg9Q9RHiVhnBm9ilVdiBn1cTdcuseZkDV8fKn4vsMNtqhZpJzF1aPKF4cuCQkw7tNmWIvNlEwW8Vxj9XVa7an%2FPwmkisTGr%2FKhX%2FV4xgbDe8xGi5Mc&X-Amz-Signature=3f6b23bc1067d695fde6f9aac48a3b855b7111cf0dd20dd539d40a4118dbccc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ24C2QY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1n%2B7ilPScEb3qv943CDb9ZJOZtKlSNB75nSjrkchsXgIhAKij8ygBDhhamWWzrMZ7wXxbf3WzGci2SkowPY%2FoVdebKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0vKDd%2FygupdB31mgq3ANmHEvxMVsDP6PZn%2BdRxMKAF2FLDruyc3sUxJsr6nDuhc2WXBIcg5DOUOK980RXlZkW7Os16NGa7IwlU3JhEGIe%2BciHujpnyhR4xr7AbgRQzbSPXcU91Fi75QcFy8ohDUx7gaU5ZUTLPVowthf38VANk8fhg6lql8yL15th2F14imF8cpNDlietRbXooSSc5INCfYQVjkOoA5%2B%2B84q6oJWfZ1cAA%2F3Okx5huzSFPjfiJFPNHfQafG5RXPWXliX%2FuutAoppG8mn3naMstLYqvApGvpsHk6Tqdi6fsmGlXEKw3wlgGLpl0ZatfMbfQf8A7OcQW6RoNwtJN%2FihZVrL3dgLglFFCpXL4Y6M6C7xYO9m4Fx%2BwaptR8K37eNsO7wrZpLTu4ltyFVjJSHtQos%2BZLOBXU6gXv2GxgkWI832c90NwUBi8%2F1GFjkvYOlMboJ%2FSwoh2E6WaEYpxWLu0sN%2BXR4yLsJTEOFpGzqzheU2iycz6OOov%2FKQyrgnXjPfgzZwfhDVQUik2d0eS88PqRKS37NBqgxNvL%2BOGjuo4oEio%2BtyGKPPfXQtwqyIpq9YeQ0zPSjbykN8eK3bJsG7Kq%2F14ycLmU%2F9HIPRx7Dv32qVrUNYTRwcVHSv%2B9kPYVJbUzCT%2B9a9BjqkAQ5EEe%2BLnRv5Nk2%2F7b%2BRQg%2B0xNoi1i8PDwAX7TA7sfX3RpXtQpFC6kJNAferlszUj9ScFZ4%2Fk%2FmKso%2FSUuc0X2rwtrAoJTdzXC1PCOAuKmgg9Q9RHiVhnBm9ilVdiBn1cTdcuseZkDV8fKn4vsMNtqhZpJzF1aPKF4cuCQkw7tNmWIvNlEwW8Vxj9XVa7an%2FPwmkisTGr%2FKhX%2FV4xgbDe8xGi5Mc&X-Amz-Signature=04139a2b3ddb3071471e964dd55eb623288767d3910d40ad1d4d5b7e9396a639&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ24C2QY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1n%2B7ilPScEb3qv943CDb9ZJOZtKlSNB75nSjrkchsXgIhAKij8ygBDhhamWWzrMZ7wXxbf3WzGci2SkowPY%2FoVdebKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0vKDd%2FygupdB31mgq3ANmHEvxMVsDP6PZn%2BdRxMKAF2FLDruyc3sUxJsr6nDuhc2WXBIcg5DOUOK980RXlZkW7Os16NGa7IwlU3JhEGIe%2BciHujpnyhR4xr7AbgRQzbSPXcU91Fi75QcFy8ohDUx7gaU5ZUTLPVowthf38VANk8fhg6lql8yL15th2F14imF8cpNDlietRbXooSSc5INCfYQVjkOoA5%2B%2B84q6oJWfZ1cAA%2F3Okx5huzSFPjfiJFPNHfQafG5RXPWXliX%2FuutAoppG8mn3naMstLYqvApGvpsHk6Tqdi6fsmGlXEKw3wlgGLpl0ZatfMbfQf8A7OcQW6RoNwtJN%2FihZVrL3dgLglFFCpXL4Y6M6C7xYO9m4Fx%2BwaptR8K37eNsO7wrZpLTu4ltyFVjJSHtQos%2BZLOBXU6gXv2GxgkWI832c90NwUBi8%2F1GFjkvYOlMboJ%2FSwoh2E6WaEYpxWLu0sN%2BXR4yLsJTEOFpGzqzheU2iycz6OOov%2FKQyrgnXjPfgzZwfhDVQUik2d0eS88PqRKS37NBqgxNvL%2BOGjuo4oEio%2BtyGKPPfXQtwqyIpq9YeQ0zPSjbykN8eK3bJsG7Kq%2F14ycLmU%2F9HIPRx7Dv32qVrUNYTRwcVHSv%2B9kPYVJbUzCT%2B9a9BjqkAQ5EEe%2BLnRv5Nk2%2F7b%2BRQg%2B0xNoi1i8PDwAX7TA7sfX3RpXtQpFC6kJNAferlszUj9ScFZ4%2Fk%2FmKso%2FSUuc0X2rwtrAoJTdzXC1PCOAuKmgg9Q9RHiVhnBm9ilVdiBn1cTdcuseZkDV8fKn4vsMNtqhZpJzF1aPKF4cuCQkw7tNmWIvNlEwW8Vxj9XVa7an%2FPwmkisTGr%2FKhX%2FV4xgbDe8xGi5Mc&X-Amz-Signature=1aed68663693a389708282ccdae5fbf0bbb8adccb53e9e16de3fd36897eb70c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ24C2QY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1n%2B7ilPScEb3qv943CDb9ZJOZtKlSNB75nSjrkchsXgIhAKij8ygBDhhamWWzrMZ7wXxbf3WzGci2SkowPY%2FoVdebKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0vKDd%2FygupdB31mgq3ANmHEvxMVsDP6PZn%2BdRxMKAF2FLDruyc3sUxJsr6nDuhc2WXBIcg5DOUOK980RXlZkW7Os16NGa7IwlU3JhEGIe%2BciHujpnyhR4xr7AbgRQzbSPXcU91Fi75QcFy8ohDUx7gaU5ZUTLPVowthf38VANk8fhg6lql8yL15th2F14imF8cpNDlietRbXooSSc5INCfYQVjkOoA5%2B%2B84q6oJWfZ1cAA%2F3Okx5huzSFPjfiJFPNHfQafG5RXPWXliX%2FuutAoppG8mn3naMstLYqvApGvpsHk6Tqdi6fsmGlXEKw3wlgGLpl0ZatfMbfQf8A7OcQW6RoNwtJN%2FihZVrL3dgLglFFCpXL4Y6M6C7xYO9m4Fx%2BwaptR8K37eNsO7wrZpLTu4ltyFVjJSHtQos%2BZLOBXU6gXv2GxgkWI832c90NwUBi8%2F1GFjkvYOlMboJ%2FSwoh2E6WaEYpxWLu0sN%2BXR4yLsJTEOFpGzqzheU2iycz6OOov%2FKQyrgnXjPfgzZwfhDVQUik2d0eS88PqRKS37NBqgxNvL%2BOGjuo4oEio%2BtyGKPPfXQtwqyIpq9YeQ0zPSjbykN8eK3bJsG7Kq%2F14ycLmU%2F9HIPRx7Dv32qVrUNYTRwcVHSv%2B9kPYVJbUzCT%2B9a9BjqkAQ5EEe%2BLnRv5Nk2%2F7b%2BRQg%2B0xNoi1i8PDwAX7TA7sfX3RpXtQpFC6kJNAferlszUj9ScFZ4%2Fk%2FmKso%2FSUuc0X2rwtrAoJTdzXC1PCOAuKmgg9Q9RHiVhnBm9ilVdiBn1cTdcuseZkDV8fKn4vsMNtqhZpJzF1aPKF4cuCQkw7tNmWIvNlEwW8Vxj9XVa7an%2FPwmkisTGr%2FKhX%2FV4xgbDe8xGi5Mc&X-Amz-Signature=d84d1711399179d732e3848e22e64c2cd6b6b34eca04f99a7bfeb82dcd5d6773&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ24C2QY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC1n%2B7ilPScEb3qv943CDb9ZJOZtKlSNB75nSjrkchsXgIhAKij8ygBDhhamWWzrMZ7wXxbf3WzGci2SkowPY%2FoVdebKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0vKDd%2FygupdB31mgq3ANmHEvxMVsDP6PZn%2BdRxMKAF2FLDruyc3sUxJsr6nDuhc2WXBIcg5DOUOK980RXlZkW7Os16NGa7IwlU3JhEGIe%2BciHujpnyhR4xr7AbgRQzbSPXcU91Fi75QcFy8ohDUx7gaU5ZUTLPVowthf38VANk8fhg6lql8yL15th2F14imF8cpNDlietRbXooSSc5INCfYQVjkOoA5%2B%2B84q6oJWfZ1cAA%2F3Okx5huzSFPjfiJFPNHfQafG5RXPWXliX%2FuutAoppG8mn3naMstLYqvApGvpsHk6Tqdi6fsmGlXEKw3wlgGLpl0ZatfMbfQf8A7OcQW6RoNwtJN%2FihZVrL3dgLglFFCpXL4Y6M6C7xYO9m4Fx%2BwaptR8K37eNsO7wrZpLTu4ltyFVjJSHtQos%2BZLOBXU6gXv2GxgkWI832c90NwUBi8%2F1GFjkvYOlMboJ%2FSwoh2E6WaEYpxWLu0sN%2BXR4yLsJTEOFpGzqzheU2iycz6OOov%2FKQyrgnXjPfgzZwfhDVQUik2d0eS88PqRKS37NBqgxNvL%2BOGjuo4oEio%2BtyGKPPfXQtwqyIpq9YeQ0zPSjbykN8eK3bJsG7Kq%2F14ycLmU%2F9HIPRx7Dv32qVrUNYTRwcVHSv%2B9kPYVJbUzCT%2B9a9BjqkAQ5EEe%2BLnRv5Nk2%2F7b%2BRQg%2B0xNoi1i8PDwAX7TA7sfX3RpXtQpFC6kJNAferlszUj9ScFZ4%2Fk%2FmKso%2FSUuc0X2rwtrAoJTdzXC1PCOAuKmgg9Q9RHiVhnBm9ilVdiBn1cTdcuseZkDV8fKn4vsMNtqhZpJzF1aPKF4cuCQkw7tNmWIvNlEwW8Vxj9XVa7an%2FPwmkisTGr%2FKhX%2FV4xgbDe8xGi5Mc&X-Amz-Signature=e2bae7074ab55e273fc4850fc5a95add61820d74aedc7101cc2dd4458fc7f0bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
