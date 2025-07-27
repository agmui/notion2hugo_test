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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4LMZGA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHmGsH8Jkh0sLwXxLYNJS8EYA1s3WFENCHd5z6xmmxpQIhANnxizbvtYhepc%2BEGsDDsXow2hqHmcqZeUDTuUr0%2BHtbKv8DCG0QABoMNjM3NDIzMTgzODA1Igw2mmZ8r3MAIYnJlXMq3AP3sdgHKvZafnnovDHV9igVe8GtR%2FcOoWEiHktBp6hVqcDOqGKrUoFscnDkJvoQFkvNZ6dzvVs3e1aifdIXy1qqedPi9PneTKJH%2FelXpWC%2FHiTW%2BP2Rp9rKC9I40Ne%2BVrSgEO2VxR68yPQsxUwwTYzytIfrUjipSLaUvJeucTErNxuWguFr9BS83XY1ExvXAeamJwGa8GEx8O7C6Q0EhUSRFuxC8IBDD8FFXcqotutspkeVeGcJJekyWDP1005Rb%2B%2BpaS5EkVUFKszlmFjLeJC80XEhrk6Y0L9%2FZGxSqMLdIZcLe679ca9LCxVhZjziEkxs8ufjeTSR14uvaaas3qdhnq4TyLhE1FJqtYZaM8%2FfPOKfUt11BOEF3scbaz5Xqi6oPhnN0Sq2gKvggwWJCSQA%2Fd4jOBXZHnbPIpPunSw8U%2BUt0U4ublCZFR2e26JRbhDPKe%2FRHMVdot4REYJf5NjeaEu07gDo4rGlsnSkhxCGoS8oyxcmqEs7yZXg1jukI%2BA96xl7s5ieosHqGkqA8RyG7JECXA5NfVRdTaplLWJ%2FZcb2Gb7YfDZhurx1L8AhKpz3MgpY2l9dahG3Qxpd67hBHUmTxVKp7POxXMPCaKfLXRv9BDSzcil4%2F5SR3DCHu5bEBjqkAcZOuB1pIyXW%2F3Xu8jWFgMB8D3ztk9XQWfgiITSrYFxisLtXk8Qe1mc%2B%2Fp9AHxsMIhfHbsljm7l0f4LTzHAh34Q5%2F70Tb%2BGY%2BOcorVlOmhiHBFbxw%2BxWa7PNEYE8GycEx%2FGJltmikTDYbBeBAdFklEr383rHaH7cGLQocG6my5YUbhdF2VIi5HdEorBjz9kB%2FTphTSuwFdvhbErMcWxXcXUTYZC9&X-Amz-Signature=723abbd89c16710ff9a92a6d9ab30e3ecf63786d272e078a5a8564e23237f453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4LMZGA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHmGsH8Jkh0sLwXxLYNJS8EYA1s3WFENCHd5z6xmmxpQIhANnxizbvtYhepc%2BEGsDDsXow2hqHmcqZeUDTuUr0%2BHtbKv8DCG0QABoMNjM3NDIzMTgzODA1Igw2mmZ8r3MAIYnJlXMq3AP3sdgHKvZafnnovDHV9igVe8GtR%2FcOoWEiHktBp6hVqcDOqGKrUoFscnDkJvoQFkvNZ6dzvVs3e1aifdIXy1qqedPi9PneTKJH%2FelXpWC%2FHiTW%2BP2Rp9rKC9I40Ne%2BVrSgEO2VxR68yPQsxUwwTYzytIfrUjipSLaUvJeucTErNxuWguFr9BS83XY1ExvXAeamJwGa8GEx8O7C6Q0EhUSRFuxC8IBDD8FFXcqotutspkeVeGcJJekyWDP1005Rb%2B%2BpaS5EkVUFKszlmFjLeJC80XEhrk6Y0L9%2FZGxSqMLdIZcLe679ca9LCxVhZjziEkxs8ufjeTSR14uvaaas3qdhnq4TyLhE1FJqtYZaM8%2FfPOKfUt11BOEF3scbaz5Xqi6oPhnN0Sq2gKvggwWJCSQA%2Fd4jOBXZHnbPIpPunSw8U%2BUt0U4ublCZFR2e26JRbhDPKe%2FRHMVdot4REYJf5NjeaEu07gDo4rGlsnSkhxCGoS8oyxcmqEs7yZXg1jukI%2BA96xl7s5ieosHqGkqA8RyG7JECXA5NfVRdTaplLWJ%2FZcb2Gb7YfDZhurx1L8AhKpz3MgpY2l9dahG3Qxpd67hBHUmTxVKp7POxXMPCaKfLXRv9BDSzcil4%2F5SR3DCHu5bEBjqkAcZOuB1pIyXW%2F3Xu8jWFgMB8D3ztk9XQWfgiITSrYFxisLtXk8Qe1mc%2B%2Fp9AHxsMIhfHbsljm7l0f4LTzHAh34Q5%2F70Tb%2BGY%2BOcorVlOmhiHBFbxw%2BxWa7PNEYE8GycEx%2FGJltmikTDYbBeBAdFklEr383rHaH7cGLQocG6my5YUbhdF2VIi5HdEorBjz9kB%2FTphTSuwFdvhbErMcWxXcXUTYZC9&X-Amz-Signature=c5f0d796d7c36aa2414795ad68f1d7011e1bc01605d36aff7541854778a225cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4LMZGA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHmGsH8Jkh0sLwXxLYNJS8EYA1s3WFENCHd5z6xmmxpQIhANnxizbvtYhepc%2BEGsDDsXow2hqHmcqZeUDTuUr0%2BHtbKv8DCG0QABoMNjM3NDIzMTgzODA1Igw2mmZ8r3MAIYnJlXMq3AP3sdgHKvZafnnovDHV9igVe8GtR%2FcOoWEiHktBp6hVqcDOqGKrUoFscnDkJvoQFkvNZ6dzvVs3e1aifdIXy1qqedPi9PneTKJH%2FelXpWC%2FHiTW%2BP2Rp9rKC9I40Ne%2BVrSgEO2VxR68yPQsxUwwTYzytIfrUjipSLaUvJeucTErNxuWguFr9BS83XY1ExvXAeamJwGa8GEx8O7C6Q0EhUSRFuxC8IBDD8FFXcqotutspkeVeGcJJekyWDP1005Rb%2B%2BpaS5EkVUFKszlmFjLeJC80XEhrk6Y0L9%2FZGxSqMLdIZcLe679ca9LCxVhZjziEkxs8ufjeTSR14uvaaas3qdhnq4TyLhE1FJqtYZaM8%2FfPOKfUt11BOEF3scbaz5Xqi6oPhnN0Sq2gKvggwWJCSQA%2Fd4jOBXZHnbPIpPunSw8U%2BUt0U4ublCZFR2e26JRbhDPKe%2FRHMVdot4REYJf5NjeaEu07gDo4rGlsnSkhxCGoS8oyxcmqEs7yZXg1jukI%2BA96xl7s5ieosHqGkqA8RyG7JECXA5NfVRdTaplLWJ%2FZcb2Gb7YfDZhurx1L8AhKpz3MgpY2l9dahG3Qxpd67hBHUmTxVKp7POxXMPCaKfLXRv9BDSzcil4%2F5SR3DCHu5bEBjqkAcZOuB1pIyXW%2F3Xu8jWFgMB8D3ztk9XQWfgiITSrYFxisLtXk8Qe1mc%2B%2Fp9AHxsMIhfHbsljm7l0f4LTzHAh34Q5%2F70Tb%2BGY%2BOcorVlOmhiHBFbxw%2BxWa7PNEYE8GycEx%2FGJltmikTDYbBeBAdFklEr383rHaH7cGLQocG6my5YUbhdF2VIi5HdEorBjz9kB%2FTphTSuwFdvhbErMcWxXcXUTYZC9&X-Amz-Signature=93a12c7eb16f53daad6b58a81fd5e43981cf9ccb240b48f6b8de2cf3252d08a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4LMZGA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHmGsH8Jkh0sLwXxLYNJS8EYA1s3WFENCHd5z6xmmxpQIhANnxizbvtYhepc%2BEGsDDsXow2hqHmcqZeUDTuUr0%2BHtbKv8DCG0QABoMNjM3NDIzMTgzODA1Igw2mmZ8r3MAIYnJlXMq3AP3sdgHKvZafnnovDHV9igVe8GtR%2FcOoWEiHktBp6hVqcDOqGKrUoFscnDkJvoQFkvNZ6dzvVs3e1aifdIXy1qqedPi9PneTKJH%2FelXpWC%2FHiTW%2BP2Rp9rKC9I40Ne%2BVrSgEO2VxR68yPQsxUwwTYzytIfrUjipSLaUvJeucTErNxuWguFr9BS83XY1ExvXAeamJwGa8GEx8O7C6Q0EhUSRFuxC8IBDD8FFXcqotutspkeVeGcJJekyWDP1005Rb%2B%2BpaS5EkVUFKszlmFjLeJC80XEhrk6Y0L9%2FZGxSqMLdIZcLe679ca9LCxVhZjziEkxs8ufjeTSR14uvaaas3qdhnq4TyLhE1FJqtYZaM8%2FfPOKfUt11BOEF3scbaz5Xqi6oPhnN0Sq2gKvggwWJCSQA%2Fd4jOBXZHnbPIpPunSw8U%2BUt0U4ublCZFR2e26JRbhDPKe%2FRHMVdot4REYJf5NjeaEu07gDo4rGlsnSkhxCGoS8oyxcmqEs7yZXg1jukI%2BA96xl7s5ieosHqGkqA8RyG7JECXA5NfVRdTaplLWJ%2FZcb2Gb7YfDZhurx1L8AhKpz3MgpY2l9dahG3Qxpd67hBHUmTxVKp7POxXMPCaKfLXRv9BDSzcil4%2F5SR3DCHu5bEBjqkAcZOuB1pIyXW%2F3Xu8jWFgMB8D3ztk9XQWfgiITSrYFxisLtXk8Qe1mc%2B%2Fp9AHxsMIhfHbsljm7l0f4LTzHAh34Q5%2F70Tb%2BGY%2BOcorVlOmhiHBFbxw%2BxWa7PNEYE8GycEx%2FGJltmikTDYbBeBAdFklEr383rHaH7cGLQocG6my5YUbhdF2VIi5HdEorBjz9kB%2FTphTSuwFdvhbErMcWxXcXUTYZC9&X-Amz-Signature=8a10f06a13a751994c919df14bd44f09ea5cf6c054ba6e5d56da9c02eb74936d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4LMZGA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHmGsH8Jkh0sLwXxLYNJS8EYA1s3WFENCHd5z6xmmxpQIhANnxizbvtYhepc%2BEGsDDsXow2hqHmcqZeUDTuUr0%2BHtbKv8DCG0QABoMNjM3NDIzMTgzODA1Igw2mmZ8r3MAIYnJlXMq3AP3sdgHKvZafnnovDHV9igVe8GtR%2FcOoWEiHktBp6hVqcDOqGKrUoFscnDkJvoQFkvNZ6dzvVs3e1aifdIXy1qqedPi9PneTKJH%2FelXpWC%2FHiTW%2BP2Rp9rKC9I40Ne%2BVrSgEO2VxR68yPQsxUwwTYzytIfrUjipSLaUvJeucTErNxuWguFr9BS83XY1ExvXAeamJwGa8GEx8O7C6Q0EhUSRFuxC8IBDD8FFXcqotutspkeVeGcJJekyWDP1005Rb%2B%2BpaS5EkVUFKszlmFjLeJC80XEhrk6Y0L9%2FZGxSqMLdIZcLe679ca9LCxVhZjziEkxs8ufjeTSR14uvaaas3qdhnq4TyLhE1FJqtYZaM8%2FfPOKfUt11BOEF3scbaz5Xqi6oPhnN0Sq2gKvggwWJCSQA%2Fd4jOBXZHnbPIpPunSw8U%2BUt0U4ublCZFR2e26JRbhDPKe%2FRHMVdot4REYJf5NjeaEu07gDo4rGlsnSkhxCGoS8oyxcmqEs7yZXg1jukI%2BA96xl7s5ieosHqGkqA8RyG7JECXA5NfVRdTaplLWJ%2FZcb2Gb7YfDZhurx1L8AhKpz3MgpY2l9dahG3Qxpd67hBHUmTxVKp7POxXMPCaKfLXRv9BDSzcil4%2F5SR3DCHu5bEBjqkAcZOuB1pIyXW%2F3Xu8jWFgMB8D3ztk9XQWfgiITSrYFxisLtXk8Qe1mc%2B%2Fp9AHxsMIhfHbsljm7l0f4LTzHAh34Q5%2F70Tb%2BGY%2BOcorVlOmhiHBFbxw%2BxWa7PNEYE8GycEx%2FGJltmikTDYbBeBAdFklEr383rHaH7cGLQocG6my5YUbhdF2VIi5HdEorBjz9kB%2FTphTSuwFdvhbErMcWxXcXUTYZC9&X-Amz-Signature=b8738533967689a0f0538bc2ddaa5c023e9cc35ad9a2351fb3e5c98f8951f93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4LMZGA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHmGsH8Jkh0sLwXxLYNJS8EYA1s3WFENCHd5z6xmmxpQIhANnxizbvtYhepc%2BEGsDDsXow2hqHmcqZeUDTuUr0%2BHtbKv8DCG0QABoMNjM3NDIzMTgzODA1Igw2mmZ8r3MAIYnJlXMq3AP3sdgHKvZafnnovDHV9igVe8GtR%2FcOoWEiHktBp6hVqcDOqGKrUoFscnDkJvoQFkvNZ6dzvVs3e1aifdIXy1qqedPi9PneTKJH%2FelXpWC%2FHiTW%2BP2Rp9rKC9I40Ne%2BVrSgEO2VxR68yPQsxUwwTYzytIfrUjipSLaUvJeucTErNxuWguFr9BS83XY1ExvXAeamJwGa8GEx8O7C6Q0EhUSRFuxC8IBDD8FFXcqotutspkeVeGcJJekyWDP1005Rb%2B%2BpaS5EkVUFKszlmFjLeJC80XEhrk6Y0L9%2FZGxSqMLdIZcLe679ca9LCxVhZjziEkxs8ufjeTSR14uvaaas3qdhnq4TyLhE1FJqtYZaM8%2FfPOKfUt11BOEF3scbaz5Xqi6oPhnN0Sq2gKvggwWJCSQA%2Fd4jOBXZHnbPIpPunSw8U%2BUt0U4ublCZFR2e26JRbhDPKe%2FRHMVdot4REYJf5NjeaEu07gDo4rGlsnSkhxCGoS8oyxcmqEs7yZXg1jukI%2BA96xl7s5ieosHqGkqA8RyG7JECXA5NfVRdTaplLWJ%2FZcb2Gb7YfDZhurx1L8AhKpz3MgpY2l9dahG3Qxpd67hBHUmTxVKp7POxXMPCaKfLXRv9BDSzcil4%2F5SR3DCHu5bEBjqkAcZOuB1pIyXW%2F3Xu8jWFgMB8D3ztk9XQWfgiITSrYFxisLtXk8Qe1mc%2B%2Fp9AHxsMIhfHbsljm7l0f4LTzHAh34Q5%2F70Tb%2BGY%2BOcorVlOmhiHBFbxw%2BxWa7PNEYE8GycEx%2FGJltmikTDYbBeBAdFklEr383rHaH7cGLQocG6my5YUbhdF2VIi5HdEorBjz9kB%2FTphTSuwFdvhbErMcWxXcXUTYZC9&X-Amz-Signature=cda6c905653cd7da0a004f831f7a5540ff1c79dbf4f16a1bbc7234625e008ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4LMZGA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHmGsH8Jkh0sLwXxLYNJS8EYA1s3WFENCHd5z6xmmxpQIhANnxizbvtYhepc%2BEGsDDsXow2hqHmcqZeUDTuUr0%2BHtbKv8DCG0QABoMNjM3NDIzMTgzODA1Igw2mmZ8r3MAIYnJlXMq3AP3sdgHKvZafnnovDHV9igVe8GtR%2FcOoWEiHktBp6hVqcDOqGKrUoFscnDkJvoQFkvNZ6dzvVs3e1aifdIXy1qqedPi9PneTKJH%2FelXpWC%2FHiTW%2BP2Rp9rKC9I40Ne%2BVrSgEO2VxR68yPQsxUwwTYzytIfrUjipSLaUvJeucTErNxuWguFr9BS83XY1ExvXAeamJwGa8GEx8O7C6Q0EhUSRFuxC8IBDD8FFXcqotutspkeVeGcJJekyWDP1005Rb%2B%2BpaS5EkVUFKszlmFjLeJC80XEhrk6Y0L9%2FZGxSqMLdIZcLe679ca9LCxVhZjziEkxs8ufjeTSR14uvaaas3qdhnq4TyLhE1FJqtYZaM8%2FfPOKfUt11BOEF3scbaz5Xqi6oPhnN0Sq2gKvggwWJCSQA%2Fd4jOBXZHnbPIpPunSw8U%2BUt0U4ublCZFR2e26JRbhDPKe%2FRHMVdot4REYJf5NjeaEu07gDo4rGlsnSkhxCGoS8oyxcmqEs7yZXg1jukI%2BA96xl7s5ieosHqGkqA8RyG7JECXA5NfVRdTaplLWJ%2FZcb2Gb7YfDZhurx1L8AhKpz3MgpY2l9dahG3Qxpd67hBHUmTxVKp7POxXMPCaKfLXRv9BDSzcil4%2F5SR3DCHu5bEBjqkAcZOuB1pIyXW%2F3Xu8jWFgMB8D3ztk9XQWfgiITSrYFxisLtXk8Qe1mc%2B%2Fp9AHxsMIhfHbsljm7l0f4LTzHAh34Q5%2F70Tb%2BGY%2BOcorVlOmhiHBFbxw%2BxWa7PNEYE8GycEx%2FGJltmikTDYbBeBAdFklEr383rHaH7cGLQocG6my5YUbhdF2VIi5HdEorBjz9kB%2FTphTSuwFdvhbErMcWxXcXUTYZC9&X-Amz-Signature=3e8a21cb48fccef549f6f36edf422100a653165fd8d78b984de79a6f4a5000d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4LMZGA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHmGsH8Jkh0sLwXxLYNJS8EYA1s3WFENCHd5z6xmmxpQIhANnxizbvtYhepc%2BEGsDDsXow2hqHmcqZeUDTuUr0%2BHtbKv8DCG0QABoMNjM3NDIzMTgzODA1Igw2mmZ8r3MAIYnJlXMq3AP3sdgHKvZafnnovDHV9igVe8GtR%2FcOoWEiHktBp6hVqcDOqGKrUoFscnDkJvoQFkvNZ6dzvVs3e1aifdIXy1qqedPi9PneTKJH%2FelXpWC%2FHiTW%2BP2Rp9rKC9I40Ne%2BVrSgEO2VxR68yPQsxUwwTYzytIfrUjipSLaUvJeucTErNxuWguFr9BS83XY1ExvXAeamJwGa8GEx8O7C6Q0EhUSRFuxC8IBDD8FFXcqotutspkeVeGcJJekyWDP1005Rb%2B%2BpaS5EkVUFKszlmFjLeJC80XEhrk6Y0L9%2FZGxSqMLdIZcLe679ca9LCxVhZjziEkxs8ufjeTSR14uvaaas3qdhnq4TyLhE1FJqtYZaM8%2FfPOKfUt11BOEF3scbaz5Xqi6oPhnN0Sq2gKvggwWJCSQA%2Fd4jOBXZHnbPIpPunSw8U%2BUt0U4ublCZFR2e26JRbhDPKe%2FRHMVdot4REYJf5NjeaEu07gDo4rGlsnSkhxCGoS8oyxcmqEs7yZXg1jukI%2BA96xl7s5ieosHqGkqA8RyG7JECXA5NfVRdTaplLWJ%2FZcb2Gb7YfDZhurx1L8AhKpz3MgpY2l9dahG3Qxpd67hBHUmTxVKp7POxXMPCaKfLXRv9BDSzcil4%2F5SR3DCHu5bEBjqkAcZOuB1pIyXW%2F3Xu8jWFgMB8D3ztk9XQWfgiITSrYFxisLtXk8Qe1mc%2B%2Fp9AHxsMIhfHbsljm7l0f4LTzHAh34Q5%2F70Tb%2BGY%2BOcorVlOmhiHBFbxw%2BxWa7PNEYE8GycEx%2FGJltmikTDYbBeBAdFklEr383rHaH7cGLQocG6my5YUbhdF2VIi5HdEorBjz9kB%2FTphTSuwFdvhbErMcWxXcXUTYZC9&X-Amz-Signature=80a77c788aac9a4e365c76fcd2e278f2b56215c632d6107ff684ee5695a5a899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
