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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKO7NLDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9BqjoqCwgoO40l0REEWJARkL9Bntrswi8AYpBj%2BWNyQIhAKQGyyyBWiPXCbm39gg8NIZMrJfcCF5TyhJoFWMPvYrGKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sy8X%2BFhg9YZxS7Mq3ANQJrLdXEXKcx6K50ixD0O8VWx7nZHNjeu0pbYefcaDiXfE3CdiIszmaAYhH%2BS5Ztlal4aiJvuv%2BSFvByzTbVvjcvFPma9E16ZIkgSgtOhzPCfS8IPNzGlXirt1Y29q4g6rMSiLoycWExHtAzGsTnEsA9ZJEvj%2BfjpH3Dtfbtb%2BNRO7bUhNN7QpvBbCtxQ3RtMn3pxhKi3NCwXDUJdtJZMOhjJh%2FvObzItVTEGQdDknqpSmXxDD%2BLcQTBPCnpRFT%2FZNteVmxHdtNR1oYdbBOw6xOmoV8eQIz%2FscZUYHVLxw6Hq%2F1EXJzJqdqTXwQCnhcSa%2F3uFPb%2FaZhTwFOVNcmgZXRf2hE7mlPiR4Ju7St1UREv5NlWbsAwhh%2FPqnGhAQg%2BOH3n0VMSgc2oIg0Wcs4Znx1B6VLimzXJjsgqnYCFrxal4YVbgoXarDQlBbMnoiH35r%2BoPs23nhwg0lofTxvkbGU2947HxY3rNWJnc5AvcvQjv81wVHL1TuQXcWFaAwhfNg5523CxnlciXxPrBzBYmvf81Qr0x01I0e6wygYuQdQI2rnaa%2B2eQ9Cz6WaPMgjmNnrfsOFFWgs0lrfmtaEKKjOMqH%2BVtOhcQNtVebOQfcH7RUhyE7Cw98VHCw8TCd0ru%2FBjqkARNrqjpPbfAvoADBG0tPx72Kw%2FfmRojXAcPurTt0gyXw0PbHz%2Bc6FbaOIMrzZzjjAMu0tFPMebOoYTRyBmEzDaOsxo23IOrzoUwo%2B4mPXKITe%2BQ7c%2BotPz7%2FFIoJN9bxVUgs8IH9w6XxvWxuqJiFreB%2FJeUSBG56VIUHq%2FxvFFRdU9vuVqGIG%2FlnVpgFxjd4hPy3Kp7bX62e1F%2FrypuFRdtlVnAX&X-Amz-Signature=757008a5f42cdcfa23c2a9d06f3a7d32f335100364207109e67e884686690ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKO7NLDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9BqjoqCwgoO40l0REEWJARkL9Bntrswi8AYpBj%2BWNyQIhAKQGyyyBWiPXCbm39gg8NIZMrJfcCF5TyhJoFWMPvYrGKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sy8X%2BFhg9YZxS7Mq3ANQJrLdXEXKcx6K50ixD0O8VWx7nZHNjeu0pbYefcaDiXfE3CdiIszmaAYhH%2BS5Ztlal4aiJvuv%2BSFvByzTbVvjcvFPma9E16ZIkgSgtOhzPCfS8IPNzGlXirt1Y29q4g6rMSiLoycWExHtAzGsTnEsA9ZJEvj%2BfjpH3Dtfbtb%2BNRO7bUhNN7QpvBbCtxQ3RtMn3pxhKi3NCwXDUJdtJZMOhjJh%2FvObzItVTEGQdDknqpSmXxDD%2BLcQTBPCnpRFT%2FZNteVmxHdtNR1oYdbBOw6xOmoV8eQIz%2FscZUYHVLxw6Hq%2F1EXJzJqdqTXwQCnhcSa%2F3uFPb%2FaZhTwFOVNcmgZXRf2hE7mlPiR4Ju7St1UREv5NlWbsAwhh%2FPqnGhAQg%2BOH3n0VMSgc2oIg0Wcs4Znx1B6VLimzXJjsgqnYCFrxal4YVbgoXarDQlBbMnoiH35r%2BoPs23nhwg0lofTxvkbGU2947HxY3rNWJnc5AvcvQjv81wVHL1TuQXcWFaAwhfNg5523CxnlciXxPrBzBYmvf81Qr0x01I0e6wygYuQdQI2rnaa%2B2eQ9Cz6WaPMgjmNnrfsOFFWgs0lrfmtaEKKjOMqH%2BVtOhcQNtVebOQfcH7RUhyE7Cw98VHCw8TCd0ru%2FBjqkARNrqjpPbfAvoADBG0tPx72Kw%2FfmRojXAcPurTt0gyXw0PbHz%2Bc6FbaOIMrzZzjjAMu0tFPMebOoYTRyBmEzDaOsxo23IOrzoUwo%2B4mPXKITe%2BQ7c%2BotPz7%2FFIoJN9bxVUgs8IH9w6XxvWxuqJiFreB%2FJeUSBG56VIUHq%2FxvFFRdU9vuVqGIG%2FlnVpgFxjd4hPy3Kp7bX62e1F%2FrypuFRdtlVnAX&X-Amz-Signature=b01b63354e70e2ffeea9730d04f989880b1d7a629b4128dccbe02e603cb60932&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKO7NLDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9BqjoqCwgoO40l0REEWJARkL9Bntrswi8AYpBj%2BWNyQIhAKQGyyyBWiPXCbm39gg8NIZMrJfcCF5TyhJoFWMPvYrGKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sy8X%2BFhg9YZxS7Mq3ANQJrLdXEXKcx6K50ixD0O8VWx7nZHNjeu0pbYefcaDiXfE3CdiIszmaAYhH%2BS5Ztlal4aiJvuv%2BSFvByzTbVvjcvFPma9E16ZIkgSgtOhzPCfS8IPNzGlXirt1Y29q4g6rMSiLoycWExHtAzGsTnEsA9ZJEvj%2BfjpH3Dtfbtb%2BNRO7bUhNN7QpvBbCtxQ3RtMn3pxhKi3NCwXDUJdtJZMOhjJh%2FvObzItVTEGQdDknqpSmXxDD%2BLcQTBPCnpRFT%2FZNteVmxHdtNR1oYdbBOw6xOmoV8eQIz%2FscZUYHVLxw6Hq%2F1EXJzJqdqTXwQCnhcSa%2F3uFPb%2FaZhTwFOVNcmgZXRf2hE7mlPiR4Ju7St1UREv5NlWbsAwhh%2FPqnGhAQg%2BOH3n0VMSgc2oIg0Wcs4Znx1B6VLimzXJjsgqnYCFrxal4YVbgoXarDQlBbMnoiH35r%2BoPs23nhwg0lofTxvkbGU2947HxY3rNWJnc5AvcvQjv81wVHL1TuQXcWFaAwhfNg5523CxnlciXxPrBzBYmvf81Qr0x01I0e6wygYuQdQI2rnaa%2B2eQ9Cz6WaPMgjmNnrfsOFFWgs0lrfmtaEKKjOMqH%2BVtOhcQNtVebOQfcH7RUhyE7Cw98VHCw8TCd0ru%2FBjqkARNrqjpPbfAvoADBG0tPx72Kw%2FfmRojXAcPurTt0gyXw0PbHz%2Bc6FbaOIMrzZzjjAMu0tFPMebOoYTRyBmEzDaOsxo23IOrzoUwo%2B4mPXKITe%2BQ7c%2BotPz7%2FFIoJN9bxVUgs8IH9w6XxvWxuqJiFreB%2FJeUSBG56VIUHq%2FxvFFRdU9vuVqGIG%2FlnVpgFxjd4hPy3Kp7bX62e1F%2FrypuFRdtlVnAX&X-Amz-Signature=a231e559a28d058befdeb134787c5af212241830978653c30ffd23343b54ec27&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKO7NLDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9BqjoqCwgoO40l0REEWJARkL9Bntrswi8AYpBj%2BWNyQIhAKQGyyyBWiPXCbm39gg8NIZMrJfcCF5TyhJoFWMPvYrGKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sy8X%2BFhg9YZxS7Mq3ANQJrLdXEXKcx6K50ixD0O8VWx7nZHNjeu0pbYefcaDiXfE3CdiIszmaAYhH%2BS5Ztlal4aiJvuv%2BSFvByzTbVvjcvFPma9E16ZIkgSgtOhzPCfS8IPNzGlXirt1Y29q4g6rMSiLoycWExHtAzGsTnEsA9ZJEvj%2BfjpH3Dtfbtb%2BNRO7bUhNN7QpvBbCtxQ3RtMn3pxhKi3NCwXDUJdtJZMOhjJh%2FvObzItVTEGQdDknqpSmXxDD%2BLcQTBPCnpRFT%2FZNteVmxHdtNR1oYdbBOw6xOmoV8eQIz%2FscZUYHVLxw6Hq%2F1EXJzJqdqTXwQCnhcSa%2F3uFPb%2FaZhTwFOVNcmgZXRf2hE7mlPiR4Ju7St1UREv5NlWbsAwhh%2FPqnGhAQg%2BOH3n0VMSgc2oIg0Wcs4Znx1B6VLimzXJjsgqnYCFrxal4YVbgoXarDQlBbMnoiH35r%2BoPs23nhwg0lofTxvkbGU2947HxY3rNWJnc5AvcvQjv81wVHL1TuQXcWFaAwhfNg5523CxnlciXxPrBzBYmvf81Qr0x01I0e6wygYuQdQI2rnaa%2B2eQ9Cz6WaPMgjmNnrfsOFFWgs0lrfmtaEKKjOMqH%2BVtOhcQNtVebOQfcH7RUhyE7Cw98VHCw8TCd0ru%2FBjqkARNrqjpPbfAvoADBG0tPx72Kw%2FfmRojXAcPurTt0gyXw0PbHz%2Bc6FbaOIMrzZzjjAMu0tFPMebOoYTRyBmEzDaOsxo23IOrzoUwo%2B4mPXKITe%2BQ7c%2BotPz7%2FFIoJN9bxVUgs8IH9w6XxvWxuqJiFreB%2FJeUSBG56VIUHq%2FxvFFRdU9vuVqGIG%2FlnVpgFxjd4hPy3Kp7bX62e1F%2FrypuFRdtlVnAX&X-Amz-Signature=d0b7feb5071c07383150116b45834b006a94013e9dee0584d4370df1d4f3eb14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKO7NLDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9BqjoqCwgoO40l0REEWJARkL9Bntrswi8AYpBj%2BWNyQIhAKQGyyyBWiPXCbm39gg8NIZMrJfcCF5TyhJoFWMPvYrGKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sy8X%2BFhg9YZxS7Mq3ANQJrLdXEXKcx6K50ixD0O8VWx7nZHNjeu0pbYefcaDiXfE3CdiIszmaAYhH%2BS5Ztlal4aiJvuv%2BSFvByzTbVvjcvFPma9E16ZIkgSgtOhzPCfS8IPNzGlXirt1Y29q4g6rMSiLoycWExHtAzGsTnEsA9ZJEvj%2BfjpH3Dtfbtb%2BNRO7bUhNN7QpvBbCtxQ3RtMn3pxhKi3NCwXDUJdtJZMOhjJh%2FvObzItVTEGQdDknqpSmXxDD%2BLcQTBPCnpRFT%2FZNteVmxHdtNR1oYdbBOw6xOmoV8eQIz%2FscZUYHVLxw6Hq%2F1EXJzJqdqTXwQCnhcSa%2F3uFPb%2FaZhTwFOVNcmgZXRf2hE7mlPiR4Ju7St1UREv5NlWbsAwhh%2FPqnGhAQg%2BOH3n0VMSgc2oIg0Wcs4Znx1B6VLimzXJjsgqnYCFrxal4YVbgoXarDQlBbMnoiH35r%2BoPs23nhwg0lofTxvkbGU2947HxY3rNWJnc5AvcvQjv81wVHL1TuQXcWFaAwhfNg5523CxnlciXxPrBzBYmvf81Qr0x01I0e6wygYuQdQI2rnaa%2B2eQ9Cz6WaPMgjmNnrfsOFFWgs0lrfmtaEKKjOMqH%2BVtOhcQNtVebOQfcH7RUhyE7Cw98VHCw8TCd0ru%2FBjqkARNrqjpPbfAvoADBG0tPx72Kw%2FfmRojXAcPurTt0gyXw0PbHz%2Bc6FbaOIMrzZzjjAMu0tFPMebOoYTRyBmEzDaOsxo23IOrzoUwo%2B4mPXKITe%2BQ7c%2BotPz7%2FFIoJN9bxVUgs8IH9w6XxvWxuqJiFreB%2FJeUSBG56VIUHq%2FxvFFRdU9vuVqGIG%2FlnVpgFxjd4hPy3Kp7bX62e1F%2FrypuFRdtlVnAX&X-Amz-Signature=d9d4c43cbb838832d4916580794067694f22b987162dcaa8bddc28365049dd85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKO7NLDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9BqjoqCwgoO40l0REEWJARkL9Bntrswi8AYpBj%2BWNyQIhAKQGyyyBWiPXCbm39gg8NIZMrJfcCF5TyhJoFWMPvYrGKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sy8X%2BFhg9YZxS7Mq3ANQJrLdXEXKcx6K50ixD0O8VWx7nZHNjeu0pbYefcaDiXfE3CdiIszmaAYhH%2BS5Ztlal4aiJvuv%2BSFvByzTbVvjcvFPma9E16ZIkgSgtOhzPCfS8IPNzGlXirt1Y29q4g6rMSiLoycWExHtAzGsTnEsA9ZJEvj%2BfjpH3Dtfbtb%2BNRO7bUhNN7QpvBbCtxQ3RtMn3pxhKi3NCwXDUJdtJZMOhjJh%2FvObzItVTEGQdDknqpSmXxDD%2BLcQTBPCnpRFT%2FZNteVmxHdtNR1oYdbBOw6xOmoV8eQIz%2FscZUYHVLxw6Hq%2F1EXJzJqdqTXwQCnhcSa%2F3uFPb%2FaZhTwFOVNcmgZXRf2hE7mlPiR4Ju7St1UREv5NlWbsAwhh%2FPqnGhAQg%2BOH3n0VMSgc2oIg0Wcs4Znx1B6VLimzXJjsgqnYCFrxal4YVbgoXarDQlBbMnoiH35r%2BoPs23nhwg0lofTxvkbGU2947HxY3rNWJnc5AvcvQjv81wVHL1TuQXcWFaAwhfNg5523CxnlciXxPrBzBYmvf81Qr0x01I0e6wygYuQdQI2rnaa%2B2eQ9Cz6WaPMgjmNnrfsOFFWgs0lrfmtaEKKjOMqH%2BVtOhcQNtVebOQfcH7RUhyE7Cw98VHCw8TCd0ru%2FBjqkARNrqjpPbfAvoADBG0tPx72Kw%2FfmRojXAcPurTt0gyXw0PbHz%2Bc6FbaOIMrzZzjjAMu0tFPMebOoYTRyBmEzDaOsxo23IOrzoUwo%2B4mPXKITe%2BQ7c%2BotPz7%2FFIoJN9bxVUgs8IH9w6XxvWxuqJiFreB%2FJeUSBG56VIUHq%2FxvFFRdU9vuVqGIG%2FlnVpgFxjd4hPy3Kp7bX62e1F%2FrypuFRdtlVnAX&X-Amz-Signature=df720f33ac00017033b9c6f62279424d964130c9326ea7d788498cd33f281549&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKO7NLDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9BqjoqCwgoO40l0REEWJARkL9Bntrswi8AYpBj%2BWNyQIhAKQGyyyBWiPXCbm39gg8NIZMrJfcCF5TyhJoFWMPvYrGKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sy8X%2BFhg9YZxS7Mq3ANQJrLdXEXKcx6K50ixD0O8VWx7nZHNjeu0pbYefcaDiXfE3CdiIszmaAYhH%2BS5Ztlal4aiJvuv%2BSFvByzTbVvjcvFPma9E16ZIkgSgtOhzPCfS8IPNzGlXirt1Y29q4g6rMSiLoycWExHtAzGsTnEsA9ZJEvj%2BfjpH3Dtfbtb%2BNRO7bUhNN7QpvBbCtxQ3RtMn3pxhKi3NCwXDUJdtJZMOhjJh%2FvObzItVTEGQdDknqpSmXxDD%2BLcQTBPCnpRFT%2FZNteVmxHdtNR1oYdbBOw6xOmoV8eQIz%2FscZUYHVLxw6Hq%2F1EXJzJqdqTXwQCnhcSa%2F3uFPb%2FaZhTwFOVNcmgZXRf2hE7mlPiR4Ju7St1UREv5NlWbsAwhh%2FPqnGhAQg%2BOH3n0VMSgc2oIg0Wcs4Znx1B6VLimzXJjsgqnYCFrxal4YVbgoXarDQlBbMnoiH35r%2BoPs23nhwg0lofTxvkbGU2947HxY3rNWJnc5AvcvQjv81wVHL1TuQXcWFaAwhfNg5523CxnlciXxPrBzBYmvf81Qr0x01I0e6wygYuQdQI2rnaa%2B2eQ9Cz6WaPMgjmNnrfsOFFWgs0lrfmtaEKKjOMqH%2BVtOhcQNtVebOQfcH7RUhyE7Cw98VHCw8TCd0ru%2FBjqkARNrqjpPbfAvoADBG0tPx72Kw%2FfmRojXAcPurTt0gyXw0PbHz%2Bc6FbaOIMrzZzjjAMu0tFPMebOoYTRyBmEzDaOsxo23IOrzoUwo%2B4mPXKITe%2BQ7c%2BotPz7%2FFIoJN9bxVUgs8IH9w6XxvWxuqJiFreB%2FJeUSBG56VIUHq%2FxvFFRdU9vuVqGIG%2FlnVpgFxjd4hPy3Kp7bX62e1F%2FrypuFRdtlVnAX&X-Amz-Signature=e43addf09677943b9ba364267e627c7afc0892459c76c02a01b1d2ef1cea967a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKO7NLDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9BqjoqCwgoO40l0REEWJARkL9Bntrswi8AYpBj%2BWNyQIhAKQGyyyBWiPXCbm39gg8NIZMrJfcCF5TyhJoFWMPvYrGKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sy8X%2BFhg9YZxS7Mq3ANQJrLdXEXKcx6K50ixD0O8VWx7nZHNjeu0pbYefcaDiXfE3CdiIszmaAYhH%2BS5Ztlal4aiJvuv%2BSFvByzTbVvjcvFPma9E16ZIkgSgtOhzPCfS8IPNzGlXirt1Y29q4g6rMSiLoycWExHtAzGsTnEsA9ZJEvj%2BfjpH3Dtfbtb%2BNRO7bUhNN7QpvBbCtxQ3RtMn3pxhKi3NCwXDUJdtJZMOhjJh%2FvObzItVTEGQdDknqpSmXxDD%2BLcQTBPCnpRFT%2FZNteVmxHdtNR1oYdbBOw6xOmoV8eQIz%2FscZUYHVLxw6Hq%2F1EXJzJqdqTXwQCnhcSa%2F3uFPb%2FaZhTwFOVNcmgZXRf2hE7mlPiR4Ju7St1UREv5NlWbsAwhh%2FPqnGhAQg%2BOH3n0VMSgc2oIg0Wcs4Znx1B6VLimzXJjsgqnYCFrxal4YVbgoXarDQlBbMnoiH35r%2BoPs23nhwg0lofTxvkbGU2947HxY3rNWJnc5AvcvQjv81wVHL1TuQXcWFaAwhfNg5523CxnlciXxPrBzBYmvf81Qr0x01I0e6wygYuQdQI2rnaa%2B2eQ9Cz6WaPMgjmNnrfsOFFWgs0lrfmtaEKKjOMqH%2BVtOhcQNtVebOQfcH7RUhyE7Cw98VHCw8TCd0ru%2FBjqkARNrqjpPbfAvoADBG0tPx72Kw%2FfmRojXAcPurTt0gyXw0PbHz%2Bc6FbaOIMrzZzjjAMu0tFPMebOoYTRyBmEzDaOsxo23IOrzoUwo%2B4mPXKITe%2BQ7c%2BotPz7%2FFIoJN9bxVUgs8IH9w6XxvWxuqJiFreB%2FJeUSBG56VIUHq%2FxvFFRdU9vuVqGIG%2FlnVpgFxjd4hPy3Kp7bX62e1F%2FrypuFRdtlVnAX&X-Amz-Signature=b9a71f7b4bc3d14a91dd2a8a01dceb06ea81d1c7207f77b5d0d39709fcf3091b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
