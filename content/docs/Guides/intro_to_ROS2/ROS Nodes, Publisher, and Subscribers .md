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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRQGYPG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOTdNTXEOtaLNDyQQlSVO5WSCRM9CBaSb2MWgeMCy1oAiEA0K0h3ml%2FYkKa8uU9%2Fq1kv37s%2FqEDu684UYAeFhZHI5Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGDhHxgz%2F0c1Q%2BtgbyrcAyF0M47opq5tknkHfZq4P225Aro1JSNNBap9N3FMsX7UKa1ICnQvphJaQ4rJEIFLSz6F7lJXamsIV2yobwyD8YXJ%2FagiDsIs0j9qhAfNGX0vfyXhd4uawtrxN3PIXpXfS1qu9olqXRQn%2FjV4Rekix7kxsJtwJkpnhs%2BhO04fMFgE84MHnu4A304hfKNHP9ZgKr171VnhUlUfuFB2JXrxm%2FpWrVlqlPXsxXJtPFhnNwUbHU17GMj%2FuC%2F%2F89o%2FpM7HyZrqRyUsmim2Ws22dUkG0dOrBGSJ6U3STb1a6nNtAovyo%2BrY9qG%2F9T5a%2FYRXUQtKGzjxChfCmghK8fbVNoudVxDYRZFbEzUrfpbWQj1UQ0BxnYxQHLZDZU8GwGby0llt7NtP76LXFH6R3Bo4cVhmGnCjKl3duHv2jdg%2FyWXrXxoMVnEjTwZDloxxinLUUQbTjQgnv%2BPN0zJoFbRFq%2BLvigXPtXAGvOjMqjEk1fmjjF148QjkcMOk32M53u7TxCOKLD3Csz4sVOjOTtcDNbgIlg%2BcdVhGtF8koTM4AnHtTG9G1v7%2FJu27ID8hSP7JpuvSvORiyCTDJaaUD%2BffR8axcl74OmFefwh4ymTVRR9%2BRsoNMO%2FRlOY8bD8lxVTxMNaUmr8GOqUB6ZiE3ie1EY9rNAXIQTyq70bUbwDzBb%2BMex22qBiFKJ91WYRsU1SJN%2BBLY7E48HHiQEUWvz%2BeLinNauosZMPnhiQE0OGU8iO7fNKYFmevpWDiV%2F%2FbOSNk4hcs31JK2yS2SBkxPeLsDPTFabA0Qi6pDom1V2Pg0em2uVbbcTLJ5t010iM0O36GBZzn8KlMekVTvVDxfJ9I%2BOKl0sXQALTZM6ORTwbe&X-Amz-Signature=188517754ae16a07105ffcb0261fedc6fbfd551fd3452be4b92da6ec9c4e2931&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRQGYPG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOTdNTXEOtaLNDyQQlSVO5WSCRM9CBaSb2MWgeMCy1oAiEA0K0h3ml%2FYkKa8uU9%2Fq1kv37s%2FqEDu684UYAeFhZHI5Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGDhHxgz%2F0c1Q%2BtgbyrcAyF0M47opq5tknkHfZq4P225Aro1JSNNBap9N3FMsX7UKa1ICnQvphJaQ4rJEIFLSz6F7lJXamsIV2yobwyD8YXJ%2FagiDsIs0j9qhAfNGX0vfyXhd4uawtrxN3PIXpXfS1qu9olqXRQn%2FjV4Rekix7kxsJtwJkpnhs%2BhO04fMFgE84MHnu4A304hfKNHP9ZgKr171VnhUlUfuFB2JXrxm%2FpWrVlqlPXsxXJtPFhnNwUbHU17GMj%2FuC%2F%2F89o%2FpM7HyZrqRyUsmim2Ws22dUkG0dOrBGSJ6U3STb1a6nNtAovyo%2BrY9qG%2F9T5a%2FYRXUQtKGzjxChfCmghK8fbVNoudVxDYRZFbEzUrfpbWQj1UQ0BxnYxQHLZDZU8GwGby0llt7NtP76LXFH6R3Bo4cVhmGnCjKl3duHv2jdg%2FyWXrXxoMVnEjTwZDloxxinLUUQbTjQgnv%2BPN0zJoFbRFq%2BLvigXPtXAGvOjMqjEk1fmjjF148QjkcMOk32M53u7TxCOKLD3Csz4sVOjOTtcDNbgIlg%2BcdVhGtF8koTM4AnHtTG9G1v7%2FJu27ID8hSP7JpuvSvORiyCTDJaaUD%2BffR8axcl74OmFefwh4ymTVRR9%2BRsoNMO%2FRlOY8bD8lxVTxMNaUmr8GOqUB6ZiE3ie1EY9rNAXIQTyq70bUbwDzBb%2BMex22qBiFKJ91WYRsU1SJN%2BBLY7E48HHiQEUWvz%2BeLinNauosZMPnhiQE0OGU8iO7fNKYFmevpWDiV%2F%2FbOSNk4hcs31JK2yS2SBkxPeLsDPTFabA0Qi6pDom1V2Pg0em2uVbbcTLJ5t010iM0O36GBZzn8KlMekVTvVDxfJ9I%2BOKl0sXQALTZM6ORTwbe&X-Amz-Signature=22818f8eb6db77a5c2f0af223e8f59a876ecb76ca0f58bba9562e81eb0477c39&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRQGYPG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOTdNTXEOtaLNDyQQlSVO5WSCRM9CBaSb2MWgeMCy1oAiEA0K0h3ml%2FYkKa8uU9%2Fq1kv37s%2FqEDu684UYAeFhZHI5Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGDhHxgz%2F0c1Q%2BtgbyrcAyF0M47opq5tknkHfZq4P225Aro1JSNNBap9N3FMsX7UKa1ICnQvphJaQ4rJEIFLSz6F7lJXamsIV2yobwyD8YXJ%2FagiDsIs0j9qhAfNGX0vfyXhd4uawtrxN3PIXpXfS1qu9olqXRQn%2FjV4Rekix7kxsJtwJkpnhs%2BhO04fMFgE84MHnu4A304hfKNHP9ZgKr171VnhUlUfuFB2JXrxm%2FpWrVlqlPXsxXJtPFhnNwUbHU17GMj%2FuC%2F%2F89o%2FpM7HyZrqRyUsmim2Ws22dUkG0dOrBGSJ6U3STb1a6nNtAovyo%2BrY9qG%2F9T5a%2FYRXUQtKGzjxChfCmghK8fbVNoudVxDYRZFbEzUrfpbWQj1UQ0BxnYxQHLZDZU8GwGby0llt7NtP76LXFH6R3Bo4cVhmGnCjKl3duHv2jdg%2FyWXrXxoMVnEjTwZDloxxinLUUQbTjQgnv%2BPN0zJoFbRFq%2BLvigXPtXAGvOjMqjEk1fmjjF148QjkcMOk32M53u7TxCOKLD3Csz4sVOjOTtcDNbgIlg%2BcdVhGtF8koTM4AnHtTG9G1v7%2FJu27ID8hSP7JpuvSvORiyCTDJaaUD%2BffR8axcl74OmFefwh4ymTVRR9%2BRsoNMO%2FRlOY8bD8lxVTxMNaUmr8GOqUB6ZiE3ie1EY9rNAXIQTyq70bUbwDzBb%2BMex22qBiFKJ91WYRsU1SJN%2BBLY7E48HHiQEUWvz%2BeLinNauosZMPnhiQE0OGU8iO7fNKYFmevpWDiV%2F%2FbOSNk4hcs31JK2yS2SBkxPeLsDPTFabA0Qi6pDom1V2Pg0em2uVbbcTLJ5t010iM0O36GBZzn8KlMekVTvVDxfJ9I%2BOKl0sXQALTZM6ORTwbe&X-Amz-Signature=0ce37c0bd0c24f199cdb205aa03d417b5a6ab1cea4f5ded9efa52cc7b3c704dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRQGYPG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOTdNTXEOtaLNDyQQlSVO5WSCRM9CBaSb2MWgeMCy1oAiEA0K0h3ml%2FYkKa8uU9%2Fq1kv37s%2FqEDu684UYAeFhZHI5Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGDhHxgz%2F0c1Q%2BtgbyrcAyF0M47opq5tknkHfZq4P225Aro1JSNNBap9N3FMsX7UKa1ICnQvphJaQ4rJEIFLSz6F7lJXamsIV2yobwyD8YXJ%2FagiDsIs0j9qhAfNGX0vfyXhd4uawtrxN3PIXpXfS1qu9olqXRQn%2FjV4Rekix7kxsJtwJkpnhs%2BhO04fMFgE84MHnu4A304hfKNHP9ZgKr171VnhUlUfuFB2JXrxm%2FpWrVlqlPXsxXJtPFhnNwUbHU17GMj%2FuC%2F%2F89o%2FpM7HyZrqRyUsmim2Ws22dUkG0dOrBGSJ6U3STb1a6nNtAovyo%2BrY9qG%2F9T5a%2FYRXUQtKGzjxChfCmghK8fbVNoudVxDYRZFbEzUrfpbWQj1UQ0BxnYxQHLZDZU8GwGby0llt7NtP76LXFH6R3Bo4cVhmGnCjKl3duHv2jdg%2FyWXrXxoMVnEjTwZDloxxinLUUQbTjQgnv%2BPN0zJoFbRFq%2BLvigXPtXAGvOjMqjEk1fmjjF148QjkcMOk32M53u7TxCOKLD3Csz4sVOjOTtcDNbgIlg%2BcdVhGtF8koTM4AnHtTG9G1v7%2FJu27ID8hSP7JpuvSvORiyCTDJaaUD%2BffR8axcl74OmFefwh4ymTVRR9%2BRsoNMO%2FRlOY8bD8lxVTxMNaUmr8GOqUB6ZiE3ie1EY9rNAXIQTyq70bUbwDzBb%2BMex22qBiFKJ91WYRsU1SJN%2BBLY7E48HHiQEUWvz%2BeLinNauosZMPnhiQE0OGU8iO7fNKYFmevpWDiV%2F%2FbOSNk4hcs31JK2yS2SBkxPeLsDPTFabA0Qi6pDom1V2Pg0em2uVbbcTLJ5t010iM0O36GBZzn8KlMekVTvVDxfJ9I%2BOKl0sXQALTZM6ORTwbe&X-Amz-Signature=203e042e7f303996b9fe12f976ed3862471f2361c8670c1548b74e8cc896555e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRQGYPG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOTdNTXEOtaLNDyQQlSVO5WSCRM9CBaSb2MWgeMCy1oAiEA0K0h3ml%2FYkKa8uU9%2Fq1kv37s%2FqEDu684UYAeFhZHI5Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGDhHxgz%2F0c1Q%2BtgbyrcAyF0M47opq5tknkHfZq4P225Aro1JSNNBap9N3FMsX7UKa1ICnQvphJaQ4rJEIFLSz6F7lJXamsIV2yobwyD8YXJ%2FagiDsIs0j9qhAfNGX0vfyXhd4uawtrxN3PIXpXfS1qu9olqXRQn%2FjV4Rekix7kxsJtwJkpnhs%2BhO04fMFgE84MHnu4A304hfKNHP9ZgKr171VnhUlUfuFB2JXrxm%2FpWrVlqlPXsxXJtPFhnNwUbHU17GMj%2FuC%2F%2F89o%2FpM7HyZrqRyUsmim2Ws22dUkG0dOrBGSJ6U3STb1a6nNtAovyo%2BrY9qG%2F9T5a%2FYRXUQtKGzjxChfCmghK8fbVNoudVxDYRZFbEzUrfpbWQj1UQ0BxnYxQHLZDZU8GwGby0llt7NtP76LXFH6R3Bo4cVhmGnCjKl3duHv2jdg%2FyWXrXxoMVnEjTwZDloxxinLUUQbTjQgnv%2BPN0zJoFbRFq%2BLvigXPtXAGvOjMqjEk1fmjjF148QjkcMOk32M53u7TxCOKLD3Csz4sVOjOTtcDNbgIlg%2BcdVhGtF8koTM4AnHtTG9G1v7%2FJu27ID8hSP7JpuvSvORiyCTDJaaUD%2BffR8axcl74OmFefwh4ymTVRR9%2BRsoNMO%2FRlOY8bD8lxVTxMNaUmr8GOqUB6ZiE3ie1EY9rNAXIQTyq70bUbwDzBb%2BMex22qBiFKJ91WYRsU1SJN%2BBLY7E48HHiQEUWvz%2BeLinNauosZMPnhiQE0OGU8iO7fNKYFmevpWDiV%2F%2FbOSNk4hcs31JK2yS2SBkxPeLsDPTFabA0Qi6pDom1V2Pg0em2uVbbcTLJ5t010iM0O36GBZzn8KlMekVTvVDxfJ9I%2BOKl0sXQALTZM6ORTwbe&X-Amz-Signature=0335f0c68edab8b2264a344070cc858a0d98b5ec6988cfa88476e78cccff8142&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRQGYPG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOTdNTXEOtaLNDyQQlSVO5WSCRM9CBaSb2MWgeMCy1oAiEA0K0h3ml%2FYkKa8uU9%2Fq1kv37s%2FqEDu684UYAeFhZHI5Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGDhHxgz%2F0c1Q%2BtgbyrcAyF0M47opq5tknkHfZq4P225Aro1JSNNBap9N3FMsX7UKa1ICnQvphJaQ4rJEIFLSz6F7lJXamsIV2yobwyD8YXJ%2FagiDsIs0j9qhAfNGX0vfyXhd4uawtrxN3PIXpXfS1qu9olqXRQn%2FjV4Rekix7kxsJtwJkpnhs%2BhO04fMFgE84MHnu4A304hfKNHP9ZgKr171VnhUlUfuFB2JXrxm%2FpWrVlqlPXsxXJtPFhnNwUbHU17GMj%2FuC%2F%2F89o%2FpM7HyZrqRyUsmim2Ws22dUkG0dOrBGSJ6U3STb1a6nNtAovyo%2BrY9qG%2F9T5a%2FYRXUQtKGzjxChfCmghK8fbVNoudVxDYRZFbEzUrfpbWQj1UQ0BxnYxQHLZDZU8GwGby0llt7NtP76LXFH6R3Bo4cVhmGnCjKl3duHv2jdg%2FyWXrXxoMVnEjTwZDloxxinLUUQbTjQgnv%2BPN0zJoFbRFq%2BLvigXPtXAGvOjMqjEk1fmjjF148QjkcMOk32M53u7TxCOKLD3Csz4sVOjOTtcDNbgIlg%2BcdVhGtF8koTM4AnHtTG9G1v7%2FJu27ID8hSP7JpuvSvORiyCTDJaaUD%2BffR8axcl74OmFefwh4ymTVRR9%2BRsoNMO%2FRlOY8bD8lxVTxMNaUmr8GOqUB6ZiE3ie1EY9rNAXIQTyq70bUbwDzBb%2BMex22qBiFKJ91WYRsU1SJN%2BBLY7E48HHiQEUWvz%2BeLinNauosZMPnhiQE0OGU8iO7fNKYFmevpWDiV%2F%2FbOSNk4hcs31JK2yS2SBkxPeLsDPTFabA0Qi6pDom1V2Pg0em2uVbbcTLJ5t010iM0O36GBZzn8KlMekVTvVDxfJ9I%2BOKl0sXQALTZM6ORTwbe&X-Amz-Signature=66693fef4c5d2e00eb35a97c73dd3cf376968e2a8011b702c1952079d881f7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRQGYPG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOTdNTXEOtaLNDyQQlSVO5WSCRM9CBaSb2MWgeMCy1oAiEA0K0h3ml%2FYkKa8uU9%2Fq1kv37s%2FqEDu684UYAeFhZHI5Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGDhHxgz%2F0c1Q%2BtgbyrcAyF0M47opq5tknkHfZq4P225Aro1JSNNBap9N3FMsX7UKa1ICnQvphJaQ4rJEIFLSz6F7lJXamsIV2yobwyD8YXJ%2FagiDsIs0j9qhAfNGX0vfyXhd4uawtrxN3PIXpXfS1qu9olqXRQn%2FjV4Rekix7kxsJtwJkpnhs%2BhO04fMFgE84MHnu4A304hfKNHP9ZgKr171VnhUlUfuFB2JXrxm%2FpWrVlqlPXsxXJtPFhnNwUbHU17GMj%2FuC%2F%2F89o%2FpM7HyZrqRyUsmim2Ws22dUkG0dOrBGSJ6U3STb1a6nNtAovyo%2BrY9qG%2F9T5a%2FYRXUQtKGzjxChfCmghK8fbVNoudVxDYRZFbEzUrfpbWQj1UQ0BxnYxQHLZDZU8GwGby0llt7NtP76LXFH6R3Bo4cVhmGnCjKl3duHv2jdg%2FyWXrXxoMVnEjTwZDloxxinLUUQbTjQgnv%2BPN0zJoFbRFq%2BLvigXPtXAGvOjMqjEk1fmjjF148QjkcMOk32M53u7TxCOKLD3Csz4sVOjOTtcDNbgIlg%2BcdVhGtF8koTM4AnHtTG9G1v7%2FJu27ID8hSP7JpuvSvORiyCTDJaaUD%2BffR8axcl74OmFefwh4ymTVRR9%2BRsoNMO%2FRlOY8bD8lxVTxMNaUmr8GOqUB6ZiE3ie1EY9rNAXIQTyq70bUbwDzBb%2BMex22qBiFKJ91WYRsU1SJN%2BBLY7E48HHiQEUWvz%2BeLinNauosZMPnhiQE0OGU8iO7fNKYFmevpWDiV%2F%2FbOSNk4hcs31JK2yS2SBkxPeLsDPTFabA0Qi6pDom1V2Pg0em2uVbbcTLJ5t010iM0O36GBZzn8KlMekVTvVDxfJ9I%2BOKl0sXQALTZM6ORTwbe&X-Amz-Signature=5174b1472914ad2795a9272d5c61c78fb961de6ae6580c9652e12c443ef2a4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRQGYPG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOTdNTXEOtaLNDyQQlSVO5WSCRM9CBaSb2MWgeMCy1oAiEA0K0h3ml%2FYkKa8uU9%2Fq1kv37s%2FqEDu684UYAeFhZHI5Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGDhHxgz%2F0c1Q%2BtgbyrcAyF0M47opq5tknkHfZq4P225Aro1JSNNBap9N3FMsX7UKa1ICnQvphJaQ4rJEIFLSz6F7lJXamsIV2yobwyD8YXJ%2FagiDsIs0j9qhAfNGX0vfyXhd4uawtrxN3PIXpXfS1qu9olqXRQn%2FjV4Rekix7kxsJtwJkpnhs%2BhO04fMFgE84MHnu4A304hfKNHP9ZgKr171VnhUlUfuFB2JXrxm%2FpWrVlqlPXsxXJtPFhnNwUbHU17GMj%2FuC%2F%2F89o%2FpM7HyZrqRyUsmim2Ws22dUkG0dOrBGSJ6U3STb1a6nNtAovyo%2BrY9qG%2F9T5a%2FYRXUQtKGzjxChfCmghK8fbVNoudVxDYRZFbEzUrfpbWQj1UQ0BxnYxQHLZDZU8GwGby0llt7NtP76LXFH6R3Bo4cVhmGnCjKl3duHv2jdg%2FyWXrXxoMVnEjTwZDloxxinLUUQbTjQgnv%2BPN0zJoFbRFq%2BLvigXPtXAGvOjMqjEk1fmjjF148QjkcMOk32M53u7TxCOKLD3Csz4sVOjOTtcDNbgIlg%2BcdVhGtF8koTM4AnHtTG9G1v7%2FJu27ID8hSP7JpuvSvORiyCTDJaaUD%2BffR8axcl74OmFefwh4ymTVRR9%2BRsoNMO%2FRlOY8bD8lxVTxMNaUmr8GOqUB6ZiE3ie1EY9rNAXIQTyq70bUbwDzBb%2BMex22qBiFKJ91WYRsU1SJN%2BBLY7E48HHiQEUWvz%2BeLinNauosZMPnhiQE0OGU8iO7fNKYFmevpWDiV%2F%2FbOSNk4hcs31JK2yS2SBkxPeLsDPTFabA0Qi6pDom1V2Pg0em2uVbbcTLJ5t010iM0O36GBZzn8KlMekVTvVDxfJ9I%2BOKl0sXQALTZM6ORTwbe&X-Amz-Signature=526696a4be847afd5a344d4a8b6c46ec05cf2c6a950c14785fa8d773d2d064ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
