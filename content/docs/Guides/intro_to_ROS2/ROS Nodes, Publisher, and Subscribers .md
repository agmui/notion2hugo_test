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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYHY2RS%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEk0CwUG1VtDvfvoaq9AoOJ9eR1lAcC6L5gGw52q9gBQIhALUljLVXpD7Hu7iFptqQ5DRxeAf6jfI62VDHzO5wvvVoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTn%2Fh3EYGLH%2B%2BMCRUq3ANeD4uIBR54eKA8m1OGb0iK%2BnnnGEX5IPtvSTe%2Bdt1srf0Ip06zNetyP27AE9ka%2BN9XRPzgm79ybJTvPJNdh0zRdvJ6yumoq3n9sdQ%2FeuOAn00hEKAhxMqn04UWJNxnUEuAuKJgPyNT9e70TxaWqqrhnjYPXPF0Wl73wIfbMLpsbwN3nz6nHRaSbX8HQwMYT8IayrAy1URpKTf2uurRnlxlgWohDvuhmcldd%2FYHR5IBCBjo%2B7Hr1qVQ0%2FbdnR4RAL%2B4eE13RF1q0B1yi%2BtT3eSgU8YcV4e5FRvJWiOQJFJB6Pi9IhXbud3o62A2q13JUNaSgItgosRK3VxGvIHTwZaVJnAMPG88fDhTPNKevvw%2BtR7vTsaWtS1zwmOrqy1YxodqfVR5S0Bba6USnXtaTb%2BAEgImaghbDgCWykzRfKUdmKS%2FsVi%2BeDVxCT0%2BWBIe%2Bei7bEhPfxq83R26RiUJXTL1wL7uwB6J51gg21FjPX387Klslklf%2B0ko1W3eb6FOLEQ6GAUsLyRGlaCM0YiPmtXQ1n%2BGQOhPnhep92EL0NGIUdC24i8Pxq8hrWMVSTdXQgBCYoEUaetpFO6vQ%2Btz3HR3RsHJYQH13mt94SKsaJ6rQWVu1yRACnOg7e0%2BSzCl8p7FBjqkAW%2B4q0er8oyxyeQEKDjdwO0%2F32N5DIf%2F2KQYpkKq9IrEtcQG%2FRzCvQGrJbHmlT8vxVopYI2OmQksh8lql4Mzkgq7ffD3dP8%2BDaHsIfwEOwNKfp51jIrgv4DXsWfhxxl0qQFnwmn6DNl2wnHogjt%2ByVyL%2BGHTywd3uazNDXrVkYEnpbeBSyo0afb7kbF3WmmTh%2FRVUDFwGmhdJROeihzk8PlInD4j&X-Amz-Signature=2cb553c8bce4232faa55743a0b51e8c7aa3a3716d4e2a03df32a5ce51c3150c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYHY2RS%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEk0CwUG1VtDvfvoaq9AoOJ9eR1lAcC6L5gGw52q9gBQIhALUljLVXpD7Hu7iFptqQ5DRxeAf6jfI62VDHzO5wvvVoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTn%2Fh3EYGLH%2B%2BMCRUq3ANeD4uIBR54eKA8m1OGb0iK%2BnnnGEX5IPtvSTe%2Bdt1srf0Ip06zNetyP27AE9ka%2BN9XRPzgm79ybJTvPJNdh0zRdvJ6yumoq3n9sdQ%2FeuOAn00hEKAhxMqn04UWJNxnUEuAuKJgPyNT9e70TxaWqqrhnjYPXPF0Wl73wIfbMLpsbwN3nz6nHRaSbX8HQwMYT8IayrAy1URpKTf2uurRnlxlgWohDvuhmcldd%2FYHR5IBCBjo%2B7Hr1qVQ0%2FbdnR4RAL%2B4eE13RF1q0B1yi%2BtT3eSgU8YcV4e5FRvJWiOQJFJB6Pi9IhXbud3o62A2q13JUNaSgItgosRK3VxGvIHTwZaVJnAMPG88fDhTPNKevvw%2BtR7vTsaWtS1zwmOrqy1YxodqfVR5S0Bba6USnXtaTb%2BAEgImaghbDgCWykzRfKUdmKS%2FsVi%2BeDVxCT0%2BWBIe%2Bei7bEhPfxq83R26RiUJXTL1wL7uwB6J51gg21FjPX387Klslklf%2B0ko1W3eb6FOLEQ6GAUsLyRGlaCM0YiPmtXQ1n%2BGQOhPnhep92EL0NGIUdC24i8Pxq8hrWMVSTdXQgBCYoEUaetpFO6vQ%2Btz3HR3RsHJYQH13mt94SKsaJ6rQWVu1yRACnOg7e0%2BSzCl8p7FBjqkAW%2B4q0er8oyxyeQEKDjdwO0%2F32N5DIf%2F2KQYpkKq9IrEtcQG%2FRzCvQGrJbHmlT8vxVopYI2OmQksh8lql4Mzkgq7ffD3dP8%2BDaHsIfwEOwNKfp51jIrgv4DXsWfhxxl0qQFnwmn6DNl2wnHogjt%2ByVyL%2BGHTywd3uazNDXrVkYEnpbeBSyo0afb7kbF3WmmTh%2FRVUDFwGmhdJROeihzk8PlInD4j&X-Amz-Signature=375517dcef47484d0fb420d45ca6fd7038139e98a13284562a92c91111a8b097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYHY2RS%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEk0CwUG1VtDvfvoaq9AoOJ9eR1lAcC6L5gGw52q9gBQIhALUljLVXpD7Hu7iFptqQ5DRxeAf6jfI62VDHzO5wvvVoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTn%2Fh3EYGLH%2B%2BMCRUq3ANeD4uIBR54eKA8m1OGb0iK%2BnnnGEX5IPtvSTe%2Bdt1srf0Ip06zNetyP27AE9ka%2BN9XRPzgm79ybJTvPJNdh0zRdvJ6yumoq3n9sdQ%2FeuOAn00hEKAhxMqn04UWJNxnUEuAuKJgPyNT9e70TxaWqqrhnjYPXPF0Wl73wIfbMLpsbwN3nz6nHRaSbX8HQwMYT8IayrAy1URpKTf2uurRnlxlgWohDvuhmcldd%2FYHR5IBCBjo%2B7Hr1qVQ0%2FbdnR4RAL%2B4eE13RF1q0B1yi%2BtT3eSgU8YcV4e5FRvJWiOQJFJB6Pi9IhXbud3o62A2q13JUNaSgItgosRK3VxGvIHTwZaVJnAMPG88fDhTPNKevvw%2BtR7vTsaWtS1zwmOrqy1YxodqfVR5S0Bba6USnXtaTb%2BAEgImaghbDgCWykzRfKUdmKS%2FsVi%2BeDVxCT0%2BWBIe%2Bei7bEhPfxq83R26RiUJXTL1wL7uwB6J51gg21FjPX387Klslklf%2B0ko1W3eb6FOLEQ6GAUsLyRGlaCM0YiPmtXQ1n%2BGQOhPnhep92EL0NGIUdC24i8Pxq8hrWMVSTdXQgBCYoEUaetpFO6vQ%2Btz3HR3RsHJYQH13mt94SKsaJ6rQWVu1yRACnOg7e0%2BSzCl8p7FBjqkAW%2B4q0er8oyxyeQEKDjdwO0%2F32N5DIf%2F2KQYpkKq9IrEtcQG%2FRzCvQGrJbHmlT8vxVopYI2OmQksh8lql4Mzkgq7ffD3dP8%2BDaHsIfwEOwNKfp51jIrgv4DXsWfhxxl0qQFnwmn6DNl2wnHogjt%2ByVyL%2BGHTywd3uazNDXrVkYEnpbeBSyo0afb7kbF3WmmTh%2FRVUDFwGmhdJROeihzk8PlInD4j&X-Amz-Signature=f147ddaf711cb8fd343a5d4edd69b41d0ba851645e4f77430dcbd74c2c7ea2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYHY2RS%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEk0CwUG1VtDvfvoaq9AoOJ9eR1lAcC6L5gGw52q9gBQIhALUljLVXpD7Hu7iFptqQ5DRxeAf6jfI62VDHzO5wvvVoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTn%2Fh3EYGLH%2B%2BMCRUq3ANeD4uIBR54eKA8m1OGb0iK%2BnnnGEX5IPtvSTe%2Bdt1srf0Ip06zNetyP27AE9ka%2BN9XRPzgm79ybJTvPJNdh0zRdvJ6yumoq3n9sdQ%2FeuOAn00hEKAhxMqn04UWJNxnUEuAuKJgPyNT9e70TxaWqqrhnjYPXPF0Wl73wIfbMLpsbwN3nz6nHRaSbX8HQwMYT8IayrAy1URpKTf2uurRnlxlgWohDvuhmcldd%2FYHR5IBCBjo%2B7Hr1qVQ0%2FbdnR4RAL%2B4eE13RF1q0B1yi%2BtT3eSgU8YcV4e5FRvJWiOQJFJB6Pi9IhXbud3o62A2q13JUNaSgItgosRK3VxGvIHTwZaVJnAMPG88fDhTPNKevvw%2BtR7vTsaWtS1zwmOrqy1YxodqfVR5S0Bba6USnXtaTb%2BAEgImaghbDgCWykzRfKUdmKS%2FsVi%2BeDVxCT0%2BWBIe%2Bei7bEhPfxq83R26RiUJXTL1wL7uwB6J51gg21FjPX387Klslklf%2B0ko1W3eb6FOLEQ6GAUsLyRGlaCM0YiPmtXQ1n%2BGQOhPnhep92EL0NGIUdC24i8Pxq8hrWMVSTdXQgBCYoEUaetpFO6vQ%2Btz3HR3RsHJYQH13mt94SKsaJ6rQWVu1yRACnOg7e0%2BSzCl8p7FBjqkAW%2B4q0er8oyxyeQEKDjdwO0%2F32N5DIf%2F2KQYpkKq9IrEtcQG%2FRzCvQGrJbHmlT8vxVopYI2OmQksh8lql4Mzkgq7ffD3dP8%2BDaHsIfwEOwNKfp51jIrgv4DXsWfhxxl0qQFnwmn6DNl2wnHogjt%2ByVyL%2BGHTywd3uazNDXrVkYEnpbeBSyo0afb7kbF3WmmTh%2FRVUDFwGmhdJROeihzk8PlInD4j&X-Amz-Signature=86f0b6a23a2232f69baced37cbbfd3f3dd35c574cf83a92ff99d2b2bbcddaf3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYHY2RS%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEk0CwUG1VtDvfvoaq9AoOJ9eR1lAcC6L5gGw52q9gBQIhALUljLVXpD7Hu7iFptqQ5DRxeAf6jfI62VDHzO5wvvVoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTn%2Fh3EYGLH%2B%2BMCRUq3ANeD4uIBR54eKA8m1OGb0iK%2BnnnGEX5IPtvSTe%2Bdt1srf0Ip06zNetyP27AE9ka%2BN9XRPzgm79ybJTvPJNdh0zRdvJ6yumoq3n9sdQ%2FeuOAn00hEKAhxMqn04UWJNxnUEuAuKJgPyNT9e70TxaWqqrhnjYPXPF0Wl73wIfbMLpsbwN3nz6nHRaSbX8HQwMYT8IayrAy1URpKTf2uurRnlxlgWohDvuhmcldd%2FYHR5IBCBjo%2B7Hr1qVQ0%2FbdnR4RAL%2B4eE13RF1q0B1yi%2BtT3eSgU8YcV4e5FRvJWiOQJFJB6Pi9IhXbud3o62A2q13JUNaSgItgosRK3VxGvIHTwZaVJnAMPG88fDhTPNKevvw%2BtR7vTsaWtS1zwmOrqy1YxodqfVR5S0Bba6USnXtaTb%2BAEgImaghbDgCWykzRfKUdmKS%2FsVi%2BeDVxCT0%2BWBIe%2Bei7bEhPfxq83R26RiUJXTL1wL7uwB6J51gg21FjPX387Klslklf%2B0ko1W3eb6FOLEQ6GAUsLyRGlaCM0YiPmtXQ1n%2BGQOhPnhep92EL0NGIUdC24i8Pxq8hrWMVSTdXQgBCYoEUaetpFO6vQ%2Btz3HR3RsHJYQH13mt94SKsaJ6rQWVu1yRACnOg7e0%2BSzCl8p7FBjqkAW%2B4q0er8oyxyeQEKDjdwO0%2F32N5DIf%2F2KQYpkKq9IrEtcQG%2FRzCvQGrJbHmlT8vxVopYI2OmQksh8lql4Mzkgq7ffD3dP8%2BDaHsIfwEOwNKfp51jIrgv4DXsWfhxxl0qQFnwmn6DNl2wnHogjt%2ByVyL%2BGHTywd3uazNDXrVkYEnpbeBSyo0afb7kbF3WmmTh%2FRVUDFwGmhdJROeihzk8PlInD4j&X-Amz-Signature=442770d319022336506f6ebe5661f5dff0d8b59c6e795f82511a9ac9c50a9ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYHY2RS%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEk0CwUG1VtDvfvoaq9AoOJ9eR1lAcC6L5gGw52q9gBQIhALUljLVXpD7Hu7iFptqQ5DRxeAf6jfI62VDHzO5wvvVoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTn%2Fh3EYGLH%2B%2BMCRUq3ANeD4uIBR54eKA8m1OGb0iK%2BnnnGEX5IPtvSTe%2Bdt1srf0Ip06zNetyP27AE9ka%2BN9XRPzgm79ybJTvPJNdh0zRdvJ6yumoq3n9sdQ%2FeuOAn00hEKAhxMqn04UWJNxnUEuAuKJgPyNT9e70TxaWqqrhnjYPXPF0Wl73wIfbMLpsbwN3nz6nHRaSbX8HQwMYT8IayrAy1URpKTf2uurRnlxlgWohDvuhmcldd%2FYHR5IBCBjo%2B7Hr1qVQ0%2FbdnR4RAL%2B4eE13RF1q0B1yi%2BtT3eSgU8YcV4e5FRvJWiOQJFJB6Pi9IhXbud3o62A2q13JUNaSgItgosRK3VxGvIHTwZaVJnAMPG88fDhTPNKevvw%2BtR7vTsaWtS1zwmOrqy1YxodqfVR5S0Bba6USnXtaTb%2BAEgImaghbDgCWykzRfKUdmKS%2FsVi%2BeDVxCT0%2BWBIe%2Bei7bEhPfxq83R26RiUJXTL1wL7uwB6J51gg21FjPX387Klslklf%2B0ko1W3eb6FOLEQ6GAUsLyRGlaCM0YiPmtXQ1n%2BGQOhPnhep92EL0NGIUdC24i8Pxq8hrWMVSTdXQgBCYoEUaetpFO6vQ%2Btz3HR3RsHJYQH13mt94SKsaJ6rQWVu1yRACnOg7e0%2BSzCl8p7FBjqkAW%2B4q0er8oyxyeQEKDjdwO0%2F32N5DIf%2F2KQYpkKq9IrEtcQG%2FRzCvQGrJbHmlT8vxVopYI2OmQksh8lql4Mzkgq7ffD3dP8%2BDaHsIfwEOwNKfp51jIrgv4DXsWfhxxl0qQFnwmn6DNl2wnHogjt%2ByVyL%2BGHTywd3uazNDXrVkYEnpbeBSyo0afb7kbF3WmmTh%2FRVUDFwGmhdJROeihzk8PlInD4j&X-Amz-Signature=71371e7b00eed5a4bf540bb921cba9886ff6359fc6561413bce354f8f5d292a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYHY2RS%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEk0CwUG1VtDvfvoaq9AoOJ9eR1lAcC6L5gGw52q9gBQIhALUljLVXpD7Hu7iFptqQ5DRxeAf6jfI62VDHzO5wvvVoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTn%2Fh3EYGLH%2B%2BMCRUq3ANeD4uIBR54eKA8m1OGb0iK%2BnnnGEX5IPtvSTe%2Bdt1srf0Ip06zNetyP27AE9ka%2BN9XRPzgm79ybJTvPJNdh0zRdvJ6yumoq3n9sdQ%2FeuOAn00hEKAhxMqn04UWJNxnUEuAuKJgPyNT9e70TxaWqqrhnjYPXPF0Wl73wIfbMLpsbwN3nz6nHRaSbX8HQwMYT8IayrAy1URpKTf2uurRnlxlgWohDvuhmcldd%2FYHR5IBCBjo%2B7Hr1qVQ0%2FbdnR4RAL%2B4eE13RF1q0B1yi%2BtT3eSgU8YcV4e5FRvJWiOQJFJB6Pi9IhXbud3o62A2q13JUNaSgItgosRK3VxGvIHTwZaVJnAMPG88fDhTPNKevvw%2BtR7vTsaWtS1zwmOrqy1YxodqfVR5S0Bba6USnXtaTb%2BAEgImaghbDgCWykzRfKUdmKS%2FsVi%2BeDVxCT0%2BWBIe%2Bei7bEhPfxq83R26RiUJXTL1wL7uwB6J51gg21FjPX387Klslklf%2B0ko1W3eb6FOLEQ6GAUsLyRGlaCM0YiPmtXQ1n%2BGQOhPnhep92EL0NGIUdC24i8Pxq8hrWMVSTdXQgBCYoEUaetpFO6vQ%2Btz3HR3RsHJYQH13mt94SKsaJ6rQWVu1yRACnOg7e0%2BSzCl8p7FBjqkAW%2B4q0er8oyxyeQEKDjdwO0%2F32N5DIf%2F2KQYpkKq9IrEtcQG%2FRzCvQGrJbHmlT8vxVopYI2OmQksh8lql4Mzkgq7ffD3dP8%2BDaHsIfwEOwNKfp51jIrgv4DXsWfhxxl0qQFnwmn6DNl2wnHogjt%2ByVyL%2BGHTywd3uazNDXrVkYEnpbeBSyo0afb7kbF3WmmTh%2FRVUDFwGmhdJROeihzk8PlInD4j&X-Amz-Signature=de554a54a83e1aeb51984f7c48961c294ad09b010985f5db2a816718e06d10ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYHY2RS%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEk0CwUG1VtDvfvoaq9AoOJ9eR1lAcC6L5gGw52q9gBQIhALUljLVXpD7Hu7iFptqQ5DRxeAf6jfI62VDHzO5wvvVoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTn%2Fh3EYGLH%2B%2BMCRUq3ANeD4uIBR54eKA8m1OGb0iK%2BnnnGEX5IPtvSTe%2Bdt1srf0Ip06zNetyP27AE9ka%2BN9XRPzgm79ybJTvPJNdh0zRdvJ6yumoq3n9sdQ%2FeuOAn00hEKAhxMqn04UWJNxnUEuAuKJgPyNT9e70TxaWqqrhnjYPXPF0Wl73wIfbMLpsbwN3nz6nHRaSbX8HQwMYT8IayrAy1URpKTf2uurRnlxlgWohDvuhmcldd%2FYHR5IBCBjo%2B7Hr1qVQ0%2FbdnR4RAL%2B4eE13RF1q0B1yi%2BtT3eSgU8YcV4e5FRvJWiOQJFJB6Pi9IhXbud3o62A2q13JUNaSgItgosRK3VxGvIHTwZaVJnAMPG88fDhTPNKevvw%2BtR7vTsaWtS1zwmOrqy1YxodqfVR5S0Bba6USnXtaTb%2BAEgImaghbDgCWykzRfKUdmKS%2FsVi%2BeDVxCT0%2BWBIe%2Bei7bEhPfxq83R26RiUJXTL1wL7uwB6J51gg21FjPX387Klslklf%2B0ko1W3eb6FOLEQ6GAUsLyRGlaCM0YiPmtXQ1n%2BGQOhPnhep92EL0NGIUdC24i8Pxq8hrWMVSTdXQgBCYoEUaetpFO6vQ%2Btz3HR3RsHJYQH13mt94SKsaJ6rQWVu1yRACnOg7e0%2BSzCl8p7FBjqkAW%2B4q0er8oyxyeQEKDjdwO0%2F32N5DIf%2F2KQYpkKq9IrEtcQG%2FRzCvQGrJbHmlT8vxVopYI2OmQksh8lql4Mzkgq7ffD3dP8%2BDaHsIfwEOwNKfp51jIrgv4DXsWfhxxl0qQFnwmn6DNl2wnHogjt%2ByVyL%2BGHTywd3uazNDXrVkYEnpbeBSyo0afb7kbF3WmmTh%2FRVUDFwGmhdJROeihzk8PlInD4j&X-Amz-Signature=3390b93d8e8a42e21e0814d99a10cad20434e2146182d4a19c2f8fe76b349eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
