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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFB67MS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7IlfipraumzjXXFTuX%2F%2Bssax2fSosWYJHkmSRAZ2e4AiEA5Set9Mny%2FM%2FoyZ0f6CGfrzo2O%2FZoKAwM2FAyM0mpI3UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwZKcHyTZoAza0zuCrcA91SSL3Lo1bML1Uz22p87XoK46lbocxRKXBSdOn9Sb6KjigSsfdByJhz1jLG3I4C2cwNYkEf90%2BblrTeOvF1tiAaml0uDbkHSV%2FrAG6Bex2TKp%2FmEoI%2BHtjnqrK6rwazzoQPJvCZrsKbZk5ZwGyqQJ%2BqZoAJMwfqGSkI%2B4pzDonTukfZgXor90%2F%2FwxkA1zltM9s8qpC0%2Fve0awyU0FIPO2wTNi%2FzuOG5Z%2Bl%2B%2BgGpnLNTsYQ2UejdkxUIxJfQm9ZBcIWRvp4B%2B566dktFgiayPEMUc0Qn4QJZ4mlVEnv29U8c7iC0Yd2yB1PArZYtv4naLvXmdy9ad5srDBhAlTuZDJCmCmZPqDIiboNa9Z5X3NfSOdTgrIwyn61EODCsNpd1qzs5AhaMW3m2r1SXGTQ5yRz8DQNkpNLwI5eodP5EFvnB7nohN28lRv1%2FwoCpdZKl4qgz8kKNf4osRZJa6KayOVcmfcrjbX8vMToZRjpzoygQ1DroreFfIo0D1GJ1ECJSQrJJeU5rSCyi8GIdsuwzCcw5gyehoNihH3IIMdb%2B60KamAFKcyLvKmqeVkavkCK%2BXMVC4VIhiOQ40HnPfzf14PsRtusGtEDrDa6%2FvDn8LGNP66WS01qNlibxopFWMNymjMMGOqUBwgWbE3hZtJlm1GBorvE7f1SSMGiD6L31%2BdHl0YIXvLcm9%2BTQ7PY8XKPqzlet0D9rHKR1pTwfftWrjPQmv0cAbeJBcAhk9L9sfdwJLFzFwKcUkQBGlNb0PFDwb6hmTrNtaLboc14oRc03hDB%2BBTb0AkplrpstgPxumNl1HAK4jGZJEttDMQVjlwpd8RzlKX0hD9T%2Fjkj68mxN0ViYPgn6DSR6KjK9&X-Amz-Signature=cae4249b0681b6475a2d85272c7810634cd2d0c4f21ce8626b7ef9d0c5086d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFB67MS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7IlfipraumzjXXFTuX%2F%2Bssax2fSosWYJHkmSRAZ2e4AiEA5Set9Mny%2FM%2FoyZ0f6CGfrzo2O%2FZoKAwM2FAyM0mpI3UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwZKcHyTZoAza0zuCrcA91SSL3Lo1bML1Uz22p87XoK46lbocxRKXBSdOn9Sb6KjigSsfdByJhz1jLG3I4C2cwNYkEf90%2BblrTeOvF1tiAaml0uDbkHSV%2FrAG6Bex2TKp%2FmEoI%2BHtjnqrK6rwazzoQPJvCZrsKbZk5ZwGyqQJ%2BqZoAJMwfqGSkI%2B4pzDonTukfZgXor90%2F%2FwxkA1zltM9s8qpC0%2Fve0awyU0FIPO2wTNi%2FzuOG5Z%2Bl%2B%2BgGpnLNTsYQ2UejdkxUIxJfQm9ZBcIWRvp4B%2B566dktFgiayPEMUc0Qn4QJZ4mlVEnv29U8c7iC0Yd2yB1PArZYtv4naLvXmdy9ad5srDBhAlTuZDJCmCmZPqDIiboNa9Z5X3NfSOdTgrIwyn61EODCsNpd1qzs5AhaMW3m2r1SXGTQ5yRz8DQNkpNLwI5eodP5EFvnB7nohN28lRv1%2FwoCpdZKl4qgz8kKNf4osRZJa6KayOVcmfcrjbX8vMToZRjpzoygQ1DroreFfIo0D1GJ1ECJSQrJJeU5rSCyi8GIdsuwzCcw5gyehoNihH3IIMdb%2B60KamAFKcyLvKmqeVkavkCK%2BXMVC4VIhiOQ40HnPfzf14PsRtusGtEDrDa6%2FvDn8LGNP66WS01qNlibxopFWMNymjMMGOqUBwgWbE3hZtJlm1GBorvE7f1SSMGiD6L31%2BdHl0YIXvLcm9%2BTQ7PY8XKPqzlet0D9rHKR1pTwfftWrjPQmv0cAbeJBcAhk9L9sfdwJLFzFwKcUkQBGlNb0PFDwb6hmTrNtaLboc14oRc03hDB%2BBTb0AkplrpstgPxumNl1HAK4jGZJEttDMQVjlwpd8RzlKX0hD9T%2Fjkj68mxN0ViYPgn6DSR6KjK9&X-Amz-Signature=7e6dc14219521236476ce7eae11549ff032930dfa3f9a123f75c1f72eeae7635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFB67MS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7IlfipraumzjXXFTuX%2F%2Bssax2fSosWYJHkmSRAZ2e4AiEA5Set9Mny%2FM%2FoyZ0f6CGfrzo2O%2FZoKAwM2FAyM0mpI3UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwZKcHyTZoAza0zuCrcA91SSL3Lo1bML1Uz22p87XoK46lbocxRKXBSdOn9Sb6KjigSsfdByJhz1jLG3I4C2cwNYkEf90%2BblrTeOvF1tiAaml0uDbkHSV%2FrAG6Bex2TKp%2FmEoI%2BHtjnqrK6rwazzoQPJvCZrsKbZk5ZwGyqQJ%2BqZoAJMwfqGSkI%2B4pzDonTukfZgXor90%2F%2FwxkA1zltM9s8qpC0%2Fve0awyU0FIPO2wTNi%2FzuOG5Z%2Bl%2B%2BgGpnLNTsYQ2UejdkxUIxJfQm9ZBcIWRvp4B%2B566dktFgiayPEMUc0Qn4QJZ4mlVEnv29U8c7iC0Yd2yB1PArZYtv4naLvXmdy9ad5srDBhAlTuZDJCmCmZPqDIiboNa9Z5X3NfSOdTgrIwyn61EODCsNpd1qzs5AhaMW3m2r1SXGTQ5yRz8DQNkpNLwI5eodP5EFvnB7nohN28lRv1%2FwoCpdZKl4qgz8kKNf4osRZJa6KayOVcmfcrjbX8vMToZRjpzoygQ1DroreFfIo0D1GJ1ECJSQrJJeU5rSCyi8GIdsuwzCcw5gyehoNihH3IIMdb%2B60KamAFKcyLvKmqeVkavkCK%2BXMVC4VIhiOQ40HnPfzf14PsRtusGtEDrDa6%2FvDn8LGNP66WS01qNlibxopFWMNymjMMGOqUBwgWbE3hZtJlm1GBorvE7f1SSMGiD6L31%2BdHl0YIXvLcm9%2BTQ7PY8XKPqzlet0D9rHKR1pTwfftWrjPQmv0cAbeJBcAhk9L9sfdwJLFzFwKcUkQBGlNb0PFDwb6hmTrNtaLboc14oRc03hDB%2BBTb0AkplrpstgPxumNl1HAK4jGZJEttDMQVjlwpd8RzlKX0hD9T%2Fjkj68mxN0ViYPgn6DSR6KjK9&X-Amz-Signature=956f7c65a646ebb24daf0532e5f06a60d42a860c77f6d3556e8e22acb099bdef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFB67MS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7IlfipraumzjXXFTuX%2F%2Bssax2fSosWYJHkmSRAZ2e4AiEA5Set9Mny%2FM%2FoyZ0f6CGfrzo2O%2FZoKAwM2FAyM0mpI3UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwZKcHyTZoAza0zuCrcA91SSL3Lo1bML1Uz22p87XoK46lbocxRKXBSdOn9Sb6KjigSsfdByJhz1jLG3I4C2cwNYkEf90%2BblrTeOvF1tiAaml0uDbkHSV%2FrAG6Bex2TKp%2FmEoI%2BHtjnqrK6rwazzoQPJvCZrsKbZk5ZwGyqQJ%2BqZoAJMwfqGSkI%2B4pzDonTukfZgXor90%2F%2FwxkA1zltM9s8qpC0%2Fve0awyU0FIPO2wTNi%2FzuOG5Z%2Bl%2B%2BgGpnLNTsYQ2UejdkxUIxJfQm9ZBcIWRvp4B%2B566dktFgiayPEMUc0Qn4QJZ4mlVEnv29U8c7iC0Yd2yB1PArZYtv4naLvXmdy9ad5srDBhAlTuZDJCmCmZPqDIiboNa9Z5X3NfSOdTgrIwyn61EODCsNpd1qzs5AhaMW3m2r1SXGTQ5yRz8DQNkpNLwI5eodP5EFvnB7nohN28lRv1%2FwoCpdZKl4qgz8kKNf4osRZJa6KayOVcmfcrjbX8vMToZRjpzoygQ1DroreFfIo0D1GJ1ECJSQrJJeU5rSCyi8GIdsuwzCcw5gyehoNihH3IIMdb%2B60KamAFKcyLvKmqeVkavkCK%2BXMVC4VIhiOQ40HnPfzf14PsRtusGtEDrDa6%2FvDn8LGNP66WS01qNlibxopFWMNymjMMGOqUBwgWbE3hZtJlm1GBorvE7f1SSMGiD6L31%2BdHl0YIXvLcm9%2BTQ7PY8XKPqzlet0D9rHKR1pTwfftWrjPQmv0cAbeJBcAhk9L9sfdwJLFzFwKcUkQBGlNb0PFDwb6hmTrNtaLboc14oRc03hDB%2BBTb0AkplrpstgPxumNl1HAK4jGZJEttDMQVjlwpd8RzlKX0hD9T%2Fjkj68mxN0ViYPgn6DSR6KjK9&X-Amz-Signature=78faa99af393dec39f2ad10ac8294791ad8e5bc32523d01180aead56832dc9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFB67MS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7IlfipraumzjXXFTuX%2F%2Bssax2fSosWYJHkmSRAZ2e4AiEA5Set9Mny%2FM%2FoyZ0f6CGfrzo2O%2FZoKAwM2FAyM0mpI3UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwZKcHyTZoAza0zuCrcA91SSL3Lo1bML1Uz22p87XoK46lbocxRKXBSdOn9Sb6KjigSsfdByJhz1jLG3I4C2cwNYkEf90%2BblrTeOvF1tiAaml0uDbkHSV%2FrAG6Bex2TKp%2FmEoI%2BHtjnqrK6rwazzoQPJvCZrsKbZk5ZwGyqQJ%2BqZoAJMwfqGSkI%2B4pzDonTukfZgXor90%2F%2FwxkA1zltM9s8qpC0%2Fve0awyU0FIPO2wTNi%2FzuOG5Z%2Bl%2B%2BgGpnLNTsYQ2UejdkxUIxJfQm9ZBcIWRvp4B%2B566dktFgiayPEMUc0Qn4QJZ4mlVEnv29U8c7iC0Yd2yB1PArZYtv4naLvXmdy9ad5srDBhAlTuZDJCmCmZPqDIiboNa9Z5X3NfSOdTgrIwyn61EODCsNpd1qzs5AhaMW3m2r1SXGTQ5yRz8DQNkpNLwI5eodP5EFvnB7nohN28lRv1%2FwoCpdZKl4qgz8kKNf4osRZJa6KayOVcmfcrjbX8vMToZRjpzoygQ1DroreFfIo0D1GJ1ECJSQrJJeU5rSCyi8GIdsuwzCcw5gyehoNihH3IIMdb%2B60KamAFKcyLvKmqeVkavkCK%2BXMVC4VIhiOQ40HnPfzf14PsRtusGtEDrDa6%2FvDn8LGNP66WS01qNlibxopFWMNymjMMGOqUBwgWbE3hZtJlm1GBorvE7f1SSMGiD6L31%2BdHl0YIXvLcm9%2BTQ7PY8XKPqzlet0D9rHKR1pTwfftWrjPQmv0cAbeJBcAhk9L9sfdwJLFzFwKcUkQBGlNb0PFDwb6hmTrNtaLboc14oRc03hDB%2BBTb0AkplrpstgPxumNl1HAK4jGZJEttDMQVjlwpd8RzlKX0hD9T%2Fjkj68mxN0ViYPgn6DSR6KjK9&X-Amz-Signature=48b80c9bd4e1372f82659ce4bbfc60fa7462bec6e39e9d1fc2ed6533eec31b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFB67MS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7IlfipraumzjXXFTuX%2F%2Bssax2fSosWYJHkmSRAZ2e4AiEA5Set9Mny%2FM%2FoyZ0f6CGfrzo2O%2FZoKAwM2FAyM0mpI3UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwZKcHyTZoAza0zuCrcA91SSL3Lo1bML1Uz22p87XoK46lbocxRKXBSdOn9Sb6KjigSsfdByJhz1jLG3I4C2cwNYkEf90%2BblrTeOvF1tiAaml0uDbkHSV%2FrAG6Bex2TKp%2FmEoI%2BHtjnqrK6rwazzoQPJvCZrsKbZk5ZwGyqQJ%2BqZoAJMwfqGSkI%2B4pzDonTukfZgXor90%2F%2FwxkA1zltM9s8qpC0%2Fve0awyU0FIPO2wTNi%2FzuOG5Z%2Bl%2B%2BgGpnLNTsYQ2UejdkxUIxJfQm9ZBcIWRvp4B%2B566dktFgiayPEMUc0Qn4QJZ4mlVEnv29U8c7iC0Yd2yB1PArZYtv4naLvXmdy9ad5srDBhAlTuZDJCmCmZPqDIiboNa9Z5X3NfSOdTgrIwyn61EODCsNpd1qzs5AhaMW3m2r1SXGTQ5yRz8DQNkpNLwI5eodP5EFvnB7nohN28lRv1%2FwoCpdZKl4qgz8kKNf4osRZJa6KayOVcmfcrjbX8vMToZRjpzoygQ1DroreFfIo0D1GJ1ECJSQrJJeU5rSCyi8GIdsuwzCcw5gyehoNihH3IIMdb%2B60KamAFKcyLvKmqeVkavkCK%2BXMVC4VIhiOQ40HnPfzf14PsRtusGtEDrDa6%2FvDn8LGNP66WS01qNlibxopFWMNymjMMGOqUBwgWbE3hZtJlm1GBorvE7f1SSMGiD6L31%2BdHl0YIXvLcm9%2BTQ7PY8XKPqzlet0D9rHKR1pTwfftWrjPQmv0cAbeJBcAhk9L9sfdwJLFzFwKcUkQBGlNb0PFDwb6hmTrNtaLboc14oRc03hDB%2BBTb0AkplrpstgPxumNl1HAK4jGZJEttDMQVjlwpd8RzlKX0hD9T%2Fjkj68mxN0ViYPgn6DSR6KjK9&X-Amz-Signature=d0462c6bc469ced4feb1c2925f42d93abe56f41a620ddd48af6808845b1b30d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFB67MS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7IlfipraumzjXXFTuX%2F%2Bssax2fSosWYJHkmSRAZ2e4AiEA5Set9Mny%2FM%2FoyZ0f6CGfrzo2O%2FZoKAwM2FAyM0mpI3UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwZKcHyTZoAza0zuCrcA91SSL3Lo1bML1Uz22p87XoK46lbocxRKXBSdOn9Sb6KjigSsfdByJhz1jLG3I4C2cwNYkEf90%2BblrTeOvF1tiAaml0uDbkHSV%2FrAG6Bex2TKp%2FmEoI%2BHtjnqrK6rwazzoQPJvCZrsKbZk5ZwGyqQJ%2BqZoAJMwfqGSkI%2B4pzDonTukfZgXor90%2F%2FwxkA1zltM9s8qpC0%2Fve0awyU0FIPO2wTNi%2FzuOG5Z%2Bl%2B%2BgGpnLNTsYQ2UejdkxUIxJfQm9ZBcIWRvp4B%2B566dktFgiayPEMUc0Qn4QJZ4mlVEnv29U8c7iC0Yd2yB1PArZYtv4naLvXmdy9ad5srDBhAlTuZDJCmCmZPqDIiboNa9Z5X3NfSOdTgrIwyn61EODCsNpd1qzs5AhaMW3m2r1SXGTQ5yRz8DQNkpNLwI5eodP5EFvnB7nohN28lRv1%2FwoCpdZKl4qgz8kKNf4osRZJa6KayOVcmfcrjbX8vMToZRjpzoygQ1DroreFfIo0D1GJ1ECJSQrJJeU5rSCyi8GIdsuwzCcw5gyehoNihH3IIMdb%2B60KamAFKcyLvKmqeVkavkCK%2BXMVC4VIhiOQ40HnPfzf14PsRtusGtEDrDa6%2FvDn8LGNP66WS01qNlibxopFWMNymjMMGOqUBwgWbE3hZtJlm1GBorvE7f1SSMGiD6L31%2BdHl0YIXvLcm9%2BTQ7PY8XKPqzlet0D9rHKR1pTwfftWrjPQmv0cAbeJBcAhk9L9sfdwJLFzFwKcUkQBGlNb0PFDwb6hmTrNtaLboc14oRc03hDB%2BBTb0AkplrpstgPxumNl1HAK4jGZJEttDMQVjlwpd8RzlKX0hD9T%2Fjkj68mxN0ViYPgn6DSR6KjK9&X-Amz-Signature=e2c64cc68d65a3b2d0992b8e32260e4dc9b764a5e38ed8a104f2f7201597a116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFB67MS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7IlfipraumzjXXFTuX%2F%2Bssax2fSosWYJHkmSRAZ2e4AiEA5Set9Mny%2FM%2FoyZ0f6CGfrzo2O%2FZoKAwM2FAyM0mpI3UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwZKcHyTZoAza0zuCrcA91SSL3Lo1bML1Uz22p87XoK46lbocxRKXBSdOn9Sb6KjigSsfdByJhz1jLG3I4C2cwNYkEf90%2BblrTeOvF1tiAaml0uDbkHSV%2FrAG6Bex2TKp%2FmEoI%2BHtjnqrK6rwazzoQPJvCZrsKbZk5ZwGyqQJ%2BqZoAJMwfqGSkI%2B4pzDonTukfZgXor90%2F%2FwxkA1zltM9s8qpC0%2Fve0awyU0FIPO2wTNi%2FzuOG5Z%2Bl%2B%2BgGpnLNTsYQ2UejdkxUIxJfQm9ZBcIWRvp4B%2B566dktFgiayPEMUc0Qn4QJZ4mlVEnv29U8c7iC0Yd2yB1PArZYtv4naLvXmdy9ad5srDBhAlTuZDJCmCmZPqDIiboNa9Z5X3NfSOdTgrIwyn61EODCsNpd1qzs5AhaMW3m2r1SXGTQ5yRz8DQNkpNLwI5eodP5EFvnB7nohN28lRv1%2FwoCpdZKl4qgz8kKNf4osRZJa6KayOVcmfcrjbX8vMToZRjpzoygQ1DroreFfIo0D1GJ1ECJSQrJJeU5rSCyi8GIdsuwzCcw5gyehoNihH3IIMdb%2B60KamAFKcyLvKmqeVkavkCK%2BXMVC4VIhiOQ40HnPfzf14PsRtusGtEDrDa6%2FvDn8LGNP66WS01qNlibxopFWMNymjMMGOqUBwgWbE3hZtJlm1GBorvE7f1SSMGiD6L31%2BdHl0YIXvLcm9%2BTQ7PY8XKPqzlet0D9rHKR1pTwfftWrjPQmv0cAbeJBcAhk9L9sfdwJLFzFwKcUkQBGlNb0PFDwb6hmTrNtaLboc14oRc03hDB%2BBTb0AkplrpstgPxumNl1HAK4jGZJEttDMQVjlwpd8RzlKX0hD9T%2Fjkj68mxN0ViYPgn6DSR6KjK9&X-Amz-Signature=92f21fabd441f61130579e850f25e6ff73133fcd1d5c731d225a46f645be9fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
