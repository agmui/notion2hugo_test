---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GETSPW%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCPx0zvYXTa6Zfw4cKajwqyQm6alRkxYSzpkP7JQKpIrgIgfSWeRJWWOY1HBFzIRZ8kgj0%2B2hW50VEW15STjZAHWIkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJaAfFh7Mo80UCRoSrcAyB2ZS3fP93gxWVZGhKve29viv%2BWpg7gQ9pXPI0UYwd8BNSWA3aZ4JFDSgeAfqix1WCGHQn6E5p5nEgUdeHTQxDX3pgp2FIavxNauI%2BrDRptNIpgtuz%2FPT3JAVqbM46pJ4H9pdBpGwiJ%2Fy6YoLs5Xh5XVfNDAwF0gxN58rvGbwSeJTUbBxxYRG8je1rac%2FInNWncO8VgNPvjYJjUV7WMOqhNTW17FRYmvD2JNUGs9oEHZ0OiHx5kt0QxqIxC2ts2JmY0jXp0reUj7d2KKh3heDUdPHNQaEAI84SERFxLSW4Jf7X9kmq5TMBS%2FIkHyU5pdEA8lLAzKotcO1EQjlQMdCtnbc94obGpcFYnhKSqznDUqVfVSZVc8sk9gBsEYlBhaEejYiLq117mFA2eu4V9b38FyuHfy1FjilvkY%2BNA4g%2FIJUsh4CqsIU5Pn%2BbFo1uZLqH0WsvqEX%2BvtiygtOXR0paKvtbLZSFFIL936DHsDQoJrkimu2Az4N7WHxn3vsi37zyacYFuTFivBAck%2BgTv0eKr0tUa%2BSeVMZpydeZTdriEj19nT47CFIpnWBvsqZ3hOOV%2B4PFZcpldKJaiS1EwVAeCdB4c6Ozdn6H3S2UalSaOzaRzJWF5WeXlZ%2FGGMOT6m8cGOqUBfxAV5PYhey7hSQWRWUEyKlkK1w%2Bqcc1CWgP5BtSq6GeVV5XSNWv5IkI%2F4KyQJcBz%2F8PmBEi%2FiDzryfD%2FKBoAsAZbyc1qaKLPJIQdxc9Bj4lg2pYFufbn6IzUv71jonmBLCXz6t2oZZuaqaCBfdXLqo4Ec9DjcHqU1s%2F1uMUHlcQaK3iQMQ6CStyj%2F3hmV3uSXROorcnj32A%2B1B3Z5fSMT0Cr7QHY&X-Amz-Signature=6b6da1e5624b2368e8d62e04594f5e3474f473efa78ac50a3f2a1f0b76c1c2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GETSPW%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCPx0zvYXTa6Zfw4cKajwqyQm6alRkxYSzpkP7JQKpIrgIgfSWeRJWWOY1HBFzIRZ8kgj0%2B2hW50VEW15STjZAHWIkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJaAfFh7Mo80UCRoSrcAyB2ZS3fP93gxWVZGhKve29viv%2BWpg7gQ9pXPI0UYwd8BNSWA3aZ4JFDSgeAfqix1WCGHQn6E5p5nEgUdeHTQxDX3pgp2FIavxNauI%2BrDRptNIpgtuz%2FPT3JAVqbM46pJ4H9pdBpGwiJ%2Fy6YoLs5Xh5XVfNDAwF0gxN58rvGbwSeJTUbBxxYRG8je1rac%2FInNWncO8VgNPvjYJjUV7WMOqhNTW17FRYmvD2JNUGs9oEHZ0OiHx5kt0QxqIxC2ts2JmY0jXp0reUj7d2KKh3heDUdPHNQaEAI84SERFxLSW4Jf7X9kmq5TMBS%2FIkHyU5pdEA8lLAzKotcO1EQjlQMdCtnbc94obGpcFYnhKSqznDUqVfVSZVc8sk9gBsEYlBhaEejYiLq117mFA2eu4V9b38FyuHfy1FjilvkY%2BNA4g%2FIJUsh4CqsIU5Pn%2BbFo1uZLqH0WsvqEX%2BvtiygtOXR0paKvtbLZSFFIL936DHsDQoJrkimu2Az4N7WHxn3vsi37zyacYFuTFivBAck%2BgTv0eKr0tUa%2BSeVMZpydeZTdriEj19nT47CFIpnWBvsqZ3hOOV%2B4PFZcpldKJaiS1EwVAeCdB4c6Ozdn6H3S2UalSaOzaRzJWF5WeXlZ%2FGGMOT6m8cGOqUBfxAV5PYhey7hSQWRWUEyKlkK1w%2Bqcc1CWgP5BtSq6GeVV5XSNWv5IkI%2F4KyQJcBz%2F8PmBEi%2FiDzryfD%2FKBoAsAZbyc1qaKLPJIQdxc9Bj4lg2pYFufbn6IzUv71jonmBLCXz6t2oZZuaqaCBfdXLqo4Ec9DjcHqU1s%2F1uMUHlcQaK3iQMQ6CStyj%2F3hmV3uSXROorcnj32A%2B1B3Z5fSMT0Cr7QHY&X-Amz-Signature=5191cf0ddc5f2765e5ee616fbb6a59554c1a49fbb590c18377d87ff9b00adc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GETSPW%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCPx0zvYXTa6Zfw4cKajwqyQm6alRkxYSzpkP7JQKpIrgIgfSWeRJWWOY1HBFzIRZ8kgj0%2B2hW50VEW15STjZAHWIkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJaAfFh7Mo80UCRoSrcAyB2ZS3fP93gxWVZGhKve29viv%2BWpg7gQ9pXPI0UYwd8BNSWA3aZ4JFDSgeAfqix1WCGHQn6E5p5nEgUdeHTQxDX3pgp2FIavxNauI%2BrDRptNIpgtuz%2FPT3JAVqbM46pJ4H9pdBpGwiJ%2Fy6YoLs5Xh5XVfNDAwF0gxN58rvGbwSeJTUbBxxYRG8je1rac%2FInNWncO8VgNPvjYJjUV7WMOqhNTW17FRYmvD2JNUGs9oEHZ0OiHx5kt0QxqIxC2ts2JmY0jXp0reUj7d2KKh3heDUdPHNQaEAI84SERFxLSW4Jf7X9kmq5TMBS%2FIkHyU5pdEA8lLAzKotcO1EQjlQMdCtnbc94obGpcFYnhKSqznDUqVfVSZVc8sk9gBsEYlBhaEejYiLq117mFA2eu4V9b38FyuHfy1FjilvkY%2BNA4g%2FIJUsh4CqsIU5Pn%2BbFo1uZLqH0WsvqEX%2BvtiygtOXR0paKvtbLZSFFIL936DHsDQoJrkimu2Az4N7WHxn3vsi37zyacYFuTFivBAck%2BgTv0eKr0tUa%2BSeVMZpydeZTdriEj19nT47CFIpnWBvsqZ3hOOV%2B4PFZcpldKJaiS1EwVAeCdB4c6Ozdn6H3S2UalSaOzaRzJWF5WeXlZ%2FGGMOT6m8cGOqUBfxAV5PYhey7hSQWRWUEyKlkK1w%2Bqcc1CWgP5BtSq6GeVV5XSNWv5IkI%2F4KyQJcBz%2F8PmBEi%2FiDzryfD%2FKBoAsAZbyc1qaKLPJIQdxc9Bj4lg2pYFufbn6IzUv71jonmBLCXz6t2oZZuaqaCBfdXLqo4Ec9DjcHqU1s%2F1uMUHlcQaK3iQMQ6CStyj%2F3hmV3uSXROorcnj32A%2B1B3Z5fSMT0Cr7QHY&X-Amz-Signature=af4cd04fc3abc5d6c79efe73aa545feeb48dd4efe9d3873eeb58633b48c89ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GETSPW%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCPx0zvYXTa6Zfw4cKajwqyQm6alRkxYSzpkP7JQKpIrgIgfSWeRJWWOY1HBFzIRZ8kgj0%2B2hW50VEW15STjZAHWIkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJaAfFh7Mo80UCRoSrcAyB2ZS3fP93gxWVZGhKve29viv%2BWpg7gQ9pXPI0UYwd8BNSWA3aZ4JFDSgeAfqix1WCGHQn6E5p5nEgUdeHTQxDX3pgp2FIavxNauI%2BrDRptNIpgtuz%2FPT3JAVqbM46pJ4H9pdBpGwiJ%2Fy6YoLs5Xh5XVfNDAwF0gxN58rvGbwSeJTUbBxxYRG8je1rac%2FInNWncO8VgNPvjYJjUV7WMOqhNTW17FRYmvD2JNUGs9oEHZ0OiHx5kt0QxqIxC2ts2JmY0jXp0reUj7d2KKh3heDUdPHNQaEAI84SERFxLSW4Jf7X9kmq5TMBS%2FIkHyU5pdEA8lLAzKotcO1EQjlQMdCtnbc94obGpcFYnhKSqznDUqVfVSZVc8sk9gBsEYlBhaEejYiLq117mFA2eu4V9b38FyuHfy1FjilvkY%2BNA4g%2FIJUsh4CqsIU5Pn%2BbFo1uZLqH0WsvqEX%2BvtiygtOXR0paKvtbLZSFFIL936DHsDQoJrkimu2Az4N7WHxn3vsi37zyacYFuTFivBAck%2BgTv0eKr0tUa%2BSeVMZpydeZTdriEj19nT47CFIpnWBvsqZ3hOOV%2B4PFZcpldKJaiS1EwVAeCdB4c6Ozdn6H3S2UalSaOzaRzJWF5WeXlZ%2FGGMOT6m8cGOqUBfxAV5PYhey7hSQWRWUEyKlkK1w%2Bqcc1CWgP5BtSq6GeVV5XSNWv5IkI%2F4KyQJcBz%2F8PmBEi%2FiDzryfD%2FKBoAsAZbyc1qaKLPJIQdxc9Bj4lg2pYFufbn6IzUv71jonmBLCXz6t2oZZuaqaCBfdXLqo4Ec9DjcHqU1s%2F1uMUHlcQaK3iQMQ6CStyj%2F3hmV3uSXROorcnj32A%2B1B3Z5fSMT0Cr7QHY&X-Amz-Signature=50c71053b3bfeb447751275766acfa4e08182b28cf9461777671572802a3f117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GETSPW%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCPx0zvYXTa6Zfw4cKajwqyQm6alRkxYSzpkP7JQKpIrgIgfSWeRJWWOY1HBFzIRZ8kgj0%2B2hW50VEW15STjZAHWIkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJaAfFh7Mo80UCRoSrcAyB2ZS3fP93gxWVZGhKve29viv%2BWpg7gQ9pXPI0UYwd8BNSWA3aZ4JFDSgeAfqix1WCGHQn6E5p5nEgUdeHTQxDX3pgp2FIavxNauI%2BrDRptNIpgtuz%2FPT3JAVqbM46pJ4H9pdBpGwiJ%2Fy6YoLs5Xh5XVfNDAwF0gxN58rvGbwSeJTUbBxxYRG8je1rac%2FInNWncO8VgNPvjYJjUV7WMOqhNTW17FRYmvD2JNUGs9oEHZ0OiHx5kt0QxqIxC2ts2JmY0jXp0reUj7d2KKh3heDUdPHNQaEAI84SERFxLSW4Jf7X9kmq5TMBS%2FIkHyU5pdEA8lLAzKotcO1EQjlQMdCtnbc94obGpcFYnhKSqznDUqVfVSZVc8sk9gBsEYlBhaEejYiLq117mFA2eu4V9b38FyuHfy1FjilvkY%2BNA4g%2FIJUsh4CqsIU5Pn%2BbFo1uZLqH0WsvqEX%2BvtiygtOXR0paKvtbLZSFFIL936DHsDQoJrkimu2Az4N7WHxn3vsi37zyacYFuTFivBAck%2BgTv0eKr0tUa%2BSeVMZpydeZTdriEj19nT47CFIpnWBvsqZ3hOOV%2B4PFZcpldKJaiS1EwVAeCdB4c6Ozdn6H3S2UalSaOzaRzJWF5WeXlZ%2FGGMOT6m8cGOqUBfxAV5PYhey7hSQWRWUEyKlkK1w%2Bqcc1CWgP5BtSq6GeVV5XSNWv5IkI%2F4KyQJcBz%2F8PmBEi%2FiDzryfD%2FKBoAsAZbyc1qaKLPJIQdxc9Bj4lg2pYFufbn6IzUv71jonmBLCXz6t2oZZuaqaCBfdXLqo4Ec9DjcHqU1s%2F1uMUHlcQaK3iQMQ6CStyj%2F3hmV3uSXROorcnj32A%2B1B3Z5fSMT0Cr7QHY&X-Amz-Signature=8438eb67836da6bda497b6921c52ebc2c975ac69bedcb594e8b818de6f7e407f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GETSPW%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCPx0zvYXTa6Zfw4cKajwqyQm6alRkxYSzpkP7JQKpIrgIgfSWeRJWWOY1HBFzIRZ8kgj0%2B2hW50VEW15STjZAHWIkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJaAfFh7Mo80UCRoSrcAyB2ZS3fP93gxWVZGhKve29viv%2BWpg7gQ9pXPI0UYwd8BNSWA3aZ4JFDSgeAfqix1WCGHQn6E5p5nEgUdeHTQxDX3pgp2FIavxNauI%2BrDRptNIpgtuz%2FPT3JAVqbM46pJ4H9pdBpGwiJ%2Fy6YoLs5Xh5XVfNDAwF0gxN58rvGbwSeJTUbBxxYRG8je1rac%2FInNWncO8VgNPvjYJjUV7WMOqhNTW17FRYmvD2JNUGs9oEHZ0OiHx5kt0QxqIxC2ts2JmY0jXp0reUj7d2KKh3heDUdPHNQaEAI84SERFxLSW4Jf7X9kmq5TMBS%2FIkHyU5pdEA8lLAzKotcO1EQjlQMdCtnbc94obGpcFYnhKSqznDUqVfVSZVc8sk9gBsEYlBhaEejYiLq117mFA2eu4V9b38FyuHfy1FjilvkY%2BNA4g%2FIJUsh4CqsIU5Pn%2BbFo1uZLqH0WsvqEX%2BvtiygtOXR0paKvtbLZSFFIL936DHsDQoJrkimu2Az4N7WHxn3vsi37zyacYFuTFivBAck%2BgTv0eKr0tUa%2BSeVMZpydeZTdriEj19nT47CFIpnWBvsqZ3hOOV%2B4PFZcpldKJaiS1EwVAeCdB4c6Ozdn6H3S2UalSaOzaRzJWF5WeXlZ%2FGGMOT6m8cGOqUBfxAV5PYhey7hSQWRWUEyKlkK1w%2Bqcc1CWgP5BtSq6GeVV5XSNWv5IkI%2F4KyQJcBz%2F8PmBEi%2FiDzryfD%2FKBoAsAZbyc1qaKLPJIQdxc9Bj4lg2pYFufbn6IzUv71jonmBLCXz6t2oZZuaqaCBfdXLqo4Ec9DjcHqU1s%2F1uMUHlcQaK3iQMQ6CStyj%2F3hmV3uSXROorcnj32A%2B1B3Z5fSMT0Cr7QHY&X-Amz-Signature=28e9263bcfbcbe644b6f16c5d3904890b13866edbca553704b70447d68c469e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GETSPW%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCPx0zvYXTa6Zfw4cKajwqyQm6alRkxYSzpkP7JQKpIrgIgfSWeRJWWOY1HBFzIRZ8kgj0%2B2hW50VEW15STjZAHWIkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJaAfFh7Mo80UCRoSrcAyB2ZS3fP93gxWVZGhKve29viv%2BWpg7gQ9pXPI0UYwd8BNSWA3aZ4JFDSgeAfqix1WCGHQn6E5p5nEgUdeHTQxDX3pgp2FIavxNauI%2BrDRptNIpgtuz%2FPT3JAVqbM46pJ4H9pdBpGwiJ%2Fy6YoLs5Xh5XVfNDAwF0gxN58rvGbwSeJTUbBxxYRG8je1rac%2FInNWncO8VgNPvjYJjUV7WMOqhNTW17FRYmvD2JNUGs9oEHZ0OiHx5kt0QxqIxC2ts2JmY0jXp0reUj7d2KKh3heDUdPHNQaEAI84SERFxLSW4Jf7X9kmq5TMBS%2FIkHyU5pdEA8lLAzKotcO1EQjlQMdCtnbc94obGpcFYnhKSqznDUqVfVSZVc8sk9gBsEYlBhaEejYiLq117mFA2eu4V9b38FyuHfy1FjilvkY%2BNA4g%2FIJUsh4CqsIU5Pn%2BbFo1uZLqH0WsvqEX%2BvtiygtOXR0paKvtbLZSFFIL936DHsDQoJrkimu2Az4N7WHxn3vsi37zyacYFuTFivBAck%2BgTv0eKr0tUa%2BSeVMZpydeZTdriEj19nT47CFIpnWBvsqZ3hOOV%2B4PFZcpldKJaiS1EwVAeCdB4c6Ozdn6H3S2UalSaOzaRzJWF5WeXlZ%2FGGMOT6m8cGOqUBfxAV5PYhey7hSQWRWUEyKlkK1w%2Bqcc1CWgP5BtSq6GeVV5XSNWv5IkI%2F4KyQJcBz%2F8PmBEi%2FiDzryfD%2FKBoAsAZbyc1qaKLPJIQdxc9Bj4lg2pYFufbn6IzUv71jonmBLCXz6t2oZZuaqaCBfdXLqo4Ec9DjcHqU1s%2F1uMUHlcQaK3iQMQ6CStyj%2F3hmV3uSXROorcnj32A%2B1B3Z5fSMT0Cr7QHY&X-Amz-Signature=c925f2c8ddb292c47e485835692f7fdce2bf54683733e8cf14becfc86af5a84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GETSPW%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCPx0zvYXTa6Zfw4cKajwqyQm6alRkxYSzpkP7JQKpIrgIgfSWeRJWWOY1HBFzIRZ8kgj0%2B2hW50VEW15STjZAHWIkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJaAfFh7Mo80UCRoSrcAyB2ZS3fP93gxWVZGhKve29viv%2BWpg7gQ9pXPI0UYwd8BNSWA3aZ4JFDSgeAfqix1WCGHQn6E5p5nEgUdeHTQxDX3pgp2FIavxNauI%2BrDRptNIpgtuz%2FPT3JAVqbM46pJ4H9pdBpGwiJ%2Fy6YoLs5Xh5XVfNDAwF0gxN58rvGbwSeJTUbBxxYRG8je1rac%2FInNWncO8VgNPvjYJjUV7WMOqhNTW17FRYmvD2JNUGs9oEHZ0OiHx5kt0QxqIxC2ts2JmY0jXp0reUj7d2KKh3heDUdPHNQaEAI84SERFxLSW4Jf7X9kmq5TMBS%2FIkHyU5pdEA8lLAzKotcO1EQjlQMdCtnbc94obGpcFYnhKSqznDUqVfVSZVc8sk9gBsEYlBhaEejYiLq117mFA2eu4V9b38FyuHfy1FjilvkY%2BNA4g%2FIJUsh4CqsIU5Pn%2BbFo1uZLqH0WsvqEX%2BvtiygtOXR0paKvtbLZSFFIL936DHsDQoJrkimu2Az4N7WHxn3vsi37zyacYFuTFivBAck%2BgTv0eKr0tUa%2BSeVMZpydeZTdriEj19nT47CFIpnWBvsqZ3hOOV%2B4PFZcpldKJaiS1EwVAeCdB4c6Ozdn6H3S2UalSaOzaRzJWF5WeXlZ%2FGGMOT6m8cGOqUBfxAV5PYhey7hSQWRWUEyKlkK1w%2Bqcc1CWgP5BtSq6GeVV5XSNWv5IkI%2F4KyQJcBz%2F8PmBEi%2FiDzryfD%2FKBoAsAZbyc1qaKLPJIQdxc9Bj4lg2pYFufbn6IzUv71jonmBLCXz6t2oZZuaqaCBfdXLqo4Ec9DjcHqU1s%2F1uMUHlcQaK3iQMQ6CStyj%2F3hmV3uSXROorcnj32A%2B1B3Z5fSMT0Cr7QHY&X-Amz-Signature=d2f43ab4f3b18331aff42f82e34465f74b0bd9b6f9900ce37ad1f67e96ae2668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
