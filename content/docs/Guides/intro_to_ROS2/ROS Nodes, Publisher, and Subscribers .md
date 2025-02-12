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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWK3V5J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ9RRAEwwQUxCgGcStkQFqLTbNlsgmW4r4EABhUQWYlQIhAJxPyXEb9b5d0CaYKTBeKWwpi8K%2BYEJyWnsUrHTTROf%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpaDc%2FB35xbF%2FK5kMq3AMOutLwEy9Fj7a8kAE4WV4bHUHjxSak0sE6zZ7fUJmvdyYZzSN55zUim4hMbZCdBQC%2B66Y7V8DRZg84ypcSyOl5G2ozSkQk8Y%2FzGkRUQqChW906S6frdpfqGqvykW1S2KVoLDa8JUFTFBSV%2FBbOYwWJ2U2WW1PO%2BQVPk%2FG5QwtttF41iJzcG%2BRtKAgmR3i2lbqhWJzANEJuiAnDErYGT3exF1bvtWUZPlqbtzo7TE7AUPnIR1r2cHmzjEawY8xa7PgJlyrLgr9UXDntSv5tWZVQuye908VBZLslwD6eu24wAvSO%2B9CxtfLP1A8WTC25UHIsYcJ4L5PXtMF7ferM65YqpCMCNrirO%2BCfF5wqnzhFY5fdbalnVHVjXIoR2X3Zq6gJpizL1wJ0PuN7cw7yiQAYfN9SY91c1xJuaX%2FdJ%2FOuycLcaELQR3UEtkjsUQ%2FhZiyeP5vSyyKHeLBBXuajhL1Z5Xe7p%2FHiRbkD6QL2GiQduSZ5zuRwvGRLYBwKRga43nMNQalFL%2BDqRqWSjVJTq6DirBuF6t4oqr7fFEwSgPpoY3apXAT9BenBtiP%2F24fp33ZZpyMa12kZuEXrfpbCDonhX4a6e6bMwnPocjGdlgTwV8tIOX0IGbG6L3LYzTCI87O9BjqkAdhXYkuh6M%2BYxWU4xnm7%2F4qlwJ8cThUZrFZ2ga1OPecavULJQ9EcWlAZRftsaM4XCKtXtlKlcGY3CueeJrB6zcNILfbAK42Y03fWUVK97YgX9rE%2BhWF2ZjplA4uvOsSsVJGqw%2F1Kjf8mJGntdElhXAIwNblr%2BDjIACl8j7Y08OPG5KnAM6r0jTyDnD8xRtgnjwmbrmD%2BnTqMxMhe%2FSx%2FE5m4jfcQ&X-Amz-Signature=f8442652c259d3fe3fb996c4bc345a8235306ecf1ac45eb908bdf74d1944c9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWK3V5J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ9RRAEwwQUxCgGcStkQFqLTbNlsgmW4r4EABhUQWYlQIhAJxPyXEb9b5d0CaYKTBeKWwpi8K%2BYEJyWnsUrHTTROf%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpaDc%2FB35xbF%2FK5kMq3AMOutLwEy9Fj7a8kAE4WV4bHUHjxSak0sE6zZ7fUJmvdyYZzSN55zUim4hMbZCdBQC%2B66Y7V8DRZg84ypcSyOl5G2ozSkQk8Y%2FzGkRUQqChW906S6frdpfqGqvykW1S2KVoLDa8JUFTFBSV%2FBbOYwWJ2U2WW1PO%2BQVPk%2FG5QwtttF41iJzcG%2BRtKAgmR3i2lbqhWJzANEJuiAnDErYGT3exF1bvtWUZPlqbtzo7TE7AUPnIR1r2cHmzjEawY8xa7PgJlyrLgr9UXDntSv5tWZVQuye908VBZLslwD6eu24wAvSO%2B9CxtfLP1A8WTC25UHIsYcJ4L5PXtMF7ferM65YqpCMCNrirO%2BCfF5wqnzhFY5fdbalnVHVjXIoR2X3Zq6gJpizL1wJ0PuN7cw7yiQAYfN9SY91c1xJuaX%2FdJ%2FOuycLcaELQR3UEtkjsUQ%2FhZiyeP5vSyyKHeLBBXuajhL1Z5Xe7p%2FHiRbkD6QL2GiQduSZ5zuRwvGRLYBwKRga43nMNQalFL%2BDqRqWSjVJTq6DirBuF6t4oqr7fFEwSgPpoY3apXAT9BenBtiP%2F24fp33ZZpyMa12kZuEXrfpbCDonhX4a6e6bMwnPocjGdlgTwV8tIOX0IGbG6L3LYzTCI87O9BjqkAdhXYkuh6M%2BYxWU4xnm7%2F4qlwJ8cThUZrFZ2ga1OPecavULJQ9EcWlAZRftsaM4XCKtXtlKlcGY3CueeJrB6zcNILfbAK42Y03fWUVK97YgX9rE%2BhWF2ZjplA4uvOsSsVJGqw%2F1Kjf8mJGntdElhXAIwNblr%2BDjIACl8j7Y08OPG5KnAM6r0jTyDnD8xRtgnjwmbrmD%2BnTqMxMhe%2FSx%2FE5m4jfcQ&X-Amz-Signature=5178477ef884e1daf5fa6ac7afbdc844ba337fdfa6b5a1e7bd822bd008c321ec&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWK3V5J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ9RRAEwwQUxCgGcStkQFqLTbNlsgmW4r4EABhUQWYlQIhAJxPyXEb9b5d0CaYKTBeKWwpi8K%2BYEJyWnsUrHTTROf%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpaDc%2FB35xbF%2FK5kMq3AMOutLwEy9Fj7a8kAE4WV4bHUHjxSak0sE6zZ7fUJmvdyYZzSN55zUim4hMbZCdBQC%2B66Y7V8DRZg84ypcSyOl5G2ozSkQk8Y%2FzGkRUQqChW906S6frdpfqGqvykW1S2KVoLDa8JUFTFBSV%2FBbOYwWJ2U2WW1PO%2BQVPk%2FG5QwtttF41iJzcG%2BRtKAgmR3i2lbqhWJzANEJuiAnDErYGT3exF1bvtWUZPlqbtzo7TE7AUPnIR1r2cHmzjEawY8xa7PgJlyrLgr9UXDntSv5tWZVQuye908VBZLslwD6eu24wAvSO%2B9CxtfLP1A8WTC25UHIsYcJ4L5PXtMF7ferM65YqpCMCNrirO%2BCfF5wqnzhFY5fdbalnVHVjXIoR2X3Zq6gJpizL1wJ0PuN7cw7yiQAYfN9SY91c1xJuaX%2FdJ%2FOuycLcaELQR3UEtkjsUQ%2FhZiyeP5vSyyKHeLBBXuajhL1Z5Xe7p%2FHiRbkD6QL2GiQduSZ5zuRwvGRLYBwKRga43nMNQalFL%2BDqRqWSjVJTq6DirBuF6t4oqr7fFEwSgPpoY3apXAT9BenBtiP%2F24fp33ZZpyMa12kZuEXrfpbCDonhX4a6e6bMwnPocjGdlgTwV8tIOX0IGbG6L3LYzTCI87O9BjqkAdhXYkuh6M%2BYxWU4xnm7%2F4qlwJ8cThUZrFZ2ga1OPecavULJQ9EcWlAZRftsaM4XCKtXtlKlcGY3CueeJrB6zcNILfbAK42Y03fWUVK97YgX9rE%2BhWF2ZjplA4uvOsSsVJGqw%2F1Kjf8mJGntdElhXAIwNblr%2BDjIACl8j7Y08OPG5KnAM6r0jTyDnD8xRtgnjwmbrmD%2BnTqMxMhe%2FSx%2FE5m4jfcQ&X-Amz-Signature=60d5c662f7202ede749266a07955ac06b4a50e778f365883a86f2045ef5fc709&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWK3V5J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ9RRAEwwQUxCgGcStkQFqLTbNlsgmW4r4EABhUQWYlQIhAJxPyXEb9b5d0CaYKTBeKWwpi8K%2BYEJyWnsUrHTTROf%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpaDc%2FB35xbF%2FK5kMq3AMOutLwEy9Fj7a8kAE4WV4bHUHjxSak0sE6zZ7fUJmvdyYZzSN55zUim4hMbZCdBQC%2B66Y7V8DRZg84ypcSyOl5G2ozSkQk8Y%2FzGkRUQqChW906S6frdpfqGqvykW1S2KVoLDa8JUFTFBSV%2FBbOYwWJ2U2WW1PO%2BQVPk%2FG5QwtttF41iJzcG%2BRtKAgmR3i2lbqhWJzANEJuiAnDErYGT3exF1bvtWUZPlqbtzo7TE7AUPnIR1r2cHmzjEawY8xa7PgJlyrLgr9UXDntSv5tWZVQuye908VBZLslwD6eu24wAvSO%2B9CxtfLP1A8WTC25UHIsYcJ4L5PXtMF7ferM65YqpCMCNrirO%2BCfF5wqnzhFY5fdbalnVHVjXIoR2X3Zq6gJpizL1wJ0PuN7cw7yiQAYfN9SY91c1xJuaX%2FdJ%2FOuycLcaELQR3UEtkjsUQ%2FhZiyeP5vSyyKHeLBBXuajhL1Z5Xe7p%2FHiRbkD6QL2GiQduSZ5zuRwvGRLYBwKRga43nMNQalFL%2BDqRqWSjVJTq6DirBuF6t4oqr7fFEwSgPpoY3apXAT9BenBtiP%2F24fp33ZZpyMa12kZuEXrfpbCDonhX4a6e6bMwnPocjGdlgTwV8tIOX0IGbG6L3LYzTCI87O9BjqkAdhXYkuh6M%2BYxWU4xnm7%2F4qlwJ8cThUZrFZ2ga1OPecavULJQ9EcWlAZRftsaM4XCKtXtlKlcGY3CueeJrB6zcNILfbAK42Y03fWUVK97YgX9rE%2BhWF2ZjplA4uvOsSsVJGqw%2F1Kjf8mJGntdElhXAIwNblr%2BDjIACl8j7Y08OPG5KnAM6r0jTyDnD8xRtgnjwmbrmD%2BnTqMxMhe%2FSx%2FE5m4jfcQ&X-Amz-Signature=3fcff95c4e10609a8b85505ebac93000b0fd103da66e6b0cbf778868e46edc93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWK3V5J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ9RRAEwwQUxCgGcStkQFqLTbNlsgmW4r4EABhUQWYlQIhAJxPyXEb9b5d0CaYKTBeKWwpi8K%2BYEJyWnsUrHTTROf%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpaDc%2FB35xbF%2FK5kMq3AMOutLwEy9Fj7a8kAE4WV4bHUHjxSak0sE6zZ7fUJmvdyYZzSN55zUim4hMbZCdBQC%2B66Y7V8DRZg84ypcSyOl5G2ozSkQk8Y%2FzGkRUQqChW906S6frdpfqGqvykW1S2KVoLDa8JUFTFBSV%2FBbOYwWJ2U2WW1PO%2BQVPk%2FG5QwtttF41iJzcG%2BRtKAgmR3i2lbqhWJzANEJuiAnDErYGT3exF1bvtWUZPlqbtzo7TE7AUPnIR1r2cHmzjEawY8xa7PgJlyrLgr9UXDntSv5tWZVQuye908VBZLslwD6eu24wAvSO%2B9CxtfLP1A8WTC25UHIsYcJ4L5PXtMF7ferM65YqpCMCNrirO%2BCfF5wqnzhFY5fdbalnVHVjXIoR2X3Zq6gJpizL1wJ0PuN7cw7yiQAYfN9SY91c1xJuaX%2FdJ%2FOuycLcaELQR3UEtkjsUQ%2FhZiyeP5vSyyKHeLBBXuajhL1Z5Xe7p%2FHiRbkD6QL2GiQduSZ5zuRwvGRLYBwKRga43nMNQalFL%2BDqRqWSjVJTq6DirBuF6t4oqr7fFEwSgPpoY3apXAT9BenBtiP%2F24fp33ZZpyMa12kZuEXrfpbCDonhX4a6e6bMwnPocjGdlgTwV8tIOX0IGbG6L3LYzTCI87O9BjqkAdhXYkuh6M%2BYxWU4xnm7%2F4qlwJ8cThUZrFZ2ga1OPecavULJQ9EcWlAZRftsaM4XCKtXtlKlcGY3CueeJrB6zcNILfbAK42Y03fWUVK97YgX9rE%2BhWF2ZjplA4uvOsSsVJGqw%2F1Kjf8mJGntdElhXAIwNblr%2BDjIACl8j7Y08OPG5KnAM6r0jTyDnD8xRtgnjwmbrmD%2BnTqMxMhe%2FSx%2FE5m4jfcQ&X-Amz-Signature=20098c90df2343b50cb387abdd95710c151efba4b7499c77b2966339d1d7b07c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWK3V5J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ9RRAEwwQUxCgGcStkQFqLTbNlsgmW4r4EABhUQWYlQIhAJxPyXEb9b5d0CaYKTBeKWwpi8K%2BYEJyWnsUrHTTROf%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpaDc%2FB35xbF%2FK5kMq3AMOutLwEy9Fj7a8kAE4WV4bHUHjxSak0sE6zZ7fUJmvdyYZzSN55zUim4hMbZCdBQC%2B66Y7V8DRZg84ypcSyOl5G2ozSkQk8Y%2FzGkRUQqChW906S6frdpfqGqvykW1S2KVoLDa8JUFTFBSV%2FBbOYwWJ2U2WW1PO%2BQVPk%2FG5QwtttF41iJzcG%2BRtKAgmR3i2lbqhWJzANEJuiAnDErYGT3exF1bvtWUZPlqbtzo7TE7AUPnIR1r2cHmzjEawY8xa7PgJlyrLgr9UXDntSv5tWZVQuye908VBZLslwD6eu24wAvSO%2B9CxtfLP1A8WTC25UHIsYcJ4L5PXtMF7ferM65YqpCMCNrirO%2BCfF5wqnzhFY5fdbalnVHVjXIoR2X3Zq6gJpizL1wJ0PuN7cw7yiQAYfN9SY91c1xJuaX%2FdJ%2FOuycLcaELQR3UEtkjsUQ%2FhZiyeP5vSyyKHeLBBXuajhL1Z5Xe7p%2FHiRbkD6QL2GiQduSZ5zuRwvGRLYBwKRga43nMNQalFL%2BDqRqWSjVJTq6DirBuF6t4oqr7fFEwSgPpoY3apXAT9BenBtiP%2F24fp33ZZpyMa12kZuEXrfpbCDonhX4a6e6bMwnPocjGdlgTwV8tIOX0IGbG6L3LYzTCI87O9BjqkAdhXYkuh6M%2BYxWU4xnm7%2F4qlwJ8cThUZrFZ2ga1OPecavULJQ9EcWlAZRftsaM4XCKtXtlKlcGY3CueeJrB6zcNILfbAK42Y03fWUVK97YgX9rE%2BhWF2ZjplA4uvOsSsVJGqw%2F1Kjf8mJGntdElhXAIwNblr%2BDjIACl8j7Y08OPG5KnAM6r0jTyDnD8xRtgnjwmbrmD%2BnTqMxMhe%2FSx%2FE5m4jfcQ&X-Amz-Signature=5c37c5d7433c396a98bf9e8789fabc93242303bef7c0ab2fac3ddb9a3a497f35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWK3V5J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ9RRAEwwQUxCgGcStkQFqLTbNlsgmW4r4EABhUQWYlQIhAJxPyXEb9b5d0CaYKTBeKWwpi8K%2BYEJyWnsUrHTTROf%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpaDc%2FB35xbF%2FK5kMq3AMOutLwEy9Fj7a8kAE4WV4bHUHjxSak0sE6zZ7fUJmvdyYZzSN55zUim4hMbZCdBQC%2B66Y7V8DRZg84ypcSyOl5G2ozSkQk8Y%2FzGkRUQqChW906S6frdpfqGqvykW1S2KVoLDa8JUFTFBSV%2FBbOYwWJ2U2WW1PO%2BQVPk%2FG5QwtttF41iJzcG%2BRtKAgmR3i2lbqhWJzANEJuiAnDErYGT3exF1bvtWUZPlqbtzo7TE7AUPnIR1r2cHmzjEawY8xa7PgJlyrLgr9UXDntSv5tWZVQuye908VBZLslwD6eu24wAvSO%2B9CxtfLP1A8WTC25UHIsYcJ4L5PXtMF7ferM65YqpCMCNrirO%2BCfF5wqnzhFY5fdbalnVHVjXIoR2X3Zq6gJpizL1wJ0PuN7cw7yiQAYfN9SY91c1xJuaX%2FdJ%2FOuycLcaELQR3UEtkjsUQ%2FhZiyeP5vSyyKHeLBBXuajhL1Z5Xe7p%2FHiRbkD6QL2GiQduSZ5zuRwvGRLYBwKRga43nMNQalFL%2BDqRqWSjVJTq6DirBuF6t4oqr7fFEwSgPpoY3apXAT9BenBtiP%2F24fp33ZZpyMa12kZuEXrfpbCDonhX4a6e6bMwnPocjGdlgTwV8tIOX0IGbG6L3LYzTCI87O9BjqkAdhXYkuh6M%2BYxWU4xnm7%2F4qlwJ8cThUZrFZ2ga1OPecavULJQ9EcWlAZRftsaM4XCKtXtlKlcGY3CueeJrB6zcNILfbAK42Y03fWUVK97YgX9rE%2BhWF2ZjplA4uvOsSsVJGqw%2F1Kjf8mJGntdElhXAIwNblr%2BDjIACl8j7Y08OPG5KnAM6r0jTyDnD8xRtgnjwmbrmD%2BnTqMxMhe%2FSx%2FE5m4jfcQ&X-Amz-Signature=2ca6c077fe5c1ebbae4392bde9b6e143e3f2fcefe48ddef899434feabbd89786&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWK3V5J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ9RRAEwwQUxCgGcStkQFqLTbNlsgmW4r4EABhUQWYlQIhAJxPyXEb9b5d0CaYKTBeKWwpi8K%2BYEJyWnsUrHTTROf%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpaDc%2FB35xbF%2FK5kMq3AMOutLwEy9Fj7a8kAE4WV4bHUHjxSak0sE6zZ7fUJmvdyYZzSN55zUim4hMbZCdBQC%2B66Y7V8DRZg84ypcSyOl5G2ozSkQk8Y%2FzGkRUQqChW906S6frdpfqGqvykW1S2KVoLDa8JUFTFBSV%2FBbOYwWJ2U2WW1PO%2BQVPk%2FG5QwtttF41iJzcG%2BRtKAgmR3i2lbqhWJzANEJuiAnDErYGT3exF1bvtWUZPlqbtzo7TE7AUPnIR1r2cHmzjEawY8xa7PgJlyrLgr9UXDntSv5tWZVQuye908VBZLslwD6eu24wAvSO%2B9CxtfLP1A8WTC25UHIsYcJ4L5PXtMF7ferM65YqpCMCNrirO%2BCfF5wqnzhFY5fdbalnVHVjXIoR2X3Zq6gJpizL1wJ0PuN7cw7yiQAYfN9SY91c1xJuaX%2FdJ%2FOuycLcaELQR3UEtkjsUQ%2FhZiyeP5vSyyKHeLBBXuajhL1Z5Xe7p%2FHiRbkD6QL2GiQduSZ5zuRwvGRLYBwKRga43nMNQalFL%2BDqRqWSjVJTq6DirBuF6t4oqr7fFEwSgPpoY3apXAT9BenBtiP%2F24fp33ZZpyMa12kZuEXrfpbCDonhX4a6e6bMwnPocjGdlgTwV8tIOX0IGbG6L3LYzTCI87O9BjqkAdhXYkuh6M%2BYxWU4xnm7%2F4qlwJ8cThUZrFZ2ga1OPecavULJQ9EcWlAZRftsaM4XCKtXtlKlcGY3CueeJrB6zcNILfbAK42Y03fWUVK97YgX9rE%2BhWF2ZjplA4uvOsSsVJGqw%2F1Kjf8mJGntdElhXAIwNblr%2BDjIACl8j7Y08OPG5KnAM6r0jTyDnD8xRtgnjwmbrmD%2BnTqMxMhe%2FSx%2FE5m4jfcQ&X-Amz-Signature=60055dd92940dd9e40e74d30b084d1725a18145df73a79686c52e6976af2b8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
