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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEKSZC7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlDAiNI67FU7EGzPkqY6mN3PV%2BXls5iu85N2Xng%2B6fAiBUXqNUy%2BsyjF9aB%2FXACr%2FDYBu5bQ%2BN0AS4sXbxJdpsIyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFWdo6JjBxsb5V48bKtwDPwViqDoRC9c8yc9WaOPe6EAm2PpRyVxQraCvwBt2IRRVQjcs%2FI3fQQKc5WHSE77qViGV1c8K0atiEsL%2BRikKssA43iu%2FwDl4LO9ZjuuPOErQ79AQkT%2FyVjywiHk5bvNvZ2gx7FUbiQlwaCAhdOayUmR%2FD2uHYusYeueBBylngnE6Lp7QgqQZe5Ml8Kqs7mGj529irNG3bTfBKQNTwnNL1AKmqHWJ5vJTRy1wTwiKr%2B1SeihEJA1P4BhQti6ItEHGRc3KF3wGIRCXAvJLkLFi%2BnmYosv74lUd33Fuv%2B5AKvoPDm5KPwDJLbByF%2FEnjPVMnEswWGIPX6UYteVVf2Z%2FOJsFXcsRzw0hVZJHKTDiDc5Sg0QRUbyWaz47gDTK5GDq9Fp3vdo9PQzWMDmZBmu%2BpPvaNlZOIrfVGb%2FEE6ccaHOJQ99jf46a%2Fgy4Y%2FyAH2mmqEtmIYxO3o896f8W207xkrh0FJHHujlYX66rAdilWjL553LOVUuFcY6H%2FfI2NLTexeiUwU9kosPyWJopw6tm0cWwBZi%2F8rtogI6dWiE%2FrQNierl5c%2BXobyR20nj57oR3asJFZm8KSpP1%2FvusDR%2BQ9HWeb23V5K3FAxKxa4Wy0d96M4V7tQhnmghoSwkwxeaEwAY6pgF42LbLd8lBIe5DtHna6oyOdiLbXCiGNNTTcQErHwc%2FRNc0i4qxY4JFVJqHavqDPJTbiP%2FEr6ss8i0oq8BHUdz80oUSkWTpUk2AbEpsOJFwRIDXYu7NeEbolQVpwR7IA%2F2dvAQgVNpVTRk%2FkSbZSv8hYlMz655g8x072ohJmDRKyX7Hp1dv%2BGxyqVRO9tDbDyRzco%2FpRcuFuilWAUgGgVPpTEQpDAkS&X-Amz-Signature=4e844a61adc2160a4710bf6f392f69c80d1c17f8a14150f41efe9d70e3a7c7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEKSZC7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlDAiNI67FU7EGzPkqY6mN3PV%2BXls5iu85N2Xng%2B6fAiBUXqNUy%2BsyjF9aB%2FXACr%2FDYBu5bQ%2BN0AS4sXbxJdpsIyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFWdo6JjBxsb5V48bKtwDPwViqDoRC9c8yc9WaOPe6EAm2PpRyVxQraCvwBt2IRRVQjcs%2FI3fQQKc5WHSE77qViGV1c8K0atiEsL%2BRikKssA43iu%2FwDl4LO9ZjuuPOErQ79AQkT%2FyVjywiHk5bvNvZ2gx7FUbiQlwaCAhdOayUmR%2FD2uHYusYeueBBylngnE6Lp7QgqQZe5Ml8Kqs7mGj529irNG3bTfBKQNTwnNL1AKmqHWJ5vJTRy1wTwiKr%2B1SeihEJA1P4BhQti6ItEHGRc3KF3wGIRCXAvJLkLFi%2BnmYosv74lUd33Fuv%2B5AKvoPDm5KPwDJLbByF%2FEnjPVMnEswWGIPX6UYteVVf2Z%2FOJsFXcsRzw0hVZJHKTDiDc5Sg0QRUbyWaz47gDTK5GDq9Fp3vdo9PQzWMDmZBmu%2BpPvaNlZOIrfVGb%2FEE6ccaHOJQ99jf46a%2Fgy4Y%2FyAH2mmqEtmIYxO3o896f8W207xkrh0FJHHujlYX66rAdilWjL553LOVUuFcY6H%2FfI2NLTexeiUwU9kosPyWJopw6tm0cWwBZi%2F8rtogI6dWiE%2FrQNierl5c%2BXobyR20nj57oR3asJFZm8KSpP1%2FvusDR%2BQ9HWeb23V5K3FAxKxa4Wy0d96M4V7tQhnmghoSwkwxeaEwAY6pgF42LbLd8lBIe5DtHna6oyOdiLbXCiGNNTTcQErHwc%2FRNc0i4qxY4JFVJqHavqDPJTbiP%2FEr6ss8i0oq8BHUdz80oUSkWTpUk2AbEpsOJFwRIDXYu7NeEbolQVpwR7IA%2F2dvAQgVNpVTRk%2FkSbZSv8hYlMz655g8x072ohJmDRKyX7Hp1dv%2BGxyqVRO9tDbDyRzco%2FpRcuFuilWAUgGgVPpTEQpDAkS&X-Amz-Signature=7bf9be8c29a0a5fb0a95d1c335c8c8226b5b91107b858e66c41cf387e2d531a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEKSZC7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlDAiNI67FU7EGzPkqY6mN3PV%2BXls5iu85N2Xng%2B6fAiBUXqNUy%2BsyjF9aB%2FXACr%2FDYBu5bQ%2BN0AS4sXbxJdpsIyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFWdo6JjBxsb5V48bKtwDPwViqDoRC9c8yc9WaOPe6EAm2PpRyVxQraCvwBt2IRRVQjcs%2FI3fQQKc5WHSE77qViGV1c8K0atiEsL%2BRikKssA43iu%2FwDl4LO9ZjuuPOErQ79AQkT%2FyVjywiHk5bvNvZ2gx7FUbiQlwaCAhdOayUmR%2FD2uHYusYeueBBylngnE6Lp7QgqQZe5Ml8Kqs7mGj529irNG3bTfBKQNTwnNL1AKmqHWJ5vJTRy1wTwiKr%2B1SeihEJA1P4BhQti6ItEHGRc3KF3wGIRCXAvJLkLFi%2BnmYosv74lUd33Fuv%2B5AKvoPDm5KPwDJLbByF%2FEnjPVMnEswWGIPX6UYteVVf2Z%2FOJsFXcsRzw0hVZJHKTDiDc5Sg0QRUbyWaz47gDTK5GDq9Fp3vdo9PQzWMDmZBmu%2BpPvaNlZOIrfVGb%2FEE6ccaHOJQ99jf46a%2Fgy4Y%2FyAH2mmqEtmIYxO3o896f8W207xkrh0FJHHujlYX66rAdilWjL553LOVUuFcY6H%2FfI2NLTexeiUwU9kosPyWJopw6tm0cWwBZi%2F8rtogI6dWiE%2FrQNierl5c%2BXobyR20nj57oR3asJFZm8KSpP1%2FvusDR%2BQ9HWeb23V5K3FAxKxa4Wy0d96M4V7tQhnmghoSwkwxeaEwAY6pgF42LbLd8lBIe5DtHna6oyOdiLbXCiGNNTTcQErHwc%2FRNc0i4qxY4JFVJqHavqDPJTbiP%2FEr6ss8i0oq8BHUdz80oUSkWTpUk2AbEpsOJFwRIDXYu7NeEbolQVpwR7IA%2F2dvAQgVNpVTRk%2FkSbZSv8hYlMz655g8x072ohJmDRKyX7Hp1dv%2BGxyqVRO9tDbDyRzco%2FpRcuFuilWAUgGgVPpTEQpDAkS&X-Amz-Signature=9f14f5ff37606fc38067742b6f5f9933afbbd18f2b4fef639308d53b50472df9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEKSZC7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlDAiNI67FU7EGzPkqY6mN3PV%2BXls5iu85N2Xng%2B6fAiBUXqNUy%2BsyjF9aB%2FXACr%2FDYBu5bQ%2BN0AS4sXbxJdpsIyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFWdo6JjBxsb5V48bKtwDPwViqDoRC9c8yc9WaOPe6EAm2PpRyVxQraCvwBt2IRRVQjcs%2FI3fQQKc5WHSE77qViGV1c8K0atiEsL%2BRikKssA43iu%2FwDl4LO9ZjuuPOErQ79AQkT%2FyVjywiHk5bvNvZ2gx7FUbiQlwaCAhdOayUmR%2FD2uHYusYeueBBylngnE6Lp7QgqQZe5Ml8Kqs7mGj529irNG3bTfBKQNTwnNL1AKmqHWJ5vJTRy1wTwiKr%2B1SeihEJA1P4BhQti6ItEHGRc3KF3wGIRCXAvJLkLFi%2BnmYosv74lUd33Fuv%2B5AKvoPDm5KPwDJLbByF%2FEnjPVMnEswWGIPX6UYteVVf2Z%2FOJsFXcsRzw0hVZJHKTDiDc5Sg0QRUbyWaz47gDTK5GDq9Fp3vdo9PQzWMDmZBmu%2BpPvaNlZOIrfVGb%2FEE6ccaHOJQ99jf46a%2Fgy4Y%2FyAH2mmqEtmIYxO3o896f8W207xkrh0FJHHujlYX66rAdilWjL553LOVUuFcY6H%2FfI2NLTexeiUwU9kosPyWJopw6tm0cWwBZi%2F8rtogI6dWiE%2FrQNierl5c%2BXobyR20nj57oR3asJFZm8KSpP1%2FvusDR%2BQ9HWeb23V5K3FAxKxa4Wy0d96M4V7tQhnmghoSwkwxeaEwAY6pgF42LbLd8lBIe5DtHna6oyOdiLbXCiGNNTTcQErHwc%2FRNc0i4qxY4JFVJqHavqDPJTbiP%2FEr6ss8i0oq8BHUdz80oUSkWTpUk2AbEpsOJFwRIDXYu7NeEbolQVpwR7IA%2F2dvAQgVNpVTRk%2FkSbZSv8hYlMz655g8x072ohJmDRKyX7Hp1dv%2BGxyqVRO9tDbDyRzco%2FpRcuFuilWAUgGgVPpTEQpDAkS&X-Amz-Signature=2873bfda5168f3154e79b4da64503904de27b2c9044dcbfb96c8d4b6a6369e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEKSZC7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlDAiNI67FU7EGzPkqY6mN3PV%2BXls5iu85N2Xng%2B6fAiBUXqNUy%2BsyjF9aB%2FXACr%2FDYBu5bQ%2BN0AS4sXbxJdpsIyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFWdo6JjBxsb5V48bKtwDPwViqDoRC9c8yc9WaOPe6EAm2PpRyVxQraCvwBt2IRRVQjcs%2FI3fQQKc5WHSE77qViGV1c8K0atiEsL%2BRikKssA43iu%2FwDl4LO9ZjuuPOErQ79AQkT%2FyVjywiHk5bvNvZ2gx7FUbiQlwaCAhdOayUmR%2FD2uHYusYeueBBylngnE6Lp7QgqQZe5Ml8Kqs7mGj529irNG3bTfBKQNTwnNL1AKmqHWJ5vJTRy1wTwiKr%2B1SeihEJA1P4BhQti6ItEHGRc3KF3wGIRCXAvJLkLFi%2BnmYosv74lUd33Fuv%2B5AKvoPDm5KPwDJLbByF%2FEnjPVMnEswWGIPX6UYteVVf2Z%2FOJsFXcsRzw0hVZJHKTDiDc5Sg0QRUbyWaz47gDTK5GDq9Fp3vdo9PQzWMDmZBmu%2BpPvaNlZOIrfVGb%2FEE6ccaHOJQ99jf46a%2Fgy4Y%2FyAH2mmqEtmIYxO3o896f8W207xkrh0FJHHujlYX66rAdilWjL553LOVUuFcY6H%2FfI2NLTexeiUwU9kosPyWJopw6tm0cWwBZi%2F8rtogI6dWiE%2FrQNierl5c%2BXobyR20nj57oR3asJFZm8KSpP1%2FvusDR%2BQ9HWeb23V5K3FAxKxa4Wy0d96M4V7tQhnmghoSwkwxeaEwAY6pgF42LbLd8lBIe5DtHna6oyOdiLbXCiGNNTTcQErHwc%2FRNc0i4qxY4JFVJqHavqDPJTbiP%2FEr6ss8i0oq8BHUdz80oUSkWTpUk2AbEpsOJFwRIDXYu7NeEbolQVpwR7IA%2F2dvAQgVNpVTRk%2FkSbZSv8hYlMz655g8x072ohJmDRKyX7Hp1dv%2BGxyqVRO9tDbDyRzco%2FpRcuFuilWAUgGgVPpTEQpDAkS&X-Amz-Signature=693b53f377de93eaf82da1ce6b1b2df3fe8bab4c34ce40ee0e363bcbd2b20a36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEKSZC7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlDAiNI67FU7EGzPkqY6mN3PV%2BXls5iu85N2Xng%2B6fAiBUXqNUy%2BsyjF9aB%2FXACr%2FDYBu5bQ%2BN0AS4sXbxJdpsIyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFWdo6JjBxsb5V48bKtwDPwViqDoRC9c8yc9WaOPe6EAm2PpRyVxQraCvwBt2IRRVQjcs%2FI3fQQKc5WHSE77qViGV1c8K0atiEsL%2BRikKssA43iu%2FwDl4LO9ZjuuPOErQ79AQkT%2FyVjywiHk5bvNvZ2gx7FUbiQlwaCAhdOayUmR%2FD2uHYusYeueBBylngnE6Lp7QgqQZe5Ml8Kqs7mGj529irNG3bTfBKQNTwnNL1AKmqHWJ5vJTRy1wTwiKr%2B1SeihEJA1P4BhQti6ItEHGRc3KF3wGIRCXAvJLkLFi%2BnmYosv74lUd33Fuv%2B5AKvoPDm5KPwDJLbByF%2FEnjPVMnEswWGIPX6UYteVVf2Z%2FOJsFXcsRzw0hVZJHKTDiDc5Sg0QRUbyWaz47gDTK5GDq9Fp3vdo9PQzWMDmZBmu%2BpPvaNlZOIrfVGb%2FEE6ccaHOJQ99jf46a%2Fgy4Y%2FyAH2mmqEtmIYxO3o896f8W207xkrh0FJHHujlYX66rAdilWjL553LOVUuFcY6H%2FfI2NLTexeiUwU9kosPyWJopw6tm0cWwBZi%2F8rtogI6dWiE%2FrQNierl5c%2BXobyR20nj57oR3asJFZm8KSpP1%2FvusDR%2BQ9HWeb23V5K3FAxKxa4Wy0d96M4V7tQhnmghoSwkwxeaEwAY6pgF42LbLd8lBIe5DtHna6oyOdiLbXCiGNNTTcQErHwc%2FRNc0i4qxY4JFVJqHavqDPJTbiP%2FEr6ss8i0oq8BHUdz80oUSkWTpUk2AbEpsOJFwRIDXYu7NeEbolQVpwR7IA%2F2dvAQgVNpVTRk%2FkSbZSv8hYlMz655g8x072ohJmDRKyX7Hp1dv%2BGxyqVRO9tDbDyRzco%2FpRcuFuilWAUgGgVPpTEQpDAkS&X-Amz-Signature=720410a8a605dfc4d85be5e267ae9ecd9972376c49a4bf7cff32cf88b6a288b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEKSZC7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlDAiNI67FU7EGzPkqY6mN3PV%2BXls5iu85N2Xng%2B6fAiBUXqNUy%2BsyjF9aB%2FXACr%2FDYBu5bQ%2BN0AS4sXbxJdpsIyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFWdo6JjBxsb5V48bKtwDPwViqDoRC9c8yc9WaOPe6EAm2PpRyVxQraCvwBt2IRRVQjcs%2FI3fQQKc5WHSE77qViGV1c8K0atiEsL%2BRikKssA43iu%2FwDl4LO9ZjuuPOErQ79AQkT%2FyVjywiHk5bvNvZ2gx7FUbiQlwaCAhdOayUmR%2FD2uHYusYeueBBylngnE6Lp7QgqQZe5Ml8Kqs7mGj529irNG3bTfBKQNTwnNL1AKmqHWJ5vJTRy1wTwiKr%2B1SeihEJA1P4BhQti6ItEHGRc3KF3wGIRCXAvJLkLFi%2BnmYosv74lUd33Fuv%2B5AKvoPDm5KPwDJLbByF%2FEnjPVMnEswWGIPX6UYteVVf2Z%2FOJsFXcsRzw0hVZJHKTDiDc5Sg0QRUbyWaz47gDTK5GDq9Fp3vdo9PQzWMDmZBmu%2BpPvaNlZOIrfVGb%2FEE6ccaHOJQ99jf46a%2Fgy4Y%2FyAH2mmqEtmIYxO3o896f8W207xkrh0FJHHujlYX66rAdilWjL553LOVUuFcY6H%2FfI2NLTexeiUwU9kosPyWJopw6tm0cWwBZi%2F8rtogI6dWiE%2FrQNierl5c%2BXobyR20nj57oR3asJFZm8KSpP1%2FvusDR%2BQ9HWeb23V5K3FAxKxa4Wy0d96M4V7tQhnmghoSwkwxeaEwAY6pgF42LbLd8lBIe5DtHna6oyOdiLbXCiGNNTTcQErHwc%2FRNc0i4qxY4JFVJqHavqDPJTbiP%2FEr6ss8i0oq8BHUdz80oUSkWTpUk2AbEpsOJFwRIDXYu7NeEbolQVpwR7IA%2F2dvAQgVNpVTRk%2FkSbZSv8hYlMz655g8x072ohJmDRKyX7Hp1dv%2BGxyqVRO9tDbDyRzco%2FpRcuFuilWAUgGgVPpTEQpDAkS&X-Amz-Signature=f90c030046b52d3ba6d0c157ca0e83f08fb9c602c5d7482e08e7296e2b3d0ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEKSZC7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlDAiNI67FU7EGzPkqY6mN3PV%2BXls5iu85N2Xng%2B6fAiBUXqNUy%2BsyjF9aB%2FXACr%2FDYBu5bQ%2BN0AS4sXbxJdpsIyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFWdo6JjBxsb5V48bKtwDPwViqDoRC9c8yc9WaOPe6EAm2PpRyVxQraCvwBt2IRRVQjcs%2FI3fQQKc5WHSE77qViGV1c8K0atiEsL%2BRikKssA43iu%2FwDl4LO9ZjuuPOErQ79AQkT%2FyVjywiHk5bvNvZ2gx7FUbiQlwaCAhdOayUmR%2FD2uHYusYeueBBylngnE6Lp7QgqQZe5Ml8Kqs7mGj529irNG3bTfBKQNTwnNL1AKmqHWJ5vJTRy1wTwiKr%2B1SeihEJA1P4BhQti6ItEHGRc3KF3wGIRCXAvJLkLFi%2BnmYosv74lUd33Fuv%2B5AKvoPDm5KPwDJLbByF%2FEnjPVMnEswWGIPX6UYteVVf2Z%2FOJsFXcsRzw0hVZJHKTDiDc5Sg0QRUbyWaz47gDTK5GDq9Fp3vdo9PQzWMDmZBmu%2BpPvaNlZOIrfVGb%2FEE6ccaHOJQ99jf46a%2Fgy4Y%2FyAH2mmqEtmIYxO3o896f8W207xkrh0FJHHujlYX66rAdilWjL553LOVUuFcY6H%2FfI2NLTexeiUwU9kosPyWJopw6tm0cWwBZi%2F8rtogI6dWiE%2FrQNierl5c%2BXobyR20nj57oR3asJFZm8KSpP1%2FvusDR%2BQ9HWeb23V5K3FAxKxa4Wy0d96M4V7tQhnmghoSwkwxeaEwAY6pgF42LbLd8lBIe5DtHna6oyOdiLbXCiGNNTTcQErHwc%2FRNc0i4qxY4JFVJqHavqDPJTbiP%2FEr6ss8i0oq8BHUdz80oUSkWTpUk2AbEpsOJFwRIDXYu7NeEbolQVpwR7IA%2F2dvAQgVNpVTRk%2FkSbZSv8hYlMz655g8x072ohJmDRKyX7Hp1dv%2BGxyqVRO9tDbDyRzco%2FpRcuFuilWAUgGgVPpTEQpDAkS&X-Amz-Signature=2cd6e406831c7604c32b4380be78b76324979aa6869977276bbf66bd2be7215e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
