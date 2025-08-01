---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KMGGEM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgzfOTcbALYhUL7Xl72iOGqIiVbobffMJ1DM2kSGXzQwIgAJvtwP%2B1pJreqC5GfE6R1BK19FykP2o7jARHWDAUF0YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2FE7az7JFYdCQ5xircA6yFSf3%2FjuJI4b%2FGKsvZeQU49SwU5OnuhM0ZVBmqx15Aa%2BC0hpYJwZ2MQeHPP6k3Vz%2F3a8jVm6jqW7c8j5bXYm%2BgnhbUT8c7iC8dNsuSCYodhSPjCE4Xj%2BSUu6PEmrbdz2D4%2FkOjB7ODf9Mmhsk9GjmWiM9snHzzCobi4iqKK9uReFnjeeGZNu30GCROAMnT%2Bh0RIGIuCSYdumYo6B12Jl7%2BztMO3845cla5VnGLjF0s55rCqa8JqM%2BfZBWJ0OuA8mC7Tecza8ovoSEuitqYVP8CzAHPEvF2NAQr%2FtTdp5Oa28HrbnpVzDeSt70PvvqOg5VMzd9RsUS4fKrLtaBPAU0qAOWvh%2FNlvXMDIlouJy%2BHgP9iVDm%2BNEksb8ZA0ZMlXFrxyShItivkMVkQXKUNRHAAoeUxkJgKIopWXmXGJV5xBaTk2y%2FuaGhPvJoxQ3CqaXi8vKVSY8DfIVWnJY3oeIR9iw6My8h9VCUTw2fECDO%2F3WEwdDw1TNHEEq2rKs1MSR0a0ac6VtIaeAuEYe26HoCHMxNldaw18EHUOdVv6%2BERvXbZ6b%2FJwqquG5sNtLUX9yQVN6z9He6PL10n1y8EC%2F5ICzXvY1LFb5cOPTfI8JhlEbxv1l3Bp6Kx8Nw9MOeJs8QGOqUBq3trcDQOjq0BA5EQbgCDKVxF9YeyDMjVPDWiac6p6tIXPJkCE%2BOjY28RH37YgcoBwd7mEX2RaxpzLwP8hA%2FOA2mRXWdoEFJa%2FzEy2dTenczWbf1VvwlZSccXJGBZKgtJx6hGwFfCckILxWV0xQgiECeGBaH%2BXCfjnaqchZwsw0DOvXKnuIL3tEp9blOY3WCjXQz3Qef6Gfg6iAp2uqITsE9UEf7W&X-Amz-Signature=f209a5893a0e266d4528597639062d1ee6efdd103073cb5ec85cb90564f83ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KMGGEM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgzfOTcbALYhUL7Xl72iOGqIiVbobffMJ1DM2kSGXzQwIgAJvtwP%2B1pJreqC5GfE6R1BK19FykP2o7jARHWDAUF0YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2FE7az7JFYdCQ5xircA6yFSf3%2FjuJI4b%2FGKsvZeQU49SwU5OnuhM0ZVBmqx15Aa%2BC0hpYJwZ2MQeHPP6k3Vz%2F3a8jVm6jqW7c8j5bXYm%2BgnhbUT8c7iC8dNsuSCYodhSPjCE4Xj%2BSUu6PEmrbdz2D4%2FkOjB7ODf9Mmhsk9GjmWiM9snHzzCobi4iqKK9uReFnjeeGZNu30GCROAMnT%2Bh0RIGIuCSYdumYo6B12Jl7%2BztMO3845cla5VnGLjF0s55rCqa8JqM%2BfZBWJ0OuA8mC7Tecza8ovoSEuitqYVP8CzAHPEvF2NAQr%2FtTdp5Oa28HrbnpVzDeSt70PvvqOg5VMzd9RsUS4fKrLtaBPAU0qAOWvh%2FNlvXMDIlouJy%2BHgP9iVDm%2BNEksb8ZA0ZMlXFrxyShItivkMVkQXKUNRHAAoeUxkJgKIopWXmXGJV5xBaTk2y%2FuaGhPvJoxQ3CqaXi8vKVSY8DfIVWnJY3oeIR9iw6My8h9VCUTw2fECDO%2F3WEwdDw1TNHEEq2rKs1MSR0a0ac6VtIaeAuEYe26HoCHMxNldaw18EHUOdVv6%2BERvXbZ6b%2FJwqquG5sNtLUX9yQVN6z9He6PL10n1y8EC%2F5ICzXvY1LFb5cOPTfI8JhlEbxv1l3Bp6Kx8Nw9MOeJs8QGOqUBq3trcDQOjq0BA5EQbgCDKVxF9YeyDMjVPDWiac6p6tIXPJkCE%2BOjY28RH37YgcoBwd7mEX2RaxpzLwP8hA%2FOA2mRXWdoEFJa%2FzEy2dTenczWbf1VvwlZSccXJGBZKgtJx6hGwFfCckILxWV0xQgiECeGBaH%2BXCfjnaqchZwsw0DOvXKnuIL3tEp9blOY3WCjXQz3Qef6Gfg6iAp2uqITsE9UEf7W&X-Amz-Signature=86c37a193ed036bf49fd2c907564076711e5f9b8d6178480448d0c2b70d76098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KMGGEM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgzfOTcbALYhUL7Xl72iOGqIiVbobffMJ1DM2kSGXzQwIgAJvtwP%2B1pJreqC5GfE6R1BK19FykP2o7jARHWDAUF0YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2FE7az7JFYdCQ5xircA6yFSf3%2FjuJI4b%2FGKsvZeQU49SwU5OnuhM0ZVBmqx15Aa%2BC0hpYJwZ2MQeHPP6k3Vz%2F3a8jVm6jqW7c8j5bXYm%2BgnhbUT8c7iC8dNsuSCYodhSPjCE4Xj%2BSUu6PEmrbdz2D4%2FkOjB7ODf9Mmhsk9GjmWiM9snHzzCobi4iqKK9uReFnjeeGZNu30GCROAMnT%2Bh0RIGIuCSYdumYo6B12Jl7%2BztMO3845cla5VnGLjF0s55rCqa8JqM%2BfZBWJ0OuA8mC7Tecza8ovoSEuitqYVP8CzAHPEvF2NAQr%2FtTdp5Oa28HrbnpVzDeSt70PvvqOg5VMzd9RsUS4fKrLtaBPAU0qAOWvh%2FNlvXMDIlouJy%2BHgP9iVDm%2BNEksb8ZA0ZMlXFrxyShItivkMVkQXKUNRHAAoeUxkJgKIopWXmXGJV5xBaTk2y%2FuaGhPvJoxQ3CqaXi8vKVSY8DfIVWnJY3oeIR9iw6My8h9VCUTw2fECDO%2F3WEwdDw1TNHEEq2rKs1MSR0a0ac6VtIaeAuEYe26HoCHMxNldaw18EHUOdVv6%2BERvXbZ6b%2FJwqquG5sNtLUX9yQVN6z9He6PL10n1y8EC%2F5ICzXvY1LFb5cOPTfI8JhlEbxv1l3Bp6Kx8Nw9MOeJs8QGOqUBq3trcDQOjq0BA5EQbgCDKVxF9YeyDMjVPDWiac6p6tIXPJkCE%2BOjY28RH37YgcoBwd7mEX2RaxpzLwP8hA%2FOA2mRXWdoEFJa%2FzEy2dTenczWbf1VvwlZSccXJGBZKgtJx6hGwFfCckILxWV0xQgiECeGBaH%2BXCfjnaqchZwsw0DOvXKnuIL3tEp9blOY3WCjXQz3Qef6Gfg6iAp2uqITsE9UEf7W&X-Amz-Signature=a5827d4156dc015853fc02bfab7daa83feef431ce1ea8b669ac25b87e725aa62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KMGGEM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgzfOTcbALYhUL7Xl72iOGqIiVbobffMJ1DM2kSGXzQwIgAJvtwP%2B1pJreqC5GfE6R1BK19FykP2o7jARHWDAUF0YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2FE7az7JFYdCQ5xircA6yFSf3%2FjuJI4b%2FGKsvZeQU49SwU5OnuhM0ZVBmqx15Aa%2BC0hpYJwZ2MQeHPP6k3Vz%2F3a8jVm6jqW7c8j5bXYm%2BgnhbUT8c7iC8dNsuSCYodhSPjCE4Xj%2BSUu6PEmrbdz2D4%2FkOjB7ODf9Mmhsk9GjmWiM9snHzzCobi4iqKK9uReFnjeeGZNu30GCROAMnT%2Bh0RIGIuCSYdumYo6B12Jl7%2BztMO3845cla5VnGLjF0s55rCqa8JqM%2BfZBWJ0OuA8mC7Tecza8ovoSEuitqYVP8CzAHPEvF2NAQr%2FtTdp5Oa28HrbnpVzDeSt70PvvqOg5VMzd9RsUS4fKrLtaBPAU0qAOWvh%2FNlvXMDIlouJy%2BHgP9iVDm%2BNEksb8ZA0ZMlXFrxyShItivkMVkQXKUNRHAAoeUxkJgKIopWXmXGJV5xBaTk2y%2FuaGhPvJoxQ3CqaXi8vKVSY8DfIVWnJY3oeIR9iw6My8h9VCUTw2fECDO%2F3WEwdDw1TNHEEq2rKs1MSR0a0ac6VtIaeAuEYe26HoCHMxNldaw18EHUOdVv6%2BERvXbZ6b%2FJwqquG5sNtLUX9yQVN6z9He6PL10n1y8EC%2F5ICzXvY1LFb5cOPTfI8JhlEbxv1l3Bp6Kx8Nw9MOeJs8QGOqUBq3trcDQOjq0BA5EQbgCDKVxF9YeyDMjVPDWiac6p6tIXPJkCE%2BOjY28RH37YgcoBwd7mEX2RaxpzLwP8hA%2FOA2mRXWdoEFJa%2FzEy2dTenczWbf1VvwlZSccXJGBZKgtJx6hGwFfCckILxWV0xQgiECeGBaH%2BXCfjnaqchZwsw0DOvXKnuIL3tEp9blOY3WCjXQz3Qef6Gfg6iAp2uqITsE9UEf7W&X-Amz-Signature=7dcd2830bb5ecddd318a311fcb0e50f381d63c9b5d668a9f04291bac3d6e6393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KMGGEM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgzfOTcbALYhUL7Xl72iOGqIiVbobffMJ1DM2kSGXzQwIgAJvtwP%2B1pJreqC5GfE6R1BK19FykP2o7jARHWDAUF0YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2FE7az7JFYdCQ5xircA6yFSf3%2FjuJI4b%2FGKsvZeQU49SwU5OnuhM0ZVBmqx15Aa%2BC0hpYJwZ2MQeHPP6k3Vz%2F3a8jVm6jqW7c8j5bXYm%2BgnhbUT8c7iC8dNsuSCYodhSPjCE4Xj%2BSUu6PEmrbdz2D4%2FkOjB7ODf9Mmhsk9GjmWiM9snHzzCobi4iqKK9uReFnjeeGZNu30GCROAMnT%2Bh0RIGIuCSYdumYo6B12Jl7%2BztMO3845cla5VnGLjF0s55rCqa8JqM%2BfZBWJ0OuA8mC7Tecza8ovoSEuitqYVP8CzAHPEvF2NAQr%2FtTdp5Oa28HrbnpVzDeSt70PvvqOg5VMzd9RsUS4fKrLtaBPAU0qAOWvh%2FNlvXMDIlouJy%2BHgP9iVDm%2BNEksb8ZA0ZMlXFrxyShItivkMVkQXKUNRHAAoeUxkJgKIopWXmXGJV5xBaTk2y%2FuaGhPvJoxQ3CqaXi8vKVSY8DfIVWnJY3oeIR9iw6My8h9VCUTw2fECDO%2F3WEwdDw1TNHEEq2rKs1MSR0a0ac6VtIaeAuEYe26HoCHMxNldaw18EHUOdVv6%2BERvXbZ6b%2FJwqquG5sNtLUX9yQVN6z9He6PL10n1y8EC%2F5ICzXvY1LFb5cOPTfI8JhlEbxv1l3Bp6Kx8Nw9MOeJs8QGOqUBq3trcDQOjq0BA5EQbgCDKVxF9YeyDMjVPDWiac6p6tIXPJkCE%2BOjY28RH37YgcoBwd7mEX2RaxpzLwP8hA%2FOA2mRXWdoEFJa%2FzEy2dTenczWbf1VvwlZSccXJGBZKgtJx6hGwFfCckILxWV0xQgiECeGBaH%2BXCfjnaqchZwsw0DOvXKnuIL3tEp9blOY3WCjXQz3Qef6Gfg6iAp2uqITsE9UEf7W&X-Amz-Signature=5ced59db43d4f40b10da6f65c0916d8631918e16a94fef58071c796dcec36fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KMGGEM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgzfOTcbALYhUL7Xl72iOGqIiVbobffMJ1DM2kSGXzQwIgAJvtwP%2B1pJreqC5GfE6R1BK19FykP2o7jARHWDAUF0YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2FE7az7JFYdCQ5xircA6yFSf3%2FjuJI4b%2FGKsvZeQU49SwU5OnuhM0ZVBmqx15Aa%2BC0hpYJwZ2MQeHPP6k3Vz%2F3a8jVm6jqW7c8j5bXYm%2BgnhbUT8c7iC8dNsuSCYodhSPjCE4Xj%2BSUu6PEmrbdz2D4%2FkOjB7ODf9Mmhsk9GjmWiM9snHzzCobi4iqKK9uReFnjeeGZNu30GCROAMnT%2Bh0RIGIuCSYdumYo6B12Jl7%2BztMO3845cla5VnGLjF0s55rCqa8JqM%2BfZBWJ0OuA8mC7Tecza8ovoSEuitqYVP8CzAHPEvF2NAQr%2FtTdp5Oa28HrbnpVzDeSt70PvvqOg5VMzd9RsUS4fKrLtaBPAU0qAOWvh%2FNlvXMDIlouJy%2BHgP9iVDm%2BNEksb8ZA0ZMlXFrxyShItivkMVkQXKUNRHAAoeUxkJgKIopWXmXGJV5xBaTk2y%2FuaGhPvJoxQ3CqaXi8vKVSY8DfIVWnJY3oeIR9iw6My8h9VCUTw2fECDO%2F3WEwdDw1TNHEEq2rKs1MSR0a0ac6VtIaeAuEYe26HoCHMxNldaw18EHUOdVv6%2BERvXbZ6b%2FJwqquG5sNtLUX9yQVN6z9He6PL10n1y8EC%2F5ICzXvY1LFb5cOPTfI8JhlEbxv1l3Bp6Kx8Nw9MOeJs8QGOqUBq3trcDQOjq0BA5EQbgCDKVxF9YeyDMjVPDWiac6p6tIXPJkCE%2BOjY28RH37YgcoBwd7mEX2RaxpzLwP8hA%2FOA2mRXWdoEFJa%2FzEy2dTenczWbf1VvwlZSccXJGBZKgtJx6hGwFfCckILxWV0xQgiECeGBaH%2BXCfjnaqchZwsw0DOvXKnuIL3tEp9blOY3WCjXQz3Qef6Gfg6iAp2uqITsE9UEf7W&X-Amz-Signature=dc63d67132b08b8f908b5ca99b5ace19e99af394253b8ffba82cc859578d9a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KMGGEM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgzfOTcbALYhUL7Xl72iOGqIiVbobffMJ1DM2kSGXzQwIgAJvtwP%2B1pJreqC5GfE6R1BK19FykP2o7jARHWDAUF0YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2FE7az7JFYdCQ5xircA6yFSf3%2FjuJI4b%2FGKsvZeQU49SwU5OnuhM0ZVBmqx15Aa%2BC0hpYJwZ2MQeHPP6k3Vz%2F3a8jVm6jqW7c8j5bXYm%2BgnhbUT8c7iC8dNsuSCYodhSPjCE4Xj%2BSUu6PEmrbdz2D4%2FkOjB7ODf9Mmhsk9GjmWiM9snHzzCobi4iqKK9uReFnjeeGZNu30GCROAMnT%2Bh0RIGIuCSYdumYo6B12Jl7%2BztMO3845cla5VnGLjF0s55rCqa8JqM%2BfZBWJ0OuA8mC7Tecza8ovoSEuitqYVP8CzAHPEvF2NAQr%2FtTdp5Oa28HrbnpVzDeSt70PvvqOg5VMzd9RsUS4fKrLtaBPAU0qAOWvh%2FNlvXMDIlouJy%2BHgP9iVDm%2BNEksb8ZA0ZMlXFrxyShItivkMVkQXKUNRHAAoeUxkJgKIopWXmXGJV5xBaTk2y%2FuaGhPvJoxQ3CqaXi8vKVSY8DfIVWnJY3oeIR9iw6My8h9VCUTw2fECDO%2F3WEwdDw1TNHEEq2rKs1MSR0a0ac6VtIaeAuEYe26HoCHMxNldaw18EHUOdVv6%2BERvXbZ6b%2FJwqquG5sNtLUX9yQVN6z9He6PL10n1y8EC%2F5ICzXvY1LFb5cOPTfI8JhlEbxv1l3Bp6Kx8Nw9MOeJs8QGOqUBq3trcDQOjq0BA5EQbgCDKVxF9YeyDMjVPDWiac6p6tIXPJkCE%2BOjY28RH37YgcoBwd7mEX2RaxpzLwP8hA%2FOA2mRXWdoEFJa%2FzEy2dTenczWbf1VvwlZSccXJGBZKgtJx6hGwFfCckILxWV0xQgiECeGBaH%2BXCfjnaqchZwsw0DOvXKnuIL3tEp9blOY3WCjXQz3Qef6Gfg6iAp2uqITsE9UEf7W&X-Amz-Signature=250e6b59364ccd4b8fadbf2144fcc50924f85bbe195f51558d5ee3c55847d781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KMGGEM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgzfOTcbALYhUL7Xl72iOGqIiVbobffMJ1DM2kSGXzQwIgAJvtwP%2B1pJreqC5GfE6R1BK19FykP2o7jARHWDAUF0YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2FE7az7JFYdCQ5xircA6yFSf3%2FjuJI4b%2FGKsvZeQU49SwU5OnuhM0ZVBmqx15Aa%2BC0hpYJwZ2MQeHPP6k3Vz%2F3a8jVm6jqW7c8j5bXYm%2BgnhbUT8c7iC8dNsuSCYodhSPjCE4Xj%2BSUu6PEmrbdz2D4%2FkOjB7ODf9Mmhsk9GjmWiM9snHzzCobi4iqKK9uReFnjeeGZNu30GCROAMnT%2Bh0RIGIuCSYdumYo6B12Jl7%2BztMO3845cla5VnGLjF0s55rCqa8JqM%2BfZBWJ0OuA8mC7Tecza8ovoSEuitqYVP8CzAHPEvF2NAQr%2FtTdp5Oa28HrbnpVzDeSt70PvvqOg5VMzd9RsUS4fKrLtaBPAU0qAOWvh%2FNlvXMDIlouJy%2BHgP9iVDm%2BNEksb8ZA0ZMlXFrxyShItivkMVkQXKUNRHAAoeUxkJgKIopWXmXGJV5xBaTk2y%2FuaGhPvJoxQ3CqaXi8vKVSY8DfIVWnJY3oeIR9iw6My8h9VCUTw2fECDO%2F3WEwdDw1TNHEEq2rKs1MSR0a0ac6VtIaeAuEYe26HoCHMxNldaw18EHUOdVv6%2BERvXbZ6b%2FJwqquG5sNtLUX9yQVN6z9He6PL10n1y8EC%2F5ICzXvY1LFb5cOPTfI8JhlEbxv1l3Bp6Kx8Nw9MOeJs8QGOqUBq3trcDQOjq0BA5EQbgCDKVxF9YeyDMjVPDWiac6p6tIXPJkCE%2BOjY28RH37YgcoBwd7mEX2RaxpzLwP8hA%2FOA2mRXWdoEFJa%2FzEy2dTenczWbf1VvwlZSccXJGBZKgtJx6hGwFfCckILxWV0xQgiECeGBaH%2BXCfjnaqchZwsw0DOvXKnuIL3tEp9blOY3WCjXQz3Qef6Gfg6iAp2uqITsE9UEf7W&X-Amz-Signature=21a80574e7defd030781cd366ead110bef2b6e1056b8878a81be5c09f7349e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
