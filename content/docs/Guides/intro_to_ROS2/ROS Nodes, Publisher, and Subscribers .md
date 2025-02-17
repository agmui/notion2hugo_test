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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBKQW6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHZYOrrLNDUyZOmQKzgLQo5TfbXz4PFUTl35%2Bb9akl%2BxAiAGHpzsflYmRgBxZ91xOQVUY8Y6DTZjgTKu4Ai%2F%2BRdMWyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM61e6iUyTekW1neUJKtwDB%2FtbM9sCSmfvLbTP%2BA074uqXNnHmgBbiPVm4flS2ho9lUd7fHrjdiQTtac4Efk05HPEn%2Bjq6liyW679%2BN3k%2Fv9VjrGxBp6ARpXGlm3z2IXGeoG%2FGQIWiBA5RDd22cMT%2Fq6tqAy5MTtZ9uMdxU1NIP8gbYPHRXOmKFOaHqUYABP1KC40%2BQAgl82jkxy%2BSS8wRdgFWYWsShV%2BTcMA9B3wDkbEdlXr3DmLMZGb6Vf7QNGIE4e%2F5EX4akRQPR0Ynf%2FZU4d%2FpnepHAzHPGRjLdQsSDN%2FSP%2FyotLR%2FTqV6GPTDBjwo%2BwLuFUwAQZc32pFlAEE08qBaCz2ABFBOskK86wc9PAGtwqFXYFgAGzz2Vy%2B4BpzsqeYn3uhO5UX8U5Fpu9s1QXxHYnnBKnk0CJgVkvi%2Bn%2F2dgczs6iBvNx%2Fpu8Ms6OfC2fr%2FTmFUGxC8jOjcNaldj7dcXm3K%2B39geiAtJRYopJfSRJGSjkWzFjY4E9phTLjMlGnqK%2BSe4sCC8tazlVifdJamIkwfbu4%2B%2FuUBVlclHZ%2FD07xs1Qk1XIbjFbTcBULDBbLmYSjiQslUg2c5RhoLW2tEC6%2FjlYPM36BTJAh1JhBs74xTDESXguVnC8Ho4XL1U%2BslcJBNfhYtuN8wr8LNvQY6pgHIRYE2Luc%2F1DKoRZFRDiwpxmLZMD%2By4GaXONz42sse7lksIZehmX1l%2FCnTyl95QRTDtwsujVQpb2M7Ouu10ePgYHM4rH%2BfXHANBUCC%2BqETp2R1EIV2zYe2aVCXIiLnAud1yVNqixQE6L5G4I6Gv23tguvu%2FqxfSl5Mmy%2B5u5rQsGRDimmLlP9NKMaTjhG2lUsUHgUzjnaNv%2Boq4j%2FdIM571R0aBU9s&X-Amz-Signature=24cd31b83158577b064b5b7ca85a3b3fbe07699a710a3de6fbf5f14328c236fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBKQW6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHZYOrrLNDUyZOmQKzgLQo5TfbXz4PFUTl35%2Bb9akl%2BxAiAGHpzsflYmRgBxZ91xOQVUY8Y6DTZjgTKu4Ai%2F%2BRdMWyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM61e6iUyTekW1neUJKtwDB%2FtbM9sCSmfvLbTP%2BA074uqXNnHmgBbiPVm4flS2ho9lUd7fHrjdiQTtac4Efk05HPEn%2Bjq6liyW679%2BN3k%2Fv9VjrGxBp6ARpXGlm3z2IXGeoG%2FGQIWiBA5RDd22cMT%2Fq6tqAy5MTtZ9uMdxU1NIP8gbYPHRXOmKFOaHqUYABP1KC40%2BQAgl82jkxy%2BSS8wRdgFWYWsShV%2BTcMA9B3wDkbEdlXr3DmLMZGb6Vf7QNGIE4e%2F5EX4akRQPR0Ynf%2FZU4d%2FpnepHAzHPGRjLdQsSDN%2FSP%2FyotLR%2FTqV6GPTDBjwo%2BwLuFUwAQZc32pFlAEE08qBaCz2ABFBOskK86wc9PAGtwqFXYFgAGzz2Vy%2B4BpzsqeYn3uhO5UX8U5Fpu9s1QXxHYnnBKnk0CJgVkvi%2Bn%2F2dgczs6iBvNx%2Fpu8Ms6OfC2fr%2FTmFUGxC8jOjcNaldj7dcXm3K%2B39geiAtJRYopJfSRJGSjkWzFjY4E9phTLjMlGnqK%2BSe4sCC8tazlVifdJamIkwfbu4%2B%2FuUBVlclHZ%2FD07xs1Qk1XIbjFbTcBULDBbLmYSjiQslUg2c5RhoLW2tEC6%2FjlYPM36BTJAh1JhBs74xTDESXguVnC8Ho4XL1U%2BslcJBNfhYtuN8wr8LNvQY6pgHIRYE2Luc%2F1DKoRZFRDiwpxmLZMD%2By4GaXONz42sse7lksIZehmX1l%2FCnTyl95QRTDtwsujVQpb2M7Ouu10ePgYHM4rH%2BfXHANBUCC%2BqETp2R1EIV2zYe2aVCXIiLnAud1yVNqixQE6L5G4I6Gv23tguvu%2FqxfSl5Mmy%2B5u5rQsGRDimmLlP9NKMaTjhG2lUsUHgUzjnaNv%2Boq4j%2FdIM571R0aBU9s&X-Amz-Signature=510a4c73d2ea4f70cc3c30d84661f4557acef1001d41a45285b17a1a9a9a878a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBKQW6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHZYOrrLNDUyZOmQKzgLQo5TfbXz4PFUTl35%2Bb9akl%2BxAiAGHpzsflYmRgBxZ91xOQVUY8Y6DTZjgTKu4Ai%2F%2BRdMWyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM61e6iUyTekW1neUJKtwDB%2FtbM9sCSmfvLbTP%2BA074uqXNnHmgBbiPVm4flS2ho9lUd7fHrjdiQTtac4Efk05HPEn%2Bjq6liyW679%2BN3k%2Fv9VjrGxBp6ARpXGlm3z2IXGeoG%2FGQIWiBA5RDd22cMT%2Fq6tqAy5MTtZ9uMdxU1NIP8gbYPHRXOmKFOaHqUYABP1KC40%2BQAgl82jkxy%2BSS8wRdgFWYWsShV%2BTcMA9B3wDkbEdlXr3DmLMZGb6Vf7QNGIE4e%2F5EX4akRQPR0Ynf%2FZU4d%2FpnepHAzHPGRjLdQsSDN%2FSP%2FyotLR%2FTqV6GPTDBjwo%2BwLuFUwAQZc32pFlAEE08qBaCz2ABFBOskK86wc9PAGtwqFXYFgAGzz2Vy%2B4BpzsqeYn3uhO5UX8U5Fpu9s1QXxHYnnBKnk0CJgVkvi%2Bn%2F2dgczs6iBvNx%2Fpu8Ms6OfC2fr%2FTmFUGxC8jOjcNaldj7dcXm3K%2B39geiAtJRYopJfSRJGSjkWzFjY4E9phTLjMlGnqK%2BSe4sCC8tazlVifdJamIkwfbu4%2B%2FuUBVlclHZ%2FD07xs1Qk1XIbjFbTcBULDBbLmYSjiQslUg2c5RhoLW2tEC6%2FjlYPM36BTJAh1JhBs74xTDESXguVnC8Ho4XL1U%2BslcJBNfhYtuN8wr8LNvQY6pgHIRYE2Luc%2F1DKoRZFRDiwpxmLZMD%2By4GaXONz42sse7lksIZehmX1l%2FCnTyl95QRTDtwsujVQpb2M7Ouu10ePgYHM4rH%2BfXHANBUCC%2BqETp2R1EIV2zYe2aVCXIiLnAud1yVNqixQE6L5G4I6Gv23tguvu%2FqxfSl5Mmy%2B5u5rQsGRDimmLlP9NKMaTjhG2lUsUHgUzjnaNv%2Boq4j%2FdIM571R0aBU9s&X-Amz-Signature=9a73128259b57d3964c0a67d6a0a9249f0c432effcddfb52f363e119b4f4f2fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBKQW6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHZYOrrLNDUyZOmQKzgLQo5TfbXz4PFUTl35%2Bb9akl%2BxAiAGHpzsflYmRgBxZ91xOQVUY8Y6DTZjgTKu4Ai%2F%2BRdMWyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM61e6iUyTekW1neUJKtwDB%2FtbM9sCSmfvLbTP%2BA074uqXNnHmgBbiPVm4flS2ho9lUd7fHrjdiQTtac4Efk05HPEn%2Bjq6liyW679%2BN3k%2Fv9VjrGxBp6ARpXGlm3z2IXGeoG%2FGQIWiBA5RDd22cMT%2Fq6tqAy5MTtZ9uMdxU1NIP8gbYPHRXOmKFOaHqUYABP1KC40%2BQAgl82jkxy%2BSS8wRdgFWYWsShV%2BTcMA9B3wDkbEdlXr3DmLMZGb6Vf7QNGIE4e%2F5EX4akRQPR0Ynf%2FZU4d%2FpnepHAzHPGRjLdQsSDN%2FSP%2FyotLR%2FTqV6GPTDBjwo%2BwLuFUwAQZc32pFlAEE08qBaCz2ABFBOskK86wc9PAGtwqFXYFgAGzz2Vy%2B4BpzsqeYn3uhO5UX8U5Fpu9s1QXxHYnnBKnk0CJgVkvi%2Bn%2F2dgczs6iBvNx%2Fpu8Ms6OfC2fr%2FTmFUGxC8jOjcNaldj7dcXm3K%2B39geiAtJRYopJfSRJGSjkWzFjY4E9phTLjMlGnqK%2BSe4sCC8tazlVifdJamIkwfbu4%2B%2FuUBVlclHZ%2FD07xs1Qk1XIbjFbTcBULDBbLmYSjiQslUg2c5RhoLW2tEC6%2FjlYPM36BTJAh1JhBs74xTDESXguVnC8Ho4XL1U%2BslcJBNfhYtuN8wr8LNvQY6pgHIRYE2Luc%2F1DKoRZFRDiwpxmLZMD%2By4GaXONz42sse7lksIZehmX1l%2FCnTyl95QRTDtwsujVQpb2M7Ouu10ePgYHM4rH%2BfXHANBUCC%2BqETp2R1EIV2zYe2aVCXIiLnAud1yVNqixQE6L5G4I6Gv23tguvu%2FqxfSl5Mmy%2B5u5rQsGRDimmLlP9NKMaTjhG2lUsUHgUzjnaNv%2Boq4j%2FdIM571R0aBU9s&X-Amz-Signature=f1d497aae62a5d8c0e17a6ef4d54058fd00f9cba3131692b3fc7e48a44207c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBKQW6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHZYOrrLNDUyZOmQKzgLQo5TfbXz4PFUTl35%2Bb9akl%2BxAiAGHpzsflYmRgBxZ91xOQVUY8Y6DTZjgTKu4Ai%2F%2BRdMWyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM61e6iUyTekW1neUJKtwDB%2FtbM9sCSmfvLbTP%2BA074uqXNnHmgBbiPVm4flS2ho9lUd7fHrjdiQTtac4Efk05HPEn%2Bjq6liyW679%2BN3k%2Fv9VjrGxBp6ARpXGlm3z2IXGeoG%2FGQIWiBA5RDd22cMT%2Fq6tqAy5MTtZ9uMdxU1NIP8gbYPHRXOmKFOaHqUYABP1KC40%2BQAgl82jkxy%2BSS8wRdgFWYWsShV%2BTcMA9B3wDkbEdlXr3DmLMZGb6Vf7QNGIE4e%2F5EX4akRQPR0Ynf%2FZU4d%2FpnepHAzHPGRjLdQsSDN%2FSP%2FyotLR%2FTqV6GPTDBjwo%2BwLuFUwAQZc32pFlAEE08qBaCz2ABFBOskK86wc9PAGtwqFXYFgAGzz2Vy%2B4BpzsqeYn3uhO5UX8U5Fpu9s1QXxHYnnBKnk0CJgVkvi%2Bn%2F2dgczs6iBvNx%2Fpu8Ms6OfC2fr%2FTmFUGxC8jOjcNaldj7dcXm3K%2B39geiAtJRYopJfSRJGSjkWzFjY4E9phTLjMlGnqK%2BSe4sCC8tazlVifdJamIkwfbu4%2B%2FuUBVlclHZ%2FD07xs1Qk1XIbjFbTcBULDBbLmYSjiQslUg2c5RhoLW2tEC6%2FjlYPM36BTJAh1JhBs74xTDESXguVnC8Ho4XL1U%2BslcJBNfhYtuN8wr8LNvQY6pgHIRYE2Luc%2F1DKoRZFRDiwpxmLZMD%2By4GaXONz42sse7lksIZehmX1l%2FCnTyl95QRTDtwsujVQpb2M7Ouu10ePgYHM4rH%2BfXHANBUCC%2BqETp2R1EIV2zYe2aVCXIiLnAud1yVNqixQE6L5G4I6Gv23tguvu%2FqxfSl5Mmy%2B5u5rQsGRDimmLlP9NKMaTjhG2lUsUHgUzjnaNv%2Boq4j%2FdIM571R0aBU9s&X-Amz-Signature=40ae9848ec8c964935225524223c59e773d02e1bea4270c49acd5f97eae3674e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBKQW6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHZYOrrLNDUyZOmQKzgLQo5TfbXz4PFUTl35%2Bb9akl%2BxAiAGHpzsflYmRgBxZ91xOQVUY8Y6DTZjgTKu4Ai%2F%2BRdMWyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM61e6iUyTekW1neUJKtwDB%2FtbM9sCSmfvLbTP%2BA074uqXNnHmgBbiPVm4flS2ho9lUd7fHrjdiQTtac4Efk05HPEn%2Bjq6liyW679%2BN3k%2Fv9VjrGxBp6ARpXGlm3z2IXGeoG%2FGQIWiBA5RDd22cMT%2Fq6tqAy5MTtZ9uMdxU1NIP8gbYPHRXOmKFOaHqUYABP1KC40%2BQAgl82jkxy%2BSS8wRdgFWYWsShV%2BTcMA9B3wDkbEdlXr3DmLMZGb6Vf7QNGIE4e%2F5EX4akRQPR0Ynf%2FZU4d%2FpnepHAzHPGRjLdQsSDN%2FSP%2FyotLR%2FTqV6GPTDBjwo%2BwLuFUwAQZc32pFlAEE08qBaCz2ABFBOskK86wc9PAGtwqFXYFgAGzz2Vy%2B4BpzsqeYn3uhO5UX8U5Fpu9s1QXxHYnnBKnk0CJgVkvi%2Bn%2F2dgczs6iBvNx%2Fpu8Ms6OfC2fr%2FTmFUGxC8jOjcNaldj7dcXm3K%2B39geiAtJRYopJfSRJGSjkWzFjY4E9phTLjMlGnqK%2BSe4sCC8tazlVifdJamIkwfbu4%2B%2FuUBVlclHZ%2FD07xs1Qk1XIbjFbTcBULDBbLmYSjiQslUg2c5RhoLW2tEC6%2FjlYPM36BTJAh1JhBs74xTDESXguVnC8Ho4XL1U%2BslcJBNfhYtuN8wr8LNvQY6pgHIRYE2Luc%2F1DKoRZFRDiwpxmLZMD%2By4GaXONz42sse7lksIZehmX1l%2FCnTyl95QRTDtwsujVQpb2M7Ouu10ePgYHM4rH%2BfXHANBUCC%2BqETp2R1EIV2zYe2aVCXIiLnAud1yVNqixQE6L5G4I6Gv23tguvu%2FqxfSl5Mmy%2B5u5rQsGRDimmLlP9NKMaTjhG2lUsUHgUzjnaNv%2Boq4j%2FdIM571R0aBU9s&X-Amz-Signature=69c63d15ca51bbe2197499ff7ebe8b624a72efc09d1112d53727da27f9b8c07e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBKQW6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHZYOrrLNDUyZOmQKzgLQo5TfbXz4PFUTl35%2Bb9akl%2BxAiAGHpzsflYmRgBxZ91xOQVUY8Y6DTZjgTKu4Ai%2F%2BRdMWyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM61e6iUyTekW1neUJKtwDB%2FtbM9sCSmfvLbTP%2BA074uqXNnHmgBbiPVm4flS2ho9lUd7fHrjdiQTtac4Efk05HPEn%2Bjq6liyW679%2BN3k%2Fv9VjrGxBp6ARpXGlm3z2IXGeoG%2FGQIWiBA5RDd22cMT%2Fq6tqAy5MTtZ9uMdxU1NIP8gbYPHRXOmKFOaHqUYABP1KC40%2BQAgl82jkxy%2BSS8wRdgFWYWsShV%2BTcMA9B3wDkbEdlXr3DmLMZGb6Vf7QNGIE4e%2F5EX4akRQPR0Ynf%2FZU4d%2FpnepHAzHPGRjLdQsSDN%2FSP%2FyotLR%2FTqV6GPTDBjwo%2BwLuFUwAQZc32pFlAEE08qBaCz2ABFBOskK86wc9PAGtwqFXYFgAGzz2Vy%2B4BpzsqeYn3uhO5UX8U5Fpu9s1QXxHYnnBKnk0CJgVkvi%2Bn%2F2dgczs6iBvNx%2Fpu8Ms6OfC2fr%2FTmFUGxC8jOjcNaldj7dcXm3K%2B39geiAtJRYopJfSRJGSjkWzFjY4E9phTLjMlGnqK%2BSe4sCC8tazlVifdJamIkwfbu4%2B%2FuUBVlclHZ%2FD07xs1Qk1XIbjFbTcBULDBbLmYSjiQslUg2c5RhoLW2tEC6%2FjlYPM36BTJAh1JhBs74xTDESXguVnC8Ho4XL1U%2BslcJBNfhYtuN8wr8LNvQY6pgHIRYE2Luc%2F1DKoRZFRDiwpxmLZMD%2By4GaXONz42sse7lksIZehmX1l%2FCnTyl95QRTDtwsujVQpb2M7Ouu10ePgYHM4rH%2BfXHANBUCC%2BqETp2R1EIV2zYe2aVCXIiLnAud1yVNqixQE6L5G4I6Gv23tguvu%2FqxfSl5Mmy%2B5u5rQsGRDimmLlP9NKMaTjhG2lUsUHgUzjnaNv%2Boq4j%2FdIM571R0aBU9s&X-Amz-Signature=228bfb01594f0c5a9d51161bf714f2af10e06102f6c78a1338f5c2d1e6e67040&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBKQW6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHZYOrrLNDUyZOmQKzgLQo5TfbXz4PFUTl35%2Bb9akl%2BxAiAGHpzsflYmRgBxZ91xOQVUY8Y6DTZjgTKu4Ai%2F%2BRdMWyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM61e6iUyTekW1neUJKtwDB%2FtbM9sCSmfvLbTP%2BA074uqXNnHmgBbiPVm4flS2ho9lUd7fHrjdiQTtac4Efk05HPEn%2Bjq6liyW679%2BN3k%2Fv9VjrGxBp6ARpXGlm3z2IXGeoG%2FGQIWiBA5RDd22cMT%2Fq6tqAy5MTtZ9uMdxU1NIP8gbYPHRXOmKFOaHqUYABP1KC40%2BQAgl82jkxy%2BSS8wRdgFWYWsShV%2BTcMA9B3wDkbEdlXr3DmLMZGb6Vf7QNGIE4e%2F5EX4akRQPR0Ynf%2FZU4d%2FpnepHAzHPGRjLdQsSDN%2FSP%2FyotLR%2FTqV6GPTDBjwo%2BwLuFUwAQZc32pFlAEE08qBaCz2ABFBOskK86wc9PAGtwqFXYFgAGzz2Vy%2B4BpzsqeYn3uhO5UX8U5Fpu9s1QXxHYnnBKnk0CJgVkvi%2Bn%2F2dgczs6iBvNx%2Fpu8Ms6OfC2fr%2FTmFUGxC8jOjcNaldj7dcXm3K%2B39geiAtJRYopJfSRJGSjkWzFjY4E9phTLjMlGnqK%2BSe4sCC8tazlVifdJamIkwfbu4%2B%2FuUBVlclHZ%2FD07xs1Qk1XIbjFbTcBULDBbLmYSjiQslUg2c5RhoLW2tEC6%2FjlYPM36BTJAh1JhBs74xTDESXguVnC8Ho4XL1U%2BslcJBNfhYtuN8wr8LNvQY6pgHIRYE2Luc%2F1DKoRZFRDiwpxmLZMD%2By4GaXONz42sse7lksIZehmX1l%2FCnTyl95QRTDtwsujVQpb2M7Ouu10ePgYHM4rH%2BfXHANBUCC%2BqETp2R1EIV2zYe2aVCXIiLnAud1yVNqixQE6L5G4I6Gv23tguvu%2FqxfSl5Mmy%2B5u5rQsGRDimmLlP9NKMaTjhG2lUsUHgUzjnaNv%2Boq4j%2FdIM571R0aBU9s&X-Amz-Signature=bf2c22aaa5d0426cddecf3e737ce45c23aee822dcb3e17b9114985bfba06535c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
