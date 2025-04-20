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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJCIJGF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHcx1T7KozuD3A3D1z6RN9AireffCnL4e9c7nI%2Bpky%2BEAiB7to46TvGb8xrKi9Lix7zsJi7RcYnc9dKmRCPrGwsmCiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkma7ZZNahntK0BGrKtwDHlUpESHfKFoYigVv9qP24yt0vX1ScuMi8CYkafMKflX2eyPAWkXCczK2aTrgzsUHsuMZR1t4gjgtgOWkRtwnVqE53TC4uKvOiY72vOT24H9O7PVHWrHGA3JFz3QQ2RSXK%2BUM0NNlLzxa3CVp8IopSxovM1Re3vmxOQ10EmRJvmVyLRRtqHgCK53mP9o8c%2B%2Flf9MZzWRo2xyQN6u4p0%2F3soMShJ43ergAAdBzRcdKfjZ%2B%2FqCKG6Sw9%2B%2BYSVoE4MIhspHUhCa60JmGvSdO1nASZEnObHTdjmsw6VxKKKAvHzCLJlnUOID3Z0KyQPMVTwrJFvbZlZIq7u4ikhgcEDUoyLyeTEPvgqbTnRgCQHx%2F4am5CFFwrXRzhTfSQyNQlbLDeZd7HBsPl%2FbPdle6063HGx24BObHpQXXLqh9m3eKJlftkORaaS9acB0WE7ImAQk5RG8RpLTcQoZk3MN0H6Ba3buQB2D7G8kqno4De9mE%2BqAvinSjDSYlx46ex76Q8daGKxyBIVNNfr1TIlUZum8hkbJEYboqqwokoDcV%2BbKQYYf0Kb7WRMn3LiupXIxTiOwBmGA7Pk1%2FEsSXr2lc%2Bp9WL%2FxhFoSsP7ED1zVLyRZ7x%2F5U9WVbsR%2BigfCcAQow2YGRwAY6pgFgtxwsVAXoIQzljFeIhU6RYEe3PMsfI31mlnRMM%2B1Quv0Q17e%2BC%2BJdrj3jIWRhfeYTKNunrCTDCX54Zysd57FEcF8irDRCJ9oqGvoRyUXr68CkWgzBHGmXMZok%2BIqrc5ihIXcxOjG7wsF7d5cA3xHCaHrsjeqdEoGdlww15X1TdejfxysteGbk8C0e4ljIWm1IhLkX6%2FyutkNWzBKWZ5342Eq2IPGp&X-Amz-Signature=271d44ac9c0f3ddd0d04886f11a61ef6a7a83a97d544efee5de1ac7943208c92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJCIJGF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHcx1T7KozuD3A3D1z6RN9AireffCnL4e9c7nI%2Bpky%2BEAiB7to46TvGb8xrKi9Lix7zsJi7RcYnc9dKmRCPrGwsmCiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkma7ZZNahntK0BGrKtwDHlUpESHfKFoYigVv9qP24yt0vX1ScuMi8CYkafMKflX2eyPAWkXCczK2aTrgzsUHsuMZR1t4gjgtgOWkRtwnVqE53TC4uKvOiY72vOT24H9O7PVHWrHGA3JFz3QQ2RSXK%2BUM0NNlLzxa3CVp8IopSxovM1Re3vmxOQ10EmRJvmVyLRRtqHgCK53mP9o8c%2B%2Flf9MZzWRo2xyQN6u4p0%2F3soMShJ43ergAAdBzRcdKfjZ%2B%2FqCKG6Sw9%2B%2BYSVoE4MIhspHUhCa60JmGvSdO1nASZEnObHTdjmsw6VxKKKAvHzCLJlnUOID3Z0KyQPMVTwrJFvbZlZIq7u4ikhgcEDUoyLyeTEPvgqbTnRgCQHx%2F4am5CFFwrXRzhTfSQyNQlbLDeZd7HBsPl%2FbPdle6063HGx24BObHpQXXLqh9m3eKJlftkORaaS9acB0WE7ImAQk5RG8RpLTcQoZk3MN0H6Ba3buQB2D7G8kqno4De9mE%2BqAvinSjDSYlx46ex76Q8daGKxyBIVNNfr1TIlUZum8hkbJEYboqqwokoDcV%2BbKQYYf0Kb7WRMn3LiupXIxTiOwBmGA7Pk1%2FEsSXr2lc%2Bp9WL%2FxhFoSsP7ED1zVLyRZ7x%2F5U9WVbsR%2BigfCcAQow2YGRwAY6pgFgtxwsVAXoIQzljFeIhU6RYEe3PMsfI31mlnRMM%2B1Quv0Q17e%2BC%2BJdrj3jIWRhfeYTKNunrCTDCX54Zysd57FEcF8irDRCJ9oqGvoRyUXr68CkWgzBHGmXMZok%2BIqrc5ihIXcxOjG7wsF7d5cA3xHCaHrsjeqdEoGdlww15X1TdejfxysteGbk8C0e4ljIWm1IhLkX6%2FyutkNWzBKWZ5342Eq2IPGp&X-Amz-Signature=de8ea80a71a32d1584fc0e969d390a66c8811d836e38ac9ad32a2e9c6c457cef&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJCIJGF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHcx1T7KozuD3A3D1z6RN9AireffCnL4e9c7nI%2Bpky%2BEAiB7to46TvGb8xrKi9Lix7zsJi7RcYnc9dKmRCPrGwsmCiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkma7ZZNahntK0BGrKtwDHlUpESHfKFoYigVv9qP24yt0vX1ScuMi8CYkafMKflX2eyPAWkXCczK2aTrgzsUHsuMZR1t4gjgtgOWkRtwnVqE53TC4uKvOiY72vOT24H9O7PVHWrHGA3JFz3QQ2RSXK%2BUM0NNlLzxa3CVp8IopSxovM1Re3vmxOQ10EmRJvmVyLRRtqHgCK53mP9o8c%2B%2Flf9MZzWRo2xyQN6u4p0%2F3soMShJ43ergAAdBzRcdKfjZ%2B%2FqCKG6Sw9%2B%2BYSVoE4MIhspHUhCa60JmGvSdO1nASZEnObHTdjmsw6VxKKKAvHzCLJlnUOID3Z0KyQPMVTwrJFvbZlZIq7u4ikhgcEDUoyLyeTEPvgqbTnRgCQHx%2F4am5CFFwrXRzhTfSQyNQlbLDeZd7HBsPl%2FbPdle6063HGx24BObHpQXXLqh9m3eKJlftkORaaS9acB0WE7ImAQk5RG8RpLTcQoZk3MN0H6Ba3buQB2D7G8kqno4De9mE%2BqAvinSjDSYlx46ex76Q8daGKxyBIVNNfr1TIlUZum8hkbJEYboqqwokoDcV%2BbKQYYf0Kb7WRMn3LiupXIxTiOwBmGA7Pk1%2FEsSXr2lc%2Bp9WL%2FxhFoSsP7ED1zVLyRZ7x%2F5U9WVbsR%2BigfCcAQow2YGRwAY6pgFgtxwsVAXoIQzljFeIhU6RYEe3PMsfI31mlnRMM%2B1Quv0Q17e%2BC%2BJdrj3jIWRhfeYTKNunrCTDCX54Zysd57FEcF8irDRCJ9oqGvoRyUXr68CkWgzBHGmXMZok%2BIqrc5ihIXcxOjG7wsF7d5cA3xHCaHrsjeqdEoGdlww15X1TdejfxysteGbk8C0e4ljIWm1IhLkX6%2FyutkNWzBKWZ5342Eq2IPGp&X-Amz-Signature=9b7fe7bd4250b09068c960876286a6375c58467c5717809fe8b3e1afc22a34fe&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJCIJGF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHcx1T7KozuD3A3D1z6RN9AireffCnL4e9c7nI%2Bpky%2BEAiB7to46TvGb8xrKi9Lix7zsJi7RcYnc9dKmRCPrGwsmCiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkma7ZZNahntK0BGrKtwDHlUpESHfKFoYigVv9qP24yt0vX1ScuMi8CYkafMKflX2eyPAWkXCczK2aTrgzsUHsuMZR1t4gjgtgOWkRtwnVqE53TC4uKvOiY72vOT24H9O7PVHWrHGA3JFz3QQ2RSXK%2BUM0NNlLzxa3CVp8IopSxovM1Re3vmxOQ10EmRJvmVyLRRtqHgCK53mP9o8c%2B%2Flf9MZzWRo2xyQN6u4p0%2F3soMShJ43ergAAdBzRcdKfjZ%2B%2FqCKG6Sw9%2B%2BYSVoE4MIhspHUhCa60JmGvSdO1nASZEnObHTdjmsw6VxKKKAvHzCLJlnUOID3Z0KyQPMVTwrJFvbZlZIq7u4ikhgcEDUoyLyeTEPvgqbTnRgCQHx%2F4am5CFFwrXRzhTfSQyNQlbLDeZd7HBsPl%2FbPdle6063HGx24BObHpQXXLqh9m3eKJlftkORaaS9acB0WE7ImAQk5RG8RpLTcQoZk3MN0H6Ba3buQB2D7G8kqno4De9mE%2BqAvinSjDSYlx46ex76Q8daGKxyBIVNNfr1TIlUZum8hkbJEYboqqwokoDcV%2BbKQYYf0Kb7WRMn3LiupXIxTiOwBmGA7Pk1%2FEsSXr2lc%2Bp9WL%2FxhFoSsP7ED1zVLyRZ7x%2F5U9WVbsR%2BigfCcAQow2YGRwAY6pgFgtxwsVAXoIQzljFeIhU6RYEe3PMsfI31mlnRMM%2B1Quv0Q17e%2BC%2BJdrj3jIWRhfeYTKNunrCTDCX54Zysd57FEcF8irDRCJ9oqGvoRyUXr68CkWgzBHGmXMZok%2BIqrc5ihIXcxOjG7wsF7d5cA3xHCaHrsjeqdEoGdlww15X1TdejfxysteGbk8C0e4ljIWm1IhLkX6%2FyutkNWzBKWZ5342Eq2IPGp&X-Amz-Signature=2b78eac97dba756574901b91cea3a2f4ba4b3ffbdcf84d07cfd2d2ddc64eca15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJCIJGF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHcx1T7KozuD3A3D1z6RN9AireffCnL4e9c7nI%2Bpky%2BEAiB7to46TvGb8xrKi9Lix7zsJi7RcYnc9dKmRCPrGwsmCiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkma7ZZNahntK0BGrKtwDHlUpESHfKFoYigVv9qP24yt0vX1ScuMi8CYkafMKflX2eyPAWkXCczK2aTrgzsUHsuMZR1t4gjgtgOWkRtwnVqE53TC4uKvOiY72vOT24H9O7PVHWrHGA3JFz3QQ2RSXK%2BUM0NNlLzxa3CVp8IopSxovM1Re3vmxOQ10EmRJvmVyLRRtqHgCK53mP9o8c%2B%2Flf9MZzWRo2xyQN6u4p0%2F3soMShJ43ergAAdBzRcdKfjZ%2B%2FqCKG6Sw9%2B%2BYSVoE4MIhspHUhCa60JmGvSdO1nASZEnObHTdjmsw6VxKKKAvHzCLJlnUOID3Z0KyQPMVTwrJFvbZlZIq7u4ikhgcEDUoyLyeTEPvgqbTnRgCQHx%2F4am5CFFwrXRzhTfSQyNQlbLDeZd7HBsPl%2FbPdle6063HGx24BObHpQXXLqh9m3eKJlftkORaaS9acB0WE7ImAQk5RG8RpLTcQoZk3MN0H6Ba3buQB2D7G8kqno4De9mE%2BqAvinSjDSYlx46ex76Q8daGKxyBIVNNfr1TIlUZum8hkbJEYboqqwokoDcV%2BbKQYYf0Kb7WRMn3LiupXIxTiOwBmGA7Pk1%2FEsSXr2lc%2Bp9WL%2FxhFoSsP7ED1zVLyRZ7x%2F5U9WVbsR%2BigfCcAQow2YGRwAY6pgFgtxwsVAXoIQzljFeIhU6RYEe3PMsfI31mlnRMM%2B1Quv0Q17e%2BC%2BJdrj3jIWRhfeYTKNunrCTDCX54Zysd57FEcF8irDRCJ9oqGvoRyUXr68CkWgzBHGmXMZok%2BIqrc5ihIXcxOjG7wsF7d5cA3xHCaHrsjeqdEoGdlww15X1TdejfxysteGbk8C0e4ljIWm1IhLkX6%2FyutkNWzBKWZ5342Eq2IPGp&X-Amz-Signature=fe06a89e50baa5d9ae0865c048bbac9c29aad61dc4d41583b21c5316fc410c32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJCIJGF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHcx1T7KozuD3A3D1z6RN9AireffCnL4e9c7nI%2Bpky%2BEAiB7to46TvGb8xrKi9Lix7zsJi7RcYnc9dKmRCPrGwsmCiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkma7ZZNahntK0BGrKtwDHlUpESHfKFoYigVv9qP24yt0vX1ScuMi8CYkafMKflX2eyPAWkXCczK2aTrgzsUHsuMZR1t4gjgtgOWkRtwnVqE53TC4uKvOiY72vOT24H9O7PVHWrHGA3JFz3QQ2RSXK%2BUM0NNlLzxa3CVp8IopSxovM1Re3vmxOQ10EmRJvmVyLRRtqHgCK53mP9o8c%2B%2Flf9MZzWRo2xyQN6u4p0%2F3soMShJ43ergAAdBzRcdKfjZ%2B%2FqCKG6Sw9%2B%2BYSVoE4MIhspHUhCa60JmGvSdO1nASZEnObHTdjmsw6VxKKKAvHzCLJlnUOID3Z0KyQPMVTwrJFvbZlZIq7u4ikhgcEDUoyLyeTEPvgqbTnRgCQHx%2F4am5CFFwrXRzhTfSQyNQlbLDeZd7HBsPl%2FbPdle6063HGx24BObHpQXXLqh9m3eKJlftkORaaS9acB0WE7ImAQk5RG8RpLTcQoZk3MN0H6Ba3buQB2D7G8kqno4De9mE%2BqAvinSjDSYlx46ex76Q8daGKxyBIVNNfr1TIlUZum8hkbJEYboqqwokoDcV%2BbKQYYf0Kb7WRMn3LiupXIxTiOwBmGA7Pk1%2FEsSXr2lc%2Bp9WL%2FxhFoSsP7ED1zVLyRZ7x%2F5U9WVbsR%2BigfCcAQow2YGRwAY6pgFgtxwsVAXoIQzljFeIhU6RYEe3PMsfI31mlnRMM%2B1Quv0Q17e%2BC%2BJdrj3jIWRhfeYTKNunrCTDCX54Zysd57FEcF8irDRCJ9oqGvoRyUXr68CkWgzBHGmXMZok%2BIqrc5ihIXcxOjG7wsF7d5cA3xHCaHrsjeqdEoGdlww15X1TdejfxysteGbk8C0e4ljIWm1IhLkX6%2FyutkNWzBKWZ5342Eq2IPGp&X-Amz-Signature=6086b3bde0e5761d639029aee5740dffc827fcb6b22071c3b4081b10e1614ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJCIJGF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHcx1T7KozuD3A3D1z6RN9AireffCnL4e9c7nI%2Bpky%2BEAiB7to46TvGb8xrKi9Lix7zsJi7RcYnc9dKmRCPrGwsmCiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkma7ZZNahntK0BGrKtwDHlUpESHfKFoYigVv9qP24yt0vX1ScuMi8CYkafMKflX2eyPAWkXCczK2aTrgzsUHsuMZR1t4gjgtgOWkRtwnVqE53TC4uKvOiY72vOT24H9O7PVHWrHGA3JFz3QQ2RSXK%2BUM0NNlLzxa3CVp8IopSxovM1Re3vmxOQ10EmRJvmVyLRRtqHgCK53mP9o8c%2B%2Flf9MZzWRo2xyQN6u4p0%2F3soMShJ43ergAAdBzRcdKfjZ%2B%2FqCKG6Sw9%2B%2BYSVoE4MIhspHUhCa60JmGvSdO1nASZEnObHTdjmsw6VxKKKAvHzCLJlnUOID3Z0KyQPMVTwrJFvbZlZIq7u4ikhgcEDUoyLyeTEPvgqbTnRgCQHx%2F4am5CFFwrXRzhTfSQyNQlbLDeZd7HBsPl%2FbPdle6063HGx24BObHpQXXLqh9m3eKJlftkORaaS9acB0WE7ImAQk5RG8RpLTcQoZk3MN0H6Ba3buQB2D7G8kqno4De9mE%2BqAvinSjDSYlx46ex76Q8daGKxyBIVNNfr1TIlUZum8hkbJEYboqqwokoDcV%2BbKQYYf0Kb7WRMn3LiupXIxTiOwBmGA7Pk1%2FEsSXr2lc%2Bp9WL%2FxhFoSsP7ED1zVLyRZ7x%2F5U9WVbsR%2BigfCcAQow2YGRwAY6pgFgtxwsVAXoIQzljFeIhU6RYEe3PMsfI31mlnRMM%2B1Quv0Q17e%2BC%2BJdrj3jIWRhfeYTKNunrCTDCX54Zysd57FEcF8irDRCJ9oqGvoRyUXr68CkWgzBHGmXMZok%2BIqrc5ihIXcxOjG7wsF7d5cA3xHCaHrsjeqdEoGdlww15X1TdejfxysteGbk8C0e4ljIWm1IhLkX6%2FyutkNWzBKWZ5342Eq2IPGp&X-Amz-Signature=12a2b57cd16607a0ced30a5cf2af7c1abad4000db7a980c038b901ce02a70bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJCIJGF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHcx1T7KozuD3A3D1z6RN9AireffCnL4e9c7nI%2Bpky%2BEAiB7to46TvGb8xrKi9Lix7zsJi7RcYnc9dKmRCPrGwsmCiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkma7ZZNahntK0BGrKtwDHlUpESHfKFoYigVv9qP24yt0vX1ScuMi8CYkafMKflX2eyPAWkXCczK2aTrgzsUHsuMZR1t4gjgtgOWkRtwnVqE53TC4uKvOiY72vOT24H9O7PVHWrHGA3JFz3QQ2RSXK%2BUM0NNlLzxa3CVp8IopSxovM1Re3vmxOQ10EmRJvmVyLRRtqHgCK53mP9o8c%2B%2Flf9MZzWRo2xyQN6u4p0%2F3soMShJ43ergAAdBzRcdKfjZ%2B%2FqCKG6Sw9%2B%2BYSVoE4MIhspHUhCa60JmGvSdO1nASZEnObHTdjmsw6VxKKKAvHzCLJlnUOID3Z0KyQPMVTwrJFvbZlZIq7u4ikhgcEDUoyLyeTEPvgqbTnRgCQHx%2F4am5CFFwrXRzhTfSQyNQlbLDeZd7HBsPl%2FbPdle6063HGx24BObHpQXXLqh9m3eKJlftkORaaS9acB0WE7ImAQk5RG8RpLTcQoZk3MN0H6Ba3buQB2D7G8kqno4De9mE%2BqAvinSjDSYlx46ex76Q8daGKxyBIVNNfr1TIlUZum8hkbJEYboqqwokoDcV%2BbKQYYf0Kb7WRMn3LiupXIxTiOwBmGA7Pk1%2FEsSXr2lc%2Bp9WL%2FxhFoSsP7ED1zVLyRZ7x%2F5U9WVbsR%2BigfCcAQow2YGRwAY6pgFgtxwsVAXoIQzljFeIhU6RYEe3PMsfI31mlnRMM%2B1Quv0Q17e%2BC%2BJdrj3jIWRhfeYTKNunrCTDCX54Zysd57FEcF8irDRCJ9oqGvoRyUXr68CkWgzBHGmXMZok%2BIqrc5ihIXcxOjG7wsF7d5cA3xHCaHrsjeqdEoGdlww15X1TdejfxysteGbk8C0e4ljIWm1IhLkX6%2FyutkNWzBKWZ5342Eq2IPGp&X-Amz-Signature=f38770aad098896d8fec47a61597afc80af6247402336e5104c66be4596a22f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
