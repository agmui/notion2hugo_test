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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGWPTPH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLK1qCDI5RSUyqof2bwPomhs%2Fw1Jo9mpFP3zPN54HS%2FAiA3sH1L%2BtIDDB2SlQFLrW4h%2F7COumnwj0iSmbEYxW1Zsir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMqVreYHt1HvzNpwxGKtwDoQE%2FGqk8hZy76IijH7UJH%2B4KKzKa8PJ8IsuOHcP0Y%2BeeMesydhNsx%2FqqSAJRJBZZcmxZSu6rHmKEdpSyLjorM5rv%2Bo0zqLloQMno4yW5w3kRCqkyRHlsWbDb%2Fa4Q2oDviChjyEIS9uX3N5QplqzR3H6LPQg3eveyMbGI%2FckN%2BE2Axmu8YpX95kBEas8lNAaXSoIVTj%2FiUd5T%2FPfDtLXZKP8lZHH9KRf86kxIH8RKONshNhKGIu6dc9fccyDZDiIj9YKhFnQLK4QNYNs1NcE3TgtjQzq%2B1uRoKGZAHyhuShimGoX9joFhQO0QM187Xg9rnMXmJgBqEJPqFZT0ft0BibI7nDmPDEf7CpVt7ADY1yAnlJ4vWPb3WPqmV4iLdpGvT23NEobDg7BaSXT3nZ1Ht7euZemavtTo3w4x496c95fn6j07gBZNkYJDHECuRSL77TWMmsQgiqsSTJ2eBQc0tsUtkR7vgUGaABwxK5IPHCuhXyTS7C9jdLxk3QJ0OCqC9Oe%2B9e7h1JRNRDu46y9Ret%2BD6HpTD4inqArtfdAubQ1gfIu4A3r3FVEkdspnYOdGHO8bJ0ObwvbeYFMgMxA1TTAwjCqRdAmXy89ny51nJwyE2Xe9JipEljv2QaUwuvCLwgY6pgFbIdLOBAigEiJG5K%2FgQ%2B5sTVHq9AQtTQRQByL%2Fbys77lwGqkdcopHvatUmA4Ey7jlHc5cgCJ3Qm7Xu5bO2BxgpHhSMmZ8k7uOPa49X9Sj%2BjLTroyUi4B4TRXHmBGXQgXRQXFNuzMLvUrrjeMhkjhhiqefWSbjLG%2F3gh5590NrQrK%2FKDrn0Pn9gDRmihEZKV6Y60IejrbfRqhz6koPeipiTf%2F7pfPKQ&X-Amz-Signature=8d2c759f2c820b4532c59ab52d3703ee51d0e4395bf171f68b5d9148f895cf91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGWPTPH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLK1qCDI5RSUyqof2bwPomhs%2Fw1Jo9mpFP3zPN54HS%2FAiA3sH1L%2BtIDDB2SlQFLrW4h%2F7COumnwj0iSmbEYxW1Zsir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMqVreYHt1HvzNpwxGKtwDoQE%2FGqk8hZy76IijH7UJH%2B4KKzKa8PJ8IsuOHcP0Y%2BeeMesydhNsx%2FqqSAJRJBZZcmxZSu6rHmKEdpSyLjorM5rv%2Bo0zqLloQMno4yW5w3kRCqkyRHlsWbDb%2Fa4Q2oDviChjyEIS9uX3N5QplqzR3H6LPQg3eveyMbGI%2FckN%2BE2Axmu8YpX95kBEas8lNAaXSoIVTj%2FiUd5T%2FPfDtLXZKP8lZHH9KRf86kxIH8RKONshNhKGIu6dc9fccyDZDiIj9YKhFnQLK4QNYNs1NcE3TgtjQzq%2B1uRoKGZAHyhuShimGoX9joFhQO0QM187Xg9rnMXmJgBqEJPqFZT0ft0BibI7nDmPDEf7CpVt7ADY1yAnlJ4vWPb3WPqmV4iLdpGvT23NEobDg7BaSXT3nZ1Ht7euZemavtTo3w4x496c95fn6j07gBZNkYJDHECuRSL77TWMmsQgiqsSTJ2eBQc0tsUtkR7vgUGaABwxK5IPHCuhXyTS7C9jdLxk3QJ0OCqC9Oe%2B9e7h1JRNRDu46y9Ret%2BD6HpTD4inqArtfdAubQ1gfIu4A3r3FVEkdspnYOdGHO8bJ0ObwvbeYFMgMxA1TTAwjCqRdAmXy89ny51nJwyE2Xe9JipEljv2QaUwuvCLwgY6pgFbIdLOBAigEiJG5K%2FgQ%2B5sTVHq9AQtTQRQByL%2Fbys77lwGqkdcopHvatUmA4Ey7jlHc5cgCJ3Qm7Xu5bO2BxgpHhSMmZ8k7uOPa49X9Sj%2BjLTroyUi4B4TRXHmBGXQgXRQXFNuzMLvUrrjeMhkjhhiqefWSbjLG%2F3gh5590NrQrK%2FKDrn0Pn9gDRmihEZKV6Y60IejrbfRqhz6koPeipiTf%2F7pfPKQ&X-Amz-Signature=3af10dc3a476e9442730dc6dd7628d0419fc3a6494968252e6ba0d42436e27ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGWPTPH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLK1qCDI5RSUyqof2bwPomhs%2Fw1Jo9mpFP3zPN54HS%2FAiA3sH1L%2BtIDDB2SlQFLrW4h%2F7COumnwj0iSmbEYxW1Zsir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMqVreYHt1HvzNpwxGKtwDoQE%2FGqk8hZy76IijH7UJH%2B4KKzKa8PJ8IsuOHcP0Y%2BeeMesydhNsx%2FqqSAJRJBZZcmxZSu6rHmKEdpSyLjorM5rv%2Bo0zqLloQMno4yW5w3kRCqkyRHlsWbDb%2Fa4Q2oDviChjyEIS9uX3N5QplqzR3H6LPQg3eveyMbGI%2FckN%2BE2Axmu8YpX95kBEas8lNAaXSoIVTj%2FiUd5T%2FPfDtLXZKP8lZHH9KRf86kxIH8RKONshNhKGIu6dc9fccyDZDiIj9YKhFnQLK4QNYNs1NcE3TgtjQzq%2B1uRoKGZAHyhuShimGoX9joFhQO0QM187Xg9rnMXmJgBqEJPqFZT0ft0BibI7nDmPDEf7CpVt7ADY1yAnlJ4vWPb3WPqmV4iLdpGvT23NEobDg7BaSXT3nZ1Ht7euZemavtTo3w4x496c95fn6j07gBZNkYJDHECuRSL77TWMmsQgiqsSTJ2eBQc0tsUtkR7vgUGaABwxK5IPHCuhXyTS7C9jdLxk3QJ0OCqC9Oe%2B9e7h1JRNRDu46y9Ret%2BD6HpTD4inqArtfdAubQ1gfIu4A3r3FVEkdspnYOdGHO8bJ0ObwvbeYFMgMxA1TTAwjCqRdAmXy89ny51nJwyE2Xe9JipEljv2QaUwuvCLwgY6pgFbIdLOBAigEiJG5K%2FgQ%2B5sTVHq9AQtTQRQByL%2Fbys77lwGqkdcopHvatUmA4Ey7jlHc5cgCJ3Qm7Xu5bO2BxgpHhSMmZ8k7uOPa49X9Sj%2BjLTroyUi4B4TRXHmBGXQgXRQXFNuzMLvUrrjeMhkjhhiqefWSbjLG%2F3gh5590NrQrK%2FKDrn0Pn9gDRmihEZKV6Y60IejrbfRqhz6koPeipiTf%2F7pfPKQ&X-Amz-Signature=aba903c9722ad5d679b558855dd833c026fb6cb070686bc743eb721d48d37884&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGWPTPH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLK1qCDI5RSUyqof2bwPomhs%2Fw1Jo9mpFP3zPN54HS%2FAiA3sH1L%2BtIDDB2SlQFLrW4h%2F7COumnwj0iSmbEYxW1Zsir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMqVreYHt1HvzNpwxGKtwDoQE%2FGqk8hZy76IijH7UJH%2B4KKzKa8PJ8IsuOHcP0Y%2BeeMesydhNsx%2FqqSAJRJBZZcmxZSu6rHmKEdpSyLjorM5rv%2Bo0zqLloQMno4yW5w3kRCqkyRHlsWbDb%2Fa4Q2oDviChjyEIS9uX3N5QplqzR3H6LPQg3eveyMbGI%2FckN%2BE2Axmu8YpX95kBEas8lNAaXSoIVTj%2FiUd5T%2FPfDtLXZKP8lZHH9KRf86kxIH8RKONshNhKGIu6dc9fccyDZDiIj9YKhFnQLK4QNYNs1NcE3TgtjQzq%2B1uRoKGZAHyhuShimGoX9joFhQO0QM187Xg9rnMXmJgBqEJPqFZT0ft0BibI7nDmPDEf7CpVt7ADY1yAnlJ4vWPb3WPqmV4iLdpGvT23NEobDg7BaSXT3nZ1Ht7euZemavtTo3w4x496c95fn6j07gBZNkYJDHECuRSL77TWMmsQgiqsSTJ2eBQc0tsUtkR7vgUGaABwxK5IPHCuhXyTS7C9jdLxk3QJ0OCqC9Oe%2B9e7h1JRNRDu46y9Ret%2BD6HpTD4inqArtfdAubQ1gfIu4A3r3FVEkdspnYOdGHO8bJ0ObwvbeYFMgMxA1TTAwjCqRdAmXy89ny51nJwyE2Xe9JipEljv2QaUwuvCLwgY6pgFbIdLOBAigEiJG5K%2FgQ%2B5sTVHq9AQtTQRQByL%2Fbys77lwGqkdcopHvatUmA4Ey7jlHc5cgCJ3Qm7Xu5bO2BxgpHhSMmZ8k7uOPa49X9Sj%2BjLTroyUi4B4TRXHmBGXQgXRQXFNuzMLvUrrjeMhkjhhiqefWSbjLG%2F3gh5590NrQrK%2FKDrn0Pn9gDRmihEZKV6Y60IejrbfRqhz6koPeipiTf%2F7pfPKQ&X-Amz-Signature=c0d62b6190970a62e3280d9fa0243df9015297242aa47980c363712db61b1133&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGWPTPH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLK1qCDI5RSUyqof2bwPomhs%2Fw1Jo9mpFP3zPN54HS%2FAiA3sH1L%2BtIDDB2SlQFLrW4h%2F7COumnwj0iSmbEYxW1Zsir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMqVreYHt1HvzNpwxGKtwDoQE%2FGqk8hZy76IijH7UJH%2B4KKzKa8PJ8IsuOHcP0Y%2BeeMesydhNsx%2FqqSAJRJBZZcmxZSu6rHmKEdpSyLjorM5rv%2Bo0zqLloQMno4yW5w3kRCqkyRHlsWbDb%2Fa4Q2oDviChjyEIS9uX3N5QplqzR3H6LPQg3eveyMbGI%2FckN%2BE2Axmu8YpX95kBEas8lNAaXSoIVTj%2FiUd5T%2FPfDtLXZKP8lZHH9KRf86kxIH8RKONshNhKGIu6dc9fccyDZDiIj9YKhFnQLK4QNYNs1NcE3TgtjQzq%2B1uRoKGZAHyhuShimGoX9joFhQO0QM187Xg9rnMXmJgBqEJPqFZT0ft0BibI7nDmPDEf7CpVt7ADY1yAnlJ4vWPb3WPqmV4iLdpGvT23NEobDg7BaSXT3nZ1Ht7euZemavtTo3w4x496c95fn6j07gBZNkYJDHECuRSL77TWMmsQgiqsSTJ2eBQc0tsUtkR7vgUGaABwxK5IPHCuhXyTS7C9jdLxk3QJ0OCqC9Oe%2B9e7h1JRNRDu46y9Ret%2BD6HpTD4inqArtfdAubQ1gfIu4A3r3FVEkdspnYOdGHO8bJ0ObwvbeYFMgMxA1TTAwjCqRdAmXy89ny51nJwyE2Xe9JipEljv2QaUwuvCLwgY6pgFbIdLOBAigEiJG5K%2FgQ%2B5sTVHq9AQtTQRQByL%2Fbys77lwGqkdcopHvatUmA4Ey7jlHc5cgCJ3Qm7Xu5bO2BxgpHhSMmZ8k7uOPa49X9Sj%2BjLTroyUi4B4TRXHmBGXQgXRQXFNuzMLvUrrjeMhkjhhiqefWSbjLG%2F3gh5590NrQrK%2FKDrn0Pn9gDRmihEZKV6Y60IejrbfRqhz6koPeipiTf%2F7pfPKQ&X-Amz-Signature=ae8d71f5fdadc00bfb84fd9594b288b7fecf8f07f19ca99121279e32dd0ac85e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGWPTPH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLK1qCDI5RSUyqof2bwPomhs%2Fw1Jo9mpFP3zPN54HS%2FAiA3sH1L%2BtIDDB2SlQFLrW4h%2F7COumnwj0iSmbEYxW1Zsir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMqVreYHt1HvzNpwxGKtwDoQE%2FGqk8hZy76IijH7UJH%2B4KKzKa8PJ8IsuOHcP0Y%2BeeMesydhNsx%2FqqSAJRJBZZcmxZSu6rHmKEdpSyLjorM5rv%2Bo0zqLloQMno4yW5w3kRCqkyRHlsWbDb%2Fa4Q2oDviChjyEIS9uX3N5QplqzR3H6LPQg3eveyMbGI%2FckN%2BE2Axmu8YpX95kBEas8lNAaXSoIVTj%2FiUd5T%2FPfDtLXZKP8lZHH9KRf86kxIH8RKONshNhKGIu6dc9fccyDZDiIj9YKhFnQLK4QNYNs1NcE3TgtjQzq%2B1uRoKGZAHyhuShimGoX9joFhQO0QM187Xg9rnMXmJgBqEJPqFZT0ft0BibI7nDmPDEf7CpVt7ADY1yAnlJ4vWPb3WPqmV4iLdpGvT23NEobDg7BaSXT3nZ1Ht7euZemavtTo3w4x496c95fn6j07gBZNkYJDHECuRSL77TWMmsQgiqsSTJ2eBQc0tsUtkR7vgUGaABwxK5IPHCuhXyTS7C9jdLxk3QJ0OCqC9Oe%2B9e7h1JRNRDu46y9Ret%2BD6HpTD4inqArtfdAubQ1gfIu4A3r3FVEkdspnYOdGHO8bJ0ObwvbeYFMgMxA1TTAwjCqRdAmXy89ny51nJwyE2Xe9JipEljv2QaUwuvCLwgY6pgFbIdLOBAigEiJG5K%2FgQ%2B5sTVHq9AQtTQRQByL%2Fbys77lwGqkdcopHvatUmA4Ey7jlHc5cgCJ3Qm7Xu5bO2BxgpHhSMmZ8k7uOPa49X9Sj%2BjLTroyUi4B4TRXHmBGXQgXRQXFNuzMLvUrrjeMhkjhhiqefWSbjLG%2F3gh5590NrQrK%2FKDrn0Pn9gDRmihEZKV6Y60IejrbfRqhz6koPeipiTf%2F7pfPKQ&X-Amz-Signature=06721088031011f1e11293ef51c10253e890d960fc1e7efff0441c481f278d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGWPTPH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLK1qCDI5RSUyqof2bwPomhs%2Fw1Jo9mpFP3zPN54HS%2FAiA3sH1L%2BtIDDB2SlQFLrW4h%2F7COumnwj0iSmbEYxW1Zsir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMqVreYHt1HvzNpwxGKtwDoQE%2FGqk8hZy76IijH7UJH%2B4KKzKa8PJ8IsuOHcP0Y%2BeeMesydhNsx%2FqqSAJRJBZZcmxZSu6rHmKEdpSyLjorM5rv%2Bo0zqLloQMno4yW5w3kRCqkyRHlsWbDb%2Fa4Q2oDviChjyEIS9uX3N5QplqzR3H6LPQg3eveyMbGI%2FckN%2BE2Axmu8YpX95kBEas8lNAaXSoIVTj%2FiUd5T%2FPfDtLXZKP8lZHH9KRf86kxIH8RKONshNhKGIu6dc9fccyDZDiIj9YKhFnQLK4QNYNs1NcE3TgtjQzq%2B1uRoKGZAHyhuShimGoX9joFhQO0QM187Xg9rnMXmJgBqEJPqFZT0ft0BibI7nDmPDEf7CpVt7ADY1yAnlJ4vWPb3WPqmV4iLdpGvT23NEobDg7BaSXT3nZ1Ht7euZemavtTo3w4x496c95fn6j07gBZNkYJDHECuRSL77TWMmsQgiqsSTJ2eBQc0tsUtkR7vgUGaABwxK5IPHCuhXyTS7C9jdLxk3QJ0OCqC9Oe%2B9e7h1JRNRDu46y9Ret%2BD6HpTD4inqArtfdAubQ1gfIu4A3r3FVEkdspnYOdGHO8bJ0ObwvbeYFMgMxA1TTAwjCqRdAmXy89ny51nJwyE2Xe9JipEljv2QaUwuvCLwgY6pgFbIdLOBAigEiJG5K%2FgQ%2B5sTVHq9AQtTQRQByL%2Fbys77lwGqkdcopHvatUmA4Ey7jlHc5cgCJ3Qm7Xu5bO2BxgpHhSMmZ8k7uOPa49X9Sj%2BjLTroyUi4B4TRXHmBGXQgXRQXFNuzMLvUrrjeMhkjhhiqefWSbjLG%2F3gh5590NrQrK%2FKDrn0Pn9gDRmihEZKV6Y60IejrbfRqhz6koPeipiTf%2F7pfPKQ&X-Amz-Signature=db68e80fda1f8af2096bd46bb9c5d6aa611456b402ed67c9b5ee890e774b5999&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGWPTPH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLK1qCDI5RSUyqof2bwPomhs%2Fw1Jo9mpFP3zPN54HS%2FAiA3sH1L%2BtIDDB2SlQFLrW4h%2F7COumnwj0iSmbEYxW1Zsir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMqVreYHt1HvzNpwxGKtwDoQE%2FGqk8hZy76IijH7UJH%2B4KKzKa8PJ8IsuOHcP0Y%2BeeMesydhNsx%2FqqSAJRJBZZcmxZSu6rHmKEdpSyLjorM5rv%2Bo0zqLloQMno4yW5w3kRCqkyRHlsWbDb%2Fa4Q2oDviChjyEIS9uX3N5QplqzR3H6LPQg3eveyMbGI%2FckN%2BE2Axmu8YpX95kBEas8lNAaXSoIVTj%2FiUd5T%2FPfDtLXZKP8lZHH9KRf86kxIH8RKONshNhKGIu6dc9fccyDZDiIj9YKhFnQLK4QNYNs1NcE3TgtjQzq%2B1uRoKGZAHyhuShimGoX9joFhQO0QM187Xg9rnMXmJgBqEJPqFZT0ft0BibI7nDmPDEf7CpVt7ADY1yAnlJ4vWPb3WPqmV4iLdpGvT23NEobDg7BaSXT3nZ1Ht7euZemavtTo3w4x496c95fn6j07gBZNkYJDHECuRSL77TWMmsQgiqsSTJ2eBQc0tsUtkR7vgUGaABwxK5IPHCuhXyTS7C9jdLxk3QJ0OCqC9Oe%2B9e7h1JRNRDu46y9Ret%2BD6HpTD4inqArtfdAubQ1gfIu4A3r3FVEkdspnYOdGHO8bJ0ObwvbeYFMgMxA1TTAwjCqRdAmXy89ny51nJwyE2Xe9JipEljv2QaUwuvCLwgY6pgFbIdLOBAigEiJG5K%2FgQ%2B5sTVHq9AQtTQRQByL%2Fbys77lwGqkdcopHvatUmA4Ey7jlHc5cgCJ3Qm7Xu5bO2BxgpHhSMmZ8k7uOPa49X9Sj%2BjLTroyUi4B4TRXHmBGXQgXRQXFNuzMLvUrrjeMhkjhhiqefWSbjLG%2F3gh5590NrQrK%2FKDrn0Pn9gDRmihEZKV6Y60IejrbfRqhz6koPeipiTf%2F7pfPKQ&X-Amz-Signature=e04c1af0f95dd8d70d7f039f705a9ead220ee9f6d3b25b32bf051bdc3cb0dbf3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
