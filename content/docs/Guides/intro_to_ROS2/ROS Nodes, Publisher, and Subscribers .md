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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6TSFUD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZZnkP66N%2FfJGYcOPN68JWMjgEXIhwDVB6B%2BCoGhiZhAiB3FLr9oliTqJtE%2BWNmnl40NFnMzMhE%2F7u%2FrOa7v1zEvCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIugWLb%2FUZSB5UjcKtwDDF6rD4pum%2BWidVmE9OaiS5pUXt4mvES6d79OTT9eck5guHTdQvcdXgoI4BNouozsOt6o0iGkz0qoePFBCu4ALMRAwVuKok2z4A5%2FBAHS16ui1I0cHfk%2BZM9HOVRwB8bxxNodtvM8mMCFvmzl0uSEIioAUEFD%2FfedFR2ZfOPY2Nsu%2ByEe9GS5IstW9fb3%2Bo8qx6ybzxAM9QAtltSknnwfn4ou%2BZjHlsW0%2BqgU3biotzsGzgZxCj%2BdWg5uLi62DSuRtunTYrokgiEce9M29%2F6dBpx2VyM6YMcd8jiNRBQvJVFZbOwqrjcdr2F%2F%2BR%2FKU5%2FTriXQ%2FGlBlhqCWTyY5D1ZvnRDmvbsCVLvhScFJdLST2aibGSDB4u%2BB%2FTnqhvSU5UTwPFroJ%2F%2BnkO6Dj4teRtdn7ivOjzXj0T2lw2avIKTj9tdltE2S2K7jSi2WIPzDDR%2FIstcayGWdlrJGEchCuAQGz1dffdwgQjqYwG0pygsV%2BF1k%2F5exssoy8fhaBbETYHiGqlerhTEfSCfaDKXXydttLTdQR8PyREeCp8KrYjp1o32KZOkz7VgzKIz%2FB%2B5C3NVPBuLn%2F3rwtS6HlvMcuRmhYAqq9X2dLC%2BUpWkS9lB2cTUZ3KEvHUVznEnbaEwibSTwwY6pgHuBNwpCrHQ%2F3p3QFnh2%2F7yMXivQlz7RpZpGZ9q3KF73Oy4lmAHz5CRhpRZ13wK0jXE4evqFs8ZqO%2BpU3HQyIuG0UIrUVlKpYhI3NPQYgv9YODbcaf2cVghMrpg3uBDiR45HVTLSvmvYC65bnR%2F5q5w7lHBjGWiqmW6tjl5qKQK%2FQ0c1baBMOMx%2BrGO3cxraf2ymq1kqsFhn%2Boh9W07w97cxzoynIAr&X-Amz-Signature=3f21a81084c0abf9e596697a4e0d49de84ed971c9dc0b841959598023a738aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6TSFUD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZZnkP66N%2FfJGYcOPN68JWMjgEXIhwDVB6B%2BCoGhiZhAiB3FLr9oliTqJtE%2BWNmnl40NFnMzMhE%2F7u%2FrOa7v1zEvCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIugWLb%2FUZSB5UjcKtwDDF6rD4pum%2BWidVmE9OaiS5pUXt4mvES6d79OTT9eck5guHTdQvcdXgoI4BNouozsOt6o0iGkz0qoePFBCu4ALMRAwVuKok2z4A5%2FBAHS16ui1I0cHfk%2BZM9HOVRwB8bxxNodtvM8mMCFvmzl0uSEIioAUEFD%2FfedFR2ZfOPY2Nsu%2ByEe9GS5IstW9fb3%2Bo8qx6ybzxAM9QAtltSknnwfn4ou%2BZjHlsW0%2BqgU3biotzsGzgZxCj%2BdWg5uLi62DSuRtunTYrokgiEce9M29%2F6dBpx2VyM6YMcd8jiNRBQvJVFZbOwqrjcdr2F%2F%2BR%2FKU5%2FTriXQ%2FGlBlhqCWTyY5D1ZvnRDmvbsCVLvhScFJdLST2aibGSDB4u%2BB%2FTnqhvSU5UTwPFroJ%2F%2BnkO6Dj4teRtdn7ivOjzXj0T2lw2avIKTj9tdltE2S2K7jSi2WIPzDDR%2FIstcayGWdlrJGEchCuAQGz1dffdwgQjqYwG0pygsV%2BF1k%2F5exssoy8fhaBbETYHiGqlerhTEfSCfaDKXXydttLTdQR8PyREeCp8KrYjp1o32KZOkz7VgzKIz%2FB%2B5C3NVPBuLn%2F3rwtS6HlvMcuRmhYAqq9X2dLC%2BUpWkS9lB2cTUZ3KEvHUVznEnbaEwibSTwwY6pgHuBNwpCrHQ%2F3p3QFnh2%2F7yMXivQlz7RpZpGZ9q3KF73Oy4lmAHz5CRhpRZ13wK0jXE4evqFs8ZqO%2BpU3HQyIuG0UIrUVlKpYhI3NPQYgv9YODbcaf2cVghMrpg3uBDiR45HVTLSvmvYC65bnR%2F5q5w7lHBjGWiqmW6tjl5qKQK%2FQ0c1baBMOMx%2BrGO3cxraf2ymq1kqsFhn%2Boh9W07w97cxzoynIAr&X-Amz-Signature=caebd6a7210cf2fa4d911883ebe636a8c06412c9b51784f2e6e9e51e85f88eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6TSFUD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZZnkP66N%2FfJGYcOPN68JWMjgEXIhwDVB6B%2BCoGhiZhAiB3FLr9oliTqJtE%2BWNmnl40NFnMzMhE%2F7u%2FrOa7v1zEvCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIugWLb%2FUZSB5UjcKtwDDF6rD4pum%2BWidVmE9OaiS5pUXt4mvES6d79OTT9eck5guHTdQvcdXgoI4BNouozsOt6o0iGkz0qoePFBCu4ALMRAwVuKok2z4A5%2FBAHS16ui1I0cHfk%2BZM9HOVRwB8bxxNodtvM8mMCFvmzl0uSEIioAUEFD%2FfedFR2ZfOPY2Nsu%2ByEe9GS5IstW9fb3%2Bo8qx6ybzxAM9QAtltSknnwfn4ou%2BZjHlsW0%2BqgU3biotzsGzgZxCj%2BdWg5uLi62DSuRtunTYrokgiEce9M29%2F6dBpx2VyM6YMcd8jiNRBQvJVFZbOwqrjcdr2F%2F%2BR%2FKU5%2FTriXQ%2FGlBlhqCWTyY5D1ZvnRDmvbsCVLvhScFJdLST2aibGSDB4u%2BB%2FTnqhvSU5UTwPFroJ%2F%2BnkO6Dj4teRtdn7ivOjzXj0T2lw2avIKTj9tdltE2S2K7jSi2WIPzDDR%2FIstcayGWdlrJGEchCuAQGz1dffdwgQjqYwG0pygsV%2BF1k%2F5exssoy8fhaBbETYHiGqlerhTEfSCfaDKXXydttLTdQR8PyREeCp8KrYjp1o32KZOkz7VgzKIz%2FB%2B5C3NVPBuLn%2F3rwtS6HlvMcuRmhYAqq9X2dLC%2BUpWkS9lB2cTUZ3KEvHUVznEnbaEwibSTwwY6pgHuBNwpCrHQ%2F3p3QFnh2%2F7yMXivQlz7RpZpGZ9q3KF73Oy4lmAHz5CRhpRZ13wK0jXE4evqFs8ZqO%2BpU3HQyIuG0UIrUVlKpYhI3NPQYgv9YODbcaf2cVghMrpg3uBDiR45HVTLSvmvYC65bnR%2F5q5w7lHBjGWiqmW6tjl5qKQK%2FQ0c1baBMOMx%2BrGO3cxraf2ymq1kqsFhn%2Boh9W07w97cxzoynIAr&X-Amz-Signature=778fa8d205385c9f1287e762ce32618a26c0df6033ea4a9c60866f83fd06d249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6TSFUD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZZnkP66N%2FfJGYcOPN68JWMjgEXIhwDVB6B%2BCoGhiZhAiB3FLr9oliTqJtE%2BWNmnl40NFnMzMhE%2F7u%2FrOa7v1zEvCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIugWLb%2FUZSB5UjcKtwDDF6rD4pum%2BWidVmE9OaiS5pUXt4mvES6d79OTT9eck5guHTdQvcdXgoI4BNouozsOt6o0iGkz0qoePFBCu4ALMRAwVuKok2z4A5%2FBAHS16ui1I0cHfk%2BZM9HOVRwB8bxxNodtvM8mMCFvmzl0uSEIioAUEFD%2FfedFR2ZfOPY2Nsu%2ByEe9GS5IstW9fb3%2Bo8qx6ybzxAM9QAtltSknnwfn4ou%2BZjHlsW0%2BqgU3biotzsGzgZxCj%2BdWg5uLi62DSuRtunTYrokgiEce9M29%2F6dBpx2VyM6YMcd8jiNRBQvJVFZbOwqrjcdr2F%2F%2BR%2FKU5%2FTriXQ%2FGlBlhqCWTyY5D1ZvnRDmvbsCVLvhScFJdLST2aibGSDB4u%2BB%2FTnqhvSU5UTwPFroJ%2F%2BnkO6Dj4teRtdn7ivOjzXj0T2lw2avIKTj9tdltE2S2K7jSi2WIPzDDR%2FIstcayGWdlrJGEchCuAQGz1dffdwgQjqYwG0pygsV%2BF1k%2F5exssoy8fhaBbETYHiGqlerhTEfSCfaDKXXydttLTdQR8PyREeCp8KrYjp1o32KZOkz7VgzKIz%2FB%2B5C3NVPBuLn%2F3rwtS6HlvMcuRmhYAqq9X2dLC%2BUpWkS9lB2cTUZ3KEvHUVznEnbaEwibSTwwY6pgHuBNwpCrHQ%2F3p3QFnh2%2F7yMXivQlz7RpZpGZ9q3KF73Oy4lmAHz5CRhpRZ13wK0jXE4evqFs8ZqO%2BpU3HQyIuG0UIrUVlKpYhI3NPQYgv9YODbcaf2cVghMrpg3uBDiR45HVTLSvmvYC65bnR%2F5q5w7lHBjGWiqmW6tjl5qKQK%2FQ0c1baBMOMx%2BrGO3cxraf2ymq1kqsFhn%2Boh9W07w97cxzoynIAr&X-Amz-Signature=38c80426964c7568b33fa42194a910fc8f69186c90f068f15447d4eaaeadcd9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6TSFUD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZZnkP66N%2FfJGYcOPN68JWMjgEXIhwDVB6B%2BCoGhiZhAiB3FLr9oliTqJtE%2BWNmnl40NFnMzMhE%2F7u%2FrOa7v1zEvCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIugWLb%2FUZSB5UjcKtwDDF6rD4pum%2BWidVmE9OaiS5pUXt4mvES6d79OTT9eck5guHTdQvcdXgoI4BNouozsOt6o0iGkz0qoePFBCu4ALMRAwVuKok2z4A5%2FBAHS16ui1I0cHfk%2BZM9HOVRwB8bxxNodtvM8mMCFvmzl0uSEIioAUEFD%2FfedFR2ZfOPY2Nsu%2ByEe9GS5IstW9fb3%2Bo8qx6ybzxAM9QAtltSknnwfn4ou%2BZjHlsW0%2BqgU3biotzsGzgZxCj%2BdWg5uLi62DSuRtunTYrokgiEce9M29%2F6dBpx2VyM6YMcd8jiNRBQvJVFZbOwqrjcdr2F%2F%2BR%2FKU5%2FTriXQ%2FGlBlhqCWTyY5D1ZvnRDmvbsCVLvhScFJdLST2aibGSDB4u%2BB%2FTnqhvSU5UTwPFroJ%2F%2BnkO6Dj4teRtdn7ivOjzXj0T2lw2avIKTj9tdltE2S2K7jSi2WIPzDDR%2FIstcayGWdlrJGEchCuAQGz1dffdwgQjqYwG0pygsV%2BF1k%2F5exssoy8fhaBbETYHiGqlerhTEfSCfaDKXXydttLTdQR8PyREeCp8KrYjp1o32KZOkz7VgzKIz%2FB%2B5C3NVPBuLn%2F3rwtS6HlvMcuRmhYAqq9X2dLC%2BUpWkS9lB2cTUZ3KEvHUVznEnbaEwibSTwwY6pgHuBNwpCrHQ%2F3p3QFnh2%2F7yMXivQlz7RpZpGZ9q3KF73Oy4lmAHz5CRhpRZ13wK0jXE4evqFs8ZqO%2BpU3HQyIuG0UIrUVlKpYhI3NPQYgv9YODbcaf2cVghMrpg3uBDiR45HVTLSvmvYC65bnR%2F5q5w7lHBjGWiqmW6tjl5qKQK%2FQ0c1baBMOMx%2BrGO3cxraf2ymq1kqsFhn%2Boh9W07w97cxzoynIAr&X-Amz-Signature=006d9eca734ce350ac66be1c46ea1bd85b855a5319d074a315f8b3d7484cd283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6TSFUD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZZnkP66N%2FfJGYcOPN68JWMjgEXIhwDVB6B%2BCoGhiZhAiB3FLr9oliTqJtE%2BWNmnl40NFnMzMhE%2F7u%2FrOa7v1zEvCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIugWLb%2FUZSB5UjcKtwDDF6rD4pum%2BWidVmE9OaiS5pUXt4mvES6d79OTT9eck5guHTdQvcdXgoI4BNouozsOt6o0iGkz0qoePFBCu4ALMRAwVuKok2z4A5%2FBAHS16ui1I0cHfk%2BZM9HOVRwB8bxxNodtvM8mMCFvmzl0uSEIioAUEFD%2FfedFR2ZfOPY2Nsu%2ByEe9GS5IstW9fb3%2Bo8qx6ybzxAM9QAtltSknnwfn4ou%2BZjHlsW0%2BqgU3biotzsGzgZxCj%2BdWg5uLi62DSuRtunTYrokgiEce9M29%2F6dBpx2VyM6YMcd8jiNRBQvJVFZbOwqrjcdr2F%2F%2BR%2FKU5%2FTriXQ%2FGlBlhqCWTyY5D1ZvnRDmvbsCVLvhScFJdLST2aibGSDB4u%2BB%2FTnqhvSU5UTwPFroJ%2F%2BnkO6Dj4teRtdn7ivOjzXj0T2lw2avIKTj9tdltE2S2K7jSi2WIPzDDR%2FIstcayGWdlrJGEchCuAQGz1dffdwgQjqYwG0pygsV%2BF1k%2F5exssoy8fhaBbETYHiGqlerhTEfSCfaDKXXydttLTdQR8PyREeCp8KrYjp1o32KZOkz7VgzKIz%2FB%2B5C3NVPBuLn%2F3rwtS6HlvMcuRmhYAqq9X2dLC%2BUpWkS9lB2cTUZ3KEvHUVznEnbaEwibSTwwY6pgHuBNwpCrHQ%2F3p3QFnh2%2F7yMXivQlz7RpZpGZ9q3KF73Oy4lmAHz5CRhpRZ13wK0jXE4evqFs8ZqO%2BpU3HQyIuG0UIrUVlKpYhI3NPQYgv9YODbcaf2cVghMrpg3uBDiR45HVTLSvmvYC65bnR%2F5q5w7lHBjGWiqmW6tjl5qKQK%2FQ0c1baBMOMx%2BrGO3cxraf2ymq1kqsFhn%2Boh9W07w97cxzoynIAr&X-Amz-Signature=046b70c890ba9856409421b036ad5b227c0865aa3bc60cc71ab6e1a9847336c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6TSFUD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZZnkP66N%2FfJGYcOPN68JWMjgEXIhwDVB6B%2BCoGhiZhAiB3FLr9oliTqJtE%2BWNmnl40NFnMzMhE%2F7u%2FrOa7v1zEvCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIugWLb%2FUZSB5UjcKtwDDF6rD4pum%2BWidVmE9OaiS5pUXt4mvES6d79OTT9eck5guHTdQvcdXgoI4BNouozsOt6o0iGkz0qoePFBCu4ALMRAwVuKok2z4A5%2FBAHS16ui1I0cHfk%2BZM9HOVRwB8bxxNodtvM8mMCFvmzl0uSEIioAUEFD%2FfedFR2ZfOPY2Nsu%2ByEe9GS5IstW9fb3%2Bo8qx6ybzxAM9QAtltSknnwfn4ou%2BZjHlsW0%2BqgU3biotzsGzgZxCj%2BdWg5uLi62DSuRtunTYrokgiEce9M29%2F6dBpx2VyM6YMcd8jiNRBQvJVFZbOwqrjcdr2F%2F%2BR%2FKU5%2FTriXQ%2FGlBlhqCWTyY5D1ZvnRDmvbsCVLvhScFJdLST2aibGSDB4u%2BB%2FTnqhvSU5UTwPFroJ%2F%2BnkO6Dj4teRtdn7ivOjzXj0T2lw2avIKTj9tdltE2S2K7jSi2WIPzDDR%2FIstcayGWdlrJGEchCuAQGz1dffdwgQjqYwG0pygsV%2BF1k%2F5exssoy8fhaBbETYHiGqlerhTEfSCfaDKXXydttLTdQR8PyREeCp8KrYjp1o32KZOkz7VgzKIz%2FB%2B5C3NVPBuLn%2F3rwtS6HlvMcuRmhYAqq9X2dLC%2BUpWkS9lB2cTUZ3KEvHUVznEnbaEwibSTwwY6pgHuBNwpCrHQ%2F3p3QFnh2%2F7yMXivQlz7RpZpGZ9q3KF73Oy4lmAHz5CRhpRZ13wK0jXE4evqFs8ZqO%2BpU3HQyIuG0UIrUVlKpYhI3NPQYgv9YODbcaf2cVghMrpg3uBDiR45HVTLSvmvYC65bnR%2F5q5w7lHBjGWiqmW6tjl5qKQK%2FQ0c1baBMOMx%2BrGO3cxraf2ymq1kqsFhn%2Boh9W07w97cxzoynIAr&X-Amz-Signature=292b418916169bcf3d4faa56819f6d348d13b11f0e50e7d98880569a42713b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6TSFUD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZZnkP66N%2FfJGYcOPN68JWMjgEXIhwDVB6B%2BCoGhiZhAiB3FLr9oliTqJtE%2BWNmnl40NFnMzMhE%2F7u%2FrOa7v1zEvCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIugWLb%2FUZSB5UjcKtwDDF6rD4pum%2BWidVmE9OaiS5pUXt4mvES6d79OTT9eck5guHTdQvcdXgoI4BNouozsOt6o0iGkz0qoePFBCu4ALMRAwVuKok2z4A5%2FBAHS16ui1I0cHfk%2BZM9HOVRwB8bxxNodtvM8mMCFvmzl0uSEIioAUEFD%2FfedFR2ZfOPY2Nsu%2ByEe9GS5IstW9fb3%2Bo8qx6ybzxAM9QAtltSknnwfn4ou%2BZjHlsW0%2BqgU3biotzsGzgZxCj%2BdWg5uLi62DSuRtunTYrokgiEce9M29%2F6dBpx2VyM6YMcd8jiNRBQvJVFZbOwqrjcdr2F%2F%2BR%2FKU5%2FTriXQ%2FGlBlhqCWTyY5D1ZvnRDmvbsCVLvhScFJdLST2aibGSDB4u%2BB%2FTnqhvSU5UTwPFroJ%2F%2BnkO6Dj4teRtdn7ivOjzXj0T2lw2avIKTj9tdltE2S2K7jSi2WIPzDDR%2FIstcayGWdlrJGEchCuAQGz1dffdwgQjqYwG0pygsV%2BF1k%2F5exssoy8fhaBbETYHiGqlerhTEfSCfaDKXXydttLTdQR8PyREeCp8KrYjp1o32KZOkz7VgzKIz%2FB%2B5C3NVPBuLn%2F3rwtS6HlvMcuRmhYAqq9X2dLC%2BUpWkS9lB2cTUZ3KEvHUVznEnbaEwibSTwwY6pgHuBNwpCrHQ%2F3p3QFnh2%2F7yMXivQlz7RpZpGZ9q3KF73Oy4lmAHz5CRhpRZ13wK0jXE4evqFs8ZqO%2BpU3HQyIuG0UIrUVlKpYhI3NPQYgv9YODbcaf2cVghMrpg3uBDiR45HVTLSvmvYC65bnR%2F5q5w7lHBjGWiqmW6tjl5qKQK%2FQ0c1baBMOMx%2BrGO3cxraf2ymq1kqsFhn%2Boh9W07w97cxzoynIAr&X-Amz-Signature=eed7436a36437adafa120de84762a2b90871d4626023fd53272928084eb29fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
