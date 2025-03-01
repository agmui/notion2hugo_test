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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIJMTX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDjvW6cwa%2FOWJhoex1jabwe4f4DOLu8QcMet5KyNhnfWAIgEY6HF6QM3z6tpt%2B8pIHiRC2laorR4d0alMwEfh7Bl1wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4LKFXAquVIwExkmyrcA1L3p21SKHZZldpPzMHYARYai8ZBI3loJPfhXDg8vYkkuKIX8LPFtShQHw5TTn2sYg5Rj%2FB1HwGxGmxtTtnb89saxthEfBUmW0lt47A%2BYmgTAJqjuLOanhFmbPeusZZVQ50aq55Vh7i4ez34CZwikup2JExjPSrRSVcewa9eiiX%2FhQKb3yb9tI2jcOtRzMgZ3fc7HsmJUQ6nrJuiq7MmnWRuz64FXR2hq2w7QBtvNotoJJpipu%2FCH1HDheQoOiC75rODCbzxqJldhf7eu3u8nCMaoXR8ImI0KbHZRTduRzF4uUGpGmRPqHJzWUDNhM37h0YMDyw5CRMk0IYGEhvNPqdXzGAbFNoGGUksohEQMIHfoBnaaxuuzMkKoZqLh%2ByAzSAi4DRH7yjGGrwF2AZCRxgrDKOePltpiV4TsOVjiOomu3Ru0OeZx1QbjdZb0L45Zk6F5UqMDvlLiO3%2FlVquxG5zUvj95Zz6%2BcmoVS%2B9oF7Y4jWbotBlqP08mym84Qzj6GPHOjWoWtE1jeGvu%2BkYPNTxy4K3TqbGOC4qaANY4j09YuJtrzvqxQnDr8tKWWmpbg4%2F2npNKZdHZZauyN0qz9zk6%2FeDU0%2Bp27Y35bkZXAvvOre2sss%2FMOfTSS3UMJbHjb4GOqUB%2BqIFCrMEYOhYGtOIca%2BVl3KRibRljC%2BNvy6Mq2pO9Em1KDfVUx4izI2TDsFSA6J71Nc55oo0rMpUdfdYbUrCtiOEmLjwUKZDvwl0wQWNmySjNZfEu89nDxebuFgxO%2Fofhr3Eib0s5CNL55vkfn1f5J9yLnXwxrME9Ry6BGhxumZAFmfDHMAX4kDNczn%2BoCsfGsGWstR4MfG5rJ2M%2FUiPhA3EdyNM&X-Amz-Signature=125182dfab277f7cbdacbf6dad95bcb2491853c5d0f37ac928cf8f5f5e8554af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIJMTX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDjvW6cwa%2FOWJhoex1jabwe4f4DOLu8QcMet5KyNhnfWAIgEY6HF6QM3z6tpt%2B8pIHiRC2laorR4d0alMwEfh7Bl1wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4LKFXAquVIwExkmyrcA1L3p21SKHZZldpPzMHYARYai8ZBI3loJPfhXDg8vYkkuKIX8LPFtShQHw5TTn2sYg5Rj%2FB1HwGxGmxtTtnb89saxthEfBUmW0lt47A%2BYmgTAJqjuLOanhFmbPeusZZVQ50aq55Vh7i4ez34CZwikup2JExjPSrRSVcewa9eiiX%2FhQKb3yb9tI2jcOtRzMgZ3fc7HsmJUQ6nrJuiq7MmnWRuz64FXR2hq2w7QBtvNotoJJpipu%2FCH1HDheQoOiC75rODCbzxqJldhf7eu3u8nCMaoXR8ImI0KbHZRTduRzF4uUGpGmRPqHJzWUDNhM37h0YMDyw5CRMk0IYGEhvNPqdXzGAbFNoGGUksohEQMIHfoBnaaxuuzMkKoZqLh%2ByAzSAi4DRH7yjGGrwF2AZCRxgrDKOePltpiV4TsOVjiOomu3Ru0OeZx1QbjdZb0L45Zk6F5UqMDvlLiO3%2FlVquxG5zUvj95Zz6%2BcmoVS%2B9oF7Y4jWbotBlqP08mym84Qzj6GPHOjWoWtE1jeGvu%2BkYPNTxy4K3TqbGOC4qaANY4j09YuJtrzvqxQnDr8tKWWmpbg4%2F2npNKZdHZZauyN0qz9zk6%2FeDU0%2Bp27Y35bkZXAvvOre2sss%2FMOfTSS3UMJbHjb4GOqUB%2BqIFCrMEYOhYGtOIca%2BVl3KRibRljC%2BNvy6Mq2pO9Em1KDfVUx4izI2TDsFSA6J71Nc55oo0rMpUdfdYbUrCtiOEmLjwUKZDvwl0wQWNmySjNZfEu89nDxebuFgxO%2Fofhr3Eib0s5CNL55vkfn1f5J9yLnXwxrME9Ry6BGhxumZAFmfDHMAX4kDNczn%2BoCsfGsGWstR4MfG5rJ2M%2FUiPhA3EdyNM&X-Amz-Signature=6a9df824b67b58b16e4408440369fb1c29376f610318b7f1f36bcf29ea62e6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIJMTX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDjvW6cwa%2FOWJhoex1jabwe4f4DOLu8QcMet5KyNhnfWAIgEY6HF6QM3z6tpt%2B8pIHiRC2laorR4d0alMwEfh7Bl1wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4LKFXAquVIwExkmyrcA1L3p21SKHZZldpPzMHYARYai8ZBI3loJPfhXDg8vYkkuKIX8LPFtShQHw5TTn2sYg5Rj%2FB1HwGxGmxtTtnb89saxthEfBUmW0lt47A%2BYmgTAJqjuLOanhFmbPeusZZVQ50aq55Vh7i4ez34CZwikup2JExjPSrRSVcewa9eiiX%2FhQKb3yb9tI2jcOtRzMgZ3fc7HsmJUQ6nrJuiq7MmnWRuz64FXR2hq2w7QBtvNotoJJpipu%2FCH1HDheQoOiC75rODCbzxqJldhf7eu3u8nCMaoXR8ImI0KbHZRTduRzF4uUGpGmRPqHJzWUDNhM37h0YMDyw5CRMk0IYGEhvNPqdXzGAbFNoGGUksohEQMIHfoBnaaxuuzMkKoZqLh%2ByAzSAi4DRH7yjGGrwF2AZCRxgrDKOePltpiV4TsOVjiOomu3Ru0OeZx1QbjdZb0L45Zk6F5UqMDvlLiO3%2FlVquxG5zUvj95Zz6%2BcmoVS%2B9oF7Y4jWbotBlqP08mym84Qzj6GPHOjWoWtE1jeGvu%2BkYPNTxy4K3TqbGOC4qaANY4j09YuJtrzvqxQnDr8tKWWmpbg4%2F2npNKZdHZZauyN0qz9zk6%2FeDU0%2Bp27Y35bkZXAvvOre2sss%2FMOfTSS3UMJbHjb4GOqUB%2BqIFCrMEYOhYGtOIca%2BVl3KRibRljC%2BNvy6Mq2pO9Em1KDfVUx4izI2TDsFSA6J71Nc55oo0rMpUdfdYbUrCtiOEmLjwUKZDvwl0wQWNmySjNZfEu89nDxebuFgxO%2Fofhr3Eib0s5CNL55vkfn1f5J9yLnXwxrME9Ry6BGhxumZAFmfDHMAX4kDNczn%2BoCsfGsGWstR4MfG5rJ2M%2FUiPhA3EdyNM&X-Amz-Signature=896ff33df63aba5c21ff4981c573feff7b52169300c38d808fe4ef7d07c5f3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIJMTX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDjvW6cwa%2FOWJhoex1jabwe4f4DOLu8QcMet5KyNhnfWAIgEY6HF6QM3z6tpt%2B8pIHiRC2laorR4d0alMwEfh7Bl1wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4LKFXAquVIwExkmyrcA1L3p21SKHZZldpPzMHYARYai8ZBI3loJPfhXDg8vYkkuKIX8LPFtShQHw5TTn2sYg5Rj%2FB1HwGxGmxtTtnb89saxthEfBUmW0lt47A%2BYmgTAJqjuLOanhFmbPeusZZVQ50aq55Vh7i4ez34CZwikup2JExjPSrRSVcewa9eiiX%2FhQKb3yb9tI2jcOtRzMgZ3fc7HsmJUQ6nrJuiq7MmnWRuz64FXR2hq2w7QBtvNotoJJpipu%2FCH1HDheQoOiC75rODCbzxqJldhf7eu3u8nCMaoXR8ImI0KbHZRTduRzF4uUGpGmRPqHJzWUDNhM37h0YMDyw5CRMk0IYGEhvNPqdXzGAbFNoGGUksohEQMIHfoBnaaxuuzMkKoZqLh%2ByAzSAi4DRH7yjGGrwF2AZCRxgrDKOePltpiV4TsOVjiOomu3Ru0OeZx1QbjdZb0L45Zk6F5UqMDvlLiO3%2FlVquxG5zUvj95Zz6%2BcmoVS%2B9oF7Y4jWbotBlqP08mym84Qzj6GPHOjWoWtE1jeGvu%2BkYPNTxy4K3TqbGOC4qaANY4j09YuJtrzvqxQnDr8tKWWmpbg4%2F2npNKZdHZZauyN0qz9zk6%2FeDU0%2Bp27Y35bkZXAvvOre2sss%2FMOfTSS3UMJbHjb4GOqUB%2BqIFCrMEYOhYGtOIca%2BVl3KRibRljC%2BNvy6Mq2pO9Em1KDfVUx4izI2TDsFSA6J71Nc55oo0rMpUdfdYbUrCtiOEmLjwUKZDvwl0wQWNmySjNZfEu89nDxebuFgxO%2Fofhr3Eib0s5CNL55vkfn1f5J9yLnXwxrME9Ry6BGhxumZAFmfDHMAX4kDNczn%2BoCsfGsGWstR4MfG5rJ2M%2FUiPhA3EdyNM&X-Amz-Signature=d91cf7817baa1135b9a068015aaa6eb36050b4ff30856b1d152afaa8c1865c53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIJMTX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDjvW6cwa%2FOWJhoex1jabwe4f4DOLu8QcMet5KyNhnfWAIgEY6HF6QM3z6tpt%2B8pIHiRC2laorR4d0alMwEfh7Bl1wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4LKFXAquVIwExkmyrcA1L3p21SKHZZldpPzMHYARYai8ZBI3loJPfhXDg8vYkkuKIX8LPFtShQHw5TTn2sYg5Rj%2FB1HwGxGmxtTtnb89saxthEfBUmW0lt47A%2BYmgTAJqjuLOanhFmbPeusZZVQ50aq55Vh7i4ez34CZwikup2JExjPSrRSVcewa9eiiX%2FhQKb3yb9tI2jcOtRzMgZ3fc7HsmJUQ6nrJuiq7MmnWRuz64FXR2hq2w7QBtvNotoJJpipu%2FCH1HDheQoOiC75rODCbzxqJldhf7eu3u8nCMaoXR8ImI0KbHZRTduRzF4uUGpGmRPqHJzWUDNhM37h0YMDyw5CRMk0IYGEhvNPqdXzGAbFNoGGUksohEQMIHfoBnaaxuuzMkKoZqLh%2ByAzSAi4DRH7yjGGrwF2AZCRxgrDKOePltpiV4TsOVjiOomu3Ru0OeZx1QbjdZb0L45Zk6F5UqMDvlLiO3%2FlVquxG5zUvj95Zz6%2BcmoVS%2B9oF7Y4jWbotBlqP08mym84Qzj6GPHOjWoWtE1jeGvu%2BkYPNTxy4K3TqbGOC4qaANY4j09YuJtrzvqxQnDr8tKWWmpbg4%2F2npNKZdHZZauyN0qz9zk6%2FeDU0%2Bp27Y35bkZXAvvOre2sss%2FMOfTSS3UMJbHjb4GOqUB%2BqIFCrMEYOhYGtOIca%2BVl3KRibRljC%2BNvy6Mq2pO9Em1KDfVUx4izI2TDsFSA6J71Nc55oo0rMpUdfdYbUrCtiOEmLjwUKZDvwl0wQWNmySjNZfEu89nDxebuFgxO%2Fofhr3Eib0s5CNL55vkfn1f5J9yLnXwxrME9Ry6BGhxumZAFmfDHMAX4kDNczn%2BoCsfGsGWstR4MfG5rJ2M%2FUiPhA3EdyNM&X-Amz-Signature=ba6c430bd22e0870c0f583413c8862ae961dfe9741ff72bba00e399f82f6b761&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIJMTX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDjvW6cwa%2FOWJhoex1jabwe4f4DOLu8QcMet5KyNhnfWAIgEY6HF6QM3z6tpt%2B8pIHiRC2laorR4d0alMwEfh7Bl1wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4LKFXAquVIwExkmyrcA1L3p21SKHZZldpPzMHYARYai8ZBI3loJPfhXDg8vYkkuKIX8LPFtShQHw5TTn2sYg5Rj%2FB1HwGxGmxtTtnb89saxthEfBUmW0lt47A%2BYmgTAJqjuLOanhFmbPeusZZVQ50aq55Vh7i4ez34CZwikup2JExjPSrRSVcewa9eiiX%2FhQKb3yb9tI2jcOtRzMgZ3fc7HsmJUQ6nrJuiq7MmnWRuz64FXR2hq2w7QBtvNotoJJpipu%2FCH1HDheQoOiC75rODCbzxqJldhf7eu3u8nCMaoXR8ImI0KbHZRTduRzF4uUGpGmRPqHJzWUDNhM37h0YMDyw5CRMk0IYGEhvNPqdXzGAbFNoGGUksohEQMIHfoBnaaxuuzMkKoZqLh%2ByAzSAi4DRH7yjGGrwF2AZCRxgrDKOePltpiV4TsOVjiOomu3Ru0OeZx1QbjdZb0L45Zk6F5UqMDvlLiO3%2FlVquxG5zUvj95Zz6%2BcmoVS%2B9oF7Y4jWbotBlqP08mym84Qzj6GPHOjWoWtE1jeGvu%2BkYPNTxy4K3TqbGOC4qaANY4j09YuJtrzvqxQnDr8tKWWmpbg4%2F2npNKZdHZZauyN0qz9zk6%2FeDU0%2Bp27Y35bkZXAvvOre2sss%2FMOfTSS3UMJbHjb4GOqUB%2BqIFCrMEYOhYGtOIca%2BVl3KRibRljC%2BNvy6Mq2pO9Em1KDfVUx4izI2TDsFSA6J71Nc55oo0rMpUdfdYbUrCtiOEmLjwUKZDvwl0wQWNmySjNZfEu89nDxebuFgxO%2Fofhr3Eib0s5CNL55vkfn1f5J9yLnXwxrME9Ry6BGhxumZAFmfDHMAX4kDNczn%2BoCsfGsGWstR4MfG5rJ2M%2FUiPhA3EdyNM&X-Amz-Signature=303c0d9d04518d2aab866ab8eeb1b89d9ebc9de3905feac6ec12b53423ceb4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIJMTX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDjvW6cwa%2FOWJhoex1jabwe4f4DOLu8QcMet5KyNhnfWAIgEY6HF6QM3z6tpt%2B8pIHiRC2laorR4d0alMwEfh7Bl1wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4LKFXAquVIwExkmyrcA1L3p21SKHZZldpPzMHYARYai8ZBI3loJPfhXDg8vYkkuKIX8LPFtShQHw5TTn2sYg5Rj%2FB1HwGxGmxtTtnb89saxthEfBUmW0lt47A%2BYmgTAJqjuLOanhFmbPeusZZVQ50aq55Vh7i4ez34CZwikup2JExjPSrRSVcewa9eiiX%2FhQKb3yb9tI2jcOtRzMgZ3fc7HsmJUQ6nrJuiq7MmnWRuz64FXR2hq2w7QBtvNotoJJpipu%2FCH1HDheQoOiC75rODCbzxqJldhf7eu3u8nCMaoXR8ImI0KbHZRTduRzF4uUGpGmRPqHJzWUDNhM37h0YMDyw5CRMk0IYGEhvNPqdXzGAbFNoGGUksohEQMIHfoBnaaxuuzMkKoZqLh%2ByAzSAi4DRH7yjGGrwF2AZCRxgrDKOePltpiV4TsOVjiOomu3Ru0OeZx1QbjdZb0L45Zk6F5UqMDvlLiO3%2FlVquxG5zUvj95Zz6%2BcmoVS%2B9oF7Y4jWbotBlqP08mym84Qzj6GPHOjWoWtE1jeGvu%2BkYPNTxy4K3TqbGOC4qaANY4j09YuJtrzvqxQnDr8tKWWmpbg4%2F2npNKZdHZZauyN0qz9zk6%2FeDU0%2Bp27Y35bkZXAvvOre2sss%2FMOfTSS3UMJbHjb4GOqUB%2BqIFCrMEYOhYGtOIca%2BVl3KRibRljC%2BNvy6Mq2pO9Em1KDfVUx4izI2TDsFSA6J71Nc55oo0rMpUdfdYbUrCtiOEmLjwUKZDvwl0wQWNmySjNZfEu89nDxebuFgxO%2Fofhr3Eib0s5CNL55vkfn1f5J9yLnXwxrME9Ry6BGhxumZAFmfDHMAX4kDNczn%2BoCsfGsGWstR4MfG5rJ2M%2FUiPhA3EdyNM&X-Amz-Signature=47d9825501827e5fbcc2727688f9c6a68eff79f0b84a3a961e610273bb95c193&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIJMTX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDjvW6cwa%2FOWJhoex1jabwe4f4DOLu8QcMet5KyNhnfWAIgEY6HF6QM3z6tpt%2B8pIHiRC2laorR4d0alMwEfh7Bl1wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4LKFXAquVIwExkmyrcA1L3p21SKHZZldpPzMHYARYai8ZBI3loJPfhXDg8vYkkuKIX8LPFtShQHw5TTn2sYg5Rj%2FB1HwGxGmxtTtnb89saxthEfBUmW0lt47A%2BYmgTAJqjuLOanhFmbPeusZZVQ50aq55Vh7i4ez34CZwikup2JExjPSrRSVcewa9eiiX%2FhQKb3yb9tI2jcOtRzMgZ3fc7HsmJUQ6nrJuiq7MmnWRuz64FXR2hq2w7QBtvNotoJJpipu%2FCH1HDheQoOiC75rODCbzxqJldhf7eu3u8nCMaoXR8ImI0KbHZRTduRzF4uUGpGmRPqHJzWUDNhM37h0YMDyw5CRMk0IYGEhvNPqdXzGAbFNoGGUksohEQMIHfoBnaaxuuzMkKoZqLh%2ByAzSAi4DRH7yjGGrwF2AZCRxgrDKOePltpiV4TsOVjiOomu3Ru0OeZx1QbjdZb0L45Zk6F5UqMDvlLiO3%2FlVquxG5zUvj95Zz6%2BcmoVS%2B9oF7Y4jWbotBlqP08mym84Qzj6GPHOjWoWtE1jeGvu%2BkYPNTxy4K3TqbGOC4qaANY4j09YuJtrzvqxQnDr8tKWWmpbg4%2F2npNKZdHZZauyN0qz9zk6%2FeDU0%2Bp27Y35bkZXAvvOre2sss%2FMOfTSS3UMJbHjb4GOqUB%2BqIFCrMEYOhYGtOIca%2BVl3KRibRljC%2BNvy6Mq2pO9Em1KDfVUx4izI2TDsFSA6J71Nc55oo0rMpUdfdYbUrCtiOEmLjwUKZDvwl0wQWNmySjNZfEu89nDxebuFgxO%2Fofhr3Eib0s5CNL55vkfn1f5J9yLnXwxrME9Ry6BGhxumZAFmfDHMAX4kDNczn%2BoCsfGsGWstR4MfG5rJ2M%2FUiPhA3EdyNM&X-Amz-Signature=66301338d039bb664fdbbf2fa249be95b028374470faf49e94b46a7bedd48a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
