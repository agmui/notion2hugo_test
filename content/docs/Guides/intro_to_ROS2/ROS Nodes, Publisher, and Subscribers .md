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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKPJXPX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGez8nN9rHI8d7%2FKHNNzYatupOQUBvUpCT%2Fc97%2FgiHP1AiEAz38L35Wgbkwr2AT%2FWBn%2Fb%2BBlGK3YjDtwr%2FUXEFtJ3%2FUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2B1Uit4N10vxBbk5ircA%2FeLV9uYgTWHtFE6UuZ9cue1yiNFycfxB1OqrixM1GfRY2fFt7diDDmQfcX6K7oBCNE41ML%2BJzJg5UIcZmad%2BCf%2BpIT7%2FFpQedclrCNtS2WSJx6QAJNKhO0ZiOXQKP2BMV9BftB%2BqMYDgboBLVS5hJ3T3nZ8OHz4TYY67%2Fp8AR%2B75TUSPd8P9Kgo8HXRkss1LIMqFO%2FMwNyxGkkLgrxdEpLae4DjxT%2B3yk%2B9MTJHdNci6Hzriy5mz2mi%2Fx%2BhkXQxVw4x3oKmhyzlpMPApfuCXEmfHodVPCYYvYPJiTjcefwF1FYTr4kodyFaJfTEu7lTZerLhTFutrnICLLGkKc9EYPxhcVp7K%2BYRQW0cXzmQsVtmcG1VcWgRug1cEvcdUc4%2Bpfo0DDHwq%2B3XkPJe861bFpv73wsoXFsJyp%2FPjMqoVwJXYleSkxO8t3IjcE3txcexnw84xrh%2FQoVtZrik1Y7oOxLOfgWON%2BjBbliyB0HUHn1bO5SL9Eup3ZljccJxRcrqISuQNYjUbIhBi7HFCuiRvALOOI7lugRZ9uDLzIRVdYCTzSbGdWQiKh4wyp2R2FtEkW9OgA9N4lWc%2BtGfUVZnviYr%2BbEnjOCkX2A3ytz1tjhR0uLZY5UkkKRQtHcMO2k1cMGOqUBFDPNQfo7IgNFyX3D4GW9lFhQOCTDeQ73K%2FvZ9PE2%2FthOlUvnJQuLcRV0GtpRm8%2BWuLTlgvSuMLV0GUw9EKw9Y2e4%2BS4ktWL0O1ExkRKEdIk%2Bo1AVPK7NHRxrLvnqey%2FAQu0cTsVS5Ik0J8y1O6SxwnUH717754Y2Bl%2B3GWrCGOyD33oUTqNHVG6cEJefdsW%2BfHcyGTMqPNGcXtcQbKHsb4IOJw0q&X-Amz-Signature=b5d7ef3b8bdd59cbf5a9cb9fe80f6d29491c83c4b0c49a44a5342368eda3570d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKPJXPX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGez8nN9rHI8d7%2FKHNNzYatupOQUBvUpCT%2Fc97%2FgiHP1AiEAz38L35Wgbkwr2AT%2FWBn%2Fb%2BBlGK3YjDtwr%2FUXEFtJ3%2FUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2B1Uit4N10vxBbk5ircA%2FeLV9uYgTWHtFE6UuZ9cue1yiNFycfxB1OqrixM1GfRY2fFt7diDDmQfcX6K7oBCNE41ML%2BJzJg5UIcZmad%2BCf%2BpIT7%2FFpQedclrCNtS2WSJx6QAJNKhO0ZiOXQKP2BMV9BftB%2BqMYDgboBLVS5hJ3T3nZ8OHz4TYY67%2Fp8AR%2B75TUSPd8P9Kgo8HXRkss1LIMqFO%2FMwNyxGkkLgrxdEpLae4DjxT%2B3yk%2B9MTJHdNci6Hzriy5mz2mi%2Fx%2BhkXQxVw4x3oKmhyzlpMPApfuCXEmfHodVPCYYvYPJiTjcefwF1FYTr4kodyFaJfTEu7lTZerLhTFutrnICLLGkKc9EYPxhcVp7K%2BYRQW0cXzmQsVtmcG1VcWgRug1cEvcdUc4%2Bpfo0DDHwq%2B3XkPJe861bFpv73wsoXFsJyp%2FPjMqoVwJXYleSkxO8t3IjcE3txcexnw84xrh%2FQoVtZrik1Y7oOxLOfgWON%2BjBbliyB0HUHn1bO5SL9Eup3ZljccJxRcrqISuQNYjUbIhBi7HFCuiRvALOOI7lugRZ9uDLzIRVdYCTzSbGdWQiKh4wyp2R2FtEkW9OgA9N4lWc%2BtGfUVZnviYr%2BbEnjOCkX2A3ytz1tjhR0uLZY5UkkKRQtHcMO2k1cMGOqUBFDPNQfo7IgNFyX3D4GW9lFhQOCTDeQ73K%2FvZ9PE2%2FthOlUvnJQuLcRV0GtpRm8%2BWuLTlgvSuMLV0GUw9EKw9Y2e4%2BS4ktWL0O1ExkRKEdIk%2Bo1AVPK7NHRxrLvnqey%2FAQu0cTsVS5Ik0J8y1O6SxwnUH717754Y2Bl%2B3GWrCGOyD33oUTqNHVG6cEJefdsW%2BfHcyGTMqPNGcXtcQbKHsb4IOJw0q&X-Amz-Signature=a85ca2de4ac1e342f4be6f3f04f77fc9a87a74e24d85b34459c0a38b89054ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKPJXPX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGez8nN9rHI8d7%2FKHNNzYatupOQUBvUpCT%2Fc97%2FgiHP1AiEAz38L35Wgbkwr2AT%2FWBn%2Fb%2BBlGK3YjDtwr%2FUXEFtJ3%2FUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2B1Uit4N10vxBbk5ircA%2FeLV9uYgTWHtFE6UuZ9cue1yiNFycfxB1OqrixM1GfRY2fFt7diDDmQfcX6K7oBCNE41ML%2BJzJg5UIcZmad%2BCf%2BpIT7%2FFpQedclrCNtS2WSJx6QAJNKhO0ZiOXQKP2BMV9BftB%2BqMYDgboBLVS5hJ3T3nZ8OHz4TYY67%2Fp8AR%2B75TUSPd8P9Kgo8HXRkss1LIMqFO%2FMwNyxGkkLgrxdEpLae4DjxT%2B3yk%2B9MTJHdNci6Hzriy5mz2mi%2Fx%2BhkXQxVw4x3oKmhyzlpMPApfuCXEmfHodVPCYYvYPJiTjcefwF1FYTr4kodyFaJfTEu7lTZerLhTFutrnICLLGkKc9EYPxhcVp7K%2BYRQW0cXzmQsVtmcG1VcWgRug1cEvcdUc4%2Bpfo0DDHwq%2B3XkPJe861bFpv73wsoXFsJyp%2FPjMqoVwJXYleSkxO8t3IjcE3txcexnw84xrh%2FQoVtZrik1Y7oOxLOfgWON%2BjBbliyB0HUHn1bO5SL9Eup3ZljccJxRcrqISuQNYjUbIhBi7HFCuiRvALOOI7lugRZ9uDLzIRVdYCTzSbGdWQiKh4wyp2R2FtEkW9OgA9N4lWc%2BtGfUVZnviYr%2BbEnjOCkX2A3ytz1tjhR0uLZY5UkkKRQtHcMO2k1cMGOqUBFDPNQfo7IgNFyX3D4GW9lFhQOCTDeQ73K%2FvZ9PE2%2FthOlUvnJQuLcRV0GtpRm8%2BWuLTlgvSuMLV0GUw9EKw9Y2e4%2BS4ktWL0O1ExkRKEdIk%2Bo1AVPK7NHRxrLvnqey%2FAQu0cTsVS5Ik0J8y1O6SxwnUH717754Y2Bl%2B3GWrCGOyD33oUTqNHVG6cEJefdsW%2BfHcyGTMqPNGcXtcQbKHsb4IOJw0q&X-Amz-Signature=e88a5e8a097c05329eab54a9afa7d9a1f3fa56b961dd6905414fd69ddf135965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKPJXPX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGez8nN9rHI8d7%2FKHNNzYatupOQUBvUpCT%2Fc97%2FgiHP1AiEAz38L35Wgbkwr2AT%2FWBn%2Fb%2BBlGK3YjDtwr%2FUXEFtJ3%2FUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2B1Uit4N10vxBbk5ircA%2FeLV9uYgTWHtFE6UuZ9cue1yiNFycfxB1OqrixM1GfRY2fFt7diDDmQfcX6K7oBCNE41ML%2BJzJg5UIcZmad%2BCf%2BpIT7%2FFpQedclrCNtS2WSJx6QAJNKhO0ZiOXQKP2BMV9BftB%2BqMYDgboBLVS5hJ3T3nZ8OHz4TYY67%2Fp8AR%2B75TUSPd8P9Kgo8HXRkss1LIMqFO%2FMwNyxGkkLgrxdEpLae4DjxT%2B3yk%2B9MTJHdNci6Hzriy5mz2mi%2Fx%2BhkXQxVw4x3oKmhyzlpMPApfuCXEmfHodVPCYYvYPJiTjcefwF1FYTr4kodyFaJfTEu7lTZerLhTFutrnICLLGkKc9EYPxhcVp7K%2BYRQW0cXzmQsVtmcG1VcWgRug1cEvcdUc4%2Bpfo0DDHwq%2B3XkPJe861bFpv73wsoXFsJyp%2FPjMqoVwJXYleSkxO8t3IjcE3txcexnw84xrh%2FQoVtZrik1Y7oOxLOfgWON%2BjBbliyB0HUHn1bO5SL9Eup3ZljccJxRcrqISuQNYjUbIhBi7HFCuiRvALOOI7lugRZ9uDLzIRVdYCTzSbGdWQiKh4wyp2R2FtEkW9OgA9N4lWc%2BtGfUVZnviYr%2BbEnjOCkX2A3ytz1tjhR0uLZY5UkkKRQtHcMO2k1cMGOqUBFDPNQfo7IgNFyX3D4GW9lFhQOCTDeQ73K%2FvZ9PE2%2FthOlUvnJQuLcRV0GtpRm8%2BWuLTlgvSuMLV0GUw9EKw9Y2e4%2BS4ktWL0O1ExkRKEdIk%2Bo1AVPK7NHRxrLvnqey%2FAQu0cTsVS5Ik0J8y1O6SxwnUH717754Y2Bl%2B3GWrCGOyD33oUTqNHVG6cEJefdsW%2BfHcyGTMqPNGcXtcQbKHsb4IOJw0q&X-Amz-Signature=13a0890a7eff7c8e688a6a8a7852271831994981dd09547250266be410a88ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKPJXPX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGez8nN9rHI8d7%2FKHNNzYatupOQUBvUpCT%2Fc97%2FgiHP1AiEAz38L35Wgbkwr2AT%2FWBn%2Fb%2BBlGK3YjDtwr%2FUXEFtJ3%2FUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2B1Uit4N10vxBbk5ircA%2FeLV9uYgTWHtFE6UuZ9cue1yiNFycfxB1OqrixM1GfRY2fFt7diDDmQfcX6K7oBCNE41ML%2BJzJg5UIcZmad%2BCf%2BpIT7%2FFpQedclrCNtS2WSJx6QAJNKhO0ZiOXQKP2BMV9BftB%2BqMYDgboBLVS5hJ3T3nZ8OHz4TYY67%2Fp8AR%2B75TUSPd8P9Kgo8HXRkss1LIMqFO%2FMwNyxGkkLgrxdEpLae4DjxT%2B3yk%2B9MTJHdNci6Hzriy5mz2mi%2Fx%2BhkXQxVw4x3oKmhyzlpMPApfuCXEmfHodVPCYYvYPJiTjcefwF1FYTr4kodyFaJfTEu7lTZerLhTFutrnICLLGkKc9EYPxhcVp7K%2BYRQW0cXzmQsVtmcG1VcWgRug1cEvcdUc4%2Bpfo0DDHwq%2B3XkPJe861bFpv73wsoXFsJyp%2FPjMqoVwJXYleSkxO8t3IjcE3txcexnw84xrh%2FQoVtZrik1Y7oOxLOfgWON%2BjBbliyB0HUHn1bO5SL9Eup3ZljccJxRcrqISuQNYjUbIhBi7HFCuiRvALOOI7lugRZ9uDLzIRVdYCTzSbGdWQiKh4wyp2R2FtEkW9OgA9N4lWc%2BtGfUVZnviYr%2BbEnjOCkX2A3ytz1tjhR0uLZY5UkkKRQtHcMO2k1cMGOqUBFDPNQfo7IgNFyX3D4GW9lFhQOCTDeQ73K%2FvZ9PE2%2FthOlUvnJQuLcRV0GtpRm8%2BWuLTlgvSuMLV0GUw9EKw9Y2e4%2BS4ktWL0O1ExkRKEdIk%2Bo1AVPK7NHRxrLvnqey%2FAQu0cTsVS5Ik0J8y1O6SxwnUH717754Y2Bl%2B3GWrCGOyD33oUTqNHVG6cEJefdsW%2BfHcyGTMqPNGcXtcQbKHsb4IOJw0q&X-Amz-Signature=78ff90fb622cbfff88686e018607119cf25683f30d5eca429b97c36a247ed850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKPJXPX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGez8nN9rHI8d7%2FKHNNzYatupOQUBvUpCT%2Fc97%2FgiHP1AiEAz38L35Wgbkwr2AT%2FWBn%2Fb%2BBlGK3YjDtwr%2FUXEFtJ3%2FUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2B1Uit4N10vxBbk5ircA%2FeLV9uYgTWHtFE6UuZ9cue1yiNFycfxB1OqrixM1GfRY2fFt7diDDmQfcX6K7oBCNE41ML%2BJzJg5UIcZmad%2BCf%2BpIT7%2FFpQedclrCNtS2WSJx6QAJNKhO0ZiOXQKP2BMV9BftB%2BqMYDgboBLVS5hJ3T3nZ8OHz4TYY67%2Fp8AR%2B75TUSPd8P9Kgo8HXRkss1LIMqFO%2FMwNyxGkkLgrxdEpLae4DjxT%2B3yk%2B9MTJHdNci6Hzriy5mz2mi%2Fx%2BhkXQxVw4x3oKmhyzlpMPApfuCXEmfHodVPCYYvYPJiTjcefwF1FYTr4kodyFaJfTEu7lTZerLhTFutrnICLLGkKc9EYPxhcVp7K%2BYRQW0cXzmQsVtmcG1VcWgRug1cEvcdUc4%2Bpfo0DDHwq%2B3XkPJe861bFpv73wsoXFsJyp%2FPjMqoVwJXYleSkxO8t3IjcE3txcexnw84xrh%2FQoVtZrik1Y7oOxLOfgWON%2BjBbliyB0HUHn1bO5SL9Eup3ZljccJxRcrqISuQNYjUbIhBi7HFCuiRvALOOI7lugRZ9uDLzIRVdYCTzSbGdWQiKh4wyp2R2FtEkW9OgA9N4lWc%2BtGfUVZnviYr%2BbEnjOCkX2A3ytz1tjhR0uLZY5UkkKRQtHcMO2k1cMGOqUBFDPNQfo7IgNFyX3D4GW9lFhQOCTDeQ73K%2FvZ9PE2%2FthOlUvnJQuLcRV0GtpRm8%2BWuLTlgvSuMLV0GUw9EKw9Y2e4%2BS4ktWL0O1ExkRKEdIk%2Bo1AVPK7NHRxrLvnqey%2FAQu0cTsVS5Ik0J8y1O6SxwnUH717754Y2Bl%2B3GWrCGOyD33oUTqNHVG6cEJefdsW%2BfHcyGTMqPNGcXtcQbKHsb4IOJw0q&X-Amz-Signature=5ad0ed68c1ff92dbca2705862c8c913801400fdce2679856c1562d8d76675391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKPJXPX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGez8nN9rHI8d7%2FKHNNzYatupOQUBvUpCT%2Fc97%2FgiHP1AiEAz38L35Wgbkwr2AT%2FWBn%2Fb%2BBlGK3YjDtwr%2FUXEFtJ3%2FUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2B1Uit4N10vxBbk5ircA%2FeLV9uYgTWHtFE6UuZ9cue1yiNFycfxB1OqrixM1GfRY2fFt7diDDmQfcX6K7oBCNE41ML%2BJzJg5UIcZmad%2BCf%2BpIT7%2FFpQedclrCNtS2WSJx6QAJNKhO0ZiOXQKP2BMV9BftB%2BqMYDgboBLVS5hJ3T3nZ8OHz4TYY67%2Fp8AR%2B75TUSPd8P9Kgo8HXRkss1LIMqFO%2FMwNyxGkkLgrxdEpLae4DjxT%2B3yk%2B9MTJHdNci6Hzriy5mz2mi%2Fx%2BhkXQxVw4x3oKmhyzlpMPApfuCXEmfHodVPCYYvYPJiTjcefwF1FYTr4kodyFaJfTEu7lTZerLhTFutrnICLLGkKc9EYPxhcVp7K%2BYRQW0cXzmQsVtmcG1VcWgRug1cEvcdUc4%2Bpfo0DDHwq%2B3XkPJe861bFpv73wsoXFsJyp%2FPjMqoVwJXYleSkxO8t3IjcE3txcexnw84xrh%2FQoVtZrik1Y7oOxLOfgWON%2BjBbliyB0HUHn1bO5SL9Eup3ZljccJxRcrqISuQNYjUbIhBi7HFCuiRvALOOI7lugRZ9uDLzIRVdYCTzSbGdWQiKh4wyp2R2FtEkW9OgA9N4lWc%2BtGfUVZnviYr%2BbEnjOCkX2A3ytz1tjhR0uLZY5UkkKRQtHcMO2k1cMGOqUBFDPNQfo7IgNFyX3D4GW9lFhQOCTDeQ73K%2FvZ9PE2%2FthOlUvnJQuLcRV0GtpRm8%2BWuLTlgvSuMLV0GUw9EKw9Y2e4%2BS4ktWL0O1ExkRKEdIk%2Bo1AVPK7NHRxrLvnqey%2FAQu0cTsVS5Ik0J8y1O6SxwnUH717754Y2Bl%2B3GWrCGOyD33oUTqNHVG6cEJefdsW%2BfHcyGTMqPNGcXtcQbKHsb4IOJw0q&X-Amz-Signature=c4e22b5e713233b3825acd5a3e01325f811cd0b22bc91047056a464cddfc92d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKPJXPX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGez8nN9rHI8d7%2FKHNNzYatupOQUBvUpCT%2Fc97%2FgiHP1AiEAz38L35Wgbkwr2AT%2FWBn%2Fb%2BBlGK3YjDtwr%2FUXEFtJ3%2FUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2B1Uit4N10vxBbk5ircA%2FeLV9uYgTWHtFE6UuZ9cue1yiNFycfxB1OqrixM1GfRY2fFt7diDDmQfcX6K7oBCNE41ML%2BJzJg5UIcZmad%2BCf%2BpIT7%2FFpQedclrCNtS2WSJx6QAJNKhO0ZiOXQKP2BMV9BftB%2BqMYDgboBLVS5hJ3T3nZ8OHz4TYY67%2Fp8AR%2B75TUSPd8P9Kgo8HXRkss1LIMqFO%2FMwNyxGkkLgrxdEpLae4DjxT%2B3yk%2B9MTJHdNci6Hzriy5mz2mi%2Fx%2BhkXQxVw4x3oKmhyzlpMPApfuCXEmfHodVPCYYvYPJiTjcefwF1FYTr4kodyFaJfTEu7lTZerLhTFutrnICLLGkKc9EYPxhcVp7K%2BYRQW0cXzmQsVtmcG1VcWgRug1cEvcdUc4%2Bpfo0DDHwq%2B3XkPJe861bFpv73wsoXFsJyp%2FPjMqoVwJXYleSkxO8t3IjcE3txcexnw84xrh%2FQoVtZrik1Y7oOxLOfgWON%2BjBbliyB0HUHn1bO5SL9Eup3ZljccJxRcrqISuQNYjUbIhBi7HFCuiRvALOOI7lugRZ9uDLzIRVdYCTzSbGdWQiKh4wyp2R2FtEkW9OgA9N4lWc%2BtGfUVZnviYr%2BbEnjOCkX2A3ytz1tjhR0uLZY5UkkKRQtHcMO2k1cMGOqUBFDPNQfo7IgNFyX3D4GW9lFhQOCTDeQ73K%2FvZ9PE2%2FthOlUvnJQuLcRV0GtpRm8%2BWuLTlgvSuMLV0GUw9EKw9Y2e4%2BS4ktWL0O1ExkRKEdIk%2Bo1AVPK7NHRxrLvnqey%2FAQu0cTsVS5Ik0J8y1O6SxwnUH717754Y2Bl%2B3GWrCGOyD33oUTqNHVG6cEJefdsW%2BfHcyGTMqPNGcXtcQbKHsb4IOJw0q&X-Amz-Signature=f83bfdda89de13b38ce38270e772590330ff549ce3bb7485ed3f23095cfab859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
