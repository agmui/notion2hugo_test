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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLEAKKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmhRZEgWOOCq5HZft7iSVLAPyCqo%2BC4kQAressW2Zi9wIgDo%2B5pFZsGuaiRfbwTHrY4xHdvDZlZAI614JM0rv4VRQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK4V8s27RH8NK%2Bg3VSrcA5S0x5b2W5IkVjM%2BRo%2FLXwknXawOgZiCTcN0Dk0cx0gUO5rqnl%2B%2Fgb2bi4JHORwvd39lhVdrdP4an0UwQQhBPmf%2BDMqoMet7jZ%2BWYixOwvgB%2BHSfKJktwRY8Axi0ftjQaiSxyAAwIFk9HYtiEQcxRtqoAPfNx4h9JjluOa0SVzWyft7bjS%2BUaYMdQIxZ0P3WUr3Mzyk7AhueEBbX5uz5ij%2FHd7GHS4FXJAjyBxC%2F4%2Bo1XMlFs6SP4bRNA1EHo3mpCD1scGthZhEoikbGVgzmr8dz1JWGqIZcFA6Jv%2F2i2%2FxEgvzXmhj%2F8866Y5fBkjgASaDKB%2BgZp3BjaYDu8pkA2Lvtmzjpa0nIUs2mScDpuFQ1pmmmm64Hd8x1%2BSU3r2vTyySZb9zO8XJygK%2BsEjxPrc1IYOn33XKvri8HtAPDxZtrP6IF5OZA7GZcUxdileNYxSNIXhZe0AnCRwJoOYbpJkJdxh56CQhnJ6NVddL1oax%2FJN11GCeJSWpICCl6Lf1b%2BROcLMdJ4Tj%2FjPpI3lEYc%2FEA6fmWN2r7P2YRdmLrbGfmSk6XfDcAGLmaRqs2lZDwHroRKt9MIQ%2BhWGc1Tm%2F5IvB%2FFDgF8XuT%2BtkLO1T%2BxEebzO%2Ba5cu94KSyy%2B2%2BMNr8g8AGOqUBOejlKu7yOmsmxRGgJwZejD8bIy4hd3q4t4UyvndCoui%2BCQOAYp9YRzMKF1%2BI6IAXlrlY%2FbMUzTEAYltGmu7LGBQXn4Jt7PsYlGQfPgC%2BheXpXxuJXxTPVxHZkqbWMwCDSjsb%2B7PvCubG3BFUv4bJ20%2FDEi46X%2FTx6DnvpkLV7Xcffq6K7W34Q1lGQW3L0Bb71g3eiOL%2BhqlH8WRQmN7zExgVb5Hr&X-Amz-Signature=3bf67063d4de864fcefc4b1572076c8bbaaca4af01cd5401dca65f81ea66010f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLEAKKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmhRZEgWOOCq5HZft7iSVLAPyCqo%2BC4kQAressW2Zi9wIgDo%2B5pFZsGuaiRfbwTHrY4xHdvDZlZAI614JM0rv4VRQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK4V8s27RH8NK%2Bg3VSrcA5S0x5b2W5IkVjM%2BRo%2FLXwknXawOgZiCTcN0Dk0cx0gUO5rqnl%2B%2Fgb2bi4JHORwvd39lhVdrdP4an0UwQQhBPmf%2BDMqoMet7jZ%2BWYixOwvgB%2BHSfKJktwRY8Axi0ftjQaiSxyAAwIFk9HYtiEQcxRtqoAPfNx4h9JjluOa0SVzWyft7bjS%2BUaYMdQIxZ0P3WUr3Mzyk7AhueEBbX5uz5ij%2FHd7GHS4FXJAjyBxC%2F4%2Bo1XMlFs6SP4bRNA1EHo3mpCD1scGthZhEoikbGVgzmr8dz1JWGqIZcFA6Jv%2F2i2%2FxEgvzXmhj%2F8866Y5fBkjgASaDKB%2BgZp3BjaYDu8pkA2Lvtmzjpa0nIUs2mScDpuFQ1pmmmm64Hd8x1%2BSU3r2vTyySZb9zO8XJygK%2BsEjxPrc1IYOn33XKvri8HtAPDxZtrP6IF5OZA7GZcUxdileNYxSNIXhZe0AnCRwJoOYbpJkJdxh56CQhnJ6NVddL1oax%2FJN11GCeJSWpICCl6Lf1b%2BROcLMdJ4Tj%2FjPpI3lEYc%2FEA6fmWN2r7P2YRdmLrbGfmSk6XfDcAGLmaRqs2lZDwHroRKt9MIQ%2BhWGc1Tm%2F5IvB%2FFDgF8XuT%2BtkLO1T%2BxEebzO%2Ba5cu94KSyy%2B2%2BMNr8g8AGOqUBOejlKu7yOmsmxRGgJwZejD8bIy4hd3q4t4UyvndCoui%2BCQOAYp9YRzMKF1%2BI6IAXlrlY%2FbMUzTEAYltGmu7LGBQXn4Jt7PsYlGQfPgC%2BheXpXxuJXxTPVxHZkqbWMwCDSjsb%2B7PvCubG3BFUv4bJ20%2FDEi46X%2FTx6DnvpkLV7Xcffq6K7W34Q1lGQW3L0Bb71g3eiOL%2BhqlH8WRQmN7zExgVb5Hr&X-Amz-Signature=c801b0c6e18cef7c9dffa9557e60fde1387d3a45dc70394d8313ff814d741c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLEAKKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmhRZEgWOOCq5HZft7iSVLAPyCqo%2BC4kQAressW2Zi9wIgDo%2B5pFZsGuaiRfbwTHrY4xHdvDZlZAI614JM0rv4VRQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK4V8s27RH8NK%2Bg3VSrcA5S0x5b2W5IkVjM%2BRo%2FLXwknXawOgZiCTcN0Dk0cx0gUO5rqnl%2B%2Fgb2bi4JHORwvd39lhVdrdP4an0UwQQhBPmf%2BDMqoMet7jZ%2BWYixOwvgB%2BHSfKJktwRY8Axi0ftjQaiSxyAAwIFk9HYtiEQcxRtqoAPfNx4h9JjluOa0SVzWyft7bjS%2BUaYMdQIxZ0P3WUr3Mzyk7AhueEBbX5uz5ij%2FHd7GHS4FXJAjyBxC%2F4%2Bo1XMlFs6SP4bRNA1EHo3mpCD1scGthZhEoikbGVgzmr8dz1JWGqIZcFA6Jv%2F2i2%2FxEgvzXmhj%2F8866Y5fBkjgASaDKB%2BgZp3BjaYDu8pkA2Lvtmzjpa0nIUs2mScDpuFQ1pmmmm64Hd8x1%2BSU3r2vTyySZb9zO8XJygK%2BsEjxPrc1IYOn33XKvri8HtAPDxZtrP6IF5OZA7GZcUxdileNYxSNIXhZe0AnCRwJoOYbpJkJdxh56CQhnJ6NVddL1oax%2FJN11GCeJSWpICCl6Lf1b%2BROcLMdJ4Tj%2FjPpI3lEYc%2FEA6fmWN2r7P2YRdmLrbGfmSk6XfDcAGLmaRqs2lZDwHroRKt9MIQ%2BhWGc1Tm%2F5IvB%2FFDgF8XuT%2BtkLO1T%2BxEebzO%2Ba5cu94KSyy%2B2%2BMNr8g8AGOqUBOejlKu7yOmsmxRGgJwZejD8bIy4hd3q4t4UyvndCoui%2BCQOAYp9YRzMKF1%2BI6IAXlrlY%2FbMUzTEAYltGmu7LGBQXn4Jt7PsYlGQfPgC%2BheXpXxuJXxTPVxHZkqbWMwCDSjsb%2B7PvCubG3BFUv4bJ20%2FDEi46X%2FTx6DnvpkLV7Xcffq6K7W34Q1lGQW3L0Bb71g3eiOL%2BhqlH8WRQmN7zExgVb5Hr&X-Amz-Signature=5408e94fbb5b19bcd21ec8c35e1e8ae5d6258b5ad875b798dd6fecc249580ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLEAKKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmhRZEgWOOCq5HZft7iSVLAPyCqo%2BC4kQAressW2Zi9wIgDo%2B5pFZsGuaiRfbwTHrY4xHdvDZlZAI614JM0rv4VRQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK4V8s27RH8NK%2Bg3VSrcA5S0x5b2W5IkVjM%2BRo%2FLXwknXawOgZiCTcN0Dk0cx0gUO5rqnl%2B%2Fgb2bi4JHORwvd39lhVdrdP4an0UwQQhBPmf%2BDMqoMet7jZ%2BWYixOwvgB%2BHSfKJktwRY8Axi0ftjQaiSxyAAwIFk9HYtiEQcxRtqoAPfNx4h9JjluOa0SVzWyft7bjS%2BUaYMdQIxZ0P3WUr3Mzyk7AhueEBbX5uz5ij%2FHd7GHS4FXJAjyBxC%2F4%2Bo1XMlFs6SP4bRNA1EHo3mpCD1scGthZhEoikbGVgzmr8dz1JWGqIZcFA6Jv%2F2i2%2FxEgvzXmhj%2F8866Y5fBkjgASaDKB%2BgZp3BjaYDu8pkA2Lvtmzjpa0nIUs2mScDpuFQ1pmmmm64Hd8x1%2BSU3r2vTyySZb9zO8XJygK%2BsEjxPrc1IYOn33XKvri8HtAPDxZtrP6IF5OZA7GZcUxdileNYxSNIXhZe0AnCRwJoOYbpJkJdxh56CQhnJ6NVddL1oax%2FJN11GCeJSWpICCl6Lf1b%2BROcLMdJ4Tj%2FjPpI3lEYc%2FEA6fmWN2r7P2YRdmLrbGfmSk6XfDcAGLmaRqs2lZDwHroRKt9MIQ%2BhWGc1Tm%2F5IvB%2FFDgF8XuT%2BtkLO1T%2BxEebzO%2Ba5cu94KSyy%2B2%2BMNr8g8AGOqUBOejlKu7yOmsmxRGgJwZejD8bIy4hd3q4t4UyvndCoui%2BCQOAYp9YRzMKF1%2BI6IAXlrlY%2FbMUzTEAYltGmu7LGBQXn4Jt7PsYlGQfPgC%2BheXpXxuJXxTPVxHZkqbWMwCDSjsb%2B7PvCubG3BFUv4bJ20%2FDEi46X%2FTx6DnvpkLV7Xcffq6K7W34Q1lGQW3L0Bb71g3eiOL%2BhqlH8WRQmN7zExgVb5Hr&X-Amz-Signature=51b2037ecc77f34abb9a6337e948071323d90cfd7b0423a6340643a911d54aee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLEAKKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmhRZEgWOOCq5HZft7iSVLAPyCqo%2BC4kQAressW2Zi9wIgDo%2B5pFZsGuaiRfbwTHrY4xHdvDZlZAI614JM0rv4VRQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK4V8s27RH8NK%2Bg3VSrcA5S0x5b2W5IkVjM%2BRo%2FLXwknXawOgZiCTcN0Dk0cx0gUO5rqnl%2B%2Fgb2bi4JHORwvd39lhVdrdP4an0UwQQhBPmf%2BDMqoMet7jZ%2BWYixOwvgB%2BHSfKJktwRY8Axi0ftjQaiSxyAAwIFk9HYtiEQcxRtqoAPfNx4h9JjluOa0SVzWyft7bjS%2BUaYMdQIxZ0P3WUr3Mzyk7AhueEBbX5uz5ij%2FHd7GHS4FXJAjyBxC%2F4%2Bo1XMlFs6SP4bRNA1EHo3mpCD1scGthZhEoikbGVgzmr8dz1JWGqIZcFA6Jv%2F2i2%2FxEgvzXmhj%2F8866Y5fBkjgASaDKB%2BgZp3BjaYDu8pkA2Lvtmzjpa0nIUs2mScDpuFQ1pmmmm64Hd8x1%2BSU3r2vTyySZb9zO8XJygK%2BsEjxPrc1IYOn33XKvri8HtAPDxZtrP6IF5OZA7GZcUxdileNYxSNIXhZe0AnCRwJoOYbpJkJdxh56CQhnJ6NVddL1oax%2FJN11GCeJSWpICCl6Lf1b%2BROcLMdJ4Tj%2FjPpI3lEYc%2FEA6fmWN2r7P2YRdmLrbGfmSk6XfDcAGLmaRqs2lZDwHroRKt9MIQ%2BhWGc1Tm%2F5IvB%2FFDgF8XuT%2BtkLO1T%2BxEebzO%2Ba5cu94KSyy%2B2%2BMNr8g8AGOqUBOejlKu7yOmsmxRGgJwZejD8bIy4hd3q4t4UyvndCoui%2BCQOAYp9YRzMKF1%2BI6IAXlrlY%2FbMUzTEAYltGmu7LGBQXn4Jt7PsYlGQfPgC%2BheXpXxuJXxTPVxHZkqbWMwCDSjsb%2B7PvCubG3BFUv4bJ20%2FDEi46X%2FTx6DnvpkLV7Xcffq6K7W34Q1lGQW3L0Bb71g3eiOL%2BhqlH8WRQmN7zExgVb5Hr&X-Amz-Signature=936171104173344195dcca09a8bfb4d187433d061860da6d08220c6d5b11e6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLEAKKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmhRZEgWOOCq5HZft7iSVLAPyCqo%2BC4kQAressW2Zi9wIgDo%2B5pFZsGuaiRfbwTHrY4xHdvDZlZAI614JM0rv4VRQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK4V8s27RH8NK%2Bg3VSrcA5S0x5b2W5IkVjM%2BRo%2FLXwknXawOgZiCTcN0Dk0cx0gUO5rqnl%2B%2Fgb2bi4JHORwvd39lhVdrdP4an0UwQQhBPmf%2BDMqoMet7jZ%2BWYixOwvgB%2BHSfKJktwRY8Axi0ftjQaiSxyAAwIFk9HYtiEQcxRtqoAPfNx4h9JjluOa0SVzWyft7bjS%2BUaYMdQIxZ0P3WUr3Mzyk7AhueEBbX5uz5ij%2FHd7GHS4FXJAjyBxC%2F4%2Bo1XMlFs6SP4bRNA1EHo3mpCD1scGthZhEoikbGVgzmr8dz1JWGqIZcFA6Jv%2F2i2%2FxEgvzXmhj%2F8866Y5fBkjgASaDKB%2BgZp3BjaYDu8pkA2Lvtmzjpa0nIUs2mScDpuFQ1pmmmm64Hd8x1%2BSU3r2vTyySZb9zO8XJygK%2BsEjxPrc1IYOn33XKvri8HtAPDxZtrP6IF5OZA7GZcUxdileNYxSNIXhZe0AnCRwJoOYbpJkJdxh56CQhnJ6NVddL1oax%2FJN11GCeJSWpICCl6Lf1b%2BROcLMdJ4Tj%2FjPpI3lEYc%2FEA6fmWN2r7P2YRdmLrbGfmSk6XfDcAGLmaRqs2lZDwHroRKt9MIQ%2BhWGc1Tm%2F5IvB%2FFDgF8XuT%2BtkLO1T%2BxEebzO%2Ba5cu94KSyy%2B2%2BMNr8g8AGOqUBOejlKu7yOmsmxRGgJwZejD8bIy4hd3q4t4UyvndCoui%2BCQOAYp9YRzMKF1%2BI6IAXlrlY%2FbMUzTEAYltGmu7LGBQXn4Jt7PsYlGQfPgC%2BheXpXxuJXxTPVxHZkqbWMwCDSjsb%2B7PvCubG3BFUv4bJ20%2FDEi46X%2FTx6DnvpkLV7Xcffq6K7W34Q1lGQW3L0Bb71g3eiOL%2BhqlH8WRQmN7zExgVb5Hr&X-Amz-Signature=4f0c563c68dc546dd80ca27d66944e8bcc1688a0705a538126850eae8e724971&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLEAKKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmhRZEgWOOCq5HZft7iSVLAPyCqo%2BC4kQAressW2Zi9wIgDo%2B5pFZsGuaiRfbwTHrY4xHdvDZlZAI614JM0rv4VRQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK4V8s27RH8NK%2Bg3VSrcA5S0x5b2W5IkVjM%2BRo%2FLXwknXawOgZiCTcN0Dk0cx0gUO5rqnl%2B%2Fgb2bi4JHORwvd39lhVdrdP4an0UwQQhBPmf%2BDMqoMet7jZ%2BWYixOwvgB%2BHSfKJktwRY8Axi0ftjQaiSxyAAwIFk9HYtiEQcxRtqoAPfNx4h9JjluOa0SVzWyft7bjS%2BUaYMdQIxZ0P3WUr3Mzyk7AhueEBbX5uz5ij%2FHd7GHS4FXJAjyBxC%2F4%2Bo1XMlFs6SP4bRNA1EHo3mpCD1scGthZhEoikbGVgzmr8dz1JWGqIZcFA6Jv%2F2i2%2FxEgvzXmhj%2F8866Y5fBkjgASaDKB%2BgZp3BjaYDu8pkA2Lvtmzjpa0nIUs2mScDpuFQ1pmmmm64Hd8x1%2BSU3r2vTyySZb9zO8XJygK%2BsEjxPrc1IYOn33XKvri8HtAPDxZtrP6IF5OZA7GZcUxdileNYxSNIXhZe0AnCRwJoOYbpJkJdxh56CQhnJ6NVddL1oax%2FJN11GCeJSWpICCl6Lf1b%2BROcLMdJ4Tj%2FjPpI3lEYc%2FEA6fmWN2r7P2YRdmLrbGfmSk6XfDcAGLmaRqs2lZDwHroRKt9MIQ%2BhWGc1Tm%2F5IvB%2FFDgF8XuT%2BtkLO1T%2BxEebzO%2Ba5cu94KSyy%2B2%2BMNr8g8AGOqUBOejlKu7yOmsmxRGgJwZejD8bIy4hd3q4t4UyvndCoui%2BCQOAYp9YRzMKF1%2BI6IAXlrlY%2FbMUzTEAYltGmu7LGBQXn4Jt7PsYlGQfPgC%2BheXpXxuJXxTPVxHZkqbWMwCDSjsb%2B7PvCubG3BFUv4bJ20%2FDEi46X%2FTx6DnvpkLV7Xcffq6K7W34Q1lGQW3L0Bb71g3eiOL%2BhqlH8WRQmN7zExgVb5Hr&X-Amz-Signature=6410a07d0ade9180e900d2ff23732ca8927b2ac8e7ca2af016d4a52d6c1bde47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLEAKKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmhRZEgWOOCq5HZft7iSVLAPyCqo%2BC4kQAressW2Zi9wIgDo%2B5pFZsGuaiRfbwTHrY4xHdvDZlZAI614JM0rv4VRQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK4V8s27RH8NK%2Bg3VSrcA5S0x5b2W5IkVjM%2BRo%2FLXwknXawOgZiCTcN0Dk0cx0gUO5rqnl%2B%2Fgb2bi4JHORwvd39lhVdrdP4an0UwQQhBPmf%2BDMqoMet7jZ%2BWYixOwvgB%2BHSfKJktwRY8Axi0ftjQaiSxyAAwIFk9HYtiEQcxRtqoAPfNx4h9JjluOa0SVzWyft7bjS%2BUaYMdQIxZ0P3WUr3Mzyk7AhueEBbX5uz5ij%2FHd7GHS4FXJAjyBxC%2F4%2Bo1XMlFs6SP4bRNA1EHo3mpCD1scGthZhEoikbGVgzmr8dz1JWGqIZcFA6Jv%2F2i2%2FxEgvzXmhj%2F8866Y5fBkjgASaDKB%2BgZp3BjaYDu8pkA2Lvtmzjpa0nIUs2mScDpuFQ1pmmmm64Hd8x1%2BSU3r2vTyySZb9zO8XJygK%2BsEjxPrc1IYOn33XKvri8HtAPDxZtrP6IF5OZA7GZcUxdileNYxSNIXhZe0AnCRwJoOYbpJkJdxh56CQhnJ6NVddL1oax%2FJN11GCeJSWpICCl6Lf1b%2BROcLMdJ4Tj%2FjPpI3lEYc%2FEA6fmWN2r7P2YRdmLrbGfmSk6XfDcAGLmaRqs2lZDwHroRKt9MIQ%2BhWGc1Tm%2F5IvB%2FFDgF8XuT%2BtkLO1T%2BxEebzO%2Ba5cu94KSyy%2B2%2BMNr8g8AGOqUBOejlKu7yOmsmxRGgJwZejD8bIy4hd3q4t4UyvndCoui%2BCQOAYp9YRzMKF1%2BI6IAXlrlY%2FbMUzTEAYltGmu7LGBQXn4Jt7PsYlGQfPgC%2BheXpXxuJXxTPVxHZkqbWMwCDSjsb%2B7PvCubG3BFUv4bJ20%2FDEi46X%2FTx6DnvpkLV7Xcffq6K7W34Q1lGQW3L0Bb71g3eiOL%2BhqlH8WRQmN7zExgVb5Hr&X-Amz-Signature=592e8ee4988902329ab9e7f98c7e0f6d4a93c38dcc02d2257bfac2f6cf55f8f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
