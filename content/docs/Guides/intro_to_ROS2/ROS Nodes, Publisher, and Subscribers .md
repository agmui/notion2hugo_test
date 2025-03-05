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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALIYGSG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8qb5D1cjbxNSsoZ8R027vUNTGjTfM6G93HTwxul2UEAiAEedYdHNjUCfjhODT8D6KkXVFe0qQUV4%2FSDfk6qSb6Dir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIv8JY%2Bq%2F76Li%2FQYDKtwDa42D7q4zfyEDDoOcZF%2BxM1X9Cj7NyxBS7o1GjRZhpChdYNEUOPTVQEVSf1rYocxAvV1qGfwnT8dwUn2C4b3ep2XC3oJmAqz%2BwdMHH9BUdyLvhSXVhKUx2UhMJOFA93Jc5ZZBMGopqpA%2FnVjKc7lxDywwo5iCDhkpex8XuBas%2Fh16L6x2ZMupWJw%2B4A%2Fpecv5GUYGeg1xvQkMdX2d8SAHueCPBIcpAgG1LqTxMxFeaHTfgHH1d98zsdMhTHKkzAOuH6OfyMZcpCStcUNIUi3%2FNGPPZOLy78h%2B7Qs13VyTKGxw%2BYIxycCKTPHA1HqnwCbM86fTqD8TnCNsV8YenY78AOwd4O5ezLdVZBADUf54rNngpcWAj1wP%2BTy6t4WpueXKKvSfm176vEZ3Wn2cedryTYF3SngF9hE2zCeDlQFt4jgcvEr1Fv%2BwGLdXl7fSFdMx%2BB23ZastqihY68mg44crUukhNDHygv6flYktCaM4WL4D2p1TkB%2F7lCYkmBRRgAvSk%2BwbJJaKqkHX6JDS76WuD0dBjlHh%2BjwzcYEw15qcnYzZ%2BHK6MfU3%2FT76Y1xuTdWseSvGG9Yxz%2F9RbEuGLb2UyFiiI4%2BUUlGNl8PwCpYQx3I3C7hMIqVRmVe62c0w7a6gvgY6pgHJmsUrYVLWTK7eNOcUPHgBIxxJQo6FLSY3QtFppmTsfAZhZZgdATDPgMJXmZe3l5nDKPpHGjjAUxZqHt3WQZsWag84wkqf6ktoK%2F%2FgUIgFNQii6UzWz71z99eKjJq5fgeIaBetPILrzVBCo4zZxEEZjmjFIQEptq1niS0i0S3XtbIgmPE0FMyVg9Eahq%2FDL752TSxlgObUBbKgA%2Fo9mjbCJVhX%2BRJV&X-Amz-Signature=024daf2ddc7bf1c2f2bcfc42cac9396d9811a2d8d2fd7729a2c3a92e2eec5791&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALIYGSG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8qb5D1cjbxNSsoZ8R027vUNTGjTfM6G93HTwxul2UEAiAEedYdHNjUCfjhODT8D6KkXVFe0qQUV4%2FSDfk6qSb6Dir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIv8JY%2Bq%2F76Li%2FQYDKtwDa42D7q4zfyEDDoOcZF%2BxM1X9Cj7NyxBS7o1GjRZhpChdYNEUOPTVQEVSf1rYocxAvV1qGfwnT8dwUn2C4b3ep2XC3oJmAqz%2BwdMHH9BUdyLvhSXVhKUx2UhMJOFA93Jc5ZZBMGopqpA%2FnVjKc7lxDywwo5iCDhkpex8XuBas%2Fh16L6x2ZMupWJw%2B4A%2Fpecv5GUYGeg1xvQkMdX2d8SAHueCPBIcpAgG1LqTxMxFeaHTfgHH1d98zsdMhTHKkzAOuH6OfyMZcpCStcUNIUi3%2FNGPPZOLy78h%2B7Qs13VyTKGxw%2BYIxycCKTPHA1HqnwCbM86fTqD8TnCNsV8YenY78AOwd4O5ezLdVZBADUf54rNngpcWAj1wP%2BTy6t4WpueXKKvSfm176vEZ3Wn2cedryTYF3SngF9hE2zCeDlQFt4jgcvEr1Fv%2BwGLdXl7fSFdMx%2BB23ZastqihY68mg44crUukhNDHygv6flYktCaM4WL4D2p1TkB%2F7lCYkmBRRgAvSk%2BwbJJaKqkHX6JDS76WuD0dBjlHh%2BjwzcYEw15qcnYzZ%2BHK6MfU3%2FT76Y1xuTdWseSvGG9Yxz%2F9RbEuGLb2UyFiiI4%2BUUlGNl8PwCpYQx3I3C7hMIqVRmVe62c0w7a6gvgY6pgHJmsUrYVLWTK7eNOcUPHgBIxxJQo6FLSY3QtFppmTsfAZhZZgdATDPgMJXmZe3l5nDKPpHGjjAUxZqHt3WQZsWag84wkqf6ktoK%2F%2FgUIgFNQii6UzWz71z99eKjJq5fgeIaBetPILrzVBCo4zZxEEZjmjFIQEptq1niS0i0S3XtbIgmPE0FMyVg9Eahq%2FDL752TSxlgObUBbKgA%2Fo9mjbCJVhX%2BRJV&X-Amz-Signature=67566fad936af1b4b4b8d869703d65cee1d775ea15f8d8408aa8f6894ae26c80&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALIYGSG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8qb5D1cjbxNSsoZ8R027vUNTGjTfM6G93HTwxul2UEAiAEedYdHNjUCfjhODT8D6KkXVFe0qQUV4%2FSDfk6qSb6Dir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIv8JY%2Bq%2F76Li%2FQYDKtwDa42D7q4zfyEDDoOcZF%2BxM1X9Cj7NyxBS7o1GjRZhpChdYNEUOPTVQEVSf1rYocxAvV1qGfwnT8dwUn2C4b3ep2XC3oJmAqz%2BwdMHH9BUdyLvhSXVhKUx2UhMJOFA93Jc5ZZBMGopqpA%2FnVjKc7lxDywwo5iCDhkpex8XuBas%2Fh16L6x2ZMupWJw%2B4A%2Fpecv5GUYGeg1xvQkMdX2d8SAHueCPBIcpAgG1LqTxMxFeaHTfgHH1d98zsdMhTHKkzAOuH6OfyMZcpCStcUNIUi3%2FNGPPZOLy78h%2B7Qs13VyTKGxw%2BYIxycCKTPHA1HqnwCbM86fTqD8TnCNsV8YenY78AOwd4O5ezLdVZBADUf54rNngpcWAj1wP%2BTy6t4WpueXKKvSfm176vEZ3Wn2cedryTYF3SngF9hE2zCeDlQFt4jgcvEr1Fv%2BwGLdXl7fSFdMx%2BB23ZastqihY68mg44crUukhNDHygv6flYktCaM4WL4D2p1TkB%2F7lCYkmBRRgAvSk%2BwbJJaKqkHX6JDS76WuD0dBjlHh%2BjwzcYEw15qcnYzZ%2BHK6MfU3%2FT76Y1xuTdWseSvGG9Yxz%2F9RbEuGLb2UyFiiI4%2BUUlGNl8PwCpYQx3I3C7hMIqVRmVe62c0w7a6gvgY6pgHJmsUrYVLWTK7eNOcUPHgBIxxJQo6FLSY3QtFppmTsfAZhZZgdATDPgMJXmZe3l5nDKPpHGjjAUxZqHt3WQZsWag84wkqf6ktoK%2F%2FgUIgFNQii6UzWz71z99eKjJq5fgeIaBetPILrzVBCo4zZxEEZjmjFIQEptq1niS0i0S3XtbIgmPE0FMyVg9Eahq%2FDL752TSxlgObUBbKgA%2Fo9mjbCJVhX%2BRJV&X-Amz-Signature=042f0f94621b6cb1773f1214c3ce04473739bf5ef94d171df33ab1b5472d5f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALIYGSG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8qb5D1cjbxNSsoZ8R027vUNTGjTfM6G93HTwxul2UEAiAEedYdHNjUCfjhODT8D6KkXVFe0qQUV4%2FSDfk6qSb6Dir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIv8JY%2Bq%2F76Li%2FQYDKtwDa42D7q4zfyEDDoOcZF%2BxM1X9Cj7NyxBS7o1GjRZhpChdYNEUOPTVQEVSf1rYocxAvV1qGfwnT8dwUn2C4b3ep2XC3oJmAqz%2BwdMHH9BUdyLvhSXVhKUx2UhMJOFA93Jc5ZZBMGopqpA%2FnVjKc7lxDywwo5iCDhkpex8XuBas%2Fh16L6x2ZMupWJw%2B4A%2Fpecv5GUYGeg1xvQkMdX2d8SAHueCPBIcpAgG1LqTxMxFeaHTfgHH1d98zsdMhTHKkzAOuH6OfyMZcpCStcUNIUi3%2FNGPPZOLy78h%2B7Qs13VyTKGxw%2BYIxycCKTPHA1HqnwCbM86fTqD8TnCNsV8YenY78AOwd4O5ezLdVZBADUf54rNngpcWAj1wP%2BTy6t4WpueXKKvSfm176vEZ3Wn2cedryTYF3SngF9hE2zCeDlQFt4jgcvEr1Fv%2BwGLdXl7fSFdMx%2BB23ZastqihY68mg44crUukhNDHygv6flYktCaM4WL4D2p1TkB%2F7lCYkmBRRgAvSk%2BwbJJaKqkHX6JDS76WuD0dBjlHh%2BjwzcYEw15qcnYzZ%2BHK6MfU3%2FT76Y1xuTdWseSvGG9Yxz%2F9RbEuGLb2UyFiiI4%2BUUlGNl8PwCpYQx3I3C7hMIqVRmVe62c0w7a6gvgY6pgHJmsUrYVLWTK7eNOcUPHgBIxxJQo6FLSY3QtFppmTsfAZhZZgdATDPgMJXmZe3l5nDKPpHGjjAUxZqHt3WQZsWag84wkqf6ktoK%2F%2FgUIgFNQii6UzWz71z99eKjJq5fgeIaBetPILrzVBCo4zZxEEZjmjFIQEptq1niS0i0S3XtbIgmPE0FMyVg9Eahq%2FDL752TSxlgObUBbKgA%2Fo9mjbCJVhX%2BRJV&X-Amz-Signature=b418ae0f333b9722d85d4e08ad2b3aa674e88d9dd9ddfc2a5b7fe8faee1a6e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALIYGSG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8qb5D1cjbxNSsoZ8R027vUNTGjTfM6G93HTwxul2UEAiAEedYdHNjUCfjhODT8D6KkXVFe0qQUV4%2FSDfk6qSb6Dir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIv8JY%2Bq%2F76Li%2FQYDKtwDa42D7q4zfyEDDoOcZF%2BxM1X9Cj7NyxBS7o1GjRZhpChdYNEUOPTVQEVSf1rYocxAvV1qGfwnT8dwUn2C4b3ep2XC3oJmAqz%2BwdMHH9BUdyLvhSXVhKUx2UhMJOFA93Jc5ZZBMGopqpA%2FnVjKc7lxDywwo5iCDhkpex8XuBas%2Fh16L6x2ZMupWJw%2B4A%2Fpecv5GUYGeg1xvQkMdX2d8SAHueCPBIcpAgG1LqTxMxFeaHTfgHH1d98zsdMhTHKkzAOuH6OfyMZcpCStcUNIUi3%2FNGPPZOLy78h%2B7Qs13VyTKGxw%2BYIxycCKTPHA1HqnwCbM86fTqD8TnCNsV8YenY78AOwd4O5ezLdVZBADUf54rNngpcWAj1wP%2BTy6t4WpueXKKvSfm176vEZ3Wn2cedryTYF3SngF9hE2zCeDlQFt4jgcvEr1Fv%2BwGLdXl7fSFdMx%2BB23ZastqihY68mg44crUukhNDHygv6flYktCaM4WL4D2p1TkB%2F7lCYkmBRRgAvSk%2BwbJJaKqkHX6JDS76WuD0dBjlHh%2BjwzcYEw15qcnYzZ%2BHK6MfU3%2FT76Y1xuTdWseSvGG9Yxz%2F9RbEuGLb2UyFiiI4%2BUUlGNl8PwCpYQx3I3C7hMIqVRmVe62c0w7a6gvgY6pgHJmsUrYVLWTK7eNOcUPHgBIxxJQo6FLSY3QtFppmTsfAZhZZgdATDPgMJXmZe3l5nDKPpHGjjAUxZqHt3WQZsWag84wkqf6ktoK%2F%2FgUIgFNQii6UzWz71z99eKjJq5fgeIaBetPILrzVBCo4zZxEEZjmjFIQEptq1niS0i0S3XtbIgmPE0FMyVg9Eahq%2FDL752TSxlgObUBbKgA%2Fo9mjbCJVhX%2BRJV&X-Amz-Signature=788467a075c52a73b5d3782ad9d461bdeb1e25a88223b275731632e3f0e0e6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALIYGSG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8qb5D1cjbxNSsoZ8R027vUNTGjTfM6G93HTwxul2UEAiAEedYdHNjUCfjhODT8D6KkXVFe0qQUV4%2FSDfk6qSb6Dir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIv8JY%2Bq%2F76Li%2FQYDKtwDa42D7q4zfyEDDoOcZF%2BxM1X9Cj7NyxBS7o1GjRZhpChdYNEUOPTVQEVSf1rYocxAvV1qGfwnT8dwUn2C4b3ep2XC3oJmAqz%2BwdMHH9BUdyLvhSXVhKUx2UhMJOFA93Jc5ZZBMGopqpA%2FnVjKc7lxDywwo5iCDhkpex8XuBas%2Fh16L6x2ZMupWJw%2B4A%2Fpecv5GUYGeg1xvQkMdX2d8SAHueCPBIcpAgG1LqTxMxFeaHTfgHH1d98zsdMhTHKkzAOuH6OfyMZcpCStcUNIUi3%2FNGPPZOLy78h%2B7Qs13VyTKGxw%2BYIxycCKTPHA1HqnwCbM86fTqD8TnCNsV8YenY78AOwd4O5ezLdVZBADUf54rNngpcWAj1wP%2BTy6t4WpueXKKvSfm176vEZ3Wn2cedryTYF3SngF9hE2zCeDlQFt4jgcvEr1Fv%2BwGLdXl7fSFdMx%2BB23ZastqihY68mg44crUukhNDHygv6flYktCaM4WL4D2p1TkB%2F7lCYkmBRRgAvSk%2BwbJJaKqkHX6JDS76WuD0dBjlHh%2BjwzcYEw15qcnYzZ%2BHK6MfU3%2FT76Y1xuTdWseSvGG9Yxz%2F9RbEuGLb2UyFiiI4%2BUUlGNl8PwCpYQx3I3C7hMIqVRmVe62c0w7a6gvgY6pgHJmsUrYVLWTK7eNOcUPHgBIxxJQo6FLSY3QtFppmTsfAZhZZgdATDPgMJXmZe3l5nDKPpHGjjAUxZqHt3WQZsWag84wkqf6ktoK%2F%2FgUIgFNQii6UzWz71z99eKjJq5fgeIaBetPILrzVBCo4zZxEEZjmjFIQEptq1niS0i0S3XtbIgmPE0FMyVg9Eahq%2FDL752TSxlgObUBbKgA%2Fo9mjbCJVhX%2BRJV&X-Amz-Signature=acef77c5f9d9e27c69cc6d30363cf584fb120efbee1c1e880b942988b88b594b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALIYGSG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8qb5D1cjbxNSsoZ8R027vUNTGjTfM6G93HTwxul2UEAiAEedYdHNjUCfjhODT8D6KkXVFe0qQUV4%2FSDfk6qSb6Dir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIv8JY%2Bq%2F76Li%2FQYDKtwDa42D7q4zfyEDDoOcZF%2BxM1X9Cj7NyxBS7o1GjRZhpChdYNEUOPTVQEVSf1rYocxAvV1qGfwnT8dwUn2C4b3ep2XC3oJmAqz%2BwdMHH9BUdyLvhSXVhKUx2UhMJOFA93Jc5ZZBMGopqpA%2FnVjKc7lxDywwo5iCDhkpex8XuBas%2Fh16L6x2ZMupWJw%2B4A%2Fpecv5GUYGeg1xvQkMdX2d8SAHueCPBIcpAgG1LqTxMxFeaHTfgHH1d98zsdMhTHKkzAOuH6OfyMZcpCStcUNIUi3%2FNGPPZOLy78h%2B7Qs13VyTKGxw%2BYIxycCKTPHA1HqnwCbM86fTqD8TnCNsV8YenY78AOwd4O5ezLdVZBADUf54rNngpcWAj1wP%2BTy6t4WpueXKKvSfm176vEZ3Wn2cedryTYF3SngF9hE2zCeDlQFt4jgcvEr1Fv%2BwGLdXl7fSFdMx%2BB23ZastqihY68mg44crUukhNDHygv6flYktCaM4WL4D2p1TkB%2F7lCYkmBRRgAvSk%2BwbJJaKqkHX6JDS76WuD0dBjlHh%2BjwzcYEw15qcnYzZ%2BHK6MfU3%2FT76Y1xuTdWseSvGG9Yxz%2F9RbEuGLb2UyFiiI4%2BUUlGNl8PwCpYQx3I3C7hMIqVRmVe62c0w7a6gvgY6pgHJmsUrYVLWTK7eNOcUPHgBIxxJQo6FLSY3QtFppmTsfAZhZZgdATDPgMJXmZe3l5nDKPpHGjjAUxZqHt3WQZsWag84wkqf6ktoK%2F%2FgUIgFNQii6UzWz71z99eKjJq5fgeIaBetPILrzVBCo4zZxEEZjmjFIQEptq1niS0i0S3XtbIgmPE0FMyVg9Eahq%2FDL752TSxlgObUBbKgA%2Fo9mjbCJVhX%2BRJV&X-Amz-Signature=69f90d3302e6394653c3811e7d825f1f2c7f481f58dc63b913b18d25dc490f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALIYGSG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8qb5D1cjbxNSsoZ8R027vUNTGjTfM6G93HTwxul2UEAiAEedYdHNjUCfjhODT8D6KkXVFe0qQUV4%2FSDfk6qSb6Dir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIv8JY%2Bq%2F76Li%2FQYDKtwDa42D7q4zfyEDDoOcZF%2BxM1X9Cj7NyxBS7o1GjRZhpChdYNEUOPTVQEVSf1rYocxAvV1qGfwnT8dwUn2C4b3ep2XC3oJmAqz%2BwdMHH9BUdyLvhSXVhKUx2UhMJOFA93Jc5ZZBMGopqpA%2FnVjKc7lxDywwo5iCDhkpex8XuBas%2Fh16L6x2ZMupWJw%2B4A%2Fpecv5GUYGeg1xvQkMdX2d8SAHueCPBIcpAgG1LqTxMxFeaHTfgHH1d98zsdMhTHKkzAOuH6OfyMZcpCStcUNIUi3%2FNGPPZOLy78h%2B7Qs13VyTKGxw%2BYIxycCKTPHA1HqnwCbM86fTqD8TnCNsV8YenY78AOwd4O5ezLdVZBADUf54rNngpcWAj1wP%2BTy6t4WpueXKKvSfm176vEZ3Wn2cedryTYF3SngF9hE2zCeDlQFt4jgcvEr1Fv%2BwGLdXl7fSFdMx%2BB23ZastqihY68mg44crUukhNDHygv6flYktCaM4WL4D2p1TkB%2F7lCYkmBRRgAvSk%2BwbJJaKqkHX6JDS76WuD0dBjlHh%2BjwzcYEw15qcnYzZ%2BHK6MfU3%2FT76Y1xuTdWseSvGG9Yxz%2F9RbEuGLb2UyFiiI4%2BUUlGNl8PwCpYQx3I3C7hMIqVRmVe62c0w7a6gvgY6pgHJmsUrYVLWTK7eNOcUPHgBIxxJQo6FLSY3QtFppmTsfAZhZZgdATDPgMJXmZe3l5nDKPpHGjjAUxZqHt3WQZsWag84wkqf6ktoK%2F%2FgUIgFNQii6UzWz71z99eKjJq5fgeIaBetPILrzVBCo4zZxEEZjmjFIQEptq1niS0i0S3XtbIgmPE0FMyVg9Eahq%2FDL752TSxlgObUBbKgA%2Fo9mjbCJVhX%2BRJV&X-Amz-Signature=da4e7c0720e70fbe21f2b0b8a4b80b6d6a5911425a242cca2b2edc1dffecda3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
