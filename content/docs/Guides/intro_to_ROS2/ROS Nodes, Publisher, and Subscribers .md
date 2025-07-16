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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLU44C4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDN%2B31Dz9vf51InL%2F9ZZpcv7vmZZkzunj6tuyiPlAQFEgIgfcRjPLYR8CXAB1B5ypEs53Jx%2F1oQvjLYjMzn7y8hNKoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDi9XDoWR%2F54R3wWPyrcAzXsQa3du4ipqR9ncY7II7kP%2FulG%2Bq9YIPHqq6TY1w8Xx7pm3wePArmGqHETNIJP7ZXOTsLLg5suyeSTQ2rExz67PPqsm%2BwMXwEINmaWqjNJAphrF53nzYrRJDg43bpWou1CxXxDBG63nGK9oBExWfFzOaL8QoDaFZFJO1svXCIXEbXQdADSWRQQfbeWubMjRkBzr3d%2BUm8ZEZDTEbl3erIo1ughUH%2B7QpzB9%2FfGJedhqTgesP%2FbS1vSjJbu5FRrD4%2FCbWPS74Vrs%2F7I28nKAEkRXoC10si%2FLL8V5grKNz1qyU9ymqQUpTGodkbhPpTiHbZbwLbsSXA29VYNZRRXlubc6ybhI1A%2FZYTMIUGD4BVCXiHEXg%2B%2BT1GjFGJfnHE1HiDw83qPJK7JHbYmoYPRheA7DwO1BxIt0vhORpcs1z4ysHyWFusvD8V5mjjfgPf3VMLyJpY2PVamfL%2FJhf7RkH3HoKWUexIAMQR2Uh0vnvqS5bojqKmniuNm7zAjXBiFJdflFrjfg%2BnlQ6613oQvnVqMRwBYeCsapPV7hMT6Tf6icpA3kVt6B42eTy%2BIt42e1mRZAr%2F6LWtHPVIai0xBYYAvB0QZ7%2BXgrBie9cdEHHnffWl5SiZaAwdGVHEVMPzc3MMGOqUBSzbCNu%2Bq0HKqu0VN9o%2BAM7M6jK%2BoTtXfd0Re38PQHpTOyscLPBIkqzWSi2sxo05FnjPYhDmb1sHuv%2FO5Fc89jaV89IrCAOkwP8iTFWc9r%2BNtxn7Dq6gNfKNGxPevjHfo%2BmGt%2BPU6F4SfKgzgK%2B3V4Xfyft6FzJFdbz5IC80zdH%2FJoLAFBbtJucIxueWWGgGmDa%2FmPqHZwqc9EuEJMqACMRCMp0Wb&X-Amz-Signature=8c98a2b05adf332f5535047ab1961ad53cb94d157adeff0699fb75ffb4c134e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLU44C4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDN%2B31Dz9vf51InL%2F9ZZpcv7vmZZkzunj6tuyiPlAQFEgIgfcRjPLYR8CXAB1B5ypEs53Jx%2F1oQvjLYjMzn7y8hNKoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDi9XDoWR%2F54R3wWPyrcAzXsQa3du4ipqR9ncY7II7kP%2FulG%2Bq9YIPHqq6TY1w8Xx7pm3wePArmGqHETNIJP7ZXOTsLLg5suyeSTQ2rExz67PPqsm%2BwMXwEINmaWqjNJAphrF53nzYrRJDg43bpWou1CxXxDBG63nGK9oBExWfFzOaL8QoDaFZFJO1svXCIXEbXQdADSWRQQfbeWubMjRkBzr3d%2BUm8ZEZDTEbl3erIo1ughUH%2B7QpzB9%2FfGJedhqTgesP%2FbS1vSjJbu5FRrD4%2FCbWPS74Vrs%2F7I28nKAEkRXoC10si%2FLL8V5grKNz1qyU9ymqQUpTGodkbhPpTiHbZbwLbsSXA29VYNZRRXlubc6ybhI1A%2FZYTMIUGD4BVCXiHEXg%2B%2BT1GjFGJfnHE1HiDw83qPJK7JHbYmoYPRheA7DwO1BxIt0vhORpcs1z4ysHyWFusvD8V5mjjfgPf3VMLyJpY2PVamfL%2FJhf7RkH3HoKWUexIAMQR2Uh0vnvqS5bojqKmniuNm7zAjXBiFJdflFrjfg%2BnlQ6613oQvnVqMRwBYeCsapPV7hMT6Tf6icpA3kVt6B42eTy%2BIt42e1mRZAr%2F6LWtHPVIai0xBYYAvB0QZ7%2BXgrBie9cdEHHnffWl5SiZaAwdGVHEVMPzc3MMGOqUBSzbCNu%2Bq0HKqu0VN9o%2BAM7M6jK%2BoTtXfd0Re38PQHpTOyscLPBIkqzWSi2sxo05FnjPYhDmb1sHuv%2FO5Fc89jaV89IrCAOkwP8iTFWc9r%2BNtxn7Dq6gNfKNGxPevjHfo%2BmGt%2BPU6F4SfKgzgK%2B3V4Xfyft6FzJFdbz5IC80zdH%2FJoLAFBbtJucIxueWWGgGmDa%2FmPqHZwqc9EuEJMqACMRCMp0Wb&X-Amz-Signature=2c26d870d2efda634803d2fb7e915d34396a011a9baeb04708980a8395a54f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLU44C4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDN%2B31Dz9vf51InL%2F9ZZpcv7vmZZkzunj6tuyiPlAQFEgIgfcRjPLYR8CXAB1B5ypEs53Jx%2F1oQvjLYjMzn7y8hNKoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDi9XDoWR%2F54R3wWPyrcAzXsQa3du4ipqR9ncY7II7kP%2FulG%2Bq9YIPHqq6TY1w8Xx7pm3wePArmGqHETNIJP7ZXOTsLLg5suyeSTQ2rExz67PPqsm%2BwMXwEINmaWqjNJAphrF53nzYrRJDg43bpWou1CxXxDBG63nGK9oBExWfFzOaL8QoDaFZFJO1svXCIXEbXQdADSWRQQfbeWubMjRkBzr3d%2BUm8ZEZDTEbl3erIo1ughUH%2B7QpzB9%2FfGJedhqTgesP%2FbS1vSjJbu5FRrD4%2FCbWPS74Vrs%2F7I28nKAEkRXoC10si%2FLL8V5grKNz1qyU9ymqQUpTGodkbhPpTiHbZbwLbsSXA29VYNZRRXlubc6ybhI1A%2FZYTMIUGD4BVCXiHEXg%2B%2BT1GjFGJfnHE1HiDw83qPJK7JHbYmoYPRheA7DwO1BxIt0vhORpcs1z4ysHyWFusvD8V5mjjfgPf3VMLyJpY2PVamfL%2FJhf7RkH3HoKWUexIAMQR2Uh0vnvqS5bojqKmniuNm7zAjXBiFJdflFrjfg%2BnlQ6613oQvnVqMRwBYeCsapPV7hMT6Tf6icpA3kVt6B42eTy%2BIt42e1mRZAr%2F6LWtHPVIai0xBYYAvB0QZ7%2BXgrBie9cdEHHnffWl5SiZaAwdGVHEVMPzc3MMGOqUBSzbCNu%2Bq0HKqu0VN9o%2BAM7M6jK%2BoTtXfd0Re38PQHpTOyscLPBIkqzWSi2sxo05FnjPYhDmb1sHuv%2FO5Fc89jaV89IrCAOkwP8iTFWc9r%2BNtxn7Dq6gNfKNGxPevjHfo%2BmGt%2BPU6F4SfKgzgK%2B3V4Xfyft6FzJFdbz5IC80zdH%2FJoLAFBbtJucIxueWWGgGmDa%2FmPqHZwqc9EuEJMqACMRCMp0Wb&X-Amz-Signature=6e31a36b70ad8cde0f0d32fb26138ced432a5dbcfc9d8ca86f6c6db77300cabf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLU44C4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDN%2B31Dz9vf51InL%2F9ZZpcv7vmZZkzunj6tuyiPlAQFEgIgfcRjPLYR8CXAB1B5ypEs53Jx%2F1oQvjLYjMzn7y8hNKoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDi9XDoWR%2F54R3wWPyrcAzXsQa3du4ipqR9ncY7II7kP%2FulG%2Bq9YIPHqq6TY1w8Xx7pm3wePArmGqHETNIJP7ZXOTsLLg5suyeSTQ2rExz67PPqsm%2BwMXwEINmaWqjNJAphrF53nzYrRJDg43bpWou1CxXxDBG63nGK9oBExWfFzOaL8QoDaFZFJO1svXCIXEbXQdADSWRQQfbeWubMjRkBzr3d%2BUm8ZEZDTEbl3erIo1ughUH%2B7QpzB9%2FfGJedhqTgesP%2FbS1vSjJbu5FRrD4%2FCbWPS74Vrs%2F7I28nKAEkRXoC10si%2FLL8V5grKNz1qyU9ymqQUpTGodkbhPpTiHbZbwLbsSXA29VYNZRRXlubc6ybhI1A%2FZYTMIUGD4BVCXiHEXg%2B%2BT1GjFGJfnHE1HiDw83qPJK7JHbYmoYPRheA7DwO1BxIt0vhORpcs1z4ysHyWFusvD8V5mjjfgPf3VMLyJpY2PVamfL%2FJhf7RkH3HoKWUexIAMQR2Uh0vnvqS5bojqKmniuNm7zAjXBiFJdflFrjfg%2BnlQ6613oQvnVqMRwBYeCsapPV7hMT6Tf6icpA3kVt6B42eTy%2BIt42e1mRZAr%2F6LWtHPVIai0xBYYAvB0QZ7%2BXgrBie9cdEHHnffWl5SiZaAwdGVHEVMPzc3MMGOqUBSzbCNu%2Bq0HKqu0VN9o%2BAM7M6jK%2BoTtXfd0Re38PQHpTOyscLPBIkqzWSi2sxo05FnjPYhDmb1sHuv%2FO5Fc89jaV89IrCAOkwP8iTFWc9r%2BNtxn7Dq6gNfKNGxPevjHfo%2BmGt%2BPU6F4SfKgzgK%2B3V4Xfyft6FzJFdbz5IC80zdH%2FJoLAFBbtJucIxueWWGgGmDa%2FmPqHZwqc9EuEJMqACMRCMp0Wb&X-Amz-Signature=f8ef4a334d60b1cb53cebffe4c838e397a2a78a32771c205049cefb7dd247e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLU44C4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDN%2B31Dz9vf51InL%2F9ZZpcv7vmZZkzunj6tuyiPlAQFEgIgfcRjPLYR8CXAB1B5ypEs53Jx%2F1oQvjLYjMzn7y8hNKoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDi9XDoWR%2F54R3wWPyrcAzXsQa3du4ipqR9ncY7II7kP%2FulG%2Bq9YIPHqq6TY1w8Xx7pm3wePArmGqHETNIJP7ZXOTsLLg5suyeSTQ2rExz67PPqsm%2BwMXwEINmaWqjNJAphrF53nzYrRJDg43bpWou1CxXxDBG63nGK9oBExWfFzOaL8QoDaFZFJO1svXCIXEbXQdADSWRQQfbeWubMjRkBzr3d%2BUm8ZEZDTEbl3erIo1ughUH%2B7QpzB9%2FfGJedhqTgesP%2FbS1vSjJbu5FRrD4%2FCbWPS74Vrs%2F7I28nKAEkRXoC10si%2FLL8V5grKNz1qyU9ymqQUpTGodkbhPpTiHbZbwLbsSXA29VYNZRRXlubc6ybhI1A%2FZYTMIUGD4BVCXiHEXg%2B%2BT1GjFGJfnHE1HiDw83qPJK7JHbYmoYPRheA7DwO1BxIt0vhORpcs1z4ysHyWFusvD8V5mjjfgPf3VMLyJpY2PVamfL%2FJhf7RkH3HoKWUexIAMQR2Uh0vnvqS5bojqKmniuNm7zAjXBiFJdflFrjfg%2BnlQ6613oQvnVqMRwBYeCsapPV7hMT6Tf6icpA3kVt6B42eTy%2BIt42e1mRZAr%2F6LWtHPVIai0xBYYAvB0QZ7%2BXgrBie9cdEHHnffWl5SiZaAwdGVHEVMPzc3MMGOqUBSzbCNu%2Bq0HKqu0VN9o%2BAM7M6jK%2BoTtXfd0Re38PQHpTOyscLPBIkqzWSi2sxo05FnjPYhDmb1sHuv%2FO5Fc89jaV89IrCAOkwP8iTFWc9r%2BNtxn7Dq6gNfKNGxPevjHfo%2BmGt%2BPU6F4SfKgzgK%2B3V4Xfyft6FzJFdbz5IC80zdH%2FJoLAFBbtJucIxueWWGgGmDa%2FmPqHZwqc9EuEJMqACMRCMp0Wb&X-Amz-Signature=6185849b9b8f9bc7707c1ffe20c427336e5797c14d0e64c0019b161a4a80b72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLU44C4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDN%2B31Dz9vf51InL%2F9ZZpcv7vmZZkzunj6tuyiPlAQFEgIgfcRjPLYR8CXAB1B5ypEs53Jx%2F1oQvjLYjMzn7y8hNKoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDi9XDoWR%2F54R3wWPyrcAzXsQa3du4ipqR9ncY7II7kP%2FulG%2Bq9YIPHqq6TY1w8Xx7pm3wePArmGqHETNIJP7ZXOTsLLg5suyeSTQ2rExz67PPqsm%2BwMXwEINmaWqjNJAphrF53nzYrRJDg43bpWou1CxXxDBG63nGK9oBExWfFzOaL8QoDaFZFJO1svXCIXEbXQdADSWRQQfbeWubMjRkBzr3d%2BUm8ZEZDTEbl3erIo1ughUH%2B7QpzB9%2FfGJedhqTgesP%2FbS1vSjJbu5FRrD4%2FCbWPS74Vrs%2F7I28nKAEkRXoC10si%2FLL8V5grKNz1qyU9ymqQUpTGodkbhPpTiHbZbwLbsSXA29VYNZRRXlubc6ybhI1A%2FZYTMIUGD4BVCXiHEXg%2B%2BT1GjFGJfnHE1HiDw83qPJK7JHbYmoYPRheA7DwO1BxIt0vhORpcs1z4ysHyWFusvD8V5mjjfgPf3VMLyJpY2PVamfL%2FJhf7RkH3HoKWUexIAMQR2Uh0vnvqS5bojqKmniuNm7zAjXBiFJdflFrjfg%2BnlQ6613oQvnVqMRwBYeCsapPV7hMT6Tf6icpA3kVt6B42eTy%2BIt42e1mRZAr%2F6LWtHPVIai0xBYYAvB0QZ7%2BXgrBie9cdEHHnffWl5SiZaAwdGVHEVMPzc3MMGOqUBSzbCNu%2Bq0HKqu0VN9o%2BAM7M6jK%2BoTtXfd0Re38PQHpTOyscLPBIkqzWSi2sxo05FnjPYhDmb1sHuv%2FO5Fc89jaV89IrCAOkwP8iTFWc9r%2BNtxn7Dq6gNfKNGxPevjHfo%2BmGt%2BPU6F4SfKgzgK%2B3V4Xfyft6FzJFdbz5IC80zdH%2FJoLAFBbtJucIxueWWGgGmDa%2FmPqHZwqc9EuEJMqACMRCMp0Wb&X-Amz-Signature=6018caf17dc1547e1613216881334e14f6b212d6ce26069c1adeb209af9957f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLU44C4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDN%2B31Dz9vf51InL%2F9ZZpcv7vmZZkzunj6tuyiPlAQFEgIgfcRjPLYR8CXAB1B5ypEs53Jx%2F1oQvjLYjMzn7y8hNKoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDi9XDoWR%2F54R3wWPyrcAzXsQa3du4ipqR9ncY7II7kP%2FulG%2Bq9YIPHqq6TY1w8Xx7pm3wePArmGqHETNIJP7ZXOTsLLg5suyeSTQ2rExz67PPqsm%2BwMXwEINmaWqjNJAphrF53nzYrRJDg43bpWou1CxXxDBG63nGK9oBExWfFzOaL8QoDaFZFJO1svXCIXEbXQdADSWRQQfbeWubMjRkBzr3d%2BUm8ZEZDTEbl3erIo1ughUH%2B7QpzB9%2FfGJedhqTgesP%2FbS1vSjJbu5FRrD4%2FCbWPS74Vrs%2F7I28nKAEkRXoC10si%2FLL8V5grKNz1qyU9ymqQUpTGodkbhPpTiHbZbwLbsSXA29VYNZRRXlubc6ybhI1A%2FZYTMIUGD4BVCXiHEXg%2B%2BT1GjFGJfnHE1HiDw83qPJK7JHbYmoYPRheA7DwO1BxIt0vhORpcs1z4ysHyWFusvD8V5mjjfgPf3VMLyJpY2PVamfL%2FJhf7RkH3HoKWUexIAMQR2Uh0vnvqS5bojqKmniuNm7zAjXBiFJdflFrjfg%2BnlQ6613oQvnVqMRwBYeCsapPV7hMT6Tf6icpA3kVt6B42eTy%2BIt42e1mRZAr%2F6LWtHPVIai0xBYYAvB0QZ7%2BXgrBie9cdEHHnffWl5SiZaAwdGVHEVMPzc3MMGOqUBSzbCNu%2Bq0HKqu0VN9o%2BAM7M6jK%2BoTtXfd0Re38PQHpTOyscLPBIkqzWSi2sxo05FnjPYhDmb1sHuv%2FO5Fc89jaV89IrCAOkwP8iTFWc9r%2BNtxn7Dq6gNfKNGxPevjHfo%2BmGt%2BPU6F4SfKgzgK%2B3V4Xfyft6FzJFdbz5IC80zdH%2FJoLAFBbtJucIxueWWGgGmDa%2FmPqHZwqc9EuEJMqACMRCMp0Wb&X-Amz-Signature=bbf4b54947ef501208313742319c042d34ed6cc4326bc7383f362dfa8caf82b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLU44C4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDN%2B31Dz9vf51InL%2F9ZZpcv7vmZZkzunj6tuyiPlAQFEgIgfcRjPLYR8CXAB1B5ypEs53Jx%2F1oQvjLYjMzn7y8hNKoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDi9XDoWR%2F54R3wWPyrcAzXsQa3du4ipqR9ncY7II7kP%2FulG%2Bq9YIPHqq6TY1w8Xx7pm3wePArmGqHETNIJP7ZXOTsLLg5suyeSTQ2rExz67PPqsm%2BwMXwEINmaWqjNJAphrF53nzYrRJDg43bpWou1CxXxDBG63nGK9oBExWfFzOaL8QoDaFZFJO1svXCIXEbXQdADSWRQQfbeWubMjRkBzr3d%2BUm8ZEZDTEbl3erIo1ughUH%2B7QpzB9%2FfGJedhqTgesP%2FbS1vSjJbu5FRrD4%2FCbWPS74Vrs%2F7I28nKAEkRXoC10si%2FLL8V5grKNz1qyU9ymqQUpTGodkbhPpTiHbZbwLbsSXA29VYNZRRXlubc6ybhI1A%2FZYTMIUGD4BVCXiHEXg%2B%2BT1GjFGJfnHE1HiDw83qPJK7JHbYmoYPRheA7DwO1BxIt0vhORpcs1z4ysHyWFusvD8V5mjjfgPf3VMLyJpY2PVamfL%2FJhf7RkH3HoKWUexIAMQR2Uh0vnvqS5bojqKmniuNm7zAjXBiFJdflFrjfg%2BnlQ6613oQvnVqMRwBYeCsapPV7hMT6Tf6icpA3kVt6B42eTy%2BIt42e1mRZAr%2F6LWtHPVIai0xBYYAvB0QZ7%2BXgrBie9cdEHHnffWl5SiZaAwdGVHEVMPzc3MMGOqUBSzbCNu%2Bq0HKqu0VN9o%2BAM7M6jK%2BoTtXfd0Re38PQHpTOyscLPBIkqzWSi2sxo05FnjPYhDmb1sHuv%2FO5Fc89jaV89IrCAOkwP8iTFWc9r%2BNtxn7Dq6gNfKNGxPevjHfo%2BmGt%2BPU6F4SfKgzgK%2B3V4Xfyft6FzJFdbz5IC80zdH%2FJoLAFBbtJucIxueWWGgGmDa%2FmPqHZwqc9EuEJMqACMRCMp0Wb&X-Amz-Signature=c3c11c5e70703c8c6d41dd76290663f3bd6c593761063ec8ff55de458ffaff84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
