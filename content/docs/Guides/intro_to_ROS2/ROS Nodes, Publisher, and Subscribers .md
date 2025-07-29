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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCRNB2I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxGHOsCeO8lP3VCQW8QaTwt9o0npkYU9Uq%2FRmqo3eObQIhAL2Q3pc4ji7X67KiURtM8wXIBsP0%2BhT4Rf1I%2BNZdLyGjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJZXVlZNQPLHrw7wq3APjRUMhqlHCxJi4bNlMNse64R1%2B7QIQUvlgnbJVc7sK86oHSesotJEfslRAzR0G1D9Nnrc%2F3R2BZuiEc40FCQOoTMRR0rAzMCOmGVsaSB5wgBMVl1QVeZc0CSebimwmK7XJSctIcIAx7imbD4p2ANUt%2BHbkTqf8Zio5bQVGzF6aOOXupYZo1%2Fgr9vQqlwUQzbsB7X2CCg8mNcMhrOqvGduKf98lDS0lItbnMl78i5dzUVxr2xwy2TUlRML6vM4dIdEKFd1jKhKCYXgnqvzlEVslwBRFYDPaLzPOx45%2BODdmhijGoI6QsdLuD1JNANoat7NA0Oe6%2FvzMGwsh3NpKSi3Lk%2FZi4Rf0eouHDRP%2Fii82P%2BxPu%2BuA0drQE1142DgCEbY37TcI78zncAdGeZmbCeBJw1Q6On53aXNjCPN0Yb8F7D4gPGUvmA3vm6juikKpkEBxZnmlf8UA2gkUCCisj%2FOaFSYDRP2iKmGzSNAMqZ%2FkTNV2c1Q03eAZvM2ZVMewpFF4yH2qf7QaxoeDMO%2BX%2FTpzzpr3q%2FBb%2B%2BCAu%2BWGEl%2BBksWRLIFq6nj3gNgGKO932uhTfZ0%2BQJjYlpmLZu0VxI0sWArYVhwm0z2WBxswdPbvoP8UOYrQYWCLjxCJADD9yqPEBjqkAauCA2wCXk7FlIe2QbPnlLkCUVmd8tUD1eDIOJl9Q2UhY9LhvP%2BQY4AgCjvc6cnmxM8LO3gX0qkmwfj0EEcgwbzgfEOmNj9iwjVm9%2FO2MvcTDzdlGRgI7pUxvM1SCBaSoOfFB45%2B6L2S3xly4t%2BDntG6n30oNdwq14bnw6qkLbQw%2F2J4RBk%2B8cQWna0Az07v1hLcRutjXct82NnKzUiDSS2m6HS%2B&X-Amz-Signature=32c9b038715cab24949b7eab8efd7930e931eba04417de3915591cd6e9b0f08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCRNB2I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxGHOsCeO8lP3VCQW8QaTwt9o0npkYU9Uq%2FRmqo3eObQIhAL2Q3pc4ji7X67KiURtM8wXIBsP0%2BhT4Rf1I%2BNZdLyGjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJZXVlZNQPLHrw7wq3APjRUMhqlHCxJi4bNlMNse64R1%2B7QIQUvlgnbJVc7sK86oHSesotJEfslRAzR0G1D9Nnrc%2F3R2BZuiEc40FCQOoTMRR0rAzMCOmGVsaSB5wgBMVl1QVeZc0CSebimwmK7XJSctIcIAx7imbD4p2ANUt%2BHbkTqf8Zio5bQVGzF6aOOXupYZo1%2Fgr9vQqlwUQzbsB7X2CCg8mNcMhrOqvGduKf98lDS0lItbnMl78i5dzUVxr2xwy2TUlRML6vM4dIdEKFd1jKhKCYXgnqvzlEVslwBRFYDPaLzPOx45%2BODdmhijGoI6QsdLuD1JNANoat7NA0Oe6%2FvzMGwsh3NpKSi3Lk%2FZi4Rf0eouHDRP%2Fii82P%2BxPu%2BuA0drQE1142DgCEbY37TcI78zncAdGeZmbCeBJw1Q6On53aXNjCPN0Yb8F7D4gPGUvmA3vm6juikKpkEBxZnmlf8UA2gkUCCisj%2FOaFSYDRP2iKmGzSNAMqZ%2FkTNV2c1Q03eAZvM2ZVMewpFF4yH2qf7QaxoeDMO%2BX%2FTpzzpr3q%2FBb%2B%2BCAu%2BWGEl%2BBksWRLIFq6nj3gNgGKO932uhTfZ0%2BQJjYlpmLZu0VxI0sWArYVhwm0z2WBxswdPbvoP8UOYrQYWCLjxCJADD9yqPEBjqkAauCA2wCXk7FlIe2QbPnlLkCUVmd8tUD1eDIOJl9Q2UhY9LhvP%2BQY4AgCjvc6cnmxM8LO3gX0qkmwfj0EEcgwbzgfEOmNj9iwjVm9%2FO2MvcTDzdlGRgI7pUxvM1SCBaSoOfFB45%2B6L2S3xly4t%2BDntG6n30oNdwq14bnw6qkLbQw%2F2J4RBk%2B8cQWna0Az07v1hLcRutjXct82NnKzUiDSS2m6HS%2B&X-Amz-Signature=ee03d51727fc051a1b6e44f2b6f2506f8e8416836af5781cd4fde451ff7729a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCRNB2I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxGHOsCeO8lP3VCQW8QaTwt9o0npkYU9Uq%2FRmqo3eObQIhAL2Q3pc4ji7X67KiURtM8wXIBsP0%2BhT4Rf1I%2BNZdLyGjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJZXVlZNQPLHrw7wq3APjRUMhqlHCxJi4bNlMNse64R1%2B7QIQUvlgnbJVc7sK86oHSesotJEfslRAzR0G1D9Nnrc%2F3R2BZuiEc40FCQOoTMRR0rAzMCOmGVsaSB5wgBMVl1QVeZc0CSebimwmK7XJSctIcIAx7imbD4p2ANUt%2BHbkTqf8Zio5bQVGzF6aOOXupYZo1%2Fgr9vQqlwUQzbsB7X2CCg8mNcMhrOqvGduKf98lDS0lItbnMl78i5dzUVxr2xwy2TUlRML6vM4dIdEKFd1jKhKCYXgnqvzlEVslwBRFYDPaLzPOx45%2BODdmhijGoI6QsdLuD1JNANoat7NA0Oe6%2FvzMGwsh3NpKSi3Lk%2FZi4Rf0eouHDRP%2Fii82P%2BxPu%2BuA0drQE1142DgCEbY37TcI78zncAdGeZmbCeBJw1Q6On53aXNjCPN0Yb8F7D4gPGUvmA3vm6juikKpkEBxZnmlf8UA2gkUCCisj%2FOaFSYDRP2iKmGzSNAMqZ%2FkTNV2c1Q03eAZvM2ZVMewpFF4yH2qf7QaxoeDMO%2BX%2FTpzzpr3q%2FBb%2B%2BCAu%2BWGEl%2BBksWRLIFq6nj3gNgGKO932uhTfZ0%2BQJjYlpmLZu0VxI0sWArYVhwm0z2WBxswdPbvoP8UOYrQYWCLjxCJADD9yqPEBjqkAauCA2wCXk7FlIe2QbPnlLkCUVmd8tUD1eDIOJl9Q2UhY9LhvP%2BQY4AgCjvc6cnmxM8LO3gX0qkmwfj0EEcgwbzgfEOmNj9iwjVm9%2FO2MvcTDzdlGRgI7pUxvM1SCBaSoOfFB45%2B6L2S3xly4t%2BDntG6n30oNdwq14bnw6qkLbQw%2F2J4RBk%2B8cQWna0Az07v1hLcRutjXct82NnKzUiDSS2m6HS%2B&X-Amz-Signature=979b73483cf1affefc877b66c378c589b0d876f562ffa0d7e2aab8ac31200004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCRNB2I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxGHOsCeO8lP3VCQW8QaTwt9o0npkYU9Uq%2FRmqo3eObQIhAL2Q3pc4ji7X67KiURtM8wXIBsP0%2BhT4Rf1I%2BNZdLyGjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJZXVlZNQPLHrw7wq3APjRUMhqlHCxJi4bNlMNse64R1%2B7QIQUvlgnbJVc7sK86oHSesotJEfslRAzR0G1D9Nnrc%2F3R2BZuiEc40FCQOoTMRR0rAzMCOmGVsaSB5wgBMVl1QVeZc0CSebimwmK7XJSctIcIAx7imbD4p2ANUt%2BHbkTqf8Zio5bQVGzF6aOOXupYZo1%2Fgr9vQqlwUQzbsB7X2CCg8mNcMhrOqvGduKf98lDS0lItbnMl78i5dzUVxr2xwy2TUlRML6vM4dIdEKFd1jKhKCYXgnqvzlEVslwBRFYDPaLzPOx45%2BODdmhijGoI6QsdLuD1JNANoat7NA0Oe6%2FvzMGwsh3NpKSi3Lk%2FZi4Rf0eouHDRP%2Fii82P%2BxPu%2BuA0drQE1142DgCEbY37TcI78zncAdGeZmbCeBJw1Q6On53aXNjCPN0Yb8F7D4gPGUvmA3vm6juikKpkEBxZnmlf8UA2gkUCCisj%2FOaFSYDRP2iKmGzSNAMqZ%2FkTNV2c1Q03eAZvM2ZVMewpFF4yH2qf7QaxoeDMO%2BX%2FTpzzpr3q%2FBb%2B%2BCAu%2BWGEl%2BBksWRLIFq6nj3gNgGKO932uhTfZ0%2BQJjYlpmLZu0VxI0sWArYVhwm0z2WBxswdPbvoP8UOYrQYWCLjxCJADD9yqPEBjqkAauCA2wCXk7FlIe2QbPnlLkCUVmd8tUD1eDIOJl9Q2UhY9LhvP%2BQY4AgCjvc6cnmxM8LO3gX0qkmwfj0EEcgwbzgfEOmNj9iwjVm9%2FO2MvcTDzdlGRgI7pUxvM1SCBaSoOfFB45%2B6L2S3xly4t%2BDntG6n30oNdwq14bnw6qkLbQw%2F2J4RBk%2B8cQWna0Az07v1hLcRutjXct82NnKzUiDSS2m6HS%2B&X-Amz-Signature=bb730b4a0da458fb0a3d9daf47ec7edb58acecf5de86eeb9037e612a18e51121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCRNB2I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxGHOsCeO8lP3VCQW8QaTwt9o0npkYU9Uq%2FRmqo3eObQIhAL2Q3pc4ji7X67KiURtM8wXIBsP0%2BhT4Rf1I%2BNZdLyGjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJZXVlZNQPLHrw7wq3APjRUMhqlHCxJi4bNlMNse64R1%2B7QIQUvlgnbJVc7sK86oHSesotJEfslRAzR0G1D9Nnrc%2F3R2BZuiEc40FCQOoTMRR0rAzMCOmGVsaSB5wgBMVl1QVeZc0CSebimwmK7XJSctIcIAx7imbD4p2ANUt%2BHbkTqf8Zio5bQVGzF6aOOXupYZo1%2Fgr9vQqlwUQzbsB7X2CCg8mNcMhrOqvGduKf98lDS0lItbnMl78i5dzUVxr2xwy2TUlRML6vM4dIdEKFd1jKhKCYXgnqvzlEVslwBRFYDPaLzPOx45%2BODdmhijGoI6QsdLuD1JNANoat7NA0Oe6%2FvzMGwsh3NpKSi3Lk%2FZi4Rf0eouHDRP%2Fii82P%2BxPu%2BuA0drQE1142DgCEbY37TcI78zncAdGeZmbCeBJw1Q6On53aXNjCPN0Yb8F7D4gPGUvmA3vm6juikKpkEBxZnmlf8UA2gkUCCisj%2FOaFSYDRP2iKmGzSNAMqZ%2FkTNV2c1Q03eAZvM2ZVMewpFF4yH2qf7QaxoeDMO%2BX%2FTpzzpr3q%2FBb%2B%2BCAu%2BWGEl%2BBksWRLIFq6nj3gNgGKO932uhTfZ0%2BQJjYlpmLZu0VxI0sWArYVhwm0z2WBxswdPbvoP8UOYrQYWCLjxCJADD9yqPEBjqkAauCA2wCXk7FlIe2QbPnlLkCUVmd8tUD1eDIOJl9Q2UhY9LhvP%2BQY4AgCjvc6cnmxM8LO3gX0qkmwfj0EEcgwbzgfEOmNj9iwjVm9%2FO2MvcTDzdlGRgI7pUxvM1SCBaSoOfFB45%2B6L2S3xly4t%2BDntG6n30oNdwq14bnw6qkLbQw%2F2J4RBk%2B8cQWna0Az07v1hLcRutjXct82NnKzUiDSS2m6HS%2B&X-Amz-Signature=3872e6f1994cf2b76056528a76b171e7f416530dddb98967e3965e0158d232d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCRNB2I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxGHOsCeO8lP3VCQW8QaTwt9o0npkYU9Uq%2FRmqo3eObQIhAL2Q3pc4ji7X67KiURtM8wXIBsP0%2BhT4Rf1I%2BNZdLyGjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJZXVlZNQPLHrw7wq3APjRUMhqlHCxJi4bNlMNse64R1%2B7QIQUvlgnbJVc7sK86oHSesotJEfslRAzR0G1D9Nnrc%2F3R2BZuiEc40FCQOoTMRR0rAzMCOmGVsaSB5wgBMVl1QVeZc0CSebimwmK7XJSctIcIAx7imbD4p2ANUt%2BHbkTqf8Zio5bQVGzF6aOOXupYZo1%2Fgr9vQqlwUQzbsB7X2CCg8mNcMhrOqvGduKf98lDS0lItbnMl78i5dzUVxr2xwy2TUlRML6vM4dIdEKFd1jKhKCYXgnqvzlEVslwBRFYDPaLzPOx45%2BODdmhijGoI6QsdLuD1JNANoat7NA0Oe6%2FvzMGwsh3NpKSi3Lk%2FZi4Rf0eouHDRP%2Fii82P%2BxPu%2BuA0drQE1142DgCEbY37TcI78zncAdGeZmbCeBJw1Q6On53aXNjCPN0Yb8F7D4gPGUvmA3vm6juikKpkEBxZnmlf8UA2gkUCCisj%2FOaFSYDRP2iKmGzSNAMqZ%2FkTNV2c1Q03eAZvM2ZVMewpFF4yH2qf7QaxoeDMO%2BX%2FTpzzpr3q%2FBb%2B%2BCAu%2BWGEl%2BBksWRLIFq6nj3gNgGKO932uhTfZ0%2BQJjYlpmLZu0VxI0sWArYVhwm0z2WBxswdPbvoP8UOYrQYWCLjxCJADD9yqPEBjqkAauCA2wCXk7FlIe2QbPnlLkCUVmd8tUD1eDIOJl9Q2UhY9LhvP%2BQY4AgCjvc6cnmxM8LO3gX0qkmwfj0EEcgwbzgfEOmNj9iwjVm9%2FO2MvcTDzdlGRgI7pUxvM1SCBaSoOfFB45%2B6L2S3xly4t%2BDntG6n30oNdwq14bnw6qkLbQw%2F2J4RBk%2B8cQWna0Az07v1hLcRutjXct82NnKzUiDSS2m6HS%2B&X-Amz-Signature=90a53c7441452d79c14b42df0b896909c21a92c5735e009eca8f12f3a1a72c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCRNB2I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxGHOsCeO8lP3VCQW8QaTwt9o0npkYU9Uq%2FRmqo3eObQIhAL2Q3pc4ji7X67KiURtM8wXIBsP0%2BhT4Rf1I%2BNZdLyGjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJZXVlZNQPLHrw7wq3APjRUMhqlHCxJi4bNlMNse64R1%2B7QIQUvlgnbJVc7sK86oHSesotJEfslRAzR0G1D9Nnrc%2F3R2BZuiEc40FCQOoTMRR0rAzMCOmGVsaSB5wgBMVl1QVeZc0CSebimwmK7XJSctIcIAx7imbD4p2ANUt%2BHbkTqf8Zio5bQVGzF6aOOXupYZo1%2Fgr9vQqlwUQzbsB7X2CCg8mNcMhrOqvGduKf98lDS0lItbnMl78i5dzUVxr2xwy2TUlRML6vM4dIdEKFd1jKhKCYXgnqvzlEVslwBRFYDPaLzPOx45%2BODdmhijGoI6QsdLuD1JNANoat7NA0Oe6%2FvzMGwsh3NpKSi3Lk%2FZi4Rf0eouHDRP%2Fii82P%2BxPu%2BuA0drQE1142DgCEbY37TcI78zncAdGeZmbCeBJw1Q6On53aXNjCPN0Yb8F7D4gPGUvmA3vm6juikKpkEBxZnmlf8UA2gkUCCisj%2FOaFSYDRP2iKmGzSNAMqZ%2FkTNV2c1Q03eAZvM2ZVMewpFF4yH2qf7QaxoeDMO%2BX%2FTpzzpr3q%2FBb%2B%2BCAu%2BWGEl%2BBksWRLIFq6nj3gNgGKO932uhTfZ0%2BQJjYlpmLZu0VxI0sWArYVhwm0z2WBxswdPbvoP8UOYrQYWCLjxCJADD9yqPEBjqkAauCA2wCXk7FlIe2QbPnlLkCUVmd8tUD1eDIOJl9Q2UhY9LhvP%2BQY4AgCjvc6cnmxM8LO3gX0qkmwfj0EEcgwbzgfEOmNj9iwjVm9%2FO2MvcTDzdlGRgI7pUxvM1SCBaSoOfFB45%2B6L2S3xly4t%2BDntG6n30oNdwq14bnw6qkLbQw%2F2J4RBk%2B8cQWna0Az07v1hLcRutjXct82NnKzUiDSS2m6HS%2B&X-Amz-Signature=7ccc5760bf70ebd88375489f067d8e05d1faa47f13b09eebdd31b9b2af09bfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCRNB2I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxGHOsCeO8lP3VCQW8QaTwt9o0npkYU9Uq%2FRmqo3eObQIhAL2Q3pc4ji7X67KiURtM8wXIBsP0%2BhT4Rf1I%2BNZdLyGjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJZXVlZNQPLHrw7wq3APjRUMhqlHCxJi4bNlMNse64R1%2B7QIQUvlgnbJVc7sK86oHSesotJEfslRAzR0G1D9Nnrc%2F3R2BZuiEc40FCQOoTMRR0rAzMCOmGVsaSB5wgBMVl1QVeZc0CSebimwmK7XJSctIcIAx7imbD4p2ANUt%2BHbkTqf8Zio5bQVGzF6aOOXupYZo1%2Fgr9vQqlwUQzbsB7X2CCg8mNcMhrOqvGduKf98lDS0lItbnMl78i5dzUVxr2xwy2TUlRML6vM4dIdEKFd1jKhKCYXgnqvzlEVslwBRFYDPaLzPOx45%2BODdmhijGoI6QsdLuD1JNANoat7NA0Oe6%2FvzMGwsh3NpKSi3Lk%2FZi4Rf0eouHDRP%2Fii82P%2BxPu%2BuA0drQE1142DgCEbY37TcI78zncAdGeZmbCeBJw1Q6On53aXNjCPN0Yb8F7D4gPGUvmA3vm6juikKpkEBxZnmlf8UA2gkUCCisj%2FOaFSYDRP2iKmGzSNAMqZ%2FkTNV2c1Q03eAZvM2ZVMewpFF4yH2qf7QaxoeDMO%2BX%2FTpzzpr3q%2FBb%2B%2BCAu%2BWGEl%2BBksWRLIFq6nj3gNgGKO932uhTfZ0%2BQJjYlpmLZu0VxI0sWArYVhwm0z2WBxswdPbvoP8UOYrQYWCLjxCJADD9yqPEBjqkAauCA2wCXk7FlIe2QbPnlLkCUVmd8tUD1eDIOJl9Q2UhY9LhvP%2BQY4AgCjvc6cnmxM8LO3gX0qkmwfj0EEcgwbzgfEOmNj9iwjVm9%2FO2MvcTDzdlGRgI7pUxvM1SCBaSoOfFB45%2B6L2S3xly4t%2BDntG6n30oNdwq14bnw6qkLbQw%2F2J4RBk%2B8cQWna0Az07v1hLcRutjXct82NnKzUiDSS2m6HS%2B&X-Amz-Signature=1a0b7e13815e5bb5eb4daa0d2ce4196a1454ce0097901e37061a81d76df2f383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
