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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQOAEOR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDIO5nnqkE1ZU1DNG1%2BQm3ZYmPMx0ny1HHLMEg56Ptj%2FwIhAO4%2BTxQ70aZSXAUzDvKDQzdQ%2B3o%2FTAGmgbVGYNMw1S9gKv8DCGgQABoMNjM3NDIzMTgzODA1Igzo0mDx%2Blngmk1YRAsq3AO5w8o0JuXIe44JtpNZLvX4VBYZC%2FH%2Fs1RuSg7EstCU0Nc%2FL3j4%2BevQ4EnOKKaFyWqoUjR8FMJJQfL%2FWDMQ3xdbVZsR%2BmFGxkvCHNK07k3uect3ugz4FIsOeaPcMlHleiOf0htxtZB4Nno20q5xFAj8vX2p%2FkBUwy15tlPo4oYxMcbqgKSrIGnppPZCQz2Pot26F973m6nchgkAnjeA8ytyrVy7%2BgZskLr%2BgvQqQE8qngrFzQI4MgsZhI8DDiPxYGLV9nSkvo7oyjoeXlvVvDTyJyS3F3zTlmStZ7Huk30NRr%2FOuTcc4CoDf8c0%2FOYQGsxRuho6QpffAGuoW5lMgsNbXkKnj%2FdJsngizlPLoaKIgcgjAGmd5tI4%2BDf3WsDbOERLz3QDgQiX%2FFy4wZliPaTBYxBbb8%2BAdJ%2BZHp9Ux5w39A%2BjJ3M6js0sL3365cQakBgxahHGpb1bHBs1i1%2Bng3uHvI2FLevvHBrZVtKNEvlKegiS3HuIZ9QrQiqu%2BTBnOJ5SaAQ2Y4E1oQzjLKh82nWut%2B1nm7BFM7HDv%2Ba2XTK9w1v2cal%2FkT2tPu3kLv8JBvbUhFbZoYGX8kG3xbjzmQK48yuR8kUgEWzmV6czerMIu0wXJ5yXtHLXFYrG2jDIwpXEBjqkAZV7yIBgHPbS2cIiMAhy9F3M19773Xfo%2BkkKNYJnaqJsymzzqiL%2B6etS1Bc%2F823yHSV%2BIiS%2FHqMkZpEbzWyfCpdXcAKSR9hcCQAf1QGdlWJSvOBy%2BXAe4jfp8MVnrGMbhsKXbsPabi8ZkZ7urjVDkeFgf2y9uMu2%2FPc8sD6nbk1IfC2k2O0QEcSviB%2FT1MiLptsswAT2dIIWjDlD40W1U3R1a1Wu&X-Amz-Signature=18505e17ad8249388a4b6c82e3a497ef248398877060e862bf124a2c3c642c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQOAEOR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDIO5nnqkE1ZU1DNG1%2BQm3ZYmPMx0ny1HHLMEg56Ptj%2FwIhAO4%2BTxQ70aZSXAUzDvKDQzdQ%2B3o%2FTAGmgbVGYNMw1S9gKv8DCGgQABoMNjM3NDIzMTgzODA1Igzo0mDx%2Blngmk1YRAsq3AO5w8o0JuXIe44JtpNZLvX4VBYZC%2FH%2Fs1RuSg7EstCU0Nc%2FL3j4%2BevQ4EnOKKaFyWqoUjR8FMJJQfL%2FWDMQ3xdbVZsR%2BmFGxkvCHNK07k3uect3ugz4FIsOeaPcMlHleiOf0htxtZB4Nno20q5xFAj8vX2p%2FkBUwy15tlPo4oYxMcbqgKSrIGnppPZCQz2Pot26F973m6nchgkAnjeA8ytyrVy7%2BgZskLr%2BgvQqQE8qngrFzQI4MgsZhI8DDiPxYGLV9nSkvo7oyjoeXlvVvDTyJyS3F3zTlmStZ7Huk30NRr%2FOuTcc4CoDf8c0%2FOYQGsxRuho6QpffAGuoW5lMgsNbXkKnj%2FdJsngizlPLoaKIgcgjAGmd5tI4%2BDf3WsDbOERLz3QDgQiX%2FFy4wZliPaTBYxBbb8%2BAdJ%2BZHp9Ux5w39A%2BjJ3M6js0sL3365cQakBgxahHGpb1bHBs1i1%2Bng3uHvI2FLevvHBrZVtKNEvlKegiS3HuIZ9QrQiqu%2BTBnOJ5SaAQ2Y4E1oQzjLKh82nWut%2B1nm7BFM7HDv%2Ba2XTK9w1v2cal%2FkT2tPu3kLv8JBvbUhFbZoYGX8kG3xbjzmQK48yuR8kUgEWzmV6czerMIu0wXJ5yXtHLXFYrG2jDIwpXEBjqkAZV7yIBgHPbS2cIiMAhy9F3M19773Xfo%2BkkKNYJnaqJsymzzqiL%2B6etS1Bc%2F823yHSV%2BIiS%2FHqMkZpEbzWyfCpdXcAKSR9hcCQAf1QGdlWJSvOBy%2BXAe4jfp8MVnrGMbhsKXbsPabi8ZkZ7urjVDkeFgf2y9uMu2%2FPc8sD6nbk1IfC2k2O0QEcSviB%2FT1MiLptsswAT2dIIWjDlD40W1U3R1a1Wu&X-Amz-Signature=3b76a067f5efeb7bdef37287ed6e66db7d5bb2e1b4e809f064a586c628e75e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQOAEOR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDIO5nnqkE1ZU1DNG1%2BQm3ZYmPMx0ny1HHLMEg56Ptj%2FwIhAO4%2BTxQ70aZSXAUzDvKDQzdQ%2B3o%2FTAGmgbVGYNMw1S9gKv8DCGgQABoMNjM3NDIzMTgzODA1Igzo0mDx%2Blngmk1YRAsq3AO5w8o0JuXIe44JtpNZLvX4VBYZC%2FH%2Fs1RuSg7EstCU0Nc%2FL3j4%2BevQ4EnOKKaFyWqoUjR8FMJJQfL%2FWDMQ3xdbVZsR%2BmFGxkvCHNK07k3uect3ugz4FIsOeaPcMlHleiOf0htxtZB4Nno20q5xFAj8vX2p%2FkBUwy15tlPo4oYxMcbqgKSrIGnppPZCQz2Pot26F973m6nchgkAnjeA8ytyrVy7%2BgZskLr%2BgvQqQE8qngrFzQI4MgsZhI8DDiPxYGLV9nSkvo7oyjoeXlvVvDTyJyS3F3zTlmStZ7Huk30NRr%2FOuTcc4CoDf8c0%2FOYQGsxRuho6QpffAGuoW5lMgsNbXkKnj%2FdJsngizlPLoaKIgcgjAGmd5tI4%2BDf3WsDbOERLz3QDgQiX%2FFy4wZliPaTBYxBbb8%2BAdJ%2BZHp9Ux5w39A%2BjJ3M6js0sL3365cQakBgxahHGpb1bHBs1i1%2Bng3uHvI2FLevvHBrZVtKNEvlKegiS3HuIZ9QrQiqu%2BTBnOJ5SaAQ2Y4E1oQzjLKh82nWut%2B1nm7BFM7HDv%2Ba2XTK9w1v2cal%2FkT2tPu3kLv8JBvbUhFbZoYGX8kG3xbjzmQK48yuR8kUgEWzmV6czerMIu0wXJ5yXtHLXFYrG2jDIwpXEBjqkAZV7yIBgHPbS2cIiMAhy9F3M19773Xfo%2BkkKNYJnaqJsymzzqiL%2B6etS1Bc%2F823yHSV%2BIiS%2FHqMkZpEbzWyfCpdXcAKSR9hcCQAf1QGdlWJSvOBy%2BXAe4jfp8MVnrGMbhsKXbsPabi8ZkZ7urjVDkeFgf2y9uMu2%2FPc8sD6nbk1IfC2k2O0QEcSviB%2FT1MiLptsswAT2dIIWjDlD40W1U3R1a1Wu&X-Amz-Signature=87091bc710d308e7d76e5104f4589cf1c2a0198cb918c843e7f5dcfe26746d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQOAEOR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDIO5nnqkE1ZU1DNG1%2BQm3ZYmPMx0ny1HHLMEg56Ptj%2FwIhAO4%2BTxQ70aZSXAUzDvKDQzdQ%2B3o%2FTAGmgbVGYNMw1S9gKv8DCGgQABoMNjM3NDIzMTgzODA1Igzo0mDx%2Blngmk1YRAsq3AO5w8o0JuXIe44JtpNZLvX4VBYZC%2FH%2Fs1RuSg7EstCU0Nc%2FL3j4%2BevQ4EnOKKaFyWqoUjR8FMJJQfL%2FWDMQ3xdbVZsR%2BmFGxkvCHNK07k3uect3ugz4FIsOeaPcMlHleiOf0htxtZB4Nno20q5xFAj8vX2p%2FkBUwy15tlPo4oYxMcbqgKSrIGnppPZCQz2Pot26F973m6nchgkAnjeA8ytyrVy7%2BgZskLr%2BgvQqQE8qngrFzQI4MgsZhI8DDiPxYGLV9nSkvo7oyjoeXlvVvDTyJyS3F3zTlmStZ7Huk30NRr%2FOuTcc4CoDf8c0%2FOYQGsxRuho6QpffAGuoW5lMgsNbXkKnj%2FdJsngizlPLoaKIgcgjAGmd5tI4%2BDf3WsDbOERLz3QDgQiX%2FFy4wZliPaTBYxBbb8%2BAdJ%2BZHp9Ux5w39A%2BjJ3M6js0sL3365cQakBgxahHGpb1bHBs1i1%2Bng3uHvI2FLevvHBrZVtKNEvlKegiS3HuIZ9QrQiqu%2BTBnOJ5SaAQ2Y4E1oQzjLKh82nWut%2B1nm7BFM7HDv%2Ba2XTK9w1v2cal%2FkT2tPu3kLv8JBvbUhFbZoYGX8kG3xbjzmQK48yuR8kUgEWzmV6czerMIu0wXJ5yXtHLXFYrG2jDIwpXEBjqkAZV7yIBgHPbS2cIiMAhy9F3M19773Xfo%2BkkKNYJnaqJsymzzqiL%2B6etS1Bc%2F823yHSV%2BIiS%2FHqMkZpEbzWyfCpdXcAKSR9hcCQAf1QGdlWJSvOBy%2BXAe4jfp8MVnrGMbhsKXbsPabi8ZkZ7urjVDkeFgf2y9uMu2%2FPc8sD6nbk1IfC2k2O0QEcSviB%2FT1MiLptsswAT2dIIWjDlD40W1U3R1a1Wu&X-Amz-Signature=e4a865d191762e70fe50ccfc085377e160a44d2c4e2c627199fdc67bcf935cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQOAEOR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDIO5nnqkE1ZU1DNG1%2BQm3ZYmPMx0ny1HHLMEg56Ptj%2FwIhAO4%2BTxQ70aZSXAUzDvKDQzdQ%2B3o%2FTAGmgbVGYNMw1S9gKv8DCGgQABoMNjM3NDIzMTgzODA1Igzo0mDx%2Blngmk1YRAsq3AO5w8o0JuXIe44JtpNZLvX4VBYZC%2FH%2Fs1RuSg7EstCU0Nc%2FL3j4%2BevQ4EnOKKaFyWqoUjR8FMJJQfL%2FWDMQ3xdbVZsR%2BmFGxkvCHNK07k3uect3ugz4FIsOeaPcMlHleiOf0htxtZB4Nno20q5xFAj8vX2p%2FkBUwy15tlPo4oYxMcbqgKSrIGnppPZCQz2Pot26F973m6nchgkAnjeA8ytyrVy7%2BgZskLr%2BgvQqQE8qngrFzQI4MgsZhI8DDiPxYGLV9nSkvo7oyjoeXlvVvDTyJyS3F3zTlmStZ7Huk30NRr%2FOuTcc4CoDf8c0%2FOYQGsxRuho6QpffAGuoW5lMgsNbXkKnj%2FdJsngizlPLoaKIgcgjAGmd5tI4%2BDf3WsDbOERLz3QDgQiX%2FFy4wZliPaTBYxBbb8%2BAdJ%2BZHp9Ux5w39A%2BjJ3M6js0sL3365cQakBgxahHGpb1bHBs1i1%2Bng3uHvI2FLevvHBrZVtKNEvlKegiS3HuIZ9QrQiqu%2BTBnOJ5SaAQ2Y4E1oQzjLKh82nWut%2B1nm7BFM7HDv%2Ba2XTK9w1v2cal%2FkT2tPu3kLv8JBvbUhFbZoYGX8kG3xbjzmQK48yuR8kUgEWzmV6czerMIu0wXJ5yXtHLXFYrG2jDIwpXEBjqkAZV7yIBgHPbS2cIiMAhy9F3M19773Xfo%2BkkKNYJnaqJsymzzqiL%2B6etS1Bc%2F823yHSV%2BIiS%2FHqMkZpEbzWyfCpdXcAKSR9hcCQAf1QGdlWJSvOBy%2BXAe4jfp8MVnrGMbhsKXbsPabi8ZkZ7urjVDkeFgf2y9uMu2%2FPc8sD6nbk1IfC2k2O0QEcSviB%2FT1MiLptsswAT2dIIWjDlD40W1U3R1a1Wu&X-Amz-Signature=31402e6e44d0ae67d5bc6de0214c547bc742b2b91068eabfaec175e2be53d081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQOAEOR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDIO5nnqkE1ZU1DNG1%2BQm3ZYmPMx0ny1HHLMEg56Ptj%2FwIhAO4%2BTxQ70aZSXAUzDvKDQzdQ%2B3o%2FTAGmgbVGYNMw1S9gKv8DCGgQABoMNjM3NDIzMTgzODA1Igzo0mDx%2Blngmk1YRAsq3AO5w8o0JuXIe44JtpNZLvX4VBYZC%2FH%2Fs1RuSg7EstCU0Nc%2FL3j4%2BevQ4EnOKKaFyWqoUjR8FMJJQfL%2FWDMQ3xdbVZsR%2BmFGxkvCHNK07k3uect3ugz4FIsOeaPcMlHleiOf0htxtZB4Nno20q5xFAj8vX2p%2FkBUwy15tlPo4oYxMcbqgKSrIGnppPZCQz2Pot26F973m6nchgkAnjeA8ytyrVy7%2BgZskLr%2BgvQqQE8qngrFzQI4MgsZhI8DDiPxYGLV9nSkvo7oyjoeXlvVvDTyJyS3F3zTlmStZ7Huk30NRr%2FOuTcc4CoDf8c0%2FOYQGsxRuho6QpffAGuoW5lMgsNbXkKnj%2FdJsngizlPLoaKIgcgjAGmd5tI4%2BDf3WsDbOERLz3QDgQiX%2FFy4wZliPaTBYxBbb8%2BAdJ%2BZHp9Ux5w39A%2BjJ3M6js0sL3365cQakBgxahHGpb1bHBs1i1%2Bng3uHvI2FLevvHBrZVtKNEvlKegiS3HuIZ9QrQiqu%2BTBnOJ5SaAQ2Y4E1oQzjLKh82nWut%2B1nm7BFM7HDv%2Ba2XTK9w1v2cal%2FkT2tPu3kLv8JBvbUhFbZoYGX8kG3xbjzmQK48yuR8kUgEWzmV6czerMIu0wXJ5yXtHLXFYrG2jDIwpXEBjqkAZV7yIBgHPbS2cIiMAhy9F3M19773Xfo%2BkkKNYJnaqJsymzzqiL%2B6etS1Bc%2F823yHSV%2BIiS%2FHqMkZpEbzWyfCpdXcAKSR9hcCQAf1QGdlWJSvOBy%2BXAe4jfp8MVnrGMbhsKXbsPabi8ZkZ7urjVDkeFgf2y9uMu2%2FPc8sD6nbk1IfC2k2O0QEcSviB%2FT1MiLptsswAT2dIIWjDlD40W1U3R1a1Wu&X-Amz-Signature=1ed85ca35d653d02655b4d6e8c5767ae06175bc1ca86e228420ffc3fbe005c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQOAEOR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDIO5nnqkE1ZU1DNG1%2BQm3ZYmPMx0ny1HHLMEg56Ptj%2FwIhAO4%2BTxQ70aZSXAUzDvKDQzdQ%2B3o%2FTAGmgbVGYNMw1S9gKv8DCGgQABoMNjM3NDIzMTgzODA1Igzo0mDx%2Blngmk1YRAsq3AO5w8o0JuXIe44JtpNZLvX4VBYZC%2FH%2Fs1RuSg7EstCU0Nc%2FL3j4%2BevQ4EnOKKaFyWqoUjR8FMJJQfL%2FWDMQ3xdbVZsR%2BmFGxkvCHNK07k3uect3ugz4FIsOeaPcMlHleiOf0htxtZB4Nno20q5xFAj8vX2p%2FkBUwy15tlPo4oYxMcbqgKSrIGnppPZCQz2Pot26F973m6nchgkAnjeA8ytyrVy7%2BgZskLr%2BgvQqQE8qngrFzQI4MgsZhI8DDiPxYGLV9nSkvo7oyjoeXlvVvDTyJyS3F3zTlmStZ7Huk30NRr%2FOuTcc4CoDf8c0%2FOYQGsxRuho6QpffAGuoW5lMgsNbXkKnj%2FdJsngizlPLoaKIgcgjAGmd5tI4%2BDf3WsDbOERLz3QDgQiX%2FFy4wZliPaTBYxBbb8%2BAdJ%2BZHp9Ux5w39A%2BjJ3M6js0sL3365cQakBgxahHGpb1bHBs1i1%2Bng3uHvI2FLevvHBrZVtKNEvlKegiS3HuIZ9QrQiqu%2BTBnOJ5SaAQ2Y4E1oQzjLKh82nWut%2B1nm7BFM7HDv%2Ba2XTK9w1v2cal%2FkT2tPu3kLv8JBvbUhFbZoYGX8kG3xbjzmQK48yuR8kUgEWzmV6czerMIu0wXJ5yXtHLXFYrG2jDIwpXEBjqkAZV7yIBgHPbS2cIiMAhy9F3M19773Xfo%2BkkKNYJnaqJsymzzqiL%2B6etS1Bc%2F823yHSV%2BIiS%2FHqMkZpEbzWyfCpdXcAKSR9hcCQAf1QGdlWJSvOBy%2BXAe4jfp8MVnrGMbhsKXbsPabi8ZkZ7urjVDkeFgf2y9uMu2%2FPc8sD6nbk1IfC2k2O0QEcSviB%2FT1MiLptsswAT2dIIWjDlD40W1U3R1a1Wu&X-Amz-Signature=ee0d5ced647803786ffba7c9023d147aa111654fe8fa173504887b76c907b69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQOAEOR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDIO5nnqkE1ZU1DNG1%2BQm3ZYmPMx0ny1HHLMEg56Ptj%2FwIhAO4%2BTxQ70aZSXAUzDvKDQzdQ%2B3o%2FTAGmgbVGYNMw1S9gKv8DCGgQABoMNjM3NDIzMTgzODA1Igzo0mDx%2Blngmk1YRAsq3AO5w8o0JuXIe44JtpNZLvX4VBYZC%2FH%2Fs1RuSg7EstCU0Nc%2FL3j4%2BevQ4EnOKKaFyWqoUjR8FMJJQfL%2FWDMQ3xdbVZsR%2BmFGxkvCHNK07k3uect3ugz4FIsOeaPcMlHleiOf0htxtZB4Nno20q5xFAj8vX2p%2FkBUwy15tlPo4oYxMcbqgKSrIGnppPZCQz2Pot26F973m6nchgkAnjeA8ytyrVy7%2BgZskLr%2BgvQqQE8qngrFzQI4MgsZhI8DDiPxYGLV9nSkvo7oyjoeXlvVvDTyJyS3F3zTlmStZ7Huk30NRr%2FOuTcc4CoDf8c0%2FOYQGsxRuho6QpffAGuoW5lMgsNbXkKnj%2FdJsngizlPLoaKIgcgjAGmd5tI4%2BDf3WsDbOERLz3QDgQiX%2FFy4wZliPaTBYxBbb8%2BAdJ%2BZHp9Ux5w39A%2BjJ3M6js0sL3365cQakBgxahHGpb1bHBs1i1%2Bng3uHvI2FLevvHBrZVtKNEvlKegiS3HuIZ9QrQiqu%2BTBnOJ5SaAQ2Y4E1oQzjLKh82nWut%2B1nm7BFM7HDv%2Ba2XTK9w1v2cal%2FkT2tPu3kLv8JBvbUhFbZoYGX8kG3xbjzmQK48yuR8kUgEWzmV6czerMIu0wXJ5yXtHLXFYrG2jDIwpXEBjqkAZV7yIBgHPbS2cIiMAhy9F3M19773Xfo%2BkkKNYJnaqJsymzzqiL%2B6etS1Bc%2F823yHSV%2BIiS%2FHqMkZpEbzWyfCpdXcAKSR9hcCQAf1QGdlWJSvOBy%2BXAe4jfp8MVnrGMbhsKXbsPabi8ZkZ7urjVDkeFgf2y9uMu2%2FPc8sD6nbk1IfC2k2O0QEcSviB%2FT1MiLptsswAT2dIIWjDlD40W1U3R1a1Wu&X-Amz-Signature=e2077f618a32d0f8e56d51a1c334bdd9d60803542fd2d82aefc05f64a555930f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
