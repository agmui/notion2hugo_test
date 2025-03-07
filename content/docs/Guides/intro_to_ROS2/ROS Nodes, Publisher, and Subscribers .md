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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGR4CDP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIB6ZjAUFqxAZG2EfIDBJh8U6OnElI4wX513doWUSVxyZAiEAi8KNi2Hax34qVax%2FliomosEm4C2K2i9mo2f4Lg0FPHMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNI5m3aZzeRYJNL44SrcA0XrLUjzZE%2FOJsltumOQ5ajUpvK0acoRg74mk1p5mludF9o2TQtLg%2FwZSfXG4YPWeQRXMEWutMuPMoipx%2Bdc0negLbhLR5Tz3lzPoQn950mCPliKUhgBHDEuZ%2BVKC9blh0V0FcCeXWgcqSAM3l33o%2F%2BW0hDPeN5R4SZmWppXu6zSCD2znQDHRbxKgePOuJiCwdWJ%2BAbn9uBEaLcwFalb0RDbx%2BdG8Ls2FLq1uV4MFa6mTNlBqBttb7xSECjWBXHVIycupGaLdK%2Fv%2F92kwKkoLx%2BrqYORxPOP1vjlQW6k2EkR8TG3PQMonf0PIVBk5zVgMZbsUs6ZguJ4gKPBnJW7%2F0gQEkM%2BeudsyyXjDBhD20yALvJlO0%2B%2Fx2ZotLobz8AzuEjTM5WD6cCj2dm0xl1SadI1n1drfk7bVOPjX23EFfXvae2yX%2BcwcLnqXoKOVYkQR3N52Aa24F3gsq3TSyhuqjTRRAJEl4NxvReju%2FY21o7aczS56o2gwxQbsib2A5l6VHlPH5CjWZ%2BOI4a2QCQOxv8VkCY9sHi5%2FAWvAvrt21f6IB9DQ7htfA203elcWbAZ9VNx67Y%2F%2FkkQchlq2r%2FfTXPlOjRkAV3aza7WFoxLAo6XRLX5v%2BP2hxaUnHObMKaArb4GOqUBaNUM6Pvmz2AbjodZHIquuBtKcURbr2uAUc5z1ehJbGVfuzzN74gPEzieEDOeSR8zYLbMLU3y0spW2XrfX4XYU5MsjK8uuf6H8H8k0KD3pD9XD1Lqv%2F2LYc2JDGSe%2FSXYKUuFVOB2I69IahdpHx1oqzdu%2FpvIQwa9957fCDGnQz7B4eRGyGPDDdf65NpV0syfmKcQy6ZYHpY8N3kNc6s2F1SKnmd5&X-Amz-Signature=53a820b853c23e0407a45e09e29897465c8eeddb574c87025babbf822c73d00c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGR4CDP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIB6ZjAUFqxAZG2EfIDBJh8U6OnElI4wX513doWUSVxyZAiEAi8KNi2Hax34qVax%2FliomosEm4C2K2i9mo2f4Lg0FPHMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNI5m3aZzeRYJNL44SrcA0XrLUjzZE%2FOJsltumOQ5ajUpvK0acoRg74mk1p5mludF9o2TQtLg%2FwZSfXG4YPWeQRXMEWutMuPMoipx%2Bdc0negLbhLR5Tz3lzPoQn950mCPliKUhgBHDEuZ%2BVKC9blh0V0FcCeXWgcqSAM3l33o%2F%2BW0hDPeN5R4SZmWppXu6zSCD2znQDHRbxKgePOuJiCwdWJ%2BAbn9uBEaLcwFalb0RDbx%2BdG8Ls2FLq1uV4MFa6mTNlBqBttb7xSECjWBXHVIycupGaLdK%2Fv%2F92kwKkoLx%2BrqYORxPOP1vjlQW6k2EkR8TG3PQMonf0PIVBk5zVgMZbsUs6ZguJ4gKPBnJW7%2F0gQEkM%2BeudsyyXjDBhD20yALvJlO0%2B%2Fx2ZotLobz8AzuEjTM5WD6cCj2dm0xl1SadI1n1drfk7bVOPjX23EFfXvae2yX%2BcwcLnqXoKOVYkQR3N52Aa24F3gsq3TSyhuqjTRRAJEl4NxvReju%2FY21o7aczS56o2gwxQbsib2A5l6VHlPH5CjWZ%2BOI4a2QCQOxv8VkCY9sHi5%2FAWvAvrt21f6IB9DQ7htfA203elcWbAZ9VNx67Y%2F%2FkkQchlq2r%2FfTXPlOjRkAV3aza7WFoxLAo6XRLX5v%2BP2hxaUnHObMKaArb4GOqUBaNUM6Pvmz2AbjodZHIquuBtKcURbr2uAUc5z1ehJbGVfuzzN74gPEzieEDOeSR8zYLbMLU3y0spW2XrfX4XYU5MsjK8uuf6H8H8k0KD3pD9XD1Lqv%2F2LYc2JDGSe%2FSXYKUuFVOB2I69IahdpHx1oqzdu%2FpvIQwa9957fCDGnQz7B4eRGyGPDDdf65NpV0syfmKcQy6ZYHpY8N3kNc6s2F1SKnmd5&X-Amz-Signature=7dc0d5f2d39c9ef826426a72fdb76960a00fe1dbc1774acd37de9d462af3d70a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGR4CDP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIB6ZjAUFqxAZG2EfIDBJh8U6OnElI4wX513doWUSVxyZAiEAi8KNi2Hax34qVax%2FliomosEm4C2K2i9mo2f4Lg0FPHMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNI5m3aZzeRYJNL44SrcA0XrLUjzZE%2FOJsltumOQ5ajUpvK0acoRg74mk1p5mludF9o2TQtLg%2FwZSfXG4YPWeQRXMEWutMuPMoipx%2Bdc0negLbhLR5Tz3lzPoQn950mCPliKUhgBHDEuZ%2BVKC9blh0V0FcCeXWgcqSAM3l33o%2F%2BW0hDPeN5R4SZmWppXu6zSCD2znQDHRbxKgePOuJiCwdWJ%2BAbn9uBEaLcwFalb0RDbx%2BdG8Ls2FLq1uV4MFa6mTNlBqBttb7xSECjWBXHVIycupGaLdK%2Fv%2F92kwKkoLx%2BrqYORxPOP1vjlQW6k2EkR8TG3PQMonf0PIVBk5zVgMZbsUs6ZguJ4gKPBnJW7%2F0gQEkM%2BeudsyyXjDBhD20yALvJlO0%2B%2Fx2ZotLobz8AzuEjTM5WD6cCj2dm0xl1SadI1n1drfk7bVOPjX23EFfXvae2yX%2BcwcLnqXoKOVYkQR3N52Aa24F3gsq3TSyhuqjTRRAJEl4NxvReju%2FY21o7aczS56o2gwxQbsib2A5l6VHlPH5CjWZ%2BOI4a2QCQOxv8VkCY9sHi5%2FAWvAvrt21f6IB9DQ7htfA203elcWbAZ9VNx67Y%2F%2FkkQchlq2r%2FfTXPlOjRkAV3aza7WFoxLAo6XRLX5v%2BP2hxaUnHObMKaArb4GOqUBaNUM6Pvmz2AbjodZHIquuBtKcURbr2uAUc5z1ehJbGVfuzzN74gPEzieEDOeSR8zYLbMLU3y0spW2XrfX4XYU5MsjK8uuf6H8H8k0KD3pD9XD1Lqv%2F2LYc2JDGSe%2FSXYKUuFVOB2I69IahdpHx1oqzdu%2FpvIQwa9957fCDGnQz7B4eRGyGPDDdf65NpV0syfmKcQy6ZYHpY8N3kNc6s2F1SKnmd5&X-Amz-Signature=93d8e315a72f2f3f495508b4bb427fc53ad36d7be46c94803b7c6ffb3c697c75&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGR4CDP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIB6ZjAUFqxAZG2EfIDBJh8U6OnElI4wX513doWUSVxyZAiEAi8KNi2Hax34qVax%2FliomosEm4C2K2i9mo2f4Lg0FPHMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNI5m3aZzeRYJNL44SrcA0XrLUjzZE%2FOJsltumOQ5ajUpvK0acoRg74mk1p5mludF9o2TQtLg%2FwZSfXG4YPWeQRXMEWutMuPMoipx%2Bdc0negLbhLR5Tz3lzPoQn950mCPliKUhgBHDEuZ%2BVKC9blh0V0FcCeXWgcqSAM3l33o%2F%2BW0hDPeN5R4SZmWppXu6zSCD2znQDHRbxKgePOuJiCwdWJ%2BAbn9uBEaLcwFalb0RDbx%2BdG8Ls2FLq1uV4MFa6mTNlBqBttb7xSECjWBXHVIycupGaLdK%2Fv%2F92kwKkoLx%2BrqYORxPOP1vjlQW6k2EkR8TG3PQMonf0PIVBk5zVgMZbsUs6ZguJ4gKPBnJW7%2F0gQEkM%2BeudsyyXjDBhD20yALvJlO0%2B%2Fx2ZotLobz8AzuEjTM5WD6cCj2dm0xl1SadI1n1drfk7bVOPjX23EFfXvae2yX%2BcwcLnqXoKOVYkQR3N52Aa24F3gsq3TSyhuqjTRRAJEl4NxvReju%2FY21o7aczS56o2gwxQbsib2A5l6VHlPH5CjWZ%2BOI4a2QCQOxv8VkCY9sHi5%2FAWvAvrt21f6IB9DQ7htfA203elcWbAZ9VNx67Y%2F%2FkkQchlq2r%2FfTXPlOjRkAV3aza7WFoxLAo6XRLX5v%2BP2hxaUnHObMKaArb4GOqUBaNUM6Pvmz2AbjodZHIquuBtKcURbr2uAUc5z1ehJbGVfuzzN74gPEzieEDOeSR8zYLbMLU3y0spW2XrfX4XYU5MsjK8uuf6H8H8k0KD3pD9XD1Lqv%2F2LYc2JDGSe%2FSXYKUuFVOB2I69IahdpHx1oqzdu%2FpvIQwa9957fCDGnQz7B4eRGyGPDDdf65NpV0syfmKcQy6ZYHpY8N3kNc6s2F1SKnmd5&X-Amz-Signature=194208d43db169f939ba7787f581864b345b7cf6aa840904c85a03405c937217&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGR4CDP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIB6ZjAUFqxAZG2EfIDBJh8U6OnElI4wX513doWUSVxyZAiEAi8KNi2Hax34qVax%2FliomosEm4C2K2i9mo2f4Lg0FPHMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNI5m3aZzeRYJNL44SrcA0XrLUjzZE%2FOJsltumOQ5ajUpvK0acoRg74mk1p5mludF9o2TQtLg%2FwZSfXG4YPWeQRXMEWutMuPMoipx%2Bdc0negLbhLR5Tz3lzPoQn950mCPliKUhgBHDEuZ%2BVKC9blh0V0FcCeXWgcqSAM3l33o%2F%2BW0hDPeN5R4SZmWppXu6zSCD2znQDHRbxKgePOuJiCwdWJ%2BAbn9uBEaLcwFalb0RDbx%2BdG8Ls2FLq1uV4MFa6mTNlBqBttb7xSECjWBXHVIycupGaLdK%2Fv%2F92kwKkoLx%2BrqYORxPOP1vjlQW6k2EkR8TG3PQMonf0PIVBk5zVgMZbsUs6ZguJ4gKPBnJW7%2F0gQEkM%2BeudsyyXjDBhD20yALvJlO0%2B%2Fx2ZotLobz8AzuEjTM5WD6cCj2dm0xl1SadI1n1drfk7bVOPjX23EFfXvae2yX%2BcwcLnqXoKOVYkQR3N52Aa24F3gsq3TSyhuqjTRRAJEl4NxvReju%2FY21o7aczS56o2gwxQbsib2A5l6VHlPH5CjWZ%2BOI4a2QCQOxv8VkCY9sHi5%2FAWvAvrt21f6IB9DQ7htfA203elcWbAZ9VNx67Y%2F%2FkkQchlq2r%2FfTXPlOjRkAV3aza7WFoxLAo6XRLX5v%2BP2hxaUnHObMKaArb4GOqUBaNUM6Pvmz2AbjodZHIquuBtKcURbr2uAUc5z1ehJbGVfuzzN74gPEzieEDOeSR8zYLbMLU3y0spW2XrfX4XYU5MsjK8uuf6H8H8k0KD3pD9XD1Lqv%2F2LYc2JDGSe%2FSXYKUuFVOB2I69IahdpHx1oqzdu%2FpvIQwa9957fCDGnQz7B4eRGyGPDDdf65NpV0syfmKcQy6ZYHpY8N3kNc6s2F1SKnmd5&X-Amz-Signature=6d42dcc5c335988aac80f40b68357b2d4f0ebfaa4d0ff883cc0e33783fc51925&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGR4CDP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIB6ZjAUFqxAZG2EfIDBJh8U6OnElI4wX513doWUSVxyZAiEAi8KNi2Hax34qVax%2FliomosEm4C2K2i9mo2f4Lg0FPHMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNI5m3aZzeRYJNL44SrcA0XrLUjzZE%2FOJsltumOQ5ajUpvK0acoRg74mk1p5mludF9o2TQtLg%2FwZSfXG4YPWeQRXMEWutMuPMoipx%2Bdc0negLbhLR5Tz3lzPoQn950mCPliKUhgBHDEuZ%2BVKC9blh0V0FcCeXWgcqSAM3l33o%2F%2BW0hDPeN5R4SZmWppXu6zSCD2znQDHRbxKgePOuJiCwdWJ%2BAbn9uBEaLcwFalb0RDbx%2BdG8Ls2FLq1uV4MFa6mTNlBqBttb7xSECjWBXHVIycupGaLdK%2Fv%2F92kwKkoLx%2BrqYORxPOP1vjlQW6k2EkR8TG3PQMonf0PIVBk5zVgMZbsUs6ZguJ4gKPBnJW7%2F0gQEkM%2BeudsyyXjDBhD20yALvJlO0%2B%2Fx2ZotLobz8AzuEjTM5WD6cCj2dm0xl1SadI1n1drfk7bVOPjX23EFfXvae2yX%2BcwcLnqXoKOVYkQR3N52Aa24F3gsq3TSyhuqjTRRAJEl4NxvReju%2FY21o7aczS56o2gwxQbsib2A5l6VHlPH5CjWZ%2BOI4a2QCQOxv8VkCY9sHi5%2FAWvAvrt21f6IB9DQ7htfA203elcWbAZ9VNx67Y%2F%2FkkQchlq2r%2FfTXPlOjRkAV3aza7WFoxLAo6XRLX5v%2BP2hxaUnHObMKaArb4GOqUBaNUM6Pvmz2AbjodZHIquuBtKcURbr2uAUc5z1ehJbGVfuzzN74gPEzieEDOeSR8zYLbMLU3y0spW2XrfX4XYU5MsjK8uuf6H8H8k0KD3pD9XD1Lqv%2F2LYc2JDGSe%2FSXYKUuFVOB2I69IahdpHx1oqzdu%2FpvIQwa9957fCDGnQz7B4eRGyGPDDdf65NpV0syfmKcQy6ZYHpY8N3kNc6s2F1SKnmd5&X-Amz-Signature=08c58c211e6ab7a0d9adc69c5bea6d15589c855a0177f339f85fb0a9555c5c57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGR4CDP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIB6ZjAUFqxAZG2EfIDBJh8U6OnElI4wX513doWUSVxyZAiEAi8KNi2Hax34qVax%2FliomosEm4C2K2i9mo2f4Lg0FPHMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNI5m3aZzeRYJNL44SrcA0XrLUjzZE%2FOJsltumOQ5ajUpvK0acoRg74mk1p5mludF9o2TQtLg%2FwZSfXG4YPWeQRXMEWutMuPMoipx%2Bdc0negLbhLR5Tz3lzPoQn950mCPliKUhgBHDEuZ%2BVKC9blh0V0FcCeXWgcqSAM3l33o%2F%2BW0hDPeN5R4SZmWppXu6zSCD2znQDHRbxKgePOuJiCwdWJ%2BAbn9uBEaLcwFalb0RDbx%2BdG8Ls2FLq1uV4MFa6mTNlBqBttb7xSECjWBXHVIycupGaLdK%2Fv%2F92kwKkoLx%2BrqYORxPOP1vjlQW6k2EkR8TG3PQMonf0PIVBk5zVgMZbsUs6ZguJ4gKPBnJW7%2F0gQEkM%2BeudsyyXjDBhD20yALvJlO0%2B%2Fx2ZotLobz8AzuEjTM5WD6cCj2dm0xl1SadI1n1drfk7bVOPjX23EFfXvae2yX%2BcwcLnqXoKOVYkQR3N52Aa24F3gsq3TSyhuqjTRRAJEl4NxvReju%2FY21o7aczS56o2gwxQbsib2A5l6VHlPH5CjWZ%2BOI4a2QCQOxv8VkCY9sHi5%2FAWvAvrt21f6IB9DQ7htfA203elcWbAZ9VNx67Y%2F%2FkkQchlq2r%2FfTXPlOjRkAV3aza7WFoxLAo6XRLX5v%2BP2hxaUnHObMKaArb4GOqUBaNUM6Pvmz2AbjodZHIquuBtKcURbr2uAUc5z1ehJbGVfuzzN74gPEzieEDOeSR8zYLbMLU3y0spW2XrfX4XYU5MsjK8uuf6H8H8k0KD3pD9XD1Lqv%2F2LYc2JDGSe%2FSXYKUuFVOB2I69IahdpHx1oqzdu%2FpvIQwa9957fCDGnQz7B4eRGyGPDDdf65NpV0syfmKcQy6ZYHpY8N3kNc6s2F1SKnmd5&X-Amz-Signature=e2d3c3a0a3b030184aa0420aebb97f908780eec4f3739153c2a6c7eec198cc0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGR4CDP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIB6ZjAUFqxAZG2EfIDBJh8U6OnElI4wX513doWUSVxyZAiEAi8KNi2Hax34qVax%2FliomosEm4C2K2i9mo2f4Lg0FPHMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNI5m3aZzeRYJNL44SrcA0XrLUjzZE%2FOJsltumOQ5ajUpvK0acoRg74mk1p5mludF9o2TQtLg%2FwZSfXG4YPWeQRXMEWutMuPMoipx%2Bdc0negLbhLR5Tz3lzPoQn950mCPliKUhgBHDEuZ%2BVKC9blh0V0FcCeXWgcqSAM3l33o%2F%2BW0hDPeN5R4SZmWppXu6zSCD2znQDHRbxKgePOuJiCwdWJ%2BAbn9uBEaLcwFalb0RDbx%2BdG8Ls2FLq1uV4MFa6mTNlBqBttb7xSECjWBXHVIycupGaLdK%2Fv%2F92kwKkoLx%2BrqYORxPOP1vjlQW6k2EkR8TG3PQMonf0PIVBk5zVgMZbsUs6ZguJ4gKPBnJW7%2F0gQEkM%2BeudsyyXjDBhD20yALvJlO0%2B%2Fx2ZotLobz8AzuEjTM5WD6cCj2dm0xl1SadI1n1drfk7bVOPjX23EFfXvae2yX%2BcwcLnqXoKOVYkQR3N52Aa24F3gsq3TSyhuqjTRRAJEl4NxvReju%2FY21o7aczS56o2gwxQbsib2A5l6VHlPH5CjWZ%2BOI4a2QCQOxv8VkCY9sHi5%2FAWvAvrt21f6IB9DQ7htfA203elcWbAZ9VNx67Y%2F%2FkkQchlq2r%2FfTXPlOjRkAV3aza7WFoxLAo6XRLX5v%2BP2hxaUnHObMKaArb4GOqUBaNUM6Pvmz2AbjodZHIquuBtKcURbr2uAUc5z1ehJbGVfuzzN74gPEzieEDOeSR8zYLbMLU3y0spW2XrfX4XYU5MsjK8uuf6H8H8k0KD3pD9XD1Lqv%2F2LYc2JDGSe%2FSXYKUuFVOB2I69IahdpHx1oqzdu%2FpvIQwa9957fCDGnQz7B4eRGyGPDDdf65NpV0syfmKcQy6ZYHpY8N3kNc6s2F1SKnmd5&X-Amz-Signature=8ec8509d13d56bdbe22efe639df951fbdaa170f67d3b7934525abdaef5fc564a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
