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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBVEBWF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHTgBM3JEfJZw0ONfX2GuyCLSj21KBTd%2FtZfC77Gb3bjAiEAhSGOeOQU6yX0jfufKPJc1Li%2B6l2whzz16VdCOI4Z14gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL%2BzoV0HXywuo%2FUz6SrcA9hKQreSDTAKQK3q6BkxJXOcnjxFm4Lfg7BHhTlHUDeONrVeu74dSCgTzfXonlKK%2BiQDpxiQNxgnnDfpBtXu1DsqO4dP6s0uQ3k994MAnSF%2B%2BFO0iIR7R8m3y9W%2Bh4%2BlRYlCvAiWX8Z5Ofaj5vb7%2BZlEzICf3rSLYrV9693m%2FUx7FCym%2FlgWN%2FVHWUvOo0w7n3WelIQbkp5QBZqnXi1TCIsZsKgQLtKFSCIRLl3gSNiAyfZEUlb5cG6j1zNYsmzD3ghyP3vpMFRf%2BxjCvtSIn8XxwND%2Blnc3dMYp%2BpsDSOVJUjeUxc95KHboZCFIG4Nlw8BFC9ia1DaNRy%2FKbMeWX%2BgGZPIVw8dboyITmRZ%2FFVs8OFZAsB9%2FkLfwWnsk91UmSyjMos2ItKAKHXBxpzvdyRXVF2G82TnW1OZAaZE%2FBM37ESBoFxZKHyIOPz6wi0rD%2BBxukfDWQ3GH595pKztNFhnwQXXu896jrqIkONGab%2FlAzt%2F59X1qlwb013X%2BDDCA%2B9wgfKAUNbojVQf0REb4qCQSr8CmTjFgDReScpBPRDWrIFfYirxrcHI5AMjkGdCM%2FYBKDCxvWDH%2BGupQ2nemS3E%2F1A2Mcsdr%2B2y7on2jR4jR8lQoif5M%2FGjs86g2MOrwy8QGOqUBoawBglIf2VWIqMo7OCPFnRFu5%2BTrY7GB0P9H1xZW9rDkJpUM%2Bo2px%2BCcvTFUeRKh3Y9ib5Y7cMG1mjm8%2BX4hBX7%2BoNg09CqIi7hF7S80CQBVC%2Fj3u80BBq%2BwVEvIItNpjotf%2BtV%2Fhgpkc%2BO%2B%2Bf92zu6X8jkHmxaNJvjjLbzeTjYptOyup9uTfb24Te%2B5fqU75%2B%2FAywYrlYGkzeX6e01KuWou5xHH&X-Amz-Signature=59a825f3e78edd8be405a7789fb00a51bb7d3bd1b6caa95cd409d3983c212094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBVEBWF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHTgBM3JEfJZw0ONfX2GuyCLSj21KBTd%2FtZfC77Gb3bjAiEAhSGOeOQU6yX0jfufKPJc1Li%2B6l2whzz16VdCOI4Z14gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL%2BzoV0HXywuo%2FUz6SrcA9hKQreSDTAKQK3q6BkxJXOcnjxFm4Lfg7BHhTlHUDeONrVeu74dSCgTzfXonlKK%2BiQDpxiQNxgnnDfpBtXu1DsqO4dP6s0uQ3k994MAnSF%2B%2BFO0iIR7R8m3y9W%2Bh4%2BlRYlCvAiWX8Z5Ofaj5vb7%2BZlEzICf3rSLYrV9693m%2FUx7FCym%2FlgWN%2FVHWUvOo0w7n3WelIQbkp5QBZqnXi1TCIsZsKgQLtKFSCIRLl3gSNiAyfZEUlb5cG6j1zNYsmzD3ghyP3vpMFRf%2BxjCvtSIn8XxwND%2Blnc3dMYp%2BpsDSOVJUjeUxc95KHboZCFIG4Nlw8BFC9ia1DaNRy%2FKbMeWX%2BgGZPIVw8dboyITmRZ%2FFVs8OFZAsB9%2FkLfwWnsk91UmSyjMos2ItKAKHXBxpzvdyRXVF2G82TnW1OZAaZE%2FBM37ESBoFxZKHyIOPz6wi0rD%2BBxukfDWQ3GH595pKztNFhnwQXXu896jrqIkONGab%2FlAzt%2F59X1qlwb013X%2BDDCA%2B9wgfKAUNbojVQf0REb4qCQSr8CmTjFgDReScpBPRDWrIFfYirxrcHI5AMjkGdCM%2FYBKDCxvWDH%2BGupQ2nemS3E%2F1A2Mcsdr%2B2y7on2jR4jR8lQoif5M%2FGjs86g2MOrwy8QGOqUBoawBglIf2VWIqMo7OCPFnRFu5%2BTrY7GB0P9H1xZW9rDkJpUM%2Bo2px%2BCcvTFUeRKh3Y9ib5Y7cMG1mjm8%2BX4hBX7%2BoNg09CqIi7hF7S80CQBVC%2Fj3u80BBq%2BwVEvIItNpjotf%2BtV%2Fhgpkc%2BO%2B%2Bf92zu6X8jkHmxaNJvjjLbzeTjYptOyup9uTfb24Te%2B5fqU75%2B%2FAywYrlYGkzeX6e01KuWou5xHH&X-Amz-Signature=e152959f82578b3cc1bc0c42d92ba441bd9fa69c47cffab791d10fe37883cb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBVEBWF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHTgBM3JEfJZw0ONfX2GuyCLSj21KBTd%2FtZfC77Gb3bjAiEAhSGOeOQU6yX0jfufKPJc1Li%2B6l2whzz16VdCOI4Z14gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL%2BzoV0HXywuo%2FUz6SrcA9hKQreSDTAKQK3q6BkxJXOcnjxFm4Lfg7BHhTlHUDeONrVeu74dSCgTzfXonlKK%2BiQDpxiQNxgnnDfpBtXu1DsqO4dP6s0uQ3k994MAnSF%2B%2BFO0iIR7R8m3y9W%2Bh4%2BlRYlCvAiWX8Z5Ofaj5vb7%2BZlEzICf3rSLYrV9693m%2FUx7FCym%2FlgWN%2FVHWUvOo0w7n3WelIQbkp5QBZqnXi1TCIsZsKgQLtKFSCIRLl3gSNiAyfZEUlb5cG6j1zNYsmzD3ghyP3vpMFRf%2BxjCvtSIn8XxwND%2Blnc3dMYp%2BpsDSOVJUjeUxc95KHboZCFIG4Nlw8BFC9ia1DaNRy%2FKbMeWX%2BgGZPIVw8dboyITmRZ%2FFVs8OFZAsB9%2FkLfwWnsk91UmSyjMos2ItKAKHXBxpzvdyRXVF2G82TnW1OZAaZE%2FBM37ESBoFxZKHyIOPz6wi0rD%2BBxukfDWQ3GH595pKztNFhnwQXXu896jrqIkONGab%2FlAzt%2F59X1qlwb013X%2BDDCA%2B9wgfKAUNbojVQf0REb4qCQSr8CmTjFgDReScpBPRDWrIFfYirxrcHI5AMjkGdCM%2FYBKDCxvWDH%2BGupQ2nemS3E%2F1A2Mcsdr%2B2y7on2jR4jR8lQoif5M%2FGjs86g2MOrwy8QGOqUBoawBglIf2VWIqMo7OCPFnRFu5%2BTrY7GB0P9H1xZW9rDkJpUM%2Bo2px%2BCcvTFUeRKh3Y9ib5Y7cMG1mjm8%2BX4hBX7%2BoNg09CqIi7hF7S80CQBVC%2Fj3u80BBq%2BwVEvIItNpjotf%2BtV%2Fhgpkc%2BO%2B%2Bf92zu6X8jkHmxaNJvjjLbzeTjYptOyup9uTfb24Te%2B5fqU75%2B%2FAywYrlYGkzeX6e01KuWou5xHH&X-Amz-Signature=8bddb5d2d68633f3670a87046a7bd048d5f5fd3868affad738742a9e8937de2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBVEBWF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHTgBM3JEfJZw0ONfX2GuyCLSj21KBTd%2FtZfC77Gb3bjAiEAhSGOeOQU6yX0jfufKPJc1Li%2B6l2whzz16VdCOI4Z14gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL%2BzoV0HXywuo%2FUz6SrcA9hKQreSDTAKQK3q6BkxJXOcnjxFm4Lfg7BHhTlHUDeONrVeu74dSCgTzfXonlKK%2BiQDpxiQNxgnnDfpBtXu1DsqO4dP6s0uQ3k994MAnSF%2B%2BFO0iIR7R8m3y9W%2Bh4%2BlRYlCvAiWX8Z5Ofaj5vb7%2BZlEzICf3rSLYrV9693m%2FUx7FCym%2FlgWN%2FVHWUvOo0w7n3WelIQbkp5QBZqnXi1TCIsZsKgQLtKFSCIRLl3gSNiAyfZEUlb5cG6j1zNYsmzD3ghyP3vpMFRf%2BxjCvtSIn8XxwND%2Blnc3dMYp%2BpsDSOVJUjeUxc95KHboZCFIG4Nlw8BFC9ia1DaNRy%2FKbMeWX%2BgGZPIVw8dboyITmRZ%2FFVs8OFZAsB9%2FkLfwWnsk91UmSyjMos2ItKAKHXBxpzvdyRXVF2G82TnW1OZAaZE%2FBM37ESBoFxZKHyIOPz6wi0rD%2BBxukfDWQ3GH595pKztNFhnwQXXu896jrqIkONGab%2FlAzt%2F59X1qlwb013X%2BDDCA%2B9wgfKAUNbojVQf0REb4qCQSr8CmTjFgDReScpBPRDWrIFfYirxrcHI5AMjkGdCM%2FYBKDCxvWDH%2BGupQ2nemS3E%2F1A2Mcsdr%2B2y7on2jR4jR8lQoif5M%2FGjs86g2MOrwy8QGOqUBoawBglIf2VWIqMo7OCPFnRFu5%2BTrY7GB0P9H1xZW9rDkJpUM%2Bo2px%2BCcvTFUeRKh3Y9ib5Y7cMG1mjm8%2BX4hBX7%2BoNg09CqIi7hF7S80CQBVC%2Fj3u80BBq%2BwVEvIItNpjotf%2BtV%2Fhgpkc%2BO%2B%2Bf92zu6X8jkHmxaNJvjjLbzeTjYptOyup9uTfb24Te%2B5fqU75%2B%2FAywYrlYGkzeX6e01KuWou5xHH&X-Amz-Signature=d7aff54640d37825b7512c001502561286a3d9b4380b9d7585794a4c96a2e70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBVEBWF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHTgBM3JEfJZw0ONfX2GuyCLSj21KBTd%2FtZfC77Gb3bjAiEAhSGOeOQU6yX0jfufKPJc1Li%2B6l2whzz16VdCOI4Z14gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL%2BzoV0HXywuo%2FUz6SrcA9hKQreSDTAKQK3q6BkxJXOcnjxFm4Lfg7BHhTlHUDeONrVeu74dSCgTzfXonlKK%2BiQDpxiQNxgnnDfpBtXu1DsqO4dP6s0uQ3k994MAnSF%2B%2BFO0iIR7R8m3y9W%2Bh4%2BlRYlCvAiWX8Z5Ofaj5vb7%2BZlEzICf3rSLYrV9693m%2FUx7FCym%2FlgWN%2FVHWUvOo0w7n3WelIQbkp5QBZqnXi1TCIsZsKgQLtKFSCIRLl3gSNiAyfZEUlb5cG6j1zNYsmzD3ghyP3vpMFRf%2BxjCvtSIn8XxwND%2Blnc3dMYp%2BpsDSOVJUjeUxc95KHboZCFIG4Nlw8BFC9ia1DaNRy%2FKbMeWX%2BgGZPIVw8dboyITmRZ%2FFVs8OFZAsB9%2FkLfwWnsk91UmSyjMos2ItKAKHXBxpzvdyRXVF2G82TnW1OZAaZE%2FBM37ESBoFxZKHyIOPz6wi0rD%2BBxukfDWQ3GH595pKztNFhnwQXXu896jrqIkONGab%2FlAzt%2F59X1qlwb013X%2BDDCA%2B9wgfKAUNbojVQf0REb4qCQSr8CmTjFgDReScpBPRDWrIFfYirxrcHI5AMjkGdCM%2FYBKDCxvWDH%2BGupQ2nemS3E%2F1A2Mcsdr%2B2y7on2jR4jR8lQoif5M%2FGjs86g2MOrwy8QGOqUBoawBglIf2VWIqMo7OCPFnRFu5%2BTrY7GB0P9H1xZW9rDkJpUM%2Bo2px%2BCcvTFUeRKh3Y9ib5Y7cMG1mjm8%2BX4hBX7%2BoNg09CqIi7hF7S80CQBVC%2Fj3u80BBq%2BwVEvIItNpjotf%2BtV%2Fhgpkc%2BO%2B%2Bf92zu6X8jkHmxaNJvjjLbzeTjYptOyup9uTfb24Te%2B5fqU75%2B%2FAywYrlYGkzeX6e01KuWou5xHH&X-Amz-Signature=65b67fa57dc125b9df6dcf54c08bca9f89281778e7461d557d87d9aab67ff4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBVEBWF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHTgBM3JEfJZw0ONfX2GuyCLSj21KBTd%2FtZfC77Gb3bjAiEAhSGOeOQU6yX0jfufKPJc1Li%2B6l2whzz16VdCOI4Z14gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL%2BzoV0HXywuo%2FUz6SrcA9hKQreSDTAKQK3q6BkxJXOcnjxFm4Lfg7BHhTlHUDeONrVeu74dSCgTzfXonlKK%2BiQDpxiQNxgnnDfpBtXu1DsqO4dP6s0uQ3k994MAnSF%2B%2BFO0iIR7R8m3y9W%2Bh4%2BlRYlCvAiWX8Z5Ofaj5vb7%2BZlEzICf3rSLYrV9693m%2FUx7FCym%2FlgWN%2FVHWUvOo0w7n3WelIQbkp5QBZqnXi1TCIsZsKgQLtKFSCIRLl3gSNiAyfZEUlb5cG6j1zNYsmzD3ghyP3vpMFRf%2BxjCvtSIn8XxwND%2Blnc3dMYp%2BpsDSOVJUjeUxc95KHboZCFIG4Nlw8BFC9ia1DaNRy%2FKbMeWX%2BgGZPIVw8dboyITmRZ%2FFVs8OFZAsB9%2FkLfwWnsk91UmSyjMos2ItKAKHXBxpzvdyRXVF2G82TnW1OZAaZE%2FBM37ESBoFxZKHyIOPz6wi0rD%2BBxukfDWQ3GH595pKztNFhnwQXXu896jrqIkONGab%2FlAzt%2F59X1qlwb013X%2BDDCA%2B9wgfKAUNbojVQf0REb4qCQSr8CmTjFgDReScpBPRDWrIFfYirxrcHI5AMjkGdCM%2FYBKDCxvWDH%2BGupQ2nemS3E%2F1A2Mcsdr%2B2y7on2jR4jR8lQoif5M%2FGjs86g2MOrwy8QGOqUBoawBglIf2VWIqMo7OCPFnRFu5%2BTrY7GB0P9H1xZW9rDkJpUM%2Bo2px%2BCcvTFUeRKh3Y9ib5Y7cMG1mjm8%2BX4hBX7%2BoNg09CqIi7hF7S80CQBVC%2Fj3u80BBq%2BwVEvIItNpjotf%2BtV%2Fhgpkc%2BO%2B%2Bf92zu6X8jkHmxaNJvjjLbzeTjYptOyup9uTfb24Te%2B5fqU75%2B%2FAywYrlYGkzeX6e01KuWou5xHH&X-Amz-Signature=6b39ac53b5da0e0dc5fc73339145f71fdff16680a6dbfec5b081b08167703ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBVEBWF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHTgBM3JEfJZw0ONfX2GuyCLSj21KBTd%2FtZfC77Gb3bjAiEAhSGOeOQU6yX0jfufKPJc1Li%2B6l2whzz16VdCOI4Z14gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL%2BzoV0HXywuo%2FUz6SrcA9hKQreSDTAKQK3q6BkxJXOcnjxFm4Lfg7BHhTlHUDeONrVeu74dSCgTzfXonlKK%2BiQDpxiQNxgnnDfpBtXu1DsqO4dP6s0uQ3k994MAnSF%2B%2BFO0iIR7R8m3y9W%2Bh4%2BlRYlCvAiWX8Z5Ofaj5vb7%2BZlEzICf3rSLYrV9693m%2FUx7FCym%2FlgWN%2FVHWUvOo0w7n3WelIQbkp5QBZqnXi1TCIsZsKgQLtKFSCIRLl3gSNiAyfZEUlb5cG6j1zNYsmzD3ghyP3vpMFRf%2BxjCvtSIn8XxwND%2Blnc3dMYp%2BpsDSOVJUjeUxc95KHboZCFIG4Nlw8BFC9ia1DaNRy%2FKbMeWX%2BgGZPIVw8dboyITmRZ%2FFVs8OFZAsB9%2FkLfwWnsk91UmSyjMos2ItKAKHXBxpzvdyRXVF2G82TnW1OZAaZE%2FBM37ESBoFxZKHyIOPz6wi0rD%2BBxukfDWQ3GH595pKztNFhnwQXXu896jrqIkONGab%2FlAzt%2F59X1qlwb013X%2BDDCA%2B9wgfKAUNbojVQf0REb4qCQSr8CmTjFgDReScpBPRDWrIFfYirxrcHI5AMjkGdCM%2FYBKDCxvWDH%2BGupQ2nemS3E%2F1A2Mcsdr%2B2y7on2jR4jR8lQoif5M%2FGjs86g2MOrwy8QGOqUBoawBglIf2VWIqMo7OCPFnRFu5%2BTrY7GB0P9H1xZW9rDkJpUM%2Bo2px%2BCcvTFUeRKh3Y9ib5Y7cMG1mjm8%2BX4hBX7%2BoNg09CqIi7hF7S80CQBVC%2Fj3u80BBq%2BwVEvIItNpjotf%2BtV%2Fhgpkc%2BO%2B%2Bf92zu6X8jkHmxaNJvjjLbzeTjYptOyup9uTfb24Te%2B5fqU75%2B%2FAywYrlYGkzeX6e01KuWou5xHH&X-Amz-Signature=cf5d200e7b2ae36a6b4c185ecc17d91a99008642fb2b7f79c8f04dd89766b697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBVEBWF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHTgBM3JEfJZw0ONfX2GuyCLSj21KBTd%2FtZfC77Gb3bjAiEAhSGOeOQU6yX0jfufKPJc1Li%2B6l2whzz16VdCOI4Z14gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL%2BzoV0HXywuo%2FUz6SrcA9hKQreSDTAKQK3q6BkxJXOcnjxFm4Lfg7BHhTlHUDeONrVeu74dSCgTzfXonlKK%2BiQDpxiQNxgnnDfpBtXu1DsqO4dP6s0uQ3k994MAnSF%2B%2BFO0iIR7R8m3y9W%2Bh4%2BlRYlCvAiWX8Z5Ofaj5vb7%2BZlEzICf3rSLYrV9693m%2FUx7FCym%2FlgWN%2FVHWUvOo0w7n3WelIQbkp5QBZqnXi1TCIsZsKgQLtKFSCIRLl3gSNiAyfZEUlb5cG6j1zNYsmzD3ghyP3vpMFRf%2BxjCvtSIn8XxwND%2Blnc3dMYp%2BpsDSOVJUjeUxc95KHboZCFIG4Nlw8BFC9ia1DaNRy%2FKbMeWX%2BgGZPIVw8dboyITmRZ%2FFVs8OFZAsB9%2FkLfwWnsk91UmSyjMos2ItKAKHXBxpzvdyRXVF2G82TnW1OZAaZE%2FBM37ESBoFxZKHyIOPz6wi0rD%2BBxukfDWQ3GH595pKztNFhnwQXXu896jrqIkONGab%2FlAzt%2F59X1qlwb013X%2BDDCA%2B9wgfKAUNbojVQf0REb4qCQSr8CmTjFgDReScpBPRDWrIFfYirxrcHI5AMjkGdCM%2FYBKDCxvWDH%2BGupQ2nemS3E%2F1A2Mcsdr%2B2y7on2jR4jR8lQoif5M%2FGjs86g2MOrwy8QGOqUBoawBglIf2VWIqMo7OCPFnRFu5%2BTrY7GB0P9H1xZW9rDkJpUM%2Bo2px%2BCcvTFUeRKh3Y9ib5Y7cMG1mjm8%2BX4hBX7%2BoNg09CqIi7hF7S80CQBVC%2Fj3u80BBq%2BwVEvIItNpjotf%2BtV%2Fhgpkc%2BO%2B%2Bf92zu6X8jkHmxaNJvjjLbzeTjYptOyup9uTfb24Te%2B5fqU75%2B%2FAywYrlYGkzeX6e01KuWou5xHH&X-Amz-Signature=30750ab8879bfab8048ea938b8f374333f2bf8ef2be6d93b71088aa821684baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
