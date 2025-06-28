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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FZJPV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2FR9EK4xjnwQx8b5wXKTkcmNqvt%2FrTbPYPwO3O2v4vAiBQn5sTS3Az0DdMBdzn2TUItGxtzFrQcWb8foTTNWi40yqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6Ufg1Y2dAEYPj78KtwDK1U6Es%2BFii4m3PotEFRiKfbScBIWqolK%2FPjun7FfL3lHUohmuSGk%2FBmhPtkFzrdEhKijhqXRTC1UAKjPCwBnIu%2F6KUK5TVJqyKvfrb52BQx0WWVcDS1NSmEEWZVMO3aWzMwDb3Y%2F%2Bufz67l4ZOMtK57Pw4I5F40tYJzqDKD8Wo4VO6x5RM4IS6FhItyd7l%2BleZ1f6nLvhdnIZfEEpQRlMIFk9Aqa1Cgafv166irMMcfhx9HcjAwg5MBUG4Egcno%2FuhM28Ob1lZAufgzgMS8zghfaXmcg8MPlhsFQpXhwCai65dugNmGrPQpoNPexE%2F%2FyqRs0mvqoKY16kVmOp2SzZkBBxsE9iFE6tjAaAY0pYIwsRaw9K%2BQQoV6IQ7c11KFKGZb3eUyve9zhscKR5Qd7HTuYwYPSCqZV8JziYVGcd4h5nn3tU22pW0YroSQgR88XqdOMuJLDrINXaKrIGIXZeQ7cSSh63RH0SkLiRZM0VJPNwHBhC%2BUOcL6R%2FztdqQNisNTI%2BxtgWydmPpQ8eEBB4VqnzNf0JuJYqST9NYU2SR9rXzZgrurdzPcA8PgxLxab4%2FFpc4BQBEu9CkDyJ8IfCPz4gH0t0X0xba3AT%2FUyLXfeXb7paV0VxGp0qKMwss2AwwY6pgGZoG9sP3ZDJ%2B00H7n58qKiFvjz%2BCtcJwaNotS40bN%2BFwqkUbouWhYTC0tfFwet%2BZr6TKhsUtUS9C98CIgTGJPOQJxc%2FIsDnQXNPXtuB2sLskr%2B3GOekmMknlxdWY41xReYuxH6THw2T0D5xtyo9tt6aVOcC0iEYegyimZo0fLeGNTHtgH0HyXDBAHqjXcK9FEM68NWPsvx0i2GOI%2BxED%2FE7R1tIyeu&X-Amz-Signature=5b29d1706a525c60d5ff30eddce8b552ddc5ee15c3ff824c65386165eb1718f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FZJPV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2FR9EK4xjnwQx8b5wXKTkcmNqvt%2FrTbPYPwO3O2v4vAiBQn5sTS3Az0DdMBdzn2TUItGxtzFrQcWb8foTTNWi40yqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6Ufg1Y2dAEYPj78KtwDK1U6Es%2BFii4m3PotEFRiKfbScBIWqolK%2FPjun7FfL3lHUohmuSGk%2FBmhPtkFzrdEhKijhqXRTC1UAKjPCwBnIu%2F6KUK5TVJqyKvfrb52BQx0WWVcDS1NSmEEWZVMO3aWzMwDb3Y%2F%2Bufz67l4ZOMtK57Pw4I5F40tYJzqDKD8Wo4VO6x5RM4IS6FhItyd7l%2BleZ1f6nLvhdnIZfEEpQRlMIFk9Aqa1Cgafv166irMMcfhx9HcjAwg5MBUG4Egcno%2FuhM28Ob1lZAufgzgMS8zghfaXmcg8MPlhsFQpXhwCai65dugNmGrPQpoNPexE%2F%2FyqRs0mvqoKY16kVmOp2SzZkBBxsE9iFE6tjAaAY0pYIwsRaw9K%2BQQoV6IQ7c11KFKGZb3eUyve9zhscKR5Qd7HTuYwYPSCqZV8JziYVGcd4h5nn3tU22pW0YroSQgR88XqdOMuJLDrINXaKrIGIXZeQ7cSSh63RH0SkLiRZM0VJPNwHBhC%2BUOcL6R%2FztdqQNisNTI%2BxtgWydmPpQ8eEBB4VqnzNf0JuJYqST9NYU2SR9rXzZgrurdzPcA8PgxLxab4%2FFpc4BQBEu9CkDyJ8IfCPz4gH0t0X0xba3AT%2FUyLXfeXb7paV0VxGp0qKMwss2AwwY6pgGZoG9sP3ZDJ%2B00H7n58qKiFvjz%2BCtcJwaNotS40bN%2BFwqkUbouWhYTC0tfFwet%2BZr6TKhsUtUS9C98CIgTGJPOQJxc%2FIsDnQXNPXtuB2sLskr%2B3GOekmMknlxdWY41xReYuxH6THw2T0D5xtyo9tt6aVOcC0iEYegyimZo0fLeGNTHtgH0HyXDBAHqjXcK9FEM68NWPsvx0i2GOI%2BxED%2FE7R1tIyeu&X-Amz-Signature=ee6305d5950604c1ed2fc587ecf2b4a8ffc0f11163ddde19edae5a684bbd8ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FZJPV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2FR9EK4xjnwQx8b5wXKTkcmNqvt%2FrTbPYPwO3O2v4vAiBQn5sTS3Az0DdMBdzn2TUItGxtzFrQcWb8foTTNWi40yqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6Ufg1Y2dAEYPj78KtwDK1U6Es%2BFii4m3PotEFRiKfbScBIWqolK%2FPjun7FfL3lHUohmuSGk%2FBmhPtkFzrdEhKijhqXRTC1UAKjPCwBnIu%2F6KUK5TVJqyKvfrb52BQx0WWVcDS1NSmEEWZVMO3aWzMwDb3Y%2F%2Bufz67l4ZOMtK57Pw4I5F40tYJzqDKD8Wo4VO6x5RM4IS6FhItyd7l%2BleZ1f6nLvhdnIZfEEpQRlMIFk9Aqa1Cgafv166irMMcfhx9HcjAwg5MBUG4Egcno%2FuhM28Ob1lZAufgzgMS8zghfaXmcg8MPlhsFQpXhwCai65dugNmGrPQpoNPexE%2F%2FyqRs0mvqoKY16kVmOp2SzZkBBxsE9iFE6tjAaAY0pYIwsRaw9K%2BQQoV6IQ7c11KFKGZb3eUyve9zhscKR5Qd7HTuYwYPSCqZV8JziYVGcd4h5nn3tU22pW0YroSQgR88XqdOMuJLDrINXaKrIGIXZeQ7cSSh63RH0SkLiRZM0VJPNwHBhC%2BUOcL6R%2FztdqQNisNTI%2BxtgWydmPpQ8eEBB4VqnzNf0JuJYqST9NYU2SR9rXzZgrurdzPcA8PgxLxab4%2FFpc4BQBEu9CkDyJ8IfCPz4gH0t0X0xba3AT%2FUyLXfeXb7paV0VxGp0qKMwss2AwwY6pgGZoG9sP3ZDJ%2B00H7n58qKiFvjz%2BCtcJwaNotS40bN%2BFwqkUbouWhYTC0tfFwet%2BZr6TKhsUtUS9C98CIgTGJPOQJxc%2FIsDnQXNPXtuB2sLskr%2B3GOekmMknlxdWY41xReYuxH6THw2T0D5xtyo9tt6aVOcC0iEYegyimZo0fLeGNTHtgH0HyXDBAHqjXcK9FEM68NWPsvx0i2GOI%2BxED%2FE7R1tIyeu&X-Amz-Signature=cc52ed34849ba3d44683b4770eab8162181327a35bcb036240b538d73109946b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FZJPV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2FR9EK4xjnwQx8b5wXKTkcmNqvt%2FrTbPYPwO3O2v4vAiBQn5sTS3Az0DdMBdzn2TUItGxtzFrQcWb8foTTNWi40yqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6Ufg1Y2dAEYPj78KtwDK1U6Es%2BFii4m3PotEFRiKfbScBIWqolK%2FPjun7FfL3lHUohmuSGk%2FBmhPtkFzrdEhKijhqXRTC1UAKjPCwBnIu%2F6KUK5TVJqyKvfrb52BQx0WWVcDS1NSmEEWZVMO3aWzMwDb3Y%2F%2Bufz67l4ZOMtK57Pw4I5F40tYJzqDKD8Wo4VO6x5RM4IS6FhItyd7l%2BleZ1f6nLvhdnIZfEEpQRlMIFk9Aqa1Cgafv166irMMcfhx9HcjAwg5MBUG4Egcno%2FuhM28Ob1lZAufgzgMS8zghfaXmcg8MPlhsFQpXhwCai65dugNmGrPQpoNPexE%2F%2FyqRs0mvqoKY16kVmOp2SzZkBBxsE9iFE6tjAaAY0pYIwsRaw9K%2BQQoV6IQ7c11KFKGZb3eUyve9zhscKR5Qd7HTuYwYPSCqZV8JziYVGcd4h5nn3tU22pW0YroSQgR88XqdOMuJLDrINXaKrIGIXZeQ7cSSh63RH0SkLiRZM0VJPNwHBhC%2BUOcL6R%2FztdqQNisNTI%2BxtgWydmPpQ8eEBB4VqnzNf0JuJYqST9NYU2SR9rXzZgrurdzPcA8PgxLxab4%2FFpc4BQBEu9CkDyJ8IfCPz4gH0t0X0xba3AT%2FUyLXfeXb7paV0VxGp0qKMwss2AwwY6pgGZoG9sP3ZDJ%2B00H7n58qKiFvjz%2BCtcJwaNotS40bN%2BFwqkUbouWhYTC0tfFwet%2BZr6TKhsUtUS9C98CIgTGJPOQJxc%2FIsDnQXNPXtuB2sLskr%2B3GOekmMknlxdWY41xReYuxH6THw2T0D5xtyo9tt6aVOcC0iEYegyimZo0fLeGNTHtgH0HyXDBAHqjXcK9FEM68NWPsvx0i2GOI%2BxED%2FE7R1tIyeu&X-Amz-Signature=e85bb186c6377b459aefaa6ce6fd965363dea921f03864a66a60d73d38ea047f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FZJPV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2FR9EK4xjnwQx8b5wXKTkcmNqvt%2FrTbPYPwO3O2v4vAiBQn5sTS3Az0DdMBdzn2TUItGxtzFrQcWb8foTTNWi40yqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6Ufg1Y2dAEYPj78KtwDK1U6Es%2BFii4m3PotEFRiKfbScBIWqolK%2FPjun7FfL3lHUohmuSGk%2FBmhPtkFzrdEhKijhqXRTC1UAKjPCwBnIu%2F6KUK5TVJqyKvfrb52BQx0WWVcDS1NSmEEWZVMO3aWzMwDb3Y%2F%2Bufz67l4ZOMtK57Pw4I5F40tYJzqDKD8Wo4VO6x5RM4IS6FhItyd7l%2BleZ1f6nLvhdnIZfEEpQRlMIFk9Aqa1Cgafv166irMMcfhx9HcjAwg5MBUG4Egcno%2FuhM28Ob1lZAufgzgMS8zghfaXmcg8MPlhsFQpXhwCai65dugNmGrPQpoNPexE%2F%2FyqRs0mvqoKY16kVmOp2SzZkBBxsE9iFE6tjAaAY0pYIwsRaw9K%2BQQoV6IQ7c11KFKGZb3eUyve9zhscKR5Qd7HTuYwYPSCqZV8JziYVGcd4h5nn3tU22pW0YroSQgR88XqdOMuJLDrINXaKrIGIXZeQ7cSSh63RH0SkLiRZM0VJPNwHBhC%2BUOcL6R%2FztdqQNisNTI%2BxtgWydmPpQ8eEBB4VqnzNf0JuJYqST9NYU2SR9rXzZgrurdzPcA8PgxLxab4%2FFpc4BQBEu9CkDyJ8IfCPz4gH0t0X0xba3AT%2FUyLXfeXb7paV0VxGp0qKMwss2AwwY6pgGZoG9sP3ZDJ%2B00H7n58qKiFvjz%2BCtcJwaNotS40bN%2BFwqkUbouWhYTC0tfFwet%2BZr6TKhsUtUS9C98CIgTGJPOQJxc%2FIsDnQXNPXtuB2sLskr%2B3GOekmMknlxdWY41xReYuxH6THw2T0D5xtyo9tt6aVOcC0iEYegyimZo0fLeGNTHtgH0HyXDBAHqjXcK9FEM68NWPsvx0i2GOI%2BxED%2FE7R1tIyeu&X-Amz-Signature=240010b4dba021f4c7b12f51d10b1c038e7fc3775181ca2db99460a33cfe538a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FZJPV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2FR9EK4xjnwQx8b5wXKTkcmNqvt%2FrTbPYPwO3O2v4vAiBQn5sTS3Az0DdMBdzn2TUItGxtzFrQcWb8foTTNWi40yqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6Ufg1Y2dAEYPj78KtwDK1U6Es%2BFii4m3PotEFRiKfbScBIWqolK%2FPjun7FfL3lHUohmuSGk%2FBmhPtkFzrdEhKijhqXRTC1UAKjPCwBnIu%2F6KUK5TVJqyKvfrb52BQx0WWVcDS1NSmEEWZVMO3aWzMwDb3Y%2F%2Bufz67l4ZOMtK57Pw4I5F40tYJzqDKD8Wo4VO6x5RM4IS6FhItyd7l%2BleZ1f6nLvhdnIZfEEpQRlMIFk9Aqa1Cgafv166irMMcfhx9HcjAwg5MBUG4Egcno%2FuhM28Ob1lZAufgzgMS8zghfaXmcg8MPlhsFQpXhwCai65dugNmGrPQpoNPexE%2F%2FyqRs0mvqoKY16kVmOp2SzZkBBxsE9iFE6tjAaAY0pYIwsRaw9K%2BQQoV6IQ7c11KFKGZb3eUyve9zhscKR5Qd7HTuYwYPSCqZV8JziYVGcd4h5nn3tU22pW0YroSQgR88XqdOMuJLDrINXaKrIGIXZeQ7cSSh63RH0SkLiRZM0VJPNwHBhC%2BUOcL6R%2FztdqQNisNTI%2BxtgWydmPpQ8eEBB4VqnzNf0JuJYqST9NYU2SR9rXzZgrurdzPcA8PgxLxab4%2FFpc4BQBEu9CkDyJ8IfCPz4gH0t0X0xba3AT%2FUyLXfeXb7paV0VxGp0qKMwss2AwwY6pgGZoG9sP3ZDJ%2B00H7n58qKiFvjz%2BCtcJwaNotS40bN%2BFwqkUbouWhYTC0tfFwet%2BZr6TKhsUtUS9C98CIgTGJPOQJxc%2FIsDnQXNPXtuB2sLskr%2B3GOekmMknlxdWY41xReYuxH6THw2T0D5xtyo9tt6aVOcC0iEYegyimZo0fLeGNTHtgH0HyXDBAHqjXcK9FEM68NWPsvx0i2GOI%2BxED%2FE7R1tIyeu&X-Amz-Signature=ca8638f0a4aa42727092b0c909372663f911d3529c61a8771c9b74617b60695f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FZJPV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2FR9EK4xjnwQx8b5wXKTkcmNqvt%2FrTbPYPwO3O2v4vAiBQn5sTS3Az0DdMBdzn2TUItGxtzFrQcWb8foTTNWi40yqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6Ufg1Y2dAEYPj78KtwDK1U6Es%2BFii4m3PotEFRiKfbScBIWqolK%2FPjun7FfL3lHUohmuSGk%2FBmhPtkFzrdEhKijhqXRTC1UAKjPCwBnIu%2F6KUK5TVJqyKvfrb52BQx0WWVcDS1NSmEEWZVMO3aWzMwDb3Y%2F%2Bufz67l4ZOMtK57Pw4I5F40tYJzqDKD8Wo4VO6x5RM4IS6FhItyd7l%2BleZ1f6nLvhdnIZfEEpQRlMIFk9Aqa1Cgafv166irMMcfhx9HcjAwg5MBUG4Egcno%2FuhM28Ob1lZAufgzgMS8zghfaXmcg8MPlhsFQpXhwCai65dugNmGrPQpoNPexE%2F%2FyqRs0mvqoKY16kVmOp2SzZkBBxsE9iFE6tjAaAY0pYIwsRaw9K%2BQQoV6IQ7c11KFKGZb3eUyve9zhscKR5Qd7HTuYwYPSCqZV8JziYVGcd4h5nn3tU22pW0YroSQgR88XqdOMuJLDrINXaKrIGIXZeQ7cSSh63RH0SkLiRZM0VJPNwHBhC%2BUOcL6R%2FztdqQNisNTI%2BxtgWydmPpQ8eEBB4VqnzNf0JuJYqST9NYU2SR9rXzZgrurdzPcA8PgxLxab4%2FFpc4BQBEu9CkDyJ8IfCPz4gH0t0X0xba3AT%2FUyLXfeXb7paV0VxGp0qKMwss2AwwY6pgGZoG9sP3ZDJ%2B00H7n58qKiFvjz%2BCtcJwaNotS40bN%2BFwqkUbouWhYTC0tfFwet%2BZr6TKhsUtUS9C98CIgTGJPOQJxc%2FIsDnQXNPXtuB2sLskr%2B3GOekmMknlxdWY41xReYuxH6THw2T0D5xtyo9tt6aVOcC0iEYegyimZo0fLeGNTHtgH0HyXDBAHqjXcK9FEM68NWPsvx0i2GOI%2BxED%2FE7R1tIyeu&X-Amz-Signature=09c5ee93b0aeb0ef98acb4cf62a670c68e3cf14fe478376cc52fb8a569ce9637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FZJPV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2FR9EK4xjnwQx8b5wXKTkcmNqvt%2FrTbPYPwO3O2v4vAiBQn5sTS3Az0DdMBdzn2TUItGxtzFrQcWb8foTTNWi40yqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6Ufg1Y2dAEYPj78KtwDK1U6Es%2BFii4m3PotEFRiKfbScBIWqolK%2FPjun7FfL3lHUohmuSGk%2FBmhPtkFzrdEhKijhqXRTC1UAKjPCwBnIu%2F6KUK5TVJqyKvfrb52BQx0WWVcDS1NSmEEWZVMO3aWzMwDb3Y%2F%2Bufz67l4ZOMtK57Pw4I5F40tYJzqDKD8Wo4VO6x5RM4IS6FhItyd7l%2BleZ1f6nLvhdnIZfEEpQRlMIFk9Aqa1Cgafv166irMMcfhx9HcjAwg5MBUG4Egcno%2FuhM28Ob1lZAufgzgMS8zghfaXmcg8MPlhsFQpXhwCai65dugNmGrPQpoNPexE%2F%2FyqRs0mvqoKY16kVmOp2SzZkBBxsE9iFE6tjAaAY0pYIwsRaw9K%2BQQoV6IQ7c11KFKGZb3eUyve9zhscKR5Qd7HTuYwYPSCqZV8JziYVGcd4h5nn3tU22pW0YroSQgR88XqdOMuJLDrINXaKrIGIXZeQ7cSSh63RH0SkLiRZM0VJPNwHBhC%2BUOcL6R%2FztdqQNisNTI%2BxtgWydmPpQ8eEBB4VqnzNf0JuJYqST9NYU2SR9rXzZgrurdzPcA8PgxLxab4%2FFpc4BQBEu9CkDyJ8IfCPz4gH0t0X0xba3AT%2FUyLXfeXb7paV0VxGp0qKMwss2AwwY6pgGZoG9sP3ZDJ%2B00H7n58qKiFvjz%2BCtcJwaNotS40bN%2BFwqkUbouWhYTC0tfFwet%2BZr6TKhsUtUS9C98CIgTGJPOQJxc%2FIsDnQXNPXtuB2sLskr%2B3GOekmMknlxdWY41xReYuxH6THw2T0D5xtyo9tt6aVOcC0iEYegyimZo0fLeGNTHtgH0HyXDBAHqjXcK9FEM68NWPsvx0i2GOI%2BxED%2FE7R1tIyeu&X-Amz-Signature=175f2c93597f931784588661e36e32f7e5efafd688f1a94a4e75d443e471833c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
