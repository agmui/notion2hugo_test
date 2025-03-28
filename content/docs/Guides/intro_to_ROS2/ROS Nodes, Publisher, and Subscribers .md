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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYJRPV7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5m9ihtNQLm0LXm1v6VaH8vcU24lMBREJBmjwrufKeQIhALEFeitd57wW46mpEf9YOPssiesXTZxHXV87qdGHRj6JKv8DCF4QABoMNjM3NDIzMTgzODA1Igym6gL2n%2BOn1hTqgMcq3AMEjIRr%2Bdds0rGDzs0SfjCE6Q3zxxUstsWoHhg3PrrSSjSVpoFsrdy16EYjzvUV0ExrbdovX8bm4hIYSwklBhmKRIT9TbNeZ5lmchpDD3blO5TCbFTCfKQW52R3pMQRSMyyNNTrJpGm%2B971P114P7tWhlWmajWTj4gQXQjEqwlE8itCV%2FWtQFNCk1NW8rKgVTdycRBaDgrG4tsqdsXWZh3RT%2FZ7Bz%2F5lhnuHP62ySpmQK2xQC0sLYfYa63v1L1FfSEiuTtsAzUIbm4ssHSBv5HRnMkd1%2F%2BakMSGaoHazS6c0Z8tcBxFEubaRzyVKbAPFLhhpJpUyEaDMY6FdajE6MPJGCkz49qk6i9AD32%2BOlID3Eu4rnIYjA4kuuD5PQ1NChVdlsS7VTnC%2FIb%2F1yrGcYOdJZ7R5F%2FQmzA9aa%2FcyKSJZGjyP5npnhfIzzFORYU40edEvl6YnDtxG5PcPxaqykoPAcYhyPCvR4XJ6C6SA98kdeE4OI4vbc8polZNarTEVObf2uFbWh0C62piD2q4IXxYa9gL2E0BSndiHR2%2BOUma2BH2RknyjrPooFl4is%2Fpk4Pm4Wz%2BAmxzgD83kDVLjOmpDXcj6h91OASii%2FCeSyI%2BViJ321wg3%2F07agYq5zCesZq%2FBjqkAdDOjuq266pJoyxBCNScZqHaTBxh2UJr7ScyKDVT3F3%2F9CvvDEteIqe4GLnC9S4rVWQvgHHZM%2B45jHjsxFR63Cy2E%2FZVVGgZStdRDW66XO%2B9s%2FgVs5157gVC1l6%2B4%2BWo2vIope%2FqYESs660Ts%2BzNMZsq4w%2FMjfR%2B9gOAYnMRHxvKFQDOP0aacBWetTTEKVGkfQja5TC6yRKsVt0Q8vKXaTg5mtOW&X-Amz-Signature=a3b78b53b111f28795388bcbf5c0acd82563c81b9c2eae25dc4129d8ac0d7b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYJRPV7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5m9ihtNQLm0LXm1v6VaH8vcU24lMBREJBmjwrufKeQIhALEFeitd57wW46mpEf9YOPssiesXTZxHXV87qdGHRj6JKv8DCF4QABoMNjM3NDIzMTgzODA1Igym6gL2n%2BOn1hTqgMcq3AMEjIRr%2Bdds0rGDzs0SfjCE6Q3zxxUstsWoHhg3PrrSSjSVpoFsrdy16EYjzvUV0ExrbdovX8bm4hIYSwklBhmKRIT9TbNeZ5lmchpDD3blO5TCbFTCfKQW52R3pMQRSMyyNNTrJpGm%2B971P114P7tWhlWmajWTj4gQXQjEqwlE8itCV%2FWtQFNCk1NW8rKgVTdycRBaDgrG4tsqdsXWZh3RT%2FZ7Bz%2F5lhnuHP62ySpmQK2xQC0sLYfYa63v1L1FfSEiuTtsAzUIbm4ssHSBv5HRnMkd1%2F%2BakMSGaoHazS6c0Z8tcBxFEubaRzyVKbAPFLhhpJpUyEaDMY6FdajE6MPJGCkz49qk6i9AD32%2BOlID3Eu4rnIYjA4kuuD5PQ1NChVdlsS7VTnC%2FIb%2F1yrGcYOdJZ7R5F%2FQmzA9aa%2FcyKSJZGjyP5npnhfIzzFORYU40edEvl6YnDtxG5PcPxaqykoPAcYhyPCvR4XJ6C6SA98kdeE4OI4vbc8polZNarTEVObf2uFbWh0C62piD2q4IXxYa9gL2E0BSndiHR2%2BOUma2BH2RknyjrPooFl4is%2Fpk4Pm4Wz%2BAmxzgD83kDVLjOmpDXcj6h91OASii%2FCeSyI%2BViJ321wg3%2F07agYq5zCesZq%2FBjqkAdDOjuq266pJoyxBCNScZqHaTBxh2UJr7ScyKDVT3F3%2F9CvvDEteIqe4GLnC9S4rVWQvgHHZM%2B45jHjsxFR63Cy2E%2FZVVGgZStdRDW66XO%2B9s%2FgVs5157gVC1l6%2B4%2BWo2vIope%2FqYESs660Ts%2BzNMZsq4w%2FMjfR%2B9gOAYnMRHxvKFQDOP0aacBWetTTEKVGkfQja5TC6yRKsVt0Q8vKXaTg5mtOW&X-Amz-Signature=c4af8a7c26da11a160a5b85a9140e685e3420c5786de569c373d907756b0b9b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYJRPV7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5m9ihtNQLm0LXm1v6VaH8vcU24lMBREJBmjwrufKeQIhALEFeitd57wW46mpEf9YOPssiesXTZxHXV87qdGHRj6JKv8DCF4QABoMNjM3NDIzMTgzODA1Igym6gL2n%2BOn1hTqgMcq3AMEjIRr%2Bdds0rGDzs0SfjCE6Q3zxxUstsWoHhg3PrrSSjSVpoFsrdy16EYjzvUV0ExrbdovX8bm4hIYSwklBhmKRIT9TbNeZ5lmchpDD3blO5TCbFTCfKQW52R3pMQRSMyyNNTrJpGm%2B971P114P7tWhlWmajWTj4gQXQjEqwlE8itCV%2FWtQFNCk1NW8rKgVTdycRBaDgrG4tsqdsXWZh3RT%2FZ7Bz%2F5lhnuHP62ySpmQK2xQC0sLYfYa63v1L1FfSEiuTtsAzUIbm4ssHSBv5HRnMkd1%2F%2BakMSGaoHazS6c0Z8tcBxFEubaRzyVKbAPFLhhpJpUyEaDMY6FdajE6MPJGCkz49qk6i9AD32%2BOlID3Eu4rnIYjA4kuuD5PQ1NChVdlsS7VTnC%2FIb%2F1yrGcYOdJZ7R5F%2FQmzA9aa%2FcyKSJZGjyP5npnhfIzzFORYU40edEvl6YnDtxG5PcPxaqykoPAcYhyPCvR4XJ6C6SA98kdeE4OI4vbc8polZNarTEVObf2uFbWh0C62piD2q4IXxYa9gL2E0BSndiHR2%2BOUma2BH2RknyjrPooFl4is%2Fpk4Pm4Wz%2BAmxzgD83kDVLjOmpDXcj6h91OASii%2FCeSyI%2BViJ321wg3%2F07agYq5zCesZq%2FBjqkAdDOjuq266pJoyxBCNScZqHaTBxh2UJr7ScyKDVT3F3%2F9CvvDEteIqe4GLnC9S4rVWQvgHHZM%2B45jHjsxFR63Cy2E%2FZVVGgZStdRDW66XO%2B9s%2FgVs5157gVC1l6%2B4%2BWo2vIope%2FqYESs660Ts%2BzNMZsq4w%2FMjfR%2B9gOAYnMRHxvKFQDOP0aacBWetTTEKVGkfQja5TC6yRKsVt0Q8vKXaTg5mtOW&X-Amz-Signature=8c2fff19978bf244e1a9ca14f958c1dbf74bd16a8dfa82e8f9b1a806b19e6731&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYJRPV7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5m9ihtNQLm0LXm1v6VaH8vcU24lMBREJBmjwrufKeQIhALEFeitd57wW46mpEf9YOPssiesXTZxHXV87qdGHRj6JKv8DCF4QABoMNjM3NDIzMTgzODA1Igym6gL2n%2BOn1hTqgMcq3AMEjIRr%2Bdds0rGDzs0SfjCE6Q3zxxUstsWoHhg3PrrSSjSVpoFsrdy16EYjzvUV0ExrbdovX8bm4hIYSwklBhmKRIT9TbNeZ5lmchpDD3blO5TCbFTCfKQW52R3pMQRSMyyNNTrJpGm%2B971P114P7tWhlWmajWTj4gQXQjEqwlE8itCV%2FWtQFNCk1NW8rKgVTdycRBaDgrG4tsqdsXWZh3RT%2FZ7Bz%2F5lhnuHP62ySpmQK2xQC0sLYfYa63v1L1FfSEiuTtsAzUIbm4ssHSBv5HRnMkd1%2F%2BakMSGaoHazS6c0Z8tcBxFEubaRzyVKbAPFLhhpJpUyEaDMY6FdajE6MPJGCkz49qk6i9AD32%2BOlID3Eu4rnIYjA4kuuD5PQ1NChVdlsS7VTnC%2FIb%2F1yrGcYOdJZ7R5F%2FQmzA9aa%2FcyKSJZGjyP5npnhfIzzFORYU40edEvl6YnDtxG5PcPxaqykoPAcYhyPCvR4XJ6C6SA98kdeE4OI4vbc8polZNarTEVObf2uFbWh0C62piD2q4IXxYa9gL2E0BSndiHR2%2BOUma2BH2RknyjrPooFl4is%2Fpk4Pm4Wz%2BAmxzgD83kDVLjOmpDXcj6h91OASii%2FCeSyI%2BViJ321wg3%2F07agYq5zCesZq%2FBjqkAdDOjuq266pJoyxBCNScZqHaTBxh2UJr7ScyKDVT3F3%2F9CvvDEteIqe4GLnC9S4rVWQvgHHZM%2B45jHjsxFR63Cy2E%2FZVVGgZStdRDW66XO%2B9s%2FgVs5157gVC1l6%2B4%2BWo2vIope%2FqYESs660Ts%2BzNMZsq4w%2FMjfR%2B9gOAYnMRHxvKFQDOP0aacBWetTTEKVGkfQja5TC6yRKsVt0Q8vKXaTg5mtOW&X-Amz-Signature=24e12ac77d30e33656216a0678f8be5882e25c21efdd50709a78e405c6cced9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYJRPV7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5m9ihtNQLm0LXm1v6VaH8vcU24lMBREJBmjwrufKeQIhALEFeitd57wW46mpEf9YOPssiesXTZxHXV87qdGHRj6JKv8DCF4QABoMNjM3NDIzMTgzODA1Igym6gL2n%2BOn1hTqgMcq3AMEjIRr%2Bdds0rGDzs0SfjCE6Q3zxxUstsWoHhg3PrrSSjSVpoFsrdy16EYjzvUV0ExrbdovX8bm4hIYSwklBhmKRIT9TbNeZ5lmchpDD3blO5TCbFTCfKQW52R3pMQRSMyyNNTrJpGm%2B971P114P7tWhlWmajWTj4gQXQjEqwlE8itCV%2FWtQFNCk1NW8rKgVTdycRBaDgrG4tsqdsXWZh3RT%2FZ7Bz%2F5lhnuHP62ySpmQK2xQC0sLYfYa63v1L1FfSEiuTtsAzUIbm4ssHSBv5HRnMkd1%2F%2BakMSGaoHazS6c0Z8tcBxFEubaRzyVKbAPFLhhpJpUyEaDMY6FdajE6MPJGCkz49qk6i9AD32%2BOlID3Eu4rnIYjA4kuuD5PQ1NChVdlsS7VTnC%2FIb%2F1yrGcYOdJZ7R5F%2FQmzA9aa%2FcyKSJZGjyP5npnhfIzzFORYU40edEvl6YnDtxG5PcPxaqykoPAcYhyPCvR4XJ6C6SA98kdeE4OI4vbc8polZNarTEVObf2uFbWh0C62piD2q4IXxYa9gL2E0BSndiHR2%2BOUma2BH2RknyjrPooFl4is%2Fpk4Pm4Wz%2BAmxzgD83kDVLjOmpDXcj6h91OASii%2FCeSyI%2BViJ321wg3%2F07agYq5zCesZq%2FBjqkAdDOjuq266pJoyxBCNScZqHaTBxh2UJr7ScyKDVT3F3%2F9CvvDEteIqe4GLnC9S4rVWQvgHHZM%2B45jHjsxFR63Cy2E%2FZVVGgZStdRDW66XO%2B9s%2FgVs5157gVC1l6%2B4%2BWo2vIope%2FqYESs660Ts%2BzNMZsq4w%2FMjfR%2B9gOAYnMRHxvKFQDOP0aacBWetTTEKVGkfQja5TC6yRKsVt0Q8vKXaTg5mtOW&X-Amz-Signature=73fa16f8320567444282fd980702f8e683e427bd058957567edaece970c983f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYJRPV7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5m9ihtNQLm0LXm1v6VaH8vcU24lMBREJBmjwrufKeQIhALEFeitd57wW46mpEf9YOPssiesXTZxHXV87qdGHRj6JKv8DCF4QABoMNjM3NDIzMTgzODA1Igym6gL2n%2BOn1hTqgMcq3AMEjIRr%2Bdds0rGDzs0SfjCE6Q3zxxUstsWoHhg3PrrSSjSVpoFsrdy16EYjzvUV0ExrbdovX8bm4hIYSwklBhmKRIT9TbNeZ5lmchpDD3blO5TCbFTCfKQW52R3pMQRSMyyNNTrJpGm%2B971P114P7tWhlWmajWTj4gQXQjEqwlE8itCV%2FWtQFNCk1NW8rKgVTdycRBaDgrG4tsqdsXWZh3RT%2FZ7Bz%2F5lhnuHP62ySpmQK2xQC0sLYfYa63v1L1FfSEiuTtsAzUIbm4ssHSBv5HRnMkd1%2F%2BakMSGaoHazS6c0Z8tcBxFEubaRzyVKbAPFLhhpJpUyEaDMY6FdajE6MPJGCkz49qk6i9AD32%2BOlID3Eu4rnIYjA4kuuD5PQ1NChVdlsS7VTnC%2FIb%2F1yrGcYOdJZ7R5F%2FQmzA9aa%2FcyKSJZGjyP5npnhfIzzFORYU40edEvl6YnDtxG5PcPxaqykoPAcYhyPCvR4XJ6C6SA98kdeE4OI4vbc8polZNarTEVObf2uFbWh0C62piD2q4IXxYa9gL2E0BSndiHR2%2BOUma2BH2RknyjrPooFl4is%2Fpk4Pm4Wz%2BAmxzgD83kDVLjOmpDXcj6h91OASii%2FCeSyI%2BViJ321wg3%2F07agYq5zCesZq%2FBjqkAdDOjuq266pJoyxBCNScZqHaTBxh2UJr7ScyKDVT3F3%2F9CvvDEteIqe4GLnC9S4rVWQvgHHZM%2B45jHjsxFR63Cy2E%2FZVVGgZStdRDW66XO%2B9s%2FgVs5157gVC1l6%2B4%2BWo2vIope%2FqYESs660Ts%2BzNMZsq4w%2FMjfR%2B9gOAYnMRHxvKFQDOP0aacBWetTTEKVGkfQja5TC6yRKsVt0Q8vKXaTg5mtOW&X-Amz-Signature=d37189ed4769206b5f838f3bfc68fd5b621f47472ed7391f6eb18ae893cf6e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYJRPV7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5m9ihtNQLm0LXm1v6VaH8vcU24lMBREJBmjwrufKeQIhALEFeitd57wW46mpEf9YOPssiesXTZxHXV87qdGHRj6JKv8DCF4QABoMNjM3NDIzMTgzODA1Igym6gL2n%2BOn1hTqgMcq3AMEjIRr%2Bdds0rGDzs0SfjCE6Q3zxxUstsWoHhg3PrrSSjSVpoFsrdy16EYjzvUV0ExrbdovX8bm4hIYSwklBhmKRIT9TbNeZ5lmchpDD3blO5TCbFTCfKQW52R3pMQRSMyyNNTrJpGm%2B971P114P7tWhlWmajWTj4gQXQjEqwlE8itCV%2FWtQFNCk1NW8rKgVTdycRBaDgrG4tsqdsXWZh3RT%2FZ7Bz%2F5lhnuHP62ySpmQK2xQC0sLYfYa63v1L1FfSEiuTtsAzUIbm4ssHSBv5HRnMkd1%2F%2BakMSGaoHazS6c0Z8tcBxFEubaRzyVKbAPFLhhpJpUyEaDMY6FdajE6MPJGCkz49qk6i9AD32%2BOlID3Eu4rnIYjA4kuuD5PQ1NChVdlsS7VTnC%2FIb%2F1yrGcYOdJZ7R5F%2FQmzA9aa%2FcyKSJZGjyP5npnhfIzzFORYU40edEvl6YnDtxG5PcPxaqykoPAcYhyPCvR4XJ6C6SA98kdeE4OI4vbc8polZNarTEVObf2uFbWh0C62piD2q4IXxYa9gL2E0BSndiHR2%2BOUma2BH2RknyjrPooFl4is%2Fpk4Pm4Wz%2BAmxzgD83kDVLjOmpDXcj6h91OASii%2FCeSyI%2BViJ321wg3%2F07agYq5zCesZq%2FBjqkAdDOjuq266pJoyxBCNScZqHaTBxh2UJr7ScyKDVT3F3%2F9CvvDEteIqe4GLnC9S4rVWQvgHHZM%2B45jHjsxFR63Cy2E%2FZVVGgZStdRDW66XO%2B9s%2FgVs5157gVC1l6%2B4%2BWo2vIope%2FqYESs660Ts%2BzNMZsq4w%2FMjfR%2B9gOAYnMRHxvKFQDOP0aacBWetTTEKVGkfQja5TC6yRKsVt0Q8vKXaTg5mtOW&X-Amz-Signature=39efc740c39e6ee194abf93bb07d4c9b51a3de4438d7e07b3d35f006920dcd52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYJRPV7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5m9ihtNQLm0LXm1v6VaH8vcU24lMBREJBmjwrufKeQIhALEFeitd57wW46mpEf9YOPssiesXTZxHXV87qdGHRj6JKv8DCF4QABoMNjM3NDIzMTgzODA1Igym6gL2n%2BOn1hTqgMcq3AMEjIRr%2Bdds0rGDzs0SfjCE6Q3zxxUstsWoHhg3PrrSSjSVpoFsrdy16EYjzvUV0ExrbdovX8bm4hIYSwklBhmKRIT9TbNeZ5lmchpDD3blO5TCbFTCfKQW52R3pMQRSMyyNNTrJpGm%2B971P114P7tWhlWmajWTj4gQXQjEqwlE8itCV%2FWtQFNCk1NW8rKgVTdycRBaDgrG4tsqdsXWZh3RT%2FZ7Bz%2F5lhnuHP62ySpmQK2xQC0sLYfYa63v1L1FfSEiuTtsAzUIbm4ssHSBv5HRnMkd1%2F%2BakMSGaoHazS6c0Z8tcBxFEubaRzyVKbAPFLhhpJpUyEaDMY6FdajE6MPJGCkz49qk6i9AD32%2BOlID3Eu4rnIYjA4kuuD5PQ1NChVdlsS7VTnC%2FIb%2F1yrGcYOdJZ7R5F%2FQmzA9aa%2FcyKSJZGjyP5npnhfIzzFORYU40edEvl6YnDtxG5PcPxaqykoPAcYhyPCvR4XJ6C6SA98kdeE4OI4vbc8polZNarTEVObf2uFbWh0C62piD2q4IXxYa9gL2E0BSndiHR2%2BOUma2BH2RknyjrPooFl4is%2Fpk4Pm4Wz%2BAmxzgD83kDVLjOmpDXcj6h91OASii%2FCeSyI%2BViJ321wg3%2F07agYq5zCesZq%2FBjqkAdDOjuq266pJoyxBCNScZqHaTBxh2UJr7ScyKDVT3F3%2F9CvvDEteIqe4GLnC9S4rVWQvgHHZM%2B45jHjsxFR63Cy2E%2FZVVGgZStdRDW66XO%2B9s%2FgVs5157gVC1l6%2B4%2BWo2vIope%2FqYESs660Ts%2BzNMZsq4w%2FMjfR%2B9gOAYnMRHxvKFQDOP0aacBWetTTEKVGkfQja5TC6yRKsVt0Q8vKXaTg5mtOW&X-Amz-Signature=755e0e715277b217d8fbde9fdfc9fbeba8accd2e5d55cefe20d303d54c844ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
