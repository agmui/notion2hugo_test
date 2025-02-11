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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQT7UIRN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVJ2w1gNMgp%2FzUUGXpqhoqc8xBdxE%2FWiegkdPL9u6CkAiEAzJdmubmST9%2Ba5M0iU6XB1kpey2%2B6NlbnHxOXf%2Ft%2FvhEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTnFOiqb44K9%2BReZyrcA6VSLRGUFqTjeuZ9ODc9z5WpmqF%2B8tVpL%2Bk%2FpuahDN6iwYB3XNsZNu%2FwLoNMTdNsZR%2Fmj9c1U3rHj5uZzyVGqa0B%2BPU%2Fm34tJPx20kDdr1hesfexEL18bT7wr4EPZTdWCKPoZik5fsvSfxSp84gM8rG3rCLgcbe9rgQ%2Bd176xhpViEHcIsg%2B1WcDWsWpbqCgKMIxS44MLD5KcRdy0b21hVx%2Fa7yFbVHAGFAUQQBYpadkXHT8TDmRX9ykwEJW9okv7Lt7Xp9fm0xnjooEEgiaq%2BaF5kRuWuy0XFg75AZLcIRVUaXtr620Fb4bDtKxEDB1fc5fLnLMEXPinE%2FJ9SIOVk3Y7crMiA%2FvEK0N1G6P86EDuYk42nZob21fEh47LfKVRsYj5c6m3AAEFxULUIrMnpRd5IeWmapd4WRyvtlP7MUeB%2B2YHLldP5GnA%2FmuFtPiMGA6zAiKofDJ8QOIs9qwWBomuW05TWi%2FUtjNHgnoefasVpUpqtRfNOQsQJZBBBtlnR%2FedGsFOdrG5qb6qJUuCAdMwvuzQGxzRyrZEGcRyrmoGJNjjWoaQzYmHQnlQK6Q0FUaQDA0BToBG0pf5%2FC1m0zkmjEeDdx1iyZTZPdVMsKDLh1pB9sxR3CZdNgOMJ64rL0GOqUBrQFZtx2lU5McYnokM7%2BF0LYSUmjoOV%2BBo3HtoU3L6X9JTEHRjq6x5aMBpAyO23lwR6iB0%2FFQ5pBZIh5SVXuJzKetdMjiS8WMqvU77vN0%2BhUpqa0KtH9mT3Q6gREnu%2FwVJfrP0e8QDc%2BeTg9FBnk3qGr1c5gZqY7qIdfILG8TaSUb7M6%2BicEsjVvuJKWGRSeBbkvqi5mKK%2FSye2ssWD71mUyVxOIF&X-Amz-Signature=1ab9cbf5d018427a120b2326f9a53d2ce6f9e18d0b8999342257d49083d12616&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQT7UIRN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVJ2w1gNMgp%2FzUUGXpqhoqc8xBdxE%2FWiegkdPL9u6CkAiEAzJdmubmST9%2Ba5M0iU6XB1kpey2%2B6NlbnHxOXf%2Ft%2FvhEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTnFOiqb44K9%2BReZyrcA6VSLRGUFqTjeuZ9ODc9z5WpmqF%2B8tVpL%2Bk%2FpuahDN6iwYB3XNsZNu%2FwLoNMTdNsZR%2Fmj9c1U3rHj5uZzyVGqa0B%2BPU%2Fm34tJPx20kDdr1hesfexEL18bT7wr4EPZTdWCKPoZik5fsvSfxSp84gM8rG3rCLgcbe9rgQ%2Bd176xhpViEHcIsg%2B1WcDWsWpbqCgKMIxS44MLD5KcRdy0b21hVx%2Fa7yFbVHAGFAUQQBYpadkXHT8TDmRX9ykwEJW9okv7Lt7Xp9fm0xnjooEEgiaq%2BaF5kRuWuy0XFg75AZLcIRVUaXtr620Fb4bDtKxEDB1fc5fLnLMEXPinE%2FJ9SIOVk3Y7crMiA%2FvEK0N1G6P86EDuYk42nZob21fEh47LfKVRsYj5c6m3AAEFxULUIrMnpRd5IeWmapd4WRyvtlP7MUeB%2B2YHLldP5GnA%2FmuFtPiMGA6zAiKofDJ8QOIs9qwWBomuW05TWi%2FUtjNHgnoefasVpUpqtRfNOQsQJZBBBtlnR%2FedGsFOdrG5qb6qJUuCAdMwvuzQGxzRyrZEGcRyrmoGJNjjWoaQzYmHQnlQK6Q0FUaQDA0BToBG0pf5%2FC1m0zkmjEeDdx1iyZTZPdVMsKDLh1pB9sxR3CZdNgOMJ64rL0GOqUBrQFZtx2lU5McYnokM7%2BF0LYSUmjoOV%2BBo3HtoU3L6X9JTEHRjq6x5aMBpAyO23lwR6iB0%2FFQ5pBZIh5SVXuJzKetdMjiS8WMqvU77vN0%2BhUpqa0KtH9mT3Q6gREnu%2FwVJfrP0e8QDc%2BeTg9FBnk3qGr1c5gZqY7qIdfILG8TaSUb7M6%2BicEsjVvuJKWGRSeBbkvqi5mKK%2FSye2ssWD71mUyVxOIF&X-Amz-Signature=5dbef2f59770b2d12b843c09a417b1e9438c599e8d63e3f3350e5f0c45368086&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQT7UIRN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVJ2w1gNMgp%2FzUUGXpqhoqc8xBdxE%2FWiegkdPL9u6CkAiEAzJdmubmST9%2Ba5M0iU6XB1kpey2%2B6NlbnHxOXf%2Ft%2FvhEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTnFOiqb44K9%2BReZyrcA6VSLRGUFqTjeuZ9ODc9z5WpmqF%2B8tVpL%2Bk%2FpuahDN6iwYB3XNsZNu%2FwLoNMTdNsZR%2Fmj9c1U3rHj5uZzyVGqa0B%2BPU%2Fm34tJPx20kDdr1hesfexEL18bT7wr4EPZTdWCKPoZik5fsvSfxSp84gM8rG3rCLgcbe9rgQ%2Bd176xhpViEHcIsg%2B1WcDWsWpbqCgKMIxS44MLD5KcRdy0b21hVx%2Fa7yFbVHAGFAUQQBYpadkXHT8TDmRX9ykwEJW9okv7Lt7Xp9fm0xnjooEEgiaq%2BaF5kRuWuy0XFg75AZLcIRVUaXtr620Fb4bDtKxEDB1fc5fLnLMEXPinE%2FJ9SIOVk3Y7crMiA%2FvEK0N1G6P86EDuYk42nZob21fEh47LfKVRsYj5c6m3AAEFxULUIrMnpRd5IeWmapd4WRyvtlP7MUeB%2B2YHLldP5GnA%2FmuFtPiMGA6zAiKofDJ8QOIs9qwWBomuW05TWi%2FUtjNHgnoefasVpUpqtRfNOQsQJZBBBtlnR%2FedGsFOdrG5qb6qJUuCAdMwvuzQGxzRyrZEGcRyrmoGJNjjWoaQzYmHQnlQK6Q0FUaQDA0BToBG0pf5%2FC1m0zkmjEeDdx1iyZTZPdVMsKDLh1pB9sxR3CZdNgOMJ64rL0GOqUBrQFZtx2lU5McYnokM7%2BF0LYSUmjoOV%2BBo3HtoU3L6X9JTEHRjq6x5aMBpAyO23lwR6iB0%2FFQ5pBZIh5SVXuJzKetdMjiS8WMqvU77vN0%2BhUpqa0KtH9mT3Q6gREnu%2FwVJfrP0e8QDc%2BeTg9FBnk3qGr1c5gZqY7qIdfILG8TaSUb7M6%2BicEsjVvuJKWGRSeBbkvqi5mKK%2FSye2ssWD71mUyVxOIF&X-Amz-Signature=c27213e818083a7591eb1abb1338e6474be1b6cbdc0fe49e8b3a1fa04b93ce9c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQT7UIRN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVJ2w1gNMgp%2FzUUGXpqhoqc8xBdxE%2FWiegkdPL9u6CkAiEAzJdmubmST9%2Ba5M0iU6XB1kpey2%2B6NlbnHxOXf%2Ft%2FvhEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTnFOiqb44K9%2BReZyrcA6VSLRGUFqTjeuZ9ODc9z5WpmqF%2B8tVpL%2Bk%2FpuahDN6iwYB3XNsZNu%2FwLoNMTdNsZR%2Fmj9c1U3rHj5uZzyVGqa0B%2BPU%2Fm34tJPx20kDdr1hesfexEL18bT7wr4EPZTdWCKPoZik5fsvSfxSp84gM8rG3rCLgcbe9rgQ%2Bd176xhpViEHcIsg%2B1WcDWsWpbqCgKMIxS44MLD5KcRdy0b21hVx%2Fa7yFbVHAGFAUQQBYpadkXHT8TDmRX9ykwEJW9okv7Lt7Xp9fm0xnjooEEgiaq%2BaF5kRuWuy0XFg75AZLcIRVUaXtr620Fb4bDtKxEDB1fc5fLnLMEXPinE%2FJ9SIOVk3Y7crMiA%2FvEK0N1G6P86EDuYk42nZob21fEh47LfKVRsYj5c6m3AAEFxULUIrMnpRd5IeWmapd4WRyvtlP7MUeB%2B2YHLldP5GnA%2FmuFtPiMGA6zAiKofDJ8QOIs9qwWBomuW05TWi%2FUtjNHgnoefasVpUpqtRfNOQsQJZBBBtlnR%2FedGsFOdrG5qb6qJUuCAdMwvuzQGxzRyrZEGcRyrmoGJNjjWoaQzYmHQnlQK6Q0FUaQDA0BToBG0pf5%2FC1m0zkmjEeDdx1iyZTZPdVMsKDLh1pB9sxR3CZdNgOMJ64rL0GOqUBrQFZtx2lU5McYnokM7%2BF0LYSUmjoOV%2BBo3HtoU3L6X9JTEHRjq6x5aMBpAyO23lwR6iB0%2FFQ5pBZIh5SVXuJzKetdMjiS8WMqvU77vN0%2BhUpqa0KtH9mT3Q6gREnu%2FwVJfrP0e8QDc%2BeTg9FBnk3qGr1c5gZqY7qIdfILG8TaSUb7M6%2BicEsjVvuJKWGRSeBbkvqi5mKK%2FSye2ssWD71mUyVxOIF&X-Amz-Signature=a22fbde75ef00fd1ab0810e4a9feec8a812aa59e5dd1d7feb932e2c0cae3b476&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQT7UIRN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVJ2w1gNMgp%2FzUUGXpqhoqc8xBdxE%2FWiegkdPL9u6CkAiEAzJdmubmST9%2Ba5M0iU6XB1kpey2%2B6NlbnHxOXf%2Ft%2FvhEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTnFOiqb44K9%2BReZyrcA6VSLRGUFqTjeuZ9ODc9z5WpmqF%2B8tVpL%2Bk%2FpuahDN6iwYB3XNsZNu%2FwLoNMTdNsZR%2Fmj9c1U3rHj5uZzyVGqa0B%2BPU%2Fm34tJPx20kDdr1hesfexEL18bT7wr4EPZTdWCKPoZik5fsvSfxSp84gM8rG3rCLgcbe9rgQ%2Bd176xhpViEHcIsg%2B1WcDWsWpbqCgKMIxS44MLD5KcRdy0b21hVx%2Fa7yFbVHAGFAUQQBYpadkXHT8TDmRX9ykwEJW9okv7Lt7Xp9fm0xnjooEEgiaq%2BaF5kRuWuy0XFg75AZLcIRVUaXtr620Fb4bDtKxEDB1fc5fLnLMEXPinE%2FJ9SIOVk3Y7crMiA%2FvEK0N1G6P86EDuYk42nZob21fEh47LfKVRsYj5c6m3AAEFxULUIrMnpRd5IeWmapd4WRyvtlP7MUeB%2B2YHLldP5GnA%2FmuFtPiMGA6zAiKofDJ8QOIs9qwWBomuW05TWi%2FUtjNHgnoefasVpUpqtRfNOQsQJZBBBtlnR%2FedGsFOdrG5qb6qJUuCAdMwvuzQGxzRyrZEGcRyrmoGJNjjWoaQzYmHQnlQK6Q0FUaQDA0BToBG0pf5%2FC1m0zkmjEeDdx1iyZTZPdVMsKDLh1pB9sxR3CZdNgOMJ64rL0GOqUBrQFZtx2lU5McYnokM7%2BF0LYSUmjoOV%2BBo3HtoU3L6X9JTEHRjq6x5aMBpAyO23lwR6iB0%2FFQ5pBZIh5SVXuJzKetdMjiS8WMqvU77vN0%2BhUpqa0KtH9mT3Q6gREnu%2FwVJfrP0e8QDc%2BeTg9FBnk3qGr1c5gZqY7qIdfILG8TaSUb7M6%2BicEsjVvuJKWGRSeBbkvqi5mKK%2FSye2ssWD71mUyVxOIF&X-Amz-Signature=ffcbd7fe54818278cb64c0894340069d5d432a12df9257a10cefbbf6b61cc9b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQT7UIRN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVJ2w1gNMgp%2FzUUGXpqhoqc8xBdxE%2FWiegkdPL9u6CkAiEAzJdmubmST9%2Ba5M0iU6XB1kpey2%2B6NlbnHxOXf%2Ft%2FvhEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTnFOiqb44K9%2BReZyrcA6VSLRGUFqTjeuZ9ODc9z5WpmqF%2B8tVpL%2Bk%2FpuahDN6iwYB3XNsZNu%2FwLoNMTdNsZR%2Fmj9c1U3rHj5uZzyVGqa0B%2BPU%2Fm34tJPx20kDdr1hesfexEL18bT7wr4EPZTdWCKPoZik5fsvSfxSp84gM8rG3rCLgcbe9rgQ%2Bd176xhpViEHcIsg%2B1WcDWsWpbqCgKMIxS44MLD5KcRdy0b21hVx%2Fa7yFbVHAGFAUQQBYpadkXHT8TDmRX9ykwEJW9okv7Lt7Xp9fm0xnjooEEgiaq%2BaF5kRuWuy0XFg75AZLcIRVUaXtr620Fb4bDtKxEDB1fc5fLnLMEXPinE%2FJ9SIOVk3Y7crMiA%2FvEK0N1G6P86EDuYk42nZob21fEh47LfKVRsYj5c6m3AAEFxULUIrMnpRd5IeWmapd4WRyvtlP7MUeB%2B2YHLldP5GnA%2FmuFtPiMGA6zAiKofDJ8QOIs9qwWBomuW05TWi%2FUtjNHgnoefasVpUpqtRfNOQsQJZBBBtlnR%2FedGsFOdrG5qb6qJUuCAdMwvuzQGxzRyrZEGcRyrmoGJNjjWoaQzYmHQnlQK6Q0FUaQDA0BToBG0pf5%2FC1m0zkmjEeDdx1iyZTZPdVMsKDLh1pB9sxR3CZdNgOMJ64rL0GOqUBrQFZtx2lU5McYnokM7%2BF0LYSUmjoOV%2BBo3HtoU3L6X9JTEHRjq6x5aMBpAyO23lwR6iB0%2FFQ5pBZIh5SVXuJzKetdMjiS8WMqvU77vN0%2BhUpqa0KtH9mT3Q6gREnu%2FwVJfrP0e8QDc%2BeTg9FBnk3qGr1c5gZqY7qIdfILG8TaSUb7M6%2BicEsjVvuJKWGRSeBbkvqi5mKK%2FSye2ssWD71mUyVxOIF&X-Amz-Signature=cb52781fb6804095054d826ba505974df3ebaed33dbba1e21f0e7842046c14a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQT7UIRN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVJ2w1gNMgp%2FzUUGXpqhoqc8xBdxE%2FWiegkdPL9u6CkAiEAzJdmubmST9%2Ba5M0iU6XB1kpey2%2B6NlbnHxOXf%2Ft%2FvhEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTnFOiqb44K9%2BReZyrcA6VSLRGUFqTjeuZ9ODc9z5WpmqF%2B8tVpL%2Bk%2FpuahDN6iwYB3XNsZNu%2FwLoNMTdNsZR%2Fmj9c1U3rHj5uZzyVGqa0B%2BPU%2Fm34tJPx20kDdr1hesfexEL18bT7wr4EPZTdWCKPoZik5fsvSfxSp84gM8rG3rCLgcbe9rgQ%2Bd176xhpViEHcIsg%2B1WcDWsWpbqCgKMIxS44MLD5KcRdy0b21hVx%2Fa7yFbVHAGFAUQQBYpadkXHT8TDmRX9ykwEJW9okv7Lt7Xp9fm0xnjooEEgiaq%2BaF5kRuWuy0XFg75AZLcIRVUaXtr620Fb4bDtKxEDB1fc5fLnLMEXPinE%2FJ9SIOVk3Y7crMiA%2FvEK0N1G6P86EDuYk42nZob21fEh47LfKVRsYj5c6m3AAEFxULUIrMnpRd5IeWmapd4WRyvtlP7MUeB%2B2YHLldP5GnA%2FmuFtPiMGA6zAiKofDJ8QOIs9qwWBomuW05TWi%2FUtjNHgnoefasVpUpqtRfNOQsQJZBBBtlnR%2FedGsFOdrG5qb6qJUuCAdMwvuzQGxzRyrZEGcRyrmoGJNjjWoaQzYmHQnlQK6Q0FUaQDA0BToBG0pf5%2FC1m0zkmjEeDdx1iyZTZPdVMsKDLh1pB9sxR3CZdNgOMJ64rL0GOqUBrQFZtx2lU5McYnokM7%2BF0LYSUmjoOV%2BBo3HtoU3L6X9JTEHRjq6x5aMBpAyO23lwR6iB0%2FFQ5pBZIh5SVXuJzKetdMjiS8WMqvU77vN0%2BhUpqa0KtH9mT3Q6gREnu%2FwVJfrP0e8QDc%2BeTg9FBnk3qGr1c5gZqY7qIdfILG8TaSUb7M6%2BicEsjVvuJKWGRSeBbkvqi5mKK%2FSye2ssWD71mUyVxOIF&X-Amz-Signature=6ca4927f2e33fcb9013824c53db384c0642dd8412f04787d3c777f83a2ae55bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQT7UIRN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVJ2w1gNMgp%2FzUUGXpqhoqc8xBdxE%2FWiegkdPL9u6CkAiEAzJdmubmST9%2Ba5M0iU6XB1kpey2%2B6NlbnHxOXf%2Ft%2FvhEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTnFOiqb44K9%2BReZyrcA6VSLRGUFqTjeuZ9ODc9z5WpmqF%2B8tVpL%2Bk%2FpuahDN6iwYB3XNsZNu%2FwLoNMTdNsZR%2Fmj9c1U3rHj5uZzyVGqa0B%2BPU%2Fm34tJPx20kDdr1hesfexEL18bT7wr4EPZTdWCKPoZik5fsvSfxSp84gM8rG3rCLgcbe9rgQ%2Bd176xhpViEHcIsg%2B1WcDWsWpbqCgKMIxS44MLD5KcRdy0b21hVx%2Fa7yFbVHAGFAUQQBYpadkXHT8TDmRX9ykwEJW9okv7Lt7Xp9fm0xnjooEEgiaq%2BaF5kRuWuy0XFg75AZLcIRVUaXtr620Fb4bDtKxEDB1fc5fLnLMEXPinE%2FJ9SIOVk3Y7crMiA%2FvEK0N1G6P86EDuYk42nZob21fEh47LfKVRsYj5c6m3AAEFxULUIrMnpRd5IeWmapd4WRyvtlP7MUeB%2B2YHLldP5GnA%2FmuFtPiMGA6zAiKofDJ8QOIs9qwWBomuW05TWi%2FUtjNHgnoefasVpUpqtRfNOQsQJZBBBtlnR%2FedGsFOdrG5qb6qJUuCAdMwvuzQGxzRyrZEGcRyrmoGJNjjWoaQzYmHQnlQK6Q0FUaQDA0BToBG0pf5%2FC1m0zkmjEeDdx1iyZTZPdVMsKDLh1pB9sxR3CZdNgOMJ64rL0GOqUBrQFZtx2lU5McYnokM7%2BF0LYSUmjoOV%2BBo3HtoU3L6X9JTEHRjq6x5aMBpAyO23lwR6iB0%2FFQ5pBZIh5SVXuJzKetdMjiS8WMqvU77vN0%2BhUpqa0KtH9mT3Q6gREnu%2FwVJfrP0e8QDc%2BeTg9FBnk3qGr1c5gZqY7qIdfILG8TaSUb7M6%2BicEsjVvuJKWGRSeBbkvqi5mKK%2FSye2ssWD71mUyVxOIF&X-Amz-Signature=531f2604745e478a23c5818473cfceafcae2c9a0470feed7ab5e4784e5beb7f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
