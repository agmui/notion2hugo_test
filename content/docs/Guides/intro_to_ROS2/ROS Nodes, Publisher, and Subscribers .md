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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAWIEI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjHYR48QiKG3FtuMn6jwLcm5HMAxBkdbJ8WwjYu1S6AIhAJIEqdHOgUnZ1y1%2B%2FAx2A48tLBAbFEIutgp5BzHE0l3JKv8DCB0QABoMNjM3NDIzMTgzODA1IgzH7sWG94uJY3YDxd8q3AM%2FBgOAHLVtOwJOsHcyapPRoi4tc76kQqoypeHLEUmLYEij2bmLmbuHMQv4k8viX57N5oIIRGftBiO3voZWSJOK1wgk7MQe7Rw3MaggiIQ4kWCyAbAwpvPPwYcOoGpWYkzyVs2bYNrIPWycj3n9TzWrg1kjfCkha0%2BMi0V3kGW6wfd8gcl3PgGZiK2W%2BB0Qs54U8NvkGOfOOB7VZBAn%2BsZlPzdaRnBwSJ4qo1ZkRlHXiPYATftQKbCi%2FzGWwiApYAc3N6lxvQ18gJoNnGtDvPVXZnvK7S1a3G17OJ%2BUQom5%2F%2FlDDdFieUdkNT9K8gHhs8j5AVsz%2FydCnBsXUrASgNaUwj8eYqKnDozGcZsL8viYy23SJd%2FUcGDiW2O6fLKlwnJdsl7QP%2BETyVsccFS8WpmE1kb0s2w67UD1vY9fRsqICb%2FNtCEBWr4QbDj6aolwJ3DoSKYmisKWAYst%2B7qoCAYC4%2FtrShcqxVmyIZMwSxFg4P2M7ncpfPQItkWRtXudm1FM1wYJxnTDGetqrt%2FkhlgKF6eXdNx9%2Byr6caCY%2FAEKrCbgFT4xuPW5u6nhJBtIGBW4m9tIhMwlSbU1UIQv%2FPQFqDEs7eOsr%2F5mNFxEUNvinxVMC0XxdJfoXRt8yzD2pKrABjqkAZTVK3FAWju1g0dGlmi3cwyhai9zu8SNouvtFQ0SvVWGH5jqBXNKUkebxy4toabJ2XXOQVfXEUXscNW%2Bx1A1adgX11Kl%2FdTIk5gxJIcQwhDglT3bkrP7QwSm53sYy03bqNdF8bPML2PgHsvx7l4lEVd6q9XHU%2FT5Qx6R0QimZoBz6rL7pkR83gfhmMX5RmpnviP4cb8JzSSTNuYveEwhIdG696LV&X-Amz-Signature=f276b11901fd020ab0235b7a7dd2a8a138982878908542662ba7d14ffc278df7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAWIEI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjHYR48QiKG3FtuMn6jwLcm5HMAxBkdbJ8WwjYu1S6AIhAJIEqdHOgUnZ1y1%2B%2FAx2A48tLBAbFEIutgp5BzHE0l3JKv8DCB0QABoMNjM3NDIzMTgzODA1IgzH7sWG94uJY3YDxd8q3AM%2FBgOAHLVtOwJOsHcyapPRoi4tc76kQqoypeHLEUmLYEij2bmLmbuHMQv4k8viX57N5oIIRGftBiO3voZWSJOK1wgk7MQe7Rw3MaggiIQ4kWCyAbAwpvPPwYcOoGpWYkzyVs2bYNrIPWycj3n9TzWrg1kjfCkha0%2BMi0V3kGW6wfd8gcl3PgGZiK2W%2BB0Qs54U8NvkGOfOOB7VZBAn%2BsZlPzdaRnBwSJ4qo1ZkRlHXiPYATftQKbCi%2FzGWwiApYAc3N6lxvQ18gJoNnGtDvPVXZnvK7S1a3G17OJ%2BUQom5%2F%2FlDDdFieUdkNT9K8gHhs8j5AVsz%2FydCnBsXUrASgNaUwj8eYqKnDozGcZsL8viYy23SJd%2FUcGDiW2O6fLKlwnJdsl7QP%2BETyVsccFS8WpmE1kb0s2w67UD1vY9fRsqICb%2FNtCEBWr4QbDj6aolwJ3DoSKYmisKWAYst%2B7qoCAYC4%2FtrShcqxVmyIZMwSxFg4P2M7ncpfPQItkWRtXudm1FM1wYJxnTDGetqrt%2FkhlgKF6eXdNx9%2Byr6caCY%2FAEKrCbgFT4xuPW5u6nhJBtIGBW4m9tIhMwlSbU1UIQv%2FPQFqDEs7eOsr%2F5mNFxEUNvinxVMC0XxdJfoXRt8yzD2pKrABjqkAZTVK3FAWju1g0dGlmi3cwyhai9zu8SNouvtFQ0SvVWGH5jqBXNKUkebxy4toabJ2XXOQVfXEUXscNW%2Bx1A1adgX11Kl%2FdTIk5gxJIcQwhDglT3bkrP7QwSm53sYy03bqNdF8bPML2PgHsvx7l4lEVd6q9XHU%2FT5Qx6R0QimZoBz6rL7pkR83gfhmMX5RmpnviP4cb8JzSSTNuYveEwhIdG696LV&X-Amz-Signature=c7e076e77302770689f52db6da9e182d2751eae2c8c3cea508c4716e8a40c9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAWIEI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjHYR48QiKG3FtuMn6jwLcm5HMAxBkdbJ8WwjYu1S6AIhAJIEqdHOgUnZ1y1%2B%2FAx2A48tLBAbFEIutgp5BzHE0l3JKv8DCB0QABoMNjM3NDIzMTgzODA1IgzH7sWG94uJY3YDxd8q3AM%2FBgOAHLVtOwJOsHcyapPRoi4tc76kQqoypeHLEUmLYEij2bmLmbuHMQv4k8viX57N5oIIRGftBiO3voZWSJOK1wgk7MQe7Rw3MaggiIQ4kWCyAbAwpvPPwYcOoGpWYkzyVs2bYNrIPWycj3n9TzWrg1kjfCkha0%2BMi0V3kGW6wfd8gcl3PgGZiK2W%2BB0Qs54U8NvkGOfOOB7VZBAn%2BsZlPzdaRnBwSJ4qo1ZkRlHXiPYATftQKbCi%2FzGWwiApYAc3N6lxvQ18gJoNnGtDvPVXZnvK7S1a3G17OJ%2BUQom5%2F%2FlDDdFieUdkNT9K8gHhs8j5AVsz%2FydCnBsXUrASgNaUwj8eYqKnDozGcZsL8viYy23SJd%2FUcGDiW2O6fLKlwnJdsl7QP%2BETyVsccFS8WpmE1kb0s2w67UD1vY9fRsqICb%2FNtCEBWr4QbDj6aolwJ3DoSKYmisKWAYst%2B7qoCAYC4%2FtrShcqxVmyIZMwSxFg4P2M7ncpfPQItkWRtXudm1FM1wYJxnTDGetqrt%2FkhlgKF6eXdNx9%2Byr6caCY%2FAEKrCbgFT4xuPW5u6nhJBtIGBW4m9tIhMwlSbU1UIQv%2FPQFqDEs7eOsr%2F5mNFxEUNvinxVMC0XxdJfoXRt8yzD2pKrABjqkAZTVK3FAWju1g0dGlmi3cwyhai9zu8SNouvtFQ0SvVWGH5jqBXNKUkebxy4toabJ2XXOQVfXEUXscNW%2Bx1A1adgX11Kl%2FdTIk5gxJIcQwhDglT3bkrP7QwSm53sYy03bqNdF8bPML2PgHsvx7l4lEVd6q9XHU%2FT5Qx6R0QimZoBz6rL7pkR83gfhmMX5RmpnviP4cb8JzSSTNuYveEwhIdG696LV&X-Amz-Signature=7efca8a10bd6c1e2c82f7b68414e93a36ae4cdfea194fd15b1d8577f70300f48&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAWIEI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjHYR48QiKG3FtuMn6jwLcm5HMAxBkdbJ8WwjYu1S6AIhAJIEqdHOgUnZ1y1%2B%2FAx2A48tLBAbFEIutgp5BzHE0l3JKv8DCB0QABoMNjM3NDIzMTgzODA1IgzH7sWG94uJY3YDxd8q3AM%2FBgOAHLVtOwJOsHcyapPRoi4tc76kQqoypeHLEUmLYEij2bmLmbuHMQv4k8viX57N5oIIRGftBiO3voZWSJOK1wgk7MQe7Rw3MaggiIQ4kWCyAbAwpvPPwYcOoGpWYkzyVs2bYNrIPWycj3n9TzWrg1kjfCkha0%2BMi0V3kGW6wfd8gcl3PgGZiK2W%2BB0Qs54U8NvkGOfOOB7VZBAn%2BsZlPzdaRnBwSJ4qo1ZkRlHXiPYATftQKbCi%2FzGWwiApYAc3N6lxvQ18gJoNnGtDvPVXZnvK7S1a3G17OJ%2BUQom5%2F%2FlDDdFieUdkNT9K8gHhs8j5AVsz%2FydCnBsXUrASgNaUwj8eYqKnDozGcZsL8viYy23SJd%2FUcGDiW2O6fLKlwnJdsl7QP%2BETyVsccFS8WpmE1kb0s2w67UD1vY9fRsqICb%2FNtCEBWr4QbDj6aolwJ3DoSKYmisKWAYst%2B7qoCAYC4%2FtrShcqxVmyIZMwSxFg4P2M7ncpfPQItkWRtXudm1FM1wYJxnTDGetqrt%2FkhlgKF6eXdNx9%2Byr6caCY%2FAEKrCbgFT4xuPW5u6nhJBtIGBW4m9tIhMwlSbU1UIQv%2FPQFqDEs7eOsr%2F5mNFxEUNvinxVMC0XxdJfoXRt8yzD2pKrABjqkAZTVK3FAWju1g0dGlmi3cwyhai9zu8SNouvtFQ0SvVWGH5jqBXNKUkebxy4toabJ2XXOQVfXEUXscNW%2Bx1A1adgX11Kl%2FdTIk5gxJIcQwhDglT3bkrP7QwSm53sYy03bqNdF8bPML2PgHsvx7l4lEVd6q9XHU%2FT5Qx6R0QimZoBz6rL7pkR83gfhmMX5RmpnviP4cb8JzSSTNuYveEwhIdG696LV&X-Amz-Signature=085731920ed7ce5c55c8a57da43451692e82d7206e54efa1e23b54066f1338da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAWIEI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjHYR48QiKG3FtuMn6jwLcm5HMAxBkdbJ8WwjYu1S6AIhAJIEqdHOgUnZ1y1%2B%2FAx2A48tLBAbFEIutgp5BzHE0l3JKv8DCB0QABoMNjM3NDIzMTgzODA1IgzH7sWG94uJY3YDxd8q3AM%2FBgOAHLVtOwJOsHcyapPRoi4tc76kQqoypeHLEUmLYEij2bmLmbuHMQv4k8viX57N5oIIRGftBiO3voZWSJOK1wgk7MQe7Rw3MaggiIQ4kWCyAbAwpvPPwYcOoGpWYkzyVs2bYNrIPWycj3n9TzWrg1kjfCkha0%2BMi0V3kGW6wfd8gcl3PgGZiK2W%2BB0Qs54U8NvkGOfOOB7VZBAn%2BsZlPzdaRnBwSJ4qo1ZkRlHXiPYATftQKbCi%2FzGWwiApYAc3N6lxvQ18gJoNnGtDvPVXZnvK7S1a3G17OJ%2BUQom5%2F%2FlDDdFieUdkNT9K8gHhs8j5AVsz%2FydCnBsXUrASgNaUwj8eYqKnDozGcZsL8viYy23SJd%2FUcGDiW2O6fLKlwnJdsl7QP%2BETyVsccFS8WpmE1kb0s2w67UD1vY9fRsqICb%2FNtCEBWr4QbDj6aolwJ3DoSKYmisKWAYst%2B7qoCAYC4%2FtrShcqxVmyIZMwSxFg4P2M7ncpfPQItkWRtXudm1FM1wYJxnTDGetqrt%2FkhlgKF6eXdNx9%2Byr6caCY%2FAEKrCbgFT4xuPW5u6nhJBtIGBW4m9tIhMwlSbU1UIQv%2FPQFqDEs7eOsr%2F5mNFxEUNvinxVMC0XxdJfoXRt8yzD2pKrABjqkAZTVK3FAWju1g0dGlmi3cwyhai9zu8SNouvtFQ0SvVWGH5jqBXNKUkebxy4toabJ2XXOQVfXEUXscNW%2Bx1A1adgX11Kl%2FdTIk5gxJIcQwhDglT3bkrP7QwSm53sYy03bqNdF8bPML2PgHsvx7l4lEVd6q9XHU%2FT5Qx6R0QimZoBz6rL7pkR83gfhmMX5RmpnviP4cb8JzSSTNuYveEwhIdG696LV&X-Amz-Signature=1187f682b4a6d37cb33b4bf8640997dbd7f61e8be8f2c8f83dae1207c7faaa01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAWIEI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjHYR48QiKG3FtuMn6jwLcm5HMAxBkdbJ8WwjYu1S6AIhAJIEqdHOgUnZ1y1%2B%2FAx2A48tLBAbFEIutgp5BzHE0l3JKv8DCB0QABoMNjM3NDIzMTgzODA1IgzH7sWG94uJY3YDxd8q3AM%2FBgOAHLVtOwJOsHcyapPRoi4tc76kQqoypeHLEUmLYEij2bmLmbuHMQv4k8viX57N5oIIRGftBiO3voZWSJOK1wgk7MQe7Rw3MaggiIQ4kWCyAbAwpvPPwYcOoGpWYkzyVs2bYNrIPWycj3n9TzWrg1kjfCkha0%2BMi0V3kGW6wfd8gcl3PgGZiK2W%2BB0Qs54U8NvkGOfOOB7VZBAn%2BsZlPzdaRnBwSJ4qo1ZkRlHXiPYATftQKbCi%2FzGWwiApYAc3N6lxvQ18gJoNnGtDvPVXZnvK7S1a3G17OJ%2BUQom5%2F%2FlDDdFieUdkNT9K8gHhs8j5AVsz%2FydCnBsXUrASgNaUwj8eYqKnDozGcZsL8viYy23SJd%2FUcGDiW2O6fLKlwnJdsl7QP%2BETyVsccFS8WpmE1kb0s2w67UD1vY9fRsqICb%2FNtCEBWr4QbDj6aolwJ3DoSKYmisKWAYst%2B7qoCAYC4%2FtrShcqxVmyIZMwSxFg4P2M7ncpfPQItkWRtXudm1FM1wYJxnTDGetqrt%2FkhlgKF6eXdNx9%2Byr6caCY%2FAEKrCbgFT4xuPW5u6nhJBtIGBW4m9tIhMwlSbU1UIQv%2FPQFqDEs7eOsr%2F5mNFxEUNvinxVMC0XxdJfoXRt8yzD2pKrABjqkAZTVK3FAWju1g0dGlmi3cwyhai9zu8SNouvtFQ0SvVWGH5jqBXNKUkebxy4toabJ2XXOQVfXEUXscNW%2Bx1A1adgX11Kl%2FdTIk5gxJIcQwhDglT3bkrP7QwSm53sYy03bqNdF8bPML2PgHsvx7l4lEVd6q9XHU%2FT5Qx6R0QimZoBz6rL7pkR83gfhmMX5RmpnviP4cb8JzSSTNuYveEwhIdG696LV&X-Amz-Signature=5ce27a0790260c30b262fe7b34ee9da8f32bb2ebb803401b663509c934d3eb32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAWIEI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjHYR48QiKG3FtuMn6jwLcm5HMAxBkdbJ8WwjYu1S6AIhAJIEqdHOgUnZ1y1%2B%2FAx2A48tLBAbFEIutgp5BzHE0l3JKv8DCB0QABoMNjM3NDIzMTgzODA1IgzH7sWG94uJY3YDxd8q3AM%2FBgOAHLVtOwJOsHcyapPRoi4tc76kQqoypeHLEUmLYEij2bmLmbuHMQv4k8viX57N5oIIRGftBiO3voZWSJOK1wgk7MQe7Rw3MaggiIQ4kWCyAbAwpvPPwYcOoGpWYkzyVs2bYNrIPWycj3n9TzWrg1kjfCkha0%2BMi0V3kGW6wfd8gcl3PgGZiK2W%2BB0Qs54U8NvkGOfOOB7VZBAn%2BsZlPzdaRnBwSJ4qo1ZkRlHXiPYATftQKbCi%2FzGWwiApYAc3N6lxvQ18gJoNnGtDvPVXZnvK7S1a3G17OJ%2BUQom5%2F%2FlDDdFieUdkNT9K8gHhs8j5AVsz%2FydCnBsXUrASgNaUwj8eYqKnDozGcZsL8viYy23SJd%2FUcGDiW2O6fLKlwnJdsl7QP%2BETyVsccFS8WpmE1kb0s2w67UD1vY9fRsqICb%2FNtCEBWr4QbDj6aolwJ3DoSKYmisKWAYst%2B7qoCAYC4%2FtrShcqxVmyIZMwSxFg4P2M7ncpfPQItkWRtXudm1FM1wYJxnTDGetqrt%2FkhlgKF6eXdNx9%2Byr6caCY%2FAEKrCbgFT4xuPW5u6nhJBtIGBW4m9tIhMwlSbU1UIQv%2FPQFqDEs7eOsr%2F5mNFxEUNvinxVMC0XxdJfoXRt8yzD2pKrABjqkAZTVK3FAWju1g0dGlmi3cwyhai9zu8SNouvtFQ0SvVWGH5jqBXNKUkebxy4toabJ2XXOQVfXEUXscNW%2Bx1A1adgX11Kl%2FdTIk5gxJIcQwhDglT3bkrP7QwSm53sYy03bqNdF8bPML2PgHsvx7l4lEVd6q9XHU%2FT5Qx6R0QimZoBz6rL7pkR83gfhmMX5RmpnviP4cb8JzSSTNuYveEwhIdG696LV&X-Amz-Signature=c28dd4746675a1c6332a77efd4a9ab090078b67caa9431ad8ad08ad2f42e96c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAWIEI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjHYR48QiKG3FtuMn6jwLcm5HMAxBkdbJ8WwjYu1S6AIhAJIEqdHOgUnZ1y1%2B%2FAx2A48tLBAbFEIutgp5BzHE0l3JKv8DCB0QABoMNjM3NDIzMTgzODA1IgzH7sWG94uJY3YDxd8q3AM%2FBgOAHLVtOwJOsHcyapPRoi4tc76kQqoypeHLEUmLYEij2bmLmbuHMQv4k8viX57N5oIIRGftBiO3voZWSJOK1wgk7MQe7Rw3MaggiIQ4kWCyAbAwpvPPwYcOoGpWYkzyVs2bYNrIPWycj3n9TzWrg1kjfCkha0%2BMi0V3kGW6wfd8gcl3PgGZiK2W%2BB0Qs54U8NvkGOfOOB7VZBAn%2BsZlPzdaRnBwSJ4qo1ZkRlHXiPYATftQKbCi%2FzGWwiApYAc3N6lxvQ18gJoNnGtDvPVXZnvK7S1a3G17OJ%2BUQom5%2F%2FlDDdFieUdkNT9K8gHhs8j5AVsz%2FydCnBsXUrASgNaUwj8eYqKnDozGcZsL8viYy23SJd%2FUcGDiW2O6fLKlwnJdsl7QP%2BETyVsccFS8WpmE1kb0s2w67UD1vY9fRsqICb%2FNtCEBWr4QbDj6aolwJ3DoSKYmisKWAYst%2B7qoCAYC4%2FtrShcqxVmyIZMwSxFg4P2M7ncpfPQItkWRtXudm1FM1wYJxnTDGetqrt%2FkhlgKF6eXdNx9%2Byr6caCY%2FAEKrCbgFT4xuPW5u6nhJBtIGBW4m9tIhMwlSbU1UIQv%2FPQFqDEs7eOsr%2F5mNFxEUNvinxVMC0XxdJfoXRt8yzD2pKrABjqkAZTVK3FAWju1g0dGlmi3cwyhai9zu8SNouvtFQ0SvVWGH5jqBXNKUkebxy4toabJ2XXOQVfXEUXscNW%2Bx1A1adgX11Kl%2FdTIk5gxJIcQwhDglT3bkrP7QwSm53sYy03bqNdF8bPML2PgHsvx7l4lEVd6q9XHU%2FT5Qx6R0QimZoBz6rL7pkR83gfhmMX5RmpnviP4cb8JzSSTNuYveEwhIdG696LV&X-Amz-Signature=b077bded2f88ebf0dc7df5a17b6004f606ba8f51175f52e8f35628f0ba7b7724&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
