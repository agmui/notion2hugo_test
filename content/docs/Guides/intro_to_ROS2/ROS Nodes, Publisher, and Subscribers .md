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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLFDVMG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIByK0vYtqyoyTJbceWBXsGcFWweQRFkCpbohfdzVd307AiEAvpl625pI9GKzv%2BdUAgGmvu1%2FPcAUSm%2FLyMwDgKKuf1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOgtkE97YE1URB5U2SrcA9wTMTE3hG1O0YEcQD4WNEp04d7cP5PEfxIrbJNp%2BYR4EKI2zS7gtZV10RMLf%2B1HmIfeGnDAfvvjOTBNosfVdql%2BaAuidqO69Kx2dfWYbOZ32cYMrVYcjbi5PEWrWXU%2FLVQ11EhqEdksh%2Fc6NZ2YuRO3SBu7w4ImTKwcqVhiOPgNtC%2BuPj%2B0z9XjDn6S2gsGA1RFX%2FSw7dfAL92BRScLBYjWdnoyIhdacbHLtp3%2BRKyxDB%2BaM5DD4mv6kO%2BXdrrFOReYcAMLBenu49FFOsbuwQHJsxB5LDDarlJpLQQYSoom%2FJIflpqsxVlGIn1wC2l9csJJnGZD9rXYG3Du8Sb%2FbL%2Bn5ke1iWmnZ2Oz%2B8MR27LG1s%2FXUUYJvs1jrf%2FOpedtD8WuYPvS4TWV30maJRDqo08VMjjFSQsYb%2BITrt2x3HWJHyamgcRCQTEENJhgbRlv7CuVpzDF%2BcXAKPTbUAH9j%2BsbDE68OPGh%2FnfYTjPitMzl5JYAGf%2BBtEahjqBjnpm3hzt0jSQ4Fw66c%2F0iN1mXcYCA3JkLwLkeQSjhVuJpxqNvyryvv%2B8S2GGVZ9letkFmlow5QERTT8Gzt2YClG7ePMgvnGb%2B1WnTXzSwmn7zC3T3Ng0tocC23qRXPrNsMNax2MMGOqUBkmvPa6sbsAxMta7w2mmEKapkpjicFczCz%2F2k8fjD1f0CKcnrq%2FtYDj5vet0Ym%2FQ4YdECeAnKIxmriyneQampHM%2FZsSLE6DpwBoyxYTgQjhhYNvSQgQVoqckL%2BN4znPeqfaU0hI1pfoB499TpXEb9f4kQH1dI0THtlEAhAO9l9rXZShQzd0tZQdMS7XAS3K4YtSrlnH%2Buc986pfVaUq%2BivjREwGLZ&X-Amz-Signature=eb13bdde8df4a989eb55654e8670c19265f135c2e3ed3999ca0a80c9fd9ba812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLFDVMG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIByK0vYtqyoyTJbceWBXsGcFWweQRFkCpbohfdzVd307AiEAvpl625pI9GKzv%2BdUAgGmvu1%2FPcAUSm%2FLyMwDgKKuf1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOgtkE97YE1URB5U2SrcA9wTMTE3hG1O0YEcQD4WNEp04d7cP5PEfxIrbJNp%2BYR4EKI2zS7gtZV10RMLf%2B1HmIfeGnDAfvvjOTBNosfVdql%2BaAuidqO69Kx2dfWYbOZ32cYMrVYcjbi5PEWrWXU%2FLVQ11EhqEdksh%2Fc6NZ2YuRO3SBu7w4ImTKwcqVhiOPgNtC%2BuPj%2B0z9XjDn6S2gsGA1RFX%2FSw7dfAL92BRScLBYjWdnoyIhdacbHLtp3%2BRKyxDB%2BaM5DD4mv6kO%2BXdrrFOReYcAMLBenu49FFOsbuwQHJsxB5LDDarlJpLQQYSoom%2FJIflpqsxVlGIn1wC2l9csJJnGZD9rXYG3Du8Sb%2FbL%2Bn5ke1iWmnZ2Oz%2B8MR27LG1s%2FXUUYJvs1jrf%2FOpedtD8WuYPvS4TWV30maJRDqo08VMjjFSQsYb%2BITrt2x3HWJHyamgcRCQTEENJhgbRlv7CuVpzDF%2BcXAKPTbUAH9j%2BsbDE68OPGh%2FnfYTjPitMzl5JYAGf%2BBtEahjqBjnpm3hzt0jSQ4Fw66c%2F0iN1mXcYCA3JkLwLkeQSjhVuJpxqNvyryvv%2B8S2GGVZ9letkFmlow5QERTT8Gzt2YClG7ePMgvnGb%2B1WnTXzSwmn7zC3T3Ng0tocC23qRXPrNsMNax2MMGOqUBkmvPa6sbsAxMta7w2mmEKapkpjicFczCz%2F2k8fjD1f0CKcnrq%2FtYDj5vet0Ym%2FQ4YdECeAnKIxmriyneQampHM%2FZsSLE6DpwBoyxYTgQjhhYNvSQgQVoqckL%2BN4znPeqfaU0hI1pfoB499TpXEb9f4kQH1dI0THtlEAhAO9l9rXZShQzd0tZQdMS7XAS3K4YtSrlnH%2Buc986pfVaUq%2BivjREwGLZ&X-Amz-Signature=25fc5fbfecd5d9c96d07c763622a15854a6ce20ac3b1886c8345ef92eb5c2a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLFDVMG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIByK0vYtqyoyTJbceWBXsGcFWweQRFkCpbohfdzVd307AiEAvpl625pI9GKzv%2BdUAgGmvu1%2FPcAUSm%2FLyMwDgKKuf1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOgtkE97YE1URB5U2SrcA9wTMTE3hG1O0YEcQD4WNEp04d7cP5PEfxIrbJNp%2BYR4EKI2zS7gtZV10RMLf%2B1HmIfeGnDAfvvjOTBNosfVdql%2BaAuidqO69Kx2dfWYbOZ32cYMrVYcjbi5PEWrWXU%2FLVQ11EhqEdksh%2Fc6NZ2YuRO3SBu7w4ImTKwcqVhiOPgNtC%2BuPj%2B0z9XjDn6S2gsGA1RFX%2FSw7dfAL92BRScLBYjWdnoyIhdacbHLtp3%2BRKyxDB%2BaM5DD4mv6kO%2BXdrrFOReYcAMLBenu49FFOsbuwQHJsxB5LDDarlJpLQQYSoom%2FJIflpqsxVlGIn1wC2l9csJJnGZD9rXYG3Du8Sb%2FbL%2Bn5ke1iWmnZ2Oz%2B8MR27LG1s%2FXUUYJvs1jrf%2FOpedtD8WuYPvS4TWV30maJRDqo08VMjjFSQsYb%2BITrt2x3HWJHyamgcRCQTEENJhgbRlv7CuVpzDF%2BcXAKPTbUAH9j%2BsbDE68OPGh%2FnfYTjPitMzl5JYAGf%2BBtEahjqBjnpm3hzt0jSQ4Fw66c%2F0iN1mXcYCA3JkLwLkeQSjhVuJpxqNvyryvv%2B8S2GGVZ9letkFmlow5QERTT8Gzt2YClG7ePMgvnGb%2B1WnTXzSwmn7zC3T3Ng0tocC23qRXPrNsMNax2MMGOqUBkmvPa6sbsAxMta7w2mmEKapkpjicFczCz%2F2k8fjD1f0CKcnrq%2FtYDj5vet0Ym%2FQ4YdECeAnKIxmriyneQampHM%2FZsSLE6DpwBoyxYTgQjhhYNvSQgQVoqckL%2BN4znPeqfaU0hI1pfoB499TpXEb9f4kQH1dI0THtlEAhAO9l9rXZShQzd0tZQdMS7XAS3K4YtSrlnH%2Buc986pfVaUq%2BivjREwGLZ&X-Amz-Signature=f1ba48e949cfd233a440ad07bc022034518368b69c2f64b4af8dd123c8e4308c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLFDVMG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIByK0vYtqyoyTJbceWBXsGcFWweQRFkCpbohfdzVd307AiEAvpl625pI9GKzv%2BdUAgGmvu1%2FPcAUSm%2FLyMwDgKKuf1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOgtkE97YE1URB5U2SrcA9wTMTE3hG1O0YEcQD4WNEp04d7cP5PEfxIrbJNp%2BYR4EKI2zS7gtZV10RMLf%2B1HmIfeGnDAfvvjOTBNosfVdql%2BaAuidqO69Kx2dfWYbOZ32cYMrVYcjbi5PEWrWXU%2FLVQ11EhqEdksh%2Fc6NZ2YuRO3SBu7w4ImTKwcqVhiOPgNtC%2BuPj%2B0z9XjDn6S2gsGA1RFX%2FSw7dfAL92BRScLBYjWdnoyIhdacbHLtp3%2BRKyxDB%2BaM5DD4mv6kO%2BXdrrFOReYcAMLBenu49FFOsbuwQHJsxB5LDDarlJpLQQYSoom%2FJIflpqsxVlGIn1wC2l9csJJnGZD9rXYG3Du8Sb%2FbL%2Bn5ke1iWmnZ2Oz%2B8MR27LG1s%2FXUUYJvs1jrf%2FOpedtD8WuYPvS4TWV30maJRDqo08VMjjFSQsYb%2BITrt2x3HWJHyamgcRCQTEENJhgbRlv7CuVpzDF%2BcXAKPTbUAH9j%2BsbDE68OPGh%2FnfYTjPitMzl5JYAGf%2BBtEahjqBjnpm3hzt0jSQ4Fw66c%2F0iN1mXcYCA3JkLwLkeQSjhVuJpxqNvyryvv%2B8S2GGVZ9letkFmlow5QERTT8Gzt2YClG7ePMgvnGb%2B1WnTXzSwmn7zC3T3Ng0tocC23qRXPrNsMNax2MMGOqUBkmvPa6sbsAxMta7w2mmEKapkpjicFczCz%2F2k8fjD1f0CKcnrq%2FtYDj5vet0Ym%2FQ4YdECeAnKIxmriyneQampHM%2FZsSLE6DpwBoyxYTgQjhhYNvSQgQVoqckL%2BN4znPeqfaU0hI1pfoB499TpXEb9f4kQH1dI0THtlEAhAO9l9rXZShQzd0tZQdMS7XAS3K4YtSrlnH%2Buc986pfVaUq%2BivjREwGLZ&X-Amz-Signature=af7110c91cbe6a7175084d3c9b0067e6fd7ec8301d320f8b714c621dca36f144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLFDVMG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIByK0vYtqyoyTJbceWBXsGcFWweQRFkCpbohfdzVd307AiEAvpl625pI9GKzv%2BdUAgGmvu1%2FPcAUSm%2FLyMwDgKKuf1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOgtkE97YE1URB5U2SrcA9wTMTE3hG1O0YEcQD4WNEp04d7cP5PEfxIrbJNp%2BYR4EKI2zS7gtZV10RMLf%2B1HmIfeGnDAfvvjOTBNosfVdql%2BaAuidqO69Kx2dfWYbOZ32cYMrVYcjbi5PEWrWXU%2FLVQ11EhqEdksh%2Fc6NZ2YuRO3SBu7w4ImTKwcqVhiOPgNtC%2BuPj%2B0z9XjDn6S2gsGA1RFX%2FSw7dfAL92BRScLBYjWdnoyIhdacbHLtp3%2BRKyxDB%2BaM5DD4mv6kO%2BXdrrFOReYcAMLBenu49FFOsbuwQHJsxB5LDDarlJpLQQYSoom%2FJIflpqsxVlGIn1wC2l9csJJnGZD9rXYG3Du8Sb%2FbL%2Bn5ke1iWmnZ2Oz%2B8MR27LG1s%2FXUUYJvs1jrf%2FOpedtD8WuYPvS4TWV30maJRDqo08VMjjFSQsYb%2BITrt2x3HWJHyamgcRCQTEENJhgbRlv7CuVpzDF%2BcXAKPTbUAH9j%2BsbDE68OPGh%2FnfYTjPitMzl5JYAGf%2BBtEahjqBjnpm3hzt0jSQ4Fw66c%2F0iN1mXcYCA3JkLwLkeQSjhVuJpxqNvyryvv%2B8S2GGVZ9letkFmlow5QERTT8Gzt2YClG7ePMgvnGb%2B1WnTXzSwmn7zC3T3Ng0tocC23qRXPrNsMNax2MMGOqUBkmvPa6sbsAxMta7w2mmEKapkpjicFczCz%2F2k8fjD1f0CKcnrq%2FtYDj5vet0Ym%2FQ4YdECeAnKIxmriyneQampHM%2FZsSLE6DpwBoyxYTgQjhhYNvSQgQVoqckL%2BN4znPeqfaU0hI1pfoB499TpXEb9f4kQH1dI0THtlEAhAO9l9rXZShQzd0tZQdMS7XAS3K4YtSrlnH%2Buc986pfVaUq%2BivjREwGLZ&X-Amz-Signature=7de38b52f99a8c590d84be6a1e1c3ff0b3101ee2268d5cbca831ec8bafc93114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLFDVMG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIByK0vYtqyoyTJbceWBXsGcFWweQRFkCpbohfdzVd307AiEAvpl625pI9GKzv%2BdUAgGmvu1%2FPcAUSm%2FLyMwDgKKuf1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOgtkE97YE1URB5U2SrcA9wTMTE3hG1O0YEcQD4WNEp04d7cP5PEfxIrbJNp%2BYR4EKI2zS7gtZV10RMLf%2B1HmIfeGnDAfvvjOTBNosfVdql%2BaAuidqO69Kx2dfWYbOZ32cYMrVYcjbi5PEWrWXU%2FLVQ11EhqEdksh%2Fc6NZ2YuRO3SBu7w4ImTKwcqVhiOPgNtC%2BuPj%2B0z9XjDn6S2gsGA1RFX%2FSw7dfAL92BRScLBYjWdnoyIhdacbHLtp3%2BRKyxDB%2BaM5DD4mv6kO%2BXdrrFOReYcAMLBenu49FFOsbuwQHJsxB5LDDarlJpLQQYSoom%2FJIflpqsxVlGIn1wC2l9csJJnGZD9rXYG3Du8Sb%2FbL%2Bn5ke1iWmnZ2Oz%2B8MR27LG1s%2FXUUYJvs1jrf%2FOpedtD8WuYPvS4TWV30maJRDqo08VMjjFSQsYb%2BITrt2x3HWJHyamgcRCQTEENJhgbRlv7CuVpzDF%2BcXAKPTbUAH9j%2BsbDE68OPGh%2FnfYTjPitMzl5JYAGf%2BBtEahjqBjnpm3hzt0jSQ4Fw66c%2F0iN1mXcYCA3JkLwLkeQSjhVuJpxqNvyryvv%2B8S2GGVZ9letkFmlow5QERTT8Gzt2YClG7ePMgvnGb%2B1WnTXzSwmn7zC3T3Ng0tocC23qRXPrNsMNax2MMGOqUBkmvPa6sbsAxMta7w2mmEKapkpjicFczCz%2F2k8fjD1f0CKcnrq%2FtYDj5vet0Ym%2FQ4YdECeAnKIxmriyneQampHM%2FZsSLE6DpwBoyxYTgQjhhYNvSQgQVoqckL%2BN4znPeqfaU0hI1pfoB499TpXEb9f4kQH1dI0THtlEAhAO9l9rXZShQzd0tZQdMS7XAS3K4YtSrlnH%2Buc986pfVaUq%2BivjREwGLZ&X-Amz-Signature=ad504fdf075e5b8d177dc8adde262175958f4bdb8579166a14b378059c6024d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLFDVMG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIByK0vYtqyoyTJbceWBXsGcFWweQRFkCpbohfdzVd307AiEAvpl625pI9GKzv%2BdUAgGmvu1%2FPcAUSm%2FLyMwDgKKuf1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOgtkE97YE1URB5U2SrcA9wTMTE3hG1O0YEcQD4WNEp04d7cP5PEfxIrbJNp%2BYR4EKI2zS7gtZV10RMLf%2B1HmIfeGnDAfvvjOTBNosfVdql%2BaAuidqO69Kx2dfWYbOZ32cYMrVYcjbi5PEWrWXU%2FLVQ11EhqEdksh%2Fc6NZ2YuRO3SBu7w4ImTKwcqVhiOPgNtC%2BuPj%2B0z9XjDn6S2gsGA1RFX%2FSw7dfAL92BRScLBYjWdnoyIhdacbHLtp3%2BRKyxDB%2BaM5DD4mv6kO%2BXdrrFOReYcAMLBenu49FFOsbuwQHJsxB5LDDarlJpLQQYSoom%2FJIflpqsxVlGIn1wC2l9csJJnGZD9rXYG3Du8Sb%2FbL%2Bn5ke1iWmnZ2Oz%2B8MR27LG1s%2FXUUYJvs1jrf%2FOpedtD8WuYPvS4TWV30maJRDqo08VMjjFSQsYb%2BITrt2x3HWJHyamgcRCQTEENJhgbRlv7CuVpzDF%2BcXAKPTbUAH9j%2BsbDE68OPGh%2FnfYTjPitMzl5JYAGf%2BBtEahjqBjnpm3hzt0jSQ4Fw66c%2F0iN1mXcYCA3JkLwLkeQSjhVuJpxqNvyryvv%2B8S2GGVZ9letkFmlow5QERTT8Gzt2YClG7ePMgvnGb%2B1WnTXzSwmn7zC3T3Ng0tocC23qRXPrNsMNax2MMGOqUBkmvPa6sbsAxMta7w2mmEKapkpjicFczCz%2F2k8fjD1f0CKcnrq%2FtYDj5vet0Ym%2FQ4YdECeAnKIxmriyneQampHM%2FZsSLE6DpwBoyxYTgQjhhYNvSQgQVoqckL%2BN4znPeqfaU0hI1pfoB499TpXEb9f4kQH1dI0THtlEAhAO9l9rXZShQzd0tZQdMS7XAS3K4YtSrlnH%2Buc986pfVaUq%2BivjREwGLZ&X-Amz-Signature=29cbadcb67bf2e16ce36e5acaec76821579aa7f89247da97e52a282fdb96ad73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLFDVMG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIByK0vYtqyoyTJbceWBXsGcFWweQRFkCpbohfdzVd307AiEAvpl625pI9GKzv%2BdUAgGmvu1%2FPcAUSm%2FLyMwDgKKuf1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOgtkE97YE1URB5U2SrcA9wTMTE3hG1O0YEcQD4WNEp04d7cP5PEfxIrbJNp%2BYR4EKI2zS7gtZV10RMLf%2B1HmIfeGnDAfvvjOTBNosfVdql%2BaAuidqO69Kx2dfWYbOZ32cYMrVYcjbi5PEWrWXU%2FLVQ11EhqEdksh%2Fc6NZ2YuRO3SBu7w4ImTKwcqVhiOPgNtC%2BuPj%2B0z9XjDn6S2gsGA1RFX%2FSw7dfAL92BRScLBYjWdnoyIhdacbHLtp3%2BRKyxDB%2BaM5DD4mv6kO%2BXdrrFOReYcAMLBenu49FFOsbuwQHJsxB5LDDarlJpLQQYSoom%2FJIflpqsxVlGIn1wC2l9csJJnGZD9rXYG3Du8Sb%2FbL%2Bn5ke1iWmnZ2Oz%2B8MR27LG1s%2FXUUYJvs1jrf%2FOpedtD8WuYPvS4TWV30maJRDqo08VMjjFSQsYb%2BITrt2x3HWJHyamgcRCQTEENJhgbRlv7CuVpzDF%2BcXAKPTbUAH9j%2BsbDE68OPGh%2FnfYTjPitMzl5JYAGf%2BBtEahjqBjnpm3hzt0jSQ4Fw66c%2F0iN1mXcYCA3JkLwLkeQSjhVuJpxqNvyryvv%2B8S2GGVZ9letkFmlow5QERTT8Gzt2YClG7ePMgvnGb%2B1WnTXzSwmn7zC3T3Ng0tocC23qRXPrNsMNax2MMGOqUBkmvPa6sbsAxMta7w2mmEKapkpjicFczCz%2F2k8fjD1f0CKcnrq%2FtYDj5vet0Ym%2FQ4YdECeAnKIxmriyneQampHM%2FZsSLE6DpwBoyxYTgQjhhYNvSQgQVoqckL%2BN4znPeqfaU0hI1pfoB499TpXEb9f4kQH1dI0THtlEAhAO9l9rXZShQzd0tZQdMS7XAS3K4YtSrlnH%2Buc986pfVaUq%2BivjREwGLZ&X-Amz-Signature=5c66c9fa42dffac4d76cfbb5e33483a9c14e06643742c713ea8aeaebd231630a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
