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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPPTWAU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDc7MSY%2BLjItAWGZiXbQBblngRSCvk07UkusAT%2FNrFCowIhAN4984%2FzxlCZLyTuQxz8FRDuvTUvv8ff0lkhhJv77hU%2FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2Ft3cMiVMTwGXJDgq3APLszV6YhfSkHUJ7gy6TJSVDKa9SAOAHJC9%2FTEJDd9przxjYNeWdyVGnnbV4MsxSrkTgkpS4NW35iJTzkpxcw%2FjOiBK9d1GTPikHdTNXBSQ0ZfrSm3FQOYs%2F2lW7LcTtLuLiwQx3H%2FqioA3b%2Fpt2zIAWDWyIRd098Ke48jjtqeCIqkkShVF9b5%2B0n%2BJ9yFvogu1a%2BAEegU5DR7%2F3YCkFFiiz%2Fd2zzJjLvcLUSWerWspVdZgiyGSqUc2wHzV9GiM2gKgW25rNr9Len%2B5PQjC8G36%2Bgp%2B1bIkYMN%2BnAmN3he45LMcBv%2BL5SxdkGf6U7knkSCF1E4MSx3lbVXQvGxKV%2FiWdjvODxPqmtv4Arbgk89Ddx14qBiphwwZkkpmnBn1iUGG3tk3ce%2BTm%2BbVvHZmORBGgRL2CQ19nyf%2B5Dd0lDeLaeVVk9ilDWMUAY5sSunt9ZNVV3huhoBucAg0ncGNtUbzPnV5cAmX2zPRHORuGVgxoEo9idtM6azhkRkqSE8xI57va5qUEdKq5A%2FLgzLaEnbRC4hYNt2Twx77FBYV2sBpRcLkgHFE8oEyVCL%2F5T%2FDMDGVX2Z6Irbb9yzeScI3PRdGoZkGz4nUB6PVCVldcOGS6C%2BH2kOihKepmAmtTzD614%2B%2BBjqkAf77f9RQQThQasLBRKlSHl58l0pwvRZ0PipgAvGSry4zfYCp4stSl6bjITRJ%2BN6URdXLLAlck%2FW%2Fb9R6ubkR012whfdForwJEs9oZhLUjaQxPnP5FHWWdjT3SWKG68yjDNjRy9dhnIGfYCDysmRIbqgKwLkdNJu5hyOE3%2BJqwmDi9UU2%2FYtADT7lFbVIkPAE%2FcTRR0tPIX5xFJC%2F7G8%2BZH140Wha&X-Amz-Signature=6153fa28893f4af63250dcf9f7dd47ead6f8707e4f10c504196f8c32e7e8a4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPPTWAU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDc7MSY%2BLjItAWGZiXbQBblngRSCvk07UkusAT%2FNrFCowIhAN4984%2FzxlCZLyTuQxz8FRDuvTUvv8ff0lkhhJv77hU%2FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2Ft3cMiVMTwGXJDgq3APLszV6YhfSkHUJ7gy6TJSVDKa9SAOAHJC9%2FTEJDd9przxjYNeWdyVGnnbV4MsxSrkTgkpS4NW35iJTzkpxcw%2FjOiBK9d1GTPikHdTNXBSQ0ZfrSm3FQOYs%2F2lW7LcTtLuLiwQx3H%2FqioA3b%2Fpt2zIAWDWyIRd098Ke48jjtqeCIqkkShVF9b5%2B0n%2BJ9yFvogu1a%2BAEegU5DR7%2F3YCkFFiiz%2Fd2zzJjLvcLUSWerWspVdZgiyGSqUc2wHzV9GiM2gKgW25rNr9Len%2B5PQjC8G36%2Bgp%2B1bIkYMN%2BnAmN3he45LMcBv%2BL5SxdkGf6U7knkSCF1E4MSx3lbVXQvGxKV%2FiWdjvODxPqmtv4Arbgk89Ddx14qBiphwwZkkpmnBn1iUGG3tk3ce%2BTm%2BbVvHZmORBGgRL2CQ19nyf%2B5Dd0lDeLaeVVk9ilDWMUAY5sSunt9ZNVV3huhoBucAg0ncGNtUbzPnV5cAmX2zPRHORuGVgxoEo9idtM6azhkRkqSE8xI57va5qUEdKq5A%2FLgzLaEnbRC4hYNt2Twx77FBYV2sBpRcLkgHFE8oEyVCL%2F5T%2FDMDGVX2Z6Irbb9yzeScI3PRdGoZkGz4nUB6PVCVldcOGS6C%2BH2kOihKepmAmtTzD614%2B%2BBjqkAf77f9RQQThQasLBRKlSHl58l0pwvRZ0PipgAvGSry4zfYCp4stSl6bjITRJ%2BN6URdXLLAlck%2FW%2Fb9R6ubkR012whfdForwJEs9oZhLUjaQxPnP5FHWWdjT3SWKG68yjDNjRy9dhnIGfYCDysmRIbqgKwLkdNJu5hyOE3%2BJqwmDi9UU2%2FYtADT7lFbVIkPAE%2FcTRR0tPIX5xFJC%2F7G8%2BZH140Wha&X-Amz-Signature=26f6f313c8b9a58281210dfd19d87eb6f91b472f330522432083eb5a3682e80c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPPTWAU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDc7MSY%2BLjItAWGZiXbQBblngRSCvk07UkusAT%2FNrFCowIhAN4984%2FzxlCZLyTuQxz8FRDuvTUvv8ff0lkhhJv77hU%2FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2Ft3cMiVMTwGXJDgq3APLszV6YhfSkHUJ7gy6TJSVDKa9SAOAHJC9%2FTEJDd9przxjYNeWdyVGnnbV4MsxSrkTgkpS4NW35iJTzkpxcw%2FjOiBK9d1GTPikHdTNXBSQ0ZfrSm3FQOYs%2F2lW7LcTtLuLiwQx3H%2FqioA3b%2Fpt2zIAWDWyIRd098Ke48jjtqeCIqkkShVF9b5%2B0n%2BJ9yFvogu1a%2BAEegU5DR7%2F3YCkFFiiz%2Fd2zzJjLvcLUSWerWspVdZgiyGSqUc2wHzV9GiM2gKgW25rNr9Len%2B5PQjC8G36%2Bgp%2B1bIkYMN%2BnAmN3he45LMcBv%2BL5SxdkGf6U7knkSCF1E4MSx3lbVXQvGxKV%2FiWdjvODxPqmtv4Arbgk89Ddx14qBiphwwZkkpmnBn1iUGG3tk3ce%2BTm%2BbVvHZmORBGgRL2CQ19nyf%2B5Dd0lDeLaeVVk9ilDWMUAY5sSunt9ZNVV3huhoBucAg0ncGNtUbzPnV5cAmX2zPRHORuGVgxoEo9idtM6azhkRkqSE8xI57va5qUEdKq5A%2FLgzLaEnbRC4hYNt2Twx77FBYV2sBpRcLkgHFE8oEyVCL%2F5T%2FDMDGVX2Z6Irbb9yzeScI3PRdGoZkGz4nUB6PVCVldcOGS6C%2BH2kOihKepmAmtTzD614%2B%2BBjqkAf77f9RQQThQasLBRKlSHl58l0pwvRZ0PipgAvGSry4zfYCp4stSl6bjITRJ%2BN6URdXLLAlck%2FW%2Fb9R6ubkR012whfdForwJEs9oZhLUjaQxPnP5FHWWdjT3SWKG68yjDNjRy9dhnIGfYCDysmRIbqgKwLkdNJu5hyOE3%2BJqwmDi9UU2%2FYtADT7lFbVIkPAE%2FcTRR0tPIX5xFJC%2F7G8%2BZH140Wha&X-Amz-Signature=7a10ba6b98449c27e16d1c882fe8804f1c7fe74cf6e458262e7bec7955ff699a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPPTWAU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDc7MSY%2BLjItAWGZiXbQBblngRSCvk07UkusAT%2FNrFCowIhAN4984%2FzxlCZLyTuQxz8FRDuvTUvv8ff0lkhhJv77hU%2FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2Ft3cMiVMTwGXJDgq3APLszV6YhfSkHUJ7gy6TJSVDKa9SAOAHJC9%2FTEJDd9przxjYNeWdyVGnnbV4MsxSrkTgkpS4NW35iJTzkpxcw%2FjOiBK9d1GTPikHdTNXBSQ0ZfrSm3FQOYs%2F2lW7LcTtLuLiwQx3H%2FqioA3b%2Fpt2zIAWDWyIRd098Ke48jjtqeCIqkkShVF9b5%2B0n%2BJ9yFvogu1a%2BAEegU5DR7%2F3YCkFFiiz%2Fd2zzJjLvcLUSWerWspVdZgiyGSqUc2wHzV9GiM2gKgW25rNr9Len%2B5PQjC8G36%2Bgp%2B1bIkYMN%2BnAmN3he45LMcBv%2BL5SxdkGf6U7knkSCF1E4MSx3lbVXQvGxKV%2FiWdjvODxPqmtv4Arbgk89Ddx14qBiphwwZkkpmnBn1iUGG3tk3ce%2BTm%2BbVvHZmORBGgRL2CQ19nyf%2B5Dd0lDeLaeVVk9ilDWMUAY5sSunt9ZNVV3huhoBucAg0ncGNtUbzPnV5cAmX2zPRHORuGVgxoEo9idtM6azhkRkqSE8xI57va5qUEdKq5A%2FLgzLaEnbRC4hYNt2Twx77FBYV2sBpRcLkgHFE8oEyVCL%2F5T%2FDMDGVX2Z6Irbb9yzeScI3PRdGoZkGz4nUB6PVCVldcOGS6C%2BH2kOihKepmAmtTzD614%2B%2BBjqkAf77f9RQQThQasLBRKlSHl58l0pwvRZ0PipgAvGSry4zfYCp4stSl6bjITRJ%2BN6URdXLLAlck%2FW%2Fb9R6ubkR012whfdForwJEs9oZhLUjaQxPnP5FHWWdjT3SWKG68yjDNjRy9dhnIGfYCDysmRIbqgKwLkdNJu5hyOE3%2BJqwmDi9UU2%2FYtADT7lFbVIkPAE%2FcTRR0tPIX5xFJC%2F7G8%2BZH140Wha&X-Amz-Signature=352604fa02b63ab34fd151c098c252027ee6ed05c092ca2b590dea1a0816e275&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPPTWAU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDc7MSY%2BLjItAWGZiXbQBblngRSCvk07UkusAT%2FNrFCowIhAN4984%2FzxlCZLyTuQxz8FRDuvTUvv8ff0lkhhJv77hU%2FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2Ft3cMiVMTwGXJDgq3APLszV6YhfSkHUJ7gy6TJSVDKa9SAOAHJC9%2FTEJDd9przxjYNeWdyVGnnbV4MsxSrkTgkpS4NW35iJTzkpxcw%2FjOiBK9d1GTPikHdTNXBSQ0ZfrSm3FQOYs%2F2lW7LcTtLuLiwQx3H%2FqioA3b%2Fpt2zIAWDWyIRd098Ke48jjtqeCIqkkShVF9b5%2B0n%2BJ9yFvogu1a%2BAEegU5DR7%2F3YCkFFiiz%2Fd2zzJjLvcLUSWerWspVdZgiyGSqUc2wHzV9GiM2gKgW25rNr9Len%2B5PQjC8G36%2Bgp%2B1bIkYMN%2BnAmN3he45LMcBv%2BL5SxdkGf6U7knkSCF1E4MSx3lbVXQvGxKV%2FiWdjvODxPqmtv4Arbgk89Ddx14qBiphwwZkkpmnBn1iUGG3tk3ce%2BTm%2BbVvHZmORBGgRL2CQ19nyf%2B5Dd0lDeLaeVVk9ilDWMUAY5sSunt9ZNVV3huhoBucAg0ncGNtUbzPnV5cAmX2zPRHORuGVgxoEo9idtM6azhkRkqSE8xI57va5qUEdKq5A%2FLgzLaEnbRC4hYNt2Twx77FBYV2sBpRcLkgHFE8oEyVCL%2F5T%2FDMDGVX2Z6Irbb9yzeScI3PRdGoZkGz4nUB6PVCVldcOGS6C%2BH2kOihKepmAmtTzD614%2B%2BBjqkAf77f9RQQThQasLBRKlSHl58l0pwvRZ0PipgAvGSry4zfYCp4stSl6bjITRJ%2BN6URdXLLAlck%2FW%2Fb9R6ubkR012whfdForwJEs9oZhLUjaQxPnP5FHWWdjT3SWKG68yjDNjRy9dhnIGfYCDysmRIbqgKwLkdNJu5hyOE3%2BJqwmDi9UU2%2FYtADT7lFbVIkPAE%2FcTRR0tPIX5xFJC%2F7G8%2BZH140Wha&X-Amz-Signature=fddb92ab60f7aa0a70127e1e1bb12fbd3a3a74085548d1e7b2978ddde873865d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPPTWAU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDc7MSY%2BLjItAWGZiXbQBblngRSCvk07UkusAT%2FNrFCowIhAN4984%2FzxlCZLyTuQxz8FRDuvTUvv8ff0lkhhJv77hU%2FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2Ft3cMiVMTwGXJDgq3APLszV6YhfSkHUJ7gy6TJSVDKa9SAOAHJC9%2FTEJDd9przxjYNeWdyVGnnbV4MsxSrkTgkpS4NW35iJTzkpxcw%2FjOiBK9d1GTPikHdTNXBSQ0ZfrSm3FQOYs%2F2lW7LcTtLuLiwQx3H%2FqioA3b%2Fpt2zIAWDWyIRd098Ke48jjtqeCIqkkShVF9b5%2B0n%2BJ9yFvogu1a%2BAEegU5DR7%2F3YCkFFiiz%2Fd2zzJjLvcLUSWerWspVdZgiyGSqUc2wHzV9GiM2gKgW25rNr9Len%2B5PQjC8G36%2Bgp%2B1bIkYMN%2BnAmN3he45LMcBv%2BL5SxdkGf6U7knkSCF1E4MSx3lbVXQvGxKV%2FiWdjvODxPqmtv4Arbgk89Ddx14qBiphwwZkkpmnBn1iUGG3tk3ce%2BTm%2BbVvHZmORBGgRL2CQ19nyf%2B5Dd0lDeLaeVVk9ilDWMUAY5sSunt9ZNVV3huhoBucAg0ncGNtUbzPnV5cAmX2zPRHORuGVgxoEo9idtM6azhkRkqSE8xI57va5qUEdKq5A%2FLgzLaEnbRC4hYNt2Twx77FBYV2sBpRcLkgHFE8oEyVCL%2F5T%2FDMDGVX2Z6Irbb9yzeScI3PRdGoZkGz4nUB6PVCVldcOGS6C%2BH2kOihKepmAmtTzD614%2B%2BBjqkAf77f9RQQThQasLBRKlSHl58l0pwvRZ0PipgAvGSry4zfYCp4stSl6bjITRJ%2BN6URdXLLAlck%2FW%2Fb9R6ubkR012whfdForwJEs9oZhLUjaQxPnP5FHWWdjT3SWKG68yjDNjRy9dhnIGfYCDysmRIbqgKwLkdNJu5hyOE3%2BJqwmDi9UU2%2FYtADT7lFbVIkPAE%2FcTRR0tPIX5xFJC%2F7G8%2BZH140Wha&X-Amz-Signature=2da82bedf4f4299875b45cf42720989b5e0c72b51b882144566e85ee5a19ac7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPPTWAU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDc7MSY%2BLjItAWGZiXbQBblngRSCvk07UkusAT%2FNrFCowIhAN4984%2FzxlCZLyTuQxz8FRDuvTUvv8ff0lkhhJv77hU%2FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2Ft3cMiVMTwGXJDgq3APLszV6YhfSkHUJ7gy6TJSVDKa9SAOAHJC9%2FTEJDd9przxjYNeWdyVGnnbV4MsxSrkTgkpS4NW35iJTzkpxcw%2FjOiBK9d1GTPikHdTNXBSQ0ZfrSm3FQOYs%2F2lW7LcTtLuLiwQx3H%2FqioA3b%2Fpt2zIAWDWyIRd098Ke48jjtqeCIqkkShVF9b5%2B0n%2BJ9yFvogu1a%2BAEegU5DR7%2F3YCkFFiiz%2Fd2zzJjLvcLUSWerWspVdZgiyGSqUc2wHzV9GiM2gKgW25rNr9Len%2B5PQjC8G36%2Bgp%2B1bIkYMN%2BnAmN3he45LMcBv%2BL5SxdkGf6U7knkSCF1E4MSx3lbVXQvGxKV%2FiWdjvODxPqmtv4Arbgk89Ddx14qBiphwwZkkpmnBn1iUGG3tk3ce%2BTm%2BbVvHZmORBGgRL2CQ19nyf%2B5Dd0lDeLaeVVk9ilDWMUAY5sSunt9ZNVV3huhoBucAg0ncGNtUbzPnV5cAmX2zPRHORuGVgxoEo9idtM6azhkRkqSE8xI57va5qUEdKq5A%2FLgzLaEnbRC4hYNt2Twx77FBYV2sBpRcLkgHFE8oEyVCL%2F5T%2FDMDGVX2Z6Irbb9yzeScI3PRdGoZkGz4nUB6PVCVldcOGS6C%2BH2kOihKepmAmtTzD614%2B%2BBjqkAf77f9RQQThQasLBRKlSHl58l0pwvRZ0PipgAvGSry4zfYCp4stSl6bjITRJ%2BN6URdXLLAlck%2FW%2Fb9R6ubkR012whfdForwJEs9oZhLUjaQxPnP5FHWWdjT3SWKG68yjDNjRy9dhnIGfYCDysmRIbqgKwLkdNJu5hyOE3%2BJqwmDi9UU2%2FYtADT7lFbVIkPAE%2FcTRR0tPIX5xFJC%2F7G8%2BZH140Wha&X-Amz-Signature=211d5ca27c4c3d314fc9605e1cf57c91c5051429eba0b3140293f94f4053506a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYPPTWAU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDc7MSY%2BLjItAWGZiXbQBblngRSCvk07UkusAT%2FNrFCowIhAN4984%2FzxlCZLyTuQxz8FRDuvTUvv8ff0lkhhJv77hU%2FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2Ft3cMiVMTwGXJDgq3APLszV6YhfSkHUJ7gy6TJSVDKa9SAOAHJC9%2FTEJDd9przxjYNeWdyVGnnbV4MsxSrkTgkpS4NW35iJTzkpxcw%2FjOiBK9d1GTPikHdTNXBSQ0ZfrSm3FQOYs%2F2lW7LcTtLuLiwQx3H%2FqioA3b%2Fpt2zIAWDWyIRd098Ke48jjtqeCIqkkShVF9b5%2B0n%2BJ9yFvogu1a%2BAEegU5DR7%2F3YCkFFiiz%2Fd2zzJjLvcLUSWerWspVdZgiyGSqUc2wHzV9GiM2gKgW25rNr9Len%2B5PQjC8G36%2Bgp%2B1bIkYMN%2BnAmN3he45LMcBv%2BL5SxdkGf6U7knkSCF1E4MSx3lbVXQvGxKV%2FiWdjvODxPqmtv4Arbgk89Ddx14qBiphwwZkkpmnBn1iUGG3tk3ce%2BTm%2BbVvHZmORBGgRL2CQ19nyf%2B5Dd0lDeLaeVVk9ilDWMUAY5sSunt9ZNVV3huhoBucAg0ncGNtUbzPnV5cAmX2zPRHORuGVgxoEo9idtM6azhkRkqSE8xI57va5qUEdKq5A%2FLgzLaEnbRC4hYNt2Twx77FBYV2sBpRcLkgHFE8oEyVCL%2F5T%2FDMDGVX2Z6Irbb9yzeScI3PRdGoZkGz4nUB6PVCVldcOGS6C%2BH2kOihKepmAmtTzD614%2B%2BBjqkAf77f9RQQThQasLBRKlSHl58l0pwvRZ0PipgAvGSry4zfYCp4stSl6bjITRJ%2BN6URdXLLAlck%2FW%2Fb9R6ubkR012whfdForwJEs9oZhLUjaQxPnP5FHWWdjT3SWKG68yjDNjRy9dhnIGfYCDysmRIbqgKwLkdNJu5hyOE3%2BJqwmDi9UU2%2FYtADT7lFbVIkPAE%2FcTRR0tPIX5xFJC%2F7G8%2BZH140Wha&X-Amz-Signature=9482e0b1eb561f43fc62c88218b349f85e4ecb6ead2e2e660b085d0b16a9d87d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
