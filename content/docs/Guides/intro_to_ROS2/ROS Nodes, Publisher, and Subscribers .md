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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAGHIXD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHo8%2BJw1mEkgJLiEIiC21Nln%2F9ujAte7lxmbpESXEinwAiEArqR%2BrIXP1amJ9BrvKDIoRH%2BX6Qwlk6WN5b723B3KLlwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS722awEk231HAPmyrcA3G%2B0WjnktZ6oktVSwjXxolx2ZEqAig7eR5xVCsNhiXPLLE1Ly5T1xRxOJB5136ELgm6pG8GEpzaujPZCwuaplhCSdy6DaSzgu0EHh%2FMfmRf40OV3vhAfgeXQEshgY3fpHowvS3W6%2FM4W43n3TZiI9nBAtqABqqXLRb3iz5IH3oqxgZvipKHXqi%2BZtH38uujZhqb7YLRoSnCVC7vsEwifebdE5PvIiMok9XZ5B8gejzFS0pA0Q2SrdQStw0PBXO7MfXiUP%2FrK5jhnN7x8JXKRb7oQukqlfqE%2BrKMPlrHf9DWPcYScEHc1AyGPpT9vFtK7Sb0plPopOOHk1jt0YBM%2FZdTmTJmDoh6jKX%2FKKQM1nGpzVb%2F0PcJJtv8jzokR3kcMHlxsgIJxLwMy0A%2FMcQqF0HLAPO6TMCU9WuJFKBBJzizSCRSJgiJ2OrB2AL7yQSUld4dYYh2DcWtJYfhcm0CYoSdiztzb%2Fb1H3rcM%2BkLjzb3aRzYafoI7KiAKIqGyeY2VOGJP%2BhzdbCIonB4bAGCz4pz3AmtqGo2Ecy1fua5nlROKzks2PneB9k5SIIP6lG9mNpbmdnwCng4dsdgpbd1Af6Xm2wO5JlaRW52J5Mm%2FX0k3vNy5sTrP9KhgnLKMPLDz70GOqUBb1098lFWJrrjK1fKC0cN%2Fw5xwks%2BYcNKoL7kAQPgkMIvcK%2F8faee41U6izRYIpv0bpDiJVLIamJC4INV0lyzhXfM0ExUZ03Y8Fey8VxHOSHGOcRt%2FJkZH7CMOQwdhg1SNbpCZ33wjvDpDSTgQEca%2FBCTckvX%2B1iiEy5JU1gbbLBnK4hLFqELfT7zRb9Z6BeD4bp1TjEXClem7pEvaKGRDtU6ODsV&X-Amz-Signature=7a0704213ed4f71421e139c5bb6baaa6d72795db7bfd90744a161ebc7efb2ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAGHIXD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHo8%2BJw1mEkgJLiEIiC21Nln%2F9ujAte7lxmbpESXEinwAiEArqR%2BrIXP1amJ9BrvKDIoRH%2BX6Qwlk6WN5b723B3KLlwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS722awEk231HAPmyrcA3G%2B0WjnktZ6oktVSwjXxolx2ZEqAig7eR5xVCsNhiXPLLE1Ly5T1xRxOJB5136ELgm6pG8GEpzaujPZCwuaplhCSdy6DaSzgu0EHh%2FMfmRf40OV3vhAfgeXQEshgY3fpHowvS3W6%2FM4W43n3TZiI9nBAtqABqqXLRb3iz5IH3oqxgZvipKHXqi%2BZtH38uujZhqb7YLRoSnCVC7vsEwifebdE5PvIiMok9XZ5B8gejzFS0pA0Q2SrdQStw0PBXO7MfXiUP%2FrK5jhnN7x8JXKRb7oQukqlfqE%2BrKMPlrHf9DWPcYScEHc1AyGPpT9vFtK7Sb0plPopOOHk1jt0YBM%2FZdTmTJmDoh6jKX%2FKKQM1nGpzVb%2F0PcJJtv8jzokR3kcMHlxsgIJxLwMy0A%2FMcQqF0HLAPO6TMCU9WuJFKBBJzizSCRSJgiJ2OrB2AL7yQSUld4dYYh2DcWtJYfhcm0CYoSdiztzb%2Fb1H3rcM%2BkLjzb3aRzYafoI7KiAKIqGyeY2VOGJP%2BhzdbCIonB4bAGCz4pz3AmtqGo2Ecy1fua5nlROKzks2PneB9k5SIIP6lG9mNpbmdnwCng4dsdgpbd1Af6Xm2wO5JlaRW52J5Mm%2FX0k3vNy5sTrP9KhgnLKMPLDz70GOqUBb1098lFWJrrjK1fKC0cN%2Fw5xwks%2BYcNKoL7kAQPgkMIvcK%2F8faee41U6izRYIpv0bpDiJVLIamJC4INV0lyzhXfM0ExUZ03Y8Fey8VxHOSHGOcRt%2FJkZH7CMOQwdhg1SNbpCZ33wjvDpDSTgQEca%2FBCTckvX%2B1iiEy5JU1gbbLBnK4hLFqELfT7zRb9Z6BeD4bp1TjEXClem7pEvaKGRDtU6ODsV&X-Amz-Signature=4aaecbdc3a2698d5a8602a4c7e5ed26d18b3ae4ff3faf18388932838f1f987f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAGHIXD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHo8%2BJw1mEkgJLiEIiC21Nln%2F9ujAte7lxmbpESXEinwAiEArqR%2BrIXP1amJ9BrvKDIoRH%2BX6Qwlk6WN5b723B3KLlwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS722awEk231HAPmyrcA3G%2B0WjnktZ6oktVSwjXxolx2ZEqAig7eR5xVCsNhiXPLLE1Ly5T1xRxOJB5136ELgm6pG8GEpzaujPZCwuaplhCSdy6DaSzgu0EHh%2FMfmRf40OV3vhAfgeXQEshgY3fpHowvS3W6%2FM4W43n3TZiI9nBAtqABqqXLRb3iz5IH3oqxgZvipKHXqi%2BZtH38uujZhqb7YLRoSnCVC7vsEwifebdE5PvIiMok9XZ5B8gejzFS0pA0Q2SrdQStw0PBXO7MfXiUP%2FrK5jhnN7x8JXKRb7oQukqlfqE%2BrKMPlrHf9DWPcYScEHc1AyGPpT9vFtK7Sb0plPopOOHk1jt0YBM%2FZdTmTJmDoh6jKX%2FKKQM1nGpzVb%2F0PcJJtv8jzokR3kcMHlxsgIJxLwMy0A%2FMcQqF0HLAPO6TMCU9WuJFKBBJzizSCRSJgiJ2OrB2AL7yQSUld4dYYh2DcWtJYfhcm0CYoSdiztzb%2Fb1H3rcM%2BkLjzb3aRzYafoI7KiAKIqGyeY2VOGJP%2BhzdbCIonB4bAGCz4pz3AmtqGo2Ecy1fua5nlROKzks2PneB9k5SIIP6lG9mNpbmdnwCng4dsdgpbd1Af6Xm2wO5JlaRW52J5Mm%2FX0k3vNy5sTrP9KhgnLKMPLDz70GOqUBb1098lFWJrrjK1fKC0cN%2Fw5xwks%2BYcNKoL7kAQPgkMIvcK%2F8faee41U6izRYIpv0bpDiJVLIamJC4INV0lyzhXfM0ExUZ03Y8Fey8VxHOSHGOcRt%2FJkZH7CMOQwdhg1SNbpCZ33wjvDpDSTgQEca%2FBCTckvX%2B1iiEy5JU1gbbLBnK4hLFqELfT7zRb9Z6BeD4bp1TjEXClem7pEvaKGRDtU6ODsV&X-Amz-Signature=0349e12dfe4a69c7d5944e4c33d6537d0f17f39927ee687ec293a6b4bd1adfa9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAGHIXD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHo8%2BJw1mEkgJLiEIiC21Nln%2F9ujAte7lxmbpESXEinwAiEArqR%2BrIXP1amJ9BrvKDIoRH%2BX6Qwlk6WN5b723B3KLlwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS722awEk231HAPmyrcA3G%2B0WjnktZ6oktVSwjXxolx2ZEqAig7eR5xVCsNhiXPLLE1Ly5T1xRxOJB5136ELgm6pG8GEpzaujPZCwuaplhCSdy6DaSzgu0EHh%2FMfmRf40OV3vhAfgeXQEshgY3fpHowvS3W6%2FM4W43n3TZiI9nBAtqABqqXLRb3iz5IH3oqxgZvipKHXqi%2BZtH38uujZhqb7YLRoSnCVC7vsEwifebdE5PvIiMok9XZ5B8gejzFS0pA0Q2SrdQStw0PBXO7MfXiUP%2FrK5jhnN7x8JXKRb7oQukqlfqE%2BrKMPlrHf9DWPcYScEHc1AyGPpT9vFtK7Sb0plPopOOHk1jt0YBM%2FZdTmTJmDoh6jKX%2FKKQM1nGpzVb%2F0PcJJtv8jzokR3kcMHlxsgIJxLwMy0A%2FMcQqF0HLAPO6TMCU9WuJFKBBJzizSCRSJgiJ2OrB2AL7yQSUld4dYYh2DcWtJYfhcm0CYoSdiztzb%2Fb1H3rcM%2BkLjzb3aRzYafoI7KiAKIqGyeY2VOGJP%2BhzdbCIonB4bAGCz4pz3AmtqGo2Ecy1fua5nlROKzks2PneB9k5SIIP6lG9mNpbmdnwCng4dsdgpbd1Af6Xm2wO5JlaRW52J5Mm%2FX0k3vNy5sTrP9KhgnLKMPLDz70GOqUBb1098lFWJrrjK1fKC0cN%2Fw5xwks%2BYcNKoL7kAQPgkMIvcK%2F8faee41U6izRYIpv0bpDiJVLIamJC4INV0lyzhXfM0ExUZ03Y8Fey8VxHOSHGOcRt%2FJkZH7CMOQwdhg1SNbpCZ33wjvDpDSTgQEca%2FBCTckvX%2B1iiEy5JU1gbbLBnK4hLFqELfT7zRb9Z6BeD4bp1TjEXClem7pEvaKGRDtU6ODsV&X-Amz-Signature=8a9eafbc5cfb876965e0c8959b0c3f57a4ab4e0b7f4b3c6dca8bfb14dd1ff7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAGHIXD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHo8%2BJw1mEkgJLiEIiC21Nln%2F9ujAte7lxmbpESXEinwAiEArqR%2BrIXP1amJ9BrvKDIoRH%2BX6Qwlk6WN5b723B3KLlwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS722awEk231HAPmyrcA3G%2B0WjnktZ6oktVSwjXxolx2ZEqAig7eR5xVCsNhiXPLLE1Ly5T1xRxOJB5136ELgm6pG8GEpzaujPZCwuaplhCSdy6DaSzgu0EHh%2FMfmRf40OV3vhAfgeXQEshgY3fpHowvS3W6%2FM4W43n3TZiI9nBAtqABqqXLRb3iz5IH3oqxgZvipKHXqi%2BZtH38uujZhqb7YLRoSnCVC7vsEwifebdE5PvIiMok9XZ5B8gejzFS0pA0Q2SrdQStw0PBXO7MfXiUP%2FrK5jhnN7x8JXKRb7oQukqlfqE%2BrKMPlrHf9DWPcYScEHc1AyGPpT9vFtK7Sb0plPopOOHk1jt0YBM%2FZdTmTJmDoh6jKX%2FKKQM1nGpzVb%2F0PcJJtv8jzokR3kcMHlxsgIJxLwMy0A%2FMcQqF0HLAPO6TMCU9WuJFKBBJzizSCRSJgiJ2OrB2AL7yQSUld4dYYh2DcWtJYfhcm0CYoSdiztzb%2Fb1H3rcM%2BkLjzb3aRzYafoI7KiAKIqGyeY2VOGJP%2BhzdbCIonB4bAGCz4pz3AmtqGo2Ecy1fua5nlROKzks2PneB9k5SIIP6lG9mNpbmdnwCng4dsdgpbd1Af6Xm2wO5JlaRW52J5Mm%2FX0k3vNy5sTrP9KhgnLKMPLDz70GOqUBb1098lFWJrrjK1fKC0cN%2Fw5xwks%2BYcNKoL7kAQPgkMIvcK%2F8faee41U6izRYIpv0bpDiJVLIamJC4INV0lyzhXfM0ExUZ03Y8Fey8VxHOSHGOcRt%2FJkZH7CMOQwdhg1SNbpCZ33wjvDpDSTgQEca%2FBCTckvX%2B1iiEy5JU1gbbLBnK4hLFqELfT7zRb9Z6BeD4bp1TjEXClem7pEvaKGRDtU6ODsV&X-Amz-Signature=3a3a351a00bf1b70469bcf2cff633d0066ac307b409f7b9cf6081114c5e67f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAGHIXD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHo8%2BJw1mEkgJLiEIiC21Nln%2F9ujAte7lxmbpESXEinwAiEArqR%2BrIXP1amJ9BrvKDIoRH%2BX6Qwlk6WN5b723B3KLlwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS722awEk231HAPmyrcA3G%2B0WjnktZ6oktVSwjXxolx2ZEqAig7eR5xVCsNhiXPLLE1Ly5T1xRxOJB5136ELgm6pG8GEpzaujPZCwuaplhCSdy6DaSzgu0EHh%2FMfmRf40OV3vhAfgeXQEshgY3fpHowvS3W6%2FM4W43n3TZiI9nBAtqABqqXLRb3iz5IH3oqxgZvipKHXqi%2BZtH38uujZhqb7YLRoSnCVC7vsEwifebdE5PvIiMok9XZ5B8gejzFS0pA0Q2SrdQStw0PBXO7MfXiUP%2FrK5jhnN7x8JXKRb7oQukqlfqE%2BrKMPlrHf9DWPcYScEHc1AyGPpT9vFtK7Sb0plPopOOHk1jt0YBM%2FZdTmTJmDoh6jKX%2FKKQM1nGpzVb%2F0PcJJtv8jzokR3kcMHlxsgIJxLwMy0A%2FMcQqF0HLAPO6TMCU9WuJFKBBJzizSCRSJgiJ2OrB2AL7yQSUld4dYYh2DcWtJYfhcm0CYoSdiztzb%2Fb1H3rcM%2BkLjzb3aRzYafoI7KiAKIqGyeY2VOGJP%2BhzdbCIonB4bAGCz4pz3AmtqGo2Ecy1fua5nlROKzks2PneB9k5SIIP6lG9mNpbmdnwCng4dsdgpbd1Af6Xm2wO5JlaRW52J5Mm%2FX0k3vNy5sTrP9KhgnLKMPLDz70GOqUBb1098lFWJrrjK1fKC0cN%2Fw5xwks%2BYcNKoL7kAQPgkMIvcK%2F8faee41U6izRYIpv0bpDiJVLIamJC4INV0lyzhXfM0ExUZ03Y8Fey8VxHOSHGOcRt%2FJkZH7CMOQwdhg1SNbpCZ33wjvDpDSTgQEca%2FBCTckvX%2B1iiEy5JU1gbbLBnK4hLFqELfT7zRb9Z6BeD4bp1TjEXClem7pEvaKGRDtU6ODsV&X-Amz-Signature=39eb10d0f89f5ab65e5be63def8e534836e5ae07257c8998b74450dbd16592ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAGHIXD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHo8%2BJw1mEkgJLiEIiC21Nln%2F9ujAte7lxmbpESXEinwAiEArqR%2BrIXP1amJ9BrvKDIoRH%2BX6Qwlk6WN5b723B3KLlwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS722awEk231HAPmyrcA3G%2B0WjnktZ6oktVSwjXxolx2ZEqAig7eR5xVCsNhiXPLLE1Ly5T1xRxOJB5136ELgm6pG8GEpzaujPZCwuaplhCSdy6DaSzgu0EHh%2FMfmRf40OV3vhAfgeXQEshgY3fpHowvS3W6%2FM4W43n3TZiI9nBAtqABqqXLRb3iz5IH3oqxgZvipKHXqi%2BZtH38uujZhqb7YLRoSnCVC7vsEwifebdE5PvIiMok9XZ5B8gejzFS0pA0Q2SrdQStw0PBXO7MfXiUP%2FrK5jhnN7x8JXKRb7oQukqlfqE%2BrKMPlrHf9DWPcYScEHc1AyGPpT9vFtK7Sb0plPopOOHk1jt0YBM%2FZdTmTJmDoh6jKX%2FKKQM1nGpzVb%2F0PcJJtv8jzokR3kcMHlxsgIJxLwMy0A%2FMcQqF0HLAPO6TMCU9WuJFKBBJzizSCRSJgiJ2OrB2AL7yQSUld4dYYh2DcWtJYfhcm0CYoSdiztzb%2Fb1H3rcM%2BkLjzb3aRzYafoI7KiAKIqGyeY2VOGJP%2BhzdbCIonB4bAGCz4pz3AmtqGo2Ecy1fua5nlROKzks2PneB9k5SIIP6lG9mNpbmdnwCng4dsdgpbd1Af6Xm2wO5JlaRW52J5Mm%2FX0k3vNy5sTrP9KhgnLKMPLDz70GOqUBb1098lFWJrrjK1fKC0cN%2Fw5xwks%2BYcNKoL7kAQPgkMIvcK%2F8faee41U6izRYIpv0bpDiJVLIamJC4INV0lyzhXfM0ExUZ03Y8Fey8VxHOSHGOcRt%2FJkZH7CMOQwdhg1SNbpCZ33wjvDpDSTgQEca%2FBCTckvX%2B1iiEy5JU1gbbLBnK4hLFqELfT7zRb9Z6BeD4bp1TjEXClem7pEvaKGRDtU6ODsV&X-Amz-Signature=52547658e916cd23e6b28493a24df040a49f32b08339674a98b5b5817c7d42a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAGHIXD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHo8%2BJw1mEkgJLiEIiC21Nln%2F9ujAte7lxmbpESXEinwAiEArqR%2BrIXP1amJ9BrvKDIoRH%2BX6Qwlk6WN5b723B3KLlwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS722awEk231HAPmyrcA3G%2B0WjnktZ6oktVSwjXxolx2ZEqAig7eR5xVCsNhiXPLLE1Ly5T1xRxOJB5136ELgm6pG8GEpzaujPZCwuaplhCSdy6DaSzgu0EHh%2FMfmRf40OV3vhAfgeXQEshgY3fpHowvS3W6%2FM4W43n3TZiI9nBAtqABqqXLRb3iz5IH3oqxgZvipKHXqi%2BZtH38uujZhqb7YLRoSnCVC7vsEwifebdE5PvIiMok9XZ5B8gejzFS0pA0Q2SrdQStw0PBXO7MfXiUP%2FrK5jhnN7x8JXKRb7oQukqlfqE%2BrKMPlrHf9DWPcYScEHc1AyGPpT9vFtK7Sb0plPopOOHk1jt0YBM%2FZdTmTJmDoh6jKX%2FKKQM1nGpzVb%2F0PcJJtv8jzokR3kcMHlxsgIJxLwMy0A%2FMcQqF0HLAPO6TMCU9WuJFKBBJzizSCRSJgiJ2OrB2AL7yQSUld4dYYh2DcWtJYfhcm0CYoSdiztzb%2Fb1H3rcM%2BkLjzb3aRzYafoI7KiAKIqGyeY2VOGJP%2BhzdbCIonB4bAGCz4pz3AmtqGo2Ecy1fua5nlROKzks2PneB9k5SIIP6lG9mNpbmdnwCng4dsdgpbd1Af6Xm2wO5JlaRW52J5Mm%2FX0k3vNy5sTrP9KhgnLKMPLDz70GOqUBb1098lFWJrrjK1fKC0cN%2Fw5xwks%2BYcNKoL7kAQPgkMIvcK%2F8faee41U6izRYIpv0bpDiJVLIamJC4INV0lyzhXfM0ExUZ03Y8Fey8VxHOSHGOcRt%2FJkZH7CMOQwdhg1SNbpCZ33wjvDpDSTgQEca%2FBCTckvX%2B1iiEy5JU1gbbLBnK4hLFqELfT7zRb9Z6BeD4bp1TjEXClem7pEvaKGRDtU6ODsV&X-Amz-Signature=8bf06be1a961381753c4e479a3e78bd34cce52d1b8d6aaa62652e92ff2bf71c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
