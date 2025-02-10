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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPI6UUWO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATFwbOCF8lX6gLxDcJUBwQTMx8fz9R%2Bvj5jqsz2viq4Ah9YqLCDLgPG2S5dhpMOg7QOoZZXWYMKlBLYQBCd1CfnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmE5Hmd%2Fdk8iXTYHwq3AO01Ug9gvp6rHDpQbJn%2BE9JcvVYL1WFNw2Wo0E3Fv1f4oDYl2nSG9uDZJ9J1iq2itmBSFHcRx%2F765YzL62IVpCCVQRow8jNnY%2FbhKFzgWl21ows8z1xrbdFQ5LsV4CpczK44QTwN2%2FxoTVhIS1YYvT3YuBSntOoMxHpxIic6ozVqNTSy86E5SSdj1Q1JlC8t44Akb2pRg%2F2jBm9Jw%2BzClkCXq8H1WhWqEGluBAEjBlKzfcOQsRD6FXimylgA2iM0A6nG2p7k9S9GXQ4PmrGx8NRC5J4WZBSfid%2B15diZqHSFK9xTzbBkuXUNCJ0vICpx7mPx5Ln6HjSuV6re2Suu229KqAr881RaTb7D7rMwpKEfzpLO%2Fvw8TLXHIdcuojHdx77K%2BU7wPBWwifTbtKS33e4fmiWbsLVNAObYtYiEvbck4Rb9Sf%2F7r%2B8u%2Fm7WhsoaJXhAGIbTG536My%2BJz6NXpsy5HdAC04%2Bwx3uvPGczVozWoSkCs9JJiHt5Wusm79%2FdYOthRePOLnS6wSI0iiDtThAdI%2FS3ujcfhzmQqwNajyxaxBruz52evrVx0MswHMX%2FMG8Xfl0jiDe12zhFjezfvznK4syN6zKQ2VgmxI4eqDgQyf8vnd77KnlxMrPQTDd%2BaW9BjqnAbX7SaHolyAiFyqDRs%2FQO1QE4ZkwuKi7XglOhTV%2FXYkC7rgV21Xf7ZhXZnG5B8GCxLv22eYl0Yw8PXzshkUANJHgJemS0ySDSoMeeLECSUn1ysFd7NO0W0rAjyL4ma0nWNdAihVS7PWaHIut4ZdWVVDnoACcCdjfQ46gYjgqA72szJfiQ34avsXvvQwe1L%2BM8r3lKF7VK4BYF2JxH6pfVWhzjkqw4dp7&X-Amz-Signature=20242364570c20d2bd341b15798d8ba00a4f6b7daa2fcaba8eff28884b2f49ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPI6UUWO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATFwbOCF8lX6gLxDcJUBwQTMx8fz9R%2Bvj5jqsz2viq4Ah9YqLCDLgPG2S5dhpMOg7QOoZZXWYMKlBLYQBCd1CfnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmE5Hmd%2Fdk8iXTYHwq3AO01Ug9gvp6rHDpQbJn%2BE9JcvVYL1WFNw2Wo0E3Fv1f4oDYl2nSG9uDZJ9J1iq2itmBSFHcRx%2F765YzL62IVpCCVQRow8jNnY%2FbhKFzgWl21ows8z1xrbdFQ5LsV4CpczK44QTwN2%2FxoTVhIS1YYvT3YuBSntOoMxHpxIic6ozVqNTSy86E5SSdj1Q1JlC8t44Akb2pRg%2F2jBm9Jw%2BzClkCXq8H1WhWqEGluBAEjBlKzfcOQsRD6FXimylgA2iM0A6nG2p7k9S9GXQ4PmrGx8NRC5J4WZBSfid%2B15diZqHSFK9xTzbBkuXUNCJ0vICpx7mPx5Ln6HjSuV6re2Suu229KqAr881RaTb7D7rMwpKEfzpLO%2Fvw8TLXHIdcuojHdx77K%2BU7wPBWwifTbtKS33e4fmiWbsLVNAObYtYiEvbck4Rb9Sf%2F7r%2B8u%2Fm7WhsoaJXhAGIbTG536My%2BJz6NXpsy5HdAC04%2Bwx3uvPGczVozWoSkCs9JJiHt5Wusm79%2FdYOthRePOLnS6wSI0iiDtThAdI%2FS3ujcfhzmQqwNajyxaxBruz52evrVx0MswHMX%2FMG8Xfl0jiDe12zhFjezfvznK4syN6zKQ2VgmxI4eqDgQyf8vnd77KnlxMrPQTDd%2BaW9BjqnAbX7SaHolyAiFyqDRs%2FQO1QE4ZkwuKi7XglOhTV%2FXYkC7rgV21Xf7ZhXZnG5B8GCxLv22eYl0Yw8PXzshkUANJHgJemS0ySDSoMeeLECSUn1ysFd7NO0W0rAjyL4ma0nWNdAihVS7PWaHIut4ZdWVVDnoACcCdjfQ46gYjgqA72szJfiQ34avsXvvQwe1L%2BM8r3lKF7VK4BYF2JxH6pfVWhzjkqw4dp7&X-Amz-Signature=b260d4d3f51d08bda2dfc89628c56118e4d22f6fb710f77d954e02b739832367&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPI6UUWO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATFwbOCF8lX6gLxDcJUBwQTMx8fz9R%2Bvj5jqsz2viq4Ah9YqLCDLgPG2S5dhpMOg7QOoZZXWYMKlBLYQBCd1CfnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmE5Hmd%2Fdk8iXTYHwq3AO01Ug9gvp6rHDpQbJn%2BE9JcvVYL1WFNw2Wo0E3Fv1f4oDYl2nSG9uDZJ9J1iq2itmBSFHcRx%2F765YzL62IVpCCVQRow8jNnY%2FbhKFzgWl21ows8z1xrbdFQ5LsV4CpczK44QTwN2%2FxoTVhIS1YYvT3YuBSntOoMxHpxIic6ozVqNTSy86E5SSdj1Q1JlC8t44Akb2pRg%2F2jBm9Jw%2BzClkCXq8H1WhWqEGluBAEjBlKzfcOQsRD6FXimylgA2iM0A6nG2p7k9S9GXQ4PmrGx8NRC5J4WZBSfid%2B15diZqHSFK9xTzbBkuXUNCJ0vICpx7mPx5Ln6HjSuV6re2Suu229KqAr881RaTb7D7rMwpKEfzpLO%2Fvw8TLXHIdcuojHdx77K%2BU7wPBWwifTbtKS33e4fmiWbsLVNAObYtYiEvbck4Rb9Sf%2F7r%2B8u%2Fm7WhsoaJXhAGIbTG536My%2BJz6NXpsy5HdAC04%2Bwx3uvPGczVozWoSkCs9JJiHt5Wusm79%2FdYOthRePOLnS6wSI0iiDtThAdI%2FS3ujcfhzmQqwNajyxaxBruz52evrVx0MswHMX%2FMG8Xfl0jiDe12zhFjezfvznK4syN6zKQ2VgmxI4eqDgQyf8vnd77KnlxMrPQTDd%2BaW9BjqnAbX7SaHolyAiFyqDRs%2FQO1QE4ZkwuKi7XglOhTV%2FXYkC7rgV21Xf7ZhXZnG5B8GCxLv22eYl0Yw8PXzshkUANJHgJemS0ySDSoMeeLECSUn1ysFd7NO0W0rAjyL4ma0nWNdAihVS7PWaHIut4ZdWVVDnoACcCdjfQ46gYjgqA72szJfiQ34avsXvvQwe1L%2BM8r3lKF7VK4BYF2JxH6pfVWhzjkqw4dp7&X-Amz-Signature=6f656f1102a67bba780dc0414ea7337001fd053e307a37948c05cf1f6db584f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPI6UUWO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATFwbOCF8lX6gLxDcJUBwQTMx8fz9R%2Bvj5jqsz2viq4Ah9YqLCDLgPG2S5dhpMOg7QOoZZXWYMKlBLYQBCd1CfnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmE5Hmd%2Fdk8iXTYHwq3AO01Ug9gvp6rHDpQbJn%2BE9JcvVYL1WFNw2Wo0E3Fv1f4oDYl2nSG9uDZJ9J1iq2itmBSFHcRx%2F765YzL62IVpCCVQRow8jNnY%2FbhKFzgWl21ows8z1xrbdFQ5LsV4CpczK44QTwN2%2FxoTVhIS1YYvT3YuBSntOoMxHpxIic6ozVqNTSy86E5SSdj1Q1JlC8t44Akb2pRg%2F2jBm9Jw%2BzClkCXq8H1WhWqEGluBAEjBlKzfcOQsRD6FXimylgA2iM0A6nG2p7k9S9GXQ4PmrGx8NRC5J4WZBSfid%2B15diZqHSFK9xTzbBkuXUNCJ0vICpx7mPx5Ln6HjSuV6re2Suu229KqAr881RaTb7D7rMwpKEfzpLO%2Fvw8TLXHIdcuojHdx77K%2BU7wPBWwifTbtKS33e4fmiWbsLVNAObYtYiEvbck4Rb9Sf%2F7r%2B8u%2Fm7WhsoaJXhAGIbTG536My%2BJz6NXpsy5HdAC04%2Bwx3uvPGczVozWoSkCs9JJiHt5Wusm79%2FdYOthRePOLnS6wSI0iiDtThAdI%2FS3ujcfhzmQqwNajyxaxBruz52evrVx0MswHMX%2FMG8Xfl0jiDe12zhFjezfvznK4syN6zKQ2VgmxI4eqDgQyf8vnd77KnlxMrPQTDd%2BaW9BjqnAbX7SaHolyAiFyqDRs%2FQO1QE4ZkwuKi7XglOhTV%2FXYkC7rgV21Xf7ZhXZnG5B8GCxLv22eYl0Yw8PXzshkUANJHgJemS0ySDSoMeeLECSUn1ysFd7NO0W0rAjyL4ma0nWNdAihVS7PWaHIut4ZdWVVDnoACcCdjfQ46gYjgqA72szJfiQ34avsXvvQwe1L%2BM8r3lKF7VK4BYF2JxH6pfVWhzjkqw4dp7&X-Amz-Signature=32fd541b795ad6dd260f68816c2cf25bd2ad347d6ef5a4198c23ed6ff6599af7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPI6UUWO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATFwbOCF8lX6gLxDcJUBwQTMx8fz9R%2Bvj5jqsz2viq4Ah9YqLCDLgPG2S5dhpMOg7QOoZZXWYMKlBLYQBCd1CfnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmE5Hmd%2Fdk8iXTYHwq3AO01Ug9gvp6rHDpQbJn%2BE9JcvVYL1WFNw2Wo0E3Fv1f4oDYl2nSG9uDZJ9J1iq2itmBSFHcRx%2F765YzL62IVpCCVQRow8jNnY%2FbhKFzgWl21ows8z1xrbdFQ5LsV4CpczK44QTwN2%2FxoTVhIS1YYvT3YuBSntOoMxHpxIic6ozVqNTSy86E5SSdj1Q1JlC8t44Akb2pRg%2F2jBm9Jw%2BzClkCXq8H1WhWqEGluBAEjBlKzfcOQsRD6FXimylgA2iM0A6nG2p7k9S9GXQ4PmrGx8NRC5J4WZBSfid%2B15diZqHSFK9xTzbBkuXUNCJ0vICpx7mPx5Ln6HjSuV6re2Suu229KqAr881RaTb7D7rMwpKEfzpLO%2Fvw8TLXHIdcuojHdx77K%2BU7wPBWwifTbtKS33e4fmiWbsLVNAObYtYiEvbck4Rb9Sf%2F7r%2B8u%2Fm7WhsoaJXhAGIbTG536My%2BJz6NXpsy5HdAC04%2Bwx3uvPGczVozWoSkCs9JJiHt5Wusm79%2FdYOthRePOLnS6wSI0iiDtThAdI%2FS3ujcfhzmQqwNajyxaxBruz52evrVx0MswHMX%2FMG8Xfl0jiDe12zhFjezfvznK4syN6zKQ2VgmxI4eqDgQyf8vnd77KnlxMrPQTDd%2BaW9BjqnAbX7SaHolyAiFyqDRs%2FQO1QE4ZkwuKi7XglOhTV%2FXYkC7rgV21Xf7ZhXZnG5B8GCxLv22eYl0Yw8PXzshkUANJHgJemS0ySDSoMeeLECSUn1ysFd7NO0W0rAjyL4ma0nWNdAihVS7PWaHIut4ZdWVVDnoACcCdjfQ46gYjgqA72szJfiQ34avsXvvQwe1L%2BM8r3lKF7VK4BYF2JxH6pfVWhzjkqw4dp7&X-Amz-Signature=4b37d706d8977deb8763a982e5c852228ecb83227f045bd37c7de4caaae1f85c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPI6UUWO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATFwbOCF8lX6gLxDcJUBwQTMx8fz9R%2Bvj5jqsz2viq4Ah9YqLCDLgPG2S5dhpMOg7QOoZZXWYMKlBLYQBCd1CfnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmE5Hmd%2Fdk8iXTYHwq3AO01Ug9gvp6rHDpQbJn%2BE9JcvVYL1WFNw2Wo0E3Fv1f4oDYl2nSG9uDZJ9J1iq2itmBSFHcRx%2F765YzL62IVpCCVQRow8jNnY%2FbhKFzgWl21ows8z1xrbdFQ5LsV4CpczK44QTwN2%2FxoTVhIS1YYvT3YuBSntOoMxHpxIic6ozVqNTSy86E5SSdj1Q1JlC8t44Akb2pRg%2F2jBm9Jw%2BzClkCXq8H1WhWqEGluBAEjBlKzfcOQsRD6FXimylgA2iM0A6nG2p7k9S9GXQ4PmrGx8NRC5J4WZBSfid%2B15diZqHSFK9xTzbBkuXUNCJ0vICpx7mPx5Ln6HjSuV6re2Suu229KqAr881RaTb7D7rMwpKEfzpLO%2Fvw8TLXHIdcuojHdx77K%2BU7wPBWwifTbtKS33e4fmiWbsLVNAObYtYiEvbck4Rb9Sf%2F7r%2B8u%2Fm7WhsoaJXhAGIbTG536My%2BJz6NXpsy5HdAC04%2Bwx3uvPGczVozWoSkCs9JJiHt5Wusm79%2FdYOthRePOLnS6wSI0iiDtThAdI%2FS3ujcfhzmQqwNajyxaxBruz52evrVx0MswHMX%2FMG8Xfl0jiDe12zhFjezfvznK4syN6zKQ2VgmxI4eqDgQyf8vnd77KnlxMrPQTDd%2BaW9BjqnAbX7SaHolyAiFyqDRs%2FQO1QE4ZkwuKi7XglOhTV%2FXYkC7rgV21Xf7ZhXZnG5B8GCxLv22eYl0Yw8PXzshkUANJHgJemS0ySDSoMeeLECSUn1ysFd7NO0W0rAjyL4ma0nWNdAihVS7PWaHIut4ZdWVVDnoACcCdjfQ46gYjgqA72szJfiQ34avsXvvQwe1L%2BM8r3lKF7VK4BYF2JxH6pfVWhzjkqw4dp7&X-Amz-Signature=b9c8ac09b16ca39b75958346081ef9be08605c9ecc8118bfd6e83a1e78664361&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPI6UUWO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATFwbOCF8lX6gLxDcJUBwQTMx8fz9R%2Bvj5jqsz2viq4Ah9YqLCDLgPG2S5dhpMOg7QOoZZXWYMKlBLYQBCd1CfnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmE5Hmd%2Fdk8iXTYHwq3AO01Ug9gvp6rHDpQbJn%2BE9JcvVYL1WFNw2Wo0E3Fv1f4oDYl2nSG9uDZJ9J1iq2itmBSFHcRx%2F765YzL62IVpCCVQRow8jNnY%2FbhKFzgWl21ows8z1xrbdFQ5LsV4CpczK44QTwN2%2FxoTVhIS1YYvT3YuBSntOoMxHpxIic6ozVqNTSy86E5SSdj1Q1JlC8t44Akb2pRg%2F2jBm9Jw%2BzClkCXq8H1WhWqEGluBAEjBlKzfcOQsRD6FXimylgA2iM0A6nG2p7k9S9GXQ4PmrGx8NRC5J4WZBSfid%2B15diZqHSFK9xTzbBkuXUNCJ0vICpx7mPx5Ln6HjSuV6re2Suu229KqAr881RaTb7D7rMwpKEfzpLO%2Fvw8TLXHIdcuojHdx77K%2BU7wPBWwifTbtKS33e4fmiWbsLVNAObYtYiEvbck4Rb9Sf%2F7r%2B8u%2Fm7WhsoaJXhAGIbTG536My%2BJz6NXpsy5HdAC04%2Bwx3uvPGczVozWoSkCs9JJiHt5Wusm79%2FdYOthRePOLnS6wSI0iiDtThAdI%2FS3ujcfhzmQqwNajyxaxBruz52evrVx0MswHMX%2FMG8Xfl0jiDe12zhFjezfvznK4syN6zKQ2VgmxI4eqDgQyf8vnd77KnlxMrPQTDd%2BaW9BjqnAbX7SaHolyAiFyqDRs%2FQO1QE4ZkwuKi7XglOhTV%2FXYkC7rgV21Xf7ZhXZnG5B8GCxLv22eYl0Yw8PXzshkUANJHgJemS0ySDSoMeeLECSUn1ysFd7NO0W0rAjyL4ma0nWNdAihVS7PWaHIut4ZdWVVDnoACcCdjfQ46gYjgqA72szJfiQ34avsXvvQwe1L%2BM8r3lKF7VK4BYF2JxH6pfVWhzjkqw4dp7&X-Amz-Signature=fcf27b13aac3b31e8b42199764b77fb4e4093f04af8534a75542c64fc211b089&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPI6UUWO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATFwbOCF8lX6gLxDcJUBwQTMx8fz9R%2Bvj5jqsz2viq4Ah9YqLCDLgPG2S5dhpMOg7QOoZZXWYMKlBLYQBCd1CfnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmE5Hmd%2Fdk8iXTYHwq3AO01Ug9gvp6rHDpQbJn%2BE9JcvVYL1WFNw2Wo0E3Fv1f4oDYl2nSG9uDZJ9J1iq2itmBSFHcRx%2F765YzL62IVpCCVQRow8jNnY%2FbhKFzgWl21ows8z1xrbdFQ5LsV4CpczK44QTwN2%2FxoTVhIS1YYvT3YuBSntOoMxHpxIic6ozVqNTSy86E5SSdj1Q1JlC8t44Akb2pRg%2F2jBm9Jw%2BzClkCXq8H1WhWqEGluBAEjBlKzfcOQsRD6FXimylgA2iM0A6nG2p7k9S9GXQ4PmrGx8NRC5J4WZBSfid%2B15diZqHSFK9xTzbBkuXUNCJ0vICpx7mPx5Ln6HjSuV6re2Suu229KqAr881RaTb7D7rMwpKEfzpLO%2Fvw8TLXHIdcuojHdx77K%2BU7wPBWwifTbtKS33e4fmiWbsLVNAObYtYiEvbck4Rb9Sf%2F7r%2B8u%2Fm7WhsoaJXhAGIbTG536My%2BJz6NXpsy5HdAC04%2Bwx3uvPGczVozWoSkCs9JJiHt5Wusm79%2FdYOthRePOLnS6wSI0iiDtThAdI%2FS3ujcfhzmQqwNajyxaxBruz52evrVx0MswHMX%2FMG8Xfl0jiDe12zhFjezfvznK4syN6zKQ2VgmxI4eqDgQyf8vnd77KnlxMrPQTDd%2BaW9BjqnAbX7SaHolyAiFyqDRs%2FQO1QE4ZkwuKi7XglOhTV%2FXYkC7rgV21Xf7ZhXZnG5B8GCxLv22eYl0Yw8PXzshkUANJHgJemS0ySDSoMeeLECSUn1ysFd7NO0W0rAjyL4ma0nWNdAihVS7PWaHIut4ZdWVVDnoACcCdjfQ46gYjgqA72szJfiQ34avsXvvQwe1L%2BM8r3lKF7VK4BYF2JxH6pfVWhzjkqw4dp7&X-Amz-Signature=554613f4ef0ca3378d3d71e5848b00daf592855fa83533f89a0ae0ea6e6acb33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
