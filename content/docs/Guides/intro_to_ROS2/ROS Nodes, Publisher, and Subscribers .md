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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7SUH5M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHIADw%2BGwskv8zK0NppcgNLaeMbIbQR2ZwQWXPvtRPH5AiBaC9Z8mQkjq0rFkxojtleM9orIY9yy4tCvQE7Rn%2Bf3kiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJPCP1zRPBmlnYrgKtwDld0A0sIJiRhdCC932phD63qWjqFXuDUKrGUufgqiQjN0T77he0D%2FxqSeh4%2BCryQmABSSWaN64AiMb7JH4qyImXifcSCIZ0WHITuFm9DY43uywOgb06Mqu02BOy4HXNPtdciUH3N7WhSdo%2F8VT%2BCJjZzCfhoICQuhs7CRubdu7XHtSy66wG1HdQtGbxlZbefP%2BQ8cTJ0oobvoQCLLvmIOf5XmNPeZwFgpWmhRm4ta6Wh9EXr1%2B%2FAKU3htz8mTgdD6rtOzfSGDuPybJFszp7O6XhGFjdN1CZHJuhtj1S25XeRt0BwMUYX799%2BqTwNYMIfZOT3P20mp1m%2FxDaVXThqXKeYnBoQclNocQcEGtC%2FH306joPIqtgorNhMcwSZujyPgANsJaFkRlwy%2FQyYx6MViEScuTsAPOsYubQKQ1Bkq2%2FC7IiUvBPBeD2OSAQjUmb5RmGbEtc%2BlQ%2BrmXJPgUnDnPRHGQLLHVn0kv1SLggXPT5h%2FTB1T6XGDVZiZF4Tl2D3ya8SKDiTG483M2%2FK1z9WTcdbw%2FLF6OReObQyytprZ5wY59k2Y%2BJPeJPDvqKA35QtIiwzyE2L5Apg7aVYNMBvokVHNu8PU69K2uwb3DM%2FuYT4A45LWVwcEfB%2ByWt8wt%2Bv5vgY6pgEkdX8zR34rkqdoCl4LG2X6YDMpSarfJkbWcKwaBtuEKpvvgcATlqGmHm0QVmYQudPUaoVF2PVRDOmo5RNy3Xr8zPSCyk%2BbbehpZEZ3bluuU88kYTMF7gRssA1LR%2Brj6IfvYZer%2BoGclZrSg9s0HqUtP%2B%2BSUCXQNpIN8%2BkErePqHBJbuD%2FdhcRuKi9GddptCEUhmwwkCui%2FJDrp9D3Y0RsXrU5MPAhf&X-Amz-Signature=94cdf4fd06bf5dd6f96dde564c0686f764666bffd02b7be504f41eff0b64c53a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7SUH5M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHIADw%2BGwskv8zK0NppcgNLaeMbIbQR2ZwQWXPvtRPH5AiBaC9Z8mQkjq0rFkxojtleM9orIY9yy4tCvQE7Rn%2Bf3kiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJPCP1zRPBmlnYrgKtwDld0A0sIJiRhdCC932phD63qWjqFXuDUKrGUufgqiQjN0T77he0D%2FxqSeh4%2BCryQmABSSWaN64AiMb7JH4qyImXifcSCIZ0WHITuFm9DY43uywOgb06Mqu02BOy4HXNPtdciUH3N7WhSdo%2F8VT%2BCJjZzCfhoICQuhs7CRubdu7XHtSy66wG1HdQtGbxlZbefP%2BQ8cTJ0oobvoQCLLvmIOf5XmNPeZwFgpWmhRm4ta6Wh9EXr1%2B%2FAKU3htz8mTgdD6rtOzfSGDuPybJFszp7O6XhGFjdN1CZHJuhtj1S25XeRt0BwMUYX799%2BqTwNYMIfZOT3P20mp1m%2FxDaVXThqXKeYnBoQclNocQcEGtC%2FH306joPIqtgorNhMcwSZujyPgANsJaFkRlwy%2FQyYx6MViEScuTsAPOsYubQKQ1Bkq2%2FC7IiUvBPBeD2OSAQjUmb5RmGbEtc%2BlQ%2BrmXJPgUnDnPRHGQLLHVn0kv1SLggXPT5h%2FTB1T6XGDVZiZF4Tl2D3ya8SKDiTG483M2%2FK1z9WTcdbw%2FLF6OReObQyytprZ5wY59k2Y%2BJPeJPDvqKA35QtIiwzyE2L5Apg7aVYNMBvokVHNu8PU69K2uwb3DM%2FuYT4A45LWVwcEfB%2ByWt8wt%2Bv5vgY6pgEkdX8zR34rkqdoCl4LG2X6YDMpSarfJkbWcKwaBtuEKpvvgcATlqGmHm0QVmYQudPUaoVF2PVRDOmo5RNy3Xr8zPSCyk%2BbbehpZEZ3bluuU88kYTMF7gRssA1LR%2Brj6IfvYZer%2BoGclZrSg9s0HqUtP%2B%2BSUCXQNpIN8%2BkErePqHBJbuD%2FdhcRuKi9GddptCEUhmwwkCui%2FJDrp9D3Y0RsXrU5MPAhf&X-Amz-Signature=f96b12fb2195f90d54e8ba454695b94dac233638d904bc1ef89f64061d9b838c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7SUH5M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHIADw%2BGwskv8zK0NppcgNLaeMbIbQR2ZwQWXPvtRPH5AiBaC9Z8mQkjq0rFkxojtleM9orIY9yy4tCvQE7Rn%2Bf3kiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJPCP1zRPBmlnYrgKtwDld0A0sIJiRhdCC932phD63qWjqFXuDUKrGUufgqiQjN0T77he0D%2FxqSeh4%2BCryQmABSSWaN64AiMb7JH4qyImXifcSCIZ0WHITuFm9DY43uywOgb06Mqu02BOy4HXNPtdciUH3N7WhSdo%2F8VT%2BCJjZzCfhoICQuhs7CRubdu7XHtSy66wG1HdQtGbxlZbefP%2BQ8cTJ0oobvoQCLLvmIOf5XmNPeZwFgpWmhRm4ta6Wh9EXr1%2B%2FAKU3htz8mTgdD6rtOzfSGDuPybJFszp7O6XhGFjdN1CZHJuhtj1S25XeRt0BwMUYX799%2BqTwNYMIfZOT3P20mp1m%2FxDaVXThqXKeYnBoQclNocQcEGtC%2FH306joPIqtgorNhMcwSZujyPgANsJaFkRlwy%2FQyYx6MViEScuTsAPOsYubQKQ1Bkq2%2FC7IiUvBPBeD2OSAQjUmb5RmGbEtc%2BlQ%2BrmXJPgUnDnPRHGQLLHVn0kv1SLggXPT5h%2FTB1T6XGDVZiZF4Tl2D3ya8SKDiTG483M2%2FK1z9WTcdbw%2FLF6OReObQyytprZ5wY59k2Y%2BJPeJPDvqKA35QtIiwzyE2L5Apg7aVYNMBvokVHNu8PU69K2uwb3DM%2FuYT4A45LWVwcEfB%2ByWt8wt%2Bv5vgY6pgEkdX8zR34rkqdoCl4LG2X6YDMpSarfJkbWcKwaBtuEKpvvgcATlqGmHm0QVmYQudPUaoVF2PVRDOmo5RNy3Xr8zPSCyk%2BbbehpZEZ3bluuU88kYTMF7gRssA1LR%2Brj6IfvYZer%2BoGclZrSg9s0HqUtP%2B%2BSUCXQNpIN8%2BkErePqHBJbuD%2FdhcRuKi9GddptCEUhmwwkCui%2FJDrp9D3Y0RsXrU5MPAhf&X-Amz-Signature=d3318da68f6bde78c328dc1fb4e3e300c3017e3f4c976fb949b74dc7cc9bc8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7SUH5M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHIADw%2BGwskv8zK0NppcgNLaeMbIbQR2ZwQWXPvtRPH5AiBaC9Z8mQkjq0rFkxojtleM9orIY9yy4tCvQE7Rn%2Bf3kiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJPCP1zRPBmlnYrgKtwDld0A0sIJiRhdCC932phD63qWjqFXuDUKrGUufgqiQjN0T77he0D%2FxqSeh4%2BCryQmABSSWaN64AiMb7JH4qyImXifcSCIZ0WHITuFm9DY43uywOgb06Mqu02BOy4HXNPtdciUH3N7WhSdo%2F8VT%2BCJjZzCfhoICQuhs7CRubdu7XHtSy66wG1HdQtGbxlZbefP%2BQ8cTJ0oobvoQCLLvmIOf5XmNPeZwFgpWmhRm4ta6Wh9EXr1%2B%2FAKU3htz8mTgdD6rtOzfSGDuPybJFszp7O6XhGFjdN1CZHJuhtj1S25XeRt0BwMUYX799%2BqTwNYMIfZOT3P20mp1m%2FxDaVXThqXKeYnBoQclNocQcEGtC%2FH306joPIqtgorNhMcwSZujyPgANsJaFkRlwy%2FQyYx6MViEScuTsAPOsYubQKQ1Bkq2%2FC7IiUvBPBeD2OSAQjUmb5RmGbEtc%2BlQ%2BrmXJPgUnDnPRHGQLLHVn0kv1SLggXPT5h%2FTB1T6XGDVZiZF4Tl2D3ya8SKDiTG483M2%2FK1z9WTcdbw%2FLF6OReObQyytprZ5wY59k2Y%2BJPeJPDvqKA35QtIiwzyE2L5Apg7aVYNMBvokVHNu8PU69K2uwb3DM%2FuYT4A45LWVwcEfB%2ByWt8wt%2Bv5vgY6pgEkdX8zR34rkqdoCl4LG2X6YDMpSarfJkbWcKwaBtuEKpvvgcATlqGmHm0QVmYQudPUaoVF2PVRDOmo5RNy3Xr8zPSCyk%2BbbehpZEZ3bluuU88kYTMF7gRssA1LR%2Brj6IfvYZer%2BoGclZrSg9s0HqUtP%2B%2BSUCXQNpIN8%2BkErePqHBJbuD%2FdhcRuKi9GddptCEUhmwwkCui%2FJDrp9D3Y0RsXrU5MPAhf&X-Amz-Signature=668835cd765befe97399a14d99d4c027cb00076780c00902cfc15be2b7b3587a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7SUH5M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHIADw%2BGwskv8zK0NppcgNLaeMbIbQR2ZwQWXPvtRPH5AiBaC9Z8mQkjq0rFkxojtleM9orIY9yy4tCvQE7Rn%2Bf3kiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJPCP1zRPBmlnYrgKtwDld0A0sIJiRhdCC932phD63qWjqFXuDUKrGUufgqiQjN0T77he0D%2FxqSeh4%2BCryQmABSSWaN64AiMb7JH4qyImXifcSCIZ0WHITuFm9DY43uywOgb06Mqu02BOy4HXNPtdciUH3N7WhSdo%2F8VT%2BCJjZzCfhoICQuhs7CRubdu7XHtSy66wG1HdQtGbxlZbefP%2BQ8cTJ0oobvoQCLLvmIOf5XmNPeZwFgpWmhRm4ta6Wh9EXr1%2B%2FAKU3htz8mTgdD6rtOzfSGDuPybJFszp7O6XhGFjdN1CZHJuhtj1S25XeRt0BwMUYX799%2BqTwNYMIfZOT3P20mp1m%2FxDaVXThqXKeYnBoQclNocQcEGtC%2FH306joPIqtgorNhMcwSZujyPgANsJaFkRlwy%2FQyYx6MViEScuTsAPOsYubQKQ1Bkq2%2FC7IiUvBPBeD2OSAQjUmb5RmGbEtc%2BlQ%2BrmXJPgUnDnPRHGQLLHVn0kv1SLggXPT5h%2FTB1T6XGDVZiZF4Tl2D3ya8SKDiTG483M2%2FK1z9WTcdbw%2FLF6OReObQyytprZ5wY59k2Y%2BJPeJPDvqKA35QtIiwzyE2L5Apg7aVYNMBvokVHNu8PU69K2uwb3DM%2FuYT4A45LWVwcEfB%2ByWt8wt%2Bv5vgY6pgEkdX8zR34rkqdoCl4LG2X6YDMpSarfJkbWcKwaBtuEKpvvgcATlqGmHm0QVmYQudPUaoVF2PVRDOmo5RNy3Xr8zPSCyk%2BbbehpZEZ3bluuU88kYTMF7gRssA1LR%2Brj6IfvYZer%2BoGclZrSg9s0HqUtP%2B%2BSUCXQNpIN8%2BkErePqHBJbuD%2FdhcRuKi9GddptCEUhmwwkCui%2FJDrp9D3Y0RsXrU5MPAhf&X-Amz-Signature=7d79ecdcee4998473f60e4bcb5acf7ddf67c1ef67b0c90a268a6032d12d290c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7SUH5M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHIADw%2BGwskv8zK0NppcgNLaeMbIbQR2ZwQWXPvtRPH5AiBaC9Z8mQkjq0rFkxojtleM9orIY9yy4tCvQE7Rn%2Bf3kiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJPCP1zRPBmlnYrgKtwDld0A0sIJiRhdCC932phD63qWjqFXuDUKrGUufgqiQjN0T77he0D%2FxqSeh4%2BCryQmABSSWaN64AiMb7JH4qyImXifcSCIZ0WHITuFm9DY43uywOgb06Mqu02BOy4HXNPtdciUH3N7WhSdo%2F8VT%2BCJjZzCfhoICQuhs7CRubdu7XHtSy66wG1HdQtGbxlZbefP%2BQ8cTJ0oobvoQCLLvmIOf5XmNPeZwFgpWmhRm4ta6Wh9EXr1%2B%2FAKU3htz8mTgdD6rtOzfSGDuPybJFszp7O6XhGFjdN1CZHJuhtj1S25XeRt0BwMUYX799%2BqTwNYMIfZOT3P20mp1m%2FxDaVXThqXKeYnBoQclNocQcEGtC%2FH306joPIqtgorNhMcwSZujyPgANsJaFkRlwy%2FQyYx6MViEScuTsAPOsYubQKQ1Bkq2%2FC7IiUvBPBeD2OSAQjUmb5RmGbEtc%2BlQ%2BrmXJPgUnDnPRHGQLLHVn0kv1SLggXPT5h%2FTB1T6XGDVZiZF4Tl2D3ya8SKDiTG483M2%2FK1z9WTcdbw%2FLF6OReObQyytprZ5wY59k2Y%2BJPeJPDvqKA35QtIiwzyE2L5Apg7aVYNMBvokVHNu8PU69K2uwb3DM%2FuYT4A45LWVwcEfB%2ByWt8wt%2Bv5vgY6pgEkdX8zR34rkqdoCl4LG2X6YDMpSarfJkbWcKwaBtuEKpvvgcATlqGmHm0QVmYQudPUaoVF2PVRDOmo5RNy3Xr8zPSCyk%2BbbehpZEZ3bluuU88kYTMF7gRssA1LR%2Brj6IfvYZer%2BoGclZrSg9s0HqUtP%2B%2BSUCXQNpIN8%2BkErePqHBJbuD%2FdhcRuKi9GddptCEUhmwwkCui%2FJDrp9D3Y0RsXrU5MPAhf&X-Amz-Signature=1f553c662f82810060eb0632f049599553ccb163a051d117445f8be4589e9196&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7SUH5M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHIADw%2BGwskv8zK0NppcgNLaeMbIbQR2ZwQWXPvtRPH5AiBaC9Z8mQkjq0rFkxojtleM9orIY9yy4tCvQE7Rn%2Bf3kiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJPCP1zRPBmlnYrgKtwDld0A0sIJiRhdCC932phD63qWjqFXuDUKrGUufgqiQjN0T77he0D%2FxqSeh4%2BCryQmABSSWaN64AiMb7JH4qyImXifcSCIZ0WHITuFm9DY43uywOgb06Mqu02BOy4HXNPtdciUH3N7WhSdo%2F8VT%2BCJjZzCfhoICQuhs7CRubdu7XHtSy66wG1HdQtGbxlZbefP%2BQ8cTJ0oobvoQCLLvmIOf5XmNPeZwFgpWmhRm4ta6Wh9EXr1%2B%2FAKU3htz8mTgdD6rtOzfSGDuPybJFszp7O6XhGFjdN1CZHJuhtj1S25XeRt0BwMUYX799%2BqTwNYMIfZOT3P20mp1m%2FxDaVXThqXKeYnBoQclNocQcEGtC%2FH306joPIqtgorNhMcwSZujyPgANsJaFkRlwy%2FQyYx6MViEScuTsAPOsYubQKQ1Bkq2%2FC7IiUvBPBeD2OSAQjUmb5RmGbEtc%2BlQ%2BrmXJPgUnDnPRHGQLLHVn0kv1SLggXPT5h%2FTB1T6XGDVZiZF4Tl2D3ya8SKDiTG483M2%2FK1z9WTcdbw%2FLF6OReObQyytprZ5wY59k2Y%2BJPeJPDvqKA35QtIiwzyE2L5Apg7aVYNMBvokVHNu8PU69K2uwb3DM%2FuYT4A45LWVwcEfB%2ByWt8wt%2Bv5vgY6pgEkdX8zR34rkqdoCl4LG2X6YDMpSarfJkbWcKwaBtuEKpvvgcATlqGmHm0QVmYQudPUaoVF2PVRDOmo5RNy3Xr8zPSCyk%2BbbehpZEZ3bluuU88kYTMF7gRssA1LR%2Brj6IfvYZer%2BoGclZrSg9s0HqUtP%2B%2BSUCXQNpIN8%2BkErePqHBJbuD%2FdhcRuKi9GddptCEUhmwwkCui%2FJDrp9D3Y0RsXrU5MPAhf&X-Amz-Signature=2d39cce3c247cd4638ed687f06ac91f94c02dc207f8537c7a0d7ab22b0da5d74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7SUH5M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHIADw%2BGwskv8zK0NppcgNLaeMbIbQR2ZwQWXPvtRPH5AiBaC9Z8mQkjq0rFkxojtleM9orIY9yy4tCvQE7Rn%2Bf3kiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJPCP1zRPBmlnYrgKtwDld0A0sIJiRhdCC932phD63qWjqFXuDUKrGUufgqiQjN0T77he0D%2FxqSeh4%2BCryQmABSSWaN64AiMb7JH4qyImXifcSCIZ0WHITuFm9DY43uywOgb06Mqu02BOy4HXNPtdciUH3N7WhSdo%2F8VT%2BCJjZzCfhoICQuhs7CRubdu7XHtSy66wG1HdQtGbxlZbefP%2BQ8cTJ0oobvoQCLLvmIOf5XmNPeZwFgpWmhRm4ta6Wh9EXr1%2B%2FAKU3htz8mTgdD6rtOzfSGDuPybJFszp7O6XhGFjdN1CZHJuhtj1S25XeRt0BwMUYX799%2BqTwNYMIfZOT3P20mp1m%2FxDaVXThqXKeYnBoQclNocQcEGtC%2FH306joPIqtgorNhMcwSZujyPgANsJaFkRlwy%2FQyYx6MViEScuTsAPOsYubQKQ1Bkq2%2FC7IiUvBPBeD2OSAQjUmb5RmGbEtc%2BlQ%2BrmXJPgUnDnPRHGQLLHVn0kv1SLggXPT5h%2FTB1T6XGDVZiZF4Tl2D3ya8SKDiTG483M2%2FK1z9WTcdbw%2FLF6OReObQyytprZ5wY59k2Y%2BJPeJPDvqKA35QtIiwzyE2L5Apg7aVYNMBvokVHNu8PU69K2uwb3DM%2FuYT4A45LWVwcEfB%2ByWt8wt%2Bv5vgY6pgEkdX8zR34rkqdoCl4LG2X6YDMpSarfJkbWcKwaBtuEKpvvgcATlqGmHm0QVmYQudPUaoVF2PVRDOmo5RNy3Xr8zPSCyk%2BbbehpZEZ3bluuU88kYTMF7gRssA1LR%2Brj6IfvYZer%2BoGclZrSg9s0HqUtP%2B%2BSUCXQNpIN8%2BkErePqHBJbuD%2FdhcRuKi9GddptCEUhmwwkCui%2FJDrp9D3Y0RsXrU5MPAhf&X-Amz-Signature=ccdb1be030d2676640e707e8a9a87bd7c2d19f10c8f158535bfd0c41e728f938&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
