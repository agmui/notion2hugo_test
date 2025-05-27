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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKWXDP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF4%2FYhZe9HY9G2clweNv%2FBVoLbCLuDX0wbU4HOKmfZ4gIgQWdb6cOjn9GBorfmjLcVMFG20j2ERTAzDb21fGh2UhUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMtVEefpfQ4CogjF4ircAx5buVozxdatArcJMS6SNgcy3WVBj5BQ5wdbQxpnUDXYbE7DRTKtP83%2BOGrCd41h0iu35i8wtLhJz9bA9OvimVPSmMidTrslABf2Gs8CSd2SrXAL9RxDEqtE7q2izGvyB5wjeDQqTczS3JWEQcgO0SRvPVBTUAx%2FmVjxf%2BEJvKiIzepnEUc2Zu%2BCjcrKugtmcxjoASctPMnEtafU4Kb4VagunL37507uONMSxcJ7M1UcDsdul9G49VJnAYXWO3V5MJ2o4oGH2txmQQzsowO%2BnoD59Wqwv0MsJGHhB8gZ7Wnd4zv%2FBH2cAhuZsTSOt6d9Ud26Gjnj7AR6q6lWHBIrUz%2B8xcMxAySDABKy2kZ4S1FSLSaQyS%2FgeWWebb6ikeCsHRh4Ez47PbqxLtBo%2F7Hw9xlj%2FksInw2X6tIzLd%2Fr0afP%2FY84TLWudO5%2Bja%2BaCUS165mLNWzQB55bjes7zB5%2BCRbY4gyS9uybtH%2FeEF%2F3VwdFMPCHRssjmKFyDFONVGNkpCNlMrx8Rjiq5a4uH0Dh%2FdxBiVIgGp1%2Bq9zHG63AH%2BU%2FCpUYnObAoXtkpobJzFWHDi3DGojKGoCDnLhn5pazfYc3tcTHG9Q8pkCyte1T%2FwJHR4JAHc7ddWQpeDKbMOPq1sEGOqUBJutzvY9Kc%2F6trMgTKpdBaE5jhiyu55YkBhTo9c%2Fs0J67O%2BFrZJOSVAbH%2F3KMzRDCsHvkzebd5m5iRii8IAKg7KmXE9OuH0L3RqYOlXz7k%2B2kLCndq1RonkODUXQZUAQXMOmCCUNjEiR4Q6nikFXwpDN5cqVQ63v%2FPgKqSA7LY2XuoV5HpzcyMSw04lj%2B2JQKtX6gLb2Y9b9uRSnXPaYA48NCS%2FgD&X-Amz-Signature=3e5337cca0f5f4f3b7ee280e5786f11be4bb7e7e602116a20cee9955324b5526&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKWXDP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF4%2FYhZe9HY9G2clweNv%2FBVoLbCLuDX0wbU4HOKmfZ4gIgQWdb6cOjn9GBorfmjLcVMFG20j2ERTAzDb21fGh2UhUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMtVEefpfQ4CogjF4ircAx5buVozxdatArcJMS6SNgcy3WVBj5BQ5wdbQxpnUDXYbE7DRTKtP83%2BOGrCd41h0iu35i8wtLhJz9bA9OvimVPSmMidTrslABf2Gs8CSd2SrXAL9RxDEqtE7q2izGvyB5wjeDQqTczS3JWEQcgO0SRvPVBTUAx%2FmVjxf%2BEJvKiIzepnEUc2Zu%2BCjcrKugtmcxjoASctPMnEtafU4Kb4VagunL37507uONMSxcJ7M1UcDsdul9G49VJnAYXWO3V5MJ2o4oGH2txmQQzsowO%2BnoD59Wqwv0MsJGHhB8gZ7Wnd4zv%2FBH2cAhuZsTSOt6d9Ud26Gjnj7AR6q6lWHBIrUz%2B8xcMxAySDABKy2kZ4S1FSLSaQyS%2FgeWWebb6ikeCsHRh4Ez47PbqxLtBo%2F7Hw9xlj%2FksInw2X6tIzLd%2Fr0afP%2FY84TLWudO5%2Bja%2BaCUS165mLNWzQB55bjes7zB5%2BCRbY4gyS9uybtH%2FeEF%2F3VwdFMPCHRssjmKFyDFONVGNkpCNlMrx8Rjiq5a4uH0Dh%2FdxBiVIgGp1%2Bq9zHG63AH%2BU%2FCpUYnObAoXtkpobJzFWHDi3DGojKGoCDnLhn5pazfYc3tcTHG9Q8pkCyte1T%2FwJHR4JAHc7ddWQpeDKbMOPq1sEGOqUBJutzvY9Kc%2F6trMgTKpdBaE5jhiyu55YkBhTo9c%2Fs0J67O%2BFrZJOSVAbH%2F3KMzRDCsHvkzebd5m5iRii8IAKg7KmXE9OuH0L3RqYOlXz7k%2B2kLCndq1RonkODUXQZUAQXMOmCCUNjEiR4Q6nikFXwpDN5cqVQ63v%2FPgKqSA7LY2XuoV5HpzcyMSw04lj%2B2JQKtX6gLb2Y9b9uRSnXPaYA48NCS%2FgD&X-Amz-Signature=8e432797c6e20333b907a6cf7c575ddc94aaef5bfbc03e3eb4532df1b85ccf30&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKWXDP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF4%2FYhZe9HY9G2clweNv%2FBVoLbCLuDX0wbU4HOKmfZ4gIgQWdb6cOjn9GBorfmjLcVMFG20j2ERTAzDb21fGh2UhUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMtVEefpfQ4CogjF4ircAx5buVozxdatArcJMS6SNgcy3WVBj5BQ5wdbQxpnUDXYbE7DRTKtP83%2BOGrCd41h0iu35i8wtLhJz9bA9OvimVPSmMidTrslABf2Gs8CSd2SrXAL9RxDEqtE7q2izGvyB5wjeDQqTczS3JWEQcgO0SRvPVBTUAx%2FmVjxf%2BEJvKiIzepnEUc2Zu%2BCjcrKugtmcxjoASctPMnEtafU4Kb4VagunL37507uONMSxcJ7M1UcDsdul9G49VJnAYXWO3V5MJ2o4oGH2txmQQzsowO%2BnoD59Wqwv0MsJGHhB8gZ7Wnd4zv%2FBH2cAhuZsTSOt6d9Ud26Gjnj7AR6q6lWHBIrUz%2B8xcMxAySDABKy2kZ4S1FSLSaQyS%2FgeWWebb6ikeCsHRh4Ez47PbqxLtBo%2F7Hw9xlj%2FksInw2X6tIzLd%2Fr0afP%2FY84TLWudO5%2Bja%2BaCUS165mLNWzQB55bjes7zB5%2BCRbY4gyS9uybtH%2FeEF%2F3VwdFMPCHRssjmKFyDFONVGNkpCNlMrx8Rjiq5a4uH0Dh%2FdxBiVIgGp1%2Bq9zHG63AH%2BU%2FCpUYnObAoXtkpobJzFWHDi3DGojKGoCDnLhn5pazfYc3tcTHG9Q8pkCyte1T%2FwJHR4JAHc7ddWQpeDKbMOPq1sEGOqUBJutzvY9Kc%2F6trMgTKpdBaE5jhiyu55YkBhTo9c%2Fs0J67O%2BFrZJOSVAbH%2F3KMzRDCsHvkzebd5m5iRii8IAKg7KmXE9OuH0L3RqYOlXz7k%2B2kLCndq1RonkODUXQZUAQXMOmCCUNjEiR4Q6nikFXwpDN5cqVQ63v%2FPgKqSA7LY2XuoV5HpzcyMSw04lj%2B2JQKtX6gLb2Y9b9uRSnXPaYA48NCS%2FgD&X-Amz-Signature=fba7ee352fa48300e4a3b2bbe47b0d987f1d5cf92ec7096d356196d380b8a451&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKWXDP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF4%2FYhZe9HY9G2clweNv%2FBVoLbCLuDX0wbU4HOKmfZ4gIgQWdb6cOjn9GBorfmjLcVMFG20j2ERTAzDb21fGh2UhUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMtVEefpfQ4CogjF4ircAx5buVozxdatArcJMS6SNgcy3WVBj5BQ5wdbQxpnUDXYbE7DRTKtP83%2BOGrCd41h0iu35i8wtLhJz9bA9OvimVPSmMidTrslABf2Gs8CSd2SrXAL9RxDEqtE7q2izGvyB5wjeDQqTczS3JWEQcgO0SRvPVBTUAx%2FmVjxf%2BEJvKiIzepnEUc2Zu%2BCjcrKugtmcxjoASctPMnEtafU4Kb4VagunL37507uONMSxcJ7M1UcDsdul9G49VJnAYXWO3V5MJ2o4oGH2txmQQzsowO%2BnoD59Wqwv0MsJGHhB8gZ7Wnd4zv%2FBH2cAhuZsTSOt6d9Ud26Gjnj7AR6q6lWHBIrUz%2B8xcMxAySDABKy2kZ4S1FSLSaQyS%2FgeWWebb6ikeCsHRh4Ez47PbqxLtBo%2F7Hw9xlj%2FksInw2X6tIzLd%2Fr0afP%2FY84TLWudO5%2Bja%2BaCUS165mLNWzQB55bjes7zB5%2BCRbY4gyS9uybtH%2FeEF%2F3VwdFMPCHRssjmKFyDFONVGNkpCNlMrx8Rjiq5a4uH0Dh%2FdxBiVIgGp1%2Bq9zHG63AH%2BU%2FCpUYnObAoXtkpobJzFWHDi3DGojKGoCDnLhn5pazfYc3tcTHG9Q8pkCyte1T%2FwJHR4JAHc7ddWQpeDKbMOPq1sEGOqUBJutzvY9Kc%2F6trMgTKpdBaE5jhiyu55YkBhTo9c%2Fs0J67O%2BFrZJOSVAbH%2F3KMzRDCsHvkzebd5m5iRii8IAKg7KmXE9OuH0L3RqYOlXz7k%2B2kLCndq1RonkODUXQZUAQXMOmCCUNjEiR4Q6nikFXwpDN5cqVQ63v%2FPgKqSA7LY2XuoV5HpzcyMSw04lj%2B2JQKtX6gLb2Y9b9uRSnXPaYA48NCS%2FgD&X-Amz-Signature=1362f44dfecece6174c889b5eb15887c10c1b5bbb4f6d0c1081e3686bd082d69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKWXDP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF4%2FYhZe9HY9G2clweNv%2FBVoLbCLuDX0wbU4HOKmfZ4gIgQWdb6cOjn9GBorfmjLcVMFG20j2ERTAzDb21fGh2UhUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMtVEefpfQ4CogjF4ircAx5buVozxdatArcJMS6SNgcy3WVBj5BQ5wdbQxpnUDXYbE7DRTKtP83%2BOGrCd41h0iu35i8wtLhJz9bA9OvimVPSmMidTrslABf2Gs8CSd2SrXAL9RxDEqtE7q2izGvyB5wjeDQqTczS3JWEQcgO0SRvPVBTUAx%2FmVjxf%2BEJvKiIzepnEUc2Zu%2BCjcrKugtmcxjoASctPMnEtafU4Kb4VagunL37507uONMSxcJ7M1UcDsdul9G49VJnAYXWO3V5MJ2o4oGH2txmQQzsowO%2BnoD59Wqwv0MsJGHhB8gZ7Wnd4zv%2FBH2cAhuZsTSOt6d9Ud26Gjnj7AR6q6lWHBIrUz%2B8xcMxAySDABKy2kZ4S1FSLSaQyS%2FgeWWebb6ikeCsHRh4Ez47PbqxLtBo%2F7Hw9xlj%2FksInw2X6tIzLd%2Fr0afP%2FY84TLWudO5%2Bja%2BaCUS165mLNWzQB55bjes7zB5%2BCRbY4gyS9uybtH%2FeEF%2F3VwdFMPCHRssjmKFyDFONVGNkpCNlMrx8Rjiq5a4uH0Dh%2FdxBiVIgGp1%2Bq9zHG63AH%2BU%2FCpUYnObAoXtkpobJzFWHDi3DGojKGoCDnLhn5pazfYc3tcTHG9Q8pkCyte1T%2FwJHR4JAHc7ddWQpeDKbMOPq1sEGOqUBJutzvY9Kc%2F6trMgTKpdBaE5jhiyu55YkBhTo9c%2Fs0J67O%2BFrZJOSVAbH%2F3KMzRDCsHvkzebd5m5iRii8IAKg7KmXE9OuH0L3RqYOlXz7k%2B2kLCndq1RonkODUXQZUAQXMOmCCUNjEiR4Q6nikFXwpDN5cqVQ63v%2FPgKqSA7LY2XuoV5HpzcyMSw04lj%2B2JQKtX6gLb2Y9b9uRSnXPaYA48NCS%2FgD&X-Amz-Signature=1972cd0e997edb06804b0192a65065b52c271a37c7e723b9eb94433dc44dbdca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKWXDP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF4%2FYhZe9HY9G2clweNv%2FBVoLbCLuDX0wbU4HOKmfZ4gIgQWdb6cOjn9GBorfmjLcVMFG20j2ERTAzDb21fGh2UhUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMtVEefpfQ4CogjF4ircAx5buVozxdatArcJMS6SNgcy3WVBj5BQ5wdbQxpnUDXYbE7DRTKtP83%2BOGrCd41h0iu35i8wtLhJz9bA9OvimVPSmMidTrslABf2Gs8CSd2SrXAL9RxDEqtE7q2izGvyB5wjeDQqTczS3JWEQcgO0SRvPVBTUAx%2FmVjxf%2BEJvKiIzepnEUc2Zu%2BCjcrKugtmcxjoASctPMnEtafU4Kb4VagunL37507uONMSxcJ7M1UcDsdul9G49VJnAYXWO3V5MJ2o4oGH2txmQQzsowO%2BnoD59Wqwv0MsJGHhB8gZ7Wnd4zv%2FBH2cAhuZsTSOt6d9Ud26Gjnj7AR6q6lWHBIrUz%2B8xcMxAySDABKy2kZ4S1FSLSaQyS%2FgeWWebb6ikeCsHRh4Ez47PbqxLtBo%2F7Hw9xlj%2FksInw2X6tIzLd%2Fr0afP%2FY84TLWudO5%2Bja%2BaCUS165mLNWzQB55bjes7zB5%2BCRbY4gyS9uybtH%2FeEF%2F3VwdFMPCHRssjmKFyDFONVGNkpCNlMrx8Rjiq5a4uH0Dh%2FdxBiVIgGp1%2Bq9zHG63AH%2BU%2FCpUYnObAoXtkpobJzFWHDi3DGojKGoCDnLhn5pazfYc3tcTHG9Q8pkCyte1T%2FwJHR4JAHc7ddWQpeDKbMOPq1sEGOqUBJutzvY9Kc%2F6trMgTKpdBaE5jhiyu55YkBhTo9c%2Fs0J67O%2BFrZJOSVAbH%2F3KMzRDCsHvkzebd5m5iRii8IAKg7KmXE9OuH0L3RqYOlXz7k%2B2kLCndq1RonkODUXQZUAQXMOmCCUNjEiR4Q6nikFXwpDN5cqVQ63v%2FPgKqSA7LY2XuoV5HpzcyMSw04lj%2B2JQKtX6gLb2Y9b9uRSnXPaYA48NCS%2FgD&X-Amz-Signature=e68b1d163d67cf214ffaa5f9ec51a18ad2ef6bec4ef8447bea69af9cb8ba2075&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKWXDP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF4%2FYhZe9HY9G2clweNv%2FBVoLbCLuDX0wbU4HOKmfZ4gIgQWdb6cOjn9GBorfmjLcVMFG20j2ERTAzDb21fGh2UhUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMtVEefpfQ4CogjF4ircAx5buVozxdatArcJMS6SNgcy3WVBj5BQ5wdbQxpnUDXYbE7DRTKtP83%2BOGrCd41h0iu35i8wtLhJz9bA9OvimVPSmMidTrslABf2Gs8CSd2SrXAL9RxDEqtE7q2izGvyB5wjeDQqTczS3JWEQcgO0SRvPVBTUAx%2FmVjxf%2BEJvKiIzepnEUc2Zu%2BCjcrKugtmcxjoASctPMnEtafU4Kb4VagunL37507uONMSxcJ7M1UcDsdul9G49VJnAYXWO3V5MJ2o4oGH2txmQQzsowO%2BnoD59Wqwv0MsJGHhB8gZ7Wnd4zv%2FBH2cAhuZsTSOt6d9Ud26Gjnj7AR6q6lWHBIrUz%2B8xcMxAySDABKy2kZ4S1FSLSaQyS%2FgeWWebb6ikeCsHRh4Ez47PbqxLtBo%2F7Hw9xlj%2FksInw2X6tIzLd%2Fr0afP%2FY84TLWudO5%2Bja%2BaCUS165mLNWzQB55bjes7zB5%2BCRbY4gyS9uybtH%2FeEF%2F3VwdFMPCHRssjmKFyDFONVGNkpCNlMrx8Rjiq5a4uH0Dh%2FdxBiVIgGp1%2Bq9zHG63AH%2BU%2FCpUYnObAoXtkpobJzFWHDi3DGojKGoCDnLhn5pazfYc3tcTHG9Q8pkCyte1T%2FwJHR4JAHc7ddWQpeDKbMOPq1sEGOqUBJutzvY9Kc%2F6trMgTKpdBaE5jhiyu55YkBhTo9c%2Fs0J67O%2BFrZJOSVAbH%2F3KMzRDCsHvkzebd5m5iRii8IAKg7KmXE9OuH0L3RqYOlXz7k%2B2kLCndq1RonkODUXQZUAQXMOmCCUNjEiR4Q6nikFXwpDN5cqVQ63v%2FPgKqSA7LY2XuoV5HpzcyMSw04lj%2B2JQKtX6gLb2Y9b9uRSnXPaYA48NCS%2FgD&X-Amz-Signature=3c5a5f45e5f9f41cfc54f8adde6615a67055b6b5332b06a2bad6c17287d07166&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKWXDP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF4%2FYhZe9HY9G2clweNv%2FBVoLbCLuDX0wbU4HOKmfZ4gIgQWdb6cOjn9GBorfmjLcVMFG20j2ERTAzDb21fGh2UhUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMtVEefpfQ4CogjF4ircAx5buVozxdatArcJMS6SNgcy3WVBj5BQ5wdbQxpnUDXYbE7DRTKtP83%2BOGrCd41h0iu35i8wtLhJz9bA9OvimVPSmMidTrslABf2Gs8CSd2SrXAL9RxDEqtE7q2izGvyB5wjeDQqTczS3JWEQcgO0SRvPVBTUAx%2FmVjxf%2BEJvKiIzepnEUc2Zu%2BCjcrKugtmcxjoASctPMnEtafU4Kb4VagunL37507uONMSxcJ7M1UcDsdul9G49VJnAYXWO3V5MJ2o4oGH2txmQQzsowO%2BnoD59Wqwv0MsJGHhB8gZ7Wnd4zv%2FBH2cAhuZsTSOt6d9Ud26Gjnj7AR6q6lWHBIrUz%2B8xcMxAySDABKy2kZ4S1FSLSaQyS%2FgeWWebb6ikeCsHRh4Ez47PbqxLtBo%2F7Hw9xlj%2FksInw2X6tIzLd%2Fr0afP%2FY84TLWudO5%2Bja%2BaCUS165mLNWzQB55bjes7zB5%2BCRbY4gyS9uybtH%2FeEF%2F3VwdFMPCHRssjmKFyDFONVGNkpCNlMrx8Rjiq5a4uH0Dh%2FdxBiVIgGp1%2Bq9zHG63AH%2BU%2FCpUYnObAoXtkpobJzFWHDi3DGojKGoCDnLhn5pazfYc3tcTHG9Q8pkCyte1T%2FwJHR4JAHc7ddWQpeDKbMOPq1sEGOqUBJutzvY9Kc%2F6trMgTKpdBaE5jhiyu55YkBhTo9c%2Fs0J67O%2BFrZJOSVAbH%2F3KMzRDCsHvkzebd5m5iRii8IAKg7KmXE9OuH0L3RqYOlXz7k%2B2kLCndq1RonkODUXQZUAQXMOmCCUNjEiR4Q6nikFXwpDN5cqVQ63v%2FPgKqSA7LY2XuoV5HpzcyMSw04lj%2B2JQKtX6gLb2Y9b9uRSnXPaYA48NCS%2FgD&X-Amz-Signature=1b3ab9139ab5512d4b140b67c3961ac2aec10c3723e4ff34306270ff2d04ce07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
