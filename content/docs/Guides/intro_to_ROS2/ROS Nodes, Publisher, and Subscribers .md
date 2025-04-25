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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJ46ILP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvym9%2BbNKtWc71qkzMe4J4truQNe9KCvjSSy5wFMtywIhAOOy1i1hAd%2Bmwi2qFpoGJ5VLpEllRGHp5Ok2VUhBzSIlKv8DCDMQABoMNjM3NDIzMTgzODA1Igy2bGB4q4GLF7TLlZUq3APAmUibA9GC73SNhFKFHwNfiZUimg3oMO6J7n6wJ6vAe3OAUUdpjA47P7RjyanYb%2BCejJAJDEF3o7EnU16ZPEt%2BnAojDtx2KeTIm4qF45069jEEHRUPardLoORxLPQ3rNfMzq9dEOfKpUlPDXd5lFrJQeABKCdyqILBl7NGsqDy5yhGwef%2BcW2sMQTjfQokoNqVer%2FB5iYFCG4jm3OrX8bEUxtRfe1w6Ag8XNUFpRy%2FPK3gXRZcg7RwutCjqeiOkz4JdL6S9Wtshx%2FpX2l28BCHLejfUi%2BnJ8B9s8yGlIV%2FXesYuXIUBUd7O1oNlKncVRj8%2FBJQ4NQHcqtGJLXF0m8qmeo9BJ9i7PpcEtRB5asVxYupFt4zwCwX8MZiXy0cI9awKNVFHOnSmDfsZ6cEpw2ZRrySsfv2rbn8Y9YWMtUu0c6FW63P5PlNt7vG5oct3jBhAAMrECziiT1tCU3kbyZHfHHrRk2DY0sJkTUvzkXscF7pgdYyEB2%2FrFJ7C%2BdYlBlyLgZ2w925BdeUmLprMjxSwQs3H%2BNYM4%2FjxpJV23ZEuvXMytqFEQZwsH7JL53nOoeN%2FnyuNHt%2FG2hp077WU5%2BOk4Y%2F8gvbRhY2aEKdKY7SkLxYdDwoi502XvaghjCsna%2FABjqkAd50Bb2UDGBzd7XQImiqbl7BE6YD%2F7toDGsAbotsh29TVdBqDPhaJar7y05mC3uL11ltcgEzOfSL9pxwhZ8LmNgE7UVrC%2Bg9BwHmcNWwdOnCunDGynLsSFXzAjplbx5AwAC%2FE6eFV%2Fz2vaSCLlyoENf%2BdzVCW4oD4BBezCn5ybs48argjmHvn4%2BPw0pvVWiItBgVjVT0OQsBIOy0VynRlxw9BHQA&X-Amz-Signature=ad7cefc24070caf29a318b7394c9e3492d41882990690110b1843d87a4435f06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJ46ILP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvym9%2BbNKtWc71qkzMe4J4truQNe9KCvjSSy5wFMtywIhAOOy1i1hAd%2Bmwi2qFpoGJ5VLpEllRGHp5Ok2VUhBzSIlKv8DCDMQABoMNjM3NDIzMTgzODA1Igy2bGB4q4GLF7TLlZUq3APAmUibA9GC73SNhFKFHwNfiZUimg3oMO6J7n6wJ6vAe3OAUUdpjA47P7RjyanYb%2BCejJAJDEF3o7EnU16ZPEt%2BnAojDtx2KeTIm4qF45069jEEHRUPardLoORxLPQ3rNfMzq9dEOfKpUlPDXd5lFrJQeABKCdyqILBl7NGsqDy5yhGwef%2BcW2sMQTjfQokoNqVer%2FB5iYFCG4jm3OrX8bEUxtRfe1w6Ag8XNUFpRy%2FPK3gXRZcg7RwutCjqeiOkz4JdL6S9Wtshx%2FpX2l28BCHLejfUi%2BnJ8B9s8yGlIV%2FXesYuXIUBUd7O1oNlKncVRj8%2FBJQ4NQHcqtGJLXF0m8qmeo9BJ9i7PpcEtRB5asVxYupFt4zwCwX8MZiXy0cI9awKNVFHOnSmDfsZ6cEpw2ZRrySsfv2rbn8Y9YWMtUu0c6FW63P5PlNt7vG5oct3jBhAAMrECziiT1tCU3kbyZHfHHrRk2DY0sJkTUvzkXscF7pgdYyEB2%2FrFJ7C%2BdYlBlyLgZ2w925BdeUmLprMjxSwQs3H%2BNYM4%2FjxpJV23ZEuvXMytqFEQZwsH7JL53nOoeN%2FnyuNHt%2FG2hp077WU5%2BOk4Y%2F8gvbRhY2aEKdKY7SkLxYdDwoi502XvaghjCsna%2FABjqkAd50Bb2UDGBzd7XQImiqbl7BE6YD%2F7toDGsAbotsh29TVdBqDPhaJar7y05mC3uL11ltcgEzOfSL9pxwhZ8LmNgE7UVrC%2Bg9BwHmcNWwdOnCunDGynLsSFXzAjplbx5AwAC%2FE6eFV%2Fz2vaSCLlyoENf%2BdzVCW4oD4BBezCn5ybs48argjmHvn4%2BPw0pvVWiItBgVjVT0OQsBIOy0VynRlxw9BHQA&X-Amz-Signature=3cdea44b486c92b5c61d9a6caf2f613d5a25df55e397fd6a6aaf79584b0c0071&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJ46ILP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvym9%2BbNKtWc71qkzMe4J4truQNe9KCvjSSy5wFMtywIhAOOy1i1hAd%2Bmwi2qFpoGJ5VLpEllRGHp5Ok2VUhBzSIlKv8DCDMQABoMNjM3NDIzMTgzODA1Igy2bGB4q4GLF7TLlZUq3APAmUibA9GC73SNhFKFHwNfiZUimg3oMO6J7n6wJ6vAe3OAUUdpjA47P7RjyanYb%2BCejJAJDEF3o7EnU16ZPEt%2BnAojDtx2KeTIm4qF45069jEEHRUPardLoORxLPQ3rNfMzq9dEOfKpUlPDXd5lFrJQeABKCdyqILBl7NGsqDy5yhGwef%2BcW2sMQTjfQokoNqVer%2FB5iYFCG4jm3OrX8bEUxtRfe1w6Ag8XNUFpRy%2FPK3gXRZcg7RwutCjqeiOkz4JdL6S9Wtshx%2FpX2l28BCHLejfUi%2BnJ8B9s8yGlIV%2FXesYuXIUBUd7O1oNlKncVRj8%2FBJQ4NQHcqtGJLXF0m8qmeo9BJ9i7PpcEtRB5asVxYupFt4zwCwX8MZiXy0cI9awKNVFHOnSmDfsZ6cEpw2ZRrySsfv2rbn8Y9YWMtUu0c6FW63P5PlNt7vG5oct3jBhAAMrECziiT1tCU3kbyZHfHHrRk2DY0sJkTUvzkXscF7pgdYyEB2%2FrFJ7C%2BdYlBlyLgZ2w925BdeUmLprMjxSwQs3H%2BNYM4%2FjxpJV23ZEuvXMytqFEQZwsH7JL53nOoeN%2FnyuNHt%2FG2hp077WU5%2BOk4Y%2F8gvbRhY2aEKdKY7SkLxYdDwoi502XvaghjCsna%2FABjqkAd50Bb2UDGBzd7XQImiqbl7BE6YD%2F7toDGsAbotsh29TVdBqDPhaJar7y05mC3uL11ltcgEzOfSL9pxwhZ8LmNgE7UVrC%2Bg9BwHmcNWwdOnCunDGynLsSFXzAjplbx5AwAC%2FE6eFV%2Fz2vaSCLlyoENf%2BdzVCW4oD4BBezCn5ybs48argjmHvn4%2BPw0pvVWiItBgVjVT0OQsBIOy0VynRlxw9BHQA&X-Amz-Signature=576cf92da541c4329c59e50b92018e608dafad61871f48b54480422f1a2cf2a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJ46ILP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvym9%2BbNKtWc71qkzMe4J4truQNe9KCvjSSy5wFMtywIhAOOy1i1hAd%2Bmwi2qFpoGJ5VLpEllRGHp5Ok2VUhBzSIlKv8DCDMQABoMNjM3NDIzMTgzODA1Igy2bGB4q4GLF7TLlZUq3APAmUibA9GC73SNhFKFHwNfiZUimg3oMO6J7n6wJ6vAe3OAUUdpjA47P7RjyanYb%2BCejJAJDEF3o7EnU16ZPEt%2BnAojDtx2KeTIm4qF45069jEEHRUPardLoORxLPQ3rNfMzq9dEOfKpUlPDXd5lFrJQeABKCdyqILBl7NGsqDy5yhGwef%2BcW2sMQTjfQokoNqVer%2FB5iYFCG4jm3OrX8bEUxtRfe1w6Ag8XNUFpRy%2FPK3gXRZcg7RwutCjqeiOkz4JdL6S9Wtshx%2FpX2l28BCHLejfUi%2BnJ8B9s8yGlIV%2FXesYuXIUBUd7O1oNlKncVRj8%2FBJQ4NQHcqtGJLXF0m8qmeo9BJ9i7PpcEtRB5asVxYupFt4zwCwX8MZiXy0cI9awKNVFHOnSmDfsZ6cEpw2ZRrySsfv2rbn8Y9YWMtUu0c6FW63P5PlNt7vG5oct3jBhAAMrECziiT1tCU3kbyZHfHHrRk2DY0sJkTUvzkXscF7pgdYyEB2%2FrFJ7C%2BdYlBlyLgZ2w925BdeUmLprMjxSwQs3H%2BNYM4%2FjxpJV23ZEuvXMytqFEQZwsH7JL53nOoeN%2FnyuNHt%2FG2hp077WU5%2BOk4Y%2F8gvbRhY2aEKdKY7SkLxYdDwoi502XvaghjCsna%2FABjqkAd50Bb2UDGBzd7XQImiqbl7BE6YD%2F7toDGsAbotsh29TVdBqDPhaJar7y05mC3uL11ltcgEzOfSL9pxwhZ8LmNgE7UVrC%2Bg9BwHmcNWwdOnCunDGynLsSFXzAjplbx5AwAC%2FE6eFV%2Fz2vaSCLlyoENf%2BdzVCW4oD4BBezCn5ybs48argjmHvn4%2BPw0pvVWiItBgVjVT0OQsBIOy0VynRlxw9BHQA&X-Amz-Signature=f39598b94bf1d1221cbbb83eb9b296f95d444774a90bc3d9383f8862ab33430f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJ46ILP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvym9%2BbNKtWc71qkzMe4J4truQNe9KCvjSSy5wFMtywIhAOOy1i1hAd%2Bmwi2qFpoGJ5VLpEllRGHp5Ok2VUhBzSIlKv8DCDMQABoMNjM3NDIzMTgzODA1Igy2bGB4q4GLF7TLlZUq3APAmUibA9GC73SNhFKFHwNfiZUimg3oMO6J7n6wJ6vAe3OAUUdpjA47P7RjyanYb%2BCejJAJDEF3o7EnU16ZPEt%2BnAojDtx2KeTIm4qF45069jEEHRUPardLoORxLPQ3rNfMzq9dEOfKpUlPDXd5lFrJQeABKCdyqILBl7NGsqDy5yhGwef%2BcW2sMQTjfQokoNqVer%2FB5iYFCG4jm3OrX8bEUxtRfe1w6Ag8XNUFpRy%2FPK3gXRZcg7RwutCjqeiOkz4JdL6S9Wtshx%2FpX2l28BCHLejfUi%2BnJ8B9s8yGlIV%2FXesYuXIUBUd7O1oNlKncVRj8%2FBJQ4NQHcqtGJLXF0m8qmeo9BJ9i7PpcEtRB5asVxYupFt4zwCwX8MZiXy0cI9awKNVFHOnSmDfsZ6cEpw2ZRrySsfv2rbn8Y9YWMtUu0c6FW63P5PlNt7vG5oct3jBhAAMrECziiT1tCU3kbyZHfHHrRk2DY0sJkTUvzkXscF7pgdYyEB2%2FrFJ7C%2BdYlBlyLgZ2w925BdeUmLprMjxSwQs3H%2BNYM4%2FjxpJV23ZEuvXMytqFEQZwsH7JL53nOoeN%2FnyuNHt%2FG2hp077WU5%2BOk4Y%2F8gvbRhY2aEKdKY7SkLxYdDwoi502XvaghjCsna%2FABjqkAd50Bb2UDGBzd7XQImiqbl7BE6YD%2F7toDGsAbotsh29TVdBqDPhaJar7y05mC3uL11ltcgEzOfSL9pxwhZ8LmNgE7UVrC%2Bg9BwHmcNWwdOnCunDGynLsSFXzAjplbx5AwAC%2FE6eFV%2Fz2vaSCLlyoENf%2BdzVCW4oD4BBezCn5ybs48argjmHvn4%2BPw0pvVWiItBgVjVT0OQsBIOy0VynRlxw9BHQA&X-Amz-Signature=26249525895715d38b82e71613c8867026d2107ec2ad4f8e4b63aaf6c7aa02a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJ46ILP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvym9%2BbNKtWc71qkzMe4J4truQNe9KCvjSSy5wFMtywIhAOOy1i1hAd%2Bmwi2qFpoGJ5VLpEllRGHp5Ok2VUhBzSIlKv8DCDMQABoMNjM3NDIzMTgzODA1Igy2bGB4q4GLF7TLlZUq3APAmUibA9GC73SNhFKFHwNfiZUimg3oMO6J7n6wJ6vAe3OAUUdpjA47P7RjyanYb%2BCejJAJDEF3o7EnU16ZPEt%2BnAojDtx2KeTIm4qF45069jEEHRUPardLoORxLPQ3rNfMzq9dEOfKpUlPDXd5lFrJQeABKCdyqILBl7NGsqDy5yhGwef%2BcW2sMQTjfQokoNqVer%2FB5iYFCG4jm3OrX8bEUxtRfe1w6Ag8XNUFpRy%2FPK3gXRZcg7RwutCjqeiOkz4JdL6S9Wtshx%2FpX2l28BCHLejfUi%2BnJ8B9s8yGlIV%2FXesYuXIUBUd7O1oNlKncVRj8%2FBJQ4NQHcqtGJLXF0m8qmeo9BJ9i7PpcEtRB5asVxYupFt4zwCwX8MZiXy0cI9awKNVFHOnSmDfsZ6cEpw2ZRrySsfv2rbn8Y9YWMtUu0c6FW63P5PlNt7vG5oct3jBhAAMrECziiT1tCU3kbyZHfHHrRk2DY0sJkTUvzkXscF7pgdYyEB2%2FrFJ7C%2BdYlBlyLgZ2w925BdeUmLprMjxSwQs3H%2BNYM4%2FjxpJV23ZEuvXMytqFEQZwsH7JL53nOoeN%2FnyuNHt%2FG2hp077WU5%2BOk4Y%2F8gvbRhY2aEKdKY7SkLxYdDwoi502XvaghjCsna%2FABjqkAd50Bb2UDGBzd7XQImiqbl7BE6YD%2F7toDGsAbotsh29TVdBqDPhaJar7y05mC3uL11ltcgEzOfSL9pxwhZ8LmNgE7UVrC%2Bg9BwHmcNWwdOnCunDGynLsSFXzAjplbx5AwAC%2FE6eFV%2Fz2vaSCLlyoENf%2BdzVCW4oD4BBezCn5ybs48argjmHvn4%2BPw0pvVWiItBgVjVT0OQsBIOy0VynRlxw9BHQA&X-Amz-Signature=d279abebfac0f8baea75ab20914a45a29cf3326cea77bc61e3ebf8036fd48bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJ46ILP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvym9%2BbNKtWc71qkzMe4J4truQNe9KCvjSSy5wFMtywIhAOOy1i1hAd%2Bmwi2qFpoGJ5VLpEllRGHp5Ok2VUhBzSIlKv8DCDMQABoMNjM3NDIzMTgzODA1Igy2bGB4q4GLF7TLlZUq3APAmUibA9GC73SNhFKFHwNfiZUimg3oMO6J7n6wJ6vAe3OAUUdpjA47P7RjyanYb%2BCejJAJDEF3o7EnU16ZPEt%2BnAojDtx2KeTIm4qF45069jEEHRUPardLoORxLPQ3rNfMzq9dEOfKpUlPDXd5lFrJQeABKCdyqILBl7NGsqDy5yhGwef%2BcW2sMQTjfQokoNqVer%2FB5iYFCG4jm3OrX8bEUxtRfe1w6Ag8XNUFpRy%2FPK3gXRZcg7RwutCjqeiOkz4JdL6S9Wtshx%2FpX2l28BCHLejfUi%2BnJ8B9s8yGlIV%2FXesYuXIUBUd7O1oNlKncVRj8%2FBJQ4NQHcqtGJLXF0m8qmeo9BJ9i7PpcEtRB5asVxYupFt4zwCwX8MZiXy0cI9awKNVFHOnSmDfsZ6cEpw2ZRrySsfv2rbn8Y9YWMtUu0c6FW63P5PlNt7vG5oct3jBhAAMrECziiT1tCU3kbyZHfHHrRk2DY0sJkTUvzkXscF7pgdYyEB2%2FrFJ7C%2BdYlBlyLgZ2w925BdeUmLprMjxSwQs3H%2BNYM4%2FjxpJV23ZEuvXMytqFEQZwsH7JL53nOoeN%2FnyuNHt%2FG2hp077WU5%2BOk4Y%2F8gvbRhY2aEKdKY7SkLxYdDwoi502XvaghjCsna%2FABjqkAd50Bb2UDGBzd7XQImiqbl7BE6YD%2F7toDGsAbotsh29TVdBqDPhaJar7y05mC3uL11ltcgEzOfSL9pxwhZ8LmNgE7UVrC%2Bg9BwHmcNWwdOnCunDGynLsSFXzAjplbx5AwAC%2FE6eFV%2Fz2vaSCLlyoENf%2BdzVCW4oD4BBezCn5ybs48argjmHvn4%2BPw0pvVWiItBgVjVT0OQsBIOy0VynRlxw9BHQA&X-Amz-Signature=184e6164486f61eec951db6a6fd691b2bf39beefdebcd8cdc2242b77e7d4a32a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJ46ILP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvym9%2BbNKtWc71qkzMe4J4truQNe9KCvjSSy5wFMtywIhAOOy1i1hAd%2Bmwi2qFpoGJ5VLpEllRGHp5Ok2VUhBzSIlKv8DCDMQABoMNjM3NDIzMTgzODA1Igy2bGB4q4GLF7TLlZUq3APAmUibA9GC73SNhFKFHwNfiZUimg3oMO6J7n6wJ6vAe3OAUUdpjA47P7RjyanYb%2BCejJAJDEF3o7EnU16ZPEt%2BnAojDtx2KeTIm4qF45069jEEHRUPardLoORxLPQ3rNfMzq9dEOfKpUlPDXd5lFrJQeABKCdyqILBl7NGsqDy5yhGwef%2BcW2sMQTjfQokoNqVer%2FB5iYFCG4jm3OrX8bEUxtRfe1w6Ag8XNUFpRy%2FPK3gXRZcg7RwutCjqeiOkz4JdL6S9Wtshx%2FpX2l28BCHLejfUi%2BnJ8B9s8yGlIV%2FXesYuXIUBUd7O1oNlKncVRj8%2FBJQ4NQHcqtGJLXF0m8qmeo9BJ9i7PpcEtRB5asVxYupFt4zwCwX8MZiXy0cI9awKNVFHOnSmDfsZ6cEpw2ZRrySsfv2rbn8Y9YWMtUu0c6FW63P5PlNt7vG5oct3jBhAAMrECziiT1tCU3kbyZHfHHrRk2DY0sJkTUvzkXscF7pgdYyEB2%2FrFJ7C%2BdYlBlyLgZ2w925BdeUmLprMjxSwQs3H%2BNYM4%2FjxpJV23ZEuvXMytqFEQZwsH7JL53nOoeN%2FnyuNHt%2FG2hp077WU5%2BOk4Y%2F8gvbRhY2aEKdKY7SkLxYdDwoi502XvaghjCsna%2FABjqkAd50Bb2UDGBzd7XQImiqbl7BE6YD%2F7toDGsAbotsh29TVdBqDPhaJar7y05mC3uL11ltcgEzOfSL9pxwhZ8LmNgE7UVrC%2Bg9BwHmcNWwdOnCunDGynLsSFXzAjplbx5AwAC%2FE6eFV%2Fz2vaSCLlyoENf%2BdzVCW4oD4BBezCn5ybs48argjmHvn4%2BPw0pvVWiItBgVjVT0OQsBIOy0VynRlxw9BHQA&X-Amz-Signature=2d1ba1f6aa9131a56d2a71971dd4239b945d75d13fab15f11f73c2fb4f4b09d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
