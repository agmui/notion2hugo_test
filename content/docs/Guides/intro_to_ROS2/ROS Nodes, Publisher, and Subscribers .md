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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMUOJ2S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnnGPNDrHtkhUXSkB8eKqegyg1wLwjErV7UhrqqpbbwIgKgWq%2FbrmjczyJHUUARlfhA8hBkrqvVKleBSYbimg1mEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOkI633AC9rQ2HyfeSrcA%2BZ5sd%2BAjDmnNFryS5BtxnbwQ2okPvax0485pdx4chZ%2FYkOaVL5DAiGEPbz2XmHxqbaIVH4EG88DmfF4KJJHJ4%2BegPKCUAwyQLDh7lmiFqWI9Pgttd4dOrb2k4jR3%2FK2BcAJZddmXIlVKNRqQ%2FFmpXR9Mo7UNAVAqpOkCMFIfvfmv7uH3FGuWCCrWVFCFdZW8Du%2B%2BKj9saEgzl9Nn07d4wIMEVQ5DjwgjZUpb4ViVjrJnb9ZRA%2Fg7x0oatzVyIrATrCxTcMfHdp7Gr7lmEHiuSHGxKYPWjlTQKSrOexgW05yAJB0zsFHkTioT5EFEnDX3TDnvjuH%2BtYQWKA%2FsnHG%2BiFuu%2By91AOrgo8EO6nvFpAI4ABz4AB8GQ9RG9ZwMV5stnV4oLcc2SzMW6bAzNcL7%2FY0zJDQG7IOiuUPqXA9f3AX7eTJdmKdrFZaVDQwDK8EJ6LkBUBZl0oBEareQFPoA9tfD3oiYF9w4LEiWxSmeRmUiWGB4SFjI4M5glyhtY9XCHSt0ds2DWx4l%2Fg3x1iR2ZpbVX83jmVZysp7P30X6BEd5MAndQsHDt1dw1oIVXISDmfaHx2tYU%2BD35g2PAxiEnvk2YmD6ZFnYLtNzNPSZka2ZgslqK%2FjY9MtHXgTML%2BCo74GOqUBG2nJNwpM8oA8WsqSjvMNj%2BgjFpsIxoAdSZQtPRUVoBsoLxRVIe%2F20y5nBPS98GObnITKYcLOkCCS6eFgJViuntm3Pbek%2FRN1MGa6xRE877%2Fb4rJ5kj9aQKGPAF7BtluHMdIPRIRCa9qFvVFH9lFQkK3PjqCnI7gZ0XqkH%2BGXCEe%2BDrwycyfHwx720WjoqQBCfgsEvkqfCJiw7bkwLCOGpNkWde8n&X-Amz-Signature=191ab0ebfc5eebc530a15b893650085a0d6c878e5eadb5437a2c6a137c187f21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMUOJ2S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnnGPNDrHtkhUXSkB8eKqegyg1wLwjErV7UhrqqpbbwIgKgWq%2FbrmjczyJHUUARlfhA8hBkrqvVKleBSYbimg1mEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOkI633AC9rQ2HyfeSrcA%2BZ5sd%2BAjDmnNFryS5BtxnbwQ2okPvax0485pdx4chZ%2FYkOaVL5DAiGEPbz2XmHxqbaIVH4EG88DmfF4KJJHJ4%2BegPKCUAwyQLDh7lmiFqWI9Pgttd4dOrb2k4jR3%2FK2BcAJZddmXIlVKNRqQ%2FFmpXR9Mo7UNAVAqpOkCMFIfvfmv7uH3FGuWCCrWVFCFdZW8Du%2B%2BKj9saEgzl9Nn07d4wIMEVQ5DjwgjZUpb4ViVjrJnb9ZRA%2Fg7x0oatzVyIrATrCxTcMfHdp7Gr7lmEHiuSHGxKYPWjlTQKSrOexgW05yAJB0zsFHkTioT5EFEnDX3TDnvjuH%2BtYQWKA%2FsnHG%2BiFuu%2By91AOrgo8EO6nvFpAI4ABz4AB8GQ9RG9ZwMV5stnV4oLcc2SzMW6bAzNcL7%2FY0zJDQG7IOiuUPqXA9f3AX7eTJdmKdrFZaVDQwDK8EJ6LkBUBZl0oBEareQFPoA9tfD3oiYF9w4LEiWxSmeRmUiWGB4SFjI4M5glyhtY9XCHSt0ds2DWx4l%2Fg3x1iR2ZpbVX83jmVZysp7P30X6BEd5MAndQsHDt1dw1oIVXISDmfaHx2tYU%2BD35g2PAxiEnvk2YmD6ZFnYLtNzNPSZka2ZgslqK%2FjY9MtHXgTML%2BCo74GOqUBG2nJNwpM8oA8WsqSjvMNj%2BgjFpsIxoAdSZQtPRUVoBsoLxRVIe%2F20y5nBPS98GObnITKYcLOkCCS6eFgJViuntm3Pbek%2FRN1MGa6xRE877%2Fb4rJ5kj9aQKGPAF7BtluHMdIPRIRCa9qFvVFH9lFQkK3PjqCnI7gZ0XqkH%2BGXCEe%2BDrwycyfHwx720WjoqQBCfgsEvkqfCJiw7bkwLCOGpNkWde8n&X-Amz-Signature=38201389a12206f1a4b9b80b733b06466a624a8de1c733c9432efe705a1e2969&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMUOJ2S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnnGPNDrHtkhUXSkB8eKqegyg1wLwjErV7UhrqqpbbwIgKgWq%2FbrmjczyJHUUARlfhA8hBkrqvVKleBSYbimg1mEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOkI633AC9rQ2HyfeSrcA%2BZ5sd%2BAjDmnNFryS5BtxnbwQ2okPvax0485pdx4chZ%2FYkOaVL5DAiGEPbz2XmHxqbaIVH4EG88DmfF4KJJHJ4%2BegPKCUAwyQLDh7lmiFqWI9Pgttd4dOrb2k4jR3%2FK2BcAJZddmXIlVKNRqQ%2FFmpXR9Mo7UNAVAqpOkCMFIfvfmv7uH3FGuWCCrWVFCFdZW8Du%2B%2BKj9saEgzl9Nn07d4wIMEVQ5DjwgjZUpb4ViVjrJnb9ZRA%2Fg7x0oatzVyIrATrCxTcMfHdp7Gr7lmEHiuSHGxKYPWjlTQKSrOexgW05yAJB0zsFHkTioT5EFEnDX3TDnvjuH%2BtYQWKA%2FsnHG%2BiFuu%2By91AOrgo8EO6nvFpAI4ABz4AB8GQ9RG9ZwMV5stnV4oLcc2SzMW6bAzNcL7%2FY0zJDQG7IOiuUPqXA9f3AX7eTJdmKdrFZaVDQwDK8EJ6LkBUBZl0oBEareQFPoA9tfD3oiYF9w4LEiWxSmeRmUiWGB4SFjI4M5glyhtY9XCHSt0ds2DWx4l%2Fg3x1iR2ZpbVX83jmVZysp7P30X6BEd5MAndQsHDt1dw1oIVXISDmfaHx2tYU%2BD35g2PAxiEnvk2YmD6ZFnYLtNzNPSZka2ZgslqK%2FjY9MtHXgTML%2BCo74GOqUBG2nJNwpM8oA8WsqSjvMNj%2BgjFpsIxoAdSZQtPRUVoBsoLxRVIe%2F20y5nBPS98GObnITKYcLOkCCS6eFgJViuntm3Pbek%2FRN1MGa6xRE877%2Fb4rJ5kj9aQKGPAF7BtluHMdIPRIRCa9qFvVFH9lFQkK3PjqCnI7gZ0XqkH%2BGXCEe%2BDrwycyfHwx720WjoqQBCfgsEvkqfCJiw7bkwLCOGpNkWde8n&X-Amz-Signature=be0c6142a06a878c5682b3198d48438f85760ed046daa5497c6c3afb72436b59&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMUOJ2S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnnGPNDrHtkhUXSkB8eKqegyg1wLwjErV7UhrqqpbbwIgKgWq%2FbrmjczyJHUUARlfhA8hBkrqvVKleBSYbimg1mEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOkI633AC9rQ2HyfeSrcA%2BZ5sd%2BAjDmnNFryS5BtxnbwQ2okPvax0485pdx4chZ%2FYkOaVL5DAiGEPbz2XmHxqbaIVH4EG88DmfF4KJJHJ4%2BegPKCUAwyQLDh7lmiFqWI9Pgttd4dOrb2k4jR3%2FK2BcAJZddmXIlVKNRqQ%2FFmpXR9Mo7UNAVAqpOkCMFIfvfmv7uH3FGuWCCrWVFCFdZW8Du%2B%2BKj9saEgzl9Nn07d4wIMEVQ5DjwgjZUpb4ViVjrJnb9ZRA%2Fg7x0oatzVyIrATrCxTcMfHdp7Gr7lmEHiuSHGxKYPWjlTQKSrOexgW05yAJB0zsFHkTioT5EFEnDX3TDnvjuH%2BtYQWKA%2FsnHG%2BiFuu%2By91AOrgo8EO6nvFpAI4ABz4AB8GQ9RG9ZwMV5stnV4oLcc2SzMW6bAzNcL7%2FY0zJDQG7IOiuUPqXA9f3AX7eTJdmKdrFZaVDQwDK8EJ6LkBUBZl0oBEareQFPoA9tfD3oiYF9w4LEiWxSmeRmUiWGB4SFjI4M5glyhtY9XCHSt0ds2DWx4l%2Fg3x1iR2ZpbVX83jmVZysp7P30X6BEd5MAndQsHDt1dw1oIVXISDmfaHx2tYU%2BD35g2PAxiEnvk2YmD6ZFnYLtNzNPSZka2ZgslqK%2FjY9MtHXgTML%2BCo74GOqUBG2nJNwpM8oA8WsqSjvMNj%2BgjFpsIxoAdSZQtPRUVoBsoLxRVIe%2F20y5nBPS98GObnITKYcLOkCCS6eFgJViuntm3Pbek%2FRN1MGa6xRE877%2Fb4rJ5kj9aQKGPAF7BtluHMdIPRIRCa9qFvVFH9lFQkK3PjqCnI7gZ0XqkH%2BGXCEe%2BDrwycyfHwx720WjoqQBCfgsEvkqfCJiw7bkwLCOGpNkWde8n&X-Amz-Signature=7f455cef9f6f2358d81c096e944a73ceb444f091cba84bf19cb345625a8e8fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMUOJ2S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnnGPNDrHtkhUXSkB8eKqegyg1wLwjErV7UhrqqpbbwIgKgWq%2FbrmjczyJHUUARlfhA8hBkrqvVKleBSYbimg1mEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOkI633AC9rQ2HyfeSrcA%2BZ5sd%2BAjDmnNFryS5BtxnbwQ2okPvax0485pdx4chZ%2FYkOaVL5DAiGEPbz2XmHxqbaIVH4EG88DmfF4KJJHJ4%2BegPKCUAwyQLDh7lmiFqWI9Pgttd4dOrb2k4jR3%2FK2BcAJZddmXIlVKNRqQ%2FFmpXR9Mo7UNAVAqpOkCMFIfvfmv7uH3FGuWCCrWVFCFdZW8Du%2B%2BKj9saEgzl9Nn07d4wIMEVQ5DjwgjZUpb4ViVjrJnb9ZRA%2Fg7x0oatzVyIrATrCxTcMfHdp7Gr7lmEHiuSHGxKYPWjlTQKSrOexgW05yAJB0zsFHkTioT5EFEnDX3TDnvjuH%2BtYQWKA%2FsnHG%2BiFuu%2By91AOrgo8EO6nvFpAI4ABz4AB8GQ9RG9ZwMV5stnV4oLcc2SzMW6bAzNcL7%2FY0zJDQG7IOiuUPqXA9f3AX7eTJdmKdrFZaVDQwDK8EJ6LkBUBZl0oBEareQFPoA9tfD3oiYF9w4LEiWxSmeRmUiWGB4SFjI4M5glyhtY9XCHSt0ds2DWx4l%2Fg3x1iR2ZpbVX83jmVZysp7P30X6BEd5MAndQsHDt1dw1oIVXISDmfaHx2tYU%2BD35g2PAxiEnvk2YmD6ZFnYLtNzNPSZka2ZgslqK%2FjY9MtHXgTML%2BCo74GOqUBG2nJNwpM8oA8WsqSjvMNj%2BgjFpsIxoAdSZQtPRUVoBsoLxRVIe%2F20y5nBPS98GObnITKYcLOkCCS6eFgJViuntm3Pbek%2FRN1MGa6xRE877%2Fb4rJ5kj9aQKGPAF7BtluHMdIPRIRCa9qFvVFH9lFQkK3PjqCnI7gZ0XqkH%2BGXCEe%2BDrwycyfHwx720WjoqQBCfgsEvkqfCJiw7bkwLCOGpNkWde8n&X-Amz-Signature=23b1ac0ab6b8f92eb2416b65ff6346687c533d13ebb05bf6f9e105105442dd41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMUOJ2S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnnGPNDrHtkhUXSkB8eKqegyg1wLwjErV7UhrqqpbbwIgKgWq%2FbrmjczyJHUUARlfhA8hBkrqvVKleBSYbimg1mEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOkI633AC9rQ2HyfeSrcA%2BZ5sd%2BAjDmnNFryS5BtxnbwQ2okPvax0485pdx4chZ%2FYkOaVL5DAiGEPbz2XmHxqbaIVH4EG88DmfF4KJJHJ4%2BegPKCUAwyQLDh7lmiFqWI9Pgttd4dOrb2k4jR3%2FK2BcAJZddmXIlVKNRqQ%2FFmpXR9Mo7UNAVAqpOkCMFIfvfmv7uH3FGuWCCrWVFCFdZW8Du%2B%2BKj9saEgzl9Nn07d4wIMEVQ5DjwgjZUpb4ViVjrJnb9ZRA%2Fg7x0oatzVyIrATrCxTcMfHdp7Gr7lmEHiuSHGxKYPWjlTQKSrOexgW05yAJB0zsFHkTioT5EFEnDX3TDnvjuH%2BtYQWKA%2FsnHG%2BiFuu%2By91AOrgo8EO6nvFpAI4ABz4AB8GQ9RG9ZwMV5stnV4oLcc2SzMW6bAzNcL7%2FY0zJDQG7IOiuUPqXA9f3AX7eTJdmKdrFZaVDQwDK8EJ6LkBUBZl0oBEareQFPoA9tfD3oiYF9w4LEiWxSmeRmUiWGB4SFjI4M5glyhtY9XCHSt0ds2DWx4l%2Fg3x1iR2ZpbVX83jmVZysp7P30X6BEd5MAndQsHDt1dw1oIVXISDmfaHx2tYU%2BD35g2PAxiEnvk2YmD6ZFnYLtNzNPSZka2ZgslqK%2FjY9MtHXgTML%2BCo74GOqUBG2nJNwpM8oA8WsqSjvMNj%2BgjFpsIxoAdSZQtPRUVoBsoLxRVIe%2F20y5nBPS98GObnITKYcLOkCCS6eFgJViuntm3Pbek%2FRN1MGa6xRE877%2Fb4rJ5kj9aQKGPAF7BtluHMdIPRIRCa9qFvVFH9lFQkK3PjqCnI7gZ0XqkH%2BGXCEe%2BDrwycyfHwx720WjoqQBCfgsEvkqfCJiw7bkwLCOGpNkWde8n&X-Amz-Signature=f2aa899884714e1c901ee2e5a8c760b340354a49d1653e4666cd804ca143183e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMUOJ2S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnnGPNDrHtkhUXSkB8eKqegyg1wLwjErV7UhrqqpbbwIgKgWq%2FbrmjczyJHUUARlfhA8hBkrqvVKleBSYbimg1mEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOkI633AC9rQ2HyfeSrcA%2BZ5sd%2BAjDmnNFryS5BtxnbwQ2okPvax0485pdx4chZ%2FYkOaVL5DAiGEPbz2XmHxqbaIVH4EG88DmfF4KJJHJ4%2BegPKCUAwyQLDh7lmiFqWI9Pgttd4dOrb2k4jR3%2FK2BcAJZddmXIlVKNRqQ%2FFmpXR9Mo7UNAVAqpOkCMFIfvfmv7uH3FGuWCCrWVFCFdZW8Du%2B%2BKj9saEgzl9Nn07d4wIMEVQ5DjwgjZUpb4ViVjrJnb9ZRA%2Fg7x0oatzVyIrATrCxTcMfHdp7Gr7lmEHiuSHGxKYPWjlTQKSrOexgW05yAJB0zsFHkTioT5EFEnDX3TDnvjuH%2BtYQWKA%2FsnHG%2BiFuu%2By91AOrgo8EO6nvFpAI4ABz4AB8GQ9RG9ZwMV5stnV4oLcc2SzMW6bAzNcL7%2FY0zJDQG7IOiuUPqXA9f3AX7eTJdmKdrFZaVDQwDK8EJ6LkBUBZl0oBEareQFPoA9tfD3oiYF9w4LEiWxSmeRmUiWGB4SFjI4M5glyhtY9XCHSt0ds2DWx4l%2Fg3x1iR2ZpbVX83jmVZysp7P30X6BEd5MAndQsHDt1dw1oIVXISDmfaHx2tYU%2BD35g2PAxiEnvk2YmD6ZFnYLtNzNPSZka2ZgslqK%2FjY9MtHXgTML%2BCo74GOqUBG2nJNwpM8oA8WsqSjvMNj%2BgjFpsIxoAdSZQtPRUVoBsoLxRVIe%2F20y5nBPS98GObnITKYcLOkCCS6eFgJViuntm3Pbek%2FRN1MGa6xRE877%2Fb4rJ5kj9aQKGPAF7BtluHMdIPRIRCa9qFvVFH9lFQkK3PjqCnI7gZ0XqkH%2BGXCEe%2BDrwycyfHwx720WjoqQBCfgsEvkqfCJiw7bkwLCOGpNkWde8n&X-Amz-Signature=57de9112b69516f1ce85d649e72b60b49100ed151af4a40466952fcd9d150777&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMUOJ2S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnnGPNDrHtkhUXSkB8eKqegyg1wLwjErV7UhrqqpbbwIgKgWq%2FbrmjczyJHUUARlfhA8hBkrqvVKleBSYbimg1mEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOkI633AC9rQ2HyfeSrcA%2BZ5sd%2BAjDmnNFryS5BtxnbwQ2okPvax0485pdx4chZ%2FYkOaVL5DAiGEPbz2XmHxqbaIVH4EG88DmfF4KJJHJ4%2BegPKCUAwyQLDh7lmiFqWI9Pgttd4dOrb2k4jR3%2FK2BcAJZddmXIlVKNRqQ%2FFmpXR9Mo7UNAVAqpOkCMFIfvfmv7uH3FGuWCCrWVFCFdZW8Du%2B%2BKj9saEgzl9Nn07d4wIMEVQ5DjwgjZUpb4ViVjrJnb9ZRA%2Fg7x0oatzVyIrATrCxTcMfHdp7Gr7lmEHiuSHGxKYPWjlTQKSrOexgW05yAJB0zsFHkTioT5EFEnDX3TDnvjuH%2BtYQWKA%2FsnHG%2BiFuu%2By91AOrgo8EO6nvFpAI4ABz4AB8GQ9RG9ZwMV5stnV4oLcc2SzMW6bAzNcL7%2FY0zJDQG7IOiuUPqXA9f3AX7eTJdmKdrFZaVDQwDK8EJ6LkBUBZl0oBEareQFPoA9tfD3oiYF9w4LEiWxSmeRmUiWGB4SFjI4M5glyhtY9XCHSt0ds2DWx4l%2Fg3x1iR2ZpbVX83jmVZysp7P30X6BEd5MAndQsHDt1dw1oIVXISDmfaHx2tYU%2BD35g2PAxiEnvk2YmD6ZFnYLtNzNPSZka2ZgslqK%2FjY9MtHXgTML%2BCo74GOqUBG2nJNwpM8oA8WsqSjvMNj%2BgjFpsIxoAdSZQtPRUVoBsoLxRVIe%2F20y5nBPS98GObnITKYcLOkCCS6eFgJViuntm3Pbek%2FRN1MGa6xRE877%2Fb4rJ5kj9aQKGPAF7BtluHMdIPRIRCa9qFvVFH9lFQkK3PjqCnI7gZ0XqkH%2BGXCEe%2BDrwycyfHwx720WjoqQBCfgsEvkqfCJiw7bkwLCOGpNkWde8n&X-Amz-Signature=40ae0069d0e0ec854e78ddf60cfb271af775518325c14168f4454b6254dda4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
