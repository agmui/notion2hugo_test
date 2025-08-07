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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLTOTMC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIF0JNAafto1AWkG4%2BKWzR3URVO5sCz97yRLQ%2F8jJy%2B0MAiEAyFqV5gDBOv7v8nfISzHYMc6lSVBkan05R6W0rf1BYx0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYQD5Etzjae72II7yrcA7MFfV1GEDVQQCsOWJfTZr6cpRNqfwEIebUlJZyBjAs7Yz88LzCKRo2ZL1qEl9hJi24kPdFLUB01LCX0Vt5vT29FugHXj%2FVaaCk5x5qaKrL1oqBhO2x4GKlNVgdl5Z6z%2FPIcL4FUEhfs0TCZXXoir2%2Bmsp6WRtODj2aReX3QLCI3k6%2FPCWJwpgLH4%2FRDT771YRBHgd05MbtyfFNpeEBfw%2BFw0o5bP1PNsVO8IFC47jXzhF7Eem8N3io5shNWGNbNitQSbjLrKkr0ad3tKpFxgQzVP%2FpI6BIAQnxRnok1KwMj%2F4f5dzpy%2ByitPEn%2FU7O0oCeCeEyUgt4iDIh1p7Hynk0VHMV5TQbt1axYxgoDPLBvDP5UVy1CUbJAv2%2FzmXFXuZuD%2BOHJgC%2BFS0RySL1izmHUhczVD5zOiJoWkUdwYKlOGKJkxXc1%2FOZuk5ucfne4A%2BXW3lnvRohS%2BSFhlhw3dXYBP4Xk9NIfvguu7JtICVlguQWI8iKVO50kDDuNSdvsHIPe%2FBn4l8PEmPz4Sj88f1CpmAHAk7bvfEGHPQxtlu1LNldxPrkdjSJvfeNcAzyQcW7%2FT%2B4agoeFD7qG32yR%2BBruNY%2FRSdCZ1yTU6FlTOs0WbO3IaSrphtCgPYhMMKL50sQGOqUBhrgGHc9SPF6ivAeqEwKx8%2ByDnkekTrrwIpVYeXhnbGbSaNTLF4uAMVUJ5vMejKBCY5%2Fiz11v92rsChRJwAmkRKYaBaVtTT%2BQrNVGyiBylMdpU%2F6MV%2BNsMQuuTSB6x5w86eK%2BwsdyMkcUaiu%2B%2BZZHzSIFDsl2YreIJ6eP5HdRUxTEVIKqHS7RKB30kUS6McxiQgWFoKneToepYybVkuw4cblgiDRg&X-Amz-Signature=d0f4fd546aed41b50c00f307cdd7f75eab5aa07df9d2cdbf7dc3afefe385bd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLTOTMC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIF0JNAafto1AWkG4%2BKWzR3URVO5sCz97yRLQ%2F8jJy%2B0MAiEAyFqV5gDBOv7v8nfISzHYMc6lSVBkan05R6W0rf1BYx0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYQD5Etzjae72II7yrcA7MFfV1GEDVQQCsOWJfTZr6cpRNqfwEIebUlJZyBjAs7Yz88LzCKRo2ZL1qEl9hJi24kPdFLUB01LCX0Vt5vT29FugHXj%2FVaaCk5x5qaKrL1oqBhO2x4GKlNVgdl5Z6z%2FPIcL4FUEhfs0TCZXXoir2%2Bmsp6WRtODj2aReX3QLCI3k6%2FPCWJwpgLH4%2FRDT771YRBHgd05MbtyfFNpeEBfw%2BFw0o5bP1PNsVO8IFC47jXzhF7Eem8N3io5shNWGNbNitQSbjLrKkr0ad3tKpFxgQzVP%2FpI6BIAQnxRnok1KwMj%2F4f5dzpy%2ByitPEn%2FU7O0oCeCeEyUgt4iDIh1p7Hynk0VHMV5TQbt1axYxgoDPLBvDP5UVy1CUbJAv2%2FzmXFXuZuD%2BOHJgC%2BFS0RySL1izmHUhczVD5zOiJoWkUdwYKlOGKJkxXc1%2FOZuk5ucfne4A%2BXW3lnvRohS%2BSFhlhw3dXYBP4Xk9NIfvguu7JtICVlguQWI8iKVO50kDDuNSdvsHIPe%2FBn4l8PEmPz4Sj88f1CpmAHAk7bvfEGHPQxtlu1LNldxPrkdjSJvfeNcAzyQcW7%2FT%2B4agoeFD7qG32yR%2BBruNY%2FRSdCZ1yTU6FlTOs0WbO3IaSrphtCgPYhMMKL50sQGOqUBhrgGHc9SPF6ivAeqEwKx8%2ByDnkekTrrwIpVYeXhnbGbSaNTLF4uAMVUJ5vMejKBCY5%2Fiz11v92rsChRJwAmkRKYaBaVtTT%2BQrNVGyiBylMdpU%2F6MV%2BNsMQuuTSB6x5w86eK%2BwsdyMkcUaiu%2B%2BZZHzSIFDsl2YreIJ6eP5HdRUxTEVIKqHS7RKB30kUS6McxiQgWFoKneToepYybVkuw4cblgiDRg&X-Amz-Signature=12700655d9544ee91208848e7d4c9820c57ed9cda18665aa7e43871e1588a6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLTOTMC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIF0JNAafto1AWkG4%2BKWzR3URVO5sCz97yRLQ%2F8jJy%2B0MAiEAyFqV5gDBOv7v8nfISzHYMc6lSVBkan05R6W0rf1BYx0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYQD5Etzjae72II7yrcA7MFfV1GEDVQQCsOWJfTZr6cpRNqfwEIebUlJZyBjAs7Yz88LzCKRo2ZL1qEl9hJi24kPdFLUB01LCX0Vt5vT29FugHXj%2FVaaCk5x5qaKrL1oqBhO2x4GKlNVgdl5Z6z%2FPIcL4FUEhfs0TCZXXoir2%2Bmsp6WRtODj2aReX3QLCI3k6%2FPCWJwpgLH4%2FRDT771YRBHgd05MbtyfFNpeEBfw%2BFw0o5bP1PNsVO8IFC47jXzhF7Eem8N3io5shNWGNbNitQSbjLrKkr0ad3tKpFxgQzVP%2FpI6BIAQnxRnok1KwMj%2F4f5dzpy%2ByitPEn%2FU7O0oCeCeEyUgt4iDIh1p7Hynk0VHMV5TQbt1axYxgoDPLBvDP5UVy1CUbJAv2%2FzmXFXuZuD%2BOHJgC%2BFS0RySL1izmHUhczVD5zOiJoWkUdwYKlOGKJkxXc1%2FOZuk5ucfne4A%2BXW3lnvRohS%2BSFhlhw3dXYBP4Xk9NIfvguu7JtICVlguQWI8iKVO50kDDuNSdvsHIPe%2FBn4l8PEmPz4Sj88f1CpmAHAk7bvfEGHPQxtlu1LNldxPrkdjSJvfeNcAzyQcW7%2FT%2B4agoeFD7qG32yR%2BBruNY%2FRSdCZ1yTU6FlTOs0WbO3IaSrphtCgPYhMMKL50sQGOqUBhrgGHc9SPF6ivAeqEwKx8%2ByDnkekTrrwIpVYeXhnbGbSaNTLF4uAMVUJ5vMejKBCY5%2Fiz11v92rsChRJwAmkRKYaBaVtTT%2BQrNVGyiBylMdpU%2F6MV%2BNsMQuuTSB6x5w86eK%2BwsdyMkcUaiu%2B%2BZZHzSIFDsl2YreIJ6eP5HdRUxTEVIKqHS7RKB30kUS6McxiQgWFoKneToepYybVkuw4cblgiDRg&X-Amz-Signature=27685cb9da3dadc71041c51e4ec8e327bb75d7d75e68149ef3cde5939d84152c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLTOTMC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIF0JNAafto1AWkG4%2BKWzR3URVO5sCz97yRLQ%2F8jJy%2B0MAiEAyFqV5gDBOv7v8nfISzHYMc6lSVBkan05R6W0rf1BYx0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYQD5Etzjae72II7yrcA7MFfV1GEDVQQCsOWJfTZr6cpRNqfwEIebUlJZyBjAs7Yz88LzCKRo2ZL1qEl9hJi24kPdFLUB01LCX0Vt5vT29FugHXj%2FVaaCk5x5qaKrL1oqBhO2x4GKlNVgdl5Z6z%2FPIcL4FUEhfs0TCZXXoir2%2Bmsp6WRtODj2aReX3QLCI3k6%2FPCWJwpgLH4%2FRDT771YRBHgd05MbtyfFNpeEBfw%2BFw0o5bP1PNsVO8IFC47jXzhF7Eem8N3io5shNWGNbNitQSbjLrKkr0ad3tKpFxgQzVP%2FpI6BIAQnxRnok1KwMj%2F4f5dzpy%2ByitPEn%2FU7O0oCeCeEyUgt4iDIh1p7Hynk0VHMV5TQbt1axYxgoDPLBvDP5UVy1CUbJAv2%2FzmXFXuZuD%2BOHJgC%2BFS0RySL1izmHUhczVD5zOiJoWkUdwYKlOGKJkxXc1%2FOZuk5ucfne4A%2BXW3lnvRohS%2BSFhlhw3dXYBP4Xk9NIfvguu7JtICVlguQWI8iKVO50kDDuNSdvsHIPe%2FBn4l8PEmPz4Sj88f1CpmAHAk7bvfEGHPQxtlu1LNldxPrkdjSJvfeNcAzyQcW7%2FT%2B4agoeFD7qG32yR%2BBruNY%2FRSdCZ1yTU6FlTOs0WbO3IaSrphtCgPYhMMKL50sQGOqUBhrgGHc9SPF6ivAeqEwKx8%2ByDnkekTrrwIpVYeXhnbGbSaNTLF4uAMVUJ5vMejKBCY5%2Fiz11v92rsChRJwAmkRKYaBaVtTT%2BQrNVGyiBylMdpU%2F6MV%2BNsMQuuTSB6x5w86eK%2BwsdyMkcUaiu%2B%2BZZHzSIFDsl2YreIJ6eP5HdRUxTEVIKqHS7RKB30kUS6McxiQgWFoKneToepYybVkuw4cblgiDRg&X-Amz-Signature=8032be1644811e6fd930239947deb29851042e6e13055f14aa1e4a5d77fd37cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLTOTMC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIF0JNAafto1AWkG4%2BKWzR3URVO5sCz97yRLQ%2F8jJy%2B0MAiEAyFqV5gDBOv7v8nfISzHYMc6lSVBkan05R6W0rf1BYx0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYQD5Etzjae72II7yrcA7MFfV1GEDVQQCsOWJfTZr6cpRNqfwEIebUlJZyBjAs7Yz88LzCKRo2ZL1qEl9hJi24kPdFLUB01LCX0Vt5vT29FugHXj%2FVaaCk5x5qaKrL1oqBhO2x4GKlNVgdl5Z6z%2FPIcL4FUEhfs0TCZXXoir2%2Bmsp6WRtODj2aReX3QLCI3k6%2FPCWJwpgLH4%2FRDT771YRBHgd05MbtyfFNpeEBfw%2BFw0o5bP1PNsVO8IFC47jXzhF7Eem8N3io5shNWGNbNitQSbjLrKkr0ad3tKpFxgQzVP%2FpI6BIAQnxRnok1KwMj%2F4f5dzpy%2ByitPEn%2FU7O0oCeCeEyUgt4iDIh1p7Hynk0VHMV5TQbt1axYxgoDPLBvDP5UVy1CUbJAv2%2FzmXFXuZuD%2BOHJgC%2BFS0RySL1izmHUhczVD5zOiJoWkUdwYKlOGKJkxXc1%2FOZuk5ucfne4A%2BXW3lnvRohS%2BSFhlhw3dXYBP4Xk9NIfvguu7JtICVlguQWI8iKVO50kDDuNSdvsHIPe%2FBn4l8PEmPz4Sj88f1CpmAHAk7bvfEGHPQxtlu1LNldxPrkdjSJvfeNcAzyQcW7%2FT%2B4agoeFD7qG32yR%2BBruNY%2FRSdCZ1yTU6FlTOs0WbO3IaSrphtCgPYhMMKL50sQGOqUBhrgGHc9SPF6ivAeqEwKx8%2ByDnkekTrrwIpVYeXhnbGbSaNTLF4uAMVUJ5vMejKBCY5%2Fiz11v92rsChRJwAmkRKYaBaVtTT%2BQrNVGyiBylMdpU%2F6MV%2BNsMQuuTSB6x5w86eK%2BwsdyMkcUaiu%2B%2BZZHzSIFDsl2YreIJ6eP5HdRUxTEVIKqHS7RKB30kUS6McxiQgWFoKneToepYybVkuw4cblgiDRg&X-Amz-Signature=a16729945038b32598b09f95308cdea52c02944574051388af6cebd990ec7d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLTOTMC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIF0JNAafto1AWkG4%2BKWzR3URVO5sCz97yRLQ%2F8jJy%2B0MAiEAyFqV5gDBOv7v8nfISzHYMc6lSVBkan05R6W0rf1BYx0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYQD5Etzjae72II7yrcA7MFfV1GEDVQQCsOWJfTZr6cpRNqfwEIebUlJZyBjAs7Yz88LzCKRo2ZL1qEl9hJi24kPdFLUB01LCX0Vt5vT29FugHXj%2FVaaCk5x5qaKrL1oqBhO2x4GKlNVgdl5Z6z%2FPIcL4FUEhfs0TCZXXoir2%2Bmsp6WRtODj2aReX3QLCI3k6%2FPCWJwpgLH4%2FRDT771YRBHgd05MbtyfFNpeEBfw%2BFw0o5bP1PNsVO8IFC47jXzhF7Eem8N3io5shNWGNbNitQSbjLrKkr0ad3tKpFxgQzVP%2FpI6BIAQnxRnok1KwMj%2F4f5dzpy%2ByitPEn%2FU7O0oCeCeEyUgt4iDIh1p7Hynk0VHMV5TQbt1axYxgoDPLBvDP5UVy1CUbJAv2%2FzmXFXuZuD%2BOHJgC%2BFS0RySL1izmHUhczVD5zOiJoWkUdwYKlOGKJkxXc1%2FOZuk5ucfne4A%2BXW3lnvRohS%2BSFhlhw3dXYBP4Xk9NIfvguu7JtICVlguQWI8iKVO50kDDuNSdvsHIPe%2FBn4l8PEmPz4Sj88f1CpmAHAk7bvfEGHPQxtlu1LNldxPrkdjSJvfeNcAzyQcW7%2FT%2B4agoeFD7qG32yR%2BBruNY%2FRSdCZ1yTU6FlTOs0WbO3IaSrphtCgPYhMMKL50sQGOqUBhrgGHc9SPF6ivAeqEwKx8%2ByDnkekTrrwIpVYeXhnbGbSaNTLF4uAMVUJ5vMejKBCY5%2Fiz11v92rsChRJwAmkRKYaBaVtTT%2BQrNVGyiBylMdpU%2F6MV%2BNsMQuuTSB6x5w86eK%2BwsdyMkcUaiu%2B%2BZZHzSIFDsl2YreIJ6eP5HdRUxTEVIKqHS7RKB30kUS6McxiQgWFoKneToepYybVkuw4cblgiDRg&X-Amz-Signature=9902b987eb2835899c525194446dcf3e60f93bfa7adc73cbfed87baa6de3f722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLTOTMC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIF0JNAafto1AWkG4%2BKWzR3URVO5sCz97yRLQ%2F8jJy%2B0MAiEAyFqV5gDBOv7v8nfISzHYMc6lSVBkan05R6W0rf1BYx0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYQD5Etzjae72II7yrcA7MFfV1GEDVQQCsOWJfTZr6cpRNqfwEIebUlJZyBjAs7Yz88LzCKRo2ZL1qEl9hJi24kPdFLUB01LCX0Vt5vT29FugHXj%2FVaaCk5x5qaKrL1oqBhO2x4GKlNVgdl5Z6z%2FPIcL4FUEhfs0TCZXXoir2%2Bmsp6WRtODj2aReX3QLCI3k6%2FPCWJwpgLH4%2FRDT771YRBHgd05MbtyfFNpeEBfw%2BFw0o5bP1PNsVO8IFC47jXzhF7Eem8N3io5shNWGNbNitQSbjLrKkr0ad3tKpFxgQzVP%2FpI6BIAQnxRnok1KwMj%2F4f5dzpy%2ByitPEn%2FU7O0oCeCeEyUgt4iDIh1p7Hynk0VHMV5TQbt1axYxgoDPLBvDP5UVy1CUbJAv2%2FzmXFXuZuD%2BOHJgC%2BFS0RySL1izmHUhczVD5zOiJoWkUdwYKlOGKJkxXc1%2FOZuk5ucfne4A%2BXW3lnvRohS%2BSFhlhw3dXYBP4Xk9NIfvguu7JtICVlguQWI8iKVO50kDDuNSdvsHIPe%2FBn4l8PEmPz4Sj88f1CpmAHAk7bvfEGHPQxtlu1LNldxPrkdjSJvfeNcAzyQcW7%2FT%2B4agoeFD7qG32yR%2BBruNY%2FRSdCZ1yTU6FlTOs0WbO3IaSrphtCgPYhMMKL50sQGOqUBhrgGHc9SPF6ivAeqEwKx8%2ByDnkekTrrwIpVYeXhnbGbSaNTLF4uAMVUJ5vMejKBCY5%2Fiz11v92rsChRJwAmkRKYaBaVtTT%2BQrNVGyiBylMdpU%2F6MV%2BNsMQuuTSB6x5w86eK%2BwsdyMkcUaiu%2B%2BZZHzSIFDsl2YreIJ6eP5HdRUxTEVIKqHS7RKB30kUS6McxiQgWFoKneToepYybVkuw4cblgiDRg&X-Amz-Signature=17c381d75e452e5e82b31950e03094b81a687c4e2f66ec3d5c04bede060d1053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLTOTMC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIF0JNAafto1AWkG4%2BKWzR3URVO5sCz97yRLQ%2F8jJy%2B0MAiEAyFqV5gDBOv7v8nfISzHYMc6lSVBkan05R6W0rf1BYx0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYQD5Etzjae72II7yrcA7MFfV1GEDVQQCsOWJfTZr6cpRNqfwEIebUlJZyBjAs7Yz88LzCKRo2ZL1qEl9hJi24kPdFLUB01LCX0Vt5vT29FugHXj%2FVaaCk5x5qaKrL1oqBhO2x4GKlNVgdl5Z6z%2FPIcL4FUEhfs0TCZXXoir2%2Bmsp6WRtODj2aReX3QLCI3k6%2FPCWJwpgLH4%2FRDT771YRBHgd05MbtyfFNpeEBfw%2BFw0o5bP1PNsVO8IFC47jXzhF7Eem8N3io5shNWGNbNitQSbjLrKkr0ad3tKpFxgQzVP%2FpI6BIAQnxRnok1KwMj%2F4f5dzpy%2ByitPEn%2FU7O0oCeCeEyUgt4iDIh1p7Hynk0VHMV5TQbt1axYxgoDPLBvDP5UVy1CUbJAv2%2FzmXFXuZuD%2BOHJgC%2BFS0RySL1izmHUhczVD5zOiJoWkUdwYKlOGKJkxXc1%2FOZuk5ucfne4A%2BXW3lnvRohS%2BSFhlhw3dXYBP4Xk9NIfvguu7JtICVlguQWI8iKVO50kDDuNSdvsHIPe%2FBn4l8PEmPz4Sj88f1CpmAHAk7bvfEGHPQxtlu1LNldxPrkdjSJvfeNcAzyQcW7%2FT%2B4agoeFD7qG32yR%2BBruNY%2FRSdCZ1yTU6FlTOs0WbO3IaSrphtCgPYhMMKL50sQGOqUBhrgGHc9SPF6ivAeqEwKx8%2ByDnkekTrrwIpVYeXhnbGbSaNTLF4uAMVUJ5vMejKBCY5%2Fiz11v92rsChRJwAmkRKYaBaVtTT%2BQrNVGyiBylMdpU%2F6MV%2BNsMQuuTSB6x5w86eK%2BwsdyMkcUaiu%2B%2BZZHzSIFDsl2YreIJ6eP5HdRUxTEVIKqHS7RKB30kUS6McxiQgWFoKneToepYybVkuw4cblgiDRg&X-Amz-Signature=68cfa8c2dfdb67d3a3b0e86f7aa19c134b186d7cfd7109855de3c61de4d128fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
