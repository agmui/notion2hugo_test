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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBWGRCY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBywb7oebaTb5rNCji2XBD1qktAs6yW%2FUNDdl8Lfc6rQAiB6F25io0Hoe0vq3OwUWtbYYPEytwr0TcscX7%2BnGex0EyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaOORlO2WGZfKUw5nKtwD59dFlsy%2BBCn1OYyRY5zp23oTsPTm8VOF8Tg0SGc3QBtFhpqrFX6qkX4LR%2Bn2Jmv9Of8fx09vuxYtotP75hiROxHV3LHyaSXdwRdsP0QH6llfarKkE9%2BTvyo06FT4Jh0lZyQcLCQYS6fZvgqUWvk%2BSDDRXDIDpfoCh5X3pnMgknTv1f3nE9niYEzM76cTwo4TR1T2KCGiXYTzIGxe4ng5iTipl%2BVgnHJRX0aJsM4jUikLRjAq4sb771KDG4vaCGyn77%2FA7bMp%2FcCPeAy8E9esZwa%2FcIaImuIyICwyLXl%2Fh8q23iDCZjHwt%2FqUnzdqUKemWl%2FpGKN3be2wXyKSXqarAha2N8sruoIrY76Qwz7oSdq8J9tUbaCPVr3S2L8MKdOWBx2%2Bp5%2BwUAMgxH7zhHkKEs07LfseB5RrarEXBilDuLsJqaLKbDIc9Jz8SyQr1Fa7%2B0hHDEgYR3RS6gjJjfQfK0u97gHvnfr4ZsMnr00Kf%2FJjV3vVqUn9bRQ5tpL4nhsz%2B%2Br3uDurfwao6rdOGM4AoFR%2Fte%2FFldv16JPRczaBD3mJMkIsXT9mFQq4MIAoi8CTYZqF4dnBCskJJB7z5d33oeDVj5DDCChXKoARvJURKtLBcEij7BulSMS0y%2BEw0bvjvQY6pgG%2BG0cHr%2Fji8kE2fbNNeXY8C4wmTNj3xiOY51YQKI5PK%2BUvsAuHHj%2BdIigKmR9qebarpqKGYHjy0xLxQkqX3rMCEGf6ZUaSkclICHR10gdY6YKiwqid%2FykcL4%2FOXRF9encvKv3XisxayPYhksndTDzbw4m%2FgaRWk5lR1xnstGt05PQCjdrl5DWwY64%2Ftt8DL7AP9EspyiTc7W13QqxNkSJ1o8B1Qh%2Bx&X-Amz-Signature=66e5cae5c2b22fd4a7c753745652db15ec7cefd52838d750759d62fba24b41a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBWGRCY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBywb7oebaTb5rNCji2XBD1qktAs6yW%2FUNDdl8Lfc6rQAiB6F25io0Hoe0vq3OwUWtbYYPEytwr0TcscX7%2BnGex0EyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaOORlO2WGZfKUw5nKtwD59dFlsy%2BBCn1OYyRY5zp23oTsPTm8VOF8Tg0SGc3QBtFhpqrFX6qkX4LR%2Bn2Jmv9Of8fx09vuxYtotP75hiROxHV3LHyaSXdwRdsP0QH6llfarKkE9%2BTvyo06FT4Jh0lZyQcLCQYS6fZvgqUWvk%2BSDDRXDIDpfoCh5X3pnMgknTv1f3nE9niYEzM76cTwo4TR1T2KCGiXYTzIGxe4ng5iTipl%2BVgnHJRX0aJsM4jUikLRjAq4sb771KDG4vaCGyn77%2FA7bMp%2FcCPeAy8E9esZwa%2FcIaImuIyICwyLXl%2Fh8q23iDCZjHwt%2FqUnzdqUKemWl%2FpGKN3be2wXyKSXqarAha2N8sruoIrY76Qwz7oSdq8J9tUbaCPVr3S2L8MKdOWBx2%2Bp5%2BwUAMgxH7zhHkKEs07LfseB5RrarEXBilDuLsJqaLKbDIc9Jz8SyQr1Fa7%2B0hHDEgYR3RS6gjJjfQfK0u97gHvnfr4ZsMnr00Kf%2FJjV3vVqUn9bRQ5tpL4nhsz%2B%2Br3uDurfwao6rdOGM4AoFR%2Fte%2FFldv16JPRczaBD3mJMkIsXT9mFQq4MIAoi8CTYZqF4dnBCskJJB7z5d33oeDVj5DDCChXKoARvJURKtLBcEij7BulSMS0y%2BEw0bvjvQY6pgG%2BG0cHr%2Fji8kE2fbNNeXY8C4wmTNj3xiOY51YQKI5PK%2BUvsAuHHj%2BdIigKmR9qebarpqKGYHjy0xLxQkqX3rMCEGf6ZUaSkclICHR10gdY6YKiwqid%2FykcL4%2FOXRF9encvKv3XisxayPYhksndTDzbw4m%2FgaRWk5lR1xnstGt05PQCjdrl5DWwY64%2Ftt8DL7AP9EspyiTc7W13QqxNkSJ1o8B1Qh%2Bx&X-Amz-Signature=a55f2dd7284b7f5d87f835aa3c122493a252a34ee169ee753ebcacdb1173ff1d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBWGRCY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBywb7oebaTb5rNCji2XBD1qktAs6yW%2FUNDdl8Lfc6rQAiB6F25io0Hoe0vq3OwUWtbYYPEytwr0TcscX7%2BnGex0EyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaOORlO2WGZfKUw5nKtwD59dFlsy%2BBCn1OYyRY5zp23oTsPTm8VOF8Tg0SGc3QBtFhpqrFX6qkX4LR%2Bn2Jmv9Of8fx09vuxYtotP75hiROxHV3LHyaSXdwRdsP0QH6llfarKkE9%2BTvyo06FT4Jh0lZyQcLCQYS6fZvgqUWvk%2BSDDRXDIDpfoCh5X3pnMgknTv1f3nE9niYEzM76cTwo4TR1T2KCGiXYTzIGxe4ng5iTipl%2BVgnHJRX0aJsM4jUikLRjAq4sb771KDG4vaCGyn77%2FA7bMp%2FcCPeAy8E9esZwa%2FcIaImuIyICwyLXl%2Fh8q23iDCZjHwt%2FqUnzdqUKemWl%2FpGKN3be2wXyKSXqarAha2N8sruoIrY76Qwz7oSdq8J9tUbaCPVr3S2L8MKdOWBx2%2Bp5%2BwUAMgxH7zhHkKEs07LfseB5RrarEXBilDuLsJqaLKbDIc9Jz8SyQr1Fa7%2B0hHDEgYR3RS6gjJjfQfK0u97gHvnfr4ZsMnr00Kf%2FJjV3vVqUn9bRQ5tpL4nhsz%2B%2Br3uDurfwao6rdOGM4AoFR%2Fte%2FFldv16JPRczaBD3mJMkIsXT9mFQq4MIAoi8CTYZqF4dnBCskJJB7z5d33oeDVj5DDCChXKoARvJURKtLBcEij7BulSMS0y%2BEw0bvjvQY6pgG%2BG0cHr%2Fji8kE2fbNNeXY8C4wmTNj3xiOY51YQKI5PK%2BUvsAuHHj%2BdIigKmR9qebarpqKGYHjy0xLxQkqX3rMCEGf6ZUaSkclICHR10gdY6YKiwqid%2FykcL4%2FOXRF9encvKv3XisxayPYhksndTDzbw4m%2FgaRWk5lR1xnstGt05PQCjdrl5DWwY64%2Ftt8DL7AP9EspyiTc7W13QqxNkSJ1o8B1Qh%2Bx&X-Amz-Signature=7aff02597c1dd0e3e7e45f7ceb18cae615d65fdb455f391d3b981458f9ab71d6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBWGRCY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBywb7oebaTb5rNCji2XBD1qktAs6yW%2FUNDdl8Lfc6rQAiB6F25io0Hoe0vq3OwUWtbYYPEytwr0TcscX7%2BnGex0EyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaOORlO2WGZfKUw5nKtwD59dFlsy%2BBCn1OYyRY5zp23oTsPTm8VOF8Tg0SGc3QBtFhpqrFX6qkX4LR%2Bn2Jmv9Of8fx09vuxYtotP75hiROxHV3LHyaSXdwRdsP0QH6llfarKkE9%2BTvyo06FT4Jh0lZyQcLCQYS6fZvgqUWvk%2BSDDRXDIDpfoCh5X3pnMgknTv1f3nE9niYEzM76cTwo4TR1T2KCGiXYTzIGxe4ng5iTipl%2BVgnHJRX0aJsM4jUikLRjAq4sb771KDG4vaCGyn77%2FA7bMp%2FcCPeAy8E9esZwa%2FcIaImuIyICwyLXl%2Fh8q23iDCZjHwt%2FqUnzdqUKemWl%2FpGKN3be2wXyKSXqarAha2N8sruoIrY76Qwz7oSdq8J9tUbaCPVr3S2L8MKdOWBx2%2Bp5%2BwUAMgxH7zhHkKEs07LfseB5RrarEXBilDuLsJqaLKbDIc9Jz8SyQr1Fa7%2B0hHDEgYR3RS6gjJjfQfK0u97gHvnfr4ZsMnr00Kf%2FJjV3vVqUn9bRQ5tpL4nhsz%2B%2Br3uDurfwao6rdOGM4AoFR%2Fte%2FFldv16JPRczaBD3mJMkIsXT9mFQq4MIAoi8CTYZqF4dnBCskJJB7z5d33oeDVj5DDCChXKoARvJURKtLBcEij7BulSMS0y%2BEw0bvjvQY6pgG%2BG0cHr%2Fji8kE2fbNNeXY8C4wmTNj3xiOY51YQKI5PK%2BUvsAuHHj%2BdIigKmR9qebarpqKGYHjy0xLxQkqX3rMCEGf6ZUaSkclICHR10gdY6YKiwqid%2FykcL4%2FOXRF9encvKv3XisxayPYhksndTDzbw4m%2FgaRWk5lR1xnstGt05PQCjdrl5DWwY64%2Ftt8DL7AP9EspyiTc7W13QqxNkSJ1o8B1Qh%2Bx&X-Amz-Signature=0ffbf74a07c7ff0b4cef1302bc6bbc5387f17e0ce1bbd4ea7d395bebdf8643e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBWGRCY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBywb7oebaTb5rNCji2XBD1qktAs6yW%2FUNDdl8Lfc6rQAiB6F25io0Hoe0vq3OwUWtbYYPEytwr0TcscX7%2BnGex0EyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaOORlO2WGZfKUw5nKtwD59dFlsy%2BBCn1OYyRY5zp23oTsPTm8VOF8Tg0SGc3QBtFhpqrFX6qkX4LR%2Bn2Jmv9Of8fx09vuxYtotP75hiROxHV3LHyaSXdwRdsP0QH6llfarKkE9%2BTvyo06FT4Jh0lZyQcLCQYS6fZvgqUWvk%2BSDDRXDIDpfoCh5X3pnMgknTv1f3nE9niYEzM76cTwo4TR1T2KCGiXYTzIGxe4ng5iTipl%2BVgnHJRX0aJsM4jUikLRjAq4sb771KDG4vaCGyn77%2FA7bMp%2FcCPeAy8E9esZwa%2FcIaImuIyICwyLXl%2Fh8q23iDCZjHwt%2FqUnzdqUKemWl%2FpGKN3be2wXyKSXqarAha2N8sruoIrY76Qwz7oSdq8J9tUbaCPVr3S2L8MKdOWBx2%2Bp5%2BwUAMgxH7zhHkKEs07LfseB5RrarEXBilDuLsJqaLKbDIc9Jz8SyQr1Fa7%2B0hHDEgYR3RS6gjJjfQfK0u97gHvnfr4ZsMnr00Kf%2FJjV3vVqUn9bRQ5tpL4nhsz%2B%2Br3uDurfwao6rdOGM4AoFR%2Fte%2FFldv16JPRczaBD3mJMkIsXT9mFQq4MIAoi8CTYZqF4dnBCskJJB7z5d33oeDVj5DDCChXKoARvJURKtLBcEij7BulSMS0y%2BEw0bvjvQY6pgG%2BG0cHr%2Fji8kE2fbNNeXY8C4wmTNj3xiOY51YQKI5PK%2BUvsAuHHj%2BdIigKmR9qebarpqKGYHjy0xLxQkqX3rMCEGf6ZUaSkclICHR10gdY6YKiwqid%2FykcL4%2FOXRF9encvKv3XisxayPYhksndTDzbw4m%2FgaRWk5lR1xnstGt05PQCjdrl5DWwY64%2Ftt8DL7AP9EspyiTc7W13QqxNkSJ1o8B1Qh%2Bx&X-Amz-Signature=ebc5085a7aa860c537648731fddd7769e73a4bd81bc932ce43e6ff0ca3b64632&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBWGRCY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBywb7oebaTb5rNCji2XBD1qktAs6yW%2FUNDdl8Lfc6rQAiB6F25io0Hoe0vq3OwUWtbYYPEytwr0TcscX7%2BnGex0EyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaOORlO2WGZfKUw5nKtwD59dFlsy%2BBCn1OYyRY5zp23oTsPTm8VOF8Tg0SGc3QBtFhpqrFX6qkX4LR%2Bn2Jmv9Of8fx09vuxYtotP75hiROxHV3LHyaSXdwRdsP0QH6llfarKkE9%2BTvyo06FT4Jh0lZyQcLCQYS6fZvgqUWvk%2BSDDRXDIDpfoCh5X3pnMgknTv1f3nE9niYEzM76cTwo4TR1T2KCGiXYTzIGxe4ng5iTipl%2BVgnHJRX0aJsM4jUikLRjAq4sb771KDG4vaCGyn77%2FA7bMp%2FcCPeAy8E9esZwa%2FcIaImuIyICwyLXl%2Fh8q23iDCZjHwt%2FqUnzdqUKemWl%2FpGKN3be2wXyKSXqarAha2N8sruoIrY76Qwz7oSdq8J9tUbaCPVr3S2L8MKdOWBx2%2Bp5%2BwUAMgxH7zhHkKEs07LfseB5RrarEXBilDuLsJqaLKbDIc9Jz8SyQr1Fa7%2B0hHDEgYR3RS6gjJjfQfK0u97gHvnfr4ZsMnr00Kf%2FJjV3vVqUn9bRQ5tpL4nhsz%2B%2Br3uDurfwao6rdOGM4AoFR%2Fte%2FFldv16JPRczaBD3mJMkIsXT9mFQq4MIAoi8CTYZqF4dnBCskJJB7z5d33oeDVj5DDCChXKoARvJURKtLBcEij7BulSMS0y%2BEw0bvjvQY6pgG%2BG0cHr%2Fji8kE2fbNNeXY8C4wmTNj3xiOY51YQKI5PK%2BUvsAuHHj%2BdIigKmR9qebarpqKGYHjy0xLxQkqX3rMCEGf6ZUaSkclICHR10gdY6YKiwqid%2FykcL4%2FOXRF9encvKv3XisxayPYhksndTDzbw4m%2FgaRWk5lR1xnstGt05PQCjdrl5DWwY64%2Ftt8DL7AP9EspyiTc7W13QqxNkSJ1o8B1Qh%2Bx&X-Amz-Signature=bcf2851fa144e356c1ec1ea3a161f1f9c98310856e26919011b26b3a7186a6d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBWGRCY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBywb7oebaTb5rNCji2XBD1qktAs6yW%2FUNDdl8Lfc6rQAiB6F25io0Hoe0vq3OwUWtbYYPEytwr0TcscX7%2BnGex0EyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaOORlO2WGZfKUw5nKtwD59dFlsy%2BBCn1OYyRY5zp23oTsPTm8VOF8Tg0SGc3QBtFhpqrFX6qkX4LR%2Bn2Jmv9Of8fx09vuxYtotP75hiROxHV3LHyaSXdwRdsP0QH6llfarKkE9%2BTvyo06FT4Jh0lZyQcLCQYS6fZvgqUWvk%2BSDDRXDIDpfoCh5X3pnMgknTv1f3nE9niYEzM76cTwo4TR1T2KCGiXYTzIGxe4ng5iTipl%2BVgnHJRX0aJsM4jUikLRjAq4sb771KDG4vaCGyn77%2FA7bMp%2FcCPeAy8E9esZwa%2FcIaImuIyICwyLXl%2Fh8q23iDCZjHwt%2FqUnzdqUKemWl%2FpGKN3be2wXyKSXqarAha2N8sruoIrY76Qwz7oSdq8J9tUbaCPVr3S2L8MKdOWBx2%2Bp5%2BwUAMgxH7zhHkKEs07LfseB5RrarEXBilDuLsJqaLKbDIc9Jz8SyQr1Fa7%2B0hHDEgYR3RS6gjJjfQfK0u97gHvnfr4ZsMnr00Kf%2FJjV3vVqUn9bRQ5tpL4nhsz%2B%2Br3uDurfwao6rdOGM4AoFR%2Fte%2FFldv16JPRczaBD3mJMkIsXT9mFQq4MIAoi8CTYZqF4dnBCskJJB7z5d33oeDVj5DDCChXKoARvJURKtLBcEij7BulSMS0y%2BEw0bvjvQY6pgG%2BG0cHr%2Fji8kE2fbNNeXY8C4wmTNj3xiOY51YQKI5PK%2BUvsAuHHj%2BdIigKmR9qebarpqKGYHjy0xLxQkqX3rMCEGf6ZUaSkclICHR10gdY6YKiwqid%2FykcL4%2FOXRF9encvKv3XisxayPYhksndTDzbw4m%2FgaRWk5lR1xnstGt05PQCjdrl5DWwY64%2Ftt8DL7AP9EspyiTc7W13QqxNkSJ1o8B1Qh%2Bx&X-Amz-Signature=b79ca942c1aa4f8b83808db9e61ca51e9de911c5508a91198f0ff82585b46710&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBWGRCY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBywb7oebaTb5rNCji2XBD1qktAs6yW%2FUNDdl8Lfc6rQAiB6F25io0Hoe0vq3OwUWtbYYPEytwr0TcscX7%2BnGex0EyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaOORlO2WGZfKUw5nKtwD59dFlsy%2BBCn1OYyRY5zp23oTsPTm8VOF8Tg0SGc3QBtFhpqrFX6qkX4LR%2Bn2Jmv9Of8fx09vuxYtotP75hiROxHV3LHyaSXdwRdsP0QH6llfarKkE9%2BTvyo06FT4Jh0lZyQcLCQYS6fZvgqUWvk%2BSDDRXDIDpfoCh5X3pnMgknTv1f3nE9niYEzM76cTwo4TR1T2KCGiXYTzIGxe4ng5iTipl%2BVgnHJRX0aJsM4jUikLRjAq4sb771KDG4vaCGyn77%2FA7bMp%2FcCPeAy8E9esZwa%2FcIaImuIyICwyLXl%2Fh8q23iDCZjHwt%2FqUnzdqUKemWl%2FpGKN3be2wXyKSXqarAha2N8sruoIrY76Qwz7oSdq8J9tUbaCPVr3S2L8MKdOWBx2%2Bp5%2BwUAMgxH7zhHkKEs07LfseB5RrarEXBilDuLsJqaLKbDIc9Jz8SyQr1Fa7%2B0hHDEgYR3RS6gjJjfQfK0u97gHvnfr4ZsMnr00Kf%2FJjV3vVqUn9bRQ5tpL4nhsz%2B%2Br3uDurfwao6rdOGM4AoFR%2Fte%2FFldv16JPRczaBD3mJMkIsXT9mFQq4MIAoi8CTYZqF4dnBCskJJB7z5d33oeDVj5DDCChXKoARvJURKtLBcEij7BulSMS0y%2BEw0bvjvQY6pgG%2BG0cHr%2Fji8kE2fbNNeXY8C4wmTNj3xiOY51YQKI5PK%2BUvsAuHHj%2BdIigKmR9qebarpqKGYHjy0xLxQkqX3rMCEGf6ZUaSkclICHR10gdY6YKiwqid%2FykcL4%2FOXRF9encvKv3XisxayPYhksndTDzbw4m%2FgaRWk5lR1xnstGt05PQCjdrl5DWwY64%2Ftt8DL7AP9EspyiTc7W13QqxNkSJ1o8B1Qh%2Bx&X-Amz-Signature=d7eb0af455dc83d259620eff0e9507e8186a554e4eaaaea64fa67737d48e03ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
