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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMSQLRK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDWmYMYm4OVG%2BMzMrmguE4SO16gUe4DcKbS2gV9qVGq6wIgBOg2b%2FJ67M79RPtQB6OdnTchF67qtsPEEF%2Bc4J7FwFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1TyTgW3s30hnodQCrcA1AfLrgBgAFMx%2ByWyzoy73Caf4kuCEN9HcHNMpGiNtjtIKB9CycpRlFijVbLfF0X4LTo6RNIju6o17InI8fzuQYOcZVbBJhZY21D0oQuw%2FoFMySKEDORQwOXogoc%2Fog22hmaqFTJBqOBiFMWWYka2avKniyyrWHXb2wdJADAQp3%2BWdMzY9sbDyZI8bmNbZEP%2B5IK8LsxBSX1h5aQjyETMeRLpnPDuCBfoaR8OSyWsxvFOff9xCScejWEOcJMvW7VapCDZWJ7nlRzvdTPmOdNh4bnhCQcjfw370rvYWD%2BJHdAbhg11Hx1jMRSOJs55kQOTvollVcjbV%2B%2B21ROI5IALwjEqKC9CtrmXLn3d%2FpJOVQTZsGWIURXhyI893dUJfFUSqfHQonFyoN1oZL6LBQqXxPF3c8Zj8UZCwOeXkL4aI%2FE%2FDw%2FqGriumxvaZ1%2F0yaQvElztIEOZgagKSYYiMQvmqRpDDE8xE8TGP8dBmXi8KdMLPUsIlkA2YAXfrAbxpyoBfvCHl8mvr8gvWTr8RIC8AubAyIIvFaD0elJ7BDIo7L9aP8EEmYz3f%2BQW3FZ4QxdQZnz8iSz6uAfgW7jks87mwry1OTIbVtJK4WuXzjsoUiv5eA4c%2BCe9XeU2fsLMIPR2sQGOqUBOt58aIrIelycy2nA2TWs0JvAehJyz7OG4wDG2biTIhQ7UMTSZwTCJrez3pcrczw3Q%2BR8WNnP5sL%2Bo2Rrbygn39GG4GxZHo7lByEfI5tJiwwcaxvvM%2Bq4sSOfQfL%2F%2Frsqc6P1YEfeqt%2BeHWhpc%2FY6kaIQoZNYwGX9W8SUzq%2FqV%2FGYkY1HI9W1Y0yKW4biOCqvAzQ%2FZNLt4E5gbnfcsO%2FtOb4WRi8K&X-Amz-Signature=641076f49cb3c95e9a1e701b681a82b947e8d9f931cf77d2e729eae0e653944c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMSQLRK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDWmYMYm4OVG%2BMzMrmguE4SO16gUe4DcKbS2gV9qVGq6wIgBOg2b%2FJ67M79RPtQB6OdnTchF67qtsPEEF%2Bc4J7FwFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1TyTgW3s30hnodQCrcA1AfLrgBgAFMx%2ByWyzoy73Caf4kuCEN9HcHNMpGiNtjtIKB9CycpRlFijVbLfF0X4LTo6RNIju6o17InI8fzuQYOcZVbBJhZY21D0oQuw%2FoFMySKEDORQwOXogoc%2Fog22hmaqFTJBqOBiFMWWYka2avKniyyrWHXb2wdJADAQp3%2BWdMzY9sbDyZI8bmNbZEP%2B5IK8LsxBSX1h5aQjyETMeRLpnPDuCBfoaR8OSyWsxvFOff9xCScejWEOcJMvW7VapCDZWJ7nlRzvdTPmOdNh4bnhCQcjfw370rvYWD%2BJHdAbhg11Hx1jMRSOJs55kQOTvollVcjbV%2B%2B21ROI5IALwjEqKC9CtrmXLn3d%2FpJOVQTZsGWIURXhyI893dUJfFUSqfHQonFyoN1oZL6LBQqXxPF3c8Zj8UZCwOeXkL4aI%2FE%2FDw%2FqGriumxvaZ1%2F0yaQvElztIEOZgagKSYYiMQvmqRpDDE8xE8TGP8dBmXi8KdMLPUsIlkA2YAXfrAbxpyoBfvCHl8mvr8gvWTr8RIC8AubAyIIvFaD0elJ7BDIo7L9aP8EEmYz3f%2BQW3FZ4QxdQZnz8iSz6uAfgW7jks87mwry1OTIbVtJK4WuXzjsoUiv5eA4c%2BCe9XeU2fsLMIPR2sQGOqUBOt58aIrIelycy2nA2TWs0JvAehJyz7OG4wDG2biTIhQ7UMTSZwTCJrez3pcrczw3Q%2BR8WNnP5sL%2Bo2Rrbygn39GG4GxZHo7lByEfI5tJiwwcaxvvM%2Bq4sSOfQfL%2F%2Frsqc6P1YEfeqt%2BeHWhpc%2FY6kaIQoZNYwGX9W8SUzq%2FqV%2FGYkY1HI9W1Y0yKW4biOCqvAzQ%2FZNLt4E5gbnfcsO%2FtOb4WRi8K&X-Amz-Signature=26fa55b115157a6d1203af4dfd11390dccfcdb5c58163f9e84169ba33c090cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMSQLRK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDWmYMYm4OVG%2BMzMrmguE4SO16gUe4DcKbS2gV9qVGq6wIgBOg2b%2FJ67M79RPtQB6OdnTchF67qtsPEEF%2Bc4J7FwFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1TyTgW3s30hnodQCrcA1AfLrgBgAFMx%2ByWyzoy73Caf4kuCEN9HcHNMpGiNtjtIKB9CycpRlFijVbLfF0X4LTo6RNIju6o17InI8fzuQYOcZVbBJhZY21D0oQuw%2FoFMySKEDORQwOXogoc%2Fog22hmaqFTJBqOBiFMWWYka2avKniyyrWHXb2wdJADAQp3%2BWdMzY9sbDyZI8bmNbZEP%2B5IK8LsxBSX1h5aQjyETMeRLpnPDuCBfoaR8OSyWsxvFOff9xCScejWEOcJMvW7VapCDZWJ7nlRzvdTPmOdNh4bnhCQcjfw370rvYWD%2BJHdAbhg11Hx1jMRSOJs55kQOTvollVcjbV%2B%2B21ROI5IALwjEqKC9CtrmXLn3d%2FpJOVQTZsGWIURXhyI893dUJfFUSqfHQonFyoN1oZL6LBQqXxPF3c8Zj8UZCwOeXkL4aI%2FE%2FDw%2FqGriumxvaZ1%2F0yaQvElztIEOZgagKSYYiMQvmqRpDDE8xE8TGP8dBmXi8KdMLPUsIlkA2YAXfrAbxpyoBfvCHl8mvr8gvWTr8RIC8AubAyIIvFaD0elJ7BDIo7L9aP8EEmYz3f%2BQW3FZ4QxdQZnz8iSz6uAfgW7jks87mwry1OTIbVtJK4WuXzjsoUiv5eA4c%2BCe9XeU2fsLMIPR2sQGOqUBOt58aIrIelycy2nA2TWs0JvAehJyz7OG4wDG2biTIhQ7UMTSZwTCJrez3pcrczw3Q%2BR8WNnP5sL%2Bo2Rrbygn39GG4GxZHo7lByEfI5tJiwwcaxvvM%2Bq4sSOfQfL%2F%2Frsqc6P1YEfeqt%2BeHWhpc%2FY6kaIQoZNYwGX9W8SUzq%2FqV%2FGYkY1HI9W1Y0yKW4biOCqvAzQ%2FZNLt4E5gbnfcsO%2FtOb4WRi8K&X-Amz-Signature=c9ec7e47a96d3950fc206132c6efc2cef0a6ccda06dc34453e4d728e0a8dda4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMSQLRK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDWmYMYm4OVG%2BMzMrmguE4SO16gUe4DcKbS2gV9qVGq6wIgBOg2b%2FJ67M79RPtQB6OdnTchF67qtsPEEF%2Bc4J7FwFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1TyTgW3s30hnodQCrcA1AfLrgBgAFMx%2ByWyzoy73Caf4kuCEN9HcHNMpGiNtjtIKB9CycpRlFijVbLfF0X4LTo6RNIju6o17InI8fzuQYOcZVbBJhZY21D0oQuw%2FoFMySKEDORQwOXogoc%2Fog22hmaqFTJBqOBiFMWWYka2avKniyyrWHXb2wdJADAQp3%2BWdMzY9sbDyZI8bmNbZEP%2B5IK8LsxBSX1h5aQjyETMeRLpnPDuCBfoaR8OSyWsxvFOff9xCScejWEOcJMvW7VapCDZWJ7nlRzvdTPmOdNh4bnhCQcjfw370rvYWD%2BJHdAbhg11Hx1jMRSOJs55kQOTvollVcjbV%2B%2B21ROI5IALwjEqKC9CtrmXLn3d%2FpJOVQTZsGWIURXhyI893dUJfFUSqfHQonFyoN1oZL6LBQqXxPF3c8Zj8UZCwOeXkL4aI%2FE%2FDw%2FqGriumxvaZ1%2F0yaQvElztIEOZgagKSYYiMQvmqRpDDE8xE8TGP8dBmXi8KdMLPUsIlkA2YAXfrAbxpyoBfvCHl8mvr8gvWTr8RIC8AubAyIIvFaD0elJ7BDIo7L9aP8EEmYz3f%2BQW3FZ4QxdQZnz8iSz6uAfgW7jks87mwry1OTIbVtJK4WuXzjsoUiv5eA4c%2BCe9XeU2fsLMIPR2sQGOqUBOt58aIrIelycy2nA2TWs0JvAehJyz7OG4wDG2biTIhQ7UMTSZwTCJrez3pcrczw3Q%2BR8WNnP5sL%2Bo2Rrbygn39GG4GxZHo7lByEfI5tJiwwcaxvvM%2Bq4sSOfQfL%2F%2Frsqc6P1YEfeqt%2BeHWhpc%2FY6kaIQoZNYwGX9W8SUzq%2FqV%2FGYkY1HI9W1Y0yKW4biOCqvAzQ%2FZNLt4E5gbnfcsO%2FtOb4WRi8K&X-Amz-Signature=8ae96359ef85c79dcf8a236d0299a183ada9cb5e7b1da02e9eb9bb5e9f86b777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMSQLRK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDWmYMYm4OVG%2BMzMrmguE4SO16gUe4DcKbS2gV9qVGq6wIgBOg2b%2FJ67M79RPtQB6OdnTchF67qtsPEEF%2Bc4J7FwFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1TyTgW3s30hnodQCrcA1AfLrgBgAFMx%2ByWyzoy73Caf4kuCEN9HcHNMpGiNtjtIKB9CycpRlFijVbLfF0X4LTo6RNIju6o17InI8fzuQYOcZVbBJhZY21D0oQuw%2FoFMySKEDORQwOXogoc%2Fog22hmaqFTJBqOBiFMWWYka2avKniyyrWHXb2wdJADAQp3%2BWdMzY9sbDyZI8bmNbZEP%2B5IK8LsxBSX1h5aQjyETMeRLpnPDuCBfoaR8OSyWsxvFOff9xCScejWEOcJMvW7VapCDZWJ7nlRzvdTPmOdNh4bnhCQcjfw370rvYWD%2BJHdAbhg11Hx1jMRSOJs55kQOTvollVcjbV%2B%2B21ROI5IALwjEqKC9CtrmXLn3d%2FpJOVQTZsGWIURXhyI893dUJfFUSqfHQonFyoN1oZL6LBQqXxPF3c8Zj8UZCwOeXkL4aI%2FE%2FDw%2FqGriumxvaZ1%2F0yaQvElztIEOZgagKSYYiMQvmqRpDDE8xE8TGP8dBmXi8KdMLPUsIlkA2YAXfrAbxpyoBfvCHl8mvr8gvWTr8RIC8AubAyIIvFaD0elJ7BDIo7L9aP8EEmYz3f%2BQW3FZ4QxdQZnz8iSz6uAfgW7jks87mwry1OTIbVtJK4WuXzjsoUiv5eA4c%2BCe9XeU2fsLMIPR2sQGOqUBOt58aIrIelycy2nA2TWs0JvAehJyz7OG4wDG2biTIhQ7UMTSZwTCJrez3pcrczw3Q%2BR8WNnP5sL%2Bo2Rrbygn39GG4GxZHo7lByEfI5tJiwwcaxvvM%2Bq4sSOfQfL%2F%2Frsqc6P1YEfeqt%2BeHWhpc%2FY6kaIQoZNYwGX9W8SUzq%2FqV%2FGYkY1HI9W1Y0yKW4biOCqvAzQ%2FZNLt4E5gbnfcsO%2FtOb4WRi8K&X-Amz-Signature=fa9d3bb3247a1596081ebf1bbe2a96e3a44ca26a7b850e625036a3097bb28525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMSQLRK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDWmYMYm4OVG%2BMzMrmguE4SO16gUe4DcKbS2gV9qVGq6wIgBOg2b%2FJ67M79RPtQB6OdnTchF67qtsPEEF%2Bc4J7FwFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1TyTgW3s30hnodQCrcA1AfLrgBgAFMx%2ByWyzoy73Caf4kuCEN9HcHNMpGiNtjtIKB9CycpRlFijVbLfF0X4LTo6RNIju6o17InI8fzuQYOcZVbBJhZY21D0oQuw%2FoFMySKEDORQwOXogoc%2Fog22hmaqFTJBqOBiFMWWYka2avKniyyrWHXb2wdJADAQp3%2BWdMzY9sbDyZI8bmNbZEP%2B5IK8LsxBSX1h5aQjyETMeRLpnPDuCBfoaR8OSyWsxvFOff9xCScejWEOcJMvW7VapCDZWJ7nlRzvdTPmOdNh4bnhCQcjfw370rvYWD%2BJHdAbhg11Hx1jMRSOJs55kQOTvollVcjbV%2B%2B21ROI5IALwjEqKC9CtrmXLn3d%2FpJOVQTZsGWIURXhyI893dUJfFUSqfHQonFyoN1oZL6LBQqXxPF3c8Zj8UZCwOeXkL4aI%2FE%2FDw%2FqGriumxvaZ1%2F0yaQvElztIEOZgagKSYYiMQvmqRpDDE8xE8TGP8dBmXi8KdMLPUsIlkA2YAXfrAbxpyoBfvCHl8mvr8gvWTr8RIC8AubAyIIvFaD0elJ7BDIo7L9aP8EEmYz3f%2BQW3FZ4QxdQZnz8iSz6uAfgW7jks87mwry1OTIbVtJK4WuXzjsoUiv5eA4c%2BCe9XeU2fsLMIPR2sQGOqUBOt58aIrIelycy2nA2TWs0JvAehJyz7OG4wDG2biTIhQ7UMTSZwTCJrez3pcrczw3Q%2BR8WNnP5sL%2Bo2Rrbygn39GG4GxZHo7lByEfI5tJiwwcaxvvM%2Bq4sSOfQfL%2F%2Frsqc6P1YEfeqt%2BeHWhpc%2FY6kaIQoZNYwGX9W8SUzq%2FqV%2FGYkY1HI9W1Y0yKW4biOCqvAzQ%2FZNLt4E5gbnfcsO%2FtOb4WRi8K&X-Amz-Signature=c3ed255a86595a9c80ff3c05883a9ec5f72daea85df4348fc0080083b7ad109c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMSQLRK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDWmYMYm4OVG%2BMzMrmguE4SO16gUe4DcKbS2gV9qVGq6wIgBOg2b%2FJ67M79RPtQB6OdnTchF67qtsPEEF%2Bc4J7FwFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1TyTgW3s30hnodQCrcA1AfLrgBgAFMx%2ByWyzoy73Caf4kuCEN9HcHNMpGiNtjtIKB9CycpRlFijVbLfF0X4LTo6RNIju6o17InI8fzuQYOcZVbBJhZY21D0oQuw%2FoFMySKEDORQwOXogoc%2Fog22hmaqFTJBqOBiFMWWYka2avKniyyrWHXb2wdJADAQp3%2BWdMzY9sbDyZI8bmNbZEP%2B5IK8LsxBSX1h5aQjyETMeRLpnPDuCBfoaR8OSyWsxvFOff9xCScejWEOcJMvW7VapCDZWJ7nlRzvdTPmOdNh4bnhCQcjfw370rvYWD%2BJHdAbhg11Hx1jMRSOJs55kQOTvollVcjbV%2B%2B21ROI5IALwjEqKC9CtrmXLn3d%2FpJOVQTZsGWIURXhyI893dUJfFUSqfHQonFyoN1oZL6LBQqXxPF3c8Zj8UZCwOeXkL4aI%2FE%2FDw%2FqGriumxvaZ1%2F0yaQvElztIEOZgagKSYYiMQvmqRpDDE8xE8TGP8dBmXi8KdMLPUsIlkA2YAXfrAbxpyoBfvCHl8mvr8gvWTr8RIC8AubAyIIvFaD0elJ7BDIo7L9aP8EEmYz3f%2BQW3FZ4QxdQZnz8iSz6uAfgW7jks87mwry1OTIbVtJK4WuXzjsoUiv5eA4c%2BCe9XeU2fsLMIPR2sQGOqUBOt58aIrIelycy2nA2TWs0JvAehJyz7OG4wDG2biTIhQ7UMTSZwTCJrez3pcrczw3Q%2BR8WNnP5sL%2Bo2Rrbygn39GG4GxZHo7lByEfI5tJiwwcaxvvM%2Bq4sSOfQfL%2F%2Frsqc6P1YEfeqt%2BeHWhpc%2FY6kaIQoZNYwGX9W8SUzq%2FqV%2FGYkY1HI9W1Y0yKW4biOCqvAzQ%2FZNLt4E5gbnfcsO%2FtOb4WRi8K&X-Amz-Signature=e58aba92cf4f37d3a949767fa7124982542aee09a48d4e38e25ae231326126ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMSQLRK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDWmYMYm4OVG%2BMzMrmguE4SO16gUe4DcKbS2gV9qVGq6wIgBOg2b%2FJ67M79RPtQB6OdnTchF67qtsPEEF%2Bc4J7FwFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1TyTgW3s30hnodQCrcA1AfLrgBgAFMx%2ByWyzoy73Caf4kuCEN9HcHNMpGiNtjtIKB9CycpRlFijVbLfF0X4LTo6RNIju6o17InI8fzuQYOcZVbBJhZY21D0oQuw%2FoFMySKEDORQwOXogoc%2Fog22hmaqFTJBqOBiFMWWYka2avKniyyrWHXb2wdJADAQp3%2BWdMzY9sbDyZI8bmNbZEP%2B5IK8LsxBSX1h5aQjyETMeRLpnPDuCBfoaR8OSyWsxvFOff9xCScejWEOcJMvW7VapCDZWJ7nlRzvdTPmOdNh4bnhCQcjfw370rvYWD%2BJHdAbhg11Hx1jMRSOJs55kQOTvollVcjbV%2B%2B21ROI5IALwjEqKC9CtrmXLn3d%2FpJOVQTZsGWIURXhyI893dUJfFUSqfHQonFyoN1oZL6LBQqXxPF3c8Zj8UZCwOeXkL4aI%2FE%2FDw%2FqGriumxvaZ1%2F0yaQvElztIEOZgagKSYYiMQvmqRpDDE8xE8TGP8dBmXi8KdMLPUsIlkA2YAXfrAbxpyoBfvCHl8mvr8gvWTr8RIC8AubAyIIvFaD0elJ7BDIo7L9aP8EEmYz3f%2BQW3FZ4QxdQZnz8iSz6uAfgW7jks87mwry1OTIbVtJK4WuXzjsoUiv5eA4c%2BCe9XeU2fsLMIPR2sQGOqUBOt58aIrIelycy2nA2TWs0JvAehJyz7OG4wDG2biTIhQ7UMTSZwTCJrez3pcrczw3Q%2BR8WNnP5sL%2Bo2Rrbygn39GG4GxZHo7lByEfI5tJiwwcaxvvM%2Bq4sSOfQfL%2F%2Frsqc6P1YEfeqt%2BeHWhpc%2FY6kaIQoZNYwGX9W8SUzq%2FqV%2FGYkY1HI9W1Y0yKW4biOCqvAzQ%2FZNLt4E5gbnfcsO%2FtOb4WRi8K&X-Amz-Signature=10cef417fafc4d834b3ab0e6b46bd0c142f69983c204ce5a19b1198e759a0861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
