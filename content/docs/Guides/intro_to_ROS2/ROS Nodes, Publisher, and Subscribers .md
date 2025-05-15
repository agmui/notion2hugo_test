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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OUBNJ7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjuQFgd%2BM2oMO3SM5MAXOjwMQ8ZF4aBPTOJLFsJpDPiQIhAN6u%2F1uVEKo2pnYA3WZ%2BTxFAT5RvBHXnDT8z57oA2MaCKv8DCCgQABoMNjM3NDIzMTgzODA1Igy%2FlGaL0lkNXO8cXpcq3AMvWW77BLXIxOxKu3bdS8CXSBb%2BsZFAGb7BccaPwMXDSVzK9QrUk6u3KD%2FO%2FuR6h%2FZpmhWeEiBrPnFE84PP2ZaRV20FZVXW0u71dDo31qlmDE%2FgId0yz9SGbvVcUd4bCkavrFcqlyMay70iTkXyhSCqSr9YGPKHcqKpQ6p6OU0l6sT4AMFJPhCLTPnmEuvTYmmkbafzB89rm6lkQ1kWTW%2BKmoc9wqneOOEKfka0rBt%2BdhXNPzR9iRYd0uWqV9jmyxLhIPTy93ekdHMhqiCf21fiH1or%2BNLE7I%2B5pGEFEJc75AOC0IJ354iTjni%2F9GjfRnODaX0fNG4HsJK7BccR%2FyujsC%2Bp85U2QefthLwS1WlVV0NyDw%2BpUCSg3Lc7PAAtAwQrkCbuvPgKb%2FjNjo5%2FjFSWJKnGR2K33E%2FQxhX23LvBNk93naZ%2FvLYj0bnwv2WR%2F4eZ9aZE4KQrKaRDbbO3GECfObDrMWn6bw5fSs59j8sR5ImY5IycxfOzjq91sOveRelkpY1BSx43BhlQDOII0pzjG3GoRoN4vZ7q9dkqoLJ%2B1F0mPMAVDOdYU5KlCt6%2FnfNltojiBM1ZNJVdOil7FhT1ZiitJFM9zAgSlDfqFAFtJ6o%2FEAkleCsTNtNPSDDlnJbBBjqkATMNofXilIsBnT0%2FKfk4RhbkdYPa6pQ%2Fzn5tJ8lCI0v6FVJZaak4wHZbt%2B17W2DSRgdbMeKP1ICG5nbJe%2FsSAVXOWgEo%2F9ehDjx9W9w%2FWXp8jxbFIf9X%2B45OvMF0A9ysbVWIjfBokOw0UMalm4j3KYGbwhMFl0tGn7L1M4%2BHE%2BgXdn5gT8wxlThLgN0enNDcPs9luVV8snguvuUJlC8OV0iZ3qec&X-Amz-Signature=a8d2bb84630f9e9e8ac14ffbe33c18210f1382eac67f13429db3773dee746dce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OUBNJ7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjuQFgd%2BM2oMO3SM5MAXOjwMQ8ZF4aBPTOJLFsJpDPiQIhAN6u%2F1uVEKo2pnYA3WZ%2BTxFAT5RvBHXnDT8z57oA2MaCKv8DCCgQABoMNjM3NDIzMTgzODA1Igy%2FlGaL0lkNXO8cXpcq3AMvWW77BLXIxOxKu3bdS8CXSBb%2BsZFAGb7BccaPwMXDSVzK9QrUk6u3KD%2FO%2FuR6h%2FZpmhWeEiBrPnFE84PP2ZaRV20FZVXW0u71dDo31qlmDE%2FgId0yz9SGbvVcUd4bCkavrFcqlyMay70iTkXyhSCqSr9YGPKHcqKpQ6p6OU0l6sT4AMFJPhCLTPnmEuvTYmmkbafzB89rm6lkQ1kWTW%2BKmoc9wqneOOEKfka0rBt%2BdhXNPzR9iRYd0uWqV9jmyxLhIPTy93ekdHMhqiCf21fiH1or%2BNLE7I%2B5pGEFEJc75AOC0IJ354iTjni%2F9GjfRnODaX0fNG4HsJK7BccR%2FyujsC%2Bp85U2QefthLwS1WlVV0NyDw%2BpUCSg3Lc7PAAtAwQrkCbuvPgKb%2FjNjo5%2FjFSWJKnGR2K33E%2FQxhX23LvBNk93naZ%2FvLYj0bnwv2WR%2F4eZ9aZE4KQrKaRDbbO3GECfObDrMWn6bw5fSs59j8sR5ImY5IycxfOzjq91sOveRelkpY1BSx43BhlQDOII0pzjG3GoRoN4vZ7q9dkqoLJ%2B1F0mPMAVDOdYU5KlCt6%2FnfNltojiBM1ZNJVdOil7FhT1ZiitJFM9zAgSlDfqFAFtJ6o%2FEAkleCsTNtNPSDDlnJbBBjqkATMNofXilIsBnT0%2FKfk4RhbkdYPa6pQ%2Fzn5tJ8lCI0v6FVJZaak4wHZbt%2B17W2DSRgdbMeKP1ICG5nbJe%2FsSAVXOWgEo%2F9ehDjx9W9w%2FWXp8jxbFIf9X%2B45OvMF0A9ysbVWIjfBokOw0UMalm4j3KYGbwhMFl0tGn7L1M4%2BHE%2BgXdn5gT8wxlThLgN0enNDcPs9luVV8snguvuUJlC8OV0iZ3qec&X-Amz-Signature=3d3f45a6a627ad1f0fa985558debba39286e39e6baf7e4d2db6a8ef319d9ab4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OUBNJ7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjuQFgd%2BM2oMO3SM5MAXOjwMQ8ZF4aBPTOJLFsJpDPiQIhAN6u%2F1uVEKo2pnYA3WZ%2BTxFAT5RvBHXnDT8z57oA2MaCKv8DCCgQABoMNjM3NDIzMTgzODA1Igy%2FlGaL0lkNXO8cXpcq3AMvWW77BLXIxOxKu3bdS8CXSBb%2BsZFAGb7BccaPwMXDSVzK9QrUk6u3KD%2FO%2FuR6h%2FZpmhWeEiBrPnFE84PP2ZaRV20FZVXW0u71dDo31qlmDE%2FgId0yz9SGbvVcUd4bCkavrFcqlyMay70iTkXyhSCqSr9YGPKHcqKpQ6p6OU0l6sT4AMFJPhCLTPnmEuvTYmmkbafzB89rm6lkQ1kWTW%2BKmoc9wqneOOEKfka0rBt%2BdhXNPzR9iRYd0uWqV9jmyxLhIPTy93ekdHMhqiCf21fiH1or%2BNLE7I%2B5pGEFEJc75AOC0IJ354iTjni%2F9GjfRnODaX0fNG4HsJK7BccR%2FyujsC%2Bp85U2QefthLwS1WlVV0NyDw%2BpUCSg3Lc7PAAtAwQrkCbuvPgKb%2FjNjo5%2FjFSWJKnGR2K33E%2FQxhX23LvBNk93naZ%2FvLYj0bnwv2WR%2F4eZ9aZE4KQrKaRDbbO3GECfObDrMWn6bw5fSs59j8sR5ImY5IycxfOzjq91sOveRelkpY1BSx43BhlQDOII0pzjG3GoRoN4vZ7q9dkqoLJ%2B1F0mPMAVDOdYU5KlCt6%2FnfNltojiBM1ZNJVdOil7FhT1ZiitJFM9zAgSlDfqFAFtJ6o%2FEAkleCsTNtNPSDDlnJbBBjqkATMNofXilIsBnT0%2FKfk4RhbkdYPa6pQ%2Fzn5tJ8lCI0v6FVJZaak4wHZbt%2B17W2DSRgdbMeKP1ICG5nbJe%2FsSAVXOWgEo%2F9ehDjx9W9w%2FWXp8jxbFIf9X%2B45OvMF0A9ysbVWIjfBokOw0UMalm4j3KYGbwhMFl0tGn7L1M4%2BHE%2BgXdn5gT8wxlThLgN0enNDcPs9luVV8snguvuUJlC8OV0iZ3qec&X-Amz-Signature=0932c6e33719c2efa486ce2bb206a620ff997499c22d336868b3889402b1c9a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OUBNJ7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjuQFgd%2BM2oMO3SM5MAXOjwMQ8ZF4aBPTOJLFsJpDPiQIhAN6u%2F1uVEKo2pnYA3WZ%2BTxFAT5RvBHXnDT8z57oA2MaCKv8DCCgQABoMNjM3NDIzMTgzODA1Igy%2FlGaL0lkNXO8cXpcq3AMvWW77BLXIxOxKu3bdS8CXSBb%2BsZFAGb7BccaPwMXDSVzK9QrUk6u3KD%2FO%2FuR6h%2FZpmhWeEiBrPnFE84PP2ZaRV20FZVXW0u71dDo31qlmDE%2FgId0yz9SGbvVcUd4bCkavrFcqlyMay70iTkXyhSCqSr9YGPKHcqKpQ6p6OU0l6sT4AMFJPhCLTPnmEuvTYmmkbafzB89rm6lkQ1kWTW%2BKmoc9wqneOOEKfka0rBt%2BdhXNPzR9iRYd0uWqV9jmyxLhIPTy93ekdHMhqiCf21fiH1or%2BNLE7I%2B5pGEFEJc75AOC0IJ354iTjni%2F9GjfRnODaX0fNG4HsJK7BccR%2FyujsC%2Bp85U2QefthLwS1WlVV0NyDw%2BpUCSg3Lc7PAAtAwQrkCbuvPgKb%2FjNjo5%2FjFSWJKnGR2K33E%2FQxhX23LvBNk93naZ%2FvLYj0bnwv2WR%2F4eZ9aZE4KQrKaRDbbO3GECfObDrMWn6bw5fSs59j8sR5ImY5IycxfOzjq91sOveRelkpY1BSx43BhlQDOII0pzjG3GoRoN4vZ7q9dkqoLJ%2B1F0mPMAVDOdYU5KlCt6%2FnfNltojiBM1ZNJVdOil7FhT1ZiitJFM9zAgSlDfqFAFtJ6o%2FEAkleCsTNtNPSDDlnJbBBjqkATMNofXilIsBnT0%2FKfk4RhbkdYPa6pQ%2Fzn5tJ8lCI0v6FVJZaak4wHZbt%2B17W2DSRgdbMeKP1ICG5nbJe%2FsSAVXOWgEo%2F9ehDjx9W9w%2FWXp8jxbFIf9X%2B45OvMF0A9ysbVWIjfBokOw0UMalm4j3KYGbwhMFl0tGn7L1M4%2BHE%2BgXdn5gT8wxlThLgN0enNDcPs9luVV8snguvuUJlC8OV0iZ3qec&X-Amz-Signature=179cf4375b123c1a4e6a156c6d6ad8b251d1397c02ddfd1e7275f899fe1a79cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OUBNJ7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjuQFgd%2BM2oMO3SM5MAXOjwMQ8ZF4aBPTOJLFsJpDPiQIhAN6u%2F1uVEKo2pnYA3WZ%2BTxFAT5RvBHXnDT8z57oA2MaCKv8DCCgQABoMNjM3NDIzMTgzODA1Igy%2FlGaL0lkNXO8cXpcq3AMvWW77BLXIxOxKu3bdS8CXSBb%2BsZFAGb7BccaPwMXDSVzK9QrUk6u3KD%2FO%2FuR6h%2FZpmhWeEiBrPnFE84PP2ZaRV20FZVXW0u71dDo31qlmDE%2FgId0yz9SGbvVcUd4bCkavrFcqlyMay70iTkXyhSCqSr9YGPKHcqKpQ6p6OU0l6sT4AMFJPhCLTPnmEuvTYmmkbafzB89rm6lkQ1kWTW%2BKmoc9wqneOOEKfka0rBt%2BdhXNPzR9iRYd0uWqV9jmyxLhIPTy93ekdHMhqiCf21fiH1or%2BNLE7I%2B5pGEFEJc75AOC0IJ354iTjni%2F9GjfRnODaX0fNG4HsJK7BccR%2FyujsC%2Bp85U2QefthLwS1WlVV0NyDw%2BpUCSg3Lc7PAAtAwQrkCbuvPgKb%2FjNjo5%2FjFSWJKnGR2K33E%2FQxhX23LvBNk93naZ%2FvLYj0bnwv2WR%2F4eZ9aZE4KQrKaRDbbO3GECfObDrMWn6bw5fSs59j8sR5ImY5IycxfOzjq91sOveRelkpY1BSx43BhlQDOII0pzjG3GoRoN4vZ7q9dkqoLJ%2B1F0mPMAVDOdYU5KlCt6%2FnfNltojiBM1ZNJVdOil7FhT1ZiitJFM9zAgSlDfqFAFtJ6o%2FEAkleCsTNtNPSDDlnJbBBjqkATMNofXilIsBnT0%2FKfk4RhbkdYPa6pQ%2Fzn5tJ8lCI0v6FVJZaak4wHZbt%2B17W2DSRgdbMeKP1ICG5nbJe%2FsSAVXOWgEo%2F9ehDjx9W9w%2FWXp8jxbFIf9X%2B45OvMF0A9ysbVWIjfBokOw0UMalm4j3KYGbwhMFl0tGn7L1M4%2BHE%2BgXdn5gT8wxlThLgN0enNDcPs9luVV8snguvuUJlC8OV0iZ3qec&X-Amz-Signature=3f674d5b4c0901086fe93050a8ffebfad2ac6eea32e96b2020592028d44b8294&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OUBNJ7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjuQFgd%2BM2oMO3SM5MAXOjwMQ8ZF4aBPTOJLFsJpDPiQIhAN6u%2F1uVEKo2pnYA3WZ%2BTxFAT5RvBHXnDT8z57oA2MaCKv8DCCgQABoMNjM3NDIzMTgzODA1Igy%2FlGaL0lkNXO8cXpcq3AMvWW77BLXIxOxKu3bdS8CXSBb%2BsZFAGb7BccaPwMXDSVzK9QrUk6u3KD%2FO%2FuR6h%2FZpmhWeEiBrPnFE84PP2ZaRV20FZVXW0u71dDo31qlmDE%2FgId0yz9SGbvVcUd4bCkavrFcqlyMay70iTkXyhSCqSr9YGPKHcqKpQ6p6OU0l6sT4AMFJPhCLTPnmEuvTYmmkbafzB89rm6lkQ1kWTW%2BKmoc9wqneOOEKfka0rBt%2BdhXNPzR9iRYd0uWqV9jmyxLhIPTy93ekdHMhqiCf21fiH1or%2BNLE7I%2B5pGEFEJc75AOC0IJ354iTjni%2F9GjfRnODaX0fNG4HsJK7BccR%2FyujsC%2Bp85U2QefthLwS1WlVV0NyDw%2BpUCSg3Lc7PAAtAwQrkCbuvPgKb%2FjNjo5%2FjFSWJKnGR2K33E%2FQxhX23LvBNk93naZ%2FvLYj0bnwv2WR%2F4eZ9aZE4KQrKaRDbbO3GECfObDrMWn6bw5fSs59j8sR5ImY5IycxfOzjq91sOveRelkpY1BSx43BhlQDOII0pzjG3GoRoN4vZ7q9dkqoLJ%2B1F0mPMAVDOdYU5KlCt6%2FnfNltojiBM1ZNJVdOil7FhT1ZiitJFM9zAgSlDfqFAFtJ6o%2FEAkleCsTNtNPSDDlnJbBBjqkATMNofXilIsBnT0%2FKfk4RhbkdYPa6pQ%2Fzn5tJ8lCI0v6FVJZaak4wHZbt%2B17W2DSRgdbMeKP1ICG5nbJe%2FsSAVXOWgEo%2F9ehDjx9W9w%2FWXp8jxbFIf9X%2B45OvMF0A9ysbVWIjfBokOw0UMalm4j3KYGbwhMFl0tGn7L1M4%2BHE%2BgXdn5gT8wxlThLgN0enNDcPs9luVV8snguvuUJlC8OV0iZ3qec&X-Amz-Signature=6e90c3ba6cc0a7da5c2470da7c05dedf3f26e6925d0e00bc540f43b38b16d52e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OUBNJ7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjuQFgd%2BM2oMO3SM5MAXOjwMQ8ZF4aBPTOJLFsJpDPiQIhAN6u%2F1uVEKo2pnYA3WZ%2BTxFAT5RvBHXnDT8z57oA2MaCKv8DCCgQABoMNjM3NDIzMTgzODA1Igy%2FlGaL0lkNXO8cXpcq3AMvWW77BLXIxOxKu3bdS8CXSBb%2BsZFAGb7BccaPwMXDSVzK9QrUk6u3KD%2FO%2FuR6h%2FZpmhWeEiBrPnFE84PP2ZaRV20FZVXW0u71dDo31qlmDE%2FgId0yz9SGbvVcUd4bCkavrFcqlyMay70iTkXyhSCqSr9YGPKHcqKpQ6p6OU0l6sT4AMFJPhCLTPnmEuvTYmmkbafzB89rm6lkQ1kWTW%2BKmoc9wqneOOEKfka0rBt%2BdhXNPzR9iRYd0uWqV9jmyxLhIPTy93ekdHMhqiCf21fiH1or%2BNLE7I%2B5pGEFEJc75AOC0IJ354iTjni%2F9GjfRnODaX0fNG4HsJK7BccR%2FyujsC%2Bp85U2QefthLwS1WlVV0NyDw%2BpUCSg3Lc7PAAtAwQrkCbuvPgKb%2FjNjo5%2FjFSWJKnGR2K33E%2FQxhX23LvBNk93naZ%2FvLYj0bnwv2WR%2F4eZ9aZE4KQrKaRDbbO3GECfObDrMWn6bw5fSs59j8sR5ImY5IycxfOzjq91sOveRelkpY1BSx43BhlQDOII0pzjG3GoRoN4vZ7q9dkqoLJ%2B1F0mPMAVDOdYU5KlCt6%2FnfNltojiBM1ZNJVdOil7FhT1ZiitJFM9zAgSlDfqFAFtJ6o%2FEAkleCsTNtNPSDDlnJbBBjqkATMNofXilIsBnT0%2FKfk4RhbkdYPa6pQ%2Fzn5tJ8lCI0v6FVJZaak4wHZbt%2B17W2DSRgdbMeKP1ICG5nbJe%2FsSAVXOWgEo%2F9ehDjx9W9w%2FWXp8jxbFIf9X%2B45OvMF0A9ysbVWIjfBokOw0UMalm4j3KYGbwhMFl0tGn7L1M4%2BHE%2BgXdn5gT8wxlThLgN0enNDcPs9luVV8snguvuUJlC8OV0iZ3qec&X-Amz-Signature=841ce6d04065a51c04bca46825858b3075b0702a97e059230cea670fa02ddf81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OUBNJ7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjuQFgd%2BM2oMO3SM5MAXOjwMQ8ZF4aBPTOJLFsJpDPiQIhAN6u%2F1uVEKo2pnYA3WZ%2BTxFAT5RvBHXnDT8z57oA2MaCKv8DCCgQABoMNjM3NDIzMTgzODA1Igy%2FlGaL0lkNXO8cXpcq3AMvWW77BLXIxOxKu3bdS8CXSBb%2BsZFAGb7BccaPwMXDSVzK9QrUk6u3KD%2FO%2FuR6h%2FZpmhWeEiBrPnFE84PP2ZaRV20FZVXW0u71dDo31qlmDE%2FgId0yz9SGbvVcUd4bCkavrFcqlyMay70iTkXyhSCqSr9YGPKHcqKpQ6p6OU0l6sT4AMFJPhCLTPnmEuvTYmmkbafzB89rm6lkQ1kWTW%2BKmoc9wqneOOEKfka0rBt%2BdhXNPzR9iRYd0uWqV9jmyxLhIPTy93ekdHMhqiCf21fiH1or%2BNLE7I%2B5pGEFEJc75AOC0IJ354iTjni%2F9GjfRnODaX0fNG4HsJK7BccR%2FyujsC%2Bp85U2QefthLwS1WlVV0NyDw%2BpUCSg3Lc7PAAtAwQrkCbuvPgKb%2FjNjo5%2FjFSWJKnGR2K33E%2FQxhX23LvBNk93naZ%2FvLYj0bnwv2WR%2F4eZ9aZE4KQrKaRDbbO3GECfObDrMWn6bw5fSs59j8sR5ImY5IycxfOzjq91sOveRelkpY1BSx43BhlQDOII0pzjG3GoRoN4vZ7q9dkqoLJ%2B1F0mPMAVDOdYU5KlCt6%2FnfNltojiBM1ZNJVdOil7FhT1ZiitJFM9zAgSlDfqFAFtJ6o%2FEAkleCsTNtNPSDDlnJbBBjqkATMNofXilIsBnT0%2FKfk4RhbkdYPa6pQ%2Fzn5tJ8lCI0v6FVJZaak4wHZbt%2B17W2DSRgdbMeKP1ICG5nbJe%2FsSAVXOWgEo%2F9ehDjx9W9w%2FWXp8jxbFIf9X%2B45OvMF0A9ysbVWIjfBokOw0UMalm4j3KYGbwhMFl0tGn7L1M4%2BHE%2BgXdn5gT8wxlThLgN0enNDcPs9luVV8snguvuUJlC8OV0iZ3qec&X-Amz-Signature=42d561df4268036487388aa0be7bb9d98d98f0d395dc0ddf6e972013029fabd3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
