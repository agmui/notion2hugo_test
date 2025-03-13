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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQMHKQK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0BNORlF36KfmgTCqq%2B3xQx1zc3GsXGETglLQ6Ec62RAiA0SbkGsmBtYAQyQw450Yn59JGQpxDo6e5dHhyY421RuSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMwvClvtfHQ4fGJdKtwD1pSvfjftkT78DOKGAUxmXeN7ZyXSdNo4bjTgDnEKs9Qq1y%2BS%2FRH6nWwVLk3ypKzfsq3Eag6Jjqo3KdTyEYJ%2F6utrFgWJdcga%2FTTjzz9C86O5ZyfiU6nm69P6rVzCTwlSkkau2opM9d4ZuDcnKWvwjxFCh8CaBt4gRqk3zCLKQbJwLRk%2BeyacPQncrvZHbRJxBQSFAGtOPKxLJQdh7mOzqm2%2Br6wD9Pbb4Wg7aShEtasYwxyXpemg2W6UW8zaenFrUemUHAyNHPz0p0hUQolIcovBIVZSYGMn7uKj%2BSbayeN2P%2BrFEhOL79j96N3sMtzoNoNyKy92vaBFlxzh5J%2BUWiNzc602gt%2FuBRVh8ML6XcKUEgFmP3f9gw%2Be3JdZmWuwZKH4xBrC9Q62MRtzbZ%2Bnp8UMImn19ddYO1gHXYHmbwuF1lAS8DYk1hxI%2F4jyWfeCtyq5%2BzsqWoeQvCJ%2BT9zki4uIrJTe1h%2BKHFjaRhto4U9CuLcMp5KY0IgPq%2BMfD60qI5T6Aim2mEJwO16qZofsb19kmk2mcUi06NkqfidU6H6p8R77i0BbbMf5EAyqN9J%2FRcLfQv92NYEYrKR0j0xd2kt8bBK1Af0uOxMsuWD3UgWnwvS96klKLlFc%2B%2BEw1sHKvgY6pgF1HhzWWLs7emN1eBXIu8ft6Dez1j%2F3WKBc5ZOt9VhXogATCO48Q0WuytaDSWnQf1O3MiRs0KXgscU378KoJGVA%2FkXJDuWAWn8NzsSuRcqSV35j7RqHCXp60xhewYxUhMn1yGi0715idqfy1X53BIX9gCF3PBzbKaZr2pMDAd%2FWGCWGIU6IVNkKFMSA1NlSdp7lbvqJajBdWvHizgUZAvm56PvTEwyj&X-Amz-Signature=82a918f8d7e442511948a49232c8ecac690dca4f7941973959b642e785a8eb00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQMHKQK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0BNORlF36KfmgTCqq%2B3xQx1zc3GsXGETglLQ6Ec62RAiA0SbkGsmBtYAQyQw450Yn59JGQpxDo6e5dHhyY421RuSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMwvClvtfHQ4fGJdKtwD1pSvfjftkT78DOKGAUxmXeN7ZyXSdNo4bjTgDnEKs9Qq1y%2BS%2FRH6nWwVLk3ypKzfsq3Eag6Jjqo3KdTyEYJ%2F6utrFgWJdcga%2FTTjzz9C86O5ZyfiU6nm69P6rVzCTwlSkkau2opM9d4ZuDcnKWvwjxFCh8CaBt4gRqk3zCLKQbJwLRk%2BeyacPQncrvZHbRJxBQSFAGtOPKxLJQdh7mOzqm2%2Br6wD9Pbb4Wg7aShEtasYwxyXpemg2W6UW8zaenFrUemUHAyNHPz0p0hUQolIcovBIVZSYGMn7uKj%2BSbayeN2P%2BrFEhOL79j96N3sMtzoNoNyKy92vaBFlxzh5J%2BUWiNzc602gt%2FuBRVh8ML6XcKUEgFmP3f9gw%2Be3JdZmWuwZKH4xBrC9Q62MRtzbZ%2Bnp8UMImn19ddYO1gHXYHmbwuF1lAS8DYk1hxI%2F4jyWfeCtyq5%2BzsqWoeQvCJ%2BT9zki4uIrJTe1h%2BKHFjaRhto4U9CuLcMp5KY0IgPq%2BMfD60qI5T6Aim2mEJwO16qZofsb19kmk2mcUi06NkqfidU6H6p8R77i0BbbMf5EAyqN9J%2FRcLfQv92NYEYrKR0j0xd2kt8bBK1Af0uOxMsuWD3UgWnwvS96klKLlFc%2B%2BEw1sHKvgY6pgF1HhzWWLs7emN1eBXIu8ft6Dez1j%2F3WKBc5ZOt9VhXogATCO48Q0WuytaDSWnQf1O3MiRs0KXgscU378KoJGVA%2FkXJDuWAWn8NzsSuRcqSV35j7RqHCXp60xhewYxUhMn1yGi0715idqfy1X53BIX9gCF3PBzbKaZr2pMDAd%2FWGCWGIU6IVNkKFMSA1NlSdp7lbvqJajBdWvHizgUZAvm56PvTEwyj&X-Amz-Signature=c663f77b54e9f3f0368b47be8c48f99ceef62627915a3fbf5c428825f22aa5d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQMHKQK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0BNORlF36KfmgTCqq%2B3xQx1zc3GsXGETglLQ6Ec62RAiA0SbkGsmBtYAQyQw450Yn59JGQpxDo6e5dHhyY421RuSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMwvClvtfHQ4fGJdKtwD1pSvfjftkT78DOKGAUxmXeN7ZyXSdNo4bjTgDnEKs9Qq1y%2BS%2FRH6nWwVLk3ypKzfsq3Eag6Jjqo3KdTyEYJ%2F6utrFgWJdcga%2FTTjzz9C86O5ZyfiU6nm69P6rVzCTwlSkkau2opM9d4ZuDcnKWvwjxFCh8CaBt4gRqk3zCLKQbJwLRk%2BeyacPQncrvZHbRJxBQSFAGtOPKxLJQdh7mOzqm2%2Br6wD9Pbb4Wg7aShEtasYwxyXpemg2W6UW8zaenFrUemUHAyNHPz0p0hUQolIcovBIVZSYGMn7uKj%2BSbayeN2P%2BrFEhOL79j96N3sMtzoNoNyKy92vaBFlxzh5J%2BUWiNzc602gt%2FuBRVh8ML6XcKUEgFmP3f9gw%2Be3JdZmWuwZKH4xBrC9Q62MRtzbZ%2Bnp8UMImn19ddYO1gHXYHmbwuF1lAS8DYk1hxI%2F4jyWfeCtyq5%2BzsqWoeQvCJ%2BT9zki4uIrJTe1h%2BKHFjaRhto4U9CuLcMp5KY0IgPq%2BMfD60qI5T6Aim2mEJwO16qZofsb19kmk2mcUi06NkqfidU6H6p8R77i0BbbMf5EAyqN9J%2FRcLfQv92NYEYrKR0j0xd2kt8bBK1Af0uOxMsuWD3UgWnwvS96klKLlFc%2B%2BEw1sHKvgY6pgF1HhzWWLs7emN1eBXIu8ft6Dez1j%2F3WKBc5ZOt9VhXogATCO48Q0WuytaDSWnQf1O3MiRs0KXgscU378KoJGVA%2FkXJDuWAWn8NzsSuRcqSV35j7RqHCXp60xhewYxUhMn1yGi0715idqfy1X53BIX9gCF3PBzbKaZr2pMDAd%2FWGCWGIU6IVNkKFMSA1NlSdp7lbvqJajBdWvHizgUZAvm56PvTEwyj&X-Amz-Signature=8c0bc6f4737654c27dd6fb7534f325c25c07600ec6e9995c5d214fff9eea1624&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQMHKQK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0BNORlF36KfmgTCqq%2B3xQx1zc3GsXGETglLQ6Ec62RAiA0SbkGsmBtYAQyQw450Yn59JGQpxDo6e5dHhyY421RuSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMwvClvtfHQ4fGJdKtwD1pSvfjftkT78DOKGAUxmXeN7ZyXSdNo4bjTgDnEKs9Qq1y%2BS%2FRH6nWwVLk3ypKzfsq3Eag6Jjqo3KdTyEYJ%2F6utrFgWJdcga%2FTTjzz9C86O5ZyfiU6nm69P6rVzCTwlSkkau2opM9d4ZuDcnKWvwjxFCh8CaBt4gRqk3zCLKQbJwLRk%2BeyacPQncrvZHbRJxBQSFAGtOPKxLJQdh7mOzqm2%2Br6wD9Pbb4Wg7aShEtasYwxyXpemg2W6UW8zaenFrUemUHAyNHPz0p0hUQolIcovBIVZSYGMn7uKj%2BSbayeN2P%2BrFEhOL79j96N3sMtzoNoNyKy92vaBFlxzh5J%2BUWiNzc602gt%2FuBRVh8ML6XcKUEgFmP3f9gw%2Be3JdZmWuwZKH4xBrC9Q62MRtzbZ%2Bnp8UMImn19ddYO1gHXYHmbwuF1lAS8DYk1hxI%2F4jyWfeCtyq5%2BzsqWoeQvCJ%2BT9zki4uIrJTe1h%2BKHFjaRhto4U9CuLcMp5KY0IgPq%2BMfD60qI5T6Aim2mEJwO16qZofsb19kmk2mcUi06NkqfidU6H6p8R77i0BbbMf5EAyqN9J%2FRcLfQv92NYEYrKR0j0xd2kt8bBK1Af0uOxMsuWD3UgWnwvS96klKLlFc%2B%2BEw1sHKvgY6pgF1HhzWWLs7emN1eBXIu8ft6Dez1j%2F3WKBc5ZOt9VhXogATCO48Q0WuytaDSWnQf1O3MiRs0KXgscU378KoJGVA%2FkXJDuWAWn8NzsSuRcqSV35j7RqHCXp60xhewYxUhMn1yGi0715idqfy1X53BIX9gCF3PBzbKaZr2pMDAd%2FWGCWGIU6IVNkKFMSA1NlSdp7lbvqJajBdWvHizgUZAvm56PvTEwyj&X-Amz-Signature=76234c258c1bbcdce706dc49f1a1bc285074516c2720ffe589b7cef1c073ead0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQMHKQK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0BNORlF36KfmgTCqq%2B3xQx1zc3GsXGETglLQ6Ec62RAiA0SbkGsmBtYAQyQw450Yn59JGQpxDo6e5dHhyY421RuSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMwvClvtfHQ4fGJdKtwD1pSvfjftkT78DOKGAUxmXeN7ZyXSdNo4bjTgDnEKs9Qq1y%2BS%2FRH6nWwVLk3ypKzfsq3Eag6Jjqo3KdTyEYJ%2F6utrFgWJdcga%2FTTjzz9C86O5ZyfiU6nm69P6rVzCTwlSkkau2opM9d4ZuDcnKWvwjxFCh8CaBt4gRqk3zCLKQbJwLRk%2BeyacPQncrvZHbRJxBQSFAGtOPKxLJQdh7mOzqm2%2Br6wD9Pbb4Wg7aShEtasYwxyXpemg2W6UW8zaenFrUemUHAyNHPz0p0hUQolIcovBIVZSYGMn7uKj%2BSbayeN2P%2BrFEhOL79j96N3sMtzoNoNyKy92vaBFlxzh5J%2BUWiNzc602gt%2FuBRVh8ML6XcKUEgFmP3f9gw%2Be3JdZmWuwZKH4xBrC9Q62MRtzbZ%2Bnp8UMImn19ddYO1gHXYHmbwuF1lAS8DYk1hxI%2F4jyWfeCtyq5%2BzsqWoeQvCJ%2BT9zki4uIrJTe1h%2BKHFjaRhto4U9CuLcMp5KY0IgPq%2BMfD60qI5T6Aim2mEJwO16qZofsb19kmk2mcUi06NkqfidU6H6p8R77i0BbbMf5EAyqN9J%2FRcLfQv92NYEYrKR0j0xd2kt8bBK1Af0uOxMsuWD3UgWnwvS96klKLlFc%2B%2BEw1sHKvgY6pgF1HhzWWLs7emN1eBXIu8ft6Dez1j%2F3WKBc5ZOt9VhXogATCO48Q0WuytaDSWnQf1O3MiRs0KXgscU378KoJGVA%2FkXJDuWAWn8NzsSuRcqSV35j7RqHCXp60xhewYxUhMn1yGi0715idqfy1X53BIX9gCF3PBzbKaZr2pMDAd%2FWGCWGIU6IVNkKFMSA1NlSdp7lbvqJajBdWvHizgUZAvm56PvTEwyj&X-Amz-Signature=15b5191478c86c1dc4bb1d243a0e72281e4a1e4e48388f11fe62fc677fb078de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQMHKQK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0BNORlF36KfmgTCqq%2B3xQx1zc3GsXGETglLQ6Ec62RAiA0SbkGsmBtYAQyQw450Yn59JGQpxDo6e5dHhyY421RuSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMwvClvtfHQ4fGJdKtwD1pSvfjftkT78DOKGAUxmXeN7ZyXSdNo4bjTgDnEKs9Qq1y%2BS%2FRH6nWwVLk3ypKzfsq3Eag6Jjqo3KdTyEYJ%2F6utrFgWJdcga%2FTTjzz9C86O5ZyfiU6nm69P6rVzCTwlSkkau2opM9d4ZuDcnKWvwjxFCh8CaBt4gRqk3zCLKQbJwLRk%2BeyacPQncrvZHbRJxBQSFAGtOPKxLJQdh7mOzqm2%2Br6wD9Pbb4Wg7aShEtasYwxyXpemg2W6UW8zaenFrUemUHAyNHPz0p0hUQolIcovBIVZSYGMn7uKj%2BSbayeN2P%2BrFEhOL79j96N3sMtzoNoNyKy92vaBFlxzh5J%2BUWiNzc602gt%2FuBRVh8ML6XcKUEgFmP3f9gw%2Be3JdZmWuwZKH4xBrC9Q62MRtzbZ%2Bnp8UMImn19ddYO1gHXYHmbwuF1lAS8DYk1hxI%2F4jyWfeCtyq5%2BzsqWoeQvCJ%2BT9zki4uIrJTe1h%2BKHFjaRhto4U9CuLcMp5KY0IgPq%2BMfD60qI5T6Aim2mEJwO16qZofsb19kmk2mcUi06NkqfidU6H6p8R77i0BbbMf5EAyqN9J%2FRcLfQv92NYEYrKR0j0xd2kt8bBK1Af0uOxMsuWD3UgWnwvS96klKLlFc%2B%2BEw1sHKvgY6pgF1HhzWWLs7emN1eBXIu8ft6Dez1j%2F3WKBc5ZOt9VhXogATCO48Q0WuytaDSWnQf1O3MiRs0KXgscU378KoJGVA%2FkXJDuWAWn8NzsSuRcqSV35j7RqHCXp60xhewYxUhMn1yGi0715idqfy1X53BIX9gCF3PBzbKaZr2pMDAd%2FWGCWGIU6IVNkKFMSA1NlSdp7lbvqJajBdWvHizgUZAvm56PvTEwyj&X-Amz-Signature=bbe5f08d21f5fd6e24b4a6f69f53f013785b0f1f62851691b3fb00a88984761e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQMHKQK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0BNORlF36KfmgTCqq%2B3xQx1zc3GsXGETglLQ6Ec62RAiA0SbkGsmBtYAQyQw450Yn59JGQpxDo6e5dHhyY421RuSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMwvClvtfHQ4fGJdKtwD1pSvfjftkT78DOKGAUxmXeN7ZyXSdNo4bjTgDnEKs9Qq1y%2BS%2FRH6nWwVLk3ypKzfsq3Eag6Jjqo3KdTyEYJ%2F6utrFgWJdcga%2FTTjzz9C86O5ZyfiU6nm69P6rVzCTwlSkkau2opM9d4ZuDcnKWvwjxFCh8CaBt4gRqk3zCLKQbJwLRk%2BeyacPQncrvZHbRJxBQSFAGtOPKxLJQdh7mOzqm2%2Br6wD9Pbb4Wg7aShEtasYwxyXpemg2W6UW8zaenFrUemUHAyNHPz0p0hUQolIcovBIVZSYGMn7uKj%2BSbayeN2P%2BrFEhOL79j96N3sMtzoNoNyKy92vaBFlxzh5J%2BUWiNzc602gt%2FuBRVh8ML6XcKUEgFmP3f9gw%2Be3JdZmWuwZKH4xBrC9Q62MRtzbZ%2Bnp8UMImn19ddYO1gHXYHmbwuF1lAS8DYk1hxI%2F4jyWfeCtyq5%2BzsqWoeQvCJ%2BT9zki4uIrJTe1h%2BKHFjaRhto4U9CuLcMp5KY0IgPq%2BMfD60qI5T6Aim2mEJwO16qZofsb19kmk2mcUi06NkqfidU6H6p8R77i0BbbMf5EAyqN9J%2FRcLfQv92NYEYrKR0j0xd2kt8bBK1Af0uOxMsuWD3UgWnwvS96klKLlFc%2B%2BEw1sHKvgY6pgF1HhzWWLs7emN1eBXIu8ft6Dez1j%2F3WKBc5ZOt9VhXogATCO48Q0WuytaDSWnQf1O3MiRs0KXgscU378KoJGVA%2FkXJDuWAWn8NzsSuRcqSV35j7RqHCXp60xhewYxUhMn1yGi0715idqfy1X53BIX9gCF3PBzbKaZr2pMDAd%2FWGCWGIU6IVNkKFMSA1NlSdp7lbvqJajBdWvHizgUZAvm56PvTEwyj&X-Amz-Signature=50390707da442bf91490924dd2249889063f240694f07c66103779467456446f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQMHKQK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0BNORlF36KfmgTCqq%2B3xQx1zc3GsXGETglLQ6Ec62RAiA0SbkGsmBtYAQyQw450Yn59JGQpxDo6e5dHhyY421RuSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMwvClvtfHQ4fGJdKtwD1pSvfjftkT78DOKGAUxmXeN7ZyXSdNo4bjTgDnEKs9Qq1y%2BS%2FRH6nWwVLk3ypKzfsq3Eag6Jjqo3KdTyEYJ%2F6utrFgWJdcga%2FTTjzz9C86O5ZyfiU6nm69P6rVzCTwlSkkau2opM9d4ZuDcnKWvwjxFCh8CaBt4gRqk3zCLKQbJwLRk%2BeyacPQncrvZHbRJxBQSFAGtOPKxLJQdh7mOzqm2%2Br6wD9Pbb4Wg7aShEtasYwxyXpemg2W6UW8zaenFrUemUHAyNHPz0p0hUQolIcovBIVZSYGMn7uKj%2BSbayeN2P%2BrFEhOL79j96N3sMtzoNoNyKy92vaBFlxzh5J%2BUWiNzc602gt%2FuBRVh8ML6XcKUEgFmP3f9gw%2Be3JdZmWuwZKH4xBrC9Q62MRtzbZ%2Bnp8UMImn19ddYO1gHXYHmbwuF1lAS8DYk1hxI%2F4jyWfeCtyq5%2BzsqWoeQvCJ%2BT9zki4uIrJTe1h%2BKHFjaRhto4U9CuLcMp5KY0IgPq%2BMfD60qI5T6Aim2mEJwO16qZofsb19kmk2mcUi06NkqfidU6H6p8R77i0BbbMf5EAyqN9J%2FRcLfQv92NYEYrKR0j0xd2kt8bBK1Af0uOxMsuWD3UgWnwvS96klKLlFc%2B%2BEw1sHKvgY6pgF1HhzWWLs7emN1eBXIu8ft6Dez1j%2F3WKBc5ZOt9VhXogATCO48Q0WuytaDSWnQf1O3MiRs0KXgscU378KoJGVA%2FkXJDuWAWn8NzsSuRcqSV35j7RqHCXp60xhewYxUhMn1yGi0715idqfy1X53BIX9gCF3PBzbKaZr2pMDAd%2FWGCWGIU6IVNkKFMSA1NlSdp7lbvqJajBdWvHizgUZAvm56PvTEwyj&X-Amz-Signature=7272e555c7fd889b4009e8855e68a0641b6739f959f3358c8d05e790954e5e72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
