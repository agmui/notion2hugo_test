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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADYUKJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyDWghYMlfF%2F7BE6miGzvRD3zPNNkcF8%2F0A6QOjBAGAIgEU0Jibkdq9qlIa9gS0Cik8zj6S8XGMd3GjMNMOXMkHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2VArBG7WAzeajd0yrcA3I4x%2FoleQ7p2T3wxG42o7X6b%2BoAQOozZ%2BoLvIkM4rXYDlXzehdPMfCqo2iAPMiETjpBNwZtZcDTvXTjMFKEnrgcgPwAApa8New%2F%2BJRk%2BOxpy9TEGs79iu3ANVjMlGFqAGHdPziSAoNT0AE5xGx2luFzc2vbEjZiQ0glTgvg51wSOpakq6odc65JXqWwy%2BW%2BtgPpeHs8JvC1aFePQPl5qPwTnO7PCVBGe%2F1CRJr2ByGCQxQAXJpZaUowFiOgB%2FQoCMVWJid5EqKb8KuOnfmquf%2FQelGJGVA2B4KJxk0EhE59MbURzVXBpWoK6xH1kEK5FoYM8dkViwI9gljI70YPJCc2JQLdwkhWxX1iHCXVhkGfEJpnGmNhjc%2BVhNjA7%2FIa7LpQFemwQgmYoXcst%2BRWk0fYa%2BNuJfFUSI0GXkZRUCvv4PL16d7nuM5iThtHUKUhE%2FUVBv6uSL%2FelycaQq0DZq77M7B27d0E%2BlPEabJUv0QmG0r9XfXFK2JfdKvstEFIPPGAOUHDkRqxkrzU%2BuFeWfR5F1f2gF1H0UV6MDMY9uPSAXH2%2BtySKrfnumbwkhvRY48MEjCO1qME4bqvdkZIomma2UjsH0DNGm4hTGzvUF4oUst6c0%2F5uNhlcewQMLu8ocEGOqUBEVM%2FcPj24oZ4dBP7i69qW9zLMWXkdTpz06lR5jmxpjhg068r%2Fd%2FvChE7eZYpSsfLGOQVlsV6c6wTtGYeWfzKuA1Z1O2kplJ5Mk5cq049Ph4suJQft60pbbS%2FBeYXJ2id%2Bio7S0eVkYv57gzLMzVbzx10R6oX0CDwD2Zzyd178SrQ2FwtQjJdvkv7GapixTvMczhRp02l%2FMs8%2Bv%2FEOc0ryfzvl7OV&X-Amz-Signature=1aa3ff560092494ae45197a64e191ea2728f7fbc155176a085079b6cff3df47e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADYUKJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyDWghYMlfF%2F7BE6miGzvRD3zPNNkcF8%2F0A6QOjBAGAIgEU0Jibkdq9qlIa9gS0Cik8zj6S8XGMd3GjMNMOXMkHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2VArBG7WAzeajd0yrcA3I4x%2FoleQ7p2T3wxG42o7X6b%2BoAQOozZ%2BoLvIkM4rXYDlXzehdPMfCqo2iAPMiETjpBNwZtZcDTvXTjMFKEnrgcgPwAApa8New%2F%2BJRk%2BOxpy9TEGs79iu3ANVjMlGFqAGHdPziSAoNT0AE5xGx2luFzc2vbEjZiQ0glTgvg51wSOpakq6odc65JXqWwy%2BW%2BtgPpeHs8JvC1aFePQPl5qPwTnO7PCVBGe%2F1CRJr2ByGCQxQAXJpZaUowFiOgB%2FQoCMVWJid5EqKb8KuOnfmquf%2FQelGJGVA2B4KJxk0EhE59MbURzVXBpWoK6xH1kEK5FoYM8dkViwI9gljI70YPJCc2JQLdwkhWxX1iHCXVhkGfEJpnGmNhjc%2BVhNjA7%2FIa7LpQFemwQgmYoXcst%2BRWk0fYa%2BNuJfFUSI0GXkZRUCvv4PL16d7nuM5iThtHUKUhE%2FUVBv6uSL%2FelycaQq0DZq77M7B27d0E%2BlPEabJUv0QmG0r9XfXFK2JfdKvstEFIPPGAOUHDkRqxkrzU%2BuFeWfR5F1f2gF1H0UV6MDMY9uPSAXH2%2BtySKrfnumbwkhvRY48MEjCO1qME4bqvdkZIomma2UjsH0DNGm4hTGzvUF4oUst6c0%2F5uNhlcewQMLu8ocEGOqUBEVM%2FcPj24oZ4dBP7i69qW9zLMWXkdTpz06lR5jmxpjhg068r%2Fd%2FvChE7eZYpSsfLGOQVlsV6c6wTtGYeWfzKuA1Z1O2kplJ5Mk5cq049Ph4suJQft60pbbS%2FBeYXJ2id%2Bio7S0eVkYv57gzLMzVbzx10R6oX0CDwD2Zzyd178SrQ2FwtQjJdvkv7GapixTvMczhRp02l%2FMs8%2Bv%2FEOc0ryfzvl7OV&X-Amz-Signature=3b88782bb69fa040ddbac89ccb9252e5533fb82432e3351a6e542159b0d9875b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADYUKJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyDWghYMlfF%2F7BE6miGzvRD3zPNNkcF8%2F0A6QOjBAGAIgEU0Jibkdq9qlIa9gS0Cik8zj6S8XGMd3GjMNMOXMkHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2VArBG7WAzeajd0yrcA3I4x%2FoleQ7p2T3wxG42o7X6b%2BoAQOozZ%2BoLvIkM4rXYDlXzehdPMfCqo2iAPMiETjpBNwZtZcDTvXTjMFKEnrgcgPwAApa8New%2F%2BJRk%2BOxpy9TEGs79iu3ANVjMlGFqAGHdPziSAoNT0AE5xGx2luFzc2vbEjZiQ0glTgvg51wSOpakq6odc65JXqWwy%2BW%2BtgPpeHs8JvC1aFePQPl5qPwTnO7PCVBGe%2F1CRJr2ByGCQxQAXJpZaUowFiOgB%2FQoCMVWJid5EqKb8KuOnfmquf%2FQelGJGVA2B4KJxk0EhE59MbURzVXBpWoK6xH1kEK5FoYM8dkViwI9gljI70YPJCc2JQLdwkhWxX1iHCXVhkGfEJpnGmNhjc%2BVhNjA7%2FIa7LpQFemwQgmYoXcst%2BRWk0fYa%2BNuJfFUSI0GXkZRUCvv4PL16d7nuM5iThtHUKUhE%2FUVBv6uSL%2FelycaQq0DZq77M7B27d0E%2BlPEabJUv0QmG0r9XfXFK2JfdKvstEFIPPGAOUHDkRqxkrzU%2BuFeWfR5F1f2gF1H0UV6MDMY9uPSAXH2%2BtySKrfnumbwkhvRY48MEjCO1qME4bqvdkZIomma2UjsH0DNGm4hTGzvUF4oUst6c0%2F5uNhlcewQMLu8ocEGOqUBEVM%2FcPj24oZ4dBP7i69qW9zLMWXkdTpz06lR5jmxpjhg068r%2Fd%2FvChE7eZYpSsfLGOQVlsV6c6wTtGYeWfzKuA1Z1O2kplJ5Mk5cq049Ph4suJQft60pbbS%2FBeYXJ2id%2Bio7S0eVkYv57gzLMzVbzx10R6oX0CDwD2Zzyd178SrQ2FwtQjJdvkv7GapixTvMczhRp02l%2FMs8%2Bv%2FEOc0ryfzvl7OV&X-Amz-Signature=b9493e5ecaf047dafb1947b718c8bd8ae4bfafcca77c5f6ea79da7b2d32ad8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADYUKJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyDWghYMlfF%2F7BE6miGzvRD3zPNNkcF8%2F0A6QOjBAGAIgEU0Jibkdq9qlIa9gS0Cik8zj6S8XGMd3GjMNMOXMkHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2VArBG7WAzeajd0yrcA3I4x%2FoleQ7p2T3wxG42o7X6b%2BoAQOozZ%2BoLvIkM4rXYDlXzehdPMfCqo2iAPMiETjpBNwZtZcDTvXTjMFKEnrgcgPwAApa8New%2F%2BJRk%2BOxpy9TEGs79iu3ANVjMlGFqAGHdPziSAoNT0AE5xGx2luFzc2vbEjZiQ0glTgvg51wSOpakq6odc65JXqWwy%2BW%2BtgPpeHs8JvC1aFePQPl5qPwTnO7PCVBGe%2F1CRJr2ByGCQxQAXJpZaUowFiOgB%2FQoCMVWJid5EqKb8KuOnfmquf%2FQelGJGVA2B4KJxk0EhE59MbURzVXBpWoK6xH1kEK5FoYM8dkViwI9gljI70YPJCc2JQLdwkhWxX1iHCXVhkGfEJpnGmNhjc%2BVhNjA7%2FIa7LpQFemwQgmYoXcst%2BRWk0fYa%2BNuJfFUSI0GXkZRUCvv4PL16d7nuM5iThtHUKUhE%2FUVBv6uSL%2FelycaQq0DZq77M7B27d0E%2BlPEabJUv0QmG0r9XfXFK2JfdKvstEFIPPGAOUHDkRqxkrzU%2BuFeWfR5F1f2gF1H0UV6MDMY9uPSAXH2%2BtySKrfnumbwkhvRY48MEjCO1qME4bqvdkZIomma2UjsH0DNGm4hTGzvUF4oUst6c0%2F5uNhlcewQMLu8ocEGOqUBEVM%2FcPj24oZ4dBP7i69qW9zLMWXkdTpz06lR5jmxpjhg068r%2Fd%2FvChE7eZYpSsfLGOQVlsV6c6wTtGYeWfzKuA1Z1O2kplJ5Mk5cq049Ph4suJQft60pbbS%2FBeYXJ2id%2Bio7S0eVkYv57gzLMzVbzx10R6oX0CDwD2Zzyd178SrQ2FwtQjJdvkv7GapixTvMczhRp02l%2FMs8%2Bv%2FEOc0ryfzvl7OV&X-Amz-Signature=6c12f221c0409863770f85ad491dac1ae48a70f940b674844954d4e4f021836c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADYUKJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyDWghYMlfF%2F7BE6miGzvRD3zPNNkcF8%2F0A6QOjBAGAIgEU0Jibkdq9qlIa9gS0Cik8zj6S8XGMd3GjMNMOXMkHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2VArBG7WAzeajd0yrcA3I4x%2FoleQ7p2T3wxG42o7X6b%2BoAQOozZ%2BoLvIkM4rXYDlXzehdPMfCqo2iAPMiETjpBNwZtZcDTvXTjMFKEnrgcgPwAApa8New%2F%2BJRk%2BOxpy9TEGs79iu3ANVjMlGFqAGHdPziSAoNT0AE5xGx2luFzc2vbEjZiQ0glTgvg51wSOpakq6odc65JXqWwy%2BW%2BtgPpeHs8JvC1aFePQPl5qPwTnO7PCVBGe%2F1CRJr2ByGCQxQAXJpZaUowFiOgB%2FQoCMVWJid5EqKb8KuOnfmquf%2FQelGJGVA2B4KJxk0EhE59MbURzVXBpWoK6xH1kEK5FoYM8dkViwI9gljI70YPJCc2JQLdwkhWxX1iHCXVhkGfEJpnGmNhjc%2BVhNjA7%2FIa7LpQFemwQgmYoXcst%2BRWk0fYa%2BNuJfFUSI0GXkZRUCvv4PL16d7nuM5iThtHUKUhE%2FUVBv6uSL%2FelycaQq0DZq77M7B27d0E%2BlPEabJUv0QmG0r9XfXFK2JfdKvstEFIPPGAOUHDkRqxkrzU%2BuFeWfR5F1f2gF1H0UV6MDMY9uPSAXH2%2BtySKrfnumbwkhvRY48MEjCO1qME4bqvdkZIomma2UjsH0DNGm4hTGzvUF4oUst6c0%2F5uNhlcewQMLu8ocEGOqUBEVM%2FcPj24oZ4dBP7i69qW9zLMWXkdTpz06lR5jmxpjhg068r%2Fd%2FvChE7eZYpSsfLGOQVlsV6c6wTtGYeWfzKuA1Z1O2kplJ5Mk5cq049Ph4suJQft60pbbS%2FBeYXJ2id%2Bio7S0eVkYv57gzLMzVbzx10R6oX0CDwD2Zzyd178SrQ2FwtQjJdvkv7GapixTvMczhRp02l%2FMs8%2Bv%2FEOc0ryfzvl7OV&X-Amz-Signature=692b69417246407b5511918612f9173020211aa7efb8863c40863edb76f455d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADYUKJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyDWghYMlfF%2F7BE6miGzvRD3zPNNkcF8%2F0A6QOjBAGAIgEU0Jibkdq9qlIa9gS0Cik8zj6S8XGMd3GjMNMOXMkHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2VArBG7WAzeajd0yrcA3I4x%2FoleQ7p2T3wxG42o7X6b%2BoAQOozZ%2BoLvIkM4rXYDlXzehdPMfCqo2iAPMiETjpBNwZtZcDTvXTjMFKEnrgcgPwAApa8New%2F%2BJRk%2BOxpy9TEGs79iu3ANVjMlGFqAGHdPziSAoNT0AE5xGx2luFzc2vbEjZiQ0glTgvg51wSOpakq6odc65JXqWwy%2BW%2BtgPpeHs8JvC1aFePQPl5qPwTnO7PCVBGe%2F1CRJr2ByGCQxQAXJpZaUowFiOgB%2FQoCMVWJid5EqKb8KuOnfmquf%2FQelGJGVA2B4KJxk0EhE59MbURzVXBpWoK6xH1kEK5FoYM8dkViwI9gljI70YPJCc2JQLdwkhWxX1iHCXVhkGfEJpnGmNhjc%2BVhNjA7%2FIa7LpQFemwQgmYoXcst%2BRWk0fYa%2BNuJfFUSI0GXkZRUCvv4PL16d7nuM5iThtHUKUhE%2FUVBv6uSL%2FelycaQq0DZq77M7B27d0E%2BlPEabJUv0QmG0r9XfXFK2JfdKvstEFIPPGAOUHDkRqxkrzU%2BuFeWfR5F1f2gF1H0UV6MDMY9uPSAXH2%2BtySKrfnumbwkhvRY48MEjCO1qME4bqvdkZIomma2UjsH0DNGm4hTGzvUF4oUst6c0%2F5uNhlcewQMLu8ocEGOqUBEVM%2FcPj24oZ4dBP7i69qW9zLMWXkdTpz06lR5jmxpjhg068r%2Fd%2FvChE7eZYpSsfLGOQVlsV6c6wTtGYeWfzKuA1Z1O2kplJ5Mk5cq049Ph4suJQft60pbbS%2FBeYXJ2id%2Bio7S0eVkYv57gzLMzVbzx10R6oX0CDwD2Zzyd178SrQ2FwtQjJdvkv7GapixTvMczhRp02l%2FMs8%2Bv%2FEOc0ryfzvl7OV&X-Amz-Signature=9efdfdfb4416f17583447b395709016359dc62d423e357e8cf8f4f062a53ed7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADYUKJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyDWghYMlfF%2F7BE6miGzvRD3zPNNkcF8%2F0A6QOjBAGAIgEU0Jibkdq9qlIa9gS0Cik8zj6S8XGMd3GjMNMOXMkHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2VArBG7WAzeajd0yrcA3I4x%2FoleQ7p2T3wxG42o7X6b%2BoAQOozZ%2BoLvIkM4rXYDlXzehdPMfCqo2iAPMiETjpBNwZtZcDTvXTjMFKEnrgcgPwAApa8New%2F%2BJRk%2BOxpy9TEGs79iu3ANVjMlGFqAGHdPziSAoNT0AE5xGx2luFzc2vbEjZiQ0glTgvg51wSOpakq6odc65JXqWwy%2BW%2BtgPpeHs8JvC1aFePQPl5qPwTnO7PCVBGe%2F1CRJr2ByGCQxQAXJpZaUowFiOgB%2FQoCMVWJid5EqKb8KuOnfmquf%2FQelGJGVA2B4KJxk0EhE59MbURzVXBpWoK6xH1kEK5FoYM8dkViwI9gljI70YPJCc2JQLdwkhWxX1iHCXVhkGfEJpnGmNhjc%2BVhNjA7%2FIa7LpQFemwQgmYoXcst%2BRWk0fYa%2BNuJfFUSI0GXkZRUCvv4PL16d7nuM5iThtHUKUhE%2FUVBv6uSL%2FelycaQq0DZq77M7B27d0E%2BlPEabJUv0QmG0r9XfXFK2JfdKvstEFIPPGAOUHDkRqxkrzU%2BuFeWfR5F1f2gF1H0UV6MDMY9uPSAXH2%2BtySKrfnumbwkhvRY48MEjCO1qME4bqvdkZIomma2UjsH0DNGm4hTGzvUF4oUst6c0%2F5uNhlcewQMLu8ocEGOqUBEVM%2FcPj24oZ4dBP7i69qW9zLMWXkdTpz06lR5jmxpjhg068r%2Fd%2FvChE7eZYpSsfLGOQVlsV6c6wTtGYeWfzKuA1Z1O2kplJ5Mk5cq049Ph4suJQft60pbbS%2FBeYXJ2id%2Bio7S0eVkYv57gzLMzVbzx10R6oX0CDwD2Zzyd178SrQ2FwtQjJdvkv7GapixTvMczhRp02l%2FMs8%2Bv%2FEOc0ryfzvl7OV&X-Amz-Signature=9df9ec149700fa41ac6a473c06bc93a7bfa56a9032fbbbe8893799b30d5eca9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADYUKJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyDWghYMlfF%2F7BE6miGzvRD3zPNNkcF8%2F0A6QOjBAGAIgEU0Jibkdq9qlIa9gS0Cik8zj6S8XGMd3GjMNMOXMkHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2VArBG7WAzeajd0yrcA3I4x%2FoleQ7p2T3wxG42o7X6b%2BoAQOozZ%2BoLvIkM4rXYDlXzehdPMfCqo2iAPMiETjpBNwZtZcDTvXTjMFKEnrgcgPwAApa8New%2F%2BJRk%2BOxpy9TEGs79iu3ANVjMlGFqAGHdPziSAoNT0AE5xGx2luFzc2vbEjZiQ0glTgvg51wSOpakq6odc65JXqWwy%2BW%2BtgPpeHs8JvC1aFePQPl5qPwTnO7PCVBGe%2F1CRJr2ByGCQxQAXJpZaUowFiOgB%2FQoCMVWJid5EqKb8KuOnfmquf%2FQelGJGVA2B4KJxk0EhE59MbURzVXBpWoK6xH1kEK5FoYM8dkViwI9gljI70YPJCc2JQLdwkhWxX1iHCXVhkGfEJpnGmNhjc%2BVhNjA7%2FIa7LpQFemwQgmYoXcst%2BRWk0fYa%2BNuJfFUSI0GXkZRUCvv4PL16d7nuM5iThtHUKUhE%2FUVBv6uSL%2FelycaQq0DZq77M7B27d0E%2BlPEabJUv0QmG0r9XfXFK2JfdKvstEFIPPGAOUHDkRqxkrzU%2BuFeWfR5F1f2gF1H0UV6MDMY9uPSAXH2%2BtySKrfnumbwkhvRY48MEjCO1qME4bqvdkZIomma2UjsH0DNGm4hTGzvUF4oUst6c0%2F5uNhlcewQMLu8ocEGOqUBEVM%2FcPj24oZ4dBP7i69qW9zLMWXkdTpz06lR5jmxpjhg068r%2Fd%2FvChE7eZYpSsfLGOQVlsV6c6wTtGYeWfzKuA1Z1O2kplJ5Mk5cq049Ph4suJQft60pbbS%2FBeYXJ2id%2Bio7S0eVkYv57gzLMzVbzx10R6oX0CDwD2Zzyd178SrQ2FwtQjJdvkv7GapixTvMczhRp02l%2FMs8%2Bv%2FEOc0ryfzvl7OV&X-Amz-Signature=456027fc60df8b6dbff7fc6c1a1f8e668f23bc55e28bd0c269b838f592903f56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
