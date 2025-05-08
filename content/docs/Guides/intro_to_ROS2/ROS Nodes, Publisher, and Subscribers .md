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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZOIIILF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzI1g4cFyfh1cBKrskIWlssOI84WbP0B52qF7Df70meQIhAJnS2FQ0Joxoto8iKevs3fs1%2FlOHT3sWHqdjGjKbmvYqKv8DCH0QABoMNjM3NDIzMTgzODA1Igw2OWTMgzkj3sSGi3gq3ANU%2FIIGppQAF%2BtvlW2sEwpL%2BbQpsp0zWp67GDLLQ%2BMIMqhVnvNTMfm1FXFlxIV7ITBah%2FYDdWXz7cMg5lfXK1KghZNEClV46N8l5zChz09TQQjksAsdbZEI6abXv8BcuwyDQfjbHURaI6kbggc7jpvt6A9si7bIjDGiCKApgMBECvP5ngLLj8ptc8keihLL87cb5WPuQfOOj48MAq%2BjOPTNFD37aqfjllus2ZjTVvSFOpEZURzAMgkYaLAhP4n59LATzrZwdCyR255hZxptUxQ517yfr3WPWgbsIIcOc8pnx6vJrHoG%2FYQmF37pZDsLJIKrdJpmDMfQ4l%2Fkg%2FUUftz2O%2B4%2FPdQ%2F1H3f%2B7gKQzxYTXchuOZM%2FoGQpgg49l7Gn02SKUErfSTqBwpn%2F3hh1hL%2FU%2BdbhD2ac7FuyQmaVIzWWE7b9ESjPhkjJrsSiqgPFECfKP77SCRA%2BZtOrZ9b1cB9muRiTaekWsE%2FCwLqu0kjpJT6nxAl62fOvvWzfGnwaCMU9d1EiU5ZcETZCBMhvvmKoDS3WTtxqE1KU1IioNHHs4BfGMpb3LY35U0acIWcBm8KL0oZe38yXjmWaIfLq4ScqIxmirj80UC3hJAdix%2BJtWbZUS7YiERN2F6BeTD5mfTABjqkAeXDO2LOhkPAFqjzsDx9k8SrJDdH2oels6aY%2BesvRE4rnw9KaenGHTIAgluSP5KkOdWINwSWHrtNNNk8hgZfsE57IMVAtdad%2F%2BjhGnCV7jBvuEyRoZihoW0ZiOqvpj%2FB5%2FYU8tvMvZZks80mbzb%2B6JXGLzeJrMf%2BHf5wIFceFoAmSQEap1ytNig%2FdF5rlARpVw6cLLu%2BNEJbsfwfPjXq643NsS5r&X-Amz-Signature=45293601b1ed93981e09acff774bd9be633439aa163bcbc7e34ba24f476ad802&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZOIIILF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzI1g4cFyfh1cBKrskIWlssOI84WbP0B52qF7Df70meQIhAJnS2FQ0Joxoto8iKevs3fs1%2FlOHT3sWHqdjGjKbmvYqKv8DCH0QABoMNjM3NDIzMTgzODA1Igw2OWTMgzkj3sSGi3gq3ANU%2FIIGppQAF%2BtvlW2sEwpL%2BbQpsp0zWp67GDLLQ%2BMIMqhVnvNTMfm1FXFlxIV7ITBah%2FYDdWXz7cMg5lfXK1KghZNEClV46N8l5zChz09TQQjksAsdbZEI6abXv8BcuwyDQfjbHURaI6kbggc7jpvt6A9si7bIjDGiCKApgMBECvP5ngLLj8ptc8keihLL87cb5WPuQfOOj48MAq%2BjOPTNFD37aqfjllus2ZjTVvSFOpEZURzAMgkYaLAhP4n59LATzrZwdCyR255hZxptUxQ517yfr3WPWgbsIIcOc8pnx6vJrHoG%2FYQmF37pZDsLJIKrdJpmDMfQ4l%2Fkg%2FUUftz2O%2B4%2FPdQ%2F1H3f%2B7gKQzxYTXchuOZM%2FoGQpgg49l7Gn02SKUErfSTqBwpn%2F3hh1hL%2FU%2BdbhD2ac7FuyQmaVIzWWE7b9ESjPhkjJrsSiqgPFECfKP77SCRA%2BZtOrZ9b1cB9muRiTaekWsE%2FCwLqu0kjpJT6nxAl62fOvvWzfGnwaCMU9d1EiU5ZcETZCBMhvvmKoDS3WTtxqE1KU1IioNHHs4BfGMpb3LY35U0acIWcBm8KL0oZe38yXjmWaIfLq4ScqIxmirj80UC3hJAdix%2BJtWbZUS7YiERN2F6BeTD5mfTABjqkAeXDO2LOhkPAFqjzsDx9k8SrJDdH2oels6aY%2BesvRE4rnw9KaenGHTIAgluSP5KkOdWINwSWHrtNNNk8hgZfsE57IMVAtdad%2F%2BjhGnCV7jBvuEyRoZihoW0ZiOqvpj%2FB5%2FYU8tvMvZZks80mbzb%2B6JXGLzeJrMf%2BHf5wIFceFoAmSQEap1ytNig%2FdF5rlARpVw6cLLu%2BNEJbsfwfPjXq643NsS5r&X-Amz-Signature=92506504481d2687926becc3f7488e4a4c088e56d234196860916741549223e5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZOIIILF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzI1g4cFyfh1cBKrskIWlssOI84WbP0B52qF7Df70meQIhAJnS2FQ0Joxoto8iKevs3fs1%2FlOHT3sWHqdjGjKbmvYqKv8DCH0QABoMNjM3NDIzMTgzODA1Igw2OWTMgzkj3sSGi3gq3ANU%2FIIGppQAF%2BtvlW2sEwpL%2BbQpsp0zWp67GDLLQ%2BMIMqhVnvNTMfm1FXFlxIV7ITBah%2FYDdWXz7cMg5lfXK1KghZNEClV46N8l5zChz09TQQjksAsdbZEI6abXv8BcuwyDQfjbHURaI6kbggc7jpvt6A9si7bIjDGiCKApgMBECvP5ngLLj8ptc8keihLL87cb5WPuQfOOj48MAq%2BjOPTNFD37aqfjllus2ZjTVvSFOpEZURzAMgkYaLAhP4n59LATzrZwdCyR255hZxptUxQ517yfr3WPWgbsIIcOc8pnx6vJrHoG%2FYQmF37pZDsLJIKrdJpmDMfQ4l%2Fkg%2FUUftz2O%2B4%2FPdQ%2F1H3f%2B7gKQzxYTXchuOZM%2FoGQpgg49l7Gn02SKUErfSTqBwpn%2F3hh1hL%2FU%2BdbhD2ac7FuyQmaVIzWWE7b9ESjPhkjJrsSiqgPFECfKP77SCRA%2BZtOrZ9b1cB9muRiTaekWsE%2FCwLqu0kjpJT6nxAl62fOvvWzfGnwaCMU9d1EiU5ZcETZCBMhvvmKoDS3WTtxqE1KU1IioNHHs4BfGMpb3LY35U0acIWcBm8KL0oZe38yXjmWaIfLq4ScqIxmirj80UC3hJAdix%2BJtWbZUS7YiERN2F6BeTD5mfTABjqkAeXDO2LOhkPAFqjzsDx9k8SrJDdH2oels6aY%2BesvRE4rnw9KaenGHTIAgluSP5KkOdWINwSWHrtNNNk8hgZfsE57IMVAtdad%2F%2BjhGnCV7jBvuEyRoZihoW0ZiOqvpj%2FB5%2FYU8tvMvZZks80mbzb%2B6JXGLzeJrMf%2BHf5wIFceFoAmSQEap1ytNig%2FdF5rlARpVw6cLLu%2BNEJbsfwfPjXq643NsS5r&X-Amz-Signature=b30e29f8af6a84b3a597b9fb7669c8e2ac4171c00e27cc814541eb71268c2826&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZOIIILF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzI1g4cFyfh1cBKrskIWlssOI84WbP0B52qF7Df70meQIhAJnS2FQ0Joxoto8iKevs3fs1%2FlOHT3sWHqdjGjKbmvYqKv8DCH0QABoMNjM3NDIzMTgzODA1Igw2OWTMgzkj3sSGi3gq3ANU%2FIIGppQAF%2BtvlW2sEwpL%2BbQpsp0zWp67GDLLQ%2BMIMqhVnvNTMfm1FXFlxIV7ITBah%2FYDdWXz7cMg5lfXK1KghZNEClV46N8l5zChz09TQQjksAsdbZEI6abXv8BcuwyDQfjbHURaI6kbggc7jpvt6A9si7bIjDGiCKApgMBECvP5ngLLj8ptc8keihLL87cb5WPuQfOOj48MAq%2BjOPTNFD37aqfjllus2ZjTVvSFOpEZURzAMgkYaLAhP4n59LATzrZwdCyR255hZxptUxQ517yfr3WPWgbsIIcOc8pnx6vJrHoG%2FYQmF37pZDsLJIKrdJpmDMfQ4l%2Fkg%2FUUftz2O%2B4%2FPdQ%2F1H3f%2B7gKQzxYTXchuOZM%2FoGQpgg49l7Gn02SKUErfSTqBwpn%2F3hh1hL%2FU%2BdbhD2ac7FuyQmaVIzWWE7b9ESjPhkjJrsSiqgPFECfKP77SCRA%2BZtOrZ9b1cB9muRiTaekWsE%2FCwLqu0kjpJT6nxAl62fOvvWzfGnwaCMU9d1EiU5ZcETZCBMhvvmKoDS3WTtxqE1KU1IioNHHs4BfGMpb3LY35U0acIWcBm8KL0oZe38yXjmWaIfLq4ScqIxmirj80UC3hJAdix%2BJtWbZUS7YiERN2F6BeTD5mfTABjqkAeXDO2LOhkPAFqjzsDx9k8SrJDdH2oels6aY%2BesvRE4rnw9KaenGHTIAgluSP5KkOdWINwSWHrtNNNk8hgZfsE57IMVAtdad%2F%2BjhGnCV7jBvuEyRoZihoW0ZiOqvpj%2FB5%2FYU8tvMvZZks80mbzb%2B6JXGLzeJrMf%2BHf5wIFceFoAmSQEap1ytNig%2FdF5rlARpVw6cLLu%2BNEJbsfwfPjXq643NsS5r&X-Amz-Signature=ec77e874158d5baff3923581f8ef11c0c9a4b55e7235f0e3fc797260a05a7ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZOIIILF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzI1g4cFyfh1cBKrskIWlssOI84WbP0B52qF7Df70meQIhAJnS2FQ0Joxoto8iKevs3fs1%2FlOHT3sWHqdjGjKbmvYqKv8DCH0QABoMNjM3NDIzMTgzODA1Igw2OWTMgzkj3sSGi3gq3ANU%2FIIGppQAF%2BtvlW2sEwpL%2BbQpsp0zWp67GDLLQ%2BMIMqhVnvNTMfm1FXFlxIV7ITBah%2FYDdWXz7cMg5lfXK1KghZNEClV46N8l5zChz09TQQjksAsdbZEI6abXv8BcuwyDQfjbHURaI6kbggc7jpvt6A9si7bIjDGiCKApgMBECvP5ngLLj8ptc8keihLL87cb5WPuQfOOj48MAq%2BjOPTNFD37aqfjllus2ZjTVvSFOpEZURzAMgkYaLAhP4n59LATzrZwdCyR255hZxptUxQ517yfr3WPWgbsIIcOc8pnx6vJrHoG%2FYQmF37pZDsLJIKrdJpmDMfQ4l%2Fkg%2FUUftz2O%2B4%2FPdQ%2F1H3f%2B7gKQzxYTXchuOZM%2FoGQpgg49l7Gn02SKUErfSTqBwpn%2F3hh1hL%2FU%2BdbhD2ac7FuyQmaVIzWWE7b9ESjPhkjJrsSiqgPFECfKP77SCRA%2BZtOrZ9b1cB9muRiTaekWsE%2FCwLqu0kjpJT6nxAl62fOvvWzfGnwaCMU9d1EiU5ZcETZCBMhvvmKoDS3WTtxqE1KU1IioNHHs4BfGMpb3LY35U0acIWcBm8KL0oZe38yXjmWaIfLq4ScqIxmirj80UC3hJAdix%2BJtWbZUS7YiERN2F6BeTD5mfTABjqkAeXDO2LOhkPAFqjzsDx9k8SrJDdH2oels6aY%2BesvRE4rnw9KaenGHTIAgluSP5KkOdWINwSWHrtNNNk8hgZfsE57IMVAtdad%2F%2BjhGnCV7jBvuEyRoZihoW0ZiOqvpj%2FB5%2FYU8tvMvZZks80mbzb%2B6JXGLzeJrMf%2BHf5wIFceFoAmSQEap1ytNig%2FdF5rlARpVw6cLLu%2BNEJbsfwfPjXq643NsS5r&X-Amz-Signature=6dc82f2638ada309d905fe81c2f5888f87406aa1ef384a2ec6545e3ceb4009a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZOIIILF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzI1g4cFyfh1cBKrskIWlssOI84WbP0B52qF7Df70meQIhAJnS2FQ0Joxoto8iKevs3fs1%2FlOHT3sWHqdjGjKbmvYqKv8DCH0QABoMNjM3NDIzMTgzODA1Igw2OWTMgzkj3sSGi3gq3ANU%2FIIGppQAF%2BtvlW2sEwpL%2BbQpsp0zWp67GDLLQ%2BMIMqhVnvNTMfm1FXFlxIV7ITBah%2FYDdWXz7cMg5lfXK1KghZNEClV46N8l5zChz09TQQjksAsdbZEI6abXv8BcuwyDQfjbHURaI6kbggc7jpvt6A9si7bIjDGiCKApgMBECvP5ngLLj8ptc8keihLL87cb5WPuQfOOj48MAq%2BjOPTNFD37aqfjllus2ZjTVvSFOpEZURzAMgkYaLAhP4n59LATzrZwdCyR255hZxptUxQ517yfr3WPWgbsIIcOc8pnx6vJrHoG%2FYQmF37pZDsLJIKrdJpmDMfQ4l%2Fkg%2FUUftz2O%2B4%2FPdQ%2F1H3f%2B7gKQzxYTXchuOZM%2FoGQpgg49l7Gn02SKUErfSTqBwpn%2F3hh1hL%2FU%2BdbhD2ac7FuyQmaVIzWWE7b9ESjPhkjJrsSiqgPFECfKP77SCRA%2BZtOrZ9b1cB9muRiTaekWsE%2FCwLqu0kjpJT6nxAl62fOvvWzfGnwaCMU9d1EiU5ZcETZCBMhvvmKoDS3WTtxqE1KU1IioNHHs4BfGMpb3LY35U0acIWcBm8KL0oZe38yXjmWaIfLq4ScqIxmirj80UC3hJAdix%2BJtWbZUS7YiERN2F6BeTD5mfTABjqkAeXDO2LOhkPAFqjzsDx9k8SrJDdH2oels6aY%2BesvRE4rnw9KaenGHTIAgluSP5KkOdWINwSWHrtNNNk8hgZfsE57IMVAtdad%2F%2BjhGnCV7jBvuEyRoZihoW0ZiOqvpj%2FB5%2FYU8tvMvZZks80mbzb%2B6JXGLzeJrMf%2BHf5wIFceFoAmSQEap1ytNig%2FdF5rlARpVw6cLLu%2BNEJbsfwfPjXq643NsS5r&X-Amz-Signature=aa361ac9f480dbd325dcd3e419500b50002817b4d172deb025d7b3fe0b656ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZOIIILF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzI1g4cFyfh1cBKrskIWlssOI84WbP0B52qF7Df70meQIhAJnS2FQ0Joxoto8iKevs3fs1%2FlOHT3sWHqdjGjKbmvYqKv8DCH0QABoMNjM3NDIzMTgzODA1Igw2OWTMgzkj3sSGi3gq3ANU%2FIIGppQAF%2BtvlW2sEwpL%2BbQpsp0zWp67GDLLQ%2BMIMqhVnvNTMfm1FXFlxIV7ITBah%2FYDdWXz7cMg5lfXK1KghZNEClV46N8l5zChz09TQQjksAsdbZEI6abXv8BcuwyDQfjbHURaI6kbggc7jpvt6A9si7bIjDGiCKApgMBECvP5ngLLj8ptc8keihLL87cb5WPuQfOOj48MAq%2BjOPTNFD37aqfjllus2ZjTVvSFOpEZURzAMgkYaLAhP4n59LATzrZwdCyR255hZxptUxQ517yfr3WPWgbsIIcOc8pnx6vJrHoG%2FYQmF37pZDsLJIKrdJpmDMfQ4l%2Fkg%2FUUftz2O%2B4%2FPdQ%2F1H3f%2B7gKQzxYTXchuOZM%2FoGQpgg49l7Gn02SKUErfSTqBwpn%2F3hh1hL%2FU%2BdbhD2ac7FuyQmaVIzWWE7b9ESjPhkjJrsSiqgPFECfKP77SCRA%2BZtOrZ9b1cB9muRiTaekWsE%2FCwLqu0kjpJT6nxAl62fOvvWzfGnwaCMU9d1EiU5ZcETZCBMhvvmKoDS3WTtxqE1KU1IioNHHs4BfGMpb3LY35U0acIWcBm8KL0oZe38yXjmWaIfLq4ScqIxmirj80UC3hJAdix%2BJtWbZUS7YiERN2F6BeTD5mfTABjqkAeXDO2LOhkPAFqjzsDx9k8SrJDdH2oels6aY%2BesvRE4rnw9KaenGHTIAgluSP5KkOdWINwSWHrtNNNk8hgZfsE57IMVAtdad%2F%2BjhGnCV7jBvuEyRoZihoW0ZiOqvpj%2FB5%2FYU8tvMvZZks80mbzb%2B6JXGLzeJrMf%2BHf5wIFceFoAmSQEap1ytNig%2FdF5rlARpVw6cLLu%2BNEJbsfwfPjXq643NsS5r&X-Amz-Signature=755fcd0e223919908b990ddb8ced0dfbb3a6ace0814b6d2c9794c73f348252af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZOIIILF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzI1g4cFyfh1cBKrskIWlssOI84WbP0B52qF7Df70meQIhAJnS2FQ0Joxoto8iKevs3fs1%2FlOHT3sWHqdjGjKbmvYqKv8DCH0QABoMNjM3NDIzMTgzODA1Igw2OWTMgzkj3sSGi3gq3ANU%2FIIGppQAF%2BtvlW2sEwpL%2BbQpsp0zWp67GDLLQ%2BMIMqhVnvNTMfm1FXFlxIV7ITBah%2FYDdWXz7cMg5lfXK1KghZNEClV46N8l5zChz09TQQjksAsdbZEI6abXv8BcuwyDQfjbHURaI6kbggc7jpvt6A9si7bIjDGiCKApgMBECvP5ngLLj8ptc8keihLL87cb5WPuQfOOj48MAq%2BjOPTNFD37aqfjllus2ZjTVvSFOpEZURzAMgkYaLAhP4n59LATzrZwdCyR255hZxptUxQ517yfr3WPWgbsIIcOc8pnx6vJrHoG%2FYQmF37pZDsLJIKrdJpmDMfQ4l%2Fkg%2FUUftz2O%2B4%2FPdQ%2F1H3f%2B7gKQzxYTXchuOZM%2FoGQpgg49l7Gn02SKUErfSTqBwpn%2F3hh1hL%2FU%2BdbhD2ac7FuyQmaVIzWWE7b9ESjPhkjJrsSiqgPFECfKP77SCRA%2BZtOrZ9b1cB9muRiTaekWsE%2FCwLqu0kjpJT6nxAl62fOvvWzfGnwaCMU9d1EiU5ZcETZCBMhvvmKoDS3WTtxqE1KU1IioNHHs4BfGMpb3LY35U0acIWcBm8KL0oZe38yXjmWaIfLq4ScqIxmirj80UC3hJAdix%2BJtWbZUS7YiERN2F6BeTD5mfTABjqkAeXDO2LOhkPAFqjzsDx9k8SrJDdH2oels6aY%2BesvRE4rnw9KaenGHTIAgluSP5KkOdWINwSWHrtNNNk8hgZfsE57IMVAtdad%2F%2BjhGnCV7jBvuEyRoZihoW0ZiOqvpj%2FB5%2FYU8tvMvZZks80mbzb%2B6JXGLzeJrMf%2BHf5wIFceFoAmSQEap1ytNig%2FdF5rlARpVw6cLLu%2BNEJbsfwfPjXq643NsS5r&X-Amz-Signature=a2efeede4e6626139a1fbdb997a41144b2d69b01c8491f4c13ad4c817eb036ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
