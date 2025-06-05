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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2VB55%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC%2FGhHNxwC4XEfVNVs6flDHrk1aawlJ4sIggko%2BIU8pFQIgSOIx43Op6uKnoPloHah%2BVFyJnEg4YFyGN5%2BGWVQaEtkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBbQgUbM3ty9BPuYXSrcA76CY7ZSPRvLdW%2F%2BfvFU4RrBmsnF9eYVhBZa9S8WXw7gKi1YZaWnn5YH2KL5010j6YF%2BvVPApm7q24E3bykkMWpBMbB2yJo5MGpljV7UZVN1kPEHhO7674bokTHBJzt%2FbX4NXhTApfuKdzEYtR5CUjfJUcA%2BjmWk8TYfpytK%2B1Itksy5geeY11wAtQhGu%2B8AZDYbeOZorulCI0RLwm2TvRwJdL3klGOZ%2FxX5t2aO3JlRNryIyUjFf44jmi9sCyu4Lie%2BkPxvxZl3kUTHqtf0hywETrQVzAHdLqYU30QqR5vBldqfGSgLJbzX7aNfAp092IFX9Yu9grV1buDVgXUb4OSQSI9ndJyjIcVxgz%2BPFrXoAJ%2Flp%2B9f%2FX7%2FFYisgq7p6gGImUpIrRPvTdmpV5LGe5LxPi1MS3YBFuDi8LWYzM9kMiywenC6W%2F32Xi2YHqhQqI3W4q0KPA3Ri1C04APVs1WBPHKyPNRVdNtxMDw%2BM0uSqSgNlI%2BUa6JlZIi3aTwNgD2g5kXLhu64BYjkhuk6b8tiZT7XKu8JZTM3BkcvCk7BHdZOTcni%2BAQOkOZTNaIYbBGKRP0LFFrhEaZkj%2BJ5FeNadva5rgWnrrQISNOTGaPiUDrF05pLSorA8gxXMNqoh8IGOqUBfpPaPZ8AZgQWXtZwSkeQIgloqoFsZkng5GuOTyVPjxqikTqtxB4QX2ITYPqDV%2FxD4GMgKxnKmpV%2FqpUTRayghPNdu6vbT4vw1zLh7s2gg7BPf1%2Bi%2F9oa4KZ2T1QbK41GO7kTFmWgKCxFPZ8ICqfC5FO7jEtanpzBUyFXXRC3K20gUyQ%2B6iu%2FC5iadp3w364q%2BgJMV%2B8YNHyodE6L5neL0LrVh1YW&X-Amz-Signature=a603b1637b42b85df2bad34e56b0fa5ddccdde0718c22849694d16d1ad2815b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2VB55%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC%2FGhHNxwC4XEfVNVs6flDHrk1aawlJ4sIggko%2BIU8pFQIgSOIx43Op6uKnoPloHah%2BVFyJnEg4YFyGN5%2BGWVQaEtkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBbQgUbM3ty9BPuYXSrcA76CY7ZSPRvLdW%2F%2BfvFU4RrBmsnF9eYVhBZa9S8WXw7gKi1YZaWnn5YH2KL5010j6YF%2BvVPApm7q24E3bykkMWpBMbB2yJo5MGpljV7UZVN1kPEHhO7674bokTHBJzt%2FbX4NXhTApfuKdzEYtR5CUjfJUcA%2BjmWk8TYfpytK%2B1Itksy5geeY11wAtQhGu%2B8AZDYbeOZorulCI0RLwm2TvRwJdL3klGOZ%2FxX5t2aO3JlRNryIyUjFf44jmi9sCyu4Lie%2BkPxvxZl3kUTHqtf0hywETrQVzAHdLqYU30QqR5vBldqfGSgLJbzX7aNfAp092IFX9Yu9grV1buDVgXUb4OSQSI9ndJyjIcVxgz%2BPFrXoAJ%2Flp%2B9f%2FX7%2FFYisgq7p6gGImUpIrRPvTdmpV5LGe5LxPi1MS3YBFuDi8LWYzM9kMiywenC6W%2F32Xi2YHqhQqI3W4q0KPA3Ri1C04APVs1WBPHKyPNRVdNtxMDw%2BM0uSqSgNlI%2BUa6JlZIi3aTwNgD2g5kXLhu64BYjkhuk6b8tiZT7XKu8JZTM3BkcvCk7BHdZOTcni%2BAQOkOZTNaIYbBGKRP0LFFrhEaZkj%2BJ5FeNadva5rgWnrrQISNOTGaPiUDrF05pLSorA8gxXMNqoh8IGOqUBfpPaPZ8AZgQWXtZwSkeQIgloqoFsZkng5GuOTyVPjxqikTqtxB4QX2ITYPqDV%2FxD4GMgKxnKmpV%2FqpUTRayghPNdu6vbT4vw1zLh7s2gg7BPf1%2Bi%2F9oa4KZ2T1QbK41GO7kTFmWgKCxFPZ8ICqfC5FO7jEtanpzBUyFXXRC3K20gUyQ%2B6iu%2FC5iadp3w364q%2BgJMV%2B8YNHyodE6L5neL0LrVh1YW&X-Amz-Signature=0bf9c4d0382eba004a69589ca5905a3774b709c5dd97c9aacece4641f4d5804e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2VB55%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC%2FGhHNxwC4XEfVNVs6flDHrk1aawlJ4sIggko%2BIU8pFQIgSOIx43Op6uKnoPloHah%2BVFyJnEg4YFyGN5%2BGWVQaEtkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBbQgUbM3ty9BPuYXSrcA76CY7ZSPRvLdW%2F%2BfvFU4RrBmsnF9eYVhBZa9S8WXw7gKi1YZaWnn5YH2KL5010j6YF%2BvVPApm7q24E3bykkMWpBMbB2yJo5MGpljV7UZVN1kPEHhO7674bokTHBJzt%2FbX4NXhTApfuKdzEYtR5CUjfJUcA%2BjmWk8TYfpytK%2B1Itksy5geeY11wAtQhGu%2B8AZDYbeOZorulCI0RLwm2TvRwJdL3klGOZ%2FxX5t2aO3JlRNryIyUjFf44jmi9sCyu4Lie%2BkPxvxZl3kUTHqtf0hywETrQVzAHdLqYU30QqR5vBldqfGSgLJbzX7aNfAp092IFX9Yu9grV1buDVgXUb4OSQSI9ndJyjIcVxgz%2BPFrXoAJ%2Flp%2B9f%2FX7%2FFYisgq7p6gGImUpIrRPvTdmpV5LGe5LxPi1MS3YBFuDi8LWYzM9kMiywenC6W%2F32Xi2YHqhQqI3W4q0KPA3Ri1C04APVs1WBPHKyPNRVdNtxMDw%2BM0uSqSgNlI%2BUa6JlZIi3aTwNgD2g5kXLhu64BYjkhuk6b8tiZT7XKu8JZTM3BkcvCk7BHdZOTcni%2BAQOkOZTNaIYbBGKRP0LFFrhEaZkj%2BJ5FeNadva5rgWnrrQISNOTGaPiUDrF05pLSorA8gxXMNqoh8IGOqUBfpPaPZ8AZgQWXtZwSkeQIgloqoFsZkng5GuOTyVPjxqikTqtxB4QX2ITYPqDV%2FxD4GMgKxnKmpV%2FqpUTRayghPNdu6vbT4vw1zLh7s2gg7BPf1%2Bi%2F9oa4KZ2T1QbK41GO7kTFmWgKCxFPZ8ICqfC5FO7jEtanpzBUyFXXRC3K20gUyQ%2B6iu%2FC5iadp3w364q%2BgJMV%2B8YNHyodE6L5neL0LrVh1YW&X-Amz-Signature=0bb60b5ab434ead7071cac55922d9ff79a06f81875fd580af4ff63b7b6949e66&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2VB55%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC%2FGhHNxwC4XEfVNVs6flDHrk1aawlJ4sIggko%2BIU8pFQIgSOIx43Op6uKnoPloHah%2BVFyJnEg4YFyGN5%2BGWVQaEtkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBbQgUbM3ty9BPuYXSrcA76CY7ZSPRvLdW%2F%2BfvFU4RrBmsnF9eYVhBZa9S8WXw7gKi1YZaWnn5YH2KL5010j6YF%2BvVPApm7q24E3bykkMWpBMbB2yJo5MGpljV7UZVN1kPEHhO7674bokTHBJzt%2FbX4NXhTApfuKdzEYtR5CUjfJUcA%2BjmWk8TYfpytK%2B1Itksy5geeY11wAtQhGu%2B8AZDYbeOZorulCI0RLwm2TvRwJdL3klGOZ%2FxX5t2aO3JlRNryIyUjFf44jmi9sCyu4Lie%2BkPxvxZl3kUTHqtf0hywETrQVzAHdLqYU30QqR5vBldqfGSgLJbzX7aNfAp092IFX9Yu9grV1buDVgXUb4OSQSI9ndJyjIcVxgz%2BPFrXoAJ%2Flp%2B9f%2FX7%2FFYisgq7p6gGImUpIrRPvTdmpV5LGe5LxPi1MS3YBFuDi8LWYzM9kMiywenC6W%2F32Xi2YHqhQqI3W4q0KPA3Ri1C04APVs1WBPHKyPNRVdNtxMDw%2BM0uSqSgNlI%2BUa6JlZIi3aTwNgD2g5kXLhu64BYjkhuk6b8tiZT7XKu8JZTM3BkcvCk7BHdZOTcni%2BAQOkOZTNaIYbBGKRP0LFFrhEaZkj%2BJ5FeNadva5rgWnrrQISNOTGaPiUDrF05pLSorA8gxXMNqoh8IGOqUBfpPaPZ8AZgQWXtZwSkeQIgloqoFsZkng5GuOTyVPjxqikTqtxB4QX2ITYPqDV%2FxD4GMgKxnKmpV%2FqpUTRayghPNdu6vbT4vw1zLh7s2gg7BPf1%2Bi%2F9oa4KZ2T1QbK41GO7kTFmWgKCxFPZ8ICqfC5FO7jEtanpzBUyFXXRC3K20gUyQ%2B6iu%2FC5iadp3w364q%2BgJMV%2B8YNHyodE6L5neL0LrVh1YW&X-Amz-Signature=ce3d9319265a194cba56bca07fcd3bb3a753dc1e34c31d3fc0bdbd43b625da43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2VB55%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC%2FGhHNxwC4XEfVNVs6flDHrk1aawlJ4sIggko%2BIU8pFQIgSOIx43Op6uKnoPloHah%2BVFyJnEg4YFyGN5%2BGWVQaEtkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBbQgUbM3ty9BPuYXSrcA76CY7ZSPRvLdW%2F%2BfvFU4RrBmsnF9eYVhBZa9S8WXw7gKi1YZaWnn5YH2KL5010j6YF%2BvVPApm7q24E3bykkMWpBMbB2yJo5MGpljV7UZVN1kPEHhO7674bokTHBJzt%2FbX4NXhTApfuKdzEYtR5CUjfJUcA%2BjmWk8TYfpytK%2B1Itksy5geeY11wAtQhGu%2B8AZDYbeOZorulCI0RLwm2TvRwJdL3klGOZ%2FxX5t2aO3JlRNryIyUjFf44jmi9sCyu4Lie%2BkPxvxZl3kUTHqtf0hywETrQVzAHdLqYU30QqR5vBldqfGSgLJbzX7aNfAp092IFX9Yu9grV1buDVgXUb4OSQSI9ndJyjIcVxgz%2BPFrXoAJ%2Flp%2B9f%2FX7%2FFYisgq7p6gGImUpIrRPvTdmpV5LGe5LxPi1MS3YBFuDi8LWYzM9kMiywenC6W%2F32Xi2YHqhQqI3W4q0KPA3Ri1C04APVs1WBPHKyPNRVdNtxMDw%2BM0uSqSgNlI%2BUa6JlZIi3aTwNgD2g5kXLhu64BYjkhuk6b8tiZT7XKu8JZTM3BkcvCk7BHdZOTcni%2BAQOkOZTNaIYbBGKRP0LFFrhEaZkj%2BJ5FeNadva5rgWnrrQISNOTGaPiUDrF05pLSorA8gxXMNqoh8IGOqUBfpPaPZ8AZgQWXtZwSkeQIgloqoFsZkng5GuOTyVPjxqikTqtxB4QX2ITYPqDV%2FxD4GMgKxnKmpV%2FqpUTRayghPNdu6vbT4vw1zLh7s2gg7BPf1%2Bi%2F9oa4KZ2T1QbK41GO7kTFmWgKCxFPZ8ICqfC5FO7jEtanpzBUyFXXRC3K20gUyQ%2B6iu%2FC5iadp3w364q%2BgJMV%2B8YNHyodE6L5neL0LrVh1YW&X-Amz-Signature=a082de40e5b3fda8b21a1184ce0944c5ac06e1ad19b191f60dedf67cdd696dff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2VB55%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC%2FGhHNxwC4XEfVNVs6flDHrk1aawlJ4sIggko%2BIU8pFQIgSOIx43Op6uKnoPloHah%2BVFyJnEg4YFyGN5%2BGWVQaEtkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBbQgUbM3ty9BPuYXSrcA76CY7ZSPRvLdW%2F%2BfvFU4RrBmsnF9eYVhBZa9S8WXw7gKi1YZaWnn5YH2KL5010j6YF%2BvVPApm7q24E3bykkMWpBMbB2yJo5MGpljV7UZVN1kPEHhO7674bokTHBJzt%2FbX4NXhTApfuKdzEYtR5CUjfJUcA%2BjmWk8TYfpytK%2B1Itksy5geeY11wAtQhGu%2B8AZDYbeOZorulCI0RLwm2TvRwJdL3klGOZ%2FxX5t2aO3JlRNryIyUjFf44jmi9sCyu4Lie%2BkPxvxZl3kUTHqtf0hywETrQVzAHdLqYU30QqR5vBldqfGSgLJbzX7aNfAp092IFX9Yu9grV1buDVgXUb4OSQSI9ndJyjIcVxgz%2BPFrXoAJ%2Flp%2B9f%2FX7%2FFYisgq7p6gGImUpIrRPvTdmpV5LGe5LxPi1MS3YBFuDi8LWYzM9kMiywenC6W%2F32Xi2YHqhQqI3W4q0KPA3Ri1C04APVs1WBPHKyPNRVdNtxMDw%2BM0uSqSgNlI%2BUa6JlZIi3aTwNgD2g5kXLhu64BYjkhuk6b8tiZT7XKu8JZTM3BkcvCk7BHdZOTcni%2BAQOkOZTNaIYbBGKRP0LFFrhEaZkj%2BJ5FeNadva5rgWnrrQISNOTGaPiUDrF05pLSorA8gxXMNqoh8IGOqUBfpPaPZ8AZgQWXtZwSkeQIgloqoFsZkng5GuOTyVPjxqikTqtxB4QX2ITYPqDV%2FxD4GMgKxnKmpV%2FqpUTRayghPNdu6vbT4vw1zLh7s2gg7BPf1%2Bi%2F9oa4KZ2T1QbK41GO7kTFmWgKCxFPZ8ICqfC5FO7jEtanpzBUyFXXRC3K20gUyQ%2B6iu%2FC5iadp3w364q%2BgJMV%2B8YNHyodE6L5neL0LrVh1YW&X-Amz-Signature=3f4f783cd7a48f3e2514c1d5bca6ce82a8b9e51c8cbeca2de27e891cbc913ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2VB55%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC%2FGhHNxwC4XEfVNVs6flDHrk1aawlJ4sIggko%2BIU8pFQIgSOIx43Op6uKnoPloHah%2BVFyJnEg4YFyGN5%2BGWVQaEtkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBbQgUbM3ty9BPuYXSrcA76CY7ZSPRvLdW%2F%2BfvFU4RrBmsnF9eYVhBZa9S8WXw7gKi1YZaWnn5YH2KL5010j6YF%2BvVPApm7q24E3bykkMWpBMbB2yJo5MGpljV7UZVN1kPEHhO7674bokTHBJzt%2FbX4NXhTApfuKdzEYtR5CUjfJUcA%2BjmWk8TYfpytK%2B1Itksy5geeY11wAtQhGu%2B8AZDYbeOZorulCI0RLwm2TvRwJdL3klGOZ%2FxX5t2aO3JlRNryIyUjFf44jmi9sCyu4Lie%2BkPxvxZl3kUTHqtf0hywETrQVzAHdLqYU30QqR5vBldqfGSgLJbzX7aNfAp092IFX9Yu9grV1buDVgXUb4OSQSI9ndJyjIcVxgz%2BPFrXoAJ%2Flp%2B9f%2FX7%2FFYisgq7p6gGImUpIrRPvTdmpV5LGe5LxPi1MS3YBFuDi8LWYzM9kMiywenC6W%2F32Xi2YHqhQqI3W4q0KPA3Ri1C04APVs1WBPHKyPNRVdNtxMDw%2BM0uSqSgNlI%2BUa6JlZIi3aTwNgD2g5kXLhu64BYjkhuk6b8tiZT7XKu8JZTM3BkcvCk7BHdZOTcni%2BAQOkOZTNaIYbBGKRP0LFFrhEaZkj%2BJ5FeNadva5rgWnrrQISNOTGaPiUDrF05pLSorA8gxXMNqoh8IGOqUBfpPaPZ8AZgQWXtZwSkeQIgloqoFsZkng5GuOTyVPjxqikTqtxB4QX2ITYPqDV%2FxD4GMgKxnKmpV%2FqpUTRayghPNdu6vbT4vw1zLh7s2gg7BPf1%2Bi%2F9oa4KZ2T1QbK41GO7kTFmWgKCxFPZ8ICqfC5FO7jEtanpzBUyFXXRC3K20gUyQ%2B6iu%2FC5iadp3w364q%2BgJMV%2B8YNHyodE6L5neL0LrVh1YW&X-Amz-Signature=65cdf04d0257c3c817e7ffe0b5bffea2c10c32ce5ae52948182e7e696698ae9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2VB55%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC%2FGhHNxwC4XEfVNVs6flDHrk1aawlJ4sIggko%2BIU8pFQIgSOIx43Op6uKnoPloHah%2BVFyJnEg4YFyGN5%2BGWVQaEtkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBbQgUbM3ty9BPuYXSrcA76CY7ZSPRvLdW%2F%2BfvFU4RrBmsnF9eYVhBZa9S8WXw7gKi1YZaWnn5YH2KL5010j6YF%2BvVPApm7q24E3bykkMWpBMbB2yJo5MGpljV7UZVN1kPEHhO7674bokTHBJzt%2FbX4NXhTApfuKdzEYtR5CUjfJUcA%2BjmWk8TYfpytK%2B1Itksy5geeY11wAtQhGu%2B8AZDYbeOZorulCI0RLwm2TvRwJdL3klGOZ%2FxX5t2aO3JlRNryIyUjFf44jmi9sCyu4Lie%2BkPxvxZl3kUTHqtf0hywETrQVzAHdLqYU30QqR5vBldqfGSgLJbzX7aNfAp092IFX9Yu9grV1buDVgXUb4OSQSI9ndJyjIcVxgz%2BPFrXoAJ%2Flp%2B9f%2FX7%2FFYisgq7p6gGImUpIrRPvTdmpV5LGe5LxPi1MS3YBFuDi8LWYzM9kMiywenC6W%2F32Xi2YHqhQqI3W4q0KPA3Ri1C04APVs1WBPHKyPNRVdNtxMDw%2BM0uSqSgNlI%2BUa6JlZIi3aTwNgD2g5kXLhu64BYjkhuk6b8tiZT7XKu8JZTM3BkcvCk7BHdZOTcni%2BAQOkOZTNaIYbBGKRP0LFFrhEaZkj%2BJ5FeNadva5rgWnrrQISNOTGaPiUDrF05pLSorA8gxXMNqoh8IGOqUBfpPaPZ8AZgQWXtZwSkeQIgloqoFsZkng5GuOTyVPjxqikTqtxB4QX2ITYPqDV%2FxD4GMgKxnKmpV%2FqpUTRayghPNdu6vbT4vw1zLh7s2gg7BPf1%2Bi%2F9oa4KZ2T1QbK41GO7kTFmWgKCxFPZ8ICqfC5FO7jEtanpzBUyFXXRC3K20gUyQ%2B6iu%2FC5iadp3w364q%2BgJMV%2B8YNHyodE6L5neL0LrVh1YW&X-Amz-Signature=0c9da28b3c2e06e22635a5309b39f4bc21c0619a12e0bea58a7f770b7b4da8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
