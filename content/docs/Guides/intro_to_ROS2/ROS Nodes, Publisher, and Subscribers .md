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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBU6QOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFxjfKqKHALbwYhP5VZtRNWT2Ggd%2BCZz4x9NW6ibc6YbAiB9tCYjwdZTavIMT4EJdBKASYGbrOQCQSwGgTBOoNSBcSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EQmKU0iYP1Gs19aKtwDW5%2FQwCS9bxAfZX2gdxYP%2BQ0VICIj99Nf1XazrbNvLSwxXrGaJvmxlvwqmpRYgWE%2BMBZbGzPARUswNeCXzuyjAOKFzNImM6EsxUMf0xwLbd0Je7Gv%2Bf4xe9vTzM1WL2kCrXJFut4QSQzU7jkhBChI2aLEgB%2BevdzFbKdkA6egFan3ZcmU5n6n9yOpnI5qFJuw%2FNhKp0%2BnCCp2NCbyIrY%2FFtGtYD7Pc3UK%2B6PdbKjP%2BprLum5b%2BLR024bA5gbEQdIITXjy2Bb%2Bj4mwlyrkDAMOEoAJ82G1CZdvZeKZhQ72%2F6d%2FMN%2BTM3qwoV7Td98n5YC6L%2BfvONhOyip3KhqmN%2BLSh6MbeAujldIqd5nvxS7gm49BT2FJX1WRDHDAcQa11SL84q4xRoFnEn%2BQR6o95DPvyRSvTY%2FW%2Bdou0LHpR4%2F5dcGTLZY9XfI4%2FCMpVH7hkYM%2FQ6Hu8qU6YJyqHNJLXZQEPdZjdx2m43UUBMmtHTjvjjn%2BZR0zj1KAkNSKqYVRDJJd8vn8nDTGhhtRBKRApaIUiQNoUVRh3eEX3rU78dahWkSatdhxnI7wBI7qrYWdWWEMRFHPiMbEtcWBwkmIwmlT3%2BX3VBbItLlyFqI3xCuatBIU4cnPCMGOwVR2nUowq7ShxAY6pgHule5bKWK5Dp%2FGBjIHjKACacyQG9%2F6fFXrw5LmQ8yM%2F%2FCkYiqZC3etYk9%2FwsiG9p9gp6Eh6vBS%2BVynuTfrIm6SVhyiGEUBOzYPP9C020Hs%2BkYgjNscqNqMu8yH6ifyDLjQnc%2B1SrUQtTARuuqQyt8Jhs77Y%2B79uiqKOht9saSs7A4tyiDOiGflfoQLXaMns735HiMoWAAHrkKdj0smhAq5ZjgKOGE0&X-Amz-Signature=73b030fc62ec84e55e9c13ffa6a58c66e55b4739971d65db08d6d36822ac1e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBU6QOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFxjfKqKHALbwYhP5VZtRNWT2Ggd%2BCZz4x9NW6ibc6YbAiB9tCYjwdZTavIMT4EJdBKASYGbrOQCQSwGgTBOoNSBcSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EQmKU0iYP1Gs19aKtwDW5%2FQwCS9bxAfZX2gdxYP%2BQ0VICIj99Nf1XazrbNvLSwxXrGaJvmxlvwqmpRYgWE%2BMBZbGzPARUswNeCXzuyjAOKFzNImM6EsxUMf0xwLbd0Je7Gv%2Bf4xe9vTzM1WL2kCrXJFut4QSQzU7jkhBChI2aLEgB%2BevdzFbKdkA6egFan3ZcmU5n6n9yOpnI5qFJuw%2FNhKp0%2BnCCp2NCbyIrY%2FFtGtYD7Pc3UK%2B6PdbKjP%2BprLum5b%2BLR024bA5gbEQdIITXjy2Bb%2Bj4mwlyrkDAMOEoAJ82G1CZdvZeKZhQ72%2F6d%2FMN%2BTM3qwoV7Td98n5YC6L%2BfvONhOyip3KhqmN%2BLSh6MbeAujldIqd5nvxS7gm49BT2FJX1WRDHDAcQa11SL84q4xRoFnEn%2BQR6o95DPvyRSvTY%2FW%2Bdou0LHpR4%2F5dcGTLZY9XfI4%2FCMpVH7hkYM%2FQ6Hu8qU6YJyqHNJLXZQEPdZjdx2m43UUBMmtHTjvjjn%2BZR0zj1KAkNSKqYVRDJJd8vn8nDTGhhtRBKRApaIUiQNoUVRh3eEX3rU78dahWkSatdhxnI7wBI7qrYWdWWEMRFHPiMbEtcWBwkmIwmlT3%2BX3VBbItLlyFqI3xCuatBIU4cnPCMGOwVR2nUowq7ShxAY6pgHule5bKWK5Dp%2FGBjIHjKACacyQG9%2F6fFXrw5LmQ8yM%2F%2FCkYiqZC3etYk9%2FwsiG9p9gp6Eh6vBS%2BVynuTfrIm6SVhyiGEUBOzYPP9C020Hs%2BkYgjNscqNqMu8yH6ifyDLjQnc%2B1SrUQtTARuuqQyt8Jhs77Y%2B79uiqKOht9saSs7A4tyiDOiGflfoQLXaMns735HiMoWAAHrkKdj0smhAq5ZjgKOGE0&X-Amz-Signature=757ae96566f8eff783982ace52f33bda9ef630e0bb86f60ee3638a72fd90614b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBU6QOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFxjfKqKHALbwYhP5VZtRNWT2Ggd%2BCZz4x9NW6ibc6YbAiB9tCYjwdZTavIMT4EJdBKASYGbrOQCQSwGgTBOoNSBcSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EQmKU0iYP1Gs19aKtwDW5%2FQwCS9bxAfZX2gdxYP%2BQ0VICIj99Nf1XazrbNvLSwxXrGaJvmxlvwqmpRYgWE%2BMBZbGzPARUswNeCXzuyjAOKFzNImM6EsxUMf0xwLbd0Je7Gv%2Bf4xe9vTzM1WL2kCrXJFut4QSQzU7jkhBChI2aLEgB%2BevdzFbKdkA6egFan3ZcmU5n6n9yOpnI5qFJuw%2FNhKp0%2BnCCp2NCbyIrY%2FFtGtYD7Pc3UK%2B6PdbKjP%2BprLum5b%2BLR024bA5gbEQdIITXjy2Bb%2Bj4mwlyrkDAMOEoAJ82G1CZdvZeKZhQ72%2F6d%2FMN%2BTM3qwoV7Td98n5YC6L%2BfvONhOyip3KhqmN%2BLSh6MbeAujldIqd5nvxS7gm49BT2FJX1WRDHDAcQa11SL84q4xRoFnEn%2BQR6o95DPvyRSvTY%2FW%2Bdou0LHpR4%2F5dcGTLZY9XfI4%2FCMpVH7hkYM%2FQ6Hu8qU6YJyqHNJLXZQEPdZjdx2m43UUBMmtHTjvjjn%2BZR0zj1KAkNSKqYVRDJJd8vn8nDTGhhtRBKRApaIUiQNoUVRh3eEX3rU78dahWkSatdhxnI7wBI7qrYWdWWEMRFHPiMbEtcWBwkmIwmlT3%2BX3VBbItLlyFqI3xCuatBIU4cnPCMGOwVR2nUowq7ShxAY6pgHule5bKWK5Dp%2FGBjIHjKACacyQG9%2F6fFXrw5LmQ8yM%2F%2FCkYiqZC3etYk9%2FwsiG9p9gp6Eh6vBS%2BVynuTfrIm6SVhyiGEUBOzYPP9C020Hs%2BkYgjNscqNqMu8yH6ifyDLjQnc%2B1SrUQtTARuuqQyt8Jhs77Y%2B79uiqKOht9saSs7A4tyiDOiGflfoQLXaMns735HiMoWAAHrkKdj0smhAq5ZjgKOGE0&X-Amz-Signature=03729da4f91267c9553c18b42b28ebd5ec0c9fe5bf86bd3b6f66252611ac26fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBU6QOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFxjfKqKHALbwYhP5VZtRNWT2Ggd%2BCZz4x9NW6ibc6YbAiB9tCYjwdZTavIMT4EJdBKASYGbrOQCQSwGgTBOoNSBcSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EQmKU0iYP1Gs19aKtwDW5%2FQwCS9bxAfZX2gdxYP%2BQ0VICIj99Nf1XazrbNvLSwxXrGaJvmxlvwqmpRYgWE%2BMBZbGzPARUswNeCXzuyjAOKFzNImM6EsxUMf0xwLbd0Je7Gv%2Bf4xe9vTzM1WL2kCrXJFut4QSQzU7jkhBChI2aLEgB%2BevdzFbKdkA6egFan3ZcmU5n6n9yOpnI5qFJuw%2FNhKp0%2BnCCp2NCbyIrY%2FFtGtYD7Pc3UK%2B6PdbKjP%2BprLum5b%2BLR024bA5gbEQdIITXjy2Bb%2Bj4mwlyrkDAMOEoAJ82G1CZdvZeKZhQ72%2F6d%2FMN%2BTM3qwoV7Td98n5YC6L%2BfvONhOyip3KhqmN%2BLSh6MbeAujldIqd5nvxS7gm49BT2FJX1WRDHDAcQa11SL84q4xRoFnEn%2BQR6o95DPvyRSvTY%2FW%2Bdou0LHpR4%2F5dcGTLZY9XfI4%2FCMpVH7hkYM%2FQ6Hu8qU6YJyqHNJLXZQEPdZjdx2m43UUBMmtHTjvjjn%2BZR0zj1KAkNSKqYVRDJJd8vn8nDTGhhtRBKRApaIUiQNoUVRh3eEX3rU78dahWkSatdhxnI7wBI7qrYWdWWEMRFHPiMbEtcWBwkmIwmlT3%2BX3VBbItLlyFqI3xCuatBIU4cnPCMGOwVR2nUowq7ShxAY6pgHule5bKWK5Dp%2FGBjIHjKACacyQG9%2F6fFXrw5LmQ8yM%2F%2FCkYiqZC3etYk9%2FwsiG9p9gp6Eh6vBS%2BVynuTfrIm6SVhyiGEUBOzYPP9C020Hs%2BkYgjNscqNqMu8yH6ifyDLjQnc%2B1SrUQtTARuuqQyt8Jhs77Y%2B79uiqKOht9saSs7A4tyiDOiGflfoQLXaMns735HiMoWAAHrkKdj0smhAq5ZjgKOGE0&X-Amz-Signature=7e9a1943863c4c14000b4ae48626f21a6e3e5d040707c672d2007306dfe963f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBU6QOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFxjfKqKHALbwYhP5VZtRNWT2Ggd%2BCZz4x9NW6ibc6YbAiB9tCYjwdZTavIMT4EJdBKASYGbrOQCQSwGgTBOoNSBcSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EQmKU0iYP1Gs19aKtwDW5%2FQwCS9bxAfZX2gdxYP%2BQ0VICIj99Nf1XazrbNvLSwxXrGaJvmxlvwqmpRYgWE%2BMBZbGzPARUswNeCXzuyjAOKFzNImM6EsxUMf0xwLbd0Je7Gv%2Bf4xe9vTzM1WL2kCrXJFut4QSQzU7jkhBChI2aLEgB%2BevdzFbKdkA6egFan3ZcmU5n6n9yOpnI5qFJuw%2FNhKp0%2BnCCp2NCbyIrY%2FFtGtYD7Pc3UK%2B6PdbKjP%2BprLum5b%2BLR024bA5gbEQdIITXjy2Bb%2Bj4mwlyrkDAMOEoAJ82G1CZdvZeKZhQ72%2F6d%2FMN%2BTM3qwoV7Td98n5YC6L%2BfvONhOyip3KhqmN%2BLSh6MbeAujldIqd5nvxS7gm49BT2FJX1WRDHDAcQa11SL84q4xRoFnEn%2BQR6o95DPvyRSvTY%2FW%2Bdou0LHpR4%2F5dcGTLZY9XfI4%2FCMpVH7hkYM%2FQ6Hu8qU6YJyqHNJLXZQEPdZjdx2m43UUBMmtHTjvjjn%2BZR0zj1KAkNSKqYVRDJJd8vn8nDTGhhtRBKRApaIUiQNoUVRh3eEX3rU78dahWkSatdhxnI7wBI7qrYWdWWEMRFHPiMbEtcWBwkmIwmlT3%2BX3VBbItLlyFqI3xCuatBIU4cnPCMGOwVR2nUowq7ShxAY6pgHule5bKWK5Dp%2FGBjIHjKACacyQG9%2F6fFXrw5LmQ8yM%2F%2FCkYiqZC3etYk9%2FwsiG9p9gp6Eh6vBS%2BVynuTfrIm6SVhyiGEUBOzYPP9C020Hs%2BkYgjNscqNqMu8yH6ifyDLjQnc%2B1SrUQtTARuuqQyt8Jhs77Y%2B79uiqKOht9saSs7A4tyiDOiGflfoQLXaMns735HiMoWAAHrkKdj0smhAq5ZjgKOGE0&X-Amz-Signature=cb12413ed71ad95e56387b537aed86cd63fdd07c17b74274e02ac335420b6b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBU6QOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFxjfKqKHALbwYhP5VZtRNWT2Ggd%2BCZz4x9NW6ibc6YbAiB9tCYjwdZTavIMT4EJdBKASYGbrOQCQSwGgTBOoNSBcSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EQmKU0iYP1Gs19aKtwDW5%2FQwCS9bxAfZX2gdxYP%2BQ0VICIj99Nf1XazrbNvLSwxXrGaJvmxlvwqmpRYgWE%2BMBZbGzPARUswNeCXzuyjAOKFzNImM6EsxUMf0xwLbd0Je7Gv%2Bf4xe9vTzM1WL2kCrXJFut4QSQzU7jkhBChI2aLEgB%2BevdzFbKdkA6egFan3ZcmU5n6n9yOpnI5qFJuw%2FNhKp0%2BnCCp2NCbyIrY%2FFtGtYD7Pc3UK%2B6PdbKjP%2BprLum5b%2BLR024bA5gbEQdIITXjy2Bb%2Bj4mwlyrkDAMOEoAJ82G1CZdvZeKZhQ72%2F6d%2FMN%2BTM3qwoV7Td98n5YC6L%2BfvONhOyip3KhqmN%2BLSh6MbeAujldIqd5nvxS7gm49BT2FJX1WRDHDAcQa11SL84q4xRoFnEn%2BQR6o95DPvyRSvTY%2FW%2Bdou0LHpR4%2F5dcGTLZY9XfI4%2FCMpVH7hkYM%2FQ6Hu8qU6YJyqHNJLXZQEPdZjdx2m43UUBMmtHTjvjjn%2BZR0zj1KAkNSKqYVRDJJd8vn8nDTGhhtRBKRApaIUiQNoUVRh3eEX3rU78dahWkSatdhxnI7wBI7qrYWdWWEMRFHPiMbEtcWBwkmIwmlT3%2BX3VBbItLlyFqI3xCuatBIU4cnPCMGOwVR2nUowq7ShxAY6pgHule5bKWK5Dp%2FGBjIHjKACacyQG9%2F6fFXrw5LmQ8yM%2F%2FCkYiqZC3etYk9%2FwsiG9p9gp6Eh6vBS%2BVynuTfrIm6SVhyiGEUBOzYPP9C020Hs%2BkYgjNscqNqMu8yH6ifyDLjQnc%2B1SrUQtTARuuqQyt8Jhs77Y%2B79uiqKOht9saSs7A4tyiDOiGflfoQLXaMns735HiMoWAAHrkKdj0smhAq5ZjgKOGE0&X-Amz-Signature=b26b55c395a58b81709a0ee248144f8bca6be792cb42150c6fa4d3b49b438d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBU6QOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFxjfKqKHALbwYhP5VZtRNWT2Ggd%2BCZz4x9NW6ibc6YbAiB9tCYjwdZTavIMT4EJdBKASYGbrOQCQSwGgTBOoNSBcSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EQmKU0iYP1Gs19aKtwDW5%2FQwCS9bxAfZX2gdxYP%2BQ0VICIj99Nf1XazrbNvLSwxXrGaJvmxlvwqmpRYgWE%2BMBZbGzPARUswNeCXzuyjAOKFzNImM6EsxUMf0xwLbd0Je7Gv%2Bf4xe9vTzM1WL2kCrXJFut4QSQzU7jkhBChI2aLEgB%2BevdzFbKdkA6egFan3ZcmU5n6n9yOpnI5qFJuw%2FNhKp0%2BnCCp2NCbyIrY%2FFtGtYD7Pc3UK%2B6PdbKjP%2BprLum5b%2BLR024bA5gbEQdIITXjy2Bb%2Bj4mwlyrkDAMOEoAJ82G1CZdvZeKZhQ72%2F6d%2FMN%2BTM3qwoV7Td98n5YC6L%2BfvONhOyip3KhqmN%2BLSh6MbeAujldIqd5nvxS7gm49BT2FJX1WRDHDAcQa11SL84q4xRoFnEn%2BQR6o95DPvyRSvTY%2FW%2Bdou0LHpR4%2F5dcGTLZY9XfI4%2FCMpVH7hkYM%2FQ6Hu8qU6YJyqHNJLXZQEPdZjdx2m43UUBMmtHTjvjjn%2BZR0zj1KAkNSKqYVRDJJd8vn8nDTGhhtRBKRApaIUiQNoUVRh3eEX3rU78dahWkSatdhxnI7wBI7qrYWdWWEMRFHPiMbEtcWBwkmIwmlT3%2BX3VBbItLlyFqI3xCuatBIU4cnPCMGOwVR2nUowq7ShxAY6pgHule5bKWK5Dp%2FGBjIHjKACacyQG9%2F6fFXrw5LmQ8yM%2F%2FCkYiqZC3etYk9%2FwsiG9p9gp6Eh6vBS%2BVynuTfrIm6SVhyiGEUBOzYPP9C020Hs%2BkYgjNscqNqMu8yH6ifyDLjQnc%2B1SrUQtTARuuqQyt8Jhs77Y%2B79uiqKOht9saSs7A4tyiDOiGflfoQLXaMns735HiMoWAAHrkKdj0smhAq5ZjgKOGE0&X-Amz-Signature=c060df8d41c8648042572458e3970fd4c56c15b00812d165e7e2e25bdb951802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBU6QOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFxjfKqKHALbwYhP5VZtRNWT2Ggd%2BCZz4x9NW6ibc6YbAiB9tCYjwdZTavIMT4EJdBKASYGbrOQCQSwGgTBOoNSBcSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EQmKU0iYP1Gs19aKtwDW5%2FQwCS9bxAfZX2gdxYP%2BQ0VICIj99Nf1XazrbNvLSwxXrGaJvmxlvwqmpRYgWE%2BMBZbGzPARUswNeCXzuyjAOKFzNImM6EsxUMf0xwLbd0Je7Gv%2Bf4xe9vTzM1WL2kCrXJFut4QSQzU7jkhBChI2aLEgB%2BevdzFbKdkA6egFan3ZcmU5n6n9yOpnI5qFJuw%2FNhKp0%2BnCCp2NCbyIrY%2FFtGtYD7Pc3UK%2B6PdbKjP%2BprLum5b%2BLR024bA5gbEQdIITXjy2Bb%2Bj4mwlyrkDAMOEoAJ82G1CZdvZeKZhQ72%2F6d%2FMN%2BTM3qwoV7Td98n5YC6L%2BfvONhOyip3KhqmN%2BLSh6MbeAujldIqd5nvxS7gm49BT2FJX1WRDHDAcQa11SL84q4xRoFnEn%2BQR6o95DPvyRSvTY%2FW%2Bdou0LHpR4%2F5dcGTLZY9XfI4%2FCMpVH7hkYM%2FQ6Hu8qU6YJyqHNJLXZQEPdZjdx2m43UUBMmtHTjvjjn%2BZR0zj1KAkNSKqYVRDJJd8vn8nDTGhhtRBKRApaIUiQNoUVRh3eEX3rU78dahWkSatdhxnI7wBI7qrYWdWWEMRFHPiMbEtcWBwkmIwmlT3%2BX3VBbItLlyFqI3xCuatBIU4cnPCMGOwVR2nUowq7ShxAY6pgHule5bKWK5Dp%2FGBjIHjKACacyQG9%2F6fFXrw5LmQ8yM%2F%2FCkYiqZC3etYk9%2FwsiG9p9gp6Eh6vBS%2BVynuTfrIm6SVhyiGEUBOzYPP9C020Hs%2BkYgjNscqNqMu8yH6ifyDLjQnc%2B1SrUQtTARuuqQyt8Jhs77Y%2B79uiqKOht9saSs7A4tyiDOiGflfoQLXaMns735HiMoWAAHrkKdj0smhAq5ZjgKOGE0&X-Amz-Signature=635a0c310e08e30b4d085645e665dd5d069198feb5c82d669f4c8b883f4ae40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
