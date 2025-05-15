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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI32XF5F%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICgV2dfFJTFmdLFv53JOvnFEbXvYhcmFnqrGx2JhtT9UAiEAtDXY%2BCfbeGYQE7deCWDoPtQ7LIRAlF76NpWo8Q7lmVYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJbWyHbPP0L8IhhwmircA%2FwUBQCl2NMA1vy7sPJOO%2F3orqlkiD%2FOz19FXE6GRRuKZpfCXlrxaWcolnFKtCgqumMFJa%2BOdE5n3BI4bKKB9N4TBJNeUuXHtBPwsUsLSrSn1njlKtAgke0D3sw5L3D0lcR4fcECMQPcZH4kydrrg4FANxoLKgZih9GVfLc83I4ZzLgoAox%2FUS7cRW7BON0F6G88EZU30tFBk%2BYrlnJjHN%2F4Dqp13BzBNK7OlOMGVZrT1H0XSOl1S8oASvi5Oil18pK4HTgmG0ac5kOFlb6vZhCF5zgXDbiFk79ncHx8ZTDCNRmMs%2B7OQ6jfOx3132LBiHMqKJrV9DYuCrtOSPbzWaFs9jyIqJA8vgYsIdJgGEtC9%2F7HmSQbIyRsAzXrDRCmIPJpVyaa1uIykl%2Fg6Wzvbdq9aq8jbOo8MXTDqftq3vwHbP%2BCGDGW9XzttvADuEYNXyt2frDJu%2F0vfjpzaq4PQeXYRCxmbcMNI050m0cYK%2F5CCD4E4aLFUnrR%2BBSzACf9FImLaqkrwD2lpV57N8E3%2BzTPHsOUSJzBN%2BRrA5C9wHhitneycGmjgZtYjYRrtBEJTFMmQ2XbIXNkZZkMAlFK%2BdWiNPHmKnY3URmmvWDT3P8%2FcO9kKG1TLH27yLw3MMzrlMEGOqUBed1dj%2FEb%2BjALV7Jipkb28IFsNs5wHz%2FNlJERxhna5dSRNiW7vOv8DE0M1Jfn%2Fkn3A6uKQlO18jtd3Sqi2CLz2x%2F16cIcyqZoG%2FXTnUIn9P%2BUQPsKXHYXEYNuWSIxZOncQV%2FBRcdW2qiJdd9T5KOj0wskOzJWT6gyOy9b513Xm%2BPsdu0dlfdUWRXvWsNoAwf5qa3SbsCFbNho7cHzxU%2Fkqx8e1sbg&X-Amz-Signature=f86219bf4c12ebbf16c0b44cec4e3defddc5b7607d42baaa32a48649c4701148&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI32XF5F%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICgV2dfFJTFmdLFv53JOvnFEbXvYhcmFnqrGx2JhtT9UAiEAtDXY%2BCfbeGYQE7deCWDoPtQ7LIRAlF76NpWo8Q7lmVYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJbWyHbPP0L8IhhwmircA%2FwUBQCl2NMA1vy7sPJOO%2F3orqlkiD%2FOz19FXE6GRRuKZpfCXlrxaWcolnFKtCgqumMFJa%2BOdE5n3BI4bKKB9N4TBJNeUuXHtBPwsUsLSrSn1njlKtAgke0D3sw5L3D0lcR4fcECMQPcZH4kydrrg4FANxoLKgZih9GVfLc83I4ZzLgoAox%2FUS7cRW7BON0F6G88EZU30tFBk%2BYrlnJjHN%2F4Dqp13BzBNK7OlOMGVZrT1H0XSOl1S8oASvi5Oil18pK4HTgmG0ac5kOFlb6vZhCF5zgXDbiFk79ncHx8ZTDCNRmMs%2B7OQ6jfOx3132LBiHMqKJrV9DYuCrtOSPbzWaFs9jyIqJA8vgYsIdJgGEtC9%2F7HmSQbIyRsAzXrDRCmIPJpVyaa1uIykl%2Fg6Wzvbdq9aq8jbOo8MXTDqftq3vwHbP%2BCGDGW9XzttvADuEYNXyt2frDJu%2F0vfjpzaq4PQeXYRCxmbcMNI050m0cYK%2F5CCD4E4aLFUnrR%2BBSzACf9FImLaqkrwD2lpV57N8E3%2BzTPHsOUSJzBN%2BRrA5C9wHhitneycGmjgZtYjYRrtBEJTFMmQ2XbIXNkZZkMAlFK%2BdWiNPHmKnY3URmmvWDT3P8%2FcO9kKG1TLH27yLw3MMzrlMEGOqUBed1dj%2FEb%2BjALV7Jipkb28IFsNs5wHz%2FNlJERxhna5dSRNiW7vOv8DE0M1Jfn%2Fkn3A6uKQlO18jtd3Sqi2CLz2x%2F16cIcyqZoG%2FXTnUIn9P%2BUQPsKXHYXEYNuWSIxZOncQV%2FBRcdW2qiJdd9T5KOj0wskOzJWT6gyOy9b513Xm%2BPsdu0dlfdUWRXvWsNoAwf5qa3SbsCFbNho7cHzxU%2Fkqx8e1sbg&X-Amz-Signature=a26b5b14dee52905f6840b7397c93a148f8237e3f2eafe161d274270e3254f31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI32XF5F%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICgV2dfFJTFmdLFv53JOvnFEbXvYhcmFnqrGx2JhtT9UAiEAtDXY%2BCfbeGYQE7deCWDoPtQ7LIRAlF76NpWo8Q7lmVYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJbWyHbPP0L8IhhwmircA%2FwUBQCl2NMA1vy7sPJOO%2F3orqlkiD%2FOz19FXE6GRRuKZpfCXlrxaWcolnFKtCgqumMFJa%2BOdE5n3BI4bKKB9N4TBJNeUuXHtBPwsUsLSrSn1njlKtAgke0D3sw5L3D0lcR4fcECMQPcZH4kydrrg4FANxoLKgZih9GVfLc83I4ZzLgoAox%2FUS7cRW7BON0F6G88EZU30tFBk%2BYrlnJjHN%2F4Dqp13BzBNK7OlOMGVZrT1H0XSOl1S8oASvi5Oil18pK4HTgmG0ac5kOFlb6vZhCF5zgXDbiFk79ncHx8ZTDCNRmMs%2B7OQ6jfOx3132LBiHMqKJrV9DYuCrtOSPbzWaFs9jyIqJA8vgYsIdJgGEtC9%2F7HmSQbIyRsAzXrDRCmIPJpVyaa1uIykl%2Fg6Wzvbdq9aq8jbOo8MXTDqftq3vwHbP%2BCGDGW9XzttvADuEYNXyt2frDJu%2F0vfjpzaq4PQeXYRCxmbcMNI050m0cYK%2F5CCD4E4aLFUnrR%2BBSzACf9FImLaqkrwD2lpV57N8E3%2BzTPHsOUSJzBN%2BRrA5C9wHhitneycGmjgZtYjYRrtBEJTFMmQ2XbIXNkZZkMAlFK%2BdWiNPHmKnY3URmmvWDT3P8%2FcO9kKG1TLH27yLw3MMzrlMEGOqUBed1dj%2FEb%2BjALV7Jipkb28IFsNs5wHz%2FNlJERxhna5dSRNiW7vOv8DE0M1Jfn%2Fkn3A6uKQlO18jtd3Sqi2CLz2x%2F16cIcyqZoG%2FXTnUIn9P%2BUQPsKXHYXEYNuWSIxZOncQV%2FBRcdW2qiJdd9T5KOj0wskOzJWT6gyOy9b513Xm%2BPsdu0dlfdUWRXvWsNoAwf5qa3SbsCFbNho7cHzxU%2Fkqx8e1sbg&X-Amz-Signature=cbc2d9b51f3163a6582713701fa881a3c71b1f4ef22290b1821918ac69dec8de&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI32XF5F%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICgV2dfFJTFmdLFv53JOvnFEbXvYhcmFnqrGx2JhtT9UAiEAtDXY%2BCfbeGYQE7deCWDoPtQ7LIRAlF76NpWo8Q7lmVYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJbWyHbPP0L8IhhwmircA%2FwUBQCl2NMA1vy7sPJOO%2F3orqlkiD%2FOz19FXE6GRRuKZpfCXlrxaWcolnFKtCgqumMFJa%2BOdE5n3BI4bKKB9N4TBJNeUuXHtBPwsUsLSrSn1njlKtAgke0D3sw5L3D0lcR4fcECMQPcZH4kydrrg4FANxoLKgZih9GVfLc83I4ZzLgoAox%2FUS7cRW7BON0F6G88EZU30tFBk%2BYrlnJjHN%2F4Dqp13BzBNK7OlOMGVZrT1H0XSOl1S8oASvi5Oil18pK4HTgmG0ac5kOFlb6vZhCF5zgXDbiFk79ncHx8ZTDCNRmMs%2B7OQ6jfOx3132LBiHMqKJrV9DYuCrtOSPbzWaFs9jyIqJA8vgYsIdJgGEtC9%2F7HmSQbIyRsAzXrDRCmIPJpVyaa1uIykl%2Fg6Wzvbdq9aq8jbOo8MXTDqftq3vwHbP%2BCGDGW9XzttvADuEYNXyt2frDJu%2F0vfjpzaq4PQeXYRCxmbcMNI050m0cYK%2F5CCD4E4aLFUnrR%2BBSzACf9FImLaqkrwD2lpV57N8E3%2BzTPHsOUSJzBN%2BRrA5C9wHhitneycGmjgZtYjYRrtBEJTFMmQ2XbIXNkZZkMAlFK%2BdWiNPHmKnY3URmmvWDT3P8%2FcO9kKG1TLH27yLw3MMzrlMEGOqUBed1dj%2FEb%2BjALV7Jipkb28IFsNs5wHz%2FNlJERxhna5dSRNiW7vOv8DE0M1Jfn%2Fkn3A6uKQlO18jtd3Sqi2CLz2x%2F16cIcyqZoG%2FXTnUIn9P%2BUQPsKXHYXEYNuWSIxZOncQV%2FBRcdW2qiJdd9T5KOj0wskOzJWT6gyOy9b513Xm%2BPsdu0dlfdUWRXvWsNoAwf5qa3SbsCFbNho7cHzxU%2Fkqx8e1sbg&X-Amz-Signature=888d884972e7ce41c893b0544b7167f123ae8aeecdf0162551c282878dbb24f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI32XF5F%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICgV2dfFJTFmdLFv53JOvnFEbXvYhcmFnqrGx2JhtT9UAiEAtDXY%2BCfbeGYQE7deCWDoPtQ7LIRAlF76NpWo8Q7lmVYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJbWyHbPP0L8IhhwmircA%2FwUBQCl2NMA1vy7sPJOO%2F3orqlkiD%2FOz19FXE6GRRuKZpfCXlrxaWcolnFKtCgqumMFJa%2BOdE5n3BI4bKKB9N4TBJNeUuXHtBPwsUsLSrSn1njlKtAgke0D3sw5L3D0lcR4fcECMQPcZH4kydrrg4FANxoLKgZih9GVfLc83I4ZzLgoAox%2FUS7cRW7BON0F6G88EZU30tFBk%2BYrlnJjHN%2F4Dqp13BzBNK7OlOMGVZrT1H0XSOl1S8oASvi5Oil18pK4HTgmG0ac5kOFlb6vZhCF5zgXDbiFk79ncHx8ZTDCNRmMs%2B7OQ6jfOx3132LBiHMqKJrV9DYuCrtOSPbzWaFs9jyIqJA8vgYsIdJgGEtC9%2F7HmSQbIyRsAzXrDRCmIPJpVyaa1uIykl%2Fg6Wzvbdq9aq8jbOo8MXTDqftq3vwHbP%2BCGDGW9XzttvADuEYNXyt2frDJu%2F0vfjpzaq4PQeXYRCxmbcMNI050m0cYK%2F5CCD4E4aLFUnrR%2BBSzACf9FImLaqkrwD2lpV57N8E3%2BzTPHsOUSJzBN%2BRrA5C9wHhitneycGmjgZtYjYRrtBEJTFMmQ2XbIXNkZZkMAlFK%2BdWiNPHmKnY3URmmvWDT3P8%2FcO9kKG1TLH27yLw3MMzrlMEGOqUBed1dj%2FEb%2BjALV7Jipkb28IFsNs5wHz%2FNlJERxhna5dSRNiW7vOv8DE0M1Jfn%2Fkn3A6uKQlO18jtd3Sqi2CLz2x%2F16cIcyqZoG%2FXTnUIn9P%2BUQPsKXHYXEYNuWSIxZOncQV%2FBRcdW2qiJdd9T5KOj0wskOzJWT6gyOy9b513Xm%2BPsdu0dlfdUWRXvWsNoAwf5qa3SbsCFbNho7cHzxU%2Fkqx8e1sbg&X-Amz-Signature=4d832be3047e6a7e5731dc83545fb7f7bf6aeea9dd93667467ef563304aad377&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI32XF5F%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICgV2dfFJTFmdLFv53JOvnFEbXvYhcmFnqrGx2JhtT9UAiEAtDXY%2BCfbeGYQE7deCWDoPtQ7LIRAlF76NpWo8Q7lmVYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJbWyHbPP0L8IhhwmircA%2FwUBQCl2NMA1vy7sPJOO%2F3orqlkiD%2FOz19FXE6GRRuKZpfCXlrxaWcolnFKtCgqumMFJa%2BOdE5n3BI4bKKB9N4TBJNeUuXHtBPwsUsLSrSn1njlKtAgke0D3sw5L3D0lcR4fcECMQPcZH4kydrrg4FANxoLKgZih9GVfLc83I4ZzLgoAox%2FUS7cRW7BON0F6G88EZU30tFBk%2BYrlnJjHN%2F4Dqp13BzBNK7OlOMGVZrT1H0XSOl1S8oASvi5Oil18pK4HTgmG0ac5kOFlb6vZhCF5zgXDbiFk79ncHx8ZTDCNRmMs%2B7OQ6jfOx3132LBiHMqKJrV9DYuCrtOSPbzWaFs9jyIqJA8vgYsIdJgGEtC9%2F7HmSQbIyRsAzXrDRCmIPJpVyaa1uIykl%2Fg6Wzvbdq9aq8jbOo8MXTDqftq3vwHbP%2BCGDGW9XzttvADuEYNXyt2frDJu%2F0vfjpzaq4PQeXYRCxmbcMNI050m0cYK%2F5CCD4E4aLFUnrR%2BBSzACf9FImLaqkrwD2lpV57N8E3%2BzTPHsOUSJzBN%2BRrA5C9wHhitneycGmjgZtYjYRrtBEJTFMmQ2XbIXNkZZkMAlFK%2BdWiNPHmKnY3URmmvWDT3P8%2FcO9kKG1TLH27yLw3MMzrlMEGOqUBed1dj%2FEb%2BjALV7Jipkb28IFsNs5wHz%2FNlJERxhna5dSRNiW7vOv8DE0M1Jfn%2Fkn3A6uKQlO18jtd3Sqi2CLz2x%2F16cIcyqZoG%2FXTnUIn9P%2BUQPsKXHYXEYNuWSIxZOncQV%2FBRcdW2qiJdd9T5KOj0wskOzJWT6gyOy9b513Xm%2BPsdu0dlfdUWRXvWsNoAwf5qa3SbsCFbNho7cHzxU%2Fkqx8e1sbg&X-Amz-Signature=06de66c33a6ebb6adcb54b5a4237df7b54c9cda2fca232b340167bd1f4d77763&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI32XF5F%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICgV2dfFJTFmdLFv53JOvnFEbXvYhcmFnqrGx2JhtT9UAiEAtDXY%2BCfbeGYQE7deCWDoPtQ7LIRAlF76NpWo8Q7lmVYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJbWyHbPP0L8IhhwmircA%2FwUBQCl2NMA1vy7sPJOO%2F3orqlkiD%2FOz19FXE6GRRuKZpfCXlrxaWcolnFKtCgqumMFJa%2BOdE5n3BI4bKKB9N4TBJNeUuXHtBPwsUsLSrSn1njlKtAgke0D3sw5L3D0lcR4fcECMQPcZH4kydrrg4FANxoLKgZih9GVfLc83I4ZzLgoAox%2FUS7cRW7BON0F6G88EZU30tFBk%2BYrlnJjHN%2F4Dqp13BzBNK7OlOMGVZrT1H0XSOl1S8oASvi5Oil18pK4HTgmG0ac5kOFlb6vZhCF5zgXDbiFk79ncHx8ZTDCNRmMs%2B7OQ6jfOx3132LBiHMqKJrV9DYuCrtOSPbzWaFs9jyIqJA8vgYsIdJgGEtC9%2F7HmSQbIyRsAzXrDRCmIPJpVyaa1uIykl%2Fg6Wzvbdq9aq8jbOo8MXTDqftq3vwHbP%2BCGDGW9XzttvADuEYNXyt2frDJu%2F0vfjpzaq4PQeXYRCxmbcMNI050m0cYK%2F5CCD4E4aLFUnrR%2BBSzACf9FImLaqkrwD2lpV57N8E3%2BzTPHsOUSJzBN%2BRrA5C9wHhitneycGmjgZtYjYRrtBEJTFMmQ2XbIXNkZZkMAlFK%2BdWiNPHmKnY3URmmvWDT3P8%2FcO9kKG1TLH27yLw3MMzrlMEGOqUBed1dj%2FEb%2BjALV7Jipkb28IFsNs5wHz%2FNlJERxhna5dSRNiW7vOv8DE0M1Jfn%2Fkn3A6uKQlO18jtd3Sqi2CLz2x%2F16cIcyqZoG%2FXTnUIn9P%2BUQPsKXHYXEYNuWSIxZOncQV%2FBRcdW2qiJdd9T5KOj0wskOzJWT6gyOy9b513Xm%2BPsdu0dlfdUWRXvWsNoAwf5qa3SbsCFbNho7cHzxU%2Fkqx8e1sbg&X-Amz-Signature=03e875969d6b2aa01e143fd8793f1970ad858abca2dcd4fbc93ed7caf247fcec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI32XF5F%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICgV2dfFJTFmdLFv53JOvnFEbXvYhcmFnqrGx2JhtT9UAiEAtDXY%2BCfbeGYQE7deCWDoPtQ7LIRAlF76NpWo8Q7lmVYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJbWyHbPP0L8IhhwmircA%2FwUBQCl2NMA1vy7sPJOO%2F3orqlkiD%2FOz19FXE6GRRuKZpfCXlrxaWcolnFKtCgqumMFJa%2BOdE5n3BI4bKKB9N4TBJNeUuXHtBPwsUsLSrSn1njlKtAgke0D3sw5L3D0lcR4fcECMQPcZH4kydrrg4FANxoLKgZih9GVfLc83I4ZzLgoAox%2FUS7cRW7BON0F6G88EZU30tFBk%2BYrlnJjHN%2F4Dqp13BzBNK7OlOMGVZrT1H0XSOl1S8oASvi5Oil18pK4HTgmG0ac5kOFlb6vZhCF5zgXDbiFk79ncHx8ZTDCNRmMs%2B7OQ6jfOx3132LBiHMqKJrV9DYuCrtOSPbzWaFs9jyIqJA8vgYsIdJgGEtC9%2F7HmSQbIyRsAzXrDRCmIPJpVyaa1uIykl%2Fg6Wzvbdq9aq8jbOo8MXTDqftq3vwHbP%2BCGDGW9XzttvADuEYNXyt2frDJu%2F0vfjpzaq4PQeXYRCxmbcMNI050m0cYK%2F5CCD4E4aLFUnrR%2BBSzACf9FImLaqkrwD2lpV57N8E3%2BzTPHsOUSJzBN%2BRrA5C9wHhitneycGmjgZtYjYRrtBEJTFMmQ2XbIXNkZZkMAlFK%2BdWiNPHmKnY3URmmvWDT3P8%2FcO9kKG1TLH27yLw3MMzrlMEGOqUBed1dj%2FEb%2BjALV7Jipkb28IFsNs5wHz%2FNlJERxhna5dSRNiW7vOv8DE0M1Jfn%2Fkn3A6uKQlO18jtd3Sqi2CLz2x%2F16cIcyqZoG%2FXTnUIn9P%2BUQPsKXHYXEYNuWSIxZOncQV%2FBRcdW2qiJdd9T5KOj0wskOzJWT6gyOy9b513Xm%2BPsdu0dlfdUWRXvWsNoAwf5qa3SbsCFbNho7cHzxU%2Fkqx8e1sbg&X-Amz-Signature=1b6e8d10db0660a86a5fd3ffe7eb93a6c415c0498d14675bc484687a62ebde48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
