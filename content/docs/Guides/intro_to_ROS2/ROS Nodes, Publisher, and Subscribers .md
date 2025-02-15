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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VOIURT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFhoBm%2FL9etjMYieBwRHM94pE47aCxdG4GUa%2Br6nWbzhAiACPhffylB4gMYOiDGgUB2Mbq4b3Tc013lyF0u908oVLyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM0bB%2Fr%2BXlfoK3GQ9dKtwD6wTACYYgfkPLPkbpZsZ3DvRSNS6fNFpajFLkl2KMUREe%2BmfaT%2FJF6cpyKQKyLoF8ea097GBzyvxKtmYWr0TRuHe63a4djux7W4AZwDaCNTkuVYDmvxk%2FXcUWh8v3o%2BhTTxIIRP%2FIRR%2FT30vLViWaELgvYodP3RfFsuUCLR7vQlzG4X%2F6x8cihGYJDu97UgW1dWhjxspOQwpqM7bs2M2r7OLV3WBFSmAYDd9FJv2sw04sVt8J49jh7ZoJZ2hSHKCCsUd05bGhuX82cObbsbXn30DxNbTnPF9xQDUd7vlMcQ1US1l%2BpmuOQMt1EbCDu7i8WDBRhvCc5HUaR%2B0iCbOVYSjvZ7SUh0TD%2Fvj663IrO6c3hAeG1MG4AbVC%2B9zzf%2B3%2FtcHDdA9sL%2BxfB6xB67BZ%2Bo1DOH1j6Lgb22THDEZYY0V%2Btx3AZOFZZxa%2FPF0jO3A35eNw6EeEP442ce%2BAK1BPrtzRvSixYtNzKl5GP%2BPfd2kRM2sG6OZySDyKOQqJm46LoOWv9jr89QzCNJ7tAxJoq0P2vUOVgtzgsjvmon75nu%2B19B40eHa7n55FD19wqB%2Faxa7LZ7mcwKQdFeoeCkXLmAxGIgo6Vt3ex%2BYXMur%2F072DrAsxVbkrn90lrSkw6LO%2FvQY6pgEg10UvR74I%2BfvzwZDahMF2NPCCtyrqyyelTf2avOTowyOj%2BnDsb74yibIKQh2bQ%2FpdTN1bcetT%2Fd29HNdip4iR3UucgmPxUeElD3u7M%2BBFqb2bSKNK12vf5N%2B9Fag4HxywEJAdFf%2BDDC7QjBCjdCmBXbYSdOlmOVdsLgjJObjvQiAF0hOd1GHstGgnEPimUUrrMthbMAXYj6FpbV63DHiN8ZDrHQiK&X-Amz-Signature=24aa16c0ddbc81712404ca61b917cdc032ba8a2ab5a5ea82c301f887cc4cf9c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VOIURT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFhoBm%2FL9etjMYieBwRHM94pE47aCxdG4GUa%2Br6nWbzhAiACPhffylB4gMYOiDGgUB2Mbq4b3Tc013lyF0u908oVLyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM0bB%2Fr%2BXlfoK3GQ9dKtwD6wTACYYgfkPLPkbpZsZ3DvRSNS6fNFpajFLkl2KMUREe%2BmfaT%2FJF6cpyKQKyLoF8ea097GBzyvxKtmYWr0TRuHe63a4djux7W4AZwDaCNTkuVYDmvxk%2FXcUWh8v3o%2BhTTxIIRP%2FIRR%2FT30vLViWaELgvYodP3RfFsuUCLR7vQlzG4X%2F6x8cihGYJDu97UgW1dWhjxspOQwpqM7bs2M2r7OLV3WBFSmAYDd9FJv2sw04sVt8J49jh7ZoJZ2hSHKCCsUd05bGhuX82cObbsbXn30DxNbTnPF9xQDUd7vlMcQ1US1l%2BpmuOQMt1EbCDu7i8WDBRhvCc5HUaR%2B0iCbOVYSjvZ7SUh0TD%2Fvj663IrO6c3hAeG1MG4AbVC%2B9zzf%2B3%2FtcHDdA9sL%2BxfB6xB67BZ%2Bo1DOH1j6Lgb22THDEZYY0V%2Btx3AZOFZZxa%2FPF0jO3A35eNw6EeEP442ce%2BAK1BPrtzRvSixYtNzKl5GP%2BPfd2kRM2sG6OZySDyKOQqJm46LoOWv9jr89QzCNJ7tAxJoq0P2vUOVgtzgsjvmon75nu%2B19B40eHa7n55FD19wqB%2Faxa7LZ7mcwKQdFeoeCkXLmAxGIgo6Vt3ex%2BYXMur%2F072DrAsxVbkrn90lrSkw6LO%2FvQY6pgEg10UvR74I%2BfvzwZDahMF2NPCCtyrqyyelTf2avOTowyOj%2BnDsb74yibIKQh2bQ%2FpdTN1bcetT%2Fd29HNdip4iR3UucgmPxUeElD3u7M%2BBFqb2bSKNK12vf5N%2B9Fag4HxywEJAdFf%2BDDC7QjBCjdCmBXbYSdOlmOVdsLgjJObjvQiAF0hOd1GHstGgnEPimUUrrMthbMAXYj6FpbV63DHiN8ZDrHQiK&X-Amz-Signature=965f6a1f362474c18938171a1c2a38aeff25d84c742fb0b47f5cb22e550c4c94&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VOIURT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFhoBm%2FL9etjMYieBwRHM94pE47aCxdG4GUa%2Br6nWbzhAiACPhffylB4gMYOiDGgUB2Mbq4b3Tc013lyF0u908oVLyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM0bB%2Fr%2BXlfoK3GQ9dKtwD6wTACYYgfkPLPkbpZsZ3DvRSNS6fNFpajFLkl2KMUREe%2BmfaT%2FJF6cpyKQKyLoF8ea097GBzyvxKtmYWr0TRuHe63a4djux7W4AZwDaCNTkuVYDmvxk%2FXcUWh8v3o%2BhTTxIIRP%2FIRR%2FT30vLViWaELgvYodP3RfFsuUCLR7vQlzG4X%2F6x8cihGYJDu97UgW1dWhjxspOQwpqM7bs2M2r7OLV3WBFSmAYDd9FJv2sw04sVt8J49jh7ZoJZ2hSHKCCsUd05bGhuX82cObbsbXn30DxNbTnPF9xQDUd7vlMcQ1US1l%2BpmuOQMt1EbCDu7i8WDBRhvCc5HUaR%2B0iCbOVYSjvZ7SUh0TD%2Fvj663IrO6c3hAeG1MG4AbVC%2B9zzf%2B3%2FtcHDdA9sL%2BxfB6xB67BZ%2Bo1DOH1j6Lgb22THDEZYY0V%2Btx3AZOFZZxa%2FPF0jO3A35eNw6EeEP442ce%2BAK1BPrtzRvSixYtNzKl5GP%2BPfd2kRM2sG6OZySDyKOQqJm46LoOWv9jr89QzCNJ7tAxJoq0P2vUOVgtzgsjvmon75nu%2B19B40eHa7n55FD19wqB%2Faxa7LZ7mcwKQdFeoeCkXLmAxGIgo6Vt3ex%2BYXMur%2F072DrAsxVbkrn90lrSkw6LO%2FvQY6pgEg10UvR74I%2BfvzwZDahMF2NPCCtyrqyyelTf2avOTowyOj%2BnDsb74yibIKQh2bQ%2FpdTN1bcetT%2Fd29HNdip4iR3UucgmPxUeElD3u7M%2BBFqb2bSKNK12vf5N%2B9Fag4HxywEJAdFf%2BDDC7QjBCjdCmBXbYSdOlmOVdsLgjJObjvQiAF0hOd1GHstGgnEPimUUrrMthbMAXYj6FpbV63DHiN8ZDrHQiK&X-Amz-Signature=f9488d491bf20c56156913f57122f3d919bddcc3f482d6067dbb37aa1538c813&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VOIURT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFhoBm%2FL9etjMYieBwRHM94pE47aCxdG4GUa%2Br6nWbzhAiACPhffylB4gMYOiDGgUB2Mbq4b3Tc013lyF0u908oVLyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM0bB%2Fr%2BXlfoK3GQ9dKtwD6wTACYYgfkPLPkbpZsZ3DvRSNS6fNFpajFLkl2KMUREe%2BmfaT%2FJF6cpyKQKyLoF8ea097GBzyvxKtmYWr0TRuHe63a4djux7W4AZwDaCNTkuVYDmvxk%2FXcUWh8v3o%2BhTTxIIRP%2FIRR%2FT30vLViWaELgvYodP3RfFsuUCLR7vQlzG4X%2F6x8cihGYJDu97UgW1dWhjxspOQwpqM7bs2M2r7OLV3WBFSmAYDd9FJv2sw04sVt8J49jh7ZoJZ2hSHKCCsUd05bGhuX82cObbsbXn30DxNbTnPF9xQDUd7vlMcQ1US1l%2BpmuOQMt1EbCDu7i8WDBRhvCc5HUaR%2B0iCbOVYSjvZ7SUh0TD%2Fvj663IrO6c3hAeG1MG4AbVC%2B9zzf%2B3%2FtcHDdA9sL%2BxfB6xB67BZ%2Bo1DOH1j6Lgb22THDEZYY0V%2Btx3AZOFZZxa%2FPF0jO3A35eNw6EeEP442ce%2BAK1BPrtzRvSixYtNzKl5GP%2BPfd2kRM2sG6OZySDyKOQqJm46LoOWv9jr89QzCNJ7tAxJoq0P2vUOVgtzgsjvmon75nu%2B19B40eHa7n55FD19wqB%2Faxa7LZ7mcwKQdFeoeCkXLmAxGIgo6Vt3ex%2BYXMur%2F072DrAsxVbkrn90lrSkw6LO%2FvQY6pgEg10UvR74I%2BfvzwZDahMF2NPCCtyrqyyelTf2avOTowyOj%2BnDsb74yibIKQh2bQ%2FpdTN1bcetT%2Fd29HNdip4iR3UucgmPxUeElD3u7M%2BBFqb2bSKNK12vf5N%2B9Fag4HxywEJAdFf%2BDDC7QjBCjdCmBXbYSdOlmOVdsLgjJObjvQiAF0hOd1GHstGgnEPimUUrrMthbMAXYj6FpbV63DHiN8ZDrHQiK&X-Amz-Signature=daf0f3e24f42e5c9fe6ead13d853d0bbf24aae6f2f392ce8ef3a87491ca77d47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VOIURT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFhoBm%2FL9etjMYieBwRHM94pE47aCxdG4GUa%2Br6nWbzhAiACPhffylB4gMYOiDGgUB2Mbq4b3Tc013lyF0u908oVLyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM0bB%2Fr%2BXlfoK3GQ9dKtwD6wTACYYgfkPLPkbpZsZ3DvRSNS6fNFpajFLkl2KMUREe%2BmfaT%2FJF6cpyKQKyLoF8ea097GBzyvxKtmYWr0TRuHe63a4djux7W4AZwDaCNTkuVYDmvxk%2FXcUWh8v3o%2BhTTxIIRP%2FIRR%2FT30vLViWaELgvYodP3RfFsuUCLR7vQlzG4X%2F6x8cihGYJDu97UgW1dWhjxspOQwpqM7bs2M2r7OLV3WBFSmAYDd9FJv2sw04sVt8J49jh7ZoJZ2hSHKCCsUd05bGhuX82cObbsbXn30DxNbTnPF9xQDUd7vlMcQ1US1l%2BpmuOQMt1EbCDu7i8WDBRhvCc5HUaR%2B0iCbOVYSjvZ7SUh0TD%2Fvj663IrO6c3hAeG1MG4AbVC%2B9zzf%2B3%2FtcHDdA9sL%2BxfB6xB67BZ%2Bo1DOH1j6Lgb22THDEZYY0V%2Btx3AZOFZZxa%2FPF0jO3A35eNw6EeEP442ce%2BAK1BPrtzRvSixYtNzKl5GP%2BPfd2kRM2sG6OZySDyKOQqJm46LoOWv9jr89QzCNJ7tAxJoq0P2vUOVgtzgsjvmon75nu%2B19B40eHa7n55FD19wqB%2Faxa7LZ7mcwKQdFeoeCkXLmAxGIgo6Vt3ex%2BYXMur%2F072DrAsxVbkrn90lrSkw6LO%2FvQY6pgEg10UvR74I%2BfvzwZDahMF2NPCCtyrqyyelTf2avOTowyOj%2BnDsb74yibIKQh2bQ%2FpdTN1bcetT%2Fd29HNdip4iR3UucgmPxUeElD3u7M%2BBFqb2bSKNK12vf5N%2B9Fag4HxywEJAdFf%2BDDC7QjBCjdCmBXbYSdOlmOVdsLgjJObjvQiAF0hOd1GHstGgnEPimUUrrMthbMAXYj6FpbV63DHiN8ZDrHQiK&X-Amz-Signature=7a5330cf297d5ef622634d3033b4d9777ba46d359ae5478d5b9de71e416ad6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VOIURT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFhoBm%2FL9etjMYieBwRHM94pE47aCxdG4GUa%2Br6nWbzhAiACPhffylB4gMYOiDGgUB2Mbq4b3Tc013lyF0u908oVLyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM0bB%2Fr%2BXlfoK3GQ9dKtwD6wTACYYgfkPLPkbpZsZ3DvRSNS6fNFpajFLkl2KMUREe%2BmfaT%2FJF6cpyKQKyLoF8ea097GBzyvxKtmYWr0TRuHe63a4djux7W4AZwDaCNTkuVYDmvxk%2FXcUWh8v3o%2BhTTxIIRP%2FIRR%2FT30vLViWaELgvYodP3RfFsuUCLR7vQlzG4X%2F6x8cihGYJDu97UgW1dWhjxspOQwpqM7bs2M2r7OLV3WBFSmAYDd9FJv2sw04sVt8J49jh7ZoJZ2hSHKCCsUd05bGhuX82cObbsbXn30DxNbTnPF9xQDUd7vlMcQ1US1l%2BpmuOQMt1EbCDu7i8WDBRhvCc5HUaR%2B0iCbOVYSjvZ7SUh0TD%2Fvj663IrO6c3hAeG1MG4AbVC%2B9zzf%2B3%2FtcHDdA9sL%2BxfB6xB67BZ%2Bo1DOH1j6Lgb22THDEZYY0V%2Btx3AZOFZZxa%2FPF0jO3A35eNw6EeEP442ce%2BAK1BPrtzRvSixYtNzKl5GP%2BPfd2kRM2sG6OZySDyKOQqJm46LoOWv9jr89QzCNJ7tAxJoq0P2vUOVgtzgsjvmon75nu%2B19B40eHa7n55FD19wqB%2Faxa7LZ7mcwKQdFeoeCkXLmAxGIgo6Vt3ex%2BYXMur%2F072DrAsxVbkrn90lrSkw6LO%2FvQY6pgEg10UvR74I%2BfvzwZDahMF2NPCCtyrqyyelTf2avOTowyOj%2BnDsb74yibIKQh2bQ%2FpdTN1bcetT%2Fd29HNdip4iR3UucgmPxUeElD3u7M%2BBFqb2bSKNK12vf5N%2B9Fag4HxywEJAdFf%2BDDC7QjBCjdCmBXbYSdOlmOVdsLgjJObjvQiAF0hOd1GHstGgnEPimUUrrMthbMAXYj6FpbV63DHiN8ZDrHQiK&X-Amz-Signature=6987ad52ac41f923a01c977b973ecac8162d44f8fe91d4586789e599e1007b00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VOIURT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFhoBm%2FL9etjMYieBwRHM94pE47aCxdG4GUa%2Br6nWbzhAiACPhffylB4gMYOiDGgUB2Mbq4b3Tc013lyF0u908oVLyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM0bB%2Fr%2BXlfoK3GQ9dKtwD6wTACYYgfkPLPkbpZsZ3DvRSNS6fNFpajFLkl2KMUREe%2BmfaT%2FJF6cpyKQKyLoF8ea097GBzyvxKtmYWr0TRuHe63a4djux7W4AZwDaCNTkuVYDmvxk%2FXcUWh8v3o%2BhTTxIIRP%2FIRR%2FT30vLViWaELgvYodP3RfFsuUCLR7vQlzG4X%2F6x8cihGYJDu97UgW1dWhjxspOQwpqM7bs2M2r7OLV3WBFSmAYDd9FJv2sw04sVt8J49jh7ZoJZ2hSHKCCsUd05bGhuX82cObbsbXn30DxNbTnPF9xQDUd7vlMcQ1US1l%2BpmuOQMt1EbCDu7i8WDBRhvCc5HUaR%2B0iCbOVYSjvZ7SUh0TD%2Fvj663IrO6c3hAeG1MG4AbVC%2B9zzf%2B3%2FtcHDdA9sL%2BxfB6xB67BZ%2Bo1DOH1j6Lgb22THDEZYY0V%2Btx3AZOFZZxa%2FPF0jO3A35eNw6EeEP442ce%2BAK1BPrtzRvSixYtNzKl5GP%2BPfd2kRM2sG6OZySDyKOQqJm46LoOWv9jr89QzCNJ7tAxJoq0P2vUOVgtzgsjvmon75nu%2B19B40eHa7n55FD19wqB%2Faxa7LZ7mcwKQdFeoeCkXLmAxGIgo6Vt3ex%2BYXMur%2F072DrAsxVbkrn90lrSkw6LO%2FvQY6pgEg10UvR74I%2BfvzwZDahMF2NPCCtyrqyyelTf2avOTowyOj%2BnDsb74yibIKQh2bQ%2FpdTN1bcetT%2Fd29HNdip4iR3UucgmPxUeElD3u7M%2BBFqb2bSKNK12vf5N%2B9Fag4HxywEJAdFf%2BDDC7QjBCjdCmBXbYSdOlmOVdsLgjJObjvQiAF0hOd1GHstGgnEPimUUrrMthbMAXYj6FpbV63DHiN8ZDrHQiK&X-Amz-Signature=249c47d944d666ec3151a17ec7e6bf7471da91326d81a6d467a5dcc92e212cd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VOIURT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFhoBm%2FL9etjMYieBwRHM94pE47aCxdG4GUa%2Br6nWbzhAiACPhffylB4gMYOiDGgUB2Mbq4b3Tc013lyF0u908oVLyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM0bB%2Fr%2BXlfoK3GQ9dKtwD6wTACYYgfkPLPkbpZsZ3DvRSNS6fNFpajFLkl2KMUREe%2BmfaT%2FJF6cpyKQKyLoF8ea097GBzyvxKtmYWr0TRuHe63a4djux7W4AZwDaCNTkuVYDmvxk%2FXcUWh8v3o%2BhTTxIIRP%2FIRR%2FT30vLViWaELgvYodP3RfFsuUCLR7vQlzG4X%2F6x8cihGYJDu97UgW1dWhjxspOQwpqM7bs2M2r7OLV3WBFSmAYDd9FJv2sw04sVt8J49jh7ZoJZ2hSHKCCsUd05bGhuX82cObbsbXn30DxNbTnPF9xQDUd7vlMcQ1US1l%2BpmuOQMt1EbCDu7i8WDBRhvCc5HUaR%2B0iCbOVYSjvZ7SUh0TD%2Fvj663IrO6c3hAeG1MG4AbVC%2B9zzf%2B3%2FtcHDdA9sL%2BxfB6xB67BZ%2Bo1DOH1j6Lgb22THDEZYY0V%2Btx3AZOFZZxa%2FPF0jO3A35eNw6EeEP442ce%2BAK1BPrtzRvSixYtNzKl5GP%2BPfd2kRM2sG6OZySDyKOQqJm46LoOWv9jr89QzCNJ7tAxJoq0P2vUOVgtzgsjvmon75nu%2B19B40eHa7n55FD19wqB%2Faxa7LZ7mcwKQdFeoeCkXLmAxGIgo6Vt3ex%2BYXMur%2F072DrAsxVbkrn90lrSkw6LO%2FvQY6pgEg10UvR74I%2BfvzwZDahMF2NPCCtyrqyyelTf2avOTowyOj%2BnDsb74yibIKQh2bQ%2FpdTN1bcetT%2Fd29HNdip4iR3UucgmPxUeElD3u7M%2BBFqb2bSKNK12vf5N%2B9Fag4HxywEJAdFf%2BDDC7QjBCjdCmBXbYSdOlmOVdsLgjJObjvQiAF0hOd1GHstGgnEPimUUrrMthbMAXYj6FpbV63DHiN8ZDrHQiK&X-Amz-Signature=08d6e74efcd22ee840de87db266b7a8b56dfd2ffafd273b118ac5cb5a4d020df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
