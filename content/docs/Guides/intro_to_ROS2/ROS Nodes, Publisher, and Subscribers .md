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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTVJHBF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDqbUfvW7BIFUvDT43okqXea%2BFVRnUArlMW7Fpwi4RfIwIgDlS87f4jvG%2Fp3CpoVC2GRgoUAkPlI%2BLH%2F9lrwGwloi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAshHqChhuz4cXhHircA4QS6MZB7Urn6biwPsnz0UDO4BHr4cDT8u0OJwNRMBU97gTjsJf0Udx7Tv6tGbTjn3UkF4kQf2dxZB5UUMiYIDLc0NQfTtFpNds8AI45WpFVO%2BWl8yiyN3%2F0Vc7r7ObUsnDlC2DWfKSpy6dtMpzGo%2B6Riz%2FmtksB7zNHIVZRvXOh0QZvOfTqv1Zp4WkxM4oVa%2FurDrQnWMC5QHjs9cCPf7P1jDiGxn9Ymgd1x4rot1u5pU3l%2Bo49Gt2jtj%2FliT2u06HzF%2FZqbnFLVf1wwKD%2BE%2Fr3m6ovogDaw90aGrCTRjevU1E1nwyxdu0%2FLvF0sA9q2592ZnucfseY4wTGenvqdGndEW9%2FgoLGXy8JKXawZud%2F%2F9kGmJAIJhEml7XylNODl0DFmX%2FzVFzapu874UlQWlZhMKRBqpdwIfvQ%2BvV5B%2F2rDKcO19SBY2W0Gjch2gL07%2FmRMpWsHFrkjAEXjyhVQ2VCLU0wOFmD7aA%2Bm82zonpRl1%2FvTK1LNBHVFb3MZfvj6T34UzOVzrTchus6tZd8EjK41icdtCG5jwrTREJyPJrSC%2BfwFoR2XoRt%2BIJR5IadA6gVhsaG5FlA2Rmj9Rk43XCv5rJPYvfIwYizQ63HFehFPQvD5aGw7CP0Y8FcMOe69L4GOqUB13w3%2BHOackPnOldpUbXx3hntMPnfUqZlArdV%2FycumFegfs2Novh%2FC18nQPNOVq0RHPJj48QhvbzH1yqE4BflwOzgqZxGWh69K8rp0parQ%2BX%2BnmpCnrmSI7rGUegEfMS0qirHu2dFftEMyXh6%2FulkOsD8jo3mtEeaRTaNhjzT%2FJOfstK1uMyfGmCfAe2R2wsKoyLeZyHcIXxT0sEjkIeK20pQmCG4&X-Amz-Signature=5ddd64d8a41059675e108b11675ab03e6debe190d9c302c31c2f9a21ff5fb452&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTVJHBF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDqbUfvW7BIFUvDT43okqXea%2BFVRnUArlMW7Fpwi4RfIwIgDlS87f4jvG%2Fp3CpoVC2GRgoUAkPlI%2BLH%2F9lrwGwloi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAshHqChhuz4cXhHircA4QS6MZB7Urn6biwPsnz0UDO4BHr4cDT8u0OJwNRMBU97gTjsJf0Udx7Tv6tGbTjn3UkF4kQf2dxZB5UUMiYIDLc0NQfTtFpNds8AI45WpFVO%2BWl8yiyN3%2F0Vc7r7ObUsnDlC2DWfKSpy6dtMpzGo%2B6Riz%2FmtksB7zNHIVZRvXOh0QZvOfTqv1Zp4WkxM4oVa%2FurDrQnWMC5QHjs9cCPf7P1jDiGxn9Ymgd1x4rot1u5pU3l%2Bo49Gt2jtj%2FliT2u06HzF%2FZqbnFLVf1wwKD%2BE%2Fr3m6ovogDaw90aGrCTRjevU1E1nwyxdu0%2FLvF0sA9q2592ZnucfseY4wTGenvqdGndEW9%2FgoLGXy8JKXawZud%2F%2F9kGmJAIJhEml7XylNODl0DFmX%2FzVFzapu874UlQWlZhMKRBqpdwIfvQ%2BvV5B%2F2rDKcO19SBY2W0Gjch2gL07%2FmRMpWsHFrkjAEXjyhVQ2VCLU0wOFmD7aA%2Bm82zonpRl1%2FvTK1LNBHVFb3MZfvj6T34UzOVzrTchus6tZd8EjK41icdtCG5jwrTREJyPJrSC%2BfwFoR2XoRt%2BIJR5IadA6gVhsaG5FlA2Rmj9Rk43XCv5rJPYvfIwYizQ63HFehFPQvD5aGw7CP0Y8FcMOe69L4GOqUB13w3%2BHOackPnOldpUbXx3hntMPnfUqZlArdV%2FycumFegfs2Novh%2FC18nQPNOVq0RHPJj48QhvbzH1yqE4BflwOzgqZxGWh69K8rp0parQ%2BX%2BnmpCnrmSI7rGUegEfMS0qirHu2dFftEMyXh6%2FulkOsD8jo3mtEeaRTaNhjzT%2FJOfstK1uMyfGmCfAe2R2wsKoyLeZyHcIXxT0sEjkIeK20pQmCG4&X-Amz-Signature=317a236b156d01891da466cd443d1a65663fa94da06b3e55bef3972d3bb7ab2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTVJHBF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDqbUfvW7BIFUvDT43okqXea%2BFVRnUArlMW7Fpwi4RfIwIgDlS87f4jvG%2Fp3CpoVC2GRgoUAkPlI%2BLH%2F9lrwGwloi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAshHqChhuz4cXhHircA4QS6MZB7Urn6biwPsnz0UDO4BHr4cDT8u0OJwNRMBU97gTjsJf0Udx7Tv6tGbTjn3UkF4kQf2dxZB5UUMiYIDLc0NQfTtFpNds8AI45WpFVO%2BWl8yiyN3%2F0Vc7r7ObUsnDlC2DWfKSpy6dtMpzGo%2B6Riz%2FmtksB7zNHIVZRvXOh0QZvOfTqv1Zp4WkxM4oVa%2FurDrQnWMC5QHjs9cCPf7P1jDiGxn9Ymgd1x4rot1u5pU3l%2Bo49Gt2jtj%2FliT2u06HzF%2FZqbnFLVf1wwKD%2BE%2Fr3m6ovogDaw90aGrCTRjevU1E1nwyxdu0%2FLvF0sA9q2592ZnucfseY4wTGenvqdGndEW9%2FgoLGXy8JKXawZud%2F%2F9kGmJAIJhEml7XylNODl0DFmX%2FzVFzapu874UlQWlZhMKRBqpdwIfvQ%2BvV5B%2F2rDKcO19SBY2W0Gjch2gL07%2FmRMpWsHFrkjAEXjyhVQ2VCLU0wOFmD7aA%2Bm82zonpRl1%2FvTK1LNBHVFb3MZfvj6T34UzOVzrTchus6tZd8EjK41icdtCG5jwrTREJyPJrSC%2BfwFoR2XoRt%2BIJR5IadA6gVhsaG5FlA2Rmj9Rk43XCv5rJPYvfIwYizQ63HFehFPQvD5aGw7CP0Y8FcMOe69L4GOqUB13w3%2BHOackPnOldpUbXx3hntMPnfUqZlArdV%2FycumFegfs2Novh%2FC18nQPNOVq0RHPJj48QhvbzH1yqE4BflwOzgqZxGWh69K8rp0parQ%2BX%2BnmpCnrmSI7rGUegEfMS0qirHu2dFftEMyXh6%2FulkOsD8jo3mtEeaRTaNhjzT%2FJOfstK1uMyfGmCfAe2R2wsKoyLeZyHcIXxT0sEjkIeK20pQmCG4&X-Amz-Signature=08971873e8480cbe7a3473ad0f1dcc6a2838ac449730ff56e5260a9590736337&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTVJHBF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDqbUfvW7BIFUvDT43okqXea%2BFVRnUArlMW7Fpwi4RfIwIgDlS87f4jvG%2Fp3CpoVC2GRgoUAkPlI%2BLH%2F9lrwGwloi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAshHqChhuz4cXhHircA4QS6MZB7Urn6biwPsnz0UDO4BHr4cDT8u0OJwNRMBU97gTjsJf0Udx7Tv6tGbTjn3UkF4kQf2dxZB5UUMiYIDLc0NQfTtFpNds8AI45WpFVO%2BWl8yiyN3%2F0Vc7r7ObUsnDlC2DWfKSpy6dtMpzGo%2B6Riz%2FmtksB7zNHIVZRvXOh0QZvOfTqv1Zp4WkxM4oVa%2FurDrQnWMC5QHjs9cCPf7P1jDiGxn9Ymgd1x4rot1u5pU3l%2Bo49Gt2jtj%2FliT2u06HzF%2FZqbnFLVf1wwKD%2BE%2Fr3m6ovogDaw90aGrCTRjevU1E1nwyxdu0%2FLvF0sA9q2592ZnucfseY4wTGenvqdGndEW9%2FgoLGXy8JKXawZud%2F%2F9kGmJAIJhEml7XylNODl0DFmX%2FzVFzapu874UlQWlZhMKRBqpdwIfvQ%2BvV5B%2F2rDKcO19SBY2W0Gjch2gL07%2FmRMpWsHFrkjAEXjyhVQ2VCLU0wOFmD7aA%2Bm82zonpRl1%2FvTK1LNBHVFb3MZfvj6T34UzOVzrTchus6tZd8EjK41icdtCG5jwrTREJyPJrSC%2BfwFoR2XoRt%2BIJR5IadA6gVhsaG5FlA2Rmj9Rk43XCv5rJPYvfIwYizQ63HFehFPQvD5aGw7CP0Y8FcMOe69L4GOqUB13w3%2BHOackPnOldpUbXx3hntMPnfUqZlArdV%2FycumFegfs2Novh%2FC18nQPNOVq0RHPJj48QhvbzH1yqE4BflwOzgqZxGWh69K8rp0parQ%2BX%2BnmpCnrmSI7rGUegEfMS0qirHu2dFftEMyXh6%2FulkOsD8jo3mtEeaRTaNhjzT%2FJOfstK1uMyfGmCfAe2R2wsKoyLeZyHcIXxT0sEjkIeK20pQmCG4&X-Amz-Signature=885c18d9dc4f7dfd4b0bdae2947f30dc84b43115ec1c47da78f9c42110ad4461&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTVJHBF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDqbUfvW7BIFUvDT43okqXea%2BFVRnUArlMW7Fpwi4RfIwIgDlS87f4jvG%2Fp3CpoVC2GRgoUAkPlI%2BLH%2F9lrwGwloi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAshHqChhuz4cXhHircA4QS6MZB7Urn6biwPsnz0UDO4BHr4cDT8u0OJwNRMBU97gTjsJf0Udx7Tv6tGbTjn3UkF4kQf2dxZB5UUMiYIDLc0NQfTtFpNds8AI45WpFVO%2BWl8yiyN3%2F0Vc7r7ObUsnDlC2DWfKSpy6dtMpzGo%2B6Riz%2FmtksB7zNHIVZRvXOh0QZvOfTqv1Zp4WkxM4oVa%2FurDrQnWMC5QHjs9cCPf7P1jDiGxn9Ymgd1x4rot1u5pU3l%2Bo49Gt2jtj%2FliT2u06HzF%2FZqbnFLVf1wwKD%2BE%2Fr3m6ovogDaw90aGrCTRjevU1E1nwyxdu0%2FLvF0sA9q2592ZnucfseY4wTGenvqdGndEW9%2FgoLGXy8JKXawZud%2F%2F9kGmJAIJhEml7XylNODl0DFmX%2FzVFzapu874UlQWlZhMKRBqpdwIfvQ%2BvV5B%2F2rDKcO19SBY2W0Gjch2gL07%2FmRMpWsHFrkjAEXjyhVQ2VCLU0wOFmD7aA%2Bm82zonpRl1%2FvTK1LNBHVFb3MZfvj6T34UzOVzrTchus6tZd8EjK41icdtCG5jwrTREJyPJrSC%2BfwFoR2XoRt%2BIJR5IadA6gVhsaG5FlA2Rmj9Rk43XCv5rJPYvfIwYizQ63HFehFPQvD5aGw7CP0Y8FcMOe69L4GOqUB13w3%2BHOackPnOldpUbXx3hntMPnfUqZlArdV%2FycumFegfs2Novh%2FC18nQPNOVq0RHPJj48QhvbzH1yqE4BflwOzgqZxGWh69K8rp0parQ%2BX%2BnmpCnrmSI7rGUegEfMS0qirHu2dFftEMyXh6%2FulkOsD8jo3mtEeaRTaNhjzT%2FJOfstK1uMyfGmCfAe2R2wsKoyLeZyHcIXxT0sEjkIeK20pQmCG4&X-Amz-Signature=134b1f0c66b543b76b67932464dfd4ab240a773336fc7fed4286c11f5a3de9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTVJHBF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDqbUfvW7BIFUvDT43okqXea%2BFVRnUArlMW7Fpwi4RfIwIgDlS87f4jvG%2Fp3CpoVC2GRgoUAkPlI%2BLH%2F9lrwGwloi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAshHqChhuz4cXhHircA4QS6MZB7Urn6biwPsnz0UDO4BHr4cDT8u0OJwNRMBU97gTjsJf0Udx7Tv6tGbTjn3UkF4kQf2dxZB5UUMiYIDLc0NQfTtFpNds8AI45WpFVO%2BWl8yiyN3%2F0Vc7r7ObUsnDlC2DWfKSpy6dtMpzGo%2B6Riz%2FmtksB7zNHIVZRvXOh0QZvOfTqv1Zp4WkxM4oVa%2FurDrQnWMC5QHjs9cCPf7P1jDiGxn9Ymgd1x4rot1u5pU3l%2Bo49Gt2jtj%2FliT2u06HzF%2FZqbnFLVf1wwKD%2BE%2Fr3m6ovogDaw90aGrCTRjevU1E1nwyxdu0%2FLvF0sA9q2592ZnucfseY4wTGenvqdGndEW9%2FgoLGXy8JKXawZud%2F%2F9kGmJAIJhEml7XylNODl0DFmX%2FzVFzapu874UlQWlZhMKRBqpdwIfvQ%2BvV5B%2F2rDKcO19SBY2W0Gjch2gL07%2FmRMpWsHFrkjAEXjyhVQ2VCLU0wOFmD7aA%2Bm82zonpRl1%2FvTK1LNBHVFb3MZfvj6T34UzOVzrTchus6tZd8EjK41icdtCG5jwrTREJyPJrSC%2BfwFoR2XoRt%2BIJR5IadA6gVhsaG5FlA2Rmj9Rk43XCv5rJPYvfIwYizQ63HFehFPQvD5aGw7CP0Y8FcMOe69L4GOqUB13w3%2BHOackPnOldpUbXx3hntMPnfUqZlArdV%2FycumFegfs2Novh%2FC18nQPNOVq0RHPJj48QhvbzH1yqE4BflwOzgqZxGWh69K8rp0parQ%2BX%2BnmpCnrmSI7rGUegEfMS0qirHu2dFftEMyXh6%2FulkOsD8jo3mtEeaRTaNhjzT%2FJOfstK1uMyfGmCfAe2R2wsKoyLeZyHcIXxT0sEjkIeK20pQmCG4&X-Amz-Signature=be0615e0cecd0c6c613d379ef499f318b25156e12804d38ae6681a181c857fad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTVJHBF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDqbUfvW7BIFUvDT43okqXea%2BFVRnUArlMW7Fpwi4RfIwIgDlS87f4jvG%2Fp3CpoVC2GRgoUAkPlI%2BLH%2F9lrwGwloi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAshHqChhuz4cXhHircA4QS6MZB7Urn6biwPsnz0UDO4BHr4cDT8u0OJwNRMBU97gTjsJf0Udx7Tv6tGbTjn3UkF4kQf2dxZB5UUMiYIDLc0NQfTtFpNds8AI45WpFVO%2BWl8yiyN3%2F0Vc7r7ObUsnDlC2DWfKSpy6dtMpzGo%2B6Riz%2FmtksB7zNHIVZRvXOh0QZvOfTqv1Zp4WkxM4oVa%2FurDrQnWMC5QHjs9cCPf7P1jDiGxn9Ymgd1x4rot1u5pU3l%2Bo49Gt2jtj%2FliT2u06HzF%2FZqbnFLVf1wwKD%2BE%2Fr3m6ovogDaw90aGrCTRjevU1E1nwyxdu0%2FLvF0sA9q2592ZnucfseY4wTGenvqdGndEW9%2FgoLGXy8JKXawZud%2F%2F9kGmJAIJhEml7XylNODl0DFmX%2FzVFzapu874UlQWlZhMKRBqpdwIfvQ%2BvV5B%2F2rDKcO19SBY2W0Gjch2gL07%2FmRMpWsHFrkjAEXjyhVQ2VCLU0wOFmD7aA%2Bm82zonpRl1%2FvTK1LNBHVFb3MZfvj6T34UzOVzrTchus6tZd8EjK41icdtCG5jwrTREJyPJrSC%2BfwFoR2XoRt%2BIJR5IadA6gVhsaG5FlA2Rmj9Rk43XCv5rJPYvfIwYizQ63HFehFPQvD5aGw7CP0Y8FcMOe69L4GOqUB13w3%2BHOackPnOldpUbXx3hntMPnfUqZlArdV%2FycumFegfs2Novh%2FC18nQPNOVq0RHPJj48QhvbzH1yqE4BflwOzgqZxGWh69K8rp0parQ%2BX%2BnmpCnrmSI7rGUegEfMS0qirHu2dFftEMyXh6%2FulkOsD8jo3mtEeaRTaNhjzT%2FJOfstK1uMyfGmCfAe2R2wsKoyLeZyHcIXxT0sEjkIeK20pQmCG4&X-Amz-Signature=711796aa2204c17bc4de74067310b5ac339e14a094bef75393b015c85951c130&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTVJHBF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDqbUfvW7BIFUvDT43okqXea%2BFVRnUArlMW7Fpwi4RfIwIgDlS87f4jvG%2Fp3CpoVC2GRgoUAkPlI%2BLH%2F9lrwGwloi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAshHqChhuz4cXhHircA4QS6MZB7Urn6biwPsnz0UDO4BHr4cDT8u0OJwNRMBU97gTjsJf0Udx7Tv6tGbTjn3UkF4kQf2dxZB5UUMiYIDLc0NQfTtFpNds8AI45WpFVO%2BWl8yiyN3%2F0Vc7r7ObUsnDlC2DWfKSpy6dtMpzGo%2B6Riz%2FmtksB7zNHIVZRvXOh0QZvOfTqv1Zp4WkxM4oVa%2FurDrQnWMC5QHjs9cCPf7P1jDiGxn9Ymgd1x4rot1u5pU3l%2Bo49Gt2jtj%2FliT2u06HzF%2FZqbnFLVf1wwKD%2BE%2Fr3m6ovogDaw90aGrCTRjevU1E1nwyxdu0%2FLvF0sA9q2592ZnucfseY4wTGenvqdGndEW9%2FgoLGXy8JKXawZud%2F%2F9kGmJAIJhEml7XylNODl0DFmX%2FzVFzapu874UlQWlZhMKRBqpdwIfvQ%2BvV5B%2F2rDKcO19SBY2W0Gjch2gL07%2FmRMpWsHFrkjAEXjyhVQ2VCLU0wOFmD7aA%2Bm82zonpRl1%2FvTK1LNBHVFb3MZfvj6T34UzOVzrTchus6tZd8EjK41icdtCG5jwrTREJyPJrSC%2BfwFoR2XoRt%2BIJR5IadA6gVhsaG5FlA2Rmj9Rk43XCv5rJPYvfIwYizQ63HFehFPQvD5aGw7CP0Y8FcMOe69L4GOqUB13w3%2BHOackPnOldpUbXx3hntMPnfUqZlArdV%2FycumFegfs2Novh%2FC18nQPNOVq0RHPJj48QhvbzH1yqE4BflwOzgqZxGWh69K8rp0parQ%2BX%2BnmpCnrmSI7rGUegEfMS0qirHu2dFftEMyXh6%2FulkOsD8jo3mtEeaRTaNhjzT%2FJOfstK1uMyfGmCfAe2R2wsKoyLeZyHcIXxT0sEjkIeK20pQmCG4&X-Amz-Signature=83eddef6b6d16cdebd08e80f258b2fafaf2c705a3044c97f99aa72b1f2519c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
