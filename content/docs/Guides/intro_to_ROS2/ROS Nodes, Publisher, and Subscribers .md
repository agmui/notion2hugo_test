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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ4JYVJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ISy5RIs%2FcOyfmYceWqIKcN73dJNcr9Kk0j6Rq9Ag3AiBBfF3%2F7JFuXDTjW%2FCUoC6s%2BPbClayj2zT%2FmWP9wB7r9iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvy8N4bHmsqEwaoRmKtwD0nmsIh%2Fl%2BrIqX8KUK%2BGQEZLiCl6IKD6GmajsOZXJim0mSlNY9RRhJb5CSk5MMGmf0F7ooxNKW8z6R3vUvdUc0lEJrRNcR2MUasUKU8JtwYBkV9IgpxPinf8H5qVgWHIoXPXOTmcBgemy0x%2BBq8gb2o2N7tIDRUdNfS8t9MVf0cQQJGvtaq%2FBU09qj2%2FlshaxCo5yBAS1aUL3%2BCAf3Ij8B%2FUQeJcxjKL9o62oCfulsIX6I0agW%2BJ8x56cxKAyS8akYeXRq4BIFDLSpTcgW4XhtL%2FRpiObb1mFFm4J6jNHUs7bLXWPRTOpjHb5eG3YAU%2FJKWFS2WSw7YX7BIvqcFcGktVC1C1GtfCBNwZj%2F4MVS%2B6Yd50RXQYKBc72kw9ivscyWCPRrCVG6FagmjfLvCgvDANZA9ox6Ufdt2ej3k1ElvzhFPaF0MCEtnHHGpCUc6SkETUAvdyX8toQVsg3KAxghxdj2gFwCr4LomS8pf1Tw8c0JEutlq0xFv9Po%2BosptNLdmztiwkzL5RgbXIKfw9o4UtuBrQb2%2FgjB5HqQ3umY1j1muJkBvxaEqQBJGhdSNZxD88u4HIz5nrOTkgVjxkcKovzuydKb%2BTG%2FLPzQNSwVEcWCqZ481PpTxGJuscwzbjyvAY6pgF1K3XcD%2F2Bqk0cM%2F1M9jcCrNT9IKWYLZ%2FSk8lY50cNpwEHPegw8rl10DeShGdY84MHQ3KT3InjxP1Hkq82xitkPE57Ma0vTiTa2LhORxR59oXKgCNXrVY%2BS5FzpPHJpwG3pH6GTpImLtXvSgAgmxD3B6zi51YQFq8jiTec5KXsBqGK7sFGEEfhIUxkmSJFCrmCPGLOiuvHe%2FQynHscbxcF15Zn4KH6&X-Amz-Signature=7d714cd118e1d66b667fa4ebea1c26a30064eb7c9de05a3e0a0951c63b942eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ4JYVJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ISy5RIs%2FcOyfmYceWqIKcN73dJNcr9Kk0j6Rq9Ag3AiBBfF3%2F7JFuXDTjW%2FCUoC6s%2BPbClayj2zT%2FmWP9wB7r9iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvy8N4bHmsqEwaoRmKtwD0nmsIh%2Fl%2BrIqX8KUK%2BGQEZLiCl6IKD6GmajsOZXJim0mSlNY9RRhJb5CSk5MMGmf0F7ooxNKW8z6R3vUvdUc0lEJrRNcR2MUasUKU8JtwYBkV9IgpxPinf8H5qVgWHIoXPXOTmcBgemy0x%2BBq8gb2o2N7tIDRUdNfS8t9MVf0cQQJGvtaq%2FBU09qj2%2FlshaxCo5yBAS1aUL3%2BCAf3Ij8B%2FUQeJcxjKL9o62oCfulsIX6I0agW%2BJ8x56cxKAyS8akYeXRq4BIFDLSpTcgW4XhtL%2FRpiObb1mFFm4J6jNHUs7bLXWPRTOpjHb5eG3YAU%2FJKWFS2WSw7YX7BIvqcFcGktVC1C1GtfCBNwZj%2F4MVS%2B6Yd50RXQYKBc72kw9ivscyWCPRrCVG6FagmjfLvCgvDANZA9ox6Ufdt2ej3k1ElvzhFPaF0MCEtnHHGpCUc6SkETUAvdyX8toQVsg3KAxghxdj2gFwCr4LomS8pf1Tw8c0JEutlq0xFv9Po%2BosptNLdmztiwkzL5RgbXIKfw9o4UtuBrQb2%2FgjB5HqQ3umY1j1muJkBvxaEqQBJGhdSNZxD88u4HIz5nrOTkgVjxkcKovzuydKb%2BTG%2FLPzQNSwVEcWCqZ481PpTxGJuscwzbjyvAY6pgF1K3XcD%2F2Bqk0cM%2F1M9jcCrNT9IKWYLZ%2FSk8lY50cNpwEHPegw8rl10DeShGdY84MHQ3KT3InjxP1Hkq82xitkPE57Ma0vTiTa2LhORxR59oXKgCNXrVY%2BS5FzpPHJpwG3pH6GTpImLtXvSgAgmxD3B6zi51YQFq8jiTec5KXsBqGK7sFGEEfhIUxkmSJFCrmCPGLOiuvHe%2FQynHscbxcF15Zn4KH6&X-Amz-Signature=4456a0322ab618ea7b0e3e64ba9fa03a6a6f7077aba07ba49eed8b5fb587a04c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ4JYVJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ISy5RIs%2FcOyfmYceWqIKcN73dJNcr9Kk0j6Rq9Ag3AiBBfF3%2F7JFuXDTjW%2FCUoC6s%2BPbClayj2zT%2FmWP9wB7r9iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvy8N4bHmsqEwaoRmKtwD0nmsIh%2Fl%2BrIqX8KUK%2BGQEZLiCl6IKD6GmajsOZXJim0mSlNY9RRhJb5CSk5MMGmf0F7ooxNKW8z6R3vUvdUc0lEJrRNcR2MUasUKU8JtwYBkV9IgpxPinf8H5qVgWHIoXPXOTmcBgemy0x%2BBq8gb2o2N7tIDRUdNfS8t9MVf0cQQJGvtaq%2FBU09qj2%2FlshaxCo5yBAS1aUL3%2BCAf3Ij8B%2FUQeJcxjKL9o62oCfulsIX6I0agW%2BJ8x56cxKAyS8akYeXRq4BIFDLSpTcgW4XhtL%2FRpiObb1mFFm4J6jNHUs7bLXWPRTOpjHb5eG3YAU%2FJKWFS2WSw7YX7BIvqcFcGktVC1C1GtfCBNwZj%2F4MVS%2B6Yd50RXQYKBc72kw9ivscyWCPRrCVG6FagmjfLvCgvDANZA9ox6Ufdt2ej3k1ElvzhFPaF0MCEtnHHGpCUc6SkETUAvdyX8toQVsg3KAxghxdj2gFwCr4LomS8pf1Tw8c0JEutlq0xFv9Po%2BosptNLdmztiwkzL5RgbXIKfw9o4UtuBrQb2%2FgjB5HqQ3umY1j1muJkBvxaEqQBJGhdSNZxD88u4HIz5nrOTkgVjxkcKovzuydKb%2BTG%2FLPzQNSwVEcWCqZ481PpTxGJuscwzbjyvAY6pgF1K3XcD%2F2Bqk0cM%2F1M9jcCrNT9IKWYLZ%2FSk8lY50cNpwEHPegw8rl10DeShGdY84MHQ3KT3InjxP1Hkq82xitkPE57Ma0vTiTa2LhORxR59oXKgCNXrVY%2BS5FzpPHJpwG3pH6GTpImLtXvSgAgmxD3B6zi51YQFq8jiTec5KXsBqGK7sFGEEfhIUxkmSJFCrmCPGLOiuvHe%2FQynHscbxcF15Zn4KH6&X-Amz-Signature=e172e65c9818bb7ab232f77ffe13baa5acb59938404a0eedf142082ed70f37fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ4JYVJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ISy5RIs%2FcOyfmYceWqIKcN73dJNcr9Kk0j6Rq9Ag3AiBBfF3%2F7JFuXDTjW%2FCUoC6s%2BPbClayj2zT%2FmWP9wB7r9iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvy8N4bHmsqEwaoRmKtwD0nmsIh%2Fl%2BrIqX8KUK%2BGQEZLiCl6IKD6GmajsOZXJim0mSlNY9RRhJb5CSk5MMGmf0F7ooxNKW8z6R3vUvdUc0lEJrRNcR2MUasUKU8JtwYBkV9IgpxPinf8H5qVgWHIoXPXOTmcBgemy0x%2BBq8gb2o2N7tIDRUdNfS8t9MVf0cQQJGvtaq%2FBU09qj2%2FlshaxCo5yBAS1aUL3%2BCAf3Ij8B%2FUQeJcxjKL9o62oCfulsIX6I0agW%2BJ8x56cxKAyS8akYeXRq4BIFDLSpTcgW4XhtL%2FRpiObb1mFFm4J6jNHUs7bLXWPRTOpjHb5eG3YAU%2FJKWFS2WSw7YX7BIvqcFcGktVC1C1GtfCBNwZj%2F4MVS%2B6Yd50RXQYKBc72kw9ivscyWCPRrCVG6FagmjfLvCgvDANZA9ox6Ufdt2ej3k1ElvzhFPaF0MCEtnHHGpCUc6SkETUAvdyX8toQVsg3KAxghxdj2gFwCr4LomS8pf1Tw8c0JEutlq0xFv9Po%2BosptNLdmztiwkzL5RgbXIKfw9o4UtuBrQb2%2FgjB5HqQ3umY1j1muJkBvxaEqQBJGhdSNZxD88u4HIz5nrOTkgVjxkcKovzuydKb%2BTG%2FLPzQNSwVEcWCqZ481PpTxGJuscwzbjyvAY6pgF1K3XcD%2F2Bqk0cM%2F1M9jcCrNT9IKWYLZ%2FSk8lY50cNpwEHPegw8rl10DeShGdY84MHQ3KT3InjxP1Hkq82xitkPE57Ma0vTiTa2LhORxR59oXKgCNXrVY%2BS5FzpPHJpwG3pH6GTpImLtXvSgAgmxD3B6zi51YQFq8jiTec5KXsBqGK7sFGEEfhIUxkmSJFCrmCPGLOiuvHe%2FQynHscbxcF15Zn4KH6&X-Amz-Signature=d7c4e58e9532e26f809012203cf1560683135f9ff8a83d77204e048d7820e2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ4JYVJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ISy5RIs%2FcOyfmYceWqIKcN73dJNcr9Kk0j6Rq9Ag3AiBBfF3%2F7JFuXDTjW%2FCUoC6s%2BPbClayj2zT%2FmWP9wB7r9iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvy8N4bHmsqEwaoRmKtwD0nmsIh%2Fl%2BrIqX8KUK%2BGQEZLiCl6IKD6GmajsOZXJim0mSlNY9RRhJb5CSk5MMGmf0F7ooxNKW8z6R3vUvdUc0lEJrRNcR2MUasUKU8JtwYBkV9IgpxPinf8H5qVgWHIoXPXOTmcBgemy0x%2BBq8gb2o2N7tIDRUdNfS8t9MVf0cQQJGvtaq%2FBU09qj2%2FlshaxCo5yBAS1aUL3%2BCAf3Ij8B%2FUQeJcxjKL9o62oCfulsIX6I0agW%2BJ8x56cxKAyS8akYeXRq4BIFDLSpTcgW4XhtL%2FRpiObb1mFFm4J6jNHUs7bLXWPRTOpjHb5eG3YAU%2FJKWFS2WSw7YX7BIvqcFcGktVC1C1GtfCBNwZj%2F4MVS%2B6Yd50RXQYKBc72kw9ivscyWCPRrCVG6FagmjfLvCgvDANZA9ox6Ufdt2ej3k1ElvzhFPaF0MCEtnHHGpCUc6SkETUAvdyX8toQVsg3KAxghxdj2gFwCr4LomS8pf1Tw8c0JEutlq0xFv9Po%2BosptNLdmztiwkzL5RgbXIKfw9o4UtuBrQb2%2FgjB5HqQ3umY1j1muJkBvxaEqQBJGhdSNZxD88u4HIz5nrOTkgVjxkcKovzuydKb%2BTG%2FLPzQNSwVEcWCqZ481PpTxGJuscwzbjyvAY6pgF1K3XcD%2F2Bqk0cM%2F1M9jcCrNT9IKWYLZ%2FSk8lY50cNpwEHPegw8rl10DeShGdY84MHQ3KT3InjxP1Hkq82xitkPE57Ma0vTiTa2LhORxR59oXKgCNXrVY%2BS5FzpPHJpwG3pH6GTpImLtXvSgAgmxD3B6zi51YQFq8jiTec5KXsBqGK7sFGEEfhIUxkmSJFCrmCPGLOiuvHe%2FQynHscbxcF15Zn4KH6&X-Amz-Signature=33c954ed1805320faba9f9a419befd49a292a195458909c1b9b65ff4f95253ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ4JYVJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ISy5RIs%2FcOyfmYceWqIKcN73dJNcr9Kk0j6Rq9Ag3AiBBfF3%2F7JFuXDTjW%2FCUoC6s%2BPbClayj2zT%2FmWP9wB7r9iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvy8N4bHmsqEwaoRmKtwD0nmsIh%2Fl%2BrIqX8KUK%2BGQEZLiCl6IKD6GmajsOZXJim0mSlNY9RRhJb5CSk5MMGmf0F7ooxNKW8z6R3vUvdUc0lEJrRNcR2MUasUKU8JtwYBkV9IgpxPinf8H5qVgWHIoXPXOTmcBgemy0x%2BBq8gb2o2N7tIDRUdNfS8t9MVf0cQQJGvtaq%2FBU09qj2%2FlshaxCo5yBAS1aUL3%2BCAf3Ij8B%2FUQeJcxjKL9o62oCfulsIX6I0agW%2BJ8x56cxKAyS8akYeXRq4BIFDLSpTcgW4XhtL%2FRpiObb1mFFm4J6jNHUs7bLXWPRTOpjHb5eG3YAU%2FJKWFS2WSw7YX7BIvqcFcGktVC1C1GtfCBNwZj%2F4MVS%2B6Yd50RXQYKBc72kw9ivscyWCPRrCVG6FagmjfLvCgvDANZA9ox6Ufdt2ej3k1ElvzhFPaF0MCEtnHHGpCUc6SkETUAvdyX8toQVsg3KAxghxdj2gFwCr4LomS8pf1Tw8c0JEutlq0xFv9Po%2BosptNLdmztiwkzL5RgbXIKfw9o4UtuBrQb2%2FgjB5HqQ3umY1j1muJkBvxaEqQBJGhdSNZxD88u4HIz5nrOTkgVjxkcKovzuydKb%2BTG%2FLPzQNSwVEcWCqZ481PpTxGJuscwzbjyvAY6pgF1K3XcD%2F2Bqk0cM%2F1M9jcCrNT9IKWYLZ%2FSk8lY50cNpwEHPegw8rl10DeShGdY84MHQ3KT3InjxP1Hkq82xitkPE57Ma0vTiTa2LhORxR59oXKgCNXrVY%2BS5FzpPHJpwG3pH6GTpImLtXvSgAgmxD3B6zi51YQFq8jiTec5KXsBqGK7sFGEEfhIUxkmSJFCrmCPGLOiuvHe%2FQynHscbxcF15Zn4KH6&X-Amz-Signature=6c9b915d4a7634a22d10b78e0e0b2fe889d4b9e260934bed73e56a4345c7ece7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ4JYVJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ISy5RIs%2FcOyfmYceWqIKcN73dJNcr9Kk0j6Rq9Ag3AiBBfF3%2F7JFuXDTjW%2FCUoC6s%2BPbClayj2zT%2FmWP9wB7r9iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvy8N4bHmsqEwaoRmKtwD0nmsIh%2Fl%2BrIqX8KUK%2BGQEZLiCl6IKD6GmajsOZXJim0mSlNY9RRhJb5CSk5MMGmf0F7ooxNKW8z6R3vUvdUc0lEJrRNcR2MUasUKU8JtwYBkV9IgpxPinf8H5qVgWHIoXPXOTmcBgemy0x%2BBq8gb2o2N7tIDRUdNfS8t9MVf0cQQJGvtaq%2FBU09qj2%2FlshaxCo5yBAS1aUL3%2BCAf3Ij8B%2FUQeJcxjKL9o62oCfulsIX6I0agW%2BJ8x56cxKAyS8akYeXRq4BIFDLSpTcgW4XhtL%2FRpiObb1mFFm4J6jNHUs7bLXWPRTOpjHb5eG3YAU%2FJKWFS2WSw7YX7BIvqcFcGktVC1C1GtfCBNwZj%2F4MVS%2B6Yd50RXQYKBc72kw9ivscyWCPRrCVG6FagmjfLvCgvDANZA9ox6Ufdt2ej3k1ElvzhFPaF0MCEtnHHGpCUc6SkETUAvdyX8toQVsg3KAxghxdj2gFwCr4LomS8pf1Tw8c0JEutlq0xFv9Po%2BosptNLdmztiwkzL5RgbXIKfw9o4UtuBrQb2%2FgjB5HqQ3umY1j1muJkBvxaEqQBJGhdSNZxD88u4HIz5nrOTkgVjxkcKovzuydKb%2BTG%2FLPzQNSwVEcWCqZ481PpTxGJuscwzbjyvAY6pgF1K3XcD%2F2Bqk0cM%2F1M9jcCrNT9IKWYLZ%2FSk8lY50cNpwEHPegw8rl10DeShGdY84MHQ3KT3InjxP1Hkq82xitkPE57Ma0vTiTa2LhORxR59oXKgCNXrVY%2BS5FzpPHJpwG3pH6GTpImLtXvSgAgmxD3B6zi51YQFq8jiTec5KXsBqGK7sFGEEfhIUxkmSJFCrmCPGLOiuvHe%2FQynHscbxcF15Zn4KH6&X-Amz-Signature=937cf81ea783eb252f0790f9eae92896c1bbda833bd92528ab35d504635f1e11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ4JYVJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ISy5RIs%2FcOyfmYceWqIKcN73dJNcr9Kk0j6Rq9Ag3AiBBfF3%2F7JFuXDTjW%2FCUoC6s%2BPbClayj2zT%2FmWP9wB7r9iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvy8N4bHmsqEwaoRmKtwD0nmsIh%2Fl%2BrIqX8KUK%2BGQEZLiCl6IKD6GmajsOZXJim0mSlNY9RRhJb5CSk5MMGmf0F7ooxNKW8z6R3vUvdUc0lEJrRNcR2MUasUKU8JtwYBkV9IgpxPinf8H5qVgWHIoXPXOTmcBgemy0x%2BBq8gb2o2N7tIDRUdNfS8t9MVf0cQQJGvtaq%2FBU09qj2%2FlshaxCo5yBAS1aUL3%2BCAf3Ij8B%2FUQeJcxjKL9o62oCfulsIX6I0agW%2BJ8x56cxKAyS8akYeXRq4BIFDLSpTcgW4XhtL%2FRpiObb1mFFm4J6jNHUs7bLXWPRTOpjHb5eG3YAU%2FJKWFS2WSw7YX7BIvqcFcGktVC1C1GtfCBNwZj%2F4MVS%2B6Yd50RXQYKBc72kw9ivscyWCPRrCVG6FagmjfLvCgvDANZA9ox6Ufdt2ej3k1ElvzhFPaF0MCEtnHHGpCUc6SkETUAvdyX8toQVsg3KAxghxdj2gFwCr4LomS8pf1Tw8c0JEutlq0xFv9Po%2BosptNLdmztiwkzL5RgbXIKfw9o4UtuBrQb2%2FgjB5HqQ3umY1j1muJkBvxaEqQBJGhdSNZxD88u4HIz5nrOTkgVjxkcKovzuydKb%2BTG%2FLPzQNSwVEcWCqZ481PpTxGJuscwzbjyvAY6pgF1K3XcD%2F2Bqk0cM%2F1M9jcCrNT9IKWYLZ%2FSk8lY50cNpwEHPegw8rl10DeShGdY84MHQ3KT3InjxP1Hkq82xitkPE57Ma0vTiTa2LhORxR59oXKgCNXrVY%2BS5FzpPHJpwG3pH6GTpImLtXvSgAgmxD3B6zi51YQFq8jiTec5KXsBqGK7sFGEEfhIUxkmSJFCrmCPGLOiuvHe%2FQynHscbxcF15Zn4KH6&X-Amz-Signature=d0428d72c7a1f12190989449a27848c92451906549c8fa16fe5139ef3b9040dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
