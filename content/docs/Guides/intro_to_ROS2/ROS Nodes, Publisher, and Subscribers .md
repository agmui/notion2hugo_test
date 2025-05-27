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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VW4U5C%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGoqN2UOZ9Vyz7ScgVIXPZTZXKcuGm%2BqnwuFj87pV7DAiBw81sd%2BULClj6c6C1yMj%2F1aI2OpFJ%2BmLQbaw1plj9Soir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVTtU3xzZ0A7osLbmKtwDvgKrsgTYuN11dctmJRQPunfaOEEOhlh3uzLfZt8Eh5v5VPR4d3dx%2BYFL61dIeviU1taEMUbyIdsq3UOd7l2o%2B9iizPYQFIsHMcHjx6mQK1NaPL5M9QPbbH8z9iraGh%2FkZfAHSJZieeYEHNTabIkpI490esNjqUdGyj5Wj595mHnwZMkG7E2LpAsY%2FmeBYQ5dijSOhRFaD5EkWryiaB3EMf2Vb2DIQLxpm1Zmf9M8keY%2BsK8RZKGw5uvJ8gMHIjJ4dGbvcFsNIzi1COlXVcM1JP1bAMshovXfxQldd9G9twky%2FlzNwLBswnH2rncR884MzHyF1WnxIThoSsdnPLRW5A3XN9CrzbLPbjNe0n3vtF8zi1DSpK1%2FAXCIZ2DPmJMBstcQgS91oqi8%2F2V9A%2Br2cI%2BUtQes4zo7kVqKHqd94k%2BZWE6rn9%2FkB7K4UhviSmWXPyngurP%2FjOwX4U94fxAGsiXKXyavg9SSGIbJPw%2BJoTU7w8YMbfhrdRGqbWoGHUuJIzDEaxqROjnibLFDKHzozXNZM2E89GYD1h79Ao%2Bp5J1P8cCZdkPGAJla17kuTsl%2F6px8dpWHw4kmgK1fPqpKtrbzS7fbdroNqyKK965zpGQPnQ3WsBRMrF3EuigwkoHWwQY6pgHnp3njFeYlhzCPTqkDjsS727C7X9RF0GoUMK%2B6yTHgB%2FPdhNWCd%2Bq0lLb3zBBcfz5CQX6IG8blyionU9gTclkJ9UGjy3IvsfkFvauTXK4y0pALqKeotrL0wRzSQd8VzjmnlRPugWbvxBWjE7VBI4NOwY4zC%2B8bXwgbYP9mLomBtYPiX0P8c%2BJMIFzGlu9m1MWCeGBAtLEg8MH9xu6K66MEJmOcC7RC&X-Amz-Signature=8f83628128a3c7d710ca055774ce7c263113468959f02a3b00e20d58b1f9a1b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VW4U5C%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGoqN2UOZ9Vyz7ScgVIXPZTZXKcuGm%2BqnwuFj87pV7DAiBw81sd%2BULClj6c6C1yMj%2F1aI2OpFJ%2BmLQbaw1plj9Soir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVTtU3xzZ0A7osLbmKtwDvgKrsgTYuN11dctmJRQPunfaOEEOhlh3uzLfZt8Eh5v5VPR4d3dx%2BYFL61dIeviU1taEMUbyIdsq3UOd7l2o%2B9iizPYQFIsHMcHjx6mQK1NaPL5M9QPbbH8z9iraGh%2FkZfAHSJZieeYEHNTabIkpI490esNjqUdGyj5Wj595mHnwZMkG7E2LpAsY%2FmeBYQ5dijSOhRFaD5EkWryiaB3EMf2Vb2DIQLxpm1Zmf9M8keY%2BsK8RZKGw5uvJ8gMHIjJ4dGbvcFsNIzi1COlXVcM1JP1bAMshovXfxQldd9G9twky%2FlzNwLBswnH2rncR884MzHyF1WnxIThoSsdnPLRW5A3XN9CrzbLPbjNe0n3vtF8zi1DSpK1%2FAXCIZ2DPmJMBstcQgS91oqi8%2F2V9A%2Br2cI%2BUtQes4zo7kVqKHqd94k%2BZWE6rn9%2FkB7K4UhviSmWXPyngurP%2FjOwX4U94fxAGsiXKXyavg9SSGIbJPw%2BJoTU7w8YMbfhrdRGqbWoGHUuJIzDEaxqROjnibLFDKHzozXNZM2E89GYD1h79Ao%2Bp5J1P8cCZdkPGAJla17kuTsl%2F6px8dpWHw4kmgK1fPqpKtrbzS7fbdroNqyKK965zpGQPnQ3WsBRMrF3EuigwkoHWwQY6pgHnp3njFeYlhzCPTqkDjsS727C7X9RF0GoUMK%2B6yTHgB%2FPdhNWCd%2Bq0lLb3zBBcfz5CQX6IG8blyionU9gTclkJ9UGjy3IvsfkFvauTXK4y0pALqKeotrL0wRzSQd8VzjmnlRPugWbvxBWjE7VBI4NOwY4zC%2B8bXwgbYP9mLomBtYPiX0P8c%2BJMIFzGlu9m1MWCeGBAtLEg8MH9xu6K66MEJmOcC7RC&X-Amz-Signature=712c1606f954ebcfb47b84677ac2983bbb197282e964ed69ef793a8d4244209a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VW4U5C%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGoqN2UOZ9Vyz7ScgVIXPZTZXKcuGm%2BqnwuFj87pV7DAiBw81sd%2BULClj6c6C1yMj%2F1aI2OpFJ%2BmLQbaw1plj9Soir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVTtU3xzZ0A7osLbmKtwDvgKrsgTYuN11dctmJRQPunfaOEEOhlh3uzLfZt8Eh5v5VPR4d3dx%2BYFL61dIeviU1taEMUbyIdsq3UOd7l2o%2B9iizPYQFIsHMcHjx6mQK1NaPL5M9QPbbH8z9iraGh%2FkZfAHSJZieeYEHNTabIkpI490esNjqUdGyj5Wj595mHnwZMkG7E2LpAsY%2FmeBYQ5dijSOhRFaD5EkWryiaB3EMf2Vb2DIQLxpm1Zmf9M8keY%2BsK8RZKGw5uvJ8gMHIjJ4dGbvcFsNIzi1COlXVcM1JP1bAMshovXfxQldd9G9twky%2FlzNwLBswnH2rncR884MzHyF1WnxIThoSsdnPLRW5A3XN9CrzbLPbjNe0n3vtF8zi1DSpK1%2FAXCIZ2DPmJMBstcQgS91oqi8%2F2V9A%2Br2cI%2BUtQes4zo7kVqKHqd94k%2BZWE6rn9%2FkB7K4UhviSmWXPyngurP%2FjOwX4U94fxAGsiXKXyavg9SSGIbJPw%2BJoTU7w8YMbfhrdRGqbWoGHUuJIzDEaxqROjnibLFDKHzozXNZM2E89GYD1h79Ao%2Bp5J1P8cCZdkPGAJla17kuTsl%2F6px8dpWHw4kmgK1fPqpKtrbzS7fbdroNqyKK965zpGQPnQ3WsBRMrF3EuigwkoHWwQY6pgHnp3njFeYlhzCPTqkDjsS727C7X9RF0GoUMK%2B6yTHgB%2FPdhNWCd%2Bq0lLb3zBBcfz5CQX6IG8blyionU9gTclkJ9UGjy3IvsfkFvauTXK4y0pALqKeotrL0wRzSQd8VzjmnlRPugWbvxBWjE7VBI4NOwY4zC%2B8bXwgbYP9mLomBtYPiX0P8c%2BJMIFzGlu9m1MWCeGBAtLEg8MH9xu6K66MEJmOcC7RC&X-Amz-Signature=d7fd9ab84f6aa16ce4fdc23f6dc3e4361547df80eacdfba9950029e26721dead&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VW4U5C%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGoqN2UOZ9Vyz7ScgVIXPZTZXKcuGm%2BqnwuFj87pV7DAiBw81sd%2BULClj6c6C1yMj%2F1aI2OpFJ%2BmLQbaw1plj9Soir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVTtU3xzZ0A7osLbmKtwDvgKrsgTYuN11dctmJRQPunfaOEEOhlh3uzLfZt8Eh5v5VPR4d3dx%2BYFL61dIeviU1taEMUbyIdsq3UOd7l2o%2B9iizPYQFIsHMcHjx6mQK1NaPL5M9QPbbH8z9iraGh%2FkZfAHSJZieeYEHNTabIkpI490esNjqUdGyj5Wj595mHnwZMkG7E2LpAsY%2FmeBYQ5dijSOhRFaD5EkWryiaB3EMf2Vb2DIQLxpm1Zmf9M8keY%2BsK8RZKGw5uvJ8gMHIjJ4dGbvcFsNIzi1COlXVcM1JP1bAMshovXfxQldd9G9twky%2FlzNwLBswnH2rncR884MzHyF1WnxIThoSsdnPLRW5A3XN9CrzbLPbjNe0n3vtF8zi1DSpK1%2FAXCIZ2DPmJMBstcQgS91oqi8%2F2V9A%2Br2cI%2BUtQes4zo7kVqKHqd94k%2BZWE6rn9%2FkB7K4UhviSmWXPyngurP%2FjOwX4U94fxAGsiXKXyavg9SSGIbJPw%2BJoTU7w8YMbfhrdRGqbWoGHUuJIzDEaxqROjnibLFDKHzozXNZM2E89GYD1h79Ao%2Bp5J1P8cCZdkPGAJla17kuTsl%2F6px8dpWHw4kmgK1fPqpKtrbzS7fbdroNqyKK965zpGQPnQ3WsBRMrF3EuigwkoHWwQY6pgHnp3njFeYlhzCPTqkDjsS727C7X9RF0GoUMK%2B6yTHgB%2FPdhNWCd%2Bq0lLb3zBBcfz5CQX6IG8blyionU9gTclkJ9UGjy3IvsfkFvauTXK4y0pALqKeotrL0wRzSQd8VzjmnlRPugWbvxBWjE7VBI4NOwY4zC%2B8bXwgbYP9mLomBtYPiX0P8c%2BJMIFzGlu9m1MWCeGBAtLEg8MH9xu6K66MEJmOcC7RC&X-Amz-Signature=897f2a046a84763d9f4b55ffc3f005a72412e43a7aaa7c2bbcc72420759861e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VW4U5C%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGoqN2UOZ9Vyz7ScgVIXPZTZXKcuGm%2BqnwuFj87pV7DAiBw81sd%2BULClj6c6C1yMj%2F1aI2OpFJ%2BmLQbaw1plj9Soir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVTtU3xzZ0A7osLbmKtwDvgKrsgTYuN11dctmJRQPunfaOEEOhlh3uzLfZt8Eh5v5VPR4d3dx%2BYFL61dIeviU1taEMUbyIdsq3UOd7l2o%2B9iizPYQFIsHMcHjx6mQK1NaPL5M9QPbbH8z9iraGh%2FkZfAHSJZieeYEHNTabIkpI490esNjqUdGyj5Wj595mHnwZMkG7E2LpAsY%2FmeBYQ5dijSOhRFaD5EkWryiaB3EMf2Vb2DIQLxpm1Zmf9M8keY%2BsK8RZKGw5uvJ8gMHIjJ4dGbvcFsNIzi1COlXVcM1JP1bAMshovXfxQldd9G9twky%2FlzNwLBswnH2rncR884MzHyF1WnxIThoSsdnPLRW5A3XN9CrzbLPbjNe0n3vtF8zi1DSpK1%2FAXCIZ2DPmJMBstcQgS91oqi8%2F2V9A%2Br2cI%2BUtQes4zo7kVqKHqd94k%2BZWE6rn9%2FkB7K4UhviSmWXPyngurP%2FjOwX4U94fxAGsiXKXyavg9SSGIbJPw%2BJoTU7w8YMbfhrdRGqbWoGHUuJIzDEaxqROjnibLFDKHzozXNZM2E89GYD1h79Ao%2Bp5J1P8cCZdkPGAJla17kuTsl%2F6px8dpWHw4kmgK1fPqpKtrbzS7fbdroNqyKK965zpGQPnQ3WsBRMrF3EuigwkoHWwQY6pgHnp3njFeYlhzCPTqkDjsS727C7X9RF0GoUMK%2B6yTHgB%2FPdhNWCd%2Bq0lLb3zBBcfz5CQX6IG8blyionU9gTclkJ9UGjy3IvsfkFvauTXK4y0pALqKeotrL0wRzSQd8VzjmnlRPugWbvxBWjE7VBI4NOwY4zC%2B8bXwgbYP9mLomBtYPiX0P8c%2BJMIFzGlu9m1MWCeGBAtLEg8MH9xu6K66MEJmOcC7RC&X-Amz-Signature=9d03313c334edf9ae25644a95940a647234a7f5193e43ae7c449b237bae69371&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VW4U5C%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGoqN2UOZ9Vyz7ScgVIXPZTZXKcuGm%2BqnwuFj87pV7DAiBw81sd%2BULClj6c6C1yMj%2F1aI2OpFJ%2BmLQbaw1plj9Soir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVTtU3xzZ0A7osLbmKtwDvgKrsgTYuN11dctmJRQPunfaOEEOhlh3uzLfZt8Eh5v5VPR4d3dx%2BYFL61dIeviU1taEMUbyIdsq3UOd7l2o%2B9iizPYQFIsHMcHjx6mQK1NaPL5M9QPbbH8z9iraGh%2FkZfAHSJZieeYEHNTabIkpI490esNjqUdGyj5Wj595mHnwZMkG7E2LpAsY%2FmeBYQ5dijSOhRFaD5EkWryiaB3EMf2Vb2DIQLxpm1Zmf9M8keY%2BsK8RZKGw5uvJ8gMHIjJ4dGbvcFsNIzi1COlXVcM1JP1bAMshovXfxQldd9G9twky%2FlzNwLBswnH2rncR884MzHyF1WnxIThoSsdnPLRW5A3XN9CrzbLPbjNe0n3vtF8zi1DSpK1%2FAXCIZ2DPmJMBstcQgS91oqi8%2F2V9A%2Br2cI%2BUtQes4zo7kVqKHqd94k%2BZWE6rn9%2FkB7K4UhviSmWXPyngurP%2FjOwX4U94fxAGsiXKXyavg9SSGIbJPw%2BJoTU7w8YMbfhrdRGqbWoGHUuJIzDEaxqROjnibLFDKHzozXNZM2E89GYD1h79Ao%2Bp5J1P8cCZdkPGAJla17kuTsl%2F6px8dpWHw4kmgK1fPqpKtrbzS7fbdroNqyKK965zpGQPnQ3WsBRMrF3EuigwkoHWwQY6pgHnp3njFeYlhzCPTqkDjsS727C7X9RF0GoUMK%2B6yTHgB%2FPdhNWCd%2Bq0lLb3zBBcfz5CQX6IG8blyionU9gTclkJ9UGjy3IvsfkFvauTXK4y0pALqKeotrL0wRzSQd8VzjmnlRPugWbvxBWjE7VBI4NOwY4zC%2B8bXwgbYP9mLomBtYPiX0P8c%2BJMIFzGlu9m1MWCeGBAtLEg8MH9xu6K66MEJmOcC7RC&X-Amz-Signature=b6b8b44ccdf80cfea1b2d9218fc7c9d35a5092031f560d6100cea3f563f6fd35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VW4U5C%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGoqN2UOZ9Vyz7ScgVIXPZTZXKcuGm%2BqnwuFj87pV7DAiBw81sd%2BULClj6c6C1yMj%2F1aI2OpFJ%2BmLQbaw1plj9Soir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVTtU3xzZ0A7osLbmKtwDvgKrsgTYuN11dctmJRQPunfaOEEOhlh3uzLfZt8Eh5v5VPR4d3dx%2BYFL61dIeviU1taEMUbyIdsq3UOd7l2o%2B9iizPYQFIsHMcHjx6mQK1NaPL5M9QPbbH8z9iraGh%2FkZfAHSJZieeYEHNTabIkpI490esNjqUdGyj5Wj595mHnwZMkG7E2LpAsY%2FmeBYQ5dijSOhRFaD5EkWryiaB3EMf2Vb2DIQLxpm1Zmf9M8keY%2BsK8RZKGw5uvJ8gMHIjJ4dGbvcFsNIzi1COlXVcM1JP1bAMshovXfxQldd9G9twky%2FlzNwLBswnH2rncR884MzHyF1WnxIThoSsdnPLRW5A3XN9CrzbLPbjNe0n3vtF8zi1DSpK1%2FAXCIZ2DPmJMBstcQgS91oqi8%2F2V9A%2Br2cI%2BUtQes4zo7kVqKHqd94k%2BZWE6rn9%2FkB7K4UhviSmWXPyngurP%2FjOwX4U94fxAGsiXKXyavg9SSGIbJPw%2BJoTU7w8YMbfhrdRGqbWoGHUuJIzDEaxqROjnibLFDKHzozXNZM2E89GYD1h79Ao%2Bp5J1P8cCZdkPGAJla17kuTsl%2F6px8dpWHw4kmgK1fPqpKtrbzS7fbdroNqyKK965zpGQPnQ3WsBRMrF3EuigwkoHWwQY6pgHnp3njFeYlhzCPTqkDjsS727C7X9RF0GoUMK%2B6yTHgB%2FPdhNWCd%2Bq0lLb3zBBcfz5CQX6IG8blyionU9gTclkJ9UGjy3IvsfkFvauTXK4y0pALqKeotrL0wRzSQd8VzjmnlRPugWbvxBWjE7VBI4NOwY4zC%2B8bXwgbYP9mLomBtYPiX0P8c%2BJMIFzGlu9m1MWCeGBAtLEg8MH9xu6K66MEJmOcC7RC&X-Amz-Signature=af5080c7bedfe9540c6cbc9903a20173ff2a3ef32a7a2c0d00fd572273b85616&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VW4U5C%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGoqN2UOZ9Vyz7ScgVIXPZTZXKcuGm%2BqnwuFj87pV7DAiBw81sd%2BULClj6c6C1yMj%2F1aI2OpFJ%2BmLQbaw1plj9Soir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVTtU3xzZ0A7osLbmKtwDvgKrsgTYuN11dctmJRQPunfaOEEOhlh3uzLfZt8Eh5v5VPR4d3dx%2BYFL61dIeviU1taEMUbyIdsq3UOd7l2o%2B9iizPYQFIsHMcHjx6mQK1NaPL5M9QPbbH8z9iraGh%2FkZfAHSJZieeYEHNTabIkpI490esNjqUdGyj5Wj595mHnwZMkG7E2LpAsY%2FmeBYQ5dijSOhRFaD5EkWryiaB3EMf2Vb2DIQLxpm1Zmf9M8keY%2BsK8RZKGw5uvJ8gMHIjJ4dGbvcFsNIzi1COlXVcM1JP1bAMshovXfxQldd9G9twky%2FlzNwLBswnH2rncR884MzHyF1WnxIThoSsdnPLRW5A3XN9CrzbLPbjNe0n3vtF8zi1DSpK1%2FAXCIZ2DPmJMBstcQgS91oqi8%2F2V9A%2Br2cI%2BUtQes4zo7kVqKHqd94k%2BZWE6rn9%2FkB7K4UhviSmWXPyngurP%2FjOwX4U94fxAGsiXKXyavg9SSGIbJPw%2BJoTU7w8YMbfhrdRGqbWoGHUuJIzDEaxqROjnibLFDKHzozXNZM2E89GYD1h79Ao%2Bp5J1P8cCZdkPGAJla17kuTsl%2F6px8dpWHw4kmgK1fPqpKtrbzS7fbdroNqyKK965zpGQPnQ3WsBRMrF3EuigwkoHWwQY6pgHnp3njFeYlhzCPTqkDjsS727C7X9RF0GoUMK%2B6yTHgB%2FPdhNWCd%2Bq0lLb3zBBcfz5CQX6IG8blyionU9gTclkJ9UGjy3IvsfkFvauTXK4y0pALqKeotrL0wRzSQd8VzjmnlRPugWbvxBWjE7VBI4NOwY4zC%2B8bXwgbYP9mLomBtYPiX0P8c%2BJMIFzGlu9m1MWCeGBAtLEg8MH9xu6K66MEJmOcC7RC&X-Amz-Signature=088db5a7d152482232cfde583a7474b31ab724a7601cdc78edc12c4d623bc897&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
