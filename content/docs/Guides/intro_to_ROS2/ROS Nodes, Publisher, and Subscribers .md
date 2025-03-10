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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNVN5BQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDT9z%2Btdg%2BmAv3y9XNP2TmXQ9Ve3l%2B%2FmUdT76OEqff0WQIgPBx4LJgMn5Edpb4CD9Istrsn0%2Fp%2Ba33Qhhry0pNiGlAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK845vnA5MDtD1ESSrcAwXSQp2vbijkljGZfjsnVjHVSJ8fIQrMpm68npEy9v4OZO8m6Po1fMnZvy4yby%2FNW8pOERH67EZX9hNPLPiao6KZCaG1zYZ%2BegBVVCJLERcvQY2QYLJ0jiFsp8UowT9%2BGnY%2FKWiPdMM0B1g8rC613VRv%2FIZ8u3UBJMKi4QAYE%2F0jkVU0xIV8sdJhia3IeQAiIdg4fIyx6Auh%2FFVKR7xVUURg8netqCQ6gZw4v0peKYlu3Bjz6cFYvoXU70e55wQxDcHsXoO3PZlUsXwe%2FY4hyNhzH6akSjO7E8GPGIg9pbqt22YO8rb2TytxSxEpZJNAEGdI6t0sDRfj1J39Q0lbuP5ZLSnfGZKHwe9Why2NwocU%2BuArNOw9CmDWzFJN%2Fp%2BqyDtfyu63tMvdQ9gX90jyWtaydKt7uXMPwnfz2IYO1KmjQ9Pm7wl5aJX7jZxZEzdbqygEf6ULF1aLL5zaXSJzzvsvyAfdW7HwuRitXfBc%2FL53%2FGHC3kqfwuCU37GP%2FcEsIBReediULxTStxuhAMvCU0IPFo3B3tie%2B4GDC90S%2FN7FZK%2FQhIu2XCujKfHGEk0higQwsneYJ%2FTNGvWnnbJcOfwMAAC2AU6CbguKygVr%2FEHsXPbhiSfKn4r3%2FEPKMPzru74GOqUBhhX8NQ1NWPpJfabVPmWQLXaFZQCUNESlzg97S2KZgfq1TIP5WojOPVXpNhLELxt8vbECdn%2FpScaOt20oeTTDmx3y26Z9VP%2BbrCu6EA%2FZkN0hmtHX5fokWp0SZ0%2BYuJJ%2BS7zS%2BqSFL9szkKKqQfmskEeXj0i66wDHqyT97jf0YGmaDC1EQmlz4Zp4gf8DceqmPVSNtofD5cnNmYxrOIuRbor0lm2h&X-Amz-Signature=dc2d11bb146c755c69339e96867d22db442ee38df2860fc66a2e04024cda3ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNVN5BQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDT9z%2Btdg%2BmAv3y9XNP2TmXQ9Ve3l%2B%2FmUdT76OEqff0WQIgPBx4LJgMn5Edpb4CD9Istrsn0%2Fp%2Ba33Qhhry0pNiGlAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK845vnA5MDtD1ESSrcAwXSQp2vbijkljGZfjsnVjHVSJ8fIQrMpm68npEy9v4OZO8m6Po1fMnZvy4yby%2FNW8pOERH67EZX9hNPLPiao6KZCaG1zYZ%2BegBVVCJLERcvQY2QYLJ0jiFsp8UowT9%2BGnY%2FKWiPdMM0B1g8rC613VRv%2FIZ8u3UBJMKi4QAYE%2F0jkVU0xIV8sdJhia3IeQAiIdg4fIyx6Auh%2FFVKR7xVUURg8netqCQ6gZw4v0peKYlu3Bjz6cFYvoXU70e55wQxDcHsXoO3PZlUsXwe%2FY4hyNhzH6akSjO7E8GPGIg9pbqt22YO8rb2TytxSxEpZJNAEGdI6t0sDRfj1J39Q0lbuP5ZLSnfGZKHwe9Why2NwocU%2BuArNOw9CmDWzFJN%2Fp%2BqyDtfyu63tMvdQ9gX90jyWtaydKt7uXMPwnfz2IYO1KmjQ9Pm7wl5aJX7jZxZEzdbqygEf6ULF1aLL5zaXSJzzvsvyAfdW7HwuRitXfBc%2FL53%2FGHC3kqfwuCU37GP%2FcEsIBReediULxTStxuhAMvCU0IPFo3B3tie%2B4GDC90S%2FN7FZK%2FQhIu2XCujKfHGEk0higQwsneYJ%2FTNGvWnnbJcOfwMAAC2AU6CbguKygVr%2FEHsXPbhiSfKn4r3%2FEPKMPzru74GOqUBhhX8NQ1NWPpJfabVPmWQLXaFZQCUNESlzg97S2KZgfq1TIP5WojOPVXpNhLELxt8vbECdn%2FpScaOt20oeTTDmx3y26Z9VP%2BbrCu6EA%2FZkN0hmtHX5fokWp0SZ0%2BYuJJ%2BS7zS%2BqSFL9szkKKqQfmskEeXj0i66wDHqyT97jf0YGmaDC1EQmlz4Zp4gf8DceqmPVSNtofD5cnNmYxrOIuRbor0lm2h&X-Amz-Signature=24300ce21a552a8afdcee17340a9def3b03a990ac08021048574b650b3aed962&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNVN5BQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDT9z%2Btdg%2BmAv3y9XNP2TmXQ9Ve3l%2B%2FmUdT76OEqff0WQIgPBx4LJgMn5Edpb4CD9Istrsn0%2Fp%2Ba33Qhhry0pNiGlAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK845vnA5MDtD1ESSrcAwXSQp2vbijkljGZfjsnVjHVSJ8fIQrMpm68npEy9v4OZO8m6Po1fMnZvy4yby%2FNW8pOERH67EZX9hNPLPiao6KZCaG1zYZ%2BegBVVCJLERcvQY2QYLJ0jiFsp8UowT9%2BGnY%2FKWiPdMM0B1g8rC613VRv%2FIZ8u3UBJMKi4QAYE%2F0jkVU0xIV8sdJhia3IeQAiIdg4fIyx6Auh%2FFVKR7xVUURg8netqCQ6gZw4v0peKYlu3Bjz6cFYvoXU70e55wQxDcHsXoO3PZlUsXwe%2FY4hyNhzH6akSjO7E8GPGIg9pbqt22YO8rb2TytxSxEpZJNAEGdI6t0sDRfj1J39Q0lbuP5ZLSnfGZKHwe9Why2NwocU%2BuArNOw9CmDWzFJN%2Fp%2BqyDtfyu63tMvdQ9gX90jyWtaydKt7uXMPwnfz2IYO1KmjQ9Pm7wl5aJX7jZxZEzdbqygEf6ULF1aLL5zaXSJzzvsvyAfdW7HwuRitXfBc%2FL53%2FGHC3kqfwuCU37GP%2FcEsIBReediULxTStxuhAMvCU0IPFo3B3tie%2B4GDC90S%2FN7FZK%2FQhIu2XCujKfHGEk0higQwsneYJ%2FTNGvWnnbJcOfwMAAC2AU6CbguKygVr%2FEHsXPbhiSfKn4r3%2FEPKMPzru74GOqUBhhX8NQ1NWPpJfabVPmWQLXaFZQCUNESlzg97S2KZgfq1TIP5WojOPVXpNhLELxt8vbECdn%2FpScaOt20oeTTDmx3y26Z9VP%2BbrCu6EA%2FZkN0hmtHX5fokWp0SZ0%2BYuJJ%2BS7zS%2BqSFL9szkKKqQfmskEeXj0i66wDHqyT97jf0YGmaDC1EQmlz4Zp4gf8DceqmPVSNtofD5cnNmYxrOIuRbor0lm2h&X-Amz-Signature=d7ea2f111bbbc70904149596b85257f433a0de198f225d0eb9035652a1e5002d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNVN5BQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDT9z%2Btdg%2BmAv3y9XNP2TmXQ9Ve3l%2B%2FmUdT76OEqff0WQIgPBx4LJgMn5Edpb4CD9Istrsn0%2Fp%2Ba33Qhhry0pNiGlAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK845vnA5MDtD1ESSrcAwXSQp2vbijkljGZfjsnVjHVSJ8fIQrMpm68npEy9v4OZO8m6Po1fMnZvy4yby%2FNW8pOERH67EZX9hNPLPiao6KZCaG1zYZ%2BegBVVCJLERcvQY2QYLJ0jiFsp8UowT9%2BGnY%2FKWiPdMM0B1g8rC613VRv%2FIZ8u3UBJMKi4QAYE%2F0jkVU0xIV8sdJhia3IeQAiIdg4fIyx6Auh%2FFVKR7xVUURg8netqCQ6gZw4v0peKYlu3Bjz6cFYvoXU70e55wQxDcHsXoO3PZlUsXwe%2FY4hyNhzH6akSjO7E8GPGIg9pbqt22YO8rb2TytxSxEpZJNAEGdI6t0sDRfj1J39Q0lbuP5ZLSnfGZKHwe9Why2NwocU%2BuArNOw9CmDWzFJN%2Fp%2BqyDtfyu63tMvdQ9gX90jyWtaydKt7uXMPwnfz2IYO1KmjQ9Pm7wl5aJX7jZxZEzdbqygEf6ULF1aLL5zaXSJzzvsvyAfdW7HwuRitXfBc%2FL53%2FGHC3kqfwuCU37GP%2FcEsIBReediULxTStxuhAMvCU0IPFo3B3tie%2B4GDC90S%2FN7FZK%2FQhIu2XCujKfHGEk0higQwsneYJ%2FTNGvWnnbJcOfwMAAC2AU6CbguKygVr%2FEHsXPbhiSfKn4r3%2FEPKMPzru74GOqUBhhX8NQ1NWPpJfabVPmWQLXaFZQCUNESlzg97S2KZgfq1TIP5WojOPVXpNhLELxt8vbECdn%2FpScaOt20oeTTDmx3y26Z9VP%2BbrCu6EA%2FZkN0hmtHX5fokWp0SZ0%2BYuJJ%2BS7zS%2BqSFL9szkKKqQfmskEeXj0i66wDHqyT97jf0YGmaDC1EQmlz4Zp4gf8DceqmPVSNtofD5cnNmYxrOIuRbor0lm2h&X-Amz-Signature=cde551ff2a667cbac6554cdd62f67c877325a8a6dc44150e32691ec5d028a3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNVN5BQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDT9z%2Btdg%2BmAv3y9XNP2TmXQ9Ve3l%2B%2FmUdT76OEqff0WQIgPBx4LJgMn5Edpb4CD9Istrsn0%2Fp%2Ba33Qhhry0pNiGlAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK845vnA5MDtD1ESSrcAwXSQp2vbijkljGZfjsnVjHVSJ8fIQrMpm68npEy9v4OZO8m6Po1fMnZvy4yby%2FNW8pOERH67EZX9hNPLPiao6KZCaG1zYZ%2BegBVVCJLERcvQY2QYLJ0jiFsp8UowT9%2BGnY%2FKWiPdMM0B1g8rC613VRv%2FIZ8u3UBJMKi4QAYE%2F0jkVU0xIV8sdJhia3IeQAiIdg4fIyx6Auh%2FFVKR7xVUURg8netqCQ6gZw4v0peKYlu3Bjz6cFYvoXU70e55wQxDcHsXoO3PZlUsXwe%2FY4hyNhzH6akSjO7E8GPGIg9pbqt22YO8rb2TytxSxEpZJNAEGdI6t0sDRfj1J39Q0lbuP5ZLSnfGZKHwe9Why2NwocU%2BuArNOw9CmDWzFJN%2Fp%2BqyDtfyu63tMvdQ9gX90jyWtaydKt7uXMPwnfz2IYO1KmjQ9Pm7wl5aJX7jZxZEzdbqygEf6ULF1aLL5zaXSJzzvsvyAfdW7HwuRitXfBc%2FL53%2FGHC3kqfwuCU37GP%2FcEsIBReediULxTStxuhAMvCU0IPFo3B3tie%2B4GDC90S%2FN7FZK%2FQhIu2XCujKfHGEk0higQwsneYJ%2FTNGvWnnbJcOfwMAAC2AU6CbguKygVr%2FEHsXPbhiSfKn4r3%2FEPKMPzru74GOqUBhhX8NQ1NWPpJfabVPmWQLXaFZQCUNESlzg97S2KZgfq1TIP5WojOPVXpNhLELxt8vbECdn%2FpScaOt20oeTTDmx3y26Z9VP%2BbrCu6EA%2FZkN0hmtHX5fokWp0SZ0%2BYuJJ%2BS7zS%2BqSFL9szkKKqQfmskEeXj0i66wDHqyT97jf0YGmaDC1EQmlz4Zp4gf8DceqmPVSNtofD5cnNmYxrOIuRbor0lm2h&X-Amz-Signature=b7990d9634bc19ec2b2ba037f611e191ba0da2afc1b8ae4167463823d69d23eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNVN5BQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDT9z%2Btdg%2BmAv3y9XNP2TmXQ9Ve3l%2B%2FmUdT76OEqff0WQIgPBx4LJgMn5Edpb4CD9Istrsn0%2Fp%2Ba33Qhhry0pNiGlAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK845vnA5MDtD1ESSrcAwXSQp2vbijkljGZfjsnVjHVSJ8fIQrMpm68npEy9v4OZO8m6Po1fMnZvy4yby%2FNW8pOERH67EZX9hNPLPiao6KZCaG1zYZ%2BegBVVCJLERcvQY2QYLJ0jiFsp8UowT9%2BGnY%2FKWiPdMM0B1g8rC613VRv%2FIZ8u3UBJMKi4QAYE%2F0jkVU0xIV8sdJhia3IeQAiIdg4fIyx6Auh%2FFVKR7xVUURg8netqCQ6gZw4v0peKYlu3Bjz6cFYvoXU70e55wQxDcHsXoO3PZlUsXwe%2FY4hyNhzH6akSjO7E8GPGIg9pbqt22YO8rb2TytxSxEpZJNAEGdI6t0sDRfj1J39Q0lbuP5ZLSnfGZKHwe9Why2NwocU%2BuArNOw9CmDWzFJN%2Fp%2BqyDtfyu63tMvdQ9gX90jyWtaydKt7uXMPwnfz2IYO1KmjQ9Pm7wl5aJX7jZxZEzdbqygEf6ULF1aLL5zaXSJzzvsvyAfdW7HwuRitXfBc%2FL53%2FGHC3kqfwuCU37GP%2FcEsIBReediULxTStxuhAMvCU0IPFo3B3tie%2B4GDC90S%2FN7FZK%2FQhIu2XCujKfHGEk0higQwsneYJ%2FTNGvWnnbJcOfwMAAC2AU6CbguKygVr%2FEHsXPbhiSfKn4r3%2FEPKMPzru74GOqUBhhX8NQ1NWPpJfabVPmWQLXaFZQCUNESlzg97S2KZgfq1TIP5WojOPVXpNhLELxt8vbECdn%2FpScaOt20oeTTDmx3y26Z9VP%2BbrCu6EA%2FZkN0hmtHX5fokWp0SZ0%2BYuJJ%2BS7zS%2BqSFL9szkKKqQfmskEeXj0i66wDHqyT97jf0YGmaDC1EQmlz4Zp4gf8DceqmPVSNtofD5cnNmYxrOIuRbor0lm2h&X-Amz-Signature=110b8f84b62c2d67e36701c14b7ce948c55642f13b80e1908c64368ccbadc002&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNVN5BQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDT9z%2Btdg%2BmAv3y9XNP2TmXQ9Ve3l%2B%2FmUdT76OEqff0WQIgPBx4LJgMn5Edpb4CD9Istrsn0%2Fp%2Ba33Qhhry0pNiGlAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK845vnA5MDtD1ESSrcAwXSQp2vbijkljGZfjsnVjHVSJ8fIQrMpm68npEy9v4OZO8m6Po1fMnZvy4yby%2FNW8pOERH67EZX9hNPLPiao6KZCaG1zYZ%2BegBVVCJLERcvQY2QYLJ0jiFsp8UowT9%2BGnY%2FKWiPdMM0B1g8rC613VRv%2FIZ8u3UBJMKi4QAYE%2F0jkVU0xIV8sdJhia3IeQAiIdg4fIyx6Auh%2FFVKR7xVUURg8netqCQ6gZw4v0peKYlu3Bjz6cFYvoXU70e55wQxDcHsXoO3PZlUsXwe%2FY4hyNhzH6akSjO7E8GPGIg9pbqt22YO8rb2TytxSxEpZJNAEGdI6t0sDRfj1J39Q0lbuP5ZLSnfGZKHwe9Why2NwocU%2BuArNOw9CmDWzFJN%2Fp%2BqyDtfyu63tMvdQ9gX90jyWtaydKt7uXMPwnfz2IYO1KmjQ9Pm7wl5aJX7jZxZEzdbqygEf6ULF1aLL5zaXSJzzvsvyAfdW7HwuRitXfBc%2FL53%2FGHC3kqfwuCU37GP%2FcEsIBReediULxTStxuhAMvCU0IPFo3B3tie%2B4GDC90S%2FN7FZK%2FQhIu2XCujKfHGEk0higQwsneYJ%2FTNGvWnnbJcOfwMAAC2AU6CbguKygVr%2FEHsXPbhiSfKn4r3%2FEPKMPzru74GOqUBhhX8NQ1NWPpJfabVPmWQLXaFZQCUNESlzg97S2KZgfq1TIP5WojOPVXpNhLELxt8vbECdn%2FpScaOt20oeTTDmx3y26Z9VP%2BbrCu6EA%2FZkN0hmtHX5fokWp0SZ0%2BYuJJ%2BS7zS%2BqSFL9szkKKqQfmskEeXj0i66wDHqyT97jf0YGmaDC1EQmlz4Zp4gf8DceqmPVSNtofD5cnNmYxrOIuRbor0lm2h&X-Amz-Signature=679dcb8b903bd102e9ec56b940cde4d63705dfe8ca7456a897fc0d2be5f12b75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNVN5BQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDT9z%2Btdg%2BmAv3y9XNP2TmXQ9Ve3l%2B%2FmUdT76OEqff0WQIgPBx4LJgMn5Edpb4CD9Istrsn0%2Fp%2Ba33Qhhry0pNiGlAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK845vnA5MDtD1ESSrcAwXSQp2vbijkljGZfjsnVjHVSJ8fIQrMpm68npEy9v4OZO8m6Po1fMnZvy4yby%2FNW8pOERH67EZX9hNPLPiao6KZCaG1zYZ%2BegBVVCJLERcvQY2QYLJ0jiFsp8UowT9%2BGnY%2FKWiPdMM0B1g8rC613VRv%2FIZ8u3UBJMKi4QAYE%2F0jkVU0xIV8sdJhia3IeQAiIdg4fIyx6Auh%2FFVKR7xVUURg8netqCQ6gZw4v0peKYlu3Bjz6cFYvoXU70e55wQxDcHsXoO3PZlUsXwe%2FY4hyNhzH6akSjO7E8GPGIg9pbqt22YO8rb2TytxSxEpZJNAEGdI6t0sDRfj1J39Q0lbuP5ZLSnfGZKHwe9Why2NwocU%2BuArNOw9CmDWzFJN%2Fp%2BqyDtfyu63tMvdQ9gX90jyWtaydKt7uXMPwnfz2IYO1KmjQ9Pm7wl5aJX7jZxZEzdbqygEf6ULF1aLL5zaXSJzzvsvyAfdW7HwuRitXfBc%2FL53%2FGHC3kqfwuCU37GP%2FcEsIBReediULxTStxuhAMvCU0IPFo3B3tie%2B4GDC90S%2FN7FZK%2FQhIu2XCujKfHGEk0higQwsneYJ%2FTNGvWnnbJcOfwMAAC2AU6CbguKygVr%2FEHsXPbhiSfKn4r3%2FEPKMPzru74GOqUBhhX8NQ1NWPpJfabVPmWQLXaFZQCUNESlzg97S2KZgfq1TIP5WojOPVXpNhLELxt8vbECdn%2FpScaOt20oeTTDmx3y26Z9VP%2BbrCu6EA%2FZkN0hmtHX5fokWp0SZ0%2BYuJJ%2BS7zS%2BqSFL9szkKKqQfmskEeXj0i66wDHqyT97jf0YGmaDC1EQmlz4Zp4gf8DceqmPVSNtofD5cnNmYxrOIuRbor0lm2h&X-Amz-Signature=491bdc662240caf10672a89361be64f76d000cf89ba77b1ada5bedefddb5a565&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
