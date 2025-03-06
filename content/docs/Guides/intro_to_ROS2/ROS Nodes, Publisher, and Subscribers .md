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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KY2SOV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrVwG0oHttX%2BJYMzXMaimtoXwoOwJrbNNuKc2AlvZGRAiEA4P6IiWASN6EUq2PyuH0y60HKQ9fggV489jDIOxt1oNYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0jG7t3uN9Nh%2BgIXSrcA0srDn71h4nw%2FltaFVb8PQaNZ0QSA3IGs8%2BHdgHmPUr8NESstb5yaM8l4aAu370IeKDJ9K3nxblfjgbEIqe8slGhpCpNyEmagSTRkLWSWTPubyYYRim%2B7AxV7kCovexaKW%2FnfFD3JntrmYj7wV4bjQwr182iehiHdQzmCLJOYePhBVyooAMArRwk%2B6kW1q%2B0H8EEuNu05kIywfV7Nx4s77S2CM1ddZiRhfQxnov3M0%2Bq%2B8WlBfG%2FY0AOUuMQoZgLEKoG1c2VaD3pUiU496RmiNqa77gx4faVKvvArcpap03IJNkufqPbKKpmoPXoqEXPiIkLOnox8Qh%2F3VAM6OD3YRyCyuuCVh2EBBe9gwxTjJ3wbP8GVGJX7IYjNfV%2BP9N3csB8dqrnQ3tYX6G%2BvM6B7PdiObbm0p45no6V7NJPsYxTY4q4f8QKRyPMbUFW1%2FzeRP9v%2F78%2BJMyrbIfMoOYTK%2BTrFkUyaTTwRZbrdKYpc33%2FNGiDwkJXvgfZz1ktmK%2Bq7cENwJlzsZVHU9b2jIt%2BvrNuJvsQ5TSiCTy5VI4FKq%2BFxVT2aNkjYk5ETW166iNRtWiP2yBaa7Qo0abbcUUO5Yy7Vznlsv1HJJ%2BAsyti1Drh3ZxFVgGcPu%2B39aeHMNKtp74GOqUBTWPvbVeDGHQWkqka7zeFyVSZVBLoQyr0F3DodDuf4Ak%2B0jPA5fSjNNBGKVjRXTyUbHoBaLcWqROznQxWmdUQ1vhYlsRunUjqw1GC9SPMXd9CFHqhltgvssdfJ9t%2FSh8FADs4k1AMLL4jYW8n6LH%2BVZXAH3kEOo01DfB%2BhFkVIaYp7qniEO3UNK4mmcgkDGHM0TkyAegln%2F18lMpdfCAcpiP%2FHQhz&X-Amz-Signature=21554a8de870bdefc250470b9a03a18d732fbc74419ae4ca87e7f884af81df12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KY2SOV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrVwG0oHttX%2BJYMzXMaimtoXwoOwJrbNNuKc2AlvZGRAiEA4P6IiWASN6EUq2PyuH0y60HKQ9fggV489jDIOxt1oNYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0jG7t3uN9Nh%2BgIXSrcA0srDn71h4nw%2FltaFVb8PQaNZ0QSA3IGs8%2BHdgHmPUr8NESstb5yaM8l4aAu370IeKDJ9K3nxblfjgbEIqe8slGhpCpNyEmagSTRkLWSWTPubyYYRim%2B7AxV7kCovexaKW%2FnfFD3JntrmYj7wV4bjQwr182iehiHdQzmCLJOYePhBVyooAMArRwk%2B6kW1q%2B0H8EEuNu05kIywfV7Nx4s77S2CM1ddZiRhfQxnov3M0%2Bq%2B8WlBfG%2FY0AOUuMQoZgLEKoG1c2VaD3pUiU496RmiNqa77gx4faVKvvArcpap03IJNkufqPbKKpmoPXoqEXPiIkLOnox8Qh%2F3VAM6OD3YRyCyuuCVh2EBBe9gwxTjJ3wbP8GVGJX7IYjNfV%2BP9N3csB8dqrnQ3tYX6G%2BvM6B7PdiObbm0p45no6V7NJPsYxTY4q4f8QKRyPMbUFW1%2FzeRP9v%2F78%2BJMyrbIfMoOYTK%2BTrFkUyaTTwRZbrdKYpc33%2FNGiDwkJXvgfZz1ktmK%2Bq7cENwJlzsZVHU9b2jIt%2BvrNuJvsQ5TSiCTy5VI4FKq%2BFxVT2aNkjYk5ETW166iNRtWiP2yBaa7Qo0abbcUUO5Yy7Vznlsv1HJJ%2BAsyti1Drh3ZxFVgGcPu%2B39aeHMNKtp74GOqUBTWPvbVeDGHQWkqka7zeFyVSZVBLoQyr0F3DodDuf4Ak%2B0jPA5fSjNNBGKVjRXTyUbHoBaLcWqROznQxWmdUQ1vhYlsRunUjqw1GC9SPMXd9CFHqhltgvssdfJ9t%2FSh8FADs4k1AMLL4jYW8n6LH%2BVZXAH3kEOo01DfB%2BhFkVIaYp7qniEO3UNK4mmcgkDGHM0TkyAegln%2F18lMpdfCAcpiP%2FHQhz&X-Amz-Signature=2ed4f9237fe9a3f3c933035ecbdbd51ce9308a3a2114ea36fd8e4258ed5b5132&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KY2SOV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrVwG0oHttX%2BJYMzXMaimtoXwoOwJrbNNuKc2AlvZGRAiEA4P6IiWASN6EUq2PyuH0y60HKQ9fggV489jDIOxt1oNYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0jG7t3uN9Nh%2BgIXSrcA0srDn71h4nw%2FltaFVb8PQaNZ0QSA3IGs8%2BHdgHmPUr8NESstb5yaM8l4aAu370IeKDJ9K3nxblfjgbEIqe8slGhpCpNyEmagSTRkLWSWTPubyYYRim%2B7AxV7kCovexaKW%2FnfFD3JntrmYj7wV4bjQwr182iehiHdQzmCLJOYePhBVyooAMArRwk%2B6kW1q%2B0H8EEuNu05kIywfV7Nx4s77S2CM1ddZiRhfQxnov3M0%2Bq%2B8WlBfG%2FY0AOUuMQoZgLEKoG1c2VaD3pUiU496RmiNqa77gx4faVKvvArcpap03IJNkufqPbKKpmoPXoqEXPiIkLOnox8Qh%2F3VAM6OD3YRyCyuuCVh2EBBe9gwxTjJ3wbP8GVGJX7IYjNfV%2BP9N3csB8dqrnQ3tYX6G%2BvM6B7PdiObbm0p45no6V7NJPsYxTY4q4f8QKRyPMbUFW1%2FzeRP9v%2F78%2BJMyrbIfMoOYTK%2BTrFkUyaTTwRZbrdKYpc33%2FNGiDwkJXvgfZz1ktmK%2Bq7cENwJlzsZVHU9b2jIt%2BvrNuJvsQ5TSiCTy5VI4FKq%2BFxVT2aNkjYk5ETW166iNRtWiP2yBaa7Qo0abbcUUO5Yy7Vznlsv1HJJ%2BAsyti1Drh3ZxFVgGcPu%2B39aeHMNKtp74GOqUBTWPvbVeDGHQWkqka7zeFyVSZVBLoQyr0F3DodDuf4Ak%2B0jPA5fSjNNBGKVjRXTyUbHoBaLcWqROznQxWmdUQ1vhYlsRunUjqw1GC9SPMXd9CFHqhltgvssdfJ9t%2FSh8FADs4k1AMLL4jYW8n6LH%2BVZXAH3kEOo01DfB%2BhFkVIaYp7qniEO3UNK4mmcgkDGHM0TkyAegln%2F18lMpdfCAcpiP%2FHQhz&X-Amz-Signature=bc36245e6ea65c942ee9c4aa4a62c65d456fd073c871417b0638ffed1bdd17f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KY2SOV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrVwG0oHttX%2BJYMzXMaimtoXwoOwJrbNNuKc2AlvZGRAiEA4P6IiWASN6EUq2PyuH0y60HKQ9fggV489jDIOxt1oNYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0jG7t3uN9Nh%2BgIXSrcA0srDn71h4nw%2FltaFVb8PQaNZ0QSA3IGs8%2BHdgHmPUr8NESstb5yaM8l4aAu370IeKDJ9K3nxblfjgbEIqe8slGhpCpNyEmagSTRkLWSWTPubyYYRim%2B7AxV7kCovexaKW%2FnfFD3JntrmYj7wV4bjQwr182iehiHdQzmCLJOYePhBVyooAMArRwk%2B6kW1q%2B0H8EEuNu05kIywfV7Nx4s77S2CM1ddZiRhfQxnov3M0%2Bq%2B8WlBfG%2FY0AOUuMQoZgLEKoG1c2VaD3pUiU496RmiNqa77gx4faVKvvArcpap03IJNkufqPbKKpmoPXoqEXPiIkLOnox8Qh%2F3VAM6OD3YRyCyuuCVh2EBBe9gwxTjJ3wbP8GVGJX7IYjNfV%2BP9N3csB8dqrnQ3tYX6G%2BvM6B7PdiObbm0p45no6V7NJPsYxTY4q4f8QKRyPMbUFW1%2FzeRP9v%2F78%2BJMyrbIfMoOYTK%2BTrFkUyaTTwRZbrdKYpc33%2FNGiDwkJXvgfZz1ktmK%2Bq7cENwJlzsZVHU9b2jIt%2BvrNuJvsQ5TSiCTy5VI4FKq%2BFxVT2aNkjYk5ETW166iNRtWiP2yBaa7Qo0abbcUUO5Yy7Vznlsv1HJJ%2BAsyti1Drh3ZxFVgGcPu%2B39aeHMNKtp74GOqUBTWPvbVeDGHQWkqka7zeFyVSZVBLoQyr0F3DodDuf4Ak%2B0jPA5fSjNNBGKVjRXTyUbHoBaLcWqROznQxWmdUQ1vhYlsRunUjqw1GC9SPMXd9CFHqhltgvssdfJ9t%2FSh8FADs4k1AMLL4jYW8n6LH%2BVZXAH3kEOo01DfB%2BhFkVIaYp7qniEO3UNK4mmcgkDGHM0TkyAegln%2F18lMpdfCAcpiP%2FHQhz&X-Amz-Signature=94cd6bf43d10ed6eff1fd70848ec9fd051ba2e1d4b4608062ccdd99859a58f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KY2SOV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrVwG0oHttX%2BJYMzXMaimtoXwoOwJrbNNuKc2AlvZGRAiEA4P6IiWASN6EUq2PyuH0y60HKQ9fggV489jDIOxt1oNYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0jG7t3uN9Nh%2BgIXSrcA0srDn71h4nw%2FltaFVb8PQaNZ0QSA3IGs8%2BHdgHmPUr8NESstb5yaM8l4aAu370IeKDJ9K3nxblfjgbEIqe8slGhpCpNyEmagSTRkLWSWTPubyYYRim%2B7AxV7kCovexaKW%2FnfFD3JntrmYj7wV4bjQwr182iehiHdQzmCLJOYePhBVyooAMArRwk%2B6kW1q%2B0H8EEuNu05kIywfV7Nx4s77S2CM1ddZiRhfQxnov3M0%2Bq%2B8WlBfG%2FY0AOUuMQoZgLEKoG1c2VaD3pUiU496RmiNqa77gx4faVKvvArcpap03IJNkufqPbKKpmoPXoqEXPiIkLOnox8Qh%2F3VAM6OD3YRyCyuuCVh2EBBe9gwxTjJ3wbP8GVGJX7IYjNfV%2BP9N3csB8dqrnQ3tYX6G%2BvM6B7PdiObbm0p45no6V7NJPsYxTY4q4f8QKRyPMbUFW1%2FzeRP9v%2F78%2BJMyrbIfMoOYTK%2BTrFkUyaTTwRZbrdKYpc33%2FNGiDwkJXvgfZz1ktmK%2Bq7cENwJlzsZVHU9b2jIt%2BvrNuJvsQ5TSiCTy5VI4FKq%2BFxVT2aNkjYk5ETW166iNRtWiP2yBaa7Qo0abbcUUO5Yy7Vznlsv1HJJ%2BAsyti1Drh3ZxFVgGcPu%2B39aeHMNKtp74GOqUBTWPvbVeDGHQWkqka7zeFyVSZVBLoQyr0F3DodDuf4Ak%2B0jPA5fSjNNBGKVjRXTyUbHoBaLcWqROznQxWmdUQ1vhYlsRunUjqw1GC9SPMXd9CFHqhltgvssdfJ9t%2FSh8FADs4k1AMLL4jYW8n6LH%2BVZXAH3kEOo01DfB%2BhFkVIaYp7qniEO3UNK4mmcgkDGHM0TkyAegln%2F18lMpdfCAcpiP%2FHQhz&X-Amz-Signature=8b630acf03eeaeca21110876960b28a62c8b986d29e62a512616fb14e68c93ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KY2SOV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrVwG0oHttX%2BJYMzXMaimtoXwoOwJrbNNuKc2AlvZGRAiEA4P6IiWASN6EUq2PyuH0y60HKQ9fggV489jDIOxt1oNYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0jG7t3uN9Nh%2BgIXSrcA0srDn71h4nw%2FltaFVb8PQaNZ0QSA3IGs8%2BHdgHmPUr8NESstb5yaM8l4aAu370IeKDJ9K3nxblfjgbEIqe8slGhpCpNyEmagSTRkLWSWTPubyYYRim%2B7AxV7kCovexaKW%2FnfFD3JntrmYj7wV4bjQwr182iehiHdQzmCLJOYePhBVyooAMArRwk%2B6kW1q%2B0H8EEuNu05kIywfV7Nx4s77S2CM1ddZiRhfQxnov3M0%2Bq%2B8WlBfG%2FY0AOUuMQoZgLEKoG1c2VaD3pUiU496RmiNqa77gx4faVKvvArcpap03IJNkufqPbKKpmoPXoqEXPiIkLOnox8Qh%2F3VAM6OD3YRyCyuuCVh2EBBe9gwxTjJ3wbP8GVGJX7IYjNfV%2BP9N3csB8dqrnQ3tYX6G%2BvM6B7PdiObbm0p45no6V7NJPsYxTY4q4f8QKRyPMbUFW1%2FzeRP9v%2F78%2BJMyrbIfMoOYTK%2BTrFkUyaTTwRZbrdKYpc33%2FNGiDwkJXvgfZz1ktmK%2Bq7cENwJlzsZVHU9b2jIt%2BvrNuJvsQ5TSiCTy5VI4FKq%2BFxVT2aNkjYk5ETW166iNRtWiP2yBaa7Qo0abbcUUO5Yy7Vznlsv1HJJ%2BAsyti1Drh3ZxFVgGcPu%2B39aeHMNKtp74GOqUBTWPvbVeDGHQWkqka7zeFyVSZVBLoQyr0F3DodDuf4Ak%2B0jPA5fSjNNBGKVjRXTyUbHoBaLcWqROznQxWmdUQ1vhYlsRunUjqw1GC9SPMXd9CFHqhltgvssdfJ9t%2FSh8FADs4k1AMLL4jYW8n6LH%2BVZXAH3kEOo01DfB%2BhFkVIaYp7qniEO3UNK4mmcgkDGHM0TkyAegln%2F18lMpdfCAcpiP%2FHQhz&X-Amz-Signature=ceb8c0dd12fcfb081bed6b42ae73a99bdbf419b586e1c95ee6478848d0ee2da3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KY2SOV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrVwG0oHttX%2BJYMzXMaimtoXwoOwJrbNNuKc2AlvZGRAiEA4P6IiWASN6EUq2PyuH0y60HKQ9fggV489jDIOxt1oNYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0jG7t3uN9Nh%2BgIXSrcA0srDn71h4nw%2FltaFVb8PQaNZ0QSA3IGs8%2BHdgHmPUr8NESstb5yaM8l4aAu370IeKDJ9K3nxblfjgbEIqe8slGhpCpNyEmagSTRkLWSWTPubyYYRim%2B7AxV7kCovexaKW%2FnfFD3JntrmYj7wV4bjQwr182iehiHdQzmCLJOYePhBVyooAMArRwk%2B6kW1q%2B0H8EEuNu05kIywfV7Nx4s77S2CM1ddZiRhfQxnov3M0%2Bq%2B8WlBfG%2FY0AOUuMQoZgLEKoG1c2VaD3pUiU496RmiNqa77gx4faVKvvArcpap03IJNkufqPbKKpmoPXoqEXPiIkLOnox8Qh%2F3VAM6OD3YRyCyuuCVh2EBBe9gwxTjJ3wbP8GVGJX7IYjNfV%2BP9N3csB8dqrnQ3tYX6G%2BvM6B7PdiObbm0p45no6V7NJPsYxTY4q4f8QKRyPMbUFW1%2FzeRP9v%2F78%2BJMyrbIfMoOYTK%2BTrFkUyaTTwRZbrdKYpc33%2FNGiDwkJXvgfZz1ktmK%2Bq7cENwJlzsZVHU9b2jIt%2BvrNuJvsQ5TSiCTy5VI4FKq%2BFxVT2aNkjYk5ETW166iNRtWiP2yBaa7Qo0abbcUUO5Yy7Vznlsv1HJJ%2BAsyti1Drh3ZxFVgGcPu%2B39aeHMNKtp74GOqUBTWPvbVeDGHQWkqka7zeFyVSZVBLoQyr0F3DodDuf4Ak%2B0jPA5fSjNNBGKVjRXTyUbHoBaLcWqROznQxWmdUQ1vhYlsRunUjqw1GC9SPMXd9CFHqhltgvssdfJ9t%2FSh8FADs4k1AMLL4jYW8n6LH%2BVZXAH3kEOo01DfB%2BhFkVIaYp7qniEO3UNK4mmcgkDGHM0TkyAegln%2F18lMpdfCAcpiP%2FHQhz&X-Amz-Signature=0f30100d3855fd1bfe639a8888e88779ccddd21cc70cae17acd36650d8b2bd61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KY2SOV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrVwG0oHttX%2BJYMzXMaimtoXwoOwJrbNNuKc2AlvZGRAiEA4P6IiWASN6EUq2PyuH0y60HKQ9fggV489jDIOxt1oNYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0jG7t3uN9Nh%2BgIXSrcA0srDn71h4nw%2FltaFVb8PQaNZ0QSA3IGs8%2BHdgHmPUr8NESstb5yaM8l4aAu370IeKDJ9K3nxblfjgbEIqe8slGhpCpNyEmagSTRkLWSWTPubyYYRim%2B7AxV7kCovexaKW%2FnfFD3JntrmYj7wV4bjQwr182iehiHdQzmCLJOYePhBVyooAMArRwk%2B6kW1q%2B0H8EEuNu05kIywfV7Nx4s77S2CM1ddZiRhfQxnov3M0%2Bq%2B8WlBfG%2FY0AOUuMQoZgLEKoG1c2VaD3pUiU496RmiNqa77gx4faVKvvArcpap03IJNkufqPbKKpmoPXoqEXPiIkLOnox8Qh%2F3VAM6OD3YRyCyuuCVh2EBBe9gwxTjJ3wbP8GVGJX7IYjNfV%2BP9N3csB8dqrnQ3tYX6G%2BvM6B7PdiObbm0p45no6V7NJPsYxTY4q4f8QKRyPMbUFW1%2FzeRP9v%2F78%2BJMyrbIfMoOYTK%2BTrFkUyaTTwRZbrdKYpc33%2FNGiDwkJXvgfZz1ktmK%2Bq7cENwJlzsZVHU9b2jIt%2BvrNuJvsQ5TSiCTy5VI4FKq%2BFxVT2aNkjYk5ETW166iNRtWiP2yBaa7Qo0abbcUUO5Yy7Vznlsv1HJJ%2BAsyti1Drh3ZxFVgGcPu%2B39aeHMNKtp74GOqUBTWPvbVeDGHQWkqka7zeFyVSZVBLoQyr0F3DodDuf4Ak%2B0jPA5fSjNNBGKVjRXTyUbHoBaLcWqROznQxWmdUQ1vhYlsRunUjqw1GC9SPMXd9CFHqhltgvssdfJ9t%2FSh8FADs4k1AMLL4jYW8n6LH%2BVZXAH3kEOo01DfB%2BhFkVIaYp7qniEO3UNK4mmcgkDGHM0TkyAegln%2F18lMpdfCAcpiP%2FHQhz&X-Amz-Signature=d2d4e9e4a5cc69d6029e90e9dc6a70c39b232940b59c0879a7644e8de2d17972&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
