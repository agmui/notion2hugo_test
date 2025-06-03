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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOY3G2D%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIB%2B2konxry8vff8zPY4Mzzqc%2FGVF%2BG%2FR6cHwbJOTNOYmAiB2IbepPvLZpihZ8cL8r1vjUtQrrOr197Ev8M3Q7lRCXyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNOp3CAqqzKeO4MUKtwD0aBkF9pe1e0L4azvDjyfXJ6rA0GaIvElffxFHRDfZxLduTpcZhL4axJQQTB4IOGjzDm1rzdZaFVC70Bv3XWRpI%2Boat4XB1Vb%2BZ8Sl%2B4NCYF3abedW0WE2O9DU5j0BRCwDAj1iBfFhSdCv%2FVdINyyynyPg3kSBrh6P31mOYZ3GvWTmbOTThEFAEIxcXMX%2FBlK2V2Pubnoiw0%2FA3DFs1cfMkfdKn1joKLi9ZNRyNb4lSpB3ZegYLmLXiuFhUjy%2FDdvgFgBASsvwXuekWd5bdJzjOS7Tfmq5CUqRobbX4NlhsfSF3wKPNTZKmaQdxayXGo6pzKfxjiRYmqfUzTgA%2FXeM5QUOPJCzO82EjBKmQsTMkvJ%2BkAxCn0osnmFgCQYEiLDdDk%2BkmXQQ4ff8uGeQp7%2B%2FZ12ngtJt5mJ%2FT5TTDi4ndcn8Jhrf9Bsw6U4F3ZoHn42KWIoMesfCZox0OJW2UBn3s95JTRktgKXQ1ww1D3o%2Fz8w5KyK%2FMkTB9vvfAdYS3Z%2BXhXPo%2FOtaPB0KKY1ip%2Fyyl3Vz%2BZHg1sJJTLJ%2F8fKIpgsirq20BirlmvtzqZIb7kvecE%2BDzrS%2BFELQOPu%2BjljJtjLfHX6pRNTxgytDhOkPX%2FCFn88K000TXlMmtAw0YH6wQY6pgEtmrl4qCTj1nrxbiEB7HtW%2BwYkOq%2FMTpiM%2FOHNwsf5Q4YSth9%2BMbtC9hHnHq2yR0Hupwf2ByUWmfqa1L353OTt4NAlhVF8BhJeSnvMkwvURMExFzX%2BqcyHrSEhZ9JQqur%2FGwnbLw6RHBw1yeR%2FvRHHldmcfdd9SHLt0cgDKc4%2FwniEjm3JHUFybwDQrcV%2F80zCQhVlOU2T5P0FQEYRk7tlNSCAr41G&X-Amz-Signature=aa0dd94949a089fa3c6b1a5056f105bb5c46735f921a1ac8bcb1ff2b50d638fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOY3G2D%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIB%2B2konxry8vff8zPY4Mzzqc%2FGVF%2BG%2FR6cHwbJOTNOYmAiB2IbepPvLZpihZ8cL8r1vjUtQrrOr197Ev8M3Q7lRCXyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNOp3CAqqzKeO4MUKtwD0aBkF9pe1e0L4azvDjyfXJ6rA0GaIvElffxFHRDfZxLduTpcZhL4axJQQTB4IOGjzDm1rzdZaFVC70Bv3XWRpI%2Boat4XB1Vb%2BZ8Sl%2B4NCYF3abedW0WE2O9DU5j0BRCwDAj1iBfFhSdCv%2FVdINyyynyPg3kSBrh6P31mOYZ3GvWTmbOTThEFAEIxcXMX%2FBlK2V2Pubnoiw0%2FA3DFs1cfMkfdKn1joKLi9ZNRyNb4lSpB3ZegYLmLXiuFhUjy%2FDdvgFgBASsvwXuekWd5bdJzjOS7Tfmq5CUqRobbX4NlhsfSF3wKPNTZKmaQdxayXGo6pzKfxjiRYmqfUzTgA%2FXeM5QUOPJCzO82EjBKmQsTMkvJ%2BkAxCn0osnmFgCQYEiLDdDk%2BkmXQQ4ff8uGeQp7%2B%2FZ12ngtJt5mJ%2FT5TTDi4ndcn8Jhrf9Bsw6U4F3ZoHn42KWIoMesfCZox0OJW2UBn3s95JTRktgKXQ1ww1D3o%2Fz8w5KyK%2FMkTB9vvfAdYS3Z%2BXhXPo%2FOtaPB0KKY1ip%2Fyyl3Vz%2BZHg1sJJTLJ%2F8fKIpgsirq20BirlmvtzqZIb7kvecE%2BDzrS%2BFELQOPu%2BjljJtjLfHX6pRNTxgytDhOkPX%2FCFn88K000TXlMmtAw0YH6wQY6pgEtmrl4qCTj1nrxbiEB7HtW%2BwYkOq%2FMTpiM%2FOHNwsf5Q4YSth9%2BMbtC9hHnHq2yR0Hupwf2ByUWmfqa1L353OTt4NAlhVF8BhJeSnvMkwvURMExFzX%2BqcyHrSEhZ9JQqur%2FGwnbLw6RHBw1yeR%2FvRHHldmcfdd9SHLt0cgDKc4%2FwniEjm3JHUFybwDQrcV%2F80zCQhVlOU2T5P0FQEYRk7tlNSCAr41G&X-Amz-Signature=e865ff197dd6bf31fd12bcb3548dbdf6bb971c2c6c331d45e53569c3501a1af5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOY3G2D%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIB%2B2konxry8vff8zPY4Mzzqc%2FGVF%2BG%2FR6cHwbJOTNOYmAiB2IbepPvLZpihZ8cL8r1vjUtQrrOr197Ev8M3Q7lRCXyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNOp3CAqqzKeO4MUKtwD0aBkF9pe1e0L4azvDjyfXJ6rA0GaIvElffxFHRDfZxLduTpcZhL4axJQQTB4IOGjzDm1rzdZaFVC70Bv3XWRpI%2Boat4XB1Vb%2BZ8Sl%2B4NCYF3abedW0WE2O9DU5j0BRCwDAj1iBfFhSdCv%2FVdINyyynyPg3kSBrh6P31mOYZ3GvWTmbOTThEFAEIxcXMX%2FBlK2V2Pubnoiw0%2FA3DFs1cfMkfdKn1joKLi9ZNRyNb4lSpB3ZegYLmLXiuFhUjy%2FDdvgFgBASsvwXuekWd5bdJzjOS7Tfmq5CUqRobbX4NlhsfSF3wKPNTZKmaQdxayXGo6pzKfxjiRYmqfUzTgA%2FXeM5QUOPJCzO82EjBKmQsTMkvJ%2BkAxCn0osnmFgCQYEiLDdDk%2BkmXQQ4ff8uGeQp7%2B%2FZ12ngtJt5mJ%2FT5TTDi4ndcn8Jhrf9Bsw6U4F3ZoHn42KWIoMesfCZox0OJW2UBn3s95JTRktgKXQ1ww1D3o%2Fz8w5KyK%2FMkTB9vvfAdYS3Z%2BXhXPo%2FOtaPB0KKY1ip%2Fyyl3Vz%2BZHg1sJJTLJ%2F8fKIpgsirq20BirlmvtzqZIb7kvecE%2BDzrS%2BFELQOPu%2BjljJtjLfHX6pRNTxgytDhOkPX%2FCFn88K000TXlMmtAw0YH6wQY6pgEtmrl4qCTj1nrxbiEB7HtW%2BwYkOq%2FMTpiM%2FOHNwsf5Q4YSth9%2BMbtC9hHnHq2yR0Hupwf2ByUWmfqa1L353OTt4NAlhVF8BhJeSnvMkwvURMExFzX%2BqcyHrSEhZ9JQqur%2FGwnbLw6RHBw1yeR%2FvRHHldmcfdd9SHLt0cgDKc4%2FwniEjm3JHUFybwDQrcV%2F80zCQhVlOU2T5P0FQEYRk7tlNSCAr41G&X-Amz-Signature=901476889ef1333f14f8a4c44daf1b3415a4d6e432867615a50bc7661907f267&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOY3G2D%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIB%2B2konxry8vff8zPY4Mzzqc%2FGVF%2BG%2FR6cHwbJOTNOYmAiB2IbepPvLZpihZ8cL8r1vjUtQrrOr197Ev8M3Q7lRCXyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNOp3CAqqzKeO4MUKtwD0aBkF9pe1e0L4azvDjyfXJ6rA0GaIvElffxFHRDfZxLduTpcZhL4axJQQTB4IOGjzDm1rzdZaFVC70Bv3XWRpI%2Boat4XB1Vb%2BZ8Sl%2B4NCYF3abedW0WE2O9DU5j0BRCwDAj1iBfFhSdCv%2FVdINyyynyPg3kSBrh6P31mOYZ3GvWTmbOTThEFAEIxcXMX%2FBlK2V2Pubnoiw0%2FA3DFs1cfMkfdKn1joKLi9ZNRyNb4lSpB3ZegYLmLXiuFhUjy%2FDdvgFgBASsvwXuekWd5bdJzjOS7Tfmq5CUqRobbX4NlhsfSF3wKPNTZKmaQdxayXGo6pzKfxjiRYmqfUzTgA%2FXeM5QUOPJCzO82EjBKmQsTMkvJ%2BkAxCn0osnmFgCQYEiLDdDk%2BkmXQQ4ff8uGeQp7%2B%2FZ12ngtJt5mJ%2FT5TTDi4ndcn8Jhrf9Bsw6U4F3ZoHn42KWIoMesfCZox0OJW2UBn3s95JTRktgKXQ1ww1D3o%2Fz8w5KyK%2FMkTB9vvfAdYS3Z%2BXhXPo%2FOtaPB0KKY1ip%2Fyyl3Vz%2BZHg1sJJTLJ%2F8fKIpgsirq20BirlmvtzqZIb7kvecE%2BDzrS%2BFELQOPu%2BjljJtjLfHX6pRNTxgytDhOkPX%2FCFn88K000TXlMmtAw0YH6wQY6pgEtmrl4qCTj1nrxbiEB7HtW%2BwYkOq%2FMTpiM%2FOHNwsf5Q4YSth9%2BMbtC9hHnHq2yR0Hupwf2ByUWmfqa1L353OTt4NAlhVF8BhJeSnvMkwvURMExFzX%2BqcyHrSEhZ9JQqur%2FGwnbLw6RHBw1yeR%2FvRHHldmcfdd9SHLt0cgDKc4%2FwniEjm3JHUFybwDQrcV%2F80zCQhVlOU2T5P0FQEYRk7tlNSCAr41G&X-Amz-Signature=a87bd21692e85ceac8fb2096862276670cb3d94a003dde16b762b0c3690ca443&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOY3G2D%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIB%2B2konxry8vff8zPY4Mzzqc%2FGVF%2BG%2FR6cHwbJOTNOYmAiB2IbepPvLZpihZ8cL8r1vjUtQrrOr197Ev8M3Q7lRCXyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNOp3CAqqzKeO4MUKtwD0aBkF9pe1e0L4azvDjyfXJ6rA0GaIvElffxFHRDfZxLduTpcZhL4axJQQTB4IOGjzDm1rzdZaFVC70Bv3XWRpI%2Boat4XB1Vb%2BZ8Sl%2B4NCYF3abedW0WE2O9DU5j0BRCwDAj1iBfFhSdCv%2FVdINyyynyPg3kSBrh6P31mOYZ3GvWTmbOTThEFAEIxcXMX%2FBlK2V2Pubnoiw0%2FA3DFs1cfMkfdKn1joKLi9ZNRyNb4lSpB3ZegYLmLXiuFhUjy%2FDdvgFgBASsvwXuekWd5bdJzjOS7Tfmq5CUqRobbX4NlhsfSF3wKPNTZKmaQdxayXGo6pzKfxjiRYmqfUzTgA%2FXeM5QUOPJCzO82EjBKmQsTMkvJ%2BkAxCn0osnmFgCQYEiLDdDk%2BkmXQQ4ff8uGeQp7%2B%2FZ12ngtJt5mJ%2FT5TTDi4ndcn8Jhrf9Bsw6U4F3ZoHn42KWIoMesfCZox0OJW2UBn3s95JTRktgKXQ1ww1D3o%2Fz8w5KyK%2FMkTB9vvfAdYS3Z%2BXhXPo%2FOtaPB0KKY1ip%2Fyyl3Vz%2BZHg1sJJTLJ%2F8fKIpgsirq20BirlmvtzqZIb7kvecE%2BDzrS%2BFELQOPu%2BjljJtjLfHX6pRNTxgytDhOkPX%2FCFn88K000TXlMmtAw0YH6wQY6pgEtmrl4qCTj1nrxbiEB7HtW%2BwYkOq%2FMTpiM%2FOHNwsf5Q4YSth9%2BMbtC9hHnHq2yR0Hupwf2ByUWmfqa1L353OTt4NAlhVF8BhJeSnvMkwvURMExFzX%2BqcyHrSEhZ9JQqur%2FGwnbLw6RHBw1yeR%2FvRHHldmcfdd9SHLt0cgDKc4%2FwniEjm3JHUFybwDQrcV%2F80zCQhVlOU2T5P0FQEYRk7tlNSCAr41G&X-Amz-Signature=5929b0114580f419d312c9927e52daba77eadb4529d66b9129eccf54f9507d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOY3G2D%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIB%2B2konxry8vff8zPY4Mzzqc%2FGVF%2BG%2FR6cHwbJOTNOYmAiB2IbepPvLZpihZ8cL8r1vjUtQrrOr197Ev8M3Q7lRCXyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNOp3CAqqzKeO4MUKtwD0aBkF9pe1e0L4azvDjyfXJ6rA0GaIvElffxFHRDfZxLduTpcZhL4axJQQTB4IOGjzDm1rzdZaFVC70Bv3XWRpI%2Boat4XB1Vb%2BZ8Sl%2B4NCYF3abedW0WE2O9DU5j0BRCwDAj1iBfFhSdCv%2FVdINyyynyPg3kSBrh6P31mOYZ3GvWTmbOTThEFAEIxcXMX%2FBlK2V2Pubnoiw0%2FA3DFs1cfMkfdKn1joKLi9ZNRyNb4lSpB3ZegYLmLXiuFhUjy%2FDdvgFgBASsvwXuekWd5bdJzjOS7Tfmq5CUqRobbX4NlhsfSF3wKPNTZKmaQdxayXGo6pzKfxjiRYmqfUzTgA%2FXeM5QUOPJCzO82EjBKmQsTMkvJ%2BkAxCn0osnmFgCQYEiLDdDk%2BkmXQQ4ff8uGeQp7%2B%2FZ12ngtJt5mJ%2FT5TTDi4ndcn8Jhrf9Bsw6U4F3ZoHn42KWIoMesfCZox0OJW2UBn3s95JTRktgKXQ1ww1D3o%2Fz8w5KyK%2FMkTB9vvfAdYS3Z%2BXhXPo%2FOtaPB0KKY1ip%2Fyyl3Vz%2BZHg1sJJTLJ%2F8fKIpgsirq20BirlmvtzqZIb7kvecE%2BDzrS%2BFELQOPu%2BjljJtjLfHX6pRNTxgytDhOkPX%2FCFn88K000TXlMmtAw0YH6wQY6pgEtmrl4qCTj1nrxbiEB7HtW%2BwYkOq%2FMTpiM%2FOHNwsf5Q4YSth9%2BMbtC9hHnHq2yR0Hupwf2ByUWmfqa1L353OTt4NAlhVF8BhJeSnvMkwvURMExFzX%2BqcyHrSEhZ9JQqur%2FGwnbLw6RHBw1yeR%2FvRHHldmcfdd9SHLt0cgDKc4%2FwniEjm3JHUFybwDQrcV%2F80zCQhVlOU2T5P0FQEYRk7tlNSCAr41G&X-Amz-Signature=da9d00fded4df183c1c66331770fd9763d19c3d3bd89caaf655ac9948829abf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOY3G2D%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIB%2B2konxry8vff8zPY4Mzzqc%2FGVF%2BG%2FR6cHwbJOTNOYmAiB2IbepPvLZpihZ8cL8r1vjUtQrrOr197Ev8M3Q7lRCXyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNOp3CAqqzKeO4MUKtwD0aBkF9pe1e0L4azvDjyfXJ6rA0GaIvElffxFHRDfZxLduTpcZhL4axJQQTB4IOGjzDm1rzdZaFVC70Bv3XWRpI%2Boat4XB1Vb%2BZ8Sl%2B4NCYF3abedW0WE2O9DU5j0BRCwDAj1iBfFhSdCv%2FVdINyyynyPg3kSBrh6P31mOYZ3GvWTmbOTThEFAEIxcXMX%2FBlK2V2Pubnoiw0%2FA3DFs1cfMkfdKn1joKLi9ZNRyNb4lSpB3ZegYLmLXiuFhUjy%2FDdvgFgBASsvwXuekWd5bdJzjOS7Tfmq5CUqRobbX4NlhsfSF3wKPNTZKmaQdxayXGo6pzKfxjiRYmqfUzTgA%2FXeM5QUOPJCzO82EjBKmQsTMkvJ%2BkAxCn0osnmFgCQYEiLDdDk%2BkmXQQ4ff8uGeQp7%2B%2FZ12ngtJt5mJ%2FT5TTDi4ndcn8Jhrf9Bsw6U4F3ZoHn42KWIoMesfCZox0OJW2UBn3s95JTRktgKXQ1ww1D3o%2Fz8w5KyK%2FMkTB9vvfAdYS3Z%2BXhXPo%2FOtaPB0KKY1ip%2Fyyl3Vz%2BZHg1sJJTLJ%2F8fKIpgsirq20BirlmvtzqZIb7kvecE%2BDzrS%2BFELQOPu%2BjljJtjLfHX6pRNTxgytDhOkPX%2FCFn88K000TXlMmtAw0YH6wQY6pgEtmrl4qCTj1nrxbiEB7HtW%2BwYkOq%2FMTpiM%2FOHNwsf5Q4YSth9%2BMbtC9hHnHq2yR0Hupwf2ByUWmfqa1L353OTt4NAlhVF8BhJeSnvMkwvURMExFzX%2BqcyHrSEhZ9JQqur%2FGwnbLw6RHBw1yeR%2FvRHHldmcfdd9SHLt0cgDKc4%2FwniEjm3JHUFybwDQrcV%2F80zCQhVlOU2T5P0FQEYRk7tlNSCAr41G&X-Amz-Signature=d8be9931df5635b7c3e3fbbb5b894609217be9971e3ba708e5f16495cb2e87f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOY3G2D%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIB%2B2konxry8vff8zPY4Mzzqc%2FGVF%2BG%2FR6cHwbJOTNOYmAiB2IbepPvLZpihZ8cL8r1vjUtQrrOr197Ev8M3Q7lRCXyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNOp3CAqqzKeO4MUKtwD0aBkF9pe1e0L4azvDjyfXJ6rA0GaIvElffxFHRDfZxLduTpcZhL4axJQQTB4IOGjzDm1rzdZaFVC70Bv3XWRpI%2Boat4XB1Vb%2BZ8Sl%2B4NCYF3abedW0WE2O9DU5j0BRCwDAj1iBfFhSdCv%2FVdINyyynyPg3kSBrh6P31mOYZ3GvWTmbOTThEFAEIxcXMX%2FBlK2V2Pubnoiw0%2FA3DFs1cfMkfdKn1joKLi9ZNRyNb4lSpB3ZegYLmLXiuFhUjy%2FDdvgFgBASsvwXuekWd5bdJzjOS7Tfmq5CUqRobbX4NlhsfSF3wKPNTZKmaQdxayXGo6pzKfxjiRYmqfUzTgA%2FXeM5QUOPJCzO82EjBKmQsTMkvJ%2BkAxCn0osnmFgCQYEiLDdDk%2BkmXQQ4ff8uGeQp7%2B%2FZ12ngtJt5mJ%2FT5TTDi4ndcn8Jhrf9Bsw6U4F3ZoHn42KWIoMesfCZox0OJW2UBn3s95JTRktgKXQ1ww1D3o%2Fz8w5KyK%2FMkTB9vvfAdYS3Z%2BXhXPo%2FOtaPB0KKY1ip%2Fyyl3Vz%2BZHg1sJJTLJ%2F8fKIpgsirq20BirlmvtzqZIb7kvecE%2BDzrS%2BFELQOPu%2BjljJtjLfHX6pRNTxgytDhOkPX%2FCFn88K000TXlMmtAw0YH6wQY6pgEtmrl4qCTj1nrxbiEB7HtW%2BwYkOq%2FMTpiM%2FOHNwsf5Q4YSth9%2BMbtC9hHnHq2yR0Hupwf2ByUWmfqa1L353OTt4NAlhVF8BhJeSnvMkwvURMExFzX%2BqcyHrSEhZ9JQqur%2FGwnbLw6RHBw1yeR%2FvRHHldmcfdd9SHLt0cgDKc4%2FwniEjm3JHUFybwDQrcV%2F80zCQhVlOU2T5P0FQEYRk7tlNSCAr41G&X-Amz-Signature=8d7255e972992456c4dc68b1b2c8a3d177d518c82da69b11a5c6916da86e1a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
