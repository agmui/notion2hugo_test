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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HXMIZA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC3XVzGLEYgDkwtJFks4fNwAoJY%2BofKQUCJgxXEYu8oGgIhAII3la6wOFwvdSk%2BCOILVZNvk964WBVXiC16ekMch4XxKv8DCBUQABoMNjM3NDIzMTgzODA1IgxUbrOBngTBooDxCy4q3AORd1cMIhTH0eUpATNRMskZ8p%2BcKL0pnQ79y7ioX3p3ITjGJ2NQKcNbT9SAoEGgVUtb%2B8pD2xWimlV3DZTH%2Bq9zk6qrL7%2B065NH8cuKi7TJ6Bi%2F8ZCvqhYr7RB0d9SgV%2F7v7Ru1W6m4Gi6Gn1qiKGW0fIeFcmRlRazvEQ%2BdPdLmepmKzQarW1eVdqMO%2Btz6t3I095KoZ3ig5CT%2B%2BjPyr23EtgZbqzijWvUOlu5EPjtVvNno%2FR42tSPrqIauHUZhI%2Badpz2B3uJAJw%2F1SPKO6ESKQYDxdHvILJztH%2Becxj9TWj88zxP03nChRwznpfZi3XGp4q2N51BVlqztdMWD8w5C5XiSyPhTKdkzNuhZl2rKkY0oKNhgOPZResn0tK5IHVzWfmihz9GdtY7ZecIb3B7913HwlBz1ZtLiKC%2BaltbblIQjgsM2mHFFE0%2FJc6EI2jO2udMTfNLuCRjZ9%2FForQ96jR3iOBMqWQTX1e5I3ac0lq2orUZ59fSpKCXbpsj8y0Tj21ZvNL089FChOLNQvGNO3gdUBIxZv0q1xyQTWhq8Gxs2TTGzwWoLtTzndNRHSaF8UXuRkbeljQ5ij7h5LyASq9vJ%2FTMLHFPlDycHHtBHEVA9Xjqx7IA17aeV1DCAqrDCBjqkAfpFdJkWrfYhYVUdyxkxSPcxWABni8UrEZwFfVYXNnfgC4Tz%2ByV1FQickfWJXyQpntmsq8ZpAkpo8IC6aqqIFK5MQQ7ClxcGG9OV%2FMol61gpPP%2BaIlCUks7MR1yNVToEyMJ94XnjcFu3WVUkl8kOEjztjlhRZ6Q9F7DRFRiAb32NPARsm27IbLGamYJ7lA6tHOalSFOeBUwe8kvyy8MbhyFw0%2BKF&X-Amz-Signature=e03c09a8bbdf255bc221cecbb3905beb314ec0fd48e2ba49841e208ac2980ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HXMIZA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC3XVzGLEYgDkwtJFks4fNwAoJY%2BofKQUCJgxXEYu8oGgIhAII3la6wOFwvdSk%2BCOILVZNvk964WBVXiC16ekMch4XxKv8DCBUQABoMNjM3NDIzMTgzODA1IgxUbrOBngTBooDxCy4q3AORd1cMIhTH0eUpATNRMskZ8p%2BcKL0pnQ79y7ioX3p3ITjGJ2NQKcNbT9SAoEGgVUtb%2B8pD2xWimlV3DZTH%2Bq9zk6qrL7%2B065NH8cuKi7TJ6Bi%2F8ZCvqhYr7RB0d9SgV%2F7v7Ru1W6m4Gi6Gn1qiKGW0fIeFcmRlRazvEQ%2BdPdLmepmKzQarW1eVdqMO%2Btz6t3I095KoZ3ig5CT%2B%2BjPyr23EtgZbqzijWvUOlu5EPjtVvNno%2FR42tSPrqIauHUZhI%2Badpz2B3uJAJw%2F1SPKO6ESKQYDxdHvILJztH%2Becxj9TWj88zxP03nChRwznpfZi3XGp4q2N51BVlqztdMWD8w5C5XiSyPhTKdkzNuhZl2rKkY0oKNhgOPZResn0tK5IHVzWfmihz9GdtY7ZecIb3B7913HwlBz1ZtLiKC%2BaltbblIQjgsM2mHFFE0%2FJc6EI2jO2udMTfNLuCRjZ9%2FForQ96jR3iOBMqWQTX1e5I3ac0lq2orUZ59fSpKCXbpsj8y0Tj21ZvNL089FChOLNQvGNO3gdUBIxZv0q1xyQTWhq8Gxs2TTGzwWoLtTzndNRHSaF8UXuRkbeljQ5ij7h5LyASq9vJ%2FTMLHFPlDycHHtBHEVA9Xjqx7IA17aeV1DCAqrDCBjqkAfpFdJkWrfYhYVUdyxkxSPcxWABni8UrEZwFfVYXNnfgC4Tz%2ByV1FQickfWJXyQpntmsq8ZpAkpo8IC6aqqIFK5MQQ7ClxcGG9OV%2FMol61gpPP%2BaIlCUks7MR1yNVToEyMJ94XnjcFu3WVUkl8kOEjztjlhRZ6Q9F7DRFRiAb32NPARsm27IbLGamYJ7lA6tHOalSFOeBUwe8kvyy8MbhyFw0%2BKF&X-Amz-Signature=345bffe211187b19a548098f720f6c16d8981eb5410abfe414c3822805fae050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HXMIZA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC3XVzGLEYgDkwtJFks4fNwAoJY%2BofKQUCJgxXEYu8oGgIhAII3la6wOFwvdSk%2BCOILVZNvk964WBVXiC16ekMch4XxKv8DCBUQABoMNjM3NDIzMTgzODA1IgxUbrOBngTBooDxCy4q3AORd1cMIhTH0eUpATNRMskZ8p%2BcKL0pnQ79y7ioX3p3ITjGJ2NQKcNbT9SAoEGgVUtb%2B8pD2xWimlV3DZTH%2Bq9zk6qrL7%2B065NH8cuKi7TJ6Bi%2F8ZCvqhYr7RB0d9SgV%2F7v7Ru1W6m4Gi6Gn1qiKGW0fIeFcmRlRazvEQ%2BdPdLmepmKzQarW1eVdqMO%2Btz6t3I095KoZ3ig5CT%2B%2BjPyr23EtgZbqzijWvUOlu5EPjtVvNno%2FR42tSPrqIauHUZhI%2Badpz2B3uJAJw%2F1SPKO6ESKQYDxdHvILJztH%2Becxj9TWj88zxP03nChRwznpfZi3XGp4q2N51BVlqztdMWD8w5C5XiSyPhTKdkzNuhZl2rKkY0oKNhgOPZResn0tK5IHVzWfmihz9GdtY7ZecIb3B7913HwlBz1ZtLiKC%2BaltbblIQjgsM2mHFFE0%2FJc6EI2jO2udMTfNLuCRjZ9%2FForQ96jR3iOBMqWQTX1e5I3ac0lq2orUZ59fSpKCXbpsj8y0Tj21ZvNL089FChOLNQvGNO3gdUBIxZv0q1xyQTWhq8Gxs2TTGzwWoLtTzndNRHSaF8UXuRkbeljQ5ij7h5LyASq9vJ%2FTMLHFPlDycHHtBHEVA9Xjqx7IA17aeV1DCAqrDCBjqkAfpFdJkWrfYhYVUdyxkxSPcxWABni8UrEZwFfVYXNnfgC4Tz%2ByV1FQickfWJXyQpntmsq8ZpAkpo8IC6aqqIFK5MQQ7ClxcGG9OV%2FMol61gpPP%2BaIlCUks7MR1yNVToEyMJ94XnjcFu3WVUkl8kOEjztjlhRZ6Q9F7DRFRiAb32NPARsm27IbLGamYJ7lA6tHOalSFOeBUwe8kvyy8MbhyFw0%2BKF&X-Amz-Signature=b56c836d4f804685870105a2f022cf803b9967fb532c82b28a286824749b94a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HXMIZA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC3XVzGLEYgDkwtJFks4fNwAoJY%2BofKQUCJgxXEYu8oGgIhAII3la6wOFwvdSk%2BCOILVZNvk964WBVXiC16ekMch4XxKv8DCBUQABoMNjM3NDIzMTgzODA1IgxUbrOBngTBooDxCy4q3AORd1cMIhTH0eUpATNRMskZ8p%2BcKL0pnQ79y7ioX3p3ITjGJ2NQKcNbT9SAoEGgVUtb%2B8pD2xWimlV3DZTH%2Bq9zk6qrL7%2B065NH8cuKi7TJ6Bi%2F8ZCvqhYr7RB0d9SgV%2F7v7Ru1W6m4Gi6Gn1qiKGW0fIeFcmRlRazvEQ%2BdPdLmepmKzQarW1eVdqMO%2Btz6t3I095KoZ3ig5CT%2B%2BjPyr23EtgZbqzijWvUOlu5EPjtVvNno%2FR42tSPrqIauHUZhI%2Badpz2B3uJAJw%2F1SPKO6ESKQYDxdHvILJztH%2Becxj9TWj88zxP03nChRwznpfZi3XGp4q2N51BVlqztdMWD8w5C5XiSyPhTKdkzNuhZl2rKkY0oKNhgOPZResn0tK5IHVzWfmihz9GdtY7ZecIb3B7913HwlBz1ZtLiKC%2BaltbblIQjgsM2mHFFE0%2FJc6EI2jO2udMTfNLuCRjZ9%2FForQ96jR3iOBMqWQTX1e5I3ac0lq2orUZ59fSpKCXbpsj8y0Tj21ZvNL089FChOLNQvGNO3gdUBIxZv0q1xyQTWhq8Gxs2TTGzwWoLtTzndNRHSaF8UXuRkbeljQ5ij7h5LyASq9vJ%2FTMLHFPlDycHHtBHEVA9Xjqx7IA17aeV1DCAqrDCBjqkAfpFdJkWrfYhYVUdyxkxSPcxWABni8UrEZwFfVYXNnfgC4Tz%2ByV1FQickfWJXyQpntmsq8ZpAkpo8IC6aqqIFK5MQQ7ClxcGG9OV%2FMol61gpPP%2BaIlCUks7MR1yNVToEyMJ94XnjcFu3WVUkl8kOEjztjlhRZ6Q9F7DRFRiAb32NPARsm27IbLGamYJ7lA6tHOalSFOeBUwe8kvyy8MbhyFw0%2BKF&X-Amz-Signature=57110b439f962e9515cafaed765df984e7fb474dc9623c9df46056cb0b2608d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HXMIZA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC3XVzGLEYgDkwtJFks4fNwAoJY%2BofKQUCJgxXEYu8oGgIhAII3la6wOFwvdSk%2BCOILVZNvk964WBVXiC16ekMch4XxKv8DCBUQABoMNjM3NDIzMTgzODA1IgxUbrOBngTBooDxCy4q3AORd1cMIhTH0eUpATNRMskZ8p%2BcKL0pnQ79y7ioX3p3ITjGJ2NQKcNbT9SAoEGgVUtb%2B8pD2xWimlV3DZTH%2Bq9zk6qrL7%2B065NH8cuKi7TJ6Bi%2F8ZCvqhYr7RB0d9SgV%2F7v7Ru1W6m4Gi6Gn1qiKGW0fIeFcmRlRazvEQ%2BdPdLmepmKzQarW1eVdqMO%2Btz6t3I095KoZ3ig5CT%2B%2BjPyr23EtgZbqzijWvUOlu5EPjtVvNno%2FR42tSPrqIauHUZhI%2Badpz2B3uJAJw%2F1SPKO6ESKQYDxdHvILJztH%2Becxj9TWj88zxP03nChRwznpfZi3XGp4q2N51BVlqztdMWD8w5C5XiSyPhTKdkzNuhZl2rKkY0oKNhgOPZResn0tK5IHVzWfmihz9GdtY7ZecIb3B7913HwlBz1ZtLiKC%2BaltbblIQjgsM2mHFFE0%2FJc6EI2jO2udMTfNLuCRjZ9%2FForQ96jR3iOBMqWQTX1e5I3ac0lq2orUZ59fSpKCXbpsj8y0Tj21ZvNL089FChOLNQvGNO3gdUBIxZv0q1xyQTWhq8Gxs2TTGzwWoLtTzndNRHSaF8UXuRkbeljQ5ij7h5LyASq9vJ%2FTMLHFPlDycHHtBHEVA9Xjqx7IA17aeV1DCAqrDCBjqkAfpFdJkWrfYhYVUdyxkxSPcxWABni8UrEZwFfVYXNnfgC4Tz%2ByV1FQickfWJXyQpntmsq8ZpAkpo8IC6aqqIFK5MQQ7ClxcGG9OV%2FMol61gpPP%2BaIlCUks7MR1yNVToEyMJ94XnjcFu3WVUkl8kOEjztjlhRZ6Q9F7DRFRiAb32NPARsm27IbLGamYJ7lA6tHOalSFOeBUwe8kvyy8MbhyFw0%2BKF&X-Amz-Signature=6f10d5b93ed755d2207a41afcca07d22b2767b9cbebb4ef076167a29466b7e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HXMIZA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC3XVzGLEYgDkwtJFks4fNwAoJY%2BofKQUCJgxXEYu8oGgIhAII3la6wOFwvdSk%2BCOILVZNvk964WBVXiC16ekMch4XxKv8DCBUQABoMNjM3NDIzMTgzODA1IgxUbrOBngTBooDxCy4q3AORd1cMIhTH0eUpATNRMskZ8p%2BcKL0pnQ79y7ioX3p3ITjGJ2NQKcNbT9SAoEGgVUtb%2B8pD2xWimlV3DZTH%2Bq9zk6qrL7%2B065NH8cuKi7TJ6Bi%2F8ZCvqhYr7RB0d9SgV%2F7v7Ru1W6m4Gi6Gn1qiKGW0fIeFcmRlRazvEQ%2BdPdLmepmKzQarW1eVdqMO%2Btz6t3I095KoZ3ig5CT%2B%2BjPyr23EtgZbqzijWvUOlu5EPjtVvNno%2FR42tSPrqIauHUZhI%2Badpz2B3uJAJw%2F1SPKO6ESKQYDxdHvILJztH%2Becxj9TWj88zxP03nChRwznpfZi3XGp4q2N51BVlqztdMWD8w5C5XiSyPhTKdkzNuhZl2rKkY0oKNhgOPZResn0tK5IHVzWfmihz9GdtY7ZecIb3B7913HwlBz1ZtLiKC%2BaltbblIQjgsM2mHFFE0%2FJc6EI2jO2udMTfNLuCRjZ9%2FForQ96jR3iOBMqWQTX1e5I3ac0lq2orUZ59fSpKCXbpsj8y0Tj21ZvNL089FChOLNQvGNO3gdUBIxZv0q1xyQTWhq8Gxs2TTGzwWoLtTzndNRHSaF8UXuRkbeljQ5ij7h5LyASq9vJ%2FTMLHFPlDycHHtBHEVA9Xjqx7IA17aeV1DCAqrDCBjqkAfpFdJkWrfYhYVUdyxkxSPcxWABni8UrEZwFfVYXNnfgC4Tz%2ByV1FQickfWJXyQpntmsq8ZpAkpo8IC6aqqIFK5MQQ7ClxcGG9OV%2FMol61gpPP%2BaIlCUks7MR1yNVToEyMJ94XnjcFu3WVUkl8kOEjztjlhRZ6Q9F7DRFRiAb32NPARsm27IbLGamYJ7lA6tHOalSFOeBUwe8kvyy8MbhyFw0%2BKF&X-Amz-Signature=ecbaedea18e79abfb65bccec8de44fe3e0dbb67a3b5736569f0bd6f46e2da154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HXMIZA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC3XVzGLEYgDkwtJFks4fNwAoJY%2BofKQUCJgxXEYu8oGgIhAII3la6wOFwvdSk%2BCOILVZNvk964WBVXiC16ekMch4XxKv8DCBUQABoMNjM3NDIzMTgzODA1IgxUbrOBngTBooDxCy4q3AORd1cMIhTH0eUpATNRMskZ8p%2BcKL0pnQ79y7ioX3p3ITjGJ2NQKcNbT9SAoEGgVUtb%2B8pD2xWimlV3DZTH%2Bq9zk6qrL7%2B065NH8cuKi7TJ6Bi%2F8ZCvqhYr7RB0d9SgV%2F7v7Ru1W6m4Gi6Gn1qiKGW0fIeFcmRlRazvEQ%2BdPdLmepmKzQarW1eVdqMO%2Btz6t3I095KoZ3ig5CT%2B%2BjPyr23EtgZbqzijWvUOlu5EPjtVvNno%2FR42tSPrqIauHUZhI%2Badpz2B3uJAJw%2F1SPKO6ESKQYDxdHvILJztH%2Becxj9TWj88zxP03nChRwznpfZi3XGp4q2N51BVlqztdMWD8w5C5XiSyPhTKdkzNuhZl2rKkY0oKNhgOPZResn0tK5IHVzWfmihz9GdtY7ZecIb3B7913HwlBz1ZtLiKC%2BaltbblIQjgsM2mHFFE0%2FJc6EI2jO2udMTfNLuCRjZ9%2FForQ96jR3iOBMqWQTX1e5I3ac0lq2orUZ59fSpKCXbpsj8y0Tj21ZvNL089FChOLNQvGNO3gdUBIxZv0q1xyQTWhq8Gxs2TTGzwWoLtTzndNRHSaF8UXuRkbeljQ5ij7h5LyASq9vJ%2FTMLHFPlDycHHtBHEVA9Xjqx7IA17aeV1DCAqrDCBjqkAfpFdJkWrfYhYVUdyxkxSPcxWABni8UrEZwFfVYXNnfgC4Tz%2ByV1FQickfWJXyQpntmsq8ZpAkpo8IC6aqqIFK5MQQ7ClxcGG9OV%2FMol61gpPP%2BaIlCUks7MR1yNVToEyMJ94XnjcFu3WVUkl8kOEjztjlhRZ6Q9F7DRFRiAb32NPARsm27IbLGamYJ7lA6tHOalSFOeBUwe8kvyy8MbhyFw0%2BKF&X-Amz-Signature=cd73ee3436d8d6353f530bc0a229de8538654f6c0c677826d0b894328b759a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HXMIZA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC3XVzGLEYgDkwtJFks4fNwAoJY%2BofKQUCJgxXEYu8oGgIhAII3la6wOFwvdSk%2BCOILVZNvk964WBVXiC16ekMch4XxKv8DCBUQABoMNjM3NDIzMTgzODA1IgxUbrOBngTBooDxCy4q3AORd1cMIhTH0eUpATNRMskZ8p%2BcKL0pnQ79y7ioX3p3ITjGJ2NQKcNbT9SAoEGgVUtb%2B8pD2xWimlV3DZTH%2Bq9zk6qrL7%2B065NH8cuKi7TJ6Bi%2F8ZCvqhYr7RB0d9SgV%2F7v7Ru1W6m4Gi6Gn1qiKGW0fIeFcmRlRazvEQ%2BdPdLmepmKzQarW1eVdqMO%2Btz6t3I095KoZ3ig5CT%2B%2BjPyr23EtgZbqzijWvUOlu5EPjtVvNno%2FR42tSPrqIauHUZhI%2Badpz2B3uJAJw%2F1SPKO6ESKQYDxdHvILJztH%2Becxj9TWj88zxP03nChRwznpfZi3XGp4q2N51BVlqztdMWD8w5C5XiSyPhTKdkzNuhZl2rKkY0oKNhgOPZResn0tK5IHVzWfmihz9GdtY7ZecIb3B7913HwlBz1ZtLiKC%2BaltbblIQjgsM2mHFFE0%2FJc6EI2jO2udMTfNLuCRjZ9%2FForQ96jR3iOBMqWQTX1e5I3ac0lq2orUZ59fSpKCXbpsj8y0Tj21ZvNL089FChOLNQvGNO3gdUBIxZv0q1xyQTWhq8Gxs2TTGzwWoLtTzndNRHSaF8UXuRkbeljQ5ij7h5LyASq9vJ%2FTMLHFPlDycHHtBHEVA9Xjqx7IA17aeV1DCAqrDCBjqkAfpFdJkWrfYhYVUdyxkxSPcxWABni8UrEZwFfVYXNnfgC4Tz%2ByV1FQickfWJXyQpntmsq8ZpAkpo8IC6aqqIFK5MQQ7ClxcGG9OV%2FMol61gpPP%2BaIlCUks7MR1yNVToEyMJ94XnjcFu3WVUkl8kOEjztjlhRZ6Q9F7DRFRiAb32NPARsm27IbLGamYJ7lA6tHOalSFOeBUwe8kvyy8MbhyFw0%2BKF&X-Amz-Signature=69a5e1c6824475e951880f8ce81df05105821622e4cc01451e63351665243a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
