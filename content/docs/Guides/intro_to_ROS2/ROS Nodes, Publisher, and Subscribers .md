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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS6EMNH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUaQPtXtqKrW%2FKSWQT%2BBCl7xBS1Y9x5FfoldfSfOGt4AIhAPVv13z5cW2mgZ29QLxivfjXxccPJla14tAmbPzbZh0KKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmQucp4VZURBcPVHEq3APg9sIy%2BFhxi3a%2BB4Oh7VW9HhBgqSH%2BdxBQCxxMVG23n9F8OpxH3FBICnDjsBEZnng08ROr5FOCT5oKjhRpulP2miJrc8MbH9qRc2I%2Fia5Clu6msKTFCYTePhdndhod5B6xTEeOMgcgN9lLotyc2xCizPnQBE3EbtdHS8a9u2D8UFUlz1ZO7d6AHYpM2DaJSW28D0FiAl6Svn%2FTXURDr6OpaWip29Pi24FQIMfEZUjMkupcKiqKSfy1pchbowMoIkz3vaNg2tWTWMj01MOjOAea7KlhGYNfsJSvn73Vk7YjWVxrc%2FLKupa5YA8fvVhQrnm6hq56aT98Th1US5gLa09Ucrare6Myug1ttOKp%2BL2CfVPg8AWycePEc6hfV23dl71GaDSVQuyCJWIAXlqyNDz%2FGnl67GIJK0Tc7Lg1cP9p2g5aKPKsw7bZ3aY4jwxUCdxxw%2FjvK3Ny%2BTeyVhBnAYoW9oZpH2UAq8C4bHirbi9JUT%2BFu3JouUP69W%2FQN%2FQRfTEbE7aXaBCH31dtnA56lhG18NhE2ItgRHH9F9Y6LgrarxQJ18jfAYd67kEs%2FK2toCrzqVkTQP52Frxt%2Bjvxv%2FU1%2B2QiuqlVkjbUOwS54A7%2FLDCKPVrpVMb5XSv%2B5zDiwNTCBjqkAUuLqq4QNxbPr8s%2BYo1tYGkgtwaJZjPzcds89nkimjOFVtnuSLMQA9w0cAuAgxUtvW5SOZZgwh0YYF4jr%2F8Pds3QGul0aGC%2BeTxJDnbONYvlnEpsysyDlM4mwRB2WN3IU8PqT%2FmsMcT%2FJRSrkruNx0ffVWFmihASBnqe6zGLFbAZ7cqp1awhMdm388i8jqKXm3JnZXRrXOatul7nX4iSWh7ItORb&X-Amz-Signature=05ff18e81de6e9fde1ff0292f86bf2379f7c9ebd43b1c6e449b677f9aef53a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS6EMNH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUaQPtXtqKrW%2FKSWQT%2BBCl7xBS1Y9x5FfoldfSfOGt4AIhAPVv13z5cW2mgZ29QLxivfjXxccPJla14tAmbPzbZh0KKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmQucp4VZURBcPVHEq3APg9sIy%2BFhxi3a%2BB4Oh7VW9HhBgqSH%2BdxBQCxxMVG23n9F8OpxH3FBICnDjsBEZnng08ROr5FOCT5oKjhRpulP2miJrc8MbH9qRc2I%2Fia5Clu6msKTFCYTePhdndhod5B6xTEeOMgcgN9lLotyc2xCizPnQBE3EbtdHS8a9u2D8UFUlz1ZO7d6AHYpM2DaJSW28D0FiAl6Svn%2FTXURDr6OpaWip29Pi24FQIMfEZUjMkupcKiqKSfy1pchbowMoIkz3vaNg2tWTWMj01MOjOAea7KlhGYNfsJSvn73Vk7YjWVxrc%2FLKupa5YA8fvVhQrnm6hq56aT98Th1US5gLa09Ucrare6Myug1ttOKp%2BL2CfVPg8AWycePEc6hfV23dl71GaDSVQuyCJWIAXlqyNDz%2FGnl67GIJK0Tc7Lg1cP9p2g5aKPKsw7bZ3aY4jwxUCdxxw%2FjvK3Ny%2BTeyVhBnAYoW9oZpH2UAq8C4bHirbi9JUT%2BFu3JouUP69W%2FQN%2FQRfTEbE7aXaBCH31dtnA56lhG18NhE2ItgRHH9F9Y6LgrarxQJ18jfAYd67kEs%2FK2toCrzqVkTQP52Frxt%2Bjvxv%2FU1%2B2QiuqlVkjbUOwS54A7%2FLDCKPVrpVMb5XSv%2B5zDiwNTCBjqkAUuLqq4QNxbPr8s%2BYo1tYGkgtwaJZjPzcds89nkimjOFVtnuSLMQA9w0cAuAgxUtvW5SOZZgwh0YYF4jr%2F8Pds3QGul0aGC%2BeTxJDnbONYvlnEpsysyDlM4mwRB2WN3IU8PqT%2FmsMcT%2FJRSrkruNx0ffVWFmihASBnqe6zGLFbAZ7cqp1awhMdm388i8jqKXm3JnZXRrXOatul7nX4iSWh7ItORb&X-Amz-Signature=2e3d34c0d6786e074d9691d41dff64ec6c72ec95316b0448b9fff4f51fc8d1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS6EMNH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUaQPtXtqKrW%2FKSWQT%2BBCl7xBS1Y9x5FfoldfSfOGt4AIhAPVv13z5cW2mgZ29QLxivfjXxccPJla14tAmbPzbZh0KKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmQucp4VZURBcPVHEq3APg9sIy%2BFhxi3a%2BB4Oh7VW9HhBgqSH%2BdxBQCxxMVG23n9F8OpxH3FBICnDjsBEZnng08ROr5FOCT5oKjhRpulP2miJrc8MbH9qRc2I%2Fia5Clu6msKTFCYTePhdndhod5B6xTEeOMgcgN9lLotyc2xCizPnQBE3EbtdHS8a9u2D8UFUlz1ZO7d6AHYpM2DaJSW28D0FiAl6Svn%2FTXURDr6OpaWip29Pi24FQIMfEZUjMkupcKiqKSfy1pchbowMoIkz3vaNg2tWTWMj01MOjOAea7KlhGYNfsJSvn73Vk7YjWVxrc%2FLKupa5YA8fvVhQrnm6hq56aT98Th1US5gLa09Ucrare6Myug1ttOKp%2BL2CfVPg8AWycePEc6hfV23dl71GaDSVQuyCJWIAXlqyNDz%2FGnl67GIJK0Tc7Lg1cP9p2g5aKPKsw7bZ3aY4jwxUCdxxw%2FjvK3Ny%2BTeyVhBnAYoW9oZpH2UAq8C4bHirbi9JUT%2BFu3JouUP69W%2FQN%2FQRfTEbE7aXaBCH31dtnA56lhG18NhE2ItgRHH9F9Y6LgrarxQJ18jfAYd67kEs%2FK2toCrzqVkTQP52Frxt%2Bjvxv%2FU1%2B2QiuqlVkjbUOwS54A7%2FLDCKPVrpVMb5XSv%2B5zDiwNTCBjqkAUuLqq4QNxbPr8s%2BYo1tYGkgtwaJZjPzcds89nkimjOFVtnuSLMQA9w0cAuAgxUtvW5SOZZgwh0YYF4jr%2F8Pds3QGul0aGC%2BeTxJDnbONYvlnEpsysyDlM4mwRB2WN3IU8PqT%2FmsMcT%2FJRSrkruNx0ffVWFmihASBnqe6zGLFbAZ7cqp1awhMdm388i8jqKXm3JnZXRrXOatul7nX4iSWh7ItORb&X-Amz-Signature=b377f3c7b65aa910cde3c610d27f4f4a60125fc3bcfd2745fc6e04c62ff9733e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS6EMNH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUaQPtXtqKrW%2FKSWQT%2BBCl7xBS1Y9x5FfoldfSfOGt4AIhAPVv13z5cW2mgZ29QLxivfjXxccPJla14tAmbPzbZh0KKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmQucp4VZURBcPVHEq3APg9sIy%2BFhxi3a%2BB4Oh7VW9HhBgqSH%2BdxBQCxxMVG23n9F8OpxH3FBICnDjsBEZnng08ROr5FOCT5oKjhRpulP2miJrc8MbH9qRc2I%2Fia5Clu6msKTFCYTePhdndhod5B6xTEeOMgcgN9lLotyc2xCizPnQBE3EbtdHS8a9u2D8UFUlz1ZO7d6AHYpM2DaJSW28D0FiAl6Svn%2FTXURDr6OpaWip29Pi24FQIMfEZUjMkupcKiqKSfy1pchbowMoIkz3vaNg2tWTWMj01MOjOAea7KlhGYNfsJSvn73Vk7YjWVxrc%2FLKupa5YA8fvVhQrnm6hq56aT98Th1US5gLa09Ucrare6Myug1ttOKp%2BL2CfVPg8AWycePEc6hfV23dl71GaDSVQuyCJWIAXlqyNDz%2FGnl67GIJK0Tc7Lg1cP9p2g5aKPKsw7bZ3aY4jwxUCdxxw%2FjvK3Ny%2BTeyVhBnAYoW9oZpH2UAq8C4bHirbi9JUT%2BFu3JouUP69W%2FQN%2FQRfTEbE7aXaBCH31dtnA56lhG18NhE2ItgRHH9F9Y6LgrarxQJ18jfAYd67kEs%2FK2toCrzqVkTQP52Frxt%2Bjvxv%2FU1%2B2QiuqlVkjbUOwS54A7%2FLDCKPVrpVMb5XSv%2B5zDiwNTCBjqkAUuLqq4QNxbPr8s%2BYo1tYGkgtwaJZjPzcds89nkimjOFVtnuSLMQA9w0cAuAgxUtvW5SOZZgwh0YYF4jr%2F8Pds3QGul0aGC%2BeTxJDnbONYvlnEpsysyDlM4mwRB2WN3IU8PqT%2FmsMcT%2FJRSrkruNx0ffVWFmihASBnqe6zGLFbAZ7cqp1awhMdm388i8jqKXm3JnZXRrXOatul7nX4iSWh7ItORb&X-Amz-Signature=efc4000bfccac3a5ebec75c0359175609dd6b5d71ad6eea22bfd92c32cd8104a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS6EMNH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUaQPtXtqKrW%2FKSWQT%2BBCl7xBS1Y9x5FfoldfSfOGt4AIhAPVv13z5cW2mgZ29QLxivfjXxccPJla14tAmbPzbZh0KKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmQucp4VZURBcPVHEq3APg9sIy%2BFhxi3a%2BB4Oh7VW9HhBgqSH%2BdxBQCxxMVG23n9F8OpxH3FBICnDjsBEZnng08ROr5FOCT5oKjhRpulP2miJrc8MbH9qRc2I%2Fia5Clu6msKTFCYTePhdndhod5B6xTEeOMgcgN9lLotyc2xCizPnQBE3EbtdHS8a9u2D8UFUlz1ZO7d6AHYpM2DaJSW28D0FiAl6Svn%2FTXURDr6OpaWip29Pi24FQIMfEZUjMkupcKiqKSfy1pchbowMoIkz3vaNg2tWTWMj01MOjOAea7KlhGYNfsJSvn73Vk7YjWVxrc%2FLKupa5YA8fvVhQrnm6hq56aT98Th1US5gLa09Ucrare6Myug1ttOKp%2BL2CfVPg8AWycePEc6hfV23dl71GaDSVQuyCJWIAXlqyNDz%2FGnl67GIJK0Tc7Lg1cP9p2g5aKPKsw7bZ3aY4jwxUCdxxw%2FjvK3Ny%2BTeyVhBnAYoW9oZpH2UAq8C4bHirbi9JUT%2BFu3JouUP69W%2FQN%2FQRfTEbE7aXaBCH31dtnA56lhG18NhE2ItgRHH9F9Y6LgrarxQJ18jfAYd67kEs%2FK2toCrzqVkTQP52Frxt%2Bjvxv%2FU1%2B2QiuqlVkjbUOwS54A7%2FLDCKPVrpVMb5XSv%2B5zDiwNTCBjqkAUuLqq4QNxbPr8s%2BYo1tYGkgtwaJZjPzcds89nkimjOFVtnuSLMQA9w0cAuAgxUtvW5SOZZgwh0YYF4jr%2F8Pds3QGul0aGC%2BeTxJDnbONYvlnEpsysyDlM4mwRB2WN3IU8PqT%2FmsMcT%2FJRSrkruNx0ffVWFmihASBnqe6zGLFbAZ7cqp1awhMdm388i8jqKXm3JnZXRrXOatul7nX4iSWh7ItORb&X-Amz-Signature=2fe4dd30b24f56511d321bceee571cef96c74b0f08674178d337e45b42b5f193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS6EMNH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUaQPtXtqKrW%2FKSWQT%2BBCl7xBS1Y9x5FfoldfSfOGt4AIhAPVv13z5cW2mgZ29QLxivfjXxccPJla14tAmbPzbZh0KKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmQucp4VZURBcPVHEq3APg9sIy%2BFhxi3a%2BB4Oh7VW9HhBgqSH%2BdxBQCxxMVG23n9F8OpxH3FBICnDjsBEZnng08ROr5FOCT5oKjhRpulP2miJrc8MbH9qRc2I%2Fia5Clu6msKTFCYTePhdndhod5B6xTEeOMgcgN9lLotyc2xCizPnQBE3EbtdHS8a9u2D8UFUlz1ZO7d6AHYpM2DaJSW28D0FiAl6Svn%2FTXURDr6OpaWip29Pi24FQIMfEZUjMkupcKiqKSfy1pchbowMoIkz3vaNg2tWTWMj01MOjOAea7KlhGYNfsJSvn73Vk7YjWVxrc%2FLKupa5YA8fvVhQrnm6hq56aT98Th1US5gLa09Ucrare6Myug1ttOKp%2BL2CfVPg8AWycePEc6hfV23dl71GaDSVQuyCJWIAXlqyNDz%2FGnl67GIJK0Tc7Lg1cP9p2g5aKPKsw7bZ3aY4jwxUCdxxw%2FjvK3Ny%2BTeyVhBnAYoW9oZpH2UAq8C4bHirbi9JUT%2BFu3JouUP69W%2FQN%2FQRfTEbE7aXaBCH31dtnA56lhG18NhE2ItgRHH9F9Y6LgrarxQJ18jfAYd67kEs%2FK2toCrzqVkTQP52Frxt%2Bjvxv%2FU1%2B2QiuqlVkjbUOwS54A7%2FLDCKPVrpVMb5XSv%2B5zDiwNTCBjqkAUuLqq4QNxbPr8s%2BYo1tYGkgtwaJZjPzcds89nkimjOFVtnuSLMQA9w0cAuAgxUtvW5SOZZgwh0YYF4jr%2F8Pds3QGul0aGC%2BeTxJDnbONYvlnEpsysyDlM4mwRB2WN3IU8PqT%2FmsMcT%2FJRSrkruNx0ffVWFmihASBnqe6zGLFbAZ7cqp1awhMdm388i8jqKXm3JnZXRrXOatul7nX4iSWh7ItORb&X-Amz-Signature=13ab4cadc1bb1004d3d1820ce736e2aee4573662af27790ec7835d205ea3b0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS6EMNH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUaQPtXtqKrW%2FKSWQT%2BBCl7xBS1Y9x5FfoldfSfOGt4AIhAPVv13z5cW2mgZ29QLxivfjXxccPJla14tAmbPzbZh0KKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmQucp4VZURBcPVHEq3APg9sIy%2BFhxi3a%2BB4Oh7VW9HhBgqSH%2BdxBQCxxMVG23n9F8OpxH3FBICnDjsBEZnng08ROr5FOCT5oKjhRpulP2miJrc8MbH9qRc2I%2Fia5Clu6msKTFCYTePhdndhod5B6xTEeOMgcgN9lLotyc2xCizPnQBE3EbtdHS8a9u2D8UFUlz1ZO7d6AHYpM2DaJSW28D0FiAl6Svn%2FTXURDr6OpaWip29Pi24FQIMfEZUjMkupcKiqKSfy1pchbowMoIkz3vaNg2tWTWMj01MOjOAea7KlhGYNfsJSvn73Vk7YjWVxrc%2FLKupa5YA8fvVhQrnm6hq56aT98Th1US5gLa09Ucrare6Myug1ttOKp%2BL2CfVPg8AWycePEc6hfV23dl71GaDSVQuyCJWIAXlqyNDz%2FGnl67GIJK0Tc7Lg1cP9p2g5aKPKsw7bZ3aY4jwxUCdxxw%2FjvK3Ny%2BTeyVhBnAYoW9oZpH2UAq8C4bHirbi9JUT%2BFu3JouUP69W%2FQN%2FQRfTEbE7aXaBCH31dtnA56lhG18NhE2ItgRHH9F9Y6LgrarxQJ18jfAYd67kEs%2FK2toCrzqVkTQP52Frxt%2Bjvxv%2FU1%2B2QiuqlVkjbUOwS54A7%2FLDCKPVrpVMb5XSv%2B5zDiwNTCBjqkAUuLqq4QNxbPr8s%2BYo1tYGkgtwaJZjPzcds89nkimjOFVtnuSLMQA9w0cAuAgxUtvW5SOZZgwh0YYF4jr%2F8Pds3QGul0aGC%2BeTxJDnbONYvlnEpsysyDlM4mwRB2WN3IU8PqT%2FmsMcT%2FJRSrkruNx0ffVWFmihASBnqe6zGLFbAZ7cqp1awhMdm388i8jqKXm3JnZXRrXOatul7nX4iSWh7ItORb&X-Amz-Signature=1bd1c19a6e98d5d5718cb90a4d9838da931b8e7e406cea42520aeaabe5436acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS6EMNH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUaQPtXtqKrW%2FKSWQT%2BBCl7xBS1Y9x5FfoldfSfOGt4AIhAPVv13z5cW2mgZ29QLxivfjXxccPJla14tAmbPzbZh0KKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmQucp4VZURBcPVHEq3APg9sIy%2BFhxi3a%2BB4Oh7VW9HhBgqSH%2BdxBQCxxMVG23n9F8OpxH3FBICnDjsBEZnng08ROr5FOCT5oKjhRpulP2miJrc8MbH9qRc2I%2Fia5Clu6msKTFCYTePhdndhod5B6xTEeOMgcgN9lLotyc2xCizPnQBE3EbtdHS8a9u2D8UFUlz1ZO7d6AHYpM2DaJSW28D0FiAl6Svn%2FTXURDr6OpaWip29Pi24FQIMfEZUjMkupcKiqKSfy1pchbowMoIkz3vaNg2tWTWMj01MOjOAea7KlhGYNfsJSvn73Vk7YjWVxrc%2FLKupa5YA8fvVhQrnm6hq56aT98Th1US5gLa09Ucrare6Myug1ttOKp%2BL2CfVPg8AWycePEc6hfV23dl71GaDSVQuyCJWIAXlqyNDz%2FGnl67GIJK0Tc7Lg1cP9p2g5aKPKsw7bZ3aY4jwxUCdxxw%2FjvK3Ny%2BTeyVhBnAYoW9oZpH2UAq8C4bHirbi9JUT%2BFu3JouUP69W%2FQN%2FQRfTEbE7aXaBCH31dtnA56lhG18NhE2ItgRHH9F9Y6LgrarxQJ18jfAYd67kEs%2FK2toCrzqVkTQP52Frxt%2Bjvxv%2FU1%2B2QiuqlVkjbUOwS54A7%2FLDCKPVrpVMb5XSv%2B5zDiwNTCBjqkAUuLqq4QNxbPr8s%2BYo1tYGkgtwaJZjPzcds89nkimjOFVtnuSLMQA9w0cAuAgxUtvW5SOZZgwh0YYF4jr%2F8Pds3QGul0aGC%2BeTxJDnbONYvlnEpsysyDlM4mwRB2WN3IU8PqT%2FmsMcT%2FJRSrkruNx0ffVWFmihASBnqe6zGLFbAZ7cqp1awhMdm388i8jqKXm3JnZXRrXOatul7nX4iSWh7ItORb&X-Amz-Signature=ebdd74e566fb8a9d8347d88ea20b83480884836abdff35b4d51e02bc4d0aae07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
