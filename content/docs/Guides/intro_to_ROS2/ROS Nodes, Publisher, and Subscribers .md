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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK6PCUD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTSeGlOz1CU%2FsxbeLZ7hr6oQdFeVwfDsx3I5nntW17UwIhAIBCJgLBPMolSNxlyppMUiRJWqvMv29GqNV%2BmrlsS%2FgKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FigBMowvkroqOif8q3AOCQxoa%2Fbvt3JjCipEko%2BlU9SunL7nv4Qr%2FSXtTgeeM%2FHL0V%2FS%2B3Ngf6wIkj13H4Z%2BG%2BC%2F7G8A2MTBvTde3tYW%2FgxhUoGTCRHwbUcsxd0rplA9PkpHowY9M7byb2kzVakQAAmbdwGAAlK6tcQMmvo0Q8Rb6ppPXBB2pysB0g71hYYD%2FLrJ8igJqxOZYLdSgBisg%2FP%2FwYUw5WATSjVd5E9xMyLsJMJN1nBLlYrcqz7EMcRhHlDyVo2G7WWdP4bj1OAw806bIB3tD7gy3R21btAMwLZMk37%2FTbwKfU8nHBwaGXDmq9UEnUW%2FvvduQinmUif24Oxl0QBMbLvPTBXoEG5DExOdX5pdtZRNhMbdyroD3IKtH9Fti5t8Wi%2FSsDF29l8W6IcgQCgomBNOQYuCsH6W%2BgnhtPrjv6il3C0wbCkp6YHf45b6Yaq%2Bxiu%2FbC5rzrVrZlO6RK6vJctXqA14v86DeyKsmSyaCD2rXCNfTCcv3dZez%2BuAdW79W3Oh3s1RKFfapldYOJLnYaACKAZCfO5s30AykfTKOpHNxw2sQ2GUX09rsI2ktkaVHA1BK9XY8XEi5nCrdjbOGO2NcOkNYqI9Y2xUVo2q3uJTP8kEQQ30BTwvxsi3adVQztjcf3jDJ9IDDBjqkAZFYP%2F3vZ5ovMoRuB6SEQ0ioUUCCaOylOoXfROdaZECMZyxr%2F8HLhWCHyNAVNi6u1dQD%2F%2BEAFauZxFOcRRG6rhiHBzQYqSeq7e2Q2ZD177yo%2FKbWZarrmHConVHd0Lx8l1Ob74tfhyUvR5x5l16XVJIix4KS35PJ2P7PWAtugJPIW3%2BLCy%2FpJzp0KMpaMt8CUMDeWfpDFpRZo8WId6kqqBYahdvF&X-Amz-Signature=1add0970bc146d6ad5514b89fe7367e53fa230fb0cd287f4ab7ab31df0d1d2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK6PCUD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTSeGlOz1CU%2FsxbeLZ7hr6oQdFeVwfDsx3I5nntW17UwIhAIBCJgLBPMolSNxlyppMUiRJWqvMv29GqNV%2BmrlsS%2FgKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FigBMowvkroqOif8q3AOCQxoa%2Fbvt3JjCipEko%2BlU9SunL7nv4Qr%2FSXtTgeeM%2FHL0V%2FS%2B3Ngf6wIkj13H4Z%2BG%2BC%2F7G8A2MTBvTde3tYW%2FgxhUoGTCRHwbUcsxd0rplA9PkpHowY9M7byb2kzVakQAAmbdwGAAlK6tcQMmvo0Q8Rb6ppPXBB2pysB0g71hYYD%2FLrJ8igJqxOZYLdSgBisg%2FP%2FwYUw5WATSjVd5E9xMyLsJMJN1nBLlYrcqz7EMcRhHlDyVo2G7WWdP4bj1OAw806bIB3tD7gy3R21btAMwLZMk37%2FTbwKfU8nHBwaGXDmq9UEnUW%2FvvduQinmUif24Oxl0QBMbLvPTBXoEG5DExOdX5pdtZRNhMbdyroD3IKtH9Fti5t8Wi%2FSsDF29l8W6IcgQCgomBNOQYuCsH6W%2BgnhtPrjv6il3C0wbCkp6YHf45b6Yaq%2Bxiu%2FbC5rzrVrZlO6RK6vJctXqA14v86DeyKsmSyaCD2rXCNfTCcv3dZez%2BuAdW79W3Oh3s1RKFfapldYOJLnYaACKAZCfO5s30AykfTKOpHNxw2sQ2GUX09rsI2ktkaVHA1BK9XY8XEi5nCrdjbOGO2NcOkNYqI9Y2xUVo2q3uJTP8kEQQ30BTwvxsi3adVQztjcf3jDJ9IDDBjqkAZFYP%2F3vZ5ovMoRuB6SEQ0ioUUCCaOylOoXfROdaZECMZyxr%2F8HLhWCHyNAVNi6u1dQD%2F%2BEAFauZxFOcRRG6rhiHBzQYqSeq7e2Q2ZD177yo%2FKbWZarrmHConVHd0Lx8l1Ob74tfhyUvR5x5l16XVJIix4KS35PJ2P7PWAtugJPIW3%2BLCy%2FpJzp0KMpaMt8CUMDeWfpDFpRZo8WId6kqqBYahdvF&X-Amz-Signature=d84e648a8e07aee4bd0b1334ed74384c0f142ab7086e074700eb3841ea7f6392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK6PCUD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTSeGlOz1CU%2FsxbeLZ7hr6oQdFeVwfDsx3I5nntW17UwIhAIBCJgLBPMolSNxlyppMUiRJWqvMv29GqNV%2BmrlsS%2FgKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FigBMowvkroqOif8q3AOCQxoa%2Fbvt3JjCipEko%2BlU9SunL7nv4Qr%2FSXtTgeeM%2FHL0V%2FS%2B3Ngf6wIkj13H4Z%2BG%2BC%2F7G8A2MTBvTde3tYW%2FgxhUoGTCRHwbUcsxd0rplA9PkpHowY9M7byb2kzVakQAAmbdwGAAlK6tcQMmvo0Q8Rb6ppPXBB2pysB0g71hYYD%2FLrJ8igJqxOZYLdSgBisg%2FP%2FwYUw5WATSjVd5E9xMyLsJMJN1nBLlYrcqz7EMcRhHlDyVo2G7WWdP4bj1OAw806bIB3tD7gy3R21btAMwLZMk37%2FTbwKfU8nHBwaGXDmq9UEnUW%2FvvduQinmUif24Oxl0QBMbLvPTBXoEG5DExOdX5pdtZRNhMbdyroD3IKtH9Fti5t8Wi%2FSsDF29l8W6IcgQCgomBNOQYuCsH6W%2BgnhtPrjv6il3C0wbCkp6YHf45b6Yaq%2Bxiu%2FbC5rzrVrZlO6RK6vJctXqA14v86DeyKsmSyaCD2rXCNfTCcv3dZez%2BuAdW79W3Oh3s1RKFfapldYOJLnYaACKAZCfO5s30AykfTKOpHNxw2sQ2GUX09rsI2ktkaVHA1BK9XY8XEi5nCrdjbOGO2NcOkNYqI9Y2xUVo2q3uJTP8kEQQ30BTwvxsi3adVQztjcf3jDJ9IDDBjqkAZFYP%2F3vZ5ovMoRuB6SEQ0ioUUCCaOylOoXfROdaZECMZyxr%2F8HLhWCHyNAVNi6u1dQD%2F%2BEAFauZxFOcRRG6rhiHBzQYqSeq7e2Q2ZD177yo%2FKbWZarrmHConVHd0Lx8l1Ob74tfhyUvR5x5l16XVJIix4KS35PJ2P7PWAtugJPIW3%2BLCy%2FpJzp0KMpaMt8CUMDeWfpDFpRZo8WId6kqqBYahdvF&X-Amz-Signature=114a781d5700e653df9e551045ff6483f841d3f4d7a7b3235547af3746e2785b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK6PCUD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTSeGlOz1CU%2FsxbeLZ7hr6oQdFeVwfDsx3I5nntW17UwIhAIBCJgLBPMolSNxlyppMUiRJWqvMv29GqNV%2BmrlsS%2FgKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FigBMowvkroqOif8q3AOCQxoa%2Fbvt3JjCipEko%2BlU9SunL7nv4Qr%2FSXtTgeeM%2FHL0V%2FS%2B3Ngf6wIkj13H4Z%2BG%2BC%2F7G8A2MTBvTde3tYW%2FgxhUoGTCRHwbUcsxd0rplA9PkpHowY9M7byb2kzVakQAAmbdwGAAlK6tcQMmvo0Q8Rb6ppPXBB2pysB0g71hYYD%2FLrJ8igJqxOZYLdSgBisg%2FP%2FwYUw5WATSjVd5E9xMyLsJMJN1nBLlYrcqz7EMcRhHlDyVo2G7WWdP4bj1OAw806bIB3tD7gy3R21btAMwLZMk37%2FTbwKfU8nHBwaGXDmq9UEnUW%2FvvduQinmUif24Oxl0QBMbLvPTBXoEG5DExOdX5pdtZRNhMbdyroD3IKtH9Fti5t8Wi%2FSsDF29l8W6IcgQCgomBNOQYuCsH6W%2BgnhtPrjv6il3C0wbCkp6YHf45b6Yaq%2Bxiu%2FbC5rzrVrZlO6RK6vJctXqA14v86DeyKsmSyaCD2rXCNfTCcv3dZez%2BuAdW79W3Oh3s1RKFfapldYOJLnYaACKAZCfO5s30AykfTKOpHNxw2sQ2GUX09rsI2ktkaVHA1BK9XY8XEi5nCrdjbOGO2NcOkNYqI9Y2xUVo2q3uJTP8kEQQ30BTwvxsi3adVQztjcf3jDJ9IDDBjqkAZFYP%2F3vZ5ovMoRuB6SEQ0ioUUCCaOylOoXfROdaZECMZyxr%2F8HLhWCHyNAVNi6u1dQD%2F%2BEAFauZxFOcRRG6rhiHBzQYqSeq7e2Q2ZD177yo%2FKbWZarrmHConVHd0Lx8l1Ob74tfhyUvR5x5l16XVJIix4KS35PJ2P7PWAtugJPIW3%2BLCy%2FpJzp0KMpaMt8CUMDeWfpDFpRZo8WId6kqqBYahdvF&X-Amz-Signature=1b3bf3f08a3a6d062a970041b95291cc6a027055590e3f6fd949341da95e1446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK6PCUD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTSeGlOz1CU%2FsxbeLZ7hr6oQdFeVwfDsx3I5nntW17UwIhAIBCJgLBPMolSNxlyppMUiRJWqvMv29GqNV%2BmrlsS%2FgKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FigBMowvkroqOif8q3AOCQxoa%2Fbvt3JjCipEko%2BlU9SunL7nv4Qr%2FSXtTgeeM%2FHL0V%2FS%2B3Ngf6wIkj13H4Z%2BG%2BC%2F7G8A2MTBvTde3tYW%2FgxhUoGTCRHwbUcsxd0rplA9PkpHowY9M7byb2kzVakQAAmbdwGAAlK6tcQMmvo0Q8Rb6ppPXBB2pysB0g71hYYD%2FLrJ8igJqxOZYLdSgBisg%2FP%2FwYUw5WATSjVd5E9xMyLsJMJN1nBLlYrcqz7EMcRhHlDyVo2G7WWdP4bj1OAw806bIB3tD7gy3R21btAMwLZMk37%2FTbwKfU8nHBwaGXDmq9UEnUW%2FvvduQinmUif24Oxl0QBMbLvPTBXoEG5DExOdX5pdtZRNhMbdyroD3IKtH9Fti5t8Wi%2FSsDF29l8W6IcgQCgomBNOQYuCsH6W%2BgnhtPrjv6il3C0wbCkp6YHf45b6Yaq%2Bxiu%2FbC5rzrVrZlO6RK6vJctXqA14v86DeyKsmSyaCD2rXCNfTCcv3dZez%2BuAdW79W3Oh3s1RKFfapldYOJLnYaACKAZCfO5s30AykfTKOpHNxw2sQ2GUX09rsI2ktkaVHA1BK9XY8XEi5nCrdjbOGO2NcOkNYqI9Y2xUVo2q3uJTP8kEQQ30BTwvxsi3adVQztjcf3jDJ9IDDBjqkAZFYP%2F3vZ5ovMoRuB6SEQ0ioUUCCaOylOoXfROdaZECMZyxr%2F8HLhWCHyNAVNi6u1dQD%2F%2BEAFauZxFOcRRG6rhiHBzQYqSeq7e2Q2ZD177yo%2FKbWZarrmHConVHd0Lx8l1Ob74tfhyUvR5x5l16XVJIix4KS35PJ2P7PWAtugJPIW3%2BLCy%2FpJzp0KMpaMt8CUMDeWfpDFpRZo8WId6kqqBYahdvF&X-Amz-Signature=9e1f9e90453fc8b998693ad4fb132a9dfc333be35ca79ebd63499e793196d1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK6PCUD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTSeGlOz1CU%2FsxbeLZ7hr6oQdFeVwfDsx3I5nntW17UwIhAIBCJgLBPMolSNxlyppMUiRJWqvMv29GqNV%2BmrlsS%2FgKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FigBMowvkroqOif8q3AOCQxoa%2Fbvt3JjCipEko%2BlU9SunL7nv4Qr%2FSXtTgeeM%2FHL0V%2FS%2B3Ngf6wIkj13H4Z%2BG%2BC%2F7G8A2MTBvTde3tYW%2FgxhUoGTCRHwbUcsxd0rplA9PkpHowY9M7byb2kzVakQAAmbdwGAAlK6tcQMmvo0Q8Rb6ppPXBB2pysB0g71hYYD%2FLrJ8igJqxOZYLdSgBisg%2FP%2FwYUw5WATSjVd5E9xMyLsJMJN1nBLlYrcqz7EMcRhHlDyVo2G7WWdP4bj1OAw806bIB3tD7gy3R21btAMwLZMk37%2FTbwKfU8nHBwaGXDmq9UEnUW%2FvvduQinmUif24Oxl0QBMbLvPTBXoEG5DExOdX5pdtZRNhMbdyroD3IKtH9Fti5t8Wi%2FSsDF29l8W6IcgQCgomBNOQYuCsH6W%2BgnhtPrjv6il3C0wbCkp6YHf45b6Yaq%2Bxiu%2FbC5rzrVrZlO6RK6vJctXqA14v86DeyKsmSyaCD2rXCNfTCcv3dZez%2BuAdW79W3Oh3s1RKFfapldYOJLnYaACKAZCfO5s30AykfTKOpHNxw2sQ2GUX09rsI2ktkaVHA1BK9XY8XEi5nCrdjbOGO2NcOkNYqI9Y2xUVo2q3uJTP8kEQQ30BTwvxsi3adVQztjcf3jDJ9IDDBjqkAZFYP%2F3vZ5ovMoRuB6SEQ0ioUUCCaOylOoXfROdaZECMZyxr%2F8HLhWCHyNAVNi6u1dQD%2F%2BEAFauZxFOcRRG6rhiHBzQYqSeq7e2Q2ZD177yo%2FKbWZarrmHConVHd0Lx8l1Ob74tfhyUvR5x5l16XVJIix4KS35PJ2P7PWAtugJPIW3%2BLCy%2FpJzp0KMpaMt8CUMDeWfpDFpRZo8WId6kqqBYahdvF&X-Amz-Signature=a8611cb3fd1833c580af19f2e18df6ea2fd81618832266860fb929c874223f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK6PCUD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTSeGlOz1CU%2FsxbeLZ7hr6oQdFeVwfDsx3I5nntW17UwIhAIBCJgLBPMolSNxlyppMUiRJWqvMv29GqNV%2BmrlsS%2FgKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FigBMowvkroqOif8q3AOCQxoa%2Fbvt3JjCipEko%2BlU9SunL7nv4Qr%2FSXtTgeeM%2FHL0V%2FS%2B3Ngf6wIkj13H4Z%2BG%2BC%2F7G8A2MTBvTde3tYW%2FgxhUoGTCRHwbUcsxd0rplA9PkpHowY9M7byb2kzVakQAAmbdwGAAlK6tcQMmvo0Q8Rb6ppPXBB2pysB0g71hYYD%2FLrJ8igJqxOZYLdSgBisg%2FP%2FwYUw5WATSjVd5E9xMyLsJMJN1nBLlYrcqz7EMcRhHlDyVo2G7WWdP4bj1OAw806bIB3tD7gy3R21btAMwLZMk37%2FTbwKfU8nHBwaGXDmq9UEnUW%2FvvduQinmUif24Oxl0QBMbLvPTBXoEG5DExOdX5pdtZRNhMbdyroD3IKtH9Fti5t8Wi%2FSsDF29l8W6IcgQCgomBNOQYuCsH6W%2BgnhtPrjv6il3C0wbCkp6YHf45b6Yaq%2Bxiu%2FbC5rzrVrZlO6RK6vJctXqA14v86DeyKsmSyaCD2rXCNfTCcv3dZez%2BuAdW79W3Oh3s1RKFfapldYOJLnYaACKAZCfO5s30AykfTKOpHNxw2sQ2GUX09rsI2ktkaVHA1BK9XY8XEi5nCrdjbOGO2NcOkNYqI9Y2xUVo2q3uJTP8kEQQ30BTwvxsi3adVQztjcf3jDJ9IDDBjqkAZFYP%2F3vZ5ovMoRuB6SEQ0ioUUCCaOylOoXfROdaZECMZyxr%2F8HLhWCHyNAVNi6u1dQD%2F%2BEAFauZxFOcRRG6rhiHBzQYqSeq7e2Q2ZD177yo%2FKbWZarrmHConVHd0Lx8l1Ob74tfhyUvR5x5l16XVJIix4KS35PJ2P7PWAtugJPIW3%2BLCy%2FpJzp0KMpaMt8CUMDeWfpDFpRZo8WId6kqqBYahdvF&X-Amz-Signature=50519b9f4f0e8e4e143bb6b14618574011ac8079c495d854a37f344c14e74bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK6PCUD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTSeGlOz1CU%2FsxbeLZ7hr6oQdFeVwfDsx3I5nntW17UwIhAIBCJgLBPMolSNxlyppMUiRJWqvMv29GqNV%2BmrlsS%2FgKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FigBMowvkroqOif8q3AOCQxoa%2Fbvt3JjCipEko%2BlU9SunL7nv4Qr%2FSXtTgeeM%2FHL0V%2FS%2B3Ngf6wIkj13H4Z%2BG%2BC%2F7G8A2MTBvTde3tYW%2FgxhUoGTCRHwbUcsxd0rplA9PkpHowY9M7byb2kzVakQAAmbdwGAAlK6tcQMmvo0Q8Rb6ppPXBB2pysB0g71hYYD%2FLrJ8igJqxOZYLdSgBisg%2FP%2FwYUw5WATSjVd5E9xMyLsJMJN1nBLlYrcqz7EMcRhHlDyVo2G7WWdP4bj1OAw806bIB3tD7gy3R21btAMwLZMk37%2FTbwKfU8nHBwaGXDmq9UEnUW%2FvvduQinmUif24Oxl0QBMbLvPTBXoEG5DExOdX5pdtZRNhMbdyroD3IKtH9Fti5t8Wi%2FSsDF29l8W6IcgQCgomBNOQYuCsH6W%2BgnhtPrjv6il3C0wbCkp6YHf45b6Yaq%2Bxiu%2FbC5rzrVrZlO6RK6vJctXqA14v86DeyKsmSyaCD2rXCNfTCcv3dZez%2BuAdW79W3Oh3s1RKFfapldYOJLnYaACKAZCfO5s30AykfTKOpHNxw2sQ2GUX09rsI2ktkaVHA1BK9XY8XEi5nCrdjbOGO2NcOkNYqI9Y2xUVo2q3uJTP8kEQQ30BTwvxsi3adVQztjcf3jDJ9IDDBjqkAZFYP%2F3vZ5ovMoRuB6SEQ0ioUUCCaOylOoXfROdaZECMZyxr%2F8HLhWCHyNAVNi6u1dQD%2F%2BEAFauZxFOcRRG6rhiHBzQYqSeq7e2Q2ZD177yo%2FKbWZarrmHConVHd0Lx8l1Ob74tfhyUvR5x5l16XVJIix4KS35PJ2P7PWAtugJPIW3%2BLCy%2FpJzp0KMpaMt8CUMDeWfpDFpRZo8WId6kqqBYahdvF&X-Amz-Signature=1ec98dedb916faff165548591f91625f8f6307bc12c5a86ea3e942c5d1719131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
