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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775VNWTS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIC5wtIXLWE7r0QW7Tx%2BHCvUsWk5MD%2FxIib1Oq8t0btZkAiEA0fSNF2zyGYxwcIVqrQgcGT7G3%2B%2B%2BDUpk11K%2F%2BtK5xx0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMmEgpo8Jup0ErNkircAzwd1sz2ixAcTNaeJp7o39I%2F06sNYrnRwygBGSiEZ3c8V4qXrrRnj2h5P71ARQ%2BlKFM2bRVIBuBNzVF%2B%2F7Vt6sqvSNgCEnIxFD6byechUCftsWhEO6Q%2FrnSmHoXIILT3%2BzQp%2Fe7e%2F%2F3iLMVchfeErSavXkcrWtbqsl39AqNK7r%2Fqhx6kGh%2BM0tXmRlSC6oRNau6IeuK31JYHcx8KbePVc9Ar8wUma2b1ftcblCv2eUPOtWZt0dBXSQUW%2BoaRfldZyeup1M83fB5cmjKxN2dtwS3ksM8apsQwr06ZdZ1rAb3UWB9DQuTMneq4lQepcHPl0uaoap2qnrPawO96iGofRdcTP1qFzavYBH%2BIPtw3jJVIlR%2BLHNWv87tyuZ1BgJC7e%2FVHQLnFzM749%2BLsWP6Z9zwD7DsG7beU9Tb6Gh68pF3pGfM9sdI7jXpUfg5BEMMjZKgdkEkrlW8qZUdy6KTCb564zS%2FH99UBQKdvRtHbooEJt1MRFBz5OZxbY0FPIhtVm19POqgzTQv%2FLzTVnvfDOzJ49gr3FWwWX0y9wf2v%2FKiOe9Lm%2BWZ8k%2BPIpv%2BRnDQskaS0WWgDWDnuM5%2Fl59nwYOTjnIxL3jIEQdQc1yzZ8h9chrKI7eA2xnmt8xPvMNvEk8AGOqUB0WBguhl6vAL4pCdsuvAbjryXmknVgSiVRTxpZIIqmk9I0nhF6H4wYXfiu2Q2eDp7VvfJO4m6crmhrbGz3os5jkSEZ48C8CAuUMmXsF2fxegTo7R5S1PM52UyqZdSOaT6I%2FbNro2NaJZwDh%2FJ5r%2Fwg1w8ohcya730qs%2B%2BEpAp4nUmK0YEgDls3MRIXG7S%2BloXmL%2FrmbLgaCF3HfcLvjuQsJpmcg5l&X-Amz-Signature=902af358d04e79e08d888c87aab196518d56fa621dcafd7d4e58d2552adbbe65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775VNWTS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIC5wtIXLWE7r0QW7Tx%2BHCvUsWk5MD%2FxIib1Oq8t0btZkAiEA0fSNF2zyGYxwcIVqrQgcGT7G3%2B%2B%2BDUpk11K%2F%2BtK5xx0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMmEgpo8Jup0ErNkircAzwd1sz2ixAcTNaeJp7o39I%2F06sNYrnRwygBGSiEZ3c8V4qXrrRnj2h5P71ARQ%2BlKFM2bRVIBuBNzVF%2B%2F7Vt6sqvSNgCEnIxFD6byechUCftsWhEO6Q%2FrnSmHoXIILT3%2BzQp%2Fe7e%2F%2F3iLMVchfeErSavXkcrWtbqsl39AqNK7r%2Fqhx6kGh%2BM0tXmRlSC6oRNau6IeuK31JYHcx8KbePVc9Ar8wUma2b1ftcblCv2eUPOtWZt0dBXSQUW%2BoaRfldZyeup1M83fB5cmjKxN2dtwS3ksM8apsQwr06ZdZ1rAb3UWB9DQuTMneq4lQepcHPl0uaoap2qnrPawO96iGofRdcTP1qFzavYBH%2BIPtw3jJVIlR%2BLHNWv87tyuZ1BgJC7e%2FVHQLnFzM749%2BLsWP6Z9zwD7DsG7beU9Tb6Gh68pF3pGfM9sdI7jXpUfg5BEMMjZKgdkEkrlW8qZUdy6KTCb564zS%2FH99UBQKdvRtHbooEJt1MRFBz5OZxbY0FPIhtVm19POqgzTQv%2FLzTVnvfDOzJ49gr3FWwWX0y9wf2v%2FKiOe9Lm%2BWZ8k%2BPIpv%2BRnDQskaS0WWgDWDnuM5%2Fl59nwYOTjnIxL3jIEQdQc1yzZ8h9chrKI7eA2xnmt8xPvMNvEk8AGOqUB0WBguhl6vAL4pCdsuvAbjryXmknVgSiVRTxpZIIqmk9I0nhF6H4wYXfiu2Q2eDp7VvfJO4m6crmhrbGz3os5jkSEZ48C8CAuUMmXsF2fxegTo7R5S1PM52UyqZdSOaT6I%2FbNro2NaJZwDh%2FJ5r%2Fwg1w8ohcya730qs%2B%2BEpAp4nUmK0YEgDls3MRIXG7S%2BloXmL%2FrmbLgaCF3HfcLvjuQsJpmcg5l&X-Amz-Signature=6e62033e40120080bb390ba1be29bc11064747fbb7d5f089928653ac8741cb21&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775VNWTS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIC5wtIXLWE7r0QW7Tx%2BHCvUsWk5MD%2FxIib1Oq8t0btZkAiEA0fSNF2zyGYxwcIVqrQgcGT7G3%2B%2B%2BDUpk11K%2F%2BtK5xx0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMmEgpo8Jup0ErNkircAzwd1sz2ixAcTNaeJp7o39I%2F06sNYrnRwygBGSiEZ3c8V4qXrrRnj2h5P71ARQ%2BlKFM2bRVIBuBNzVF%2B%2F7Vt6sqvSNgCEnIxFD6byechUCftsWhEO6Q%2FrnSmHoXIILT3%2BzQp%2Fe7e%2F%2F3iLMVchfeErSavXkcrWtbqsl39AqNK7r%2Fqhx6kGh%2BM0tXmRlSC6oRNau6IeuK31JYHcx8KbePVc9Ar8wUma2b1ftcblCv2eUPOtWZt0dBXSQUW%2BoaRfldZyeup1M83fB5cmjKxN2dtwS3ksM8apsQwr06ZdZ1rAb3UWB9DQuTMneq4lQepcHPl0uaoap2qnrPawO96iGofRdcTP1qFzavYBH%2BIPtw3jJVIlR%2BLHNWv87tyuZ1BgJC7e%2FVHQLnFzM749%2BLsWP6Z9zwD7DsG7beU9Tb6Gh68pF3pGfM9sdI7jXpUfg5BEMMjZKgdkEkrlW8qZUdy6KTCb564zS%2FH99UBQKdvRtHbooEJt1MRFBz5OZxbY0FPIhtVm19POqgzTQv%2FLzTVnvfDOzJ49gr3FWwWX0y9wf2v%2FKiOe9Lm%2BWZ8k%2BPIpv%2BRnDQskaS0WWgDWDnuM5%2Fl59nwYOTjnIxL3jIEQdQc1yzZ8h9chrKI7eA2xnmt8xPvMNvEk8AGOqUB0WBguhl6vAL4pCdsuvAbjryXmknVgSiVRTxpZIIqmk9I0nhF6H4wYXfiu2Q2eDp7VvfJO4m6crmhrbGz3os5jkSEZ48C8CAuUMmXsF2fxegTo7R5S1PM52UyqZdSOaT6I%2FbNro2NaJZwDh%2FJ5r%2Fwg1w8ohcya730qs%2B%2BEpAp4nUmK0YEgDls3MRIXG7S%2BloXmL%2FrmbLgaCF3HfcLvjuQsJpmcg5l&X-Amz-Signature=403b94aa4ddd4a19aaa634473793288169e8e4af7b948f717095bcffe26f12ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775VNWTS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIC5wtIXLWE7r0QW7Tx%2BHCvUsWk5MD%2FxIib1Oq8t0btZkAiEA0fSNF2zyGYxwcIVqrQgcGT7G3%2B%2B%2BDUpk11K%2F%2BtK5xx0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMmEgpo8Jup0ErNkircAzwd1sz2ixAcTNaeJp7o39I%2F06sNYrnRwygBGSiEZ3c8V4qXrrRnj2h5P71ARQ%2BlKFM2bRVIBuBNzVF%2B%2F7Vt6sqvSNgCEnIxFD6byechUCftsWhEO6Q%2FrnSmHoXIILT3%2BzQp%2Fe7e%2F%2F3iLMVchfeErSavXkcrWtbqsl39AqNK7r%2Fqhx6kGh%2BM0tXmRlSC6oRNau6IeuK31JYHcx8KbePVc9Ar8wUma2b1ftcblCv2eUPOtWZt0dBXSQUW%2BoaRfldZyeup1M83fB5cmjKxN2dtwS3ksM8apsQwr06ZdZ1rAb3UWB9DQuTMneq4lQepcHPl0uaoap2qnrPawO96iGofRdcTP1qFzavYBH%2BIPtw3jJVIlR%2BLHNWv87tyuZ1BgJC7e%2FVHQLnFzM749%2BLsWP6Z9zwD7DsG7beU9Tb6Gh68pF3pGfM9sdI7jXpUfg5BEMMjZKgdkEkrlW8qZUdy6KTCb564zS%2FH99UBQKdvRtHbooEJt1MRFBz5OZxbY0FPIhtVm19POqgzTQv%2FLzTVnvfDOzJ49gr3FWwWX0y9wf2v%2FKiOe9Lm%2BWZ8k%2BPIpv%2BRnDQskaS0WWgDWDnuM5%2Fl59nwYOTjnIxL3jIEQdQc1yzZ8h9chrKI7eA2xnmt8xPvMNvEk8AGOqUB0WBguhl6vAL4pCdsuvAbjryXmknVgSiVRTxpZIIqmk9I0nhF6H4wYXfiu2Q2eDp7VvfJO4m6crmhrbGz3os5jkSEZ48C8CAuUMmXsF2fxegTo7R5S1PM52UyqZdSOaT6I%2FbNro2NaJZwDh%2FJ5r%2Fwg1w8ohcya730qs%2B%2BEpAp4nUmK0YEgDls3MRIXG7S%2BloXmL%2FrmbLgaCF3HfcLvjuQsJpmcg5l&X-Amz-Signature=ac89e37b79f004a3e8aa41137b4b1d5604f3bff112aa27e8433833f41344256f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775VNWTS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIC5wtIXLWE7r0QW7Tx%2BHCvUsWk5MD%2FxIib1Oq8t0btZkAiEA0fSNF2zyGYxwcIVqrQgcGT7G3%2B%2B%2BDUpk11K%2F%2BtK5xx0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMmEgpo8Jup0ErNkircAzwd1sz2ixAcTNaeJp7o39I%2F06sNYrnRwygBGSiEZ3c8V4qXrrRnj2h5P71ARQ%2BlKFM2bRVIBuBNzVF%2B%2F7Vt6sqvSNgCEnIxFD6byechUCftsWhEO6Q%2FrnSmHoXIILT3%2BzQp%2Fe7e%2F%2F3iLMVchfeErSavXkcrWtbqsl39AqNK7r%2Fqhx6kGh%2BM0tXmRlSC6oRNau6IeuK31JYHcx8KbePVc9Ar8wUma2b1ftcblCv2eUPOtWZt0dBXSQUW%2BoaRfldZyeup1M83fB5cmjKxN2dtwS3ksM8apsQwr06ZdZ1rAb3UWB9DQuTMneq4lQepcHPl0uaoap2qnrPawO96iGofRdcTP1qFzavYBH%2BIPtw3jJVIlR%2BLHNWv87tyuZ1BgJC7e%2FVHQLnFzM749%2BLsWP6Z9zwD7DsG7beU9Tb6Gh68pF3pGfM9sdI7jXpUfg5BEMMjZKgdkEkrlW8qZUdy6KTCb564zS%2FH99UBQKdvRtHbooEJt1MRFBz5OZxbY0FPIhtVm19POqgzTQv%2FLzTVnvfDOzJ49gr3FWwWX0y9wf2v%2FKiOe9Lm%2BWZ8k%2BPIpv%2BRnDQskaS0WWgDWDnuM5%2Fl59nwYOTjnIxL3jIEQdQc1yzZ8h9chrKI7eA2xnmt8xPvMNvEk8AGOqUB0WBguhl6vAL4pCdsuvAbjryXmknVgSiVRTxpZIIqmk9I0nhF6H4wYXfiu2Q2eDp7VvfJO4m6crmhrbGz3os5jkSEZ48C8CAuUMmXsF2fxegTo7R5S1PM52UyqZdSOaT6I%2FbNro2NaJZwDh%2FJ5r%2Fwg1w8ohcya730qs%2B%2BEpAp4nUmK0YEgDls3MRIXG7S%2BloXmL%2FrmbLgaCF3HfcLvjuQsJpmcg5l&X-Amz-Signature=4b65c300993c0a353e9b2bc315630810de5903a7a3683c9e86ae4f4a6672770a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775VNWTS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIC5wtIXLWE7r0QW7Tx%2BHCvUsWk5MD%2FxIib1Oq8t0btZkAiEA0fSNF2zyGYxwcIVqrQgcGT7G3%2B%2B%2BDUpk11K%2F%2BtK5xx0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMmEgpo8Jup0ErNkircAzwd1sz2ixAcTNaeJp7o39I%2F06sNYrnRwygBGSiEZ3c8V4qXrrRnj2h5P71ARQ%2BlKFM2bRVIBuBNzVF%2B%2F7Vt6sqvSNgCEnIxFD6byechUCftsWhEO6Q%2FrnSmHoXIILT3%2BzQp%2Fe7e%2F%2F3iLMVchfeErSavXkcrWtbqsl39AqNK7r%2Fqhx6kGh%2BM0tXmRlSC6oRNau6IeuK31JYHcx8KbePVc9Ar8wUma2b1ftcblCv2eUPOtWZt0dBXSQUW%2BoaRfldZyeup1M83fB5cmjKxN2dtwS3ksM8apsQwr06ZdZ1rAb3UWB9DQuTMneq4lQepcHPl0uaoap2qnrPawO96iGofRdcTP1qFzavYBH%2BIPtw3jJVIlR%2BLHNWv87tyuZ1BgJC7e%2FVHQLnFzM749%2BLsWP6Z9zwD7DsG7beU9Tb6Gh68pF3pGfM9sdI7jXpUfg5BEMMjZKgdkEkrlW8qZUdy6KTCb564zS%2FH99UBQKdvRtHbooEJt1MRFBz5OZxbY0FPIhtVm19POqgzTQv%2FLzTVnvfDOzJ49gr3FWwWX0y9wf2v%2FKiOe9Lm%2BWZ8k%2BPIpv%2BRnDQskaS0WWgDWDnuM5%2Fl59nwYOTjnIxL3jIEQdQc1yzZ8h9chrKI7eA2xnmt8xPvMNvEk8AGOqUB0WBguhl6vAL4pCdsuvAbjryXmknVgSiVRTxpZIIqmk9I0nhF6H4wYXfiu2Q2eDp7VvfJO4m6crmhrbGz3os5jkSEZ48C8CAuUMmXsF2fxegTo7R5S1PM52UyqZdSOaT6I%2FbNro2NaJZwDh%2FJ5r%2Fwg1w8ohcya730qs%2B%2BEpAp4nUmK0YEgDls3MRIXG7S%2BloXmL%2FrmbLgaCF3HfcLvjuQsJpmcg5l&X-Amz-Signature=509fa6c4e8ed86ee71263d152627373843c8a1b7103df436a5885d73417c3ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775VNWTS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIC5wtIXLWE7r0QW7Tx%2BHCvUsWk5MD%2FxIib1Oq8t0btZkAiEA0fSNF2zyGYxwcIVqrQgcGT7G3%2B%2B%2BDUpk11K%2F%2BtK5xx0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMmEgpo8Jup0ErNkircAzwd1sz2ixAcTNaeJp7o39I%2F06sNYrnRwygBGSiEZ3c8V4qXrrRnj2h5P71ARQ%2BlKFM2bRVIBuBNzVF%2B%2F7Vt6sqvSNgCEnIxFD6byechUCftsWhEO6Q%2FrnSmHoXIILT3%2BzQp%2Fe7e%2F%2F3iLMVchfeErSavXkcrWtbqsl39AqNK7r%2Fqhx6kGh%2BM0tXmRlSC6oRNau6IeuK31JYHcx8KbePVc9Ar8wUma2b1ftcblCv2eUPOtWZt0dBXSQUW%2BoaRfldZyeup1M83fB5cmjKxN2dtwS3ksM8apsQwr06ZdZ1rAb3UWB9DQuTMneq4lQepcHPl0uaoap2qnrPawO96iGofRdcTP1qFzavYBH%2BIPtw3jJVIlR%2BLHNWv87tyuZ1BgJC7e%2FVHQLnFzM749%2BLsWP6Z9zwD7DsG7beU9Tb6Gh68pF3pGfM9sdI7jXpUfg5BEMMjZKgdkEkrlW8qZUdy6KTCb564zS%2FH99UBQKdvRtHbooEJt1MRFBz5OZxbY0FPIhtVm19POqgzTQv%2FLzTVnvfDOzJ49gr3FWwWX0y9wf2v%2FKiOe9Lm%2BWZ8k%2BPIpv%2BRnDQskaS0WWgDWDnuM5%2Fl59nwYOTjnIxL3jIEQdQc1yzZ8h9chrKI7eA2xnmt8xPvMNvEk8AGOqUB0WBguhl6vAL4pCdsuvAbjryXmknVgSiVRTxpZIIqmk9I0nhF6H4wYXfiu2Q2eDp7VvfJO4m6crmhrbGz3os5jkSEZ48C8CAuUMmXsF2fxegTo7R5S1PM52UyqZdSOaT6I%2FbNro2NaJZwDh%2FJ5r%2Fwg1w8ohcya730qs%2B%2BEpAp4nUmK0YEgDls3MRIXG7S%2BloXmL%2FrmbLgaCF3HfcLvjuQsJpmcg5l&X-Amz-Signature=d5265c7ead9dac8812af4f123b4a77d8056fffa8f84cbbacc0dfaffcde3ac338&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775VNWTS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIC5wtIXLWE7r0QW7Tx%2BHCvUsWk5MD%2FxIib1Oq8t0btZkAiEA0fSNF2zyGYxwcIVqrQgcGT7G3%2B%2B%2BDUpk11K%2F%2BtK5xx0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMmEgpo8Jup0ErNkircAzwd1sz2ixAcTNaeJp7o39I%2F06sNYrnRwygBGSiEZ3c8V4qXrrRnj2h5P71ARQ%2BlKFM2bRVIBuBNzVF%2B%2F7Vt6sqvSNgCEnIxFD6byechUCftsWhEO6Q%2FrnSmHoXIILT3%2BzQp%2Fe7e%2F%2F3iLMVchfeErSavXkcrWtbqsl39AqNK7r%2Fqhx6kGh%2BM0tXmRlSC6oRNau6IeuK31JYHcx8KbePVc9Ar8wUma2b1ftcblCv2eUPOtWZt0dBXSQUW%2BoaRfldZyeup1M83fB5cmjKxN2dtwS3ksM8apsQwr06ZdZ1rAb3UWB9DQuTMneq4lQepcHPl0uaoap2qnrPawO96iGofRdcTP1qFzavYBH%2BIPtw3jJVIlR%2BLHNWv87tyuZ1BgJC7e%2FVHQLnFzM749%2BLsWP6Z9zwD7DsG7beU9Tb6Gh68pF3pGfM9sdI7jXpUfg5BEMMjZKgdkEkrlW8qZUdy6KTCb564zS%2FH99UBQKdvRtHbooEJt1MRFBz5OZxbY0FPIhtVm19POqgzTQv%2FLzTVnvfDOzJ49gr3FWwWX0y9wf2v%2FKiOe9Lm%2BWZ8k%2BPIpv%2BRnDQskaS0WWgDWDnuM5%2Fl59nwYOTjnIxL3jIEQdQc1yzZ8h9chrKI7eA2xnmt8xPvMNvEk8AGOqUB0WBguhl6vAL4pCdsuvAbjryXmknVgSiVRTxpZIIqmk9I0nhF6H4wYXfiu2Q2eDp7VvfJO4m6crmhrbGz3os5jkSEZ48C8CAuUMmXsF2fxegTo7R5S1PM52UyqZdSOaT6I%2FbNro2NaJZwDh%2FJ5r%2Fwg1w8ohcya730qs%2B%2BEpAp4nUmK0YEgDls3MRIXG7S%2BloXmL%2FrmbLgaCF3HfcLvjuQsJpmcg5l&X-Amz-Signature=a789bf7f29e98e11d4b42860c487e3c13a79066d0e8465c325f66f2a7007631d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
