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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IXDSER%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSVd51vA6MvvUyW8%2FOgga7dMKBTYcAXD58isr1NGwfYAIhAPfOV%2B6E29J3MTQgyWLpPgLIvGrSz6StJLs%2BVCVJPwQfKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOlbi2lSHaobuoH%2B4q3AMibAlQw6R47pZjbJzkWZZP5n%2FGxKguaiN0RAkRIG%2FGgDPfRsukGbknscon%2FoEPsgcxjOscoCkW0vAQKgIOf3O3e6pDBsjqD5MH1qh6CTXKya8ASm1ymKQDx2kzYLU2FF00GR9OigZN%2Fwn4wm7Ig1fGKg%2BB%2BGZbAMPTeIA6Jki9ZgCx5U2sd83Fpcl%2FWuAFbx5H5%2B9ft8YQVVoVR5jQxvFfIXgMyXYBoTnlI3J14IgiNCYy87%2BBswnFKZrFMvkFUJriBHMZODwqvkaFI3FccbUruod22dUoIzRBAY5hjNZ93TKexiHQCdMnr7zHL6xIVYnSENxFiI16NtwXiIRnnDZUBPPt65uBSBJYiIS3Oucge8cXeX6s8yJkQQqXP76r307bJ82nKPmYlx%2B33EyP8kV6se1okCQPgFsiPJbcdAKofWd8%2BgdFCv%2BKKJtWxosqZh7s0USwtDhHslMJth5rdBIeaLg0Ch8h8N1xTvszmfZMgR4WdC8ysj032SWJTyDwWQQjgGDdk9FgOxpKLhug47Cq%2B8HHqe39WpjfamyUMJC6hQL9S%2FvE%2FaAkTCjQbIJjQzhqHUX9Yi8RFYO7v7HKw7%2BbCxB0UPWBMS8Nqpn4waqx%2BTVhQ0E33iCbUim7LTCXhcq%2BBjqkAY955rjGTaJztyU4JCIDrat8UaTMYEZRAS1wSKogi3ujrDxNyGeN7SzomTNsTFValTOywdHehEdNhdDYk3DTaa2SXKuZJN5nHM2jAPUb5jVIZscVzCkix01KAnyYblfNOPcUksbS3TSFflE4%2BQNpr4%2FhKZChtNoB6bD2vdLFucuqE5tvTMW4%2FedUg9pmLP2xDtWy32faBkMGZEF2icrQnNAZIOcL&X-Amz-Signature=b6b383be7818481eae5db2101e8f55827bb2e09e40c758edb909add251fa0c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IXDSER%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSVd51vA6MvvUyW8%2FOgga7dMKBTYcAXD58isr1NGwfYAIhAPfOV%2B6E29J3MTQgyWLpPgLIvGrSz6StJLs%2BVCVJPwQfKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOlbi2lSHaobuoH%2B4q3AMibAlQw6R47pZjbJzkWZZP5n%2FGxKguaiN0RAkRIG%2FGgDPfRsukGbknscon%2FoEPsgcxjOscoCkW0vAQKgIOf3O3e6pDBsjqD5MH1qh6CTXKya8ASm1ymKQDx2kzYLU2FF00GR9OigZN%2Fwn4wm7Ig1fGKg%2BB%2BGZbAMPTeIA6Jki9ZgCx5U2sd83Fpcl%2FWuAFbx5H5%2B9ft8YQVVoVR5jQxvFfIXgMyXYBoTnlI3J14IgiNCYy87%2BBswnFKZrFMvkFUJriBHMZODwqvkaFI3FccbUruod22dUoIzRBAY5hjNZ93TKexiHQCdMnr7zHL6xIVYnSENxFiI16NtwXiIRnnDZUBPPt65uBSBJYiIS3Oucge8cXeX6s8yJkQQqXP76r307bJ82nKPmYlx%2B33EyP8kV6se1okCQPgFsiPJbcdAKofWd8%2BgdFCv%2BKKJtWxosqZh7s0USwtDhHslMJth5rdBIeaLg0Ch8h8N1xTvszmfZMgR4WdC8ysj032SWJTyDwWQQjgGDdk9FgOxpKLhug47Cq%2B8HHqe39WpjfamyUMJC6hQL9S%2FvE%2FaAkTCjQbIJjQzhqHUX9Yi8RFYO7v7HKw7%2BbCxB0UPWBMS8Nqpn4waqx%2BTVhQ0E33iCbUim7LTCXhcq%2BBjqkAY955rjGTaJztyU4JCIDrat8UaTMYEZRAS1wSKogi3ujrDxNyGeN7SzomTNsTFValTOywdHehEdNhdDYk3DTaa2SXKuZJN5nHM2jAPUb5jVIZscVzCkix01KAnyYblfNOPcUksbS3TSFflE4%2BQNpr4%2FhKZChtNoB6bD2vdLFucuqE5tvTMW4%2FedUg9pmLP2xDtWy32faBkMGZEF2icrQnNAZIOcL&X-Amz-Signature=a0541daa3e7c64f48271ce4bab4fed556da0e51116e72a2c52fbce2f7375bc2e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IXDSER%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSVd51vA6MvvUyW8%2FOgga7dMKBTYcAXD58isr1NGwfYAIhAPfOV%2B6E29J3MTQgyWLpPgLIvGrSz6StJLs%2BVCVJPwQfKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOlbi2lSHaobuoH%2B4q3AMibAlQw6R47pZjbJzkWZZP5n%2FGxKguaiN0RAkRIG%2FGgDPfRsukGbknscon%2FoEPsgcxjOscoCkW0vAQKgIOf3O3e6pDBsjqD5MH1qh6CTXKya8ASm1ymKQDx2kzYLU2FF00GR9OigZN%2Fwn4wm7Ig1fGKg%2BB%2BGZbAMPTeIA6Jki9ZgCx5U2sd83Fpcl%2FWuAFbx5H5%2B9ft8YQVVoVR5jQxvFfIXgMyXYBoTnlI3J14IgiNCYy87%2BBswnFKZrFMvkFUJriBHMZODwqvkaFI3FccbUruod22dUoIzRBAY5hjNZ93TKexiHQCdMnr7zHL6xIVYnSENxFiI16NtwXiIRnnDZUBPPt65uBSBJYiIS3Oucge8cXeX6s8yJkQQqXP76r307bJ82nKPmYlx%2B33EyP8kV6se1okCQPgFsiPJbcdAKofWd8%2BgdFCv%2BKKJtWxosqZh7s0USwtDhHslMJth5rdBIeaLg0Ch8h8N1xTvszmfZMgR4WdC8ysj032SWJTyDwWQQjgGDdk9FgOxpKLhug47Cq%2B8HHqe39WpjfamyUMJC6hQL9S%2FvE%2FaAkTCjQbIJjQzhqHUX9Yi8RFYO7v7HKw7%2BbCxB0UPWBMS8Nqpn4waqx%2BTVhQ0E33iCbUim7LTCXhcq%2BBjqkAY955rjGTaJztyU4JCIDrat8UaTMYEZRAS1wSKogi3ujrDxNyGeN7SzomTNsTFValTOywdHehEdNhdDYk3DTaa2SXKuZJN5nHM2jAPUb5jVIZscVzCkix01KAnyYblfNOPcUksbS3TSFflE4%2BQNpr4%2FhKZChtNoB6bD2vdLFucuqE5tvTMW4%2FedUg9pmLP2xDtWy32faBkMGZEF2icrQnNAZIOcL&X-Amz-Signature=fe45428e7ba8a48d10fa6bd3356e53513369b8cc4d5240be832954c5fddbd56e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IXDSER%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSVd51vA6MvvUyW8%2FOgga7dMKBTYcAXD58isr1NGwfYAIhAPfOV%2B6E29J3MTQgyWLpPgLIvGrSz6StJLs%2BVCVJPwQfKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOlbi2lSHaobuoH%2B4q3AMibAlQw6R47pZjbJzkWZZP5n%2FGxKguaiN0RAkRIG%2FGgDPfRsukGbknscon%2FoEPsgcxjOscoCkW0vAQKgIOf3O3e6pDBsjqD5MH1qh6CTXKya8ASm1ymKQDx2kzYLU2FF00GR9OigZN%2Fwn4wm7Ig1fGKg%2BB%2BGZbAMPTeIA6Jki9ZgCx5U2sd83Fpcl%2FWuAFbx5H5%2B9ft8YQVVoVR5jQxvFfIXgMyXYBoTnlI3J14IgiNCYy87%2BBswnFKZrFMvkFUJriBHMZODwqvkaFI3FccbUruod22dUoIzRBAY5hjNZ93TKexiHQCdMnr7zHL6xIVYnSENxFiI16NtwXiIRnnDZUBPPt65uBSBJYiIS3Oucge8cXeX6s8yJkQQqXP76r307bJ82nKPmYlx%2B33EyP8kV6se1okCQPgFsiPJbcdAKofWd8%2BgdFCv%2BKKJtWxosqZh7s0USwtDhHslMJth5rdBIeaLg0Ch8h8N1xTvszmfZMgR4WdC8ysj032SWJTyDwWQQjgGDdk9FgOxpKLhug47Cq%2B8HHqe39WpjfamyUMJC6hQL9S%2FvE%2FaAkTCjQbIJjQzhqHUX9Yi8RFYO7v7HKw7%2BbCxB0UPWBMS8Nqpn4waqx%2BTVhQ0E33iCbUim7LTCXhcq%2BBjqkAY955rjGTaJztyU4JCIDrat8UaTMYEZRAS1wSKogi3ujrDxNyGeN7SzomTNsTFValTOywdHehEdNhdDYk3DTaa2SXKuZJN5nHM2jAPUb5jVIZscVzCkix01KAnyYblfNOPcUksbS3TSFflE4%2BQNpr4%2FhKZChtNoB6bD2vdLFucuqE5tvTMW4%2FedUg9pmLP2xDtWy32faBkMGZEF2icrQnNAZIOcL&X-Amz-Signature=7e1adc218ffa85a13b9e41bb42ecbc34492eebd14004bcb9ec67714789b4d723&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IXDSER%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSVd51vA6MvvUyW8%2FOgga7dMKBTYcAXD58isr1NGwfYAIhAPfOV%2B6E29J3MTQgyWLpPgLIvGrSz6StJLs%2BVCVJPwQfKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOlbi2lSHaobuoH%2B4q3AMibAlQw6R47pZjbJzkWZZP5n%2FGxKguaiN0RAkRIG%2FGgDPfRsukGbknscon%2FoEPsgcxjOscoCkW0vAQKgIOf3O3e6pDBsjqD5MH1qh6CTXKya8ASm1ymKQDx2kzYLU2FF00GR9OigZN%2Fwn4wm7Ig1fGKg%2BB%2BGZbAMPTeIA6Jki9ZgCx5U2sd83Fpcl%2FWuAFbx5H5%2B9ft8YQVVoVR5jQxvFfIXgMyXYBoTnlI3J14IgiNCYy87%2BBswnFKZrFMvkFUJriBHMZODwqvkaFI3FccbUruod22dUoIzRBAY5hjNZ93TKexiHQCdMnr7zHL6xIVYnSENxFiI16NtwXiIRnnDZUBPPt65uBSBJYiIS3Oucge8cXeX6s8yJkQQqXP76r307bJ82nKPmYlx%2B33EyP8kV6se1okCQPgFsiPJbcdAKofWd8%2BgdFCv%2BKKJtWxosqZh7s0USwtDhHslMJth5rdBIeaLg0Ch8h8N1xTvszmfZMgR4WdC8ysj032SWJTyDwWQQjgGDdk9FgOxpKLhug47Cq%2B8HHqe39WpjfamyUMJC6hQL9S%2FvE%2FaAkTCjQbIJjQzhqHUX9Yi8RFYO7v7HKw7%2BbCxB0UPWBMS8Nqpn4waqx%2BTVhQ0E33iCbUim7LTCXhcq%2BBjqkAY955rjGTaJztyU4JCIDrat8UaTMYEZRAS1wSKogi3ujrDxNyGeN7SzomTNsTFValTOywdHehEdNhdDYk3DTaa2SXKuZJN5nHM2jAPUb5jVIZscVzCkix01KAnyYblfNOPcUksbS3TSFflE4%2BQNpr4%2FhKZChtNoB6bD2vdLFucuqE5tvTMW4%2FedUg9pmLP2xDtWy32faBkMGZEF2icrQnNAZIOcL&X-Amz-Signature=a1760bc985cdc4e3c169619ab6ffe9f73a9a4c38366cf00edeb5d07abe797626&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IXDSER%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSVd51vA6MvvUyW8%2FOgga7dMKBTYcAXD58isr1NGwfYAIhAPfOV%2B6E29J3MTQgyWLpPgLIvGrSz6StJLs%2BVCVJPwQfKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOlbi2lSHaobuoH%2B4q3AMibAlQw6R47pZjbJzkWZZP5n%2FGxKguaiN0RAkRIG%2FGgDPfRsukGbknscon%2FoEPsgcxjOscoCkW0vAQKgIOf3O3e6pDBsjqD5MH1qh6CTXKya8ASm1ymKQDx2kzYLU2FF00GR9OigZN%2Fwn4wm7Ig1fGKg%2BB%2BGZbAMPTeIA6Jki9ZgCx5U2sd83Fpcl%2FWuAFbx5H5%2B9ft8YQVVoVR5jQxvFfIXgMyXYBoTnlI3J14IgiNCYy87%2BBswnFKZrFMvkFUJriBHMZODwqvkaFI3FccbUruod22dUoIzRBAY5hjNZ93TKexiHQCdMnr7zHL6xIVYnSENxFiI16NtwXiIRnnDZUBPPt65uBSBJYiIS3Oucge8cXeX6s8yJkQQqXP76r307bJ82nKPmYlx%2B33EyP8kV6se1okCQPgFsiPJbcdAKofWd8%2BgdFCv%2BKKJtWxosqZh7s0USwtDhHslMJth5rdBIeaLg0Ch8h8N1xTvszmfZMgR4WdC8ysj032SWJTyDwWQQjgGDdk9FgOxpKLhug47Cq%2B8HHqe39WpjfamyUMJC6hQL9S%2FvE%2FaAkTCjQbIJjQzhqHUX9Yi8RFYO7v7HKw7%2BbCxB0UPWBMS8Nqpn4waqx%2BTVhQ0E33iCbUim7LTCXhcq%2BBjqkAY955rjGTaJztyU4JCIDrat8UaTMYEZRAS1wSKogi3ujrDxNyGeN7SzomTNsTFValTOywdHehEdNhdDYk3DTaa2SXKuZJN5nHM2jAPUb5jVIZscVzCkix01KAnyYblfNOPcUksbS3TSFflE4%2BQNpr4%2FhKZChtNoB6bD2vdLFucuqE5tvTMW4%2FedUg9pmLP2xDtWy32faBkMGZEF2icrQnNAZIOcL&X-Amz-Signature=794f0e3ad220d81382ec9c32f0865e2d3b71d58421863f729646eb846fc552ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IXDSER%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSVd51vA6MvvUyW8%2FOgga7dMKBTYcAXD58isr1NGwfYAIhAPfOV%2B6E29J3MTQgyWLpPgLIvGrSz6StJLs%2BVCVJPwQfKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOlbi2lSHaobuoH%2B4q3AMibAlQw6R47pZjbJzkWZZP5n%2FGxKguaiN0RAkRIG%2FGgDPfRsukGbknscon%2FoEPsgcxjOscoCkW0vAQKgIOf3O3e6pDBsjqD5MH1qh6CTXKya8ASm1ymKQDx2kzYLU2FF00GR9OigZN%2Fwn4wm7Ig1fGKg%2BB%2BGZbAMPTeIA6Jki9ZgCx5U2sd83Fpcl%2FWuAFbx5H5%2B9ft8YQVVoVR5jQxvFfIXgMyXYBoTnlI3J14IgiNCYy87%2BBswnFKZrFMvkFUJriBHMZODwqvkaFI3FccbUruod22dUoIzRBAY5hjNZ93TKexiHQCdMnr7zHL6xIVYnSENxFiI16NtwXiIRnnDZUBPPt65uBSBJYiIS3Oucge8cXeX6s8yJkQQqXP76r307bJ82nKPmYlx%2B33EyP8kV6se1okCQPgFsiPJbcdAKofWd8%2BgdFCv%2BKKJtWxosqZh7s0USwtDhHslMJth5rdBIeaLg0Ch8h8N1xTvszmfZMgR4WdC8ysj032SWJTyDwWQQjgGDdk9FgOxpKLhug47Cq%2B8HHqe39WpjfamyUMJC6hQL9S%2FvE%2FaAkTCjQbIJjQzhqHUX9Yi8RFYO7v7HKw7%2BbCxB0UPWBMS8Nqpn4waqx%2BTVhQ0E33iCbUim7LTCXhcq%2BBjqkAY955rjGTaJztyU4JCIDrat8UaTMYEZRAS1wSKogi3ujrDxNyGeN7SzomTNsTFValTOywdHehEdNhdDYk3DTaa2SXKuZJN5nHM2jAPUb5jVIZscVzCkix01KAnyYblfNOPcUksbS3TSFflE4%2BQNpr4%2FhKZChtNoB6bD2vdLFucuqE5tvTMW4%2FedUg9pmLP2xDtWy32faBkMGZEF2icrQnNAZIOcL&X-Amz-Signature=5c94e446c778c02747b3eacac8d82abf9196a3feacfa63fc9c4b2c8e223967ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IXDSER%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSVd51vA6MvvUyW8%2FOgga7dMKBTYcAXD58isr1NGwfYAIhAPfOV%2B6E29J3MTQgyWLpPgLIvGrSz6StJLs%2BVCVJPwQfKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOlbi2lSHaobuoH%2B4q3AMibAlQw6R47pZjbJzkWZZP5n%2FGxKguaiN0RAkRIG%2FGgDPfRsukGbknscon%2FoEPsgcxjOscoCkW0vAQKgIOf3O3e6pDBsjqD5MH1qh6CTXKya8ASm1ymKQDx2kzYLU2FF00GR9OigZN%2Fwn4wm7Ig1fGKg%2BB%2BGZbAMPTeIA6Jki9ZgCx5U2sd83Fpcl%2FWuAFbx5H5%2B9ft8YQVVoVR5jQxvFfIXgMyXYBoTnlI3J14IgiNCYy87%2BBswnFKZrFMvkFUJriBHMZODwqvkaFI3FccbUruod22dUoIzRBAY5hjNZ93TKexiHQCdMnr7zHL6xIVYnSENxFiI16NtwXiIRnnDZUBPPt65uBSBJYiIS3Oucge8cXeX6s8yJkQQqXP76r307bJ82nKPmYlx%2B33EyP8kV6se1okCQPgFsiPJbcdAKofWd8%2BgdFCv%2BKKJtWxosqZh7s0USwtDhHslMJth5rdBIeaLg0Ch8h8N1xTvszmfZMgR4WdC8ysj032SWJTyDwWQQjgGDdk9FgOxpKLhug47Cq%2B8HHqe39WpjfamyUMJC6hQL9S%2FvE%2FaAkTCjQbIJjQzhqHUX9Yi8RFYO7v7HKw7%2BbCxB0UPWBMS8Nqpn4waqx%2BTVhQ0E33iCbUim7LTCXhcq%2BBjqkAY955rjGTaJztyU4JCIDrat8UaTMYEZRAS1wSKogi3ujrDxNyGeN7SzomTNsTFValTOywdHehEdNhdDYk3DTaa2SXKuZJN5nHM2jAPUb5jVIZscVzCkix01KAnyYblfNOPcUksbS3TSFflE4%2BQNpr4%2FhKZChtNoB6bD2vdLFucuqE5tvTMW4%2FedUg9pmLP2xDtWy32faBkMGZEF2icrQnNAZIOcL&X-Amz-Signature=b0c37c8e4e2faf7da6a71c676ee6b736d2841e749592346bb1a28d348bd23334&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
