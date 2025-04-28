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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24CZRPS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCoXODB6s4qpJMQtLj7%2FrXCP76NIIrt4RdQarLIrY1YAiAMsrpRynVj5zM%2BR9dSc4uv0atbu%2BaVT9kTWaa42B7WSir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMkgdjtGV38f3l5nUfKtwDOiBjDUgF3IAcxvlbTcSatY1cxEh9Ygn25yqaM%2BRSmNSJgnGuRN61NlsWyQwzmY6u1gnpTKRYCL%2BWLcQPTlEM9Nk4UllPUIRO46S%2FAoBYZtYa6gS5a3Z%2B%2Fx12TzKsI1zOIjxaUdgYoNxBsOaPKxj6o2S4SZKdxKhClxp2XRFsPS1XZjFERikSnpfD3hT2JY2skgAqDl2UX2wtwsKD%2BZihLNGi9lt7rvXVUjYsdaxI3FMLDhTUUd2qeqNo6nwTTXGYZO5te1EOyFMx%2FcGFWgbrDnJo5exyuUcZE8MeJCFfdE2lWfFONnbjGkB6Q1pOz%2B1RF4HyjExRB9JyrBoAv8LGF6f0YRoeMa6vPOEa5Poinw0vrKUT9u%2B0Dbjqg%2BiXpy9aqTFZ8EXCVtfKetG%2Fa1NoBxb%2FKVOoLNFsXwb%2BHTh9jqbbb%2FNKEUjeENwyJpiMRlAvMilTrtajkZIVaZJU5TH3Y%2BuIE1HmuUKq%2FNu14B%2F9UewUjv1XpFp3sfG4ktUFnhWL4dQkRfC3MHT2Te%2B6iW%2BO7ut8De67wftbsDfpdc%2B4ek6n0ugUs4xp%2F%2BOSa0yRcBlV3LcjSG1gt8v64nD6Q6S6NUTM3hKBTK5D8NHIgc3J3%2F0NmEvA5GoxVfvnAkgw3JS8wAY6pgF0O69aJrdnBj1f2n3G92AqHR4FD%2BpIAQu4zh2KLmjDa1Vbll%2B8bW40qBlQ6ggKvowU1TUiZIbQHcxLcX0RW1pEiqLAtapCAI14zLvI3z7SY0%2BwZmxYail7dRfDdbvJ2FaYJbDLPYA4mWS6AXjlFhizl6hRXk21hEq31%2FGI%2BxsrK%2BWQiFO%2FkAF2G6ZAkIqz9WVfUOqDgNZqJkrdTBCFNuoTOkBh5dSh&X-Amz-Signature=9c30b199032e3b484a05e7e845c50243a2f642c420b0766792dfac4aeccf1dda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24CZRPS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCoXODB6s4qpJMQtLj7%2FrXCP76NIIrt4RdQarLIrY1YAiAMsrpRynVj5zM%2BR9dSc4uv0atbu%2BaVT9kTWaa42B7WSir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMkgdjtGV38f3l5nUfKtwDOiBjDUgF3IAcxvlbTcSatY1cxEh9Ygn25yqaM%2BRSmNSJgnGuRN61NlsWyQwzmY6u1gnpTKRYCL%2BWLcQPTlEM9Nk4UllPUIRO46S%2FAoBYZtYa6gS5a3Z%2B%2Fx12TzKsI1zOIjxaUdgYoNxBsOaPKxj6o2S4SZKdxKhClxp2XRFsPS1XZjFERikSnpfD3hT2JY2skgAqDl2UX2wtwsKD%2BZihLNGi9lt7rvXVUjYsdaxI3FMLDhTUUd2qeqNo6nwTTXGYZO5te1EOyFMx%2FcGFWgbrDnJo5exyuUcZE8MeJCFfdE2lWfFONnbjGkB6Q1pOz%2B1RF4HyjExRB9JyrBoAv8LGF6f0YRoeMa6vPOEa5Poinw0vrKUT9u%2B0Dbjqg%2BiXpy9aqTFZ8EXCVtfKetG%2Fa1NoBxb%2FKVOoLNFsXwb%2BHTh9jqbbb%2FNKEUjeENwyJpiMRlAvMilTrtajkZIVaZJU5TH3Y%2BuIE1HmuUKq%2FNu14B%2F9UewUjv1XpFp3sfG4ktUFnhWL4dQkRfC3MHT2Te%2B6iW%2BO7ut8De67wftbsDfpdc%2B4ek6n0ugUs4xp%2F%2BOSa0yRcBlV3LcjSG1gt8v64nD6Q6S6NUTM3hKBTK5D8NHIgc3J3%2F0NmEvA5GoxVfvnAkgw3JS8wAY6pgF0O69aJrdnBj1f2n3G92AqHR4FD%2BpIAQu4zh2KLmjDa1Vbll%2B8bW40qBlQ6ggKvowU1TUiZIbQHcxLcX0RW1pEiqLAtapCAI14zLvI3z7SY0%2BwZmxYail7dRfDdbvJ2FaYJbDLPYA4mWS6AXjlFhizl6hRXk21hEq31%2FGI%2BxsrK%2BWQiFO%2FkAF2G6ZAkIqz9WVfUOqDgNZqJkrdTBCFNuoTOkBh5dSh&X-Amz-Signature=628fdbe3da45abdc090c09f82bde33864643d00cb231b207c49f02fc149f0c14&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24CZRPS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCoXODB6s4qpJMQtLj7%2FrXCP76NIIrt4RdQarLIrY1YAiAMsrpRynVj5zM%2BR9dSc4uv0atbu%2BaVT9kTWaa42B7WSir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMkgdjtGV38f3l5nUfKtwDOiBjDUgF3IAcxvlbTcSatY1cxEh9Ygn25yqaM%2BRSmNSJgnGuRN61NlsWyQwzmY6u1gnpTKRYCL%2BWLcQPTlEM9Nk4UllPUIRO46S%2FAoBYZtYa6gS5a3Z%2B%2Fx12TzKsI1zOIjxaUdgYoNxBsOaPKxj6o2S4SZKdxKhClxp2XRFsPS1XZjFERikSnpfD3hT2JY2skgAqDl2UX2wtwsKD%2BZihLNGi9lt7rvXVUjYsdaxI3FMLDhTUUd2qeqNo6nwTTXGYZO5te1EOyFMx%2FcGFWgbrDnJo5exyuUcZE8MeJCFfdE2lWfFONnbjGkB6Q1pOz%2B1RF4HyjExRB9JyrBoAv8LGF6f0YRoeMa6vPOEa5Poinw0vrKUT9u%2B0Dbjqg%2BiXpy9aqTFZ8EXCVtfKetG%2Fa1NoBxb%2FKVOoLNFsXwb%2BHTh9jqbbb%2FNKEUjeENwyJpiMRlAvMilTrtajkZIVaZJU5TH3Y%2BuIE1HmuUKq%2FNu14B%2F9UewUjv1XpFp3sfG4ktUFnhWL4dQkRfC3MHT2Te%2B6iW%2BO7ut8De67wftbsDfpdc%2B4ek6n0ugUs4xp%2F%2BOSa0yRcBlV3LcjSG1gt8v64nD6Q6S6NUTM3hKBTK5D8NHIgc3J3%2F0NmEvA5GoxVfvnAkgw3JS8wAY6pgF0O69aJrdnBj1f2n3G92AqHR4FD%2BpIAQu4zh2KLmjDa1Vbll%2B8bW40qBlQ6ggKvowU1TUiZIbQHcxLcX0RW1pEiqLAtapCAI14zLvI3z7SY0%2BwZmxYail7dRfDdbvJ2FaYJbDLPYA4mWS6AXjlFhizl6hRXk21hEq31%2FGI%2BxsrK%2BWQiFO%2FkAF2G6ZAkIqz9WVfUOqDgNZqJkrdTBCFNuoTOkBh5dSh&X-Amz-Signature=6f57c0f232d2e20c3c2b65c25cd9ddc6042abba7e3f876bd54fcb677245de640&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24CZRPS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCoXODB6s4qpJMQtLj7%2FrXCP76NIIrt4RdQarLIrY1YAiAMsrpRynVj5zM%2BR9dSc4uv0atbu%2BaVT9kTWaa42B7WSir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMkgdjtGV38f3l5nUfKtwDOiBjDUgF3IAcxvlbTcSatY1cxEh9Ygn25yqaM%2BRSmNSJgnGuRN61NlsWyQwzmY6u1gnpTKRYCL%2BWLcQPTlEM9Nk4UllPUIRO46S%2FAoBYZtYa6gS5a3Z%2B%2Fx12TzKsI1zOIjxaUdgYoNxBsOaPKxj6o2S4SZKdxKhClxp2XRFsPS1XZjFERikSnpfD3hT2JY2skgAqDl2UX2wtwsKD%2BZihLNGi9lt7rvXVUjYsdaxI3FMLDhTUUd2qeqNo6nwTTXGYZO5te1EOyFMx%2FcGFWgbrDnJo5exyuUcZE8MeJCFfdE2lWfFONnbjGkB6Q1pOz%2B1RF4HyjExRB9JyrBoAv8LGF6f0YRoeMa6vPOEa5Poinw0vrKUT9u%2B0Dbjqg%2BiXpy9aqTFZ8EXCVtfKetG%2Fa1NoBxb%2FKVOoLNFsXwb%2BHTh9jqbbb%2FNKEUjeENwyJpiMRlAvMilTrtajkZIVaZJU5TH3Y%2BuIE1HmuUKq%2FNu14B%2F9UewUjv1XpFp3sfG4ktUFnhWL4dQkRfC3MHT2Te%2B6iW%2BO7ut8De67wftbsDfpdc%2B4ek6n0ugUs4xp%2F%2BOSa0yRcBlV3LcjSG1gt8v64nD6Q6S6NUTM3hKBTK5D8NHIgc3J3%2F0NmEvA5GoxVfvnAkgw3JS8wAY6pgF0O69aJrdnBj1f2n3G92AqHR4FD%2BpIAQu4zh2KLmjDa1Vbll%2B8bW40qBlQ6ggKvowU1TUiZIbQHcxLcX0RW1pEiqLAtapCAI14zLvI3z7SY0%2BwZmxYail7dRfDdbvJ2FaYJbDLPYA4mWS6AXjlFhizl6hRXk21hEq31%2FGI%2BxsrK%2BWQiFO%2FkAF2G6ZAkIqz9WVfUOqDgNZqJkrdTBCFNuoTOkBh5dSh&X-Amz-Signature=f616fc0dc6ed50aa4dc4a9e822311e55a5da6a4bdb388bb43427c319ad621430&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24CZRPS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCoXODB6s4qpJMQtLj7%2FrXCP76NIIrt4RdQarLIrY1YAiAMsrpRynVj5zM%2BR9dSc4uv0atbu%2BaVT9kTWaa42B7WSir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMkgdjtGV38f3l5nUfKtwDOiBjDUgF3IAcxvlbTcSatY1cxEh9Ygn25yqaM%2BRSmNSJgnGuRN61NlsWyQwzmY6u1gnpTKRYCL%2BWLcQPTlEM9Nk4UllPUIRO46S%2FAoBYZtYa6gS5a3Z%2B%2Fx12TzKsI1zOIjxaUdgYoNxBsOaPKxj6o2S4SZKdxKhClxp2XRFsPS1XZjFERikSnpfD3hT2JY2skgAqDl2UX2wtwsKD%2BZihLNGi9lt7rvXVUjYsdaxI3FMLDhTUUd2qeqNo6nwTTXGYZO5te1EOyFMx%2FcGFWgbrDnJo5exyuUcZE8MeJCFfdE2lWfFONnbjGkB6Q1pOz%2B1RF4HyjExRB9JyrBoAv8LGF6f0YRoeMa6vPOEa5Poinw0vrKUT9u%2B0Dbjqg%2BiXpy9aqTFZ8EXCVtfKetG%2Fa1NoBxb%2FKVOoLNFsXwb%2BHTh9jqbbb%2FNKEUjeENwyJpiMRlAvMilTrtajkZIVaZJU5TH3Y%2BuIE1HmuUKq%2FNu14B%2F9UewUjv1XpFp3sfG4ktUFnhWL4dQkRfC3MHT2Te%2B6iW%2BO7ut8De67wftbsDfpdc%2B4ek6n0ugUs4xp%2F%2BOSa0yRcBlV3LcjSG1gt8v64nD6Q6S6NUTM3hKBTK5D8NHIgc3J3%2F0NmEvA5GoxVfvnAkgw3JS8wAY6pgF0O69aJrdnBj1f2n3G92AqHR4FD%2BpIAQu4zh2KLmjDa1Vbll%2B8bW40qBlQ6ggKvowU1TUiZIbQHcxLcX0RW1pEiqLAtapCAI14zLvI3z7SY0%2BwZmxYail7dRfDdbvJ2FaYJbDLPYA4mWS6AXjlFhizl6hRXk21hEq31%2FGI%2BxsrK%2BWQiFO%2FkAF2G6ZAkIqz9WVfUOqDgNZqJkrdTBCFNuoTOkBh5dSh&X-Amz-Signature=d28498327b992e99a10dbc8490a86fcfe3639037a55e8fe39f1d97d85b7a5506&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24CZRPS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCoXODB6s4qpJMQtLj7%2FrXCP76NIIrt4RdQarLIrY1YAiAMsrpRynVj5zM%2BR9dSc4uv0atbu%2BaVT9kTWaa42B7WSir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMkgdjtGV38f3l5nUfKtwDOiBjDUgF3IAcxvlbTcSatY1cxEh9Ygn25yqaM%2BRSmNSJgnGuRN61NlsWyQwzmY6u1gnpTKRYCL%2BWLcQPTlEM9Nk4UllPUIRO46S%2FAoBYZtYa6gS5a3Z%2B%2Fx12TzKsI1zOIjxaUdgYoNxBsOaPKxj6o2S4SZKdxKhClxp2XRFsPS1XZjFERikSnpfD3hT2JY2skgAqDl2UX2wtwsKD%2BZihLNGi9lt7rvXVUjYsdaxI3FMLDhTUUd2qeqNo6nwTTXGYZO5te1EOyFMx%2FcGFWgbrDnJo5exyuUcZE8MeJCFfdE2lWfFONnbjGkB6Q1pOz%2B1RF4HyjExRB9JyrBoAv8LGF6f0YRoeMa6vPOEa5Poinw0vrKUT9u%2B0Dbjqg%2BiXpy9aqTFZ8EXCVtfKetG%2Fa1NoBxb%2FKVOoLNFsXwb%2BHTh9jqbbb%2FNKEUjeENwyJpiMRlAvMilTrtajkZIVaZJU5TH3Y%2BuIE1HmuUKq%2FNu14B%2F9UewUjv1XpFp3sfG4ktUFnhWL4dQkRfC3MHT2Te%2B6iW%2BO7ut8De67wftbsDfpdc%2B4ek6n0ugUs4xp%2F%2BOSa0yRcBlV3LcjSG1gt8v64nD6Q6S6NUTM3hKBTK5D8NHIgc3J3%2F0NmEvA5GoxVfvnAkgw3JS8wAY6pgF0O69aJrdnBj1f2n3G92AqHR4FD%2BpIAQu4zh2KLmjDa1Vbll%2B8bW40qBlQ6ggKvowU1TUiZIbQHcxLcX0RW1pEiqLAtapCAI14zLvI3z7SY0%2BwZmxYail7dRfDdbvJ2FaYJbDLPYA4mWS6AXjlFhizl6hRXk21hEq31%2FGI%2BxsrK%2BWQiFO%2FkAF2G6ZAkIqz9WVfUOqDgNZqJkrdTBCFNuoTOkBh5dSh&X-Amz-Signature=0a205b57a3549c6364a43ee77a19df0926347d1a3dc8885811a408e18928a747&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24CZRPS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCoXODB6s4qpJMQtLj7%2FrXCP76NIIrt4RdQarLIrY1YAiAMsrpRynVj5zM%2BR9dSc4uv0atbu%2BaVT9kTWaa42B7WSir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMkgdjtGV38f3l5nUfKtwDOiBjDUgF3IAcxvlbTcSatY1cxEh9Ygn25yqaM%2BRSmNSJgnGuRN61NlsWyQwzmY6u1gnpTKRYCL%2BWLcQPTlEM9Nk4UllPUIRO46S%2FAoBYZtYa6gS5a3Z%2B%2Fx12TzKsI1zOIjxaUdgYoNxBsOaPKxj6o2S4SZKdxKhClxp2XRFsPS1XZjFERikSnpfD3hT2JY2skgAqDl2UX2wtwsKD%2BZihLNGi9lt7rvXVUjYsdaxI3FMLDhTUUd2qeqNo6nwTTXGYZO5te1EOyFMx%2FcGFWgbrDnJo5exyuUcZE8MeJCFfdE2lWfFONnbjGkB6Q1pOz%2B1RF4HyjExRB9JyrBoAv8LGF6f0YRoeMa6vPOEa5Poinw0vrKUT9u%2B0Dbjqg%2BiXpy9aqTFZ8EXCVtfKetG%2Fa1NoBxb%2FKVOoLNFsXwb%2BHTh9jqbbb%2FNKEUjeENwyJpiMRlAvMilTrtajkZIVaZJU5TH3Y%2BuIE1HmuUKq%2FNu14B%2F9UewUjv1XpFp3sfG4ktUFnhWL4dQkRfC3MHT2Te%2B6iW%2BO7ut8De67wftbsDfpdc%2B4ek6n0ugUs4xp%2F%2BOSa0yRcBlV3LcjSG1gt8v64nD6Q6S6NUTM3hKBTK5D8NHIgc3J3%2F0NmEvA5GoxVfvnAkgw3JS8wAY6pgF0O69aJrdnBj1f2n3G92AqHR4FD%2BpIAQu4zh2KLmjDa1Vbll%2B8bW40qBlQ6ggKvowU1TUiZIbQHcxLcX0RW1pEiqLAtapCAI14zLvI3z7SY0%2BwZmxYail7dRfDdbvJ2FaYJbDLPYA4mWS6AXjlFhizl6hRXk21hEq31%2FGI%2BxsrK%2BWQiFO%2FkAF2G6ZAkIqz9WVfUOqDgNZqJkrdTBCFNuoTOkBh5dSh&X-Amz-Signature=442b92b4cb258295f3b11d24a67d36e939835e3e336d738d3b8152c341669718&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24CZRPS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCoXODB6s4qpJMQtLj7%2FrXCP76NIIrt4RdQarLIrY1YAiAMsrpRynVj5zM%2BR9dSc4uv0atbu%2BaVT9kTWaa42B7WSir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMkgdjtGV38f3l5nUfKtwDOiBjDUgF3IAcxvlbTcSatY1cxEh9Ygn25yqaM%2BRSmNSJgnGuRN61NlsWyQwzmY6u1gnpTKRYCL%2BWLcQPTlEM9Nk4UllPUIRO46S%2FAoBYZtYa6gS5a3Z%2B%2Fx12TzKsI1zOIjxaUdgYoNxBsOaPKxj6o2S4SZKdxKhClxp2XRFsPS1XZjFERikSnpfD3hT2JY2skgAqDl2UX2wtwsKD%2BZihLNGi9lt7rvXVUjYsdaxI3FMLDhTUUd2qeqNo6nwTTXGYZO5te1EOyFMx%2FcGFWgbrDnJo5exyuUcZE8MeJCFfdE2lWfFONnbjGkB6Q1pOz%2B1RF4HyjExRB9JyrBoAv8LGF6f0YRoeMa6vPOEa5Poinw0vrKUT9u%2B0Dbjqg%2BiXpy9aqTFZ8EXCVtfKetG%2Fa1NoBxb%2FKVOoLNFsXwb%2BHTh9jqbbb%2FNKEUjeENwyJpiMRlAvMilTrtajkZIVaZJU5TH3Y%2BuIE1HmuUKq%2FNu14B%2F9UewUjv1XpFp3sfG4ktUFnhWL4dQkRfC3MHT2Te%2B6iW%2BO7ut8De67wftbsDfpdc%2B4ek6n0ugUs4xp%2F%2BOSa0yRcBlV3LcjSG1gt8v64nD6Q6S6NUTM3hKBTK5D8NHIgc3J3%2F0NmEvA5GoxVfvnAkgw3JS8wAY6pgF0O69aJrdnBj1f2n3G92AqHR4FD%2BpIAQu4zh2KLmjDa1Vbll%2B8bW40qBlQ6ggKvowU1TUiZIbQHcxLcX0RW1pEiqLAtapCAI14zLvI3z7SY0%2BwZmxYail7dRfDdbvJ2FaYJbDLPYA4mWS6AXjlFhizl6hRXk21hEq31%2FGI%2BxsrK%2BWQiFO%2FkAF2G6ZAkIqz9WVfUOqDgNZqJkrdTBCFNuoTOkBh5dSh&X-Amz-Signature=06439ea3f2571daa7c883ec5424a1d44706df50d5a0d3da8611491fc7080e4fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
