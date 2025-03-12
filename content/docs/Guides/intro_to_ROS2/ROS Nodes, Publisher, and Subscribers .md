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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RX4WZZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDOe%2B5RLXlyoMdWYUqijdX3naKybMszm6tncnlyV8pvpgIgdeWRyUzwzqTubYaWSbj%2BWVFtk1PmtVS%2FLLx7plgHYs4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkmV%2FBvlKfN6yikAyrcA4fxIXy5g5WBzDC0v0tWqWm1v8IWS770whWdSgUMsx5qW7cfxQPuyLoeLi9r%2Fh2f9w9LBGPPHDy79d7%2BMgJLQZjuEswawQ55S7pCT7ZfT%2BxU7A5rid87B2I1AmlR9R%2B0NYNMq75llnaMIj2dUVc%2BsDP6gFD0uFqhCBuqm%2BrBiXSyvfxQxgb1r4iJsKidvYuBIaXzLYZHckRY72wOqCJyo0qMvS85EKONGR3HpOx3iIxZpNslIUxQv8AzyknanSuB1UGnZItexxNwGD4sue3cTLfHma%2B0AdEgMNUqZGr16y9Afy07ZQ2H7MPZs%2BE9vnhsAGf4Qoy9HZ5vEh8nnMga8Ew2vuS8VqmYxDiT8fTdcMFw6qlflgMRaABEBHC4bPZVppHXpdvp9pWIiS9eaCXT36squBNiJp2XIcDcbvkkJjDtSSR4YuphXYry0bfgwvNk4Z8Psu%2BhUV2IuNmHCsde09p8z%2BD8%2F5WwBv6kC07obZkSl%2BCsW%2F3CUYzjnl9kg45D4vfYDJJMQ0aFJqoSGZa0I2jHzogU50tighuNe7aPEpb9OTzYYnU9lJ9zHSDQ3Wydw%2BaZc078O2UyNWkQWAPTh3fYDpPR4bOV21WAVaC0EG%2BNOARJ2DLFKxWuc9vmMKG%2Fxr4GOqUB0cQgEMZdkMkw1NPA%2Fuh%2FliEQX%2FLcHFrtx%2FcwI%2FACEdrDXpwAB1LnaSN0%2BQwg0lgTm7R39FvPRMeNpLWNpMOXjcYGLEaSj3XLal1K6xRi%2Fvk1nSnLi1CHo8dA3CtKoROypkMQ6fK6X9cNssZ4fQ2CDD3RqA17YkmyZqvfzE46NNNHoVQyNKQ66RH3PSoomcjC4UrxalaWpx4155QFBEn5A18MD3lB&X-Amz-Signature=5fed8cdc32dae292c9c67c99117a4a6052d94126afdc4d10e8c06d5d7767dfdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RX4WZZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDOe%2B5RLXlyoMdWYUqijdX3naKybMszm6tncnlyV8pvpgIgdeWRyUzwzqTubYaWSbj%2BWVFtk1PmtVS%2FLLx7plgHYs4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkmV%2FBvlKfN6yikAyrcA4fxIXy5g5WBzDC0v0tWqWm1v8IWS770whWdSgUMsx5qW7cfxQPuyLoeLi9r%2Fh2f9w9LBGPPHDy79d7%2BMgJLQZjuEswawQ55S7pCT7ZfT%2BxU7A5rid87B2I1AmlR9R%2B0NYNMq75llnaMIj2dUVc%2BsDP6gFD0uFqhCBuqm%2BrBiXSyvfxQxgb1r4iJsKidvYuBIaXzLYZHckRY72wOqCJyo0qMvS85EKONGR3HpOx3iIxZpNslIUxQv8AzyknanSuB1UGnZItexxNwGD4sue3cTLfHma%2B0AdEgMNUqZGr16y9Afy07ZQ2H7MPZs%2BE9vnhsAGf4Qoy9HZ5vEh8nnMga8Ew2vuS8VqmYxDiT8fTdcMFw6qlflgMRaABEBHC4bPZVppHXpdvp9pWIiS9eaCXT36squBNiJp2XIcDcbvkkJjDtSSR4YuphXYry0bfgwvNk4Z8Psu%2BhUV2IuNmHCsde09p8z%2BD8%2F5WwBv6kC07obZkSl%2BCsW%2F3CUYzjnl9kg45D4vfYDJJMQ0aFJqoSGZa0I2jHzogU50tighuNe7aPEpb9OTzYYnU9lJ9zHSDQ3Wydw%2BaZc078O2UyNWkQWAPTh3fYDpPR4bOV21WAVaC0EG%2BNOARJ2DLFKxWuc9vmMKG%2Fxr4GOqUB0cQgEMZdkMkw1NPA%2Fuh%2FliEQX%2FLcHFrtx%2FcwI%2FACEdrDXpwAB1LnaSN0%2BQwg0lgTm7R39FvPRMeNpLWNpMOXjcYGLEaSj3XLal1K6xRi%2Fvk1nSnLi1CHo8dA3CtKoROypkMQ6fK6X9cNssZ4fQ2CDD3RqA17YkmyZqvfzE46NNNHoVQyNKQ66RH3PSoomcjC4UrxalaWpx4155QFBEn5A18MD3lB&X-Amz-Signature=ace6177e12c5806940b2ba4368f22627ed41b98f662950f180ee13c6766492b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RX4WZZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDOe%2B5RLXlyoMdWYUqijdX3naKybMszm6tncnlyV8pvpgIgdeWRyUzwzqTubYaWSbj%2BWVFtk1PmtVS%2FLLx7plgHYs4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkmV%2FBvlKfN6yikAyrcA4fxIXy5g5WBzDC0v0tWqWm1v8IWS770whWdSgUMsx5qW7cfxQPuyLoeLi9r%2Fh2f9w9LBGPPHDy79d7%2BMgJLQZjuEswawQ55S7pCT7ZfT%2BxU7A5rid87B2I1AmlR9R%2B0NYNMq75llnaMIj2dUVc%2BsDP6gFD0uFqhCBuqm%2BrBiXSyvfxQxgb1r4iJsKidvYuBIaXzLYZHckRY72wOqCJyo0qMvS85EKONGR3HpOx3iIxZpNslIUxQv8AzyknanSuB1UGnZItexxNwGD4sue3cTLfHma%2B0AdEgMNUqZGr16y9Afy07ZQ2H7MPZs%2BE9vnhsAGf4Qoy9HZ5vEh8nnMga8Ew2vuS8VqmYxDiT8fTdcMFw6qlflgMRaABEBHC4bPZVppHXpdvp9pWIiS9eaCXT36squBNiJp2XIcDcbvkkJjDtSSR4YuphXYry0bfgwvNk4Z8Psu%2BhUV2IuNmHCsde09p8z%2BD8%2F5WwBv6kC07obZkSl%2BCsW%2F3CUYzjnl9kg45D4vfYDJJMQ0aFJqoSGZa0I2jHzogU50tighuNe7aPEpb9OTzYYnU9lJ9zHSDQ3Wydw%2BaZc078O2UyNWkQWAPTh3fYDpPR4bOV21WAVaC0EG%2BNOARJ2DLFKxWuc9vmMKG%2Fxr4GOqUB0cQgEMZdkMkw1NPA%2Fuh%2FliEQX%2FLcHFrtx%2FcwI%2FACEdrDXpwAB1LnaSN0%2BQwg0lgTm7R39FvPRMeNpLWNpMOXjcYGLEaSj3XLal1K6xRi%2Fvk1nSnLi1CHo8dA3CtKoROypkMQ6fK6X9cNssZ4fQ2CDD3RqA17YkmyZqvfzE46NNNHoVQyNKQ66RH3PSoomcjC4UrxalaWpx4155QFBEn5A18MD3lB&X-Amz-Signature=12374efe807e598f577cb611612121e3044e74d6176a39765672f591e9eaedba&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RX4WZZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDOe%2B5RLXlyoMdWYUqijdX3naKybMszm6tncnlyV8pvpgIgdeWRyUzwzqTubYaWSbj%2BWVFtk1PmtVS%2FLLx7plgHYs4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkmV%2FBvlKfN6yikAyrcA4fxIXy5g5WBzDC0v0tWqWm1v8IWS770whWdSgUMsx5qW7cfxQPuyLoeLi9r%2Fh2f9w9LBGPPHDy79d7%2BMgJLQZjuEswawQ55S7pCT7ZfT%2BxU7A5rid87B2I1AmlR9R%2B0NYNMq75llnaMIj2dUVc%2BsDP6gFD0uFqhCBuqm%2BrBiXSyvfxQxgb1r4iJsKidvYuBIaXzLYZHckRY72wOqCJyo0qMvS85EKONGR3HpOx3iIxZpNslIUxQv8AzyknanSuB1UGnZItexxNwGD4sue3cTLfHma%2B0AdEgMNUqZGr16y9Afy07ZQ2H7MPZs%2BE9vnhsAGf4Qoy9HZ5vEh8nnMga8Ew2vuS8VqmYxDiT8fTdcMFw6qlflgMRaABEBHC4bPZVppHXpdvp9pWIiS9eaCXT36squBNiJp2XIcDcbvkkJjDtSSR4YuphXYry0bfgwvNk4Z8Psu%2BhUV2IuNmHCsde09p8z%2BD8%2F5WwBv6kC07obZkSl%2BCsW%2F3CUYzjnl9kg45D4vfYDJJMQ0aFJqoSGZa0I2jHzogU50tighuNe7aPEpb9OTzYYnU9lJ9zHSDQ3Wydw%2BaZc078O2UyNWkQWAPTh3fYDpPR4bOV21WAVaC0EG%2BNOARJ2DLFKxWuc9vmMKG%2Fxr4GOqUB0cQgEMZdkMkw1NPA%2Fuh%2FliEQX%2FLcHFrtx%2FcwI%2FACEdrDXpwAB1LnaSN0%2BQwg0lgTm7R39FvPRMeNpLWNpMOXjcYGLEaSj3XLal1K6xRi%2Fvk1nSnLi1CHo8dA3CtKoROypkMQ6fK6X9cNssZ4fQ2CDD3RqA17YkmyZqvfzE46NNNHoVQyNKQ66RH3PSoomcjC4UrxalaWpx4155QFBEn5A18MD3lB&X-Amz-Signature=0dfc3cf307b23d36b81304e513911717f8aadc9d8de645c4e1a900a3c4553541&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RX4WZZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDOe%2B5RLXlyoMdWYUqijdX3naKybMszm6tncnlyV8pvpgIgdeWRyUzwzqTubYaWSbj%2BWVFtk1PmtVS%2FLLx7plgHYs4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkmV%2FBvlKfN6yikAyrcA4fxIXy5g5WBzDC0v0tWqWm1v8IWS770whWdSgUMsx5qW7cfxQPuyLoeLi9r%2Fh2f9w9LBGPPHDy79d7%2BMgJLQZjuEswawQ55S7pCT7ZfT%2BxU7A5rid87B2I1AmlR9R%2B0NYNMq75llnaMIj2dUVc%2BsDP6gFD0uFqhCBuqm%2BrBiXSyvfxQxgb1r4iJsKidvYuBIaXzLYZHckRY72wOqCJyo0qMvS85EKONGR3HpOx3iIxZpNslIUxQv8AzyknanSuB1UGnZItexxNwGD4sue3cTLfHma%2B0AdEgMNUqZGr16y9Afy07ZQ2H7MPZs%2BE9vnhsAGf4Qoy9HZ5vEh8nnMga8Ew2vuS8VqmYxDiT8fTdcMFw6qlflgMRaABEBHC4bPZVppHXpdvp9pWIiS9eaCXT36squBNiJp2XIcDcbvkkJjDtSSR4YuphXYry0bfgwvNk4Z8Psu%2BhUV2IuNmHCsde09p8z%2BD8%2F5WwBv6kC07obZkSl%2BCsW%2F3CUYzjnl9kg45D4vfYDJJMQ0aFJqoSGZa0I2jHzogU50tighuNe7aPEpb9OTzYYnU9lJ9zHSDQ3Wydw%2BaZc078O2UyNWkQWAPTh3fYDpPR4bOV21WAVaC0EG%2BNOARJ2DLFKxWuc9vmMKG%2Fxr4GOqUB0cQgEMZdkMkw1NPA%2Fuh%2FliEQX%2FLcHFrtx%2FcwI%2FACEdrDXpwAB1LnaSN0%2BQwg0lgTm7R39FvPRMeNpLWNpMOXjcYGLEaSj3XLal1K6xRi%2Fvk1nSnLi1CHo8dA3CtKoROypkMQ6fK6X9cNssZ4fQ2CDD3RqA17YkmyZqvfzE46NNNHoVQyNKQ66RH3PSoomcjC4UrxalaWpx4155QFBEn5A18MD3lB&X-Amz-Signature=43b5fb3e7a32973234ee17e053dcdcfcd8f100834e8e04c2e5fcafe2cdcaa0cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RX4WZZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDOe%2B5RLXlyoMdWYUqijdX3naKybMszm6tncnlyV8pvpgIgdeWRyUzwzqTubYaWSbj%2BWVFtk1PmtVS%2FLLx7plgHYs4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkmV%2FBvlKfN6yikAyrcA4fxIXy5g5WBzDC0v0tWqWm1v8IWS770whWdSgUMsx5qW7cfxQPuyLoeLi9r%2Fh2f9w9LBGPPHDy79d7%2BMgJLQZjuEswawQ55S7pCT7ZfT%2BxU7A5rid87B2I1AmlR9R%2B0NYNMq75llnaMIj2dUVc%2BsDP6gFD0uFqhCBuqm%2BrBiXSyvfxQxgb1r4iJsKidvYuBIaXzLYZHckRY72wOqCJyo0qMvS85EKONGR3HpOx3iIxZpNslIUxQv8AzyknanSuB1UGnZItexxNwGD4sue3cTLfHma%2B0AdEgMNUqZGr16y9Afy07ZQ2H7MPZs%2BE9vnhsAGf4Qoy9HZ5vEh8nnMga8Ew2vuS8VqmYxDiT8fTdcMFw6qlflgMRaABEBHC4bPZVppHXpdvp9pWIiS9eaCXT36squBNiJp2XIcDcbvkkJjDtSSR4YuphXYry0bfgwvNk4Z8Psu%2BhUV2IuNmHCsde09p8z%2BD8%2F5WwBv6kC07obZkSl%2BCsW%2F3CUYzjnl9kg45D4vfYDJJMQ0aFJqoSGZa0I2jHzogU50tighuNe7aPEpb9OTzYYnU9lJ9zHSDQ3Wydw%2BaZc078O2UyNWkQWAPTh3fYDpPR4bOV21WAVaC0EG%2BNOARJ2DLFKxWuc9vmMKG%2Fxr4GOqUB0cQgEMZdkMkw1NPA%2Fuh%2FliEQX%2FLcHFrtx%2FcwI%2FACEdrDXpwAB1LnaSN0%2BQwg0lgTm7R39FvPRMeNpLWNpMOXjcYGLEaSj3XLal1K6xRi%2Fvk1nSnLi1CHo8dA3CtKoROypkMQ6fK6X9cNssZ4fQ2CDD3RqA17YkmyZqvfzE46NNNHoVQyNKQ66RH3PSoomcjC4UrxalaWpx4155QFBEn5A18MD3lB&X-Amz-Signature=50437dc2833bc240620926cee2496a7ae0b184fae013ca943b8cb302c245586d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RX4WZZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDOe%2B5RLXlyoMdWYUqijdX3naKybMszm6tncnlyV8pvpgIgdeWRyUzwzqTubYaWSbj%2BWVFtk1PmtVS%2FLLx7plgHYs4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkmV%2FBvlKfN6yikAyrcA4fxIXy5g5WBzDC0v0tWqWm1v8IWS770whWdSgUMsx5qW7cfxQPuyLoeLi9r%2Fh2f9w9LBGPPHDy79d7%2BMgJLQZjuEswawQ55S7pCT7ZfT%2BxU7A5rid87B2I1AmlR9R%2B0NYNMq75llnaMIj2dUVc%2BsDP6gFD0uFqhCBuqm%2BrBiXSyvfxQxgb1r4iJsKidvYuBIaXzLYZHckRY72wOqCJyo0qMvS85EKONGR3HpOx3iIxZpNslIUxQv8AzyknanSuB1UGnZItexxNwGD4sue3cTLfHma%2B0AdEgMNUqZGr16y9Afy07ZQ2H7MPZs%2BE9vnhsAGf4Qoy9HZ5vEh8nnMga8Ew2vuS8VqmYxDiT8fTdcMFw6qlflgMRaABEBHC4bPZVppHXpdvp9pWIiS9eaCXT36squBNiJp2XIcDcbvkkJjDtSSR4YuphXYry0bfgwvNk4Z8Psu%2BhUV2IuNmHCsde09p8z%2BD8%2F5WwBv6kC07obZkSl%2BCsW%2F3CUYzjnl9kg45D4vfYDJJMQ0aFJqoSGZa0I2jHzogU50tighuNe7aPEpb9OTzYYnU9lJ9zHSDQ3Wydw%2BaZc078O2UyNWkQWAPTh3fYDpPR4bOV21WAVaC0EG%2BNOARJ2DLFKxWuc9vmMKG%2Fxr4GOqUB0cQgEMZdkMkw1NPA%2Fuh%2FliEQX%2FLcHFrtx%2FcwI%2FACEdrDXpwAB1LnaSN0%2BQwg0lgTm7R39FvPRMeNpLWNpMOXjcYGLEaSj3XLal1K6xRi%2Fvk1nSnLi1CHo8dA3CtKoROypkMQ6fK6X9cNssZ4fQ2CDD3RqA17YkmyZqvfzE46NNNHoVQyNKQ66RH3PSoomcjC4UrxalaWpx4155QFBEn5A18MD3lB&X-Amz-Signature=6f64cae8fb0daef4cdf063a3470a8c149c01a5817fce6c7214be96c7df4f0149&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RX4WZZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDOe%2B5RLXlyoMdWYUqijdX3naKybMszm6tncnlyV8pvpgIgdeWRyUzwzqTubYaWSbj%2BWVFtk1PmtVS%2FLLx7plgHYs4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkmV%2FBvlKfN6yikAyrcA4fxIXy5g5WBzDC0v0tWqWm1v8IWS770whWdSgUMsx5qW7cfxQPuyLoeLi9r%2Fh2f9w9LBGPPHDy79d7%2BMgJLQZjuEswawQ55S7pCT7ZfT%2BxU7A5rid87B2I1AmlR9R%2B0NYNMq75llnaMIj2dUVc%2BsDP6gFD0uFqhCBuqm%2BrBiXSyvfxQxgb1r4iJsKidvYuBIaXzLYZHckRY72wOqCJyo0qMvS85EKONGR3HpOx3iIxZpNslIUxQv8AzyknanSuB1UGnZItexxNwGD4sue3cTLfHma%2B0AdEgMNUqZGr16y9Afy07ZQ2H7MPZs%2BE9vnhsAGf4Qoy9HZ5vEh8nnMga8Ew2vuS8VqmYxDiT8fTdcMFw6qlflgMRaABEBHC4bPZVppHXpdvp9pWIiS9eaCXT36squBNiJp2XIcDcbvkkJjDtSSR4YuphXYry0bfgwvNk4Z8Psu%2BhUV2IuNmHCsde09p8z%2BD8%2F5WwBv6kC07obZkSl%2BCsW%2F3CUYzjnl9kg45D4vfYDJJMQ0aFJqoSGZa0I2jHzogU50tighuNe7aPEpb9OTzYYnU9lJ9zHSDQ3Wydw%2BaZc078O2UyNWkQWAPTh3fYDpPR4bOV21WAVaC0EG%2BNOARJ2DLFKxWuc9vmMKG%2Fxr4GOqUB0cQgEMZdkMkw1NPA%2Fuh%2FliEQX%2FLcHFrtx%2FcwI%2FACEdrDXpwAB1LnaSN0%2BQwg0lgTm7R39FvPRMeNpLWNpMOXjcYGLEaSj3XLal1K6xRi%2Fvk1nSnLi1CHo8dA3CtKoROypkMQ6fK6X9cNssZ4fQ2CDD3RqA17YkmyZqvfzE46NNNHoVQyNKQ66RH3PSoomcjC4UrxalaWpx4155QFBEn5A18MD3lB&X-Amz-Signature=7950471695a14bc7b0170c3b2d9298b50620a201e435f79306794f95186a2013&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
