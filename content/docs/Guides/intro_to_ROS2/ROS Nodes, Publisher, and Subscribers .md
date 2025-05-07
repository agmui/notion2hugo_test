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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQYGJ3V%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Bf7i%2FmwhRmNhpYspaJdJsHh8BSYKZQcsJyQb%2BwiJL5AiBIifb9ChkmgfRQGm9xwug3uBE56ZIobKxN66mx91mWAir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnM1gtbDPB%2B1NWbEyKtwD94zte0UKp3j%2FfCjQk5gQvmFYxF1FJx40hgrJR5vjgtHnVFMhELhs6nvPkb82%2FhBe7DakeVwmk%2FLDW2NY4KjUW%2Bra5QKo6H7ZaGtZgk%2FRkymWy4Rt6o9KnFUq6mvgOU%2BZCLqYBKTn6ylz2Cup2Udc21dea8iRIDFZlL1NVzeyJnyS1egKBvV6Xk1Bl2fs6zjj2ihLRjdcTDpBeQRFeihnaH8IExWsNllgzBSVEC7%2FHHCaaR4cUlKeNgopB1DsQZJDf%2Fj3zQtRkCMV28uxnFEPDqj7XfoB4eesjWArmB149Uo9lu4cUyHgUpSHcFSnDRpjvZNPv8wOfF0LRBxyrbA1oECFswI9Z9l41XtKEn4GOnvN2TOhYyc5RzKYVcteZ%2FhaYVLGRYpW4zQZnFY1BwGImCjfzMYSUtcBOc8xwxk2DdxadN%2FTR4wMSHlFUX9pT34XD7tNy3kEGocfKAu2hy7unIbrU0w%2BE2XEDj%2FSFESWPsaaa%2BwUxtKGBUWWpGgJBdk3sfsF8EEpuZ5izQIAC8yqGjKvkA7oRT%2BI%2BeR39INRm2K8f6RbLQ019Yz7Cm8BUpnEwg2vHpeQb2ROexrTJFlIV5XpC2hk7GqGqqzBzi0yK8%2BOK30LLSmrod0dzNgwkYfswAY6pgFAxl3amEW%2F2xxDkXBe0OHkLnKTRpB3rs9yK5%2Blk1vuAfv4WOXMazlIJ3ytYqMa%2BD5fmcA3fmpWNxC5Har1mStVZBBsClXgeoi2PKdXjoDvC2%2F9ir%2BTeL4dHfhLZdIc6z%2BkDiN5vSEowK%2FeqWyzHZGx8Tb4H2n9dweZNGE8Rni7pXxDAVs3p0yqJM4OVvRrlm%2FHyI7Ykt6ZKt4e%2FuOspeC2PypiI9rP&X-Amz-Signature=880a47408c74d44e6923657bdce0350bf2f4c243bb4bfedaad213031fb644254&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQYGJ3V%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Bf7i%2FmwhRmNhpYspaJdJsHh8BSYKZQcsJyQb%2BwiJL5AiBIifb9ChkmgfRQGm9xwug3uBE56ZIobKxN66mx91mWAir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnM1gtbDPB%2B1NWbEyKtwD94zte0UKp3j%2FfCjQk5gQvmFYxF1FJx40hgrJR5vjgtHnVFMhELhs6nvPkb82%2FhBe7DakeVwmk%2FLDW2NY4KjUW%2Bra5QKo6H7ZaGtZgk%2FRkymWy4Rt6o9KnFUq6mvgOU%2BZCLqYBKTn6ylz2Cup2Udc21dea8iRIDFZlL1NVzeyJnyS1egKBvV6Xk1Bl2fs6zjj2ihLRjdcTDpBeQRFeihnaH8IExWsNllgzBSVEC7%2FHHCaaR4cUlKeNgopB1DsQZJDf%2Fj3zQtRkCMV28uxnFEPDqj7XfoB4eesjWArmB149Uo9lu4cUyHgUpSHcFSnDRpjvZNPv8wOfF0LRBxyrbA1oECFswI9Z9l41XtKEn4GOnvN2TOhYyc5RzKYVcteZ%2FhaYVLGRYpW4zQZnFY1BwGImCjfzMYSUtcBOc8xwxk2DdxadN%2FTR4wMSHlFUX9pT34XD7tNy3kEGocfKAu2hy7unIbrU0w%2BE2XEDj%2FSFESWPsaaa%2BwUxtKGBUWWpGgJBdk3sfsF8EEpuZ5izQIAC8yqGjKvkA7oRT%2BI%2BeR39INRm2K8f6RbLQ019Yz7Cm8BUpnEwg2vHpeQb2ROexrTJFlIV5XpC2hk7GqGqqzBzi0yK8%2BOK30LLSmrod0dzNgwkYfswAY6pgFAxl3amEW%2F2xxDkXBe0OHkLnKTRpB3rs9yK5%2Blk1vuAfv4WOXMazlIJ3ytYqMa%2BD5fmcA3fmpWNxC5Har1mStVZBBsClXgeoi2PKdXjoDvC2%2F9ir%2BTeL4dHfhLZdIc6z%2BkDiN5vSEowK%2FeqWyzHZGx8Tb4H2n9dweZNGE8Rni7pXxDAVs3p0yqJM4OVvRrlm%2FHyI7Ykt6ZKt4e%2FuOspeC2PypiI9rP&X-Amz-Signature=c020b9b53013f40c71fe1e6059da0d564ec48f38ebef3cef66b9657c799615b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQYGJ3V%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Bf7i%2FmwhRmNhpYspaJdJsHh8BSYKZQcsJyQb%2BwiJL5AiBIifb9ChkmgfRQGm9xwug3uBE56ZIobKxN66mx91mWAir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnM1gtbDPB%2B1NWbEyKtwD94zte0UKp3j%2FfCjQk5gQvmFYxF1FJx40hgrJR5vjgtHnVFMhELhs6nvPkb82%2FhBe7DakeVwmk%2FLDW2NY4KjUW%2Bra5QKo6H7ZaGtZgk%2FRkymWy4Rt6o9KnFUq6mvgOU%2BZCLqYBKTn6ylz2Cup2Udc21dea8iRIDFZlL1NVzeyJnyS1egKBvV6Xk1Bl2fs6zjj2ihLRjdcTDpBeQRFeihnaH8IExWsNllgzBSVEC7%2FHHCaaR4cUlKeNgopB1DsQZJDf%2Fj3zQtRkCMV28uxnFEPDqj7XfoB4eesjWArmB149Uo9lu4cUyHgUpSHcFSnDRpjvZNPv8wOfF0LRBxyrbA1oECFswI9Z9l41XtKEn4GOnvN2TOhYyc5RzKYVcteZ%2FhaYVLGRYpW4zQZnFY1BwGImCjfzMYSUtcBOc8xwxk2DdxadN%2FTR4wMSHlFUX9pT34XD7tNy3kEGocfKAu2hy7unIbrU0w%2BE2XEDj%2FSFESWPsaaa%2BwUxtKGBUWWpGgJBdk3sfsF8EEpuZ5izQIAC8yqGjKvkA7oRT%2BI%2BeR39INRm2K8f6RbLQ019Yz7Cm8BUpnEwg2vHpeQb2ROexrTJFlIV5XpC2hk7GqGqqzBzi0yK8%2BOK30LLSmrod0dzNgwkYfswAY6pgFAxl3amEW%2F2xxDkXBe0OHkLnKTRpB3rs9yK5%2Blk1vuAfv4WOXMazlIJ3ytYqMa%2BD5fmcA3fmpWNxC5Har1mStVZBBsClXgeoi2PKdXjoDvC2%2F9ir%2BTeL4dHfhLZdIc6z%2BkDiN5vSEowK%2FeqWyzHZGx8Tb4H2n9dweZNGE8Rni7pXxDAVs3p0yqJM4OVvRrlm%2FHyI7Ykt6ZKt4e%2FuOspeC2PypiI9rP&X-Amz-Signature=8d95fbbfae2b98a318271871170476aeb29f8ac8122799bfea0064c85f8c5165&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQYGJ3V%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Bf7i%2FmwhRmNhpYspaJdJsHh8BSYKZQcsJyQb%2BwiJL5AiBIifb9ChkmgfRQGm9xwug3uBE56ZIobKxN66mx91mWAir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnM1gtbDPB%2B1NWbEyKtwD94zte0UKp3j%2FfCjQk5gQvmFYxF1FJx40hgrJR5vjgtHnVFMhELhs6nvPkb82%2FhBe7DakeVwmk%2FLDW2NY4KjUW%2Bra5QKo6H7ZaGtZgk%2FRkymWy4Rt6o9KnFUq6mvgOU%2BZCLqYBKTn6ylz2Cup2Udc21dea8iRIDFZlL1NVzeyJnyS1egKBvV6Xk1Bl2fs6zjj2ihLRjdcTDpBeQRFeihnaH8IExWsNllgzBSVEC7%2FHHCaaR4cUlKeNgopB1DsQZJDf%2Fj3zQtRkCMV28uxnFEPDqj7XfoB4eesjWArmB149Uo9lu4cUyHgUpSHcFSnDRpjvZNPv8wOfF0LRBxyrbA1oECFswI9Z9l41XtKEn4GOnvN2TOhYyc5RzKYVcteZ%2FhaYVLGRYpW4zQZnFY1BwGImCjfzMYSUtcBOc8xwxk2DdxadN%2FTR4wMSHlFUX9pT34XD7tNy3kEGocfKAu2hy7unIbrU0w%2BE2XEDj%2FSFESWPsaaa%2BwUxtKGBUWWpGgJBdk3sfsF8EEpuZ5izQIAC8yqGjKvkA7oRT%2BI%2BeR39INRm2K8f6RbLQ019Yz7Cm8BUpnEwg2vHpeQb2ROexrTJFlIV5XpC2hk7GqGqqzBzi0yK8%2BOK30LLSmrod0dzNgwkYfswAY6pgFAxl3amEW%2F2xxDkXBe0OHkLnKTRpB3rs9yK5%2Blk1vuAfv4WOXMazlIJ3ytYqMa%2BD5fmcA3fmpWNxC5Har1mStVZBBsClXgeoi2PKdXjoDvC2%2F9ir%2BTeL4dHfhLZdIc6z%2BkDiN5vSEowK%2FeqWyzHZGx8Tb4H2n9dweZNGE8Rni7pXxDAVs3p0yqJM4OVvRrlm%2FHyI7Ykt6ZKt4e%2FuOspeC2PypiI9rP&X-Amz-Signature=61738d962a609cef15333ed1e5ed0aad35e5d72021163344b67ffd179dcd6bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQYGJ3V%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Bf7i%2FmwhRmNhpYspaJdJsHh8BSYKZQcsJyQb%2BwiJL5AiBIifb9ChkmgfRQGm9xwug3uBE56ZIobKxN66mx91mWAir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnM1gtbDPB%2B1NWbEyKtwD94zte0UKp3j%2FfCjQk5gQvmFYxF1FJx40hgrJR5vjgtHnVFMhELhs6nvPkb82%2FhBe7DakeVwmk%2FLDW2NY4KjUW%2Bra5QKo6H7ZaGtZgk%2FRkymWy4Rt6o9KnFUq6mvgOU%2BZCLqYBKTn6ylz2Cup2Udc21dea8iRIDFZlL1NVzeyJnyS1egKBvV6Xk1Bl2fs6zjj2ihLRjdcTDpBeQRFeihnaH8IExWsNllgzBSVEC7%2FHHCaaR4cUlKeNgopB1DsQZJDf%2Fj3zQtRkCMV28uxnFEPDqj7XfoB4eesjWArmB149Uo9lu4cUyHgUpSHcFSnDRpjvZNPv8wOfF0LRBxyrbA1oECFswI9Z9l41XtKEn4GOnvN2TOhYyc5RzKYVcteZ%2FhaYVLGRYpW4zQZnFY1BwGImCjfzMYSUtcBOc8xwxk2DdxadN%2FTR4wMSHlFUX9pT34XD7tNy3kEGocfKAu2hy7unIbrU0w%2BE2XEDj%2FSFESWPsaaa%2BwUxtKGBUWWpGgJBdk3sfsF8EEpuZ5izQIAC8yqGjKvkA7oRT%2BI%2BeR39INRm2K8f6RbLQ019Yz7Cm8BUpnEwg2vHpeQb2ROexrTJFlIV5XpC2hk7GqGqqzBzi0yK8%2BOK30LLSmrod0dzNgwkYfswAY6pgFAxl3amEW%2F2xxDkXBe0OHkLnKTRpB3rs9yK5%2Blk1vuAfv4WOXMazlIJ3ytYqMa%2BD5fmcA3fmpWNxC5Har1mStVZBBsClXgeoi2PKdXjoDvC2%2F9ir%2BTeL4dHfhLZdIc6z%2BkDiN5vSEowK%2FeqWyzHZGx8Tb4H2n9dweZNGE8Rni7pXxDAVs3p0yqJM4OVvRrlm%2FHyI7Ykt6ZKt4e%2FuOspeC2PypiI9rP&X-Amz-Signature=12caa3c138d36a254f0970e88919d9de893ee28d54f23d2b9ad68f76946f2ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQYGJ3V%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Bf7i%2FmwhRmNhpYspaJdJsHh8BSYKZQcsJyQb%2BwiJL5AiBIifb9ChkmgfRQGm9xwug3uBE56ZIobKxN66mx91mWAir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnM1gtbDPB%2B1NWbEyKtwD94zte0UKp3j%2FfCjQk5gQvmFYxF1FJx40hgrJR5vjgtHnVFMhELhs6nvPkb82%2FhBe7DakeVwmk%2FLDW2NY4KjUW%2Bra5QKo6H7ZaGtZgk%2FRkymWy4Rt6o9KnFUq6mvgOU%2BZCLqYBKTn6ylz2Cup2Udc21dea8iRIDFZlL1NVzeyJnyS1egKBvV6Xk1Bl2fs6zjj2ihLRjdcTDpBeQRFeihnaH8IExWsNllgzBSVEC7%2FHHCaaR4cUlKeNgopB1DsQZJDf%2Fj3zQtRkCMV28uxnFEPDqj7XfoB4eesjWArmB149Uo9lu4cUyHgUpSHcFSnDRpjvZNPv8wOfF0LRBxyrbA1oECFswI9Z9l41XtKEn4GOnvN2TOhYyc5RzKYVcteZ%2FhaYVLGRYpW4zQZnFY1BwGImCjfzMYSUtcBOc8xwxk2DdxadN%2FTR4wMSHlFUX9pT34XD7tNy3kEGocfKAu2hy7unIbrU0w%2BE2XEDj%2FSFESWPsaaa%2BwUxtKGBUWWpGgJBdk3sfsF8EEpuZ5izQIAC8yqGjKvkA7oRT%2BI%2BeR39INRm2K8f6RbLQ019Yz7Cm8BUpnEwg2vHpeQb2ROexrTJFlIV5XpC2hk7GqGqqzBzi0yK8%2BOK30LLSmrod0dzNgwkYfswAY6pgFAxl3amEW%2F2xxDkXBe0OHkLnKTRpB3rs9yK5%2Blk1vuAfv4WOXMazlIJ3ytYqMa%2BD5fmcA3fmpWNxC5Har1mStVZBBsClXgeoi2PKdXjoDvC2%2F9ir%2BTeL4dHfhLZdIc6z%2BkDiN5vSEowK%2FeqWyzHZGx8Tb4H2n9dweZNGE8Rni7pXxDAVs3p0yqJM4OVvRrlm%2FHyI7Ykt6ZKt4e%2FuOspeC2PypiI9rP&X-Amz-Signature=4040c5787ffd0f63b2d982089bb76d9ac43c16e51f20bb87e38a493e5c598c89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQYGJ3V%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Bf7i%2FmwhRmNhpYspaJdJsHh8BSYKZQcsJyQb%2BwiJL5AiBIifb9ChkmgfRQGm9xwug3uBE56ZIobKxN66mx91mWAir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnM1gtbDPB%2B1NWbEyKtwD94zte0UKp3j%2FfCjQk5gQvmFYxF1FJx40hgrJR5vjgtHnVFMhELhs6nvPkb82%2FhBe7DakeVwmk%2FLDW2NY4KjUW%2Bra5QKo6H7ZaGtZgk%2FRkymWy4Rt6o9KnFUq6mvgOU%2BZCLqYBKTn6ylz2Cup2Udc21dea8iRIDFZlL1NVzeyJnyS1egKBvV6Xk1Bl2fs6zjj2ihLRjdcTDpBeQRFeihnaH8IExWsNllgzBSVEC7%2FHHCaaR4cUlKeNgopB1DsQZJDf%2Fj3zQtRkCMV28uxnFEPDqj7XfoB4eesjWArmB149Uo9lu4cUyHgUpSHcFSnDRpjvZNPv8wOfF0LRBxyrbA1oECFswI9Z9l41XtKEn4GOnvN2TOhYyc5RzKYVcteZ%2FhaYVLGRYpW4zQZnFY1BwGImCjfzMYSUtcBOc8xwxk2DdxadN%2FTR4wMSHlFUX9pT34XD7tNy3kEGocfKAu2hy7unIbrU0w%2BE2XEDj%2FSFESWPsaaa%2BwUxtKGBUWWpGgJBdk3sfsF8EEpuZ5izQIAC8yqGjKvkA7oRT%2BI%2BeR39INRm2K8f6RbLQ019Yz7Cm8BUpnEwg2vHpeQb2ROexrTJFlIV5XpC2hk7GqGqqzBzi0yK8%2BOK30LLSmrod0dzNgwkYfswAY6pgFAxl3amEW%2F2xxDkXBe0OHkLnKTRpB3rs9yK5%2Blk1vuAfv4WOXMazlIJ3ytYqMa%2BD5fmcA3fmpWNxC5Har1mStVZBBsClXgeoi2PKdXjoDvC2%2F9ir%2BTeL4dHfhLZdIc6z%2BkDiN5vSEowK%2FeqWyzHZGx8Tb4H2n9dweZNGE8Rni7pXxDAVs3p0yqJM4OVvRrlm%2FHyI7Ykt6ZKt4e%2FuOspeC2PypiI9rP&X-Amz-Signature=d87e405a812e534ae6cde54110dcc52eec04d3c305085f1e3382ff257cc5e70b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQYGJ3V%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Bf7i%2FmwhRmNhpYspaJdJsHh8BSYKZQcsJyQb%2BwiJL5AiBIifb9ChkmgfRQGm9xwug3uBE56ZIobKxN66mx91mWAir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnM1gtbDPB%2B1NWbEyKtwD94zte0UKp3j%2FfCjQk5gQvmFYxF1FJx40hgrJR5vjgtHnVFMhELhs6nvPkb82%2FhBe7DakeVwmk%2FLDW2NY4KjUW%2Bra5QKo6H7ZaGtZgk%2FRkymWy4Rt6o9KnFUq6mvgOU%2BZCLqYBKTn6ylz2Cup2Udc21dea8iRIDFZlL1NVzeyJnyS1egKBvV6Xk1Bl2fs6zjj2ihLRjdcTDpBeQRFeihnaH8IExWsNllgzBSVEC7%2FHHCaaR4cUlKeNgopB1DsQZJDf%2Fj3zQtRkCMV28uxnFEPDqj7XfoB4eesjWArmB149Uo9lu4cUyHgUpSHcFSnDRpjvZNPv8wOfF0LRBxyrbA1oECFswI9Z9l41XtKEn4GOnvN2TOhYyc5RzKYVcteZ%2FhaYVLGRYpW4zQZnFY1BwGImCjfzMYSUtcBOc8xwxk2DdxadN%2FTR4wMSHlFUX9pT34XD7tNy3kEGocfKAu2hy7unIbrU0w%2BE2XEDj%2FSFESWPsaaa%2BwUxtKGBUWWpGgJBdk3sfsF8EEpuZ5izQIAC8yqGjKvkA7oRT%2BI%2BeR39INRm2K8f6RbLQ019Yz7Cm8BUpnEwg2vHpeQb2ROexrTJFlIV5XpC2hk7GqGqqzBzi0yK8%2BOK30LLSmrod0dzNgwkYfswAY6pgFAxl3amEW%2F2xxDkXBe0OHkLnKTRpB3rs9yK5%2Blk1vuAfv4WOXMazlIJ3ytYqMa%2BD5fmcA3fmpWNxC5Har1mStVZBBsClXgeoi2PKdXjoDvC2%2F9ir%2BTeL4dHfhLZdIc6z%2BkDiN5vSEowK%2FeqWyzHZGx8Tb4H2n9dweZNGE8Rni7pXxDAVs3p0yqJM4OVvRrlm%2FHyI7Ykt6ZKt4e%2FuOspeC2PypiI9rP&X-Amz-Signature=e09c4b4997f6121bd8d693a6227736de0c30ed58282a960f5b3825aec466d5df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
