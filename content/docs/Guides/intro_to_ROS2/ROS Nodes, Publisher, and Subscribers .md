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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGWSAMM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDPldCMo%2FyfnJzB%2FyVeZsbRQRA0ydxKZEhsE8hu4EI3yQIgOtM9vUVmpnmEZkNTgYcz57HtL3pigfKGILdlBH7Gzh8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIVaqRkjrPDDxLeT7yrcA5ek6YonRHkSy8lNANRq0d5GWHFckth4%2BDr4Yaf7qrPY%2BfpsfFpLbZ6K7YbiWlsdz34w%2Bry%2BdrEnNwvlRdGBktNbHgxZ2ro4qDHoldTo6tNjjfFkdOHhwDQJYp8R2dFPSW%2BpvP%2BT6Ch0NGsPILLYj%2Fgl7umIFrNj2esFkWAIol0LZsbzkEHP07fyOz9%2BLMW3ecvuqbl1NGcWrzxklScVJumjiuf1NA6QERxKRj6OlN8XI5GSSbD%2F1q9fZKDx%2BNbICS%2FRS4qfQLtqQB35Pimgotq%2FCXG0CPQBb6eRv7HGuzXaPWigG6zGn%2FGKexgh65yPGn7B5ubjJGZ6MrGyfzrANhG1Q4lIdNyK2jQhvz%2B4wZkeusO0kwAMwch53tkT3TUNoa4Z%2BpCJxaj36v37u70BDmpa0ycqbEO1%2B4koKTR9Urks5JA7d7ls%2FJ1NJS1QhFgB483C7BVcCGVRhZ1NEVrSsKz3W1nOWlq0H0nkC4PdcUeJH3p62jqNw0VR2BnP1Lc1xzJgjDSwOsoSYci2qTAUe9%2BKjpFe2%2BkpjY7rn2hsEOB3ieF1VxdlGJitosrTtS5Ffwi0SroPdDSgStA70aAiwMtOpvcW4vu5ogidXM%2BtrMNfTmzhO0lAs1M5KvJDMMffxcEGOqUBXyOyG6bLR95Kyg0FOZ7LNF6GffxsPsGtKJu4PikhayHqdBVrlEx3nTXDBATl1%2BI%2FjVHiIS5tSdMmCLEl2l1rY0o%2FFqEv%2FEgIbbFBL0zrKqNwvhSHgvCUWQS333%2BAY0YU%2BomE8JGFgmZh5%2F1eM%2BqDjaT4TigZ%2F4%2BkOMiWV0t25rcjGokh5b0CLTfiycykZ9kC99aNiIAkIqzfZZQCvMDLVMOgbV3p&X-Amz-Signature=76d33fdfa50087d1106bdb359c61f2047622fd6e0445e3b518606bd14d7e7c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGWSAMM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDPldCMo%2FyfnJzB%2FyVeZsbRQRA0ydxKZEhsE8hu4EI3yQIgOtM9vUVmpnmEZkNTgYcz57HtL3pigfKGILdlBH7Gzh8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIVaqRkjrPDDxLeT7yrcA5ek6YonRHkSy8lNANRq0d5GWHFckth4%2BDr4Yaf7qrPY%2BfpsfFpLbZ6K7YbiWlsdz34w%2Bry%2BdrEnNwvlRdGBktNbHgxZ2ro4qDHoldTo6tNjjfFkdOHhwDQJYp8R2dFPSW%2BpvP%2BT6Ch0NGsPILLYj%2Fgl7umIFrNj2esFkWAIol0LZsbzkEHP07fyOz9%2BLMW3ecvuqbl1NGcWrzxklScVJumjiuf1NA6QERxKRj6OlN8XI5GSSbD%2F1q9fZKDx%2BNbICS%2FRS4qfQLtqQB35Pimgotq%2FCXG0CPQBb6eRv7HGuzXaPWigG6zGn%2FGKexgh65yPGn7B5ubjJGZ6MrGyfzrANhG1Q4lIdNyK2jQhvz%2B4wZkeusO0kwAMwch53tkT3TUNoa4Z%2BpCJxaj36v37u70BDmpa0ycqbEO1%2B4koKTR9Urks5JA7d7ls%2FJ1NJS1QhFgB483C7BVcCGVRhZ1NEVrSsKz3W1nOWlq0H0nkC4PdcUeJH3p62jqNw0VR2BnP1Lc1xzJgjDSwOsoSYci2qTAUe9%2BKjpFe2%2BkpjY7rn2hsEOB3ieF1VxdlGJitosrTtS5Ffwi0SroPdDSgStA70aAiwMtOpvcW4vu5ogidXM%2BtrMNfTmzhO0lAs1M5KvJDMMffxcEGOqUBXyOyG6bLR95Kyg0FOZ7LNF6GffxsPsGtKJu4PikhayHqdBVrlEx3nTXDBATl1%2BI%2FjVHiIS5tSdMmCLEl2l1rY0o%2FFqEv%2FEgIbbFBL0zrKqNwvhSHgvCUWQS333%2BAY0YU%2BomE8JGFgmZh5%2F1eM%2BqDjaT4TigZ%2F4%2BkOMiWV0t25rcjGokh5b0CLTfiycykZ9kC99aNiIAkIqzfZZQCvMDLVMOgbV3p&X-Amz-Signature=869ba92baa77e096d4be79315d11f3d84eaa8fef2be5cd038c93b8d10df8b49b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGWSAMM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDPldCMo%2FyfnJzB%2FyVeZsbRQRA0ydxKZEhsE8hu4EI3yQIgOtM9vUVmpnmEZkNTgYcz57HtL3pigfKGILdlBH7Gzh8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIVaqRkjrPDDxLeT7yrcA5ek6YonRHkSy8lNANRq0d5GWHFckth4%2BDr4Yaf7qrPY%2BfpsfFpLbZ6K7YbiWlsdz34w%2Bry%2BdrEnNwvlRdGBktNbHgxZ2ro4qDHoldTo6tNjjfFkdOHhwDQJYp8R2dFPSW%2BpvP%2BT6Ch0NGsPILLYj%2Fgl7umIFrNj2esFkWAIol0LZsbzkEHP07fyOz9%2BLMW3ecvuqbl1NGcWrzxklScVJumjiuf1NA6QERxKRj6OlN8XI5GSSbD%2F1q9fZKDx%2BNbICS%2FRS4qfQLtqQB35Pimgotq%2FCXG0CPQBb6eRv7HGuzXaPWigG6zGn%2FGKexgh65yPGn7B5ubjJGZ6MrGyfzrANhG1Q4lIdNyK2jQhvz%2B4wZkeusO0kwAMwch53tkT3TUNoa4Z%2BpCJxaj36v37u70BDmpa0ycqbEO1%2B4koKTR9Urks5JA7d7ls%2FJ1NJS1QhFgB483C7BVcCGVRhZ1NEVrSsKz3W1nOWlq0H0nkC4PdcUeJH3p62jqNw0VR2BnP1Lc1xzJgjDSwOsoSYci2qTAUe9%2BKjpFe2%2BkpjY7rn2hsEOB3ieF1VxdlGJitosrTtS5Ffwi0SroPdDSgStA70aAiwMtOpvcW4vu5ogidXM%2BtrMNfTmzhO0lAs1M5KvJDMMffxcEGOqUBXyOyG6bLR95Kyg0FOZ7LNF6GffxsPsGtKJu4PikhayHqdBVrlEx3nTXDBATl1%2BI%2FjVHiIS5tSdMmCLEl2l1rY0o%2FFqEv%2FEgIbbFBL0zrKqNwvhSHgvCUWQS333%2BAY0YU%2BomE8JGFgmZh5%2F1eM%2BqDjaT4TigZ%2F4%2BkOMiWV0t25rcjGokh5b0CLTfiycykZ9kC99aNiIAkIqzfZZQCvMDLVMOgbV3p&X-Amz-Signature=a38fa6f297b385b7e4a374d2ac93bed51c275e4871a03ccf6d5566df40f6a02f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGWSAMM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDPldCMo%2FyfnJzB%2FyVeZsbRQRA0ydxKZEhsE8hu4EI3yQIgOtM9vUVmpnmEZkNTgYcz57HtL3pigfKGILdlBH7Gzh8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIVaqRkjrPDDxLeT7yrcA5ek6YonRHkSy8lNANRq0d5GWHFckth4%2BDr4Yaf7qrPY%2BfpsfFpLbZ6K7YbiWlsdz34w%2Bry%2BdrEnNwvlRdGBktNbHgxZ2ro4qDHoldTo6tNjjfFkdOHhwDQJYp8R2dFPSW%2BpvP%2BT6Ch0NGsPILLYj%2Fgl7umIFrNj2esFkWAIol0LZsbzkEHP07fyOz9%2BLMW3ecvuqbl1NGcWrzxklScVJumjiuf1NA6QERxKRj6OlN8XI5GSSbD%2F1q9fZKDx%2BNbICS%2FRS4qfQLtqQB35Pimgotq%2FCXG0CPQBb6eRv7HGuzXaPWigG6zGn%2FGKexgh65yPGn7B5ubjJGZ6MrGyfzrANhG1Q4lIdNyK2jQhvz%2B4wZkeusO0kwAMwch53tkT3TUNoa4Z%2BpCJxaj36v37u70BDmpa0ycqbEO1%2B4koKTR9Urks5JA7d7ls%2FJ1NJS1QhFgB483C7BVcCGVRhZ1NEVrSsKz3W1nOWlq0H0nkC4PdcUeJH3p62jqNw0VR2BnP1Lc1xzJgjDSwOsoSYci2qTAUe9%2BKjpFe2%2BkpjY7rn2hsEOB3ieF1VxdlGJitosrTtS5Ffwi0SroPdDSgStA70aAiwMtOpvcW4vu5ogidXM%2BtrMNfTmzhO0lAs1M5KvJDMMffxcEGOqUBXyOyG6bLR95Kyg0FOZ7LNF6GffxsPsGtKJu4PikhayHqdBVrlEx3nTXDBATl1%2BI%2FjVHiIS5tSdMmCLEl2l1rY0o%2FFqEv%2FEgIbbFBL0zrKqNwvhSHgvCUWQS333%2BAY0YU%2BomE8JGFgmZh5%2F1eM%2BqDjaT4TigZ%2F4%2BkOMiWV0t25rcjGokh5b0CLTfiycykZ9kC99aNiIAkIqzfZZQCvMDLVMOgbV3p&X-Amz-Signature=edf4f87c6312fd399a5895ddb0c88ea2940b0725710b56fa3f926505e4a709ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGWSAMM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDPldCMo%2FyfnJzB%2FyVeZsbRQRA0ydxKZEhsE8hu4EI3yQIgOtM9vUVmpnmEZkNTgYcz57HtL3pigfKGILdlBH7Gzh8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIVaqRkjrPDDxLeT7yrcA5ek6YonRHkSy8lNANRq0d5GWHFckth4%2BDr4Yaf7qrPY%2BfpsfFpLbZ6K7YbiWlsdz34w%2Bry%2BdrEnNwvlRdGBktNbHgxZ2ro4qDHoldTo6tNjjfFkdOHhwDQJYp8R2dFPSW%2BpvP%2BT6Ch0NGsPILLYj%2Fgl7umIFrNj2esFkWAIol0LZsbzkEHP07fyOz9%2BLMW3ecvuqbl1NGcWrzxklScVJumjiuf1NA6QERxKRj6OlN8XI5GSSbD%2F1q9fZKDx%2BNbICS%2FRS4qfQLtqQB35Pimgotq%2FCXG0CPQBb6eRv7HGuzXaPWigG6zGn%2FGKexgh65yPGn7B5ubjJGZ6MrGyfzrANhG1Q4lIdNyK2jQhvz%2B4wZkeusO0kwAMwch53tkT3TUNoa4Z%2BpCJxaj36v37u70BDmpa0ycqbEO1%2B4koKTR9Urks5JA7d7ls%2FJ1NJS1QhFgB483C7BVcCGVRhZ1NEVrSsKz3W1nOWlq0H0nkC4PdcUeJH3p62jqNw0VR2BnP1Lc1xzJgjDSwOsoSYci2qTAUe9%2BKjpFe2%2BkpjY7rn2hsEOB3ieF1VxdlGJitosrTtS5Ffwi0SroPdDSgStA70aAiwMtOpvcW4vu5ogidXM%2BtrMNfTmzhO0lAs1M5KvJDMMffxcEGOqUBXyOyG6bLR95Kyg0FOZ7LNF6GffxsPsGtKJu4PikhayHqdBVrlEx3nTXDBATl1%2BI%2FjVHiIS5tSdMmCLEl2l1rY0o%2FFqEv%2FEgIbbFBL0zrKqNwvhSHgvCUWQS333%2BAY0YU%2BomE8JGFgmZh5%2F1eM%2BqDjaT4TigZ%2F4%2BkOMiWV0t25rcjGokh5b0CLTfiycykZ9kC99aNiIAkIqzfZZQCvMDLVMOgbV3p&X-Amz-Signature=9514f6d957a91ea764d6a5ab1cded4d81f050366f514520545ca4b5931da24fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGWSAMM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDPldCMo%2FyfnJzB%2FyVeZsbRQRA0ydxKZEhsE8hu4EI3yQIgOtM9vUVmpnmEZkNTgYcz57HtL3pigfKGILdlBH7Gzh8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIVaqRkjrPDDxLeT7yrcA5ek6YonRHkSy8lNANRq0d5GWHFckth4%2BDr4Yaf7qrPY%2BfpsfFpLbZ6K7YbiWlsdz34w%2Bry%2BdrEnNwvlRdGBktNbHgxZ2ro4qDHoldTo6tNjjfFkdOHhwDQJYp8R2dFPSW%2BpvP%2BT6Ch0NGsPILLYj%2Fgl7umIFrNj2esFkWAIol0LZsbzkEHP07fyOz9%2BLMW3ecvuqbl1NGcWrzxklScVJumjiuf1NA6QERxKRj6OlN8XI5GSSbD%2F1q9fZKDx%2BNbICS%2FRS4qfQLtqQB35Pimgotq%2FCXG0CPQBb6eRv7HGuzXaPWigG6zGn%2FGKexgh65yPGn7B5ubjJGZ6MrGyfzrANhG1Q4lIdNyK2jQhvz%2B4wZkeusO0kwAMwch53tkT3TUNoa4Z%2BpCJxaj36v37u70BDmpa0ycqbEO1%2B4koKTR9Urks5JA7d7ls%2FJ1NJS1QhFgB483C7BVcCGVRhZ1NEVrSsKz3W1nOWlq0H0nkC4PdcUeJH3p62jqNw0VR2BnP1Lc1xzJgjDSwOsoSYci2qTAUe9%2BKjpFe2%2BkpjY7rn2hsEOB3ieF1VxdlGJitosrTtS5Ffwi0SroPdDSgStA70aAiwMtOpvcW4vu5ogidXM%2BtrMNfTmzhO0lAs1M5KvJDMMffxcEGOqUBXyOyG6bLR95Kyg0FOZ7LNF6GffxsPsGtKJu4PikhayHqdBVrlEx3nTXDBATl1%2BI%2FjVHiIS5tSdMmCLEl2l1rY0o%2FFqEv%2FEgIbbFBL0zrKqNwvhSHgvCUWQS333%2BAY0YU%2BomE8JGFgmZh5%2F1eM%2BqDjaT4TigZ%2F4%2BkOMiWV0t25rcjGokh5b0CLTfiycykZ9kC99aNiIAkIqzfZZQCvMDLVMOgbV3p&X-Amz-Signature=3053d6bbd00d12e9603917010fb79433703c9ef8b95900bdba617e7e6307ff72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGWSAMM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDPldCMo%2FyfnJzB%2FyVeZsbRQRA0ydxKZEhsE8hu4EI3yQIgOtM9vUVmpnmEZkNTgYcz57HtL3pigfKGILdlBH7Gzh8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIVaqRkjrPDDxLeT7yrcA5ek6YonRHkSy8lNANRq0d5GWHFckth4%2BDr4Yaf7qrPY%2BfpsfFpLbZ6K7YbiWlsdz34w%2Bry%2BdrEnNwvlRdGBktNbHgxZ2ro4qDHoldTo6tNjjfFkdOHhwDQJYp8R2dFPSW%2BpvP%2BT6Ch0NGsPILLYj%2Fgl7umIFrNj2esFkWAIol0LZsbzkEHP07fyOz9%2BLMW3ecvuqbl1NGcWrzxklScVJumjiuf1NA6QERxKRj6OlN8XI5GSSbD%2F1q9fZKDx%2BNbICS%2FRS4qfQLtqQB35Pimgotq%2FCXG0CPQBb6eRv7HGuzXaPWigG6zGn%2FGKexgh65yPGn7B5ubjJGZ6MrGyfzrANhG1Q4lIdNyK2jQhvz%2B4wZkeusO0kwAMwch53tkT3TUNoa4Z%2BpCJxaj36v37u70BDmpa0ycqbEO1%2B4koKTR9Urks5JA7d7ls%2FJ1NJS1QhFgB483C7BVcCGVRhZ1NEVrSsKz3W1nOWlq0H0nkC4PdcUeJH3p62jqNw0VR2BnP1Lc1xzJgjDSwOsoSYci2qTAUe9%2BKjpFe2%2BkpjY7rn2hsEOB3ieF1VxdlGJitosrTtS5Ffwi0SroPdDSgStA70aAiwMtOpvcW4vu5ogidXM%2BtrMNfTmzhO0lAs1M5KvJDMMffxcEGOqUBXyOyG6bLR95Kyg0FOZ7LNF6GffxsPsGtKJu4PikhayHqdBVrlEx3nTXDBATl1%2BI%2FjVHiIS5tSdMmCLEl2l1rY0o%2FFqEv%2FEgIbbFBL0zrKqNwvhSHgvCUWQS333%2BAY0YU%2BomE8JGFgmZh5%2F1eM%2BqDjaT4TigZ%2F4%2BkOMiWV0t25rcjGokh5b0CLTfiycykZ9kC99aNiIAkIqzfZZQCvMDLVMOgbV3p&X-Amz-Signature=3ae09cf792c7a166326a34851ea1bb5ebe8c6a7b70e7e7bdfcb61d0da88bc7a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGWSAMM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDPldCMo%2FyfnJzB%2FyVeZsbRQRA0ydxKZEhsE8hu4EI3yQIgOtM9vUVmpnmEZkNTgYcz57HtL3pigfKGILdlBH7Gzh8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIVaqRkjrPDDxLeT7yrcA5ek6YonRHkSy8lNANRq0d5GWHFckth4%2BDr4Yaf7qrPY%2BfpsfFpLbZ6K7YbiWlsdz34w%2Bry%2BdrEnNwvlRdGBktNbHgxZ2ro4qDHoldTo6tNjjfFkdOHhwDQJYp8R2dFPSW%2BpvP%2BT6Ch0NGsPILLYj%2Fgl7umIFrNj2esFkWAIol0LZsbzkEHP07fyOz9%2BLMW3ecvuqbl1NGcWrzxklScVJumjiuf1NA6QERxKRj6OlN8XI5GSSbD%2F1q9fZKDx%2BNbICS%2FRS4qfQLtqQB35Pimgotq%2FCXG0CPQBb6eRv7HGuzXaPWigG6zGn%2FGKexgh65yPGn7B5ubjJGZ6MrGyfzrANhG1Q4lIdNyK2jQhvz%2B4wZkeusO0kwAMwch53tkT3TUNoa4Z%2BpCJxaj36v37u70BDmpa0ycqbEO1%2B4koKTR9Urks5JA7d7ls%2FJ1NJS1QhFgB483C7BVcCGVRhZ1NEVrSsKz3W1nOWlq0H0nkC4PdcUeJH3p62jqNw0VR2BnP1Lc1xzJgjDSwOsoSYci2qTAUe9%2BKjpFe2%2BkpjY7rn2hsEOB3ieF1VxdlGJitosrTtS5Ffwi0SroPdDSgStA70aAiwMtOpvcW4vu5ogidXM%2BtrMNfTmzhO0lAs1M5KvJDMMffxcEGOqUBXyOyG6bLR95Kyg0FOZ7LNF6GffxsPsGtKJu4PikhayHqdBVrlEx3nTXDBATl1%2BI%2FjVHiIS5tSdMmCLEl2l1rY0o%2FFqEv%2FEgIbbFBL0zrKqNwvhSHgvCUWQS333%2BAY0YU%2BomE8JGFgmZh5%2F1eM%2BqDjaT4TigZ%2F4%2BkOMiWV0t25rcjGokh5b0CLTfiycykZ9kC99aNiIAkIqzfZZQCvMDLVMOgbV3p&X-Amz-Signature=946c40d628868dd7c34ca52a65d86fa9a60cdd2584bf71fbdda85d4526bcd529&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
