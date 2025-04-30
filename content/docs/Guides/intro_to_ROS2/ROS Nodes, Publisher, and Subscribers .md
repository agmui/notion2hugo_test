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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSIPPIS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDMH5zxgWcnjCRLdm9Aic24Hj3sowvOVkhlHzW7Ix9OfAIhALrhZXzEEpr9AEPafLatsIweB7o0zj5%2F535Rfgxp%2Fm6SKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW0o%2FRHmJXexJDSXYq3AO5dqkFrruHxi%2FM11vYmks%2BRwkymzsNTrszFqZWNxRyUPF4V2jmrO9RXqNjk2Xil9EcJ9KuC1t39yoR9wpgPI4ChAnAdUFl%2B3zmMw8Pyr6VFwASEFyQx1lSVC9YCA1U%2B63SlP2PqXc0J6uvb7hlSAUi8KLr5UTMqM1gDtHtIARyvEU6nIP9jAPicXwZOXngbyW1cnKGvJTOs7jGZhgETED6rlEMuUNLmcu96njq8VFerBKbN0SnQCzvogOSEgF13G%2BNyfB16xH9KIyjtWWSI%2BO6ZNqko1%2BQKGvckt6OEd07LVehZeKJDAUd3IS0wJlH5e%2FKaG2sJaHpGxJ8ZyUv1K1K1jdo%2Bt88UDfF0wYGPb8OcAJJYapqYqe2sA5hU8qLW5sYUPsaUvG1S0BG4Mc%2F%2BNgK%2BON2KLM3mtgdL0fBooJeEKVaFdSqGJ4bqDSR%2FDYrnBGHgeMbpcyTig97XJWdAHyJ498kxclUv8RgEP42ZL3GBEFV%2BkbmQZ%2B4Fpiayfnm4xzBO5%2Fq09vP5bDv9sO8Zn%2FI1wR%2F8SOTSJgafOijgGQVRMkjaqMUYp%2Bz2%2BVFLxJxP80oLZOq9bp7g0bFAjvUN%2F6Fu9NKnw1YP0Pdy%2BZBwVMrDzL2TTRpx%2BCezYEG1DCY3MbABjqkAe37nRxX%2FaAoAAhh%2F%2FeC6iNCZqpEfCOJ%2BdsLHzLNK6UnMd%2BH%2Fsq19XgVnIQzoXgaD50RbUxx8%2BuYBIvkPbUleFeMEwUEWvZJA1V0jk6G7yiF2YoaVn%2FRUPbbndFROrLV4jamyZ9RRfN6LgSrulHpmtEHDY4eFWjEgnzVSW46bJSq%2Fw6XcumhYwV13aVX%2FEh5jehf12joP%2B3aYw5suzsfAQk23wVk&X-Amz-Signature=62064053a2fc1d70d7a37659c9e8fe628e3073c7195f3e12796a28b553b6c707&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSIPPIS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDMH5zxgWcnjCRLdm9Aic24Hj3sowvOVkhlHzW7Ix9OfAIhALrhZXzEEpr9AEPafLatsIweB7o0zj5%2F535Rfgxp%2Fm6SKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW0o%2FRHmJXexJDSXYq3AO5dqkFrruHxi%2FM11vYmks%2BRwkymzsNTrszFqZWNxRyUPF4V2jmrO9RXqNjk2Xil9EcJ9KuC1t39yoR9wpgPI4ChAnAdUFl%2B3zmMw8Pyr6VFwASEFyQx1lSVC9YCA1U%2B63SlP2PqXc0J6uvb7hlSAUi8KLr5UTMqM1gDtHtIARyvEU6nIP9jAPicXwZOXngbyW1cnKGvJTOs7jGZhgETED6rlEMuUNLmcu96njq8VFerBKbN0SnQCzvogOSEgF13G%2BNyfB16xH9KIyjtWWSI%2BO6ZNqko1%2BQKGvckt6OEd07LVehZeKJDAUd3IS0wJlH5e%2FKaG2sJaHpGxJ8ZyUv1K1K1jdo%2Bt88UDfF0wYGPb8OcAJJYapqYqe2sA5hU8qLW5sYUPsaUvG1S0BG4Mc%2F%2BNgK%2BON2KLM3mtgdL0fBooJeEKVaFdSqGJ4bqDSR%2FDYrnBGHgeMbpcyTig97XJWdAHyJ498kxclUv8RgEP42ZL3GBEFV%2BkbmQZ%2B4Fpiayfnm4xzBO5%2Fq09vP5bDv9sO8Zn%2FI1wR%2F8SOTSJgafOijgGQVRMkjaqMUYp%2Bz2%2BVFLxJxP80oLZOq9bp7g0bFAjvUN%2F6Fu9NKnw1YP0Pdy%2BZBwVMrDzL2TTRpx%2BCezYEG1DCY3MbABjqkAe37nRxX%2FaAoAAhh%2F%2FeC6iNCZqpEfCOJ%2BdsLHzLNK6UnMd%2BH%2Fsq19XgVnIQzoXgaD50RbUxx8%2BuYBIvkPbUleFeMEwUEWvZJA1V0jk6G7yiF2YoaVn%2FRUPbbndFROrLV4jamyZ9RRfN6LgSrulHpmtEHDY4eFWjEgnzVSW46bJSq%2Fw6XcumhYwV13aVX%2FEh5jehf12joP%2B3aYw5suzsfAQk23wVk&X-Amz-Signature=ca0ccb9cffd0e7f23e9040afbfac9592c0feec777481fed9b8dcff4390b12c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSIPPIS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDMH5zxgWcnjCRLdm9Aic24Hj3sowvOVkhlHzW7Ix9OfAIhALrhZXzEEpr9AEPafLatsIweB7o0zj5%2F535Rfgxp%2Fm6SKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW0o%2FRHmJXexJDSXYq3AO5dqkFrruHxi%2FM11vYmks%2BRwkymzsNTrszFqZWNxRyUPF4V2jmrO9RXqNjk2Xil9EcJ9KuC1t39yoR9wpgPI4ChAnAdUFl%2B3zmMw8Pyr6VFwASEFyQx1lSVC9YCA1U%2B63SlP2PqXc0J6uvb7hlSAUi8KLr5UTMqM1gDtHtIARyvEU6nIP9jAPicXwZOXngbyW1cnKGvJTOs7jGZhgETED6rlEMuUNLmcu96njq8VFerBKbN0SnQCzvogOSEgF13G%2BNyfB16xH9KIyjtWWSI%2BO6ZNqko1%2BQKGvckt6OEd07LVehZeKJDAUd3IS0wJlH5e%2FKaG2sJaHpGxJ8ZyUv1K1K1jdo%2Bt88UDfF0wYGPb8OcAJJYapqYqe2sA5hU8qLW5sYUPsaUvG1S0BG4Mc%2F%2BNgK%2BON2KLM3mtgdL0fBooJeEKVaFdSqGJ4bqDSR%2FDYrnBGHgeMbpcyTig97XJWdAHyJ498kxclUv8RgEP42ZL3GBEFV%2BkbmQZ%2B4Fpiayfnm4xzBO5%2Fq09vP5bDv9sO8Zn%2FI1wR%2F8SOTSJgafOijgGQVRMkjaqMUYp%2Bz2%2BVFLxJxP80oLZOq9bp7g0bFAjvUN%2F6Fu9NKnw1YP0Pdy%2BZBwVMrDzL2TTRpx%2BCezYEG1DCY3MbABjqkAe37nRxX%2FaAoAAhh%2F%2FeC6iNCZqpEfCOJ%2BdsLHzLNK6UnMd%2BH%2Fsq19XgVnIQzoXgaD50RbUxx8%2BuYBIvkPbUleFeMEwUEWvZJA1V0jk6G7yiF2YoaVn%2FRUPbbndFROrLV4jamyZ9RRfN6LgSrulHpmtEHDY4eFWjEgnzVSW46bJSq%2Fw6XcumhYwV13aVX%2FEh5jehf12joP%2B3aYw5suzsfAQk23wVk&X-Amz-Signature=79312050e4ff1ef62dcf7fe6072cfd6083e34ee8d6d1d8ae3ad32cdd6dd4dd82&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSIPPIS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDMH5zxgWcnjCRLdm9Aic24Hj3sowvOVkhlHzW7Ix9OfAIhALrhZXzEEpr9AEPafLatsIweB7o0zj5%2F535Rfgxp%2Fm6SKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW0o%2FRHmJXexJDSXYq3AO5dqkFrruHxi%2FM11vYmks%2BRwkymzsNTrszFqZWNxRyUPF4V2jmrO9RXqNjk2Xil9EcJ9KuC1t39yoR9wpgPI4ChAnAdUFl%2B3zmMw8Pyr6VFwASEFyQx1lSVC9YCA1U%2B63SlP2PqXc0J6uvb7hlSAUi8KLr5UTMqM1gDtHtIARyvEU6nIP9jAPicXwZOXngbyW1cnKGvJTOs7jGZhgETED6rlEMuUNLmcu96njq8VFerBKbN0SnQCzvogOSEgF13G%2BNyfB16xH9KIyjtWWSI%2BO6ZNqko1%2BQKGvckt6OEd07LVehZeKJDAUd3IS0wJlH5e%2FKaG2sJaHpGxJ8ZyUv1K1K1jdo%2Bt88UDfF0wYGPb8OcAJJYapqYqe2sA5hU8qLW5sYUPsaUvG1S0BG4Mc%2F%2BNgK%2BON2KLM3mtgdL0fBooJeEKVaFdSqGJ4bqDSR%2FDYrnBGHgeMbpcyTig97XJWdAHyJ498kxclUv8RgEP42ZL3GBEFV%2BkbmQZ%2B4Fpiayfnm4xzBO5%2Fq09vP5bDv9sO8Zn%2FI1wR%2F8SOTSJgafOijgGQVRMkjaqMUYp%2Bz2%2BVFLxJxP80oLZOq9bp7g0bFAjvUN%2F6Fu9NKnw1YP0Pdy%2BZBwVMrDzL2TTRpx%2BCezYEG1DCY3MbABjqkAe37nRxX%2FaAoAAhh%2F%2FeC6iNCZqpEfCOJ%2BdsLHzLNK6UnMd%2BH%2Fsq19XgVnIQzoXgaD50RbUxx8%2BuYBIvkPbUleFeMEwUEWvZJA1V0jk6G7yiF2YoaVn%2FRUPbbndFROrLV4jamyZ9RRfN6LgSrulHpmtEHDY4eFWjEgnzVSW46bJSq%2Fw6XcumhYwV13aVX%2FEh5jehf12joP%2B3aYw5suzsfAQk23wVk&X-Amz-Signature=6c68f3156c5d986dfae33cc615ead234977acc5c30db0d3a965a61ff9d4098bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSIPPIS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDMH5zxgWcnjCRLdm9Aic24Hj3sowvOVkhlHzW7Ix9OfAIhALrhZXzEEpr9AEPafLatsIweB7o0zj5%2F535Rfgxp%2Fm6SKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW0o%2FRHmJXexJDSXYq3AO5dqkFrruHxi%2FM11vYmks%2BRwkymzsNTrszFqZWNxRyUPF4V2jmrO9RXqNjk2Xil9EcJ9KuC1t39yoR9wpgPI4ChAnAdUFl%2B3zmMw8Pyr6VFwASEFyQx1lSVC9YCA1U%2B63SlP2PqXc0J6uvb7hlSAUi8KLr5UTMqM1gDtHtIARyvEU6nIP9jAPicXwZOXngbyW1cnKGvJTOs7jGZhgETED6rlEMuUNLmcu96njq8VFerBKbN0SnQCzvogOSEgF13G%2BNyfB16xH9KIyjtWWSI%2BO6ZNqko1%2BQKGvckt6OEd07LVehZeKJDAUd3IS0wJlH5e%2FKaG2sJaHpGxJ8ZyUv1K1K1jdo%2Bt88UDfF0wYGPb8OcAJJYapqYqe2sA5hU8qLW5sYUPsaUvG1S0BG4Mc%2F%2BNgK%2BON2KLM3mtgdL0fBooJeEKVaFdSqGJ4bqDSR%2FDYrnBGHgeMbpcyTig97XJWdAHyJ498kxclUv8RgEP42ZL3GBEFV%2BkbmQZ%2B4Fpiayfnm4xzBO5%2Fq09vP5bDv9sO8Zn%2FI1wR%2F8SOTSJgafOijgGQVRMkjaqMUYp%2Bz2%2BVFLxJxP80oLZOq9bp7g0bFAjvUN%2F6Fu9NKnw1YP0Pdy%2BZBwVMrDzL2TTRpx%2BCezYEG1DCY3MbABjqkAe37nRxX%2FaAoAAhh%2F%2FeC6iNCZqpEfCOJ%2BdsLHzLNK6UnMd%2BH%2Fsq19XgVnIQzoXgaD50RbUxx8%2BuYBIvkPbUleFeMEwUEWvZJA1V0jk6G7yiF2YoaVn%2FRUPbbndFROrLV4jamyZ9RRfN6LgSrulHpmtEHDY4eFWjEgnzVSW46bJSq%2Fw6XcumhYwV13aVX%2FEh5jehf12joP%2B3aYw5suzsfAQk23wVk&X-Amz-Signature=365aca100cb7638cf106ceb732ccc55360cfdc76db93b18a4db10c1eca575b56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSIPPIS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDMH5zxgWcnjCRLdm9Aic24Hj3sowvOVkhlHzW7Ix9OfAIhALrhZXzEEpr9AEPafLatsIweB7o0zj5%2F535Rfgxp%2Fm6SKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW0o%2FRHmJXexJDSXYq3AO5dqkFrruHxi%2FM11vYmks%2BRwkymzsNTrszFqZWNxRyUPF4V2jmrO9RXqNjk2Xil9EcJ9KuC1t39yoR9wpgPI4ChAnAdUFl%2B3zmMw8Pyr6VFwASEFyQx1lSVC9YCA1U%2B63SlP2PqXc0J6uvb7hlSAUi8KLr5UTMqM1gDtHtIARyvEU6nIP9jAPicXwZOXngbyW1cnKGvJTOs7jGZhgETED6rlEMuUNLmcu96njq8VFerBKbN0SnQCzvogOSEgF13G%2BNyfB16xH9KIyjtWWSI%2BO6ZNqko1%2BQKGvckt6OEd07LVehZeKJDAUd3IS0wJlH5e%2FKaG2sJaHpGxJ8ZyUv1K1K1jdo%2Bt88UDfF0wYGPb8OcAJJYapqYqe2sA5hU8qLW5sYUPsaUvG1S0BG4Mc%2F%2BNgK%2BON2KLM3mtgdL0fBooJeEKVaFdSqGJ4bqDSR%2FDYrnBGHgeMbpcyTig97XJWdAHyJ498kxclUv8RgEP42ZL3GBEFV%2BkbmQZ%2B4Fpiayfnm4xzBO5%2Fq09vP5bDv9sO8Zn%2FI1wR%2F8SOTSJgafOijgGQVRMkjaqMUYp%2Bz2%2BVFLxJxP80oLZOq9bp7g0bFAjvUN%2F6Fu9NKnw1YP0Pdy%2BZBwVMrDzL2TTRpx%2BCezYEG1DCY3MbABjqkAe37nRxX%2FaAoAAhh%2F%2FeC6iNCZqpEfCOJ%2BdsLHzLNK6UnMd%2BH%2Fsq19XgVnIQzoXgaD50RbUxx8%2BuYBIvkPbUleFeMEwUEWvZJA1V0jk6G7yiF2YoaVn%2FRUPbbndFROrLV4jamyZ9RRfN6LgSrulHpmtEHDY4eFWjEgnzVSW46bJSq%2Fw6XcumhYwV13aVX%2FEh5jehf12joP%2B3aYw5suzsfAQk23wVk&X-Amz-Signature=df42628e28c21c1563c3901689ac453de0e3eaeb82e8358361cbcd06ffe9974d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSIPPIS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDMH5zxgWcnjCRLdm9Aic24Hj3sowvOVkhlHzW7Ix9OfAIhALrhZXzEEpr9AEPafLatsIweB7o0zj5%2F535Rfgxp%2Fm6SKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW0o%2FRHmJXexJDSXYq3AO5dqkFrruHxi%2FM11vYmks%2BRwkymzsNTrszFqZWNxRyUPF4V2jmrO9RXqNjk2Xil9EcJ9KuC1t39yoR9wpgPI4ChAnAdUFl%2B3zmMw8Pyr6VFwASEFyQx1lSVC9YCA1U%2B63SlP2PqXc0J6uvb7hlSAUi8KLr5UTMqM1gDtHtIARyvEU6nIP9jAPicXwZOXngbyW1cnKGvJTOs7jGZhgETED6rlEMuUNLmcu96njq8VFerBKbN0SnQCzvogOSEgF13G%2BNyfB16xH9KIyjtWWSI%2BO6ZNqko1%2BQKGvckt6OEd07LVehZeKJDAUd3IS0wJlH5e%2FKaG2sJaHpGxJ8ZyUv1K1K1jdo%2Bt88UDfF0wYGPb8OcAJJYapqYqe2sA5hU8qLW5sYUPsaUvG1S0BG4Mc%2F%2BNgK%2BON2KLM3mtgdL0fBooJeEKVaFdSqGJ4bqDSR%2FDYrnBGHgeMbpcyTig97XJWdAHyJ498kxclUv8RgEP42ZL3GBEFV%2BkbmQZ%2B4Fpiayfnm4xzBO5%2Fq09vP5bDv9sO8Zn%2FI1wR%2F8SOTSJgafOijgGQVRMkjaqMUYp%2Bz2%2BVFLxJxP80oLZOq9bp7g0bFAjvUN%2F6Fu9NKnw1YP0Pdy%2BZBwVMrDzL2TTRpx%2BCezYEG1DCY3MbABjqkAe37nRxX%2FaAoAAhh%2F%2FeC6iNCZqpEfCOJ%2BdsLHzLNK6UnMd%2BH%2Fsq19XgVnIQzoXgaD50RbUxx8%2BuYBIvkPbUleFeMEwUEWvZJA1V0jk6G7yiF2YoaVn%2FRUPbbndFROrLV4jamyZ9RRfN6LgSrulHpmtEHDY4eFWjEgnzVSW46bJSq%2Fw6XcumhYwV13aVX%2FEh5jehf12joP%2B3aYw5suzsfAQk23wVk&X-Amz-Signature=72933674e128ba6c1fc63c3588350d0c2f1657801d6bda04b1d20aed0a9a7938&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSIPPIS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDMH5zxgWcnjCRLdm9Aic24Hj3sowvOVkhlHzW7Ix9OfAIhALrhZXzEEpr9AEPafLatsIweB7o0zj5%2F535Rfgxp%2Fm6SKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW0o%2FRHmJXexJDSXYq3AO5dqkFrruHxi%2FM11vYmks%2BRwkymzsNTrszFqZWNxRyUPF4V2jmrO9RXqNjk2Xil9EcJ9KuC1t39yoR9wpgPI4ChAnAdUFl%2B3zmMw8Pyr6VFwASEFyQx1lSVC9YCA1U%2B63SlP2PqXc0J6uvb7hlSAUi8KLr5UTMqM1gDtHtIARyvEU6nIP9jAPicXwZOXngbyW1cnKGvJTOs7jGZhgETED6rlEMuUNLmcu96njq8VFerBKbN0SnQCzvogOSEgF13G%2BNyfB16xH9KIyjtWWSI%2BO6ZNqko1%2BQKGvckt6OEd07LVehZeKJDAUd3IS0wJlH5e%2FKaG2sJaHpGxJ8ZyUv1K1K1jdo%2Bt88UDfF0wYGPb8OcAJJYapqYqe2sA5hU8qLW5sYUPsaUvG1S0BG4Mc%2F%2BNgK%2BON2KLM3mtgdL0fBooJeEKVaFdSqGJ4bqDSR%2FDYrnBGHgeMbpcyTig97XJWdAHyJ498kxclUv8RgEP42ZL3GBEFV%2BkbmQZ%2B4Fpiayfnm4xzBO5%2Fq09vP5bDv9sO8Zn%2FI1wR%2F8SOTSJgafOijgGQVRMkjaqMUYp%2Bz2%2BVFLxJxP80oLZOq9bp7g0bFAjvUN%2F6Fu9NKnw1YP0Pdy%2BZBwVMrDzL2TTRpx%2BCezYEG1DCY3MbABjqkAe37nRxX%2FaAoAAhh%2F%2FeC6iNCZqpEfCOJ%2BdsLHzLNK6UnMd%2BH%2Fsq19XgVnIQzoXgaD50RbUxx8%2BuYBIvkPbUleFeMEwUEWvZJA1V0jk6G7yiF2YoaVn%2FRUPbbndFROrLV4jamyZ9RRfN6LgSrulHpmtEHDY4eFWjEgnzVSW46bJSq%2Fw6XcumhYwV13aVX%2FEh5jehf12joP%2B3aYw5suzsfAQk23wVk&X-Amz-Signature=815e5335caddd1f414bd9f525ed10ebc35710cc6d1fb5007b2e28b21d4881feb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
