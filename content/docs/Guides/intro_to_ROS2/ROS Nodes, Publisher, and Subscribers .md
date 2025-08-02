---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BM34WDQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdXCsCecSNekdbZSPm0cIlj9jrEEZP0XHe5TFXUaB2MAiA12htvKPt0HlPCZrB40kmSbcALq3%2BPY092DbCnCNjf2SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkq1ZNzJLBwwDRF%2BzKtwDMHXlXK%2FSR92jEsg41zoJshfzQT%2B%2FwKmrtsmi1izrU68yuMvbc468RvhnWKbKEplc9BbP6QYJAqJ1O54FKA1%2B6VMdUlwJJQRS0btCDEgr2F4vj%2FM270lR8O%2FGJTwvJ26oqIBEhMLSdvyXouvgPcR0R4LYYdHt7J%2FWnl1UgjfJgrXmYBuSLdVVmwnZwkCYBGM9Lj%2BK%2FRsv8M79VD2LHQAGCkB30b%2FLGuCPOKc6pfkrl46UmRXBrK8%2Bc2PlS5imSWEdw0%2FMTxJDle7OvMwiFOI%2Fey4eG0u%2B2qdH1cdqgDEirNKW%2BHHZe1Tlpq9VkBa7CjXmncCT18ndlZlaNnxv7ft56aCquWpxMTVgtx18hXG%2Fhy%2FSaQ5bnGKgV55LznrhEN%2Bjs1XmiXjB1AYEqekuLvMwHV6wDs36a%2FYxbCkN94xChjWRBSS3WET0KrLGfFnIgyx9qkRjf9oGM3261EFoRsTAHZ%2FweXbOnXbcWhw21UerGFfeiMx6xv41wmq5nupwf2j6wcsdeuayWUimmrKSZMwQzyQGuVQTBSPTE721LOKsJTlo%2Bv%2F6uhfWywYlcCaqwDkBdJ%2B%2Fub7HrpszXHdoU72zXbpuQk05wX7ASDnJm2v5TqNTbC%2BPYesLeu6yFJsw9qy1xAY6pgHVp9f1gmjdJlviNOo%2BNgF8ndfx2D62xsmiNtCv3aoqMVOYguOYw8ZuqPLB0FtpqV6obOSPdpzZJuRhXY6SaFLtlyrMCuXVotonNkOjaraZryQvgFEvUB8rMVOYzzoD8kfnkkF3l1Tcmeb%2BhfJe3oAJxMiYkDsHUkbpoZFwZ0r9LafgJ9FORU%2BeujAkYGed3jSwSweb13ini2s98DyLzum0euMaiC1s&X-Amz-Signature=92de940eeb078e0ccb4e8f13702b5e9f4a2e7f2bb8f36684278bb203ad630659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BM34WDQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdXCsCecSNekdbZSPm0cIlj9jrEEZP0XHe5TFXUaB2MAiA12htvKPt0HlPCZrB40kmSbcALq3%2BPY092DbCnCNjf2SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkq1ZNzJLBwwDRF%2BzKtwDMHXlXK%2FSR92jEsg41zoJshfzQT%2B%2FwKmrtsmi1izrU68yuMvbc468RvhnWKbKEplc9BbP6QYJAqJ1O54FKA1%2B6VMdUlwJJQRS0btCDEgr2F4vj%2FM270lR8O%2FGJTwvJ26oqIBEhMLSdvyXouvgPcR0R4LYYdHt7J%2FWnl1UgjfJgrXmYBuSLdVVmwnZwkCYBGM9Lj%2BK%2FRsv8M79VD2LHQAGCkB30b%2FLGuCPOKc6pfkrl46UmRXBrK8%2Bc2PlS5imSWEdw0%2FMTxJDle7OvMwiFOI%2Fey4eG0u%2B2qdH1cdqgDEirNKW%2BHHZe1Tlpq9VkBa7CjXmncCT18ndlZlaNnxv7ft56aCquWpxMTVgtx18hXG%2Fhy%2FSaQ5bnGKgV55LznrhEN%2Bjs1XmiXjB1AYEqekuLvMwHV6wDs36a%2FYxbCkN94xChjWRBSS3WET0KrLGfFnIgyx9qkRjf9oGM3261EFoRsTAHZ%2FweXbOnXbcWhw21UerGFfeiMx6xv41wmq5nupwf2j6wcsdeuayWUimmrKSZMwQzyQGuVQTBSPTE721LOKsJTlo%2Bv%2F6uhfWywYlcCaqwDkBdJ%2B%2Fub7HrpszXHdoU72zXbpuQk05wX7ASDnJm2v5TqNTbC%2BPYesLeu6yFJsw9qy1xAY6pgHVp9f1gmjdJlviNOo%2BNgF8ndfx2D62xsmiNtCv3aoqMVOYguOYw8ZuqPLB0FtpqV6obOSPdpzZJuRhXY6SaFLtlyrMCuXVotonNkOjaraZryQvgFEvUB8rMVOYzzoD8kfnkkF3l1Tcmeb%2BhfJe3oAJxMiYkDsHUkbpoZFwZ0r9LafgJ9FORU%2BeujAkYGed3jSwSweb13ini2s98DyLzum0euMaiC1s&X-Amz-Signature=9fbf32ce331c99b2687510447162953a68531838beed01e9639f268e43cde2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BM34WDQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdXCsCecSNekdbZSPm0cIlj9jrEEZP0XHe5TFXUaB2MAiA12htvKPt0HlPCZrB40kmSbcALq3%2BPY092DbCnCNjf2SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkq1ZNzJLBwwDRF%2BzKtwDMHXlXK%2FSR92jEsg41zoJshfzQT%2B%2FwKmrtsmi1izrU68yuMvbc468RvhnWKbKEplc9BbP6QYJAqJ1O54FKA1%2B6VMdUlwJJQRS0btCDEgr2F4vj%2FM270lR8O%2FGJTwvJ26oqIBEhMLSdvyXouvgPcR0R4LYYdHt7J%2FWnl1UgjfJgrXmYBuSLdVVmwnZwkCYBGM9Lj%2BK%2FRsv8M79VD2LHQAGCkB30b%2FLGuCPOKc6pfkrl46UmRXBrK8%2Bc2PlS5imSWEdw0%2FMTxJDle7OvMwiFOI%2Fey4eG0u%2B2qdH1cdqgDEirNKW%2BHHZe1Tlpq9VkBa7CjXmncCT18ndlZlaNnxv7ft56aCquWpxMTVgtx18hXG%2Fhy%2FSaQ5bnGKgV55LznrhEN%2Bjs1XmiXjB1AYEqekuLvMwHV6wDs36a%2FYxbCkN94xChjWRBSS3WET0KrLGfFnIgyx9qkRjf9oGM3261EFoRsTAHZ%2FweXbOnXbcWhw21UerGFfeiMx6xv41wmq5nupwf2j6wcsdeuayWUimmrKSZMwQzyQGuVQTBSPTE721LOKsJTlo%2Bv%2F6uhfWywYlcCaqwDkBdJ%2B%2Fub7HrpszXHdoU72zXbpuQk05wX7ASDnJm2v5TqNTbC%2BPYesLeu6yFJsw9qy1xAY6pgHVp9f1gmjdJlviNOo%2BNgF8ndfx2D62xsmiNtCv3aoqMVOYguOYw8ZuqPLB0FtpqV6obOSPdpzZJuRhXY6SaFLtlyrMCuXVotonNkOjaraZryQvgFEvUB8rMVOYzzoD8kfnkkF3l1Tcmeb%2BhfJe3oAJxMiYkDsHUkbpoZFwZ0r9LafgJ9FORU%2BeujAkYGed3jSwSweb13ini2s98DyLzum0euMaiC1s&X-Amz-Signature=3ca3011b23a6060d069b059a8c0942824d25bbc15cc53574475ab6d94d99f4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BM34WDQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdXCsCecSNekdbZSPm0cIlj9jrEEZP0XHe5TFXUaB2MAiA12htvKPt0HlPCZrB40kmSbcALq3%2BPY092DbCnCNjf2SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkq1ZNzJLBwwDRF%2BzKtwDMHXlXK%2FSR92jEsg41zoJshfzQT%2B%2FwKmrtsmi1izrU68yuMvbc468RvhnWKbKEplc9BbP6QYJAqJ1O54FKA1%2B6VMdUlwJJQRS0btCDEgr2F4vj%2FM270lR8O%2FGJTwvJ26oqIBEhMLSdvyXouvgPcR0R4LYYdHt7J%2FWnl1UgjfJgrXmYBuSLdVVmwnZwkCYBGM9Lj%2BK%2FRsv8M79VD2LHQAGCkB30b%2FLGuCPOKc6pfkrl46UmRXBrK8%2Bc2PlS5imSWEdw0%2FMTxJDle7OvMwiFOI%2Fey4eG0u%2B2qdH1cdqgDEirNKW%2BHHZe1Tlpq9VkBa7CjXmncCT18ndlZlaNnxv7ft56aCquWpxMTVgtx18hXG%2Fhy%2FSaQ5bnGKgV55LznrhEN%2Bjs1XmiXjB1AYEqekuLvMwHV6wDs36a%2FYxbCkN94xChjWRBSS3WET0KrLGfFnIgyx9qkRjf9oGM3261EFoRsTAHZ%2FweXbOnXbcWhw21UerGFfeiMx6xv41wmq5nupwf2j6wcsdeuayWUimmrKSZMwQzyQGuVQTBSPTE721LOKsJTlo%2Bv%2F6uhfWywYlcCaqwDkBdJ%2B%2Fub7HrpszXHdoU72zXbpuQk05wX7ASDnJm2v5TqNTbC%2BPYesLeu6yFJsw9qy1xAY6pgHVp9f1gmjdJlviNOo%2BNgF8ndfx2D62xsmiNtCv3aoqMVOYguOYw8ZuqPLB0FtpqV6obOSPdpzZJuRhXY6SaFLtlyrMCuXVotonNkOjaraZryQvgFEvUB8rMVOYzzoD8kfnkkF3l1Tcmeb%2BhfJe3oAJxMiYkDsHUkbpoZFwZ0r9LafgJ9FORU%2BeujAkYGed3jSwSweb13ini2s98DyLzum0euMaiC1s&X-Amz-Signature=47b2c30374bb9936a2bcb337fcb767be082cd9fa18b96d8913d76b91cb6bd188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BM34WDQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdXCsCecSNekdbZSPm0cIlj9jrEEZP0XHe5TFXUaB2MAiA12htvKPt0HlPCZrB40kmSbcALq3%2BPY092DbCnCNjf2SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkq1ZNzJLBwwDRF%2BzKtwDMHXlXK%2FSR92jEsg41zoJshfzQT%2B%2FwKmrtsmi1izrU68yuMvbc468RvhnWKbKEplc9BbP6QYJAqJ1O54FKA1%2B6VMdUlwJJQRS0btCDEgr2F4vj%2FM270lR8O%2FGJTwvJ26oqIBEhMLSdvyXouvgPcR0R4LYYdHt7J%2FWnl1UgjfJgrXmYBuSLdVVmwnZwkCYBGM9Lj%2BK%2FRsv8M79VD2LHQAGCkB30b%2FLGuCPOKc6pfkrl46UmRXBrK8%2Bc2PlS5imSWEdw0%2FMTxJDle7OvMwiFOI%2Fey4eG0u%2B2qdH1cdqgDEirNKW%2BHHZe1Tlpq9VkBa7CjXmncCT18ndlZlaNnxv7ft56aCquWpxMTVgtx18hXG%2Fhy%2FSaQ5bnGKgV55LznrhEN%2Bjs1XmiXjB1AYEqekuLvMwHV6wDs36a%2FYxbCkN94xChjWRBSS3WET0KrLGfFnIgyx9qkRjf9oGM3261EFoRsTAHZ%2FweXbOnXbcWhw21UerGFfeiMx6xv41wmq5nupwf2j6wcsdeuayWUimmrKSZMwQzyQGuVQTBSPTE721LOKsJTlo%2Bv%2F6uhfWywYlcCaqwDkBdJ%2B%2Fub7HrpszXHdoU72zXbpuQk05wX7ASDnJm2v5TqNTbC%2BPYesLeu6yFJsw9qy1xAY6pgHVp9f1gmjdJlviNOo%2BNgF8ndfx2D62xsmiNtCv3aoqMVOYguOYw8ZuqPLB0FtpqV6obOSPdpzZJuRhXY6SaFLtlyrMCuXVotonNkOjaraZryQvgFEvUB8rMVOYzzoD8kfnkkF3l1Tcmeb%2BhfJe3oAJxMiYkDsHUkbpoZFwZ0r9LafgJ9FORU%2BeujAkYGed3jSwSweb13ini2s98DyLzum0euMaiC1s&X-Amz-Signature=5d2b3cd7981b945a41c382209496ac36514ac31ce08d5168140029b544f1607e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BM34WDQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdXCsCecSNekdbZSPm0cIlj9jrEEZP0XHe5TFXUaB2MAiA12htvKPt0HlPCZrB40kmSbcALq3%2BPY092DbCnCNjf2SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkq1ZNzJLBwwDRF%2BzKtwDMHXlXK%2FSR92jEsg41zoJshfzQT%2B%2FwKmrtsmi1izrU68yuMvbc468RvhnWKbKEplc9BbP6QYJAqJ1O54FKA1%2B6VMdUlwJJQRS0btCDEgr2F4vj%2FM270lR8O%2FGJTwvJ26oqIBEhMLSdvyXouvgPcR0R4LYYdHt7J%2FWnl1UgjfJgrXmYBuSLdVVmwnZwkCYBGM9Lj%2BK%2FRsv8M79VD2LHQAGCkB30b%2FLGuCPOKc6pfkrl46UmRXBrK8%2Bc2PlS5imSWEdw0%2FMTxJDle7OvMwiFOI%2Fey4eG0u%2B2qdH1cdqgDEirNKW%2BHHZe1Tlpq9VkBa7CjXmncCT18ndlZlaNnxv7ft56aCquWpxMTVgtx18hXG%2Fhy%2FSaQ5bnGKgV55LznrhEN%2Bjs1XmiXjB1AYEqekuLvMwHV6wDs36a%2FYxbCkN94xChjWRBSS3WET0KrLGfFnIgyx9qkRjf9oGM3261EFoRsTAHZ%2FweXbOnXbcWhw21UerGFfeiMx6xv41wmq5nupwf2j6wcsdeuayWUimmrKSZMwQzyQGuVQTBSPTE721LOKsJTlo%2Bv%2F6uhfWywYlcCaqwDkBdJ%2B%2Fub7HrpszXHdoU72zXbpuQk05wX7ASDnJm2v5TqNTbC%2BPYesLeu6yFJsw9qy1xAY6pgHVp9f1gmjdJlviNOo%2BNgF8ndfx2D62xsmiNtCv3aoqMVOYguOYw8ZuqPLB0FtpqV6obOSPdpzZJuRhXY6SaFLtlyrMCuXVotonNkOjaraZryQvgFEvUB8rMVOYzzoD8kfnkkF3l1Tcmeb%2BhfJe3oAJxMiYkDsHUkbpoZFwZ0r9LafgJ9FORU%2BeujAkYGed3jSwSweb13ini2s98DyLzum0euMaiC1s&X-Amz-Signature=1f9c3a5f64112f6cba48aebca9343c3d68da4a03f98d3e38c88617943875cdd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BM34WDQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdXCsCecSNekdbZSPm0cIlj9jrEEZP0XHe5TFXUaB2MAiA12htvKPt0HlPCZrB40kmSbcALq3%2BPY092DbCnCNjf2SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkq1ZNzJLBwwDRF%2BzKtwDMHXlXK%2FSR92jEsg41zoJshfzQT%2B%2FwKmrtsmi1izrU68yuMvbc468RvhnWKbKEplc9BbP6QYJAqJ1O54FKA1%2B6VMdUlwJJQRS0btCDEgr2F4vj%2FM270lR8O%2FGJTwvJ26oqIBEhMLSdvyXouvgPcR0R4LYYdHt7J%2FWnl1UgjfJgrXmYBuSLdVVmwnZwkCYBGM9Lj%2BK%2FRsv8M79VD2LHQAGCkB30b%2FLGuCPOKc6pfkrl46UmRXBrK8%2Bc2PlS5imSWEdw0%2FMTxJDle7OvMwiFOI%2Fey4eG0u%2B2qdH1cdqgDEirNKW%2BHHZe1Tlpq9VkBa7CjXmncCT18ndlZlaNnxv7ft56aCquWpxMTVgtx18hXG%2Fhy%2FSaQ5bnGKgV55LznrhEN%2Bjs1XmiXjB1AYEqekuLvMwHV6wDs36a%2FYxbCkN94xChjWRBSS3WET0KrLGfFnIgyx9qkRjf9oGM3261EFoRsTAHZ%2FweXbOnXbcWhw21UerGFfeiMx6xv41wmq5nupwf2j6wcsdeuayWUimmrKSZMwQzyQGuVQTBSPTE721LOKsJTlo%2Bv%2F6uhfWywYlcCaqwDkBdJ%2B%2Fub7HrpszXHdoU72zXbpuQk05wX7ASDnJm2v5TqNTbC%2BPYesLeu6yFJsw9qy1xAY6pgHVp9f1gmjdJlviNOo%2BNgF8ndfx2D62xsmiNtCv3aoqMVOYguOYw8ZuqPLB0FtpqV6obOSPdpzZJuRhXY6SaFLtlyrMCuXVotonNkOjaraZryQvgFEvUB8rMVOYzzoD8kfnkkF3l1Tcmeb%2BhfJe3oAJxMiYkDsHUkbpoZFwZ0r9LafgJ9FORU%2BeujAkYGed3jSwSweb13ini2s98DyLzum0euMaiC1s&X-Amz-Signature=7b9facb30075470afd112731aec504c4190186c271d2f6ede26dabe9589942fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BM34WDQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdXCsCecSNekdbZSPm0cIlj9jrEEZP0XHe5TFXUaB2MAiA12htvKPt0HlPCZrB40kmSbcALq3%2BPY092DbCnCNjf2SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkq1ZNzJLBwwDRF%2BzKtwDMHXlXK%2FSR92jEsg41zoJshfzQT%2B%2FwKmrtsmi1izrU68yuMvbc468RvhnWKbKEplc9BbP6QYJAqJ1O54FKA1%2B6VMdUlwJJQRS0btCDEgr2F4vj%2FM270lR8O%2FGJTwvJ26oqIBEhMLSdvyXouvgPcR0R4LYYdHt7J%2FWnl1UgjfJgrXmYBuSLdVVmwnZwkCYBGM9Lj%2BK%2FRsv8M79VD2LHQAGCkB30b%2FLGuCPOKc6pfkrl46UmRXBrK8%2Bc2PlS5imSWEdw0%2FMTxJDle7OvMwiFOI%2Fey4eG0u%2B2qdH1cdqgDEirNKW%2BHHZe1Tlpq9VkBa7CjXmncCT18ndlZlaNnxv7ft56aCquWpxMTVgtx18hXG%2Fhy%2FSaQ5bnGKgV55LznrhEN%2Bjs1XmiXjB1AYEqekuLvMwHV6wDs36a%2FYxbCkN94xChjWRBSS3WET0KrLGfFnIgyx9qkRjf9oGM3261EFoRsTAHZ%2FweXbOnXbcWhw21UerGFfeiMx6xv41wmq5nupwf2j6wcsdeuayWUimmrKSZMwQzyQGuVQTBSPTE721LOKsJTlo%2Bv%2F6uhfWywYlcCaqwDkBdJ%2B%2Fub7HrpszXHdoU72zXbpuQk05wX7ASDnJm2v5TqNTbC%2BPYesLeu6yFJsw9qy1xAY6pgHVp9f1gmjdJlviNOo%2BNgF8ndfx2D62xsmiNtCv3aoqMVOYguOYw8ZuqPLB0FtpqV6obOSPdpzZJuRhXY6SaFLtlyrMCuXVotonNkOjaraZryQvgFEvUB8rMVOYzzoD8kfnkkF3l1Tcmeb%2BhfJe3oAJxMiYkDsHUkbpoZFwZ0r9LafgJ9FORU%2BeujAkYGed3jSwSweb13ini2s98DyLzum0euMaiC1s&X-Amz-Signature=ae4aece4cb7ece37b37848beef457742ac1fe02ef83cab2b305d3c6bbef0ffe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
