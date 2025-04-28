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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD7PKAQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99ipT0kq9H6gkqcy4gWS4jIpOSRymwmD3Qid2VwRQZwIhAJhvkjL3k87YbyW8kPUBdqOWBz87ZQEXQRdpByIjLaRYKv8DCHQQABoMNjM3NDIzMTgzODA1IgzWBMaaYc0lfUq9X0cq3AMzPfrnX20EHALnhq6um4TZkGA%2F9lLrcjJBQwZHHbnlAC9xTC6XSik2g8TGEkB2CyKoraphY5e4Q%2FqMvMcnns9A7VD3pkjlAd3yLNEjVG24DTlD2JAam8t3oiN%2BoCkA2cv9Y5PdPrI9z1sON7wBlvlzOZWq%2FOtkIFY7LpHwyBI4ryUuY97MOwOwsU2pYNSAN4hahOAXxKatQORSw4rctmuIYcvDfbOAYbEPz2kLz%2BXPNfew4tepdl1aZG6yfvglcQi3a9528ioLBEMyxGmWpX1oK4Ksqvxt3sK9UgfH2SBvGsYEJuo2ucngm4tp0NRHrrRqG7%2FxyMFQxigtGH4ldkvAIn9%2BNkgjNndfHMAX0miFeCEB%2BJw8V8Ao5Je1CKeQK4zWwd7R9V3kxLlyc%2B2j9oFoPlIf%2BefNaS%2BcUJVjKKXR53Z9%2BGRnf5xWSGv45Cc%2BtBo5752lKkaqbwQAt18NBwNkHbD%2BcDhYt8FlzYg%2BBNyWIyXJ6QureY%2BWZUxI0CvRoJvXj4cmtMh08x8%2FnpQmJdqbTjcuBvjcyEviDOOxDXDGZQUk%2Fx56TOJM6d6dBciIP95pZvGJdPn3zzqOgbh4sE%2FZQ6zwZ2UmGDfJGEFgWLQQ9GJeWo8ZAuTa0vFFtTC3yL3ABjqkATRYJRtMDnQJMVS%2F1s%2BXOOmp7JfUHrx0zsTebsUZdqgmLrPefL01nXL54CxH4r4w0%2BSuumvRhua8gKMOgP3qevBlmKnILb8FlKYn8%2BZZhIHlSGbBVjtlrBp5fLCqGBLsIFJ2d5bjwiGNhU%2F8cEnO%2Fig8p6ZS3AuKcdYu27lzokQc3bqeWo%2BapxM2mDUNVdRvoGXBnXux0bzFEO7dQz%2FYyMa5RUca&X-Amz-Signature=51b27afbf27404a42b7201e99abe67b7e8d3b7f00178b7e37208ede88ffc533b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD7PKAQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99ipT0kq9H6gkqcy4gWS4jIpOSRymwmD3Qid2VwRQZwIhAJhvkjL3k87YbyW8kPUBdqOWBz87ZQEXQRdpByIjLaRYKv8DCHQQABoMNjM3NDIzMTgzODA1IgzWBMaaYc0lfUq9X0cq3AMzPfrnX20EHALnhq6um4TZkGA%2F9lLrcjJBQwZHHbnlAC9xTC6XSik2g8TGEkB2CyKoraphY5e4Q%2FqMvMcnns9A7VD3pkjlAd3yLNEjVG24DTlD2JAam8t3oiN%2BoCkA2cv9Y5PdPrI9z1sON7wBlvlzOZWq%2FOtkIFY7LpHwyBI4ryUuY97MOwOwsU2pYNSAN4hahOAXxKatQORSw4rctmuIYcvDfbOAYbEPz2kLz%2BXPNfew4tepdl1aZG6yfvglcQi3a9528ioLBEMyxGmWpX1oK4Ksqvxt3sK9UgfH2SBvGsYEJuo2ucngm4tp0NRHrrRqG7%2FxyMFQxigtGH4ldkvAIn9%2BNkgjNndfHMAX0miFeCEB%2BJw8V8Ao5Je1CKeQK4zWwd7R9V3kxLlyc%2B2j9oFoPlIf%2BefNaS%2BcUJVjKKXR53Z9%2BGRnf5xWSGv45Cc%2BtBo5752lKkaqbwQAt18NBwNkHbD%2BcDhYt8FlzYg%2BBNyWIyXJ6QureY%2BWZUxI0CvRoJvXj4cmtMh08x8%2FnpQmJdqbTjcuBvjcyEviDOOxDXDGZQUk%2Fx56TOJM6d6dBciIP95pZvGJdPn3zzqOgbh4sE%2FZQ6zwZ2UmGDfJGEFgWLQQ9GJeWo8ZAuTa0vFFtTC3yL3ABjqkATRYJRtMDnQJMVS%2F1s%2BXOOmp7JfUHrx0zsTebsUZdqgmLrPefL01nXL54CxH4r4w0%2BSuumvRhua8gKMOgP3qevBlmKnILb8FlKYn8%2BZZhIHlSGbBVjtlrBp5fLCqGBLsIFJ2d5bjwiGNhU%2F8cEnO%2Fig8p6ZS3AuKcdYu27lzokQc3bqeWo%2BapxM2mDUNVdRvoGXBnXux0bzFEO7dQz%2FYyMa5RUca&X-Amz-Signature=7e997c112f832441af18d278dc86dce4b4ec9cf36a890538ed639243cc59528e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD7PKAQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99ipT0kq9H6gkqcy4gWS4jIpOSRymwmD3Qid2VwRQZwIhAJhvkjL3k87YbyW8kPUBdqOWBz87ZQEXQRdpByIjLaRYKv8DCHQQABoMNjM3NDIzMTgzODA1IgzWBMaaYc0lfUq9X0cq3AMzPfrnX20EHALnhq6um4TZkGA%2F9lLrcjJBQwZHHbnlAC9xTC6XSik2g8TGEkB2CyKoraphY5e4Q%2FqMvMcnns9A7VD3pkjlAd3yLNEjVG24DTlD2JAam8t3oiN%2BoCkA2cv9Y5PdPrI9z1sON7wBlvlzOZWq%2FOtkIFY7LpHwyBI4ryUuY97MOwOwsU2pYNSAN4hahOAXxKatQORSw4rctmuIYcvDfbOAYbEPz2kLz%2BXPNfew4tepdl1aZG6yfvglcQi3a9528ioLBEMyxGmWpX1oK4Ksqvxt3sK9UgfH2SBvGsYEJuo2ucngm4tp0NRHrrRqG7%2FxyMFQxigtGH4ldkvAIn9%2BNkgjNndfHMAX0miFeCEB%2BJw8V8Ao5Je1CKeQK4zWwd7R9V3kxLlyc%2B2j9oFoPlIf%2BefNaS%2BcUJVjKKXR53Z9%2BGRnf5xWSGv45Cc%2BtBo5752lKkaqbwQAt18NBwNkHbD%2BcDhYt8FlzYg%2BBNyWIyXJ6QureY%2BWZUxI0CvRoJvXj4cmtMh08x8%2FnpQmJdqbTjcuBvjcyEviDOOxDXDGZQUk%2Fx56TOJM6d6dBciIP95pZvGJdPn3zzqOgbh4sE%2FZQ6zwZ2UmGDfJGEFgWLQQ9GJeWo8ZAuTa0vFFtTC3yL3ABjqkATRYJRtMDnQJMVS%2F1s%2BXOOmp7JfUHrx0zsTebsUZdqgmLrPefL01nXL54CxH4r4w0%2BSuumvRhua8gKMOgP3qevBlmKnILb8FlKYn8%2BZZhIHlSGbBVjtlrBp5fLCqGBLsIFJ2d5bjwiGNhU%2F8cEnO%2Fig8p6ZS3AuKcdYu27lzokQc3bqeWo%2BapxM2mDUNVdRvoGXBnXux0bzFEO7dQz%2FYyMa5RUca&X-Amz-Signature=068cc09dfe9f91e600f8a85e579b11045232fb8ed8742958211226036bf54903&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD7PKAQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99ipT0kq9H6gkqcy4gWS4jIpOSRymwmD3Qid2VwRQZwIhAJhvkjL3k87YbyW8kPUBdqOWBz87ZQEXQRdpByIjLaRYKv8DCHQQABoMNjM3NDIzMTgzODA1IgzWBMaaYc0lfUq9X0cq3AMzPfrnX20EHALnhq6um4TZkGA%2F9lLrcjJBQwZHHbnlAC9xTC6XSik2g8TGEkB2CyKoraphY5e4Q%2FqMvMcnns9A7VD3pkjlAd3yLNEjVG24DTlD2JAam8t3oiN%2BoCkA2cv9Y5PdPrI9z1sON7wBlvlzOZWq%2FOtkIFY7LpHwyBI4ryUuY97MOwOwsU2pYNSAN4hahOAXxKatQORSw4rctmuIYcvDfbOAYbEPz2kLz%2BXPNfew4tepdl1aZG6yfvglcQi3a9528ioLBEMyxGmWpX1oK4Ksqvxt3sK9UgfH2SBvGsYEJuo2ucngm4tp0NRHrrRqG7%2FxyMFQxigtGH4ldkvAIn9%2BNkgjNndfHMAX0miFeCEB%2BJw8V8Ao5Je1CKeQK4zWwd7R9V3kxLlyc%2B2j9oFoPlIf%2BefNaS%2BcUJVjKKXR53Z9%2BGRnf5xWSGv45Cc%2BtBo5752lKkaqbwQAt18NBwNkHbD%2BcDhYt8FlzYg%2BBNyWIyXJ6QureY%2BWZUxI0CvRoJvXj4cmtMh08x8%2FnpQmJdqbTjcuBvjcyEviDOOxDXDGZQUk%2Fx56TOJM6d6dBciIP95pZvGJdPn3zzqOgbh4sE%2FZQ6zwZ2UmGDfJGEFgWLQQ9GJeWo8ZAuTa0vFFtTC3yL3ABjqkATRYJRtMDnQJMVS%2F1s%2BXOOmp7JfUHrx0zsTebsUZdqgmLrPefL01nXL54CxH4r4w0%2BSuumvRhua8gKMOgP3qevBlmKnILb8FlKYn8%2BZZhIHlSGbBVjtlrBp5fLCqGBLsIFJ2d5bjwiGNhU%2F8cEnO%2Fig8p6ZS3AuKcdYu27lzokQc3bqeWo%2BapxM2mDUNVdRvoGXBnXux0bzFEO7dQz%2FYyMa5RUca&X-Amz-Signature=579c460296be99e78911b82cb51632427fc8d93f273d1668d35f8b9fd5e3bdce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD7PKAQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99ipT0kq9H6gkqcy4gWS4jIpOSRymwmD3Qid2VwRQZwIhAJhvkjL3k87YbyW8kPUBdqOWBz87ZQEXQRdpByIjLaRYKv8DCHQQABoMNjM3NDIzMTgzODA1IgzWBMaaYc0lfUq9X0cq3AMzPfrnX20EHALnhq6um4TZkGA%2F9lLrcjJBQwZHHbnlAC9xTC6XSik2g8TGEkB2CyKoraphY5e4Q%2FqMvMcnns9A7VD3pkjlAd3yLNEjVG24DTlD2JAam8t3oiN%2BoCkA2cv9Y5PdPrI9z1sON7wBlvlzOZWq%2FOtkIFY7LpHwyBI4ryUuY97MOwOwsU2pYNSAN4hahOAXxKatQORSw4rctmuIYcvDfbOAYbEPz2kLz%2BXPNfew4tepdl1aZG6yfvglcQi3a9528ioLBEMyxGmWpX1oK4Ksqvxt3sK9UgfH2SBvGsYEJuo2ucngm4tp0NRHrrRqG7%2FxyMFQxigtGH4ldkvAIn9%2BNkgjNndfHMAX0miFeCEB%2BJw8V8Ao5Je1CKeQK4zWwd7R9V3kxLlyc%2B2j9oFoPlIf%2BefNaS%2BcUJVjKKXR53Z9%2BGRnf5xWSGv45Cc%2BtBo5752lKkaqbwQAt18NBwNkHbD%2BcDhYt8FlzYg%2BBNyWIyXJ6QureY%2BWZUxI0CvRoJvXj4cmtMh08x8%2FnpQmJdqbTjcuBvjcyEviDOOxDXDGZQUk%2Fx56TOJM6d6dBciIP95pZvGJdPn3zzqOgbh4sE%2FZQ6zwZ2UmGDfJGEFgWLQQ9GJeWo8ZAuTa0vFFtTC3yL3ABjqkATRYJRtMDnQJMVS%2F1s%2BXOOmp7JfUHrx0zsTebsUZdqgmLrPefL01nXL54CxH4r4w0%2BSuumvRhua8gKMOgP3qevBlmKnILb8FlKYn8%2BZZhIHlSGbBVjtlrBp5fLCqGBLsIFJ2d5bjwiGNhU%2F8cEnO%2Fig8p6ZS3AuKcdYu27lzokQc3bqeWo%2BapxM2mDUNVdRvoGXBnXux0bzFEO7dQz%2FYyMa5RUca&X-Amz-Signature=f5571d4ae681cd2768512f2caedab9463ed02ce04cc8a1f991d8e09b82b375fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD7PKAQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99ipT0kq9H6gkqcy4gWS4jIpOSRymwmD3Qid2VwRQZwIhAJhvkjL3k87YbyW8kPUBdqOWBz87ZQEXQRdpByIjLaRYKv8DCHQQABoMNjM3NDIzMTgzODA1IgzWBMaaYc0lfUq9X0cq3AMzPfrnX20EHALnhq6um4TZkGA%2F9lLrcjJBQwZHHbnlAC9xTC6XSik2g8TGEkB2CyKoraphY5e4Q%2FqMvMcnns9A7VD3pkjlAd3yLNEjVG24DTlD2JAam8t3oiN%2BoCkA2cv9Y5PdPrI9z1sON7wBlvlzOZWq%2FOtkIFY7LpHwyBI4ryUuY97MOwOwsU2pYNSAN4hahOAXxKatQORSw4rctmuIYcvDfbOAYbEPz2kLz%2BXPNfew4tepdl1aZG6yfvglcQi3a9528ioLBEMyxGmWpX1oK4Ksqvxt3sK9UgfH2SBvGsYEJuo2ucngm4tp0NRHrrRqG7%2FxyMFQxigtGH4ldkvAIn9%2BNkgjNndfHMAX0miFeCEB%2BJw8V8Ao5Je1CKeQK4zWwd7R9V3kxLlyc%2B2j9oFoPlIf%2BefNaS%2BcUJVjKKXR53Z9%2BGRnf5xWSGv45Cc%2BtBo5752lKkaqbwQAt18NBwNkHbD%2BcDhYt8FlzYg%2BBNyWIyXJ6QureY%2BWZUxI0CvRoJvXj4cmtMh08x8%2FnpQmJdqbTjcuBvjcyEviDOOxDXDGZQUk%2Fx56TOJM6d6dBciIP95pZvGJdPn3zzqOgbh4sE%2FZQ6zwZ2UmGDfJGEFgWLQQ9GJeWo8ZAuTa0vFFtTC3yL3ABjqkATRYJRtMDnQJMVS%2F1s%2BXOOmp7JfUHrx0zsTebsUZdqgmLrPefL01nXL54CxH4r4w0%2BSuumvRhua8gKMOgP3qevBlmKnILb8FlKYn8%2BZZhIHlSGbBVjtlrBp5fLCqGBLsIFJ2d5bjwiGNhU%2F8cEnO%2Fig8p6ZS3AuKcdYu27lzokQc3bqeWo%2BapxM2mDUNVdRvoGXBnXux0bzFEO7dQz%2FYyMa5RUca&X-Amz-Signature=47eda3b714896b04c8742db5ec973dfe9a2d43fc81a494280301656397e3d993&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD7PKAQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99ipT0kq9H6gkqcy4gWS4jIpOSRymwmD3Qid2VwRQZwIhAJhvkjL3k87YbyW8kPUBdqOWBz87ZQEXQRdpByIjLaRYKv8DCHQQABoMNjM3NDIzMTgzODA1IgzWBMaaYc0lfUq9X0cq3AMzPfrnX20EHALnhq6um4TZkGA%2F9lLrcjJBQwZHHbnlAC9xTC6XSik2g8TGEkB2CyKoraphY5e4Q%2FqMvMcnns9A7VD3pkjlAd3yLNEjVG24DTlD2JAam8t3oiN%2BoCkA2cv9Y5PdPrI9z1sON7wBlvlzOZWq%2FOtkIFY7LpHwyBI4ryUuY97MOwOwsU2pYNSAN4hahOAXxKatQORSw4rctmuIYcvDfbOAYbEPz2kLz%2BXPNfew4tepdl1aZG6yfvglcQi3a9528ioLBEMyxGmWpX1oK4Ksqvxt3sK9UgfH2SBvGsYEJuo2ucngm4tp0NRHrrRqG7%2FxyMFQxigtGH4ldkvAIn9%2BNkgjNndfHMAX0miFeCEB%2BJw8V8Ao5Je1CKeQK4zWwd7R9V3kxLlyc%2B2j9oFoPlIf%2BefNaS%2BcUJVjKKXR53Z9%2BGRnf5xWSGv45Cc%2BtBo5752lKkaqbwQAt18NBwNkHbD%2BcDhYt8FlzYg%2BBNyWIyXJ6QureY%2BWZUxI0CvRoJvXj4cmtMh08x8%2FnpQmJdqbTjcuBvjcyEviDOOxDXDGZQUk%2Fx56TOJM6d6dBciIP95pZvGJdPn3zzqOgbh4sE%2FZQ6zwZ2UmGDfJGEFgWLQQ9GJeWo8ZAuTa0vFFtTC3yL3ABjqkATRYJRtMDnQJMVS%2F1s%2BXOOmp7JfUHrx0zsTebsUZdqgmLrPefL01nXL54CxH4r4w0%2BSuumvRhua8gKMOgP3qevBlmKnILb8FlKYn8%2BZZhIHlSGbBVjtlrBp5fLCqGBLsIFJ2d5bjwiGNhU%2F8cEnO%2Fig8p6ZS3AuKcdYu27lzokQc3bqeWo%2BapxM2mDUNVdRvoGXBnXux0bzFEO7dQz%2FYyMa5RUca&X-Amz-Signature=68d392f19d224f3cac670505e5e5e3604478f4274db218f31eb6958309a3307a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD7PKAQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99ipT0kq9H6gkqcy4gWS4jIpOSRymwmD3Qid2VwRQZwIhAJhvkjL3k87YbyW8kPUBdqOWBz87ZQEXQRdpByIjLaRYKv8DCHQQABoMNjM3NDIzMTgzODA1IgzWBMaaYc0lfUq9X0cq3AMzPfrnX20EHALnhq6um4TZkGA%2F9lLrcjJBQwZHHbnlAC9xTC6XSik2g8TGEkB2CyKoraphY5e4Q%2FqMvMcnns9A7VD3pkjlAd3yLNEjVG24DTlD2JAam8t3oiN%2BoCkA2cv9Y5PdPrI9z1sON7wBlvlzOZWq%2FOtkIFY7LpHwyBI4ryUuY97MOwOwsU2pYNSAN4hahOAXxKatQORSw4rctmuIYcvDfbOAYbEPz2kLz%2BXPNfew4tepdl1aZG6yfvglcQi3a9528ioLBEMyxGmWpX1oK4Ksqvxt3sK9UgfH2SBvGsYEJuo2ucngm4tp0NRHrrRqG7%2FxyMFQxigtGH4ldkvAIn9%2BNkgjNndfHMAX0miFeCEB%2BJw8V8Ao5Je1CKeQK4zWwd7R9V3kxLlyc%2B2j9oFoPlIf%2BefNaS%2BcUJVjKKXR53Z9%2BGRnf5xWSGv45Cc%2BtBo5752lKkaqbwQAt18NBwNkHbD%2BcDhYt8FlzYg%2BBNyWIyXJ6QureY%2BWZUxI0CvRoJvXj4cmtMh08x8%2FnpQmJdqbTjcuBvjcyEviDOOxDXDGZQUk%2Fx56TOJM6d6dBciIP95pZvGJdPn3zzqOgbh4sE%2FZQ6zwZ2UmGDfJGEFgWLQQ9GJeWo8ZAuTa0vFFtTC3yL3ABjqkATRYJRtMDnQJMVS%2F1s%2BXOOmp7JfUHrx0zsTebsUZdqgmLrPefL01nXL54CxH4r4w0%2BSuumvRhua8gKMOgP3qevBlmKnILb8FlKYn8%2BZZhIHlSGbBVjtlrBp5fLCqGBLsIFJ2d5bjwiGNhU%2F8cEnO%2Fig8p6ZS3AuKcdYu27lzokQc3bqeWo%2BapxM2mDUNVdRvoGXBnXux0bzFEO7dQz%2FYyMa5RUca&X-Amz-Signature=1a8a1739dc704626e782499e424d218de82b88ad1d03d250592b1940b9d8e8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
