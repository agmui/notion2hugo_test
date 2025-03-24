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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWASD4C6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUODS3YXLFUpw0D48vCjwB9Px%2FsRKbY6zH1M%2BuH7MPgIgNFURYocNo%2F%2F8QL6ty65U8fSqbNrPZVvkT2N0AWQw4kUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIS8oICDlHCx%2Fm7gircA3fs44j2GNZbFK0zGfjJSMKpYM9YeXGqW7dvgPJ9RwPcf9eV4DG%2FSZWFC6m5B%2BkHUmmn9N1H4yVDxlvzsCMkBeAkuNU4vpdSPTX4u34LcYRC6w%2Bq2%2F38woS3J0PtPdGAR2nxactwgQVNFp9UulSuPnJIYYDTwZ3sH%2FwgVQJJqENWx5zQ8A%2B1ikRv4FOzUgC81De9mjuoGcx9%2B57KxIrLOWRJDunsYUsnGNirF5gwP2Xp2suQ1udvBhuI%2Bq7lk5g2mw3qmKloevBAfpj95ztxiobgstkEwjWXew3IS0%2FAMwwpIeBrr6nr%2Bj3PR7I0K4aIjRo0BRnuW0koZms%2F4sP%2BY5XRmPrkbEtNebJNHmoPzfAy9VaYqe2K1AyvmGMo7ag1QjTjtqTA6Rx3cRafKlIt0mbPge2uXnehRx508bYQq%2FEJCtAXDze43sJhl2RqJDemQDX5Zi%2FcyIEZab1qxGi9SJUVhH%2Fk3ZGg3gqICPe6AMygWkq54H25ZFcT8vkFDGrC33APYN1tJd59MjRQ7npctyP26j5xO%2BgKQQ4J9EQiLHgrpo0rgSpYi%2BJKpsrLgzwvfnGNOP9YvMDBDjDSj33tRe8T%2BGrZQjBE%2FOzrmnsp7YLu9LWKdEVJJX8rgCw2MK%2B%2Fhb8GOqUBtdkvYyBnSc%2B2jfRcwaS81y8eq7v%2BYn86t9bCaLLKMtQIr%2FWTAXZZGXfQIb0naO0AAkQ4tW2uFIq5tJ4DzgVOCCBtad5g7eJ%2FBRsMJSMBhUiSmRXaAsaSE4fGiYeHcpzhk8rSTuNLMIlX7Qn5iLCbeoblEYciV1six7g1cHV4A40IAIbDfORy0zLsgxAwPuFSdQbL8kE6oaOHClIXCNbb8BHvnaNI&X-Amz-Signature=8e448b96772ae8172784f59e41bfe998c0c1c79dc24bede0053418581f5efdb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWASD4C6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUODS3YXLFUpw0D48vCjwB9Px%2FsRKbY6zH1M%2BuH7MPgIgNFURYocNo%2F%2F8QL6ty65U8fSqbNrPZVvkT2N0AWQw4kUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIS8oICDlHCx%2Fm7gircA3fs44j2GNZbFK0zGfjJSMKpYM9YeXGqW7dvgPJ9RwPcf9eV4DG%2FSZWFC6m5B%2BkHUmmn9N1H4yVDxlvzsCMkBeAkuNU4vpdSPTX4u34LcYRC6w%2Bq2%2F38woS3J0PtPdGAR2nxactwgQVNFp9UulSuPnJIYYDTwZ3sH%2FwgVQJJqENWx5zQ8A%2B1ikRv4FOzUgC81De9mjuoGcx9%2B57KxIrLOWRJDunsYUsnGNirF5gwP2Xp2suQ1udvBhuI%2Bq7lk5g2mw3qmKloevBAfpj95ztxiobgstkEwjWXew3IS0%2FAMwwpIeBrr6nr%2Bj3PR7I0K4aIjRo0BRnuW0koZms%2F4sP%2BY5XRmPrkbEtNebJNHmoPzfAy9VaYqe2K1AyvmGMo7ag1QjTjtqTA6Rx3cRafKlIt0mbPge2uXnehRx508bYQq%2FEJCtAXDze43sJhl2RqJDemQDX5Zi%2FcyIEZab1qxGi9SJUVhH%2Fk3ZGg3gqICPe6AMygWkq54H25ZFcT8vkFDGrC33APYN1tJd59MjRQ7npctyP26j5xO%2BgKQQ4J9EQiLHgrpo0rgSpYi%2BJKpsrLgzwvfnGNOP9YvMDBDjDSj33tRe8T%2BGrZQjBE%2FOzrmnsp7YLu9LWKdEVJJX8rgCw2MK%2B%2Fhb8GOqUBtdkvYyBnSc%2B2jfRcwaS81y8eq7v%2BYn86t9bCaLLKMtQIr%2FWTAXZZGXfQIb0naO0AAkQ4tW2uFIq5tJ4DzgVOCCBtad5g7eJ%2FBRsMJSMBhUiSmRXaAsaSE4fGiYeHcpzhk8rSTuNLMIlX7Qn5iLCbeoblEYciV1six7g1cHV4A40IAIbDfORy0zLsgxAwPuFSdQbL8kE6oaOHClIXCNbb8BHvnaNI&X-Amz-Signature=fdc0da24fc25e9d145634f96d46f7e6ed8008f1b0c14e5ece35328ac28ac9402&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWASD4C6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUODS3YXLFUpw0D48vCjwB9Px%2FsRKbY6zH1M%2BuH7MPgIgNFURYocNo%2F%2F8QL6ty65U8fSqbNrPZVvkT2N0AWQw4kUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIS8oICDlHCx%2Fm7gircA3fs44j2GNZbFK0zGfjJSMKpYM9YeXGqW7dvgPJ9RwPcf9eV4DG%2FSZWFC6m5B%2BkHUmmn9N1H4yVDxlvzsCMkBeAkuNU4vpdSPTX4u34LcYRC6w%2Bq2%2F38woS3J0PtPdGAR2nxactwgQVNFp9UulSuPnJIYYDTwZ3sH%2FwgVQJJqENWx5zQ8A%2B1ikRv4FOzUgC81De9mjuoGcx9%2B57KxIrLOWRJDunsYUsnGNirF5gwP2Xp2suQ1udvBhuI%2Bq7lk5g2mw3qmKloevBAfpj95ztxiobgstkEwjWXew3IS0%2FAMwwpIeBrr6nr%2Bj3PR7I0K4aIjRo0BRnuW0koZms%2F4sP%2BY5XRmPrkbEtNebJNHmoPzfAy9VaYqe2K1AyvmGMo7ag1QjTjtqTA6Rx3cRafKlIt0mbPge2uXnehRx508bYQq%2FEJCtAXDze43sJhl2RqJDemQDX5Zi%2FcyIEZab1qxGi9SJUVhH%2Fk3ZGg3gqICPe6AMygWkq54H25ZFcT8vkFDGrC33APYN1tJd59MjRQ7npctyP26j5xO%2BgKQQ4J9EQiLHgrpo0rgSpYi%2BJKpsrLgzwvfnGNOP9YvMDBDjDSj33tRe8T%2BGrZQjBE%2FOzrmnsp7YLu9LWKdEVJJX8rgCw2MK%2B%2Fhb8GOqUBtdkvYyBnSc%2B2jfRcwaS81y8eq7v%2BYn86t9bCaLLKMtQIr%2FWTAXZZGXfQIb0naO0AAkQ4tW2uFIq5tJ4DzgVOCCBtad5g7eJ%2FBRsMJSMBhUiSmRXaAsaSE4fGiYeHcpzhk8rSTuNLMIlX7Qn5iLCbeoblEYciV1six7g1cHV4A40IAIbDfORy0zLsgxAwPuFSdQbL8kE6oaOHClIXCNbb8BHvnaNI&X-Amz-Signature=d5b58e46437715b761a19c5c9d1b26d47c3b02f0dd75d9d9b222c3b0ff461ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWASD4C6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUODS3YXLFUpw0D48vCjwB9Px%2FsRKbY6zH1M%2BuH7MPgIgNFURYocNo%2F%2F8QL6ty65U8fSqbNrPZVvkT2N0AWQw4kUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIS8oICDlHCx%2Fm7gircA3fs44j2GNZbFK0zGfjJSMKpYM9YeXGqW7dvgPJ9RwPcf9eV4DG%2FSZWFC6m5B%2BkHUmmn9N1H4yVDxlvzsCMkBeAkuNU4vpdSPTX4u34LcYRC6w%2Bq2%2F38woS3J0PtPdGAR2nxactwgQVNFp9UulSuPnJIYYDTwZ3sH%2FwgVQJJqENWx5zQ8A%2B1ikRv4FOzUgC81De9mjuoGcx9%2B57KxIrLOWRJDunsYUsnGNirF5gwP2Xp2suQ1udvBhuI%2Bq7lk5g2mw3qmKloevBAfpj95ztxiobgstkEwjWXew3IS0%2FAMwwpIeBrr6nr%2Bj3PR7I0K4aIjRo0BRnuW0koZms%2F4sP%2BY5XRmPrkbEtNebJNHmoPzfAy9VaYqe2K1AyvmGMo7ag1QjTjtqTA6Rx3cRafKlIt0mbPge2uXnehRx508bYQq%2FEJCtAXDze43sJhl2RqJDemQDX5Zi%2FcyIEZab1qxGi9SJUVhH%2Fk3ZGg3gqICPe6AMygWkq54H25ZFcT8vkFDGrC33APYN1tJd59MjRQ7npctyP26j5xO%2BgKQQ4J9EQiLHgrpo0rgSpYi%2BJKpsrLgzwvfnGNOP9YvMDBDjDSj33tRe8T%2BGrZQjBE%2FOzrmnsp7YLu9LWKdEVJJX8rgCw2MK%2B%2Fhb8GOqUBtdkvYyBnSc%2B2jfRcwaS81y8eq7v%2BYn86t9bCaLLKMtQIr%2FWTAXZZGXfQIb0naO0AAkQ4tW2uFIq5tJ4DzgVOCCBtad5g7eJ%2FBRsMJSMBhUiSmRXaAsaSE4fGiYeHcpzhk8rSTuNLMIlX7Qn5iLCbeoblEYciV1six7g1cHV4A40IAIbDfORy0zLsgxAwPuFSdQbL8kE6oaOHClIXCNbb8BHvnaNI&X-Amz-Signature=b426f6e5f071245217b5f10e50e3d6dd5417d1426a69c406ac3a0b438c1a560c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWASD4C6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUODS3YXLFUpw0D48vCjwB9Px%2FsRKbY6zH1M%2BuH7MPgIgNFURYocNo%2F%2F8QL6ty65U8fSqbNrPZVvkT2N0AWQw4kUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIS8oICDlHCx%2Fm7gircA3fs44j2GNZbFK0zGfjJSMKpYM9YeXGqW7dvgPJ9RwPcf9eV4DG%2FSZWFC6m5B%2BkHUmmn9N1H4yVDxlvzsCMkBeAkuNU4vpdSPTX4u34LcYRC6w%2Bq2%2F38woS3J0PtPdGAR2nxactwgQVNFp9UulSuPnJIYYDTwZ3sH%2FwgVQJJqENWx5zQ8A%2B1ikRv4FOzUgC81De9mjuoGcx9%2B57KxIrLOWRJDunsYUsnGNirF5gwP2Xp2suQ1udvBhuI%2Bq7lk5g2mw3qmKloevBAfpj95ztxiobgstkEwjWXew3IS0%2FAMwwpIeBrr6nr%2Bj3PR7I0K4aIjRo0BRnuW0koZms%2F4sP%2BY5XRmPrkbEtNebJNHmoPzfAy9VaYqe2K1AyvmGMo7ag1QjTjtqTA6Rx3cRafKlIt0mbPge2uXnehRx508bYQq%2FEJCtAXDze43sJhl2RqJDemQDX5Zi%2FcyIEZab1qxGi9SJUVhH%2Fk3ZGg3gqICPe6AMygWkq54H25ZFcT8vkFDGrC33APYN1tJd59MjRQ7npctyP26j5xO%2BgKQQ4J9EQiLHgrpo0rgSpYi%2BJKpsrLgzwvfnGNOP9YvMDBDjDSj33tRe8T%2BGrZQjBE%2FOzrmnsp7YLu9LWKdEVJJX8rgCw2MK%2B%2Fhb8GOqUBtdkvYyBnSc%2B2jfRcwaS81y8eq7v%2BYn86t9bCaLLKMtQIr%2FWTAXZZGXfQIb0naO0AAkQ4tW2uFIq5tJ4DzgVOCCBtad5g7eJ%2FBRsMJSMBhUiSmRXaAsaSE4fGiYeHcpzhk8rSTuNLMIlX7Qn5iLCbeoblEYciV1six7g1cHV4A40IAIbDfORy0zLsgxAwPuFSdQbL8kE6oaOHClIXCNbb8BHvnaNI&X-Amz-Signature=38ee47f5a2150e5e1669e7c6ddca8e83bf99a0ec2712d12eac1cc4c638e4c64a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWASD4C6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUODS3YXLFUpw0D48vCjwB9Px%2FsRKbY6zH1M%2BuH7MPgIgNFURYocNo%2F%2F8QL6ty65U8fSqbNrPZVvkT2N0AWQw4kUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIS8oICDlHCx%2Fm7gircA3fs44j2GNZbFK0zGfjJSMKpYM9YeXGqW7dvgPJ9RwPcf9eV4DG%2FSZWFC6m5B%2BkHUmmn9N1H4yVDxlvzsCMkBeAkuNU4vpdSPTX4u34LcYRC6w%2Bq2%2F38woS3J0PtPdGAR2nxactwgQVNFp9UulSuPnJIYYDTwZ3sH%2FwgVQJJqENWx5zQ8A%2B1ikRv4FOzUgC81De9mjuoGcx9%2B57KxIrLOWRJDunsYUsnGNirF5gwP2Xp2suQ1udvBhuI%2Bq7lk5g2mw3qmKloevBAfpj95ztxiobgstkEwjWXew3IS0%2FAMwwpIeBrr6nr%2Bj3PR7I0K4aIjRo0BRnuW0koZms%2F4sP%2BY5XRmPrkbEtNebJNHmoPzfAy9VaYqe2K1AyvmGMo7ag1QjTjtqTA6Rx3cRafKlIt0mbPge2uXnehRx508bYQq%2FEJCtAXDze43sJhl2RqJDemQDX5Zi%2FcyIEZab1qxGi9SJUVhH%2Fk3ZGg3gqICPe6AMygWkq54H25ZFcT8vkFDGrC33APYN1tJd59MjRQ7npctyP26j5xO%2BgKQQ4J9EQiLHgrpo0rgSpYi%2BJKpsrLgzwvfnGNOP9YvMDBDjDSj33tRe8T%2BGrZQjBE%2FOzrmnsp7YLu9LWKdEVJJX8rgCw2MK%2B%2Fhb8GOqUBtdkvYyBnSc%2B2jfRcwaS81y8eq7v%2BYn86t9bCaLLKMtQIr%2FWTAXZZGXfQIb0naO0AAkQ4tW2uFIq5tJ4DzgVOCCBtad5g7eJ%2FBRsMJSMBhUiSmRXaAsaSE4fGiYeHcpzhk8rSTuNLMIlX7Qn5iLCbeoblEYciV1six7g1cHV4A40IAIbDfORy0zLsgxAwPuFSdQbL8kE6oaOHClIXCNbb8BHvnaNI&X-Amz-Signature=e90f83a500d0925f1c26050719bc125885f115ac46e3c2937b524e9cfc78443f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWASD4C6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUODS3YXLFUpw0D48vCjwB9Px%2FsRKbY6zH1M%2BuH7MPgIgNFURYocNo%2F%2F8QL6ty65U8fSqbNrPZVvkT2N0AWQw4kUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIS8oICDlHCx%2Fm7gircA3fs44j2GNZbFK0zGfjJSMKpYM9YeXGqW7dvgPJ9RwPcf9eV4DG%2FSZWFC6m5B%2BkHUmmn9N1H4yVDxlvzsCMkBeAkuNU4vpdSPTX4u34LcYRC6w%2Bq2%2F38woS3J0PtPdGAR2nxactwgQVNFp9UulSuPnJIYYDTwZ3sH%2FwgVQJJqENWx5zQ8A%2B1ikRv4FOzUgC81De9mjuoGcx9%2B57KxIrLOWRJDunsYUsnGNirF5gwP2Xp2suQ1udvBhuI%2Bq7lk5g2mw3qmKloevBAfpj95ztxiobgstkEwjWXew3IS0%2FAMwwpIeBrr6nr%2Bj3PR7I0K4aIjRo0BRnuW0koZms%2F4sP%2BY5XRmPrkbEtNebJNHmoPzfAy9VaYqe2K1AyvmGMo7ag1QjTjtqTA6Rx3cRafKlIt0mbPge2uXnehRx508bYQq%2FEJCtAXDze43sJhl2RqJDemQDX5Zi%2FcyIEZab1qxGi9SJUVhH%2Fk3ZGg3gqICPe6AMygWkq54H25ZFcT8vkFDGrC33APYN1tJd59MjRQ7npctyP26j5xO%2BgKQQ4J9EQiLHgrpo0rgSpYi%2BJKpsrLgzwvfnGNOP9YvMDBDjDSj33tRe8T%2BGrZQjBE%2FOzrmnsp7YLu9LWKdEVJJX8rgCw2MK%2B%2Fhb8GOqUBtdkvYyBnSc%2B2jfRcwaS81y8eq7v%2BYn86t9bCaLLKMtQIr%2FWTAXZZGXfQIb0naO0AAkQ4tW2uFIq5tJ4DzgVOCCBtad5g7eJ%2FBRsMJSMBhUiSmRXaAsaSE4fGiYeHcpzhk8rSTuNLMIlX7Qn5iLCbeoblEYciV1six7g1cHV4A40IAIbDfORy0zLsgxAwPuFSdQbL8kE6oaOHClIXCNbb8BHvnaNI&X-Amz-Signature=1a11b68627753909fd32c0802389c8c7d4fa6afec349eb2013e714022ee1a9b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWASD4C6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbUODS3YXLFUpw0D48vCjwB9Px%2FsRKbY6zH1M%2BuH7MPgIgNFURYocNo%2F%2F8QL6ty65U8fSqbNrPZVvkT2N0AWQw4kUqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIS8oICDlHCx%2Fm7gircA3fs44j2GNZbFK0zGfjJSMKpYM9YeXGqW7dvgPJ9RwPcf9eV4DG%2FSZWFC6m5B%2BkHUmmn9N1H4yVDxlvzsCMkBeAkuNU4vpdSPTX4u34LcYRC6w%2Bq2%2F38woS3J0PtPdGAR2nxactwgQVNFp9UulSuPnJIYYDTwZ3sH%2FwgVQJJqENWx5zQ8A%2B1ikRv4FOzUgC81De9mjuoGcx9%2B57KxIrLOWRJDunsYUsnGNirF5gwP2Xp2suQ1udvBhuI%2Bq7lk5g2mw3qmKloevBAfpj95ztxiobgstkEwjWXew3IS0%2FAMwwpIeBrr6nr%2Bj3PR7I0K4aIjRo0BRnuW0koZms%2F4sP%2BY5XRmPrkbEtNebJNHmoPzfAy9VaYqe2K1AyvmGMo7ag1QjTjtqTA6Rx3cRafKlIt0mbPge2uXnehRx508bYQq%2FEJCtAXDze43sJhl2RqJDemQDX5Zi%2FcyIEZab1qxGi9SJUVhH%2Fk3ZGg3gqICPe6AMygWkq54H25ZFcT8vkFDGrC33APYN1tJd59MjRQ7npctyP26j5xO%2BgKQQ4J9EQiLHgrpo0rgSpYi%2BJKpsrLgzwvfnGNOP9YvMDBDjDSj33tRe8T%2BGrZQjBE%2FOzrmnsp7YLu9LWKdEVJJX8rgCw2MK%2B%2Fhb8GOqUBtdkvYyBnSc%2B2jfRcwaS81y8eq7v%2BYn86t9bCaLLKMtQIr%2FWTAXZZGXfQIb0naO0AAkQ4tW2uFIq5tJ4DzgVOCCBtad5g7eJ%2FBRsMJSMBhUiSmRXaAsaSE4fGiYeHcpzhk8rSTuNLMIlX7Qn5iLCbeoblEYciV1six7g1cHV4A40IAIbDfORy0zLsgxAwPuFSdQbL8kE6oaOHClIXCNbb8BHvnaNI&X-Amz-Signature=e2fbef2bd018ad63934705ec2bd050fb9f77a9bca3013c1b8565573b4ef4ca5a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
