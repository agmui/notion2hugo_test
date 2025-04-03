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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAN7GK6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEkZEwIa2KlYJ0FyRonBlgSCHMwowLLz4Rq6JmDaSEBAIhAPKyV0p0hMMFWVvYu%2B9gQM3PCnSG8SImtitx3kvYca6iKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2FGRKaY32uj2Zycoq3ANRdumJiq%2BgXkvey27ZX4%2F0yZ%2BgbXUHBv00KW%2FeYRANCo6iaB8bq736pchrqZbtFJMLT7vsd56DMXiZvBTKnwn2CqMl%2Bbv2PwXmkapJrv9NPVBs5m5VExdhmK4v8OyMUEza3lPVnTImBFENL1laGD4HIciFFXFfSZhWhxvT67eb%2F6u%2BQiGtUVl6SAX0h%2BBl5IBFAz3tVTqIpI6Mq5PfXTgH5CG%2Fds2tF%2FrLi5ZTPlDr3ksgXA%2ByU5%2BaMOYC7EO9DyFvcBYY48wQyOtPVdv5kbiLUpv0e2kB%2FFaPUGNxrktBFNZqieZdYNsvM7SBCpQCH1m7YnVmVz1mWYAVBrldjH6NyNv7WUGMgZ23Wmn3XIu0r3%2B67gcodvGmAKypgTTMmPNnEprt3jgcalFqIlcSQMBhPIcxSU1e%2Fre4kTwRgr55PeXx7i2f664uwEdVZU%2F9DX5zYTbiUsYE%2FzP53QL8M8nQpUH2GADowqsyZiUI%2Bi3%2FYEZtEHB7IWE1fpmhZN5c43rJRl71%2FHO05CHpz3ty2vpNEGY5S6gugD2sfVot0yMYxQg7JpdAZIRUURRPR8nUjFlpC0kXcDzRhCDAHkZKo4CX9j%2BXLVCB92j1lim37%2FjA9qpz6XXxLRAqTNs83zCH47m%2FBjqkAeMfaqPfGjwsiDteQlZgn3xTwL6PQKJEM9z5Z%2Fg%2BDRnEfblcxYwSmvHPv1MrOb%2F7uZ2p%2BLIagtSDn2TZqUOhsOqP1gYxdXmSJBwpC5RL4Dai96jQGD2MhkjqtXEIX8cYyo8wTQpNpJmglBLI%2BwVGLEw8aJSBwQuyGof%2Fq%2Ff4913vq5W%2BTLRX6Qrkyt00K3GokzMl5Wg3Q4758P31Xmb9uJQ0PcZH&X-Amz-Signature=c15634228eff8ac0291bb721ee2c1875be7a7f1e2684f7c1dca99fe404d1e118&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAN7GK6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEkZEwIa2KlYJ0FyRonBlgSCHMwowLLz4Rq6JmDaSEBAIhAPKyV0p0hMMFWVvYu%2B9gQM3PCnSG8SImtitx3kvYca6iKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2FGRKaY32uj2Zycoq3ANRdumJiq%2BgXkvey27ZX4%2F0yZ%2BgbXUHBv00KW%2FeYRANCo6iaB8bq736pchrqZbtFJMLT7vsd56DMXiZvBTKnwn2CqMl%2Bbv2PwXmkapJrv9NPVBs5m5VExdhmK4v8OyMUEza3lPVnTImBFENL1laGD4HIciFFXFfSZhWhxvT67eb%2F6u%2BQiGtUVl6SAX0h%2BBl5IBFAz3tVTqIpI6Mq5PfXTgH5CG%2Fds2tF%2FrLi5ZTPlDr3ksgXA%2ByU5%2BaMOYC7EO9DyFvcBYY48wQyOtPVdv5kbiLUpv0e2kB%2FFaPUGNxrktBFNZqieZdYNsvM7SBCpQCH1m7YnVmVz1mWYAVBrldjH6NyNv7WUGMgZ23Wmn3XIu0r3%2B67gcodvGmAKypgTTMmPNnEprt3jgcalFqIlcSQMBhPIcxSU1e%2Fre4kTwRgr55PeXx7i2f664uwEdVZU%2F9DX5zYTbiUsYE%2FzP53QL8M8nQpUH2GADowqsyZiUI%2Bi3%2FYEZtEHB7IWE1fpmhZN5c43rJRl71%2FHO05CHpz3ty2vpNEGY5S6gugD2sfVot0yMYxQg7JpdAZIRUURRPR8nUjFlpC0kXcDzRhCDAHkZKo4CX9j%2BXLVCB92j1lim37%2FjA9qpz6XXxLRAqTNs83zCH47m%2FBjqkAeMfaqPfGjwsiDteQlZgn3xTwL6PQKJEM9z5Z%2Fg%2BDRnEfblcxYwSmvHPv1MrOb%2F7uZ2p%2BLIagtSDn2TZqUOhsOqP1gYxdXmSJBwpC5RL4Dai96jQGD2MhkjqtXEIX8cYyo8wTQpNpJmglBLI%2BwVGLEw8aJSBwQuyGof%2Fq%2Ff4913vq5W%2BTLRX6Qrkyt00K3GokzMl5Wg3Q4758P31Xmb9uJQ0PcZH&X-Amz-Signature=d0df80d3ea31fdb5128e111f4860d36e9bea435ffd52a7018883320ff49894f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAN7GK6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEkZEwIa2KlYJ0FyRonBlgSCHMwowLLz4Rq6JmDaSEBAIhAPKyV0p0hMMFWVvYu%2B9gQM3PCnSG8SImtitx3kvYca6iKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2FGRKaY32uj2Zycoq3ANRdumJiq%2BgXkvey27ZX4%2F0yZ%2BgbXUHBv00KW%2FeYRANCo6iaB8bq736pchrqZbtFJMLT7vsd56DMXiZvBTKnwn2CqMl%2Bbv2PwXmkapJrv9NPVBs5m5VExdhmK4v8OyMUEza3lPVnTImBFENL1laGD4HIciFFXFfSZhWhxvT67eb%2F6u%2BQiGtUVl6SAX0h%2BBl5IBFAz3tVTqIpI6Mq5PfXTgH5CG%2Fds2tF%2FrLi5ZTPlDr3ksgXA%2ByU5%2BaMOYC7EO9DyFvcBYY48wQyOtPVdv5kbiLUpv0e2kB%2FFaPUGNxrktBFNZqieZdYNsvM7SBCpQCH1m7YnVmVz1mWYAVBrldjH6NyNv7WUGMgZ23Wmn3XIu0r3%2B67gcodvGmAKypgTTMmPNnEprt3jgcalFqIlcSQMBhPIcxSU1e%2Fre4kTwRgr55PeXx7i2f664uwEdVZU%2F9DX5zYTbiUsYE%2FzP53QL8M8nQpUH2GADowqsyZiUI%2Bi3%2FYEZtEHB7IWE1fpmhZN5c43rJRl71%2FHO05CHpz3ty2vpNEGY5S6gugD2sfVot0yMYxQg7JpdAZIRUURRPR8nUjFlpC0kXcDzRhCDAHkZKo4CX9j%2BXLVCB92j1lim37%2FjA9qpz6XXxLRAqTNs83zCH47m%2FBjqkAeMfaqPfGjwsiDteQlZgn3xTwL6PQKJEM9z5Z%2Fg%2BDRnEfblcxYwSmvHPv1MrOb%2F7uZ2p%2BLIagtSDn2TZqUOhsOqP1gYxdXmSJBwpC5RL4Dai96jQGD2MhkjqtXEIX8cYyo8wTQpNpJmglBLI%2BwVGLEw8aJSBwQuyGof%2Fq%2Ff4913vq5W%2BTLRX6Qrkyt00K3GokzMl5Wg3Q4758P31Xmb9uJQ0PcZH&X-Amz-Signature=85c1a63b90161d906b1c08c3c1d42d2db4020818e041b5e3e985283bd67933ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAN7GK6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEkZEwIa2KlYJ0FyRonBlgSCHMwowLLz4Rq6JmDaSEBAIhAPKyV0p0hMMFWVvYu%2B9gQM3PCnSG8SImtitx3kvYca6iKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2FGRKaY32uj2Zycoq3ANRdumJiq%2BgXkvey27ZX4%2F0yZ%2BgbXUHBv00KW%2FeYRANCo6iaB8bq736pchrqZbtFJMLT7vsd56DMXiZvBTKnwn2CqMl%2Bbv2PwXmkapJrv9NPVBs5m5VExdhmK4v8OyMUEza3lPVnTImBFENL1laGD4HIciFFXFfSZhWhxvT67eb%2F6u%2BQiGtUVl6SAX0h%2BBl5IBFAz3tVTqIpI6Mq5PfXTgH5CG%2Fds2tF%2FrLi5ZTPlDr3ksgXA%2ByU5%2BaMOYC7EO9DyFvcBYY48wQyOtPVdv5kbiLUpv0e2kB%2FFaPUGNxrktBFNZqieZdYNsvM7SBCpQCH1m7YnVmVz1mWYAVBrldjH6NyNv7WUGMgZ23Wmn3XIu0r3%2B67gcodvGmAKypgTTMmPNnEprt3jgcalFqIlcSQMBhPIcxSU1e%2Fre4kTwRgr55PeXx7i2f664uwEdVZU%2F9DX5zYTbiUsYE%2FzP53QL8M8nQpUH2GADowqsyZiUI%2Bi3%2FYEZtEHB7IWE1fpmhZN5c43rJRl71%2FHO05CHpz3ty2vpNEGY5S6gugD2sfVot0yMYxQg7JpdAZIRUURRPR8nUjFlpC0kXcDzRhCDAHkZKo4CX9j%2BXLVCB92j1lim37%2FjA9qpz6XXxLRAqTNs83zCH47m%2FBjqkAeMfaqPfGjwsiDteQlZgn3xTwL6PQKJEM9z5Z%2Fg%2BDRnEfblcxYwSmvHPv1MrOb%2F7uZ2p%2BLIagtSDn2TZqUOhsOqP1gYxdXmSJBwpC5RL4Dai96jQGD2MhkjqtXEIX8cYyo8wTQpNpJmglBLI%2BwVGLEw8aJSBwQuyGof%2Fq%2Ff4913vq5W%2BTLRX6Qrkyt00K3GokzMl5Wg3Q4758P31Xmb9uJQ0PcZH&X-Amz-Signature=68c14236aa514b489888adeec14b72373f36866ccbf65181941de4b08a69315b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAN7GK6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEkZEwIa2KlYJ0FyRonBlgSCHMwowLLz4Rq6JmDaSEBAIhAPKyV0p0hMMFWVvYu%2B9gQM3PCnSG8SImtitx3kvYca6iKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2FGRKaY32uj2Zycoq3ANRdumJiq%2BgXkvey27ZX4%2F0yZ%2BgbXUHBv00KW%2FeYRANCo6iaB8bq736pchrqZbtFJMLT7vsd56DMXiZvBTKnwn2CqMl%2Bbv2PwXmkapJrv9NPVBs5m5VExdhmK4v8OyMUEza3lPVnTImBFENL1laGD4HIciFFXFfSZhWhxvT67eb%2F6u%2BQiGtUVl6SAX0h%2BBl5IBFAz3tVTqIpI6Mq5PfXTgH5CG%2Fds2tF%2FrLi5ZTPlDr3ksgXA%2ByU5%2BaMOYC7EO9DyFvcBYY48wQyOtPVdv5kbiLUpv0e2kB%2FFaPUGNxrktBFNZqieZdYNsvM7SBCpQCH1m7YnVmVz1mWYAVBrldjH6NyNv7WUGMgZ23Wmn3XIu0r3%2B67gcodvGmAKypgTTMmPNnEprt3jgcalFqIlcSQMBhPIcxSU1e%2Fre4kTwRgr55PeXx7i2f664uwEdVZU%2F9DX5zYTbiUsYE%2FzP53QL8M8nQpUH2GADowqsyZiUI%2Bi3%2FYEZtEHB7IWE1fpmhZN5c43rJRl71%2FHO05CHpz3ty2vpNEGY5S6gugD2sfVot0yMYxQg7JpdAZIRUURRPR8nUjFlpC0kXcDzRhCDAHkZKo4CX9j%2BXLVCB92j1lim37%2FjA9qpz6XXxLRAqTNs83zCH47m%2FBjqkAeMfaqPfGjwsiDteQlZgn3xTwL6PQKJEM9z5Z%2Fg%2BDRnEfblcxYwSmvHPv1MrOb%2F7uZ2p%2BLIagtSDn2TZqUOhsOqP1gYxdXmSJBwpC5RL4Dai96jQGD2MhkjqtXEIX8cYyo8wTQpNpJmglBLI%2BwVGLEw8aJSBwQuyGof%2Fq%2Ff4913vq5W%2BTLRX6Qrkyt00K3GokzMl5Wg3Q4758P31Xmb9uJQ0PcZH&X-Amz-Signature=bfe20f3606f8a2287a910d0c95cf35730b2014bd0be8b96a6ba4eac700a90342&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAN7GK6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEkZEwIa2KlYJ0FyRonBlgSCHMwowLLz4Rq6JmDaSEBAIhAPKyV0p0hMMFWVvYu%2B9gQM3PCnSG8SImtitx3kvYca6iKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2FGRKaY32uj2Zycoq3ANRdumJiq%2BgXkvey27ZX4%2F0yZ%2BgbXUHBv00KW%2FeYRANCo6iaB8bq736pchrqZbtFJMLT7vsd56DMXiZvBTKnwn2CqMl%2Bbv2PwXmkapJrv9NPVBs5m5VExdhmK4v8OyMUEza3lPVnTImBFENL1laGD4HIciFFXFfSZhWhxvT67eb%2F6u%2BQiGtUVl6SAX0h%2BBl5IBFAz3tVTqIpI6Mq5PfXTgH5CG%2Fds2tF%2FrLi5ZTPlDr3ksgXA%2ByU5%2BaMOYC7EO9DyFvcBYY48wQyOtPVdv5kbiLUpv0e2kB%2FFaPUGNxrktBFNZqieZdYNsvM7SBCpQCH1m7YnVmVz1mWYAVBrldjH6NyNv7WUGMgZ23Wmn3XIu0r3%2B67gcodvGmAKypgTTMmPNnEprt3jgcalFqIlcSQMBhPIcxSU1e%2Fre4kTwRgr55PeXx7i2f664uwEdVZU%2F9DX5zYTbiUsYE%2FzP53QL8M8nQpUH2GADowqsyZiUI%2Bi3%2FYEZtEHB7IWE1fpmhZN5c43rJRl71%2FHO05CHpz3ty2vpNEGY5S6gugD2sfVot0yMYxQg7JpdAZIRUURRPR8nUjFlpC0kXcDzRhCDAHkZKo4CX9j%2BXLVCB92j1lim37%2FjA9qpz6XXxLRAqTNs83zCH47m%2FBjqkAeMfaqPfGjwsiDteQlZgn3xTwL6PQKJEM9z5Z%2Fg%2BDRnEfblcxYwSmvHPv1MrOb%2F7uZ2p%2BLIagtSDn2TZqUOhsOqP1gYxdXmSJBwpC5RL4Dai96jQGD2MhkjqtXEIX8cYyo8wTQpNpJmglBLI%2BwVGLEw8aJSBwQuyGof%2Fq%2Ff4913vq5W%2BTLRX6Qrkyt00K3GokzMl5Wg3Q4758P31Xmb9uJQ0PcZH&X-Amz-Signature=1b6ce39bc3f09010d86589d08d5684171e1b0698a91c51e24974eaf865182020&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAN7GK6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEkZEwIa2KlYJ0FyRonBlgSCHMwowLLz4Rq6JmDaSEBAIhAPKyV0p0hMMFWVvYu%2B9gQM3PCnSG8SImtitx3kvYca6iKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2FGRKaY32uj2Zycoq3ANRdumJiq%2BgXkvey27ZX4%2F0yZ%2BgbXUHBv00KW%2FeYRANCo6iaB8bq736pchrqZbtFJMLT7vsd56DMXiZvBTKnwn2CqMl%2Bbv2PwXmkapJrv9NPVBs5m5VExdhmK4v8OyMUEza3lPVnTImBFENL1laGD4HIciFFXFfSZhWhxvT67eb%2F6u%2BQiGtUVl6SAX0h%2BBl5IBFAz3tVTqIpI6Mq5PfXTgH5CG%2Fds2tF%2FrLi5ZTPlDr3ksgXA%2ByU5%2BaMOYC7EO9DyFvcBYY48wQyOtPVdv5kbiLUpv0e2kB%2FFaPUGNxrktBFNZqieZdYNsvM7SBCpQCH1m7YnVmVz1mWYAVBrldjH6NyNv7WUGMgZ23Wmn3XIu0r3%2B67gcodvGmAKypgTTMmPNnEprt3jgcalFqIlcSQMBhPIcxSU1e%2Fre4kTwRgr55PeXx7i2f664uwEdVZU%2F9DX5zYTbiUsYE%2FzP53QL8M8nQpUH2GADowqsyZiUI%2Bi3%2FYEZtEHB7IWE1fpmhZN5c43rJRl71%2FHO05CHpz3ty2vpNEGY5S6gugD2sfVot0yMYxQg7JpdAZIRUURRPR8nUjFlpC0kXcDzRhCDAHkZKo4CX9j%2BXLVCB92j1lim37%2FjA9qpz6XXxLRAqTNs83zCH47m%2FBjqkAeMfaqPfGjwsiDteQlZgn3xTwL6PQKJEM9z5Z%2Fg%2BDRnEfblcxYwSmvHPv1MrOb%2F7uZ2p%2BLIagtSDn2TZqUOhsOqP1gYxdXmSJBwpC5RL4Dai96jQGD2MhkjqtXEIX8cYyo8wTQpNpJmglBLI%2BwVGLEw8aJSBwQuyGof%2Fq%2Ff4913vq5W%2BTLRX6Qrkyt00K3GokzMl5Wg3Q4758P31Xmb9uJQ0PcZH&X-Amz-Signature=a8cc26f6c8ded15b5ed7d1158ad054149b157b71c50f22dddeba1764108c243f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAN7GK6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEkZEwIa2KlYJ0FyRonBlgSCHMwowLLz4Rq6JmDaSEBAIhAPKyV0p0hMMFWVvYu%2B9gQM3PCnSG8SImtitx3kvYca6iKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2FGRKaY32uj2Zycoq3ANRdumJiq%2BgXkvey27ZX4%2F0yZ%2BgbXUHBv00KW%2FeYRANCo6iaB8bq736pchrqZbtFJMLT7vsd56DMXiZvBTKnwn2CqMl%2Bbv2PwXmkapJrv9NPVBs5m5VExdhmK4v8OyMUEza3lPVnTImBFENL1laGD4HIciFFXFfSZhWhxvT67eb%2F6u%2BQiGtUVl6SAX0h%2BBl5IBFAz3tVTqIpI6Mq5PfXTgH5CG%2Fds2tF%2FrLi5ZTPlDr3ksgXA%2ByU5%2BaMOYC7EO9DyFvcBYY48wQyOtPVdv5kbiLUpv0e2kB%2FFaPUGNxrktBFNZqieZdYNsvM7SBCpQCH1m7YnVmVz1mWYAVBrldjH6NyNv7WUGMgZ23Wmn3XIu0r3%2B67gcodvGmAKypgTTMmPNnEprt3jgcalFqIlcSQMBhPIcxSU1e%2Fre4kTwRgr55PeXx7i2f664uwEdVZU%2F9DX5zYTbiUsYE%2FzP53QL8M8nQpUH2GADowqsyZiUI%2Bi3%2FYEZtEHB7IWE1fpmhZN5c43rJRl71%2FHO05CHpz3ty2vpNEGY5S6gugD2sfVot0yMYxQg7JpdAZIRUURRPR8nUjFlpC0kXcDzRhCDAHkZKo4CX9j%2BXLVCB92j1lim37%2FjA9qpz6XXxLRAqTNs83zCH47m%2FBjqkAeMfaqPfGjwsiDteQlZgn3xTwL6PQKJEM9z5Z%2Fg%2BDRnEfblcxYwSmvHPv1MrOb%2F7uZ2p%2BLIagtSDn2TZqUOhsOqP1gYxdXmSJBwpC5RL4Dai96jQGD2MhkjqtXEIX8cYyo8wTQpNpJmglBLI%2BwVGLEw8aJSBwQuyGof%2Fq%2Ff4913vq5W%2BTLRX6Qrkyt00K3GokzMl5Wg3Q4758P31Xmb9uJQ0PcZH&X-Amz-Signature=10cf0910de4c9f0705e0ad7d591c6dd0da42ef854fe2f404e228a329eec31b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
