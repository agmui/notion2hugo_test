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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=4da481d6ac470636b761508f91b63436a8a0905f510cb8a14a3bbf11b9185aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=bbc19627e8206b559a8f1e28fb3fbc3323ec2fb0dfb6f055490c9160bd4a3efe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=72ba09fea7f85296ecdef0ddfd0e878c45c0205f2af6e46bacf38b3dafbe38b0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=9ae6c7574cdc4b06e16022ece72415ba375bc1e773b586814b6dcda320e6c451&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=6022bf36fdfc2c1936f24cfdf7cf5c3034563b859b7b0382566484b018391f71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=489936c1df7336d813f0030f7c3e9180c2e9f08f6aa866b7b84be624227252e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=c9e2cccd291461ed0cecafff9d618093e6ace96fdbad7795b283437e5f450e84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=92b36f3781715ee83721149b1e2bbaf743e97e49d4ca27d8c9ab0b209509fd69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
