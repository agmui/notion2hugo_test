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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGNPQQ5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEdvE9ukq0dPqqUKhhkqthCZlfhV52bUaO6XtbPDEB0RAiAGHCVfO9DbmEyO0Jc6L6imjG3PDgPu7ghD6%2FKcEfofqSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMSw3HbsjOnSqf7oQMKtwDX2czUP2gymDqVVWB9oXB%2FjKsP%2ByMqJtIVo%2B3W82NtxMlJJ%2BqKJ5qXzlf6hrkLA5GxwpN%2B4lfbS%2Fmev%2Bt9h9gQZUxYM6NMjveYvINZ2lC9qtGMKDRiW5uUlXTbTIRD6FSc%2B55Hf2kRs46v8SIz79UZ9HenXLUraWx7bWnHoaxRNrRbtVY8B%2B2%2BXEUJZaL7oBEz8qJHnphSBRhjflhUz2QCSWdyz9zxRrhSGanmbXfUAS4%2BOHbeH7fvg%2FTIWfgG0KdHLmKmOMLULvCjwHuZTBqkb9FUzvPmdpVvGvc75M8He1f75ytM3ElsDBKP5nuttsJnO%2BPwNxpcP9LPRu60p%2ByCWlVsO9Xuwu2j306Jf1BrDgRZnkE8hh2Qnftl3p3patr8LFqtEdJixIve0AUYn0BygGoot0FSBfCO2m8df%2FEbYSlLagr8Z4vLy4rywf8NPXhdcEV7Hg0mLnoje0EesUlpOr%2FhVakhL9w731ge0qst2gIyu%2FRkyb6AtGya5m1DnIn5EhWlQkAeKY7uBXgALzZEknF9bz6sQs%2FvbpXPxmefJjE3geiotEmQGV6p9R0LvKVhOO6rqqheoV80iiu1sGqtrJ1dCzbWqut1LwqqMX5VMRd6riPecwixjLW7UAw5u%2FvwgY6pgE9OqnDl5bZsRdsG1n0%2B81lFpoa%2Boeh%2Bi0K17fiJyV%2BZXUmcEy4woWJrOjj%2FN74YiuSd78NBMBWfK1Tjtvgzvjaosh8odAT%2BLmR1OfwMv5d3%2FX6shhu%2F6UA9%2FdHKQErHNaLwdqp1rJKyB1O9F4bKO38SkeHHvkHUG4jY0RRotlR%2FksPyB2T6Zro2XzMGbWXWKVBG7UQ2tY187u73aBS9ieEyZh1Qw4y&X-Amz-Signature=0f53f5338cf08b3e4b8e99c0896c511f2cdaaae85fc76bfec08c70860e9fdf9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGNPQQ5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEdvE9ukq0dPqqUKhhkqthCZlfhV52bUaO6XtbPDEB0RAiAGHCVfO9DbmEyO0Jc6L6imjG3PDgPu7ghD6%2FKcEfofqSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMSw3HbsjOnSqf7oQMKtwDX2czUP2gymDqVVWB9oXB%2FjKsP%2ByMqJtIVo%2B3W82NtxMlJJ%2BqKJ5qXzlf6hrkLA5GxwpN%2B4lfbS%2Fmev%2Bt9h9gQZUxYM6NMjveYvINZ2lC9qtGMKDRiW5uUlXTbTIRD6FSc%2B55Hf2kRs46v8SIz79UZ9HenXLUraWx7bWnHoaxRNrRbtVY8B%2B2%2BXEUJZaL7oBEz8qJHnphSBRhjflhUz2QCSWdyz9zxRrhSGanmbXfUAS4%2BOHbeH7fvg%2FTIWfgG0KdHLmKmOMLULvCjwHuZTBqkb9FUzvPmdpVvGvc75M8He1f75ytM3ElsDBKP5nuttsJnO%2BPwNxpcP9LPRu60p%2ByCWlVsO9Xuwu2j306Jf1BrDgRZnkE8hh2Qnftl3p3patr8LFqtEdJixIve0AUYn0BygGoot0FSBfCO2m8df%2FEbYSlLagr8Z4vLy4rywf8NPXhdcEV7Hg0mLnoje0EesUlpOr%2FhVakhL9w731ge0qst2gIyu%2FRkyb6AtGya5m1DnIn5EhWlQkAeKY7uBXgALzZEknF9bz6sQs%2FvbpXPxmefJjE3geiotEmQGV6p9R0LvKVhOO6rqqheoV80iiu1sGqtrJ1dCzbWqut1LwqqMX5VMRd6riPecwixjLW7UAw5u%2FvwgY6pgE9OqnDl5bZsRdsG1n0%2B81lFpoa%2Boeh%2Bi0K17fiJyV%2BZXUmcEy4woWJrOjj%2FN74YiuSd78NBMBWfK1Tjtvgzvjaosh8odAT%2BLmR1OfwMv5d3%2FX6shhu%2F6UA9%2FdHKQErHNaLwdqp1rJKyB1O9F4bKO38SkeHHvkHUG4jY0RRotlR%2FksPyB2T6Zro2XzMGbWXWKVBG7UQ2tY187u73aBS9ieEyZh1Qw4y&X-Amz-Signature=5e1bb6562d6fb71536ce68009b768b6f0f6b16de10a64e5533c95fcfa68f79a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGNPQQ5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEdvE9ukq0dPqqUKhhkqthCZlfhV52bUaO6XtbPDEB0RAiAGHCVfO9DbmEyO0Jc6L6imjG3PDgPu7ghD6%2FKcEfofqSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMSw3HbsjOnSqf7oQMKtwDX2czUP2gymDqVVWB9oXB%2FjKsP%2ByMqJtIVo%2B3W82NtxMlJJ%2BqKJ5qXzlf6hrkLA5GxwpN%2B4lfbS%2Fmev%2Bt9h9gQZUxYM6NMjveYvINZ2lC9qtGMKDRiW5uUlXTbTIRD6FSc%2B55Hf2kRs46v8SIz79UZ9HenXLUraWx7bWnHoaxRNrRbtVY8B%2B2%2BXEUJZaL7oBEz8qJHnphSBRhjflhUz2QCSWdyz9zxRrhSGanmbXfUAS4%2BOHbeH7fvg%2FTIWfgG0KdHLmKmOMLULvCjwHuZTBqkb9FUzvPmdpVvGvc75M8He1f75ytM3ElsDBKP5nuttsJnO%2BPwNxpcP9LPRu60p%2ByCWlVsO9Xuwu2j306Jf1BrDgRZnkE8hh2Qnftl3p3patr8LFqtEdJixIve0AUYn0BygGoot0FSBfCO2m8df%2FEbYSlLagr8Z4vLy4rywf8NPXhdcEV7Hg0mLnoje0EesUlpOr%2FhVakhL9w731ge0qst2gIyu%2FRkyb6AtGya5m1DnIn5EhWlQkAeKY7uBXgALzZEknF9bz6sQs%2FvbpXPxmefJjE3geiotEmQGV6p9R0LvKVhOO6rqqheoV80iiu1sGqtrJ1dCzbWqut1LwqqMX5VMRd6riPecwixjLW7UAw5u%2FvwgY6pgE9OqnDl5bZsRdsG1n0%2B81lFpoa%2Boeh%2Bi0K17fiJyV%2BZXUmcEy4woWJrOjj%2FN74YiuSd78NBMBWfK1Tjtvgzvjaosh8odAT%2BLmR1OfwMv5d3%2FX6shhu%2F6UA9%2FdHKQErHNaLwdqp1rJKyB1O9F4bKO38SkeHHvkHUG4jY0RRotlR%2FksPyB2T6Zro2XzMGbWXWKVBG7UQ2tY187u73aBS9ieEyZh1Qw4y&X-Amz-Signature=6e5a85553002b11dc0728b810dae02a9c9afa6a78cd3c14093178e8737cecfb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGNPQQ5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEdvE9ukq0dPqqUKhhkqthCZlfhV52bUaO6XtbPDEB0RAiAGHCVfO9DbmEyO0Jc6L6imjG3PDgPu7ghD6%2FKcEfofqSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMSw3HbsjOnSqf7oQMKtwDX2czUP2gymDqVVWB9oXB%2FjKsP%2ByMqJtIVo%2B3W82NtxMlJJ%2BqKJ5qXzlf6hrkLA5GxwpN%2B4lfbS%2Fmev%2Bt9h9gQZUxYM6NMjveYvINZ2lC9qtGMKDRiW5uUlXTbTIRD6FSc%2B55Hf2kRs46v8SIz79UZ9HenXLUraWx7bWnHoaxRNrRbtVY8B%2B2%2BXEUJZaL7oBEz8qJHnphSBRhjflhUz2QCSWdyz9zxRrhSGanmbXfUAS4%2BOHbeH7fvg%2FTIWfgG0KdHLmKmOMLULvCjwHuZTBqkb9FUzvPmdpVvGvc75M8He1f75ytM3ElsDBKP5nuttsJnO%2BPwNxpcP9LPRu60p%2ByCWlVsO9Xuwu2j306Jf1BrDgRZnkE8hh2Qnftl3p3patr8LFqtEdJixIve0AUYn0BygGoot0FSBfCO2m8df%2FEbYSlLagr8Z4vLy4rywf8NPXhdcEV7Hg0mLnoje0EesUlpOr%2FhVakhL9w731ge0qst2gIyu%2FRkyb6AtGya5m1DnIn5EhWlQkAeKY7uBXgALzZEknF9bz6sQs%2FvbpXPxmefJjE3geiotEmQGV6p9R0LvKVhOO6rqqheoV80iiu1sGqtrJ1dCzbWqut1LwqqMX5VMRd6riPecwixjLW7UAw5u%2FvwgY6pgE9OqnDl5bZsRdsG1n0%2B81lFpoa%2Boeh%2Bi0K17fiJyV%2BZXUmcEy4woWJrOjj%2FN74YiuSd78NBMBWfK1Tjtvgzvjaosh8odAT%2BLmR1OfwMv5d3%2FX6shhu%2F6UA9%2FdHKQErHNaLwdqp1rJKyB1O9F4bKO38SkeHHvkHUG4jY0RRotlR%2FksPyB2T6Zro2XzMGbWXWKVBG7UQ2tY187u73aBS9ieEyZh1Qw4y&X-Amz-Signature=d0d527d729e10ec47ed501d425ddb96562a59dea2b05d6dfedc0635869524bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGNPQQ5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEdvE9ukq0dPqqUKhhkqthCZlfhV52bUaO6XtbPDEB0RAiAGHCVfO9DbmEyO0Jc6L6imjG3PDgPu7ghD6%2FKcEfofqSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMSw3HbsjOnSqf7oQMKtwDX2czUP2gymDqVVWB9oXB%2FjKsP%2ByMqJtIVo%2B3W82NtxMlJJ%2BqKJ5qXzlf6hrkLA5GxwpN%2B4lfbS%2Fmev%2Bt9h9gQZUxYM6NMjveYvINZ2lC9qtGMKDRiW5uUlXTbTIRD6FSc%2B55Hf2kRs46v8SIz79UZ9HenXLUraWx7bWnHoaxRNrRbtVY8B%2B2%2BXEUJZaL7oBEz8qJHnphSBRhjflhUz2QCSWdyz9zxRrhSGanmbXfUAS4%2BOHbeH7fvg%2FTIWfgG0KdHLmKmOMLULvCjwHuZTBqkb9FUzvPmdpVvGvc75M8He1f75ytM3ElsDBKP5nuttsJnO%2BPwNxpcP9LPRu60p%2ByCWlVsO9Xuwu2j306Jf1BrDgRZnkE8hh2Qnftl3p3patr8LFqtEdJixIve0AUYn0BygGoot0FSBfCO2m8df%2FEbYSlLagr8Z4vLy4rywf8NPXhdcEV7Hg0mLnoje0EesUlpOr%2FhVakhL9w731ge0qst2gIyu%2FRkyb6AtGya5m1DnIn5EhWlQkAeKY7uBXgALzZEknF9bz6sQs%2FvbpXPxmefJjE3geiotEmQGV6p9R0LvKVhOO6rqqheoV80iiu1sGqtrJ1dCzbWqut1LwqqMX5VMRd6riPecwixjLW7UAw5u%2FvwgY6pgE9OqnDl5bZsRdsG1n0%2B81lFpoa%2Boeh%2Bi0K17fiJyV%2BZXUmcEy4woWJrOjj%2FN74YiuSd78NBMBWfK1Tjtvgzvjaosh8odAT%2BLmR1OfwMv5d3%2FX6shhu%2F6UA9%2FdHKQErHNaLwdqp1rJKyB1O9F4bKO38SkeHHvkHUG4jY0RRotlR%2FksPyB2T6Zro2XzMGbWXWKVBG7UQ2tY187u73aBS9ieEyZh1Qw4y&X-Amz-Signature=9ddc9c23b6de388fc43df9aa8a4e8bd4aa28a206c01840975e56e647075ad068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGNPQQ5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEdvE9ukq0dPqqUKhhkqthCZlfhV52bUaO6XtbPDEB0RAiAGHCVfO9DbmEyO0Jc6L6imjG3PDgPu7ghD6%2FKcEfofqSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMSw3HbsjOnSqf7oQMKtwDX2czUP2gymDqVVWB9oXB%2FjKsP%2ByMqJtIVo%2B3W82NtxMlJJ%2BqKJ5qXzlf6hrkLA5GxwpN%2B4lfbS%2Fmev%2Bt9h9gQZUxYM6NMjveYvINZ2lC9qtGMKDRiW5uUlXTbTIRD6FSc%2B55Hf2kRs46v8SIz79UZ9HenXLUraWx7bWnHoaxRNrRbtVY8B%2B2%2BXEUJZaL7oBEz8qJHnphSBRhjflhUz2QCSWdyz9zxRrhSGanmbXfUAS4%2BOHbeH7fvg%2FTIWfgG0KdHLmKmOMLULvCjwHuZTBqkb9FUzvPmdpVvGvc75M8He1f75ytM3ElsDBKP5nuttsJnO%2BPwNxpcP9LPRu60p%2ByCWlVsO9Xuwu2j306Jf1BrDgRZnkE8hh2Qnftl3p3patr8LFqtEdJixIve0AUYn0BygGoot0FSBfCO2m8df%2FEbYSlLagr8Z4vLy4rywf8NPXhdcEV7Hg0mLnoje0EesUlpOr%2FhVakhL9w731ge0qst2gIyu%2FRkyb6AtGya5m1DnIn5EhWlQkAeKY7uBXgALzZEknF9bz6sQs%2FvbpXPxmefJjE3geiotEmQGV6p9R0LvKVhOO6rqqheoV80iiu1sGqtrJ1dCzbWqut1LwqqMX5VMRd6riPecwixjLW7UAw5u%2FvwgY6pgE9OqnDl5bZsRdsG1n0%2B81lFpoa%2Boeh%2Bi0K17fiJyV%2BZXUmcEy4woWJrOjj%2FN74YiuSd78NBMBWfK1Tjtvgzvjaosh8odAT%2BLmR1OfwMv5d3%2FX6shhu%2F6UA9%2FdHKQErHNaLwdqp1rJKyB1O9F4bKO38SkeHHvkHUG4jY0RRotlR%2FksPyB2T6Zro2XzMGbWXWKVBG7UQ2tY187u73aBS9ieEyZh1Qw4y&X-Amz-Signature=b1a632c8674d20d4a0ec31a3d16f9228a77ad628b4a6509aade2012a854afd87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGNPQQ5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEdvE9ukq0dPqqUKhhkqthCZlfhV52bUaO6XtbPDEB0RAiAGHCVfO9DbmEyO0Jc6L6imjG3PDgPu7ghD6%2FKcEfofqSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMSw3HbsjOnSqf7oQMKtwDX2czUP2gymDqVVWB9oXB%2FjKsP%2ByMqJtIVo%2B3W82NtxMlJJ%2BqKJ5qXzlf6hrkLA5GxwpN%2B4lfbS%2Fmev%2Bt9h9gQZUxYM6NMjveYvINZ2lC9qtGMKDRiW5uUlXTbTIRD6FSc%2B55Hf2kRs46v8SIz79UZ9HenXLUraWx7bWnHoaxRNrRbtVY8B%2B2%2BXEUJZaL7oBEz8qJHnphSBRhjflhUz2QCSWdyz9zxRrhSGanmbXfUAS4%2BOHbeH7fvg%2FTIWfgG0KdHLmKmOMLULvCjwHuZTBqkb9FUzvPmdpVvGvc75M8He1f75ytM3ElsDBKP5nuttsJnO%2BPwNxpcP9LPRu60p%2ByCWlVsO9Xuwu2j306Jf1BrDgRZnkE8hh2Qnftl3p3patr8LFqtEdJixIve0AUYn0BygGoot0FSBfCO2m8df%2FEbYSlLagr8Z4vLy4rywf8NPXhdcEV7Hg0mLnoje0EesUlpOr%2FhVakhL9w731ge0qst2gIyu%2FRkyb6AtGya5m1DnIn5EhWlQkAeKY7uBXgALzZEknF9bz6sQs%2FvbpXPxmefJjE3geiotEmQGV6p9R0LvKVhOO6rqqheoV80iiu1sGqtrJ1dCzbWqut1LwqqMX5VMRd6riPecwixjLW7UAw5u%2FvwgY6pgE9OqnDl5bZsRdsG1n0%2B81lFpoa%2Boeh%2Bi0K17fiJyV%2BZXUmcEy4woWJrOjj%2FN74YiuSd78NBMBWfK1Tjtvgzvjaosh8odAT%2BLmR1OfwMv5d3%2FX6shhu%2F6UA9%2FdHKQErHNaLwdqp1rJKyB1O9F4bKO38SkeHHvkHUG4jY0RRotlR%2FksPyB2T6Zro2XzMGbWXWKVBG7UQ2tY187u73aBS9ieEyZh1Qw4y&X-Amz-Signature=1b20a40adf7e7d6c98825a39a39094bf19a3132c20a401ab5e452eb964329319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGNPQQ5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEdvE9ukq0dPqqUKhhkqthCZlfhV52bUaO6XtbPDEB0RAiAGHCVfO9DbmEyO0Jc6L6imjG3PDgPu7ghD6%2FKcEfofqSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMSw3HbsjOnSqf7oQMKtwDX2czUP2gymDqVVWB9oXB%2FjKsP%2ByMqJtIVo%2B3W82NtxMlJJ%2BqKJ5qXzlf6hrkLA5GxwpN%2B4lfbS%2Fmev%2Bt9h9gQZUxYM6NMjveYvINZ2lC9qtGMKDRiW5uUlXTbTIRD6FSc%2B55Hf2kRs46v8SIz79UZ9HenXLUraWx7bWnHoaxRNrRbtVY8B%2B2%2BXEUJZaL7oBEz8qJHnphSBRhjflhUz2QCSWdyz9zxRrhSGanmbXfUAS4%2BOHbeH7fvg%2FTIWfgG0KdHLmKmOMLULvCjwHuZTBqkb9FUzvPmdpVvGvc75M8He1f75ytM3ElsDBKP5nuttsJnO%2BPwNxpcP9LPRu60p%2ByCWlVsO9Xuwu2j306Jf1BrDgRZnkE8hh2Qnftl3p3patr8LFqtEdJixIve0AUYn0BygGoot0FSBfCO2m8df%2FEbYSlLagr8Z4vLy4rywf8NPXhdcEV7Hg0mLnoje0EesUlpOr%2FhVakhL9w731ge0qst2gIyu%2FRkyb6AtGya5m1DnIn5EhWlQkAeKY7uBXgALzZEknF9bz6sQs%2FvbpXPxmefJjE3geiotEmQGV6p9R0LvKVhOO6rqqheoV80iiu1sGqtrJ1dCzbWqut1LwqqMX5VMRd6riPecwixjLW7UAw5u%2FvwgY6pgE9OqnDl5bZsRdsG1n0%2B81lFpoa%2Boeh%2Bi0K17fiJyV%2BZXUmcEy4woWJrOjj%2FN74YiuSd78NBMBWfK1Tjtvgzvjaosh8odAT%2BLmR1OfwMv5d3%2FX6shhu%2F6UA9%2FdHKQErHNaLwdqp1rJKyB1O9F4bKO38SkeHHvkHUG4jY0RRotlR%2FksPyB2T6Zro2XzMGbWXWKVBG7UQ2tY187u73aBS9ieEyZh1Qw4y&X-Amz-Signature=88e7d1bcdedf25a7607edb50ddf44f149c647bf6fc779cdfe2f5ab612dd342ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
