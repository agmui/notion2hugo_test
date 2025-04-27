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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZZUYQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvTMPmgzfEXXjG8lKPB6als%2BN4v9g2wO1mnTk51YrxDAiAaZQLkh5o86Nlq0imzAe7P8p1gz6wI62wGw%2BitNEcyryr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2FODEUYumkXKfixXAKtwDp4VsMtLpQEC3RYnXDckR24K2IhgJV7dKpD2yfHrZ%2FvFvOtCbGJjzTWdQxd7FpadeXRJaGnaQMWZQK0g%2FYXL%2F74pT7nIRCbL1lNfXs%2BB5VOWJ%2BiyjLHK72YepRaEwCOtBLkeGX0qBWb58%2Bw86n6TLSrFkDae6IQVb0munR8rVCxSNwqomxa5FviKmRLp6JLEfEyJzDKVAnvZljfYRTgaDNfkoIpe0hmF0tvgfVDTD8tmm3yo4aP32qszHvPAUwkSJP%2B1aSUZfUnb%2BCbK%2BnhCVoxQsNO0vSEqBKAb0mrvKt%2FNTl1wEHezxWtNN3b%2BnFiNE8PyvowGJPa6rTLueu1j10J9pXUtoe9h3P7SLUeYyg%2BbDkpxgAHYP%2FMriTpYyGleDLuhyMTmCPQrhrfzsuewAvRmfv4tecraNd%2FMVyHLIwJgI6jgcDWBQywSVjZLyWVzWpePs26ibPA71Tub89%2Fb54ziHMMyjiQ0Ap8NgtEjahw9NwF7Pl7Hn5oz9OqE3mMrEFmOe8t7DEhIpVPyYmSCccLYVJb8voGcBSFjoYIDYHZXI%2BDtOmIXwM0DWhosQCyqB0LccCXoACKuRefZBkrG3xvPYK2XHmMJ9RzJYH7%2FQqj6oiwUdluXEogOGCPkwrqa5wAY6pgEF%2ByTm2R10bp5K6%2FMkyIxUrh9NUeLFCdgoh3hvpra85bvJFpGUm%2F6y23eAi1IWSOowzztPrF09R3CWSeF%2Fe26YD3md2736dIJmHb114fpTTXMi6DNMKUTQhCNSMAUKA1Kj36ltDNG5X5Dx9kfwZCRi6w02V64B0omj9Stc%2BfM9LRHb4AIWZ6rcygG6ZxVNzlElmL1%2BHXw6g7Uq0%2FS14f%2BAgIhRDmez&X-Amz-Signature=013301af24dfaa42506345eadd04fac066415035497762238d13851bfe6b43af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZZUYQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvTMPmgzfEXXjG8lKPB6als%2BN4v9g2wO1mnTk51YrxDAiAaZQLkh5o86Nlq0imzAe7P8p1gz6wI62wGw%2BitNEcyryr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2FODEUYumkXKfixXAKtwDp4VsMtLpQEC3RYnXDckR24K2IhgJV7dKpD2yfHrZ%2FvFvOtCbGJjzTWdQxd7FpadeXRJaGnaQMWZQK0g%2FYXL%2F74pT7nIRCbL1lNfXs%2BB5VOWJ%2BiyjLHK72YepRaEwCOtBLkeGX0qBWb58%2Bw86n6TLSrFkDae6IQVb0munR8rVCxSNwqomxa5FviKmRLp6JLEfEyJzDKVAnvZljfYRTgaDNfkoIpe0hmF0tvgfVDTD8tmm3yo4aP32qszHvPAUwkSJP%2B1aSUZfUnb%2BCbK%2BnhCVoxQsNO0vSEqBKAb0mrvKt%2FNTl1wEHezxWtNN3b%2BnFiNE8PyvowGJPa6rTLueu1j10J9pXUtoe9h3P7SLUeYyg%2BbDkpxgAHYP%2FMriTpYyGleDLuhyMTmCPQrhrfzsuewAvRmfv4tecraNd%2FMVyHLIwJgI6jgcDWBQywSVjZLyWVzWpePs26ibPA71Tub89%2Fb54ziHMMyjiQ0Ap8NgtEjahw9NwF7Pl7Hn5oz9OqE3mMrEFmOe8t7DEhIpVPyYmSCccLYVJb8voGcBSFjoYIDYHZXI%2BDtOmIXwM0DWhosQCyqB0LccCXoACKuRefZBkrG3xvPYK2XHmMJ9RzJYH7%2FQqj6oiwUdluXEogOGCPkwrqa5wAY6pgEF%2ByTm2R10bp5K6%2FMkyIxUrh9NUeLFCdgoh3hvpra85bvJFpGUm%2F6y23eAi1IWSOowzztPrF09R3CWSeF%2Fe26YD3md2736dIJmHb114fpTTXMi6DNMKUTQhCNSMAUKA1Kj36ltDNG5X5Dx9kfwZCRi6w02V64B0omj9Stc%2BfM9LRHb4AIWZ6rcygG6ZxVNzlElmL1%2BHXw6g7Uq0%2FS14f%2BAgIhRDmez&X-Amz-Signature=202b6cd8be8a7dae039db2a9a9886ab9a5a9da53f7f785e4ada19f4333ae8929&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZZUYQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvTMPmgzfEXXjG8lKPB6als%2BN4v9g2wO1mnTk51YrxDAiAaZQLkh5o86Nlq0imzAe7P8p1gz6wI62wGw%2BitNEcyryr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2FODEUYumkXKfixXAKtwDp4VsMtLpQEC3RYnXDckR24K2IhgJV7dKpD2yfHrZ%2FvFvOtCbGJjzTWdQxd7FpadeXRJaGnaQMWZQK0g%2FYXL%2F74pT7nIRCbL1lNfXs%2BB5VOWJ%2BiyjLHK72YepRaEwCOtBLkeGX0qBWb58%2Bw86n6TLSrFkDae6IQVb0munR8rVCxSNwqomxa5FviKmRLp6JLEfEyJzDKVAnvZljfYRTgaDNfkoIpe0hmF0tvgfVDTD8tmm3yo4aP32qszHvPAUwkSJP%2B1aSUZfUnb%2BCbK%2BnhCVoxQsNO0vSEqBKAb0mrvKt%2FNTl1wEHezxWtNN3b%2BnFiNE8PyvowGJPa6rTLueu1j10J9pXUtoe9h3P7SLUeYyg%2BbDkpxgAHYP%2FMriTpYyGleDLuhyMTmCPQrhrfzsuewAvRmfv4tecraNd%2FMVyHLIwJgI6jgcDWBQywSVjZLyWVzWpePs26ibPA71Tub89%2Fb54ziHMMyjiQ0Ap8NgtEjahw9NwF7Pl7Hn5oz9OqE3mMrEFmOe8t7DEhIpVPyYmSCccLYVJb8voGcBSFjoYIDYHZXI%2BDtOmIXwM0DWhosQCyqB0LccCXoACKuRefZBkrG3xvPYK2XHmMJ9RzJYH7%2FQqj6oiwUdluXEogOGCPkwrqa5wAY6pgEF%2ByTm2R10bp5K6%2FMkyIxUrh9NUeLFCdgoh3hvpra85bvJFpGUm%2F6y23eAi1IWSOowzztPrF09R3CWSeF%2Fe26YD3md2736dIJmHb114fpTTXMi6DNMKUTQhCNSMAUKA1Kj36ltDNG5X5Dx9kfwZCRi6w02V64B0omj9Stc%2BfM9LRHb4AIWZ6rcygG6ZxVNzlElmL1%2BHXw6g7Uq0%2FS14f%2BAgIhRDmez&X-Amz-Signature=cb3b4407fcf320ec42e449efdf06ad6622a856aceaabae5c32995e47b53d7611&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZZUYQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvTMPmgzfEXXjG8lKPB6als%2BN4v9g2wO1mnTk51YrxDAiAaZQLkh5o86Nlq0imzAe7P8p1gz6wI62wGw%2BitNEcyryr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2FODEUYumkXKfixXAKtwDp4VsMtLpQEC3RYnXDckR24K2IhgJV7dKpD2yfHrZ%2FvFvOtCbGJjzTWdQxd7FpadeXRJaGnaQMWZQK0g%2FYXL%2F74pT7nIRCbL1lNfXs%2BB5VOWJ%2BiyjLHK72YepRaEwCOtBLkeGX0qBWb58%2Bw86n6TLSrFkDae6IQVb0munR8rVCxSNwqomxa5FviKmRLp6JLEfEyJzDKVAnvZljfYRTgaDNfkoIpe0hmF0tvgfVDTD8tmm3yo4aP32qszHvPAUwkSJP%2B1aSUZfUnb%2BCbK%2BnhCVoxQsNO0vSEqBKAb0mrvKt%2FNTl1wEHezxWtNN3b%2BnFiNE8PyvowGJPa6rTLueu1j10J9pXUtoe9h3P7SLUeYyg%2BbDkpxgAHYP%2FMriTpYyGleDLuhyMTmCPQrhrfzsuewAvRmfv4tecraNd%2FMVyHLIwJgI6jgcDWBQywSVjZLyWVzWpePs26ibPA71Tub89%2Fb54ziHMMyjiQ0Ap8NgtEjahw9NwF7Pl7Hn5oz9OqE3mMrEFmOe8t7DEhIpVPyYmSCccLYVJb8voGcBSFjoYIDYHZXI%2BDtOmIXwM0DWhosQCyqB0LccCXoACKuRefZBkrG3xvPYK2XHmMJ9RzJYH7%2FQqj6oiwUdluXEogOGCPkwrqa5wAY6pgEF%2ByTm2R10bp5K6%2FMkyIxUrh9NUeLFCdgoh3hvpra85bvJFpGUm%2F6y23eAi1IWSOowzztPrF09R3CWSeF%2Fe26YD3md2736dIJmHb114fpTTXMi6DNMKUTQhCNSMAUKA1Kj36ltDNG5X5Dx9kfwZCRi6w02V64B0omj9Stc%2BfM9LRHb4AIWZ6rcygG6ZxVNzlElmL1%2BHXw6g7Uq0%2FS14f%2BAgIhRDmez&X-Amz-Signature=87363925c216132383655c72d26b8c4e3c2b904e3c23d2baebe9d9035b318f59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZZUYQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvTMPmgzfEXXjG8lKPB6als%2BN4v9g2wO1mnTk51YrxDAiAaZQLkh5o86Nlq0imzAe7P8p1gz6wI62wGw%2BitNEcyryr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2FODEUYumkXKfixXAKtwDp4VsMtLpQEC3RYnXDckR24K2IhgJV7dKpD2yfHrZ%2FvFvOtCbGJjzTWdQxd7FpadeXRJaGnaQMWZQK0g%2FYXL%2F74pT7nIRCbL1lNfXs%2BB5VOWJ%2BiyjLHK72YepRaEwCOtBLkeGX0qBWb58%2Bw86n6TLSrFkDae6IQVb0munR8rVCxSNwqomxa5FviKmRLp6JLEfEyJzDKVAnvZljfYRTgaDNfkoIpe0hmF0tvgfVDTD8tmm3yo4aP32qszHvPAUwkSJP%2B1aSUZfUnb%2BCbK%2BnhCVoxQsNO0vSEqBKAb0mrvKt%2FNTl1wEHezxWtNN3b%2BnFiNE8PyvowGJPa6rTLueu1j10J9pXUtoe9h3P7SLUeYyg%2BbDkpxgAHYP%2FMriTpYyGleDLuhyMTmCPQrhrfzsuewAvRmfv4tecraNd%2FMVyHLIwJgI6jgcDWBQywSVjZLyWVzWpePs26ibPA71Tub89%2Fb54ziHMMyjiQ0Ap8NgtEjahw9NwF7Pl7Hn5oz9OqE3mMrEFmOe8t7DEhIpVPyYmSCccLYVJb8voGcBSFjoYIDYHZXI%2BDtOmIXwM0DWhosQCyqB0LccCXoACKuRefZBkrG3xvPYK2XHmMJ9RzJYH7%2FQqj6oiwUdluXEogOGCPkwrqa5wAY6pgEF%2ByTm2R10bp5K6%2FMkyIxUrh9NUeLFCdgoh3hvpra85bvJFpGUm%2F6y23eAi1IWSOowzztPrF09R3CWSeF%2Fe26YD3md2736dIJmHb114fpTTXMi6DNMKUTQhCNSMAUKA1Kj36ltDNG5X5Dx9kfwZCRi6w02V64B0omj9Stc%2BfM9LRHb4AIWZ6rcygG6ZxVNzlElmL1%2BHXw6g7Uq0%2FS14f%2BAgIhRDmez&X-Amz-Signature=0785d0edb992792fd536bac94b31ea3e5e81b4b6e439b066e94170ae4b5b2378&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZZUYQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvTMPmgzfEXXjG8lKPB6als%2BN4v9g2wO1mnTk51YrxDAiAaZQLkh5o86Nlq0imzAe7P8p1gz6wI62wGw%2BitNEcyryr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2FODEUYumkXKfixXAKtwDp4VsMtLpQEC3RYnXDckR24K2IhgJV7dKpD2yfHrZ%2FvFvOtCbGJjzTWdQxd7FpadeXRJaGnaQMWZQK0g%2FYXL%2F74pT7nIRCbL1lNfXs%2BB5VOWJ%2BiyjLHK72YepRaEwCOtBLkeGX0qBWb58%2Bw86n6TLSrFkDae6IQVb0munR8rVCxSNwqomxa5FviKmRLp6JLEfEyJzDKVAnvZljfYRTgaDNfkoIpe0hmF0tvgfVDTD8tmm3yo4aP32qszHvPAUwkSJP%2B1aSUZfUnb%2BCbK%2BnhCVoxQsNO0vSEqBKAb0mrvKt%2FNTl1wEHezxWtNN3b%2BnFiNE8PyvowGJPa6rTLueu1j10J9pXUtoe9h3P7SLUeYyg%2BbDkpxgAHYP%2FMriTpYyGleDLuhyMTmCPQrhrfzsuewAvRmfv4tecraNd%2FMVyHLIwJgI6jgcDWBQywSVjZLyWVzWpePs26ibPA71Tub89%2Fb54ziHMMyjiQ0Ap8NgtEjahw9NwF7Pl7Hn5oz9OqE3mMrEFmOe8t7DEhIpVPyYmSCccLYVJb8voGcBSFjoYIDYHZXI%2BDtOmIXwM0DWhosQCyqB0LccCXoACKuRefZBkrG3xvPYK2XHmMJ9RzJYH7%2FQqj6oiwUdluXEogOGCPkwrqa5wAY6pgEF%2ByTm2R10bp5K6%2FMkyIxUrh9NUeLFCdgoh3hvpra85bvJFpGUm%2F6y23eAi1IWSOowzztPrF09R3CWSeF%2Fe26YD3md2736dIJmHb114fpTTXMi6DNMKUTQhCNSMAUKA1Kj36ltDNG5X5Dx9kfwZCRi6w02V64B0omj9Stc%2BfM9LRHb4AIWZ6rcygG6ZxVNzlElmL1%2BHXw6g7Uq0%2FS14f%2BAgIhRDmez&X-Amz-Signature=2ee8deb7b05abca352bff010a474fc378cf75bb2173dee80130730bcced61553&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZZUYQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvTMPmgzfEXXjG8lKPB6als%2BN4v9g2wO1mnTk51YrxDAiAaZQLkh5o86Nlq0imzAe7P8p1gz6wI62wGw%2BitNEcyryr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2FODEUYumkXKfixXAKtwDp4VsMtLpQEC3RYnXDckR24K2IhgJV7dKpD2yfHrZ%2FvFvOtCbGJjzTWdQxd7FpadeXRJaGnaQMWZQK0g%2FYXL%2F74pT7nIRCbL1lNfXs%2BB5VOWJ%2BiyjLHK72YepRaEwCOtBLkeGX0qBWb58%2Bw86n6TLSrFkDae6IQVb0munR8rVCxSNwqomxa5FviKmRLp6JLEfEyJzDKVAnvZljfYRTgaDNfkoIpe0hmF0tvgfVDTD8tmm3yo4aP32qszHvPAUwkSJP%2B1aSUZfUnb%2BCbK%2BnhCVoxQsNO0vSEqBKAb0mrvKt%2FNTl1wEHezxWtNN3b%2BnFiNE8PyvowGJPa6rTLueu1j10J9pXUtoe9h3P7SLUeYyg%2BbDkpxgAHYP%2FMriTpYyGleDLuhyMTmCPQrhrfzsuewAvRmfv4tecraNd%2FMVyHLIwJgI6jgcDWBQywSVjZLyWVzWpePs26ibPA71Tub89%2Fb54ziHMMyjiQ0Ap8NgtEjahw9NwF7Pl7Hn5oz9OqE3mMrEFmOe8t7DEhIpVPyYmSCccLYVJb8voGcBSFjoYIDYHZXI%2BDtOmIXwM0DWhosQCyqB0LccCXoACKuRefZBkrG3xvPYK2XHmMJ9RzJYH7%2FQqj6oiwUdluXEogOGCPkwrqa5wAY6pgEF%2ByTm2R10bp5K6%2FMkyIxUrh9NUeLFCdgoh3hvpra85bvJFpGUm%2F6y23eAi1IWSOowzztPrF09R3CWSeF%2Fe26YD3md2736dIJmHb114fpTTXMi6DNMKUTQhCNSMAUKA1Kj36ltDNG5X5Dx9kfwZCRi6w02V64B0omj9Stc%2BfM9LRHb4AIWZ6rcygG6ZxVNzlElmL1%2BHXw6g7Uq0%2FS14f%2BAgIhRDmez&X-Amz-Signature=cbfb4a3187d87d70aa9e0f4ec54f001d88a24d2e528ba7bc15210cb19c4844b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZZUYQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvTMPmgzfEXXjG8lKPB6als%2BN4v9g2wO1mnTk51YrxDAiAaZQLkh5o86Nlq0imzAe7P8p1gz6wI62wGw%2BitNEcyryr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2FODEUYumkXKfixXAKtwDp4VsMtLpQEC3RYnXDckR24K2IhgJV7dKpD2yfHrZ%2FvFvOtCbGJjzTWdQxd7FpadeXRJaGnaQMWZQK0g%2FYXL%2F74pT7nIRCbL1lNfXs%2BB5VOWJ%2BiyjLHK72YepRaEwCOtBLkeGX0qBWb58%2Bw86n6TLSrFkDae6IQVb0munR8rVCxSNwqomxa5FviKmRLp6JLEfEyJzDKVAnvZljfYRTgaDNfkoIpe0hmF0tvgfVDTD8tmm3yo4aP32qszHvPAUwkSJP%2B1aSUZfUnb%2BCbK%2BnhCVoxQsNO0vSEqBKAb0mrvKt%2FNTl1wEHezxWtNN3b%2BnFiNE8PyvowGJPa6rTLueu1j10J9pXUtoe9h3P7SLUeYyg%2BbDkpxgAHYP%2FMriTpYyGleDLuhyMTmCPQrhrfzsuewAvRmfv4tecraNd%2FMVyHLIwJgI6jgcDWBQywSVjZLyWVzWpePs26ibPA71Tub89%2Fb54ziHMMyjiQ0Ap8NgtEjahw9NwF7Pl7Hn5oz9OqE3mMrEFmOe8t7DEhIpVPyYmSCccLYVJb8voGcBSFjoYIDYHZXI%2BDtOmIXwM0DWhosQCyqB0LccCXoACKuRefZBkrG3xvPYK2XHmMJ9RzJYH7%2FQqj6oiwUdluXEogOGCPkwrqa5wAY6pgEF%2ByTm2R10bp5K6%2FMkyIxUrh9NUeLFCdgoh3hvpra85bvJFpGUm%2F6y23eAi1IWSOowzztPrF09R3CWSeF%2Fe26YD3md2736dIJmHb114fpTTXMi6DNMKUTQhCNSMAUKA1Kj36ltDNG5X5Dx9kfwZCRi6w02V64B0omj9Stc%2BfM9LRHb4AIWZ6rcygG6ZxVNzlElmL1%2BHXw6g7Uq0%2FS14f%2BAgIhRDmez&X-Amz-Signature=578a91386d8a01fd5f355f932d411f4212c0ad756f800d0dd51e621276d714c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
