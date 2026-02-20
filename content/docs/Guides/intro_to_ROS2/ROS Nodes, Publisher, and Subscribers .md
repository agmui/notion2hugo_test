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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH45BNYL%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu2%2BjPB0LLN2YntrZKpcUQn1EjiKp%2B6hcNwGWEnNcpCAIgQbT3woKsbDq7AHN5KPWEgmWdubQUGimbURPy89VUasQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLRfPfRcCzE%2B%2BWwKSrcA0jXLQeI%2B23rU37ZyNOKDDyPRR7q0SWCmZ%2FmsS%2F5ez1K3FKX8UeoUZ7pNr4MFDXLAjLhUAWA%2FapNEGb2RchgPKUBPPqV2pHibZliNiQxi6qyOcmuIWPkE0MARXP9N2fmnQ9ejSKreGT%2BZRFrw5MtJIXXWB1AsqIEzBu1u1FAbXVe6SkwkJGP9zOJ6uBwR73IV0CL8vGId%2BvfE5M%2F%2FFpM7N0ATj%2FeajA5WhhoicXRrRUUWDdBlkIIn5f6kgRR%2F4UkanFdSQzQlXdzUfPVcXdZeD8hpgCbwOSjLotiXaZnHCLjG1W7Lw76IUWohmfISeZz7i5HVFYIfl9aOMQTSHhg1O01VluujVLslDjFZ3iCNFm6dPNtptkKp5OQuJ%2FZZYxcFlJPI46fQBnKDcX9eGF%2FLzY9%2FpRwL488vCHSj8vUnXLPh7aZiZcPeVuJEGqpjH9ty1yGxcrdT7Rz4suQ0l%2FMIcliGQcEAqG7HEYg6pzfO6AJPh19Dkj4okVH26GwvftR2auy2mwQyRsZgqb%2BAuQgGlHlt6qDVZLk%2F88eCR99T4epctwN%2FlWqm9hKftzP%2BlDCuziE20NPYgZm1IMFIAWgabiqBj90%2BavIBlErsHNIVdXRWquJPCU6ljrBG1c2MNHo3swGOqUB%2Byl4%2F2aLuu7IpUxtIx5AdRIJkQ47QiKGZpdC%2BvGwzKR6gb4byUgyD2OPYAZmZxvoymPAebGr4oiDCWb9Zm9fNe25%2FDjKUQeiynLqnzWogXJ0%2FWGPx2GF7Kmo8ykfibWy2tqtEevRg0kDId2SHExnPQnymGlwpQqrNp3CZFdpLz%2BKPU%2BOC6N0d%2FEWbMS%2BbdKf9JoQjYDdi8MbvGxCfVheF%2F9McKtR&X-Amz-Signature=653597de56c525653c7b8a087229a8a1391dcdf31959b8a4b4a999dc8644ddf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH45BNYL%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu2%2BjPB0LLN2YntrZKpcUQn1EjiKp%2B6hcNwGWEnNcpCAIgQbT3woKsbDq7AHN5KPWEgmWdubQUGimbURPy89VUasQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLRfPfRcCzE%2B%2BWwKSrcA0jXLQeI%2B23rU37ZyNOKDDyPRR7q0SWCmZ%2FmsS%2F5ez1K3FKX8UeoUZ7pNr4MFDXLAjLhUAWA%2FapNEGb2RchgPKUBPPqV2pHibZliNiQxi6qyOcmuIWPkE0MARXP9N2fmnQ9ejSKreGT%2BZRFrw5MtJIXXWB1AsqIEzBu1u1FAbXVe6SkwkJGP9zOJ6uBwR73IV0CL8vGId%2BvfE5M%2F%2FFpM7N0ATj%2FeajA5WhhoicXRrRUUWDdBlkIIn5f6kgRR%2F4UkanFdSQzQlXdzUfPVcXdZeD8hpgCbwOSjLotiXaZnHCLjG1W7Lw76IUWohmfISeZz7i5HVFYIfl9aOMQTSHhg1O01VluujVLslDjFZ3iCNFm6dPNtptkKp5OQuJ%2FZZYxcFlJPI46fQBnKDcX9eGF%2FLzY9%2FpRwL488vCHSj8vUnXLPh7aZiZcPeVuJEGqpjH9ty1yGxcrdT7Rz4suQ0l%2FMIcliGQcEAqG7HEYg6pzfO6AJPh19Dkj4okVH26GwvftR2auy2mwQyRsZgqb%2BAuQgGlHlt6qDVZLk%2F88eCR99T4epctwN%2FlWqm9hKftzP%2BlDCuziE20NPYgZm1IMFIAWgabiqBj90%2BavIBlErsHNIVdXRWquJPCU6ljrBG1c2MNHo3swGOqUB%2Byl4%2F2aLuu7IpUxtIx5AdRIJkQ47QiKGZpdC%2BvGwzKR6gb4byUgyD2OPYAZmZxvoymPAebGr4oiDCWb9Zm9fNe25%2FDjKUQeiynLqnzWogXJ0%2FWGPx2GF7Kmo8ykfibWy2tqtEevRg0kDId2SHExnPQnymGlwpQqrNp3CZFdpLz%2BKPU%2BOC6N0d%2FEWbMS%2BbdKf9JoQjYDdi8MbvGxCfVheF%2F9McKtR&X-Amz-Signature=953a49c388ca0ddf1630b63911025fc349717851f24829bc63471522fd2ff1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH45BNYL%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu2%2BjPB0LLN2YntrZKpcUQn1EjiKp%2B6hcNwGWEnNcpCAIgQbT3woKsbDq7AHN5KPWEgmWdubQUGimbURPy89VUasQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLRfPfRcCzE%2B%2BWwKSrcA0jXLQeI%2B23rU37ZyNOKDDyPRR7q0SWCmZ%2FmsS%2F5ez1K3FKX8UeoUZ7pNr4MFDXLAjLhUAWA%2FapNEGb2RchgPKUBPPqV2pHibZliNiQxi6qyOcmuIWPkE0MARXP9N2fmnQ9ejSKreGT%2BZRFrw5MtJIXXWB1AsqIEzBu1u1FAbXVe6SkwkJGP9zOJ6uBwR73IV0CL8vGId%2BvfE5M%2F%2FFpM7N0ATj%2FeajA5WhhoicXRrRUUWDdBlkIIn5f6kgRR%2F4UkanFdSQzQlXdzUfPVcXdZeD8hpgCbwOSjLotiXaZnHCLjG1W7Lw76IUWohmfISeZz7i5HVFYIfl9aOMQTSHhg1O01VluujVLslDjFZ3iCNFm6dPNtptkKp5OQuJ%2FZZYxcFlJPI46fQBnKDcX9eGF%2FLzY9%2FpRwL488vCHSj8vUnXLPh7aZiZcPeVuJEGqpjH9ty1yGxcrdT7Rz4suQ0l%2FMIcliGQcEAqG7HEYg6pzfO6AJPh19Dkj4okVH26GwvftR2auy2mwQyRsZgqb%2BAuQgGlHlt6qDVZLk%2F88eCR99T4epctwN%2FlWqm9hKftzP%2BlDCuziE20NPYgZm1IMFIAWgabiqBj90%2BavIBlErsHNIVdXRWquJPCU6ljrBG1c2MNHo3swGOqUB%2Byl4%2F2aLuu7IpUxtIx5AdRIJkQ47QiKGZpdC%2BvGwzKR6gb4byUgyD2OPYAZmZxvoymPAebGr4oiDCWb9Zm9fNe25%2FDjKUQeiynLqnzWogXJ0%2FWGPx2GF7Kmo8ykfibWy2tqtEevRg0kDId2SHExnPQnymGlwpQqrNp3CZFdpLz%2BKPU%2BOC6N0d%2FEWbMS%2BbdKf9JoQjYDdi8MbvGxCfVheF%2F9McKtR&X-Amz-Signature=778f71366a87ae49269aa852702454ca7b96f600ea41d84a346f8111cb6fb375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH45BNYL%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu2%2BjPB0LLN2YntrZKpcUQn1EjiKp%2B6hcNwGWEnNcpCAIgQbT3woKsbDq7AHN5KPWEgmWdubQUGimbURPy89VUasQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLRfPfRcCzE%2B%2BWwKSrcA0jXLQeI%2B23rU37ZyNOKDDyPRR7q0SWCmZ%2FmsS%2F5ez1K3FKX8UeoUZ7pNr4MFDXLAjLhUAWA%2FapNEGb2RchgPKUBPPqV2pHibZliNiQxi6qyOcmuIWPkE0MARXP9N2fmnQ9ejSKreGT%2BZRFrw5MtJIXXWB1AsqIEzBu1u1FAbXVe6SkwkJGP9zOJ6uBwR73IV0CL8vGId%2BvfE5M%2F%2FFpM7N0ATj%2FeajA5WhhoicXRrRUUWDdBlkIIn5f6kgRR%2F4UkanFdSQzQlXdzUfPVcXdZeD8hpgCbwOSjLotiXaZnHCLjG1W7Lw76IUWohmfISeZz7i5HVFYIfl9aOMQTSHhg1O01VluujVLslDjFZ3iCNFm6dPNtptkKp5OQuJ%2FZZYxcFlJPI46fQBnKDcX9eGF%2FLzY9%2FpRwL488vCHSj8vUnXLPh7aZiZcPeVuJEGqpjH9ty1yGxcrdT7Rz4suQ0l%2FMIcliGQcEAqG7HEYg6pzfO6AJPh19Dkj4okVH26GwvftR2auy2mwQyRsZgqb%2BAuQgGlHlt6qDVZLk%2F88eCR99T4epctwN%2FlWqm9hKftzP%2BlDCuziE20NPYgZm1IMFIAWgabiqBj90%2BavIBlErsHNIVdXRWquJPCU6ljrBG1c2MNHo3swGOqUB%2Byl4%2F2aLuu7IpUxtIx5AdRIJkQ47QiKGZpdC%2BvGwzKR6gb4byUgyD2OPYAZmZxvoymPAebGr4oiDCWb9Zm9fNe25%2FDjKUQeiynLqnzWogXJ0%2FWGPx2GF7Kmo8ykfibWy2tqtEevRg0kDId2SHExnPQnymGlwpQqrNp3CZFdpLz%2BKPU%2BOC6N0d%2FEWbMS%2BbdKf9JoQjYDdi8MbvGxCfVheF%2F9McKtR&X-Amz-Signature=7c9150a40874898274e46a5dfd00a6562bdee9c2f2e42aed5033782362bc1988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH45BNYL%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu2%2BjPB0LLN2YntrZKpcUQn1EjiKp%2B6hcNwGWEnNcpCAIgQbT3woKsbDq7AHN5KPWEgmWdubQUGimbURPy89VUasQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLRfPfRcCzE%2B%2BWwKSrcA0jXLQeI%2B23rU37ZyNOKDDyPRR7q0SWCmZ%2FmsS%2F5ez1K3FKX8UeoUZ7pNr4MFDXLAjLhUAWA%2FapNEGb2RchgPKUBPPqV2pHibZliNiQxi6qyOcmuIWPkE0MARXP9N2fmnQ9ejSKreGT%2BZRFrw5MtJIXXWB1AsqIEzBu1u1FAbXVe6SkwkJGP9zOJ6uBwR73IV0CL8vGId%2BvfE5M%2F%2FFpM7N0ATj%2FeajA5WhhoicXRrRUUWDdBlkIIn5f6kgRR%2F4UkanFdSQzQlXdzUfPVcXdZeD8hpgCbwOSjLotiXaZnHCLjG1W7Lw76IUWohmfISeZz7i5HVFYIfl9aOMQTSHhg1O01VluujVLslDjFZ3iCNFm6dPNtptkKp5OQuJ%2FZZYxcFlJPI46fQBnKDcX9eGF%2FLzY9%2FpRwL488vCHSj8vUnXLPh7aZiZcPeVuJEGqpjH9ty1yGxcrdT7Rz4suQ0l%2FMIcliGQcEAqG7HEYg6pzfO6AJPh19Dkj4okVH26GwvftR2auy2mwQyRsZgqb%2BAuQgGlHlt6qDVZLk%2F88eCR99T4epctwN%2FlWqm9hKftzP%2BlDCuziE20NPYgZm1IMFIAWgabiqBj90%2BavIBlErsHNIVdXRWquJPCU6ljrBG1c2MNHo3swGOqUB%2Byl4%2F2aLuu7IpUxtIx5AdRIJkQ47QiKGZpdC%2BvGwzKR6gb4byUgyD2OPYAZmZxvoymPAebGr4oiDCWb9Zm9fNe25%2FDjKUQeiynLqnzWogXJ0%2FWGPx2GF7Kmo8ykfibWy2tqtEevRg0kDId2SHExnPQnymGlwpQqrNp3CZFdpLz%2BKPU%2BOC6N0d%2FEWbMS%2BbdKf9JoQjYDdi8MbvGxCfVheF%2F9McKtR&X-Amz-Signature=57bef8e3d432c28d32acf92394e153b8782aa10b33528b18c363ac846be99e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH45BNYL%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu2%2BjPB0LLN2YntrZKpcUQn1EjiKp%2B6hcNwGWEnNcpCAIgQbT3woKsbDq7AHN5KPWEgmWdubQUGimbURPy89VUasQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLRfPfRcCzE%2B%2BWwKSrcA0jXLQeI%2B23rU37ZyNOKDDyPRR7q0SWCmZ%2FmsS%2F5ez1K3FKX8UeoUZ7pNr4MFDXLAjLhUAWA%2FapNEGb2RchgPKUBPPqV2pHibZliNiQxi6qyOcmuIWPkE0MARXP9N2fmnQ9ejSKreGT%2BZRFrw5MtJIXXWB1AsqIEzBu1u1FAbXVe6SkwkJGP9zOJ6uBwR73IV0CL8vGId%2BvfE5M%2F%2FFpM7N0ATj%2FeajA5WhhoicXRrRUUWDdBlkIIn5f6kgRR%2F4UkanFdSQzQlXdzUfPVcXdZeD8hpgCbwOSjLotiXaZnHCLjG1W7Lw76IUWohmfISeZz7i5HVFYIfl9aOMQTSHhg1O01VluujVLslDjFZ3iCNFm6dPNtptkKp5OQuJ%2FZZYxcFlJPI46fQBnKDcX9eGF%2FLzY9%2FpRwL488vCHSj8vUnXLPh7aZiZcPeVuJEGqpjH9ty1yGxcrdT7Rz4suQ0l%2FMIcliGQcEAqG7HEYg6pzfO6AJPh19Dkj4okVH26GwvftR2auy2mwQyRsZgqb%2BAuQgGlHlt6qDVZLk%2F88eCR99T4epctwN%2FlWqm9hKftzP%2BlDCuziE20NPYgZm1IMFIAWgabiqBj90%2BavIBlErsHNIVdXRWquJPCU6ljrBG1c2MNHo3swGOqUB%2Byl4%2F2aLuu7IpUxtIx5AdRIJkQ47QiKGZpdC%2BvGwzKR6gb4byUgyD2OPYAZmZxvoymPAebGr4oiDCWb9Zm9fNe25%2FDjKUQeiynLqnzWogXJ0%2FWGPx2GF7Kmo8ykfibWy2tqtEevRg0kDId2SHExnPQnymGlwpQqrNp3CZFdpLz%2BKPU%2BOC6N0d%2FEWbMS%2BbdKf9JoQjYDdi8MbvGxCfVheF%2F9McKtR&X-Amz-Signature=b315e51ed2fddb590010cdd48ca62b399d15f141add64088d4dc400e4ee6fe24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH45BNYL%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu2%2BjPB0LLN2YntrZKpcUQn1EjiKp%2B6hcNwGWEnNcpCAIgQbT3woKsbDq7AHN5KPWEgmWdubQUGimbURPy89VUasQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLRfPfRcCzE%2B%2BWwKSrcA0jXLQeI%2B23rU37ZyNOKDDyPRR7q0SWCmZ%2FmsS%2F5ez1K3FKX8UeoUZ7pNr4MFDXLAjLhUAWA%2FapNEGb2RchgPKUBPPqV2pHibZliNiQxi6qyOcmuIWPkE0MARXP9N2fmnQ9ejSKreGT%2BZRFrw5MtJIXXWB1AsqIEzBu1u1FAbXVe6SkwkJGP9zOJ6uBwR73IV0CL8vGId%2BvfE5M%2F%2FFpM7N0ATj%2FeajA5WhhoicXRrRUUWDdBlkIIn5f6kgRR%2F4UkanFdSQzQlXdzUfPVcXdZeD8hpgCbwOSjLotiXaZnHCLjG1W7Lw76IUWohmfISeZz7i5HVFYIfl9aOMQTSHhg1O01VluujVLslDjFZ3iCNFm6dPNtptkKp5OQuJ%2FZZYxcFlJPI46fQBnKDcX9eGF%2FLzY9%2FpRwL488vCHSj8vUnXLPh7aZiZcPeVuJEGqpjH9ty1yGxcrdT7Rz4suQ0l%2FMIcliGQcEAqG7HEYg6pzfO6AJPh19Dkj4okVH26GwvftR2auy2mwQyRsZgqb%2BAuQgGlHlt6qDVZLk%2F88eCR99T4epctwN%2FlWqm9hKftzP%2BlDCuziE20NPYgZm1IMFIAWgabiqBj90%2BavIBlErsHNIVdXRWquJPCU6ljrBG1c2MNHo3swGOqUB%2Byl4%2F2aLuu7IpUxtIx5AdRIJkQ47QiKGZpdC%2BvGwzKR6gb4byUgyD2OPYAZmZxvoymPAebGr4oiDCWb9Zm9fNe25%2FDjKUQeiynLqnzWogXJ0%2FWGPx2GF7Kmo8ykfibWy2tqtEevRg0kDId2SHExnPQnymGlwpQqrNp3CZFdpLz%2BKPU%2BOC6N0d%2FEWbMS%2BbdKf9JoQjYDdi8MbvGxCfVheF%2F9McKtR&X-Amz-Signature=51f6e34df85fb3e93c6fc1c849e553c34885d81d4366676e07e4458a8ad0b5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH45BNYL%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu2%2BjPB0LLN2YntrZKpcUQn1EjiKp%2B6hcNwGWEnNcpCAIgQbT3woKsbDq7AHN5KPWEgmWdubQUGimbURPy89VUasQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLRfPfRcCzE%2B%2BWwKSrcA0jXLQeI%2B23rU37ZyNOKDDyPRR7q0SWCmZ%2FmsS%2F5ez1K3FKX8UeoUZ7pNr4MFDXLAjLhUAWA%2FapNEGb2RchgPKUBPPqV2pHibZliNiQxi6qyOcmuIWPkE0MARXP9N2fmnQ9ejSKreGT%2BZRFrw5MtJIXXWB1AsqIEzBu1u1FAbXVe6SkwkJGP9zOJ6uBwR73IV0CL8vGId%2BvfE5M%2F%2FFpM7N0ATj%2FeajA5WhhoicXRrRUUWDdBlkIIn5f6kgRR%2F4UkanFdSQzQlXdzUfPVcXdZeD8hpgCbwOSjLotiXaZnHCLjG1W7Lw76IUWohmfISeZz7i5HVFYIfl9aOMQTSHhg1O01VluujVLslDjFZ3iCNFm6dPNtptkKp5OQuJ%2FZZYxcFlJPI46fQBnKDcX9eGF%2FLzY9%2FpRwL488vCHSj8vUnXLPh7aZiZcPeVuJEGqpjH9ty1yGxcrdT7Rz4suQ0l%2FMIcliGQcEAqG7HEYg6pzfO6AJPh19Dkj4okVH26GwvftR2auy2mwQyRsZgqb%2BAuQgGlHlt6qDVZLk%2F88eCR99T4epctwN%2FlWqm9hKftzP%2BlDCuziE20NPYgZm1IMFIAWgabiqBj90%2BavIBlErsHNIVdXRWquJPCU6ljrBG1c2MNHo3swGOqUB%2Byl4%2F2aLuu7IpUxtIx5AdRIJkQ47QiKGZpdC%2BvGwzKR6gb4byUgyD2OPYAZmZxvoymPAebGr4oiDCWb9Zm9fNe25%2FDjKUQeiynLqnzWogXJ0%2FWGPx2GF7Kmo8ykfibWy2tqtEevRg0kDId2SHExnPQnymGlwpQqrNp3CZFdpLz%2BKPU%2BOC6N0d%2FEWbMS%2BbdKf9JoQjYDdi8MbvGxCfVheF%2F9McKtR&X-Amz-Signature=e7701d31421e9bcdbc98894c39abfbae87cfbb59589d3181bd556ef0ad7f2c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
