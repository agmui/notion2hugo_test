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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KM7EZ35%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRt9XkDji99vTu%2BCsWXFMp6wCjz%2BfxwuzoLOsvjl4IVAiEAlnDTxlZ42e2arjAC79Xnxf0%2BM1%2BmCDFwFzS7ewelNfwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYNZ%2Fl1eAlw%2FT6ONSrcA5gqT0Wbe7qDRtr1j9HXs6UlU%2B3xJxLmwICP%2BQV9VNO3QgdoTcQ9vq7tTlEPjDBkh2Nbvbg2r19eGm9WvZi14%2BdZEO9f0UW8rd02rAeEdp8kB4VX1zMoXn69p4PA94sVyfBaAuZMXXQesVU7HJl%2Bjhy%2F064bsd5fyCZBC3VnebwEaN0rltUtqCB7Ni31drXLUpaXI9fDPyyI7jkG0xB2irb58CKeZruDAyBJwVAbU1j1OE3aDUG37tibYKsI6v%2BYFFYRpjwnmMAWdPYCCiyfYfyz1EzlWHN4WKV%2Fn9yf0NHk2ZX2J83ECvrVIyGutn8iUp6vCGh7Oe3mL3PnQL2isO7capAC0X9hhFUdrv%2FJGhjdFA5JyjCe3vk%2FLrBqmAcvvHbLNGDROPEU3VgXztD49869q6Jv%2BRCwOTW3L%2FvSK53FrmcRX9JuvqMPKwXEnkkgMH6b1Xuup%2B5aqAn0L34JGYNWJe3ubXoooXiJt1yBGUuj5bspmciyeYNCRNZ9Igl5b0f1c2Jck%2Bm17y9Ys17jGVLjaMntL9wl3BsT7WkXoFeH5eL7piWY2WBcly7WEWbg%2Fu3kgo8Xn%2BSQPTnRnPHARIXtx3Vi5XD25Zj2LZsFsahR6Pt6NZNPtJupKasoMPCd470GOqUBDQewj%2Fgaij1wMuwkkZr0A2SW8Lzs6JG%2BE5RYqUtI5CnAIeocR1UU3Sl2gEqPwIsSf2aR2TQZ1wpbR1TJZKlHg8sA1Hpxusy%2BpEA9DdpjXVFgaPUPQurYVagdNQieBOEOyfRDka1FR1a4jVOCcnld9tspbrBAYkImaOekstavHviaNxBIHmddQY%2FMkWX9ixEwDcwQ4S7X2v6vrIkxYyJWBoqfn0Do&X-Amz-Signature=9e9117af307bb072c02fd1cfb75297aaea513ab496480271fdccd22426204831&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KM7EZ35%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRt9XkDji99vTu%2BCsWXFMp6wCjz%2BfxwuzoLOsvjl4IVAiEAlnDTxlZ42e2arjAC79Xnxf0%2BM1%2BmCDFwFzS7ewelNfwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYNZ%2Fl1eAlw%2FT6ONSrcA5gqT0Wbe7qDRtr1j9HXs6UlU%2B3xJxLmwICP%2BQV9VNO3QgdoTcQ9vq7tTlEPjDBkh2Nbvbg2r19eGm9WvZi14%2BdZEO9f0UW8rd02rAeEdp8kB4VX1zMoXn69p4PA94sVyfBaAuZMXXQesVU7HJl%2Bjhy%2F064bsd5fyCZBC3VnebwEaN0rltUtqCB7Ni31drXLUpaXI9fDPyyI7jkG0xB2irb58CKeZruDAyBJwVAbU1j1OE3aDUG37tibYKsI6v%2BYFFYRpjwnmMAWdPYCCiyfYfyz1EzlWHN4WKV%2Fn9yf0NHk2ZX2J83ECvrVIyGutn8iUp6vCGh7Oe3mL3PnQL2isO7capAC0X9hhFUdrv%2FJGhjdFA5JyjCe3vk%2FLrBqmAcvvHbLNGDROPEU3VgXztD49869q6Jv%2BRCwOTW3L%2FvSK53FrmcRX9JuvqMPKwXEnkkgMH6b1Xuup%2B5aqAn0L34JGYNWJe3ubXoooXiJt1yBGUuj5bspmciyeYNCRNZ9Igl5b0f1c2Jck%2Bm17y9Ys17jGVLjaMntL9wl3BsT7WkXoFeH5eL7piWY2WBcly7WEWbg%2Fu3kgo8Xn%2BSQPTnRnPHARIXtx3Vi5XD25Zj2LZsFsahR6Pt6NZNPtJupKasoMPCd470GOqUBDQewj%2Fgaij1wMuwkkZr0A2SW8Lzs6JG%2BE5RYqUtI5CnAIeocR1UU3Sl2gEqPwIsSf2aR2TQZ1wpbR1TJZKlHg8sA1Hpxusy%2BpEA9DdpjXVFgaPUPQurYVagdNQieBOEOyfRDka1FR1a4jVOCcnld9tspbrBAYkImaOekstavHviaNxBIHmddQY%2FMkWX9ixEwDcwQ4S7X2v6vrIkxYyJWBoqfn0Do&X-Amz-Signature=004a117e32eba95b4d3bdb82b1673a3615d26b97b1ce8a831b197717f6e25424&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KM7EZ35%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRt9XkDji99vTu%2BCsWXFMp6wCjz%2BfxwuzoLOsvjl4IVAiEAlnDTxlZ42e2arjAC79Xnxf0%2BM1%2BmCDFwFzS7ewelNfwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYNZ%2Fl1eAlw%2FT6ONSrcA5gqT0Wbe7qDRtr1j9HXs6UlU%2B3xJxLmwICP%2BQV9VNO3QgdoTcQ9vq7tTlEPjDBkh2Nbvbg2r19eGm9WvZi14%2BdZEO9f0UW8rd02rAeEdp8kB4VX1zMoXn69p4PA94sVyfBaAuZMXXQesVU7HJl%2Bjhy%2F064bsd5fyCZBC3VnebwEaN0rltUtqCB7Ni31drXLUpaXI9fDPyyI7jkG0xB2irb58CKeZruDAyBJwVAbU1j1OE3aDUG37tibYKsI6v%2BYFFYRpjwnmMAWdPYCCiyfYfyz1EzlWHN4WKV%2Fn9yf0NHk2ZX2J83ECvrVIyGutn8iUp6vCGh7Oe3mL3PnQL2isO7capAC0X9hhFUdrv%2FJGhjdFA5JyjCe3vk%2FLrBqmAcvvHbLNGDROPEU3VgXztD49869q6Jv%2BRCwOTW3L%2FvSK53FrmcRX9JuvqMPKwXEnkkgMH6b1Xuup%2B5aqAn0L34JGYNWJe3ubXoooXiJt1yBGUuj5bspmciyeYNCRNZ9Igl5b0f1c2Jck%2Bm17y9Ys17jGVLjaMntL9wl3BsT7WkXoFeH5eL7piWY2WBcly7WEWbg%2Fu3kgo8Xn%2BSQPTnRnPHARIXtx3Vi5XD25Zj2LZsFsahR6Pt6NZNPtJupKasoMPCd470GOqUBDQewj%2Fgaij1wMuwkkZr0A2SW8Lzs6JG%2BE5RYqUtI5CnAIeocR1UU3Sl2gEqPwIsSf2aR2TQZ1wpbR1TJZKlHg8sA1Hpxusy%2BpEA9DdpjXVFgaPUPQurYVagdNQieBOEOyfRDka1FR1a4jVOCcnld9tspbrBAYkImaOekstavHviaNxBIHmddQY%2FMkWX9ixEwDcwQ4S7X2v6vrIkxYyJWBoqfn0Do&X-Amz-Signature=de6dd862b5245e04bf9a43153880899ca3d703ece65d5b22df56b14d36afbc27&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KM7EZ35%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRt9XkDji99vTu%2BCsWXFMp6wCjz%2BfxwuzoLOsvjl4IVAiEAlnDTxlZ42e2arjAC79Xnxf0%2BM1%2BmCDFwFzS7ewelNfwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYNZ%2Fl1eAlw%2FT6ONSrcA5gqT0Wbe7qDRtr1j9HXs6UlU%2B3xJxLmwICP%2BQV9VNO3QgdoTcQ9vq7tTlEPjDBkh2Nbvbg2r19eGm9WvZi14%2BdZEO9f0UW8rd02rAeEdp8kB4VX1zMoXn69p4PA94sVyfBaAuZMXXQesVU7HJl%2Bjhy%2F064bsd5fyCZBC3VnebwEaN0rltUtqCB7Ni31drXLUpaXI9fDPyyI7jkG0xB2irb58CKeZruDAyBJwVAbU1j1OE3aDUG37tibYKsI6v%2BYFFYRpjwnmMAWdPYCCiyfYfyz1EzlWHN4WKV%2Fn9yf0NHk2ZX2J83ECvrVIyGutn8iUp6vCGh7Oe3mL3PnQL2isO7capAC0X9hhFUdrv%2FJGhjdFA5JyjCe3vk%2FLrBqmAcvvHbLNGDROPEU3VgXztD49869q6Jv%2BRCwOTW3L%2FvSK53FrmcRX9JuvqMPKwXEnkkgMH6b1Xuup%2B5aqAn0L34JGYNWJe3ubXoooXiJt1yBGUuj5bspmciyeYNCRNZ9Igl5b0f1c2Jck%2Bm17y9Ys17jGVLjaMntL9wl3BsT7WkXoFeH5eL7piWY2WBcly7WEWbg%2Fu3kgo8Xn%2BSQPTnRnPHARIXtx3Vi5XD25Zj2LZsFsahR6Pt6NZNPtJupKasoMPCd470GOqUBDQewj%2Fgaij1wMuwkkZr0A2SW8Lzs6JG%2BE5RYqUtI5CnAIeocR1UU3Sl2gEqPwIsSf2aR2TQZ1wpbR1TJZKlHg8sA1Hpxusy%2BpEA9DdpjXVFgaPUPQurYVagdNQieBOEOyfRDka1FR1a4jVOCcnld9tspbrBAYkImaOekstavHviaNxBIHmddQY%2FMkWX9ixEwDcwQ4S7X2v6vrIkxYyJWBoqfn0Do&X-Amz-Signature=4302def750e65c36699c7013a3e1e8d92b183920cd193246616832d4a3d07f28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KM7EZ35%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRt9XkDji99vTu%2BCsWXFMp6wCjz%2BfxwuzoLOsvjl4IVAiEAlnDTxlZ42e2arjAC79Xnxf0%2BM1%2BmCDFwFzS7ewelNfwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYNZ%2Fl1eAlw%2FT6ONSrcA5gqT0Wbe7qDRtr1j9HXs6UlU%2B3xJxLmwICP%2BQV9VNO3QgdoTcQ9vq7tTlEPjDBkh2Nbvbg2r19eGm9WvZi14%2BdZEO9f0UW8rd02rAeEdp8kB4VX1zMoXn69p4PA94sVyfBaAuZMXXQesVU7HJl%2Bjhy%2F064bsd5fyCZBC3VnebwEaN0rltUtqCB7Ni31drXLUpaXI9fDPyyI7jkG0xB2irb58CKeZruDAyBJwVAbU1j1OE3aDUG37tibYKsI6v%2BYFFYRpjwnmMAWdPYCCiyfYfyz1EzlWHN4WKV%2Fn9yf0NHk2ZX2J83ECvrVIyGutn8iUp6vCGh7Oe3mL3PnQL2isO7capAC0X9hhFUdrv%2FJGhjdFA5JyjCe3vk%2FLrBqmAcvvHbLNGDROPEU3VgXztD49869q6Jv%2BRCwOTW3L%2FvSK53FrmcRX9JuvqMPKwXEnkkgMH6b1Xuup%2B5aqAn0L34JGYNWJe3ubXoooXiJt1yBGUuj5bspmciyeYNCRNZ9Igl5b0f1c2Jck%2Bm17y9Ys17jGVLjaMntL9wl3BsT7WkXoFeH5eL7piWY2WBcly7WEWbg%2Fu3kgo8Xn%2BSQPTnRnPHARIXtx3Vi5XD25Zj2LZsFsahR6Pt6NZNPtJupKasoMPCd470GOqUBDQewj%2Fgaij1wMuwkkZr0A2SW8Lzs6JG%2BE5RYqUtI5CnAIeocR1UU3Sl2gEqPwIsSf2aR2TQZ1wpbR1TJZKlHg8sA1Hpxusy%2BpEA9DdpjXVFgaPUPQurYVagdNQieBOEOyfRDka1FR1a4jVOCcnld9tspbrBAYkImaOekstavHviaNxBIHmddQY%2FMkWX9ixEwDcwQ4S7X2v6vrIkxYyJWBoqfn0Do&X-Amz-Signature=a1f45cf564509fbaf622ab2732d22fdf241c6fa8a84f27a720f12da9c03cd36a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KM7EZ35%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRt9XkDji99vTu%2BCsWXFMp6wCjz%2BfxwuzoLOsvjl4IVAiEAlnDTxlZ42e2arjAC79Xnxf0%2BM1%2BmCDFwFzS7ewelNfwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYNZ%2Fl1eAlw%2FT6ONSrcA5gqT0Wbe7qDRtr1j9HXs6UlU%2B3xJxLmwICP%2BQV9VNO3QgdoTcQ9vq7tTlEPjDBkh2Nbvbg2r19eGm9WvZi14%2BdZEO9f0UW8rd02rAeEdp8kB4VX1zMoXn69p4PA94sVyfBaAuZMXXQesVU7HJl%2Bjhy%2F064bsd5fyCZBC3VnebwEaN0rltUtqCB7Ni31drXLUpaXI9fDPyyI7jkG0xB2irb58CKeZruDAyBJwVAbU1j1OE3aDUG37tibYKsI6v%2BYFFYRpjwnmMAWdPYCCiyfYfyz1EzlWHN4WKV%2Fn9yf0NHk2ZX2J83ECvrVIyGutn8iUp6vCGh7Oe3mL3PnQL2isO7capAC0X9hhFUdrv%2FJGhjdFA5JyjCe3vk%2FLrBqmAcvvHbLNGDROPEU3VgXztD49869q6Jv%2BRCwOTW3L%2FvSK53FrmcRX9JuvqMPKwXEnkkgMH6b1Xuup%2B5aqAn0L34JGYNWJe3ubXoooXiJt1yBGUuj5bspmciyeYNCRNZ9Igl5b0f1c2Jck%2Bm17y9Ys17jGVLjaMntL9wl3BsT7WkXoFeH5eL7piWY2WBcly7WEWbg%2Fu3kgo8Xn%2BSQPTnRnPHARIXtx3Vi5XD25Zj2LZsFsahR6Pt6NZNPtJupKasoMPCd470GOqUBDQewj%2Fgaij1wMuwkkZr0A2SW8Lzs6JG%2BE5RYqUtI5CnAIeocR1UU3Sl2gEqPwIsSf2aR2TQZ1wpbR1TJZKlHg8sA1Hpxusy%2BpEA9DdpjXVFgaPUPQurYVagdNQieBOEOyfRDka1FR1a4jVOCcnld9tspbrBAYkImaOekstavHviaNxBIHmddQY%2FMkWX9ixEwDcwQ4S7X2v6vrIkxYyJWBoqfn0Do&X-Amz-Signature=b08901f43a4d05f2ccbb31e0c2c5fb27fd31a1fe82050efd3046bc614961fc19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KM7EZ35%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRt9XkDji99vTu%2BCsWXFMp6wCjz%2BfxwuzoLOsvjl4IVAiEAlnDTxlZ42e2arjAC79Xnxf0%2BM1%2BmCDFwFzS7ewelNfwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYNZ%2Fl1eAlw%2FT6ONSrcA5gqT0Wbe7qDRtr1j9HXs6UlU%2B3xJxLmwICP%2BQV9VNO3QgdoTcQ9vq7tTlEPjDBkh2Nbvbg2r19eGm9WvZi14%2BdZEO9f0UW8rd02rAeEdp8kB4VX1zMoXn69p4PA94sVyfBaAuZMXXQesVU7HJl%2Bjhy%2F064bsd5fyCZBC3VnebwEaN0rltUtqCB7Ni31drXLUpaXI9fDPyyI7jkG0xB2irb58CKeZruDAyBJwVAbU1j1OE3aDUG37tibYKsI6v%2BYFFYRpjwnmMAWdPYCCiyfYfyz1EzlWHN4WKV%2Fn9yf0NHk2ZX2J83ECvrVIyGutn8iUp6vCGh7Oe3mL3PnQL2isO7capAC0X9hhFUdrv%2FJGhjdFA5JyjCe3vk%2FLrBqmAcvvHbLNGDROPEU3VgXztD49869q6Jv%2BRCwOTW3L%2FvSK53FrmcRX9JuvqMPKwXEnkkgMH6b1Xuup%2B5aqAn0L34JGYNWJe3ubXoooXiJt1yBGUuj5bspmciyeYNCRNZ9Igl5b0f1c2Jck%2Bm17y9Ys17jGVLjaMntL9wl3BsT7WkXoFeH5eL7piWY2WBcly7WEWbg%2Fu3kgo8Xn%2BSQPTnRnPHARIXtx3Vi5XD25Zj2LZsFsahR6Pt6NZNPtJupKasoMPCd470GOqUBDQewj%2Fgaij1wMuwkkZr0A2SW8Lzs6JG%2BE5RYqUtI5CnAIeocR1UU3Sl2gEqPwIsSf2aR2TQZ1wpbR1TJZKlHg8sA1Hpxusy%2BpEA9DdpjXVFgaPUPQurYVagdNQieBOEOyfRDka1FR1a4jVOCcnld9tspbrBAYkImaOekstavHviaNxBIHmddQY%2FMkWX9ixEwDcwQ4S7X2v6vrIkxYyJWBoqfn0Do&X-Amz-Signature=cff89231b0fb348a450ddd105fc775dd6af626ecdec6755d553091d6700f0082&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KM7EZ35%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRt9XkDji99vTu%2BCsWXFMp6wCjz%2BfxwuzoLOsvjl4IVAiEAlnDTxlZ42e2arjAC79Xnxf0%2BM1%2BmCDFwFzS7ewelNfwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYNZ%2Fl1eAlw%2FT6ONSrcA5gqT0Wbe7qDRtr1j9HXs6UlU%2B3xJxLmwICP%2BQV9VNO3QgdoTcQ9vq7tTlEPjDBkh2Nbvbg2r19eGm9WvZi14%2BdZEO9f0UW8rd02rAeEdp8kB4VX1zMoXn69p4PA94sVyfBaAuZMXXQesVU7HJl%2Bjhy%2F064bsd5fyCZBC3VnebwEaN0rltUtqCB7Ni31drXLUpaXI9fDPyyI7jkG0xB2irb58CKeZruDAyBJwVAbU1j1OE3aDUG37tibYKsI6v%2BYFFYRpjwnmMAWdPYCCiyfYfyz1EzlWHN4WKV%2Fn9yf0NHk2ZX2J83ECvrVIyGutn8iUp6vCGh7Oe3mL3PnQL2isO7capAC0X9hhFUdrv%2FJGhjdFA5JyjCe3vk%2FLrBqmAcvvHbLNGDROPEU3VgXztD49869q6Jv%2BRCwOTW3L%2FvSK53FrmcRX9JuvqMPKwXEnkkgMH6b1Xuup%2B5aqAn0L34JGYNWJe3ubXoooXiJt1yBGUuj5bspmciyeYNCRNZ9Igl5b0f1c2Jck%2Bm17y9Ys17jGVLjaMntL9wl3BsT7WkXoFeH5eL7piWY2WBcly7WEWbg%2Fu3kgo8Xn%2BSQPTnRnPHARIXtx3Vi5XD25Zj2LZsFsahR6Pt6NZNPtJupKasoMPCd470GOqUBDQewj%2Fgaij1wMuwkkZr0A2SW8Lzs6JG%2BE5RYqUtI5CnAIeocR1UU3Sl2gEqPwIsSf2aR2TQZ1wpbR1TJZKlHg8sA1Hpxusy%2BpEA9DdpjXVFgaPUPQurYVagdNQieBOEOyfRDka1FR1a4jVOCcnld9tspbrBAYkImaOekstavHviaNxBIHmddQY%2FMkWX9ixEwDcwQ4S7X2v6vrIkxYyJWBoqfn0Do&X-Amz-Signature=48318fedf6cb39df07c21299a599ab3b7b145f925631b1d2e853450f59d09d29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
