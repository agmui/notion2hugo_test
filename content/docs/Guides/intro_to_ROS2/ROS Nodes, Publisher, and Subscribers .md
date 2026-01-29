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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMBHN5Z%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdOER1F4X1j57bIHZf5fYIf%2FCQgzPfmNoNhNgY9BAquQIgWnZc3K3zoI05Ggl9N6us4AaElw9ZJ5Ua0XgyVkf%2BlJ0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCKvXAUAISiwu09eqyrcA1dfRjae8Aw2JG3TCokDgDE3JA%2B0uydiHzzyG9FWDa3mFoRh7FxbtcIM7qx4NTPEMLi9gGo57nxPSN3RW82UWwekTdLEY5sPXBAG08Uefp1BS5l6o7fYtt5NLQucwQj0UyTQan9P1rVCjuOUz5WxEI2zTvZAIMUP%2FIVpGN4jw0iZXFoLX2ptJSOz3UwCZviGecA2S%2FY%2BGW6Ui066FeiqCJbFbBaBtkQbqt717ym%2Bi9gTH3aiR3lBwJP2Dj5fHjP4wSKgY1FiMvhYq8ip%2FPL%2BFYopo7T2bE%2BWJ3DYvJk7GZPzsTVpw8K096f5Z820is1sg3EWuAuVj12LCmlgi%2B8Yc4hu5y2IR8G8lHrci0WLmd1su8ZgUMiLDOrIHy6r7sieNH4P%2ByqNvjEpO%2B832IaOzjzFCXeGGW2XPRQa%2Fky7ep9O8aef8FyOjTlM7qsdsFzh%2BJqJHg0t0BZRfRcrsdyG%2FVucIJ0WdC02kCEASMpWA%2B7GE%2FyyookivQsesZTTXDrO3bWhthX%2BhITx2QO8BFhTqUSnCaoPiUe0WPXBaliCeeyGQt1lx%2FCz4Zi27VHZ7I4aiKdA87gNyMmNh%2BMBE6D6ONZ0dvbh9y1rXnWWK39uTAr3gwX55MjYzTX%2Bruy2MJH26ssGOqUB6UGULr0ki%2FlSgexPhMFiYqQcn2LGsP0PvCTSaJtnFgPCyeOJ4smAHDfekUqfflane18VNy4jiCAKNXukcdo9sVbo27WvlowzzG9LN0%2F6DF5U99a9Xp7I15VLDT4B4WzIl0DcwTNonaBXPI93AXQGHCP5vLI%2Bfz57E4GT2%2FAG08ZTEknkbcvBNv9C8kRHyVScEYpUlpVxUnOg%2BtzlX2H3gkRxG8CP&X-Amz-Signature=39d3a21acc9a72e094d38a21ff90c8d0a070a77cd5738b25ba491866e390c839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMBHN5Z%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdOER1F4X1j57bIHZf5fYIf%2FCQgzPfmNoNhNgY9BAquQIgWnZc3K3zoI05Ggl9N6us4AaElw9ZJ5Ua0XgyVkf%2BlJ0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCKvXAUAISiwu09eqyrcA1dfRjae8Aw2JG3TCokDgDE3JA%2B0uydiHzzyG9FWDa3mFoRh7FxbtcIM7qx4NTPEMLi9gGo57nxPSN3RW82UWwekTdLEY5sPXBAG08Uefp1BS5l6o7fYtt5NLQucwQj0UyTQan9P1rVCjuOUz5WxEI2zTvZAIMUP%2FIVpGN4jw0iZXFoLX2ptJSOz3UwCZviGecA2S%2FY%2BGW6Ui066FeiqCJbFbBaBtkQbqt717ym%2Bi9gTH3aiR3lBwJP2Dj5fHjP4wSKgY1FiMvhYq8ip%2FPL%2BFYopo7T2bE%2BWJ3DYvJk7GZPzsTVpw8K096f5Z820is1sg3EWuAuVj12LCmlgi%2B8Yc4hu5y2IR8G8lHrci0WLmd1su8ZgUMiLDOrIHy6r7sieNH4P%2ByqNvjEpO%2B832IaOzjzFCXeGGW2XPRQa%2Fky7ep9O8aef8FyOjTlM7qsdsFzh%2BJqJHg0t0BZRfRcrsdyG%2FVucIJ0WdC02kCEASMpWA%2B7GE%2FyyookivQsesZTTXDrO3bWhthX%2BhITx2QO8BFhTqUSnCaoPiUe0WPXBaliCeeyGQt1lx%2FCz4Zi27VHZ7I4aiKdA87gNyMmNh%2BMBE6D6ONZ0dvbh9y1rXnWWK39uTAr3gwX55MjYzTX%2Bruy2MJH26ssGOqUB6UGULr0ki%2FlSgexPhMFiYqQcn2LGsP0PvCTSaJtnFgPCyeOJ4smAHDfekUqfflane18VNy4jiCAKNXukcdo9sVbo27WvlowzzG9LN0%2F6DF5U99a9Xp7I15VLDT4B4WzIl0DcwTNonaBXPI93AXQGHCP5vLI%2Bfz57E4GT2%2FAG08ZTEknkbcvBNv9C8kRHyVScEYpUlpVxUnOg%2BtzlX2H3gkRxG8CP&X-Amz-Signature=cb6367c6d9f58c07ee040931465c0d2e6a3bfeba063b4ff73e082f38103f1631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMBHN5Z%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdOER1F4X1j57bIHZf5fYIf%2FCQgzPfmNoNhNgY9BAquQIgWnZc3K3zoI05Ggl9N6us4AaElw9ZJ5Ua0XgyVkf%2BlJ0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCKvXAUAISiwu09eqyrcA1dfRjae8Aw2JG3TCokDgDE3JA%2B0uydiHzzyG9FWDa3mFoRh7FxbtcIM7qx4NTPEMLi9gGo57nxPSN3RW82UWwekTdLEY5sPXBAG08Uefp1BS5l6o7fYtt5NLQucwQj0UyTQan9P1rVCjuOUz5WxEI2zTvZAIMUP%2FIVpGN4jw0iZXFoLX2ptJSOz3UwCZviGecA2S%2FY%2BGW6Ui066FeiqCJbFbBaBtkQbqt717ym%2Bi9gTH3aiR3lBwJP2Dj5fHjP4wSKgY1FiMvhYq8ip%2FPL%2BFYopo7T2bE%2BWJ3DYvJk7GZPzsTVpw8K096f5Z820is1sg3EWuAuVj12LCmlgi%2B8Yc4hu5y2IR8G8lHrci0WLmd1su8ZgUMiLDOrIHy6r7sieNH4P%2ByqNvjEpO%2B832IaOzjzFCXeGGW2XPRQa%2Fky7ep9O8aef8FyOjTlM7qsdsFzh%2BJqJHg0t0BZRfRcrsdyG%2FVucIJ0WdC02kCEASMpWA%2B7GE%2FyyookivQsesZTTXDrO3bWhthX%2BhITx2QO8BFhTqUSnCaoPiUe0WPXBaliCeeyGQt1lx%2FCz4Zi27VHZ7I4aiKdA87gNyMmNh%2BMBE6D6ONZ0dvbh9y1rXnWWK39uTAr3gwX55MjYzTX%2Bruy2MJH26ssGOqUB6UGULr0ki%2FlSgexPhMFiYqQcn2LGsP0PvCTSaJtnFgPCyeOJ4smAHDfekUqfflane18VNy4jiCAKNXukcdo9sVbo27WvlowzzG9LN0%2F6DF5U99a9Xp7I15VLDT4B4WzIl0DcwTNonaBXPI93AXQGHCP5vLI%2Bfz57E4GT2%2FAG08ZTEknkbcvBNv9C8kRHyVScEYpUlpVxUnOg%2BtzlX2H3gkRxG8CP&X-Amz-Signature=08cf0cad107d17d8fd6a6585511dcd1bdf60870b27c899d8689ffe2e1384ac95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMBHN5Z%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdOER1F4X1j57bIHZf5fYIf%2FCQgzPfmNoNhNgY9BAquQIgWnZc3K3zoI05Ggl9N6us4AaElw9ZJ5Ua0XgyVkf%2BlJ0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCKvXAUAISiwu09eqyrcA1dfRjae8Aw2JG3TCokDgDE3JA%2B0uydiHzzyG9FWDa3mFoRh7FxbtcIM7qx4NTPEMLi9gGo57nxPSN3RW82UWwekTdLEY5sPXBAG08Uefp1BS5l6o7fYtt5NLQucwQj0UyTQan9P1rVCjuOUz5WxEI2zTvZAIMUP%2FIVpGN4jw0iZXFoLX2ptJSOz3UwCZviGecA2S%2FY%2BGW6Ui066FeiqCJbFbBaBtkQbqt717ym%2Bi9gTH3aiR3lBwJP2Dj5fHjP4wSKgY1FiMvhYq8ip%2FPL%2BFYopo7T2bE%2BWJ3DYvJk7GZPzsTVpw8K096f5Z820is1sg3EWuAuVj12LCmlgi%2B8Yc4hu5y2IR8G8lHrci0WLmd1su8ZgUMiLDOrIHy6r7sieNH4P%2ByqNvjEpO%2B832IaOzjzFCXeGGW2XPRQa%2Fky7ep9O8aef8FyOjTlM7qsdsFzh%2BJqJHg0t0BZRfRcrsdyG%2FVucIJ0WdC02kCEASMpWA%2B7GE%2FyyookivQsesZTTXDrO3bWhthX%2BhITx2QO8BFhTqUSnCaoPiUe0WPXBaliCeeyGQt1lx%2FCz4Zi27VHZ7I4aiKdA87gNyMmNh%2BMBE6D6ONZ0dvbh9y1rXnWWK39uTAr3gwX55MjYzTX%2Bruy2MJH26ssGOqUB6UGULr0ki%2FlSgexPhMFiYqQcn2LGsP0PvCTSaJtnFgPCyeOJ4smAHDfekUqfflane18VNy4jiCAKNXukcdo9sVbo27WvlowzzG9LN0%2F6DF5U99a9Xp7I15VLDT4B4WzIl0DcwTNonaBXPI93AXQGHCP5vLI%2Bfz57E4GT2%2FAG08ZTEknkbcvBNv9C8kRHyVScEYpUlpVxUnOg%2BtzlX2H3gkRxG8CP&X-Amz-Signature=b990a6f577bbc504fbd7389575f39a3b6a942234606e365694f5e5b12bd72a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMBHN5Z%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdOER1F4X1j57bIHZf5fYIf%2FCQgzPfmNoNhNgY9BAquQIgWnZc3K3zoI05Ggl9N6us4AaElw9ZJ5Ua0XgyVkf%2BlJ0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCKvXAUAISiwu09eqyrcA1dfRjae8Aw2JG3TCokDgDE3JA%2B0uydiHzzyG9FWDa3mFoRh7FxbtcIM7qx4NTPEMLi9gGo57nxPSN3RW82UWwekTdLEY5sPXBAG08Uefp1BS5l6o7fYtt5NLQucwQj0UyTQan9P1rVCjuOUz5WxEI2zTvZAIMUP%2FIVpGN4jw0iZXFoLX2ptJSOz3UwCZviGecA2S%2FY%2BGW6Ui066FeiqCJbFbBaBtkQbqt717ym%2Bi9gTH3aiR3lBwJP2Dj5fHjP4wSKgY1FiMvhYq8ip%2FPL%2BFYopo7T2bE%2BWJ3DYvJk7GZPzsTVpw8K096f5Z820is1sg3EWuAuVj12LCmlgi%2B8Yc4hu5y2IR8G8lHrci0WLmd1su8ZgUMiLDOrIHy6r7sieNH4P%2ByqNvjEpO%2B832IaOzjzFCXeGGW2XPRQa%2Fky7ep9O8aef8FyOjTlM7qsdsFzh%2BJqJHg0t0BZRfRcrsdyG%2FVucIJ0WdC02kCEASMpWA%2B7GE%2FyyookivQsesZTTXDrO3bWhthX%2BhITx2QO8BFhTqUSnCaoPiUe0WPXBaliCeeyGQt1lx%2FCz4Zi27VHZ7I4aiKdA87gNyMmNh%2BMBE6D6ONZ0dvbh9y1rXnWWK39uTAr3gwX55MjYzTX%2Bruy2MJH26ssGOqUB6UGULr0ki%2FlSgexPhMFiYqQcn2LGsP0PvCTSaJtnFgPCyeOJ4smAHDfekUqfflane18VNy4jiCAKNXukcdo9sVbo27WvlowzzG9LN0%2F6DF5U99a9Xp7I15VLDT4B4WzIl0DcwTNonaBXPI93AXQGHCP5vLI%2Bfz57E4GT2%2FAG08ZTEknkbcvBNv9C8kRHyVScEYpUlpVxUnOg%2BtzlX2H3gkRxG8CP&X-Amz-Signature=9c5cbebca6d014e5a25d58e7bf4b16847f2b40dc4375f5f3ce40d631734b8fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMBHN5Z%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdOER1F4X1j57bIHZf5fYIf%2FCQgzPfmNoNhNgY9BAquQIgWnZc3K3zoI05Ggl9N6us4AaElw9ZJ5Ua0XgyVkf%2BlJ0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCKvXAUAISiwu09eqyrcA1dfRjae8Aw2JG3TCokDgDE3JA%2B0uydiHzzyG9FWDa3mFoRh7FxbtcIM7qx4NTPEMLi9gGo57nxPSN3RW82UWwekTdLEY5sPXBAG08Uefp1BS5l6o7fYtt5NLQucwQj0UyTQan9P1rVCjuOUz5WxEI2zTvZAIMUP%2FIVpGN4jw0iZXFoLX2ptJSOz3UwCZviGecA2S%2FY%2BGW6Ui066FeiqCJbFbBaBtkQbqt717ym%2Bi9gTH3aiR3lBwJP2Dj5fHjP4wSKgY1FiMvhYq8ip%2FPL%2BFYopo7T2bE%2BWJ3DYvJk7GZPzsTVpw8K096f5Z820is1sg3EWuAuVj12LCmlgi%2B8Yc4hu5y2IR8G8lHrci0WLmd1su8ZgUMiLDOrIHy6r7sieNH4P%2ByqNvjEpO%2B832IaOzjzFCXeGGW2XPRQa%2Fky7ep9O8aef8FyOjTlM7qsdsFzh%2BJqJHg0t0BZRfRcrsdyG%2FVucIJ0WdC02kCEASMpWA%2B7GE%2FyyookivQsesZTTXDrO3bWhthX%2BhITx2QO8BFhTqUSnCaoPiUe0WPXBaliCeeyGQt1lx%2FCz4Zi27VHZ7I4aiKdA87gNyMmNh%2BMBE6D6ONZ0dvbh9y1rXnWWK39uTAr3gwX55MjYzTX%2Bruy2MJH26ssGOqUB6UGULr0ki%2FlSgexPhMFiYqQcn2LGsP0PvCTSaJtnFgPCyeOJ4smAHDfekUqfflane18VNy4jiCAKNXukcdo9sVbo27WvlowzzG9LN0%2F6DF5U99a9Xp7I15VLDT4B4WzIl0DcwTNonaBXPI93AXQGHCP5vLI%2Bfz57E4GT2%2FAG08ZTEknkbcvBNv9C8kRHyVScEYpUlpVxUnOg%2BtzlX2H3gkRxG8CP&X-Amz-Signature=b2f580bbd38ba4b3c55dba3fab938aa13de315dc2a8296948bb7251a9c514aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMBHN5Z%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdOER1F4X1j57bIHZf5fYIf%2FCQgzPfmNoNhNgY9BAquQIgWnZc3K3zoI05Ggl9N6us4AaElw9ZJ5Ua0XgyVkf%2BlJ0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCKvXAUAISiwu09eqyrcA1dfRjae8Aw2JG3TCokDgDE3JA%2B0uydiHzzyG9FWDa3mFoRh7FxbtcIM7qx4NTPEMLi9gGo57nxPSN3RW82UWwekTdLEY5sPXBAG08Uefp1BS5l6o7fYtt5NLQucwQj0UyTQan9P1rVCjuOUz5WxEI2zTvZAIMUP%2FIVpGN4jw0iZXFoLX2ptJSOz3UwCZviGecA2S%2FY%2BGW6Ui066FeiqCJbFbBaBtkQbqt717ym%2Bi9gTH3aiR3lBwJP2Dj5fHjP4wSKgY1FiMvhYq8ip%2FPL%2BFYopo7T2bE%2BWJ3DYvJk7GZPzsTVpw8K096f5Z820is1sg3EWuAuVj12LCmlgi%2B8Yc4hu5y2IR8G8lHrci0WLmd1su8ZgUMiLDOrIHy6r7sieNH4P%2ByqNvjEpO%2B832IaOzjzFCXeGGW2XPRQa%2Fky7ep9O8aef8FyOjTlM7qsdsFzh%2BJqJHg0t0BZRfRcrsdyG%2FVucIJ0WdC02kCEASMpWA%2B7GE%2FyyookivQsesZTTXDrO3bWhthX%2BhITx2QO8BFhTqUSnCaoPiUe0WPXBaliCeeyGQt1lx%2FCz4Zi27VHZ7I4aiKdA87gNyMmNh%2BMBE6D6ONZ0dvbh9y1rXnWWK39uTAr3gwX55MjYzTX%2Bruy2MJH26ssGOqUB6UGULr0ki%2FlSgexPhMFiYqQcn2LGsP0PvCTSaJtnFgPCyeOJ4smAHDfekUqfflane18VNy4jiCAKNXukcdo9sVbo27WvlowzzG9LN0%2F6DF5U99a9Xp7I15VLDT4B4WzIl0DcwTNonaBXPI93AXQGHCP5vLI%2Bfz57E4GT2%2FAG08ZTEknkbcvBNv9C8kRHyVScEYpUlpVxUnOg%2BtzlX2H3gkRxG8CP&X-Amz-Signature=71613778c6ea5b5c208854d0cde7b4bdfd555bb0818f09e3aad694d6c8a0ef55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMBHN5Z%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdOER1F4X1j57bIHZf5fYIf%2FCQgzPfmNoNhNgY9BAquQIgWnZc3K3zoI05Ggl9N6us4AaElw9ZJ5Ua0XgyVkf%2BlJ0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCKvXAUAISiwu09eqyrcA1dfRjae8Aw2JG3TCokDgDE3JA%2B0uydiHzzyG9FWDa3mFoRh7FxbtcIM7qx4NTPEMLi9gGo57nxPSN3RW82UWwekTdLEY5sPXBAG08Uefp1BS5l6o7fYtt5NLQucwQj0UyTQan9P1rVCjuOUz5WxEI2zTvZAIMUP%2FIVpGN4jw0iZXFoLX2ptJSOz3UwCZviGecA2S%2FY%2BGW6Ui066FeiqCJbFbBaBtkQbqt717ym%2Bi9gTH3aiR3lBwJP2Dj5fHjP4wSKgY1FiMvhYq8ip%2FPL%2BFYopo7T2bE%2BWJ3DYvJk7GZPzsTVpw8K096f5Z820is1sg3EWuAuVj12LCmlgi%2B8Yc4hu5y2IR8G8lHrci0WLmd1su8ZgUMiLDOrIHy6r7sieNH4P%2ByqNvjEpO%2B832IaOzjzFCXeGGW2XPRQa%2Fky7ep9O8aef8FyOjTlM7qsdsFzh%2BJqJHg0t0BZRfRcrsdyG%2FVucIJ0WdC02kCEASMpWA%2B7GE%2FyyookivQsesZTTXDrO3bWhthX%2BhITx2QO8BFhTqUSnCaoPiUe0WPXBaliCeeyGQt1lx%2FCz4Zi27VHZ7I4aiKdA87gNyMmNh%2BMBE6D6ONZ0dvbh9y1rXnWWK39uTAr3gwX55MjYzTX%2Bruy2MJH26ssGOqUB6UGULr0ki%2FlSgexPhMFiYqQcn2LGsP0PvCTSaJtnFgPCyeOJ4smAHDfekUqfflane18VNy4jiCAKNXukcdo9sVbo27WvlowzzG9LN0%2F6DF5U99a9Xp7I15VLDT4B4WzIl0DcwTNonaBXPI93AXQGHCP5vLI%2Bfz57E4GT2%2FAG08ZTEknkbcvBNv9C8kRHyVScEYpUlpVxUnOg%2BtzlX2H3gkRxG8CP&X-Amz-Signature=6cc3a759a79f76808d85cfbe7d2f76e96cf18deafde2a88ad1c79ce4052d9403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
