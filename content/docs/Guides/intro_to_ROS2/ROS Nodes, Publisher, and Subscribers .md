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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACUEP5P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1%2FHrfcCdomPmsP4j7GeMp23uNRxNh90TTH7Vs%2FNeteAiEAr7xD3M8fhQjZ5VYiFlkSeVUzQ49jjpHjWZek2CnbydsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJig57IetRZwf4czPCrcA1pd5yFMbhxAP%2BuaRDYf6CqnIIReTiP1V1zez4rlTBbRvw8OJvWMTReLcJNFqF%2BO5FGUqHzW6Nm33vfHbJ%2FMwFBrCEqozBIO10eI3tmU8gr3vdkaKc1rvLo7bwxy26E58So%2B5OfNCKUgdK%2BaNzoCy1gjZcm2oBp1ATQe8panaP0UTvW5DASOX36L8P0ubbv8HBfERGBNACtjI%2FuEQiDS%2FvyV4fk3%2ByBNyHm%2BEmxaSkhu%2BT8IdycQzdiklLymTn9l8yyKw9KVGEgsrPImb5qduFzpz3y7tK4eSSND8DdrS%2BtvKOsD5nsc6JcGgGNWabTtIW9EdQIv79ave6MBJ6d7Hx7%2FyczdfGZ4dKRE9VQ33%2BWSx8q6gYnnF5OTAd0cKBH5tLXvqYWIVZg5BrIu5gfeT6XC5uUA2AhyWnaaTUNXRaaPAREqsoh808xla%2FkAitnY5jzrzGVHM2WyP3PAoLgKXJTfPPiVWf8fZ%2FMpWFjQcY3%2B0XLfTaFRVAOP15GjYCL%2B36LpLXdUqDOiucHXQgDM%2B8KVjXCRhXQVMK4yVAWKrVOTlxS71Z79CwHtzJfVfu4KMYHvjSp5XgI7vjjkly2WvIrE0xdSnrrUUpcSjOTaQi07idgni7PRWU6nC2lzMMCl97wGOqUBr2wJmj3zQ4CeyGS6zWGXbi39ZTzPyiTVj2U7aTSFNi%2B6Ni1fMm%2FtsK4FGHjJYBabFJSJpDAGhZ4KTyef1lvQXye73MbbfdSq%2Bc6JRuII96M11%2BAlHE88j%2FRkUV38%2FUB8XVdvANazy%2BtmDOqeuScOTBJXJrykm8V0vArH%2BLxjzU6KKFmLR%2FpnfhT%2B1j52iItwZlFngUFnJyr9jYpzfZxYeU9S5j8m&X-Amz-Signature=5725eb35e63a5993ca334ff929066c265c0ba561e2b6422547812cd9b6dbb563&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACUEP5P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1%2FHrfcCdomPmsP4j7GeMp23uNRxNh90TTH7Vs%2FNeteAiEAr7xD3M8fhQjZ5VYiFlkSeVUzQ49jjpHjWZek2CnbydsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJig57IetRZwf4czPCrcA1pd5yFMbhxAP%2BuaRDYf6CqnIIReTiP1V1zez4rlTBbRvw8OJvWMTReLcJNFqF%2BO5FGUqHzW6Nm33vfHbJ%2FMwFBrCEqozBIO10eI3tmU8gr3vdkaKc1rvLo7bwxy26E58So%2B5OfNCKUgdK%2BaNzoCy1gjZcm2oBp1ATQe8panaP0UTvW5DASOX36L8P0ubbv8HBfERGBNACtjI%2FuEQiDS%2FvyV4fk3%2ByBNyHm%2BEmxaSkhu%2BT8IdycQzdiklLymTn9l8yyKw9KVGEgsrPImb5qduFzpz3y7tK4eSSND8DdrS%2BtvKOsD5nsc6JcGgGNWabTtIW9EdQIv79ave6MBJ6d7Hx7%2FyczdfGZ4dKRE9VQ33%2BWSx8q6gYnnF5OTAd0cKBH5tLXvqYWIVZg5BrIu5gfeT6XC5uUA2AhyWnaaTUNXRaaPAREqsoh808xla%2FkAitnY5jzrzGVHM2WyP3PAoLgKXJTfPPiVWf8fZ%2FMpWFjQcY3%2B0XLfTaFRVAOP15GjYCL%2B36LpLXdUqDOiucHXQgDM%2B8KVjXCRhXQVMK4yVAWKrVOTlxS71Z79CwHtzJfVfu4KMYHvjSp5XgI7vjjkly2WvIrE0xdSnrrUUpcSjOTaQi07idgni7PRWU6nC2lzMMCl97wGOqUBr2wJmj3zQ4CeyGS6zWGXbi39ZTzPyiTVj2U7aTSFNi%2B6Ni1fMm%2FtsK4FGHjJYBabFJSJpDAGhZ4KTyef1lvQXye73MbbfdSq%2Bc6JRuII96M11%2BAlHE88j%2FRkUV38%2FUB8XVdvANazy%2BtmDOqeuScOTBJXJrykm8V0vArH%2BLxjzU6KKFmLR%2FpnfhT%2B1j52iItwZlFngUFnJyr9jYpzfZxYeU9S5j8m&X-Amz-Signature=27e69ceb5406a1653a5d3ecea008b96cf68a949ae39debc69743125796441c96&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACUEP5P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1%2FHrfcCdomPmsP4j7GeMp23uNRxNh90TTH7Vs%2FNeteAiEAr7xD3M8fhQjZ5VYiFlkSeVUzQ49jjpHjWZek2CnbydsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJig57IetRZwf4czPCrcA1pd5yFMbhxAP%2BuaRDYf6CqnIIReTiP1V1zez4rlTBbRvw8OJvWMTReLcJNFqF%2BO5FGUqHzW6Nm33vfHbJ%2FMwFBrCEqozBIO10eI3tmU8gr3vdkaKc1rvLo7bwxy26E58So%2B5OfNCKUgdK%2BaNzoCy1gjZcm2oBp1ATQe8panaP0UTvW5DASOX36L8P0ubbv8HBfERGBNACtjI%2FuEQiDS%2FvyV4fk3%2ByBNyHm%2BEmxaSkhu%2BT8IdycQzdiklLymTn9l8yyKw9KVGEgsrPImb5qduFzpz3y7tK4eSSND8DdrS%2BtvKOsD5nsc6JcGgGNWabTtIW9EdQIv79ave6MBJ6d7Hx7%2FyczdfGZ4dKRE9VQ33%2BWSx8q6gYnnF5OTAd0cKBH5tLXvqYWIVZg5BrIu5gfeT6XC5uUA2AhyWnaaTUNXRaaPAREqsoh808xla%2FkAitnY5jzrzGVHM2WyP3PAoLgKXJTfPPiVWf8fZ%2FMpWFjQcY3%2B0XLfTaFRVAOP15GjYCL%2B36LpLXdUqDOiucHXQgDM%2B8KVjXCRhXQVMK4yVAWKrVOTlxS71Z79CwHtzJfVfu4KMYHvjSp5XgI7vjjkly2WvIrE0xdSnrrUUpcSjOTaQi07idgni7PRWU6nC2lzMMCl97wGOqUBr2wJmj3zQ4CeyGS6zWGXbi39ZTzPyiTVj2U7aTSFNi%2B6Ni1fMm%2FtsK4FGHjJYBabFJSJpDAGhZ4KTyef1lvQXye73MbbfdSq%2Bc6JRuII96M11%2BAlHE88j%2FRkUV38%2FUB8XVdvANazy%2BtmDOqeuScOTBJXJrykm8V0vArH%2BLxjzU6KKFmLR%2FpnfhT%2B1j52iItwZlFngUFnJyr9jYpzfZxYeU9S5j8m&X-Amz-Signature=d704a44bd1778790f2509672f0019513d5eabed91e7223275c672029c53d0f75&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACUEP5P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1%2FHrfcCdomPmsP4j7GeMp23uNRxNh90TTH7Vs%2FNeteAiEAr7xD3M8fhQjZ5VYiFlkSeVUzQ49jjpHjWZek2CnbydsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJig57IetRZwf4czPCrcA1pd5yFMbhxAP%2BuaRDYf6CqnIIReTiP1V1zez4rlTBbRvw8OJvWMTReLcJNFqF%2BO5FGUqHzW6Nm33vfHbJ%2FMwFBrCEqozBIO10eI3tmU8gr3vdkaKc1rvLo7bwxy26E58So%2B5OfNCKUgdK%2BaNzoCy1gjZcm2oBp1ATQe8panaP0UTvW5DASOX36L8P0ubbv8HBfERGBNACtjI%2FuEQiDS%2FvyV4fk3%2ByBNyHm%2BEmxaSkhu%2BT8IdycQzdiklLymTn9l8yyKw9KVGEgsrPImb5qduFzpz3y7tK4eSSND8DdrS%2BtvKOsD5nsc6JcGgGNWabTtIW9EdQIv79ave6MBJ6d7Hx7%2FyczdfGZ4dKRE9VQ33%2BWSx8q6gYnnF5OTAd0cKBH5tLXvqYWIVZg5BrIu5gfeT6XC5uUA2AhyWnaaTUNXRaaPAREqsoh808xla%2FkAitnY5jzrzGVHM2WyP3PAoLgKXJTfPPiVWf8fZ%2FMpWFjQcY3%2B0XLfTaFRVAOP15GjYCL%2B36LpLXdUqDOiucHXQgDM%2B8KVjXCRhXQVMK4yVAWKrVOTlxS71Z79CwHtzJfVfu4KMYHvjSp5XgI7vjjkly2WvIrE0xdSnrrUUpcSjOTaQi07idgni7PRWU6nC2lzMMCl97wGOqUBr2wJmj3zQ4CeyGS6zWGXbi39ZTzPyiTVj2U7aTSFNi%2B6Ni1fMm%2FtsK4FGHjJYBabFJSJpDAGhZ4KTyef1lvQXye73MbbfdSq%2Bc6JRuII96M11%2BAlHE88j%2FRkUV38%2FUB8XVdvANazy%2BtmDOqeuScOTBJXJrykm8V0vArH%2BLxjzU6KKFmLR%2FpnfhT%2B1j52iItwZlFngUFnJyr9jYpzfZxYeU9S5j8m&X-Amz-Signature=9085f9df01c30c315b20aab661170915bcbee9d586b865f7301ede21e9f5ac41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACUEP5P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1%2FHrfcCdomPmsP4j7GeMp23uNRxNh90TTH7Vs%2FNeteAiEAr7xD3M8fhQjZ5VYiFlkSeVUzQ49jjpHjWZek2CnbydsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJig57IetRZwf4czPCrcA1pd5yFMbhxAP%2BuaRDYf6CqnIIReTiP1V1zez4rlTBbRvw8OJvWMTReLcJNFqF%2BO5FGUqHzW6Nm33vfHbJ%2FMwFBrCEqozBIO10eI3tmU8gr3vdkaKc1rvLo7bwxy26E58So%2B5OfNCKUgdK%2BaNzoCy1gjZcm2oBp1ATQe8panaP0UTvW5DASOX36L8P0ubbv8HBfERGBNACtjI%2FuEQiDS%2FvyV4fk3%2ByBNyHm%2BEmxaSkhu%2BT8IdycQzdiklLymTn9l8yyKw9KVGEgsrPImb5qduFzpz3y7tK4eSSND8DdrS%2BtvKOsD5nsc6JcGgGNWabTtIW9EdQIv79ave6MBJ6d7Hx7%2FyczdfGZ4dKRE9VQ33%2BWSx8q6gYnnF5OTAd0cKBH5tLXvqYWIVZg5BrIu5gfeT6XC5uUA2AhyWnaaTUNXRaaPAREqsoh808xla%2FkAitnY5jzrzGVHM2WyP3PAoLgKXJTfPPiVWf8fZ%2FMpWFjQcY3%2B0XLfTaFRVAOP15GjYCL%2B36LpLXdUqDOiucHXQgDM%2B8KVjXCRhXQVMK4yVAWKrVOTlxS71Z79CwHtzJfVfu4KMYHvjSp5XgI7vjjkly2WvIrE0xdSnrrUUpcSjOTaQi07idgni7PRWU6nC2lzMMCl97wGOqUBr2wJmj3zQ4CeyGS6zWGXbi39ZTzPyiTVj2U7aTSFNi%2B6Ni1fMm%2FtsK4FGHjJYBabFJSJpDAGhZ4KTyef1lvQXye73MbbfdSq%2Bc6JRuII96M11%2BAlHE88j%2FRkUV38%2FUB8XVdvANazy%2BtmDOqeuScOTBJXJrykm8V0vArH%2BLxjzU6KKFmLR%2FpnfhT%2B1j52iItwZlFngUFnJyr9jYpzfZxYeU9S5j8m&X-Amz-Signature=3033c394fb20836bf0d0d942a52635e7ce3bb326292d72b3b134dc9d56437048&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACUEP5P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1%2FHrfcCdomPmsP4j7GeMp23uNRxNh90TTH7Vs%2FNeteAiEAr7xD3M8fhQjZ5VYiFlkSeVUzQ49jjpHjWZek2CnbydsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJig57IetRZwf4czPCrcA1pd5yFMbhxAP%2BuaRDYf6CqnIIReTiP1V1zez4rlTBbRvw8OJvWMTReLcJNFqF%2BO5FGUqHzW6Nm33vfHbJ%2FMwFBrCEqozBIO10eI3tmU8gr3vdkaKc1rvLo7bwxy26E58So%2B5OfNCKUgdK%2BaNzoCy1gjZcm2oBp1ATQe8panaP0UTvW5DASOX36L8P0ubbv8HBfERGBNACtjI%2FuEQiDS%2FvyV4fk3%2ByBNyHm%2BEmxaSkhu%2BT8IdycQzdiklLymTn9l8yyKw9KVGEgsrPImb5qduFzpz3y7tK4eSSND8DdrS%2BtvKOsD5nsc6JcGgGNWabTtIW9EdQIv79ave6MBJ6d7Hx7%2FyczdfGZ4dKRE9VQ33%2BWSx8q6gYnnF5OTAd0cKBH5tLXvqYWIVZg5BrIu5gfeT6XC5uUA2AhyWnaaTUNXRaaPAREqsoh808xla%2FkAitnY5jzrzGVHM2WyP3PAoLgKXJTfPPiVWf8fZ%2FMpWFjQcY3%2B0XLfTaFRVAOP15GjYCL%2B36LpLXdUqDOiucHXQgDM%2B8KVjXCRhXQVMK4yVAWKrVOTlxS71Z79CwHtzJfVfu4KMYHvjSp5XgI7vjjkly2WvIrE0xdSnrrUUpcSjOTaQi07idgni7PRWU6nC2lzMMCl97wGOqUBr2wJmj3zQ4CeyGS6zWGXbi39ZTzPyiTVj2U7aTSFNi%2B6Ni1fMm%2FtsK4FGHjJYBabFJSJpDAGhZ4KTyef1lvQXye73MbbfdSq%2Bc6JRuII96M11%2BAlHE88j%2FRkUV38%2FUB8XVdvANazy%2BtmDOqeuScOTBJXJrykm8V0vArH%2BLxjzU6KKFmLR%2FpnfhT%2B1j52iItwZlFngUFnJyr9jYpzfZxYeU9S5j8m&X-Amz-Signature=7dd1198997aa2a2a86679c78f6f0d96a2a17414d5c0816d757b73eac4aec0d14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACUEP5P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1%2FHrfcCdomPmsP4j7GeMp23uNRxNh90TTH7Vs%2FNeteAiEAr7xD3M8fhQjZ5VYiFlkSeVUzQ49jjpHjWZek2CnbydsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJig57IetRZwf4czPCrcA1pd5yFMbhxAP%2BuaRDYf6CqnIIReTiP1V1zez4rlTBbRvw8OJvWMTReLcJNFqF%2BO5FGUqHzW6Nm33vfHbJ%2FMwFBrCEqozBIO10eI3tmU8gr3vdkaKc1rvLo7bwxy26E58So%2B5OfNCKUgdK%2BaNzoCy1gjZcm2oBp1ATQe8panaP0UTvW5DASOX36L8P0ubbv8HBfERGBNACtjI%2FuEQiDS%2FvyV4fk3%2ByBNyHm%2BEmxaSkhu%2BT8IdycQzdiklLymTn9l8yyKw9KVGEgsrPImb5qduFzpz3y7tK4eSSND8DdrS%2BtvKOsD5nsc6JcGgGNWabTtIW9EdQIv79ave6MBJ6d7Hx7%2FyczdfGZ4dKRE9VQ33%2BWSx8q6gYnnF5OTAd0cKBH5tLXvqYWIVZg5BrIu5gfeT6XC5uUA2AhyWnaaTUNXRaaPAREqsoh808xla%2FkAitnY5jzrzGVHM2WyP3PAoLgKXJTfPPiVWf8fZ%2FMpWFjQcY3%2B0XLfTaFRVAOP15GjYCL%2B36LpLXdUqDOiucHXQgDM%2B8KVjXCRhXQVMK4yVAWKrVOTlxS71Z79CwHtzJfVfu4KMYHvjSp5XgI7vjjkly2WvIrE0xdSnrrUUpcSjOTaQi07idgni7PRWU6nC2lzMMCl97wGOqUBr2wJmj3zQ4CeyGS6zWGXbi39ZTzPyiTVj2U7aTSFNi%2B6Ni1fMm%2FtsK4FGHjJYBabFJSJpDAGhZ4KTyef1lvQXye73MbbfdSq%2Bc6JRuII96M11%2BAlHE88j%2FRkUV38%2FUB8XVdvANazy%2BtmDOqeuScOTBJXJrykm8V0vArH%2BLxjzU6KKFmLR%2FpnfhT%2B1j52iItwZlFngUFnJyr9jYpzfZxYeU9S5j8m&X-Amz-Signature=af94cd734e75b383eda1ca797324ad73b43b7e7fb3fba08433c1675f4f7c8ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACUEP5P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1%2FHrfcCdomPmsP4j7GeMp23uNRxNh90TTH7Vs%2FNeteAiEAr7xD3M8fhQjZ5VYiFlkSeVUzQ49jjpHjWZek2CnbydsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJig57IetRZwf4czPCrcA1pd5yFMbhxAP%2BuaRDYf6CqnIIReTiP1V1zez4rlTBbRvw8OJvWMTReLcJNFqF%2BO5FGUqHzW6Nm33vfHbJ%2FMwFBrCEqozBIO10eI3tmU8gr3vdkaKc1rvLo7bwxy26E58So%2B5OfNCKUgdK%2BaNzoCy1gjZcm2oBp1ATQe8panaP0UTvW5DASOX36L8P0ubbv8HBfERGBNACtjI%2FuEQiDS%2FvyV4fk3%2ByBNyHm%2BEmxaSkhu%2BT8IdycQzdiklLymTn9l8yyKw9KVGEgsrPImb5qduFzpz3y7tK4eSSND8DdrS%2BtvKOsD5nsc6JcGgGNWabTtIW9EdQIv79ave6MBJ6d7Hx7%2FyczdfGZ4dKRE9VQ33%2BWSx8q6gYnnF5OTAd0cKBH5tLXvqYWIVZg5BrIu5gfeT6XC5uUA2AhyWnaaTUNXRaaPAREqsoh808xla%2FkAitnY5jzrzGVHM2WyP3PAoLgKXJTfPPiVWf8fZ%2FMpWFjQcY3%2B0XLfTaFRVAOP15GjYCL%2B36LpLXdUqDOiucHXQgDM%2B8KVjXCRhXQVMK4yVAWKrVOTlxS71Z79CwHtzJfVfu4KMYHvjSp5XgI7vjjkly2WvIrE0xdSnrrUUpcSjOTaQi07idgni7PRWU6nC2lzMMCl97wGOqUBr2wJmj3zQ4CeyGS6zWGXbi39ZTzPyiTVj2U7aTSFNi%2B6Ni1fMm%2FtsK4FGHjJYBabFJSJpDAGhZ4KTyef1lvQXye73MbbfdSq%2Bc6JRuII96M11%2BAlHE88j%2FRkUV38%2FUB8XVdvANazy%2BtmDOqeuScOTBJXJrykm8V0vArH%2BLxjzU6KKFmLR%2FpnfhT%2B1j52iItwZlFngUFnJyr9jYpzfZxYeU9S5j8m&X-Amz-Signature=3f626f39c84d8cc344f80ed4264844739da1303e9ec8bb0baec9e95d8e5592d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
