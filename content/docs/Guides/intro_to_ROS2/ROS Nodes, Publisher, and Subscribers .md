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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFE7Q23%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfxkcuFwWzjULPI8zAcCZZIhp%2BMfoHhAJoRv0ZP2aHAAiEAx%2BIjH5AfsMryFJCAm1ODrcMEYTagxGKD%2Bx7zJm1MX1Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDN1fpDYv5hZOVTckqyrcA52m%2FcdcmClX1QcknCNbcNjrqNhLuK4kFM3Pf7QPcgT2SChMtksPANkQKAJB4ZUris7oQIICVHC%2Fliv0Uo%2BCAnit4UMEnnDIMYH623FbYqQ7Eg2V6GAKZuNvfv%2BDiIfQkLIrMIerKDqKV0o5S6GjVas8H77Rk38lIKp408v4Fd2nSBGRE9pswDom4dE0dHCSBQObTTQlEIKxsZ4njGTt01vqD9BmU669XE90m3892gZyZ0c2SnIzKxSVyVz2JWmgogzIvwErP2j8gnvWhP1fOPxNC8JZsHu9UGEb%2Bcb0LxxcL34L8fhWcA0SM%2BTDE0629Fhb4ilCVpGBXr0olyBMzqlsCcQQPcsXc8C6IyA6KUWX4GQqCwrQlh4JWQAuZ9NsrIYT%2BjO1SeLoaN0crxu4P26C30gcVezTWhVVuqoRumpX2IzLIO%2F2FIFkCuyhKuHKKpbUAxvEcsPTmQUxI5pgv0mmF59UkhS6wf6EkC44xtqPPKy4iL3Zf5YfxfMqEewcYnNcpABMNsy%2Fw2og0DOCjK%2Bvu1ocwPkLSwCQgcVLds3qGwI3lNniTFdvf6cU%2BTlFPTCKtnJMfWo8vM84Lk%2BqAN%2BO%2BWvW7BjYVyqUeS6CfQDhhPNNe7vnKIrCTR5VMKaH5L4GOqUBFkIofZu4gnkz05Cs8rh07%2B2KVgp5LMlv%2BO9ugK0H%2B5EhDJ2Rc9HY6WkmlwLww60WYDEtwrrStqqCXub1s87fTY5td9ezUeIgJYb2lfBN1s4D%2BUugDKLiwhdtF2N5rR3NkDqpUKUDkRXw5mosOnL80Atf3Hrzolk7ZlnSTB%2FCgIvkzVY2qjNhuCA%2BLaVB3l7XbfOIIJvuYPzehyZPMNDUV%2B89mBKt&X-Amz-Signature=a99f55b635c54f54f5e1499d2b8192fa9aee6038f920a094793d1f8a7cfadad8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFE7Q23%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfxkcuFwWzjULPI8zAcCZZIhp%2BMfoHhAJoRv0ZP2aHAAiEAx%2BIjH5AfsMryFJCAm1ODrcMEYTagxGKD%2Bx7zJm1MX1Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDN1fpDYv5hZOVTckqyrcA52m%2FcdcmClX1QcknCNbcNjrqNhLuK4kFM3Pf7QPcgT2SChMtksPANkQKAJB4ZUris7oQIICVHC%2Fliv0Uo%2BCAnit4UMEnnDIMYH623FbYqQ7Eg2V6GAKZuNvfv%2BDiIfQkLIrMIerKDqKV0o5S6GjVas8H77Rk38lIKp408v4Fd2nSBGRE9pswDom4dE0dHCSBQObTTQlEIKxsZ4njGTt01vqD9BmU669XE90m3892gZyZ0c2SnIzKxSVyVz2JWmgogzIvwErP2j8gnvWhP1fOPxNC8JZsHu9UGEb%2Bcb0LxxcL34L8fhWcA0SM%2BTDE0629Fhb4ilCVpGBXr0olyBMzqlsCcQQPcsXc8C6IyA6KUWX4GQqCwrQlh4JWQAuZ9NsrIYT%2BjO1SeLoaN0crxu4P26C30gcVezTWhVVuqoRumpX2IzLIO%2F2FIFkCuyhKuHKKpbUAxvEcsPTmQUxI5pgv0mmF59UkhS6wf6EkC44xtqPPKy4iL3Zf5YfxfMqEewcYnNcpABMNsy%2Fw2og0DOCjK%2Bvu1ocwPkLSwCQgcVLds3qGwI3lNniTFdvf6cU%2BTlFPTCKtnJMfWo8vM84Lk%2BqAN%2BO%2BWvW7BjYVyqUeS6CfQDhhPNNe7vnKIrCTR5VMKaH5L4GOqUBFkIofZu4gnkz05Cs8rh07%2B2KVgp5LMlv%2BO9ugK0H%2B5EhDJ2Rc9HY6WkmlwLww60WYDEtwrrStqqCXub1s87fTY5td9ezUeIgJYb2lfBN1s4D%2BUugDKLiwhdtF2N5rR3NkDqpUKUDkRXw5mosOnL80Atf3Hrzolk7ZlnSTB%2FCgIvkzVY2qjNhuCA%2BLaVB3l7XbfOIIJvuYPzehyZPMNDUV%2B89mBKt&X-Amz-Signature=5c4d40fea53eb826537de36ebb9348c14b4fb9a67494323035efd6f6aab162c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFE7Q23%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfxkcuFwWzjULPI8zAcCZZIhp%2BMfoHhAJoRv0ZP2aHAAiEAx%2BIjH5AfsMryFJCAm1ODrcMEYTagxGKD%2Bx7zJm1MX1Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDN1fpDYv5hZOVTckqyrcA52m%2FcdcmClX1QcknCNbcNjrqNhLuK4kFM3Pf7QPcgT2SChMtksPANkQKAJB4ZUris7oQIICVHC%2Fliv0Uo%2BCAnit4UMEnnDIMYH623FbYqQ7Eg2V6GAKZuNvfv%2BDiIfQkLIrMIerKDqKV0o5S6GjVas8H77Rk38lIKp408v4Fd2nSBGRE9pswDom4dE0dHCSBQObTTQlEIKxsZ4njGTt01vqD9BmU669XE90m3892gZyZ0c2SnIzKxSVyVz2JWmgogzIvwErP2j8gnvWhP1fOPxNC8JZsHu9UGEb%2Bcb0LxxcL34L8fhWcA0SM%2BTDE0629Fhb4ilCVpGBXr0olyBMzqlsCcQQPcsXc8C6IyA6KUWX4GQqCwrQlh4JWQAuZ9NsrIYT%2BjO1SeLoaN0crxu4P26C30gcVezTWhVVuqoRumpX2IzLIO%2F2FIFkCuyhKuHKKpbUAxvEcsPTmQUxI5pgv0mmF59UkhS6wf6EkC44xtqPPKy4iL3Zf5YfxfMqEewcYnNcpABMNsy%2Fw2og0DOCjK%2Bvu1ocwPkLSwCQgcVLds3qGwI3lNniTFdvf6cU%2BTlFPTCKtnJMfWo8vM84Lk%2BqAN%2BO%2BWvW7BjYVyqUeS6CfQDhhPNNe7vnKIrCTR5VMKaH5L4GOqUBFkIofZu4gnkz05Cs8rh07%2B2KVgp5LMlv%2BO9ugK0H%2B5EhDJ2Rc9HY6WkmlwLww60WYDEtwrrStqqCXub1s87fTY5td9ezUeIgJYb2lfBN1s4D%2BUugDKLiwhdtF2N5rR3NkDqpUKUDkRXw5mosOnL80Atf3Hrzolk7ZlnSTB%2FCgIvkzVY2qjNhuCA%2BLaVB3l7XbfOIIJvuYPzehyZPMNDUV%2B89mBKt&X-Amz-Signature=630d8d3aaeea869d65cc1e6b43ede9eaefde4db7868d9fb425d045b28efa4662&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFE7Q23%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfxkcuFwWzjULPI8zAcCZZIhp%2BMfoHhAJoRv0ZP2aHAAiEAx%2BIjH5AfsMryFJCAm1ODrcMEYTagxGKD%2Bx7zJm1MX1Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDN1fpDYv5hZOVTckqyrcA52m%2FcdcmClX1QcknCNbcNjrqNhLuK4kFM3Pf7QPcgT2SChMtksPANkQKAJB4ZUris7oQIICVHC%2Fliv0Uo%2BCAnit4UMEnnDIMYH623FbYqQ7Eg2V6GAKZuNvfv%2BDiIfQkLIrMIerKDqKV0o5S6GjVas8H77Rk38lIKp408v4Fd2nSBGRE9pswDom4dE0dHCSBQObTTQlEIKxsZ4njGTt01vqD9BmU669XE90m3892gZyZ0c2SnIzKxSVyVz2JWmgogzIvwErP2j8gnvWhP1fOPxNC8JZsHu9UGEb%2Bcb0LxxcL34L8fhWcA0SM%2BTDE0629Fhb4ilCVpGBXr0olyBMzqlsCcQQPcsXc8C6IyA6KUWX4GQqCwrQlh4JWQAuZ9NsrIYT%2BjO1SeLoaN0crxu4P26C30gcVezTWhVVuqoRumpX2IzLIO%2F2FIFkCuyhKuHKKpbUAxvEcsPTmQUxI5pgv0mmF59UkhS6wf6EkC44xtqPPKy4iL3Zf5YfxfMqEewcYnNcpABMNsy%2Fw2og0DOCjK%2Bvu1ocwPkLSwCQgcVLds3qGwI3lNniTFdvf6cU%2BTlFPTCKtnJMfWo8vM84Lk%2BqAN%2BO%2BWvW7BjYVyqUeS6CfQDhhPNNe7vnKIrCTR5VMKaH5L4GOqUBFkIofZu4gnkz05Cs8rh07%2B2KVgp5LMlv%2BO9ugK0H%2B5EhDJ2Rc9HY6WkmlwLww60WYDEtwrrStqqCXub1s87fTY5td9ezUeIgJYb2lfBN1s4D%2BUugDKLiwhdtF2N5rR3NkDqpUKUDkRXw5mosOnL80Atf3Hrzolk7ZlnSTB%2FCgIvkzVY2qjNhuCA%2BLaVB3l7XbfOIIJvuYPzehyZPMNDUV%2B89mBKt&X-Amz-Signature=bdd3f9f9c5ab36eaf355e412171f59372e063b54f98c51aecb61d62f1176289f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFE7Q23%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfxkcuFwWzjULPI8zAcCZZIhp%2BMfoHhAJoRv0ZP2aHAAiEAx%2BIjH5AfsMryFJCAm1ODrcMEYTagxGKD%2Bx7zJm1MX1Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDN1fpDYv5hZOVTckqyrcA52m%2FcdcmClX1QcknCNbcNjrqNhLuK4kFM3Pf7QPcgT2SChMtksPANkQKAJB4ZUris7oQIICVHC%2Fliv0Uo%2BCAnit4UMEnnDIMYH623FbYqQ7Eg2V6GAKZuNvfv%2BDiIfQkLIrMIerKDqKV0o5S6GjVas8H77Rk38lIKp408v4Fd2nSBGRE9pswDom4dE0dHCSBQObTTQlEIKxsZ4njGTt01vqD9BmU669XE90m3892gZyZ0c2SnIzKxSVyVz2JWmgogzIvwErP2j8gnvWhP1fOPxNC8JZsHu9UGEb%2Bcb0LxxcL34L8fhWcA0SM%2BTDE0629Fhb4ilCVpGBXr0olyBMzqlsCcQQPcsXc8C6IyA6KUWX4GQqCwrQlh4JWQAuZ9NsrIYT%2BjO1SeLoaN0crxu4P26C30gcVezTWhVVuqoRumpX2IzLIO%2F2FIFkCuyhKuHKKpbUAxvEcsPTmQUxI5pgv0mmF59UkhS6wf6EkC44xtqPPKy4iL3Zf5YfxfMqEewcYnNcpABMNsy%2Fw2og0DOCjK%2Bvu1ocwPkLSwCQgcVLds3qGwI3lNniTFdvf6cU%2BTlFPTCKtnJMfWo8vM84Lk%2BqAN%2BO%2BWvW7BjYVyqUeS6CfQDhhPNNe7vnKIrCTR5VMKaH5L4GOqUBFkIofZu4gnkz05Cs8rh07%2B2KVgp5LMlv%2BO9ugK0H%2B5EhDJ2Rc9HY6WkmlwLww60WYDEtwrrStqqCXub1s87fTY5td9ezUeIgJYb2lfBN1s4D%2BUugDKLiwhdtF2N5rR3NkDqpUKUDkRXw5mosOnL80Atf3Hrzolk7ZlnSTB%2FCgIvkzVY2qjNhuCA%2BLaVB3l7XbfOIIJvuYPzehyZPMNDUV%2B89mBKt&X-Amz-Signature=fe6b5109332a1cdfa0c91594a41dc28efff39825f5e5ac378fc3da83909b4f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFE7Q23%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfxkcuFwWzjULPI8zAcCZZIhp%2BMfoHhAJoRv0ZP2aHAAiEAx%2BIjH5AfsMryFJCAm1ODrcMEYTagxGKD%2Bx7zJm1MX1Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDN1fpDYv5hZOVTckqyrcA52m%2FcdcmClX1QcknCNbcNjrqNhLuK4kFM3Pf7QPcgT2SChMtksPANkQKAJB4ZUris7oQIICVHC%2Fliv0Uo%2BCAnit4UMEnnDIMYH623FbYqQ7Eg2V6GAKZuNvfv%2BDiIfQkLIrMIerKDqKV0o5S6GjVas8H77Rk38lIKp408v4Fd2nSBGRE9pswDom4dE0dHCSBQObTTQlEIKxsZ4njGTt01vqD9BmU669XE90m3892gZyZ0c2SnIzKxSVyVz2JWmgogzIvwErP2j8gnvWhP1fOPxNC8JZsHu9UGEb%2Bcb0LxxcL34L8fhWcA0SM%2BTDE0629Fhb4ilCVpGBXr0olyBMzqlsCcQQPcsXc8C6IyA6KUWX4GQqCwrQlh4JWQAuZ9NsrIYT%2BjO1SeLoaN0crxu4P26C30gcVezTWhVVuqoRumpX2IzLIO%2F2FIFkCuyhKuHKKpbUAxvEcsPTmQUxI5pgv0mmF59UkhS6wf6EkC44xtqPPKy4iL3Zf5YfxfMqEewcYnNcpABMNsy%2Fw2og0DOCjK%2Bvu1ocwPkLSwCQgcVLds3qGwI3lNniTFdvf6cU%2BTlFPTCKtnJMfWo8vM84Lk%2BqAN%2BO%2BWvW7BjYVyqUeS6CfQDhhPNNe7vnKIrCTR5VMKaH5L4GOqUBFkIofZu4gnkz05Cs8rh07%2B2KVgp5LMlv%2BO9ugK0H%2B5EhDJ2Rc9HY6WkmlwLww60WYDEtwrrStqqCXub1s87fTY5td9ezUeIgJYb2lfBN1s4D%2BUugDKLiwhdtF2N5rR3NkDqpUKUDkRXw5mosOnL80Atf3Hrzolk7ZlnSTB%2FCgIvkzVY2qjNhuCA%2BLaVB3l7XbfOIIJvuYPzehyZPMNDUV%2B89mBKt&X-Amz-Signature=8f23c17dab22362325f2efcc56203bf8b8c8a590bf3e549b9f63c33c1b78543d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFE7Q23%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfxkcuFwWzjULPI8zAcCZZIhp%2BMfoHhAJoRv0ZP2aHAAiEAx%2BIjH5AfsMryFJCAm1ODrcMEYTagxGKD%2Bx7zJm1MX1Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDN1fpDYv5hZOVTckqyrcA52m%2FcdcmClX1QcknCNbcNjrqNhLuK4kFM3Pf7QPcgT2SChMtksPANkQKAJB4ZUris7oQIICVHC%2Fliv0Uo%2BCAnit4UMEnnDIMYH623FbYqQ7Eg2V6GAKZuNvfv%2BDiIfQkLIrMIerKDqKV0o5S6GjVas8H77Rk38lIKp408v4Fd2nSBGRE9pswDom4dE0dHCSBQObTTQlEIKxsZ4njGTt01vqD9BmU669XE90m3892gZyZ0c2SnIzKxSVyVz2JWmgogzIvwErP2j8gnvWhP1fOPxNC8JZsHu9UGEb%2Bcb0LxxcL34L8fhWcA0SM%2BTDE0629Fhb4ilCVpGBXr0olyBMzqlsCcQQPcsXc8C6IyA6KUWX4GQqCwrQlh4JWQAuZ9NsrIYT%2BjO1SeLoaN0crxu4P26C30gcVezTWhVVuqoRumpX2IzLIO%2F2FIFkCuyhKuHKKpbUAxvEcsPTmQUxI5pgv0mmF59UkhS6wf6EkC44xtqPPKy4iL3Zf5YfxfMqEewcYnNcpABMNsy%2Fw2og0DOCjK%2Bvu1ocwPkLSwCQgcVLds3qGwI3lNniTFdvf6cU%2BTlFPTCKtnJMfWo8vM84Lk%2BqAN%2BO%2BWvW7BjYVyqUeS6CfQDhhPNNe7vnKIrCTR5VMKaH5L4GOqUBFkIofZu4gnkz05Cs8rh07%2B2KVgp5LMlv%2BO9ugK0H%2B5EhDJ2Rc9HY6WkmlwLww60WYDEtwrrStqqCXub1s87fTY5td9ezUeIgJYb2lfBN1s4D%2BUugDKLiwhdtF2N5rR3NkDqpUKUDkRXw5mosOnL80Atf3Hrzolk7ZlnSTB%2FCgIvkzVY2qjNhuCA%2BLaVB3l7XbfOIIJvuYPzehyZPMNDUV%2B89mBKt&X-Amz-Signature=30a9e7a793ead8b571edbf1221d36735560313aef5e93a0635fb77070d7ec044&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFE7Q23%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfxkcuFwWzjULPI8zAcCZZIhp%2BMfoHhAJoRv0ZP2aHAAiEAx%2BIjH5AfsMryFJCAm1ODrcMEYTagxGKD%2Bx7zJm1MX1Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDN1fpDYv5hZOVTckqyrcA52m%2FcdcmClX1QcknCNbcNjrqNhLuK4kFM3Pf7QPcgT2SChMtksPANkQKAJB4ZUris7oQIICVHC%2Fliv0Uo%2BCAnit4UMEnnDIMYH623FbYqQ7Eg2V6GAKZuNvfv%2BDiIfQkLIrMIerKDqKV0o5S6GjVas8H77Rk38lIKp408v4Fd2nSBGRE9pswDom4dE0dHCSBQObTTQlEIKxsZ4njGTt01vqD9BmU669XE90m3892gZyZ0c2SnIzKxSVyVz2JWmgogzIvwErP2j8gnvWhP1fOPxNC8JZsHu9UGEb%2Bcb0LxxcL34L8fhWcA0SM%2BTDE0629Fhb4ilCVpGBXr0olyBMzqlsCcQQPcsXc8C6IyA6KUWX4GQqCwrQlh4JWQAuZ9NsrIYT%2BjO1SeLoaN0crxu4P26C30gcVezTWhVVuqoRumpX2IzLIO%2F2FIFkCuyhKuHKKpbUAxvEcsPTmQUxI5pgv0mmF59UkhS6wf6EkC44xtqPPKy4iL3Zf5YfxfMqEewcYnNcpABMNsy%2Fw2og0DOCjK%2Bvu1ocwPkLSwCQgcVLds3qGwI3lNniTFdvf6cU%2BTlFPTCKtnJMfWo8vM84Lk%2BqAN%2BO%2BWvW7BjYVyqUeS6CfQDhhPNNe7vnKIrCTR5VMKaH5L4GOqUBFkIofZu4gnkz05Cs8rh07%2B2KVgp5LMlv%2BO9ugK0H%2B5EhDJ2Rc9HY6WkmlwLww60WYDEtwrrStqqCXub1s87fTY5td9ezUeIgJYb2lfBN1s4D%2BUugDKLiwhdtF2N5rR3NkDqpUKUDkRXw5mosOnL80Atf3Hrzolk7ZlnSTB%2FCgIvkzVY2qjNhuCA%2BLaVB3l7XbfOIIJvuYPzehyZPMNDUV%2B89mBKt&X-Amz-Signature=0238e650e40c9086a5f57a092129668a3d642f9a42b36ab1cafae178b7e191d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
