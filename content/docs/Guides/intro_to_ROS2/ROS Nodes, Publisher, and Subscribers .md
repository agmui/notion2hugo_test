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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNIWKC3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu3wuVy7iKpv0x62ss4NtJW0Qs4%2F9x8gFx2HV484cHIAiEAyapFyr5ItFeCi5Yne1OVJ47pqbrP9blNUseXSkEDBgUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDFk3tBRb7tEgYIuYSrcAxfDJ1M3UyPqbAVA4cgapDnntOEYZm%2FD%2B5fHcy1QXxAX7H4JtaEoDfIAWEuju7iVBCHo0PGa9oCok2cOjZdeP6X%2F4NYi9D%2FaO10n3PRGpGScdO%2BWsmYO0WTbBtAVP%2Fs1U2AcbTEgvl65SteGjDlQ%2FmRIi0ZkZmaNTPMTbI4nbBZuHqJsdu88uG%2B9WABXEQ42Nv%2B%2F3w9%2BjDoTxXPQSj%2BOlaayriSiYCMzNQZlTi4ay7NzGpXFbA4ZuqOYzVE7w4Nn50bfGwMwNMpzprrJFfScJ9LMmvKiyM%2BPm%2F1wWhVWl5O412TCwxQR01vin8eyO9pbk2pD5LBeg%2FWOg1ha%2BG8aBsuEQF0X1etHHmJ%2B%2FEpkUTDuz4TTssWtzF%2BMpDSDH6%2FRqT2%2FXwJWJlKekjg0acbfOzCFY4en0M%2FUth0LNjaGVHl150qH%2FNFB6TBYaV0bpcN7z7jir%2FVho6UW5Q0V%2FTsbMivPnF%2F0UbqhV581TtZ3xiEe0L19Dp8d5YRTUVqduQqzkH5IfdrEMfr6q9jBlLeWdDPON8oGMSQJZ21gAPv6jhGxxQVtVrDqYb9IVNKRfdCNig3%2FhYmQyZZQSRrW4zc8bck57W2Hc1l55d6H7VWaEnNB6%2BpazGV3ulSYP9gLMIzj%2Br0GOqUBnCTkPQAzhBsccDS%2F%2BEtyU3KK11o7%2FDQ2Vylk2WApu%2Fb7%2B6CMD3bt4shQWb9cDd5Qv1G47oxzad9IYYxDMUiyPEncFFZgR2uzSdEudkknPWI46Zy1wiZUfOfzYV8Io%2F8BMB4b89cAD0icA1NiiP5gi57F4OYfG42g6rqFlCUsBbxyPdls73UfDIPG5HAx0ZzhGZUkiFxgVu2F9%2B3YGJXiSGjocmus&X-Amz-Signature=ea555db1578058376c1e3dbea96ab55b22c1c3541b5e4f7242a92e63d0159bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNIWKC3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu3wuVy7iKpv0x62ss4NtJW0Qs4%2F9x8gFx2HV484cHIAiEAyapFyr5ItFeCi5Yne1OVJ47pqbrP9blNUseXSkEDBgUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDFk3tBRb7tEgYIuYSrcAxfDJ1M3UyPqbAVA4cgapDnntOEYZm%2FD%2B5fHcy1QXxAX7H4JtaEoDfIAWEuju7iVBCHo0PGa9oCok2cOjZdeP6X%2F4NYi9D%2FaO10n3PRGpGScdO%2BWsmYO0WTbBtAVP%2Fs1U2AcbTEgvl65SteGjDlQ%2FmRIi0ZkZmaNTPMTbI4nbBZuHqJsdu88uG%2B9WABXEQ42Nv%2B%2F3w9%2BjDoTxXPQSj%2BOlaayriSiYCMzNQZlTi4ay7NzGpXFbA4ZuqOYzVE7w4Nn50bfGwMwNMpzprrJFfScJ9LMmvKiyM%2BPm%2F1wWhVWl5O412TCwxQR01vin8eyO9pbk2pD5LBeg%2FWOg1ha%2BG8aBsuEQF0X1etHHmJ%2B%2FEpkUTDuz4TTssWtzF%2BMpDSDH6%2FRqT2%2FXwJWJlKekjg0acbfOzCFY4en0M%2FUth0LNjaGVHl150qH%2FNFB6TBYaV0bpcN7z7jir%2FVho6UW5Q0V%2FTsbMivPnF%2F0UbqhV581TtZ3xiEe0L19Dp8d5YRTUVqduQqzkH5IfdrEMfr6q9jBlLeWdDPON8oGMSQJZ21gAPv6jhGxxQVtVrDqYb9IVNKRfdCNig3%2FhYmQyZZQSRrW4zc8bck57W2Hc1l55d6H7VWaEnNB6%2BpazGV3ulSYP9gLMIzj%2Br0GOqUBnCTkPQAzhBsccDS%2F%2BEtyU3KK11o7%2FDQ2Vylk2WApu%2Fb7%2B6CMD3bt4shQWb9cDd5Qv1G47oxzad9IYYxDMUiyPEncFFZgR2uzSdEudkknPWI46Zy1wiZUfOfzYV8Io%2F8BMB4b89cAD0icA1NiiP5gi57F4OYfG42g6rqFlCUsBbxyPdls73UfDIPG5HAx0ZzhGZUkiFxgVu2F9%2B3YGJXiSGjocmus&X-Amz-Signature=87b0fb7914c0e60b784d1c034beb77eebc1f65b6c4db1a2cf50b8dab9b78ffba&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNIWKC3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu3wuVy7iKpv0x62ss4NtJW0Qs4%2F9x8gFx2HV484cHIAiEAyapFyr5ItFeCi5Yne1OVJ47pqbrP9blNUseXSkEDBgUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDFk3tBRb7tEgYIuYSrcAxfDJ1M3UyPqbAVA4cgapDnntOEYZm%2FD%2B5fHcy1QXxAX7H4JtaEoDfIAWEuju7iVBCHo0PGa9oCok2cOjZdeP6X%2F4NYi9D%2FaO10n3PRGpGScdO%2BWsmYO0WTbBtAVP%2Fs1U2AcbTEgvl65SteGjDlQ%2FmRIi0ZkZmaNTPMTbI4nbBZuHqJsdu88uG%2B9WABXEQ42Nv%2B%2F3w9%2BjDoTxXPQSj%2BOlaayriSiYCMzNQZlTi4ay7NzGpXFbA4ZuqOYzVE7w4Nn50bfGwMwNMpzprrJFfScJ9LMmvKiyM%2BPm%2F1wWhVWl5O412TCwxQR01vin8eyO9pbk2pD5LBeg%2FWOg1ha%2BG8aBsuEQF0X1etHHmJ%2B%2FEpkUTDuz4TTssWtzF%2BMpDSDH6%2FRqT2%2FXwJWJlKekjg0acbfOzCFY4en0M%2FUth0LNjaGVHl150qH%2FNFB6TBYaV0bpcN7z7jir%2FVho6UW5Q0V%2FTsbMivPnF%2F0UbqhV581TtZ3xiEe0L19Dp8d5YRTUVqduQqzkH5IfdrEMfr6q9jBlLeWdDPON8oGMSQJZ21gAPv6jhGxxQVtVrDqYb9IVNKRfdCNig3%2FhYmQyZZQSRrW4zc8bck57W2Hc1l55d6H7VWaEnNB6%2BpazGV3ulSYP9gLMIzj%2Br0GOqUBnCTkPQAzhBsccDS%2F%2BEtyU3KK11o7%2FDQ2Vylk2WApu%2Fb7%2B6CMD3bt4shQWb9cDd5Qv1G47oxzad9IYYxDMUiyPEncFFZgR2uzSdEudkknPWI46Zy1wiZUfOfzYV8Io%2F8BMB4b89cAD0icA1NiiP5gi57F4OYfG42g6rqFlCUsBbxyPdls73UfDIPG5HAx0ZzhGZUkiFxgVu2F9%2B3YGJXiSGjocmus&X-Amz-Signature=880bb03b4fc86340cacce05e12c37a571510d91c0f4e0aaa2a8560221d6301fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNIWKC3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu3wuVy7iKpv0x62ss4NtJW0Qs4%2F9x8gFx2HV484cHIAiEAyapFyr5ItFeCi5Yne1OVJ47pqbrP9blNUseXSkEDBgUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDFk3tBRb7tEgYIuYSrcAxfDJ1M3UyPqbAVA4cgapDnntOEYZm%2FD%2B5fHcy1QXxAX7H4JtaEoDfIAWEuju7iVBCHo0PGa9oCok2cOjZdeP6X%2F4NYi9D%2FaO10n3PRGpGScdO%2BWsmYO0WTbBtAVP%2Fs1U2AcbTEgvl65SteGjDlQ%2FmRIi0ZkZmaNTPMTbI4nbBZuHqJsdu88uG%2B9WABXEQ42Nv%2B%2F3w9%2BjDoTxXPQSj%2BOlaayriSiYCMzNQZlTi4ay7NzGpXFbA4ZuqOYzVE7w4Nn50bfGwMwNMpzprrJFfScJ9LMmvKiyM%2BPm%2F1wWhVWl5O412TCwxQR01vin8eyO9pbk2pD5LBeg%2FWOg1ha%2BG8aBsuEQF0X1etHHmJ%2B%2FEpkUTDuz4TTssWtzF%2BMpDSDH6%2FRqT2%2FXwJWJlKekjg0acbfOzCFY4en0M%2FUth0LNjaGVHl150qH%2FNFB6TBYaV0bpcN7z7jir%2FVho6UW5Q0V%2FTsbMivPnF%2F0UbqhV581TtZ3xiEe0L19Dp8d5YRTUVqduQqzkH5IfdrEMfr6q9jBlLeWdDPON8oGMSQJZ21gAPv6jhGxxQVtVrDqYb9IVNKRfdCNig3%2FhYmQyZZQSRrW4zc8bck57W2Hc1l55d6H7VWaEnNB6%2BpazGV3ulSYP9gLMIzj%2Br0GOqUBnCTkPQAzhBsccDS%2F%2BEtyU3KK11o7%2FDQ2Vylk2WApu%2Fb7%2B6CMD3bt4shQWb9cDd5Qv1G47oxzad9IYYxDMUiyPEncFFZgR2uzSdEudkknPWI46Zy1wiZUfOfzYV8Io%2F8BMB4b89cAD0icA1NiiP5gi57F4OYfG42g6rqFlCUsBbxyPdls73UfDIPG5HAx0ZzhGZUkiFxgVu2F9%2B3YGJXiSGjocmus&X-Amz-Signature=b71be4235a0dd8a38c5fc32d27c520ec2c7eeedf043094ed6ed80926a2008a53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNIWKC3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu3wuVy7iKpv0x62ss4NtJW0Qs4%2F9x8gFx2HV484cHIAiEAyapFyr5ItFeCi5Yne1OVJ47pqbrP9blNUseXSkEDBgUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDFk3tBRb7tEgYIuYSrcAxfDJ1M3UyPqbAVA4cgapDnntOEYZm%2FD%2B5fHcy1QXxAX7H4JtaEoDfIAWEuju7iVBCHo0PGa9oCok2cOjZdeP6X%2F4NYi9D%2FaO10n3PRGpGScdO%2BWsmYO0WTbBtAVP%2Fs1U2AcbTEgvl65SteGjDlQ%2FmRIi0ZkZmaNTPMTbI4nbBZuHqJsdu88uG%2B9WABXEQ42Nv%2B%2F3w9%2BjDoTxXPQSj%2BOlaayriSiYCMzNQZlTi4ay7NzGpXFbA4ZuqOYzVE7w4Nn50bfGwMwNMpzprrJFfScJ9LMmvKiyM%2BPm%2F1wWhVWl5O412TCwxQR01vin8eyO9pbk2pD5LBeg%2FWOg1ha%2BG8aBsuEQF0X1etHHmJ%2B%2FEpkUTDuz4TTssWtzF%2BMpDSDH6%2FRqT2%2FXwJWJlKekjg0acbfOzCFY4en0M%2FUth0LNjaGVHl150qH%2FNFB6TBYaV0bpcN7z7jir%2FVho6UW5Q0V%2FTsbMivPnF%2F0UbqhV581TtZ3xiEe0L19Dp8d5YRTUVqduQqzkH5IfdrEMfr6q9jBlLeWdDPON8oGMSQJZ21gAPv6jhGxxQVtVrDqYb9IVNKRfdCNig3%2FhYmQyZZQSRrW4zc8bck57W2Hc1l55d6H7VWaEnNB6%2BpazGV3ulSYP9gLMIzj%2Br0GOqUBnCTkPQAzhBsccDS%2F%2BEtyU3KK11o7%2FDQ2Vylk2WApu%2Fb7%2B6CMD3bt4shQWb9cDd5Qv1G47oxzad9IYYxDMUiyPEncFFZgR2uzSdEudkknPWI46Zy1wiZUfOfzYV8Io%2F8BMB4b89cAD0icA1NiiP5gi57F4OYfG42g6rqFlCUsBbxyPdls73UfDIPG5HAx0ZzhGZUkiFxgVu2F9%2B3YGJXiSGjocmus&X-Amz-Signature=5225cbf3fd6cab96fa849a136cfe5350676371d52867520e0e57085dc29afbbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNIWKC3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu3wuVy7iKpv0x62ss4NtJW0Qs4%2F9x8gFx2HV484cHIAiEAyapFyr5ItFeCi5Yne1OVJ47pqbrP9blNUseXSkEDBgUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDFk3tBRb7tEgYIuYSrcAxfDJ1M3UyPqbAVA4cgapDnntOEYZm%2FD%2B5fHcy1QXxAX7H4JtaEoDfIAWEuju7iVBCHo0PGa9oCok2cOjZdeP6X%2F4NYi9D%2FaO10n3PRGpGScdO%2BWsmYO0WTbBtAVP%2Fs1U2AcbTEgvl65SteGjDlQ%2FmRIi0ZkZmaNTPMTbI4nbBZuHqJsdu88uG%2B9WABXEQ42Nv%2B%2F3w9%2BjDoTxXPQSj%2BOlaayriSiYCMzNQZlTi4ay7NzGpXFbA4ZuqOYzVE7w4Nn50bfGwMwNMpzprrJFfScJ9LMmvKiyM%2BPm%2F1wWhVWl5O412TCwxQR01vin8eyO9pbk2pD5LBeg%2FWOg1ha%2BG8aBsuEQF0X1etHHmJ%2B%2FEpkUTDuz4TTssWtzF%2BMpDSDH6%2FRqT2%2FXwJWJlKekjg0acbfOzCFY4en0M%2FUth0LNjaGVHl150qH%2FNFB6TBYaV0bpcN7z7jir%2FVho6UW5Q0V%2FTsbMivPnF%2F0UbqhV581TtZ3xiEe0L19Dp8d5YRTUVqduQqzkH5IfdrEMfr6q9jBlLeWdDPON8oGMSQJZ21gAPv6jhGxxQVtVrDqYb9IVNKRfdCNig3%2FhYmQyZZQSRrW4zc8bck57W2Hc1l55d6H7VWaEnNB6%2BpazGV3ulSYP9gLMIzj%2Br0GOqUBnCTkPQAzhBsccDS%2F%2BEtyU3KK11o7%2FDQ2Vylk2WApu%2Fb7%2B6CMD3bt4shQWb9cDd5Qv1G47oxzad9IYYxDMUiyPEncFFZgR2uzSdEudkknPWI46Zy1wiZUfOfzYV8Io%2F8BMB4b89cAD0icA1NiiP5gi57F4OYfG42g6rqFlCUsBbxyPdls73UfDIPG5HAx0ZzhGZUkiFxgVu2F9%2B3YGJXiSGjocmus&X-Amz-Signature=10fbc037adc0dd6f5feae7cc0391b6e29ce79153cb3edcf8fd88de25a61e1694&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNIWKC3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu3wuVy7iKpv0x62ss4NtJW0Qs4%2F9x8gFx2HV484cHIAiEAyapFyr5ItFeCi5Yne1OVJ47pqbrP9blNUseXSkEDBgUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDFk3tBRb7tEgYIuYSrcAxfDJ1M3UyPqbAVA4cgapDnntOEYZm%2FD%2B5fHcy1QXxAX7H4JtaEoDfIAWEuju7iVBCHo0PGa9oCok2cOjZdeP6X%2F4NYi9D%2FaO10n3PRGpGScdO%2BWsmYO0WTbBtAVP%2Fs1U2AcbTEgvl65SteGjDlQ%2FmRIi0ZkZmaNTPMTbI4nbBZuHqJsdu88uG%2B9WABXEQ42Nv%2B%2F3w9%2BjDoTxXPQSj%2BOlaayriSiYCMzNQZlTi4ay7NzGpXFbA4ZuqOYzVE7w4Nn50bfGwMwNMpzprrJFfScJ9LMmvKiyM%2BPm%2F1wWhVWl5O412TCwxQR01vin8eyO9pbk2pD5LBeg%2FWOg1ha%2BG8aBsuEQF0X1etHHmJ%2B%2FEpkUTDuz4TTssWtzF%2BMpDSDH6%2FRqT2%2FXwJWJlKekjg0acbfOzCFY4en0M%2FUth0LNjaGVHl150qH%2FNFB6TBYaV0bpcN7z7jir%2FVho6UW5Q0V%2FTsbMivPnF%2F0UbqhV581TtZ3xiEe0L19Dp8d5YRTUVqduQqzkH5IfdrEMfr6q9jBlLeWdDPON8oGMSQJZ21gAPv6jhGxxQVtVrDqYb9IVNKRfdCNig3%2FhYmQyZZQSRrW4zc8bck57W2Hc1l55d6H7VWaEnNB6%2BpazGV3ulSYP9gLMIzj%2Br0GOqUBnCTkPQAzhBsccDS%2F%2BEtyU3KK11o7%2FDQ2Vylk2WApu%2Fb7%2B6CMD3bt4shQWb9cDd5Qv1G47oxzad9IYYxDMUiyPEncFFZgR2uzSdEudkknPWI46Zy1wiZUfOfzYV8Io%2F8BMB4b89cAD0icA1NiiP5gi57F4OYfG42g6rqFlCUsBbxyPdls73UfDIPG5HAx0ZzhGZUkiFxgVu2F9%2B3YGJXiSGjocmus&X-Amz-Signature=94e355e51be25ad913598f329f514b7487c0a4e658c15ddbe4e2b614b1760f71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNIWKC3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu3wuVy7iKpv0x62ss4NtJW0Qs4%2F9x8gFx2HV484cHIAiEAyapFyr5ItFeCi5Yne1OVJ47pqbrP9blNUseXSkEDBgUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDFk3tBRb7tEgYIuYSrcAxfDJ1M3UyPqbAVA4cgapDnntOEYZm%2FD%2B5fHcy1QXxAX7H4JtaEoDfIAWEuju7iVBCHo0PGa9oCok2cOjZdeP6X%2F4NYi9D%2FaO10n3PRGpGScdO%2BWsmYO0WTbBtAVP%2Fs1U2AcbTEgvl65SteGjDlQ%2FmRIi0ZkZmaNTPMTbI4nbBZuHqJsdu88uG%2B9WABXEQ42Nv%2B%2F3w9%2BjDoTxXPQSj%2BOlaayriSiYCMzNQZlTi4ay7NzGpXFbA4ZuqOYzVE7w4Nn50bfGwMwNMpzprrJFfScJ9LMmvKiyM%2BPm%2F1wWhVWl5O412TCwxQR01vin8eyO9pbk2pD5LBeg%2FWOg1ha%2BG8aBsuEQF0X1etHHmJ%2B%2FEpkUTDuz4TTssWtzF%2BMpDSDH6%2FRqT2%2FXwJWJlKekjg0acbfOzCFY4en0M%2FUth0LNjaGVHl150qH%2FNFB6TBYaV0bpcN7z7jir%2FVho6UW5Q0V%2FTsbMivPnF%2F0UbqhV581TtZ3xiEe0L19Dp8d5YRTUVqduQqzkH5IfdrEMfr6q9jBlLeWdDPON8oGMSQJZ21gAPv6jhGxxQVtVrDqYb9IVNKRfdCNig3%2FhYmQyZZQSRrW4zc8bck57W2Hc1l55d6H7VWaEnNB6%2BpazGV3ulSYP9gLMIzj%2Br0GOqUBnCTkPQAzhBsccDS%2F%2BEtyU3KK11o7%2FDQ2Vylk2WApu%2Fb7%2B6CMD3bt4shQWb9cDd5Qv1G47oxzad9IYYxDMUiyPEncFFZgR2uzSdEudkknPWI46Zy1wiZUfOfzYV8Io%2F8BMB4b89cAD0icA1NiiP5gi57F4OYfG42g6rqFlCUsBbxyPdls73UfDIPG5HAx0ZzhGZUkiFxgVu2F9%2B3YGJXiSGjocmus&X-Amz-Signature=df48082d0999ab08937a9db94cd76a4fc89583711921f9bd26ce6aca56a7934c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
