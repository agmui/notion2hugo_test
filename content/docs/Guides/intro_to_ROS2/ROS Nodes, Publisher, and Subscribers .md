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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THJEKOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHfmy9CztytxnvD87M2613F36Tw6cNB%2Bz8bc%2BB30I%2F9kAiBFFER61FBGbejzbolT4avnE096u%2Be77GBJ1zj6U5l3XCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRPFe6QTZCMIvwHtpKtwDkZ3zyq%2FOkAMybss6UD%2BgusqrU%2FBGaaIOfejvCqawpqJtiVhRIa8WG7R5GJeOYb%2Fhv459zebZD2C%2BNCCxlpr45g3HQu6xnWEWOeeTkB4DN%2Fi7py4DS88jEJJtbldNgYT0%2FMylArTkQLaeT6cR9gXWYJrF%2B0Xgkh9Xnap7bOzLlwLZM7wVTx0EgabCM2yPIF1ySKPUNGFHO0L4SwMfqGaKomOsGSBG46Nm4WbXJ5PHYhQWNnNXuVwRNqkex4K7M0dpD5Vp4zN%2Bza%2FzjfgbI1gyOWKAFT84XPUtMDDZy9cS96RZY1uNmt8MCWVJ%2B%2FA%2BWEu2Vut6zs4QDGQOHHXTWrDsqcyeqv6uuWywZqsg23FgfwT5L30CH24M%2FSjZ%2FabLJHerZtvMwkgZ43VKFGEq%2BKBS7N80mQiNdJPYOWrTJ5RGRht6ToECCJR2N9KyI4HZPPInTY%2FxF0z8m9jGgOLXA5O7%2B%2BXacG09xEiWBg1cy%2FImfX4%2FrDNNhjg5i9GJqC7n8G%2FwZDAJETx87Bq57dzZiZb9RZ5qRDjSvNxaTFworVr1XndZ6MMVYqf0MJBX2S62py0LjJM8B0EU4QJ470KlZWuL0auxLtYHOwlKkCY5CvLVLNJlBQa1j2cY7goWPe0w9Mr7xAY6pgHn%2BK5MnyaPS9OdZLj%2Bv3u8ETtwM67HINa%2Fh%2Bd0JqBnHtyW4SvLN8L5RIJibRg3i6EjCPCA%2F%2B0yIGnhCS1A8yISTbJ5ViluJsm89xa78hWYoxXVWdYNiFSPZ8T6M8gz6j0dycXP1K%2BjUybna5X9dgZAdOnJcW71ccVR3v7OLG4OKVwkCAAd15tGrYr3j%2Bemg54igTVKn8jKyL0mR8pkam8rh1oGzl4K&X-Amz-Signature=a0d436c2862ddfdda1f5c5ba7a96bfacd0877b60e4aa9e4b3409d42440363548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THJEKOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHfmy9CztytxnvD87M2613F36Tw6cNB%2Bz8bc%2BB30I%2F9kAiBFFER61FBGbejzbolT4avnE096u%2Be77GBJ1zj6U5l3XCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRPFe6QTZCMIvwHtpKtwDkZ3zyq%2FOkAMybss6UD%2BgusqrU%2FBGaaIOfejvCqawpqJtiVhRIa8WG7R5GJeOYb%2Fhv459zebZD2C%2BNCCxlpr45g3HQu6xnWEWOeeTkB4DN%2Fi7py4DS88jEJJtbldNgYT0%2FMylArTkQLaeT6cR9gXWYJrF%2B0Xgkh9Xnap7bOzLlwLZM7wVTx0EgabCM2yPIF1ySKPUNGFHO0L4SwMfqGaKomOsGSBG46Nm4WbXJ5PHYhQWNnNXuVwRNqkex4K7M0dpD5Vp4zN%2Bza%2FzjfgbI1gyOWKAFT84XPUtMDDZy9cS96RZY1uNmt8MCWVJ%2B%2FA%2BWEu2Vut6zs4QDGQOHHXTWrDsqcyeqv6uuWywZqsg23FgfwT5L30CH24M%2FSjZ%2FabLJHerZtvMwkgZ43VKFGEq%2BKBS7N80mQiNdJPYOWrTJ5RGRht6ToECCJR2N9KyI4HZPPInTY%2FxF0z8m9jGgOLXA5O7%2B%2BXacG09xEiWBg1cy%2FImfX4%2FrDNNhjg5i9GJqC7n8G%2FwZDAJETx87Bq57dzZiZb9RZ5qRDjSvNxaTFworVr1XndZ6MMVYqf0MJBX2S62py0LjJM8B0EU4QJ470KlZWuL0auxLtYHOwlKkCY5CvLVLNJlBQa1j2cY7goWPe0w9Mr7xAY6pgHn%2BK5MnyaPS9OdZLj%2Bv3u8ETtwM67HINa%2Fh%2Bd0JqBnHtyW4SvLN8L5RIJibRg3i6EjCPCA%2F%2B0yIGnhCS1A8yISTbJ5ViluJsm89xa78hWYoxXVWdYNiFSPZ8T6M8gz6j0dycXP1K%2BjUybna5X9dgZAdOnJcW71ccVR3v7OLG4OKVwkCAAd15tGrYr3j%2Bemg54igTVKn8jKyL0mR8pkam8rh1oGzl4K&X-Amz-Signature=18ebcafe05a78118468f96dc7353fdf933f3641c82a0eaf974fab997dec63988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THJEKOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHfmy9CztytxnvD87M2613F36Tw6cNB%2Bz8bc%2BB30I%2F9kAiBFFER61FBGbejzbolT4avnE096u%2Be77GBJ1zj6U5l3XCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRPFe6QTZCMIvwHtpKtwDkZ3zyq%2FOkAMybss6UD%2BgusqrU%2FBGaaIOfejvCqawpqJtiVhRIa8WG7R5GJeOYb%2Fhv459zebZD2C%2BNCCxlpr45g3HQu6xnWEWOeeTkB4DN%2Fi7py4DS88jEJJtbldNgYT0%2FMylArTkQLaeT6cR9gXWYJrF%2B0Xgkh9Xnap7bOzLlwLZM7wVTx0EgabCM2yPIF1ySKPUNGFHO0L4SwMfqGaKomOsGSBG46Nm4WbXJ5PHYhQWNnNXuVwRNqkex4K7M0dpD5Vp4zN%2Bza%2FzjfgbI1gyOWKAFT84XPUtMDDZy9cS96RZY1uNmt8MCWVJ%2B%2FA%2BWEu2Vut6zs4QDGQOHHXTWrDsqcyeqv6uuWywZqsg23FgfwT5L30CH24M%2FSjZ%2FabLJHerZtvMwkgZ43VKFGEq%2BKBS7N80mQiNdJPYOWrTJ5RGRht6ToECCJR2N9KyI4HZPPInTY%2FxF0z8m9jGgOLXA5O7%2B%2BXacG09xEiWBg1cy%2FImfX4%2FrDNNhjg5i9GJqC7n8G%2FwZDAJETx87Bq57dzZiZb9RZ5qRDjSvNxaTFworVr1XndZ6MMVYqf0MJBX2S62py0LjJM8B0EU4QJ470KlZWuL0auxLtYHOwlKkCY5CvLVLNJlBQa1j2cY7goWPe0w9Mr7xAY6pgHn%2BK5MnyaPS9OdZLj%2Bv3u8ETtwM67HINa%2Fh%2Bd0JqBnHtyW4SvLN8L5RIJibRg3i6EjCPCA%2F%2B0yIGnhCS1A8yISTbJ5ViluJsm89xa78hWYoxXVWdYNiFSPZ8T6M8gz6j0dycXP1K%2BjUybna5X9dgZAdOnJcW71ccVR3v7OLG4OKVwkCAAd15tGrYr3j%2Bemg54igTVKn8jKyL0mR8pkam8rh1oGzl4K&X-Amz-Signature=5221e4c0229613c75ffe326ae6366f604c1e1aed14cd2880da227d82c19d2dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THJEKOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHfmy9CztytxnvD87M2613F36Tw6cNB%2Bz8bc%2BB30I%2F9kAiBFFER61FBGbejzbolT4avnE096u%2Be77GBJ1zj6U5l3XCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRPFe6QTZCMIvwHtpKtwDkZ3zyq%2FOkAMybss6UD%2BgusqrU%2FBGaaIOfejvCqawpqJtiVhRIa8WG7R5GJeOYb%2Fhv459zebZD2C%2BNCCxlpr45g3HQu6xnWEWOeeTkB4DN%2Fi7py4DS88jEJJtbldNgYT0%2FMylArTkQLaeT6cR9gXWYJrF%2B0Xgkh9Xnap7bOzLlwLZM7wVTx0EgabCM2yPIF1ySKPUNGFHO0L4SwMfqGaKomOsGSBG46Nm4WbXJ5PHYhQWNnNXuVwRNqkex4K7M0dpD5Vp4zN%2Bza%2FzjfgbI1gyOWKAFT84XPUtMDDZy9cS96RZY1uNmt8MCWVJ%2B%2FA%2BWEu2Vut6zs4QDGQOHHXTWrDsqcyeqv6uuWywZqsg23FgfwT5L30CH24M%2FSjZ%2FabLJHerZtvMwkgZ43VKFGEq%2BKBS7N80mQiNdJPYOWrTJ5RGRht6ToECCJR2N9KyI4HZPPInTY%2FxF0z8m9jGgOLXA5O7%2B%2BXacG09xEiWBg1cy%2FImfX4%2FrDNNhjg5i9GJqC7n8G%2FwZDAJETx87Bq57dzZiZb9RZ5qRDjSvNxaTFworVr1XndZ6MMVYqf0MJBX2S62py0LjJM8B0EU4QJ470KlZWuL0auxLtYHOwlKkCY5CvLVLNJlBQa1j2cY7goWPe0w9Mr7xAY6pgHn%2BK5MnyaPS9OdZLj%2Bv3u8ETtwM67HINa%2Fh%2Bd0JqBnHtyW4SvLN8L5RIJibRg3i6EjCPCA%2F%2B0yIGnhCS1A8yISTbJ5ViluJsm89xa78hWYoxXVWdYNiFSPZ8T6M8gz6j0dycXP1K%2BjUybna5X9dgZAdOnJcW71ccVR3v7OLG4OKVwkCAAd15tGrYr3j%2Bemg54igTVKn8jKyL0mR8pkam8rh1oGzl4K&X-Amz-Signature=36730cf7370337d303aec9598302bc99d5f008720553af792ae9439a1262a9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THJEKOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHfmy9CztytxnvD87M2613F36Tw6cNB%2Bz8bc%2BB30I%2F9kAiBFFER61FBGbejzbolT4avnE096u%2Be77GBJ1zj6U5l3XCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRPFe6QTZCMIvwHtpKtwDkZ3zyq%2FOkAMybss6UD%2BgusqrU%2FBGaaIOfejvCqawpqJtiVhRIa8WG7R5GJeOYb%2Fhv459zebZD2C%2BNCCxlpr45g3HQu6xnWEWOeeTkB4DN%2Fi7py4DS88jEJJtbldNgYT0%2FMylArTkQLaeT6cR9gXWYJrF%2B0Xgkh9Xnap7bOzLlwLZM7wVTx0EgabCM2yPIF1ySKPUNGFHO0L4SwMfqGaKomOsGSBG46Nm4WbXJ5PHYhQWNnNXuVwRNqkex4K7M0dpD5Vp4zN%2Bza%2FzjfgbI1gyOWKAFT84XPUtMDDZy9cS96RZY1uNmt8MCWVJ%2B%2FA%2BWEu2Vut6zs4QDGQOHHXTWrDsqcyeqv6uuWywZqsg23FgfwT5L30CH24M%2FSjZ%2FabLJHerZtvMwkgZ43VKFGEq%2BKBS7N80mQiNdJPYOWrTJ5RGRht6ToECCJR2N9KyI4HZPPInTY%2FxF0z8m9jGgOLXA5O7%2B%2BXacG09xEiWBg1cy%2FImfX4%2FrDNNhjg5i9GJqC7n8G%2FwZDAJETx87Bq57dzZiZb9RZ5qRDjSvNxaTFworVr1XndZ6MMVYqf0MJBX2S62py0LjJM8B0EU4QJ470KlZWuL0auxLtYHOwlKkCY5CvLVLNJlBQa1j2cY7goWPe0w9Mr7xAY6pgHn%2BK5MnyaPS9OdZLj%2Bv3u8ETtwM67HINa%2Fh%2Bd0JqBnHtyW4SvLN8L5RIJibRg3i6EjCPCA%2F%2B0yIGnhCS1A8yISTbJ5ViluJsm89xa78hWYoxXVWdYNiFSPZ8T6M8gz6j0dycXP1K%2BjUybna5X9dgZAdOnJcW71ccVR3v7OLG4OKVwkCAAd15tGrYr3j%2Bemg54igTVKn8jKyL0mR8pkam8rh1oGzl4K&X-Amz-Signature=bbf77249a5f219d0dd27e94d37d23004140e0ffd90f6c37e1bafdf046f130b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THJEKOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHfmy9CztytxnvD87M2613F36Tw6cNB%2Bz8bc%2BB30I%2F9kAiBFFER61FBGbejzbolT4avnE096u%2Be77GBJ1zj6U5l3XCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRPFe6QTZCMIvwHtpKtwDkZ3zyq%2FOkAMybss6UD%2BgusqrU%2FBGaaIOfejvCqawpqJtiVhRIa8WG7R5GJeOYb%2Fhv459zebZD2C%2BNCCxlpr45g3HQu6xnWEWOeeTkB4DN%2Fi7py4DS88jEJJtbldNgYT0%2FMylArTkQLaeT6cR9gXWYJrF%2B0Xgkh9Xnap7bOzLlwLZM7wVTx0EgabCM2yPIF1ySKPUNGFHO0L4SwMfqGaKomOsGSBG46Nm4WbXJ5PHYhQWNnNXuVwRNqkex4K7M0dpD5Vp4zN%2Bza%2FzjfgbI1gyOWKAFT84XPUtMDDZy9cS96RZY1uNmt8MCWVJ%2B%2FA%2BWEu2Vut6zs4QDGQOHHXTWrDsqcyeqv6uuWywZqsg23FgfwT5L30CH24M%2FSjZ%2FabLJHerZtvMwkgZ43VKFGEq%2BKBS7N80mQiNdJPYOWrTJ5RGRht6ToECCJR2N9KyI4HZPPInTY%2FxF0z8m9jGgOLXA5O7%2B%2BXacG09xEiWBg1cy%2FImfX4%2FrDNNhjg5i9GJqC7n8G%2FwZDAJETx87Bq57dzZiZb9RZ5qRDjSvNxaTFworVr1XndZ6MMVYqf0MJBX2S62py0LjJM8B0EU4QJ470KlZWuL0auxLtYHOwlKkCY5CvLVLNJlBQa1j2cY7goWPe0w9Mr7xAY6pgHn%2BK5MnyaPS9OdZLj%2Bv3u8ETtwM67HINa%2Fh%2Bd0JqBnHtyW4SvLN8L5RIJibRg3i6EjCPCA%2F%2B0yIGnhCS1A8yISTbJ5ViluJsm89xa78hWYoxXVWdYNiFSPZ8T6M8gz6j0dycXP1K%2BjUybna5X9dgZAdOnJcW71ccVR3v7OLG4OKVwkCAAd15tGrYr3j%2Bemg54igTVKn8jKyL0mR8pkam8rh1oGzl4K&X-Amz-Signature=b33007dc16c243e0993ac4970a7cf749afa130382669bb0f8b542f9c502834df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THJEKOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHfmy9CztytxnvD87M2613F36Tw6cNB%2Bz8bc%2BB30I%2F9kAiBFFER61FBGbejzbolT4avnE096u%2Be77GBJ1zj6U5l3XCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRPFe6QTZCMIvwHtpKtwDkZ3zyq%2FOkAMybss6UD%2BgusqrU%2FBGaaIOfejvCqawpqJtiVhRIa8WG7R5GJeOYb%2Fhv459zebZD2C%2BNCCxlpr45g3HQu6xnWEWOeeTkB4DN%2Fi7py4DS88jEJJtbldNgYT0%2FMylArTkQLaeT6cR9gXWYJrF%2B0Xgkh9Xnap7bOzLlwLZM7wVTx0EgabCM2yPIF1ySKPUNGFHO0L4SwMfqGaKomOsGSBG46Nm4WbXJ5PHYhQWNnNXuVwRNqkex4K7M0dpD5Vp4zN%2Bza%2FzjfgbI1gyOWKAFT84XPUtMDDZy9cS96RZY1uNmt8MCWVJ%2B%2FA%2BWEu2Vut6zs4QDGQOHHXTWrDsqcyeqv6uuWywZqsg23FgfwT5L30CH24M%2FSjZ%2FabLJHerZtvMwkgZ43VKFGEq%2BKBS7N80mQiNdJPYOWrTJ5RGRht6ToECCJR2N9KyI4HZPPInTY%2FxF0z8m9jGgOLXA5O7%2B%2BXacG09xEiWBg1cy%2FImfX4%2FrDNNhjg5i9GJqC7n8G%2FwZDAJETx87Bq57dzZiZb9RZ5qRDjSvNxaTFworVr1XndZ6MMVYqf0MJBX2S62py0LjJM8B0EU4QJ470KlZWuL0auxLtYHOwlKkCY5CvLVLNJlBQa1j2cY7goWPe0w9Mr7xAY6pgHn%2BK5MnyaPS9OdZLj%2Bv3u8ETtwM67HINa%2Fh%2Bd0JqBnHtyW4SvLN8L5RIJibRg3i6EjCPCA%2F%2B0yIGnhCS1A8yISTbJ5ViluJsm89xa78hWYoxXVWdYNiFSPZ8T6M8gz6j0dycXP1K%2BjUybna5X9dgZAdOnJcW71ccVR3v7OLG4OKVwkCAAd15tGrYr3j%2Bemg54igTVKn8jKyL0mR8pkam8rh1oGzl4K&X-Amz-Signature=c7bf13ff744b984b062b55eb56e9182e726b69aab05892f8c3a1920dae37c35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THJEKOH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHfmy9CztytxnvD87M2613F36Tw6cNB%2Bz8bc%2BB30I%2F9kAiBFFER61FBGbejzbolT4avnE096u%2Be77GBJ1zj6U5l3XCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRPFe6QTZCMIvwHtpKtwDkZ3zyq%2FOkAMybss6UD%2BgusqrU%2FBGaaIOfejvCqawpqJtiVhRIa8WG7R5GJeOYb%2Fhv459zebZD2C%2BNCCxlpr45g3HQu6xnWEWOeeTkB4DN%2Fi7py4DS88jEJJtbldNgYT0%2FMylArTkQLaeT6cR9gXWYJrF%2B0Xgkh9Xnap7bOzLlwLZM7wVTx0EgabCM2yPIF1ySKPUNGFHO0L4SwMfqGaKomOsGSBG46Nm4WbXJ5PHYhQWNnNXuVwRNqkex4K7M0dpD5Vp4zN%2Bza%2FzjfgbI1gyOWKAFT84XPUtMDDZy9cS96RZY1uNmt8MCWVJ%2B%2FA%2BWEu2Vut6zs4QDGQOHHXTWrDsqcyeqv6uuWywZqsg23FgfwT5L30CH24M%2FSjZ%2FabLJHerZtvMwkgZ43VKFGEq%2BKBS7N80mQiNdJPYOWrTJ5RGRht6ToECCJR2N9KyI4HZPPInTY%2FxF0z8m9jGgOLXA5O7%2B%2BXacG09xEiWBg1cy%2FImfX4%2FrDNNhjg5i9GJqC7n8G%2FwZDAJETx87Bq57dzZiZb9RZ5qRDjSvNxaTFworVr1XndZ6MMVYqf0MJBX2S62py0LjJM8B0EU4QJ470KlZWuL0auxLtYHOwlKkCY5CvLVLNJlBQa1j2cY7goWPe0w9Mr7xAY6pgHn%2BK5MnyaPS9OdZLj%2Bv3u8ETtwM67HINa%2Fh%2Bd0JqBnHtyW4SvLN8L5RIJibRg3i6EjCPCA%2F%2B0yIGnhCS1A8yISTbJ5ViluJsm89xa78hWYoxXVWdYNiFSPZ8T6M8gz6j0dycXP1K%2BjUybna5X9dgZAdOnJcW71ccVR3v7OLG4OKVwkCAAd15tGrYr3j%2Bemg54igTVKn8jKyL0mR8pkam8rh1oGzl4K&X-Amz-Signature=4b3cd705b0c990df02e79b20460156f63c5ba313bca1e73d00cf2a1549d66b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
