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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2PUTBK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBliPghm6DuszLu1ZaUQ66Nxv2%2Fc6EZzruzNR3bGHOfmAiBPavOGTp8T6hru8avvw9DD%2BYtWL5J%2BlxjXeAZUYwJt%2FCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMwEHpW7qqLvr2m30KtwDp1R8jC0%2F%2FdNr%2Fbcx8BENBRo3pGAEhUfr3XXFsr9m6H0foqoVD1xjKRP%2BiybNrLfBYIbANDyPp7xrC1U4Fk3zI8m%2FypX0Ym6JAwXVvZp%2B2EQp1BgEmsjqoMAJlPkbTfNM7mLi1bU%2F3ps8mGAy0sr4mc9JCugtUV7VYWnCBI4FVUtQEQjGRUEHULQxnMhWh8RCtC1923owifogDQbRalv7yklHbxG23LHJCSIeV1UMIt%2BnJ%2FBD1fSvHtGT5Vx4OL8n4P5zTFaV3jqxDgy2mw%2B6RRyVfJpm%2Bj3PpMzBl%2BzG0kJzN3u%2BK%2FzFpbsWJe67z%2B7rXDI7N91r6cluUI7CnB1XcpAa5isgTMhWQ%2B%2Fe6fmRBuzoXFr74sa4JES1sCXjllUWURr0yII0GAP3E4EWG13SK3nTUtzyFD9wkQ8%2B0qbaPnc80LbtfGm7Lh5Y3w3HTRrKk3goUHypi1Sgl856%2F2JjwKeMAZeer0WEtML%2FJS4R8KTSebP5cQS9JofRY7gYKiNXZFKkHsvTgRzvpmbEptVFqfH3jkKDq1h9Qao4o2igbzaVsqgA0EVC%2BtA7J9WQlbbhnkPq6XtJgyRsymcYlY2v87blQarV6FJmUE1nY5MSA%2BW7un1H6NseKf%2FZ4wwwkaTGwAY6pgFjqx636HKLqYBPGjfZXZUH0x7mWCXrbWHYsdaBA1NRiGGLMybGt5wCXP9sXF8P8Z9aMoQV5pEbmvjmepghCXtmRtBKneko51t5mho22u9CWuZG437FLnOnOIREoHKRnVtq%2B1NDa4yefr7oREr%2FkbgMZInIhx%2FDcj%2F%2BTLJ88uThHl5jrY7Yilu7wO26w5X9%2Bgyegi0zrk1gue9JVVCJl9SCHEAVZTDX&X-Amz-Signature=4a21d0f0a614157e24a5b4da2d61fcf31ba6ff280ac3dbe846317f38063f3eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2PUTBK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBliPghm6DuszLu1ZaUQ66Nxv2%2Fc6EZzruzNR3bGHOfmAiBPavOGTp8T6hru8avvw9DD%2BYtWL5J%2BlxjXeAZUYwJt%2FCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMwEHpW7qqLvr2m30KtwDp1R8jC0%2F%2FdNr%2Fbcx8BENBRo3pGAEhUfr3XXFsr9m6H0foqoVD1xjKRP%2BiybNrLfBYIbANDyPp7xrC1U4Fk3zI8m%2FypX0Ym6JAwXVvZp%2B2EQp1BgEmsjqoMAJlPkbTfNM7mLi1bU%2F3ps8mGAy0sr4mc9JCugtUV7VYWnCBI4FVUtQEQjGRUEHULQxnMhWh8RCtC1923owifogDQbRalv7yklHbxG23LHJCSIeV1UMIt%2BnJ%2FBD1fSvHtGT5Vx4OL8n4P5zTFaV3jqxDgy2mw%2B6RRyVfJpm%2Bj3PpMzBl%2BzG0kJzN3u%2BK%2FzFpbsWJe67z%2B7rXDI7N91r6cluUI7CnB1XcpAa5isgTMhWQ%2B%2Fe6fmRBuzoXFr74sa4JES1sCXjllUWURr0yII0GAP3E4EWG13SK3nTUtzyFD9wkQ8%2B0qbaPnc80LbtfGm7Lh5Y3w3HTRrKk3goUHypi1Sgl856%2F2JjwKeMAZeer0WEtML%2FJS4R8KTSebP5cQS9JofRY7gYKiNXZFKkHsvTgRzvpmbEptVFqfH3jkKDq1h9Qao4o2igbzaVsqgA0EVC%2BtA7J9WQlbbhnkPq6XtJgyRsymcYlY2v87blQarV6FJmUE1nY5MSA%2BW7un1H6NseKf%2FZ4wwwkaTGwAY6pgFjqx636HKLqYBPGjfZXZUH0x7mWCXrbWHYsdaBA1NRiGGLMybGt5wCXP9sXF8P8Z9aMoQV5pEbmvjmepghCXtmRtBKneko51t5mho22u9CWuZG437FLnOnOIREoHKRnVtq%2B1NDa4yefr7oREr%2FkbgMZInIhx%2FDcj%2F%2BTLJ88uThHl5jrY7Yilu7wO26w5X9%2Bgyegi0zrk1gue9JVVCJl9SCHEAVZTDX&X-Amz-Signature=9c00ee2b892a5d2c9089f1fd88dcfdfde3eb1321eb914df999d2aea8de38f64a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2PUTBK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBliPghm6DuszLu1ZaUQ66Nxv2%2Fc6EZzruzNR3bGHOfmAiBPavOGTp8T6hru8avvw9DD%2BYtWL5J%2BlxjXeAZUYwJt%2FCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMwEHpW7qqLvr2m30KtwDp1R8jC0%2F%2FdNr%2Fbcx8BENBRo3pGAEhUfr3XXFsr9m6H0foqoVD1xjKRP%2BiybNrLfBYIbANDyPp7xrC1U4Fk3zI8m%2FypX0Ym6JAwXVvZp%2B2EQp1BgEmsjqoMAJlPkbTfNM7mLi1bU%2F3ps8mGAy0sr4mc9JCugtUV7VYWnCBI4FVUtQEQjGRUEHULQxnMhWh8RCtC1923owifogDQbRalv7yklHbxG23LHJCSIeV1UMIt%2BnJ%2FBD1fSvHtGT5Vx4OL8n4P5zTFaV3jqxDgy2mw%2B6RRyVfJpm%2Bj3PpMzBl%2BzG0kJzN3u%2BK%2FzFpbsWJe67z%2B7rXDI7N91r6cluUI7CnB1XcpAa5isgTMhWQ%2B%2Fe6fmRBuzoXFr74sa4JES1sCXjllUWURr0yII0GAP3E4EWG13SK3nTUtzyFD9wkQ8%2B0qbaPnc80LbtfGm7Lh5Y3w3HTRrKk3goUHypi1Sgl856%2F2JjwKeMAZeer0WEtML%2FJS4R8KTSebP5cQS9JofRY7gYKiNXZFKkHsvTgRzvpmbEptVFqfH3jkKDq1h9Qao4o2igbzaVsqgA0EVC%2BtA7J9WQlbbhnkPq6XtJgyRsymcYlY2v87blQarV6FJmUE1nY5MSA%2BW7un1H6NseKf%2FZ4wwwkaTGwAY6pgFjqx636HKLqYBPGjfZXZUH0x7mWCXrbWHYsdaBA1NRiGGLMybGt5wCXP9sXF8P8Z9aMoQV5pEbmvjmepghCXtmRtBKneko51t5mho22u9CWuZG437FLnOnOIREoHKRnVtq%2B1NDa4yefr7oREr%2FkbgMZInIhx%2FDcj%2F%2BTLJ88uThHl5jrY7Yilu7wO26w5X9%2Bgyegi0zrk1gue9JVVCJl9SCHEAVZTDX&X-Amz-Signature=a6efc48facd8cc60ba977a0f6dc99ff6dd9f181b1e539db56830a7a7af02a71c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2PUTBK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBliPghm6DuszLu1ZaUQ66Nxv2%2Fc6EZzruzNR3bGHOfmAiBPavOGTp8T6hru8avvw9DD%2BYtWL5J%2BlxjXeAZUYwJt%2FCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMwEHpW7qqLvr2m30KtwDp1R8jC0%2F%2FdNr%2Fbcx8BENBRo3pGAEhUfr3XXFsr9m6H0foqoVD1xjKRP%2BiybNrLfBYIbANDyPp7xrC1U4Fk3zI8m%2FypX0Ym6JAwXVvZp%2B2EQp1BgEmsjqoMAJlPkbTfNM7mLi1bU%2F3ps8mGAy0sr4mc9JCugtUV7VYWnCBI4FVUtQEQjGRUEHULQxnMhWh8RCtC1923owifogDQbRalv7yklHbxG23LHJCSIeV1UMIt%2BnJ%2FBD1fSvHtGT5Vx4OL8n4P5zTFaV3jqxDgy2mw%2B6RRyVfJpm%2Bj3PpMzBl%2BzG0kJzN3u%2BK%2FzFpbsWJe67z%2B7rXDI7N91r6cluUI7CnB1XcpAa5isgTMhWQ%2B%2Fe6fmRBuzoXFr74sa4JES1sCXjllUWURr0yII0GAP3E4EWG13SK3nTUtzyFD9wkQ8%2B0qbaPnc80LbtfGm7Lh5Y3w3HTRrKk3goUHypi1Sgl856%2F2JjwKeMAZeer0WEtML%2FJS4R8KTSebP5cQS9JofRY7gYKiNXZFKkHsvTgRzvpmbEptVFqfH3jkKDq1h9Qao4o2igbzaVsqgA0EVC%2BtA7J9WQlbbhnkPq6XtJgyRsymcYlY2v87blQarV6FJmUE1nY5MSA%2BW7un1H6NseKf%2FZ4wwwkaTGwAY6pgFjqx636HKLqYBPGjfZXZUH0x7mWCXrbWHYsdaBA1NRiGGLMybGt5wCXP9sXF8P8Z9aMoQV5pEbmvjmepghCXtmRtBKneko51t5mho22u9CWuZG437FLnOnOIREoHKRnVtq%2B1NDa4yefr7oREr%2FkbgMZInIhx%2FDcj%2F%2BTLJ88uThHl5jrY7Yilu7wO26w5X9%2Bgyegi0zrk1gue9JVVCJl9SCHEAVZTDX&X-Amz-Signature=f976fc92f120c2755439bbcfc2e28c1fde499de81f323470c532ed3e6ef56173&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2PUTBK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBliPghm6DuszLu1ZaUQ66Nxv2%2Fc6EZzruzNR3bGHOfmAiBPavOGTp8T6hru8avvw9DD%2BYtWL5J%2BlxjXeAZUYwJt%2FCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMwEHpW7qqLvr2m30KtwDp1R8jC0%2F%2FdNr%2Fbcx8BENBRo3pGAEhUfr3XXFsr9m6H0foqoVD1xjKRP%2BiybNrLfBYIbANDyPp7xrC1U4Fk3zI8m%2FypX0Ym6JAwXVvZp%2B2EQp1BgEmsjqoMAJlPkbTfNM7mLi1bU%2F3ps8mGAy0sr4mc9JCugtUV7VYWnCBI4FVUtQEQjGRUEHULQxnMhWh8RCtC1923owifogDQbRalv7yklHbxG23LHJCSIeV1UMIt%2BnJ%2FBD1fSvHtGT5Vx4OL8n4P5zTFaV3jqxDgy2mw%2B6RRyVfJpm%2Bj3PpMzBl%2BzG0kJzN3u%2BK%2FzFpbsWJe67z%2B7rXDI7N91r6cluUI7CnB1XcpAa5isgTMhWQ%2B%2Fe6fmRBuzoXFr74sa4JES1sCXjllUWURr0yII0GAP3E4EWG13SK3nTUtzyFD9wkQ8%2B0qbaPnc80LbtfGm7Lh5Y3w3HTRrKk3goUHypi1Sgl856%2F2JjwKeMAZeer0WEtML%2FJS4R8KTSebP5cQS9JofRY7gYKiNXZFKkHsvTgRzvpmbEptVFqfH3jkKDq1h9Qao4o2igbzaVsqgA0EVC%2BtA7J9WQlbbhnkPq6XtJgyRsymcYlY2v87blQarV6FJmUE1nY5MSA%2BW7un1H6NseKf%2FZ4wwwkaTGwAY6pgFjqx636HKLqYBPGjfZXZUH0x7mWCXrbWHYsdaBA1NRiGGLMybGt5wCXP9sXF8P8Z9aMoQV5pEbmvjmepghCXtmRtBKneko51t5mho22u9CWuZG437FLnOnOIREoHKRnVtq%2B1NDa4yefr7oREr%2FkbgMZInIhx%2FDcj%2F%2BTLJ88uThHl5jrY7Yilu7wO26w5X9%2Bgyegi0zrk1gue9JVVCJl9SCHEAVZTDX&X-Amz-Signature=f58ae13e431f218f857c8c49992c4588c59d90566d0977ae16ddc39dc353f975&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2PUTBK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBliPghm6DuszLu1ZaUQ66Nxv2%2Fc6EZzruzNR3bGHOfmAiBPavOGTp8T6hru8avvw9DD%2BYtWL5J%2BlxjXeAZUYwJt%2FCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMwEHpW7qqLvr2m30KtwDp1R8jC0%2F%2FdNr%2Fbcx8BENBRo3pGAEhUfr3XXFsr9m6H0foqoVD1xjKRP%2BiybNrLfBYIbANDyPp7xrC1U4Fk3zI8m%2FypX0Ym6JAwXVvZp%2B2EQp1BgEmsjqoMAJlPkbTfNM7mLi1bU%2F3ps8mGAy0sr4mc9JCugtUV7VYWnCBI4FVUtQEQjGRUEHULQxnMhWh8RCtC1923owifogDQbRalv7yklHbxG23LHJCSIeV1UMIt%2BnJ%2FBD1fSvHtGT5Vx4OL8n4P5zTFaV3jqxDgy2mw%2B6RRyVfJpm%2Bj3PpMzBl%2BzG0kJzN3u%2BK%2FzFpbsWJe67z%2B7rXDI7N91r6cluUI7CnB1XcpAa5isgTMhWQ%2B%2Fe6fmRBuzoXFr74sa4JES1sCXjllUWURr0yII0GAP3E4EWG13SK3nTUtzyFD9wkQ8%2B0qbaPnc80LbtfGm7Lh5Y3w3HTRrKk3goUHypi1Sgl856%2F2JjwKeMAZeer0WEtML%2FJS4R8KTSebP5cQS9JofRY7gYKiNXZFKkHsvTgRzvpmbEptVFqfH3jkKDq1h9Qao4o2igbzaVsqgA0EVC%2BtA7J9WQlbbhnkPq6XtJgyRsymcYlY2v87blQarV6FJmUE1nY5MSA%2BW7un1H6NseKf%2FZ4wwwkaTGwAY6pgFjqx636HKLqYBPGjfZXZUH0x7mWCXrbWHYsdaBA1NRiGGLMybGt5wCXP9sXF8P8Z9aMoQV5pEbmvjmepghCXtmRtBKneko51t5mho22u9CWuZG437FLnOnOIREoHKRnVtq%2B1NDa4yefr7oREr%2FkbgMZInIhx%2FDcj%2F%2BTLJ88uThHl5jrY7Yilu7wO26w5X9%2Bgyegi0zrk1gue9JVVCJl9SCHEAVZTDX&X-Amz-Signature=d6b0b7ea72ea568090dcc9474426fc829ac29512ee53f34b2f5c7420e794e967&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2PUTBK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBliPghm6DuszLu1ZaUQ66Nxv2%2Fc6EZzruzNR3bGHOfmAiBPavOGTp8T6hru8avvw9DD%2BYtWL5J%2BlxjXeAZUYwJt%2FCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMwEHpW7qqLvr2m30KtwDp1R8jC0%2F%2FdNr%2Fbcx8BENBRo3pGAEhUfr3XXFsr9m6H0foqoVD1xjKRP%2BiybNrLfBYIbANDyPp7xrC1U4Fk3zI8m%2FypX0Ym6JAwXVvZp%2B2EQp1BgEmsjqoMAJlPkbTfNM7mLi1bU%2F3ps8mGAy0sr4mc9JCugtUV7VYWnCBI4FVUtQEQjGRUEHULQxnMhWh8RCtC1923owifogDQbRalv7yklHbxG23LHJCSIeV1UMIt%2BnJ%2FBD1fSvHtGT5Vx4OL8n4P5zTFaV3jqxDgy2mw%2B6RRyVfJpm%2Bj3PpMzBl%2BzG0kJzN3u%2BK%2FzFpbsWJe67z%2B7rXDI7N91r6cluUI7CnB1XcpAa5isgTMhWQ%2B%2Fe6fmRBuzoXFr74sa4JES1sCXjllUWURr0yII0GAP3E4EWG13SK3nTUtzyFD9wkQ8%2B0qbaPnc80LbtfGm7Lh5Y3w3HTRrKk3goUHypi1Sgl856%2F2JjwKeMAZeer0WEtML%2FJS4R8KTSebP5cQS9JofRY7gYKiNXZFKkHsvTgRzvpmbEptVFqfH3jkKDq1h9Qao4o2igbzaVsqgA0EVC%2BtA7J9WQlbbhnkPq6XtJgyRsymcYlY2v87blQarV6FJmUE1nY5MSA%2BW7un1H6NseKf%2FZ4wwwkaTGwAY6pgFjqx636HKLqYBPGjfZXZUH0x7mWCXrbWHYsdaBA1NRiGGLMybGt5wCXP9sXF8P8Z9aMoQV5pEbmvjmepghCXtmRtBKneko51t5mho22u9CWuZG437FLnOnOIREoHKRnVtq%2B1NDa4yefr7oREr%2FkbgMZInIhx%2FDcj%2F%2BTLJ88uThHl5jrY7Yilu7wO26w5X9%2Bgyegi0zrk1gue9JVVCJl9SCHEAVZTDX&X-Amz-Signature=41b3746f2208bcaea22942b38374e4b7aca2560c40ef769fb0e8fd22ff6fbf66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2PUTBK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBliPghm6DuszLu1ZaUQ66Nxv2%2Fc6EZzruzNR3bGHOfmAiBPavOGTp8T6hru8avvw9DD%2BYtWL5J%2BlxjXeAZUYwJt%2FCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMwEHpW7qqLvr2m30KtwDp1R8jC0%2F%2FdNr%2Fbcx8BENBRo3pGAEhUfr3XXFsr9m6H0foqoVD1xjKRP%2BiybNrLfBYIbANDyPp7xrC1U4Fk3zI8m%2FypX0Ym6JAwXVvZp%2B2EQp1BgEmsjqoMAJlPkbTfNM7mLi1bU%2F3ps8mGAy0sr4mc9JCugtUV7VYWnCBI4FVUtQEQjGRUEHULQxnMhWh8RCtC1923owifogDQbRalv7yklHbxG23LHJCSIeV1UMIt%2BnJ%2FBD1fSvHtGT5Vx4OL8n4P5zTFaV3jqxDgy2mw%2B6RRyVfJpm%2Bj3PpMzBl%2BzG0kJzN3u%2BK%2FzFpbsWJe67z%2B7rXDI7N91r6cluUI7CnB1XcpAa5isgTMhWQ%2B%2Fe6fmRBuzoXFr74sa4JES1sCXjllUWURr0yII0GAP3E4EWG13SK3nTUtzyFD9wkQ8%2B0qbaPnc80LbtfGm7Lh5Y3w3HTRrKk3goUHypi1Sgl856%2F2JjwKeMAZeer0WEtML%2FJS4R8KTSebP5cQS9JofRY7gYKiNXZFKkHsvTgRzvpmbEptVFqfH3jkKDq1h9Qao4o2igbzaVsqgA0EVC%2BtA7J9WQlbbhnkPq6XtJgyRsymcYlY2v87blQarV6FJmUE1nY5MSA%2BW7un1H6NseKf%2FZ4wwwkaTGwAY6pgFjqx636HKLqYBPGjfZXZUH0x7mWCXrbWHYsdaBA1NRiGGLMybGt5wCXP9sXF8P8Z9aMoQV5pEbmvjmepghCXtmRtBKneko51t5mho22u9CWuZG437FLnOnOIREoHKRnVtq%2B1NDa4yefr7oREr%2FkbgMZInIhx%2FDcj%2F%2BTLJ88uThHl5jrY7Yilu7wO26w5X9%2Bgyegi0zrk1gue9JVVCJl9SCHEAVZTDX&X-Amz-Signature=4df52c29cef3b1651835b76b77c3bb1b8b5d20007943e742b01aac940cb71965&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
