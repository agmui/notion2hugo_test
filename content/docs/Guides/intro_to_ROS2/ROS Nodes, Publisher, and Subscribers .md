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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2LAWKU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICA7BGNwtUhBctb1uTZuGPJIXsAq%2BrMVSo5mAjuEwreQAiA4DoLGCUum8wJolIuB2awSyReaLSXT11eanoDGAgK8dCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMbjX09IK%2FGAjs0w9sKtwDo9d%2F2YoU%2Fwk6SibH5AsJ1qss%2BX40tmC6ORz41fk1Fjn4Dq7NXYgpYq9dBT7GEMUuLdspa%2BeqQdExs20tX68NNfRXPp5O6Zu9mX00WUs2vaWb8PuTQBRFEYi5WzwL8EntyjRMyIratpzeoaflQyKljn2VeWjJGKqdkJOpFmbWxZiXiYbm3wUxCAIWCHyOuowLIqovlHwV%2FqjVrozMb6OAtCxW6%2FUdGT6K7JxEQ48ueaimJ2VUMYk6m%2FjEZR1nIYwyVgdIF7OHFuyPwyiGOEp3vY1lfmVhQjyHj2SjoyRd6ZgNvCbwnMBPXYjU0RDHqivePhXN4H%2BICMBwlGBUc5Yo0rThESv8kg2ukMW2KXY7BPXoQAMZ4YaDMnpvGaRqw49KthYF8mN3nSwMQ5k25S9nmN1OYPCcXBPdZb5hulEaZgOQcbP%2FwzNGfb9ytdNpa2zB9ZAjoHPAbCshkXp2n02dSBjiPi%2BcARNJqH2o6v%2BOMS3Qz1YZaQwj9HYPKQTL64AwRUB55mnxPlIsC8yK1MHnwCnBUwttgL%2B9t8DdJBvOe1%2BsOHMPecXVBGUHWtWMe6t8ydXQ6SS0kXDd5kCWNsAQcF4Tuu8chKqFUFSIh4N%2FR4dMvnXQgKCs%2By8z6dIw9uSbwwY6pgE84%2Bh%2FdwNtFPhztq24uiK58M1chPwKSwAU%2BffRa94pQRFuEuNAUTMsbftuoqvJc1VO2acl1FjeCCdFGckHBichSRGUHN58vB%2FtdtAl7TwhXWqP0AEpFYeJ4CSMwo3rBv4ItQ2TTGvzakbIde73DtdYe6zjpGXspz4ZQCgEwPS16I%2BK5JlkEoqAsdPUyDe1lfsV9iOgKDcvnJ3IR3CKZ1Ilnk4HBglw&X-Amz-Signature=6a4ed3936d4d4940782abf989a9ba9d17161c2ed3764ba4c6bb7f9d1c0f6c7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2LAWKU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICA7BGNwtUhBctb1uTZuGPJIXsAq%2BrMVSo5mAjuEwreQAiA4DoLGCUum8wJolIuB2awSyReaLSXT11eanoDGAgK8dCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMbjX09IK%2FGAjs0w9sKtwDo9d%2F2YoU%2Fwk6SibH5AsJ1qss%2BX40tmC6ORz41fk1Fjn4Dq7NXYgpYq9dBT7GEMUuLdspa%2BeqQdExs20tX68NNfRXPp5O6Zu9mX00WUs2vaWb8PuTQBRFEYi5WzwL8EntyjRMyIratpzeoaflQyKljn2VeWjJGKqdkJOpFmbWxZiXiYbm3wUxCAIWCHyOuowLIqovlHwV%2FqjVrozMb6OAtCxW6%2FUdGT6K7JxEQ48ueaimJ2VUMYk6m%2FjEZR1nIYwyVgdIF7OHFuyPwyiGOEp3vY1lfmVhQjyHj2SjoyRd6ZgNvCbwnMBPXYjU0RDHqivePhXN4H%2BICMBwlGBUc5Yo0rThESv8kg2ukMW2KXY7BPXoQAMZ4YaDMnpvGaRqw49KthYF8mN3nSwMQ5k25S9nmN1OYPCcXBPdZb5hulEaZgOQcbP%2FwzNGfb9ytdNpa2zB9ZAjoHPAbCshkXp2n02dSBjiPi%2BcARNJqH2o6v%2BOMS3Qz1YZaQwj9HYPKQTL64AwRUB55mnxPlIsC8yK1MHnwCnBUwttgL%2B9t8DdJBvOe1%2BsOHMPecXVBGUHWtWMe6t8ydXQ6SS0kXDd5kCWNsAQcF4Tuu8chKqFUFSIh4N%2FR4dMvnXQgKCs%2By8z6dIw9uSbwwY6pgE84%2Bh%2FdwNtFPhztq24uiK58M1chPwKSwAU%2BffRa94pQRFuEuNAUTMsbftuoqvJc1VO2acl1FjeCCdFGckHBichSRGUHN58vB%2FtdtAl7TwhXWqP0AEpFYeJ4CSMwo3rBv4ItQ2TTGvzakbIde73DtdYe6zjpGXspz4ZQCgEwPS16I%2BK5JlkEoqAsdPUyDe1lfsV9iOgKDcvnJ3IR3CKZ1Ilnk4HBglw&X-Amz-Signature=412e10c86b45c42a995cc212365698dcdb3deb488395664eabc08f4a0e247c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2LAWKU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICA7BGNwtUhBctb1uTZuGPJIXsAq%2BrMVSo5mAjuEwreQAiA4DoLGCUum8wJolIuB2awSyReaLSXT11eanoDGAgK8dCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMbjX09IK%2FGAjs0w9sKtwDo9d%2F2YoU%2Fwk6SibH5AsJ1qss%2BX40tmC6ORz41fk1Fjn4Dq7NXYgpYq9dBT7GEMUuLdspa%2BeqQdExs20tX68NNfRXPp5O6Zu9mX00WUs2vaWb8PuTQBRFEYi5WzwL8EntyjRMyIratpzeoaflQyKljn2VeWjJGKqdkJOpFmbWxZiXiYbm3wUxCAIWCHyOuowLIqovlHwV%2FqjVrozMb6OAtCxW6%2FUdGT6K7JxEQ48ueaimJ2VUMYk6m%2FjEZR1nIYwyVgdIF7OHFuyPwyiGOEp3vY1lfmVhQjyHj2SjoyRd6ZgNvCbwnMBPXYjU0RDHqivePhXN4H%2BICMBwlGBUc5Yo0rThESv8kg2ukMW2KXY7BPXoQAMZ4YaDMnpvGaRqw49KthYF8mN3nSwMQ5k25S9nmN1OYPCcXBPdZb5hulEaZgOQcbP%2FwzNGfb9ytdNpa2zB9ZAjoHPAbCshkXp2n02dSBjiPi%2BcARNJqH2o6v%2BOMS3Qz1YZaQwj9HYPKQTL64AwRUB55mnxPlIsC8yK1MHnwCnBUwttgL%2B9t8DdJBvOe1%2BsOHMPecXVBGUHWtWMe6t8ydXQ6SS0kXDd5kCWNsAQcF4Tuu8chKqFUFSIh4N%2FR4dMvnXQgKCs%2By8z6dIw9uSbwwY6pgE84%2Bh%2FdwNtFPhztq24uiK58M1chPwKSwAU%2BffRa94pQRFuEuNAUTMsbftuoqvJc1VO2acl1FjeCCdFGckHBichSRGUHN58vB%2FtdtAl7TwhXWqP0AEpFYeJ4CSMwo3rBv4ItQ2TTGvzakbIde73DtdYe6zjpGXspz4ZQCgEwPS16I%2BK5JlkEoqAsdPUyDe1lfsV9iOgKDcvnJ3IR3CKZ1Ilnk4HBglw&X-Amz-Signature=a15dec2b5a50d9e91ec4dfd4a2e8f8e5a4ea7649ebd1139b07919bdcd2cd28ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2LAWKU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICA7BGNwtUhBctb1uTZuGPJIXsAq%2BrMVSo5mAjuEwreQAiA4DoLGCUum8wJolIuB2awSyReaLSXT11eanoDGAgK8dCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMbjX09IK%2FGAjs0w9sKtwDo9d%2F2YoU%2Fwk6SibH5AsJ1qss%2BX40tmC6ORz41fk1Fjn4Dq7NXYgpYq9dBT7GEMUuLdspa%2BeqQdExs20tX68NNfRXPp5O6Zu9mX00WUs2vaWb8PuTQBRFEYi5WzwL8EntyjRMyIratpzeoaflQyKljn2VeWjJGKqdkJOpFmbWxZiXiYbm3wUxCAIWCHyOuowLIqovlHwV%2FqjVrozMb6OAtCxW6%2FUdGT6K7JxEQ48ueaimJ2VUMYk6m%2FjEZR1nIYwyVgdIF7OHFuyPwyiGOEp3vY1lfmVhQjyHj2SjoyRd6ZgNvCbwnMBPXYjU0RDHqivePhXN4H%2BICMBwlGBUc5Yo0rThESv8kg2ukMW2KXY7BPXoQAMZ4YaDMnpvGaRqw49KthYF8mN3nSwMQ5k25S9nmN1OYPCcXBPdZb5hulEaZgOQcbP%2FwzNGfb9ytdNpa2zB9ZAjoHPAbCshkXp2n02dSBjiPi%2BcARNJqH2o6v%2BOMS3Qz1YZaQwj9HYPKQTL64AwRUB55mnxPlIsC8yK1MHnwCnBUwttgL%2B9t8DdJBvOe1%2BsOHMPecXVBGUHWtWMe6t8ydXQ6SS0kXDd5kCWNsAQcF4Tuu8chKqFUFSIh4N%2FR4dMvnXQgKCs%2By8z6dIw9uSbwwY6pgE84%2Bh%2FdwNtFPhztq24uiK58M1chPwKSwAU%2BffRa94pQRFuEuNAUTMsbftuoqvJc1VO2acl1FjeCCdFGckHBichSRGUHN58vB%2FtdtAl7TwhXWqP0AEpFYeJ4CSMwo3rBv4ItQ2TTGvzakbIde73DtdYe6zjpGXspz4ZQCgEwPS16I%2BK5JlkEoqAsdPUyDe1lfsV9iOgKDcvnJ3IR3CKZ1Ilnk4HBglw&X-Amz-Signature=4662f2f0dacd247e64beba6633aa63797cd90082b182ffa5a13eeff0cf0e2b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2LAWKU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICA7BGNwtUhBctb1uTZuGPJIXsAq%2BrMVSo5mAjuEwreQAiA4DoLGCUum8wJolIuB2awSyReaLSXT11eanoDGAgK8dCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMbjX09IK%2FGAjs0w9sKtwDo9d%2F2YoU%2Fwk6SibH5AsJ1qss%2BX40tmC6ORz41fk1Fjn4Dq7NXYgpYq9dBT7GEMUuLdspa%2BeqQdExs20tX68NNfRXPp5O6Zu9mX00WUs2vaWb8PuTQBRFEYi5WzwL8EntyjRMyIratpzeoaflQyKljn2VeWjJGKqdkJOpFmbWxZiXiYbm3wUxCAIWCHyOuowLIqovlHwV%2FqjVrozMb6OAtCxW6%2FUdGT6K7JxEQ48ueaimJ2VUMYk6m%2FjEZR1nIYwyVgdIF7OHFuyPwyiGOEp3vY1lfmVhQjyHj2SjoyRd6ZgNvCbwnMBPXYjU0RDHqivePhXN4H%2BICMBwlGBUc5Yo0rThESv8kg2ukMW2KXY7BPXoQAMZ4YaDMnpvGaRqw49KthYF8mN3nSwMQ5k25S9nmN1OYPCcXBPdZb5hulEaZgOQcbP%2FwzNGfb9ytdNpa2zB9ZAjoHPAbCshkXp2n02dSBjiPi%2BcARNJqH2o6v%2BOMS3Qz1YZaQwj9HYPKQTL64AwRUB55mnxPlIsC8yK1MHnwCnBUwttgL%2B9t8DdJBvOe1%2BsOHMPecXVBGUHWtWMe6t8ydXQ6SS0kXDd5kCWNsAQcF4Tuu8chKqFUFSIh4N%2FR4dMvnXQgKCs%2By8z6dIw9uSbwwY6pgE84%2Bh%2FdwNtFPhztq24uiK58M1chPwKSwAU%2BffRa94pQRFuEuNAUTMsbftuoqvJc1VO2acl1FjeCCdFGckHBichSRGUHN58vB%2FtdtAl7TwhXWqP0AEpFYeJ4CSMwo3rBv4ItQ2TTGvzakbIde73DtdYe6zjpGXspz4ZQCgEwPS16I%2BK5JlkEoqAsdPUyDe1lfsV9iOgKDcvnJ3IR3CKZ1Ilnk4HBglw&X-Amz-Signature=7d77e95c749801e27b6991d1f4b1d0c0fac3e12c41374ecb4efa51c51f93278a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2LAWKU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICA7BGNwtUhBctb1uTZuGPJIXsAq%2BrMVSo5mAjuEwreQAiA4DoLGCUum8wJolIuB2awSyReaLSXT11eanoDGAgK8dCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMbjX09IK%2FGAjs0w9sKtwDo9d%2F2YoU%2Fwk6SibH5AsJ1qss%2BX40tmC6ORz41fk1Fjn4Dq7NXYgpYq9dBT7GEMUuLdspa%2BeqQdExs20tX68NNfRXPp5O6Zu9mX00WUs2vaWb8PuTQBRFEYi5WzwL8EntyjRMyIratpzeoaflQyKljn2VeWjJGKqdkJOpFmbWxZiXiYbm3wUxCAIWCHyOuowLIqovlHwV%2FqjVrozMb6OAtCxW6%2FUdGT6K7JxEQ48ueaimJ2VUMYk6m%2FjEZR1nIYwyVgdIF7OHFuyPwyiGOEp3vY1lfmVhQjyHj2SjoyRd6ZgNvCbwnMBPXYjU0RDHqivePhXN4H%2BICMBwlGBUc5Yo0rThESv8kg2ukMW2KXY7BPXoQAMZ4YaDMnpvGaRqw49KthYF8mN3nSwMQ5k25S9nmN1OYPCcXBPdZb5hulEaZgOQcbP%2FwzNGfb9ytdNpa2zB9ZAjoHPAbCshkXp2n02dSBjiPi%2BcARNJqH2o6v%2BOMS3Qz1YZaQwj9HYPKQTL64AwRUB55mnxPlIsC8yK1MHnwCnBUwttgL%2B9t8DdJBvOe1%2BsOHMPecXVBGUHWtWMe6t8ydXQ6SS0kXDd5kCWNsAQcF4Tuu8chKqFUFSIh4N%2FR4dMvnXQgKCs%2By8z6dIw9uSbwwY6pgE84%2Bh%2FdwNtFPhztq24uiK58M1chPwKSwAU%2BffRa94pQRFuEuNAUTMsbftuoqvJc1VO2acl1FjeCCdFGckHBichSRGUHN58vB%2FtdtAl7TwhXWqP0AEpFYeJ4CSMwo3rBv4ItQ2TTGvzakbIde73DtdYe6zjpGXspz4ZQCgEwPS16I%2BK5JlkEoqAsdPUyDe1lfsV9iOgKDcvnJ3IR3CKZ1Ilnk4HBglw&X-Amz-Signature=ec138707f81f62e1273b20c3ccb1e877083de251a29beed778113d3e58562a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2LAWKU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICA7BGNwtUhBctb1uTZuGPJIXsAq%2BrMVSo5mAjuEwreQAiA4DoLGCUum8wJolIuB2awSyReaLSXT11eanoDGAgK8dCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMbjX09IK%2FGAjs0w9sKtwDo9d%2F2YoU%2Fwk6SibH5AsJ1qss%2BX40tmC6ORz41fk1Fjn4Dq7NXYgpYq9dBT7GEMUuLdspa%2BeqQdExs20tX68NNfRXPp5O6Zu9mX00WUs2vaWb8PuTQBRFEYi5WzwL8EntyjRMyIratpzeoaflQyKljn2VeWjJGKqdkJOpFmbWxZiXiYbm3wUxCAIWCHyOuowLIqovlHwV%2FqjVrozMb6OAtCxW6%2FUdGT6K7JxEQ48ueaimJ2VUMYk6m%2FjEZR1nIYwyVgdIF7OHFuyPwyiGOEp3vY1lfmVhQjyHj2SjoyRd6ZgNvCbwnMBPXYjU0RDHqivePhXN4H%2BICMBwlGBUc5Yo0rThESv8kg2ukMW2KXY7BPXoQAMZ4YaDMnpvGaRqw49KthYF8mN3nSwMQ5k25S9nmN1OYPCcXBPdZb5hulEaZgOQcbP%2FwzNGfb9ytdNpa2zB9ZAjoHPAbCshkXp2n02dSBjiPi%2BcARNJqH2o6v%2BOMS3Qz1YZaQwj9HYPKQTL64AwRUB55mnxPlIsC8yK1MHnwCnBUwttgL%2B9t8DdJBvOe1%2BsOHMPecXVBGUHWtWMe6t8ydXQ6SS0kXDd5kCWNsAQcF4Tuu8chKqFUFSIh4N%2FR4dMvnXQgKCs%2By8z6dIw9uSbwwY6pgE84%2Bh%2FdwNtFPhztq24uiK58M1chPwKSwAU%2BffRa94pQRFuEuNAUTMsbftuoqvJc1VO2acl1FjeCCdFGckHBichSRGUHN58vB%2FtdtAl7TwhXWqP0AEpFYeJ4CSMwo3rBv4ItQ2TTGvzakbIde73DtdYe6zjpGXspz4ZQCgEwPS16I%2BK5JlkEoqAsdPUyDe1lfsV9iOgKDcvnJ3IR3CKZ1Ilnk4HBglw&X-Amz-Signature=fdd5e4d1a4207a46229f37273aadf2dfc1b03ceb00ca7539cbc5b71b3c1c1ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2LAWKU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICA7BGNwtUhBctb1uTZuGPJIXsAq%2BrMVSo5mAjuEwreQAiA4DoLGCUum8wJolIuB2awSyReaLSXT11eanoDGAgK8dCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMbjX09IK%2FGAjs0w9sKtwDo9d%2F2YoU%2Fwk6SibH5AsJ1qss%2BX40tmC6ORz41fk1Fjn4Dq7NXYgpYq9dBT7GEMUuLdspa%2BeqQdExs20tX68NNfRXPp5O6Zu9mX00WUs2vaWb8PuTQBRFEYi5WzwL8EntyjRMyIratpzeoaflQyKljn2VeWjJGKqdkJOpFmbWxZiXiYbm3wUxCAIWCHyOuowLIqovlHwV%2FqjVrozMb6OAtCxW6%2FUdGT6K7JxEQ48ueaimJ2VUMYk6m%2FjEZR1nIYwyVgdIF7OHFuyPwyiGOEp3vY1lfmVhQjyHj2SjoyRd6ZgNvCbwnMBPXYjU0RDHqivePhXN4H%2BICMBwlGBUc5Yo0rThESv8kg2ukMW2KXY7BPXoQAMZ4YaDMnpvGaRqw49KthYF8mN3nSwMQ5k25S9nmN1OYPCcXBPdZb5hulEaZgOQcbP%2FwzNGfb9ytdNpa2zB9ZAjoHPAbCshkXp2n02dSBjiPi%2BcARNJqH2o6v%2BOMS3Qz1YZaQwj9HYPKQTL64AwRUB55mnxPlIsC8yK1MHnwCnBUwttgL%2B9t8DdJBvOe1%2BsOHMPecXVBGUHWtWMe6t8ydXQ6SS0kXDd5kCWNsAQcF4Tuu8chKqFUFSIh4N%2FR4dMvnXQgKCs%2By8z6dIw9uSbwwY6pgE84%2Bh%2FdwNtFPhztq24uiK58M1chPwKSwAU%2BffRa94pQRFuEuNAUTMsbftuoqvJc1VO2acl1FjeCCdFGckHBichSRGUHN58vB%2FtdtAl7TwhXWqP0AEpFYeJ4CSMwo3rBv4ItQ2TTGvzakbIde73DtdYe6zjpGXspz4ZQCgEwPS16I%2BK5JlkEoqAsdPUyDe1lfsV9iOgKDcvnJ3IR3CKZ1Ilnk4HBglw&X-Amz-Signature=fee0642d2dc6790928fdfbfb1232184151cafad4e89bc20fb303c771da5f07b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
