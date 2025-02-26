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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYQKTNR5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC00ncIqkTwLyzs8RQgxo%2Fy5de5LT1EO2%2F0ALkWIHeBYAiBGByi38BNduMLe%2BIIeNRWsypMqcsBDi4xDHQKuXHmGvSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMCLrqM9vtZwBqdLptKtwDSySxjd%2Ftuao%2BUo%2Bz%2FEvz19cTlMTQYao%2BDSmIgR4zAXt1JswWUx2Vf7hz9mVzLv2bx%2FuWrEi%2F%2BKAHvqto%2FyQvWv60zDZABuH1ZuyIffLVuppQ5qtDsI99RGhAkWRkpZ%2BUrCIUfofiyLJsZE4mw4TTyza47tQDHkqEgCdXwhjHul6kweA0a5nMmDzqHaE7G90B3CIivKoX%2FFOvGEBJOjKvnV9UdkoHxo1IQ2huJ%2Foj8fLeQowY%2BIS3goBqBdh%2Beu5SWpotEjgca5SazYk55jKS90Xj01dxuW6nyPr4j88omeDqJ49ELHUB7a8qQvUEZDiZrBo47DX4tW8oopoBuzxF1bU%2FUVafSkBc3F6BCvP4esIoV4ZcFpCaaTc0NMoCKVkXzRiO9xJ4HKX6sRmUglhVzMUJTrJzr0MBMYbJxEv%2FNTvtOyeUpFsafi3fw8kRYfFi2MbkXykG8QXR2MK3Vn4UssiBa35oLS0%2BHJvTNkJp6mB8Mf4MJWVJ95%2FNRSooChfL%2BN%2FJtsP%2F2cRt1RfeydqhLva%2FO3SgcrzrA%2F0r2Qn5MQzU2AIXUgMVVM4NcqmtLmbUcE5WyHQQ4rNxoRM7OHuKNmnmX8Gcx%2BB%2F9a%2B5NKBjfcmnadSIOQaj61PBNoAwnb35vQY6pgF49IoeUn0FEtV55E3hTZx0EWAyxilyfpsNttTx%2FmJexbkBKF4bTYNqyw%2FPicZfqfDVCGTRCXALshb3cIaHTupbsP9OMcvr38LTk3aKlpoPopglbdKfxoqo8Xolr3w6gOOv44D1g0E1qqTQj2R72bTn6mGKiUyShvsoOLMrpZeg0yZxogJ15Okqn6pzIZhCRTYwW%2B%2BPKgqdLuP0%2BDYBz7yhUw0fSpQr&X-Amz-Signature=a1dd693dcfd1637842b3292b764627ca59e15bc99375d3ec9371ba2d3e029d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYQKTNR5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC00ncIqkTwLyzs8RQgxo%2Fy5de5LT1EO2%2F0ALkWIHeBYAiBGByi38BNduMLe%2BIIeNRWsypMqcsBDi4xDHQKuXHmGvSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMCLrqM9vtZwBqdLptKtwDSySxjd%2Ftuao%2BUo%2Bz%2FEvz19cTlMTQYao%2BDSmIgR4zAXt1JswWUx2Vf7hz9mVzLv2bx%2FuWrEi%2F%2BKAHvqto%2FyQvWv60zDZABuH1ZuyIffLVuppQ5qtDsI99RGhAkWRkpZ%2BUrCIUfofiyLJsZE4mw4TTyza47tQDHkqEgCdXwhjHul6kweA0a5nMmDzqHaE7G90B3CIivKoX%2FFOvGEBJOjKvnV9UdkoHxo1IQ2huJ%2Foj8fLeQowY%2BIS3goBqBdh%2Beu5SWpotEjgca5SazYk55jKS90Xj01dxuW6nyPr4j88omeDqJ49ELHUB7a8qQvUEZDiZrBo47DX4tW8oopoBuzxF1bU%2FUVafSkBc3F6BCvP4esIoV4ZcFpCaaTc0NMoCKVkXzRiO9xJ4HKX6sRmUglhVzMUJTrJzr0MBMYbJxEv%2FNTvtOyeUpFsafi3fw8kRYfFi2MbkXykG8QXR2MK3Vn4UssiBa35oLS0%2BHJvTNkJp6mB8Mf4MJWVJ95%2FNRSooChfL%2BN%2FJtsP%2F2cRt1RfeydqhLva%2FO3SgcrzrA%2F0r2Qn5MQzU2AIXUgMVVM4NcqmtLmbUcE5WyHQQ4rNxoRM7OHuKNmnmX8Gcx%2BB%2F9a%2B5NKBjfcmnadSIOQaj61PBNoAwnb35vQY6pgF49IoeUn0FEtV55E3hTZx0EWAyxilyfpsNttTx%2FmJexbkBKF4bTYNqyw%2FPicZfqfDVCGTRCXALshb3cIaHTupbsP9OMcvr38LTk3aKlpoPopglbdKfxoqo8Xolr3w6gOOv44D1g0E1qqTQj2R72bTn6mGKiUyShvsoOLMrpZeg0yZxogJ15Okqn6pzIZhCRTYwW%2B%2BPKgqdLuP0%2BDYBz7yhUw0fSpQr&X-Amz-Signature=c9ed51cc22b908334961951ecbb92bb1090356446bda18c99d74ccb14575d9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYQKTNR5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC00ncIqkTwLyzs8RQgxo%2Fy5de5LT1EO2%2F0ALkWIHeBYAiBGByi38BNduMLe%2BIIeNRWsypMqcsBDi4xDHQKuXHmGvSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMCLrqM9vtZwBqdLptKtwDSySxjd%2Ftuao%2BUo%2Bz%2FEvz19cTlMTQYao%2BDSmIgR4zAXt1JswWUx2Vf7hz9mVzLv2bx%2FuWrEi%2F%2BKAHvqto%2FyQvWv60zDZABuH1ZuyIffLVuppQ5qtDsI99RGhAkWRkpZ%2BUrCIUfofiyLJsZE4mw4TTyza47tQDHkqEgCdXwhjHul6kweA0a5nMmDzqHaE7G90B3CIivKoX%2FFOvGEBJOjKvnV9UdkoHxo1IQ2huJ%2Foj8fLeQowY%2BIS3goBqBdh%2Beu5SWpotEjgca5SazYk55jKS90Xj01dxuW6nyPr4j88omeDqJ49ELHUB7a8qQvUEZDiZrBo47DX4tW8oopoBuzxF1bU%2FUVafSkBc3F6BCvP4esIoV4ZcFpCaaTc0NMoCKVkXzRiO9xJ4HKX6sRmUglhVzMUJTrJzr0MBMYbJxEv%2FNTvtOyeUpFsafi3fw8kRYfFi2MbkXykG8QXR2MK3Vn4UssiBa35oLS0%2BHJvTNkJp6mB8Mf4MJWVJ95%2FNRSooChfL%2BN%2FJtsP%2F2cRt1RfeydqhLva%2FO3SgcrzrA%2F0r2Qn5MQzU2AIXUgMVVM4NcqmtLmbUcE5WyHQQ4rNxoRM7OHuKNmnmX8Gcx%2BB%2F9a%2B5NKBjfcmnadSIOQaj61PBNoAwnb35vQY6pgF49IoeUn0FEtV55E3hTZx0EWAyxilyfpsNttTx%2FmJexbkBKF4bTYNqyw%2FPicZfqfDVCGTRCXALshb3cIaHTupbsP9OMcvr38LTk3aKlpoPopglbdKfxoqo8Xolr3w6gOOv44D1g0E1qqTQj2R72bTn6mGKiUyShvsoOLMrpZeg0yZxogJ15Okqn6pzIZhCRTYwW%2B%2BPKgqdLuP0%2BDYBz7yhUw0fSpQr&X-Amz-Signature=53a68c95a89fb7b18bee864530e9864760998044fdff1d2d19ac4506c9c0e851&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYQKTNR5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC00ncIqkTwLyzs8RQgxo%2Fy5de5LT1EO2%2F0ALkWIHeBYAiBGByi38BNduMLe%2BIIeNRWsypMqcsBDi4xDHQKuXHmGvSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMCLrqM9vtZwBqdLptKtwDSySxjd%2Ftuao%2BUo%2Bz%2FEvz19cTlMTQYao%2BDSmIgR4zAXt1JswWUx2Vf7hz9mVzLv2bx%2FuWrEi%2F%2BKAHvqto%2FyQvWv60zDZABuH1ZuyIffLVuppQ5qtDsI99RGhAkWRkpZ%2BUrCIUfofiyLJsZE4mw4TTyza47tQDHkqEgCdXwhjHul6kweA0a5nMmDzqHaE7G90B3CIivKoX%2FFOvGEBJOjKvnV9UdkoHxo1IQ2huJ%2Foj8fLeQowY%2BIS3goBqBdh%2Beu5SWpotEjgca5SazYk55jKS90Xj01dxuW6nyPr4j88omeDqJ49ELHUB7a8qQvUEZDiZrBo47DX4tW8oopoBuzxF1bU%2FUVafSkBc3F6BCvP4esIoV4ZcFpCaaTc0NMoCKVkXzRiO9xJ4HKX6sRmUglhVzMUJTrJzr0MBMYbJxEv%2FNTvtOyeUpFsafi3fw8kRYfFi2MbkXykG8QXR2MK3Vn4UssiBa35oLS0%2BHJvTNkJp6mB8Mf4MJWVJ95%2FNRSooChfL%2BN%2FJtsP%2F2cRt1RfeydqhLva%2FO3SgcrzrA%2F0r2Qn5MQzU2AIXUgMVVM4NcqmtLmbUcE5WyHQQ4rNxoRM7OHuKNmnmX8Gcx%2BB%2F9a%2B5NKBjfcmnadSIOQaj61PBNoAwnb35vQY6pgF49IoeUn0FEtV55E3hTZx0EWAyxilyfpsNttTx%2FmJexbkBKF4bTYNqyw%2FPicZfqfDVCGTRCXALshb3cIaHTupbsP9OMcvr38LTk3aKlpoPopglbdKfxoqo8Xolr3w6gOOv44D1g0E1qqTQj2R72bTn6mGKiUyShvsoOLMrpZeg0yZxogJ15Okqn6pzIZhCRTYwW%2B%2BPKgqdLuP0%2BDYBz7yhUw0fSpQr&X-Amz-Signature=a2b60c260007b43a05008861fd0b5f2d3e731086f5b87aa0e4b59a48dc22af79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYQKTNR5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC00ncIqkTwLyzs8RQgxo%2Fy5de5LT1EO2%2F0ALkWIHeBYAiBGByi38BNduMLe%2BIIeNRWsypMqcsBDi4xDHQKuXHmGvSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMCLrqM9vtZwBqdLptKtwDSySxjd%2Ftuao%2BUo%2Bz%2FEvz19cTlMTQYao%2BDSmIgR4zAXt1JswWUx2Vf7hz9mVzLv2bx%2FuWrEi%2F%2BKAHvqto%2FyQvWv60zDZABuH1ZuyIffLVuppQ5qtDsI99RGhAkWRkpZ%2BUrCIUfofiyLJsZE4mw4TTyza47tQDHkqEgCdXwhjHul6kweA0a5nMmDzqHaE7G90B3CIivKoX%2FFOvGEBJOjKvnV9UdkoHxo1IQ2huJ%2Foj8fLeQowY%2BIS3goBqBdh%2Beu5SWpotEjgca5SazYk55jKS90Xj01dxuW6nyPr4j88omeDqJ49ELHUB7a8qQvUEZDiZrBo47DX4tW8oopoBuzxF1bU%2FUVafSkBc3F6BCvP4esIoV4ZcFpCaaTc0NMoCKVkXzRiO9xJ4HKX6sRmUglhVzMUJTrJzr0MBMYbJxEv%2FNTvtOyeUpFsafi3fw8kRYfFi2MbkXykG8QXR2MK3Vn4UssiBa35oLS0%2BHJvTNkJp6mB8Mf4MJWVJ95%2FNRSooChfL%2BN%2FJtsP%2F2cRt1RfeydqhLva%2FO3SgcrzrA%2F0r2Qn5MQzU2AIXUgMVVM4NcqmtLmbUcE5WyHQQ4rNxoRM7OHuKNmnmX8Gcx%2BB%2F9a%2B5NKBjfcmnadSIOQaj61PBNoAwnb35vQY6pgF49IoeUn0FEtV55E3hTZx0EWAyxilyfpsNttTx%2FmJexbkBKF4bTYNqyw%2FPicZfqfDVCGTRCXALshb3cIaHTupbsP9OMcvr38LTk3aKlpoPopglbdKfxoqo8Xolr3w6gOOv44D1g0E1qqTQj2R72bTn6mGKiUyShvsoOLMrpZeg0yZxogJ15Okqn6pzIZhCRTYwW%2B%2BPKgqdLuP0%2BDYBz7yhUw0fSpQr&X-Amz-Signature=e76044caa423b871c975fdb4819b3e974ca8d37aa34032d2a55fecc36ec5315a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYQKTNR5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC00ncIqkTwLyzs8RQgxo%2Fy5de5LT1EO2%2F0ALkWIHeBYAiBGByi38BNduMLe%2BIIeNRWsypMqcsBDi4xDHQKuXHmGvSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMCLrqM9vtZwBqdLptKtwDSySxjd%2Ftuao%2BUo%2Bz%2FEvz19cTlMTQYao%2BDSmIgR4zAXt1JswWUx2Vf7hz9mVzLv2bx%2FuWrEi%2F%2BKAHvqto%2FyQvWv60zDZABuH1ZuyIffLVuppQ5qtDsI99RGhAkWRkpZ%2BUrCIUfofiyLJsZE4mw4TTyza47tQDHkqEgCdXwhjHul6kweA0a5nMmDzqHaE7G90B3CIivKoX%2FFOvGEBJOjKvnV9UdkoHxo1IQ2huJ%2Foj8fLeQowY%2BIS3goBqBdh%2Beu5SWpotEjgca5SazYk55jKS90Xj01dxuW6nyPr4j88omeDqJ49ELHUB7a8qQvUEZDiZrBo47DX4tW8oopoBuzxF1bU%2FUVafSkBc3F6BCvP4esIoV4ZcFpCaaTc0NMoCKVkXzRiO9xJ4HKX6sRmUglhVzMUJTrJzr0MBMYbJxEv%2FNTvtOyeUpFsafi3fw8kRYfFi2MbkXykG8QXR2MK3Vn4UssiBa35oLS0%2BHJvTNkJp6mB8Mf4MJWVJ95%2FNRSooChfL%2BN%2FJtsP%2F2cRt1RfeydqhLva%2FO3SgcrzrA%2F0r2Qn5MQzU2AIXUgMVVM4NcqmtLmbUcE5WyHQQ4rNxoRM7OHuKNmnmX8Gcx%2BB%2F9a%2B5NKBjfcmnadSIOQaj61PBNoAwnb35vQY6pgF49IoeUn0FEtV55E3hTZx0EWAyxilyfpsNttTx%2FmJexbkBKF4bTYNqyw%2FPicZfqfDVCGTRCXALshb3cIaHTupbsP9OMcvr38LTk3aKlpoPopglbdKfxoqo8Xolr3w6gOOv44D1g0E1qqTQj2R72bTn6mGKiUyShvsoOLMrpZeg0yZxogJ15Okqn6pzIZhCRTYwW%2B%2BPKgqdLuP0%2BDYBz7yhUw0fSpQr&X-Amz-Signature=751b5c599be86cb026a29a7efba8c6058601e0f38b54851ec8898a3711cc52d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYQKTNR5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC00ncIqkTwLyzs8RQgxo%2Fy5de5LT1EO2%2F0ALkWIHeBYAiBGByi38BNduMLe%2BIIeNRWsypMqcsBDi4xDHQKuXHmGvSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMCLrqM9vtZwBqdLptKtwDSySxjd%2Ftuao%2BUo%2Bz%2FEvz19cTlMTQYao%2BDSmIgR4zAXt1JswWUx2Vf7hz9mVzLv2bx%2FuWrEi%2F%2BKAHvqto%2FyQvWv60zDZABuH1ZuyIffLVuppQ5qtDsI99RGhAkWRkpZ%2BUrCIUfofiyLJsZE4mw4TTyza47tQDHkqEgCdXwhjHul6kweA0a5nMmDzqHaE7G90B3CIivKoX%2FFOvGEBJOjKvnV9UdkoHxo1IQ2huJ%2Foj8fLeQowY%2BIS3goBqBdh%2Beu5SWpotEjgca5SazYk55jKS90Xj01dxuW6nyPr4j88omeDqJ49ELHUB7a8qQvUEZDiZrBo47DX4tW8oopoBuzxF1bU%2FUVafSkBc3F6BCvP4esIoV4ZcFpCaaTc0NMoCKVkXzRiO9xJ4HKX6sRmUglhVzMUJTrJzr0MBMYbJxEv%2FNTvtOyeUpFsafi3fw8kRYfFi2MbkXykG8QXR2MK3Vn4UssiBa35oLS0%2BHJvTNkJp6mB8Mf4MJWVJ95%2FNRSooChfL%2BN%2FJtsP%2F2cRt1RfeydqhLva%2FO3SgcrzrA%2F0r2Qn5MQzU2AIXUgMVVM4NcqmtLmbUcE5WyHQQ4rNxoRM7OHuKNmnmX8Gcx%2BB%2F9a%2B5NKBjfcmnadSIOQaj61PBNoAwnb35vQY6pgF49IoeUn0FEtV55E3hTZx0EWAyxilyfpsNttTx%2FmJexbkBKF4bTYNqyw%2FPicZfqfDVCGTRCXALshb3cIaHTupbsP9OMcvr38LTk3aKlpoPopglbdKfxoqo8Xolr3w6gOOv44D1g0E1qqTQj2R72bTn6mGKiUyShvsoOLMrpZeg0yZxogJ15Okqn6pzIZhCRTYwW%2B%2BPKgqdLuP0%2BDYBz7yhUw0fSpQr&X-Amz-Signature=937905e96bac0a0cfe1e265acb9ac44f0775bbed9543746c9426bcb9351c2ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYQKTNR5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC00ncIqkTwLyzs8RQgxo%2Fy5de5LT1EO2%2F0ALkWIHeBYAiBGByi38BNduMLe%2BIIeNRWsypMqcsBDi4xDHQKuXHmGvSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMCLrqM9vtZwBqdLptKtwDSySxjd%2Ftuao%2BUo%2Bz%2FEvz19cTlMTQYao%2BDSmIgR4zAXt1JswWUx2Vf7hz9mVzLv2bx%2FuWrEi%2F%2BKAHvqto%2FyQvWv60zDZABuH1ZuyIffLVuppQ5qtDsI99RGhAkWRkpZ%2BUrCIUfofiyLJsZE4mw4TTyza47tQDHkqEgCdXwhjHul6kweA0a5nMmDzqHaE7G90B3CIivKoX%2FFOvGEBJOjKvnV9UdkoHxo1IQ2huJ%2Foj8fLeQowY%2BIS3goBqBdh%2Beu5SWpotEjgca5SazYk55jKS90Xj01dxuW6nyPr4j88omeDqJ49ELHUB7a8qQvUEZDiZrBo47DX4tW8oopoBuzxF1bU%2FUVafSkBc3F6BCvP4esIoV4ZcFpCaaTc0NMoCKVkXzRiO9xJ4HKX6sRmUglhVzMUJTrJzr0MBMYbJxEv%2FNTvtOyeUpFsafi3fw8kRYfFi2MbkXykG8QXR2MK3Vn4UssiBa35oLS0%2BHJvTNkJp6mB8Mf4MJWVJ95%2FNRSooChfL%2BN%2FJtsP%2F2cRt1RfeydqhLva%2FO3SgcrzrA%2F0r2Qn5MQzU2AIXUgMVVM4NcqmtLmbUcE5WyHQQ4rNxoRM7OHuKNmnmX8Gcx%2BB%2F9a%2B5NKBjfcmnadSIOQaj61PBNoAwnb35vQY6pgF49IoeUn0FEtV55E3hTZx0EWAyxilyfpsNttTx%2FmJexbkBKF4bTYNqyw%2FPicZfqfDVCGTRCXALshb3cIaHTupbsP9OMcvr38LTk3aKlpoPopglbdKfxoqo8Xolr3w6gOOv44D1g0E1qqTQj2R72bTn6mGKiUyShvsoOLMrpZeg0yZxogJ15Okqn6pzIZhCRTYwW%2B%2BPKgqdLuP0%2BDYBz7yhUw0fSpQr&X-Amz-Signature=f0260f08d3f52dd6969c129e338a913ed79de9bf37173cd36b89ba09acf1f19b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
