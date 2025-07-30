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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=80ce9039f9a1a3aab9be9992635aad6b4673a37e95a1ec8567c7e696c4718bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=eb3841cb8d7dc3b888196afbdc0d48c9cf02e096fd34b7c06c6c7097a43678e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=62fbc0f28c1d33508d882d8722c5e6fb9bbbf15afd755dfe02be190df7aa6ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=429d290881ce89d2d18623dfd797f83f7c0cc7db15131584b81a70bffda09768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=3fc452907aa7246a861fad767e5f4cae6af9b0d2fdd33c334db95a0c93c5ff33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=20b8dd4590032e1acc0a35747d522c4c5cac00e75e7b245ff752f991adce9c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=f264f13c88b75e679b74e67fbb87046e47c242b2ce707f070995d06698e203db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=b7db20e956c0392c95d117a3c3d5bc67608ae266bb05eea25f2eeaf772b7ee89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
