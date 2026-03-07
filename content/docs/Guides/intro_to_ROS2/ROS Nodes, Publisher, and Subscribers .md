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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWD322A%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2BqRyhmOMfFn8dK0JIzbCOnQOh%2B6F5lFAP1GTASdmmqgIhAOnAZeSEpycT07NLzdPEBIT%2BiWaz2QZ3I43h%2BVJrXUImKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMbncNLzMqifOfPTkq3AMJgXmvazirLdPFWNxOZG%2FWenWGrotzrI9FKqQQhnhyPD%2FlW2vp96n1sap5iQpbfEAXEKjuaIk6tD1HTUqluKpnEoL6geOUhE0l60K%2BfiYDsg6hDgOnHAbeyHQVa9EfY1LpaYohiw23PjhRaB7G1rWC2q9WPpF63yhx4kYD5BcNnfFs5pZ8cue46Hooo9wfw%2FNcTqmb7o1jVSMpC1Mgr%2B3aVHTzk8%2F34pEe3PB1iIhvN8FNSRKUfy2HnK1K7R8I0as9lJm3dV3MhsVO2QHrSmxxAWs9C5gZSj8euaO78lR%2FrKM3IrfWA4hKyZcZRjaYljJ2u3%2F%2FVv06yzoud7dhvMKHKSaBAn0QU6gmY%2BJ1q%2BeGQwJfO9O5uEYoDCJIRA7HQwL7Gi6253FnWUjOEWlIaJZkTvuU1sUGrJgGON4%2BfK42Yp83oe3FeHjR5DOZEqsFxrFNb3ehldJbxiGJcxM6Cjab046jVLXNTn7fmRdpDEz5HyL%2BMPNcayFYostINpDq9jB671sNgfUpotJ8VIXG5rMLED9jy%2FhWetl5HUjrFe27UjYloNqrcMeWrdMpqxc3V52EWoG5V56H%2FYA4Ii2e80TxE%2BYRd%2BQYSfaxZZk5XZl6UM9GKg72ZMcsZ4IQJjC%2F6a3NBjqkAdrvX3K20zHD012EcoAvc2V1iZegXLZvcIarZbVrbWc0F1ZBymoFF5TPkIAFANXiTOFRrQmxIuHEqd4QaZZXdfIaVajD%2FxC2DspsNTaNyUH5PYXiwe1ZvALW5ADY1dG5I%2FoJDEGmN5UOpuSrQiSliRe2F2zEeGWXfQPdxrysmLRPftSRlXZgv0fnyiJv3229LwqzXDH0Nf2RzUCMIvFqOWC9%2FTae&X-Amz-Signature=db52b5f4ce7e430757e556e1e410d034115ba033808b9a7ddafc02f9a2441161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWD322A%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2BqRyhmOMfFn8dK0JIzbCOnQOh%2B6F5lFAP1GTASdmmqgIhAOnAZeSEpycT07NLzdPEBIT%2BiWaz2QZ3I43h%2BVJrXUImKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMbncNLzMqifOfPTkq3AMJgXmvazirLdPFWNxOZG%2FWenWGrotzrI9FKqQQhnhyPD%2FlW2vp96n1sap5iQpbfEAXEKjuaIk6tD1HTUqluKpnEoL6geOUhE0l60K%2BfiYDsg6hDgOnHAbeyHQVa9EfY1LpaYohiw23PjhRaB7G1rWC2q9WPpF63yhx4kYD5BcNnfFs5pZ8cue46Hooo9wfw%2FNcTqmb7o1jVSMpC1Mgr%2B3aVHTzk8%2F34pEe3PB1iIhvN8FNSRKUfy2HnK1K7R8I0as9lJm3dV3MhsVO2QHrSmxxAWs9C5gZSj8euaO78lR%2FrKM3IrfWA4hKyZcZRjaYljJ2u3%2F%2FVv06yzoud7dhvMKHKSaBAn0QU6gmY%2BJ1q%2BeGQwJfO9O5uEYoDCJIRA7HQwL7Gi6253FnWUjOEWlIaJZkTvuU1sUGrJgGON4%2BfK42Yp83oe3FeHjR5DOZEqsFxrFNb3ehldJbxiGJcxM6Cjab046jVLXNTn7fmRdpDEz5HyL%2BMPNcayFYostINpDq9jB671sNgfUpotJ8VIXG5rMLED9jy%2FhWetl5HUjrFe27UjYloNqrcMeWrdMpqxc3V52EWoG5V56H%2FYA4Ii2e80TxE%2BYRd%2BQYSfaxZZk5XZl6UM9GKg72ZMcsZ4IQJjC%2F6a3NBjqkAdrvX3K20zHD012EcoAvc2V1iZegXLZvcIarZbVrbWc0F1ZBymoFF5TPkIAFANXiTOFRrQmxIuHEqd4QaZZXdfIaVajD%2FxC2DspsNTaNyUH5PYXiwe1ZvALW5ADY1dG5I%2FoJDEGmN5UOpuSrQiSliRe2F2zEeGWXfQPdxrysmLRPftSRlXZgv0fnyiJv3229LwqzXDH0Nf2RzUCMIvFqOWC9%2FTae&X-Amz-Signature=8bd9ab39b81d275869828b11b2f0988f590cbcbc28bbe9a2088d0f290037b35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWD322A%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2BqRyhmOMfFn8dK0JIzbCOnQOh%2B6F5lFAP1GTASdmmqgIhAOnAZeSEpycT07NLzdPEBIT%2BiWaz2QZ3I43h%2BVJrXUImKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMbncNLzMqifOfPTkq3AMJgXmvazirLdPFWNxOZG%2FWenWGrotzrI9FKqQQhnhyPD%2FlW2vp96n1sap5iQpbfEAXEKjuaIk6tD1HTUqluKpnEoL6geOUhE0l60K%2BfiYDsg6hDgOnHAbeyHQVa9EfY1LpaYohiw23PjhRaB7G1rWC2q9WPpF63yhx4kYD5BcNnfFs5pZ8cue46Hooo9wfw%2FNcTqmb7o1jVSMpC1Mgr%2B3aVHTzk8%2F34pEe3PB1iIhvN8FNSRKUfy2HnK1K7R8I0as9lJm3dV3MhsVO2QHrSmxxAWs9C5gZSj8euaO78lR%2FrKM3IrfWA4hKyZcZRjaYljJ2u3%2F%2FVv06yzoud7dhvMKHKSaBAn0QU6gmY%2BJ1q%2BeGQwJfO9O5uEYoDCJIRA7HQwL7Gi6253FnWUjOEWlIaJZkTvuU1sUGrJgGON4%2BfK42Yp83oe3FeHjR5DOZEqsFxrFNb3ehldJbxiGJcxM6Cjab046jVLXNTn7fmRdpDEz5HyL%2BMPNcayFYostINpDq9jB671sNgfUpotJ8VIXG5rMLED9jy%2FhWetl5HUjrFe27UjYloNqrcMeWrdMpqxc3V52EWoG5V56H%2FYA4Ii2e80TxE%2BYRd%2BQYSfaxZZk5XZl6UM9GKg72ZMcsZ4IQJjC%2F6a3NBjqkAdrvX3K20zHD012EcoAvc2V1iZegXLZvcIarZbVrbWc0F1ZBymoFF5TPkIAFANXiTOFRrQmxIuHEqd4QaZZXdfIaVajD%2FxC2DspsNTaNyUH5PYXiwe1ZvALW5ADY1dG5I%2FoJDEGmN5UOpuSrQiSliRe2F2zEeGWXfQPdxrysmLRPftSRlXZgv0fnyiJv3229LwqzXDH0Nf2RzUCMIvFqOWC9%2FTae&X-Amz-Signature=4389ebb7f689d974b7551ecd539d3987fc9fe941a513cbf4e442d83a2ee1c690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWD322A%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2BqRyhmOMfFn8dK0JIzbCOnQOh%2B6F5lFAP1GTASdmmqgIhAOnAZeSEpycT07NLzdPEBIT%2BiWaz2QZ3I43h%2BVJrXUImKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMbncNLzMqifOfPTkq3AMJgXmvazirLdPFWNxOZG%2FWenWGrotzrI9FKqQQhnhyPD%2FlW2vp96n1sap5iQpbfEAXEKjuaIk6tD1HTUqluKpnEoL6geOUhE0l60K%2BfiYDsg6hDgOnHAbeyHQVa9EfY1LpaYohiw23PjhRaB7G1rWC2q9WPpF63yhx4kYD5BcNnfFs5pZ8cue46Hooo9wfw%2FNcTqmb7o1jVSMpC1Mgr%2B3aVHTzk8%2F34pEe3PB1iIhvN8FNSRKUfy2HnK1K7R8I0as9lJm3dV3MhsVO2QHrSmxxAWs9C5gZSj8euaO78lR%2FrKM3IrfWA4hKyZcZRjaYljJ2u3%2F%2FVv06yzoud7dhvMKHKSaBAn0QU6gmY%2BJ1q%2BeGQwJfO9O5uEYoDCJIRA7HQwL7Gi6253FnWUjOEWlIaJZkTvuU1sUGrJgGON4%2BfK42Yp83oe3FeHjR5DOZEqsFxrFNb3ehldJbxiGJcxM6Cjab046jVLXNTn7fmRdpDEz5HyL%2BMPNcayFYostINpDq9jB671sNgfUpotJ8VIXG5rMLED9jy%2FhWetl5HUjrFe27UjYloNqrcMeWrdMpqxc3V52EWoG5V56H%2FYA4Ii2e80TxE%2BYRd%2BQYSfaxZZk5XZl6UM9GKg72ZMcsZ4IQJjC%2F6a3NBjqkAdrvX3K20zHD012EcoAvc2V1iZegXLZvcIarZbVrbWc0F1ZBymoFF5TPkIAFANXiTOFRrQmxIuHEqd4QaZZXdfIaVajD%2FxC2DspsNTaNyUH5PYXiwe1ZvALW5ADY1dG5I%2FoJDEGmN5UOpuSrQiSliRe2F2zEeGWXfQPdxrysmLRPftSRlXZgv0fnyiJv3229LwqzXDH0Nf2RzUCMIvFqOWC9%2FTae&X-Amz-Signature=55a66d0aeffddc4bd13b9e8d82e096c29ce717b0e9abc731d29da828c6f21851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWD322A%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2BqRyhmOMfFn8dK0JIzbCOnQOh%2B6F5lFAP1GTASdmmqgIhAOnAZeSEpycT07NLzdPEBIT%2BiWaz2QZ3I43h%2BVJrXUImKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMbncNLzMqifOfPTkq3AMJgXmvazirLdPFWNxOZG%2FWenWGrotzrI9FKqQQhnhyPD%2FlW2vp96n1sap5iQpbfEAXEKjuaIk6tD1HTUqluKpnEoL6geOUhE0l60K%2BfiYDsg6hDgOnHAbeyHQVa9EfY1LpaYohiw23PjhRaB7G1rWC2q9WPpF63yhx4kYD5BcNnfFs5pZ8cue46Hooo9wfw%2FNcTqmb7o1jVSMpC1Mgr%2B3aVHTzk8%2F34pEe3PB1iIhvN8FNSRKUfy2HnK1K7R8I0as9lJm3dV3MhsVO2QHrSmxxAWs9C5gZSj8euaO78lR%2FrKM3IrfWA4hKyZcZRjaYljJ2u3%2F%2FVv06yzoud7dhvMKHKSaBAn0QU6gmY%2BJ1q%2BeGQwJfO9O5uEYoDCJIRA7HQwL7Gi6253FnWUjOEWlIaJZkTvuU1sUGrJgGON4%2BfK42Yp83oe3FeHjR5DOZEqsFxrFNb3ehldJbxiGJcxM6Cjab046jVLXNTn7fmRdpDEz5HyL%2BMPNcayFYostINpDq9jB671sNgfUpotJ8VIXG5rMLED9jy%2FhWetl5HUjrFe27UjYloNqrcMeWrdMpqxc3V52EWoG5V56H%2FYA4Ii2e80TxE%2BYRd%2BQYSfaxZZk5XZl6UM9GKg72ZMcsZ4IQJjC%2F6a3NBjqkAdrvX3K20zHD012EcoAvc2V1iZegXLZvcIarZbVrbWc0F1ZBymoFF5TPkIAFANXiTOFRrQmxIuHEqd4QaZZXdfIaVajD%2FxC2DspsNTaNyUH5PYXiwe1ZvALW5ADY1dG5I%2FoJDEGmN5UOpuSrQiSliRe2F2zEeGWXfQPdxrysmLRPftSRlXZgv0fnyiJv3229LwqzXDH0Nf2RzUCMIvFqOWC9%2FTae&X-Amz-Signature=0616b984a047fb7703d9f853629bc0aa511277575c61afefdc974869238ec609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWD322A%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2BqRyhmOMfFn8dK0JIzbCOnQOh%2B6F5lFAP1GTASdmmqgIhAOnAZeSEpycT07NLzdPEBIT%2BiWaz2QZ3I43h%2BVJrXUImKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMbncNLzMqifOfPTkq3AMJgXmvazirLdPFWNxOZG%2FWenWGrotzrI9FKqQQhnhyPD%2FlW2vp96n1sap5iQpbfEAXEKjuaIk6tD1HTUqluKpnEoL6geOUhE0l60K%2BfiYDsg6hDgOnHAbeyHQVa9EfY1LpaYohiw23PjhRaB7G1rWC2q9WPpF63yhx4kYD5BcNnfFs5pZ8cue46Hooo9wfw%2FNcTqmb7o1jVSMpC1Mgr%2B3aVHTzk8%2F34pEe3PB1iIhvN8FNSRKUfy2HnK1K7R8I0as9lJm3dV3MhsVO2QHrSmxxAWs9C5gZSj8euaO78lR%2FrKM3IrfWA4hKyZcZRjaYljJ2u3%2F%2FVv06yzoud7dhvMKHKSaBAn0QU6gmY%2BJ1q%2BeGQwJfO9O5uEYoDCJIRA7HQwL7Gi6253FnWUjOEWlIaJZkTvuU1sUGrJgGON4%2BfK42Yp83oe3FeHjR5DOZEqsFxrFNb3ehldJbxiGJcxM6Cjab046jVLXNTn7fmRdpDEz5HyL%2BMPNcayFYostINpDq9jB671sNgfUpotJ8VIXG5rMLED9jy%2FhWetl5HUjrFe27UjYloNqrcMeWrdMpqxc3V52EWoG5V56H%2FYA4Ii2e80TxE%2BYRd%2BQYSfaxZZk5XZl6UM9GKg72ZMcsZ4IQJjC%2F6a3NBjqkAdrvX3K20zHD012EcoAvc2V1iZegXLZvcIarZbVrbWc0F1ZBymoFF5TPkIAFANXiTOFRrQmxIuHEqd4QaZZXdfIaVajD%2FxC2DspsNTaNyUH5PYXiwe1ZvALW5ADY1dG5I%2FoJDEGmN5UOpuSrQiSliRe2F2zEeGWXfQPdxrysmLRPftSRlXZgv0fnyiJv3229LwqzXDH0Nf2RzUCMIvFqOWC9%2FTae&X-Amz-Signature=f238e511a7cae4e64c3342b3a661110e2c3e46b14dbbdb05be83a838e15b9f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWD322A%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2BqRyhmOMfFn8dK0JIzbCOnQOh%2B6F5lFAP1GTASdmmqgIhAOnAZeSEpycT07NLzdPEBIT%2BiWaz2QZ3I43h%2BVJrXUImKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMbncNLzMqifOfPTkq3AMJgXmvazirLdPFWNxOZG%2FWenWGrotzrI9FKqQQhnhyPD%2FlW2vp96n1sap5iQpbfEAXEKjuaIk6tD1HTUqluKpnEoL6geOUhE0l60K%2BfiYDsg6hDgOnHAbeyHQVa9EfY1LpaYohiw23PjhRaB7G1rWC2q9WPpF63yhx4kYD5BcNnfFs5pZ8cue46Hooo9wfw%2FNcTqmb7o1jVSMpC1Mgr%2B3aVHTzk8%2F34pEe3PB1iIhvN8FNSRKUfy2HnK1K7R8I0as9lJm3dV3MhsVO2QHrSmxxAWs9C5gZSj8euaO78lR%2FrKM3IrfWA4hKyZcZRjaYljJ2u3%2F%2FVv06yzoud7dhvMKHKSaBAn0QU6gmY%2BJ1q%2BeGQwJfO9O5uEYoDCJIRA7HQwL7Gi6253FnWUjOEWlIaJZkTvuU1sUGrJgGON4%2BfK42Yp83oe3FeHjR5DOZEqsFxrFNb3ehldJbxiGJcxM6Cjab046jVLXNTn7fmRdpDEz5HyL%2BMPNcayFYostINpDq9jB671sNgfUpotJ8VIXG5rMLED9jy%2FhWetl5HUjrFe27UjYloNqrcMeWrdMpqxc3V52EWoG5V56H%2FYA4Ii2e80TxE%2BYRd%2BQYSfaxZZk5XZl6UM9GKg72ZMcsZ4IQJjC%2F6a3NBjqkAdrvX3K20zHD012EcoAvc2V1iZegXLZvcIarZbVrbWc0F1ZBymoFF5TPkIAFANXiTOFRrQmxIuHEqd4QaZZXdfIaVajD%2FxC2DspsNTaNyUH5PYXiwe1ZvALW5ADY1dG5I%2FoJDEGmN5UOpuSrQiSliRe2F2zEeGWXfQPdxrysmLRPftSRlXZgv0fnyiJv3229LwqzXDH0Nf2RzUCMIvFqOWC9%2FTae&X-Amz-Signature=1fab0729e21e197d46a90018e74cf5e7a32c7977edf4f2c407ea867bffa11fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWD322A%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2BqRyhmOMfFn8dK0JIzbCOnQOh%2B6F5lFAP1GTASdmmqgIhAOnAZeSEpycT07NLzdPEBIT%2BiWaz2QZ3I43h%2BVJrXUImKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMbncNLzMqifOfPTkq3AMJgXmvazirLdPFWNxOZG%2FWenWGrotzrI9FKqQQhnhyPD%2FlW2vp96n1sap5iQpbfEAXEKjuaIk6tD1HTUqluKpnEoL6geOUhE0l60K%2BfiYDsg6hDgOnHAbeyHQVa9EfY1LpaYohiw23PjhRaB7G1rWC2q9WPpF63yhx4kYD5BcNnfFs5pZ8cue46Hooo9wfw%2FNcTqmb7o1jVSMpC1Mgr%2B3aVHTzk8%2F34pEe3PB1iIhvN8FNSRKUfy2HnK1K7R8I0as9lJm3dV3MhsVO2QHrSmxxAWs9C5gZSj8euaO78lR%2FrKM3IrfWA4hKyZcZRjaYljJ2u3%2F%2FVv06yzoud7dhvMKHKSaBAn0QU6gmY%2BJ1q%2BeGQwJfO9O5uEYoDCJIRA7HQwL7Gi6253FnWUjOEWlIaJZkTvuU1sUGrJgGON4%2BfK42Yp83oe3FeHjR5DOZEqsFxrFNb3ehldJbxiGJcxM6Cjab046jVLXNTn7fmRdpDEz5HyL%2BMPNcayFYostINpDq9jB671sNgfUpotJ8VIXG5rMLED9jy%2FhWetl5HUjrFe27UjYloNqrcMeWrdMpqxc3V52EWoG5V56H%2FYA4Ii2e80TxE%2BYRd%2BQYSfaxZZk5XZl6UM9GKg72ZMcsZ4IQJjC%2F6a3NBjqkAdrvX3K20zHD012EcoAvc2V1iZegXLZvcIarZbVrbWc0F1ZBymoFF5TPkIAFANXiTOFRrQmxIuHEqd4QaZZXdfIaVajD%2FxC2DspsNTaNyUH5PYXiwe1ZvALW5ADY1dG5I%2FoJDEGmN5UOpuSrQiSliRe2F2zEeGWXfQPdxrysmLRPftSRlXZgv0fnyiJv3229LwqzXDH0Nf2RzUCMIvFqOWC9%2FTae&X-Amz-Signature=0c5b88edde6d4f66ab9b0cf372d2708f14eaabc7b64821cb255f75e40dc4d093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
