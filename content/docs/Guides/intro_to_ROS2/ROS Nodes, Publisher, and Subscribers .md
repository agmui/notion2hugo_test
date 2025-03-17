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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6LNC43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN6eXbMRVmSxlJknUZWmHD%2BITwcteoNPY8MzpNEno8QIgKVaeDidgwZnwUrUsG%2BmgD90EKoI0lzucxRxPlViqe5gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHwsHsw53aRbLXmYryrcAwbfFJUxo18R%2BCsHMGTctTmW50HlSVZr%2B96lfieDacBr8XSS9qo4hcTYMobJtPPTlWjpRa8g6t0I6rdsojvXkzZvQ4fRQIxAYIifHyf0i4qi6IkL4DdUft%2FSBV0uXkgBWMX2VKA02WYyIZPkam%2FGQdLVIR3WFOM7QuP3wysFvE%2BPEA2%2F%2F31zxXwdehpEZwTQNW3qd6AG0LeNsGXJXxGSmCbx74HyuGQlDLCFwtfkwM9E8DPSqIyYRcCIgfW78KE0bh6vmsGO9zXcwcp4QqK45vdxfgy08h1GtIjqSNa6f57wN0pjmJ%2Fu%2FlDNf27xQrhicqhDl1pE%2FxU1rEdDcoNX9j%2B99BYiFULPW0PB5aKWH4e63uE%2BX%2F%2BO9bjZVfiIonJWsv%2F%2BduOgjaMknzjJ%2FUQRnI0Z%2F7Vv07eZXFe%2BfIvcdyo5IOjstM%2FeJa6yzsEvQaw1Kuks2YT35OybXqhKnQzLl8knK7DauNNHsgybqz3COixs%2BeaF%2Ftq09HB%2BslwfVpW1fo6yMHIinDpNAFckcUEmYH%2B3r1doQefGVfsF9vnB9rWzzeT8bia%2BqYj10X4JUhh7AVgVCVy2QoExjk0ubKcbYbcYkU%2Fmnl2m%2BV1Y%2F%2FI92dJ%2BcKmP3Pfub%2BlaYKjSMJOS374GOqUBXFxKaqD%2FdPmOD4ODP7j4ibQckntIjtqNJXKrttk1o%2FblRiFJfbpa4JROsYGaAeSczI5Bw%2FomlITWuvBoyhLXI197poy90NPR78E4UisCC3CMVjzZIywIIX7fitJvkohMMK%2Fy2GqPuzVqZ7w7pv3uwkp%2BpZHEG4PubQTTM91UtJj64vEs09ML0x3sp9NPNksxafjhlmfZJTh%2FL10vH0yByowqof8p&X-Amz-Signature=e30ffed6c2917a27587a8a238e0a71776af1cc6f98ea334a612d3167367ba86d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6LNC43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN6eXbMRVmSxlJknUZWmHD%2BITwcteoNPY8MzpNEno8QIgKVaeDidgwZnwUrUsG%2BmgD90EKoI0lzucxRxPlViqe5gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHwsHsw53aRbLXmYryrcAwbfFJUxo18R%2BCsHMGTctTmW50HlSVZr%2B96lfieDacBr8XSS9qo4hcTYMobJtPPTlWjpRa8g6t0I6rdsojvXkzZvQ4fRQIxAYIifHyf0i4qi6IkL4DdUft%2FSBV0uXkgBWMX2VKA02WYyIZPkam%2FGQdLVIR3WFOM7QuP3wysFvE%2BPEA2%2F%2F31zxXwdehpEZwTQNW3qd6AG0LeNsGXJXxGSmCbx74HyuGQlDLCFwtfkwM9E8DPSqIyYRcCIgfW78KE0bh6vmsGO9zXcwcp4QqK45vdxfgy08h1GtIjqSNa6f57wN0pjmJ%2Fu%2FlDNf27xQrhicqhDl1pE%2FxU1rEdDcoNX9j%2B99BYiFULPW0PB5aKWH4e63uE%2BX%2F%2BO9bjZVfiIonJWsv%2F%2BduOgjaMknzjJ%2FUQRnI0Z%2F7Vv07eZXFe%2BfIvcdyo5IOjstM%2FeJa6yzsEvQaw1Kuks2YT35OybXqhKnQzLl8knK7DauNNHsgybqz3COixs%2BeaF%2Ftq09HB%2BslwfVpW1fo6yMHIinDpNAFckcUEmYH%2B3r1doQefGVfsF9vnB9rWzzeT8bia%2BqYj10X4JUhh7AVgVCVy2QoExjk0ubKcbYbcYkU%2Fmnl2m%2BV1Y%2F%2FI92dJ%2BcKmP3Pfub%2BlaYKjSMJOS374GOqUBXFxKaqD%2FdPmOD4ODP7j4ibQckntIjtqNJXKrttk1o%2FblRiFJfbpa4JROsYGaAeSczI5Bw%2FomlITWuvBoyhLXI197poy90NPR78E4UisCC3CMVjzZIywIIX7fitJvkohMMK%2Fy2GqPuzVqZ7w7pv3uwkp%2BpZHEG4PubQTTM91UtJj64vEs09ML0x3sp9NPNksxafjhlmfZJTh%2FL10vH0yByowqof8p&X-Amz-Signature=8a6bbf10ec4c9dce869f8bdb71ed5f0662dd677d64d278f3d792456f55074a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6LNC43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN6eXbMRVmSxlJknUZWmHD%2BITwcteoNPY8MzpNEno8QIgKVaeDidgwZnwUrUsG%2BmgD90EKoI0lzucxRxPlViqe5gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHwsHsw53aRbLXmYryrcAwbfFJUxo18R%2BCsHMGTctTmW50HlSVZr%2B96lfieDacBr8XSS9qo4hcTYMobJtPPTlWjpRa8g6t0I6rdsojvXkzZvQ4fRQIxAYIifHyf0i4qi6IkL4DdUft%2FSBV0uXkgBWMX2VKA02WYyIZPkam%2FGQdLVIR3WFOM7QuP3wysFvE%2BPEA2%2F%2F31zxXwdehpEZwTQNW3qd6AG0LeNsGXJXxGSmCbx74HyuGQlDLCFwtfkwM9E8DPSqIyYRcCIgfW78KE0bh6vmsGO9zXcwcp4QqK45vdxfgy08h1GtIjqSNa6f57wN0pjmJ%2Fu%2FlDNf27xQrhicqhDl1pE%2FxU1rEdDcoNX9j%2B99BYiFULPW0PB5aKWH4e63uE%2BX%2F%2BO9bjZVfiIonJWsv%2F%2BduOgjaMknzjJ%2FUQRnI0Z%2F7Vv07eZXFe%2BfIvcdyo5IOjstM%2FeJa6yzsEvQaw1Kuks2YT35OybXqhKnQzLl8knK7DauNNHsgybqz3COixs%2BeaF%2Ftq09HB%2BslwfVpW1fo6yMHIinDpNAFckcUEmYH%2B3r1doQefGVfsF9vnB9rWzzeT8bia%2BqYj10X4JUhh7AVgVCVy2QoExjk0ubKcbYbcYkU%2Fmnl2m%2BV1Y%2F%2FI92dJ%2BcKmP3Pfub%2BlaYKjSMJOS374GOqUBXFxKaqD%2FdPmOD4ODP7j4ibQckntIjtqNJXKrttk1o%2FblRiFJfbpa4JROsYGaAeSczI5Bw%2FomlITWuvBoyhLXI197poy90NPR78E4UisCC3CMVjzZIywIIX7fitJvkohMMK%2Fy2GqPuzVqZ7w7pv3uwkp%2BpZHEG4PubQTTM91UtJj64vEs09ML0x3sp9NPNksxafjhlmfZJTh%2FL10vH0yByowqof8p&X-Amz-Signature=df63cd0b9c3717e271b84b21c4e36553ef7b6851dcab7c9551da85b2b2a2ca85&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6LNC43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN6eXbMRVmSxlJknUZWmHD%2BITwcteoNPY8MzpNEno8QIgKVaeDidgwZnwUrUsG%2BmgD90EKoI0lzucxRxPlViqe5gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHwsHsw53aRbLXmYryrcAwbfFJUxo18R%2BCsHMGTctTmW50HlSVZr%2B96lfieDacBr8XSS9qo4hcTYMobJtPPTlWjpRa8g6t0I6rdsojvXkzZvQ4fRQIxAYIifHyf0i4qi6IkL4DdUft%2FSBV0uXkgBWMX2VKA02WYyIZPkam%2FGQdLVIR3WFOM7QuP3wysFvE%2BPEA2%2F%2F31zxXwdehpEZwTQNW3qd6AG0LeNsGXJXxGSmCbx74HyuGQlDLCFwtfkwM9E8DPSqIyYRcCIgfW78KE0bh6vmsGO9zXcwcp4QqK45vdxfgy08h1GtIjqSNa6f57wN0pjmJ%2Fu%2FlDNf27xQrhicqhDl1pE%2FxU1rEdDcoNX9j%2B99BYiFULPW0PB5aKWH4e63uE%2BX%2F%2BO9bjZVfiIonJWsv%2F%2BduOgjaMknzjJ%2FUQRnI0Z%2F7Vv07eZXFe%2BfIvcdyo5IOjstM%2FeJa6yzsEvQaw1Kuks2YT35OybXqhKnQzLl8knK7DauNNHsgybqz3COixs%2BeaF%2Ftq09HB%2BslwfVpW1fo6yMHIinDpNAFckcUEmYH%2B3r1doQefGVfsF9vnB9rWzzeT8bia%2BqYj10X4JUhh7AVgVCVy2QoExjk0ubKcbYbcYkU%2Fmnl2m%2BV1Y%2F%2FI92dJ%2BcKmP3Pfub%2BlaYKjSMJOS374GOqUBXFxKaqD%2FdPmOD4ODP7j4ibQckntIjtqNJXKrttk1o%2FblRiFJfbpa4JROsYGaAeSczI5Bw%2FomlITWuvBoyhLXI197poy90NPR78E4UisCC3CMVjzZIywIIX7fitJvkohMMK%2Fy2GqPuzVqZ7w7pv3uwkp%2BpZHEG4PubQTTM91UtJj64vEs09ML0x3sp9NPNksxafjhlmfZJTh%2FL10vH0yByowqof8p&X-Amz-Signature=dcdcc38737d0ecea1205803ea95e906be9891a16c47caca1864993e1fc3b1724&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6LNC43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN6eXbMRVmSxlJknUZWmHD%2BITwcteoNPY8MzpNEno8QIgKVaeDidgwZnwUrUsG%2BmgD90EKoI0lzucxRxPlViqe5gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHwsHsw53aRbLXmYryrcAwbfFJUxo18R%2BCsHMGTctTmW50HlSVZr%2B96lfieDacBr8XSS9qo4hcTYMobJtPPTlWjpRa8g6t0I6rdsojvXkzZvQ4fRQIxAYIifHyf0i4qi6IkL4DdUft%2FSBV0uXkgBWMX2VKA02WYyIZPkam%2FGQdLVIR3WFOM7QuP3wysFvE%2BPEA2%2F%2F31zxXwdehpEZwTQNW3qd6AG0LeNsGXJXxGSmCbx74HyuGQlDLCFwtfkwM9E8DPSqIyYRcCIgfW78KE0bh6vmsGO9zXcwcp4QqK45vdxfgy08h1GtIjqSNa6f57wN0pjmJ%2Fu%2FlDNf27xQrhicqhDl1pE%2FxU1rEdDcoNX9j%2B99BYiFULPW0PB5aKWH4e63uE%2BX%2F%2BO9bjZVfiIonJWsv%2F%2BduOgjaMknzjJ%2FUQRnI0Z%2F7Vv07eZXFe%2BfIvcdyo5IOjstM%2FeJa6yzsEvQaw1Kuks2YT35OybXqhKnQzLl8knK7DauNNHsgybqz3COixs%2BeaF%2Ftq09HB%2BslwfVpW1fo6yMHIinDpNAFckcUEmYH%2B3r1doQefGVfsF9vnB9rWzzeT8bia%2BqYj10X4JUhh7AVgVCVy2QoExjk0ubKcbYbcYkU%2Fmnl2m%2BV1Y%2F%2FI92dJ%2BcKmP3Pfub%2BlaYKjSMJOS374GOqUBXFxKaqD%2FdPmOD4ODP7j4ibQckntIjtqNJXKrttk1o%2FblRiFJfbpa4JROsYGaAeSczI5Bw%2FomlITWuvBoyhLXI197poy90NPR78E4UisCC3CMVjzZIywIIX7fitJvkohMMK%2Fy2GqPuzVqZ7w7pv3uwkp%2BpZHEG4PubQTTM91UtJj64vEs09ML0x3sp9NPNksxafjhlmfZJTh%2FL10vH0yByowqof8p&X-Amz-Signature=5706f1b48f4dc45d7a288e24b9d09725ff61207cb865a8c1e6213146993c8aac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6LNC43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN6eXbMRVmSxlJknUZWmHD%2BITwcteoNPY8MzpNEno8QIgKVaeDidgwZnwUrUsG%2BmgD90EKoI0lzucxRxPlViqe5gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHwsHsw53aRbLXmYryrcAwbfFJUxo18R%2BCsHMGTctTmW50HlSVZr%2B96lfieDacBr8XSS9qo4hcTYMobJtPPTlWjpRa8g6t0I6rdsojvXkzZvQ4fRQIxAYIifHyf0i4qi6IkL4DdUft%2FSBV0uXkgBWMX2VKA02WYyIZPkam%2FGQdLVIR3WFOM7QuP3wysFvE%2BPEA2%2F%2F31zxXwdehpEZwTQNW3qd6AG0LeNsGXJXxGSmCbx74HyuGQlDLCFwtfkwM9E8DPSqIyYRcCIgfW78KE0bh6vmsGO9zXcwcp4QqK45vdxfgy08h1GtIjqSNa6f57wN0pjmJ%2Fu%2FlDNf27xQrhicqhDl1pE%2FxU1rEdDcoNX9j%2B99BYiFULPW0PB5aKWH4e63uE%2BX%2F%2BO9bjZVfiIonJWsv%2F%2BduOgjaMknzjJ%2FUQRnI0Z%2F7Vv07eZXFe%2BfIvcdyo5IOjstM%2FeJa6yzsEvQaw1Kuks2YT35OybXqhKnQzLl8knK7DauNNHsgybqz3COixs%2BeaF%2Ftq09HB%2BslwfVpW1fo6yMHIinDpNAFckcUEmYH%2B3r1doQefGVfsF9vnB9rWzzeT8bia%2BqYj10X4JUhh7AVgVCVy2QoExjk0ubKcbYbcYkU%2Fmnl2m%2BV1Y%2F%2FI92dJ%2BcKmP3Pfub%2BlaYKjSMJOS374GOqUBXFxKaqD%2FdPmOD4ODP7j4ibQckntIjtqNJXKrttk1o%2FblRiFJfbpa4JROsYGaAeSczI5Bw%2FomlITWuvBoyhLXI197poy90NPR78E4UisCC3CMVjzZIywIIX7fitJvkohMMK%2Fy2GqPuzVqZ7w7pv3uwkp%2BpZHEG4PubQTTM91UtJj64vEs09ML0x3sp9NPNksxafjhlmfZJTh%2FL10vH0yByowqof8p&X-Amz-Signature=3013a08e5ac5d641b01cf441d91f507d15bfe0b63d1e22eb6f7d8b1dea1979c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6LNC43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN6eXbMRVmSxlJknUZWmHD%2BITwcteoNPY8MzpNEno8QIgKVaeDidgwZnwUrUsG%2BmgD90EKoI0lzucxRxPlViqe5gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHwsHsw53aRbLXmYryrcAwbfFJUxo18R%2BCsHMGTctTmW50HlSVZr%2B96lfieDacBr8XSS9qo4hcTYMobJtPPTlWjpRa8g6t0I6rdsojvXkzZvQ4fRQIxAYIifHyf0i4qi6IkL4DdUft%2FSBV0uXkgBWMX2VKA02WYyIZPkam%2FGQdLVIR3WFOM7QuP3wysFvE%2BPEA2%2F%2F31zxXwdehpEZwTQNW3qd6AG0LeNsGXJXxGSmCbx74HyuGQlDLCFwtfkwM9E8DPSqIyYRcCIgfW78KE0bh6vmsGO9zXcwcp4QqK45vdxfgy08h1GtIjqSNa6f57wN0pjmJ%2Fu%2FlDNf27xQrhicqhDl1pE%2FxU1rEdDcoNX9j%2B99BYiFULPW0PB5aKWH4e63uE%2BX%2F%2BO9bjZVfiIonJWsv%2F%2BduOgjaMknzjJ%2FUQRnI0Z%2F7Vv07eZXFe%2BfIvcdyo5IOjstM%2FeJa6yzsEvQaw1Kuks2YT35OybXqhKnQzLl8knK7DauNNHsgybqz3COixs%2BeaF%2Ftq09HB%2BslwfVpW1fo6yMHIinDpNAFckcUEmYH%2B3r1doQefGVfsF9vnB9rWzzeT8bia%2BqYj10X4JUhh7AVgVCVy2QoExjk0ubKcbYbcYkU%2Fmnl2m%2BV1Y%2F%2FI92dJ%2BcKmP3Pfub%2BlaYKjSMJOS374GOqUBXFxKaqD%2FdPmOD4ODP7j4ibQckntIjtqNJXKrttk1o%2FblRiFJfbpa4JROsYGaAeSczI5Bw%2FomlITWuvBoyhLXI197poy90NPR78E4UisCC3CMVjzZIywIIX7fitJvkohMMK%2Fy2GqPuzVqZ7w7pv3uwkp%2BpZHEG4PubQTTM91UtJj64vEs09ML0x3sp9NPNksxafjhlmfZJTh%2FL10vH0yByowqof8p&X-Amz-Signature=a37439caf841a4dbf7fba78059a939b89f8ba302f3395a9e1764c97579d621de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6LNC43%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMN6eXbMRVmSxlJknUZWmHD%2BITwcteoNPY8MzpNEno8QIgKVaeDidgwZnwUrUsG%2BmgD90EKoI0lzucxRxPlViqe5gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHwsHsw53aRbLXmYryrcAwbfFJUxo18R%2BCsHMGTctTmW50HlSVZr%2B96lfieDacBr8XSS9qo4hcTYMobJtPPTlWjpRa8g6t0I6rdsojvXkzZvQ4fRQIxAYIifHyf0i4qi6IkL4DdUft%2FSBV0uXkgBWMX2VKA02WYyIZPkam%2FGQdLVIR3WFOM7QuP3wysFvE%2BPEA2%2F%2F31zxXwdehpEZwTQNW3qd6AG0LeNsGXJXxGSmCbx74HyuGQlDLCFwtfkwM9E8DPSqIyYRcCIgfW78KE0bh6vmsGO9zXcwcp4QqK45vdxfgy08h1GtIjqSNa6f57wN0pjmJ%2Fu%2FlDNf27xQrhicqhDl1pE%2FxU1rEdDcoNX9j%2B99BYiFULPW0PB5aKWH4e63uE%2BX%2F%2BO9bjZVfiIonJWsv%2F%2BduOgjaMknzjJ%2FUQRnI0Z%2F7Vv07eZXFe%2BfIvcdyo5IOjstM%2FeJa6yzsEvQaw1Kuks2YT35OybXqhKnQzLl8knK7DauNNHsgybqz3COixs%2BeaF%2Ftq09HB%2BslwfVpW1fo6yMHIinDpNAFckcUEmYH%2B3r1doQefGVfsF9vnB9rWzzeT8bia%2BqYj10X4JUhh7AVgVCVy2QoExjk0ubKcbYbcYkU%2Fmnl2m%2BV1Y%2F%2FI92dJ%2BcKmP3Pfub%2BlaYKjSMJOS374GOqUBXFxKaqD%2FdPmOD4ODP7j4ibQckntIjtqNJXKrttk1o%2FblRiFJfbpa4JROsYGaAeSczI5Bw%2FomlITWuvBoyhLXI197poy90NPR78E4UisCC3CMVjzZIywIIX7fitJvkohMMK%2Fy2GqPuzVqZ7w7pv3uwkp%2BpZHEG4PubQTTM91UtJj64vEs09ML0x3sp9NPNksxafjhlmfZJTh%2FL10vH0yByowqof8p&X-Amz-Signature=02b7836c587c16d91922645e5de77594675c87e6f1d3102decebfce4c1a9e353&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
