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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2TUYH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESZYcPU7CepoZpHqAyzdithoWKXU1MDySzIO7jlN%2FZVAiB5zlvePYchM6AWyserIhWJjBOoXnK6ryi9yosYlsnS1CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMHZqP9OzsgvJ7s73KtwDLoANkad4pQxMyvLkO2GRLOo5PLAhLSl9mxSGwNY9c6g2NAJ%2F0bf4KDWRtIi%2Fr7Oq9NzW7P6voQSP4j2YD7oO1rzAptBq7qj9s0LiYtTWOaVNOjAsogPMwe98aay%2BDZIe8j8U5n474ZLJqgMxHgoGsm86EtoRtDRgHlw6LuRK%2Fs9qJ9Aqnr3YDmzzCYK%2FWsG21KVZwv63TCETJLdqIBi91HnwwR3zJ%2BI3DFliaJYbfk0LEfZO2ZriOYy%2FRILgZfsTbwI4zUhQqsrkY08WGSgJdSJDzkKzwAxZX4j55jigq0zm3OCqw3keHLB95mpKBREpMe72tCRNWLI1JZ5RLo2cLwCHn66BX8QBHfkB5i24qGFjrEUuGG5kCSovBzM8M5Fk46DP71GLAA%2BLiMppOAZ0fZahopeoHVk4Zs5URmlr%2FpHDO9TyWEkSQkvoGfuxqPPX30qAJTGZr7QOVkNy4isNUXQQQmeC1sAykWdyMWfV6nftEqANUg80MBoIhoxqBu5jy9cjV1xp9H0NDLtMdwZ5Lv2UkK2vWfRC0Q6if9nh%2B6%2BpLsn69ktqssFr1tZiIYyUvn%2FYCVzoTLfbMZM%2BeFNIWdhVbmkQJ3Dz1jqX9sgbzqJlCCmgVfLigeRm7E4w5rKpvQY6pgEO0eM68a1pmiZHuBWFWByQOIYBfnQ%2B%2BS9zawr2E6h8lw1X4e0kAaLgqLI2akpch0wYUNK%2BVUbW%2B%2BcDvL%2B8t30Yn2N8Yl6dxmeKTCHVK83JtMgmFJArAY44VnzEzz2wgSKRwSen0yobT5wBiIH%2Bc59jg1CcjT8VAEhZQQmxDyzWIjQttBqVzIBb9LEXDDXekrqERD3r7IAnkqiIi3kWS%2FAF%2BRhAeLER&X-Amz-Signature=b61bd313470f1f9152d398c1c2ab06b32cb4482b657cf64e84bbae5b0c51debb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2TUYH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESZYcPU7CepoZpHqAyzdithoWKXU1MDySzIO7jlN%2FZVAiB5zlvePYchM6AWyserIhWJjBOoXnK6ryi9yosYlsnS1CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMHZqP9OzsgvJ7s73KtwDLoANkad4pQxMyvLkO2GRLOo5PLAhLSl9mxSGwNY9c6g2NAJ%2F0bf4KDWRtIi%2Fr7Oq9NzW7P6voQSP4j2YD7oO1rzAptBq7qj9s0LiYtTWOaVNOjAsogPMwe98aay%2BDZIe8j8U5n474ZLJqgMxHgoGsm86EtoRtDRgHlw6LuRK%2Fs9qJ9Aqnr3YDmzzCYK%2FWsG21KVZwv63TCETJLdqIBi91HnwwR3zJ%2BI3DFliaJYbfk0LEfZO2ZriOYy%2FRILgZfsTbwI4zUhQqsrkY08WGSgJdSJDzkKzwAxZX4j55jigq0zm3OCqw3keHLB95mpKBREpMe72tCRNWLI1JZ5RLo2cLwCHn66BX8QBHfkB5i24qGFjrEUuGG5kCSovBzM8M5Fk46DP71GLAA%2BLiMppOAZ0fZahopeoHVk4Zs5URmlr%2FpHDO9TyWEkSQkvoGfuxqPPX30qAJTGZr7QOVkNy4isNUXQQQmeC1sAykWdyMWfV6nftEqANUg80MBoIhoxqBu5jy9cjV1xp9H0NDLtMdwZ5Lv2UkK2vWfRC0Q6if9nh%2B6%2BpLsn69ktqssFr1tZiIYyUvn%2FYCVzoTLfbMZM%2BeFNIWdhVbmkQJ3Dz1jqX9sgbzqJlCCmgVfLigeRm7E4w5rKpvQY6pgEO0eM68a1pmiZHuBWFWByQOIYBfnQ%2B%2BS9zawr2E6h8lw1X4e0kAaLgqLI2akpch0wYUNK%2BVUbW%2B%2BcDvL%2B8t30Yn2N8Yl6dxmeKTCHVK83JtMgmFJArAY44VnzEzz2wgSKRwSen0yobT5wBiIH%2Bc59jg1CcjT8VAEhZQQmxDyzWIjQttBqVzIBb9LEXDDXekrqERD3r7IAnkqiIi3kWS%2FAF%2BRhAeLER&X-Amz-Signature=99c7fdc21aeb784c257982c7b2ec1a50082e4552765011a57b574eea11e8a3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2TUYH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESZYcPU7CepoZpHqAyzdithoWKXU1MDySzIO7jlN%2FZVAiB5zlvePYchM6AWyserIhWJjBOoXnK6ryi9yosYlsnS1CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMHZqP9OzsgvJ7s73KtwDLoANkad4pQxMyvLkO2GRLOo5PLAhLSl9mxSGwNY9c6g2NAJ%2F0bf4KDWRtIi%2Fr7Oq9NzW7P6voQSP4j2YD7oO1rzAptBq7qj9s0LiYtTWOaVNOjAsogPMwe98aay%2BDZIe8j8U5n474ZLJqgMxHgoGsm86EtoRtDRgHlw6LuRK%2Fs9qJ9Aqnr3YDmzzCYK%2FWsG21KVZwv63TCETJLdqIBi91HnwwR3zJ%2BI3DFliaJYbfk0LEfZO2ZriOYy%2FRILgZfsTbwI4zUhQqsrkY08WGSgJdSJDzkKzwAxZX4j55jigq0zm3OCqw3keHLB95mpKBREpMe72tCRNWLI1JZ5RLo2cLwCHn66BX8QBHfkB5i24qGFjrEUuGG5kCSovBzM8M5Fk46DP71GLAA%2BLiMppOAZ0fZahopeoHVk4Zs5URmlr%2FpHDO9TyWEkSQkvoGfuxqPPX30qAJTGZr7QOVkNy4isNUXQQQmeC1sAykWdyMWfV6nftEqANUg80MBoIhoxqBu5jy9cjV1xp9H0NDLtMdwZ5Lv2UkK2vWfRC0Q6if9nh%2B6%2BpLsn69ktqssFr1tZiIYyUvn%2FYCVzoTLfbMZM%2BeFNIWdhVbmkQJ3Dz1jqX9sgbzqJlCCmgVfLigeRm7E4w5rKpvQY6pgEO0eM68a1pmiZHuBWFWByQOIYBfnQ%2B%2BS9zawr2E6h8lw1X4e0kAaLgqLI2akpch0wYUNK%2BVUbW%2B%2BcDvL%2B8t30Yn2N8Yl6dxmeKTCHVK83JtMgmFJArAY44VnzEzz2wgSKRwSen0yobT5wBiIH%2Bc59jg1CcjT8VAEhZQQmxDyzWIjQttBqVzIBb9LEXDDXekrqERD3r7IAnkqiIi3kWS%2FAF%2BRhAeLER&X-Amz-Signature=2e48452f959160ad2c056beded2328f0fd18f974cac0b16c7ce82a75ce500379&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2TUYH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESZYcPU7CepoZpHqAyzdithoWKXU1MDySzIO7jlN%2FZVAiB5zlvePYchM6AWyserIhWJjBOoXnK6ryi9yosYlsnS1CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMHZqP9OzsgvJ7s73KtwDLoANkad4pQxMyvLkO2GRLOo5PLAhLSl9mxSGwNY9c6g2NAJ%2F0bf4KDWRtIi%2Fr7Oq9NzW7P6voQSP4j2YD7oO1rzAptBq7qj9s0LiYtTWOaVNOjAsogPMwe98aay%2BDZIe8j8U5n474ZLJqgMxHgoGsm86EtoRtDRgHlw6LuRK%2Fs9qJ9Aqnr3YDmzzCYK%2FWsG21KVZwv63TCETJLdqIBi91HnwwR3zJ%2BI3DFliaJYbfk0LEfZO2ZriOYy%2FRILgZfsTbwI4zUhQqsrkY08WGSgJdSJDzkKzwAxZX4j55jigq0zm3OCqw3keHLB95mpKBREpMe72tCRNWLI1JZ5RLo2cLwCHn66BX8QBHfkB5i24qGFjrEUuGG5kCSovBzM8M5Fk46DP71GLAA%2BLiMppOAZ0fZahopeoHVk4Zs5URmlr%2FpHDO9TyWEkSQkvoGfuxqPPX30qAJTGZr7QOVkNy4isNUXQQQmeC1sAykWdyMWfV6nftEqANUg80MBoIhoxqBu5jy9cjV1xp9H0NDLtMdwZ5Lv2UkK2vWfRC0Q6if9nh%2B6%2BpLsn69ktqssFr1tZiIYyUvn%2FYCVzoTLfbMZM%2BeFNIWdhVbmkQJ3Dz1jqX9sgbzqJlCCmgVfLigeRm7E4w5rKpvQY6pgEO0eM68a1pmiZHuBWFWByQOIYBfnQ%2B%2BS9zawr2E6h8lw1X4e0kAaLgqLI2akpch0wYUNK%2BVUbW%2B%2BcDvL%2B8t30Yn2N8Yl6dxmeKTCHVK83JtMgmFJArAY44VnzEzz2wgSKRwSen0yobT5wBiIH%2Bc59jg1CcjT8VAEhZQQmxDyzWIjQttBqVzIBb9LEXDDXekrqERD3r7IAnkqiIi3kWS%2FAF%2BRhAeLER&X-Amz-Signature=8eda7e92d0b2088e3f64da5a4d534fade644962485ac94793adbe01b89988fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2TUYH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESZYcPU7CepoZpHqAyzdithoWKXU1MDySzIO7jlN%2FZVAiB5zlvePYchM6AWyserIhWJjBOoXnK6ryi9yosYlsnS1CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMHZqP9OzsgvJ7s73KtwDLoANkad4pQxMyvLkO2GRLOo5PLAhLSl9mxSGwNY9c6g2NAJ%2F0bf4KDWRtIi%2Fr7Oq9NzW7P6voQSP4j2YD7oO1rzAptBq7qj9s0LiYtTWOaVNOjAsogPMwe98aay%2BDZIe8j8U5n474ZLJqgMxHgoGsm86EtoRtDRgHlw6LuRK%2Fs9qJ9Aqnr3YDmzzCYK%2FWsG21KVZwv63TCETJLdqIBi91HnwwR3zJ%2BI3DFliaJYbfk0LEfZO2ZriOYy%2FRILgZfsTbwI4zUhQqsrkY08WGSgJdSJDzkKzwAxZX4j55jigq0zm3OCqw3keHLB95mpKBREpMe72tCRNWLI1JZ5RLo2cLwCHn66BX8QBHfkB5i24qGFjrEUuGG5kCSovBzM8M5Fk46DP71GLAA%2BLiMppOAZ0fZahopeoHVk4Zs5URmlr%2FpHDO9TyWEkSQkvoGfuxqPPX30qAJTGZr7QOVkNy4isNUXQQQmeC1sAykWdyMWfV6nftEqANUg80MBoIhoxqBu5jy9cjV1xp9H0NDLtMdwZ5Lv2UkK2vWfRC0Q6if9nh%2B6%2BpLsn69ktqssFr1tZiIYyUvn%2FYCVzoTLfbMZM%2BeFNIWdhVbmkQJ3Dz1jqX9sgbzqJlCCmgVfLigeRm7E4w5rKpvQY6pgEO0eM68a1pmiZHuBWFWByQOIYBfnQ%2B%2BS9zawr2E6h8lw1X4e0kAaLgqLI2akpch0wYUNK%2BVUbW%2B%2BcDvL%2B8t30Yn2N8Yl6dxmeKTCHVK83JtMgmFJArAY44VnzEzz2wgSKRwSen0yobT5wBiIH%2Bc59jg1CcjT8VAEhZQQmxDyzWIjQttBqVzIBb9LEXDDXekrqERD3r7IAnkqiIi3kWS%2FAF%2BRhAeLER&X-Amz-Signature=64bdc8a9cf95cbc11303bdda1961b00a9e7b9f4f2d18eb2d3e9861142bc2c377&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2TUYH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESZYcPU7CepoZpHqAyzdithoWKXU1MDySzIO7jlN%2FZVAiB5zlvePYchM6AWyserIhWJjBOoXnK6ryi9yosYlsnS1CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMHZqP9OzsgvJ7s73KtwDLoANkad4pQxMyvLkO2GRLOo5PLAhLSl9mxSGwNY9c6g2NAJ%2F0bf4KDWRtIi%2Fr7Oq9NzW7P6voQSP4j2YD7oO1rzAptBq7qj9s0LiYtTWOaVNOjAsogPMwe98aay%2BDZIe8j8U5n474ZLJqgMxHgoGsm86EtoRtDRgHlw6LuRK%2Fs9qJ9Aqnr3YDmzzCYK%2FWsG21KVZwv63TCETJLdqIBi91HnwwR3zJ%2BI3DFliaJYbfk0LEfZO2ZriOYy%2FRILgZfsTbwI4zUhQqsrkY08WGSgJdSJDzkKzwAxZX4j55jigq0zm3OCqw3keHLB95mpKBREpMe72tCRNWLI1JZ5RLo2cLwCHn66BX8QBHfkB5i24qGFjrEUuGG5kCSovBzM8M5Fk46DP71GLAA%2BLiMppOAZ0fZahopeoHVk4Zs5URmlr%2FpHDO9TyWEkSQkvoGfuxqPPX30qAJTGZr7QOVkNy4isNUXQQQmeC1sAykWdyMWfV6nftEqANUg80MBoIhoxqBu5jy9cjV1xp9H0NDLtMdwZ5Lv2UkK2vWfRC0Q6if9nh%2B6%2BpLsn69ktqssFr1tZiIYyUvn%2FYCVzoTLfbMZM%2BeFNIWdhVbmkQJ3Dz1jqX9sgbzqJlCCmgVfLigeRm7E4w5rKpvQY6pgEO0eM68a1pmiZHuBWFWByQOIYBfnQ%2B%2BS9zawr2E6h8lw1X4e0kAaLgqLI2akpch0wYUNK%2BVUbW%2B%2BcDvL%2B8t30Yn2N8Yl6dxmeKTCHVK83JtMgmFJArAY44VnzEzz2wgSKRwSen0yobT5wBiIH%2Bc59jg1CcjT8VAEhZQQmxDyzWIjQttBqVzIBb9LEXDDXekrqERD3r7IAnkqiIi3kWS%2FAF%2BRhAeLER&X-Amz-Signature=38938cc1d22135f1c9cd139891aa209723b176fa7c42d55784d34801e5de9d34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2TUYH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESZYcPU7CepoZpHqAyzdithoWKXU1MDySzIO7jlN%2FZVAiB5zlvePYchM6AWyserIhWJjBOoXnK6ryi9yosYlsnS1CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMHZqP9OzsgvJ7s73KtwDLoANkad4pQxMyvLkO2GRLOo5PLAhLSl9mxSGwNY9c6g2NAJ%2F0bf4KDWRtIi%2Fr7Oq9NzW7P6voQSP4j2YD7oO1rzAptBq7qj9s0LiYtTWOaVNOjAsogPMwe98aay%2BDZIe8j8U5n474ZLJqgMxHgoGsm86EtoRtDRgHlw6LuRK%2Fs9qJ9Aqnr3YDmzzCYK%2FWsG21KVZwv63TCETJLdqIBi91HnwwR3zJ%2BI3DFliaJYbfk0LEfZO2ZriOYy%2FRILgZfsTbwI4zUhQqsrkY08WGSgJdSJDzkKzwAxZX4j55jigq0zm3OCqw3keHLB95mpKBREpMe72tCRNWLI1JZ5RLo2cLwCHn66BX8QBHfkB5i24qGFjrEUuGG5kCSovBzM8M5Fk46DP71GLAA%2BLiMppOAZ0fZahopeoHVk4Zs5URmlr%2FpHDO9TyWEkSQkvoGfuxqPPX30qAJTGZr7QOVkNy4isNUXQQQmeC1sAykWdyMWfV6nftEqANUg80MBoIhoxqBu5jy9cjV1xp9H0NDLtMdwZ5Lv2UkK2vWfRC0Q6if9nh%2B6%2BpLsn69ktqssFr1tZiIYyUvn%2FYCVzoTLfbMZM%2BeFNIWdhVbmkQJ3Dz1jqX9sgbzqJlCCmgVfLigeRm7E4w5rKpvQY6pgEO0eM68a1pmiZHuBWFWByQOIYBfnQ%2B%2BS9zawr2E6h8lw1X4e0kAaLgqLI2akpch0wYUNK%2BVUbW%2B%2BcDvL%2B8t30Yn2N8Yl6dxmeKTCHVK83JtMgmFJArAY44VnzEzz2wgSKRwSen0yobT5wBiIH%2Bc59jg1CcjT8VAEhZQQmxDyzWIjQttBqVzIBb9LEXDDXekrqERD3r7IAnkqiIi3kWS%2FAF%2BRhAeLER&X-Amz-Signature=bb7e2c6dbef5364be52a6b894c4b659e62f226d8aa8b480c74a6602832b093d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2TUYH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESZYcPU7CepoZpHqAyzdithoWKXU1MDySzIO7jlN%2FZVAiB5zlvePYchM6AWyserIhWJjBOoXnK6ryi9yosYlsnS1CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMHZqP9OzsgvJ7s73KtwDLoANkad4pQxMyvLkO2GRLOo5PLAhLSl9mxSGwNY9c6g2NAJ%2F0bf4KDWRtIi%2Fr7Oq9NzW7P6voQSP4j2YD7oO1rzAptBq7qj9s0LiYtTWOaVNOjAsogPMwe98aay%2BDZIe8j8U5n474ZLJqgMxHgoGsm86EtoRtDRgHlw6LuRK%2Fs9qJ9Aqnr3YDmzzCYK%2FWsG21KVZwv63TCETJLdqIBi91HnwwR3zJ%2BI3DFliaJYbfk0LEfZO2ZriOYy%2FRILgZfsTbwI4zUhQqsrkY08WGSgJdSJDzkKzwAxZX4j55jigq0zm3OCqw3keHLB95mpKBREpMe72tCRNWLI1JZ5RLo2cLwCHn66BX8QBHfkB5i24qGFjrEUuGG5kCSovBzM8M5Fk46DP71GLAA%2BLiMppOAZ0fZahopeoHVk4Zs5URmlr%2FpHDO9TyWEkSQkvoGfuxqPPX30qAJTGZr7QOVkNy4isNUXQQQmeC1sAykWdyMWfV6nftEqANUg80MBoIhoxqBu5jy9cjV1xp9H0NDLtMdwZ5Lv2UkK2vWfRC0Q6if9nh%2B6%2BpLsn69ktqssFr1tZiIYyUvn%2FYCVzoTLfbMZM%2BeFNIWdhVbmkQJ3Dz1jqX9sgbzqJlCCmgVfLigeRm7E4w5rKpvQY6pgEO0eM68a1pmiZHuBWFWByQOIYBfnQ%2B%2BS9zawr2E6h8lw1X4e0kAaLgqLI2akpch0wYUNK%2BVUbW%2B%2BcDvL%2B8t30Yn2N8Yl6dxmeKTCHVK83JtMgmFJArAY44VnzEzz2wgSKRwSen0yobT5wBiIH%2Bc59jg1CcjT8VAEhZQQmxDyzWIjQttBqVzIBb9LEXDDXekrqERD3r7IAnkqiIi3kWS%2FAF%2BRhAeLER&X-Amz-Signature=2dee0ad0a695bf67c9194403598110d24eb601f9e09dff9345bf668e4e22bd1d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
