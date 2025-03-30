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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NHP6B3N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDVrjkM235itQW7ogorF3TUntmpfaCc469GbOMZeI7guQIgAWjxhEjtAYyYwJrOG6X23WUH02iiknrs%2Fiu%2FvDGs1aMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpToCwe1luSAaOYmSrcA9KApFyrvVyKrEok4jE8mADR%2BUMoZtwGY6WrhmiKJ0EQ%2B0xMZTovTaAW9TSaLMNgb29gZxbtKJQfz%2B%2F3w5L0xGzOTO4m4UvTtsr9ZnqGQaELuzmBuGY2eC9OcB77Zn%2FXYZyFHt2803bMi%2BUBZKOXciJktrG2MLQNiCrxgJCN6Tk2Vhb1%2BvqHxdv%2FiuDZ66SfFceYHEfeoYrU06nrGHBxr8TzfOfqmefJNtI2aRVvx8Ho8u2GQIM%2FwzobwX2V1rgGVDVLuQCyVJXOi4stAsZsJ4Nh7GE5ld%2FqAvEflC1DxuQ5ZJU0tKuMpvhkHZXrA1AXuk%2F9axwvISioMhRTB%2FUegFv3H1Lq%2BA0Ng5KkvFFAcRbZWmHtfnCZzMElJPQ%2BfWasbuwSziS2USg4inzvII%2F6YpqehQSQDS943uFb4iTkghzRhm%2FGYDFO1ybBrAFenn%2FTvAWX14EKZ8QP4rvjtevGaskeGQ%2FCGd2%2FRVivhZjmUL%2B46AgDiwMKPz3HeMM4dm7XJ5blWOJ5XraPQCIOCXZqwKFZwwmOITTLsz0w0bYJeHemu%2BKbXvy0cJh8XQgCHyfxHxkI%2BHz5AXTxW%2BFdO5I8ZRlBPMUBWNQozVEYZijhUHgcdEZO2rzQ4GSVwoKxMLnvo78GOqUBcxhrMMXJ2RZNClb1lyGlC2Dc%2BGEUxnp2%2BIc2NTdYxojP5xCS1AABeTz%2B2NaUDCENw9QjS2JKac6b%2BGFYIOlkN8hqWfunfiY1sHrbg5ho%2B4cUVYFeeC%2BwaHqqLRMvs3Kaugw1sPTzpAK8ECz3APMkBC7QnmJKRLoPyVgkJeLu5l8cBlRuMpd0WPJrFEO%2FHEPU95lNjYRTqePwkWMebLDPqsptZ%2F%2FQ&X-Amz-Signature=1be61f4500dc9b64ff126c2819da94993450759538e6b56ab4ded76eef31987e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NHP6B3N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDVrjkM235itQW7ogorF3TUntmpfaCc469GbOMZeI7guQIgAWjxhEjtAYyYwJrOG6X23WUH02iiknrs%2Fiu%2FvDGs1aMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpToCwe1luSAaOYmSrcA9KApFyrvVyKrEok4jE8mADR%2BUMoZtwGY6WrhmiKJ0EQ%2B0xMZTovTaAW9TSaLMNgb29gZxbtKJQfz%2B%2F3w5L0xGzOTO4m4UvTtsr9ZnqGQaELuzmBuGY2eC9OcB77Zn%2FXYZyFHt2803bMi%2BUBZKOXciJktrG2MLQNiCrxgJCN6Tk2Vhb1%2BvqHxdv%2FiuDZ66SfFceYHEfeoYrU06nrGHBxr8TzfOfqmefJNtI2aRVvx8Ho8u2GQIM%2FwzobwX2V1rgGVDVLuQCyVJXOi4stAsZsJ4Nh7GE5ld%2FqAvEflC1DxuQ5ZJU0tKuMpvhkHZXrA1AXuk%2F9axwvISioMhRTB%2FUegFv3H1Lq%2BA0Ng5KkvFFAcRbZWmHtfnCZzMElJPQ%2BfWasbuwSziS2USg4inzvII%2F6YpqehQSQDS943uFb4iTkghzRhm%2FGYDFO1ybBrAFenn%2FTvAWX14EKZ8QP4rvjtevGaskeGQ%2FCGd2%2FRVivhZjmUL%2B46AgDiwMKPz3HeMM4dm7XJ5blWOJ5XraPQCIOCXZqwKFZwwmOITTLsz0w0bYJeHemu%2BKbXvy0cJh8XQgCHyfxHxkI%2BHz5AXTxW%2BFdO5I8ZRlBPMUBWNQozVEYZijhUHgcdEZO2rzQ4GSVwoKxMLnvo78GOqUBcxhrMMXJ2RZNClb1lyGlC2Dc%2BGEUxnp2%2BIc2NTdYxojP5xCS1AABeTz%2B2NaUDCENw9QjS2JKac6b%2BGFYIOlkN8hqWfunfiY1sHrbg5ho%2B4cUVYFeeC%2BwaHqqLRMvs3Kaugw1sPTzpAK8ECz3APMkBC7QnmJKRLoPyVgkJeLu5l8cBlRuMpd0WPJrFEO%2FHEPU95lNjYRTqePwkWMebLDPqsptZ%2F%2FQ&X-Amz-Signature=c4e61e51b75e32e53034308f531ddf708e104e21a5a0626bab7c21be84084d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NHP6B3N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDVrjkM235itQW7ogorF3TUntmpfaCc469GbOMZeI7guQIgAWjxhEjtAYyYwJrOG6X23WUH02iiknrs%2Fiu%2FvDGs1aMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpToCwe1luSAaOYmSrcA9KApFyrvVyKrEok4jE8mADR%2BUMoZtwGY6WrhmiKJ0EQ%2B0xMZTovTaAW9TSaLMNgb29gZxbtKJQfz%2B%2F3w5L0xGzOTO4m4UvTtsr9ZnqGQaELuzmBuGY2eC9OcB77Zn%2FXYZyFHt2803bMi%2BUBZKOXciJktrG2MLQNiCrxgJCN6Tk2Vhb1%2BvqHxdv%2FiuDZ66SfFceYHEfeoYrU06nrGHBxr8TzfOfqmefJNtI2aRVvx8Ho8u2GQIM%2FwzobwX2V1rgGVDVLuQCyVJXOi4stAsZsJ4Nh7GE5ld%2FqAvEflC1DxuQ5ZJU0tKuMpvhkHZXrA1AXuk%2F9axwvISioMhRTB%2FUegFv3H1Lq%2BA0Ng5KkvFFAcRbZWmHtfnCZzMElJPQ%2BfWasbuwSziS2USg4inzvII%2F6YpqehQSQDS943uFb4iTkghzRhm%2FGYDFO1ybBrAFenn%2FTvAWX14EKZ8QP4rvjtevGaskeGQ%2FCGd2%2FRVivhZjmUL%2B46AgDiwMKPz3HeMM4dm7XJ5blWOJ5XraPQCIOCXZqwKFZwwmOITTLsz0w0bYJeHemu%2BKbXvy0cJh8XQgCHyfxHxkI%2BHz5AXTxW%2BFdO5I8ZRlBPMUBWNQozVEYZijhUHgcdEZO2rzQ4GSVwoKxMLnvo78GOqUBcxhrMMXJ2RZNClb1lyGlC2Dc%2BGEUxnp2%2BIc2NTdYxojP5xCS1AABeTz%2B2NaUDCENw9QjS2JKac6b%2BGFYIOlkN8hqWfunfiY1sHrbg5ho%2B4cUVYFeeC%2BwaHqqLRMvs3Kaugw1sPTzpAK8ECz3APMkBC7QnmJKRLoPyVgkJeLu5l8cBlRuMpd0WPJrFEO%2FHEPU95lNjYRTqePwkWMebLDPqsptZ%2F%2FQ&X-Amz-Signature=ff09a801a9cb054e10cb88527ca177864bc6968cac57cf96532850a863c845e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NHP6B3N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDVrjkM235itQW7ogorF3TUntmpfaCc469GbOMZeI7guQIgAWjxhEjtAYyYwJrOG6X23WUH02iiknrs%2Fiu%2FvDGs1aMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpToCwe1luSAaOYmSrcA9KApFyrvVyKrEok4jE8mADR%2BUMoZtwGY6WrhmiKJ0EQ%2B0xMZTovTaAW9TSaLMNgb29gZxbtKJQfz%2B%2F3w5L0xGzOTO4m4UvTtsr9ZnqGQaELuzmBuGY2eC9OcB77Zn%2FXYZyFHt2803bMi%2BUBZKOXciJktrG2MLQNiCrxgJCN6Tk2Vhb1%2BvqHxdv%2FiuDZ66SfFceYHEfeoYrU06nrGHBxr8TzfOfqmefJNtI2aRVvx8Ho8u2GQIM%2FwzobwX2V1rgGVDVLuQCyVJXOi4stAsZsJ4Nh7GE5ld%2FqAvEflC1DxuQ5ZJU0tKuMpvhkHZXrA1AXuk%2F9axwvISioMhRTB%2FUegFv3H1Lq%2BA0Ng5KkvFFAcRbZWmHtfnCZzMElJPQ%2BfWasbuwSziS2USg4inzvII%2F6YpqehQSQDS943uFb4iTkghzRhm%2FGYDFO1ybBrAFenn%2FTvAWX14EKZ8QP4rvjtevGaskeGQ%2FCGd2%2FRVivhZjmUL%2B46AgDiwMKPz3HeMM4dm7XJ5blWOJ5XraPQCIOCXZqwKFZwwmOITTLsz0w0bYJeHemu%2BKbXvy0cJh8XQgCHyfxHxkI%2BHz5AXTxW%2BFdO5I8ZRlBPMUBWNQozVEYZijhUHgcdEZO2rzQ4GSVwoKxMLnvo78GOqUBcxhrMMXJ2RZNClb1lyGlC2Dc%2BGEUxnp2%2BIc2NTdYxojP5xCS1AABeTz%2B2NaUDCENw9QjS2JKac6b%2BGFYIOlkN8hqWfunfiY1sHrbg5ho%2B4cUVYFeeC%2BwaHqqLRMvs3Kaugw1sPTzpAK8ECz3APMkBC7QnmJKRLoPyVgkJeLu5l8cBlRuMpd0WPJrFEO%2FHEPU95lNjYRTqePwkWMebLDPqsptZ%2F%2FQ&X-Amz-Signature=e0c744fc3322d0d2dc2ab4b43c52466e5ddbc0c4eaff7d4150ed52f31759b966&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NHP6B3N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDVrjkM235itQW7ogorF3TUntmpfaCc469GbOMZeI7guQIgAWjxhEjtAYyYwJrOG6X23WUH02iiknrs%2Fiu%2FvDGs1aMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpToCwe1luSAaOYmSrcA9KApFyrvVyKrEok4jE8mADR%2BUMoZtwGY6WrhmiKJ0EQ%2B0xMZTovTaAW9TSaLMNgb29gZxbtKJQfz%2B%2F3w5L0xGzOTO4m4UvTtsr9ZnqGQaELuzmBuGY2eC9OcB77Zn%2FXYZyFHt2803bMi%2BUBZKOXciJktrG2MLQNiCrxgJCN6Tk2Vhb1%2BvqHxdv%2FiuDZ66SfFceYHEfeoYrU06nrGHBxr8TzfOfqmefJNtI2aRVvx8Ho8u2GQIM%2FwzobwX2V1rgGVDVLuQCyVJXOi4stAsZsJ4Nh7GE5ld%2FqAvEflC1DxuQ5ZJU0tKuMpvhkHZXrA1AXuk%2F9axwvISioMhRTB%2FUegFv3H1Lq%2BA0Ng5KkvFFAcRbZWmHtfnCZzMElJPQ%2BfWasbuwSziS2USg4inzvII%2F6YpqehQSQDS943uFb4iTkghzRhm%2FGYDFO1ybBrAFenn%2FTvAWX14EKZ8QP4rvjtevGaskeGQ%2FCGd2%2FRVivhZjmUL%2B46AgDiwMKPz3HeMM4dm7XJ5blWOJ5XraPQCIOCXZqwKFZwwmOITTLsz0w0bYJeHemu%2BKbXvy0cJh8XQgCHyfxHxkI%2BHz5AXTxW%2BFdO5I8ZRlBPMUBWNQozVEYZijhUHgcdEZO2rzQ4GSVwoKxMLnvo78GOqUBcxhrMMXJ2RZNClb1lyGlC2Dc%2BGEUxnp2%2BIc2NTdYxojP5xCS1AABeTz%2B2NaUDCENw9QjS2JKac6b%2BGFYIOlkN8hqWfunfiY1sHrbg5ho%2B4cUVYFeeC%2BwaHqqLRMvs3Kaugw1sPTzpAK8ECz3APMkBC7QnmJKRLoPyVgkJeLu5l8cBlRuMpd0WPJrFEO%2FHEPU95lNjYRTqePwkWMebLDPqsptZ%2F%2FQ&X-Amz-Signature=a86290b33c15190df77ef621be887ef4594efab91339aa1bc06aa82c200a9643&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NHP6B3N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDVrjkM235itQW7ogorF3TUntmpfaCc469GbOMZeI7guQIgAWjxhEjtAYyYwJrOG6X23WUH02iiknrs%2Fiu%2FvDGs1aMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpToCwe1luSAaOYmSrcA9KApFyrvVyKrEok4jE8mADR%2BUMoZtwGY6WrhmiKJ0EQ%2B0xMZTovTaAW9TSaLMNgb29gZxbtKJQfz%2B%2F3w5L0xGzOTO4m4UvTtsr9ZnqGQaELuzmBuGY2eC9OcB77Zn%2FXYZyFHt2803bMi%2BUBZKOXciJktrG2MLQNiCrxgJCN6Tk2Vhb1%2BvqHxdv%2FiuDZ66SfFceYHEfeoYrU06nrGHBxr8TzfOfqmefJNtI2aRVvx8Ho8u2GQIM%2FwzobwX2V1rgGVDVLuQCyVJXOi4stAsZsJ4Nh7GE5ld%2FqAvEflC1DxuQ5ZJU0tKuMpvhkHZXrA1AXuk%2F9axwvISioMhRTB%2FUegFv3H1Lq%2BA0Ng5KkvFFAcRbZWmHtfnCZzMElJPQ%2BfWasbuwSziS2USg4inzvII%2F6YpqehQSQDS943uFb4iTkghzRhm%2FGYDFO1ybBrAFenn%2FTvAWX14EKZ8QP4rvjtevGaskeGQ%2FCGd2%2FRVivhZjmUL%2B46AgDiwMKPz3HeMM4dm7XJ5blWOJ5XraPQCIOCXZqwKFZwwmOITTLsz0w0bYJeHemu%2BKbXvy0cJh8XQgCHyfxHxkI%2BHz5AXTxW%2BFdO5I8ZRlBPMUBWNQozVEYZijhUHgcdEZO2rzQ4GSVwoKxMLnvo78GOqUBcxhrMMXJ2RZNClb1lyGlC2Dc%2BGEUxnp2%2BIc2NTdYxojP5xCS1AABeTz%2B2NaUDCENw9QjS2JKac6b%2BGFYIOlkN8hqWfunfiY1sHrbg5ho%2B4cUVYFeeC%2BwaHqqLRMvs3Kaugw1sPTzpAK8ECz3APMkBC7QnmJKRLoPyVgkJeLu5l8cBlRuMpd0WPJrFEO%2FHEPU95lNjYRTqePwkWMebLDPqsptZ%2F%2FQ&X-Amz-Signature=9cf649021706091a6b1f21484c6f2e91e89590db53956b43e8ab4e877db29331&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NHP6B3N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDVrjkM235itQW7ogorF3TUntmpfaCc469GbOMZeI7guQIgAWjxhEjtAYyYwJrOG6X23WUH02iiknrs%2Fiu%2FvDGs1aMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpToCwe1luSAaOYmSrcA9KApFyrvVyKrEok4jE8mADR%2BUMoZtwGY6WrhmiKJ0EQ%2B0xMZTovTaAW9TSaLMNgb29gZxbtKJQfz%2B%2F3w5L0xGzOTO4m4UvTtsr9ZnqGQaELuzmBuGY2eC9OcB77Zn%2FXYZyFHt2803bMi%2BUBZKOXciJktrG2MLQNiCrxgJCN6Tk2Vhb1%2BvqHxdv%2FiuDZ66SfFceYHEfeoYrU06nrGHBxr8TzfOfqmefJNtI2aRVvx8Ho8u2GQIM%2FwzobwX2V1rgGVDVLuQCyVJXOi4stAsZsJ4Nh7GE5ld%2FqAvEflC1DxuQ5ZJU0tKuMpvhkHZXrA1AXuk%2F9axwvISioMhRTB%2FUegFv3H1Lq%2BA0Ng5KkvFFAcRbZWmHtfnCZzMElJPQ%2BfWasbuwSziS2USg4inzvII%2F6YpqehQSQDS943uFb4iTkghzRhm%2FGYDFO1ybBrAFenn%2FTvAWX14EKZ8QP4rvjtevGaskeGQ%2FCGd2%2FRVivhZjmUL%2B46AgDiwMKPz3HeMM4dm7XJ5blWOJ5XraPQCIOCXZqwKFZwwmOITTLsz0w0bYJeHemu%2BKbXvy0cJh8XQgCHyfxHxkI%2BHz5AXTxW%2BFdO5I8ZRlBPMUBWNQozVEYZijhUHgcdEZO2rzQ4GSVwoKxMLnvo78GOqUBcxhrMMXJ2RZNClb1lyGlC2Dc%2BGEUxnp2%2BIc2NTdYxojP5xCS1AABeTz%2B2NaUDCENw9QjS2JKac6b%2BGFYIOlkN8hqWfunfiY1sHrbg5ho%2B4cUVYFeeC%2BwaHqqLRMvs3Kaugw1sPTzpAK8ECz3APMkBC7QnmJKRLoPyVgkJeLu5l8cBlRuMpd0WPJrFEO%2FHEPU95lNjYRTqePwkWMebLDPqsptZ%2F%2FQ&X-Amz-Signature=b532a8f19c142b33b790443ddfb317783e1905688b683268862a765b2b51c94f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NHP6B3N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDVrjkM235itQW7ogorF3TUntmpfaCc469GbOMZeI7guQIgAWjxhEjtAYyYwJrOG6X23WUH02iiknrs%2Fiu%2FvDGs1aMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpToCwe1luSAaOYmSrcA9KApFyrvVyKrEok4jE8mADR%2BUMoZtwGY6WrhmiKJ0EQ%2B0xMZTovTaAW9TSaLMNgb29gZxbtKJQfz%2B%2F3w5L0xGzOTO4m4UvTtsr9ZnqGQaELuzmBuGY2eC9OcB77Zn%2FXYZyFHt2803bMi%2BUBZKOXciJktrG2MLQNiCrxgJCN6Tk2Vhb1%2BvqHxdv%2FiuDZ66SfFceYHEfeoYrU06nrGHBxr8TzfOfqmefJNtI2aRVvx8Ho8u2GQIM%2FwzobwX2V1rgGVDVLuQCyVJXOi4stAsZsJ4Nh7GE5ld%2FqAvEflC1DxuQ5ZJU0tKuMpvhkHZXrA1AXuk%2F9axwvISioMhRTB%2FUegFv3H1Lq%2BA0Ng5KkvFFAcRbZWmHtfnCZzMElJPQ%2BfWasbuwSziS2USg4inzvII%2F6YpqehQSQDS943uFb4iTkghzRhm%2FGYDFO1ybBrAFenn%2FTvAWX14EKZ8QP4rvjtevGaskeGQ%2FCGd2%2FRVivhZjmUL%2B46AgDiwMKPz3HeMM4dm7XJ5blWOJ5XraPQCIOCXZqwKFZwwmOITTLsz0w0bYJeHemu%2BKbXvy0cJh8XQgCHyfxHxkI%2BHz5AXTxW%2BFdO5I8ZRlBPMUBWNQozVEYZijhUHgcdEZO2rzQ4GSVwoKxMLnvo78GOqUBcxhrMMXJ2RZNClb1lyGlC2Dc%2BGEUxnp2%2BIc2NTdYxojP5xCS1AABeTz%2B2NaUDCENw9QjS2JKac6b%2BGFYIOlkN8hqWfunfiY1sHrbg5ho%2B4cUVYFeeC%2BwaHqqLRMvs3Kaugw1sPTzpAK8ECz3APMkBC7QnmJKRLoPyVgkJeLu5l8cBlRuMpd0WPJrFEO%2FHEPU95lNjYRTqePwkWMebLDPqsptZ%2F%2FQ&X-Amz-Signature=13fa5c5d90bea1870ef6d65b9b5b187bb85252e788752073bda3b175143108ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
