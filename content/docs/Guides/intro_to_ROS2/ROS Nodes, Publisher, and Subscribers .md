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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPF2CRG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEW6oHvD%2Bg3aNOvh0Q63gRhzHpn4UvHrRcAM%2FoGKxFzTAiEA%2BydHZ%2BATCPBPNhAF85I5bwkGbwHp5qhtEt4tFd50%2F6Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDBmbszV7p59g3Fs0ircAyh3CSZ5jGV8TLe%2BqnBjlojoPFGStgj6940rGOn22pK4fispMS6GHavEiPi6jOJa42YVzwCjZxGYgKDzR%2Fibn3UhVpnQYiTDzfHXNBS%2BNKNf2jr6UKMt5EAOshV6pif7hBnvtAfLB3Y%2FvFhYQvznTl0ygNsc39nzB8WRqIKY8tlkSfoGfzK9YAIjWHbRPg8d0KR2lONNJD856KSJh0dOTL4PruyFor384uw15B0xqg6J%2B6FW7ftzZXDs1K0pZ2AQvO1jsBVMSfcN9Zrq6PEtyyJmT%2BDj54BUbFbynHZ9JEv9%2BE%2F97np3HbcmMPaC1PJZxTYDJ%2BPqjLi3Qn9hZkGEwuhMcsRJsXRinR%2FXdWVmfh1YxO7MpWi%2BCeXz%2Fv9nqHGwk8%2Bo%2Bkn%2FOhnF%2FF%2BxRxNgoRqkZ3uNviZ1Fejzuv2wEqh7tsEMUJ9NjB4Sh804wOLs6EwEvKYUsd5JfEHr3JUyrluoWRvXsgbtrbWSUxfuzeGmRb4lmKlL3bzA4a%2BSAFql2HOSKMhWuNi3rVgb%2BNzeYRZ56CbJX%2F%2BG0EaijJfS7vxqZ41gErBASjR3HGpiaLB8L2dqY6TDJm%2F0S31Z8JPixHQvEo0ntTAFyoFmH%2FBaev28Ii2gePGYwqh0mf4fMIyj%2BsQGOqUBagS%2BhJUMptGRd4qcBMFjWUl5%2Bv0AdoGoztdiT3uvPtR8Z9qEKBYDhlLsOSbO7jQ0vybLIv7PeEqWLQU0VCFpNba4BEIAdtuzukSKmnpaemsCJMYG8fNQH3eYXmvPODTvcQQIhTYfRSnnkNRTCSMq%2FiYx5JSpDGNnRMvfykmDlFP2aAlrnsibBJG6Tac9fQM8vkx8SR9nfE9JNq4NjywpAjWiYMQc&X-Amz-Signature=ef2b80409b0739d55e634fd4ef3cca33ee765b7a3b3d9ed982a5cac3a16d144d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPF2CRG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEW6oHvD%2Bg3aNOvh0Q63gRhzHpn4UvHrRcAM%2FoGKxFzTAiEA%2BydHZ%2BATCPBPNhAF85I5bwkGbwHp5qhtEt4tFd50%2F6Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDBmbszV7p59g3Fs0ircAyh3CSZ5jGV8TLe%2BqnBjlojoPFGStgj6940rGOn22pK4fispMS6GHavEiPi6jOJa42YVzwCjZxGYgKDzR%2Fibn3UhVpnQYiTDzfHXNBS%2BNKNf2jr6UKMt5EAOshV6pif7hBnvtAfLB3Y%2FvFhYQvznTl0ygNsc39nzB8WRqIKY8tlkSfoGfzK9YAIjWHbRPg8d0KR2lONNJD856KSJh0dOTL4PruyFor384uw15B0xqg6J%2B6FW7ftzZXDs1K0pZ2AQvO1jsBVMSfcN9Zrq6PEtyyJmT%2BDj54BUbFbynHZ9JEv9%2BE%2F97np3HbcmMPaC1PJZxTYDJ%2BPqjLi3Qn9hZkGEwuhMcsRJsXRinR%2FXdWVmfh1YxO7MpWi%2BCeXz%2Fv9nqHGwk8%2Bo%2Bkn%2FOhnF%2FF%2BxRxNgoRqkZ3uNviZ1Fejzuv2wEqh7tsEMUJ9NjB4Sh804wOLs6EwEvKYUsd5JfEHr3JUyrluoWRvXsgbtrbWSUxfuzeGmRb4lmKlL3bzA4a%2BSAFql2HOSKMhWuNi3rVgb%2BNzeYRZ56CbJX%2F%2BG0EaijJfS7vxqZ41gErBASjR3HGpiaLB8L2dqY6TDJm%2F0S31Z8JPixHQvEo0ntTAFyoFmH%2FBaev28Ii2gePGYwqh0mf4fMIyj%2BsQGOqUBagS%2BhJUMptGRd4qcBMFjWUl5%2Bv0AdoGoztdiT3uvPtR8Z9qEKBYDhlLsOSbO7jQ0vybLIv7PeEqWLQU0VCFpNba4BEIAdtuzukSKmnpaemsCJMYG8fNQH3eYXmvPODTvcQQIhTYfRSnnkNRTCSMq%2FiYx5JSpDGNnRMvfykmDlFP2aAlrnsibBJG6Tac9fQM8vkx8SR9nfE9JNq4NjywpAjWiYMQc&X-Amz-Signature=4c657acb3f98733a3881899e0150fb6ac3b62cf67132d3046f11d82f0dd3ac0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPF2CRG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEW6oHvD%2Bg3aNOvh0Q63gRhzHpn4UvHrRcAM%2FoGKxFzTAiEA%2BydHZ%2BATCPBPNhAF85I5bwkGbwHp5qhtEt4tFd50%2F6Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDBmbszV7p59g3Fs0ircAyh3CSZ5jGV8TLe%2BqnBjlojoPFGStgj6940rGOn22pK4fispMS6GHavEiPi6jOJa42YVzwCjZxGYgKDzR%2Fibn3UhVpnQYiTDzfHXNBS%2BNKNf2jr6UKMt5EAOshV6pif7hBnvtAfLB3Y%2FvFhYQvznTl0ygNsc39nzB8WRqIKY8tlkSfoGfzK9YAIjWHbRPg8d0KR2lONNJD856KSJh0dOTL4PruyFor384uw15B0xqg6J%2B6FW7ftzZXDs1K0pZ2AQvO1jsBVMSfcN9Zrq6PEtyyJmT%2BDj54BUbFbynHZ9JEv9%2BE%2F97np3HbcmMPaC1PJZxTYDJ%2BPqjLi3Qn9hZkGEwuhMcsRJsXRinR%2FXdWVmfh1YxO7MpWi%2BCeXz%2Fv9nqHGwk8%2Bo%2Bkn%2FOhnF%2FF%2BxRxNgoRqkZ3uNviZ1Fejzuv2wEqh7tsEMUJ9NjB4Sh804wOLs6EwEvKYUsd5JfEHr3JUyrluoWRvXsgbtrbWSUxfuzeGmRb4lmKlL3bzA4a%2BSAFql2HOSKMhWuNi3rVgb%2BNzeYRZ56CbJX%2F%2BG0EaijJfS7vxqZ41gErBASjR3HGpiaLB8L2dqY6TDJm%2F0S31Z8JPixHQvEo0ntTAFyoFmH%2FBaev28Ii2gePGYwqh0mf4fMIyj%2BsQGOqUBagS%2BhJUMptGRd4qcBMFjWUl5%2Bv0AdoGoztdiT3uvPtR8Z9qEKBYDhlLsOSbO7jQ0vybLIv7PeEqWLQU0VCFpNba4BEIAdtuzukSKmnpaemsCJMYG8fNQH3eYXmvPODTvcQQIhTYfRSnnkNRTCSMq%2FiYx5JSpDGNnRMvfykmDlFP2aAlrnsibBJG6Tac9fQM8vkx8SR9nfE9JNq4NjywpAjWiYMQc&X-Amz-Signature=00d1b0182476859e99eb530bf44f061232b2f52b9139185340dbae5d5582a44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPF2CRG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEW6oHvD%2Bg3aNOvh0Q63gRhzHpn4UvHrRcAM%2FoGKxFzTAiEA%2BydHZ%2BATCPBPNhAF85I5bwkGbwHp5qhtEt4tFd50%2F6Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDBmbszV7p59g3Fs0ircAyh3CSZ5jGV8TLe%2BqnBjlojoPFGStgj6940rGOn22pK4fispMS6GHavEiPi6jOJa42YVzwCjZxGYgKDzR%2Fibn3UhVpnQYiTDzfHXNBS%2BNKNf2jr6UKMt5EAOshV6pif7hBnvtAfLB3Y%2FvFhYQvznTl0ygNsc39nzB8WRqIKY8tlkSfoGfzK9YAIjWHbRPg8d0KR2lONNJD856KSJh0dOTL4PruyFor384uw15B0xqg6J%2B6FW7ftzZXDs1K0pZ2AQvO1jsBVMSfcN9Zrq6PEtyyJmT%2BDj54BUbFbynHZ9JEv9%2BE%2F97np3HbcmMPaC1PJZxTYDJ%2BPqjLi3Qn9hZkGEwuhMcsRJsXRinR%2FXdWVmfh1YxO7MpWi%2BCeXz%2Fv9nqHGwk8%2Bo%2Bkn%2FOhnF%2FF%2BxRxNgoRqkZ3uNviZ1Fejzuv2wEqh7tsEMUJ9NjB4Sh804wOLs6EwEvKYUsd5JfEHr3JUyrluoWRvXsgbtrbWSUxfuzeGmRb4lmKlL3bzA4a%2BSAFql2HOSKMhWuNi3rVgb%2BNzeYRZ56CbJX%2F%2BG0EaijJfS7vxqZ41gErBASjR3HGpiaLB8L2dqY6TDJm%2F0S31Z8JPixHQvEo0ntTAFyoFmH%2FBaev28Ii2gePGYwqh0mf4fMIyj%2BsQGOqUBagS%2BhJUMptGRd4qcBMFjWUl5%2Bv0AdoGoztdiT3uvPtR8Z9qEKBYDhlLsOSbO7jQ0vybLIv7PeEqWLQU0VCFpNba4BEIAdtuzukSKmnpaemsCJMYG8fNQH3eYXmvPODTvcQQIhTYfRSnnkNRTCSMq%2FiYx5JSpDGNnRMvfykmDlFP2aAlrnsibBJG6Tac9fQM8vkx8SR9nfE9JNq4NjywpAjWiYMQc&X-Amz-Signature=ccc5e6d4dcae025b62ebb8e91094a7f826dd40446b5471872965084036bd32ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPF2CRG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEW6oHvD%2Bg3aNOvh0Q63gRhzHpn4UvHrRcAM%2FoGKxFzTAiEA%2BydHZ%2BATCPBPNhAF85I5bwkGbwHp5qhtEt4tFd50%2F6Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDBmbszV7p59g3Fs0ircAyh3CSZ5jGV8TLe%2BqnBjlojoPFGStgj6940rGOn22pK4fispMS6GHavEiPi6jOJa42YVzwCjZxGYgKDzR%2Fibn3UhVpnQYiTDzfHXNBS%2BNKNf2jr6UKMt5EAOshV6pif7hBnvtAfLB3Y%2FvFhYQvznTl0ygNsc39nzB8WRqIKY8tlkSfoGfzK9YAIjWHbRPg8d0KR2lONNJD856KSJh0dOTL4PruyFor384uw15B0xqg6J%2B6FW7ftzZXDs1K0pZ2AQvO1jsBVMSfcN9Zrq6PEtyyJmT%2BDj54BUbFbynHZ9JEv9%2BE%2F97np3HbcmMPaC1PJZxTYDJ%2BPqjLi3Qn9hZkGEwuhMcsRJsXRinR%2FXdWVmfh1YxO7MpWi%2BCeXz%2Fv9nqHGwk8%2Bo%2Bkn%2FOhnF%2FF%2BxRxNgoRqkZ3uNviZ1Fejzuv2wEqh7tsEMUJ9NjB4Sh804wOLs6EwEvKYUsd5JfEHr3JUyrluoWRvXsgbtrbWSUxfuzeGmRb4lmKlL3bzA4a%2BSAFql2HOSKMhWuNi3rVgb%2BNzeYRZ56CbJX%2F%2BG0EaijJfS7vxqZ41gErBASjR3HGpiaLB8L2dqY6TDJm%2F0S31Z8JPixHQvEo0ntTAFyoFmH%2FBaev28Ii2gePGYwqh0mf4fMIyj%2BsQGOqUBagS%2BhJUMptGRd4qcBMFjWUl5%2Bv0AdoGoztdiT3uvPtR8Z9qEKBYDhlLsOSbO7jQ0vybLIv7PeEqWLQU0VCFpNba4BEIAdtuzukSKmnpaemsCJMYG8fNQH3eYXmvPODTvcQQIhTYfRSnnkNRTCSMq%2FiYx5JSpDGNnRMvfykmDlFP2aAlrnsibBJG6Tac9fQM8vkx8SR9nfE9JNq4NjywpAjWiYMQc&X-Amz-Signature=8ee02e0aed3542beceed5a735e0293ab49231c0206155c39862b3fea66ff4b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPF2CRG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEW6oHvD%2Bg3aNOvh0Q63gRhzHpn4UvHrRcAM%2FoGKxFzTAiEA%2BydHZ%2BATCPBPNhAF85I5bwkGbwHp5qhtEt4tFd50%2F6Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDBmbszV7p59g3Fs0ircAyh3CSZ5jGV8TLe%2BqnBjlojoPFGStgj6940rGOn22pK4fispMS6GHavEiPi6jOJa42YVzwCjZxGYgKDzR%2Fibn3UhVpnQYiTDzfHXNBS%2BNKNf2jr6UKMt5EAOshV6pif7hBnvtAfLB3Y%2FvFhYQvznTl0ygNsc39nzB8WRqIKY8tlkSfoGfzK9YAIjWHbRPg8d0KR2lONNJD856KSJh0dOTL4PruyFor384uw15B0xqg6J%2B6FW7ftzZXDs1K0pZ2AQvO1jsBVMSfcN9Zrq6PEtyyJmT%2BDj54BUbFbynHZ9JEv9%2BE%2F97np3HbcmMPaC1PJZxTYDJ%2BPqjLi3Qn9hZkGEwuhMcsRJsXRinR%2FXdWVmfh1YxO7MpWi%2BCeXz%2Fv9nqHGwk8%2Bo%2Bkn%2FOhnF%2FF%2BxRxNgoRqkZ3uNviZ1Fejzuv2wEqh7tsEMUJ9NjB4Sh804wOLs6EwEvKYUsd5JfEHr3JUyrluoWRvXsgbtrbWSUxfuzeGmRb4lmKlL3bzA4a%2BSAFql2HOSKMhWuNi3rVgb%2BNzeYRZ56CbJX%2F%2BG0EaijJfS7vxqZ41gErBASjR3HGpiaLB8L2dqY6TDJm%2F0S31Z8JPixHQvEo0ntTAFyoFmH%2FBaev28Ii2gePGYwqh0mf4fMIyj%2BsQGOqUBagS%2BhJUMptGRd4qcBMFjWUl5%2Bv0AdoGoztdiT3uvPtR8Z9qEKBYDhlLsOSbO7jQ0vybLIv7PeEqWLQU0VCFpNba4BEIAdtuzukSKmnpaemsCJMYG8fNQH3eYXmvPODTvcQQIhTYfRSnnkNRTCSMq%2FiYx5JSpDGNnRMvfykmDlFP2aAlrnsibBJG6Tac9fQM8vkx8SR9nfE9JNq4NjywpAjWiYMQc&X-Amz-Signature=dd392c8cea25c4dbe78eb0b70a9210f2f710176df379c8abaf657dda88e4b6bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPF2CRG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEW6oHvD%2Bg3aNOvh0Q63gRhzHpn4UvHrRcAM%2FoGKxFzTAiEA%2BydHZ%2BATCPBPNhAF85I5bwkGbwHp5qhtEt4tFd50%2F6Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDBmbszV7p59g3Fs0ircAyh3CSZ5jGV8TLe%2BqnBjlojoPFGStgj6940rGOn22pK4fispMS6GHavEiPi6jOJa42YVzwCjZxGYgKDzR%2Fibn3UhVpnQYiTDzfHXNBS%2BNKNf2jr6UKMt5EAOshV6pif7hBnvtAfLB3Y%2FvFhYQvznTl0ygNsc39nzB8WRqIKY8tlkSfoGfzK9YAIjWHbRPg8d0KR2lONNJD856KSJh0dOTL4PruyFor384uw15B0xqg6J%2B6FW7ftzZXDs1K0pZ2AQvO1jsBVMSfcN9Zrq6PEtyyJmT%2BDj54BUbFbynHZ9JEv9%2BE%2F97np3HbcmMPaC1PJZxTYDJ%2BPqjLi3Qn9hZkGEwuhMcsRJsXRinR%2FXdWVmfh1YxO7MpWi%2BCeXz%2Fv9nqHGwk8%2Bo%2Bkn%2FOhnF%2FF%2BxRxNgoRqkZ3uNviZ1Fejzuv2wEqh7tsEMUJ9NjB4Sh804wOLs6EwEvKYUsd5JfEHr3JUyrluoWRvXsgbtrbWSUxfuzeGmRb4lmKlL3bzA4a%2BSAFql2HOSKMhWuNi3rVgb%2BNzeYRZ56CbJX%2F%2BG0EaijJfS7vxqZ41gErBASjR3HGpiaLB8L2dqY6TDJm%2F0S31Z8JPixHQvEo0ntTAFyoFmH%2FBaev28Ii2gePGYwqh0mf4fMIyj%2BsQGOqUBagS%2BhJUMptGRd4qcBMFjWUl5%2Bv0AdoGoztdiT3uvPtR8Z9qEKBYDhlLsOSbO7jQ0vybLIv7PeEqWLQU0VCFpNba4BEIAdtuzukSKmnpaemsCJMYG8fNQH3eYXmvPODTvcQQIhTYfRSnnkNRTCSMq%2FiYx5JSpDGNnRMvfykmDlFP2aAlrnsibBJG6Tac9fQM8vkx8SR9nfE9JNq4NjywpAjWiYMQc&X-Amz-Signature=e452e072d14f3e72abcb0c1f8238f49a5582a70286618c47aadf6c009f10a319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPF2CRG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEW6oHvD%2Bg3aNOvh0Q63gRhzHpn4UvHrRcAM%2FoGKxFzTAiEA%2BydHZ%2BATCPBPNhAF85I5bwkGbwHp5qhtEt4tFd50%2F6Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDBmbszV7p59g3Fs0ircAyh3CSZ5jGV8TLe%2BqnBjlojoPFGStgj6940rGOn22pK4fispMS6GHavEiPi6jOJa42YVzwCjZxGYgKDzR%2Fibn3UhVpnQYiTDzfHXNBS%2BNKNf2jr6UKMt5EAOshV6pif7hBnvtAfLB3Y%2FvFhYQvznTl0ygNsc39nzB8WRqIKY8tlkSfoGfzK9YAIjWHbRPg8d0KR2lONNJD856KSJh0dOTL4PruyFor384uw15B0xqg6J%2B6FW7ftzZXDs1K0pZ2AQvO1jsBVMSfcN9Zrq6PEtyyJmT%2BDj54BUbFbynHZ9JEv9%2BE%2F97np3HbcmMPaC1PJZxTYDJ%2BPqjLi3Qn9hZkGEwuhMcsRJsXRinR%2FXdWVmfh1YxO7MpWi%2BCeXz%2Fv9nqHGwk8%2Bo%2Bkn%2FOhnF%2FF%2BxRxNgoRqkZ3uNviZ1Fejzuv2wEqh7tsEMUJ9NjB4Sh804wOLs6EwEvKYUsd5JfEHr3JUyrluoWRvXsgbtrbWSUxfuzeGmRb4lmKlL3bzA4a%2BSAFql2HOSKMhWuNi3rVgb%2BNzeYRZ56CbJX%2F%2BG0EaijJfS7vxqZ41gErBASjR3HGpiaLB8L2dqY6TDJm%2F0S31Z8JPixHQvEo0ntTAFyoFmH%2FBaev28Ii2gePGYwqh0mf4fMIyj%2BsQGOqUBagS%2BhJUMptGRd4qcBMFjWUl5%2Bv0AdoGoztdiT3uvPtR8Z9qEKBYDhlLsOSbO7jQ0vybLIv7PeEqWLQU0VCFpNba4BEIAdtuzukSKmnpaemsCJMYG8fNQH3eYXmvPODTvcQQIhTYfRSnnkNRTCSMq%2FiYx5JSpDGNnRMvfykmDlFP2aAlrnsibBJG6Tac9fQM8vkx8SR9nfE9JNq4NjywpAjWiYMQc&X-Amz-Signature=87250fd1a3914f2ac167336fd51479e2a732e3b1e160a7369809274bc3ceae18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
