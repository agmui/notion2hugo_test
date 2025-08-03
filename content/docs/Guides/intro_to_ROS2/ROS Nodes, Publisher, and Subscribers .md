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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NPJ4GET%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2etQXy9NPjoky0bdhjzvbkynkSY%2B8AsKPEtk6evtuFAiEAo%2B8s8ixHxRzTv1Ltz558tXPGUDb6L3WVUHXKUi7XSfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGPiVimI0q%2BkjmIRWSrcA8CG91yzaELRZZy%2Bu6GZ5R1lzRLmM5XIwskfu69Xv2%2FsE%2Fa5Z6JXcL6su0%2FjJdh9Vj1LM78Toc9tnFwn6IHlSxWfkL7Q%2BUYz9T2sLjaET3p45LFIrnsh%2BVvP0jk6jQKfeHsejSndqYu0%2FCAEuIwh4BvoH%2FH%2FV3x%2FJVbCD34n81tfX2f%2FPdnSQ9YUAFJ70tg2nHBUdrREaQPi0UvTWuG0I3fLIw8piCwVa9%2BhU1HorwFyRzi8wDs3KAPFCV3V7IbWPxoOXSoL1RO3ZGELJBHdZMnmhN6uFe2CkIQgsHC%2BJSa74mkmIpXjtdyS9AkbZYE33Q%2BC8sw9Lcmdzj6lZJmRH%2FK8dNV92PyqPWSihB1Onrd1VHXPWnNB8LgD87W5wyfeKrmr3a51tSdWTfYlnI%2FVIgAuW7VndTLpo1AS0YCSeFYdXxnZPlUO3Nvtr1rOVe%2BLf1rBaob58OUp%2Bdf0r%2BavpmItZdco8t8d89pyFq9isZjsL9qX0bj1eHo1%2F5GvVh1lSMLP5vNDV9redcNvI89ieIsyi0voPBgxRfuE7X9oEP0fNEEWWuxrgvf8NwBoA%2Bf2WQ8TgQ%2FrKGjGfE6fgla4Om7a7%2FOQHq4D2An4tZB%2BPOwvuFCRgfmbjwAStr7NMJ%2Bbu8QGOqUBUXe70yfoNRjobLUCKYNuNJ84WIJ%2BP4jxGJ8OCMBmp6IerBpiRmLX27qWl5O2Rai4PxrSSYv7ovcsPUyhzs18nfXDMFqZJHHM6SqaByvHhIF62QS3qqiKICOmNV1y04W4p7XrTtYwrGaNBXAGjyu%2BMASHXSlD59kbz%2FzoaxB9FRKmdC31BgeoCePngj5i9aIdd0cKh312L2e9gX%2FZ29CmjnLcnd8h&X-Amz-Signature=75f65dd0fd0c8d4fd172d464fdbb1bcf6e8f346aa27610cbe03537d278c25b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NPJ4GET%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2etQXy9NPjoky0bdhjzvbkynkSY%2B8AsKPEtk6evtuFAiEAo%2B8s8ixHxRzTv1Ltz558tXPGUDb6L3WVUHXKUi7XSfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGPiVimI0q%2BkjmIRWSrcA8CG91yzaELRZZy%2Bu6GZ5R1lzRLmM5XIwskfu69Xv2%2FsE%2Fa5Z6JXcL6su0%2FjJdh9Vj1LM78Toc9tnFwn6IHlSxWfkL7Q%2BUYz9T2sLjaET3p45LFIrnsh%2BVvP0jk6jQKfeHsejSndqYu0%2FCAEuIwh4BvoH%2FH%2FV3x%2FJVbCD34n81tfX2f%2FPdnSQ9YUAFJ70tg2nHBUdrREaQPi0UvTWuG0I3fLIw8piCwVa9%2BhU1HorwFyRzi8wDs3KAPFCV3V7IbWPxoOXSoL1RO3ZGELJBHdZMnmhN6uFe2CkIQgsHC%2BJSa74mkmIpXjtdyS9AkbZYE33Q%2BC8sw9Lcmdzj6lZJmRH%2FK8dNV92PyqPWSihB1Onrd1VHXPWnNB8LgD87W5wyfeKrmr3a51tSdWTfYlnI%2FVIgAuW7VndTLpo1AS0YCSeFYdXxnZPlUO3Nvtr1rOVe%2BLf1rBaob58OUp%2Bdf0r%2BavpmItZdco8t8d89pyFq9isZjsL9qX0bj1eHo1%2F5GvVh1lSMLP5vNDV9redcNvI89ieIsyi0voPBgxRfuE7X9oEP0fNEEWWuxrgvf8NwBoA%2Bf2WQ8TgQ%2FrKGjGfE6fgla4Om7a7%2FOQHq4D2An4tZB%2BPOwvuFCRgfmbjwAStr7NMJ%2Bbu8QGOqUBUXe70yfoNRjobLUCKYNuNJ84WIJ%2BP4jxGJ8OCMBmp6IerBpiRmLX27qWl5O2Rai4PxrSSYv7ovcsPUyhzs18nfXDMFqZJHHM6SqaByvHhIF62QS3qqiKICOmNV1y04W4p7XrTtYwrGaNBXAGjyu%2BMASHXSlD59kbz%2FzoaxB9FRKmdC31BgeoCePngj5i9aIdd0cKh312L2e9gX%2FZ29CmjnLcnd8h&X-Amz-Signature=3bf432ccb6dfefd69d3a736b2b06c84e27c7e4b48130583bdd60b64008f427b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NPJ4GET%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2etQXy9NPjoky0bdhjzvbkynkSY%2B8AsKPEtk6evtuFAiEAo%2B8s8ixHxRzTv1Ltz558tXPGUDb6L3WVUHXKUi7XSfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGPiVimI0q%2BkjmIRWSrcA8CG91yzaELRZZy%2Bu6GZ5R1lzRLmM5XIwskfu69Xv2%2FsE%2Fa5Z6JXcL6su0%2FjJdh9Vj1LM78Toc9tnFwn6IHlSxWfkL7Q%2BUYz9T2sLjaET3p45LFIrnsh%2BVvP0jk6jQKfeHsejSndqYu0%2FCAEuIwh4BvoH%2FH%2FV3x%2FJVbCD34n81tfX2f%2FPdnSQ9YUAFJ70tg2nHBUdrREaQPi0UvTWuG0I3fLIw8piCwVa9%2BhU1HorwFyRzi8wDs3KAPFCV3V7IbWPxoOXSoL1RO3ZGELJBHdZMnmhN6uFe2CkIQgsHC%2BJSa74mkmIpXjtdyS9AkbZYE33Q%2BC8sw9Lcmdzj6lZJmRH%2FK8dNV92PyqPWSihB1Onrd1VHXPWnNB8LgD87W5wyfeKrmr3a51tSdWTfYlnI%2FVIgAuW7VndTLpo1AS0YCSeFYdXxnZPlUO3Nvtr1rOVe%2BLf1rBaob58OUp%2Bdf0r%2BavpmItZdco8t8d89pyFq9isZjsL9qX0bj1eHo1%2F5GvVh1lSMLP5vNDV9redcNvI89ieIsyi0voPBgxRfuE7X9oEP0fNEEWWuxrgvf8NwBoA%2Bf2WQ8TgQ%2FrKGjGfE6fgla4Om7a7%2FOQHq4D2An4tZB%2BPOwvuFCRgfmbjwAStr7NMJ%2Bbu8QGOqUBUXe70yfoNRjobLUCKYNuNJ84WIJ%2BP4jxGJ8OCMBmp6IerBpiRmLX27qWl5O2Rai4PxrSSYv7ovcsPUyhzs18nfXDMFqZJHHM6SqaByvHhIF62QS3qqiKICOmNV1y04W4p7XrTtYwrGaNBXAGjyu%2BMASHXSlD59kbz%2FzoaxB9FRKmdC31BgeoCePngj5i9aIdd0cKh312L2e9gX%2FZ29CmjnLcnd8h&X-Amz-Signature=478c178e1d14f1e7dc15fcb685659328dcf872ab59a143e49287c6be571a7005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NPJ4GET%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2etQXy9NPjoky0bdhjzvbkynkSY%2B8AsKPEtk6evtuFAiEAo%2B8s8ixHxRzTv1Ltz558tXPGUDb6L3WVUHXKUi7XSfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGPiVimI0q%2BkjmIRWSrcA8CG91yzaELRZZy%2Bu6GZ5R1lzRLmM5XIwskfu69Xv2%2FsE%2Fa5Z6JXcL6su0%2FjJdh9Vj1LM78Toc9tnFwn6IHlSxWfkL7Q%2BUYz9T2sLjaET3p45LFIrnsh%2BVvP0jk6jQKfeHsejSndqYu0%2FCAEuIwh4BvoH%2FH%2FV3x%2FJVbCD34n81tfX2f%2FPdnSQ9YUAFJ70tg2nHBUdrREaQPi0UvTWuG0I3fLIw8piCwVa9%2BhU1HorwFyRzi8wDs3KAPFCV3V7IbWPxoOXSoL1RO3ZGELJBHdZMnmhN6uFe2CkIQgsHC%2BJSa74mkmIpXjtdyS9AkbZYE33Q%2BC8sw9Lcmdzj6lZJmRH%2FK8dNV92PyqPWSihB1Onrd1VHXPWnNB8LgD87W5wyfeKrmr3a51tSdWTfYlnI%2FVIgAuW7VndTLpo1AS0YCSeFYdXxnZPlUO3Nvtr1rOVe%2BLf1rBaob58OUp%2Bdf0r%2BavpmItZdco8t8d89pyFq9isZjsL9qX0bj1eHo1%2F5GvVh1lSMLP5vNDV9redcNvI89ieIsyi0voPBgxRfuE7X9oEP0fNEEWWuxrgvf8NwBoA%2Bf2WQ8TgQ%2FrKGjGfE6fgla4Om7a7%2FOQHq4D2An4tZB%2BPOwvuFCRgfmbjwAStr7NMJ%2Bbu8QGOqUBUXe70yfoNRjobLUCKYNuNJ84WIJ%2BP4jxGJ8OCMBmp6IerBpiRmLX27qWl5O2Rai4PxrSSYv7ovcsPUyhzs18nfXDMFqZJHHM6SqaByvHhIF62QS3qqiKICOmNV1y04W4p7XrTtYwrGaNBXAGjyu%2BMASHXSlD59kbz%2FzoaxB9FRKmdC31BgeoCePngj5i9aIdd0cKh312L2e9gX%2FZ29CmjnLcnd8h&X-Amz-Signature=6a96811fdea83233a21f2ebb3de548f81faa2c9ef0a4b15fcb96429d66a2d539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NPJ4GET%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2etQXy9NPjoky0bdhjzvbkynkSY%2B8AsKPEtk6evtuFAiEAo%2B8s8ixHxRzTv1Ltz558tXPGUDb6L3WVUHXKUi7XSfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGPiVimI0q%2BkjmIRWSrcA8CG91yzaELRZZy%2Bu6GZ5R1lzRLmM5XIwskfu69Xv2%2FsE%2Fa5Z6JXcL6su0%2FjJdh9Vj1LM78Toc9tnFwn6IHlSxWfkL7Q%2BUYz9T2sLjaET3p45LFIrnsh%2BVvP0jk6jQKfeHsejSndqYu0%2FCAEuIwh4BvoH%2FH%2FV3x%2FJVbCD34n81tfX2f%2FPdnSQ9YUAFJ70tg2nHBUdrREaQPi0UvTWuG0I3fLIw8piCwVa9%2BhU1HorwFyRzi8wDs3KAPFCV3V7IbWPxoOXSoL1RO3ZGELJBHdZMnmhN6uFe2CkIQgsHC%2BJSa74mkmIpXjtdyS9AkbZYE33Q%2BC8sw9Lcmdzj6lZJmRH%2FK8dNV92PyqPWSihB1Onrd1VHXPWnNB8LgD87W5wyfeKrmr3a51tSdWTfYlnI%2FVIgAuW7VndTLpo1AS0YCSeFYdXxnZPlUO3Nvtr1rOVe%2BLf1rBaob58OUp%2Bdf0r%2BavpmItZdco8t8d89pyFq9isZjsL9qX0bj1eHo1%2F5GvVh1lSMLP5vNDV9redcNvI89ieIsyi0voPBgxRfuE7X9oEP0fNEEWWuxrgvf8NwBoA%2Bf2WQ8TgQ%2FrKGjGfE6fgla4Om7a7%2FOQHq4D2An4tZB%2BPOwvuFCRgfmbjwAStr7NMJ%2Bbu8QGOqUBUXe70yfoNRjobLUCKYNuNJ84WIJ%2BP4jxGJ8OCMBmp6IerBpiRmLX27qWl5O2Rai4PxrSSYv7ovcsPUyhzs18nfXDMFqZJHHM6SqaByvHhIF62QS3qqiKICOmNV1y04W4p7XrTtYwrGaNBXAGjyu%2BMASHXSlD59kbz%2FzoaxB9FRKmdC31BgeoCePngj5i9aIdd0cKh312L2e9gX%2FZ29CmjnLcnd8h&X-Amz-Signature=38ce4335b704a8f7b89ea47820cf37ff4a5523ed67ad25ac39254e13e782002d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NPJ4GET%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2etQXy9NPjoky0bdhjzvbkynkSY%2B8AsKPEtk6evtuFAiEAo%2B8s8ixHxRzTv1Ltz558tXPGUDb6L3WVUHXKUi7XSfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGPiVimI0q%2BkjmIRWSrcA8CG91yzaELRZZy%2Bu6GZ5R1lzRLmM5XIwskfu69Xv2%2FsE%2Fa5Z6JXcL6su0%2FjJdh9Vj1LM78Toc9tnFwn6IHlSxWfkL7Q%2BUYz9T2sLjaET3p45LFIrnsh%2BVvP0jk6jQKfeHsejSndqYu0%2FCAEuIwh4BvoH%2FH%2FV3x%2FJVbCD34n81tfX2f%2FPdnSQ9YUAFJ70tg2nHBUdrREaQPi0UvTWuG0I3fLIw8piCwVa9%2BhU1HorwFyRzi8wDs3KAPFCV3V7IbWPxoOXSoL1RO3ZGELJBHdZMnmhN6uFe2CkIQgsHC%2BJSa74mkmIpXjtdyS9AkbZYE33Q%2BC8sw9Lcmdzj6lZJmRH%2FK8dNV92PyqPWSihB1Onrd1VHXPWnNB8LgD87W5wyfeKrmr3a51tSdWTfYlnI%2FVIgAuW7VndTLpo1AS0YCSeFYdXxnZPlUO3Nvtr1rOVe%2BLf1rBaob58OUp%2Bdf0r%2BavpmItZdco8t8d89pyFq9isZjsL9qX0bj1eHo1%2F5GvVh1lSMLP5vNDV9redcNvI89ieIsyi0voPBgxRfuE7X9oEP0fNEEWWuxrgvf8NwBoA%2Bf2WQ8TgQ%2FrKGjGfE6fgla4Om7a7%2FOQHq4D2An4tZB%2BPOwvuFCRgfmbjwAStr7NMJ%2Bbu8QGOqUBUXe70yfoNRjobLUCKYNuNJ84WIJ%2BP4jxGJ8OCMBmp6IerBpiRmLX27qWl5O2Rai4PxrSSYv7ovcsPUyhzs18nfXDMFqZJHHM6SqaByvHhIF62QS3qqiKICOmNV1y04W4p7XrTtYwrGaNBXAGjyu%2BMASHXSlD59kbz%2FzoaxB9FRKmdC31BgeoCePngj5i9aIdd0cKh312L2e9gX%2FZ29CmjnLcnd8h&X-Amz-Signature=2f6cc8c713713a2d8deabc4cd3374a97678d3442c26eb64de38f1037c5b26fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NPJ4GET%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2etQXy9NPjoky0bdhjzvbkynkSY%2B8AsKPEtk6evtuFAiEAo%2B8s8ixHxRzTv1Ltz558tXPGUDb6L3WVUHXKUi7XSfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGPiVimI0q%2BkjmIRWSrcA8CG91yzaELRZZy%2Bu6GZ5R1lzRLmM5XIwskfu69Xv2%2FsE%2Fa5Z6JXcL6su0%2FjJdh9Vj1LM78Toc9tnFwn6IHlSxWfkL7Q%2BUYz9T2sLjaET3p45LFIrnsh%2BVvP0jk6jQKfeHsejSndqYu0%2FCAEuIwh4BvoH%2FH%2FV3x%2FJVbCD34n81tfX2f%2FPdnSQ9YUAFJ70tg2nHBUdrREaQPi0UvTWuG0I3fLIw8piCwVa9%2BhU1HorwFyRzi8wDs3KAPFCV3V7IbWPxoOXSoL1RO3ZGELJBHdZMnmhN6uFe2CkIQgsHC%2BJSa74mkmIpXjtdyS9AkbZYE33Q%2BC8sw9Lcmdzj6lZJmRH%2FK8dNV92PyqPWSihB1Onrd1VHXPWnNB8LgD87W5wyfeKrmr3a51tSdWTfYlnI%2FVIgAuW7VndTLpo1AS0YCSeFYdXxnZPlUO3Nvtr1rOVe%2BLf1rBaob58OUp%2Bdf0r%2BavpmItZdco8t8d89pyFq9isZjsL9qX0bj1eHo1%2F5GvVh1lSMLP5vNDV9redcNvI89ieIsyi0voPBgxRfuE7X9oEP0fNEEWWuxrgvf8NwBoA%2Bf2WQ8TgQ%2FrKGjGfE6fgla4Om7a7%2FOQHq4D2An4tZB%2BPOwvuFCRgfmbjwAStr7NMJ%2Bbu8QGOqUBUXe70yfoNRjobLUCKYNuNJ84WIJ%2BP4jxGJ8OCMBmp6IerBpiRmLX27qWl5O2Rai4PxrSSYv7ovcsPUyhzs18nfXDMFqZJHHM6SqaByvHhIF62QS3qqiKICOmNV1y04W4p7XrTtYwrGaNBXAGjyu%2BMASHXSlD59kbz%2FzoaxB9FRKmdC31BgeoCePngj5i9aIdd0cKh312L2e9gX%2FZ29CmjnLcnd8h&X-Amz-Signature=1c529a5a9fb90395fb3204ba7b78af779c88bd53c9fa2bf78b79124de48106e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NPJ4GET%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2etQXy9NPjoky0bdhjzvbkynkSY%2B8AsKPEtk6evtuFAiEAo%2B8s8ixHxRzTv1Ltz558tXPGUDb6L3WVUHXKUi7XSfIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGPiVimI0q%2BkjmIRWSrcA8CG91yzaELRZZy%2Bu6GZ5R1lzRLmM5XIwskfu69Xv2%2FsE%2Fa5Z6JXcL6su0%2FjJdh9Vj1LM78Toc9tnFwn6IHlSxWfkL7Q%2BUYz9T2sLjaET3p45LFIrnsh%2BVvP0jk6jQKfeHsejSndqYu0%2FCAEuIwh4BvoH%2FH%2FV3x%2FJVbCD34n81tfX2f%2FPdnSQ9YUAFJ70tg2nHBUdrREaQPi0UvTWuG0I3fLIw8piCwVa9%2BhU1HorwFyRzi8wDs3KAPFCV3V7IbWPxoOXSoL1RO3ZGELJBHdZMnmhN6uFe2CkIQgsHC%2BJSa74mkmIpXjtdyS9AkbZYE33Q%2BC8sw9Lcmdzj6lZJmRH%2FK8dNV92PyqPWSihB1Onrd1VHXPWnNB8LgD87W5wyfeKrmr3a51tSdWTfYlnI%2FVIgAuW7VndTLpo1AS0YCSeFYdXxnZPlUO3Nvtr1rOVe%2BLf1rBaob58OUp%2Bdf0r%2BavpmItZdco8t8d89pyFq9isZjsL9qX0bj1eHo1%2F5GvVh1lSMLP5vNDV9redcNvI89ieIsyi0voPBgxRfuE7X9oEP0fNEEWWuxrgvf8NwBoA%2Bf2WQ8TgQ%2FrKGjGfE6fgla4Om7a7%2FOQHq4D2An4tZB%2BPOwvuFCRgfmbjwAStr7NMJ%2Bbu8QGOqUBUXe70yfoNRjobLUCKYNuNJ84WIJ%2BP4jxGJ8OCMBmp6IerBpiRmLX27qWl5O2Rai4PxrSSYv7ovcsPUyhzs18nfXDMFqZJHHM6SqaByvHhIF62QS3qqiKICOmNV1y04W4p7XrTtYwrGaNBXAGjyu%2BMASHXSlD59kbz%2FzoaxB9FRKmdC31BgeoCePngj5i9aIdd0cKh312L2e9gX%2FZ29CmjnLcnd8h&X-Amz-Signature=3a3b38fd22418164d108f8b788ab2659c6505ad9342742a16bb533a065642f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
