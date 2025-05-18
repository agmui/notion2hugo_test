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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6NXMOH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5HOxc1U1DkKJSXsSeiiKEHeUrAci%2FdHapKG7Dr2u2QAiAgTVTsk%2FGkO%2Ft1NK10wePpPZ5q%2Bb8aWGmCIj5TkDoTXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMYcgpw2H6%2FzFd52ReKtwDXrqKfbqM07rgXtN0c5QcSdygfsvfxRUJIFnjjGx92g1rbXCvCwg3QuDWN3lRDSdJpsUkSHrqKSZS7HDWOrO9TAtTLm%2FBsfUZbxCYVbmjt4qAcHqiavt%2F4l1JBxmmLLXOJ0VDdlOy0Eue2V3%2FpPMukwvKYpsZe3WquSnTMK0ltHONzJiKfrPY9%2FGsOH%2FoxcfovFr3ZAqQfzE9aOe%2Bv8CjWUClieZHBYVDpgFzcziVITHSgL%2BzV54g%2Fdheyaad7rg3pDe7KAGyb%2FpAZS1XZGdo8WKwvADP8fFLF6uBPNjpg3P8kPQtukZVRKKdXESaS77q2XRv9E99CNfCQeBoCYhShLb195s1bB5RgQ6w7cI2ShRiO7baAixLC4qp2u0raWap2E4%2FgR4ALkvL5cQxjhVLJX2pMMmzd8S8UC4BECmqAO3RPVO9O44zQf7zKzFC7rnPGFl%2Bmd6jEzKgsmjocxt0vKnwGT5Za8By%2FOT5jbrX77hGzZvNlJ5jAxaRMBNQDWP0hxF2ncBiXS91j1wwhtMejONRzk3EUH2yzctLZZCt%2FdMT7LNfYrEN%2BNlr6zsbKAz9cwOTftsolkDaveL%2BybxAIciYHod3RwhRpo4%2BDwEd3oq6IbYVYytKXa0TPakw%2FcGowQY6pgEGn3kkPvhvKb8utFlF7ul3G5RyJ1gkspdCoNwtcmwx%2B9PlDMzip5EE3DGXnGgHUIFd3Mdl6YkWUwPmBswOCpdaLaLkX2n5rBOeG4Gsmj97TZ7WiVqaM9Kbf3%2F4UMF5a3PbXJgPFWZ13Ws5b3Jlzmxw9rseb07DuhUzharuTaEBL31mckZuZLWpKKmDpD59wGFb5OZ8CMBitiC54QcYMr%2FVs0gHriRz&X-Amz-Signature=acf2a414f120bc7007b9ed5003805566af5df2d99b6524e860b4bfaa3503e825&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6NXMOH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5HOxc1U1DkKJSXsSeiiKEHeUrAci%2FdHapKG7Dr2u2QAiAgTVTsk%2FGkO%2Ft1NK10wePpPZ5q%2Bb8aWGmCIj5TkDoTXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMYcgpw2H6%2FzFd52ReKtwDXrqKfbqM07rgXtN0c5QcSdygfsvfxRUJIFnjjGx92g1rbXCvCwg3QuDWN3lRDSdJpsUkSHrqKSZS7HDWOrO9TAtTLm%2FBsfUZbxCYVbmjt4qAcHqiavt%2F4l1JBxmmLLXOJ0VDdlOy0Eue2V3%2FpPMukwvKYpsZe3WquSnTMK0ltHONzJiKfrPY9%2FGsOH%2FoxcfovFr3ZAqQfzE9aOe%2Bv8CjWUClieZHBYVDpgFzcziVITHSgL%2BzV54g%2Fdheyaad7rg3pDe7KAGyb%2FpAZS1XZGdo8WKwvADP8fFLF6uBPNjpg3P8kPQtukZVRKKdXESaS77q2XRv9E99CNfCQeBoCYhShLb195s1bB5RgQ6w7cI2ShRiO7baAixLC4qp2u0raWap2E4%2FgR4ALkvL5cQxjhVLJX2pMMmzd8S8UC4BECmqAO3RPVO9O44zQf7zKzFC7rnPGFl%2Bmd6jEzKgsmjocxt0vKnwGT5Za8By%2FOT5jbrX77hGzZvNlJ5jAxaRMBNQDWP0hxF2ncBiXS91j1wwhtMejONRzk3EUH2yzctLZZCt%2FdMT7LNfYrEN%2BNlr6zsbKAz9cwOTftsolkDaveL%2BybxAIciYHod3RwhRpo4%2BDwEd3oq6IbYVYytKXa0TPakw%2FcGowQY6pgEGn3kkPvhvKb8utFlF7ul3G5RyJ1gkspdCoNwtcmwx%2B9PlDMzip5EE3DGXnGgHUIFd3Mdl6YkWUwPmBswOCpdaLaLkX2n5rBOeG4Gsmj97TZ7WiVqaM9Kbf3%2F4UMF5a3PbXJgPFWZ13Ws5b3Jlzmxw9rseb07DuhUzharuTaEBL31mckZuZLWpKKmDpD59wGFb5OZ8CMBitiC54QcYMr%2FVs0gHriRz&X-Amz-Signature=cd4aae4cd69529749c6d9d46cc333bdad256632e1dd5b8e20b87391b269e6032&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6NXMOH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5HOxc1U1DkKJSXsSeiiKEHeUrAci%2FdHapKG7Dr2u2QAiAgTVTsk%2FGkO%2Ft1NK10wePpPZ5q%2Bb8aWGmCIj5TkDoTXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMYcgpw2H6%2FzFd52ReKtwDXrqKfbqM07rgXtN0c5QcSdygfsvfxRUJIFnjjGx92g1rbXCvCwg3QuDWN3lRDSdJpsUkSHrqKSZS7HDWOrO9TAtTLm%2FBsfUZbxCYVbmjt4qAcHqiavt%2F4l1JBxmmLLXOJ0VDdlOy0Eue2V3%2FpPMukwvKYpsZe3WquSnTMK0ltHONzJiKfrPY9%2FGsOH%2FoxcfovFr3ZAqQfzE9aOe%2Bv8CjWUClieZHBYVDpgFzcziVITHSgL%2BzV54g%2Fdheyaad7rg3pDe7KAGyb%2FpAZS1XZGdo8WKwvADP8fFLF6uBPNjpg3P8kPQtukZVRKKdXESaS77q2XRv9E99CNfCQeBoCYhShLb195s1bB5RgQ6w7cI2ShRiO7baAixLC4qp2u0raWap2E4%2FgR4ALkvL5cQxjhVLJX2pMMmzd8S8UC4BECmqAO3RPVO9O44zQf7zKzFC7rnPGFl%2Bmd6jEzKgsmjocxt0vKnwGT5Za8By%2FOT5jbrX77hGzZvNlJ5jAxaRMBNQDWP0hxF2ncBiXS91j1wwhtMejONRzk3EUH2yzctLZZCt%2FdMT7LNfYrEN%2BNlr6zsbKAz9cwOTftsolkDaveL%2BybxAIciYHod3RwhRpo4%2BDwEd3oq6IbYVYytKXa0TPakw%2FcGowQY6pgEGn3kkPvhvKb8utFlF7ul3G5RyJ1gkspdCoNwtcmwx%2B9PlDMzip5EE3DGXnGgHUIFd3Mdl6YkWUwPmBswOCpdaLaLkX2n5rBOeG4Gsmj97TZ7WiVqaM9Kbf3%2F4UMF5a3PbXJgPFWZ13Ws5b3Jlzmxw9rseb07DuhUzharuTaEBL31mckZuZLWpKKmDpD59wGFb5OZ8CMBitiC54QcYMr%2FVs0gHriRz&X-Amz-Signature=cc520b1efdc68b7005bc813dc720afc395a193d5f2bf8563d8bdcc10ae1bf5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6NXMOH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5HOxc1U1DkKJSXsSeiiKEHeUrAci%2FdHapKG7Dr2u2QAiAgTVTsk%2FGkO%2Ft1NK10wePpPZ5q%2Bb8aWGmCIj5TkDoTXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMYcgpw2H6%2FzFd52ReKtwDXrqKfbqM07rgXtN0c5QcSdygfsvfxRUJIFnjjGx92g1rbXCvCwg3QuDWN3lRDSdJpsUkSHrqKSZS7HDWOrO9TAtTLm%2FBsfUZbxCYVbmjt4qAcHqiavt%2F4l1JBxmmLLXOJ0VDdlOy0Eue2V3%2FpPMukwvKYpsZe3WquSnTMK0ltHONzJiKfrPY9%2FGsOH%2FoxcfovFr3ZAqQfzE9aOe%2Bv8CjWUClieZHBYVDpgFzcziVITHSgL%2BzV54g%2Fdheyaad7rg3pDe7KAGyb%2FpAZS1XZGdo8WKwvADP8fFLF6uBPNjpg3P8kPQtukZVRKKdXESaS77q2XRv9E99CNfCQeBoCYhShLb195s1bB5RgQ6w7cI2ShRiO7baAixLC4qp2u0raWap2E4%2FgR4ALkvL5cQxjhVLJX2pMMmzd8S8UC4BECmqAO3RPVO9O44zQf7zKzFC7rnPGFl%2Bmd6jEzKgsmjocxt0vKnwGT5Za8By%2FOT5jbrX77hGzZvNlJ5jAxaRMBNQDWP0hxF2ncBiXS91j1wwhtMejONRzk3EUH2yzctLZZCt%2FdMT7LNfYrEN%2BNlr6zsbKAz9cwOTftsolkDaveL%2BybxAIciYHod3RwhRpo4%2BDwEd3oq6IbYVYytKXa0TPakw%2FcGowQY6pgEGn3kkPvhvKb8utFlF7ul3G5RyJ1gkspdCoNwtcmwx%2B9PlDMzip5EE3DGXnGgHUIFd3Mdl6YkWUwPmBswOCpdaLaLkX2n5rBOeG4Gsmj97TZ7WiVqaM9Kbf3%2F4UMF5a3PbXJgPFWZ13Ws5b3Jlzmxw9rseb07DuhUzharuTaEBL31mckZuZLWpKKmDpD59wGFb5OZ8CMBitiC54QcYMr%2FVs0gHriRz&X-Amz-Signature=eb7ad171377fa8e68046fbf89bc20e849b6c24cb7cf111c01b5741e504e2d85c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6NXMOH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5HOxc1U1DkKJSXsSeiiKEHeUrAci%2FdHapKG7Dr2u2QAiAgTVTsk%2FGkO%2Ft1NK10wePpPZ5q%2Bb8aWGmCIj5TkDoTXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMYcgpw2H6%2FzFd52ReKtwDXrqKfbqM07rgXtN0c5QcSdygfsvfxRUJIFnjjGx92g1rbXCvCwg3QuDWN3lRDSdJpsUkSHrqKSZS7HDWOrO9TAtTLm%2FBsfUZbxCYVbmjt4qAcHqiavt%2F4l1JBxmmLLXOJ0VDdlOy0Eue2V3%2FpPMukwvKYpsZe3WquSnTMK0ltHONzJiKfrPY9%2FGsOH%2FoxcfovFr3ZAqQfzE9aOe%2Bv8CjWUClieZHBYVDpgFzcziVITHSgL%2BzV54g%2Fdheyaad7rg3pDe7KAGyb%2FpAZS1XZGdo8WKwvADP8fFLF6uBPNjpg3P8kPQtukZVRKKdXESaS77q2XRv9E99CNfCQeBoCYhShLb195s1bB5RgQ6w7cI2ShRiO7baAixLC4qp2u0raWap2E4%2FgR4ALkvL5cQxjhVLJX2pMMmzd8S8UC4BECmqAO3RPVO9O44zQf7zKzFC7rnPGFl%2Bmd6jEzKgsmjocxt0vKnwGT5Za8By%2FOT5jbrX77hGzZvNlJ5jAxaRMBNQDWP0hxF2ncBiXS91j1wwhtMejONRzk3EUH2yzctLZZCt%2FdMT7LNfYrEN%2BNlr6zsbKAz9cwOTftsolkDaveL%2BybxAIciYHod3RwhRpo4%2BDwEd3oq6IbYVYytKXa0TPakw%2FcGowQY6pgEGn3kkPvhvKb8utFlF7ul3G5RyJ1gkspdCoNwtcmwx%2B9PlDMzip5EE3DGXnGgHUIFd3Mdl6YkWUwPmBswOCpdaLaLkX2n5rBOeG4Gsmj97TZ7WiVqaM9Kbf3%2F4UMF5a3PbXJgPFWZ13Ws5b3Jlzmxw9rseb07DuhUzharuTaEBL31mckZuZLWpKKmDpD59wGFb5OZ8CMBitiC54QcYMr%2FVs0gHriRz&X-Amz-Signature=1e00898dd1d308aab1481a05c9bce7ed6f06b30a6047912dd3919403e5d8d45e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6NXMOH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5HOxc1U1DkKJSXsSeiiKEHeUrAci%2FdHapKG7Dr2u2QAiAgTVTsk%2FGkO%2Ft1NK10wePpPZ5q%2Bb8aWGmCIj5TkDoTXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMYcgpw2H6%2FzFd52ReKtwDXrqKfbqM07rgXtN0c5QcSdygfsvfxRUJIFnjjGx92g1rbXCvCwg3QuDWN3lRDSdJpsUkSHrqKSZS7HDWOrO9TAtTLm%2FBsfUZbxCYVbmjt4qAcHqiavt%2F4l1JBxmmLLXOJ0VDdlOy0Eue2V3%2FpPMukwvKYpsZe3WquSnTMK0ltHONzJiKfrPY9%2FGsOH%2FoxcfovFr3ZAqQfzE9aOe%2Bv8CjWUClieZHBYVDpgFzcziVITHSgL%2BzV54g%2Fdheyaad7rg3pDe7KAGyb%2FpAZS1XZGdo8WKwvADP8fFLF6uBPNjpg3P8kPQtukZVRKKdXESaS77q2XRv9E99CNfCQeBoCYhShLb195s1bB5RgQ6w7cI2ShRiO7baAixLC4qp2u0raWap2E4%2FgR4ALkvL5cQxjhVLJX2pMMmzd8S8UC4BECmqAO3RPVO9O44zQf7zKzFC7rnPGFl%2Bmd6jEzKgsmjocxt0vKnwGT5Za8By%2FOT5jbrX77hGzZvNlJ5jAxaRMBNQDWP0hxF2ncBiXS91j1wwhtMejONRzk3EUH2yzctLZZCt%2FdMT7LNfYrEN%2BNlr6zsbKAz9cwOTftsolkDaveL%2BybxAIciYHod3RwhRpo4%2BDwEd3oq6IbYVYytKXa0TPakw%2FcGowQY6pgEGn3kkPvhvKb8utFlF7ul3G5RyJ1gkspdCoNwtcmwx%2B9PlDMzip5EE3DGXnGgHUIFd3Mdl6YkWUwPmBswOCpdaLaLkX2n5rBOeG4Gsmj97TZ7WiVqaM9Kbf3%2F4UMF5a3PbXJgPFWZ13Ws5b3Jlzmxw9rseb07DuhUzharuTaEBL31mckZuZLWpKKmDpD59wGFb5OZ8CMBitiC54QcYMr%2FVs0gHriRz&X-Amz-Signature=c383ae1d61976cbf1701ce2309a07bf9f69e5aed1f81700aae6a33195a8c0609&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6NXMOH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5HOxc1U1DkKJSXsSeiiKEHeUrAci%2FdHapKG7Dr2u2QAiAgTVTsk%2FGkO%2Ft1NK10wePpPZ5q%2Bb8aWGmCIj5TkDoTXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMYcgpw2H6%2FzFd52ReKtwDXrqKfbqM07rgXtN0c5QcSdygfsvfxRUJIFnjjGx92g1rbXCvCwg3QuDWN3lRDSdJpsUkSHrqKSZS7HDWOrO9TAtTLm%2FBsfUZbxCYVbmjt4qAcHqiavt%2F4l1JBxmmLLXOJ0VDdlOy0Eue2V3%2FpPMukwvKYpsZe3WquSnTMK0ltHONzJiKfrPY9%2FGsOH%2FoxcfovFr3ZAqQfzE9aOe%2Bv8CjWUClieZHBYVDpgFzcziVITHSgL%2BzV54g%2Fdheyaad7rg3pDe7KAGyb%2FpAZS1XZGdo8WKwvADP8fFLF6uBPNjpg3P8kPQtukZVRKKdXESaS77q2XRv9E99CNfCQeBoCYhShLb195s1bB5RgQ6w7cI2ShRiO7baAixLC4qp2u0raWap2E4%2FgR4ALkvL5cQxjhVLJX2pMMmzd8S8UC4BECmqAO3RPVO9O44zQf7zKzFC7rnPGFl%2Bmd6jEzKgsmjocxt0vKnwGT5Za8By%2FOT5jbrX77hGzZvNlJ5jAxaRMBNQDWP0hxF2ncBiXS91j1wwhtMejONRzk3EUH2yzctLZZCt%2FdMT7LNfYrEN%2BNlr6zsbKAz9cwOTftsolkDaveL%2BybxAIciYHod3RwhRpo4%2BDwEd3oq6IbYVYytKXa0TPakw%2FcGowQY6pgEGn3kkPvhvKb8utFlF7ul3G5RyJ1gkspdCoNwtcmwx%2B9PlDMzip5EE3DGXnGgHUIFd3Mdl6YkWUwPmBswOCpdaLaLkX2n5rBOeG4Gsmj97TZ7WiVqaM9Kbf3%2F4UMF5a3PbXJgPFWZ13Ws5b3Jlzmxw9rseb07DuhUzharuTaEBL31mckZuZLWpKKmDpD59wGFb5OZ8CMBitiC54QcYMr%2FVs0gHriRz&X-Amz-Signature=56682f0098dba646b103116ef24008a6682b1c0ca9cf7c6ff358781219fb2d46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6NXMOH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5HOxc1U1DkKJSXsSeiiKEHeUrAci%2FdHapKG7Dr2u2QAiAgTVTsk%2FGkO%2Ft1NK10wePpPZ5q%2Bb8aWGmCIj5TkDoTXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMYcgpw2H6%2FzFd52ReKtwDXrqKfbqM07rgXtN0c5QcSdygfsvfxRUJIFnjjGx92g1rbXCvCwg3QuDWN3lRDSdJpsUkSHrqKSZS7HDWOrO9TAtTLm%2FBsfUZbxCYVbmjt4qAcHqiavt%2F4l1JBxmmLLXOJ0VDdlOy0Eue2V3%2FpPMukwvKYpsZe3WquSnTMK0ltHONzJiKfrPY9%2FGsOH%2FoxcfovFr3ZAqQfzE9aOe%2Bv8CjWUClieZHBYVDpgFzcziVITHSgL%2BzV54g%2Fdheyaad7rg3pDe7KAGyb%2FpAZS1XZGdo8WKwvADP8fFLF6uBPNjpg3P8kPQtukZVRKKdXESaS77q2XRv9E99CNfCQeBoCYhShLb195s1bB5RgQ6w7cI2ShRiO7baAixLC4qp2u0raWap2E4%2FgR4ALkvL5cQxjhVLJX2pMMmzd8S8UC4BECmqAO3RPVO9O44zQf7zKzFC7rnPGFl%2Bmd6jEzKgsmjocxt0vKnwGT5Za8By%2FOT5jbrX77hGzZvNlJ5jAxaRMBNQDWP0hxF2ncBiXS91j1wwhtMejONRzk3EUH2yzctLZZCt%2FdMT7LNfYrEN%2BNlr6zsbKAz9cwOTftsolkDaveL%2BybxAIciYHod3RwhRpo4%2BDwEd3oq6IbYVYytKXa0TPakw%2FcGowQY6pgEGn3kkPvhvKb8utFlF7ul3G5RyJ1gkspdCoNwtcmwx%2B9PlDMzip5EE3DGXnGgHUIFd3Mdl6YkWUwPmBswOCpdaLaLkX2n5rBOeG4Gsmj97TZ7WiVqaM9Kbf3%2F4UMF5a3PbXJgPFWZ13Ws5b3Jlzmxw9rseb07DuhUzharuTaEBL31mckZuZLWpKKmDpD59wGFb5OZ8CMBitiC54QcYMr%2FVs0gHriRz&X-Amz-Signature=a54c34d40cd4e072e9f541dcd3398bc00c9c82c84d31968f82e43bda20960c17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
