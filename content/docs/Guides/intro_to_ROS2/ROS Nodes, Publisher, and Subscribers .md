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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662U3JTJB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wesn9cWWDUaqyF0PapSd6SJTqFqno%2FQP9rzbntXpFQIgcZj74kveMrBiHGOxYXbV%2BhP04SW607Hah2bPJMkALqQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV%2BvEZrTmVLNxckMCrcA6r%2Fh93gDOo99%2BO0AHD78yx9zZSiGmmrgnCR7wTZufmX5gWg3vn%2BpSK3RmrsaAB%2F15ciAeg3s7I0x1Ar5cTxmaDLBXDvzZC90K8r8j4eqNy8z0kUSqGD1CncBoVCio2dJ7E43crEFfaIzcmcaloc2Q4TmCHY5k9%2FCW%2BeHWzVmvwmH%2FId10NRRt0n%2FIXf9xgU5zulssH44q7cSaxd7z5jWSvpeHe4eEpXWSbItKEPMrCgo%2F%2FRp5ed%2FqmXF%2Fovo%2FnKAiQJO%2BZbvB8xCGNf7hp%2FWRaRvX3RclYLoa%2BK0pvlzaZkejGtqj65q0ZCAibPdqS6c1K5LAZbzXIROaFtpq%2FHB%2B0V8ydRKpSXBGlDEfuSw8s8mK2sTeNG4WVwdtSeCTz9eueuLRSinDaRa86wnvcya2QsoWDllQzUbys%2BQRhvhCk%2FNZdPA7omBwKslt0jzG%2BKyHEsriZ50X2P%2BoFYMee7FXIbR7ac%2FG3vADLgnjCq2t3zuoycAeyqUd9SWqRfEG6ysHPB3eD%2FwEobXYzMI29C6qc8dHFAIrocz7VQkoDvHa5HTeY9G64XYNSYqnCAtY2UHLUPL%2BwHGz1LuZSerjbQxnnb5a6j7u1gKC2ljRXzNKKOVyTvbKWCL53vL3WqMLSI0MIGOqUBMMKc0F%2Bh2oX%2Bvxlue5%2FpsztJIpnBmrvDQYyF5ulOLf8HYV4Sw2BrkkQds7%2FOGs9TJZd282aL2yTaf6aNy8sUQV03Tr8lLYTpprfEmoM5I0pQC3zt9BhetH2M38ytRSqj7ISd9KFmwXy0LkuIIvWWIGJ2IV7RDdcqTH%2FcZ7LSJizYXBGJyPCBDRGhaSOCH2r1aJwJzCxhv3VRQDbwUcyJ48Fah12p&X-Amz-Signature=b4360644169d837a298168aaf352b6d702bf14b082843b1a5022e588cdd5ff61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662U3JTJB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wesn9cWWDUaqyF0PapSd6SJTqFqno%2FQP9rzbntXpFQIgcZj74kveMrBiHGOxYXbV%2BhP04SW607Hah2bPJMkALqQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV%2BvEZrTmVLNxckMCrcA6r%2Fh93gDOo99%2BO0AHD78yx9zZSiGmmrgnCR7wTZufmX5gWg3vn%2BpSK3RmrsaAB%2F15ciAeg3s7I0x1Ar5cTxmaDLBXDvzZC90K8r8j4eqNy8z0kUSqGD1CncBoVCio2dJ7E43crEFfaIzcmcaloc2Q4TmCHY5k9%2FCW%2BeHWzVmvwmH%2FId10NRRt0n%2FIXf9xgU5zulssH44q7cSaxd7z5jWSvpeHe4eEpXWSbItKEPMrCgo%2F%2FRp5ed%2FqmXF%2Fovo%2FnKAiQJO%2BZbvB8xCGNf7hp%2FWRaRvX3RclYLoa%2BK0pvlzaZkejGtqj65q0ZCAibPdqS6c1K5LAZbzXIROaFtpq%2FHB%2B0V8ydRKpSXBGlDEfuSw8s8mK2sTeNG4WVwdtSeCTz9eueuLRSinDaRa86wnvcya2QsoWDllQzUbys%2BQRhvhCk%2FNZdPA7omBwKslt0jzG%2BKyHEsriZ50X2P%2BoFYMee7FXIbR7ac%2FG3vADLgnjCq2t3zuoycAeyqUd9SWqRfEG6ysHPB3eD%2FwEobXYzMI29C6qc8dHFAIrocz7VQkoDvHa5HTeY9G64XYNSYqnCAtY2UHLUPL%2BwHGz1LuZSerjbQxnnb5a6j7u1gKC2ljRXzNKKOVyTvbKWCL53vL3WqMLSI0MIGOqUBMMKc0F%2Bh2oX%2Bvxlue5%2FpsztJIpnBmrvDQYyF5ulOLf8HYV4Sw2BrkkQds7%2FOGs9TJZd282aL2yTaf6aNy8sUQV03Tr8lLYTpprfEmoM5I0pQC3zt9BhetH2M38ytRSqj7ISd9KFmwXy0LkuIIvWWIGJ2IV7RDdcqTH%2FcZ7LSJizYXBGJyPCBDRGhaSOCH2r1aJwJzCxhv3VRQDbwUcyJ48Fah12p&X-Amz-Signature=46109a378ad7ee71dfa48c5de5ab1dee62dc8b40d037237d313956641e6c1eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662U3JTJB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wesn9cWWDUaqyF0PapSd6SJTqFqno%2FQP9rzbntXpFQIgcZj74kveMrBiHGOxYXbV%2BhP04SW607Hah2bPJMkALqQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV%2BvEZrTmVLNxckMCrcA6r%2Fh93gDOo99%2BO0AHD78yx9zZSiGmmrgnCR7wTZufmX5gWg3vn%2BpSK3RmrsaAB%2F15ciAeg3s7I0x1Ar5cTxmaDLBXDvzZC90K8r8j4eqNy8z0kUSqGD1CncBoVCio2dJ7E43crEFfaIzcmcaloc2Q4TmCHY5k9%2FCW%2BeHWzVmvwmH%2FId10NRRt0n%2FIXf9xgU5zulssH44q7cSaxd7z5jWSvpeHe4eEpXWSbItKEPMrCgo%2F%2FRp5ed%2FqmXF%2Fovo%2FnKAiQJO%2BZbvB8xCGNf7hp%2FWRaRvX3RclYLoa%2BK0pvlzaZkejGtqj65q0ZCAibPdqS6c1K5LAZbzXIROaFtpq%2FHB%2B0V8ydRKpSXBGlDEfuSw8s8mK2sTeNG4WVwdtSeCTz9eueuLRSinDaRa86wnvcya2QsoWDllQzUbys%2BQRhvhCk%2FNZdPA7omBwKslt0jzG%2BKyHEsriZ50X2P%2BoFYMee7FXIbR7ac%2FG3vADLgnjCq2t3zuoycAeyqUd9SWqRfEG6ysHPB3eD%2FwEobXYzMI29C6qc8dHFAIrocz7VQkoDvHa5HTeY9G64XYNSYqnCAtY2UHLUPL%2BwHGz1LuZSerjbQxnnb5a6j7u1gKC2ljRXzNKKOVyTvbKWCL53vL3WqMLSI0MIGOqUBMMKc0F%2Bh2oX%2Bvxlue5%2FpsztJIpnBmrvDQYyF5ulOLf8HYV4Sw2BrkkQds7%2FOGs9TJZd282aL2yTaf6aNy8sUQV03Tr8lLYTpprfEmoM5I0pQC3zt9BhetH2M38ytRSqj7ISd9KFmwXy0LkuIIvWWIGJ2IV7RDdcqTH%2FcZ7LSJizYXBGJyPCBDRGhaSOCH2r1aJwJzCxhv3VRQDbwUcyJ48Fah12p&X-Amz-Signature=2567aa2896b4c0cd480c411a7568cbe53de21917396a4f1ad76d920f3d3059cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662U3JTJB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wesn9cWWDUaqyF0PapSd6SJTqFqno%2FQP9rzbntXpFQIgcZj74kveMrBiHGOxYXbV%2BhP04SW607Hah2bPJMkALqQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV%2BvEZrTmVLNxckMCrcA6r%2Fh93gDOo99%2BO0AHD78yx9zZSiGmmrgnCR7wTZufmX5gWg3vn%2BpSK3RmrsaAB%2F15ciAeg3s7I0x1Ar5cTxmaDLBXDvzZC90K8r8j4eqNy8z0kUSqGD1CncBoVCio2dJ7E43crEFfaIzcmcaloc2Q4TmCHY5k9%2FCW%2BeHWzVmvwmH%2FId10NRRt0n%2FIXf9xgU5zulssH44q7cSaxd7z5jWSvpeHe4eEpXWSbItKEPMrCgo%2F%2FRp5ed%2FqmXF%2Fovo%2FnKAiQJO%2BZbvB8xCGNf7hp%2FWRaRvX3RclYLoa%2BK0pvlzaZkejGtqj65q0ZCAibPdqS6c1K5LAZbzXIROaFtpq%2FHB%2B0V8ydRKpSXBGlDEfuSw8s8mK2sTeNG4WVwdtSeCTz9eueuLRSinDaRa86wnvcya2QsoWDllQzUbys%2BQRhvhCk%2FNZdPA7omBwKslt0jzG%2BKyHEsriZ50X2P%2BoFYMee7FXIbR7ac%2FG3vADLgnjCq2t3zuoycAeyqUd9SWqRfEG6ysHPB3eD%2FwEobXYzMI29C6qc8dHFAIrocz7VQkoDvHa5HTeY9G64XYNSYqnCAtY2UHLUPL%2BwHGz1LuZSerjbQxnnb5a6j7u1gKC2ljRXzNKKOVyTvbKWCL53vL3WqMLSI0MIGOqUBMMKc0F%2Bh2oX%2Bvxlue5%2FpsztJIpnBmrvDQYyF5ulOLf8HYV4Sw2BrkkQds7%2FOGs9TJZd282aL2yTaf6aNy8sUQV03Tr8lLYTpprfEmoM5I0pQC3zt9BhetH2M38ytRSqj7ISd9KFmwXy0LkuIIvWWIGJ2IV7RDdcqTH%2FcZ7LSJizYXBGJyPCBDRGhaSOCH2r1aJwJzCxhv3VRQDbwUcyJ48Fah12p&X-Amz-Signature=3e6a4073f74ee6042943cb79e2d7597c10cb5a1b9c5431fcee1302656921abe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662U3JTJB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wesn9cWWDUaqyF0PapSd6SJTqFqno%2FQP9rzbntXpFQIgcZj74kveMrBiHGOxYXbV%2BhP04SW607Hah2bPJMkALqQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV%2BvEZrTmVLNxckMCrcA6r%2Fh93gDOo99%2BO0AHD78yx9zZSiGmmrgnCR7wTZufmX5gWg3vn%2BpSK3RmrsaAB%2F15ciAeg3s7I0x1Ar5cTxmaDLBXDvzZC90K8r8j4eqNy8z0kUSqGD1CncBoVCio2dJ7E43crEFfaIzcmcaloc2Q4TmCHY5k9%2FCW%2BeHWzVmvwmH%2FId10NRRt0n%2FIXf9xgU5zulssH44q7cSaxd7z5jWSvpeHe4eEpXWSbItKEPMrCgo%2F%2FRp5ed%2FqmXF%2Fovo%2FnKAiQJO%2BZbvB8xCGNf7hp%2FWRaRvX3RclYLoa%2BK0pvlzaZkejGtqj65q0ZCAibPdqS6c1K5LAZbzXIROaFtpq%2FHB%2B0V8ydRKpSXBGlDEfuSw8s8mK2sTeNG4WVwdtSeCTz9eueuLRSinDaRa86wnvcya2QsoWDllQzUbys%2BQRhvhCk%2FNZdPA7omBwKslt0jzG%2BKyHEsriZ50X2P%2BoFYMee7FXIbR7ac%2FG3vADLgnjCq2t3zuoycAeyqUd9SWqRfEG6ysHPB3eD%2FwEobXYzMI29C6qc8dHFAIrocz7VQkoDvHa5HTeY9G64XYNSYqnCAtY2UHLUPL%2BwHGz1LuZSerjbQxnnb5a6j7u1gKC2ljRXzNKKOVyTvbKWCL53vL3WqMLSI0MIGOqUBMMKc0F%2Bh2oX%2Bvxlue5%2FpsztJIpnBmrvDQYyF5ulOLf8HYV4Sw2BrkkQds7%2FOGs9TJZd282aL2yTaf6aNy8sUQV03Tr8lLYTpprfEmoM5I0pQC3zt9BhetH2M38ytRSqj7ISd9KFmwXy0LkuIIvWWIGJ2IV7RDdcqTH%2FcZ7LSJizYXBGJyPCBDRGhaSOCH2r1aJwJzCxhv3VRQDbwUcyJ48Fah12p&X-Amz-Signature=d0e8ec9ef1eda5f02785560dfa9dabb28e7200790eea48d2f1fb5e08e8818018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662U3JTJB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wesn9cWWDUaqyF0PapSd6SJTqFqno%2FQP9rzbntXpFQIgcZj74kveMrBiHGOxYXbV%2BhP04SW607Hah2bPJMkALqQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV%2BvEZrTmVLNxckMCrcA6r%2Fh93gDOo99%2BO0AHD78yx9zZSiGmmrgnCR7wTZufmX5gWg3vn%2BpSK3RmrsaAB%2F15ciAeg3s7I0x1Ar5cTxmaDLBXDvzZC90K8r8j4eqNy8z0kUSqGD1CncBoVCio2dJ7E43crEFfaIzcmcaloc2Q4TmCHY5k9%2FCW%2BeHWzVmvwmH%2FId10NRRt0n%2FIXf9xgU5zulssH44q7cSaxd7z5jWSvpeHe4eEpXWSbItKEPMrCgo%2F%2FRp5ed%2FqmXF%2Fovo%2FnKAiQJO%2BZbvB8xCGNf7hp%2FWRaRvX3RclYLoa%2BK0pvlzaZkejGtqj65q0ZCAibPdqS6c1K5LAZbzXIROaFtpq%2FHB%2B0V8ydRKpSXBGlDEfuSw8s8mK2sTeNG4WVwdtSeCTz9eueuLRSinDaRa86wnvcya2QsoWDllQzUbys%2BQRhvhCk%2FNZdPA7omBwKslt0jzG%2BKyHEsriZ50X2P%2BoFYMee7FXIbR7ac%2FG3vADLgnjCq2t3zuoycAeyqUd9SWqRfEG6ysHPB3eD%2FwEobXYzMI29C6qc8dHFAIrocz7VQkoDvHa5HTeY9G64XYNSYqnCAtY2UHLUPL%2BwHGz1LuZSerjbQxnnb5a6j7u1gKC2ljRXzNKKOVyTvbKWCL53vL3WqMLSI0MIGOqUBMMKc0F%2Bh2oX%2Bvxlue5%2FpsztJIpnBmrvDQYyF5ulOLf8HYV4Sw2BrkkQds7%2FOGs9TJZd282aL2yTaf6aNy8sUQV03Tr8lLYTpprfEmoM5I0pQC3zt9BhetH2M38ytRSqj7ISd9KFmwXy0LkuIIvWWIGJ2IV7RDdcqTH%2FcZ7LSJizYXBGJyPCBDRGhaSOCH2r1aJwJzCxhv3VRQDbwUcyJ48Fah12p&X-Amz-Signature=917359e613351fa8b5f61521258ed4a5eec86103c9e923906a2cb10c0d26c025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662U3JTJB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wesn9cWWDUaqyF0PapSd6SJTqFqno%2FQP9rzbntXpFQIgcZj74kveMrBiHGOxYXbV%2BhP04SW607Hah2bPJMkALqQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV%2BvEZrTmVLNxckMCrcA6r%2Fh93gDOo99%2BO0AHD78yx9zZSiGmmrgnCR7wTZufmX5gWg3vn%2BpSK3RmrsaAB%2F15ciAeg3s7I0x1Ar5cTxmaDLBXDvzZC90K8r8j4eqNy8z0kUSqGD1CncBoVCio2dJ7E43crEFfaIzcmcaloc2Q4TmCHY5k9%2FCW%2BeHWzVmvwmH%2FId10NRRt0n%2FIXf9xgU5zulssH44q7cSaxd7z5jWSvpeHe4eEpXWSbItKEPMrCgo%2F%2FRp5ed%2FqmXF%2Fovo%2FnKAiQJO%2BZbvB8xCGNf7hp%2FWRaRvX3RclYLoa%2BK0pvlzaZkejGtqj65q0ZCAibPdqS6c1K5LAZbzXIROaFtpq%2FHB%2B0V8ydRKpSXBGlDEfuSw8s8mK2sTeNG4WVwdtSeCTz9eueuLRSinDaRa86wnvcya2QsoWDllQzUbys%2BQRhvhCk%2FNZdPA7omBwKslt0jzG%2BKyHEsriZ50X2P%2BoFYMee7FXIbR7ac%2FG3vADLgnjCq2t3zuoycAeyqUd9SWqRfEG6ysHPB3eD%2FwEobXYzMI29C6qc8dHFAIrocz7VQkoDvHa5HTeY9G64XYNSYqnCAtY2UHLUPL%2BwHGz1LuZSerjbQxnnb5a6j7u1gKC2ljRXzNKKOVyTvbKWCL53vL3WqMLSI0MIGOqUBMMKc0F%2Bh2oX%2Bvxlue5%2FpsztJIpnBmrvDQYyF5ulOLf8HYV4Sw2BrkkQds7%2FOGs9TJZd282aL2yTaf6aNy8sUQV03Tr8lLYTpprfEmoM5I0pQC3zt9BhetH2M38ytRSqj7ISd9KFmwXy0LkuIIvWWIGJ2IV7RDdcqTH%2FcZ7LSJizYXBGJyPCBDRGhaSOCH2r1aJwJzCxhv3VRQDbwUcyJ48Fah12p&X-Amz-Signature=8e997ffeaa9acecc25561e9d0e4f10c76aaa58985484c7d5c36dbe6fba7e752b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662U3JTJB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wesn9cWWDUaqyF0PapSd6SJTqFqno%2FQP9rzbntXpFQIgcZj74kveMrBiHGOxYXbV%2BhP04SW607Hah2bPJMkALqQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV%2BvEZrTmVLNxckMCrcA6r%2Fh93gDOo99%2BO0AHD78yx9zZSiGmmrgnCR7wTZufmX5gWg3vn%2BpSK3RmrsaAB%2F15ciAeg3s7I0x1Ar5cTxmaDLBXDvzZC90K8r8j4eqNy8z0kUSqGD1CncBoVCio2dJ7E43crEFfaIzcmcaloc2Q4TmCHY5k9%2FCW%2BeHWzVmvwmH%2FId10NRRt0n%2FIXf9xgU5zulssH44q7cSaxd7z5jWSvpeHe4eEpXWSbItKEPMrCgo%2F%2FRp5ed%2FqmXF%2Fovo%2FnKAiQJO%2BZbvB8xCGNf7hp%2FWRaRvX3RclYLoa%2BK0pvlzaZkejGtqj65q0ZCAibPdqS6c1K5LAZbzXIROaFtpq%2FHB%2B0V8ydRKpSXBGlDEfuSw8s8mK2sTeNG4WVwdtSeCTz9eueuLRSinDaRa86wnvcya2QsoWDllQzUbys%2BQRhvhCk%2FNZdPA7omBwKslt0jzG%2BKyHEsriZ50X2P%2BoFYMee7FXIbR7ac%2FG3vADLgnjCq2t3zuoycAeyqUd9SWqRfEG6ysHPB3eD%2FwEobXYzMI29C6qc8dHFAIrocz7VQkoDvHa5HTeY9G64XYNSYqnCAtY2UHLUPL%2BwHGz1LuZSerjbQxnnb5a6j7u1gKC2ljRXzNKKOVyTvbKWCL53vL3WqMLSI0MIGOqUBMMKc0F%2Bh2oX%2Bvxlue5%2FpsztJIpnBmrvDQYyF5ulOLf8HYV4Sw2BrkkQds7%2FOGs9TJZd282aL2yTaf6aNy8sUQV03Tr8lLYTpprfEmoM5I0pQC3zt9BhetH2M38ytRSqj7ISd9KFmwXy0LkuIIvWWIGJ2IV7RDdcqTH%2FcZ7LSJizYXBGJyPCBDRGhaSOCH2r1aJwJzCxhv3VRQDbwUcyJ48Fah12p&X-Amz-Signature=83d14faa3afe296c1e5a48fd40a0a25676abfb1cfab2e2a2ebc6698cf3e88a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
