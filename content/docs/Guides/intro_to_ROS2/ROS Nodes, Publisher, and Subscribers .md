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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2MK6TZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHk%2FJjnGM%2Fc%2B7CtaN12olHdhSu8fOFPdkDNKCGOWHRilAiEAznQuUstUNJ9mLv6Jrnrfe22S8FcDXZ3nxmP02jkBxQYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1KTq%2Fug6Hd8JcKxircA2yQ%2BH9s00ghBqoQc4SKVsGcv0rY%2B2kz%2FEfSlyPh%2BVKeCBgGJJFc1q2G91qEk0MkcgKLoZxrKnZgQY%2B79OsTVXN47TMClDG5BoUGj9eamET3akkOM0RjH8xR3bx%2F5qM9Ryu1nPANI3rbcFD3FoPffS2GjhtYx8a1ov5psZHOmzjso9Fmjk3t8GWplA4xZn5KgaN3IvrfB%2F7ze4jW19kvGCsX1UwnXVUNPA2m02D6c2Us9HM1NRlcPmcsNCh2rCRsF3nwEHMnpkXoM8ecuJA%2FFqp8OjEIpP9HkuUsk9qMI8Bjobqy6qU9LQRDLOqvICnT3cbyZax%2BwpNBOyqL1167fHfjll5K2%2BhBQrdeuLcIaQGFNgrewjMMaSY6qwD3oTcLN1xxI1Y3htTP9uMWUYf9kWXSOuE7BjSnUy7pRShVgYEI%2FYrCDbQSPpZm%2BsnOkshml%2Fo5EgSxnnGLaYJrUqvRN0G035kZvKcDbAR0SO87vcxlvNcq%2FQfr0QOBJiMwnCK10%2FT%2F8xTGuTMUUb0NeXU2EiluK8kcMLkS2wtJ4d48t44Y6GJLAbl%2FS1NyZHqGc6C3eWoLJuD3ECFv0MZkebwJwvncal6E9HSjKaAC5N9f2ew%2Fs3C4k0NmlgF7E%2BkcMOX4xMEGOqUB9Wpy%2BrUMxXspuPPbWVDZjaAHHvndF5tfVpDrX5XLe3QSXyJtUMm7aZjzOX9IhEq3oATKRPpw05B8jLvWvuKN9H4nxLEh734zWXvhoxzq10QdxOSfA5UK0K5DEP1q2zqN0YraIydTDwkRPTWBgzV1GsnAu06M1L1Bbl2f%2FRQDojLcexWZla3OwzJt3MprRGWU6mwbWyBJlqIwyPSr%2F6AX2zz1v%2Bif&X-Amz-Signature=51995afe5dfdb11e6e2c8154e65c84b9cae88d0a160a67ae4be50d55a9bbd240&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2MK6TZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHk%2FJjnGM%2Fc%2B7CtaN12olHdhSu8fOFPdkDNKCGOWHRilAiEAznQuUstUNJ9mLv6Jrnrfe22S8FcDXZ3nxmP02jkBxQYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1KTq%2Fug6Hd8JcKxircA2yQ%2BH9s00ghBqoQc4SKVsGcv0rY%2B2kz%2FEfSlyPh%2BVKeCBgGJJFc1q2G91qEk0MkcgKLoZxrKnZgQY%2B79OsTVXN47TMClDG5BoUGj9eamET3akkOM0RjH8xR3bx%2F5qM9Ryu1nPANI3rbcFD3FoPffS2GjhtYx8a1ov5psZHOmzjso9Fmjk3t8GWplA4xZn5KgaN3IvrfB%2F7ze4jW19kvGCsX1UwnXVUNPA2m02D6c2Us9HM1NRlcPmcsNCh2rCRsF3nwEHMnpkXoM8ecuJA%2FFqp8OjEIpP9HkuUsk9qMI8Bjobqy6qU9LQRDLOqvICnT3cbyZax%2BwpNBOyqL1167fHfjll5K2%2BhBQrdeuLcIaQGFNgrewjMMaSY6qwD3oTcLN1xxI1Y3htTP9uMWUYf9kWXSOuE7BjSnUy7pRShVgYEI%2FYrCDbQSPpZm%2BsnOkshml%2Fo5EgSxnnGLaYJrUqvRN0G035kZvKcDbAR0SO87vcxlvNcq%2FQfr0QOBJiMwnCK10%2FT%2F8xTGuTMUUb0NeXU2EiluK8kcMLkS2wtJ4d48t44Y6GJLAbl%2FS1NyZHqGc6C3eWoLJuD3ECFv0MZkebwJwvncal6E9HSjKaAC5N9f2ew%2Fs3C4k0NmlgF7E%2BkcMOX4xMEGOqUB9Wpy%2BrUMxXspuPPbWVDZjaAHHvndF5tfVpDrX5XLe3QSXyJtUMm7aZjzOX9IhEq3oATKRPpw05B8jLvWvuKN9H4nxLEh734zWXvhoxzq10QdxOSfA5UK0K5DEP1q2zqN0YraIydTDwkRPTWBgzV1GsnAu06M1L1Bbl2f%2FRQDojLcexWZla3OwzJt3MprRGWU6mwbWyBJlqIwyPSr%2F6AX2zz1v%2Bif&X-Amz-Signature=dd50d6f9c3f8740c0f739207b85c868c028f649db04b82b770bb27cbb77bf08b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2MK6TZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHk%2FJjnGM%2Fc%2B7CtaN12olHdhSu8fOFPdkDNKCGOWHRilAiEAznQuUstUNJ9mLv6Jrnrfe22S8FcDXZ3nxmP02jkBxQYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1KTq%2Fug6Hd8JcKxircA2yQ%2BH9s00ghBqoQc4SKVsGcv0rY%2B2kz%2FEfSlyPh%2BVKeCBgGJJFc1q2G91qEk0MkcgKLoZxrKnZgQY%2B79OsTVXN47TMClDG5BoUGj9eamET3akkOM0RjH8xR3bx%2F5qM9Ryu1nPANI3rbcFD3FoPffS2GjhtYx8a1ov5psZHOmzjso9Fmjk3t8GWplA4xZn5KgaN3IvrfB%2F7ze4jW19kvGCsX1UwnXVUNPA2m02D6c2Us9HM1NRlcPmcsNCh2rCRsF3nwEHMnpkXoM8ecuJA%2FFqp8OjEIpP9HkuUsk9qMI8Bjobqy6qU9LQRDLOqvICnT3cbyZax%2BwpNBOyqL1167fHfjll5K2%2BhBQrdeuLcIaQGFNgrewjMMaSY6qwD3oTcLN1xxI1Y3htTP9uMWUYf9kWXSOuE7BjSnUy7pRShVgYEI%2FYrCDbQSPpZm%2BsnOkshml%2Fo5EgSxnnGLaYJrUqvRN0G035kZvKcDbAR0SO87vcxlvNcq%2FQfr0QOBJiMwnCK10%2FT%2F8xTGuTMUUb0NeXU2EiluK8kcMLkS2wtJ4d48t44Y6GJLAbl%2FS1NyZHqGc6C3eWoLJuD3ECFv0MZkebwJwvncal6E9HSjKaAC5N9f2ew%2Fs3C4k0NmlgF7E%2BkcMOX4xMEGOqUB9Wpy%2BrUMxXspuPPbWVDZjaAHHvndF5tfVpDrX5XLe3QSXyJtUMm7aZjzOX9IhEq3oATKRPpw05B8jLvWvuKN9H4nxLEh734zWXvhoxzq10QdxOSfA5UK0K5DEP1q2zqN0YraIydTDwkRPTWBgzV1GsnAu06M1L1Bbl2f%2FRQDojLcexWZla3OwzJt3MprRGWU6mwbWyBJlqIwyPSr%2F6AX2zz1v%2Bif&X-Amz-Signature=e9316647dbd12f6868f33a4a9d0a1ee7bc25e81125fc2c369934ddb25f386207&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2MK6TZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHk%2FJjnGM%2Fc%2B7CtaN12olHdhSu8fOFPdkDNKCGOWHRilAiEAznQuUstUNJ9mLv6Jrnrfe22S8FcDXZ3nxmP02jkBxQYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1KTq%2Fug6Hd8JcKxircA2yQ%2BH9s00ghBqoQc4SKVsGcv0rY%2B2kz%2FEfSlyPh%2BVKeCBgGJJFc1q2G91qEk0MkcgKLoZxrKnZgQY%2B79OsTVXN47TMClDG5BoUGj9eamET3akkOM0RjH8xR3bx%2F5qM9Ryu1nPANI3rbcFD3FoPffS2GjhtYx8a1ov5psZHOmzjso9Fmjk3t8GWplA4xZn5KgaN3IvrfB%2F7ze4jW19kvGCsX1UwnXVUNPA2m02D6c2Us9HM1NRlcPmcsNCh2rCRsF3nwEHMnpkXoM8ecuJA%2FFqp8OjEIpP9HkuUsk9qMI8Bjobqy6qU9LQRDLOqvICnT3cbyZax%2BwpNBOyqL1167fHfjll5K2%2BhBQrdeuLcIaQGFNgrewjMMaSY6qwD3oTcLN1xxI1Y3htTP9uMWUYf9kWXSOuE7BjSnUy7pRShVgYEI%2FYrCDbQSPpZm%2BsnOkshml%2Fo5EgSxnnGLaYJrUqvRN0G035kZvKcDbAR0SO87vcxlvNcq%2FQfr0QOBJiMwnCK10%2FT%2F8xTGuTMUUb0NeXU2EiluK8kcMLkS2wtJ4d48t44Y6GJLAbl%2FS1NyZHqGc6C3eWoLJuD3ECFv0MZkebwJwvncal6E9HSjKaAC5N9f2ew%2Fs3C4k0NmlgF7E%2BkcMOX4xMEGOqUB9Wpy%2BrUMxXspuPPbWVDZjaAHHvndF5tfVpDrX5XLe3QSXyJtUMm7aZjzOX9IhEq3oATKRPpw05B8jLvWvuKN9H4nxLEh734zWXvhoxzq10QdxOSfA5UK0K5DEP1q2zqN0YraIydTDwkRPTWBgzV1GsnAu06M1L1Bbl2f%2FRQDojLcexWZla3OwzJt3MprRGWU6mwbWyBJlqIwyPSr%2F6AX2zz1v%2Bif&X-Amz-Signature=857dbe20846248743aff78ce56593143e921f0f1d1870b798039c1a5c7c03db4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2MK6TZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHk%2FJjnGM%2Fc%2B7CtaN12olHdhSu8fOFPdkDNKCGOWHRilAiEAznQuUstUNJ9mLv6Jrnrfe22S8FcDXZ3nxmP02jkBxQYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1KTq%2Fug6Hd8JcKxircA2yQ%2BH9s00ghBqoQc4SKVsGcv0rY%2B2kz%2FEfSlyPh%2BVKeCBgGJJFc1q2G91qEk0MkcgKLoZxrKnZgQY%2B79OsTVXN47TMClDG5BoUGj9eamET3akkOM0RjH8xR3bx%2F5qM9Ryu1nPANI3rbcFD3FoPffS2GjhtYx8a1ov5psZHOmzjso9Fmjk3t8GWplA4xZn5KgaN3IvrfB%2F7ze4jW19kvGCsX1UwnXVUNPA2m02D6c2Us9HM1NRlcPmcsNCh2rCRsF3nwEHMnpkXoM8ecuJA%2FFqp8OjEIpP9HkuUsk9qMI8Bjobqy6qU9LQRDLOqvICnT3cbyZax%2BwpNBOyqL1167fHfjll5K2%2BhBQrdeuLcIaQGFNgrewjMMaSY6qwD3oTcLN1xxI1Y3htTP9uMWUYf9kWXSOuE7BjSnUy7pRShVgYEI%2FYrCDbQSPpZm%2BsnOkshml%2Fo5EgSxnnGLaYJrUqvRN0G035kZvKcDbAR0SO87vcxlvNcq%2FQfr0QOBJiMwnCK10%2FT%2F8xTGuTMUUb0NeXU2EiluK8kcMLkS2wtJ4d48t44Y6GJLAbl%2FS1NyZHqGc6C3eWoLJuD3ECFv0MZkebwJwvncal6E9HSjKaAC5N9f2ew%2Fs3C4k0NmlgF7E%2BkcMOX4xMEGOqUB9Wpy%2BrUMxXspuPPbWVDZjaAHHvndF5tfVpDrX5XLe3QSXyJtUMm7aZjzOX9IhEq3oATKRPpw05B8jLvWvuKN9H4nxLEh734zWXvhoxzq10QdxOSfA5UK0K5DEP1q2zqN0YraIydTDwkRPTWBgzV1GsnAu06M1L1Bbl2f%2FRQDojLcexWZla3OwzJt3MprRGWU6mwbWyBJlqIwyPSr%2F6AX2zz1v%2Bif&X-Amz-Signature=291c58eb0f9a49b4d2bc2c49b550415db5bff230fe99f3397287dfe4f88b190a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2MK6TZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHk%2FJjnGM%2Fc%2B7CtaN12olHdhSu8fOFPdkDNKCGOWHRilAiEAznQuUstUNJ9mLv6Jrnrfe22S8FcDXZ3nxmP02jkBxQYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1KTq%2Fug6Hd8JcKxircA2yQ%2BH9s00ghBqoQc4SKVsGcv0rY%2B2kz%2FEfSlyPh%2BVKeCBgGJJFc1q2G91qEk0MkcgKLoZxrKnZgQY%2B79OsTVXN47TMClDG5BoUGj9eamET3akkOM0RjH8xR3bx%2F5qM9Ryu1nPANI3rbcFD3FoPffS2GjhtYx8a1ov5psZHOmzjso9Fmjk3t8GWplA4xZn5KgaN3IvrfB%2F7ze4jW19kvGCsX1UwnXVUNPA2m02D6c2Us9HM1NRlcPmcsNCh2rCRsF3nwEHMnpkXoM8ecuJA%2FFqp8OjEIpP9HkuUsk9qMI8Bjobqy6qU9LQRDLOqvICnT3cbyZax%2BwpNBOyqL1167fHfjll5K2%2BhBQrdeuLcIaQGFNgrewjMMaSY6qwD3oTcLN1xxI1Y3htTP9uMWUYf9kWXSOuE7BjSnUy7pRShVgYEI%2FYrCDbQSPpZm%2BsnOkshml%2Fo5EgSxnnGLaYJrUqvRN0G035kZvKcDbAR0SO87vcxlvNcq%2FQfr0QOBJiMwnCK10%2FT%2F8xTGuTMUUb0NeXU2EiluK8kcMLkS2wtJ4d48t44Y6GJLAbl%2FS1NyZHqGc6C3eWoLJuD3ECFv0MZkebwJwvncal6E9HSjKaAC5N9f2ew%2Fs3C4k0NmlgF7E%2BkcMOX4xMEGOqUB9Wpy%2BrUMxXspuPPbWVDZjaAHHvndF5tfVpDrX5XLe3QSXyJtUMm7aZjzOX9IhEq3oATKRPpw05B8jLvWvuKN9H4nxLEh734zWXvhoxzq10QdxOSfA5UK0K5DEP1q2zqN0YraIydTDwkRPTWBgzV1GsnAu06M1L1Bbl2f%2FRQDojLcexWZla3OwzJt3MprRGWU6mwbWyBJlqIwyPSr%2F6AX2zz1v%2Bif&X-Amz-Signature=26429f085ae2c503d77bc07c9fe474d25b2a17c86bb818825f5aee7d1d805f28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2MK6TZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHk%2FJjnGM%2Fc%2B7CtaN12olHdhSu8fOFPdkDNKCGOWHRilAiEAznQuUstUNJ9mLv6Jrnrfe22S8FcDXZ3nxmP02jkBxQYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1KTq%2Fug6Hd8JcKxircA2yQ%2BH9s00ghBqoQc4SKVsGcv0rY%2B2kz%2FEfSlyPh%2BVKeCBgGJJFc1q2G91qEk0MkcgKLoZxrKnZgQY%2B79OsTVXN47TMClDG5BoUGj9eamET3akkOM0RjH8xR3bx%2F5qM9Ryu1nPANI3rbcFD3FoPffS2GjhtYx8a1ov5psZHOmzjso9Fmjk3t8GWplA4xZn5KgaN3IvrfB%2F7ze4jW19kvGCsX1UwnXVUNPA2m02D6c2Us9HM1NRlcPmcsNCh2rCRsF3nwEHMnpkXoM8ecuJA%2FFqp8OjEIpP9HkuUsk9qMI8Bjobqy6qU9LQRDLOqvICnT3cbyZax%2BwpNBOyqL1167fHfjll5K2%2BhBQrdeuLcIaQGFNgrewjMMaSY6qwD3oTcLN1xxI1Y3htTP9uMWUYf9kWXSOuE7BjSnUy7pRShVgYEI%2FYrCDbQSPpZm%2BsnOkshml%2Fo5EgSxnnGLaYJrUqvRN0G035kZvKcDbAR0SO87vcxlvNcq%2FQfr0QOBJiMwnCK10%2FT%2F8xTGuTMUUb0NeXU2EiluK8kcMLkS2wtJ4d48t44Y6GJLAbl%2FS1NyZHqGc6C3eWoLJuD3ECFv0MZkebwJwvncal6E9HSjKaAC5N9f2ew%2Fs3C4k0NmlgF7E%2BkcMOX4xMEGOqUB9Wpy%2BrUMxXspuPPbWVDZjaAHHvndF5tfVpDrX5XLe3QSXyJtUMm7aZjzOX9IhEq3oATKRPpw05B8jLvWvuKN9H4nxLEh734zWXvhoxzq10QdxOSfA5UK0K5DEP1q2zqN0YraIydTDwkRPTWBgzV1GsnAu06M1L1Bbl2f%2FRQDojLcexWZla3OwzJt3MprRGWU6mwbWyBJlqIwyPSr%2F6AX2zz1v%2Bif&X-Amz-Signature=a15afb511941467a1e86756bc9145ce278b528c70652e5f6425706e2a7664fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2MK6TZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHk%2FJjnGM%2Fc%2B7CtaN12olHdhSu8fOFPdkDNKCGOWHRilAiEAznQuUstUNJ9mLv6Jrnrfe22S8FcDXZ3nxmP02jkBxQYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1KTq%2Fug6Hd8JcKxircA2yQ%2BH9s00ghBqoQc4SKVsGcv0rY%2B2kz%2FEfSlyPh%2BVKeCBgGJJFc1q2G91qEk0MkcgKLoZxrKnZgQY%2B79OsTVXN47TMClDG5BoUGj9eamET3akkOM0RjH8xR3bx%2F5qM9Ryu1nPANI3rbcFD3FoPffS2GjhtYx8a1ov5psZHOmzjso9Fmjk3t8GWplA4xZn5KgaN3IvrfB%2F7ze4jW19kvGCsX1UwnXVUNPA2m02D6c2Us9HM1NRlcPmcsNCh2rCRsF3nwEHMnpkXoM8ecuJA%2FFqp8OjEIpP9HkuUsk9qMI8Bjobqy6qU9LQRDLOqvICnT3cbyZax%2BwpNBOyqL1167fHfjll5K2%2BhBQrdeuLcIaQGFNgrewjMMaSY6qwD3oTcLN1xxI1Y3htTP9uMWUYf9kWXSOuE7BjSnUy7pRShVgYEI%2FYrCDbQSPpZm%2BsnOkshml%2Fo5EgSxnnGLaYJrUqvRN0G035kZvKcDbAR0SO87vcxlvNcq%2FQfr0QOBJiMwnCK10%2FT%2F8xTGuTMUUb0NeXU2EiluK8kcMLkS2wtJ4d48t44Y6GJLAbl%2FS1NyZHqGc6C3eWoLJuD3ECFv0MZkebwJwvncal6E9HSjKaAC5N9f2ew%2Fs3C4k0NmlgF7E%2BkcMOX4xMEGOqUB9Wpy%2BrUMxXspuPPbWVDZjaAHHvndF5tfVpDrX5XLe3QSXyJtUMm7aZjzOX9IhEq3oATKRPpw05B8jLvWvuKN9H4nxLEh734zWXvhoxzq10QdxOSfA5UK0K5DEP1q2zqN0YraIydTDwkRPTWBgzV1GsnAu06M1L1Bbl2f%2FRQDojLcexWZla3OwzJt3MprRGWU6mwbWyBJlqIwyPSr%2F6AX2zz1v%2Bif&X-Amz-Signature=0fc97ef98ce25c9903a4c0545350a4622a838d6ba68f188a3626cf349616bb55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
