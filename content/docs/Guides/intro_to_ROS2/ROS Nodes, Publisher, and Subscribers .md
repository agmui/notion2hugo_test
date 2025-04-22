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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC77KHO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCID1w96p6JgXL9%2FIkkUvReS7IW5EUCWZabYT45mW24MecAiEAy80Pusq9xs3QGag6ZktUZ2No5dzLqRYFS08vtTT71lgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqp3N5f%2FQKhi8FK6ircAy7k8l3hwJZDqvEuWOZdLRnQjQykXJvMrySulPOXAkwpll%2BEzNEh1%2BeKqNSCxC54KHKMf5AnXlLrzeuhko9j4ogeagpdaXJPPZaZD4bUQ2N0lYDedCaxbUyDK0WNibnPXqk9MlOvfd0BePg64AyEIgZefwGKdbxmn0HZ8%2FS8VpIzyX3OksgZgpXyLh4CSbE2o5NJ8HZlck3qsWFs0BK2BxReKak05oJuXovE4KK11mPxNZlYdAfdpFRYoLVOK3fC%2Bjtz95mH4e1%2FbtgeHLgYmqK5xnIVLuNGLHROggtp2Ir7YhY97fvszkelzBxsIV2D4AbAEPZqrSn9yWPdMz9%2FRolMv0yAz1i4DuQrDUROuQfFSA3r7tuRWauF3ANRDeSZ6RlVxBy1FO0wnxcAWgM8FcOOxdlvj75CDxAqBFaK7vveD3X%2FPVGtKulBoWVVLr2LsCJi6tXhwfkCiv9bZCHsoVYMc9lLNSq30LVME2h9ymhJxA5kfaltQMfza7g0M46oGUUQhqYP8WOVHdcC8uqEy8C3ve9P1D9tTrohSa18PfG%2FVQebntdGHKRIB0ea9wHtlyFDLwZRXFLHfcaQ%2Bie7stseqfAv31tWvcTuaZcjSWOGhMBt0BopoEZv%2FsrCMNXxm8AGOqUBoCOZWc%2BjEFzm93dVkxKeu0SxT%2BtrwHwUUjPQ1dm95v8zsgI1jet63vjfdES7HEr99ykQp0ut3cM6iC1w2pH%2Ff2cdYQheDiV%2FJxblDLpkafcQcKCQf0HNK6TxvlVHRTVpyjNhUgZyMbcQEoDkJISapvSvHpjLJ4YIQTtmZgsIOkfQ54LA1DvAWU5C3iQUYOT1YAYOjfYbBxamLchl63rMwx8FJj9r&X-Amz-Signature=b42673dd8f74e15abc9af5937f6eaebec9cc56057cd04e3a462bbfb40e12f55b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC77KHO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCID1w96p6JgXL9%2FIkkUvReS7IW5EUCWZabYT45mW24MecAiEAy80Pusq9xs3QGag6ZktUZ2No5dzLqRYFS08vtTT71lgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqp3N5f%2FQKhi8FK6ircAy7k8l3hwJZDqvEuWOZdLRnQjQykXJvMrySulPOXAkwpll%2BEzNEh1%2BeKqNSCxC54KHKMf5AnXlLrzeuhko9j4ogeagpdaXJPPZaZD4bUQ2N0lYDedCaxbUyDK0WNibnPXqk9MlOvfd0BePg64AyEIgZefwGKdbxmn0HZ8%2FS8VpIzyX3OksgZgpXyLh4CSbE2o5NJ8HZlck3qsWFs0BK2BxReKak05oJuXovE4KK11mPxNZlYdAfdpFRYoLVOK3fC%2Bjtz95mH4e1%2FbtgeHLgYmqK5xnIVLuNGLHROggtp2Ir7YhY97fvszkelzBxsIV2D4AbAEPZqrSn9yWPdMz9%2FRolMv0yAz1i4DuQrDUROuQfFSA3r7tuRWauF3ANRDeSZ6RlVxBy1FO0wnxcAWgM8FcOOxdlvj75CDxAqBFaK7vveD3X%2FPVGtKulBoWVVLr2LsCJi6tXhwfkCiv9bZCHsoVYMc9lLNSq30LVME2h9ymhJxA5kfaltQMfza7g0M46oGUUQhqYP8WOVHdcC8uqEy8C3ve9P1D9tTrohSa18PfG%2FVQebntdGHKRIB0ea9wHtlyFDLwZRXFLHfcaQ%2Bie7stseqfAv31tWvcTuaZcjSWOGhMBt0BopoEZv%2FsrCMNXxm8AGOqUBoCOZWc%2BjEFzm93dVkxKeu0SxT%2BtrwHwUUjPQ1dm95v8zsgI1jet63vjfdES7HEr99ykQp0ut3cM6iC1w2pH%2Ff2cdYQheDiV%2FJxblDLpkafcQcKCQf0HNK6TxvlVHRTVpyjNhUgZyMbcQEoDkJISapvSvHpjLJ4YIQTtmZgsIOkfQ54LA1DvAWU5C3iQUYOT1YAYOjfYbBxamLchl63rMwx8FJj9r&X-Amz-Signature=795c9cb9ab48e7eb8572fce8114e10e719d31516ad8c76fe4ee200618fd052b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC77KHO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCID1w96p6JgXL9%2FIkkUvReS7IW5EUCWZabYT45mW24MecAiEAy80Pusq9xs3QGag6ZktUZ2No5dzLqRYFS08vtTT71lgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqp3N5f%2FQKhi8FK6ircAy7k8l3hwJZDqvEuWOZdLRnQjQykXJvMrySulPOXAkwpll%2BEzNEh1%2BeKqNSCxC54KHKMf5AnXlLrzeuhko9j4ogeagpdaXJPPZaZD4bUQ2N0lYDedCaxbUyDK0WNibnPXqk9MlOvfd0BePg64AyEIgZefwGKdbxmn0HZ8%2FS8VpIzyX3OksgZgpXyLh4CSbE2o5NJ8HZlck3qsWFs0BK2BxReKak05oJuXovE4KK11mPxNZlYdAfdpFRYoLVOK3fC%2Bjtz95mH4e1%2FbtgeHLgYmqK5xnIVLuNGLHROggtp2Ir7YhY97fvszkelzBxsIV2D4AbAEPZqrSn9yWPdMz9%2FRolMv0yAz1i4DuQrDUROuQfFSA3r7tuRWauF3ANRDeSZ6RlVxBy1FO0wnxcAWgM8FcOOxdlvj75CDxAqBFaK7vveD3X%2FPVGtKulBoWVVLr2LsCJi6tXhwfkCiv9bZCHsoVYMc9lLNSq30LVME2h9ymhJxA5kfaltQMfza7g0M46oGUUQhqYP8WOVHdcC8uqEy8C3ve9P1D9tTrohSa18PfG%2FVQebntdGHKRIB0ea9wHtlyFDLwZRXFLHfcaQ%2Bie7stseqfAv31tWvcTuaZcjSWOGhMBt0BopoEZv%2FsrCMNXxm8AGOqUBoCOZWc%2BjEFzm93dVkxKeu0SxT%2BtrwHwUUjPQ1dm95v8zsgI1jet63vjfdES7HEr99ykQp0ut3cM6iC1w2pH%2Ff2cdYQheDiV%2FJxblDLpkafcQcKCQf0HNK6TxvlVHRTVpyjNhUgZyMbcQEoDkJISapvSvHpjLJ4YIQTtmZgsIOkfQ54LA1DvAWU5C3iQUYOT1YAYOjfYbBxamLchl63rMwx8FJj9r&X-Amz-Signature=c63eb85ec7daf4da2aec3a993900cc4e91cbd7cc99611a8a5636a7c09ef3c1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC77KHO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCID1w96p6JgXL9%2FIkkUvReS7IW5EUCWZabYT45mW24MecAiEAy80Pusq9xs3QGag6ZktUZ2No5dzLqRYFS08vtTT71lgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqp3N5f%2FQKhi8FK6ircAy7k8l3hwJZDqvEuWOZdLRnQjQykXJvMrySulPOXAkwpll%2BEzNEh1%2BeKqNSCxC54KHKMf5AnXlLrzeuhko9j4ogeagpdaXJPPZaZD4bUQ2N0lYDedCaxbUyDK0WNibnPXqk9MlOvfd0BePg64AyEIgZefwGKdbxmn0HZ8%2FS8VpIzyX3OksgZgpXyLh4CSbE2o5NJ8HZlck3qsWFs0BK2BxReKak05oJuXovE4KK11mPxNZlYdAfdpFRYoLVOK3fC%2Bjtz95mH4e1%2FbtgeHLgYmqK5xnIVLuNGLHROggtp2Ir7YhY97fvszkelzBxsIV2D4AbAEPZqrSn9yWPdMz9%2FRolMv0yAz1i4DuQrDUROuQfFSA3r7tuRWauF3ANRDeSZ6RlVxBy1FO0wnxcAWgM8FcOOxdlvj75CDxAqBFaK7vveD3X%2FPVGtKulBoWVVLr2LsCJi6tXhwfkCiv9bZCHsoVYMc9lLNSq30LVME2h9ymhJxA5kfaltQMfza7g0M46oGUUQhqYP8WOVHdcC8uqEy8C3ve9P1D9tTrohSa18PfG%2FVQebntdGHKRIB0ea9wHtlyFDLwZRXFLHfcaQ%2Bie7stseqfAv31tWvcTuaZcjSWOGhMBt0BopoEZv%2FsrCMNXxm8AGOqUBoCOZWc%2BjEFzm93dVkxKeu0SxT%2BtrwHwUUjPQ1dm95v8zsgI1jet63vjfdES7HEr99ykQp0ut3cM6iC1w2pH%2Ff2cdYQheDiV%2FJxblDLpkafcQcKCQf0HNK6TxvlVHRTVpyjNhUgZyMbcQEoDkJISapvSvHpjLJ4YIQTtmZgsIOkfQ54LA1DvAWU5C3iQUYOT1YAYOjfYbBxamLchl63rMwx8FJj9r&X-Amz-Signature=e82687d30fdcbc4cff71173fc0121ad572111348b4988caf30012b102d11b5fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC77KHO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCID1w96p6JgXL9%2FIkkUvReS7IW5EUCWZabYT45mW24MecAiEAy80Pusq9xs3QGag6ZktUZ2No5dzLqRYFS08vtTT71lgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqp3N5f%2FQKhi8FK6ircAy7k8l3hwJZDqvEuWOZdLRnQjQykXJvMrySulPOXAkwpll%2BEzNEh1%2BeKqNSCxC54KHKMf5AnXlLrzeuhko9j4ogeagpdaXJPPZaZD4bUQ2N0lYDedCaxbUyDK0WNibnPXqk9MlOvfd0BePg64AyEIgZefwGKdbxmn0HZ8%2FS8VpIzyX3OksgZgpXyLh4CSbE2o5NJ8HZlck3qsWFs0BK2BxReKak05oJuXovE4KK11mPxNZlYdAfdpFRYoLVOK3fC%2Bjtz95mH4e1%2FbtgeHLgYmqK5xnIVLuNGLHROggtp2Ir7YhY97fvszkelzBxsIV2D4AbAEPZqrSn9yWPdMz9%2FRolMv0yAz1i4DuQrDUROuQfFSA3r7tuRWauF3ANRDeSZ6RlVxBy1FO0wnxcAWgM8FcOOxdlvj75CDxAqBFaK7vveD3X%2FPVGtKulBoWVVLr2LsCJi6tXhwfkCiv9bZCHsoVYMc9lLNSq30LVME2h9ymhJxA5kfaltQMfza7g0M46oGUUQhqYP8WOVHdcC8uqEy8C3ve9P1D9tTrohSa18PfG%2FVQebntdGHKRIB0ea9wHtlyFDLwZRXFLHfcaQ%2Bie7stseqfAv31tWvcTuaZcjSWOGhMBt0BopoEZv%2FsrCMNXxm8AGOqUBoCOZWc%2BjEFzm93dVkxKeu0SxT%2BtrwHwUUjPQ1dm95v8zsgI1jet63vjfdES7HEr99ykQp0ut3cM6iC1w2pH%2Ff2cdYQheDiV%2FJxblDLpkafcQcKCQf0HNK6TxvlVHRTVpyjNhUgZyMbcQEoDkJISapvSvHpjLJ4YIQTtmZgsIOkfQ54LA1DvAWU5C3iQUYOT1YAYOjfYbBxamLchl63rMwx8FJj9r&X-Amz-Signature=72ec373f03a6c97e0029aafd0ef9cb660ba7a11247365de9245087ce57ba844e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC77KHO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCID1w96p6JgXL9%2FIkkUvReS7IW5EUCWZabYT45mW24MecAiEAy80Pusq9xs3QGag6ZktUZ2No5dzLqRYFS08vtTT71lgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqp3N5f%2FQKhi8FK6ircAy7k8l3hwJZDqvEuWOZdLRnQjQykXJvMrySulPOXAkwpll%2BEzNEh1%2BeKqNSCxC54KHKMf5AnXlLrzeuhko9j4ogeagpdaXJPPZaZD4bUQ2N0lYDedCaxbUyDK0WNibnPXqk9MlOvfd0BePg64AyEIgZefwGKdbxmn0HZ8%2FS8VpIzyX3OksgZgpXyLh4CSbE2o5NJ8HZlck3qsWFs0BK2BxReKak05oJuXovE4KK11mPxNZlYdAfdpFRYoLVOK3fC%2Bjtz95mH4e1%2FbtgeHLgYmqK5xnIVLuNGLHROggtp2Ir7YhY97fvszkelzBxsIV2D4AbAEPZqrSn9yWPdMz9%2FRolMv0yAz1i4DuQrDUROuQfFSA3r7tuRWauF3ANRDeSZ6RlVxBy1FO0wnxcAWgM8FcOOxdlvj75CDxAqBFaK7vveD3X%2FPVGtKulBoWVVLr2LsCJi6tXhwfkCiv9bZCHsoVYMc9lLNSq30LVME2h9ymhJxA5kfaltQMfza7g0M46oGUUQhqYP8WOVHdcC8uqEy8C3ve9P1D9tTrohSa18PfG%2FVQebntdGHKRIB0ea9wHtlyFDLwZRXFLHfcaQ%2Bie7stseqfAv31tWvcTuaZcjSWOGhMBt0BopoEZv%2FsrCMNXxm8AGOqUBoCOZWc%2BjEFzm93dVkxKeu0SxT%2BtrwHwUUjPQ1dm95v8zsgI1jet63vjfdES7HEr99ykQp0ut3cM6iC1w2pH%2Ff2cdYQheDiV%2FJxblDLpkafcQcKCQf0HNK6TxvlVHRTVpyjNhUgZyMbcQEoDkJISapvSvHpjLJ4YIQTtmZgsIOkfQ54LA1DvAWU5C3iQUYOT1YAYOjfYbBxamLchl63rMwx8FJj9r&X-Amz-Signature=6b306336340c9784a214cd97287ef2aa053f5d7e103c9bf9815768389c9cebb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC77KHO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCID1w96p6JgXL9%2FIkkUvReS7IW5EUCWZabYT45mW24MecAiEAy80Pusq9xs3QGag6ZktUZ2No5dzLqRYFS08vtTT71lgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqp3N5f%2FQKhi8FK6ircAy7k8l3hwJZDqvEuWOZdLRnQjQykXJvMrySulPOXAkwpll%2BEzNEh1%2BeKqNSCxC54KHKMf5AnXlLrzeuhko9j4ogeagpdaXJPPZaZD4bUQ2N0lYDedCaxbUyDK0WNibnPXqk9MlOvfd0BePg64AyEIgZefwGKdbxmn0HZ8%2FS8VpIzyX3OksgZgpXyLh4CSbE2o5NJ8HZlck3qsWFs0BK2BxReKak05oJuXovE4KK11mPxNZlYdAfdpFRYoLVOK3fC%2Bjtz95mH4e1%2FbtgeHLgYmqK5xnIVLuNGLHROggtp2Ir7YhY97fvszkelzBxsIV2D4AbAEPZqrSn9yWPdMz9%2FRolMv0yAz1i4DuQrDUROuQfFSA3r7tuRWauF3ANRDeSZ6RlVxBy1FO0wnxcAWgM8FcOOxdlvj75CDxAqBFaK7vveD3X%2FPVGtKulBoWVVLr2LsCJi6tXhwfkCiv9bZCHsoVYMc9lLNSq30LVME2h9ymhJxA5kfaltQMfza7g0M46oGUUQhqYP8WOVHdcC8uqEy8C3ve9P1D9tTrohSa18PfG%2FVQebntdGHKRIB0ea9wHtlyFDLwZRXFLHfcaQ%2Bie7stseqfAv31tWvcTuaZcjSWOGhMBt0BopoEZv%2FsrCMNXxm8AGOqUBoCOZWc%2BjEFzm93dVkxKeu0SxT%2BtrwHwUUjPQ1dm95v8zsgI1jet63vjfdES7HEr99ykQp0ut3cM6iC1w2pH%2Ff2cdYQheDiV%2FJxblDLpkafcQcKCQf0HNK6TxvlVHRTVpyjNhUgZyMbcQEoDkJISapvSvHpjLJ4YIQTtmZgsIOkfQ54LA1DvAWU5C3iQUYOT1YAYOjfYbBxamLchl63rMwx8FJj9r&X-Amz-Signature=969eb58d54dcb9237ce5c82ba6e26a3e30448ecafab5ed50ac2f654c06892faa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC77KHO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCID1w96p6JgXL9%2FIkkUvReS7IW5EUCWZabYT45mW24MecAiEAy80Pusq9xs3QGag6ZktUZ2No5dzLqRYFS08vtTT71lgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqp3N5f%2FQKhi8FK6ircAy7k8l3hwJZDqvEuWOZdLRnQjQykXJvMrySulPOXAkwpll%2BEzNEh1%2BeKqNSCxC54KHKMf5AnXlLrzeuhko9j4ogeagpdaXJPPZaZD4bUQ2N0lYDedCaxbUyDK0WNibnPXqk9MlOvfd0BePg64AyEIgZefwGKdbxmn0HZ8%2FS8VpIzyX3OksgZgpXyLh4CSbE2o5NJ8HZlck3qsWFs0BK2BxReKak05oJuXovE4KK11mPxNZlYdAfdpFRYoLVOK3fC%2Bjtz95mH4e1%2FbtgeHLgYmqK5xnIVLuNGLHROggtp2Ir7YhY97fvszkelzBxsIV2D4AbAEPZqrSn9yWPdMz9%2FRolMv0yAz1i4DuQrDUROuQfFSA3r7tuRWauF3ANRDeSZ6RlVxBy1FO0wnxcAWgM8FcOOxdlvj75CDxAqBFaK7vveD3X%2FPVGtKulBoWVVLr2LsCJi6tXhwfkCiv9bZCHsoVYMc9lLNSq30LVME2h9ymhJxA5kfaltQMfza7g0M46oGUUQhqYP8WOVHdcC8uqEy8C3ve9P1D9tTrohSa18PfG%2FVQebntdGHKRIB0ea9wHtlyFDLwZRXFLHfcaQ%2Bie7stseqfAv31tWvcTuaZcjSWOGhMBt0BopoEZv%2FsrCMNXxm8AGOqUBoCOZWc%2BjEFzm93dVkxKeu0SxT%2BtrwHwUUjPQ1dm95v8zsgI1jet63vjfdES7HEr99ykQp0ut3cM6iC1w2pH%2Ff2cdYQheDiV%2FJxblDLpkafcQcKCQf0HNK6TxvlVHRTVpyjNhUgZyMbcQEoDkJISapvSvHpjLJ4YIQTtmZgsIOkfQ54LA1DvAWU5C3iQUYOT1YAYOjfYbBxamLchl63rMwx8FJj9r&X-Amz-Signature=670d5b67b6c6240f4fe994cefb27c4978def8a1bbdd8343f29fec44f76f63085&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
