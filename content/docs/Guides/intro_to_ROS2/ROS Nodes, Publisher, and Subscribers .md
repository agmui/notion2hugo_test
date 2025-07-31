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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGFRK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpyCJbATEdtq33%2BInDpMgJjwPyCiHdcTLR%2BC0HjGseqAiBnyCA3NvIngNsEMvnxQU8fKV8Oo4EowHvEMHRSG0VU0iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECuNwF0fC5svTriXKtwDpaZpq90D2wk0AKxcnyYYKuSXl95VFWaACVIMIQdR3AqfOacdivSKU8gO2L3KEQLV7SYo7eQx5lbKl7wZzVt9LpIqAQSSn1Lc72JgnyFqSAZsXjPgNT7w%2BAd8H3kA%2Fi22kpgdHqRlZF4TOarcnmRybZlYMgpObqdKH6GpRixt%2FxiUCIZULLa8OQ47pf5%2Bro6usapjWVFBrbXHWi%2FblIsX%2BVrbzGeHzIMBfVqzOhTy98IkzT%2FMeXApf4L2%2FLwgUd5deTqq3J%2B%2BiCGg2YqI2tJEdNNooBBhwtCXZh73locJfgLPVpSzov8fVw5SSnrFM6jkBjLI8AWwWYer%2BNwV4xiBOBTXXMpQX6L%2FQDTbjbVMW0JxROq2F9D53kJtfuXy9%2F%2F44UbC%2FVYx9xk7h2RXQWrvAjR%2F2XTGdu2qnR4hEDOHIrWP%2BelDJfBySYKUQXvtysA9CCoujIP5OCrhCUUDsSMuBLJCp8C3rxrm99lzsIySCCOyFSmQdvIauSWApHuGtVcx2kk1%2BNTvbrE1jX6jOzh3xPYFN%2FAg0FoYueLtkfbIScCzQcnDTD%2BzXbHMEYoO5zmXCag9uuym21FJtdpkTodAV%2F1s5rQ3%2Bb5LrhsPqqoGexMHwg0dj8898tXX5Q8w8beuxAY6pgHejwQmagCfO52XanxTKlxsK4rCdb4rEXQdadcNwpNc%2FHh2wMZKPK7r3487y0v5VWqhK1o1EyUuX1SlG%2FCcHUVdkkms8D%2BHF0QtWFW6ZSNyLOxcFoZk1lfA1ZPQUQ6uUN3KIKuaPYoRDxNbsFS0voLSKyvBK2qTZtaL%2B0cNrQ4XbU0GECBKp4B9%2FCC7rTic5YYwbeg5lvizscJLPHqKD2Y%2BoyXeADp2&X-Amz-Signature=461d74c1fe57260eb1966ca092a6e1ef3ba367d98f14299166d44187f7a46e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGFRK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpyCJbATEdtq33%2BInDpMgJjwPyCiHdcTLR%2BC0HjGseqAiBnyCA3NvIngNsEMvnxQU8fKV8Oo4EowHvEMHRSG0VU0iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECuNwF0fC5svTriXKtwDpaZpq90D2wk0AKxcnyYYKuSXl95VFWaACVIMIQdR3AqfOacdivSKU8gO2L3KEQLV7SYo7eQx5lbKl7wZzVt9LpIqAQSSn1Lc72JgnyFqSAZsXjPgNT7w%2BAd8H3kA%2Fi22kpgdHqRlZF4TOarcnmRybZlYMgpObqdKH6GpRixt%2FxiUCIZULLa8OQ47pf5%2Bro6usapjWVFBrbXHWi%2FblIsX%2BVrbzGeHzIMBfVqzOhTy98IkzT%2FMeXApf4L2%2FLwgUd5deTqq3J%2B%2BiCGg2YqI2tJEdNNooBBhwtCXZh73locJfgLPVpSzov8fVw5SSnrFM6jkBjLI8AWwWYer%2BNwV4xiBOBTXXMpQX6L%2FQDTbjbVMW0JxROq2F9D53kJtfuXy9%2F%2F44UbC%2FVYx9xk7h2RXQWrvAjR%2F2XTGdu2qnR4hEDOHIrWP%2BelDJfBySYKUQXvtysA9CCoujIP5OCrhCUUDsSMuBLJCp8C3rxrm99lzsIySCCOyFSmQdvIauSWApHuGtVcx2kk1%2BNTvbrE1jX6jOzh3xPYFN%2FAg0FoYueLtkfbIScCzQcnDTD%2BzXbHMEYoO5zmXCag9uuym21FJtdpkTodAV%2F1s5rQ3%2Bb5LrhsPqqoGexMHwg0dj8898tXX5Q8w8beuxAY6pgHejwQmagCfO52XanxTKlxsK4rCdb4rEXQdadcNwpNc%2FHh2wMZKPK7r3487y0v5VWqhK1o1EyUuX1SlG%2FCcHUVdkkms8D%2BHF0QtWFW6ZSNyLOxcFoZk1lfA1ZPQUQ6uUN3KIKuaPYoRDxNbsFS0voLSKyvBK2qTZtaL%2B0cNrQ4XbU0GECBKp4B9%2FCC7rTic5YYwbeg5lvizscJLPHqKD2Y%2BoyXeADp2&X-Amz-Signature=a508837d9ed1c8e7b003ba75c88501ed440ce156313afb0ed1dd0797a896548c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGFRK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpyCJbATEdtq33%2BInDpMgJjwPyCiHdcTLR%2BC0HjGseqAiBnyCA3NvIngNsEMvnxQU8fKV8Oo4EowHvEMHRSG0VU0iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECuNwF0fC5svTriXKtwDpaZpq90D2wk0AKxcnyYYKuSXl95VFWaACVIMIQdR3AqfOacdivSKU8gO2L3KEQLV7SYo7eQx5lbKl7wZzVt9LpIqAQSSn1Lc72JgnyFqSAZsXjPgNT7w%2BAd8H3kA%2Fi22kpgdHqRlZF4TOarcnmRybZlYMgpObqdKH6GpRixt%2FxiUCIZULLa8OQ47pf5%2Bro6usapjWVFBrbXHWi%2FblIsX%2BVrbzGeHzIMBfVqzOhTy98IkzT%2FMeXApf4L2%2FLwgUd5deTqq3J%2B%2BiCGg2YqI2tJEdNNooBBhwtCXZh73locJfgLPVpSzov8fVw5SSnrFM6jkBjLI8AWwWYer%2BNwV4xiBOBTXXMpQX6L%2FQDTbjbVMW0JxROq2F9D53kJtfuXy9%2F%2F44UbC%2FVYx9xk7h2RXQWrvAjR%2F2XTGdu2qnR4hEDOHIrWP%2BelDJfBySYKUQXvtysA9CCoujIP5OCrhCUUDsSMuBLJCp8C3rxrm99lzsIySCCOyFSmQdvIauSWApHuGtVcx2kk1%2BNTvbrE1jX6jOzh3xPYFN%2FAg0FoYueLtkfbIScCzQcnDTD%2BzXbHMEYoO5zmXCag9uuym21FJtdpkTodAV%2F1s5rQ3%2Bb5LrhsPqqoGexMHwg0dj8898tXX5Q8w8beuxAY6pgHejwQmagCfO52XanxTKlxsK4rCdb4rEXQdadcNwpNc%2FHh2wMZKPK7r3487y0v5VWqhK1o1EyUuX1SlG%2FCcHUVdkkms8D%2BHF0QtWFW6ZSNyLOxcFoZk1lfA1ZPQUQ6uUN3KIKuaPYoRDxNbsFS0voLSKyvBK2qTZtaL%2B0cNrQ4XbU0GECBKp4B9%2FCC7rTic5YYwbeg5lvizscJLPHqKD2Y%2BoyXeADp2&X-Amz-Signature=64196e8e6d4937b3edba19e8090436f121af26453ac99b1f3a092708659fbc24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGFRK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpyCJbATEdtq33%2BInDpMgJjwPyCiHdcTLR%2BC0HjGseqAiBnyCA3NvIngNsEMvnxQU8fKV8Oo4EowHvEMHRSG0VU0iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECuNwF0fC5svTriXKtwDpaZpq90D2wk0AKxcnyYYKuSXl95VFWaACVIMIQdR3AqfOacdivSKU8gO2L3KEQLV7SYo7eQx5lbKl7wZzVt9LpIqAQSSn1Lc72JgnyFqSAZsXjPgNT7w%2BAd8H3kA%2Fi22kpgdHqRlZF4TOarcnmRybZlYMgpObqdKH6GpRixt%2FxiUCIZULLa8OQ47pf5%2Bro6usapjWVFBrbXHWi%2FblIsX%2BVrbzGeHzIMBfVqzOhTy98IkzT%2FMeXApf4L2%2FLwgUd5deTqq3J%2B%2BiCGg2YqI2tJEdNNooBBhwtCXZh73locJfgLPVpSzov8fVw5SSnrFM6jkBjLI8AWwWYer%2BNwV4xiBOBTXXMpQX6L%2FQDTbjbVMW0JxROq2F9D53kJtfuXy9%2F%2F44UbC%2FVYx9xk7h2RXQWrvAjR%2F2XTGdu2qnR4hEDOHIrWP%2BelDJfBySYKUQXvtysA9CCoujIP5OCrhCUUDsSMuBLJCp8C3rxrm99lzsIySCCOyFSmQdvIauSWApHuGtVcx2kk1%2BNTvbrE1jX6jOzh3xPYFN%2FAg0FoYueLtkfbIScCzQcnDTD%2BzXbHMEYoO5zmXCag9uuym21FJtdpkTodAV%2F1s5rQ3%2Bb5LrhsPqqoGexMHwg0dj8898tXX5Q8w8beuxAY6pgHejwQmagCfO52XanxTKlxsK4rCdb4rEXQdadcNwpNc%2FHh2wMZKPK7r3487y0v5VWqhK1o1EyUuX1SlG%2FCcHUVdkkms8D%2BHF0QtWFW6ZSNyLOxcFoZk1lfA1ZPQUQ6uUN3KIKuaPYoRDxNbsFS0voLSKyvBK2qTZtaL%2B0cNrQ4XbU0GECBKp4B9%2FCC7rTic5YYwbeg5lvizscJLPHqKD2Y%2BoyXeADp2&X-Amz-Signature=e7fdd315f15fde45084c76466df7f2ed8a1cb7e1d52abde07fc853b74cfe3861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGFRK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpyCJbATEdtq33%2BInDpMgJjwPyCiHdcTLR%2BC0HjGseqAiBnyCA3NvIngNsEMvnxQU8fKV8Oo4EowHvEMHRSG0VU0iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECuNwF0fC5svTriXKtwDpaZpq90D2wk0AKxcnyYYKuSXl95VFWaACVIMIQdR3AqfOacdivSKU8gO2L3KEQLV7SYo7eQx5lbKl7wZzVt9LpIqAQSSn1Lc72JgnyFqSAZsXjPgNT7w%2BAd8H3kA%2Fi22kpgdHqRlZF4TOarcnmRybZlYMgpObqdKH6GpRixt%2FxiUCIZULLa8OQ47pf5%2Bro6usapjWVFBrbXHWi%2FblIsX%2BVrbzGeHzIMBfVqzOhTy98IkzT%2FMeXApf4L2%2FLwgUd5deTqq3J%2B%2BiCGg2YqI2tJEdNNooBBhwtCXZh73locJfgLPVpSzov8fVw5SSnrFM6jkBjLI8AWwWYer%2BNwV4xiBOBTXXMpQX6L%2FQDTbjbVMW0JxROq2F9D53kJtfuXy9%2F%2F44UbC%2FVYx9xk7h2RXQWrvAjR%2F2XTGdu2qnR4hEDOHIrWP%2BelDJfBySYKUQXvtysA9CCoujIP5OCrhCUUDsSMuBLJCp8C3rxrm99lzsIySCCOyFSmQdvIauSWApHuGtVcx2kk1%2BNTvbrE1jX6jOzh3xPYFN%2FAg0FoYueLtkfbIScCzQcnDTD%2BzXbHMEYoO5zmXCag9uuym21FJtdpkTodAV%2F1s5rQ3%2Bb5LrhsPqqoGexMHwg0dj8898tXX5Q8w8beuxAY6pgHejwQmagCfO52XanxTKlxsK4rCdb4rEXQdadcNwpNc%2FHh2wMZKPK7r3487y0v5VWqhK1o1EyUuX1SlG%2FCcHUVdkkms8D%2BHF0QtWFW6ZSNyLOxcFoZk1lfA1ZPQUQ6uUN3KIKuaPYoRDxNbsFS0voLSKyvBK2qTZtaL%2B0cNrQ4XbU0GECBKp4B9%2FCC7rTic5YYwbeg5lvizscJLPHqKD2Y%2BoyXeADp2&X-Amz-Signature=d913eb6cf12b99806ea5c3ec927eee9da4618f8f10cc7c0ddec587cf4b0bcaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGFRK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpyCJbATEdtq33%2BInDpMgJjwPyCiHdcTLR%2BC0HjGseqAiBnyCA3NvIngNsEMvnxQU8fKV8Oo4EowHvEMHRSG0VU0iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECuNwF0fC5svTriXKtwDpaZpq90D2wk0AKxcnyYYKuSXl95VFWaACVIMIQdR3AqfOacdivSKU8gO2L3KEQLV7SYo7eQx5lbKl7wZzVt9LpIqAQSSn1Lc72JgnyFqSAZsXjPgNT7w%2BAd8H3kA%2Fi22kpgdHqRlZF4TOarcnmRybZlYMgpObqdKH6GpRixt%2FxiUCIZULLa8OQ47pf5%2Bro6usapjWVFBrbXHWi%2FblIsX%2BVrbzGeHzIMBfVqzOhTy98IkzT%2FMeXApf4L2%2FLwgUd5deTqq3J%2B%2BiCGg2YqI2tJEdNNooBBhwtCXZh73locJfgLPVpSzov8fVw5SSnrFM6jkBjLI8AWwWYer%2BNwV4xiBOBTXXMpQX6L%2FQDTbjbVMW0JxROq2F9D53kJtfuXy9%2F%2F44UbC%2FVYx9xk7h2RXQWrvAjR%2F2XTGdu2qnR4hEDOHIrWP%2BelDJfBySYKUQXvtysA9CCoujIP5OCrhCUUDsSMuBLJCp8C3rxrm99lzsIySCCOyFSmQdvIauSWApHuGtVcx2kk1%2BNTvbrE1jX6jOzh3xPYFN%2FAg0FoYueLtkfbIScCzQcnDTD%2BzXbHMEYoO5zmXCag9uuym21FJtdpkTodAV%2F1s5rQ3%2Bb5LrhsPqqoGexMHwg0dj8898tXX5Q8w8beuxAY6pgHejwQmagCfO52XanxTKlxsK4rCdb4rEXQdadcNwpNc%2FHh2wMZKPK7r3487y0v5VWqhK1o1EyUuX1SlG%2FCcHUVdkkms8D%2BHF0QtWFW6ZSNyLOxcFoZk1lfA1ZPQUQ6uUN3KIKuaPYoRDxNbsFS0voLSKyvBK2qTZtaL%2B0cNrQ4XbU0GECBKp4B9%2FCC7rTic5YYwbeg5lvizscJLPHqKD2Y%2BoyXeADp2&X-Amz-Signature=3c74cce53ce8d73ff62b1204083c55d2e538135a5012e8003f549bf657480d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGFRK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpyCJbATEdtq33%2BInDpMgJjwPyCiHdcTLR%2BC0HjGseqAiBnyCA3NvIngNsEMvnxQU8fKV8Oo4EowHvEMHRSG0VU0iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECuNwF0fC5svTriXKtwDpaZpq90D2wk0AKxcnyYYKuSXl95VFWaACVIMIQdR3AqfOacdivSKU8gO2L3KEQLV7SYo7eQx5lbKl7wZzVt9LpIqAQSSn1Lc72JgnyFqSAZsXjPgNT7w%2BAd8H3kA%2Fi22kpgdHqRlZF4TOarcnmRybZlYMgpObqdKH6GpRixt%2FxiUCIZULLa8OQ47pf5%2Bro6usapjWVFBrbXHWi%2FblIsX%2BVrbzGeHzIMBfVqzOhTy98IkzT%2FMeXApf4L2%2FLwgUd5deTqq3J%2B%2BiCGg2YqI2tJEdNNooBBhwtCXZh73locJfgLPVpSzov8fVw5SSnrFM6jkBjLI8AWwWYer%2BNwV4xiBOBTXXMpQX6L%2FQDTbjbVMW0JxROq2F9D53kJtfuXy9%2F%2F44UbC%2FVYx9xk7h2RXQWrvAjR%2F2XTGdu2qnR4hEDOHIrWP%2BelDJfBySYKUQXvtysA9CCoujIP5OCrhCUUDsSMuBLJCp8C3rxrm99lzsIySCCOyFSmQdvIauSWApHuGtVcx2kk1%2BNTvbrE1jX6jOzh3xPYFN%2FAg0FoYueLtkfbIScCzQcnDTD%2BzXbHMEYoO5zmXCag9uuym21FJtdpkTodAV%2F1s5rQ3%2Bb5LrhsPqqoGexMHwg0dj8898tXX5Q8w8beuxAY6pgHejwQmagCfO52XanxTKlxsK4rCdb4rEXQdadcNwpNc%2FHh2wMZKPK7r3487y0v5VWqhK1o1EyUuX1SlG%2FCcHUVdkkms8D%2BHF0QtWFW6ZSNyLOxcFoZk1lfA1ZPQUQ6uUN3KIKuaPYoRDxNbsFS0voLSKyvBK2qTZtaL%2B0cNrQ4XbU0GECBKp4B9%2FCC7rTic5YYwbeg5lvizscJLPHqKD2Y%2BoyXeADp2&X-Amz-Signature=caeb62440e8dd53ffd96e50dd29147fb480689e7e47796ed93bdd51198d6d2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGFRK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpyCJbATEdtq33%2BInDpMgJjwPyCiHdcTLR%2BC0HjGseqAiBnyCA3NvIngNsEMvnxQU8fKV8Oo4EowHvEMHRSG0VU0iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECuNwF0fC5svTriXKtwDpaZpq90D2wk0AKxcnyYYKuSXl95VFWaACVIMIQdR3AqfOacdivSKU8gO2L3KEQLV7SYo7eQx5lbKl7wZzVt9LpIqAQSSn1Lc72JgnyFqSAZsXjPgNT7w%2BAd8H3kA%2Fi22kpgdHqRlZF4TOarcnmRybZlYMgpObqdKH6GpRixt%2FxiUCIZULLa8OQ47pf5%2Bro6usapjWVFBrbXHWi%2FblIsX%2BVrbzGeHzIMBfVqzOhTy98IkzT%2FMeXApf4L2%2FLwgUd5deTqq3J%2B%2BiCGg2YqI2tJEdNNooBBhwtCXZh73locJfgLPVpSzov8fVw5SSnrFM6jkBjLI8AWwWYer%2BNwV4xiBOBTXXMpQX6L%2FQDTbjbVMW0JxROq2F9D53kJtfuXy9%2F%2F44UbC%2FVYx9xk7h2RXQWrvAjR%2F2XTGdu2qnR4hEDOHIrWP%2BelDJfBySYKUQXvtysA9CCoujIP5OCrhCUUDsSMuBLJCp8C3rxrm99lzsIySCCOyFSmQdvIauSWApHuGtVcx2kk1%2BNTvbrE1jX6jOzh3xPYFN%2FAg0FoYueLtkfbIScCzQcnDTD%2BzXbHMEYoO5zmXCag9uuym21FJtdpkTodAV%2F1s5rQ3%2Bb5LrhsPqqoGexMHwg0dj8898tXX5Q8w8beuxAY6pgHejwQmagCfO52XanxTKlxsK4rCdb4rEXQdadcNwpNc%2FHh2wMZKPK7r3487y0v5VWqhK1o1EyUuX1SlG%2FCcHUVdkkms8D%2BHF0QtWFW6ZSNyLOxcFoZk1lfA1ZPQUQ6uUN3KIKuaPYoRDxNbsFS0voLSKyvBK2qTZtaL%2B0cNrQ4XbU0GECBKp4B9%2FCC7rTic5YYwbeg5lvizscJLPHqKD2Y%2BoyXeADp2&X-Amz-Signature=fbf20f409e5bb6ead4668cee9280e4f70f4b7272d1f958a31b3b295ceb6d016f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
