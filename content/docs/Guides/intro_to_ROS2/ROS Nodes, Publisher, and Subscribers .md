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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5VD5N7%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiEujOX1NxjMxe8g7u6Gt3HbyXelkwTLWs9VW9o6uVwQIhAL4Ljzl9iUGaJcaGRRFyo6T86WnjMniR3lqHd5lGgZAsKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO1rXEzTAz6uew2U4q3AOVZfi7fLSBCUzxOOElpnZstuF5SVn1mEyOaUVW%2Fq1iR3P2zECxpPBPZ3Tm3oQm8%2FG1dQ5rk6kQYzSzmfT3V3PSp9Qn7RzKHwoXG4oYUeBAJ0Kvfhe3Kq%2FLPnMqulY%2Fu7VLv0ZNyTCzRwwoRvS4TgPfgfsYhbZpI7FvFJ342O9r7L4v1omfO4Hotdocrt4x5duYVoW%2Be%2FxgVChOL%2BEtkSfzZwnGcqypp8c%2F%2FVSDR%2Bx4TIzk%2Bo897Na1CgGF%2BUSWczrJgMFF18zDCZAxuUZ4S%2BX%2BPgxgQqEgGwF4NWYXwE5SnR4vwHOQyOSkTiPX54ABH4rG6uVI%2FNE3F5LB6MqF6mdkt87yR2eP%2BVHDml6vpMxxRSaSm8a1j%2BiJkyWbW5EMz1zvps1Az3ZYm3rmSLSLt1Ok0%2B5Y3ZnWJX3TjlIX4EAwLf0hDZc4mhCfhnIq6B8Q9APJwaur%2Fak7GONZSKTdmSlrDkALqZx2AYA4LZc40c7j6vhNY1Go%2FtefuofmOAkFWU4sKvf1fqT0uiFWxqJthDu9wCWuzm9uadHAx4Pi1mzLJLnugUf7kzXl4HK0LPFsviIxaWILOF0b9%2B%2FUofvzqSAozpURZzkdxp355%2BxSV%2BP9tWQwGE65zhUWkFYt9jC6jNbHBjqkAbSs0Cf%2BkMpi742709A41tsKqU5mlaT5%2F5b0ad40TgaDX%2B9I2hFqqsl0FwRaJUeiQ6RWtfwYBiiCzchizozZKEcCcVXMzp65dBWs2geYDtnY2KZveTTNaKBlg%2B848G81M0cLkwAgaFr1wYNukZlONmc%2FGfa84cOVckzjhMQipwyynj92i3um6XR6vh2cFZ4hRrYXyvCxQQNSeuViPmAPSJMcetQG&X-Amz-Signature=7e0ddc0ba909b6b2ef45834730d9d3d9518c88494bdc30e96276ee41e34e3d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5VD5N7%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiEujOX1NxjMxe8g7u6Gt3HbyXelkwTLWs9VW9o6uVwQIhAL4Ljzl9iUGaJcaGRRFyo6T86WnjMniR3lqHd5lGgZAsKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO1rXEzTAz6uew2U4q3AOVZfi7fLSBCUzxOOElpnZstuF5SVn1mEyOaUVW%2Fq1iR3P2zECxpPBPZ3Tm3oQm8%2FG1dQ5rk6kQYzSzmfT3V3PSp9Qn7RzKHwoXG4oYUeBAJ0Kvfhe3Kq%2FLPnMqulY%2Fu7VLv0ZNyTCzRwwoRvS4TgPfgfsYhbZpI7FvFJ342O9r7L4v1omfO4Hotdocrt4x5duYVoW%2Be%2FxgVChOL%2BEtkSfzZwnGcqypp8c%2F%2FVSDR%2Bx4TIzk%2Bo897Na1CgGF%2BUSWczrJgMFF18zDCZAxuUZ4S%2BX%2BPgxgQqEgGwF4NWYXwE5SnR4vwHOQyOSkTiPX54ABH4rG6uVI%2FNE3F5LB6MqF6mdkt87yR2eP%2BVHDml6vpMxxRSaSm8a1j%2BiJkyWbW5EMz1zvps1Az3ZYm3rmSLSLt1Ok0%2B5Y3ZnWJX3TjlIX4EAwLf0hDZc4mhCfhnIq6B8Q9APJwaur%2Fak7GONZSKTdmSlrDkALqZx2AYA4LZc40c7j6vhNY1Go%2FtefuofmOAkFWU4sKvf1fqT0uiFWxqJthDu9wCWuzm9uadHAx4Pi1mzLJLnugUf7kzXl4HK0LPFsviIxaWILOF0b9%2B%2FUofvzqSAozpURZzkdxp355%2BxSV%2BP9tWQwGE65zhUWkFYt9jC6jNbHBjqkAbSs0Cf%2BkMpi742709A41tsKqU5mlaT5%2F5b0ad40TgaDX%2B9I2hFqqsl0FwRaJUeiQ6RWtfwYBiiCzchizozZKEcCcVXMzp65dBWs2geYDtnY2KZveTTNaKBlg%2B848G81M0cLkwAgaFr1wYNukZlONmc%2FGfa84cOVckzjhMQipwyynj92i3um6XR6vh2cFZ4hRrYXyvCxQQNSeuViPmAPSJMcetQG&X-Amz-Signature=643d91d20dea042d1e32f304170a8e2592b626c5911225fc5df1b28d49863b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5VD5N7%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiEujOX1NxjMxe8g7u6Gt3HbyXelkwTLWs9VW9o6uVwQIhAL4Ljzl9iUGaJcaGRRFyo6T86WnjMniR3lqHd5lGgZAsKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO1rXEzTAz6uew2U4q3AOVZfi7fLSBCUzxOOElpnZstuF5SVn1mEyOaUVW%2Fq1iR3P2zECxpPBPZ3Tm3oQm8%2FG1dQ5rk6kQYzSzmfT3V3PSp9Qn7RzKHwoXG4oYUeBAJ0Kvfhe3Kq%2FLPnMqulY%2Fu7VLv0ZNyTCzRwwoRvS4TgPfgfsYhbZpI7FvFJ342O9r7L4v1omfO4Hotdocrt4x5duYVoW%2Be%2FxgVChOL%2BEtkSfzZwnGcqypp8c%2F%2FVSDR%2Bx4TIzk%2Bo897Na1CgGF%2BUSWczrJgMFF18zDCZAxuUZ4S%2BX%2BPgxgQqEgGwF4NWYXwE5SnR4vwHOQyOSkTiPX54ABH4rG6uVI%2FNE3F5LB6MqF6mdkt87yR2eP%2BVHDml6vpMxxRSaSm8a1j%2BiJkyWbW5EMz1zvps1Az3ZYm3rmSLSLt1Ok0%2B5Y3ZnWJX3TjlIX4EAwLf0hDZc4mhCfhnIq6B8Q9APJwaur%2Fak7GONZSKTdmSlrDkALqZx2AYA4LZc40c7j6vhNY1Go%2FtefuofmOAkFWU4sKvf1fqT0uiFWxqJthDu9wCWuzm9uadHAx4Pi1mzLJLnugUf7kzXl4HK0LPFsviIxaWILOF0b9%2B%2FUofvzqSAozpURZzkdxp355%2BxSV%2BP9tWQwGE65zhUWkFYt9jC6jNbHBjqkAbSs0Cf%2BkMpi742709A41tsKqU5mlaT5%2F5b0ad40TgaDX%2B9I2hFqqsl0FwRaJUeiQ6RWtfwYBiiCzchizozZKEcCcVXMzp65dBWs2geYDtnY2KZveTTNaKBlg%2B848G81M0cLkwAgaFr1wYNukZlONmc%2FGfa84cOVckzjhMQipwyynj92i3um6XR6vh2cFZ4hRrYXyvCxQQNSeuViPmAPSJMcetQG&X-Amz-Signature=c59a04934ad17ee0ed2d866b8aa93d1db0289f069fd1ebd48ef8b0cc8dae8fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5VD5N7%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiEujOX1NxjMxe8g7u6Gt3HbyXelkwTLWs9VW9o6uVwQIhAL4Ljzl9iUGaJcaGRRFyo6T86WnjMniR3lqHd5lGgZAsKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO1rXEzTAz6uew2U4q3AOVZfi7fLSBCUzxOOElpnZstuF5SVn1mEyOaUVW%2Fq1iR3P2zECxpPBPZ3Tm3oQm8%2FG1dQ5rk6kQYzSzmfT3V3PSp9Qn7RzKHwoXG4oYUeBAJ0Kvfhe3Kq%2FLPnMqulY%2Fu7VLv0ZNyTCzRwwoRvS4TgPfgfsYhbZpI7FvFJ342O9r7L4v1omfO4Hotdocrt4x5duYVoW%2Be%2FxgVChOL%2BEtkSfzZwnGcqypp8c%2F%2FVSDR%2Bx4TIzk%2Bo897Na1CgGF%2BUSWczrJgMFF18zDCZAxuUZ4S%2BX%2BPgxgQqEgGwF4NWYXwE5SnR4vwHOQyOSkTiPX54ABH4rG6uVI%2FNE3F5LB6MqF6mdkt87yR2eP%2BVHDml6vpMxxRSaSm8a1j%2BiJkyWbW5EMz1zvps1Az3ZYm3rmSLSLt1Ok0%2B5Y3ZnWJX3TjlIX4EAwLf0hDZc4mhCfhnIq6B8Q9APJwaur%2Fak7GONZSKTdmSlrDkALqZx2AYA4LZc40c7j6vhNY1Go%2FtefuofmOAkFWU4sKvf1fqT0uiFWxqJthDu9wCWuzm9uadHAx4Pi1mzLJLnugUf7kzXl4HK0LPFsviIxaWILOF0b9%2B%2FUofvzqSAozpURZzkdxp355%2BxSV%2BP9tWQwGE65zhUWkFYt9jC6jNbHBjqkAbSs0Cf%2BkMpi742709A41tsKqU5mlaT5%2F5b0ad40TgaDX%2B9I2hFqqsl0FwRaJUeiQ6RWtfwYBiiCzchizozZKEcCcVXMzp65dBWs2geYDtnY2KZveTTNaKBlg%2B848G81M0cLkwAgaFr1wYNukZlONmc%2FGfa84cOVckzjhMQipwyynj92i3um6XR6vh2cFZ4hRrYXyvCxQQNSeuViPmAPSJMcetQG&X-Amz-Signature=977629e084c4fd59b79ad7a0d6f99c8cf3a7d78b48bb6fb44edb73c921c1ff7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5VD5N7%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiEujOX1NxjMxe8g7u6Gt3HbyXelkwTLWs9VW9o6uVwQIhAL4Ljzl9iUGaJcaGRRFyo6T86WnjMniR3lqHd5lGgZAsKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO1rXEzTAz6uew2U4q3AOVZfi7fLSBCUzxOOElpnZstuF5SVn1mEyOaUVW%2Fq1iR3P2zECxpPBPZ3Tm3oQm8%2FG1dQ5rk6kQYzSzmfT3V3PSp9Qn7RzKHwoXG4oYUeBAJ0Kvfhe3Kq%2FLPnMqulY%2Fu7VLv0ZNyTCzRwwoRvS4TgPfgfsYhbZpI7FvFJ342O9r7L4v1omfO4Hotdocrt4x5duYVoW%2Be%2FxgVChOL%2BEtkSfzZwnGcqypp8c%2F%2FVSDR%2Bx4TIzk%2Bo897Na1CgGF%2BUSWczrJgMFF18zDCZAxuUZ4S%2BX%2BPgxgQqEgGwF4NWYXwE5SnR4vwHOQyOSkTiPX54ABH4rG6uVI%2FNE3F5LB6MqF6mdkt87yR2eP%2BVHDml6vpMxxRSaSm8a1j%2BiJkyWbW5EMz1zvps1Az3ZYm3rmSLSLt1Ok0%2B5Y3ZnWJX3TjlIX4EAwLf0hDZc4mhCfhnIq6B8Q9APJwaur%2Fak7GONZSKTdmSlrDkALqZx2AYA4LZc40c7j6vhNY1Go%2FtefuofmOAkFWU4sKvf1fqT0uiFWxqJthDu9wCWuzm9uadHAx4Pi1mzLJLnugUf7kzXl4HK0LPFsviIxaWILOF0b9%2B%2FUofvzqSAozpURZzkdxp355%2BxSV%2BP9tWQwGE65zhUWkFYt9jC6jNbHBjqkAbSs0Cf%2BkMpi742709A41tsKqU5mlaT5%2F5b0ad40TgaDX%2B9I2hFqqsl0FwRaJUeiQ6RWtfwYBiiCzchizozZKEcCcVXMzp65dBWs2geYDtnY2KZveTTNaKBlg%2B848G81M0cLkwAgaFr1wYNukZlONmc%2FGfa84cOVckzjhMQipwyynj92i3um6XR6vh2cFZ4hRrYXyvCxQQNSeuViPmAPSJMcetQG&X-Amz-Signature=f25598f213079718acbfb0ee3860d9fcc61d805cbac5d7a8a35f07de25f16830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5VD5N7%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiEujOX1NxjMxe8g7u6Gt3HbyXelkwTLWs9VW9o6uVwQIhAL4Ljzl9iUGaJcaGRRFyo6T86WnjMniR3lqHd5lGgZAsKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO1rXEzTAz6uew2U4q3AOVZfi7fLSBCUzxOOElpnZstuF5SVn1mEyOaUVW%2Fq1iR3P2zECxpPBPZ3Tm3oQm8%2FG1dQ5rk6kQYzSzmfT3V3PSp9Qn7RzKHwoXG4oYUeBAJ0Kvfhe3Kq%2FLPnMqulY%2Fu7VLv0ZNyTCzRwwoRvS4TgPfgfsYhbZpI7FvFJ342O9r7L4v1omfO4Hotdocrt4x5duYVoW%2Be%2FxgVChOL%2BEtkSfzZwnGcqypp8c%2F%2FVSDR%2Bx4TIzk%2Bo897Na1CgGF%2BUSWczrJgMFF18zDCZAxuUZ4S%2BX%2BPgxgQqEgGwF4NWYXwE5SnR4vwHOQyOSkTiPX54ABH4rG6uVI%2FNE3F5LB6MqF6mdkt87yR2eP%2BVHDml6vpMxxRSaSm8a1j%2BiJkyWbW5EMz1zvps1Az3ZYm3rmSLSLt1Ok0%2B5Y3ZnWJX3TjlIX4EAwLf0hDZc4mhCfhnIq6B8Q9APJwaur%2Fak7GONZSKTdmSlrDkALqZx2AYA4LZc40c7j6vhNY1Go%2FtefuofmOAkFWU4sKvf1fqT0uiFWxqJthDu9wCWuzm9uadHAx4Pi1mzLJLnugUf7kzXl4HK0LPFsviIxaWILOF0b9%2B%2FUofvzqSAozpURZzkdxp355%2BxSV%2BP9tWQwGE65zhUWkFYt9jC6jNbHBjqkAbSs0Cf%2BkMpi742709A41tsKqU5mlaT5%2F5b0ad40TgaDX%2B9I2hFqqsl0FwRaJUeiQ6RWtfwYBiiCzchizozZKEcCcVXMzp65dBWs2geYDtnY2KZveTTNaKBlg%2B848G81M0cLkwAgaFr1wYNukZlONmc%2FGfa84cOVckzjhMQipwyynj92i3um6XR6vh2cFZ4hRrYXyvCxQQNSeuViPmAPSJMcetQG&X-Amz-Signature=87ff6cd38208b811cd3a5e12f2a399c7a559d3e3f6f66c65b4f1eaabf88cb601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5VD5N7%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiEujOX1NxjMxe8g7u6Gt3HbyXelkwTLWs9VW9o6uVwQIhAL4Ljzl9iUGaJcaGRRFyo6T86WnjMniR3lqHd5lGgZAsKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO1rXEzTAz6uew2U4q3AOVZfi7fLSBCUzxOOElpnZstuF5SVn1mEyOaUVW%2Fq1iR3P2zECxpPBPZ3Tm3oQm8%2FG1dQ5rk6kQYzSzmfT3V3PSp9Qn7RzKHwoXG4oYUeBAJ0Kvfhe3Kq%2FLPnMqulY%2Fu7VLv0ZNyTCzRwwoRvS4TgPfgfsYhbZpI7FvFJ342O9r7L4v1omfO4Hotdocrt4x5duYVoW%2Be%2FxgVChOL%2BEtkSfzZwnGcqypp8c%2F%2FVSDR%2Bx4TIzk%2Bo897Na1CgGF%2BUSWczrJgMFF18zDCZAxuUZ4S%2BX%2BPgxgQqEgGwF4NWYXwE5SnR4vwHOQyOSkTiPX54ABH4rG6uVI%2FNE3F5LB6MqF6mdkt87yR2eP%2BVHDml6vpMxxRSaSm8a1j%2BiJkyWbW5EMz1zvps1Az3ZYm3rmSLSLt1Ok0%2B5Y3ZnWJX3TjlIX4EAwLf0hDZc4mhCfhnIq6B8Q9APJwaur%2Fak7GONZSKTdmSlrDkALqZx2AYA4LZc40c7j6vhNY1Go%2FtefuofmOAkFWU4sKvf1fqT0uiFWxqJthDu9wCWuzm9uadHAx4Pi1mzLJLnugUf7kzXl4HK0LPFsviIxaWILOF0b9%2B%2FUofvzqSAozpURZzkdxp355%2BxSV%2BP9tWQwGE65zhUWkFYt9jC6jNbHBjqkAbSs0Cf%2BkMpi742709A41tsKqU5mlaT5%2F5b0ad40TgaDX%2B9I2hFqqsl0FwRaJUeiQ6RWtfwYBiiCzchizozZKEcCcVXMzp65dBWs2geYDtnY2KZveTTNaKBlg%2B848G81M0cLkwAgaFr1wYNukZlONmc%2FGfa84cOVckzjhMQipwyynj92i3um6XR6vh2cFZ4hRrYXyvCxQQNSeuViPmAPSJMcetQG&X-Amz-Signature=d0d39e4d4a644f7b8965c5426b47573e3823f79e7d74e533bbd5a98ea9b15559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5VD5N7%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCiEujOX1NxjMxe8g7u6Gt3HbyXelkwTLWs9VW9o6uVwQIhAL4Ljzl9iUGaJcaGRRFyo6T86WnjMniR3lqHd5lGgZAsKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO1rXEzTAz6uew2U4q3AOVZfi7fLSBCUzxOOElpnZstuF5SVn1mEyOaUVW%2Fq1iR3P2zECxpPBPZ3Tm3oQm8%2FG1dQ5rk6kQYzSzmfT3V3PSp9Qn7RzKHwoXG4oYUeBAJ0Kvfhe3Kq%2FLPnMqulY%2Fu7VLv0ZNyTCzRwwoRvS4TgPfgfsYhbZpI7FvFJ342O9r7L4v1omfO4Hotdocrt4x5duYVoW%2Be%2FxgVChOL%2BEtkSfzZwnGcqypp8c%2F%2FVSDR%2Bx4TIzk%2Bo897Na1CgGF%2BUSWczrJgMFF18zDCZAxuUZ4S%2BX%2BPgxgQqEgGwF4NWYXwE5SnR4vwHOQyOSkTiPX54ABH4rG6uVI%2FNE3F5LB6MqF6mdkt87yR2eP%2BVHDml6vpMxxRSaSm8a1j%2BiJkyWbW5EMz1zvps1Az3ZYm3rmSLSLt1Ok0%2B5Y3ZnWJX3TjlIX4EAwLf0hDZc4mhCfhnIq6B8Q9APJwaur%2Fak7GONZSKTdmSlrDkALqZx2AYA4LZc40c7j6vhNY1Go%2FtefuofmOAkFWU4sKvf1fqT0uiFWxqJthDu9wCWuzm9uadHAx4Pi1mzLJLnugUf7kzXl4HK0LPFsviIxaWILOF0b9%2B%2FUofvzqSAozpURZzkdxp355%2BxSV%2BP9tWQwGE65zhUWkFYt9jC6jNbHBjqkAbSs0Cf%2BkMpi742709A41tsKqU5mlaT5%2F5b0ad40TgaDX%2B9I2hFqqsl0FwRaJUeiQ6RWtfwYBiiCzchizozZKEcCcVXMzp65dBWs2geYDtnY2KZveTTNaKBlg%2B848G81M0cLkwAgaFr1wYNukZlONmc%2FGfa84cOVckzjhMQipwyynj92i3um6XR6vh2cFZ4hRrYXyvCxQQNSeuViPmAPSJMcetQG&X-Amz-Signature=4279e4c2e8fb4a1e9a142440945bbbea780ff6c914f1a72341786a88b9e2e0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
