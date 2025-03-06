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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIAFZUK7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSE8ffa9O0pRI5AzAO1r2LXK3eb6fPOdu%2BfjnOFINIQIgGGoUrgW5BPrvwERu0wF7HW9QARBWRZpTPQAg7dbKEfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL5Mdyv4q2j53HEzyircA1MJN6wsfiwPG5wvd7%2FzIq5%2B8m9vvnsdnLno5QBtDuOHN%2BcSTD15pzUoN83V%2B5E1E%2FwhlQXYoMOy9rDGgF3XzlAaE2HLetN5Cseh97tG4DP1uK35byWVhJTvveV%2FAvUeAmuJCNhGVkc52ltsJMtcQtNEBo1NNMQXl6VqKRKBqtrshYzkV8mC5TTIpFQrnsZBbECCFXl8jm62QjL47X3EeSeny%2FRmvvwEgEJU7pMBjjUqrYtrZuQ7Biv2AQfndK9WL92wJLbZEJc2tRByHr3HYGch%2BnkGhk1xYKUO2LewXMHjGZphVMrGWQwM2F2tpEDHOO23Mm8zcwHoUQ9aLMd9%2B1740RJ%2BYyYTSUuU8QaP8i5zcv1U1Oq3cnBq%2BCzIjCqoseoypMNW81le3OcvGut1oAe4DOKw49fqnjcRIIU%2B0n3C6SWBYhBPxpi3GthYf%2BcsFATp%2Fd0u7cR0UrwdGPl4en%2BkAgUf0h8TU5fLljZ7Uv5P24s%2BbD1K7d88rkuM1n7WMjJXFMa39YMNC3v60MahGbXQFnUn7euv87gqyZIb52sVJiXsoV7u%2F%2BbVlxD%2B0LjP64QKnXwkCr9Sw8U0huNzJWASt%2BYYVGsd%2Fc0kZDVXbVmA%2FsT2Q3W52ehoA06qMJ2WpL4GOqUBYLHV88HB0YwaYdG0OdLMBJKT3BbkSaAry62WL9FAF9cVZNBe9v3wVjMpVSz1UFS4VXcXoMPxLcLLp9Uzg07uMckrpVsijMOy%2FnmX3QB86c2ErdxUoN4LOiVzcy7DFpv2AAJZ8UsTW6gBqiSmIMlqLN7nWoH4f8wGpQSXQVA089tQ5Lk%2FO3RmrydFuv7iMUoj1x9bvDAXaC7h2E54YZvpJHwfx5SK&X-Amz-Signature=ffe9bee79f184331d283d272b3b13489dee746262c6eac64bd5270968d27a3d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIAFZUK7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSE8ffa9O0pRI5AzAO1r2LXK3eb6fPOdu%2BfjnOFINIQIgGGoUrgW5BPrvwERu0wF7HW9QARBWRZpTPQAg7dbKEfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL5Mdyv4q2j53HEzyircA1MJN6wsfiwPG5wvd7%2FzIq5%2B8m9vvnsdnLno5QBtDuOHN%2BcSTD15pzUoN83V%2B5E1E%2FwhlQXYoMOy9rDGgF3XzlAaE2HLetN5Cseh97tG4DP1uK35byWVhJTvveV%2FAvUeAmuJCNhGVkc52ltsJMtcQtNEBo1NNMQXl6VqKRKBqtrshYzkV8mC5TTIpFQrnsZBbECCFXl8jm62QjL47X3EeSeny%2FRmvvwEgEJU7pMBjjUqrYtrZuQ7Biv2AQfndK9WL92wJLbZEJc2tRByHr3HYGch%2BnkGhk1xYKUO2LewXMHjGZphVMrGWQwM2F2tpEDHOO23Mm8zcwHoUQ9aLMd9%2B1740RJ%2BYyYTSUuU8QaP8i5zcv1U1Oq3cnBq%2BCzIjCqoseoypMNW81le3OcvGut1oAe4DOKw49fqnjcRIIU%2B0n3C6SWBYhBPxpi3GthYf%2BcsFATp%2Fd0u7cR0UrwdGPl4en%2BkAgUf0h8TU5fLljZ7Uv5P24s%2BbD1K7d88rkuM1n7WMjJXFMa39YMNC3v60MahGbXQFnUn7euv87gqyZIb52sVJiXsoV7u%2F%2BbVlxD%2B0LjP64QKnXwkCr9Sw8U0huNzJWASt%2BYYVGsd%2Fc0kZDVXbVmA%2FsT2Q3W52ehoA06qMJ2WpL4GOqUBYLHV88HB0YwaYdG0OdLMBJKT3BbkSaAry62WL9FAF9cVZNBe9v3wVjMpVSz1UFS4VXcXoMPxLcLLp9Uzg07uMckrpVsijMOy%2FnmX3QB86c2ErdxUoN4LOiVzcy7DFpv2AAJZ8UsTW6gBqiSmIMlqLN7nWoH4f8wGpQSXQVA089tQ5Lk%2FO3RmrydFuv7iMUoj1x9bvDAXaC7h2E54YZvpJHwfx5SK&X-Amz-Signature=6aca84bc63b2da93ea3d1e088a3cc862b3ac9813932abb8485c962bb4dc9a653&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIAFZUK7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSE8ffa9O0pRI5AzAO1r2LXK3eb6fPOdu%2BfjnOFINIQIgGGoUrgW5BPrvwERu0wF7HW9QARBWRZpTPQAg7dbKEfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL5Mdyv4q2j53HEzyircA1MJN6wsfiwPG5wvd7%2FzIq5%2B8m9vvnsdnLno5QBtDuOHN%2BcSTD15pzUoN83V%2B5E1E%2FwhlQXYoMOy9rDGgF3XzlAaE2HLetN5Cseh97tG4DP1uK35byWVhJTvveV%2FAvUeAmuJCNhGVkc52ltsJMtcQtNEBo1NNMQXl6VqKRKBqtrshYzkV8mC5TTIpFQrnsZBbECCFXl8jm62QjL47X3EeSeny%2FRmvvwEgEJU7pMBjjUqrYtrZuQ7Biv2AQfndK9WL92wJLbZEJc2tRByHr3HYGch%2BnkGhk1xYKUO2LewXMHjGZphVMrGWQwM2F2tpEDHOO23Mm8zcwHoUQ9aLMd9%2B1740RJ%2BYyYTSUuU8QaP8i5zcv1U1Oq3cnBq%2BCzIjCqoseoypMNW81le3OcvGut1oAe4DOKw49fqnjcRIIU%2B0n3C6SWBYhBPxpi3GthYf%2BcsFATp%2Fd0u7cR0UrwdGPl4en%2BkAgUf0h8TU5fLljZ7Uv5P24s%2BbD1K7d88rkuM1n7WMjJXFMa39YMNC3v60MahGbXQFnUn7euv87gqyZIb52sVJiXsoV7u%2F%2BbVlxD%2B0LjP64QKnXwkCr9Sw8U0huNzJWASt%2BYYVGsd%2Fc0kZDVXbVmA%2FsT2Q3W52ehoA06qMJ2WpL4GOqUBYLHV88HB0YwaYdG0OdLMBJKT3BbkSaAry62WL9FAF9cVZNBe9v3wVjMpVSz1UFS4VXcXoMPxLcLLp9Uzg07uMckrpVsijMOy%2FnmX3QB86c2ErdxUoN4LOiVzcy7DFpv2AAJZ8UsTW6gBqiSmIMlqLN7nWoH4f8wGpQSXQVA089tQ5Lk%2FO3RmrydFuv7iMUoj1x9bvDAXaC7h2E54YZvpJHwfx5SK&X-Amz-Signature=d752559e8e13a41f9d0a0594b412da91df9e12b5312de879032a33248f764b61&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIAFZUK7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSE8ffa9O0pRI5AzAO1r2LXK3eb6fPOdu%2BfjnOFINIQIgGGoUrgW5BPrvwERu0wF7HW9QARBWRZpTPQAg7dbKEfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL5Mdyv4q2j53HEzyircA1MJN6wsfiwPG5wvd7%2FzIq5%2B8m9vvnsdnLno5QBtDuOHN%2BcSTD15pzUoN83V%2B5E1E%2FwhlQXYoMOy9rDGgF3XzlAaE2HLetN5Cseh97tG4DP1uK35byWVhJTvveV%2FAvUeAmuJCNhGVkc52ltsJMtcQtNEBo1NNMQXl6VqKRKBqtrshYzkV8mC5TTIpFQrnsZBbECCFXl8jm62QjL47X3EeSeny%2FRmvvwEgEJU7pMBjjUqrYtrZuQ7Biv2AQfndK9WL92wJLbZEJc2tRByHr3HYGch%2BnkGhk1xYKUO2LewXMHjGZphVMrGWQwM2F2tpEDHOO23Mm8zcwHoUQ9aLMd9%2B1740RJ%2BYyYTSUuU8QaP8i5zcv1U1Oq3cnBq%2BCzIjCqoseoypMNW81le3OcvGut1oAe4DOKw49fqnjcRIIU%2B0n3C6SWBYhBPxpi3GthYf%2BcsFATp%2Fd0u7cR0UrwdGPl4en%2BkAgUf0h8TU5fLljZ7Uv5P24s%2BbD1K7d88rkuM1n7WMjJXFMa39YMNC3v60MahGbXQFnUn7euv87gqyZIb52sVJiXsoV7u%2F%2BbVlxD%2B0LjP64QKnXwkCr9Sw8U0huNzJWASt%2BYYVGsd%2Fc0kZDVXbVmA%2FsT2Q3W52ehoA06qMJ2WpL4GOqUBYLHV88HB0YwaYdG0OdLMBJKT3BbkSaAry62WL9FAF9cVZNBe9v3wVjMpVSz1UFS4VXcXoMPxLcLLp9Uzg07uMckrpVsijMOy%2FnmX3QB86c2ErdxUoN4LOiVzcy7DFpv2AAJZ8UsTW6gBqiSmIMlqLN7nWoH4f8wGpQSXQVA089tQ5Lk%2FO3RmrydFuv7iMUoj1x9bvDAXaC7h2E54YZvpJHwfx5SK&X-Amz-Signature=862fa5b795e9e6199ff41b8a247a9530f948857031cb00f58b2b72bbf69f8d76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIAFZUK7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSE8ffa9O0pRI5AzAO1r2LXK3eb6fPOdu%2BfjnOFINIQIgGGoUrgW5BPrvwERu0wF7HW9QARBWRZpTPQAg7dbKEfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL5Mdyv4q2j53HEzyircA1MJN6wsfiwPG5wvd7%2FzIq5%2B8m9vvnsdnLno5QBtDuOHN%2BcSTD15pzUoN83V%2B5E1E%2FwhlQXYoMOy9rDGgF3XzlAaE2HLetN5Cseh97tG4DP1uK35byWVhJTvveV%2FAvUeAmuJCNhGVkc52ltsJMtcQtNEBo1NNMQXl6VqKRKBqtrshYzkV8mC5TTIpFQrnsZBbECCFXl8jm62QjL47X3EeSeny%2FRmvvwEgEJU7pMBjjUqrYtrZuQ7Biv2AQfndK9WL92wJLbZEJc2tRByHr3HYGch%2BnkGhk1xYKUO2LewXMHjGZphVMrGWQwM2F2tpEDHOO23Mm8zcwHoUQ9aLMd9%2B1740RJ%2BYyYTSUuU8QaP8i5zcv1U1Oq3cnBq%2BCzIjCqoseoypMNW81le3OcvGut1oAe4DOKw49fqnjcRIIU%2B0n3C6SWBYhBPxpi3GthYf%2BcsFATp%2Fd0u7cR0UrwdGPl4en%2BkAgUf0h8TU5fLljZ7Uv5P24s%2BbD1K7d88rkuM1n7WMjJXFMa39YMNC3v60MahGbXQFnUn7euv87gqyZIb52sVJiXsoV7u%2F%2BbVlxD%2B0LjP64QKnXwkCr9Sw8U0huNzJWASt%2BYYVGsd%2Fc0kZDVXbVmA%2FsT2Q3W52ehoA06qMJ2WpL4GOqUBYLHV88HB0YwaYdG0OdLMBJKT3BbkSaAry62WL9FAF9cVZNBe9v3wVjMpVSz1UFS4VXcXoMPxLcLLp9Uzg07uMckrpVsijMOy%2FnmX3QB86c2ErdxUoN4LOiVzcy7DFpv2AAJZ8UsTW6gBqiSmIMlqLN7nWoH4f8wGpQSXQVA089tQ5Lk%2FO3RmrydFuv7iMUoj1x9bvDAXaC7h2E54YZvpJHwfx5SK&X-Amz-Signature=1af1dbbc623424d59ec869bc8f2b517f403b7c05cbe0f34132dc3991ddee7691&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIAFZUK7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSE8ffa9O0pRI5AzAO1r2LXK3eb6fPOdu%2BfjnOFINIQIgGGoUrgW5BPrvwERu0wF7HW9QARBWRZpTPQAg7dbKEfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL5Mdyv4q2j53HEzyircA1MJN6wsfiwPG5wvd7%2FzIq5%2B8m9vvnsdnLno5QBtDuOHN%2BcSTD15pzUoN83V%2B5E1E%2FwhlQXYoMOy9rDGgF3XzlAaE2HLetN5Cseh97tG4DP1uK35byWVhJTvveV%2FAvUeAmuJCNhGVkc52ltsJMtcQtNEBo1NNMQXl6VqKRKBqtrshYzkV8mC5TTIpFQrnsZBbECCFXl8jm62QjL47X3EeSeny%2FRmvvwEgEJU7pMBjjUqrYtrZuQ7Biv2AQfndK9WL92wJLbZEJc2tRByHr3HYGch%2BnkGhk1xYKUO2LewXMHjGZphVMrGWQwM2F2tpEDHOO23Mm8zcwHoUQ9aLMd9%2B1740RJ%2BYyYTSUuU8QaP8i5zcv1U1Oq3cnBq%2BCzIjCqoseoypMNW81le3OcvGut1oAe4DOKw49fqnjcRIIU%2B0n3C6SWBYhBPxpi3GthYf%2BcsFATp%2Fd0u7cR0UrwdGPl4en%2BkAgUf0h8TU5fLljZ7Uv5P24s%2BbD1K7d88rkuM1n7WMjJXFMa39YMNC3v60MahGbXQFnUn7euv87gqyZIb52sVJiXsoV7u%2F%2BbVlxD%2B0LjP64QKnXwkCr9Sw8U0huNzJWASt%2BYYVGsd%2Fc0kZDVXbVmA%2FsT2Q3W52ehoA06qMJ2WpL4GOqUBYLHV88HB0YwaYdG0OdLMBJKT3BbkSaAry62WL9FAF9cVZNBe9v3wVjMpVSz1UFS4VXcXoMPxLcLLp9Uzg07uMckrpVsijMOy%2FnmX3QB86c2ErdxUoN4LOiVzcy7DFpv2AAJZ8UsTW6gBqiSmIMlqLN7nWoH4f8wGpQSXQVA089tQ5Lk%2FO3RmrydFuv7iMUoj1x9bvDAXaC7h2E54YZvpJHwfx5SK&X-Amz-Signature=a45a814c5198f6dd6bb17c59de22b9571124dd73b325ca686d1c171bb2c8ed52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIAFZUK7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSE8ffa9O0pRI5AzAO1r2LXK3eb6fPOdu%2BfjnOFINIQIgGGoUrgW5BPrvwERu0wF7HW9QARBWRZpTPQAg7dbKEfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL5Mdyv4q2j53HEzyircA1MJN6wsfiwPG5wvd7%2FzIq5%2B8m9vvnsdnLno5QBtDuOHN%2BcSTD15pzUoN83V%2B5E1E%2FwhlQXYoMOy9rDGgF3XzlAaE2HLetN5Cseh97tG4DP1uK35byWVhJTvveV%2FAvUeAmuJCNhGVkc52ltsJMtcQtNEBo1NNMQXl6VqKRKBqtrshYzkV8mC5TTIpFQrnsZBbECCFXl8jm62QjL47X3EeSeny%2FRmvvwEgEJU7pMBjjUqrYtrZuQ7Biv2AQfndK9WL92wJLbZEJc2tRByHr3HYGch%2BnkGhk1xYKUO2LewXMHjGZphVMrGWQwM2F2tpEDHOO23Mm8zcwHoUQ9aLMd9%2B1740RJ%2BYyYTSUuU8QaP8i5zcv1U1Oq3cnBq%2BCzIjCqoseoypMNW81le3OcvGut1oAe4DOKw49fqnjcRIIU%2B0n3C6SWBYhBPxpi3GthYf%2BcsFATp%2Fd0u7cR0UrwdGPl4en%2BkAgUf0h8TU5fLljZ7Uv5P24s%2BbD1K7d88rkuM1n7WMjJXFMa39YMNC3v60MahGbXQFnUn7euv87gqyZIb52sVJiXsoV7u%2F%2BbVlxD%2B0LjP64QKnXwkCr9Sw8U0huNzJWASt%2BYYVGsd%2Fc0kZDVXbVmA%2FsT2Q3W52ehoA06qMJ2WpL4GOqUBYLHV88HB0YwaYdG0OdLMBJKT3BbkSaAry62WL9FAF9cVZNBe9v3wVjMpVSz1UFS4VXcXoMPxLcLLp9Uzg07uMckrpVsijMOy%2FnmX3QB86c2ErdxUoN4LOiVzcy7DFpv2AAJZ8UsTW6gBqiSmIMlqLN7nWoH4f8wGpQSXQVA089tQ5Lk%2FO3RmrydFuv7iMUoj1x9bvDAXaC7h2E54YZvpJHwfx5SK&X-Amz-Signature=eebaac9e1c760fe86d6d9269ca3385825aacabbf6aae21ecf9e708280c03d3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIAFZUK7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSE8ffa9O0pRI5AzAO1r2LXK3eb6fPOdu%2BfjnOFINIQIgGGoUrgW5BPrvwERu0wF7HW9QARBWRZpTPQAg7dbKEfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL5Mdyv4q2j53HEzyircA1MJN6wsfiwPG5wvd7%2FzIq5%2B8m9vvnsdnLno5QBtDuOHN%2BcSTD15pzUoN83V%2B5E1E%2FwhlQXYoMOy9rDGgF3XzlAaE2HLetN5Cseh97tG4DP1uK35byWVhJTvveV%2FAvUeAmuJCNhGVkc52ltsJMtcQtNEBo1NNMQXl6VqKRKBqtrshYzkV8mC5TTIpFQrnsZBbECCFXl8jm62QjL47X3EeSeny%2FRmvvwEgEJU7pMBjjUqrYtrZuQ7Biv2AQfndK9WL92wJLbZEJc2tRByHr3HYGch%2BnkGhk1xYKUO2LewXMHjGZphVMrGWQwM2F2tpEDHOO23Mm8zcwHoUQ9aLMd9%2B1740RJ%2BYyYTSUuU8QaP8i5zcv1U1Oq3cnBq%2BCzIjCqoseoypMNW81le3OcvGut1oAe4DOKw49fqnjcRIIU%2B0n3C6SWBYhBPxpi3GthYf%2BcsFATp%2Fd0u7cR0UrwdGPl4en%2BkAgUf0h8TU5fLljZ7Uv5P24s%2BbD1K7d88rkuM1n7WMjJXFMa39YMNC3v60MahGbXQFnUn7euv87gqyZIb52sVJiXsoV7u%2F%2BbVlxD%2B0LjP64QKnXwkCr9Sw8U0huNzJWASt%2BYYVGsd%2Fc0kZDVXbVmA%2FsT2Q3W52ehoA06qMJ2WpL4GOqUBYLHV88HB0YwaYdG0OdLMBJKT3BbkSaAry62WL9FAF9cVZNBe9v3wVjMpVSz1UFS4VXcXoMPxLcLLp9Uzg07uMckrpVsijMOy%2FnmX3QB86c2ErdxUoN4LOiVzcy7DFpv2AAJZ8UsTW6gBqiSmIMlqLN7nWoH4f8wGpQSXQVA089tQ5Lk%2FO3RmrydFuv7iMUoj1x9bvDAXaC7h2E54YZvpJHwfx5SK&X-Amz-Signature=e643a8ce0a1a1751f6e4ca56885cc12512ebaa0c544c5e5b00b27a9c57afa168&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
