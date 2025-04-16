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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77ZZIDQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArECV9mmZcYvTtkHyGNnvarb2xltUuCUxPhdu2QZuqhAiEA%2BMAMhi%2FdZCxdKzPcnjiuXLGAHHwwJHDWE2tS3L5EgQgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMyvv7JgG0HYQCARYSrcA9yvjk7hBeAk4y5%2BkcwGAA3Fyt6MCxF%2B3GtWofyOeulM7jnuCgk3udesicEq3T6J6F1fnMiG%2Bv2c0aQ%2Bm%2BH6xkBsYaegPmtnOunATk9WvSm2CP7QQgGYr%2BAk3sCuqlvbpRANtffKz32qp7Y523sQwouzcExHL9z%2B33ea3y3kk8KGTr5apX%2B1%2FnxUJFlGKX8jbMWdoPq7vjOkyJEyteavfWuVwoPDGFvVeZePGy6vZoA8MpCtjTSCEXOn6q6HTyU5O6yCGZc77zAEr6q5stVaDb3p%2BGsC9q3A9Lf7wgAizkHGMdzvsfkNFFm%2FH4hrzFBJRZNfi6Dm%2B1Uj5eANTUGH7zg%2BPqfUDWQIYj8%2FK5v9nisOE3TcOYiE8c0Y5aA51eY9dSnyMESPgp73MTHNhaIT2j81AGuibhW4jT%2B48L4R1%2FvTX7uCN%2BbjiEb8wv6aWfolmIu%2BzmZypSdd43W5o3GN2CvJcGXJ0PXb%2Fdo1YhSb0i6qM7Ca7rK%2FANNnXCaOFuxmRu3XZWuOM9QFFbHJtEscP0EiQtXUs8QCZwEGyshcWKQLEtRAWj1om4QYai88hSxGIk%2FZ2vUEvzLmoQoLnAlndcGAxglITu5n2ik49SoWZf4UGe36LIfefVdCSq4aMPSj%2FL8GOqUBmo2sMBI%2FwTBaRxilXxj64nlZLBPRo0aBKASwWYNXQ02R4eV0vQaM9JPPNZFhb54vlwaUDzvs57uCSJlevlAyx7r%2FjXzTZTF%2FCbA5JkAP9C3j1gf%2FSAlu5B350VEUzTVqwJbqAeM6wLFXTHRhJgpWVxkIrfzFYqImkRHs%2BVTcTY5Ez4xQQ9cmvgE3UBitnUrRnzVho%2B1W%2FYCZ08e3QwYa0Z%2B%2FetN%2B&X-Amz-Signature=0768333bfef30a1a95e2e386522ce59fc69aa909e21fa2ba7e2cf85b5f30acc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77ZZIDQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArECV9mmZcYvTtkHyGNnvarb2xltUuCUxPhdu2QZuqhAiEA%2BMAMhi%2FdZCxdKzPcnjiuXLGAHHwwJHDWE2tS3L5EgQgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMyvv7JgG0HYQCARYSrcA9yvjk7hBeAk4y5%2BkcwGAA3Fyt6MCxF%2B3GtWofyOeulM7jnuCgk3udesicEq3T6J6F1fnMiG%2Bv2c0aQ%2Bm%2BH6xkBsYaegPmtnOunATk9WvSm2CP7QQgGYr%2BAk3sCuqlvbpRANtffKz32qp7Y523sQwouzcExHL9z%2B33ea3y3kk8KGTr5apX%2B1%2FnxUJFlGKX8jbMWdoPq7vjOkyJEyteavfWuVwoPDGFvVeZePGy6vZoA8MpCtjTSCEXOn6q6HTyU5O6yCGZc77zAEr6q5stVaDb3p%2BGsC9q3A9Lf7wgAizkHGMdzvsfkNFFm%2FH4hrzFBJRZNfi6Dm%2B1Uj5eANTUGH7zg%2BPqfUDWQIYj8%2FK5v9nisOE3TcOYiE8c0Y5aA51eY9dSnyMESPgp73MTHNhaIT2j81AGuibhW4jT%2B48L4R1%2FvTX7uCN%2BbjiEb8wv6aWfolmIu%2BzmZypSdd43W5o3GN2CvJcGXJ0PXb%2Fdo1YhSb0i6qM7Ca7rK%2FANNnXCaOFuxmRu3XZWuOM9QFFbHJtEscP0EiQtXUs8QCZwEGyshcWKQLEtRAWj1om4QYai88hSxGIk%2FZ2vUEvzLmoQoLnAlndcGAxglITu5n2ik49SoWZf4UGe36LIfefVdCSq4aMPSj%2FL8GOqUBmo2sMBI%2FwTBaRxilXxj64nlZLBPRo0aBKASwWYNXQ02R4eV0vQaM9JPPNZFhb54vlwaUDzvs57uCSJlevlAyx7r%2FjXzTZTF%2FCbA5JkAP9C3j1gf%2FSAlu5B350VEUzTVqwJbqAeM6wLFXTHRhJgpWVxkIrfzFYqImkRHs%2BVTcTY5Ez4xQQ9cmvgE3UBitnUrRnzVho%2B1W%2FYCZ08e3QwYa0Z%2B%2FetN%2B&X-Amz-Signature=8f12594c1722846efff8fa79815807eed6ace8c75d39ac34271b7690ca856a87&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77ZZIDQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArECV9mmZcYvTtkHyGNnvarb2xltUuCUxPhdu2QZuqhAiEA%2BMAMhi%2FdZCxdKzPcnjiuXLGAHHwwJHDWE2tS3L5EgQgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMyvv7JgG0HYQCARYSrcA9yvjk7hBeAk4y5%2BkcwGAA3Fyt6MCxF%2B3GtWofyOeulM7jnuCgk3udesicEq3T6J6F1fnMiG%2Bv2c0aQ%2Bm%2BH6xkBsYaegPmtnOunATk9WvSm2CP7QQgGYr%2BAk3sCuqlvbpRANtffKz32qp7Y523sQwouzcExHL9z%2B33ea3y3kk8KGTr5apX%2B1%2FnxUJFlGKX8jbMWdoPq7vjOkyJEyteavfWuVwoPDGFvVeZePGy6vZoA8MpCtjTSCEXOn6q6HTyU5O6yCGZc77zAEr6q5stVaDb3p%2BGsC9q3A9Lf7wgAizkHGMdzvsfkNFFm%2FH4hrzFBJRZNfi6Dm%2B1Uj5eANTUGH7zg%2BPqfUDWQIYj8%2FK5v9nisOE3TcOYiE8c0Y5aA51eY9dSnyMESPgp73MTHNhaIT2j81AGuibhW4jT%2B48L4R1%2FvTX7uCN%2BbjiEb8wv6aWfolmIu%2BzmZypSdd43W5o3GN2CvJcGXJ0PXb%2Fdo1YhSb0i6qM7Ca7rK%2FANNnXCaOFuxmRu3XZWuOM9QFFbHJtEscP0EiQtXUs8QCZwEGyshcWKQLEtRAWj1om4QYai88hSxGIk%2FZ2vUEvzLmoQoLnAlndcGAxglITu5n2ik49SoWZf4UGe36LIfefVdCSq4aMPSj%2FL8GOqUBmo2sMBI%2FwTBaRxilXxj64nlZLBPRo0aBKASwWYNXQ02R4eV0vQaM9JPPNZFhb54vlwaUDzvs57uCSJlevlAyx7r%2FjXzTZTF%2FCbA5JkAP9C3j1gf%2FSAlu5B350VEUzTVqwJbqAeM6wLFXTHRhJgpWVxkIrfzFYqImkRHs%2BVTcTY5Ez4xQQ9cmvgE3UBitnUrRnzVho%2B1W%2FYCZ08e3QwYa0Z%2B%2FetN%2B&X-Amz-Signature=c5087da5a7eebe6c7e6a30338801f6abb1f56834e356873b77f51bfc79a71806&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77ZZIDQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArECV9mmZcYvTtkHyGNnvarb2xltUuCUxPhdu2QZuqhAiEA%2BMAMhi%2FdZCxdKzPcnjiuXLGAHHwwJHDWE2tS3L5EgQgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMyvv7JgG0HYQCARYSrcA9yvjk7hBeAk4y5%2BkcwGAA3Fyt6MCxF%2B3GtWofyOeulM7jnuCgk3udesicEq3T6J6F1fnMiG%2Bv2c0aQ%2Bm%2BH6xkBsYaegPmtnOunATk9WvSm2CP7QQgGYr%2BAk3sCuqlvbpRANtffKz32qp7Y523sQwouzcExHL9z%2B33ea3y3kk8KGTr5apX%2B1%2FnxUJFlGKX8jbMWdoPq7vjOkyJEyteavfWuVwoPDGFvVeZePGy6vZoA8MpCtjTSCEXOn6q6HTyU5O6yCGZc77zAEr6q5stVaDb3p%2BGsC9q3A9Lf7wgAizkHGMdzvsfkNFFm%2FH4hrzFBJRZNfi6Dm%2B1Uj5eANTUGH7zg%2BPqfUDWQIYj8%2FK5v9nisOE3TcOYiE8c0Y5aA51eY9dSnyMESPgp73MTHNhaIT2j81AGuibhW4jT%2B48L4R1%2FvTX7uCN%2BbjiEb8wv6aWfolmIu%2BzmZypSdd43W5o3GN2CvJcGXJ0PXb%2Fdo1YhSb0i6qM7Ca7rK%2FANNnXCaOFuxmRu3XZWuOM9QFFbHJtEscP0EiQtXUs8QCZwEGyshcWKQLEtRAWj1om4QYai88hSxGIk%2FZ2vUEvzLmoQoLnAlndcGAxglITu5n2ik49SoWZf4UGe36LIfefVdCSq4aMPSj%2FL8GOqUBmo2sMBI%2FwTBaRxilXxj64nlZLBPRo0aBKASwWYNXQ02R4eV0vQaM9JPPNZFhb54vlwaUDzvs57uCSJlevlAyx7r%2FjXzTZTF%2FCbA5JkAP9C3j1gf%2FSAlu5B350VEUzTVqwJbqAeM6wLFXTHRhJgpWVxkIrfzFYqImkRHs%2BVTcTY5Ez4xQQ9cmvgE3UBitnUrRnzVho%2B1W%2FYCZ08e3QwYa0Z%2B%2FetN%2B&X-Amz-Signature=ba1dc0d26a29c926458cb17a0e6fef912bc6ac70500fb470ab0c5c31fd87d1e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77ZZIDQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArECV9mmZcYvTtkHyGNnvarb2xltUuCUxPhdu2QZuqhAiEA%2BMAMhi%2FdZCxdKzPcnjiuXLGAHHwwJHDWE2tS3L5EgQgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMyvv7JgG0HYQCARYSrcA9yvjk7hBeAk4y5%2BkcwGAA3Fyt6MCxF%2B3GtWofyOeulM7jnuCgk3udesicEq3T6J6F1fnMiG%2Bv2c0aQ%2Bm%2BH6xkBsYaegPmtnOunATk9WvSm2CP7QQgGYr%2BAk3sCuqlvbpRANtffKz32qp7Y523sQwouzcExHL9z%2B33ea3y3kk8KGTr5apX%2B1%2FnxUJFlGKX8jbMWdoPq7vjOkyJEyteavfWuVwoPDGFvVeZePGy6vZoA8MpCtjTSCEXOn6q6HTyU5O6yCGZc77zAEr6q5stVaDb3p%2BGsC9q3A9Lf7wgAizkHGMdzvsfkNFFm%2FH4hrzFBJRZNfi6Dm%2B1Uj5eANTUGH7zg%2BPqfUDWQIYj8%2FK5v9nisOE3TcOYiE8c0Y5aA51eY9dSnyMESPgp73MTHNhaIT2j81AGuibhW4jT%2B48L4R1%2FvTX7uCN%2BbjiEb8wv6aWfolmIu%2BzmZypSdd43W5o3GN2CvJcGXJ0PXb%2Fdo1YhSb0i6qM7Ca7rK%2FANNnXCaOFuxmRu3XZWuOM9QFFbHJtEscP0EiQtXUs8QCZwEGyshcWKQLEtRAWj1om4QYai88hSxGIk%2FZ2vUEvzLmoQoLnAlndcGAxglITu5n2ik49SoWZf4UGe36LIfefVdCSq4aMPSj%2FL8GOqUBmo2sMBI%2FwTBaRxilXxj64nlZLBPRo0aBKASwWYNXQ02R4eV0vQaM9JPPNZFhb54vlwaUDzvs57uCSJlevlAyx7r%2FjXzTZTF%2FCbA5JkAP9C3j1gf%2FSAlu5B350VEUzTVqwJbqAeM6wLFXTHRhJgpWVxkIrfzFYqImkRHs%2BVTcTY5Ez4xQQ9cmvgE3UBitnUrRnzVho%2B1W%2FYCZ08e3QwYa0Z%2B%2FetN%2B&X-Amz-Signature=63ea0d4b68bee4d545064d92fb0365a1147c3a7eabd41bd22dea7e45ab3a50d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77ZZIDQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArECV9mmZcYvTtkHyGNnvarb2xltUuCUxPhdu2QZuqhAiEA%2BMAMhi%2FdZCxdKzPcnjiuXLGAHHwwJHDWE2tS3L5EgQgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMyvv7JgG0HYQCARYSrcA9yvjk7hBeAk4y5%2BkcwGAA3Fyt6MCxF%2B3GtWofyOeulM7jnuCgk3udesicEq3T6J6F1fnMiG%2Bv2c0aQ%2Bm%2BH6xkBsYaegPmtnOunATk9WvSm2CP7QQgGYr%2BAk3sCuqlvbpRANtffKz32qp7Y523sQwouzcExHL9z%2B33ea3y3kk8KGTr5apX%2B1%2FnxUJFlGKX8jbMWdoPq7vjOkyJEyteavfWuVwoPDGFvVeZePGy6vZoA8MpCtjTSCEXOn6q6HTyU5O6yCGZc77zAEr6q5stVaDb3p%2BGsC9q3A9Lf7wgAizkHGMdzvsfkNFFm%2FH4hrzFBJRZNfi6Dm%2B1Uj5eANTUGH7zg%2BPqfUDWQIYj8%2FK5v9nisOE3TcOYiE8c0Y5aA51eY9dSnyMESPgp73MTHNhaIT2j81AGuibhW4jT%2B48L4R1%2FvTX7uCN%2BbjiEb8wv6aWfolmIu%2BzmZypSdd43W5o3GN2CvJcGXJ0PXb%2Fdo1YhSb0i6qM7Ca7rK%2FANNnXCaOFuxmRu3XZWuOM9QFFbHJtEscP0EiQtXUs8QCZwEGyshcWKQLEtRAWj1om4QYai88hSxGIk%2FZ2vUEvzLmoQoLnAlndcGAxglITu5n2ik49SoWZf4UGe36LIfefVdCSq4aMPSj%2FL8GOqUBmo2sMBI%2FwTBaRxilXxj64nlZLBPRo0aBKASwWYNXQ02R4eV0vQaM9JPPNZFhb54vlwaUDzvs57uCSJlevlAyx7r%2FjXzTZTF%2FCbA5JkAP9C3j1gf%2FSAlu5B350VEUzTVqwJbqAeM6wLFXTHRhJgpWVxkIrfzFYqImkRHs%2BVTcTY5Ez4xQQ9cmvgE3UBitnUrRnzVho%2B1W%2FYCZ08e3QwYa0Z%2B%2FetN%2B&X-Amz-Signature=f46082ed378ae30c4e93c6f8a3300c0c5220b390bb3f39d7b40d6b8a7f409871&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77ZZIDQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArECV9mmZcYvTtkHyGNnvarb2xltUuCUxPhdu2QZuqhAiEA%2BMAMhi%2FdZCxdKzPcnjiuXLGAHHwwJHDWE2tS3L5EgQgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMyvv7JgG0HYQCARYSrcA9yvjk7hBeAk4y5%2BkcwGAA3Fyt6MCxF%2B3GtWofyOeulM7jnuCgk3udesicEq3T6J6F1fnMiG%2Bv2c0aQ%2Bm%2BH6xkBsYaegPmtnOunATk9WvSm2CP7QQgGYr%2BAk3sCuqlvbpRANtffKz32qp7Y523sQwouzcExHL9z%2B33ea3y3kk8KGTr5apX%2B1%2FnxUJFlGKX8jbMWdoPq7vjOkyJEyteavfWuVwoPDGFvVeZePGy6vZoA8MpCtjTSCEXOn6q6HTyU5O6yCGZc77zAEr6q5stVaDb3p%2BGsC9q3A9Lf7wgAizkHGMdzvsfkNFFm%2FH4hrzFBJRZNfi6Dm%2B1Uj5eANTUGH7zg%2BPqfUDWQIYj8%2FK5v9nisOE3TcOYiE8c0Y5aA51eY9dSnyMESPgp73MTHNhaIT2j81AGuibhW4jT%2B48L4R1%2FvTX7uCN%2BbjiEb8wv6aWfolmIu%2BzmZypSdd43W5o3GN2CvJcGXJ0PXb%2Fdo1YhSb0i6qM7Ca7rK%2FANNnXCaOFuxmRu3XZWuOM9QFFbHJtEscP0EiQtXUs8QCZwEGyshcWKQLEtRAWj1om4QYai88hSxGIk%2FZ2vUEvzLmoQoLnAlndcGAxglITu5n2ik49SoWZf4UGe36LIfefVdCSq4aMPSj%2FL8GOqUBmo2sMBI%2FwTBaRxilXxj64nlZLBPRo0aBKASwWYNXQ02R4eV0vQaM9JPPNZFhb54vlwaUDzvs57uCSJlevlAyx7r%2FjXzTZTF%2FCbA5JkAP9C3j1gf%2FSAlu5B350VEUzTVqwJbqAeM6wLFXTHRhJgpWVxkIrfzFYqImkRHs%2BVTcTY5Ez4xQQ9cmvgE3UBitnUrRnzVho%2B1W%2FYCZ08e3QwYa0Z%2B%2FetN%2B&X-Amz-Signature=13b83e7ff8977382d2b1bb2344761f03377478bda1da42f1a0be039dd3273f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77ZZIDQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArECV9mmZcYvTtkHyGNnvarb2xltUuCUxPhdu2QZuqhAiEA%2BMAMhi%2FdZCxdKzPcnjiuXLGAHHwwJHDWE2tS3L5EgQgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMyvv7JgG0HYQCARYSrcA9yvjk7hBeAk4y5%2BkcwGAA3Fyt6MCxF%2B3GtWofyOeulM7jnuCgk3udesicEq3T6J6F1fnMiG%2Bv2c0aQ%2Bm%2BH6xkBsYaegPmtnOunATk9WvSm2CP7QQgGYr%2BAk3sCuqlvbpRANtffKz32qp7Y523sQwouzcExHL9z%2B33ea3y3kk8KGTr5apX%2B1%2FnxUJFlGKX8jbMWdoPq7vjOkyJEyteavfWuVwoPDGFvVeZePGy6vZoA8MpCtjTSCEXOn6q6HTyU5O6yCGZc77zAEr6q5stVaDb3p%2BGsC9q3A9Lf7wgAizkHGMdzvsfkNFFm%2FH4hrzFBJRZNfi6Dm%2B1Uj5eANTUGH7zg%2BPqfUDWQIYj8%2FK5v9nisOE3TcOYiE8c0Y5aA51eY9dSnyMESPgp73MTHNhaIT2j81AGuibhW4jT%2B48L4R1%2FvTX7uCN%2BbjiEb8wv6aWfolmIu%2BzmZypSdd43W5o3GN2CvJcGXJ0PXb%2Fdo1YhSb0i6qM7Ca7rK%2FANNnXCaOFuxmRu3XZWuOM9QFFbHJtEscP0EiQtXUs8QCZwEGyshcWKQLEtRAWj1om4QYai88hSxGIk%2FZ2vUEvzLmoQoLnAlndcGAxglITu5n2ik49SoWZf4UGe36LIfefVdCSq4aMPSj%2FL8GOqUBmo2sMBI%2FwTBaRxilXxj64nlZLBPRo0aBKASwWYNXQ02R4eV0vQaM9JPPNZFhb54vlwaUDzvs57uCSJlevlAyx7r%2FjXzTZTF%2FCbA5JkAP9C3j1gf%2FSAlu5B350VEUzTVqwJbqAeM6wLFXTHRhJgpWVxkIrfzFYqImkRHs%2BVTcTY5Ez4xQQ9cmvgE3UBitnUrRnzVho%2B1W%2FYCZ08e3QwYa0Z%2B%2FetN%2B&X-Amz-Signature=cb33511a883632ba76aa8db339f25ba6a0cb7441e3eed56df15f6cd923b42475&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
