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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3XD3Z%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDMucKQOkqy8eQrh2MsAqEY%2Fd1ZDNyRRoqqee1w%2F5FJ4gIhAOjft2WCsbNCvLyE1CRaqEl489Kni6LA46eEgMU79ulDKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfR5Sk0bs%2F6RUMPE0q3AOUi%2B86PR4HzwmPS1kIswbR0Eqvs90WCfgIfm2VMyuouK5Whq5%2ByI5gHr3is7%2BTmcH0GyEKxWql%2B%2B%2Bi7aTx3D2DcvyBMt9ZqETc5Hzq8BO5Xh8m1ReO1R7EAxdls88qpeCcp0yQltXP%2BycAD%2F5YFmAocT4GCnlTMH6bG3e98kyS4Jx2seb0H%2BNWImDYQqll3eijbev4jCeJp%2F5dmdGNRvUfcU9MaqSwhxyshk5aIpy%2B0hIzCWI1vWSRahxbB%2FxZ4NMy7Cyq5HG%2Bk6tDnrsIHZ4w9WbpwE7YmmOKqTJucO57eLbPWbRwq5tJBctO20q%2Bw2FNx4UnqOQVuMP5%2BABtuelhtWgBZbBHuOcHfyTet9KrVdTRbtnMwFZxg1%2BRjzYCmQin7S6d1dYLqWaS6Jx7JF9RHxNzZJtKnvd3kLHGa75OkbR1quULjEX8sBwW%2BrJZF%2B6eFO3OXEhmrTbDcAGvey547flopfWkcI4WWb9xu%2Bejgk%2FZzaCKPqDNwhW4ddpI69D976xMBrXKSp03GShrbhT%2BB60Ux05sPeKFTFdxvclF4v0L2vxVnF7%2BIoLiHR2Vy%2FUssoY%2BRDxtP0wbtwqVOSMwH7kM2MuhSG%2Buv%2BGiUj7j1Dbo3W3TdH4xow9UFjC76O6%2BBjqkAYHYc1FBBaHwn41Fi%2Fx0EoGIegBls38ONfhgMkUueru1SjMjgCoDUD1r94jBZChF01St8lDWPkjw0GDe62tVzdaJsMZx4uM0Eg%2BPfmPs5wjvi2U7RnFmFhHxZZEeNBbjoS3t%2F2DhhrwOZkQcbQQGuIFOTIZ4xJsPfQfXqq%2FtGYbWtj170CsAqzOCIJDCmB7AbSb2ljD7szrgQULt%2FfnOJpdEW666&X-Amz-Signature=639fd75989801f9cbb0e7e88605815f0efd8549f32f7cffe65eeb60e6d477584&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3XD3Z%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDMucKQOkqy8eQrh2MsAqEY%2Fd1ZDNyRRoqqee1w%2F5FJ4gIhAOjft2WCsbNCvLyE1CRaqEl489Kni6LA46eEgMU79ulDKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfR5Sk0bs%2F6RUMPE0q3AOUi%2B86PR4HzwmPS1kIswbR0Eqvs90WCfgIfm2VMyuouK5Whq5%2ByI5gHr3is7%2BTmcH0GyEKxWql%2B%2B%2Bi7aTx3D2DcvyBMt9ZqETc5Hzq8BO5Xh8m1ReO1R7EAxdls88qpeCcp0yQltXP%2BycAD%2F5YFmAocT4GCnlTMH6bG3e98kyS4Jx2seb0H%2BNWImDYQqll3eijbev4jCeJp%2F5dmdGNRvUfcU9MaqSwhxyshk5aIpy%2B0hIzCWI1vWSRahxbB%2FxZ4NMy7Cyq5HG%2Bk6tDnrsIHZ4w9WbpwE7YmmOKqTJucO57eLbPWbRwq5tJBctO20q%2Bw2FNx4UnqOQVuMP5%2BABtuelhtWgBZbBHuOcHfyTet9KrVdTRbtnMwFZxg1%2BRjzYCmQin7S6d1dYLqWaS6Jx7JF9RHxNzZJtKnvd3kLHGa75OkbR1quULjEX8sBwW%2BrJZF%2B6eFO3OXEhmrTbDcAGvey547flopfWkcI4WWb9xu%2Bejgk%2FZzaCKPqDNwhW4ddpI69D976xMBrXKSp03GShrbhT%2BB60Ux05sPeKFTFdxvclF4v0L2vxVnF7%2BIoLiHR2Vy%2FUssoY%2BRDxtP0wbtwqVOSMwH7kM2MuhSG%2Buv%2BGiUj7j1Dbo3W3TdH4xow9UFjC76O6%2BBjqkAYHYc1FBBaHwn41Fi%2Fx0EoGIegBls38ONfhgMkUueru1SjMjgCoDUD1r94jBZChF01St8lDWPkjw0GDe62tVzdaJsMZx4uM0Eg%2BPfmPs5wjvi2U7RnFmFhHxZZEeNBbjoS3t%2F2DhhrwOZkQcbQQGuIFOTIZ4xJsPfQfXqq%2FtGYbWtj170CsAqzOCIJDCmB7AbSb2ljD7szrgQULt%2FfnOJpdEW666&X-Amz-Signature=57bca52eb0aa2d745c2731354920e41780142dedf3f70728f13d0a5071758e90&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3XD3Z%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDMucKQOkqy8eQrh2MsAqEY%2Fd1ZDNyRRoqqee1w%2F5FJ4gIhAOjft2WCsbNCvLyE1CRaqEl489Kni6LA46eEgMU79ulDKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfR5Sk0bs%2F6RUMPE0q3AOUi%2B86PR4HzwmPS1kIswbR0Eqvs90WCfgIfm2VMyuouK5Whq5%2ByI5gHr3is7%2BTmcH0GyEKxWql%2B%2B%2Bi7aTx3D2DcvyBMt9ZqETc5Hzq8BO5Xh8m1ReO1R7EAxdls88qpeCcp0yQltXP%2BycAD%2F5YFmAocT4GCnlTMH6bG3e98kyS4Jx2seb0H%2BNWImDYQqll3eijbev4jCeJp%2F5dmdGNRvUfcU9MaqSwhxyshk5aIpy%2B0hIzCWI1vWSRahxbB%2FxZ4NMy7Cyq5HG%2Bk6tDnrsIHZ4w9WbpwE7YmmOKqTJucO57eLbPWbRwq5tJBctO20q%2Bw2FNx4UnqOQVuMP5%2BABtuelhtWgBZbBHuOcHfyTet9KrVdTRbtnMwFZxg1%2BRjzYCmQin7S6d1dYLqWaS6Jx7JF9RHxNzZJtKnvd3kLHGa75OkbR1quULjEX8sBwW%2BrJZF%2B6eFO3OXEhmrTbDcAGvey547flopfWkcI4WWb9xu%2Bejgk%2FZzaCKPqDNwhW4ddpI69D976xMBrXKSp03GShrbhT%2BB60Ux05sPeKFTFdxvclF4v0L2vxVnF7%2BIoLiHR2Vy%2FUssoY%2BRDxtP0wbtwqVOSMwH7kM2MuhSG%2Buv%2BGiUj7j1Dbo3W3TdH4xow9UFjC76O6%2BBjqkAYHYc1FBBaHwn41Fi%2Fx0EoGIegBls38ONfhgMkUueru1SjMjgCoDUD1r94jBZChF01St8lDWPkjw0GDe62tVzdaJsMZx4uM0Eg%2BPfmPs5wjvi2U7RnFmFhHxZZEeNBbjoS3t%2F2DhhrwOZkQcbQQGuIFOTIZ4xJsPfQfXqq%2FtGYbWtj170CsAqzOCIJDCmB7AbSb2ljD7szrgQULt%2FfnOJpdEW666&X-Amz-Signature=162fa0be6446cf9de657851f19b658dc9e937af29c71689ef01d3ed76c28aeb2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3XD3Z%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDMucKQOkqy8eQrh2MsAqEY%2Fd1ZDNyRRoqqee1w%2F5FJ4gIhAOjft2WCsbNCvLyE1CRaqEl489Kni6LA46eEgMU79ulDKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfR5Sk0bs%2F6RUMPE0q3AOUi%2B86PR4HzwmPS1kIswbR0Eqvs90WCfgIfm2VMyuouK5Whq5%2ByI5gHr3is7%2BTmcH0GyEKxWql%2B%2B%2Bi7aTx3D2DcvyBMt9ZqETc5Hzq8BO5Xh8m1ReO1R7EAxdls88qpeCcp0yQltXP%2BycAD%2F5YFmAocT4GCnlTMH6bG3e98kyS4Jx2seb0H%2BNWImDYQqll3eijbev4jCeJp%2F5dmdGNRvUfcU9MaqSwhxyshk5aIpy%2B0hIzCWI1vWSRahxbB%2FxZ4NMy7Cyq5HG%2Bk6tDnrsIHZ4w9WbpwE7YmmOKqTJucO57eLbPWbRwq5tJBctO20q%2Bw2FNx4UnqOQVuMP5%2BABtuelhtWgBZbBHuOcHfyTet9KrVdTRbtnMwFZxg1%2BRjzYCmQin7S6d1dYLqWaS6Jx7JF9RHxNzZJtKnvd3kLHGa75OkbR1quULjEX8sBwW%2BrJZF%2B6eFO3OXEhmrTbDcAGvey547flopfWkcI4WWb9xu%2Bejgk%2FZzaCKPqDNwhW4ddpI69D976xMBrXKSp03GShrbhT%2BB60Ux05sPeKFTFdxvclF4v0L2vxVnF7%2BIoLiHR2Vy%2FUssoY%2BRDxtP0wbtwqVOSMwH7kM2MuhSG%2Buv%2BGiUj7j1Dbo3W3TdH4xow9UFjC76O6%2BBjqkAYHYc1FBBaHwn41Fi%2Fx0EoGIegBls38ONfhgMkUueru1SjMjgCoDUD1r94jBZChF01St8lDWPkjw0GDe62tVzdaJsMZx4uM0Eg%2BPfmPs5wjvi2U7RnFmFhHxZZEeNBbjoS3t%2F2DhhrwOZkQcbQQGuIFOTIZ4xJsPfQfXqq%2FtGYbWtj170CsAqzOCIJDCmB7AbSb2ljD7szrgQULt%2FfnOJpdEW666&X-Amz-Signature=fe3e72e1e565605afef51c3ed87c75f07a6046b3673fa0c459b2dca754a1fffd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3XD3Z%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDMucKQOkqy8eQrh2MsAqEY%2Fd1ZDNyRRoqqee1w%2F5FJ4gIhAOjft2WCsbNCvLyE1CRaqEl489Kni6LA46eEgMU79ulDKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfR5Sk0bs%2F6RUMPE0q3AOUi%2B86PR4HzwmPS1kIswbR0Eqvs90WCfgIfm2VMyuouK5Whq5%2ByI5gHr3is7%2BTmcH0GyEKxWql%2B%2B%2Bi7aTx3D2DcvyBMt9ZqETc5Hzq8BO5Xh8m1ReO1R7EAxdls88qpeCcp0yQltXP%2BycAD%2F5YFmAocT4GCnlTMH6bG3e98kyS4Jx2seb0H%2BNWImDYQqll3eijbev4jCeJp%2F5dmdGNRvUfcU9MaqSwhxyshk5aIpy%2B0hIzCWI1vWSRahxbB%2FxZ4NMy7Cyq5HG%2Bk6tDnrsIHZ4w9WbpwE7YmmOKqTJucO57eLbPWbRwq5tJBctO20q%2Bw2FNx4UnqOQVuMP5%2BABtuelhtWgBZbBHuOcHfyTet9KrVdTRbtnMwFZxg1%2BRjzYCmQin7S6d1dYLqWaS6Jx7JF9RHxNzZJtKnvd3kLHGa75OkbR1quULjEX8sBwW%2BrJZF%2B6eFO3OXEhmrTbDcAGvey547flopfWkcI4WWb9xu%2Bejgk%2FZzaCKPqDNwhW4ddpI69D976xMBrXKSp03GShrbhT%2BB60Ux05sPeKFTFdxvclF4v0L2vxVnF7%2BIoLiHR2Vy%2FUssoY%2BRDxtP0wbtwqVOSMwH7kM2MuhSG%2Buv%2BGiUj7j1Dbo3W3TdH4xow9UFjC76O6%2BBjqkAYHYc1FBBaHwn41Fi%2Fx0EoGIegBls38ONfhgMkUueru1SjMjgCoDUD1r94jBZChF01St8lDWPkjw0GDe62tVzdaJsMZx4uM0Eg%2BPfmPs5wjvi2U7RnFmFhHxZZEeNBbjoS3t%2F2DhhrwOZkQcbQQGuIFOTIZ4xJsPfQfXqq%2FtGYbWtj170CsAqzOCIJDCmB7AbSb2ljD7szrgQULt%2FfnOJpdEW666&X-Amz-Signature=167277c85dfa7996e6e992a6f8632dd1ec93069e8adda5d5086a1fc82b0f9328&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3XD3Z%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDMucKQOkqy8eQrh2MsAqEY%2Fd1ZDNyRRoqqee1w%2F5FJ4gIhAOjft2WCsbNCvLyE1CRaqEl489Kni6LA46eEgMU79ulDKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfR5Sk0bs%2F6RUMPE0q3AOUi%2B86PR4HzwmPS1kIswbR0Eqvs90WCfgIfm2VMyuouK5Whq5%2ByI5gHr3is7%2BTmcH0GyEKxWql%2B%2B%2Bi7aTx3D2DcvyBMt9ZqETc5Hzq8BO5Xh8m1ReO1R7EAxdls88qpeCcp0yQltXP%2BycAD%2F5YFmAocT4GCnlTMH6bG3e98kyS4Jx2seb0H%2BNWImDYQqll3eijbev4jCeJp%2F5dmdGNRvUfcU9MaqSwhxyshk5aIpy%2B0hIzCWI1vWSRahxbB%2FxZ4NMy7Cyq5HG%2Bk6tDnrsIHZ4w9WbpwE7YmmOKqTJucO57eLbPWbRwq5tJBctO20q%2Bw2FNx4UnqOQVuMP5%2BABtuelhtWgBZbBHuOcHfyTet9KrVdTRbtnMwFZxg1%2BRjzYCmQin7S6d1dYLqWaS6Jx7JF9RHxNzZJtKnvd3kLHGa75OkbR1quULjEX8sBwW%2BrJZF%2B6eFO3OXEhmrTbDcAGvey547flopfWkcI4WWb9xu%2Bejgk%2FZzaCKPqDNwhW4ddpI69D976xMBrXKSp03GShrbhT%2BB60Ux05sPeKFTFdxvclF4v0L2vxVnF7%2BIoLiHR2Vy%2FUssoY%2BRDxtP0wbtwqVOSMwH7kM2MuhSG%2Buv%2BGiUj7j1Dbo3W3TdH4xow9UFjC76O6%2BBjqkAYHYc1FBBaHwn41Fi%2Fx0EoGIegBls38ONfhgMkUueru1SjMjgCoDUD1r94jBZChF01St8lDWPkjw0GDe62tVzdaJsMZx4uM0Eg%2BPfmPs5wjvi2U7RnFmFhHxZZEeNBbjoS3t%2F2DhhrwOZkQcbQQGuIFOTIZ4xJsPfQfXqq%2FtGYbWtj170CsAqzOCIJDCmB7AbSb2ljD7szrgQULt%2FfnOJpdEW666&X-Amz-Signature=56b6942d25113004d136651779ebeb1643a166f225b277ab61644eb42add1f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3XD3Z%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDMucKQOkqy8eQrh2MsAqEY%2Fd1ZDNyRRoqqee1w%2F5FJ4gIhAOjft2WCsbNCvLyE1CRaqEl489Kni6LA46eEgMU79ulDKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfR5Sk0bs%2F6RUMPE0q3AOUi%2B86PR4HzwmPS1kIswbR0Eqvs90WCfgIfm2VMyuouK5Whq5%2ByI5gHr3is7%2BTmcH0GyEKxWql%2B%2B%2Bi7aTx3D2DcvyBMt9ZqETc5Hzq8BO5Xh8m1ReO1R7EAxdls88qpeCcp0yQltXP%2BycAD%2F5YFmAocT4GCnlTMH6bG3e98kyS4Jx2seb0H%2BNWImDYQqll3eijbev4jCeJp%2F5dmdGNRvUfcU9MaqSwhxyshk5aIpy%2B0hIzCWI1vWSRahxbB%2FxZ4NMy7Cyq5HG%2Bk6tDnrsIHZ4w9WbpwE7YmmOKqTJucO57eLbPWbRwq5tJBctO20q%2Bw2FNx4UnqOQVuMP5%2BABtuelhtWgBZbBHuOcHfyTet9KrVdTRbtnMwFZxg1%2BRjzYCmQin7S6d1dYLqWaS6Jx7JF9RHxNzZJtKnvd3kLHGa75OkbR1quULjEX8sBwW%2BrJZF%2B6eFO3OXEhmrTbDcAGvey547flopfWkcI4WWb9xu%2Bejgk%2FZzaCKPqDNwhW4ddpI69D976xMBrXKSp03GShrbhT%2BB60Ux05sPeKFTFdxvclF4v0L2vxVnF7%2BIoLiHR2Vy%2FUssoY%2BRDxtP0wbtwqVOSMwH7kM2MuhSG%2Buv%2BGiUj7j1Dbo3W3TdH4xow9UFjC76O6%2BBjqkAYHYc1FBBaHwn41Fi%2Fx0EoGIegBls38ONfhgMkUueru1SjMjgCoDUD1r94jBZChF01St8lDWPkjw0GDe62tVzdaJsMZx4uM0Eg%2BPfmPs5wjvi2U7RnFmFhHxZZEeNBbjoS3t%2F2DhhrwOZkQcbQQGuIFOTIZ4xJsPfQfXqq%2FtGYbWtj170CsAqzOCIJDCmB7AbSb2ljD7szrgQULt%2FfnOJpdEW666&X-Amz-Signature=cb470c3cbc115b774777ad16700f5004a2a905d9e0e4f29055e27f7ec4bb41b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3XD3Z%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDMucKQOkqy8eQrh2MsAqEY%2Fd1ZDNyRRoqqee1w%2F5FJ4gIhAOjft2WCsbNCvLyE1CRaqEl489Kni6LA46eEgMU79ulDKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfR5Sk0bs%2F6RUMPE0q3AOUi%2B86PR4HzwmPS1kIswbR0Eqvs90WCfgIfm2VMyuouK5Whq5%2ByI5gHr3is7%2BTmcH0GyEKxWql%2B%2B%2Bi7aTx3D2DcvyBMt9ZqETc5Hzq8BO5Xh8m1ReO1R7EAxdls88qpeCcp0yQltXP%2BycAD%2F5YFmAocT4GCnlTMH6bG3e98kyS4Jx2seb0H%2BNWImDYQqll3eijbev4jCeJp%2F5dmdGNRvUfcU9MaqSwhxyshk5aIpy%2B0hIzCWI1vWSRahxbB%2FxZ4NMy7Cyq5HG%2Bk6tDnrsIHZ4w9WbpwE7YmmOKqTJucO57eLbPWbRwq5tJBctO20q%2Bw2FNx4UnqOQVuMP5%2BABtuelhtWgBZbBHuOcHfyTet9KrVdTRbtnMwFZxg1%2BRjzYCmQin7S6d1dYLqWaS6Jx7JF9RHxNzZJtKnvd3kLHGa75OkbR1quULjEX8sBwW%2BrJZF%2B6eFO3OXEhmrTbDcAGvey547flopfWkcI4WWb9xu%2Bejgk%2FZzaCKPqDNwhW4ddpI69D976xMBrXKSp03GShrbhT%2BB60Ux05sPeKFTFdxvclF4v0L2vxVnF7%2BIoLiHR2Vy%2FUssoY%2BRDxtP0wbtwqVOSMwH7kM2MuhSG%2Buv%2BGiUj7j1Dbo3W3TdH4xow9UFjC76O6%2BBjqkAYHYc1FBBaHwn41Fi%2Fx0EoGIegBls38ONfhgMkUueru1SjMjgCoDUD1r94jBZChF01St8lDWPkjw0GDe62tVzdaJsMZx4uM0Eg%2BPfmPs5wjvi2U7RnFmFhHxZZEeNBbjoS3t%2F2DhhrwOZkQcbQQGuIFOTIZ4xJsPfQfXqq%2FtGYbWtj170CsAqzOCIJDCmB7AbSb2ljD7szrgQULt%2FfnOJpdEW666&X-Amz-Signature=5b484c507d4e41aa4ed9538856a1637c8fe3188c94a8880cf996b358a609ca08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
