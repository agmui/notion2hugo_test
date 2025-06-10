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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5G4ZFP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC19qzXhUgyJcZsBLRbfGZw3mOBR9Af1G%2FdPMzAh%2BcQhAiAQvuCBC4cusksC7qTJEuxRj%2BHmeoUUT0c54FFau9QHTSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdd2Lws7Zqgbv3oFHKtwDwR%2B4c1MH6KDUz4gz5hDyAvHGURLb5KzMkyqDhKFybj6xs9p4PM9jqAf%2BQGdt7KhhK%2BAI41X1THDDozwNmUJbYDPvtQFootwBKXDzi8S4GD7fkAUaoHxyULvY3Fd90Zi0mkOBZM0YytDfQYj5cXRWFkqW7%2FEupjtOGzzNYn1D5GMAwQI5HM14BwQ5Gs9oRnfcTEnoWi8RffAneQHP0CQVD9zq6EedyBFJwLVGV8Onh0Xk7oK2mrp7A6M6Of2XzaIyq8860dvdAp98kZ6aCAUb8qy%2BLkhlhcieK%2F%2FllLj1c9eZ%2FCJ3KmgatgEsWeLDCtq9XXLGDdc1Z%2FEP4IjzHF4IX5Rrk0Zfg8YnskMevWWyRBzYrDlJx1r%2B8FqHceIhEG81f6g%2BlbVD%2BRcVLEH51ssiky16802EwHStUBcxzxLKd67LFx9W%2FRD%2B1Rz3dyk1G%2B%2FPBJe8UJEzLiZS3KqSnYRoA6Pjbj7oTyLgkDWNKHEsIE184HxqqOWAK56cPNQk%2B7gJX%2FNmt2EhYy4yrJM5qjldU7KeDn2R8fON%2FxLuGctSaqRGucMMJJ02Jd6BEPJy2rdQPKGWDVVUFFY%2BNI5wBtndKSIubsABih2WY%2Fro4M%2Bhi4Trw99euAxLamykRWow0diewgY6pgGMKkGa5bDjzdSuYSSYE78y%2BNgpSsJRDNJpBEd9ZXdB2NWiz73NMdPGb8NLwy6%2FEQcIFcjL9zItihTA1fOiIEsgSfPGjTaMp6j2aju76mL1io6lmsSC1QTa81Sz2eBj%2FHsbr9ljrYW9KL%2FOo%2F%2BXrh01g%2FPpc9nZLLKnG1kyqNhlhsS9V8txx7Tdq3Azh2d6BJzDvKF172Q0BGhzKaU8i73CIwgsT8Fc&X-Amz-Signature=e33cb51470471746906019a176dd09bc370d43b83394ef4b1d554e65f679afd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5G4ZFP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC19qzXhUgyJcZsBLRbfGZw3mOBR9Af1G%2FdPMzAh%2BcQhAiAQvuCBC4cusksC7qTJEuxRj%2BHmeoUUT0c54FFau9QHTSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdd2Lws7Zqgbv3oFHKtwDwR%2B4c1MH6KDUz4gz5hDyAvHGURLb5KzMkyqDhKFybj6xs9p4PM9jqAf%2BQGdt7KhhK%2BAI41X1THDDozwNmUJbYDPvtQFootwBKXDzi8S4GD7fkAUaoHxyULvY3Fd90Zi0mkOBZM0YytDfQYj5cXRWFkqW7%2FEupjtOGzzNYn1D5GMAwQI5HM14BwQ5Gs9oRnfcTEnoWi8RffAneQHP0CQVD9zq6EedyBFJwLVGV8Onh0Xk7oK2mrp7A6M6Of2XzaIyq8860dvdAp98kZ6aCAUb8qy%2BLkhlhcieK%2F%2FllLj1c9eZ%2FCJ3KmgatgEsWeLDCtq9XXLGDdc1Z%2FEP4IjzHF4IX5Rrk0Zfg8YnskMevWWyRBzYrDlJx1r%2B8FqHceIhEG81f6g%2BlbVD%2BRcVLEH51ssiky16802EwHStUBcxzxLKd67LFx9W%2FRD%2B1Rz3dyk1G%2B%2FPBJe8UJEzLiZS3KqSnYRoA6Pjbj7oTyLgkDWNKHEsIE184HxqqOWAK56cPNQk%2B7gJX%2FNmt2EhYy4yrJM5qjldU7KeDn2R8fON%2FxLuGctSaqRGucMMJJ02Jd6BEPJy2rdQPKGWDVVUFFY%2BNI5wBtndKSIubsABih2WY%2Fro4M%2Bhi4Trw99euAxLamykRWow0diewgY6pgGMKkGa5bDjzdSuYSSYE78y%2BNgpSsJRDNJpBEd9ZXdB2NWiz73NMdPGb8NLwy6%2FEQcIFcjL9zItihTA1fOiIEsgSfPGjTaMp6j2aju76mL1io6lmsSC1QTa81Sz2eBj%2FHsbr9ljrYW9KL%2FOo%2F%2BXrh01g%2FPpc9nZLLKnG1kyqNhlhsS9V8txx7Tdq3Azh2d6BJzDvKF172Q0BGhzKaU8i73CIwgsT8Fc&X-Amz-Signature=978694da7ab27b60b77aacf4bccf50136daee235df074d010938c465fd780979&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5G4ZFP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC19qzXhUgyJcZsBLRbfGZw3mOBR9Af1G%2FdPMzAh%2BcQhAiAQvuCBC4cusksC7qTJEuxRj%2BHmeoUUT0c54FFau9QHTSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdd2Lws7Zqgbv3oFHKtwDwR%2B4c1MH6KDUz4gz5hDyAvHGURLb5KzMkyqDhKFybj6xs9p4PM9jqAf%2BQGdt7KhhK%2BAI41X1THDDozwNmUJbYDPvtQFootwBKXDzi8S4GD7fkAUaoHxyULvY3Fd90Zi0mkOBZM0YytDfQYj5cXRWFkqW7%2FEupjtOGzzNYn1D5GMAwQI5HM14BwQ5Gs9oRnfcTEnoWi8RffAneQHP0CQVD9zq6EedyBFJwLVGV8Onh0Xk7oK2mrp7A6M6Of2XzaIyq8860dvdAp98kZ6aCAUb8qy%2BLkhlhcieK%2F%2FllLj1c9eZ%2FCJ3KmgatgEsWeLDCtq9XXLGDdc1Z%2FEP4IjzHF4IX5Rrk0Zfg8YnskMevWWyRBzYrDlJx1r%2B8FqHceIhEG81f6g%2BlbVD%2BRcVLEH51ssiky16802EwHStUBcxzxLKd67LFx9W%2FRD%2B1Rz3dyk1G%2B%2FPBJe8UJEzLiZS3KqSnYRoA6Pjbj7oTyLgkDWNKHEsIE184HxqqOWAK56cPNQk%2B7gJX%2FNmt2EhYy4yrJM5qjldU7KeDn2R8fON%2FxLuGctSaqRGucMMJJ02Jd6BEPJy2rdQPKGWDVVUFFY%2BNI5wBtndKSIubsABih2WY%2Fro4M%2Bhi4Trw99euAxLamykRWow0diewgY6pgGMKkGa5bDjzdSuYSSYE78y%2BNgpSsJRDNJpBEd9ZXdB2NWiz73NMdPGb8NLwy6%2FEQcIFcjL9zItihTA1fOiIEsgSfPGjTaMp6j2aju76mL1io6lmsSC1QTa81Sz2eBj%2FHsbr9ljrYW9KL%2FOo%2F%2BXrh01g%2FPpc9nZLLKnG1kyqNhlhsS9V8txx7Tdq3Azh2d6BJzDvKF172Q0BGhzKaU8i73CIwgsT8Fc&X-Amz-Signature=e27c8aee8ec79cfd39855cc524e65cfeb3aca52049a2ca31729e663eed5a87b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5G4ZFP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC19qzXhUgyJcZsBLRbfGZw3mOBR9Af1G%2FdPMzAh%2BcQhAiAQvuCBC4cusksC7qTJEuxRj%2BHmeoUUT0c54FFau9QHTSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdd2Lws7Zqgbv3oFHKtwDwR%2B4c1MH6KDUz4gz5hDyAvHGURLb5KzMkyqDhKFybj6xs9p4PM9jqAf%2BQGdt7KhhK%2BAI41X1THDDozwNmUJbYDPvtQFootwBKXDzi8S4GD7fkAUaoHxyULvY3Fd90Zi0mkOBZM0YytDfQYj5cXRWFkqW7%2FEupjtOGzzNYn1D5GMAwQI5HM14BwQ5Gs9oRnfcTEnoWi8RffAneQHP0CQVD9zq6EedyBFJwLVGV8Onh0Xk7oK2mrp7A6M6Of2XzaIyq8860dvdAp98kZ6aCAUb8qy%2BLkhlhcieK%2F%2FllLj1c9eZ%2FCJ3KmgatgEsWeLDCtq9XXLGDdc1Z%2FEP4IjzHF4IX5Rrk0Zfg8YnskMevWWyRBzYrDlJx1r%2B8FqHceIhEG81f6g%2BlbVD%2BRcVLEH51ssiky16802EwHStUBcxzxLKd67LFx9W%2FRD%2B1Rz3dyk1G%2B%2FPBJe8UJEzLiZS3KqSnYRoA6Pjbj7oTyLgkDWNKHEsIE184HxqqOWAK56cPNQk%2B7gJX%2FNmt2EhYy4yrJM5qjldU7KeDn2R8fON%2FxLuGctSaqRGucMMJJ02Jd6BEPJy2rdQPKGWDVVUFFY%2BNI5wBtndKSIubsABih2WY%2Fro4M%2Bhi4Trw99euAxLamykRWow0diewgY6pgGMKkGa5bDjzdSuYSSYE78y%2BNgpSsJRDNJpBEd9ZXdB2NWiz73NMdPGb8NLwy6%2FEQcIFcjL9zItihTA1fOiIEsgSfPGjTaMp6j2aju76mL1io6lmsSC1QTa81Sz2eBj%2FHsbr9ljrYW9KL%2FOo%2F%2BXrh01g%2FPpc9nZLLKnG1kyqNhlhsS9V8txx7Tdq3Azh2d6BJzDvKF172Q0BGhzKaU8i73CIwgsT8Fc&X-Amz-Signature=4c4690d3347f3a076efe0da9fe16bab084deac93cece9f1ebecfd4ba5933bef3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5G4ZFP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC19qzXhUgyJcZsBLRbfGZw3mOBR9Af1G%2FdPMzAh%2BcQhAiAQvuCBC4cusksC7qTJEuxRj%2BHmeoUUT0c54FFau9QHTSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdd2Lws7Zqgbv3oFHKtwDwR%2B4c1MH6KDUz4gz5hDyAvHGURLb5KzMkyqDhKFybj6xs9p4PM9jqAf%2BQGdt7KhhK%2BAI41X1THDDozwNmUJbYDPvtQFootwBKXDzi8S4GD7fkAUaoHxyULvY3Fd90Zi0mkOBZM0YytDfQYj5cXRWFkqW7%2FEupjtOGzzNYn1D5GMAwQI5HM14BwQ5Gs9oRnfcTEnoWi8RffAneQHP0CQVD9zq6EedyBFJwLVGV8Onh0Xk7oK2mrp7A6M6Of2XzaIyq8860dvdAp98kZ6aCAUb8qy%2BLkhlhcieK%2F%2FllLj1c9eZ%2FCJ3KmgatgEsWeLDCtq9XXLGDdc1Z%2FEP4IjzHF4IX5Rrk0Zfg8YnskMevWWyRBzYrDlJx1r%2B8FqHceIhEG81f6g%2BlbVD%2BRcVLEH51ssiky16802EwHStUBcxzxLKd67LFx9W%2FRD%2B1Rz3dyk1G%2B%2FPBJe8UJEzLiZS3KqSnYRoA6Pjbj7oTyLgkDWNKHEsIE184HxqqOWAK56cPNQk%2B7gJX%2FNmt2EhYy4yrJM5qjldU7KeDn2R8fON%2FxLuGctSaqRGucMMJJ02Jd6BEPJy2rdQPKGWDVVUFFY%2BNI5wBtndKSIubsABih2WY%2Fro4M%2Bhi4Trw99euAxLamykRWow0diewgY6pgGMKkGa5bDjzdSuYSSYE78y%2BNgpSsJRDNJpBEd9ZXdB2NWiz73NMdPGb8NLwy6%2FEQcIFcjL9zItihTA1fOiIEsgSfPGjTaMp6j2aju76mL1io6lmsSC1QTa81Sz2eBj%2FHsbr9ljrYW9KL%2FOo%2F%2BXrh01g%2FPpc9nZLLKnG1kyqNhlhsS9V8txx7Tdq3Azh2d6BJzDvKF172Q0BGhzKaU8i73CIwgsT8Fc&X-Amz-Signature=f541428e6f72c9639c1e016610d5a793112cfdffcf0b379fcc5fc156feeebd22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5G4ZFP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC19qzXhUgyJcZsBLRbfGZw3mOBR9Af1G%2FdPMzAh%2BcQhAiAQvuCBC4cusksC7qTJEuxRj%2BHmeoUUT0c54FFau9QHTSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdd2Lws7Zqgbv3oFHKtwDwR%2B4c1MH6KDUz4gz5hDyAvHGURLb5KzMkyqDhKFybj6xs9p4PM9jqAf%2BQGdt7KhhK%2BAI41X1THDDozwNmUJbYDPvtQFootwBKXDzi8S4GD7fkAUaoHxyULvY3Fd90Zi0mkOBZM0YytDfQYj5cXRWFkqW7%2FEupjtOGzzNYn1D5GMAwQI5HM14BwQ5Gs9oRnfcTEnoWi8RffAneQHP0CQVD9zq6EedyBFJwLVGV8Onh0Xk7oK2mrp7A6M6Of2XzaIyq8860dvdAp98kZ6aCAUb8qy%2BLkhlhcieK%2F%2FllLj1c9eZ%2FCJ3KmgatgEsWeLDCtq9XXLGDdc1Z%2FEP4IjzHF4IX5Rrk0Zfg8YnskMevWWyRBzYrDlJx1r%2B8FqHceIhEG81f6g%2BlbVD%2BRcVLEH51ssiky16802EwHStUBcxzxLKd67LFx9W%2FRD%2B1Rz3dyk1G%2B%2FPBJe8UJEzLiZS3KqSnYRoA6Pjbj7oTyLgkDWNKHEsIE184HxqqOWAK56cPNQk%2B7gJX%2FNmt2EhYy4yrJM5qjldU7KeDn2R8fON%2FxLuGctSaqRGucMMJJ02Jd6BEPJy2rdQPKGWDVVUFFY%2BNI5wBtndKSIubsABih2WY%2Fro4M%2Bhi4Trw99euAxLamykRWow0diewgY6pgGMKkGa5bDjzdSuYSSYE78y%2BNgpSsJRDNJpBEd9ZXdB2NWiz73NMdPGb8NLwy6%2FEQcIFcjL9zItihTA1fOiIEsgSfPGjTaMp6j2aju76mL1io6lmsSC1QTa81Sz2eBj%2FHsbr9ljrYW9KL%2FOo%2F%2BXrh01g%2FPpc9nZLLKnG1kyqNhlhsS9V8txx7Tdq3Azh2d6BJzDvKF172Q0BGhzKaU8i73CIwgsT8Fc&X-Amz-Signature=4c0375e7bb4cfaeed55b215021b2a479b8625b036067ad4297ed966f588837e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5G4ZFP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC19qzXhUgyJcZsBLRbfGZw3mOBR9Af1G%2FdPMzAh%2BcQhAiAQvuCBC4cusksC7qTJEuxRj%2BHmeoUUT0c54FFau9QHTSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdd2Lws7Zqgbv3oFHKtwDwR%2B4c1MH6KDUz4gz5hDyAvHGURLb5KzMkyqDhKFybj6xs9p4PM9jqAf%2BQGdt7KhhK%2BAI41X1THDDozwNmUJbYDPvtQFootwBKXDzi8S4GD7fkAUaoHxyULvY3Fd90Zi0mkOBZM0YytDfQYj5cXRWFkqW7%2FEupjtOGzzNYn1D5GMAwQI5HM14BwQ5Gs9oRnfcTEnoWi8RffAneQHP0CQVD9zq6EedyBFJwLVGV8Onh0Xk7oK2mrp7A6M6Of2XzaIyq8860dvdAp98kZ6aCAUb8qy%2BLkhlhcieK%2F%2FllLj1c9eZ%2FCJ3KmgatgEsWeLDCtq9XXLGDdc1Z%2FEP4IjzHF4IX5Rrk0Zfg8YnskMevWWyRBzYrDlJx1r%2B8FqHceIhEG81f6g%2BlbVD%2BRcVLEH51ssiky16802EwHStUBcxzxLKd67LFx9W%2FRD%2B1Rz3dyk1G%2B%2FPBJe8UJEzLiZS3KqSnYRoA6Pjbj7oTyLgkDWNKHEsIE184HxqqOWAK56cPNQk%2B7gJX%2FNmt2EhYy4yrJM5qjldU7KeDn2R8fON%2FxLuGctSaqRGucMMJJ02Jd6BEPJy2rdQPKGWDVVUFFY%2BNI5wBtndKSIubsABih2WY%2Fro4M%2Bhi4Trw99euAxLamykRWow0diewgY6pgGMKkGa5bDjzdSuYSSYE78y%2BNgpSsJRDNJpBEd9ZXdB2NWiz73NMdPGb8NLwy6%2FEQcIFcjL9zItihTA1fOiIEsgSfPGjTaMp6j2aju76mL1io6lmsSC1QTa81Sz2eBj%2FHsbr9ljrYW9KL%2FOo%2F%2BXrh01g%2FPpc9nZLLKnG1kyqNhlhsS9V8txx7Tdq3Azh2d6BJzDvKF172Q0BGhzKaU8i73CIwgsT8Fc&X-Amz-Signature=db53c0391ad64dab7450a5c8d7b913e0ed4627b7ce0edc6f6683cd0d0d18bd30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5G4ZFP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC19qzXhUgyJcZsBLRbfGZw3mOBR9Af1G%2FdPMzAh%2BcQhAiAQvuCBC4cusksC7qTJEuxRj%2BHmeoUUT0c54FFau9QHTSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdd2Lws7Zqgbv3oFHKtwDwR%2B4c1MH6KDUz4gz5hDyAvHGURLb5KzMkyqDhKFybj6xs9p4PM9jqAf%2BQGdt7KhhK%2BAI41X1THDDozwNmUJbYDPvtQFootwBKXDzi8S4GD7fkAUaoHxyULvY3Fd90Zi0mkOBZM0YytDfQYj5cXRWFkqW7%2FEupjtOGzzNYn1D5GMAwQI5HM14BwQ5Gs9oRnfcTEnoWi8RffAneQHP0CQVD9zq6EedyBFJwLVGV8Onh0Xk7oK2mrp7A6M6Of2XzaIyq8860dvdAp98kZ6aCAUb8qy%2BLkhlhcieK%2F%2FllLj1c9eZ%2FCJ3KmgatgEsWeLDCtq9XXLGDdc1Z%2FEP4IjzHF4IX5Rrk0Zfg8YnskMevWWyRBzYrDlJx1r%2B8FqHceIhEG81f6g%2BlbVD%2BRcVLEH51ssiky16802EwHStUBcxzxLKd67LFx9W%2FRD%2B1Rz3dyk1G%2B%2FPBJe8UJEzLiZS3KqSnYRoA6Pjbj7oTyLgkDWNKHEsIE184HxqqOWAK56cPNQk%2B7gJX%2FNmt2EhYy4yrJM5qjldU7KeDn2R8fON%2FxLuGctSaqRGucMMJJ02Jd6BEPJy2rdQPKGWDVVUFFY%2BNI5wBtndKSIubsABih2WY%2Fro4M%2Bhi4Trw99euAxLamykRWow0diewgY6pgGMKkGa5bDjzdSuYSSYE78y%2BNgpSsJRDNJpBEd9ZXdB2NWiz73NMdPGb8NLwy6%2FEQcIFcjL9zItihTA1fOiIEsgSfPGjTaMp6j2aju76mL1io6lmsSC1QTa81Sz2eBj%2FHsbr9ljrYW9KL%2FOo%2F%2BXrh01g%2FPpc9nZLLKnG1kyqNhlhsS9V8txx7Tdq3Azh2d6BJzDvKF172Q0BGhzKaU8i73CIwgsT8Fc&X-Amz-Signature=93842bab9b760c545c09fb69f37b5817e756d978817274ede1492d125eceb212&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
