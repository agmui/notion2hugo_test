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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6D4EBV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAUlf4Z7UH2K9maR10hzgatLEWe8wW0QWRrTL5QuDZlAiBjhCupHN%2BalB2Qlh0v0%2F2Ie9gcfGkl3%2BMNJ2GzEoxUUCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Yy1SQzhkJG%2B7BvGKtwDGAJvCZ1qHTWhRx9rrd8Tp4Sz4ekRfMDsSIIb4aJzJb9CK%2BXdkLR5o5idD1jCALZJprRrCWmNr1CLu%2FGWf44OU78BHTq0zNZO1E62cFN0A5cRxmFh0Mv%2F6y64S18s4BVDBsLsTQm7jOQgCN4zCsnRQ5csypm9a7EPajkfCCdFru4msWIxPuFL20EWjbIM5Ln%2Fyhx5iLzIhqS9jZ4YOfEfB13Q%2FvrbH8CzFUYL4nh8hK%2FHslMKjbjAOPlpHTtpLZhUFWOcdXuZBQp9TH6q6vt32z4gtTFU42ccG24x62syMf%2FGMG7o%2BTjZKgfmbgg57eozfhk0phTQh0nzMof9CpcRBbcPecudLTeEERrxdO5ipDIk9zM7WZhunSwDacGpw3wo10JutBFa2J7rZ8EwsiVFoCzusRGJpNT3cwjjRDnEqtCLjd9%2B%2F33fAORF%2F5j4Gp1FT1PQ5vM6CnS%2BuluQIs5QI8a%2FRSbSOzE1F1nCILiFXv84hcguEI8mlGrdQmskoxBvDntUYTLD2Nk7bLc5yQgU2%2F%2B9HCYFoIqqkT%2FYQHxku9hGY9Kps1THmCYQ5%2BP2PFjT93RC0FTnvEFwTHUuDTA5o6od0GCMf70stUIoB4mcqXEs%2FFRc4XBq%2Bb877cowos2GwwY6pgFybI172p%2B4a4%2BB4apA3jg7UZB8I76Cr84SGl%2FS%2FWrAozLc5Kc0KgN24COlJ%2BfxtiXTNs%2BBgljbKiKl17XC5CAeG7hc%2FGr5N%2BbGNn1%2ByAeTsKKwquR%2FD4%2FJ%2F6xLrqGlN1cH2xjQpvkc8zZnB5jfrwy0hz2St%2FVgzOLgKMUjnnV7eU0ep9GkuAX0%2BUsCf7W7EY8pfoOGJhZk4nK3kBs6D%2B8YPTd1VScv&X-Amz-Signature=e9bdf7f1aea0e6d6c53843c22c8df86cfb7c805df9e13221c6bbab6b24d5507c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6D4EBV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAUlf4Z7UH2K9maR10hzgatLEWe8wW0QWRrTL5QuDZlAiBjhCupHN%2BalB2Qlh0v0%2F2Ie9gcfGkl3%2BMNJ2GzEoxUUCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Yy1SQzhkJG%2B7BvGKtwDGAJvCZ1qHTWhRx9rrd8Tp4Sz4ekRfMDsSIIb4aJzJb9CK%2BXdkLR5o5idD1jCALZJprRrCWmNr1CLu%2FGWf44OU78BHTq0zNZO1E62cFN0A5cRxmFh0Mv%2F6y64S18s4BVDBsLsTQm7jOQgCN4zCsnRQ5csypm9a7EPajkfCCdFru4msWIxPuFL20EWjbIM5Ln%2Fyhx5iLzIhqS9jZ4YOfEfB13Q%2FvrbH8CzFUYL4nh8hK%2FHslMKjbjAOPlpHTtpLZhUFWOcdXuZBQp9TH6q6vt32z4gtTFU42ccG24x62syMf%2FGMG7o%2BTjZKgfmbgg57eozfhk0phTQh0nzMof9CpcRBbcPecudLTeEERrxdO5ipDIk9zM7WZhunSwDacGpw3wo10JutBFa2J7rZ8EwsiVFoCzusRGJpNT3cwjjRDnEqtCLjd9%2B%2F33fAORF%2F5j4Gp1FT1PQ5vM6CnS%2BuluQIs5QI8a%2FRSbSOzE1F1nCILiFXv84hcguEI8mlGrdQmskoxBvDntUYTLD2Nk7bLc5yQgU2%2F%2B9HCYFoIqqkT%2FYQHxku9hGY9Kps1THmCYQ5%2BP2PFjT93RC0FTnvEFwTHUuDTA5o6od0GCMf70stUIoB4mcqXEs%2FFRc4XBq%2Bb877cowos2GwwY6pgFybI172p%2B4a4%2BB4apA3jg7UZB8I76Cr84SGl%2FS%2FWrAozLc5Kc0KgN24COlJ%2BfxtiXTNs%2BBgljbKiKl17XC5CAeG7hc%2FGr5N%2BbGNn1%2ByAeTsKKwquR%2FD4%2FJ%2F6xLrqGlN1cH2xjQpvkc8zZnB5jfrwy0hz2St%2FVgzOLgKMUjnnV7eU0ep9GkuAX0%2BUsCf7W7EY8pfoOGJhZk4nK3kBs6D%2B8YPTd1VScv&X-Amz-Signature=6ed5245bf261224912919a9d4bfee9a3ce6c91dafdb9839620c310a611313b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6D4EBV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAUlf4Z7UH2K9maR10hzgatLEWe8wW0QWRrTL5QuDZlAiBjhCupHN%2BalB2Qlh0v0%2F2Ie9gcfGkl3%2BMNJ2GzEoxUUCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Yy1SQzhkJG%2B7BvGKtwDGAJvCZ1qHTWhRx9rrd8Tp4Sz4ekRfMDsSIIb4aJzJb9CK%2BXdkLR5o5idD1jCALZJprRrCWmNr1CLu%2FGWf44OU78BHTq0zNZO1E62cFN0A5cRxmFh0Mv%2F6y64S18s4BVDBsLsTQm7jOQgCN4zCsnRQ5csypm9a7EPajkfCCdFru4msWIxPuFL20EWjbIM5Ln%2Fyhx5iLzIhqS9jZ4YOfEfB13Q%2FvrbH8CzFUYL4nh8hK%2FHslMKjbjAOPlpHTtpLZhUFWOcdXuZBQp9TH6q6vt32z4gtTFU42ccG24x62syMf%2FGMG7o%2BTjZKgfmbgg57eozfhk0phTQh0nzMof9CpcRBbcPecudLTeEERrxdO5ipDIk9zM7WZhunSwDacGpw3wo10JutBFa2J7rZ8EwsiVFoCzusRGJpNT3cwjjRDnEqtCLjd9%2B%2F33fAORF%2F5j4Gp1FT1PQ5vM6CnS%2BuluQIs5QI8a%2FRSbSOzE1F1nCILiFXv84hcguEI8mlGrdQmskoxBvDntUYTLD2Nk7bLc5yQgU2%2F%2B9HCYFoIqqkT%2FYQHxku9hGY9Kps1THmCYQ5%2BP2PFjT93RC0FTnvEFwTHUuDTA5o6od0GCMf70stUIoB4mcqXEs%2FFRc4XBq%2Bb877cowos2GwwY6pgFybI172p%2B4a4%2BB4apA3jg7UZB8I76Cr84SGl%2FS%2FWrAozLc5Kc0KgN24COlJ%2BfxtiXTNs%2BBgljbKiKl17XC5CAeG7hc%2FGr5N%2BbGNn1%2ByAeTsKKwquR%2FD4%2FJ%2F6xLrqGlN1cH2xjQpvkc8zZnB5jfrwy0hz2St%2FVgzOLgKMUjnnV7eU0ep9GkuAX0%2BUsCf7W7EY8pfoOGJhZk4nK3kBs6D%2B8YPTd1VScv&X-Amz-Signature=1bacc4e1a164fb11af49cabe9dc460e76109273323a569b753ce8280106a9add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6D4EBV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAUlf4Z7UH2K9maR10hzgatLEWe8wW0QWRrTL5QuDZlAiBjhCupHN%2BalB2Qlh0v0%2F2Ie9gcfGkl3%2BMNJ2GzEoxUUCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Yy1SQzhkJG%2B7BvGKtwDGAJvCZ1qHTWhRx9rrd8Tp4Sz4ekRfMDsSIIb4aJzJb9CK%2BXdkLR5o5idD1jCALZJprRrCWmNr1CLu%2FGWf44OU78BHTq0zNZO1E62cFN0A5cRxmFh0Mv%2F6y64S18s4BVDBsLsTQm7jOQgCN4zCsnRQ5csypm9a7EPajkfCCdFru4msWIxPuFL20EWjbIM5Ln%2Fyhx5iLzIhqS9jZ4YOfEfB13Q%2FvrbH8CzFUYL4nh8hK%2FHslMKjbjAOPlpHTtpLZhUFWOcdXuZBQp9TH6q6vt32z4gtTFU42ccG24x62syMf%2FGMG7o%2BTjZKgfmbgg57eozfhk0phTQh0nzMof9CpcRBbcPecudLTeEERrxdO5ipDIk9zM7WZhunSwDacGpw3wo10JutBFa2J7rZ8EwsiVFoCzusRGJpNT3cwjjRDnEqtCLjd9%2B%2F33fAORF%2F5j4Gp1FT1PQ5vM6CnS%2BuluQIs5QI8a%2FRSbSOzE1F1nCILiFXv84hcguEI8mlGrdQmskoxBvDntUYTLD2Nk7bLc5yQgU2%2F%2B9HCYFoIqqkT%2FYQHxku9hGY9Kps1THmCYQ5%2BP2PFjT93RC0FTnvEFwTHUuDTA5o6od0GCMf70stUIoB4mcqXEs%2FFRc4XBq%2Bb877cowos2GwwY6pgFybI172p%2B4a4%2BB4apA3jg7UZB8I76Cr84SGl%2FS%2FWrAozLc5Kc0KgN24COlJ%2BfxtiXTNs%2BBgljbKiKl17XC5CAeG7hc%2FGr5N%2BbGNn1%2ByAeTsKKwquR%2FD4%2FJ%2F6xLrqGlN1cH2xjQpvkc8zZnB5jfrwy0hz2St%2FVgzOLgKMUjnnV7eU0ep9GkuAX0%2BUsCf7W7EY8pfoOGJhZk4nK3kBs6D%2B8YPTd1VScv&X-Amz-Signature=988f4ecd055be64d6ec998b5aac88c65cb5277bdc1aeca9eb326b26f0bfadef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6D4EBV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAUlf4Z7UH2K9maR10hzgatLEWe8wW0QWRrTL5QuDZlAiBjhCupHN%2BalB2Qlh0v0%2F2Ie9gcfGkl3%2BMNJ2GzEoxUUCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Yy1SQzhkJG%2B7BvGKtwDGAJvCZ1qHTWhRx9rrd8Tp4Sz4ekRfMDsSIIb4aJzJb9CK%2BXdkLR5o5idD1jCALZJprRrCWmNr1CLu%2FGWf44OU78BHTq0zNZO1E62cFN0A5cRxmFh0Mv%2F6y64S18s4BVDBsLsTQm7jOQgCN4zCsnRQ5csypm9a7EPajkfCCdFru4msWIxPuFL20EWjbIM5Ln%2Fyhx5iLzIhqS9jZ4YOfEfB13Q%2FvrbH8CzFUYL4nh8hK%2FHslMKjbjAOPlpHTtpLZhUFWOcdXuZBQp9TH6q6vt32z4gtTFU42ccG24x62syMf%2FGMG7o%2BTjZKgfmbgg57eozfhk0phTQh0nzMof9CpcRBbcPecudLTeEERrxdO5ipDIk9zM7WZhunSwDacGpw3wo10JutBFa2J7rZ8EwsiVFoCzusRGJpNT3cwjjRDnEqtCLjd9%2B%2F33fAORF%2F5j4Gp1FT1PQ5vM6CnS%2BuluQIs5QI8a%2FRSbSOzE1F1nCILiFXv84hcguEI8mlGrdQmskoxBvDntUYTLD2Nk7bLc5yQgU2%2F%2B9HCYFoIqqkT%2FYQHxku9hGY9Kps1THmCYQ5%2BP2PFjT93RC0FTnvEFwTHUuDTA5o6od0GCMf70stUIoB4mcqXEs%2FFRc4XBq%2Bb877cowos2GwwY6pgFybI172p%2B4a4%2BB4apA3jg7UZB8I76Cr84SGl%2FS%2FWrAozLc5Kc0KgN24COlJ%2BfxtiXTNs%2BBgljbKiKl17XC5CAeG7hc%2FGr5N%2BbGNn1%2ByAeTsKKwquR%2FD4%2FJ%2F6xLrqGlN1cH2xjQpvkc8zZnB5jfrwy0hz2St%2FVgzOLgKMUjnnV7eU0ep9GkuAX0%2BUsCf7W7EY8pfoOGJhZk4nK3kBs6D%2B8YPTd1VScv&X-Amz-Signature=fab31396042b59cb02a80f7f510276f5a7ccd223ddb6d8885344bb355ad61e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6D4EBV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAUlf4Z7UH2K9maR10hzgatLEWe8wW0QWRrTL5QuDZlAiBjhCupHN%2BalB2Qlh0v0%2F2Ie9gcfGkl3%2BMNJ2GzEoxUUCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Yy1SQzhkJG%2B7BvGKtwDGAJvCZ1qHTWhRx9rrd8Tp4Sz4ekRfMDsSIIb4aJzJb9CK%2BXdkLR5o5idD1jCALZJprRrCWmNr1CLu%2FGWf44OU78BHTq0zNZO1E62cFN0A5cRxmFh0Mv%2F6y64S18s4BVDBsLsTQm7jOQgCN4zCsnRQ5csypm9a7EPajkfCCdFru4msWIxPuFL20EWjbIM5Ln%2Fyhx5iLzIhqS9jZ4YOfEfB13Q%2FvrbH8CzFUYL4nh8hK%2FHslMKjbjAOPlpHTtpLZhUFWOcdXuZBQp9TH6q6vt32z4gtTFU42ccG24x62syMf%2FGMG7o%2BTjZKgfmbgg57eozfhk0phTQh0nzMof9CpcRBbcPecudLTeEERrxdO5ipDIk9zM7WZhunSwDacGpw3wo10JutBFa2J7rZ8EwsiVFoCzusRGJpNT3cwjjRDnEqtCLjd9%2B%2F33fAORF%2F5j4Gp1FT1PQ5vM6CnS%2BuluQIs5QI8a%2FRSbSOzE1F1nCILiFXv84hcguEI8mlGrdQmskoxBvDntUYTLD2Nk7bLc5yQgU2%2F%2B9HCYFoIqqkT%2FYQHxku9hGY9Kps1THmCYQ5%2BP2PFjT93RC0FTnvEFwTHUuDTA5o6od0GCMf70stUIoB4mcqXEs%2FFRc4XBq%2Bb877cowos2GwwY6pgFybI172p%2B4a4%2BB4apA3jg7UZB8I76Cr84SGl%2FS%2FWrAozLc5Kc0KgN24COlJ%2BfxtiXTNs%2BBgljbKiKl17XC5CAeG7hc%2FGr5N%2BbGNn1%2ByAeTsKKwquR%2FD4%2FJ%2F6xLrqGlN1cH2xjQpvkc8zZnB5jfrwy0hz2St%2FVgzOLgKMUjnnV7eU0ep9GkuAX0%2BUsCf7W7EY8pfoOGJhZk4nK3kBs6D%2B8YPTd1VScv&X-Amz-Signature=b93611e03a42dd226fef2f4ac98a25d165152570c7dd3da226c7838ab338f45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6D4EBV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAUlf4Z7UH2K9maR10hzgatLEWe8wW0QWRrTL5QuDZlAiBjhCupHN%2BalB2Qlh0v0%2F2Ie9gcfGkl3%2BMNJ2GzEoxUUCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Yy1SQzhkJG%2B7BvGKtwDGAJvCZ1qHTWhRx9rrd8Tp4Sz4ekRfMDsSIIb4aJzJb9CK%2BXdkLR5o5idD1jCALZJprRrCWmNr1CLu%2FGWf44OU78BHTq0zNZO1E62cFN0A5cRxmFh0Mv%2F6y64S18s4BVDBsLsTQm7jOQgCN4zCsnRQ5csypm9a7EPajkfCCdFru4msWIxPuFL20EWjbIM5Ln%2Fyhx5iLzIhqS9jZ4YOfEfB13Q%2FvrbH8CzFUYL4nh8hK%2FHslMKjbjAOPlpHTtpLZhUFWOcdXuZBQp9TH6q6vt32z4gtTFU42ccG24x62syMf%2FGMG7o%2BTjZKgfmbgg57eozfhk0phTQh0nzMof9CpcRBbcPecudLTeEERrxdO5ipDIk9zM7WZhunSwDacGpw3wo10JutBFa2J7rZ8EwsiVFoCzusRGJpNT3cwjjRDnEqtCLjd9%2B%2F33fAORF%2F5j4Gp1FT1PQ5vM6CnS%2BuluQIs5QI8a%2FRSbSOzE1F1nCILiFXv84hcguEI8mlGrdQmskoxBvDntUYTLD2Nk7bLc5yQgU2%2F%2B9HCYFoIqqkT%2FYQHxku9hGY9Kps1THmCYQ5%2BP2PFjT93RC0FTnvEFwTHUuDTA5o6od0GCMf70stUIoB4mcqXEs%2FFRc4XBq%2Bb877cowos2GwwY6pgFybI172p%2B4a4%2BB4apA3jg7UZB8I76Cr84SGl%2FS%2FWrAozLc5Kc0KgN24COlJ%2BfxtiXTNs%2BBgljbKiKl17XC5CAeG7hc%2FGr5N%2BbGNn1%2ByAeTsKKwquR%2FD4%2FJ%2F6xLrqGlN1cH2xjQpvkc8zZnB5jfrwy0hz2St%2FVgzOLgKMUjnnV7eU0ep9GkuAX0%2BUsCf7W7EY8pfoOGJhZk4nK3kBs6D%2B8YPTd1VScv&X-Amz-Signature=83073a13f0549aec8e98b03748eb6d67419cd7f17e10785d4f2c30ec13aff079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6D4EBV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAUlf4Z7UH2K9maR10hzgatLEWe8wW0QWRrTL5QuDZlAiBjhCupHN%2BalB2Qlh0v0%2F2Ie9gcfGkl3%2BMNJ2GzEoxUUCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Yy1SQzhkJG%2B7BvGKtwDGAJvCZ1qHTWhRx9rrd8Tp4Sz4ekRfMDsSIIb4aJzJb9CK%2BXdkLR5o5idD1jCALZJprRrCWmNr1CLu%2FGWf44OU78BHTq0zNZO1E62cFN0A5cRxmFh0Mv%2F6y64S18s4BVDBsLsTQm7jOQgCN4zCsnRQ5csypm9a7EPajkfCCdFru4msWIxPuFL20EWjbIM5Ln%2Fyhx5iLzIhqS9jZ4YOfEfB13Q%2FvrbH8CzFUYL4nh8hK%2FHslMKjbjAOPlpHTtpLZhUFWOcdXuZBQp9TH6q6vt32z4gtTFU42ccG24x62syMf%2FGMG7o%2BTjZKgfmbgg57eozfhk0phTQh0nzMof9CpcRBbcPecudLTeEERrxdO5ipDIk9zM7WZhunSwDacGpw3wo10JutBFa2J7rZ8EwsiVFoCzusRGJpNT3cwjjRDnEqtCLjd9%2B%2F33fAORF%2F5j4Gp1FT1PQ5vM6CnS%2BuluQIs5QI8a%2FRSbSOzE1F1nCILiFXv84hcguEI8mlGrdQmskoxBvDntUYTLD2Nk7bLc5yQgU2%2F%2B9HCYFoIqqkT%2FYQHxku9hGY9Kps1THmCYQ5%2BP2PFjT93RC0FTnvEFwTHUuDTA5o6od0GCMf70stUIoB4mcqXEs%2FFRc4XBq%2Bb877cowos2GwwY6pgFybI172p%2B4a4%2BB4apA3jg7UZB8I76Cr84SGl%2FS%2FWrAozLc5Kc0KgN24COlJ%2BfxtiXTNs%2BBgljbKiKl17XC5CAeG7hc%2FGr5N%2BbGNn1%2ByAeTsKKwquR%2FD4%2FJ%2F6xLrqGlN1cH2xjQpvkc8zZnB5jfrwy0hz2St%2FVgzOLgKMUjnnV7eU0ep9GkuAX0%2BUsCf7W7EY8pfoOGJhZk4nK3kBs6D%2B8YPTd1VScv&X-Amz-Signature=027778d9d42344dab565666d6ae9b34f1fb0445313be0572d7b59f8c12b9baa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
