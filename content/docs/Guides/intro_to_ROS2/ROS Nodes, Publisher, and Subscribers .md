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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQIJGJK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7OJToqcgEpcVCX1XdOrc5tk9H7p7bYi3lLdGuQb%2FMdAiBK8dlgJLF4Y66q6LzFUMZhdMkZsdyGqJ0zgxy4PGb1pir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMrb4OwtQzKpqqG4AQKtwDAjsIv0X5hojsMRoNv8BVJzU6ZnOtpQklxkSNaulPtQ0J2B07cxSGKelQoee3um%2F9TkL0T6IEvyzGKmMt4UJBqmRME1%2Bgcd9JZUgGD%2FwskprFe2DW4cOrk5gmz46yILpk1ScTE3gstiOemmruncpde5yOeZUFFZ2r1PRvEPb4lRilV4ANySinZnXDcHT1WdcCRI3Yyle8GaqIPtxGhmuuGBvmUNrfbxAOFSBIF%2FDxV580bdnYKFU1beLRfWSIEZd%2BoOmlg9Bo5sJnhXP3qcIf9J83VLCKAGibxns7IzDYaByAvn91aBF4iKSAls4bX3xZeOfWJqC1baDyWGryCmSFLzQMGiGjct8jB1HRwNg35M%2B2kV7keo%2BiHVPu5UjVZ9ViiMDZrhf2k5oLlqRuXryU5h8SboSHYTeiKMsMKXUZQtqGoLidVA9bxsWiQ8Pgk8pNldusEecctUpxYApHdjv5RZOAxnwtN87er%2F%2BT7Lucrb1JRx8Bps%2F%2BDVDxGe6ytosf7V73EAAepSAoVleAGytcgVycI0cDxIQ%2BX9W5IRrTn%2Fg6YKMO3fhfgQiqOZKvigOdTkXqjIOX48VbAznQUFtOgdC%2F%2BrBUUCauRR6LBhfRcIffbfckLdQkY6Yat%2BQwgYmZwwY6pgE6tqqnRsQI0OcMlaCN3BNJ7%2Fa0Uz9KGGjbR9OFYoHHQEl2U%2FHf4%2FFBjuL2ocRndhLzCnHQ%2FwXTaFb2xOdCmz6Bfi%2B0ZyCoxbyU0QGSGcISDOxmnn47x3jbRT6G6%2FSbkktFel1SzxUZTOMqSW%2F7wmwH54C3%2FoA%2F4AZAE0EfrKttb4IFxPGojAyDIpti5e3HaO93BmcuJsXMNj6f2Boxwoac95tRQI6U&X-Amz-Signature=3a6bdc771e3e2121ab645fa9a318357afb0c5b8ade81caf5d305814cba3c479b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQIJGJK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7OJToqcgEpcVCX1XdOrc5tk9H7p7bYi3lLdGuQb%2FMdAiBK8dlgJLF4Y66q6LzFUMZhdMkZsdyGqJ0zgxy4PGb1pir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMrb4OwtQzKpqqG4AQKtwDAjsIv0X5hojsMRoNv8BVJzU6ZnOtpQklxkSNaulPtQ0J2B07cxSGKelQoee3um%2F9TkL0T6IEvyzGKmMt4UJBqmRME1%2Bgcd9JZUgGD%2FwskprFe2DW4cOrk5gmz46yILpk1ScTE3gstiOemmruncpde5yOeZUFFZ2r1PRvEPb4lRilV4ANySinZnXDcHT1WdcCRI3Yyle8GaqIPtxGhmuuGBvmUNrfbxAOFSBIF%2FDxV580bdnYKFU1beLRfWSIEZd%2BoOmlg9Bo5sJnhXP3qcIf9J83VLCKAGibxns7IzDYaByAvn91aBF4iKSAls4bX3xZeOfWJqC1baDyWGryCmSFLzQMGiGjct8jB1HRwNg35M%2B2kV7keo%2BiHVPu5UjVZ9ViiMDZrhf2k5oLlqRuXryU5h8SboSHYTeiKMsMKXUZQtqGoLidVA9bxsWiQ8Pgk8pNldusEecctUpxYApHdjv5RZOAxnwtN87er%2F%2BT7Lucrb1JRx8Bps%2F%2BDVDxGe6ytosf7V73EAAepSAoVleAGytcgVycI0cDxIQ%2BX9W5IRrTn%2Fg6YKMO3fhfgQiqOZKvigOdTkXqjIOX48VbAznQUFtOgdC%2F%2BrBUUCauRR6LBhfRcIffbfckLdQkY6Yat%2BQwgYmZwwY6pgE6tqqnRsQI0OcMlaCN3BNJ7%2Fa0Uz9KGGjbR9OFYoHHQEl2U%2FHf4%2FFBjuL2ocRndhLzCnHQ%2FwXTaFb2xOdCmz6Bfi%2B0ZyCoxbyU0QGSGcISDOxmnn47x3jbRT6G6%2FSbkktFel1SzxUZTOMqSW%2F7wmwH54C3%2FoA%2F4AZAE0EfrKttb4IFxPGojAyDIpti5e3HaO93BmcuJsXMNj6f2Boxwoac95tRQI6U&X-Amz-Signature=ceac266544f823b8d5e677788bd1d2558103484f9ac0d517d492a2adcefc2110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQIJGJK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7OJToqcgEpcVCX1XdOrc5tk9H7p7bYi3lLdGuQb%2FMdAiBK8dlgJLF4Y66q6LzFUMZhdMkZsdyGqJ0zgxy4PGb1pir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMrb4OwtQzKpqqG4AQKtwDAjsIv0X5hojsMRoNv8BVJzU6ZnOtpQklxkSNaulPtQ0J2B07cxSGKelQoee3um%2F9TkL0T6IEvyzGKmMt4UJBqmRME1%2Bgcd9JZUgGD%2FwskprFe2DW4cOrk5gmz46yILpk1ScTE3gstiOemmruncpde5yOeZUFFZ2r1PRvEPb4lRilV4ANySinZnXDcHT1WdcCRI3Yyle8GaqIPtxGhmuuGBvmUNrfbxAOFSBIF%2FDxV580bdnYKFU1beLRfWSIEZd%2BoOmlg9Bo5sJnhXP3qcIf9J83VLCKAGibxns7IzDYaByAvn91aBF4iKSAls4bX3xZeOfWJqC1baDyWGryCmSFLzQMGiGjct8jB1HRwNg35M%2B2kV7keo%2BiHVPu5UjVZ9ViiMDZrhf2k5oLlqRuXryU5h8SboSHYTeiKMsMKXUZQtqGoLidVA9bxsWiQ8Pgk8pNldusEecctUpxYApHdjv5RZOAxnwtN87er%2F%2BT7Lucrb1JRx8Bps%2F%2BDVDxGe6ytosf7V73EAAepSAoVleAGytcgVycI0cDxIQ%2BX9W5IRrTn%2Fg6YKMO3fhfgQiqOZKvigOdTkXqjIOX48VbAznQUFtOgdC%2F%2BrBUUCauRR6LBhfRcIffbfckLdQkY6Yat%2BQwgYmZwwY6pgE6tqqnRsQI0OcMlaCN3BNJ7%2Fa0Uz9KGGjbR9OFYoHHQEl2U%2FHf4%2FFBjuL2ocRndhLzCnHQ%2FwXTaFb2xOdCmz6Bfi%2B0ZyCoxbyU0QGSGcISDOxmnn47x3jbRT6G6%2FSbkktFel1SzxUZTOMqSW%2F7wmwH54C3%2FoA%2F4AZAE0EfrKttb4IFxPGojAyDIpti5e3HaO93BmcuJsXMNj6f2Boxwoac95tRQI6U&X-Amz-Signature=29c96beb9f5a6380578c6ffa0b9086bdb36421a2199622d0c767f28fd6eba573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQIJGJK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7OJToqcgEpcVCX1XdOrc5tk9H7p7bYi3lLdGuQb%2FMdAiBK8dlgJLF4Y66q6LzFUMZhdMkZsdyGqJ0zgxy4PGb1pir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMrb4OwtQzKpqqG4AQKtwDAjsIv0X5hojsMRoNv8BVJzU6ZnOtpQklxkSNaulPtQ0J2B07cxSGKelQoee3um%2F9TkL0T6IEvyzGKmMt4UJBqmRME1%2Bgcd9JZUgGD%2FwskprFe2DW4cOrk5gmz46yILpk1ScTE3gstiOemmruncpde5yOeZUFFZ2r1PRvEPb4lRilV4ANySinZnXDcHT1WdcCRI3Yyle8GaqIPtxGhmuuGBvmUNrfbxAOFSBIF%2FDxV580bdnYKFU1beLRfWSIEZd%2BoOmlg9Bo5sJnhXP3qcIf9J83VLCKAGibxns7IzDYaByAvn91aBF4iKSAls4bX3xZeOfWJqC1baDyWGryCmSFLzQMGiGjct8jB1HRwNg35M%2B2kV7keo%2BiHVPu5UjVZ9ViiMDZrhf2k5oLlqRuXryU5h8SboSHYTeiKMsMKXUZQtqGoLidVA9bxsWiQ8Pgk8pNldusEecctUpxYApHdjv5RZOAxnwtN87er%2F%2BT7Lucrb1JRx8Bps%2F%2BDVDxGe6ytosf7V73EAAepSAoVleAGytcgVycI0cDxIQ%2BX9W5IRrTn%2Fg6YKMO3fhfgQiqOZKvigOdTkXqjIOX48VbAznQUFtOgdC%2F%2BrBUUCauRR6LBhfRcIffbfckLdQkY6Yat%2BQwgYmZwwY6pgE6tqqnRsQI0OcMlaCN3BNJ7%2Fa0Uz9KGGjbR9OFYoHHQEl2U%2FHf4%2FFBjuL2ocRndhLzCnHQ%2FwXTaFb2xOdCmz6Bfi%2B0ZyCoxbyU0QGSGcISDOxmnn47x3jbRT6G6%2FSbkktFel1SzxUZTOMqSW%2F7wmwH54C3%2FoA%2F4AZAE0EfrKttb4IFxPGojAyDIpti5e3HaO93BmcuJsXMNj6f2Boxwoac95tRQI6U&X-Amz-Signature=71f90ac7d72da0050f3e1746652222b702f2d8f754e0a4fb98acee86abc81a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQIJGJK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7OJToqcgEpcVCX1XdOrc5tk9H7p7bYi3lLdGuQb%2FMdAiBK8dlgJLF4Y66q6LzFUMZhdMkZsdyGqJ0zgxy4PGb1pir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMrb4OwtQzKpqqG4AQKtwDAjsIv0X5hojsMRoNv8BVJzU6ZnOtpQklxkSNaulPtQ0J2B07cxSGKelQoee3um%2F9TkL0T6IEvyzGKmMt4UJBqmRME1%2Bgcd9JZUgGD%2FwskprFe2DW4cOrk5gmz46yILpk1ScTE3gstiOemmruncpde5yOeZUFFZ2r1PRvEPb4lRilV4ANySinZnXDcHT1WdcCRI3Yyle8GaqIPtxGhmuuGBvmUNrfbxAOFSBIF%2FDxV580bdnYKFU1beLRfWSIEZd%2BoOmlg9Bo5sJnhXP3qcIf9J83VLCKAGibxns7IzDYaByAvn91aBF4iKSAls4bX3xZeOfWJqC1baDyWGryCmSFLzQMGiGjct8jB1HRwNg35M%2B2kV7keo%2BiHVPu5UjVZ9ViiMDZrhf2k5oLlqRuXryU5h8SboSHYTeiKMsMKXUZQtqGoLidVA9bxsWiQ8Pgk8pNldusEecctUpxYApHdjv5RZOAxnwtN87er%2F%2BT7Lucrb1JRx8Bps%2F%2BDVDxGe6ytosf7V73EAAepSAoVleAGytcgVycI0cDxIQ%2BX9W5IRrTn%2Fg6YKMO3fhfgQiqOZKvigOdTkXqjIOX48VbAznQUFtOgdC%2F%2BrBUUCauRR6LBhfRcIffbfckLdQkY6Yat%2BQwgYmZwwY6pgE6tqqnRsQI0OcMlaCN3BNJ7%2Fa0Uz9KGGjbR9OFYoHHQEl2U%2FHf4%2FFBjuL2ocRndhLzCnHQ%2FwXTaFb2xOdCmz6Bfi%2B0ZyCoxbyU0QGSGcISDOxmnn47x3jbRT6G6%2FSbkktFel1SzxUZTOMqSW%2F7wmwH54C3%2FoA%2F4AZAE0EfrKttb4IFxPGojAyDIpti5e3HaO93BmcuJsXMNj6f2Boxwoac95tRQI6U&X-Amz-Signature=5680dbab7c97423883f235ae3dd4fe155f68218467b5c9bade0d739c16b83985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQIJGJK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7OJToqcgEpcVCX1XdOrc5tk9H7p7bYi3lLdGuQb%2FMdAiBK8dlgJLF4Y66q6LzFUMZhdMkZsdyGqJ0zgxy4PGb1pir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMrb4OwtQzKpqqG4AQKtwDAjsIv0X5hojsMRoNv8BVJzU6ZnOtpQklxkSNaulPtQ0J2B07cxSGKelQoee3um%2F9TkL0T6IEvyzGKmMt4UJBqmRME1%2Bgcd9JZUgGD%2FwskprFe2DW4cOrk5gmz46yILpk1ScTE3gstiOemmruncpde5yOeZUFFZ2r1PRvEPb4lRilV4ANySinZnXDcHT1WdcCRI3Yyle8GaqIPtxGhmuuGBvmUNrfbxAOFSBIF%2FDxV580bdnYKFU1beLRfWSIEZd%2BoOmlg9Bo5sJnhXP3qcIf9J83VLCKAGibxns7IzDYaByAvn91aBF4iKSAls4bX3xZeOfWJqC1baDyWGryCmSFLzQMGiGjct8jB1HRwNg35M%2B2kV7keo%2BiHVPu5UjVZ9ViiMDZrhf2k5oLlqRuXryU5h8SboSHYTeiKMsMKXUZQtqGoLidVA9bxsWiQ8Pgk8pNldusEecctUpxYApHdjv5RZOAxnwtN87er%2F%2BT7Lucrb1JRx8Bps%2F%2BDVDxGe6ytosf7V73EAAepSAoVleAGytcgVycI0cDxIQ%2BX9W5IRrTn%2Fg6YKMO3fhfgQiqOZKvigOdTkXqjIOX48VbAznQUFtOgdC%2F%2BrBUUCauRR6LBhfRcIffbfckLdQkY6Yat%2BQwgYmZwwY6pgE6tqqnRsQI0OcMlaCN3BNJ7%2Fa0Uz9KGGjbR9OFYoHHQEl2U%2FHf4%2FFBjuL2ocRndhLzCnHQ%2FwXTaFb2xOdCmz6Bfi%2B0ZyCoxbyU0QGSGcISDOxmnn47x3jbRT6G6%2FSbkktFel1SzxUZTOMqSW%2F7wmwH54C3%2FoA%2F4AZAE0EfrKttb4IFxPGojAyDIpti5e3HaO93BmcuJsXMNj6f2Boxwoac95tRQI6U&X-Amz-Signature=851a22b9a812419507543b138df32b7f2f8b4a5bb7ec7cc9565c0e618e6312e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQIJGJK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7OJToqcgEpcVCX1XdOrc5tk9H7p7bYi3lLdGuQb%2FMdAiBK8dlgJLF4Y66q6LzFUMZhdMkZsdyGqJ0zgxy4PGb1pir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMrb4OwtQzKpqqG4AQKtwDAjsIv0X5hojsMRoNv8BVJzU6ZnOtpQklxkSNaulPtQ0J2B07cxSGKelQoee3um%2F9TkL0T6IEvyzGKmMt4UJBqmRME1%2Bgcd9JZUgGD%2FwskprFe2DW4cOrk5gmz46yILpk1ScTE3gstiOemmruncpde5yOeZUFFZ2r1PRvEPb4lRilV4ANySinZnXDcHT1WdcCRI3Yyle8GaqIPtxGhmuuGBvmUNrfbxAOFSBIF%2FDxV580bdnYKFU1beLRfWSIEZd%2BoOmlg9Bo5sJnhXP3qcIf9J83VLCKAGibxns7IzDYaByAvn91aBF4iKSAls4bX3xZeOfWJqC1baDyWGryCmSFLzQMGiGjct8jB1HRwNg35M%2B2kV7keo%2BiHVPu5UjVZ9ViiMDZrhf2k5oLlqRuXryU5h8SboSHYTeiKMsMKXUZQtqGoLidVA9bxsWiQ8Pgk8pNldusEecctUpxYApHdjv5RZOAxnwtN87er%2F%2BT7Lucrb1JRx8Bps%2F%2BDVDxGe6ytosf7V73EAAepSAoVleAGytcgVycI0cDxIQ%2BX9W5IRrTn%2Fg6YKMO3fhfgQiqOZKvigOdTkXqjIOX48VbAznQUFtOgdC%2F%2BrBUUCauRR6LBhfRcIffbfckLdQkY6Yat%2BQwgYmZwwY6pgE6tqqnRsQI0OcMlaCN3BNJ7%2Fa0Uz9KGGjbR9OFYoHHQEl2U%2FHf4%2FFBjuL2ocRndhLzCnHQ%2FwXTaFb2xOdCmz6Bfi%2B0ZyCoxbyU0QGSGcISDOxmnn47x3jbRT6G6%2FSbkktFel1SzxUZTOMqSW%2F7wmwH54C3%2FoA%2F4AZAE0EfrKttb4IFxPGojAyDIpti5e3HaO93BmcuJsXMNj6f2Boxwoac95tRQI6U&X-Amz-Signature=4426bb7d139a10e88cebe778169e32ae0623fcc10dd664d67ece8f9927dad9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQIJGJK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID7OJToqcgEpcVCX1XdOrc5tk9H7p7bYi3lLdGuQb%2FMdAiBK8dlgJLF4Y66q6LzFUMZhdMkZsdyGqJ0zgxy4PGb1pir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMrb4OwtQzKpqqG4AQKtwDAjsIv0X5hojsMRoNv8BVJzU6ZnOtpQklxkSNaulPtQ0J2B07cxSGKelQoee3um%2F9TkL0T6IEvyzGKmMt4UJBqmRME1%2Bgcd9JZUgGD%2FwskprFe2DW4cOrk5gmz46yILpk1ScTE3gstiOemmruncpde5yOeZUFFZ2r1PRvEPb4lRilV4ANySinZnXDcHT1WdcCRI3Yyle8GaqIPtxGhmuuGBvmUNrfbxAOFSBIF%2FDxV580bdnYKFU1beLRfWSIEZd%2BoOmlg9Bo5sJnhXP3qcIf9J83VLCKAGibxns7IzDYaByAvn91aBF4iKSAls4bX3xZeOfWJqC1baDyWGryCmSFLzQMGiGjct8jB1HRwNg35M%2B2kV7keo%2BiHVPu5UjVZ9ViiMDZrhf2k5oLlqRuXryU5h8SboSHYTeiKMsMKXUZQtqGoLidVA9bxsWiQ8Pgk8pNldusEecctUpxYApHdjv5RZOAxnwtN87er%2F%2BT7Lucrb1JRx8Bps%2F%2BDVDxGe6ytosf7V73EAAepSAoVleAGytcgVycI0cDxIQ%2BX9W5IRrTn%2Fg6YKMO3fhfgQiqOZKvigOdTkXqjIOX48VbAznQUFtOgdC%2F%2BrBUUCauRR6LBhfRcIffbfckLdQkY6Yat%2BQwgYmZwwY6pgE6tqqnRsQI0OcMlaCN3BNJ7%2Fa0Uz9KGGjbR9OFYoHHQEl2U%2FHf4%2FFBjuL2ocRndhLzCnHQ%2FwXTaFb2xOdCmz6Bfi%2B0ZyCoxbyU0QGSGcISDOxmnn47x3jbRT6G6%2FSbkktFel1SzxUZTOMqSW%2F7wmwH54C3%2FoA%2F4AZAE0EfrKttb4IFxPGojAyDIpti5e3HaO93BmcuJsXMNj6f2Boxwoac95tRQI6U&X-Amz-Signature=b050cc5d4eb4928797690738d882f705fd5c4466c9a402c3612b1bda1675238b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
