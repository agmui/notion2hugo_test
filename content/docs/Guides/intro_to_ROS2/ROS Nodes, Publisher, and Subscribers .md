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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRIWRI3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC0%2B5O59eLRvUEhOcoukLR99z2I22VkcR9bc2TNe3v3PQIhAN5q8TllyX5N7NQDLVz%2Bb57gdUo5Q0bb6baE1Pz0mTxTKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcEHR0kzcHIKdQXvAq3ANDMNx3J9WkH%2BmQm0V9ayL8cVJ%2BAptWfVGzNFHVUbodcAtOuWCToaecM4QUXcM9XAv32b0tR2B1NfJbRy%2Bu5Ku1eIIUERtTMVJx%2F%2BMogACGYtP6V3%2FTZKAS3Q3b2sBA4YJaTFy5%2FvxU9zaAmRZfmQFgx3Wn6lBF4Xtwh0kfPM7i8t%2BJkwNg9qpfmnLMFyUkb28EzJ0FSimzaz9JMFBjc4uWe%2FXQe%2BCU5CTDZWux2p8%2F1uy0Znzub2eWSlzxWYxGV%2Fwuglg7h2fonSir42Rm%2BcX9o%2FQUuRgQSpYy32QFfhm4YzumC0jP%2FqZbep24zdQIau%2FVOpz33zWwlUBOaBzErFCMMPRxHhY0Sohi0A%2FHa2U6QRpXHrwAFKsr46uBmvw6gaXiUvYCubwU0mNu5T7kRheQ5icboYE9ml65WLnu8GHotxEkgnu%2FPb%2FH8caoMMRRTln%2Fafb3uNeSchyyXcDCqej1lcC0tk00oJ%2FxAQq0Pt8HrxhJ5B4kOfyrw0KdFPDpb6nHfgwTMiNmNEfRW8bRkAJYsrD5YlDDQtritIpLdvWxJv3wfiAgetp1jj3q2SckRNsiBWWdy4m97n4YA9bFbHaPqMU0gaI3Ga%2BrXSIC8JmiFjHlLxFA%2F%2B3kYEeoGDDS6IbBBjqkAVBl5ZgYnqdKq2nMfE5h4GBtoO5WaeL8J0ve6nsuxGHW%2BjduH2NaMIZMXeqxS9yBNuxdNYn8CdtEvGha564GIUZ%2FpB5ezEnWqYn7bomHS4iG4oeabOF3SGdsTQuXjj3RZ0gZ59WIFRF6SJAzYVtkmzpFs3ROMspyacHWS22W9mI8ZQq1t9I%2F2LxH9wbJUEl30kyboXGVYv9JbkuvJ1iY3TpjHbHc&X-Amz-Signature=3c79abe182d016f2e30ca149ed48594f5885b0b25ebdce370e3832681220aea5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRIWRI3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC0%2B5O59eLRvUEhOcoukLR99z2I22VkcR9bc2TNe3v3PQIhAN5q8TllyX5N7NQDLVz%2Bb57gdUo5Q0bb6baE1Pz0mTxTKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcEHR0kzcHIKdQXvAq3ANDMNx3J9WkH%2BmQm0V9ayL8cVJ%2BAptWfVGzNFHVUbodcAtOuWCToaecM4QUXcM9XAv32b0tR2B1NfJbRy%2Bu5Ku1eIIUERtTMVJx%2F%2BMogACGYtP6V3%2FTZKAS3Q3b2sBA4YJaTFy5%2FvxU9zaAmRZfmQFgx3Wn6lBF4Xtwh0kfPM7i8t%2BJkwNg9qpfmnLMFyUkb28EzJ0FSimzaz9JMFBjc4uWe%2FXQe%2BCU5CTDZWux2p8%2F1uy0Znzub2eWSlzxWYxGV%2Fwuglg7h2fonSir42Rm%2BcX9o%2FQUuRgQSpYy32QFfhm4YzumC0jP%2FqZbep24zdQIau%2FVOpz33zWwlUBOaBzErFCMMPRxHhY0Sohi0A%2FHa2U6QRpXHrwAFKsr46uBmvw6gaXiUvYCubwU0mNu5T7kRheQ5icboYE9ml65WLnu8GHotxEkgnu%2FPb%2FH8caoMMRRTln%2Fafb3uNeSchyyXcDCqej1lcC0tk00oJ%2FxAQq0Pt8HrxhJ5B4kOfyrw0KdFPDpb6nHfgwTMiNmNEfRW8bRkAJYsrD5YlDDQtritIpLdvWxJv3wfiAgetp1jj3q2SckRNsiBWWdy4m97n4YA9bFbHaPqMU0gaI3Ga%2BrXSIC8JmiFjHlLxFA%2F%2B3kYEeoGDDS6IbBBjqkAVBl5ZgYnqdKq2nMfE5h4GBtoO5WaeL8J0ve6nsuxGHW%2BjduH2NaMIZMXeqxS9yBNuxdNYn8CdtEvGha564GIUZ%2FpB5ezEnWqYn7bomHS4iG4oeabOF3SGdsTQuXjj3RZ0gZ59WIFRF6SJAzYVtkmzpFs3ROMspyacHWS22W9mI8ZQq1t9I%2F2LxH9wbJUEl30kyboXGVYv9JbkuvJ1iY3TpjHbHc&X-Amz-Signature=8f69bc8d62a0400fb041437d675d395cca03e27ef23a310b00b304640880aefe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRIWRI3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC0%2B5O59eLRvUEhOcoukLR99z2I22VkcR9bc2TNe3v3PQIhAN5q8TllyX5N7NQDLVz%2Bb57gdUo5Q0bb6baE1Pz0mTxTKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcEHR0kzcHIKdQXvAq3ANDMNx3J9WkH%2BmQm0V9ayL8cVJ%2BAptWfVGzNFHVUbodcAtOuWCToaecM4QUXcM9XAv32b0tR2B1NfJbRy%2Bu5Ku1eIIUERtTMVJx%2F%2BMogACGYtP6V3%2FTZKAS3Q3b2sBA4YJaTFy5%2FvxU9zaAmRZfmQFgx3Wn6lBF4Xtwh0kfPM7i8t%2BJkwNg9qpfmnLMFyUkb28EzJ0FSimzaz9JMFBjc4uWe%2FXQe%2BCU5CTDZWux2p8%2F1uy0Znzub2eWSlzxWYxGV%2Fwuglg7h2fonSir42Rm%2BcX9o%2FQUuRgQSpYy32QFfhm4YzumC0jP%2FqZbep24zdQIau%2FVOpz33zWwlUBOaBzErFCMMPRxHhY0Sohi0A%2FHa2U6QRpXHrwAFKsr46uBmvw6gaXiUvYCubwU0mNu5T7kRheQ5icboYE9ml65WLnu8GHotxEkgnu%2FPb%2FH8caoMMRRTln%2Fafb3uNeSchyyXcDCqej1lcC0tk00oJ%2FxAQq0Pt8HrxhJ5B4kOfyrw0KdFPDpb6nHfgwTMiNmNEfRW8bRkAJYsrD5YlDDQtritIpLdvWxJv3wfiAgetp1jj3q2SckRNsiBWWdy4m97n4YA9bFbHaPqMU0gaI3Ga%2BrXSIC8JmiFjHlLxFA%2F%2B3kYEeoGDDS6IbBBjqkAVBl5ZgYnqdKq2nMfE5h4GBtoO5WaeL8J0ve6nsuxGHW%2BjduH2NaMIZMXeqxS9yBNuxdNYn8CdtEvGha564GIUZ%2FpB5ezEnWqYn7bomHS4iG4oeabOF3SGdsTQuXjj3RZ0gZ59WIFRF6SJAzYVtkmzpFs3ROMspyacHWS22W9mI8ZQq1t9I%2F2LxH9wbJUEl30kyboXGVYv9JbkuvJ1iY3TpjHbHc&X-Amz-Signature=0554f3f9ef12148aa391193a46f102e841a3dac19ec9018b5e5dc4e1f2ceab09&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRIWRI3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC0%2B5O59eLRvUEhOcoukLR99z2I22VkcR9bc2TNe3v3PQIhAN5q8TllyX5N7NQDLVz%2Bb57gdUo5Q0bb6baE1Pz0mTxTKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcEHR0kzcHIKdQXvAq3ANDMNx3J9WkH%2BmQm0V9ayL8cVJ%2BAptWfVGzNFHVUbodcAtOuWCToaecM4QUXcM9XAv32b0tR2B1NfJbRy%2Bu5Ku1eIIUERtTMVJx%2F%2BMogACGYtP6V3%2FTZKAS3Q3b2sBA4YJaTFy5%2FvxU9zaAmRZfmQFgx3Wn6lBF4Xtwh0kfPM7i8t%2BJkwNg9qpfmnLMFyUkb28EzJ0FSimzaz9JMFBjc4uWe%2FXQe%2BCU5CTDZWux2p8%2F1uy0Znzub2eWSlzxWYxGV%2Fwuglg7h2fonSir42Rm%2BcX9o%2FQUuRgQSpYy32QFfhm4YzumC0jP%2FqZbep24zdQIau%2FVOpz33zWwlUBOaBzErFCMMPRxHhY0Sohi0A%2FHa2U6QRpXHrwAFKsr46uBmvw6gaXiUvYCubwU0mNu5T7kRheQ5icboYE9ml65WLnu8GHotxEkgnu%2FPb%2FH8caoMMRRTln%2Fafb3uNeSchyyXcDCqej1lcC0tk00oJ%2FxAQq0Pt8HrxhJ5B4kOfyrw0KdFPDpb6nHfgwTMiNmNEfRW8bRkAJYsrD5YlDDQtritIpLdvWxJv3wfiAgetp1jj3q2SckRNsiBWWdy4m97n4YA9bFbHaPqMU0gaI3Ga%2BrXSIC8JmiFjHlLxFA%2F%2B3kYEeoGDDS6IbBBjqkAVBl5ZgYnqdKq2nMfE5h4GBtoO5WaeL8J0ve6nsuxGHW%2BjduH2NaMIZMXeqxS9yBNuxdNYn8CdtEvGha564GIUZ%2FpB5ezEnWqYn7bomHS4iG4oeabOF3SGdsTQuXjj3RZ0gZ59WIFRF6SJAzYVtkmzpFs3ROMspyacHWS22W9mI8ZQq1t9I%2F2LxH9wbJUEl30kyboXGVYv9JbkuvJ1iY3TpjHbHc&X-Amz-Signature=2bc3d7a6c734a02d682533b8a40301500ee5521db235351b5fb657b43dfb7532&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRIWRI3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC0%2B5O59eLRvUEhOcoukLR99z2I22VkcR9bc2TNe3v3PQIhAN5q8TllyX5N7NQDLVz%2Bb57gdUo5Q0bb6baE1Pz0mTxTKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcEHR0kzcHIKdQXvAq3ANDMNx3J9WkH%2BmQm0V9ayL8cVJ%2BAptWfVGzNFHVUbodcAtOuWCToaecM4QUXcM9XAv32b0tR2B1NfJbRy%2Bu5Ku1eIIUERtTMVJx%2F%2BMogACGYtP6V3%2FTZKAS3Q3b2sBA4YJaTFy5%2FvxU9zaAmRZfmQFgx3Wn6lBF4Xtwh0kfPM7i8t%2BJkwNg9qpfmnLMFyUkb28EzJ0FSimzaz9JMFBjc4uWe%2FXQe%2BCU5CTDZWux2p8%2F1uy0Znzub2eWSlzxWYxGV%2Fwuglg7h2fonSir42Rm%2BcX9o%2FQUuRgQSpYy32QFfhm4YzumC0jP%2FqZbep24zdQIau%2FVOpz33zWwlUBOaBzErFCMMPRxHhY0Sohi0A%2FHa2U6QRpXHrwAFKsr46uBmvw6gaXiUvYCubwU0mNu5T7kRheQ5icboYE9ml65WLnu8GHotxEkgnu%2FPb%2FH8caoMMRRTln%2Fafb3uNeSchyyXcDCqej1lcC0tk00oJ%2FxAQq0Pt8HrxhJ5B4kOfyrw0KdFPDpb6nHfgwTMiNmNEfRW8bRkAJYsrD5YlDDQtritIpLdvWxJv3wfiAgetp1jj3q2SckRNsiBWWdy4m97n4YA9bFbHaPqMU0gaI3Ga%2BrXSIC8JmiFjHlLxFA%2F%2B3kYEeoGDDS6IbBBjqkAVBl5ZgYnqdKq2nMfE5h4GBtoO5WaeL8J0ve6nsuxGHW%2BjduH2NaMIZMXeqxS9yBNuxdNYn8CdtEvGha564GIUZ%2FpB5ezEnWqYn7bomHS4iG4oeabOF3SGdsTQuXjj3RZ0gZ59WIFRF6SJAzYVtkmzpFs3ROMspyacHWS22W9mI8ZQq1t9I%2F2LxH9wbJUEl30kyboXGVYv9JbkuvJ1iY3TpjHbHc&X-Amz-Signature=8aa21ead65ce5742054f79dd0e4c3ec6e4668bdf46449551b9d18b8477a599a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRIWRI3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC0%2B5O59eLRvUEhOcoukLR99z2I22VkcR9bc2TNe3v3PQIhAN5q8TllyX5N7NQDLVz%2Bb57gdUo5Q0bb6baE1Pz0mTxTKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcEHR0kzcHIKdQXvAq3ANDMNx3J9WkH%2BmQm0V9ayL8cVJ%2BAptWfVGzNFHVUbodcAtOuWCToaecM4QUXcM9XAv32b0tR2B1NfJbRy%2Bu5Ku1eIIUERtTMVJx%2F%2BMogACGYtP6V3%2FTZKAS3Q3b2sBA4YJaTFy5%2FvxU9zaAmRZfmQFgx3Wn6lBF4Xtwh0kfPM7i8t%2BJkwNg9qpfmnLMFyUkb28EzJ0FSimzaz9JMFBjc4uWe%2FXQe%2BCU5CTDZWux2p8%2F1uy0Znzub2eWSlzxWYxGV%2Fwuglg7h2fonSir42Rm%2BcX9o%2FQUuRgQSpYy32QFfhm4YzumC0jP%2FqZbep24zdQIau%2FVOpz33zWwlUBOaBzErFCMMPRxHhY0Sohi0A%2FHa2U6QRpXHrwAFKsr46uBmvw6gaXiUvYCubwU0mNu5T7kRheQ5icboYE9ml65WLnu8GHotxEkgnu%2FPb%2FH8caoMMRRTln%2Fafb3uNeSchyyXcDCqej1lcC0tk00oJ%2FxAQq0Pt8HrxhJ5B4kOfyrw0KdFPDpb6nHfgwTMiNmNEfRW8bRkAJYsrD5YlDDQtritIpLdvWxJv3wfiAgetp1jj3q2SckRNsiBWWdy4m97n4YA9bFbHaPqMU0gaI3Ga%2BrXSIC8JmiFjHlLxFA%2F%2B3kYEeoGDDS6IbBBjqkAVBl5ZgYnqdKq2nMfE5h4GBtoO5WaeL8J0ve6nsuxGHW%2BjduH2NaMIZMXeqxS9yBNuxdNYn8CdtEvGha564GIUZ%2FpB5ezEnWqYn7bomHS4iG4oeabOF3SGdsTQuXjj3RZ0gZ59WIFRF6SJAzYVtkmzpFs3ROMspyacHWS22W9mI8ZQq1t9I%2F2LxH9wbJUEl30kyboXGVYv9JbkuvJ1iY3TpjHbHc&X-Amz-Signature=fc0b1cdf2c3b7bced96e8540c11f715cff4c9f979841293f36280cc1528f34d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRIWRI3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC0%2B5O59eLRvUEhOcoukLR99z2I22VkcR9bc2TNe3v3PQIhAN5q8TllyX5N7NQDLVz%2Bb57gdUo5Q0bb6baE1Pz0mTxTKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcEHR0kzcHIKdQXvAq3ANDMNx3J9WkH%2BmQm0V9ayL8cVJ%2BAptWfVGzNFHVUbodcAtOuWCToaecM4QUXcM9XAv32b0tR2B1NfJbRy%2Bu5Ku1eIIUERtTMVJx%2F%2BMogACGYtP6V3%2FTZKAS3Q3b2sBA4YJaTFy5%2FvxU9zaAmRZfmQFgx3Wn6lBF4Xtwh0kfPM7i8t%2BJkwNg9qpfmnLMFyUkb28EzJ0FSimzaz9JMFBjc4uWe%2FXQe%2BCU5CTDZWux2p8%2F1uy0Znzub2eWSlzxWYxGV%2Fwuglg7h2fonSir42Rm%2BcX9o%2FQUuRgQSpYy32QFfhm4YzumC0jP%2FqZbep24zdQIau%2FVOpz33zWwlUBOaBzErFCMMPRxHhY0Sohi0A%2FHa2U6QRpXHrwAFKsr46uBmvw6gaXiUvYCubwU0mNu5T7kRheQ5icboYE9ml65WLnu8GHotxEkgnu%2FPb%2FH8caoMMRRTln%2Fafb3uNeSchyyXcDCqej1lcC0tk00oJ%2FxAQq0Pt8HrxhJ5B4kOfyrw0KdFPDpb6nHfgwTMiNmNEfRW8bRkAJYsrD5YlDDQtritIpLdvWxJv3wfiAgetp1jj3q2SckRNsiBWWdy4m97n4YA9bFbHaPqMU0gaI3Ga%2BrXSIC8JmiFjHlLxFA%2F%2B3kYEeoGDDS6IbBBjqkAVBl5ZgYnqdKq2nMfE5h4GBtoO5WaeL8J0ve6nsuxGHW%2BjduH2NaMIZMXeqxS9yBNuxdNYn8CdtEvGha564GIUZ%2FpB5ezEnWqYn7bomHS4iG4oeabOF3SGdsTQuXjj3RZ0gZ59WIFRF6SJAzYVtkmzpFs3ROMspyacHWS22W9mI8ZQq1t9I%2F2LxH9wbJUEl30kyboXGVYv9JbkuvJ1iY3TpjHbHc&X-Amz-Signature=49415782f19dacb729f9904ac1ef3b78d0d9395232c30c0e9598e6b1f4ddd2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRIWRI3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC0%2B5O59eLRvUEhOcoukLR99z2I22VkcR9bc2TNe3v3PQIhAN5q8TllyX5N7NQDLVz%2Bb57gdUo5Q0bb6baE1Pz0mTxTKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcEHR0kzcHIKdQXvAq3ANDMNx3J9WkH%2BmQm0V9ayL8cVJ%2BAptWfVGzNFHVUbodcAtOuWCToaecM4QUXcM9XAv32b0tR2B1NfJbRy%2Bu5Ku1eIIUERtTMVJx%2F%2BMogACGYtP6V3%2FTZKAS3Q3b2sBA4YJaTFy5%2FvxU9zaAmRZfmQFgx3Wn6lBF4Xtwh0kfPM7i8t%2BJkwNg9qpfmnLMFyUkb28EzJ0FSimzaz9JMFBjc4uWe%2FXQe%2BCU5CTDZWux2p8%2F1uy0Znzub2eWSlzxWYxGV%2Fwuglg7h2fonSir42Rm%2BcX9o%2FQUuRgQSpYy32QFfhm4YzumC0jP%2FqZbep24zdQIau%2FVOpz33zWwlUBOaBzErFCMMPRxHhY0Sohi0A%2FHa2U6QRpXHrwAFKsr46uBmvw6gaXiUvYCubwU0mNu5T7kRheQ5icboYE9ml65WLnu8GHotxEkgnu%2FPb%2FH8caoMMRRTln%2Fafb3uNeSchyyXcDCqej1lcC0tk00oJ%2FxAQq0Pt8HrxhJ5B4kOfyrw0KdFPDpb6nHfgwTMiNmNEfRW8bRkAJYsrD5YlDDQtritIpLdvWxJv3wfiAgetp1jj3q2SckRNsiBWWdy4m97n4YA9bFbHaPqMU0gaI3Ga%2BrXSIC8JmiFjHlLxFA%2F%2B3kYEeoGDDS6IbBBjqkAVBl5ZgYnqdKq2nMfE5h4GBtoO5WaeL8J0ve6nsuxGHW%2BjduH2NaMIZMXeqxS9yBNuxdNYn8CdtEvGha564GIUZ%2FpB5ezEnWqYn7bomHS4iG4oeabOF3SGdsTQuXjj3RZ0gZ59WIFRF6SJAzYVtkmzpFs3ROMspyacHWS22W9mI8ZQq1t9I%2F2LxH9wbJUEl30kyboXGVYv9JbkuvJ1iY3TpjHbHc&X-Amz-Signature=b608675c786e9a9cca4e05a844c79f6ad020c621bdbbda1ebe78eef2aaf5675c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
