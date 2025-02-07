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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVF3XWO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCsmGMtqy6YsRCoTN56AiP6bnTAYdVyPsV21BQQh6LpwgIhAK7Lrrkz3yAg3ZKUj7ddaRpTCMVozd9%2FTM90qNv1RSxZKv8DCG8QABoMNjM3NDIzMTgzODA1IgzA3%2BgeYOvAk3i%2BpF0q3APcbLK%2FcUDwr53qBtbwTM981I94DIsIEQ7eO%2F%2FKWVbn601WFOgClToqzaaRWWQXo24USyxa9gP0l84lXiAIOhQnaagsngeKmNGxRx%2F3azo9%2FUIZy8FsK3pa5Eu8tLzfy7Aj2gn58Pil0Dx4r%2BOg%2BJk1THuiCAqdYfP%2BMitOAk7EtTu5zfiGRLawu7YKL0%2FYi3rFvfzE3TgAgdTQyXsbuUaxXJEwEwNWZO7zOnIOK%2BBmmTcE6DUfFIa1wLf6xFn5knNZtboL5K6%2FJdqThJIaP2rkfCHVAFcAKR3Gyqf2%2FovyuK1Hp%2FZinfMHZ76Fbf2aIXAS4dYjK%2Fz1S%2FK%2BPoW7idciY0X69ke5X2C%2BkvVK%2FQ2GtpCRSqTfRIO2u5RGpbTY9%2FMd%2BZBxU%2BWa4Sz2bd1FMuvLf1lKA7iOSJ88qmQ9dYSqE32PXaqSFU%2B2x%2FX%2FJRTZjGijF9P5d2Bz2oR6sohznmAMnAMjMIm43ybAKEkv9dCAj1NBZSMXHaPXEKRg8gfWId0wlYDElkf6XHSBafCOpad4MY2tns2puAxf9VWY3%2Btkx5uNOlHFFHJguLN4zbs7r4ThmVZyV30eJKjPRQGoaE1FbXuwqeGGlNSUiSLsXOAVhRw4YNiUOFByyG6QdDD5wZa9BjqkAZzMRcq5excsyGdZYwZXOveq78FxiDS2EIHIUMP4HJrXLNu6%2Fy3LPSvprEny2rFjI7rD1a2cPRll%2Fz41znQ6OcCm5lk890FCu7f%2BPfY7S3Ec78f2uaVQ1Y3DoBS4u6h792oVRZcbkj3qdv6ga8GqZYx2BRTWn9DajPVeB4m1GfUG1GEDGvTHmnz1bT8I3AgUwHBAg2jFW9VGXrxPIJ0RsL4ZmhJT&X-Amz-Signature=02a6e1bdbbee40c312407ced37b206ea7ba01b85aab04dd4856dd40025aeb43f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVF3XWO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCsmGMtqy6YsRCoTN56AiP6bnTAYdVyPsV21BQQh6LpwgIhAK7Lrrkz3yAg3ZKUj7ddaRpTCMVozd9%2FTM90qNv1RSxZKv8DCG8QABoMNjM3NDIzMTgzODA1IgzA3%2BgeYOvAk3i%2BpF0q3APcbLK%2FcUDwr53qBtbwTM981I94DIsIEQ7eO%2F%2FKWVbn601WFOgClToqzaaRWWQXo24USyxa9gP0l84lXiAIOhQnaagsngeKmNGxRx%2F3azo9%2FUIZy8FsK3pa5Eu8tLzfy7Aj2gn58Pil0Dx4r%2BOg%2BJk1THuiCAqdYfP%2BMitOAk7EtTu5zfiGRLawu7YKL0%2FYi3rFvfzE3TgAgdTQyXsbuUaxXJEwEwNWZO7zOnIOK%2BBmmTcE6DUfFIa1wLf6xFn5knNZtboL5K6%2FJdqThJIaP2rkfCHVAFcAKR3Gyqf2%2FovyuK1Hp%2FZinfMHZ76Fbf2aIXAS4dYjK%2Fz1S%2FK%2BPoW7idciY0X69ke5X2C%2BkvVK%2FQ2GtpCRSqTfRIO2u5RGpbTY9%2FMd%2BZBxU%2BWa4Sz2bd1FMuvLf1lKA7iOSJ88qmQ9dYSqE32PXaqSFU%2B2x%2FX%2FJRTZjGijF9P5d2Bz2oR6sohznmAMnAMjMIm43ybAKEkv9dCAj1NBZSMXHaPXEKRg8gfWId0wlYDElkf6XHSBafCOpad4MY2tns2puAxf9VWY3%2Btkx5uNOlHFFHJguLN4zbs7r4ThmVZyV30eJKjPRQGoaE1FbXuwqeGGlNSUiSLsXOAVhRw4YNiUOFByyG6QdDD5wZa9BjqkAZzMRcq5excsyGdZYwZXOveq78FxiDS2EIHIUMP4HJrXLNu6%2Fy3LPSvprEny2rFjI7rD1a2cPRll%2Fz41znQ6OcCm5lk890FCu7f%2BPfY7S3Ec78f2uaVQ1Y3DoBS4u6h792oVRZcbkj3qdv6ga8GqZYx2BRTWn9DajPVeB4m1GfUG1GEDGvTHmnz1bT8I3AgUwHBAg2jFW9VGXrxPIJ0RsL4ZmhJT&X-Amz-Signature=be1a0b147f5011ca21ff17220af1bd5e28fc531876304cb871dc8ec9a8c64c82&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVF3XWO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCsmGMtqy6YsRCoTN56AiP6bnTAYdVyPsV21BQQh6LpwgIhAK7Lrrkz3yAg3ZKUj7ddaRpTCMVozd9%2FTM90qNv1RSxZKv8DCG8QABoMNjM3NDIzMTgzODA1IgzA3%2BgeYOvAk3i%2BpF0q3APcbLK%2FcUDwr53qBtbwTM981I94DIsIEQ7eO%2F%2FKWVbn601WFOgClToqzaaRWWQXo24USyxa9gP0l84lXiAIOhQnaagsngeKmNGxRx%2F3azo9%2FUIZy8FsK3pa5Eu8tLzfy7Aj2gn58Pil0Dx4r%2BOg%2BJk1THuiCAqdYfP%2BMitOAk7EtTu5zfiGRLawu7YKL0%2FYi3rFvfzE3TgAgdTQyXsbuUaxXJEwEwNWZO7zOnIOK%2BBmmTcE6DUfFIa1wLf6xFn5knNZtboL5K6%2FJdqThJIaP2rkfCHVAFcAKR3Gyqf2%2FovyuK1Hp%2FZinfMHZ76Fbf2aIXAS4dYjK%2Fz1S%2FK%2BPoW7idciY0X69ke5X2C%2BkvVK%2FQ2GtpCRSqTfRIO2u5RGpbTY9%2FMd%2BZBxU%2BWa4Sz2bd1FMuvLf1lKA7iOSJ88qmQ9dYSqE32PXaqSFU%2B2x%2FX%2FJRTZjGijF9P5d2Bz2oR6sohznmAMnAMjMIm43ybAKEkv9dCAj1NBZSMXHaPXEKRg8gfWId0wlYDElkf6XHSBafCOpad4MY2tns2puAxf9VWY3%2Btkx5uNOlHFFHJguLN4zbs7r4ThmVZyV30eJKjPRQGoaE1FbXuwqeGGlNSUiSLsXOAVhRw4YNiUOFByyG6QdDD5wZa9BjqkAZzMRcq5excsyGdZYwZXOveq78FxiDS2EIHIUMP4HJrXLNu6%2Fy3LPSvprEny2rFjI7rD1a2cPRll%2Fz41znQ6OcCm5lk890FCu7f%2BPfY7S3Ec78f2uaVQ1Y3DoBS4u6h792oVRZcbkj3qdv6ga8GqZYx2BRTWn9DajPVeB4m1GfUG1GEDGvTHmnz1bT8I3AgUwHBAg2jFW9VGXrxPIJ0RsL4ZmhJT&X-Amz-Signature=a9fa9d5a98efd7028c37156fec99130b2820e9495c5f70953cff849ac4a0447e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVF3XWO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCsmGMtqy6YsRCoTN56AiP6bnTAYdVyPsV21BQQh6LpwgIhAK7Lrrkz3yAg3ZKUj7ddaRpTCMVozd9%2FTM90qNv1RSxZKv8DCG8QABoMNjM3NDIzMTgzODA1IgzA3%2BgeYOvAk3i%2BpF0q3APcbLK%2FcUDwr53qBtbwTM981I94DIsIEQ7eO%2F%2FKWVbn601WFOgClToqzaaRWWQXo24USyxa9gP0l84lXiAIOhQnaagsngeKmNGxRx%2F3azo9%2FUIZy8FsK3pa5Eu8tLzfy7Aj2gn58Pil0Dx4r%2BOg%2BJk1THuiCAqdYfP%2BMitOAk7EtTu5zfiGRLawu7YKL0%2FYi3rFvfzE3TgAgdTQyXsbuUaxXJEwEwNWZO7zOnIOK%2BBmmTcE6DUfFIa1wLf6xFn5knNZtboL5K6%2FJdqThJIaP2rkfCHVAFcAKR3Gyqf2%2FovyuK1Hp%2FZinfMHZ76Fbf2aIXAS4dYjK%2Fz1S%2FK%2BPoW7idciY0X69ke5X2C%2BkvVK%2FQ2GtpCRSqTfRIO2u5RGpbTY9%2FMd%2BZBxU%2BWa4Sz2bd1FMuvLf1lKA7iOSJ88qmQ9dYSqE32PXaqSFU%2B2x%2FX%2FJRTZjGijF9P5d2Bz2oR6sohznmAMnAMjMIm43ybAKEkv9dCAj1NBZSMXHaPXEKRg8gfWId0wlYDElkf6XHSBafCOpad4MY2tns2puAxf9VWY3%2Btkx5uNOlHFFHJguLN4zbs7r4ThmVZyV30eJKjPRQGoaE1FbXuwqeGGlNSUiSLsXOAVhRw4YNiUOFByyG6QdDD5wZa9BjqkAZzMRcq5excsyGdZYwZXOveq78FxiDS2EIHIUMP4HJrXLNu6%2Fy3LPSvprEny2rFjI7rD1a2cPRll%2Fz41znQ6OcCm5lk890FCu7f%2BPfY7S3Ec78f2uaVQ1Y3DoBS4u6h792oVRZcbkj3qdv6ga8GqZYx2BRTWn9DajPVeB4m1GfUG1GEDGvTHmnz1bT8I3AgUwHBAg2jFW9VGXrxPIJ0RsL4ZmhJT&X-Amz-Signature=d47e78c91f11e5932d00da47ead89c7ccac7efd6b8ffbe80f4c11841e0e3e297&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVF3XWO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCsmGMtqy6YsRCoTN56AiP6bnTAYdVyPsV21BQQh6LpwgIhAK7Lrrkz3yAg3ZKUj7ddaRpTCMVozd9%2FTM90qNv1RSxZKv8DCG8QABoMNjM3NDIzMTgzODA1IgzA3%2BgeYOvAk3i%2BpF0q3APcbLK%2FcUDwr53qBtbwTM981I94DIsIEQ7eO%2F%2FKWVbn601WFOgClToqzaaRWWQXo24USyxa9gP0l84lXiAIOhQnaagsngeKmNGxRx%2F3azo9%2FUIZy8FsK3pa5Eu8tLzfy7Aj2gn58Pil0Dx4r%2BOg%2BJk1THuiCAqdYfP%2BMitOAk7EtTu5zfiGRLawu7YKL0%2FYi3rFvfzE3TgAgdTQyXsbuUaxXJEwEwNWZO7zOnIOK%2BBmmTcE6DUfFIa1wLf6xFn5knNZtboL5K6%2FJdqThJIaP2rkfCHVAFcAKR3Gyqf2%2FovyuK1Hp%2FZinfMHZ76Fbf2aIXAS4dYjK%2Fz1S%2FK%2BPoW7idciY0X69ke5X2C%2BkvVK%2FQ2GtpCRSqTfRIO2u5RGpbTY9%2FMd%2BZBxU%2BWa4Sz2bd1FMuvLf1lKA7iOSJ88qmQ9dYSqE32PXaqSFU%2B2x%2FX%2FJRTZjGijF9P5d2Bz2oR6sohznmAMnAMjMIm43ybAKEkv9dCAj1NBZSMXHaPXEKRg8gfWId0wlYDElkf6XHSBafCOpad4MY2tns2puAxf9VWY3%2Btkx5uNOlHFFHJguLN4zbs7r4ThmVZyV30eJKjPRQGoaE1FbXuwqeGGlNSUiSLsXOAVhRw4YNiUOFByyG6QdDD5wZa9BjqkAZzMRcq5excsyGdZYwZXOveq78FxiDS2EIHIUMP4HJrXLNu6%2Fy3LPSvprEny2rFjI7rD1a2cPRll%2Fz41znQ6OcCm5lk890FCu7f%2BPfY7S3Ec78f2uaVQ1Y3DoBS4u6h792oVRZcbkj3qdv6ga8GqZYx2BRTWn9DajPVeB4m1GfUG1GEDGvTHmnz1bT8I3AgUwHBAg2jFW9VGXrxPIJ0RsL4ZmhJT&X-Amz-Signature=d638852e2236bd6751e4e2963298a16d13a55a1577c9145df7eabfcb24eb0d62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVF3XWO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCsmGMtqy6YsRCoTN56AiP6bnTAYdVyPsV21BQQh6LpwgIhAK7Lrrkz3yAg3ZKUj7ddaRpTCMVozd9%2FTM90qNv1RSxZKv8DCG8QABoMNjM3NDIzMTgzODA1IgzA3%2BgeYOvAk3i%2BpF0q3APcbLK%2FcUDwr53qBtbwTM981I94DIsIEQ7eO%2F%2FKWVbn601WFOgClToqzaaRWWQXo24USyxa9gP0l84lXiAIOhQnaagsngeKmNGxRx%2F3azo9%2FUIZy8FsK3pa5Eu8tLzfy7Aj2gn58Pil0Dx4r%2BOg%2BJk1THuiCAqdYfP%2BMitOAk7EtTu5zfiGRLawu7YKL0%2FYi3rFvfzE3TgAgdTQyXsbuUaxXJEwEwNWZO7zOnIOK%2BBmmTcE6DUfFIa1wLf6xFn5knNZtboL5K6%2FJdqThJIaP2rkfCHVAFcAKR3Gyqf2%2FovyuK1Hp%2FZinfMHZ76Fbf2aIXAS4dYjK%2Fz1S%2FK%2BPoW7idciY0X69ke5X2C%2BkvVK%2FQ2GtpCRSqTfRIO2u5RGpbTY9%2FMd%2BZBxU%2BWa4Sz2bd1FMuvLf1lKA7iOSJ88qmQ9dYSqE32PXaqSFU%2B2x%2FX%2FJRTZjGijF9P5d2Bz2oR6sohznmAMnAMjMIm43ybAKEkv9dCAj1NBZSMXHaPXEKRg8gfWId0wlYDElkf6XHSBafCOpad4MY2tns2puAxf9VWY3%2Btkx5uNOlHFFHJguLN4zbs7r4ThmVZyV30eJKjPRQGoaE1FbXuwqeGGlNSUiSLsXOAVhRw4YNiUOFByyG6QdDD5wZa9BjqkAZzMRcq5excsyGdZYwZXOveq78FxiDS2EIHIUMP4HJrXLNu6%2Fy3LPSvprEny2rFjI7rD1a2cPRll%2Fz41znQ6OcCm5lk890FCu7f%2BPfY7S3Ec78f2uaVQ1Y3DoBS4u6h792oVRZcbkj3qdv6ga8GqZYx2BRTWn9DajPVeB4m1GfUG1GEDGvTHmnz1bT8I3AgUwHBAg2jFW9VGXrxPIJ0RsL4ZmhJT&X-Amz-Signature=90103d4ea38372cfc941d41d641e9224e396e852ec77f1d42e6f0894f43c1965&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVF3XWO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCsmGMtqy6YsRCoTN56AiP6bnTAYdVyPsV21BQQh6LpwgIhAK7Lrrkz3yAg3ZKUj7ddaRpTCMVozd9%2FTM90qNv1RSxZKv8DCG8QABoMNjM3NDIzMTgzODA1IgzA3%2BgeYOvAk3i%2BpF0q3APcbLK%2FcUDwr53qBtbwTM981I94DIsIEQ7eO%2F%2FKWVbn601WFOgClToqzaaRWWQXo24USyxa9gP0l84lXiAIOhQnaagsngeKmNGxRx%2F3azo9%2FUIZy8FsK3pa5Eu8tLzfy7Aj2gn58Pil0Dx4r%2BOg%2BJk1THuiCAqdYfP%2BMitOAk7EtTu5zfiGRLawu7YKL0%2FYi3rFvfzE3TgAgdTQyXsbuUaxXJEwEwNWZO7zOnIOK%2BBmmTcE6DUfFIa1wLf6xFn5knNZtboL5K6%2FJdqThJIaP2rkfCHVAFcAKR3Gyqf2%2FovyuK1Hp%2FZinfMHZ76Fbf2aIXAS4dYjK%2Fz1S%2FK%2BPoW7idciY0X69ke5X2C%2BkvVK%2FQ2GtpCRSqTfRIO2u5RGpbTY9%2FMd%2BZBxU%2BWa4Sz2bd1FMuvLf1lKA7iOSJ88qmQ9dYSqE32PXaqSFU%2B2x%2FX%2FJRTZjGijF9P5d2Bz2oR6sohznmAMnAMjMIm43ybAKEkv9dCAj1NBZSMXHaPXEKRg8gfWId0wlYDElkf6XHSBafCOpad4MY2tns2puAxf9VWY3%2Btkx5uNOlHFFHJguLN4zbs7r4ThmVZyV30eJKjPRQGoaE1FbXuwqeGGlNSUiSLsXOAVhRw4YNiUOFByyG6QdDD5wZa9BjqkAZzMRcq5excsyGdZYwZXOveq78FxiDS2EIHIUMP4HJrXLNu6%2Fy3LPSvprEny2rFjI7rD1a2cPRll%2Fz41znQ6OcCm5lk890FCu7f%2BPfY7S3Ec78f2uaVQ1Y3DoBS4u6h792oVRZcbkj3qdv6ga8GqZYx2BRTWn9DajPVeB4m1GfUG1GEDGvTHmnz1bT8I3AgUwHBAg2jFW9VGXrxPIJ0RsL4ZmhJT&X-Amz-Signature=5d95ff63a558f53972ec4e176958841d613ec7609f662a3a7232d9b37cfded9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVF3XWO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCsmGMtqy6YsRCoTN56AiP6bnTAYdVyPsV21BQQh6LpwgIhAK7Lrrkz3yAg3ZKUj7ddaRpTCMVozd9%2FTM90qNv1RSxZKv8DCG8QABoMNjM3NDIzMTgzODA1IgzA3%2BgeYOvAk3i%2BpF0q3APcbLK%2FcUDwr53qBtbwTM981I94DIsIEQ7eO%2F%2FKWVbn601WFOgClToqzaaRWWQXo24USyxa9gP0l84lXiAIOhQnaagsngeKmNGxRx%2F3azo9%2FUIZy8FsK3pa5Eu8tLzfy7Aj2gn58Pil0Dx4r%2BOg%2BJk1THuiCAqdYfP%2BMitOAk7EtTu5zfiGRLawu7YKL0%2FYi3rFvfzE3TgAgdTQyXsbuUaxXJEwEwNWZO7zOnIOK%2BBmmTcE6DUfFIa1wLf6xFn5knNZtboL5K6%2FJdqThJIaP2rkfCHVAFcAKR3Gyqf2%2FovyuK1Hp%2FZinfMHZ76Fbf2aIXAS4dYjK%2Fz1S%2FK%2BPoW7idciY0X69ke5X2C%2BkvVK%2FQ2GtpCRSqTfRIO2u5RGpbTY9%2FMd%2BZBxU%2BWa4Sz2bd1FMuvLf1lKA7iOSJ88qmQ9dYSqE32PXaqSFU%2B2x%2FX%2FJRTZjGijF9P5d2Bz2oR6sohznmAMnAMjMIm43ybAKEkv9dCAj1NBZSMXHaPXEKRg8gfWId0wlYDElkf6XHSBafCOpad4MY2tns2puAxf9VWY3%2Btkx5uNOlHFFHJguLN4zbs7r4ThmVZyV30eJKjPRQGoaE1FbXuwqeGGlNSUiSLsXOAVhRw4YNiUOFByyG6QdDD5wZa9BjqkAZzMRcq5excsyGdZYwZXOveq78FxiDS2EIHIUMP4HJrXLNu6%2Fy3LPSvprEny2rFjI7rD1a2cPRll%2Fz41znQ6OcCm5lk890FCu7f%2BPfY7S3Ec78f2uaVQ1Y3DoBS4u6h792oVRZcbkj3qdv6ga8GqZYx2BRTWn9DajPVeB4m1GfUG1GEDGvTHmnz1bT8I3AgUwHBAg2jFW9VGXrxPIJ0RsL4ZmhJT&X-Amz-Signature=7c802093ed3a3f0f8ee8b0130f638a1966fbefed3eb9d37119140ad4860398eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
