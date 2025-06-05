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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPXC63H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCD%2Bfsc6EnuZZ3CvjUvDDqN74%2FLtTgceCARAxcaHvAlSwIhALkFjRqGfuuzXPqBaKSZXXGmSO7QOYJk2bdAwHPaMXpxKv8DCD0QABoMNjM3NDIzMTgzODA1IgzzmK0i5l98am%2Fn2bkq3ANooL49PC4o2%2FfP3rK9mi4eXqwk4I2tpXfkIvpMejzojnyILY1mYlJlhrxMoRQ2C7fRxBAJtzCQaj5VTzlH3WFgLURGheRUlxd%2Bz3PBsMcdBa8ea8VqZRV%2Fl%2FmIsCU65hQ%2FA3UWUojcvfT0wrWOuuEbkz%2BV%2Fi0ISYjvAQMKJMvv%2Fg%2Bd7GfC%2B8igUvaFIFX0B4QRprxHTp55EiSH4RVualyP2ya6XtGmrxxfcB1tEwmNFli5cBQg27n%2BzTX%2BeeDI5roSwnnjtz6i%2FNqz%2BJmqCJfBnJwTxN0J5zefiZ0UdIOuw%2B2ThT3tt8%2FCaLRU%2Bylos7eHtSR%2BZin8tgM53oVQkyTmZXJZAM%2BVRpI6m4ciuvbCCpOxkDx9DhikgOtlYcCE8gHBNkEk5F9CYKgX1N6g%2F61PPvvuUekZmoov3WPUfhn5Z%2BOUqijzoX44%2Fm5dk%2F9CVRXDkiOdBo31qTp6lng%2BxA%2FQbiYqUUIUAMo19Yq5OLno17rxRo%2BOgJpbotZ%2BOYhybrU2d2WiXPOdljK1g8TRFl6fFPvgx%2ByysAH8lxbRIFwu%2BsxZ9cv3M%2FOaJCQj8MHJJ0haAQ26ylbAKzsgobOl35h5x268COamoGgeze1wPZAaayGUJyVmfGExJQTeBTDYpoTCBjqkAVETVYf5bBTJfQY7hhQA0i3zj0K00zV49zBbD4S0Menoc4EYtxPyDtBdBzqcYX9UljwM7qsmG%2BTwA9fwW%2BCcBHq%2FDFrwf4QvQtCon2j2u79rdNAiH%2BBq99AZ8pxds33dGXCyj9%2BvMcw%2F1tLkES0RPLu3bCEbKX4Ij4DHHQY957urVg44%2B%2FP%2Bq1a9FklUjxDdJTrt70MISS%2Feh9bJpxDE9xTSUM5o&X-Amz-Signature=4c4ffdecb632ec972e5d3e1ce2dbf5a11bd068821cdab5728dd113dca6b462a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPXC63H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCD%2Bfsc6EnuZZ3CvjUvDDqN74%2FLtTgceCARAxcaHvAlSwIhALkFjRqGfuuzXPqBaKSZXXGmSO7QOYJk2bdAwHPaMXpxKv8DCD0QABoMNjM3NDIzMTgzODA1IgzzmK0i5l98am%2Fn2bkq3ANooL49PC4o2%2FfP3rK9mi4eXqwk4I2tpXfkIvpMejzojnyILY1mYlJlhrxMoRQ2C7fRxBAJtzCQaj5VTzlH3WFgLURGheRUlxd%2Bz3PBsMcdBa8ea8VqZRV%2Fl%2FmIsCU65hQ%2FA3UWUojcvfT0wrWOuuEbkz%2BV%2Fi0ISYjvAQMKJMvv%2Fg%2Bd7GfC%2B8igUvaFIFX0B4QRprxHTp55EiSH4RVualyP2ya6XtGmrxxfcB1tEwmNFli5cBQg27n%2BzTX%2BeeDI5roSwnnjtz6i%2FNqz%2BJmqCJfBnJwTxN0J5zefiZ0UdIOuw%2B2ThT3tt8%2FCaLRU%2Bylos7eHtSR%2BZin8tgM53oVQkyTmZXJZAM%2BVRpI6m4ciuvbCCpOxkDx9DhikgOtlYcCE8gHBNkEk5F9CYKgX1N6g%2F61PPvvuUekZmoov3WPUfhn5Z%2BOUqijzoX44%2Fm5dk%2F9CVRXDkiOdBo31qTp6lng%2BxA%2FQbiYqUUIUAMo19Yq5OLno17rxRo%2BOgJpbotZ%2BOYhybrU2d2WiXPOdljK1g8TRFl6fFPvgx%2ByysAH8lxbRIFwu%2BsxZ9cv3M%2FOaJCQj8MHJJ0haAQ26ylbAKzsgobOl35h5x268COamoGgeze1wPZAaayGUJyVmfGExJQTeBTDYpoTCBjqkAVETVYf5bBTJfQY7hhQA0i3zj0K00zV49zBbD4S0Menoc4EYtxPyDtBdBzqcYX9UljwM7qsmG%2BTwA9fwW%2BCcBHq%2FDFrwf4QvQtCon2j2u79rdNAiH%2BBq99AZ8pxds33dGXCyj9%2BvMcw%2F1tLkES0RPLu3bCEbKX4Ij4DHHQY957urVg44%2B%2FP%2Bq1a9FklUjxDdJTrt70MISS%2Feh9bJpxDE9xTSUM5o&X-Amz-Signature=1422cc87ee1d0f37f640bc602191b470141f26562c7101b2b2da01dcffe5a5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPXC63H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCD%2Bfsc6EnuZZ3CvjUvDDqN74%2FLtTgceCARAxcaHvAlSwIhALkFjRqGfuuzXPqBaKSZXXGmSO7QOYJk2bdAwHPaMXpxKv8DCD0QABoMNjM3NDIzMTgzODA1IgzzmK0i5l98am%2Fn2bkq3ANooL49PC4o2%2FfP3rK9mi4eXqwk4I2tpXfkIvpMejzojnyILY1mYlJlhrxMoRQ2C7fRxBAJtzCQaj5VTzlH3WFgLURGheRUlxd%2Bz3PBsMcdBa8ea8VqZRV%2Fl%2FmIsCU65hQ%2FA3UWUojcvfT0wrWOuuEbkz%2BV%2Fi0ISYjvAQMKJMvv%2Fg%2Bd7GfC%2B8igUvaFIFX0B4QRprxHTp55EiSH4RVualyP2ya6XtGmrxxfcB1tEwmNFli5cBQg27n%2BzTX%2BeeDI5roSwnnjtz6i%2FNqz%2BJmqCJfBnJwTxN0J5zefiZ0UdIOuw%2B2ThT3tt8%2FCaLRU%2Bylos7eHtSR%2BZin8tgM53oVQkyTmZXJZAM%2BVRpI6m4ciuvbCCpOxkDx9DhikgOtlYcCE8gHBNkEk5F9CYKgX1N6g%2F61PPvvuUekZmoov3WPUfhn5Z%2BOUqijzoX44%2Fm5dk%2F9CVRXDkiOdBo31qTp6lng%2BxA%2FQbiYqUUIUAMo19Yq5OLno17rxRo%2BOgJpbotZ%2BOYhybrU2d2WiXPOdljK1g8TRFl6fFPvgx%2ByysAH8lxbRIFwu%2BsxZ9cv3M%2FOaJCQj8MHJJ0haAQ26ylbAKzsgobOl35h5x268COamoGgeze1wPZAaayGUJyVmfGExJQTeBTDYpoTCBjqkAVETVYf5bBTJfQY7hhQA0i3zj0K00zV49zBbD4S0Menoc4EYtxPyDtBdBzqcYX9UljwM7qsmG%2BTwA9fwW%2BCcBHq%2FDFrwf4QvQtCon2j2u79rdNAiH%2BBq99AZ8pxds33dGXCyj9%2BvMcw%2F1tLkES0RPLu3bCEbKX4Ij4DHHQY957urVg44%2B%2FP%2Bq1a9FklUjxDdJTrt70MISS%2Feh9bJpxDE9xTSUM5o&X-Amz-Signature=f49e622bd095b5541ce2d921c86d032da42f2b9111e419a91b57e7e779bc6851&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPXC63H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCD%2Bfsc6EnuZZ3CvjUvDDqN74%2FLtTgceCARAxcaHvAlSwIhALkFjRqGfuuzXPqBaKSZXXGmSO7QOYJk2bdAwHPaMXpxKv8DCD0QABoMNjM3NDIzMTgzODA1IgzzmK0i5l98am%2Fn2bkq3ANooL49PC4o2%2FfP3rK9mi4eXqwk4I2tpXfkIvpMejzojnyILY1mYlJlhrxMoRQ2C7fRxBAJtzCQaj5VTzlH3WFgLURGheRUlxd%2Bz3PBsMcdBa8ea8VqZRV%2Fl%2FmIsCU65hQ%2FA3UWUojcvfT0wrWOuuEbkz%2BV%2Fi0ISYjvAQMKJMvv%2Fg%2Bd7GfC%2B8igUvaFIFX0B4QRprxHTp55EiSH4RVualyP2ya6XtGmrxxfcB1tEwmNFli5cBQg27n%2BzTX%2BeeDI5roSwnnjtz6i%2FNqz%2BJmqCJfBnJwTxN0J5zefiZ0UdIOuw%2B2ThT3tt8%2FCaLRU%2Bylos7eHtSR%2BZin8tgM53oVQkyTmZXJZAM%2BVRpI6m4ciuvbCCpOxkDx9DhikgOtlYcCE8gHBNkEk5F9CYKgX1N6g%2F61PPvvuUekZmoov3WPUfhn5Z%2BOUqijzoX44%2Fm5dk%2F9CVRXDkiOdBo31qTp6lng%2BxA%2FQbiYqUUIUAMo19Yq5OLno17rxRo%2BOgJpbotZ%2BOYhybrU2d2WiXPOdljK1g8TRFl6fFPvgx%2ByysAH8lxbRIFwu%2BsxZ9cv3M%2FOaJCQj8MHJJ0haAQ26ylbAKzsgobOl35h5x268COamoGgeze1wPZAaayGUJyVmfGExJQTeBTDYpoTCBjqkAVETVYf5bBTJfQY7hhQA0i3zj0K00zV49zBbD4S0Menoc4EYtxPyDtBdBzqcYX9UljwM7qsmG%2BTwA9fwW%2BCcBHq%2FDFrwf4QvQtCon2j2u79rdNAiH%2BBq99AZ8pxds33dGXCyj9%2BvMcw%2F1tLkES0RPLu3bCEbKX4Ij4DHHQY957urVg44%2B%2FP%2Bq1a9FklUjxDdJTrt70MISS%2Feh9bJpxDE9xTSUM5o&X-Amz-Signature=6ec7af00a60c2e78d034ff0e683c7a838691b34f3dbeef2077e802d92d88c48f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPXC63H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCD%2Bfsc6EnuZZ3CvjUvDDqN74%2FLtTgceCARAxcaHvAlSwIhALkFjRqGfuuzXPqBaKSZXXGmSO7QOYJk2bdAwHPaMXpxKv8DCD0QABoMNjM3NDIzMTgzODA1IgzzmK0i5l98am%2Fn2bkq3ANooL49PC4o2%2FfP3rK9mi4eXqwk4I2tpXfkIvpMejzojnyILY1mYlJlhrxMoRQ2C7fRxBAJtzCQaj5VTzlH3WFgLURGheRUlxd%2Bz3PBsMcdBa8ea8VqZRV%2Fl%2FmIsCU65hQ%2FA3UWUojcvfT0wrWOuuEbkz%2BV%2Fi0ISYjvAQMKJMvv%2Fg%2Bd7GfC%2B8igUvaFIFX0B4QRprxHTp55EiSH4RVualyP2ya6XtGmrxxfcB1tEwmNFli5cBQg27n%2BzTX%2BeeDI5roSwnnjtz6i%2FNqz%2BJmqCJfBnJwTxN0J5zefiZ0UdIOuw%2B2ThT3tt8%2FCaLRU%2Bylos7eHtSR%2BZin8tgM53oVQkyTmZXJZAM%2BVRpI6m4ciuvbCCpOxkDx9DhikgOtlYcCE8gHBNkEk5F9CYKgX1N6g%2F61PPvvuUekZmoov3WPUfhn5Z%2BOUqijzoX44%2Fm5dk%2F9CVRXDkiOdBo31qTp6lng%2BxA%2FQbiYqUUIUAMo19Yq5OLno17rxRo%2BOgJpbotZ%2BOYhybrU2d2WiXPOdljK1g8TRFl6fFPvgx%2ByysAH8lxbRIFwu%2BsxZ9cv3M%2FOaJCQj8MHJJ0haAQ26ylbAKzsgobOl35h5x268COamoGgeze1wPZAaayGUJyVmfGExJQTeBTDYpoTCBjqkAVETVYf5bBTJfQY7hhQA0i3zj0K00zV49zBbD4S0Menoc4EYtxPyDtBdBzqcYX9UljwM7qsmG%2BTwA9fwW%2BCcBHq%2FDFrwf4QvQtCon2j2u79rdNAiH%2BBq99AZ8pxds33dGXCyj9%2BvMcw%2F1tLkES0RPLu3bCEbKX4Ij4DHHQY957urVg44%2B%2FP%2Bq1a9FklUjxDdJTrt70MISS%2Feh9bJpxDE9xTSUM5o&X-Amz-Signature=3264a5d6c33f45da60a59f4e6fbbe87f49005a39891b4f5db6731bf39c7c7f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPXC63H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCD%2Bfsc6EnuZZ3CvjUvDDqN74%2FLtTgceCARAxcaHvAlSwIhALkFjRqGfuuzXPqBaKSZXXGmSO7QOYJk2bdAwHPaMXpxKv8DCD0QABoMNjM3NDIzMTgzODA1IgzzmK0i5l98am%2Fn2bkq3ANooL49PC4o2%2FfP3rK9mi4eXqwk4I2tpXfkIvpMejzojnyILY1mYlJlhrxMoRQ2C7fRxBAJtzCQaj5VTzlH3WFgLURGheRUlxd%2Bz3PBsMcdBa8ea8VqZRV%2Fl%2FmIsCU65hQ%2FA3UWUojcvfT0wrWOuuEbkz%2BV%2Fi0ISYjvAQMKJMvv%2Fg%2Bd7GfC%2B8igUvaFIFX0B4QRprxHTp55EiSH4RVualyP2ya6XtGmrxxfcB1tEwmNFli5cBQg27n%2BzTX%2BeeDI5roSwnnjtz6i%2FNqz%2BJmqCJfBnJwTxN0J5zefiZ0UdIOuw%2B2ThT3tt8%2FCaLRU%2Bylos7eHtSR%2BZin8tgM53oVQkyTmZXJZAM%2BVRpI6m4ciuvbCCpOxkDx9DhikgOtlYcCE8gHBNkEk5F9CYKgX1N6g%2F61PPvvuUekZmoov3WPUfhn5Z%2BOUqijzoX44%2Fm5dk%2F9CVRXDkiOdBo31qTp6lng%2BxA%2FQbiYqUUIUAMo19Yq5OLno17rxRo%2BOgJpbotZ%2BOYhybrU2d2WiXPOdljK1g8TRFl6fFPvgx%2ByysAH8lxbRIFwu%2BsxZ9cv3M%2FOaJCQj8MHJJ0haAQ26ylbAKzsgobOl35h5x268COamoGgeze1wPZAaayGUJyVmfGExJQTeBTDYpoTCBjqkAVETVYf5bBTJfQY7hhQA0i3zj0K00zV49zBbD4S0Menoc4EYtxPyDtBdBzqcYX9UljwM7qsmG%2BTwA9fwW%2BCcBHq%2FDFrwf4QvQtCon2j2u79rdNAiH%2BBq99AZ8pxds33dGXCyj9%2BvMcw%2F1tLkES0RPLu3bCEbKX4Ij4DHHQY957urVg44%2B%2FP%2Bq1a9FklUjxDdJTrt70MISS%2Feh9bJpxDE9xTSUM5o&X-Amz-Signature=b6572791b67dbb50d32c3a76bb12f0ce29525a069b043ced90c952436a5374bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPXC63H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCD%2Bfsc6EnuZZ3CvjUvDDqN74%2FLtTgceCARAxcaHvAlSwIhALkFjRqGfuuzXPqBaKSZXXGmSO7QOYJk2bdAwHPaMXpxKv8DCD0QABoMNjM3NDIzMTgzODA1IgzzmK0i5l98am%2Fn2bkq3ANooL49PC4o2%2FfP3rK9mi4eXqwk4I2tpXfkIvpMejzojnyILY1mYlJlhrxMoRQ2C7fRxBAJtzCQaj5VTzlH3WFgLURGheRUlxd%2Bz3PBsMcdBa8ea8VqZRV%2Fl%2FmIsCU65hQ%2FA3UWUojcvfT0wrWOuuEbkz%2BV%2Fi0ISYjvAQMKJMvv%2Fg%2Bd7GfC%2B8igUvaFIFX0B4QRprxHTp55EiSH4RVualyP2ya6XtGmrxxfcB1tEwmNFli5cBQg27n%2BzTX%2BeeDI5roSwnnjtz6i%2FNqz%2BJmqCJfBnJwTxN0J5zefiZ0UdIOuw%2B2ThT3tt8%2FCaLRU%2Bylos7eHtSR%2BZin8tgM53oVQkyTmZXJZAM%2BVRpI6m4ciuvbCCpOxkDx9DhikgOtlYcCE8gHBNkEk5F9CYKgX1N6g%2F61PPvvuUekZmoov3WPUfhn5Z%2BOUqijzoX44%2Fm5dk%2F9CVRXDkiOdBo31qTp6lng%2BxA%2FQbiYqUUIUAMo19Yq5OLno17rxRo%2BOgJpbotZ%2BOYhybrU2d2WiXPOdljK1g8TRFl6fFPvgx%2ByysAH8lxbRIFwu%2BsxZ9cv3M%2FOaJCQj8MHJJ0haAQ26ylbAKzsgobOl35h5x268COamoGgeze1wPZAaayGUJyVmfGExJQTeBTDYpoTCBjqkAVETVYf5bBTJfQY7hhQA0i3zj0K00zV49zBbD4S0Menoc4EYtxPyDtBdBzqcYX9UljwM7qsmG%2BTwA9fwW%2BCcBHq%2FDFrwf4QvQtCon2j2u79rdNAiH%2BBq99AZ8pxds33dGXCyj9%2BvMcw%2F1tLkES0RPLu3bCEbKX4Ij4DHHQY957urVg44%2B%2FP%2Bq1a9FklUjxDdJTrt70MISS%2Feh9bJpxDE9xTSUM5o&X-Amz-Signature=cd190c3c3f4ab8b0dac3d9486490177a072cd1bf0cd34837f7ee9629be258de9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPXC63H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCD%2Bfsc6EnuZZ3CvjUvDDqN74%2FLtTgceCARAxcaHvAlSwIhALkFjRqGfuuzXPqBaKSZXXGmSO7QOYJk2bdAwHPaMXpxKv8DCD0QABoMNjM3NDIzMTgzODA1IgzzmK0i5l98am%2Fn2bkq3ANooL49PC4o2%2FfP3rK9mi4eXqwk4I2tpXfkIvpMejzojnyILY1mYlJlhrxMoRQ2C7fRxBAJtzCQaj5VTzlH3WFgLURGheRUlxd%2Bz3PBsMcdBa8ea8VqZRV%2Fl%2FmIsCU65hQ%2FA3UWUojcvfT0wrWOuuEbkz%2BV%2Fi0ISYjvAQMKJMvv%2Fg%2Bd7GfC%2B8igUvaFIFX0B4QRprxHTp55EiSH4RVualyP2ya6XtGmrxxfcB1tEwmNFli5cBQg27n%2BzTX%2BeeDI5roSwnnjtz6i%2FNqz%2BJmqCJfBnJwTxN0J5zefiZ0UdIOuw%2B2ThT3tt8%2FCaLRU%2Bylos7eHtSR%2BZin8tgM53oVQkyTmZXJZAM%2BVRpI6m4ciuvbCCpOxkDx9DhikgOtlYcCE8gHBNkEk5F9CYKgX1N6g%2F61PPvvuUekZmoov3WPUfhn5Z%2BOUqijzoX44%2Fm5dk%2F9CVRXDkiOdBo31qTp6lng%2BxA%2FQbiYqUUIUAMo19Yq5OLno17rxRo%2BOgJpbotZ%2BOYhybrU2d2WiXPOdljK1g8TRFl6fFPvgx%2ByysAH8lxbRIFwu%2BsxZ9cv3M%2FOaJCQj8MHJJ0haAQ26ylbAKzsgobOl35h5x268COamoGgeze1wPZAaayGUJyVmfGExJQTeBTDYpoTCBjqkAVETVYf5bBTJfQY7hhQA0i3zj0K00zV49zBbD4S0Menoc4EYtxPyDtBdBzqcYX9UljwM7qsmG%2BTwA9fwW%2BCcBHq%2FDFrwf4QvQtCon2j2u79rdNAiH%2BBq99AZ8pxds33dGXCyj9%2BvMcw%2F1tLkES0RPLu3bCEbKX4Ij4DHHQY957urVg44%2B%2FP%2Bq1a9FklUjxDdJTrt70MISS%2Feh9bJpxDE9xTSUM5o&X-Amz-Signature=5acead8fe96a5dbc4d98cf2eb2ca1dd7dc9c29d45ca5945640b7297496a9d17e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
