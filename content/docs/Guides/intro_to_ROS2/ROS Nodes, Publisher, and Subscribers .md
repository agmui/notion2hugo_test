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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVTDBAR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE352%2FKEVAhrMJrcBpbB%2FX8%2FsXk%2BUkiqRou0nhVk46xcAiAGgTTyHcyfXOQWOMalP3CqV26WpkIhabcukp2SdqbYWyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYmk1cSzKzZqsdt10KtwDEcEj2KHhyfsi6lSph4RZGQdQy23llf72Sr5yyjXY0tENp8VknTTafs2XYedKx5sUBNMICXnX%2Bq6xN5j9kkZw5kSnJ06ja1t1CzEijFNambvGdrgREUVu4WCHnjTKVl3J8RQUtpqLJUj6xNiKPUUdROcn1HAuP7DM7I65xMr%2BJcR0UgV6IDL3EP%2FBQCy9dkojEnMWR%2F%2F5w1PvQjkcOgri2hdMlZ6EBTDZmpKsr7z9L%2F33cOMpzD5NOPyoiJr4aMjPfTvpfuzRzhjuTpdws4Gnsp8apZEiTzo3JrwHpyypkZS8PBZ7%2BUoWSIK6kfRzGg1cTz2nK5OV8XVwqgshxEl4QbfbZEVfFRM22RYRzEDksj8rebOjtgon3JsoY1L7cLWIm9hG4BXe8X%2FuniWLWsv%2FudwraiNrnqYahxMDUE5IfhTnzf%2BZ1h9R9LMywYwJ0TeTb%2BPNFAa5beabf4Ec%2B9v%2F4hnqD0vNXxpvwkYKRuxhU0Ticz86295LH975Tw%2FxVo%2FX3Uv0v1e%2B%2Bl3bLm1PTnRyXsqVtG5ULL6zDIr3O7pHcpvFZ2Sxz7yeWKxZi5V8LC2lWoIrT1IU6HIMMdhEnFobZfhxY3ry0XWgUTiffCpq4eWkbE7%2BMA0abK7pTlow4cCqwAY6pgHthSxibgcfydLtd3j4PP0UkGw2foMS2lU%2FG4tOUE%2Bebkh27tXJQGc595%2BxxLkK0%2BMR63TkADYMvO7WOPoj6DcvHoE%2BGed97np5ThqFjZBvHuO5rOQGDFJsH5UHzwm1b6LS04cbZo066W2LZO6M%2FJbDaH30o167A354oA%2FGxK9VR1%2B9no3AIob1CrfBKb6idJF2v18AzbRFQjKmfNrGkKRUetorgXBq&X-Amz-Signature=8bccadddc8e545d6c734c48b4a2ec4a73d976d3b398345833edd39fe9560e84e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVTDBAR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE352%2FKEVAhrMJrcBpbB%2FX8%2FsXk%2BUkiqRou0nhVk46xcAiAGgTTyHcyfXOQWOMalP3CqV26WpkIhabcukp2SdqbYWyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYmk1cSzKzZqsdt10KtwDEcEj2KHhyfsi6lSph4RZGQdQy23llf72Sr5yyjXY0tENp8VknTTafs2XYedKx5sUBNMICXnX%2Bq6xN5j9kkZw5kSnJ06ja1t1CzEijFNambvGdrgREUVu4WCHnjTKVl3J8RQUtpqLJUj6xNiKPUUdROcn1HAuP7DM7I65xMr%2BJcR0UgV6IDL3EP%2FBQCy9dkojEnMWR%2F%2F5w1PvQjkcOgri2hdMlZ6EBTDZmpKsr7z9L%2F33cOMpzD5NOPyoiJr4aMjPfTvpfuzRzhjuTpdws4Gnsp8apZEiTzo3JrwHpyypkZS8PBZ7%2BUoWSIK6kfRzGg1cTz2nK5OV8XVwqgshxEl4QbfbZEVfFRM22RYRzEDksj8rebOjtgon3JsoY1L7cLWIm9hG4BXe8X%2FuniWLWsv%2FudwraiNrnqYahxMDUE5IfhTnzf%2BZ1h9R9LMywYwJ0TeTb%2BPNFAa5beabf4Ec%2B9v%2F4hnqD0vNXxpvwkYKRuxhU0Ticz86295LH975Tw%2FxVo%2FX3Uv0v1e%2B%2Bl3bLm1PTnRyXsqVtG5ULL6zDIr3O7pHcpvFZ2Sxz7yeWKxZi5V8LC2lWoIrT1IU6HIMMdhEnFobZfhxY3ry0XWgUTiffCpq4eWkbE7%2BMA0abK7pTlow4cCqwAY6pgHthSxibgcfydLtd3j4PP0UkGw2foMS2lU%2FG4tOUE%2Bebkh27tXJQGc595%2BxxLkK0%2BMR63TkADYMvO7WOPoj6DcvHoE%2BGed97np5ThqFjZBvHuO5rOQGDFJsH5UHzwm1b6LS04cbZo066W2LZO6M%2FJbDaH30o167A354oA%2FGxK9VR1%2B9no3AIob1CrfBKb6idJF2v18AzbRFQjKmfNrGkKRUetorgXBq&X-Amz-Signature=04d96cd0fcb6c6b8a50c7b8991040fde3c700fae19d53c4c15c6dbb837799464&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVTDBAR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE352%2FKEVAhrMJrcBpbB%2FX8%2FsXk%2BUkiqRou0nhVk46xcAiAGgTTyHcyfXOQWOMalP3CqV26WpkIhabcukp2SdqbYWyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYmk1cSzKzZqsdt10KtwDEcEj2KHhyfsi6lSph4RZGQdQy23llf72Sr5yyjXY0tENp8VknTTafs2XYedKx5sUBNMICXnX%2Bq6xN5j9kkZw5kSnJ06ja1t1CzEijFNambvGdrgREUVu4WCHnjTKVl3J8RQUtpqLJUj6xNiKPUUdROcn1HAuP7DM7I65xMr%2BJcR0UgV6IDL3EP%2FBQCy9dkojEnMWR%2F%2F5w1PvQjkcOgri2hdMlZ6EBTDZmpKsr7z9L%2F33cOMpzD5NOPyoiJr4aMjPfTvpfuzRzhjuTpdws4Gnsp8apZEiTzo3JrwHpyypkZS8PBZ7%2BUoWSIK6kfRzGg1cTz2nK5OV8XVwqgshxEl4QbfbZEVfFRM22RYRzEDksj8rebOjtgon3JsoY1L7cLWIm9hG4BXe8X%2FuniWLWsv%2FudwraiNrnqYahxMDUE5IfhTnzf%2BZ1h9R9LMywYwJ0TeTb%2BPNFAa5beabf4Ec%2B9v%2F4hnqD0vNXxpvwkYKRuxhU0Ticz86295LH975Tw%2FxVo%2FX3Uv0v1e%2B%2Bl3bLm1PTnRyXsqVtG5ULL6zDIr3O7pHcpvFZ2Sxz7yeWKxZi5V8LC2lWoIrT1IU6HIMMdhEnFobZfhxY3ry0XWgUTiffCpq4eWkbE7%2BMA0abK7pTlow4cCqwAY6pgHthSxibgcfydLtd3j4PP0UkGw2foMS2lU%2FG4tOUE%2Bebkh27tXJQGc595%2BxxLkK0%2BMR63TkADYMvO7WOPoj6DcvHoE%2BGed97np5ThqFjZBvHuO5rOQGDFJsH5UHzwm1b6LS04cbZo066W2LZO6M%2FJbDaH30o167A354oA%2FGxK9VR1%2B9no3AIob1CrfBKb6idJF2v18AzbRFQjKmfNrGkKRUetorgXBq&X-Amz-Signature=d6a618692d27e79e9d6f902bed2a40cae3136130899d1c60d2ed1b8ad3ae59d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVTDBAR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE352%2FKEVAhrMJrcBpbB%2FX8%2FsXk%2BUkiqRou0nhVk46xcAiAGgTTyHcyfXOQWOMalP3CqV26WpkIhabcukp2SdqbYWyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYmk1cSzKzZqsdt10KtwDEcEj2KHhyfsi6lSph4RZGQdQy23llf72Sr5yyjXY0tENp8VknTTafs2XYedKx5sUBNMICXnX%2Bq6xN5j9kkZw5kSnJ06ja1t1CzEijFNambvGdrgREUVu4WCHnjTKVl3J8RQUtpqLJUj6xNiKPUUdROcn1HAuP7DM7I65xMr%2BJcR0UgV6IDL3EP%2FBQCy9dkojEnMWR%2F%2F5w1PvQjkcOgri2hdMlZ6EBTDZmpKsr7z9L%2F33cOMpzD5NOPyoiJr4aMjPfTvpfuzRzhjuTpdws4Gnsp8apZEiTzo3JrwHpyypkZS8PBZ7%2BUoWSIK6kfRzGg1cTz2nK5OV8XVwqgshxEl4QbfbZEVfFRM22RYRzEDksj8rebOjtgon3JsoY1L7cLWIm9hG4BXe8X%2FuniWLWsv%2FudwraiNrnqYahxMDUE5IfhTnzf%2BZ1h9R9LMywYwJ0TeTb%2BPNFAa5beabf4Ec%2B9v%2F4hnqD0vNXxpvwkYKRuxhU0Ticz86295LH975Tw%2FxVo%2FX3Uv0v1e%2B%2Bl3bLm1PTnRyXsqVtG5ULL6zDIr3O7pHcpvFZ2Sxz7yeWKxZi5V8LC2lWoIrT1IU6HIMMdhEnFobZfhxY3ry0XWgUTiffCpq4eWkbE7%2BMA0abK7pTlow4cCqwAY6pgHthSxibgcfydLtd3j4PP0UkGw2foMS2lU%2FG4tOUE%2Bebkh27tXJQGc595%2BxxLkK0%2BMR63TkADYMvO7WOPoj6DcvHoE%2BGed97np5ThqFjZBvHuO5rOQGDFJsH5UHzwm1b6LS04cbZo066W2LZO6M%2FJbDaH30o167A354oA%2FGxK9VR1%2B9no3AIob1CrfBKb6idJF2v18AzbRFQjKmfNrGkKRUetorgXBq&X-Amz-Signature=1aa426a551684ce9bd2efa1f9546a6941007bca91209acf947f2ef2cdf1a2142&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVTDBAR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE352%2FKEVAhrMJrcBpbB%2FX8%2FsXk%2BUkiqRou0nhVk46xcAiAGgTTyHcyfXOQWOMalP3CqV26WpkIhabcukp2SdqbYWyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYmk1cSzKzZqsdt10KtwDEcEj2KHhyfsi6lSph4RZGQdQy23llf72Sr5yyjXY0tENp8VknTTafs2XYedKx5sUBNMICXnX%2Bq6xN5j9kkZw5kSnJ06ja1t1CzEijFNambvGdrgREUVu4WCHnjTKVl3J8RQUtpqLJUj6xNiKPUUdROcn1HAuP7DM7I65xMr%2BJcR0UgV6IDL3EP%2FBQCy9dkojEnMWR%2F%2F5w1PvQjkcOgri2hdMlZ6EBTDZmpKsr7z9L%2F33cOMpzD5NOPyoiJr4aMjPfTvpfuzRzhjuTpdws4Gnsp8apZEiTzo3JrwHpyypkZS8PBZ7%2BUoWSIK6kfRzGg1cTz2nK5OV8XVwqgshxEl4QbfbZEVfFRM22RYRzEDksj8rebOjtgon3JsoY1L7cLWIm9hG4BXe8X%2FuniWLWsv%2FudwraiNrnqYahxMDUE5IfhTnzf%2BZ1h9R9LMywYwJ0TeTb%2BPNFAa5beabf4Ec%2B9v%2F4hnqD0vNXxpvwkYKRuxhU0Ticz86295LH975Tw%2FxVo%2FX3Uv0v1e%2B%2Bl3bLm1PTnRyXsqVtG5ULL6zDIr3O7pHcpvFZ2Sxz7yeWKxZi5V8LC2lWoIrT1IU6HIMMdhEnFobZfhxY3ry0XWgUTiffCpq4eWkbE7%2BMA0abK7pTlow4cCqwAY6pgHthSxibgcfydLtd3j4PP0UkGw2foMS2lU%2FG4tOUE%2Bebkh27tXJQGc595%2BxxLkK0%2BMR63TkADYMvO7WOPoj6DcvHoE%2BGed97np5ThqFjZBvHuO5rOQGDFJsH5UHzwm1b6LS04cbZo066W2LZO6M%2FJbDaH30o167A354oA%2FGxK9VR1%2B9no3AIob1CrfBKb6idJF2v18AzbRFQjKmfNrGkKRUetorgXBq&X-Amz-Signature=828b3537327e50eb25251891f5179585f5417964a252e539a0203fff33c2551c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVTDBAR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE352%2FKEVAhrMJrcBpbB%2FX8%2FsXk%2BUkiqRou0nhVk46xcAiAGgTTyHcyfXOQWOMalP3CqV26WpkIhabcukp2SdqbYWyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYmk1cSzKzZqsdt10KtwDEcEj2KHhyfsi6lSph4RZGQdQy23llf72Sr5yyjXY0tENp8VknTTafs2XYedKx5sUBNMICXnX%2Bq6xN5j9kkZw5kSnJ06ja1t1CzEijFNambvGdrgREUVu4WCHnjTKVl3J8RQUtpqLJUj6xNiKPUUdROcn1HAuP7DM7I65xMr%2BJcR0UgV6IDL3EP%2FBQCy9dkojEnMWR%2F%2F5w1PvQjkcOgri2hdMlZ6EBTDZmpKsr7z9L%2F33cOMpzD5NOPyoiJr4aMjPfTvpfuzRzhjuTpdws4Gnsp8apZEiTzo3JrwHpyypkZS8PBZ7%2BUoWSIK6kfRzGg1cTz2nK5OV8XVwqgshxEl4QbfbZEVfFRM22RYRzEDksj8rebOjtgon3JsoY1L7cLWIm9hG4BXe8X%2FuniWLWsv%2FudwraiNrnqYahxMDUE5IfhTnzf%2BZ1h9R9LMywYwJ0TeTb%2BPNFAa5beabf4Ec%2B9v%2F4hnqD0vNXxpvwkYKRuxhU0Ticz86295LH975Tw%2FxVo%2FX3Uv0v1e%2B%2Bl3bLm1PTnRyXsqVtG5ULL6zDIr3O7pHcpvFZ2Sxz7yeWKxZi5V8LC2lWoIrT1IU6HIMMdhEnFobZfhxY3ry0XWgUTiffCpq4eWkbE7%2BMA0abK7pTlow4cCqwAY6pgHthSxibgcfydLtd3j4PP0UkGw2foMS2lU%2FG4tOUE%2Bebkh27tXJQGc595%2BxxLkK0%2BMR63TkADYMvO7WOPoj6DcvHoE%2BGed97np5ThqFjZBvHuO5rOQGDFJsH5UHzwm1b6LS04cbZo066W2LZO6M%2FJbDaH30o167A354oA%2FGxK9VR1%2B9no3AIob1CrfBKb6idJF2v18AzbRFQjKmfNrGkKRUetorgXBq&X-Amz-Signature=c4344851038c8c08883666dcebecfee840236f28b3931c25031a6fad8834148c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVTDBAR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE352%2FKEVAhrMJrcBpbB%2FX8%2FsXk%2BUkiqRou0nhVk46xcAiAGgTTyHcyfXOQWOMalP3CqV26WpkIhabcukp2SdqbYWyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYmk1cSzKzZqsdt10KtwDEcEj2KHhyfsi6lSph4RZGQdQy23llf72Sr5yyjXY0tENp8VknTTafs2XYedKx5sUBNMICXnX%2Bq6xN5j9kkZw5kSnJ06ja1t1CzEijFNambvGdrgREUVu4WCHnjTKVl3J8RQUtpqLJUj6xNiKPUUdROcn1HAuP7DM7I65xMr%2BJcR0UgV6IDL3EP%2FBQCy9dkojEnMWR%2F%2F5w1PvQjkcOgri2hdMlZ6EBTDZmpKsr7z9L%2F33cOMpzD5NOPyoiJr4aMjPfTvpfuzRzhjuTpdws4Gnsp8apZEiTzo3JrwHpyypkZS8PBZ7%2BUoWSIK6kfRzGg1cTz2nK5OV8XVwqgshxEl4QbfbZEVfFRM22RYRzEDksj8rebOjtgon3JsoY1L7cLWIm9hG4BXe8X%2FuniWLWsv%2FudwraiNrnqYahxMDUE5IfhTnzf%2BZ1h9R9LMywYwJ0TeTb%2BPNFAa5beabf4Ec%2B9v%2F4hnqD0vNXxpvwkYKRuxhU0Ticz86295LH975Tw%2FxVo%2FX3Uv0v1e%2B%2Bl3bLm1PTnRyXsqVtG5ULL6zDIr3O7pHcpvFZ2Sxz7yeWKxZi5V8LC2lWoIrT1IU6HIMMdhEnFobZfhxY3ry0XWgUTiffCpq4eWkbE7%2BMA0abK7pTlow4cCqwAY6pgHthSxibgcfydLtd3j4PP0UkGw2foMS2lU%2FG4tOUE%2Bebkh27tXJQGc595%2BxxLkK0%2BMR63TkADYMvO7WOPoj6DcvHoE%2BGed97np5ThqFjZBvHuO5rOQGDFJsH5UHzwm1b6LS04cbZo066W2LZO6M%2FJbDaH30o167A354oA%2FGxK9VR1%2B9no3AIob1CrfBKb6idJF2v18AzbRFQjKmfNrGkKRUetorgXBq&X-Amz-Signature=62eb528486b3b08e4df00b21d3b2c880dac123ff559daf6727a20b4956de3b71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVTDBAR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE352%2FKEVAhrMJrcBpbB%2FX8%2FsXk%2BUkiqRou0nhVk46xcAiAGgTTyHcyfXOQWOMalP3CqV26WpkIhabcukp2SdqbYWyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMYmk1cSzKzZqsdt10KtwDEcEj2KHhyfsi6lSph4RZGQdQy23llf72Sr5yyjXY0tENp8VknTTafs2XYedKx5sUBNMICXnX%2Bq6xN5j9kkZw5kSnJ06ja1t1CzEijFNambvGdrgREUVu4WCHnjTKVl3J8RQUtpqLJUj6xNiKPUUdROcn1HAuP7DM7I65xMr%2BJcR0UgV6IDL3EP%2FBQCy9dkojEnMWR%2F%2F5w1PvQjkcOgri2hdMlZ6EBTDZmpKsr7z9L%2F33cOMpzD5NOPyoiJr4aMjPfTvpfuzRzhjuTpdws4Gnsp8apZEiTzo3JrwHpyypkZS8PBZ7%2BUoWSIK6kfRzGg1cTz2nK5OV8XVwqgshxEl4QbfbZEVfFRM22RYRzEDksj8rebOjtgon3JsoY1L7cLWIm9hG4BXe8X%2FuniWLWsv%2FudwraiNrnqYahxMDUE5IfhTnzf%2BZ1h9R9LMywYwJ0TeTb%2BPNFAa5beabf4Ec%2B9v%2F4hnqD0vNXxpvwkYKRuxhU0Ticz86295LH975Tw%2FxVo%2FX3Uv0v1e%2B%2Bl3bLm1PTnRyXsqVtG5ULL6zDIr3O7pHcpvFZ2Sxz7yeWKxZi5V8LC2lWoIrT1IU6HIMMdhEnFobZfhxY3ry0XWgUTiffCpq4eWkbE7%2BMA0abK7pTlow4cCqwAY6pgHthSxibgcfydLtd3j4PP0UkGw2foMS2lU%2FG4tOUE%2Bebkh27tXJQGc595%2BxxLkK0%2BMR63TkADYMvO7WOPoj6DcvHoE%2BGed97np5ThqFjZBvHuO5rOQGDFJsH5UHzwm1b6LS04cbZo066W2LZO6M%2FJbDaH30o167A354oA%2FGxK9VR1%2B9no3AIob1CrfBKb6idJF2v18AzbRFQjKmfNrGkKRUetorgXBq&X-Amz-Signature=8adce112b16dd255ce8d4940b0c7ea79af8ecc25076050b0a99c73d1de5d26c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
