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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCUEXSS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDrI5qQFGQvS09m9BGPhnh1ZTuvbjbJF4Eyr%2F1H4LQPKgIgUb2G6TlC8KGYSw6UHlDsyPtu%2FZN0kyo3%2Bm%2BLI%2Ba95IYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZtg6lBK21lceBDwircA8dNcuguy6x3km2wigUyQRFrxSImv1MQeg4e0eAEw1Bc%2FOuSuA73%2FYzZMcnKUhx2VkD8WCZYI5gfoP%2FhK11M%2FXPGVVYK5qDaqeDhJkubHooYN4ZZSk2x5Xoqri0epWZEdE3Ila2ZkJF0XUM5hmIa1dH9%2Fnxeu%2B1k8OMYO3sKeRhWR8gHzJ7FUODLO1zjhH5ZS%2Bkufj%2FcSdzYSKsIewMdKJ3JIpKILdLEuh414KwpT7%2FykUiVFUb%2FVTqSeZBxvjwyVhR8%2B%2FcJCwGEkJmX58PNRgEq2csiGuY5yNa8a0AA7ah%2FUZj2%2BXULF9ODlXCReVy%2BeQykr%2BzlNauNo8Ter3Y04x4dyNoTns5Y2bLHtWbbjBhrZRBEeR0Ye7je6hT9vENuqEp0T2vICVcgNq4ASSNJLGVd2nrgpzNO5fFGUCWimCn%2BkP7mvz9s%2B0TDCnHaivCp8wGxn7cp8pu1rzczCvBEoHBdkv2oxCXJQIC6gS5poQsni1sLpEqtGLR8r1eSqdlmShJjIx%2BXpNwXsroD%2FO6TpzGIRHckl2tYrCoigmUEj2nzTzZKZwtDX%2FCBUQLJyC5gX6yxWvjLO00VgTUj%2BDE2GLPcb910GzrDCLtgbW5Toeh1rQU9xr%2BQJEcmJrwUMPzu%2B74GOqUBwbwhHuYSSrGjsqsZsR20VbwVXfCWmuQHpt4fTYyuWboMT0Z8eG%2F3wen9gQztt9Z2o83vniEPIR1%2FaHhPEQ4QrKKJ7Rfu7V2P9%2B3wSiBBLd1KlDPAT5818rOMJKxvlxcIPMJ8%2FxD5l05mQqV%2B9JzDavbUqvpxmIOJ9xba3OoqVfVNrTcegdUEPhyMPdgGTt8AtMSPmv0j8yLdnC%2BFb%2F5RPzkdWzvU&X-Amz-Signature=79479d05b4bbf5753a35048269de5ffb052f2896fc3a74ec1cc127dab5243d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCUEXSS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDrI5qQFGQvS09m9BGPhnh1ZTuvbjbJF4Eyr%2F1H4LQPKgIgUb2G6TlC8KGYSw6UHlDsyPtu%2FZN0kyo3%2Bm%2BLI%2Ba95IYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZtg6lBK21lceBDwircA8dNcuguy6x3km2wigUyQRFrxSImv1MQeg4e0eAEw1Bc%2FOuSuA73%2FYzZMcnKUhx2VkD8WCZYI5gfoP%2FhK11M%2FXPGVVYK5qDaqeDhJkubHooYN4ZZSk2x5Xoqri0epWZEdE3Ila2ZkJF0XUM5hmIa1dH9%2Fnxeu%2B1k8OMYO3sKeRhWR8gHzJ7FUODLO1zjhH5ZS%2Bkufj%2FcSdzYSKsIewMdKJ3JIpKILdLEuh414KwpT7%2FykUiVFUb%2FVTqSeZBxvjwyVhR8%2B%2FcJCwGEkJmX58PNRgEq2csiGuY5yNa8a0AA7ah%2FUZj2%2BXULF9ODlXCReVy%2BeQykr%2BzlNauNo8Ter3Y04x4dyNoTns5Y2bLHtWbbjBhrZRBEeR0Ye7je6hT9vENuqEp0T2vICVcgNq4ASSNJLGVd2nrgpzNO5fFGUCWimCn%2BkP7mvz9s%2B0TDCnHaivCp8wGxn7cp8pu1rzczCvBEoHBdkv2oxCXJQIC6gS5poQsni1sLpEqtGLR8r1eSqdlmShJjIx%2BXpNwXsroD%2FO6TpzGIRHckl2tYrCoigmUEj2nzTzZKZwtDX%2FCBUQLJyC5gX6yxWvjLO00VgTUj%2BDE2GLPcb910GzrDCLtgbW5Toeh1rQU9xr%2BQJEcmJrwUMPzu%2B74GOqUBwbwhHuYSSrGjsqsZsR20VbwVXfCWmuQHpt4fTYyuWboMT0Z8eG%2F3wen9gQztt9Z2o83vniEPIR1%2FaHhPEQ4QrKKJ7Rfu7V2P9%2B3wSiBBLd1KlDPAT5818rOMJKxvlxcIPMJ8%2FxD5l05mQqV%2B9JzDavbUqvpxmIOJ9xba3OoqVfVNrTcegdUEPhyMPdgGTt8AtMSPmv0j8yLdnC%2BFb%2F5RPzkdWzvU&X-Amz-Signature=0eceb0f8babf86e666ade6290e3d79dc6b90c0549d140c2bcf8586772ee1dbec&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCUEXSS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDrI5qQFGQvS09m9BGPhnh1ZTuvbjbJF4Eyr%2F1H4LQPKgIgUb2G6TlC8KGYSw6UHlDsyPtu%2FZN0kyo3%2Bm%2BLI%2Ba95IYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZtg6lBK21lceBDwircA8dNcuguy6x3km2wigUyQRFrxSImv1MQeg4e0eAEw1Bc%2FOuSuA73%2FYzZMcnKUhx2VkD8WCZYI5gfoP%2FhK11M%2FXPGVVYK5qDaqeDhJkubHooYN4ZZSk2x5Xoqri0epWZEdE3Ila2ZkJF0XUM5hmIa1dH9%2Fnxeu%2B1k8OMYO3sKeRhWR8gHzJ7FUODLO1zjhH5ZS%2Bkufj%2FcSdzYSKsIewMdKJ3JIpKILdLEuh414KwpT7%2FykUiVFUb%2FVTqSeZBxvjwyVhR8%2B%2FcJCwGEkJmX58PNRgEq2csiGuY5yNa8a0AA7ah%2FUZj2%2BXULF9ODlXCReVy%2BeQykr%2BzlNauNo8Ter3Y04x4dyNoTns5Y2bLHtWbbjBhrZRBEeR0Ye7je6hT9vENuqEp0T2vICVcgNq4ASSNJLGVd2nrgpzNO5fFGUCWimCn%2BkP7mvz9s%2B0TDCnHaivCp8wGxn7cp8pu1rzczCvBEoHBdkv2oxCXJQIC6gS5poQsni1sLpEqtGLR8r1eSqdlmShJjIx%2BXpNwXsroD%2FO6TpzGIRHckl2tYrCoigmUEj2nzTzZKZwtDX%2FCBUQLJyC5gX6yxWvjLO00VgTUj%2BDE2GLPcb910GzrDCLtgbW5Toeh1rQU9xr%2BQJEcmJrwUMPzu%2B74GOqUBwbwhHuYSSrGjsqsZsR20VbwVXfCWmuQHpt4fTYyuWboMT0Z8eG%2F3wen9gQztt9Z2o83vniEPIR1%2FaHhPEQ4QrKKJ7Rfu7V2P9%2B3wSiBBLd1KlDPAT5818rOMJKxvlxcIPMJ8%2FxD5l05mQqV%2B9JzDavbUqvpxmIOJ9xba3OoqVfVNrTcegdUEPhyMPdgGTt8AtMSPmv0j8yLdnC%2BFb%2F5RPzkdWzvU&X-Amz-Signature=6473ad3c6b870b1cdd7f9115a8bf04ceb3f9025605ff433246748066ad3c526b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCUEXSS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDrI5qQFGQvS09m9BGPhnh1ZTuvbjbJF4Eyr%2F1H4LQPKgIgUb2G6TlC8KGYSw6UHlDsyPtu%2FZN0kyo3%2Bm%2BLI%2Ba95IYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZtg6lBK21lceBDwircA8dNcuguy6x3km2wigUyQRFrxSImv1MQeg4e0eAEw1Bc%2FOuSuA73%2FYzZMcnKUhx2VkD8WCZYI5gfoP%2FhK11M%2FXPGVVYK5qDaqeDhJkubHooYN4ZZSk2x5Xoqri0epWZEdE3Ila2ZkJF0XUM5hmIa1dH9%2Fnxeu%2B1k8OMYO3sKeRhWR8gHzJ7FUODLO1zjhH5ZS%2Bkufj%2FcSdzYSKsIewMdKJ3JIpKILdLEuh414KwpT7%2FykUiVFUb%2FVTqSeZBxvjwyVhR8%2B%2FcJCwGEkJmX58PNRgEq2csiGuY5yNa8a0AA7ah%2FUZj2%2BXULF9ODlXCReVy%2BeQykr%2BzlNauNo8Ter3Y04x4dyNoTns5Y2bLHtWbbjBhrZRBEeR0Ye7je6hT9vENuqEp0T2vICVcgNq4ASSNJLGVd2nrgpzNO5fFGUCWimCn%2BkP7mvz9s%2B0TDCnHaivCp8wGxn7cp8pu1rzczCvBEoHBdkv2oxCXJQIC6gS5poQsni1sLpEqtGLR8r1eSqdlmShJjIx%2BXpNwXsroD%2FO6TpzGIRHckl2tYrCoigmUEj2nzTzZKZwtDX%2FCBUQLJyC5gX6yxWvjLO00VgTUj%2BDE2GLPcb910GzrDCLtgbW5Toeh1rQU9xr%2BQJEcmJrwUMPzu%2B74GOqUBwbwhHuYSSrGjsqsZsR20VbwVXfCWmuQHpt4fTYyuWboMT0Z8eG%2F3wen9gQztt9Z2o83vniEPIR1%2FaHhPEQ4QrKKJ7Rfu7V2P9%2B3wSiBBLd1KlDPAT5818rOMJKxvlxcIPMJ8%2FxD5l05mQqV%2B9JzDavbUqvpxmIOJ9xba3OoqVfVNrTcegdUEPhyMPdgGTt8AtMSPmv0j8yLdnC%2BFb%2F5RPzkdWzvU&X-Amz-Signature=79c1b0953a5b42b6eb0d95ecc94ec14c5314a4f8ef31c78e3a33d9939998633f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCUEXSS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDrI5qQFGQvS09m9BGPhnh1ZTuvbjbJF4Eyr%2F1H4LQPKgIgUb2G6TlC8KGYSw6UHlDsyPtu%2FZN0kyo3%2Bm%2BLI%2Ba95IYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZtg6lBK21lceBDwircA8dNcuguy6x3km2wigUyQRFrxSImv1MQeg4e0eAEw1Bc%2FOuSuA73%2FYzZMcnKUhx2VkD8WCZYI5gfoP%2FhK11M%2FXPGVVYK5qDaqeDhJkubHooYN4ZZSk2x5Xoqri0epWZEdE3Ila2ZkJF0XUM5hmIa1dH9%2Fnxeu%2B1k8OMYO3sKeRhWR8gHzJ7FUODLO1zjhH5ZS%2Bkufj%2FcSdzYSKsIewMdKJ3JIpKILdLEuh414KwpT7%2FykUiVFUb%2FVTqSeZBxvjwyVhR8%2B%2FcJCwGEkJmX58PNRgEq2csiGuY5yNa8a0AA7ah%2FUZj2%2BXULF9ODlXCReVy%2BeQykr%2BzlNauNo8Ter3Y04x4dyNoTns5Y2bLHtWbbjBhrZRBEeR0Ye7je6hT9vENuqEp0T2vICVcgNq4ASSNJLGVd2nrgpzNO5fFGUCWimCn%2BkP7mvz9s%2B0TDCnHaivCp8wGxn7cp8pu1rzczCvBEoHBdkv2oxCXJQIC6gS5poQsni1sLpEqtGLR8r1eSqdlmShJjIx%2BXpNwXsroD%2FO6TpzGIRHckl2tYrCoigmUEj2nzTzZKZwtDX%2FCBUQLJyC5gX6yxWvjLO00VgTUj%2BDE2GLPcb910GzrDCLtgbW5Toeh1rQU9xr%2BQJEcmJrwUMPzu%2B74GOqUBwbwhHuYSSrGjsqsZsR20VbwVXfCWmuQHpt4fTYyuWboMT0Z8eG%2F3wen9gQztt9Z2o83vniEPIR1%2FaHhPEQ4QrKKJ7Rfu7V2P9%2B3wSiBBLd1KlDPAT5818rOMJKxvlxcIPMJ8%2FxD5l05mQqV%2B9JzDavbUqvpxmIOJ9xba3OoqVfVNrTcegdUEPhyMPdgGTt8AtMSPmv0j8yLdnC%2BFb%2F5RPzkdWzvU&X-Amz-Signature=fe60b575f7e06412c28cb680d58a6be6a0f19766955b2a49be193b9056498d27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCUEXSS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDrI5qQFGQvS09m9BGPhnh1ZTuvbjbJF4Eyr%2F1H4LQPKgIgUb2G6TlC8KGYSw6UHlDsyPtu%2FZN0kyo3%2Bm%2BLI%2Ba95IYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZtg6lBK21lceBDwircA8dNcuguy6x3km2wigUyQRFrxSImv1MQeg4e0eAEw1Bc%2FOuSuA73%2FYzZMcnKUhx2VkD8WCZYI5gfoP%2FhK11M%2FXPGVVYK5qDaqeDhJkubHooYN4ZZSk2x5Xoqri0epWZEdE3Ila2ZkJF0XUM5hmIa1dH9%2Fnxeu%2B1k8OMYO3sKeRhWR8gHzJ7FUODLO1zjhH5ZS%2Bkufj%2FcSdzYSKsIewMdKJ3JIpKILdLEuh414KwpT7%2FykUiVFUb%2FVTqSeZBxvjwyVhR8%2B%2FcJCwGEkJmX58PNRgEq2csiGuY5yNa8a0AA7ah%2FUZj2%2BXULF9ODlXCReVy%2BeQykr%2BzlNauNo8Ter3Y04x4dyNoTns5Y2bLHtWbbjBhrZRBEeR0Ye7je6hT9vENuqEp0T2vICVcgNq4ASSNJLGVd2nrgpzNO5fFGUCWimCn%2BkP7mvz9s%2B0TDCnHaivCp8wGxn7cp8pu1rzczCvBEoHBdkv2oxCXJQIC6gS5poQsni1sLpEqtGLR8r1eSqdlmShJjIx%2BXpNwXsroD%2FO6TpzGIRHckl2tYrCoigmUEj2nzTzZKZwtDX%2FCBUQLJyC5gX6yxWvjLO00VgTUj%2BDE2GLPcb910GzrDCLtgbW5Toeh1rQU9xr%2BQJEcmJrwUMPzu%2B74GOqUBwbwhHuYSSrGjsqsZsR20VbwVXfCWmuQHpt4fTYyuWboMT0Z8eG%2F3wen9gQztt9Z2o83vniEPIR1%2FaHhPEQ4QrKKJ7Rfu7V2P9%2B3wSiBBLd1KlDPAT5818rOMJKxvlxcIPMJ8%2FxD5l05mQqV%2B9JzDavbUqvpxmIOJ9xba3OoqVfVNrTcegdUEPhyMPdgGTt8AtMSPmv0j8yLdnC%2BFb%2F5RPzkdWzvU&X-Amz-Signature=a90d7515ea2cfa0722d72a13982cce73eb502ff58d7684778b1197d47dc8e989&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCUEXSS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDrI5qQFGQvS09m9BGPhnh1ZTuvbjbJF4Eyr%2F1H4LQPKgIgUb2G6TlC8KGYSw6UHlDsyPtu%2FZN0kyo3%2Bm%2BLI%2Ba95IYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZtg6lBK21lceBDwircA8dNcuguy6x3km2wigUyQRFrxSImv1MQeg4e0eAEw1Bc%2FOuSuA73%2FYzZMcnKUhx2VkD8WCZYI5gfoP%2FhK11M%2FXPGVVYK5qDaqeDhJkubHooYN4ZZSk2x5Xoqri0epWZEdE3Ila2ZkJF0XUM5hmIa1dH9%2Fnxeu%2B1k8OMYO3sKeRhWR8gHzJ7FUODLO1zjhH5ZS%2Bkufj%2FcSdzYSKsIewMdKJ3JIpKILdLEuh414KwpT7%2FykUiVFUb%2FVTqSeZBxvjwyVhR8%2B%2FcJCwGEkJmX58PNRgEq2csiGuY5yNa8a0AA7ah%2FUZj2%2BXULF9ODlXCReVy%2BeQykr%2BzlNauNo8Ter3Y04x4dyNoTns5Y2bLHtWbbjBhrZRBEeR0Ye7je6hT9vENuqEp0T2vICVcgNq4ASSNJLGVd2nrgpzNO5fFGUCWimCn%2BkP7mvz9s%2B0TDCnHaivCp8wGxn7cp8pu1rzczCvBEoHBdkv2oxCXJQIC6gS5poQsni1sLpEqtGLR8r1eSqdlmShJjIx%2BXpNwXsroD%2FO6TpzGIRHckl2tYrCoigmUEj2nzTzZKZwtDX%2FCBUQLJyC5gX6yxWvjLO00VgTUj%2BDE2GLPcb910GzrDCLtgbW5Toeh1rQU9xr%2BQJEcmJrwUMPzu%2B74GOqUBwbwhHuYSSrGjsqsZsR20VbwVXfCWmuQHpt4fTYyuWboMT0Z8eG%2F3wen9gQztt9Z2o83vniEPIR1%2FaHhPEQ4QrKKJ7Rfu7V2P9%2B3wSiBBLd1KlDPAT5818rOMJKxvlxcIPMJ8%2FxD5l05mQqV%2B9JzDavbUqvpxmIOJ9xba3OoqVfVNrTcegdUEPhyMPdgGTt8AtMSPmv0j8yLdnC%2BFb%2F5RPzkdWzvU&X-Amz-Signature=b598b113e2db1f97c59ab8be480f8cd88d4950218f41beda1e9e150b0425217b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCUEXSS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDrI5qQFGQvS09m9BGPhnh1ZTuvbjbJF4Eyr%2F1H4LQPKgIgUb2G6TlC8KGYSw6UHlDsyPtu%2FZN0kyo3%2Bm%2BLI%2Ba95IYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZtg6lBK21lceBDwircA8dNcuguy6x3km2wigUyQRFrxSImv1MQeg4e0eAEw1Bc%2FOuSuA73%2FYzZMcnKUhx2VkD8WCZYI5gfoP%2FhK11M%2FXPGVVYK5qDaqeDhJkubHooYN4ZZSk2x5Xoqri0epWZEdE3Ila2ZkJF0XUM5hmIa1dH9%2Fnxeu%2B1k8OMYO3sKeRhWR8gHzJ7FUODLO1zjhH5ZS%2Bkufj%2FcSdzYSKsIewMdKJ3JIpKILdLEuh414KwpT7%2FykUiVFUb%2FVTqSeZBxvjwyVhR8%2B%2FcJCwGEkJmX58PNRgEq2csiGuY5yNa8a0AA7ah%2FUZj2%2BXULF9ODlXCReVy%2BeQykr%2BzlNauNo8Ter3Y04x4dyNoTns5Y2bLHtWbbjBhrZRBEeR0Ye7je6hT9vENuqEp0T2vICVcgNq4ASSNJLGVd2nrgpzNO5fFGUCWimCn%2BkP7mvz9s%2B0TDCnHaivCp8wGxn7cp8pu1rzczCvBEoHBdkv2oxCXJQIC6gS5poQsni1sLpEqtGLR8r1eSqdlmShJjIx%2BXpNwXsroD%2FO6TpzGIRHckl2tYrCoigmUEj2nzTzZKZwtDX%2FCBUQLJyC5gX6yxWvjLO00VgTUj%2BDE2GLPcb910GzrDCLtgbW5Toeh1rQU9xr%2BQJEcmJrwUMPzu%2B74GOqUBwbwhHuYSSrGjsqsZsR20VbwVXfCWmuQHpt4fTYyuWboMT0Z8eG%2F3wen9gQztt9Z2o83vniEPIR1%2FaHhPEQ4QrKKJ7Rfu7V2P9%2B3wSiBBLd1KlDPAT5818rOMJKxvlxcIPMJ8%2FxD5l05mQqV%2B9JzDavbUqvpxmIOJ9xba3OoqVfVNrTcegdUEPhyMPdgGTt8AtMSPmv0j8yLdnC%2BFb%2F5RPzkdWzvU&X-Amz-Signature=ab181e1089af6b6ea013c1ccb8169afdb0431e76a49d03027383a2c9b123e85d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
