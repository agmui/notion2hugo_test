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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6EWC7V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLCDucu3AVjzhzVqPrQf2gUlncDCHWlN0bN1zbgvEQsAiEAnUf5hl3xOQPvI8R0TnGkJRG9SelUs4VX1hWUpAVo6eYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKllt%2Fk3ERLXc6G5FircA%2FBBvlj4%2B%2BfoXj%2BeCUey0oU%2BPIsF5jGPNEBNrlN%2FtlAU7YqryJXb5aGOja1afAsin2y4VO4ThPb6NX5Q4brUFJoTII%2Bh3TPrLQggQbhQSL7Qfo1ct7oSBeTxu3NNkFwoao9%2BIflxj00ahhi8FQQ919RL8pDC70956rDiUrM%2FwWuljg6Q5PJmQ%2BOMf1PFBlVwtqkMN0wPNnJDIedLiCzfpkUoSXAo06bGRqag6YWM7tOiwDdXT5ZCV7WcCz75CkgKz%2BaJcth1f2AxT%2B1%2FtwBON1hIpvn3XoWggZMTfcCegsBqD57fdncvi0P62ST4SzbgmuXyUXTiAw1Jvp0jGeqHfm02N00yGZPLjOxjtN2azDKfbiZWgrDSbfmD9J0AF97%2BPY7xcSL%2Bzju%2BL6C7DRvktCs5mmDv67wFs6JnABXeRT0f1mVTfsIvMUC5SED%2BvtBuwE6SqPTjseHdGOfrwkT93YvPFPV2UBuPTafsuBBcukoBC1cKwwBTyN3BIWG6rkZCR%2BTuSLVEw1zWEKAhye0Qiljma8Hh8bnVfgEk1%2FF8%2FITcM0%2FQWzowrofi%2BOEGm6iQ%2B0OINRsb1W0GRb4f0t993QU77rzsyAcyvIutW8v4yhpHzB18HXK1KuTqRxXUMPT2170GOqUBWtE35JtaXf3T%2F0MBfLI8UT6pjaGQd9L1xRBu9Rvxfd7uN2x%2FSqNigYiOqO0o87F2kdF6DGcXZgY4ocN1p%2FrNUOWJ9X4pPFHCeneQEyhAKkbBkEiHShJSl3aQYnq2004vgeu9n9Mz0%2FC31Foa76RiK5qPMhv3qDiTQm%2FD6r7YxVApLo%2F9yhImF9TF%2FCsm0NI3lLpEjM3uUeJwJlQuS9BTV5%2FXz4%2FW&X-Amz-Signature=2abc16b1a052a4588108fc4d327a780f03f0b58af95576d9cebaeb4b97a5cbcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6EWC7V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLCDucu3AVjzhzVqPrQf2gUlncDCHWlN0bN1zbgvEQsAiEAnUf5hl3xOQPvI8R0TnGkJRG9SelUs4VX1hWUpAVo6eYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKllt%2Fk3ERLXc6G5FircA%2FBBvlj4%2B%2BfoXj%2BeCUey0oU%2BPIsF5jGPNEBNrlN%2FtlAU7YqryJXb5aGOja1afAsin2y4VO4ThPb6NX5Q4brUFJoTII%2Bh3TPrLQggQbhQSL7Qfo1ct7oSBeTxu3NNkFwoao9%2BIflxj00ahhi8FQQ919RL8pDC70956rDiUrM%2FwWuljg6Q5PJmQ%2BOMf1PFBlVwtqkMN0wPNnJDIedLiCzfpkUoSXAo06bGRqag6YWM7tOiwDdXT5ZCV7WcCz75CkgKz%2BaJcth1f2AxT%2B1%2FtwBON1hIpvn3XoWggZMTfcCegsBqD57fdncvi0P62ST4SzbgmuXyUXTiAw1Jvp0jGeqHfm02N00yGZPLjOxjtN2azDKfbiZWgrDSbfmD9J0AF97%2BPY7xcSL%2Bzju%2BL6C7DRvktCs5mmDv67wFs6JnABXeRT0f1mVTfsIvMUC5SED%2BvtBuwE6SqPTjseHdGOfrwkT93YvPFPV2UBuPTafsuBBcukoBC1cKwwBTyN3BIWG6rkZCR%2BTuSLVEw1zWEKAhye0Qiljma8Hh8bnVfgEk1%2FF8%2FITcM0%2FQWzowrofi%2BOEGm6iQ%2B0OINRsb1W0GRb4f0t993QU77rzsyAcyvIutW8v4yhpHzB18HXK1KuTqRxXUMPT2170GOqUBWtE35JtaXf3T%2F0MBfLI8UT6pjaGQd9L1xRBu9Rvxfd7uN2x%2FSqNigYiOqO0o87F2kdF6DGcXZgY4ocN1p%2FrNUOWJ9X4pPFHCeneQEyhAKkbBkEiHShJSl3aQYnq2004vgeu9n9Mz0%2FC31Foa76RiK5qPMhv3qDiTQm%2FD6r7YxVApLo%2F9yhImF9TF%2FCsm0NI3lLpEjM3uUeJwJlQuS9BTV5%2FXz4%2FW&X-Amz-Signature=3dce1b763d6a8d1ad9ef910fd1ee7ea06292142a627584f6db8206f543d7bbcc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6EWC7V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLCDucu3AVjzhzVqPrQf2gUlncDCHWlN0bN1zbgvEQsAiEAnUf5hl3xOQPvI8R0TnGkJRG9SelUs4VX1hWUpAVo6eYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKllt%2Fk3ERLXc6G5FircA%2FBBvlj4%2B%2BfoXj%2BeCUey0oU%2BPIsF5jGPNEBNrlN%2FtlAU7YqryJXb5aGOja1afAsin2y4VO4ThPb6NX5Q4brUFJoTII%2Bh3TPrLQggQbhQSL7Qfo1ct7oSBeTxu3NNkFwoao9%2BIflxj00ahhi8FQQ919RL8pDC70956rDiUrM%2FwWuljg6Q5PJmQ%2BOMf1PFBlVwtqkMN0wPNnJDIedLiCzfpkUoSXAo06bGRqag6YWM7tOiwDdXT5ZCV7WcCz75CkgKz%2BaJcth1f2AxT%2B1%2FtwBON1hIpvn3XoWggZMTfcCegsBqD57fdncvi0P62ST4SzbgmuXyUXTiAw1Jvp0jGeqHfm02N00yGZPLjOxjtN2azDKfbiZWgrDSbfmD9J0AF97%2BPY7xcSL%2Bzju%2BL6C7DRvktCs5mmDv67wFs6JnABXeRT0f1mVTfsIvMUC5SED%2BvtBuwE6SqPTjseHdGOfrwkT93YvPFPV2UBuPTafsuBBcukoBC1cKwwBTyN3BIWG6rkZCR%2BTuSLVEw1zWEKAhye0Qiljma8Hh8bnVfgEk1%2FF8%2FITcM0%2FQWzowrofi%2BOEGm6iQ%2B0OINRsb1W0GRb4f0t993QU77rzsyAcyvIutW8v4yhpHzB18HXK1KuTqRxXUMPT2170GOqUBWtE35JtaXf3T%2F0MBfLI8UT6pjaGQd9L1xRBu9Rvxfd7uN2x%2FSqNigYiOqO0o87F2kdF6DGcXZgY4ocN1p%2FrNUOWJ9X4pPFHCeneQEyhAKkbBkEiHShJSl3aQYnq2004vgeu9n9Mz0%2FC31Foa76RiK5qPMhv3qDiTQm%2FD6r7YxVApLo%2F9yhImF9TF%2FCsm0NI3lLpEjM3uUeJwJlQuS9BTV5%2FXz4%2FW&X-Amz-Signature=a94a51ef7fe02f908eb4f389d86a9d6e8a2e0cc8298febfc83a5e36b8fa2d7dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6EWC7V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLCDucu3AVjzhzVqPrQf2gUlncDCHWlN0bN1zbgvEQsAiEAnUf5hl3xOQPvI8R0TnGkJRG9SelUs4VX1hWUpAVo6eYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKllt%2Fk3ERLXc6G5FircA%2FBBvlj4%2B%2BfoXj%2BeCUey0oU%2BPIsF5jGPNEBNrlN%2FtlAU7YqryJXb5aGOja1afAsin2y4VO4ThPb6NX5Q4brUFJoTII%2Bh3TPrLQggQbhQSL7Qfo1ct7oSBeTxu3NNkFwoao9%2BIflxj00ahhi8FQQ919RL8pDC70956rDiUrM%2FwWuljg6Q5PJmQ%2BOMf1PFBlVwtqkMN0wPNnJDIedLiCzfpkUoSXAo06bGRqag6YWM7tOiwDdXT5ZCV7WcCz75CkgKz%2BaJcth1f2AxT%2B1%2FtwBON1hIpvn3XoWggZMTfcCegsBqD57fdncvi0P62ST4SzbgmuXyUXTiAw1Jvp0jGeqHfm02N00yGZPLjOxjtN2azDKfbiZWgrDSbfmD9J0AF97%2BPY7xcSL%2Bzju%2BL6C7DRvktCs5mmDv67wFs6JnABXeRT0f1mVTfsIvMUC5SED%2BvtBuwE6SqPTjseHdGOfrwkT93YvPFPV2UBuPTafsuBBcukoBC1cKwwBTyN3BIWG6rkZCR%2BTuSLVEw1zWEKAhye0Qiljma8Hh8bnVfgEk1%2FF8%2FITcM0%2FQWzowrofi%2BOEGm6iQ%2B0OINRsb1W0GRb4f0t993QU77rzsyAcyvIutW8v4yhpHzB18HXK1KuTqRxXUMPT2170GOqUBWtE35JtaXf3T%2F0MBfLI8UT6pjaGQd9L1xRBu9Rvxfd7uN2x%2FSqNigYiOqO0o87F2kdF6DGcXZgY4ocN1p%2FrNUOWJ9X4pPFHCeneQEyhAKkbBkEiHShJSl3aQYnq2004vgeu9n9Mz0%2FC31Foa76RiK5qPMhv3qDiTQm%2FD6r7YxVApLo%2F9yhImF9TF%2FCsm0NI3lLpEjM3uUeJwJlQuS9BTV5%2FXz4%2FW&X-Amz-Signature=7d1146355808e7de99ff20ced179812b58f5702d053ee8da573c9f28388588dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6EWC7V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLCDucu3AVjzhzVqPrQf2gUlncDCHWlN0bN1zbgvEQsAiEAnUf5hl3xOQPvI8R0TnGkJRG9SelUs4VX1hWUpAVo6eYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKllt%2Fk3ERLXc6G5FircA%2FBBvlj4%2B%2BfoXj%2BeCUey0oU%2BPIsF5jGPNEBNrlN%2FtlAU7YqryJXb5aGOja1afAsin2y4VO4ThPb6NX5Q4brUFJoTII%2Bh3TPrLQggQbhQSL7Qfo1ct7oSBeTxu3NNkFwoao9%2BIflxj00ahhi8FQQ919RL8pDC70956rDiUrM%2FwWuljg6Q5PJmQ%2BOMf1PFBlVwtqkMN0wPNnJDIedLiCzfpkUoSXAo06bGRqag6YWM7tOiwDdXT5ZCV7WcCz75CkgKz%2BaJcth1f2AxT%2B1%2FtwBON1hIpvn3XoWggZMTfcCegsBqD57fdncvi0P62ST4SzbgmuXyUXTiAw1Jvp0jGeqHfm02N00yGZPLjOxjtN2azDKfbiZWgrDSbfmD9J0AF97%2BPY7xcSL%2Bzju%2BL6C7DRvktCs5mmDv67wFs6JnABXeRT0f1mVTfsIvMUC5SED%2BvtBuwE6SqPTjseHdGOfrwkT93YvPFPV2UBuPTafsuBBcukoBC1cKwwBTyN3BIWG6rkZCR%2BTuSLVEw1zWEKAhye0Qiljma8Hh8bnVfgEk1%2FF8%2FITcM0%2FQWzowrofi%2BOEGm6iQ%2B0OINRsb1W0GRb4f0t993QU77rzsyAcyvIutW8v4yhpHzB18HXK1KuTqRxXUMPT2170GOqUBWtE35JtaXf3T%2F0MBfLI8UT6pjaGQd9L1xRBu9Rvxfd7uN2x%2FSqNigYiOqO0o87F2kdF6DGcXZgY4ocN1p%2FrNUOWJ9X4pPFHCeneQEyhAKkbBkEiHShJSl3aQYnq2004vgeu9n9Mz0%2FC31Foa76RiK5qPMhv3qDiTQm%2FD6r7YxVApLo%2F9yhImF9TF%2FCsm0NI3lLpEjM3uUeJwJlQuS9BTV5%2FXz4%2FW&X-Amz-Signature=0d34f97107367282685e75bf3b5eae51ddb1bc5a30045c7c178e9d962a534e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6EWC7V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLCDucu3AVjzhzVqPrQf2gUlncDCHWlN0bN1zbgvEQsAiEAnUf5hl3xOQPvI8R0TnGkJRG9SelUs4VX1hWUpAVo6eYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKllt%2Fk3ERLXc6G5FircA%2FBBvlj4%2B%2BfoXj%2BeCUey0oU%2BPIsF5jGPNEBNrlN%2FtlAU7YqryJXb5aGOja1afAsin2y4VO4ThPb6NX5Q4brUFJoTII%2Bh3TPrLQggQbhQSL7Qfo1ct7oSBeTxu3NNkFwoao9%2BIflxj00ahhi8FQQ919RL8pDC70956rDiUrM%2FwWuljg6Q5PJmQ%2BOMf1PFBlVwtqkMN0wPNnJDIedLiCzfpkUoSXAo06bGRqag6YWM7tOiwDdXT5ZCV7WcCz75CkgKz%2BaJcth1f2AxT%2B1%2FtwBON1hIpvn3XoWggZMTfcCegsBqD57fdncvi0P62ST4SzbgmuXyUXTiAw1Jvp0jGeqHfm02N00yGZPLjOxjtN2azDKfbiZWgrDSbfmD9J0AF97%2BPY7xcSL%2Bzju%2BL6C7DRvktCs5mmDv67wFs6JnABXeRT0f1mVTfsIvMUC5SED%2BvtBuwE6SqPTjseHdGOfrwkT93YvPFPV2UBuPTafsuBBcukoBC1cKwwBTyN3BIWG6rkZCR%2BTuSLVEw1zWEKAhye0Qiljma8Hh8bnVfgEk1%2FF8%2FITcM0%2FQWzowrofi%2BOEGm6iQ%2B0OINRsb1W0GRb4f0t993QU77rzsyAcyvIutW8v4yhpHzB18HXK1KuTqRxXUMPT2170GOqUBWtE35JtaXf3T%2F0MBfLI8UT6pjaGQd9L1xRBu9Rvxfd7uN2x%2FSqNigYiOqO0o87F2kdF6DGcXZgY4ocN1p%2FrNUOWJ9X4pPFHCeneQEyhAKkbBkEiHShJSl3aQYnq2004vgeu9n9Mz0%2FC31Foa76RiK5qPMhv3qDiTQm%2FD6r7YxVApLo%2F9yhImF9TF%2FCsm0NI3lLpEjM3uUeJwJlQuS9BTV5%2FXz4%2FW&X-Amz-Signature=7fca96826821a3b2f49662bf8c3c6b3db29204ee89029ceae3b44ffaf8b72d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6EWC7V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLCDucu3AVjzhzVqPrQf2gUlncDCHWlN0bN1zbgvEQsAiEAnUf5hl3xOQPvI8R0TnGkJRG9SelUs4VX1hWUpAVo6eYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKllt%2Fk3ERLXc6G5FircA%2FBBvlj4%2B%2BfoXj%2BeCUey0oU%2BPIsF5jGPNEBNrlN%2FtlAU7YqryJXb5aGOja1afAsin2y4VO4ThPb6NX5Q4brUFJoTII%2Bh3TPrLQggQbhQSL7Qfo1ct7oSBeTxu3NNkFwoao9%2BIflxj00ahhi8FQQ919RL8pDC70956rDiUrM%2FwWuljg6Q5PJmQ%2BOMf1PFBlVwtqkMN0wPNnJDIedLiCzfpkUoSXAo06bGRqag6YWM7tOiwDdXT5ZCV7WcCz75CkgKz%2BaJcth1f2AxT%2B1%2FtwBON1hIpvn3XoWggZMTfcCegsBqD57fdncvi0P62ST4SzbgmuXyUXTiAw1Jvp0jGeqHfm02N00yGZPLjOxjtN2azDKfbiZWgrDSbfmD9J0AF97%2BPY7xcSL%2Bzju%2BL6C7DRvktCs5mmDv67wFs6JnABXeRT0f1mVTfsIvMUC5SED%2BvtBuwE6SqPTjseHdGOfrwkT93YvPFPV2UBuPTafsuBBcukoBC1cKwwBTyN3BIWG6rkZCR%2BTuSLVEw1zWEKAhye0Qiljma8Hh8bnVfgEk1%2FF8%2FITcM0%2FQWzowrofi%2BOEGm6iQ%2B0OINRsb1W0GRb4f0t993QU77rzsyAcyvIutW8v4yhpHzB18HXK1KuTqRxXUMPT2170GOqUBWtE35JtaXf3T%2F0MBfLI8UT6pjaGQd9L1xRBu9Rvxfd7uN2x%2FSqNigYiOqO0o87F2kdF6DGcXZgY4ocN1p%2FrNUOWJ9X4pPFHCeneQEyhAKkbBkEiHShJSl3aQYnq2004vgeu9n9Mz0%2FC31Foa76RiK5qPMhv3qDiTQm%2FD6r7YxVApLo%2F9yhImF9TF%2FCsm0NI3lLpEjM3uUeJwJlQuS9BTV5%2FXz4%2FW&X-Amz-Signature=3e16267a2deca73a6520f141b27c75ec4b8e083447120390a866b579911b0660&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6EWC7V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLCDucu3AVjzhzVqPrQf2gUlncDCHWlN0bN1zbgvEQsAiEAnUf5hl3xOQPvI8R0TnGkJRG9SelUs4VX1hWUpAVo6eYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKllt%2Fk3ERLXc6G5FircA%2FBBvlj4%2B%2BfoXj%2BeCUey0oU%2BPIsF5jGPNEBNrlN%2FtlAU7YqryJXb5aGOja1afAsin2y4VO4ThPb6NX5Q4brUFJoTII%2Bh3TPrLQggQbhQSL7Qfo1ct7oSBeTxu3NNkFwoao9%2BIflxj00ahhi8FQQ919RL8pDC70956rDiUrM%2FwWuljg6Q5PJmQ%2BOMf1PFBlVwtqkMN0wPNnJDIedLiCzfpkUoSXAo06bGRqag6YWM7tOiwDdXT5ZCV7WcCz75CkgKz%2BaJcth1f2AxT%2B1%2FtwBON1hIpvn3XoWggZMTfcCegsBqD57fdncvi0P62ST4SzbgmuXyUXTiAw1Jvp0jGeqHfm02N00yGZPLjOxjtN2azDKfbiZWgrDSbfmD9J0AF97%2BPY7xcSL%2Bzju%2BL6C7DRvktCs5mmDv67wFs6JnABXeRT0f1mVTfsIvMUC5SED%2BvtBuwE6SqPTjseHdGOfrwkT93YvPFPV2UBuPTafsuBBcukoBC1cKwwBTyN3BIWG6rkZCR%2BTuSLVEw1zWEKAhye0Qiljma8Hh8bnVfgEk1%2FF8%2FITcM0%2FQWzowrofi%2BOEGm6iQ%2B0OINRsb1W0GRb4f0t993QU77rzsyAcyvIutW8v4yhpHzB18HXK1KuTqRxXUMPT2170GOqUBWtE35JtaXf3T%2F0MBfLI8UT6pjaGQd9L1xRBu9Rvxfd7uN2x%2FSqNigYiOqO0o87F2kdF6DGcXZgY4ocN1p%2FrNUOWJ9X4pPFHCeneQEyhAKkbBkEiHShJSl3aQYnq2004vgeu9n9Mz0%2FC31Foa76RiK5qPMhv3qDiTQm%2FD6r7YxVApLo%2F9yhImF9TF%2FCsm0NI3lLpEjM3uUeJwJlQuS9BTV5%2FXz4%2FW&X-Amz-Signature=9d86fe18631bbb161dfc4c1b1d29f7eb6c1419f26f28b829a32e3e7652b66802&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
