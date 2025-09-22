---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHAZEZ73%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT%2BPWI6RY1E4LaLEWxTvPo%2FK1LM8tBS8ZGyI0QyMJwPAiBsHzqz9%2Fi1heAhby2ZAUytoHZYivu0qsshajbmnEFatyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMY5DsmIZFfhVi9a3xKtwDn2JYL0WKKwIAIqO1aW7caCol%2Ff2UBd5530x5xgwuANFUAhbBhIDoZ1tzi7CqsN9rLKxCSHQr15CbI3WUIpwlFQ4s0xdCzI3n1BgYA4B5iE1p3F7mJZwqa6Bs4FFYmh%2FHyC9q7fZ0LDCas2P%2Fi%2Fixq%2BgNsP1cNpFWSDpSkV7VfXgUEwk2fLjgKddEny%2FERnxAVjbbE1CKFyzAn%2BQu4HKRu7CtnaOB5qxPHpORie3Eqb4pvwiwgmsxrTqDDuBqSKEMbvKp%2FxTAj6dR4pO1mc2US90rzK4bk4rO8pyGUXwfWpswg1F2Ua%2BftsC2gnTm45JM5DxJvQwXl744ZREoyxKRaiK0MgXjFsWqxZubNnrep%2BApVx%2BKApjy%2Bs2xjXCrLywPEK9hGYcp9WEnJAsICA2fRSZfp9q7ZlPpMwPS11k7EbQ8EItlvd5RnGbZb2YGz4twlDtSOs9Mkh97offo7sCjU%2FQWqTfvXT3Pj7PrhunuSKTc6a5NQAHhnDv25psPOY3nNJOoGO8o3nLCfWNbktv0NPXnObwigt%2FSU5Qw0FhZhiZRSGEc4YNQJhHJP7Q222iKMW4kNJZM1EfQ3wZp7zpBh6EnriQUemXgsxtbz5F7UmOYa5iufygjTsv9D%2BUw%2BcTCxgY6pgGYF2sA35BDyBtfkwd0rSrfrn7pZG3ptoK6fmTYVZUnsOa9A2eqyx%2Bp3rDmvC8Z%2F%2FqqCDiqwBpq1k%2Frvreh%2B92HaEOkCh4Ic19Q3k1T38PLiLI5nN%2FmOPRpDz4Ovqu4OFl3LSjwwivniWDYMLNjad17%2B3haEkjjvR5pFlsfNvCGNboj5g%2BCbLLUncWeOtYL3SCmq3PKBra2Y6BuU1uQDVKPY4aa%2BAti&X-Amz-Signature=b4751d141d964371855bc7cfec1c832b45e558eea2741d10a1126361a44b670b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHAZEZ73%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT%2BPWI6RY1E4LaLEWxTvPo%2FK1LM8tBS8ZGyI0QyMJwPAiBsHzqz9%2Fi1heAhby2ZAUytoHZYivu0qsshajbmnEFatyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMY5DsmIZFfhVi9a3xKtwDn2JYL0WKKwIAIqO1aW7caCol%2Ff2UBd5530x5xgwuANFUAhbBhIDoZ1tzi7CqsN9rLKxCSHQr15CbI3WUIpwlFQ4s0xdCzI3n1BgYA4B5iE1p3F7mJZwqa6Bs4FFYmh%2FHyC9q7fZ0LDCas2P%2Fi%2Fixq%2BgNsP1cNpFWSDpSkV7VfXgUEwk2fLjgKddEny%2FERnxAVjbbE1CKFyzAn%2BQu4HKRu7CtnaOB5qxPHpORie3Eqb4pvwiwgmsxrTqDDuBqSKEMbvKp%2FxTAj6dR4pO1mc2US90rzK4bk4rO8pyGUXwfWpswg1F2Ua%2BftsC2gnTm45JM5DxJvQwXl744ZREoyxKRaiK0MgXjFsWqxZubNnrep%2BApVx%2BKApjy%2Bs2xjXCrLywPEK9hGYcp9WEnJAsICA2fRSZfp9q7ZlPpMwPS11k7EbQ8EItlvd5RnGbZb2YGz4twlDtSOs9Mkh97offo7sCjU%2FQWqTfvXT3Pj7PrhunuSKTc6a5NQAHhnDv25psPOY3nNJOoGO8o3nLCfWNbktv0NPXnObwigt%2FSU5Qw0FhZhiZRSGEc4YNQJhHJP7Q222iKMW4kNJZM1EfQ3wZp7zpBh6EnriQUemXgsxtbz5F7UmOYa5iufygjTsv9D%2BUw%2BcTCxgY6pgGYF2sA35BDyBtfkwd0rSrfrn7pZG3ptoK6fmTYVZUnsOa9A2eqyx%2Bp3rDmvC8Z%2F%2FqqCDiqwBpq1k%2Frvreh%2B92HaEOkCh4Ic19Q3k1T38PLiLI5nN%2FmOPRpDz4Ovqu4OFl3LSjwwivniWDYMLNjad17%2B3haEkjjvR5pFlsfNvCGNboj5g%2BCbLLUncWeOtYL3SCmq3PKBra2Y6BuU1uQDVKPY4aa%2BAti&X-Amz-Signature=b8ed05169d570b94276c97b9afa13766deb90137dac8d1ed7eed662d068250bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHAZEZ73%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT%2BPWI6RY1E4LaLEWxTvPo%2FK1LM8tBS8ZGyI0QyMJwPAiBsHzqz9%2Fi1heAhby2ZAUytoHZYivu0qsshajbmnEFatyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMY5DsmIZFfhVi9a3xKtwDn2JYL0WKKwIAIqO1aW7caCol%2Ff2UBd5530x5xgwuANFUAhbBhIDoZ1tzi7CqsN9rLKxCSHQr15CbI3WUIpwlFQ4s0xdCzI3n1BgYA4B5iE1p3F7mJZwqa6Bs4FFYmh%2FHyC9q7fZ0LDCas2P%2Fi%2Fixq%2BgNsP1cNpFWSDpSkV7VfXgUEwk2fLjgKddEny%2FERnxAVjbbE1CKFyzAn%2BQu4HKRu7CtnaOB5qxPHpORie3Eqb4pvwiwgmsxrTqDDuBqSKEMbvKp%2FxTAj6dR4pO1mc2US90rzK4bk4rO8pyGUXwfWpswg1F2Ua%2BftsC2gnTm45JM5DxJvQwXl744ZREoyxKRaiK0MgXjFsWqxZubNnrep%2BApVx%2BKApjy%2Bs2xjXCrLywPEK9hGYcp9WEnJAsICA2fRSZfp9q7ZlPpMwPS11k7EbQ8EItlvd5RnGbZb2YGz4twlDtSOs9Mkh97offo7sCjU%2FQWqTfvXT3Pj7PrhunuSKTc6a5NQAHhnDv25psPOY3nNJOoGO8o3nLCfWNbktv0NPXnObwigt%2FSU5Qw0FhZhiZRSGEc4YNQJhHJP7Q222iKMW4kNJZM1EfQ3wZp7zpBh6EnriQUemXgsxtbz5F7UmOYa5iufygjTsv9D%2BUw%2BcTCxgY6pgGYF2sA35BDyBtfkwd0rSrfrn7pZG3ptoK6fmTYVZUnsOa9A2eqyx%2Bp3rDmvC8Z%2F%2FqqCDiqwBpq1k%2Frvreh%2B92HaEOkCh4Ic19Q3k1T38PLiLI5nN%2FmOPRpDz4Ovqu4OFl3LSjwwivniWDYMLNjad17%2B3haEkjjvR5pFlsfNvCGNboj5g%2BCbLLUncWeOtYL3SCmq3PKBra2Y6BuU1uQDVKPY4aa%2BAti&X-Amz-Signature=cac5ed638c5e1b3192fdec7ea8721e219bcd4fce2f11b7507ce30d5f53b4e3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHAZEZ73%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT%2BPWI6RY1E4LaLEWxTvPo%2FK1LM8tBS8ZGyI0QyMJwPAiBsHzqz9%2Fi1heAhby2ZAUytoHZYivu0qsshajbmnEFatyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMY5DsmIZFfhVi9a3xKtwDn2JYL0WKKwIAIqO1aW7caCol%2Ff2UBd5530x5xgwuANFUAhbBhIDoZ1tzi7CqsN9rLKxCSHQr15CbI3WUIpwlFQ4s0xdCzI3n1BgYA4B5iE1p3F7mJZwqa6Bs4FFYmh%2FHyC9q7fZ0LDCas2P%2Fi%2Fixq%2BgNsP1cNpFWSDpSkV7VfXgUEwk2fLjgKddEny%2FERnxAVjbbE1CKFyzAn%2BQu4HKRu7CtnaOB5qxPHpORie3Eqb4pvwiwgmsxrTqDDuBqSKEMbvKp%2FxTAj6dR4pO1mc2US90rzK4bk4rO8pyGUXwfWpswg1F2Ua%2BftsC2gnTm45JM5DxJvQwXl744ZREoyxKRaiK0MgXjFsWqxZubNnrep%2BApVx%2BKApjy%2Bs2xjXCrLywPEK9hGYcp9WEnJAsICA2fRSZfp9q7ZlPpMwPS11k7EbQ8EItlvd5RnGbZb2YGz4twlDtSOs9Mkh97offo7sCjU%2FQWqTfvXT3Pj7PrhunuSKTc6a5NQAHhnDv25psPOY3nNJOoGO8o3nLCfWNbktv0NPXnObwigt%2FSU5Qw0FhZhiZRSGEc4YNQJhHJP7Q222iKMW4kNJZM1EfQ3wZp7zpBh6EnriQUemXgsxtbz5F7UmOYa5iufygjTsv9D%2BUw%2BcTCxgY6pgGYF2sA35BDyBtfkwd0rSrfrn7pZG3ptoK6fmTYVZUnsOa9A2eqyx%2Bp3rDmvC8Z%2F%2FqqCDiqwBpq1k%2Frvreh%2B92HaEOkCh4Ic19Q3k1T38PLiLI5nN%2FmOPRpDz4Ovqu4OFl3LSjwwivniWDYMLNjad17%2B3haEkjjvR5pFlsfNvCGNboj5g%2BCbLLUncWeOtYL3SCmq3PKBra2Y6BuU1uQDVKPY4aa%2BAti&X-Amz-Signature=fcafcfded09da0aa6bf0d95528b0361df879b50f618b5551098c7b5b891fc66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHAZEZ73%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT%2BPWI6RY1E4LaLEWxTvPo%2FK1LM8tBS8ZGyI0QyMJwPAiBsHzqz9%2Fi1heAhby2ZAUytoHZYivu0qsshajbmnEFatyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMY5DsmIZFfhVi9a3xKtwDn2JYL0WKKwIAIqO1aW7caCol%2Ff2UBd5530x5xgwuANFUAhbBhIDoZ1tzi7CqsN9rLKxCSHQr15CbI3WUIpwlFQ4s0xdCzI3n1BgYA4B5iE1p3F7mJZwqa6Bs4FFYmh%2FHyC9q7fZ0LDCas2P%2Fi%2Fixq%2BgNsP1cNpFWSDpSkV7VfXgUEwk2fLjgKddEny%2FERnxAVjbbE1CKFyzAn%2BQu4HKRu7CtnaOB5qxPHpORie3Eqb4pvwiwgmsxrTqDDuBqSKEMbvKp%2FxTAj6dR4pO1mc2US90rzK4bk4rO8pyGUXwfWpswg1F2Ua%2BftsC2gnTm45JM5DxJvQwXl744ZREoyxKRaiK0MgXjFsWqxZubNnrep%2BApVx%2BKApjy%2Bs2xjXCrLywPEK9hGYcp9WEnJAsICA2fRSZfp9q7ZlPpMwPS11k7EbQ8EItlvd5RnGbZb2YGz4twlDtSOs9Mkh97offo7sCjU%2FQWqTfvXT3Pj7PrhunuSKTc6a5NQAHhnDv25psPOY3nNJOoGO8o3nLCfWNbktv0NPXnObwigt%2FSU5Qw0FhZhiZRSGEc4YNQJhHJP7Q222iKMW4kNJZM1EfQ3wZp7zpBh6EnriQUemXgsxtbz5F7UmOYa5iufygjTsv9D%2BUw%2BcTCxgY6pgGYF2sA35BDyBtfkwd0rSrfrn7pZG3ptoK6fmTYVZUnsOa9A2eqyx%2Bp3rDmvC8Z%2F%2FqqCDiqwBpq1k%2Frvreh%2B92HaEOkCh4Ic19Q3k1T38PLiLI5nN%2FmOPRpDz4Ovqu4OFl3LSjwwivniWDYMLNjad17%2B3haEkjjvR5pFlsfNvCGNboj5g%2BCbLLUncWeOtYL3SCmq3PKBra2Y6BuU1uQDVKPY4aa%2BAti&X-Amz-Signature=b11c6eec52371122cb301e9037d4a22f32f77674a544cab45e2612e8e739e19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHAZEZ73%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT%2BPWI6RY1E4LaLEWxTvPo%2FK1LM8tBS8ZGyI0QyMJwPAiBsHzqz9%2Fi1heAhby2ZAUytoHZYivu0qsshajbmnEFatyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMY5DsmIZFfhVi9a3xKtwDn2JYL0WKKwIAIqO1aW7caCol%2Ff2UBd5530x5xgwuANFUAhbBhIDoZ1tzi7CqsN9rLKxCSHQr15CbI3WUIpwlFQ4s0xdCzI3n1BgYA4B5iE1p3F7mJZwqa6Bs4FFYmh%2FHyC9q7fZ0LDCas2P%2Fi%2Fixq%2BgNsP1cNpFWSDpSkV7VfXgUEwk2fLjgKddEny%2FERnxAVjbbE1CKFyzAn%2BQu4HKRu7CtnaOB5qxPHpORie3Eqb4pvwiwgmsxrTqDDuBqSKEMbvKp%2FxTAj6dR4pO1mc2US90rzK4bk4rO8pyGUXwfWpswg1F2Ua%2BftsC2gnTm45JM5DxJvQwXl744ZREoyxKRaiK0MgXjFsWqxZubNnrep%2BApVx%2BKApjy%2Bs2xjXCrLywPEK9hGYcp9WEnJAsICA2fRSZfp9q7ZlPpMwPS11k7EbQ8EItlvd5RnGbZb2YGz4twlDtSOs9Mkh97offo7sCjU%2FQWqTfvXT3Pj7PrhunuSKTc6a5NQAHhnDv25psPOY3nNJOoGO8o3nLCfWNbktv0NPXnObwigt%2FSU5Qw0FhZhiZRSGEc4YNQJhHJP7Q222iKMW4kNJZM1EfQ3wZp7zpBh6EnriQUemXgsxtbz5F7UmOYa5iufygjTsv9D%2BUw%2BcTCxgY6pgGYF2sA35BDyBtfkwd0rSrfrn7pZG3ptoK6fmTYVZUnsOa9A2eqyx%2Bp3rDmvC8Z%2F%2FqqCDiqwBpq1k%2Frvreh%2B92HaEOkCh4Ic19Q3k1T38PLiLI5nN%2FmOPRpDz4Ovqu4OFl3LSjwwivniWDYMLNjad17%2B3haEkjjvR5pFlsfNvCGNboj5g%2BCbLLUncWeOtYL3SCmq3PKBra2Y6BuU1uQDVKPY4aa%2BAti&X-Amz-Signature=d1773118889a55d0a1da76a2bea1f346a81b71d75c6b522e1723e293e7d34e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHAZEZ73%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT%2BPWI6RY1E4LaLEWxTvPo%2FK1LM8tBS8ZGyI0QyMJwPAiBsHzqz9%2Fi1heAhby2ZAUytoHZYivu0qsshajbmnEFatyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMY5DsmIZFfhVi9a3xKtwDn2JYL0WKKwIAIqO1aW7caCol%2Ff2UBd5530x5xgwuANFUAhbBhIDoZ1tzi7CqsN9rLKxCSHQr15CbI3WUIpwlFQ4s0xdCzI3n1BgYA4B5iE1p3F7mJZwqa6Bs4FFYmh%2FHyC9q7fZ0LDCas2P%2Fi%2Fixq%2BgNsP1cNpFWSDpSkV7VfXgUEwk2fLjgKddEny%2FERnxAVjbbE1CKFyzAn%2BQu4HKRu7CtnaOB5qxPHpORie3Eqb4pvwiwgmsxrTqDDuBqSKEMbvKp%2FxTAj6dR4pO1mc2US90rzK4bk4rO8pyGUXwfWpswg1F2Ua%2BftsC2gnTm45JM5DxJvQwXl744ZREoyxKRaiK0MgXjFsWqxZubNnrep%2BApVx%2BKApjy%2Bs2xjXCrLywPEK9hGYcp9WEnJAsICA2fRSZfp9q7ZlPpMwPS11k7EbQ8EItlvd5RnGbZb2YGz4twlDtSOs9Mkh97offo7sCjU%2FQWqTfvXT3Pj7PrhunuSKTc6a5NQAHhnDv25psPOY3nNJOoGO8o3nLCfWNbktv0NPXnObwigt%2FSU5Qw0FhZhiZRSGEc4YNQJhHJP7Q222iKMW4kNJZM1EfQ3wZp7zpBh6EnriQUemXgsxtbz5F7UmOYa5iufygjTsv9D%2BUw%2BcTCxgY6pgGYF2sA35BDyBtfkwd0rSrfrn7pZG3ptoK6fmTYVZUnsOa9A2eqyx%2Bp3rDmvC8Z%2F%2FqqCDiqwBpq1k%2Frvreh%2B92HaEOkCh4Ic19Q3k1T38PLiLI5nN%2FmOPRpDz4Ovqu4OFl3LSjwwivniWDYMLNjad17%2B3haEkjjvR5pFlsfNvCGNboj5g%2BCbLLUncWeOtYL3SCmq3PKBra2Y6BuU1uQDVKPY4aa%2BAti&X-Amz-Signature=ac944716215436961d975f395728171c4a62633297bb1279c8d507a83bf94c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHAZEZ73%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT%2BPWI6RY1E4LaLEWxTvPo%2FK1LM8tBS8ZGyI0QyMJwPAiBsHzqz9%2Fi1heAhby2ZAUytoHZYivu0qsshajbmnEFatyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMY5DsmIZFfhVi9a3xKtwDn2JYL0WKKwIAIqO1aW7caCol%2Ff2UBd5530x5xgwuANFUAhbBhIDoZ1tzi7CqsN9rLKxCSHQr15CbI3WUIpwlFQ4s0xdCzI3n1BgYA4B5iE1p3F7mJZwqa6Bs4FFYmh%2FHyC9q7fZ0LDCas2P%2Fi%2Fixq%2BgNsP1cNpFWSDpSkV7VfXgUEwk2fLjgKddEny%2FERnxAVjbbE1CKFyzAn%2BQu4HKRu7CtnaOB5qxPHpORie3Eqb4pvwiwgmsxrTqDDuBqSKEMbvKp%2FxTAj6dR4pO1mc2US90rzK4bk4rO8pyGUXwfWpswg1F2Ua%2BftsC2gnTm45JM5DxJvQwXl744ZREoyxKRaiK0MgXjFsWqxZubNnrep%2BApVx%2BKApjy%2Bs2xjXCrLywPEK9hGYcp9WEnJAsICA2fRSZfp9q7ZlPpMwPS11k7EbQ8EItlvd5RnGbZb2YGz4twlDtSOs9Mkh97offo7sCjU%2FQWqTfvXT3Pj7PrhunuSKTc6a5NQAHhnDv25psPOY3nNJOoGO8o3nLCfWNbktv0NPXnObwigt%2FSU5Qw0FhZhiZRSGEc4YNQJhHJP7Q222iKMW4kNJZM1EfQ3wZp7zpBh6EnriQUemXgsxtbz5F7UmOYa5iufygjTsv9D%2BUw%2BcTCxgY6pgGYF2sA35BDyBtfkwd0rSrfrn7pZG3ptoK6fmTYVZUnsOa9A2eqyx%2Bp3rDmvC8Z%2F%2FqqCDiqwBpq1k%2Frvreh%2B92HaEOkCh4Ic19Q3k1T38PLiLI5nN%2FmOPRpDz4Ovqu4OFl3LSjwwivniWDYMLNjad17%2B3haEkjjvR5pFlsfNvCGNboj5g%2BCbLLUncWeOtYL3SCmq3PKBra2Y6BuU1uQDVKPY4aa%2BAti&X-Amz-Signature=73838d14a2c5bd43f3c2e7e0d13d28c4affb0ced2b6ce9a323a07f5c1eca0bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
