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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZF6A6GW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6A9FZyBUHNxLp%2FX9LS5tJfjLUqAXOqF6IoW5hQR7A3QIgIGrL7T%2BJiDhjmWuM7JcSqTLhIEFp4z5ZIzn7OAyd1wgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHwcNpEJW1GaPtOj%2FyrcA0D4Cgme0mESODNO4YW27DEN0g98xgr2fLHTUwSSHF99mPysfBMzE0FVCyRpyyGhSIbQ%2Fasoma9bMnk%2FOD8Bwy%2FH3KBRvzQYAQEs6GXX0yOEldWkfFe1zoYALFAP77Ii9h4ibPpWLf0q%2BQDgfvd4GlC%2FI1r54IDpnTzOjqWBs2AzkTwEvz0C%2F9SwGvrBiZH1tgsJhOD1K3MKxJ6Ol3X8OEj51NfhMNEZwHakd2cUGe77FWMaRwZSjme7yPIJazgNlZd69C833NQu%2FDaa8mVxbHHC2rqSvCmuC6tflUisD3oPWBdHZW%2FgmTFxAoIkoNRwoEjtrsjh9A1H5TihXkv3PARdPeotl093VGd2eLxWtpieKYWz88HZR1L%2BnQ6qxdFRM%2BodH1YaWZvmTLH1wvM%2BAQ7l%2B8yOclhS0te7B5hwds%2BYJyDjSeYDRKqm4SC3SARSOvVR57RZdmyDYM53pXVmQpifUsfNehz%2BF%2BFbOcD1qycamEm3YS8%2FdSSPKXYEBQ2ZH3ciuSeDUvu%2BomFQlQTFeXuIzwCyNdzgK8I6db6ZM%2FLvF2UjMFX1demfmlEZe8%2BECI5lVu7osTdAOkkNWfAJlLCiS4ESDF%2F2QKAC40chzRCL0iPgRG7mFZac24AIMOKw0sMGOqUBO8dabwJahn87abrR48BYE2h6QJzvVKKfkSh8o%2Fq3zRIRYACB%2B2ZARx46c3ywE%2BEpCkgR40p1i9QH0EapiwczSf03MQZuL6Wgyb%2Bv2jLeVpYD936c64DB0mhl1RPGpgHadkHO7hzt6RY%2B1i%2BKgIa%2Bd4N57giO1AD%2BwBD5tJJhfaTgYmtTn0wRRJ0ZfLM41wTh7CML1fvM745tN1CFETKtTwnIktAb&X-Amz-Signature=79bb000085ee227874db375f4ec8ae64a66f2e22b66c4438e8c2bc0b313042c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZF6A6GW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6A9FZyBUHNxLp%2FX9LS5tJfjLUqAXOqF6IoW5hQR7A3QIgIGrL7T%2BJiDhjmWuM7JcSqTLhIEFp4z5ZIzn7OAyd1wgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHwcNpEJW1GaPtOj%2FyrcA0D4Cgme0mESODNO4YW27DEN0g98xgr2fLHTUwSSHF99mPysfBMzE0FVCyRpyyGhSIbQ%2Fasoma9bMnk%2FOD8Bwy%2FH3KBRvzQYAQEs6GXX0yOEldWkfFe1zoYALFAP77Ii9h4ibPpWLf0q%2BQDgfvd4GlC%2FI1r54IDpnTzOjqWBs2AzkTwEvz0C%2F9SwGvrBiZH1tgsJhOD1K3MKxJ6Ol3X8OEj51NfhMNEZwHakd2cUGe77FWMaRwZSjme7yPIJazgNlZd69C833NQu%2FDaa8mVxbHHC2rqSvCmuC6tflUisD3oPWBdHZW%2FgmTFxAoIkoNRwoEjtrsjh9A1H5TihXkv3PARdPeotl093VGd2eLxWtpieKYWz88HZR1L%2BnQ6qxdFRM%2BodH1YaWZvmTLH1wvM%2BAQ7l%2B8yOclhS0te7B5hwds%2BYJyDjSeYDRKqm4SC3SARSOvVR57RZdmyDYM53pXVmQpifUsfNehz%2BF%2BFbOcD1qycamEm3YS8%2FdSSPKXYEBQ2ZH3ciuSeDUvu%2BomFQlQTFeXuIzwCyNdzgK8I6db6ZM%2FLvF2UjMFX1demfmlEZe8%2BECI5lVu7osTdAOkkNWfAJlLCiS4ESDF%2F2QKAC40chzRCL0iPgRG7mFZac24AIMOKw0sMGOqUBO8dabwJahn87abrR48BYE2h6QJzvVKKfkSh8o%2Fq3zRIRYACB%2B2ZARx46c3ywE%2BEpCkgR40p1i9QH0EapiwczSf03MQZuL6Wgyb%2Bv2jLeVpYD936c64DB0mhl1RPGpgHadkHO7hzt6RY%2B1i%2BKgIa%2Bd4N57giO1AD%2BwBD5tJJhfaTgYmtTn0wRRJ0ZfLM41wTh7CML1fvM745tN1CFETKtTwnIktAb&X-Amz-Signature=f6285dc14ee2d51ebaad7cd4f736eb56f329f0083770758c6320f4f3b2bc1c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZF6A6GW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6A9FZyBUHNxLp%2FX9LS5tJfjLUqAXOqF6IoW5hQR7A3QIgIGrL7T%2BJiDhjmWuM7JcSqTLhIEFp4z5ZIzn7OAyd1wgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHwcNpEJW1GaPtOj%2FyrcA0D4Cgme0mESODNO4YW27DEN0g98xgr2fLHTUwSSHF99mPysfBMzE0FVCyRpyyGhSIbQ%2Fasoma9bMnk%2FOD8Bwy%2FH3KBRvzQYAQEs6GXX0yOEldWkfFe1zoYALFAP77Ii9h4ibPpWLf0q%2BQDgfvd4GlC%2FI1r54IDpnTzOjqWBs2AzkTwEvz0C%2F9SwGvrBiZH1tgsJhOD1K3MKxJ6Ol3X8OEj51NfhMNEZwHakd2cUGe77FWMaRwZSjme7yPIJazgNlZd69C833NQu%2FDaa8mVxbHHC2rqSvCmuC6tflUisD3oPWBdHZW%2FgmTFxAoIkoNRwoEjtrsjh9A1H5TihXkv3PARdPeotl093VGd2eLxWtpieKYWz88HZR1L%2BnQ6qxdFRM%2BodH1YaWZvmTLH1wvM%2BAQ7l%2B8yOclhS0te7B5hwds%2BYJyDjSeYDRKqm4SC3SARSOvVR57RZdmyDYM53pXVmQpifUsfNehz%2BF%2BFbOcD1qycamEm3YS8%2FdSSPKXYEBQ2ZH3ciuSeDUvu%2BomFQlQTFeXuIzwCyNdzgK8I6db6ZM%2FLvF2UjMFX1demfmlEZe8%2BECI5lVu7osTdAOkkNWfAJlLCiS4ESDF%2F2QKAC40chzRCL0iPgRG7mFZac24AIMOKw0sMGOqUBO8dabwJahn87abrR48BYE2h6QJzvVKKfkSh8o%2Fq3zRIRYACB%2B2ZARx46c3ywE%2BEpCkgR40p1i9QH0EapiwczSf03MQZuL6Wgyb%2Bv2jLeVpYD936c64DB0mhl1RPGpgHadkHO7hzt6RY%2B1i%2BKgIa%2Bd4N57giO1AD%2BwBD5tJJhfaTgYmtTn0wRRJ0ZfLM41wTh7CML1fvM745tN1CFETKtTwnIktAb&X-Amz-Signature=58b8a001d8715bb36711a6dfc5e203de742a7360f9f812d00b44c2690e9afb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZF6A6GW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6A9FZyBUHNxLp%2FX9LS5tJfjLUqAXOqF6IoW5hQR7A3QIgIGrL7T%2BJiDhjmWuM7JcSqTLhIEFp4z5ZIzn7OAyd1wgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHwcNpEJW1GaPtOj%2FyrcA0D4Cgme0mESODNO4YW27DEN0g98xgr2fLHTUwSSHF99mPysfBMzE0FVCyRpyyGhSIbQ%2Fasoma9bMnk%2FOD8Bwy%2FH3KBRvzQYAQEs6GXX0yOEldWkfFe1zoYALFAP77Ii9h4ibPpWLf0q%2BQDgfvd4GlC%2FI1r54IDpnTzOjqWBs2AzkTwEvz0C%2F9SwGvrBiZH1tgsJhOD1K3MKxJ6Ol3X8OEj51NfhMNEZwHakd2cUGe77FWMaRwZSjme7yPIJazgNlZd69C833NQu%2FDaa8mVxbHHC2rqSvCmuC6tflUisD3oPWBdHZW%2FgmTFxAoIkoNRwoEjtrsjh9A1H5TihXkv3PARdPeotl093VGd2eLxWtpieKYWz88HZR1L%2BnQ6qxdFRM%2BodH1YaWZvmTLH1wvM%2BAQ7l%2B8yOclhS0te7B5hwds%2BYJyDjSeYDRKqm4SC3SARSOvVR57RZdmyDYM53pXVmQpifUsfNehz%2BF%2BFbOcD1qycamEm3YS8%2FdSSPKXYEBQ2ZH3ciuSeDUvu%2BomFQlQTFeXuIzwCyNdzgK8I6db6ZM%2FLvF2UjMFX1demfmlEZe8%2BECI5lVu7osTdAOkkNWfAJlLCiS4ESDF%2F2QKAC40chzRCL0iPgRG7mFZac24AIMOKw0sMGOqUBO8dabwJahn87abrR48BYE2h6QJzvVKKfkSh8o%2Fq3zRIRYACB%2B2ZARx46c3ywE%2BEpCkgR40p1i9QH0EapiwczSf03MQZuL6Wgyb%2Bv2jLeVpYD936c64DB0mhl1RPGpgHadkHO7hzt6RY%2B1i%2BKgIa%2Bd4N57giO1AD%2BwBD5tJJhfaTgYmtTn0wRRJ0ZfLM41wTh7CML1fvM745tN1CFETKtTwnIktAb&X-Amz-Signature=cf9357ef2617a3dd067972244d83fc32a265d5a7382e3908281f6f4c7710ba34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZF6A6GW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6A9FZyBUHNxLp%2FX9LS5tJfjLUqAXOqF6IoW5hQR7A3QIgIGrL7T%2BJiDhjmWuM7JcSqTLhIEFp4z5ZIzn7OAyd1wgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHwcNpEJW1GaPtOj%2FyrcA0D4Cgme0mESODNO4YW27DEN0g98xgr2fLHTUwSSHF99mPysfBMzE0FVCyRpyyGhSIbQ%2Fasoma9bMnk%2FOD8Bwy%2FH3KBRvzQYAQEs6GXX0yOEldWkfFe1zoYALFAP77Ii9h4ibPpWLf0q%2BQDgfvd4GlC%2FI1r54IDpnTzOjqWBs2AzkTwEvz0C%2F9SwGvrBiZH1tgsJhOD1K3MKxJ6Ol3X8OEj51NfhMNEZwHakd2cUGe77FWMaRwZSjme7yPIJazgNlZd69C833NQu%2FDaa8mVxbHHC2rqSvCmuC6tflUisD3oPWBdHZW%2FgmTFxAoIkoNRwoEjtrsjh9A1H5TihXkv3PARdPeotl093VGd2eLxWtpieKYWz88HZR1L%2BnQ6qxdFRM%2BodH1YaWZvmTLH1wvM%2BAQ7l%2B8yOclhS0te7B5hwds%2BYJyDjSeYDRKqm4SC3SARSOvVR57RZdmyDYM53pXVmQpifUsfNehz%2BF%2BFbOcD1qycamEm3YS8%2FdSSPKXYEBQ2ZH3ciuSeDUvu%2BomFQlQTFeXuIzwCyNdzgK8I6db6ZM%2FLvF2UjMFX1demfmlEZe8%2BECI5lVu7osTdAOkkNWfAJlLCiS4ESDF%2F2QKAC40chzRCL0iPgRG7mFZac24AIMOKw0sMGOqUBO8dabwJahn87abrR48BYE2h6QJzvVKKfkSh8o%2Fq3zRIRYACB%2B2ZARx46c3ywE%2BEpCkgR40p1i9QH0EapiwczSf03MQZuL6Wgyb%2Bv2jLeVpYD936c64DB0mhl1RPGpgHadkHO7hzt6RY%2B1i%2BKgIa%2Bd4N57giO1AD%2BwBD5tJJhfaTgYmtTn0wRRJ0ZfLM41wTh7CML1fvM745tN1CFETKtTwnIktAb&X-Amz-Signature=393438d4f01ae2ec178cee64e2f5c70bea91bfbab7f891f7ca4ea8cc7e395404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZF6A6GW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6A9FZyBUHNxLp%2FX9LS5tJfjLUqAXOqF6IoW5hQR7A3QIgIGrL7T%2BJiDhjmWuM7JcSqTLhIEFp4z5ZIzn7OAyd1wgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHwcNpEJW1GaPtOj%2FyrcA0D4Cgme0mESODNO4YW27DEN0g98xgr2fLHTUwSSHF99mPysfBMzE0FVCyRpyyGhSIbQ%2Fasoma9bMnk%2FOD8Bwy%2FH3KBRvzQYAQEs6GXX0yOEldWkfFe1zoYALFAP77Ii9h4ibPpWLf0q%2BQDgfvd4GlC%2FI1r54IDpnTzOjqWBs2AzkTwEvz0C%2F9SwGvrBiZH1tgsJhOD1K3MKxJ6Ol3X8OEj51NfhMNEZwHakd2cUGe77FWMaRwZSjme7yPIJazgNlZd69C833NQu%2FDaa8mVxbHHC2rqSvCmuC6tflUisD3oPWBdHZW%2FgmTFxAoIkoNRwoEjtrsjh9A1H5TihXkv3PARdPeotl093VGd2eLxWtpieKYWz88HZR1L%2BnQ6qxdFRM%2BodH1YaWZvmTLH1wvM%2BAQ7l%2B8yOclhS0te7B5hwds%2BYJyDjSeYDRKqm4SC3SARSOvVR57RZdmyDYM53pXVmQpifUsfNehz%2BF%2BFbOcD1qycamEm3YS8%2FdSSPKXYEBQ2ZH3ciuSeDUvu%2BomFQlQTFeXuIzwCyNdzgK8I6db6ZM%2FLvF2UjMFX1demfmlEZe8%2BECI5lVu7osTdAOkkNWfAJlLCiS4ESDF%2F2QKAC40chzRCL0iPgRG7mFZac24AIMOKw0sMGOqUBO8dabwJahn87abrR48BYE2h6QJzvVKKfkSh8o%2Fq3zRIRYACB%2B2ZARx46c3ywE%2BEpCkgR40p1i9QH0EapiwczSf03MQZuL6Wgyb%2Bv2jLeVpYD936c64DB0mhl1RPGpgHadkHO7hzt6RY%2B1i%2BKgIa%2Bd4N57giO1AD%2BwBD5tJJhfaTgYmtTn0wRRJ0ZfLM41wTh7CML1fvM745tN1CFETKtTwnIktAb&X-Amz-Signature=cc0274b7a25ee454dc92fa78dc6a6980432a39143eeb22bb65dbd6b750b3164a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZF6A6GW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6A9FZyBUHNxLp%2FX9LS5tJfjLUqAXOqF6IoW5hQR7A3QIgIGrL7T%2BJiDhjmWuM7JcSqTLhIEFp4z5ZIzn7OAyd1wgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHwcNpEJW1GaPtOj%2FyrcA0D4Cgme0mESODNO4YW27DEN0g98xgr2fLHTUwSSHF99mPysfBMzE0FVCyRpyyGhSIbQ%2Fasoma9bMnk%2FOD8Bwy%2FH3KBRvzQYAQEs6GXX0yOEldWkfFe1zoYALFAP77Ii9h4ibPpWLf0q%2BQDgfvd4GlC%2FI1r54IDpnTzOjqWBs2AzkTwEvz0C%2F9SwGvrBiZH1tgsJhOD1K3MKxJ6Ol3X8OEj51NfhMNEZwHakd2cUGe77FWMaRwZSjme7yPIJazgNlZd69C833NQu%2FDaa8mVxbHHC2rqSvCmuC6tflUisD3oPWBdHZW%2FgmTFxAoIkoNRwoEjtrsjh9A1H5TihXkv3PARdPeotl093VGd2eLxWtpieKYWz88HZR1L%2BnQ6qxdFRM%2BodH1YaWZvmTLH1wvM%2BAQ7l%2B8yOclhS0te7B5hwds%2BYJyDjSeYDRKqm4SC3SARSOvVR57RZdmyDYM53pXVmQpifUsfNehz%2BF%2BFbOcD1qycamEm3YS8%2FdSSPKXYEBQ2ZH3ciuSeDUvu%2BomFQlQTFeXuIzwCyNdzgK8I6db6ZM%2FLvF2UjMFX1demfmlEZe8%2BECI5lVu7osTdAOkkNWfAJlLCiS4ESDF%2F2QKAC40chzRCL0iPgRG7mFZac24AIMOKw0sMGOqUBO8dabwJahn87abrR48BYE2h6QJzvVKKfkSh8o%2Fq3zRIRYACB%2B2ZARx46c3ywE%2BEpCkgR40p1i9QH0EapiwczSf03MQZuL6Wgyb%2Bv2jLeVpYD936c64DB0mhl1RPGpgHadkHO7hzt6RY%2B1i%2BKgIa%2Bd4N57giO1AD%2BwBD5tJJhfaTgYmtTn0wRRJ0ZfLM41wTh7CML1fvM745tN1CFETKtTwnIktAb&X-Amz-Signature=c930db2142aa2e8b32f331f205bcebe1dd33f819114e40970d2bacc3c1dc4ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZF6A6GW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC6A9FZyBUHNxLp%2FX9LS5tJfjLUqAXOqF6IoW5hQR7A3QIgIGrL7T%2BJiDhjmWuM7JcSqTLhIEFp4z5ZIzn7OAyd1wgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHwcNpEJW1GaPtOj%2FyrcA0D4Cgme0mESODNO4YW27DEN0g98xgr2fLHTUwSSHF99mPysfBMzE0FVCyRpyyGhSIbQ%2Fasoma9bMnk%2FOD8Bwy%2FH3KBRvzQYAQEs6GXX0yOEldWkfFe1zoYALFAP77Ii9h4ibPpWLf0q%2BQDgfvd4GlC%2FI1r54IDpnTzOjqWBs2AzkTwEvz0C%2F9SwGvrBiZH1tgsJhOD1K3MKxJ6Ol3X8OEj51NfhMNEZwHakd2cUGe77FWMaRwZSjme7yPIJazgNlZd69C833NQu%2FDaa8mVxbHHC2rqSvCmuC6tflUisD3oPWBdHZW%2FgmTFxAoIkoNRwoEjtrsjh9A1H5TihXkv3PARdPeotl093VGd2eLxWtpieKYWz88HZR1L%2BnQ6qxdFRM%2BodH1YaWZvmTLH1wvM%2BAQ7l%2B8yOclhS0te7B5hwds%2BYJyDjSeYDRKqm4SC3SARSOvVR57RZdmyDYM53pXVmQpifUsfNehz%2BF%2BFbOcD1qycamEm3YS8%2FdSSPKXYEBQ2ZH3ciuSeDUvu%2BomFQlQTFeXuIzwCyNdzgK8I6db6ZM%2FLvF2UjMFX1demfmlEZe8%2BECI5lVu7osTdAOkkNWfAJlLCiS4ESDF%2F2QKAC40chzRCL0iPgRG7mFZac24AIMOKw0sMGOqUBO8dabwJahn87abrR48BYE2h6QJzvVKKfkSh8o%2Fq3zRIRYACB%2B2ZARx46c3ywE%2BEpCkgR40p1i9QH0EapiwczSf03MQZuL6Wgyb%2Bv2jLeVpYD936c64DB0mhl1RPGpgHadkHO7hzt6RY%2B1i%2BKgIa%2Bd4N57giO1AD%2BwBD5tJJhfaTgYmtTn0wRRJ0ZfLM41wTh7CML1fvM745tN1CFETKtTwnIktAb&X-Amz-Signature=40cf4add11040eacdb6c6346f4cebfcf6aace37b3455bf30cbc6d8ccbd4144cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
