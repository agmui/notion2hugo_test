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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOVRY4D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoedMdtt9c6XtMr9fBcA86ihvvcIDER8L5ViTcqS8fpQIhALE9fNPAEViSIq76Qsz1k%2BzlTAlFgIZCqhh7zFJJ%2B5EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzODub1YCtSW3AGmBUq3AN%2B6h%2FM0%2B4kRwHyvFmDzP2DAhuCw5SMbkW926Lwk0BrdAkin%2BVbV%2BsPwVdXYyECYPMRsAhIlPlyHVBvS7YTbRW4fJ530YjE2nqoQb92aWji%2BMz%2FJ%2BClEF7X52cPhea15MhFNIcyv%2BEFKjih8IHBNFulD7TTA%2BeZbrazJEzANf%2FJZbXP0lPfdASGtWqXMTdmbBXWYJOh0UfYEzT9y455YJrWdBv%2BIM5n18J%2F7xFBRMh2rqlcWyt6%2F6dVO7ZdOkGOSQSdP07MH%2FmiEfiVXI%2FkrPw6MFh51XEtdyH8TPc%2B6zeADaJq8Sk8BqAzsFa4H75vvip2ZDpwNqbt8k%2FlU%2Fi5zABunyYyAN3Dkp%2BtiopOWpTUMYrHuT%2FoOEfkHCGC3%2FnTkNLVzCijkGOdhKtUoajAnoDQlHSpgPu1%2B5NqrWQB3ZoPRwdRLuQ7utZVoKHXe3FsvohakOZ87KhxYBtD683YY2n3Datt0QO84i7KbBcamYrrg7hgjDsj02jESpDY3uS6MCkBo1MeF4wrs11kDWw0jiL%2BcZXNvCBx%2FVe%2F%2BPX%2BgwvNuYdVP1LC%2FOOQQt8AdMPQ%2Bjaj06UfvKtOaVBuRfOU13r1HEp3K4x5CMO7yJaVnZmcMwqN%2Ft2i7l1VxurUlzDmquC%2BBjqkAb%2Bf9peCv6j0AZ%2B511Vpsr%2B8EqTerlVCWS%2FQMo0yV5vO%2BtTrvcU2cM4PxvszZ6c4%2FFKRMhRxRKwm9JFxpmv5nyPx3qL3Q7BSGleGAe%2Bmaf2dilfu7o%2FuDM56kWFiMaSVlqrZMQtYxpnZKuXqwjGeWefFCc3jys2WeRuYfB48cL9h5D0kxi5Y2jQiuj%2Bfvgyb9eVIFhXiIiym%2FCMAtF4xWj0Tjz3d&X-Amz-Signature=29354f7118cf693be2b43594662f1fba9e578c1f1e5875df799c0d7ba03cc4d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOVRY4D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoedMdtt9c6XtMr9fBcA86ihvvcIDER8L5ViTcqS8fpQIhALE9fNPAEViSIq76Qsz1k%2BzlTAlFgIZCqhh7zFJJ%2B5EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzODub1YCtSW3AGmBUq3AN%2B6h%2FM0%2B4kRwHyvFmDzP2DAhuCw5SMbkW926Lwk0BrdAkin%2BVbV%2BsPwVdXYyECYPMRsAhIlPlyHVBvS7YTbRW4fJ530YjE2nqoQb92aWji%2BMz%2FJ%2BClEF7X52cPhea15MhFNIcyv%2BEFKjih8IHBNFulD7TTA%2BeZbrazJEzANf%2FJZbXP0lPfdASGtWqXMTdmbBXWYJOh0UfYEzT9y455YJrWdBv%2BIM5n18J%2F7xFBRMh2rqlcWyt6%2F6dVO7ZdOkGOSQSdP07MH%2FmiEfiVXI%2FkrPw6MFh51XEtdyH8TPc%2B6zeADaJq8Sk8BqAzsFa4H75vvip2ZDpwNqbt8k%2FlU%2Fi5zABunyYyAN3Dkp%2BtiopOWpTUMYrHuT%2FoOEfkHCGC3%2FnTkNLVzCijkGOdhKtUoajAnoDQlHSpgPu1%2B5NqrWQB3ZoPRwdRLuQ7utZVoKHXe3FsvohakOZ87KhxYBtD683YY2n3Datt0QO84i7KbBcamYrrg7hgjDsj02jESpDY3uS6MCkBo1MeF4wrs11kDWw0jiL%2BcZXNvCBx%2FVe%2F%2BPX%2BgwvNuYdVP1LC%2FOOQQt8AdMPQ%2Bjaj06UfvKtOaVBuRfOU13r1HEp3K4x5CMO7yJaVnZmcMwqN%2Ft2i7l1VxurUlzDmquC%2BBjqkAb%2Bf9peCv6j0AZ%2B511Vpsr%2B8EqTerlVCWS%2FQMo0yV5vO%2BtTrvcU2cM4PxvszZ6c4%2FFKRMhRxRKwm9JFxpmv5nyPx3qL3Q7BSGleGAe%2Bmaf2dilfu7o%2FuDM56kWFiMaSVlqrZMQtYxpnZKuXqwjGeWefFCc3jys2WeRuYfB48cL9h5D0kxi5Y2jQiuj%2Bfvgyb9eVIFhXiIiym%2FCMAtF4xWj0Tjz3d&X-Amz-Signature=e0973e7147dc969a4029d5cb690417efe6d538855a18639e22a888850fc81c71&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOVRY4D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoedMdtt9c6XtMr9fBcA86ihvvcIDER8L5ViTcqS8fpQIhALE9fNPAEViSIq76Qsz1k%2BzlTAlFgIZCqhh7zFJJ%2B5EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzODub1YCtSW3AGmBUq3AN%2B6h%2FM0%2B4kRwHyvFmDzP2DAhuCw5SMbkW926Lwk0BrdAkin%2BVbV%2BsPwVdXYyECYPMRsAhIlPlyHVBvS7YTbRW4fJ530YjE2nqoQb92aWji%2BMz%2FJ%2BClEF7X52cPhea15MhFNIcyv%2BEFKjih8IHBNFulD7TTA%2BeZbrazJEzANf%2FJZbXP0lPfdASGtWqXMTdmbBXWYJOh0UfYEzT9y455YJrWdBv%2BIM5n18J%2F7xFBRMh2rqlcWyt6%2F6dVO7ZdOkGOSQSdP07MH%2FmiEfiVXI%2FkrPw6MFh51XEtdyH8TPc%2B6zeADaJq8Sk8BqAzsFa4H75vvip2ZDpwNqbt8k%2FlU%2Fi5zABunyYyAN3Dkp%2BtiopOWpTUMYrHuT%2FoOEfkHCGC3%2FnTkNLVzCijkGOdhKtUoajAnoDQlHSpgPu1%2B5NqrWQB3ZoPRwdRLuQ7utZVoKHXe3FsvohakOZ87KhxYBtD683YY2n3Datt0QO84i7KbBcamYrrg7hgjDsj02jESpDY3uS6MCkBo1MeF4wrs11kDWw0jiL%2BcZXNvCBx%2FVe%2F%2BPX%2BgwvNuYdVP1LC%2FOOQQt8AdMPQ%2Bjaj06UfvKtOaVBuRfOU13r1HEp3K4x5CMO7yJaVnZmcMwqN%2Ft2i7l1VxurUlzDmquC%2BBjqkAb%2Bf9peCv6j0AZ%2B511Vpsr%2B8EqTerlVCWS%2FQMo0yV5vO%2BtTrvcU2cM4PxvszZ6c4%2FFKRMhRxRKwm9JFxpmv5nyPx3qL3Q7BSGleGAe%2Bmaf2dilfu7o%2FuDM56kWFiMaSVlqrZMQtYxpnZKuXqwjGeWefFCc3jys2WeRuYfB48cL9h5D0kxi5Y2jQiuj%2Bfvgyb9eVIFhXiIiym%2FCMAtF4xWj0Tjz3d&X-Amz-Signature=a7ba78254bf88adb550da515a318372dde0487580cdbe11ccd5dad996cda7b88&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOVRY4D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoedMdtt9c6XtMr9fBcA86ihvvcIDER8L5ViTcqS8fpQIhALE9fNPAEViSIq76Qsz1k%2BzlTAlFgIZCqhh7zFJJ%2B5EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzODub1YCtSW3AGmBUq3AN%2B6h%2FM0%2B4kRwHyvFmDzP2DAhuCw5SMbkW926Lwk0BrdAkin%2BVbV%2BsPwVdXYyECYPMRsAhIlPlyHVBvS7YTbRW4fJ530YjE2nqoQb92aWji%2BMz%2FJ%2BClEF7X52cPhea15MhFNIcyv%2BEFKjih8IHBNFulD7TTA%2BeZbrazJEzANf%2FJZbXP0lPfdASGtWqXMTdmbBXWYJOh0UfYEzT9y455YJrWdBv%2BIM5n18J%2F7xFBRMh2rqlcWyt6%2F6dVO7ZdOkGOSQSdP07MH%2FmiEfiVXI%2FkrPw6MFh51XEtdyH8TPc%2B6zeADaJq8Sk8BqAzsFa4H75vvip2ZDpwNqbt8k%2FlU%2Fi5zABunyYyAN3Dkp%2BtiopOWpTUMYrHuT%2FoOEfkHCGC3%2FnTkNLVzCijkGOdhKtUoajAnoDQlHSpgPu1%2B5NqrWQB3ZoPRwdRLuQ7utZVoKHXe3FsvohakOZ87KhxYBtD683YY2n3Datt0QO84i7KbBcamYrrg7hgjDsj02jESpDY3uS6MCkBo1MeF4wrs11kDWw0jiL%2BcZXNvCBx%2FVe%2F%2BPX%2BgwvNuYdVP1LC%2FOOQQt8AdMPQ%2Bjaj06UfvKtOaVBuRfOU13r1HEp3K4x5CMO7yJaVnZmcMwqN%2Ft2i7l1VxurUlzDmquC%2BBjqkAb%2Bf9peCv6j0AZ%2B511Vpsr%2B8EqTerlVCWS%2FQMo0yV5vO%2BtTrvcU2cM4PxvszZ6c4%2FFKRMhRxRKwm9JFxpmv5nyPx3qL3Q7BSGleGAe%2Bmaf2dilfu7o%2FuDM56kWFiMaSVlqrZMQtYxpnZKuXqwjGeWefFCc3jys2WeRuYfB48cL9h5D0kxi5Y2jQiuj%2Bfvgyb9eVIFhXiIiym%2FCMAtF4xWj0Tjz3d&X-Amz-Signature=7f7b9f4fb0586807346664e22fd90cf5663d20db594bef60215a4a845fd9f439&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOVRY4D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoedMdtt9c6XtMr9fBcA86ihvvcIDER8L5ViTcqS8fpQIhALE9fNPAEViSIq76Qsz1k%2BzlTAlFgIZCqhh7zFJJ%2B5EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzODub1YCtSW3AGmBUq3AN%2B6h%2FM0%2B4kRwHyvFmDzP2DAhuCw5SMbkW926Lwk0BrdAkin%2BVbV%2BsPwVdXYyECYPMRsAhIlPlyHVBvS7YTbRW4fJ530YjE2nqoQb92aWji%2BMz%2FJ%2BClEF7X52cPhea15MhFNIcyv%2BEFKjih8IHBNFulD7TTA%2BeZbrazJEzANf%2FJZbXP0lPfdASGtWqXMTdmbBXWYJOh0UfYEzT9y455YJrWdBv%2BIM5n18J%2F7xFBRMh2rqlcWyt6%2F6dVO7ZdOkGOSQSdP07MH%2FmiEfiVXI%2FkrPw6MFh51XEtdyH8TPc%2B6zeADaJq8Sk8BqAzsFa4H75vvip2ZDpwNqbt8k%2FlU%2Fi5zABunyYyAN3Dkp%2BtiopOWpTUMYrHuT%2FoOEfkHCGC3%2FnTkNLVzCijkGOdhKtUoajAnoDQlHSpgPu1%2B5NqrWQB3ZoPRwdRLuQ7utZVoKHXe3FsvohakOZ87KhxYBtD683YY2n3Datt0QO84i7KbBcamYrrg7hgjDsj02jESpDY3uS6MCkBo1MeF4wrs11kDWw0jiL%2BcZXNvCBx%2FVe%2F%2BPX%2BgwvNuYdVP1LC%2FOOQQt8AdMPQ%2Bjaj06UfvKtOaVBuRfOU13r1HEp3K4x5CMO7yJaVnZmcMwqN%2Ft2i7l1VxurUlzDmquC%2BBjqkAb%2Bf9peCv6j0AZ%2B511Vpsr%2B8EqTerlVCWS%2FQMo0yV5vO%2BtTrvcU2cM4PxvszZ6c4%2FFKRMhRxRKwm9JFxpmv5nyPx3qL3Q7BSGleGAe%2Bmaf2dilfu7o%2FuDM56kWFiMaSVlqrZMQtYxpnZKuXqwjGeWefFCc3jys2WeRuYfB48cL9h5D0kxi5Y2jQiuj%2Bfvgyb9eVIFhXiIiym%2FCMAtF4xWj0Tjz3d&X-Amz-Signature=2b460be2c306e393cdbfeb2c6a1f1ac53a482c21793a71cad006952d6ab50b84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOVRY4D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoedMdtt9c6XtMr9fBcA86ihvvcIDER8L5ViTcqS8fpQIhALE9fNPAEViSIq76Qsz1k%2BzlTAlFgIZCqhh7zFJJ%2B5EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzODub1YCtSW3AGmBUq3AN%2B6h%2FM0%2B4kRwHyvFmDzP2DAhuCw5SMbkW926Lwk0BrdAkin%2BVbV%2BsPwVdXYyECYPMRsAhIlPlyHVBvS7YTbRW4fJ530YjE2nqoQb92aWji%2BMz%2FJ%2BClEF7X52cPhea15MhFNIcyv%2BEFKjih8IHBNFulD7TTA%2BeZbrazJEzANf%2FJZbXP0lPfdASGtWqXMTdmbBXWYJOh0UfYEzT9y455YJrWdBv%2BIM5n18J%2F7xFBRMh2rqlcWyt6%2F6dVO7ZdOkGOSQSdP07MH%2FmiEfiVXI%2FkrPw6MFh51XEtdyH8TPc%2B6zeADaJq8Sk8BqAzsFa4H75vvip2ZDpwNqbt8k%2FlU%2Fi5zABunyYyAN3Dkp%2BtiopOWpTUMYrHuT%2FoOEfkHCGC3%2FnTkNLVzCijkGOdhKtUoajAnoDQlHSpgPu1%2B5NqrWQB3ZoPRwdRLuQ7utZVoKHXe3FsvohakOZ87KhxYBtD683YY2n3Datt0QO84i7KbBcamYrrg7hgjDsj02jESpDY3uS6MCkBo1MeF4wrs11kDWw0jiL%2BcZXNvCBx%2FVe%2F%2BPX%2BgwvNuYdVP1LC%2FOOQQt8AdMPQ%2Bjaj06UfvKtOaVBuRfOU13r1HEp3K4x5CMO7yJaVnZmcMwqN%2Ft2i7l1VxurUlzDmquC%2BBjqkAb%2Bf9peCv6j0AZ%2B511Vpsr%2B8EqTerlVCWS%2FQMo0yV5vO%2BtTrvcU2cM4PxvszZ6c4%2FFKRMhRxRKwm9JFxpmv5nyPx3qL3Q7BSGleGAe%2Bmaf2dilfu7o%2FuDM56kWFiMaSVlqrZMQtYxpnZKuXqwjGeWefFCc3jys2WeRuYfB48cL9h5D0kxi5Y2jQiuj%2Bfvgyb9eVIFhXiIiym%2FCMAtF4xWj0Tjz3d&X-Amz-Signature=59ac3e94fc0eb46abf2e82344318473c9d0db5f503838ed8a41f111f6b227c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOVRY4D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoedMdtt9c6XtMr9fBcA86ihvvcIDER8L5ViTcqS8fpQIhALE9fNPAEViSIq76Qsz1k%2BzlTAlFgIZCqhh7zFJJ%2B5EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzODub1YCtSW3AGmBUq3AN%2B6h%2FM0%2B4kRwHyvFmDzP2DAhuCw5SMbkW926Lwk0BrdAkin%2BVbV%2BsPwVdXYyECYPMRsAhIlPlyHVBvS7YTbRW4fJ530YjE2nqoQb92aWji%2BMz%2FJ%2BClEF7X52cPhea15MhFNIcyv%2BEFKjih8IHBNFulD7TTA%2BeZbrazJEzANf%2FJZbXP0lPfdASGtWqXMTdmbBXWYJOh0UfYEzT9y455YJrWdBv%2BIM5n18J%2F7xFBRMh2rqlcWyt6%2F6dVO7ZdOkGOSQSdP07MH%2FmiEfiVXI%2FkrPw6MFh51XEtdyH8TPc%2B6zeADaJq8Sk8BqAzsFa4H75vvip2ZDpwNqbt8k%2FlU%2Fi5zABunyYyAN3Dkp%2BtiopOWpTUMYrHuT%2FoOEfkHCGC3%2FnTkNLVzCijkGOdhKtUoajAnoDQlHSpgPu1%2B5NqrWQB3ZoPRwdRLuQ7utZVoKHXe3FsvohakOZ87KhxYBtD683YY2n3Datt0QO84i7KbBcamYrrg7hgjDsj02jESpDY3uS6MCkBo1MeF4wrs11kDWw0jiL%2BcZXNvCBx%2FVe%2F%2BPX%2BgwvNuYdVP1LC%2FOOQQt8AdMPQ%2Bjaj06UfvKtOaVBuRfOU13r1HEp3K4x5CMO7yJaVnZmcMwqN%2Ft2i7l1VxurUlzDmquC%2BBjqkAb%2Bf9peCv6j0AZ%2B511Vpsr%2B8EqTerlVCWS%2FQMo0yV5vO%2BtTrvcU2cM4PxvszZ6c4%2FFKRMhRxRKwm9JFxpmv5nyPx3qL3Q7BSGleGAe%2Bmaf2dilfu7o%2FuDM56kWFiMaSVlqrZMQtYxpnZKuXqwjGeWefFCc3jys2WeRuYfB48cL9h5D0kxi5Y2jQiuj%2Bfvgyb9eVIFhXiIiym%2FCMAtF4xWj0Tjz3d&X-Amz-Signature=8a9902b91ecdc342cc99d42ae7f5cca3a5a679e6dfb32d5e99ca25c73f943c28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOVRY4D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoedMdtt9c6XtMr9fBcA86ihvvcIDER8L5ViTcqS8fpQIhALE9fNPAEViSIq76Qsz1k%2BzlTAlFgIZCqhh7zFJJ%2B5EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzODub1YCtSW3AGmBUq3AN%2B6h%2FM0%2B4kRwHyvFmDzP2DAhuCw5SMbkW926Lwk0BrdAkin%2BVbV%2BsPwVdXYyECYPMRsAhIlPlyHVBvS7YTbRW4fJ530YjE2nqoQb92aWji%2BMz%2FJ%2BClEF7X52cPhea15MhFNIcyv%2BEFKjih8IHBNFulD7TTA%2BeZbrazJEzANf%2FJZbXP0lPfdASGtWqXMTdmbBXWYJOh0UfYEzT9y455YJrWdBv%2BIM5n18J%2F7xFBRMh2rqlcWyt6%2F6dVO7ZdOkGOSQSdP07MH%2FmiEfiVXI%2FkrPw6MFh51XEtdyH8TPc%2B6zeADaJq8Sk8BqAzsFa4H75vvip2ZDpwNqbt8k%2FlU%2Fi5zABunyYyAN3Dkp%2BtiopOWpTUMYrHuT%2FoOEfkHCGC3%2FnTkNLVzCijkGOdhKtUoajAnoDQlHSpgPu1%2B5NqrWQB3ZoPRwdRLuQ7utZVoKHXe3FsvohakOZ87KhxYBtD683YY2n3Datt0QO84i7KbBcamYrrg7hgjDsj02jESpDY3uS6MCkBo1MeF4wrs11kDWw0jiL%2BcZXNvCBx%2FVe%2F%2BPX%2BgwvNuYdVP1LC%2FOOQQt8AdMPQ%2Bjaj06UfvKtOaVBuRfOU13r1HEp3K4x5CMO7yJaVnZmcMwqN%2Ft2i7l1VxurUlzDmquC%2BBjqkAb%2Bf9peCv6j0AZ%2B511Vpsr%2B8EqTerlVCWS%2FQMo0yV5vO%2BtTrvcU2cM4PxvszZ6c4%2FFKRMhRxRKwm9JFxpmv5nyPx3qL3Q7BSGleGAe%2Bmaf2dilfu7o%2FuDM56kWFiMaSVlqrZMQtYxpnZKuXqwjGeWefFCc3jys2WeRuYfB48cL9h5D0kxi5Y2jQiuj%2Bfvgyb9eVIFhXiIiym%2FCMAtF4xWj0Tjz3d&X-Amz-Signature=ece229b20073b4f9b4c68769e0f043e0875e72c7d0791f6c271970a44e453e24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
