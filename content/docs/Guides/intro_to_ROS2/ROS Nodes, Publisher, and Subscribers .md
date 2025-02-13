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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIFOIS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZjZB11DBFQxMgRLriVyAcnODQXuCom02CxDaFTEwD1AiAeYMEaHWF3vM3NJp4DtWISnKlOohESj4Rf15WCxjPigiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iNfYs3nqfkY12DsKtwDO%2BPjyZKs6DIH3wHya01i2meKVTPNt6kLdB520l6H7nKlmlXHG1HeSSPBGlNp66MDaFDYUghcR58sEMhfP%2BUuQAdaAr5h5bd0vKPY9EM2Ooxp8JC9YqbvxhgBnzsSYGE4HlJQXqbB0eDPS6JfBM6kVLXscnt21W0CuhS1SBdXMY9bm0eriImCkahx698eGzm9fEeE6Wq2ZdL%2Bf%2FKuNGHNvnmE%2BRoUHBdZyaiese6kjiw3Pqgu%2Fa2PYtxcDEXjReuzok0Vh1qAJeQMgqXfgUP8e84YuQJz3WvKa5wva%2BVSBDe7nekwI06KlAPeb5Pcoa9fHxF5S3Mg9vEqUmcuZPUOyTNNmJgFLjIIl48IPbu00SriiDbSQF9F9AoTXrwBm37fPwPv7NtYUPekCuIBPCmx1mpxJW3%2FkfLEGFvSWFNg3CoMXUJ8igdQmvfNsVBtDDrh0qHw0gtFz8dzs%2FDYRBQPIpKAKlCBPtMmx3VWMgfoJRWYC3aStvclLUby51C8PROHK%2BJ8UF0GBkQLBb%2FjiTAWoat0qNLF3eYR6ER4ZXNiwViU5%2BVdI8Zy7IbEoBBRWq9yjevxVYpE7njl2wVa%2BDwb61v%2B4L8clpFSc6l8%2F92YpdnCb4iKez1plCFLqQ0wiZm1vQY6pgECwgewyACxldwbEVJZGz02oJ4x%2FrA9xUxBdUMDCYpQKOzB37Tcr%2BOUdfJxyKoqhpBOJY%2BBUNhOViqJtERNK1lX%2FHoQvzDaAasUIks8JQC3R9LL1ad7UVY9oyrUxAcjOWWl%2FskVQxvLGxdaxmseDpqZuwUGDYEXO6WTLxntcD2TydJTyI3yhsfyLuZ%2Bjo286Fm5bob3Qn0KN5AAp%2FA78T1hh%2FslWj5E&X-Amz-Signature=9a87b21031125248e9b948eaec1e9d9cbaf0557ddf792f30d1789e2cf927619f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIFOIS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZjZB11DBFQxMgRLriVyAcnODQXuCom02CxDaFTEwD1AiAeYMEaHWF3vM3NJp4DtWISnKlOohESj4Rf15WCxjPigiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iNfYs3nqfkY12DsKtwDO%2BPjyZKs6DIH3wHya01i2meKVTPNt6kLdB520l6H7nKlmlXHG1HeSSPBGlNp66MDaFDYUghcR58sEMhfP%2BUuQAdaAr5h5bd0vKPY9EM2Ooxp8JC9YqbvxhgBnzsSYGE4HlJQXqbB0eDPS6JfBM6kVLXscnt21W0CuhS1SBdXMY9bm0eriImCkahx698eGzm9fEeE6Wq2ZdL%2Bf%2FKuNGHNvnmE%2BRoUHBdZyaiese6kjiw3Pqgu%2Fa2PYtxcDEXjReuzok0Vh1qAJeQMgqXfgUP8e84YuQJz3WvKa5wva%2BVSBDe7nekwI06KlAPeb5Pcoa9fHxF5S3Mg9vEqUmcuZPUOyTNNmJgFLjIIl48IPbu00SriiDbSQF9F9AoTXrwBm37fPwPv7NtYUPekCuIBPCmx1mpxJW3%2FkfLEGFvSWFNg3CoMXUJ8igdQmvfNsVBtDDrh0qHw0gtFz8dzs%2FDYRBQPIpKAKlCBPtMmx3VWMgfoJRWYC3aStvclLUby51C8PROHK%2BJ8UF0GBkQLBb%2FjiTAWoat0qNLF3eYR6ER4ZXNiwViU5%2BVdI8Zy7IbEoBBRWq9yjevxVYpE7njl2wVa%2BDwb61v%2B4L8clpFSc6l8%2F92YpdnCb4iKez1plCFLqQ0wiZm1vQY6pgECwgewyACxldwbEVJZGz02oJ4x%2FrA9xUxBdUMDCYpQKOzB37Tcr%2BOUdfJxyKoqhpBOJY%2BBUNhOViqJtERNK1lX%2FHoQvzDaAasUIks8JQC3R9LL1ad7UVY9oyrUxAcjOWWl%2FskVQxvLGxdaxmseDpqZuwUGDYEXO6WTLxntcD2TydJTyI3yhsfyLuZ%2Bjo286Fm5bob3Qn0KN5AAp%2FA78T1hh%2FslWj5E&X-Amz-Signature=214d1c1ab568b3ce150e8b07cf4e32c58cdc676defb3dabf9090ef9a37e84031&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIFOIS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZjZB11DBFQxMgRLriVyAcnODQXuCom02CxDaFTEwD1AiAeYMEaHWF3vM3NJp4DtWISnKlOohESj4Rf15WCxjPigiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iNfYs3nqfkY12DsKtwDO%2BPjyZKs6DIH3wHya01i2meKVTPNt6kLdB520l6H7nKlmlXHG1HeSSPBGlNp66MDaFDYUghcR58sEMhfP%2BUuQAdaAr5h5bd0vKPY9EM2Ooxp8JC9YqbvxhgBnzsSYGE4HlJQXqbB0eDPS6JfBM6kVLXscnt21W0CuhS1SBdXMY9bm0eriImCkahx698eGzm9fEeE6Wq2ZdL%2Bf%2FKuNGHNvnmE%2BRoUHBdZyaiese6kjiw3Pqgu%2Fa2PYtxcDEXjReuzok0Vh1qAJeQMgqXfgUP8e84YuQJz3WvKa5wva%2BVSBDe7nekwI06KlAPeb5Pcoa9fHxF5S3Mg9vEqUmcuZPUOyTNNmJgFLjIIl48IPbu00SriiDbSQF9F9AoTXrwBm37fPwPv7NtYUPekCuIBPCmx1mpxJW3%2FkfLEGFvSWFNg3CoMXUJ8igdQmvfNsVBtDDrh0qHw0gtFz8dzs%2FDYRBQPIpKAKlCBPtMmx3VWMgfoJRWYC3aStvclLUby51C8PROHK%2BJ8UF0GBkQLBb%2FjiTAWoat0qNLF3eYR6ER4ZXNiwViU5%2BVdI8Zy7IbEoBBRWq9yjevxVYpE7njl2wVa%2BDwb61v%2B4L8clpFSc6l8%2F92YpdnCb4iKez1plCFLqQ0wiZm1vQY6pgECwgewyACxldwbEVJZGz02oJ4x%2FrA9xUxBdUMDCYpQKOzB37Tcr%2BOUdfJxyKoqhpBOJY%2BBUNhOViqJtERNK1lX%2FHoQvzDaAasUIks8JQC3R9LL1ad7UVY9oyrUxAcjOWWl%2FskVQxvLGxdaxmseDpqZuwUGDYEXO6WTLxntcD2TydJTyI3yhsfyLuZ%2Bjo286Fm5bob3Qn0KN5AAp%2FA78T1hh%2FslWj5E&X-Amz-Signature=4eec5899e25431c3f5e3a7fc10ea67698fce9a81b36e4ea3d12d8c60c754a127&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIFOIS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZjZB11DBFQxMgRLriVyAcnODQXuCom02CxDaFTEwD1AiAeYMEaHWF3vM3NJp4DtWISnKlOohESj4Rf15WCxjPigiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iNfYs3nqfkY12DsKtwDO%2BPjyZKs6DIH3wHya01i2meKVTPNt6kLdB520l6H7nKlmlXHG1HeSSPBGlNp66MDaFDYUghcR58sEMhfP%2BUuQAdaAr5h5bd0vKPY9EM2Ooxp8JC9YqbvxhgBnzsSYGE4HlJQXqbB0eDPS6JfBM6kVLXscnt21W0CuhS1SBdXMY9bm0eriImCkahx698eGzm9fEeE6Wq2ZdL%2Bf%2FKuNGHNvnmE%2BRoUHBdZyaiese6kjiw3Pqgu%2Fa2PYtxcDEXjReuzok0Vh1qAJeQMgqXfgUP8e84YuQJz3WvKa5wva%2BVSBDe7nekwI06KlAPeb5Pcoa9fHxF5S3Mg9vEqUmcuZPUOyTNNmJgFLjIIl48IPbu00SriiDbSQF9F9AoTXrwBm37fPwPv7NtYUPekCuIBPCmx1mpxJW3%2FkfLEGFvSWFNg3CoMXUJ8igdQmvfNsVBtDDrh0qHw0gtFz8dzs%2FDYRBQPIpKAKlCBPtMmx3VWMgfoJRWYC3aStvclLUby51C8PROHK%2BJ8UF0GBkQLBb%2FjiTAWoat0qNLF3eYR6ER4ZXNiwViU5%2BVdI8Zy7IbEoBBRWq9yjevxVYpE7njl2wVa%2BDwb61v%2B4L8clpFSc6l8%2F92YpdnCb4iKez1plCFLqQ0wiZm1vQY6pgECwgewyACxldwbEVJZGz02oJ4x%2FrA9xUxBdUMDCYpQKOzB37Tcr%2BOUdfJxyKoqhpBOJY%2BBUNhOViqJtERNK1lX%2FHoQvzDaAasUIks8JQC3R9LL1ad7UVY9oyrUxAcjOWWl%2FskVQxvLGxdaxmseDpqZuwUGDYEXO6WTLxntcD2TydJTyI3yhsfyLuZ%2Bjo286Fm5bob3Qn0KN5AAp%2FA78T1hh%2FslWj5E&X-Amz-Signature=30ce453bae1abd3cab42e0787b423455519859f6c37dc51056a28c67be6b06f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIFOIS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZjZB11DBFQxMgRLriVyAcnODQXuCom02CxDaFTEwD1AiAeYMEaHWF3vM3NJp4DtWISnKlOohESj4Rf15WCxjPigiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iNfYs3nqfkY12DsKtwDO%2BPjyZKs6DIH3wHya01i2meKVTPNt6kLdB520l6H7nKlmlXHG1HeSSPBGlNp66MDaFDYUghcR58sEMhfP%2BUuQAdaAr5h5bd0vKPY9EM2Ooxp8JC9YqbvxhgBnzsSYGE4HlJQXqbB0eDPS6JfBM6kVLXscnt21W0CuhS1SBdXMY9bm0eriImCkahx698eGzm9fEeE6Wq2ZdL%2Bf%2FKuNGHNvnmE%2BRoUHBdZyaiese6kjiw3Pqgu%2Fa2PYtxcDEXjReuzok0Vh1qAJeQMgqXfgUP8e84YuQJz3WvKa5wva%2BVSBDe7nekwI06KlAPeb5Pcoa9fHxF5S3Mg9vEqUmcuZPUOyTNNmJgFLjIIl48IPbu00SriiDbSQF9F9AoTXrwBm37fPwPv7NtYUPekCuIBPCmx1mpxJW3%2FkfLEGFvSWFNg3CoMXUJ8igdQmvfNsVBtDDrh0qHw0gtFz8dzs%2FDYRBQPIpKAKlCBPtMmx3VWMgfoJRWYC3aStvclLUby51C8PROHK%2BJ8UF0GBkQLBb%2FjiTAWoat0qNLF3eYR6ER4ZXNiwViU5%2BVdI8Zy7IbEoBBRWq9yjevxVYpE7njl2wVa%2BDwb61v%2B4L8clpFSc6l8%2F92YpdnCb4iKez1plCFLqQ0wiZm1vQY6pgECwgewyACxldwbEVJZGz02oJ4x%2FrA9xUxBdUMDCYpQKOzB37Tcr%2BOUdfJxyKoqhpBOJY%2BBUNhOViqJtERNK1lX%2FHoQvzDaAasUIks8JQC3R9LL1ad7UVY9oyrUxAcjOWWl%2FskVQxvLGxdaxmseDpqZuwUGDYEXO6WTLxntcD2TydJTyI3yhsfyLuZ%2Bjo286Fm5bob3Qn0KN5AAp%2FA78T1hh%2FslWj5E&X-Amz-Signature=63864fc4f6b4ef9d2781e31e1f69e25e2bc2faaa783c8f276110f69a33133faa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIFOIS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZjZB11DBFQxMgRLriVyAcnODQXuCom02CxDaFTEwD1AiAeYMEaHWF3vM3NJp4DtWISnKlOohESj4Rf15WCxjPigiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iNfYs3nqfkY12DsKtwDO%2BPjyZKs6DIH3wHya01i2meKVTPNt6kLdB520l6H7nKlmlXHG1HeSSPBGlNp66MDaFDYUghcR58sEMhfP%2BUuQAdaAr5h5bd0vKPY9EM2Ooxp8JC9YqbvxhgBnzsSYGE4HlJQXqbB0eDPS6JfBM6kVLXscnt21W0CuhS1SBdXMY9bm0eriImCkahx698eGzm9fEeE6Wq2ZdL%2Bf%2FKuNGHNvnmE%2BRoUHBdZyaiese6kjiw3Pqgu%2Fa2PYtxcDEXjReuzok0Vh1qAJeQMgqXfgUP8e84YuQJz3WvKa5wva%2BVSBDe7nekwI06KlAPeb5Pcoa9fHxF5S3Mg9vEqUmcuZPUOyTNNmJgFLjIIl48IPbu00SriiDbSQF9F9AoTXrwBm37fPwPv7NtYUPekCuIBPCmx1mpxJW3%2FkfLEGFvSWFNg3CoMXUJ8igdQmvfNsVBtDDrh0qHw0gtFz8dzs%2FDYRBQPIpKAKlCBPtMmx3VWMgfoJRWYC3aStvclLUby51C8PROHK%2BJ8UF0GBkQLBb%2FjiTAWoat0qNLF3eYR6ER4ZXNiwViU5%2BVdI8Zy7IbEoBBRWq9yjevxVYpE7njl2wVa%2BDwb61v%2B4L8clpFSc6l8%2F92YpdnCb4iKez1plCFLqQ0wiZm1vQY6pgECwgewyACxldwbEVJZGz02oJ4x%2FrA9xUxBdUMDCYpQKOzB37Tcr%2BOUdfJxyKoqhpBOJY%2BBUNhOViqJtERNK1lX%2FHoQvzDaAasUIks8JQC3R9LL1ad7UVY9oyrUxAcjOWWl%2FskVQxvLGxdaxmseDpqZuwUGDYEXO6WTLxntcD2TydJTyI3yhsfyLuZ%2Bjo286Fm5bob3Qn0KN5AAp%2FA78T1hh%2FslWj5E&X-Amz-Signature=26aedfe479af5b406668928c28bf81cb89a44b3119212fd98bcdf906930689c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIFOIS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZjZB11DBFQxMgRLriVyAcnODQXuCom02CxDaFTEwD1AiAeYMEaHWF3vM3NJp4DtWISnKlOohESj4Rf15WCxjPigiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iNfYs3nqfkY12DsKtwDO%2BPjyZKs6DIH3wHya01i2meKVTPNt6kLdB520l6H7nKlmlXHG1HeSSPBGlNp66MDaFDYUghcR58sEMhfP%2BUuQAdaAr5h5bd0vKPY9EM2Ooxp8JC9YqbvxhgBnzsSYGE4HlJQXqbB0eDPS6JfBM6kVLXscnt21W0CuhS1SBdXMY9bm0eriImCkahx698eGzm9fEeE6Wq2ZdL%2Bf%2FKuNGHNvnmE%2BRoUHBdZyaiese6kjiw3Pqgu%2Fa2PYtxcDEXjReuzok0Vh1qAJeQMgqXfgUP8e84YuQJz3WvKa5wva%2BVSBDe7nekwI06KlAPeb5Pcoa9fHxF5S3Mg9vEqUmcuZPUOyTNNmJgFLjIIl48IPbu00SriiDbSQF9F9AoTXrwBm37fPwPv7NtYUPekCuIBPCmx1mpxJW3%2FkfLEGFvSWFNg3CoMXUJ8igdQmvfNsVBtDDrh0qHw0gtFz8dzs%2FDYRBQPIpKAKlCBPtMmx3VWMgfoJRWYC3aStvclLUby51C8PROHK%2BJ8UF0GBkQLBb%2FjiTAWoat0qNLF3eYR6ER4ZXNiwViU5%2BVdI8Zy7IbEoBBRWq9yjevxVYpE7njl2wVa%2BDwb61v%2B4L8clpFSc6l8%2F92YpdnCb4iKez1plCFLqQ0wiZm1vQY6pgECwgewyACxldwbEVJZGz02oJ4x%2FrA9xUxBdUMDCYpQKOzB37Tcr%2BOUdfJxyKoqhpBOJY%2BBUNhOViqJtERNK1lX%2FHoQvzDaAasUIks8JQC3R9LL1ad7UVY9oyrUxAcjOWWl%2FskVQxvLGxdaxmseDpqZuwUGDYEXO6WTLxntcD2TydJTyI3yhsfyLuZ%2Bjo286Fm5bob3Qn0KN5AAp%2FA78T1hh%2FslWj5E&X-Amz-Signature=7866c0991e048d33870aa1d5e16daf603521a1a45a01539615afe4afdc9e8a16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIFOIS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZjZB11DBFQxMgRLriVyAcnODQXuCom02CxDaFTEwD1AiAeYMEaHWF3vM3NJp4DtWISnKlOohESj4Rf15WCxjPigiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iNfYs3nqfkY12DsKtwDO%2BPjyZKs6DIH3wHya01i2meKVTPNt6kLdB520l6H7nKlmlXHG1HeSSPBGlNp66MDaFDYUghcR58sEMhfP%2BUuQAdaAr5h5bd0vKPY9EM2Ooxp8JC9YqbvxhgBnzsSYGE4HlJQXqbB0eDPS6JfBM6kVLXscnt21W0CuhS1SBdXMY9bm0eriImCkahx698eGzm9fEeE6Wq2ZdL%2Bf%2FKuNGHNvnmE%2BRoUHBdZyaiese6kjiw3Pqgu%2Fa2PYtxcDEXjReuzok0Vh1qAJeQMgqXfgUP8e84YuQJz3WvKa5wva%2BVSBDe7nekwI06KlAPeb5Pcoa9fHxF5S3Mg9vEqUmcuZPUOyTNNmJgFLjIIl48IPbu00SriiDbSQF9F9AoTXrwBm37fPwPv7NtYUPekCuIBPCmx1mpxJW3%2FkfLEGFvSWFNg3CoMXUJ8igdQmvfNsVBtDDrh0qHw0gtFz8dzs%2FDYRBQPIpKAKlCBPtMmx3VWMgfoJRWYC3aStvclLUby51C8PROHK%2BJ8UF0GBkQLBb%2FjiTAWoat0qNLF3eYR6ER4ZXNiwViU5%2BVdI8Zy7IbEoBBRWq9yjevxVYpE7njl2wVa%2BDwb61v%2B4L8clpFSc6l8%2F92YpdnCb4iKez1plCFLqQ0wiZm1vQY6pgECwgewyACxldwbEVJZGz02oJ4x%2FrA9xUxBdUMDCYpQKOzB37Tcr%2BOUdfJxyKoqhpBOJY%2BBUNhOViqJtERNK1lX%2FHoQvzDaAasUIks8JQC3R9LL1ad7UVY9oyrUxAcjOWWl%2FskVQxvLGxdaxmseDpqZuwUGDYEXO6WTLxntcD2TydJTyI3yhsfyLuZ%2Bjo286Fm5bob3Qn0KN5AAp%2FA78T1hh%2FslWj5E&X-Amz-Signature=2da9633a524eadcb066f5bb41287e9edd6bceb4d970ea9479d612544a3464a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
