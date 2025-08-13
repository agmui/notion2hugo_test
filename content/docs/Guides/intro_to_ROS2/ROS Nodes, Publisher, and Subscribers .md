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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT7EV76%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BZ%2F30wNPTVUjE5rXPrQL%2Bn%2FzW%2BXwHqfqdRZq0INIYyAiEAidm4db%2BQURKT79Ax7SRxDoaX7wfxmH74iCgdEBnGK6Uq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLsPq8eHOYpDaLyyGyrcA4AWrWexxGSC9CzjvFnjlEZfX26SghWYKsqe2QdjnRvx6TLd5ZQAflkQbH6AEl%2FVfRqUs9L5lKFs5nzVcErk7DJRZwb%2BMYUAmcjVvyrSeneWSrXLqvukjWHfjr50Ce700Ej1ejVJ7v8qnfzvfmb7XFJ0UcO5tjGoopJO2EnECt4j4oOxxBVjD9cFp7eRWX2UN8AQHTnVz3xbJjPuvNbhbMz7y6GWRk88lvafKzNfhZO6R24LOiDvz2SIaUcCoy91EstK5%2Bb8VhkGCtf53uAFkc%2FB6YGLl4S2fFd4CU3eTbDSw4FgJMsQOnD4F2rYUOZsfSdg13sQUK9xVQsBsTT8vKHBuOxD3AE7wexvEdcy9YcWhJAI6dKUAz0Bh7xzpVNHreHNFyTNmB8KhZtswn0CglrR%2FWG8SoaxwyRIBUTY19FK39KPI8dUmOqZy%2FC5oG1EsvvueLGPg1coBM1S39vLtb2XsvH22yRtHlnJ%2BhFp5agMZhJDeOvYaDgNkE0r5SufsKYssHEBxJra5flUlSxeKS6fe0dixcZXWuieKbMFVmE3hxjfowEmOzgDe4H64bNXi90m3OnkKaBdqBNxK37tkGq%2BCQkzMNyyiXl2aosQMAuXkMRTrOogJS9xlNj%2FMKj78sQGOqUBrbu4PHKRiPPPBz6Rzz6%2BtpvuDxQ%2Bzf6OZknTKuaBOsRmxtImzuOeo837LNc46161L5CjZpa%2BxZl9MWbxrJ%2BxMxNv7zRPKkCi57ubyS06idXRGb%2BFncMXW1%2FvfH1rKm2zq5BubBmMPchzEIEFxg3pNTJ4QcHy2Aq3fcPbwjFg0QvUuy8vAHWmj28qBgRFRMzZ0l%2Bp9iW4UBrPuIQXmfeeVxTtqEdO&X-Amz-Signature=13ba9e25cf768762826af356c83f0a7be63e8944571df15dcc8e415d25bb4a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT7EV76%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BZ%2F30wNPTVUjE5rXPrQL%2Bn%2FzW%2BXwHqfqdRZq0INIYyAiEAidm4db%2BQURKT79Ax7SRxDoaX7wfxmH74iCgdEBnGK6Uq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLsPq8eHOYpDaLyyGyrcA4AWrWexxGSC9CzjvFnjlEZfX26SghWYKsqe2QdjnRvx6TLd5ZQAflkQbH6AEl%2FVfRqUs9L5lKFs5nzVcErk7DJRZwb%2BMYUAmcjVvyrSeneWSrXLqvukjWHfjr50Ce700Ej1ejVJ7v8qnfzvfmb7XFJ0UcO5tjGoopJO2EnECt4j4oOxxBVjD9cFp7eRWX2UN8AQHTnVz3xbJjPuvNbhbMz7y6GWRk88lvafKzNfhZO6R24LOiDvz2SIaUcCoy91EstK5%2Bb8VhkGCtf53uAFkc%2FB6YGLl4S2fFd4CU3eTbDSw4FgJMsQOnD4F2rYUOZsfSdg13sQUK9xVQsBsTT8vKHBuOxD3AE7wexvEdcy9YcWhJAI6dKUAz0Bh7xzpVNHreHNFyTNmB8KhZtswn0CglrR%2FWG8SoaxwyRIBUTY19FK39KPI8dUmOqZy%2FC5oG1EsvvueLGPg1coBM1S39vLtb2XsvH22yRtHlnJ%2BhFp5agMZhJDeOvYaDgNkE0r5SufsKYssHEBxJra5flUlSxeKS6fe0dixcZXWuieKbMFVmE3hxjfowEmOzgDe4H64bNXi90m3OnkKaBdqBNxK37tkGq%2BCQkzMNyyiXl2aosQMAuXkMRTrOogJS9xlNj%2FMKj78sQGOqUBrbu4PHKRiPPPBz6Rzz6%2BtpvuDxQ%2Bzf6OZknTKuaBOsRmxtImzuOeo837LNc46161L5CjZpa%2BxZl9MWbxrJ%2BxMxNv7zRPKkCi57ubyS06idXRGb%2BFncMXW1%2FvfH1rKm2zq5BubBmMPchzEIEFxg3pNTJ4QcHy2Aq3fcPbwjFg0QvUuy8vAHWmj28qBgRFRMzZ0l%2Bp9iW4UBrPuIQXmfeeVxTtqEdO&X-Amz-Signature=e49b2cee24e2911486b97bd7845ad2f5d070aea1071af700a7efb7054d93a0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT7EV76%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BZ%2F30wNPTVUjE5rXPrQL%2Bn%2FzW%2BXwHqfqdRZq0INIYyAiEAidm4db%2BQURKT79Ax7SRxDoaX7wfxmH74iCgdEBnGK6Uq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLsPq8eHOYpDaLyyGyrcA4AWrWexxGSC9CzjvFnjlEZfX26SghWYKsqe2QdjnRvx6TLd5ZQAflkQbH6AEl%2FVfRqUs9L5lKFs5nzVcErk7DJRZwb%2BMYUAmcjVvyrSeneWSrXLqvukjWHfjr50Ce700Ej1ejVJ7v8qnfzvfmb7XFJ0UcO5tjGoopJO2EnECt4j4oOxxBVjD9cFp7eRWX2UN8AQHTnVz3xbJjPuvNbhbMz7y6GWRk88lvafKzNfhZO6R24LOiDvz2SIaUcCoy91EstK5%2Bb8VhkGCtf53uAFkc%2FB6YGLl4S2fFd4CU3eTbDSw4FgJMsQOnD4F2rYUOZsfSdg13sQUK9xVQsBsTT8vKHBuOxD3AE7wexvEdcy9YcWhJAI6dKUAz0Bh7xzpVNHreHNFyTNmB8KhZtswn0CglrR%2FWG8SoaxwyRIBUTY19FK39KPI8dUmOqZy%2FC5oG1EsvvueLGPg1coBM1S39vLtb2XsvH22yRtHlnJ%2BhFp5agMZhJDeOvYaDgNkE0r5SufsKYssHEBxJra5flUlSxeKS6fe0dixcZXWuieKbMFVmE3hxjfowEmOzgDe4H64bNXi90m3OnkKaBdqBNxK37tkGq%2BCQkzMNyyiXl2aosQMAuXkMRTrOogJS9xlNj%2FMKj78sQGOqUBrbu4PHKRiPPPBz6Rzz6%2BtpvuDxQ%2Bzf6OZknTKuaBOsRmxtImzuOeo837LNc46161L5CjZpa%2BxZl9MWbxrJ%2BxMxNv7zRPKkCi57ubyS06idXRGb%2BFncMXW1%2FvfH1rKm2zq5BubBmMPchzEIEFxg3pNTJ4QcHy2Aq3fcPbwjFg0QvUuy8vAHWmj28qBgRFRMzZ0l%2Bp9iW4UBrPuIQXmfeeVxTtqEdO&X-Amz-Signature=18b06f8902d602c014d12c34dc389e8b26d7b535b47cab3a748c0d561a3bdf3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT7EV76%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BZ%2F30wNPTVUjE5rXPrQL%2Bn%2FzW%2BXwHqfqdRZq0INIYyAiEAidm4db%2BQURKT79Ax7SRxDoaX7wfxmH74iCgdEBnGK6Uq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLsPq8eHOYpDaLyyGyrcA4AWrWexxGSC9CzjvFnjlEZfX26SghWYKsqe2QdjnRvx6TLd5ZQAflkQbH6AEl%2FVfRqUs9L5lKFs5nzVcErk7DJRZwb%2BMYUAmcjVvyrSeneWSrXLqvukjWHfjr50Ce700Ej1ejVJ7v8qnfzvfmb7XFJ0UcO5tjGoopJO2EnECt4j4oOxxBVjD9cFp7eRWX2UN8AQHTnVz3xbJjPuvNbhbMz7y6GWRk88lvafKzNfhZO6R24LOiDvz2SIaUcCoy91EstK5%2Bb8VhkGCtf53uAFkc%2FB6YGLl4S2fFd4CU3eTbDSw4FgJMsQOnD4F2rYUOZsfSdg13sQUK9xVQsBsTT8vKHBuOxD3AE7wexvEdcy9YcWhJAI6dKUAz0Bh7xzpVNHreHNFyTNmB8KhZtswn0CglrR%2FWG8SoaxwyRIBUTY19FK39KPI8dUmOqZy%2FC5oG1EsvvueLGPg1coBM1S39vLtb2XsvH22yRtHlnJ%2BhFp5agMZhJDeOvYaDgNkE0r5SufsKYssHEBxJra5flUlSxeKS6fe0dixcZXWuieKbMFVmE3hxjfowEmOzgDe4H64bNXi90m3OnkKaBdqBNxK37tkGq%2BCQkzMNyyiXl2aosQMAuXkMRTrOogJS9xlNj%2FMKj78sQGOqUBrbu4PHKRiPPPBz6Rzz6%2BtpvuDxQ%2Bzf6OZknTKuaBOsRmxtImzuOeo837LNc46161L5CjZpa%2BxZl9MWbxrJ%2BxMxNv7zRPKkCi57ubyS06idXRGb%2BFncMXW1%2FvfH1rKm2zq5BubBmMPchzEIEFxg3pNTJ4QcHy2Aq3fcPbwjFg0QvUuy8vAHWmj28qBgRFRMzZ0l%2Bp9iW4UBrPuIQXmfeeVxTtqEdO&X-Amz-Signature=477e77e11e4e2a2362352e2f2b43186a169d50bb362b2111cdbd7e4bbfd0f61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT7EV76%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BZ%2F30wNPTVUjE5rXPrQL%2Bn%2FzW%2BXwHqfqdRZq0INIYyAiEAidm4db%2BQURKT79Ax7SRxDoaX7wfxmH74iCgdEBnGK6Uq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLsPq8eHOYpDaLyyGyrcA4AWrWexxGSC9CzjvFnjlEZfX26SghWYKsqe2QdjnRvx6TLd5ZQAflkQbH6AEl%2FVfRqUs9L5lKFs5nzVcErk7DJRZwb%2BMYUAmcjVvyrSeneWSrXLqvukjWHfjr50Ce700Ej1ejVJ7v8qnfzvfmb7XFJ0UcO5tjGoopJO2EnECt4j4oOxxBVjD9cFp7eRWX2UN8AQHTnVz3xbJjPuvNbhbMz7y6GWRk88lvafKzNfhZO6R24LOiDvz2SIaUcCoy91EstK5%2Bb8VhkGCtf53uAFkc%2FB6YGLl4S2fFd4CU3eTbDSw4FgJMsQOnD4F2rYUOZsfSdg13sQUK9xVQsBsTT8vKHBuOxD3AE7wexvEdcy9YcWhJAI6dKUAz0Bh7xzpVNHreHNFyTNmB8KhZtswn0CglrR%2FWG8SoaxwyRIBUTY19FK39KPI8dUmOqZy%2FC5oG1EsvvueLGPg1coBM1S39vLtb2XsvH22yRtHlnJ%2BhFp5agMZhJDeOvYaDgNkE0r5SufsKYssHEBxJra5flUlSxeKS6fe0dixcZXWuieKbMFVmE3hxjfowEmOzgDe4H64bNXi90m3OnkKaBdqBNxK37tkGq%2BCQkzMNyyiXl2aosQMAuXkMRTrOogJS9xlNj%2FMKj78sQGOqUBrbu4PHKRiPPPBz6Rzz6%2BtpvuDxQ%2Bzf6OZknTKuaBOsRmxtImzuOeo837LNc46161L5CjZpa%2BxZl9MWbxrJ%2BxMxNv7zRPKkCi57ubyS06idXRGb%2BFncMXW1%2FvfH1rKm2zq5BubBmMPchzEIEFxg3pNTJ4QcHy2Aq3fcPbwjFg0QvUuy8vAHWmj28qBgRFRMzZ0l%2Bp9iW4UBrPuIQXmfeeVxTtqEdO&X-Amz-Signature=2bfff3095684776835121f8e81d71b180da86ea802bbcfcc04fd855ea9bda3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT7EV76%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BZ%2F30wNPTVUjE5rXPrQL%2Bn%2FzW%2BXwHqfqdRZq0INIYyAiEAidm4db%2BQURKT79Ax7SRxDoaX7wfxmH74iCgdEBnGK6Uq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLsPq8eHOYpDaLyyGyrcA4AWrWexxGSC9CzjvFnjlEZfX26SghWYKsqe2QdjnRvx6TLd5ZQAflkQbH6AEl%2FVfRqUs9L5lKFs5nzVcErk7DJRZwb%2BMYUAmcjVvyrSeneWSrXLqvukjWHfjr50Ce700Ej1ejVJ7v8qnfzvfmb7XFJ0UcO5tjGoopJO2EnECt4j4oOxxBVjD9cFp7eRWX2UN8AQHTnVz3xbJjPuvNbhbMz7y6GWRk88lvafKzNfhZO6R24LOiDvz2SIaUcCoy91EstK5%2Bb8VhkGCtf53uAFkc%2FB6YGLl4S2fFd4CU3eTbDSw4FgJMsQOnD4F2rYUOZsfSdg13sQUK9xVQsBsTT8vKHBuOxD3AE7wexvEdcy9YcWhJAI6dKUAz0Bh7xzpVNHreHNFyTNmB8KhZtswn0CglrR%2FWG8SoaxwyRIBUTY19FK39KPI8dUmOqZy%2FC5oG1EsvvueLGPg1coBM1S39vLtb2XsvH22yRtHlnJ%2BhFp5agMZhJDeOvYaDgNkE0r5SufsKYssHEBxJra5flUlSxeKS6fe0dixcZXWuieKbMFVmE3hxjfowEmOzgDe4H64bNXi90m3OnkKaBdqBNxK37tkGq%2BCQkzMNyyiXl2aosQMAuXkMRTrOogJS9xlNj%2FMKj78sQGOqUBrbu4PHKRiPPPBz6Rzz6%2BtpvuDxQ%2Bzf6OZknTKuaBOsRmxtImzuOeo837LNc46161L5CjZpa%2BxZl9MWbxrJ%2BxMxNv7zRPKkCi57ubyS06idXRGb%2BFncMXW1%2FvfH1rKm2zq5BubBmMPchzEIEFxg3pNTJ4QcHy2Aq3fcPbwjFg0QvUuy8vAHWmj28qBgRFRMzZ0l%2Bp9iW4UBrPuIQXmfeeVxTtqEdO&X-Amz-Signature=613cb5e7d16e0a251db4e6eef40172e4ca42c109ed71376e2294204768962332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT7EV76%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BZ%2F30wNPTVUjE5rXPrQL%2Bn%2FzW%2BXwHqfqdRZq0INIYyAiEAidm4db%2BQURKT79Ax7SRxDoaX7wfxmH74iCgdEBnGK6Uq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLsPq8eHOYpDaLyyGyrcA4AWrWexxGSC9CzjvFnjlEZfX26SghWYKsqe2QdjnRvx6TLd5ZQAflkQbH6AEl%2FVfRqUs9L5lKFs5nzVcErk7DJRZwb%2BMYUAmcjVvyrSeneWSrXLqvukjWHfjr50Ce700Ej1ejVJ7v8qnfzvfmb7XFJ0UcO5tjGoopJO2EnECt4j4oOxxBVjD9cFp7eRWX2UN8AQHTnVz3xbJjPuvNbhbMz7y6GWRk88lvafKzNfhZO6R24LOiDvz2SIaUcCoy91EstK5%2Bb8VhkGCtf53uAFkc%2FB6YGLl4S2fFd4CU3eTbDSw4FgJMsQOnD4F2rYUOZsfSdg13sQUK9xVQsBsTT8vKHBuOxD3AE7wexvEdcy9YcWhJAI6dKUAz0Bh7xzpVNHreHNFyTNmB8KhZtswn0CglrR%2FWG8SoaxwyRIBUTY19FK39KPI8dUmOqZy%2FC5oG1EsvvueLGPg1coBM1S39vLtb2XsvH22yRtHlnJ%2BhFp5agMZhJDeOvYaDgNkE0r5SufsKYssHEBxJra5flUlSxeKS6fe0dixcZXWuieKbMFVmE3hxjfowEmOzgDe4H64bNXi90m3OnkKaBdqBNxK37tkGq%2BCQkzMNyyiXl2aosQMAuXkMRTrOogJS9xlNj%2FMKj78sQGOqUBrbu4PHKRiPPPBz6Rzz6%2BtpvuDxQ%2Bzf6OZknTKuaBOsRmxtImzuOeo837LNc46161L5CjZpa%2BxZl9MWbxrJ%2BxMxNv7zRPKkCi57ubyS06idXRGb%2BFncMXW1%2FvfH1rKm2zq5BubBmMPchzEIEFxg3pNTJ4QcHy2Aq3fcPbwjFg0QvUuy8vAHWmj28qBgRFRMzZ0l%2Bp9iW4UBrPuIQXmfeeVxTtqEdO&X-Amz-Signature=687b667153fb5daa90695cd2b8a2f302878fa1a692b4fc1c22d6fd8b37a158d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT7EV76%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BZ%2F30wNPTVUjE5rXPrQL%2Bn%2FzW%2BXwHqfqdRZq0INIYyAiEAidm4db%2BQURKT79Ax7SRxDoaX7wfxmH74iCgdEBnGK6Uq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLsPq8eHOYpDaLyyGyrcA4AWrWexxGSC9CzjvFnjlEZfX26SghWYKsqe2QdjnRvx6TLd5ZQAflkQbH6AEl%2FVfRqUs9L5lKFs5nzVcErk7DJRZwb%2BMYUAmcjVvyrSeneWSrXLqvukjWHfjr50Ce700Ej1ejVJ7v8qnfzvfmb7XFJ0UcO5tjGoopJO2EnECt4j4oOxxBVjD9cFp7eRWX2UN8AQHTnVz3xbJjPuvNbhbMz7y6GWRk88lvafKzNfhZO6R24LOiDvz2SIaUcCoy91EstK5%2Bb8VhkGCtf53uAFkc%2FB6YGLl4S2fFd4CU3eTbDSw4FgJMsQOnD4F2rYUOZsfSdg13sQUK9xVQsBsTT8vKHBuOxD3AE7wexvEdcy9YcWhJAI6dKUAz0Bh7xzpVNHreHNFyTNmB8KhZtswn0CglrR%2FWG8SoaxwyRIBUTY19FK39KPI8dUmOqZy%2FC5oG1EsvvueLGPg1coBM1S39vLtb2XsvH22yRtHlnJ%2BhFp5agMZhJDeOvYaDgNkE0r5SufsKYssHEBxJra5flUlSxeKS6fe0dixcZXWuieKbMFVmE3hxjfowEmOzgDe4H64bNXi90m3OnkKaBdqBNxK37tkGq%2BCQkzMNyyiXl2aosQMAuXkMRTrOogJS9xlNj%2FMKj78sQGOqUBrbu4PHKRiPPPBz6Rzz6%2BtpvuDxQ%2Bzf6OZknTKuaBOsRmxtImzuOeo837LNc46161L5CjZpa%2BxZl9MWbxrJ%2BxMxNv7zRPKkCi57ubyS06idXRGb%2BFncMXW1%2FvfH1rKm2zq5BubBmMPchzEIEFxg3pNTJ4QcHy2Aq3fcPbwjFg0QvUuy8vAHWmj28qBgRFRMzZ0l%2Bp9iW4UBrPuIQXmfeeVxTtqEdO&X-Amz-Signature=df9bad4912c193d03811b5b19034d940229d4fa7d61c1782ad86ffbafccb2760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
