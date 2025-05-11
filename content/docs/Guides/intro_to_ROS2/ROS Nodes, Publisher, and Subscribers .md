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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALWHOBF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDW1GNm2iVo2BhmsvqP3t%2BmWChKMpfhn8XB1OHP%2BUusPAiEArLBLYzUV7Qo9s2cSWThkhFdISeN%2Fv%2Bdgiib5269YTbUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOHKwPJ5mlqrrQ9CrcA8eiLXU7j%2BgY0T4OfeLu4CPT5trf9PBb6zsXrv%2BTza2gMzea3WWjQfrg7rJvAsdQGv1V5CFoXwssTQmTn7nlP9vejj6IowRM38Glmgu2ylJkQ7uFzwqAZ%2Fbl7bO262V5aXT7C8FDE1yfsKYt%2BDZaOGYJOfKUjDU3c6lV9hcYjpMxozSBhJJf3r5OSNc0KQuHYRDM2Ao83pyFkx%2BJTbTcBw4tdVs5dQsHtGXRxGx3NSnPHZ0qk%2B%2FlsD8ggLMOOGvNjHki5W9NhXlZ996OVcGKWDjrhHn5UpxsOmftkRF6kP1liIryQV%2Fg7q6GxTV6PNEpn%2FfxFpgUtZDfPhGZdHfcsH6Frr9h23JYew1owDEOfaGuxAd9%2BcjaLoNRCzNp2%2BNza40aarNIU3oOhx6zdYsueptYNQk4KRkDCjlby0jIrL8kT3AjJ5RdIY%2BpqE7FHtKhIq3%2BStPoY4hmf4H%2FEZngkHeilOrrNQDWGq8q1Gq3llKLobofuGBml10MA2lxRvTnHsNTQRz1xaTLU3jtHq2twspol549DEREd%2B15mLVm3R6%2Fi6nuEo5u62jcrEuMMOVfI7OLlMdWJt%2BZrn1HDDvLoZA98D2N4%2FdCGvmGI5DmZWuE%2BjgWcv5NoqAnx0jHMNPbgsEGOqUB7NWZ2POsfzhqJ4J4otsY6QsXsSVheu2Qjs6DgV5rAIM%2BSq1v6CR8VndptKzOx2ptor4n8WNe8X2xaU1Y%2BXiLzlkkxxGYUKy%2FJZ4OPbiUei7gFwruDXPD8TMfhjzMVRNVAW3%2FdlzmB%2FZQ%2Fw4xTwrizNEnwB9CWfW8BjT52KmcZ9kZhO3zmiecWmWHeQE%2FRzsItsDdbklvKl3S5SQlagxtjttJ59Iq&X-Amz-Signature=e4acff1e02c896363250bdb994c1e5aa6fbf1c376af9284f04a18842d89fb053&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALWHOBF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDW1GNm2iVo2BhmsvqP3t%2BmWChKMpfhn8XB1OHP%2BUusPAiEArLBLYzUV7Qo9s2cSWThkhFdISeN%2Fv%2Bdgiib5269YTbUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOHKwPJ5mlqrrQ9CrcA8eiLXU7j%2BgY0T4OfeLu4CPT5trf9PBb6zsXrv%2BTza2gMzea3WWjQfrg7rJvAsdQGv1V5CFoXwssTQmTn7nlP9vejj6IowRM38Glmgu2ylJkQ7uFzwqAZ%2Fbl7bO262V5aXT7C8FDE1yfsKYt%2BDZaOGYJOfKUjDU3c6lV9hcYjpMxozSBhJJf3r5OSNc0KQuHYRDM2Ao83pyFkx%2BJTbTcBw4tdVs5dQsHtGXRxGx3NSnPHZ0qk%2B%2FlsD8ggLMOOGvNjHki5W9NhXlZ996OVcGKWDjrhHn5UpxsOmftkRF6kP1liIryQV%2Fg7q6GxTV6PNEpn%2FfxFpgUtZDfPhGZdHfcsH6Frr9h23JYew1owDEOfaGuxAd9%2BcjaLoNRCzNp2%2BNza40aarNIU3oOhx6zdYsueptYNQk4KRkDCjlby0jIrL8kT3AjJ5RdIY%2BpqE7FHtKhIq3%2BStPoY4hmf4H%2FEZngkHeilOrrNQDWGq8q1Gq3llKLobofuGBml10MA2lxRvTnHsNTQRz1xaTLU3jtHq2twspol549DEREd%2B15mLVm3R6%2Fi6nuEo5u62jcrEuMMOVfI7OLlMdWJt%2BZrn1HDDvLoZA98D2N4%2FdCGvmGI5DmZWuE%2BjgWcv5NoqAnx0jHMNPbgsEGOqUB7NWZ2POsfzhqJ4J4otsY6QsXsSVheu2Qjs6DgV5rAIM%2BSq1v6CR8VndptKzOx2ptor4n8WNe8X2xaU1Y%2BXiLzlkkxxGYUKy%2FJZ4OPbiUei7gFwruDXPD8TMfhjzMVRNVAW3%2FdlzmB%2FZQ%2Fw4xTwrizNEnwB9CWfW8BjT52KmcZ9kZhO3zmiecWmWHeQE%2FRzsItsDdbklvKl3S5SQlagxtjttJ59Iq&X-Amz-Signature=de4c13d6c44e2c1e59d8f863542299f829268eb11ecf11586b85df582e05b717&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALWHOBF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDW1GNm2iVo2BhmsvqP3t%2BmWChKMpfhn8XB1OHP%2BUusPAiEArLBLYzUV7Qo9s2cSWThkhFdISeN%2Fv%2Bdgiib5269YTbUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOHKwPJ5mlqrrQ9CrcA8eiLXU7j%2BgY0T4OfeLu4CPT5trf9PBb6zsXrv%2BTza2gMzea3WWjQfrg7rJvAsdQGv1V5CFoXwssTQmTn7nlP9vejj6IowRM38Glmgu2ylJkQ7uFzwqAZ%2Fbl7bO262V5aXT7C8FDE1yfsKYt%2BDZaOGYJOfKUjDU3c6lV9hcYjpMxozSBhJJf3r5OSNc0KQuHYRDM2Ao83pyFkx%2BJTbTcBw4tdVs5dQsHtGXRxGx3NSnPHZ0qk%2B%2FlsD8ggLMOOGvNjHki5W9NhXlZ996OVcGKWDjrhHn5UpxsOmftkRF6kP1liIryQV%2Fg7q6GxTV6PNEpn%2FfxFpgUtZDfPhGZdHfcsH6Frr9h23JYew1owDEOfaGuxAd9%2BcjaLoNRCzNp2%2BNza40aarNIU3oOhx6zdYsueptYNQk4KRkDCjlby0jIrL8kT3AjJ5RdIY%2BpqE7FHtKhIq3%2BStPoY4hmf4H%2FEZngkHeilOrrNQDWGq8q1Gq3llKLobofuGBml10MA2lxRvTnHsNTQRz1xaTLU3jtHq2twspol549DEREd%2B15mLVm3R6%2Fi6nuEo5u62jcrEuMMOVfI7OLlMdWJt%2BZrn1HDDvLoZA98D2N4%2FdCGvmGI5DmZWuE%2BjgWcv5NoqAnx0jHMNPbgsEGOqUB7NWZ2POsfzhqJ4J4otsY6QsXsSVheu2Qjs6DgV5rAIM%2BSq1v6CR8VndptKzOx2ptor4n8WNe8X2xaU1Y%2BXiLzlkkxxGYUKy%2FJZ4OPbiUei7gFwruDXPD8TMfhjzMVRNVAW3%2FdlzmB%2FZQ%2Fw4xTwrizNEnwB9CWfW8BjT52KmcZ9kZhO3zmiecWmWHeQE%2FRzsItsDdbklvKl3S5SQlagxtjttJ59Iq&X-Amz-Signature=bbb45add0b959449241d66afff4b7c9f27251103bb1209d52ccaa49671575131&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALWHOBF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDW1GNm2iVo2BhmsvqP3t%2BmWChKMpfhn8XB1OHP%2BUusPAiEArLBLYzUV7Qo9s2cSWThkhFdISeN%2Fv%2Bdgiib5269YTbUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOHKwPJ5mlqrrQ9CrcA8eiLXU7j%2BgY0T4OfeLu4CPT5trf9PBb6zsXrv%2BTza2gMzea3WWjQfrg7rJvAsdQGv1V5CFoXwssTQmTn7nlP9vejj6IowRM38Glmgu2ylJkQ7uFzwqAZ%2Fbl7bO262V5aXT7C8FDE1yfsKYt%2BDZaOGYJOfKUjDU3c6lV9hcYjpMxozSBhJJf3r5OSNc0KQuHYRDM2Ao83pyFkx%2BJTbTcBw4tdVs5dQsHtGXRxGx3NSnPHZ0qk%2B%2FlsD8ggLMOOGvNjHki5W9NhXlZ996OVcGKWDjrhHn5UpxsOmftkRF6kP1liIryQV%2Fg7q6GxTV6PNEpn%2FfxFpgUtZDfPhGZdHfcsH6Frr9h23JYew1owDEOfaGuxAd9%2BcjaLoNRCzNp2%2BNza40aarNIU3oOhx6zdYsueptYNQk4KRkDCjlby0jIrL8kT3AjJ5RdIY%2BpqE7FHtKhIq3%2BStPoY4hmf4H%2FEZngkHeilOrrNQDWGq8q1Gq3llKLobofuGBml10MA2lxRvTnHsNTQRz1xaTLU3jtHq2twspol549DEREd%2B15mLVm3R6%2Fi6nuEo5u62jcrEuMMOVfI7OLlMdWJt%2BZrn1HDDvLoZA98D2N4%2FdCGvmGI5DmZWuE%2BjgWcv5NoqAnx0jHMNPbgsEGOqUB7NWZ2POsfzhqJ4J4otsY6QsXsSVheu2Qjs6DgV5rAIM%2BSq1v6CR8VndptKzOx2ptor4n8WNe8X2xaU1Y%2BXiLzlkkxxGYUKy%2FJZ4OPbiUei7gFwruDXPD8TMfhjzMVRNVAW3%2FdlzmB%2FZQ%2Fw4xTwrizNEnwB9CWfW8BjT52KmcZ9kZhO3zmiecWmWHeQE%2FRzsItsDdbklvKl3S5SQlagxtjttJ59Iq&X-Amz-Signature=2a3552a2ba96e85907323592c6c918c49e89e9c3218f14d7a832847385961920&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALWHOBF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDW1GNm2iVo2BhmsvqP3t%2BmWChKMpfhn8XB1OHP%2BUusPAiEArLBLYzUV7Qo9s2cSWThkhFdISeN%2Fv%2Bdgiib5269YTbUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOHKwPJ5mlqrrQ9CrcA8eiLXU7j%2BgY0T4OfeLu4CPT5trf9PBb6zsXrv%2BTza2gMzea3WWjQfrg7rJvAsdQGv1V5CFoXwssTQmTn7nlP9vejj6IowRM38Glmgu2ylJkQ7uFzwqAZ%2Fbl7bO262V5aXT7C8FDE1yfsKYt%2BDZaOGYJOfKUjDU3c6lV9hcYjpMxozSBhJJf3r5OSNc0KQuHYRDM2Ao83pyFkx%2BJTbTcBw4tdVs5dQsHtGXRxGx3NSnPHZ0qk%2B%2FlsD8ggLMOOGvNjHki5W9NhXlZ996OVcGKWDjrhHn5UpxsOmftkRF6kP1liIryQV%2Fg7q6GxTV6PNEpn%2FfxFpgUtZDfPhGZdHfcsH6Frr9h23JYew1owDEOfaGuxAd9%2BcjaLoNRCzNp2%2BNza40aarNIU3oOhx6zdYsueptYNQk4KRkDCjlby0jIrL8kT3AjJ5RdIY%2BpqE7FHtKhIq3%2BStPoY4hmf4H%2FEZngkHeilOrrNQDWGq8q1Gq3llKLobofuGBml10MA2lxRvTnHsNTQRz1xaTLU3jtHq2twspol549DEREd%2B15mLVm3R6%2Fi6nuEo5u62jcrEuMMOVfI7OLlMdWJt%2BZrn1HDDvLoZA98D2N4%2FdCGvmGI5DmZWuE%2BjgWcv5NoqAnx0jHMNPbgsEGOqUB7NWZ2POsfzhqJ4J4otsY6QsXsSVheu2Qjs6DgV5rAIM%2BSq1v6CR8VndptKzOx2ptor4n8WNe8X2xaU1Y%2BXiLzlkkxxGYUKy%2FJZ4OPbiUei7gFwruDXPD8TMfhjzMVRNVAW3%2FdlzmB%2FZQ%2Fw4xTwrizNEnwB9CWfW8BjT52KmcZ9kZhO3zmiecWmWHeQE%2FRzsItsDdbklvKl3S5SQlagxtjttJ59Iq&X-Amz-Signature=1398a1c74e6efa4155191c25feabde7dacb069c47ac6080d8251827befff2a20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALWHOBF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDW1GNm2iVo2BhmsvqP3t%2BmWChKMpfhn8XB1OHP%2BUusPAiEArLBLYzUV7Qo9s2cSWThkhFdISeN%2Fv%2Bdgiib5269YTbUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOHKwPJ5mlqrrQ9CrcA8eiLXU7j%2BgY0T4OfeLu4CPT5trf9PBb6zsXrv%2BTza2gMzea3WWjQfrg7rJvAsdQGv1V5CFoXwssTQmTn7nlP9vejj6IowRM38Glmgu2ylJkQ7uFzwqAZ%2Fbl7bO262V5aXT7C8FDE1yfsKYt%2BDZaOGYJOfKUjDU3c6lV9hcYjpMxozSBhJJf3r5OSNc0KQuHYRDM2Ao83pyFkx%2BJTbTcBw4tdVs5dQsHtGXRxGx3NSnPHZ0qk%2B%2FlsD8ggLMOOGvNjHki5W9NhXlZ996OVcGKWDjrhHn5UpxsOmftkRF6kP1liIryQV%2Fg7q6GxTV6PNEpn%2FfxFpgUtZDfPhGZdHfcsH6Frr9h23JYew1owDEOfaGuxAd9%2BcjaLoNRCzNp2%2BNza40aarNIU3oOhx6zdYsueptYNQk4KRkDCjlby0jIrL8kT3AjJ5RdIY%2BpqE7FHtKhIq3%2BStPoY4hmf4H%2FEZngkHeilOrrNQDWGq8q1Gq3llKLobofuGBml10MA2lxRvTnHsNTQRz1xaTLU3jtHq2twspol549DEREd%2B15mLVm3R6%2Fi6nuEo5u62jcrEuMMOVfI7OLlMdWJt%2BZrn1HDDvLoZA98D2N4%2FdCGvmGI5DmZWuE%2BjgWcv5NoqAnx0jHMNPbgsEGOqUB7NWZ2POsfzhqJ4J4otsY6QsXsSVheu2Qjs6DgV5rAIM%2BSq1v6CR8VndptKzOx2ptor4n8WNe8X2xaU1Y%2BXiLzlkkxxGYUKy%2FJZ4OPbiUei7gFwruDXPD8TMfhjzMVRNVAW3%2FdlzmB%2FZQ%2Fw4xTwrizNEnwB9CWfW8BjT52KmcZ9kZhO3zmiecWmWHeQE%2FRzsItsDdbklvKl3S5SQlagxtjttJ59Iq&X-Amz-Signature=be6222f7cb0b2314d42ce93e381067ecbebd28323a5f2f48394950ee7adf975e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALWHOBF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDW1GNm2iVo2BhmsvqP3t%2BmWChKMpfhn8XB1OHP%2BUusPAiEArLBLYzUV7Qo9s2cSWThkhFdISeN%2Fv%2Bdgiib5269YTbUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOHKwPJ5mlqrrQ9CrcA8eiLXU7j%2BgY0T4OfeLu4CPT5trf9PBb6zsXrv%2BTza2gMzea3WWjQfrg7rJvAsdQGv1V5CFoXwssTQmTn7nlP9vejj6IowRM38Glmgu2ylJkQ7uFzwqAZ%2Fbl7bO262V5aXT7C8FDE1yfsKYt%2BDZaOGYJOfKUjDU3c6lV9hcYjpMxozSBhJJf3r5OSNc0KQuHYRDM2Ao83pyFkx%2BJTbTcBw4tdVs5dQsHtGXRxGx3NSnPHZ0qk%2B%2FlsD8ggLMOOGvNjHki5W9NhXlZ996OVcGKWDjrhHn5UpxsOmftkRF6kP1liIryQV%2Fg7q6GxTV6PNEpn%2FfxFpgUtZDfPhGZdHfcsH6Frr9h23JYew1owDEOfaGuxAd9%2BcjaLoNRCzNp2%2BNza40aarNIU3oOhx6zdYsueptYNQk4KRkDCjlby0jIrL8kT3AjJ5RdIY%2BpqE7FHtKhIq3%2BStPoY4hmf4H%2FEZngkHeilOrrNQDWGq8q1Gq3llKLobofuGBml10MA2lxRvTnHsNTQRz1xaTLU3jtHq2twspol549DEREd%2B15mLVm3R6%2Fi6nuEo5u62jcrEuMMOVfI7OLlMdWJt%2BZrn1HDDvLoZA98D2N4%2FdCGvmGI5DmZWuE%2BjgWcv5NoqAnx0jHMNPbgsEGOqUB7NWZ2POsfzhqJ4J4otsY6QsXsSVheu2Qjs6DgV5rAIM%2BSq1v6CR8VndptKzOx2ptor4n8WNe8X2xaU1Y%2BXiLzlkkxxGYUKy%2FJZ4OPbiUei7gFwruDXPD8TMfhjzMVRNVAW3%2FdlzmB%2FZQ%2Fw4xTwrizNEnwB9CWfW8BjT52KmcZ9kZhO3zmiecWmWHeQE%2FRzsItsDdbklvKl3S5SQlagxtjttJ59Iq&X-Amz-Signature=31a0c0feb39f63a9207ec1d901a143459364224771ccd9439f3e0920af0c817d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALWHOBF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDW1GNm2iVo2BhmsvqP3t%2BmWChKMpfhn8XB1OHP%2BUusPAiEArLBLYzUV7Qo9s2cSWThkhFdISeN%2Fv%2Bdgiib5269YTbUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOHKwPJ5mlqrrQ9CrcA8eiLXU7j%2BgY0T4OfeLu4CPT5trf9PBb6zsXrv%2BTza2gMzea3WWjQfrg7rJvAsdQGv1V5CFoXwssTQmTn7nlP9vejj6IowRM38Glmgu2ylJkQ7uFzwqAZ%2Fbl7bO262V5aXT7C8FDE1yfsKYt%2BDZaOGYJOfKUjDU3c6lV9hcYjpMxozSBhJJf3r5OSNc0KQuHYRDM2Ao83pyFkx%2BJTbTcBw4tdVs5dQsHtGXRxGx3NSnPHZ0qk%2B%2FlsD8ggLMOOGvNjHki5W9NhXlZ996OVcGKWDjrhHn5UpxsOmftkRF6kP1liIryQV%2Fg7q6GxTV6PNEpn%2FfxFpgUtZDfPhGZdHfcsH6Frr9h23JYew1owDEOfaGuxAd9%2BcjaLoNRCzNp2%2BNza40aarNIU3oOhx6zdYsueptYNQk4KRkDCjlby0jIrL8kT3AjJ5RdIY%2BpqE7FHtKhIq3%2BStPoY4hmf4H%2FEZngkHeilOrrNQDWGq8q1Gq3llKLobofuGBml10MA2lxRvTnHsNTQRz1xaTLU3jtHq2twspol549DEREd%2B15mLVm3R6%2Fi6nuEo5u62jcrEuMMOVfI7OLlMdWJt%2BZrn1HDDvLoZA98D2N4%2FdCGvmGI5DmZWuE%2BjgWcv5NoqAnx0jHMNPbgsEGOqUB7NWZ2POsfzhqJ4J4otsY6QsXsSVheu2Qjs6DgV5rAIM%2BSq1v6CR8VndptKzOx2ptor4n8WNe8X2xaU1Y%2BXiLzlkkxxGYUKy%2FJZ4OPbiUei7gFwruDXPD8TMfhjzMVRNVAW3%2FdlzmB%2FZQ%2Fw4xTwrizNEnwB9CWfW8BjT52KmcZ9kZhO3zmiecWmWHeQE%2FRzsItsDdbklvKl3S5SQlagxtjttJ59Iq&X-Amz-Signature=9b1612c249c4a2d4873a12e861e105ac0b62f62595fd25a00c890e22689c5c50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
