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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EG6W2OF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCullxyeWUZoN6xHySMrXEAgF3hEsMcceAsDs4%2FwYOURQIgewR47xuLEj19Sn2DypMhEEXweySkAaVCvw4MkSty6xgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa4jYWZbwjeNeLjCircAwbPro2QnHayGK5FtPiqvBdLOXPZ4LBJ%2F8F65%2FtLd1Arot03Qh8BikmmiALoul%2F5h%2FAzHMfHqUoVO8nm33t3iH7ObFlMeEcYSgmGNnzdnBiUwqUeLB2op2G61CDTVt1fgw2OHaHzl6KlZOlaKf5JHm1APwLrTH35tIfHPlnRWVl9N%2FF%2B4jxHgYpv71wutF%2FosI3jCW8mm59Pp6AaLGy9XS%2FMQVOMefswz591vYtpAsxbMXL2PD1GF480GSU1kbJ%2B3%2BrTHXoKDNHjN7WVjmB9BNg9fEspq8UfBt747hNQDiHmdtsbErEkFrVGqvgRV6QwLOLLjxjrMIYF%2Fqrj%2B5Cq04CWVPrY4CD%2FNZEe5XZz7Djytt%2FnCYm0Y4paz%2FMUN23WR0FM8ipk9OCOd5Refeyx0T7RC4SGV9AHv2prN2CDD%2Be1O3bwxRGpxrCKKmBjO8c%2FsqPLRM8ENi39NdiNJ0uNphLBKuWG0kw51MXjo4o%2Fi0lPlLGEkldLXCVdG3ZRmezF28O6RuulJnSI3gTL1kEAWXMW0doVXzOWcM3%2FJlOJ3WuXIJWRaj2P19o8G3NuAdrpQlzO640ICqjRS6Hf3TZn8QymvTQs3M3GrmZWW9yVHHcUgY41GJXN6CgVJwonMLaA88EGOqUBFiRbIxGQoIVCmHkaF%2B7Htn%2Bmie2L4199VaBhdDWp7hEXiD7wcqTdOliV4NR%2FvhriUypWAxhLzKJBOTH20Z36IN%2BqpJssyIa%2Bp2QTV%2Fj7TKw2YE73kWimvllOG%2FQcZ%2FniAJcECAS4TwzkYYNSgTU5e0iyT8PEUIl4noNL%2FLiP6nZ7ATjFe1IpZ%2FcqHGMWW0Qo65Df7gEfXCwkrvk1JqQp3wgo0ZPf&X-Amz-Signature=954f179e3e879433d6fd2d723df63f1aa9e0e195e102937db79e93b6d4bf818f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EG6W2OF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCullxyeWUZoN6xHySMrXEAgF3hEsMcceAsDs4%2FwYOURQIgewR47xuLEj19Sn2DypMhEEXweySkAaVCvw4MkSty6xgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa4jYWZbwjeNeLjCircAwbPro2QnHayGK5FtPiqvBdLOXPZ4LBJ%2F8F65%2FtLd1Arot03Qh8BikmmiALoul%2F5h%2FAzHMfHqUoVO8nm33t3iH7ObFlMeEcYSgmGNnzdnBiUwqUeLB2op2G61CDTVt1fgw2OHaHzl6KlZOlaKf5JHm1APwLrTH35tIfHPlnRWVl9N%2FF%2B4jxHgYpv71wutF%2FosI3jCW8mm59Pp6AaLGy9XS%2FMQVOMefswz591vYtpAsxbMXL2PD1GF480GSU1kbJ%2B3%2BrTHXoKDNHjN7WVjmB9BNg9fEspq8UfBt747hNQDiHmdtsbErEkFrVGqvgRV6QwLOLLjxjrMIYF%2Fqrj%2B5Cq04CWVPrY4CD%2FNZEe5XZz7Djytt%2FnCYm0Y4paz%2FMUN23WR0FM8ipk9OCOd5Refeyx0T7RC4SGV9AHv2prN2CDD%2Be1O3bwxRGpxrCKKmBjO8c%2FsqPLRM8ENi39NdiNJ0uNphLBKuWG0kw51MXjo4o%2Fi0lPlLGEkldLXCVdG3ZRmezF28O6RuulJnSI3gTL1kEAWXMW0doVXzOWcM3%2FJlOJ3WuXIJWRaj2P19o8G3NuAdrpQlzO640ICqjRS6Hf3TZn8QymvTQs3M3GrmZWW9yVHHcUgY41GJXN6CgVJwonMLaA88EGOqUBFiRbIxGQoIVCmHkaF%2B7Htn%2Bmie2L4199VaBhdDWp7hEXiD7wcqTdOliV4NR%2FvhriUypWAxhLzKJBOTH20Z36IN%2BqpJssyIa%2Bp2QTV%2Fj7TKw2YE73kWimvllOG%2FQcZ%2FniAJcECAS4TwzkYYNSgTU5e0iyT8PEUIl4noNL%2FLiP6nZ7ATjFe1IpZ%2FcqHGMWW0Qo65Df7gEfXCwkrvk1JqQp3wgo0ZPf&X-Amz-Signature=c4fd90eaa046c99a6e9ee8156d238800e0d72a961aea0646f6d79b8448910287&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EG6W2OF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCullxyeWUZoN6xHySMrXEAgF3hEsMcceAsDs4%2FwYOURQIgewR47xuLEj19Sn2DypMhEEXweySkAaVCvw4MkSty6xgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa4jYWZbwjeNeLjCircAwbPro2QnHayGK5FtPiqvBdLOXPZ4LBJ%2F8F65%2FtLd1Arot03Qh8BikmmiALoul%2F5h%2FAzHMfHqUoVO8nm33t3iH7ObFlMeEcYSgmGNnzdnBiUwqUeLB2op2G61CDTVt1fgw2OHaHzl6KlZOlaKf5JHm1APwLrTH35tIfHPlnRWVl9N%2FF%2B4jxHgYpv71wutF%2FosI3jCW8mm59Pp6AaLGy9XS%2FMQVOMefswz591vYtpAsxbMXL2PD1GF480GSU1kbJ%2B3%2BrTHXoKDNHjN7WVjmB9BNg9fEspq8UfBt747hNQDiHmdtsbErEkFrVGqvgRV6QwLOLLjxjrMIYF%2Fqrj%2B5Cq04CWVPrY4CD%2FNZEe5XZz7Djytt%2FnCYm0Y4paz%2FMUN23WR0FM8ipk9OCOd5Refeyx0T7RC4SGV9AHv2prN2CDD%2Be1O3bwxRGpxrCKKmBjO8c%2FsqPLRM8ENi39NdiNJ0uNphLBKuWG0kw51MXjo4o%2Fi0lPlLGEkldLXCVdG3ZRmezF28O6RuulJnSI3gTL1kEAWXMW0doVXzOWcM3%2FJlOJ3WuXIJWRaj2P19o8G3NuAdrpQlzO640ICqjRS6Hf3TZn8QymvTQs3M3GrmZWW9yVHHcUgY41GJXN6CgVJwonMLaA88EGOqUBFiRbIxGQoIVCmHkaF%2B7Htn%2Bmie2L4199VaBhdDWp7hEXiD7wcqTdOliV4NR%2FvhriUypWAxhLzKJBOTH20Z36IN%2BqpJssyIa%2Bp2QTV%2Fj7TKw2YE73kWimvllOG%2FQcZ%2FniAJcECAS4TwzkYYNSgTU5e0iyT8PEUIl4noNL%2FLiP6nZ7ATjFe1IpZ%2FcqHGMWW0Qo65Df7gEfXCwkrvk1JqQp3wgo0ZPf&X-Amz-Signature=4d44e449864f30765bb8282811e2ffdae13f17ab7c07237f488adbfe167f7ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EG6W2OF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCullxyeWUZoN6xHySMrXEAgF3hEsMcceAsDs4%2FwYOURQIgewR47xuLEj19Sn2DypMhEEXweySkAaVCvw4MkSty6xgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa4jYWZbwjeNeLjCircAwbPro2QnHayGK5FtPiqvBdLOXPZ4LBJ%2F8F65%2FtLd1Arot03Qh8BikmmiALoul%2F5h%2FAzHMfHqUoVO8nm33t3iH7ObFlMeEcYSgmGNnzdnBiUwqUeLB2op2G61CDTVt1fgw2OHaHzl6KlZOlaKf5JHm1APwLrTH35tIfHPlnRWVl9N%2FF%2B4jxHgYpv71wutF%2FosI3jCW8mm59Pp6AaLGy9XS%2FMQVOMefswz591vYtpAsxbMXL2PD1GF480GSU1kbJ%2B3%2BrTHXoKDNHjN7WVjmB9BNg9fEspq8UfBt747hNQDiHmdtsbErEkFrVGqvgRV6QwLOLLjxjrMIYF%2Fqrj%2B5Cq04CWVPrY4CD%2FNZEe5XZz7Djytt%2FnCYm0Y4paz%2FMUN23WR0FM8ipk9OCOd5Refeyx0T7RC4SGV9AHv2prN2CDD%2Be1O3bwxRGpxrCKKmBjO8c%2FsqPLRM8ENi39NdiNJ0uNphLBKuWG0kw51MXjo4o%2Fi0lPlLGEkldLXCVdG3ZRmezF28O6RuulJnSI3gTL1kEAWXMW0doVXzOWcM3%2FJlOJ3WuXIJWRaj2P19o8G3NuAdrpQlzO640ICqjRS6Hf3TZn8QymvTQs3M3GrmZWW9yVHHcUgY41GJXN6CgVJwonMLaA88EGOqUBFiRbIxGQoIVCmHkaF%2B7Htn%2Bmie2L4199VaBhdDWp7hEXiD7wcqTdOliV4NR%2FvhriUypWAxhLzKJBOTH20Z36IN%2BqpJssyIa%2Bp2QTV%2Fj7TKw2YE73kWimvllOG%2FQcZ%2FniAJcECAS4TwzkYYNSgTU5e0iyT8PEUIl4noNL%2FLiP6nZ7ATjFe1IpZ%2FcqHGMWW0Qo65Df7gEfXCwkrvk1JqQp3wgo0ZPf&X-Amz-Signature=e0afd93e72027f27bd48ab087eb453727247ef0315a006d4ffe18a8355d1cfa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EG6W2OF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCullxyeWUZoN6xHySMrXEAgF3hEsMcceAsDs4%2FwYOURQIgewR47xuLEj19Sn2DypMhEEXweySkAaVCvw4MkSty6xgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa4jYWZbwjeNeLjCircAwbPro2QnHayGK5FtPiqvBdLOXPZ4LBJ%2F8F65%2FtLd1Arot03Qh8BikmmiALoul%2F5h%2FAzHMfHqUoVO8nm33t3iH7ObFlMeEcYSgmGNnzdnBiUwqUeLB2op2G61CDTVt1fgw2OHaHzl6KlZOlaKf5JHm1APwLrTH35tIfHPlnRWVl9N%2FF%2B4jxHgYpv71wutF%2FosI3jCW8mm59Pp6AaLGy9XS%2FMQVOMefswz591vYtpAsxbMXL2PD1GF480GSU1kbJ%2B3%2BrTHXoKDNHjN7WVjmB9BNg9fEspq8UfBt747hNQDiHmdtsbErEkFrVGqvgRV6QwLOLLjxjrMIYF%2Fqrj%2B5Cq04CWVPrY4CD%2FNZEe5XZz7Djytt%2FnCYm0Y4paz%2FMUN23WR0FM8ipk9OCOd5Refeyx0T7RC4SGV9AHv2prN2CDD%2Be1O3bwxRGpxrCKKmBjO8c%2FsqPLRM8ENi39NdiNJ0uNphLBKuWG0kw51MXjo4o%2Fi0lPlLGEkldLXCVdG3ZRmezF28O6RuulJnSI3gTL1kEAWXMW0doVXzOWcM3%2FJlOJ3WuXIJWRaj2P19o8G3NuAdrpQlzO640ICqjRS6Hf3TZn8QymvTQs3M3GrmZWW9yVHHcUgY41GJXN6CgVJwonMLaA88EGOqUBFiRbIxGQoIVCmHkaF%2B7Htn%2Bmie2L4199VaBhdDWp7hEXiD7wcqTdOliV4NR%2FvhriUypWAxhLzKJBOTH20Z36IN%2BqpJssyIa%2Bp2QTV%2Fj7TKw2YE73kWimvllOG%2FQcZ%2FniAJcECAS4TwzkYYNSgTU5e0iyT8PEUIl4noNL%2FLiP6nZ7ATjFe1IpZ%2FcqHGMWW0Qo65Df7gEfXCwkrvk1JqQp3wgo0ZPf&X-Amz-Signature=b3d7b647be13c7efbfa81e76beec5eb10f298e44ad46d7c668e1ddbed2425015&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EG6W2OF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCullxyeWUZoN6xHySMrXEAgF3hEsMcceAsDs4%2FwYOURQIgewR47xuLEj19Sn2DypMhEEXweySkAaVCvw4MkSty6xgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa4jYWZbwjeNeLjCircAwbPro2QnHayGK5FtPiqvBdLOXPZ4LBJ%2F8F65%2FtLd1Arot03Qh8BikmmiALoul%2F5h%2FAzHMfHqUoVO8nm33t3iH7ObFlMeEcYSgmGNnzdnBiUwqUeLB2op2G61CDTVt1fgw2OHaHzl6KlZOlaKf5JHm1APwLrTH35tIfHPlnRWVl9N%2FF%2B4jxHgYpv71wutF%2FosI3jCW8mm59Pp6AaLGy9XS%2FMQVOMefswz591vYtpAsxbMXL2PD1GF480GSU1kbJ%2B3%2BrTHXoKDNHjN7WVjmB9BNg9fEspq8UfBt747hNQDiHmdtsbErEkFrVGqvgRV6QwLOLLjxjrMIYF%2Fqrj%2B5Cq04CWVPrY4CD%2FNZEe5XZz7Djytt%2FnCYm0Y4paz%2FMUN23WR0FM8ipk9OCOd5Refeyx0T7RC4SGV9AHv2prN2CDD%2Be1O3bwxRGpxrCKKmBjO8c%2FsqPLRM8ENi39NdiNJ0uNphLBKuWG0kw51MXjo4o%2Fi0lPlLGEkldLXCVdG3ZRmezF28O6RuulJnSI3gTL1kEAWXMW0doVXzOWcM3%2FJlOJ3WuXIJWRaj2P19o8G3NuAdrpQlzO640ICqjRS6Hf3TZn8QymvTQs3M3GrmZWW9yVHHcUgY41GJXN6CgVJwonMLaA88EGOqUBFiRbIxGQoIVCmHkaF%2B7Htn%2Bmie2L4199VaBhdDWp7hEXiD7wcqTdOliV4NR%2FvhriUypWAxhLzKJBOTH20Z36IN%2BqpJssyIa%2Bp2QTV%2Fj7TKw2YE73kWimvllOG%2FQcZ%2FniAJcECAS4TwzkYYNSgTU5e0iyT8PEUIl4noNL%2FLiP6nZ7ATjFe1IpZ%2FcqHGMWW0Qo65Df7gEfXCwkrvk1JqQp3wgo0ZPf&X-Amz-Signature=b829caf28cae22301f3498023c60b782cb7d3ad5589d7d12d1c5686e5f691a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EG6W2OF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCullxyeWUZoN6xHySMrXEAgF3hEsMcceAsDs4%2FwYOURQIgewR47xuLEj19Sn2DypMhEEXweySkAaVCvw4MkSty6xgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa4jYWZbwjeNeLjCircAwbPro2QnHayGK5FtPiqvBdLOXPZ4LBJ%2F8F65%2FtLd1Arot03Qh8BikmmiALoul%2F5h%2FAzHMfHqUoVO8nm33t3iH7ObFlMeEcYSgmGNnzdnBiUwqUeLB2op2G61CDTVt1fgw2OHaHzl6KlZOlaKf5JHm1APwLrTH35tIfHPlnRWVl9N%2FF%2B4jxHgYpv71wutF%2FosI3jCW8mm59Pp6AaLGy9XS%2FMQVOMefswz591vYtpAsxbMXL2PD1GF480GSU1kbJ%2B3%2BrTHXoKDNHjN7WVjmB9BNg9fEspq8UfBt747hNQDiHmdtsbErEkFrVGqvgRV6QwLOLLjxjrMIYF%2Fqrj%2B5Cq04CWVPrY4CD%2FNZEe5XZz7Djytt%2FnCYm0Y4paz%2FMUN23WR0FM8ipk9OCOd5Refeyx0T7RC4SGV9AHv2prN2CDD%2Be1O3bwxRGpxrCKKmBjO8c%2FsqPLRM8ENi39NdiNJ0uNphLBKuWG0kw51MXjo4o%2Fi0lPlLGEkldLXCVdG3ZRmezF28O6RuulJnSI3gTL1kEAWXMW0doVXzOWcM3%2FJlOJ3WuXIJWRaj2P19o8G3NuAdrpQlzO640ICqjRS6Hf3TZn8QymvTQs3M3GrmZWW9yVHHcUgY41GJXN6CgVJwonMLaA88EGOqUBFiRbIxGQoIVCmHkaF%2B7Htn%2Bmie2L4199VaBhdDWp7hEXiD7wcqTdOliV4NR%2FvhriUypWAxhLzKJBOTH20Z36IN%2BqpJssyIa%2Bp2QTV%2Fj7TKw2YE73kWimvllOG%2FQcZ%2FniAJcECAS4TwzkYYNSgTU5e0iyT8PEUIl4noNL%2FLiP6nZ7ATjFe1IpZ%2FcqHGMWW0Qo65Df7gEfXCwkrvk1JqQp3wgo0ZPf&X-Amz-Signature=f209697834bae1f58fa708cf95c0c8b646e7107898d349ee49a93edbe8e9425a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EG6W2OF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCullxyeWUZoN6xHySMrXEAgF3hEsMcceAsDs4%2FwYOURQIgewR47xuLEj19Sn2DypMhEEXweySkAaVCvw4MkSty6xgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa4jYWZbwjeNeLjCircAwbPro2QnHayGK5FtPiqvBdLOXPZ4LBJ%2F8F65%2FtLd1Arot03Qh8BikmmiALoul%2F5h%2FAzHMfHqUoVO8nm33t3iH7ObFlMeEcYSgmGNnzdnBiUwqUeLB2op2G61CDTVt1fgw2OHaHzl6KlZOlaKf5JHm1APwLrTH35tIfHPlnRWVl9N%2FF%2B4jxHgYpv71wutF%2FosI3jCW8mm59Pp6AaLGy9XS%2FMQVOMefswz591vYtpAsxbMXL2PD1GF480GSU1kbJ%2B3%2BrTHXoKDNHjN7WVjmB9BNg9fEspq8UfBt747hNQDiHmdtsbErEkFrVGqvgRV6QwLOLLjxjrMIYF%2Fqrj%2B5Cq04CWVPrY4CD%2FNZEe5XZz7Djytt%2FnCYm0Y4paz%2FMUN23WR0FM8ipk9OCOd5Refeyx0T7RC4SGV9AHv2prN2CDD%2Be1O3bwxRGpxrCKKmBjO8c%2FsqPLRM8ENi39NdiNJ0uNphLBKuWG0kw51MXjo4o%2Fi0lPlLGEkldLXCVdG3ZRmezF28O6RuulJnSI3gTL1kEAWXMW0doVXzOWcM3%2FJlOJ3WuXIJWRaj2P19o8G3NuAdrpQlzO640ICqjRS6Hf3TZn8QymvTQs3M3GrmZWW9yVHHcUgY41GJXN6CgVJwonMLaA88EGOqUBFiRbIxGQoIVCmHkaF%2B7Htn%2Bmie2L4199VaBhdDWp7hEXiD7wcqTdOliV4NR%2FvhriUypWAxhLzKJBOTH20Z36IN%2BqpJssyIa%2Bp2QTV%2Fj7TKw2YE73kWimvllOG%2FQcZ%2FniAJcECAS4TwzkYYNSgTU5e0iyT8PEUIl4noNL%2FLiP6nZ7ATjFe1IpZ%2FcqHGMWW0Qo65Df7gEfXCwkrvk1JqQp3wgo0ZPf&X-Amz-Signature=e4f37110c97260fba3833f479d81ca37ba76ab349d455bda032c91565edbae24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
