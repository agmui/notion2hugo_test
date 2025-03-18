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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSJARES%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZhFmdbWXXMAl70so7NGUKU72yDz0y7LbGAseLdgEEIAiBLpjcUp1vfPS0pUoiwBeiRSjl4u53L8XvMLdBIGw5QxCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJCDcs50a78wv3gCqKtwDtWOIFYwfvM30JuuQJSI5xA%2Bs0jCA9OjX6oLBUe%2BHwGWiB%2B6HfKspsfkHANxrN36XpSLzc1ADVFaJ7qJQ1NfI3oEkuoci52q2dn4FMw0FKPZJxkCrzmwboDpAgTsjX7crMHg00m34nxi5dXSHOOcESV4CIkGrFpS%2B2byvZi7CqHRY2OCxO8uMSPmoAB5Yf2j7NeFWViXjWNexrVC0qU4mbXMTYBPc4M2u37ft7wmAy1gHm%2Fak9yu3qYTmtRagL0ZfmDYMoiNw6auvruxInA3DEJhQkrM7RTbGFB5mCjL4IQ0nSAfKs5B6EebEA%2BLU73Dt2OITrcaLfpwPtDuV97oBOOmww0hs6bWaVm0%2FPh%2Fjz6nE6dS4YYWUu66pJrQve2Lb0Yz9rhln1D3pZ8%2Bba0LArdc8FRGKYBQXQ2c7qO1DAGPadHotxz%2B346pw8kFVwntq2pf4ejhbQlyupbXX226hD1dQa%2BZlx2l9JypieY86y5cuQiiRsgtL9Wt1NPkHctnABsARw0s%2FEXu9JAl2a5dL5ymJG90TQhb0jxarh5Xx8lZBQBkafB5gYIHX%2FjD1HJIE7Vvezbo%2F9cgwMn9zX6D2SL6qQQAQ%2Ft6emIFZFuXMMIQ1Y1cGrCHv5pn5t7Iww8njvgY6pgGCj9nhoxels4DgJulHyV%2BnNS1Iy6ILVt%2F39ETRJ5Gekbg54OFg0f8a4W57%2FAcRjpcQjependcITIAKmhheD5wXuVXzH7k7861YjjGY%2FeZmvcGXe%2Ff0p00Nwv%2BO4JpKhPrVIF0BZF0ju9HMaDUA2w0v0RUjANqmObOQruQ0UugJUadMOyaHEvBA0nfzo2708lyBnnKOSK%2BzxXpmXT3mayDeE1g3UN5E&X-Amz-Signature=72a17b1e9c4485746065ac5af0510ea71d1a5a8fc3ba0338ea1f4df7c046263e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSJARES%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZhFmdbWXXMAl70so7NGUKU72yDz0y7LbGAseLdgEEIAiBLpjcUp1vfPS0pUoiwBeiRSjl4u53L8XvMLdBIGw5QxCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJCDcs50a78wv3gCqKtwDtWOIFYwfvM30JuuQJSI5xA%2Bs0jCA9OjX6oLBUe%2BHwGWiB%2B6HfKspsfkHANxrN36XpSLzc1ADVFaJ7qJQ1NfI3oEkuoci52q2dn4FMw0FKPZJxkCrzmwboDpAgTsjX7crMHg00m34nxi5dXSHOOcESV4CIkGrFpS%2B2byvZi7CqHRY2OCxO8uMSPmoAB5Yf2j7NeFWViXjWNexrVC0qU4mbXMTYBPc4M2u37ft7wmAy1gHm%2Fak9yu3qYTmtRagL0ZfmDYMoiNw6auvruxInA3DEJhQkrM7RTbGFB5mCjL4IQ0nSAfKs5B6EebEA%2BLU73Dt2OITrcaLfpwPtDuV97oBOOmww0hs6bWaVm0%2FPh%2Fjz6nE6dS4YYWUu66pJrQve2Lb0Yz9rhln1D3pZ8%2Bba0LArdc8FRGKYBQXQ2c7qO1DAGPadHotxz%2B346pw8kFVwntq2pf4ejhbQlyupbXX226hD1dQa%2BZlx2l9JypieY86y5cuQiiRsgtL9Wt1NPkHctnABsARw0s%2FEXu9JAl2a5dL5ymJG90TQhb0jxarh5Xx8lZBQBkafB5gYIHX%2FjD1HJIE7Vvezbo%2F9cgwMn9zX6D2SL6qQQAQ%2Ft6emIFZFuXMMIQ1Y1cGrCHv5pn5t7Iww8njvgY6pgGCj9nhoxels4DgJulHyV%2BnNS1Iy6ILVt%2F39ETRJ5Gekbg54OFg0f8a4W57%2FAcRjpcQjependcITIAKmhheD5wXuVXzH7k7861YjjGY%2FeZmvcGXe%2Ff0p00Nwv%2BO4JpKhPrVIF0BZF0ju9HMaDUA2w0v0RUjANqmObOQruQ0UugJUadMOyaHEvBA0nfzo2708lyBnnKOSK%2BzxXpmXT3mayDeE1g3UN5E&X-Amz-Signature=feea37ff1336e240a894d1e75638cdefc0a39d8a94ea59262732d2c44708c62e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSJARES%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZhFmdbWXXMAl70so7NGUKU72yDz0y7LbGAseLdgEEIAiBLpjcUp1vfPS0pUoiwBeiRSjl4u53L8XvMLdBIGw5QxCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJCDcs50a78wv3gCqKtwDtWOIFYwfvM30JuuQJSI5xA%2Bs0jCA9OjX6oLBUe%2BHwGWiB%2B6HfKspsfkHANxrN36XpSLzc1ADVFaJ7qJQ1NfI3oEkuoci52q2dn4FMw0FKPZJxkCrzmwboDpAgTsjX7crMHg00m34nxi5dXSHOOcESV4CIkGrFpS%2B2byvZi7CqHRY2OCxO8uMSPmoAB5Yf2j7NeFWViXjWNexrVC0qU4mbXMTYBPc4M2u37ft7wmAy1gHm%2Fak9yu3qYTmtRagL0ZfmDYMoiNw6auvruxInA3DEJhQkrM7RTbGFB5mCjL4IQ0nSAfKs5B6EebEA%2BLU73Dt2OITrcaLfpwPtDuV97oBOOmww0hs6bWaVm0%2FPh%2Fjz6nE6dS4YYWUu66pJrQve2Lb0Yz9rhln1D3pZ8%2Bba0LArdc8FRGKYBQXQ2c7qO1DAGPadHotxz%2B346pw8kFVwntq2pf4ejhbQlyupbXX226hD1dQa%2BZlx2l9JypieY86y5cuQiiRsgtL9Wt1NPkHctnABsARw0s%2FEXu9JAl2a5dL5ymJG90TQhb0jxarh5Xx8lZBQBkafB5gYIHX%2FjD1HJIE7Vvezbo%2F9cgwMn9zX6D2SL6qQQAQ%2Ft6emIFZFuXMMIQ1Y1cGrCHv5pn5t7Iww8njvgY6pgGCj9nhoxels4DgJulHyV%2BnNS1Iy6ILVt%2F39ETRJ5Gekbg54OFg0f8a4W57%2FAcRjpcQjependcITIAKmhheD5wXuVXzH7k7861YjjGY%2FeZmvcGXe%2Ff0p00Nwv%2BO4JpKhPrVIF0BZF0ju9HMaDUA2w0v0RUjANqmObOQruQ0UugJUadMOyaHEvBA0nfzo2708lyBnnKOSK%2BzxXpmXT3mayDeE1g3UN5E&X-Amz-Signature=dc79634c9a10db960e4c1d9f6cdf1c939680db5f81e50765fe04081650a0b4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSJARES%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZhFmdbWXXMAl70so7NGUKU72yDz0y7LbGAseLdgEEIAiBLpjcUp1vfPS0pUoiwBeiRSjl4u53L8XvMLdBIGw5QxCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJCDcs50a78wv3gCqKtwDtWOIFYwfvM30JuuQJSI5xA%2Bs0jCA9OjX6oLBUe%2BHwGWiB%2B6HfKspsfkHANxrN36XpSLzc1ADVFaJ7qJQ1NfI3oEkuoci52q2dn4FMw0FKPZJxkCrzmwboDpAgTsjX7crMHg00m34nxi5dXSHOOcESV4CIkGrFpS%2B2byvZi7CqHRY2OCxO8uMSPmoAB5Yf2j7NeFWViXjWNexrVC0qU4mbXMTYBPc4M2u37ft7wmAy1gHm%2Fak9yu3qYTmtRagL0ZfmDYMoiNw6auvruxInA3DEJhQkrM7RTbGFB5mCjL4IQ0nSAfKs5B6EebEA%2BLU73Dt2OITrcaLfpwPtDuV97oBOOmww0hs6bWaVm0%2FPh%2Fjz6nE6dS4YYWUu66pJrQve2Lb0Yz9rhln1D3pZ8%2Bba0LArdc8FRGKYBQXQ2c7qO1DAGPadHotxz%2B346pw8kFVwntq2pf4ejhbQlyupbXX226hD1dQa%2BZlx2l9JypieY86y5cuQiiRsgtL9Wt1NPkHctnABsARw0s%2FEXu9JAl2a5dL5ymJG90TQhb0jxarh5Xx8lZBQBkafB5gYIHX%2FjD1HJIE7Vvezbo%2F9cgwMn9zX6D2SL6qQQAQ%2Ft6emIFZFuXMMIQ1Y1cGrCHv5pn5t7Iww8njvgY6pgGCj9nhoxels4DgJulHyV%2BnNS1Iy6ILVt%2F39ETRJ5Gekbg54OFg0f8a4W57%2FAcRjpcQjependcITIAKmhheD5wXuVXzH7k7861YjjGY%2FeZmvcGXe%2Ff0p00Nwv%2BO4JpKhPrVIF0BZF0ju9HMaDUA2w0v0RUjANqmObOQruQ0UugJUadMOyaHEvBA0nfzo2708lyBnnKOSK%2BzxXpmXT3mayDeE1g3UN5E&X-Amz-Signature=cd0e46c2e88d0e510d7ce0eaf84df2a87db4176419fd42f763da9d1a301ed37b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSJARES%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZhFmdbWXXMAl70so7NGUKU72yDz0y7LbGAseLdgEEIAiBLpjcUp1vfPS0pUoiwBeiRSjl4u53L8XvMLdBIGw5QxCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJCDcs50a78wv3gCqKtwDtWOIFYwfvM30JuuQJSI5xA%2Bs0jCA9OjX6oLBUe%2BHwGWiB%2B6HfKspsfkHANxrN36XpSLzc1ADVFaJ7qJQ1NfI3oEkuoci52q2dn4FMw0FKPZJxkCrzmwboDpAgTsjX7crMHg00m34nxi5dXSHOOcESV4CIkGrFpS%2B2byvZi7CqHRY2OCxO8uMSPmoAB5Yf2j7NeFWViXjWNexrVC0qU4mbXMTYBPc4M2u37ft7wmAy1gHm%2Fak9yu3qYTmtRagL0ZfmDYMoiNw6auvruxInA3DEJhQkrM7RTbGFB5mCjL4IQ0nSAfKs5B6EebEA%2BLU73Dt2OITrcaLfpwPtDuV97oBOOmww0hs6bWaVm0%2FPh%2Fjz6nE6dS4YYWUu66pJrQve2Lb0Yz9rhln1D3pZ8%2Bba0LArdc8FRGKYBQXQ2c7qO1DAGPadHotxz%2B346pw8kFVwntq2pf4ejhbQlyupbXX226hD1dQa%2BZlx2l9JypieY86y5cuQiiRsgtL9Wt1NPkHctnABsARw0s%2FEXu9JAl2a5dL5ymJG90TQhb0jxarh5Xx8lZBQBkafB5gYIHX%2FjD1HJIE7Vvezbo%2F9cgwMn9zX6D2SL6qQQAQ%2Ft6emIFZFuXMMIQ1Y1cGrCHv5pn5t7Iww8njvgY6pgGCj9nhoxels4DgJulHyV%2BnNS1Iy6ILVt%2F39ETRJ5Gekbg54OFg0f8a4W57%2FAcRjpcQjependcITIAKmhheD5wXuVXzH7k7861YjjGY%2FeZmvcGXe%2Ff0p00Nwv%2BO4JpKhPrVIF0BZF0ju9HMaDUA2w0v0RUjANqmObOQruQ0UugJUadMOyaHEvBA0nfzo2708lyBnnKOSK%2BzxXpmXT3mayDeE1g3UN5E&X-Amz-Signature=8f69e76ac0487ce95d443db19d0bad7b185dd8d7d49a27d17532b5d076c9fca0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSJARES%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZhFmdbWXXMAl70so7NGUKU72yDz0y7LbGAseLdgEEIAiBLpjcUp1vfPS0pUoiwBeiRSjl4u53L8XvMLdBIGw5QxCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJCDcs50a78wv3gCqKtwDtWOIFYwfvM30JuuQJSI5xA%2Bs0jCA9OjX6oLBUe%2BHwGWiB%2B6HfKspsfkHANxrN36XpSLzc1ADVFaJ7qJQ1NfI3oEkuoci52q2dn4FMw0FKPZJxkCrzmwboDpAgTsjX7crMHg00m34nxi5dXSHOOcESV4CIkGrFpS%2B2byvZi7CqHRY2OCxO8uMSPmoAB5Yf2j7NeFWViXjWNexrVC0qU4mbXMTYBPc4M2u37ft7wmAy1gHm%2Fak9yu3qYTmtRagL0ZfmDYMoiNw6auvruxInA3DEJhQkrM7RTbGFB5mCjL4IQ0nSAfKs5B6EebEA%2BLU73Dt2OITrcaLfpwPtDuV97oBOOmww0hs6bWaVm0%2FPh%2Fjz6nE6dS4YYWUu66pJrQve2Lb0Yz9rhln1D3pZ8%2Bba0LArdc8FRGKYBQXQ2c7qO1DAGPadHotxz%2B346pw8kFVwntq2pf4ejhbQlyupbXX226hD1dQa%2BZlx2l9JypieY86y5cuQiiRsgtL9Wt1NPkHctnABsARw0s%2FEXu9JAl2a5dL5ymJG90TQhb0jxarh5Xx8lZBQBkafB5gYIHX%2FjD1HJIE7Vvezbo%2F9cgwMn9zX6D2SL6qQQAQ%2Ft6emIFZFuXMMIQ1Y1cGrCHv5pn5t7Iww8njvgY6pgGCj9nhoxels4DgJulHyV%2BnNS1Iy6ILVt%2F39ETRJ5Gekbg54OFg0f8a4W57%2FAcRjpcQjependcITIAKmhheD5wXuVXzH7k7861YjjGY%2FeZmvcGXe%2Ff0p00Nwv%2BO4JpKhPrVIF0BZF0ju9HMaDUA2w0v0RUjANqmObOQruQ0UugJUadMOyaHEvBA0nfzo2708lyBnnKOSK%2BzxXpmXT3mayDeE1g3UN5E&X-Amz-Signature=bfe1d60cc7d76a7206c070e595b0be1396e1aa43972ef73e6b423716bcff662d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSJARES%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZhFmdbWXXMAl70so7NGUKU72yDz0y7LbGAseLdgEEIAiBLpjcUp1vfPS0pUoiwBeiRSjl4u53L8XvMLdBIGw5QxCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJCDcs50a78wv3gCqKtwDtWOIFYwfvM30JuuQJSI5xA%2Bs0jCA9OjX6oLBUe%2BHwGWiB%2B6HfKspsfkHANxrN36XpSLzc1ADVFaJ7qJQ1NfI3oEkuoci52q2dn4FMw0FKPZJxkCrzmwboDpAgTsjX7crMHg00m34nxi5dXSHOOcESV4CIkGrFpS%2B2byvZi7CqHRY2OCxO8uMSPmoAB5Yf2j7NeFWViXjWNexrVC0qU4mbXMTYBPc4M2u37ft7wmAy1gHm%2Fak9yu3qYTmtRagL0ZfmDYMoiNw6auvruxInA3DEJhQkrM7RTbGFB5mCjL4IQ0nSAfKs5B6EebEA%2BLU73Dt2OITrcaLfpwPtDuV97oBOOmww0hs6bWaVm0%2FPh%2Fjz6nE6dS4YYWUu66pJrQve2Lb0Yz9rhln1D3pZ8%2Bba0LArdc8FRGKYBQXQ2c7qO1DAGPadHotxz%2B346pw8kFVwntq2pf4ejhbQlyupbXX226hD1dQa%2BZlx2l9JypieY86y5cuQiiRsgtL9Wt1NPkHctnABsARw0s%2FEXu9JAl2a5dL5ymJG90TQhb0jxarh5Xx8lZBQBkafB5gYIHX%2FjD1HJIE7Vvezbo%2F9cgwMn9zX6D2SL6qQQAQ%2Ft6emIFZFuXMMIQ1Y1cGrCHv5pn5t7Iww8njvgY6pgGCj9nhoxels4DgJulHyV%2BnNS1Iy6ILVt%2F39ETRJ5Gekbg54OFg0f8a4W57%2FAcRjpcQjependcITIAKmhheD5wXuVXzH7k7861YjjGY%2FeZmvcGXe%2Ff0p00Nwv%2BO4JpKhPrVIF0BZF0ju9HMaDUA2w0v0RUjANqmObOQruQ0UugJUadMOyaHEvBA0nfzo2708lyBnnKOSK%2BzxXpmXT3mayDeE1g3UN5E&X-Amz-Signature=5f4ca52b93cced29c17234f1052026bf10b1ccafc974cad9bee79d583509e906&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSJARES%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZhFmdbWXXMAl70so7NGUKU72yDz0y7LbGAseLdgEEIAiBLpjcUp1vfPS0pUoiwBeiRSjl4u53L8XvMLdBIGw5QxCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJCDcs50a78wv3gCqKtwDtWOIFYwfvM30JuuQJSI5xA%2Bs0jCA9OjX6oLBUe%2BHwGWiB%2B6HfKspsfkHANxrN36XpSLzc1ADVFaJ7qJQ1NfI3oEkuoci52q2dn4FMw0FKPZJxkCrzmwboDpAgTsjX7crMHg00m34nxi5dXSHOOcESV4CIkGrFpS%2B2byvZi7CqHRY2OCxO8uMSPmoAB5Yf2j7NeFWViXjWNexrVC0qU4mbXMTYBPc4M2u37ft7wmAy1gHm%2Fak9yu3qYTmtRagL0ZfmDYMoiNw6auvruxInA3DEJhQkrM7RTbGFB5mCjL4IQ0nSAfKs5B6EebEA%2BLU73Dt2OITrcaLfpwPtDuV97oBOOmww0hs6bWaVm0%2FPh%2Fjz6nE6dS4YYWUu66pJrQve2Lb0Yz9rhln1D3pZ8%2Bba0LArdc8FRGKYBQXQ2c7qO1DAGPadHotxz%2B346pw8kFVwntq2pf4ejhbQlyupbXX226hD1dQa%2BZlx2l9JypieY86y5cuQiiRsgtL9Wt1NPkHctnABsARw0s%2FEXu9JAl2a5dL5ymJG90TQhb0jxarh5Xx8lZBQBkafB5gYIHX%2FjD1HJIE7Vvezbo%2F9cgwMn9zX6D2SL6qQQAQ%2Ft6emIFZFuXMMIQ1Y1cGrCHv5pn5t7Iww8njvgY6pgGCj9nhoxels4DgJulHyV%2BnNS1Iy6ILVt%2F39ETRJ5Gekbg54OFg0f8a4W57%2FAcRjpcQjependcITIAKmhheD5wXuVXzH7k7861YjjGY%2FeZmvcGXe%2Ff0p00Nwv%2BO4JpKhPrVIF0BZF0ju9HMaDUA2w0v0RUjANqmObOQruQ0UugJUadMOyaHEvBA0nfzo2708lyBnnKOSK%2BzxXpmXT3mayDeE1g3UN5E&X-Amz-Signature=0d55fa5057084a9e40c8f1820c84a84acda172e27d9cbd2f9b0f465aade02b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
