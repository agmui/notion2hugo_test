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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNWY4WK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE5GGUAe4V%2F0bXV6XCxzREOJbI3MBo54lnGqQBvmjOrzAiBRG1rdP3iDYzqYtUdhYl5Q4gJSOrkryKhQxPvLVfxIkCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMzDrfGf3aLGC5Hbc3KtwDbwR67X%2FVHtvsgFlzmPtSAcJxXddLVIs3Bjgw0jRDcQb1kL9V5YQBp3plY%2BQkQRK%2FNnmAh4Ru5Z6Pijg1%2Fo5U1kxjp4Q4xp0vzZqa0%2Bfp%2FyZZqmX%2BUAvIg85AiJ5J3ceV0XjAGrt0gUCoTijr9qOElE%2FTwAhnGQp3eJvwO1TK0flsSMww7cf5UNPLb%2BXRIoH14yPCW217yvOUZCCW1Nh6KNraL30e2bwS4zEuTDhjGHxaXReZqJ3%2BdTHhzELI6GDZP%2FZGNcUHJcngJugUIxo38Xllr1oJQjFI2%2BiRuuuutIBW61X%2BFekhh%2BkY08Pbhy%2FkO627mJNqEJsoy2IpJE3nNd%2BEm5Zw44nmI6Am1DBvwipspn35Cjj0QKqdAvwXzMtGzWMMQIggP010ByAR7o1uqe8u7zvqiASBP9ryCDwgNhjZ6RxWzHjRECatRuiVSEjLKwighSpflH%2BrK%2BqvAKgw1jtXtrLs00ltnGvNHSiaSMRMenEwx0fEFhE3ZzVbLtoNTvTq8aieRp11PmkgDDZ9%2BRRYydfN%2F7GBnzpXGCdk9SOU%2BmkuJZEGhCxIERK627C9BbhNxpB0wZAxSV6Tq2cStbJO3RJD1mga1EJtYxUEnAYrTPsRSvEAKs%2F5wO8wj76wwwY6pgE0oX9alklPOBX2YyAf6OYS1RgPCDsl5sPGtXws3wpEk%2FOKfibwII7gK72iTiGp6Jml%2FbbfUKr%2F2udfa7Bbppj2hrEl0LENdvHrc7o35ma5978KtLHdHYFkyxnWZVH2bKunIgxDn2Q8EL%2FdRiZPXKoHBQ1NamjlJ4YXeFFv%2Blhr96D7KZzr8Hv10JstvqC8hej4Iadh%2FswTTT06qMnWx57g9mqzQHKO&X-Amz-Signature=c6932a9a89123067a53b20088074a330583462a58b0d5147119d6fda9ca46709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNWY4WK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE5GGUAe4V%2F0bXV6XCxzREOJbI3MBo54lnGqQBvmjOrzAiBRG1rdP3iDYzqYtUdhYl5Q4gJSOrkryKhQxPvLVfxIkCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMzDrfGf3aLGC5Hbc3KtwDbwR67X%2FVHtvsgFlzmPtSAcJxXddLVIs3Bjgw0jRDcQb1kL9V5YQBp3plY%2BQkQRK%2FNnmAh4Ru5Z6Pijg1%2Fo5U1kxjp4Q4xp0vzZqa0%2Bfp%2FyZZqmX%2BUAvIg85AiJ5J3ceV0XjAGrt0gUCoTijr9qOElE%2FTwAhnGQp3eJvwO1TK0flsSMww7cf5UNPLb%2BXRIoH14yPCW217yvOUZCCW1Nh6KNraL30e2bwS4zEuTDhjGHxaXReZqJ3%2BdTHhzELI6GDZP%2FZGNcUHJcngJugUIxo38Xllr1oJQjFI2%2BiRuuuutIBW61X%2BFekhh%2BkY08Pbhy%2FkO627mJNqEJsoy2IpJE3nNd%2BEm5Zw44nmI6Am1DBvwipspn35Cjj0QKqdAvwXzMtGzWMMQIggP010ByAR7o1uqe8u7zvqiASBP9ryCDwgNhjZ6RxWzHjRECatRuiVSEjLKwighSpflH%2BrK%2BqvAKgw1jtXtrLs00ltnGvNHSiaSMRMenEwx0fEFhE3ZzVbLtoNTvTq8aieRp11PmkgDDZ9%2BRRYydfN%2F7GBnzpXGCdk9SOU%2BmkuJZEGhCxIERK627C9BbhNxpB0wZAxSV6Tq2cStbJO3RJD1mga1EJtYxUEnAYrTPsRSvEAKs%2F5wO8wj76wwwY6pgE0oX9alklPOBX2YyAf6OYS1RgPCDsl5sPGtXws3wpEk%2FOKfibwII7gK72iTiGp6Jml%2FbbfUKr%2F2udfa7Bbppj2hrEl0LENdvHrc7o35ma5978KtLHdHYFkyxnWZVH2bKunIgxDn2Q8EL%2FdRiZPXKoHBQ1NamjlJ4YXeFFv%2Blhr96D7KZzr8Hv10JstvqC8hej4Iadh%2FswTTT06qMnWx57g9mqzQHKO&X-Amz-Signature=120e982430f96812dbd3c28cc39e3a2981a98b1eb301df901e6333d69f17b89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNWY4WK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE5GGUAe4V%2F0bXV6XCxzREOJbI3MBo54lnGqQBvmjOrzAiBRG1rdP3iDYzqYtUdhYl5Q4gJSOrkryKhQxPvLVfxIkCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMzDrfGf3aLGC5Hbc3KtwDbwR67X%2FVHtvsgFlzmPtSAcJxXddLVIs3Bjgw0jRDcQb1kL9V5YQBp3plY%2BQkQRK%2FNnmAh4Ru5Z6Pijg1%2Fo5U1kxjp4Q4xp0vzZqa0%2Bfp%2FyZZqmX%2BUAvIg85AiJ5J3ceV0XjAGrt0gUCoTijr9qOElE%2FTwAhnGQp3eJvwO1TK0flsSMww7cf5UNPLb%2BXRIoH14yPCW217yvOUZCCW1Nh6KNraL30e2bwS4zEuTDhjGHxaXReZqJ3%2BdTHhzELI6GDZP%2FZGNcUHJcngJugUIxo38Xllr1oJQjFI2%2BiRuuuutIBW61X%2BFekhh%2BkY08Pbhy%2FkO627mJNqEJsoy2IpJE3nNd%2BEm5Zw44nmI6Am1DBvwipspn35Cjj0QKqdAvwXzMtGzWMMQIggP010ByAR7o1uqe8u7zvqiASBP9ryCDwgNhjZ6RxWzHjRECatRuiVSEjLKwighSpflH%2BrK%2BqvAKgw1jtXtrLs00ltnGvNHSiaSMRMenEwx0fEFhE3ZzVbLtoNTvTq8aieRp11PmkgDDZ9%2BRRYydfN%2F7GBnzpXGCdk9SOU%2BmkuJZEGhCxIERK627C9BbhNxpB0wZAxSV6Tq2cStbJO3RJD1mga1EJtYxUEnAYrTPsRSvEAKs%2F5wO8wj76wwwY6pgE0oX9alklPOBX2YyAf6OYS1RgPCDsl5sPGtXws3wpEk%2FOKfibwII7gK72iTiGp6Jml%2FbbfUKr%2F2udfa7Bbppj2hrEl0LENdvHrc7o35ma5978KtLHdHYFkyxnWZVH2bKunIgxDn2Q8EL%2FdRiZPXKoHBQ1NamjlJ4YXeFFv%2Blhr96D7KZzr8Hv10JstvqC8hej4Iadh%2FswTTT06qMnWx57g9mqzQHKO&X-Amz-Signature=d13211cf804c57b958c73ca781909193b035d9e5c2aedb3a0015478143ea9b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNWY4WK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE5GGUAe4V%2F0bXV6XCxzREOJbI3MBo54lnGqQBvmjOrzAiBRG1rdP3iDYzqYtUdhYl5Q4gJSOrkryKhQxPvLVfxIkCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMzDrfGf3aLGC5Hbc3KtwDbwR67X%2FVHtvsgFlzmPtSAcJxXddLVIs3Bjgw0jRDcQb1kL9V5YQBp3plY%2BQkQRK%2FNnmAh4Ru5Z6Pijg1%2Fo5U1kxjp4Q4xp0vzZqa0%2Bfp%2FyZZqmX%2BUAvIg85AiJ5J3ceV0XjAGrt0gUCoTijr9qOElE%2FTwAhnGQp3eJvwO1TK0flsSMww7cf5UNPLb%2BXRIoH14yPCW217yvOUZCCW1Nh6KNraL30e2bwS4zEuTDhjGHxaXReZqJ3%2BdTHhzELI6GDZP%2FZGNcUHJcngJugUIxo38Xllr1oJQjFI2%2BiRuuuutIBW61X%2BFekhh%2BkY08Pbhy%2FkO627mJNqEJsoy2IpJE3nNd%2BEm5Zw44nmI6Am1DBvwipspn35Cjj0QKqdAvwXzMtGzWMMQIggP010ByAR7o1uqe8u7zvqiASBP9ryCDwgNhjZ6RxWzHjRECatRuiVSEjLKwighSpflH%2BrK%2BqvAKgw1jtXtrLs00ltnGvNHSiaSMRMenEwx0fEFhE3ZzVbLtoNTvTq8aieRp11PmkgDDZ9%2BRRYydfN%2F7GBnzpXGCdk9SOU%2BmkuJZEGhCxIERK627C9BbhNxpB0wZAxSV6Tq2cStbJO3RJD1mga1EJtYxUEnAYrTPsRSvEAKs%2F5wO8wj76wwwY6pgE0oX9alklPOBX2YyAf6OYS1RgPCDsl5sPGtXws3wpEk%2FOKfibwII7gK72iTiGp6Jml%2FbbfUKr%2F2udfa7Bbppj2hrEl0LENdvHrc7o35ma5978KtLHdHYFkyxnWZVH2bKunIgxDn2Q8EL%2FdRiZPXKoHBQ1NamjlJ4YXeFFv%2Blhr96D7KZzr8Hv10JstvqC8hej4Iadh%2FswTTT06qMnWx57g9mqzQHKO&X-Amz-Signature=5a7bfeb43ca2bf069a3af21acab03c9b43bf90024ed96c728f62ee95dfbbb498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNWY4WK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE5GGUAe4V%2F0bXV6XCxzREOJbI3MBo54lnGqQBvmjOrzAiBRG1rdP3iDYzqYtUdhYl5Q4gJSOrkryKhQxPvLVfxIkCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMzDrfGf3aLGC5Hbc3KtwDbwR67X%2FVHtvsgFlzmPtSAcJxXddLVIs3Bjgw0jRDcQb1kL9V5YQBp3plY%2BQkQRK%2FNnmAh4Ru5Z6Pijg1%2Fo5U1kxjp4Q4xp0vzZqa0%2Bfp%2FyZZqmX%2BUAvIg85AiJ5J3ceV0XjAGrt0gUCoTijr9qOElE%2FTwAhnGQp3eJvwO1TK0flsSMww7cf5UNPLb%2BXRIoH14yPCW217yvOUZCCW1Nh6KNraL30e2bwS4zEuTDhjGHxaXReZqJ3%2BdTHhzELI6GDZP%2FZGNcUHJcngJugUIxo38Xllr1oJQjFI2%2BiRuuuutIBW61X%2BFekhh%2BkY08Pbhy%2FkO627mJNqEJsoy2IpJE3nNd%2BEm5Zw44nmI6Am1DBvwipspn35Cjj0QKqdAvwXzMtGzWMMQIggP010ByAR7o1uqe8u7zvqiASBP9ryCDwgNhjZ6RxWzHjRECatRuiVSEjLKwighSpflH%2BrK%2BqvAKgw1jtXtrLs00ltnGvNHSiaSMRMenEwx0fEFhE3ZzVbLtoNTvTq8aieRp11PmkgDDZ9%2BRRYydfN%2F7GBnzpXGCdk9SOU%2BmkuJZEGhCxIERK627C9BbhNxpB0wZAxSV6Tq2cStbJO3RJD1mga1EJtYxUEnAYrTPsRSvEAKs%2F5wO8wj76wwwY6pgE0oX9alklPOBX2YyAf6OYS1RgPCDsl5sPGtXws3wpEk%2FOKfibwII7gK72iTiGp6Jml%2FbbfUKr%2F2udfa7Bbppj2hrEl0LENdvHrc7o35ma5978KtLHdHYFkyxnWZVH2bKunIgxDn2Q8EL%2FdRiZPXKoHBQ1NamjlJ4YXeFFv%2Blhr96D7KZzr8Hv10JstvqC8hej4Iadh%2FswTTT06qMnWx57g9mqzQHKO&X-Amz-Signature=2612b27bfee3a99a552742ac9e359d2a7d45b6c6334d2035cce4eb3e1606c996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNWY4WK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE5GGUAe4V%2F0bXV6XCxzREOJbI3MBo54lnGqQBvmjOrzAiBRG1rdP3iDYzqYtUdhYl5Q4gJSOrkryKhQxPvLVfxIkCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMzDrfGf3aLGC5Hbc3KtwDbwR67X%2FVHtvsgFlzmPtSAcJxXddLVIs3Bjgw0jRDcQb1kL9V5YQBp3plY%2BQkQRK%2FNnmAh4Ru5Z6Pijg1%2Fo5U1kxjp4Q4xp0vzZqa0%2Bfp%2FyZZqmX%2BUAvIg85AiJ5J3ceV0XjAGrt0gUCoTijr9qOElE%2FTwAhnGQp3eJvwO1TK0flsSMww7cf5UNPLb%2BXRIoH14yPCW217yvOUZCCW1Nh6KNraL30e2bwS4zEuTDhjGHxaXReZqJ3%2BdTHhzELI6GDZP%2FZGNcUHJcngJugUIxo38Xllr1oJQjFI2%2BiRuuuutIBW61X%2BFekhh%2BkY08Pbhy%2FkO627mJNqEJsoy2IpJE3nNd%2BEm5Zw44nmI6Am1DBvwipspn35Cjj0QKqdAvwXzMtGzWMMQIggP010ByAR7o1uqe8u7zvqiASBP9ryCDwgNhjZ6RxWzHjRECatRuiVSEjLKwighSpflH%2BrK%2BqvAKgw1jtXtrLs00ltnGvNHSiaSMRMenEwx0fEFhE3ZzVbLtoNTvTq8aieRp11PmkgDDZ9%2BRRYydfN%2F7GBnzpXGCdk9SOU%2BmkuJZEGhCxIERK627C9BbhNxpB0wZAxSV6Tq2cStbJO3RJD1mga1EJtYxUEnAYrTPsRSvEAKs%2F5wO8wj76wwwY6pgE0oX9alklPOBX2YyAf6OYS1RgPCDsl5sPGtXws3wpEk%2FOKfibwII7gK72iTiGp6Jml%2FbbfUKr%2F2udfa7Bbppj2hrEl0LENdvHrc7o35ma5978KtLHdHYFkyxnWZVH2bKunIgxDn2Q8EL%2FdRiZPXKoHBQ1NamjlJ4YXeFFv%2Blhr96D7KZzr8Hv10JstvqC8hej4Iadh%2FswTTT06qMnWx57g9mqzQHKO&X-Amz-Signature=6ef59b5f7433d86d4dc7140908030fb75408b6d61776e973f3b6004f8ce8d452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNWY4WK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE5GGUAe4V%2F0bXV6XCxzREOJbI3MBo54lnGqQBvmjOrzAiBRG1rdP3iDYzqYtUdhYl5Q4gJSOrkryKhQxPvLVfxIkCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMzDrfGf3aLGC5Hbc3KtwDbwR67X%2FVHtvsgFlzmPtSAcJxXddLVIs3Bjgw0jRDcQb1kL9V5YQBp3plY%2BQkQRK%2FNnmAh4Ru5Z6Pijg1%2Fo5U1kxjp4Q4xp0vzZqa0%2Bfp%2FyZZqmX%2BUAvIg85AiJ5J3ceV0XjAGrt0gUCoTijr9qOElE%2FTwAhnGQp3eJvwO1TK0flsSMww7cf5UNPLb%2BXRIoH14yPCW217yvOUZCCW1Nh6KNraL30e2bwS4zEuTDhjGHxaXReZqJ3%2BdTHhzELI6GDZP%2FZGNcUHJcngJugUIxo38Xllr1oJQjFI2%2BiRuuuutIBW61X%2BFekhh%2BkY08Pbhy%2FkO627mJNqEJsoy2IpJE3nNd%2BEm5Zw44nmI6Am1DBvwipspn35Cjj0QKqdAvwXzMtGzWMMQIggP010ByAR7o1uqe8u7zvqiASBP9ryCDwgNhjZ6RxWzHjRECatRuiVSEjLKwighSpflH%2BrK%2BqvAKgw1jtXtrLs00ltnGvNHSiaSMRMenEwx0fEFhE3ZzVbLtoNTvTq8aieRp11PmkgDDZ9%2BRRYydfN%2F7GBnzpXGCdk9SOU%2BmkuJZEGhCxIERK627C9BbhNxpB0wZAxSV6Tq2cStbJO3RJD1mga1EJtYxUEnAYrTPsRSvEAKs%2F5wO8wj76wwwY6pgE0oX9alklPOBX2YyAf6OYS1RgPCDsl5sPGtXws3wpEk%2FOKfibwII7gK72iTiGp6Jml%2FbbfUKr%2F2udfa7Bbppj2hrEl0LENdvHrc7o35ma5978KtLHdHYFkyxnWZVH2bKunIgxDn2Q8EL%2FdRiZPXKoHBQ1NamjlJ4YXeFFv%2Blhr96D7KZzr8Hv10JstvqC8hej4Iadh%2FswTTT06qMnWx57g9mqzQHKO&X-Amz-Signature=c69ef791502b8a6171f1e243dfde929f0e9361bd343deca65cb409f25f0ccd2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNWY4WK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE5GGUAe4V%2F0bXV6XCxzREOJbI3MBo54lnGqQBvmjOrzAiBRG1rdP3iDYzqYtUdhYl5Q4gJSOrkryKhQxPvLVfxIkCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMzDrfGf3aLGC5Hbc3KtwDbwR67X%2FVHtvsgFlzmPtSAcJxXddLVIs3Bjgw0jRDcQb1kL9V5YQBp3plY%2BQkQRK%2FNnmAh4Ru5Z6Pijg1%2Fo5U1kxjp4Q4xp0vzZqa0%2Bfp%2FyZZqmX%2BUAvIg85AiJ5J3ceV0XjAGrt0gUCoTijr9qOElE%2FTwAhnGQp3eJvwO1TK0flsSMww7cf5UNPLb%2BXRIoH14yPCW217yvOUZCCW1Nh6KNraL30e2bwS4zEuTDhjGHxaXReZqJ3%2BdTHhzELI6GDZP%2FZGNcUHJcngJugUIxo38Xllr1oJQjFI2%2BiRuuuutIBW61X%2BFekhh%2BkY08Pbhy%2FkO627mJNqEJsoy2IpJE3nNd%2BEm5Zw44nmI6Am1DBvwipspn35Cjj0QKqdAvwXzMtGzWMMQIggP010ByAR7o1uqe8u7zvqiASBP9ryCDwgNhjZ6RxWzHjRECatRuiVSEjLKwighSpflH%2BrK%2BqvAKgw1jtXtrLs00ltnGvNHSiaSMRMenEwx0fEFhE3ZzVbLtoNTvTq8aieRp11PmkgDDZ9%2BRRYydfN%2F7GBnzpXGCdk9SOU%2BmkuJZEGhCxIERK627C9BbhNxpB0wZAxSV6Tq2cStbJO3RJD1mga1EJtYxUEnAYrTPsRSvEAKs%2F5wO8wj76wwwY6pgE0oX9alklPOBX2YyAf6OYS1RgPCDsl5sPGtXws3wpEk%2FOKfibwII7gK72iTiGp6Jml%2FbbfUKr%2F2udfa7Bbppj2hrEl0LENdvHrc7o35ma5978KtLHdHYFkyxnWZVH2bKunIgxDn2Q8EL%2FdRiZPXKoHBQ1NamjlJ4YXeFFv%2Blhr96D7KZzr8Hv10JstvqC8hej4Iadh%2FswTTT06qMnWx57g9mqzQHKO&X-Amz-Signature=47f3abbd259daf9c47a98b9d94ba38cd4399f2c6a8d8e5e70b5173080f25dd21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
