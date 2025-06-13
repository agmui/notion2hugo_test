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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2CP5E6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGkOSyMDtiSlaDZ2n0uLJx18Iso3LZ4N4ZJpJBvQuX0bAiEA2830%2FAcEUhwI%2ByVlcLTQkiBtZjCMmPR23tvwl%2B4I698q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJEsPBn95uT0nXiz2CrcA4dZnhn8VsLPB75zt2z%2F5CgxtZ1JAz%2Ft9Dvq02Hc5YUfNFGyy0jCi5z17n6GBgTH7lpJJFDUAO4BBhlNE2YDa%2FAPPC9%2BIZuk6nLui%2Blj2Od2ftPHhEOWfg%2FkRPs%2Fa9Fa9dAAjyf%2BypHMmZ8B%2Fv4GMjRtUJ96lQbrM6KZotiB0VOCCRa6opyM84rfsBGiA3snSWo97Opl5yV1pMgyhB7Fyniwcjq9AtS4a0R4maUZ4cR6Oidvb3FbEpxv3vddGS01q%2BkFMSJowfA4uq6o48J7jh9quQNfJmjOo7BbvTrrzdafQ0wlt86KKjKTFpCE1L8nhM2h7ozJW7ruFxMydNabXbB8%2BGqlSal4G2z7a4EEsO3jT4ae8o7eB2Ji2gDOLAphFeZtRu059Nr6uRJAga6hU%2FHAQYsS9AEANlUpLxYJyaNIpOnsU2m6Sx7tU89i1yJe8ZkTgBDu6C9Xu3oPT0r4u%2FSUYEGS%2FExvMlPTNLbR18OSQ0bUNZ9n9fAxKEd4Bwtv8LBivs2ltgGG1PEZJ%2BSfjacYZyhd661D0WOow0nmdPuO5sR8mXwfS%2F9bvJqm%2Fwh2P1MRC0GtFvdOqX1nqt%2BALrccB3F%2FZljgkQX6qWz1LW2xfHZlX3tGO710TBZdMPeXscIGOqUBy3NHLTFYfq4B8P2KSD0M%2F6WJAMhQhL%2F7JfkaJp4iyDYW%2BpzL0mXXYPkmoLNELHH4tqDt09FEoOtVPDwzQOTCikzp0CvABE%2BbGsnMrPoWbohbPxvLeptRNdl9rX1Qyh6CRMeU2TPsFGK8fkdbc9qXT2rx01GC4az%2FCFTIvf%2FIR8gsqPMmLP1FPgmoePsYtsyd5liiiepaIRatCwEI1mkmX1KPRXLo&X-Amz-Signature=3c765c40d081e51949ae767cb2d6b4073efa98176f9c3a8e45a8fc1d3b7f2b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2CP5E6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGkOSyMDtiSlaDZ2n0uLJx18Iso3LZ4N4ZJpJBvQuX0bAiEA2830%2FAcEUhwI%2ByVlcLTQkiBtZjCMmPR23tvwl%2B4I698q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJEsPBn95uT0nXiz2CrcA4dZnhn8VsLPB75zt2z%2F5CgxtZ1JAz%2Ft9Dvq02Hc5YUfNFGyy0jCi5z17n6GBgTH7lpJJFDUAO4BBhlNE2YDa%2FAPPC9%2BIZuk6nLui%2Blj2Od2ftPHhEOWfg%2FkRPs%2Fa9Fa9dAAjyf%2BypHMmZ8B%2Fv4GMjRtUJ96lQbrM6KZotiB0VOCCRa6opyM84rfsBGiA3snSWo97Opl5yV1pMgyhB7Fyniwcjq9AtS4a0R4maUZ4cR6Oidvb3FbEpxv3vddGS01q%2BkFMSJowfA4uq6o48J7jh9quQNfJmjOo7BbvTrrzdafQ0wlt86KKjKTFpCE1L8nhM2h7ozJW7ruFxMydNabXbB8%2BGqlSal4G2z7a4EEsO3jT4ae8o7eB2Ji2gDOLAphFeZtRu059Nr6uRJAga6hU%2FHAQYsS9AEANlUpLxYJyaNIpOnsU2m6Sx7tU89i1yJe8ZkTgBDu6C9Xu3oPT0r4u%2FSUYEGS%2FExvMlPTNLbR18OSQ0bUNZ9n9fAxKEd4Bwtv8LBivs2ltgGG1PEZJ%2BSfjacYZyhd661D0WOow0nmdPuO5sR8mXwfS%2F9bvJqm%2Fwh2P1MRC0GtFvdOqX1nqt%2BALrccB3F%2FZljgkQX6qWz1LW2xfHZlX3tGO710TBZdMPeXscIGOqUBy3NHLTFYfq4B8P2KSD0M%2F6WJAMhQhL%2F7JfkaJp4iyDYW%2BpzL0mXXYPkmoLNELHH4tqDt09FEoOtVPDwzQOTCikzp0CvABE%2BbGsnMrPoWbohbPxvLeptRNdl9rX1Qyh6CRMeU2TPsFGK8fkdbc9qXT2rx01GC4az%2FCFTIvf%2FIR8gsqPMmLP1FPgmoePsYtsyd5liiiepaIRatCwEI1mkmX1KPRXLo&X-Amz-Signature=ac9f9874efe86a5b635a9fc8e0eca0270cce6f69a5762c5c5496754b83d9b921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2CP5E6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGkOSyMDtiSlaDZ2n0uLJx18Iso3LZ4N4ZJpJBvQuX0bAiEA2830%2FAcEUhwI%2ByVlcLTQkiBtZjCMmPR23tvwl%2B4I698q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJEsPBn95uT0nXiz2CrcA4dZnhn8VsLPB75zt2z%2F5CgxtZ1JAz%2Ft9Dvq02Hc5YUfNFGyy0jCi5z17n6GBgTH7lpJJFDUAO4BBhlNE2YDa%2FAPPC9%2BIZuk6nLui%2Blj2Od2ftPHhEOWfg%2FkRPs%2Fa9Fa9dAAjyf%2BypHMmZ8B%2Fv4GMjRtUJ96lQbrM6KZotiB0VOCCRa6opyM84rfsBGiA3snSWo97Opl5yV1pMgyhB7Fyniwcjq9AtS4a0R4maUZ4cR6Oidvb3FbEpxv3vddGS01q%2BkFMSJowfA4uq6o48J7jh9quQNfJmjOo7BbvTrrzdafQ0wlt86KKjKTFpCE1L8nhM2h7ozJW7ruFxMydNabXbB8%2BGqlSal4G2z7a4EEsO3jT4ae8o7eB2Ji2gDOLAphFeZtRu059Nr6uRJAga6hU%2FHAQYsS9AEANlUpLxYJyaNIpOnsU2m6Sx7tU89i1yJe8ZkTgBDu6C9Xu3oPT0r4u%2FSUYEGS%2FExvMlPTNLbR18OSQ0bUNZ9n9fAxKEd4Bwtv8LBivs2ltgGG1PEZJ%2BSfjacYZyhd661D0WOow0nmdPuO5sR8mXwfS%2F9bvJqm%2Fwh2P1MRC0GtFvdOqX1nqt%2BALrccB3F%2FZljgkQX6qWz1LW2xfHZlX3tGO710TBZdMPeXscIGOqUBy3NHLTFYfq4B8P2KSD0M%2F6WJAMhQhL%2F7JfkaJp4iyDYW%2BpzL0mXXYPkmoLNELHH4tqDt09FEoOtVPDwzQOTCikzp0CvABE%2BbGsnMrPoWbohbPxvLeptRNdl9rX1Qyh6CRMeU2TPsFGK8fkdbc9qXT2rx01GC4az%2FCFTIvf%2FIR8gsqPMmLP1FPgmoePsYtsyd5liiiepaIRatCwEI1mkmX1KPRXLo&X-Amz-Signature=a66924ccaef3181081e21a54f142c3519373986198df95e4acba2ce7306360a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2CP5E6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGkOSyMDtiSlaDZ2n0uLJx18Iso3LZ4N4ZJpJBvQuX0bAiEA2830%2FAcEUhwI%2ByVlcLTQkiBtZjCMmPR23tvwl%2B4I698q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJEsPBn95uT0nXiz2CrcA4dZnhn8VsLPB75zt2z%2F5CgxtZ1JAz%2Ft9Dvq02Hc5YUfNFGyy0jCi5z17n6GBgTH7lpJJFDUAO4BBhlNE2YDa%2FAPPC9%2BIZuk6nLui%2Blj2Od2ftPHhEOWfg%2FkRPs%2Fa9Fa9dAAjyf%2BypHMmZ8B%2Fv4GMjRtUJ96lQbrM6KZotiB0VOCCRa6opyM84rfsBGiA3snSWo97Opl5yV1pMgyhB7Fyniwcjq9AtS4a0R4maUZ4cR6Oidvb3FbEpxv3vddGS01q%2BkFMSJowfA4uq6o48J7jh9quQNfJmjOo7BbvTrrzdafQ0wlt86KKjKTFpCE1L8nhM2h7ozJW7ruFxMydNabXbB8%2BGqlSal4G2z7a4EEsO3jT4ae8o7eB2Ji2gDOLAphFeZtRu059Nr6uRJAga6hU%2FHAQYsS9AEANlUpLxYJyaNIpOnsU2m6Sx7tU89i1yJe8ZkTgBDu6C9Xu3oPT0r4u%2FSUYEGS%2FExvMlPTNLbR18OSQ0bUNZ9n9fAxKEd4Bwtv8LBivs2ltgGG1PEZJ%2BSfjacYZyhd661D0WOow0nmdPuO5sR8mXwfS%2F9bvJqm%2Fwh2P1MRC0GtFvdOqX1nqt%2BALrccB3F%2FZljgkQX6qWz1LW2xfHZlX3tGO710TBZdMPeXscIGOqUBy3NHLTFYfq4B8P2KSD0M%2F6WJAMhQhL%2F7JfkaJp4iyDYW%2BpzL0mXXYPkmoLNELHH4tqDt09FEoOtVPDwzQOTCikzp0CvABE%2BbGsnMrPoWbohbPxvLeptRNdl9rX1Qyh6CRMeU2TPsFGK8fkdbc9qXT2rx01GC4az%2FCFTIvf%2FIR8gsqPMmLP1FPgmoePsYtsyd5liiiepaIRatCwEI1mkmX1KPRXLo&X-Amz-Signature=d57fcb517bb950a73850e8fc80d57d7e3694d776878ff9831eb56c4b4cbfa2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2CP5E6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGkOSyMDtiSlaDZ2n0uLJx18Iso3LZ4N4ZJpJBvQuX0bAiEA2830%2FAcEUhwI%2ByVlcLTQkiBtZjCMmPR23tvwl%2B4I698q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJEsPBn95uT0nXiz2CrcA4dZnhn8VsLPB75zt2z%2F5CgxtZ1JAz%2Ft9Dvq02Hc5YUfNFGyy0jCi5z17n6GBgTH7lpJJFDUAO4BBhlNE2YDa%2FAPPC9%2BIZuk6nLui%2Blj2Od2ftPHhEOWfg%2FkRPs%2Fa9Fa9dAAjyf%2BypHMmZ8B%2Fv4GMjRtUJ96lQbrM6KZotiB0VOCCRa6opyM84rfsBGiA3snSWo97Opl5yV1pMgyhB7Fyniwcjq9AtS4a0R4maUZ4cR6Oidvb3FbEpxv3vddGS01q%2BkFMSJowfA4uq6o48J7jh9quQNfJmjOo7BbvTrrzdafQ0wlt86KKjKTFpCE1L8nhM2h7ozJW7ruFxMydNabXbB8%2BGqlSal4G2z7a4EEsO3jT4ae8o7eB2Ji2gDOLAphFeZtRu059Nr6uRJAga6hU%2FHAQYsS9AEANlUpLxYJyaNIpOnsU2m6Sx7tU89i1yJe8ZkTgBDu6C9Xu3oPT0r4u%2FSUYEGS%2FExvMlPTNLbR18OSQ0bUNZ9n9fAxKEd4Bwtv8LBivs2ltgGG1PEZJ%2BSfjacYZyhd661D0WOow0nmdPuO5sR8mXwfS%2F9bvJqm%2Fwh2P1MRC0GtFvdOqX1nqt%2BALrccB3F%2FZljgkQX6qWz1LW2xfHZlX3tGO710TBZdMPeXscIGOqUBy3NHLTFYfq4B8P2KSD0M%2F6WJAMhQhL%2F7JfkaJp4iyDYW%2BpzL0mXXYPkmoLNELHH4tqDt09FEoOtVPDwzQOTCikzp0CvABE%2BbGsnMrPoWbohbPxvLeptRNdl9rX1Qyh6CRMeU2TPsFGK8fkdbc9qXT2rx01GC4az%2FCFTIvf%2FIR8gsqPMmLP1FPgmoePsYtsyd5liiiepaIRatCwEI1mkmX1KPRXLo&X-Amz-Signature=1f70a3fdc0295ab2a85d95adffc5dc17c708e0f7965e788abd6fc853f3458273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2CP5E6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGkOSyMDtiSlaDZ2n0uLJx18Iso3LZ4N4ZJpJBvQuX0bAiEA2830%2FAcEUhwI%2ByVlcLTQkiBtZjCMmPR23tvwl%2B4I698q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJEsPBn95uT0nXiz2CrcA4dZnhn8VsLPB75zt2z%2F5CgxtZ1JAz%2Ft9Dvq02Hc5YUfNFGyy0jCi5z17n6GBgTH7lpJJFDUAO4BBhlNE2YDa%2FAPPC9%2BIZuk6nLui%2Blj2Od2ftPHhEOWfg%2FkRPs%2Fa9Fa9dAAjyf%2BypHMmZ8B%2Fv4GMjRtUJ96lQbrM6KZotiB0VOCCRa6opyM84rfsBGiA3snSWo97Opl5yV1pMgyhB7Fyniwcjq9AtS4a0R4maUZ4cR6Oidvb3FbEpxv3vddGS01q%2BkFMSJowfA4uq6o48J7jh9quQNfJmjOo7BbvTrrzdafQ0wlt86KKjKTFpCE1L8nhM2h7ozJW7ruFxMydNabXbB8%2BGqlSal4G2z7a4EEsO3jT4ae8o7eB2Ji2gDOLAphFeZtRu059Nr6uRJAga6hU%2FHAQYsS9AEANlUpLxYJyaNIpOnsU2m6Sx7tU89i1yJe8ZkTgBDu6C9Xu3oPT0r4u%2FSUYEGS%2FExvMlPTNLbR18OSQ0bUNZ9n9fAxKEd4Bwtv8LBivs2ltgGG1PEZJ%2BSfjacYZyhd661D0WOow0nmdPuO5sR8mXwfS%2F9bvJqm%2Fwh2P1MRC0GtFvdOqX1nqt%2BALrccB3F%2FZljgkQX6qWz1LW2xfHZlX3tGO710TBZdMPeXscIGOqUBy3NHLTFYfq4B8P2KSD0M%2F6WJAMhQhL%2F7JfkaJp4iyDYW%2BpzL0mXXYPkmoLNELHH4tqDt09FEoOtVPDwzQOTCikzp0CvABE%2BbGsnMrPoWbohbPxvLeptRNdl9rX1Qyh6CRMeU2TPsFGK8fkdbc9qXT2rx01GC4az%2FCFTIvf%2FIR8gsqPMmLP1FPgmoePsYtsyd5liiiepaIRatCwEI1mkmX1KPRXLo&X-Amz-Signature=b821e67560f67bd31a9e01dfdf6ca7d52e4c0787dff32b6ea696bb53191b5672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2CP5E6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGkOSyMDtiSlaDZ2n0uLJx18Iso3LZ4N4ZJpJBvQuX0bAiEA2830%2FAcEUhwI%2ByVlcLTQkiBtZjCMmPR23tvwl%2B4I698q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJEsPBn95uT0nXiz2CrcA4dZnhn8VsLPB75zt2z%2F5CgxtZ1JAz%2Ft9Dvq02Hc5YUfNFGyy0jCi5z17n6GBgTH7lpJJFDUAO4BBhlNE2YDa%2FAPPC9%2BIZuk6nLui%2Blj2Od2ftPHhEOWfg%2FkRPs%2Fa9Fa9dAAjyf%2BypHMmZ8B%2Fv4GMjRtUJ96lQbrM6KZotiB0VOCCRa6opyM84rfsBGiA3snSWo97Opl5yV1pMgyhB7Fyniwcjq9AtS4a0R4maUZ4cR6Oidvb3FbEpxv3vddGS01q%2BkFMSJowfA4uq6o48J7jh9quQNfJmjOo7BbvTrrzdafQ0wlt86KKjKTFpCE1L8nhM2h7ozJW7ruFxMydNabXbB8%2BGqlSal4G2z7a4EEsO3jT4ae8o7eB2Ji2gDOLAphFeZtRu059Nr6uRJAga6hU%2FHAQYsS9AEANlUpLxYJyaNIpOnsU2m6Sx7tU89i1yJe8ZkTgBDu6C9Xu3oPT0r4u%2FSUYEGS%2FExvMlPTNLbR18OSQ0bUNZ9n9fAxKEd4Bwtv8LBivs2ltgGG1PEZJ%2BSfjacYZyhd661D0WOow0nmdPuO5sR8mXwfS%2F9bvJqm%2Fwh2P1MRC0GtFvdOqX1nqt%2BALrccB3F%2FZljgkQX6qWz1LW2xfHZlX3tGO710TBZdMPeXscIGOqUBy3NHLTFYfq4B8P2KSD0M%2F6WJAMhQhL%2F7JfkaJp4iyDYW%2BpzL0mXXYPkmoLNELHH4tqDt09FEoOtVPDwzQOTCikzp0CvABE%2BbGsnMrPoWbohbPxvLeptRNdl9rX1Qyh6CRMeU2TPsFGK8fkdbc9qXT2rx01GC4az%2FCFTIvf%2FIR8gsqPMmLP1FPgmoePsYtsyd5liiiepaIRatCwEI1mkmX1KPRXLo&X-Amz-Signature=84cb7170b7805a62cb32a3cfe0c01c9dcf755220f5e98c64e16081a63a617fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2CP5E6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGkOSyMDtiSlaDZ2n0uLJx18Iso3LZ4N4ZJpJBvQuX0bAiEA2830%2FAcEUhwI%2ByVlcLTQkiBtZjCMmPR23tvwl%2B4I698q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJEsPBn95uT0nXiz2CrcA4dZnhn8VsLPB75zt2z%2F5CgxtZ1JAz%2Ft9Dvq02Hc5YUfNFGyy0jCi5z17n6GBgTH7lpJJFDUAO4BBhlNE2YDa%2FAPPC9%2BIZuk6nLui%2Blj2Od2ftPHhEOWfg%2FkRPs%2Fa9Fa9dAAjyf%2BypHMmZ8B%2Fv4GMjRtUJ96lQbrM6KZotiB0VOCCRa6opyM84rfsBGiA3snSWo97Opl5yV1pMgyhB7Fyniwcjq9AtS4a0R4maUZ4cR6Oidvb3FbEpxv3vddGS01q%2BkFMSJowfA4uq6o48J7jh9quQNfJmjOo7BbvTrrzdafQ0wlt86KKjKTFpCE1L8nhM2h7ozJW7ruFxMydNabXbB8%2BGqlSal4G2z7a4EEsO3jT4ae8o7eB2Ji2gDOLAphFeZtRu059Nr6uRJAga6hU%2FHAQYsS9AEANlUpLxYJyaNIpOnsU2m6Sx7tU89i1yJe8ZkTgBDu6C9Xu3oPT0r4u%2FSUYEGS%2FExvMlPTNLbR18OSQ0bUNZ9n9fAxKEd4Bwtv8LBivs2ltgGG1PEZJ%2BSfjacYZyhd661D0WOow0nmdPuO5sR8mXwfS%2F9bvJqm%2Fwh2P1MRC0GtFvdOqX1nqt%2BALrccB3F%2FZljgkQX6qWz1LW2xfHZlX3tGO710TBZdMPeXscIGOqUBy3NHLTFYfq4B8P2KSD0M%2F6WJAMhQhL%2F7JfkaJp4iyDYW%2BpzL0mXXYPkmoLNELHH4tqDt09FEoOtVPDwzQOTCikzp0CvABE%2BbGsnMrPoWbohbPxvLeptRNdl9rX1Qyh6CRMeU2TPsFGK8fkdbc9qXT2rx01GC4az%2FCFTIvf%2FIR8gsqPMmLP1FPgmoePsYtsyd5liiiepaIRatCwEI1mkmX1KPRXLo&X-Amz-Signature=bd6413dc185c7e85166de8adfd7b97c48c6d59796594c79c955aff1eb1c82d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
