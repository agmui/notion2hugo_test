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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OG4LI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHQTU0NGKEUHzyCdszJCeZ%2BX6YucWQiFLijugkU8Be1QIhAPq34Kp1E%2Ff%2BT1bF8CMPYJUTY46l1Kn4uvITDbnrpqkqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsultv5s0lISGt08wq3ANvkeqHkLiAlAnwUbinTRF6Jiou9%2Bk6ouNXeoK0aVkaEs7%2FgZGoy1QyPwjDOHcAAm6DVrjIG7i1wc0Ot1%2B4tGfdUMZ7nqhfopKB5xa7JYIXT2wx3uenofLHcL6stu%2Boqw7mEmw%2BqBnX9KdPdW5e9SapzwVDSRQ%2FKvtqslWyWRrhweO7rx5TmhtMC5NlRGdKlewSbWFkyY00KvDosWoWKhbqEzqES6XQpDNGP%2FEJGZ4bh1y2sNfWU39mmJTNOxDeRYlc5CNWhGu3rX6slzM3QSNMvK9NGeb4hzjgsFvwV59jI8Ny2qta%2BHQxCY2GaAWi4tgrolgbYn43UHSiA0Nk%2BCA1IUClSDrfknTNsrpqIm%2FTKYE3aKtXJJBLqUX0%2BkY4R3ln9EnBA2r9NUihZKOnUTOp8iM2g6oM3KQSy6OB5YJna%2FXEnfHLZpEna5pAC8wejT8%2B%2BGcMo%2BLqdy3gIsjo34Pj2XpSjULsP3dzocQb94lEB8jzBWAuDpnCRT8zZoeSoVqX1%2FnopEL7kCKTQ3NXKF0lFoeEqFD3XRthgKu1gA%2Fv0owwtD1d2827O8SHTekOvteSlTJqf8ljQcm%2FgEe60VPfrAApugE%2FknxdQhqg4g4BvMUd2tpVR21KM6pGZjDCiaDABjqkAbS1LvuUMyMPIqcqKywqWVZ0DRIZFcvy1H3YLqJrlx4QTzjgOMMhXZHsf65SxFLr6rld%2FvvIdlmUgZqDr0jNAgZnqua9kmJd7o433L8xIUGaRUlbVeBn%2BFdzJxUdiDvt4ExXH7Q7PtRKtTPMzM8FVtw5JQ4uXxA3j%2BWHzY6JdUfnT6b4Vvb4XOVgXDuQav%2FV5iusKqVIK6M%2FqHxoqSiX4Qbf9BVK&X-Amz-Signature=29d1ab69b83731f81aed5af1a0ca397351320ef95d78d1f5160bff36d4c00b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OG4LI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHQTU0NGKEUHzyCdszJCeZ%2BX6YucWQiFLijugkU8Be1QIhAPq34Kp1E%2Ff%2BT1bF8CMPYJUTY46l1Kn4uvITDbnrpqkqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsultv5s0lISGt08wq3ANvkeqHkLiAlAnwUbinTRF6Jiou9%2Bk6ouNXeoK0aVkaEs7%2FgZGoy1QyPwjDOHcAAm6DVrjIG7i1wc0Ot1%2B4tGfdUMZ7nqhfopKB5xa7JYIXT2wx3uenofLHcL6stu%2Boqw7mEmw%2BqBnX9KdPdW5e9SapzwVDSRQ%2FKvtqslWyWRrhweO7rx5TmhtMC5NlRGdKlewSbWFkyY00KvDosWoWKhbqEzqES6XQpDNGP%2FEJGZ4bh1y2sNfWU39mmJTNOxDeRYlc5CNWhGu3rX6slzM3QSNMvK9NGeb4hzjgsFvwV59jI8Ny2qta%2BHQxCY2GaAWi4tgrolgbYn43UHSiA0Nk%2BCA1IUClSDrfknTNsrpqIm%2FTKYE3aKtXJJBLqUX0%2BkY4R3ln9EnBA2r9NUihZKOnUTOp8iM2g6oM3KQSy6OB5YJna%2FXEnfHLZpEna5pAC8wejT8%2B%2BGcMo%2BLqdy3gIsjo34Pj2XpSjULsP3dzocQb94lEB8jzBWAuDpnCRT8zZoeSoVqX1%2FnopEL7kCKTQ3NXKF0lFoeEqFD3XRthgKu1gA%2Fv0owwtD1d2827O8SHTekOvteSlTJqf8ljQcm%2FgEe60VPfrAApugE%2FknxdQhqg4g4BvMUd2tpVR21KM6pGZjDCiaDABjqkAbS1LvuUMyMPIqcqKywqWVZ0DRIZFcvy1H3YLqJrlx4QTzjgOMMhXZHsf65SxFLr6rld%2FvvIdlmUgZqDr0jNAgZnqua9kmJd7o433L8xIUGaRUlbVeBn%2BFdzJxUdiDvt4ExXH7Q7PtRKtTPMzM8FVtw5JQ4uXxA3j%2BWHzY6JdUfnT6b4Vvb4XOVgXDuQav%2FV5iusKqVIK6M%2FqHxoqSiX4Qbf9BVK&X-Amz-Signature=2d1b04f5dfa23dc13d6579cffb85721fe9ff8480c7e43548f91aa980b21c395a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OG4LI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHQTU0NGKEUHzyCdszJCeZ%2BX6YucWQiFLijugkU8Be1QIhAPq34Kp1E%2Ff%2BT1bF8CMPYJUTY46l1Kn4uvITDbnrpqkqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsultv5s0lISGt08wq3ANvkeqHkLiAlAnwUbinTRF6Jiou9%2Bk6ouNXeoK0aVkaEs7%2FgZGoy1QyPwjDOHcAAm6DVrjIG7i1wc0Ot1%2B4tGfdUMZ7nqhfopKB5xa7JYIXT2wx3uenofLHcL6stu%2Boqw7mEmw%2BqBnX9KdPdW5e9SapzwVDSRQ%2FKvtqslWyWRrhweO7rx5TmhtMC5NlRGdKlewSbWFkyY00KvDosWoWKhbqEzqES6XQpDNGP%2FEJGZ4bh1y2sNfWU39mmJTNOxDeRYlc5CNWhGu3rX6slzM3QSNMvK9NGeb4hzjgsFvwV59jI8Ny2qta%2BHQxCY2GaAWi4tgrolgbYn43UHSiA0Nk%2BCA1IUClSDrfknTNsrpqIm%2FTKYE3aKtXJJBLqUX0%2BkY4R3ln9EnBA2r9NUihZKOnUTOp8iM2g6oM3KQSy6OB5YJna%2FXEnfHLZpEna5pAC8wejT8%2B%2BGcMo%2BLqdy3gIsjo34Pj2XpSjULsP3dzocQb94lEB8jzBWAuDpnCRT8zZoeSoVqX1%2FnopEL7kCKTQ3NXKF0lFoeEqFD3XRthgKu1gA%2Fv0owwtD1d2827O8SHTekOvteSlTJqf8ljQcm%2FgEe60VPfrAApugE%2FknxdQhqg4g4BvMUd2tpVR21KM6pGZjDCiaDABjqkAbS1LvuUMyMPIqcqKywqWVZ0DRIZFcvy1H3YLqJrlx4QTzjgOMMhXZHsf65SxFLr6rld%2FvvIdlmUgZqDr0jNAgZnqua9kmJd7o433L8xIUGaRUlbVeBn%2BFdzJxUdiDvt4ExXH7Q7PtRKtTPMzM8FVtw5JQ4uXxA3j%2BWHzY6JdUfnT6b4Vvb4XOVgXDuQav%2FV5iusKqVIK6M%2FqHxoqSiX4Qbf9BVK&X-Amz-Signature=b3c82ff74f235eb0ff93a14b1754dad6501a07f9e4cd7f730dfddd1781055428&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OG4LI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHQTU0NGKEUHzyCdszJCeZ%2BX6YucWQiFLijugkU8Be1QIhAPq34Kp1E%2Ff%2BT1bF8CMPYJUTY46l1Kn4uvITDbnrpqkqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsultv5s0lISGt08wq3ANvkeqHkLiAlAnwUbinTRF6Jiou9%2Bk6ouNXeoK0aVkaEs7%2FgZGoy1QyPwjDOHcAAm6DVrjIG7i1wc0Ot1%2B4tGfdUMZ7nqhfopKB5xa7JYIXT2wx3uenofLHcL6stu%2Boqw7mEmw%2BqBnX9KdPdW5e9SapzwVDSRQ%2FKvtqslWyWRrhweO7rx5TmhtMC5NlRGdKlewSbWFkyY00KvDosWoWKhbqEzqES6XQpDNGP%2FEJGZ4bh1y2sNfWU39mmJTNOxDeRYlc5CNWhGu3rX6slzM3QSNMvK9NGeb4hzjgsFvwV59jI8Ny2qta%2BHQxCY2GaAWi4tgrolgbYn43UHSiA0Nk%2BCA1IUClSDrfknTNsrpqIm%2FTKYE3aKtXJJBLqUX0%2BkY4R3ln9EnBA2r9NUihZKOnUTOp8iM2g6oM3KQSy6OB5YJna%2FXEnfHLZpEna5pAC8wejT8%2B%2BGcMo%2BLqdy3gIsjo34Pj2XpSjULsP3dzocQb94lEB8jzBWAuDpnCRT8zZoeSoVqX1%2FnopEL7kCKTQ3NXKF0lFoeEqFD3XRthgKu1gA%2Fv0owwtD1d2827O8SHTekOvteSlTJqf8ljQcm%2FgEe60VPfrAApugE%2FknxdQhqg4g4BvMUd2tpVR21KM6pGZjDCiaDABjqkAbS1LvuUMyMPIqcqKywqWVZ0DRIZFcvy1H3YLqJrlx4QTzjgOMMhXZHsf65SxFLr6rld%2FvvIdlmUgZqDr0jNAgZnqua9kmJd7o433L8xIUGaRUlbVeBn%2BFdzJxUdiDvt4ExXH7Q7PtRKtTPMzM8FVtw5JQ4uXxA3j%2BWHzY6JdUfnT6b4Vvb4XOVgXDuQav%2FV5iusKqVIK6M%2FqHxoqSiX4Qbf9BVK&X-Amz-Signature=8c54b82e3c81e3119390d795dcec682bd7a0e486fd23d529488f122b90543b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OG4LI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHQTU0NGKEUHzyCdszJCeZ%2BX6YucWQiFLijugkU8Be1QIhAPq34Kp1E%2Ff%2BT1bF8CMPYJUTY46l1Kn4uvITDbnrpqkqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsultv5s0lISGt08wq3ANvkeqHkLiAlAnwUbinTRF6Jiou9%2Bk6ouNXeoK0aVkaEs7%2FgZGoy1QyPwjDOHcAAm6DVrjIG7i1wc0Ot1%2B4tGfdUMZ7nqhfopKB5xa7JYIXT2wx3uenofLHcL6stu%2Boqw7mEmw%2BqBnX9KdPdW5e9SapzwVDSRQ%2FKvtqslWyWRrhweO7rx5TmhtMC5NlRGdKlewSbWFkyY00KvDosWoWKhbqEzqES6XQpDNGP%2FEJGZ4bh1y2sNfWU39mmJTNOxDeRYlc5CNWhGu3rX6slzM3QSNMvK9NGeb4hzjgsFvwV59jI8Ny2qta%2BHQxCY2GaAWi4tgrolgbYn43UHSiA0Nk%2BCA1IUClSDrfknTNsrpqIm%2FTKYE3aKtXJJBLqUX0%2BkY4R3ln9EnBA2r9NUihZKOnUTOp8iM2g6oM3KQSy6OB5YJna%2FXEnfHLZpEna5pAC8wejT8%2B%2BGcMo%2BLqdy3gIsjo34Pj2XpSjULsP3dzocQb94lEB8jzBWAuDpnCRT8zZoeSoVqX1%2FnopEL7kCKTQ3NXKF0lFoeEqFD3XRthgKu1gA%2Fv0owwtD1d2827O8SHTekOvteSlTJqf8ljQcm%2FgEe60VPfrAApugE%2FknxdQhqg4g4BvMUd2tpVR21KM6pGZjDCiaDABjqkAbS1LvuUMyMPIqcqKywqWVZ0DRIZFcvy1H3YLqJrlx4QTzjgOMMhXZHsf65SxFLr6rld%2FvvIdlmUgZqDr0jNAgZnqua9kmJd7o433L8xIUGaRUlbVeBn%2BFdzJxUdiDvt4ExXH7Q7PtRKtTPMzM8FVtw5JQ4uXxA3j%2BWHzY6JdUfnT6b4Vvb4XOVgXDuQav%2FV5iusKqVIK6M%2FqHxoqSiX4Qbf9BVK&X-Amz-Signature=ba4c141f63ea8f8e3d2003a33a3297b3c48db2bf4e735d3ef83378eec45d0851&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OG4LI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHQTU0NGKEUHzyCdszJCeZ%2BX6YucWQiFLijugkU8Be1QIhAPq34Kp1E%2Ff%2BT1bF8CMPYJUTY46l1Kn4uvITDbnrpqkqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsultv5s0lISGt08wq3ANvkeqHkLiAlAnwUbinTRF6Jiou9%2Bk6ouNXeoK0aVkaEs7%2FgZGoy1QyPwjDOHcAAm6DVrjIG7i1wc0Ot1%2B4tGfdUMZ7nqhfopKB5xa7JYIXT2wx3uenofLHcL6stu%2Boqw7mEmw%2BqBnX9KdPdW5e9SapzwVDSRQ%2FKvtqslWyWRrhweO7rx5TmhtMC5NlRGdKlewSbWFkyY00KvDosWoWKhbqEzqES6XQpDNGP%2FEJGZ4bh1y2sNfWU39mmJTNOxDeRYlc5CNWhGu3rX6slzM3QSNMvK9NGeb4hzjgsFvwV59jI8Ny2qta%2BHQxCY2GaAWi4tgrolgbYn43UHSiA0Nk%2BCA1IUClSDrfknTNsrpqIm%2FTKYE3aKtXJJBLqUX0%2BkY4R3ln9EnBA2r9NUihZKOnUTOp8iM2g6oM3KQSy6OB5YJna%2FXEnfHLZpEna5pAC8wejT8%2B%2BGcMo%2BLqdy3gIsjo34Pj2XpSjULsP3dzocQb94lEB8jzBWAuDpnCRT8zZoeSoVqX1%2FnopEL7kCKTQ3NXKF0lFoeEqFD3XRthgKu1gA%2Fv0owwtD1d2827O8SHTekOvteSlTJqf8ljQcm%2FgEe60VPfrAApugE%2FknxdQhqg4g4BvMUd2tpVR21KM6pGZjDCiaDABjqkAbS1LvuUMyMPIqcqKywqWVZ0DRIZFcvy1H3YLqJrlx4QTzjgOMMhXZHsf65SxFLr6rld%2FvvIdlmUgZqDr0jNAgZnqua9kmJd7o433L8xIUGaRUlbVeBn%2BFdzJxUdiDvt4ExXH7Q7PtRKtTPMzM8FVtw5JQ4uXxA3j%2BWHzY6JdUfnT6b4Vvb4XOVgXDuQav%2FV5iusKqVIK6M%2FqHxoqSiX4Qbf9BVK&X-Amz-Signature=1e6b2bef75ca023e646d12b4519da0682d5c05ee29081fc781c19f1993213728&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OG4LI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHQTU0NGKEUHzyCdszJCeZ%2BX6YucWQiFLijugkU8Be1QIhAPq34Kp1E%2Ff%2BT1bF8CMPYJUTY46l1Kn4uvITDbnrpqkqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsultv5s0lISGt08wq3ANvkeqHkLiAlAnwUbinTRF6Jiou9%2Bk6ouNXeoK0aVkaEs7%2FgZGoy1QyPwjDOHcAAm6DVrjIG7i1wc0Ot1%2B4tGfdUMZ7nqhfopKB5xa7JYIXT2wx3uenofLHcL6stu%2Boqw7mEmw%2BqBnX9KdPdW5e9SapzwVDSRQ%2FKvtqslWyWRrhweO7rx5TmhtMC5NlRGdKlewSbWFkyY00KvDosWoWKhbqEzqES6XQpDNGP%2FEJGZ4bh1y2sNfWU39mmJTNOxDeRYlc5CNWhGu3rX6slzM3QSNMvK9NGeb4hzjgsFvwV59jI8Ny2qta%2BHQxCY2GaAWi4tgrolgbYn43UHSiA0Nk%2BCA1IUClSDrfknTNsrpqIm%2FTKYE3aKtXJJBLqUX0%2BkY4R3ln9EnBA2r9NUihZKOnUTOp8iM2g6oM3KQSy6OB5YJna%2FXEnfHLZpEna5pAC8wejT8%2B%2BGcMo%2BLqdy3gIsjo34Pj2XpSjULsP3dzocQb94lEB8jzBWAuDpnCRT8zZoeSoVqX1%2FnopEL7kCKTQ3NXKF0lFoeEqFD3XRthgKu1gA%2Fv0owwtD1d2827O8SHTekOvteSlTJqf8ljQcm%2FgEe60VPfrAApugE%2FknxdQhqg4g4BvMUd2tpVR21KM6pGZjDCiaDABjqkAbS1LvuUMyMPIqcqKywqWVZ0DRIZFcvy1H3YLqJrlx4QTzjgOMMhXZHsf65SxFLr6rld%2FvvIdlmUgZqDr0jNAgZnqua9kmJd7o433L8xIUGaRUlbVeBn%2BFdzJxUdiDvt4ExXH7Q7PtRKtTPMzM8FVtw5JQ4uXxA3j%2BWHzY6JdUfnT6b4Vvb4XOVgXDuQav%2FV5iusKqVIK6M%2FqHxoqSiX4Qbf9BVK&X-Amz-Signature=3b295013905872613719efa80636f7658a1247eccf1a5e0e8c76660d9fb230b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OG4LI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHQTU0NGKEUHzyCdszJCeZ%2BX6YucWQiFLijugkU8Be1QIhAPq34Kp1E%2Ff%2BT1bF8CMPYJUTY46l1Kn4uvITDbnrpqkqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsultv5s0lISGt08wq3ANvkeqHkLiAlAnwUbinTRF6Jiou9%2Bk6ouNXeoK0aVkaEs7%2FgZGoy1QyPwjDOHcAAm6DVrjIG7i1wc0Ot1%2B4tGfdUMZ7nqhfopKB5xa7JYIXT2wx3uenofLHcL6stu%2Boqw7mEmw%2BqBnX9KdPdW5e9SapzwVDSRQ%2FKvtqslWyWRrhweO7rx5TmhtMC5NlRGdKlewSbWFkyY00KvDosWoWKhbqEzqES6XQpDNGP%2FEJGZ4bh1y2sNfWU39mmJTNOxDeRYlc5CNWhGu3rX6slzM3QSNMvK9NGeb4hzjgsFvwV59jI8Ny2qta%2BHQxCY2GaAWi4tgrolgbYn43UHSiA0Nk%2BCA1IUClSDrfknTNsrpqIm%2FTKYE3aKtXJJBLqUX0%2BkY4R3ln9EnBA2r9NUihZKOnUTOp8iM2g6oM3KQSy6OB5YJna%2FXEnfHLZpEna5pAC8wejT8%2B%2BGcMo%2BLqdy3gIsjo34Pj2XpSjULsP3dzocQb94lEB8jzBWAuDpnCRT8zZoeSoVqX1%2FnopEL7kCKTQ3NXKF0lFoeEqFD3XRthgKu1gA%2Fv0owwtD1d2827O8SHTekOvteSlTJqf8ljQcm%2FgEe60VPfrAApugE%2FknxdQhqg4g4BvMUd2tpVR21KM6pGZjDCiaDABjqkAbS1LvuUMyMPIqcqKywqWVZ0DRIZFcvy1H3YLqJrlx4QTzjgOMMhXZHsf65SxFLr6rld%2FvvIdlmUgZqDr0jNAgZnqua9kmJd7o433L8xIUGaRUlbVeBn%2BFdzJxUdiDvt4ExXH7Q7PtRKtTPMzM8FVtw5JQ4uXxA3j%2BWHzY6JdUfnT6b4Vvb4XOVgXDuQav%2FV5iusKqVIK6M%2FqHxoqSiX4Qbf9BVK&X-Amz-Signature=ab16a4a1b4274a064de2702da6b45f4b147168e3c1fe1695ca3338d6cefc15e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
