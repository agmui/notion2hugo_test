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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y63TUIG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7rfy4VP%2FWS2%2FBi5mlWbmctSV5Bz2UZ1pyMYNJeOcBSAiBDYr47ZFXTWFPDak3cY7dh%2FYGDZr3ty0oUc2DPXeH2JyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChgAb5OqjPlfLWSZKtwDeHsvN3iE7agHjZb3M%2BTxrZBPKxBdxkCnYLXRdVZ4bbSJB2xbmCnq2miXbJSXa97Xbn2kUPNU4dLfONA0Lfz3EpdzJq%2BpwmajXubUWUiTAC3idTTn%2BzWbi8Uh1nRjMYlMihOePmNF%2FgRy0%2Fy99QZV8JR%2BKqpss0wkaE2C5MACLSY4gpvAcfhx%2F5Cq0x1dKgQx3f3oVk9RKed088NHfzxDArTsaEKpxaJZL%2FNzkJXHeHFNAWW2Zjve6ZOFzdC%2Bc2ENDkHSrH%2FUAfrKFMpnB3L78GGKh5e95MgAyv9p3chhhYnMOibkFcdlG3TqowYT1cEnGAWQc9tGD%2BzCqJX1KQnpNABeFodm3qTgXGrBsVt%2FiIjVLZ1abOCg2sIGSUHHXtsCAPq1ayEwLacI4MTNb2B8054%2BlfN%2FHNyOdKSGYGtDAkMMNuKD3CYo1JgWr%2BAFLFKpoDoX80W8ahO0BIzVgPhlrHqxZcmlsZ5d7JXVIf2dbOAmBoetJrHQq0xlk7100TilbhgUcoqWV19zztOjvQYhwqT%2BMnKfXktUmP1oatn9%2FXr%2FVZsPmY1SfDzMfyiEqm8IRAqv6yG6AIBauXAczAhFgzcEeX5bHTEnGAMKGjnBY5FrP7m1S%2BqVXFgmjGQw%2BLuovQY6pgEstrRSbUpMgmcXfyL6SiRu%2F3UWumk4jmpvxp74YyslwK7FFlMVuT5e430deapVRbzt6WxG5I19txlIqM2QysOm4UZbwwhKWLUjl4VwmB4C%2FSUxFDqx7Z0xOg7F644%2BDP8M5XIOsXtxcaghLVzpeS3pzNt8iDvXy7dxArHEFrurFD7I%2BbznNxbYyQjrrocKW3%2Fm3E8stq2QPBkMUGISsruxqiV0duMG&X-Amz-Signature=51eb16d59c82486ed9c184b167271e61e1d0eab2263ce9c1480928ddc04e63a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y63TUIG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7rfy4VP%2FWS2%2FBi5mlWbmctSV5Bz2UZ1pyMYNJeOcBSAiBDYr47ZFXTWFPDak3cY7dh%2FYGDZr3ty0oUc2DPXeH2JyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChgAb5OqjPlfLWSZKtwDeHsvN3iE7agHjZb3M%2BTxrZBPKxBdxkCnYLXRdVZ4bbSJB2xbmCnq2miXbJSXa97Xbn2kUPNU4dLfONA0Lfz3EpdzJq%2BpwmajXubUWUiTAC3idTTn%2BzWbi8Uh1nRjMYlMihOePmNF%2FgRy0%2Fy99QZV8JR%2BKqpss0wkaE2C5MACLSY4gpvAcfhx%2F5Cq0x1dKgQx3f3oVk9RKed088NHfzxDArTsaEKpxaJZL%2FNzkJXHeHFNAWW2Zjve6ZOFzdC%2Bc2ENDkHSrH%2FUAfrKFMpnB3L78GGKh5e95MgAyv9p3chhhYnMOibkFcdlG3TqowYT1cEnGAWQc9tGD%2BzCqJX1KQnpNABeFodm3qTgXGrBsVt%2FiIjVLZ1abOCg2sIGSUHHXtsCAPq1ayEwLacI4MTNb2B8054%2BlfN%2FHNyOdKSGYGtDAkMMNuKD3CYo1JgWr%2BAFLFKpoDoX80W8ahO0BIzVgPhlrHqxZcmlsZ5d7JXVIf2dbOAmBoetJrHQq0xlk7100TilbhgUcoqWV19zztOjvQYhwqT%2BMnKfXktUmP1oatn9%2FXr%2FVZsPmY1SfDzMfyiEqm8IRAqv6yG6AIBauXAczAhFgzcEeX5bHTEnGAMKGjnBY5FrP7m1S%2BqVXFgmjGQw%2BLuovQY6pgEstrRSbUpMgmcXfyL6SiRu%2F3UWumk4jmpvxp74YyslwK7FFlMVuT5e430deapVRbzt6WxG5I19txlIqM2QysOm4UZbwwhKWLUjl4VwmB4C%2FSUxFDqx7Z0xOg7F644%2BDP8M5XIOsXtxcaghLVzpeS3pzNt8iDvXy7dxArHEFrurFD7I%2BbznNxbYyQjrrocKW3%2Fm3E8stq2QPBkMUGISsruxqiV0duMG&X-Amz-Signature=c9f0ba976facdf77676bc5e413b182b82ee695a0c9d9b2afa59b5f892ab76e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y63TUIG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7rfy4VP%2FWS2%2FBi5mlWbmctSV5Bz2UZ1pyMYNJeOcBSAiBDYr47ZFXTWFPDak3cY7dh%2FYGDZr3ty0oUc2DPXeH2JyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChgAb5OqjPlfLWSZKtwDeHsvN3iE7agHjZb3M%2BTxrZBPKxBdxkCnYLXRdVZ4bbSJB2xbmCnq2miXbJSXa97Xbn2kUPNU4dLfONA0Lfz3EpdzJq%2BpwmajXubUWUiTAC3idTTn%2BzWbi8Uh1nRjMYlMihOePmNF%2FgRy0%2Fy99QZV8JR%2BKqpss0wkaE2C5MACLSY4gpvAcfhx%2F5Cq0x1dKgQx3f3oVk9RKed088NHfzxDArTsaEKpxaJZL%2FNzkJXHeHFNAWW2Zjve6ZOFzdC%2Bc2ENDkHSrH%2FUAfrKFMpnB3L78GGKh5e95MgAyv9p3chhhYnMOibkFcdlG3TqowYT1cEnGAWQc9tGD%2BzCqJX1KQnpNABeFodm3qTgXGrBsVt%2FiIjVLZ1abOCg2sIGSUHHXtsCAPq1ayEwLacI4MTNb2B8054%2BlfN%2FHNyOdKSGYGtDAkMMNuKD3CYo1JgWr%2BAFLFKpoDoX80W8ahO0BIzVgPhlrHqxZcmlsZ5d7JXVIf2dbOAmBoetJrHQq0xlk7100TilbhgUcoqWV19zztOjvQYhwqT%2BMnKfXktUmP1oatn9%2FXr%2FVZsPmY1SfDzMfyiEqm8IRAqv6yG6AIBauXAczAhFgzcEeX5bHTEnGAMKGjnBY5FrP7m1S%2BqVXFgmjGQw%2BLuovQY6pgEstrRSbUpMgmcXfyL6SiRu%2F3UWumk4jmpvxp74YyslwK7FFlMVuT5e430deapVRbzt6WxG5I19txlIqM2QysOm4UZbwwhKWLUjl4VwmB4C%2FSUxFDqx7Z0xOg7F644%2BDP8M5XIOsXtxcaghLVzpeS3pzNt8iDvXy7dxArHEFrurFD7I%2BbznNxbYyQjrrocKW3%2Fm3E8stq2QPBkMUGISsruxqiV0duMG&X-Amz-Signature=d74f33a1544a6a7055c695addfd09a47c6321954f7f9e824579b669ef6c55e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y63TUIG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7rfy4VP%2FWS2%2FBi5mlWbmctSV5Bz2UZ1pyMYNJeOcBSAiBDYr47ZFXTWFPDak3cY7dh%2FYGDZr3ty0oUc2DPXeH2JyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChgAb5OqjPlfLWSZKtwDeHsvN3iE7agHjZb3M%2BTxrZBPKxBdxkCnYLXRdVZ4bbSJB2xbmCnq2miXbJSXa97Xbn2kUPNU4dLfONA0Lfz3EpdzJq%2BpwmajXubUWUiTAC3idTTn%2BzWbi8Uh1nRjMYlMihOePmNF%2FgRy0%2Fy99QZV8JR%2BKqpss0wkaE2C5MACLSY4gpvAcfhx%2F5Cq0x1dKgQx3f3oVk9RKed088NHfzxDArTsaEKpxaJZL%2FNzkJXHeHFNAWW2Zjve6ZOFzdC%2Bc2ENDkHSrH%2FUAfrKFMpnB3L78GGKh5e95MgAyv9p3chhhYnMOibkFcdlG3TqowYT1cEnGAWQc9tGD%2BzCqJX1KQnpNABeFodm3qTgXGrBsVt%2FiIjVLZ1abOCg2sIGSUHHXtsCAPq1ayEwLacI4MTNb2B8054%2BlfN%2FHNyOdKSGYGtDAkMMNuKD3CYo1JgWr%2BAFLFKpoDoX80W8ahO0BIzVgPhlrHqxZcmlsZ5d7JXVIf2dbOAmBoetJrHQq0xlk7100TilbhgUcoqWV19zztOjvQYhwqT%2BMnKfXktUmP1oatn9%2FXr%2FVZsPmY1SfDzMfyiEqm8IRAqv6yG6AIBauXAczAhFgzcEeX5bHTEnGAMKGjnBY5FrP7m1S%2BqVXFgmjGQw%2BLuovQY6pgEstrRSbUpMgmcXfyL6SiRu%2F3UWumk4jmpvxp74YyslwK7FFlMVuT5e430deapVRbzt6WxG5I19txlIqM2QysOm4UZbwwhKWLUjl4VwmB4C%2FSUxFDqx7Z0xOg7F644%2BDP8M5XIOsXtxcaghLVzpeS3pzNt8iDvXy7dxArHEFrurFD7I%2BbznNxbYyQjrrocKW3%2Fm3E8stq2QPBkMUGISsruxqiV0duMG&X-Amz-Signature=ecc92afa197417f27d4facac9c68f40858ead5959d770dd3b35457e44759fa8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y63TUIG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7rfy4VP%2FWS2%2FBi5mlWbmctSV5Bz2UZ1pyMYNJeOcBSAiBDYr47ZFXTWFPDak3cY7dh%2FYGDZr3ty0oUc2DPXeH2JyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChgAb5OqjPlfLWSZKtwDeHsvN3iE7agHjZb3M%2BTxrZBPKxBdxkCnYLXRdVZ4bbSJB2xbmCnq2miXbJSXa97Xbn2kUPNU4dLfONA0Lfz3EpdzJq%2BpwmajXubUWUiTAC3idTTn%2BzWbi8Uh1nRjMYlMihOePmNF%2FgRy0%2Fy99QZV8JR%2BKqpss0wkaE2C5MACLSY4gpvAcfhx%2F5Cq0x1dKgQx3f3oVk9RKed088NHfzxDArTsaEKpxaJZL%2FNzkJXHeHFNAWW2Zjve6ZOFzdC%2Bc2ENDkHSrH%2FUAfrKFMpnB3L78GGKh5e95MgAyv9p3chhhYnMOibkFcdlG3TqowYT1cEnGAWQc9tGD%2BzCqJX1KQnpNABeFodm3qTgXGrBsVt%2FiIjVLZ1abOCg2sIGSUHHXtsCAPq1ayEwLacI4MTNb2B8054%2BlfN%2FHNyOdKSGYGtDAkMMNuKD3CYo1JgWr%2BAFLFKpoDoX80W8ahO0BIzVgPhlrHqxZcmlsZ5d7JXVIf2dbOAmBoetJrHQq0xlk7100TilbhgUcoqWV19zztOjvQYhwqT%2BMnKfXktUmP1oatn9%2FXr%2FVZsPmY1SfDzMfyiEqm8IRAqv6yG6AIBauXAczAhFgzcEeX5bHTEnGAMKGjnBY5FrP7m1S%2BqVXFgmjGQw%2BLuovQY6pgEstrRSbUpMgmcXfyL6SiRu%2F3UWumk4jmpvxp74YyslwK7FFlMVuT5e430deapVRbzt6WxG5I19txlIqM2QysOm4UZbwwhKWLUjl4VwmB4C%2FSUxFDqx7Z0xOg7F644%2BDP8M5XIOsXtxcaghLVzpeS3pzNt8iDvXy7dxArHEFrurFD7I%2BbznNxbYyQjrrocKW3%2Fm3E8stq2QPBkMUGISsruxqiV0duMG&X-Amz-Signature=891f7f71972521f42117741d16851f043c6f7379295f42f9337b74184f09b25e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y63TUIG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7rfy4VP%2FWS2%2FBi5mlWbmctSV5Bz2UZ1pyMYNJeOcBSAiBDYr47ZFXTWFPDak3cY7dh%2FYGDZr3ty0oUc2DPXeH2JyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChgAb5OqjPlfLWSZKtwDeHsvN3iE7agHjZb3M%2BTxrZBPKxBdxkCnYLXRdVZ4bbSJB2xbmCnq2miXbJSXa97Xbn2kUPNU4dLfONA0Lfz3EpdzJq%2BpwmajXubUWUiTAC3idTTn%2BzWbi8Uh1nRjMYlMihOePmNF%2FgRy0%2Fy99QZV8JR%2BKqpss0wkaE2C5MACLSY4gpvAcfhx%2F5Cq0x1dKgQx3f3oVk9RKed088NHfzxDArTsaEKpxaJZL%2FNzkJXHeHFNAWW2Zjve6ZOFzdC%2Bc2ENDkHSrH%2FUAfrKFMpnB3L78GGKh5e95MgAyv9p3chhhYnMOibkFcdlG3TqowYT1cEnGAWQc9tGD%2BzCqJX1KQnpNABeFodm3qTgXGrBsVt%2FiIjVLZ1abOCg2sIGSUHHXtsCAPq1ayEwLacI4MTNb2B8054%2BlfN%2FHNyOdKSGYGtDAkMMNuKD3CYo1JgWr%2BAFLFKpoDoX80W8ahO0BIzVgPhlrHqxZcmlsZ5d7JXVIf2dbOAmBoetJrHQq0xlk7100TilbhgUcoqWV19zztOjvQYhwqT%2BMnKfXktUmP1oatn9%2FXr%2FVZsPmY1SfDzMfyiEqm8IRAqv6yG6AIBauXAczAhFgzcEeX5bHTEnGAMKGjnBY5FrP7m1S%2BqVXFgmjGQw%2BLuovQY6pgEstrRSbUpMgmcXfyL6SiRu%2F3UWumk4jmpvxp74YyslwK7FFlMVuT5e430deapVRbzt6WxG5I19txlIqM2QysOm4UZbwwhKWLUjl4VwmB4C%2FSUxFDqx7Z0xOg7F644%2BDP8M5XIOsXtxcaghLVzpeS3pzNt8iDvXy7dxArHEFrurFD7I%2BbznNxbYyQjrrocKW3%2Fm3E8stq2QPBkMUGISsruxqiV0duMG&X-Amz-Signature=04e8b4f1e176ec1cebe06380cb1b34fd345b449ba3e84878fd44e5f5dfecbb59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y63TUIG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7rfy4VP%2FWS2%2FBi5mlWbmctSV5Bz2UZ1pyMYNJeOcBSAiBDYr47ZFXTWFPDak3cY7dh%2FYGDZr3ty0oUc2DPXeH2JyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChgAb5OqjPlfLWSZKtwDeHsvN3iE7agHjZb3M%2BTxrZBPKxBdxkCnYLXRdVZ4bbSJB2xbmCnq2miXbJSXa97Xbn2kUPNU4dLfONA0Lfz3EpdzJq%2BpwmajXubUWUiTAC3idTTn%2BzWbi8Uh1nRjMYlMihOePmNF%2FgRy0%2Fy99QZV8JR%2BKqpss0wkaE2C5MACLSY4gpvAcfhx%2F5Cq0x1dKgQx3f3oVk9RKed088NHfzxDArTsaEKpxaJZL%2FNzkJXHeHFNAWW2Zjve6ZOFzdC%2Bc2ENDkHSrH%2FUAfrKFMpnB3L78GGKh5e95MgAyv9p3chhhYnMOibkFcdlG3TqowYT1cEnGAWQc9tGD%2BzCqJX1KQnpNABeFodm3qTgXGrBsVt%2FiIjVLZ1abOCg2sIGSUHHXtsCAPq1ayEwLacI4MTNb2B8054%2BlfN%2FHNyOdKSGYGtDAkMMNuKD3CYo1JgWr%2BAFLFKpoDoX80W8ahO0BIzVgPhlrHqxZcmlsZ5d7JXVIf2dbOAmBoetJrHQq0xlk7100TilbhgUcoqWV19zztOjvQYhwqT%2BMnKfXktUmP1oatn9%2FXr%2FVZsPmY1SfDzMfyiEqm8IRAqv6yG6AIBauXAczAhFgzcEeX5bHTEnGAMKGjnBY5FrP7m1S%2BqVXFgmjGQw%2BLuovQY6pgEstrRSbUpMgmcXfyL6SiRu%2F3UWumk4jmpvxp74YyslwK7FFlMVuT5e430deapVRbzt6WxG5I19txlIqM2QysOm4UZbwwhKWLUjl4VwmB4C%2FSUxFDqx7Z0xOg7F644%2BDP8M5XIOsXtxcaghLVzpeS3pzNt8iDvXy7dxArHEFrurFD7I%2BbznNxbYyQjrrocKW3%2Fm3E8stq2QPBkMUGISsruxqiV0duMG&X-Amz-Signature=42d6c8444a3d3fae5152bbc7a2a0a9e31d13c8e2e7c7e38408eabab34c3d9e51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y63TUIG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7rfy4VP%2FWS2%2FBi5mlWbmctSV5Bz2UZ1pyMYNJeOcBSAiBDYr47ZFXTWFPDak3cY7dh%2FYGDZr3ty0oUc2DPXeH2JyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChgAb5OqjPlfLWSZKtwDeHsvN3iE7agHjZb3M%2BTxrZBPKxBdxkCnYLXRdVZ4bbSJB2xbmCnq2miXbJSXa97Xbn2kUPNU4dLfONA0Lfz3EpdzJq%2BpwmajXubUWUiTAC3idTTn%2BzWbi8Uh1nRjMYlMihOePmNF%2FgRy0%2Fy99QZV8JR%2BKqpss0wkaE2C5MACLSY4gpvAcfhx%2F5Cq0x1dKgQx3f3oVk9RKed088NHfzxDArTsaEKpxaJZL%2FNzkJXHeHFNAWW2Zjve6ZOFzdC%2Bc2ENDkHSrH%2FUAfrKFMpnB3L78GGKh5e95MgAyv9p3chhhYnMOibkFcdlG3TqowYT1cEnGAWQc9tGD%2BzCqJX1KQnpNABeFodm3qTgXGrBsVt%2FiIjVLZ1abOCg2sIGSUHHXtsCAPq1ayEwLacI4MTNb2B8054%2BlfN%2FHNyOdKSGYGtDAkMMNuKD3CYo1JgWr%2BAFLFKpoDoX80W8ahO0BIzVgPhlrHqxZcmlsZ5d7JXVIf2dbOAmBoetJrHQq0xlk7100TilbhgUcoqWV19zztOjvQYhwqT%2BMnKfXktUmP1oatn9%2FXr%2FVZsPmY1SfDzMfyiEqm8IRAqv6yG6AIBauXAczAhFgzcEeX5bHTEnGAMKGjnBY5FrP7m1S%2BqVXFgmjGQw%2BLuovQY6pgEstrRSbUpMgmcXfyL6SiRu%2F3UWumk4jmpvxp74YyslwK7FFlMVuT5e430deapVRbzt6WxG5I19txlIqM2QysOm4UZbwwhKWLUjl4VwmB4C%2FSUxFDqx7Z0xOg7F644%2BDP8M5XIOsXtxcaghLVzpeS3pzNt8iDvXy7dxArHEFrurFD7I%2BbznNxbYyQjrrocKW3%2Fm3E8stq2QPBkMUGISsruxqiV0duMG&X-Amz-Signature=df0a08afc306f2516998190e98f0bc2d21be0b888acbf0a45a8b826c81064708&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
