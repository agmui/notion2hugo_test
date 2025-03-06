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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDBEMBP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV66zNenMBfhTWurfd%2BVx2krMCsbmE5zYBA7Wef79lHAiBk6N8OyaoFiv%2FJmN2%2FwT1whw4AD%2BtzCyghJ7mguOqaQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMsuTkhWhhfc41zDW%2BKtwD7FFvf0xqK0gPR6dakE3ZkY%2F8fyVvOaeaf%2Fthv2iO%2FnblF77Ub7xwExp3gPEeSQMQvxoto2ayQVJSwH%2FfEUA9aXJMyQKUX1zVApaJ6%2F0TD0NTmARNowM9iyPezoPzm%2BjiL1t979707faXxlLYhQEzGTTuY53WhYhd%2BM%2Fl1440Uxep0HV34QMw8R0lNy9IuwE5Mn4Ih5ZQCueWTVu8Yn1OtfyIjcbyHVMF1pK9kkxVABWH8%2FuX310zYgxou4vkZsjlIWFx9AYr5YHk9Q5RTVN%2BuNhZFxRV8Hwg3FUJ%2BE%2B6jDSAaMroAylNsMrEBxlUQenBqeL%2Fg3gtCYeYlTI%2F9XjQGqRN7uzx7PruibyJDP1IzC4UL0kIOkvxRE38aPZ3Rq68jTVyYxE4Dw1d7JxlruIKgBxTuOeFMAladscgRzg9Y1mx%2FDyfvHpfCiQJaT16GjIroOVNBnNeFRv7hcDfIx7MrCrAtRegQ0Ku1t2bJrWRqXvHCbsZw%2B%2FHvDNd48lunm7bXBSaQnX1WQgThRdvoU1JqQRlT%2F0vbGccqjnG%2BY4i7nrdPnIBoVXOL3CrNB1hS35wMfrT3RuGdxVlGMSo3JgdQxWZnEXlKYKPPMtI9wVKKiVMEC5LHygJTYGcbEswkvakvgY6pgHD2f%2B64dkp2Ed3Rh6AHsJpnrxbard90fzPRQ8UDzNpG7RywRa0pzeX%2FnFx4SAAKovId78tKkiM2VIpCf7A6klSH74WUQc65s6pXBULAy4xoCk6m4vryrrL4%2BM3jfv%2FcJgkN04855dKjVEklZkOPF5KIIxN4IIMmYUM%2F33YfalNTwtORLUtl%2BenXCRVvTsOCtsHo2XwRsqIGGPvFkqmBfITO9n79iT5&X-Amz-Signature=4d1ac2a330f350db4b92b25e88e0dad15a1074dca2041f708325dd51ece7760e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDBEMBP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV66zNenMBfhTWurfd%2BVx2krMCsbmE5zYBA7Wef79lHAiBk6N8OyaoFiv%2FJmN2%2FwT1whw4AD%2BtzCyghJ7mguOqaQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMsuTkhWhhfc41zDW%2BKtwD7FFvf0xqK0gPR6dakE3ZkY%2F8fyVvOaeaf%2Fthv2iO%2FnblF77Ub7xwExp3gPEeSQMQvxoto2ayQVJSwH%2FfEUA9aXJMyQKUX1zVApaJ6%2F0TD0NTmARNowM9iyPezoPzm%2BjiL1t979707faXxlLYhQEzGTTuY53WhYhd%2BM%2Fl1440Uxep0HV34QMw8R0lNy9IuwE5Mn4Ih5ZQCueWTVu8Yn1OtfyIjcbyHVMF1pK9kkxVABWH8%2FuX310zYgxou4vkZsjlIWFx9AYr5YHk9Q5RTVN%2BuNhZFxRV8Hwg3FUJ%2BE%2B6jDSAaMroAylNsMrEBxlUQenBqeL%2Fg3gtCYeYlTI%2F9XjQGqRN7uzx7PruibyJDP1IzC4UL0kIOkvxRE38aPZ3Rq68jTVyYxE4Dw1d7JxlruIKgBxTuOeFMAladscgRzg9Y1mx%2FDyfvHpfCiQJaT16GjIroOVNBnNeFRv7hcDfIx7MrCrAtRegQ0Ku1t2bJrWRqXvHCbsZw%2B%2FHvDNd48lunm7bXBSaQnX1WQgThRdvoU1JqQRlT%2F0vbGccqjnG%2BY4i7nrdPnIBoVXOL3CrNB1hS35wMfrT3RuGdxVlGMSo3JgdQxWZnEXlKYKPPMtI9wVKKiVMEC5LHygJTYGcbEswkvakvgY6pgHD2f%2B64dkp2Ed3Rh6AHsJpnrxbard90fzPRQ8UDzNpG7RywRa0pzeX%2FnFx4SAAKovId78tKkiM2VIpCf7A6klSH74WUQc65s6pXBULAy4xoCk6m4vryrrL4%2BM3jfv%2FcJgkN04855dKjVEklZkOPF5KIIxN4IIMmYUM%2F33YfalNTwtORLUtl%2BenXCRVvTsOCtsHo2XwRsqIGGPvFkqmBfITO9n79iT5&X-Amz-Signature=ad7c285ce360a6f231409881cc2505c12e9b764e4eb1defb2a9001fe02fd8970&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDBEMBP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV66zNenMBfhTWurfd%2BVx2krMCsbmE5zYBA7Wef79lHAiBk6N8OyaoFiv%2FJmN2%2FwT1whw4AD%2BtzCyghJ7mguOqaQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMsuTkhWhhfc41zDW%2BKtwD7FFvf0xqK0gPR6dakE3ZkY%2F8fyVvOaeaf%2Fthv2iO%2FnblF77Ub7xwExp3gPEeSQMQvxoto2ayQVJSwH%2FfEUA9aXJMyQKUX1zVApaJ6%2F0TD0NTmARNowM9iyPezoPzm%2BjiL1t979707faXxlLYhQEzGTTuY53WhYhd%2BM%2Fl1440Uxep0HV34QMw8R0lNy9IuwE5Mn4Ih5ZQCueWTVu8Yn1OtfyIjcbyHVMF1pK9kkxVABWH8%2FuX310zYgxou4vkZsjlIWFx9AYr5YHk9Q5RTVN%2BuNhZFxRV8Hwg3FUJ%2BE%2B6jDSAaMroAylNsMrEBxlUQenBqeL%2Fg3gtCYeYlTI%2F9XjQGqRN7uzx7PruibyJDP1IzC4UL0kIOkvxRE38aPZ3Rq68jTVyYxE4Dw1d7JxlruIKgBxTuOeFMAladscgRzg9Y1mx%2FDyfvHpfCiQJaT16GjIroOVNBnNeFRv7hcDfIx7MrCrAtRegQ0Ku1t2bJrWRqXvHCbsZw%2B%2FHvDNd48lunm7bXBSaQnX1WQgThRdvoU1JqQRlT%2F0vbGccqjnG%2BY4i7nrdPnIBoVXOL3CrNB1hS35wMfrT3RuGdxVlGMSo3JgdQxWZnEXlKYKPPMtI9wVKKiVMEC5LHygJTYGcbEswkvakvgY6pgHD2f%2B64dkp2Ed3Rh6AHsJpnrxbard90fzPRQ8UDzNpG7RywRa0pzeX%2FnFx4SAAKovId78tKkiM2VIpCf7A6klSH74WUQc65s6pXBULAy4xoCk6m4vryrrL4%2BM3jfv%2FcJgkN04855dKjVEklZkOPF5KIIxN4IIMmYUM%2F33YfalNTwtORLUtl%2BenXCRVvTsOCtsHo2XwRsqIGGPvFkqmBfITO9n79iT5&X-Amz-Signature=08e5237547252da6d982ef413a80f98564479e93634fbedff6ab93bbde4814e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDBEMBP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV66zNenMBfhTWurfd%2BVx2krMCsbmE5zYBA7Wef79lHAiBk6N8OyaoFiv%2FJmN2%2FwT1whw4AD%2BtzCyghJ7mguOqaQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMsuTkhWhhfc41zDW%2BKtwD7FFvf0xqK0gPR6dakE3ZkY%2F8fyVvOaeaf%2Fthv2iO%2FnblF77Ub7xwExp3gPEeSQMQvxoto2ayQVJSwH%2FfEUA9aXJMyQKUX1zVApaJ6%2F0TD0NTmARNowM9iyPezoPzm%2BjiL1t979707faXxlLYhQEzGTTuY53WhYhd%2BM%2Fl1440Uxep0HV34QMw8R0lNy9IuwE5Mn4Ih5ZQCueWTVu8Yn1OtfyIjcbyHVMF1pK9kkxVABWH8%2FuX310zYgxou4vkZsjlIWFx9AYr5YHk9Q5RTVN%2BuNhZFxRV8Hwg3FUJ%2BE%2B6jDSAaMroAylNsMrEBxlUQenBqeL%2Fg3gtCYeYlTI%2F9XjQGqRN7uzx7PruibyJDP1IzC4UL0kIOkvxRE38aPZ3Rq68jTVyYxE4Dw1d7JxlruIKgBxTuOeFMAladscgRzg9Y1mx%2FDyfvHpfCiQJaT16GjIroOVNBnNeFRv7hcDfIx7MrCrAtRegQ0Ku1t2bJrWRqXvHCbsZw%2B%2FHvDNd48lunm7bXBSaQnX1WQgThRdvoU1JqQRlT%2F0vbGccqjnG%2BY4i7nrdPnIBoVXOL3CrNB1hS35wMfrT3RuGdxVlGMSo3JgdQxWZnEXlKYKPPMtI9wVKKiVMEC5LHygJTYGcbEswkvakvgY6pgHD2f%2B64dkp2Ed3Rh6AHsJpnrxbard90fzPRQ8UDzNpG7RywRa0pzeX%2FnFx4SAAKovId78tKkiM2VIpCf7A6klSH74WUQc65s6pXBULAy4xoCk6m4vryrrL4%2BM3jfv%2FcJgkN04855dKjVEklZkOPF5KIIxN4IIMmYUM%2F33YfalNTwtORLUtl%2BenXCRVvTsOCtsHo2XwRsqIGGPvFkqmBfITO9n79iT5&X-Amz-Signature=b47623214fb2a8c9395e6bc5390843e245b6ea3b10836586e617ec9903bce72c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDBEMBP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV66zNenMBfhTWurfd%2BVx2krMCsbmE5zYBA7Wef79lHAiBk6N8OyaoFiv%2FJmN2%2FwT1whw4AD%2BtzCyghJ7mguOqaQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMsuTkhWhhfc41zDW%2BKtwD7FFvf0xqK0gPR6dakE3ZkY%2F8fyVvOaeaf%2Fthv2iO%2FnblF77Ub7xwExp3gPEeSQMQvxoto2ayQVJSwH%2FfEUA9aXJMyQKUX1zVApaJ6%2F0TD0NTmARNowM9iyPezoPzm%2BjiL1t979707faXxlLYhQEzGTTuY53WhYhd%2BM%2Fl1440Uxep0HV34QMw8R0lNy9IuwE5Mn4Ih5ZQCueWTVu8Yn1OtfyIjcbyHVMF1pK9kkxVABWH8%2FuX310zYgxou4vkZsjlIWFx9AYr5YHk9Q5RTVN%2BuNhZFxRV8Hwg3FUJ%2BE%2B6jDSAaMroAylNsMrEBxlUQenBqeL%2Fg3gtCYeYlTI%2F9XjQGqRN7uzx7PruibyJDP1IzC4UL0kIOkvxRE38aPZ3Rq68jTVyYxE4Dw1d7JxlruIKgBxTuOeFMAladscgRzg9Y1mx%2FDyfvHpfCiQJaT16GjIroOVNBnNeFRv7hcDfIx7MrCrAtRegQ0Ku1t2bJrWRqXvHCbsZw%2B%2FHvDNd48lunm7bXBSaQnX1WQgThRdvoU1JqQRlT%2F0vbGccqjnG%2BY4i7nrdPnIBoVXOL3CrNB1hS35wMfrT3RuGdxVlGMSo3JgdQxWZnEXlKYKPPMtI9wVKKiVMEC5LHygJTYGcbEswkvakvgY6pgHD2f%2B64dkp2Ed3Rh6AHsJpnrxbard90fzPRQ8UDzNpG7RywRa0pzeX%2FnFx4SAAKovId78tKkiM2VIpCf7A6klSH74WUQc65s6pXBULAy4xoCk6m4vryrrL4%2BM3jfv%2FcJgkN04855dKjVEklZkOPF5KIIxN4IIMmYUM%2F33YfalNTwtORLUtl%2BenXCRVvTsOCtsHo2XwRsqIGGPvFkqmBfITO9n79iT5&X-Amz-Signature=515d07e8426ee3293ac17a1d606e246dd605a41650d36a946c307af918a93581&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDBEMBP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV66zNenMBfhTWurfd%2BVx2krMCsbmE5zYBA7Wef79lHAiBk6N8OyaoFiv%2FJmN2%2FwT1whw4AD%2BtzCyghJ7mguOqaQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMsuTkhWhhfc41zDW%2BKtwD7FFvf0xqK0gPR6dakE3ZkY%2F8fyVvOaeaf%2Fthv2iO%2FnblF77Ub7xwExp3gPEeSQMQvxoto2ayQVJSwH%2FfEUA9aXJMyQKUX1zVApaJ6%2F0TD0NTmARNowM9iyPezoPzm%2BjiL1t979707faXxlLYhQEzGTTuY53WhYhd%2BM%2Fl1440Uxep0HV34QMw8R0lNy9IuwE5Mn4Ih5ZQCueWTVu8Yn1OtfyIjcbyHVMF1pK9kkxVABWH8%2FuX310zYgxou4vkZsjlIWFx9AYr5YHk9Q5RTVN%2BuNhZFxRV8Hwg3FUJ%2BE%2B6jDSAaMroAylNsMrEBxlUQenBqeL%2Fg3gtCYeYlTI%2F9XjQGqRN7uzx7PruibyJDP1IzC4UL0kIOkvxRE38aPZ3Rq68jTVyYxE4Dw1d7JxlruIKgBxTuOeFMAladscgRzg9Y1mx%2FDyfvHpfCiQJaT16GjIroOVNBnNeFRv7hcDfIx7MrCrAtRegQ0Ku1t2bJrWRqXvHCbsZw%2B%2FHvDNd48lunm7bXBSaQnX1WQgThRdvoU1JqQRlT%2F0vbGccqjnG%2BY4i7nrdPnIBoVXOL3CrNB1hS35wMfrT3RuGdxVlGMSo3JgdQxWZnEXlKYKPPMtI9wVKKiVMEC5LHygJTYGcbEswkvakvgY6pgHD2f%2B64dkp2Ed3Rh6AHsJpnrxbard90fzPRQ8UDzNpG7RywRa0pzeX%2FnFx4SAAKovId78tKkiM2VIpCf7A6klSH74WUQc65s6pXBULAy4xoCk6m4vryrrL4%2BM3jfv%2FcJgkN04855dKjVEklZkOPF5KIIxN4IIMmYUM%2F33YfalNTwtORLUtl%2BenXCRVvTsOCtsHo2XwRsqIGGPvFkqmBfITO9n79iT5&X-Amz-Signature=0c6146d859394e07a2a601e88ec6985da0386973b757660021695e2b92215f74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDBEMBP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV66zNenMBfhTWurfd%2BVx2krMCsbmE5zYBA7Wef79lHAiBk6N8OyaoFiv%2FJmN2%2FwT1whw4AD%2BtzCyghJ7mguOqaQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMsuTkhWhhfc41zDW%2BKtwD7FFvf0xqK0gPR6dakE3ZkY%2F8fyVvOaeaf%2Fthv2iO%2FnblF77Ub7xwExp3gPEeSQMQvxoto2ayQVJSwH%2FfEUA9aXJMyQKUX1zVApaJ6%2F0TD0NTmARNowM9iyPezoPzm%2BjiL1t979707faXxlLYhQEzGTTuY53WhYhd%2BM%2Fl1440Uxep0HV34QMw8R0lNy9IuwE5Mn4Ih5ZQCueWTVu8Yn1OtfyIjcbyHVMF1pK9kkxVABWH8%2FuX310zYgxou4vkZsjlIWFx9AYr5YHk9Q5RTVN%2BuNhZFxRV8Hwg3FUJ%2BE%2B6jDSAaMroAylNsMrEBxlUQenBqeL%2Fg3gtCYeYlTI%2F9XjQGqRN7uzx7PruibyJDP1IzC4UL0kIOkvxRE38aPZ3Rq68jTVyYxE4Dw1d7JxlruIKgBxTuOeFMAladscgRzg9Y1mx%2FDyfvHpfCiQJaT16GjIroOVNBnNeFRv7hcDfIx7MrCrAtRegQ0Ku1t2bJrWRqXvHCbsZw%2B%2FHvDNd48lunm7bXBSaQnX1WQgThRdvoU1JqQRlT%2F0vbGccqjnG%2BY4i7nrdPnIBoVXOL3CrNB1hS35wMfrT3RuGdxVlGMSo3JgdQxWZnEXlKYKPPMtI9wVKKiVMEC5LHygJTYGcbEswkvakvgY6pgHD2f%2B64dkp2Ed3Rh6AHsJpnrxbard90fzPRQ8UDzNpG7RywRa0pzeX%2FnFx4SAAKovId78tKkiM2VIpCf7A6klSH74WUQc65s6pXBULAy4xoCk6m4vryrrL4%2BM3jfv%2FcJgkN04855dKjVEklZkOPF5KIIxN4IIMmYUM%2F33YfalNTwtORLUtl%2BenXCRVvTsOCtsHo2XwRsqIGGPvFkqmBfITO9n79iT5&X-Amz-Signature=c81517b10c25206b25a6961f825fb7c823883584b59d56bed50a816d4f448028&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDBEMBP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV66zNenMBfhTWurfd%2BVx2krMCsbmE5zYBA7Wef79lHAiBk6N8OyaoFiv%2FJmN2%2FwT1whw4AD%2BtzCyghJ7mguOqaQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMsuTkhWhhfc41zDW%2BKtwD7FFvf0xqK0gPR6dakE3ZkY%2F8fyVvOaeaf%2Fthv2iO%2FnblF77Ub7xwExp3gPEeSQMQvxoto2ayQVJSwH%2FfEUA9aXJMyQKUX1zVApaJ6%2F0TD0NTmARNowM9iyPezoPzm%2BjiL1t979707faXxlLYhQEzGTTuY53WhYhd%2BM%2Fl1440Uxep0HV34QMw8R0lNy9IuwE5Mn4Ih5ZQCueWTVu8Yn1OtfyIjcbyHVMF1pK9kkxVABWH8%2FuX310zYgxou4vkZsjlIWFx9AYr5YHk9Q5RTVN%2BuNhZFxRV8Hwg3FUJ%2BE%2B6jDSAaMroAylNsMrEBxlUQenBqeL%2Fg3gtCYeYlTI%2F9XjQGqRN7uzx7PruibyJDP1IzC4UL0kIOkvxRE38aPZ3Rq68jTVyYxE4Dw1d7JxlruIKgBxTuOeFMAladscgRzg9Y1mx%2FDyfvHpfCiQJaT16GjIroOVNBnNeFRv7hcDfIx7MrCrAtRegQ0Ku1t2bJrWRqXvHCbsZw%2B%2FHvDNd48lunm7bXBSaQnX1WQgThRdvoU1JqQRlT%2F0vbGccqjnG%2BY4i7nrdPnIBoVXOL3CrNB1hS35wMfrT3RuGdxVlGMSo3JgdQxWZnEXlKYKPPMtI9wVKKiVMEC5LHygJTYGcbEswkvakvgY6pgHD2f%2B64dkp2Ed3Rh6AHsJpnrxbard90fzPRQ8UDzNpG7RywRa0pzeX%2FnFx4SAAKovId78tKkiM2VIpCf7A6klSH74WUQc65s6pXBULAy4xoCk6m4vryrrL4%2BM3jfv%2FcJgkN04855dKjVEklZkOPF5KIIxN4IIMmYUM%2F33YfalNTwtORLUtl%2BenXCRVvTsOCtsHo2XwRsqIGGPvFkqmBfITO9n79iT5&X-Amz-Signature=b7a2de53605df20fae50c302c9e39fd84679a65e5c3d6ecaf3bdf2701f6edef5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
