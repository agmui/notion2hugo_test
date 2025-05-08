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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6BIRKB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsLyxhFYV61DrO1xb%2BQcoegqGCrL9a6LBJwWvjo7rHAIgU6Ht5sYPrV2WWdovwddgMwDAEgeCZWzQC1xBy1D%2BjNwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLaQFhJWS7iBWsGx9yrcA3rU%2F69F7DJ4un59wnxbcjJqiM1KuAZORPEGrp2AVAzZmOiJ%2Bmby%2FU6xPibV7Lw5%2BUpb568mqC9PyxgxfC1woRQ9VAO0VjUdr1rM2%2F1%2FDhIU%2F%2FlDMy9rrtWfULh0yUBA%2BCBMCKW6ESK9id6oQUUNneGWlyCWTu209HMIEsiSwjbh960IrjCMHW%2FxPEosNr3H%2F7%2Fyg7KgBVSq1S8I6QslNfZ6jg5wMgz9Pzoo88XfmNyPUcPPHVqPw6MZVi4gPzVdVPwOCc4WXqAehmZAiWVpJqc1goOoIg1GYjUn8WBsdnkaE00hIbcALYnA%2BWgmAS%2BK%2FRtD6yzxF0r%2BQsE3D2r0hSYIyEa8LsarGOGi4DqR4BX%2BvnKWE2lf3RTS4R0n0R1%2Fr9YrgVE62cA%2FjGP1ZBKkIe3JKZFAlMSHFfQA9KGdl4IwV6S3%2FNGE1NiFI78OOJOVJnwKPCmrHErIHU7rBK898NOjttWzbnJUXQfY7382iS5cvGxMYR4TjQn85YEZWIgQr%2FLLnNEbHuM9PxXJHJfbbuUbJHBSiV%2BO0nPSDt8nRDhlzzWhSABb2HEYejSbjRKiMRvN4%2BaEnSdd%2FHypP26wqO0v01KkI%2FrrhI5%2FhCrmw6Qzswcsgf4XISSSaKVgMOjf8sAGOqUBRhw1glcCOPupPs%2FuKuBS1qEVdzHp3qOkLQabYt6F1PlQKw9iYYQ8GlZ2Xk5p5ZmcvgmyCj8JdBQppIXlJHHlyueyvx2GYHmxxR93I9RPZwFidgLXsuzO3EBzloqOaWzYuJ3lQxR0U27NnnAazRE8al14hKgEMQk6jKPHxv971lQ8QGs6nhsUk7jxSSMBnaKFsIKuK0bHG4zeipt9%2BsebMo2Hd0Dy&X-Amz-Signature=bfbf887bb57b7ff18e8d0ea18bd8179b2b707f42e8eaa8009373889fcb366bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6BIRKB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsLyxhFYV61DrO1xb%2BQcoegqGCrL9a6LBJwWvjo7rHAIgU6Ht5sYPrV2WWdovwddgMwDAEgeCZWzQC1xBy1D%2BjNwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLaQFhJWS7iBWsGx9yrcA3rU%2F69F7DJ4un59wnxbcjJqiM1KuAZORPEGrp2AVAzZmOiJ%2Bmby%2FU6xPibV7Lw5%2BUpb568mqC9PyxgxfC1woRQ9VAO0VjUdr1rM2%2F1%2FDhIU%2F%2FlDMy9rrtWfULh0yUBA%2BCBMCKW6ESK9id6oQUUNneGWlyCWTu209HMIEsiSwjbh960IrjCMHW%2FxPEosNr3H%2F7%2Fyg7KgBVSq1S8I6QslNfZ6jg5wMgz9Pzoo88XfmNyPUcPPHVqPw6MZVi4gPzVdVPwOCc4WXqAehmZAiWVpJqc1goOoIg1GYjUn8WBsdnkaE00hIbcALYnA%2BWgmAS%2BK%2FRtD6yzxF0r%2BQsE3D2r0hSYIyEa8LsarGOGi4DqR4BX%2BvnKWE2lf3RTS4R0n0R1%2Fr9YrgVE62cA%2FjGP1ZBKkIe3JKZFAlMSHFfQA9KGdl4IwV6S3%2FNGE1NiFI78OOJOVJnwKPCmrHErIHU7rBK898NOjttWzbnJUXQfY7382iS5cvGxMYR4TjQn85YEZWIgQr%2FLLnNEbHuM9PxXJHJfbbuUbJHBSiV%2BO0nPSDt8nRDhlzzWhSABb2HEYejSbjRKiMRvN4%2BaEnSdd%2FHypP26wqO0v01KkI%2FrrhI5%2FhCrmw6Qzswcsgf4XISSSaKVgMOjf8sAGOqUBRhw1glcCOPupPs%2FuKuBS1qEVdzHp3qOkLQabYt6F1PlQKw9iYYQ8GlZ2Xk5p5ZmcvgmyCj8JdBQppIXlJHHlyueyvx2GYHmxxR93I9RPZwFidgLXsuzO3EBzloqOaWzYuJ3lQxR0U27NnnAazRE8al14hKgEMQk6jKPHxv971lQ8QGs6nhsUk7jxSSMBnaKFsIKuK0bHG4zeipt9%2BsebMo2Hd0Dy&X-Amz-Signature=59a0fd8d30b8e19f4a11b4dc716a90edcba236316384d947d9813772599f3332&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6BIRKB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsLyxhFYV61DrO1xb%2BQcoegqGCrL9a6LBJwWvjo7rHAIgU6Ht5sYPrV2WWdovwddgMwDAEgeCZWzQC1xBy1D%2BjNwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLaQFhJWS7iBWsGx9yrcA3rU%2F69F7DJ4un59wnxbcjJqiM1KuAZORPEGrp2AVAzZmOiJ%2Bmby%2FU6xPibV7Lw5%2BUpb568mqC9PyxgxfC1woRQ9VAO0VjUdr1rM2%2F1%2FDhIU%2F%2FlDMy9rrtWfULh0yUBA%2BCBMCKW6ESK9id6oQUUNneGWlyCWTu209HMIEsiSwjbh960IrjCMHW%2FxPEosNr3H%2F7%2Fyg7KgBVSq1S8I6QslNfZ6jg5wMgz9Pzoo88XfmNyPUcPPHVqPw6MZVi4gPzVdVPwOCc4WXqAehmZAiWVpJqc1goOoIg1GYjUn8WBsdnkaE00hIbcALYnA%2BWgmAS%2BK%2FRtD6yzxF0r%2BQsE3D2r0hSYIyEa8LsarGOGi4DqR4BX%2BvnKWE2lf3RTS4R0n0R1%2Fr9YrgVE62cA%2FjGP1ZBKkIe3JKZFAlMSHFfQA9KGdl4IwV6S3%2FNGE1NiFI78OOJOVJnwKPCmrHErIHU7rBK898NOjttWzbnJUXQfY7382iS5cvGxMYR4TjQn85YEZWIgQr%2FLLnNEbHuM9PxXJHJfbbuUbJHBSiV%2BO0nPSDt8nRDhlzzWhSABb2HEYejSbjRKiMRvN4%2BaEnSdd%2FHypP26wqO0v01KkI%2FrrhI5%2FhCrmw6Qzswcsgf4XISSSaKVgMOjf8sAGOqUBRhw1glcCOPupPs%2FuKuBS1qEVdzHp3qOkLQabYt6F1PlQKw9iYYQ8GlZ2Xk5p5ZmcvgmyCj8JdBQppIXlJHHlyueyvx2GYHmxxR93I9RPZwFidgLXsuzO3EBzloqOaWzYuJ3lQxR0U27NnnAazRE8al14hKgEMQk6jKPHxv971lQ8QGs6nhsUk7jxSSMBnaKFsIKuK0bHG4zeipt9%2BsebMo2Hd0Dy&X-Amz-Signature=77efebb0e76ede4b810201f135832cbc6e8da10f1aed1f88fdc8b7f62fbe1faf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6BIRKB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsLyxhFYV61DrO1xb%2BQcoegqGCrL9a6LBJwWvjo7rHAIgU6Ht5sYPrV2WWdovwddgMwDAEgeCZWzQC1xBy1D%2BjNwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLaQFhJWS7iBWsGx9yrcA3rU%2F69F7DJ4un59wnxbcjJqiM1KuAZORPEGrp2AVAzZmOiJ%2Bmby%2FU6xPibV7Lw5%2BUpb568mqC9PyxgxfC1woRQ9VAO0VjUdr1rM2%2F1%2FDhIU%2F%2FlDMy9rrtWfULh0yUBA%2BCBMCKW6ESK9id6oQUUNneGWlyCWTu209HMIEsiSwjbh960IrjCMHW%2FxPEosNr3H%2F7%2Fyg7KgBVSq1S8I6QslNfZ6jg5wMgz9Pzoo88XfmNyPUcPPHVqPw6MZVi4gPzVdVPwOCc4WXqAehmZAiWVpJqc1goOoIg1GYjUn8WBsdnkaE00hIbcALYnA%2BWgmAS%2BK%2FRtD6yzxF0r%2BQsE3D2r0hSYIyEa8LsarGOGi4DqR4BX%2BvnKWE2lf3RTS4R0n0R1%2Fr9YrgVE62cA%2FjGP1ZBKkIe3JKZFAlMSHFfQA9KGdl4IwV6S3%2FNGE1NiFI78OOJOVJnwKPCmrHErIHU7rBK898NOjttWzbnJUXQfY7382iS5cvGxMYR4TjQn85YEZWIgQr%2FLLnNEbHuM9PxXJHJfbbuUbJHBSiV%2BO0nPSDt8nRDhlzzWhSABb2HEYejSbjRKiMRvN4%2BaEnSdd%2FHypP26wqO0v01KkI%2FrrhI5%2FhCrmw6Qzswcsgf4XISSSaKVgMOjf8sAGOqUBRhw1glcCOPupPs%2FuKuBS1qEVdzHp3qOkLQabYt6F1PlQKw9iYYQ8GlZ2Xk5p5ZmcvgmyCj8JdBQppIXlJHHlyueyvx2GYHmxxR93I9RPZwFidgLXsuzO3EBzloqOaWzYuJ3lQxR0U27NnnAazRE8al14hKgEMQk6jKPHxv971lQ8QGs6nhsUk7jxSSMBnaKFsIKuK0bHG4zeipt9%2BsebMo2Hd0Dy&X-Amz-Signature=2acf2f841adddf26e72da2010f8fbf758fa53ea46eeb74d32a837f6ca900fc43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6BIRKB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsLyxhFYV61DrO1xb%2BQcoegqGCrL9a6LBJwWvjo7rHAIgU6Ht5sYPrV2WWdovwddgMwDAEgeCZWzQC1xBy1D%2BjNwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLaQFhJWS7iBWsGx9yrcA3rU%2F69F7DJ4un59wnxbcjJqiM1KuAZORPEGrp2AVAzZmOiJ%2Bmby%2FU6xPibV7Lw5%2BUpb568mqC9PyxgxfC1woRQ9VAO0VjUdr1rM2%2F1%2FDhIU%2F%2FlDMy9rrtWfULh0yUBA%2BCBMCKW6ESK9id6oQUUNneGWlyCWTu209HMIEsiSwjbh960IrjCMHW%2FxPEosNr3H%2F7%2Fyg7KgBVSq1S8I6QslNfZ6jg5wMgz9Pzoo88XfmNyPUcPPHVqPw6MZVi4gPzVdVPwOCc4WXqAehmZAiWVpJqc1goOoIg1GYjUn8WBsdnkaE00hIbcALYnA%2BWgmAS%2BK%2FRtD6yzxF0r%2BQsE3D2r0hSYIyEa8LsarGOGi4DqR4BX%2BvnKWE2lf3RTS4R0n0R1%2Fr9YrgVE62cA%2FjGP1ZBKkIe3JKZFAlMSHFfQA9KGdl4IwV6S3%2FNGE1NiFI78OOJOVJnwKPCmrHErIHU7rBK898NOjttWzbnJUXQfY7382iS5cvGxMYR4TjQn85YEZWIgQr%2FLLnNEbHuM9PxXJHJfbbuUbJHBSiV%2BO0nPSDt8nRDhlzzWhSABb2HEYejSbjRKiMRvN4%2BaEnSdd%2FHypP26wqO0v01KkI%2FrrhI5%2FhCrmw6Qzswcsgf4XISSSaKVgMOjf8sAGOqUBRhw1glcCOPupPs%2FuKuBS1qEVdzHp3qOkLQabYt6F1PlQKw9iYYQ8GlZ2Xk5p5ZmcvgmyCj8JdBQppIXlJHHlyueyvx2GYHmxxR93I9RPZwFidgLXsuzO3EBzloqOaWzYuJ3lQxR0U27NnnAazRE8al14hKgEMQk6jKPHxv971lQ8QGs6nhsUk7jxSSMBnaKFsIKuK0bHG4zeipt9%2BsebMo2Hd0Dy&X-Amz-Signature=fc86abcdf4d476f29d3332dd23d7022291227e5d6893df13ddbee5a16aa557ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6BIRKB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsLyxhFYV61DrO1xb%2BQcoegqGCrL9a6LBJwWvjo7rHAIgU6Ht5sYPrV2WWdovwddgMwDAEgeCZWzQC1xBy1D%2BjNwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLaQFhJWS7iBWsGx9yrcA3rU%2F69F7DJ4un59wnxbcjJqiM1KuAZORPEGrp2AVAzZmOiJ%2Bmby%2FU6xPibV7Lw5%2BUpb568mqC9PyxgxfC1woRQ9VAO0VjUdr1rM2%2F1%2FDhIU%2F%2FlDMy9rrtWfULh0yUBA%2BCBMCKW6ESK9id6oQUUNneGWlyCWTu209HMIEsiSwjbh960IrjCMHW%2FxPEosNr3H%2F7%2Fyg7KgBVSq1S8I6QslNfZ6jg5wMgz9Pzoo88XfmNyPUcPPHVqPw6MZVi4gPzVdVPwOCc4WXqAehmZAiWVpJqc1goOoIg1GYjUn8WBsdnkaE00hIbcALYnA%2BWgmAS%2BK%2FRtD6yzxF0r%2BQsE3D2r0hSYIyEa8LsarGOGi4DqR4BX%2BvnKWE2lf3RTS4R0n0R1%2Fr9YrgVE62cA%2FjGP1ZBKkIe3JKZFAlMSHFfQA9KGdl4IwV6S3%2FNGE1NiFI78OOJOVJnwKPCmrHErIHU7rBK898NOjttWzbnJUXQfY7382iS5cvGxMYR4TjQn85YEZWIgQr%2FLLnNEbHuM9PxXJHJfbbuUbJHBSiV%2BO0nPSDt8nRDhlzzWhSABb2HEYejSbjRKiMRvN4%2BaEnSdd%2FHypP26wqO0v01KkI%2FrrhI5%2FhCrmw6Qzswcsgf4XISSSaKVgMOjf8sAGOqUBRhw1glcCOPupPs%2FuKuBS1qEVdzHp3qOkLQabYt6F1PlQKw9iYYQ8GlZ2Xk5p5ZmcvgmyCj8JdBQppIXlJHHlyueyvx2GYHmxxR93I9RPZwFidgLXsuzO3EBzloqOaWzYuJ3lQxR0U27NnnAazRE8al14hKgEMQk6jKPHxv971lQ8QGs6nhsUk7jxSSMBnaKFsIKuK0bHG4zeipt9%2BsebMo2Hd0Dy&X-Amz-Signature=b991656c546663aecad08f6999a8d71d0262e1c4f283ac92102671fb87f99505&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6BIRKB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsLyxhFYV61DrO1xb%2BQcoegqGCrL9a6LBJwWvjo7rHAIgU6Ht5sYPrV2WWdovwddgMwDAEgeCZWzQC1xBy1D%2BjNwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLaQFhJWS7iBWsGx9yrcA3rU%2F69F7DJ4un59wnxbcjJqiM1KuAZORPEGrp2AVAzZmOiJ%2Bmby%2FU6xPibV7Lw5%2BUpb568mqC9PyxgxfC1woRQ9VAO0VjUdr1rM2%2F1%2FDhIU%2F%2FlDMy9rrtWfULh0yUBA%2BCBMCKW6ESK9id6oQUUNneGWlyCWTu209HMIEsiSwjbh960IrjCMHW%2FxPEosNr3H%2F7%2Fyg7KgBVSq1S8I6QslNfZ6jg5wMgz9Pzoo88XfmNyPUcPPHVqPw6MZVi4gPzVdVPwOCc4WXqAehmZAiWVpJqc1goOoIg1GYjUn8WBsdnkaE00hIbcALYnA%2BWgmAS%2BK%2FRtD6yzxF0r%2BQsE3D2r0hSYIyEa8LsarGOGi4DqR4BX%2BvnKWE2lf3RTS4R0n0R1%2Fr9YrgVE62cA%2FjGP1ZBKkIe3JKZFAlMSHFfQA9KGdl4IwV6S3%2FNGE1NiFI78OOJOVJnwKPCmrHErIHU7rBK898NOjttWzbnJUXQfY7382iS5cvGxMYR4TjQn85YEZWIgQr%2FLLnNEbHuM9PxXJHJfbbuUbJHBSiV%2BO0nPSDt8nRDhlzzWhSABb2HEYejSbjRKiMRvN4%2BaEnSdd%2FHypP26wqO0v01KkI%2FrrhI5%2FhCrmw6Qzswcsgf4XISSSaKVgMOjf8sAGOqUBRhw1glcCOPupPs%2FuKuBS1qEVdzHp3qOkLQabYt6F1PlQKw9iYYQ8GlZ2Xk5p5ZmcvgmyCj8JdBQppIXlJHHlyueyvx2GYHmxxR93I9RPZwFidgLXsuzO3EBzloqOaWzYuJ3lQxR0U27NnnAazRE8al14hKgEMQk6jKPHxv971lQ8QGs6nhsUk7jxSSMBnaKFsIKuK0bHG4zeipt9%2BsebMo2Hd0Dy&X-Amz-Signature=77cdf36844a1db7ec02a7f5af0652d59fd237fe8495c65498bf8d2a2de9738fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6BIRKB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsLyxhFYV61DrO1xb%2BQcoegqGCrL9a6LBJwWvjo7rHAIgU6Ht5sYPrV2WWdovwddgMwDAEgeCZWzQC1xBy1D%2BjNwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLaQFhJWS7iBWsGx9yrcA3rU%2F69F7DJ4un59wnxbcjJqiM1KuAZORPEGrp2AVAzZmOiJ%2Bmby%2FU6xPibV7Lw5%2BUpb568mqC9PyxgxfC1woRQ9VAO0VjUdr1rM2%2F1%2FDhIU%2F%2FlDMy9rrtWfULh0yUBA%2BCBMCKW6ESK9id6oQUUNneGWlyCWTu209HMIEsiSwjbh960IrjCMHW%2FxPEosNr3H%2F7%2Fyg7KgBVSq1S8I6QslNfZ6jg5wMgz9Pzoo88XfmNyPUcPPHVqPw6MZVi4gPzVdVPwOCc4WXqAehmZAiWVpJqc1goOoIg1GYjUn8WBsdnkaE00hIbcALYnA%2BWgmAS%2BK%2FRtD6yzxF0r%2BQsE3D2r0hSYIyEa8LsarGOGi4DqR4BX%2BvnKWE2lf3RTS4R0n0R1%2Fr9YrgVE62cA%2FjGP1ZBKkIe3JKZFAlMSHFfQA9KGdl4IwV6S3%2FNGE1NiFI78OOJOVJnwKPCmrHErIHU7rBK898NOjttWzbnJUXQfY7382iS5cvGxMYR4TjQn85YEZWIgQr%2FLLnNEbHuM9PxXJHJfbbuUbJHBSiV%2BO0nPSDt8nRDhlzzWhSABb2HEYejSbjRKiMRvN4%2BaEnSdd%2FHypP26wqO0v01KkI%2FrrhI5%2FhCrmw6Qzswcsgf4XISSSaKVgMOjf8sAGOqUBRhw1glcCOPupPs%2FuKuBS1qEVdzHp3qOkLQabYt6F1PlQKw9iYYQ8GlZ2Xk5p5ZmcvgmyCj8JdBQppIXlJHHlyueyvx2GYHmxxR93I9RPZwFidgLXsuzO3EBzloqOaWzYuJ3lQxR0U27NnnAazRE8al14hKgEMQk6jKPHxv971lQ8QGs6nhsUk7jxSSMBnaKFsIKuK0bHG4zeipt9%2BsebMo2Hd0Dy&X-Amz-Signature=175930d454d6302e253fde5411e64f7442bf3afda99dffb9e24f1df9b443981d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
