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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZAJL2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCjR6DdixIYjFEUa%2BTh5CNO6o8k6mO7C4RI%2BjTRftJdfgIhAOhzlkQlwmW2zzSUgQXQPaM7ZIqv6rYbodS8CiCQ9TwiKv8DCHcQABoMNjM3NDIzMTgzODA1IgyjfRS2vxkaKPnTc7wq3AP1VqAekM8kCQ2gcP%2BbOv7eR%2FTY2D7JH%2FQ1FrXy4vAZZOXvS9DXq3cES1rQqpxVV9Zjk%2BNnm%2FiaTII%2FF3m007gZzsl4J8b3R%2BZyfBx7KcyPANQ88rTwFF%2Bsr3scrSmc%2BHeph7jj%2BKrAL2TTGEmmVdL8X9G6wdyXWSwBBm55Q4ESArqCeeVPX3MwZX0pGMYxOK%2F7PmYoWvvt7bLybpUrMvHcNQXRPR8kY42GFyAbcuQzr%2Fotcbz29fRFCWzAv1712rZR%2FnV2ElsxZ%2FKhUtfRnoZstYpiJprML9xneByDSwgMNCYRIPUQLT1PVuKfdwHKrbYbPKt2VmmLMG58OKCisHrlBtJF2iwsdJLr%2F2%2FTWRJUVf9BGSK4gWEAnCh6aCIiGwQAhAvA1280UlTxJG9L2It0c%2FxGjGYkrPK8wPV0jTiDuRlxdGkbocj46GCJm%2FeZ2WlJrOinhfAKYU2O%2F0Nmr6dlT%2FaNPz2CWBQlTiUuMtp5MY3ThJUYts8ukSE30o6249U7zEc2cPRLCAh%2B%2Bzl5fvp651n9bN2huoALxeUycfVlBc5kEuvh8MmYP76RHIaQONmt5GnzrMVoNRjbJxjKeHitjcWosd43%2Fkbq4IFQ5kdxzVRShPvTBl72EPYtfzDnm4LFBjqkARSvtS1%2Fg5%2FRRUmN47wAc4rfkVOloBfzaawGxP0zlfI1VL1feCDP1LY4U7xiqe6BrqnWiQmInE0DJHe2z3uQysC3%2FYbx2wea%2BkT%2FmsxrV5PBg4cNqTjrWsuLaL0y1i29DHCcODTs6SpxNmbiTMcz%2F9NZ2Qh2SN7BWDtbrw4ZHh37oonqNaXuv765PUqZMI0BkC3EzYJjHlTzvqKJClwRp4DT8lKa&X-Amz-Signature=ecbf25142b0caf814a72bfe3ae869c8df6eec0d4607628c809c74be39e954a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZAJL2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCjR6DdixIYjFEUa%2BTh5CNO6o8k6mO7C4RI%2BjTRftJdfgIhAOhzlkQlwmW2zzSUgQXQPaM7ZIqv6rYbodS8CiCQ9TwiKv8DCHcQABoMNjM3NDIzMTgzODA1IgyjfRS2vxkaKPnTc7wq3AP1VqAekM8kCQ2gcP%2BbOv7eR%2FTY2D7JH%2FQ1FrXy4vAZZOXvS9DXq3cES1rQqpxVV9Zjk%2BNnm%2FiaTII%2FF3m007gZzsl4J8b3R%2BZyfBx7KcyPANQ88rTwFF%2Bsr3scrSmc%2BHeph7jj%2BKrAL2TTGEmmVdL8X9G6wdyXWSwBBm55Q4ESArqCeeVPX3MwZX0pGMYxOK%2F7PmYoWvvt7bLybpUrMvHcNQXRPR8kY42GFyAbcuQzr%2Fotcbz29fRFCWzAv1712rZR%2FnV2ElsxZ%2FKhUtfRnoZstYpiJprML9xneByDSwgMNCYRIPUQLT1PVuKfdwHKrbYbPKt2VmmLMG58OKCisHrlBtJF2iwsdJLr%2F2%2FTWRJUVf9BGSK4gWEAnCh6aCIiGwQAhAvA1280UlTxJG9L2It0c%2FxGjGYkrPK8wPV0jTiDuRlxdGkbocj46GCJm%2FeZ2WlJrOinhfAKYU2O%2F0Nmr6dlT%2FaNPz2CWBQlTiUuMtp5MY3ThJUYts8ukSE30o6249U7zEc2cPRLCAh%2B%2Bzl5fvp651n9bN2huoALxeUycfVlBc5kEuvh8MmYP76RHIaQONmt5GnzrMVoNRjbJxjKeHitjcWosd43%2Fkbq4IFQ5kdxzVRShPvTBl72EPYtfzDnm4LFBjqkARSvtS1%2Fg5%2FRRUmN47wAc4rfkVOloBfzaawGxP0zlfI1VL1feCDP1LY4U7xiqe6BrqnWiQmInE0DJHe2z3uQysC3%2FYbx2wea%2BkT%2FmsxrV5PBg4cNqTjrWsuLaL0y1i29DHCcODTs6SpxNmbiTMcz%2F9NZ2Qh2SN7BWDtbrw4ZHh37oonqNaXuv765PUqZMI0BkC3EzYJjHlTzvqKJClwRp4DT8lKa&X-Amz-Signature=cf23e01479a1d38fc1248d5b38f7f4f3145ec0e40104b5f2302c01db7433c6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZAJL2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCjR6DdixIYjFEUa%2BTh5CNO6o8k6mO7C4RI%2BjTRftJdfgIhAOhzlkQlwmW2zzSUgQXQPaM7ZIqv6rYbodS8CiCQ9TwiKv8DCHcQABoMNjM3NDIzMTgzODA1IgyjfRS2vxkaKPnTc7wq3AP1VqAekM8kCQ2gcP%2BbOv7eR%2FTY2D7JH%2FQ1FrXy4vAZZOXvS9DXq3cES1rQqpxVV9Zjk%2BNnm%2FiaTII%2FF3m007gZzsl4J8b3R%2BZyfBx7KcyPANQ88rTwFF%2Bsr3scrSmc%2BHeph7jj%2BKrAL2TTGEmmVdL8X9G6wdyXWSwBBm55Q4ESArqCeeVPX3MwZX0pGMYxOK%2F7PmYoWvvt7bLybpUrMvHcNQXRPR8kY42GFyAbcuQzr%2Fotcbz29fRFCWzAv1712rZR%2FnV2ElsxZ%2FKhUtfRnoZstYpiJprML9xneByDSwgMNCYRIPUQLT1PVuKfdwHKrbYbPKt2VmmLMG58OKCisHrlBtJF2iwsdJLr%2F2%2FTWRJUVf9BGSK4gWEAnCh6aCIiGwQAhAvA1280UlTxJG9L2It0c%2FxGjGYkrPK8wPV0jTiDuRlxdGkbocj46GCJm%2FeZ2WlJrOinhfAKYU2O%2F0Nmr6dlT%2FaNPz2CWBQlTiUuMtp5MY3ThJUYts8ukSE30o6249U7zEc2cPRLCAh%2B%2Bzl5fvp651n9bN2huoALxeUycfVlBc5kEuvh8MmYP76RHIaQONmt5GnzrMVoNRjbJxjKeHitjcWosd43%2Fkbq4IFQ5kdxzVRShPvTBl72EPYtfzDnm4LFBjqkARSvtS1%2Fg5%2FRRUmN47wAc4rfkVOloBfzaawGxP0zlfI1VL1feCDP1LY4U7xiqe6BrqnWiQmInE0DJHe2z3uQysC3%2FYbx2wea%2BkT%2FmsxrV5PBg4cNqTjrWsuLaL0y1i29DHCcODTs6SpxNmbiTMcz%2F9NZ2Qh2SN7BWDtbrw4ZHh37oonqNaXuv765PUqZMI0BkC3EzYJjHlTzvqKJClwRp4DT8lKa&X-Amz-Signature=1d9653fdf0c0d82eb15eff7e13aa383e94fd07abc10bd864897e0ebc1784673b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZAJL2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCjR6DdixIYjFEUa%2BTh5CNO6o8k6mO7C4RI%2BjTRftJdfgIhAOhzlkQlwmW2zzSUgQXQPaM7ZIqv6rYbodS8CiCQ9TwiKv8DCHcQABoMNjM3NDIzMTgzODA1IgyjfRS2vxkaKPnTc7wq3AP1VqAekM8kCQ2gcP%2BbOv7eR%2FTY2D7JH%2FQ1FrXy4vAZZOXvS9DXq3cES1rQqpxVV9Zjk%2BNnm%2FiaTII%2FF3m007gZzsl4J8b3R%2BZyfBx7KcyPANQ88rTwFF%2Bsr3scrSmc%2BHeph7jj%2BKrAL2TTGEmmVdL8X9G6wdyXWSwBBm55Q4ESArqCeeVPX3MwZX0pGMYxOK%2F7PmYoWvvt7bLybpUrMvHcNQXRPR8kY42GFyAbcuQzr%2Fotcbz29fRFCWzAv1712rZR%2FnV2ElsxZ%2FKhUtfRnoZstYpiJprML9xneByDSwgMNCYRIPUQLT1PVuKfdwHKrbYbPKt2VmmLMG58OKCisHrlBtJF2iwsdJLr%2F2%2FTWRJUVf9BGSK4gWEAnCh6aCIiGwQAhAvA1280UlTxJG9L2It0c%2FxGjGYkrPK8wPV0jTiDuRlxdGkbocj46GCJm%2FeZ2WlJrOinhfAKYU2O%2F0Nmr6dlT%2FaNPz2CWBQlTiUuMtp5MY3ThJUYts8ukSE30o6249U7zEc2cPRLCAh%2B%2Bzl5fvp651n9bN2huoALxeUycfVlBc5kEuvh8MmYP76RHIaQONmt5GnzrMVoNRjbJxjKeHitjcWosd43%2Fkbq4IFQ5kdxzVRShPvTBl72EPYtfzDnm4LFBjqkARSvtS1%2Fg5%2FRRUmN47wAc4rfkVOloBfzaawGxP0zlfI1VL1feCDP1LY4U7xiqe6BrqnWiQmInE0DJHe2z3uQysC3%2FYbx2wea%2BkT%2FmsxrV5PBg4cNqTjrWsuLaL0y1i29DHCcODTs6SpxNmbiTMcz%2F9NZ2Qh2SN7BWDtbrw4ZHh37oonqNaXuv765PUqZMI0BkC3EzYJjHlTzvqKJClwRp4DT8lKa&X-Amz-Signature=526ab22532ba2047fa2aaf51dc0a32b33881295dd1d0254e63cd1c1ee05a2255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZAJL2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCjR6DdixIYjFEUa%2BTh5CNO6o8k6mO7C4RI%2BjTRftJdfgIhAOhzlkQlwmW2zzSUgQXQPaM7ZIqv6rYbodS8CiCQ9TwiKv8DCHcQABoMNjM3NDIzMTgzODA1IgyjfRS2vxkaKPnTc7wq3AP1VqAekM8kCQ2gcP%2BbOv7eR%2FTY2D7JH%2FQ1FrXy4vAZZOXvS9DXq3cES1rQqpxVV9Zjk%2BNnm%2FiaTII%2FF3m007gZzsl4J8b3R%2BZyfBx7KcyPANQ88rTwFF%2Bsr3scrSmc%2BHeph7jj%2BKrAL2TTGEmmVdL8X9G6wdyXWSwBBm55Q4ESArqCeeVPX3MwZX0pGMYxOK%2F7PmYoWvvt7bLybpUrMvHcNQXRPR8kY42GFyAbcuQzr%2Fotcbz29fRFCWzAv1712rZR%2FnV2ElsxZ%2FKhUtfRnoZstYpiJprML9xneByDSwgMNCYRIPUQLT1PVuKfdwHKrbYbPKt2VmmLMG58OKCisHrlBtJF2iwsdJLr%2F2%2FTWRJUVf9BGSK4gWEAnCh6aCIiGwQAhAvA1280UlTxJG9L2It0c%2FxGjGYkrPK8wPV0jTiDuRlxdGkbocj46GCJm%2FeZ2WlJrOinhfAKYU2O%2F0Nmr6dlT%2FaNPz2CWBQlTiUuMtp5MY3ThJUYts8ukSE30o6249U7zEc2cPRLCAh%2B%2Bzl5fvp651n9bN2huoALxeUycfVlBc5kEuvh8MmYP76RHIaQONmt5GnzrMVoNRjbJxjKeHitjcWosd43%2Fkbq4IFQ5kdxzVRShPvTBl72EPYtfzDnm4LFBjqkARSvtS1%2Fg5%2FRRUmN47wAc4rfkVOloBfzaawGxP0zlfI1VL1feCDP1LY4U7xiqe6BrqnWiQmInE0DJHe2z3uQysC3%2FYbx2wea%2BkT%2FmsxrV5PBg4cNqTjrWsuLaL0y1i29DHCcODTs6SpxNmbiTMcz%2F9NZ2Qh2SN7BWDtbrw4ZHh37oonqNaXuv765PUqZMI0BkC3EzYJjHlTzvqKJClwRp4DT8lKa&X-Amz-Signature=2878abf30dfd6d4664849c5af549048974f660ff63411a604301ba44339b9cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZAJL2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCjR6DdixIYjFEUa%2BTh5CNO6o8k6mO7C4RI%2BjTRftJdfgIhAOhzlkQlwmW2zzSUgQXQPaM7ZIqv6rYbodS8CiCQ9TwiKv8DCHcQABoMNjM3NDIzMTgzODA1IgyjfRS2vxkaKPnTc7wq3AP1VqAekM8kCQ2gcP%2BbOv7eR%2FTY2D7JH%2FQ1FrXy4vAZZOXvS9DXq3cES1rQqpxVV9Zjk%2BNnm%2FiaTII%2FF3m007gZzsl4J8b3R%2BZyfBx7KcyPANQ88rTwFF%2Bsr3scrSmc%2BHeph7jj%2BKrAL2TTGEmmVdL8X9G6wdyXWSwBBm55Q4ESArqCeeVPX3MwZX0pGMYxOK%2F7PmYoWvvt7bLybpUrMvHcNQXRPR8kY42GFyAbcuQzr%2Fotcbz29fRFCWzAv1712rZR%2FnV2ElsxZ%2FKhUtfRnoZstYpiJprML9xneByDSwgMNCYRIPUQLT1PVuKfdwHKrbYbPKt2VmmLMG58OKCisHrlBtJF2iwsdJLr%2F2%2FTWRJUVf9BGSK4gWEAnCh6aCIiGwQAhAvA1280UlTxJG9L2It0c%2FxGjGYkrPK8wPV0jTiDuRlxdGkbocj46GCJm%2FeZ2WlJrOinhfAKYU2O%2F0Nmr6dlT%2FaNPz2CWBQlTiUuMtp5MY3ThJUYts8ukSE30o6249U7zEc2cPRLCAh%2B%2Bzl5fvp651n9bN2huoALxeUycfVlBc5kEuvh8MmYP76RHIaQONmt5GnzrMVoNRjbJxjKeHitjcWosd43%2Fkbq4IFQ5kdxzVRShPvTBl72EPYtfzDnm4LFBjqkARSvtS1%2Fg5%2FRRUmN47wAc4rfkVOloBfzaawGxP0zlfI1VL1feCDP1LY4U7xiqe6BrqnWiQmInE0DJHe2z3uQysC3%2FYbx2wea%2BkT%2FmsxrV5PBg4cNqTjrWsuLaL0y1i29DHCcODTs6SpxNmbiTMcz%2F9NZ2Qh2SN7BWDtbrw4ZHh37oonqNaXuv765PUqZMI0BkC3EzYJjHlTzvqKJClwRp4DT8lKa&X-Amz-Signature=12280552778e798893ea87bc3c4d4722c6c717f8a88c7717c52b769db81bdaa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZAJL2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCjR6DdixIYjFEUa%2BTh5CNO6o8k6mO7C4RI%2BjTRftJdfgIhAOhzlkQlwmW2zzSUgQXQPaM7ZIqv6rYbodS8CiCQ9TwiKv8DCHcQABoMNjM3NDIzMTgzODA1IgyjfRS2vxkaKPnTc7wq3AP1VqAekM8kCQ2gcP%2BbOv7eR%2FTY2D7JH%2FQ1FrXy4vAZZOXvS9DXq3cES1rQqpxVV9Zjk%2BNnm%2FiaTII%2FF3m007gZzsl4J8b3R%2BZyfBx7KcyPANQ88rTwFF%2Bsr3scrSmc%2BHeph7jj%2BKrAL2TTGEmmVdL8X9G6wdyXWSwBBm55Q4ESArqCeeVPX3MwZX0pGMYxOK%2F7PmYoWvvt7bLybpUrMvHcNQXRPR8kY42GFyAbcuQzr%2Fotcbz29fRFCWzAv1712rZR%2FnV2ElsxZ%2FKhUtfRnoZstYpiJprML9xneByDSwgMNCYRIPUQLT1PVuKfdwHKrbYbPKt2VmmLMG58OKCisHrlBtJF2iwsdJLr%2F2%2FTWRJUVf9BGSK4gWEAnCh6aCIiGwQAhAvA1280UlTxJG9L2It0c%2FxGjGYkrPK8wPV0jTiDuRlxdGkbocj46GCJm%2FeZ2WlJrOinhfAKYU2O%2F0Nmr6dlT%2FaNPz2CWBQlTiUuMtp5MY3ThJUYts8ukSE30o6249U7zEc2cPRLCAh%2B%2Bzl5fvp651n9bN2huoALxeUycfVlBc5kEuvh8MmYP76RHIaQONmt5GnzrMVoNRjbJxjKeHitjcWosd43%2Fkbq4IFQ5kdxzVRShPvTBl72EPYtfzDnm4LFBjqkARSvtS1%2Fg5%2FRRUmN47wAc4rfkVOloBfzaawGxP0zlfI1VL1feCDP1LY4U7xiqe6BrqnWiQmInE0DJHe2z3uQysC3%2FYbx2wea%2BkT%2FmsxrV5PBg4cNqTjrWsuLaL0y1i29DHCcODTs6SpxNmbiTMcz%2F9NZ2Qh2SN7BWDtbrw4ZHh37oonqNaXuv765PUqZMI0BkC3EzYJjHlTzvqKJClwRp4DT8lKa&X-Amz-Signature=719a8d2264f6d0b6ade15e58baf8f2dd9566924b0736788a5987aad4b9169b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZAJL2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCjR6DdixIYjFEUa%2BTh5CNO6o8k6mO7C4RI%2BjTRftJdfgIhAOhzlkQlwmW2zzSUgQXQPaM7ZIqv6rYbodS8CiCQ9TwiKv8DCHcQABoMNjM3NDIzMTgzODA1IgyjfRS2vxkaKPnTc7wq3AP1VqAekM8kCQ2gcP%2BbOv7eR%2FTY2D7JH%2FQ1FrXy4vAZZOXvS9DXq3cES1rQqpxVV9Zjk%2BNnm%2FiaTII%2FF3m007gZzsl4J8b3R%2BZyfBx7KcyPANQ88rTwFF%2Bsr3scrSmc%2BHeph7jj%2BKrAL2TTGEmmVdL8X9G6wdyXWSwBBm55Q4ESArqCeeVPX3MwZX0pGMYxOK%2F7PmYoWvvt7bLybpUrMvHcNQXRPR8kY42GFyAbcuQzr%2Fotcbz29fRFCWzAv1712rZR%2FnV2ElsxZ%2FKhUtfRnoZstYpiJprML9xneByDSwgMNCYRIPUQLT1PVuKfdwHKrbYbPKt2VmmLMG58OKCisHrlBtJF2iwsdJLr%2F2%2FTWRJUVf9BGSK4gWEAnCh6aCIiGwQAhAvA1280UlTxJG9L2It0c%2FxGjGYkrPK8wPV0jTiDuRlxdGkbocj46GCJm%2FeZ2WlJrOinhfAKYU2O%2F0Nmr6dlT%2FaNPz2CWBQlTiUuMtp5MY3ThJUYts8ukSE30o6249U7zEc2cPRLCAh%2B%2Bzl5fvp651n9bN2huoALxeUycfVlBc5kEuvh8MmYP76RHIaQONmt5GnzrMVoNRjbJxjKeHitjcWosd43%2Fkbq4IFQ5kdxzVRShPvTBl72EPYtfzDnm4LFBjqkARSvtS1%2Fg5%2FRRUmN47wAc4rfkVOloBfzaawGxP0zlfI1VL1feCDP1LY4U7xiqe6BrqnWiQmInE0DJHe2z3uQysC3%2FYbx2wea%2BkT%2FmsxrV5PBg4cNqTjrWsuLaL0y1i29DHCcODTs6SpxNmbiTMcz%2F9NZ2Qh2SN7BWDtbrw4ZHh37oonqNaXuv765PUqZMI0BkC3EzYJjHlTzvqKJClwRp4DT8lKa&X-Amz-Signature=e409b6a8cead3813952d7fb5c5d466f72910759d6d20c413c2b023c059771934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
