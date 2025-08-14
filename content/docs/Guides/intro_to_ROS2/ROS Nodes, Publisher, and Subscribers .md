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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQJK3H%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHAoHZUZiC6K9Lww%2FGjjTpveYrMv%2FWAem9Y%2B%2F7kZznVZAiBYPhb8poQvgBHlzgcXojfIeYkvy8WNuJkm6ASLpmio%2FCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM7SWAAY5v7tkIsFiYKtwD78gyktridh7lj7pDx%2FNITxY5fy1Q9VxKgagYO7ev9Q%2B%2BYGHYZz7Od3%2BDrgv89WfkvE1ja6hEd0rdC50v08XRJlr%2FtA%2FhWbwm5L3y%2FU9ZeNbu%2B9zc25ETQdc2Fm2AtM1f2gzPyRW1hN96FASq3%2B5inIRWxOX0jGDSuIjHoyEngBgkY16lOe%2Bgr3HP0tpjA49m8BUUynpKYY8nMW2rMCDm1TP6B2orzLSTwdeUNk3kU4MgyTtYK4ySX4pYMrGZQXhE5%2BXo1DcJKorfBxbuzMXUwAWyfIejUOvzel9K9%2F4J%2BFXkseFmOA9opMEWe4adDEhjQu27aIu4L51xHXxJ9KoU%2BuUGrkfk8rWG%2FvivpUuzLNEdzfehLYq0zzug%2FApqJ3gsT4aWoCCxV5V%2BK6Q0jvdcjMYkZPywQgc9O8ZRLDsLzynZQqBFXQyL8OJ5w0t0OuPKTlAs6WtsUUhli5hDQqeWM8g38x6K8HgrT83FWFUfEuFGcoDZoCXaM4RxebOxeRBxQECnaUo4PSzC%2BPq%2BUfBUZQWbjPcpLiE9SIzM4FcWnKhLuTDCLTpnYED7N%2BinAAxU1s9WKFcYj9LU%2FgqbQYK5CD9CMMxjJyLty66wJbVzkW7APlG9BUh4QPsXAkMwnML4xAY6pgF40EmRxsTw5BWL%2B%2BbkdXHHVnTTvNUH4ka6TyJn6jwWpR%2BiyZtjT3MGqrdSPnK8nsz6gKCNX6DLmNsR6aMwyq7qPWGeaJhQCCu10j7OeoWaUcnb1uT4BuN8A24IrDqY4jjxeXCk6tOGcgsQ%2BseEkO%2FxOmvnRwGx0YtTx1ztdM%2B1UE1MTCTNO78negku%2Ba9CgddY8lpHrp6FS3UvWzlHSUUKLceS4F4D&X-Amz-Signature=c8262f2072e8e237b2c0b9e2ab956b1765d422dc68c30069e663b970a94b9970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQJK3H%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHAoHZUZiC6K9Lww%2FGjjTpveYrMv%2FWAem9Y%2B%2F7kZznVZAiBYPhb8poQvgBHlzgcXojfIeYkvy8WNuJkm6ASLpmio%2FCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM7SWAAY5v7tkIsFiYKtwD78gyktridh7lj7pDx%2FNITxY5fy1Q9VxKgagYO7ev9Q%2B%2BYGHYZz7Od3%2BDrgv89WfkvE1ja6hEd0rdC50v08XRJlr%2FtA%2FhWbwm5L3y%2FU9ZeNbu%2B9zc25ETQdc2Fm2AtM1f2gzPyRW1hN96FASq3%2B5inIRWxOX0jGDSuIjHoyEngBgkY16lOe%2Bgr3HP0tpjA49m8BUUynpKYY8nMW2rMCDm1TP6B2orzLSTwdeUNk3kU4MgyTtYK4ySX4pYMrGZQXhE5%2BXo1DcJKorfBxbuzMXUwAWyfIejUOvzel9K9%2F4J%2BFXkseFmOA9opMEWe4adDEhjQu27aIu4L51xHXxJ9KoU%2BuUGrkfk8rWG%2FvivpUuzLNEdzfehLYq0zzug%2FApqJ3gsT4aWoCCxV5V%2BK6Q0jvdcjMYkZPywQgc9O8ZRLDsLzynZQqBFXQyL8OJ5w0t0OuPKTlAs6WtsUUhli5hDQqeWM8g38x6K8HgrT83FWFUfEuFGcoDZoCXaM4RxebOxeRBxQECnaUo4PSzC%2BPq%2BUfBUZQWbjPcpLiE9SIzM4FcWnKhLuTDCLTpnYED7N%2BinAAxU1s9WKFcYj9LU%2FgqbQYK5CD9CMMxjJyLty66wJbVzkW7APlG9BUh4QPsXAkMwnML4xAY6pgF40EmRxsTw5BWL%2B%2BbkdXHHVnTTvNUH4ka6TyJn6jwWpR%2BiyZtjT3MGqrdSPnK8nsz6gKCNX6DLmNsR6aMwyq7qPWGeaJhQCCu10j7OeoWaUcnb1uT4BuN8A24IrDqY4jjxeXCk6tOGcgsQ%2BseEkO%2FxOmvnRwGx0YtTx1ztdM%2B1UE1MTCTNO78negku%2Ba9CgddY8lpHrp6FS3UvWzlHSUUKLceS4F4D&X-Amz-Signature=0a63245a26a630db22d74f4d8236d93ab8ab57e3d0313a5549c6662a3f1416ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQJK3H%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHAoHZUZiC6K9Lww%2FGjjTpveYrMv%2FWAem9Y%2B%2F7kZznVZAiBYPhb8poQvgBHlzgcXojfIeYkvy8WNuJkm6ASLpmio%2FCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM7SWAAY5v7tkIsFiYKtwD78gyktridh7lj7pDx%2FNITxY5fy1Q9VxKgagYO7ev9Q%2B%2BYGHYZz7Od3%2BDrgv89WfkvE1ja6hEd0rdC50v08XRJlr%2FtA%2FhWbwm5L3y%2FU9ZeNbu%2B9zc25ETQdc2Fm2AtM1f2gzPyRW1hN96FASq3%2B5inIRWxOX0jGDSuIjHoyEngBgkY16lOe%2Bgr3HP0tpjA49m8BUUynpKYY8nMW2rMCDm1TP6B2orzLSTwdeUNk3kU4MgyTtYK4ySX4pYMrGZQXhE5%2BXo1DcJKorfBxbuzMXUwAWyfIejUOvzel9K9%2F4J%2BFXkseFmOA9opMEWe4adDEhjQu27aIu4L51xHXxJ9KoU%2BuUGrkfk8rWG%2FvivpUuzLNEdzfehLYq0zzug%2FApqJ3gsT4aWoCCxV5V%2BK6Q0jvdcjMYkZPywQgc9O8ZRLDsLzynZQqBFXQyL8OJ5w0t0OuPKTlAs6WtsUUhli5hDQqeWM8g38x6K8HgrT83FWFUfEuFGcoDZoCXaM4RxebOxeRBxQECnaUo4PSzC%2BPq%2BUfBUZQWbjPcpLiE9SIzM4FcWnKhLuTDCLTpnYED7N%2BinAAxU1s9WKFcYj9LU%2FgqbQYK5CD9CMMxjJyLty66wJbVzkW7APlG9BUh4QPsXAkMwnML4xAY6pgF40EmRxsTw5BWL%2B%2BbkdXHHVnTTvNUH4ka6TyJn6jwWpR%2BiyZtjT3MGqrdSPnK8nsz6gKCNX6DLmNsR6aMwyq7qPWGeaJhQCCu10j7OeoWaUcnb1uT4BuN8A24IrDqY4jjxeXCk6tOGcgsQ%2BseEkO%2FxOmvnRwGx0YtTx1ztdM%2B1UE1MTCTNO78negku%2Ba9CgddY8lpHrp6FS3UvWzlHSUUKLceS4F4D&X-Amz-Signature=ed5d4acb646aae5d265a20c0f408cf5f5b2bdcf7acf2fb0a0bf49ddaf1fae96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQJK3H%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHAoHZUZiC6K9Lww%2FGjjTpveYrMv%2FWAem9Y%2B%2F7kZznVZAiBYPhb8poQvgBHlzgcXojfIeYkvy8WNuJkm6ASLpmio%2FCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM7SWAAY5v7tkIsFiYKtwD78gyktridh7lj7pDx%2FNITxY5fy1Q9VxKgagYO7ev9Q%2B%2BYGHYZz7Od3%2BDrgv89WfkvE1ja6hEd0rdC50v08XRJlr%2FtA%2FhWbwm5L3y%2FU9ZeNbu%2B9zc25ETQdc2Fm2AtM1f2gzPyRW1hN96FASq3%2B5inIRWxOX0jGDSuIjHoyEngBgkY16lOe%2Bgr3HP0tpjA49m8BUUynpKYY8nMW2rMCDm1TP6B2orzLSTwdeUNk3kU4MgyTtYK4ySX4pYMrGZQXhE5%2BXo1DcJKorfBxbuzMXUwAWyfIejUOvzel9K9%2F4J%2BFXkseFmOA9opMEWe4adDEhjQu27aIu4L51xHXxJ9KoU%2BuUGrkfk8rWG%2FvivpUuzLNEdzfehLYq0zzug%2FApqJ3gsT4aWoCCxV5V%2BK6Q0jvdcjMYkZPywQgc9O8ZRLDsLzynZQqBFXQyL8OJ5w0t0OuPKTlAs6WtsUUhli5hDQqeWM8g38x6K8HgrT83FWFUfEuFGcoDZoCXaM4RxebOxeRBxQECnaUo4PSzC%2BPq%2BUfBUZQWbjPcpLiE9SIzM4FcWnKhLuTDCLTpnYED7N%2BinAAxU1s9WKFcYj9LU%2FgqbQYK5CD9CMMxjJyLty66wJbVzkW7APlG9BUh4QPsXAkMwnML4xAY6pgF40EmRxsTw5BWL%2B%2BbkdXHHVnTTvNUH4ka6TyJn6jwWpR%2BiyZtjT3MGqrdSPnK8nsz6gKCNX6DLmNsR6aMwyq7qPWGeaJhQCCu10j7OeoWaUcnb1uT4BuN8A24IrDqY4jjxeXCk6tOGcgsQ%2BseEkO%2FxOmvnRwGx0YtTx1ztdM%2B1UE1MTCTNO78negku%2Ba9CgddY8lpHrp6FS3UvWzlHSUUKLceS4F4D&X-Amz-Signature=f05d0113f90a46ff471ee0cdf16052de975425a3b9217d7a08760cdc2b17470c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQJK3H%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHAoHZUZiC6K9Lww%2FGjjTpveYrMv%2FWAem9Y%2B%2F7kZznVZAiBYPhb8poQvgBHlzgcXojfIeYkvy8WNuJkm6ASLpmio%2FCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM7SWAAY5v7tkIsFiYKtwD78gyktridh7lj7pDx%2FNITxY5fy1Q9VxKgagYO7ev9Q%2B%2BYGHYZz7Od3%2BDrgv89WfkvE1ja6hEd0rdC50v08XRJlr%2FtA%2FhWbwm5L3y%2FU9ZeNbu%2B9zc25ETQdc2Fm2AtM1f2gzPyRW1hN96FASq3%2B5inIRWxOX0jGDSuIjHoyEngBgkY16lOe%2Bgr3HP0tpjA49m8BUUynpKYY8nMW2rMCDm1TP6B2orzLSTwdeUNk3kU4MgyTtYK4ySX4pYMrGZQXhE5%2BXo1DcJKorfBxbuzMXUwAWyfIejUOvzel9K9%2F4J%2BFXkseFmOA9opMEWe4adDEhjQu27aIu4L51xHXxJ9KoU%2BuUGrkfk8rWG%2FvivpUuzLNEdzfehLYq0zzug%2FApqJ3gsT4aWoCCxV5V%2BK6Q0jvdcjMYkZPywQgc9O8ZRLDsLzynZQqBFXQyL8OJ5w0t0OuPKTlAs6WtsUUhli5hDQqeWM8g38x6K8HgrT83FWFUfEuFGcoDZoCXaM4RxebOxeRBxQECnaUo4PSzC%2BPq%2BUfBUZQWbjPcpLiE9SIzM4FcWnKhLuTDCLTpnYED7N%2BinAAxU1s9WKFcYj9LU%2FgqbQYK5CD9CMMxjJyLty66wJbVzkW7APlG9BUh4QPsXAkMwnML4xAY6pgF40EmRxsTw5BWL%2B%2BbkdXHHVnTTvNUH4ka6TyJn6jwWpR%2BiyZtjT3MGqrdSPnK8nsz6gKCNX6DLmNsR6aMwyq7qPWGeaJhQCCu10j7OeoWaUcnb1uT4BuN8A24IrDqY4jjxeXCk6tOGcgsQ%2BseEkO%2FxOmvnRwGx0YtTx1ztdM%2B1UE1MTCTNO78negku%2Ba9CgddY8lpHrp6FS3UvWzlHSUUKLceS4F4D&X-Amz-Signature=74d8173e0794a46b6d282d85622d4afbd69053e803d090fa7bfc766081305dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQJK3H%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHAoHZUZiC6K9Lww%2FGjjTpveYrMv%2FWAem9Y%2B%2F7kZznVZAiBYPhb8poQvgBHlzgcXojfIeYkvy8WNuJkm6ASLpmio%2FCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM7SWAAY5v7tkIsFiYKtwD78gyktridh7lj7pDx%2FNITxY5fy1Q9VxKgagYO7ev9Q%2B%2BYGHYZz7Od3%2BDrgv89WfkvE1ja6hEd0rdC50v08XRJlr%2FtA%2FhWbwm5L3y%2FU9ZeNbu%2B9zc25ETQdc2Fm2AtM1f2gzPyRW1hN96FASq3%2B5inIRWxOX0jGDSuIjHoyEngBgkY16lOe%2Bgr3HP0tpjA49m8BUUynpKYY8nMW2rMCDm1TP6B2orzLSTwdeUNk3kU4MgyTtYK4ySX4pYMrGZQXhE5%2BXo1DcJKorfBxbuzMXUwAWyfIejUOvzel9K9%2F4J%2BFXkseFmOA9opMEWe4adDEhjQu27aIu4L51xHXxJ9KoU%2BuUGrkfk8rWG%2FvivpUuzLNEdzfehLYq0zzug%2FApqJ3gsT4aWoCCxV5V%2BK6Q0jvdcjMYkZPywQgc9O8ZRLDsLzynZQqBFXQyL8OJ5w0t0OuPKTlAs6WtsUUhli5hDQqeWM8g38x6K8HgrT83FWFUfEuFGcoDZoCXaM4RxebOxeRBxQECnaUo4PSzC%2BPq%2BUfBUZQWbjPcpLiE9SIzM4FcWnKhLuTDCLTpnYED7N%2BinAAxU1s9WKFcYj9LU%2FgqbQYK5CD9CMMxjJyLty66wJbVzkW7APlG9BUh4QPsXAkMwnML4xAY6pgF40EmRxsTw5BWL%2B%2BbkdXHHVnTTvNUH4ka6TyJn6jwWpR%2BiyZtjT3MGqrdSPnK8nsz6gKCNX6DLmNsR6aMwyq7qPWGeaJhQCCu10j7OeoWaUcnb1uT4BuN8A24IrDqY4jjxeXCk6tOGcgsQ%2BseEkO%2FxOmvnRwGx0YtTx1ztdM%2B1UE1MTCTNO78negku%2Ba9CgddY8lpHrp6FS3UvWzlHSUUKLceS4F4D&X-Amz-Signature=96fae0848ee290401cbdf42efa6462ab1d138f96d99a26bb4631381d1b843f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQJK3H%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHAoHZUZiC6K9Lww%2FGjjTpveYrMv%2FWAem9Y%2B%2F7kZznVZAiBYPhb8poQvgBHlzgcXojfIeYkvy8WNuJkm6ASLpmio%2FCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM7SWAAY5v7tkIsFiYKtwD78gyktridh7lj7pDx%2FNITxY5fy1Q9VxKgagYO7ev9Q%2B%2BYGHYZz7Od3%2BDrgv89WfkvE1ja6hEd0rdC50v08XRJlr%2FtA%2FhWbwm5L3y%2FU9ZeNbu%2B9zc25ETQdc2Fm2AtM1f2gzPyRW1hN96FASq3%2B5inIRWxOX0jGDSuIjHoyEngBgkY16lOe%2Bgr3HP0tpjA49m8BUUynpKYY8nMW2rMCDm1TP6B2orzLSTwdeUNk3kU4MgyTtYK4ySX4pYMrGZQXhE5%2BXo1DcJKorfBxbuzMXUwAWyfIejUOvzel9K9%2F4J%2BFXkseFmOA9opMEWe4adDEhjQu27aIu4L51xHXxJ9KoU%2BuUGrkfk8rWG%2FvivpUuzLNEdzfehLYq0zzug%2FApqJ3gsT4aWoCCxV5V%2BK6Q0jvdcjMYkZPywQgc9O8ZRLDsLzynZQqBFXQyL8OJ5w0t0OuPKTlAs6WtsUUhli5hDQqeWM8g38x6K8HgrT83FWFUfEuFGcoDZoCXaM4RxebOxeRBxQECnaUo4PSzC%2BPq%2BUfBUZQWbjPcpLiE9SIzM4FcWnKhLuTDCLTpnYED7N%2BinAAxU1s9WKFcYj9LU%2FgqbQYK5CD9CMMxjJyLty66wJbVzkW7APlG9BUh4QPsXAkMwnML4xAY6pgF40EmRxsTw5BWL%2B%2BbkdXHHVnTTvNUH4ka6TyJn6jwWpR%2BiyZtjT3MGqrdSPnK8nsz6gKCNX6DLmNsR6aMwyq7qPWGeaJhQCCu10j7OeoWaUcnb1uT4BuN8A24IrDqY4jjxeXCk6tOGcgsQ%2BseEkO%2FxOmvnRwGx0YtTx1ztdM%2B1UE1MTCTNO78negku%2Ba9CgddY8lpHrp6FS3UvWzlHSUUKLceS4F4D&X-Amz-Signature=2ab8c05b1ccdce537157ba51750bd4df06ed01620887033f8d217e8876fe69ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQJK3H%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHAoHZUZiC6K9Lww%2FGjjTpveYrMv%2FWAem9Y%2B%2F7kZznVZAiBYPhb8poQvgBHlzgcXojfIeYkvy8WNuJkm6ASLpmio%2FCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM7SWAAY5v7tkIsFiYKtwD78gyktridh7lj7pDx%2FNITxY5fy1Q9VxKgagYO7ev9Q%2B%2BYGHYZz7Od3%2BDrgv89WfkvE1ja6hEd0rdC50v08XRJlr%2FtA%2FhWbwm5L3y%2FU9ZeNbu%2B9zc25ETQdc2Fm2AtM1f2gzPyRW1hN96FASq3%2B5inIRWxOX0jGDSuIjHoyEngBgkY16lOe%2Bgr3HP0tpjA49m8BUUynpKYY8nMW2rMCDm1TP6B2orzLSTwdeUNk3kU4MgyTtYK4ySX4pYMrGZQXhE5%2BXo1DcJKorfBxbuzMXUwAWyfIejUOvzel9K9%2F4J%2BFXkseFmOA9opMEWe4adDEhjQu27aIu4L51xHXxJ9KoU%2BuUGrkfk8rWG%2FvivpUuzLNEdzfehLYq0zzug%2FApqJ3gsT4aWoCCxV5V%2BK6Q0jvdcjMYkZPywQgc9O8ZRLDsLzynZQqBFXQyL8OJ5w0t0OuPKTlAs6WtsUUhli5hDQqeWM8g38x6K8HgrT83FWFUfEuFGcoDZoCXaM4RxebOxeRBxQECnaUo4PSzC%2BPq%2BUfBUZQWbjPcpLiE9SIzM4FcWnKhLuTDCLTpnYED7N%2BinAAxU1s9WKFcYj9LU%2FgqbQYK5CD9CMMxjJyLty66wJbVzkW7APlG9BUh4QPsXAkMwnML4xAY6pgF40EmRxsTw5BWL%2B%2BbkdXHHVnTTvNUH4ka6TyJn6jwWpR%2BiyZtjT3MGqrdSPnK8nsz6gKCNX6DLmNsR6aMwyq7qPWGeaJhQCCu10j7OeoWaUcnb1uT4BuN8A24IrDqY4jjxeXCk6tOGcgsQ%2BseEkO%2FxOmvnRwGx0YtTx1ztdM%2B1UE1MTCTNO78negku%2Ba9CgddY8lpHrp6FS3UvWzlHSUUKLceS4F4D&X-Amz-Signature=6b4464eb5e7af5166bd2b900c6367858d6631500fb2771bea694922aab39b13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
