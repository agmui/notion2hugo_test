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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MV4T5N%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkof1gyIXbBS6tZv9qK%2FfjK%2FCbB1iXvaL87E6Ga2eHwIgOnMgezTv7swZNmpFp5F0B1Yz9A2H9Me2R869jqFI4zIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGXDKSMuZ6Dw3AdZOSrcA3of0lveXW30Kvi0p%2FMrwaeHEnL69O63VtwOYymcx3efjrSbi8QuFAFQlqKlGbznMJkWcg7ZK8y%2FdJk9KrkaiZfvYTGHAAH1qUiB93MZMxTmB1Wou4NpNwYL6mz4n5eoGpcVPxtHXjAIWRFlCN4hGC9O1ncCxRG%2F6vroRu8vTdOZX9bumTmhlbZPaXNfNN7t6Pa%2BLJ149Ut5%2FKCuzw2DKxs98RpMj17RDgU32aFhUdxQbyxH7ejtZLfueg2TcvX1c0qQ3zDhIIc7m%2FK30w6lMZgVz0%2FHNlAyjIPu%2F8TjsWvrYUSr96TZRbQc66QhRApF%2FbgEtAgGWQ715%2FN6MFiCIDeK3j4qWn4bgJe%2BmvVaAidd0nImnvZl5wGiPdGkyFkwXVN7rk2l0aI3Kb5CJZqjAVUaj0mnAE3KQmlfXvy5C9%2Bg7sVLloHTOF%2FxlbMfAi3fJcZgrM%2BY1MoQPQTyf8EzngwXiifwXBw2jwoJvTWvZr1fakxaMS6AJPi1WcyuWptjAGPQctB3xKLVO2GOC9NnAa9i9tGHt9D96aZpW%2BCWb9InEKeSwsYVbxHD78EBE38kScdaNOBW9%2FcrbDk3YEY4Or7shLQPHWvcaIZN5k8fO5oINz%2Bu8y4ew%2BgNbUCZMPiW2MEGOqUBqogNfQB98tEEPL8OieDWSzYA7XouZXBpA5K6jCJ8y52lwHkvsBZ%2FwnFrbmyw2OmUdUDgUOE2MwW0WFlFDXmLiSGNq5sZxmP%2FukfvLky8Zr9Y3Q0OW2t6FFi11Zd3rAVpcHPE6kDwREa1KBEtFJdgD8q9bpQDedZPs4UL2lY0x2BPzO0twWkmY9oMRX5dXA%2F9%2FdjCMJiwUos9Drlog9Hwiekjw7A7&X-Amz-Signature=69b905b0023950a616ea5e6fac8a7caafa1e8ce679dd3e1b92139a29bf40dcfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MV4T5N%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkof1gyIXbBS6tZv9qK%2FfjK%2FCbB1iXvaL87E6Ga2eHwIgOnMgezTv7swZNmpFp5F0B1Yz9A2H9Me2R869jqFI4zIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGXDKSMuZ6Dw3AdZOSrcA3of0lveXW30Kvi0p%2FMrwaeHEnL69O63VtwOYymcx3efjrSbi8QuFAFQlqKlGbznMJkWcg7ZK8y%2FdJk9KrkaiZfvYTGHAAH1qUiB93MZMxTmB1Wou4NpNwYL6mz4n5eoGpcVPxtHXjAIWRFlCN4hGC9O1ncCxRG%2F6vroRu8vTdOZX9bumTmhlbZPaXNfNN7t6Pa%2BLJ149Ut5%2FKCuzw2DKxs98RpMj17RDgU32aFhUdxQbyxH7ejtZLfueg2TcvX1c0qQ3zDhIIc7m%2FK30w6lMZgVz0%2FHNlAyjIPu%2F8TjsWvrYUSr96TZRbQc66QhRApF%2FbgEtAgGWQ715%2FN6MFiCIDeK3j4qWn4bgJe%2BmvVaAidd0nImnvZl5wGiPdGkyFkwXVN7rk2l0aI3Kb5CJZqjAVUaj0mnAE3KQmlfXvy5C9%2Bg7sVLloHTOF%2FxlbMfAi3fJcZgrM%2BY1MoQPQTyf8EzngwXiifwXBw2jwoJvTWvZr1fakxaMS6AJPi1WcyuWptjAGPQctB3xKLVO2GOC9NnAa9i9tGHt9D96aZpW%2BCWb9InEKeSwsYVbxHD78EBE38kScdaNOBW9%2FcrbDk3YEY4Or7shLQPHWvcaIZN5k8fO5oINz%2Bu8y4ew%2BgNbUCZMPiW2MEGOqUBqogNfQB98tEEPL8OieDWSzYA7XouZXBpA5K6jCJ8y52lwHkvsBZ%2FwnFrbmyw2OmUdUDgUOE2MwW0WFlFDXmLiSGNq5sZxmP%2FukfvLky8Zr9Y3Q0OW2t6FFi11Zd3rAVpcHPE6kDwREa1KBEtFJdgD8q9bpQDedZPs4UL2lY0x2BPzO0twWkmY9oMRX5dXA%2F9%2FdjCMJiwUos9Drlog9Hwiekjw7A7&X-Amz-Signature=ad0c2ef71a930a9830f38047dfca8c9343f7d7e888d8be6f2df9ccf099a3412e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MV4T5N%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkof1gyIXbBS6tZv9qK%2FfjK%2FCbB1iXvaL87E6Ga2eHwIgOnMgezTv7swZNmpFp5F0B1Yz9A2H9Me2R869jqFI4zIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGXDKSMuZ6Dw3AdZOSrcA3of0lveXW30Kvi0p%2FMrwaeHEnL69O63VtwOYymcx3efjrSbi8QuFAFQlqKlGbznMJkWcg7ZK8y%2FdJk9KrkaiZfvYTGHAAH1qUiB93MZMxTmB1Wou4NpNwYL6mz4n5eoGpcVPxtHXjAIWRFlCN4hGC9O1ncCxRG%2F6vroRu8vTdOZX9bumTmhlbZPaXNfNN7t6Pa%2BLJ149Ut5%2FKCuzw2DKxs98RpMj17RDgU32aFhUdxQbyxH7ejtZLfueg2TcvX1c0qQ3zDhIIc7m%2FK30w6lMZgVz0%2FHNlAyjIPu%2F8TjsWvrYUSr96TZRbQc66QhRApF%2FbgEtAgGWQ715%2FN6MFiCIDeK3j4qWn4bgJe%2BmvVaAidd0nImnvZl5wGiPdGkyFkwXVN7rk2l0aI3Kb5CJZqjAVUaj0mnAE3KQmlfXvy5C9%2Bg7sVLloHTOF%2FxlbMfAi3fJcZgrM%2BY1MoQPQTyf8EzngwXiifwXBw2jwoJvTWvZr1fakxaMS6AJPi1WcyuWptjAGPQctB3xKLVO2GOC9NnAa9i9tGHt9D96aZpW%2BCWb9InEKeSwsYVbxHD78EBE38kScdaNOBW9%2FcrbDk3YEY4Or7shLQPHWvcaIZN5k8fO5oINz%2Bu8y4ew%2BgNbUCZMPiW2MEGOqUBqogNfQB98tEEPL8OieDWSzYA7XouZXBpA5K6jCJ8y52lwHkvsBZ%2FwnFrbmyw2OmUdUDgUOE2MwW0WFlFDXmLiSGNq5sZxmP%2FukfvLky8Zr9Y3Q0OW2t6FFi11Zd3rAVpcHPE6kDwREa1KBEtFJdgD8q9bpQDedZPs4UL2lY0x2BPzO0twWkmY9oMRX5dXA%2F9%2FdjCMJiwUos9Drlog9Hwiekjw7A7&X-Amz-Signature=519316ae326697433e1de6bbc00cd4dd37b13ab8783bae82bb7e142948c6c624&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MV4T5N%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkof1gyIXbBS6tZv9qK%2FfjK%2FCbB1iXvaL87E6Ga2eHwIgOnMgezTv7swZNmpFp5F0B1Yz9A2H9Me2R869jqFI4zIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGXDKSMuZ6Dw3AdZOSrcA3of0lveXW30Kvi0p%2FMrwaeHEnL69O63VtwOYymcx3efjrSbi8QuFAFQlqKlGbznMJkWcg7ZK8y%2FdJk9KrkaiZfvYTGHAAH1qUiB93MZMxTmB1Wou4NpNwYL6mz4n5eoGpcVPxtHXjAIWRFlCN4hGC9O1ncCxRG%2F6vroRu8vTdOZX9bumTmhlbZPaXNfNN7t6Pa%2BLJ149Ut5%2FKCuzw2DKxs98RpMj17RDgU32aFhUdxQbyxH7ejtZLfueg2TcvX1c0qQ3zDhIIc7m%2FK30w6lMZgVz0%2FHNlAyjIPu%2F8TjsWvrYUSr96TZRbQc66QhRApF%2FbgEtAgGWQ715%2FN6MFiCIDeK3j4qWn4bgJe%2BmvVaAidd0nImnvZl5wGiPdGkyFkwXVN7rk2l0aI3Kb5CJZqjAVUaj0mnAE3KQmlfXvy5C9%2Bg7sVLloHTOF%2FxlbMfAi3fJcZgrM%2BY1MoQPQTyf8EzngwXiifwXBw2jwoJvTWvZr1fakxaMS6AJPi1WcyuWptjAGPQctB3xKLVO2GOC9NnAa9i9tGHt9D96aZpW%2BCWb9InEKeSwsYVbxHD78EBE38kScdaNOBW9%2FcrbDk3YEY4Or7shLQPHWvcaIZN5k8fO5oINz%2Bu8y4ew%2BgNbUCZMPiW2MEGOqUBqogNfQB98tEEPL8OieDWSzYA7XouZXBpA5K6jCJ8y52lwHkvsBZ%2FwnFrbmyw2OmUdUDgUOE2MwW0WFlFDXmLiSGNq5sZxmP%2FukfvLky8Zr9Y3Q0OW2t6FFi11Zd3rAVpcHPE6kDwREa1KBEtFJdgD8q9bpQDedZPs4UL2lY0x2BPzO0twWkmY9oMRX5dXA%2F9%2FdjCMJiwUos9Drlog9Hwiekjw7A7&X-Amz-Signature=e56beec256400ff8dc087cfb3a0bb0b00b1bd73a5266ccfd5cbc2a0395f67a74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MV4T5N%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkof1gyIXbBS6tZv9qK%2FfjK%2FCbB1iXvaL87E6Ga2eHwIgOnMgezTv7swZNmpFp5F0B1Yz9A2H9Me2R869jqFI4zIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGXDKSMuZ6Dw3AdZOSrcA3of0lveXW30Kvi0p%2FMrwaeHEnL69O63VtwOYymcx3efjrSbi8QuFAFQlqKlGbznMJkWcg7ZK8y%2FdJk9KrkaiZfvYTGHAAH1qUiB93MZMxTmB1Wou4NpNwYL6mz4n5eoGpcVPxtHXjAIWRFlCN4hGC9O1ncCxRG%2F6vroRu8vTdOZX9bumTmhlbZPaXNfNN7t6Pa%2BLJ149Ut5%2FKCuzw2DKxs98RpMj17RDgU32aFhUdxQbyxH7ejtZLfueg2TcvX1c0qQ3zDhIIc7m%2FK30w6lMZgVz0%2FHNlAyjIPu%2F8TjsWvrYUSr96TZRbQc66QhRApF%2FbgEtAgGWQ715%2FN6MFiCIDeK3j4qWn4bgJe%2BmvVaAidd0nImnvZl5wGiPdGkyFkwXVN7rk2l0aI3Kb5CJZqjAVUaj0mnAE3KQmlfXvy5C9%2Bg7sVLloHTOF%2FxlbMfAi3fJcZgrM%2BY1MoQPQTyf8EzngwXiifwXBw2jwoJvTWvZr1fakxaMS6AJPi1WcyuWptjAGPQctB3xKLVO2GOC9NnAa9i9tGHt9D96aZpW%2BCWb9InEKeSwsYVbxHD78EBE38kScdaNOBW9%2FcrbDk3YEY4Or7shLQPHWvcaIZN5k8fO5oINz%2Bu8y4ew%2BgNbUCZMPiW2MEGOqUBqogNfQB98tEEPL8OieDWSzYA7XouZXBpA5K6jCJ8y52lwHkvsBZ%2FwnFrbmyw2OmUdUDgUOE2MwW0WFlFDXmLiSGNq5sZxmP%2FukfvLky8Zr9Y3Q0OW2t6FFi11Zd3rAVpcHPE6kDwREa1KBEtFJdgD8q9bpQDedZPs4UL2lY0x2BPzO0twWkmY9oMRX5dXA%2F9%2FdjCMJiwUos9Drlog9Hwiekjw7A7&X-Amz-Signature=1478ae92d9c5dd28ffc1b616557e08bb8a380501a34c2efbc682a7000ee416b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MV4T5N%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkof1gyIXbBS6tZv9qK%2FfjK%2FCbB1iXvaL87E6Ga2eHwIgOnMgezTv7swZNmpFp5F0B1Yz9A2H9Me2R869jqFI4zIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGXDKSMuZ6Dw3AdZOSrcA3of0lveXW30Kvi0p%2FMrwaeHEnL69O63VtwOYymcx3efjrSbi8QuFAFQlqKlGbznMJkWcg7ZK8y%2FdJk9KrkaiZfvYTGHAAH1qUiB93MZMxTmB1Wou4NpNwYL6mz4n5eoGpcVPxtHXjAIWRFlCN4hGC9O1ncCxRG%2F6vroRu8vTdOZX9bumTmhlbZPaXNfNN7t6Pa%2BLJ149Ut5%2FKCuzw2DKxs98RpMj17RDgU32aFhUdxQbyxH7ejtZLfueg2TcvX1c0qQ3zDhIIc7m%2FK30w6lMZgVz0%2FHNlAyjIPu%2F8TjsWvrYUSr96TZRbQc66QhRApF%2FbgEtAgGWQ715%2FN6MFiCIDeK3j4qWn4bgJe%2BmvVaAidd0nImnvZl5wGiPdGkyFkwXVN7rk2l0aI3Kb5CJZqjAVUaj0mnAE3KQmlfXvy5C9%2Bg7sVLloHTOF%2FxlbMfAi3fJcZgrM%2BY1MoQPQTyf8EzngwXiifwXBw2jwoJvTWvZr1fakxaMS6AJPi1WcyuWptjAGPQctB3xKLVO2GOC9NnAa9i9tGHt9D96aZpW%2BCWb9InEKeSwsYVbxHD78EBE38kScdaNOBW9%2FcrbDk3YEY4Or7shLQPHWvcaIZN5k8fO5oINz%2Bu8y4ew%2BgNbUCZMPiW2MEGOqUBqogNfQB98tEEPL8OieDWSzYA7XouZXBpA5K6jCJ8y52lwHkvsBZ%2FwnFrbmyw2OmUdUDgUOE2MwW0WFlFDXmLiSGNq5sZxmP%2FukfvLky8Zr9Y3Q0OW2t6FFi11Zd3rAVpcHPE6kDwREa1KBEtFJdgD8q9bpQDedZPs4UL2lY0x2BPzO0twWkmY9oMRX5dXA%2F9%2FdjCMJiwUos9Drlog9Hwiekjw7A7&X-Amz-Signature=55e3479912859ab52fed6c1d1783ddb922a8befe3c397d0b85c48e034710b5bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MV4T5N%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkof1gyIXbBS6tZv9qK%2FfjK%2FCbB1iXvaL87E6Ga2eHwIgOnMgezTv7swZNmpFp5F0B1Yz9A2H9Me2R869jqFI4zIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGXDKSMuZ6Dw3AdZOSrcA3of0lveXW30Kvi0p%2FMrwaeHEnL69O63VtwOYymcx3efjrSbi8QuFAFQlqKlGbznMJkWcg7ZK8y%2FdJk9KrkaiZfvYTGHAAH1qUiB93MZMxTmB1Wou4NpNwYL6mz4n5eoGpcVPxtHXjAIWRFlCN4hGC9O1ncCxRG%2F6vroRu8vTdOZX9bumTmhlbZPaXNfNN7t6Pa%2BLJ149Ut5%2FKCuzw2DKxs98RpMj17RDgU32aFhUdxQbyxH7ejtZLfueg2TcvX1c0qQ3zDhIIc7m%2FK30w6lMZgVz0%2FHNlAyjIPu%2F8TjsWvrYUSr96TZRbQc66QhRApF%2FbgEtAgGWQ715%2FN6MFiCIDeK3j4qWn4bgJe%2BmvVaAidd0nImnvZl5wGiPdGkyFkwXVN7rk2l0aI3Kb5CJZqjAVUaj0mnAE3KQmlfXvy5C9%2Bg7sVLloHTOF%2FxlbMfAi3fJcZgrM%2BY1MoQPQTyf8EzngwXiifwXBw2jwoJvTWvZr1fakxaMS6AJPi1WcyuWptjAGPQctB3xKLVO2GOC9NnAa9i9tGHt9D96aZpW%2BCWb9InEKeSwsYVbxHD78EBE38kScdaNOBW9%2FcrbDk3YEY4Or7shLQPHWvcaIZN5k8fO5oINz%2Bu8y4ew%2BgNbUCZMPiW2MEGOqUBqogNfQB98tEEPL8OieDWSzYA7XouZXBpA5K6jCJ8y52lwHkvsBZ%2FwnFrbmyw2OmUdUDgUOE2MwW0WFlFDXmLiSGNq5sZxmP%2FukfvLky8Zr9Y3Q0OW2t6FFi11Zd3rAVpcHPE6kDwREa1KBEtFJdgD8q9bpQDedZPs4UL2lY0x2BPzO0twWkmY9oMRX5dXA%2F9%2FdjCMJiwUos9Drlog9Hwiekjw7A7&X-Amz-Signature=8fbdb69ebd8d4d77ccbc300ccd0b9e9e9f5a04b83cc07b1dddc2cabcc26564b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MV4T5N%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkof1gyIXbBS6tZv9qK%2FfjK%2FCbB1iXvaL87E6Ga2eHwIgOnMgezTv7swZNmpFp5F0B1Yz9A2H9Me2R869jqFI4zIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGXDKSMuZ6Dw3AdZOSrcA3of0lveXW30Kvi0p%2FMrwaeHEnL69O63VtwOYymcx3efjrSbi8QuFAFQlqKlGbznMJkWcg7ZK8y%2FdJk9KrkaiZfvYTGHAAH1qUiB93MZMxTmB1Wou4NpNwYL6mz4n5eoGpcVPxtHXjAIWRFlCN4hGC9O1ncCxRG%2F6vroRu8vTdOZX9bumTmhlbZPaXNfNN7t6Pa%2BLJ149Ut5%2FKCuzw2DKxs98RpMj17RDgU32aFhUdxQbyxH7ejtZLfueg2TcvX1c0qQ3zDhIIc7m%2FK30w6lMZgVz0%2FHNlAyjIPu%2F8TjsWvrYUSr96TZRbQc66QhRApF%2FbgEtAgGWQ715%2FN6MFiCIDeK3j4qWn4bgJe%2BmvVaAidd0nImnvZl5wGiPdGkyFkwXVN7rk2l0aI3Kb5CJZqjAVUaj0mnAE3KQmlfXvy5C9%2Bg7sVLloHTOF%2FxlbMfAi3fJcZgrM%2BY1MoQPQTyf8EzngwXiifwXBw2jwoJvTWvZr1fakxaMS6AJPi1WcyuWptjAGPQctB3xKLVO2GOC9NnAa9i9tGHt9D96aZpW%2BCWb9InEKeSwsYVbxHD78EBE38kScdaNOBW9%2FcrbDk3YEY4Or7shLQPHWvcaIZN5k8fO5oINz%2Bu8y4ew%2BgNbUCZMPiW2MEGOqUBqogNfQB98tEEPL8OieDWSzYA7XouZXBpA5K6jCJ8y52lwHkvsBZ%2FwnFrbmyw2OmUdUDgUOE2MwW0WFlFDXmLiSGNq5sZxmP%2FukfvLky8Zr9Y3Q0OW2t6FFi11Zd3rAVpcHPE6kDwREa1KBEtFJdgD8q9bpQDedZPs4UL2lY0x2BPzO0twWkmY9oMRX5dXA%2F9%2FdjCMJiwUos9Drlog9Hwiekjw7A7&X-Amz-Signature=039e3c3f2c3f9fad5328a02e9838832dfb63e98b6e3579481d6ff2f60fd1b230&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
