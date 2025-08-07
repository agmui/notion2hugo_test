---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCTW2HA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA4qtygBNwq0dJN%2BmZqLT%2FhisRpBVpXUWWngnHZMgGS5AiEA2UsytiMnZ7jzJorwMifUlg4RUXOVrFVptgONrHHBVyEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnIpnOAFTjjEZ2yUCrcAxVWNU1fFBBdcAQlyLo4ZsuxI9o%2FsYrotJ5AX6n8a%2Fb0bnUoHfT42S1LiqfuCY0GeURLVGbvW%2BTWaUyKmUmNTn31TbT5N2JfmWsMONZq9rApr46QVShx7HDY9lifHn5r0MfP0KBl9UPxJR6CNPoK6GqHXXtH3K%2FFAKU6gtD%2FSj75wpaeOuHk30Hc0EEIbEhvQeK95wgl6zrsIm4hErsmV4AGNRoYd1Xrj7bBNC1JWiIE%2B71e1%2B0VaBnldU1knzrSnkr1CtD1zvwez3nfhbhoI7XF3Gyni8Ijp3yJTWm%2F2p52hOWzUvKfNptOppPXXIFczA80TRF7plcs3mbZS1ity1uOUjfkyekH916mIvOfS4MpV%2FdKcvqb43GyUytT%2FEhWeDfqUABHf4mNSJYacYznE8%2BNGL4YYHG3BF5rftRyDG3u2y2jVp1w4UxetC1Z%2BpAcwFM1XsLlcOvzGz6fTNGhXaKFni2dfoGtYqHnFtQKNGjIyMGnYgbavePpahAPfvU5jt9AXKIIQwjneqXaty09teqzq11kwe2bOkXX4n7gdeZmGaGvCzX0U4VRSmm9XEqeV%2BROMiCP8wLlwI%2FKpPZW4h4Kryp7mO9e1cTauIa09PVnbTosnEMZs2uA9JiqMJ3I0MQGOqUBVAP9eBL9PHtq4y9Get2beK2OapW6eTM4q9YlwUzsD0GteOwpQpIM1ZqfN0EAtD%2BOHqqpYbVnqVv5klfmufutFeXRvemgMpH%2FjN843EnU6XzeRXh2zjRx9xW72UHGf%2BQbkP3pN9UVTBz%2F4lyeMWOceiin5res6VI806V6fsNJ9d2Mpy41Qx%2BdepoM8dVelfW2C8v5%2FINF6ew%2FGhkT4M1PEFeb7Cqg&X-Amz-Signature=6d170592f043db3c1465c34f38b5666765ce035f249dc544a817b0ccc15b00f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCTW2HA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA4qtygBNwq0dJN%2BmZqLT%2FhisRpBVpXUWWngnHZMgGS5AiEA2UsytiMnZ7jzJorwMifUlg4RUXOVrFVptgONrHHBVyEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnIpnOAFTjjEZ2yUCrcAxVWNU1fFBBdcAQlyLo4ZsuxI9o%2FsYrotJ5AX6n8a%2Fb0bnUoHfT42S1LiqfuCY0GeURLVGbvW%2BTWaUyKmUmNTn31TbT5N2JfmWsMONZq9rApr46QVShx7HDY9lifHn5r0MfP0KBl9UPxJR6CNPoK6GqHXXtH3K%2FFAKU6gtD%2FSj75wpaeOuHk30Hc0EEIbEhvQeK95wgl6zrsIm4hErsmV4AGNRoYd1Xrj7bBNC1JWiIE%2B71e1%2B0VaBnldU1knzrSnkr1CtD1zvwez3nfhbhoI7XF3Gyni8Ijp3yJTWm%2F2p52hOWzUvKfNptOppPXXIFczA80TRF7plcs3mbZS1ity1uOUjfkyekH916mIvOfS4MpV%2FdKcvqb43GyUytT%2FEhWeDfqUABHf4mNSJYacYznE8%2BNGL4YYHG3BF5rftRyDG3u2y2jVp1w4UxetC1Z%2BpAcwFM1XsLlcOvzGz6fTNGhXaKFni2dfoGtYqHnFtQKNGjIyMGnYgbavePpahAPfvU5jt9AXKIIQwjneqXaty09teqzq11kwe2bOkXX4n7gdeZmGaGvCzX0U4VRSmm9XEqeV%2BROMiCP8wLlwI%2FKpPZW4h4Kryp7mO9e1cTauIa09PVnbTosnEMZs2uA9JiqMJ3I0MQGOqUBVAP9eBL9PHtq4y9Get2beK2OapW6eTM4q9YlwUzsD0GteOwpQpIM1ZqfN0EAtD%2BOHqqpYbVnqVv5klfmufutFeXRvemgMpH%2FjN843EnU6XzeRXh2zjRx9xW72UHGf%2BQbkP3pN9UVTBz%2F4lyeMWOceiin5res6VI806V6fsNJ9d2Mpy41Qx%2BdepoM8dVelfW2C8v5%2FINF6ew%2FGhkT4M1PEFeb7Cqg&X-Amz-Signature=dcae45973818f7a20ab0a4d60171850e39ff617e427f8c6bf4b92a9f5873527f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCTW2HA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA4qtygBNwq0dJN%2BmZqLT%2FhisRpBVpXUWWngnHZMgGS5AiEA2UsytiMnZ7jzJorwMifUlg4RUXOVrFVptgONrHHBVyEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnIpnOAFTjjEZ2yUCrcAxVWNU1fFBBdcAQlyLo4ZsuxI9o%2FsYrotJ5AX6n8a%2Fb0bnUoHfT42S1LiqfuCY0GeURLVGbvW%2BTWaUyKmUmNTn31TbT5N2JfmWsMONZq9rApr46QVShx7HDY9lifHn5r0MfP0KBl9UPxJR6CNPoK6GqHXXtH3K%2FFAKU6gtD%2FSj75wpaeOuHk30Hc0EEIbEhvQeK95wgl6zrsIm4hErsmV4AGNRoYd1Xrj7bBNC1JWiIE%2B71e1%2B0VaBnldU1knzrSnkr1CtD1zvwez3nfhbhoI7XF3Gyni8Ijp3yJTWm%2F2p52hOWzUvKfNptOppPXXIFczA80TRF7plcs3mbZS1ity1uOUjfkyekH916mIvOfS4MpV%2FdKcvqb43GyUytT%2FEhWeDfqUABHf4mNSJYacYznE8%2BNGL4YYHG3BF5rftRyDG3u2y2jVp1w4UxetC1Z%2BpAcwFM1XsLlcOvzGz6fTNGhXaKFni2dfoGtYqHnFtQKNGjIyMGnYgbavePpahAPfvU5jt9AXKIIQwjneqXaty09teqzq11kwe2bOkXX4n7gdeZmGaGvCzX0U4VRSmm9XEqeV%2BROMiCP8wLlwI%2FKpPZW4h4Kryp7mO9e1cTauIa09PVnbTosnEMZs2uA9JiqMJ3I0MQGOqUBVAP9eBL9PHtq4y9Get2beK2OapW6eTM4q9YlwUzsD0GteOwpQpIM1ZqfN0EAtD%2BOHqqpYbVnqVv5klfmufutFeXRvemgMpH%2FjN843EnU6XzeRXh2zjRx9xW72UHGf%2BQbkP3pN9UVTBz%2F4lyeMWOceiin5res6VI806V6fsNJ9d2Mpy41Qx%2BdepoM8dVelfW2C8v5%2FINF6ew%2FGhkT4M1PEFeb7Cqg&X-Amz-Signature=8672004bbe4b840df517db5aba94eeb91c4ddac59dabf9a3c464683d38a53634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCTW2HA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA4qtygBNwq0dJN%2BmZqLT%2FhisRpBVpXUWWngnHZMgGS5AiEA2UsytiMnZ7jzJorwMifUlg4RUXOVrFVptgONrHHBVyEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnIpnOAFTjjEZ2yUCrcAxVWNU1fFBBdcAQlyLo4ZsuxI9o%2FsYrotJ5AX6n8a%2Fb0bnUoHfT42S1LiqfuCY0GeURLVGbvW%2BTWaUyKmUmNTn31TbT5N2JfmWsMONZq9rApr46QVShx7HDY9lifHn5r0MfP0KBl9UPxJR6CNPoK6GqHXXtH3K%2FFAKU6gtD%2FSj75wpaeOuHk30Hc0EEIbEhvQeK95wgl6zrsIm4hErsmV4AGNRoYd1Xrj7bBNC1JWiIE%2B71e1%2B0VaBnldU1knzrSnkr1CtD1zvwez3nfhbhoI7XF3Gyni8Ijp3yJTWm%2F2p52hOWzUvKfNptOppPXXIFczA80TRF7plcs3mbZS1ity1uOUjfkyekH916mIvOfS4MpV%2FdKcvqb43GyUytT%2FEhWeDfqUABHf4mNSJYacYznE8%2BNGL4YYHG3BF5rftRyDG3u2y2jVp1w4UxetC1Z%2BpAcwFM1XsLlcOvzGz6fTNGhXaKFni2dfoGtYqHnFtQKNGjIyMGnYgbavePpahAPfvU5jt9AXKIIQwjneqXaty09teqzq11kwe2bOkXX4n7gdeZmGaGvCzX0U4VRSmm9XEqeV%2BROMiCP8wLlwI%2FKpPZW4h4Kryp7mO9e1cTauIa09PVnbTosnEMZs2uA9JiqMJ3I0MQGOqUBVAP9eBL9PHtq4y9Get2beK2OapW6eTM4q9YlwUzsD0GteOwpQpIM1ZqfN0EAtD%2BOHqqpYbVnqVv5klfmufutFeXRvemgMpH%2FjN843EnU6XzeRXh2zjRx9xW72UHGf%2BQbkP3pN9UVTBz%2F4lyeMWOceiin5res6VI806V6fsNJ9d2Mpy41Qx%2BdepoM8dVelfW2C8v5%2FINF6ew%2FGhkT4M1PEFeb7Cqg&X-Amz-Signature=0fbe3fddc4faee247fe175bc91eb4507d38aac2c2166f538ab82ef1519b9c71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCTW2HA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA4qtygBNwq0dJN%2BmZqLT%2FhisRpBVpXUWWngnHZMgGS5AiEA2UsytiMnZ7jzJorwMifUlg4RUXOVrFVptgONrHHBVyEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnIpnOAFTjjEZ2yUCrcAxVWNU1fFBBdcAQlyLo4ZsuxI9o%2FsYrotJ5AX6n8a%2Fb0bnUoHfT42S1LiqfuCY0GeURLVGbvW%2BTWaUyKmUmNTn31TbT5N2JfmWsMONZq9rApr46QVShx7HDY9lifHn5r0MfP0KBl9UPxJR6CNPoK6GqHXXtH3K%2FFAKU6gtD%2FSj75wpaeOuHk30Hc0EEIbEhvQeK95wgl6zrsIm4hErsmV4AGNRoYd1Xrj7bBNC1JWiIE%2B71e1%2B0VaBnldU1knzrSnkr1CtD1zvwez3nfhbhoI7XF3Gyni8Ijp3yJTWm%2F2p52hOWzUvKfNptOppPXXIFczA80TRF7plcs3mbZS1ity1uOUjfkyekH916mIvOfS4MpV%2FdKcvqb43GyUytT%2FEhWeDfqUABHf4mNSJYacYznE8%2BNGL4YYHG3BF5rftRyDG3u2y2jVp1w4UxetC1Z%2BpAcwFM1XsLlcOvzGz6fTNGhXaKFni2dfoGtYqHnFtQKNGjIyMGnYgbavePpahAPfvU5jt9AXKIIQwjneqXaty09teqzq11kwe2bOkXX4n7gdeZmGaGvCzX0U4VRSmm9XEqeV%2BROMiCP8wLlwI%2FKpPZW4h4Kryp7mO9e1cTauIa09PVnbTosnEMZs2uA9JiqMJ3I0MQGOqUBVAP9eBL9PHtq4y9Get2beK2OapW6eTM4q9YlwUzsD0GteOwpQpIM1ZqfN0EAtD%2BOHqqpYbVnqVv5klfmufutFeXRvemgMpH%2FjN843EnU6XzeRXh2zjRx9xW72UHGf%2BQbkP3pN9UVTBz%2F4lyeMWOceiin5res6VI806V6fsNJ9d2Mpy41Qx%2BdepoM8dVelfW2C8v5%2FINF6ew%2FGhkT4M1PEFeb7Cqg&X-Amz-Signature=0902a63bbc0de7c12dcac3e68614c54e80c95f6da838702afddef9a0bff53da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCTW2HA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA4qtygBNwq0dJN%2BmZqLT%2FhisRpBVpXUWWngnHZMgGS5AiEA2UsytiMnZ7jzJorwMifUlg4RUXOVrFVptgONrHHBVyEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnIpnOAFTjjEZ2yUCrcAxVWNU1fFBBdcAQlyLo4ZsuxI9o%2FsYrotJ5AX6n8a%2Fb0bnUoHfT42S1LiqfuCY0GeURLVGbvW%2BTWaUyKmUmNTn31TbT5N2JfmWsMONZq9rApr46QVShx7HDY9lifHn5r0MfP0KBl9UPxJR6CNPoK6GqHXXtH3K%2FFAKU6gtD%2FSj75wpaeOuHk30Hc0EEIbEhvQeK95wgl6zrsIm4hErsmV4AGNRoYd1Xrj7bBNC1JWiIE%2B71e1%2B0VaBnldU1knzrSnkr1CtD1zvwez3nfhbhoI7XF3Gyni8Ijp3yJTWm%2F2p52hOWzUvKfNptOppPXXIFczA80TRF7plcs3mbZS1ity1uOUjfkyekH916mIvOfS4MpV%2FdKcvqb43GyUytT%2FEhWeDfqUABHf4mNSJYacYznE8%2BNGL4YYHG3BF5rftRyDG3u2y2jVp1w4UxetC1Z%2BpAcwFM1XsLlcOvzGz6fTNGhXaKFni2dfoGtYqHnFtQKNGjIyMGnYgbavePpahAPfvU5jt9AXKIIQwjneqXaty09teqzq11kwe2bOkXX4n7gdeZmGaGvCzX0U4VRSmm9XEqeV%2BROMiCP8wLlwI%2FKpPZW4h4Kryp7mO9e1cTauIa09PVnbTosnEMZs2uA9JiqMJ3I0MQGOqUBVAP9eBL9PHtq4y9Get2beK2OapW6eTM4q9YlwUzsD0GteOwpQpIM1ZqfN0EAtD%2BOHqqpYbVnqVv5klfmufutFeXRvemgMpH%2FjN843EnU6XzeRXh2zjRx9xW72UHGf%2BQbkP3pN9UVTBz%2F4lyeMWOceiin5res6VI806V6fsNJ9d2Mpy41Qx%2BdepoM8dVelfW2C8v5%2FINF6ew%2FGhkT4M1PEFeb7Cqg&X-Amz-Signature=c852dfca378453f4107caf4f5cba433fbf20b16b4104c634d4d267788f796d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCTW2HA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA4qtygBNwq0dJN%2BmZqLT%2FhisRpBVpXUWWngnHZMgGS5AiEA2UsytiMnZ7jzJorwMifUlg4RUXOVrFVptgONrHHBVyEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnIpnOAFTjjEZ2yUCrcAxVWNU1fFBBdcAQlyLo4ZsuxI9o%2FsYrotJ5AX6n8a%2Fb0bnUoHfT42S1LiqfuCY0GeURLVGbvW%2BTWaUyKmUmNTn31TbT5N2JfmWsMONZq9rApr46QVShx7HDY9lifHn5r0MfP0KBl9UPxJR6CNPoK6GqHXXtH3K%2FFAKU6gtD%2FSj75wpaeOuHk30Hc0EEIbEhvQeK95wgl6zrsIm4hErsmV4AGNRoYd1Xrj7bBNC1JWiIE%2B71e1%2B0VaBnldU1knzrSnkr1CtD1zvwez3nfhbhoI7XF3Gyni8Ijp3yJTWm%2F2p52hOWzUvKfNptOppPXXIFczA80TRF7plcs3mbZS1ity1uOUjfkyekH916mIvOfS4MpV%2FdKcvqb43GyUytT%2FEhWeDfqUABHf4mNSJYacYznE8%2BNGL4YYHG3BF5rftRyDG3u2y2jVp1w4UxetC1Z%2BpAcwFM1XsLlcOvzGz6fTNGhXaKFni2dfoGtYqHnFtQKNGjIyMGnYgbavePpahAPfvU5jt9AXKIIQwjneqXaty09teqzq11kwe2bOkXX4n7gdeZmGaGvCzX0U4VRSmm9XEqeV%2BROMiCP8wLlwI%2FKpPZW4h4Kryp7mO9e1cTauIa09PVnbTosnEMZs2uA9JiqMJ3I0MQGOqUBVAP9eBL9PHtq4y9Get2beK2OapW6eTM4q9YlwUzsD0GteOwpQpIM1ZqfN0EAtD%2BOHqqpYbVnqVv5klfmufutFeXRvemgMpH%2FjN843EnU6XzeRXh2zjRx9xW72UHGf%2BQbkP3pN9UVTBz%2F4lyeMWOceiin5res6VI806V6fsNJ9d2Mpy41Qx%2BdepoM8dVelfW2C8v5%2FINF6ew%2FGhkT4M1PEFeb7Cqg&X-Amz-Signature=52d1769106ecef63ce56a8dddc70c865c984e83a1eb13ff12c8889cb276d2938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCTW2HA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA4qtygBNwq0dJN%2BmZqLT%2FhisRpBVpXUWWngnHZMgGS5AiEA2UsytiMnZ7jzJorwMifUlg4RUXOVrFVptgONrHHBVyEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnIpnOAFTjjEZ2yUCrcAxVWNU1fFBBdcAQlyLo4ZsuxI9o%2FsYrotJ5AX6n8a%2Fb0bnUoHfT42S1LiqfuCY0GeURLVGbvW%2BTWaUyKmUmNTn31TbT5N2JfmWsMONZq9rApr46QVShx7HDY9lifHn5r0MfP0KBl9UPxJR6CNPoK6GqHXXtH3K%2FFAKU6gtD%2FSj75wpaeOuHk30Hc0EEIbEhvQeK95wgl6zrsIm4hErsmV4AGNRoYd1Xrj7bBNC1JWiIE%2B71e1%2B0VaBnldU1knzrSnkr1CtD1zvwez3nfhbhoI7XF3Gyni8Ijp3yJTWm%2F2p52hOWzUvKfNptOppPXXIFczA80TRF7plcs3mbZS1ity1uOUjfkyekH916mIvOfS4MpV%2FdKcvqb43GyUytT%2FEhWeDfqUABHf4mNSJYacYznE8%2BNGL4YYHG3BF5rftRyDG3u2y2jVp1w4UxetC1Z%2BpAcwFM1XsLlcOvzGz6fTNGhXaKFni2dfoGtYqHnFtQKNGjIyMGnYgbavePpahAPfvU5jt9AXKIIQwjneqXaty09teqzq11kwe2bOkXX4n7gdeZmGaGvCzX0U4VRSmm9XEqeV%2BROMiCP8wLlwI%2FKpPZW4h4Kryp7mO9e1cTauIa09PVnbTosnEMZs2uA9JiqMJ3I0MQGOqUBVAP9eBL9PHtq4y9Get2beK2OapW6eTM4q9YlwUzsD0GteOwpQpIM1ZqfN0EAtD%2BOHqqpYbVnqVv5klfmufutFeXRvemgMpH%2FjN843EnU6XzeRXh2zjRx9xW72UHGf%2BQbkP3pN9UVTBz%2F4lyeMWOceiin5res6VI806V6fsNJ9d2Mpy41Qx%2BdepoM8dVelfW2C8v5%2FINF6ew%2FGhkT4M1PEFeb7Cqg&X-Amz-Signature=b2a1f97b2229f6c1b6702a1315c90671235459ec8fa87b8af3f5e99e28b62b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
