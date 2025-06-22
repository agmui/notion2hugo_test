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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVY3S4N%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCXK8UIBOAeZu1FcnNutwlr76hzStHNb8vh4w5ErVqLZQIgeDM82THLjR7uvTExgFJRmyhhadzsAQY4q1W2C6ulMCcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFCsprGmUTspTn%2B5ircA9De2BfRg0BpUPdT6iyNb8sZNGkV3C33cmuITnOs5UGDXqTuLpmM6FAog6mQYZbOY7lgJhVvXuUyuZEZsoFSsi3yYx5Twc2yoYO00KRenUl0vAQLrgzsLil%2B6xaXKDgQtBk4QRLUs3meMn6pgyCalBqvm6Kc2e5gmGYTvRgEAdvdxhdIgECzch7hdIlxC5a6CvvYYeB1IUbW9hHg%2BIQyzVE8Ss36zCovIRSFO1698dIvSfaSohZNCayakXpiStRG4UkfbUlImBFqWMhO4Q2TSb9%2BCr2y4gCzjGdcj1esknapHBwAii5yprpgFQmHLegwcB%2B8GcqAwRMP3%2BuIZFd9LbBhjRLUTU0MEG3aXh%2B2ODl%2FDsimwKsrlLYjGs1rpNK%2BGkKOgncVeDTQo5TP9ngM2uYyIrjXG9eEffOlYqx72X9v7HfbpdLhctUE2N8li09F4cSxiZA34Nnt4IaVGOmVHvTSWC9eXW62Nvu6w4sXZ2z02Rv9qzUke7vC%2BNBCcX3DPiSs4P01Trh0DhHaYpjnZVtyAIS1tqAhx71ydCxqF0Ga%2FeZlEFe%2Bjj6uWf34IQTOlsbKEhrD1MNzD4m3e5ZZcua5cxdJgI9ThCvYt79wUbjH0%2BlNbyAEDRFgPiGkMPSS4cIGOqUB9zulLabtsEuXdZxV6qXAoRLwNZMthwUs%2FoDGD4JsM2P7ncyan5Ppsg6PrJCYhvhEgdF%2BJTY5ATqH7hpM6qU94O3oVoqvTIwwphVVXLUEm1xFL2O3LScRN1XeISXo5Fncjjj60SDZnhQGU1qtX7K%2Be46M7PSS3oC7scoPSWQMewzOdbiZJX2yTvKZyiZ4%2BXAwUVGcFXOcm075JxaDcG7VM%2FMzY7Nm&X-Amz-Signature=f7273ff67feb0a2c02aa2d9465da7d24f04db40e379d7b4158636baf3558e4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVY3S4N%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCXK8UIBOAeZu1FcnNutwlr76hzStHNb8vh4w5ErVqLZQIgeDM82THLjR7uvTExgFJRmyhhadzsAQY4q1W2C6ulMCcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFCsprGmUTspTn%2B5ircA9De2BfRg0BpUPdT6iyNb8sZNGkV3C33cmuITnOs5UGDXqTuLpmM6FAog6mQYZbOY7lgJhVvXuUyuZEZsoFSsi3yYx5Twc2yoYO00KRenUl0vAQLrgzsLil%2B6xaXKDgQtBk4QRLUs3meMn6pgyCalBqvm6Kc2e5gmGYTvRgEAdvdxhdIgECzch7hdIlxC5a6CvvYYeB1IUbW9hHg%2BIQyzVE8Ss36zCovIRSFO1698dIvSfaSohZNCayakXpiStRG4UkfbUlImBFqWMhO4Q2TSb9%2BCr2y4gCzjGdcj1esknapHBwAii5yprpgFQmHLegwcB%2B8GcqAwRMP3%2BuIZFd9LbBhjRLUTU0MEG3aXh%2B2ODl%2FDsimwKsrlLYjGs1rpNK%2BGkKOgncVeDTQo5TP9ngM2uYyIrjXG9eEffOlYqx72X9v7HfbpdLhctUE2N8li09F4cSxiZA34Nnt4IaVGOmVHvTSWC9eXW62Nvu6w4sXZ2z02Rv9qzUke7vC%2BNBCcX3DPiSs4P01Trh0DhHaYpjnZVtyAIS1tqAhx71ydCxqF0Ga%2FeZlEFe%2Bjj6uWf34IQTOlsbKEhrD1MNzD4m3e5ZZcua5cxdJgI9ThCvYt79wUbjH0%2BlNbyAEDRFgPiGkMPSS4cIGOqUB9zulLabtsEuXdZxV6qXAoRLwNZMthwUs%2FoDGD4JsM2P7ncyan5Ppsg6PrJCYhvhEgdF%2BJTY5ATqH7hpM6qU94O3oVoqvTIwwphVVXLUEm1xFL2O3LScRN1XeISXo5Fncjjj60SDZnhQGU1qtX7K%2Be46M7PSS3oC7scoPSWQMewzOdbiZJX2yTvKZyiZ4%2BXAwUVGcFXOcm075JxaDcG7VM%2FMzY7Nm&X-Amz-Signature=c43d46e123d9ea461c3cf571fe6be31cf92dadf026dfbcbfe917cb57d6509df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVY3S4N%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCXK8UIBOAeZu1FcnNutwlr76hzStHNb8vh4w5ErVqLZQIgeDM82THLjR7uvTExgFJRmyhhadzsAQY4q1W2C6ulMCcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFCsprGmUTspTn%2B5ircA9De2BfRg0BpUPdT6iyNb8sZNGkV3C33cmuITnOs5UGDXqTuLpmM6FAog6mQYZbOY7lgJhVvXuUyuZEZsoFSsi3yYx5Twc2yoYO00KRenUl0vAQLrgzsLil%2B6xaXKDgQtBk4QRLUs3meMn6pgyCalBqvm6Kc2e5gmGYTvRgEAdvdxhdIgECzch7hdIlxC5a6CvvYYeB1IUbW9hHg%2BIQyzVE8Ss36zCovIRSFO1698dIvSfaSohZNCayakXpiStRG4UkfbUlImBFqWMhO4Q2TSb9%2BCr2y4gCzjGdcj1esknapHBwAii5yprpgFQmHLegwcB%2B8GcqAwRMP3%2BuIZFd9LbBhjRLUTU0MEG3aXh%2B2ODl%2FDsimwKsrlLYjGs1rpNK%2BGkKOgncVeDTQo5TP9ngM2uYyIrjXG9eEffOlYqx72X9v7HfbpdLhctUE2N8li09F4cSxiZA34Nnt4IaVGOmVHvTSWC9eXW62Nvu6w4sXZ2z02Rv9qzUke7vC%2BNBCcX3DPiSs4P01Trh0DhHaYpjnZVtyAIS1tqAhx71ydCxqF0Ga%2FeZlEFe%2Bjj6uWf34IQTOlsbKEhrD1MNzD4m3e5ZZcua5cxdJgI9ThCvYt79wUbjH0%2BlNbyAEDRFgPiGkMPSS4cIGOqUB9zulLabtsEuXdZxV6qXAoRLwNZMthwUs%2FoDGD4JsM2P7ncyan5Ppsg6PrJCYhvhEgdF%2BJTY5ATqH7hpM6qU94O3oVoqvTIwwphVVXLUEm1xFL2O3LScRN1XeISXo5Fncjjj60SDZnhQGU1qtX7K%2Be46M7PSS3oC7scoPSWQMewzOdbiZJX2yTvKZyiZ4%2BXAwUVGcFXOcm075JxaDcG7VM%2FMzY7Nm&X-Amz-Signature=e113fe7ce89e617f615f2e75ee436585b38f0fdbcfd17d4cb9e985c3438077ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVY3S4N%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCXK8UIBOAeZu1FcnNutwlr76hzStHNb8vh4w5ErVqLZQIgeDM82THLjR7uvTExgFJRmyhhadzsAQY4q1W2C6ulMCcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFCsprGmUTspTn%2B5ircA9De2BfRg0BpUPdT6iyNb8sZNGkV3C33cmuITnOs5UGDXqTuLpmM6FAog6mQYZbOY7lgJhVvXuUyuZEZsoFSsi3yYx5Twc2yoYO00KRenUl0vAQLrgzsLil%2B6xaXKDgQtBk4QRLUs3meMn6pgyCalBqvm6Kc2e5gmGYTvRgEAdvdxhdIgECzch7hdIlxC5a6CvvYYeB1IUbW9hHg%2BIQyzVE8Ss36zCovIRSFO1698dIvSfaSohZNCayakXpiStRG4UkfbUlImBFqWMhO4Q2TSb9%2BCr2y4gCzjGdcj1esknapHBwAii5yprpgFQmHLegwcB%2B8GcqAwRMP3%2BuIZFd9LbBhjRLUTU0MEG3aXh%2B2ODl%2FDsimwKsrlLYjGs1rpNK%2BGkKOgncVeDTQo5TP9ngM2uYyIrjXG9eEffOlYqx72X9v7HfbpdLhctUE2N8li09F4cSxiZA34Nnt4IaVGOmVHvTSWC9eXW62Nvu6w4sXZ2z02Rv9qzUke7vC%2BNBCcX3DPiSs4P01Trh0DhHaYpjnZVtyAIS1tqAhx71ydCxqF0Ga%2FeZlEFe%2Bjj6uWf34IQTOlsbKEhrD1MNzD4m3e5ZZcua5cxdJgI9ThCvYt79wUbjH0%2BlNbyAEDRFgPiGkMPSS4cIGOqUB9zulLabtsEuXdZxV6qXAoRLwNZMthwUs%2FoDGD4JsM2P7ncyan5Ppsg6PrJCYhvhEgdF%2BJTY5ATqH7hpM6qU94O3oVoqvTIwwphVVXLUEm1xFL2O3LScRN1XeISXo5Fncjjj60SDZnhQGU1qtX7K%2Be46M7PSS3oC7scoPSWQMewzOdbiZJX2yTvKZyiZ4%2BXAwUVGcFXOcm075JxaDcG7VM%2FMzY7Nm&X-Amz-Signature=b14063c87b804b5154ea170e132fdf95917c088ece28d3bb07e2d6fd577eb361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVY3S4N%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCXK8UIBOAeZu1FcnNutwlr76hzStHNb8vh4w5ErVqLZQIgeDM82THLjR7uvTExgFJRmyhhadzsAQY4q1W2C6ulMCcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFCsprGmUTspTn%2B5ircA9De2BfRg0BpUPdT6iyNb8sZNGkV3C33cmuITnOs5UGDXqTuLpmM6FAog6mQYZbOY7lgJhVvXuUyuZEZsoFSsi3yYx5Twc2yoYO00KRenUl0vAQLrgzsLil%2B6xaXKDgQtBk4QRLUs3meMn6pgyCalBqvm6Kc2e5gmGYTvRgEAdvdxhdIgECzch7hdIlxC5a6CvvYYeB1IUbW9hHg%2BIQyzVE8Ss36zCovIRSFO1698dIvSfaSohZNCayakXpiStRG4UkfbUlImBFqWMhO4Q2TSb9%2BCr2y4gCzjGdcj1esknapHBwAii5yprpgFQmHLegwcB%2B8GcqAwRMP3%2BuIZFd9LbBhjRLUTU0MEG3aXh%2B2ODl%2FDsimwKsrlLYjGs1rpNK%2BGkKOgncVeDTQo5TP9ngM2uYyIrjXG9eEffOlYqx72X9v7HfbpdLhctUE2N8li09F4cSxiZA34Nnt4IaVGOmVHvTSWC9eXW62Nvu6w4sXZ2z02Rv9qzUke7vC%2BNBCcX3DPiSs4P01Trh0DhHaYpjnZVtyAIS1tqAhx71ydCxqF0Ga%2FeZlEFe%2Bjj6uWf34IQTOlsbKEhrD1MNzD4m3e5ZZcua5cxdJgI9ThCvYt79wUbjH0%2BlNbyAEDRFgPiGkMPSS4cIGOqUB9zulLabtsEuXdZxV6qXAoRLwNZMthwUs%2FoDGD4JsM2P7ncyan5Ppsg6PrJCYhvhEgdF%2BJTY5ATqH7hpM6qU94O3oVoqvTIwwphVVXLUEm1xFL2O3LScRN1XeISXo5Fncjjj60SDZnhQGU1qtX7K%2Be46M7PSS3oC7scoPSWQMewzOdbiZJX2yTvKZyiZ4%2BXAwUVGcFXOcm075JxaDcG7VM%2FMzY7Nm&X-Amz-Signature=adea2a2d1170e1dcdce76a87a7b66381d9b71e9e487fe840e244c2e80918d622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVY3S4N%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCXK8UIBOAeZu1FcnNutwlr76hzStHNb8vh4w5ErVqLZQIgeDM82THLjR7uvTExgFJRmyhhadzsAQY4q1W2C6ulMCcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFCsprGmUTspTn%2B5ircA9De2BfRg0BpUPdT6iyNb8sZNGkV3C33cmuITnOs5UGDXqTuLpmM6FAog6mQYZbOY7lgJhVvXuUyuZEZsoFSsi3yYx5Twc2yoYO00KRenUl0vAQLrgzsLil%2B6xaXKDgQtBk4QRLUs3meMn6pgyCalBqvm6Kc2e5gmGYTvRgEAdvdxhdIgECzch7hdIlxC5a6CvvYYeB1IUbW9hHg%2BIQyzVE8Ss36zCovIRSFO1698dIvSfaSohZNCayakXpiStRG4UkfbUlImBFqWMhO4Q2TSb9%2BCr2y4gCzjGdcj1esknapHBwAii5yprpgFQmHLegwcB%2B8GcqAwRMP3%2BuIZFd9LbBhjRLUTU0MEG3aXh%2B2ODl%2FDsimwKsrlLYjGs1rpNK%2BGkKOgncVeDTQo5TP9ngM2uYyIrjXG9eEffOlYqx72X9v7HfbpdLhctUE2N8li09F4cSxiZA34Nnt4IaVGOmVHvTSWC9eXW62Nvu6w4sXZ2z02Rv9qzUke7vC%2BNBCcX3DPiSs4P01Trh0DhHaYpjnZVtyAIS1tqAhx71ydCxqF0Ga%2FeZlEFe%2Bjj6uWf34IQTOlsbKEhrD1MNzD4m3e5ZZcua5cxdJgI9ThCvYt79wUbjH0%2BlNbyAEDRFgPiGkMPSS4cIGOqUB9zulLabtsEuXdZxV6qXAoRLwNZMthwUs%2FoDGD4JsM2P7ncyan5Ppsg6PrJCYhvhEgdF%2BJTY5ATqH7hpM6qU94O3oVoqvTIwwphVVXLUEm1xFL2O3LScRN1XeISXo5Fncjjj60SDZnhQGU1qtX7K%2Be46M7PSS3oC7scoPSWQMewzOdbiZJX2yTvKZyiZ4%2BXAwUVGcFXOcm075JxaDcG7VM%2FMzY7Nm&X-Amz-Signature=8a0279ef2494f9766ff17815162b953179551106e48e14c0e3628ec329bd2a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVY3S4N%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCXK8UIBOAeZu1FcnNutwlr76hzStHNb8vh4w5ErVqLZQIgeDM82THLjR7uvTExgFJRmyhhadzsAQY4q1W2C6ulMCcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFCsprGmUTspTn%2B5ircA9De2BfRg0BpUPdT6iyNb8sZNGkV3C33cmuITnOs5UGDXqTuLpmM6FAog6mQYZbOY7lgJhVvXuUyuZEZsoFSsi3yYx5Twc2yoYO00KRenUl0vAQLrgzsLil%2B6xaXKDgQtBk4QRLUs3meMn6pgyCalBqvm6Kc2e5gmGYTvRgEAdvdxhdIgECzch7hdIlxC5a6CvvYYeB1IUbW9hHg%2BIQyzVE8Ss36zCovIRSFO1698dIvSfaSohZNCayakXpiStRG4UkfbUlImBFqWMhO4Q2TSb9%2BCr2y4gCzjGdcj1esknapHBwAii5yprpgFQmHLegwcB%2B8GcqAwRMP3%2BuIZFd9LbBhjRLUTU0MEG3aXh%2B2ODl%2FDsimwKsrlLYjGs1rpNK%2BGkKOgncVeDTQo5TP9ngM2uYyIrjXG9eEffOlYqx72X9v7HfbpdLhctUE2N8li09F4cSxiZA34Nnt4IaVGOmVHvTSWC9eXW62Nvu6w4sXZ2z02Rv9qzUke7vC%2BNBCcX3DPiSs4P01Trh0DhHaYpjnZVtyAIS1tqAhx71ydCxqF0Ga%2FeZlEFe%2Bjj6uWf34IQTOlsbKEhrD1MNzD4m3e5ZZcua5cxdJgI9ThCvYt79wUbjH0%2BlNbyAEDRFgPiGkMPSS4cIGOqUB9zulLabtsEuXdZxV6qXAoRLwNZMthwUs%2FoDGD4JsM2P7ncyan5Ppsg6PrJCYhvhEgdF%2BJTY5ATqH7hpM6qU94O3oVoqvTIwwphVVXLUEm1xFL2O3LScRN1XeISXo5Fncjjj60SDZnhQGU1qtX7K%2Be46M7PSS3oC7scoPSWQMewzOdbiZJX2yTvKZyiZ4%2BXAwUVGcFXOcm075JxaDcG7VM%2FMzY7Nm&X-Amz-Signature=c79c223446f07888589a849a87f34ddd307604cb0d9179c4227c6bc9d01a062d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVY3S4N%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCXK8UIBOAeZu1FcnNutwlr76hzStHNb8vh4w5ErVqLZQIgeDM82THLjR7uvTExgFJRmyhhadzsAQY4q1W2C6ulMCcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFCsprGmUTspTn%2B5ircA9De2BfRg0BpUPdT6iyNb8sZNGkV3C33cmuITnOs5UGDXqTuLpmM6FAog6mQYZbOY7lgJhVvXuUyuZEZsoFSsi3yYx5Twc2yoYO00KRenUl0vAQLrgzsLil%2B6xaXKDgQtBk4QRLUs3meMn6pgyCalBqvm6Kc2e5gmGYTvRgEAdvdxhdIgECzch7hdIlxC5a6CvvYYeB1IUbW9hHg%2BIQyzVE8Ss36zCovIRSFO1698dIvSfaSohZNCayakXpiStRG4UkfbUlImBFqWMhO4Q2TSb9%2BCr2y4gCzjGdcj1esknapHBwAii5yprpgFQmHLegwcB%2B8GcqAwRMP3%2BuIZFd9LbBhjRLUTU0MEG3aXh%2B2ODl%2FDsimwKsrlLYjGs1rpNK%2BGkKOgncVeDTQo5TP9ngM2uYyIrjXG9eEffOlYqx72X9v7HfbpdLhctUE2N8li09F4cSxiZA34Nnt4IaVGOmVHvTSWC9eXW62Nvu6w4sXZ2z02Rv9qzUke7vC%2BNBCcX3DPiSs4P01Trh0DhHaYpjnZVtyAIS1tqAhx71ydCxqF0Ga%2FeZlEFe%2Bjj6uWf34IQTOlsbKEhrD1MNzD4m3e5ZZcua5cxdJgI9ThCvYt79wUbjH0%2BlNbyAEDRFgPiGkMPSS4cIGOqUB9zulLabtsEuXdZxV6qXAoRLwNZMthwUs%2FoDGD4JsM2P7ncyan5Ppsg6PrJCYhvhEgdF%2BJTY5ATqH7hpM6qU94O3oVoqvTIwwphVVXLUEm1xFL2O3LScRN1XeISXo5Fncjjj60SDZnhQGU1qtX7K%2Be46M7PSS3oC7scoPSWQMewzOdbiZJX2yTvKZyiZ4%2BXAwUVGcFXOcm075JxaDcG7VM%2FMzY7Nm&X-Amz-Signature=965b79083956738b7431fcaa996540953297115cbe5eca8223afc72725462177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
