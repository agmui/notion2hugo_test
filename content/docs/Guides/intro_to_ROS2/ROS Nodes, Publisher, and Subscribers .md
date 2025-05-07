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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUPP2FY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KfaMJhFvJc7QnG1COwOSbd0URZX1cpFqs7P%2FhqdLkAIhAMoMn0ecaEwiAP0TxSlCr9b6ZhENTerRCeTW4cUw%2F7pFKv8DCGMQABoMNjM3NDIzMTgzODA1Igz73kDzrfaAlDuPxu0q3AO0C6XazuYvw7v%2FgvOH9%2F7gtEZcuyPtEwZ2lT8qO4sLa6SI1D82AUOcB0sCRq%2Bv9et%2FXVbuXQAABsk3zSLo8PF1bkyOWePAj0SDTg2%2FWBUHbNzhTbx4FazcG%2F%2BEqZXQsmceO11CQZA7NAdEbDOHlyFC8r1LbvTH%2F%2F03Nu1e%2BfumtXgLGZ6Qp3AUw8PedLVpqZAo5SIwumFZyNKBx84NAy8uJChaEOo5LRyc7UEhQKq874v%2B8tYXH%2BL6XbaqhKsjBVZN0ZksB2apvoC5O4lVEwHRCsyHIEhpwhuGFQnfgq6hfb2hnpYzo55t4AUIfd40O7qyNPoozRFMHq5wWxat4UdFnBMA3inYA%2FeXjSH71hAqVuIBBN%2BlbFbNiSKcaWAWU6YeW8y%2BtsSbV9i1HsON0OKHhEsoQQc2VHaRoFx7faNOaZhk5j7mwIFtu8EOwWy%2B1P%2F0Q5UHgKFvZL8Z165aPyaMuRRm3WL3yfcl3CQvl%2FpNbajFEjB2Il1LQzONcdfsw1i7rZNhq0Bg7UnJnDD1kZLajh0Rj7j0X6d5imPmkg5xtNk18mJfR7O3SY2dJbRqLM0lFvCKphjRXxOBnzKomBbT%2BtzbCBbKati%2Bxm69uG7TlIryv0nA476db5wNaDD4uO7ABjqkAWhGrKm3u814ERjVm9JRIl%2BqHI4g%2FsPEBr2DrjxQh5Yzdxim7W9Jij%2FOQxbYmXZrRpG7%2BFmFKZAAnXmrFhGYD6n7idtdid1m1aQS4bpjbhHL%2BPImIQ%2BHzF6nsYk2rpcvZJg1%2BNcNhZSiOUNxaVaIBr8flcMOwpjaMxRaztFI49a5ZC1p8YzzhQUoGmgMpJjdwyjL94R1hf1OEmP88dEr02nz%2BuGZ&X-Amz-Signature=4757d9677d944ee808147dca75953940ae31dbddd22d27a4718e30fe21854e55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUPP2FY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KfaMJhFvJc7QnG1COwOSbd0URZX1cpFqs7P%2FhqdLkAIhAMoMn0ecaEwiAP0TxSlCr9b6ZhENTerRCeTW4cUw%2F7pFKv8DCGMQABoMNjM3NDIzMTgzODA1Igz73kDzrfaAlDuPxu0q3AO0C6XazuYvw7v%2FgvOH9%2F7gtEZcuyPtEwZ2lT8qO4sLa6SI1D82AUOcB0sCRq%2Bv9et%2FXVbuXQAABsk3zSLo8PF1bkyOWePAj0SDTg2%2FWBUHbNzhTbx4FazcG%2F%2BEqZXQsmceO11CQZA7NAdEbDOHlyFC8r1LbvTH%2F%2F03Nu1e%2BfumtXgLGZ6Qp3AUw8PedLVpqZAo5SIwumFZyNKBx84NAy8uJChaEOo5LRyc7UEhQKq874v%2B8tYXH%2BL6XbaqhKsjBVZN0ZksB2apvoC5O4lVEwHRCsyHIEhpwhuGFQnfgq6hfb2hnpYzo55t4AUIfd40O7qyNPoozRFMHq5wWxat4UdFnBMA3inYA%2FeXjSH71hAqVuIBBN%2BlbFbNiSKcaWAWU6YeW8y%2BtsSbV9i1HsON0OKHhEsoQQc2VHaRoFx7faNOaZhk5j7mwIFtu8EOwWy%2B1P%2F0Q5UHgKFvZL8Z165aPyaMuRRm3WL3yfcl3CQvl%2FpNbajFEjB2Il1LQzONcdfsw1i7rZNhq0Bg7UnJnDD1kZLajh0Rj7j0X6d5imPmkg5xtNk18mJfR7O3SY2dJbRqLM0lFvCKphjRXxOBnzKomBbT%2BtzbCBbKati%2Bxm69uG7TlIryv0nA476db5wNaDD4uO7ABjqkAWhGrKm3u814ERjVm9JRIl%2BqHI4g%2FsPEBr2DrjxQh5Yzdxim7W9Jij%2FOQxbYmXZrRpG7%2BFmFKZAAnXmrFhGYD6n7idtdid1m1aQS4bpjbhHL%2BPImIQ%2BHzF6nsYk2rpcvZJg1%2BNcNhZSiOUNxaVaIBr8flcMOwpjaMxRaztFI49a5ZC1p8YzzhQUoGmgMpJjdwyjL94R1hf1OEmP88dEr02nz%2BuGZ&X-Amz-Signature=4c4c4934815b865a7ec808e501bab657e2024b810a175c724ea643cd30fc96cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUPP2FY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KfaMJhFvJc7QnG1COwOSbd0URZX1cpFqs7P%2FhqdLkAIhAMoMn0ecaEwiAP0TxSlCr9b6ZhENTerRCeTW4cUw%2F7pFKv8DCGMQABoMNjM3NDIzMTgzODA1Igz73kDzrfaAlDuPxu0q3AO0C6XazuYvw7v%2FgvOH9%2F7gtEZcuyPtEwZ2lT8qO4sLa6SI1D82AUOcB0sCRq%2Bv9et%2FXVbuXQAABsk3zSLo8PF1bkyOWePAj0SDTg2%2FWBUHbNzhTbx4FazcG%2F%2BEqZXQsmceO11CQZA7NAdEbDOHlyFC8r1LbvTH%2F%2F03Nu1e%2BfumtXgLGZ6Qp3AUw8PedLVpqZAo5SIwumFZyNKBx84NAy8uJChaEOo5LRyc7UEhQKq874v%2B8tYXH%2BL6XbaqhKsjBVZN0ZksB2apvoC5O4lVEwHRCsyHIEhpwhuGFQnfgq6hfb2hnpYzo55t4AUIfd40O7qyNPoozRFMHq5wWxat4UdFnBMA3inYA%2FeXjSH71hAqVuIBBN%2BlbFbNiSKcaWAWU6YeW8y%2BtsSbV9i1HsON0OKHhEsoQQc2VHaRoFx7faNOaZhk5j7mwIFtu8EOwWy%2B1P%2F0Q5UHgKFvZL8Z165aPyaMuRRm3WL3yfcl3CQvl%2FpNbajFEjB2Il1LQzONcdfsw1i7rZNhq0Bg7UnJnDD1kZLajh0Rj7j0X6d5imPmkg5xtNk18mJfR7O3SY2dJbRqLM0lFvCKphjRXxOBnzKomBbT%2BtzbCBbKati%2Bxm69uG7TlIryv0nA476db5wNaDD4uO7ABjqkAWhGrKm3u814ERjVm9JRIl%2BqHI4g%2FsPEBr2DrjxQh5Yzdxim7W9Jij%2FOQxbYmXZrRpG7%2BFmFKZAAnXmrFhGYD6n7idtdid1m1aQS4bpjbhHL%2BPImIQ%2BHzF6nsYk2rpcvZJg1%2BNcNhZSiOUNxaVaIBr8flcMOwpjaMxRaztFI49a5ZC1p8YzzhQUoGmgMpJjdwyjL94R1hf1OEmP88dEr02nz%2BuGZ&X-Amz-Signature=3672fb5e756800e13773452914a415c988b2d3b072a68c07a251936d8d91e84c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUPP2FY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KfaMJhFvJc7QnG1COwOSbd0URZX1cpFqs7P%2FhqdLkAIhAMoMn0ecaEwiAP0TxSlCr9b6ZhENTerRCeTW4cUw%2F7pFKv8DCGMQABoMNjM3NDIzMTgzODA1Igz73kDzrfaAlDuPxu0q3AO0C6XazuYvw7v%2FgvOH9%2F7gtEZcuyPtEwZ2lT8qO4sLa6SI1D82AUOcB0sCRq%2Bv9et%2FXVbuXQAABsk3zSLo8PF1bkyOWePAj0SDTg2%2FWBUHbNzhTbx4FazcG%2F%2BEqZXQsmceO11CQZA7NAdEbDOHlyFC8r1LbvTH%2F%2F03Nu1e%2BfumtXgLGZ6Qp3AUw8PedLVpqZAo5SIwumFZyNKBx84NAy8uJChaEOo5LRyc7UEhQKq874v%2B8tYXH%2BL6XbaqhKsjBVZN0ZksB2apvoC5O4lVEwHRCsyHIEhpwhuGFQnfgq6hfb2hnpYzo55t4AUIfd40O7qyNPoozRFMHq5wWxat4UdFnBMA3inYA%2FeXjSH71hAqVuIBBN%2BlbFbNiSKcaWAWU6YeW8y%2BtsSbV9i1HsON0OKHhEsoQQc2VHaRoFx7faNOaZhk5j7mwIFtu8EOwWy%2B1P%2F0Q5UHgKFvZL8Z165aPyaMuRRm3WL3yfcl3CQvl%2FpNbajFEjB2Il1LQzONcdfsw1i7rZNhq0Bg7UnJnDD1kZLajh0Rj7j0X6d5imPmkg5xtNk18mJfR7O3SY2dJbRqLM0lFvCKphjRXxOBnzKomBbT%2BtzbCBbKati%2Bxm69uG7TlIryv0nA476db5wNaDD4uO7ABjqkAWhGrKm3u814ERjVm9JRIl%2BqHI4g%2FsPEBr2DrjxQh5Yzdxim7W9Jij%2FOQxbYmXZrRpG7%2BFmFKZAAnXmrFhGYD6n7idtdid1m1aQS4bpjbhHL%2BPImIQ%2BHzF6nsYk2rpcvZJg1%2BNcNhZSiOUNxaVaIBr8flcMOwpjaMxRaztFI49a5ZC1p8YzzhQUoGmgMpJjdwyjL94R1hf1OEmP88dEr02nz%2BuGZ&X-Amz-Signature=d13b2dfbf5424424bfdbca49bba0ef678448a24f4b68612b36f60f769bbb70fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUPP2FY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KfaMJhFvJc7QnG1COwOSbd0URZX1cpFqs7P%2FhqdLkAIhAMoMn0ecaEwiAP0TxSlCr9b6ZhENTerRCeTW4cUw%2F7pFKv8DCGMQABoMNjM3NDIzMTgzODA1Igz73kDzrfaAlDuPxu0q3AO0C6XazuYvw7v%2FgvOH9%2F7gtEZcuyPtEwZ2lT8qO4sLa6SI1D82AUOcB0sCRq%2Bv9et%2FXVbuXQAABsk3zSLo8PF1bkyOWePAj0SDTg2%2FWBUHbNzhTbx4FazcG%2F%2BEqZXQsmceO11CQZA7NAdEbDOHlyFC8r1LbvTH%2F%2F03Nu1e%2BfumtXgLGZ6Qp3AUw8PedLVpqZAo5SIwumFZyNKBx84NAy8uJChaEOo5LRyc7UEhQKq874v%2B8tYXH%2BL6XbaqhKsjBVZN0ZksB2apvoC5O4lVEwHRCsyHIEhpwhuGFQnfgq6hfb2hnpYzo55t4AUIfd40O7qyNPoozRFMHq5wWxat4UdFnBMA3inYA%2FeXjSH71hAqVuIBBN%2BlbFbNiSKcaWAWU6YeW8y%2BtsSbV9i1HsON0OKHhEsoQQc2VHaRoFx7faNOaZhk5j7mwIFtu8EOwWy%2B1P%2F0Q5UHgKFvZL8Z165aPyaMuRRm3WL3yfcl3CQvl%2FpNbajFEjB2Il1LQzONcdfsw1i7rZNhq0Bg7UnJnDD1kZLajh0Rj7j0X6d5imPmkg5xtNk18mJfR7O3SY2dJbRqLM0lFvCKphjRXxOBnzKomBbT%2BtzbCBbKati%2Bxm69uG7TlIryv0nA476db5wNaDD4uO7ABjqkAWhGrKm3u814ERjVm9JRIl%2BqHI4g%2FsPEBr2DrjxQh5Yzdxim7W9Jij%2FOQxbYmXZrRpG7%2BFmFKZAAnXmrFhGYD6n7idtdid1m1aQS4bpjbhHL%2BPImIQ%2BHzF6nsYk2rpcvZJg1%2BNcNhZSiOUNxaVaIBr8flcMOwpjaMxRaztFI49a5ZC1p8YzzhQUoGmgMpJjdwyjL94R1hf1OEmP88dEr02nz%2BuGZ&X-Amz-Signature=143e517898d7462817b0de13319b08feefa4fa28197929d26860e682a9560d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUPP2FY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KfaMJhFvJc7QnG1COwOSbd0URZX1cpFqs7P%2FhqdLkAIhAMoMn0ecaEwiAP0TxSlCr9b6ZhENTerRCeTW4cUw%2F7pFKv8DCGMQABoMNjM3NDIzMTgzODA1Igz73kDzrfaAlDuPxu0q3AO0C6XazuYvw7v%2FgvOH9%2F7gtEZcuyPtEwZ2lT8qO4sLa6SI1D82AUOcB0sCRq%2Bv9et%2FXVbuXQAABsk3zSLo8PF1bkyOWePAj0SDTg2%2FWBUHbNzhTbx4FazcG%2F%2BEqZXQsmceO11CQZA7NAdEbDOHlyFC8r1LbvTH%2F%2F03Nu1e%2BfumtXgLGZ6Qp3AUw8PedLVpqZAo5SIwumFZyNKBx84NAy8uJChaEOo5LRyc7UEhQKq874v%2B8tYXH%2BL6XbaqhKsjBVZN0ZksB2apvoC5O4lVEwHRCsyHIEhpwhuGFQnfgq6hfb2hnpYzo55t4AUIfd40O7qyNPoozRFMHq5wWxat4UdFnBMA3inYA%2FeXjSH71hAqVuIBBN%2BlbFbNiSKcaWAWU6YeW8y%2BtsSbV9i1HsON0OKHhEsoQQc2VHaRoFx7faNOaZhk5j7mwIFtu8EOwWy%2B1P%2F0Q5UHgKFvZL8Z165aPyaMuRRm3WL3yfcl3CQvl%2FpNbajFEjB2Il1LQzONcdfsw1i7rZNhq0Bg7UnJnDD1kZLajh0Rj7j0X6d5imPmkg5xtNk18mJfR7O3SY2dJbRqLM0lFvCKphjRXxOBnzKomBbT%2BtzbCBbKati%2Bxm69uG7TlIryv0nA476db5wNaDD4uO7ABjqkAWhGrKm3u814ERjVm9JRIl%2BqHI4g%2FsPEBr2DrjxQh5Yzdxim7W9Jij%2FOQxbYmXZrRpG7%2BFmFKZAAnXmrFhGYD6n7idtdid1m1aQS4bpjbhHL%2BPImIQ%2BHzF6nsYk2rpcvZJg1%2BNcNhZSiOUNxaVaIBr8flcMOwpjaMxRaztFI49a5ZC1p8YzzhQUoGmgMpJjdwyjL94R1hf1OEmP88dEr02nz%2BuGZ&X-Amz-Signature=19a46be80e3be47106ac9a8fa8036421bc336af3aacd2922d8f57a701de53b82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUPP2FY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KfaMJhFvJc7QnG1COwOSbd0URZX1cpFqs7P%2FhqdLkAIhAMoMn0ecaEwiAP0TxSlCr9b6ZhENTerRCeTW4cUw%2F7pFKv8DCGMQABoMNjM3NDIzMTgzODA1Igz73kDzrfaAlDuPxu0q3AO0C6XazuYvw7v%2FgvOH9%2F7gtEZcuyPtEwZ2lT8qO4sLa6SI1D82AUOcB0sCRq%2Bv9et%2FXVbuXQAABsk3zSLo8PF1bkyOWePAj0SDTg2%2FWBUHbNzhTbx4FazcG%2F%2BEqZXQsmceO11CQZA7NAdEbDOHlyFC8r1LbvTH%2F%2F03Nu1e%2BfumtXgLGZ6Qp3AUw8PedLVpqZAo5SIwumFZyNKBx84NAy8uJChaEOo5LRyc7UEhQKq874v%2B8tYXH%2BL6XbaqhKsjBVZN0ZksB2apvoC5O4lVEwHRCsyHIEhpwhuGFQnfgq6hfb2hnpYzo55t4AUIfd40O7qyNPoozRFMHq5wWxat4UdFnBMA3inYA%2FeXjSH71hAqVuIBBN%2BlbFbNiSKcaWAWU6YeW8y%2BtsSbV9i1HsON0OKHhEsoQQc2VHaRoFx7faNOaZhk5j7mwIFtu8EOwWy%2B1P%2F0Q5UHgKFvZL8Z165aPyaMuRRm3WL3yfcl3CQvl%2FpNbajFEjB2Il1LQzONcdfsw1i7rZNhq0Bg7UnJnDD1kZLajh0Rj7j0X6d5imPmkg5xtNk18mJfR7O3SY2dJbRqLM0lFvCKphjRXxOBnzKomBbT%2BtzbCBbKati%2Bxm69uG7TlIryv0nA476db5wNaDD4uO7ABjqkAWhGrKm3u814ERjVm9JRIl%2BqHI4g%2FsPEBr2DrjxQh5Yzdxim7W9Jij%2FOQxbYmXZrRpG7%2BFmFKZAAnXmrFhGYD6n7idtdid1m1aQS4bpjbhHL%2BPImIQ%2BHzF6nsYk2rpcvZJg1%2BNcNhZSiOUNxaVaIBr8flcMOwpjaMxRaztFI49a5ZC1p8YzzhQUoGmgMpJjdwyjL94R1hf1OEmP88dEr02nz%2BuGZ&X-Amz-Signature=791b36c156cb15c4d8b09cdab16e872d9deb81814643a819a21863b011a2688b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUPP2FY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KfaMJhFvJc7QnG1COwOSbd0URZX1cpFqs7P%2FhqdLkAIhAMoMn0ecaEwiAP0TxSlCr9b6ZhENTerRCeTW4cUw%2F7pFKv8DCGMQABoMNjM3NDIzMTgzODA1Igz73kDzrfaAlDuPxu0q3AO0C6XazuYvw7v%2FgvOH9%2F7gtEZcuyPtEwZ2lT8qO4sLa6SI1D82AUOcB0sCRq%2Bv9et%2FXVbuXQAABsk3zSLo8PF1bkyOWePAj0SDTg2%2FWBUHbNzhTbx4FazcG%2F%2BEqZXQsmceO11CQZA7NAdEbDOHlyFC8r1LbvTH%2F%2F03Nu1e%2BfumtXgLGZ6Qp3AUw8PedLVpqZAo5SIwumFZyNKBx84NAy8uJChaEOo5LRyc7UEhQKq874v%2B8tYXH%2BL6XbaqhKsjBVZN0ZksB2apvoC5O4lVEwHRCsyHIEhpwhuGFQnfgq6hfb2hnpYzo55t4AUIfd40O7qyNPoozRFMHq5wWxat4UdFnBMA3inYA%2FeXjSH71hAqVuIBBN%2BlbFbNiSKcaWAWU6YeW8y%2BtsSbV9i1HsON0OKHhEsoQQc2VHaRoFx7faNOaZhk5j7mwIFtu8EOwWy%2B1P%2F0Q5UHgKFvZL8Z165aPyaMuRRm3WL3yfcl3CQvl%2FpNbajFEjB2Il1LQzONcdfsw1i7rZNhq0Bg7UnJnDD1kZLajh0Rj7j0X6d5imPmkg5xtNk18mJfR7O3SY2dJbRqLM0lFvCKphjRXxOBnzKomBbT%2BtzbCBbKati%2Bxm69uG7TlIryv0nA476db5wNaDD4uO7ABjqkAWhGrKm3u814ERjVm9JRIl%2BqHI4g%2FsPEBr2DrjxQh5Yzdxim7W9Jij%2FOQxbYmXZrRpG7%2BFmFKZAAnXmrFhGYD6n7idtdid1m1aQS4bpjbhHL%2BPImIQ%2BHzF6nsYk2rpcvZJg1%2BNcNhZSiOUNxaVaIBr8flcMOwpjaMxRaztFI49a5ZC1p8YzzhQUoGmgMpJjdwyjL94R1hf1OEmP88dEr02nz%2BuGZ&X-Amz-Signature=b7cc3e0599a93c9ce1e18684ef426d302a9896be5598d40ea1556ad47c1ffb35&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
