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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6I4G7V5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ7fdDcollyZSuujRwobDikZ5oYWxkGgQUqJ%2BX3nQXgAiEAyo9f46n0FC8JJRIr5k1CkPXTaEGgV9aM9ihoZZuFmlIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR5%2By93bn5lnZplWircA9nnxslgm2dw5iBZgmkn0DIgRrhDvBobZtsndmGc8zha22PKHBUmFpkl6dhx4qa5Rh3VjMhOjI6nBFcqsSV0jYRsvF%2Br20os5EAH9753B0NONrWum3Wam1KaJMk5LvvlJvToiMtgo8gNP3fGYGLg4Xzl5MPfMOlrssmvp2CinBIMUjK9q4G%2BnaX%2BHSBcG%2B%2FByaugjidbXtj47AjiMl2VE%2Byl%2BVOwfxJltrgLU8dZo0VK5WP2V5ENg1fJ87BXxyBVBQN0EWUXTJCetaMxYXJRlJWVvZ1pjTFOosNIUUT0cMHOSvntbnnIbQxVZpPcZ5P0BE%2Bs0qrvY6s8Wdj711qhCJlpFlflHe0IokDJD2ivLvLgEX5Q1yRySDMm8RaqJlxY43Z9v6dRUPv52k6Ab1ktMKi70S8jLtK8p6GZTr0LOrCOKstxEs8YdEjOm07dQQX6hw51JWE%2FZAcqQlW8w%2FIGaAIGT2yG1zcMUTmlw49t7dR5Z2Y%2BmPOKKLvPDVovm2asFOlnc9aQR5zRJGQQbqFKuOtpH8wFvMBJSgWa6r3zMaE5Ru6ZNrNZkzJmKALN50jLA3GT%2BsQKsDQQoBV47P%2BVP1Knk4NDsZX3KQk2gmgPNzDkQ%2B2978xTad3F4nPEMPr5pb0GOqUBfw2MIq3kKE5Nr0KtEfwboWR2JPmpt1wzYkDBK6s%2BiFxI0JKyAyPXv9jP0hZnMMdapuziHhjDa4hZuOwolK4gFsqSlc5OS3SXMQZ8prbp%2BS%2FtAbK8Lr8fvNWLq2ooLgGYyAtCvBpD0M4nhgqhYUL%2F%2F4Rtxg7m7UAny8I3Qe4azYBGxv1DwdxQm6yoDGToemVA7Tnj7VJgPVNGyN%2Fs1%2FvtPAcLrYrD&X-Amz-Signature=a92e6a21e1d3c6539ed188ba1a63351291c211fafc4635e45676fc39f18b9171&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6I4G7V5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ7fdDcollyZSuujRwobDikZ5oYWxkGgQUqJ%2BX3nQXgAiEAyo9f46n0FC8JJRIr5k1CkPXTaEGgV9aM9ihoZZuFmlIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR5%2By93bn5lnZplWircA9nnxslgm2dw5iBZgmkn0DIgRrhDvBobZtsndmGc8zha22PKHBUmFpkl6dhx4qa5Rh3VjMhOjI6nBFcqsSV0jYRsvF%2Br20os5EAH9753B0NONrWum3Wam1KaJMk5LvvlJvToiMtgo8gNP3fGYGLg4Xzl5MPfMOlrssmvp2CinBIMUjK9q4G%2BnaX%2BHSBcG%2B%2FByaugjidbXtj47AjiMl2VE%2Byl%2BVOwfxJltrgLU8dZo0VK5WP2V5ENg1fJ87BXxyBVBQN0EWUXTJCetaMxYXJRlJWVvZ1pjTFOosNIUUT0cMHOSvntbnnIbQxVZpPcZ5P0BE%2Bs0qrvY6s8Wdj711qhCJlpFlflHe0IokDJD2ivLvLgEX5Q1yRySDMm8RaqJlxY43Z9v6dRUPv52k6Ab1ktMKi70S8jLtK8p6GZTr0LOrCOKstxEs8YdEjOm07dQQX6hw51JWE%2FZAcqQlW8w%2FIGaAIGT2yG1zcMUTmlw49t7dR5Z2Y%2BmPOKKLvPDVovm2asFOlnc9aQR5zRJGQQbqFKuOtpH8wFvMBJSgWa6r3zMaE5Ru6ZNrNZkzJmKALN50jLA3GT%2BsQKsDQQoBV47P%2BVP1Knk4NDsZX3KQk2gmgPNzDkQ%2B2978xTad3F4nPEMPr5pb0GOqUBfw2MIq3kKE5Nr0KtEfwboWR2JPmpt1wzYkDBK6s%2BiFxI0JKyAyPXv9jP0hZnMMdapuziHhjDa4hZuOwolK4gFsqSlc5OS3SXMQZ8prbp%2BS%2FtAbK8Lr8fvNWLq2ooLgGYyAtCvBpD0M4nhgqhYUL%2F%2F4Rtxg7m7UAny8I3Qe4azYBGxv1DwdxQm6yoDGToemVA7Tnj7VJgPVNGyN%2Fs1%2FvtPAcLrYrD&X-Amz-Signature=65aa96e17b225d513fded173707e51f14b574bef9a719b97181ec801be499776&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6I4G7V5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ7fdDcollyZSuujRwobDikZ5oYWxkGgQUqJ%2BX3nQXgAiEAyo9f46n0FC8JJRIr5k1CkPXTaEGgV9aM9ihoZZuFmlIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR5%2By93bn5lnZplWircA9nnxslgm2dw5iBZgmkn0DIgRrhDvBobZtsndmGc8zha22PKHBUmFpkl6dhx4qa5Rh3VjMhOjI6nBFcqsSV0jYRsvF%2Br20os5EAH9753B0NONrWum3Wam1KaJMk5LvvlJvToiMtgo8gNP3fGYGLg4Xzl5MPfMOlrssmvp2CinBIMUjK9q4G%2BnaX%2BHSBcG%2B%2FByaugjidbXtj47AjiMl2VE%2Byl%2BVOwfxJltrgLU8dZo0VK5WP2V5ENg1fJ87BXxyBVBQN0EWUXTJCetaMxYXJRlJWVvZ1pjTFOosNIUUT0cMHOSvntbnnIbQxVZpPcZ5P0BE%2Bs0qrvY6s8Wdj711qhCJlpFlflHe0IokDJD2ivLvLgEX5Q1yRySDMm8RaqJlxY43Z9v6dRUPv52k6Ab1ktMKi70S8jLtK8p6GZTr0LOrCOKstxEs8YdEjOm07dQQX6hw51JWE%2FZAcqQlW8w%2FIGaAIGT2yG1zcMUTmlw49t7dR5Z2Y%2BmPOKKLvPDVovm2asFOlnc9aQR5zRJGQQbqFKuOtpH8wFvMBJSgWa6r3zMaE5Ru6ZNrNZkzJmKALN50jLA3GT%2BsQKsDQQoBV47P%2BVP1Knk4NDsZX3KQk2gmgPNzDkQ%2B2978xTad3F4nPEMPr5pb0GOqUBfw2MIq3kKE5Nr0KtEfwboWR2JPmpt1wzYkDBK6s%2BiFxI0JKyAyPXv9jP0hZnMMdapuziHhjDa4hZuOwolK4gFsqSlc5OS3SXMQZ8prbp%2BS%2FtAbK8Lr8fvNWLq2ooLgGYyAtCvBpD0M4nhgqhYUL%2F%2F4Rtxg7m7UAny8I3Qe4azYBGxv1DwdxQm6yoDGToemVA7Tnj7VJgPVNGyN%2Fs1%2FvtPAcLrYrD&X-Amz-Signature=eac7947751079239e32f9579b8fa4991767f3868b00d09143c0f4153d8dec941&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6I4G7V5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ7fdDcollyZSuujRwobDikZ5oYWxkGgQUqJ%2BX3nQXgAiEAyo9f46n0FC8JJRIr5k1CkPXTaEGgV9aM9ihoZZuFmlIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR5%2By93bn5lnZplWircA9nnxslgm2dw5iBZgmkn0DIgRrhDvBobZtsndmGc8zha22PKHBUmFpkl6dhx4qa5Rh3VjMhOjI6nBFcqsSV0jYRsvF%2Br20os5EAH9753B0NONrWum3Wam1KaJMk5LvvlJvToiMtgo8gNP3fGYGLg4Xzl5MPfMOlrssmvp2CinBIMUjK9q4G%2BnaX%2BHSBcG%2B%2FByaugjidbXtj47AjiMl2VE%2Byl%2BVOwfxJltrgLU8dZo0VK5WP2V5ENg1fJ87BXxyBVBQN0EWUXTJCetaMxYXJRlJWVvZ1pjTFOosNIUUT0cMHOSvntbnnIbQxVZpPcZ5P0BE%2Bs0qrvY6s8Wdj711qhCJlpFlflHe0IokDJD2ivLvLgEX5Q1yRySDMm8RaqJlxY43Z9v6dRUPv52k6Ab1ktMKi70S8jLtK8p6GZTr0LOrCOKstxEs8YdEjOm07dQQX6hw51JWE%2FZAcqQlW8w%2FIGaAIGT2yG1zcMUTmlw49t7dR5Z2Y%2BmPOKKLvPDVovm2asFOlnc9aQR5zRJGQQbqFKuOtpH8wFvMBJSgWa6r3zMaE5Ru6ZNrNZkzJmKALN50jLA3GT%2BsQKsDQQoBV47P%2BVP1Knk4NDsZX3KQk2gmgPNzDkQ%2B2978xTad3F4nPEMPr5pb0GOqUBfw2MIq3kKE5Nr0KtEfwboWR2JPmpt1wzYkDBK6s%2BiFxI0JKyAyPXv9jP0hZnMMdapuziHhjDa4hZuOwolK4gFsqSlc5OS3SXMQZ8prbp%2BS%2FtAbK8Lr8fvNWLq2ooLgGYyAtCvBpD0M4nhgqhYUL%2F%2F4Rtxg7m7UAny8I3Qe4azYBGxv1DwdxQm6yoDGToemVA7Tnj7VJgPVNGyN%2Fs1%2FvtPAcLrYrD&X-Amz-Signature=d5a218665a23522547a8ce9d8b52123abc6eee174547ccea0e6d3bc3e9a8468d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6I4G7V5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ7fdDcollyZSuujRwobDikZ5oYWxkGgQUqJ%2BX3nQXgAiEAyo9f46n0FC8JJRIr5k1CkPXTaEGgV9aM9ihoZZuFmlIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR5%2By93bn5lnZplWircA9nnxslgm2dw5iBZgmkn0DIgRrhDvBobZtsndmGc8zha22PKHBUmFpkl6dhx4qa5Rh3VjMhOjI6nBFcqsSV0jYRsvF%2Br20os5EAH9753B0NONrWum3Wam1KaJMk5LvvlJvToiMtgo8gNP3fGYGLg4Xzl5MPfMOlrssmvp2CinBIMUjK9q4G%2BnaX%2BHSBcG%2B%2FByaugjidbXtj47AjiMl2VE%2Byl%2BVOwfxJltrgLU8dZo0VK5WP2V5ENg1fJ87BXxyBVBQN0EWUXTJCetaMxYXJRlJWVvZ1pjTFOosNIUUT0cMHOSvntbnnIbQxVZpPcZ5P0BE%2Bs0qrvY6s8Wdj711qhCJlpFlflHe0IokDJD2ivLvLgEX5Q1yRySDMm8RaqJlxY43Z9v6dRUPv52k6Ab1ktMKi70S8jLtK8p6GZTr0LOrCOKstxEs8YdEjOm07dQQX6hw51JWE%2FZAcqQlW8w%2FIGaAIGT2yG1zcMUTmlw49t7dR5Z2Y%2BmPOKKLvPDVovm2asFOlnc9aQR5zRJGQQbqFKuOtpH8wFvMBJSgWa6r3zMaE5Ru6ZNrNZkzJmKALN50jLA3GT%2BsQKsDQQoBV47P%2BVP1Knk4NDsZX3KQk2gmgPNzDkQ%2B2978xTad3F4nPEMPr5pb0GOqUBfw2MIq3kKE5Nr0KtEfwboWR2JPmpt1wzYkDBK6s%2BiFxI0JKyAyPXv9jP0hZnMMdapuziHhjDa4hZuOwolK4gFsqSlc5OS3SXMQZ8prbp%2BS%2FtAbK8Lr8fvNWLq2ooLgGYyAtCvBpD0M4nhgqhYUL%2F%2F4Rtxg7m7UAny8I3Qe4azYBGxv1DwdxQm6yoDGToemVA7Tnj7VJgPVNGyN%2Fs1%2FvtPAcLrYrD&X-Amz-Signature=5d9e07961223f72f92b5e5dfbdda2b7f433ad6578cb27405ca837c02179aefbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6I4G7V5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ7fdDcollyZSuujRwobDikZ5oYWxkGgQUqJ%2BX3nQXgAiEAyo9f46n0FC8JJRIr5k1CkPXTaEGgV9aM9ihoZZuFmlIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR5%2By93bn5lnZplWircA9nnxslgm2dw5iBZgmkn0DIgRrhDvBobZtsndmGc8zha22PKHBUmFpkl6dhx4qa5Rh3VjMhOjI6nBFcqsSV0jYRsvF%2Br20os5EAH9753B0NONrWum3Wam1KaJMk5LvvlJvToiMtgo8gNP3fGYGLg4Xzl5MPfMOlrssmvp2CinBIMUjK9q4G%2BnaX%2BHSBcG%2B%2FByaugjidbXtj47AjiMl2VE%2Byl%2BVOwfxJltrgLU8dZo0VK5WP2V5ENg1fJ87BXxyBVBQN0EWUXTJCetaMxYXJRlJWVvZ1pjTFOosNIUUT0cMHOSvntbnnIbQxVZpPcZ5P0BE%2Bs0qrvY6s8Wdj711qhCJlpFlflHe0IokDJD2ivLvLgEX5Q1yRySDMm8RaqJlxY43Z9v6dRUPv52k6Ab1ktMKi70S8jLtK8p6GZTr0LOrCOKstxEs8YdEjOm07dQQX6hw51JWE%2FZAcqQlW8w%2FIGaAIGT2yG1zcMUTmlw49t7dR5Z2Y%2BmPOKKLvPDVovm2asFOlnc9aQR5zRJGQQbqFKuOtpH8wFvMBJSgWa6r3zMaE5Ru6ZNrNZkzJmKALN50jLA3GT%2BsQKsDQQoBV47P%2BVP1Knk4NDsZX3KQk2gmgPNzDkQ%2B2978xTad3F4nPEMPr5pb0GOqUBfw2MIq3kKE5Nr0KtEfwboWR2JPmpt1wzYkDBK6s%2BiFxI0JKyAyPXv9jP0hZnMMdapuziHhjDa4hZuOwolK4gFsqSlc5OS3SXMQZ8prbp%2BS%2FtAbK8Lr8fvNWLq2ooLgGYyAtCvBpD0M4nhgqhYUL%2F%2F4Rtxg7m7UAny8I3Qe4azYBGxv1DwdxQm6yoDGToemVA7Tnj7VJgPVNGyN%2Fs1%2FvtPAcLrYrD&X-Amz-Signature=5fecde3490f1e4e03c175681d5a3c37f0d75bc412693f84dedb434c25fbce302&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6I4G7V5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ7fdDcollyZSuujRwobDikZ5oYWxkGgQUqJ%2BX3nQXgAiEAyo9f46n0FC8JJRIr5k1CkPXTaEGgV9aM9ihoZZuFmlIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR5%2By93bn5lnZplWircA9nnxslgm2dw5iBZgmkn0DIgRrhDvBobZtsndmGc8zha22PKHBUmFpkl6dhx4qa5Rh3VjMhOjI6nBFcqsSV0jYRsvF%2Br20os5EAH9753B0NONrWum3Wam1KaJMk5LvvlJvToiMtgo8gNP3fGYGLg4Xzl5MPfMOlrssmvp2CinBIMUjK9q4G%2BnaX%2BHSBcG%2B%2FByaugjidbXtj47AjiMl2VE%2Byl%2BVOwfxJltrgLU8dZo0VK5WP2V5ENg1fJ87BXxyBVBQN0EWUXTJCetaMxYXJRlJWVvZ1pjTFOosNIUUT0cMHOSvntbnnIbQxVZpPcZ5P0BE%2Bs0qrvY6s8Wdj711qhCJlpFlflHe0IokDJD2ivLvLgEX5Q1yRySDMm8RaqJlxY43Z9v6dRUPv52k6Ab1ktMKi70S8jLtK8p6GZTr0LOrCOKstxEs8YdEjOm07dQQX6hw51JWE%2FZAcqQlW8w%2FIGaAIGT2yG1zcMUTmlw49t7dR5Z2Y%2BmPOKKLvPDVovm2asFOlnc9aQR5zRJGQQbqFKuOtpH8wFvMBJSgWa6r3zMaE5Ru6ZNrNZkzJmKALN50jLA3GT%2BsQKsDQQoBV47P%2BVP1Knk4NDsZX3KQk2gmgPNzDkQ%2B2978xTad3F4nPEMPr5pb0GOqUBfw2MIq3kKE5Nr0KtEfwboWR2JPmpt1wzYkDBK6s%2BiFxI0JKyAyPXv9jP0hZnMMdapuziHhjDa4hZuOwolK4gFsqSlc5OS3SXMQZ8prbp%2BS%2FtAbK8Lr8fvNWLq2ooLgGYyAtCvBpD0M4nhgqhYUL%2F%2F4Rtxg7m7UAny8I3Qe4azYBGxv1DwdxQm6yoDGToemVA7Tnj7VJgPVNGyN%2Fs1%2FvtPAcLrYrD&X-Amz-Signature=34a8a70691e6e89765cb48032c0d551ba96953936effc9fff85914ebab8dbd5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6I4G7V5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ7fdDcollyZSuujRwobDikZ5oYWxkGgQUqJ%2BX3nQXgAiEAyo9f46n0FC8JJRIr5k1CkPXTaEGgV9aM9ihoZZuFmlIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR5%2By93bn5lnZplWircA9nnxslgm2dw5iBZgmkn0DIgRrhDvBobZtsndmGc8zha22PKHBUmFpkl6dhx4qa5Rh3VjMhOjI6nBFcqsSV0jYRsvF%2Br20os5EAH9753B0NONrWum3Wam1KaJMk5LvvlJvToiMtgo8gNP3fGYGLg4Xzl5MPfMOlrssmvp2CinBIMUjK9q4G%2BnaX%2BHSBcG%2B%2FByaugjidbXtj47AjiMl2VE%2Byl%2BVOwfxJltrgLU8dZo0VK5WP2V5ENg1fJ87BXxyBVBQN0EWUXTJCetaMxYXJRlJWVvZ1pjTFOosNIUUT0cMHOSvntbnnIbQxVZpPcZ5P0BE%2Bs0qrvY6s8Wdj711qhCJlpFlflHe0IokDJD2ivLvLgEX5Q1yRySDMm8RaqJlxY43Z9v6dRUPv52k6Ab1ktMKi70S8jLtK8p6GZTr0LOrCOKstxEs8YdEjOm07dQQX6hw51JWE%2FZAcqQlW8w%2FIGaAIGT2yG1zcMUTmlw49t7dR5Z2Y%2BmPOKKLvPDVovm2asFOlnc9aQR5zRJGQQbqFKuOtpH8wFvMBJSgWa6r3zMaE5Ru6ZNrNZkzJmKALN50jLA3GT%2BsQKsDQQoBV47P%2BVP1Knk4NDsZX3KQk2gmgPNzDkQ%2B2978xTad3F4nPEMPr5pb0GOqUBfw2MIq3kKE5Nr0KtEfwboWR2JPmpt1wzYkDBK6s%2BiFxI0JKyAyPXv9jP0hZnMMdapuziHhjDa4hZuOwolK4gFsqSlc5OS3SXMQZ8prbp%2BS%2FtAbK8Lr8fvNWLq2ooLgGYyAtCvBpD0M4nhgqhYUL%2F%2F4Rtxg7m7UAny8I3Qe4azYBGxv1DwdxQm6yoDGToemVA7Tnj7VJgPVNGyN%2Fs1%2FvtPAcLrYrD&X-Amz-Signature=20223bc1337c060308402407bc76e62732c57c5f727882f265b1b5a2a0d364bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
