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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFAYKV7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALlVhgbpxt4BdTq6LVEiHBrjCNkGQi0WyjBndkukVAQIhANdYtXvYRrkM1Ny4qvYhKlj5NU2kvASP7D7ExjLhH2mBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmZdfdKwf7%2BRvd%2Foq3AN84Jkzrq7SIMdrRCuSRjQww%2FRMeV9GXasgleWSxTgmtbs7asp7av4tJ31%2F718UO5CsIAYVtmaoj8YoRbYsApnI9RznhSkaIS3MTcXIYs6pTf39w3hAhaslhJHs4FwMfNXhzd1%2BTQo%2FGtIUfk%2FFMqTC74DUGSfjEC4P5y%2BHAY%2FXKhDUzY7QiVpBV1V58f14oe8ngf785rfN%2F3CPfe1mhNnVBmfQYNr%2BfXK2C453zmt1tcPCQi07IbTup4A8WXO7svzfpeok1RoKnEiTlTG7kJz9MI2YraEN5FKKIVeGf6cLRstaKhVstAfQTxqPQ4F%2BmUSwQdcfCjJwN2wwABPyrth2rMS9vJWR7vfVPTfCEwn03EHR7OaLdkKP4ghrxeCaNCRCV0YhaszMv0XhD5sxUlWabdi8W%2Bn2UzVOVYo6Wz0tshugHoZYm8UaauatuKnVLsVzvdp7Zz%2BIxMNrgxaB42QUhkdMkLqhzOJz8FrQoF9hiVbSKOWC7xr957Tg0L7bAYzI0j6EJf3iFizofqtNXzW9lixjswid06rgpRfTRPgds13TOFC32PjJ8km1o5n%2Fz58cPwcGwXW0PIuANuzHWWS9iCdLwuaugWCiGBMrcYYyfkmGfxvCY%2FnGa1sWRzDe3dDCBjqkAUw01NPCf2wVioTHUHP1EZSk3hqu8nd2CtXY3Fm4FJuH1lCHumnMjHFmNBZ1c3A%2Bhd0Yznzv8xm7AYdleuUf7NjHWRTaXNBuew0iEK%2FsPcxd18aIb%2Fo5WhC0%2B5K%2FRw6mJC%2FEKgDjfEUDmWSJB1MOFG5WmNnVmuvX6siajoSjGCGOUjfrV6KMN5%2BtpEffHXmLw6ZNhSXbjQ3Xkf7oWq%2Bi8w2eQMJU&X-Amz-Signature=753684a397b491c9628cd1b5dcf6be9f76f1dabcb5a1c84a85d244b45205c80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFAYKV7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALlVhgbpxt4BdTq6LVEiHBrjCNkGQi0WyjBndkukVAQIhANdYtXvYRrkM1Ny4qvYhKlj5NU2kvASP7D7ExjLhH2mBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmZdfdKwf7%2BRvd%2Foq3AN84Jkzrq7SIMdrRCuSRjQww%2FRMeV9GXasgleWSxTgmtbs7asp7av4tJ31%2F718UO5CsIAYVtmaoj8YoRbYsApnI9RznhSkaIS3MTcXIYs6pTf39w3hAhaslhJHs4FwMfNXhzd1%2BTQo%2FGtIUfk%2FFMqTC74DUGSfjEC4P5y%2BHAY%2FXKhDUzY7QiVpBV1V58f14oe8ngf785rfN%2F3CPfe1mhNnVBmfQYNr%2BfXK2C453zmt1tcPCQi07IbTup4A8WXO7svzfpeok1RoKnEiTlTG7kJz9MI2YraEN5FKKIVeGf6cLRstaKhVstAfQTxqPQ4F%2BmUSwQdcfCjJwN2wwABPyrth2rMS9vJWR7vfVPTfCEwn03EHR7OaLdkKP4ghrxeCaNCRCV0YhaszMv0XhD5sxUlWabdi8W%2Bn2UzVOVYo6Wz0tshugHoZYm8UaauatuKnVLsVzvdp7Zz%2BIxMNrgxaB42QUhkdMkLqhzOJz8FrQoF9hiVbSKOWC7xr957Tg0L7bAYzI0j6EJf3iFizofqtNXzW9lixjswid06rgpRfTRPgds13TOFC32PjJ8km1o5n%2Fz58cPwcGwXW0PIuANuzHWWS9iCdLwuaugWCiGBMrcYYyfkmGfxvCY%2FnGa1sWRzDe3dDCBjqkAUw01NPCf2wVioTHUHP1EZSk3hqu8nd2CtXY3Fm4FJuH1lCHumnMjHFmNBZ1c3A%2Bhd0Yznzv8xm7AYdleuUf7NjHWRTaXNBuew0iEK%2FsPcxd18aIb%2Fo5WhC0%2B5K%2FRw6mJC%2FEKgDjfEUDmWSJB1MOFG5WmNnVmuvX6siajoSjGCGOUjfrV6KMN5%2BtpEffHXmLw6ZNhSXbjQ3Xkf7oWq%2Bi8w2eQMJU&X-Amz-Signature=379bfe7f80f1219b37f3e442c46b62d950ca04bfa9c453361e70e52d810f9983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFAYKV7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALlVhgbpxt4BdTq6LVEiHBrjCNkGQi0WyjBndkukVAQIhANdYtXvYRrkM1Ny4qvYhKlj5NU2kvASP7D7ExjLhH2mBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmZdfdKwf7%2BRvd%2Foq3AN84Jkzrq7SIMdrRCuSRjQww%2FRMeV9GXasgleWSxTgmtbs7asp7av4tJ31%2F718UO5CsIAYVtmaoj8YoRbYsApnI9RznhSkaIS3MTcXIYs6pTf39w3hAhaslhJHs4FwMfNXhzd1%2BTQo%2FGtIUfk%2FFMqTC74DUGSfjEC4P5y%2BHAY%2FXKhDUzY7QiVpBV1V58f14oe8ngf785rfN%2F3CPfe1mhNnVBmfQYNr%2BfXK2C453zmt1tcPCQi07IbTup4A8WXO7svzfpeok1RoKnEiTlTG7kJz9MI2YraEN5FKKIVeGf6cLRstaKhVstAfQTxqPQ4F%2BmUSwQdcfCjJwN2wwABPyrth2rMS9vJWR7vfVPTfCEwn03EHR7OaLdkKP4ghrxeCaNCRCV0YhaszMv0XhD5sxUlWabdi8W%2Bn2UzVOVYo6Wz0tshugHoZYm8UaauatuKnVLsVzvdp7Zz%2BIxMNrgxaB42QUhkdMkLqhzOJz8FrQoF9hiVbSKOWC7xr957Tg0L7bAYzI0j6EJf3iFizofqtNXzW9lixjswid06rgpRfTRPgds13TOFC32PjJ8km1o5n%2Fz58cPwcGwXW0PIuANuzHWWS9iCdLwuaugWCiGBMrcYYyfkmGfxvCY%2FnGa1sWRzDe3dDCBjqkAUw01NPCf2wVioTHUHP1EZSk3hqu8nd2CtXY3Fm4FJuH1lCHumnMjHFmNBZ1c3A%2Bhd0Yznzv8xm7AYdleuUf7NjHWRTaXNBuew0iEK%2FsPcxd18aIb%2Fo5WhC0%2B5K%2FRw6mJC%2FEKgDjfEUDmWSJB1MOFG5WmNnVmuvX6siajoSjGCGOUjfrV6KMN5%2BtpEffHXmLw6ZNhSXbjQ3Xkf7oWq%2Bi8w2eQMJU&X-Amz-Signature=24e6ddde59a468ec62cab91a656708afbaf5b77781085295bf4e23f80e3eb6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFAYKV7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALlVhgbpxt4BdTq6LVEiHBrjCNkGQi0WyjBndkukVAQIhANdYtXvYRrkM1Ny4qvYhKlj5NU2kvASP7D7ExjLhH2mBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmZdfdKwf7%2BRvd%2Foq3AN84Jkzrq7SIMdrRCuSRjQww%2FRMeV9GXasgleWSxTgmtbs7asp7av4tJ31%2F718UO5CsIAYVtmaoj8YoRbYsApnI9RznhSkaIS3MTcXIYs6pTf39w3hAhaslhJHs4FwMfNXhzd1%2BTQo%2FGtIUfk%2FFMqTC74DUGSfjEC4P5y%2BHAY%2FXKhDUzY7QiVpBV1V58f14oe8ngf785rfN%2F3CPfe1mhNnVBmfQYNr%2BfXK2C453zmt1tcPCQi07IbTup4A8WXO7svzfpeok1RoKnEiTlTG7kJz9MI2YraEN5FKKIVeGf6cLRstaKhVstAfQTxqPQ4F%2BmUSwQdcfCjJwN2wwABPyrth2rMS9vJWR7vfVPTfCEwn03EHR7OaLdkKP4ghrxeCaNCRCV0YhaszMv0XhD5sxUlWabdi8W%2Bn2UzVOVYo6Wz0tshugHoZYm8UaauatuKnVLsVzvdp7Zz%2BIxMNrgxaB42QUhkdMkLqhzOJz8FrQoF9hiVbSKOWC7xr957Tg0L7bAYzI0j6EJf3iFizofqtNXzW9lixjswid06rgpRfTRPgds13TOFC32PjJ8km1o5n%2Fz58cPwcGwXW0PIuANuzHWWS9iCdLwuaugWCiGBMrcYYyfkmGfxvCY%2FnGa1sWRzDe3dDCBjqkAUw01NPCf2wVioTHUHP1EZSk3hqu8nd2CtXY3Fm4FJuH1lCHumnMjHFmNBZ1c3A%2Bhd0Yznzv8xm7AYdleuUf7NjHWRTaXNBuew0iEK%2FsPcxd18aIb%2Fo5WhC0%2B5K%2FRw6mJC%2FEKgDjfEUDmWSJB1MOFG5WmNnVmuvX6siajoSjGCGOUjfrV6KMN5%2BtpEffHXmLw6ZNhSXbjQ3Xkf7oWq%2Bi8w2eQMJU&X-Amz-Signature=c286c9ff5361e1caece32ac0d7dee04360a83228c39459b1f37cb198092357a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFAYKV7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALlVhgbpxt4BdTq6LVEiHBrjCNkGQi0WyjBndkukVAQIhANdYtXvYRrkM1Ny4qvYhKlj5NU2kvASP7D7ExjLhH2mBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmZdfdKwf7%2BRvd%2Foq3AN84Jkzrq7SIMdrRCuSRjQww%2FRMeV9GXasgleWSxTgmtbs7asp7av4tJ31%2F718UO5CsIAYVtmaoj8YoRbYsApnI9RznhSkaIS3MTcXIYs6pTf39w3hAhaslhJHs4FwMfNXhzd1%2BTQo%2FGtIUfk%2FFMqTC74DUGSfjEC4P5y%2BHAY%2FXKhDUzY7QiVpBV1V58f14oe8ngf785rfN%2F3CPfe1mhNnVBmfQYNr%2BfXK2C453zmt1tcPCQi07IbTup4A8WXO7svzfpeok1RoKnEiTlTG7kJz9MI2YraEN5FKKIVeGf6cLRstaKhVstAfQTxqPQ4F%2BmUSwQdcfCjJwN2wwABPyrth2rMS9vJWR7vfVPTfCEwn03EHR7OaLdkKP4ghrxeCaNCRCV0YhaszMv0XhD5sxUlWabdi8W%2Bn2UzVOVYo6Wz0tshugHoZYm8UaauatuKnVLsVzvdp7Zz%2BIxMNrgxaB42QUhkdMkLqhzOJz8FrQoF9hiVbSKOWC7xr957Tg0L7bAYzI0j6EJf3iFizofqtNXzW9lixjswid06rgpRfTRPgds13TOFC32PjJ8km1o5n%2Fz58cPwcGwXW0PIuANuzHWWS9iCdLwuaugWCiGBMrcYYyfkmGfxvCY%2FnGa1sWRzDe3dDCBjqkAUw01NPCf2wVioTHUHP1EZSk3hqu8nd2CtXY3Fm4FJuH1lCHumnMjHFmNBZ1c3A%2Bhd0Yznzv8xm7AYdleuUf7NjHWRTaXNBuew0iEK%2FsPcxd18aIb%2Fo5WhC0%2B5K%2FRw6mJC%2FEKgDjfEUDmWSJB1MOFG5WmNnVmuvX6siajoSjGCGOUjfrV6KMN5%2BtpEffHXmLw6ZNhSXbjQ3Xkf7oWq%2Bi8w2eQMJU&X-Amz-Signature=fa36241595aa31ae8b9fc56c4ba4009c8d585b4032f704a3d59fca9532b430d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFAYKV7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALlVhgbpxt4BdTq6LVEiHBrjCNkGQi0WyjBndkukVAQIhANdYtXvYRrkM1Ny4qvYhKlj5NU2kvASP7D7ExjLhH2mBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmZdfdKwf7%2BRvd%2Foq3AN84Jkzrq7SIMdrRCuSRjQww%2FRMeV9GXasgleWSxTgmtbs7asp7av4tJ31%2F718UO5CsIAYVtmaoj8YoRbYsApnI9RznhSkaIS3MTcXIYs6pTf39w3hAhaslhJHs4FwMfNXhzd1%2BTQo%2FGtIUfk%2FFMqTC74DUGSfjEC4P5y%2BHAY%2FXKhDUzY7QiVpBV1V58f14oe8ngf785rfN%2F3CPfe1mhNnVBmfQYNr%2BfXK2C453zmt1tcPCQi07IbTup4A8WXO7svzfpeok1RoKnEiTlTG7kJz9MI2YraEN5FKKIVeGf6cLRstaKhVstAfQTxqPQ4F%2BmUSwQdcfCjJwN2wwABPyrth2rMS9vJWR7vfVPTfCEwn03EHR7OaLdkKP4ghrxeCaNCRCV0YhaszMv0XhD5sxUlWabdi8W%2Bn2UzVOVYo6Wz0tshugHoZYm8UaauatuKnVLsVzvdp7Zz%2BIxMNrgxaB42QUhkdMkLqhzOJz8FrQoF9hiVbSKOWC7xr957Tg0L7bAYzI0j6EJf3iFizofqtNXzW9lixjswid06rgpRfTRPgds13TOFC32PjJ8km1o5n%2Fz58cPwcGwXW0PIuANuzHWWS9iCdLwuaugWCiGBMrcYYyfkmGfxvCY%2FnGa1sWRzDe3dDCBjqkAUw01NPCf2wVioTHUHP1EZSk3hqu8nd2CtXY3Fm4FJuH1lCHumnMjHFmNBZ1c3A%2Bhd0Yznzv8xm7AYdleuUf7NjHWRTaXNBuew0iEK%2FsPcxd18aIb%2Fo5WhC0%2B5K%2FRw6mJC%2FEKgDjfEUDmWSJB1MOFG5WmNnVmuvX6siajoSjGCGOUjfrV6KMN5%2BtpEffHXmLw6ZNhSXbjQ3Xkf7oWq%2Bi8w2eQMJU&X-Amz-Signature=5422c1e864a63229da3bd33147f9352afe24ddb4d0f41dbabcb23c6170c064dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFAYKV7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALlVhgbpxt4BdTq6LVEiHBrjCNkGQi0WyjBndkukVAQIhANdYtXvYRrkM1Ny4qvYhKlj5NU2kvASP7D7ExjLhH2mBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmZdfdKwf7%2BRvd%2Foq3AN84Jkzrq7SIMdrRCuSRjQww%2FRMeV9GXasgleWSxTgmtbs7asp7av4tJ31%2F718UO5CsIAYVtmaoj8YoRbYsApnI9RznhSkaIS3MTcXIYs6pTf39w3hAhaslhJHs4FwMfNXhzd1%2BTQo%2FGtIUfk%2FFMqTC74DUGSfjEC4P5y%2BHAY%2FXKhDUzY7QiVpBV1V58f14oe8ngf785rfN%2F3CPfe1mhNnVBmfQYNr%2BfXK2C453zmt1tcPCQi07IbTup4A8WXO7svzfpeok1RoKnEiTlTG7kJz9MI2YraEN5FKKIVeGf6cLRstaKhVstAfQTxqPQ4F%2BmUSwQdcfCjJwN2wwABPyrth2rMS9vJWR7vfVPTfCEwn03EHR7OaLdkKP4ghrxeCaNCRCV0YhaszMv0XhD5sxUlWabdi8W%2Bn2UzVOVYo6Wz0tshugHoZYm8UaauatuKnVLsVzvdp7Zz%2BIxMNrgxaB42QUhkdMkLqhzOJz8FrQoF9hiVbSKOWC7xr957Tg0L7bAYzI0j6EJf3iFizofqtNXzW9lixjswid06rgpRfTRPgds13TOFC32PjJ8km1o5n%2Fz58cPwcGwXW0PIuANuzHWWS9iCdLwuaugWCiGBMrcYYyfkmGfxvCY%2FnGa1sWRzDe3dDCBjqkAUw01NPCf2wVioTHUHP1EZSk3hqu8nd2CtXY3Fm4FJuH1lCHumnMjHFmNBZ1c3A%2Bhd0Yznzv8xm7AYdleuUf7NjHWRTaXNBuew0iEK%2FsPcxd18aIb%2Fo5WhC0%2B5K%2FRw6mJC%2FEKgDjfEUDmWSJB1MOFG5WmNnVmuvX6siajoSjGCGOUjfrV6KMN5%2BtpEffHXmLw6ZNhSXbjQ3Xkf7oWq%2Bi8w2eQMJU&X-Amz-Signature=fb74cb440f36e25b05f2a93d6298bda024d934d5989ef23f873ec3c026694353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFAYKV7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALlVhgbpxt4BdTq6LVEiHBrjCNkGQi0WyjBndkukVAQIhANdYtXvYRrkM1Ny4qvYhKlj5NU2kvASP7D7ExjLhH2mBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmZdfdKwf7%2BRvd%2Foq3AN84Jkzrq7SIMdrRCuSRjQww%2FRMeV9GXasgleWSxTgmtbs7asp7av4tJ31%2F718UO5CsIAYVtmaoj8YoRbYsApnI9RznhSkaIS3MTcXIYs6pTf39w3hAhaslhJHs4FwMfNXhzd1%2BTQo%2FGtIUfk%2FFMqTC74DUGSfjEC4P5y%2BHAY%2FXKhDUzY7QiVpBV1V58f14oe8ngf785rfN%2F3CPfe1mhNnVBmfQYNr%2BfXK2C453zmt1tcPCQi07IbTup4A8WXO7svzfpeok1RoKnEiTlTG7kJz9MI2YraEN5FKKIVeGf6cLRstaKhVstAfQTxqPQ4F%2BmUSwQdcfCjJwN2wwABPyrth2rMS9vJWR7vfVPTfCEwn03EHR7OaLdkKP4ghrxeCaNCRCV0YhaszMv0XhD5sxUlWabdi8W%2Bn2UzVOVYo6Wz0tshugHoZYm8UaauatuKnVLsVzvdp7Zz%2BIxMNrgxaB42QUhkdMkLqhzOJz8FrQoF9hiVbSKOWC7xr957Tg0L7bAYzI0j6EJf3iFizofqtNXzW9lixjswid06rgpRfTRPgds13TOFC32PjJ8km1o5n%2Fz58cPwcGwXW0PIuANuzHWWS9iCdLwuaugWCiGBMrcYYyfkmGfxvCY%2FnGa1sWRzDe3dDCBjqkAUw01NPCf2wVioTHUHP1EZSk3hqu8nd2CtXY3Fm4FJuH1lCHumnMjHFmNBZ1c3A%2Bhd0Yznzv8xm7AYdleuUf7NjHWRTaXNBuew0iEK%2FsPcxd18aIb%2Fo5WhC0%2B5K%2FRw6mJC%2FEKgDjfEUDmWSJB1MOFG5WmNnVmuvX6siajoSjGCGOUjfrV6KMN5%2BtpEffHXmLw6ZNhSXbjQ3Xkf7oWq%2Bi8w2eQMJU&X-Amz-Signature=6ae23098c3d4db120d54272009ecd0e6969be71ff2f11fe7222ce0d1010043d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
