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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6UPGYX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHuzJcrc4WPedTS5DK5oB83D5rG6GPTpK%2FCmkiEyFxRlAiEA6IRkrbvEhUFN8KOLuAuSbDwxBl8sjTmAkcoMmiNSGJAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBYUpmVK40ztas12gyrcA6W%2BzmSxduZD3mJ%2FZvzLRFHtwgrewwctg%2BTZgdodeEAFVm3DJlgALl%2B%2FFBYAlywdQEM%2BVhG0wP3a1%2FnxeMu6QSWYbIS2vrijNZoeESROpcyfm0zbMQsnCMXzLMBaR87jvgIi0GAe4DpmqJFQ8ZdNP%2FfGg9B5ikU9NgziI%2Fxe9rvI7wRzZgVjj2PB9p%2FcdkgFV4KyEYNtxv%2BDoLddhoQduNYB%2FYmQCc6OtwY8H8HlCIuFjR0u0YZZpGIM7Spn7lEWtZmccWMbO8kKJ8e5D0IYXF0TLIOmpqMYoFO0qE7KDEZCoWf08VNZX65OY4Vnqo0wO3WV5jn8BN86TTIwcsx26o%2BPkxKZoFELhEurdX8g3z8CfLNUdmyLtKg1g76%2B2xXN%2Buaonm6DIKJ9jZRp4h1iWznSAPghjOYcZOiuFLCgaUtdWSzNJUmWJr1Hne5Qjzi2HVCKi02kTHdiKF%2F%2FBgvoVjgaJ8fmh1KIDqLBMwWUjZKjXx2Ezq0XkWNhbEiTm1auvsflIli%2B5zIjm0fDKX1y4%2FeQla7frpNtAmXvInRJPND8aU2dZPnTV80QIDr6xeSEg67D2%2Fpdo0J6E2yZ7QkBkVFnweGOpZHQ28DnjPWZKeMI85bYPEgYoJWvoxsaMJ7f8sIGOqUBsTYKh4YK%2FFzbGFByKn3czPMTyJpWY6PCqmm6DNcCA09R78XjkdUmUsifAaAFoZWNIyvFQr2NotQznzpc9mHzGnSDMpcBtIQ6a0ERJFZ4hWDFfT50%2Fo%2BOIs1bokq%2Fz2K%2FKFywfPkRasZD%2FRpozzNtipRak24VnAjTI13k8rbWOugFIkoAhB%2BUz%2F7AHm6fvlYuGqULenUJhe91FuTkdjUk3dh9%2Bq5h&X-Amz-Signature=2f575c23c74aad20603ba64d386087f3c00be6206ce5491776c9508bb5de264d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6UPGYX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHuzJcrc4WPedTS5DK5oB83D5rG6GPTpK%2FCmkiEyFxRlAiEA6IRkrbvEhUFN8KOLuAuSbDwxBl8sjTmAkcoMmiNSGJAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBYUpmVK40ztas12gyrcA6W%2BzmSxduZD3mJ%2FZvzLRFHtwgrewwctg%2BTZgdodeEAFVm3DJlgALl%2B%2FFBYAlywdQEM%2BVhG0wP3a1%2FnxeMu6QSWYbIS2vrijNZoeESROpcyfm0zbMQsnCMXzLMBaR87jvgIi0GAe4DpmqJFQ8ZdNP%2FfGg9B5ikU9NgziI%2Fxe9rvI7wRzZgVjj2PB9p%2FcdkgFV4KyEYNtxv%2BDoLddhoQduNYB%2FYmQCc6OtwY8H8HlCIuFjR0u0YZZpGIM7Spn7lEWtZmccWMbO8kKJ8e5D0IYXF0TLIOmpqMYoFO0qE7KDEZCoWf08VNZX65OY4Vnqo0wO3WV5jn8BN86TTIwcsx26o%2BPkxKZoFELhEurdX8g3z8CfLNUdmyLtKg1g76%2B2xXN%2Buaonm6DIKJ9jZRp4h1iWznSAPghjOYcZOiuFLCgaUtdWSzNJUmWJr1Hne5Qjzi2HVCKi02kTHdiKF%2F%2FBgvoVjgaJ8fmh1KIDqLBMwWUjZKjXx2Ezq0XkWNhbEiTm1auvsflIli%2B5zIjm0fDKX1y4%2FeQla7frpNtAmXvInRJPND8aU2dZPnTV80QIDr6xeSEg67D2%2Fpdo0J6E2yZ7QkBkVFnweGOpZHQ28DnjPWZKeMI85bYPEgYoJWvoxsaMJ7f8sIGOqUBsTYKh4YK%2FFzbGFByKn3czPMTyJpWY6PCqmm6DNcCA09R78XjkdUmUsifAaAFoZWNIyvFQr2NotQznzpc9mHzGnSDMpcBtIQ6a0ERJFZ4hWDFfT50%2Fo%2BOIs1bokq%2Fz2K%2FKFywfPkRasZD%2FRpozzNtipRak24VnAjTI13k8rbWOugFIkoAhB%2BUz%2F7AHm6fvlYuGqULenUJhe91FuTkdjUk3dh9%2Bq5h&X-Amz-Signature=c79d6ffe00194b3512e1b782df094b8186b367f64cc6a624403db96f09ec2690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6UPGYX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHuzJcrc4WPedTS5DK5oB83D5rG6GPTpK%2FCmkiEyFxRlAiEA6IRkrbvEhUFN8KOLuAuSbDwxBl8sjTmAkcoMmiNSGJAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBYUpmVK40ztas12gyrcA6W%2BzmSxduZD3mJ%2FZvzLRFHtwgrewwctg%2BTZgdodeEAFVm3DJlgALl%2B%2FFBYAlywdQEM%2BVhG0wP3a1%2FnxeMu6QSWYbIS2vrijNZoeESROpcyfm0zbMQsnCMXzLMBaR87jvgIi0GAe4DpmqJFQ8ZdNP%2FfGg9B5ikU9NgziI%2Fxe9rvI7wRzZgVjj2PB9p%2FcdkgFV4KyEYNtxv%2BDoLddhoQduNYB%2FYmQCc6OtwY8H8HlCIuFjR0u0YZZpGIM7Spn7lEWtZmccWMbO8kKJ8e5D0IYXF0TLIOmpqMYoFO0qE7KDEZCoWf08VNZX65OY4Vnqo0wO3WV5jn8BN86TTIwcsx26o%2BPkxKZoFELhEurdX8g3z8CfLNUdmyLtKg1g76%2B2xXN%2Buaonm6DIKJ9jZRp4h1iWznSAPghjOYcZOiuFLCgaUtdWSzNJUmWJr1Hne5Qjzi2HVCKi02kTHdiKF%2F%2FBgvoVjgaJ8fmh1KIDqLBMwWUjZKjXx2Ezq0XkWNhbEiTm1auvsflIli%2B5zIjm0fDKX1y4%2FeQla7frpNtAmXvInRJPND8aU2dZPnTV80QIDr6xeSEg67D2%2Fpdo0J6E2yZ7QkBkVFnweGOpZHQ28DnjPWZKeMI85bYPEgYoJWvoxsaMJ7f8sIGOqUBsTYKh4YK%2FFzbGFByKn3czPMTyJpWY6PCqmm6DNcCA09R78XjkdUmUsifAaAFoZWNIyvFQr2NotQznzpc9mHzGnSDMpcBtIQ6a0ERJFZ4hWDFfT50%2Fo%2BOIs1bokq%2Fz2K%2FKFywfPkRasZD%2FRpozzNtipRak24VnAjTI13k8rbWOugFIkoAhB%2BUz%2F7AHm6fvlYuGqULenUJhe91FuTkdjUk3dh9%2Bq5h&X-Amz-Signature=ae6231ff412931043719359bfedfcccc3fb26b59ac812670d1fe0c1a6f0422d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6UPGYX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHuzJcrc4WPedTS5DK5oB83D5rG6GPTpK%2FCmkiEyFxRlAiEA6IRkrbvEhUFN8KOLuAuSbDwxBl8sjTmAkcoMmiNSGJAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBYUpmVK40ztas12gyrcA6W%2BzmSxduZD3mJ%2FZvzLRFHtwgrewwctg%2BTZgdodeEAFVm3DJlgALl%2B%2FFBYAlywdQEM%2BVhG0wP3a1%2FnxeMu6QSWYbIS2vrijNZoeESROpcyfm0zbMQsnCMXzLMBaR87jvgIi0GAe4DpmqJFQ8ZdNP%2FfGg9B5ikU9NgziI%2Fxe9rvI7wRzZgVjj2PB9p%2FcdkgFV4KyEYNtxv%2BDoLddhoQduNYB%2FYmQCc6OtwY8H8HlCIuFjR0u0YZZpGIM7Spn7lEWtZmccWMbO8kKJ8e5D0IYXF0TLIOmpqMYoFO0qE7KDEZCoWf08VNZX65OY4Vnqo0wO3WV5jn8BN86TTIwcsx26o%2BPkxKZoFELhEurdX8g3z8CfLNUdmyLtKg1g76%2B2xXN%2Buaonm6DIKJ9jZRp4h1iWznSAPghjOYcZOiuFLCgaUtdWSzNJUmWJr1Hne5Qjzi2HVCKi02kTHdiKF%2F%2FBgvoVjgaJ8fmh1KIDqLBMwWUjZKjXx2Ezq0XkWNhbEiTm1auvsflIli%2B5zIjm0fDKX1y4%2FeQla7frpNtAmXvInRJPND8aU2dZPnTV80QIDr6xeSEg67D2%2Fpdo0J6E2yZ7QkBkVFnweGOpZHQ28DnjPWZKeMI85bYPEgYoJWvoxsaMJ7f8sIGOqUBsTYKh4YK%2FFzbGFByKn3czPMTyJpWY6PCqmm6DNcCA09R78XjkdUmUsifAaAFoZWNIyvFQr2NotQznzpc9mHzGnSDMpcBtIQ6a0ERJFZ4hWDFfT50%2Fo%2BOIs1bokq%2Fz2K%2FKFywfPkRasZD%2FRpozzNtipRak24VnAjTI13k8rbWOugFIkoAhB%2BUz%2F7AHm6fvlYuGqULenUJhe91FuTkdjUk3dh9%2Bq5h&X-Amz-Signature=d1476a30bfd769ed8bba70038e0bc059b50d35d5207811bd4e397cdee28f7e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6UPGYX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHuzJcrc4WPedTS5DK5oB83D5rG6GPTpK%2FCmkiEyFxRlAiEA6IRkrbvEhUFN8KOLuAuSbDwxBl8sjTmAkcoMmiNSGJAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBYUpmVK40ztas12gyrcA6W%2BzmSxduZD3mJ%2FZvzLRFHtwgrewwctg%2BTZgdodeEAFVm3DJlgALl%2B%2FFBYAlywdQEM%2BVhG0wP3a1%2FnxeMu6QSWYbIS2vrijNZoeESROpcyfm0zbMQsnCMXzLMBaR87jvgIi0GAe4DpmqJFQ8ZdNP%2FfGg9B5ikU9NgziI%2Fxe9rvI7wRzZgVjj2PB9p%2FcdkgFV4KyEYNtxv%2BDoLddhoQduNYB%2FYmQCc6OtwY8H8HlCIuFjR0u0YZZpGIM7Spn7lEWtZmccWMbO8kKJ8e5D0IYXF0TLIOmpqMYoFO0qE7KDEZCoWf08VNZX65OY4Vnqo0wO3WV5jn8BN86TTIwcsx26o%2BPkxKZoFELhEurdX8g3z8CfLNUdmyLtKg1g76%2B2xXN%2Buaonm6DIKJ9jZRp4h1iWznSAPghjOYcZOiuFLCgaUtdWSzNJUmWJr1Hne5Qjzi2HVCKi02kTHdiKF%2F%2FBgvoVjgaJ8fmh1KIDqLBMwWUjZKjXx2Ezq0XkWNhbEiTm1auvsflIli%2B5zIjm0fDKX1y4%2FeQla7frpNtAmXvInRJPND8aU2dZPnTV80QIDr6xeSEg67D2%2Fpdo0J6E2yZ7QkBkVFnweGOpZHQ28DnjPWZKeMI85bYPEgYoJWvoxsaMJ7f8sIGOqUBsTYKh4YK%2FFzbGFByKn3czPMTyJpWY6PCqmm6DNcCA09R78XjkdUmUsifAaAFoZWNIyvFQr2NotQznzpc9mHzGnSDMpcBtIQ6a0ERJFZ4hWDFfT50%2Fo%2BOIs1bokq%2Fz2K%2FKFywfPkRasZD%2FRpozzNtipRak24VnAjTI13k8rbWOugFIkoAhB%2BUz%2F7AHm6fvlYuGqULenUJhe91FuTkdjUk3dh9%2Bq5h&X-Amz-Signature=32c46cde452d31243b226a2ef0a3be1556247c74cfbf12b6361916c04f2d137c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6UPGYX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHuzJcrc4WPedTS5DK5oB83D5rG6GPTpK%2FCmkiEyFxRlAiEA6IRkrbvEhUFN8KOLuAuSbDwxBl8sjTmAkcoMmiNSGJAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBYUpmVK40ztas12gyrcA6W%2BzmSxduZD3mJ%2FZvzLRFHtwgrewwctg%2BTZgdodeEAFVm3DJlgALl%2B%2FFBYAlywdQEM%2BVhG0wP3a1%2FnxeMu6QSWYbIS2vrijNZoeESROpcyfm0zbMQsnCMXzLMBaR87jvgIi0GAe4DpmqJFQ8ZdNP%2FfGg9B5ikU9NgziI%2Fxe9rvI7wRzZgVjj2PB9p%2FcdkgFV4KyEYNtxv%2BDoLddhoQduNYB%2FYmQCc6OtwY8H8HlCIuFjR0u0YZZpGIM7Spn7lEWtZmccWMbO8kKJ8e5D0IYXF0TLIOmpqMYoFO0qE7KDEZCoWf08VNZX65OY4Vnqo0wO3WV5jn8BN86TTIwcsx26o%2BPkxKZoFELhEurdX8g3z8CfLNUdmyLtKg1g76%2B2xXN%2Buaonm6DIKJ9jZRp4h1iWznSAPghjOYcZOiuFLCgaUtdWSzNJUmWJr1Hne5Qjzi2HVCKi02kTHdiKF%2F%2FBgvoVjgaJ8fmh1KIDqLBMwWUjZKjXx2Ezq0XkWNhbEiTm1auvsflIli%2B5zIjm0fDKX1y4%2FeQla7frpNtAmXvInRJPND8aU2dZPnTV80QIDr6xeSEg67D2%2Fpdo0J6E2yZ7QkBkVFnweGOpZHQ28DnjPWZKeMI85bYPEgYoJWvoxsaMJ7f8sIGOqUBsTYKh4YK%2FFzbGFByKn3czPMTyJpWY6PCqmm6DNcCA09R78XjkdUmUsifAaAFoZWNIyvFQr2NotQznzpc9mHzGnSDMpcBtIQ6a0ERJFZ4hWDFfT50%2Fo%2BOIs1bokq%2Fz2K%2FKFywfPkRasZD%2FRpozzNtipRak24VnAjTI13k8rbWOugFIkoAhB%2BUz%2F7AHm6fvlYuGqULenUJhe91FuTkdjUk3dh9%2Bq5h&X-Amz-Signature=29275405454d1725e76ece40587454a522b2a1673f1acf4c874846b4d70048b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6UPGYX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHuzJcrc4WPedTS5DK5oB83D5rG6GPTpK%2FCmkiEyFxRlAiEA6IRkrbvEhUFN8KOLuAuSbDwxBl8sjTmAkcoMmiNSGJAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBYUpmVK40ztas12gyrcA6W%2BzmSxduZD3mJ%2FZvzLRFHtwgrewwctg%2BTZgdodeEAFVm3DJlgALl%2B%2FFBYAlywdQEM%2BVhG0wP3a1%2FnxeMu6QSWYbIS2vrijNZoeESROpcyfm0zbMQsnCMXzLMBaR87jvgIi0GAe4DpmqJFQ8ZdNP%2FfGg9B5ikU9NgziI%2Fxe9rvI7wRzZgVjj2PB9p%2FcdkgFV4KyEYNtxv%2BDoLddhoQduNYB%2FYmQCc6OtwY8H8HlCIuFjR0u0YZZpGIM7Spn7lEWtZmccWMbO8kKJ8e5D0IYXF0TLIOmpqMYoFO0qE7KDEZCoWf08VNZX65OY4Vnqo0wO3WV5jn8BN86TTIwcsx26o%2BPkxKZoFELhEurdX8g3z8CfLNUdmyLtKg1g76%2B2xXN%2Buaonm6DIKJ9jZRp4h1iWznSAPghjOYcZOiuFLCgaUtdWSzNJUmWJr1Hne5Qjzi2HVCKi02kTHdiKF%2F%2FBgvoVjgaJ8fmh1KIDqLBMwWUjZKjXx2Ezq0XkWNhbEiTm1auvsflIli%2B5zIjm0fDKX1y4%2FeQla7frpNtAmXvInRJPND8aU2dZPnTV80QIDr6xeSEg67D2%2Fpdo0J6E2yZ7QkBkVFnweGOpZHQ28DnjPWZKeMI85bYPEgYoJWvoxsaMJ7f8sIGOqUBsTYKh4YK%2FFzbGFByKn3czPMTyJpWY6PCqmm6DNcCA09R78XjkdUmUsifAaAFoZWNIyvFQr2NotQznzpc9mHzGnSDMpcBtIQ6a0ERJFZ4hWDFfT50%2Fo%2BOIs1bokq%2Fz2K%2FKFywfPkRasZD%2FRpozzNtipRak24VnAjTI13k8rbWOugFIkoAhB%2BUz%2F7AHm6fvlYuGqULenUJhe91FuTkdjUk3dh9%2Bq5h&X-Amz-Signature=27da083b64d6dc897e2b02be2b761e0296275c37365f2eb034a5e3757ef16aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6UPGYX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHuzJcrc4WPedTS5DK5oB83D5rG6GPTpK%2FCmkiEyFxRlAiEA6IRkrbvEhUFN8KOLuAuSbDwxBl8sjTmAkcoMmiNSGJAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBYUpmVK40ztas12gyrcA6W%2BzmSxduZD3mJ%2FZvzLRFHtwgrewwctg%2BTZgdodeEAFVm3DJlgALl%2B%2FFBYAlywdQEM%2BVhG0wP3a1%2FnxeMu6QSWYbIS2vrijNZoeESROpcyfm0zbMQsnCMXzLMBaR87jvgIi0GAe4DpmqJFQ8ZdNP%2FfGg9B5ikU9NgziI%2Fxe9rvI7wRzZgVjj2PB9p%2FcdkgFV4KyEYNtxv%2BDoLddhoQduNYB%2FYmQCc6OtwY8H8HlCIuFjR0u0YZZpGIM7Spn7lEWtZmccWMbO8kKJ8e5D0IYXF0TLIOmpqMYoFO0qE7KDEZCoWf08VNZX65OY4Vnqo0wO3WV5jn8BN86TTIwcsx26o%2BPkxKZoFELhEurdX8g3z8CfLNUdmyLtKg1g76%2B2xXN%2Buaonm6DIKJ9jZRp4h1iWznSAPghjOYcZOiuFLCgaUtdWSzNJUmWJr1Hne5Qjzi2HVCKi02kTHdiKF%2F%2FBgvoVjgaJ8fmh1KIDqLBMwWUjZKjXx2Ezq0XkWNhbEiTm1auvsflIli%2B5zIjm0fDKX1y4%2FeQla7frpNtAmXvInRJPND8aU2dZPnTV80QIDr6xeSEg67D2%2Fpdo0J6E2yZ7QkBkVFnweGOpZHQ28DnjPWZKeMI85bYPEgYoJWvoxsaMJ7f8sIGOqUBsTYKh4YK%2FFzbGFByKn3czPMTyJpWY6PCqmm6DNcCA09R78XjkdUmUsifAaAFoZWNIyvFQr2NotQznzpc9mHzGnSDMpcBtIQ6a0ERJFZ4hWDFfT50%2Fo%2BOIs1bokq%2Fz2K%2FKFywfPkRasZD%2FRpozzNtipRak24VnAjTI13k8rbWOugFIkoAhB%2BUz%2F7AHm6fvlYuGqULenUJhe91FuTkdjUk3dh9%2Bq5h&X-Amz-Signature=dc4ddaf4257a76580b68e393ff4517fd044b0bb16b515d6921906ecfb447e9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
