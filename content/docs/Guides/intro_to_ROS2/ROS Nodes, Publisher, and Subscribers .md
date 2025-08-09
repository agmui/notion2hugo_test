---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4YYJF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdwqt2anV3Spm0CLjHrfYRP8HwDAfJulPirA%2Fzfx%2BSwAiAIuU3XOazw9MhOrfQBR9vDtqWH8d5qaQBueYdmiKCMOSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPlUq%2BsBUPrrQ4vH0KtwDFkfp3rMWnYbGwySsr%2Bl2U7N0VBzCV0a5%2B6XLm3wt2CWrOlCaRDj9NYB%2FlSZpl2XcByL%2Bm1urVoLo2ChyWXEL9BJiptOyqOUQS8uUcfWb07kpBEG56IjNE62IZusgEmslbcmFnx%2F7P92maF8QYW%2BiL2312bKAyvk3M2FshNdxfBRYW6rXC4sBPTgz%2BiU49e4oxu4RQpCdI3tGI%2FRqUUJRBv5y7HpbCG2N8qmEKMDK6C29OunQWyXijXeNqWHU%2BTHtpLGkacDEYY4NuKQFFtj1Mqh6t0HYAIIL9fn3pEUbQwnVHGt0%2B1lniHOFh8GXUbi%2FCCP8pk%2BqCieM%2FEk4sZD1dYBecm6bMHGi1sq8uFMcei5ShnO%2FvpOXnVXd%2FCvDhVT3vinlmkDlCJKQYwUkYKZ3dJtGhrYjt3MXRQ1jzV8Y%2BbfJp6sJD7UHKHxTrIibw8pq0kYrOC4lOAUMORtaDW%2BG8zoY6rgNcqeUozI82dqPHU%2BzeaScuQz%2BX%2BL%2FBjHKaC2Vw6MUe3m90JsdNrf4FpLlaU%2FZNSw93BguGyEPrQtPQy6cyXwBjw3B%2BlRw0qKWjfQrcKq3QLtN3SuOtp8n8%2Fq8gcVDPEmqUazBuq2GpSzYugY2TAKM2pGKWP7vzccwpuHcxAY6pgEveyGGk8lu%2FCiSBHj0k5FXut71YlpItf3ZIPBaeQn3ZzqHEo5YR3yxsEHSLbzHMFlZWQ22eYYuU3rEtdHnw2Tnw7jjJfSiXrCHx9h3%2B8loa6sMc7fvKveKHH%2Bmqvh15b5ecMLui%2FLU5B5dC%2FAOCh3OWaTVUK7sgJIjBzE0ka9fk%2F8xoYiT%2BoK1X2Kcb4m2o7ozZMHSX1iAnpSoOpG39VzRWStkNCso&X-Amz-Signature=fbea27c4e2fe4535a53b5ad1792c329b2c1bb921ae774b9fde6d79b97db75ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4YYJF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdwqt2anV3Spm0CLjHrfYRP8HwDAfJulPirA%2Fzfx%2BSwAiAIuU3XOazw9MhOrfQBR9vDtqWH8d5qaQBueYdmiKCMOSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPlUq%2BsBUPrrQ4vH0KtwDFkfp3rMWnYbGwySsr%2Bl2U7N0VBzCV0a5%2B6XLm3wt2CWrOlCaRDj9NYB%2FlSZpl2XcByL%2Bm1urVoLo2ChyWXEL9BJiptOyqOUQS8uUcfWb07kpBEG56IjNE62IZusgEmslbcmFnx%2F7P92maF8QYW%2BiL2312bKAyvk3M2FshNdxfBRYW6rXC4sBPTgz%2BiU49e4oxu4RQpCdI3tGI%2FRqUUJRBv5y7HpbCG2N8qmEKMDK6C29OunQWyXijXeNqWHU%2BTHtpLGkacDEYY4NuKQFFtj1Mqh6t0HYAIIL9fn3pEUbQwnVHGt0%2B1lniHOFh8GXUbi%2FCCP8pk%2BqCieM%2FEk4sZD1dYBecm6bMHGi1sq8uFMcei5ShnO%2FvpOXnVXd%2FCvDhVT3vinlmkDlCJKQYwUkYKZ3dJtGhrYjt3MXRQ1jzV8Y%2BbfJp6sJD7UHKHxTrIibw8pq0kYrOC4lOAUMORtaDW%2BG8zoY6rgNcqeUozI82dqPHU%2BzeaScuQz%2BX%2BL%2FBjHKaC2Vw6MUe3m90JsdNrf4FpLlaU%2FZNSw93BguGyEPrQtPQy6cyXwBjw3B%2BlRw0qKWjfQrcKq3QLtN3SuOtp8n8%2Fq8gcVDPEmqUazBuq2GpSzYugY2TAKM2pGKWP7vzccwpuHcxAY6pgEveyGGk8lu%2FCiSBHj0k5FXut71YlpItf3ZIPBaeQn3ZzqHEo5YR3yxsEHSLbzHMFlZWQ22eYYuU3rEtdHnw2Tnw7jjJfSiXrCHx9h3%2B8loa6sMc7fvKveKHH%2Bmqvh15b5ecMLui%2FLU5B5dC%2FAOCh3OWaTVUK7sgJIjBzE0ka9fk%2F8xoYiT%2BoK1X2Kcb4m2o7ozZMHSX1iAnpSoOpG39VzRWStkNCso&X-Amz-Signature=013022e2a0c2aab5cd3dd745647fc4af9460275edf166a3ae491192dabee42cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4YYJF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdwqt2anV3Spm0CLjHrfYRP8HwDAfJulPirA%2Fzfx%2BSwAiAIuU3XOazw9MhOrfQBR9vDtqWH8d5qaQBueYdmiKCMOSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPlUq%2BsBUPrrQ4vH0KtwDFkfp3rMWnYbGwySsr%2Bl2U7N0VBzCV0a5%2B6XLm3wt2CWrOlCaRDj9NYB%2FlSZpl2XcByL%2Bm1urVoLo2ChyWXEL9BJiptOyqOUQS8uUcfWb07kpBEG56IjNE62IZusgEmslbcmFnx%2F7P92maF8QYW%2BiL2312bKAyvk3M2FshNdxfBRYW6rXC4sBPTgz%2BiU49e4oxu4RQpCdI3tGI%2FRqUUJRBv5y7HpbCG2N8qmEKMDK6C29OunQWyXijXeNqWHU%2BTHtpLGkacDEYY4NuKQFFtj1Mqh6t0HYAIIL9fn3pEUbQwnVHGt0%2B1lniHOFh8GXUbi%2FCCP8pk%2BqCieM%2FEk4sZD1dYBecm6bMHGi1sq8uFMcei5ShnO%2FvpOXnVXd%2FCvDhVT3vinlmkDlCJKQYwUkYKZ3dJtGhrYjt3MXRQ1jzV8Y%2BbfJp6sJD7UHKHxTrIibw8pq0kYrOC4lOAUMORtaDW%2BG8zoY6rgNcqeUozI82dqPHU%2BzeaScuQz%2BX%2BL%2FBjHKaC2Vw6MUe3m90JsdNrf4FpLlaU%2FZNSw93BguGyEPrQtPQy6cyXwBjw3B%2BlRw0qKWjfQrcKq3QLtN3SuOtp8n8%2Fq8gcVDPEmqUazBuq2GpSzYugY2TAKM2pGKWP7vzccwpuHcxAY6pgEveyGGk8lu%2FCiSBHj0k5FXut71YlpItf3ZIPBaeQn3ZzqHEo5YR3yxsEHSLbzHMFlZWQ22eYYuU3rEtdHnw2Tnw7jjJfSiXrCHx9h3%2B8loa6sMc7fvKveKHH%2Bmqvh15b5ecMLui%2FLU5B5dC%2FAOCh3OWaTVUK7sgJIjBzE0ka9fk%2F8xoYiT%2BoK1X2Kcb4m2o7ozZMHSX1iAnpSoOpG39VzRWStkNCso&X-Amz-Signature=1fbe80fb5530d66cbf2340b4fc7448ebba87850d16a1552cbf14417f433475a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4YYJF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdwqt2anV3Spm0CLjHrfYRP8HwDAfJulPirA%2Fzfx%2BSwAiAIuU3XOazw9MhOrfQBR9vDtqWH8d5qaQBueYdmiKCMOSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPlUq%2BsBUPrrQ4vH0KtwDFkfp3rMWnYbGwySsr%2Bl2U7N0VBzCV0a5%2B6XLm3wt2CWrOlCaRDj9NYB%2FlSZpl2XcByL%2Bm1urVoLo2ChyWXEL9BJiptOyqOUQS8uUcfWb07kpBEG56IjNE62IZusgEmslbcmFnx%2F7P92maF8QYW%2BiL2312bKAyvk3M2FshNdxfBRYW6rXC4sBPTgz%2BiU49e4oxu4RQpCdI3tGI%2FRqUUJRBv5y7HpbCG2N8qmEKMDK6C29OunQWyXijXeNqWHU%2BTHtpLGkacDEYY4NuKQFFtj1Mqh6t0HYAIIL9fn3pEUbQwnVHGt0%2B1lniHOFh8GXUbi%2FCCP8pk%2BqCieM%2FEk4sZD1dYBecm6bMHGi1sq8uFMcei5ShnO%2FvpOXnVXd%2FCvDhVT3vinlmkDlCJKQYwUkYKZ3dJtGhrYjt3MXRQ1jzV8Y%2BbfJp6sJD7UHKHxTrIibw8pq0kYrOC4lOAUMORtaDW%2BG8zoY6rgNcqeUozI82dqPHU%2BzeaScuQz%2BX%2BL%2FBjHKaC2Vw6MUe3m90JsdNrf4FpLlaU%2FZNSw93BguGyEPrQtPQy6cyXwBjw3B%2BlRw0qKWjfQrcKq3QLtN3SuOtp8n8%2Fq8gcVDPEmqUazBuq2GpSzYugY2TAKM2pGKWP7vzccwpuHcxAY6pgEveyGGk8lu%2FCiSBHj0k5FXut71YlpItf3ZIPBaeQn3ZzqHEo5YR3yxsEHSLbzHMFlZWQ22eYYuU3rEtdHnw2Tnw7jjJfSiXrCHx9h3%2B8loa6sMc7fvKveKHH%2Bmqvh15b5ecMLui%2FLU5B5dC%2FAOCh3OWaTVUK7sgJIjBzE0ka9fk%2F8xoYiT%2BoK1X2Kcb4m2o7ozZMHSX1iAnpSoOpG39VzRWStkNCso&X-Amz-Signature=ef1871d8beaa9977c08934151dfb328cdd13a47c71ae2d68d7bf213a2e9aa431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4YYJF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdwqt2anV3Spm0CLjHrfYRP8HwDAfJulPirA%2Fzfx%2BSwAiAIuU3XOazw9MhOrfQBR9vDtqWH8d5qaQBueYdmiKCMOSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPlUq%2BsBUPrrQ4vH0KtwDFkfp3rMWnYbGwySsr%2Bl2U7N0VBzCV0a5%2B6XLm3wt2CWrOlCaRDj9NYB%2FlSZpl2XcByL%2Bm1urVoLo2ChyWXEL9BJiptOyqOUQS8uUcfWb07kpBEG56IjNE62IZusgEmslbcmFnx%2F7P92maF8QYW%2BiL2312bKAyvk3M2FshNdxfBRYW6rXC4sBPTgz%2BiU49e4oxu4RQpCdI3tGI%2FRqUUJRBv5y7HpbCG2N8qmEKMDK6C29OunQWyXijXeNqWHU%2BTHtpLGkacDEYY4NuKQFFtj1Mqh6t0HYAIIL9fn3pEUbQwnVHGt0%2B1lniHOFh8GXUbi%2FCCP8pk%2BqCieM%2FEk4sZD1dYBecm6bMHGi1sq8uFMcei5ShnO%2FvpOXnVXd%2FCvDhVT3vinlmkDlCJKQYwUkYKZ3dJtGhrYjt3MXRQ1jzV8Y%2BbfJp6sJD7UHKHxTrIibw8pq0kYrOC4lOAUMORtaDW%2BG8zoY6rgNcqeUozI82dqPHU%2BzeaScuQz%2BX%2BL%2FBjHKaC2Vw6MUe3m90JsdNrf4FpLlaU%2FZNSw93BguGyEPrQtPQy6cyXwBjw3B%2BlRw0qKWjfQrcKq3QLtN3SuOtp8n8%2Fq8gcVDPEmqUazBuq2GpSzYugY2TAKM2pGKWP7vzccwpuHcxAY6pgEveyGGk8lu%2FCiSBHj0k5FXut71YlpItf3ZIPBaeQn3ZzqHEo5YR3yxsEHSLbzHMFlZWQ22eYYuU3rEtdHnw2Tnw7jjJfSiXrCHx9h3%2B8loa6sMc7fvKveKHH%2Bmqvh15b5ecMLui%2FLU5B5dC%2FAOCh3OWaTVUK7sgJIjBzE0ka9fk%2F8xoYiT%2BoK1X2Kcb4m2o7ozZMHSX1iAnpSoOpG39VzRWStkNCso&X-Amz-Signature=3739ee1d5cc615c60e576ba1e4a644601f48ee3d47afc6ab5232db074d6efc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4YYJF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdwqt2anV3Spm0CLjHrfYRP8HwDAfJulPirA%2Fzfx%2BSwAiAIuU3XOazw9MhOrfQBR9vDtqWH8d5qaQBueYdmiKCMOSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPlUq%2BsBUPrrQ4vH0KtwDFkfp3rMWnYbGwySsr%2Bl2U7N0VBzCV0a5%2B6XLm3wt2CWrOlCaRDj9NYB%2FlSZpl2XcByL%2Bm1urVoLo2ChyWXEL9BJiptOyqOUQS8uUcfWb07kpBEG56IjNE62IZusgEmslbcmFnx%2F7P92maF8QYW%2BiL2312bKAyvk3M2FshNdxfBRYW6rXC4sBPTgz%2BiU49e4oxu4RQpCdI3tGI%2FRqUUJRBv5y7HpbCG2N8qmEKMDK6C29OunQWyXijXeNqWHU%2BTHtpLGkacDEYY4NuKQFFtj1Mqh6t0HYAIIL9fn3pEUbQwnVHGt0%2B1lniHOFh8GXUbi%2FCCP8pk%2BqCieM%2FEk4sZD1dYBecm6bMHGi1sq8uFMcei5ShnO%2FvpOXnVXd%2FCvDhVT3vinlmkDlCJKQYwUkYKZ3dJtGhrYjt3MXRQ1jzV8Y%2BbfJp6sJD7UHKHxTrIibw8pq0kYrOC4lOAUMORtaDW%2BG8zoY6rgNcqeUozI82dqPHU%2BzeaScuQz%2BX%2BL%2FBjHKaC2Vw6MUe3m90JsdNrf4FpLlaU%2FZNSw93BguGyEPrQtPQy6cyXwBjw3B%2BlRw0qKWjfQrcKq3QLtN3SuOtp8n8%2Fq8gcVDPEmqUazBuq2GpSzYugY2TAKM2pGKWP7vzccwpuHcxAY6pgEveyGGk8lu%2FCiSBHj0k5FXut71YlpItf3ZIPBaeQn3ZzqHEo5YR3yxsEHSLbzHMFlZWQ22eYYuU3rEtdHnw2Tnw7jjJfSiXrCHx9h3%2B8loa6sMc7fvKveKHH%2Bmqvh15b5ecMLui%2FLU5B5dC%2FAOCh3OWaTVUK7sgJIjBzE0ka9fk%2F8xoYiT%2BoK1X2Kcb4m2o7ozZMHSX1iAnpSoOpG39VzRWStkNCso&X-Amz-Signature=0689d2b0c78a5b2eda1e4672bdb3016412b89b59bf5e4b93bdf7214bbbce18f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4YYJF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdwqt2anV3Spm0CLjHrfYRP8HwDAfJulPirA%2Fzfx%2BSwAiAIuU3XOazw9MhOrfQBR9vDtqWH8d5qaQBueYdmiKCMOSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPlUq%2BsBUPrrQ4vH0KtwDFkfp3rMWnYbGwySsr%2Bl2U7N0VBzCV0a5%2B6XLm3wt2CWrOlCaRDj9NYB%2FlSZpl2XcByL%2Bm1urVoLo2ChyWXEL9BJiptOyqOUQS8uUcfWb07kpBEG56IjNE62IZusgEmslbcmFnx%2F7P92maF8QYW%2BiL2312bKAyvk3M2FshNdxfBRYW6rXC4sBPTgz%2BiU49e4oxu4RQpCdI3tGI%2FRqUUJRBv5y7HpbCG2N8qmEKMDK6C29OunQWyXijXeNqWHU%2BTHtpLGkacDEYY4NuKQFFtj1Mqh6t0HYAIIL9fn3pEUbQwnVHGt0%2B1lniHOFh8GXUbi%2FCCP8pk%2BqCieM%2FEk4sZD1dYBecm6bMHGi1sq8uFMcei5ShnO%2FvpOXnVXd%2FCvDhVT3vinlmkDlCJKQYwUkYKZ3dJtGhrYjt3MXRQ1jzV8Y%2BbfJp6sJD7UHKHxTrIibw8pq0kYrOC4lOAUMORtaDW%2BG8zoY6rgNcqeUozI82dqPHU%2BzeaScuQz%2BX%2BL%2FBjHKaC2Vw6MUe3m90JsdNrf4FpLlaU%2FZNSw93BguGyEPrQtPQy6cyXwBjw3B%2BlRw0qKWjfQrcKq3QLtN3SuOtp8n8%2Fq8gcVDPEmqUazBuq2GpSzYugY2TAKM2pGKWP7vzccwpuHcxAY6pgEveyGGk8lu%2FCiSBHj0k5FXut71YlpItf3ZIPBaeQn3ZzqHEo5YR3yxsEHSLbzHMFlZWQ22eYYuU3rEtdHnw2Tnw7jjJfSiXrCHx9h3%2B8loa6sMc7fvKveKHH%2Bmqvh15b5ecMLui%2FLU5B5dC%2FAOCh3OWaTVUK7sgJIjBzE0ka9fk%2F8xoYiT%2BoK1X2Kcb4m2o7ozZMHSX1iAnpSoOpG39VzRWStkNCso&X-Amz-Signature=6336942e2141881dc4c4feb2a5895ab6f42e197b7f0f73baf963cc2439d13b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH4YYJF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdwqt2anV3Spm0CLjHrfYRP8HwDAfJulPirA%2Fzfx%2BSwAiAIuU3XOazw9MhOrfQBR9vDtqWH8d5qaQBueYdmiKCMOSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPlUq%2BsBUPrrQ4vH0KtwDFkfp3rMWnYbGwySsr%2Bl2U7N0VBzCV0a5%2B6XLm3wt2CWrOlCaRDj9NYB%2FlSZpl2XcByL%2Bm1urVoLo2ChyWXEL9BJiptOyqOUQS8uUcfWb07kpBEG56IjNE62IZusgEmslbcmFnx%2F7P92maF8QYW%2BiL2312bKAyvk3M2FshNdxfBRYW6rXC4sBPTgz%2BiU49e4oxu4RQpCdI3tGI%2FRqUUJRBv5y7HpbCG2N8qmEKMDK6C29OunQWyXijXeNqWHU%2BTHtpLGkacDEYY4NuKQFFtj1Mqh6t0HYAIIL9fn3pEUbQwnVHGt0%2B1lniHOFh8GXUbi%2FCCP8pk%2BqCieM%2FEk4sZD1dYBecm6bMHGi1sq8uFMcei5ShnO%2FvpOXnVXd%2FCvDhVT3vinlmkDlCJKQYwUkYKZ3dJtGhrYjt3MXRQ1jzV8Y%2BbfJp6sJD7UHKHxTrIibw8pq0kYrOC4lOAUMORtaDW%2BG8zoY6rgNcqeUozI82dqPHU%2BzeaScuQz%2BX%2BL%2FBjHKaC2Vw6MUe3m90JsdNrf4FpLlaU%2FZNSw93BguGyEPrQtPQy6cyXwBjw3B%2BlRw0qKWjfQrcKq3QLtN3SuOtp8n8%2Fq8gcVDPEmqUazBuq2GpSzYugY2TAKM2pGKWP7vzccwpuHcxAY6pgEveyGGk8lu%2FCiSBHj0k5FXut71YlpItf3ZIPBaeQn3ZzqHEo5YR3yxsEHSLbzHMFlZWQ22eYYuU3rEtdHnw2Tnw7jjJfSiXrCHx9h3%2B8loa6sMc7fvKveKHH%2Bmqvh15b5ecMLui%2FLU5B5dC%2FAOCh3OWaTVUK7sgJIjBzE0ka9fk%2F8xoYiT%2BoK1X2Kcb4m2o7ozZMHSX1iAnpSoOpG39VzRWStkNCso&X-Amz-Signature=170e72ec25b8195c4a3b72d45eb9c64c11e4f531194678063417d3b82f6b182b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
