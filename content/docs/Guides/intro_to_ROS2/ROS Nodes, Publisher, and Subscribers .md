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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLI5SOTA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhOrmCjsa0F8vxJR%2F%2BBl6F8DgWwMusJwySmUBZ0UzlwIgNuA0aww9XnOMHRJwRMTBC7bvrmwdNo3NXEZFU6l%2FYxwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDClpMt%2Bm%2BQhqDRSW7SrcA7uzq%2Faer5SagF4l%2F2H2otKgrmRF9SIzWFQc1Gm16ZbbUcsc2lSqtQU8eoGOOQKwwv4RgKuWVUDRvxCMiAzTymzngr8PTfeKMv2qo6PQm8YW%2Fs8pHqTxyPJ1DQZ5Yy4hNJ1ld9aLWCsIkiDwmG5Rpt1wLcoN1QADMFX2C9hv8TYasu1LGYDlCtM%2FZVWQbzZYlZ%2BbW687vpTbQVnHImbRt7gFzeG3e0HMKqVgnVxgYm%2BLXyNOsVxwGKsnwmMnHgZ5foKaKi7LOA64WTtjrq93bT37JRd02znVCaiBOn9uJzYU5M1o%2FiVFi80Wafkr8pG5ct1eR4jBkfSAgY3bpE%2FD%2BD2qsb0VPF%2FNg%2FeIdfTG2Ja72EiAzH1ZlbvpSjWu7bVffKGAHhBys7NpvY9a0o8I5wKHkezTo60xpwj0i1zcziHkp9bjg2%2FU1C%2Fa2k4G%2BRVPu69JcyuxJxG4LcG03BENPHHvzxpfs2%2FgJ%2FH68l98Yy3wYjeAjE6zVy1jYTPXv9pdImeZlvqoXLKga4eL1JyWmnDFYddKFclh9PUO2Vvf3jn2LIMe%2FujRRxRuolvXAPc56imHSJULkfzgxUSqLiTsdz9RVQSrxNxmxVbI6yDf8DgFvqzi9HsF6YABsHj0MNvIqL4GOqUBUzWyh1sUUP2sqNsQYMBkX4nq6ANReSfzQ8WVAQmbIVTHfQZcoLOJPwikCpjqW2DRv6NsxOuUw0OkASv6UCzMcUXg6tBR%2F4BZ6blf5ksvUCX%2FDLGHPEgrmOef8IaxOp5MyFxAeee%2F7kvI4d7qUMN809%2FM%2BmekgpztXJUHHOmA3iL60YOz%2BP%2FLzdTdrnPuOcyx1jxWE9iRhJLTCe%2BJIo80OLpbBDX8&X-Amz-Signature=cabda596ad2bac11caa2cd1c74e73c4b5dfd02ae99dcdb99dbc918c523703529&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLI5SOTA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhOrmCjsa0F8vxJR%2F%2BBl6F8DgWwMusJwySmUBZ0UzlwIgNuA0aww9XnOMHRJwRMTBC7bvrmwdNo3NXEZFU6l%2FYxwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDClpMt%2Bm%2BQhqDRSW7SrcA7uzq%2Faer5SagF4l%2F2H2otKgrmRF9SIzWFQc1Gm16ZbbUcsc2lSqtQU8eoGOOQKwwv4RgKuWVUDRvxCMiAzTymzngr8PTfeKMv2qo6PQm8YW%2Fs8pHqTxyPJ1DQZ5Yy4hNJ1ld9aLWCsIkiDwmG5Rpt1wLcoN1QADMFX2C9hv8TYasu1LGYDlCtM%2FZVWQbzZYlZ%2BbW687vpTbQVnHImbRt7gFzeG3e0HMKqVgnVxgYm%2BLXyNOsVxwGKsnwmMnHgZ5foKaKi7LOA64WTtjrq93bT37JRd02znVCaiBOn9uJzYU5M1o%2FiVFi80Wafkr8pG5ct1eR4jBkfSAgY3bpE%2FD%2BD2qsb0VPF%2FNg%2FeIdfTG2Ja72EiAzH1ZlbvpSjWu7bVffKGAHhBys7NpvY9a0o8I5wKHkezTo60xpwj0i1zcziHkp9bjg2%2FU1C%2Fa2k4G%2BRVPu69JcyuxJxG4LcG03BENPHHvzxpfs2%2FgJ%2FH68l98Yy3wYjeAjE6zVy1jYTPXv9pdImeZlvqoXLKga4eL1JyWmnDFYddKFclh9PUO2Vvf3jn2LIMe%2FujRRxRuolvXAPc56imHSJULkfzgxUSqLiTsdz9RVQSrxNxmxVbI6yDf8DgFvqzi9HsF6YABsHj0MNvIqL4GOqUBUzWyh1sUUP2sqNsQYMBkX4nq6ANReSfzQ8WVAQmbIVTHfQZcoLOJPwikCpjqW2DRv6NsxOuUw0OkASv6UCzMcUXg6tBR%2F4BZ6blf5ksvUCX%2FDLGHPEgrmOef8IaxOp5MyFxAeee%2F7kvI4d7qUMN809%2FM%2BmekgpztXJUHHOmA3iL60YOz%2BP%2FLzdTdrnPuOcyx1jxWE9iRhJLTCe%2BJIo80OLpbBDX8&X-Amz-Signature=efaa34e9b8a3a3b8dbbd25b395a254d916b2798678990b6a6ebb241d2ad429a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLI5SOTA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhOrmCjsa0F8vxJR%2F%2BBl6F8DgWwMusJwySmUBZ0UzlwIgNuA0aww9XnOMHRJwRMTBC7bvrmwdNo3NXEZFU6l%2FYxwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDClpMt%2Bm%2BQhqDRSW7SrcA7uzq%2Faer5SagF4l%2F2H2otKgrmRF9SIzWFQc1Gm16ZbbUcsc2lSqtQU8eoGOOQKwwv4RgKuWVUDRvxCMiAzTymzngr8PTfeKMv2qo6PQm8YW%2Fs8pHqTxyPJ1DQZ5Yy4hNJ1ld9aLWCsIkiDwmG5Rpt1wLcoN1QADMFX2C9hv8TYasu1LGYDlCtM%2FZVWQbzZYlZ%2BbW687vpTbQVnHImbRt7gFzeG3e0HMKqVgnVxgYm%2BLXyNOsVxwGKsnwmMnHgZ5foKaKi7LOA64WTtjrq93bT37JRd02znVCaiBOn9uJzYU5M1o%2FiVFi80Wafkr8pG5ct1eR4jBkfSAgY3bpE%2FD%2BD2qsb0VPF%2FNg%2FeIdfTG2Ja72EiAzH1ZlbvpSjWu7bVffKGAHhBys7NpvY9a0o8I5wKHkezTo60xpwj0i1zcziHkp9bjg2%2FU1C%2Fa2k4G%2BRVPu69JcyuxJxG4LcG03BENPHHvzxpfs2%2FgJ%2FH68l98Yy3wYjeAjE6zVy1jYTPXv9pdImeZlvqoXLKga4eL1JyWmnDFYddKFclh9PUO2Vvf3jn2LIMe%2FujRRxRuolvXAPc56imHSJULkfzgxUSqLiTsdz9RVQSrxNxmxVbI6yDf8DgFvqzi9HsF6YABsHj0MNvIqL4GOqUBUzWyh1sUUP2sqNsQYMBkX4nq6ANReSfzQ8WVAQmbIVTHfQZcoLOJPwikCpjqW2DRv6NsxOuUw0OkASv6UCzMcUXg6tBR%2F4BZ6blf5ksvUCX%2FDLGHPEgrmOef8IaxOp5MyFxAeee%2F7kvI4d7qUMN809%2FM%2BmekgpztXJUHHOmA3iL60YOz%2BP%2FLzdTdrnPuOcyx1jxWE9iRhJLTCe%2BJIo80OLpbBDX8&X-Amz-Signature=0f3bb22c5b97deb29518dbad5936198ab85d882289e4ebddd12afed49773eace&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLI5SOTA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhOrmCjsa0F8vxJR%2F%2BBl6F8DgWwMusJwySmUBZ0UzlwIgNuA0aww9XnOMHRJwRMTBC7bvrmwdNo3NXEZFU6l%2FYxwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDClpMt%2Bm%2BQhqDRSW7SrcA7uzq%2Faer5SagF4l%2F2H2otKgrmRF9SIzWFQc1Gm16ZbbUcsc2lSqtQU8eoGOOQKwwv4RgKuWVUDRvxCMiAzTymzngr8PTfeKMv2qo6PQm8YW%2Fs8pHqTxyPJ1DQZ5Yy4hNJ1ld9aLWCsIkiDwmG5Rpt1wLcoN1QADMFX2C9hv8TYasu1LGYDlCtM%2FZVWQbzZYlZ%2BbW687vpTbQVnHImbRt7gFzeG3e0HMKqVgnVxgYm%2BLXyNOsVxwGKsnwmMnHgZ5foKaKi7LOA64WTtjrq93bT37JRd02znVCaiBOn9uJzYU5M1o%2FiVFi80Wafkr8pG5ct1eR4jBkfSAgY3bpE%2FD%2BD2qsb0VPF%2FNg%2FeIdfTG2Ja72EiAzH1ZlbvpSjWu7bVffKGAHhBys7NpvY9a0o8I5wKHkezTo60xpwj0i1zcziHkp9bjg2%2FU1C%2Fa2k4G%2BRVPu69JcyuxJxG4LcG03BENPHHvzxpfs2%2FgJ%2FH68l98Yy3wYjeAjE6zVy1jYTPXv9pdImeZlvqoXLKga4eL1JyWmnDFYddKFclh9PUO2Vvf3jn2LIMe%2FujRRxRuolvXAPc56imHSJULkfzgxUSqLiTsdz9RVQSrxNxmxVbI6yDf8DgFvqzi9HsF6YABsHj0MNvIqL4GOqUBUzWyh1sUUP2sqNsQYMBkX4nq6ANReSfzQ8WVAQmbIVTHfQZcoLOJPwikCpjqW2DRv6NsxOuUw0OkASv6UCzMcUXg6tBR%2F4BZ6blf5ksvUCX%2FDLGHPEgrmOef8IaxOp5MyFxAeee%2F7kvI4d7qUMN809%2FM%2BmekgpztXJUHHOmA3iL60YOz%2BP%2FLzdTdrnPuOcyx1jxWE9iRhJLTCe%2BJIo80OLpbBDX8&X-Amz-Signature=10c2ea6f8f7d2bbef1ca782493f0a7cc9618a4d06bb2aa8409b16195e918f3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLI5SOTA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhOrmCjsa0F8vxJR%2F%2BBl6F8DgWwMusJwySmUBZ0UzlwIgNuA0aww9XnOMHRJwRMTBC7bvrmwdNo3NXEZFU6l%2FYxwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDClpMt%2Bm%2BQhqDRSW7SrcA7uzq%2Faer5SagF4l%2F2H2otKgrmRF9SIzWFQc1Gm16ZbbUcsc2lSqtQU8eoGOOQKwwv4RgKuWVUDRvxCMiAzTymzngr8PTfeKMv2qo6PQm8YW%2Fs8pHqTxyPJ1DQZ5Yy4hNJ1ld9aLWCsIkiDwmG5Rpt1wLcoN1QADMFX2C9hv8TYasu1LGYDlCtM%2FZVWQbzZYlZ%2BbW687vpTbQVnHImbRt7gFzeG3e0HMKqVgnVxgYm%2BLXyNOsVxwGKsnwmMnHgZ5foKaKi7LOA64WTtjrq93bT37JRd02znVCaiBOn9uJzYU5M1o%2FiVFi80Wafkr8pG5ct1eR4jBkfSAgY3bpE%2FD%2BD2qsb0VPF%2FNg%2FeIdfTG2Ja72EiAzH1ZlbvpSjWu7bVffKGAHhBys7NpvY9a0o8I5wKHkezTo60xpwj0i1zcziHkp9bjg2%2FU1C%2Fa2k4G%2BRVPu69JcyuxJxG4LcG03BENPHHvzxpfs2%2FgJ%2FH68l98Yy3wYjeAjE6zVy1jYTPXv9pdImeZlvqoXLKga4eL1JyWmnDFYddKFclh9PUO2Vvf3jn2LIMe%2FujRRxRuolvXAPc56imHSJULkfzgxUSqLiTsdz9RVQSrxNxmxVbI6yDf8DgFvqzi9HsF6YABsHj0MNvIqL4GOqUBUzWyh1sUUP2sqNsQYMBkX4nq6ANReSfzQ8WVAQmbIVTHfQZcoLOJPwikCpjqW2DRv6NsxOuUw0OkASv6UCzMcUXg6tBR%2F4BZ6blf5ksvUCX%2FDLGHPEgrmOef8IaxOp5MyFxAeee%2F7kvI4d7qUMN809%2FM%2BmekgpztXJUHHOmA3iL60YOz%2BP%2FLzdTdrnPuOcyx1jxWE9iRhJLTCe%2BJIo80OLpbBDX8&X-Amz-Signature=72abe3f503a0260cd265deaaaa5adb7df3fa830e63287563b08b40cd9d21c0be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLI5SOTA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhOrmCjsa0F8vxJR%2F%2BBl6F8DgWwMusJwySmUBZ0UzlwIgNuA0aww9XnOMHRJwRMTBC7bvrmwdNo3NXEZFU6l%2FYxwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDClpMt%2Bm%2BQhqDRSW7SrcA7uzq%2Faer5SagF4l%2F2H2otKgrmRF9SIzWFQc1Gm16ZbbUcsc2lSqtQU8eoGOOQKwwv4RgKuWVUDRvxCMiAzTymzngr8PTfeKMv2qo6PQm8YW%2Fs8pHqTxyPJ1DQZ5Yy4hNJ1ld9aLWCsIkiDwmG5Rpt1wLcoN1QADMFX2C9hv8TYasu1LGYDlCtM%2FZVWQbzZYlZ%2BbW687vpTbQVnHImbRt7gFzeG3e0HMKqVgnVxgYm%2BLXyNOsVxwGKsnwmMnHgZ5foKaKi7LOA64WTtjrq93bT37JRd02znVCaiBOn9uJzYU5M1o%2FiVFi80Wafkr8pG5ct1eR4jBkfSAgY3bpE%2FD%2BD2qsb0VPF%2FNg%2FeIdfTG2Ja72EiAzH1ZlbvpSjWu7bVffKGAHhBys7NpvY9a0o8I5wKHkezTo60xpwj0i1zcziHkp9bjg2%2FU1C%2Fa2k4G%2BRVPu69JcyuxJxG4LcG03BENPHHvzxpfs2%2FgJ%2FH68l98Yy3wYjeAjE6zVy1jYTPXv9pdImeZlvqoXLKga4eL1JyWmnDFYddKFclh9PUO2Vvf3jn2LIMe%2FujRRxRuolvXAPc56imHSJULkfzgxUSqLiTsdz9RVQSrxNxmxVbI6yDf8DgFvqzi9HsF6YABsHj0MNvIqL4GOqUBUzWyh1sUUP2sqNsQYMBkX4nq6ANReSfzQ8WVAQmbIVTHfQZcoLOJPwikCpjqW2DRv6NsxOuUw0OkASv6UCzMcUXg6tBR%2F4BZ6blf5ksvUCX%2FDLGHPEgrmOef8IaxOp5MyFxAeee%2F7kvI4d7qUMN809%2FM%2BmekgpztXJUHHOmA3iL60YOz%2BP%2FLzdTdrnPuOcyx1jxWE9iRhJLTCe%2BJIo80OLpbBDX8&X-Amz-Signature=3939a26dfb1542496cdd43fab0dd8e0df13ba5e661b80f125fe63a861c95aa9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLI5SOTA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhOrmCjsa0F8vxJR%2F%2BBl6F8DgWwMusJwySmUBZ0UzlwIgNuA0aww9XnOMHRJwRMTBC7bvrmwdNo3NXEZFU6l%2FYxwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDClpMt%2Bm%2BQhqDRSW7SrcA7uzq%2Faer5SagF4l%2F2H2otKgrmRF9SIzWFQc1Gm16ZbbUcsc2lSqtQU8eoGOOQKwwv4RgKuWVUDRvxCMiAzTymzngr8PTfeKMv2qo6PQm8YW%2Fs8pHqTxyPJ1DQZ5Yy4hNJ1ld9aLWCsIkiDwmG5Rpt1wLcoN1QADMFX2C9hv8TYasu1LGYDlCtM%2FZVWQbzZYlZ%2BbW687vpTbQVnHImbRt7gFzeG3e0HMKqVgnVxgYm%2BLXyNOsVxwGKsnwmMnHgZ5foKaKi7LOA64WTtjrq93bT37JRd02znVCaiBOn9uJzYU5M1o%2FiVFi80Wafkr8pG5ct1eR4jBkfSAgY3bpE%2FD%2BD2qsb0VPF%2FNg%2FeIdfTG2Ja72EiAzH1ZlbvpSjWu7bVffKGAHhBys7NpvY9a0o8I5wKHkezTo60xpwj0i1zcziHkp9bjg2%2FU1C%2Fa2k4G%2BRVPu69JcyuxJxG4LcG03BENPHHvzxpfs2%2FgJ%2FH68l98Yy3wYjeAjE6zVy1jYTPXv9pdImeZlvqoXLKga4eL1JyWmnDFYddKFclh9PUO2Vvf3jn2LIMe%2FujRRxRuolvXAPc56imHSJULkfzgxUSqLiTsdz9RVQSrxNxmxVbI6yDf8DgFvqzi9HsF6YABsHj0MNvIqL4GOqUBUzWyh1sUUP2sqNsQYMBkX4nq6ANReSfzQ8WVAQmbIVTHfQZcoLOJPwikCpjqW2DRv6NsxOuUw0OkASv6UCzMcUXg6tBR%2F4BZ6blf5ksvUCX%2FDLGHPEgrmOef8IaxOp5MyFxAeee%2F7kvI4d7qUMN809%2FM%2BmekgpztXJUHHOmA3iL60YOz%2BP%2FLzdTdrnPuOcyx1jxWE9iRhJLTCe%2BJIo80OLpbBDX8&X-Amz-Signature=6056448f0cb74077c7c1856cd40ef9f9c8b90a7b15c863f6933a3ba875213d33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLI5SOTA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhOrmCjsa0F8vxJR%2F%2BBl6F8DgWwMusJwySmUBZ0UzlwIgNuA0aww9XnOMHRJwRMTBC7bvrmwdNo3NXEZFU6l%2FYxwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDClpMt%2Bm%2BQhqDRSW7SrcA7uzq%2Faer5SagF4l%2F2H2otKgrmRF9SIzWFQc1Gm16ZbbUcsc2lSqtQU8eoGOOQKwwv4RgKuWVUDRvxCMiAzTymzngr8PTfeKMv2qo6PQm8YW%2Fs8pHqTxyPJ1DQZ5Yy4hNJ1ld9aLWCsIkiDwmG5Rpt1wLcoN1QADMFX2C9hv8TYasu1LGYDlCtM%2FZVWQbzZYlZ%2BbW687vpTbQVnHImbRt7gFzeG3e0HMKqVgnVxgYm%2BLXyNOsVxwGKsnwmMnHgZ5foKaKi7LOA64WTtjrq93bT37JRd02znVCaiBOn9uJzYU5M1o%2FiVFi80Wafkr8pG5ct1eR4jBkfSAgY3bpE%2FD%2BD2qsb0VPF%2FNg%2FeIdfTG2Ja72EiAzH1ZlbvpSjWu7bVffKGAHhBys7NpvY9a0o8I5wKHkezTo60xpwj0i1zcziHkp9bjg2%2FU1C%2Fa2k4G%2BRVPu69JcyuxJxG4LcG03BENPHHvzxpfs2%2FgJ%2FH68l98Yy3wYjeAjE6zVy1jYTPXv9pdImeZlvqoXLKga4eL1JyWmnDFYddKFclh9PUO2Vvf3jn2LIMe%2FujRRxRuolvXAPc56imHSJULkfzgxUSqLiTsdz9RVQSrxNxmxVbI6yDf8DgFvqzi9HsF6YABsHj0MNvIqL4GOqUBUzWyh1sUUP2sqNsQYMBkX4nq6ANReSfzQ8WVAQmbIVTHfQZcoLOJPwikCpjqW2DRv6NsxOuUw0OkASv6UCzMcUXg6tBR%2F4BZ6blf5ksvUCX%2FDLGHPEgrmOef8IaxOp5MyFxAeee%2F7kvI4d7qUMN809%2FM%2BmekgpztXJUHHOmA3iL60YOz%2BP%2FLzdTdrnPuOcyx1jxWE9iRhJLTCe%2BJIo80OLpbBDX8&X-Amz-Signature=27acc8c6aadc545b30f4e70b9182d919021c77ddcd0cc54a4c90d4fe04bffab6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
