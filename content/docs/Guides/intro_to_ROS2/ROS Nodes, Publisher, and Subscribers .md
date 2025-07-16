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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DC3C5C3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGLFqfc3Mtj%2BFxEyfsd31kWBdSc19Gh1iNnM3Xjq7irbAiAPvwrXR6XdeV%2FFkae7oIPAl32lChlzKrfH%2BiI5udhv6yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMrB1vSe8mpDzqXtcNKtwDkZlqE7pTzbWp2yIevPzY%2B8wIKBckai0zkxWaSQPtR9qOdO80KTmjYQvhDZIwW4ViriHHzNCuX1aq6Aw3JyRN7n5YmTjQPgzGTCH8OyzSge3UmLzYHJzXx6Och4gwMtXh20Ivr1KOKlfkN97ANwQ4YWYZFPH4lnMbpzqSfOJCqnQ6mWF7N4QilAD7V103ZXgZbOiVz7eur%2FtE24O%2FLVVX1Oy0Qk8yyXF6yl%2FEVtmpawBQtBLEtLVZGNe9goR2kZ1lUiGaE3VQzcZfAVknkg2k47J2GZNptB9XJh%2B7yoXm2A2lMkEKt7twz2GeA6okw87ApCD5JO%2BuSd%2BBRa3ZK2GCLi%2Bdos91ti0sfLEMb0PaR0RlE6BkF4ex4TM6mR1X46DNdrPPCN%2FRMkCUa0PhoOYJ3JWaqb74qcHvtxhEmKYgsw5ihJ%2BJs3Ss18bWC8fcIKeB%2FhmRtOgKQH1gUtaQGfEG%2FsH4pJ68qkDL7DGP6u9b5YMCWSxR8m4HdyO35TiQiKwD3g4BdzXJMHw9ubF%2F0Hpo1%2FmDbnUaKoRpFUcX3srSdoQs5EoLk319EK2yKGjQ8wcc4YFKjiIYt3f2t1MzHnNs500oRvEfR%2BiWzoY1vomnh6DPAG7wlQ6cKbZfCtYw85PewwY6pgF8eGv1nYavBFeZ6oIkqAG9hAv2wwbEGjGAunwoeyL4Nd%2BpFOAA0fUG0hDSfXSRH2QY%2FdNgN70%2Bn3%2F2y3%2BYSwTbpu3xOkDuT0eEfBCSvS9vXWbQjspvHo9gM6ATgEUgYgS0x0hVKbAP2r1FVQ8lFhcpZf00vwlANZCqBISKbhtSweOXkwFyYe7gSwtM5wfqXOlotWkAMOx6%2BKRi%2B%2F%2BnhbCOKRkpYFdZ&X-Amz-Signature=b3f0f913e6ebada8c6cb92f9c104aff6f573525a545e9ca9ceeaf2204cbe4de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DC3C5C3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGLFqfc3Mtj%2BFxEyfsd31kWBdSc19Gh1iNnM3Xjq7irbAiAPvwrXR6XdeV%2FFkae7oIPAl32lChlzKrfH%2BiI5udhv6yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMrB1vSe8mpDzqXtcNKtwDkZlqE7pTzbWp2yIevPzY%2B8wIKBckai0zkxWaSQPtR9qOdO80KTmjYQvhDZIwW4ViriHHzNCuX1aq6Aw3JyRN7n5YmTjQPgzGTCH8OyzSge3UmLzYHJzXx6Och4gwMtXh20Ivr1KOKlfkN97ANwQ4YWYZFPH4lnMbpzqSfOJCqnQ6mWF7N4QilAD7V103ZXgZbOiVz7eur%2FtE24O%2FLVVX1Oy0Qk8yyXF6yl%2FEVtmpawBQtBLEtLVZGNe9goR2kZ1lUiGaE3VQzcZfAVknkg2k47J2GZNptB9XJh%2B7yoXm2A2lMkEKt7twz2GeA6okw87ApCD5JO%2BuSd%2BBRa3ZK2GCLi%2Bdos91ti0sfLEMb0PaR0RlE6BkF4ex4TM6mR1X46DNdrPPCN%2FRMkCUa0PhoOYJ3JWaqb74qcHvtxhEmKYgsw5ihJ%2BJs3Ss18bWC8fcIKeB%2FhmRtOgKQH1gUtaQGfEG%2FsH4pJ68qkDL7DGP6u9b5YMCWSxR8m4HdyO35TiQiKwD3g4BdzXJMHw9ubF%2F0Hpo1%2FmDbnUaKoRpFUcX3srSdoQs5EoLk319EK2yKGjQ8wcc4YFKjiIYt3f2t1MzHnNs500oRvEfR%2BiWzoY1vomnh6DPAG7wlQ6cKbZfCtYw85PewwY6pgF8eGv1nYavBFeZ6oIkqAG9hAv2wwbEGjGAunwoeyL4Nd%2BpFOAA0fUG0hDSfXSRH2QY%2FdNgN70%2Bn3%2F2y3%2BYSwTbpu3xOkDuT0eEfBCSvS9vXWbQjspvHo9gM6ATgEUgYgS0x0hVKbAP2r1FVQ8lFhcpZf00vwlANZCqBISKbhtSweOXkwFyYe7gSwtM5wfqXOlotWkAMOx6%2BKRi%2B%2F%2BnhbCOKRkpYFdZ&X-Amz-Signature=0c7ed29ec191397499ebaebfb1b669ebe196aff6e17835a36922456e0f2ac3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DC3C5C3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGLFqfc3Mtj%2BFxEyfsd31kWBdSc19Gh1iNnM3Xjq7irbAiAPvwrXR6XdeV%2FFkae7oIPAl32lChlzKrfH%2BiI5udhv6yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMrB1vSe8mpDzqXtcNKtwDkZlqE7pTzbWp2yIevPzY%2B8wIKBckai0zkxWaSQPtR9qOdO80KTmjYQvhDZIwW4ViriHHzNCuX1aq6Aw3JyRN7n5YmTjQPgzGTCH8OyzSge3UmLzYHJzXx6Och4gwMtXh20Ivr1KOKlfkN97ANwQ4YWYZFPH4lnMbpzqSfOJCqnQ6mWF7N4QilAD7V103ZXgZbOiVz7eur%2FtE24O%2FLVVX1Oy0Qk8yyXF6yl%2FEVtmpawBQtBLEtLVZGNe9goR2kZ1lUiGaE3VQzcZfAVknkg2k47J2GZNptB9XJh%2B7yoXm2A2lMkEKt7twz2GeA6okw87ApCD5JO%2BuSd%2BBRa3ZK2GCLi%2Bdos91ti0sfLEMb0PaR0RlE6BkF4ex4TM6mR1X46DNdrPPCN%2FRMkCUa0PhoOYJ3JWaqb74qcHvtxhEmKYgsw5ihJ%2BJs3Ss18bWC8fcIKeB%2FhmRtOgKQH1gUtaQGfEG%2FsH4pJ68qkDL7DGP6u9b5YMCWSxR8m4HdyO35TiQiKwD3g4BdzXJMHw9ubF%2F0Hpo1%2FmDbnUaKoRpFUcX3srSdoQs5EoLk319EK2yKGjQ8wcc4YFKjiIYt3f2t1MzHnNs500oRvEfR%2BiWzoY1vomnh6DPAG7wlQ6cKbZfCtYw85PewwY6pgF8eGv1nYavBFeZ6oIkqAG9hAv2wwbEGjGAunwoeyL4Nd%2BpFOAA0fUG0hDSfXSRH2QY%2FdNgN70%2Bn3%2F2y3%2BYSwTbpu3xOkDuT0eEfBCSvS9vXWbQjspvHo9gM6ATgEUgYgS0x0hVKbAP2r1FVQ8lFhcpZf00vwlANZCqBISKbhtSweOXkwFyYe7gSwtM5wfqXOlotWkAMOx6%2BKRi%2B%2F%2BnhbCOKRkpYFdZ&X-Amz-Signature=f245f910bbe98ed054e8b7ae3f378f37018db21cd4017ba00ab10bcbc4213d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DC3C5C3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGLFqfc3Mtj%2BFxEyfsd31kWBdSc19Gh1iNnM3Xjq7irbAiAPvwrXR6XdeV%2FFkae7oIPAl32lChlzKrfH%2BiI5udhv6yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMrB1vSe8mpDzqXtcNKtwDkZlqE7pTzbWp2yIevPzY%2B8wIKBckai0zkxWaSQPtR9qOdO80KTmjYQvhDZIwW4ViriHHzNCuX1aq6Aw3JyRN7n5YmTjQPgzGTCH8OyzSge3UmLzYHJzXx6Och4gwMtXh20Ivr1KOKlfkN97ANwQ4YWYZFPH4lnMbpzqSfOJCqnQ6mWF7N4QilAD7V103ZXgZbOiVz7eur%2FtE24O%2FLVVX1Oy0Qk8yyXF6yl%2FEVtmpawBQtBLEtLVZGNe9goR2kZ1lUiGaE3VQzcZfAVknkg2k47J2GZNptB9XJh%2B7yoXm2A2lMkEKt7twz2GeA6okw87ApCD5JO%2BuSd%2BBRa3ZK2GCLi%2Bdos91ti0sfLEMb0PaR0RlE6BkF4ex4TM6mR1X46DNdrPPCN%2FRMkCUa0PhoOYJ3JWaqb74qcHvtxhEmKYgsw5ihJ%2BJs3Ss18bWC8fcIKeB%2FhmRtOgKQH1gUtaQGfEG%2FsH4pJ68qkDL7DGP6u9b5YMCWSxR8m4HdyO35TiQiKwD3g4BdzXJMHw9ubF%2F0Hpo1%2FmDbnUaKoRpFUcX3srSdoQs5EoLk319EK2yKGjQ8wcc4YFKjiIYt3f2t1MzHnNs500oRvEfR%2BiWzoY1vomnh6DPAG7wlQ6cKbZfCtYw85PewwY6pgF8eGv1nYavBFeZ6oIkqAG9hAv2wwbEGjGAunwoeyL4Nd%2BpFOAA0fUG0hDSfXSRH2QY%2FdNgN70%2Bn3%2F2y3%2BYSwTbpu3xOkDuT0eEfBCSvS9vXWbQjspvHo9gM6ATgEUgYgS0x0hVKbAP2r1FVQ8lFhcpZf00vwlANZCqBISKbhtSweOXkwFyYe7gSwtM5wfqXOlotWkAMOx6%2BKRi%2B%2F%2BnhbCOKRkpYFdZ&X-Amz-Signature=66fd44dc2952e3644d54dcc351e20a7f93df38d677ab887a703ed03508616c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DC3C5C3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGLFqfc3Mtj%2BFxEyfsd31kWBdSc19Gh1iNnM3Xjq7irbAiAPvwrXR6XdeV%2FFkae7oIPAl32lChlzKrfH%2BiI5udhv6yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMrB1vSe8mpDzqXtcNKtwDkZlqE7pTzbWp2yIevPzY%2B8wIKBckai0zkxWaSQPtR9qOdO80KTmjYQvhDZIwW4ViriHHzNCuX1aq6Aw3JyRN7n5YmTjQPgzGTCH8OyzSge3UmLzYHJzXx6Och4gwMtXh20Ivr1KOKlfkN97ANwQ4YWYZFPH4lnMbpzqSfOJCqnQ6mWF7N4QilAD7V103ZXgZbOiVz7eur%2FtE24O%2FLVVX1Oy0Qk8yyXF6yl%2FEVtmpawBQtBLEtLVZGNe9goR2kZ1lUiGaE3VQzcZfAVknkg2k47J2GZNptB9XJh%2B7yoXm2A2lMkEKt7twz2GeA6okw87ApCD5JO%2BuSd%2BBRa3ZK2GCLi%2Bdos91ti0sfLEMb0PaR0RlE6BkF4ex4TM6mR1X46DNdrPPCN%2FRMkCUa0PhoOYJ3JWaqb74qcHvtxhEmKYgsw5ihJ%2BJs3Ss18bWC8fcIKeB%2FhmRtOgKQH1gUtaQGfEG%2FsH4pJ68qkDL7DGP6u9b5YMCWSxR8m4HdyO35TiQiKwD3g4BdzXJMHw9ubF%2F0Hpo1%2FmDbnUaKoRpFUcX3srSdoQs5EoLk319EK2yKGjQ8wcc4YFKjiIYt3f2t1MzHnNs500oRvEfR%2BiWzoY1vomnh6DPAG7wlQ6cKbZfCtYw85PewwY6pgF8eGv1nYavBFeZ6oIkqAG9hAv2wwbEGjGAunwoeyL4Nd%2BpFOAA0fUG0hDSfXSRH2QY%2FdNgN70%2Bn3%2F2y3%2BYSwTbpu3xOkDuT0eEfBCSvS9vXWbQjspvHo9gM6ATgEUgYgS0x0hVKbAP2r1FVQ8lFhcpZf00vwlANZCqBISKbhtSweOXkwFyYe7gSwtM5wfqXOlotWkAMOx6%2BKRi%2B%2F%2BnhbCOKRkpYFdZ&X-Amz-Signature=c0f750bd9d3b1b041736e20f3ce686578b9bb5df2d308890e72e60532655b807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DC3C5C3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGLFqfc3Mtj%2BFxEyfsd31kWBdSc19Gh1iNnM3Xjq7irbAiAPvwrXR6XdeV%2FFkae7oIPAl32lChlzKrfH%2BiI5udhv6yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMrB1vSe8mpDzqXtcNKtwDkZlqE7pTzbWp2yIevPzY%2B8wIKBckai0zkxWaSQPtR9qOdO80KTmjYQvhDZIwW4ViriHHzNCuX1aq6Aw3JyRN7n5YmTjQPgzGTCH8OyzSge3UmLzYHJzXx6Och4gwMtXh20Ivr1KOKlfkN97ANwQ4YWYZFPH4lnMbpzqSfOJCqnQ6mWF7N4QilAD7V103ZXgZbOiVz7eur%2FtE24O%2FLVVX1Oy0Qk8yyXF6yl%2FEVtmpawBQtBLEtLVZGNe9goR2kZ1lUiGaE3VQzcZfAVknkg2k47J2GZNptB9XJh%2B7yoXm2A2lMkEKt7twz2GeA6okw87ApCD5JO%2BuSd%2BBRa3ZK2GCLi%2Bdos91ti0sfLEMb0PaR0RlE6BkF4ex4TM6mR1X46DNdrPPCN%2FRMkCUa0PhoOYJ3JWaqb74qcHvtxhEmKYgsw5ihJ%2BJs3Ss18bWC8fcIKeB%2FhmRtOgKQH1gUtaQGfEG%2FsH4pJ68qkDL7DGP6u9b5YMCWSxR8m4HdyO35TiQiKwD3g4BdzXJMHw9ubF%2F0Hpo1%2FmDbnUaKoRpFUcX3srSdoQs5EoLk319EK2yKGjQ8wcc4YFKjiIYt3f2t1MzHnNs500oRvEfR%2BiWzoY1vomnh6DPAG7wlQ6cKbZfCtYw85PewwY6pgF8eGv1nYavBFeZ6oIkqAG9hAv2wwbEGjGAunwoeyL4Nd%2BpFOAA0fUG0hDSfXSRH2QY%2FdNgN70%2Bn3%2F2y3%2BYSwTbpu3xOkDuT0eEfBCSvS9vXWbQjspvHo9gM6ATgEUgYgS0x0hVKbAP2r1FVQ8lFhcpZf00vwlANZCqBISKbhtSweOXkwFyYe7gSwtM5wfqXOlotWkAMOx6%2BKRi%2B%2F%2BnhbCOKRkpYFdZ&X-Amz-Signature=6d8553c8851c81764611907ed2cf95895c34c1b412224e43b2f82682fbba1cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DC3C5C3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGLFqfc3Mtj%2BFxEyfsd31kWBdSc19Gh1iNnM3Xjq7irbAiAPvwrXR6XdeV%2FFkae7oIPAl32lChlzKrfH%2BiI5udhv6yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMrB1vSe8mpDzqXtcNKtwDkZlqE7pTzbWp2yIevPzY%2B8wIKBckai0zkxWaSQPtR9qOdO80KTmjYQvhDZIwW4ViriHHzNCuX1aq6Aw3JyRN7n5YmTjQPgzGTCH8OyzSge3UmLzYHJzXx6Och4gwMtXh20Ivr1KOKlfkN97ANwQ4YWYZFPH4lnMbpzqSfOJCqnQ6mWF7N4QilAD7V103ZXgZbOiVz7eur%2FtE24O%2FLVVX1Oy0Qk8yyXF6yl%2FEVtmpawBQtBLEtLVZGNe9goR2kZ1lUiGaE3VQzcZfAVknkg2k47J2GZNptB9XJh%2B7yoXm2A2lMkEKt7twz2GeA6okw87ApCD5JO%2BuSd%2BBRa3ZK2GCLi%2Bdos91ti0sfLEMb0PaR0RlE6BkF4ex4TM6mR1X46DNdrPPCN%2FRMkCUa0PhoOYJ3JWaqb74qcHvtxhEmKYgsw5ihJ%2BJs3Ss18bWC8fcIKeB%2FhmRtOgKQH1gUtaQGfEG%2FsH4pJ68qkDL7DGP6u9b5YMCWSxR8m4HdyO35TiQiKwD3g4BdzXJMHw9ubF%2F0Hpo1%2FmDbnUaKoRpFUcX3srSdoQs5EoLk319EK2yKGjQ8wcc4YFKjiIYt3f2t1MzHnNs500oRvEfR%2BiWzoY1vomnh6DPAG7wlQ6cKbZfCtYw85PewwY6pgF8eGv1nYavBFeZ6oIkqAG9hAv2wwbEGjGAunwoeyL4Nd%2BpFOAA0fUG0hDSfXSRH2QY%2FdNgN70%2Bn3%2F2y3%2BYSwTbpu3xOkDuT0eEfBCSvS9vXWbQjspvHo9gM6ATgEUgYgS0x0hVKbAP2r1FVQ8lFhcpZf00vwlANZCqBISKbhtSweOXkwFyYe7gSwtM5wfqXOlotWkAMOx6%2BKRi%2B%2F%2BnhbCOKRkpYFdZ&X-Amz-Signature=69da523bbeb662187688271d4f2c08814e9866cf3b23b79a23e982206dd6da59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DC3C5C3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGLFqfc3Mtj%2BFxEyfsd31kWBdSc19Gh1iNnM3Xjq7irbAiAPvwrXR6XdeV%2FFkae7oIPAl32lChlzKrfH%2BiI5udhv6yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMrB1vSe8mpDzqXtcNKtwDkZlqE7pTzbWp2yIevPzY%2B8wIKBckai0zkxWaSQPtR9qOdO80KTmjYQvhDZIwW4ViriHHzNCuX1aq6Aw3JyRN7n5YmTjQPgzGTCH8OyzSge3UmLzYHJzXx6Och4gwMtXh20Ivr1KOKlfkN97ANwQ4YWYZFPH4lnMbpzqSfOJCqnQ6mWF7N4QilAD7V103ZXgZbOiVz7eur%2FtE24O%2FLVVX1Oy0Qk8yyXF6yl%2FEVtmpawBQtBLEtLVZGNe9goR2kZ1lUiGaE3VQzcZfAVknkg2k47J2GZNptB9XJh%2B7yoXm2A2lMkEKt7twz2GeA6okw87ApCD5JO%2BuSd%2BBRa3ZK2GCLi%2Bdos91ti0sfLEMb0PaR0RlE6BkF4ex4TM6mR1X46DNdrPPCN%2FRMkCUa0PhoOYJ3JWaqb74qcHvtxhEmKYgsw5ihJ%2BJs3Ss18bWC8fcIKeB%2FhmRtOgKQH1gUtaQGfEG%2FsH4pJ68qkDL7DGP6u9b5YMCWSxR8m4HdyO35TiQiKwD3g4BdzXJMHw9ubF%2F0Hpo1%2FmDbnUaKoRpFUcX3srSdoQs5EoLk319EK2yKGjQ8wcc4YFKjiIYt3f2t1MzHnNs500oRvEfR%2BiWzoY1vomnh6DPAG7wlQ6cKbZfCtYw85PewwY6pgF8eGv1nYavBFeZ6oIkqAG9hAv2wwbEGjGAunwoeyL4Nd%2BpFOAA0fUG0hDSfXSRH2QY%2FdNgN70%2Bn3%2F2y3%2BYSwTbpu3xOkDuT0eEfBCSvS9vXWbQjspvHo9gM6ATgEUgYgS0x0hVKbAP2r1FVQ8lFhcpZf00vwlANZCqBISKbhtSweOXkwFyYe7gSwtM5wfqXOlotWkAMOx6%2BKRi%2B%2F%2BnhbCOKRkpYFdZ&X-Amz-Signature=299150672862a61c4f253485690f8dcf7e2f1f6da3588cbfbb32ea9c32ba7a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
