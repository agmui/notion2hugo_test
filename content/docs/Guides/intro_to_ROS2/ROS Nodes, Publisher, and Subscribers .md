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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIB2LEU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiOWYS%2F%2Bq1UdR%2BDlWvPGsWylMXf64hIvhtzN5b1yuTgIgfOyJvbFhfRqSqFJXfe3tqs0LdPursOHDkabmdJSPQ8gqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD8sCUwiJYpQvyq1ircAxzhjUOqGW58cs6bQ1BmNoUuqGJh1ELNTjP3mR9uGk82L89JE7XdBdrKMlaKsxrTc4K3kjxgpoBapZ0BDUeTrURLhkNeh8ULx%2BlbE%2Bdph4HlZ8ZZp0qOmcDGGEb%2FTB68mK3vtZHy9zCh0bQMIY6LWEaqo2o%2FTbgBrcZiZi5C9dh5mHwiLnt9gfTlxw%2B71BP%2FNxA2ljFnWE4jNu%2FpN5iLX93p%2FAYO45f33CU7aEnltr48pl9F9MXtEIcdhw8wKyvSB8kVc%2BpAlOIjtTgRVfUA02N928YRtx4JmintnTwmdZwbVkbXYZYou3pp%2BHjEloVtKI0ksq8JuEluhkr2N4oY7fsqnDiXb8VDKX9XnfmtVqkTHQ8zVEOkHA%2B0Ap7CXNTKrqjDYivw%2BzkoGjBoLOPZXG%2FajwO4t6ojCGB1Avh0MrnVFUoDoVQA2Xppj9Ywe%2F%2BYhKDp5eewOow2zhdXb5e2Nt4A%2FL1SCtE%2B1mKGYtr%2FwhZUj0JMVl569rp2t3w0%2FuKUXZ2tlrH2h4MUyaD3TXLMgaJo8B%2FuPK87Gq4ypETne%2FEn%2F%2BCWxAyIb7e8zr57Z%2B3ajvLVEXTwmsWhFzf2L0fl%2BBvo%2BfktTqboWWBLdbxLNELqELyhrwGPIBNAhjVDMLqWlb4GOqUBE9mRke1ViHeNXj4Rg8ncUFFmD2o1YXK4tC8ZgHN06ED9gfGUKLv174%2ByL8gqwMMdG3eE6pgZ%2Ffzt4v%2B8XtpWVajMDEi45hhhoZZq57wnDCClh2u%2BCKIOhobssJiTDjBgzG34MmBt9s5ULyCeqOCfhOVzq2LNOAlw20Q%2Fo3WEpjupSLDSAQDxaORejQnsNqtBZvpBYexQjTZjE72mcn0COCTUrI1m&X-Amz-Signature=2f65032ebdfde8b3b587494305b08f2a7f27c4605b3108c188b42b78527e5afa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIB2LEU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiOWYS%2F%2Bq1UdR%2BDlWvPGsWylMXf64hIvhtzN5b1yuTgIgfOyJvbFhfRqSqFJXfe3tqs0LdPursOHDkabmdJSPQ8gqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD8sCUwiJYpQvyq1ircAxzhjUOqGW58cs6bQ1BmNoUuqGJh1ELNTjP3mR9uGk82L89JE7XdBdrKMlaKsxrTc4K3kjxgpoBapZ0BDUeTrURLhkNeh8ULx%2BlbE%2Bdph4HlZ8ZZp0qOmcDGGEb%2FTB68mK3vtZHy9zCh0bQMIY6LWEaqo2o%2FTbgBrcZiZi5C9dh5mHwiLnt9gfTlxw%2B71BP%2FNxA2ljFnWE4jNu%2FpN5iLX93p%2FAYO45f33CU7aEnltr48pl9F9MXtEIcdhw8wKyvSB8kVc%2BpAlOIjtTgRVfUA02N928YRtx4JmintnTwmdZwbVkbXYZYou3pp%2BHjEloVtKI0ksq8JuEluhkr2N4oY7fsqnDiXb8VDKX9XnfmtVqkTHQ8zVEOkHA%2B0Ap7CXNTKrqjDYivw%2BzkoGjBoLOPZXG%2FajwO4t6ojCGB1Avh0MrnVFUoDoVQA2Xppj9Ywe%2F%2BYhKDp5eewOow2zhdXb5e2Nt4A%2FL1SCtE%2B1mKGYtr%2FwhZUj0JMVl569rp2t3w0%2FuKUXZ2tlrH2h4MUyaD3TXLMgaJo8B%2FuPK87Gq4ypETne%2FEn%2F%2BCWxAyIb7e8zr57Z%2B3ajvLVEXTwmsWhFzf2L0fl%2BBvo%2BfktTqboWWBLdbxLNELqELyhrwGPIBNAhjVDMLqWlb4GOqUBE9mRke1ViHeNXj4Rg8ncUFFmD2o1YXK4tC8ZgHN06ED9gfGUKLv174%2ByL8gqwMMdG3eE6pgZ%2Ffzt4v%2B8XtpWVajMDEi45hhhoZZq57wnDCClh2u%2BCKIOhobssJiTDjBgzG34MmBt9s5ULyCeqOCfhOVzq2LNOAlw20Q%2Fo3WEpjupSLDSAQDxaORejQnsNqtBZvpBYexQjTZjE72mcn0COCTUrI1m&X-Amz-Signature=aaf716f71212b2a4fb1338c31c0a5542ec8cbf1df234b5c5ea2046eaa4c6c1e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIB2LEU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiOWYS%2F%2Bq1UdR%2BDlWvPGsWylMXf64hIvhtzN5b1yuTgIgfOyJvbFhfRqSqFJXfe3tqs0LdPursOHDkabmdJSPQ8gqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD8sCUwiJYpQvyq1ircAxzhjUOqGW58cs6bQ1BmNoUuqGJh1ELNTjP3mR9uGk82L89JE7XdBdrKMlaKsxrTc4K3kjxgpoBapZ0BDUeTrURLhkNeh8ULx%2BlbE%2Bdph4HlZ8ZZp0qOmcDGGEb%2FTB68mK3vtZHy9zCh0bQMIY6LWEaqo2o%2FTbgBrcZiZi5C9dh5mHwiLnt9gfTlxw%2B71BP%2FNxA2ljFnWE4jNu%2FpN5iLX93p%2FAYO45f33CU7aEnltr48pl9F9MXtEIcdhw8wKyvSB8kVc%2BpAlOIjtTgRVfUA02N928YRtx4JmintnTwmdZwbVkbXYZYou3pp%2BHjEloVtKI0ksq8JuEluhkr2N4oY7fsqnDiXb8VDKX9XnfmtVqkTHQ8zVEOkHA%2B0Ap7CXNTKrqjDYivw%2BzkoGjBoLOPZXG%2FajwO4t6ojCGB1Avh0MrnVFUoDoVQA2Xppj9Ywe%2F%2BYhKDp5eewOow2zhdXb5e2Nt4A%2FL1SCtE%2B1mKGYtr%2FwhZUj0JMVl569rp2t3w0%2FuKUXZ2tlrH2h4MUyaD3TXLMgaJo8B%2FuPK87Gq4ypETne%2FEn%2F%2BCWxAyIb7e8zr57Z%2B3ajvLVEXTwmsWhFzf2L0fl%2BBvo%2BfktTqboWWBLdbxLNELqELyhrwGPIBNAhjVDMLqWlb4GOqUBE9mRke1ViHeNXj4Rg8ncUFFmD2o1YXK4tC8ZgHN06ED9gfGUKLv174%2ByL8gqwMMdG3eE6pgZ%2Ffzt4v%2B8XtpWVajMDEi45hhhoZZq57wnDCClh2u%2BCKIOhobssJiTDjBgzG34MmBt9s5ULyCeqOCfhOVzq2LNOAlw20Q%2Fo3WEpjupSLDSAQDxaORejQnsNqtBZvpBYexQjTZjE72mcn0COCTUrI1m&X-Amz-Signature=f39250fd4bdb16d5e4735447276488042496cebe0374e700a4f06b248aa0a62a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIB2LEU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiOWYS%2F%2Bq1UdR%2BDlWvPGsWylMXf64hIvhtzN5b1yuTgIgfOyJvbFhfRqSqFJXfe3tqs0LdPursOHDkabmdJSPQ8gqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD8sCUwiJYpQvyq1ircAxzhjUOqGW58cs6bQ1BmNoUuqGJh1ELNTjP3mR9uGk82L89JE7XdBdrKMlaKsxrTc4K3kjxgpoBapZ0BDUeTrURLhkNeh8ULx%2BlbE%2Bdph4HlZ8ZZp0qOmcDGGEb%2FTB68mK3vtZHy9zCh0bQMIY6LWEaqo2o%2FTbgBrcZiZi5C9dh5mHwiLnt9gfTlxw%2B71BP%2FNxA2ljFnWE4jNu%2FpN5iLX93p%2FAYO45f33CU7aEnltr48pl9F9MXtEIcdhw8wKyvSB8kVc%2BpAlOIjtTgRVfUA02N928YRtx4JmintnTwmdZwbVkbXYZYou3pp%2BHjEloVtKI0ksq8JuEluhkr2N4oY7fsqnDiXb8VDKX9XnfmtVqkTHQ8zVEOkHA%2B0Ap7CXNTKrqjDYivw%2BzkoGjBoLOPZXG%2FajwO4t6ojCGB1Avh0MrnVFUoDoVQA2Xppj9Ywe%2F%2BYhKDp5eewOow2zhdXb5e2Nt4A%2FL1SCtE%2B1mKGYtr%2FwhZUj0JMVl569rp2t3w0%2FuKUXZ2tlrH2h4MUyaD3TXLMgaJo8B%2FuPK87Gq4ypETne%2FEn%2F%2BCWxAyIb7e8zr57Z%2B3ajvLVEXTwmsWhFzf2L0fl%2BBvo%2BfktTqboWWBLdbxLNELqELyhrwGPIBNAhjVDMLqWlb4GOqUBE9mRke1ViHeNXj4Rg8ncUFFmD2o1YXK4tC8ZgHN06ED9gfGUKLv174%2ByL8gqwMMdG3eE6pgZ%2Ffzt4v%2B8XtpWVajMDEi45hhhoZZq57wnDCClh2u%2BCKIOhobssJiTDjBgzG34MmBt9s5ULyCeqOCfhOVzq2LNOAlw20Q%2Fo3WEpjupSLDSAQDxaORejQnsNqtBZvpBYexQjTZjE72mcn0COCTUrI1m&X-Amz-Signature=24bc79ffcaf3df14430e89ab23db5da273ff628cb2c81795d52f3bd3889ba40e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIB2LEU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiOWYS%2F%2Bq1UdR%2BDlWvPGsWylMXf64hIvhtzN5b1yuTgIgfOyJvbFhfRqSqFJXfe3tqs0LdPursOHDkabmdJSPQ8gqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD8sCUwiJYpQvyq1ircAxzhjUOqGW58cs6bQ1BmNoUuqGJh1ELNTjP3mR9uGk82L89JE7XdBdrKMlaKsxrTc4K3kjxgpoBapZ0BDUeTrURLhkNeh8ULx%2BlbE%2Bdph4HlZ8ZZp0qOmcDGGEb%2FTB68mK3vtZHy9zCh0bQMIY6LWEaqo2o%2FTbgBrcZiZi5C9dh5mHwiLnt9gfTlxw%2B71BP%2FNxA2ljFnWE4jNu%2FpN5iLX93p%2FAYO45f33CU7aEnltr48pl9F9MXtEIcdhw8wKyvSB8kVc%2BpAlOIjtTgRVfUA02N928YRtx4JmintnTwmdZwbVkbXYZYou3pp%2BHjEloVtKI0ksq8JuEluhkr2N4oY7fsqnDiXb8VDKX9XnfmtVqkTHQ8zVEOkHA%2B0Ap7CXNTKrqjDYivw%2BzkoGjBoLOPZXG%2FajwO4t6ojCGB1Avh0MrnVFUoDoVQA2Xppj9Ywe%2F%2BYhKDp5eewOow2zhdXb5e2Nt4A%2FL1SCtE%2B1mKGYtr%2FwhZUj0JMVl569rp2t3w0%2FuKUXZ2tlrH2h4MUyaD3TXLMgaJo8B%2FuPK87Gq4ypETne%2FEn%2F%2BCWxAyIb7e8zr57Z%2B3ajvLVEXTwmsWhFzf2L0fl%2BBvo%2BfktTqboWWBLdbxLNELqELyhrwGPIBNAhjVDMLqWlb4GOqUBE9mRke1ViHeNXj4Rg8ncUFFmD2o1YXK4tC8ZgHN06ED9gfGUKLv174%2ByL8gqwMMdG3eE6pgZ%2Ffzt4v%2B8XtpWVajMDEi45hhhoZZq57wnDCClh2u%2BCKIOhobssJiTDjBgzG34MmBt9s5ULyCeqOCfhOVzq2LNOAlw20Q%2Fo3WEpjupSLDSAQDxaORejQnsNqtBZvpBYexQjTZjE72mcn0COCTUrI1m&X-Amz-Signature=0d1630b9ce347ee11b2ad8f9ade2949301c5311a9b58b4dc80d7d3cf60c3cfa1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIB2LEU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiOWYS%2F%2Bq1UdR%2BDlWvPGsWylMXf64hIvhtzN5b1yuTgIgfOyJvbFhfRqSqFJXfe3tqs0LdPursOHDkabmdJSPQ8gqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD8sCUwiJYpQvyq1ircAxzhjUOqGW58cs6bQ1BmNoUuqGJh1ELNTjP3mR9uGk82L89JE7XdBdrKMlaKsxrTc4K3kjxgpoBapZ0BDUeTrURLhkNeh8ULx%2BlbE%2Bdph4HlZ8ZZp0qOmcDGGEb%2FTB68mK3vtZHy9zCh0bQMIY6LWEaqo2o%2FTbgBrcZiZi5C9dh5mHwiLnt9gfTlxw%2B71BP%2FNxA2ljFnWE4jNu%2FpN5iLX93p%2FAYO45f33CU7aEnltr48pl9F9MXtEIcdhw8wKyvSB8kVc%2BpAlOIjtTgRVfUA02N928YRtx4JmintnTwmdZwbVkbXYZYou3pp%2BHjEloVtKI0ksq8JuEluhkr2N4oY7fsqnDiXb8VDKX9XnfmtVqkTHQ8zVEOkHA%2B0Ap7CXNTKrqjDYivw%2BzkoGjBoLOPZXG%2FajwO4t6ojCGB1Avh0MrnVFUoDoVQA2Xppj9Ywe%2F%2BYhKDp5eewOow2zhdXb5e2Nt4A%2FL1SCtE%2B1mKGYtr%2FwhZUj0JMVl569rp2t3w0%2FuKUXZ2tlrH2h4MUyaD3TXLMgaJo8B%2FuPK87Gq4ypETne%2FEn%2F%2BCWxAyIb7e8zr57Z%2B3ajvLVEXTwmsWhFzf2L0fl%2BBvo%2BfktTqboWWBLdbxLNELqELyhrwGPIBNAhjVDMLqWlb4GOqUBE9mRke1ViHeNXj4Rg8ncUFFmD2o1YXK4tC8ZgHN06ED9gfGUKLv174%2ByL8gqwMMdG3eE6pgZ%2Ffzt4v%2B8XtpWVajMDEi45hhhoZZq57wnDCClh2u%2BCKIOhobssJiTDjBgzG34MmBt9s5ULyCeqOCfhOVzq2LNOAlw20Q%2Fo3WEpjupSLDSAQDxaORejQnsNqtBZvpBYexQjTZjE72mcn0COCTUrI1m&X-Amz-Signature=14c62e0853d132c27eb708092b953c845f9b073e88857cd428467d3e8e667b33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIB2LEU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiOWYS%2F%2Bq1UdR%2BDlWvPGsWylMXf64hIvhtzN5b1yuTgIgfOyJvbFhfRqSqFJXfe3tqs0LdPursOHDkabmdJSPQ8gqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD8sCUwiJYpQvyq1ircAxzhjUOqGW58cs6bQ1BmNoUuqGJh1ELNTjP3mR9uGk82L89JE7XdBdrKMlaKsxrTc4K3kjxgpoBapZ0BDUeTrURLhkNeh8ULx%2BlbE%2Bdph4HlZ8ZZp0qOmcDGGEb%2FTB68mK3vtZHy9zCh0bQMIY6LWEaqo2o%2FTbgBrcZiZi5C9dh5mHwiLnt9gfTlxw%2B71BP%2FNxA2ljFnWE4jNu%2FpN5iLX93p%2FAYO45f33CU7aEnltr48pl9F9MXtEIcdhw8wKyvSB8kVc%2BpAlOIjtTgRVfUA02N928YRtx4JmintnTwmdZwbVkbXYZYou3pp%2BHjEloVtKI0ksq8JuEluhkr2N4oY7fsqnDiXb8VDKX9XnfmtVqkTHQ8zVEOkHA%2B0Ap7CXNTKrqjDYivw%2BzkoGjBoLOPZXG%2FajwO4t6ojCGB1Avh0MrnVFUoDoVQA2Xppj9Ywe%2F%2BYhKDp5eewOow2zhdXb5e2Nt4A%2FL1SCtE%2B1mKGYtr%2FwhZUj0JMVl569rp2t3w0%2FuKUXZ2tlrH2h4MUyaD3TXLMgaJo8B%2FuPK87Gq4ypETne%2FEn%2F%2BCWxAyIb7e8zr57Z%2B3ajvLVEXTwmsWhFzf2L0fl%2BBvo%2BfktTqboWWBLdbxLNELqELyhrwGPIBNAhjVDMLqWlb4GOqUBE9mRke1ViHeNXj4Rg8ncUFFmD2o1YXK4tC8ZgHN06ED9gfGUKLv174%2ByL8gqwMMdG3eE6pgZ%2Ffzt4v%2B8XtpWVajMDEi45hhhoZZq57wnDCClh2u%2BCKIOhobssJiTDjBgzG34MmBt9s5ULyCeqOCfhOVzq2LNOAlw20Q%2Fo3WEpjupSLDSAQDxaORejQnsNqtBZvpBYexQjTZjE72mcn0COCTUrI1m&X-Amz-Signature=61b937ffbeb031b26af17906821eda33c8650291fc88e641073ab068e21f9ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIB2LEU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiOWYS%2F%2Bq1UdR%2BDlWvPGsWylMXf64hIvhtzN5b1yuTgIgfOyJvbFhfRqSqFJXfe3tqs0LdPursOHDkabmdJSPQ8gqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD8sCUwiJYpQvyq1ircAxzhjUOqGW58cs6bQ1BmNoUuqGJh1ELNTjP3mR9uGk82L89JE7XdBdrKMlaKsxrTc4K3kjxgpoBapZ0BDUeTrURLhkNeh8ULx%2BlbE%2Bdph4HlZ8ZZp0qOmcDGGEb%2FTB68mK3vtZHy9zCh0bQMIY6LWEaqo2o%2FTbgBrcZiZi5C9dh5mHwiLnt9gfTlxw%2B71BP%2FNxA2ljFnWE4jNu%2FpN5iLX93p%2FAYO45f33CU7aEnltr48pl9F9MXtEIcdhw8wKyvSB8kVc%2BpAlOIjtTgRVfUA02N928YRtx4JmintnTwmdZwbVkbXYZYou3pp%2BHjEloVtKI0ksq8JuEluhkr2N4oY7fsqnDiXb8VDKX9XnfmtVqkTHQ8zVEOkHA%2B0Ap7CXNTKrqjDYivw%2BzkoGjBoLOPZXG%2FajwO4t6ojCGB1Avh0MrnVFUoDoVQA2Xppj9Ywe%2F%2BYhKDp5eewOow2zhdXb5e2Nt4A%2FL1SCtE%2B1mKGYtr%2FwhZUj0JMVl569rp2t3w0%2FuKUXZ2tlrH2h4MUyaD3TXLMgaJo8B%2FuPK87Gq4ypETne%2FEn%2F%2BCWxAyIb7e8zr57Z%2B3ajvLVEXTwmsWhFzf2L0fl%2BBvo%2BfktTqboWWBLdbxLNELqELyhrwGPIBNAhjVDMLqWlb4GOqUBE9mRke1ViHeNXj4Rg8ncUFFmD2o1YXK4tC8ZgHN06ED9gfGUKLv174%2ByL8gqwMMdG3eE6pgZ%2Ffzt4v%2B8XtpWVajMDEi45hhhoZZq57wnDCClh2u%2BCKIOhobssJiTDjBgzG34MmBt9s5ULyCeqOCfhOVzq2LNOAlw20Q%2Fo3WEpjupSLDSAQDxaORejQnsNqtBZvpBYexQjTZjE72mcn0COCTUrI1m&X-Amz-Signature=db2b45a686ac38f2538868009666962fe3f634ef8bd09a50a1b7ef3a1a79331f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
