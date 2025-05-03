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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOADR6YU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDcG6P5efGT3kLP1yApSRw1vvbWK2PhI8C1eLG6vA%2F1uAIgbHnZzjCPeJ97Ve8g0vpZRrsVMZbC%2FIMG7fRK%2BXgw5pEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5SglMZR3ADK5IvSircA%2FSYMJwS0Wd7QOU4zeQ2kUDhyOHVICZGaVruyjEGT4rBt9zDMxgN7g%2FaMUDDh%2Fx5o9thVonrnohC5QGRRJ7Mp3iZjDCJxmLDUIgTlncawF5Acm5Yd469xE8Aq2vw%2F0Eil2zt3sKs1Nsoy9Wr3DC%2BlFR7oy2S34YsuetR2pHi5UEuXMLvaETfYrxzijApkC8MPOqGkOCCWX03CaP%2BQyaUt0emB5v%2BY8z7vC%2Bxe2BOjbPv99sD%2FKHaMtJblExYDIwrO6KF9gixPSt%2BR0Ohsr%2BwowqORVcxIPOBcschpl9FnKtPasRzGiW4Vxt35IpEKOOxXe5RULdu6%2FVYVSL5wzTfyvIMMuYuULTWsZV3yP9uzL4qUjAy5SqQEgBraPRwWQ5P2%2FODYFIXDSMtl3YsI8u0GR5mWWKg6N1TmZP86jfumRpGHdWSpUbpcoggvyFl2Q0q4LgFr7z1j5nAVvs4OY3JATM7vHyL24z029BI2WFF0F12Ww8zwa5BTMjXeIudqckRHM2GPTG5899gwi%2FowDAEisTVKDeVfgAYmXXuBNiGlLLQjqJepcb2KfuivDylGXNYzduEF3ux6JW2jad0giRwK76i1zyJS8LRKE0xY67bsK6qZB0DDYmkvMVo2eGRMMOG1sAGOqUB72BPQEuMklA0WFK7UbgzRkLNO8i8%2F6%2FuKuFCcQWFFjZ5XtKJV2rjofc3vQ6eH5zQjHBvUnNn9kejntidWTtdHGOkyrtwcd6VWcZ3Qr4p9er3kKzGgTpGveAymNBkYq%2FLh6X3UHwCwmJq%2FES8ixWlJ7FQ7j78%2BNfwLPzXnxR6u8dAMDvBzR5wSHEIaziHkPsbQ08zRXR1o1szuG4tncenazZSN%2Fos&X-Amz-Signature=5ab53c74934fec275d6ba332cea72b7669b9a2da5f2d48ed1a5e6fe4051f4cec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOADR6YU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDcG6P5efGT3kLP1yApSRw1vvbWK2PhI8C1eLG6vA%2F1uAIgbHnZzjCPeJ97Ve8g0vpZRrsVMZbC%2FIMG7fRK%2BXgw5pEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5SglMZR3ADK5IvSircA%2FSYMJwS0Wd7QOU4zeQ2kUDhyOHVICZGaVruyjEGT4rBt9zDMxgN7g%2FaMUDDh%2Fx5o9thVonrnohC5QGRRJ7Mp3iZjDCJxmLDUIgTlncawF5Acm5Yd469xE8Aq2vw%2F0Eil2zt3sKs1Nsoy9Wr3DC%2BlFR7oy2S34YsuetR2pHi5UEuXMLvaETfYrxzijApkC8MPOqGkOCCWX03CaP%2BQyaUt0emB5v%2BY8z7vC%2Bxe2BOjbPv99sD%2FKHaMtJblExYDIwrO6KF9gixPSt%2BR0Ohsr%2BwowqORVcxIPOBcschpl9FnKtPasRzGiW4Vxt35IpEKOOxXe5RULdu6%2FVYVSL5wzTfyvIMMuYuULTWsZV3yP9uzL4qUjAy5SqQEgBraPRwWQ5P2%2FODYFIXDSMtl3YsI8u0GR5mWWKg6N1TmZP86jfumRpGHdWSpUbpcoggvyFl2Q0q4LgFr7z1j5nAVvs4OY3JATM7vHyL24z029BI2WFF0F12Ww8zwa5BTMjXeIudqckRHM2GPTG5899gwi%2FowDAEisTVKDeVfgAYmXXuBNiGlLLQjqJepcb2KfuivDylGXNYzduEF3ux6JW2jad0giRwK76i1zyJS8LRKE0xY67bsK6qZB0DDYmkvMVo2eGRMMOG1sAGOqUB72BPQEuMklA0WFK7UbgzRkLNO8i8%2F6%2FuKuFCcQWFFjZ5XtKJV2rjofc3vQ6eH5zQjHBvUnNn9kejntidWTtdHGOkyrtwcd6VWcZ3Qr4p9er3kKzGgTpGveAymNBkYq%2FLh6X3UHwCwmJq%2FES8ixWlJ7FQ7j78%2BNfwLPzXnxR6u8dAMDvBzR5wSHEIaziHkPsbQ08zRXR1o1szuG4tncenazZSN%2Fos&X-Amz-Signature=170bd4c7b632451eb3bdbcb93d9b27e81bf41cd32fe20ec9e13e2803672714b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOADR6YU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDcG6P5efGT3kLP1yApSRw1vvbWK2PhI8C1eLG6vA%2F1uAIgbHnZzjCPeJ97Ve8g0vpZRrsVMZbC%2FIMG7fRK%2BXgw5pEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5SglMZR3ADK5IvSircA%2FSYMJwS0Wd7QOU4zeQ2kUDhyOHVICZGaVruyjEGT4rBt9zDMxgN7g%2FaMUDDh%2Fx5o9thVonrnohC5QGRRJ7Mp3iZjDCJxmLDUIgTlncawF5Acm5Yd469xE8Aq2vw%2F0Eil2zt3sKs1Nsoy9Wr3DC%2BlFR7oy2S34YsuetR2pHi5UEuXMLvaETfYrxzijApkC8MPOqGkOCCWX03CaP%2BQyaUt0emB5v%2BY8z7vC%2Bxe2BOjbPv99sD%2FKHaMtJblExYDIwrO6KF9gixPSt%2BR0Ohsr%2BwowqORVcxIPOBcschpl9FnKtPasRzGiW4Vxt35IpEKOOxXe5RULdu6%2FVYVSL5wzTfyvIMMuYuULTWsZV3yP9uzL4qUjAy5SqQEgBraPRwWQ5P2%2FODYFIXDSMtl3YsI8u0GR5mWWKg6N1TmZP86jfumRpGHdWSpUbpcoggvyFl2Q0q4LgFr7z1j5nAVvs4OY3JATM7vHyL24z029BI2WFF0F12Ww8zwa5BTMjXeIudqckRHM2GPTG5899gwi%2FowDAEisTVKDeVfgAYmXXuBNiGlLLQjqJepcb2KfuivDylGXNYzduEF3ux6JW2jad0giRwK76i1zyJS8LRKE0xY67bsK6qZB0DDYmkvMVo2eGRMMOG1sAGOqUB72BPQEuMklA0WFK7UbgzRkLNO8i8%2F6%2FuKuFCcQWFFjZ5XtKJV2rjofc3vQ6eH5zQjHBvUnNn9kejntidWTtdHGOkyrtwcd6VWcZ3Qr4p9er3kKzGgTpGveAymNBkYq%2FLh6X3UHwCwmJq%2FES8ixWlJ7FQ7j78%2BNfwLPzXnxR6u8dAMDvBzR5wSHEIaziHkPsbQ08zRXR1o1szuG4tncenazZSN%2Fos&X-Amz-Signature=62526f9b0f67aa9e42e6997c77cdd219feaef9ccf584f165169d8f031d398544&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOADR6YU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDcG6P5efGT3kLP1yApSRw1vvbWK2PhI8C1eLG6vA%2F1uAIgbHnZzjCPeJ97Ve8g0vpZRrsVMZbC%2FIMG7fRK%2BXgw5pEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5SglMZR3ADK5IvSircA%2FSYMJwS0Wd7QOU4zeQ2kUDhyOHVICZGaVruyjEGT4rBt9zDMxgN7g%2FaMUDDh%2Fx5o9thVonrnohC5QGRRJ7Mp3iZjDCJxmLDUIgTlncawF5Acm5Yd469xE8Aq2vw%2F0Eil2zt3sKs1Nsoy9Wr3DC%2BlFR7oy2S34YsuetR2pHi5UEuXMLvaETfYrxzijApkC8MPOqGkOCCWX03CaP%2BQyaUt0emB5v%2BY8z7vC%2Bxe2BOjbPv99sD%2FKHaMtJblExYDIwrO6KF9gixPSt%2BR0Ohsr%2BwowqORVcxIPOBcschpl9FnKtPasRzGiW4Vxt35IpEKOOxXe5RULdu6%2FVYVSL5wzTfyvIMMuYuULTWsZV3yP9uzL4qUjAy5SqQEgBraPRwWQ5P2%2FODYFIXDSMtl3YsI8u0GR5mWWKg6N1TmZP86jfumRpGHdWSpUbpcoggvyFl2Q0q4LgFr7z1j5nAVvs4OY3JATM7vHyL24z029BI2WFF0F12Ww8zwa5BTMjXeIudqckRHM2GPTG5899gwi%2FowDAEisTVKDeVfgAYmXXuBNiGlLLQjqJepcb2KfuivDylGXNYzduEF3ux6JW2jad0giRwK76i1zyJS8LRKE0xY67bsK6qZB0DDYmkvMVo2eGRMMOG1sAGOqUB72BPQEuMklA0WFK7UbgzRkLNO8i8%2F6%2FuKuFCcQWFFjZ5XtKJV2rjofc3vQ6eH5zQjHBvUnNn9kejntidWTtdHGOkyrtwcd6VWcZ3Qr4p9er3kKzGgTpGveAymNBkYq%2FLh6X3UHwCwmJq%2FES8ixWlJ7FQ7j78%2BNfwLPzXnxR6u8dAMDvBzR5wSHEIaziHkPsbQ08zRXR1o1szuG4tncenazZSN%2Fos&X-Amz-Signature=bff68f04bacc986fc9dc34a7f8171d53cde9676b89766908194018a7cee6d31a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOADR6YU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDcG6P5efGT3kLP1yApSRw1vvbWK2PhI8C1eLG6vA%2F1uAIgbHnZzjCPeJ97Ve8g0vpZRrsVMZbC%2FIMG7fRK%2BXgw5pEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5SglMZR3ADK5IvSircA%2FSYMJwS0Wd7QOU4zeQ2kUDhyOHVICZGaVruyjEGT4rBt9zDMxgN7g%2FaMUDDh%2Fx5o9thVonrnohC5QGRRJ7Mp3iZjDCJxmLDUIgTlncawF5Acm5Yd469xE8Aq2vw%2F0Eil2zt3sKs1Nsoy9Wr3DC%2BlFR7oy2S34YsuetR2pHi5UEuXMLvaETfYrxzijApkC8MPOqGkOCCWX03CaP%2BQyaUt0emB5v%2BY8z7vC%2Bxe2BOjbPv99sD%2FKHaMtJblExYDIwrO6KF9gixPSt%2BR0Ohsr%2BwowqORVcxIPOBcschpl9FnKtPasRzGiW4Vxt35IpEKOOxXe5RULdu6%2FVYVSL5wzTfyvIMMuYuULTWsZV3yP9uzL4qUjAy5SqQEgBraPRwWQ5P2%2FODYFIXDSMtl3YsI8u0GR5mWWKg6N1TmZP86jfumRpGHdWSpUbpcoggvyFl2Q0q4LgFr7z1j5nAVvs4OY3JATM7vHyL24z029BI2WFF0F12Ww8zwa5BTMjXeIudqckRHM2GPTG5899gwi%2FowDAEisTVKDeVfgAYmXXuBNiGlLLQjqJepcb2KfuivDylGXNYzduEF3ux6JW2jad0giRwK76i1zyJS8LRKE0xY67bsK6qZB0DDYmkvMVo2eGRMMOG1sAGOqUB72BPQEuMklA0WFK7UbgzRkLNO8i8%2F6%2FuKuFCcQWFFjZ5XtKJV2rjofc3vQ6eH5zQjHBvUnNn9kejntidWTtdHGOkyrtwcd6VWcZ3Qr4p9er3kKzGgTpGveAymNBkYq%2FLh6X3UHwCwmJq%2FES8ixWlJ7FQ7j78%2BNfwLPzXnxR6u8dAMDvBzR5wSHEIaziHkPsbQ08zRXR1o1szuG4tncenazZSN%2Fos&X-Amz-Signature=ee767d7f58491372d2521e7069ecf4fe627132af7130adfed08d2ec80b72198a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOADR6YU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDcG6P5efGT3kLP1yApSRw1vvbWK2PhI8C1eLG6vA%2F1uAIgbHnZzjCPeJ97Ve8g0vpZRrsVMZbC%2FIMG7fRK%2BXgw5pEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5SglMZR3ADK5IvSircA%2FSYMJwS0Wd7QOU4zeQ2kUDhyOHVICZGaVruyjEGT4rBt9zDMxgN7g%2FaMUDDh%2Fx5o9thVonrnohC5QGRRJ7Mp3iZjDCJxmLDUIgTlncawF5Acm5Yd469xE8Aq2vw%2F0Eil2zt3sKs1Nsoy9Wr3DC%2BlFR7oy2S34YsuetR2pHi5UEuXMLvaETfYrxzijApkC8MPOqGkOCCWX03CaP%2BQyaUt0emB5v%2BY8z7vC%2Bxe2BOjbPv99sD%2FKHaMtJblExYDIwrO6KF9gixPSt%2BR0Ohsr%2BwowqORVcxIPOBcschpl9FnKtPasRzGiW4Vxt35IpEKOOxXe5RULdu6%2FVYVSL5wzTfyvIMMuYuULTWsZV3yP9uzL4qUjAy5SqQEgBraPRwWQ5P2%2FODYFIXDSMtl3YsI8u0GR5mWWKg6N1TmZP86jfumRpGHdWSpUbpcoggvyFl2Q0q4LgFr7z1j5nAVvs4OY3JATM7vHyL24z029BI2WFF0F12Ww8zwa5BTMjXeIudqckRHM2GPTG5899gwi%2FowDAEisTVKDeVfgAYmXXuBNiGlLLQjqJepcb2KfuivDylGXNYzduEF3ux6JW2jad0giRwK76i1zyJS8LRKE0xY67bsK6qZB0DDYmkvMVo2eGRMMOG1sAGOqUB72BPQEuMklA0WFK7UbgzRkLNO8i8%2F6%2FuKuFCcQWFFjZ5XtKJV2rjofc3vQ6eH5zQjHBvUnNn9kejntidWTtdHGOkyrtwcd6VWcZ3Qr4p9er3kKzGgTpGveAymNBkYq%2FLh6X3UHwCwmJq%2FES8ixWlJ7FQ7j78%2BNfwLPzXnxR6u8dAMDvBzR5wSHEIaziHkPsbQ08zRXR1o1szuG4tncenazZSN%2Fos&X-Amz-Signature=3135a4637fa1a2647f8da177d09d72f414ba9f1d363e53a0a253901619648eab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOADR6YU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDcG6P5efGT3kLP1yApSRw1vvbWK2PhI8C1eLG6vA%2F1uAIgbHnZzjCPeJ97Ve8g0vpZRrsVMZbC%2FIMG7fRK%2BXgw5pEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5SglMZR3ADK5IvSircA%2FSYMJwS0Wd7QOU4zeQ2kUDhyOHVICZGaVruyjEGT4rBt9zDMxgN7g%2FaMUDDh%2Fx5o9thVonrnohC5QGRRJ7Mp3iZjDCJxmLDUIgTlncawF5Acm5Yd469xE8Aq2vw%2F0Eil2zt3sKs1Nsoy9Wr3DC%2BlFR7oy2S34YsuetR2pHi5UEuXMLvaETfYrxzijApkC8MPOqGkOCCWX03CaP%2BQyaUt0emB5v%2BY8z7vC%2Bxe2BOjbPv99sD%2FKHaMtJblExYDIwrO6KF9gixPSt%2BR0Ohsr%2BwowqORVcxIPOBcschpl9FnKtPasRzGiW4Vxt35IpEKOOxXe5RULdu6%2FVYVSL5wzTfyvIMMuYuULTWsZV3yP9uzL4qUjAy5SqQEgBraPRwWQ5P2%2FODYFIXDSMtl3YsI8u0GR5mWWKg6N1TmZP86jfumRpGHdWSpUbpcoggvyFl2Q0q4LgFr7z1j5nAVvs4OY3JATM7vHyL24z029BI2WFF0F12Ww8zwa5BTMjXeIudqckRHM2GPTG5899gwi%2FowDAEisTVKDeVfgAYmXXuBNiGlLLQjqJepcb2KfuivDylGXNYzduEF3ux6JW2jad0giRwK76i1zyJS8LRKE0xY67bsK6qZB0DDYmkvMVo2eGRMMOG1sAGOqUB72BPQEuMklA0WFK7UbgzRkLNO8i8%2F6%2FuKuFCcQWFFjZ5XtKJV2rjofc3vQ6eH5zQjHBvUnNn9kejntidWTtdHGOkyrtwcd6VWcZ3Qr4p9er3kKzGgTpGveAymNBkYq%2FLh6X3UHwCwmJq%2FES8ixWlJ7FQ7j78%2BNfwLPzXnxR6u8dAMDvBzR5wSHEIaziHkPsbQ08zRXR1o1szuG4tncenazZSN%2Fos&X-Amz-Signature=b5d8b69e55b8b13fa00df5845408b1d31c58e39b7a379663d8fb8d02008a143f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOADR6YU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDcG6P5efGT3kLP1yApSRw1vvbWK2PhI8C1eLG6vA%2F1uAIgbHnZzjCPeJ97Ve8g0vpZRrsVMZbC%2FIMG7fRK%2BXgw5pEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5SglMZR3ADK5IvSircA%2FSYMJwS0Wd7QOU4zeQ2kUDhyOHVICZGaVruyjEGT4rBt9zDMxgN7g%2FaMUDDh%2Fx5o9thVonrnohC5QGRRJ7Mp3iZjDCJxmLDUIgTlncawF5Acm5Yd469xE8Aq2vw%2F0Eil2zt3sKs1Nsoy9Wr3DC%2BlFR7oy2S34YsuetR2pHi5UEuXMLvaETfYrxzijApkC8MPOqGkOCCWX03CaP%2BQyaUt0emB5v%2BY8z7vC%2Bxe2BOjbPv99sD%2FKHaMtJblExYDIwrO6KF9gixPSt%2BR0Ohsr%2BwowqORVcxIPOBcschpl9FnKtPasRzGiW4Vxt35IpEKOOxXe5RULdu6%2FVYVSL5wzTfyvIMMuYuULTWsZV3yP9uzL4qUjAy5SqQEgBraPRwWQ5P2%2FODYFIXDSMtl3YsI8u0GR5mWWKg6N1TmZP86jfumRpGHdWSpUbpcoggvyFl2Q0q4LgFr7z1j5nAVvs4OY3JATM7vHyL24z029BI2WFF0F12Ww8zwa5BTMjXeIudqckRHM2GPTG5899gwi%2FowDAEisTVKDeVfgAYmXXuBNiGlLLQjqJepcb2KfuivDylGXNYzduEF3ux6JW2jad0giRwK76i1zyJS8LRKE0xY67bsK6qZB0DDYmkvMVo2eGRMMOG1sAGOqUB72BPQEuMklA0WFK7UbgzRkLNO8i8%2F6%2FuKuFCcQWFFjZ5XtKJV2rjofc3vQ6eH5zQjHBvUnNn9kejntidWTtdHGOkyrtwcd6VWcZ3Qr4p9er3kKzGgTpGveAymNBkYq%2FLh6X3UHwCwmJq%2FES8ixWlJ7FQ7j78%2BNfwLPzXnxR6u8dAMDvBzR5wSHEIaziHkPsbQ08zRXR1o1szuG4tncenazZSN%2Fos&X-Amz-Signature=be798f0cb0f84fb80d30eb891ed10bf8438a4cecb4fd5063086de9c2b634a31d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
