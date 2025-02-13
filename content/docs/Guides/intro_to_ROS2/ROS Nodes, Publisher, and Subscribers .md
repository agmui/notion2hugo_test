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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINAD2B2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdn6TGTZOg4HMJx6o1FAgW3%2FzotMaHyKlBMjkML2ot8AiBa8nhTCz4MGs%2FA2%2Fqh2bbnoOzLYsKbTW9cDt6b0pNlOyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM8h03e4UR7xzRl6pmKtwDvQGUY%2BOuL5WutpQxY3WXkdi3O5%2FsPOh9xXJyKM7NvTbdPIj9b90LAcWq7xz6nmoo8CIn2%2FTymGtzpCB%2BJARgGUj2dVKCIyMB0Q39oHMb%2B0Uyo3dBU2sCYqcb74I6Tuwoc26ApvZAxqor5LmO5uP56bDeNKWuz9%2B1I8AJtmX6lCC9f4lHZpaq95Jazn5kDixroIb3vnMr6RLhn1%2BjpbVT2CDLsrxJutbYl%2FtFwQBPutXLBPLA63A2poIDv0fs0K%2FWKgkTJNy%2FRKdNpr42RLd0o%2FAc3DVSkiuAMqYak%2BYLPk%2Fh%2FNgvYxPfell%2FIaFPigsuTm0DhcOeOkY7QrVGvOtcMKB8ZECHfKpp2vHz21m2iqKSnrFdp4trvgqvAm6YN%2B1PWtB1kI1zFClX0CRE4HIxSxQGZZcz4m2a4fG90vehvtkjYb3TboSKckL%2B4se3xejwlKknUlDsao4eFmSEYnsO8SJvrIhE9V9IbSnamXMeYe%2FW6Bs6iICHhayVVtGrO2paooSiX7SAY%2FwyUDrdHqBghZwwjMTjxcP%2BncoBZ1ivmicHiMxVw5%2Bxw4mUoRPfCqn24IH%2BoPcaSuE4P31aKRnlF560fgbu896kFxmavYxflduZSqW%2B%2ByB8u5yhHyowpN%2B4vQY6pgEn%2Bfjn39L7WZ4gzrYf%2B0mUt82ZDWH9F10bEUe1Pj3g8pjwgRsJhWdrA6%2BGVe%2FtyZAHeWypy5QSZ6illsYQcCMe7MMWK053nTSdyAhQ4Lm%2F0PSHygSeIKMWzCXCDykNZNVA4X8Tm1OUh9PpXeNccC8Sz2HFz84WOfXWCl3ySDlqpAEN9K1vK93qDAPnEdl5yvRZ%2FUmABtgTBIkV4ZUGMN3x2sj9LUFA&X-Amz-Signature=de16f2b534c1999e27446031dcdf80b170d5a7f7433bb556a868e4b068eb9bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINAD2B2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdn6TGTZOg4HMJx6o1FAgW3%2FzotMaHyKlBMjkML2ot8AiBa8nhTCz4MGs%2FA2%2Fqh2bbnoOzLYsKbTW9cDt6b0pNlOyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM8h03e4UR7xzRl6pmKtwDvQGUY%2BOuL5WutpQxY3WXkdi3O5%2FsPOh9xXJyKM7NvTbdPIj9b90LAcWq7xz6nmoo8CIn2%2FTymGtzpCB%2BJARgGUj2dVKCIyMB0Q39oHMb%2B0Uyo3dBU2sCYqcb74I6Tuwoc26ApvZAxqor5LmO5uP56bDeNKWuz9%2B1I8AJtmX6lCC9f4lHZpaq95Jazn5kDixroIb3vnMr6RLhn1%2BjpbVT2CDLsrxJutbYl%2FtFwQBPutXLBPLA63A2poIDv0fs0K%2FWKgkTJNy%2FRKdNpr42RLd0o%2FAc3DVSkiuAMqYak%2BYLPk%2Fh%2FNgvYxPfell%2FIaFPigsuTm0DhcOeOkY7QrVGvOtcMKB8ZECHfKpp2vHz21m2iqKSnrFdp4trvgqvAm6YN%2B1PWtB1kI1zFClX0CRE4HIxSxQGZZcz4m2a4fG90vehvtkjYb3TboSKckL%2B4se3xejwlKknUlDsao4eFmSEYnsO8SJvrIhE9V9IbSnamXMeYe%2FW6Bs6iICHhayVVtGrO2paooSiX7SAY%2FwyUDrdHqBghZwwjMTjxcP%2BncoBZ1ivmicHiMxVw5%2Bxw4mUoRPfCqn24IH%2BoPcaSuE4P31aKRnlF560fgbu896kFxmavYxflduZSqW%2B%2ByB8u5yhHyowpN%2B4vQY6pgEn%2Bfjn39L7WZ4gzrYf%2B0mUt82ZDWH9F10bEUe1Pj3g8pjwgRsJhWdrA6%2BGVe%2FtyZAHeWypy5QSZ6illsYQcCMe7MMWK053nTSdyAhQ4Lm%2F0PSHygSeIKMWzCXCDykNZNVA4X8Tm1OUh9PpXeNccC8Sz2HFz84WOfXWCl3ySDlqpAEN9K1vK93qDAPnEdl5yvRZ%2FUmABtgTBIkV4ZUGMN3x2sj9LUFA&X-Amz-Signature=520a072063b165664d2058695936d7843357ef84f1a810a226d9d424aceeecc8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINAD2B2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdn6TGTZOg4HMJx6o1FAgW3%2FzotMaHyKlBMjkML2ot8AiBa8nhTCz4MGs%2FA2%2Fqh2bbnoOzLYsKbTW9cDt6b0pNlOyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM8h03e4UR7xzRl6pmKtwDvQGUY%2BOuL5WutpQxY3WXkdi3O5%2FsPOh9xXJyKM7NvTbdPIj9b90LAcWq7xz6nmoo8CIn2%2FTymGtzpCB%2BJARgGUj2dVKCIyMB0Q39oHMb%2B0Uyo3dBU2sCYqcb74I6Tuwoc26ApvZAxqor5LmO5uP56bDeNKWuz9%2B1I8AJtmX6lCC9f4lHZpaq95Jazn5kDixroIb3vnMr6RLhn1%2BjpbVT2CDLsrxJutbYl%2FtFwQBPutXLBPLA63A2poIDv0fs0K%2FWKgkTJNy%2FRKdNpr42RLd0o%2FAc3DVSkiuAMqYak%2BYLPk%2Fh%2FNgvYxPfell%2FIaFPigsuTm0DhcOeOkY7QrVGvOtcMKB8ZECHfKpp2vHz21m2iqKSnrFdp4trvgqvAm6YN%2B1PWtB1kI1zFClX0CRE4HIxSxQGZZcz4m2a4fG90vehvtkjYb3TboSKckL%2B4se3xejwlKknUlDsao4eFmSEYnsO8SJvrIhE9V9IbSnamXMeYe%2FW6Bs6iICHhayVVtGrO2paooSiX7SAY%2FwyUDrdHqBghZwwjMTjxcP%2BncoBZ1ivmicHiMxVw5%2Bxw4mUoRPfCqn24IH%2BoPcaSuE4P31aKRnlF560fgbu896kFxmavYxflduZSqW%2B%2ByB8u5yhHyowpN%2B4vQY6pgEn%2Bfjn39L7WZ4gzrYf%2B0mUt82ZDWH9F10bEUe1Pj3g8pjwgRsJhWdrA6%2BGVe%2FtyZAHeWypy5QSZ6illsYQcCMe7MMWK053nTSdyAhQ4Lm%2F0PSHygSeIKMWzCXCDykNZNVA4X8Tm1OUh9PpXeNccC8Sz2HFz84WOfXWCl3ySDlqpAEN9K1vK93qDAPnEdl5yvRZ%2FUmABtgTBIkV4ZUGMN3x2sj9LUFA&X-Amz-Signature=d93601eb9910097076b9aca786c697b58bf15b85b2187e5e2cac5ca17a57e082&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINAD2B2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdn6TGTZOg4HMJx6o1FAgW3%2FzotMaHyKlBMjkML2ot8AiBa8nhTCz4MGs%2FA2%2Fqh2bbnoOzLYsKbTW9cDt6b0pNlOyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM8h03e4UR7xzRl6pmKtwDvQGUY%2BOuL5WutpQxY3WXkdi3O5%2FsPOh9xXJyKM7NvTbdPIj9b90LAcWq7xz6nmoo8CIn2%2FTymGtzpCB%2BJARgGUj2dVKCIyMB0Q39oHMb%2B0Uyo3dBU2sCYqcb74I6Tuwoc26ApvZAxqor5LmO5uP56bDeNKWuz9%2B1I8AJtmX6lCC9f4lHZpaq95Jazn5kDixroIb3vnMr6RLhn1%2BjpbVT2CDLsrxJutbYl%2FtFwQBPutXLBPLA63A2poIDv0fs0K%2FWKgkTJNy%2FRKdNpr42RLd0o%2FAc3DVSkiuAMqYak%2BYLPk%2Fh%2FNgvYxPfell%2FIaFPigsuTm0DhcOeOkY7QrVGvOtcMKB8ZECHfKpp2vHz21m2iqKSnrFdp4trvgqvAm6YN%2B1PWtB1kI1zFClX0CRE4HIxSxQGZZcz4m2a4fG90vehvtkjYb3TboSKckL%2B4se3xejwlKknUlDsao4eFmSEYnsO8SJvrIhE9V9IbSnamXMeYe%2FW6Bs6iICHhayVVtGrO2paooSiX7SAY%2FwyUDrdHqBghZwwjMTjxcP%2BncoBZ1ivmicHiMxVw5%2Bxw4mUoRPfCqn24IH%2BoPcaSuE4P31aKRnlF560fgbu896kFxmavYxflduZSqW%2B%2ByB8u5yhHyowpN%2B4vQY6pgEn%2Bfjn39L7WZ4gzrYf%2B0mUt82ZDWH9F10bEUe1Pj3g8pjwgRsJhWdrA6%2BGVe%2FtyZAHeWypy5QSZ6illsYQcCMe7MMWK053nTSdyAhQ4Lm%2F0PSHygSeIKMWzCXCDykNZNVA4X8Tm1OUh9PpXeNccC8Sz2HFz84WOfXWCl3ySDlqpAEN9K1vK93qDAPnEdl5yvRZ%2FUmABtgTBIkV4ZUGMN3x2sj9LUFA&X-Amz-Signature=9884aa8298ed5c8be5cbda49ced9acf3982655ec8e5c78ed602a7e094a42327a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINAD2B2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdn6TGTZOg4HMJx6o1FAgW3%2FzotMaHyKlBMjkML2ot8AiBa8nhTCz4MGs%2FA2%2Fqh2bbnoOzLYsKbTW9cDt6b0pNlOyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM8h03e4UR7xzRl6pmKtwDvQGUY%2BOuL5WutpQxY3WXkdi3O5%2FsPOh9xXJyKM7NvTbdPIj9b90LAcWq7xz6nmoo8CIn2%2FTymGtzpCB%2BJARgGUj2dVKCIyMB0Q39oHMb%2B0Uyo3dBU2sCYqcb74I6Tuwoc26ApvZAxqor5LmO5uP56bDeNKWuz9%2B1I8AJtmX6lCC9f4lHZpaq95Jazn5kDixroIb3vnMr6RLhn1%2BjpbVT2CDLsrxJutbYl%2FtFwQBPutXLBPLA63A2poIDv0fs0K%2FWKgkTJNy%2FRKdNpr42RLd0o%2FAc3DVSkiuAMqYak%2BYLPk%2Fh%2FNgvYxPfell%2FIaFPigsuTm0DhcOeOkY7QrVGvOtcMKB8ZECHfKpp2vHz21m2iqKSnrFdp4trvgqvAm6YN%2B1PWtB1kI1zFClX0CRE4HIxSxQGZZcz4m2a4fG90vehvtkjYb3TboSKckL%2B4se3xejwlKknUlDsao4eFmSEYnsO8SJvrIhE9V9IbSnamXMeYe%2FW6Bs6iICHhayVVtGrO2paooSiX7SAY%2FwyUDrdHqBghZwwjMTjxcP%2BncoBZ1ivmicHiMxVw5%2Bxw4mUoRPfCqn24IH%2BoPcaSuE4P31aKRnlF560fgbu896kFxmavYxflduZSqW%2B%2ByB8u5yhHyowpN%2B4vQY6pgEn%2Bfjn39L7WZ4gzrYf%2B0mUt82ZDWH9F10bEUe1Pj3g8pjwgRsJhWdrA6%2BGVe%2FtyZAHeWypy5QSZ6illsYQcCMe7MMWK053nTSdyAhQ4Lm%2F0PSHygSeIKMWzCXCDykNZNVA4X8Tm1OUh9PpXeNccC8Sz2HFz84WOfXWCl3ySDlqpAEN9K1vK93qDAPnEdl5yvRZ%2FUmABtgTBIkV4ZUGMN3x2sj9LUFA&X-Amz-Signature=8666b1380259dc9aba787b7609c49b6cfac2d4b8520d6d93b04e959b7e68fda9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINAD2B2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdn6TGTZOg4HMJx6o1FAgW3%2FzotMaHyKlBMjkML2ot8AiBa8nhTCz4MGs%2FA2%2Fqh2bbnoOzLYsKbTW9cDt6b0pNlOyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM8h03e4UR7xzRl6pmKtwDvQGUY%2BOuL5WutpQxY3WXkdi3O5%2FsPOh9xXJyKM7NvTbdPIj9b90LAcWq7xz6nmoo8CIn2%2FTymGtzpCB%2BJARgGUj2dVKCIyMB0Q39oHMb%2B0Uyo3dBU2sCYqcb74I6Tuwoc26ApvZAxqor5LmO5uP56bDeNKWuz9%2B1I8AJtmX6lCC9f4lHZpaq95Jazn5kDixroIb3vnMr6RLhn1%2BjpbVT2CDLsrxJutbYl%2FtFwQBPutXLBPLA63A2poIDv0fs0K%2FWKgkTJNy%2FRKdNpr42RLd0o%2FAc3DVSkiuAMqYak%2BYLPk%2Fh%2FNgvYxPfell%2FIaFPigsuTm0DhcOeOkY7QrVGvOtcMKB8ZECHfKpp2vHz21m2iqKSnrFdp4trvgqvAm6YN%2B1PWtB1kI1zFClX0CRE4HIxSxQGZZcz4m2a4fG90vehvtkjYb3TboSKckL%2B4se3xejwlKknUlDsao4eFmSEYnsO8SJvrIhE9V9IbSnamXMeYe%2FW6Bs6iICHhayVVtGrO2paooSiX7SAY%2FwyUDrdHqBghZwwjMTjxcP%2BncoBZ1ivmicHiMxVw5%2Bxw4mUoRPfCqn24IH%2BoPcaSuE4P31aKRnlF560fgbu896kFxmavYxflduZSqW%2B%2ByB8u5yhHyowpN%2B4vQY6pgEn%2Bfjn39L7WZ4gzrYf%2B0mUt82ZDWH9F10bEUe1Pj3g8pjwgRsJhWdrA6%2BGVe%2FtyZAHeWypy5QSZ6illsYQcCMe7MMWK053nTSdyAhQ4Lm%2F0PSHygSeIKMWzCXCDykNZNVA4X8Tm1OUh9PpXeNccC8Sz2HFz84WOfXWCl3ySDlqpAEN9K1vK93qDAPnEdl5yvRZ%2FUmABtgTBIkV4ZUGMN3x2sj9LUFA&X-Amz-Signature=1b28ac80819614a38aa39288d9bfce6760a41f837d2d47ea231d5dac66e11965&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINAD2B2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdn6TGTZOg4HMJx6o1FAgW3%2FzotMaHyKlBMjkML2ot8AiBa8nhTCz4MGs%2FA2%2Fqh2bbnoOzLYsKbTW9cDt6b0pNlOyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM8h03e4UR7xzRl6pmKtwDvQGUY%2BOuL5WutpQxY3WXkdi3O5%2FsPOh9xXJyKM7NvTbdPIj9b90LAcWq7xz6nmoo8CIn2%2FTymGtzpCB%2BJARgGUj2dVKCIyMB0Q39oHMb%2B0Uyo3dBU2sCYqcb74I6Tuwoc26ApvZAxqor5LmO5uP56bDeNKWuz9%2B1I8AJtmX6lCC9f4lHZpaq95Jazn5kDixroIb3vnMr6RLhn1%2BjpbVT2CDLsrxJutbYl%2FtFwQBPutXLBPLA63A2poIDv0fs0K%2FWKgkTJNy%2FRKdNpr42RLd0o%2FAc3DVSkiuAMqYak%2BYLPk%2Fh%2FNgvYxPfell%2FIaFPigsuTm0DhcOeOkY7QrVGvOtcMKB8ZECHfKpp2vHz21m2iqKSnrFdp4trvgqvAm6YN%2B1PWtB1kI1zFClX0CRE4HIxSxQGZZcz4m2a4fG90vehvtkjYb3TboSKckL%2B4se3xejwlKknUlDsao4eFmSEYnsO8SJvrIhE9V9IbSnamXMeYe%2FW6Bs6iICHhayVVtGrO2paooSiX7SAY%2FwyUDrdHqBghZwwjMTjxcP%2BncoBZ1ivmicHiMxVw5%2Bxw4mUoRPfCqn24IH%2BoPcaSuE4P31aKRnlF560fgbu896kFxmavYxflduZSqW%2B%2ByB8u5yhHyowpN%2B4vQY6pgEn%2Bfjn39L7WZ4gzrYf%2B0mUt82ZDWH9F10bEUe1Pj3g8pjwgRsJhWdrA6%2BGVe%2FtyZAHeWypy5QSZ6illsYQcCMe7MMWK053nTSdyAhQ4Lm%2F0PSHygSeIKMWzCXCDykNZNVA4X8Tm1OUh9PpXeNccC8Sz2HFz84WOfXWCl3ySDlqpAEN9K1vK93qDAPnEdl5yvRZ%2FUmABtgTBIkV4ZUGMN3x2sj9LUFA&X-Amz-Signature=3f010503332cc175c47e4091619876d0de637c6d0470ddfacd6863f5686a4863&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINAD2B2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdn6TGTZOg4HMJx6o1FAgW3%2FzotMaHyKlBMjkML2ot8AiBa8nhTCz4MGs%2FA2%2Fqh2bbnoOzLYsKbTW9cDt6b0pNlOyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM8h03e4UR7xzRl6pmKtwDvQGUY%2BOuL5WutpQxY3WXkdi3O5%2FsPOh9xXJyKM7NvTbdPIj9b90LAcWq7xz6nmoo8CIn2%2FTymGtzpCB%2BJARgGUj2dVKCIyMB0Q39oHMb%2B0Uyo3dBU2sCYqcb74I6Tuwoc26ApvZAxqor5LmO5uP56bDeNKWuz9%2B1I8AJtmX6lCC9f4lHZpaq95Jazn5kDixroIb3vnMr6RLhn1%2BjpbVT2CDLsrxJutbYl%2FtFwQBPutXLBPLA63A2poIDv0fs0K%2FWKgkTJNy%2FRKdNpr42RLd0o%2FAc3DVSkiuAMqYak%2BYLPk%2Fh%2FNgvYxPfell%2FIaFPigsuTm0DhcOeOkY7QrVGvOtcMKB8ZECHfKpp2vHz21m2iqKSnrFdp4trvgqvAm6YN%2B1PWtB1kI1zFClX0CRE4HIxSxQGZZcz4m2a4fG90vehvtkjYb3TboSKckL%2B4se3xejwlKknUlDsao4eFmSEYnsO8SJvrIhE9V9IbSnamXMeYe%2FW6Bs6iICHhayVVtGrO2paooSiX7SAY%2FwyUDrdHqBghZwwjMTjxcP%2BncoBZ1ivmicHiMxVw5%2Bxw4mUoRPfCqn24IH%2BoPcaSuE4P31aKRnlF560fgbu896kFxmavYxflduZSqW%2B%2ByB8u5yhHyowpN%2B4vQY6pgEn%2Bfjn39L7WZ4gzrYf%2B0mUt82ZDWH9F10bEUe1Pj3g8pjwgRsJhWdrA6%2BGVe%2FtyZAHeWypy5QSZ6illsYQcCMe7MMWK053nTSdyAhQ4Lm%2F0PSHygSeIKMWzCXCDykNZNVA4X8Tm1OUh9PpXeNccC8Sz2HFz84WOfXWCl3ySDlqpAEN9K1vK93qDAPnEdl5yvRZ%2FUmABtgTBIkV4ZUGMN3x2sj9LUFA&X-Amz-Signature=489a6eb391ff90f5ee944f27a6f44784974320b1c6e0ab185420742689decb85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
