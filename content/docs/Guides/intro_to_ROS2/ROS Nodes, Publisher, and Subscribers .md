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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNFC5ME%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOmlRRP%2BJ%2BGqjLSkI5YihlA0iiWllyU45lT0E%2BEIXl4QIgRjJtLQDVvmUEoSXcOd%2FFCxzSmWVQ9fMfiFUIzfwXCrwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4QFvIrAdgD8yZgOyrcA5%2F5r%2Fdd%2BVnFl%2FnLFS9rQayXw1FtC86oZ2YSi6jaxKGDJDx9FXFK5EWcsZCpXiPNXdpsCIxR33YywUL%2BUf%2F18bVYyZ74s%2BvQa0qsGP3QtiiE6oXnWgufcnE8ivhUNhHBtJDTiE9M9AjstMvYNU1VlOHoFUhgsoGiZBa6TMOvz%2FzSRbocKt%2BV1rckhgk2SCIgpzwyYUQbw%2BL%2FYG2Wz11dEqZ0D%2Bom1oSTw2m0CmgN%2FGjLRTQDymupOt1OwPGyT88QqUozKnVkwzBna8jHMY6oLyNvePpTKDbNcnjyV1%2Bugtv0k5Hxg3AZzeIYBedl7ZtkZLEwFAp82tCvsiFneRas9vXBGEFf0N1isUu2xpe3b%2Fmab5DjGS4iskkuuLSfs1z5fVpADiC%2BCVUyOw%2Fv%2Fsua3XSJpdguDp2VqrSBcLlXiVtNMGPrV8a8ebAAbMNV7B%2FBZhBvAL8GiLO147pJp95ncJ6o0rKeN%2F%2Bu1WeqNoRALf0e0Vmp58Cp96EvSc9jOcoBUAVccPnjO3uBuqQJUIUHuc4OKxAuy8Nn2IQjwb3%2BNw68r1aCEus0i4Cg5AGe0Bjpn7sM9fOSCqBiJXXfd4792TdHCbzoIqwW7BiMqe37FnCHRegZ5hLfO9HqfKApMPDIh84GOqUBhjZCl%2Bps9BV0L8Y3rKUvKpAYBbXbaqbumt8oJCHo3ezW9GXQxiVYnfbHTogCW5XkTwbiyiHhPIRFMhh%2F4gox9gMK4SQIfHGO3V%2Bd2w%2FrIVgqLuxQNa7cQBD%2BoNOWOnCboxGipIAn7qr17KTgjOTLKA87VOgrW7ZyYg39UrZB1%2BNainMCOXnXsrhZdp1klUVr3ufryvU5zCiMXF8oXo6eaEdZ3TTX&X-Amz-Signature=77599bfaee8b89d05d97bd3168af8e9b4169231cafb1fbae6690e647262081a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNFC5ME%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOmlRRP%2BJ%2BGqjLSkI5YihlA0iiWllyU45lT0E%2BEIXl4QIgRjJtLQDVvmUEoSXcOd%2FFCxzSmWVQ9fMfiFUIzfwXCrwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4QFvIrAdgD8yZgOyrcA5%2F5r%2Fdd%2BVnFl%2FnLFS9rQayXw1FtC86oZ2YSi6jaxKGDJDx9FXFK5EWcsZCpXiPNXdpsCIxR33YywUL%2BUf%2F18bVYyZ74s%2BvQa0qsGP3QtiiE6oXnWgufcnE8ivhUNhHBtJDTiE9M9AjstMvYNU1VlOHoFUhgsoGiZBa6TMOvz%2FzSRbocKt%2BV1rckhgk2SCIgpzwyYUQbw%2BL%2FYG2Wz11dEqZ0D%2Bom1oSTw2m0CmgN%2FGjLRTQDymupOt1OwPGyT88QqUozKnVkwzBna8jHMY6oLyNvePpTKDbNcnjyV1%2Bugtv0k5Hxg3AZzeIYBedl7ZtkZLEwFAp82tCvsiFneRas9vXBGEFf0N1isUu2xpe3b%2Fmab5DjGS4iskkuuLSfs1z5fVpADiC%2BCVUyOw%2Fv%2Fsua3XSJpdguDp2VqrSBcLlXiVtNMGPrV8a8ebAAbMNV7B%2FBZhBvAL8GiLO147pJp95ncJ6o0rKeN%2F%2Bu1WeqNoRALf0e0Vmp58Cp96EvSc9jOcoBUAVccPnjO3uBuqQJUIUHuc4OKxAuy8Nn2IQjwb3%2BNw68r1aCEus0i4Cg5AGe0Bjpn7sM9fOSCqBiJXXfd4792TdHCbzoIqwW7BiMqe37FnCHRegZ5hLfO9HqfKApMPDIh84GOqUBhjZCl%2Bps9BV0L8Y3rKUvKpAYBbXbaqbumt8oJCHo3ezW9GXQxiVYnfbHTogCW5XkTwbiyiHhPIRFMhh%2F4gox9gMK4SQIfHGO3V%2Bd2w%2FrIVgqLuxQNa7cQBD%2BoNOWOnCboxGipIAn7qr17KTgjOTLKA87VOgrW7ZyYg39UrZB1%2BNainMCOXnXsrhZdp1klUVr3ufryvU5zCiMXF8oXo6eaEdZ3TTX&X-Amz-Signature=0c3017add9dbb66a803ba165de646e23b16214bb1310a2c66183a85e839bada9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNFC5ME%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOmlRRP%2BJ%2BGqjLSkI5YihlA0iiWllyU45lT0E%2BEIXl4QIgRjJtLQDVvmUEoSXcOd%2FFCxzSmWVQ9fMfiFUIzfwXCrwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4QFvIrAdgD8yZgOyrcA5%2F5r%2Fdd%2BVnFl%2FnLFS9rQayXw1FtC86oZ2YSi6jaxKGDJDx9FXFK5EWcsZCpXiPNXdpsCIxR33YywUL%2BUf%2F18bVYyZ74s%2BvQa0qsGP3QtiiE6oXnWgufcnE8ivhUNhHBtJDTiE9M9AjstMvYNU1VlOHoFUhgsoGiZBa6TMOvz%2FzSRbocKt%2BV1rckhgk2SCIgpzwyYUQbw%2BL%2FYG2Wz11dEqZ0D%2Bom1oSTw2m0CmgN%2FGjLRTQDymupOt1OwPGyT88QqUozKnVkwzBna8jHMY6oLyNvePpTKDbNcnjyV1%2Bugtv0k5Hxg3AZzeIYBedl7ZtkZLEwFAp82tCvsiFneRas9vXBGEFf0N1isUu2xpe3b%2Fmab5DjGS4iskkuuLSfs1z5fVpADiC%2BCVUyOw%2Fv%2Fsua3XSJpdguDp2VqrSBcLlXiVtNMGPrV8a8ebAAbMNV7B%2FBZhBvAL8GiLO147pJp95ncJ6o0rKeN%2F%2Bu1WeqNoRALf0e0Vmp58Cp96EvSc9jOcoBUAVccPnjO3uBuqQJUIUHuc4OKxAuy8Nn2IQjwb3%2BNw68r1aCEus0i4Cg5AGe0Bjpn7sM9fOSCqBiJXXfd4792TdHCbzoIqwW7BiMqe37FnCHRegZ5hLfO9HqfKApMPDIh84GOqUBhjZCl%2Bps9BV0L8Y3rKUvKpAYBbXbaqbumt8oJCHo3ezW9GXQxiVYnfbHTogCW5XkTwbiyiHhPIRFMhh%2F4gox9gMK4SQIfHGO3V%2Bd2w%2FrIVgqLuxQNa7cQBD%2BoNOWOnCboxGipIAn7qr17KTgjOTLKA87VOgrW7ZyYg39UrZB1%2BNainMCOXnXsrhZdp1klUVr3ufryvU5zCiMXF8oXo6eaEdZ3TTX&X-Amz-Signature=b8aecf4ceee1ea14215e56d2c20b120eb2e6148fb72666eba63bd848eb6ff809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNFC5ME%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOmlRRP%2BJ%2BGqjLSkI5YihlA0iiWllyU45lT0E%2BEIXl4QIgRjJtLQDVvmUEoSXcOd%2FFCxzSmWVQ9fMfiFUIzfwXCrwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4QFvIrAdgD8yZgOyrcA5%2F5r%2Fdd%2BVnFl%2FnLFS9rQayXw1FtC86oZ2YSi6jaxKGDJDx9FXFK5EWcsZCpXiPNXdpsCIxR33YywUL%2BUf%2F18bVYyZ74s%2BvQa0qsGP3QtiiE6oXnWgufcnE8ivhUNhHBtJDTiE9M9AjstMvYNU1VlOHoFUhgsoGiZBa6TMOvz%2FzSRbocKt%2BV1rckhgk2SCIgpzwyYUQbw%2BL%2FYG2Wz11dEqZ0D%2Bom1oSTw2m0CmgN%2FGjLRTQDymupOt1OwPGyT88QqUozKnVkwzBna8jHMY6oLyNvePpTKDbNcnjyV1%2Bugtv0k5Hxg3AZzeIYBedl7ZtkZLEwFAp82tCvsiFneRas9vXBGEFf0N1isUu2xpe3b%2Fmab5DjGS4iskkuuLSfs1z5fVpADiC%2BCVUyOw%2Fv%2Fsua3XSJpdguDp2VqrSBcLlXiVtNMGPrV8a8ebAAbMNV7B%2FBZhBvAL8GiLO147pJp95ncJ6o0rKeN%2F%2Bu1WeqNoRALf0e0Vmp58Cp96EvSc9jOcoBUAVccPnjO3uBuqQJUIUHuc4OKxAuy8Nn2IQjwb3%2BNw68r1aCEus0i4Cg5AGe0Bjpn7sM9fOSCqBiJXXfd4792TdHCbzoIqwW7BiMqe37FnCHRegZ5hLfO9HqfKApMPDIh84GOqUBhjZCl%2Bps9BV0L8Y3rKUvKpAYBbXbaqbumt8oJCHo3ezW9GXQxiVYnfbHTogCW5XkTwbiyiHhPIRFMhh%2F4gox9gMK4SQIfHGO3V%2Bd2w%2FrIVgqLuxQNa7cQBD%2BoNOWOnCboxGipIAn7qr17KTgjOTLKA87VOgrW7ZyYg39UrZB1%2BNainMCOXnXsrhZdp1klUVr3ufryvU5zCiMXF8oXo6eaEdZ3TTX&X-Amz-Signature=12f113df427ba243efb43afd58a8dc9c46441f7b442eec0f518d4bfc682d9913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNFC5ME%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOmlRRP%2BJ%2BGqjLSkI5YihlA0iiWllyU45lT0E%2BEIXl4QIgRjJtLQDVvmUEoSXcOd%2FFCxzSmWVQ9fMfiFUIzfwXCrwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4QFvIrAdgD8yZgOyrcA5%2F5r%2Fdd%2BVnFl%2FnLFS9rQayXw1FtC86oZ2YSi6jaxKGDJDx9FXFK5EWcsZCpXiPNXdpsCIxR33YywUL%2BUf%2F18bVYyZ74s%2BvQa0qsGP3QtiiE6oXnWgufcnE8ivhUNhHBtJDTiE9M9AjstMvYNU1VlOHoFUhgsoGiZBa6TMOvz%2FzSRbocKt%2BV1rckhgk2SCIgpzwyYUQbw%2BL%2FYG2Wz11dEqZ0D%2Bom1oSTw2m0CmgN%2FGjLRTQDymupOt1OwPGyT88QqUozKnVkwzBna8jHMY6oLyNvePpTKDbNcnjyV1%2Bugtv0k5Hxg3AZzeIYBedl7ZtkZLEwFAp82tCvsiFneRas9vXBGEFf0N1isUu2xpe3b%2Fmab5DjGS4iskkuuLSfs1z5fVpADiC%2BCVUyOw%2Fv%2Fsua3XSJpdguDp2VqrSBcLlXiVtNMGPrV8a8ebAAbMNV7B%2FBZhBvAL8GiLO147pJp95ncJ6o0rKeN%2F%2Bu1WeqNoRALf0e0Vmp58Cp96EvSc9jOcoBUAVccPnjO3uBuqQJUIUHuc4OKxAuy8Nn2IQjwb3%2BNw68r1aCEus0i4Cg5AGe0Bjpn7sM9fOSCqBiJXXfd4792TdHCbzoIqwW7BiMqe37FnCHRegZ5hLfO9HqfKApMPDIh84GOqUBhjZCl%2Bps9BV0L8Y3rKUvKpAYBbXbaqbumt8oJCHo3ezW9GXQxiVYnfbHTogCW5XkTwbiyiHhPIRFMhh%2F4gox9gMK4SQIfHGO3V%2Bd2w%2FrIVgqLuxQNa7cQBD%2BoNOWOnCboxGipIAn7qr17KTgjOTLKA87VOgrW7ZyYg39UrZB1%2BNainMCOXnXsrhZdp1klUVr3ufryvU5zCiMXF8oXo6eaEdZ3TTX&X-Amz-Signature=7931f6776abc3c6ae6d783280ce2345d5c82408e76d522b957b87789bb3d2336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNFC5ME%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOmlRRP%2BJ%2BGqjLSkI5YihlA0iiWllyU45lT0E%2BEIXl4QIgRjJtLQDVvmUEoSXcOd%2FFCxzSmWVQ9fMfiFUIzfwXCrwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4QFvIrAdgD8yZgOyrcA5%2F5r%2Fdd%2BVnFl%2FnLFS9rQayXw1FtC86oZ2YSi6jaxKGDJDx9FXFK5EWcsZCpXiPNXdpsCIxR33YywUL%2BUf%2F18bVYyZ74s%2BvQa0qsGP3QtiiE6oXnWgufcnE8ivhUNhHBtJDTiE9M9AjstMvYNU1VlOHoFUhgsoGiZBa6TMOvz%2FzSRbocKt%2BV1rckhgk2SCIgpzwyYUQbw%2BL%2FYG2Wz11dEqZ0D%2Bom1oSTw2m0CmgN%2FGjLRTQDymupOt1OwPGyT88QqUozKnVkwzBna8jHMY6oLyNvePpTKDbNcnjyV1%2Bugtv0k5Hxg3AZzeIYBedl7ZtkZLEwFAp82tCvsiFneRas9vXBGEFf0N1isUu2xpe3b%2Fmab5DjGS4iskkuuLSfs1z5fVpADiC%2BCVUyOw%2Fv%2Fsua3XSJpdguDp2VqrSBcLlXiVtNMGPrV8a8ebAAbMNV7B%2FBZhBvAL8GiLO147pJp95ncJ6o0rKeN%2F%2Bu1WeqNoRALf0e0Vmp58Cp96EvSc9jOcoBUAVccPnjO3uBuqQJUIUHuc4OKxAuy8Nn2IQjwb3%2BNw68r1aCEus0i4Cg5AGe0Bjpn7sM9fOSCqBiJXXfd4792TdHCbzoIqwW7BiMqe37FnCHRegZ5hLfO9HqfKApMPDIh84GOqUBhjZCl%2Bps9BV0L8Y3rKUvKpAYBbXbaqbumt8oJCHo3ezW9GXQxiVYnfbHTogCW5XkTwbiyiHhPIRFMhh%2F4gox9gMK4SQIfHGO3V%2Bd2w%2FrIVgqLuxQNa7cQBD%2BoNOWOnCboxGipIAn7qr17KTgjOTLKA87VOgrW7ZyYg39UrZB1%2BNainMCOXnXsrhZdp1klUVr3ufryvU5zCiMXF8oXo6eaEdZ3TTX&X-Amz-Signature=28eeb76fdb6003adda3dc535b5613979bc86d8f9faf53f34cea9318d76facae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNFC5ME%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOmlRRP%2BJ%2BGqjLSkI5YihlA0iiWllyU45lT0E%2BEIXl4QIgRjJtLQDVvmUEoSXcOd%2FFCxzSmWVQ9fMfiFUIzfwXCrwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4QFvIrAdgD8yZgOyrcA5%2F5r%2Fdd%2BVnFl%2FnLFS9rQayXw1FtC86oZ2YSi6jaxKGDJDx9FXFK5EWcsZCpXiPNXdpsCIxR33YywUL%2BUf%2F18bVYyZ74s%2BvQa0qsGP3QtiiE6oXnWgufcnE8ivhUNhHBtJDTiE9M9AjstMvYNU1VlOHoFUhgsoGiZBa6TMOvz%2FzSRbocKt%2BV1rckhgk2SCIgpzwyYUQbw%2BL%2FYG2Wz11dEqZ0D%2Bom1oSTw2m0CmgN%2FGjLRTQDymupOt1OwPGyT88QqUozKnVkwzBna8jHMY6oLyNvePpTKDbNcnjyV1%2Bugtv0k5Hxg3AZzeIYBedl7ZtkZLEwFAp82tCvsiFneRas9vXBGEFf0N1isUu2xpe3b%2Fmab5DjGS4iskkuuLSfs1z5fVpADiC%2BCVUyOw%2Fv%2Fsua3XSJpdguDp2VqrSBcLlXiVtNMGPrV8a8ebAAbMNV7B%2FBZhBvAL8GiLO147pJp95ncJ6o0rKeN%2F%2Bu1WeqNoRALf0e0Vmp58Cp96EvSc9jOcoBUAVccPnjO3uBuqQJUIUHuc4OKxAuy8Nn2IQjwb3%2BNw68r1aCEus0i4Cg5AGe0Bjpn7sM9fOSCqBiJXXfd4792TdHCbzoIqwW7BiMqe37FnCHRegZ5hLfO9HqfKApMPDIh84GOqUBhjZCl%2Bps9BV0L8Y3rKUvKpAYBbXbaqbumt8oJCHo3ezW9GXQxiVYnfbHTogCW5XkTwbiyiHhPIRFMhh%2F4gox9gMK4SQIfHGO3V%2Bd2w%2FrIVgqLuxQNa7cQBD%2BoNOWOnCboxGipIAn7qr17KTgjOTLKA87VOgrW7ZyYg39UrZB1%2BNainMCOXnXsrhZdp1klUVr3ufryvU5zCiMXF8oXo6eaEdZ3TTX&X-Amz-Signature=0d6de6a0dddccd04a99b31f1c8b0a7add75b9e6d30e728afd001c9e53b7413bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNFC5ME%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOmlRRP%2BJ%2BGqjLSkI5YihlA0iiWllyU45lT0E%2BEIXl4QIgRjJtLQDVvmUEoSXcOd%2FFCxzSmWVQ9fMfiFUIzfwXCrwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4QFvIrAdgD8yZgOyrcA5%2F5r%2Fdd%2BVnFl%2FnLFS9rQayXw1FtC86oZ2YSi6jaxKGDJDx9FXFK5EWcsZCpXiPNXdpsCIxR33YywUL%2BUf%2F18bVYyZ74s%2BvQa0qsGP3QtiiE6oXnWgufcnE8ivhUNhHBtJDTiE9M9AjstMvYNU1VlOHoFUhgsoGiZBa6TMOvz%2FzSRbocKt%2BV1rckhgk2SCIgpzwyYUQbw%2BL%2FYG2Wz11dEqZ0D%2Bom1oSTw2m0CmgN%2FGjLRTQDymupOt1OwPGyT88QqUozKnVkwzBna8jHMY6oLyNvePpTKDbNcnjyV1%2Bugtv0k5Hxg3AZzeIYBedl7ZtkZLEwFAp82tCvsiFneRas9vXBGEFf0N1isUu2xpe3b%2Fmab5DjGS4iskkuuLSfs1z5fVpADiC%2BCVUyOw%2Fv%2Fsua3XSJpdguDp2VqrSBcLlXiVtNMGPrV8a8ebAAbMNV7B%2FBZhBvAL8GiLO147pJp95ncJ6o0rKeN%2F%2Bu1WeqNoRALf0e0Vmp58Cp96EvSc9jOcoBUAVccPnjO3uBuqQJUIUHuc4OKxAuy8Nn2IQjwb3%2BNw68r1aCEus0i4Cg5AGe0Bjpn7sM9fOSCqBiJXXfd4792TdHCbzoIqwW7BiMqe37FnCHRegZ5hLfO9HqfKApMPDIh84GOqUBhjZCl%2Bps9BV0L8Y3rKUvKpAYBbXbaqbumt8oJCHo3ezW9GXQxiVYnfbHTogCW5XkTwbiyiHhPIRFMhh%2F4gox9gMK4SQIfHGO3V%2Bd2w%2FrIVgqLuxQNa7cQBD%2BoNOWOnCboxGipIAn7qr17KTgjOTLKA87VOgrW7ZyYg39UrZB1%2BNainMCOXnXsrhZdp1klUVr3ufryvU5zCiMXF8oXo6eaEdZ3TTX&X-Amz-Signature=04e8e8c3eac7cc3f936fd906edad6c85b5fddafd7847effbfa5cc45af3a5a790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
