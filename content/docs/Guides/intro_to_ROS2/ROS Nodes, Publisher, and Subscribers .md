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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PTR3FCU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFAYWV7OAwHPi1kjn73mxcmV49%2BpB5rspKm4MNvIKHzHAiEAzBW%2BnePieIC2R%2BHjZMWW664tV1VN0ex055kX36X88hwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEADfhfHW%2FRXFIAhhircAysQoGGnoUC2DNJDN%2BnLknG37dPacWBx9iqe%2BUZOsCBAAq17HM2XFxuPs8oR0DoWZnwr1A%2BinO3X0wr3YeZEaRj%2BsoufVhA7lK%2Bz6b2NGipVjdyymnwv9akr7xjmeNwFtqPYhw%2B45oiPjfwF%2BpaiPzyyBEPtg%2FBFFWYclq3XvKm8z5kwqAqjwo3fMDOYVw20leTKnWXCxI27wPZb93O43xhqD4SzI6E%2FRxDjBmPNlUUMqBbKeFgaxfhNz1fMzPqk7rWX1nFobbcrYBI7TTOYRoN4F0frTaj3iOLPDc6SK8slSihlo32bUM%2FamKv2%2BdXrjYvDtTQJW2S%2Fu0A%2Fvvca%2B4WWvk%2Bon9YA3U0BSBclR42n%2BE%2FeieHI4uuMqyuampuYfZasdpHn5FwBZmfdM%2FI%2BBGlf7LWqqx5F2Dm0ULd2797fYh1gXCC7AObkl02R6akQCYEMZIaVcqCm4Z77G6iyh%2F6jTwwvNVG23dPewn5U2eE%2FoaBUU%2F9tcM2yLrLmH300n%2F%2FWQ8Jdp8bZzcNGRQLMp8wy1NJHXRNwnUVZk3fBFq0IVs4g0oOXmS348Gn2mgBpmCmUuN6hYLVfGd%2FYhsBL6%2FpO%2F2ATyfRCMXMbFEwstaNQ%2FWFpYMlAUiNE6niGMIPG8b4GOqUB8gS31%2FEdngKs5V7jNKj01fBOHO1CcgqH4m266EplkRnh5ojWa0Nb2n7ttT2%2FLIbuSiPk%2FSdefQUusDmBptP%2FizT4PrWIRqJOJLT8yaWz4vbPEzPtNQ%2B96Yu1cjbogSORk9piQRwQEo4HCc6rf7OAiC53%2BhpgYStkEpCpk7hHnHBtsvfvMWOmt%2BBC6nY0WKTpEggCLJeG2S8mzpGVOaAZVKCfjvtQ&X-Amz-Signature=86da3897131e186755c85b5907adcbed4391d5cf79f8ea646c8c122d69ddda11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PTR3FCU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFAYWV7OAwHPi1kjn73mxcmV49%2BpB5rspKm4MNvIKHzHAiEAzBW%2BnePieIC2R%2BHjZMWW664tV1VN0ex055kX36X88hwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEADfhfHW%2FRXFIAhhircAysQoGGnoUC2DNJDN%2BnLknG37dPacWBx9iqe%2BUZOsCBAAq17HM2XFxuPs8oR0DoWZnwr1A%2BinO3X0wr3YeZEaRj%2BsoufVhA7lK%2Bz6b2NGipVjdyymnwv9akr7xjmeNwFtqPYhw%2B45oiPjfwF%2BpaiPzyyBEPtg%2FBFFWYclq3XvKm8z5kwqAqjwo3fMDOYVw20leTKnWXCxI27wPZb93O43xhqD4SzI6E%2FRxDjBmPNlUUMqBbKeFgaxfhNz1fMzPqk7rWX1nFobbcrYBI7TTOYRoN4F0frTaj3iOLPDc6SK8slSihlo32bUM%2FamKv2%2BdXrjYvDtTQJW2S%2Fu0A%2Fvvca%2B4WWvk%2Bon9YA3U0BSBclR42n%2BE%2FeieHI4uuMqyuampuYfZasdpHn5FwBZmfdM%2FI%2BBGlf7LWqqx5F2Dm0ULd2797fYh1gXCC7AObkl02R6akQCYEMZIaVcqCm4Z77G6iyh%2F6jTwwvNVG23dPewn5U2eE%2FoaBUU%2F9tcM2yLrLmH300n%2F%2FWQ8Jdp8bZzcNGRQLMp8wy1NJHXRNwnUVZk3fBFq0IVs4g0oOXmS348Gn2mgBpmCmUuN6hYLVfGd%2FYhsBL6%2FpO%2F2ATyfRCMXMbFEwstaNQ%2FWFpYMlAUiNE6niGMIPG8b4GOqUB8gS31%2FEdngKs5V7jNKj01fBOHO1CcgqH4m266EplkRnh5ojWa0Nb2n7ttT2%2FLIbuSiPk%2FSdefQUusDmBptP%2FizT4PrWIRqJOJLT8yaWz4vbPEzPtNQ%2B96Yu1cjbogSORk9piQRwQEo4HCc6rf7OAiC53%2BhpgYStkEpCpk7hHnHBtsvfvMWOmt%2BBC6nY0WKTpEggCLJeG2S8mzpGVOaAZVKCfjvtQ&X-Amz-Signature=e2042ea0521ff79fb7bee5f5d0848e946799a97c2f88285256e966ff355a6bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PTR3FCU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFAYWV7OAwHPi1kjn73mxcmV49%2BpB5rspKm4MNvIKHzHAiEAzBW%2BnePieIC2R%2BHjZMWW664tV1VN0ex055kX36X88hwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEADfhfHW%2FRXFIAhhircAysQoGGnoUC2DNJDN%2BnLknG37dPacWBx9iqe%2BUZOsCBAAq17HM2XFxuPs8oR0DoWZnwr1A%2BinO3X0wr3YeZEaRj%2BsoufVhA7lK%2Bz6b2NGipVjdyymnwv9akr7xjmeNwFtqPYhw%2B45oiPjfwF%2BpaiPzyyBEPtg%2FBFFWYclq3XvKm8z5kwqAqjwo3fMDOYVw20leTKnWXCxI27wPZb93O43xhqD4SzI6E%2FRxDjBmPNlUUMqBbKeFgaxfhNz1fMzPqk7rWX1nFobbcrYBI7TTOYRoN4F0frTaj3iOLPDc6SK8slSihlo32bUM%2FamKv2%2BdXrjYvDtTQJW2S%2Fu0A%2Fvvca%2B4WWvk%2Bon9YA3U0BSBclR42n%2BE%2FeieHI4uuMqyuampuYfZasdpHn5FwBZmfdM%2FI%2BBGlf7LWqqx5F2Dm0ULd2797fYh1gXCC7AObkl02R6akQCYEMZIaVcqCm4Z77G6iyh%2F6jTwwvNVG23dPewn5U2eE%2FoaBUU%2F9tcM2yLrLmH300n%2F%2FWQ8Jdp8bZzcNGRQLMp8wy1NJHXRNwnUVZk3fBFq0IVs4g0oOXmS348Gn2mgBpmCmUuN6hYLVfGd%2FYhsBL6%2FpO%2F2ATyfRCMXMbFEwstaNQ%2FWFpYMlAUiNE6niGMIPG8b4GOqUB8gS31%2FEdngKs5V7jNKj01fBOHO1CcgqH4m266EplkRnh5ojWa0Nb2n7ttT2%2FLIbuSiPk%2FSdefQUusDmBptP%2FizT4PrWIRqJOJLT8yaWz4vbPEzPtNQ%2B96Yu1cjbogSORk9piQRwQEo4HCc6rf7OAiC53%2BhpgYStkEpCpk7hHnHBtsvfvMWOmt%2BBC6nY0WKTpEggCLJeG2S8mzpGVOaAZVKCfjvtQ&X-Amz-Signature=769f89e3665de0dd97fa87f9c6da53d9ed0cf1f13fb7937027ab48d9d8147279&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PTR3FCU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFAYWV7OAwHPi1kjn73mxcmV49%2BpB5rspKm4MNvIKHzHAiEAzBW%2BnePieIC2R%2BHjZMWW664tV1VN0ex055kX36X88hwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEADfhfHW%2FRXFIAhhircAysQoGGnoUC2DNJDN%2BnLknG37dPacWBx9iqe%2BUZOsCBAAq17HM2XFxuPs8oR0DoWZnwr1A%2BinO3X0wr3YeZEaRj%2BsoufVhA7lK%2Bz6b2NGipVjdyymnwv9akr7xjmeNwFtqPYhw%2B45oiPjfwF%2BpaiPzyyBEPtg%2FBFFWYclq3XvKm8z5kwqAqjwo3fMDOYVw20leTKnWXCxI27wPZb93O43xhqD4SzI6E%2FRxDjBmPNlUUMqBbKeFgaxfhNz1fMzPqk7rWX1nFobbcrYBI7TTOYRoN4F0frTaj3iOLPDc6SK8slSihlo32bUM%2FamKv2%2BdXrjYvDtTQJW2S%2Fu0A%2Fvvca%2B4WWvk%2Bon9YA3U0BSBclR42n%2BE%2FeieHI4uuMqyuampuYfZasdpHn5FwBZmfdM%2FI%2BBGlf7LWqqx5F2Dm0ULd2797fYh1gXCC7AObkl02R6akQCYEMZIaVcqCm4Z77G6iyh%2F6jTwwvNVG23dPewn5U2eE%2FoaBUU%2F9tcM2yLrLmH300n%2F%2FWQ8Jdp8bZzcNGRQLMp8wy1NJHXRNwnUVZk3fBFq0IVs4g0oOXmS348Gn2mgBpmCmUuN6hYLVfGd%2FYhsBL6%2FpO%2F2ATyfRCMXMbFEwstaNQ%2FWFpYMlAUiNE6niGMIPG8b4GOqUB8gS31%2FEdngKs5V7jNKj01fBOHO1CcgqH4m266EplkRnh5ojWa0Nb2n7ttT2%2FLIbuSiPk%2FSdefQUusDmBptP%2FizT4PrWIRqJOJLT8yaWz4vbPEzPtNQ%2B96Yu1cjbogSORk9piQRwQEo4HCc6rf7OAiC53%2BhpgYStkEpCpk7hHnHBtsvfvMWOmt%2BBC6nY0WKTpEggCLJeG2S8mzpGVOaAZVKCfjvtQ&X-Amz-Signature=29cfb244e8c55206a5237e051562937b7e33da6096e0d154979575517c8319c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PTR3FCU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFAYWV7OAwHPi1kjn73mxcmV49%2BpB5rspKm4MNvIKHzHAiEAzBW%2BnePieIC2R%2BHjZMWW664tV1VN0ex055kX36X88hwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEADfhfHW%2FRXFIAhhircAysQoGGnoUC2DNJDN%2BnLknG37dPacWBx9iqe%2BUZOsCBAAq17HM2XFxuPs8oR0DoWZnwr1A%2BinO3X0wr3YeZEaRj%2BsoufVhA7lK%2Bz6b2NGipVjdyymnwv9akr7xjmeNwFtqPYhw%2B45oiPjfwF%2BpaiPzyyBEPtg%2FBFFWYclq3XvKm8z5kwqAqjwo3fMDOYVw20leTKnWXCxI27wPZb93O43xhqD4SzI6E%2FRxDjBmPNlUUMqBbKeFgaxfhNz1fMzPqk7rWX1nFobbcrYBI7TTOYRoN4F0frTaj3iOLPDc6SK8slSihlo32bUM%2FamKv2%2BdXrjYvDtTQJW2S%2Fu0A%2Fvvca%2B4WWvk%2Bon9YA3U0BSBclR42n%2BE%2FeieHI4uuMqyuampuYfZasdpHn5FwBZmfdM%2FI%2BBGlf7LWqqx5F2Dm0ULd2797fYh1gXCC7AObkl02R6akQCYEMZIaVcqCm4Z77G6iyh%2F6jTwwvNVG23dPewn5U2eE%2FoaBUU%2F9tcM2yLrLmH300n%2F%2FWQ8Jdp8bZzcNGRQLMp8wy1NJHXRNwnUVZk3fBFq0IVs4g0oOXmS348Gn2mgBpmCmUuN6hYLVfGd%2FYhsBL6%2FpO%2F2ATyfRCMXMbFEwstaNQ%2FWFpYMlAUiNE6niGMIPG8b4GOqUB8gS31%2FEdngKs5V7jNKj01fBOHO1CcgqH4m266EplkRnh5ojWa0Nb2n7ttT2%2FLIbuSiPk%2FSdefQUusDmBptP%2FizT4PrWIRqJOJLT8yaWz4vbPEzPtNQ%2B96Yu1cjbogSORk9piQRwQEo4HCc6rf7OAiC53%2BhpgYStkEpCpk7hHnHBtsvfvMWOmt%2BBC6nY0WKTpEggCLJeG2S8mzpGVOaAZVKCfjvtQ&X-Amz-Signature=692dad54ae0824d8edb467a29e802e708eac81c44e521268c2f31087297b0ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PTR3FCU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFAYWV7OAwHPi1kjn73mxcmV49%2BpB5rspKm4MNvIKHzHAiEAzBW%2BnePieIC2R%2BHjZMWW664tV1VN0ex055kX36X88hwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEADfhfHW%2FRXFIAhhircAysQoGGnoUC2DNJDN%2BnLknG37dPacWBx9iqe%2BUZOsCBAAq17HM2XFxuPs8oR0DoWZnwr1A%2BinO3X0wr3YeZEaRj%2BsoufVhA7lK%2Bz6b2NGipVjdyymnwv9akr7xjmeNwFtqPYhw%2B45oiPjfwF%2BpaiPzyyBEPtg%2FBFFWYclq3XvKm8z5kwqAqjwo3fMDOYVw20leTKnWXCxI27wPZb93O43xhqD4SzI6E%2FRxDjBmPNlUUMqBbKeFgaxfhNz1fMzPqk7rWX1nFobbcrYBI7TTOYRoN4F0frTaj3iOLPDc6SK8slSihlo32bUM%2FamKv2%2BdXrjYvDtTQJW2S%2Fu0A%2Fvvca%2B4WWvk%2Bon9YA3U0BSBclR42n%2BE%2FeieHI4uuMqyuampuYfZasdpHn5FwBZmfdM%2FI%2BBGlf7LWqqx5F2Dm0ULd2797fYh1gXCC7AObkl02R6akQCYEMZIaVcqCm4Z77G6iyh%2F6jTwwvNVG23dPewn5U2eE%2FoaBUU%2F9tcM2yLrLmH300n%2F%2FWQ8Jdp8bZzcNGRQLMp8wy1NJHXRNwnUVZk3fBFq0IVs4g0oOXmS348Gn2mgBpmCmUuN6hYLVfGd%2FYhsBL6%2FpO%2F2ATyfRCMXMbFEwstaNQ%2FWFpYMlAUiNE6niGMIPG8b4GOqUB8gS31%2FEdngKs5V7jNKj01fBOHO1CcgqH4m266EplkRnh5ojWa0Nb2n7ttT2%2FLIbuSiPk%2FSdefQUusDmBptP%2FizT4PrWIRqJOJLT8yaWz4vbPEzPtNQ%2B96Yu1cjbogSORk9piQRwQEo4HCc6rf7OAiC53%2BhpgYStkEpCpk7hHnHBtsvfvMWOmt%2BBC6nY0WKTpEggCLJeG2S8mzpGVOaAZVKCfjvtQ&X-Amz-Signature=deb9322208a1ce284134a194b4b307f7382e70708a044c498bf0904e1c09c1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PTR3FCU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFAYWV7OAwHPi1kjn73mxcmV49%2BpB5rspKm4MNvIKHzHAiEAzBW%2BnePieIC2R%2BHjZMWW664tV1VN0ex055kX36X88hwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEADfhfHW%2FRXFIAhhircAysQoGGnoUC2DNJDN%2BnLknG37dPacWBx9iqe%2BUZOsCBAAq17HM2XFxuPs8oR0DoWZnwr1A%2BinO3X0wr3YeZEaRj%2BsoufVhA7lK%2Bz6b2NGipVjdyymnwv9akr7xjmeNwFtqPYhw%2B45oiPjfwF%2BpaiPzyyBEPtg%2FBFFWYclq3XvKm8z5kwqAqjwo3fMDOYVw20leTKnWXCxI27wPZb93O43xhqD4SzI6E%2FRxDjBmPNlUUMqBbKeFgaxfhNz1fMzPqk7rWX1nFobbcrYBI7TTOYRoN4F0frTaj3iOLPDc6SK8slSihlo32bUM%2FamKv2%2BdXrjYvDtTQJW2S%2Fu0A%2Fvvca%2B4WWvk%2Bon9YA3U0BSBclR42n%2BE%2FeieHI4uuMqyuampuYfZasdpHn5FwBZmfdM%2FI%2BBGlf7LWqqx5F2Dm0ULd2797fYh1gXCC7AObkl02R6akQCYEMZIaVcqCm4Z77G6iyh%2F6jTwwvNVG23dPewn5U2eE%2FoaBUU%2F9tcM2yLrLmH300n%2F%2FWQ8Jdp8bZzcNGRQLMp8wy1NJHXRNwnUVZk3fBFq0IVs4g0oOXmS348Gn2mgBpmCmUuN6hYLVfGd%2FYhsBL6%2FpO%2F2ATyfRCMXMbFEwstaNQ%2FWFpYMlAUiNE6niGMIPG8b4GOqUB8gS31%2FEdngKs5V7jNKj01fBOHO1CcgqH4m266EplkRnh5ojWa0Nb2n7ttT2%2FLIbuSiPk%2FSdefQUusDmBptP%2FizT4PrWIRqJOJLT8yaWz4vbPEzPtNQ%2B96Yu1cjbogSORk9piQRwQEo4HCc6rf7OAiC53%2BhpgYStkEpCpk7hHnHBtsvfvMWOmt%2BBC6nY0WKTpEggCLJeG2S8mzpGVOaAZVKCfjvtQ&X-Amz-Signature=03ab041ae1ad6b41f6cafa5e4673b8557d499f671d73dd18789719042c76284d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PTR3FCU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFAYWV7OAwHPi1kjn73mxcmV49%2BpB5rspKm4MNvIKHzHAiEAzBW%2BnePieIC2R%2BHjZMWW664tV1VN0ex055kX36X88hwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEADfhfHW%2FRXFIAhhircAysQoGGnoUC2DNJDN%2BnLknG37dPacWBx9iqe%2BUZOsCBAAq17HM2XFxuPs8oR0DoWZnwr1A%2BinO3X0wr3YeZEaRj%2BsoufVhA7lK%2Bz6b2NGipVjdyymnwv9akr7xjmeNwFtqPYhw%2B45oiPjfwF%2BpaiPzyyBEPtg%2FBFFWYclq3XvKm8z5kwqAqjwo3fMDOYVw20leTKnWXCxI27wPZb93O43xhqD4SzI6E%2FRxDjBmPNlUUMqBbKeFgaxfhNz1fMzPqk7rWX1nFobbcrYBI7TTOYRoN4F0frTaj3iOLPDc6SK8slSihlo32bUM%2FamKv2%2BdXrjYvDtTQJW2S%2Fu0A%2Fvvca%2B4WWvk%2Bon9YA3U0BSBclR42n%2BE%2FeieHI4uuMqyuampuYfZasdpHn5FwBZmfdM%2FI%2BBGlf7LWqqx5F2Dm0ULd2797fYh1gXCC7AObkl02R6akQCYEMZIaVcqCm4Z77G6iyh%2F6jTwwvNVG23dPewn5U2eE%2FoaBUU%2F9tcM2yLrLmH300n%2F%2FWQ8Jdp8bZzcNGRQLMp8wy1NJHXRNwnUVZk3fBFq0IVs4g0oOXmS348Gn2mgBpmCmUuN6hYLVfGd%2FYhsBL6%2FpO%2F2ATyfRCMXMbFEwstaNQ%2FWFpYMlAUiNE6niGMIPG8b4GOqUB8gS31%2FEdngKs5V7jNKj01fBOHO1CcgqH4m266EplkRnh5ojWa0Nb2n7ttT2%2FLIbuSiPk%2FSdefQUusDmBptP%2FizT4PrWIRqJOJLT8yaWz4vbPEzPtNQ%2B96Yu1cjbogSORk9piQRwQEo4HCc6rf7OAiC53%2BhpgYStkEpCpk7hHnHBtsvfvMWOmt%2BBC6nY0WKTpEggCLJeG2S8mzpGVOaAZVKCfjvtQ&X-Amz-Signature=1dba9fbe032ee73beb72f2f10bac26331915285b3a9e957b31e6687741428ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
