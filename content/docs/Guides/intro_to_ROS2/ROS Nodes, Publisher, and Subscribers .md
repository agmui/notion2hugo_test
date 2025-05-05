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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWR7GZ6B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA57CaKuwozmH1yLQbqCSWxJKLv9IqXLUyYme7EmXk7iAiBvbCkkIlQNtws2%2FLOFGxz1lTm6pfki7kbNUSSRzHnJxir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFg%2FhQoSo5dd0hfDTKtwDaMhr7eilOETfhNJjRXFPtIGBI%2BnChAreAHSgELPI5jTjUNnAg8xm7gF%2FdBM%2BjKYaE7NyuOGvOUdmQHvxi3SZfGl1kh3qCXywVD7Zl4wQbPmnnNiRJicd28n5hrO%2BCH4IIyMvLj5keu5H6uzQYe15yere0K0KL%2BlyapbEMll2lkLUi6grswfAhos9E7%2BHp%2FLvC5Wn4tIMS%2FgTvxSVmF%2FpszyC3hVhUuu6%2FL6jbhbIEcHGuHwAFeGuAh1KO%2BMxr913%2FHzJyFUQgvfDtIcVZNZrWRXXkUs8UJkXEIg85jiqTzezbcPQxg1%2BpZ2ON7EMoZx1Qb5509C8f1PNpDVfA8WOVrUcv6aSDZKROcAoIIG8z8%2FDFnv1cEitiXx%2Ff4o%2FK2gD6dr8VQp8kJqK0DQssprhUXWhKDRX3JwM9ATfgQO2zoB%2BIorxN6p9wkwkv9tbDk2brnFmMg1Sgk6vWQrEunJ70HMABeyIZRLamajVXTkfPOlAmcBQZW2fKm2z4o7ONXDTTXenW1EWqvL0ycrUD4NR5U21OPcK%2BktdODX6WVwTpXd3yfxTmFMysa%2F85t%2BSxXa1UUWCk9wIfLGmboa7AlrAMb4QqJcKzbML%2B8WuYxiwz1mUAZRweVnnOaGfs24w5KzfwAY6pgFCAymnSiW%2BfxC3Fwjhanm3xVY9EFcxcXeGP6rkUJ8z0eTTV0tkG54q5JuObkWTY3%2FrGoCiFup8CeFeGUATB0u9KPBGjhjC34OB8W0Z%2BpazClBzSzsUunPyuUJMnq0YH%2FAZ7Fzc4i76xXVeQXJN%2B2LttDamdv81d2h6l4d4LlWDKMUcg1Gxzes%2B3kT42GbW0FhpFwAOz4qPLgxysoNH5OOxowwNzGPQ&X-Amz-Signature=6af1ef66e1b1145b1501dd50e4557f22788ab98344d97e365f28236b3949ec0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWR7GZ6B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA57CaKuwozmH1yLQbqCSWxJKLv9IqXLUyYme7EmXk7iAiBvbCkkIlQNtws2%2FLOFGxz1lTm6pfki7kbNUSSRzHnJxir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFg%2FhQoSo5dd0hfDTKtwDaMhr7eilOETfhNJjRXFPtIGBI%2BnChAreAHSgELPI5jTjUNnAg8xm7gF%2FdBM%2BjKYaE7NyuOGvOUdmQHvxi3SZfGl1kh3qCXywVD7Zl4wQbPmnnNiRJicd28n5hrO%2BCH4IIyMvLj5keu5H6uzQYe15yere0K0KL%2BlyapbEMll2lkLUi6grswfAhos9E7%2BHp%2FLvC5Wn4tIMS%2FgTvxSVmF%2FpszyC3hVhUuu6%2FL6jbhbIEcHGuHwAFeGuAh1KO%2BMxr913%2FHzJyFUQgvfDtIcVZNZrWRXXkUs8UJkXEIg85jiqTzezbcPQxg1%2BpZ2ON7EMoZx1Qb5509C8f1PNpDVfA8WOVrUcv6aSDZKROcAoIIG8z8%2FDFnv1cEitiXx%2Ff4o%2FK2gD6dr8VQp8kJqK0DQssprhUXWhKDRX3JwM9ATfgQO2zoB%2BIorxN6p9wkwkv9tbDk2brnFmMg1Sgk6vWQrEunJ70HMABeyIZRLamajVXTkfPOlAmcBQZW2fKm2z4o7ONXDTTXenW1EWqvL0ycrUD4NR5U21OPcK%2BktdODX6WVwTpXd3yfxTmFMysa%2F85t%2BSxXa1UUWCk9wIfLGmboa7AlrAMb4QqJcKzbML%2B8WuYxiwz1mUAZRweVnnOaGfs24w5KzfwAY6pgFCAymnSiW%2BfxC3Fwjhanm3xVY9EFcxcXeGP6rkUJ8z0eTTV0tkG54q5JuObkWTY3%2FrGoCiFup8CeFeGUATB0u9KPBGjhjC34OB8W0Z%2BpazClBzSzsUunPyuUJMnq0YH%2FAZ7Fzc4i76xXVeQXJN%2B2LttDamdv81d2h6l4d4LlWDKMUcg1Gxzes%2B3kT42GbW0FhpFwAOz4qPLgxysoNH5OOxowwNzGPQ&X-Amz-Signature=2df230444e791a6bb57ea850b38737a647a861d2a8642f7bb7f6bcc2a96f9777&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWR7GZ6B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA57CaKuwozmH1yLQbqCSWxJKLv9IqXLUyYme7EmXk7iAiBvbCkkIlQNtws2%2FLOFGxz1lTm6pfki7kbNUSSRzHnJxir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFg%2FhQoSo5dd0hfDTKtwDaMhr7eilOETfhNJjRXFPtIGBI%2BnChAreAHSgELPI5jTjUNnAg8xm7gF%2FdBM%2BjKYaE7NyuOGvOUdmQHvxi3SZfGl1kh3qCXywVD7Zl4wQbPmnnNiRJicd28n5hrO%2BCH4IIyMvLj5keu5H6uzQYe15yere0K0KL%2BlyapbEMll2lkLUi6grswfAhos9E7%2BHp%2FLvC5Wn4tIMS%2FgTvxSVmF%2FpszyC3hVhUuu6%2FL6jbhbIEcHGuHwAFeGuAh1KO%2BMxr913%2FHzJyFUQgvfDtIcVZNZrWRXXkUs8UJkXEIg85jiqTzezbcPQxg1%2BpZ2ON7EMoZx1Qb5509C8f1PNpDVfA8WOVrUcv6aSDZKROcAoIIG8z8%2FDFnv1cEitiXx%2Ff4o%2FK2gD6dr8VQp8kJqK0DQssprhUXWhKDRX3JwM9ATfgQO2zoB%2BIorxN6p9wkwkv9tbDk2brnFmMg1Sgk6vWQrEunJ70HMABeyIZRLamajVXTkfPOlAmcBQZW2fKm2z4o7ONXDTTXenW1EWqvL0ycrUD4NR5U21OPcK%2BktdODX6WVwTpXd3yfxTmFMysa%2F85t%2BSxXa1UUWCk9wIfLGmboa7AlrAMb4QqJcKzbML%2B8WuYxiwz1mUAZRweVnnOaGfs24w5KzfwAY6pgFCAymnSiW%2BfxC3Fwjhanm3xVY9EFcxcXeGP6rkUJ8z0eTTV0tkG54q5JuObkWTY3%2FrGoCiFup8CeFeGUATB0u9KPBGjhjC34OB8W0Z%2BpazClBzSzsUunPyuUJMnq0YH%2FAZ7Fzc4i76xXVeQXJN%2B2LttDamdv81d2h6l4d4LlWDKMUcg1Gxzes%2B3kT42GbW0FhpFwAOz4qPLgxysoNH5OOxowwNzGPQ&X-Amz-Signature=67ed38aec3f5114292f2dcbf9e04410b248f0a9c270d4b91c8ab81da231b1df8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWR7GZ6B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA57CaKuwozmH1yLQbqCSWxJKLv9IqXLUyYme7EmXk7iAiBvbCkkIlQNtws2%2FLOFGxz1lTm6pfki7kbNUSSRzHnJxir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFg%2FhQoSo5dd0hfDTKtwDaMhr7eilOETfhNJjRXFPtIGBI%2BnChAreAHSgELPI5jTjUNnAg8xm7gF%2FdBM%2BjKYaE7NyuOGvOUdmQHvxi3SZfGl1kh3qCXywVD7Zl4wQbPmnnNiRJicd28n5hrO%2BCH4IIyMvLj5keu5H6uzQYe15yere0K0KL%2BlyapbEMll2lkLUi6grswfAhos9E7%2BHp%2FLvC5Wn4tIMS%2FgTvxSVmF%2FpszyC3hVhUuu6%2FL6jbhbIEcHGuHwAFeGuAh1KO%2BMxr913%2FHzJyFUQgvfDtIcVZNZrWRXXkUs8UJkXEIg85jiqTzezbcPQxg1%2BpZ2ON7EMoZx1Qb5509C8f1PNpDVfA8WOVrUcv6aSDZKROcAoIIG8z8%2FDFnv1cEitiXx%2Ff4o%2FK2gD6dr8VQp8kJqK0DQssprhUXWhKDRX3JwM9ATfgQO2zoB%2BIorxN6p9wkwkv9tbDk2brnFmMg1Sgk6vWQrEunJ70HMABeyIZRLamajVXTkfPOlAmcBQZW2fKm2z4o7ONXDTTXenW1EWqvL0ycrUD4NR5U21OPcK%2BktdODX6WVwTpXd3yfxTmFMysa%2F85t%2BSxXa1UUWCk9wIfLGmboa7AlrAMb4QqJcKzbML%2B8WuYxiwz1mUAZRweVnnOaGfs24w5KzfwAY6pgFCAymnSiW%2BfxC3Fwjhanm3xVY9EFcxcXeGP6rkUJ8z0eTTV0tkG54q5JuObkWTY3%2FrGoCiFup8CeFeGUATB0u9KPBGjhjC34OB8W0Z%2BpazClBzSzsUunPyuUJMnq0YH%2FAZ7Fzc4i76xXVeQXJN%2B2LttDamdv81d2h6l4d4LlWDKMUcg1Gxzes%2B3kT42GbW0FhpFwAOz4qPLgxysoNH5OOxowwNzGPQ&X-Amz-Signature=1cf49e7130e88efbbb33f283745a479dd0c83a9305b9ccea5bd9e3d8ed336628&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWR7GZ6B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA57CaKuwozmH1yLQbqCSWxJKLv9IqXLUyYme7EmXk7iAiBvbCkkIlQNtws2%2FLOFGxz1lTm6pfki7kbNUSSRzHnJxir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFg%2FhQoSo5dd0hfDTKtwDaMhr7eilOETfhNJjRXFPtIGBI%2BnChAreAHSgELPI5jTjUNnAg8xm7gF%2FdBM%2BjKYaE7NyuOGvOUdmQHvxi3SZfGl1kh3qCXywVD7Zl4wQbPmnnNiRJicd28n5hrO%2BCH4IIyMvLj5keu5H6uzQYe15yere0K0KL%2BlyapbEMll2lkLUi6grswfAhos9E7%2BHp%2FLvC5Wn4tIMS%2FgTvxSVmF%2FpszyC3hVhUuu6%2FL6jbhbIEcHGuHwAFeGuAh1KO%2BMxr913%2FHzJyFUQgvfDtIcVZNZrWRXXkUs8UJkXEIg85jiqTzezbcPQxg1%2BpZ2ON7EMoZx1Qb5509C8f1PNpDVfA8WOVrUcv6aSDZKROcAoIIG8z8%2FDFnv1cEitiXx%2Ff4o%2FK2gD6dr8VQp8kJqK0DQssprhUXWhKDRX3JwM9ATfgQO2zoB%2BIorxN6p9wkwkv9tbDk2brnFmMg1Sgk6vWQrEunJ70HMABeyIZRLamajVXTkfPOlAmcBQZW2fKm2z4o7ONXDTTXenW1EWqvL0ycrUD4NR5U21OPcK%2BktdODX6WVwTpXd3yfxTmFMysa%2F85t%2BSxXa1UUWCk9wIfLGmboa7AlrAMb4QqJcKzbML%2B8WuYxiwz1mUAZRweVnnOaGfs24w5KzfwAY6pgFCAymnSiW%2BfxC3Fwjhanm3xVY9EFcxcXeGP6rkUJ8z0eTTV0tkG54q5JuObkWTY3%2FrGoCiFup8CeFeGUATB0u9KPBGjhjC34OB8W0Z%2BpazClBzSzsUunPyuUJMnq0YH%2FAZ7Fzc4i76xXVeQXJN%2B2LttDamdv81d2h6l4d4LlWDKMUcg1Gxzes%2B3kT42GbW0FhpFwAOz4qPLgxysoNH5OOxowwNzGPQ&X-Amz-Signature=5150b73793bb225503db10732d8c4dba811a7d4179128f9397ca2a70e8af71c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWR7GZ6B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA57CaKuwozmH1yLQbqCSWxJKLv9IqXLUyYme7EmXk7iAiBvbCkkIlQNtws2%2FLOFGxz1lTm6pfki7kbNUSSRzHnJxir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFg%2FhQoSo5dd0hfDTKtwDaMhr7eilOETfhNJjRXFPtIGBI%2BnChAreAHSgELPI5jTjUNnAg8xm7gF%2FdBM%2BjKYaE7NyuOGvOUdmQHvxi3SZfGl1kh3qCXywVD7Zl4wQbPmnnNiRJicd28n5hrO%2BCH4IIyMvLj5keu5H6uzQYe15yere0K0KL%2BlyapbEMll2lkLUi6grswfAhos9E7%2BHp%2FLvC5Wn4tIMS%2FgTvxSVmF%2FpszyC3hVhUuu6%2FL6jbhbIEcHGuHwAFeGuAh1KO%2BMxr913%2FHzJyFUQgvfDtIcVZNZrWRXXkUs8UJkXEIg85jiqTzezbcPQxg1%2BpZ2ON7EMoZx1Qb5509C8f1PNpDVfA8WOVrUcv6aSDZKROcAoIIG8z8%2FDFnv1cEitiXx%2Ff4o%2FK2gD6dr8VQp8kJqK0DQssprhUXWhKDRX3JwM9ATfgQO2zoB%2BIorxN6p9wkwkv9tbDk2brnFmMg1Sgk6vWQrEunJ70HMABeyIZRLamajVXTkfPOlAmcBQZW2fKm2z4o7ONXDTTXenW1EWqvL0ycrUD4NR5U21OPcK%2BktdODX6WVwTpXd3yfxTmFMysa%2F85t%2BSxXa1UUWCk9wIfLGmboa7AlrAMb4QqJcKzbML%2B8WuYxiwz1mUAZRweVnnOaGfs24w5KzfwAY6pgFCAymnSiW%2BfxC3Fwjhanm3xVY9EFcxcXeGP6rkUJ8z0eTTV0tkG54q5JuObkWTY3%2FrGoCiFup8CeFeGUATB0u9KPBGjhjC34OB8W0Z%2BpazClBzSzsUunPyuUJMnq0YH%2FAZ7Fzc4i76xXVeQXJN%2B2LttDamdv81d2h6l4d4LlWDKMUcg1Gxzes%2B3kT42GbW0FhpFwAOz4qPLgxysoNH5OOxowwNzGPQ&X-Amz-Signature=404e3dd8dd552ebbcb592d75690f879aeb6966e1bdf6ee3c552e5ffa392d5a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWR7GZ6B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA57CaKuwozmH1yLQbqCSWxJKLv9IqXLUyYme7EmXk7iAiBvbCkkIlQNtws2%2FLOFGxz1lTm6pfki7kbNUSSRzHnJxir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFg%2FhQoSo5dd0hfDTKtwDaMhr7eilOETfhNJjRXFPtIGBI%2BnChAreAHSgELPI5jTjUNnAg8xm7gF%2FdBM%2BjKYaE7NyuOGvOUdmQHvxi3SZfGl1kh3qCXywVD7Zl4wQbPmnnNiRJicd28n5hrO%2BCH4IIyMvLj5keu5H6uzQYe15yere0K0KL%2BlyapbEMll2lkLUi6grswfAhos9E7%2BHp%2FLvC5Wn4tIMS%2FgTvxSVmF%2FpszyC3hVhUuu6%2FL6jbhbIEcHGuHwAFeGuAh1KO%2BMxr913%2FHzJyFUQgvfDtIcVZNZrWRXXkUs8UJkXEIg85jiqTzezbcPQxg1%2BpZ2ON7EMoZx1Qb5509C8f1PNpDVfA8WOVrUcv6aSDZKROcAoIIG8z8%2FDFnv1cEitiXx%2Ff4o%2FK2gD6dr8VQp8kJqK0DQssprhUXWhKDRX3JwM9ATfgQO2zoB%2BIorxN6p9wkwkv9tbDk2brnFmMg1Sgk6vWQrEunJ70HMABeyIZRLamajVXTkfPOlAmcBQZW2fKm2z4o7ONXDTTXenW1EWqvL0ycrUD4NR5U21OPcK%2BktdODX6WVwTpXd3yfxTmFMysa%2F85t%2BSxXa1UUWCk9wIfLGmboa7AlrAMb4QqJcKzbML%2B8WuYxiwz1mUAZRweVnnOaGfs24w5KzfwAY6pgFCAymnSiW%2BfxC3Fwjhanm3xVY9EFcxcXeGP6rkUJ8z0eTTV0tkG54q5JuObkWTY3%2FrGoCiFup8CeFeGUATB0u9KPBGjhjC34OB8W0Z%2BpazClBzSzsUunPyuUJMnq0YH%2FAZ7Fzc4i76xXVeQXJN%2B2LttDamdv81d2h6l4d4LlWDKMUcg1Gxzes%2B3kT42GbW0FhpFwAOz4qPLgxysoNH5OOxowwNzGPQ&X-Amz-Signature=7b083684e210896894be0d8d1dafba1c05871788012c756eedd1e8a6fc83a8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWR7GZ6B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA57CaKuwozmH1yLQbqCSWxJKLv9IqXLUyYme7EmXk7iAiBvbCkkIlQNtws2%2FLOFGxz1lTm6pfki7kbNUSSRzHnJxir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFg%2FhQoSo5dd0hfDTKtwDaMhr7eilOETfhNJjRXFPtIGBI%2BnChAreAHSgELPI5jTjUNnAg8xm7gF%2FdBM%2BjKYaE7NyuOGvOUdmQHvxi3SZfGl1kh3qCXywVD7Zl4wQbPmnnNiRJicd28n5hrO%2BCH4IIyMvLj5keu5H6uzQYe15yere0K0KL%2BlyapbEMll2lkLUi6grswfAhos9E7%2BHp%2FLvC5Wn4tIMS%2FgTvxSVmF%2FpszyC3hVhUuu6%2FL6jbhbIEcHGuHwAFeGuAh1KO%2BMxr913%2FHzJyFUQgvfDtIcVZNZrWRXXkUs8UJkXEIg85jiqTzezbcPQxg1%2BpZ2ON7EMoZx1Qb5509C8f1PNpDVfA8WOVrUcv6aSDZKROcAoIIG8z8%2FDFnv1cEitiXx%2Ff4o%2FK2gD6dr8VQp8kJqK0DQssprhUXWhKDRX3JwM9ATfgQO2zoB%2BIorxN6p9wkwkv9tbDk2brnFmMg1Sgk6vWQrEunJ70HMABeyIZRLamajVXTkfPOlAmcBQZW2fKm2z4o7ONXDTTXenW1EWqvL0ycrUD4NR5U21OPcK%2BktdODX6WVwTpXd3yfxTmFMysa%2F85t%2BSxXa1UUWCk9wIfLGmboa7AlrAMb4QqJcKzbML%2B8WuYxiwz1mUAZRweVnnOaGfs24w5KzfwAY6pgFCAymnSiW%2BfxC3Fwjhanm3xVY9EFcxcXeGP6rkUJ8z0eTTV0tkG54q5JuObkWTY3%2FrGoCiFup8CeFeGUATB0u9KPBGjhjC34OB8W0Z%2BpazClBzSzsUunPyuUJMnq0YH%2FAZ7Fzc4i76xXVeQXJN%2B2LttDamdv81d2h6l4d4LlWDKMUcg1Gxzes%2B3kT42GbW0FhpFwAOz4qPLgxysoNH5OOxowwNzGPQ&X-Amz-Signature=fe66eda0e6ac2a331693903a1a23aa8b2f89f9822514afb902de0fcce8ea07f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
