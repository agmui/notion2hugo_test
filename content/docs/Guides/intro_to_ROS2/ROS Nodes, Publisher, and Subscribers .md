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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOMAESF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1%2BTZfsFWfvqB6vy6YGDH%2FigQFWvOa2QmXDZC1PO6vgAiEAwiRp2h9X5GP%2B9RCNm8Y52jo%2FHs5iVuNL8giGFmC6zcoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHZ20JPKKuqtMJyXAircAyDDTBoOPSvBC7kAUKVf%2FJ6DgamzkEuvbSBDpmeGIOk%2BIBKgKI7r9Uyj%2BIoc2U%2BCQClvUFTLY3Dn%2BoVdylYnEPSaG9HopvoGWT%2BW6n3IkjUHnSjW6rdE%2FecF3lB8fby2abRS9SkMlSwOWHQTMBC4gQ7zV5cDqfYz2GfA7Uof2bbSFxIi2wEGnn91V0v%2BucMUvvTsvpZm2X8iUcbbA2PpumYRP4B1Y6q0Dkh8Uo9yrG7YidXlfdbejtiulrNSH9RXEmP8sua%2FuNL20EcM%2B%2Fw659Aiiyb5Yb2bguENeHxsdVK0IzKpTxZtEk%2Blbih8%2FIed6m3btrUo5eSAW8MJlbiUDccAooEX0HjSM5n8KY9lJ1SneVCp8ImgMybXiOBT5nZzd9xlkoMRsw1%2Bv26uvL8E51f7lly1%2B4Tt0KZNYyH6SPAWoMbc%2Fm4V1dcZ7PAZISfIvMTlkqS2qOch%2FMc%2FVgRWGJ2XLgv%2BnzR7JK1oo6CQNQHEabGI0R%2BWKDGAhsK59%2Bi11C%2Fu0qCmpUfOsG54062JNNvuBq1K0s3zYdhsa1IULkHAnHgBW13RU5edr4Q4DuwIEKos4A6N69528bBRWrCd6n3MzfF3Q1EQIwN3XRw%2FS0g0f99jQ%2B3YiyX0mt70MMK2qMMGOqUB36Upu%2Fp0f902gW1ap6Tj%2FECW4WMDqlS%2F3kxeOfUag0%2FLHIhEiVHgfCPQGXztRSWe542HSCdoXnpGKvgIC3TXImzDXmV8z4zk%2FnDJmSkYb78UALoyvVslxGf%2BEGPIYnU9G2G9QQUf%2BWoELYt4hDxg49d2%2FHbQZzOnl6b%2FUHVWRAFMNU%2BJ6oJ7ZnSgmxm4MaNWBkGVdlyme1euhvSJAz4ha7wgnBE%2F&X-Amz-Signature=7866d682fefdc9259aedb487686ae79f27eb2e65394d945757984b6887a8d8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOMAESF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1%2BTZfsFWfvqB6vy6YGDH%2FigQFWvOa2QmXDZC1PO6vgAiEAwiRp2h9X5GP%2B9RCNm8Y52jo%2FHs5iVuNL8giGFmC6zcoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHZ20JPKKuqtMJyXAircAyDDTBoOPSvBC7kAUKVf%2FJ6DgamzkEuvbSBDpmeGIOk%2BIBKgKI7r9Uyj%2BIoc2U%2BCQClvUFTLY3Dn%2BoVdylYnEPSaG9HopvoGWT%2BW6n3IkjUHnSjW6rdE%2FecF3lB8fby2abRS9SkMlSwOWHQTMBC4gQ7zV5cDqfYz2GfA7Uof2bbSFxIi2wEGnn91V0v%2BucMUvvTsvpZm2X8iUcbbA2PpumYRP4B1Y6q0Dkh8Uo9yrG7YidXlfdbejtiulrNSH9RXEmP8sua%2FuNL20EcM%2B%2Fw659Aiiyb5Yb2bguENeHxsdVK0IzKpTxZtEk%2Blbih8%2FIed6m3btrUo5eSAW8MJlbiUDccAooEX0HjSM5n8KY9lJ1SneVCp8ImgMybXiOBT5nZzd9xlkoMRsw1%2Bv26uvL8E51f7lly1%2B4Tt0KZNYyH6SPAWoMbc%2Fm4V1dcZ7PAZISfIvMTlkqS2qOch%2FMc%2FVgRWGJ2XLgv%2BnzR7JK1oo6CQNQHEabGI0R%2BWKDGAhsK59%2Bi11C%2Fu0qCmpUfOsG54062JNNvuBq1K0s3zYdhsa1IULkHAnHgBW13RU5edr4Q4DuwIEKos4A6N69528bBRWrCd6n3MzfF3Q1EQIwN3XRw%2FS0g0f99jQ%2B3YiyX0mt70MMK2qMMGOqUB36Upu%2Fp0f902gW1ap6Tj%2FECW4WMDqlS%2F3kxeOfUag0%2FLHIhEiVHgfCPQGXztRSWe542HSCdoXnpGKvgIC3TXImzDXmV8z4zk%2FnDJmSkYb78UALoyvVslxGf%2BEGPIYnU9G2G9QQUf%2BWoELYt4hDxg49d2%2FHbQZzOnl6b%2FUHVWRAFMNU%2BJ6oJ7ZnSgmxm4MaNWBkGVdlyme1euhvSJAz4ha7wgnBE%2F&X-Amz-Signature=74e28ddb977c2f3c8e73cdf444d4ab00b94d15c81ab4953ba3d8c0f63e86f7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOMAESF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1%2BTZfsFWfvqB6vy6YGDH%2FigQFWvOa2QmXDZC1PO6vgAiEAwiRp2h9X5GP%2B9RCNm8Y52jo%2FHs5iVuNL8giGFmC6zcoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHZ20JPKKuqtMJyXAircAyDDTBoOPSvBC7kAUKVf%2FJ6DgamzkEuvbSBDpmeGIOk%2BIBKgKI7r9Uyj%2BIoc2U%2BCQClvUFTLY3Dn%2BoVdylYnEPSaG9HopvoGWT%2BW6n3IkjUHnSjW6rdE%2FecF3lB8fby2abRS9SkMlSwOWHQTMBC4gQ7zV5cDqfYz2GfA7Uof2bbSFxIi2wEGnn91V0v%2BucMUvvTsvpZm2X8iUcbbA2PpumYRP4B1Y6q0Dkh8Uo9yrG7YidXlfdbejtiulrNSH9RXEmP8sua%2FuNL20EcM%2B%2Fw659Aiiyb5Yb2bguENeHxsdVK0IzKpTxZtEk%2Blbih8%2FIed6m3btrUo5eSAW8MJlbiUDccAooEX0HjSM5n8KY9lJ1SneVCp8ImgMybXiOBT5nZzd9xlkoMRsw1%2Bv26uvL8E51f7lly1%2B4Tt0KZNYyH6SPAWoMbc%2Fm4V1dcZ7PAZISfIvMTlkqS2qOch%2FMc%2FVgRWGJ2XLgv%2BnzR7JK1oo6CQNQHEabGI0R%2BWKDGAhsK59%2Bi11C%2Fu0qCmpUfOsG54062JNNvuBq1K0s3zYdhsa1IULkHAnHgBW13RU5edr4Q4DuwIEKos4A6N69528bBRWrCd6n3MzfF3Q1EQIwN3XRw%2FS0g0f99jQ%2B3YiyX0mt70MMK2qMMGOqUB36Upu%2Fp0f902gW1ap6Tj%2FECW4WMDqlS%2F3kxeOfUag0%2FLHIhEiVHgfCPQGXztRSWe542HSCdoXnpGKvgIC3TXImzDXmV8z4zk%2FnDJmSkYb78UALoyvVslxGf%2BEGPIYnU9G2G9QQUf%2BWoELYt4hDxg49d2%2FHbQZzOnl6b%2FUHVWRAFMNU%2BJ6oJ7ZnSgmxm4MaNWBkGVdlyme1euhvSJAz4ha7wgnBE%2F&X-Amz-Signature=6c09a4ee5838e72359ab8defae79ce4a2f39c53b3cada0d57f0d5aa6addfdad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOMAESF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1%2BTZfsFWfvqB6vy6YGDH%2FigQFWvOa2QmXDZC1PO6vgAiEAwiRp2h9X5GP%2B9RCNm8Y52jo%2FHs5iVuNL8giGFmC6zcoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHZ20JPKKuqtMJyXAircAyDDTBoOPSvBC7kAUKVf%2FJ6DgamzkEuvbSBDpmeGIOk%2BIBKgKI7r9Uyj%2BIoc2U%2BCQClvUFTLY3Dn%2BoVdylYnEPSaG9HopvoGWT%2BW6n3IkjUHnSjW6rdE%2FecF3lB8fby2abRS9SkMlSwOWHQTMBC4gQ7zV5cDqfYz2GfA7Uof2bbSFxIi2wEGnn91V0v%2BucMUvvTsvpZm2X8iUcbbA2PpumYRP4B1Y6q0Dkh8Uo9yrG7YidXlfdbejtiulrNSH9RXEmP8sua%2FuNL20EcM%2B%2Fw659Aiiyb5Yb2bguENeHxsdVK0IzKpTxZtEk%2Blbih8%2FIed6m3btrUo5eSAW8MJlbiUDccAooEX0HjSM5n8KY9lJ1SneVCp8ImgMybXiOBT5nZzd9xlkoMRsw1%2Bv26uvL8E51f7lly1%2B4Tt0KZNYyH6SPAWoMbc%2Fm4V1dcZ7PAZISfIvMTlkqS2qOch%2FMc%2FVgRWGJ2XLgv%2BnzR7JK1oo6CQNQHEabGI0R%2BWKDGAhsK59%2Bi11C%2Fu0qCmpUfOsG54062JNNvuBq1K0s3zYdhsa1IULkHAnHgBW13RU5edr4Q4DuwIEKos4A6N69528bBRWrCd6n3MzfF3Q1EQIwN3XRw%2FS0g0f99jQ%2B3YiyX0mt70MMK2qMMGOqUB36Upu%2Fp0f902gW1ap6Tj%2FECW4WMDqlS%2F3kxeOfUag0%2FLHIhEiVHgfCPQGXztRSWe542HSCdoXnpGKvgIC3TXImzDXmV8z4zk%2FnDJmSkYb78UALoyvVslxGf%2BEGPIYnU9G2G9QQUf%2BWoELYt4hDxg49d2%2FHbQZzOnl6b%2FUHVWRAFMNU%2BJ6oJ7ZnSgmxm4MaNWBkGVdlyme1euhvSJAz4ha7wgnBE%2F&X-Amz-Signature=2ddd8df4cfda5f273787c9c092d2568fbf6e37600c65f7a2d2f22b55c09618f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOMAESF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1%2BTZfsFWfvqB6vy6YGDH%2FigQFWvOa2QmXDZC1PO6vgAiEAwiRp2h9X5GP%2B9RCNm8Y52jo%2FHs5iVuNL8giGFmC6zcoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHZ20JPKKuqtMJyXAircAyDDTBoOPSvBC7kAUKVf%2FJ6DgamzkEuvbSBDpmeGIOk%2BIBKgKI7r9Uyj%2BIoc2U%2BCQClvUFTLY3Dn%2BoVdylYnEPSaG9HopvoGWT%2BW6n3IkjUHnSjW6rdE%2FecF3lB8fby2abRS9SkMlSwOWHQTMBC4gQ7zV5cDqfYz2GfA7Uof2bbSFxIi2wEGnn91V0v%2BucMUvvTsvpZm2X8iUcbbA2PpumYRP4B1Y6q0Dkh8Uo9yrG7YidXlfdbejtiulrNSH9RXEmP8sua%2FuNL20EcM%2B%2Fw659Aiiyb5Yb2bguENeHxsdVK0IzKpTxZtEk%2Blbih8%2FIed6m3btrUo5eSAW8MJlbiUDccAooEX0HjSM5n8KY9lJ1SneVCp8ImgMybXiOBT5nZzd9xlkoMRsw1%2Bv26uvL8E51f7lly1%2B4Tt0KZNYyH6SPAWoMbc%2Fm4V1dcZ7PAZISfIvMTlkqS2qOch%2FMc%2FVgRWGJ2XLgv%2BnzR7JK1oo6CQNQHEabGI0R%2BWKDGAhsK59%2Bi11C%2Fu0qCmpUfOsG54062JNNvuBq1K0s3zYdhsa1IULkHAnHgBW13RU5edr4Q4DuwIEKos4A6N69528bBRWrCd6n3MzfF3Q1EQIwN3XRw%2FS0g0f99jQ%2B3YiyX0mt70MMK2qMMGOqUB36Upu%2Fp0f902gW1ap6Tj%2FECW4WMDqlS%2F3kxeOfUag0%2FLHIhEiVHgfCPQGXztRSWe542HSCdoXnpGKvgIC3TXImzDXmV8z4zk%2FnDJmSkYb78UALoyvVslxGf%2BEGPIYnU9G2G9QQUf%2BWoELYt4hDxg49d2%2FHbQZzOnl6b%2FUHVWRAFMNU%2BJ6oJ7ZnSgmxm4MaNWBkGVdlyme1euhvSJAz4ha7wgnBE%2F&X-Amz-Signature=68c546ffaa175f1f164cfa68e6deff0fc30eda2e4b70d8ee83fc98980647a984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOMAESF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1%2BTZfsFWfvqB6vy6YGDH%2FigQFWvOa2QmXDZC1PO6vgAiEAwiRp2h9X5GP%2B9RCNm8Y52jo%2FHs5iVuNL8giGFmC6zcoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHZ20JPKKuqtMJyXAircAyDDTBoOPSvBC7kAUKVf%2FJ6DgamzkEuvbSBDpmeGIOk%2BIBKgKI7r9Uyj%2BIoc2U%2BCQClvUFTLY3Dn%2BoVdylYnEPSaG9HopvoGWT%2BW6n3IkjUHnSjW6rdE%2FecF3lB8fby2abRS9SkMlSwOWHQTMBC4gQ7zV5cDqfYz2GfA7Uof2bbSFxIi2wEGnn91V0v%2BucMUvvTsvpZm2X8iUcbbA2PpumYRP4B1Y6q0Dkh8Uo9yrG7YidXlfdbejtiulrNSH9RXEmP8sua%2FuNL20EcM%2B%2Fw659Aiiyb5Yb2bguENeHxsdVK0IzKpTxZtEk%2Blbih8%2FIed6m3btrUo5eSAW8MJlbiUDccAooEX0HjSM5n8KY9lJ1SneVCp8ImgMybXiOBT5nZzd9xlkoMRsw1%2Bv26uvL8E51f7lly1%2B4Tt0KZNYyH6SPAWoMbc%2Fm4V1dcZ7PAZISfIvMTlkqS2qOch%2FMc%2FVgRWGJ2XLgv%2BnzR7JK1oo6CQNQHEabGI0R%2BWKDGAhsK59%2Bi11C%2Fu0qCmpUfOsG54062JNNvuBq1K0s3zYdhsa1IULkHAnHgBW13RU5edr4Q4DuwIEKos4A6N69528bBRWrCd6n3MzfF3Q1EQIwN3XRw%2FS0g0f99jQ%2B3YiyX0mt70MMK2qMMGOqUB36Upu%2Fp0f902gW1ap6Tj%2FECW4WMDqlS%2F3kxeOfUag0%2FLHIhEiVHgfCPQGXztRSWe542HSCdoXnpGKvgIC3TXImzDXmV8z4zk%2FnDJmSkYb78UALoyvVslxGf%2BEGPIYnU9G2G9QQUf%2BWoELYt4hDxg49d2%2FHbQZzOnl6b%2FUHVWRAFMNU%2BJ6oJ7ZnSgmxm4MaNWBkGVdlyme1euhvSJAz4ha7wgnBE%2F&X-Amz-Signature=35ae900eeb574bf3f50f6047b55e22b76c3f08eae7ceb52fd585d167b1a0f58d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOMAESF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1%2BTZfsFWfvqB6vy6YGDH%2FigQFWvOa2QmXDZC1PO6vgAiEAwiRp2h9X5GP%2B9RCNm8Y52jo%2FHs5iVuNL8giGFmC6zcoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHZ20JPKKuqtMJyXAircAyDDTBoOPSvBC7kAUKVf%2FJ6DgamzkEuvbSBDpmeGIOk%2BIBKgKI7r9Uyj%2BIoc2U%2BCQClvUFTLY3Dn%2BoVdylYnEPSaG9HopvoGWT%2BW6n3IkjUHnSjW6rdE%2FecF3lB8fby2abRS9SkMlSwOWHQTMBC4gQ7zV5cDqfYz2GfA7Uof2bbSFxIi2wEGnn91V0v%2BucMUvvTsvpZm2X8iUcbbA2PpumYRP4B1Y6q0Dkh8Uo9yrG7YidXlfdbejtiulrNSH9RXEmP8sua%2FuNL20EcM%2B%2Fw659Aiiyb5Yb2bguENeHxsdVK0IzKpTxZtEk%2Blbih8%2FIed6m3btrUo5eSAW8MJlbiUDccAooEX0HjSM5n8KY9lJ1SneVCp8ImgMybXiOBT5nZzd9xlkoMRsw1%2Bv26uvL8E51f7lly1%2B4Tt0KZNYyH6SPAWoMbc%2Fm4V1dcZ7PAZISfIvMTlkqS2qOch%2FMc%2FVgRWGJ2XLgv%2BnzR7JK1oo6CQNQHEabGI0R%2BWKDGAhsK59%2Bi11C%2Fu0qCmpUfOsG54062JNNvuBq1K0s3zYdhsa1IULkHAnHgBW13RU5edr4Q4DuwIEKos4A6N69528bBRWrCd6n3MzfF3Q1EQIwN3XRw%2FS0g0f99jQ%2B3YiyX0mt70MMK2qMMGOqUB36Upu%2Fp0f902gW1ap6Tj%2FECW4WMDqlS%2F3kxeOfUag0%2FLHIhEiVHgfCPQGXztRSWe542HSCdoXnpGKvgIC3TXImzDXmV8z4zk%2FnDJmSkYb78UALoyvVslxGf%2BEGPIYnU9G2G9QQUf%2BWoELYt4hDxg49d2%2FHbQZzOnl6b%2FUHVWRAFMNU%2BJ6oJ7ZnSgmxm4MaNWBkGVdlyme1euhvSJAz4ha7wgnBE%2F&X-Amz-Signature=ecf23da33d09d9fadec980335df4663fee264e3a493b4f06bd4c70ad3f2ed44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOMAESF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1%2BTZfsFWfvqB6vy6YGDH%2FigQFWvOa2QmXDZC1PO6vgAiEAwiRp2h9X5GP%2B9RCNm8Y52jo%2FHs5iVuNL8giGFmC6zcoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHZ20JPKKuqtMJyXAircAyDDTBoOPSvBC7kAUKVf%2FJ6DgamzkEuvbSBDpmeGIOk%2BIBKgKI7r9Uyj%2BIoc2U%2BCQClvUFTLY3Dn%2BoVdylYnEPSaG9HopvoGWT%2BW6n3IkjUHnSjW6rdE%2FecF3lB8fby2abRS9SkMlSwOWHQTMBC4gQ7zV5cDqfYz2GfA7Uof2bbSFxIi2wEGnn91V0v%2BucMUvvTsvpZm2X8iUcbbA2PpumYRP4B1Y6q0Dkh8Uo9yrG7YidXlfdbejtiulrNSH9RXEmP8sua%2FuNL20EcM%2B%2Fw659Aiiyb5Yb2bguENeHxsdVK0IzKpTxZtEk%2Blbih8%2FIed6m3btrUo5eSAW8MJlbiUDccAooEX0HjSM5n8KY9lJ1SneVCp8ImgMybXiOBT5nZzd9xlkoMRsw1%2Bv26uvL8E51f7lly1%2B4Tt0KZNYyH6SPAWoMbc%2Fm4V1dcZ7PAZISfIvMTlkqS2qOch%2FMc%2FVgRWGJ2XLgv%2BnzR7JK1oo6CQNQHEabGI0R%2BWKDGAhsK59%2Bi11C%2Fu0qCmpUfOsG54062JNNvuBq1K0s3zYdhsa1IULkHAnHgBW13RU5edr4Q4DuwIEKos4A6N69528bBRWrCd6n3MzfF3Q1EQIwN3XRw%2FS0g0f99jQ%2B3YiyX0mt70MMK2qMMGOqUB36Upu%2Fp0f902gW1ap6Tj%2FECW4WMDqlS%2F3kxeOfUag0%2FLHIhEiVHgfCPQGXztRSWe542HSCdoXnpGKvgIC3TXImzDXmV8z4zk%2FnDJmSkYb78UALoyvVslxGf%2BEGPIYnU9G2G9QQUf%2BWoELYt4hDxg49d2%2FHbQZzOnl6b%2FUHVWRAFMNU%2BJ6oJ7ZnSgmxm4MaNWBkGVdlyme1euhvSJAz4ha7wgnBE%2F&X-Amz-Signature=ee3a5f777fd625fac222fe78663f95f92d65fea1a494aa192878634ab4916a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
