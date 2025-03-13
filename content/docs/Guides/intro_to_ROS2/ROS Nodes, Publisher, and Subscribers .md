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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAAKWIP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrKAjKMujYWTdEVZBvvXUgaTRbKJs8AxnaujjUwRiuegIgSBrZy1QeFQ6MZXdgjam%2F7INxRN6h7JGa19IMkunkuToqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAX%2F7rP5c4rv1I1RyrcA5G4AN%2B6KLFRCwHY5wBvIysHRboB3lCAZUyT%2BRz%2BmZSvL7q3vaecMrUCW%2F0AZlcuHOehI4XF2IODPSAx5nnr7O%2F4KCe3wbv%2Bizi49xEDkfojHeNLhy2XBKZ9JMOgH%2FO6kl7MZS1MVtOfd%2Fa%2BWDnPDu%2FD3oL5aMQi%2FhkS4%2B4NGOC9JL5pC4bjp%2B6HWX7D%2BASXqQbZN%2FUNcbI1%2Fgl7fFNEmfXTbj%2BLf3jSJcFzgGACV%2Fne1YlBuj9kVTgeMxqCFU3991KJ939aWpqImr2nIEF%2FnT00CdonLiBO9ogOT2z%2F%2BMEFc4nPSunbaw6K7SRaKgeADM5heC6AU%2BnH%2B4%2F2l9hCFmCgsUAjgkLjm6UwrGfm2MUowJWuYqIOxJzy4ooxFNcjfQlFlKG13aztOVOb4x3pfa6qjMVQ80%2BdsEkmnC8FW4BUbPldykgeY7lDKV68Ftvb9bjgPSS4wmEzEjoIRmFnMCdIdRkoEaC36JBliPUn%2FVOgAI5M413b5DhBfwZ6lQhnuXlV0gTDhZQOdnC9uNeae90BP8dzvVQ1atuyKCJTstwdtLyelZ24ybGImR76tRIGRw3hnSqeitQP2G1siYHNHoSJV4mK8YDStlfCiWHz8tqSh9DInFteE42sUkekMKaXzL4GOqUBfe7H6lhnbjzaOsq8NmN9BF04bQoxCrds5W6yB5Ydn7kGUp5GOzlBFGi%2FzlxQQDu5ZdN2QTKy1AJL8LtkGWa8z22xBwWIB2oMZThUrqk6aemzMHihO7sr%2BfVWuKJkx6X7PBuaTtX7Z6u135rTjvMe7uRD%2FxymhcKANRLUdMXfuz40f2CCOW8M1SXq0a7d9V%2BSaVBs20T5zmFxMTbiXgGa%2BPeEgk5Y&X-Amz-Signature=9880285b5cd9adfbc5ca87c52cc1112e7392c74343a330b8fe6381ec64f1dfa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAAKWIP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrKAjKMujYWTdEVZBvvXUgaTRbKJs8AxnaujjUwRiuegIgSBrZy1QeFQ6MZXdgjam%2F7INxRN6h7JGa19IMkunkuToqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAX%2F7rP5c4rv1I1RyrcA5G4AN%2B6KLFRCwHY5wBvIysHRboB3lCAZUyT%2BRz%2BmZSvL7q3vaecMrUCW%2F0AZlcuHOehI4XF2IODPSAx5nnr7O%2F4KCe3wbv%2Bizi49xEDkfojHeNLhy2XBKZ9JMOgH%2FO6kl7MZS1MVtOfd%2Fa%2BWDnPDu%2FD3oL5aMQi%2FhkS4%2B4NGOC9JL5pC4bjp%2B6HWX7D%2BASXqQbZN%2FUNcbI1%2Fgl7fFNEmfXTbj%2BLf3jSJcFzgGACV%2Fne1YlBuj9kVTgeMxqCFU3991KJ939aWpqImr2nIEF%2FnT00CdonLiBO9ogOT2z%2F%2BMEFc4nPSunbaw6K7SRaKgeADM5heC6AU%2BnH%2B4%2F2l9hCFmCgsUAjgkLjm6UwrGfm2MUowJWuYqIOxJzy4ooxFNcjfQlFlKG13aztOVOb4x3pfa6qjMVQ80%2BdsEkmnC8FW4BUbPldykgeY7lDKV68Ftvb9bjgPSS4wmEzEjoIRmFnMCdIdRkoEaC36JBliPUn%2FVOgAI5M413b5DhBfwZ6lQhnuXlV0gTDhZQOdnC9uNeae90BP8dzvVQ1atuyKCJTstwdtLyelZ24ybGImR76tRIGRw3hnSqeitQP2G1siYHNHoSJV4mK8YDStlfCiWHz8tqSh9DInFteE42sUkekMKaXzL4GOqUBfe7H6lhnbjzaOsq8NmN9BF04bQoxCrds5W6yB5Ydn7kGUp5GOzlBFGi%2FzlxQQDu5ZdN2QTKy1AJL8LtkGWa8z22xBwWIB2oMZThUrqk6aemzMHihO7sr%2BfVWuKJkx6X7PBuaTtX7Z6u135rTjvMe7uRD%2FxymhcKANRLUdMXfuz40f2CCOW8M1SXq0a7d9V%2BSaVBs20T5zmFxMTbiXgGa%2BPeEgk5Y&X-Amz-Signature=9ff2975e5d5a233e77d470b00c0fc74177da1a01fe48dccf94c98dcdeb9d1038&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAAKWIP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrKAjKMujYWTdEVZBvvXUgaTRbKJs8AxnaujjUwRiuegIgSBrZy1QeFQ6MZXdgjam%2F7INxRN6h7JGa19IMkunkuToqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAX%2F7rP5c4rv1I1RyrcA5G4AN%2B6KLFRCwHY5wBvIysHRboB3lCAZUyT%2BRz%2BmZSvL7q3vaecMrUCW%2F0AZlcuHOehI4XF2IODPSAx5nnr7O%2F4KCe3wbv%2Bizi49xEDkfojHeNLhy2XBKZ9JMOgH%2FO6kl7MZS1MVtOfd%2Fa%2BWDnPDu%2FD3oL5aMQi%2FhkS4%2B4NGOC9JL5pC4bjp%2B6HWX7D%2BASXqQbZN%2FUNcbI1%2Fgl7fFNEmfXTbj%2BLf3jSJcFzgGACV%2Fne1YlBuj9kVTgeMxqCFU3991KJ939aWpqImr2nIEF%2FnT00CdonLiBO9ogOT2z%2F%2BMEFc4nPSunbaw6K7SRaKgeADM5heC6AU%2BnH%2B4%2F2l9hCFmCgsUAjgkLjm6UwrGfm2MUowJWuYqIOxJzy4ooxFNcjfQlFlKG13aztOVOb4x3pfa6qjMVQ80%2BdsEkmnC8FW4BUbPldykgeY7lDKV68Ftvb9bjgPSS4wmEzEjoIRmFnMCdIdRkoEaC36JBliPUn%2FVOgAI5M413b5DhBfwZ6lQhnuXlV0gTDhZQOdnC9uNeae90BP8dzvVQ1atuyKCJTstwdtLyelZ24ybGImR76tRIGRw3hnSqeitQP2G1siYHNHoSJV4mK8YDStlfCiWHz8tqSh9DInFteE42sUkekMKaXzL4GOqUBfe7H6lhnbjzaOsq8NmN9BF04bQoxCrds5W6yB5Ydn7kGUp5GOzlBFGi%2FzlxQQDu5ZdN2QTKy1AJL8LtkGWa8z22xBwWIB2oMZThUrqk6aemzMHihO7sr%2BfVWuKJkx6X7PBuaTtX7Z6u135rTjvMe7uRD%2FxymhcKANRLUdMXfuz40f2CCOW8M1SXq0a7d9V%2BSaVBs20T5zmFxMTbiXgGa%2BPeEgk5Y&X-Amz-Signature=1377472fbe0cfa9d1819efe8b1cfd639736be4b5faa718b868af59f80f7a70f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAAKWIP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrKAjKMujYWTdEVZBvvXUgaTRbKJs8AxnaujjUwRiuegIgSBrZy1QeFQ6MZXdgjam%2F7INxRN6h7JGa19IMkunkuToqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAX%2F7rP5c4rv1I1RyrcA5G4AN%2B6KLFRCwHY5wBvIysHRboB3lCAZUyT%2BRz%2BmZSvL7q3vaecMrUCW%2F0AZlcuHOehI4XF2IODPSAx5nnr7O%2F4KCe3wbv%2Bizi49xEDkfojHeNLhy2XBKZ9JMOgH%2FO6kl7MZS1MVtOfd%2Fa%2BWDnPDu%2FD3oL5aMQi%2FhkS4%2B4NGOC9JL5pC4bjp%2B6HWX7D%2BASXqQbZN%2FUNcbI1%2Fgl7fFNEmfXTbj%2BLf3jSJcFzgGACV%2Fne1YlBuj9kVTgeMxqCFU3991KJ939aWpqImr2nIEF%2FnT00CdonLiBO9ogOT2z%2F%2BMEFc4nPSunbaw6K7SRaKgeADM5heC6AU%2BnH%2B4%2F2l9hCFmCgsUAjgkLjm6UwrGfm2MUowJWuYqIOxJzy4ooxFNcjfQlFlKG13aztOVOb4x3pfa6qjMVQ80%2BdsEkmnC8FW4BUbPldykgeY7lDKV68Ftvb9bjgPSS4wmEzEjoIRmFnMCdIdRkoEaC36JBliPUn%2FVOgAI5M413b5DhBfwZ6lQhnuXlV0gTDhZQOdnC9uNeae90BP8dzvVQ1atuyKCJTstwdtLyelZ24ybGImR76tRIGRw3hnSqeitQP2G1siYHNHoSJV4mK8YDStlfCiWHz8tqSh9DInFteE42sUkekMKaXzL4GOqUBfe7H6lhnbjzaOsq8NmN9BF04bQoxCrds5W6yB5Ydn7kGUp5GOzlBFGi%2FzlxQQDu5ZdN2QTKy1AJL8LtkGWa8z22xBwWIB2oMZThUrqk6aemzMHihO7sr%2BfVWuKJkx6X7PBuaTtX7Z6u135rTjvMe7uRD%2FxymhcKANRLUdMXfuz40f2CCOW8M1SXq0a7d9V%2BSaVBs20T5zmFxMTbiXgGa%2BPeEgk5Y&X-Amz-Signature=13b88883824343d92e5e3e35587e56102fa45bd665803c3e997913843a067ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAAKWIP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrKAjKMujYWTdEVZBvvXUgaTRbKJs8AxnaujjUwRiuegIgSBrZy1QeFQ6MZXdgjam%2F7INxRN6h7JGa19IMkunkuToqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAX%2F7rP5c4rv1I1RyrcA5G4AN%2B6KLFRCwHY5wBvIysHRboB3lCAZUyT%2BRz%2BmZSvL7q3vaecMrUCW%2F0AZlcuHOehI4XF2IODPSAx5nnr7O%2F4KCe3wbv%2Bizi49xEDkfojHeNLhy2XBKZ9JMOgH%2FO6kl7MZS1MVtOfd%2Fa%2BWDnPDu%2FD3oL5aMQi%2FhkS4%2B4NGOC9JL5pC4bjp%2B6HWX7D%2BASXqQbZN%2FUNcbI1%2Fgl7fFNEmfXTbj%2BLf3jSJcFzgGACV%2Fne1YlBuj9kVTgeMxqCFU3991KJ939aWpqImr2nIEF%2FnT00CdonLiBO9ogOT2z%2F%2BMEFc4nPSunbaw6K7SRaKgeADM5heC6AU%2BnH%2B4%2F2l9hCFmCgsUAjgkLjm6UwrGfm2MUowJWuYqIOxJzy4ooxFNcjfQlFlKG13aztOVOb4x3pfa6qjMVQ80%2BdsEkmnC8FW4BUbPldykgeY7lDKV68Ftvb9bjgPSS4wmEzEjoIRmFnMCdIdRkoEaC36JBliPUn%2FVOgAI5M413b5DhBfwZ6lQhnuXlV0gTDhZQOdnC9uNeae90BP8dzvVQ1atuyKCJTstwdtLyelZ24ybGImR76tRIGRw3hnSqeitQP2G1siYHNHoSJV4mK8YDStlfCiWHz8tqSh9DInFteE42sUkekMKaXzL4GOqUBfe7H6lhnbjzaOsq8NmN9BF04bQoxCrds5W6yB5Ydn7kGUp5GOzlBFGi%2FzlxQQDu5ZdN2QTKy1AJL8LtkGWa8z22xBwWIB2oMZThUrqk6aemzMHihO7sr%2BfVWuKJkx6X7PBuaTtX7Z6u135rTjvMe7uRD%2FxymhcKANRLUdMXfuz40f2CCOW8M1SXq0a7d9V%2BSaVBs20T5zmFxMTbiXgGa%2BPeEgk5Y&X-Amz-Signature=fef9de3693c4835c1d61888730a620ae30dc76186464706c8be9df17bd65a3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAAKWIP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrKAjKMujYWTdEVZBvvXUgaTRbKJs8AxnaujjUwRiuegIgSBrZy1QeFQ6MZXdgjam%2F7INxRN6h7JGa19IMkunkuToqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAX%2F7rP5c4rv1I1RyrcA5G4AN%2B6KLFRCwHY5wBvIysHRboB3lCAZUyT%2BRz%2BmZSvL7q3vaecMrUCW%2F0AZlcuHOehI4XF2IODPSAx5nnr7O%2F4KCe3wbv%2Bizi49xEDkfojHeNLhy2XBKZ9JMOgH%2FO6kl7MZS1MVtOfd%2Fa%2BWDnPDu%2FD3oL5aMQi%2FhkS4%2B4NGOC9JL5pC4bjp%2B6HWX7D%2BASXqQbZN%2FUNcbI1%2Fgl7fFNEmfXTbj%2BLf3jSJcFzgGACV%2Fne1YlBuj9kVTgeMxqCFU3991KJ939aWpqImr2nIEF%2FnT00CdonLiBO9ogOT2z%2F%2BMEFc4nPSunbaw6K7SRaKgeADM5heC6AU%2BnH%2B4%2F2l9hCFmCgsUAjgkLjm6UwrGfm2MUowJWuYqIOxJzy4ooxFNcjfQlFlKG13aztOVOb4x3pfa6qjMVQ80%2BdsEkmnC8FW4BUbPldykgeY7lDKV68Ftvb9bjgPSS4wmEzEjoIRmFnMCdIdRkoEaC36JBliPUn%2FVOgAI5M413b5DhBfwZ6lQhnuXlV0gTDhZQOdnC9uNeae90BP8dzvVQ1atuyKCJTstwdtLyelZ24ybGImR76tRIGRw3hnSqeitQP2G1siYHNHoSJV4mK8YDStlfCiWHz8tqSh9DInFteE42sUkekMKaXzL4GOqUBfe7H6lhnbjzaOsq8NmN9BF04bQoxCrds5W6yB5Ydn7kGUp5GOzlBFGi%2FzlxQQDu5ZdN2QTKy1AJL8LtkGWa8z22xBwWIB2oMZThUrqk6aemzMHihO7sr%2BfVWuKJkx6X7PBuaTtX7Z6u135rTjvMe7uRD%2FxymhcKANRLUdMXfuz40f2CCOW8M1SXq0a7d9V%2BSaVBs20T5zmFxMTbiXgGa%2BPeEgk5Y&X-Amz-Signature=e67a77646f558972eef3ec31d5ef535a218c6e0f07078393c0477fe89048dbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAAKWIP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrKAjKMujYWTdEVZBvvXUgaTRbKJs8AxnaujjUwRiuegIgSBrZy1QeFQ6MZXdgjam%2F7INxRN6h7JGa19IMkunkuToqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAX%2F7rP5c4rv1I1RyrcA5G4AN%2B6KLFRCwHY5wBvIysHRboB3lCAZUyT%2BRz%2BmZSvL7q3vaecMrUCW%2F0AZlcuHOehI4XF2IODPSAx5nnr7O%2F4KCe3wbv%2Bizi49xEDkfojHeNLhy2XBKZ9JMOgH%2FO6kl7MZS1MVtOfd%2Fa%2BWDnPDu%2FD3oL5aMQi%2FhkS4%2B4NGOC9JL5pC4bjp%2B6HWX7D%2BASXqQbZN%2FUNcbI1%2Fgl7fFNEmfXTbj%2BLf3jSJcFzgGACV%2Fne1YlBuj9kVTgeMxqCFU3991KJ939aWpqImr2nIEF%2FnT00CdonLiBO9ogOT2z%2F%2BMEFc4nPSunbaw6K7SRaKgeADM5heC6AU%2BnH%2B4%2F2l9hCFmCgsUAjgkLjm6UwrGfm2MUowJWuYqIOxJzy4ooxFNcjfQlFlKG13aztOVOb4x3pfa6qjMVQ80%2BdsEkmnC8FW4BUbPldykgeY7lDKV68Ftvb9bjgPSS4wmEzEjoIRmFnMCdIdRkoEaC36JBliPUn%2FVOgAI5M413b5DhBfwZ6lQhnuXlV0gTDhZQOdnC9uNeae90BP8dzvVQ1atuyKCJTstwdtLyelZ24ybGImR76tRIGRw3hnSqeitQP2G1siYHNHoSJV4mK8YDStlfCiWHz8tqSh9DInFteE42sUkekMKaXzL4GOqUBfe7H6lhnbjzaOsq8NmN9BF04bQoxCrds5W6yB5Ydn7kGUp5GOzlBFGi%2FzlxQQDu5ZdN2QTKy1AJL8LtkGWa8z22xBwWIB2oMZThUrqk6aemzMHihO7sr%2BfVWuKJkx6X7PBuaTtX7Z6u135rTjvMe7uRD%2FxymhcKANRLUdMXfuz40f2CCOW8M1SXq0a7d9V%2BSaVBs20T5zmFxMTbiXgGa%2BPeEgk5Y&X-Amz-Signature=5da11459674b26c343fb78ab4f3c6b8f4f6fa9108bf55dbe28ef1dc960dca269&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAAKWIP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrKAjKMujYWTdEVZBvvXUgaTRbKJs8AxnaujjUwRiuegIgSBrZy1QeFQ6MZXdgjam%2F7INxRN6h7JGa19IMkunkuToqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAX%2F7rP5c4rv1I1RyrcA5G4AN%2B6KLFRCwHY5wBvIysHRboB3lCAZUyT%2BRz%2BmZSvL7q3vaecMrUCW%2F0AZlcuHOehI4XF2IODPSAx5nnr7O%2F4KCe3wbv%2Bizi49xEDkfojHeNLhy2XBKZ9JMOgH%2FO6kl7MZS1MVtOfd%2Fa%2BWDnPDu%2FD3oL5aMQi%2FhkS4%2B4NGOC9JL5pC4bjp%2B6HWX7D%2BASXqQbZN%2FUNcbI1%2Fgl7fFNEmfXTbj%2BLf3jSJcFzgGACV%2Fne1YlBuj9kVTgeMxqCFU3991KJ939aWpqImr2nIEF%2FnT00CdonLiBO9ogOT2z%2F%2BMEFc4nPSunbaw6K7SRaKgeADM5heC6AU%2BnH%2B4%2F2l9hCFmCgsUAjgkLjm6UwrGfm2MUowJWuYqIOxJzy4ooxFNcjfQlFlKG13aztOVOb4x3pfa6qjMVQ80%2BdsEkmnC8FW4BUbPldykgeY7lDKV68Ftvb9bjgPSS4wmEzEjoIRmFnMCdIdRkoEaC36JBliPUn%2FVOgAI5M413b5DhBfwZ6lQhnuXlV0gTDhZQOdnC9uNeae90BP8dzvVQ1atuyKCJTstwdtLyelZ24ybGImR76tRIGRw3hnSqeitQP2G1siYHNHoSJV4mK8YDStlfCiWHz8tqSh9DInFteE42sUkekMKaXzL4GOqUBfe7H6lhnbjzaOsq8NmN9BF04bQoxCrds5W6yB5Ydn7kGUp5GOzlBFGi%2FzlxQQDu5ZdN2QTKy1AJL8LtkGWa8z22xBwWIB2oMZThUrqk6aemzMHihO7sr%2BfVWuKJkx6X7PBuaTtX7Z6u135rTjvMe7uRD%2FxymhcKANRLUdMXfuz40f2CCOW8M1SXq0a7d9V%2BSaVBs20T5zmFxMTbiXgGa%2BPeEgk5Y&X-Amz-Signature=5e03ccf0796d464f6e6201b68b7c6ccdb7bb3466b6190fa61487511f87b2fea5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
