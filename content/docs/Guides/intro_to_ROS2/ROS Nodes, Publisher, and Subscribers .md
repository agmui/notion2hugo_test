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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YH66B6V%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDClotZQuq5zs3gTS81TcZafNNmeF9U0WClFC2xaomfPQIhAPx4PfPT0bXgg93y%2F9efyOCeRl0pvPd%2FLDOuLUPaxXkzKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3jkbt28Mp004iQisq3ANf4b%2B%2BuRlp%2F66PobXuOVplTw9KrScebE598N0BeZ%2FRJ6L6QFvynqY%2Fvp8JLc1HCqB9MQ4oYzkuW8s1v08DXxy9zx93Hmjy8tIqMJrpWUsGRsj1siI7P0l06lXL%2BcmZL%2BrEwojuzJJbF%2BdoQcy4uydDfxByyUqK%2FXVD2w9RoGh8pAD19tEMkFtPNX0ErBIJiA9xnfb1Ctj1pd6zVg8cm9dimSn5eDhsFyQFYi1rEvUfUhxbGt7ayK9ccikP439oOsfi39bdLL%2FfompnMIVbccbxUyOjQkxchNcVMgqK%2Fwn2B4Cwxl8lHAiEMkaswObNFdBkGhDNw73WVatdAVRlv8njcA2SW1osJr%2FYqiGPJIjyBmGs2cy3T4iI7VRD5jbvdBAMrx63Hb6KqBlH4Gd24C0nIacKy5JJUQlCEsGFfPK%2FSZm9%2B0xqm%2BRG5ZYcgX4z0DPggmYjcVVWBwT%2FvHQ1lkOtWl1eB2rF9Wt29Ajbc6nPjZcBqHY1w1AWQ8ykJX2Pmh7CZjpEUXXdmWwREYwl73gKhIYZQ0ihPA6WhKoJravIXqtG8wgqB9ujYdhS2L7KuXX8hsgNfchWk4DYxKCP95QmlnbXZlSzGs8kHrnw0TW9iP8x5qQGpoB2QxCiLDC8p8LABjqkAWNBp5aJWe9RbtBYo3m72gJuzesaG%2FJJaDt%2BgCzN%2B%2Fgnr0Oeuy%2FI57iSZBZK6%2FlebRY6n%2BvcM6YlbEp%2BJfH2DDLovjVybIXPIE1%2BtbSyLJFeLeDuh%2BZ1e7bQQg6XEH2NrF1L4bhnFIhZpQgECD5tt%2B0pJgF3S2oFeXE1%2F8NaYoVYCzV48B5CEPe2d2A7QgTjd79bNXKfheLnS0H%2FZtXjeDVwkZEt&X-Amz-Signature=65e6ac277bc8e8081a217245842a81eb51370e8159ee13fac91b2bcba8e1e797&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YH66B6V%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDClotZQuq5zs3gTS81TcZafNNmeF9U0WClFC2xaomfPQIhAPx4PfPT0bXgg93y%2F9efyOCeRl0pvPd%2FLDOuLUPaxXkzKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3jkbt28Mp004iQisq3ANf4b%2B%2BuRlp%2F66PobXuOVplTw9KrScebE598N0BeZ%2FRJ6L6QFvynqY%2Fvp8JLc1HCqB9MQ4oYzkuW8s1v08DXxy9zx93Hmjy8tIqMJrpWUsGRsj1siI7P0l06lXL%2BcmZL%2BrEwojuzJJbF%2BdoQcy4uydDfxByyUqK%2FXVD2w9RoGh8pAD19tEMkFtPNX0ErBIJiA9xnfb1Ctj1pd6zVg8cm9dimSn5eDhsFyQFYi1rEvUfUhxbGt7ayK9ccikP439oOsfi39bdLL%2FfompnMIVbccbxUyOjQkxchNcVMgqK%2Fwn2B4Cwxl8lHAiEMkaswObNFdBkGhDNw73WVatdAVRlv8njcA2SW1osJr%2FYqiGPJIjyBmGs2cy3T4iI7VRD5jbvdBAMrx63Hb6KqBlH4Gd24C0nIacKy5JJUQlCEsGFfPK%2FSZm9%2B0xqm%2BRG5ZYcgX4z0DPggmYjcVVWBwT%2FvHQ1lkOtWl1eB2rF9Wt29Ajbc6nPjZcBqHY1w1AWQ8ykJX2Pmh7CZjpEUXXdmWwREYwl73gKhIYZQ0ihPA6WhKoJravIXqtG8wgqB9ujYdhS2L7KuXX8hsgNfchWk4DYxKCP95QmlnbXZlSzGs8kHrnw0TW9iP8x5qQGpoB2QxCiLDC8p8LABjqkAWNBp5aJWe9RbtBYo3m72gJuzesaG%2FJJaDt%2BgCzN%2B%2Fgnr0Oeuy%2FI57iSZBZK6%2FlebRY6n%2BvcM6YlbEp%2BJfH2DDLovjVybIXPIE1%2BtbSyLJFeLeDuh%2BZ1e7bQQg6XEH2NrF1L4bhnFIhZpQgECD5tt%2B0pJgF3S2oFeXE1%2F8NaYoVYCzV48B5CEPe2d2A7QgTjd79bNXKfheLnS0H%2FZtXjeDVwkZEt&X-Amz-Signature=abb3bdd3ea03e42e1ee6c01d58e6a9c5b6c0d4329e665cd69f1daefc05350ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YH66B6V%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDClotZQuq5zs3gTS81TcZafNNmeF9U0WClFC2xaomfPQIhAPx4PfPT0bXgg93y%2F9efyOCeRl0pvPd%2FLDOuLUPaxXkzKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3jkbt28Mp004iQisq3ANf4b%2B%2BuRlp%2F66PobXuOVplTw9KrScebE598N0BeZ%2FRJ6L6QFvynqY%2Fvp8JLc1HCqB9MQ4oYzkuW8s1v08DXxy9zx93Hmjy8tIqMJrpWUsGRsj1siI7P0l06lXL%2BcmZL%2BrEwojuzJJbF%2BdoQcy4uydDfxByyUqK%2FXVD2w9RoGh8pAD19tEMkFtPNX0ErBIJiA9xnfb1Ctj1pd6zVg8cm9dimSn5eDhsFyQFYi1rEvUfUhxbGt7ayK9ccikP439oOsfi39bdLL%2FfompnMIVbccbxUyOjQkxchNcVMgqK%2Fwn2B4Cwxl8lHAiEMkaswObNFdBkGhDNw73WVatdAVRlv8njcA2SW1osJr%2FYqiGPJIjyBmGs2cy3T4iI7VRD5jbvdBAMrx63Hb6KqBlH4Gd24C0nIacKy5JJUQlCEsGFfPK%2FSZm9%2B0xqm%2BRG5ZYcgX4z0DPggmYjcVVWBwT%2FvHQ1lkOtWl1eB2rF9Wt29Ajbc6nPjZcBqHY1w1AWQ8ykJX2Pmh7CZjpEUXXdmWwREYwl73gKhIYZQ0ihPA6WhKoJravIXqtG8wgqB9ujYdhS2L7KuXX8hsgNfchWk4DYxKCP95QmlnbXZlSzGs8kHrnw0TW9iP8x5qQGpoB2QxCiLDC8p8LABjqkAWNBp5aJWe9RbtBYo3m72gJuzesaG%2FJJaDt%2BgCzN%2B%2Fgnr0Oeuy%2FI57iSZBZK6%2FlebRY6n%2BvcM6YlbEp%2BJfH2DDLovjVybIXPIE1%2BtbSyLJFeLeDuh%2BZ1e7bQQg6XEH2NrF1L4bhnFIhZpQgECD5tt%2B0pJgF3S2oFeXE1%2F8NaYoVYCzV48B5CEPe2d2A7QgTjd79bNXKfheLnS0H%2FZtXjeDVwkZEt&X-Amz-Signature=f5874e3d4d5e2a56ce45ad0a27bf1fb82e2c5912afb10b24e343afdb8093b2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YH66B6V%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDClotZQuq5zs3gTS81TcZafNNmeF9U0WClFC2xaomfPQIhAPx4PfPT0bXgg93y%2F9efyOCeRl0pvPd%2FLDOuLUPaxXkzKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3jkbt28Mp004iQisq3ANf4b%2B%2BuRlp%2F66PobXuOVplTw9KrScebE598N0BeZ%2FRJ6L6QFvynqY%2Fvp8JLc1HCqB9MQ4oYzkuW8s1v08DXxy9zx93Hmjy8tIqMJrpWUsGRsj1siI7P0l06lXL%2BcmZL%2BrEwojuzJJbF%2BdoQcy4uydDfxByyUqK%2FXVD2w9RoGh8pAD19tEMkFtPNX0ErBIJiA9xnfb1Ctj1pd6zVg8cm9dimSn5eDhsFyQFYi1rEvUfUhxbGt7ayK9ccikP439oOsfi39bdLL%2FfompnMIVbccbxUyOjQkxchNcVMgqK%2Fwn2B4Cwxl8lHAiEMkaswObNFdBkGhDNw73WVatdAVRlv8njcA2SW1osJr%2FYqiGPJIjyBmGs2cy3T4iI7VRD5jbvdBAMrx63Hb6KqBlH4Gd24C0nIacKy5JJUQlCEsGFfPK%2FSZm9%2B0xqm%2BRG5ZYcgX4z0DPggmYjcVVWBwT%2FvHQ1lkOtWl1eB2rF9Wt29Ajbc6nPjZcBqHY1w1AWQ8ykJX2Pmh7CZjpEUXXdmWwREYwl73gKhIYZQ0ihPA6WhKoJravIXqtG8wgqB9ujYdhS2L7KuXX8hsgNfchWk4DYxKCP95QmlnbXZlSzGs8kHrnw0TW9iP8x5qQGpoB2QxCiLDC8p8LABjqkAWNBp5aJWe9RbtBYo3m72gJuzesaG%2FJJaDt%2BgCzN%2B%2Fgnr0Oeuy%2FI57iSZBZK6%2FlebRY6n%2BvcM6YlbEp%2BJfH2DDLovjVybIXPIE1%2BtbSyLJFeLeDuh%2BZ1e7bQQg6XEH2NrF1L4bhnFIhZpQgECD5tt%2B0pJgF3S2oFeXE1%2F8NaYoVYCzV48B5CEPe2d2A7QgTjd79bNXKfheLnS0H%2FZtXjeDVwkZEt&X-Amz-Signature=6244e821f9750118cc9403cadd001963d78da9e26f636609f09be86f5aafb646&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YH66B6V%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDClotZQuq5zs3gTS81TcZafNNmeF9U0WClFC2xaomfPQIhAPx4PfPT0bXgg93y%2F9efyOCeRl0pvPd%2FLDOuLUPaxXkzKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3jkbt28Mp004iQisq3ANf4b%2B%2BuRlp%2F66PobXuOVplTw9KrScebE598N0BeZ%2FRJ6L6QFvynqY%2Fvp8JLc1HCqB9MQ4oYzkuW8s1v08DXxy9zx93Hmjy8tIqMJrpWUsGRsj1siI7P0l06lXL%2BcmZL%2BrEwojuzJJbF%2BdoQcy4uydDfxByyUqK%2FXVD2w9RoGh8pAD19tEMkFtPNX0ErBIJiA9xnfb1Ctj1pd6zVg8cm9dimSn5eDhsFyQFYi1rEvUfUhxbGt7ayK9ccikP439oOsfi39bdLL%2FfompnMIVbccbxUyOjQkxchNcVMgqK%2Fwn2B4Cwxl8lHAiEMkaswObNFdBkGhDNw73WVatdAVRlv8njcA2SW1osJr%2FYqiGPJIjyBmGs2cy3T4iI7VRD5jbvdBAMrx63Hb6KqBlH4Gd24C0nIacKy5JJUQlCEsGFfPK%2FSZm9%2B0xqm%2BRG5ZYcgX4z0DPggmYjcVVWBwT%2FvHQ1lkOtWl1eB2rF9Wt29Ajbc6nPjZcBqHY1w1AWQ8ykJX2Pmh7CZjpEUXXdmWwREYwl73gKhIYZQ0ihPA6WhKoJravIXqtG8wgqB9ujYdhS2L7KuXX8hsgNfchWk4DYxKCP95QmlnbXZlSzGs8kHrnw0TW9iP8x5qQGpoB2QxCiLDC8p8LABjqkAWNBp5aJWe9RbtBYo3m72gJuzesaG%2FJJaDt%2BgCzN%2B%2Fgnr0Oeuy%2FI57iSZBZK6%2FlebRY6n%2BvcM6YlbEp%2BJfH2DDLovjVybIXPIE1%2BtbSyLJFeLeDuh%2BZ1e7bQQg6XEH2NrF1L4bhnFIhZpQgECD5tt%2B0pJgF3S2oFeXE1%2F8NaYoVYCzV48B5CEPe2d2A7QgTjd79bNXKfheLnS0H%2FZtXjeDVwkZEt&X-Amz-Signature=d8bb5f74bc38d0f356a2df12bcc8aa9bcad6b0538157946aaf1a44a24c794559&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YH66B6V%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDClotZQuq5zs3gTS81TcZafNNmeF9U0WClFC2xaomfPQIhAPx4PfPT0bXgg93y%2F9efyOCeRl0pvPd%2FLDOuLUPaxXkzKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3jkbt28Mp004iQisq3ANf4b%2B%2BuRlp%2F66PobXuOVplTw9KrScebE598N0BeZ%2FRJ6L6QFvynqY%2Fvp8JLc1HCqB9MQ4oYzkuW8s1v08DXxy9zx93Hmjy8tIqMJrpWUsGRsj1siI7P0l06lXL%2BcmZL%2BrEwojuzJJbF%2BdoQcy4uydDfxByyUqK%2FXVD2w9RoGh8pAD19tEMkFtPNX0ErBIJiA9xnfb1Ctj1pd6zVg8cm9dimSn5eDhsFyQFYi1rEvUfUhxbGt7ayK9ccikP439oOsfi39bdLL%2FfompnMIVbccbxUyOjQkxchNcVMgqK%2Fwn2B4Cwxl8lHAiEMkaswObNFdBkGhDNw73WVatdAVRlv8njcA2SW1osJr%2FYqiGPJIjyBmGs2cy3T4iI7VRD5jbvdBAMrx63Hb6KqBlH4Gd24C0nIacKy5JJUQlCEsGFfPK%2FSZm9%2B0xqm%2BRG5ZYcgX4z0DPggmYjcVVWBwT%2FvHQ1lkOtWl1eB2rF9Wt29Ajbc6nPjZcBqHY1w1AWQ8ykJX2Pmh7CZjpEUXXdmWwREYwl73gKhIYZQ0ihPA6WhKoJravIXqtG8wgqB9ujYdhS2L7KuXX8hsgNfchWk4DYxKCP95QmlnbXZlSzGs8kHrnw0TW9iP8x5qQGpoB2QxCiLDC8p8LABjqkAWNBp5aJWe9RbtBYo3m72gJuzesaG%2FJJaDt%2BgCzN%2B%2Fgnr0Oeuy%2FI57iSZBZK6%2FlebRY6n%2BvcM6YlbEp%2BJfH2DDLovjVybIXPIE1%2BtbSyLJFeLeDuh%2BZ1e7bQQg6XEH2NrF1L4bhnFIhZpQgECD5tt%2B0pJgF3S2oFeXE1%2F8NaYoVYCzV48B5CEPe2d2A7QgTjd79bNXKfheLnS0H%2FZtXjeDVwkZEt&X-Amz-Signature=7f56ef4f99c558b433a9d6552c62728a449207c4f365a71035e943fd467e81f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YH66B6V%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDClotZQuq5zs3gTS81TcZafNNmeF9U0WClFC2xaomfPQIhAPx4PfPT0bXgg93y%2F9efyOCeRl0pvPd%2FLDOuLUPaxXkzKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3jkbt28Mp004iQisq3ANf4b%2B%2BuRlp%2F66PobXuOVplTw9KrScebE598N0BeZ%2FRJ6L6QFvynqY%2Fvp8JLc1HCqB9MQ4oYzkuW8s1v08DXxy9zx93Hmjy8tIqMJrpWUsGRsj1siI7P0l06lXL%2BcmZL%2BrEwojuzJJbF%2BdoQcy4uydDfxByyUqK%2FXVD2w9RoGh8pAD19tEMkFtPNX0ErBIJiA9xnfb1Ctj1pd6zVg8cm9dimSn5eDhsFyQFYi1rEvUfUhxbGt7ayK9ccikP439oOsfi39bdLL%2FfompnMIVbccbxUyOjQkxchNcVMgqK%2Fwn2B4Cwxl8lHAiEMkaswObNFdBkGhDNw73WVatdAVRlv8njcA2SW1osJr%2FYqiGPJIjyBmGs2cy3T4iI7VRD5jbvdBAMrx63Hb6KqBlH4Gd24C0nIacKy5JJUQlCEsGFfPK%2FSZm9%2B0xqm%2BRG5ZYcgX4z0DPggmYjcVVWBwT%2FvHQ1lkOtWl1eB2rF9Wt29Ajbc6nPjZcBqHY1w1AWQ8ykJX2Pmh7CZjpEUXXdmWwREYwl73gKhIYZQ0ihPA6WhKoJravIXqtG8wgqB9ujYdhS2L7KuXX8hsgNfchWk4DYxKCP95QmlnbXZlSzGs8kHrnw0TW9iP8x5qQGpoB2QxCiLDC8p8LABjqkAWNBp5aJWe9RbtBYo3m72gJuzesaG%2FJJaDt%2BgCzN%2B%2Fgnr0Oeuy%2FI57iSZBZK6%2FlebRY6n%2BvcM6YlbEp%2BJfH2DDLovjVybIXPIE1%2BtbSyLJFeLeDuh%2BZ1e7bQQg6XEH2NrF1L4bhnFIhZpQgECD5tt%2B0pJgF3S2oFeXE1%2F8NaYoVYCzV48B5CEPe2d2A7QgTjd79bNXKfheLnS0H%2FZtXjeDVwkZEt&X-Amz-Signature=2b8d65f110fb5bab6b8fbde8b2f2444c4ad1a65f734914f9be0d4c36e4ee2327&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YH66B6V%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDClotZQuq5zs3gTS81TcZafNNmeF9U0WClFC2xaomfPQIhAPx4PfPT0bXgg93y%2F9efyOCeRl0pvPd%2FLDOuLUPaxXkzKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3jkbt28Mp004iQisq3ANf4b%2B%2BuRlp%2F66PobXuOVplTw9KrScebE598N0BeZ%2FRJ6L6QFvynqY%2Fvp8JLc1HCqB9MQ4oYzkuW8s1v08DXxy9zx93Hmjy8tIqMJrpWUsGRsj1siI7P0l06lXL%2BcmZL%2BrEwojuzJJbF%2BdoQcy4uydDfxByyUqK%2FXVD2w9RoGh8pAD19tEMkFtPNX0ErBIJiA9xnfb1Ctj1pd6zVg8cm9dimSn5eDhsFyQFYi1rEvUfUhxbGt7ayK9ccikP439oOsfi39bdLL%2FfompnMIVbccbxUyOjQkxchNcVMgqK%2Fwn2B4Cwxl8lHAiEMkaswObNFdBkGhDNw73WVatdAVRlv8njcA2SW1osJr%2FYqiGPJIjyBmGs2cy3T4iI7VRD5jbvdBAMrx63Hb6KqBlH4Gd24C0nIacKy5JJUQlCEsGFfPK%2FSZm9%2B0xqm%2BRG5ZYcgX4z0DPggmYjcVVWBwT%2FvHQ1lkOtWl1eB2rF9Wt29Ajbc6nPjZcBqHY1w1AWQ8ykJX2Pmh7CZjpEUXXdmWwREYwl73gKhIYZQ0ihPA6WhKoJravIXqtG8wgqB9ujYdhS2L7KuXX8hsgNfchWk4DYxKCP95QmlnbXZlSzGs8kHrnw0TW9iP8x5qQGpoB2QxCiLDC8p8LABjqkAWNBp5aJWe9RbtBYo3m72gJuzesaG%2FJJaDt%2BgCzN%2B%2Fgnr0Oeuy%2FI57iSZBZK6%2FlebRY6n%2BvcM6YlbEp%2BJfH2DDLovjVybIXPIE1%2BtbSyLJFeLeDuh%2BZ1e7bQQg6XEH2NrF1L4bhnFIhZpQgECD5tt%2B0pJgF3S2oFeXE1%2F8NaYoVYCzV48B5CEPe2d2A7QgTjd79bNXKfheLnS0H%2FZtXjeDVwkZEt&X-Amz-Signature=c1edf0b06ecf7934da863b738c74b25b22d24fd41f89e83e1c7cf5682a3e3986&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
