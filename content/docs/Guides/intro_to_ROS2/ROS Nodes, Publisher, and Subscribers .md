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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF3NCDH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCY20u7lefcW96I5DxZW8Ha6Ku98Zk0Y4oF0S4MfaWrYAIhAId2hFJHWmiL1qkjrxgN6J7ibrcKUvyJ%2FmrG1cTprpAwKv8DCB0QABoMNjM3NDIzMTgzODA1IgzRAEJVYi68SKwP0NUq3AMD5V%2FS0sLglAd9LOvCZcNViGBZKhWyPSfp%2FxBNIxcEtvwdP3NK8a%2BMR5x5d%2F7MfRnhFg1ygzcMMIwXyoeOfdBA0UsvvRCgGEcR9N21hcWQ%2F%2F%2BzasIJCgGmatuyHJk11OLWWv%2Blr4my20VyltEYGASi8LjTJf3n5bVf22E7iYsQWXX8btqgXfjPFR8ZIskvhfCHedMDqWxnmdJfASzSm9dxdo8Y2oA3%2BymEgRi0WLbE7ocz21gRSmy3sTa5JzoGhzEK6eSUYQ5vg4qrmBS614rWgfGtIK7MyzKknrTEKpMOykXfTH5TcL1kNSQa48foJs%2F7MuHDaaEy4oKZciGSnFayqnSV%2Bybi6smT3UYOyNs%2B0gVA1JpVJkUxSN9%2BEiPjHO6DUXGqAjSGPFFnSaHM0HwbCyN%2Btr8xqzVRd0YS9oWEBmWcXdjyW1mAJrBFAwBLiDlCnZqMY6tRPZDo9ZXFitiRMhEEitAcowasP7BhJnrWwCHWJgQcpvAGV3S%2F5%2F4iVNIP3isabXld0tM3yWVNOjBns1C7Gdianpp6KAXaZoaUZb2uIgwcm%2BsZ4k0qgBflG%2FOZpg8TBp7crNwVmrKSfB2j%2FllsFGjPG1MKua7X2GY%2BwXwNnN1Df8ToeJUsnDCX7ebCBjqkAYeJkw%2ByAhM4yeSnCR1B0XY52b1WiAhepYtEOOtT%2F7nL27jVnWQbn%2FPUwncgklZL11hAPgOKFUtNGKAdLPD3EUytQCKCg3oGFG3jjq8bS8CXvmhcy%2BJKMpS4459m5jqXQHEjm6TxvNX2DKLtTQVPAyltgXXQhf6fwjtNYgNbLqpxca6z9MIeCQy776IrECjbA2g3wuf%2FnNzMw1vs3T%2FrUgOaz2vF&X-Amz-Signature=2644e6fdd568c1ad8fd7596f79729067ba5d4873cf20ea3435a6fc0b4028308e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF3NCDH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCY20u7lefcW96I5DxZW8Ha6Ku98Zk0Y4oF0S4MfaWrYAIhAId2hFJHWmiL1qkjrxgN6J7ibrcKUvyJ%2FmrG1cTprpAwKv8DCB0QABoMNjM3NDIzMTgzODA1IgzRAEJVYi68SKwP0NUq3AMD5V%2FS0sLglAd9LOvCZcNViGBZKhWyPSfp%2FxBNIxcEtvwdP3NK8a%2BMR5x5d%2F7MfRnhFg1ygzcMMIwXyoeOfdBA0UsvvRCgGEcR9N21hcWQ%2F%2F%2BzasIJCgGmatuyHJk11OLWWv%2Blr4my20VyltEYGASi8LjTJf3n5bVf22E7iYsQWXX8btqgXfjPFR8ZIskvhfCHedMDqWxnmdJfASzSm9dxdo8Y2oA3%2BymEgRi0WLbE7ocz21gRSmy3sTa5JzoGhzEK6eSUYQ5vg4qrmBS614rWgfGtIK7MyzKknrTEKpMOykXfTH5TcL1kNSQa48foJs%2F7MuHDaaEy4oKZciGSnFayqnSV%2Bybi6smT3UYOyNs%2B0gVA1JpVJkUxSN9%2BEiPjHO6DUXGqAjSGPFFnSaHM0HwbCyN%2Btr8xqzVRd0YS9oWEBmWcXdjyW1mAJrBFAwBLiDlCnZqMY6tRPZDo9ZXFitiRMhEEitAcowasP7BhJnrWwCHWJgQcpvAGV3S%2F5%2F4iVNIP3isabXld0tM3yWVNOjBns1C7Gdianpp6KAXaZoaUZb2uIgwcm%2BsZ4k0qgBflG%2FOZpg8TBp7crNwVmrKSfB2j%2FllsFGjPG1MKua7X2GY%2BwXwNnN1Df8ToeJUsnDCX7ebCBjqkAYeJkw%2ByAhM4yeSnCR1B0XY52b1WiAhepYtEOOtT%2F7nL27jVnWQbn%2FPUwncgklZL11hAPgOKFUtNGKAdLPD3EUytQCKCg3oGFG3jjq8bS8CXvmhcy%2BJKMpS4459m5jqXQHEjm6TxvNX2DKLtTQVPAyltgXXQhf6fwjtNYgNbLqpxca6z9MIeCQy776IrECjbA2g3wuf%2FnNzMw1vs3T%2FrUgOaz2vF&X-Amz-Signature=292ec55c67e5f642a18a038553b6dbb29107ebf90cf5a88be695f967a84b9a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF3NCDH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCY20u7lefcW96I5DxZW8Ha6Ku98Zk0Y4oF0S4MfaWrYAIhAId2hFJHWmiL1qkjrxgN6J7ibrcKUvyJ%2FmrG1cTprpAwKv8DCB0QABoMNjM3NDIzMTgzODA1IgzRAEJVYi68SKwP0NUq3AMD5V%2FS0sLglAd9LOvCZcNViGBZKhWyPSfp%2FxBNIxcEtvwdP3NK8a%2BMR5x5d%2F7MfRnhFg1ygzcMMIwXyoeOfdBA0UsvvRCgGEcR9N21hcWQ%2F%2F%2BzasIJCgGmatuyHJk11OLWWv%2Blr4my20VyltEYGASi8LjTJf3n5bVf22E7iYsQWXX8btqgXfjPFR8ZIskvhfCHedMDqWxnmdJfASzSm9dxdo8Y2oA3%2BymEgRi0WLbE7ocz21gRSmy3sTa5JzoGhzEK6eSUYQ5vg4qrmBS614rWgfGtIK7MyzKknrTEKpMOykXfTH5TcL1kNSQa48foJs%2F7MuHDaaEy4oKZciGSnFayqnSV%2Bybi6smT3UYOyNs%2B0gVA1JpVJkUxSN9%2BEiPjHO6DUXGqAjSGPFFnSaHM0HwbCyN%2Btr8xqzVRd0YS9oWEBmWcXdjyW1mAJrBFAwBLiDlCnZqMY6tRPZDo9ZXFitiRMhEEitAcowasP7BhJnrWwCHWJgQcpvAGV3S%2F5%2F4iVNIP3isabXld0tM3yWVNOjBns1C7Gdianpp6KAXaZoaUZb2uIgwcm%2BsZ4k0qgBflG%2FOZpg8TBp7crNwVmrKSfB2j%2FllsFGjPG1MKua7X2GY%2BwXwNnN1Df8ToeJUsnDCX7ebCBjqkAYeJkw%2ByAhM4yeSnCR1B0XY52b1WiAhepYtEOOtT%2F7nL27jVnWQbn%2FPUwncgklZL11hAPgOKFUtNGKAdLPD3EUytQCKCg3oGFG3jjq8bS8CXvmhcy%2BJKMpS4459m5jqXQHEjm6TxvNX2DKLtTQVPAyltgXXQhf6fwjtNYgNbLqpxca6z9MIeCQy776IrECjbA2g3wuf%2FnNzMw1vs3T%2FrUgOaz2vF&X-Amz-Signature=1225abadbbb25c3b9c15d5216309c463e739e3e2d84af563abf2af70ea7bec21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF3NCDH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCY20u7lefcW96I5DxZW8Ha6Ku98Zk0Y4oF0S4MfaWrYAIhAId2hFJHWmiL1qkjrxgN6J7ibrcKUvyJ%2FmrG1cTprpAwKv8DCB0QABoMNjM3NDIzMTgzODA1IgzRAEJVYi68SKwP0NUq3AMD5V%2FS0sLglAd9LOvCZcNViGBZKhWyPSfp%2FxBNIxcEtvwdP3NK8a%2BMR5x5d%2F7MfRnhFg1ygzcMMIwXyoeOfdBA0UsvvRCgGEcR9N21hcWQ%2F%2F%2BzasIJCgGmatuyHJk11OLWWv%2Blr4my20VyltEYGASi8LjTJf3n5bVf22E7iYsQWXX8btqgXfjPFR8ZIskvhfCHedMDqWxnmdJfASzSm9dxdo8Y2oA3%2BymEgRi0WLbE7ocz21gRSmy3sTa5JzoGhzEK6eSUYQ5vg4qrmBS614rWgfGtIK7MyzKknrTEKpMOykXfTH5TcL1kNSQa48foJs%2F7MuHDaaEy4oKZciGSnFayqnSV%2Bybi6smT3UYOyNs%2B0gVA1JpVJkUxSN9%2BEiPjHO6DUXGqAjSGPFFnSaHM0HwbCyN%2Btr8xqzVRd0YS9oWEBmWcXdjyW1mAJrBFAwBLiDlCnZqMY6tRPZDo9ZXFitiRMhEEitAcowasP7BhJnrWwCHWJgQcpvAGV3S%2F5%2F4iVNIP3isabXld0tM3yWVNOjBns1C7Gdianpp6KAXaZoaUZb2uIgwcm%2BsZ4k0qgBflG%2FOZpg8TBp7crNwVmrKSfB2j%2FllsFGjPG1MKua7X2GY%2BwXwNnN1Df8ToeJUsnDCX7ebCBjqkAYeJkw%2ByAhM4yeSnCR1B0XY52b1WiAhepYtEOOtT%2F7nL27jVnWQbn%2FPUwncgklZL11hAPgOKFUtNGKAdLPD3EUytQCKCg3oGFG3jjq8bS8CXvmhcy%2BJKMpS4459m5jqXQHEjm6TxvNX2DKLtTQVPAyltgXXQhf6fwjtNYgNbLqpxca6z9MIeCQy776IrECjbA2g3wuf%2FnNzMw1vs3T%2FrUgOaz2vF&X-Amz-Signature=eb0862da61a25c4a000a054c44482e4bf6b60ff1a2672a20888b29757ca61df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF3NCDH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCY20u7lefcW96I5DxZW8Ha6Ku98Zk0Y4oF0S4MfaWrYAIhAId2hFJHWmiL1qkjrxgN6J7ibrcKUvyJ%2FmrG1cTprpAwKv8DCB0QABoMNjM3NDIzMTgzODA1IgzRAEJVYi68SKwP0NUq3AMD5V%2FS0sLglAd9LOvCZcNViGBZKhWyPSfp%2FxBNIxcEtvwdP3NK8a%2BMR5x5d%2F7MfRnhFg1ygzcMMIwXyoeOfdBA0UsvvRCgGEcR9N21hcWQ%2F%2F%2BzasIJCgGmatuyHJk11OLWWv%2Blr4my20VyltEYGASi8LjTJf3n5bVf22E7iYsQWXX8btqgXfjPFR8ZIskvhfCHedMDqWxnmdJfASzSm9dxdo8Y2oA3%2BymEgRi0WLbE7ocz21gRSmy3sTa5JzoGhzEK6eSUYQ5vg4qrmBS614rWgfGtIK7MyzKknrTEKpMOykXfTH5TcL1kNSQa48foJs%2F7MuHDaaEy4oKZciGSnFayqnSV%2Bybi6smT3UYOyNs%2B0gVA1JpVJkUxSN9%2BEiPjHO6DUXGqAjSGPFFnSaHM0HwbCyN%2Btr8xqzVRd0YS9oWEBmWcXdjyW1mAJrBFAwBLiDlCnZqMY6tRPZDo9ZXFitiRMhEEitAcowasP7BhJnrWwCHWJgQcpvAGV3S%2F5%2F4iVNIP3isabXld0tM3yWVNOjBns1C7Gdianpp6KAXaZoaUZb2uIgwcm%2BsZ4k0qgBflG%2FOZpg8TBp7crNwVmrKSfB2j%2FllsFGjPG1MKua7X2GY%2BwXwNnN1Df8ToeJUsnDCX7ebCBjqkAYeJkw%2ByAhM4yeSnCR1B0XY52b1WiAhepYtEOOtT%2F7nL27jVnWQbn%2FPUwncgklZL11hAPgOKFUtNGKAdLPD3EUytQCKCg3oGFG3jjq8bS8CXvmhcy%2BJKMpS4459m5jqXQHEjm6TxvNX2DKLtTQVPAyltgXXQhf6fwjtNYgNbLqpxca6z9MIeCQy776IrECjbA2g3wuf%2FnNzMw1vs3T%2FrUgOaz2vF&X-Amz-Signature=8e421ffe735f1a82dd5231ffff2bb54326ea8100297227c843c66482c9959e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF3NCDH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCY20u7lefcW96I5DxZW8Ha6Ku98Zk0Y4oF0S4MfaWrYAIhAId2hFJHWmiL1qkjrxgN6J7ibrcKUvyJ%2FmrG1cTprpAwKv8DCB0QABoMNjM3NDIzMTgzODA1IgzRAEJVYi68SKwP0NUq3AMD5V%2FS0sLglAd9LOvCZcNViGBZKhWyPSfp%2FxBNIxcEtvwdP3NK8a%2BMR5x5d%2F7MfRnhFg1ygzcMMIwXyoeOfdBA0UsvvRCgGEcR9N21hcWQ%2F%2F%2BzasIJCgGmatuyHJk11OLWWv%2Blr4my20VyltEYGASi8LjTJf3n5bVf22E7iYsQWXX8btqgXfjPFR8ZIskvhfCHedMDqWxnmdJfASzSm9dxdo8Y2oA3%2BymEgRi0WLbE7ocz21gRSmy3sTa5JzoGhzEK6eSUYQ5vg4qrmBS614rWgfGtIK7MyzKknrTEKpMOykXfTH5TcL1kNSQa48foJs%2F7MuHDaaEy4oKZciGSnFayqnSV%2Bybi6smT3UYOyNs%2B0gVA1JpVJkUxSN9%2BEiPjHO6DUXGqAjSGPFFnSaHM0HwbCyN%2Btr8xqzVRd0YS9oWEBmWcXdjyW1mAJrBFAwBLiDlCnZqMY6tRPZDo9ZXFitiRMhEEitAcowasP7BhJnrWwCHWJgQcpvAGV3S%2F5%2F4iVNIP3isabXld0tM3yWVNOjBns1C7Gdianpp6KAXaZoaUZb2uIgwcm%2BsZ4k0qgBflG%2FOZpg8TBp7crNwVmrKSfB2j%2FllsFGjPG1MKua7X2GY%2BwXwNnN1Df8ToeJUsnDCX7ebCBjqkAYeJkw%2ByAhM4yeSnCR1B0XY52b1WiAhepYtEOOtT%2F7nL27jVnWQbn%2FPUwncgklZL11hAPgOKFUtNGKAdLPD3EUytQCKCg3oGFG3jjq8bS8CXvmhcy%2BJKMpS4459m5jqXQHEjm6TxvNX2DKLtTQVPAyltgXXQhf6fwjtNYgNbLqpxca6z9MIeCQy776IrECjbA2g3wuf%2FnNzMw1vs3T%2FrUgOaz2vF&X-Amz-Signature=fffa665a6231735ae1e87072cc86d462893e941286002f7d3e9605ed9c287581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF3NCDH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCY20u7lefcW96I5DxZW8Ha6Ku98Zk0Y4oF0S4MfaWrYAIhAId2hFJHWmiL1qkjrxgN6J7ibrcKUvyJ%2FmrG1cTprpAwKv8DCB0QABoMNjM3NDIzMTgzODA1IgzRAEJVYi68SKwP0NUq3AMD5V%2FS0sLglAd9LOvCZcNViGBZKhWyPSfp%2FxBNIxcEtvwdP3NK8a%2BMR5x5d%2F7MfRnhFg1ygzcMMIwXyoeOfdBA0UsvvRCgGEcR9N21hcWQ%2F%2F%2BzasIJCgGmatuyHJk11OLWWv%2Blr4my20VyltEYGASi8LjTJf3n5bVf22E7iYsQWXX8btqgXfjPFR8ZIskvhfCHedMDqWxnmdJfASzSm9dxdo8Y2oA3%2BymEgRi0WLbE7ocz21gRSmy3sTa5JzoGhzEK6eSUYQ5vg4qrmBS614rWgfGtIK7MyzKknrTEKpMOykXfTH5TcL1kNSQa48foJs%2F7MuHDaaEy4oKZciGSnFayqnSV%2Bybi6smT3UYOyNs%2B0gVA1JpVJkUxSN9%2BEiPjHO6DUXGqAjSGPFFnSaHM0HwbCyN%2Btr8xqzVRd0YS9oWEBmWcXdjyW1mAJrBFAwBLiDlCnZqMY6tRPZDo9ZXFitiRMhEEitAcowasP7BhJnrWwCHWJgQcpvAGV3S%2F5%2F4iVNIP3isabXld0tM3yWVNOjBns1C7Gdianpp6KAXaZoaUZb2uIgwcm%2BsZ4k0qgBflG%2FOZpg8TBp7crNwVmrKSfB2j%2FllsFGjPG1MKua7X2GY%2BwXwNnN1Df8ToeJUsnDCX7ebCBjqkAYeJkw%2ByAhM4yeSnCR1B0XY52b1WiAhepYtEOOtT%2F7nL27jVnWQbn%2FPUwncgklZL11hAPgOKFUtNGKAdLPD3EUytQCKCg3oGFG3jjq8bS8CXvmhcy%2BJKMpS4459m5jqXQHEjm6TxvNX2DKLtTQVPAyltgXXQhf6fwjtNYgNbLqpxca6z9MIeCQy776IrECjbA2g3wuf%2FnNzMw1vs3T%2FrUgOaz2vF&X-Amz-Signature=3b279588327acf2014ba60735e55ca366d83f8bc04279bd75d8fe0648ee1b377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF3NCDH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCY20u7lefcW96I5DxZW8Ha6Ku98Zk0Y4oF0S4MfaWrYAIhAId2hFJHWmiL1qkjrxgN6J7ibrcKUvyJ%2FmrG1cTprpAwKv8DCB0QABoMNjM3NDIzMTgzODA1IgzRAEJVYi68SKwP0NUq3AMD5V%2FS0sLglAd9LOvCZcNViGBZKhWyPSfp%2FxBNIxcEtvwdP3NK8a%2BMR5x5d%2F7MfRnhFg1ygzcMMIwXyoeOfdBA0UsvvRCgGEcR9N21hcWQ%2F%2F%2BzasIJCgGmatuyHJk11OLWWv%2Blr4my20VyltEYGASi8LjTJf3n5bVf22E7iYsQWXX8btqgXfjPFR8ZIskvhfCHedMDqWxnmdJfASzSm9dxdo8Y2oA3%2BymEgRi0WLbE7ocz21gRSmy3sTa5JzoGhzEK6eSUYQ5vg4qrmBS614rWgfGtIK7MyzKknrTEKpMOykXfTH5TcL1kNSQa48foJs%2F7MuHDaaEy4oKZciGSnFayqnSV%2Bybi6smT3UYOyNs%2B0gVA1JpVJkUxSN9%2BEiPjHO6DUXGqAjSGPFFnSaHM0HwbCyN%2Btr8xqzVRd0YS9oWEBmWcXdjyW1mAJrBFAwBLiDlCnZqMY6tRPZDo9ZXFitiRMhEEitAcowasP7BhJnrWwCHWJgQcpvAGV3S%2F5%2F4iVNIP3isabXld0tM3yWVNOjBns1C7Gdianpp6KAXaZoaUZb2uIgwcm%2BsZ4k0qgBflG%2FOZpg8TBp7crNwVmrKSfB2j%2FllsFGjPG1MKua7X2GY%2BwXwNnN1Df8ToeJUsnDCX7ebCBjqkAYeJkw%2ByAhM4yeSnCR1B0XY52b1WiAhepYtEOOtT%2F7nL27jVnWQbn%2FPUwncgklZL11hAPgOKFUtNGKAdLPD3EUytQCKCg3oGFG3jjq8bS8CXvmhcy%2BJKMpS4459m5jqXQHEjm6TxvNX2DKLtTQVPAyltgXXQhf6fwjtNYgNbLqpxca6z9MIeCQy776IrECjbA2g3wuf%2FnNzMw1vs3T%2FrUgOaz2vF&X-Amz-Signature=623ae224c981422f50ccf9c6b776f81d17d8dcb3d352265612fda6a258194d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
