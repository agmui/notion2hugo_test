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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5IQSMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDap3qO77o%2BPNtc4W2SjyHinKIRnN2%2BRpXmiXvReURMVQIhAJVt4njn0lzdA3HmVKTIK7%2F%2BYpLAZeKmwiya7f0JJ%2BOzKv8DCHEQABoMNjM3NDIzMTgzODA1IgxxPyOw5PGmEWoLXAwq3AMTSiXlPB0iz5NybEIsU37lBKHi3GVR5dblRPkD2HxM0fHWf0%2Fyi2d7Njlrj%2B472goeaSMNdt7hfwir07g9F6NAHCF0hy9HmxxrGrTBbS3CSMIbAAt1smWdgom58Q4aI1d1voSU15eMFFEeBYXi3KUO%2F14FlsRC%2Bpyl4eOnsNbyB0FjuniTUThMNeseCcLbAi%2BzTp1TNY%2B%2B%2BRdQ3KNO7DsoijQTYd9mTXNHds446oyq52rBJ5lfqwLLyYRDI0EhvM3sx80%2BO2ZvUqZL9PjOf0B46s77fARUHdVOc3HMtFcKo5SaTLWSNSq7mLpbE%2Bsl33ovI9tFbz5VMqpeyGu83bJx5WSJ4sKbqsMTIGb33ppNzAPS4V7rDmtgVTz1QdMkhwk55p4wgA2Lb0fe%2BjqWh%2BGdPL2RYq5tPtSmgf7jzNKlFS%2By7e7lyF%2B6pXnfI5s1qrTqZeBqq5bPFKiPpK5AI2kOID%2FLtX0eYgVOoyRNk6YH7vl9KtQUAMrzor1sK5HS9EoFikA%2FNlXXVI1hFJLV3EYJV8wGaj3WVTwQq0HDGMmpJ9vhMEDe3xB8GnOPm9TQN5AdwVd3DjgC4LtMAa2ek0KaEVaankXWuFmy62Jn8y4vWy22m1uDRz7eadcxADC294DFBjqkAXs6CrnoCKyEV8%2BhNP2i2weg90hoZHPhCTZOzXQXk%2FXYYpIjsQOrjqKut4yNorvyPhfHDGTngERyXZxbPfImupYPgzZxyhlLwFK%2BYH3Jo0r2JCsZ%2F7DJ9F7OVkmkGJMz8xEQXhhgg8SkRgVng4cD7Sh3%2FZ3DFuzS0Mekyv%2BVsainUX0iG2TniRtX%2BOulmwquePerLF4EMT6IdNFs2k%2BCu1jbSJW%2F&X-Amz-Signature=084fd0090d423f3bdbb358a4be24af9dce8d0890218ecfd0d05c8fbe83a7be75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5IQSMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDap3qO77o%2BPNtc4W2SjyHinKIRnN2%2BRpXmiXvReURMVQIhAJVt4njn0lzdA3HmVKTIK7%2F%2BYpLAZeKmwiya7f0JJ%2BOzKv8DCHEQABoMNjM3NDIzMTgzODA1IgxxPyOw5PGmEWoLXAwq3AMTSiXlPB0iz5NybEIsU37lBKHi3GVR5dblRPkD2HxM0fHWf0%2Fyi2d7Njlrj%2B472goeaSMNdt7hfwir07g9F6NAHCF0hy9HmxxrGrTBbS3CSMIbAAt1smWdgom58Q4aI1d1voSU15eMFFEeBYXi3KUO%2F14FlsRC%2Bpyl4eOnsNbyB0FjuniTUThMNeseCcLbAi%2BzTp1TNY%2B%2B%2BRdQ3KNO7DsoijQTYd9mTXNHds446oyq52rBJ5lfqwLLyYRDI0EhvM3sx80%2BO2ZvUqZL9PjOf0B46s77fARUHdVOc3HMtFcKo5SaTLWSNSq7mLpbE%2Bsl33ovI9tFbz5VMqpeyGu83bJx5WSJ4sKbqsMTIGb33ppNzAPS4V7rDmtgVTz1QdMkhwk55p4wgA2Lb0fe%2BjqWh%2BGdPL2RYq5tPtSmgf7jzNKlFS%2By7e7lyF%2B6pXnfI5s1qrTqZeBqq5bPFKiPpK5AI2kOID%2FLtX0eYgVOoyRNk6YH7vl9KtQUAMrzor1sK5HS9EoFikA%2FNlXXVI1hFJLV3EYJV8wGaj3WVTwQq0HDGMmpJ9vhMEDe3xB8GnOPm9TQN5AdwVd3DjgC4LtMAa2ek0KaEVaankXWuFmy62Jn8y4vWy22m1uDRz7eadcxADC294DFBjqkAXs6CrnoCKyEV8%2BhNP2i2weg90hoZHPhCTZOzXQXk%2FXYYpIjsQOrjqKut4yNorvyPhfHDGTngERyXZxbPfImupYPgzZxyhlLwFK%2BYH3Jo0r2JCsZ%2F7DJ9F7OVkmkGJMz8xEQXhhgg8SkRgVng4cD7Sh3%2FZ3DFuzS0Mekyv%2BVsainUX0iG2TniRtX%2BOulmwquePerLF4EMT6IdNFs2k%2BCu1jbSJW%2F&X-Amz-Signature=420ea2766e7b7cb32ca9ce370ba5dfd12a02a2943cb4cf9c8dd175bce609e680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5IQSMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDap3qO77o%2BPNtc4W2SjyHinKIRnN2%2BRpXmiXvReURMVQIhAJVt4njn0lzdA3HmVKTIK7%2F%2BYpLAZeKmwiya7f0JJ%2BOzKv8DCHEQABoMNjM3NDIzMTgzODA1IgxxPyOw5PGmEWoLXAwq3AMTSiXlPB0iz5NybEIsU37lBKHi3GVR5dblRPkD2HxM0fHWf0%2Fyi2d7Njlrj%2B472goeaSMNdt7hfwir07g9F6NAHCF0hy9HmxxrGrTBbS3CSMIbAAt1smWdgom58Q4aI1d1voSU15eMFFEeBYXi3KUO%2F14FlsRC%2Bpyl4eOnsNbyB0FjuniTUThMNeseCcLbAi%2BzTp1TNY%2B%2B%2BRdQ3KNO7DsoijQTYd9mTXNHds446oyq52rBJ5lfqwLLyYRDI0EhvM3sx80%2BO2ZvUqZL9PjOf0B46s77fARUHdVOc3HMtFcKo5SaTLWSNSq7mLpbE%2Bsl33ovI9tFbz5VMqpeyGu83bJx5WSJ4sKbqsMTIGb33ppNzAPS4V7rDmtgVTz1QdMkhwk55p4wgA2Lb0fe%2BjqWh%2BGdPL2RYq5tPtSmgf7jzNKlFS%2By7e7lyF%2B6pXnfI5s1qrTqZeBqq5bPFKiPpK5AI2kOID%2FLtX0eYgVOoyRNk6YH7vl9KtQUAMrzor1sK5HS9EoFikA%2FNlXXVI1hFJLV3EYJV8wGaj3WVTwQq0HDGMmpJ9vhMEDe3xB8GnOPm9TQN5AdwVd3DjgC4LtMAa2ek0KaEVaankXWuFmy62Jn8y4vWy22m1uDRz7eadcxADC294DFBjqkAXs6CrnoCKyEV8%2BhNP2i2weg90hoZHPhCTZOzXQXk%2FXYYpIjsQOrjqKut4yNorvyPhfHDGTngERyXZxbPfImupYPgzZxyhlLwFK%2BYH3Jo0r2JCsZ%2F7DJ9F7OVkmkGJMz8xEQXhhgg8SkRgVng4cD7Sh3%2FZ3DFuzS0Mekyv%2BVsainUX0iG2TniRtX%2BOulmwquePerLF4EMT6IdNFs2k%2BCu1jbSJW%2F&X-Amz-Signature=773409e7c537ddda8fdb565c1614f2420e72be35abd6e59f79460517024180fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5IQSMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDap3qO77o%2BPNtc4W2SjyHinKIRnN2%2BRpXmiXvReURMVQIhAJVt4njn0lzdA3HmVKTIK7%2F%2BYpLAZeKmwiya7f0JJ%2BOzKv8DCHEQABoMNjM3NDIzMTgzODA1IgxxPyOw5PGmEWoLXAwq3AMTSiXlPB0iz5NybEIsU37lBKHi3GVR5dblRPkD2HxM0fHWf0%2Fyi2d7Njlrj%2B472goeaSMNdt7hfwir07g9F6NAHCF0hy9HmxxrGrTBbS3CSMIbAAt1smWdgom58Q4aI1d1voSU15eMFFEeBYXi3KUO%2F14FlsRC%2Bpyl4eOnsNbyB0FjuniTUThMNeseCcLbAi%2BzTp1TNY%2B%2B%2BRdQ3KNO7DsoijQTYd9mTXNHds446oyq52rBJ5lfqwLLyYRDI0EhvM3sx80%2BO2ZvUqZL9PjOf0B46s77fARUHdVOc3HMtFcKo5SaTLWSNSq7mLpbE%2Bsl33ovI9tFbz5VMqpeyGu83bJx5WSJ4sKbqsMTIGb33ppNzAPS4V7rDmtgVTz1QdMkhwk55p4wgA2Lb0fe%2BjqWh%2BGdPL2RYq5tPtSmgf7jzNKlFS%2By7e7lyF%2B6pXnfI5s1qrTqZeBqq5bPFKiPpK5AI2kOID%2FLtX0eYgVOoyRNk6YH7vl9KtQUAMrzor1sK5HS9EoFikA%2FNlXXVI1hFJLV3EYJV8wGaj3WVTwQq0HDGMmpJ9vhMEDe3xB8GnOPm9TQN5AdwVd3DjgC4LtMAa2ek0KaEVaankXWuFmy62Jn8y4vWy22m1uDRz7eadcxADC294DFBjqkAXs6CrnoCKyEV8%2BhNP2i2weg90hoZHPhCTZOzXQXk%2FXYYpIjsQOrjqKut4yNorvyPhfHDGTngERyXZxbPfImupYPgzZxyhlLwFK%2BYH3Jo0r2JCsZ%2F7DJ9F7OVkmkGJMz8xEQXhhgg8SkRgVng4cD7Sh3%2FZ3DFuzS0Mekyv%2BVsainUX0iG2TniRtX%2BOulmwquePerLF4EMT6IdNFs2k%2BCu1jbSJW%2F&X-Amz-Signature=689b8a24260d45f0915f4dbd1be2c7d72e9805ec2b38b0738e574bb75dae41d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5IQSMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDap3qO77o%2BPNtc4W2SjyHinKIRnN2%2BRpXmiXvReURMVQIhAJVt4njn0lzdA3HmVKTIK7%2F%2BYpLAZeKmwiya7f0JJ%2BOzKv8DCHEQABoMNjM3NDIzMTgzODA1IgxxPyOw5PGmEWoLXAwq3AMTSiXlPB0iz5NybEIsU37lBKHi3GVR5dblRPkD2HxM0fHWf0%2Fyi2d7Njlrj%2B472goeaSMNdt7hfwir07g9F6NAHCF0hy9HmxxrGrTBbS3CSMIbAAt1smWdgom58Q4aI1d1voSU15eMFFEeBYXi3KUO%2F14FlsRC%2Bpyl4eOnsNbyB0FjuniTUThMNeseCcLbAi%2BzTp1TNY%2B%2B%2BRdQ3KNO7DsoijQTYd9mTXNHds446oyq52rBJ5lfqwLLyYRDI0EhvM3sx80%2BO2ZvUqZL9PjOf0B46s77fARUHdVOc3HMtFcKo5SaTLWSNSq7mLpbE%2Bsl33ovI9tFbz5VMqpeyGu83bJx5WSJ4sKbqsMTIGb33ppNzAPS4V7rDmtgVTz1QdMkhwk55p4wgA2Lb0fe%2BjqWh%2BGdPL2RYq5tPtSmgf7jzNKlFS%2By7e7lyF%2B6pXnfI5s1qrTqZeBqq5bPFKiPpK5AI2kOID%2FLtX0eYgVOoyRNk6YH7vl9KtQUAMrzor1sK5HS9EoFikA%2FNlXXVI1hFJLV3EYJV8wGaj3WVTwQq0HDGMmpJ9vhMEDe3xB8GnOPm9TQN5AdwVd3DjgC4LtMAa2ek0KaEVaankXWuFmy62Jn8y4vWy22m1uDRz7eadcxADC294DFBjqkAXs6CrnoCKyEV8%2BhNP2i2weg90hoZHPhCTZOzXQXk%2FXYYpIjsQOrjqKut4yNorvyPhfHDGTngERyXZxbPfImupYPgzZxyhlLwFK%2BYH3Jo0r2JCsZ%2F7DJ9F7OVkmkGJMz8xEQXhhgg8SkRgVng4cD7Sh3%2FZ3DFuzS0Mekyv%2BVsainUX0iG2TniRtX%2BOulmwquePerLF4EMT6IdNFs2k%2BCu1jbSJW%2F&X-Amz-Signature=59e9892e8d97fcd99634b6f79a5b29af302cf969782223a33a049f9ec2695654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5IQSMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDap3qO77o%2BPNtc4W2SjyHinKIRnN2%2BRpXmiXvReURMVQIhAJVt4njn0lzdA3HmVKTIK7%2F%2BYpLAZeKmwiya7f0JJ%2BOzKv8DCHEQABoMNjM3NDIzMTgzODA1IgxxPyOw5PGmEWoLXAwq3AMTSiXlPB0iz5NybEIsU37lBKHi3GVR5dblRPkD2HxM0fHWf0%2Fyi2d7Njlrj%2B472goeaSMNdt7hfwir07g9F6NAHCF0hy9HmxxrGrTBbS3CSMIbAAt1smWdgom58Q4aI1d1voSU15eMFFEeBYXi3KUO%2F14FlsRC%2Bpyl4eOnsNbyB0FjuniTUThMNeseCcLbAi%2BzTp1TNY%2B%2B%2BRdQ3KNO7DsoijQTYd9mTXNHds446oyq52rBJ5lfqwLLyYRDI0EhvM3sx80%2BO2ZvUqZL9PjOf0B46s77fARUHdVOc3HMtFcKo5SaTLWSNSq7mLpbE%2Bsl33ovI9tFbz5VMqpeyGu83bJx5WSJ4sKbqsMTIGb33ppNzAPS4V7rDmtgVTz1QdMkhwk55p4wgA2Lb0fe%2BjqWh%2BGdPL2RYq5tPtSmgf7jzNKlFS%2By7e7lyF%2B6pXnfI5s1qrTqZeBqq5bPFKiPpK5AI2kOID%2FLtX0eYgVOoyRNk6YH7vl9KtQUAMrzor1sK5HS9EoFikA%2FNlXXVI1hFJLV3EYJV8wGaj3WVTwQq0HDGMmpJ9vhMEDe3xB8GnOPm9TQN5AdwVd3DjgC4LtMAa2ek0KaEVaankXWuFmy62Jn8y4vWy22m1uDRz7eadcxADC294DFBjqkAXs6CrnoCKyEV8%2BhNP2i2weg90hoZHPhCTZOzXQXk%2FXYYpIjsQOrjqKut4yNorvyPhfHDGTngERyXZxbPfImupYPgzZxyhlLwFK%2BYH3Jo0r2JCsZ%2F7DJ9F7OVkmkGJMz8xEQXhhgg8SkRgVng4cD7Sh3%2FZ3DFuzS0Mekyv%2BVsainUX0iG2TniRtX%2BOulmwquePerLF4EMT6IdNFs2k%2BCu1jbSJW%2F&X-Amz-Signature=d44125afc556a112e2920173b897ab01ea065a43bfa84c712dd53e248290b6fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5IQSMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDap3qO77o%2BPNtc4W2SjyHinKIRnN2%2BRpXmiXvReURMVQIhAJVt4njn0lzdA3HmVKTIK7%2F%2BYpLAZeKmwiya7f0JJ%2BOzKv8DCHEQABoMNjM3NDIzMTgzODA1IgxxPyOw5PGmEWoLXAwq3AMTSiXlPB0iz5NybEIsU37lBKHi3GVR5dblRPkD2HxM0fHWf0%2Fyi2d7Njlrj%2B472goeaSMNdt7hfwir07g9F6NAHCF0hy9HmxxrGrTBbS3CSMIbAAt1smWdgom58Q4aI1d1voSU15eMFFEeBYXi3KUO%2F14FlsRC%2Bpyl4eOnsNbyB0FjuniTUThMNeseCcLbAi%2BzTp1TNY%2B%2B%2BRdQ3KNO7DsoijQTYd9mTXNHds446oyq52rBJ5lfqwLLyYRDI0EhvM3sx80%2BO2ZvUqZL9PjOf0B46s77fARUHdVOc3HMtFcKo5SaTLWSNSq7mLpbE%2Bsl33ovI9tFbz5VMqpeyGu83bJx5WSJ4sKbqsMTIGb33ppNzAPS4V7rDmtgVTz1QdMkhwk55p4wgA2Lb0fe%2BjqWh%2BGdPL2RYq5tPtSmgf7jzNKlFS%2By7e7lyF%2B6pXnfI5s1qrTqZeBqq5bPFKiPpK5AI2kOID%2FLtX0eYgVOoyRNk6YH7vl9KtQUAMrzor1sK5HS9EoFikA%2FNlXXVI1hFJLV3EYJV8wGaj3WVTwQq0HDGMmpJ9vhMEDe3xB8GnOPm9TQN5AdwVd3DjgC4LtMAa2ek0KaEVaankXWuFmy62Jn8y4vWy22m1uDRz7eadcxADC294DFBjqkAXs6CrnoCKyEV8%2BhNP2i2weg90hoZHPhCTZOzXQXk%2FXYYpIjsQOrjqKut4yNorvyPhfHDGTngERyXZxbPfImupYPgzZxyhlLwFK%2BYH3Jo0r2JCsZ%2F7DJ9F7OVkmkGJMz8xEQXhhgg8SkRgVng4cD7Sh3%2FZ3DFuzS0Mekyv%2BVsainUX0iG2TniRtX%2BOulmwquePerLF4EMT6IdNFs2k%2BCu1jbSJW%2F&X-Amz-Signature=7bfb3335612549727990f0179974168450eee50f68e87f6ebbc1706831c1d541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5IQSMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDap3qO77o%2BPNtc4W2SjyHinKIRnN2%2BRpXmiXvReURMVQIhAJVt4njn0lzdA3HmVKTIK7%2F%2BYpLAZeKmwiya7f0JJ%2BOzKv8DCHEQABoMNjM3NDIzMTgzODA1IgxxPyOw5PGmEWoLXAwq3AMTSiXlPB0iz5NybEIsU37lBKHi3GVR5dblRPkD2HxM0fHWf0%2Fyi2d7Njlrj%2B472goeaSMNdt7hfwir07g9F6NAHCF0hy9HmxxrGrTBbS3CSMIbAAt1smWdgom58Q4aI1d1voSU15eMFFEeBYXi3KUO%2F14FlsRC%2Bpyl4eOnsNbyB0FjuniTUThMNeseCcLbAi%2BzTp1TNY%2B%2B%2BRdQ3KNO7DsoijQTYd9mTXNHds446oyq52rBJ5lfqwLLyYRDI0EhvM3sx80%2BO2ZvUqZL9PjOf0B46s77fARUHdVOc3HMtFcKo5SaTLWSNSq7mLpbE%2Bsl33ovI9tFbz5VMqpeyGu83bJx5WSJ4sKbqsMTIGb33ppNzAPS4V7rDmtgVTz1QdMkhwk55p4wgA2Lb0fe%2BjqWh%2BGdPL2RYq5tPtSmgf7jzNKlFS%2By7e7lyF%2B6pXnfI5s1qrTqZeBqq5bPFKiPpK5AI2kOID%2FLtX0eYgVOoyRNk6YH7vl9KtQUAMrzor1sK5HS9EoFikA%2FNlXXVI1hFJLV3EYJV8wGaj3WVTwQq0HDGMmpJ9vhMEDe3xB8GnOPm9TQN5AdwVd3DjgC4LtMAa2ek0KaEVaankXWuFmy62Jn8y4vWy22m1uDRz7eadcxADC294DFBjqkAXs6CrnoCKyEV8%2BhNP2i2weg90hoZHPhCTZOzXQXk%2FXYYpIjsQOrjqKut4yNorvyPhfHDGTngERyXZxbPfImupYPgzZxyhlLwFK%2BYH3Jo0r2JCsZ%2F7DJ9F7OVkmkGJMz8xEQXhhgg8SkRgVng4cD7Sh3%2FZ3DFuzS0Mekyv%2BVsainUX0iG2TniRtX%2BOulmwquePerLF4EMT6IdNFs2k%2BCu1jbSJW%2F&X-Amz-Signature=1585b13ddea42e0b5bf8d0bdb146448a3364155fd1efd0c7f2f755c628824b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
