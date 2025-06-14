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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBAISDH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAFWXYvuGFJpl%2FbN%2FCjf8ly2DXJmuON4zJXe6Pb9eD9nAiEAwTcRyitL4KGh6DKoC4IaNCKhktHZ8Off%2FIMKAeCiaSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFtfm0%2FPlCTEhwaqQCrcA%2BnacFzynoTkXCaCRQDm%2BFENJCwL%2FVfk6K%2BP%2BeWYCr4%2FoHoZ5%2BH8fEp2o%2BqM6c9P5dIDbId%2BbyLevPaYVCfSFdNH8RQIGC619ZeO5wqN5%2B4y5d4I9OevwYp2sP0B5BMU77u2H78FBdg4zBtKBPc6eB0stwh2t2cl9sdJKZtxHYfT0F3L6w9To2YI83l%2B38EiW1pBIpFqjOB3AUYtZkNeQTO8T37hywDZNOZGN399g%2FtrIjov5srIZn83h7%2FYQ9K67tP2hL285pU2vcTQvXOdlqRYDmYqTjjHCx%2FQ9QjSUJuH5NeKrbD%2FRrSOCCHpcFhW6ML0iPaZkzofVdgoaj4sGo6eXPStE91smeYUJXJ32u9Em3qk13UNBsULm0ojIBU4J8OunqmTAjFVHzSzuamBXM21EcXTXAxbKaF8JVq2%2F2C8%2B6No%2BuxmBTFgBewQbIPxuzStYvNcSxE0pqHlO93ZYePGKohWU6LZGKb1oY3bfYxukXfk0Lqsg8hDpqPwY9Hm%2FzAjkQHqRKxxfD%2BhstuWyYfiK4SgIbuX%2F8iTF8XlFmWCCF5DL7dJvHp9xLo8qwmVrGrd0B32zhgwErYEt1rKGiHD1pkKZelbKm1zPNLZcRHkhYMhLePFRtyE2CD1MLbss8IGOqUBWyUkzCyJfUwJ6KLZNQ8udpJbubLsfQ4QKXm%2FTb9pzjY45DIS753JRZEDY5%2Fou0%2F8s7UgVhz6ixqpHoBVSPty6%2FI5%2FLjAlChbv%2Bten94zN5TBtSlC01yOZi6Js0kORXLpaWNJvmm2q40EuzZI5onpwWruf5j3cJ8yTxy0wkXOUXjhn12fXl9bojL5jx%2BHiJpoa02q%2ByZ7S1NpEBN0SiJYjJuyJzz6&X-Amz-Signature=ac0ecf07605925f7302fad8f134c31aa8e141d9f9193e26b33a6547b0e5eeb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBAISDH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAFWXYvuGFJpl%2FbN%2FCjf8ly2DXJmuON4zJXe6Pb9eD9nAiEAwTcRyitL4KGh6DKoC4IaNCKhktHZ8Off%2FIMKAeCiaSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFtfm0%2FPlCTEhwaqQCrcA%2BnacFzynoTkXCaCRQDm%2BFENJCwL%2FVfk6K%2BP%2BeWYCr4%2FoHoZ5%2BH8fEp2o%2BqM6c9P5dIDbId%2BbyLevPaYVCfSFdNH8RQIGC619ZeO5wqN5%2B4y5d4I9OevwYp2sP0B5BMU77u2H78FBdg4zBtKBPc6eB0stwh2t2cl9sdJKZtxHYfT0F3L6w9To2YI83l%2B38EiW1pBIpFqjOB3AUYtZkNeQTO8T37hywDZNOZGN399g%2FtrIjov5srIZn83h7%2FYQ9K67tP2hL285pU2vcTQvXOdlqRYDmYqTjjHCx%2FQ9QjSUJuH5NeKrbD%2FRrSOCCHpcFhW6ML0iPaZkzofVdgoaj4sGo6eXPStE91smeYUJXJ32u9Em3qk13UNBsULm0ojIBU4J8OunqmTAjFVHzSzuamBXM21EcXTXAxbKaF8JVq2%2F2C8%2B6No%2BuxmBTFgBewQbIPxuzStYvNcSxE0pqHlO93ZYePGKohWU6LZGKb1oY3bfYxukXfk0Lqsg8hDpqPwY9Hm%2FzAjkQHqRKxxfD%2BhstuWyYfiK4SgIbuX%2F8iTF8XlFmWCCF5DL7dJvHp9xLo8qwmVrGrd0B32zhgwErYEt1rKGiHD1pkKZelbKm1zPNLZcRHkhYMhLePFRtyE2CD1MLbss8IGOqUBWyUkzCyJfUwJ6KLZNQ8udpJbubLsfQ4QKXm%2FTb9pzjY45DIS753JRZEDY5%2Fou0%2F8s7UgVhz6ixqpHoBVSPty6%2FI5%2FLjAlChbv%2Bten94zN5TBtSlC01yOZi6Js0kORXLpaWNJvmm2q40EuzZI5onpwWruf5j3cJ8yTxy0wkXOUXjhn12fXl9bojL5jx%2BHiJpoa02q%2ByZ7S1NpEBN0SiJYjJuyJzz6&X-Amz-Signature=1d16986994b3eb5cf1fb0eb34b1568c548fbf28c1851bfbbb49b037fd8ef52e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBAISDH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAFWXYvuGFJpl%2FbN%2FCjf8ly2DXJmuON4zJXe6Pb9eD9nAiEAwTcRyitL4KGh6DKoC4IaNCKhktHZ8Off%2FIMKAeCiaSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFtfm0%2FPlCTEhwaqQCrcA%2BnacFzynoTkXCaCRQDm%2BFENJCwL%2FVfk6K%2BP%2BeWYCr4%2FoHoZ5%2BH8fEp2o%2BqM6c9P5dIDbId%2BbyLevPaYVCfSFdNH8RQIGC619ZeO5wqN5%2B4y5d4I9OevwYp2sP0B5BMU77u2H78FBdg4zBtKBPc6eB0stwh2t2cl9sdJKZtxHYfT0F3L6w9To2YI83l%2B38EiW1pBIpFqjOB3AUYtZkNeQTO8T37hywDZNOZGN399g%2FtrIjov5srIZn83h7%2FYQ9K67tP2hL285pU2vcTQvXOdlqRYDmYqTjjHCx%2FQ9QjSUJuH5NeKrbD%2FRrSOCCHpcFhW6ML0iPaZkzofVdgoaj4sGo6eXPStE91smeYUJXJ32u9Em3qk13UNBsULm0ojIBU4J8OunqmTAjFVHzSzuamBXM21EcXTXAxbKaF8JVq2%2F2C8%2B6No%2BuxmBTFgBewQbIPxuzStYvNcSxE0pqHlO93ZYePGKohWU6LZGKb1oY3bfYxukXfk0Lqsg8hDpqPwY9Hm%2FzAjkQHqRKxxfD%2BhstuWyYfiK4SgIbuX%2F8iTF8XlFmWCCF5DL7dJvHp9xLo8qwmVrGrd0B32zhgwErYEt1rKGiHD1pkKZelbKm1zPNLZcRHkhYMhLePFRtyE2CD1MLbss8IGOqUBWyUkzCyJfUwJ6KLZNQ8udpJbubLsfQ4QKXm%2FTb9pzjY45DIS753JRZEDY5%2Fou0%2F8s7UgVhz6ixqpHoBVSPty6%2FI5%2FLjAlChbv%2Bten94zN5TBtSlC01yOZi6Js0kORXLpaWNJvmm2q40EuzZI5onpwWruf5j3cJ8yTxy0wkXOUXjhn12fXl9bojL5jx%2BHiJpoa02q%2ByZ7S1NpEBN0SiJYjJuyJzz6&X-Amz-Signature=f24a0bfa34dae22cf59d052e06ddad8a9cb3f8dd3ea7a5491b2cc4d3a1e7b304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBAISDH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAFWXYvuGFJpl%2FbN%2FCjf8ly2DXJmuON4zJXe6Pb9eD9nAiEAwTcRyitL4KGh6DKoC4IaNCKhktHZ8Off%2FIMKAeCiaSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFtfm0%2FPlCTEhwaqQCrcA%2BnacFzynoTkXCaCRQDm%2BFENJCwL%2FVfk6K%2BP%2BeWYCr4%2FoHoZ5%2BH8fEp2o%2BqM6c9P5dIDbId%2BbyLevPaYVCfSFdNH8RQIGC619ZeO5wqN5%2B4y5d4I9OevwYp2sP0B5BMU77u2H78FBdg4zBtKBPc6eB0stwh2t2cl9sdJKZtxHYfT0F3L6w9To2YI83l%2B38EiW1pBIpFqjOB3AUYtZkNeQTO8T37hywDZNOZGN399g%2FtrIjov5srIZn83h7%2FYQ9K67tP2hL285pU2vcTQvXOdlqRYDmYqTjjHCx%2FQ9QjSUJuH5NeKrbD%2FRrSOCCHpcFhW6ML0iPaZkzofVdgoaj4sGo6eXPStE91smeYUJXJ32u9Em3qk13UNBsULm0ojIBU4J8OunqmTAjFVHzSzuamBXM21EcXTXAxbKaF8JVq2%2F2C8%2B6No%2BuxmBTFgBewQbIPxuzStYvNcSxE0pqHlO93ZYePGKohWU6LZGKb1oY3bfYxukXfk0Lqsg8hDpqPwY9Hm%2FzAjkQHqRKxxfD%2BhstuWyYfiK4SgIbuX%2F8iTF8XlFmWCCF5DL7dJvHp9xLo8qwmVrGrd0B32zhgwErYEt1rKGiHD1pkKZelbKm1zPNLZcRHkhYMhLePFRtyE2CD1MLbss8IGOqUBWyUkzCyJfUwJ6KLZNQ8udpJbubLsfQ4QKXm%2FTb9pzjY45DIS753JRZEDY5%2Fou0%2F8s7UgVhz6ixqpHoBVSPty6%2FI5%2FLjAlChbv%2Bten94zN5TBtSlC01yOZi6Js0kORXLpaWNJvmm2q40EuzZI5onpwWruf5j3cJ8yTxy0wkXOUXjhn12fXl9bojL5jx%2BHiJpoa02q%2ByZ7S1NpEBN0SiJYjJuyJzz6&X-Amz-Signature=0cf3e9f805ff3526e19021d0dff89171aa0533b6a3f95ea538757eb2327628f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBAISDH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAFWXYvuGFJpl%2FbN%2FCjf8ly2DXJmuON4zJXe6Pb9eD9nAiEAwTcRyitL4KGh6DKoC4IaNCKhktHZ8Off%2FIMKAeCiaSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFtfm0%2FPlCTEhwaqQCrcA%2BnacFzynoTkXCaCRQDm%2BFENJCwL%2FVfk6K%2BP%2BeWYCr4%2FoHoZ5%2BH8fEp2o%2BqM6c9P5dIDbId%2BbyLevPaYVCfSFdNH8RQIGC619ZeO5wqN5%2B4y5d4I9OevwYp2sP0B5BMU77u2H78FBdg4zBtKBPc6eB0stwh2t2cl9sdJKZtxHYfT0F3L6w9To2YI83l%2B38EiW1pBIpFqjOB3AUYtZkNeQTO8T37hywDZNOZGN399g%2FtrIjov5srIZn83h7%2FYQ9K67tP2hL285pU2vcTQvXOdlqRYDmYqTjjHCx%2FQ9QjSUJuH5NeKrbD%2FRrSOCCHpcFhW6ML0iPaZkzofVdgoaj4sGo6eXPStE91smeYUJXJ32u9Em3qk13UNBsULm0ojIBU4J8OunqmTAjFVHzSzuamBXM21EcXTXAxbKaF8JVq2%2F2C8%2B6No%2BuxmBTFgBewQbIPxuzStYvNcSxE0pqHlO93ZYePGKohWU6LZGKb1oY3bfYxukXfk0Lqsg8hDpqPwY9Hm%2FzAjkQHqRKxxfD%2BhstuWyYfiK4SgIbuX%2F8iTF8XlFmWCCF5DL7dJvHp9xLo8qwmVrGrd0B32zhgwErYEt1rKGiHD1pkKZelbKm1zPNLZcRHkhYMhLePFRtyE2CD1MLbss8IGOqUBWyUkzCyJfUwJ6KLZNQ8udpJbubLsfQ4QKXm%2FTb9pzjY45DIS753JRZEDY5%2Fou0%2F8s7UgVhz6ixqpHoBVSPty6%2FI5%2FLjAlChbv%2Bten94zN5TBtSlC01yOZi6Js0kORXLpaWNJvmm2q40EuzZI5onpwWruf5j3cJ8yTxy0wkXOUXjhn12fXl9bojL5jx%2BHiJpoa02q%2ByZ7S1NpEBN0SiJYjJuyJzz6&X-Amz-Signature=db4c51df767809a0d4cf03582071860c2c2f67b2294d8603f3bba1806b1f7708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBAISDH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAFWXYvuGFJpl%2FbN%2FCjf8ly2DXJmuON4zJXe6Pb9eD9nAiEAwTcRyitL4KGh6DKoC4IaNCKhktHZ8Off%2FIMKAeCiaSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFtfm0%2FPlCTEhwaqQCrcA%2BnacFzynoTkXCaCRQDm%2BFENJCwL%2FVfk6K%2BP%2BeWYCr4%2FoHoZ5%2BH8fEp2o%2BqM6c9P5dIDbId%2BbyLevPaYVCfSFdNH8RQIGC619ZeO5wqN5%2B4y5d4I9OevwYp2sP0B5BMU77u2H78FBdg4zBtKBPc6eB0stwh2t2cl9sdJKZtxHYfT0F3L6w9To2YI83l%2B38EiW1pBIpFqjOB3AUYtZkNeQTO8T37hywDZNOZGN399g%2FtrIjov5srIZn83h7%2FYQ9K67tP2hL285pU2vcTQvXOdlqRYDmYqTjjHCx%2FQ9QjSUJuH5NeKrbD%2FRrSOCCHpcFhW6ML0iPaZkzofVdgoaj4sGo6eXPStE91smeYUJXJ32u9Em3qk13UNBsULm0ojIBU4J8OunqmTAjFVHzSzuamBXM21EcXTXAxbKaF8JVq2%2F2C8%2B6No%2BuxmBTFgBewQbIPxuzStYvNcSxE0pqHlO93ZYePGKohWU6LZGKb1oY3bfYxukXfk0Lqsg8hDpqPwY9Hm%2FzAjkQHqRKxxfD%2BhstuWyYfiK4SgIbuX%2F8iTF8XlFmWCCF5DL7dJvHp9xLo8qwmVrGrd0B32zhgwErYEt1rKGiHD1pkKZelbKm1zPNLZcRHkhYMhLePFRtyE2CD1MLbss8IGOqUBWyUkzCyJfUwJ6KLZNQ8udpJbubLsfQ4QKXm%2FTb9pzjY45DIS753JRZEDY5%2Fou0%2F8s7UgVhz6ixqpHoBVSPty6%2FI5%2FLjAlChbv%2Bten94zN5TBtSlC01yOZi6Js0kORXLpaWNJvmm2q40EuzZI5onpwWruf5j3cJ8yTxy0wkXOUXjhn12fXl9bojL5jx%2BHiJpoa02q%2ByZ7S1NpEBN0SiJYjJuyJzz6&X-Amz-Signature=18bf89798886edd0171e0b3328182f7358d973a14b2b7e65c2865252aecc0c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBAISDH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAFWXYvuGFJpl%2FbN%2FCjf8ly2DXJmuON4zJXe6Pb9eD9nAiEAwTcRyitL4KGh6DKoC4IaNCKhktHZ8Off%2FIMKAeCiaSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFtfm0%2FPlCTEhwaqQCrcA%2BnacFzynoTkXCaCRQDm%2BFENJCwL%2FVfk6K%2BP%2BeWYCr4%2FoHoZ5%2BH8fEp2o%2BqM6c9P5dIDbId%2BbyLevPaYVCfSFdNH8RQIGC619ZeO5wqN5%2B4y5d4I9OevwYp2sP0B5BMU77u2H78FBdg4zBtKBPc6eB0stwh2t2cl9sdJKZtxHYfT0F3L6w9To2YI83l%2B38EiW1pBIpFqjOB3AUYtZkNeQTO8T37hywDZNOZGN399g%2FtrIjov5srIZn83h7%2FYQ9K67tP2hL285pU2vcTQvXOdlqRYDmYqTjjHCx%2FQ9QjSUJuH5NeKrbD%2FRrSOCCHpcFhW6ML0iPaZkzofVdgoaj4sGo6eXPStE91smeYUJXJ32u9Em3qk13UNBsULm0ojIBU4J8OunqmTAjFVHzSzuamBXM21EcXTXAxbKaF8JVq2%2F2C8%2B6No%2BuxmBTFgBewQbIPxuzStYvNcSxE0pqHlO93ZYePGKohWU6LZGKb1oY3bfYxukXfk0Lqsg8hDpqPwY9Hm%2FzAjkQHqRKxxfD%2BhstuWyYfiK4SgIbuX%2F8iTF8XlFmWCCF5DL7dJvHp9xLo8qwmVrGrd0B32zhgwErYEt1rKGiHD1pkKZelbKm1zPNLZcRHkhYMhLePFRtyE2CD1MLbss8IGOqUBWyUkzCyJfUwJ6KLZNQ8udpJbubLsfQ4QKXm%2FTb9pzjY45DIS753JRZEDY5%2Fou0%2F8s7UgVhz6ixqpHoBVSPty6%2FI5%2FLjAlChbv%2Bten94zN5TBtSlC01yOZi6Js0kORXLpaWNJvmm2q40EuzZI5onpwWruf5j3cJ8yTxy0wkXOUXjhn12fXl9bojL5jx%2BHiJpoa02q%2ByZ7S1NpEBN0SiJYjJuyJzz6&X-Amz-Signature=5c54f766d96a2404c7aeb4cb5a2a4959064df10a69889825f7f48156b520dd0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBAISDH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAFWXYvuGFJpl%2FbN%2FCjf8ly2DXJmuON4zJXe6Pb9eD9nAiEAwTcRyitL4KGh6DKoC4IaNCKhktHZ8Off%2FIMKAeCiaSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFtfm0%2FPlCTEhwaqQCrcA%2BnacFzynoTkXCaCRQDm%2BFENJCwL%2FVfk6K%2BP%2BeWYCr4%2FoHoZ5%2BH8fEp2o%2BqM6c9P5dIDbId%2BbyLevPaYVCfSFdNH8RQIGC619ZeO5wqN5%2B4y5d4I9OevwYp2sP0B5BMU77u2H78FBdg4zBtKBPc6eB0stwh2t2cl9sdJKZtxHYfT0F3L6w9To2YI83l%2B38EiW1pBIpFqjOB3AUYtZkNeQTO8T37hywDZNOZGN399g%2FtrIjov5srIZn83h7%2FYQ9K67tP2hL285pU2vcTQvXOdlqRYDmYqTjjHCx%2FQ9QjSUJuH5NeKrbD%2FRrSOCCHpcFhW6ML0iPaZkzofVdgoaj4sGo6eXPStE91smeYUJXJ32u9Em3qk13UNBsULm0ojIBU4J8OunqmTAjFVHzSzuamBXM21EcXTXAxbKaF8JVq2%2F2C8%2B6No%2BuxmBTFgBewQbIPxuzStYvNcSxE0pqHlO93ZYePGKohWU6LZGKb1oY3bfYxukXfk0Lqsg8hDpqPwY9Hm%2FzAjkQHqRKxxfD%2BhstuWyYfiK4SgIbuX%2F8iTF8XlFmWCCF5DL7dJvHp9xLo8qwmVrGrd0B32zhgwErYEt1rKGiHD1pkKZelbKm1zPNLZcRHkhYMhLePFRtyE2CD1MLbss8IGOqUBWyUkzCyJfUwJ6KLZNQ8udpJbubLsfQ4QKXm%2FTb9pzjY45DIS753JRZEDY5%2Fou0%2F8s7UgVhz6ixqpHoBVSPty6%2FI5%2FLjAlChbv%2Bten94zN5TBtSlC01yOZi6Js0kORXLpaWNJvmm2q40EuzZI5onpwWruf5j3cJ8yTxy0wkXOUXjhn12fXl9bojL5jx%2BHiJpoa02q%2ByZ7S1NpEBN0SiJYjJuyJzz6&X-Amz-Signature=791c25adfb77fee7c00c9ee8d385fccd3edf9744c0a82b5c45142f68975207d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
