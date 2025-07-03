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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNLBX2K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCxvt3xzmGxIYPgxDRaJendVIyms%2BRx9k45wmuPY3EbOgIhAMFIoGtXBczf9mgVJ%2FH%2BgROJud5RXrw0r9wWbndPrvZ%2BKv8DCBcQABoMNjM3NDIzMTgzODA1Igxxcs2Phcs%2FL70K0bsq3AMqUFWNjNrB%2F5Mwsh0CqJwa%2BUFZ3qujNJ%2Ber%2FPNphNITqXxZJS1pcN0ERXIkDR1u%2FdM15%2F9ihsBVIDst%2F7vXPVPdWrJgTvKgkQfJNMsU9mY5I%2BDHCnXo8FzcpbuyU6%2BaqSPdrxEzk46Jh5zMXSYAWnp%2Fa3IQC7po7mc1RLR%2FRZSc4wpWaUCJqASskOIwu2LXt1tP%2BBcFgRmyQo0nee574oRVmIw6qLlomPR8DWsNO82mxYsn0DZZKjFE4afdtZOAPJLlPnqCefcKIp5%2B%2FBgSUJ4qncE6o4oXIOC9x5%2Fxdei5M5vUQR2G3TAQLcM7bO6nqmhIy2xT8cylN%2B7AOzWiVP3LE1j631nyAie%2BjwctIKBCRV6rClavONM1TPI7AnUwRdZXiki4nhbrlPYuhzVZY06VmIHJs0%2Fn7yxSzjVRic3PyCG9CtB5HHIqMV8G%2B%2FWyjeEcEpcKJZYwWSC3hQHI31PNMGcROg0XuiFTjXcrnx271lJuSR%2FBrFEfp2uCWxp3OyAo7%2FgtkdEysOxbfwopkUbpB7O3eJ650aICYz7vml8nqc5cN1cUTxCokluVc%2F0wVSD6LqvhfmCdMzHk8HokuVA91cC6bYzyvciUolN083aa5DepWCcd9C%2BFdTx9TDxjZrDBjqkAeBXaj2FdwmSU%2FOS4BQvz2csa4OWfsZ7ToM9dUBN8%2F2EbTTFd9weA8kouhhC4dCfILC33PsnywJkHULbpXHs1GVgiKKV4MwzKu2l7ll6pPM2rCtkb7CE9%2F1VxIjcYJw6HZuvheVC%2FVuh2%2BorXtz6F%2F2j1bVd8lN8uiBxrnApL3lCgGQeXKFVT2mLIQd2gpFhZkaFVidrtu%2FyC7ajnfQgD7GfgZ%2Fm&X-Amz-Signature=5a369fa612996ac3f75577e67e3b750347b7884c3750946f1b0da7cd8ec3b6ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNLBX2K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCxvt3xzmGxIYPgxDRaJendVIyms%2BRx9k45wmuPY3EbOgIhAMFIoGtXBczf9mgVJ%2FH%2BgROJud5RXrw0r9wWbndPrvZ%2BKv8DCBcQABoMNjM3NDIzMTgzODA1Igxxcs2Phcs%2FL70K0bsq3AMqUFWNjNrB%2F5Mwsh0CqJwa%2BUFZ3qujNJ%2Ber%2FPNphNITqXxZJS1pcN0ERXIkDR1u%2FdM15%2F9ihsBVIDst%2F7vXPVPdWrJgTvKgkQfJNMsU9mY5I%2BDHCnXo8FzcpbuyU6%2BaqSPdrxEzk46Jh5zMXSYAWnp%2Fa3IQC7po7mc1RLR%2FRZSc4wpWaUCJqASskOIwu2LXt1tP%2BBcFgRmyQo0nee574oRVmIw6qLlomPR8DWsNO82mxYsn0DZZKjFE4afdtZOAPJLlPnqCefcKIp5%2B%2FBgSUJ4qncE6o4oXIOC9x5%2Fxdei5M5vUQR2G3TAQLcM7bO6nqmhIy2xT8cylN%2B7AOzWiVP3LE1j631nyAie%2BjwctIKBCRV6rClavONM1TPI7AnUwRdZXiki4nhbrlPYuhzVZY06VmIHJs0%2Fn7yxSzjVRic3PyCG9CtB5HHIqMV8G%2B%2FWyjeEcEpcKJZYwWSC3hQHI31PNMGcROg0XuiFTjXcrnx271lJuSR%2FBrFEfp2uCWxp3OyAo7%2FgtkdEysOxbfwopkUbpB7O3eJ650aICYz7vml8nqc5cN1cUTxCokluVc%2F0wVSD6LqvhfmCdMzHk8HokuVA91cC6bYzyvciUolN083aa5DepWCcd9C%2BFdTx9TDxjZrDBjqkAeBXaj2FdwmSU%2FOS4BQvz2csa4OWfsZ7ToM9dUBN8%2F2EbTTFd9weA8kouhhC4dCfILC33PsnywJkHULbpXHs1GVgiKKV4MwzKu2l7ll6pPM2rCtkb7CE9%2F1VxIjcYJw6HZuvheVC%2FVuh2%2BorXtz6F%2F2j1bVd8lN8uiBxrnApL3lCgGQeXKFVT2mLIQd2gpFhZkaFVidrtu%2FyC7ajnfQgD7GfgZ%2Fm&X-Amz-Signature=c775a415697ad2f7874db76fe5451aa851e051c0f182553bb87955c96748ca3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNLBX2K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCxvt3xzmGxIYPgxDRaJendVIyms%2BRx9k45wmuPY3EbOgIhAMFIoGtXBczf9mgVJ%2FH%2BgROJud5RXrw0r9wWbndPrvZ%2BKv8DCBcQABoMNjM3NDIzMTgzODA1Igxxcs2Phcs%2FL70K0bsq3AMqUFWNjNrB%2F5Mwsh0CqJwa%2BUFZ3qujNJ%2Ber%2FPNphNITqXxZJS1pcN0ERXIkDR1u%2FdM15%2F9ihsBVIDst%2F7vXPVPdWrJgTvKgkQfJNMsU9mY5I%2BDHCnXo8FzcpbuyU6%2BaqSPdrxEzk46Jh5zMXSYAWnp%2Fa3IQC7po7mc1RLR%2FRZSc4wpWaUCJqASskOIwu2LXt1tP%2BBcFgRmyQo0nee574oRVmIw6qLlomPR8DWsNO82mxYsn0DZZKjFE4afdtZOAPJLlPnqCefcKIp5%2B%2FBgSUJ4qncE6o4oXIOC9x5%2Fxdei5M5vUQR2G3TAQLcM7bO6nqmhIy2xT8cylN%2B7AOzWiVP3LE1j631nyAie%2BjwctIKBCRV6rClavONM1TPI7AnUwRdZXiki4nhbrlPYuhzVZY06VmIHJs0%2Fn7yxSzjVRic3PyCG9CtB5HHIqMV8G%2B%2FWyjeEcEpcKJZYwWSC3hQHI31PNMGcROg0XuiFTjXcrnx271lJuSR%2FBrFEfp2uCWxp3OyAo7%2FgtkdEysOxbfwopkUbpB7O3eJ650aICYz7vml8nqc5cN1cUTxCokluVc%2F0wVSD6LqvhfmCdMzHk8HokuVA91cC6bYzyvciUolN083aa5DepWCcd9C%2BFdTx9TDxjZrDBjqkAeBXaj2FdwmSU%2FOS4BQvz2csa4OWfsZ7ToM9dUBN8%2F2EbTTFd9weA8kouhhC4dCfILC33PsnywJkHULbpXHs1GVgiKKV4MwzKu2l7ll6pPM2rCtkb7CE9%2F1VxIjcYJw6HZuvheVC%2FVuh2%2BorXtz6F%2F2j1bVd8lN8uiBxrnApL3lCgGQeXKFVT2mLIQd2gpFhZkaFVidrtu%2FyC7ajnfQgD7GfgZ%2Fm&X-Amz-Signature=c3a2d7da83f905ac33eb9f4c4c407e0fb7dbdf209ab12725158f394c4bbd73bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNLBX2K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCxvt3xzmGxIYPgxDRaJendVIyms%2BRx9k45wmuPY3EbOgIhAMFIoGtXBczf9mgVJ%2FH%2BgROJud5RXrw0r9wWbndPrvZ%2BKv8DCBcQABoMNjM3NDIzMTgzODA1Igxxcs2Phcs%2FL70K0bsq3AMqUFWNjNrB%2F5Mwsh0CqJwa%2BUFZ3qujNJ%2Ber%2FPNphNITqXxZJS1pcN0ERXIkDR1u%2FdM15%2F9ihsBVIDst%2F7vXPVPdWrJgTvKgkQfJNMsU9mY5I%2BDHCnXo8FzcpbuyU6%2BaqSPdrxEzk46Jh5zMXSYAWnp%2Fa3IQC7po7mc1RLR%2FRZSc4wpWaUCJqASskOIwu2LXt1tP%2BBcFgRmyQo0nee574oRVmIw6qLlomPR8DWsNO82mxYsn0DZZKjFE4afdtZOAPJLlPnqCefcKIp5%2B%2FBgSUJ4qncE6o4oXIOC9x5%2Fxdei5M5vUQR2G3TAQLcM7bO6nqmhIy2xT8cylN%2B7AOzWiVP3LE1j631nyAie%2BjwctIKBCRV6rClavONM1TPI7AnUwRdZXiki4nhbrlPYuhzVZY06VmIHJs0%2Fn7yxSzjVRic3PyCG9CtB5HHIqMV8G%2B%2FWyjeEcEpcKJZYwWSC3hQHI31PNMGcROg0XuiFTjXcrnx271lJuSR%2FBrFEfp2uCWxp3OyAo7%2FgtkdEysOxbfwopkUbpB7O3eJ650aICYz7vml8nqc5cN1cUTxCokluVc%2F0wVSD6LqvhfmCdMzHk8HokuVA91cC6bYzyvciUolN083aa5DepWCcd9C%2BFdTx9TDxjZrDBjqkAeBXaj2FdwmSU%2FOS4BQvz2csa4OWfsZ7ToM9dUBN8%2F2EbTTFd9weA8kouhhC4dCfILC33PsnywJkHULbpXHs1GVgiKKV4MwzKu2l7ll6pPM2rCtkb7CE9%2F1VxIjcYJw6HZuvheVC%2FVuh2%2BorXtz6F%2F2j1bVd8lN8uiBxrnApL3lCgGQeXKFVT2mLIQd2gpFhZkaFVidrtu%2FyC7ajnfQgD7GfgZ%2Fm&X-Amz-Signature=c0d68967a8232c0a054c184731dc027c9eff8c35a9c1cc06d518e72b8ed45111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNLBX2K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCxvt3xzmGxIYPgxDRaJendVIyms%2BRx9k45wmuPY3EbOgIhAMFIoGtXBczf9mgVJ%2FH%2BgROJud5RXrw0r9wWbndPrvZ%2BKv8DCBcQABoMNjM3NDIzMTgzODA1Igxxcs2Phcs%2FL70K0bsq3AMqUFWNjNrB%2F5Mwsh0CqJwa%2BUFZ3qujNJ%2Ber%2FPNphNITqXxZJS1pcN0ERXIkDR1u%2FdM15%2F9ihsBVIDst%2F7vXPVPdWrJgTvKgkQfJNMsU9mY5I%2BDHCnXo8FzcpbuyU6%2BaqSPdrxEzk46Jh5zMXSYAWnp%2Fa3IQC7po7mc1RLR%2FRZSc4wpWaUCJqASskOIwu2LXt1tP%2BBcFgRmyQo0nee574oRVmIw6qLlomPR8DWsNO82mxYsn0DZZKjFE4afdtZOAPJLlPnqCefcKIp5%2B%2FBgSUJ4qncE6o4oXIOC9x5%2Fxdei5M5vUQR2G3TAQLcM7bO6nqmhIy2xT8cylN%2B7AOzWiVP3LE1j631nyAie%2BjwctIKBCRV6rClavONM1TPI7AnUwRdZXiki4nhbrlPYuhzVZY06VmIHJs0%2Fn7yxSzjVRic3PyCG9CtB5HHIqMV8G%2B%2FWyjeEcEpcKJZYwWSC3hQHI31PNMGcROg0XuiFTjXcrnx271lJuSR%2FBrFEfp2uCWxp3OyAo7%2FgtkdEysOxbfwopkUbpB7O3eJ650aICYz7vml8nqc5cN1cUTxCokluVc%2F0wVSD6LqvhfmCdMzHk8HokuVA91cC6bYzyvciUolN083aa5DepWCcd9C%2BFdTx9TDxjZrDBjqkAeBXaj2FdwmSU%2FOS4BQvz2csa4OWfsZ7ToM9dUBN8%2F2EbTTFd9weA8kouhhC4dCfILC33PsnywJkHULbpXHs1GVgiKKV4MwzKu2l7ll6pPM2rCtkb7CE9%2F1VxIjcYJw6HZuvheVC%2FVuh2%2BorXtz6F%2F2j1bVd8lN8uiBxrnApL3lCgGQeXKFVT2mLIQd2gpFhZkaFVidrtu%2FyC7ajnfQgD7GfgZ%2Fm&X-Amz-Signature=6e9318c451e1df2c4cd1be71ae8987f223b2124c92c3c79f83945d34033af21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNLBX2K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCxvt3xzmGxIYPgxDRaJendVIyms%2BRx9k45wmuPY3EbOgIhAMFIoGtXBczf9mgVJ%2FH%2BgROJud5RXrw0r9wWbndPrvZ%2BKv8DCBcQABoMNjM3NDIzMTgzODA1Igxxcs2Phcs%2FL70K0bsq3AMqUFWNjNrB%2F5Mwsh0CqJwa%2BUFZ3qujNJ%2Ber%2FPNphNITqXxZJS1pcN0ERXIkDR1u%2FdM15%2F9ihsBVIDst%2F7vXPVPdWrJgTvKgkQfJNMsU9mY5I%2BDHCnXo8FzcpbuyU6%2BaqSPdrxEzk46Jh5zMXSYAWnp%2Fa3IQC7po7mc1RLR%2FRZSc4wpWaUCJqASskOIwu2LXt1tP%2BBcFgRmyQo0nee574oRVmIw6qLlomPR8DWsNO82mxYsn0DZZKjFE4afdtZOAPJLlPnqCefcKIp5%2B%2FBgSUJ4qncE6o4oXIOC9x5%2Fxdei5M5vUQR2G3TAQLcM7bO6nqmhIy2xT8cylN%2B7AOzWiVP3LE1j631nyAie%2BjwctIKBCRV6rClavONM1TPI7AnUwRdZXiki4nhbrlPYuhzVZY06VmIHJs0%2Fn7yxSzjVRic3PyCG9CtB5HHIqMV8G%2B%2FWyjeEcEpcKJZYwWSC3hQHI31PNMGcROg0XuiFTjXcrnx271lJuSR%2FBrFEfp2uCWxp3OyAo7%2FgtkdEysOxbfwopkUbpB7O3eJ650aICYz7vml8nqc5cN1cUTxCokluVc%2F0wVSD6LqvhfmCdMzHk8HokuVA91cC6bYzyvciUolN083aa5DepWCcd9C%2BFdTx9TDxjZrDBjqkAeBXaj2FdwmSU%2FOS4BQvz2csa4OWfsZ7ToM9dUBN8%2F2EbTTFd9weA8kouhhC4dCfILC33PsnywJkHULbpXHs1GVgiKKV4MwzKu2l7ll6pPM2rCtkb7CE9%2F1VxIjcYJw6HZuvheVC%2FVuh2%2BorXtz6F%2F2j1bVd8lN8uiBxrnApL3lCgGQeXKFVT2mLIQd2gpFhZkaFVidrtu%2FyC7ajnfQgD7GfgZ%2Fm&X-Amz-Signature=c513949e4b63426b405f10775f91f649d0103b54189863e191c278b791515e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNLBX2K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCxvt3xzmGxIYPgxDRaJendVIyms%2BRx9k45wmuPY3EbOgIhAMFIoGtXBczf9mgVJ%2FH%2BgROJud5RXrw0r9wWbndPrvZ%2BKv8DCBcQABoMNjM3NDIzMTgzODA1Igxxcs2Phcs%2FL70K0bsq3AMqUFWNjNrB%2F5Mwsh0CqJwa%2BUFZ3qujNJ%2Ber%2FPNphNITqXxZJS1pcN0ERXIkDR1u%2FdM15%2F9ihsBVIDst%2F7vXPVPdWrJgTvKgkQfJNMsU9mY5I%2BDHCnXo8FzcpbuyU6%2BaqSPdrxEzk46Jh5zMXSYAWnp%2Fa3IQC7po7mc1RLR%2FRZSc4wpWaUCJqASskOIwu2LXt1tP%2BBcFgRmyQo0nee574oRVmIw6qLlomPR8DWsNO82mxYsn0DZZKjFE4afdtZOAPJLlPnqCefcKIp5%2B%2FBgSUJ4qncE6o4oXIOC9x5%2Fxdei5M5vUQR2G3TAQLcM7bO6nqmhIy2xT8cylN%2B7AOzWiVP3LE1j631nyAie%2BjwctIKBCRV6rClavONM1TPI7AnUwRdZXiki4nhbrlPYuhzVZY06VmIHJs0%2Fn7yxSzjVRic3PyCG9CtB5HHIqMV8G%2B%2FWyjeEcEpcKJZYwWSC3hQHI31PNMGcROg0XuiFTjXcrnx271lJuSR%2FBrFEfp2uCWxp3OyAo7%2FgtkdEysOxbfwopkUbpB7O3eJ650aICYz7vml8nqc5cN1cUTxCokluVc%2F0wVSD6LqvhfmCdMzHk8HokuVA91cC6bYzyvciUolN083aa5DepWCcd9C%2BFdTx9TDxjZrDBjqkAeBXaj2FdwmSU%2FOS4BQvz2csa4OWfsZ7ToM9dUBN8%2F2EbTTFd9weA8kouhhC4dCfILC33PsnywJkHULbpXHs1GVgiKKV4MwzKu2l7ll6pPM2rCtkb7CE9%2F1VxIjcYJw6HZuvheVC%2FVuh2%2BorXtz6F%2F2j1bVd8lN8uiBxrnApL3lCgGQeXKFVT2mLIQd2gpFhZkaFVidrtu%2FyC7ajnfQgD7GfgZ%2Fm&X-Amz-Signature=4a506f33e2b8754d35d58a069b3e90955f2085959e31c4cfdb7ebd663a5d2e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNLBX2K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCxvt3xzmGxIYPgxDRaJendVIyms%2BRx9k45wmuPY3EbOgIhAMFIoGtXBczf9mgVJ%2FH%2BgROJud5RXrw0r9wWbndPrvZ%2BKv8DCBcQABoMNjM3NDIzMTgzODA1Igxxcs2Phcs%2FL70K0bsq3AMqUFWNjNrB%2F5Mwsh0CqJwa%2BUFZ3qujNJ%2Ber%2FPNphNITqXxZJS1pcN0ERXIkDR1u%2FdM15%2F9ihsBVIDst%2F7vXPVPdWrJgTvKgkQfJNMsU9mY5I%2BDHCnXo8FzcpbuyU6%2BaqSPdrxEzk46Jh5zMXSYAWnp%2Fa3IQC7po7mc1RLR%2FRZSc4wpWaUCJqASskOIwu2LXt1tP%2BBcFgRmyQo0nee574oRVmIw6qLlomPR8DWsNO82mxYsn0DZZKjFE4afdtZOAPJLlPnqCefcKIp5%2B%2FBgSUJ4qncE6o4oXIOC9x5%2Fxdei5M5vUQR2G3TAQLcM7bO6nqmhIy2xT8cylN%2B7AOzWiVP3LE1j631nyAie%2BjwctIKBCRV6rClavONM1TPI7AnUwRdZXiki4nhbrlPYuhzVZY06VmIHJs0%2Fn7yxSzjVRic3PyCG9CtB5HHIqMV8G%2B%2FWyjeEcEpcKJZYwWSC3hQHI31PNMGcROg0XuiFTjXcrnx271lJuSR%2FBrFEfp2uCWxp3OyAo7%2FgtkdEysOxbfwopkUbpB7O3eJ650aICYz7vml8nqc5cN1cUTxCokluVc%2F0wVSD6LqvhfmCdMzHk8HokuVA91cC6bYzyvciUolN083aa5DepWCcd9C%2BFdTx9TDxjZrDBjqkAeBXaj2FdwmSU%2FOS4BQvz2csa4OWfsZ7ToM9dUBN8%2F2EbTTFd9weA8kouhhC4dCfILC33PsnywJkHULbpXHs1GVgiKKV4MwzKu2l7ll6pPM2rCtkb7CE9%2F1VxIjcYJw6HZuvheVC%2FVuh2%2BorXtz6F%2F2j1bVd8lN8uiBxrnApL3lCgGQeXKFVT2mLIQd2gpFhZkaFVidrtu%2FyC7ajnfQgD7GfgZ%2Fm&X-Amz-Signature=6f9feb2825482bc0e2138cc5169deba45fde25a0666827451e6c0f2f207b3d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
