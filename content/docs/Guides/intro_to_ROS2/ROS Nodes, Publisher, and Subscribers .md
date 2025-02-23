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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMZSID%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmREmAlrbK%2FN9QbA0Ifvd5wzQIFYGTl5K00A3bIt1O%2BAIhAKctqPspW1IsiYP8Fdipwo1Gp1a78HovLYSEzzu8ZmkoKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYFIGEtYSIer60Lgq3APNDrYFCPYC3%2BdV0sHsICFy0XQTysuF2ay5xZTKUk4F2bD%2FcflAbR6AgXs6mAuYTzo63IBPc7gWFnX4Yb%2FgoloRB7T9Q3U9Szn96IUoVbFj3DNkfFGAv7%2FUE4t8Kq24YHs1QVi2QTMchlUcnEfpCsGGyZ50UtUnIYHVCETqcucB%2FblIaT29%2FBeu9E1ibYa1RyAQgS6v26Ov4VWMBo9wdyvqxR7p8686fhhOtjc0s3HJN8hsLvtRPNgXxfprgI0adOrtF8WXgAf38p7wAsSOTNZQ8%2B0V2yJfwuj9O8BVuh%2Bhq8nTCYXY0hi7Mo9u7u280aFCCouGb4OvbBUsy9l%2BzgNs8wW0WfKHNwlPgMQZIlVqTW0YI73ekX0ogVpegaIyyVHiDqE94One%2Bu5USsiTRM23uzrvwDLA9yMT7Cg3c3XBqORB1KPALg38uFP7Ngr5CrHeJ4LzSNN5hDqko3oHdsYA9Kog5MfaQrSGVD8SYpmDvRQD7OnM%2FrkIRoYR89AZmwl%2BYlrhutZET1Mn8xPmrhccZ2hlmLbXyyUiN6NWU5cFlrhxoRsMzJ0HmEmSBGusbrJYd5vNfmGMF5k0ZZk%2BAZnNEDqKrtkwz47tKLEE9Hp3%2Bbe2SX7AcjxifY1LFDDdxeq9BjqkAb%2BsjY%2Fz3fNzxq1I0g6bWrriO50FK%2FsS0PjqiHdw0Gq8gHgEMY5yQFlH%2F02lwpvXlED5zMi2la%2BgJvWXCleht4AT%2Fk6EPs2Qry5kU8Ei8Jm8GwJGpZaU60x1aCLWEadzXDiF47lVLtB3ToNVjHBMaivn4pVgD4TCU3Kts90mmmIuOceLeAngYxHSeagioPXzHDOlZe%2BDbRRygfFv7O%2Fx%2FcsrPv5n&X-Amz-Signature=9792d9cd598afd00483e18a90d5bc568927437b60475ada7f4cce55edb7c6c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMZSID%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmREmAlrbK%2FN9QbA0Ifvd5wzQIFYGTl5K00A3bIt1O%2BAIhAKctqPspW1IsiYP8Fdipwo1Gp1a78HovLYSEzzu8ZmkoKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYFIGEtYSIer60Lgq3APNDrYFCPYC3%2BdV0sHsICFy0XQTysuF2ay5xZTKUk4F2bD%2FcflAbR6AgXs6mAuYTzo63IBPc7gWFnX4Yb%2FgoloRB7T9Q3U9Szn96IUoVbFj3DNkfFGAv7%2FUE4t8Kq24YHs1QVi2QTMchlUcnEfpCsGGyZ50UtUnIYHVCETqcucB%2FblIaT29%2FBeu9E1ibYa1RyAQgS6v26Ov4VWMBo9wdyvqxR7p8686fhhOtjc0s3HJN8hsLvtRPNgXxfprgI0adOrtF8WXgAf38p7wAsSOTNZQ8%2B0V2yJfwuj9O8BVuh%2Bhq8nTCYXY0hi7Mo9u7u280aFCCouGb4OvbBUsy9l%2BzgNs8wW0WfKHNwlPgMQZIlVqTW0YI73ekX0ogVpegaIyyVHiDqE94One%2Bu5USsiTRM23uzrvwDLA9yMT7Cg3c3XBqORB1KPALg38uFP7Ngr5CrHeJ4LzSNN5hDqko3oHdsYA9Kog5MfaQrSGVD8SYpmDvRQD7OnM%2FrkIRoYR89AZmwl%2BYlrhutZET1Mn8xPmrhccZ2hlmLbXyyUiN6NWU5cFlrhxoRsMzJ0HmEmSBGusbrJYd5vNfmGMF5k0ZZk%2BAZnNEDqKrtkwz47tKLEE9Hp3%2Bbe2SX7AcjxifY1LFDDdxeq9BjqkAb%2BsjY%2Fz3fNzxq1I0g6bWrriO50FK%2FsS0PjqiHdw0Gq8gHgEMY5yQFlH%2F02lwpvXlED5zMi2la%2BgJvWXCleht4AT%2Fk6EPs2Qry5kU8Ei8Jm8GwJGpZaU60x1aCLWEadzXDiF47lVLtB3ToNVjHBMaivn4pVgD4TCU3Kts90mmmIuOceLeAngYxHSeagioPXzHDOlZe%2BDbRRygfFv7O%2Fx%2FcsrPv5n&X-Amz-Signature=e1781e7cf48503995d6af3c40682415710e1e84115a2d346804fdec0a1163985&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMZSID%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmREmAlrbK%2FN9QbA0Ifvd5wzQIFYGTl5K00A3bIt1O%2BAIhAKctqPspW1IsiYP8Fdipwo1Gp1a78HovLYSEzzu8ZmkoKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYFIGEtYSIer60Lgq3APNDrYFCPYC3%2BdV0sHsICFy0XQTysuF2ay5xZTKUk4F2bD%2FcflAbR6AgXs6mAuYTzo63IBPc7gWFnX4Yb%2FgoloRB7T9Q3U9Szn96IUoVbFj3DNkfFGAv7%2FUE4t8Kq24YHs1QVi2QTMchlUcnEfpCsGGyZ50UtUnIYHVCETqcucB%2FblIaT29%2FBeu9E1ibYa1RyAQgS6v26Ov4VWMBo9wdyvqxR7p8686fhhOtjc0s3HJN8hsLvtRPNgXxfprgI0adOrtF8WXgAf38p7wAsSOTNZQ8%2B0V2yJfwuj9O8BVuh%2Bhq8nTCYXY0hi7Mo9u7u280aFCCouGb4OvbBUsy9l%2BzgNs8wW0WfKHNwlPgMQZIlVqTW0YI73ekX0ogVpegaIyyVHiDqE94One%2Bu5USsiTRM23uzrvwDLA9yMT7Cg3c3XBqORB1KPALg38uFP7Ngr5CrHeJ4LzSNN5hDqko3oHdsYA9Kog5MfaQrSGVD8SYpmDvRQD7OnM%2FrkIRoYR89AZmwl%2BYlrhutZET1Mn8xPmrhccZ2hlmLbXyyUiN6NWU5cFlrhxoRsMzJ0HmEmSBGusbrJYd5vNfmGMF5k0ZZk%2BAZnNEDqKrtkwz47tKLEE9Hp3%2Bbe2SX7AcjxifY1LFDDdxeq9BjqkAb%2BsjY%2Fz3fNzxq1I0g6bWrriO50FK%2FsS0PjqiHdw0Gq8gHgEMY5yQFlH%2F02lwpvXlED5zMi2la%2BgJvWXCleht4AT%2Fk6EPs2Qry5kU8Ei8Jm8GwJGpZaU60x1aCLWEadzXDiF47lVLtB3ToNVjHBMaivn4pVgD4TCU3Kts90mmmIuOceLeAngYxHSeagioPXzHDOlZe%2BDbRRygfFv7O%2Fx%2FcsrPv5n&X-Amz-Signature=e5d08ed35191d811421a7db654b795e0d2f8ed4b758aaf089898d1c60b642afe&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMZSID%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmREmAlrbK%2FN9QbA0Ifvd5wzQIFYGTl5K00A3bIt1O%2BAIhAKctqPspW1IsiYP8Fdipwo1Gp1a78HovLYSEzzu8ZmkoKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYFIGEtYSIer60Lgq3APNDrYFCPYC3%2BdV0sHsICFy0XQTysuF2ay5xZTKUk4F2bD%2FcflAbR6AgXs6mAuYTzo63IBPc7gWFnX4Yb%2FgoloRB7T9Q3U9Szn96IUoVbFj3DNkfFGAv7%2FUE4t8Kq24YHs1QVi2QTMchlUcnEfpCsGGyZ50UtUnIYHVCETqcucB%2FblIaT29%2FBeu9E1ibYa1RyAQgS6v26Ov4VWMBo9wdyvqxR7p8686fhhOtjc0s3HJN8hsLvtRPNgXxfprgI0adOrtF8WXgAf38p7wAsSOTNZQ8%2B0V2yJfwuj9O8BVuh%2Bhq8nTCYXY0hi7Mo9u7u280aFCCouGb4OvbBUsy9l%2BzgNs8wW0WfKHNwlPgMQZIlVqTW0YI73ekX0ogVpegaIyyVHiDqE94One%2Bu5USsiTRM23uzrvwDLA9yMT7Cg3c3XBqORB1KPALg38uFP7Ngr5CrHeJ4LzSNN5hDqko3oHdsYA9Kog5MfaQrSGVD8SYpmDvRQD7OnM%2FrkIRoYR89AZmwl%2BYlrhutZET1Mn8xPmrhccZ2hlmLbXyyUiN6NWU5cFlrhxoRsMzJ0HmEmSBGusbrJYd5vNfmGMF5k0ZZk%2BAZnNEDqKrtkwz47tKLEE9Hp3%2Bbe2SX7AcjxifY1LFDDdxeq9BjqkAb%2BsjY%2Fz3fNzxq1I0g6bWrriO50FK%2FsS0PjqiHdw0Gq8gHgEMY5yQFlH%2F02lwpvXlED5zMi2la%2BgJvWXCleht4AT%2Fk6EPs2Qry5kU8Ei8Jm8GwJGpZaU60x1aCLWEadzXDiF47lVLtB3ToNVjHBMaivn4pVgD4TCU3Kts90mmmIuOceLeAngYxHSeagioPXzHDOlZe%2BDbRRygfFv7O%2Fx%2FcsrPv5n&X-Amz-Signature=fe7fa6c7ea731d642d333028319bc4613859ccbcff4f2932e6d46e1d65179410&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMZSID%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmREmAlrbK%2FN9QbA0Ifvd5wzQIFYGTl5K00A3bIt1O%2BAIhAKctqPspW1IsiYP8Fdipwo1Gp1a78HovLYSEzzu8ZmkoKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYFIGEtYSIer60Lgq3APNDrYFCPYC3%2BdV0sHsICFy0XQTysuF2ay5xZTKUk4F2bD%2FcflAbR6AgXs6mAuYTzo63IBPc7gWFnX4Yb%2FgoloRB7T9Q3U9Szn96IUoVbFj3DNkfFGAv7%2FUE4t8Kq24YHs1QVi2QTMchlUcnEfpCsGGyZ50UtUnIYHVCETqcucB%2FblIaT29%2FBeu9E1ibYa1RyAQgS6v26Ov4VWMBo9wdyvqxR7p8686fhhOtjc0s3HJN8hsLvtRPNgXxfprgI0adOrtF8WXgAf38p7wAsSOTNZQ8%2B0V2yJfwuj9O8BVuh%2Bhq8nTCYXY0hi7Mo9u7u280aFCCouGb4OvbBUsy9l%2BzgNs8wW0WfKHNwlPgMQZIlVqTW0YI73ekX0ogVpegaIyyVHiDqE94One%2Bu5USsiTRM23uzrvwDLA9yMT7Cg3c3XBqORB1KPALg38uFP7Ngr5CrHeJ4LzSNN5hDqko3oHdsYA9Kog5MfaQrSGVD8SYpmDvRQD7OnM%2FrkIRoYR89AZmwl%2BYlrhutZET1Mn8xPmrhccZ2hlmLbXyyUiN6NWU5cFlrhxoRsMzJ0HmEmSBGusbrJYd5vNfmGMF5k0ZZk%2BAZnNEDqKrtkwz47tKLEE9Hp3%2Bbe2SX7AcjxifY1LFDDdxeq9BjqkAb%2BsjY%2Fz3fNzxq1I0g6bWrriO50FK%2FsS0PjqiHdw0Gq8gHgEMY5yQFlH%2F02lwpvXlED5zMi2la%2BgJvWXCleht4AT%2Fk6EPs2Qry5kU8Ei8Jm8GwJGpZaU60x1aCLWEadzXDiF47lVLtB3ToNVjHBMaivn4pVgD4TCU3Kts90mmmIuOceLeAngYxHSeagioPXzHDOlZe%2BDbRRygfFv7O%2Fx%2FcsrPv5n&X-Amz-Signature=d73c23118d83469241f9d59bd04b760ec27463409067bab36f1c65c27c7293e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMZSID%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmREmAlrbK%2FN9QbA0Ifvd5wzQIFYGTl5K00A3bIt1O%2BAIhAKctqPspW1IsiYP8Fdipwo1Gp1a78HovLYSEzzu8ZmkoKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYFIGEtYSIer60Lgq3APNDrYFCPYC3%2BdV0sHsICFy0XQTysuF2ay5xZTKUk4F2bD%2FcflAbR6AgXs6mAuYTzo63IBPc7gWFnX4Yb%2FgoloRB7T9Q3U9Szn96IUoVbFj3DNkfFGAv7%2FUE4t8Kq24YHs1QVi2QTMchlUcnEfpCsGGyZ50UtUnIYHVCETqcucB%2FblIaT29%2FBeu9E1ibYa1RyAQgS6v26Ov4VWMBo9wdyvqxR7p8686fhhOtjc0s3HJN8hsLvtRPNgXxfprgI0adOrtF8WXgAf38p7wAsSOTNZQ8%2B0V2yJfwuj9O8BVuh%2Bhq8nTCYXY0hi7Mo9u7u280aFCCouGb4OvbBUsy9l%2BzgNs8wW0WfKHNwlPgMQZIlVqTW0YI73ekX0ogVpegaIyyVHiDqE94One%2Bu5USsiTRM23uzrvwDLA9yMT7Cg3c3XBqORB1KPALg38uFP7Ngr5CrHeJ4LzSNN5hDqko3oHdsYA9Kog5MfaQrSGVD8SYpmDvRQD7OnM%2FrkIRoYR89AZmwl%2BYlrhutZET1Mn8xPmrhccZ2hlmLbXyyUiN6NWU5cFlrhxoRsMzJ0HmEmSBGusbrJYd5vNfmGMF5k0ZZk%2BAZnNEDqKrtkwz47tKLEE9Hp3%2Bbe2SX7AcjxifY1LFDDdxeq9BjqkAb%2BsjY%2Fz3fNzxq1I0g6bWrriO50FK%2FsS0PjqiHdw0Gq8gHgEMY5yQFlH%2F02lwpvXlED5zMi2la%2BgJvWXCleht4AT%2Fk6EPs2Qry5kU8Ei8Jm8GwJGpZaU60x1aCLWEadzXDiF47lVLtB3ToNVjHBMaivn4pVgD4TCU3Kts90mmmIuOceLeAngYxHSeagioPXzHDOlZe%2BDbRRygfFv7O%2Fx%2FcsrPv5n&X-Amz-Signature=4cfd7ca1a1c598e5fd12d06304d36c4a41059c4e0181c9682ec0464cec6d7a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMZSID%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmREmAlrbK%2FN9QbA0Ifvd5wzQIFYGTl5K00A3bIt1O%2BAIhAKctqPspW1IsiYP8Fdipwo1Gp1a78HovLYSEzzu8ZmkoKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYFIGEtYSIer60Lgq3APNDrYFCPYC3%2BdV0sHsICFy0XQTysuF2ay5xZTKUk4F2bD%2FcflAbR6AgXs6mAuYTzo63IBPc7gWFnX4Yb%2FgoloRB7T9Q3U9Szn96IUoVbFj3DNkfFGAv7%2FUE4t8Kq24YHs1QVi2QTMchlUcnEfpCsGGyZ50UtUnIYHVCETqcucB%2FblIaT29%2FBeu9E1ibYa1RyAQgS6v26Ov4VWMBo9wdyvqxR7p8686fhhOtjc0s3HJN8hsLvtRPNgXxfprgI0adOrtF8WXgAf38p7wAsSOTNZQ8%2B0V2yJfwuj9O8BVuh%2Bhq8nTCYXY0hi7Mo9u7u280aFCCouGb4OvbBUsy9l%2BzgNs8wW0WfKHNwlPgMQZIlVqTW0YI73ekX0ogVpegaIyyVHiDqE94One%2Bu5USsiTRM23uzrvwDLA9yMT7Cg3c3XBqORB1KPALg38uFP7Ngr5CrHeJ4LzSNN5hDqko3oHdsYA9Kog5MfaQrSGVD8SYpmDvRQD7OnM%2FrkIRoYR89AZmwl%2BYlrhutZET1Mn8xPmrhccZ2hlmLbXyyUiN6NWU5cFlrhxoRsMzJ0HmEmSBGusbrJYd5vNfmGMF5k0ZZk%2BAZnNEDqKrtkwz47tKLEE9Hp3%2Bbe2SX7AcjxifY1LFDDdxeq9BjqkAb%2BsjY%2Fz3fNzxq1I0g6bWrriO50FK%2FsS0PjqiHdw0Gq8gHgEMY5yQFlH%2F02lwpvXlED5zMi2la%2BgJvWXCleht4AT%2Fk6EPs2Qry5kU8Ei8Jm8GwJGpZaU60x1aCLWEadzXDiF47lVLtB3ToNVjHBMaivn4pVgD4TCU3Kts90mmmIuOceLeAngYxHSeagioPXzHDOlZe%2BDbRRygfFv7O%2Fx%2FcsrPv5n&X-Amz-Signature=7364d873267d1ccf33fe53733ecd1fdd05802d391de05764ba78c70c053538c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMZSID%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmREmAlrbK%2FN9QbA0Ifvd5wzQIFYGTl5K00A3bIt1O%2BAIhAKctqPspW1IsiYP8Fdipwo1Gp1a78HovLYSEzzu8ZmkoKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYFIGEtYSIer60Lgq3APNDrYFCPYC3%2BdV0sHsICFy0XQTysuF2ay5xZTKUk4F2bD%2FcflAbR6AgXs6mAuYTzo63IBPc7gWFnX4Yb%2FgoloRB7T9Q3U9Szn96IUoVbFj3DNkfFGAv7%2FUE4t8Kq24YHs1QVi2QTMchlUcnEfpCsGGyZ50UtUnIYHVCETqcucB%2FblIaT29%2FBeu9E1ibYa1RyAQgS6v26Ov4VWMBo9wdyvqxR7p8686fhhOtjc0s3HJN8hsLvtRPNgXxfprgI0adOrtF8WXgAf38p7wAsSOTNZQ8%2B0V2yJfwuj9O8BVuh%2Bhq8nTCYXY0hi7Mo9u7u280aFCCouGb4OvbBUsy9l%2BzgNs8wW0WfKHNwlPgMQZIlVqTW0YI73ekX0ogVpegaIyyVHiDqE94One%2Bu5USsiTRM23uzrvwDLA9yMT7Cg3c3XBqORB1KPALg38uFP7Ngr5CrHeJ4LzSNN5hDqko3oHdsYA9Kog5MfaQrSGVD8SYpmDvRQD7OnM%2FrkIRoYR89AZmwl%2BYlrhutZET1Mn8xPmrhccZ2hlmLbXyyUiN6NWU5cFlrhxoRsMzJ0HmEmSBGusbrJYd5vNfmGMF5k0ZZk%2BAZnNEDqKrtkwz47tKLEE9Hp3%2Bbe2SX7AcjxifY1LFDDdxeq9BjqkAb%2BsjY%2Fz3fNzxq1I0g6bWrriO50FK%2FsS0PjqiHdw0Gq8gHgEMY5yQFlH%2F02lwpvXlED5zMi2la%2BgJvWXCleht4AT%2Fk6EPs2Qry5kU8Ei8Jm8GwJGpZaU60x1aCLWEadzXDiF47lVLtB3ToNVjHBMaivn4pVgD4TCU3Kts90mmmIuOceLeAngYxHSeagioPXzHDOlZe%2BDbRRygfFv7O%2Fx%2FcsrPv5n&X-Amz-Signature=16ecf8c131ba16c7a78835a0d6885cf7d85ccaff183093dfeff90b43e0f60909&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
