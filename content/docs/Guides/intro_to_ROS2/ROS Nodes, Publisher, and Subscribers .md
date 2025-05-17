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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNNHIXL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeK0dnjIfQZmYCklGImse23cFH4euYBSW6hdWq9DF%2FLgIhAKaokgzIA7FwT3GFmc8h4T5NWeCxhdm242W5KyRWMI8VKv8DCFkQABoMNjM3NDIzMTgzODA1IgznhcAr3vQonZQhy%2F8q3AO5xNh%2FsDFFgrCqajlwA8ZQwIH9FU0fEkLfO2bnR41rQrC5gO2bY5yYvP8PWROT8hVtgz0pPi3DYOyEy0Ln7O6O%2BY7GeZoMWWOsF1ncGAJv7lf2PRthBunXIhpTP8heDxQjTk6RQNjZXAByWeTD7qb5exaHCvbGZKjP4ipkuTsxz4J3ToD9e7cuR0JHUqVl4ZfP6SUyJRXevVNBNh0vPp0hcPTCrRG89%2Bc0Z5gWT58JkxZCevd3YOXK%2F3IeQgGF64qDpnyHFmWfWmQZ5kaCBhG9f43J2NsvXK7LwaETRjhHuVp96TBDs5sDKcKOu9g3GDTkrfVbA8EjMp3kXnD18FiBqT5xCDi4UY4rgEJEZATEylgWMHhYtJxQwVxfPVmqzeJH3mT5gMvu5HAfZfkYzEDReCGRytYKSV%2Bcm4N%2FA11vfvYYpxhCSeLBLkLfol8j8U0ogDG8ndJRYYxX7K2PVhgmzmj6Ebyi%2F9F5mXV4gqcCgBgpvZF8VsZfxsi9SnIgsMncNbl9yBeBCuRFx%2BNR%2B4D5IO4C6vAmFhHwYgrBNNXL3oqJZG%2BBNHlCrDphU8h6xOn94I1%2BLnCsC40inYxnXrvR%2B5ocOwVuBvkQ99%2BcN9QRB1nNsjrPlYiZ4jDe0jDm%2FaDBBjqkAana3l8SjFRbbbpSp%2FFcbt2yYns1pBCrq1sMZe%2Fi8fh%2F%2BABVIKOAN84a5tzFPd48NKLsVVZ3BRZyA%2FTgql5sxYh2hDlW9BU8TiHnk3ba8sfsWSZKR3lpMOEVFTgkckfK0TuDatEC%2BWkaPeP7EkSki7HnvTw3Q3ecE7lmbwPaM%2FTwPgUNug2qb7%2FzUvRXSqnkVdH0a4m5NIJRldc3jeK2Xu2aP1cj&X-Amz-Signature=97e8a34ac6624514575c7a8cf19c76edde85fa73b61edcb1dc12a694c86d6225&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNNHIXL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeK0dnjIfQZmYCklGImse23cFH4euYBSW6hdWq9DF%2FLgIhAKaokgzIA7FwT3GFmc8h4T5NWeCxhdm242W5KyRWMI8VKv8DCFkQABoMNjM3NDIzMTgzODA1IgznhcAr3vQonZQhy%2F8q3AO5xNh%2FsDFFgrCqajlwA8ZQwIH9FU0fEkLfO2bnR41rQrC5gO2bY5yYvP8PWROT8hVtgz0pPi3DYOyEy0Ln7O6O%2BY7GeZoMWWOsF1ncGAJv7lf2PRthBunXIhpTP8heDxQjTk6RQNjZXAByWeTD7qb5exaHCvbGZKjP4ipkuTsxz4J3ToD9e7cuR0JHUqVl4ZfP6SUyJRXevVNBNh0vPp0hcPTCrRG89%2Bc0Z5gWT58JkxZCevd3YOXK%2F3IeQgGF64qDpnyHFmWfWmQZ5kaCBhG9f43J2NsvXK7LwaETRjhHuVp96TBDs5sDKcKOu9g3GDTkrfVbA8EjMp3kXnD18FiBqT5xCDi4UY4rgEJEZATEylgWMHhYtJxQwVxfPVmqzeJH3mT5gMvu5HAfZfkYzEDReCGRytYKSV%2Bcm4N%2FA11vfvYYpxhCSeLBLkLfol8j8U0ogDG8ndJRYYxX7K2PVhgmzmj6Ebyi%2F9F5mXV4gqcCgBgpvZF8VsZfxsi9SnIgsMncNbl9yBeBCuRFx%2BNR%2B4D5IO4C6vAmFhHwYgrBNNXL3oqJZG%2BBNHlCrDphU8h6xOn94I1%2BLnCsC40inYxnXrvR%2B5ocOwVuBvkQ99%2BcN9QRB1nNsjrPlYiZ4jDe0jDm%2FaDBBjqkAana3l8SjFRbbbpSp%2FFcbt2yYns1pBCrq1sMZe%2Fi8fh%2F%2BABVIKOAN84a5tzFPd48NKLsVVZ3BRZyA%2FTgql5sxYh2hDlW9BU8TiHnk3ba8sfsWSZKR3lpMOEVFTgkckfK0TuDatEC%2BWkaPeP7EkSki7HnvTw3Q3ecE7lmbwPaM%2FTwPgUNug2qb7%2FzUvRXSqnkVdH0a4m5NIJRldc3jeK2Xu2aP1cj&X-Amz-Signature=2550bf43d3afd41593d96ee6d912a9e0ed80ca8e2aaf3203bc8c1154096322f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNNHIXL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeK0dnjIfQZmYCklGImse23cFH4euYBSW6hdWq9DF%2FLgIhAKaokgzIA7FwT3GFmc8h4T5NWeCxhdm242W5KyRWMI8VKv8DCFkQABoMNjM3NDIzMTgzODA1IgznhcAr3vQonZQhy%2F8q3AO5xNh%2FsDFFgrCqajlwA8ZQwIH9FU0fEkLfO2bnR41rQrC5gO2bY5yYvP8PWROT8hVtgz0pPi3DYOyEy0Ln7O6O%2BY7GeZoMWWOsF1ncGAJv7lf2PRthBunXIhpTP8heDxQjTk6RQNjZXAByWeTD7qb5exaHCvbGZKjP4ipkuTsxz4J3ToD9e7cuR0JHUqVl4ZfP6SUyJRXevVNBNh0vPp0hcPTCrRG89%2Bc0Z5gWT58JkxZCevd3YOXK%2F3IeQgGF64qDpnyHFmWfWmQZ5kaCBhG9f43J2NsvXK7LwaETRjhHuVp96TBDs5sDKcKOu9g3GDTkrfVbA8EjMp3kXnD18FiBqT5xCDi4UY4rgEJEZATEylgWMHhYtJxQwVxfPVmqzeJH3mT5gMvu5HAfZfkYzEDReCGRytYKSV%2Bcm4N%2FA11vfvYYpxhCSeLBLkLfol8j8U0ogDG8ndJRYYxX7K2PVhgmzmj6Ebyi%2F9F5mXV4gqcCgBgpvZF8VsZfxsi9SnIgsMncNbl9yBeBCuRFx%2BNR%2B4D5IO4C6vAmFhHwYgrBNNXL3oqJZG%2BBNHlCrDphU8h6xOn94I1%2BLnCsC40inYxnXrvR%2B5ocOwVuBvkQ99%2BcN9QRB1nNsjrPlYiZ4jDe0jDm%2FaDBBjqkAana3l8SjFRbbbpSp%2FFcbt2yYns1pBCrq1sMZe%2Fi8fh%2F%2BABVIKOAN84a5tzFPd48NKLsVVZ3BRZyA%2FTgql5sxYh2hDlW9BU8TiHnk3ba8sfsWSZKR3lpMOEVFTgkckfK0TuDatEC%2BWkaPeP7EkSki7HnvTw3Q3ecE7lmbwPaM%2FTwPgUNug2qb7%2FzUvRXSqnkVdH0a4m5NIJRldc3jeK2Xu2aP1cj&X-Amz-Signature=a28c68e9e36b4ddf7d3786c6520ead714ea21608266bb6a97ca1c1fabd6f0803&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNNHIXL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeK0dnjIfQZmYCklGImse23cFH4euYBSW6hdWq9DF%2FLgIhAKaokgzIA7FwT3GFmc8h4T5NWeCxhdm242W5KyRWMI8VKv8DCFkQABoMNjM3NDIzMTgzODA1IgznhcAr3vQonZQhy%2F8q3AO5xNh%2FsDFFgrCqajlwA8ZQwIH9FU0fEkLfO2bnR41rQrC5gO2bY5yYvP8PWROT8hVtgz0pPi3DYOyEy0Ln7O6O%2BY7GeZoMWWOsF1ncGAJv7lf2PRthBunXIhpTP8heDxQjTk6RQNjZXAByWeTD7qb5exaHCvbGZKjP4ipkuTsxz4J3ToD9e7cuR0JHUqVl4ZfP6SUyJRXevVNBNh0vPp0hcPTCrRG89%2Bc0Z5gWT58JkxZCevd3YOXK%2F3IeQgGF64qDpnyHFmWfWmQZ5kaCBhG9f43J2NsvXK7LwaETRjhHuVp96TBDs5sDKcKOu9g3GDTkrfVbA8EjMp3kXnD18FiBqT5xCDi4UY4rgEJEZATEylgWMHhYtJxQwVxfPVmqzeJH3mT5gMvu5HAfZfkYzEDReCGRytYKSV%2Bcm4N%2FA11vfvYYpxhCSeLBLkLfol8j8U0ogDG8ndJRYYxX7K2PVhgmzmj6Ebyi%2F9F5mXV4gqcCgBgpvZF8VsZfxsi9SnIgsMncNbl9yBeBCuRFx%2BNR%2B4D5IO4C6vAmFhHwYgrBNNXL3oqJZG%2BBNHlCrDphU8h6xOn94I1%2BLnCsC40inYxnXrvR%2B5ocOwVuBvkQ99%2BcN9QRB1nNsjrPlYiZ4jDe0jDm%2FaDBBjqkAana3l8SjFRbbbpSp%2FFcbt2yYns1pBCrq1sMZe%2Fi8fh%2F%2BABVIKOAN84a5tzFPd48NKLsVVZ3BRZyA%2FTgql5sxYh2hDlW9BU8TiHnk3ba8sfsWSZKR3lpMOEVFTgkckfK0TuDatEC%2BWkaPeP7EkSki7HnvTw3Q3ecE7lmbwPaM%2FTwPgUNug2qb7%2FzUvRXSqnkVdH0a4m5NIJRldc3jeK2Xu2aP1cj&X-Amz-Signature=3c7b1dbfa3f0a7cc5902a4964b6aae99b258bafabd10afe3795e8b18b1828719&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNNHIXL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeK0dnjIfQZmYCklGImse23cFH4euYBSW6hdWq9DF%2FLgIhAKaokgzIA7FwT3GFmc8h4T5NWeCxhdm242W5KyRWMI8VKv8DCFkQABoMNjM3NDIzMTgzODA1IgznhcAr3vQonZQhy%2F8q3AO5xNh%2FsDFFgrCqajlwA8ZQwIH9FU0fEkLfO2bnR41rQrC5gO2bY5yYvP8PWROT8hVtgz0pPi3DYOyEy0Ln7O6O%2BY7GeZoMWWOsF1ncGAJv7lf2PRthBunXIhpTP8heDxQjTk6RQNjZXAByWeTD7qb5exaHCvbGZKjP4ipkuTsxz4J3ToD9e7cuR0JHUqVl4ZfP6SUyJRXevVNBNh0vPp0hcPTCrRG89%2Bc0Z5gWT58JkxZCevd3YOXK%2F3IeQgGF64qDpnyHFmWfWmQZ5kaCBhG9f43J2NsvXK7LwaETRjhHuVp96TBDs5sDKcKOu9g3GDTkrfVbA8EjMp3kXnD18FiBqT5xCDi4UY4rgEJEZATEylgWMHhYtJxQwVxfPVmqzeJH3mT5gMvu5HAfZfkYzEDReCGRytYKSV%2Bcm4N%2FA11vfvYYpxhCSeLBLkLfol8j8U0ogDG8ndJRYYxX7K2PVhgmzmj6Ebyi%2F9F5mXV4gqcCgBgpvZF8VsZfxsi9SnIgsMncNbl9yBeBCuRFx%2BNR%2B4D5IO4C6vAmFhHwYgrBNNXL3oqJZG%2BBNHlCrDphU8h6xOn94I1%2BLnCsC40inYxnXrvR%2B5ocOwVuBvkQ99%2BcN9QRB1nNsjrPlYiZ4jDe0jDm%2FaDBBjqkAana3l8SjFRbbbpSp%2FFcbt2yYns1pBCrq1sMZe%2Fi8fh%2F%2BABVIKOAN84a5tzFPd48NKLsVVZ3BRZyA%2FTgql5sxYh2hDlW9BU8TiHnk3ba8sfsWSZKR3lpMOEVFTgkckfK0TuDatEC%2BWkaPeP7EkSki7HnvTw3Q3ecE7lmbwPaM%2FTwPgUNug2qb7%2FzUvRXSqnkVdH0a4m5NIJRldc3jeK2Xu2aP1cj&X-Amz-Signature=bf1709cc1a50ea4ef24b32d74a0155a0cd6ba0d45b68f8423862c1db8924c439&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNNHIXL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeK0dnjIfQZmYCklGImse23cFH4euYBSW6hdWq9DF%2FLgIhAKaokgzIA7FwT3GFmc8h4T5NWeCxhdm242W5KyRWMI8VKv8DCFkQABoMNjM3NDIzMTgzODA1IgznhcAr3vQonZQhy%2F8q3AO5xNh%2FsDFFgrCqajlwA8ZQwIH9FU0fEkLfO2bnR41rQrC5gO2bY5yYvP8PWROT8hVtgz0pPi3DYOyEy0Ln7O6O%2BY7GeZoMWWOsF1ncGAJv7lf2PRthBunXIhpTP8heDxQjTk6RQNjZXAByWeTD7qb5exaHCvbGZKjP4ipkuTsxz4J3ToD9e7cuR0JHUqVl4ZfP6SUyJRXevVNBNh0vPp0hcPTCrRG89%2Bc0Z5gWT58JkxZCevd3YOXK%2F3IeQgGF64qDpnyHFmWfWmQZ5kaCBhG9f43J2NsvXK7LwaETRjhHuVp96TBDs5sDKcKOu9g3GDTkrfVbA8EjMp3kXnD18FiBqT5xCDi4UY4rgEJEZATEylgWMHhYtJxQwVxfPVmqzeJH3mT5gMvu5HAfZfkYzEDReCGRytYKSV%2Bcm4N%2FA11vfvYYpxhCSeLBLkLfol8j8U0ogDG8ndJRYYxX7K2PVhgmzmj6Ebyi%2F9F5mXV4gqcCgBgpvZF8VsZfxsi9SnIgsMncNbl9yBeBCuRFx%2BNR%2B4D5IO4C6vAmFhHwYgrBNNXL3oqJZG%2BBNHlCrDphU8h6xOn94I1%2BLnCsC40inYxnXrvR%2B5ocOwVuBvkQ99%2BcN9QRB1nNsjrPlYiZ4jDe0jDm%2FaDBBjqkAana3l8SjFRbbbpSp%2FFcbt2yYns1pBCrq1sMZe%2Fi8fh%2F%2BABVIKOAN84a5tzFPd48NKLsVVZ3BRZyA%2FTgql5sxYh2hDlW9BU8TiHnk3ba8sfsWSZKR3lpMOEVFTgkckfK0TuDatEC%2BWkaPeP7EkSki7HnvTw3Q3ecE7lmbwPaM%2FTwPgUNug2qb7%2FzUvRXSqnkVdH0a4m5NIJRldc3jeK2Xu2aP1cj&X-Amz-Signature=0e02cc03acd816d27503b05e886e63338508c90af4e4063db57ba421592411f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNNHIXL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeK0dnjIfQZmYCklGImse23cFH4euYBSW6hdWq9DF%2FLgIhAKaokgzIA7FwT3GFmc8h4T5NWeCxhdm242W5KyRWMI8VKv8DCFkQABoMNjM3NDIzMTgzODA1IgznhcAr3vQonZQhy%2F8q3AO5xNh%2FsDFFgrCqajlwA8ZQwIH9FU0fEkLfO2bnR41rQrC5gO2bY5yYvP8PWROT8hVtgz0pPi3DYOyEy0Ln7O6O%2BY7GeZoMWWOsF1ncGAJv7lf2PRthBunXIhpTP8heDxQjTk6RQNjZXAByWeTD7qb5exaHCvbGZKjP4ipkuTsxz4J3ToD9e7cuR0JHUqVl4ZfP6SUyJRXevVNBNh0vPp0hcPTCrRG89%2Bc0Z5gWT58JkxZCevd3YOXK%2F3IeQgGF64qDpnyHFmWfWmQZ5kaCBhG9f43J2NsvXK7LwaETRjhHuVp96TBDs5sDKcKOu9g3GDTkrfVbA8EjMp3kXnD18FiBqT5xCDi4UY4rgEJEZATEylgWMHhYtJxQwVxfPVmqzeJH3mT5gMvu5HAfZfkYzEDReCGRytYKSV%2Bcm4N%2FA11vfvYYpxhCSeLBLkLfol8j8U0ogDG8ndJRYYxX7K2PVhgmzmj6Ebyi%2F9F5mXV4gqcCgBgpvZF8VsZfxsi9SnIgsMncNbl9yBeBCuRFx%2BNR%2B4D5IO4C6vAmFhHwYgrBNNXL3oqJZG%2BBNHlCrDphU8h6xOn94I1%2BLnCsC40inYxnXrvR%2B5ocOwVuBvkQ99%2BcN9QRB1nNsjrPlYiZ4jDe0jDm%2FaDBBjqkAana3l8SjFRbbbpSp%2FFcbt2yYns1pBCrq1sMZe%2Fi8fh%2F%2BABVIKOAN84a5tzFPd48NKLsVVZ3BRZyA%2FTgql5sxYh2hDlW9BU8TiHnk3ba8sfsWSZKR3lpMOEVFTgkckfK0TuDatEC%2BWkaPeP7EkSki7HnvTw3Q3ecE7lmbwPaM%2FTwPgUNug2qb7%2FzUvRXSqnkVdH0a4m5NIJRldc3jeK2Xu2aP1cj&X-Amz-Signature=fc7dfcb0789d2ae9fca77417e7141ffa2b2e1d371e84c79c2c5ca93a8bafdc42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNNHIXL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeK0dnjIfQZmYCklGImse23cFH4euYBSW6hdWq9DF%2FLgIhAKaokgzIA7FwT3GFmc8h4T5NWeCxhdm242W5KyRWMI8VKv8DCFkQABoMNjM3NDIzMTgzODA1IgznhcAr3vQonZQhy%2F8q3AO5xNh%2FsDFFgrCqajlwA8ZQwIH9FU0fEkLfO2bnR41rQrC5gO2bY5yYvP8PWROT8hVtgz0pPi3DYOyEy0Ln7O6O%2BY7GeZoMWWOsF1ncGAJv7lf2PRthBunXIhpTP8heDxQjTk6RQNjZXAByWeTD7qb5exaHCvbGZKjP4ipkuTsxz4J3ToD9e7cuR0JHUqVl4ZfP6SUyJRXevVNBNh0vPp0hcPTCrRG89%2Bc0Z5gWT58JkxZCevd3YOXK%2F3IeQgGF64qDpnyHFmWfWmQZ5kaCBhG9f43J2NsvXK7LwaETRjhHuVp96TBDs5sDKcKOu9g3GDTkrfVbA8EjMp3kXnD18FiBqT5xCDi4UY4rgEJEZATEylgWMHhYtJxQwVxfPVmqzeJH3mT5gMvu5HAfZfkYzEDReCGRytYKSV%2Bcm4N%2FA11vfvYYpxhCSeLBLkLfol8j8U0ogDG8ndJRYYxX7K2PVhgmzmj6Ebyi%2F9F5mXV4gqcCgBgpvZF8VsZfxsi9SnIgsMncNbl9yBeBCuRFx%2BNR%2B4D5IO4C6vAmFhHwYgrBNNXL3oqJZG%2BBNHlCrDphU8h6xOn94I1%2BLnCsC40inYxnXrvR%2B5ocOwVuBvkQ99%2BcN9QRB1nNsjrPlYiZ4jDe0jDm%2FaDBBjqkAana3l8SjFRbbbpSp%2FFcbt2yYns1pBCrq1sMZe%2Fi8fh%2F%2BABVIKOAN84a5tzFPd48NKLsVVZ3BRZyA%2FTgql5sxYh2hDlW9BU8TiHnk3ba8sfsWSZKR3lpMOEVFTgkckfK0TuDatEC%2BWkaPeP7EkSki7HnvTw3Q3ecE7lmbwPaM%2FTwPgUNug2qb7%2FzUvRXSqnkVdH0a4m5NIJRldc3jeK2Xu2aP1cj&X-Amz-Signature=594196990ebc40391e2a18ebb7597a6a809d91b2483d589fb40d601dbcd09f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
