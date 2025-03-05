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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQNB7YT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHybTjYvoBRqdV%2FljFB8FnLpRxvMnStDD6nmEphy6v%2FAAiEAmRe4e6wsjiocb0xxi1tv0zKbfNBDzu%2FiEHttLOiVyU8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFYAkWJRZ%2F8Aal%2Be9CrcA9jv0S8rZVzQd6e826jH4vZLzVqFC8R17HtrqQ%2FyWO0MmyxEskR3jUY4uYmaWHEDk%2FwPfSHwpyf8nxAL%2FPs44fG3BGlYJrCP3oxpC1nvwh9h4XKA1LBQ6%2F%2FVQotjIhub3P5gZroQqiWIPFAipYiFdWNoGxyQUdX98PRz0F5ZZ31YqRFN1asUoXDa8tUKABKP%2B0CC9O4Hkimz09eYKnxdUffiMKpzTr4uQkhpL0uN4fnZSuv2DWfavLDkV0B2d2RbIC6nMaTtoIp4530PKfsP1AocQziSQYVD6Y3YfLAAeyBTH85%2BBE%2F6v%2FryTEo8%2F0VSkjTzXsF0Gfh%2FbnDAVvuDUrN%2Fd1BpLlvErXZ%2BxFIMrwknCs883pj3cgCELi%2B2dorPoTjUrHcPFmUIpoFwRI29ey%2FAYVQ%2Bhog7U%2B56L0hnTO2HV2Gsin9tw%2Bazre9FNDeip1O8OL4XqooahknZ5AJqQCq3z19xWZ8QzgwpYtIxawJ6rAOwdxHZaRqc8Zi1VB0ROnMCPTfGyHKiivm33KQyH6btxKW%2BrwZdN3lN7oq%2BsY3mtwSpApGSh15YbBcSswmiDfwva5KIGKRzWTExF5HIjzrtRvHlYICeqlajPkWx2U5Gb%2Bk4pgDUayt7We0TMLeWob4GOqUB4gl77kYTmtTfL2Hap%2FTcyHoyvKQRAFk25mpNlohgPwYwyBCDtbIYLYyYP8F%2B912hHeq%2F7XhK5bPFgCdN2LiUp%2FRYzLgc4ODJ9kuUd30ZMyRnZyUXa6CACv4rCRZEPRnutxodqEpDz04t7nCz%2BY6gktIhBwcFm3vVix5fl0o2HKH14gcesJ0tk4xL7vmUBg5o46RZHW9%2F9%2FzddyM1uKdPFjYaKqOm&X-Amz-Signature=c3a7056b7ac5e4a9a17ec6bfbf9574a2eb92443878a9ee667c55d59c21dda96a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQNB7YT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHybTjYvoBRqdV%2FljFB8FnLpRxvMnStDD6nmEphy6v%2FAAiEAmRe4e6wsjiocb0xxi1tv0zKbfNBDzu%2FiEHttLOiVyU8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFYAkWJRZ%2F8Aal%2Be9CrcA9jv0S8rZVzQd6e826jH4vZLzVqFC8R17HtrqQ%2FyWO0MmyxEskR3jUY4uYmaWHEDk%2FwPfSHwpyf8nxAL%2FPs44fG3BGlYJrCP3oxpC1nvwh9h4XKA1LBQ6%2F%2FVQotjIhub3P5gZroQqiWIPFAipYiFdWNoGxyQUdX98PRz0F5ZZ31YqRFN1asUoXDa8tUKABKP%2B0CC9O4Hkimz09eYKnxdUffiMKpzTr4uQkhpL0uN4fnZSuv2DWfavLDkV0B2d2RbIC6nMaTtoIp4530PKfsP1AocQziSQYVD6Y3YfLAAeyBTH85%2BBE%2F6v%2FryTEo8%2F0VSkjTzXsF0Gfh%2FbnDAVvuDUrN%2Fd1BpLlvErXZ%2BxFIMrwknCs883pj3cgCELi%2B2dorPoTjUrHcPFmUIpoFwRI29ey%2FAYVQ%2Bhog7U%2B56L0hnTO2HV2Gsin9tw%2Bazre9FNDeip1O8OL4XqooahknZ5AJqQCq3z19xWZ8QzgwpYtIxawJ6rAOwdxHZaRqc8Zi1VB0ROnMCPTfGyHKiivm33KQyH6btxKW%2BrwZdN3lN7oq%2BsY3mtwSpApGSh15YbBcSswmiDfwva5KIGKRzWTExF5HIjzrtRvHlYICeqlajPkWx2U5Gb%2Bk4pgDUayt7We0TMLeWob4GOqUB4gl77kYTmtTfL2Hap%2FTcyHoyvKQRAFk25mpNlohgPwYwyBCDtbIYLYyYP8F%2B912hHeq%2F7XhK5bPFgCdN2LiUp%2FRYzLgc4ODJ9kuUd30ZMyRnZyUXa6CACv4rCRZEPRnutxodqEpDz04t7nCz%2BY6gktIhBwcFm3vVix5fl0o2HKH14gcesJ0tk4xL7vmUBg5o46RZHW9%2F9%2FzddyM1uKdPFjYaKqOm&X-Amz-Signature=a64246b990e09a61e46dde6e81a9833288dfbc4477ad5188abd33b01b1dd458e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQNB7YT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHybTjYvoBRqdV%2FljFB8FnLpRxvMnStDD6nmEphy6v%2FAAiEAmRe4e6wsjiocb0xxi1tv0zKbfNBDzu%2FiEHttLOiVyU8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFYAkWJRZ%2F8Aal%2Be9CrcA9jv0S8rZVzQd6e826jH4vZLzVqFC8R17HtrqQ%2FyWO0MmyxEskR3jUY4uYmaWHEDk%2FwPfSHwpyf8nxAL%2FPs44fG3BGlYJrCP3oxpC1nvwh9h4XKA1LBQ6%2F%2FVQotjIhub3P5gZroQqiWIPFAipYiFdWNoGxyQUdX98PRz0F5ZZ31YqRFN1asUoXDa8tUKABKP%2B0CC9O4Hkimz09eYKnxdUffiMKpzTr4uQkhpL0uN4fnZSuv2DWfavLDkV0B2d2RbIC6nMaTtoIp4530PKfsP1AocQziSQYVD6Y3YfLAAeyBTH85%2BBE%2F6v%2FryTEo8%2F0VSkjTzXsF0Gfh%2FbnDAVvuDUrN%2Fd1BpLlvErXZ%2BxFIMrwknCs883pj3cgCELi%2B2dorPoTjUrHcPFmUIpoFwRI29ey%2FAYVQ%2Bhog7U%2B56L0hnTO2HV2Gsin9tw%2Bazre9FNDeip1O8OL4XqooahknZ5AJqQCq3z19xWZ8QzgwpYtIxawJ6rAOwdxHZaRqc8Zi1VB0ROnMCPTfGyHKiivm33KQyH6btxKW%2BrwZdN3lN7oq%2BsY3mtwSpApGSh15YbBcSswmiDfwva5KIGKRzWTExF5HIjzrtRvHlYICeqlajPkWx2U5Gb%2Bk4pgDUayt7We0TMLeWob4GOqUB4gl77kYTmtTfL2Hap%2FTcyHoyvKQRAFk25mpNlohgPwYwyBCDtbIYLYyYP8F%2B912hHeq%2F7XhK5bPFgCdN2LiUp%2FRYzLgc4ODJ9kuUd30ZMyRnZyUXa6CACv4rCRZEPRnutxodqEpDz04t7nCz%2BY6gktIhBwcFm3vVix5fl0o2HKH14gcesJ0tk4xL7vmUBg5o46RZHW9%2F9%2FzddyM1uKdPFjYaKqOm&X-Amz-Signature=34abe95a2146e8d762871e91ebe1898747fee696aee322a0d99630c5f1f170a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQNB7YT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHybTjYvoBRqdV%2FljFB8FnLpRxvMnStDD6nmEphy6v%2FAAiEAmRe4e6wsjiocb0xxi1tv0zKbfNBDzu%2FiEHttLOiVyU8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFYAkWJRZ%2F8Aal%2Be9CrcA9jv0S8rZVzQd6e826jH4vZLzVqFC8R17HtrqQ%2FyWO0MmyxEskR3jUY4uYmaWHEDk%2FwPfSHwpyf8nxAL%2FPs44fG3BGlYJrCP3oxpC1nvwh9h4XKA1LBQ6%2F%2FVQotjIhub3P5gZroQqiWIPFAipYiFdWNoGxyQUdX98PRz0F5ZZ31YqRFN1asUoXDa8tUKABKP%2B0CC9O4Hkimz09eYKnxdUffiMKpzTr4uQkhpL0uN4fnZSuv2DWfavLDkV0B2d2RbIC6nMaTtoIp4530PKfsP1AocQziSQYVD6Y3YfLAAeyBTH85%2BBE%2F6v%2FryTEo8%2F0VSkjTzXsF0Gfh%2FbnDAVvuDUrN%2Fd1BpLlvErXZ%2BxFIMrwknCs883pj3cgCELi%2B2dorPoTjUrHcPFmUIpoFwRI29ey%2FAYVQ%2Bhog7U%2B56L0hnTO2HV2Gsin9tw%2Bazre9FNDeip1O8OL4XqooahknZ5AJqQCq3z19xWZ8QzgwpYtIxawJ6rAOwdxHZaRqc8Zi1VB0ROnMCPTfGyHKiivm33KQyH6btxKW%2BrwZdN3lN7oq%2BsY3mtwSpApGSh15YbBcSswmiDfwva5KIGKRzWTExF5HIjzrtRvHlYICeqlajPkWx2U5Gb%2Bk4pgDUayt7We0TMLeWob4GOqUB4gl77kYTmtTfL2Hap%2FTcyHoyvKQRAFk25mpNlohgPwYwyBCDtbIYLYyYP8F%2B912hHeq%2F7XhK5bPFgCdN2LiUp%2FRYzLgc4ODJ9kuUd30ZMyRnZyUXa6CACv4rCRZEPRnutxodqEpDz04t7nCz%2BY6gktIhBwcFm3vVix5fl0o2HKH14gcesJ0tk4xL7vmUBg5o46RZHW9%2F9%2FzddyM1uKdPFjYaKqOm&X-Amz-Signature=8ea332f7f2ba39ba5aeb08b862c5813475da93143dc51ff40edcdd2209382e09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQNB7YT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHybTjYvoBRqdV%2FljFB8FnLpRxvMnStDD6nmEphy6v%2FAAiEAmRe4e6wsjiocb0xxi1tv0zKbfNBDzu%2FiEHttLOiVyU8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFYAkWJRZ%2F8Aal%2Be9CrcA9jv0S8rZVzQd6e826jH4vZLzVqFC8R17HtrqQ%2FyWO0MmyxEskR3jUY4uYmaWHEDk%2FwPfSHwpyf8nxAL%2FPs44fG3BGlYJrCP3oxpC1nvwh9h4XKA1LBQ6%2F%2FVQotjIhub3P5gZroQqiWIPFAipYiFdWNoGxyQUdX98PRz0F5ZZ31YqRFN1asUoXDa8tUKABKP%2B0CC9O4Hkimz09eYKnxdUffiMKpzTr4uQkhpL0uN4fnZSuv2DWfavLDkV0B2d2RbIC6nMaTtoIp4530PKfsP1AocQziSQYVD6Y3YfLAAeyBTH85%2BBE%2F6v%2FryTEo8%2F0VSkjTzXsF0Gfh%2FbnDAVvuDUrN%2Fd1BpLlvErXZ%2BxFIMrwknCs883pj3cgCELi%2B2dorPoTjUrHcPFmUIpoFwRI29ey%2FAYVQ%2Bhog7U%2B56L0hnTO2HV2Gsin9tw%2Bazre9FNDeip1O8OL4XqooahknZ5AJqQCq3z19xWZ8QzgwpYtIxawJ6rAOwdxHZaRqc8Zi1VB0ROnMCPTfGyHKiivm33KQyH6btxKW%2BrwZdN3lN7oq%2BsY3mtwSpApGSh15YbBcSswmiDfwva5KIGKRzWTExF5HIjzrtRvHlYICeqlajPkWx2U5Gb%2Bk4pgDUayt7We0TMLeWob4GOqUB4gl77kYTmtTfL2Hap%2FTcyHoyvKQRAFk25mpNlohgPwYwyBCDtbIYLYyYP8F%2B912hHeq%2F7XhK5bPFgCdN2LiUp%2FRYzLgc4ODJ9kuUd30ZMyRnZyUXa6CACv4rCRZEPRnutxodqEpDz04t7nCz%2BY6gktIhBwcFm3vVix5fl0o2HKH14gcesJ0tk4xL7vmUBg5o46RZHW9%2F9%2FzddyM1uKdPFjYaKqOm&X-Amz-Signature=f14dfe7db5db50cd50e1df6b2dd8db406090bc8295a1012633536d6b928dfaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQNB7YT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHybTjYvoBRqdV%2FljFB8FnLpRxvMnStDD6nmEphy6v%2FAAiEAmRe4e6wsjiocb0xxi1tv0zKbfNBDzu%2FiEHttLOiVyU8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFYAkWJRZ%2F8Aal%2Be9CrcA9jv0S8rZVzQd6e826jH4vZLzVqFC8R17HtrqQ%2FyWO0MmyxEskR3jUY4uYmaWHEDk%2FwPfSHwpyf8nxAL%2FPs44fG3BGlYJrCP3oxpC1nvwh9h4XKA1LBQ6%2F%2FVQotjIhub3P5gZroQqiWIPFAipYiFdWNoGxyQUdX98PRz0F5ZZ31YqRFN1asUoXDa8tUKABKP%2B0CC9O4Hkimz09eYKnxdUffiMKpzTr4uQkhpL0uN4fnZSuv2DWfavLDkV0B2d2RbIC6nMaTtoIp4530PKfsP1AocQziSQYVD6Y3YfLAAeyBTH85%2BBE%2F6v%2FryTEo8%2F0VSkjTzXsF0Gfh%2FbnDAVvuDUrN%2Fd1BpLlvErXZ%2BxFIMrwknCs883pj3cgCELi%2B2dorPoTjUrHcPFmUIpoFwRI29ey%2FAYVQ%2Bhog7U%2B56L0hnTO2HV2Gsin9tw%2Bazre9FNDeip1O8OL4XqooahknZ5AJqQCq3z19xWZ8QzgwpYtIxawJ6rAOwdxHZaRqc8Zi1VB0ROnMCPTfGyHKiivm33KQyH6btxKW%2BrwZdN3lN7oq%2BsY3mtwSpApGSh15YbBcSswmiDfwva5KIGKRzWTExF5HIjzrtRvHlYICeqlajPkWx2U5Gb%2Bk4pgDUayt7We0TMLeWob4GOqUB4gl77kYTmtTfL2Hap%2FTcyHoyvKQRAFk25mpNlohgPwYwyBCDtbIYLYyYP8F%2B912hHeq%2F7XhK5bPFgCdN2LiUp%2FRYzLgc4ODJ9kuUd30ZMyRnZyUXa6CACv4rCRZEPRnutxodqEpDz04t7nCz%2BY6gktIhBwcFm3vVix5fl0o2HKH14gcesJ0tk4xL7vmUBg5o46RZHW9%2F9%2FzddyM1uKdPFjYaKqOm&X-Amz-Signature=54351b4fad178f306f4e92c2267b9cf1eeb17ca8ff4808c8315f0933f8f074c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQNB7YT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHybTjYvoBRqdV%2FljFB8FnLpRxvMnStDD6nmEphy6v%2FAAiEAmRe4e6wsjiocb0xxi1tv0zKbfNBDzu%2FiEHttLOiVyU8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFYAkWJRZ%2F8Aal%2Be9CrcA9jv0S8rZVzQd6e826jH4vZLzVqFC8R17HtrqQ%2FyWO0MmyxEskR3jUY4uYmaWHEDk%2FwPfSHwpyf8nxAL%2FPs44fG3BGlYJrCP3oxpC1nvwh9h4XKA1LBQ6%2F%2FVQotjIhub3P5gZroQqiWIPFAipYiFdWNoGxyQUdX98PRz0F5ZZ31YqRFN1asUoXDa8tUKABKP%2B0CC9O4Hkimz09eYKnxdUffiMKpzTr4uQkhpL0uN4fnZSuv2DWfavLDkV0B2d2RbIC6nMaTtoIp4530PKfsP1AocQziSQYVD6Y3YfLAAeyBTH85%2BBE%2F6v%2FryTEo8%2F0VSkjTzXsF0Gfh%2FbnDAVvuDUrN%2Fd1BpLlvErXZ%2BxFIMrwknCs883pj3cgCELi%2B2dorPoTjUrHcPFmUIpoFwRI29ey%2FAYVQ%2Bhog7U%2B56L0hnTO2HV2Gsin9tw%2Bazre9FNDeip1O8OL4XqooahknZ5AJqQCq3z19xWZ8QzgwpYtIxawJ6rAOwdxHZaRqc8Zi1VB0ROnMCPTfGyHKiivm33KQyH6btxKW%2BrwZdN3lN7oq%2BsY3mtwSpApGSh15YbBcSswmiDfwva5KIGKRzWTExF5HIjzrtRvHlYICeqlajPkWx2U5Gb%2Bk4pgDUayt7We0TMLeWob4GOqUB4gl77kYTmtTfL2Hap%2FTcyHoyvKQRAFk25mpNlohgPwYwyBCDtbIYLYyYP8F%2B912hHeq%2F7XhK5bPFgCdN2LiUp%2FRYzLgc4ODJ9kuUd30ZMyRnZyUXa6CACv4rCRZEPRnutxodqEpDz04t7nCz%2BY6gktIhBwcFm3vVix5fl0o2HKH14gcesJ0tk4xL7vmUBg5o46RZHW9%2F9%2FzddyM1uKdPFjYaKqOm&X-Amz-Signature=eab18d51ca59989a6941495475c820e5b32ea22a0637eeb405c54446479853ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQNB7YT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHybTjYvoBRqdV%2FljFB8FnLpRxvMnStDD6nmEphy6v%2FAAiEAmRe4e6wsjiocb0xxi1tv0zKbfNBDzu%2FiEHttLOiVyU8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFYAkWJRZ%2F8Aal%2Be9CrcA9jv0S8rZVzQd6e826jH4vZLzVqFC8R17HtrqQ%2FyWO0MmyxEskR3jUY4uYmaWHEDk%2FwPfSHwpyf8nxAL%2FPs44fG3BGlYJrCP3oxpC1nvwh9h4XKA1LBQ6%2F%2FVQotjIhub3P5gZroQqiWIPFAipYiFdWNoGxyQUdX98PRz0F5ZZ31YqRFN1asUoXDa8tUKABKP%2B0CC9O4Hkimz09eYKnxdUffiMKpzTr4uQkhpL0uN4fnZSuv2DWfavLDkV0B2d2RbIC6nMaTtoIp4530PKfsP1AocQziSQYVD6Y3YfLAAeyBTH85%2BBE%2F6v%2FryTEo8%2F0VSkjTzXsF0Gfh%2FbnDAVvuDUrN%2Fd1BpLlvErXZ%2BxFIMrwknCs883pj3cgCELi%2B2dorPoTjUrHcPFmUIpoFwRI29ey%2FAYVQ%2Bhog7U%2B56L0hnTO2HV2Gsin9tw%2Bazre9FNDeip1O8OL4XqooahknZ5AJqQCq3z19xWZ8QzgwpYtIxawJ6rAOwdxHZaRqc8Zi1VB0ROnMCPTfGyHKiivm33KQyH6btxKW%2BrwZdN3lN7oq%2BsY3mtwSpApGSh15YbBcSswmiDfwva5KIGKRzWTExF5HIjzrtRvHlYICeqlajPkWx2U5Gb%2Bk4pgDUayt7We0TMLeWob4GOqUB4gl77kYTmtTfL2Hap%2FTcyHoyvKQRAFk25mpNlohgPwYwyBCDtbIYLYyYP8F%2B912hHeq%2F7XhK5bPFgCdN2LiUp%2FRYzLgc4ODJ9kuUd30ZMyRnZyUXa6CACv4rCRZEPRnutxodqEpDz04t7nCz%2BY6gktIhBwcFm3vVix5fl0o2HKH14gcesJ0tk4xL7vmUBg5o46RZHW9%2F9%2FzddyM1uKdPFjYaKqOm&X-Amz-Signature=c8f22622218d8b670466eb677a486c8fdfff5ce444aeab14b88fbf7935f32d91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
