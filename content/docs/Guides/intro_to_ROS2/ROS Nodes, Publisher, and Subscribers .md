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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOG2OBB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHfDOJfKYOadPTsSF2pJvsWJ9ihfx49mo74MZ2rGvRObAiEA0Tltt8%2FOyKDMGP1R4QGsPJ6TPAy7ZUXdego%2FkrrDfLwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwhaKgM2vpzNmQCdircA3%2FDC9Krv9CfxVCN4oJa6I7UbSTPNhvwNPwqg5TSdlKMccd%2FcVjt2W7hpint%2BtWI304DrLrk%2BQrN5WDcanbyXy88wV%2BRYM4V%2FU4lCfM8751PyjUhO7HpZo26WIQ46OUhxC48Otw46j0O8%2FdH9ecHcvpNwO0XemuG%2Bf%2F%2F9nvfFVgdK7ZYSVrdDtReHa91RP3NpPyf7rc4xeVYG%2FjlXVTFmhxbJWigx3tmM%2FZVk9DPrI8LbAEbLvyNkBothb7gNuLyuMLccnrO4fU3cQPBxYlpEEJ0DWkV03rgmR6doQYs1j16rhmtP3mgqpiPz14SQ%2FmKeL3oT%2FcqGa0fvixzeWVTfkxDGZqXVjKT2slDlE2oynhUGuKDyszkuNENRRs27VsNko8mK%2BYp9DpyAe02BxI9FHy%2BdpbD%2B%2BVWOpyUEqoiYQobixMECxbQSBJzk1mSE1k4dsdzu%2FpSBgYjWggPAsMr%2FInz3fv6aYdc%2Fv804tAqtLP%2F5UXf64hGA0SGmKMoSQgSW84huNU8TwAWM7ptJch4cyNAOQnZ9nPt9j1B1bL2xuIMCjhjuC6PuXlBJYGMpuqaQjim60QwhGoCWK6w7uFqkgsJgCA33HlsqUHZCczWvVRX4%2FMXBTc0J0H%2BkjpDMOSz6b8GOqUBlOFYc8DUuPdI2eG5rODFeNH%2F6NSsYxr2RV8WbfRZQnvak4cwq%2FEl2FOk3wsap4I5JIeuiRW0U7SfBOT4NK1CpO%2BAo%2FRmKfNRccpRNexfeAfo4O3saJtukUuWNXVoLIQlHJjKDVcP2%2B6hfGFXJkU3YaBiWpjhg6pnSi4EaId9qryW0xNeVGYcU2Jf1hGgYMjtcYL54ceY7TLcwjtwkk07PZZIY%2FkQ&X-Amz-Signature=da64a4d7c550af4c89de391e62ec4ef8eca591d839ea949875606d8b316400d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOG2OBB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHfDOJfKYOadPTsSF2pJvsWJ9ihfx49mo74MZ2rGvRObAiEA0Tltt8%2FOyKDMGP1R4QGsPJ6TPAy7ZUXdego%2FkrrDfLwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwhaKgM2vpzNmQCdircA3%2FDC9Krv9CfxVCN4oJa6I7UbSTPNhvwNPwqg5TSdlKMccd%2FcVjt2W7hpint%2BtWI304DrLrk%2BQrN5WDcanbyXy88wV%2BRYM4V%2FU4lCfM8751PyjUhO7HpZo26WIQ46OUhxC48Otw46j0O8%2FdH9ecHcvpNwO0XemuG%2Bf%2F%2F9nvfFVgdK7ZYSVrdDtReHa91RP3NpPyf7rc4xeVYG%2FjlXVTFmhxbJWigx3tmM%2FZVk9DPrI8LbAEbLvyNkBothb7gNuLyuMLccnrO4fU3cQPBxYlpEEJ0DWkV03rgmR6doQYs1j16rhmtP3mgqpiPz14SQ%2FmKeL3oT%2FcqGa0fvixzeWVTfkxDGZqXVjKT2slDlE2oynhUGuKDyszkuNENRRs27VsNko8mK%2BYp9DpyAe02BxI9FHy%2BdpbD%2B%2BVWOpyUEqoiYQobixMECxbQSBJzk1mSE1k4dsdzu%2FpSBgYjWggPAsMr%2FInz3fv6aYdc%2Fv804tAqtLP%2F5UXf64hGA0SGmKMoSQgSW84huNU8TwAWM7ptJch4cyNAOQnZ9nPt9j1B1bL2xuIMCjhjuC6PuXlBJYGMpuqaQjim60QwhGoCWK6w7uFqkgsJgCA33HlsqUHZCczWvVRX4%2FMXBTc0J0H%2BkjpDMOSz6b8GOqUBlOFYc8DUuPdI2eG5rODFeNH%2F6NSsYxr2RV8WbfRZQnvak4cwq%2FEl2FOk3wsap4I5JIeuiRW0U7SfBOT4NK1CpO%2BAo%2FRmKfNRccpRNexfeAfo4O3saJtukUuWNXVoLIQlHJjKDVcP2%2B6hfGFXJkU3YaBiWpjhg6pnSi4EaId9qryW0xNeVGYcU2Jf1hGgYMjtcYL54ceY7TLcwjtwkk07PZZIY%2FkQ&X-Amz-Signature=871320aed9169a7cc614bee599563c65e166e1a744b3ab29078e681aa1f5be05&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOG2OBB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHfDOJfKYOadPTsSF2pJvsWJ9ihfx49mo74MZ2rGvRObAiEA0Tltt8%2FOyKDMGP1R4QGsPJ6TPAy7ZUXdego%2FkrrDfLwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwhaKgM2vpzNmQCdircA3%2FDC9Krv9CfxVCN4oJa6I7UbSTPNhvwNPwqg5TSdlKMccd%2FcVjt2W7hpint%2BtWI304DrLrk%2BQrN5WDcanbyXy88wV%2BRYM4V%2FU4lCfM8751PyjUhO7HpZo26WIQ46OUhxC48Otw46j0O8%2FdH9ecHcvpNwO0XemuG%2Bf%2F%2F9nvfFVgdK7ZYSVrdDtReHa91RP3NpPyf7rc4xeVYG%2FjlXVTFmhxbJWigx3tmM%2FZVk9DPrI8LbAEbLvyNkBothb7gNuLyuMLccnrO4fU3cQPBxYlpEEJ0DWkV03rgmR6doQYs1j16rhmtP3mgqpiPz14SQ%2FmKeL3oT%2FcqGa0fvixzeWVTfkxDGZqXVjKT2slDlE2oynhUGuKDyszkuNENRRs27VsNko8mK%2BYp9DpyAe02BxI9FHy%2BdpbD%2B%2BVWOpyUEqoiYQobixMECxbQSBJzk1mSE1k4dsdzu%2FpSBgYjWggPAsMr%2FInz3fv6aYdc%2Fv804tAqtLP%2F5UXf64hGA0SGmKMoSQgSW84huNU8TwAWM7ptJch4cyNAOQnZ9nPt9j1B1bL2xuIMCjhjuC6PuXlBJYGMpuqaQjim60QwhGoCWK6w7uFqkgsJgCA33HlsqUHZCczWvVRX4%2FMXBTc0J0H%2BkjpDMOSz6b8GOqUBlOFYc8DUuPdI2eG5rODFeNH%2F6NSsYxr2RV8WbfRZQnvak4cwq%2FEl2FOk3wsap4I5JIeuiRW0U7SfBOT4NK1CpO%2BAo%2FRmKfNRccpRNexfeAfo4O3saJtukUuWNXVoLIQlHJjKDVcP2%2B6hfGFXJkU3YaBiWpjhg6pnSi4EaId9qryW0xNeVGYcU2Jf1hGgYMjtcYL54ceY7TLcwjtwkk07PZZIY%2FkQ&X-Amz-Signature=12257517e8a1be8c078fbd139cb40813fadeaa48cb06fb90cd98e54271feedab&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOG2OBB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHfDOJfKYOadPTsSF2pJvsWJ9ihfx49mo74MZ2rGvRObAiEA0Tltt8%2FOyKDMGP1R4QGsPJ6TPAy7ZUXdego%2FkrrDfLwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwhaKgM2vpzNmQCdircA3%2FDC9Krv9CfxVCN4oJa6I7UbSTPNhvwNPwqg5TSdlKMccd%2FcVjt2W7hpint%2BtWI304DrLrk%2BQrN5WDcanbyXy88wV%2BRYM4V%2FU4lCfM8751PyjUhO7HpZo26WIQ46OUhxC48Otw46j0O8%2FdH9ecHcvpNwO0XemuG%2Bf%2F%2F9nvfFVgdK7ZYSVrdDtReHa91RP3NpPyf7rc4xeVYG%2FjlXVTFmhxbJWigx3tmM%2FZVk9DPrI8LbAEbLvyNkBothb7gNuLyuMLccnrO4fU3cQPBxYlpEEJ0DWkV03rgmR6doQYs1j16rhmtP3mgqpiPz14SQ%2FmKeL3oT%2FcqGa0fvixzeWVTfkxDGZqXVjKT2slDlE2oynhUGuKDyszkuNENRRs27VsNko8mK%2BYp9DpyAe02BxI9FHy%2BdpbD%2B%2BVWOpyUEqoiYQobixMECxbQSBJzk1mSE1k4dsdzu%2FpSBgYjWggPAsMr%2FInz3fv6aYdc%2Fv804tAqtLP%2F5UXf64hGA0SGmKMoSQgSW84huNU8TwAWM7ptJch4cyNAOQnZ9nPt9j1B1bL2xuIMCjhjuC6PuXlBJYGMpuqaQjim60QwhGoCWK6w7uFqkgsJgCA33HlsqUHZCczWvVRX4%2FMXBTc0J0H%2BkjpDMOSz6b8GOqUBlOFYc8DUuPdI2eG5rODFeNH%2F6NSsYxr2RV8WbfRZQnvak4cwq%2FEl2FOk3wsap4I5JIeuiRW0U7SfBOT4NK1CpO%2BAo%2FRmKfNRccpRNexfeAfo4O3saJtukUuWNXVoLIQlHJjKDVcP2%2B6hfGFXJkU3YaBiWpjhg6pnSi4EaId9qryW0xNeVGYcU2Jf1hGgYMjtcYL54ceY7TLcwjtwkk07PZZIY%2FkQ&X-Amz-Signature=101eb4a008c4c08c0b6729e20937fdc132a3bde199c4877ee053d0c7bc8f2578&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOG2OBB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHfDOJfKYOadPTsSF2pJvsWJ9ihfx49mo74MZ2rGvRObAiEA0Tltt8%2FOyKDMGP1R4QGsPJ6TPAy7ZUXdego%2FkrrDfLwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwhaKgM2vpzNmQCdircA3%2FDC9Krv9CfxVCN4oJa6I7UbSTPNhvwNPwqg5TSdlKMccd%2FcVjt2W7hpint%2BtWI304DrLrk%2BQrN5WDcanbyXy88wV%2BRYM4V%2FU4lCfM8751PyjUhO7HpZo26WIQ46OUhxC48Otw46j0O8%2FdH9ecHcvpNwO0XemuG%2Bf%2F%2F9nvfFVgdK7ZYSVrdDtReHa91RP3NpPyf7rc4xeVYG%2FjlXVTFmhxbJWigx3tmM%2FZVk9DPrI8LbAEbLvyNkBothb7gNuLyuMLccnrO4fU3cQPBxYlpEEJ0DWkV03rgmR6doQYs1j16rhmtP3mgqpiPz14SQ%2FmKeL3oT%2FcqGa0fvixzeWVTfkxDGZqXVjKT2slDlE2oynhUGuKDyszkuNENRRs27VsNko8mK%2BYp9DpyAe02BxI9FHy%2BdpbD%2B%2BVWOpyUEqoiYQobixMECxbQSBJzk1mSE1k4dsdzu%2FpSBgYjWggPAsMr%2FInz3fv6aYdc%2Fv804tAqtLP%2F5UXf64hGA0SGmKMoSQgSW84huNU8TwAWM7ptJch4cyNAOQnZ9nPt9j1B1bL2xuIMCjhjuC6PuXlBJYGMpuqaQjim60QwhGoCWK6w7uFqkgsJgCA33HlsqUHZCczWvVRX4%2FMXBTc0J0H%2BkjpDMOSz6b8GOqUBlOFYc8DUuPdI2eG5rODFeNH%2F6NSsYxr2RV8WbfRZQnvak4cwq%2FEl2FOk3wsap4I5JIeuiRW0U7SfBOT4NK1CpO%2BAo%2FRmKfNRccpRNexfeAfo4O3saJtukUuWNXVoLIQlHJjKDVcP2%2B6hfGFXJkU3YaBiWpjhg6pnSi4EaId9qryW0xNeVGYcU2Jf1hGgYMjtcYL54ceY7TLcwjtwkk07PZZIY%2FkQ&X-Amz-Signature=0242700cd4168a23907f60b36f3e3f1e64d3b4b6b22cbcb51b63355f04ad5a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOG2OBB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHfDOJfKYOadPTsSF2pJvsWJ9ihfx49mo74MZ2rGvRObAiEA0Tltt8%2FOyKDMGP1R4QGsPJ6TPAy7ZUXdego%2FkrrDfLwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwhaKgM2vpzNmQCdircA3%2FDC9Krv9CfxVCN4oJa6I7UbSTPNhvwNPwqg5TSdlKMccd%2FcVjt2W7hpint%2BtWI304DrLrk%2BQrN5WDcanbyXy88wV%2BRYM4V%2FU4lCfM8751PyjUhO7HpZo26WIQ46OUhxC48Otw46j0O8%2FdH9ecHcvpNwO0XemuG%2Bf%2F%2F9nvfFVgdK7ZYSVrdDtReHa91RP3NpPyf7rc4xeVYG%2FjlXVTFmhxbJWigx3tmM%2FZVk9DPrI8LbAEbLvyNkBothb7gNuLyuMLccnrO4fU3cQPBxYlpEEJ0DWkV03rgmR6doQYs1j16rhmtP3mgqpiPz14SQ%2FmKeL3oT%2FcqGa0fvixzeWVTfkxDGZqXVjKT2slDlE2oynhUGuKDyszkuNENRRs27VsNko8mK%2BYp9DpyAe02BxI9FHy%2BdpbD%2B%2BVWOpyUEqoiYQobixMECxbQSBJzk1mSE1k4dsdzu%2FpSBgYjWggPAsMr%2FInz3fv6aYdc%2Fv804tAqtLP%2F5UXf64hGA0SGmKMoSQgSW84huNU8TwAWM7ptJch4cyNAOQnZ9nPt9j1B1bL2xuIMCjhjuC6PuXlBJYGMpuqaQjim60QwhGoCWK6w7uFqkgsJgCA33HlsqUHZCczWvVRX4%2FMXBTc0J0H%2BkjpDMOSz6b8GOqUBlOFYc8DUuPdI2eG5rODFeNH%2F6NSsYxr2RV8WbfRZQnvak4cwq%2FEl2FOk3wsap4I5JIeuiRW0U7SfBOT4NK1CpO%2BAo%2FRmKfNRccpRNexfeAfo4O3saJtukUuWNXVoLIQlHJjKDVcP2%2B6hfGFXJkU3YaBiWpjhg6pnSi4EaId9qryW0xNeVGYcU2Jf1hGgYMjtcYL54ceY7TLcwjtwkk07PZZIY%2FkQ&X-Amz-Signature=586b81fd6af42d7f02a204e0b4623344c96d3ba84592c549269adceca2efaecd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOG2OBB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHfDOJfKYOadPTsSF2pJvsWJ9ihfx49mo74MZ2rGvRObAiEA0Tltt8%2FOyKDMGP1R4QGsPJ6TPAy7ZUXdego%2FkrrDfLwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwhaKgM2vpzNmQCdircA3%2FDC9Krv9CfxVCN4oJa6I7UbSTPNhvwNPwqg5TSdlKMccd%2FcVjt2W7hpint%2BtWI304DrLrk%2BQrN5WDcanbyXy88wV%2BRYM4V%2FU4lCfM8751PyjUhO7HpZo26WIQ46OUhxC48Otw46j0O8%2FdH9ecHcvpNwO0XemuG%2Bf%2F%2F9nvfFVgdK7ZYSVrdDtReHa91RP3NpPyf7rc4xeVYG%2FjlXVTFmhxbJWigx3tmM%2FZVk9DPrI8LbAEbLvyNkBothb7gNuLyuMLccnrO4fU3cQPBxYlpEEJ0DWkV03rgmR6doQYs1j16rhmtP3mgqpiPz14SQ%2FmKeL3oT%2FcqGa0fvixzeWVTfkxDGZqXVjKT2slDlE2oynhUGuKDyszkuNENRRs27VsNko8mK%2BYp9DpyAe02BxI9FHy%2BdpbD%2B%2BVWOpyUEqoiYQobixMECxbQSBJzk1mSE1k4dsdzu%2FpSBgYjWggPAsMr%2FInz3fv6aYdc%2Fv804tAqtLP%2F5UXf64hGA0SGmKMoSQgSW84huNU8TwAWM7ptJch4cyNAOQnZ9nPt9j1B1bL2xuIMCjhjuC6PuXlBJYGMpuqaQjim60QwhGoCWK6w7uFqkgsJgCA33HlsqUHZCczWvVRX4%2FMXBTc0J0H%2BkjpDMOSz6b8GOqUBlOFYc8DUuPdI2eG5rODFeNH%2F6NSsYxr2RV8WbfRZQnvak4cwq%2FEl2FOk3wsap4I5JIeuiRW0U7SfBOT4NK1CpO%2BAo%2FRmKfNRccpRNexfeAfo4O3saJtukUuWNXVoLIQlHJjKDVcP2%2B6hfGFXJkU3YaBiWpjhg6pnSi4EaId9qryW0xNeVGYcU2Jf1hGgYMjtcYL54ceY7TLcwjtwkk07PZZIY%2FkQ&X-Amz-Signature=07e7700d546680d7fbb1fc58ec197843185a194b8ced78c12aa573ccb82c37d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOG2OBB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHfDOJfKYOadPTsSF2pJvsWJ9ihfx49mo74MZ2rGvRObAiEA0Tltt8%2FOyKDMGP1R4QGsPJ6TPAy7ZUXdego%2FkrrDfLwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwhaKgM2vpzNmQCdircA3%2FDC9Krv9CfxVCN4oJa6I7UbSTPNhvwNPwqg5TSdlKMccd%2FcVjt2W7hpint%2BtWI304DrLrk%2BQrN5WDcanbyXy88wV%2BRYM4V%2FU4lCfM8751PyjUhO7HpZo26WIQ46OUhxC48Otw46j0O8%2FdH9ecHcvpNwO0XemuG%2Bf%2F%2F9nvfFVgdK7ZYSVrdDtReHa91RP3NpPyf7rc4xeVYG%2FjlXVTFmhxbJWigx3tmM%2FZVk9DPrI8LbAEbLvyNkBothb7gNuLyuMLccnrO4fU3cQPBxYlpEEJ0DWkV03rgmR6doQYs1j16rhmtP3mgqpiPz14SQ%2FmKeL3oT%2FcqGa0fvixzeWVTfkxDGZqXVjKT2slDlE2oynhUGuKDyszkuNENRRs27VsNko8mK%2BYp9DpyAe02BxI9FHy%2BdpbD%2B%2BVWOpyUEqoiYQobixMECxbQSBJzk1mSE1k4dsdzu%2FpSBgYjWggPAsMr%2FInz3fv6aYdc%2Fv804tAqtLP%2F5UXf64hGA0SGmKMoSQgSW84huNU8TwAWM7ptJch4cyNAOQnZ9nPt9j1B1bL2xuIMCjhjuC6PuXlBJYGMpuqaQjim60QwhGoCWK6w7uFqkgsJgCA33HlsqUHZCczWvVRX4%2FMXBTc0J0H%2BkjpDMOSz6b8GOqUBlOFYc8DUuPdI2eG5rODFeNH%2F6NSsYxr2RV8WbfRZQnvak4cwq%2FEl2FOk3wsap4I5JIeuiRW0U7SfBOT4NK1CpO%2BAo%2FRmKfNRccpRNexfeAfo4O3saJtukUuWNXVoLIQlHJjKDVcP2%2B6hfGFXJkU3YaBiWpjhg6pnSi4EaId9qryW0xNeVGYcU2Jf1hGgYMjtcYL54ceY7TLcwjtwkk07PZZIY%2FkQ&X-Amz-Signature=6f0d14881e34eb931f40f4b69a1f34aecea03a22bd07f65cafb17aed7cafb2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
