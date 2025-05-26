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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY6JNXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCt0CvdElnpP7Z%2FDUSOi9u6XD6Fza1XLEUKtD%2BErbve3AIgP5srTmmB%2Btj8NZbsrn6ncxav5n6aTsHficm25Tnr7O4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFGPdeHqZ4R5Kij0KSrcA0vE5vQM6O%2FzrkKY8aC02J5RSirp1bGvDpgtiF28p2SOpMdRDsyCLNqKx1c%2BuHRnkjM33XET0XDdqsCW3jF34IBva7N2dLQP0IB4n1s84q5yl6VWIsVEv1C1hAYLdactTVP67vr%2FcUUKKU0vQrncHC2A0IKTC2HIM%2FrJhBHT%2Bnw%2BmUMg4fmnXMm7QBsN5Tlm405QEXjuhmFm%2Bzc6SyJx9l5esUeIc%2F6PyfXGJ7WHK0xa2abQERZRsujp7BZJRsFdgcpB%2BM%2FslJzqqvxpNoUrsUbiYFlU8IQ8tuXDPAuqMhiWgV5P9xjckCjqigdVeTLlxfKCc2U1tsATezBklQtSSg35%2Bue5Xtm%2Fl%2F45vFewiNPTFS17q4bcB%2BZFIICs3IMzE1%2B0PH3JGKoaEnVpKQnv%2Bnh%2BByuNo26zsax0FYXA1B%2FJfqq69BtSYbW7tmu43hCE63CMfIPVaAkZUS2vvEGVoJMwlG5YJ1GXGPsyxeolsCvZ6UWERtpEGS9qQVHDaf4AjRbMqdxzFgazow6SJIv9%2BCO%2FqpryKFrRJGpBK3AEqR1Eupn1RcqSiU4B9Tzx5y%2B75h3vq7yku8JfhhM1xr0fuPysj9zltsNI0pfpWXHfU8xBL%2BU%2BnFhFcUR8utoJMNSq0cEGOqUBcg5GzgWdzX5yLgvVPUcn4XtxEGVaDTtMcNSr%2BeTyHNMNANMFfzAyVyU%2F6MGcn48r2wGMNrwKruYLrg%2BiGSrG95hOarqlOcnkNwt6uvFvCM56Pw3e2FUvjswEKTU4JP%2FsFWSKBGW6%2FIWd6VdD7TClgftV5xE1YCvvkQQWK55cKPro8bgMB%2F%2BjtggPDgaCkOh2csIQudOtsuo786FmbOjTB7ZxdEJN&X-Amz-Signature=bb8f796e96c2f0b98183d043c0de140cb553f4e0279995616b382ebb0125db00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY6JNXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCt0CvdElnpP7Z%2FDUSOi9u6XD6Fza1XLEUKtD%2BErbve3AIgP5srTmmB%2Btj8NZbsrn6ncxav5n6aTsHficm25Tnr7O4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFGPdeHqZ4R5Kij0KSrcA0vE5vQM6O%2FzrkKY8aC02J5RSirp1bGvDpgtiF28p2SOpMdRDsyCLNqKx1c%2BuHRnkjM33XET0XDdqsCW3jF34IBva7N2dLQP0IB4n1s84q5yl6VWIsVEv1C1hAYLdactTVP67vr%2FcUUKKU0vQrncHC2A0IKTC2HIM%2FrJhBHT%2Bnw%2BmUMg4fmnXMm7QBsN5Tlm405QEXjuhmFm%2Bzc6SyJx9l5esUeIc%2F6PyfXGJ7WHK0xa2abQERZRsujp7BZJRsFdgcpB%2BM%2FslJzqqvxpNoUrsUbiYFlU8IQ8tuXDPAuqMhiWgV5P9xjckCjqigdVeTLlxfKCc2U1tsATezBklQtSSg35%2Bue5Xtm%2Fl%2F45vFewiNPTFS17q4bcB%2BZFIICs3IMzE1%2B0PH3JGKoaEnVpKQnv%2Bnh%2BByuNo26zsax0FYXA1B%2FJfqq69BtSYbW7tmu43hCE63CMfIPVaAkZUS2vvEGVoJMwlG5YJ1GXGPsyxeolsCvZ6UWERtpEGS9qQVHDaf4AjRbMqdxzFgazow6SJIv9%2BCO%2FqpryKFrRJGpBK3AEqR1Eupn1RcqSiU4B9Tzx5y%2B75h3vq7yku8JfhhM1xr0fuPysj9zltsNI0pfpWXHfU8xBL%2BU%2BnFhFcUR8utoJMNSq0cEGOqUBcg5GzgWdzX5yLgvVPUcn4XtxEGVaDTtMcNSr%2BeTyHNMNANMFfzAyVyU%2F6MGcn48r2wGMNrwKruYLrg%2BiGSrG95hOarqlOcnkNwt6uvFvCM56Pw3e2FUvjswEKTU4JP%2FsFWSKBGW6%2FIWd6VdD7TClgftV5xE1YCvvkQQWK55cKPro8bgMB%2F%2BjtggPDgaCkOh2csIQudOtsuo786FmbOjTB7ZxdEJN&X-Amz-Signature=8e4b4e9d70709fa973943527240ab2b2346b67b5a4f9ff34ad2d1840a779264a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY6JNXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCt0CvdElnpP7Z%2FDUSOi9u6XD6Fza1XLEUKtD%2BErbve3AIgP5srTmmB%2Btj8NZbsrn6ncxav5n6aTsHficm25Tnr7O4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFGPdeHqZ4R5Kij0KSrcA0vE5vQM6O%2FzrkKY8aC02J5RSirp1bGvDpgtiF28p2SOpMdRDsyCLNqKx1c%2BuHRnkjM33XET0XDdqsCW3jF34IBva7N2dLQP0IB4n1s84q5yl6VWIsVEv1C1hAYLdactTVP67vr%2FcUUKKU0vQrncHC2A0IKTC2HIM%2FrJhBHT%2Bnw%2BmUMg4fmnXMm7QBsN5Tlm405QEXjuhmFm%2Bzc6SyJx9l5esUeIc%2F6PyfXGJ7WHK0xa2abQERZRsujp7BZJRsFdgcpB%2BM%2FslJzqqvxpNoUrsUbiYFlU8IQ8tuXDPAuqMhiWgV5P9xjckCjqigdVeTLlxfKCc2U1tsATezBklQtSSg35%2Bue5Xtm%2Fl%2F45vFewiNPTFS17q4bcB%2BZFIICs3IMzE1%2B0PH3JGKoaEnVpKQnv%2Bnh%2BByuNo26zsax0FYXA1B%2FJfqq69BtSYbW7tmu43hCE63CMfIPVaAkZUS2vvEGVoJMwlG5YJ1GXGPsyxeolsCvZ6UWERtpEGS9qQVHDaf4AjRbMqdxzFgazow6SJIv9%2BCO%2FqpryKFrRJGpBK3AEqR1Eupn1RcqSiU4B9Tzx5y%2B75h3vq7yku8JfhhM1xr0fuPysj9zltsNI0pfpWXHfU8xBL%2BU%2BnFhFcUR8utoJMNSq0cEGOqUBcg5GzgWdzX5yLgvVPUcn4XtxEGVaDTtMcNSr%2BeTyHNMNANMFfzAyVyU%2F6MGcn48r2wGMNrwKruYLrg%2BiGSrG95hOarqlOcnkNwt6uvFvCM56Pw3e2FUvjswEKTU4JP%2FsFWSKBGW6%2FIWd6VdD7TClgftV5xE1YCvvkQQWK55cKPro8bgMB%2F%2BjtggPDgaCkOh2csIQudOtsuo786FmbOjTB7ZxdEJN&X-Amz-Signature=5857a7fd46a7a8e30b3708b600de80092b75e3a737afb0634060e3ab6767e557&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY6JNXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCt0CvdElnpP7Z%2FDUSOi9u6XD6Fza1XLEUKtD%2BErbve3AIgP5srTmmB%2Btj8NZbsrn6ncxav5n6aTsHficm25Tnr7O4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFGPdeHqZ4R5Kij0KSrcA0vE5vQM6O%2FzrkKY8aC02J5RSirp1bGvDpgtiF28p2SOpMdRDsyCLNqKx1c%2BuHRnkjM33XET0XDdqsCW3jF34IBva7N2dLQP0IB4n1s84q5yl6VWIsVEv1C1hAYLdactTVP67vr%2FcUUKKU0vQrncHC2A0IKTC2HIM%2FrJhBHT%2Bnw%2BmUMg4fmnXMm7QBsN5Tlm405QEXjuhmFm%2Bzc6SyJx9l5esUeIc%2F6PyfXGJ7WHK0xa2abQERZRsujp7BZJRsFdgcpB%2BM%2FslJzqqvxpNoUrsUbiYFlU8IQ8tuXDPAuqMhiWgV5P9xjckCjqigdVeTLlxfKCc2U1tsATezBklQtSSg35%2Bue5Xtm%2Fl%2F45vFewiNPTFS17q4bcB%2BZFIICs3IMzE1%2B0PH3JGKoaEnVpKQnv%2Bnh%2BByuNo26zsax0FYXA1B%2FJfqq69BtSYbW7tmu43hCE63CMfIPVaAkZUS2vvEGVoJMwlG5YJ1GXGPsyxeolsCvZ6UWERtpEGS9qQVHDaf4AjRbMqdxzFgazow6SJIv9%2BCO%2FqpryKFrRJGpBK3AEqR1Eupn1RcqSiU4B9Tzx5y%2B75h3vq7yku8JfhhM1xr0fuPysj9zltsNI0pfpWXHfU8xBL%2BU%2BnFhFcUR8utoJMNSq0cEGOqUBcg5GzgWdzX5yLgvVPUcn4XtxEGVaDTtMcNSr%2BeTyHNMNANMFfzAyVyU%2F6MGcn48r2wGMNrwKruYLrg%2BiGSrG95hOarqlOcnkNwt6uvFvCM56Pw3e2FUvjswEKTU4JP%2FsFWSKBGW6%2FIWd6VdD7TClgftV5xE1YCvvkQQWK55cKPro8bgMB%2F%2BjtggPDgaCkOh2csIQudOtsuo786FmbOjTB7ZxdEJN&X-Amz-Signature=9c8bf16f4fe69897e1e87fe19cd7698ee6aef50d95648868ff52d300c8841deb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY6JNXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCt0CvdElnpP7Z%2FDUSOi9u6XD6Fza1XLEUKtD%2BErbve3AIgP5srTmmB%2Btj8NZbsrn6ncxav5n6aTsHficm25Tnr7O4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFGPdeHqZ4R5Kij0KSrcA0vE5vQM6O%2FzrkKY8aC02J5RSirp1bGvDpgtiF28p2SOpMdRDsyCLNqKx1c%2BuHRnkjM33XET0XDdqsCW3jF34IBva7N2dLQP0IB4n1s84q5yl6VWIsVEv1C1hAYLdactTVP67vr%2FcUUKKU0vQrncHC2A0IKTC2HIM%2FrJhBHT%2Bnw%2BmUMg4fmnXMm7QBsN5Tlm405QEXjuhmFm%2Bzc6SyJx9l5esUeIc%2F6PyfXGJ7WHK0xa2abQERZRsujp7BZJRsFdgcpB%2BM%2FslJzqqvxpNoUrsUbiYFlU8IQ8tuXDPAuqMhiWgV5P9xjckCjqigdVeTLlxfKCc2U1tsATezBklQtSSg35%2Bue5Xtm%2Fl%2F45vFewiNPTFS17q4bcB%2BZFIICs3IMzE1%2B0PH3JGKoaEnVpKQnv%2Bnh%2BByuNo26zsax0FYXA1B%2FJfqq69BtSYbW7tmu43hCE63CMfIPVaAkZUS2vvEGVoJMwlG5YJ1GXGPsyxeolsCvZ6UWERtpEGS9qQVHDaf4AjRbMqdxzFgazow6SJIv9%2BCO%2FqpryKFrRJGpBK3AEqR1Eupn1RcqSiU4B9Tzx5y%2B75h3vq7yku8JfhhM1xr0fuPysj9zltsNI0pfpWXHfU8xBL%2BU%2BnFhFcUR8utoJMNSq0cEGOqUBcg5GzgWdzX5yLgvVPUcn4XtxEGVaDTtMcNSr%2BeTyHNMNANMFfzAyVyU%2F6MGcn48r2wGMNrwKruYLrg%2BiGSrG95hOarqlOcnkNwt6uvFvCM56Pw3e2FUvjswEKTU4JP%2FsFWSKBGW6%2FIWd6VdD7TClgftV5xE1YCvvkQQWK55cKPro8bgMB%2F%2BjtggPDgaCkOh2csIQudOtsuo786FmbOjTB7ZxdEJN&X-Amz-Signature=e7c7a50f4d191581c5311d5f50bece0520ac3534602c9878a24a662a03a74b27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY6JNXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCt0CvdElnpP7Z%2FDUSOi9u6XD6Fza1XLEUKtD%2BErbve3AIgP5srTmmB%2Btj8NZbsrn6ncxav5n6aTsHficm25Tnr7O4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFGPdeHqZ4R5Kij0KSrcA0vE5vQM6O%2FzrkKY8aC02J5RSirp1bGvDpgtiF28p2SOpMdRDsyCLNqKx1c%2BuHRnkjM33XET0XDdqsCW3jF34IBva7N2dLQP0IB4n1s84q5yl6VWIsVEv1C1hAYLdactTVP67vr%2FcUUKKU0vQrncHC2A0IKTC2HIM%2FrJhBHT%2Bnw%2BmUMg4fmnXMm7QBsN5Tlm405QEXjuhmFm%2Bzc6SyJx9l5esUeIc%2F6PyfXGJ7WHK0xa2abQERZRsujp7BZJRsFdgcpB%2BM%2FslJzqqvxpNoUrsUbiYFlU8IQ8tuXDPAuqMhiWgV5P9xjckCjqigdVeTLlxfKCc2U1tsATezBklQtSSg35%2Bue5Xtm%2Fl%2F45vFewiNPTFS17q4bcB%2BZFIICs3IMzE1%2B0PH3JGKoaEnVpKQnv%2Bnh%2BByuNo26zsax0FYXA1B%2FJfqq69BtSYbW7tmu43hCE63CMfIPVaAkZUS2vvEGVoJMwlG5YJ1GXGPsyxeolsCvZ6UWERtpEGS9qQVHDaf4AjRbMqdxzFgazow6SJIv9%2BCO%2FqpryKFrRJGpBK3AEqR1Eupn1RcqSiU4B9Tzx5y%2B75h3vq7yku8JfhhM1xr0fuPysj9zltsNI0pfpWXHfU8xBL%2BU%2BnFhFcUR8utoJMNSq0cEGOqUBcg5GzgWdzX5yLgvVPUcn4XtxEGVaDTtMcNSr%2BeTyHNMNANMFfzAyVyU%2F6MGcn48r2wGMNrwKruYLrg%2BiGSrG95hOarqlOcnkNwt6uvFvCM56Pw3e2FUvjswEKTU4JP%2FsFWSKBGW6%2FIWd6VdD7TClgftV5xE1YCvvkQQWK55cKPro8bgMB%2F%2BjtggPDgaCkOh2csIQudOtsuo786FmbOjTB7ZxdEJN&X-Amz-Signature=65453504aee8b478e5de2fd18419c37809b65280fe95934dac8bc89343116b75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY6JNXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCt0CvdElnpP7Z%2FDUSOi9u6XD6Fza1XLEUKtD%2BErbve3AIgP5srTmmB%2Btj8NZbsrn6ncxav5n6aTsHficm25Tnr7O4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFGPdeHqZ4R5Kij0KSrcA0vE5vQM6O%2FzrkKY8aC02J5RSirp1bGvDpgtiF28p2SOpMdRDsyCLNqKx1c%2BuHRnkjM33XET0XDdqsCW3jF34IBva7N2dLQP0IB4n1s84q5yl6VWIsVEv1C1hAYLdactTVP67vr%2FcUUKKU0vQrncHC2A0IKTC2HIM%2FrJhBHT%2Bnw%2BmUMg4fmnXMm7QBsN5Tlm405QEXjuhmFm%2Bzc6SyJx9l5esUeIc%2F6PyfXGJ7WHK0xa2abQERZRsujp7BZJRsFdgcpB%2BM%2FslJzqqvxpNoUrsUbiYFlU8IQ8tuXDPAuqMhiWgV5P9xjckCjqigdVeTLlxfKCc2U1tsATezBklQtSSg35%2Bue5Xtm%2Fl%2F45vFewiNPTFS17q4bcB%2BZFIICs3IMzE1%2B0PH3JGKoaEnVpKQnv%2Bnh%2BByuNo26zsax0FYXA1B%2FJfqq69BtSYbW7tmu43hCE63CMfIPVaAkZUS2vvEGVoJMwlG5YJ1GXGPsyxeolsCvZ6UWERtpEGS9qQVHDaf4AjRbMqdxzFgazow6SJIv9%2BCO%2FqpryKFrRJGpBK3AEqR1Eupn1RcqSiU4B9Tzx5y%2B75h3vq7yku8JfhhM1xr0fuPysj9zltsNI0pfpWXHfU8xBL%2BU%2BnFhFcUR8utoJMNSq0cEGOqUBcg5GzgWdzX5yLgvVPUcn4XtxEGVaDTtMcNSr%2BeTyHNMNANMFfzAyVyU%2F6MGcn48r2wGMNrwKruYLrg%2BiGSrG95hOarqlOcnkNwt6uvFvCM56Pw3e2FUvjswEKTU4JP%2FsFWSKBGW6%2FIWd6VdD7TClgftV5xE1YCvvkQQWK55cKPro8bgMB%2F%2BjtggPDgaCkOh2csIQudOtsuo786FmbOjTB7ZxdEJN&X-Amz-Signature=beae1a13030e409251ce7b9c1a9f51a652145984b0e9674039985dd671065015&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY6JNXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCt0CvdElnpP7Z%2FDUSOi9u6XD6Fza1XLEUKtD%2BErbve3AIgP5srTmmB%2Btj8NZbsrn6ncxav5n6aTsHficm25Tnr7O4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFGPdeHqZ4R5Kij0KSrcA0vE5vQM6O%2FzrkKY8aC02J5RSirp1bGvDpgtiF28p2SOpMdRDsyCLNqKx1c%2BuHRnkjM33XET0XDdqsCW3jF34IBva7N2dLQP0IB4n1s84q5yl6VWIsVEv1C1hAYLdactTVP67vr%2FcUUKKU0vQrncHC2A0IKTC2HIM%2FrJhBHT%2Bnw%2BmUMg4fmnXMm7QBsN5Tlm405QEXjuhmFm%2Bzc6SyJx9l5esUeIc%2F6PyfXGJ7WHK0xa2abQERZRsujp7BZJRsFdgcpB%2BM%2FslJzqqvxpNoUrsUbiYFlU8IQ8tuXDPAuqMhiWgV5P9xjckCjqigdVeTLlxfKCc2U1tsATezBklQtSSg35%2Bue5Xtm%2Fl%2F45vFewiNPTFS17q4bcB%2BZFIICs3IMzE1%2B0PH3JGKoaEnVpKQnv%2Bnh%2BByuNo26zsax0FYXA1B%2FJfqq69BtSYbW7tmu43hCE63CMfIPVaAkZUS2vvEGVoJMwlG5YJ1GXGPsyxeolsCvZ6UWERtpEGS9qQVHDaf4AjRbMqdxzFgazow6SJIv9%2BCO%2FqpryKFrRJGpBK3AEqR1Eupn1RcqSiU4B9Tzx5y%2B75h3vq7yku8JfhhM1xr0fuPysj9zltsNI0pfpWXHfU8xBL%2BU%2BnFhFcUR8utoJMNSq0cEGOqUBcg5GzgWdzX5yLgvVPUcn4XtxEGVaDTtMcNSr%2BeTyHNMNANMFfzAyVyU%2F6MGcn48r2wGMNrwKruYLrg%2BiGSrG95hOarqlOcnkNwt6uvFvCM56Pw3e2FUvjswEKTU4JP%2FsFWSKBGW6%2FIWd6VdD7TClgftV5xE1YCvvkQQWK55cKPro8bgMB%2F%2BjtggPDgaCkOh2csIQudOtsuo786FmbOjTB7ZxdEJN&X-Amz-Signature=34bc8d6020caede2551974b562570c2be6223648a37fcec3b659b4042c37ddfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
