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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIQTJ47%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCon526UnfikxXQTBfU%2F4045pQ77GXBApBTogEQR%2Ba0bgIgfu%2FBTdjSKmA%2FKiJGp2w8%2FC2MSLOzoWspsJEU7mHlKFYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLhFhRzTTOryzvtJ9ircAz9DnJOqDC6V0w7IwB%2FmFsf6zmY4LZxPdIHePX0g5CSAIz9wK%2Bt7d9h%2B2eIVG%2BmDccbyhdTN%2BG8n79VOBifJt1k%2FUxiaEj9KBmBGMEK0%2FM7PZzXpm1WXKNlMDrMc4bbLx2K7l%2FDajv9ccSnqw5VplgUdVpHXNpZ0LB4EzmLz8%2F3ZM%2Bxd4pEitQGpsvPM%2FjJ0w96LXc%2F2WMCu%2B27vzkFBdP205vDgR%2BPwsEzc3Bl1%2Bv1i9bMo256WveXilrGTzToo5dhxEEz5u%2BveaUJbFR10PXz0Q25JTlDJkbiK8FHRVDdfmnzcf9PoNQEEGGIIaIaUwNwVFSvewsR6GKUaWC7NbFv00YCFZZCTpSlTXuI4o9AKC0KKFAEnYgyBXan7Kl4TT%2FgASVjNc9CunbrnRMFCNSOjULYnk0Z18UkKw6hiBRYFszz4v3l%2FKlnjnf9bSDihujAGsPfHSJUbtg1PhZobPHHuO46NbqXUu3RT4vBq7ZG7Ti9PKTdB3YyZeMXuP7bKXbHnpZ4xJpFgiWVHfyvrfDF6kBy%2FOFQP1CXxN%2Bl4jlwQthPLfdd6%2F%2FdVd2Gaonxq8GdbvNtiWmOLhX5rVDAqInmWloyqC%2BNRRhvIHLqeOxdL7fRRQhGKJ6rWX1ElMLGVqMAGOqUBRgjSxdTus226kdya%2FVYgPMK488ruOpRAxOLG2kMWnf%2F4PyJ%2FiShYz%2Bb%2F0BIJWuBdPUyGUezKVlqxAxRARCZZMb%2B%2F3ZSXPlQVaWyMqc27DDM8KAs4ARueoyn4sqlTFq7NzyaTNja7TCJgB2hLMSHAZ%2FfsScpXl5CWFsFysCRVF04XOL9Qfdj%2BEoAR5j0i%2BUo8RCbTSPPL6tDOtIn61mSa3hRKwCRk&X-Amz-Signature=b549567af114ea4b31e043719f1fe1b23faab204bd5a56ae3193f9ec4ef9ffc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIQTJ47%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCon526UnfikxXQTBfU%2F4045pQ77GXBApBTogEQR%2Ba0bgIgfu%2FBTdjSKmA%2FKiJGp2w8%2FC2MSLOzoWspsJEU7mHlKFYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLhFhRzTTOryzvtJ9ircAz9DnJOqDC6V0w7IwB%2FmFsf6zmY4LZxPdIHePX0g5CSAIz9wK%2Bt7d9h%2B2eIVG%2BmDccbyhdTN%2BG8n79VOBifJt1k%2FUxiaEj9KBmBGMEK0%2FM7PZzXpm1WXKNlMDrMc4bbLx2K7l%2FDajv9ccSnqw5VplgUdVpHXNpZ0LB4EzmLz8%2F3ZM%2Bxd4pEitQGpsvPM%2FjJ0w96LXc%2F2WMCu%2B27vzkFBdP205vDgR%2BPwsEzc3Bl1%2Bv1i9bMo256WveXilrGTzToo5dhxEEz5u%2BveaUJbFR10PXz0Q25JTlDJkbiK8FHRVDdfmnzcf9PoNQEEGGIIaIaUwNwVFSvewsR6GKUaWC7NbFv00YCFZZCTpSlTXuI4o9AKC0KKFAEnYgyBXan7Kl4TT%2FgASVjNc9CunbrnRMFCNSOjULYnk0Z18UkKw6hiBRYFszz4v3l%2FKlnjnf9bSDihujAGsPfHSJUbtg1PhZobPHHuO46NbqXUu3RT4vBq7ZG7Ti9PKTdB3YyZeMXuP7bKXbHnpZ4xJpFgiWVHfyvrfDF6kBy%2FOFQP1CXxN%2Bl4jlwQthPLfdd6%2F%2FdVd2Gaonxq8GdbvNtiWmOLhX5rVDAqInmWloyqC%2BNRRhvIHLqeOxdL7fRRQhGKJ6rWX1ElMLGVqMAGOqUBRgjSxdTus226kdya%2FVYgPMK488ruOpRAxOLG2kMWnf%2F4PyJ%2FiShYz%2Bb%2F0BIJWuBdPUyGUezKVlqxAxRARCZZMb%2B%2F3ZSXPlQVaWyMqc27DDM8KAs4ARueoyn4sqlTFq7NzyaTNja7TCJgB2hLMSHAZ%2FfsScpXl5CWFsFysCRVF04XOL9Qfdj%2BEoAR5j0i%2BUo8RCbTSPPL6tDOtIn61mSa3hRKwCRk&X-Amz-Signature=e7a3530447acd7a5ee7b3a9ac2be424f14500dd279d4aef4afcf4fdb3c8e67c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIQTJ47%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCon526UnfikxXQTBfU%2F4045pQ77GXBApBTogEQR%2Ba0bgIgfu%2FBTdjSKmA%2FKiJGp2w8%2FC2MSLOzoWspsJEU7mHlKFYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLhFhRzTTOryzvtJ9ircAz9DnJOqDC6V0w7IwB%2FmFsf6zmY4LZxPdIHePX0g5CSAIz9wK%2Bt7d9h%2B2eIVG%2BmDccbyhdTN%2BG8n79VOBifJt1k%2FUxiaEj9KBmBGMEK0%2FM7PZzXpm1WXKNlMDrMc4bbLx2K7l%2FDajv9ccSnqw5VplgUdVpHXNpZ0LB4EzmLz8%2F3ZM%2Bxd4pEitQGpsvPM%2FjJ0w96LXc%2F2WMCu%2B27vzkFBdP205vDgR%2BPwsEzc3Bl1%2Bv1i9bMo256WveXilrGTzToo5dhxEEz5u%2BveaUJbFR10PXz0Q25JTlDJkbiK8FHRVDdfmnzcf9PoNQEEGGIIaIaUwNwVFSvewsR6GKUaWC7NbFv00YCFZZCTpSlTXuI4o9AKC0KKFAEnYgyBXan7Kl4TT%2FgASVjNc9CunbrnRMFCNSOjULYnk0Z18UkKw6hiBRYFszz4v3l%2FKlnjnf9bSDihujAGsPfHSJUbtg1PhZobPHHuO46NbqXUu3RT4vBq7ZG7Ti9PKTdB3YyZeMXuP7bKXbHnpZ4xJpFgiWVHfyvrfDF6kBy%2FOFQP1CXxN%2Bl4jlwQthPLfdd6%2F%2FdVd2Gaonxq8GdbvNtiWmOLhX5rVDAqInmWloyqC%2BNRRhvIHLqeOxdL7fRRQhGKJ6rWX1ElMLGVqMAGOqUBRgjSxdTus226kdya%2FVYgPMK488ruOpRAxOLG2kMWnf%2F4PyJ%2FiShYz%2Bb%2F0BIJWuBdPUyGUezKVlqxAxRARCZZMb%2B%2F3ZSXPlQVaWyMqc27DDM8KAs4ARueoyn4sqlTFq7NzyaTNja7TCJgB2hLMSHAZ%2FfsScpXl5CWFsFysCRVF04XOL9Qfdj%2BEoAR5j0i%2BUo8RCbTSPPL6tDOtIn61mSa3hRKwCRk&X-Amz-Signature=577dda3b9e3df57705d67aab07e11d3da772461f07f1d88034ce37ba229601b8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIQTJ47%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCon526UnfikxXQTBfU%2F4045pQ77GXBApBTogEQR%2Ba0bgIgfu%2FBTdjSKmA%2FKiJGp2w8%2FC2MSLOzoWspsJEU7mHlKFYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLhFhRzTTOryzvtJ9ircAz9DnJOqDC6V0w7IwB%2FmFsf6zmY4LZxPdIHePX0g5CSAIz9wK%2Bt7d9h%2B2eIVG%2BmDccbyhdTN%2BG8n79VOBifJt1k%2FUxiaEj9KBmBGMEK0%2FM7PZzXpm1WXKNlMDrMc4bbLx2K7l%2FDajv9ccSnqw5VplgUdVpHXNpZ0LB4EzmLz8%2F3ZM%2Bxd4pEitQGpsvPM%2FjJ0w96LXc%2F2WMCu%2B27vzkFBdP205vDgR%2BPwsEzc3Bl1%2Bv1i9bMo256WveXilrGTzToo5dhxEEz5u%2BveaUJbFR10PXz0Q25JTlDJkbiK8FHRVDdfmnzcf9PoNQEEGGIIaIaUwNwVFSvewsR6GKUaWC7NbFv00YCFZZCTpSlTXuI4o9AKC0KKFAEnYgyBXan7Kl4TT%2FgASVjNc9CunbrnRMFCNSOjULYnk0Z18UkKw6hiBRYFszz4v3l%2FKlnjnf9bSDihujAGsPfHSJUbtg1PhZobPHHuO46NbqXUu3RT4vBq7ZG7Ti9PKTdB3YyZeMXuP7bKXbHnpZ4xJpFgiWVHfyvrfDF6kBy%2FOFQP1CXxN%2Bl4jlwQthPLfdd6%2F%2FdVd2Gaonxq8GdbvNtiWmOLhX5rVDAqInmWloyqC%2BNRRhvIHLqeOxdL7fRRQhGKJ6rWX1ElMLGVqMAGOqUBRgjSxdTus226kdya%2FVYgPMK488ruOpRAxOLG2kMWnf%2F4PyJ%2FiShYz%2Bb%2F0BIJWuBdPUyGUezKVlqxAxRARCZZMb%2B%2F3ZSXPlQVaWyMqc27DDM8KAs4ARueoyn4sqlTFq7NzyaTNja7TCJgB2hLMSHAZ%2FfsScpXl5CWFsFysCRVF04XOL9Qfdj%2BEoAR5j0i%2BUo8RCbTSPPL6tDOtIn61mSa3hRKwCRk&X-Amz-Signature=4c0cf89dddbc4fdbffde559ff7d129a0c18407cdf56af64ce140830c394bf061&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIQTJ47%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCon526UnfikxXQTBfU%2F4045pQ77GXBApBTogEQR%2Ba0bgIgfu%2FBTdjSKmA%2FKiJGp2w8%2FC2MSLOzoWspsJEU7mHlKFYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLhFhRzTTOryzvtJ9ircAz9DnJOqDC6V0w7IwB%2FmFsf6zmY4LZxPdIHePX0g5CSAIz9wK%2Bt7d9h%2B2eIVG%2BmDccbyhdTN%2BG8n79VOBifJt1k%2FUxiaEj9KBmBGMEK0%2FM7PZzXpm1WXKNlMDrMc4bbLx2K7l%2FDajv9ccSnqw5VplgUdVpHXNpZ0LB4EzmLz8%2F3ZM%2Bxd4pEitQGpsvPM%2FjJ0w96LXc%2F2WMCu%2B27vzkFBdP205vDgR%2BPwsEzc3Bl1%2Bv1i9bMo256WveXilrGTzToo5dhxEEz5u%2BveaUJbFR10PXz0Q25JTlDJkbiK8FHRVDdfmnzcf9PoNQEEGGIIaIaUwNwVFSvewsR6GKUaWC7NbFv00YCFZZCTpSlTXuI4o9AKC0KKFAEnYgyBXan7Kl4TT%2FgASVjNc9CunbrnRMFCNSOjULYnk0Z18UkKw6hiBRYFszz4v3l%2FKlnjnf9bSDihujAGsPfHSJUbtg1PhZobPHHuO46NbqXUu3RT4vBq7ZG7Ti9PKTdB3YyZeMXuP7bKXbHnpZ4xJpFgiWVHfyvrfDF6kBy%2FOFQP1CXxN%2Bl4jlwQthPLfdd6%2F%2FdVd2Gaonxq8GdbvNtiWmOLhX5rVDAqInmWloyqC%2BNRRhvIHLqeOxdL7fRRQhGKJ6rWX1ElMLGVqMAGOqUBRgjSxdTus226kdya%2FVYgPMK488ruOpRAxOLG2kMWnf%2F4PyJ%2FiShYz%2Bb%2F0BIJWuBdPUyGUezKVlqxAxRARCZZMb%2B%2F3ZSXPlQVaWyMqc27DDM8KAs4ARueoyn4sqlTFq7NzyaTNja7TCJgB2hLMSHAZ%2FfsScpXl5CWFsFysCRVF04XOL9Qfdj%2BEoAR5j0i%2BUo8RCbTSPPL6tDOtIn61mSa3hRKwCRk&X-Amz-Signature=ac1960b960df2e74d3b17431170749e69d3ca7c4010fda43f7374fdabf0b7fca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIQTJ47%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCon526UnfikxXQTBfU%2F4045pQ77GXBApBTogEQR%2Ba0bgIgfu%2FBTdjSKmA%2FKiJGp2w8%2FC2MSLOzoWspsJEU7mHlKFYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLhFhRzTTOryzvtJ9ircAz9DnJOqDC6V0w7IwB%2FmFsf6zmY4LZxPdIHePX0g5CSAIz9wK%2Bt7d9h%2B2eIVG%2BmDccbyhdTN%2BG8n79VOBifJt1k%2FUxiaEj9KBmBGMEK0%2FM7PZzXpm1WXKNlMDrMc4bbLx2K7l%2FDajv9ccSnqw5VplgUdVpHXNpZ0LB4EzmLz8%2F3ZM%2Bxd4pEitQGpsvPM%2FjJ0w96LXc%2F2WMCu%2B27vzkFBdP205vDgR%2BPwsEzc3Bl1%2Bv1i9bMo256WveXilrGTzToo5dhxEEz5u%2BveaUJbFR10PXz0Q25JTlDJkbiK8FHRVDdfmnzcf9PoNQEEGGIIaIaUwNwVFSvewsR6GKUaWC7NbFv00YCFZZCTpSlTXuI4o9AKC0KKFAEnYgyBXan7Kl4TT%2FgASVjNc9CunbrnRMFCNSOjULYnk0Z18UkKw6hiBRYFszz4v3l%2FKlnjnf9bSDihujAGsPfHSJUbtg1PhZobPHHuO46NbqXUu3RT4vBq7ZG7Ti9PKTdB3YyZeMXuP7bKXbHnpZ4xJpFgiWVHfyvrfDF6kBy%2FOFQP1CXxN%2Bl4jlwQthPLfdd6%2F%2FdVd2Gaonxq8GdbvNtiWmOLhX5rVDAqInmWloyqC%2BNRRhvIHLqeOxdL7fRRQhGKJ6rWX1ElMLGVqMAGOqUBRgjSxdTus226kdya%2FVYgPMK488ruOpRAxOLG2kMWnf%2F4PyJ%2FiShYz%2Bb%2F0BIJWuBdPUyGUezKVlqxAxRARCZZMb%2B%2F3ZSXPlQVaWyMqc27DDM8KAs4ARueoyn4sqlTFq7NzyaTNja7TCJgB2hLMSHAZ%2FfsScpXl5CWFsFysCRVF04XOL9Qfdj%2BEoAR5j0i%2BUo8RCbTSPPL6tDOtIn61mSa3hRKwCRk&X-Amz-Signature=f2d52d86d65432eb63b8166bc2a4958a4a61ac8c9f6fca0567073043ef7eab9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIQTJ47%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCon526UnfikxXQTBfU%2F4045pQ77GXBApBTogEQR%2Ba0bgIgfu%2FBTdjSKmA%2FKiJGp2w8%2FC2MSLOzoWspsJEU7mHlKFYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLhFhRzTTOryzvtJ9ircAz9DnJOqDC6V0w7IwB%2FmFsf6zmY4LZxPdIHePX0g5CSAIz9wK%2Bt7d9h%2B2eIVG%2BmDccbyhdTN%2BG8n79VOBifJt1k%2FUxiaEj9KBmBGMEK0%2FM7PZzXpm1WXKNlMDrMc4bbLx2K7l%2FDajv9ccSnqw5VplgUdVpHXNpZ0LB4EzmLz8%2F3ZM%2Bxd4pEitQGpsvPM%2FjJ0w96LXc%2F2WMCu%2B27vzkFBdP205vDgR%2BPwsEzc3Bl1%2Bv1i9bMo256WveXilrGTzToo5dhxEEz5u%2BveaUJbFR10PXz0Q25JTlDJkbiK8FHRVDdfmnzcf9PoNQEEGGIIaIaUwNwVFSvewsR6GKUaWC7NbFv00YCFZZCTpSlTXuI4o9AKC0KKFAEnYgyBXan7Kl4TT%2FgASVjNc9CunbrnRMFCNSOjULYnk0Z18UkKw6hiBRYFszz4v3l%2FKlnjnf9bSDihujAGsPfHSJUbtg1PhZobPHHuO46NbqXUu3RT4vBq7ZG7Ti9PKTdB3YyZeMXuP7bKXbHnpZ4xJpFgiWVHfyvrfDF6kBy%2FOFQP1CXxN%2Bl4jlwQthPLfdd6%2F%2FdVd2Gaonxq8GdbvNtiWmOLhX5rVDAqInmWloyqC%2BNRRhvIHLqeOxdL7fRRQhGKJ6rWX1ElMLGVqMAGOqUBRgjSxdTus226kdya%2FVYgPMK488ruOpRAxOLG2kMWnf%2F4PyJ%2FiShYz%2Bb%2F0BIJWuBdPUyGUezKVlqxAxRARCZZMb%2B%2F3ZSXPlQVaWyMqc27DDM8KAs4ARueoyn4sqlTFq7NzyaTNja7TCJgB2hLMSHAZ%2FfsScpXl5CWFsFysCRVF04XOL9Qfdj%2BEoAR5j0i%2BUo8RCbTSPPL6tDOtIn61mSa3hRKwCRk&X-Amz-Signature=2d98ba4c7abb3d717f4154a7715b64be31ee2161b28de5700f23b556dbf60524&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIQTJ47%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCon526UnfikxXQTBfU%2F4045pQ77GXBApBTogEQR%2Ba0bgIgfu%2FBTdjSKmA%2FKiJGp2w8%2FC2MSLOzoWspsJEU7mHlKFYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLhFhRzTTOryzvtJ9ircAz9DnJOqDC6V0w7IwB%2FmFsf6zmY4LZxPdIHePX0g5CSAIz9wK%2Bt7d9h%2B2eIVG%2BmDccbyhdTN%2BG8n79VOBifJt1k%2FUxiaEj9KBmBGMEK0%2FM7PZzXpm1WXKNlMDrMc4bbLx2K7l%2FDajv9ccSnqw5VplgUdVpHXNpZ0LB4EzmLz8%2F3ZM%2Bxd4pEitQGpsvPM%2FjJ0w96LXc%2F2WMCu%2B27vzkFBdP205vDgR%2BPwsEzc3Bl1%2Bv1i9bMo256WveXilrGTzToo5dhxEEz5u%2BveaUJbFR10PXz0Q25JTlDJkbiK8FHRVDdfmnzcf9PoNQEEGGIIaIaUwNwVFSvewsR6GKUaWC7NbFv00YCFZZCTpSlTXuI4o9AKC0KKFAEnYgyBXan7Kl4TT%2FgASVjNc9CunbrnRMFCNSOjULYnk0Z18UkKw6hiBRYFszz4v3l%2FKlnjnf9bSDihujAGsPfHSJUbtg1PhZobPHHuO46NbqXUu3RT4vBq7ZG7Ti9PKTdB3YyZeMXuP7bKXbHnpZ4xJpFgiWVHfyvrfDF6kBy%2FOFQP1CXxN%2Bl4jlwQthPLfdd6%2F%2FdVd2Gaonxq8GdbvNtiWmOLhX5rVDAqInmWloyqC%2BNRRhvIHLqeOxdL7fRRQhGKJ6rWX1ElMLGVqMAGOqUBRgjSxdTus226kdya%2FVYgPMK488ruOpRAxOLG2kMWnf%2F4PyJ%2FiShYz%2Bb%2F0BIJWuBdPUyGUezKVlqxAxRARCZZMb%2B%2F3ZSXPlQVaWyMqc27DDM8KAs4ARueoyn4sqlTFq7NzyaTNja7TCJgB2hLMSHAZ%2FfsScpXl5CWFsFysCRVF04XOL9Qfdj%2BEoAR5j0i%2BUo8RCbTSPPL6tDOtIn61mSa3hRKwCRk&X-Amz-Signature=8c37cb4c0bb3d57c198cbbc2e949f049526968df63904c674463ad9126dd3333&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
