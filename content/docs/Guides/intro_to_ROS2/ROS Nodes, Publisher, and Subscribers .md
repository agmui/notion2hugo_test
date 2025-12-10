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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZY5NOLW%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTH453fFCFiCR4HeAn4b86IJcERcvH20YE%2Fv1SSp41dAiEAhRAkaE8fcsAQhVrbPrabPY7S%2BULWm3c8CSArDYtpVn4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtyyfZCrJuq5BdcUyrcA%2Fwym2DgfkC4RJHubQO5ij%2Bw%2BKPC%2FtemtobKJzSgfiYcpNzD0QL%2Bin%2FUanFnfgtOw8QxNkKnyHrEZ4wwzH%2FIGr%2FWmQsvKuKUAui13SEoQXpJKqaNniIZW4awSFP0fSYqbOB9jovDpt0KxIZp8pIpFUD4dIUatQ6KoskwkBl2o8vjK8UEtQZRUhCdzUiGUt5HWBtDDBryO0oJghStaQ87iixXvPpIZ4Jdf1yf9%2BbT7hAr9hNwLDhT8s4vZTPuhVk%2F5gMiGMKbW%2BfxOUR421P1sWrzlj2LZSqsUKd9Ap6nPrm8gwwjk8h%2FKV75jjqCevb1o0XWb0meWF9gie6t8%2B7Sx1FiCYJvAHSEhm%2F6GMtkjBqeTwuD%2BabgJVmztQl6bh434g%2Ff5F49kd9lIjafkjQZ5crDCCM3kZoS2OsXw93mo3Ctg1GaaIBFclEiUDG%2BsBVm1r6tOx5W9LZ6iRCCb1sY9Tn4wXuaQ7z59XUe7DPea2s1BZGEI4gF0%2FyK1O2iyTZBo3EqcaS7LJC1OmJzEt5gmM2XRn1RvXVtj1kwbSS6REjUkoQPbX8pN22jp4%2F%2BQRq8da5zMBE58KIaWB2szYb1rLZ3L%2BujJiYdTQmEaI%2BjpGIBLAF9lCN64RV0mV%2B%2FMJzE4skGOqUB%2BNOdt9%2BWO5%2BHr9YMybr22Hdi%2BgHa%2BzYSVIhp7gWeK4UwGws8sqOCTdh9lepb2v2wjXzI4Z8wwLeQNomgadODulEqP9IriGp3b%2F%2F7VQOGX7xmYF9sMh243aN1kAnCjSGF0VP26mixfEWiNp2TKWt8Eub%2BlmowUinmcx7UzR0qU%2Fr%2BiNRq0EdJHoA9ng21szYRF%2FGoJ%2FFGbXlhosoMLRYcrs1bo12K&X-Amz-Signature=c23c332c3c87ad6ea9004defc2948fa5887a3395cf912efe4f5c6b4412311a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZY5NOLW%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTH453fFCFiCR4HeAn4b86IJcERcvH20YE%2Fv1SSp41dAiEAhRAkaE8fcsAQhVrbPrabPY7S%2BULWm3c8CSArDYtpVn4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtyyfZCrJuq5BdcUyrcA%2Fwym2DgfkC4RJHubQO5ij%2Bw%2BKPC%2FtemtobKJzSgfiYcpNzD0QL%2Bin%2FUanFnfgtOw8QxNkKnyHrEZ4wwzH%2FIGr%2FWmQsvKuKUAui13SEoQXpJKqaNniIZW4awSFP0fSYqbOB9jovDpt0KxIZp8pIpFUD4dIUatQ6KoskwkBl2o8vjK8UEtQZRUhCdzUiGUt5HWBtDDBryO0oJghStaQ87iixXvPpIZ4Jdf1yf9%2BbT7hAr9hNwLDhT8s4vZTPuhVk%2F5gMiGMKbW%2BfxOUR421P1sWrzlj2LZSqsUKd9Ap6nPrm8gwwjk8h%2FKV75jjqCevb1o0XWb0meWF9gie6t8%2B7Sx1FiCYJvAHSEhm%2F6GMtkjBqeTwuD%2BabgJVmztQl6bh434g%2Ff5F49kd9lIjafkjQZ5crDCCM3kZoS2OsXw93mo3Ctg1GaaIBFclEiUDG%2BsBVm1r6tOx5W9LZ6iRCCb1sY9Tn4wXuaQ7z59XUe7DPea2s1BZGEI4gF0%2FyK1O2iyTZBo3EqcaS7LJC1OmJzEt5gmM2XRn1RvXVtj1kwbSS6REjUkoQPbX8pN22jp4%2F%2BQRq8da5zMBE58KIaWB2szYb1rLZ3L%2BujJiYdTQmEaI%2BjpGIBLAF9lCN64RV0mV%2B%2FMJzE4skGOqUB%2BNOdt9%2BWO5%2BHr9YMybr22Hdi%2BgHa%2BzYSVIhp7gWeK4UwGws8sqOCTdh9lepb2v2wjXzI4Z8wwLeQNomgadODulEqP9IriGp3b%2F%2F7VQOGX7xmYF9sMh243aN1kAnCjSGF0VP26mixfEWiNp2TKWt8Eub%2BlmowUinmcx7UzR0qU%2Fr%2BiNRq0EdJHoA9ng21szYRF%2FGoJ%2FFGbXlhosoMLRYcrs1bo12K&X-Amz-Signature=4dcb86dbbd8e3f838067bbc3aee98d20d6cb4db849cb65c9da0800af2e5926d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZY5NOLW%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTH453fFCFiCR4HeAn4b86IJcERcvH20YE%2Fv1SSp41dAiEAhRAkaE8fcsAQhVrbPrabPY7S%2BULWm3c8CSArDYtpVn4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtyyfZCrJuq5BdcUyrcA%2Fwym2DgfkC4RJHubQO5ij%2Bw%2BKPC%2FtemtobKJzSgfiYcpNzD0QL%2Bin%2FUanFnfgtOw8QxNkKnyHrEZ4wwzH%2FIGr%2FWmQsvKuKUAui13SEoQXpJKqaNniIZW4awSFP0fSYqbOB9jovDpt0KxIZp8pIpFUD4dIUatQ6KoskwkBl2o8vjK8UEtQZRUhCdzUiGUt5HWBtDDBryO0oJghStaQ87iixXvPpIZ4Jdf1yf9%2BbT7hAr9hNwLDhT8s4vZTPuhVk%2F5gMiGMKbW%2BfxOUR421P1sWrzlj2LZSqsUKd9Ap6nPrm8gwwjk8h%2FKV75jjqCevb1o0XWb0meWF9gie6t8%2B7Sx1FiCYJvAHSEhm%2F6GMtkjBqeTwuD%2BabgJVmztQl6bh434g%2Ff5F49kd9lIjafkjQZ5crDCCM3kZoS2OsXw93mo3Ctg1GaaIBFclEiUDG%2BsBVm1r6tOx5W9LZ6iRCCb1sY9Tn4wXuaQ7z59XUe7DPea2s1BZGEI4gF0%2FyK1O2iyTZBo3EqcaS7LJC1OmJzEt5gmM2XRn1RvXVtj1kwbSS6REjUkoQPbX8pN22jp4%2F%2BQRq8da5zMBE58KIaWB2szYb1rLZ3L%2BujJiYdTQmEaI%2BjpGIBLAF9lCN64RV0mV%2B%2FMJzE4skGOqUB%2BNOdt9%2BWO5%2BHr9YMybr22Hdi%2BgHa%2BzYSVIhp7gWeK4UwGws8sqOCTdh9lepb2v2wjXzI4Z8wwLeQNomgadODulEqP9IriGp3b%2F%2F7VQOGX7xmYF9sMh243aN1kAnCjSGF0VP26mixfEWiNp2TKWt8Eub%2BlmowUinmcx7UzR0qU%2Fr%2BiNRq0EdJHoA9ng21szYRF%2FGoJ%2FFGbXlhosoMLRYcrs1bo12K&X-Amz-Signature=3c48cb13638bc2567c522140f817a60475e9fc817617561611842a1e247f271b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZY5NOLW%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTH453fFCFiCR4HeAn4b86IJcERcvH20YE%2Fv1SSp41dAiEAhRAkaE8fcsAQhVrbPrabPY7S%2BULWm3c8CSArDYtpVn4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtyyfZCrJuq5BdcUyrcA%2Fwym2DgfkC4RJHubQO5ij%2Bw%2BKPC%2FtemtobKJzSgfiYcpNzD0QL%2Bin%2FUanFnfgtOw8QxNkKnyHrEZ4wwzH%2FIGr%2FWmQsvKuKUAui13SEoQXpJKqaNniIZW4awSFP0fSYqbOB9jovDpt0KxIZp8pIpFUD4dIUatQ6KoskwkBl2o8vjK8UEtQZRUhCdzUiGUt5HWBtDDBryO0oJghStaQ87iixXvPpIZ4Jdf1yf9%2BbT7hAr9hNwLDhT8s4vZTPuhVk%2F5gMiGMKbW%2BfxOUR421P1sWrzlj2LZSqsUKd9Ap6nPrm8gwwjk8h%2FKV75jjqCevb1o0XWb0meWF9gie6t8%2B7Sx1FiCYJvAHSEhm%2F6GMtkjBqeTwuD%2BabgJVmztQl6bh434g%2Ff5F49kd9lIjafkjQZ5crDCCM3kZoS2OsXw93mo3Ctg1GaaIBFclEiUDG%2BsBVm1r6tOx5W9LZ6iRCCb1sY9Tn4wXuaQ7z59XUe7DPea2s1BZGEI4gF0%2FyK1O2iyTZBo3EqcaS7LJC1OmJzEt5gmM2XRn1RvXVtj1kwbSS6REjUkoQPbX8pN22jp4%2F%2BQRq8da5zMBE58KIaWB2szYb1rLZ3L%2BujJiYdTQmEaI%2BjpGIBLAF9lCN64RV0mV%2B%2FMJzE4skGOqUB%2BNOdt9%2BWO5%2BHr9YMybr22Hdi%2BgHa%2BzYSVIhp7gWeK4UwGws8sqOCTdh9lepb2v2wjXzI4Z8wwLeQNomgadODulEqP9IriGp3b%2F%2F7VQOGX7xmYF9sMh243aN1kAnCjSGF0VP26mixfEWiNp2TKWt8Eub%2BlmowUinmcx7UzR0qU%2Fr%2BiNRq0EdJHoA9ng21szYRF%2FGoJ%2FFGbXlhosoMLRYcrs1bo12K&X-Amz-Signature=0dc5a76db06c7857a79475ea3f05be6e0ca3f09036c3fb76a77f762822abb7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZY5NOLW%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTH453fFCFiCR4HeAn4b86IJcERcvH20YE%2Fv1SSp41dAiEAhRAkaE8fcsAQhVrbPrabPY7S%2BULWm3c8CSArDYtpVn4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtyyfZCrJuq5BdcUyrcA%2Fwym2DgfkC4RJHubQO5ij%2Bw%2BKPC%2FtemtobKJzSgfiYcpNzD0QL%2Bin%2FUanFnfgtOw8QxNkKnyHrEZ4wwzH%2FIGr%2FWmQsvKuKUAui13SEoQXpJKqaNniIZW4awSFP0fSYqbOB9jovDpt0KxIZp8pIpFUD4dIUatQ6KoskwkBl2o8vjK8UEtQZRUhCdzUiGUt5HWBtDDBryO0oJghStaQ87iixXvPpIZ4Jdf1yf9%2BbT7hAr9hNwLDhT8s4vZTPuhVk%2F5gMiGMKbW%2BfxOUR421P1sWrzlj2LZSqsUKd9Ap6nPrm8gwwjk8h%2FKV75jjqCevb1o0XWb0meWF9gie6t8%2B7Sx1FiCYJvAHSEhm%2F6GMtkjBqeTwuD%2BabgJVmztQl6bh434g%2Ff5F49kd9lIjafkjQZ5crDCCM3kZoS2OsXw93mo3Ctg1GaaIBFclEiUDG%2BsBVm1r6tOx5W9LZ6iRCCb1sY9Tn4wXuaQ7z59XUe7DPea2s1BZGEI4gF0%2FyK1O2iyTZBo3EqcaS7LJC1OmJzEt5gmM2XRn1RvXVtj1kwbSS6REjUkoQPbX8pN22jp4%2F%2BQRq8da5zMBE58KIaWB2szYb1rLZ3L%2BujJiYdTQmEaI%2BjpGIBLAF9lCN64RV0mV%2B%2FMJzE4skGOqUB%2BNOdt9%2BWO5%2BHr9YMybr22Hdi%2BgHa%2BzYSVIhp7gWeK4UwGws8sqOCTdh9lepb2v2wjXzI4Z8wwLeQNomgadODulEqP9IriGp3b%2F%2F7VQOGX7xmYF9sMh243aN1kAnCjSGF0VP26mixfEWiNp2TKWt8Eub%2BlmowUinmcx7UzR0qU%2Fr%2BiNRq0EdJHoA9ng21szYRF%2FGoJ%2FFGbXlhosoMLRYcrs1bo12K&X-Amz-Signature=4a7ea243bf902277905391d2f02a626462c5cd00b8ea2eeef67a66b2c8025d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZY5NOLW%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTH453fFCFiCR4HeAn4b86IJcERcvH20YE%2Fv1SSp41dAiEAhRAkaE8fcsAQhVrbPrabPY7S%2BULWm3c8CSArDYtpVn4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtyyfZCrJuq5BdcUyrcA%2Fwym2DgfkC4RJHubQO5ij%2Bw%2BKPC%2FtemtobKJzSgfiYcpNzD0QL%2Bin%2FUanFnfgtOw8QxNkKnyHrEZ4wwzH%2FIGr%2FWmQsvKuKUAui13SEoQXpJKqaNniIZW4awSFP0fSYqbOB9jovDpt0KxIZp8pIpFUD4dIUatQ6KoskwkBl2o8vjK8UEtQZRUhCdzUiGUt5HWBtDDBryO0oJghStaQ87iixXvPpIZ4Jdf1yf9%2BbT7hAr9hNwLDhT8s4vZTPuhVk%2F5gMiGMKbW%2BfxOUR421P1sWrzlj2LZSqsUKd9Ap6nPrm8gwwjk8h%2FKV75jjqCevb1o0XWb0meWF9gie6t8%2B7Sx1FiCYJvAHSEhm%2F6GMtkjBqeTwuD%2BabgJVmztQl6bh434g%2Ff5F49kd9lIjafkjQZ5crDCCM3kZoS2OsXw93mo3Ctg1GaaIBFclEiUDG%2BsBVm1r6tOx5W9LZ6iRCCb1sY9Tn4wXuaQ7z59XUe7DPea2s1BZGEI4gF0%2FyK1O2iyTZBo3EqcaS7LJC1OmJzEt5gmM2XRn1RvXVtj1kwbSS6REjUkoQPbX8pN22jp4%2F%2BQRq8da5zMBE58KIaWB2szYb1rLZ3L%2BujJiYdTQmEaI%2BjpGIBLAF9lCN64RV0mV%2B%2FMJzE4skGOqUB%2BNOdt9%2BWO5%2BHr9YMybr22Hdi%2BgHa%2BzYSVIhp7gWeK4UwGws8sqOCTdh9lepb2v2wjXzI4Z8wwLeQNomgadODulEqP9IriGp3b%2F%2F7VQOGX7xmYF9sMh243aN1kAnCjSGF0VP26mixfEWiNp2TKWt8Eub%2BlmowUinmcx7UzR0qU%2Fr%2BiNRq0EdJHoA9ng21szYRF%2FGoJ%2FFGbXlhosoMLRYcrs1bo12K&X-Amz-Signature=9007230fa51050463d343868d490aa390e6bfa0d457b77793e7ce0d37d1d2412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZY5NOLW%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTH453fFCFiCR4HeAn4b86IJcERcvH20YE%2Fv1SSp41dAiEAhRAkaE8fcsAQhVrbPrabPY7S%2BULWm3c8CSArDYtpVn4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtyyfZCrJuq5BdcUyrcA%2Fwym2DgfkC4RJHubQO5ij%2Bw%2BKPC%2FtemtobKJzSgfiYcpNzD0QL%2Bin%2FUanFnfgtOw8QxNkKnyHrEZ4wwzH%2FIGr%2FWmQsvKuKUAui13SEoQXpJKqaNniIZW4awSFP0fSYqbOB9jovDpt0KxIZp8pIpFUD4dIUatQ6KoskwkBl2o8vjK8UEtQZRUhCdzUiGUt5HWBtDDBryO0oJghStaQ87iixXvPpIZ4Jdf1yf9%2BbT7hAr9hNwLDhT8s4vZTPuhVk%2F5gMiGMKbW%2BfxOUR421P1sWrzlj2LZSqsUKd9Ap6nPrm8gwwjk8h%2FKV75jjqCevb1o0XWb0meWF9gie6t8%2B7Sx1FiCYJvAHSEhm%2F6GMtkjBqeTwuD%2BabgJVmztQl6bh434g%2Ff5F49kd9lIjafkjQZ5crDCCM3kZoS2OsXw93mo3Ctg1GaaIBFclEiUDG%2BsBVm1r6tOx5W9LZ6iRCCb1sY9Tn4wXuaQ7z59XUe7DPea2s1BZGEI4gF0%2FyK1O2iyTZBo3EqcaS7LJC1OmJzEt5gmM2XRn1RvXVtj1kwbSS6REjUkoQPbX8pN22jp4%2F%2BQRq8da5zMBE58KIaWB2szYb1rLZ3L%2BujJiYdTQmEaI%2BjpGIBLAF9lCN64RV0mV%2B%2FMJzE4skGOqUB%2BNOdt9%2BWO5%2BHr9YMybr22Hdi%2BgHa%2BzYSVIhp7gWeK4UwGws8sqOCTdh9lepb2v2wjXzI4Z8wwLeQNomgadODulEqP9IriGp3b%2F%2F7VQOGX7xmYF9sMh243aN1kAnCjSGF0VP26mixfEWiNp2TKWt8Eub%2BlmowUinmcx7UzR0qU%2Fr%2BiNRq0EdJHoA9ng21szYRF%2FGoJ%2FFGbXlhosoMLRYcrs1bo12K&X-Amz-Signature=85ad30da9633f4a1d3d374a12951a51f1ca54f9127bdc467a3a563069a9351ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZY5NOLW%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTH453fFCFiCR4HeAn4b86IJcERcvH20YE%2Fv1SSp41dAiEAhRAkaE8fcsAQhVrbPrabPY7S%2BULWm3c8CSArDYtpVn4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtyyfZCrJuq5BdcUyrcA%2Fwym2DgfkC4RJHubQO5ij%2Bw%2BKPC%2FtemtobKJzSgfiYcpNzD0QL%2Bin%2FUanFnfgtOw8QxNkKnyHrEZ4wwzH%2FIGr%2FWmQsvKuKUAui13SEoQXpJKqaNniIZW4awSFP0fSYqbOB9jovDpt0KxIZp8pIpFUD4dIUatQ6KoskwkBl2o8vjK8UEtQZRUhCdzUiGUt5HWBtDDBryO0oJghStaQ87iixXvPpIZ4Jdf1yf9%2BbT7hAr9hNwLDhT8s4vZTPuhVk%2F5gMiGMKbW%2BfxOUR421P1sWrzlj2LZSqsUKd9Ap6nPrm8gwwjk8h%2FKV75jjqCevb1o0XWb0meWF9gie6t8%2B7Sx1FiCYJvAHSEhm%2F6GMtkjBqeTwuD%2BabgJVmztQl6bh434g%2Ff5F49kd9lIjafkjQZ5crDCCM3kZoS2OsXw93mo3Ctg1GaaIBFclEiUDG%2BsBVm1r6tOx5W9LZ6iRCCb1sY9Tn4wXuaQ7z59XUe7DPea2s1BZGEI4gF0%2FyK1O2iyTZBo3EqcaS7LJC1OmJzEt5gmM2XRn1RvXVtj1kwbSS6REjUkoQPbX8pN22jp4%2F%2BQRq8da5zMBE58KIaWB2szYb1rLZ3L%2BujJiYdTQmEaI%2BjpGIBLAF9lCN64RV0mV%2B%2FMJzE4skGOqUB%2BNOdt9%2BWO5%2BHr9YMybr22Hdi%2BgHa%2BzYSVIhp7gWeK4UwGws8sqOCTdh9lepb2v2wjXzI4Z8wwLeQNomgadODulEqP9IriGp3b%2F%2F7VQOGX7xmYF9sMh243aN1kAnCjSGF0VP26mixfEWiNp2TKWt8Eub%2BlmowUinmcx7UzR0qU%2Fr%2BiNRq0EdJHoA9ng21szYRF%2FGoJ%2FFGbXlhosoMLRYcrs1bo12K&X-Amz-Signature=7ca1c31d3aa4d92837f2b82eefbaf62e4f82e2b0dd11c8f2f58fb491ba95b675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
