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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDIZOMF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8byYqy9r22s%2B39Yptvgw9gZvjzGrtzLFQjAGZAxufnAiBi9wHb6kPN49mRnreNoeUo1Dq6MqNz5vGAd0oNdk1p0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMrBcrA%2Fsp%2BGswWO4iKtwD5%2BJwLR1YDZPlxL9MxCOti8NsnDyh8R1MV%2B6rgJyaVTeRf8rZ0ZjAMMFZEJ%2FQ0Q1gCdykrPTlIiD%2FdB%2BVGTaIMCBaD4J2%2BJQ%2Bloj2Y9Jg02NzxaAGPXBVQA3uMbNoLYfwMxYE4FBpW8CH1XlLR7LWVrakZv8jp1GKNsLPidqgRgzxGKcQE5Z1CjKW58x9HBHAImYOOgzEmK4ajxT0XOFyIUouW6uS3xAfNmbitVZtIFpaPd%2BRcFReXBR5rTPkBTs7P%2FmG0yfVsfDyWTgpQT63g2di%2FJdGFEmQ7t8E0tttbPu0KGL%2FBRDKv7zkcU%2F6s4L6bbjEnNSvjhv0QjtMPVgVQb6ZFjpFKvj4%2Fc0mj283KXiv0Xf%2BttPoQMXm0TErmhPCU3zGYIq5%2FGC9BkG2dTcVPAeGj6jMXwmLhHkbSAIt%2BFDDDpQBc0J36A6YTRhgBbAUD2fjL%2F2pttDBaN%2BIkk87BpWE3V%2BEIxMikSknPsGDCC%2FuIjO5YE8XguNMJnp3OgqTqXmPqpLw%2FVPMRPLHYsQmEJ%2BuEwmzHsy611av%2FwKNy%2F760LaeERis2L%2FGmeEyhw%2BR5L1BU%2FiLtHoZwb%2FMA4tI9r3eUC4xS%2Fy9iRyCLJ9AmCp6nsn1b4MZBSL2JwMwwYmbvwY6pgHcgago8JXJnzkGxOmODmh2BK9%2BuARY5He0tn%2BclkCEPW9%2BsFAxbLrarUQuduOCJWn1IewXMJXbKHdiOmLSHXLPZzIsVpLnc%2B9cY%2F7iIoVV%2F%2B7ab6hSvWn1vjs1%2Bmo96JmEj0YHVMUUejMPnkPoHk9SqNgSc3jNWujZLqB1%2FtbNyKlsAQIyvb2TMlXnw0FQ12vdJrKqc1lgzcpXaXskfoS6nObigrNN&X-Amz-Signature=4323711f4d975fd6396ba3c7e42bf47760e6d0e24d56bac8d7e8ad99b28ca9b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDIZOMF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8byYqy9r22s%2B39Yptvgw9gZvjzGrtzLFQjAGZAxufnAiBi9wHb6kPN49mRnreNoeUo1Dq6MqNz5vGAd0oNdk1p0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMrBcrA%2Fsp%2BGswWO4iKtwD5%2BJwLR1YDZPlxL9MxCOti8NsnDyh8R1MV%2B6rgJyaVTeRf8rZ0ZjAMMFZEJ%2FQ0Q1gCdykrPTlIiD%2FdB%2BVGTaIMCBaD4J2%2BJQ%2Bloj2Y9Jg02NzxaAGPXBVQA3uMbNoLYfwMxYE4FBpW8CH1XlLR7LWVrakZv8jp1GKNsLPidqgRgzxGKcQE5Z1CjKW58x9HBHAImYOOgzEmK4ajxT0XOFyIUouW6uS3xAfNmbitVZtIFpaPd%2BRcFReXBR5rTPkBTs7P%2FmG0yfVsfDyWTgpQT63g2di%2FJdGFEmQ7t8E0tttbPu0KGL%2FBRDKv7zkcU%2F6s4L6bbjEnNSvjhv0QjtMPVgVQb6ZFjpFKvj4%2Fc0mj283KXiv0Xf%2BttPoQMXm0TErmhPCU3zGYIq5%2FGC9BkG2dTcVPAeGj6jMXwmLhHkbSAIt%2BFDDDpQBc0J36A6YTRhgBbAUD2fjL%2F2pttDBaN%2BIkk87BpWE3V%2BEIxMikSknPsGDCC%2FuIjO5YE8XguNMJnp3OgqTqXmPqpLw%2FVPMRPLHYsQmEJ%2BuEwmzHsy611av%2FwKNy%2F760LaeERis2L%2FGmeEyhw%2BR5L1BU%2FiLtHoZwb%2FMA4tI9r3eUC4xS%2Fy9iRyCLJ9AmCp6nsn1b4MZBSL2JwMwwYmbvwY6pgHcgago8JXJnzkGxOmODmh2BK9%2BuARY5He0tn%2BclkCEPW9%2BsFAxbLrarUQuduOCJWn1IewXMJXbKHdiOmLSHXLPZzIsVpLnc%2B9cY%2F7iIoVV%2F%2B7ab6hSvWn1vjs1%2Bmo96JmEj0YHVMUUejMPnkPoHk9SqNgSc3jNWujZLqB1%2FtbNyKlsAQIyvb2TMlXnw0FQ12vdJrKqc1lgzcpXaXskfoS6nObigrNN&X-Amz-Signature=e0e937fa75ec251e98eb91dfcba8f5defed4ba6b151d638ccd71345500b37701&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDIZOMF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8byYqy9r22s%2B39Yptvgw9gZvjzGrtzLFQjAGZAxufnAiBi9wHb6kPN49mRnreNoeUo1Dq6MqNz5vGAd0oNdk1p0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMrBcrA%2Fsp%2BGswWO4iKtwD5%2BJwLR1YDZPlxL9MxCOti8NsnDyh8R1MV%2B6rgJyaVTeRf8rZ0ZjAMMFZEJ%2FQ0Q1gCdykrPTlIiD%2FdB%2BVGTaIMCBaD4J2%2BJQ%2Bloj2Y9Jg02NzxaAGPXBVQA3uMbNoLYfwMxYE4FBpW8CH1XlLR7LWVrakZv8jp1GKNsLPidqgRgzxGKcQE5Z1CjKW58x9HBHAImYOOgzEmK4ajxT0XOFyIUouW6uS3xAfNmbitVZtIFpaPd%2BRcFReXBR5rTPkBTs7P%2FmG0yfVsfDyWTgpQT63g2di%2FJdGFEmQ7t8E0tttbPu0KGL%2FBRDKv7zkcU%2F6s4L6bbjEnNSvjhv0QjtMPVgVQb6ZFjpFKvj4%2Fc0mj283KXiv0Xf%2BttPoQMXm0TErmhPCU3zGYIq5%2FGC9BkG2dTcVPAeGj6jMXwmLhHkbSAIt%2BFDDDpQBc0J36A6YTRhgBbAUD2fjL%2F2pttDBaN%2BIkk87BpWE3V%2BEIxMikSknPsGDCC%2FuIjO5YE8XguNMJnp3OgqTqXmPqpLw%2FVPMRPLHYsQmEJ%2BuEwmzHsy611av%2FwKNy%2F760LaeERis2L%2FGmeEyhw%2BR5L1BU%2FiLtHoZwb%2FMA4tI9r3eUC4xS%2Fy9iRyCLJ9AmCp6nsn1b4MZBSL2JwMwwYmbvwY6pgHcgago8JXJnzkGxOmODmh2BK9%2BuARY5He0tn%2BclkCEPW9%2BsFAxbLrarUQuduOCJWn1IewXMJXbKHdiOmLSHXLPZzIsVpLnc%2B9cY%2F7iIoVV%2F%2B7ab6hSvWn1vjs1%2Bmo96JmEj0YHVMUUejMPnkPoHk9SqNgSc3jNWujZLqB1%2FtbNyKlsAQIyvb2TMlXnw0FQ12vdJrKqc1lgzcpXaXskfoS6nObigrNN&X-Amz-Signature=3b9971c92956571eb7b1c02b07056e2e34506213a1d9a236ec9a38a4e963b6b8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDIZOMF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8byYqy9r22s%2B39Yptvgw9gZvjzGrtzLFQjAGZAxufnAiBi9wHb6kPN49mRnreNoeUo1Dq6MqNz5vGAd0oNdk1p0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMrBcrA%2Fsp%2BGswWO4iKtwD5%2BJwLR1YDZPlxL9MxCOti8NsnDyh8R1MV%2B6rgJyaVTeRf8rZ0ZjAMMFZEJ%2FQ0Q1gCdykrPTlIiD%2FdB%2BVGTaIMCBaD4J2%2BJQ%2Bloj2Y9Jg02NzxaAGPXBVQA3uMbNoLYfwMxYE4FBpW8CH1XlLR7LWVrakZv8jp1GKNsLPidqgRgzxGKcQE5Z1CjKW58x9HBHAImYOOgzEmK4ajxT0XOFyIUouW6uS3xAfNmbitVZtIFpaPd%2BRcFReXBR5rTPkBTs7P%2FmG0yfVsfDyWTgpQT63g2di%2FJdGFEmQ7t8E0tttbPu0KGL%2FBRDKv7zkcU%2F6s4L6bbjEnNSvjhv0QjtMPVgVQb6ZFjpFKvj4%2Fc0mj283KXiv0Xf%2BttPoQMXm0TErmhPCU3zGYIq5%2FGC9BkG2dTcVPAeGj6jMXwmLhHkbSAIt%2BFDDDpQBc0J36A6YTRhgBbAUD2fjL%2F2pttDBaN%2BIkk87BpWE3V%2BEIxMikSknPsGDCC%2FuIjO5YE8XguNMJnp3OgqTqXmPqpLw%2FVPMRPLHYsQmEJ%2BuEwmzHsy611av%2FwKNy%2F760LaeERis2L%2FGmeEyhw%2BR5L1BU%2FiLtHoZwb%2FMA4tI9r3eUC4xS%2Fy9iRyCLJ9AmCp6nsn1b4MZBSL2JwMwwYmbvwY6pgHcgago8JXJnzkGxOmODmh2BK9%2BuARY5He0tn%2BclkCEPW9%2BsFAxbLrarUQuduOCJWn1IewXMJXbKHdiOmLSHXLPZzIsVpLnc%2B9cY%2F7iIoVV%2F%2B7ab6hSvWn1vjs1%2Bmo96JmEj0YHVMUUejMPnkPoHk9SqNgSc3jNWujZLqB1%2FtbNyKlsAQIyvb2TMlXnw0FQ12vdJrKqc1lgzcpXaXskfoS6nObigrNN&X-Amz-Signature=3f5f74a357597c8034fde7b3dc6efca4a9a54b1aa5df498b68832cf1e2fbcc55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDIZOMF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8byYqy9r22s%2B39Yptvgw9gZvjzGrtzLFQjAGZAxufnAiBi9wHb6kPN49mRnreNoeUo1Dq6MqNz5vGAd0oNdk1p0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMrBcrA%2Fsp%2BGswWO4iKtwD5%2BJwLR1YDZPlxL9MxCOti8NsnDyh8R1MV%2B6rgJyaVTeRf8rZ0ZjAMMFZEJ%2FQ0Q1gCdykrPTlIiD%2FdB%2BVGTaIMCBaD4J2%2BJQ%2Bloj2Y9Jg02NzxaAGPXBVQA3uMbNoLYfwMxYE4FBpW8CH1XlLR7LWVrakZv8jp1GKNsLPidqgRgzxGKcQE5Z1CjKW58x9HBHAImYOOgzEmK4ajxT0XOFyIUouW6uS3xAfNmbitVZtIFpaPd%2BRcFReXBR5rTPkBTs7P%2FmG0yfVsfDyWTgpQT63g2di%2FJdGFEmQ7t8E0tttbPu0KGL%2FBRDKv7zkcU%2F6s4L6bbjEnNSvjhv0QjtMPVgVQb6ZFjpFKvj4%2Fc0mj283KXiv0Xf%2BttPoQMXm0TErmhPCU3zGYIq5%2FGC9BkG2dTcVPAeGj6jMXwmLhHkbSAIt%2BFDDDpQBc0J36A6YTRhgBbAUD2fjL%2F2pttDBaN%2BIkk87BpWE3V%2BEIxMikSknPsGDCC%2FuIjO5YE8XguNMJnp3OgqTqXmPqpLw%2FVPMRPLHYsQmEJ%2BuEwmzHsy611av%2FwKNy%2F760LaeERis2L%2FGmeEyhw%2BR5L1BU%2FiLtHoZwb%2FMA4tI9r3eUC4xS%2Fy9iRyCLJ9AmCp6nsn1b4MZBSL2JwMwwYmbvwY6pgHcgago8JXJnzkGxOmODmh2BK9%2BuARY5He0tn%2BclkCEPW9%2BsFAxbLrarUQuduOCJWn1IewXMJXbKHdiOmLSHXLPZzIsVpLnc%2B9cY%2F7iIoVV%2F%2B7ab6hSvWn1vjs1%2Bmo96JmEj0YHVMUUejMPnkPoHk9SqNgSc3jNWujZLqB1%2FtbNyKlsAQIyvb2TMlXnw0FQ12vdJrKqc1lgzcpXaXskfoS6nObigrNN&X-Amz-Signature=0876657abf6f5fcc353477ac907ab47e98a320f0711c230cead7637ec86a15fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDIZOMF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8byYqy9r22s%2B39Yptvgw9gZvjzGrtzLFQjAGZAxufnAiBi9wHb6kPN49mRnreNoeUo1Dq6MqNz5vGAd0oNdk1p0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMrBcrA%2Fsp%2BGswWO4iKtwD5%2BJwLR1YDZPlxL9MxCOti8NsnDyh8R1MV%2B6rgJyaVTeRf8rZ0ZjAMMFZEJ%2FQ0Q1gCdykrPTlIiD%2FdB%2BVGTaIMCBaD4J2%2BJQ%2Bloj2Y9Jg02NzxaAGPXBVQA3uMbNoLYfwMxYE4FBpW8CH1XlLR7LWVrakZv8jp1GKNsLPidqgRgzxGKcQE5Z1CjKW58x9HBHAImYOOgzEmK4ajxT0XOFyIUouW6uS3xAfNmbitVZtIFpaPd%2BRcFReXBR5rTPkBTs7P%2FmG0yfVsfDyWTgpQT63g2di%2FJdGFEmQ7t8E0tttbPu0KGL%2FBRDKv7zkcU%2F6s4L6bbjEnNSvjhv0QjtMPVgVQb6ZFjpFKvj4%2Fc0mj283KXiv0Xf%2BttPoQMXm0TErmhPCU3zGYIq5%2FGC9BkG2dTcVPAeGj6jMXwmLhHkbSAIt%2BFDDDpQBc0J36A6YTRhgBbAUD2fjL%2F2pttDBaN%2BIkk87BpWE3V%2BEIxMikSknPsGDCC%2FuIjO5YE8XguNMJnp3OgqTqXmPqpLw%2FVPMRPLHYsQmEJ%2BuEwmzHsy611av%2FwKNy%2F760LaeERis2L%2FGmeEyhw%2BR5L1BU%2FiLtHoZwb%2FMA4tI9r3eUC4xS%2Fy9iRyCLJ9AmCp6nsn1b4MZBSL2JwMwwYmbvwY6pgHcgago8JXJnzkGxOmODmh2BK9%2BuARY5He0tn%2BclkCEPW9%2BsFAxbLrarUQuduOCJWn1IewXMJXbKHdiOmLSHXLPZzIsVpLnc%2B9cY%2F7iIoVV%2F%2B7ab6hSvWn1vjs1%2Bmo96JmEj0YHVMUUejMPnkPoHk9SqNgSc3jNWujZLqB1%2FtbNyKlsAQIyvb2TMlXnw0FQ12vdJrKqc1lgzcpXaXskfoS6nObigrNN&X-Amz-Signature=d5800a13f46f72f64e72ddf432e91e75e13cc58a5e90edbebee2fa7f5eedd373&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDIZOMF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8byYqy9r22s%2B39Yptvgw9gZvjzGrtzLFQjAGZAxufnAiBi9wHb6kPN49mRnreNoeUo1Dq6MqNz5vGAd0oNdk1p0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMrBcrA%2Fsp%2BGswWO4iKtwD5%2BJwLR1YDZPlxL9MxCOti8NsnDyh8R1MV%2B6rgJyaVTeRf8rZ0ZjAMMFZEJ%2FQ0Q1gCdykrPTlIiD%2FdB%2BVGTaIMCBaD4J2%2BJQ%2Bloj2Y9Jg02NzxaAGPXBVQA3uMbNoLYfwMxYE4FBpW8CH1XlLR7LWVrakZv8jp1GKNsLPidqgRgzxGKcQE5Z1CjKW58x9HBHAImYOOgzEmK4ajxT0XOFyIUouW6uS3xAfNmbitVZtIFpaPd%2BRcFReXBR5rTPkBTs7P%2FmG0yfVsfDyWTgpQT63g2di%2FJdGFEmQ7t8E0tttbPu0KGL%2FBRDKv7zkcU%2F6s4L6bbjEnNSvjhv0QjtMPVgVQb6ZFjpFKvj4%2Fc0mj283KXiv0Xf%2BttPoQMXm0TErmhPCU3zGYIq5%2FGC9BkG2dTcVPAeGj6jMXwmLhHkbSAIt%2BFDDDpQBc0J36A6YTRhgBbAUD2fjL%2F2pttDBaN%2BIkk87BpWE3V%2BEIxMikSknPsGDCC%2FuIjO5YE8XguNMJnp3OgqTqXmPqpLw%2FVPMRPLHYsQmEJ%2BuEwmzHsy611av%2FwKNy%2F760LaeERis2L%2FGmeEyhw%2BR5L1BU%2FiLtHoZwb%2FMA4tI9r3eUC4xS%2Fy9iRyCLJ9AmCp6nsn1b4MZBSL2JwMwwYmbvwY6pgHcgago8JXJnzkGxOmODmh2BK9%2BuARY5He0tn%2BclkCEPW9%2BsFAxbLrarUQuduOCJWn1IewXMJXbKHdiOmLSHXLPZzIsVpLnc%2B9cY%2F7iIoVV%2F%2B7ab6hSvWn1vjs1%2Bmo96JmEj0YHVMUUejMPnkPoHk9SqNgSc3jNWujZLqB1%2FtbNyKlsAQIyvb2TMlXnw0FQ12vdJrKqc1lgzcpXaXskfoS6nObigrNN&X-Amz-Signature=e31f804cac25609e5e60ed2b7938a2d6ff2e9e6e546940f5923b8353e5540f54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDIZOMF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8byYqy9r22s%2B39Yptvgw9gZvjzGrtzLFQjAGZAxufnAiBi9wHb6kPN49mRnreNoeUo1Dq6MqNz5vGAd0oNdk1p0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMrBcrA%2Fsp%2BGswWO4iKtwD5%2BJwLR1YDZPlxL9MxCOti8NsnDyh8R1MV%2B6rgJyaVTeRf8rZ0ZjAMMFZEJ%2FQ0Q1gCdykrPTlIiD%2FdB%2BVGTaIMCBaD4J2%2BJQ%2Bloj2Y9Jg02NzxaAGPXBVQA3uMbNoLYfwMxYE4FBpW8CH1XlLR7LWVrakZv8jp1GKNsLPidqgRgzxGKcQE5Z1CjKW58x9HBHAImYOOgzEmK4ajxT0XOFyIUouW6uS3xAfNmbitVZtIFpaPd%2BRcFReXBR5rTPkBTs7P%2FmG0yfVsfDyWTgpQT63g2di%2FJdGFEmQ7t8E0tttbPu0KGL%2FBRDKv7zkcU%2F6s4L6bbjEnNSvjhv0QjtMPVgVQb6ZFjpFKvj4%2Fc0mj283KXiv0Xf%2BttPoQMXm0TErmhPCU3zGYIq5%2FGC9BkG2dTcVPAeGj6jMXwmLhHkbSAIt%2BFDDDpQBc0J36A6YTRhgBbAUD2fjL%2F2pttDBaN%2BIkk87BpWE3V%2BEIxMikSknPsGDCC%2FuIjO5YE8XguNMJnp3OgqTqXmPqpLw%2FVPMRPLHYsQmEJ%2BuEwmzHsy611av%2FwKNy%2F760LaeERis2L%2FGmeEyhw%2BR5L1BU%2FiLtHoZwb%2FMA4tI9r3eUC4xS%2Fy9iRyCLJ9AmCp6nsn1b4MZBSL2JwMwwYmbvwY6pgHcgago8JXJnzkGxOmODmh2BK9%2BuARY5He0tn%2BclkCEPW9%2BsFAxbLrarUQuduOCJWn1IewXMJXbKHdiOmLSHXLPZzIsVpLnc%2B9cY%2F7iIoVV%2F%2B7ab6hSvWn1vjs1%2Bmo96JmEj0YHVMUUejMPnkPoHk9SqNgSc3jNWujZLqB1%2FtbNyKlsAQIyvb2TMlXnw0FQ12vdJrKqc1lgzcpXaXskfoS6nObigrNN&X-Amz-Signature=8284f362dd3ec1bd6f40c3c20a2034c63d672249ad6bfee9181717d5be48e86e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
