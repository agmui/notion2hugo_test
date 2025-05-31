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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=98ccdf4ec6c4eedc2c502185bb90d9a93d11063ddd744f9de3eddb7636d1c228&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=d34048521da8897fb6dd5fc992b8e29dd2f7e4be48ddcba69bcc12ffc3b33e42&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=229d2d85bb30b09fd9d55a1a191aaca21a1af4e7800f0dce86a40c7d954bf103&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=f6b1c2c3f50824067f402b98de34f32f3eb1c81e212821ed64ae255b6389b2cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=d4545f382a055f88ba7ec066033c640cc9bf53a126c5a37ee4f75098a045951b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=31334fb629704f8856357eb490349ad786b3a863ae5ebe876c78362527591699&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=3ddae7ba67b80885cd76099adbf4764ed601bcf617bfb2cd2116bfcdc1ea996d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=ab10193e7873600b01f9bf9226d1c1ccb27df2585d2a2d4f4b55dc99cba2f0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
