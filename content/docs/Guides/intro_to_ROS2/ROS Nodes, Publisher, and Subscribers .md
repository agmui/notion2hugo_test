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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLPHKKG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhOXO1nCaqlwjUc7vg2yYsFtGyig2R%2FBGAJ2H5v4zuyAiAf8YWFCgoSj74HRL5qRjo7L%2B7zW%2Bayybv1zOYPoiRYDCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFyUP9RPwKveEr6wKtwDHbHW6Gn%2B%2FtBPU0V5qHaAUe4OIH%2F19BoyxyzhVqb9Zzxva%2FG1wfA1pQa4snW6Z0QocJRiQvS%2Fp3uYN%2F4lqAMgtsZIl6og1s9tctqFYhj%2FHk7looJPlqQfe8iO9Aka6NyFhQ8I1g5qZiOVEJ8whGgIFSsyNAnr3YXQN8WP7VCgUIGddUAT3X4emRg4UDcydK08yfCQOUT2qOGDHqzOJTovWNS01f0EQzQaZ3HeTlr5aPx3ck9ZKLMr5%2BMmhglgzdwxjJJjWRNFnMIrUpJ0wPX48ua8sFw2wih9aiLP9eRI62vNjckxkcSrJnbN4ggq9yamWHYBYuA5LIgX6vKXE6pohWdHg5oPEaooP4Sdr9O384EbrcnDV3SsNZhY2M1NP5pB3O5Lli86qXaLWwajD9O%2B0tLoeHa849vHYCiDzAQll05WlK79Q1anqx%2FwjcyCX7hSxfS8TvrIUgKd7JTYWnnhErQFY8TwaqWPJMy%2FdhZH2GuZb9GN74sw%2BwcTDEkYAeg0CrufZbftZg1hw4vKGWKsm4DhlD7CBxJWOHU3FyaLcVh%2F4KFqpcyPBvBdpZz5iksBRsaO8DpfBbBY7rW2mvoYA%2B8rV4cWuObDsdbK11iD8D0i5cHaNBWDweK4qJowxrKWwgY6pgFs79AETx1g1yKy0xbi%2BmvD3H50PT7WMIwHFGZ2Qon%2FfuZaX0AVw5eYnmv1Phi1mdesyu5JpLUYp1sRWWJH%2FUsibCVJjlE76tJNVEBHxYtg5fyCZywIHSStrv68yit1%2FNo3aN8hWyWhHOzK6XpFB2o3QHZ5Qvh3k4BIiH5F8zxIcsBSkGV%2F3YAiqedaFncOoJQL8fvULXqbFZWLJPr%2BeB9LsoO7UD65&X-Amz-Signature=df30383be4114f80a98c90e176ae98c141b000c5eb6cca8c5a68ad8dd002fef3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLPHKKG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhOXO1nCaqlwjUc7vg2yYsFtGyig2R%2FBGAJ2H5v4zuyAiAf8YWFCgoSj74HRL5qRjo7L%2B7zW%2Bayybv1zOYPoiRYDCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFyUP9RPwKveEr6wKtwDHbHW6Gn%2B%2FtBPU0V5qHaAUe4OIH%2F19BoyxyzhVqb9Zzxva%2FG1wfA1pQa4snW6Z0QocJRiQvS%2Fp3uYN%2F4lqAMgtsZIl6og1s9tctqFYhj%2FHk7looJPlqQfe8iO9Aka6NyFhQ8I1g5qZiOVEJ8whGgIFSsyNAnr3YXQN8WP7VCgUIGddUAT3X4emRg4UDcydK08yfCQOUT2qOGDHqzOJTovWNS01f0EQzQaZ3HeTlr5aPx3ck9ZKLMr5%2BMmhglgzdwxjJJjWRNFnMIrUpJ0wPX48ua8sFw2wih9aiLP9eRI62vNjckxkcSrJnbN4ggq9yamWHYBYuA5LIgX6vKXE6pohWdHg5oPEaooP4Sdr9O384EbrcnDV3SsNZhY2M1NP5pB3O5Lli86qXaLWwajD9O%2B0tLoeHa849vHYCiDzAQll05WlK79Q1anqx%2FwjcyCX7hSxfS8TvrIUgKd7JTYWnnhErQFY8TwaqWPJMy%2FdhZH2GuZb9GN74sw%2BwcTDEkYAeg0CrufZbftZg1hw4vKGWKsm4DhlD7CBxJWOHU3FyaLcVh%2F4KFqpcyPBvBdpZz5iksBRsaO8DpfBbBY7rW2mvoYA%2B8rV4cWuObDsdbK11iD8D0i5cHaNBWDweK4qJowxrKWwgY6pgFs79AETx1g1yKy0xbi%2BmvD3H50PT7WMIwHFGZ2Qon%2FfuZaX0AVw5eYnmv1Phi1mdesyu5JpLUYp1sRWWJH%2FUsibCVJjlE76tJNVEBHxYtg5fyCZywIHSStrv68yit1%2FNo3aN8hWyWhHOzK6XpFB2o3QHZ5Qvh3k4BIiH5F8zxIcsBSkGV%2F3YAiqedaFncOoJQL8fvULXqbFZWLJPr%2BeB9LsoO7UD65&X-Amz-Signature=4c9be717af124202f970b48456d0035162a5ad47ce2c09306a26d9ba780aae7c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLPHKKG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhOXO1nCaqlwjUc7vg2yYsFtGyig2R%2FBGAJ2H5v4zuyAiAf8YWFCgoSj74HRL5qRjo7L%2B7zW%2Bayybv1zOYPoiRYDCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFyUP9RPwKveEr6wKtwDHbHW6Gn%2B%2FtBPU0V5qHaAUe4OIH%2F19BoyxyzhVqb9Zzxva%2FG1wfA1pQa4snW6Z0QocJRiQvS%2Fp3uYN%2F4lqAMgtsZIl6og1s9tctqFYhj%2FHk7looJPlqQfe8iO9Aka6NyFhQ8I1g5qZiOVEJ8whGgIFSsyNAnr3YXQN8WP7VCgUIGddUAT3X4emRg4UDcydK08yfCQOUT2qOGDHqzOJTovWNS01f0EQzQaZ3HeTlr5aPx3ck9ZKLMr5%2BMmhglgzdwxjJJjWRNFnMIrUpJ0wPX48ua8sFw2wih9aiLP9eRI62vNjckxkcSrJnbN4ggq9yamWHYBYuA5LIgX6vKXE6pohWdHg5oPEaooP4Sdr9O384EbrcnDV3SsNZhY2M1NP5pB3O5Lli86qXaLWwajD9O%2B0tLoeHa849vHYCiDzAQll05WlK79Q1anqx%2FwjcyCX7hSxfS8TvrIUgKd7JTYWnnhErQFY8TwaqWPJMy%2FdhZH2GuZb9GN74sw%2BwcTDEkYAeg0CrufZbftZg1hw4vKGWKsm4DhlD7CBxJWOHU3FyaLcVh%2F4KFqpcyPBvBdpZz5iksBRsaO8DpfBbBY7rW2mvoYA%2B8rV4cWuObDsdbK11iD8D0i5cHaNBWDweK4qJowxrKWwgY6pgFs79AETx1g1yKy0xbi%2BmvD3H50PT7WMIwHFGZ2Qon%2FfuZaX0AVw5eYnmv1Phi1mdesyu5JpLUYp1sRWWJH%2FUsibCVJjlE76tJNVEBHxYtg5fyCZywIHSStrv68yit1%2FNo3aN8hWyWhHOzK6XpFB2o3QHZ5Qvh3k4BIiH5F8zxIcsBSkGV%2F3YAiqedaFncOoJQL8fvULXqbFZWLJPr%2BeB9LsoO7UD65&X-Amz-Signature=a1aa2704f33cc652b43cfda239b30c0364473ed34b265bfd333202c4ac7d6aab&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLPHKKG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhOXO1nCaqlwjUc7vg2yYsFtGyig2R%2FBGAJ2H5v4zuyAiAf8YWFCgoSj74HRL5qRjo7L%2B7zW%2Bayybv1zOYPoiRYDCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFyUP9RPwKveEr6wKtwDHbHW6Gn%2B%2FtBPU0V5qHaAUe4OIH%2F19BoyxyzhVqb9Zzxva%2FG1wfA1pQa4snW6Z0QocJRiQvS%2Fp3uYN%2F4lqAMgtsZIl6og1s9tctqFYhj%2FHk7looJPlqQfe8iO9Aka6NyFhQ8I1g5qZiOVEJ8whGgIFSsyNAnr3YXQN8WP7VCgUIGddUAT3X4emRg4UDcydK08yfCQOUT2qOGDHqzOJTovWNS01f0EQzQaZ3HeTlr5aPx3ck9ZKLMr5%2BMmhglgzdwxjJJjWRNFnMIrUpJ0wPX48ua8sFw2wih9aiLP9eRI62vNjckxkcSrJnbN4ggq9yamWHYBYuA5LIgX6vKXE6pohWdHg5oPEaooP4Sdr9O384EbrcnDV3SsNZhY2M1NP5pB3O5Lli86qXaLWwajD9O%2B0tLoeHa849vHYCiDzAQll05WlK79Q1anqx%2FwjcyCX7hSxfS8TvrIUgKd7JTYWnnhErQFY8TwaqWPJMy%2FdhZH2GuZb9GN74sw%2BwcTDEkYAeg0CrufZbftZg1hw4vKGWKsm4DhlD7CBxJWOHU3FyaLcVh%2F4KFqpcyPBvBdpZz5iksBRsaO8DpfBbBY7rW2mvoYA%2B8rV4cWuObDsdbK11iD8D0i5cHaNBWDweK4qJowxrKWwgY6pgFs79AETx1g1yKy0xbi%2BmvD3H50PT7WMIwHFGZ2Qon%2FfuZaX0AVw5eYnmv1Phi1mdesyu5JpLUYp1sRWWJH%2FUsibCVJjlE76tJNVEBHxYtg5fyCZywIHSStrv68yit1%2FNo3aN8hWyWhHOzK6XpFB2o3QHZ5Qvh3k4BIiH5F8zxIcsBSkGV%2F3YAiqedaFncOoJQL8fvULXqbFZWLJPr%2BeB9LsoO7UD65&X-Amz-Signature=4293cbe8221d3c482439642f2f7060a9895b80f0c4dbd265ba134472148d5e76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLPHKKG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhOXO1nCaqlwjUc7vg2yYsFtGyig2R%2FBGAJ2H5v4zuyAiAf8YWFCgoSj74HRL5qRjo7L%2B7zW%2Bayybv1zOYPoiRYDCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFyUP9RPwKveEr6wKtwDHbHW6Gn%2B%2FtBPU0V5qHaAUe4OIH%2F19BoyxyzhVqb9Zzxva%2FG1wfA1pQa4snW6Z0QocJRiQvS%2Fp3uYN%2F4lqAMgtsZIl6og1s9tctqFYhj%2FHk7looJPlqQfe8iO9Aka6NyFhQ8I1g5qZiOVEJ8whGgIFSsyNAnr3YXQN8WP7VCgUIGddUAT3X4emRg4UDcydK08yfCQOUT2qOGDHqzOJTovWNS01f0EQzQaZ3HeTlr5aPx3ck9ZKLMr5%2BMmhglgzdwxjJJjWRNFnMIrUpJ0wPX48ua8sFw2wih9aiLP9eRI62vNjckxkcSrJnbN4ggq9yamWHYBYuA5LIgX6vKXE6pohWdHg5oPEaooP4Sdr9O384EbrcnDV3SsNZhY2M1NP5pB3O5Lli86qXaLWwajD9O%2B0tLoeHa849vHYCiDzAQll05WlK79Q1anqx%2FwjcyCX7hSxfS8TvrIUgKd7JTYWnnhErQFY8TwaqWPJMy%2FdhZH2GuZb9GN74sw%2BwcTDEkYAeg0CrufZbftZg1hw4vKGWKsm4DhlD7CBxJWOHU3FyaLcVh%2F4KFqpcyPBvBdpZz5iksBRsaO8DpfBbBY7rW2mvoYA%2B8rV4cWuObDsdbK11iD8D0i5cHaNBWDweK4qJowxrKWwgY6pgFs79AETx1g1yKy0xbi%2BmvD3H50PT7WMIwHFGZ2Qon%2FfuZaX0AVw5eYnmv1Phi1mdesyu5JpLUYp1sRWWJH%2FUsibCVJjlE76tJNVEBHxYtg5fyCZywIHSStrv68yit1%2FNo3aN8hWyWhHOzK6XpFB2o3QHZ5Qvh3k4BIiH5F8zxIcsBSkGV%2F3YAiqedaFncOoJQL8fvULXqbFZWLJPr%2BeB9LsoO7UD65&X-Amz-Signature=965eea229d1354d78a2c6953fe9caf9c9e5adf884eb1e3c7a2de30488d8a3040&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLPHKKG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhOXO1nCaqlwjUc7vg2yYsFtGyig2R%2FBGAJ2H5v4zuyAiAf8YWFCgoSj74HRL5qRjo7L%2B7zW%2Bayybv1zOYPoiRYDCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFyUP9RPwKveEr6wKtwDHbHW6Gn%2B%2FtBPU0V5qHaAUe4OIH%2F19BoyxyzhVqb9Zzxva%2FG1wfA1pQa4snW6Z0QocJRiQvS%2Fp3uYN%2F4lqAMgtsZIl6og1s9tctqFYhj%2FHk7looJPlqQfe8iO9Aka6NyFhQ8I1g5qZiOVEJ8whGgIFSsyNAnr3YXQN8WP7VCgUIGddUAT3X4emRg4UDcydK08yfCQOUT2qOGDHqzOJTovWNS01f0EQzQaZ3HeTlr5aPx3ck9ZKLMr5%2BMmhglgzdwxjJJjWRNFnMIrUpJ0wPX48ua8sFw2wih9aiLP9eRI62vNjckxkcSrJnbN4ggq9yamWHYBYuA5LIgX6vKXE6pohWdHg5oPEaooP4Sdr9O384EbrcnDV3SsNZhY2M1NP5pB3O5Lli86qXaLWwajD9O%2B0tLoeHa849vHYCiDzAQll05WlK79Q1anqx%2FwjcyCX7hSxfS8TvrIUgKd7JTYWnnhErQFY8TwaqWPJMy%2FdhZH2GuZb9GN74sw%2BwcTDEkYAeg0CrufZbftZg1hw4vKGWKsm4DhlD7CBxJWOHU3FyaLcVh%2F4KFqpcyPBvBdpZz5iksBRsaO8DpfBbBY7rW2mvoYA%2B8rV4cWuObDsdbK11iD8D0i5cHaNBWDweK4qJowxrKWwgY6pgFs79AETx1g1yKy0xbi%2BmvD3H50PT7WMIwHFGZ2Qon%2FfuZaX0AVw5eYnmv1Phi1mdesyu5JpLUYp1sRWWJH%2FUsibCVJjlE76tJNVEBHxYtg5fyCZywIHSStrv68yit1%2FNo3aN8hWyWhHOzK6XpFB2o3QHZ5Qvh3k4BIiH5F8zxIcsBSkGV%2F3YAiqedaFncOoJQL8fvULXqbFZWLJPr%2BeB9LsoO7UD65&X-Amz-Signature=8cb7c98cd033496dd470b9a863462c85f2da02f2ecb37a92bc0b9cbeee70c4f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLPHKKG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhOXO1nCaqlwjUc7vg2yYsFtGyig2R%2FBGAJ2H5v4zuyAiAf8YWFCgoSj74HRL5qRjo7L%2B7zW%2Bayybv1zOYPoiRYDCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFyUP9RPwKveEr6wKtwDHbHW6Gn%2B%2FtBPU0V5qHaAUe4OIH%2F19BoyxyzhVqb9Zzxva%2FG1wfA1pQa4snW6Z0QocJRiQvS%2Fp3uYN%2F4lqAMgtsZIl6og1s9tctqFYhj%2FHk7looJPlqQfe8iO9Aka6NyFhQ8I1g5qZiOVEJ8whGgIFSsyNAnr3YXQN8WP7VCgUIGddUAT3X4emRg4UDcydK08yfCQOUT2qOGDHqzOJTovWNS01f0EQzQaZ3HeTlr5aPx3ck9ZKLMr5%2BMmhglgzdwxjJJjWRNFnMIrUpJ0wPX48ua8sFw2wih9aiLP9eRI62vNjckxkcSrJnbN4ggq9yamWHYBYuA5LIgX6vKXE6pohWdHg5oPEaooP4Sdr9O384EbrcnDV3SsNZhY2M1NP5pB3O5Lli86qXaLWwajD9O%2B0tLoeHa849vHYCiDzAQll05WlK79Q1anqx%2FwjcyCX7hSxfS8TvrIUgKd7JTYWnnhErQFY8TwaqWPJMy%2FdhZH2GuZb9GN74sw%2BwcTDEkYAeg0CrufZbftZg1hw4vKGWKsm4DhlD7CBxJWOHU3FyaLcVh%2F4KFqpcyPBvBdpZz5iksBRsaO8DpfBbBY7rW2mvoYA%2B8rV4cWuObDsdbK11iD8D0i5cHaNBWDweK4qJowxrKWwgY6pgFs79AETx1g1yKy0xbi%2BmvD3H50PT7WMIwHFGZ2Qon%2FfuZaX0AVw5eYnmv1Phi1mdesyu5JpLUYp1sRWWJH%2FUsibCVJjlE76tJNVEBHxYtg5fyCZywIHSStrv68yit1%2FNo3aN8hWyWhHOzK6XpFB2o3QHZ5Qvh3k4BIiH5F8zxIcsBSkGV%2F3YAiqedaFncOoJQL8fvULXqbFZWLJPr%2BeB9LsoO7UD65&X-Amz-Signature=1942a6b612649cd15b2a3851e20073a72a9325ebe9638ff7204ed0f7228dc6ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLPHKKG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhOXO1nCaqlwjUc7vg2yYsFtGyig2R%2FBGAJ2H5v4zuyAiAf8YWFCgoSj74HRL5qRjo7L%2B7zW%2Bayybv1zOYPoiRYDCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFyUP9RPwKveEr6wKtwDHbHW6Gn%2B%2FtBPU0V5qHaAUe4OIH%2F19BoyxyzhVqb9Zzxva%2FG1wfA1pQa4snW6Z0QocJRiQvS%2Fp3uYN%2F4lqAMgtsZIl6og1s9tctqFYhj%2FHk7looJPlqQfe8iO9Aka6NyFhQ8I1g5qZiOVEJ8whGgIFSsyNAnr3YXQN8WP7VCgUIGddUAT3X4emRg4UDcydK08yfCQOUT2qOGDHqzOJTovWNS01f0EQzQaZ3HeTlr5aPx3ck9ZKLMr5%2BMmhglgzdwxjJJjWRNFnMIrUpJ0wPX48ua8sFw2wih9aiLP9eRI62vNjckxkcSrJnbN4ggq9yamWHYBYuA5LIgX6vKXE6pohWdHg5oPEaooP4Sdr9O384EbrcnDV3SsNZhY2M1NP5pB3O5Lli86qXaLWwajD9O%2B0tLoeHa849vHYCiDzAQll05WlK79Q1anqx%2FwjcyCX7hSxfS8TvrIUgKd7JTYWnnhErQFY8TwaqWPJMy%2FdhZH2GuZb9GN74sw%2BwcTDEkYAeg0CrufZbftZg1hw4vKGWKsm4DhlD7CBxJWOHU3FyaLcVh%2F4KFqpcyPBvBdpZz5iksBRsaO8DpfBbBY7rW2mvoYA%2B8rV4cWuObDsdbK11iD8D0i5cHaNBWDweK4qJowxrKWwgY6pgFs79AETx1g1yKy0xbi%2BmvD3H50PT7WMIwHFGZ2Qon%2FfuZaX0AVw5eYnmv1Phi1mdesyu5JpLUYp1sRWWJH%2FUsibCVJjlE76tJNVEBHxYtg5fyCZywIHSStrv68yit1%2FNo3aN8hWyWhHOzK6XpFB2o3QHZ5Qvh3k4BIiH5F8zxIcsBSkGV%2F3YAiqedaFncOoJQL8fvULXqbFZWLJPr%2BeB9LsoO7UD65&X-Amz-Signature=69d0238a25012288e95c65f3b030abf780ff58ff67ffec718b4b657a2aed02f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
