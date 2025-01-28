---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2024-09-02T14:17:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2024-09-02T14:17:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH2HYOQ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIErd91ZWc2ozicNdjdRVPKToqdu6mTEaaVdQR9mrY5a2AiEAr4B0goacVgTYF%2Fh7L9yt2%2Bpftiq6NOPbBdCgPUrRYBUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFrG6B0PJMz0M5qF5yrcA0%2FmDRZTYeGxxlCaegXRlKYnbEs3gWno%2BmeAovDoMEfgZ1xWHEmgIb9d80CwahKbK%2BtMAHZRuvvooJAXd6yF5YTXdLl%2BjajnRcwCug11PbTs6X2aNgZyopwMYGjN0Mk1d9bWQHxqMzHs71kWf5tKcwxHXJT5Hm6z1KxvsWV27M4hdkZ9wwQ96hf2rYWfNUPGJ%2FknEPJdf41N2k0g3c2Fi%2FouBRc7lUvTv5oQ8XRHl4J80sQIcGCmzs%2B0M0fSFLxG4NdXDvOxW0fJlRHJpwAuuMtBDjy05bi%2BAx5NEFPhFiAmcH6VvyM9Yh2ID%2BnXW6aAshGzLsBlNVASgH4IQR3mNIzYNOj7GapCXYAVDm7SE0Et640ruTwH30dPJ%2FctPCXF98BnT3heJYvPEo8ouebr6%2FfYMQqPsSxuntmTc1TmntKHhxj00kmnzIH4dkNGZScdVyZHGsnwYzVReYaEMn0sMVdOfdR6IdlrfT9d%2BsoLPhTXyDwnrZF8Jpoblfc7e%2BmuI6vhC2GgOdNv0%2BxbVtP7DNyC6o05sv18w4OsA9DzH8eH0G%2B9xTgcbp5l2vZodn4xS0WtOqpPhFcSANNUkcnkq%2Fu362%2BxXrlTWiXD%2FulJjuhtcI2iI%2Bd4FR2VW5A6MPnf5LwGOqUBeqDNnXDGP%2Bv%2Buwy%2BxaHdMQNJpDr3CudtFSLabv78XOjsEwA7u%2FTg2NdJw4e0kTE0V80rt3Znninq%2B%2Fvni6qyysf03Z255dI4%2F0q42SGcsHQF1zwG12OAlksBNeod4At5LDs3tHHKVXUEcI5uLOm0IlrPmkRZZxmNJNVO15UwRpdtl%2BGWNBXiJrJs0oyl2HtHi6Y2aMatXvfhn1ml7h3u2CcX8pUM&X-Amz-Signature=15e4b409ff01ee84b08009a89aeedcb557da44fc618964877aada39c7542cdff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH2HYOQ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIErd91ZWc2ozicNdjdRVPKToqdu6mTEaaVdQR9mrY5a2AiEAr4B0goacVgTYF%2Fh7L9yt2%2Bpftiq6NOPbBdCgPUrRYBUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFrG6B0PJMz0M5qF5yrcA0%2FmDRZTYeGxxlCaegXRlKYnbEs3gWno%2BmeAovDoMEfgZ1xWHEmgIb9d80CwahKbK%2BtMAHZRuvvooJAXd6yF5YTXdLl%2BjajnRcwCug11PbTs6X2aNgZyopwMYGjN0Mk1d9bWQHxqMzHs71kWf5tKcwxHXJT5Hm6z1KxvsWV27M4hdkZ9wwQ96hf2rYWfNUPGJ%2FknEPJdf41N2k0g3c2Fi%2FouBRc7lUvTv5oQ8XRHl4J80sQIcGCmzs%2B0M0fSFLxG4NdXDvOxW0fJlRHJpwAuuMtBDjy05bi%2BAx5NEFPhFiAmcH6VvyM9Yh2ID%2BnXW6aAshGzLsBlNVASgH4IQR3mNIzYNOj7GapCXYAVDm7SE0Et640ruTwH30dPJ%2FctPCXF98BnT3heJYvPEo8ouebr6%2FfYMQqPsSxuntmTc1TmntKHhxj00kmnzIH4dkNGZScdVyZHGsnwYzVReYaEMn0sMVdOfdR6IdlrfT9d%2BsoLPhTXyDwnrZF8Jpoblfc7e%2BmuI6vhC2GgOdNv0%2BxbVtP7DNyC6o05sv18w4OsA9DzH8eH0G%2B9xTgcbp5l2vZodn4xS0WtOqpPhFcSANNUkcnkq%2Fu362%2BxXrlTWiXD%2FulJjuhtcI2iI%2Bd4FR2VW5A6MPnf5LwGOqUBeqDNnXDGP%2Bv%2Buwy%2BxaHdMQNJpDr3CudtFSLabv78XOjsEwA7u%2FTg2NdJw4e0kTE0V80rt3Znninq%2B%2Fvni6qyysf03Z255dI4%2F0q42SGcsHQF1zwG12OAlksBNeod4At5LDs3tHHKVXUEcI5uLOm0IlrPmkRZZxmNJNVO15UwRpdtl%2BGWNBXiJrJs0oyl2HtHi6Y2aMatXvfhn1ml7h3u2CcX8pUM&X-Amz-Signature=44efef49791c685f0ff7e40d357ae811c8f52d770edfb6759a7732254c9b5f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH2HYOQ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIErd91ZWc2ozicNdjdRVPKToqdu6mTEaaVdQR9mrY5a2AiEAr4B0goacVgTYF%2Fh7L9yt2%2Bpftiq6NOPbBdCgPUrRYBUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFrG6B0PJMz0M5qF5yrcA0%2FmDRZTYeGxxlCaegXRlKYnbEs3gWno%2BmeAovDoMEfgZ1xWHEmgIb9d80CwahKbK%2BtMAHZRuvvooJAXd6yF5YTXdLl%2BjajnRcwCug11PbTs6X2aNgZyopwMYGjN0Mk1d9bWQHxqMzHs71kWf5tKcwxHXJT5Hm6z1KxvsWV27M4hdkZ9wwQ96hf2rYWfNUPGJ%2FknEPJdf41N2k0g3c2Fi%2FouBRc7lUvTv5oQ8XRHl4J80sQIcGCmzs%2B0M0fSFLxG4NdXDvOxW0fJlRHJpwAuuMtBDjy05bi%2BAx5NEFPhFiAmcH6VvyM9Yh2ID%2BnXW6aAshGzLsBlNVASgH4IQR3mNIzYNOj7GapCXYAVDm7SE0Et640ruTwH30dPJ%2FctPCXF98BnT3heJYvPEo8ouebr6%2FfYMQqPsSxuntmTc1TmntKHhxj00kmnzIH4dkNGZScdVyZHGsnwYzVReYaEMn0sMVdOfdR6IdlrfT9d%2BsoLPhTXyDwnrZF8Jpoblfc7e%2BmuI6vhC2GgOdNv0%2BxbVtP7DNyC6o05sv18w4OsA9DzH8eH0G%2B9xTgcbp5l2vZodn4xS0WtOqpPhFcSANNUkcnkq%2Fu362%2BxXrlTWiXD%2FulJjuhtcI2iI%2Bd4FR2VW5A6MPnf5LwGOqUBeqDNnXDGP%2Bv%2Buwy%2BxaHdMQNJpDr3CudtFSLabv78XOjsEwA7u%2FTg2NdJw4e0kTE0V80rt3Znninq%2B%2Fvni6qyysf03Z255dI4%2F0q42SGcsHQF1zwG12OAlksBNeod4At5LDs3tHHKVXUEcI5uLOm0IlrPmkRZZxmNJNVO15UwRpdtl%2BGWNBXiJrJs0oyl2HtHi6Y2aMatXvfhn1ml7h3u2CcX8pUM&X-Amz-Signature=b41f7bdf03acfcddbc571b9b92eda399600b5554215de006da8224025a55f800&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH2HYOQ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIErd91ZWc2ozicNdjdRVPKToqdu6mTEaaVdQR9mrY5a2AiEAr4B0goacVgTYF%2Fh7L9yt2%2Bpftiq6NOPbBdCgPUrRYBUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFrG6B0PJMz0M5qF5yrcA0%2FmDRZTYeGxxlCaegXRlKYnbEs3gWno%2BmeAovDoMEfgZ1xWHEmgIb9d80CwahKbK%2BtMAHZRuvvooJAXd6yF5YTXdLl%2BjajnRcwCug11PbTs6X2aNgZyopwMYGjN0Mk1d9bWQHxqMzHs71kWf5tKcwxHXJT5Hm6z1KxvsWV27M4hdkZ9wwQ96hf2rYWfNUPGJ%2FknEPJdf41N2k0g3c2Fi%2FouBRc7lUvTv5oQ8XRHl4J80sQIcGCmzs%2B0M0fSFLxG4NdXDvOxW0fJlRHJpwAuuMtBDjy05bi%2BAx5NEFPhFiAmcH6VvyM9Yh2ID%2BnXW6aAshGzLsBlNVASgH4IQR3mNIzYNOj7GapCXYAVDm7SE0Et640ruTwH30dPJ%2FctPCXF98BnT3heJYvPEo8ouebr6%2FfYMQqPsSxuntmTc1TmntKHhxj00kmnzIH4dkNGZScdVyZHGsnwYzVReYaEMn0sMVdOfdR6IdlrfT9d%2BsoLPhTXyDwnrZF8Jpoblfc7e%2BmuI6vhC2GgOdNv0%2BxbVtP7DNyC6o05sv18w4OsA9DzH8eH0G%2B9xTgcbp5l2vZodn4xS0WtOqpPhFcSANNUkcnkq%2Fu362%2BxXrlTWiXD%2FulJjuhtcI2iI%2Bd4FR2VW5A6MPnf5LwGOqUBeqDNnXDGP%2Bv%2Buwy%2BxaHdMQNJpDr3CudtFSLabv78XOjsEwA7u%2FTg2NdJw4e0kTE0V80rt3Znninq%2B%2Fvni6qyysf03Z255dI4%2F0q42SGcsHQF1zwG12OAlksBNeod4At5LDs3tHHKVXUEcI5uLOm0IlrPmkRZZxmNJNVO15UwRpdtl%2BGWNBXiJrJs0oyl2HtHi6Y2aMatXvfhn1ml7h3u2CcX8pUM&X-Amz-Signature=9ba86486d945b9a41bb69389f619817565726de4b6c2194d4f071fc74235ab9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH2HYOQ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIErd91ZWc2ozicNdjdRVPKToqdu6mTEaaVdQR9mrY5a2AiEAr4B0goacVgTYF%2Fh7L9yt2%2Bpftiq6NOPbBdCgPUrRYBUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFrG6B0PJMz0M5qF5yrcA0%2FmDRZTYeGxxlCaegXRlKYnbEs3gWno%2BmeAovDoMEfgZ1xWHEmgIb9d80CwahKbK%2BtMAHZRuvvooJAXd6yF5YTXdLl%2BjajnRcwCug11PbTs6X2aNgZyopwMYGjN0Mk1d9bWQHxqMzHs71kWf5tKcwxHXJT5Hm6z1KxvsWV27M4hdkZ9wwQ96hf2rYWfNUPGJ%2FknEPJdf41N2k0g3c2Fi%2FouBRc7lUvTv5oQ8XRHl4J80sQIcGCmzs%2B0M0fSFLxG4NdXDvOxW0fJlRHJpwAuuMtBDjy05bi%2BAx5NEFPhFiAmcH6VvyM9Yh2ID%2BnXW6aAshGzLsBlNVASgH4IQR3mNIzYNOj7GapCXYAVDm7SE0Et640ruTwH30dPJ%2FctPCXF98BnT3heJYvPEo8ouebr6%2FfYMQqPsSxuntmTc1TmntKHhxj00kmnzIH4dkNGZScdVyZHGsnwYzVReYaEMn0sMVdOfdR6IdlrfT9d%2BsoLPhTXyDwnrZF8Jpoblfc7e%2BmuI6vhC2GgOdNv0%2BxbVtP7DNyC6o05sv18w4OsA9DzH8eH0G%2B9xTgcbp5l2vZodn4xS0WtOqpPhFcSANNUkcnkq%2Fu362%2BxXrlTWiXD%2FulJjuhtcI2iI%2Bd4FR2VW5A6MPnf5LwGOqUBeqDNnXDGP%2Bv%2Buwy%2BxaHdMQNJpDr3CudtFSLabv78XOjsEwA7u%2FTg2NdJw4e0kTE0V80rt3Znninq%2B%2Fvni6qyysf03Z255dI4%2F0q42SGcsHQF1zwG12OAlksBNeod4At5LDs3tHHKVXUEcI5uLOm0IlrPmkRZZxmNJNVO15UwRpdtl%2BGWNBXiJrJs0oyl2HtHi6Y2aMatXvfhn1ml7h3u2CcX8pUM&X-Amz-Signature=7af1091bcf1a344f1ca5ffd82b9ccb1d5717ecbca348eee8ff21a7f5cc0e781d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH2HYOQ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIErd91ZWc2ozicNdjdRVPKToqdu6mTEaaVdQR9mrY5a2AiEAr4B0goacVgTYF%2Fh7L9yt2%2Bpftiq6NOPbBdCgPUrRYBUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFrG6B0PJMz0M5qF5yrcA0%2FmDRZTYeGxxlCaegXRlKYnbEs3gWno%2BmeAovDoMEfgZ1xWHEmgIb9d80CwahKbK%2BtMAHZRuvvooJAXd6yF5YTXdLl%2BjajnRcwCug11PbTs6X2aNgZyopwMYGjN0Mk1d9bWQHxqMzHs71kWf5tKcwxHXJT5Hm6z1KxvsWV27M4hdkZ9wwQ96hf2rYWfNUPGJ%2FknEPJdf41N2k0g3c2Fi%2FouBRc7lUvTv5oQ8XRHl4J80sQIcGCmzs%2B0M0fSFLxG4NdXDvOxW0fJlRHJpwAuuMtBDjy05bi%2BAx5NEFPhFiAmcH6VvyM9Yh2ID%2BnXW6aAshGzLsBlNVASgH4IQR3mNIzYNOj7GapCXYAVDm7SE0Et640ruTwH30dPJ%2FctPCXF98BnT3heJYvPEo8ouebr6%2FfYMQqPsSxuntmTc1TmntKHhxj00kmnzIH4dkNGZScdVyZHGsnwYzVReYaEMn0sMVdOfdR6IdlrfT9d%2BsoLPhTXyDwnrZF8Jpoblfc7e%2BmuI6vhC2GgOdNv0%2BxbVtP7DNyC6o05sv18w4OsA9DzH8eH0G%2B9xTgcbp5l2vZodn4xS0WtOqpPhFcSANNUkcnkq%2Fu362%2BxXrlTWiXD%2FulJjuhtcI2iI%2Bd4FR2VW5A6MPnf5LwGOqUBeqDNnXDGP%2Bv%2Buwy%2BxaHdMQNJpDr3CudtFSLabv78XOjsEwA7u%2FTg2NdJw4e0kTE0V80rt3Znninq%2B%2Fvni6qyysf03Z255dI4%2F0q42SGcsHQF1zwG12OAlksBNeod4At5LDs3tHHKVXUEcI5uLOm0IlrPmkRZZxmNJNVO15UwRpdtl%2BGWNBXiJrJs0oyl2HtHi6Y2aMatXvfhn1ml7h3u2CcX8pUM&X-Amz-Signature=8fb24ee84256baf43c76fc286a7e9052f7b9c6d666781cbee965e3b6e1424235&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH2HYOQ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIErd91ZWc2ozicNdjdRVPKToqdu6mTEaaVdQR9mrY5a2AiEAr4B0goacVgTYF%2Fh7L9yt2%2Bpftiq6NOPbBdCgPUrRYBUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFrG6B0PJMz0M5qF5yrcA0%2FmDRZTYeGxxlCaegXRlKYnbEs3gWno%2BmeAovDoMEfgZ1xWHEmgIb9d80CwahKbK%2BtMAHZRuvvooJAXd6yF5YTXdLl%2BjajnRcwCug11PbTs6X2aNgZyopwMYGjN0Mk1d9bWQHxqMzHs71kWf5tKcwxHXJT5Hm6z1KxvsWV27M4hdkZ9wwQ96hf2rYWfNUPGJ%2FknEPJdf41N2k0g3c2Fi%2FouBRc7lUvTv5oQ8XRHl4J80sQIcGCmzs%2B0M0fSFLxG4NdXDvOxW0fJlRHJpwAuuMtBDjy05bi%2BAx5NEFPhFiAmcH6VvyM9Yh2ID%2BnXW6aAshGzLsBlNVASgH4IQR3mNIzYNOj7GapCXYAVDm7SE0Et640ruTwH30dPJ%2FctPCXF98BnT3heJYvPEo8ouebr6%2FfYMQqPsSxuntmTc1TmntKHhxj00kmnzIH4dkNGZScdVyZHGsnwYzVReYaEMn0sMVdOfdR6IdlrfT9d%2BsoLPhTXyDwnrZF8Jpoblfc7e%2BmuI6vhC2GgOdNv0%2BxbVtP7DNyC6o05sv18w4OsA9DzH8eH0G%2B9xTgcbp5l2vZodn4xS0WtOqpPhFcSANNUkcnkq%2Fu362%2BxXrlTWiXD%2FulJjuhtcI2iI%2Bd4FR2VW5A6MPnf5LwGOqUBeqDNnXDGP%2Bv%2Buwy%2BxaHdMQNJpDr3CudtFSLabv78XOjsEwA7u%2FTg2NdJw4e0kTE0V80rt3Znninq%2B%2Fvni6qyysf03Z255dI4%2F0q42SGcsHQF1zwG12OAlksBNeod4At5LDs3tHHKVXUEcI5uLOm0IlrPmkRZZxmNJNVO15UwRpdtl%2BGWNBXiJrJs0oyl2HtHi6Y2aMatXvfhn1ml7h3u2CcX8pUM&X-Amz-Signature=b36f5df5b95ec406bf19628473893721dcef78577b887f31a45f7a870c010ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH2HYOQ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIErd91ZWc2ozicNdjdRVPKToqdu6mTEaaVdQR9mrY5a2AiEAr4B0goacVgTYF%2Fh7L9yt2%2Bpftiq6NOPbBdCgPUrRYBUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFrG6B0PJMz0M5qF5yrcA0%2FmDRZTYeGxxlCaegXRlKYnbEs3gWno%2BmeAovDoMEfgZ1xWHEmgIb9d80CwahKbK%2BtMAHZRuvvooJAXd6yF5YTXdLl%2BjajnRcwCug11PbTs6X2aNgZyopwMYGjN0Mk1d9bWQHxqMzHs71kWf5tKcwxHXJT5Hm6z1KxvsWV27M4hdkZ9wwQ96hf2rYWfNUPGJ%2FknEPJdf41N2k0g3c2Fi%2FouBRc7lUvTv5oQ8XRHl4J80sQIcGCmzs%2B0M0fSFLxG4NdXDvOxW0fJlRHJpwAuuMtBDjy05bi%2BAx5NEFPhFiAmcH6VvyM9Yh2ID%2BnXW6aAshGzLsBlNVASgH4IQR3mNIzYNOj7GapCXYAVDm7SE0Et640ruTwH30dPJ%2FctPCXF98BnT3heJYvPEo8ouebr6%2FfYMQqPsSxuntmTc1TmntKHhxj00kmnzIH4dkNGZScdVyZHGsnwYzVReYaEMn0sMVdOfdR6IdlrfT9d%2BsoLPhTXyDwnrZF8Jpoblfc7e%2BmuI6vhC2GgOdNv0%2BxbVtP7DNyC6o05sv18w4OsA9DzH8eH0G%2B9xTgcbp5l2vZodn4xS0WtOqpPhFcSANNUkcnkq%2Fu362%2BxXrlTWiXD%2FulJjuhtcI2iI%2Bd4FR2VW5A6MPnf5LwGOqUBeqDNnXDGP%2Bv%2Buwy%2BxaHdMQNJpDr3CudtFSLabv78XOjsEwA7u%2FTg2NdJw4e0kTE0V80rt3Znninq%2B%2Fvni6qyysf03Z255dI4%2F0q42SGcsHQF1zwG12OAlksBNeod4At5LDs3tHHKVXUEcI5uLOm0IlrPmkRZZxmNJNVO15UwRpdtl%2BGWNBXiJrJs0oyl2HtHi6Y2aMatXvfhn1ml7h3u2CcX8pUM&X-Amz-Signature=3f8cb371ba8a2a70a74173931be0d87050bbfd1e93fdf44d728a6fc9278d3a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
