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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX64YAT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDd%2FS6NV6Kaumo8kCZWnBjsVH%2B7dDaAZULOK%2FnzShzLcwIhAPsvKLQst68K7LbJSm9L8ThKJOu8fWFiNjavArCW%2FNQ3KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQWpQTuu0pM0HULsEq3ANxIcfqyIyj70Y8pOI7HHAPU1%2B%2FFi3vUEFhjm7aV3JEXeDaBORIzgUBcxD1QVXUUO7JZWSCCf97DlPv4e4V7lg4%2FRDgUiUBTCLbgw2eryT98ZHxVIu%2BL37xtVIRlAp%2FTeYpqiVoPeZNg7fTbDIwpPwWxuZKi%2F15HXycyJF%2FHM7HjfeapXJZAVsnVWTkWuM7C66kP3W8ODVkjzF9RQ1F6kFFZ6KU5HFUorfMrSj%2FQcqiv6TboGiEdgQ1q3CYZfKPdcHgTIIYpKLp8AVJbCvBoqlNa%2Bob36TD%2B%2FZdTfc%2BS3e1I3t9JxgjIYQ0eYshlXwMS8C31J9EjT%2FXvsUouriEkExQP1OTXU4wqcb%2BX1yAJOI0yZCaR279PTzA88WUSrH0ldmOfF%2F7kHsH%2FycowU%2BTh4xrPBjFtazBPtzFXaGVg2dQAwSRoHRWqJF9MGGvhGoUyjlN%2BfczbRDlWlaDsJDJ2Rn9uxJLktaebZs0wccp0BR5E91YMJkWklW9D9%2B9K2aNR%2BBVKW4w%2BVlwtD1Z6bzDK2BNc6m36EqZcpqLKbiexpLrdaBPC%2BTTpNEqb0M%2BSdqajE6EEwieZURP%2B0nahCWTmhMcmeqJx7i%2BSom5Xu7GVxG%2Fn1G2%2FFVIwkrD3uOuQzC625XABjqkAYCm2XkqXJITcfNz%2BK4DR%2B170zKEUe7kRH3KQGXHJdLTXhwYm1fHoEawKHO4Y%2B5cJj4l8FCkH5gnU21PGGVFvgz1zfOAE597busUtE1IaWzfmZ9l3RHWIt%2BTyizZZov%2BDwzn9GmlT23TlVmzoKAGtoM20WtPjTdZW9l%2FCFd6REdKFJVKfLG32rxFIgAJHivfwBcpTHqFv4XEO6rlI0GAlIsKcn0T&X-Amz-Signature=84b1709e5520da4a7bb3c408e7807a87472363a921c4d853ee49c499365ab5bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX64YAT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDd%2FS6NV6Kaumo8kCZWnBjsVH%2B7dDaAZULOK%2FnzShzLcwIhAPsvKLQst68K7LbJSm9L8ThKJOu8fWFiNjavArCW%2FNQ3KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQWpQTuu0pM0HULsEq3ANxIcfqyIyj70Y8pOI7HHAPU1%2B%2FFi3vUEFhjm7aV3JEXeDaBORIzgUBcxD1QVXUUO7JZWSCCf97DlPv4e4V7lg4%2FRDgUiUBTCLbgw2eryT98ZHxVIu%2BL37xtVIRlAp%2FTeYpqiVoPeZNg7fTbDIwpPwWxuZKi%2F15HXycyJF%2FHM7HjfeapXJZAVsnVWTkWuM7C66kP3W8ODVkjzF9RQ1F6kFFZ6KU5HFUorfMrSj%2FQcqiv6TboGiEdgQ1q3CYZfKPdcHgTIIYpKLp8AVJbCvBoqlNa%2Bob36TD%2B%2FZdTfc%2BS3e1I3t9JxgjIYQ0eYshlXwMS8C31J9EjT%2FXvsUouriEkExQP1OTXU4wqcb%2BX1yAJOI0yZCaR279PTzA88WUSrH0ldmOfF%2F7kHsH%2FycowU%2BTh4xrPBjFtazBPtzFXaGVg2dQAwSRoHRWqJF9MGGvhGoUyjlN%2BfczbRDlWlaDsJDJ2Rn9uxJLktaebZs0wccp0BR5E91YMJkWklW9D9%2B9K2aNR%2BBVKW4w%2BVlwtD1Z6bzDK2BNc6m36EqZcpqLKbiexpLrdaBPC%2BTTpNEqb0M%2BSdqajE6EEwieZURP%2B0nahCWTmhMcmeqJx7i%2BSom5Xu7GVxG%2Fn1G2%2FFVIwkrD3uOuQzC625XABjqkAYCm2XkqXJITcfNz%2BK4DR%2B170zKEUe7kRH3KQGXHJdLTXhwYm1fHoEawKHO4Y%2B5cJj4l8FCkH5gnU21PGGVFvgz1zfOAE597busUtE1IaWzfmZ9l3RHWIt%2BTyizZZov%2BDwzn9GmlT23TlVmzoKAGtoM20WtPjTdZW9l%2FCFd6REdKFJVKfLG32rxFIgAJHivfwBcpTHqFv4XEO6rlI0GAlIsKcn0T&X-Amz-Signature=dc943d4b2502ae4bbb2275f493f63ff4d39bb5764da6ac349d6ecb7451352fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX64YAT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDd%2FS6NV6Kaumo8kCZWnBjsVH%2B7dDaAZULOK%2FnzShzLcwIhAPsvKLQst68K7LbJSm9L8ThKJOu8fWFiNjavArCW%2FNQ3KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQWpQTuu0pM0HULsEq3ANxIcfqyIyj70Y8pOI7HHAPU1%2B%2FFi3vUEFhjm7aV3JEXeDaBORIzgUBcxD1QVXUUO7JZWSCCf97DlPv4e4V7lg4%2FRDgUiUBTCLbgw2eryT98ZHxVIu%2BL37xtVIRlAp%2FTeYpqiVoPeZNg7fTbDIwpPwWxuZKi%2F15HXycyJF%2FHM7HjfeapXJZAVsnVWTkWuM7C66kP3W8ODVkjzF9RQ1F6kFFZ6KU5HFUorfMrSj%2FQcqiv6TboGiEdgQ1q3CYZfKPdcHgTIIYpKLp8AVJbCvBoqlNa%2Bob36TD%2B%2FZdTfc%2BS3e1I3t9JxgjIYQ0eYshlXwMS8C31J9EjT%2FXvsUouriEkExQP1OTXU4wqcb%2BX1yAJOI0yZCaR279PTzA88WUSrH0ldmOfF%2F7kHsH%2FycowU%2BTh4xrPBjFtazBPtzFXaGVg2dQAwSRoHRWqJF9MGGvhGoUyjlN%2BfczbRDlWlaDsJDJ2Rn9uxJLktaebZs0wccp0BR5E91YMJkWklW9D9%2B9K2aNR%2BBVKW4w%2BVlwtD1Z6bzDK2BNc6m36EqZcpqLKbiexpLrdaBPC%2BTTpNEqb0M%2BSdqajE6EEwieZURP%2B0nahCWTmhMcmeqJx7i%2BSom5Xu7GVxG%2Fn1G2%2FFVIwkrD3uOuQzC625XABjqkAYCm2XkqXJITcfNz%2BK4DR%2B170zKEUe7kRH3KQGXHJdLTXhwYm1fHoEawKHO4Y%2B5cJj4l8FCkH5gnU21PGGVFvgz1zfOAE597busUtE1IaWzfmZ9l3RHWIt%2BTyizZZov%2BDwzn9GmlT23TlVmzoKAGtoM20WtPjTdZW9l%2FCFd6REdKFJVKfLG32rxFIgAJHivfwBcpTHqFv4XEO6rlI0GAlIsKcn0T&X-Amz-Signature=2bc0cc9fbf7cfc181f34f45b1f7e28f4476f0dd5837923e8334fa5651ed67eee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX64YAT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDd%2FS6NV6Kaumo8kCZWnBjsVH%2B7dDaAZULOK%2FnzShzLcwIhAPsvKLQst68K7LbJSm9L8ThKJOu8fWFiNjavArCW%2FNQ3KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQWpQTuu0pM0HULsEq3ANxIcfqyIyj70Y8pOI7HHAPU1%2B%2FFi3vUEFhjm7aV3JEXeDaBORIzgUBcxD1QVXUUO7JZWSCCf97DlPv4e4V7lg4%2FRDgUiUBTCLbgw2eryT98ZHxVIu%2BL37xtVIRlAp%2FTeYpqiVoPeZNg7fTbDIwpPwWxuZKi%2F15HXycyJF%2FHM7HjfeapXJZAVsnVWTkWuM7C66kP3W8ODVkjzF9RQ1F6kFFZ6KU5HFUorfMrSj%2FQcqiv6TboGiEdgQ1q3CYZfKPdcHgTIIYpKLp8AVJbCvBoqlNa%2Bob36TD%2B%2FZdTfc%2BS3e1I3t9JxgjIYQ0eYshlXwMS8C31J9EjT%2FXvsUouriEkExQP1OTXU4wqcb%2BX1yAJOI0yZCaR279PTzA88WUSrH0ldmOfF%2F7kHsH%2FycowU%2BTh4xrPBjFtazBPtzFXaGVg2dQAwSRoHRWqJF9MGGvhGoUyjlN%2BfczbRDlWlaDsJDJ2Rn9uxJLktaebZs0wccp0BR5E91YMJkWklW9D9%2B9K2aNR%2BBVKW4w%2BVlwtD1Z6bzDK2BNc6m36EqZcpqLKbiexpLrdaBPC%2BTTpNEqb0M%2BSdqajE6EEwieZURP%2B0nahCWTmhMcmeqJx7i%2BSom5Xu7GVxG%2Fn1G2%2FFVIwkrD3uOuQzC625XABjqkAYCm2XkqXJITcfNz%2BK4DR%2B170zKEUe7kRH3KQGXHJdLTXhwYm1fHoEawKHO4Y%2B5cJj4l8FCkH5gnU21PGGVFvgz1zfOAE597busUtE1IaWzfmZ9l3RHWIt%2BTyizZZov%2BDwzn9GmlT23TlVmzoKAGtoM20WtPjTdZW9l%2FCFd6REdKFJVKfLG32rxFIgAJHivfwBcpTHqFv4XEO6rlI0GAlIsKcn0T&X-Amz-Signature=57a193248329ebf0fa6bd7a26e4dce1ea30b931bff735409c6293b4bdf748ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX64YAT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDd%2FS6NV6Kaumo8kCZWnBjsVH%2B7dDaAZULOK%2FnzShzLcwIhAPsvKLQst68K7LbJSm9L8ThKJOu8fWFiNjavArCW%2FNQ3KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQWpQTuu0pM0HULsEq3ANxIcfqyIyj70Y8pOI7HHAPU1%2B%2FFi3vUEFhjm7aV3JEXeDaBORIzgUBcxD1QVXUUO7JZWSCCf97DlPv4e4V7lg4%2FRDgUiUBTCLbgw2eryT98ZHxVIu%2BL37xtVIRlAp%2FTeYpqiVoPeZNg7fTbDIwpPwWxuZKi%2F15HXycyJF%2FHM7HjfeapXJZAVsnVWTkWuM7C66kP3W8ODVkjzF9RQ1F6kFFZ6KU5HFUorfMrSj%2FQcqiv6TboGiEdgQ1q3CYZfKPdcHgTIIYpKLp8AVJbCvBoqlNa%2Bob36TD%2B%2FZdTfc%2BS3e1I3t9JxgjIYQ0eYshlXwMS8C31J9EjT%2FXvsUouriEkExQP1OTXU4wqcb%2BX1yAJOI0yZCaR279PTzA88WUSrH0ldmOfF%2F7kHsH%2FycowU%2BTh4xrPBjFtazBPtzFXaGVg2dQAwSRoHRWqJF9MGGvhGoUyjlN%2BfczbRDlWlaDsJDJ2Rn9uxJLktaebZs0wccp0BR5E91YMJkWklW9D9%2B9K2aNR%2BBVKW4w%2BVlwtD1Z6bzDK2BNc6m36EqZcpqLKbiexpLrdaBPC%2BTTpNEqb0M%2BSdqajE6EEwieZURP%2B0nahCWTmhMcmeqJx7i%2BSom5Xu7GVxG%2Fn1G2%2FFVIwkrD3uOuQzC625XABjqkAYCm2XkqXJITcfNz%2BK4DR%2B170zKEUe7kRH3KQGXHJdLTXhwYm1fHoEawKHO4Y%2B5cJj4l8FCkH5gnU21PGGVFvgz1zfOAE597busUtE1IaWzfmZ9l3RHWIt%2BTyizZZov%2BDwzn9GmlT23TlVmzoKAGtoM20WtPjTdZW9l%2FCFd6REdKFJVKfLG32rxFIgAJHivfwBcpTHqFv4XEO6rlI0GAlIsKcn0T&X-Amz-Signature=dc3144c367146fc58670e9eeab71f6651ec1bb5a34dcc8a90769ec8f6277be03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX64YAT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDd%2FS6NV6Kaumo8kCZWnBjsVH%2B7dDaAZULOK%2FnzShzLcwIhAPsvKLQst68K7LbJSm9L8ThKJOu8fWFiNjavArCW%2FNQ3KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQWpQTuu0pM0HULsEq3ANxIcfqyIyj70Y8pOI7HHAPU1%2B%2FFi3vUEFhjm7aV3JEXeDaBORIzgUBcxD1QVXUUO7JZWSCCf97DlPv4e4V7lg4%2FRDgUiUBTCLbgw2eryT98ZHxVIu%2BL37xtVIRlAp%2FTeYpqiVoPeZNg7fTbDIwpPwWxuZKi%2F15HXycyJF%2FHM7HjfeapXJZAVsnVWTkWuM7C66kP3W8ODVkjzF9RQ1F6kFFZ6KU5HFUorfMrSj%2FQcqiv6TboGiEdgQ1q3CYZfKPdcHgTIIYpKLp8AVJbCvBoqlNa%2Bob36TD%2B%2FZdTfc%2BS3e1I3t9JxgjIYQ0eYshlXwMS8C31J9EjT%2FXvsUouriEkExQP1OTXU4wqcb%2BX1yAJOI0yZCaR279PTzA88WUSrH0ldmOfF%2F7kHsH%2FycowU%2BTh4xrPBjFtazBPtzFXaGVg2dQAwSRoHRWqJF9MGGvhGoUyjlN%2BfczbRDlWlaDsJDJ2Rn9uxJLktaebZs0wccp0BR5E91YMJkWklW9D9%2B9K2aNR%2BBVKW4w%2BVlwtD1Z6bzDK2BNc6m36EqZcpqLKbiexpLrdaBPC%2BTTpNEqb0M%2BSdqajE6EEwieZURP%2B0nahCWTmhMcmeqJx7i%2BSom5Xu7GVxG%2Fn1G2%2FFVIwkrD3uOuQzC625XABjqkAYCm2XkqXJITcfNz%2BK4DR%2B170zKEUe7kRH3KQGXHJdLTXhwYm1fHoEawKHO4Y%2B5cJj4l8FCkH5gnU21PGGVFvgz1zfOAE597busUtE1IaWzfmZ9l3RHWIt%2BTyizZZov%2BDwzn9GmlT23TlVmzoKAGtoM20WtPjTdZW9l%2FCFd6REdKFJVKfLG32rxFIgAJHivfwBcpTHqFv4XEO6rlI0GAlIsKcn0T&X-Amz-Signature=668d7dfdd666bf8c7295105b4f8020b9074dcae74c6f1f401b8ac32b8818e481&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX64YAT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDd%2FS6NV6Kaumo8kCZWnBjsVH%2B7dDaAZULOK%2FnzShzLcwIhAPsvKLQst68K7LbJSm9L8ThKJOu8fWFiNjavArCW%2FNQ3KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQWpQTuu0pM0HULsEq3ANxIcfqyIyj70Y8pOI7HHAPU1%2B%2FFi3vUEFhjm7aV3JEXeDaBORIzgUBcxD1QVXUUO7JZWSCCf97DlPv4e4V7lg4%2FRDgUiUBTCLbgw2eryT98ZHxVIu%2BL37xtVIRlAp%2FTeYpqiVoPeZNg7fTbDIwpPwWxuZKi%2F15HXycyJF%2FHM7HjfeapXJZAVsnVWTkWuM7C66kP3W8ODVkjzF9RQ1F6kFFZ6KU5HFUorfMrSj%2FQcqiv6TboGiEdgQ1q3CYZfKPdcHgTIIYpKLp8AVJbCvBoqlNa%2Bob36TD%2B%2FZdTfc%2BS3e1I3t9JxgjIYQ0eYshlXwMS8C31J9EjT%2FXvsUouriEkExQP1OTXU4wqcb%2BX1yAJOI0yZCaR279PTzA88WUSrH0ldmOfF%2F7kHsH%2FycowU%2BTh4xrPBjFtazBPtzFXaGVg2dQAwSRoHRWqJF9MGGvhGoUyjlN%2BfczbRDlWlaDsJDJ2Rn9uxJLktaebZs0wccp0BR5E91YMJkWklW9D9%2B9K2aNR%2BBVKW4w%2BVlwtD1Z6bzDK2BNc6m36EqZcpqLKbiexpLrdaBPC%2BTTpNEqb0M%2BSdqajE6EEwieZURP%2B0nahCWTmhMcmeqJx7i%2BSom5Xu7GVxG%2Fn1G2%2FFVIwkrD3uOuQzC625XABjqkAYCm2XkqXJITcfNz%2BK4DR%2B170zKEUe7kRH3KQGXHJdLTXhwYm1fHoEawKHO4Y%2B5cJj4l8FCkH5gnU21PGGVFvgz1zfOAE597busUtE1IaWzfmZ9l3RHWIt%2BTyizZZov%2BDwzn9GmlT23TlVmzoKAGtoM20WtPjTdZW9l%2FCFd6REdKFJVKfLG32rxFIgAJHivfwBcpTHqFv4XEO6rlI0GAlIsKcn0T&X-Amz-Signature=11b1bc99547c779c25a7b61fb473ed1f84fb5cf57ce626e72f2f4973ff2d8893&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX64YAT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDd%2FS6NV6Kaumo8kCZWnBjsVH%2B7dDaAZULOK%2FnzShzLcwIhAPsvKLQst68K7LbJSm9L8ThKJOu8fWFiNjavArCW%2FNQ3KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQWpQTuu0pM0HULsEq3ANxIcfqyIyj70Y8pOI7HHAPU1%2B%2FFi3vUEFhjm7aV3JEXeDaBORIzgUBcxD1QVXUUO7JZWSCCf97DlPv4e4V7lg4%2FRDgUiUBTCLbgw2eryT98ZHxVIu%2BL37xtVIRlAp%2FTeYpqiVoPeZNg7fTbDIwpPwWxuZKi%2F15HXycyJF%2FHM7HjfeapXJZAVsnVWTkWuM7C66kP3W8ODVkjzF9RQ1F6kFFZ6KU5HFUorfMrSj%2FQcqiv6TboGiEdgQ1q3CYZfKPdcHgTIIYpKLp8AVJbCvBoqlNa%2Bob36TD%2B%2FZdTfc%2BS3e1I3t9JxgjIYQ0eYshlXwMS8C31J9EjT%2FXvsUouriEkExQP1OTXU4wqcb%2BX1yAJOI0yZCaR279PTzA88WUSrH0ldmOfF%2F7kHsH%2FycowU%2BTh4xrPBjFtazBPtzFXaGVg2dQAwSRoHRWqJF9MGGvhGoUyjlN%2BfczbRDlWlaDsJDJ2Rn9uxJLktaebZs0wccp0BR5E91YMJkWklW9D9%2B9K2aNR%2BBVKW4w%2BVlwtD1Z6bzDK2BNc6m36EqZcpqLKbiexpLrdaBPC%2BTTpNEqb0M%2BSdqajE6EEwieZURP%2B0nahCWTmhMcmeqJx7i%2BSom5Xu7GVxG%2Fn1G2%2FFVIwkrD3uOuQzC625XABjqkAYCm2XkqXJITcfNz%2BK4DR%2B170zKEUe7kRH3KQGXHJdLTXhwYm1fHoEawKHO4Y%2B5cJj4l8FCkH5gnU21PGGVFvgz1zfOAE597busUtE1IaWzfmZ9l3RHWIt%2BTyizZZov%2BDwzn9GmlT23TlVmzoKAGtoM20WtPjTdZW9l%2FCFd6REdKFJVKfLG32rxFIgAJHivfwBcpTHqFv4XEO6rlI0GAlIsKcn0T&X-Amz-Signature=ba02a9681720244529a97e5d59cfdb957b9f1676f83c7a8bfd4350c8d339fa34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
