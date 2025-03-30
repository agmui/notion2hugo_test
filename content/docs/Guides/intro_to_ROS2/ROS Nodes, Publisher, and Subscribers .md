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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXTXQNO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCCaWjc3oiCpyFvWlRHtCL5G0d7LekV4bTLqzh6u7VisAIgeYSvSUopxCuV2N%2BJyu0%2FxZnRj64w1KAo361N8nNIrN0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEZd6FTOtSoCkkUGCrcA6mDZMvUE17kT2inBcLon%2B3TorPrSxap%2FaS%2FS7r0cV8PwDl7qJtbdBFE5A5vKOFFfeVQvrm4eMzb7r7TGthxMVkZ91LXDWc6pDP18fOeBFi6lsuOdkDfzVG3cUJgLi%2BvTcBfaG9SoeK%2BulwYexvAe1We2Oo9J%2F6ZKilJw9DeTD7rGnKcYrGmXkvToAUjL33uzFXJoqeZbfZpk31XwX368ipm7FtvykRW29OCQGtAliRmgH3t9S%2F29ij8X6QeD6lAfFc7fffuAbAJnP55ft8CpdDxqBmHHxn5dIOZSYCaP1l%2B%2BcARB%2BvG8fK4QeYQ5pJlt4p9or9llC0c2ULXg0fPGiwzomVYQ1vuYPRiIkoIzGvb93YIyqwFiIQGrbBLOFdwDuSMUsE7mRJ8%2B3IAMLdobB%2Fy7JCrnT2OKz6VOhjJ4uVnaRIiK5%2BY6LQLp%2FHpaJ1Si7dPBB9tkYHHlTGL2lQyJFLbNN9Fq6hy%2FSh2owbiXohkWu%2FBcpNxwP4fQ%2BUw%2F6kdPvr%2FziApxeK4SU99ortwIjXxt6P%2FJNl3dKBkK31nlwpYH%2Fk9D78nrR3sqEP2l4LztUfHkekuxzdO5sAwkn4mOgvUrDKWTHMC2bTo6KcozNNm4Kqnq2OAOrjTNT9GMIL%2Fob8GOqUBDGROtauQd2dKaUNjC3FzdMK0jHzurMJSBrxDxNGRiUUr1dA0np5gqcROgOq%2FoweFGDIKY75r%2FpA5XtduwCRHx6AI4m6VCZ8PT9vSbNO2CTeF82JMxqoYnFVnb27Gr9AaktYqWlfZK1u6Iffuaz4PxXtQm890gyMSw6AolaG6p04vAYBV7ScEGPjbVBOp4YlDHHWzFCXPqhmBzsYU%2BMIo14zfhuM%2F&X-Amz-Signature=7e2616586a7f6aa7a399915f636425848f42cb1f72b6ab84b780626aa5d34909&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXTXQNO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCCaWjc3oiCpyFvWlRHtCL5G0d7LekV4bTLqzh6u7VisAIgeYSvSUopxCuV2N%2BJyu0%2FxZnRj64w1KAo361N8nNIrN0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEZd6FTOtSoCkkUGCrcA6mDZMvUE17kT2inBcLon%2B3TorPrSxap%2FaS%2FS7r0cV8PwDl7qJtbdBFE5A5vKOFFfeVQvrm4eMzb7r7TGthxMVkZ91LXDWc6pDP18fOeBFi6lsuOdkDfzVG3cUJgLi%2BvTcBfaG9SoeK%2BulwYexvAe1We2Oo9J%2F6ZKilJw9DeTD7rGnKcYrGmXkvToAUjL33uzFXJoqeZbfZpk31XwX368ipm7FtvykRW29OCQGtAliRmgH3t9S%2F29ij8X6QeD6lAfFc7fffuAbAJnP55ft8CpdDxqBmHHxn5dIOZSYCaP1l%2B%2BcARB%2BvG8fK4QeYQ5pJlt4p9or9llC0c2ULXg0fPGiwzomVYQ1vuYPRiIkoIzGvb93YIyqwFiIQGrbBLOFdwDuSMUsE7mRJ8%2B3IAMLdobB%2Fy7JCrnT2OKz6VOhjJ4uVnaRIiK5%2BY6LQLp%2FHpaJ1Si7dPBB9tkYHHlTGL2lQyJFLbNN9Fq6hy%2FSh2owbiXohkWu%2FBcpNxwP4fQ%2BUw%2F6kdPvr%2FziApxeK4SU99ortwIjXxt6P%2FJNl3dKBkK31nlwpYH%2Fk9D78nrR3sqEP2l4LztUfHkekuxzdO5sAwkn4mOgvUrDKWTHMC2bTo6KcozNNm4Kqnq2OAOrjTNT9GMIL%2Fob8GOqUBDGROtauQd2dKaUNjC3FzdMK0jHzurMJSBrxDxNGRiUUr1dA0np5gqcROgOq%2FoweFGDIKY75r%2FpA5XtduwCRHx6AI4m6VCZ8PT9vSbNO2CTeF82JMxqoYnFVnb27Gr9AaktYqWlfZK1u6Iffuaz4PxXtQm890gyMSw6AolaG6p04vAYBV7ScEGPjbVBOp4YlDHHWzFCXPqhmBzsYU%2BMIo14zfhuM%2F&X-Amz-Signature=97a866034ae3ac9323f44843ec3d0269631e1102f831ca44c077ed0c119bd8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXTXQNO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCCaWjc3oiCpyFvWlRHtCL5G0d7LekV4bTLqzh6u7VisAIgeYSvSUopxCuV2N%2BJyu0%2FxZnRj64w1KAo361N8nNIrN0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEZd6FTOtSoCkkUGCrcA6mDZMvUE17kT2inBcLon%2B3TorPrSxap%2FaS%2FS7r0cV8PwDl7qJtbdBFE5A5vKOFFfeVQvrm4eMzb7r7TGthxMVkZ91LXDWc6pDP18fOeBFi6lsuOdkDfzVG3cUJgLi%2BvTcBfaG9SoeK%2BulwYexvAe1We2Oo9J%2F6ZKilJw9DeTD7rGnKcYrGmXkvToAUjL33uzFXJoqeZbfZpk31XwX368ipm7FtvykRW29OCQGtAliRmgH3t9S%2F29ij8X6QeD6lAfFc7fffuAbAJnP55ft8CpdDxqBmHHxn5dIOZSYCaP1l%2B%2BcARB%2BvG8fK4QeYQ5pJlt4p9or9llC0c2ULXg0fPGiwzomVYQ1vuYPRiIkoIzGvb93YIyqwFiIQGrbBLOFdwDuSMUsE7mRJ8%2B3IAMLdobB%2Fy7JCrnT2OKz6VOhjJ4uVnaRIiK5%2BY6LQLp%2FHpaJ1Si7dPBB9tkYHHlTGL2lQyJFLbNN9Fq6hy%2FSh2owbiXohkWu%2FBcpNxwP4fQ%2BUw%2F6kdPvr%2FziApxeK4SU99ortwIjXxt6P%2FJNl3dKBkK31nlwpYH%2Fk9D78nrR3sqEP2l4LztUfHkekuxzdO5sAwkn4mOgvUrDKWTHMC2bTo6KcozNNm4Kqnq2OAOrjTNT9GMIL%2Fob8GOqUBDGROtauQd2dKaUNjC3FzdMK0jHzurMJSBrxDxNGRiUUr1dA0np5gqcROgOq%2FoweFGDIKY75r%2FpA5XtduwCRHx6AI4m6VCZ8PT9vSbNO2CTeF82JMxqoYnFVnb27Gr9AaktYqWlfZK1u6Iffuaz4PxXtQm890gyMSw6AolaG6p04vAYBV7ScEGPjbVBOp4YlDHHWzFCXPqhmBzsYU%2BMIo14zfhuM%2F&X-Amz-Signature=12e3e3a7dbf80ff3f6d6767891d9bafcc28562ba491aa1c0e8b679b57911b091&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXTXQNO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCCaWjc3oiCpyFvWlRHtCL5G0d7LekV4bTLqzh6u7VisAIgeYSvSUopxCuV2N%2BJyu0%2FxZnRj64w1KAo361N8nNIrN0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEZd6FTOtSoCkkUGCrcA6mDZMvUE17kT2inBcLon%2B3TorPrSxap%2FaS%2FS7r0cV8PwDl7qJtbdBFE5A5vKOFFfeVQvrm4eMzb7r7TGthxMVkZ91LXDWc6pDP18fOeBFi6lsuOdkDfzVG3cUJgLi%2BvTcBfaG9SoeK%2BulwYexvAe1We2Oo9J%2F6ZKilJw9DeTD7rGnKcYrGmXkvToAUjL33uzFXJoqeZbfZpk31XwX368ipm7FtvykRW29OCQGtAliRmgH3t9S%2F29ij8X6QeD6lAfFc7fffuAbAJnP55ft8CpdDxqBmHHxn5dIOZSYCaP1l%2B%2BcARB%2BvG8fK4QeYQ5pJlt4p9or9llC0c2ULXg0fPGiwzomVYQ1vuYPRiIkoIzGvb93YIyqwFiIQGrbBLOFdwDuSMUsE7mRJ8%2B3IAMLdobB%2Fy7JCrnT2OKz6VOhjJ4uVnaRIiK5%2BY6LQLp%2FHpaJ1Si7dPBB9tkYHHlTGL2lQyJFLbNN9Fq6hy%2FSh2owbiXohkWu%2FBcpNxwP4fQ%2BUw%2F6kdPvr%2FziApxeK4SU99ortwIjXxt6P%2FJNl3dKBkK31nlwpYH%2Fk9D78nrR3sqEP2l4LztUfHkekuxzdO5sAwkn4mOgvUrDKWTHMC2bTo6KcozNNm4Kqnq2OAOrjTNT9GMIL%2Fob8GOqUBDGROtauQd2dKaUNjC3FzdMK0jHzurMJSBrxDxNGRiUUr1dA0np5gqcROgOq%2FoweFGDIKY75r%2FpA5XtduwCRHx6AI4m6VCZ8PT9vSbNO2CTeF82JMxqoYnFVnb27Gr9AaktYqWlfZK1u6Iffuaz4PxXtQm890gyMSw6AolaG6p04vAYBV7ScEGPjbVBOp4YlDHHWzFCXPqhmBzsYU%2BMIo14zfhuM%2F&X-Amz-Signature=89c031356e95b736de3bfc3aa860fcab524a3be8855db7f24d3a1a2009ace806&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXTXQNO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCCaWjc3oiCpyFvWlRHtCL5G0d7LekV4bTLqzh6u7VisAIgeYSvSUopxCuV2N%2BJyu0%2FxZnRj64w1KAo361N8nNIrN0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEZd6FTOtSoCkkUGCrcA6mDZMvUE17kT2inBcLon%2B3TorPrSxap%2FaS%2FS7r0cV8PwDl7qJtbdBFE5A5vKOFFfeVQvrm4eMzb7r7TGthxMVkZ91LXDWc6pDP18fOeBFi6lsuOdkDfzVG3cUJgLi%2BvTcBfaG9SoeK%2BulwYexvAe1We2Oo9J%2F6ZKilJw9DeTD7rGnKcYrGmXkvToAUjL33uzFXJoqeZbfZpk31XwX368ipm7FtvykRW29OCQGtAliRmgH3t9S%2F29ij8X6QeD6lAfFc7fffuAbAJnP55ft8CpdDxqBmHHxn5dIOZSYCaP1l%2B%2BcARB%2BvG8fK4QeYQ5pJlt4p9or9llC0c2ULXg0fPGiwzomVYQ1vuYPRiIkoIzGvb93YIyqwFiIQGrbBLOFdwDuSMUsE7mRJ8%2B3IAMLdobB%2Fy7JCrnT2OKz6VOhjJ4uVnaRIiK5%2BY6LQLp%2FHpaJ1Si7dPBB9tkYHHlTGL2lQyJFLbNN9Fq6hy%2FSh2owbiXohkWu%2FBcpNxwP4fQ%2BUw%2F6kdPvr%2FziApxeK4SU99ortwIjXxt6P%2FJNl3dKBkK31nlwpYH%2Fk9D78nrR3sqEP2l4LztUfHkekuxzdO5sAwkn4mOgvUrDKWTHMC2bTo6KcozNNm4Kqnq2OAOrjTNT9GMIL%2Fob8GOqUBDGROtauQd2dKaUNjC3FzdMK0jHzurMJSBrxDxNGRiUUr1dA0np5gqcROgOq%2FoweFGDIKY75r%2FpA5XtduwCRHx6AI4m6VCZ8PT9vSbNO2CTeF82JMxqoYnFVnb27Gr9AaktYqWlfZK1u6Iffuaz4PxXtQm890gyMSw6AolaG6p04vAYBV7ScEGPjbVBOp4YlDHHWzFCXPqhmBzsYU%2BMIo14zfhuM%2F&X-Amz-Signature=34e0da5113ac92b8fb8567d5f01be929a0dcf6c65c58998403cafa0b0ccf8162&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXTXQNO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCCaWjc3oiCpyFvWlRHtCL5G0d7LekV4bTLqzh6u7VisAIgeYSvSUopxCuV2N%2BJyu0%2FxZnRj64w1KAo361N8nNIrN0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEZd6FTOtSoCkkUGCrcA6mDZMvUE17kT2inBcLon%2B3TorPrSxap%2FaS%2FS7r0cV8PwDl7qJtbdBFE5A5vKOFFfeVQvrm4eMzb7r7TGthxMVkZ91LXDWc6pDP18fOeBFi6lsuOdkDfzVG3cUJgLi%2BvTcBfaG9SoeK%2BulwYexvAe1We2Oo9J%2F6ZKilJw9DeTD7rGnKcYrGmXkvToAUjL33uzFXJoqeZbfZpk31XwX368ipm7FtvykRW29OCQGtAliRmgH3t9S%2F29ij8X6QeD6lAfFc7fffuAbAJnP55ft8CpdDxqBmHHxn5dIOZSYCaP1l%2B%2BcARB%2BvG8fK4QeYQ5pJlt4p9or9llC0c2ULXg0fPGiwzomVYQ1vuYPRiIkoIzGvb93YIyqwFiIQGrbBLOFdwDuSMUsE7mRJ8%2B3IAMLdobB%2Fy7JCrnT2OKz6VOhjJ4uVnaRIiK5%2BY6LQLp%2FHpaJ1Si7dPBB9tkYHHlTGL2lQyJFLbNN9Fq6hy%2FSh2owbiXohkWu%2FBcpNxwP4fQ%2BUw%2F6kdPvr%2FziApxeK4SU99ortwIjXxt6P%2FJNl3dKBkK31nlwpYH%2Fk9D78nrR3sqEP2l4LztUfHkekuxzdO5sAwkn4mOgvUrDKWTHMC2bTo6KcozNNm4Kqnq2OAOrjTNT9GMIL%2Fob8GOqUBDGROtauQd2dKaUNjC3FzdMK0jHzurMJSBrxDxNGRiUUr1dA0np5gqcROgOq%2FoweFGDIKY75r%2FpA5XtduwCRHx6AI4m6VCZ8PT9vSbNO2CTeF82JMxqoYnFVnb27Gr9AaktYqWlfZK1u6Iffuaz4PxXtQm890gyMSw6AolaG6p04vAYBV7ScEGPjbVBOp4YlDHHWzFCXPqhmBzsYU%2BMIo14zfhuM%2F&X-Amz-Signature=e5a1c40dd27a4a65c34be6ab0c3473aa2096cdce219ccdb4d995f41ed91e58d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXTXQNO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCCaWjc3oiCpyFvWlRHtCL5G0d7LekV4bTLqzh6u7VisAIgeYSvSUopxCuV2N%2BJyu0%2FxZnRj64w1KAo361N8nNIrN0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEZd6FTOtSoCkkUGCrcA6mDZMvUE17kT2inBcLon%2B3TorPrSxap%2FaS%2FS7r0cV8PwDl7qJtbdBFE5A5vKOFFfeVQvrm4eMzb7r7TGthxMVkZ91LXDWc6pDP18fOeBFi6lsuOdkDfzVG3cUJgLi%2BvTcBfaG9SoeK%2BulwYexvAe1We2Oo9J%2F6ZKilJw9DeTD7rGnKcYrGmXkvToAUjL33uzFXJoqeZbfZpk31XwX368ipm7FtvykRW29OCQGtAliRmgH3t9S%2F29ij8X6QeD6lAfFc7fffuAbAJnP55ft8CpdDxqBmHHxn5dIOZSYCaP1l%2B%2BcARB%2BvG8fK4QeYQ5pJlt4p9or9llC0c2ULXg0fPGiwzomVYQ1vuYPRiIkoIzGvb93YIyqwFiIQGrbBLOFdwDuSMUsE7mRJ8%2B3IAMLdobB%2Fy7JCrnT2OKz6VOhjJ4uVnaRIiK5%2BY6LQLp%2FHpaJ1Si7dPBB9tkYHHlTGL2lQyJFLbNN9Fq6hy%2FSh2owbiXohkWu%2FBcpNxwP4fQ%2BUw%2F6kdPvr%2FziApxeK4SU99ortwIjXxt6P%2FJNl3dKBkK31nlwpYH%2Fk9D78nrR3sqEP2l4LztUfHkekuxzdO5sAwkn4mOgvUrDKWTHMC2bTo6KcozNNm4Kqnq2OAOrjTNT9GMIL%2Fob8GOqUBDGROtauQd2dKaUNjC3FzdMK0jHzurMJSBrxDxNGRiUUr1dA0np5gqcROgOq%2FoweFGDIKY75r%2FpA5XtduwCRHx6AI4m6VCZ8PT9vSbNO2CTeF82JMxqoYnFVnb27Gr9AaktYqWlfZK1u6Iffuaz4PxXtQm890gyMSw6AolaG6p04vAYBV7ScEGPjbVBOp4YlDHHWzFCXPqhmBzsYU%2BMIo14zfhuM%2F&X-Amz-Signature=6e27bc66a2590a9eb02d334dc0ad3cd4e6a4b7e6805aa7a1970b7cacf8e7e936&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXTXQNO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCCaWjc3oiCpyFvWlRHtCL5G0d7LekV4bTLqzh6u7VisAIgeYSvSUopxCuV2N%2BJyu0%2FxZnRj64w1KAo361N8nNIrN0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEZd6FTOtSoCkkUGCrcA6mDZMvUE17kT2inBcLon%2B3TorPrSxap%2FaS%2FS7r0cV8PwDl7qJtbdBFE5A5vKOFFfeVQvrm4eMzb7r7TGthxMVkZ91LXDWc6pDP18fOeBFi6lsuOdkDfzVG3cUJgLi%2BvTcBfaG9SoeK%2BulwYexvAe1We2Oo9J%2F6ZKilJw9DeTD7rGnKcYrGmXkvToAUjL33uzFXJoqeZbfZpk31XwX368ipm7FtvykRW29OCQGtAliRmgH3t9S%2F29ij8X6QeD6lAfFc7fffuAbAJnP55ft8CpdDxqBmHHxn5dIOZSYCaP1l%2B%2BcARB%2BvG8fK4QeYQ5pJlt4p9or9llC0c2ULXg0fPGiwzomVYQ1vuYPRiIkoIzGvb93YIyqwFiIQGrbBLOFdwDuSMUsE7mRJ8%2B3IAMLdobB%2Fy7JCrnT2OKz6VOhjJ4uVnaRIiK5%2BY6LQLp%2FHpaJ1Si7dPBB9tkYHHlTGL2lQyJFLbNN9Fq6hy%2FSh2owbiXohkWu%2FBcpNxwP4fQ%2BUw%2F6kdPvr%2FziApxeK4SU99ortwIjXxt6P%2FJNl3dKBkK31nlwpYH%2Fk9D78nrR3sqEP2l4LztUfHkekuxzdO5sAwkn4mOgvUrDKWTHMC2bTo6KcozNNm4Kqnq2OAOrjTNT9GMIL%2Fob8GOqUBDGROtauQd2dKaUNjC3FzdMK0jHzurMJSBrxDxNGRiUUr1dA0np5gqcROgOq%2FoweFGDIKY75r%2FpA5XtduwCRHx6AI4m6VCZ8PT9vSbNO2CTeF82JMxqoYnFVnb27Gr9AaktYqWlfZK1u6Iffuaz4PxXtQm890gyMSw6AolaG6p04vAYBV7ScEGPjbVBOp4YlDHHWzFCXPqhmBzsYU%2BMIo14zfhuM%2F&X-Amz-Signature=2073267741a916781bb0da960984968ae8646c93f248419eebe25c2247f5e323&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
