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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56TQRHI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyy7Gh8qInryFV3DBC%2FABtc6RD%2FS2BjRb%2FLNG721KASAiAEUx5%2F8Qu1oEtxpXnrC0IzhYWS8yW3A88hFYZdCUvnmCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuiGPvlcvLon7cS5KtwDbzV3CAUoHle1UA%2BJxPEOpvzdVQY3Hr5k1jktpiJfVKF90e6X9mOA1hruk6NSDvAbW8OhtdbtOqLlSpqZcleD5VPs4Kx7ph58yHq%2Bpl1JEMiwP3%2FJD9xatx8iVQirGQXDBU3xPDWXpT9sXKku95Q5ke8dji3rGGvo8nhMgNrIIRIw34tkHsV5G5GchnTXYpwRgfVXx7dQEK9YghkswyqwhIeri78h3Ujp38pnu%2BJ5doFkGygBKLqB2pzEFZWoz0K39RbBVHgkPcoWvNLV0%2FhcsV4d3mz7acgy%2FauLXhOCUxbEkcddRU48Uv0tyGMRa0CnAvmKkExJsEGdTAxmC3b2doMBiL8LB5t0OZgNegxwUbAgQSRx%2FeABVEpE46YgBpssfyoEG%2B1XmrBQCZI%2FIP8GKRs3X3eAMdNRJ6G2oVhfjgsCww3%2FAh6FpQ%2FQdS0DSrT5UcAxJhYDt7rHsoN1ebesyTPs079Q7ARUuF77G9Ddpp6QUfPQtMAXaDBmSA490UGoX8MniJjl%2BTd20SGNavfcHWowzcRXxnzpthIMIpNcPcKoQ26exjvIi4jJwGivvquEgSFOLsOg7SdwRrA5T57kicUhEMXuC7iuwGhgzF%2BAcHDSnbi2EiO%2BCQMSSTYwy5i1vQY6pgEFHB6ejZB63ENiZCFLBnU4dccDYf6m8nYUVlnpXWdVd%2FV2Wivpl1CeOsFN0SVUUFBC395vP620a6u3XzNSQC%2Bj%2BGJL3%2BJePaB8dIXwzL0pfXddbXKhtnXY%2FctrqTFnsfxgPgQLEvJZcIt6KFpOPtcS1TKSvQ16zYyNCgpYY5K2bwPiRMgvZGYZ7P1XCHcnwzaiPB8eFE%2BcuFvR5LzM9WxvopKXJ1Z0&X-Amz-Signature=ecb00e3af7f46289b35e1cc449c890a2619a2527c2e4b9563a4849716ba7364b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56TQRHI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyy7Gh8qInryFV3DBC%2FABtc6RD%2FS2BjRb%2FLNG721KASAiAEUx5%2F8Qu1oEtxpXnrC0IzhYWS8yW3A88hFYZdCUvnmCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuiGPvlcvLon7cS5KtwDbzV3CAUoHle1UA%2BJxPEOpvzdVQY3Hr5k1jktpiJfVKF90e6X9mOA1hruk6NSDvAbW8OhtdbtOqLlSpqZcleD5VPs4Kx7ph58yHq%2Bpl1JEMiwP3%2FJD9xatx8iVQirGQXDBU3xPDWXpT9sXKku95Q5ke8dji3rGGvo8nhMgNrIIRIw34tkHsV5G5GchnTXYpwRgfVXx7dQEK9YghkswyqwhIeri78h3Ujp38pnu%2BJ5doFkGygBKLqB2pzEFZWoz0K39RbBVHgkPcoWvNLV0%2FhcsV4d3mz7acgy%2FauLXhOCUxbEkcddRU48Uv0tyGMRa0CnAvmKkExJsEGdTAxmC3b2doMBiL8LB5t0OZgNegxwUbAgQSRx%2FeABVEpE46YgBpssfyoEG%2B1XmrBQCZI%2FIP8GKRs3X3eAMdNRJ6G2oVhfjgsCww3%2FAh6FpQ%2FQdS0DSrT5UcAxJhYDt7rHsoN1ebesyTPs079Q7ARUuF77G9Ddpp6QUfPQtMAXaDBmSA490UGoX8MniJjl%2BTd20SGNavfcHWowzcRXxnzpthIMIpNcPcKoQ26exjvIi4jJwGivvquEgSFOLsOg7SdwRrA5T57kicUhEMXuC7iuwGhgzF%2BAcHDSnbi2EiO%2BCQMSSTYwy5i1vQY6pgEFHB6ejZB63ENiZCFLBnU4dccDYf6m8nYUVlnpXWdVd%2FV2Wivpl1CeOsFN0SVUUFBC395vP620a6u3XzNSQC%2Bj%2BGJL3%2BJePaB8dIXwzL0pfXddbXKhtnXY%2FctrqTFnsfxgPgQLEvJZcIt6KFpOPtcS1TKSvQ16zYyNCgpYY5K2bwPiRMgvZGYZ7P1XCHcnwzaiPB8eFE%2BcuFvR5LzM9WxvopKXJ1Z0&X-Amz-Signature=f827068a641f168729bf3201d0385d95b8f4f76c0fab775ca64c6a40a7c28379&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56TQRHI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyy7Gh8qInryFV3DBC%2FABtc6RD%2FS2BjRb%2FLNG721KASAiAEUx5%2F8Qu1oEtxpXnrC0IzhYWS8yW3A88hFYZdCUvnmCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuiGPvlcvLon7cS5KtwDbzV3CAUoHle1UA%2BJxPEOpvzdVQY3Hr5k1jktpiJfVKF90e6X9mOA1hruk6NSDvAbW8OhtdbtOqLlSpqZcleD5VPs4Kx7ph58yHq%2Bpl1JEMiwP3%2FJD9xatx8iVQirGQXDBU3xPDWXpT9sXKku95Q5ke8dji3rGGvo8nhMgNrIIRIw34tkHsV5G5GchnTXYpwRgfVXx7dQEK9YghkswyqwhIeri78h3Ujp38pnu%2BJ5doFkGygBKLqB2pzEFZWoz0K39RbBVHgkPcoWvNLV0%2FhcsV4d3mz7acgy%2FauLXhOCUxbEkcddRU48Uv0tyGMRa0CnAvmKkExJsEGdTAxmC3b2doMBiL8LB5t0OZgNegxwUbAgQSRx%2FeABVEpE46YgBpssfyoEG%2B1XmrBQCZI%2FIP8GKRs3X3eAMdNRJ6G2oVhfjgsCww3%2FAh6FpQ%2FQdS0DSrT5UcAxJhYDt7rHsoN1ebesyTPs079Q7ARUuF77G9Ddpp6QUfPQtMAXaDBmSA490UGoX8MniJjl%2BTd20SGNavfcHWowzcRXxnzpthIMIpNcPcKoQ26exjvIi4jJwGivvquEgSFOLsOg7SdwRrA5T57kicUhEMXuC7iuwGhgzF%2BAcHDSnbi2EiO%2BCQMSSTYwy5i1vQY6pgEFHB6ejZB63ENiZCFLBnU4dccDYf6m8nYUVlnpXWdVd%2FV2Wivpl1CeOsFN0SVUUFBC395vP620a6u3XzNSQC%2Bj%2BGJL3%2BJePaB8dIXwzL0pfXddbXKhtnXY%2FctrqTFnsfxgPgQLEvJZcIt6KFpOPtcS1TKSvQ16zYyNCgpYY5K2bwPiRMgvZGYZ7P1XCHcnwzaiPB8eFE%2BcuFvR5LzM9WxvopKXJ1Z0&X-Amz-Signature=42fcfe490913503bfe4d99a8bd197932adc47baa5093639407f03349ab778f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56TQRHI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyy7Gh8qInryFV3DBC%2FABtc6RD%2FS2BjRb%2FLNG721KASAiAEUx5%2F8Qu1oEtxpXnrC0IzhYWS8yW3A88hFYZdCUvnmCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuiGPvlcvLon7cS5KtwDbzV3CAUoHle1UA%2BJxPEOpvzdVQY3Hr5k1jktpiJfVKF90e6X9mOA1hruk6NSDvAbW8OhtdbtOqLlSpqZcleD5VPs4Kx7ph58yHq%2Bpl1JEMiwP3%2FJD9xatx8iVQirGQXDBU3xPDWXpT9sXKku95Q5ke8dji3rGGvo8nhMgNrIIRIw34tkHsV5G5GchnTXYpwRgfVXx7dQEK9YghkswyqwhIeri78h3Ujp38pnu%2BJ5doFkGygBKLqB2pzEFZWoz0K39RbBVHgkPcoWvNLV0%2FhcsV4d3mz7acgy%2FauLXhOCUxbEkcddRU48Uv0tyGMRa0CnAvmKkExJsEGdTAxmC3b2doMBiL8LB5t0OZgNegxwUbAgQSRx%2FeABVEpE46YgBpssfyoEG%2B1XmrBQCZI%2FIP8GKRs3X3eAMdNRJ6G2oVhfjgsCww3%2FAh6FpQ%2FQdS0DSrT5UcAxJhYDt7rHsoN1ebesyTPs079Q7ARUuF77G9Ddpp6QUfPQtMAXaDBmSA490UGoX8MniJjl%2BTd20SGNavfcHWowzcRXxnzpthIMIpNcPcKoQ26exjvIi4jJwGivvquEgSFOLsOg7SdwRrA5T57kicUhEMXuC7iuwGhgzF%2BAcHDSnbi2EiO%2BCQMSSTYwy5i1vQY6pgEFHB6ejZB63ENiZCFLBnU4dccDYf6m8nYUVlnpXWdVd%2FV2Wivpl1CeOsFN0SVUUFBC395vP620a6u3XzNSQC%2Bj%2BGJL3%2BJePaB8dIXwzL0pfXddbXKhtnXY%2FctrqTFnsfxgPgQLEvJZcIt6KFpOPtcS1TKSvQ16zYyNCgpYY5K2bwPiRMgvZGYZ7P1XCHcnwzaiPB8eFE%2BcuFvR5LzM9WxvopKXJ1Z0&X-Amz-Signature=255239e42672e660d67fad9932105a65e262dafd0fdf4b4dd895dba3b89ab619&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56TQRHI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyy7Gh8qInryFV3DBC%2FABtc6RD%2FS2BjRb%2FLNG721KASAiAEUx5%2F8Qu1oEtxpXnrC0IzhYWS8yW3A88hFYZdCUvnmCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuiGPvlcvLon7cS5KtwDbzV3CAUoHle1UA%2BJxPEOpvzdVQY3Hr5k1jktpiJfVKF90e6X9mOA1hruk6NSDvAbW8OhtdbtOqLlSpqZcleD5VPs4Kx7ph58yHq%2Bpl1JEMiwP3%2FJD9xatx8iVQirGQXDBU3xPDWXpT9sXKku95Q5ke8dji3rGGvo8nhMgNrIIRIw34tkHsV5G5GchnTXYpwRgfVXx7dQEK9YghkswyqwhIeri78h3Ujp38pnu%2BJ5doFkGygBKLqB2pzEFZWoz0K39RbBVHgkPcoWvNLV0%2FhcsV4d3mz7acgy%2FauLXhOCUxbEkcddRU48Uv0tyGMRa0CnAvmKkExJsEGdTAxmC3b2doMBiL8LB5t0OZgNegxwUbAgQSRx%2FeABVEpE46YgBpssfyoEG%2B1XmrBQCZI%2FIP8GKRs3X3eAMdNRJ6G2oVhfjgsCww3%2FAh6FpQ%2FQdS0DSrT5UcAxJhYDt7rHsoN1ebesyTPs079Q7ARUuF77G9Ddpp6QUfPQtMAXaDBmSA490UGoX8MniJjl%2BTd20SGNavfcHWowzcRXxnzpthIMIpNcPcKoQ26exjvIi4jJwGivvquEgSFOLsOg7SdwRrA5T57kicUhEMXuC7iuwGhgzF%2BAcHDSnbi2EiO%2BCQMSSTYwy5i1vQY6pgEFHB6ejZB63ENiZCFLBnU4dccDYf6m8nYUVlnpXWdVd%2FV2Wivpl1CeOsFN0SVUUFBC395vP620a6u3XzNSQC%2Bj%2BGJL3%2BJePaB8dIXwzL0pfXddbXKhtnXY%2FctrqTFnsfxgPgQLEvJZcIt6KFpOPtcS1TKSvQ16zYyNCgpYY5K2bwPiRMgvZGYZ7P1XCHcnwzaiPB8eFE%2BcuFvR5LzM9WxvopKXJ1Z0&X-Amz-Signature=359ece28da01fa888634672b96588ed8ca99b6087f2dd4ba08252e9a81b9724a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56TQRHI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyy7Gh8qInryFV3DBC%2FABtc6RD%2FS2BjRb%2FLNG721KASAiAEUx5%2F8Qu1oEtxpXnrC0IzhYWS8yW3A88hFYZdCUvnmCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuiGPvlcvLon7cS5KtwDbzV3CAUoHle1UA%2BJxPEOpvzdVQY3Hr5k1jktpiJfVKF90e6X9mOA1hruk6NSDvAbW8OhtdbtOqLlSpqZcleD5VPs4Kx7ph58yHq%2Bpl1JEMiwP3%2FJD9xatx8iVQirGQXDBU3xPDWXpT9sXKku95Q5ke8dji3rGGvo8nhMgNrIIRIw34tkHsV5G5GchnTXYpwRgfVXx7dQEK9YghkswyqwhIeri78h3Ujp38pnu%2BJ5doFkGygBKLqB2pzEFZWoz0K39RbBVHgkPcoWvNLV0%2FhcsV4d3mz7acgy%2FauLXhOCUxbEkcddRU48Uv0tyGMRa0CnAvmKkExJsEGdTAxmC3b2doMBiL8LB5t0OZgNegxwUbAgQSRx%2FeABVEpE46YgBpssfyoEG%2B1XmrBQCZI%2FIP8GKRs3X3eAMdNRJ6G2oVhfjgsCww3%2FAh6FpQ%2FQdS0DSrT5UcAxJhYDt7rHsoN1ebesyTPs079Q7ARUuF77G9Ddpp6QUfPQtMAXaDBmSA490UGoX8MniJjl%2BTd20SGNavfcHWowzcRXxnzpthIMIpNcPcKoQ26exjvIi4jJwGivvquEgSFOLsOg7SdwRrA5T57kicUhEMXuC7iuwGhgzF%2BAcHDSnbi2EiO%2BCQMSSTYwy5i1vQY6pgEFHB6ejZB63ENiZCFLBnU4dccDYf6m8nYUVlnpXWdVd%2FV2Wivpl1CeOsFN0SVUUFBC395vP620a6u3XzNSQC%2Bj%2BGJL3%2BJePaB8dIXwzL0pfXddbXKhtnXY%2FctrqTFnsfxgPgQLEvJZcIt6KFpOPtcS1TKSvQ16zYyNCgpYY5K2bwPiRMgvZGYZ7P1XCHcnwzaiPB8eFE%2BcuFvR5LzM9WxvopKXJ1Z0&X-Amz-Signature=6c67a31c3364567be94ee3e440a8691afac0af9f066dfebf51f229aa19400a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56TQRHI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyy7Gh8qInryFV3DBC%2FABtc6RD%2FS2BjRb%2FLNG721KASAiAEUx5%2F8Qu1oEtxpXnrC0IzhYWS8yW3A88hFYZdCUvnmCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuiGPvlcvLon7cS5KtwDbzV3CAUoHle1UA%2BJxPEOpvzdVQY3Hr5k1jktpiJfVKF90e6X9mOA1hruk6NSDvAbW8OhtdbtOqLlSpqZcleD5VPs4Kx7ph58yHq%2Bpl1JEMiwP3%2FJD9xatx8iVQirGQXDBU3xPDWXpT9sXKku95Q5ke8dji3rGGvo8nhMgNrIIRIw34tkHsV5G5GchnTXYpwRgfVXx7dQEK9YghkswyqwhIeri78h3Ujp38pnu%2BJ5doFkGygBKLqB2pzEFZWoz0K39RbBVHgkPcoWvNLV0%2FhcsV4d3mz7acgy%2FauLXhOCUxbEkcddRU48Uv0tyGMRa0CnAvmKkExJsEGdTAxmC3b2doMBiL8LB5t0OZgNegxwUbAgQSRx%2FeABVEpE46YgBpssfyoEG%2B1XmrBQCZI%2FIP8GKRs3X3eAMdNRJ6G2oVhfjgsCww3%2FAh6FpQ%2FQdS0DSrT5UcAxJhYDt7rHsoN1ebesyTPs079Q7ARUuF77G9Ddpp6QUfPQtMAXaDBmSA490UGoX8MniJjl%2BTd20SGNavfcHWowzcRXxnzpthIMIpNcPcKoQ26exjvIi4jJwGivvquEgSFOLsOg7SdwRrA5T57kicUhEMXuC7iuwGhgzF%2BAcHDSnbi2EiO%2BCQMSSTYwy5i1vQY6pgEFHB6ejZB63ENiZCFLBnU4dccDYf6m8nYUVlnpXWdVd%2FV2Wivpl1CeOsFN0SVUUFBC395vP620a6u3XzNSQC%2Bj%2BGJL3%2BJePaB8dIXwzL0pfXddbXKhtnXY%2FctrqTFnsfxgPgQLEvJZcIt6KFpOPtcS1TKSvQ16zYyNCgpYY5K2bwPiRMgvZGYZ7P1XCHcnwzaiPB8eFE%2BcuFvR5LzM9WxvopKXJ1Z0&X-Amz-Signature=5e07f8288bb26e0aae61a248e4b4dafaa33565eb82a269125352181b0d2d3301&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56TQRHI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyy7Gh8qInryFV3DBC%2FABtc6RD%2FS2BjRb%2FLNG721KASAiAEUx5%2F8Qu1oEtxpXnrC0IzhYWS8yW3A88hFYZdCUvnmCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuiGPvlcvLon7cS5KtwDbzV3CAUoHle1UA%2BJxPEOpvzdVQY3Hr5k1jktpiJfVKF90e6X9mOA1hruk6NSDvAbW8OhtdbtOqLlSpqZcleD5VPs4Kx7ph58yHq%2Bpl1JEMiwP3%2FJD9xatx8iVQirGQXDBU3xPDWXpT9sXKku95Q5ke8dji3rGGvo8nhMgNrIIRIw34tkHsV5G5GchnTXYpwRgfVXx7dQEK9YghkswyqwhIeri78h3Ujp38pnu%2BJ5doFkGygBKLqB2pzEFZWoz0K39RbBVHgkPcoWvNLV0%2FhcsV4d3mz7acgy%2FauLXhOCUxbEkcddRU48Uv0tyGMRa0CnAvmKkExJsEGdTAxmC3b2doMBiL8LB5t0OZgNegxwUbAgQSRx%2FeABVEpE46YgBpssfyoEG%2B1XmrBQCZI%2FIP8GKRs3X3eAMdNRJ6G2oVhfjgsCww3%2FAh6FpQ%2FQdS0DSrT5UcAxJhYDt7rHsoN1ebesyTPs079Q7ARUuF77G9Ddpp6QUfPQtMAXaDBmSA490UGoX8MniJjl%2BTd20SGNavfcHWowzcRXxnzpthIMIpNcPcKoQ26exjvIi4jJwGivvquEgSFOLsOg7SdwRrA5T57kicUhEMXuC7iuwGhgzF%2BAcHDSnbi2EiO%2BCQMSSTYwy5i1vQY6pgEFHB6ejZB63ENiZCFLBnU4dccDYf6m8nYUVlnpXWdVd%2FV2Wivpl1CeOsFN0SVUUFBC395vP620a6u3XzNSQC%2Bj%2BGJL3%2BJePaB8dIXwzL0pfXddbXKhtnXY%2FctrqTFnsfxgPgQLEvJZcIt6KFpOPtcS1TKSvQ16zYyNCgpYY5K2bwPiRMgvZGYZ7P1XCHcnwzaiPB8eFE%2BcuFvR5LzM9WxvopKXJ1Z0&X-Amz-Signature=2d9f10b35b5ce71915e763f1d665afc06c34411820a02e95e8a0e3f5712d7886&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
