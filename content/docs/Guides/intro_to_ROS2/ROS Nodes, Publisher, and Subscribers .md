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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDLRKBN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHM7kBYY5KkV2C3jStrZwqef2bOSzQ5hUBxA3KDMHa2yAiEA5TNVIAmcWBZVH%2F2%2B%2Fj2s7VPGiupL%2Bh6UGIlWy77AHcwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDK%2BsZ4x5gsYE89ciwCrcA%2FgVO6dBmgMgIplGDff1hkhYGeSPgoLdXjA84f%2FYaoTgjpwGxdSNc8JruUEOGbi0LXmi9%2BTp4pA3cvJvFqpPAYR3Sy7Qqu6AN3Eckb0PcvOh4vVDGEl5JFma67Hx2BLj5rC5AuLsG4zsSJYzFSUCTR6fcnE2q8w0Sx4pqwIJODn%2BUKa8Wao1i9Nle7K6UgFy6C35b7Ro7MJd9B%2FVJRoMle179zD9CH88h5NAyXuG489soLvqEcLCglAbLt6woCtY9gbci7SBte599kW8HZd%2FfyP19f%2Fr7ELNCoGJOPym97fmoi2RhT5gzi1T97G1wmXEIhY%2B3sI5lAufdkjov%2Bhdv9eaT4aG%2BiDK%2FtALEvZPWzRrbtCRB37krueFcKb0KE21kXiAWbbABc1da6mX5veb7pl%2BZHHlQ3VQqJ2w65bhaC36knE3%2BZEge9hgIAuzK0H5A4W8V42axseK6lox07WYiw5nL3VdiCB4tmaF1bheo5RNg955DoNiE1HRK4b34t6UBVIE%2F6VquDbngmFAQ4KcOwKRVFDJsF50Qo25HXhkqkY81fXiSOnkLy1t1yiFbw14OQfxti4G%2BAwitpycpwiiPrxBunmJXjEiV3TMktn9GFNvwmSGgP%2F95%2FY%2BZnqMMMaKtL4GOqUBgjgg0nz3t2vU1xT26HlLZneRYg1Mqux6%2BN9dtiGQAZnZO7xUbGaSSRGrQYx7k6HU%2Fwvi87DDni2Su05eyosX87%2FvaJaPxZ1yvKS7TgJcnxbPjM7l3kuvWz5%2Bj4eQAqvtmqvJyA5apnz07vMAY40DUG7mjvEdKlBatTmoswJR8v8WemJQSHndwC78w1F%2BQozyUqCpqTuWj4dr%2FcsRdZwMYN9O1FGq&X-Amz-Signature=29edd334f1a0b9f135980f1dccbda6179b69cff4b7ee8721df8a3804fd56d7fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDLRKBN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHM7kBYY5KkV2C3jStrZwqef2bOSzQ5hUBxA3KDMHa2yAiEA5TNVIAmcWBZVH%2F2%2B%2Fj2s7VPGiupL%2Bh6UGIlWy77AHcwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDK%2BsZ4x5gsYE89ciwCrcA%2FgVO6dBmgMgIplGDff1hkhYGeSPgoLdXjA84f%2FYaoTgjpwGxdSNc8JruUEOGbi0LXmi9%2BTp4pA3cvJvFqpPAYR3Sy7Qqu6AN3Eckb0PcvOh4vVDGEl5JFma67Hx2BLj5rC5AuLsG4zsSJYzFSUCTR6fcnE2q8w0Sx4pqwIJODn%2BUKa8Wao1i9Nle7K6UgFy6C35b7Ro7MJd9B%2FVJRoMle179zD9CH88h5NAyXuG489soLvqEcLCglAbLt6woCtY9gbci7SBte599kW8HZd%2FfyP19f%2Fr7ELNCoGJOPym97fmoi2RhT5gzi1T97G1wmXEIhY%2B3sI5lAufdkjov%2Bhdv9eaT4aG%2BiDK%2FtALEvZPWzRrbtCRB37krueFcKb0KE21kXiAWbbABc1da6mX5veb7pl%2BZHHlQ3VQqJ2w65bhaC36knE3%2BZEge9hgIAuzK0H5A4W8V42axseK6lox07WYiw5nL3VdiCB4tmaF1bheo5RNg955DoNiE1HRK4b34t6UBVIE%2F6VquDbngmFAQ4KcOwKRVFDJsF50Qo25HXhkqkY81fXiSOnkLy1t1yiFbw14OQfxti4G%2BAwitpycpwiiPrxBunmJXjEiV3TMktn9GFNvwmSGgP%2F95%2FY%2BZnqMMMaKtL4GOqUBgjgg0nz3t2vU1xT26HlLZneRYg1Mqux6%2BN9dtiGQAZnZO7xUbGaSSRGrQYx7k6HU%2Fwvi87DDni2Su05eyosX87%2FvaJaPxZ1yvKS7TgJcnxbPjM7l3kuvWz5%2Bj4eQAqvtmqvJyA5apnz07vMAY40DUG7mjvEdKlBatTmoswJR8v8WemJQSHndwC78w1F%2BQozyUqCpqTuWj4dr%2FcsRdZwMYN9O1FGq&X-Amz-Signature=fa83c876ccba56fbfacd509d5f099bb4e7a1d6ebc083e1f6c43c866a760a98e8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDLRKBN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHM7kBYY5KkV2C3jStrZwqef2bOSzQ5hUBxA3KDMHa2yAiEA5TNVIAmcWBZVH%2F2%2B%2Fj2s7VPGiupL%2Bh6UGIlWy77AHcwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDK%2BsZ4x5gsYE89ciwCrcA%2FgVO6dBmgMgIplGDff1hkhYGeSPgoLdXjA84f%2FYaoTgjpwGxdSNc8JruUEOGbi0LXmi9%2BTp4pA3cvJvFqpPAYR3Sy7Qqu6AN3Eckb0PcvOh4vVDGEl5JFma67Hx2BLj5rC5AuLsG4zsSJYzFSUCTR6fcnE2q8w0Sx4pqwIJODn%2BUKa8Wao1i9Nle7K6UgFy6C35b7Ro7MJd9B%2FVJRoMle179zD9CH88h5NAyXuG489soLvqEcLCglAbLt6woCtY9gbci7SBte599kW8HZd%2FfyP19f%2Fr7ELNCoGJOPym97fmoi2RhT5gzi1T97G1wmXEIhY%2B3sI5lAufdkjov%2Bhdv9eaT4aG%2BiDK%2FtALEvZPWzRrbtCRB37krueFcKb0KE21kXiAWbbABc1da6mX5veb7pl%2BZHHlQ3VQqJ2w65bhaC36knE3%2BZEge9hgIAuzK0H5A4W8V42axseK6lox07WYiw5nL3VdiCB4tmaF1bheo5RNg955DoNiE1HRK4b34t6UBVIE%2F6VquDbngmFAQ4KcOwKRVFDJsF50Qo25HXhkqkY81fXiSOnkLy1t1yiFbw14OQfxti4G%2BAwitpycpwiiPrxBunmJXjEiV3TMktn9GFNvwmSGgP%2F95%2FY%2BZnqMMMaKtL4GOqUBgjgg0nz3t2vU1xT26HlLZneRYg1Mqux6%2BN9dtiGQAZnZO7xUbGaSSRGrQYx7k6HU%2Fwvi87DDni2Su05eyosX87%2FvaJaPxZ1yvKS7TgJcnxbPjM7l3kuvWz5%2Bj4eQAqvtmqvJyA5apnz07vMAY40DUG7mjvEdKlBatTmoswJR8v8WemJQSHndwC78w1F%2BQozyUqCpqTuWj4dr%2FcsRdZwMYN9O1FGq&X-Amz-Signature=99602bd86e10ce9edeb6a24012b8f780d675c02b5c58a2c1ceda7df04ad0966f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDLRKBN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHM7kBYY5KkV2C3jStrZwqef2bOSzQ5hUBxA3KDMHa2yAiEA5TNVIAmcWBZVH%2F2%2B%2Fj2s7VPGiupL%2Bh6UGIlWy77AHcwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDK%2BsZ4x5gsYE89ciwCrcA%2FgVO6dBmgMgIplGDff1hkhYGeSPgoLdXjA84f%2FYaoTgjpwGxdSNc8JruUEOGbi0LXmi9%2BTp4pA3cvJvFqpPAYR3Sy7Qqu6AN3Eckb0PcvOh4vVDGEl5JFma67Hx2BLj5rC5AuLsG4zsSJYzFSUCTR6fcnE2q8w0Sx4pqwIJODn%2BUKa8Wao1i9Nle7K6UgFy6C35b7Ro7MJd9B%2FVJRoMle179zD9CH88h5NAyXuG489soLvqEcLCglAbLt6woCtY9gbci7SBte599kW8HZd%2FfyP19f%2Fr7ELNCoGJOPym97fmoi2RhT5gzi1T97G1wmXEIhY%2B3sI5lAufdkjov%2Bhdv9eaT4aG%2BiDK%2FtALEvZPWzRrbtCRB37krueFcKb0KE21kXiAWbbABc1da6mX5veb7pl%2BZHHlQ3VQqJ2w65bhaC36knE3%2BZEge9hgIAuzK0H5A4W8V42axseK6lox07WYiw5nL3VdiCB4tmaF1bheo5RNg955DoNiE1HRK4b34t6UBVIE%2F6VquDbngmFAQ4KcOwKRVFDJsF50Qo25HXhkqkY81fXiSOnkLy1t1yiFbw14OQfxti4G%2BAwitpycpwiiPrxBunmJXjEiV3TMktn9GFNvwmSGgP%2F95%2FY%2BZnqMMMaKtL4GOqUBgjgg0nz3t2vU1xT26HlLZneRYg1Mqux6%2BN9dtiGQAZnZO7xUbGaSSRGrQYx7k6HU%2Fwvi87DDni2Su05eyosX87%2FvaJaPxZ1yvKS7TgJcnxbPjM7l3kuvWz5%2Bj4eQAqvtmqvJyA5apnz07vMAY40DUG7mjvEdKlBatTmoswJR8v8WemJQSHndwC78w1F%2BQozyUqCpqTuWj4dr%2FcsRdZwMYN9O1FGq&X-Amz-Signature=b89ee4204dcf5ff06b4aaea09a51f79712e4588ecd8d5521d6532a02d4fcbd69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDLRKBN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHM7kBYY5KkV2C3jStrZwqef2bOSzQ5hUBxA3KDMHa2yAiEA5TNVIAmcWBZVH%2F2%2B%2Fj2s7VPGiupL%2Bh6UGIlWy77AHcwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDK%2BsZ4x5gsYE89ciwCrcA%2FgVO6dBmgMgIplGDff1hkhYGeSPgoLdXjA84f%2FYaoTgjpwGxdSNc8JruUEOGbi0LXmi9%2BTp4pA3cvJvFqpPAYR3Sy7Qqu6AN3Eckb0PcvOh4vVDGEl5JFma67Hx2BLj5rC5AuLsG4zsSJYzFSUCTR6fcnE2q8w0Sx4pqwIJODn%2BUKa8Wao1i9Nle7K6UgFy6C35b7Ro7MJd9B%2FVJRoMle179zD9CH88h5NAyXuG489soLvqEcLCglAbLt6woCtY9gbci7SBte599kW8HZd%2FfyP19f%2Fr7ELNCoGJOPym97fmoi2RhT5gzi1T97G1wmXEIhY%2B3sI5lAufdkjov%2Bhdv9eaT4aG%2BiDK%2FtALEvZPWzRrbtCRB37krueFcKb0KE21kXiAWbbABc1da6mX5veb7pl%2BZHHlQ3VQqJ2w65bhaC36knE3%2BZEge9hgIAuzK0H5A4W8V42axseK6lox07WYiw5nL3VdiCB4tmaF1bheo5RNg955DoNiE1HRK4b34t6UBVIE%2F6VquDbngmFAQ4KcOwKRVFDJsF50Qo25HXhkqkY81fXiSOnkLy1t1yiFbw14OQfxti4G%2BAwitpycpwiiPrxBunmJXjEiV3TMktn9GFNvwmSGgP%2F95%2FY%2BZnqMMMaKtL4GOqUBgjgg0nz3t2vU1xT26HlLZneRYg1Mqux6%2BN9dtiGQAZnZO7xUbGaSSRGrQYx7k6HU%2Fwvi87DDni2Su05eyosX87%2FvaJaPxZ1yvKS7TgJcnxbPjM7l3kuvWz5%2Bj4eQAqvtmqvJyA5apnz07vMAY40DUG7mjvEdKlBatTmoswJR8v8WemJQSHndwC78w1F%2BQozyUqCpqTuWj4dr%2FcsRdZwMYN9O1FGq&X-Amz-Signature=810a4843a9c2199aa17326d6065f6b1c6992ab188b0f59a74d6fcbaa46e0d35d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDLRKBN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHM7kBYY5KkV2C3jStrZwqef2bOSzQ5hUBxA3KDMHa2yAiEA5TNVIAmcWBZVH%2F2%2B%2Fj2s7VPGiupL%2Bh6UGIlWy77AHcwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDK%2BsZ4x5gsYE89ciwCrcA%2FgVO6dBmgMgIplGDff1hkhYGeSPgoLdXjA84f%2FYaoTgjpwGxdSNc8JruUEOGbi0LXmi9%2BTp4pA3cvJvFqpPAYR3Sy7Qqu6AN3Eckb0PcvOh4vVDGEl5JFma67Hx2BLj5rC5AuLsG4zsSJYzFSUCTR6fcnE2q8w0Sx4pqwIJODn%2BUKa8Wao1i9Nle7K6UgFy6C35b7Ro7MJd9B%2FVJRoMle179zD9CH88h5NAyXuG489soLvqEcLCglAbLt6woCtY9gbci7SBte599kW8HZd%2FfyP19f%2Fr7ELNCoGJOPym97fmoi2RhT5gzi1T97G1wmXEIhY%2B3sI5lAufdkjov%2Bhdv9eaT4aG%2BiDK%2FtALEvZPWzRrbtCRB37krueFcKb0KE21kXiAWbbABc1da6mX5veb7pl%2BZHHlQ3VQqJ2w65bhaC36knE3%2BZEge9hgIAuzK0H5A4W8V42axseK6lox07WYiw5nL3VdiCB4tmaF1bheo5RNg955DoNiE1HRK4b34t6UBVIE%2F6VquDbngmFAQ4KcOwKRVFDJsF50Qo25HXhkqkY81fXiSOnkLy1t1yiFbw14OQfxti4G%2BAwitpycpwiiPrxBunmJXjEiV3TMktn9GFNvwmSGgP%2F95%2FY%2BZnqMMMaKtL4GOqUBgjgg0nz3t2vU1xT26HlLZneRYg1Mqux6%2BN9dtiGQAZnZO7xUbGaSSRGrQYx7k6HU%2Fwvi87DDni2Su05eyosX87%2FvaJaPxZ1yvKS7TgJcnxbPjM7l3kuvWz5%2Bj4eQAqvtmqvJyA5apnz07vMAY40DUG7mjvEdKlBatTmoswJR8v8WemJQSHndwC78w1F%2BQozyUqCpqTuWj4dr%2FcsRdZwMYN9O1FGq&X-Amz-Signature=73f083c21cfa00a8b2bf084bc3d1d58aa111e5f2342d812acc6ec10368a3552b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDLRKBN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHM7kBYY5KkV2C3jStrZwqef2bOSzQ5hUBxA3KDMHa2yAiEA5TNVIAmcWBZVH%2F2%2B%2Fj2s7VPGiupL%2Bh6UGIlWy77AHcwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDK%2BsZ4x5gsYE89ciwCrcA%2FgVO6dBmgMgIplGDff1hkhYGeSPgoLdXjA84f%2FYaoTgjpwGxdSNc8JruUEOGbi0LXmi9%2BTp4pA3cvJvFqpPAYR3Sy7Qqu6AN3Eckb0PcvOh4vVDGEl5JFma67Hx2BLj5rC5AuLsG4zsSJYzFSUCTR6fcnE2q8w0Sx4pqwIJODn%2BUKa8Wao1i9Nle7K6UgFy6C35b7Ro7MJd9B%2FVJRoMle179zD9CH88h5NAyXuG489soLvqEcLCglAbLt6woCtY9gbci7SBte599kW8HZd%2FfyP19f%2Fr7ELNCoGJOPym97fmoi2RhT5gzi1T97G1wmXEIhY%2B3sI5lAufdkjov%2Bhdv9eaT4aG%2BiDK%2FtALEvZPWzRrbtCRB37krueFcKb0KE21kXiAWbbABc1da6mX5veb7pl%2BZHHlQ3VQqJ2w65bhaC36knE3%2BZEge9hgIAuzK0H5A4W8V42axseK6lox07WYiw5nL3VdiCB4tmaF1bheo5RNg955DoNiE1HRK4b34t6UBVIE%2F6VquDbngmFAQ4KcOwKRVFDJsF50Qo25HXhkqkY81fXiSOnkLy1t1yiFbw14OQfxti4G%2BAwitpycpwiiPrxBunmJXjEiV3TMktn9GFNvwmSGgP%2F95%2FY%2BZnqMMMaKtL4GOqUBgjgg0nz3t2vU1xT26HlLZneRYg1Mqux6%2BN9dtiGQAZnZO7xUbGaSSRGrQYx7k6HU%2Fwvi87DDni2Su05eyosX87%2FvaJaPxZ1yvKS7TgJcnxbPjM7l3kuvWz5%2Bj4eQAqvtmqvJyA5apnz07vMAY40DUG7mjvEdKlBatTmoswJR8v8WemJQSHndwC78w1F%2BQozyUqCpqTuWj4dr%2FcsRdZwMYN9O1FGq&X-Amz-Signature=8cb5a05759ac1def12ea9b7291f3049538c7098fb2b386b6d31df772afd64cee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDLRKBN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHM7kBYY5KkV2C3jStrZwqef2bOSzQ5hUBxA3KDMHa2yAiEA5TNVIAmcWBZVH%2F2%2B%2Fj2s7VPGiupL%2Bh6UGIlWy77AHcwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDK%2BsZ4x5gsYE89ciwCrcA%2FgVO6dBmgMgIplGDff1hkhYGeSPgoLdXjA84f%2FYaoTgjpwGxdSNc8JruUEOGbi0LXmi9%2BTp4pA3cvJvFqpPAYR3Sy7Qqu6AN3Eckb0PcvOh4vVDGEl5JFma67Hx2BLj5rC5AuLsG4zsSJYzFSUCTR6fcnE2q8w0Sx4pqwIJODn%2BUKa8Wao1i9Nle7K6UgFy6C35b7Ro7MJd9B%2FVJRoMle179zD9CH88h5NAyXuG489soLvqEcLCglAbLt6woCtY9gbci7SBte599kW8HZd%2FfyP19f%2Fr7ELNCoGJOPym97fmoi2RhT5gzi1T97G1wmXEIhY%2B3sI5lAufdkjov%2Bhdv9eaT4aG%2BiDK%2FtALEvZPWzRrbtCRB37krueFcKb0KE21kXiAWbbABc1da6mX5veb7pl%2BZHHlQ3VQqJ2w65bhaC36knE3%2BZEge9hgIAuzK0H5A4W8V42axseK6lox07WYiw5nL3VdiCB4tmaF1bheo5RNg955DoNiE1HRK4b34t6UBVIE%2F6VquDbngmFAQ4KcOwKRVFDJsF50Qo25HXhkqkY81fXiSOnkLy1t1yiFbw14OQfxti4G%2BAwitpycpwiiPrxBunmJXjEiV3TMktn9GFNvwmSGgP%2F95%2FY%2BZnqMMMaKtL4GOqUBgjgg0nz3t2vU1xT26HlLZneRYg1Mqux6%2BN9dtiGQAZnZO7xUbGaSSRGrQYx7k6HU%2Fwvi87DDni2Su05eyosX87%2FvaJaPxZ1yvKS7TgJcnxbPjM7l3kuvWz5%2Bj4eQAqvtmqvJyA5apnz07vMAY40DUG7mjvEdKlBatTmoswJR8v8WemJQSHndwC78w1F%2BQozyUqCpqTuWj4dr%2FcsRdZwMYN9O1FGq&X-Amz-Signature=89ca595031134650a602e5fd450e90b2b726ffe43bea2ed81ea1e0060ed9e5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
