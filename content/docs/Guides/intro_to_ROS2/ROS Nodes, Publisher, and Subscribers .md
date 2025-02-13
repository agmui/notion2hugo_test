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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BK3KCIF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXuvKh9lKe4v198MnJzlb7%2BMVBMN4mHsMt97zNOJYYAAiBUqp1Jx5VFywb%2Fa29TN01XOgxp%2FCgV7LN1c4Ok%2BGmOyCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMHtnKqpmRxADTrRsGKtwDczsfmNTPOhpMMDa4h0qXjMxC9eXgYj6IXuO8KyqtwHNw5j5aLwlw1DidfyK0gfZQ1G%2B76q%2BJ8wnUp5ubDt%2FBrYiiiaQpXvwhbkXCqURfGVY1GLLI0WBwYJt51BJhFh0SuEAsgOPds8X8duWIYVJ1uggfNwV4DZptXH9wkAkt5lgLIxhBEcrfLqPeTP2CCnnA7IoyIxJFNCTWKFpyDQwt0gCBuvJfMxvbvcjMrdLL60ABob4gpztavp2ednYc7jX3aeH1cNQ40yAEOQhwn36xFVYJa2mBhyv5O8GdaDSV7Opw5DDdZ6OVvR%2FZPsEgOqLxR4WP7bPV4qbs%2B%2Folr%2BDIl1zSyaKVaA6IuK5RxWuJVxrBuj%2BAF2lADoHgehfBT%2BPIni3CC93Xu6xi%2FU7A28P93i9tSvaKoPBsGICr1eOoYQQfWfgVQfnKPYGKyb9gjHXQL57yqKu2jZF5VrXj4PyTM5WEuDkrp6C8E5wU28t7357WvIwIm4vJoENRjpzoEp4Q%2FTyctoYaP5m7qwzJmCQ3UhwApU9gVpLWvgk54i2BGaovMp0ZelQngYLa4OEhY07EZgBv8ST0jKW8eMjfzowvJFxN1ttOWATut7Y1nsqKIYHHtA8HxHnqTvJQtW4wq923vQY6pgHvhTOZqm60Lsw%2FhyghZf6%2FH8UoY%2FRhgD%2BJOrmd7Q2DOoJRRGz46SShqR3Vx6mzIRk8e8l3bbnnQp%2FAtEHRCDR2SqWZfBP4NaqGho6abuFf0L%2FIirch85r5DJyPTU%2BIhhpc%2Fw%2BNAxe4T1Jr2x7mEY8%2Fz5MorlKg3D9vqfdRBeRw7NZ4ONsrNx%2FFblFVvEl8EnzD3yviprYHRdPvKycrffEtKg0IjPuM&X-Amz-Signature=fad126805867e430543ad8c1ec04b1c3d952fa443c8a069afd85fb56ca9bf02e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BK3KCIF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXuvKh9lKe4v198MnJzlb7%2BMVBMN4mHsMt97zNOJYYAAiBUqp1Jx5VFywb%2Fa29TN01XOgxp%2FCgV7LN1c4Ok%2BGmOyCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMHtnKqpmRxADTrRsGKtwDczsfmNTPOhpMMDa4h0qXjMxC9eXgYj6IXuO8KyqtwHNw5j5aLwlw1DidfyK0gfZQ1G%2B76q%2BJ8wnUp5ubDt%2FBrYiiiaQpXvwhbkXCqURfGVY1GLLI0WBwYJt51BJhFh0SuEAsgOPds8X8duWIYVJ1uggfNwV4DZptXH9wkAkt5lgLIxhBEcrfLqPeTP2CCnnA7IoyIxJFNCTWKFpyDQwt0gCBuvJfMxvbvcjMrdLL60ABob4gpztavp2ednYc7jX3aeH1cNQ40yAEOQhwn36xFVYJa2mBhyv5O8GdaDSV7Opw5DDdZ6OVvR%2FZPsEgOqLxR4WP7bPV4qbs%2B%2Folr%2BDIl1zSyaKVaA6IuK5RxWuJVxrBuj%2BAF2lADoHgehfBT%2BPIni3CC93Xu6xi%2FU7A28P93i9tSvaKoPBsGICr1eOoYQQfWfgVQfnKPYGKyb9gjHXQL57yqKu2jZF5VrXj4PyTM5WEuDkrp6C8E5wU28t7357WvIwIm4vJoENRjpzoEp4Q%2FTyctoYaP5m7qwzJmCQ3UhwApU9gVpLWvgk54i2BGaovMp0ZelQngYLa4OEhY07EZgBv8ST0jKW8eMjfzowvJFxN1ttOWATut7Y1nsqKIYHHtA8HxHnqTvJQtW4wq923vQY6pgHvhTOZqm60Lsw%2FhyghZf6%2FH8UoY%2FRhgD%2BJOrmd7Q2DOoJRRGz46SShqR3Vx6mzIRk8e8l3bbnnQp%2FAtEHRCDR2SqWZfBP4NaqGho6abuFf0L%2FIirch85r5DJyPTU%2BIhhpc%2Fw%2BNAxe4T1Jr2x7mEY8%2Fz5MorlKg3D9vqfdRBeRw7NZ4ONsrNx%2FFblFVvEl8EnzD3yviprYHRdPvKycrffEtKg0IjPuM&X-Amz-Signature=6b06778cabd7b7bd4600bdda76cda01684238c623fe21cd188f5e754c1f694e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BK3KCIF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXuvKh9lKe4v198MnJzlb7%2BMVBMN4mHsMt97zNOJYYAAiBUqp1Jx5VFywb%2Fa29TN01XOgxp%2FCgV7LN1c4Ok%2BGmOyCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMHtnKqpmRxADTrRsGKtwDczsfmNTPOhpMMDa4h0qXjMxC9eXgYj6IXuO8KyqtwHNw5j5aLwlw1DidfyK0gfZQ1G%2B76q%2BJ8wnUp5ubDt%2FBrYiiiaQpXvwhbkXCqURfGVY1GLLI0WBwYJt51BJhFh0SuEAsgOPds8X8duWIYVJ1uggfNwV4DZptXH9wkAkt5lgLIxhBEcrfLqPeTP2CCnnA7IoyIxJFNCTWKFpyDQwt0gCBuvJfMxvbvcjMrdLL60ABob4gpztavp2ednYc7jX3aeH1cNQ40yAEOQhwn36xFVYJa2mBhyv5O8GdaDSV7Opw5DDdZ6OVvR%2FZPsEgOqLxR4WP7bPV4qbs%2B%2Folr%2BDIl1zSyaKVaA6IuK5RxWuJVxrBuj%2BAF2lADoHgehfBT%2BPIni3CC93Xu6xi%2FU7A28P93i9tSvaKoPBsGICr1eOoYQQfWfgVQfnKPYGKyb9gjHXQL57yqKu2jZF5VrXj4PyTM5WEuDkrp6C8E5wU28t7357WvIwIm4vJoENRjpzoEp4Q%2FTyctoYaP5m7qwzJmCQ3UhwApU9gVpLWvgk54i2BGaovMp0ZelQngYLa4OEhY07EZgBv8ST0jKW8eMjfzowvJFxN1ttOWATut7Y1nsqKIYHHtA8HxHnqTvJQtW4wq923vQY6pgHvhTOZqm60Lsw%2FhyghZf6%2FH8UoY%2FRhgD%2BJOrmd7Q2DOoJRRGz46SShqR3Vx6mzIRk8e8l3bbnnQp%2FAtEHRCDR2SqWZfBP4NaqGho6abuFf0L%2FIirch85r5DJyPTU%2BIhhpc%2Fw%2BNAxe4T1Jr2x7mEY8%2Fz5MorlKg3D9vqfdRBeRw7NZ4ONsrNx%2FFblFVvEl8EnzD3yviprYHRdPvKycrffEtKg0IjPuM&X-Amz-Signature=99ee945bfadff5ff87147e4284d8de297288478e93074fb4037325190198b36e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BK3KCIF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXuvKh9lKe4v198MnJzlb7%2BMVBMN4mHsMt97zNOJYYAAiBUqp1Jx5VFywb%2Fa29TN01XOgxp%2FCgV7LN1c4Ok%2BGmOyCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMHtnKqpmRxADTrRsGKtwDczsfmNTPOhpMMDa4h0qXjMxC9eXgYj6IXuO8KyqtwHNw5j5aLwlw1DidfyK0gfZQ1G%2B76q%2BJ8wnUp5ubDt%2FBrYiiiaQpXvwhbkXCqURfGVY1GLLI0WBwYJt51BJhFh0SuEAsgOPds8X8duWIYVJ1uggfNwV4DZptXH9wkAkt5lgLIxhBEcrfLqPeTP2CCnnA7IoyIxJFNCTWKFpyDQwt0gCBuvJfMxvbvcjMrdLL60ABob4gpztavp2ednYc7jX3aeH1cNQ40yAEOQhwn36xFVYJa2mBhyv5O8GdaDSV7Opw5DDdZ6OVvR%2FZPsEgOqLxR4WP7bPV4qbs%2B%2Folr%2BDIl1zSyaKVaA6IuK5RxWuJVxrBuj%2BAF2lADoHgehfBT%2BPIni3CC93Xu6xi%2FU7A28P93i9tSvaKoPBsGICr1eOoYQQfWfgVQfnKPYGKyb9gjHXQL57yqKu2jZF5VrXj4PyTM5WEuDkrp6C8E5wU28t7357WvIwIm4vJoENRjpzoEp4Q%2FTyctoYaP5m7qwzJmCQ3UhwApU9gVpLWvgk54i2BGaovMp0ZelQngYLa4OEhY07EZgBv8ST0jKW8eMjfzowvJFxN1ttOWATut7Y1nsqKIYHHtA8HxHnqTvJQtW4wq923vQY6pgHvhTOZqm60Lsw%2FhyghZf6%2FH8UoY%2FRhgD%2BJOrmd7Q2DOoJRRGz46SShqR3Vx6mzIRk8e8l3bbnnQp%2FAtEHRCDR2SqWZfBP4NaqGho6abuFf0L%2FIirch85r5DJyPTU%2BIhhpc%2Fw%2BNAxe4T1Jr2x7mEY8%2Fz5MorlKg3D9vqfdRBeRw7NZ4ONsrNx%2FFblFVvEl8EnzD3yviprYHRdPvKycrffEtKg0IjPuM&X-Amz-Signature=0ab14e3bc3d371fba88607fe486dd9cdc2a35993c46b1a44b5932e5d074cd32b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BK3KCIF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXuvKh9lKe4v198MnJzlb7%2BMVBMN4mHsMt97zNOJYYAAiBUqp1Jx5VFywb%2Fa29TN01XOgxp%2FCgV7LN1c4Ok%2BGmOyCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMHtnKqpmRxADTrRsGKtwDczsfmNTPOhpMMDa4h0qXjMxC9eXgYj6IXuO8KyqtwHNw5j5aLwlw1DidfyK0gfZQ1G%2B76q%2BJ8wnUp5ubDt%2FBrYiiiaQpXvwhbkXCqURfGVY1GLLI0WBwYJt51BJhFh0SuEAsgOPds8X8duWIYVJ1uggfNwV4DZptXH9wkAkt5lgLIxhBEcrfLqPeTP2CCnnA7IoyIxJFNCTWKFpyDQwt0gCBuvJfMxvbvcjMrdLL60ABob4gpztavp2ednYc7jX3aeH1cNQ40yAEOQhwn36xFVYJa2mBhyv5O8GdaDSV7Opw5DDdZ6OVvR%2FZPsEgOqLxR4WP7bPV4qbs%2B%2Folr%2BDIl1zSyaKVaA6IuK5RxWuJVxrBuj%2BAF2lADoHgehfBT%2BPIni3CC93Xu6xi%2FU7A28P93i9tSvaKoPBsGICr1eOoYQQfWfgVQfnKPYGKyb9gjHXQL57yqKu2jZF5VrXj4PyTM5WEuDkrp6C8E5wU28t7357WvIwIm4vJoENRjpzoEp4Q%2FTyctoYaP5m7qwzJmCQ3UhwApU9gVpLWvgk54i2BGaovMp0ZelQngYLa4OEhY07EZgBv8ST0jKW8eMjfzowvJFxN1ttOWATut7Y1nsqKIYHHtA8HxHnqTvJQtW4wq923vQY6pgHvhTOZqm60Lsw%2FhyghZf6%2FH8UoY%2FRhgD%2BJOrmd7Q2DOoJRRGz46SShqR3Vx6mzIRk8e8l3bbnnQp%2FAtEHRCDR2SqWZfBP4NaqGho6abuFf0L%2FIirch85r5DJyPTU%2BIhhpc%2Fw%2BNAxe4T1Jr2x7mEY8%2Fz5MorlKg3D9vqfdRBeRw7NZ4ONsrNx%2FFblFVvEl8EnzD3yviprYHRdPvKycrffEtKg0IjPuM&X-Amz-Signature=89a7dfdbbfe7cb511050362a1f0fbd2c9900dca42444f5ff42376fabf6e2760b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BK3KCIF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXuvKh9lKe4v198MnJzlb7%2BMVBMN4mHsMt97zNOJYYAAiBUqp1Jx5VFywb%2Fa29TN01XOgxp%2FCgV7LN1c4Ok%2BGmOyCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMHtnKqpmRxADTrRsGKtwDczsfmNTPOhpMMDa4h0qXjMxC9eXgYj6IXuO8KyqtwHNw5j5aLwlw1DidfyK0gfZQ1G%2B76q%2BJ8wnUp5ubDt%2FBrYiiiaQpXvwhbkXCqURfGVY1GLLI0WBwYJt51BJhFh0SuEAsgOPds8X8duWIYVJ1uggfNwV4DZptXH9wkAkt5lgLIxhBEcrfLqPeTP2CCnnA7IoyIxJFNCTWKFpyDQwt0gCBuvJfMxvbvcjMrdLL60ABob4gpztavp2ednYc7jX3aeH1cNQ40yAEOQhwn36xFVYJa2mBhyv5O8GdaDSV7Opw5DDdZ6OVvR%2FZPsEgOqLxR4WP7bPV4qbs%2B%2Folr%2BDIl1zSyaKVaA6IuK5RxWuJVxrBuj%2BAF2lADoHgehfBT%2BPIni3CC93Xu6xi%2FU7A28P93i9tSvaKoPBsGICr1eOoYQQfWfgVQfnKPYGKyb9gjHXQL57yqKu2jZF5VrXj4PyTM5WEuDkrp6C8E5wU28t7357WvIwIm4vJoENRjpzoEp4Q%2FTyctoYaP5m7qwzJmCQ3UhwApU9gVpLWvgk54i2BGaovMp0ZelQngYLa4OEhY07EZgBv8ST0jKW8eMjfzowvJFxN1ttOWATut7Y1nsqKIYHHtA8HxHnqTvJQtW4wq923vQY6pgHvhTOZqm60Lsw%2FhyghZf6%2FH8UoY%2FRhgD%2BJOrmd7Q2DOoJRRGz46SShqR3Vx6mzIRk8e8l3bbnnQp%2FAtEHRCDR2SqWZfBP4NaqGho6abuFf0L%2FIirch85r5DJyPTU%2BIhhpc%2Fw%2BNAxe4T1Jr2x7mEY8%2Fz5MorlKg3D9vqfdRBeRw7NZ4ONsrNx%2FFblFVvEl8EnzD3yviprYHRdPvKycrffEtKg0IjPuM&X-Amz-Signature=029b14d6d6091b14cfe56c56efebfa782e8db01e573ce8b4ed3cdb1ef730457d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BK3KCIF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXuvKh9lKe4v198MnJzlb7%2BMVBMN4mHsMt97zNOJYYAAiBUqp1Jx5VFywb%2Fa29TN01XOgxp%2FCgV7LN1c4Ok%2BGmOyCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMHtnKqpmRxADTrRsGKtwDczsfmNTPOhpMMDa4h0qXjMxC9eXgYj6IXuO8KyqtwHNw5j5aLwlw1DidfyK0gfZQ1G%2B76q%2BJ8wnUp5ubDt%2FBrYiiiaQpXvwhbkXCqURfGVY1GLLI0WBwYJt51BJhFh0SuEAsgOPds8X8duWIYVJ1uggfNwV4DZptXH9wkAkt5lgLIxhBEcrfLqPeTP2CCnnA7IoyIxJFNCTWKFpyDQwt0gCBuvJfMxvbvcjMrdLL60ABob4gpztavp2ednYc7jX3aeH1cNQ40yAEOQhwn36xFVYJa2mBhyv5O8GdaDSV7Opw5DDdZ6OVvR%2FZPsEgOqLxR4WP7bPV4qbs%2B%2Folr%2BDIl1zSyaKVaA6IuK5RxWuJVxrBuj%2BAF2lADoHgehfBT%2BPIni3CC93Xu6xi%2FU7A28P93i9tSvaKoPBsGICr1eOoYQQfWfgVQfnKPYGKyb9gjHXQL57yqKu2jZF5VrXj4PyTM5WEuDkrp6C8E5wU28t7357WvIwIm4vJoENRjpzoEp4Q%2FTyctoYaP5m7qwzJmCQ3UhwApU9gVpLWvgk54i2BGaovMp0ZelQngYLa4OEhY07EZgBv8ST0jKW8eMjfzowvJFxN1ttOWATut7Y1nsqKIYHHtA8HxHnqTvJQtW4wq923vQY6pgHvhTOZqm60Lsw%2FhyghZf6%2FH8UoY%2FRhgD%2BJOrmd7Q2DOoJRRGz46SShqR3Vx6mzIRk8e8l3bbnnQp%2FAtEHRCDR2SqWZfBP4NaqGho6abuFf0L%2FIirch85r5DJyPTU%2BIhhpc%2Fw%2BNAxe4T1Jr2x7mEY8%2Fz5MorlKg3D9vqfdRBeRw7NZ4ONsrNx%2FFblFVvEl8EnzD3yviprYHRdPvKycrffEtKg0IjPuM&X-Amz-Signature=13cfe083e4fd5cf26cc1ea89bd88fd9e0ddf719beb48da00dfba82e8d421e19d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BK3KCIF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXuvKh9lKe4v198MnJzlb7%2BMVBMN4mHsMt97zNOJYYAAiBUqp1Jx5VFywb%2Fa29TN01XOgxp%2FCgV7LN1c4Ok%2BGmOyCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMHtnKqpmRxADTrRsGKtwDczsfmNTPOhpMMDa4h0qXjMxC9eXgYj6IXuO8KyqtwHNw5j5aLwlw1DidfyK0gfZQ1G%2B76q%2BJ8wnUp5ubDt%2FBrYiiiaQpXvwhbkXCqURfGVY1GLLI0WBwYJt51BJhFh0SuEAsgOPds8X8duWIYVJ1uggfNwV4DZptXH9wkAkt5lgLIxhBEcrfLqPeTP2CCnnA7IoyIxJFNCTWKFpyDQwt0gCBuvJfMxvbvcjMrdLL60ABob4gpztavp2ednYc7jX3aeH1cNQ40yAEOQhwn36xFVYJa2mBhyv5O8GdaDSV7Opw5DDdZ6OVvR%2FZPsEgOqLxR4WP7bPV4qbs%2B%2Folr%2BDIl1zSyaKVaA6IuK5RxWuJVxrBuj%2BAF2lADoHgehfBT%2BPIni3CC93Xu6xi%2FU7A28P93i9tSvaKoPBsGICr1eOoYQQfWfgVQfnKPYGKyb9gjHXQL57yqKu2jZF5VrXj4PyTM5WEuDkrp6C8E5wU28t7357WvIwIm4vJoENRjpzoEp4Q%2FTyctoYaP5m7qwzJmCQ3UhwApU9gVpLWvgk54i2BGaovMp0ZelQngYLa4OEhY07EZgBv8ST0jKW8eMjfzowvJFxN1ttOWATut7Y1nsqKIYHHtA8HxHnqTvJQtW4wq923vQY6pgHvhTOZqm60Lsw%2FhyghZf6%2FH8UoY%2FRhgD%2BJOrmd7Q2DOoJRRGz46SShqR3Vx6mzIRk8e8l3bbnnQp%2FAtEHRCDR2SqWZfBP4NaqGho6abuFf0L%2FIirch85r5DJyPTU%2BIhhpc%2Fw%2BNAxe4T1Jr2x7mEY8%2Fz5MorlKg3D9vqfdRBeRw7NZ4ONsrNx%2FFblFVvEl8EnzD3yviprYHRdPvKycrffEtKg0IjPuM&X-Amz-Signature=307ca7bcc863704a357d624e9f849b355d86ea635beeef44b0ee314355724f5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
