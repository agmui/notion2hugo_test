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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDMTHTK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6FHMW6YZDLO8HtWXaBUaTz8XRZ6qEdAaB%2FkRTiQZd6gIgT00PyZRWBsd69QRHSQgcHPrunSiTtSC6pgcokzxFgtgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDE75Tsm25cRquG%2BUayrcA3tjLOWm9M%2F%2BOJAMuy5z0XR9PsKpJh8H7KwoVkhn9UCCC5g0B3ON32U5Y1qCgzJ94plQw8YIKuqRopnu9AzidPAkifmPBXEEQolo4saUv8Zm0dxynWC0%2FWym6wYPL44uMfiII%2F6RnkBihcOH0iqgNUWpKQqVAKxUDdzmn9vqS8tOSQAwcJbc1CLeCoHBX9NYNnRPeXJ%2BFadTs27BQdcsgGvWkm2lJXwaRMRYVbknKKfD2Ujm%2BUPLLjE6zPU8G8EzgZsVta5c5b6in%2FWeD4%2B%2FxI5PW5sPdfZv1iMUkj%2BN6G%2B4abGdxAgCVumYR0BsO%2FWohdAYY2htaNRtymQknMj6aWDs7DRA%2BTL8Q7YLIVaYe9MWn60Hd0B4Vr8GkD3OG%2BuCNqvd8JPVQpz0HVMjhkglxs7vzeBywpIohlNyjc1y%2Bscnj5BEmHrGs8XSvCvYZPV%2BX3gT91SY27JztOQZyw0igZlPLFkNfRTNGkuoUUMDtdxm2OkD4KEywoVScVW67g65hBr0WlbsPhpdn0A596dprKGUogJrHNOnmQMLsH33PQ3yq5LPAmhJFBb4WEejdjq3k82xCz2wIMrbMQxWP8yBJCzdPFAwlZVMKorZmVDzjDHg3RV2Ye%2B3ezEkJj6eMN%2Byvr8GOqUBqEcYznEYZCimKvOS0LBwpVEM4hepZG06bQsc4wqP0Z5qK5Yu6zAh6QaTu9jNLNhsLKtNriBLzeiVlcK9mddvdvD6i0DAHQKp7xP4WDdbTk8%2BfzSnNwILEnsAiEpY%2BuT4bz%2BsaqNDgfyw%2B3nEcbcJljP4gYIBaAb78FdHYoGPEZ63GZD7SvxDShiRL0GD%2FcAL3n7Yi3ql9cKzJBpX8ZGv0ieyjK2b&X-Amz-Signature=7c2b440cc7deb82e76550fb992819c4775ba6c076b00ab646788f1e0c8bc11d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDMTHTK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6FHMW6YZDLO8HtWXaBUaTz8XRZ6qEdAaB%2FkRTiQZd6gIgT00PyZRWBsd69QRHSQgcHPrunSiTtSC6pgcokzxFgtgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDE75Tsm25cRquG%2BUayrcA3tjLOWm9M%2F%2BOJAMuy5z0XR9PsKpJh8H7KwoVkhn9UCCC5g0B3ON32U5Y1qCgzJ94plQw8YIKuqRopnu9AzidPAkifmPBXEEQolo4saUv8Zm0dxynWC0%2FWym6wYPL44uMfiII%2F6RnkBihcOH0iqgNUWpKQqVAKxUDdzmn9vqS8tOSQAwcJbc1CLeCoHBX9NYNnRPeXJ%2BFadTs27BQdcsgGvWkm2lJXwaRMRYVbknKKfD2Ujm%2BUPLLjE6zPU8G8EzgZsVta5c5b6in%2FWeD4%2B%2FxI5PW5sPdfZv1iMUkj%2BN6G%2B4abGdxAgCVumYR0BsO%2FWohdAYY2htaNRtymQknMj6aWDs7DRA%2BTL8Q7YLIVaYe9MWn60Hd0B4Vr8GkD3OG%2BuCNqvd8JPVQpz0HVMjhkglxs7vzeBywpIohlNyjc1y%2Bscnj5BEmHrGs8XSvCvYZPV%2BX3gT91SY27JztOQZyw0igZlPLFkNfRTNGkuoUUMDtdxm2OkD4KEywoVScVW67g65hBr0WlbsPhpdn0A596dprKGUogJrHNOnmQMLsH33PQ3yq5LPAmhJFBb4WEejdjq3k82xCz2wIMrbMQxWP8yBJCzdPFAwlZVMKorZmVDzjDHg3RV2Ye%2B3ezEkJj6eMN%2Byvr8GOqUBqEcYznEYZCimKvOS0LBwpVEM4hepZG06bQsc4wqP0Z5qK5Yu6zAh6QaTu9jNLNhsLKtNriBLzeiVlcK9mddvdvD6i0DAHQKp7xP4WDdbTk8%2BfzSnNwILEnsAiEpY%2BuT4bz%2BsaqNDgfyw%2B3nEcbcJljP4gYIBaAb78FdHYoGPEZ63GZD7SvxDShiRL0GD%2FcAL3n7Yi3ql9cKzJBpX8ZGv0ieyjK2b&X-Amz-Signature=8be417dba326ad1b597d9c2aac75f77c28ebd5dbe711ecdf45e3845a862e72d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDMTHTK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6FHMW6YZDLO8HtWXaBUaTz8XRZ6qEdAaB%2FkRTiQZd6gIgT00PyZRWBsd69QRHSQgcHPrunSiTtSC6pgcokzxFgtgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDE75Tsm25cRquG%2BUayrcA3tjLOWm9M%2F%2BOJAMuy5z0XR9PsKpJh8H7KwoVkhn9UCCC5g0B3ON32U5Y1qCgzJ94plQw8YIKuqRopnu9AzidPAkifmPBXEEQolo4saUv8Zm0dxynWC0%2FWym6wYPL44uMfiII%2F6RnkBihcOH0iqgNUWpKQqVAKxUDdzmn9vqS8tOSQAwcJbc1CLeCoHBX9NYNnRPeXJ%2BFadTs27BQdcsgGvWkm2lJXwaRMRYVbknKKfD2Ujm%2BUPLLjE6zPU8G8EzgZsVta5c5b6in%2FWeD4%2B%2FxI5PW5sPdfZv1iMUkj%2BN6G%2B4abGdxAgCVumYR0BsO%2FWohdAYY2htaNRtymQknMj6aWDs7DRA%2BTL8Q7YLIVaYe9MWn60Hd0B4Vr8GkD3OG%2BuCNqvd8JPVQpz0HVMjhkglxs7vzeBywpIohlNyjc1y%2Bscnj5BEmHrGs8XSvCvYZPV%2BX3gT91SY27JztOQZyw0igZlPLFkNfRTNGkuoUUMDtdxm2OkD4KEywoVScVW67g65hBr0WlbsPhpdn0A596dprKGUogJrHNOnmQMLsH33PQ3yq5LPAmhJFBb4WEejdjq3k82xCz2wIMrbMQxWP8yBJCzdPFAwlZVMKorZmVDzjDHg3RV2Ye%2B3ezEkJj6eMN%2Byvr8GOqUBqEcYznEYZCimKvOS0LBwpVEM4hepZG06bQsc4wqP0Z5qK5Yu6zAh6QaTu9jNLNhsLKtNriBLzeiVlcK9mddvdvD6i0DAHQKp7xP4WDdbTk8%2BfzSnNwILEnsAiEpY%2BuT4bz%2BsaqNDgfyw%2B3nEcbcJljP4gYIBaAb78FdHYoGPEZ63GZD7SvxDShiRL0GD%2FcAL3n7Yi3ql9cKzJBpX8ZGv0ieyjK2b&X-Amz-Signature=cb9f6ff8557631fe358039e8966111a192ffb7b1d1180746d8f88152293bb38e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDMTHTK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6FHMW6YZDLO8HtWXaBUaTz8XRZ6qEdAaB%2FkRTiQZd6gIgT00PyZRWBsd69QRHSQgcHPrunSiTtSC6pgcokzxFgtgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDE75Tsm25cRquG%2BUayrcA3tjLOWm9M%2F%2BOJAMuy5z0XR9PsKpJh8H7KwoVkhn9UCCC5g0B3ON32U5Y1qCgzJ94plQw8YIKuqRopnu9AzidPAkifmPBXEEQolo4saUv8Zm0dxynWC0%2FWym6wYPL44uMfiII%2F6RnkBihcOH0iqgNUWpKQqVAKxUDdzmn9vqS8tOSQAwcJbc1CLeCoHBX9NYNnRPeXJ%2BFadTs27BQdcsgGvWkm2lJXwaRMRYVbknKKfD2Ujm%2BUPLLjE6zPU8G8EzgZsVta5c5b6in%2FWeD4%2B%2FxI5PW5sPdfZv1iMUkj%2BN6G%2B4abGdxAgCVumYR0BsO%2FWohdAYY2htaNRtymQknMj6aWDs7DRA%2BTL8Q7YLIVaYe9MWn60Hd0B4Vr8GkD3OG%2BuCNqvd8JPVQpz0HVMjhkglxs7vzeBywpIohlNyjc1y%2Bscnj5BEmHrGs8XSvCvYZPV%2BX3gT91SY27JztOQZyw0igZlPLFkNfRTNGkuoUUMDtdxm2OkD4KEywoVScVW67g65hBr0WlbsPhpdn0A596dprKGUogJrHNOnmQMLsH33PQ3yq5LPAmhJFBb4WEejdjq3k82xCz2wIMrbMQxWP8yBJCzdPFAwlZVMKorZmVDzjDHg3RV2Ye%2B3ezEkJj6eMN%2Byvr8GOqUBqEcYznEYZCimKvOS0LBwpVEM4hepZG06bQsc4wqP0Z5qK5Yu6zAh6QaTu9jNLNhsLKtNriBLzeiVlcK9mddvdvD6i0DAHQKp7xP4WDdbTk8%2BfzSnNwILEnsAiEpY%2BuT4bz%2BsaqNDgfyw%2B3nEcbcJljP4gYIBaAb78FdHYoGPEZ63GZD7SvxDShiRL0GD%2FcAL3n7Yi3ql9cKzJBpX8ZGv0ieyjK2b&X-Amz-Signature=a386dc4efd063d112a5d8b7efceccf531491dd41678c8459eca939c0bc70ea92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDMTHTK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6FHMW6YZDLO8HtWXaBUaTz8XRZ6qEdAaB%2FkRTiQZd6gIgT00PyZRWBsd69QRHSQgcHPrunSiTtSC6pgcokzxFgtgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDE75Tsm25cRquG%2BUayrcA3tjLOWm9M%2F%2BOJAMuy5z0XR9PsKpJh8H7KwoVkhn9UCCC5g0B3ON32U5Y1qCgzJ94plQw8YIKuqRopnu9AzidPAkifmPBXEEQolo4saUv8Zm0dxynWC0%2FWym6wYPL44uMfiII%2F6RnkBihcOH0iqgNUWpKQqVAKxUDdzmn9vqS8tOSQAwcJbc1CLeCoHBX9NYNnRPeXJ%2BFadTs27BQdcsgGvWkm2lJXwaRMRYVbknKKfD2Ujm%2BUPLLjE6zPU8G8EzgZsVta5c5b6in%2FWeD4%2B%2FxI5PW5sPdfZv1iMUkj%2BN6G%2B4abGdxAgCVumYR0BsO%2FWohdAYY2htaNRtymQknMj6aWDs7DRA%2BTL8Q7YLIVaYe9MWn60Hd0B4Vr8GkD3OG%2BuCNqvd8JPVQpz0HVMjhkglxs7vzeBywpIohlNyjc1y%2Bscnj5BEmHrGs8XSvCvYZPV%2BX3gT91SY27JztOQZyw0igZlPLFkNfRTNGkuoUUMDtdxm2OkD4KEywoVScVW67g65hBr0WlbsPhpdn0A596dprKGUogJrHNOnmQMLsH33PQ3yq5LPAmhJFBb4WEejdjq3k82xCz2wIMrbMQxWP8yBJCzdPFAwlZVMKorZmVDzjDHg3RV2Ye%2B3ezEkJj6eMN%2Byvr8GOqUBqEcYznEYZCimKvOS0LBwpVEM4hepZG06bQsc4wqP0Z5qK5Yu6zAh6QaTu9jNLNhsLKtNriBLzeiVlcK9mddvdvD6i0DAHQKp7xP4WDdbTk8%2BfzSnNwILEnsAiEpY%2BuT4bz%2BsaqNDgfyw%2B3nEcbcJljP4gYIBaAb78FdHYoGPEZ63GZD7SvxDShiRL0GD%2FcAL3n7Yi3ql9cKzJBpX8ZGv0ieyjK2b&X-Amz-Signature=241b5c91d0d424d6b7b251a8503335d515ecf9014a256f991023763b3e4e5e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDMTHTK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6FHMW6YZDLO8HtWXaBUaTz8XRZ6qEdAaB%2FkRTiQZd6gIgT00PyZRWBsd69QRHSQgcHPrunSiTtSC6pgcokzxFgtgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDE75Tsm25cRquG%2BUayrcA3tjLOWm9M%2F%2BOJAMuy5z0XR9PsKpJh8H7KwoVkhn9UCCC5g0B3ON32U5Y1qCgzJ94plQw8YIKuqRopnu9AzidPAkifmPBXEEQolo4saUv8Zm0dxynWC0%2FWym6wYPL44uMfiII%2F6RnkBihcOH0iqgNUWpKQqVAKxUDdzmn9vqS8tOSQAwcJbc1CLeCoHBX9NYNnRPeXJ%2BFadTs27BQdcsgGvWkm2lJXwaRMRYVbknKKfD2Ujm%2BUPLLjE6zPU8G8EzgZsVta5c5b6in%2FWeD4%2B%2FxI5PW5sPdfZv1iMUkj%2BN6G%2B4abGdxAgCVumYR0BsO%2FWohdAYY2htaNRtymQknMj6aWDs7DRA%2BTL8Q7YLIVaYe9MWn60Hd0B4Vr8GkD3OG%2BuCNqvd8JPVQpz0HVMjhkglxs7vzeBywpIohlNyjc1y%2Bscnj5BEmHrGs8XSvCvYZPV%2BX3gT91SY27JztOQZyw0igZlPLFkNfRTNGkuoUUMDtdxm2OkD4KEywoVScVW67g65hBr0WlbsPhpdn0A596dprKGUogJrHNOnmQMLsH33PQ3yq5LPAmhJFBb4WEejdjq3k82xCz2wIMrbMQxWP8yBJCzdPFAwlZVMKorZmVDzjDHg3RV2Ye%2B3ezEkJj6eMN%2Byvr8GOqUBqEcYznEYZCimKvOS0LBwpVEM4hepZG06bQsc4wqP0Z5qK5Yu6zAh6QaTu9jNLNhsLKtNriBLzeiVlcK9mddvdvD6i0DAHQKp7xP4WDdbTk8%2BfzSnNwILEnsAiEpY%2BuT4bz%2BsaqNDgfyw%2B3nEcbcJljP4gYIBaAb78FdHYoGPEZ63GZD7SvxDShiRL0GD%2FcAL3n7Yi3ql9cKzJBpX8ZGv0ieyjK2b&X-Amz-Signature=996b95b2349d25ef20a5d5a8b707c468e8ac15971206ce5a29dce0b3347c3f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDMTHTK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6FHMW6YZDLO8HtWXaBUaTz8XRZ6qEdAaB%2FkRTiQZd6gIgT00PyZRWBsd69QRHSQgcHPrunSiTtSC6pgcokzxFgtgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDE75Tsm25cRquG%2BUayrcA3tjLOWm9M%2F%2BOJAMuy5z0XR9PsKpJh8H7KwoVkhn9UCCC5g0B3ON32U5Y1qCgzJ94plQw8YIKuqRopnu9AzidPAkifmPBXEEQolo4saUv8Zm0dxynWC0%2FWym6wYPL44uMfiII%2F6RnkBihcOH0iqgNUWpKQqVAKxUDdzmn9vqS8tOSQAwcJbc1CLeCoHBX9NYNnRPeXJ%2BFadTs27BQdcsgGvWkm2lJXwaRMRYVbknKKfD2Ujm%2BUPLLjE6zPU8G8EzgZsVta5c5b6in%2FWeD4%2B%2FxI5PW5sPdfZv1iMUkj%2BN6G%2B4abGdxAgCVumYR0BsO%2FWohdAYY2htaNRtymQknMj6aWDs7DRA%2BTL8Q7YLIVaYe9MWn60Hd0B4Vr8GkD3OG%2BuCNqvd8JPVQpz0HVMjhkglxs7vzeBywpIohlNyjc1y%2Bscnj5BEmHrGs8XSvCvYZPV%2BX3gT91SY27JztOQZyw0igZlPLFkNfRTNGkuoUUMDtdxm2OkD4KEywoVScVW67g65hBr0WlbsPhpdn0A596dprKGUogJrHNOnmQMLsH33PQ3yq5LPAmhJFBb4WEejdjq3k82xCz2wIMrbMQxWP8yBJCzdPFAwlZVMKorZmVDzjDHg3RV2Ye%2B3ezEkJj6eMN%2Byvr8GOqUBqEcYznEYZCimKvOS0LBwpVEM4hepZG06bQsc4wqP0Z5qK5Yu6zAh6QaTu9jNLNhsLKtNriBLzeiVlcK9mddvdvD6i0DAHQKp7xP4WDdbTk8%2BfzSnNwILEnsAiEpY%2BuT4bz%2BsaqNDgfyw%2B3nEcbcJljP4gYIBaAb78FdHYoGPEZ63GZD7SvxDShiRL0GD%2FcAL3n7Yi3ql9cKzJBpX8ZGv0ieyjK2b&X-Amz-Signature=b2c985672a6703c165dd41ae46c0b230153e090ffee216fc29a0aeb6b37aa880&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDMTHTK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6FHMW6YZDLO8HtWXaBUaTz8XRZ6qEdAaB%2FkRTiQZd6gIgT00PyZRWBsd69QRHSQgcHPrunSiTtSC6pgcokzxFgtgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDE75Tsm25cRquG%2BUayrcA3tjLOWm9M%2F%2BOJAMuy5z0XR9PsKpJh8H7KwoVkhn9UCCC5g0B3ON32U5Y1qCgzJ94plQw8YIKuqRopnu9AzidPAkifmPBXEEQolo4saUv8Zm0dxynWC0%2FWym6wYPL44uMfiII%2F6RnkBihcOH0iqgNUWpKQqVAKxUDdzmn9vqS8tOSQAwcJbc1CLeCoHBX9NYNnRPeXJ%2BFadTs27BQdcsgGvWkm2lJXwaRMRYVbknKKfD2Ujm%2BUPLLjE6zPU8G8EzgZsVta5c5b6in%2FWeD4%2B%2FxI5PW5sPdfZv1iMUkj%2BN6G%2B4abGdxAgCVumYR0BsO%2FWohdAYY2htaNRtymQknMj6aWDs7DRA%2BTL8Q7YLIVaYe9MWn60Hd0B4Vr8GkD3OG%2BuCNqvd8JPVQpz0HVMjhkglxs7vzeBywpIohlNyjc1y%2Bscnj5BEmHrGs8XSvCvYZPV%2BX3gT91SY27JztOQZyw0igZlPLFkNfRTNGkuoUUMDtdxm2OkD4KEywoVScVW67g65hBr0WlbsPhpdn0A596dprKGUogJrHNOnmQMLsH33PQ3yq5LPAmhJFBb4WEejdjq3k82xCz2wIMrbMQxWP8yBJCzdPFAwlZVMKorZmVDzjDHg3RV2Ye%2B3ezEkJj6eMN%2Byvr8GOqUBqEcYznEYZCimKvOS0LBwpVEM4hepZG06bQsc4wqP0Z5qK5Yu6zAh6QaTu9jNLNhsLKtNriBLzeiVlcK9mddvdvD6i0DAHQKp7xP4WDdbTk8%2BfzSnNwILEnsAiEpY%2BuT4bz%2BsaqNDgfyw%2B3nEcbcJljP4gYIBaAb78FdHYoGPEZ63GZD7SvxDShiRL0GD%2FcAL3n7Yi3ql9cKzJBpX8ZGv0ieyjK2b&X-Amz-Signature=7eac67d91dbc6c400cf194059720950545df102b6c56e30069fa91e25c10f866&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
