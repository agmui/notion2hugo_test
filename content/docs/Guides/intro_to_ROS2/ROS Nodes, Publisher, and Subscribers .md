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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675A5KHTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDHz5f9Tq8p5EhSA9FLbwFtupcaX9nv5Xysqwf4fargJwIhAOWeIt7Q0alsx95%2FJ86T5xwRbbeEfPfs7YDY9zaH2H2gKv8DCDEQABoMNjM3NDIzMTgzODA1Igwj4BG0mlPC%2FrPeE9Yq3APQHdLibhm%2FbtMKrfnis83GPoA0dvCu%2Fv4Ow4vxb%2BRgvWSNkf1sGy%2FFbXJloChlXYHiVRXJp6t72IYtKJ%2B%2F4Djr4o%2FFcBby68iRhVMbZkOy33PDQ%2Bc0Rl0BOqi5Z9fOyx3UgQbMewAZpsXX%2B0jZMPy7s0HvexuU82jgMGqyrbTnzndrjIN%2FYKLdpPhfChDlpHzc62m0RAsE8q0G7Jmbm9e8zGuvZM9tE8jS8A2zi1rBwv7kTI0VXMxgap1OfJ1VtSTUOiw6xAFtQ7aoaQjR5yXxIhyTN8KmP%2B6iD5tOI6FM3RETbqWpWcrh69GllkmXlkH1qxUXfgYIL41%2FDBDkkicg6MYdpwIU%2FnSNGixJuWi4QMdmQaxcOKdLDZUvNVZHTrfz6Csg2%2FSLXvpqzYAAIFi%2F1xZXW%2BC0TDvdT%2FcYaLfCBmQXlQPTfOjKdVVe3KTZzStM52djQ35EeMv1PW%2FiEsvH87cDsyGGwYx27K1BSG6IpJGpMU4A2xr1mlltla0zz5YX82Vf49uers3cilBi51uZUAiDsLO0SB0Ndx4uhyU2ZsHtBpdtC0XMJRPA1IMqYGsoEkPUnI34i%2FhO1zOFG36Q%2Bu47RrmrqfFUBKEN79bjpqGDxMHrZ3JQKUbw1DCysYnEBjqkAUGeKSBVwfqFD1eqt5B1Cv%2FtRt5TXZGBw52a9A3Lt5l0vOHBKk6KCWLaiUiNya9kjopJogE4J9%2F9iX9rNyhou1OlVYaWbLKcCYdDdzK47%2BXjZh5bxpHqTOz1D8UQa9%2Bu8%2FMXnTQ0a3Awi0Z2J6FlbsOEn55Etks3t7w2n4fKglDS7lZJewv%2F%2BxTHSwCZyyuhYQnUgdaDOkWy%2BxK8YDFRBtlaWDlU&X-Amz-Signature=51e317918bbd5a8a501a4e9a03725fc447053932c4e3bcb64de8b3e8d644def1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675A5KHTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDHz5f9Tq8p5EhSA9FLbwFtupcaX9nv5Xysqwf4fargJwIhAOWeIt7Q0alsx95%2FJ86T5xwRbbeEfPfs7YDY9zaH2H2gKv8DCDEQABoMNjM3NDIzMTgzODA1Igwj4BG0mlPC%2FrPeE9Yq3APQHdLibhm%2FbtMKrfnis83GPoA0dvCu%2Fv4Ow4vxb%2BRgvWSNkf1sGy%2FFbXJloChlXYHiVRXJp6t72IYtKJ%2B%2F4Djr4o%2FFcBby68iRhVMbZkOy33PDQ%2Bc0Rl0BOqi5Z9fOyx3UgQbMewAZpsXX%2B0jZMPy7s0HvexuU82jgMGqyrbTnzndrjIN%2FYKLdpPhfChDlpHzc62m0RAsE8q0G7Jmbm9e8zGuvZM9tE8jS8A2zi1rBwv7kTI0VXMxgap1OfJ1VtSTUOiw6xAFtQ7aoaQjR5yXxIhyTN8KmP%2B6iD5tOI6FM3RETbqWpWcrh69GllkmXlkH1qxUXfgYIL41%2FDBDkkicg6MYdpwIU%2FnSNGixJuWi4QMdmQaxcOKdLDZUvNVZHTrfz6Csg2%2FSLXvpqzYAAIFi%2F1xZXW%2BC0TDvdT%2FcYaLfCBmQXlQPTfOjKdVVe3KTZzStM52djQ35EeMv1PW%2FiEsvH87cDsyGGwYx27K1BSG6IpJGpMU4A2xr1mlltla0zz5YX82Vf49uers3cilBi51uZUAiDsLO0SB0Ndx4uhyU2ZsHtBpdtC0XMJRPA1IMqYGsoEkPUnI34i%2FhO1zOFG36Q%2Bu47RrmrqfFUBKEN79bjpqGDxMHrZ3JQKUbw1DCysYnEBjqkAUGeKSBVwfqFD1eqt5B1Cv%2FtRt5TXZGBw52a9A3Lt5l0vOHBKk6KCWLaiUiNya9kjopJogE4J9%2F9iX9rNyhou1OlVYaWbLKcCYdDdzK47%2BXjZh5bxpHqTOz1D8UQa9%2Bu8%2FMXnTQ0a3Awi0Z2J6FlbsOEn55Etks3t7w2n4fKglDS7lZJewv%2F%2BxTHSwCZyyuhYQnUgdaDOkWy%2BxK8YDFRBtlaWDlU&X-Amz-Signature=0a6b66828888af2bc947bc81268ee83014c15d01eb4de1806ffbcc19a3b4ea0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675A5KHTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDHz5f9Tq8p5EhSA9FLbwFtupcaX9nv5Xysqwf4fargJwIhAOWeIt7Q0alsx95%2FJ86T5xwRbbeEfPfs7YDY9zaH2H2gKv8DCDEQABoMNjM3NDIzMTgzODA1Igwj4BG0mlPC%2FrPeE9Yq3APQHdLibhm%2FbtMKrfnis83GPoA0dvCu%2Fv4Ow4vxb%2BRgvWSNkf1sGy%2FFbXJloChlXYHiVRXJp6t72IYtKJ%2B%2F4Djr4o%2FFcBby68iRhVMbZkOy33PDQ%2Bc0Rl0BOqi5Z9fOyx3UgQbMewAZpsXX%2B0jZMPy7s0HvexuU82jgMGqyrbTnzndrjIN%2FYKLdpPhfChDlpHzc62m0RAsE8q0G7Jmbm9e8zGuvZM9tE8jS8A2zi1rBwv7kTI0VXMxgap1OfJ1VtSTUOiw6xAFtQ7aoaQjR5yXxIhyTN8KmP%2B6iD5tOI6FM3RETbqWpWcrh69GllkmXlkH1qxUXfgYIL41%2FDBDkkicg6MYdpwIU%2FnSNGixJuWi4QMdmQaxcOKdLDZUvNVZHTrfz6Csg2%2FSLXvpqzYAAIFi%2F1xZXW%2BC0TDvdT%2FcYaLfCBmQXlQPTfOjKdVVe3KTZzStM52djQ35EeMv1PW%2FiEsvH87cDsyGGwYx27K1BSG6IpJGpMU4A2xr1mlltla0zz5YX82Vf49uers3cilBi51uZUAiDsLO0SB0Ndx4uhyU2ZsHtBpdtC0XMJRPA1IMqYGsoEkPUnI34i%2FhO1zOFG36Q%2Bu47RrmrqfFUBKEN79bjpqGDxMHrZ3JQKUbw1DCysYnEBjqkAUGeKSBVwfqFD1eqt5B1Cv%2FtRt5TXZGBw52a9A3Lt5l0vOHBKk6KCWLaiUiNya9kjopJogE4J9%2F9iX9rNyhou1OlVYaWbLKcCYdDdzK47%2BXjZh5bxpHqTOz1D8UQa9%2Bu8%2FMXnTQ0a3Awi0Z2J6FlbsOEn55Etks3t7w2n4fKglDS7lZJewv%2F%2BxTHSwCZyyuhYQnUgdaDOkWy%2BxK8YDFRBtlaWDlU&X-Amz-Signature=9dc135820cb2dfe7c457edd9a919ed9d3e6991b30248d82d0bba4775a7412015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675A5KHTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDHz5f9Tq8p5EhSA9FLbwFtupcaX9nv5Xysqwf4fargJwIhAOWeIt7Q0alsx95%2FJ86T5xwRbbeEfPfs7YDY9zaH2H2gKv8DCDEQABoMNjM3NDIzMTgzODA1Igwj4BG0mlPC%2FrPeE9Yq3APQHdLibhm%2FbtMKrfnis83GPoA0dvCu%2Fv4Ow4vxb%2BRgvWSNkf1sGy%2FFbXJloChlXYHiVRXJp6t72IYtKJ%2B%2F4Djr4o%2FFcBby68iRhVMbZkOy33PDQ%2Bc0Rl0BOqi5Z9fOyx3UgQbMewAZpsXX%2B0jZMPy7s0HvexuU82jgMGqyrbTnzndrjIN%2FYKLdpPhfChDlpHzc62m0RAsE8q0G7Jmbm9e8zGuvZM9tE8jS8A2zi1rBwv7kTI0VXMxgap1OfJ1VtSTUOiw6xAFtQ7aoaQjR5yXxIhyTN8KmP%2B6iD5tOI6FM3RETbqWpWcrh69GllkmXlkH1qxUXfgYIL41%2FDBDkkicg6MYdpwIU%2FnSNGixJuWi4QMdmQaxcOKdLDZUvNVZHTrfz6Csg2%2FSLXvpqzYAAIFi%2F1xZXW%2BC0TDvdT%2FcYaLfCBmQXlQPTfOjKdVVe3KTZzStM52djQ35EeMv1PW%2FiEsvH87cDsyGGwYx27K1BSG6IpJGpMU4A2xr1mlltla0zz5YX82Vf49uers3cilBi51uZUAiDsLO0SB0Ndx4uhyU2ZsHtBpdtC0XMJRPA1IMqYGsoEkPUnI34i%2FhO1zOFG36Q%2Bu47RrmrqfFUBKEN79bjpqGDxMHrZ3JQKUbw1DCysYnEBjqkAUGeKSBVwfqFD1eqt5B1Cv%2FtRt5TXZGBw52a9A3Lt5l0vOHBKk6KCWLaiUiNya9kjopJogE4J9%2F9iX9rNyhou1OlVYaWbLKcCYdDdzK47%2BXjZh5bxpHqTOz1D8UQa9%2Bu8%2FMXnTQ0a3Awi0Z2J6FlbsOEn55Etks3t7w2n4fKglDS7lZJewv%2F%2BxTHSwCZyyuhYQnUgdaDOkWy%2BxK8YDFRBtlaWDlU&X-Amz-Signature=d5b78d3d4ab49d7498c5d67086157087497c4eafff77a5e16b7e3400043336c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675A5KHTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDHz5f9Tq8p5EhSA9FLbwFtupcaX9nv5Xysqwf4fargJwIhAOWeIt7Q0alsx95%2FJ86T5xwRbbeEfPfs7YDY9zaH2H2gKv8DCDEQABoMNjM3NDIzMTgzODA1Igwj4BG0mlPC%2FrPeE9Yq3APQHdLibhm%2FbtMKrfnis83GPoA0dvCu%2Fv4Ow4vxb%2BRgvWSNkf1sGy%2FFbXJloChlXYHiVRXJp6t72IYtKJ%2B%2F4Djr4o%2FFcBby68iRhVMbZkOy33PDQ%2Bc0Rl0BOqi5Z9fOyx3UgQbMewAZpsXX%2B0jZMPy7s0HvexuU82jgMGqyrbTnzndrjIN%2FYKLdpPhfChDlpHzc62m0RAsE8q0G7Jmbm9e8zGuvZM9tE8jS8A2zi1rBwv7kTI0VXMxgap1OfJ1VtSTUOiw6xAFtQ7aoaQjR5yXxIhyTN8KmP%2B6iD5tOI6FM3RETbqWpWcrh69GllkmXlkH1qxUXfgYIL41%2FDBDkkicg6MYdpwIU%2FnSNGixJuWi4QMdmQaxcOKdLDZUvNVZHTrfz6Csg2%2FSLXvpqzYAAIFi%2F1xZXW%2BC0TDvdT%2FcYaLfCBmQXlQPTfOjKdVVe3KTZzStM52djQ35EeMv1PW%2FiEsvH87cDsyGGwYx27K1BSG6IpJGpMU4A2xr1mlltla0zz5YX82Vf49uers3cilBi51uZUAiDsLO0SB0Ndx4uhyU2ZsHtBpdtC0XMJRPA1IMqYGsoEkPUnI34i%2FhO1zOFG36Q%2Bu47RrmrqfFUBKEN79bjpqGDxMHrZ3JQKUbw1DCysYnEBjqkAUGeKSBVwfqFD1eqt5B1Cv%2FtRt5TXZGBw52a9A3Lt5l0vOHBKk6KCWLaiUiNya9kjopJogE4J9%2F9iX9rNyhou1OlVYaWbLKcCYdDdzK47%2BXjZh5bxpHqTOz1D8UQa9%2Bu8%2FMXnTQ0a3Awi0Z2J6FlbsOEn55Etks3t7w2n4fKglDS7lZJewv%2F%2BxTHSwCZyyuhYQnUgdaDOkWy%2BxK8YDFRBtlaWDlU&X-Amz-Signature=fb11136564ffa4bc61944ab61de4b3b96ff864229d715854353829c821b49dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675A5KHTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDHz5f9Tq8p5EhSA9FLbwFtupcaX9nv5Xysqwf4fargJwIhAOWeIt7Q0alsx95%2FJ86T5xwRbbeEfPfs7YDY9zaH2H2gKv8DCDEQABoMNjM3NDIzMTgzODA1Igwj4BG0mlPC%2FrPeE9Yq3APQHdLibhm%2FbtMKrfnis83GPoA0dvCu%2Fv4Ow4vxb%2BRgvWSNkf1sGy%2FFbXJloChlXYHiVRXJp6t72IYtKJ%2B%2F4Djr4o%2FFcBby68iRhVMbZkOy33PDQ%2Bc0Rl0BOqi5Z9fOyx3UgQbMewAZpsXX%2B0jZMPy7s0HvexuU82jgMGqyrbTnzndrjIN%2FYKLdpPhfChDlpHzc62m0RAsE8q0G7Jmbm9e8zGuvZM9tE8jS8A2zi1rBwv7kTI0VXMxgap1OfJ1VtSTUOiw6xAFtQ7aoaQjR5yXxIhyTN8KmP%2B6iD5tOI6FM3RETbqWpWcrh69GllkmXlkH1qxUXfgYIL41%2FDBDkkicg6MYdpwIU%2FnSNGixJuWi4QMdmQaxcOKdLDZUvNVZHTrfz6Csg2%2FSLXvpqzYAAIFi%2F1xZXW%2BC0TDvdT%2FcYaLfCBmQXlQPTfOjKdVVe3KTZzStM52djQ35EeMv1PW%2FiEsvH87cDsyGGwYx27K1BSG6IpJGpMU4A2xr1mlltla0zz5YX82Vf49uers3cilBi51uZUAiDsLO0SB0Ndx4uhyU2ZsHtBpdtC0XMJRPA1IMqYGsoEkPUnI34i%2FhO1zOFG36Q%2Bu47RrmrqfFUBKEN79bjpqGDxMHrZ3JQKUbw1DCysYnEBjqkAUGeKSBVwfqFD1eqt5B1Cv%2FtRt5TXZGBw52a9A3Lt5l0vOHBKk6KCWLaiUiNya9kjopJogE4J9%2F9iX9rNyhou1OlVYaWbLKcCYdDdzK47%2BXjZh5bxpHqTOz1D8UQa9%2Bu8%2FMXnTQ0a3Awi0Z2J6FlbsOEn55Etks3t7w2n4fKglDS7lZJewv%2F%2BxTHSwCZyyuhYQnUgdaDOkWy%2BxK8YDFRBtlaWDlU&X-Amz-Signature=85cd53deea64a83a04f5fd728cf0b9ac274133b81238bdb3c515bb052c5fcd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675A5KHTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDHz5f9Tq8p5EhSA9FLbwFtupcaX9nv5Xysqwf4fargJwIhAOWeIt7Q0alsx95%2FJ86T5xwRbbeEfPfs7YDY9zaH2H2gKv8DCDEQABoMNjM3NDIzMTgzODA1Igwj4BG0mlPC%2FrPeE9Yq3APQHdLibhm%2FbtMKrfnis83GPoA0dvCu%2Fv4Ow4vxb%2BRgvWSNkf1sGy%2FFbXJloChlXYHiVRXJp6t72IYtKJ%2B%2F4Djr4o%2FFcBby68iRhVMbZkOy33PDQ%2Bc0Rl0BOqi5Z9fOyx3UgQbMewAZpsXX%2B0jZMPy7s0HvexuU82jgMGqyrbTnzndrjIN%2FYKLdpPhfChDlpHzc62m0RAsE8q0G7Jmbm9e8zGuvZM9tE8jS8A2zi1rBwv7kTI0VXMxgap1OfJ1VtSTUOiw6xAFtQ7aoaQjR5yXxIhyTN8KmP%2B6iD5tOI6FM3RETbqWpWcrh69GllkmXlkH1qxUXfgYIL41%2FDBDkkicg6MYdpwIU%2FnSNGixJuWi4QMdmQaxcOKdLDZUvNVZHTrfz6Csg2%2FSLXvpqzYAAIFi%2F1xZXW%2BC0TDvdT%2FcYaLfCBmQXlQPTfOjKdVVe3KTZzStM52djQ35EeMv1PW%2FiEsvH87cDsyGGwYx27K1BSG6IpJGpMU4A2xr1mlltla0zz5YX82Vf49uers3cilBi51uZUAiDsLO0SB0Ndx4uhyU2ZsHtBpdtC0XMJRPA1IMqYGsoEkPUnI34i%2FhO1zOFG36Q%2Bu47RrmrqfFUBKEN79bjpqGDxMHrZ3JQKUbw1DCysYnEBjqkAUGeKSBVwfqFD1eqt5B1Cv%2FtRt5TXZGBw52a9A3Lt5l0vOHBKk6KCWLaiUiNya9kjopJogE4J9%2F9iX9rNyhou1OlVYaWbLKcCYdDdzK47%2BXjZh5bxpHqTOz1D8UQa9%2Bu8%2FMXnTQ0a3Awi0Z2J6FlbsOEn55Etks3t7w2n4fKglDS7lZJewv%2F%2BxTHSwCZyyuhYQnUgdaDOkWy%2BxK8YDFRBtlaWDlU&X-Amz-Signature=8e47503ba7f3b50fde07dad3d76d6ad51812f4f74a85bad7bd8eec198b2b41f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675A5KHTQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDHz5f9Tq8p5EhSA9FLbwFtupcaX9nv5Xysqwf4fargJwIhAOWeIt7Q0alsx95%2FJ86T5xwRbbeEfPfs7YDY9zaH2H2gKv8DCDEQABoMNjM3NDIzMTgzODA1Igwj4BG0mlPC%2FrPeE9Yq3APQHdLibhm%2FbtMKrfnis83GPoA0dvCu%2Fv4Ow4vxb%2BRgvWSNkf1sGy%2FFbXJloChlXYHiVRXJp6t72IYtKJ%2B%2F4Djr4o%2FFcBby68iRhVMbZkOy33PDQ%2Bc0Rl0BOqi5Z9fOyx3UgQbMewAZpsXX%2B0jZMPy7s0HvexuU82jgMGqyrbTnzndrjIN%2FYKLdpPhfChDlpHzc62m0RAsE8q0G7Jmbm9e8zGuvZM9tE8jS8A2zi1rBwv7kTI0VXMxgap1OfJ1VtSTUOiw6xAFtQ7aoaQjR5yXxIhyTN8KmP%2B6iD5tOI6FM3RETbqWpWcrh69GllkmXlkH1qxUXfgYIL41%2FDBDkkicg6MYdpwIU%2FnSNGixJuWi4QMdmQaxcOKdLDZUvNVZHTrfz6Csg2%2FSLXvpqzYAAIFi%2F1xZXW%2BC0TDvdT%2FcYaLfCBmQXlQPTfOjKdVVe3KTZzStM52djQ35EeMv1PW%2FiEsvH87cDsyGGwYx27K1BSG6IpJGpMU4A2xr1mlltla0zz5YX82Vf49uers3cilBi51uZUAiDsLO0SB0Ndx4uhyU2ZsHtBpdtC0XMJRPA1IMqYGsoEkPUnI34i%2FhO1zOFG36Q%2Bu47RrmrqfFUBKEN79bjpqGDxMHrZ3JQKUbw1DCysYnEBjqkAUGeKSBVwfqFD1eqt5B1Cv%2FtRt5TXZGBw52a9A3Lt5l0vOHBKk6KCWLaiUiNya9kjopJogE4J9%2F9iX9rNyhou1OlVYaWbLKcCYdDdzK47%2BXjZh5bxpHqTOz1D8UQa9%2Bu8%2FMXnTQ0a3Awi0Z2J6FlbsOEn55Etks3t7w2n4fKglDS7lZJewv%2F%2BxTHSwCZyyuhYQnUgdaDOkWy%2BxK8YDFRBtlaWDlU&X-Amz-Signature=7a4ea821c33cd5a48829cd634119e5046b77b80dece4973e02fab15c509492f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
