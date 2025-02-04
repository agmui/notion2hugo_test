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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R63SJHPS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC8da3ELpu6YB9b7I5O5hkRjvmL4euFE4eSshzKkR41JgIgCXHsE51OhYFpHDCEM2TbQIu7tSiniXs38sxuFIkx8jcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJHAGi54CldMO74grircA2jrLSGSGBKSP5Vb81mGnkTX6JiWKRLISc6ShS9o4ijj04nRQuuHaWqCHkYyWrjJKeCIXsm%2Fa0gr3572sFuLvBodHNL%2FD6YrOM5VLRbtM8WPSKrfhlWTDJ6nbN46VcoSMF7UNpRYZBXEoEkC8393WvMxcbYWW3e7PhTwXPoVNlvxjOTvkziiFpqA9dMosAQzJVSH2frEBeb4MoS2FJEHi5hnxxiHL7na%2FnV%2BCSr7E%2FIL1E28%2Bhj8zjmeBLTZY6ZjQuhWfAt8rOGR26xgcz7Y7M6y6qq%2BnYHArYVNh2QYU2VeX5rniXSuBt%2BgbtBDVuGrPGCmtBp3PXbMGyq8XVNE2OOAceAd2aVy8%2BbHEJHmBPu7%2Bo9BlIvZSn5iCKeSmkYOG19MHU3%2BPdd9qJtq%2Fa%2FQmJ6PYSiyEB2YbBmUNHo8VmXndak7ZaqQjAXCcXpwQjt%2BLZS%2B3yMXRRbI%2B2rhNq54ajXqqLKGVbO9AuMQ%2FeGR8vLQa1rIfhWKnGMcObUxCayBfsHTHio%2FBPvXZi9yW%2Fs8mKmhceTHqoxWqiw7mBlA7aM3BUegbVju9lSRfBbNwuVnNELQ0doM3ZsvYWej51EY7GgLe0%2B1pz%2B99bpxyageezrUiigiOxsVPoiFFoKLMPjniL0GOqUBrDmL8X5Br1lCnRE%2FnfTF3z7iDGehnoaZveF3i2rYoQ5eVT8DDyyfwKVofDpG%2B28vwvPpaCdZZABPGyea%2BzDqpX7ywhemOAkE2Pu98KXmbWO6hvI8H4H3%2FJxhS0JrLAd0IiPrWh1roYkwIMGcqW4boIt8moAKMSCIwz7WMlzn2MQJmDGDcjeCACRZos6E%2FwOWxHLBwpdgbWZ0kpK4cFkGWasG55%2FZ&X-Amz-Signature=a59f54e7bc571d1c11f981ca8a2309ed7e6c99d089749f03d9b84f4fd9c435ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R63SJHPS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC8da3ELpu6YB9b7I5O5hkRjvmL4euFE4eSshzKkR41JgIgCXHsE51OhYFpHDCEM2TbQIu7tSiniXs38sxuFIkx8jcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJHAGi54CldMO74grircA2jrLSGSGBKSP5Vb81mGnkTX6JiWKRLISc6ShS9o4ijj04nRQuuHaWqCHkYyWrjJKeCIXsm%2Fa0gr3572sFuLvBodHNL%2FD6YrOM5VLRbtM8WPSKrfhlWTDJ6nbN46VcoSMF7UNpRYZBXEoEkC8393WvMxcbYWW3e7PhTwXPoVNlvxjOTvkziiFpqA9dMosAQzJVSH2frEBeb4MoS2FJEHi5hnxxiHL7na%2FnV%2BCSr7E%2FIL1E28%2Bhj8zjmeBLTZY6ZjQuhWfAt8rOGR26xgcz7Y7M6y6qq%2BnYHArYVNh2QYU2VeX5rniXSuBt%2BgbtBDVuGrPGCmtBp3PXbMGyq8XVNE2OOAceAd2aVy8%2BbHEJHmBPu7%2Bo9BlIvZSn5iCKeSmkYOG19MHU3%2BPdd9qJtq%2Fa%2FQmJ6PYSiyEB2YbBmUNHo8VmXndak7ZaqQjAXCcXpwQjt%2BLZS%2B3yMXRRbI%2B2rhNq54ajXqqLKGVbO9AuMQ%2FeGR8vLQa1rIfhWKnGMcObUxCayBfsHTHio%2FBPvXZi9yW%2Fs8mKmhceTHqoxWqiw7mBlA7aM3BUegbVju9lSRfBbNwuVnNELQ0doM3ZsvYWej51EY7GgLe0%2B1pz%2B99bpxyageezrUiigiOxsVPoiFFoKLMPjniL0GOqUBrDmL8X5Br1lCnRE%2FnfTF3z7iDGehnoaZveF3i2rYoQ5eVT8DDyyfwKVofDpG%2B28vwvPpaCdZZABPGyea%2BzDqpX7ywhemOAkE2Pu98KXmbWO6hvI8H4H3%2FJxhS0JrLAd0IiPrWh1roYkwIMGcqW4boIt8moAKMSCIwz7WMlzn2MQJmDGDcjeCACRZos6E%2FwOWxHLBwpdgbWZ0kpK4cFkGWasG55%2FZ&X-Amz-Signature=0d0ea391749c0d3e4746f29d0123b4439ee2553b01d639741dc6171dcef2947f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R63SJHPS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC8da3ELpu6YB9b7I5O5hkRjvmL4euFE4eSshzKkR41JgIgCXHsE51OhYFpHDCEM2TbQIu7tSiniXs38sxuFIkx8jcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJHAGi54CldMO74grircA2jrLSGSGBKSP5Vb81mGnkTX6JiWKRLISc6ShS9o4ijj04nRQuuHaWqCHkYyWrjJKeCIXsm%2Fa0gr3572sFuLvBodHNL%2FD6YrOM5VLRbtM8WPSKrfhlWTDJ6nbN46VcoSMF7UNpRYZBXEoEkC8393WvMxcbYWW3e7PhTwXPoVNlvxjOTvkziiFpqA9dMosAQzJVSH2frEBeb4MoS2FJEHi5hnxxiHL7na%2FnV%2BCSr7E%2FIL1E28%2Bhj8zjmeBLTZY6ZjQuhWfAt8rOGR26xgcz7Y7M6y6qq%2BnYHArYVNh2QYU2VeX5rniXSuBt%2BgbtBDVuGrPGCmtBp3PXbMGyq8XVNE2OOAceAd2aVy8%2BbHEJHmBPu7%2Bo9BlIvZSn5iCKeSmkYOG19MHU3%2BPdd9qJtq%2Fa%2FQmJ6PYSiyEB2YbBmUNHo8VmXndak7ZaqQjAXCcXpwQjt%2BLZS%2B3yMXRRbI%2B2rhNq54ajXqqLKGVbO9AuMQ%2FeGR8vLQa1rIfhWKnGMcObUxCayBfsHTHio%2FBPvXZi9yW%2Fs8mKmhceTHqoxWqiw7mBlA7aM3BUegbVju9lSRfBbNwuVnNELQ0doM3ZsvYWej51EY7GgLe0%2B1pz%2B99bpxyageezrUiigiOxsVPoiFFoKLMPjniL0GOqUBrDmL8X5Br1lCnRE%2FnfTF3z7iDGehnoaZveF3i2rYoQ5eVT8DDyyfwKVofDpG%2B28vwvPpaCdZZABPGyea%2BzDqpX7ywhemOAkE2Pu98KXmbWO6hvI8H4H3%2FJxhS0JrLAd0IiPrWh1roYkwIMGcqW4boIt8moAKMSCIwz7WMlzn2MQJmDGDcjeCACRZos6E%2FwOWxHLBwpdgbWZ0kpK4cFkGWasG55%2FZ&X-Amz-Signature=f81e26d1bd075765c86ae9d57381346d7218e9bb50e2fa38270db3610ae70a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R63SJHPS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC8da3ELpu6YB9b7I5O5hkRjvmL4euFE4eSshzKkR41JgIgCXHsE51OhYFpHDCEM2TbQIu7tSiniXs38sxuFIkx8jcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJHAGi54CldMO74grircA2jrLSGSGBKSP5Vb81mGnkTX6JiWKRLISc6ShS9o4ijj04nRQuuHaWqCHkYyWrjJKeCIXsm%2Fa0gr3572sFuLvBodHNL%2FD6YrOM5VLRbtM8WPSKrfhlWTDJ6nbN46VcoSMF7UNpRYZBXEoEkC8393WvMxcbYWW3e7PhTwXPoVNlvxjOTvkziiFpqA9dMosAQzJVSH2frEBeb4MoS2FJEHi5hnxxiHL7na%2FnV%2BCSr7E%2FIL1E28%2Bhj8zjmeBLTZY6ZjQuhWfAt8rOGR26xgcz7Y7M6y6qq%2BnYHArYVNh2QYU2VeX5rniXSuBt%2BgbtBDVuGrPGCmtBp3PXbMGyq8XVNE2OOAceAd2aVy8%2BbHEJHmBPu7%2Bo9BlIvZSn5iCKeSmkYOG19MHU3%2BPdd9qJtq%2Fa%2FQmJ6PYSiyEB2YbBmUNHo8VmXndak7ZaqQjAXCcXpwQjt%2BLZS%2B3yMXRRbI%2B2rhNq54ajXqqLKGVbO9AuMQ%2FeGR8vLQa1rIfhWKnGMcObUxCayBfsHTHio%2FBPvXZi9yW%2Fs8mKmhceTHqoxWqiw7mBlA7aM3BUegbVju9lSRfBbNwuVnNELQ0doM3ZsvYWej51EY7GgLe0%2B1pz%2B99bpxyageezrUiigiOxsVPoiFFoKLMPjniL0GOqUBrDmL8X5Br1lCnRE%2FnfTF3z7iDGehnoaZveF3i2rYoQ5eVT8DDyyfwKVofDpG%2B28vwvPpaCdZZABPGyea%2BzDqpX7ywhemOAkE2Pu98KXmbWO6hvI8H4H3%2FJxhS0JrLAd0IiPrWh1roYkwIMGcqW4boIt8moAKMSCIwz7WMlzn2MQJmDGDcjeCACRZos6E%2FwOWxHLBwpdgbWZ0kpK4cFkGWasG55%2FZ&X-Amz-Signature=8da9bbaf99c49bc30925dc221a1dca6381a653e194f6647c427ded52267d3b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R63SJHPS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC8da3ELpu6YB9b7I5O5hkRjvmL4euFE4eSshzKkR41JgIgCXHsE51OhYFpHDCEM2TbQIu7tSiniXs38sxuFIkx8jcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJHAGi54CldMO74grircA2jrLSGSGBKSP5Vb81mGnkTX6JiWKRLISc6ShS9o4ijj04nRQuuHaWqCHkYyWrjJKeCIXsm%2Fa0gr3572sFuLvBodHNL%2FD6YrOM5VLRbtM8WPSKrfhlWTDJ6nbN46VcoSMF7UNpRYZBXEoEkC8393WvMxcbYWW3e7PhTwXPoVNlvxjOTvkziiFpqA9dMosAQzJVSH2frEBeb4MoS2FJEHi5hnxxiHL7na%2FnV%2BCSr7E%2FIL1E28%2Bhj8zjmeBLTZY6ZjQuhWfAt8rOGR26xgcz7Y7M6y6qq%2BnYHArYVNh2QYU2VeX5rniXSuBt%2BgbtBDVuGrPGCmtBp3PXbMGyq8XVNE2OOAceAd2aVy8%2BbHEJHmBPu7%2Bo9BlIvZSn5iCKeSmkYOG19MHU3%2BPdd9qJtq%2Fa%2FQmJ6PYSiyEB2YbBmUNHo8VmXndak7ZaqQjAXCcXpwQjt%2BLZS%2B3yMXRRbI%2B2rhNq54ajXqqLKGVbO9AuMQ%2FeGR8vLQa1rIfhWKnGMcObUxCayBfsHTHio%2FBPvXZi9yW%2Fs8mKmhceTHqoxWqiw7mBlA7aM3BUegbVju9lSRfBbNwuVnNELQ0doM3ZsvYWej51EY7GgLe0%2B1pz%2B99bpxyageezrUiigiOxsVPoiFFoKLMPjniL0GOqUBrDmL8X5Br1lCnRE%2FnfTF3z7iDGehnoaZveF3i2rYoQ5eVT8DDyyfwKVofDpG%2B28vwvPpaCdZZABPGyea%2BzDqpX7ywhemOAkE2Pu98KXmbWO6hvI8H4H3%2FJxhS0JrLAd0IiPrWh1roYkwIMGcqW4boIt8moAKMSCIwz7WMlzn2MQJmDGDcjeCACRZos6E%2FwOWxHLBwpdgbWZ0kpK4cFkGWasG55%2FZ&X-Amz-Signature=888d637fd3edcf710a85afe5f4f2ab5f006fb17d870acd2430d839b20347e694&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R63SJHPS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC8da3ELpu6YB9b7I5O5hkRjvmL4euFE4eSshzKkR41JgIgCXHsE51OhYFpHDCEM2TbQIu7tSiniXs38sxuFIkx8jcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJHAGi54CldMO74grircA2jrLSGSGBKSP5Vb81mGnkTX6JiWKRLISc6ShS9o4ijj04nRQuuHaWqCHkYyWrjJKeCIXsm%2Fa0gr3572sFuLvBodHNL%2FD6YrOM5VLRbtM8WPSKrfhlWTDJ6nbN46VcoSMF7UNpRYZBXEoEkC8393WvMxcbYWW3e7PhTwXPoVNlvxjOTvkziiFpqA9dMosAQzJVSH2frEBeb4MoS2FJEHi5hnxxiHL7na%2FnV%2BCSr7E%2FIL1E28%2Bhj8zjmeBLTZY6ZjQuhWfAt8rOGR26xgcz7Y7M6y6qq%2BnYHArYVNh2QYU2VeX5rniXSuBt%2BgbtBDVuGrPGCmtBp3PXbMGyq8XVNE2OOAceAd2aVy8%2BbHEJHmBPu7%2Bo9BlIvZSn5iCKeSmkYOG19MHU3%2BPdd9qJtq%2Fa%2FQmJ6PYSiyEB2YbBmUNHo8VmXndak7ZaqQjAXCcXpwQjt%2BLZS%2B3yMXRRbI%2B2rhNq54ajXqqLKGVbO9AuMQ%2FeGR8vLQa1rIfhWKnGMcObUxCayBfsHTHio%2FBPvXZi9yW%2Fs8mKmhceTHqoxWqiw7mBlA7aM3BUegbVju9lSRfBbNwuVnNELQ0doM3ZsvYWej51EY7GgLe0%2B1pz%2B99bpxyageezrUiigiOxsVPoiFFoKLMPjniL0GOqUBrDmL8X5Br1lCnRE%2FnfTF3z7iDGehnoaZveF3i2rYoQ5eVT8DDyyfwKVofDpG%2B28vwvPpaCdZZABPGyea%2BzDqpX7ywhemOAkE2Pu98KXmbWO6hvI8H4H3%2FJxhS0JrLAd0IiPrWh1roYkwIMGcqW4boIt8moAKMSCIwz7WMlzn2MQJmDGDcjeCACRZos6E%2FwOWxHLBwpdgbWZ0kpK4cFkGWasG55%2FZ&X-Amz-Signature=e43146ed64a072b780d5d14ab8987859ef6e5491416fc2d7888689d3af7df92b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R63SJHPS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC8da3ELpu6YB9b7I5O5hkRjvmL4euFE4eSshzKkR41JgIgCXHsE51OhYFpHDCEM2TbQIu7tSiniXs38sxuFIkx8jcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJHAGi54CldMO74grircA2jrLSGSGBKSP5Vb81mGnkTX6JiWKRLISc6ShS9o4ijj04nRQuuHaWqCHkYyWrjJKeCIXsm%2Fa0gr3572sFuLvBodHNL%2FD6YrOM5VLRbtM8WPSKrfhlWTDJ6nbN46VcoSMF7UNpRYZBXEoEkC8393WvMxcbYWW3e7PhTwXPoVNlvxjOTvkziiFpqA9dMosAQzJVSH2frEBeb4MoS2FJEHi5hnxxiHL7na%2FnV%2BCSr7E%2FIL1E28%2Bhj8zjmeBLTZY6ZjQuhWfAt8rOGR26xgcz7Y7M6y6qq%2BnYHArYVNh2QYU2VeX5rniXSuBt%2BgbtBDVuGrPGCmtBp3PXbMGyq8XVNE2OOAceAd2aVy8%2BbHEJHmBPu7%2Bo9BlIvZSn5iCKeSmkYOG19MHU3%2BPdd9qJtq%2Fa%2FQmJ6PYSiyEB2YbBmUNHo8VmXndak7ZaqQjAXCcXpwQjt%2BLZS%2B3yMXRRbI%2B2rhNq54ajXqqLKGVbO9AuMQ%2FeGR8vLQa1rIfhWKnGMcObUxCayBfsHTHio%2FBPvXZi9yW%2Fs8mKmhceTHqoxWqiw7mBlA7aM3BUegbVju9lSRfBbNwuVnNELQ0doM3ZsvYWej51EY7GgLe0%2B1pz%2B99bpxyageezrUiigiOxsVPoiFFoKLMPjniL0GOqUBrDmL8X5Br1lCnRE%2FnfTF3z7iDGehnoaZveF3i2rYoQ5eVT8DDyyfwKVofDpG%2B28vwvPpaCdZZABPGyea%2BzDqpX7ywhemOAkE2Pu98KXmbWO6hvI8H4H3%2FJxhS0JrLAd0IiPrWh1roYkwIMGcqW4boIt8moAKMSCIwz7WMlzn2MQJmDGDcjeCACRZos6E%2FwOWxHLBwpdgbWZ0kpK4cFkGWasG55%2FZ&X-Amz-Signature=30a801e0f24b4b1be019060af21e98426ccbcf456bdc67635b0a6efa9b5e2b44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R63SJHPS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC8da3ELpu6YB9b7I5O5hkRjvmL4euFE4eSshzKkR41JgIgCXHsE51OhYFpHDCEM2TbQIu7tSiniXs38sxuFIkx8jcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJHAGi54CldMO74grircA2jrLSGSGBKSP5Vb81mGnkTX6JiWKRLISc6ShS9o4ijj04nRQuuHaWqCHkYyWrjJKeCIXsm%2Fa0gr3572sFuLvBodHNL%2FD6YrOM5VLRbtM8WPSKrfhlWTDJ6nbN46VcoSMF7UNpRYZBXEoEkC8393WvMxcbYWW3e7PhTwXPoVNlvxjOTvkziiFpqA9dMosAQzJVSH2frEBeb4MoS2FJEHi5hnxxiHL7na%2FnV%2BCSr7E%2FIL1E28%2Bhj8zjmeBLTZY6ZjQuhWfAt8rOGR26xgcz7Y7M6y6qq%2BnYHArYVNh2QYU2VeX5rniXSuBt%2BgbtBDVuGrPGCmtBp3PXbMGyq8XVNE2OOAceAd2aVy8%2BbHEJHmBPu7%2Bo9BlIvZSn5iCKeSmkYOG19MHU3%2BPdd9qJtq%2Fa%2FQmJ6PYSiyEB2YbBmUNHo8VmXndak7ZaqQjAXCcXpwQjt%2BLZS%2B3yMXRRbI%2B2rhNq54ajXqqLKGVbO9AuMQ%2FeGR8vLQa1rIfhWKnGMcObUxCayBfsHTHio%2FBPvXZi9yW%2Fs8mKmhceTHqoxWqiw7mBlA7aM3BUegbVju9lSRfBbNwuVnNELQ0doM3ZsvYWej51EY7GgLe0%2B1pz%2B99bpxyageezrUiigiOxsVPoiFFoKLMPjniL0GOqUBrDmL8X5Br1lCnRE%2FnfTF3z7iDGehnoaZveF3i2rYoQ5eVT8DDyyfwKVofDpG%2B28vwvPpaCdZZABPGyea%2BzDqpX7ywhemOAkE2Pu98KXmbWO6hvI8H4H3%2FJxhS0JrLAd0IiPrWh1roYkwIMGcqW4boIt8moAKMSCIwz7WMlzn2MQJmDGDcjeCACRZos6E%2FwOWxHLBwpdgbWZ0kpK4cFkGWasG55%2FZ&X-Amz-Signature=1d056d12a975ce4e929a8328a68917e744e400c780b7e613fd4f1c9a1bc3cbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
