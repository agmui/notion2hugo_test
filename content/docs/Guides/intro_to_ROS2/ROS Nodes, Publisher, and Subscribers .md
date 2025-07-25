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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYDPNX4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCWwCYw4zWqzTmxbTFr5FHkrQdCTsOPXCd7c4dZSXm10wIgXw95ksNhfSjc4rypmhB6555WqAAyauckx%2BPNorldLhsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFG5%2FbYL1am%2FAwmlCSrcA3imMEuyDljX3PHrAzNq3BUGNpqewSuIXuKVDL07jIvRK7ErTaYPC3MlSQQz1oYhj%2FX6XtcU3r9cS2hRPCSjG9zX5vC98gHZd8dhZO1MSZK9JKznjVYX0tqdpt%2BigDtrgroWoN6jLa3prBQ8frPCT16SOJ8%2FvV8RL8DQ8jLHeMWjMkrT4QzZstUqZE5hWVduS%2BrYJhF38ensPw7%2BF8sM6pu3iqwd%2B9t%2FrsFZOEZHeUrDEysFwp%2FMdFIOVGm2zAKtWH7CzjCS%2FLSReKxzE4kXvw4yzyOV0aOoxn%2F2Z4MtFC5a0jjaiS3M0o%2FQy2qEv88z6fhnQ7diWlThvf5vzZZzAtxLV8oGlcs0XkTmyUB8RBupVSZyVI2zu4ph5hiohjDCPzTMOMM%2FZeUCjbq7DMKw59wu4BUA%2FqPU8xXlVRbJWQP2QlyvLDSXrFhP0PEClJaJbEB8oAtsxGTs3kNExCdRRa6eKfv4Q19v5FSujukpda%2Bcvd51%2BN7BisHz89XC5q%2BRl20ME%2FYusUoSUrBTe3P6jmPVENgcwJoUQ20YTp%2BAUTjcwqnZ%2BCKaIvZ4pG1Xt726WeUA0wiLH1OzCebO9J2s48oV8hwl1b0Yntc8JLfcXqPpd6M13eQMY66jgSLEMJu8jcQGOqUBcywdI13rrtbUbjzRb7hits8AxHmXcBhtuKwtbyPSE0b9EX798EOLeJCH%2FRnd6z67Wr7ynKiACLJ8h0wcInx9ffFi%2BYf%2FEAdgT5l6ZIy4fpKTs%2BKfnhYZO7bVree6P7FBm0PSBjfIv5OUH1druITL1EtjYdPa%2FIYBQqUk6yNmFIhtqaYlxeN93dLUw7XuTicz58JsKQax2AXjjdgHk2YdbBh5elYf&X-Amz-Signature=949059cf20427baa8bd3de84d43de03e14992c249c638cf753534e0688b277b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYDPNX4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCWwCYw4zWqzTmxbTFr5FHkrQdCTsOPXCd7c4dZSXm10wIgXw95ksNhfSjc4rypmhB6555WqAAyauckx%2BPNorldLhsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFG5%2FbYL1am%2FAwmlCSrcA3imMEuyDljX3PHrAzNq3BUGNpqewSuIXuKVDL07jIvRK7ErTaYPC3MlSQQz1oYhj%2FX6XtcU3r9cS2hRPCSjG9zX5vC98gHZd8dhZO1MSZK9JKznjVYX0tqdpt%2BigDtrgroWoN6jLa3prBQ8frPCT16SOJ8%2FvV8RL8DQ8jLHeMWjMkrT4QzZstUqZE5hWVduS%2BrYJhF38ensPw7%2BF8sM6pu3iqwd%2B9t%2FrsFZOEZHeUrDEysFwp%2FMdFIOVGm2zAKtWH7CzjCS%2FLSReKxzE4kXvw4yzyOV0aOoxn%2F2Z4MtFC5a0jjaiS3M0o%2FQy2qEv88z6fhnQ7diWlThvf5vzZZzAtxLV8oGlcs0XkTmyUB8RBupVSZyVI2zu4ph5hiohjDCPzTMOMM%2FZeUCjbq7DMKw59wu4BUA%2FqPU8xXlVRbJWQP2QlyvLDSXrFhP0PEClJaJbEB8oAtsxGTs3kNExCdRRa6eKfv4Q19v5FSujukpda%2Bcvd51%2BN7BisHz89XC5q%2BRl20ME%2FYusUoSUrBTe3P6jmPVENgcwJoUQ20YTp%2BAUTjcwqnZ%2BCKaIvZ4pG1Xt726WeUA0wiLH1OzCebO9J2s48oV8hwl1b0Yntc8JLfcXqPpd6M13eQMY66jgSLEMJu8jcQGOqUBcywdI13rrtbUbjzRb7hits8AxHmXcBhtuKwtbyPSE0b9EX798EOLeJCH%2FRnd6z67Wr7ynKiACLJ8h0wcInx9ffFi%2BYf%2FEAdgT5l6ZIy4fpKTs%2BKfnhYZO7bVree6P7FBm0PSBjfIv5OUH1druITL1EtjYdPa%2FIYBQqUk6yNmFIhtqaYlxeN93dLUw7XuTicz58JsKQax2AXjjdgHk2YdbBh5elYf&X-Amz-Signature=20cff2c108923c174addd71afe0d0780d1431ec4e40cc13c7ac57f0bdbb73e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYDPNX4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCWwCYw4zWqzTmxbTFr5FHkrQdCTsOPXCd7c4dZSXm10wIgXw95ksNhfSjc4rypmhB6555WqAAyauckx%2BPNorldLhsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFG5%2FbYL1am%2FAwmlCSrcA3imMEuyDljX3PHrAzNq3BUGNpqewSuIXuKVDL07jIvRK7ErTaYPC3MlSQQz1oYhj%2FX6XtcU3r9cS2hRPCSjG9zX5vC98gHZd8dhZO1MSZK9JKznjVYX0tqdpt%2BigDtrgroWoN6jLa3prBQ8frPCT16SOJ8%2FvV8RL8DQ8jLHeMWjMkrT4QzZstUqZE5hWVduS%2BrYJhF38ensPw7%2BF8sM6pu3iqwd%2B9t%2FrsFZOEZHeUrDEysFwp%2FMdFIOVGm2zAKtWH7CzjCS%2FLSReKxzE4kXvw4yzyOV0aOoxn%2F2Z4MtFC5a0jjaiS3M0o%2FQy2qEv88z6fhnQ7diWlThvf5vzZZzAtxLV8oGlcs0XkTmyUB8RBupVSZyVI2zu4ph5hiohjDCPzTMOMM%2FZeUCjbq7DMKw59wu4BUA%2FqPU8xXlVRbJWQP2QlyvLDSXrFhP0PEClJaJbEB8oAtsxGTs3kNExCdRRa6eKfv4Q19v5FSujukpda%2Bcvd51%2BN7BisHz89XC5q%2BRl20ME%2FYusUoSUrBTe3P6jmPVENgcwJoUQ20YTp%2BAUTjcwqnZ%2BCKaIvZ4pG1Xt726WeUA0wiLH1OzCebO9J2s48oV8hwl1b0Yntc8JLfcXqPpd6M13eQMY66jgSLEMJu8jcQGOqUBcywdI13rrtbUbjzRb7hits8AxHmXcBhtuKwtbyPSE0b9EX798EOLeJCH%2FRnd6z67Wr7ynKiACLJ8h0wcInx9ffFi%2BYf%2FEAdgT5l6ZIy4fpKTs%2BKfnhYZO7bVree6P7FBm0PSBjfIv5OUH1druITL1EtjYdPa%2FIYBQqUk6yNmFIhtqaYlxeN93dLUw7XuTicz58JsKQax2AXjjdgHk2YdbBh5elYf&X-Amz-Signature=e54b0a9e689ddf740a10242ba2f2ccffebc18dbdfa8e62bcaa697dea5044e128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYDPNX4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCWwCYw4zWqzTmxbTFr5FHkrQdCTsOPXCd7c4dZSXm10wIgXw95ksNhfSjc4rypmhB6555WqAAyauckx%2BPNorldLhsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFG5%2FbYL1am%2FAwmlCSrcA3imMEuyDljX3PHrAzNq3BUGNpqewSuIXuKVDL07jIvRK7ErTaYPC3MlSQQz1oYhj%2FX6XtcU3r9cS2hRPCSjG9zX5vC98gHZd8dhZO1MSZK9JKznjVYX0tqdpt%2BigDtrgroWoN6jLa3prBQ8frPCT16SOJ8%2FvV8RL8DQ8jLHeMWjMkrT4QzZstUqZE5hWVduS%2BrYJhF38ensPw7%2BF8sM6pu3iqwd%2B9t%2FrsFZOEZHeUrDEysFwp%2FMdFIOVGm2zAKtWH7CzjCS%2FLSReKxzE4kXvw4yzyOV0aOoxn%2F2Z4MtFC5a0jjaiS3M0o%2FQy2qEv88z6fhnQ7diWlThvf5vzZZzAtxLV8oGlcs0XkTmyUB8RBupVSZyVI2zu4ph5hiohjDCPzTMOMM%2FZeUCjbq7DMKw59wu4BUA%2FqPU8xXlVRbJWQP2QlyvLDSXrFhP0PEClJaJbEB8oAtsxGTs3kNExCdRRa6eKfv4Q19v5FSujukpda%2Bcvd51%2BN7BisHz89XC5q%2BRl20ME%2FYusUoSUrBTe3P6jmPVENgcwJoUQ20YTp%2BAUTjcwqnZ%2BCKaIvZ4pG1Xt726WeUA0wiLH1OzCebO9J2s48oV8hwl1b0Yntc8JLfcXqPpd6M13eQMY66jgSLEMJu8jcQGOqUBcywdI13rrtbUbjzRb7hits8AxHmXcBhtuKwtbyPSE0b9EX798EOLeJCH%2FRnd6z67Wr7ynKiACLJ8h0wcInx9ffFi%2BYf%2FEAdgT5l6ZIy4fpKTs%2BKfnhYZO7bVree6P7FBm0PSBjfIv5OUH1druITL1EtjYdPa%2FIYBQqUk6yNmFIhtqaYlxeN93dLUw7XuTicz58JsKQax2AXjjdgHk2YdbBh5elYf&X-Amz-Signature=20a6154a8e6bf06d523f3ded10c0d5b730e4f3af8def746c48347cf975acb642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYDPNX4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCWwCYw4zWqzTmxbTFr5FHkrQdCTsOPXCd7c4dZSXm10wIgXw95ksNhfSjc4rypmhB6555WqAAyauckx%2BPNorldLhsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFG5%2FbYL1am%2FAwmlCSrcA3imMEuyDljX3PHrAzNq3BUGNpqewSuIXuKVDL07jIvRK7ErTaYPC3MlSQQz1oYhj%2FX6XtcU3r9cS2hRPCSjG9zX5vC98gHZd8dhZO1MSZK9JKznjVYX0tqdpt%2BigDtrgroWoN6jLa3prBQ8frPCT16SOJ8%2FvV8RL8DQ8jLHeMWjMkrT4QzZstUqZE5hWVduS%2BrYJhF38ensPw7%2BF8sM6pu3iqwd%2B9t%2FrsFZOEZHeUrDEysFwp%2FMdFIOVGm2zAKtWH7CzjCS%2FLSReKxzE4kXvw4yzyOV0aOoxn%2F2Z4MtFC5a0jjaiS3M0o%2FQy2qEv88z6fhnQ7diWlThvf5vzZZzAtxLV8oGlcs0XkTmyUB8RBupVSZyVI2zu4ph5hiohjDCPzTMOMM%2FZeUCjbq7DMKw59wu4BUA%2FqPU8xXlVRbJWQP2QlyvLDSXrFhP0PEClJaJbEB8oAtsxGTs3kNExCdRRa6eKfv4Q19v5FSujukpda%2Bcvd51%2BN7BisHz89XC5q%2BRl20ME%2FYusUoSUrBTe3P6jmPVENgcwJoUQ20YTp%2BAUTjcwqnZ%2BCKaIvZ4pG1Xt726WeUA0wiLH1OzCebO9J2s48oV8hwl1b0Yntc8JLfcXqPpd6M13eQMY66jgSLEMJu8jcQGOqUBcywdI13rrtbUbjzRb7hits8AxHmXcBhtuKwtbyPSE0b9EX798EOLeJCH%2FRnd6z67Wr7ynKiACLJ8h0wcInx9ffFi%2BYf%2FEAdgT5l6ZIy4fpKTs%2BKfnhYZO7bVree6P7FBm0PSBjfIv5OUH1druITL1EtjYdPa%2FIYBQqUk6yNmFIhtqaYlxeN93dLUw7XuTicz58JsKQax2AXjjdgHk2YdbBh5elYf&X-Amz-Signature=d353b062e4846f5f8257ed81e7dd35b47f3bdd538d2d7c260a180d68aa2ba9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYDPNX4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCWwCYw4zWqzTmxbTFr5FHkrQdCTsOPXCd7c4dZSXm10wIgXw95ksNhfSjc4rypmhB6555WqAAyauckx%2BPNorldLhsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFG5%2FbYL1am%2FAwmlCSrcA3imMEuyDljX3PHrAzNq3BUGNpqewSuIXuKVDL07jIvRK7ErTaYPC3MlSQQz1oYhj%2FX6XtcU3r9cS2hRPCSjG9zX5vC98gHZd8dhZO1MSZK9JKznjVYX0tqdpt%2BigDtrgroWoN6jLa3prBQ8frPCT16SOJ8%2FvV8RL8DQ8jLHeMWjMkrT4QzZstUqZE5hWVduS%2BrYJhF38ensPw7%2BF8sM6pu3iqwd%2B9t%2FrsFZOEZHeUrDEysFwp%2FMdFIOVGm2zAKtWH7CzjCS%2FLSReKxzE4kXvw4yzyOV0aOoxn%2F2Z4MtFC5a0jjaiS3M0o%2FQy2qEv88z6fhnQ7diWlThvf5vzZZzAtxLV8oGlcs0XkTmyUB8RBupVSZyVI2zu4ph5hiohjDCPzTMOMM%2FZeUCjbq7DMKw59wu4BUA%2FqPU8xXlVRbJWQP2QlyvLDSXrFhP0PEClJaJbEB8oAtsxGTs3kNExCdRRa6eKfv4Q19v5FSujukpda%2Bcvd51%2BN7BisHz89XC5q%2BRl20ME%2FYusUoSUrBTe3P6jmPVENgcwJoUQ20YTp%2BAUTjcwqnZ%2BCKaIvZ4pG1Xt726WeUA0wiLH1OzCebO9J2s48oV8hwl1b0Yntc8JLfcXqPpd6M13eQMY66jgSLEMJu8jcQGOqUBcywdI13rrtbUbjzRb7hits8AxHmXcBhtuKwtbyPSE0b9EX798EOLeJCH%2FRnd6z67Wr7ynKiACLJ8h0wcInx9ffFi%2BYf%2FEAdgT5l6ZIy4fpKTs%2BKfnhYZO7bVree6P7FBm0PSBjfIv5OUH1druITL1EtjYdPa%2FIYBQqUk6yNmFIhtqaYlxeN93dLUw7XuTicz58JsKQax2AXjjdgHk2YdbBh5elYf&X-Amz-Signature=144d79fa5094565c55f158a3e1b2b45d9c1da1a7f6ae42236acdec7f5cca935a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYDPNX4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCWwCYw4zWqzTmxbTFr5FHkrQdCTsOPXCd7c4dZSXm10wIgXw95ksNhfSjc4rypmhB6555WqAAyauckx%2BPNorldLhsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFG5%2FbYL1am%2FAwmlCSrcA3imMEuyDljX3PHrAzNq3BUGNpqewSuIXuKVDL07jIvRK7ErTaYPC3MlSQQz1oYhj%2FX6XtcU3r9cS2hRPCSjG9zX5vC98gHZd8dhZO1MSZK9JKznjVYX0tqdpt%2BigDtrgroWoN6jLa3prBQ8frPCT16SOJ8%2FvV8RL8DQ8jLHeMWjMkrT4QzZstUqZE5hWVduS%2BrYJhF38ensPw7%2BF8sM6pu3iqwd%2B9t%2FrsFZOEZHeUrDEysFwp%2FMdFIOVGm2zAKtWH7CzjCS%2FLSReKxzE4kXvw4yzyOV0aOoxn%2F2Z4MtFC5a0jjaiS3M0o%2FQy2qEv88z6fhnQ7diWlThvf5vzZZzAtxLV8oGlcs0XkTmyUB8RBupVSZyVI2zu4ph5hiohjDCPzTMOMM%2FZeUCjbq7DMKw59wu4BUA%2FqPU8xXlVRbJWQP2QlyvLDSXrFhP0PEClJaJbEB8oAtsxGTs3kNExCdRRa6eKfv4Q19v5FSujukpda%2Bcvd51%2BN7BisHz89XC5q%2BRl20ME%2FYusUoSUrBTe3P6jmPVENgcwJoUQ20YTp%2BAUTjcwqnZ%2BCKaIvZ4pG1Xt726WeUA0wiLH1OzCebO9J2s48oV8hwl1b0Yntc8JLfcXqPpd6M13eQMY66jgSLEMJu8jcQGOqUBcywdI13rrtbUbjzRb7hits8AxHmXcBhtuKwtbyPSE0b9EX798EOLeJCH%2FRnd6z67Wr7ynKiACLJ8h0wcInx9ffFi%2BYf%2FEAdgT5l6ZIy4fpKTs%2BKfnhYZO7bVree6P7FBm0PSBjfIv5OUH1druITL1EtjYdPa%2FIYBQqUk6yNmFIhtqaYlxeN93dLUw7XuTicz58JsKQax2AXjjdgHk2YdbBh5elYf&X-Amz-Signature=4ff9fab1610b495df2d2e43ff1de3d342152f53a53c51aff3aaf6e2aeb82bfff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYDPNX4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCWwCYw4zWqzTmxbTFr5FHkrQdCTsOPXCd7c4dZSXm10wIgXw95ksNhfSjc4rypmhB6555WqAAyauckx%2BPNorldLhsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFG5%2FbYL1am%2FAwmlCSrcA3imMEuyDljX3PHrAzNq3BUGNpqewSuIXuKVDL07jIvRK7ErTaYPC3MlSQQz1oYhj%2FX6XtcU3r9cS2hRPCSjG9zX5vC98gHZd8dhZO1MSZK9JKznjVYX0tqdpt%2BigDtrgroWoN6jLa3prBQ8frPCT16SOJ8%2FvV8RL8DQ8jLHeMWjMkrT4QzZstUqZE5hWVduS%2BrYJhF38ensPw7%2BF8sM6pu3iqwd%2B9t%2FrsFZOEZHeUrDEysFwp%2FMdFIOVGm2zAKtWH7CzjCS%2FLSReKxzE4kXvw4yzyOV0aOoxn%2F2Z4MtFC5a0jjaiS3M0o%2FQy2qEv88z6fhnQ7diWlThvf5vzZZzAtxLV8oGlcs0XkTmyUB8RBupVSZyVI2zu4ph5hiohjDCPzTMOMM%2FZeUCjbq7DMKw59wu4BUA%2FqPU8xXlVRbJWQP2QlyvLDSXrFhP0PEClJaJbEB8oAtsxGTs3kNExCdRRa6eKfv4Q19v5FSujukpda%2Bcvd51%2BN7BisHz89XC5q%2BRl20ME%2FYusUoSUrBTe3P6jmPVENgcwJoUQ20YTp%2BAUTjcwqnZ%2BCKaIvZ4pG1Xt726WeUA0wiLH1OzCebO9J2s48oV8hwl1b0Yntc8JLfcXqPpd6M13eQMY66jgSLEMJu8jcQGOqUBcywdI13rrtbUbjzRb7hits8AxHmXcBhtuKwtbyPSE0b9EX798EOLeJCH%2FRnd6z67Wr7ynKiACLJ8h0wcInx9ffFi%2BYf%2FEAdgT5l6ZIy4fpKTs%2BKfnhYZO7bVree6P7FBm0PSBjfIv5OUH1druITL1EtjYdPa%2FIYBQqUk6yNmFIhtqaYlxeN93dLUw7XuTicz58JsKQax2AXjjdgHk2YdbBh5elYf&X-Amz-Signature=2e87920846fdd7415703775a5178dbf53eebe40c016411c4aac3d80f06ec690d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
