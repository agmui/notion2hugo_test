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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADXDXWA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDSRKFpAhB1vjZHTR9U9WZEybfaDQ0MvnYMzDNQaYy2wQIgG9ku7cTb61q2FKAK5eHI%2Bw0wuj32noGqt2%2BjjN%2BQ4lAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEuCC%2FYqjdyckf%2FOSrcA%2BiFh36W8ZlNEaHgkAYMMzoRtgHijCDK4%2FKs%2FTJYjHOj5RClaAh1CRmnNHYB5MFfXz8kuCHIrz4CytGJbfUvOKSfzKlcvhrPY1Vca9C90wqzulLcnqv%2BL4NnfF1EQ7mAhHS%2BrdWHqCo%2BEeK61JXr1uazCwo6ExrWH%2FcG%2BqCBhIT92oBfEhr8ce2MRJdyA0Phtc9UaSbqoYIvWldvgXgmcXzFwPiVZgV0%2BULpjTPJmEGpiWqmv5CtA3Q8hfgQkwt7A7ogdVJx7s7DAGrSajOrfXCbKc4ByKf4fF3Ckazd0v4DCzqQ%2FEBYUOogRTWswuLkqReMG1SpSSF2SkdsNtB4cZvLn0N5xd0KqN8Z1zMj5eN85HS1%2BWTKhH%2F2500JT%2BZAukdUcv9Sssvjv%2Bpy5YMNgvRt2LyljMqrfZbInihqEy03uqBnYl8pcedHp3Lw%2BJ6UhH%2F%2BuulFmLGCCaNFCG22ls4lHsyAlTv9o5rQ3TpPcGfvxEv%2BB4Hf6jp3kLcly3O62auxMCDSg6QnCPLACyrU2EPkPnzDzGRw6h3Gc5gzW9yqjrEWdUjCbsOlKGJlM4iUGohBupY%2FtBJ%2BYpEgi98sNysr1%2BhoWWuXLxrelf2iLURPxQqltCv87N0T489RMJ7XpMAGOqUBW28zqhyYNjruTD7s5GDnLrxew9sDmlqN40nhA6Zs7%2F9DS411TYgzrJ8Trfp6VhgWmdojqGcko6nV8iQvjnf%2Bc0EeKl5KUbP9nfQGDYIxetYSUHag9KfeUQE5Vvvq1rxNKADISwesQ%2B7%2BB8G8VYBp7%2FDsJByIN%2BNxQKZAuu6cm9v%2BYmUVWIq%2FjG7oT2gMViG5gPG66eJNgGQKox4xd3PUNwLU7lVf&X-Amz-Signature=1cd3ca865d3bb3df7b2fb9e670ca1d53d5733d99c71da4b547a4d8cc247c9cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADXDXWA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDSRKFpAhB1vjZHTR9U9WZEybfaDQ0MvnYMzDNQaYy2wQIgG9ku7cTb61q2FKAK5eHI%2Bw0wuj32noGqt2%2BjjN%2BQ4lAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEuCC%2FYqjdyckf%2FOSrcA%2BiFh36W8ZlNEaHgkAYMMzoRtgHijCDK4%2FKs%2FTJYjHOj5RClaAh1CRmnNHYB5MFfXz8kuCHIrz4CytGJbfUvOKSfzKlcvhrPY1Vca9C90wqzulLcnqv%2BL4NnfF1EQ7mAhHS%2BrdWHqCo%2BEeK61JXr1uazCwo6ExrWH%2FcG%2BqCBhIT92oBfEhr8ce2MRJdyA0Phtc9UaSbqoYIvWldvgXgmcXzFwPiVZgV0%2BULpjTPJmEGpiWqmv5CtA3Q8hfgQkwt7A7ogdVJx7s7DAGrSajOrfXCbKc4ByKf4fF3Ckazd0v4DCzqQ%2FEBYUOogRTWswuLkqReMG1SpSSF2SkdsNtB4cZvLn0N5xd0KqN8Z1zMj5eN85HS1%2BWTKhH%2F2500JT%2BZAukdUcv9Sssvjv%2Bpy5YMNgvRt2LyljMqrfZbInihqEy03uqBnYl8pcedHp3Lw%2BJ6UhH%2F%2BuulFmLGCCaNFCG22ls4lHsyAlTv9o5rQ3TpPcGfvxEv%2BB4Hf6jp3kLcly3O62auxMCDSg6QnCPLACyrU2EPkPnzDzGRw6h3Gc5gzW9yqjrEWdUjCbsOlKGJlM4iUGohBupY%2FtBJ%2BYpEgi98sNysr1%2BhoWWuXLxrelf2iLURPxQqltCv87N0T489RMJ7XpMAGOqUBW28zqhyYNjruTD7s5GDnLrxew9sDmlqN40nhA6Zs7%2F9DS411TYgzrJ8Trfp6VhgWmdojqGcko6nV8iQvjnf%2Bc0EeKl5KUbP9nfQGDYIxetYSUHag9KfeUQE5Vvvq1rxNKADISwesQ%2B7%2BB8G8VYBp7%2FDsJByIN%2BNxQKZAuu6cm9v%2BYmUVWIq%2FjG7oT2gMViG5gPG66eJNgGQKox4xd3PUNwLU7lVf&X-Amz-Signature=1e379e92c7b2558ad5ad40331c96dcdb3dfe3d403eaedb217e109b6dcd8503ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADXDXWA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDSRKFpAhB1vjZHTR9U9WZEybfaDQ0MvnYMzDNQaYy2wQIgG9ku7cTb61q2FKAK5eHI%2Bw0wuj32noGqt2%2BjjN%2BQ4lAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEuCC%2FYqjdyckf%2FOSrcA%2BiFh36W8ZlNEaHgkAYMMzoRtgHijCDK4%2FKs%2FTJYjHOj5RClaAh1CRmnNHYB5MFfXz8kuCHIrz4CytGJbfUvOKSfzKlcvhrPY1Vca9C90wqzulLcnqv%2BL4NnfF1EQ7mAhHS%2BrdWHqCo%2BEeK61JXr1uazCwo6ExrWH%2FcG%2BqCBhIT92oBfEhr8ce2MRJdyA0Phtc9UaSbqoYIvWldvgXgmcXzFwPiVZgV0%2BULpjTPJmEGpiWqmv5CtA3Q8hfgQkwt7A7ogdVJx7s7DAGrSajOrfXCbKc4ByKf4fF3Ckazd0v4DCzqQ%2FEBYUOogRTWswuLkqReMG1SpSSF2SkdsNtB4cZvLn0N5xd0KqN8Z1zMj5eN85HS1%2BWTKhH%2F2500JT%2BZAukdUcv9Sssvjv%2Bpy5YMNgvRt2LyljMqrfZbInihqEy03uqBnYl8pcedHp3Lw%2BJ6UhH%2F%2BuulFmLGCCaNFCG22ls4lHsyAlTv9o5rQ3TpPcGfvxEv%2BB4Hf6jp3kLcly3O62auxMCDSg6QnCPLACyrU2EPkPnzDzGRw6h3Gc5gzW9yqjrEWdUjCbsOlKGJlM4iUGohBupY%2FtBJ%2BYpEgi98sNysr1%2BhoWWuXLxrelf2iLURPxQqltCv87N0T489RMJ7XpMAGOqUBW28zqhyYNjruTD7s5GDnLrxew9sDmlqN40nhA6Zs7%2F9DS411TYgzrJ8Trfp6VhgWmdojqGcko6nV8iQvjnf%2Bc0EeKl5KUbP9nfQGDYIxetYSUHag9KfeUQE5Vvvq1rxNKADISwesQ%2B7%2BB8G8VYBp7%2FDsJByIN%2BNxQKZAuu6cm9v%2BYmUVWIq%2FjG7oT2gMViG5gPG66eJNgGQKox4xd3PUNwLU7lVf&X-Amz-Signature=aae8c5d9f1148e1ecac9cac0849ab2f5bf6e36f02ec9af433f08225f25671337&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADXDXWA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDSRKFpAhB1vjZHTR9U9WZEybfaDQ0MvnYMzDNQaYy2wQIgG9ku7cTb61q2FKAK5eHI%2Bw0wuj32noGqt2%2BjjN%2BQ4lAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEuCC%2FYqjdyckf%2FOSrcA%2BiFh36W8ZlNEaHgkAYMMzoRtgHijCDK4%2FKs%2FTJYjHOj5RClaAh1CRmnNHYB5MFfXz8kuCHIrz4CytGJbfUvOKSfzKlcvhrPY1Vca9C90wqzulLcnqv%2BL4NnfF1EQ7mAhHS%2BrdWHqCo%2BEeK61JXr1uazCwo6ExrWH%2FcG%2BqCBhIT92oBfEhr8ce2MRJdyA0Phtc9UaSbqoYIvWldvgXgmcXzFwPiVZgV0%2BULpjTPJmEGpiWqmv5CtA3Q8hfgQkwt7A7ogdVJx7s7DAGrSajOrfXCbKc4ByKf4fF3Ckazd0v4DCzqQ%2FEBYUOogRTWswuLkqReMG1SpSSF2SkdsNtB4cZvLn0N5xd0KqN8Z1zMj5eN85HS1%2BWTKhH%2F2500JT%2BZAukdUcv9Sssvjv%2Bpy5YMNgvRt2LyljMqrfZbInihqEy03uqBnYl8pcedHp3Lw%2BJ6UhH%2F%2BuulFmLGCCaNFCG22ls4lHsyAlTv9o5rQ3TpPcGfvxEv%2BB4Hf6jp3kLcly3O62auxMCDSg6QnCPLACyrU2EPkPnzDzGRw6h3Gc5gzW9yqjrEWdUjCbsOlKGJlM4iUGohBupY%2FtBJ%2BYpEgi98sNysr1%2BhoWWuXLxrelf2iLURPxQqltCv87N0T489RMJ7XpMAGOqUBW28zqhyYNjruTD7s5GDnLrxew9sDmlqN40nhA6Zs7%2F9DS411TYgzrJ8Trfp6VhgWmdojqGcko6nV8iQvjnf%2Bc0EeKl5KUbP9nfQGDYIxetYSUHag9KfeUQE5Vvvq1rxNKADISwesQ%2B7%2BB8G8VYBp7%2FDsJByIN%2BNxQKZAuu6cm9v%2BYmUVWIq%2FjG7oT2gMViG5gPG66eJNgGQKox4xd3PUNwLU7lVf&X-Amz-Signature=16b04ee566199877b9100474f4380917b36e289288ab023c11204c9794d09026&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADXDXWA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDSRKFpAhB1vjZHTR9U9WZEybfaDQ0MvnYMzDNQaYy2wQIgG9ku7cTb61q2FKAK5eHI%2Bw0wuj32noGqt2%2BjjN%2BQ4lAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEuCC%2FYqjdyckf%2FOSrcA%2BiFh36W8ZlNEaHgkAYMMzoRtgHijCDK4%2FKs%2FTJYjHOj5RClaAh1CRmnNHYB5MFfXz8kuCHIrz4CytGJbfUvOKSfzKlcvhrPY1Vca9C90wqzulLcnqv%2BL4NnfF1EQ7mAhHS%2BrdWHqCo%2BEeK61JXr1uazCwo6ExrWH%2FcG%2BqCBhIT92oBfEhr8ce2MRJdyA0Phtc9UaSbqoYIvWldvgXgmcXzFwPiVZgV0%2BULpjTPJmEGpiWqmv5CtA3Q8hfgQkwt7A7ogdVJx7s7DAGrSajOrfXCbKc4ByKf4fF3Ckazd0v4DCzqQ%2FEBYUOogRTWswuLkqReMG1SpSSF2SkdsNtB4cZvLn0N5xd0KqN8Z1zMj5eN85HS1%2BWTKhH%2F2500JT%2BZAukdUcv9Sssvjv%2Bpy5YMNgvRt2LyljMqrfZbInihqEy03uqBnYl8pcedHp3Lw%2BJ6UhH%2F%2BuulFmLGCCaNFCG22ls4lHsyAlTv9o5rQ3TpPcGfvxEv%2BB4Hf6jp3kLcly3O62auxMCDSg6QnCPLACyrU2EPkPnzDzGRw6h3Gc5gzW9yqjrEWdUjCbsOlKGJlM4iUGohBupY%2FtBJ%2BYpEgi98sNysr1%2BhoWWuXLxrelf2iLURPxQqltCv87N0T489RMJ7XpMAGOqUBW28zqhyYNjruTD7s5GDnLrxew9sDmlqN40nhA6Zs7%2F9DS411TYgzrJ8Trfp6VhgWmdojqGcko6nV8iQvjnf%2Bc0EeKl5KUbP9nfQGDYIxetYSUHag9KfeUQE5Vvvq1rxNKADISwesQ%2B7%2BB8G8VYBp7%2FDsJByIN%2BNxQKZAuu6cm9v%2BYmUVWIq%2FjG7oT2gMViG5gPG66eJNgGQKox4xd3PUNwLU7lVf&X-Amz-Signature=e3e5fe5ff55746a6fda28d5721b0a601dff84fbdad5ba509840f74fdeb758660&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADXDXWA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDSRKFpAhB1vjZHTR9U9WZEybfaDQ0MvnYMzDNQaYy2wQIgG9ku7cTb61q2FKAK5eHI%2Bw0wuj32noGqt2%2BjjN%2BQ4lAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEuCC%2FYqjdyckf%2FOSrcA%2BiFh36W8ZlNEaHgkAYMMzoRtgHijCDK4%2FKs%2FTJYjHOj5RClaAh1CRmnNHYB5MFfXz8kuCHIrz4CytGJbfUvOKSfzKlcvhrPY1Vca9C90wqzulLcnqv%2BL4NnfF1EQ7mAhHS%2BrdWHqCo%2BEeK61JXr1uazCwo6ExrWH%2FcG%2BqCBhIT92oBfEhr8ce2MRJdyA0Phtc9UaSbqoYIvWldvgXgmcXzFwPiVZgV0%2BULpjTPJmEGpiWqmv5CtA3Q8hfgQkwt7A7ogdVJx7s7DAGrSajOrfXCbKc4ByKf4fF3Ckazd0v4DCzqQ%2FEBYUOogRTWswuLkqReMG1SpSSF2SkdsNtB4cZvLn0N5xd0KqN8Z1zMj5eN85HS1%2BWTKhH%2F2500JT%2BZAukdUcv9Sssvjv%2Bpy5YMNgvRt2LyljMqrfZbInihqEy03uqBnYl8pcedHp3Lw%2BJ6UhH%2F%2BuulFmLGCCaNFCG22ls4lHsyAlTv9o5rQ3TpPcGfvxEv%2BB4Hf6jp3kLcly3O62auxMCDSg6QnCPLACyrU2EPkPnzDzGRw6h3Gc5gzW9yqjrEWdUjCbsOlKGJlM4iUGohBupY%2FtBJ%2BYpEgi98sNysr1%2BhoWWuXLxrelf2iLURPxQqltCv87N0T489RMJ7XpMAGOqUBW28zqhyYNjruTD7s5GDnLrxew9sDmlqN40nhA6Zs7%2F9DS411TYgzrJ8Trfp6VhgWmdojqGcko6nV8iQvjnf%2Bc0EeKl5KUbP9nfQGDYIxetYSUHag9KfeUQE5Vvvq1rxNKADISwesQ%2B7%2BB8G8VYBp7%2FDsJByIN%2BNxQKZAuu6cm9v%2BYmUVWIq%2FjG7oT2gMViG5gPG66eJNgGQKox4xd3PUNwLU7lVf&X-Amz-Signature=e656451cecb1280101343c92dbdd953c7d7cf3e03225d1ba0b11e5491a637e31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADXDXWA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDSRKFpAhB1vjZHTR9U9WZEybfaDQ0MvnYMzDNQaYy2wQIgG9ku7cTb61q2FKAK5eHI%2Bw0wuj32noGqt2%2BjjN%2BQ4lAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEuCC%2FYqjdyckf%2FOSrcA%2BiFh36W8ZlNEaHgkAYMMzoRtgHijCDK4%2FKs%2FTJYjHOj5RClaAh1CRmnNHYB5MFfXz8kuCHIrz4CytGJbfUvOKSfzKlcvhrPY1Vca9C90wqzulLcnqv%2BL4NnfF1EQ7mAhHS%2BrdWHqCo%2BEeK61JXr1uazCwo6ExrWH%2FcG%2BqCBhIT92oBfEhr8ce2MRJdyA0Phtc9UaSbqoYIvWldvgXgmcXzFwPiVZgV0%2BULpjTPJmEGpiWqmv5CtA3Q8hfgQkwt7A7ogdVJx7s7DAGrSajOrfXCbKc4ByKf4fF3Ckazd0v4DCzqQ%2FEBYUOogRTWswuLkqReMG1SpSSF2SkdsNtB4cZvLn0N5xd0KqN8Z1zMj5eN85HS1%2BWTKhH%2F2500JT%2BZAukdUcv9Sssvjv%2Bpy5YMNgvRt2LyljMqrfZbInihqEy03uqBnYl8pcedHp3Lw%2BJ6UhH%2F%2BuulFmLGCCaNFCG22ls4lHsyAlTv9o5rQ3TpPcGfvxEv%2BB4Hf6jp3kLcly3O62auxMCDSg6QnCPLACyrU2EPkPnzDzGRw6h3Gc5gzW9yqjrEWdUjCbsOlKGJlM4iUGohBupY%2FtBJ%2BYpEgi98sNysr1%2BhoWWuXLxrelf2iLURPxQqltCv87N0T489RMJ7XpMAGOqUBW28zqhyYNjruTD7s5GDnLrxew9sDmlqN40nhA6Zs7%2F9DS411TYgzrJ8Trfp6VhgWmdojqGcko6nV8iQvjnf%2Bc0EeKl5KUbP9nfQGDYIxetYSUHag9KfeUQE5Vvvq1rxNKADISwesQ%2B7%2BB8G8VYBp7%2FDsJByIN%2BNxQKZAuu6cm9v%2BYmUVWIq%2FjG7oT2gMViG5gPG66eJNgGQKox4xd3PUNwLU7lVf&X-Amz-Signature=c803fab32f963cca0a3aa50a33757be0585b4da0d38d7c91e4ce421edede222c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADXDXWA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDSRKFpAhB1vjZHTR9U9WZEybfaDQ0MvnYMzDNQaYy2wQIgG9ku7cTb61q2FKAK5eHI%2Bw0wuj32noGqt2%2BjjN%2BQ4lAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEuCC%2FYqjdyckf%2FOSrcA%2BiFh36W8ZlNEaHgkAYMMzoRtgHijCDK4%2FKs%2FTJYjHOj5RClaAh1CRmnNHYB5MFfXz8kuCHIrz4CytGJbfUvOKSfzKlcvhrPY1Vca9C90wqzulLcnqv%2BL4NnfF1EQ7mAhHS%2BrdWHqCo%2BEeK61JXr1uazCwo6ExrWH%2FcG%2BqCBhIT92oBfEhr8ce2MRJdyA0Phtc9UaSbqoYIvWldvgXgmcXzFwPiVZgV0%2BULpjTPJmEGpiWqmv5CtA3Q8hfgQkwt7A7ogdVJx7s7DAGrSajOrfXCbKc4ByKf4fF3Ckazd0v4DCzqQ%2FEBYUOogRTWswuLkqReMG1SpSSF2SkdsNtB4cZvLn0N5xd0KqN8Z1zMj5eN85HS1%2BWTKhH%2F2500JT%2BZAukdUcv9Sssvjv%2Bpy5YMNgvRt2LyljMqrfZbInihqEy03uqBnYl8pcedHp3Lw%2BJ6UhH%2F%2BuulFmLGCCaNFCG22ls4lHsyAlTv9o5rQ3TpPcGfvxEv%2BB4Hf6jp3kLcly3O62auxMCDSg6QnCPLACyrU2EPkPnzDzGRw6h3Gc5gzW9yqjrEWdUjCbsOlKGJlM4iUGohBupY%2FtBJ%2BYpEgi98sNysr1%2BhoWWuXLxrelf2iLURPxQqltCv87N0T489RMJ7XpMAGOqUBW28zqhyYNjruTD7s5GDnLrxew9sDmlqN40nhA6Zs7%2F9DS411TYgzrJ8Trfp6VhgWmdojqGcko6nV8iQvjnf%2Bc0EeKl5KUbP9nfQGDYIxetYSUHag9KfeUQE5Vvvq1rxNKADISwesQ%2B7%2BB8G8VYBp7%2FDsJByIN%2BNxQKZAuu6cm9v%2BYmUVWIq%2FjG7oT2gMViG5gPG66eJNgGQKox4xd3PUNwLU7lVf&X-Amz-Signature=d521a3ecd148e4503ca942057bd258c6cf737c0d0538e3be10d63d71bf56f438&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
