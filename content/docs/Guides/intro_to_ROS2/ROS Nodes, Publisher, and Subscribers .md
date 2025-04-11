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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINFUPUO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC9Qb5zsvz%2F48zvYfknCjEU4ILQpdw%2FbQnsgwjEDGHptAiBO1MSUrsscY5i0BuL8TsWXQ19ROCNyyswlMHdEsSCgiyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0hgMIWg7DmYFcbkKtwDyKqnNioc0SME3pMsx1Rwz7vv%2BBoGLn%2F%2B4ksG6z0sW6JaccSqWf0dqxiCBTI5B6e0XdaDAMG4Oy8USVqrwawTfIXaXOLbChF9%2BiLDWpYXA88Vx1Q%2BgHDvNa4ccL%2Fdq3pqhaUhj6MnIJvAvhSHAdJstVrv9zD%2FxWf%2FEhOVT7mUgGK8gNACFNtrSSdSb8221CMTBCrAclht0hTmeAh0uKQ9NFbkg7uheHblW9an1HbK0o2YRlApxQ1%2FV7%2Bd13rxlh8nOsS%2FqzCvVhc5cHbQrHCOLVaqbD3XCJz6krShJWzpd04l0y%2Fpbs5moRI8h%2B%2FoVhzOY%2FX4CqmIs%2BHko33q6VdnB2M2nSutB%2F5x4VcDClS5IaOQOw%2FKnq%2BwJDRAZBGxpi66EOMWckB%2FLn8sSs0aybrCDqLhTBZY34oXvLQm6lXbC7ycCDpi7%2FhhKa88vpezgzZMFxkv5Lu8ET3dr7VNH7wI8pQg84uAWKCfh3gqViNPfLqHl7tZEpGBy0JBGqkTyRyoRJzimAeh%2FYBvFb897P2nKKdp0xaNDHrrCUTBL9NxMO1RibVn12IS8W4vfVL8KbdUbLREorUZFgPE0QEhXca5sV9r9sBHD0CE0NjyC565uHgSc91P74%2BqAD9HywYw%2FrXkvwY6pgHgIMEDxZqSB0so22uDfpZn%2FiJpv8WhkdOto5pIixvb89yMEoWyZ7kj81i9MYj0%2FLfcciTg4BiDCIxJm1zVYl8F34O%2BoUrSAB8Sw4wb1O2z744Jz7%2BRihKJJmjy8%2FA3nqzg%2BQCpL0RpKFI7WEzURRwO40iSdpy7lFuQA17Cf6Y8JBdcullxOb4sGRqt24QqoWBp5PHPWvzrAsG5nOmxSnlY96%2FU5lMo&X-Amz-Signature=8f6f7ffe31cf8bbe04348b1c0e0d8b31ed326a4013d1fac70f33a7bbd409f2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINFUPUO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC9Qb5zsvz%2F48zvYfknCjEU4ILQpdw%2FbQnsgwjEDGHptAiBO1MSUrsscY5i0BuL8TsWXQ19ROCNyyswlMHdEsSCgiyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0hgMIWg7DmYFcbkKtwDyKqnNioc0SME3pMsx1Rwz7vv%2BBoGLn%2F%2B4ksG6z0sW6JaccSqWf0dqxiCBTI5B6e0XdaDAMG4Oy8USVqrwawTfIXaXOLbChF9%2BiLDWpYXA88Vx1Q%2BgHDvNa4ccL%2Fdq3pqhaUhj6MnIJvAvhSHAdJstVrv9zD%2FxWf%2FEhOVT7mUgGK8gNACFNtrSSdSb8221CMTBCrAclht0hTmeAh0uKQ9NFbkg7uheHblW9an1HbK0o2YRlApxQ1%2FV7%2Bd13rxlh8nOsS%2FqzCvVhc5cHbQrHCOLVaqbD3XCJz6krShJWzpd04l0y%2Fpbs5moRI8h%2B%2FoVhzOY%2FX4CqmIs%2BHko33q6VdnB2M2nSutB%2F5x4VcDClS5IaOQOw%2FKnq%2BwJDRAZBGxpi66EOMWckB%2FLn8sSs0aybrCDqLhTBZY34oXvLQm6lXbC7ycCDpi7%2FhhKa88vpezgzZMFxkv5Lu8ET3dr7VNH7wI8pQg84uAWKCfh3gqViNPfLqHl7tZEpGBy0JBGqkTyRyoRJzimAeh%2FYBvFb897P2nKKdp0xaNDHrrCUTBL9NxMO1RibVn12IS8W4vfVL8KbdUbLREorUZFgPE0QEhXca5sV9r9sBHD0CE0NjyC565uHgSc91P74%2BqAD9HywYw%2FrXkvwY6pgHgIMEDxZqSB0so22uDfpZn%2FiJpv8WhkdOto5pIixvb89yMEoWyZ7kj81i9MYj0%2FLfcciTg4BiDCIxJm1zVYl8F34O%2BoUrSAB8Sw4wb1O2z744Jz7%2BRihKJJmjy8%2FA3nqzg%2BQCpL0RpKFI7WEzURRwO40iSdpy7lFuQA17Cf6Y8JBdcullxOb4sGRqt24QqoWBp5PHPWvzrAsG5nOmxSnlY96%2FU5lMo&X-Amz-Signature=4b91a610e8f5bd0f9a79ebe4d9b97fc36878359823bb3733d2283ba11bad5cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINFUPUO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC9Qb5zsvz%2F48zvYfknCjEU4ILQpdw%2FbQnsgwjEDGHptAiBO1MSUrsscY5i0BuL8TsWXQ19ROCNyyswlMHdEsSCgiyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0hgMIWg7DmYFcbkKtwDyKqnNioc0SME3pMsx1Rwz7vv%2BBoGLn%2F%2B4ksG6z0sW6JaccSqWf0dqxiCBTI5B6e0XdaDAMG4Oy8USVqrwawTfIXaXOLbChF9%2BiLDWpYXA88Vx1Q%2BgHDvNa4ccL%2Fdq3pqhaUhj6MnIJvAvhSHAdJstVrv9zD%2FxWf%2FEhOVT7mUgGK8gNACFNtrSSdSb8221CMTBCrAclht0hTmeAh0uKQ9NFbkg7uheHblW9an1HbK0o2YRlApxQ1%2FV7%2Bd13rxlh8nOsS%2FqzCvVhc5cHbQrHCOLVaqbD3XCJz6krShJWzpd04l0y%2Fpbs5moRI8h%2B%2FoVhzOY%2FX4CqmIs%2BHko33q6VdnB2M2nSutB%2F5x4VcDClS5IaOQOw%2FKnq%2BwJDRAZBGxpi66EOMWckB%2FLn8sSs0aybrCDqLhTBZY34oXvLQm6lXbC7ycCDpi7%2FhhKa88vpezgzZMFxkv5Lu8ET3dr7VNH7wI8pQg84uAWKCfh3gqViNPfLqHl7tZEpGBy0JBGqkTyRyoRJzimAeh%2FYBvFb897P2nKKdp0xaNDHrrCUTBL9NxMO1RibVn12IS8W4vfVL8KbdUbLREorUZFgPE0QEhXca5sV9r9sBHD0CE0NjyC565uHgSc91P74%2BqAD9HywYw%2FrXkvwY6pgHgIMEDxZqSB0so22uDfpZn%2FiJpv8WhkdOto5pIixvb89yMEoWyZ7kj81i9MYj0%2FLfcciTg4BiDCIxJm1zVYl8F34O%2BoUrSAB8Sw4wb1O2z744Jz7%2BRihKJJmjy8%2FA3nqzg%2BQCpL0RpKFI7WEzURRwO40iSdpy7lFuQA17Cf6Y8JBdcullxOb4sGRqt24QqoWBp5PHPWvzrAsG5nOmxSnlY96%2FU5lMo&X-Amz-Signature=ed7a0493844b6bed804dde6149eea09141ba80fc24cd9f45081e8d4036b7a7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINFUPUO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC9Qb5zsvz%2F48zvYfknCjEU4ILQpdw%2FbQnsgwjEDGHptAiBO1MSUrsscY5i0BuL8TsWXQ19ROCNyyswlMHdEsSCgiyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0hgMIWg7DmYFcbkKtwDyKqnNioc0SME3pMsx1Rwz7vv%2BBoGLn%2F%2B4ksG6z0sW6JaccSqWf0dqxiCBTI5B6e0XdaDAMG4Oy8USVqrwawTfIXaXOLbChF9%2BiLDWpYXA88Vx1Q%2BgHDvNa4ccL%2Fdq3pqhaUhj6MnIJvAvhSHAdJstVrv9zD%2FxWf%2FEhOVT7mUgGK8gNACFNtrSSdSb8221CMTBCrAclht0hTmeAh0uKQ9NFbkg7uheHblW9an1HbK0o2YRlApxQ1%2FV7%2Bd13rxlh8nOsS%2FqzCvVhc5cHbQrHCOLVaqbD3XCJz6krShJWzpd04l0y%2Fpbs5moRI8h%2B%2FoVhzOY%2FX4CqmIs%2BHko33q6VdnB2M2nSutB%2F5x4VcDClS5IaOQOw%2FKnq%2BwJDRAZBGxpi66EOMWckB%2FLn8sSs0aybrCDqLhTBZY34oXvLQm6lXbC7ycCDpi7%2FhhKa88vpezgzZMFxkv5Lu8ET3dr7VNH7wI8pQg84uAWKCfh3gqViNPfLqHl7tZEpGBy0JBGqkTyRyoRJzimAeh%2FYBvFb897P2nKKdp0xaNDHrrCUTBL9NxMO1RibVn12IS8W4vfVL8KbdUbLREorUZFgPE0QEhXca5sV9r9sBHD0CE0NjyC565uHgSc91P74%2BqAD9HywYw%2FrXkvwY6pgHgIMEDxZqSB0so22uDfpZn%2FiJpv8WhkdOto5pIixvb89yMEoWyZ7kj81i9MYj0%2FLfcciTg4BiDCIxJm1zVYl8F34O%2BoUrSAB8Sw4wb1O2z744Jz7%2BRihKJJmjy8%2FA3nqzg%2BQCpL0RpKFI7WEzURRwO40iSdpy7lFuQA17Cf6Y8JBdcullxOb4sGRqt24QqoWBp5PHPWvzrAsG5nOmxSnlY96%2FU5lMo&X-Amz-Signature=6888156783294825f918a1303cf13a7c9312d7b02ee771e1e9730b0e56776489&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINFUPUO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC9Qb5zsvz%2F48zvYfknCjEU4ILQpdw%2FbQnsgwjEDGHptAiBO1MSUrsscY5i0BuL8TsWXQ19ROCNyyswlMHdEsSCgiyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0hgMIWg7DmYFcbkKtwDyKqnNioc0SME3pMsx1Rwz7vv%2BBoGLn%2F%2B4ksG6z0sW6JaccSqWf0dqxiCBTI5B6e0XdaDAMG4Oy8USVqrwawTfIXaXOLbChF9%2BiLDWpYXA88Vx1Q%2BgHDvNa4ccL%2Fdq3pqhaUhj6MnIJvAvhSHAdJstVrv9zD%2FxWf%2FEhOVT7mUgGK8gNACFNtrSSdSb8221CMTBCrAclht0hTmeAh0uKQ9NFbkg7uheHblW9an1HbK0o2YRlApxQ1%2FV7%2Bd13rxlh8nOsS%2FqzCvVhc5cHbQrHCOLVaqbD3XCJz6krShJWzpd04l0y%2Fpbs5moRI8h%2B%2FoVhzOY%2FX4CqmIs%2BHko33q6VdnB2M2nSutB%2F5x4VcDClS5IaOQOw%2FKnq%2BwJDRAZBGxpi66EOMWckB%2FLn8sSs0aybrCDqLhTBZY34oXvLQm6lXbC7ycCDpi7%2FhhKa88vpezgzZMFxkv5Lu8ET3dr7VNH7wI8pQg84uAWKCfh3gqViNPfLqHl7tZEpGBy0JBGqkTyRyoRJzimAeh%2FYBvFb897P2nKKdp0xaNDHrrCUTBL9NxMO1RibVn12IS8W4vfVL8KbdUbLREorUZFgPE0QEhXca5sV9r9sBHD0CE0NjyC565uHgSc91P74%2BqAD9HywYw%2FrXkvwY6pgHgIMEDxZqSB0so22uDfpZn%2FiJpv8WhkdOto5pIixvb89yMEoWyZ7kj81i9MYj0%2FLfcciTg4BiDCIxJm1zVYl8F34O%2BoUrSAB8Sw4wb1O2z744Jz7%2BRihKJJmjy8%2FA3nqzg%2BQCpL0RpKFI7WEzURRwO40iSdpy7lFuQA17Cf6Y8JBdcullxOb4sGRqt24QqoWBp5PHPWvzrAsG5nOmxSnlY96%2FU5lMo&X-Amz-Signature=ac0501780aa275d97022b7329e44694528bd95c883025434a38f7495f0b444c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINFUPUO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC9Qb5zsvz%2F48zvYfknCjEU4ILQpdw%2FbQnsgwjEDGHptAiBO1MSUrsscY5i0BuL8TsWXQ19ROCNyyswlMHdEsSCgiyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0hgMIWg7DmYFcbkKtwDyKqnNioc0SME3pMsx1Rwz7vv%2BBoGLn%2F%2B4ksG6z0sW6JaccSqWf0dqxiCBTI5B6e0XdaDAMG4Oy8USVqrwawTfIXaXOLbChF9%2BiLDWpYXA88Vx1Q%2BgHDvNa4ccL%2Fdq3pqhaUhj6MnIJvAvhSHAdJstVrv9zD%2FxWf%2FEhOVT7mUgGK8gNACFNtrSSdSb8221CMTBCrAclht0hTmeAh0uKQ9NFbkg7uheHblW9an1HbK0o2YRlApxQ1%2FV7%2Bd13rxlh8nOsS%2FqzCvVhc5cHbQrHCOLVaqbD3XCJz6krShJWzpd04l0y%2Fpbs5moRI8h%2B%2FoVhzOY%2FX4CqmIs%2BHko33q6VdnB2M2nSutB%2F5x4VcDClS5IaOQOw%2FKnq%2BwJDRAZBGxpi66EOMWckB%2FLn8sSs0aybrCDqLhTBZY34oXvLQm6lXbC7ycCDpi7%2FhhKa88vpezgzZMFxkv5Lu8ET3dr7VNH7wI8pQg84uAWKCfh3gqViNPfLqHl7tZEpGBy0JBGqkTyRyoRJzimAeh%2FYBvFb897P2nKKdp0xaNDHrrCUTBL9NxMO1RibVn12IS8W4vfVL8KbdUbLREorUZFgPE0QEhXca5sV9r9sBHD0CE0NjyC565uHgSc91P74%2BqAD9HywYw%2FrXkvwY6pgHgIMEDxZqSB0so22uDfpZn%2FiJpv8WhkdOto5pIixvb89yMEoWyZ7kj81i9MYj0%2FLfcciTg4BiDCIxJm1zVYl8F34O%2BoUrSAB8Sw4wb1O2z744Jz7%2BRihKJJmjy8%2FA3nqzg%2BQCpL0RpKFI7WEzURRwO40iSdpy7lFuQA17Cf6Y8JBdcullxOb4sGRqt24QqoWBp5PHPWvzrAsG5nOmxSnlY96%2FU5lMo&X-Amz-Signature=49480b057775665b787d8437a773ee033a759804b166bcd34e8e8e729fa283c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINFUPUO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC9Qb5zsvz%2F48zvYfknCjEU4ILQpdw%2FbQnsgwjEDGHptAiBO1MSUrsscY5i0BuL8TsWXQ19ROCNyyswlMHdEsSCgiyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0hgMIWg7DmYFcbkKtwDyKqnNioc0SME3pMsx1Rwz7vv%2BBoGLn%2F%2B4ksG6z0sW6JaccSqWf0dqxiCBTI5B6e0XdaDAMG4Oy8USVqrwawTfIXaXOLbChF9%2BiLDWpYXA88Vx1Q%2BgHDvNa4ccL%2Fdq3pqhaUhj6MnIJvAvhSHAdJstVrv9zD%2FxWf%2FEhOVT7mUgGK8gNACFNtrSSdSb8221CMTBCrAclht0hTmeAh0uKQ9NFbkg7uheHblW9an1HbK0o2YRlApxQ1%2FV7%2Bd13rxlh8nOsS%2FqzCvVhc5cHbQrHCOLVaqbD3XCJz6krShJWzpd04l0y%2Fpbs5moRI8h%2B%2FoVhzOY%2FX4CqmIs%2BHko33q6VdnB2M2nSutB%2F5x4VcDClS5IaOQOw%2FKnq%2BwJDRAZBGxpi66EOMWckB%2FLn8sSs0aybrCDqLhTBZY34oXvLQm6lXbC7ycCDpi7%2FhhKa88vpezgzZMFxkv5Lu8ET3dr7VNH7wI8pQg84uAWKCfh3gqViNPfLqHl7tZEpGBy0JBGqkTyRyoRJzimAeh%2FYBvFb897P2nKKdp0xaNDHrrCUTBL9NxMO1RibVn12IS8W4vfVL8KbdUbLREorUZFgPE0QEhXca5sV9r9sBHD0CE0NjyC565uHgSc91P74%2BqAD9HywYw%2FrXkvwY6pgHgIMEDxZqSB0so22uDfpZn%2FiJpv8WhkdOto5pIixvb89yMEoWyZ7kj81i9MYj0%2FLfcciTg4BiDCIxJm1zVYl8F34O%2BoUrSAB8Sw4wb1O2z744Jz7%2BRihKJJmjy8%2FA3nqzg%2BQCpL0RpKFI7WEzURRwO40iSdpy7lFuQA17Cf6Y8JBdcullxOb4sGRqt24QqoWBp5PHPWvzrAsG5nOmxSnlY96%2FU5lMo&X-Amz-Signature=e25ae246f034cee582b0437d418f0b1f12bd18c3db7decf9f9bcf6f9f6847b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINFUPUO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC9Qb5zsvz%2F48zvYfknCjEU4ILQpdw%2FbQnsgwjEDGHptAiBO1MSUrsscY5i0BuL8TsWXQ19ROCNyyswlMHdEsSCgiyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0hgMIWg7DmYFcbkKtwDyKqnNioc0SME3pMsx1Rwz7vv%2BBoGLn%2F%2B4ksG6z0sW6JaccSqWf0dqxiCBTI5B6e0XdaDAMG4Oy8USVqrwawTfIXaXOLbChF9%2BiLDWpYXA88Vx1Q%2BgHDvNa4ccL%2Fdq3pqhaUhj6MnIJvAvhSHAdJstVrv9zD%2FxWf%2FEhOVT7mUgGK8gNACFNtrSSdSb8221CMTBCrAclht0hTmeAh0uKQ9NFbkg7uheHblW9an1HbK0o2YRlApxQ1%2FV7%2Bd13rxlh8nOsS%2FqzCvVhc5cHbQrHCOLVaqbD3XCJz6krShJWzpd04l0y%2Fpbs5moRI8h%2B%2FoVhzOY%2FX4CqmIs%2BHko33q6VdnB2M2nSutB%2F5x4VcDClS5IaOQOw%2FKnq%2BwJDRAZBGxpi66EOMWckB%2FLn8sSs0aybrCDqLhTBZY34oXvLQm6lXbC7ycCDpi7%2FhhKa88vpezgzZMFxkv5Lu8ET3dr7VNH7wI8pQg84uAWKCfh3gqViNPfLqHl7tZEpGBy0JBGqkTyRyoRJzimAeh%2FYBvFb897P2nKKdp0xaNDHrrCUTBL9NxMO1RibVn12IS8W4vfVL8KbdUbLREorUZFgPE0QEhXca5sV9r9sBHD0CE0NjyC565uHgSc91P74%2BqAD9HywYw%2FrXkvwY6pgHgIMEDxZqSB0so22uDfpZn%2FiJpv8WhkdOto5pIixvb89yMEoWyZ7kj81i9MYj0%2FLfcciTg4BiDCIxJm1zVYl8F34O%2BoUrSAB8Sw4wb1O2z744Jz7%2BRihKJJmjy8%2FA3nqzg%2BQCpL0RpKFI7WEzURRwO40iSdpy7lFuQA17Cf6Y8JBdcullxOb4sGRqt24QqoWBp5PHPWvzrAsG5nOmxSnlY96%2FU5lMo&X-Amz-Signature=743b58048c059416abc6e7b12d775eb681edc0fd0e43d2279e9f773f96482524&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
