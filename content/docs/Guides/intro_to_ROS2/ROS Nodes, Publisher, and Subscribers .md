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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMF4CDI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDywAoU8anCHhSrzmxH08dGn7v95dyezuK82D4U8di9wIhAJRlFALsaXgjjjPQWewN%2B3nY5LqzFqpSOcYxg4n8PDrMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5PvNmNAoKwHKJmHUq3AN7Qh74I8ZSaB%2BzU9bBQB7klUOIMESeAomIQSp3hz5o8bmK9OAC6lIX53pVart1nZJBnAvQMPBCmx8XiXU9R4P%2FV6UnXaxBMtLkIcyBBKORtLmyhR1cWjO0pjoDjxl55ZoDwNBFGRSaKMuBOjNP55DbN1j6hG9nekrVyyB0UKFzIlFiPWVEWzRo72We%2BVX13QfzznJZqI%2FRT9dEmBWN1OdlU6oc2uQs1s6oe1onvAfbGsv9T3zMLrwm8VBqD1T7KKKUXG6IZTV3ECHTEa1z%2BQJnhhziC%2FrYvhLyTcQjZ4lQ3Vs0B4Vi%2B0FSkQKWFTWr5AQd%2BBN1f43c5Lh7fNE0zQQdvT5vHH7eiv3hrJIFyE4dY37PfIjsiyflYvbc3flCKe3s0ISwu9deNFH0cXqWL2pSx4yhCjV8%2FhvDMPFeyB9NGv%2BaKrQwtEnsHeY2SweDjcY%2FgCFN7YAdN%2Bi%2BZXMLDhj%2BYMEsqMWGoMrfgKSvdhgflzVwboVyp66eUVWt9%2BAsYuoD0%2FgVtzVXIBQIrjTldCTevNvxHhbvySIUWZ8HdpzDCkWqZkFtWZrctT0WjxW5r%2FaTbpgHSQyS2vCpkrCgwWfQw1LZiPgJ%2BSDoCZGNc3oQpxcfYu%2B18GPkjAKUqTD8kM%2FCBjqkAUi377ZDpxZaxBYQye66HOgZ3IJzdtpV4%2F9voTAuEhFF6Up%2BW9UyovSCQziSNf7C0SdQFf1U4KYPLGNndMdeM%2BjBqVLS92G4OFame2GIFenVZ8jE0DAPBovxld8hk8STkOWGcujlEvLDnlCQxfC8SoJIkgStiDt%2FEFI5ewH2wWZFsdYGat483OncvdyqSfE8zHNPXFaFl0JhWLzOoKT3G%2Ba%2B4uKJ&X-Amz-Signature=f92f8f5e6ffd89f05adf5ad6479f5f3a4dfb31f025d5e6118f88652f814a0384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMF4CDI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDywAoU8anCHhSrzmxH08dGn7v95dyezuK82D4U8di9wIhAJRlFALsaXgjjjPQWewN%2B3nY5LqzFqpSOcYxg4n8PDrMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5PvNmNAoKwHKJmHUq3AN7Qh74I8ZSaB%2BzU9bBQB7klUOIMESeAomIQSp3hz5o8bmK9OAC6lIX53pVart1nZJBnAvQMPBCmx8XiXU9R4P%2FV6UnXaxBMtLkIcyBBKORtLmyhR1cWjO0pjoDjxl55ZoDwNBFGRSaKMuBOjNP55DbN1j6hG9nekrVyyB0UKFzIlFiPWVEWzRo72We%2BVX13QfzznJZqI%2FRT9dEmBWN1OdlU6oc2uQs1s6oe1onvAfbGsv9T3zMLrwm8VBqD1T7KKKUXG6IZTV3ECHTEa1z%2BQJnhhziC%2FrYvhLyTcQjZ4lQ3Vs0B4Vi%2B0FSkQKWFTWr5AQd%2BBN1f43c5Lh7fNE0zQQdvT5vHH7eiv3hrJIFyE4dY37PfIjsiyflYvbc3flCKe3s0ISwu9deNFH0cXqWL2pSx4yhCjV8%2FhvDMPFeyB9NGv%2BaKrQwtEnsHeY2SweDjcY%2FgCFN7YAdN%2Bi%2BZXMLDhj%2BYMEsqMWGoMrfgKSvdhgflzVwboVyp66eUVWt9%2BAsYuoD0%2FgVtzVXIBQIrjTldCTevNvxHhbvySIUWZ8HdpzDCkWqZkFtWZrctT0WjxW5r%2FaTbpgHSQyS2vCpkrCgwWfQw1LZiPgJ%2BSDoCZGNc3oQpxcfYu%2B18GPkjAKUqTD8kM%2FCBjqkAUi377ZDpxZaxBYQye66HOgZ3IJzdtpV4%2F9voTAuEhFF6Up%2BW9UyovSCQziSNf7C0SdQFf1U4KYPLGNndMdeM%2BjBqVLS92G4OFame2GIFenVZ8jE0DAPBovxld8hk8STkOWGcujlEvLDnlCQxfC8SoJIkgStiDt%2FEFI5ewH2wWZFsdYGat483OncvdyqSfE8zHNPXFaFl0JhWLzOoKT3G%2Ba%2B4uKJ&X-Amz-Signature=726f443ae3283d5ac167f55d8e6c9b2dae5bfe466e8699a69eb2786ba746eebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMF4CDI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDywAoU8anCHhSrzmxH08dGn7v95dyezuK82D4U8di9wIhAJRlFALsaXgjjjPQWewN%2B3nY5LqzFqpSOcYxg4n8PDrMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5PvNmNAoKwHKJmHUq3AN7Qh74I8ZSaB%2BzU9bBQB7klUOIMESeAomIQSp3hz5o8bmK9OAC6lIX53pVart1nZJBnAvQMPBCmx8XiXU9R4P%2FV6UnXaxBMtLkIcyBBKORtLmyhR1cWjO0pjoDjxl55ZoDwNBFGRSaKMuBOjNP55DbN1j6hG9nekrVyyB0UKFzIlFiPWVEWzRo72We%2BVX13QfzznJZqI%2FRT9dEmBWN1OdlU6oc2uQs1s6oe1onvAfbGsv9T3zMLrwm8VBqD1T7KKKUXG6IZTV3ECHTEa1z%2BQJnhhziC%2FrYvhLyTcQjZ4lQ3Vs0B4Vi%2B0FSkQKWFTWr5AQd%2BBN1f43c5Lh7fNE0zQQdvT5vHH7eiv3hrJIFyE4dY37PfIjsiyflYvbc3flCKe3s0ISwu9deNFH0cXqWL2pSx4yhCjV8%2FhvDMPFeyB9NGv%2BaKrQwtEnsHeY2SweDjcY%2FgCFN7YAdN%2Bi%2BZXMLDhj%2BYMEsqMWGoMrfgKSvdhgflzVwboVyp66eUVWt9%2BAsYuoD0%2FgVtzVXIBQIrjTldCTevNvxHhbvySIUWZ8HdpzDCkWqZkFtWZrctT0WjxW5r%2FaTbpgHSQyS2vCpkrCgwWfQw1LZiPgJ%2BSDoCZGNc3oQpxcfYu%2B18GPkjAKUqTD8kM%2FCBjqkAUi377ZDpxZaxBYQye66HOgZ3IJzdtpV4%2F9voTAuEhFF6Up%2BW9UyovSCQziSNf7C0SdQFf1U4KYPLGNndMdeM%2BjBqVLS92G4OFame2GIFenVZ8jE0DAPBovxld8hk8STkOWGcujlEvLDnlCQxfC8SoJIkgStiDt%2FEFI5ewH2wWZFsdYGat483OncvdyqSfE8zHNPXFaFl0JhWLzOoKT3G%2Ba%2B4uKJ&X-Amz-Signature=12fb506d1796afde9646c1118aa2f088af8b23c9eb245247061ee7ef8ffb52a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMF4CDI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDywAoU8anCHhSrzmxH08dGn7v95dyezuK82D4U8di9wIhAJRlFALsaXgjjjPQWewN%2B3nY5LqzFqpSOcYxg4n8PDrMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5PvNmNAoKwHKJmHUq3AN7Qh74I8ZSaB%2BzU9bBQB7klUOIMESeAomIQSp3hz5o8bmK9OAC6lIX53pVart1nZJBnAvQMPBCmx8XiXU9R4P%2FV6UnXaxBMtLkIcyBBKORtLmyhR1cWjO0pjoDjxl55ZoDwNBFGRSaKMuBOjNP55DbN1j6hG9nekrVyyB0UKFzIlFiPWVEWzRo72We%2BVX13QfzznJZqI%2FRT9dEmBWN1OdlU6oc2uQs1s6oe1onvAfbGsv9T3zMLrwm8VBqD1T7KKKUXG6IZTV3ECHTEa1z%2BQJnhhziC%2FrYvhLyTcQjZ4lQ3Vs0B4Vi%2B0FSkQKWFTWr5AQd%2BBN1f43c5Lh7fNE0zQQdvT5vHH7eiv3hrJIFyE4dY37PfIjsiyflYvbc3flCKe3s0ISwu9deNFH0cXqWL2pSx4yhCjV8%2FhvDMPFeyB9NGv%2BaKrQwtEnsHeY2SweDjcY%2FgCFN7YAdN%2Bi%2BZXMLDhj%2BYMEsqMWGoMrfgKSvdhgflzVwboVyp66eUVWt9%2BAsYuoD0%2FgVtzVXIBQIrjTldCTevNvxHhbvySIUWZ8HdpzDCkWqZkFtWZrctT0WjxW5r%2FaTbpgHSQyS2vCpkrCgwWfQw1LZiPgJ%2BSDoCZGNc3oQpxcfYu%2B18GPkjAKUqTD8kM%2FCBjqkAUi377ZDpxZaxBYQye66HOgZ3IJzdtpV4%2F9voTAuEhFF6Up%2BW9UyovSCQziSNf7C0SdQFf1U4KYPLGNndMdeM%2BjBqVLS92G4OFame2GIFenVZ8jE0DAPBovxld8hk8STkOWGcujlEvLDnlCQxfC8SoJIkgStiDt%2FEFI5ewH2wWZFsdYGat483OncvdyqSfE8zHNPXFaFl0JhWLzOoKT3G%2Ba%2B4uKJ&X-Amz-Signature=ffa9e1910411c7901371229a5742ae54dc795383148e905ee7bc305f0c06a33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMF4CDI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDywAoU8anCHhSrzmxH08dGn7v95dyezuK82D4U8di9wIhAJRlFALsaXgjjjPQWewN%2B3nY5LqzFqpSOcYxg4n8PDrMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5PvNmNAoKwHKJmHUq3AN7Qh74I8ZSaB%2BzU9bBQB7klUOIMESeAomIQSp3hz5o8bmK9OAC6lIX53pVart1nZJBnAvQMPBCmx8XiXU9R4P%2FV6UnXaxBMtLkIcyBBKORtLmyhR1cWjO0pjoDjxl55ZoDwNBFGRSaKMuBOjNP55DbN1j6hG9nekrVyyB0UKFzIlFiPWVEWzRo72We%2BVX13QfzznJZqI%2FRT9dEmBWN1OdlU6oc2uQs1s6oe1onvAfbGsv9T3zMLrwm8VBqD1T7KKKUXG6IZTV3ECHTEa1z%2BQJnhhziC%2FrYvhLyTcQjZ4lQ3Vs0B4Vi%2B0FSkQKWFTWr5AQd%2BBN1f43c5Lh7fNE0zQQdvT5vHH7eiv3hrJIFyE4dY37PfIjsiyflYvbc3flCKe3s0ISwu9deNFH0cXqWL2pSx4yhCjV8%2FhvDMPFeyB9NGv%2BaKrQwtEnsHeY2SweDjcY%2FgCFN7YAdN%2Bi%2BZXMLDhj%2BYMEsqMWGoMrfgKSvdhgflzVwboVyp66eUVWt9%2BAsYuoD0%2FgVtzVXIBQIrjTldCTevNvxHhbvySIUWZ8HdpzDCkWqZkFtWZrctT0WjxW5r%2FaTbpgHSQyS2vCpkrCgwWfQw1LZiPgJ%2BSDoCZGNc3oQpxcfYu%2B18GPkjAKUqTD8kM%2FCBjqkAUi377ZDpxZaxBYQye66HOgZ3IJzdtpV4%2F9voTAuEhFF6Up%2BW9UyovSCQziSNf7C0SdQFf1U4KYPLGNndMdeM%2BjBqVLS92G4OFame2GIFenVZ8jE0DAPBovxld8hk8STkOWGcujlEvLDnlCQxfC8SoJIkgStiDt%2FEFI5ewH2wWZFsdYGat483OncvdyqSfE8zHNPXFaFl0JhWLzOoKT3G%2Ba%2B4uKJ&X-Amz-Signature=5e50cbfe5f6b906f900e0b6951a398b860ff2b28f2e22c173001ee47669b4ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMF4CDI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDywAoU8anCHhSrzmxH08dGn7v95dyezuK82D4U8di9wIhAJRlFALsaXgjjjPQWewN%2B3nY5LqzFqpSOcYxg4n8PDrMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5PvNmNAoKwHKJmHUq3AN7Qh74I8ZSaB%2BzU9bBQB7klUOIMESeAomIQSp3hz5o8bmK9OAC6lIX53pVart1nZJBnAvQMPBCmx8XiXU9R4P%2FV6UnXaxBMtLkIcyBBKORtLmyhR1cWjO0pjoDjxl55ZoDwNBFGRSaKMuBOjNP55DbN1j6hG9nekrVyyB0UKFzIlFiPWVEWzRo72We%2BVX13QfzznJZqI%2FRT9dEmBWN1OdlU6oc2uQs1s6oe1onvAfbGsv9T3zMLrwm8VBqD1T7KKKUXG6IZTV3ECHTEa1z%2BQJnhhziC%2FrYvhLyTcQjZ4lQ3Vs0B4Vi%2B0FSkQKWFTWr5AQd%2BBN1f43c5Lh7fNE0zQQdvT5vHH7eiv3hrJIFyE4dY37PfIjsiyflYvbc3flCKe3s0ISwu9deNFH0cXqWL2pSx4yhCjV8%2FhvDMPFeyB9NGv%2BaKrQwtEnsHeY2SweDjcY%2FgCFN7YAdN%2Bi%2BZXMLDhj%2BYMEsqMWGoMrfgKSvdhgflzVwboVyp66eUVWt9%2BAsYuoD0%2FgVtzVXIBQIrjTldCTevNvxHhbvySIUWZ8HdpzDCkWqZkFtWZrctT0WjxW5r%2FaTbpgHSQyS2vCpkrCgwWfQw1LZiPgJ%2BSDoCZGNc3oQpxcfYu%2B18GPkjAKUqTD8kM%2FCBjqkAUi377ZDpxZaxBYQye66HOgZ3IJzdtpV4%2F9voTAuEhFF6Up%2BW9UyovSCQziSNf7C0SdQFf1U4KYPLGNndMdeM%2BjBqVLS92G4OFame2GIFenVZ8jE0DAPBovxld8hk8STkOWGcujlEvLDnlCQxfC8SoJIkgStiDt%2FEFI5ewH2wWZFsdYGat483OncvdyqSfE8zHNPXFaFl0JhWLzOoKT3G%2Ba%2B4uKJ&X-Amz-Signature=fa85e1970ad3936ab1feb244171315dbc5d962a07c1954b2c56d97b91cada84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMF4CDI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDywAoU8anCHhSrzmxH08dGn7v95dyezuK82D4U8di9wIhAJRlFALsaXgjjjPQWewN%2B3nY5LqzFqpSOcYxg4n8PDrMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5PvNmNAoKwHKJmHUq3AN7Qh74I8ZSaB%2BzU9bBQB7klUOIMESeAomIQSp3hz5o8bmK9OAC6lIX53pVart1nZJBnAvQMPBCmx8XiXU9R4P%2FV6UnXaxBMtLkIcyBBKORtLmyhR1cWjO0pjoDjxl55ZoDwNBFGRSaKMuBOjNP55DbN1j6hG9nekrVyyB0UKFzIlFiPWVEWzRo72We%2BVX13QfzznJZqI%2FRT9dEmBWN1OdlU6oc2uQs1s6oe1onvAfbGsv9T3zMLrwm8VBqD1T7KKKUXG6IZTV3ECHTEa1z%2BQJnhhziC%2FrYvhLyTcQjZ4lQ3Vs0B4Vi%2B0FSkQKWFTWr5AQd%2BBN1f43c5Lh7fNE0zQQdvT5vHH7eiv3hrJIFyE4dY37PfIjsiyflYvbc3flCKe3s0ISwu9deNFH0cXqWL2pSx4yhCjV8%2FhvDMPFeyB9NGv%2BaKrQwtEnsHeY2SweDjcY%2FgCFN7YAdN%2Bi%2BZXMLDhj%2BYMEsqMWGoMrfgKSvdhgflzVwboVyp66eUVWt9%2BAsYuoD0%2FgVtzVXIBQIrjTldCTevNvxHhbvySIUWZ8HdpzDCkWqZkFtWZrctT0WjxW5r%2FaTbpgHSQyS2vCpkrCgwWfQw1LZiPgJ%2BSDoCZGNc3oQpxcfYu%2B18GPkjAKUqTD8kM%2FCBjqkAUi377ZDpxZaxBYQye66HOgZ3IJzdtpV4%2F9voTAuEhFF6Up%2BW9UyovSCQziSNf7C0SdQFf1U4KYPLGNndMdeM%2BjBqVLS92G4OFame2GIFenVZ8jE0DAPBovxld8hk8STkOWGcujlEvLDnlCQxfC8SoJIkgStiDt%2FEFI5ewH2wWZFsdYGat483OncvdyqSfE8zHNPXFaFl0JhWLzOoKT3G%2Ba%2B4uKJ&X-Amz-Signature=9e8b401afc7c39044ffbe8211a7bfa684766731eaee81ce4b75fe14783380e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMF4CDI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDywAoU8anCHhSrzmxH08dGn7v95dyezuK82D4U8di9wIhAJRlFALsaXgjjjPQWewN%2B3nY5LqzFqpSOcYxg4n8PDrMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5PvNmNAoKwHKJmHUq3AN7Qh74I8ZSaB%2BzU9bBQB7klUOIMESeAomIQSp3hz5o8bmK9OAC6lIX53pVart1nZJBnAvQMPBCmx8XiXU9R4P%2FV6UnXaxBMtLkIcyBBKORtLmyhR1cWjO0pjoDjxl55ZoDwNBFGRSaKMuBOjNP55DbN1j6hG9nekrVyyB0UKFzIlFiPWVEWzRo72We%2BVX13QfzznJZqI%2FRT9dEmBWN1OdlU6oc2uQs1s6oe1onvAfbGsv9T3zMLrwm8VBqD1T7KKKUXG6IZTV3ECHTEa1z%2BQJnhhziC%2FrYvhLyTcQjZ4lQ3Vs0B4Vi%2B0FSkQKWFTWr5AQd%2BBN1f43c5Lh7fNE0zQQdvT5vHH7eiv3hrJIFyE4dY37PfIjsiyflYvbc3flCKe3s0ISwu9deNFH0cXqWL2pSx4yhCjV8%2FhvDMPFeyB9NGv%2BaKrQwtEnsHeY2SweDjcY%2FgCFN7YAdN%2Bi%2BZXMLDhj%2BYMEsqMWGoMrfgKSvdhgflzVwboVyp66eUVWt9%2BAsYuoD0%2FgVtzVXIBQIrjTldCTevNvxHhbvySIUWZ8HdpzDCkWqZkFtWZrctT0WjxW5r%2FaTbpgHSQyS2vCpkrCgwWfQw1LZiPgJ%2BSDoCZGNc3oQpxcfYu%2B18GPkjAKUqTD8kM%2FCBjqkAUi377ZDpxZaxBYQye66HOgZ3IJzdtpV4%2F9voTAuEhFF6Up%2BW9UyovSCQziSNf7C0SdQFf1U4KYPLGNndMdeM%2BjBqVLS92G4OFame2GIFenVZ8jE0DAPBovxld8hk8STkOWGcujlEvLDnlCQxfC8SoJIkgStiDt%2FEFI5ewH2wWZFsdYGat483OncvdyqSfE8zHNPXFaFl0JhWLzOoKT3G%2Ba%2B4uKJ&X-Amz-Signature=fabae749dbc50838816fac823bc6b21d859afa20fc32b82a36654db4bacb2c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
