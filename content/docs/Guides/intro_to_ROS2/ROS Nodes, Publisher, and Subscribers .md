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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAQT45S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVgiitcMfW9UeQRgOZIjjaCTUz2RBggIhTThnupjGnAIhAKodBRDVvxLuxgb0v%2BSbdf8%2B3AuBEZSVrtriAxUQyTy1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQZx2f9Tc%2Fi2CYP9Aq3APkFHE7Ek5ZfSSJOlIBKENQ3AowWp2Mb6jAVLzP%2F0bKYPgF%2FbyfQjrWIxD2YlvmFKkA1aYLEZK7ZGEy2oyvk2ExMbkJPF7WlV1oFD6o%2FH8ro%2BBE1T6eLlTz1%2B4bHTypK%2FmEhnzXW6tociC30XScHWMzBluSj%2F0XqeGt4eQUnB4f6IUOhc4YTZSglATCMJvns2yCCrqMtUE6V4FXzUejO%2Fbz%2F%2FghTRdSq2R4ijmMiZmNTQenEcaDErU8efxHu0I9VhFQ9v8AI9ZVyFvyNaQXiOBKiREU%2BxuU58h4WIsA1rzwbvYL4imah6kafNU2z7LPDXltnL%2FuBrhX72iNbvKaJiL6FLR2o8rfrTuhocKfmMMK9nVgdwefpwMjnANB%2FJ2tswb54Be3C6NGMQAE4%2Fyhxb0Pv8HPNj9C5u7iBtVolLOE1%2F5B%2BzdDHpgs2p%2BAjcgCdwzLW9cIXANmgW%2FlYrsQLJo1dKbItpsXdmUbpgUgdkpSKwOSsaOYjL%2BCRAMiJ9zn7RGZxnTG1vUBgdE%2B%2FvQqCh89umRS1S9ghktG%2FfVOpGjQEnlQeWduNP2wGEuc4lRSXRcPNfkwYOd%2Bn9Gv1TtBQ9BonkyaMa8Xk%2FUFbZoeA%2Bb2yKBAkkHbvFrqiwZhZDDXs%2BLBBjqkAcxUgHRocSlywLDus5hqdWxNxh%2BlrGX%2BcAWm00ipBEuY4Xh9afIUpZWddvFm5IPS%2Fl2F%2FtbwDBBzquXmTCOsGbxtrmoTmsCX7VVvkvPC4RPgUdcv5gj6cNtzZOMQ6yyEylZU9D8yVdhW7H0VbYY0WalguH7rCLDXRfqlrz4PxN16GVe0rZULwfVFlLi8VJTngypiGtqK%2B6wEecZVVjqN0Bfa2n5N&X-Amz-Signature=7fa0e9d185d340016face14452af59fad318e6f7454aeda320e65814cb1a15be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAQT45S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVgiitcMfW9UeQRgOZIjjaCTUz2RBggIhTThnupjGnAIhAKodBRDVvxLuxgb0v%2BSbdf8%2B3AuBEZSVrtriAxUQyTy1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQZx2f9Tc%2Fi2CYP9Aq3APkFHE7Ek5ZfSSJOlIBKENQ3AowWp2Mb6jAVLzP%2F0bKYPgF%2FbyfQjrWIxD2YlvmFKkA1aYLEZK7ZGEy2oyvk2ExMbkJPF7WlV1oFD6o%2FH8ro%2BBE1T6eLlTz1%2B4bHTypK%2FmEhnzXW6tociC30XScHWMzBluSj%2F0XqeGt4eQUnB4f6IUOhc4YTZSglATCMJvns2yCCrqMtUE6V4FXzUejO%2Fbz%2F%2FghTRdSq2R4ijmMiZmNTQenEcaDErU8efxHu0I9VhFQ9v8AI9ZVyFvyNaQXiOBKiREU%2BxuU58h4WIsA1rzwbvYL4imah6kafNU2z7LPDXltnL%2FuBrhX72iNbvKaJiL6FLR2o8rfrTuhocKfmMMK9nVgdwefpwMjnANB%2FJ2tswb54Be3C6NGMQAE4%2Fyhxb0Pv8HPNj9C5u7iBtVolLOE1%2F5B%2BzdDHpgs2p%2BAjcgCdwzLW9cIXANmgW%2FlYrsQLJo1dKbItpsXdmUbpgUgdkpSKwOSsaOYjL%2BCRAMiJ9zn7RGZxnTG1vUBgdE%2B%2FvQqCh89umRS1S9ghktG%2FfVOpGjQEnlQeWduNP2wGEuc4lRSXRcPNfkwYOd%2Bn9Gv1TtBQ9BonkyaMa8Xk%2FUFbZoeA%2Bb2yKBAkkHbvFrqiwZhZDDXs%2BLBBjqkAcxUgHRocSlywLDus5hqdWxNxh%2BlrGX%2BcAWm00ipBEuY4Xh9afIUpZWddvFm5IPS%2Fl2F%2FtbwDBBzquXmTCOsGbxtrmoTmsCX7VVvkvPC4RPgUdcv5gj6cNtzZOMQ6yyEylZU9D8yVdhW7H0VbYY0WalguH7rCLDXRfqlrz4PxN16GVe0rZULwfVFlLi8VJTngypiGtqK%2B6wEecZVVjqN0Bfa2n5N&X-Amz-Signature=83b76b84cc8e8e5d3edd4564dab4fffc1bae30287fbba73c29d852b4ae2cc83d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAQT45S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVgiitcMfW9UeQRgOZIjjaCTUz2RBggIhTThnupjGnAIhAKodBRDVvxLuxgb0v%2BSbdf8%2B3AuBEZSVrtriAxUQyTy1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQZx2f9Tc%2Fi2CYP9Aq3APkFHE7Ek5ZfSSJOlIBKENQ3AowWp2Mb6jAVLzP%2F0bKYPgF%2FbyfQjrWIxD2YlvmFKkA1aYLEZK7ZGEy2oyvk2ExMbkJPF7WlV1oFD6o%2FH8ro%2BBE1T6eLlTz1%2B4bHTypK%2FmEhnzXW6tociC30XScHWMzBluSj%2F0XqeGt4eQUnB4f6IUOhc4YTZSglATCMJvns2yCCrqMtUE6V4FXzUejO%2Fbz%2F%2FghTRdSq2R4ijmMiZmNTQenEcaDErU8efxHu0I9VhFQ9v8AI9ZVyFvyNaQXiOBKiREU%2BxuU58h4WIsA1rzwbvYL4imah6kafNU2z7LPDXltnL%2FuBrhX72iNbvKaJiL6FLR2o8rfrTuhocKfmMMK9nVgdwefpwMjnANB%2FJ2tswb54Be3C6NGMQAE4%2Fyhxb0Pv8HPNj9C5u7iBtVolLOE1%2F5B%2BzdDHpgs2p%2BAjcgCdwzLW9cIXANmgW%2FlYrsQLJo1dKbItpsXdmUbpgUgdkpSKwOSsaOYjL%2BCRAMiJ9zn7RGZxnTG1vUBgdE%2B%2FvQqCh89umRS1S9ghktG%2FfVOpGjQEnlQeWduNP2wGEuc4lRSXRcPNfkwYOd%2Bn9Gv1TtBQ9BonkyaMa8Xk%2FUFbZoeA%2Bb2yKBAkkHbvFrqiwZhZDDXs%2BLBBjqkAcxUgHRocSlywLDus5hqdWxNxh%2BlrGX%2BcAWm00ipBEuY4Xh9afIUpZWddvFm5IPS%2Fl2F%2FtbwDBBzquXmTCOsGbxtrmoTmsCX7VVvkvPC4RPgUdcv5gj6cNtzZOMQ6yyEylZU9D8yVdhW7H0VbYY0WalguH7rCLDXRfqlrz4PxN16GVe0rZULwfVFlLi8VJTngypiGtqK%2B6wEecZVVjqN0Bfa2n5N&X-Amz-Signature=9016a10b0624b7fa6140fec40f3a09aaf750ea59a67aeed41bfe9493775f4e35&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAQT45S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVgiitcMfW9UeQRgOZIjjaCTUz2RBggIhTThnupjGnAIhAKodBRDVvxLuxgb0v%2BSbdf8%2B3AuBEZSVrtriAxUQyTy1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQZx2f9Tc%2Fi2CYP9Aq3APkFHE7Ek5ZfSSJOlIBKENQ3AowWp2Mb6jAVLzP%2F0bKYPgF%2FbyfQjrWIxD2YlvmFKkA1aYLEZK7ZGEy2oyvk2ExMbkJPF7WlV1oFD6o%2FH8ro%2BBE1T6eLlTz1%2B4bHTypK%2FmEhnzXW6tociC30XScHWMzBluSj%2F0XqeGt4eQUnB4f6IUOhc4YTZSglATCMJvns2yCCrqMtUE6V4FXzUejO%2Fbz%2F%2FghTRdSq2R4ijmMiZmNTQenEcaDErU8efxHu0I9VhFQ9v8AI9ZVyFvyNaQXiOBKiREU%2BxuU58h4WIsA1rzwbvYL4imah6kafNU2z7LPDXltnL%2FuBrhX72iNbvKaJiL6FLR2o8rfrTuhocKfmMMK9nVgdwefpwMjnANB%2FJ2tswb54Be3C6NGMQAE4%2Fyhxb0Pv8HPNj9C5u7iBtVolLOE1%2F5B%2BzdDHpgs2p%2BAjcgCdwzLW9cIXANmgW%2FlYrsQLJo1dKbItpsXdmUbpgUgdkpSKwOSsaOYjL%2BCRAMiJ9zn7RGZxnTG1vUBgdE%2B%2FvQqCh89umRS1S9ghktG%2FfVOpGjQEnlQeWduNP2wGEuc4lRSXRcPNfkwYOd%2Bn9Gv1TtBQ9BonkyaMa8Xk%2FUFbZoeA%2Bb2yKBAkkHbvFrqiwZhZDDXs%2BLBBjqkAcxUgHRocSlywLDus5hqdWxNxh%2BlrGX%2BcAWm00ipBEuY4Xh9afIUpZWddvFm5IPS%2Fl2F%2FtbwDBBzquXmTCOsGbxtrmoTmsCX7VVvkvPC4RPgUdcv5gj6cNtzZOMQ6yyEylZU9D8yVdhW7H0VbYY0WalguH7rCLDXRfqlrz4PxN16GVe0rZULwfVFlLi8VJTngypiGtqK%2B6wEecZVVjqN0Bfa2n5N&X-Amz-Signature=f7910ead2b880a0fea0d3e1c2582b58afa1342c5e2abff26ccf3cbda286e3d27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAQT45S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVgiitcMfW9UeQRgOZIjjaCTUz2RBggIhTThnupjGnAIhAKodBRDVvxLuxgb0v%2BSbdf8%2B3AuBEZSVrtriAxUQyTy1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQZx2f9Tc%2Fi2CYP9Aq3APkFHE7Ek5ZfSSJOlIBKENQ3AowWp2Mb6jAVLzP%2F0bKYPgF%2FbyfQjrWIxD2YlvmFKkA1aYLEZK7ZGEy2oyvk2ExMbkJPF7WlV1oFD6o%2FH8ro%2BBE1T6eLlTz1%2B4bHTypK%2FmEhnzXW6tociC30XScHWMzBluSj%2F0XqeGt4eQUnB4f6IUOhc4YTZSglATCMJvns2yCCrqMtUE6V4FXzUejO%2Fbz%2F%2FghTRdSq2R4ijmMiZmNTQenEcaDErU8efxHu0I9VhFQ9v8AI9ZVyFvyNaQXiOBKiREU%2BxuU58h4WIsA1rzwbvYL4imah6kafNU2z7LPDXltnL%2FuBrhX72iNbvKaJiL6FLR2o8rfrTuhocKfmMMK9nVgdwefpwMjnANB%2FJ2tswb54Be3C6NGMQAE4%2Fyhxb0Pv8HPNj9C5u7iBtVolLOE1%2F5B%2BzdDHpgs2p%2BAjcgCdwzLW9cIXANmgW%2FlYrsQLJo1dKbItpsXdmUbpgUgdkpSKwOSsaOYjL%2BCRAMiJ9zn7RGZxnTG1vUBgdE%2B%2FvQqCh89umRS1S9ghktG%2FfVOpGjQEnlQeWduNP2wGEuc4lRSXRcPNfkwYOd%2Bn9Gv1TtBQ9BonkyaMa8Xk%2FUFbZoeA%2Bb2yKBAkkHbvFrqiwZhZDDXs%2BLBBjqkAcxUgHRocSlywLDus5hqdWxNxh%2BlrGX%2BcAWm00ipBEuY4Xh9afIUpZWddvFm5IPS%2Fl2F%2FtbwDBBzquXmTCOsGbxtrmoTmsCX7VVvkvPC4RPgUdcv5gj6cNtzZOMQ6yyEylZU9D8yVdhW7H0VbYY0WalguH7rCLDXRfqlrz4PxN16GVe0rZULwfVFlLi8VJTngypiGtqK%2B6wEecZVVjqN0Bfa2n5N&X-Amz-Signature=0aee040f858ea47ade328a4780b01f2bd6e72509eefc96b2f6db54cd02e0da05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAQT45S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVgiitcMfW9UeQRgOZIjjaCTUz2RBggIhTThnupjGnAIhAKodBRDVvxLuxgb0v%2BSbdf8%2B3AuBEZSVrtriAxUQyTy1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQZx2f9Tc%2Fi2CYP9Aq3APkFHE7Ek5ZfSSJOlIBKENQ3AowWp2Mb6jAVLzP%2F0bKYPgF%2FbyfQjrWIxD2YlvmFKkA1aYLEZK7ZGEy2oyvk2ExMbkJPF7WlV1oFD6o%2FH8ro%2BBE1T6eLlTz1%2B4bHTypK%2FmEhnzXW6tociC30XScHWMzBluSj%2F0XqeGt4eQUnB4f6IUOhc4YTZSglATCMJvns2yCCrqMtUE6V4FXzUejO%2Fbz%2F%2FghTRdSq2R4ijmMiZmNTQenEcaDErU8efxHu0I9VhFQ9v8AI9ZVyFvyNaQXiOBKiREU%2BxuU58h4WIsA1rzwbvYL4imah6kafNU2z7LPDXltnL%2FuBrhX72iNbvKaJiL6FLR2o8rfrTuhocKfmMMK9nVgdwefpwMjnANB%2FJ2tswb54Be3C6NGMQAE4%2Fyhxb0Pv8HPNj9C5u7iBtVolLOE1%2F5B%2BzdDHpgs2p%2BAjcgCdwzLW9cIXANmgW%2FlYrsQLJo1dKbItpsXdmUbpgUgdkpSKwOSsaOYjL%2BCRAMiJ9zn7RGZxnTG1vUBgdE%2B%2FvQqCh89umRS1S9ghktG%2FfVOpGjQEnlQeWduNP2wGEuc4lRSXRcPNfkwYOd%2Bn9Gv1TtBQ9BonkyaMa8Xk%2FUFbZoeA%2Bb2yKBAkkHbvFrqiwZhZDDXs%2BLBBjqkAcxUgHRocSlywLDus5hqdWxNxh%2BlrGX%2BcAWm00ipBEuY4Xh9afIUpZWddvFm5IPS%2Fl2F%2FtbwDBBzquXmTCOsGbxtrmoTmsCX7VVvkvPC4RPgUdcv5gj6cNtzZOMQ6yyEylZU9D8yVdhW7H0VbYY0WalguH7rCLDXRfqlrz4PxN16GVe0rZULwfVFlLi8VJTngypiGtqK%2B6wEecZVVjqN0Bfa2n5N&X-Amz-Signature=a8c0f96d3323c4df34522b26defbc9b11407983b498784f8f4681371d658c426&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAQT45S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVgiitcMfW9UeQRgOZIjjaCTUz2RBggIhTThnupjGnAIhAKodBRDVvxLuxgb0v%2BSbdf8%2B3AuBEZSVrtriAxUQyTy1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQZx2f9Tc%2Fi2CYP9Aq3APkFHE7Ek5ZfSSJOlIBKENQ3AowWp2Mb6jAVLzP%2F0bKYPgF%2FbyfQjrWIxD2YlvmFKkA1aYLEZK7ZGEy2oyvk2ExMbkJPF7WlV1oFD6o%2FH8ro%2BBE1T6eLlTz1%2B4bHTypK%2FmEhnzXW6tociC30XScHWMzBluSj%2F0XqeGt4eQUnB4f6IUOhc4YTZSglATCMJvns2yCCrqMtUE6V4FXzUejO%2Fbz%2F%2FghTRdSq2R4ijmMiZmNTQenEcaDErU8efxHu0I9VhFQ9v8AI9ZVyFvyNaQXiOBKiREU%2BxuU58h4WIsA1rzwbvYL4imah6kafNU2z7LPDXltnL%2FuBrhX72iNbvKaJiL6FLR2o8rfrTuhocKfmMMK9nVgdwefpwMjnANB%2FJ2tswb54Be3C6NGMQAE4%2Fyhxb0Pv8HPNj9C5u7iBtVolLOE1%2F5B%2BzdDHpgs2p%2BAjcgCdwzLW9cIXANmgW%2FlYrsQLJo1dKbItpsXdmUbpgUgdkpSKwOSsaOYjL%2BCRAMiJ9zn7RGZxnTG1vUBgdE%2B%2FvQqCh89umRS1S9ghktG%2FfVOpGjQEnlQeWduNP2wGEuc4lRSXRcPNfkwYOd%2Bn9Gv1TtBQ9BonkyaMa8Xk%2FUFbZoeA%2Bb2yKBAkkHbvFrqiwZhZDDXs%2BLBBjqkAcxUgHRocSlywLDus5hqdWxNxh%2BlrGX%2BcAWm00ipBEuY4Xh9afIUpZWddvFm5IPS%2Fl2F%2FtbwDBBzquXmTCOsGbxtrmoTmsCX7VVvkvPC4RPgUdcv5gj6cNtzZOMQ6yyEylZU9D8yVdhW7H0VbYY0WalguH7rCLDXRfqlrz4PxN16GVe0rZULwfVFlLi8VJTngypiGtqK%2B6wEecZVVjqN0Bfa2n5N&X-Amz-Signature=795211ba530fb8b9fd69e786009a6daeacb4be9f4c87627e5581281bb1b28159&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAQT45S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVgiitcMfW9UeQRgOZIjjaCTUz2RBggIhTThnupjGnAIhAKodBRDVvxLuxgb0v%2BSbdf8%2B3AuBEZSVrtriAxUQyTy1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQZx2f9Tc%2Fi2CYP9Aq3APkFHE7Ek5ZfSSJOlIBKENQ3AowWp2Mb6jAVLzP%2F0bKYPgF%2FbyfQjrWIxD2YlvmFKkA1aYLEZK7ZGEy2oyvk2ExMbkJPF7WlV1oFD6o%2FH8ro%2BBE1T6eLlTz1%2B4bHTypK%2FmEhnzXW6tociC30XScHWMzBluSj%2F0XqeGt4eQUnB4f6IUOhc4YTZSglATCMJvns2yCCrqMtUE6V4FXzUejO%2Fbz%2F%2FghTRdSq2R4ijmMiZmNTQenEcaDErU8efxHu0I9VhFQ9v8AI9ZVyFvyNaQXiOBKiREU%2BxuU58h4WIsA1rzwbvYL4imah6kafNU2z7LPDXltnL%2FuBrhX72iNbvKaJiL6FLR2o8rfrTuhocKfmMMK9nVgdwefpwMjnANB%2FJ2tswb54Be3C6NGMQAE4%2Fyhxb0Pv8HPNj9C5u7iBtVolLOE1%2F5B%2BzdDHpgs2p%2BAjcgCdwzLW9cIXANmgW%2FlYrsQLJo1dKbItpsXdmUbpgUgdkpSKwOSsaOYjL%2BCRAMiJ9zn7RGZxnTG1vUBgdE%2B%2FvQqCh89umRS1S9ghktG%2FfVOpGjQEnlQeWduNP2wGEuc4lRSXRcPNfkwYOd%2Bn9Gv1TtBQ9BonkyaMa8Xk%2FUFbZoeA%2Bb2yKBAkkHbvFrqiwZhZDDXs%2BLBBjqkAcxUgHRocSlywLDus5hqdWxNxh%2BlrGX%2BcAWm00ipBEuY4Xh9afIUpZWddvFm5IPS%2Fl2F%2FtbwDBBzquXmTCOsGbxtrmoTmsCX7VVvkvPC4RPgUdcv5gj6cNtzZOMQ6yyEylZU9D8yVdhW7H0VbYY0WalguH7rCLDXRfqlrz4PxN16GVe0rZULwfVFlLi8VJTngypiGtqK%2B6wEecZVVjqN0Bfa2n5N&X-Amz-Signature=89d29dbdd41db103448ebcb730f8f9554da6fa0262f6662f17ec7dcea73ad21d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
