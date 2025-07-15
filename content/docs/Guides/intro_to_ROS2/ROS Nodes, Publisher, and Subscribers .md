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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNAUWYY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAiQnBZoWDmefsRzDGkAr25y5BSaRjQ6HM75Z1BtAoMlAiEA0Zu2xRS65WkDKdt7HbhHFQ3cBZz8nq1SmHWqdZhtsEsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIaPSVmnWgVlJQCsayrcAzTLWTnzXCjIaLxog%2F4uxNEKRp15EqrTmopVESmb8UcDsiFVB55dDEYpancESh%2FXlnunbNGQSWL6pCIlAvw4ky7IxE00jOwbhomYfWdqfcsho0nkcyH7YklQQ5uQbu9aZDvSXoDjaxbvjoZ6I%2B09LqGgJFVW38mvZ94Xd1YLrmBtEGnagjAfBt46mVk7oP%2FXmfePoLjqKxwxpACNtdlQ2avVSPha%2FF4PMh56cYIQQeuAwHczS96d88o7GBxaU5SnzCVNoWBQDjKoBe5Ss7LnpgS5alH5wfAe6ZK%2Bh9MjL22M2Jfwhs%2Fd0Bn9jamujXXtustsBUQecwxbIaLfmt%2B24OPH6iQbeJOPDgkLJf8gdK4J2j7dlgUNMPD66cbOyxpdaifNQaICqy5JLpcV%2FEgQlvamL8o%2FwySFzdDbuW%2Fwq3C%2B5BaAN4Ju1Vc3m7fxrioiQUgeZAnxHYiK6WLWsg3CPpL9ymOwvWPULsPMuGguisCA2SzWkVTJ7pDKoglmR73M4CI3vjQ3Ee8mgUr4Bsv4z%2ByN%2BEdip5INFG6juFyzBhKrS7ctqrdmT1NHywB%2B9KfhtulsMBb8skmFLdLAS9Inoc0OGqS%2B%2BLTttSRMacAYY%2BZ2y4iD7gIE1epdXO4jMKmk28MGOqUB5TTa%2Bxio0ipqEdkCRuZ4Jm6ZgerR7kaLeo3%2FJBITqhfUhjAmZmrwiCoPYoYM3dgXzKUytQhbFw3lOrD%2BZPBwWRRLXD4mJSH6zmvn607d8PZ9kg%2ByurWPaxuJugnqZaaUVjQpQGP5QIP9L87ZVeClgd5xiGuOgt9qWHHsNfTy2WMFyxzzbQivBVgBCoT516xb73DKCIdpgjdAogN5Co4tgtaOlvgp&X-Amz-Signature=332a7ad6dcc746ed503d16f9766aba90ee8caed02378693cd46a240a73ec21f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNAUWYY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAiQnBZoWDmefsRzDGkAr25y5BSaRjQ6HM75Z1BtAoMlAiEA0Zu2xRS65WkDKdt7HbhHFQ3cBZz8nq1SmHWqdZhtsEsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIaPSVmnWgVlJQCsayrcAzTLWTnzXCjIaLxog%2F4uxNEKRp15EqrTmopVESmb8UcDsiFVB55dDEYpancESh%2FXlnunbNGQSWL6pCIlAvw4ky7IxE00jOwbhomYfWdqfcsho0nkcyH7YklQQ5uQbu9aZDvSXoDjaxbvjoZ6I%2B09LqGgJFVW38mvZ94Xd1YLrmBtEGnagjAfBt46mVk7oP%2FXmfePoLjqKxwxpACNtdlQ2avVSPha%2FF4PMh56cYIQQeuAwHczS96d88o7GBxaU5SnzCVNoWBQDjKoBe5Ss7LnpgS5alH5wfAe6ZK%2Bh9MjL22M2Jfwhs%2Fd0Bn9jamujXXtustsBUQecwxbIaLfmt%2B24OPH6iQbeJOPDgkLJf8gdK4J2j7dlgUNMPD66cbOyxpdaifNQaICqy5JLpcV%2FEgQlvamL8o%2FwySFzdDbuW%2Fwq3C%2B5BaAN4Ju1Vc3m7fxrioiQUgeZAnxHYiK6WLWsg3CPpL9ymOwvWPULsPMuGguisCA2SzWkVTJ7pDKoglmR73M4CI3vjQ3Ee8mgUr4Bsv4z%2ByN%2BEdip5INFG6juFyzBhKrS7ctqrdmT1NHywB%2B9KfhtulsMBb8skmFLdLAS9Inoc0OGqS%2B%2BLTttSRMacAYY%2BZ2y4iD7gIE1epdXO4jMKmk28MGOqUB5TTa%2Bxio0ipqEdkCRuZ4Jm6ZgerR7kaLeo3%2FJBITqhfUhjAmZmrwiCoPYoYM3dgXzKUytQhbFw3lOrD%2BZPBwWRRLXD4mJSH6zmvn607d8PZ9kg%2ByurWPaxuJugnqZaaUVjQpQGP5QIP9L87ZVeClgd5xiGuOgt9qWHHsNfTy2WMFyxzzbQivBVgBCoT516xb73DKCIdpgjdAogN5Co4tgtaOlvgp&X-Amz-Signature=625f015598dc265859553f9bff92e8db17475ca1a6a60a1fc8fe7fbcfad9093f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNAUWYY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAiQnBZoWDmefsRzDGkAr25y5BSaRjQ6HM75Z1BtAoMlAiEA0Zu2xRS65WkDKdt7HbhHFQ3cBZz8nq1SmHWqdZhtsEsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIaPSVmnWgVlJQCsayrcAzTLWTnzXCjIaLxog%2F4uxNEKRp15EqrTmopVESmb8UcDsiFVB55dDEYpancESh%2FXlnunbNGQSWL6pCIlAvw4ky7IxE00jOwbhomYfWdqfcsho0nkcyH7YklQQ5uQbu9aZDvSXoDjaxbvjoZ6I%2B09LqGgJFVW38mvZ94Xd1YLrmBtEGnagjAfBt46mVk7oP%2FXmfePoLjqKxwxpACNtdlQ2avVSPha%2FF4PMh56cYIQQeuAwHczS96d88o7GBxaU5SnzCVNoWBQDjKoBe5Ss7LnpgS5alH5wfAe6ZK%2Bh9MjL22M2Jfwhs%2Fd0Bn9jamujXXtustsBUQecwxbIaLfmt%2B24OPH6iQbeJOPDgkLJf8gdK4J2j7dlgUNMPD66cbOyxpdaifNQaICqy5JLpcV%2FEgQlvamL8o%2FwySFzdDbuW%2Fwq3C%2B5BaAN4Ju1Vc3m7fxrioiQUgeZAnxHYiK6WLWsg3CPpL9ymOwvWPULsPMuGguisCA2SzWkVTJ7pDKoglmR73M4CI3vjQ3Ee8mgUr4Bsv4z%2ByN%2BEdip5INFG6juFyzBhKrS7ctqrdmT1NHywB%2B9KfhtulsMBb8skmFLdLAS9Inoc0OGqS%2B%2BLTttSRMacAYY%2BZ2y4iD7gIE1epdXO4jMKmk28MGOqUB5TTa%2Bxio0ipqEdkCRuZ4Jm6ZgerR7kaLeo3%2FJBITqhfUhjAmZmrwiCoPYoYM3dgXzKUytQhbFw3lOrD%2BZPBwWRRLXD4mJSH6zmvn607d8PZ9kg%2ByurWPaxuJugnqZaaUVjQpQGP5QIP9L87ZVeClgd5xiGuOgt9qWHHsNfTy2WMFyxzzbQivBVgBCoT516xb73DKCIdpgjdAogN5Co4tgtaOlvgp&X-Amz-Signature=d10e38cda481d8972f5d292028079e15656d8fe86442bb3e20161e000961071a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNAUWYY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAiQnBZoWDmefsRzDGkAr25y5BSaRjQ6HM75Z1BtAoMlAiEA0Zu2xRS65WkDKdt7HbhHFQ3cBZz8nq1SmHWqdZhtsEsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIaPSVmnWgVlJQCsayrcAzTLWTnzXCjIaLxog%2F4uxNEKRp15EqrTmopVESmb8UcDsiFVB55dDEYpancESh%2FXlnunbNGQSWL6pCIlAvw4ky7IxE00jOwbhomYfWdqfcsho0nkcyH7YklQQ5uQbu9aZDvSXoDjaxbvjoZ6I%2B09LqGgJFVW38mvZ94Xd1YLrmBtEGnagjAfBt46mVk7oP%2FXmfePoLjqKxwxpACNtdlQ2avVSPha%2FF4PMh56cYIQQeuAwHczS96d88o7GBxaU5SnzCVNoWBQDjKoBe5Ss7LnpgS5alH5wfAe6ZK%2Bh9MjL22M2Jfwhs%2Fd0Bn9jamujXXtustsBUQecwxbIaLfmt%2B24OPH6iQbeJOPDgkLJf8gdK4J2j7dlgUNMPD66cbOyxpdaifNQaICqy5JLpcV%2FEgQlvamL8o%2FwySFzdDbuW%2Fwq3C%2B5BaAN4Ju1Vc3m7fxrioiQUgeZAnxHYiK6WLWsg3CPpL9ymOwvWPULsPMuGguisCA2SzWkVTJ7pDKoglmR73M4CI3vjQ3Ee8mgUr4Bsv4z%2ByN%2BEdip5INFG6juFyzBhKrS7ctqrdmT1NHywB%2B9KfhtulsMBb8skmFLdLAS9Inoc0OGqS%2B%2BLTttSRMacAYY%2BZ2y4iD7gIE1epdXO4jMKmk28MGOqUB5TTa%2Bxio0ipqEdkCRuZ4Jm6ZgerR7kaLeo3%2FJBITqhfUhjAmZmrwiCoPYoYM3dgXzKUytQhbFw3lOrD%2BZPBwWRRLXD4mJSH6zmvn607d8PZ9kg%2ByurWPaxuJugnqZaaUVjQpQGP5QIP9L87ZVeClgd5xiGuOgt9qWHHsNfTy2WMFyxzzbQivBVgBCoT516xb73DKCIdpgjdAogN5Co4tgtaOlvgp&X-Amz-Signature=52e23eb590d20f2cf51ac986484a4d40e0cb64764b62ea6b1741d2090ae31307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNAUWYY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAiQnBZoWDmefsRzDGkAr25y5BSaRjQ6HM75Z1BtAoMlAiEA0Zu2xRS65WkDKdt7HbhHFQ3cBZz8nq1SmHWqdZhtsEsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIaPSVmnWgVlJQCsayrcAzTLWTnzXCjIaLxog%2F4uxNEKRp15EqrTmopVESmb8UcDsiFVB55dDEYpancESh%2FXlnunbNGQSWL6pCIlAvw4ky7IxE00jOwbhomYfWdqfcsho0nkcyH7YklQQ5uQbu9aZDvSXoDjaxbvjoZ6I%2B09LqGgJFVW38mvZ94Xd1YLrmBtEGnagjAfBt46mVk7oP%2FXmfePoLjqKxwxpACNtdlQ2avVSPha%2FF4PMh56cYIQQeuAwHczS96d88o7GBxaU5SnzCVNoWBQDjKoBe5Ss7LnpgS5alH5wfAe6ZK%2Bh9MjL22M2Jfwhs%2Fd0Bn9jamujXXtustsBUQecwxbIaLfmt%2B24OPH6iQbeJOPDgkLJf8gdK4J2j7dlgUNMPD66cbOyxpdaifNQaICqy5JLpcV%2FEgQlvamL8o%2FwySFzdDbuW%2Fwq3C%2B5BaAN4Ju1Vc3m7fxrioiQUgeZAnxHYiK6WLWsg3CPpL9ymOwvWPULsPMuGguisCA2SzWkVTJ7pDKoglmR73M4CI3vjQ3Ee8mgUr4Bsv4z%2ByN%2BEdip5INFG6juFyzBhKrS7ctqrdmT1NHywB%2B9KfhtulsMBb8skmFLdLAS9Inoc0OGqS%2B%2BLTttSRMacAYY%2BZ2y4iD7gIE1epdXO4jMKmk28MGOqUB5TTa%2Bxio0ipqEdkCRuZ4Jm6ZgerR7kaLeo3%2FJBITqhfUhjAmZmrwiCoPYoYM3dgXzKUytQhbFw3lOrD%2BZPBwWRRLXD4mJSH6zmvn607d8PZ9kg%2ByurWPaxuJugnqZaaUVjQpQGP5QIP9L87ZVeClgd5xiGuOgt9qWHHsNfTy2WMFyxzzbQivBVgBCoT516xb73DKCIdpgjdAogN5Co4tgtaOlvgp&X-Amz-Signature=6680574658bf6024fb413ede5418b13331625ce582a273893db29ef1291860da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNAUWYY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAiQnBZoWDmefsRzDGkAr25y5BSaRjQ6HM75Z1BtAoMlAiEA0Zu2xRS65WkDKdt7HbhHFQ3cBZz8nq1SmHWqdZhtsEsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIaPSVmnWgVlJQCsayrcAzTLWTnzXCjIaLxog%2F4uxNEKRp15EqrTmopVESmb8UcDsiFVB55dDEYpancESh%2FXlnunbNGQSWL6pCIlAvw4ky7IxE00jOwbhomYfWdqfcsho0nkcyH7YklQQ5uQbu9aZDvSXoDjaxbvjoZ6I%2B09LqGgJFVW38mvZ94Xd1YLrmBtEGnagjAfBt46mVk7oP%2FXmfePoLjqKxwxpACNtdlQ2avVSPha%2FF4PMh56cYIQQeuAwHczS96d88o7GBxaU5SnzCVNoWBQDjKoBe5Ss7LnpgS5alH5wfAe6ZK%2Bh9MjL22M2Jfwhs%2Fd0Bn9jamujXXtustsBUQecwxbIaLfmt%2B24OPH6iQbeJOPDgkLJf8gdK4J2j7dlgUNMPD66cbOyxpdaifNQaICqy5JLpcV%2FEgQlvamL8o%2FwySFzdDbuW%2Fwq3C%2B5BaAN4Ju1Vc3m7fxrioiQUgeZAnxHYiK6WLWsg3CPpL9ymOwvWPULsPMuGguisCA2SzWkVTJ7pDKoglmR73M4CI3vjQ3Ee8mgUr4Bsv4z%2ByN%2BEdip5INFG6juFyzBhKrS7ctqrdmT1NHywB%2B9KfhtulsMBb8skmFLdLAS9Inoc0OGqS%2B%2BLTttSRMacAYY%2BZ2y4iD7gIE1epdXO4jMKmk28MGOqUB5TTa%2Bxio0ipqEdkCRuZ4Jm6ZgerR7kaLeo3%2FJBITqhfUhjAmZmrwiCoPYoYM3dgXzKUytQhbFw3lOrD%2BZPBwWRRLXD4mJSH6zmvn607d8PZ9kg%2ByurWPaxuJugnqZaaUVjQpQGP5QIP9L87ZVeClgd5xiGuOgt9qWHHsNfTy2WMFyxzzbQivBVgBCoT516xb73DKCIdpgjdAogN5Co4tgtaOlvgp&X-Amz-Signature=21f42b87378283e1491874b0808b2c905c6a6c3a70c5a64a9b534c266fea3f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNAUWYY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAiQnBZoWDmefsRzDGkAr25y5BSaRjQ6HM75Z1BtAoMlAiEA0Zu2xRS65WkDKdt7HbhHFQ3cBZz8nq1SmHWqdZhtsEsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIaPSVmnWgVlJQCsayrcAzTLWTnzXCjIaLxog%2F4uxNEKRp15EqrTmopVESmb8UcDsiFVB55dDEYpancESh%2FXlnunbNGQSWL6pCIlAvw4ky7IxE00jOwbhomYfWdqfcsho0nkcyH7YklQQ5uQbu9aZDvSXoDjaxbvjoZ6I%2B09LqGgJFVW38mvZ94Xd1YLrmBtEGnagjAfBt46mVk7oP%2FXmfePoLjqKxwxpACNtdlQ2avVSPha%2FF4PMh56cYIQQeuAwHczS96d88o7GBxaU5SnzCVNoWBQDjKoBe5Ss7LnpgS5alH5wfAe6ZK%2Bh9MjL22M2Jfwhs%2Fd0Bn9jamujXXtustsBUQecwxbIaLfmt%2B24OPH6iQbeJOPDgkLJf8gdK4J2j7dlgUNMPD66cbOyxpdaifNQaICqy5JLpcV%2FEgQlvamL8o%2FwySFzdDbuW%2Fwq3C%2B5BaAN4Ju1Vc3m7fxrioiQUgeZAnxHYiK6WLWsg3CPpL9ymOwvWPULsPMuGguisCA2SzWkVTJ7pDKoglmR73M4CI3vjQ3Ee8mgUr4Bsv4z%2ByN%2BEdip5INFG6juFyzBhKrS7ctqrdmT1NHywB%2B9KfhtulsMBb8skmFLdLAS9Inoc0OGqS%2B%2BLTttSRMacAYY%2BZ2y4iD7gIE1epdXO4jMKmk28MGOqUB5TTa%2Bxio0ipqEdkCRuZ4Jm6ZgerR7kaLeo3%2FJBITqhfUhjAmZmrwiCoPYoYM3dgXzKUytQhbFw3lOrD%2BZPBwWRRLXD4mJSH6zmvn607d8PZ9kg%2ByurWPaxuJugnqZaaUVjQpQGP5QIP9L87ZVeClgd5xiGuOgt9qWHHsNfTy2WMFyxzzbQivBVgBCoT516xb73DKCIdpgjdAogN5Co4tgtaOlvgp&X-Amz-Signature=70c8a6bc42109b21bdbc0b30d46e35229bdfec7b8b16caf459020641112de2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNAUWYY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAiQnBZoWDmefsRzDGkAr25y5BSaRjQ6HM75Z1BtAoMlAiEA0Zu2xRS65WkDKdt7HbhHFQ3cBZz8nq1SmHWqdZhtsEsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIaPSVmnWgVlJQCsayrcAzTLWTnzXCjIaLxog%2F4uxNEKRp15EqrTmopVESmb8UcDsiFVB55dDEYpancESh%2FXlnunbNGQSWL6pCIlAvw4ky7IxE00jOwbhomYfWdqfcsho0nkcyH7YklQQ5uQbu9aZDvSXoDjaxbvjoZ6I%2B09LqGgJFVW38mvZ94Xd1YLrmBtEGnagjAfBt46mVk7oP%2FXmfePoLjqKxwxpACNtdlQ2avVSPha%2FF4PMh56cYIQQeuAwHczS96d88o7GBxaU5SnzCVNoWBQDjKoBe5Ss7LnpgS5alH5wfAe6ZK%2Bh9MjL22M2Jfwhs%2Fd0Bn9jamujXXtustsBUQecwxbIaLfmt%2B24OPH6iQbeJOPDgkLJf8gdK4J2j7dlgUNMPD66cbOyxpdaifNQaICqy5JLpcV%2FEgQlvamL8o%2FwySFzdDbuW%2Fwq3C%2B5BaAN4Ju1Vc3m7fxrioiQUgeZAnxHYiK6WLWsg3CPpL9ymOwvWPULsPMuGguisCA2SzWkVTJ7pDKoglmR73M4CI3vjQ3Ee8mgUr4Bsv4z%2ByN%2BEdip5INFG6juFyzBhKrS7ctqrdmT1NHywB%2B9KfhtulsMBb8skmFLdLAS9Inoc0OGqS%2B%2BLTttSRMacAYY%2BZ2y4iD7gIE1epdXO4jMKmk28MGOqUB5TTa%2Bxio0ipqEdkCRuZ4Jm6ZgerR7kaLeo3%2FJBITqhfUhjAmZmrwiCoPYoYM3dgXzKUytQhbFw3lOrD%2BZPBwWRRLXD4mJSH6zmvn607d8PZ9kg%2ByurWPaxuJugnqZaaUVjQpQGP5QIP9L87ZVeClgd5xiGuOgt9qWHHsNfTy2WMFyxzzbQivBVgBCoT516xb73DKCIdpgjdAogN5Co4tgtaOlvgp&X-Amz-Signature=10e3c7d710bfe795db2a350b8ffdfad2cc7ec75e72e99ab61698954433280b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
