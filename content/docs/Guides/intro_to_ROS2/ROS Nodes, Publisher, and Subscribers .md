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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4AQCDW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOjy9aMC1b4o2d5Ea0BgzBvdccmSDDPCf3DN%2F3h%2Bh2DAIhANRMwL6M3%2Fs5ubIl8noLIAsY7K0FQQUFRxBLhxFTm7fKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0cd4B1xbgmb6nUq4q3AMImL%2FuoHFFolRdcRYHxqyG3ngj53aCsh47yrESsnc%2FjqTbHGEbl9F6BXe46PGiRaeCKBbxHBZZZ102demxy75qleNI86p295KoaCWKgPQn2gaK81GLcBAQw7UxeXHlBstw9YDJMYEI7FRTqIjyE1Rzg8t59aU1UCN%2BHfJAfyOa%2BTBsnNRf8ZziVvkUGxwEx6lnNp7ji8Ai8csCX%2BZjUOyftGUDsoVeJ5QoGTa%2BgALgW8i1SfvdZrpqJJCdKbSdiKVNbxk2fGFtUonAjTinaoEan3A6AUYfrOga%2FkgFDHgcYbC0P2T%2Bbdo4W4i1kuCPz6YSZVbnvdIRQZouNXBT6DblmRs%2BMkF59ljX0Kr%2BgAU4M4BgvFYnTszN20PgYWziCy3LQPU7qHWJJ9bcfhCWStnEMbtgQLi6hGkCho2FGz079KGGo3bK2bXxgU0Ts5Jg5mb2%2Fqh6kAc3fQnvZDL9%2BSqJatVp3UtORNTfg9toZG51nreJXXk3HIAGXBUhSNI3xdfW2xE09dVgcAgrUxpmZ4b44D1bU9WP3jcEKxFCQ9rCLbtW05BOEAavhI4y3aFBRwey9%2FD9P54afpPXNyTKwQohiPlWiiEhXrqgKPwza5Gzqt%2BsXX%2B4H1els8zxpzDzy9HCBjqkAYE%2BP6nMw1WcXAKa3y3mbfpclqGQ0c5XAA4sATatKw8g1fI3Uxb5KJGv%2BlqsgMmYXEwEjQZY7WImJOBj5s53NMPF1%2FXHE96tjzQQzJcr9q%2BJH2bmHoT5wd5sRJNLIa7EOlm%2BMrkZbKs4kziWdZytuiZu%2BQfte44Ch%2FbNECIuDeTz9EwKemA66eCkGJwAbLQEq9saEV9Fd4iwvKd22ykJhwPyPx7X&X-Amz-Signature=eb48ee3488c28b9e998fac870b7a144bf7b08172aab46ce17190b9c56a54da80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4AQCDW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOjy9aMC1b4o2d5Ea0BgzBvdccmSDDPCf3DN%2F3h%2Bh2DAIhANRMwL6M3%2Fs5ubIl8noLIAsY7K0FQQUFRxBLhxFTm7fKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0cd4B1xbgmb6nUq4q3AMImL%2FuoHFFolRdcRYHxqyG3ngj53aCsh47yrESsnc%2FjqTbHGEbl9F6BXe46PGiRaeCKBbxHBZZZ102demxy75qleNI86p295KoaCWKgPQn2gaK81GLcBAQw7UxeXHlBstw9YDJMYEI7FRTqIjyE1Rzg8t59aU1UCN%2BHfJAfyOa%2BTBsnNRf8ZziVvkUGxwEx6lnNp7ji8Ai8csCX%2BZjUOyftGUDsoVeJ5QoGTa%2BgALgW8i1SfvdZrpqJJCdKbSdiKVNbxk2fGFtUonAjTinaoEan3A6AUYfrOga%2FkgFDHgcYbC0P2T%2Bbdo4W4i1kuCPz6YSZVbnvdIRQZouNXBT6DblmRs%2BMkF59ljX0Kr%2BgAU4M4BgvFYnTszN20PgYWziCy3LQPU7qHWJJ9bcfhCWStnEMbtgQLi6hGkCho2FGz079KGGo3bK2bXxgU0Ts5Jg5mb2%2Fqh6kAc3fQnvZDL9%2BSqJatVp3UtORNTfg9toZG51nreJXXk3HIAGXBUhSNI3xdfW2xE09dVgcAgrUxpmZ4b44D1bU9WP3jcEKxFCQ9rCLbtW05BOEAavhI4y3aFBRwey9%2FD9P54afpPXNyTKwQohiPlWiiEhXrqgKPwza5Gzqt%2BsXX%2B4H1els8zxpzDzy9HCBjqkAYE%2BP6nMw1WcXAKa3y3mbfpclqGQ0c5XAA4sATatKw8g1fI3Uxb5KJGv%2BlqsgMmYXEwEjQZY7WImJOBj5s53NMPF1%2FXHE96tjzQQzJcr9q%2BJH2bmHoT5wd5sRJNLIa7EOlm%2BMrkZbKs4kziWdZytuiZu%2BQfte44Ch%2FbNECIuDeTz9EwKemA66eCkGJwAbLQEq9saEV9Fd4iwvKd22ykJhwPyPx7X&X-Amz-Signature=bc891dc557ad928a78e4384e80303a929bc248bf107da133c66a848964cac252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4AQCDW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOjy9aMC1b4o2d5Ea0BgzBvdccmSDDPCf3DN%2F3h%2Bh2DAIhANRMwL6M3%2Fs5ubIl8noLIAsY7K0FQQUFRxBLhxFTm7fKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0cd4B1xbgmb6nUq4q3AMImL%2FuoHFFolRdcRYHxqyG3ngj53aCsh47yrESsnc%2FjqTbHGEbl9F6BXe46PGiRaeCKBbxHBZZZ102demxy75qleNI86p295KoaCWKgPQn2gaK81GLcBAQw7UxeXHlBstw9YDJMYEI7FRTqIjyE1Rzg8t59aU1UCN%2BHfJAfyOa%2BTBsnNRf8ZziVvkUGxwEx6lnNp7ji8Ai8csCX%2BZjUOyftGUDsoVeJ5QoGTa%2BgALgW8i1SfvdZrpqJJCdKbSdiKVNbxk2fGFtUonAjTinaoEan3A6AUYfrOga%2FkgFDHgcYbC0P2T%2Bbdo4W4i1kuCPz6YSZVbnvdIRQZouNXBT6DblmRs%2BMkF59ljX0Kr%2BgAU4M4BgvFYnTszN20PgYWziCy3LQPU7qHWJJ9bcfhCWStnEMbtgQLi6hGkCho2FGz079KGGo3bK2bXxgU0Ts5Jg5mb2%2Fqh6kAc3fQnvZDL9%2BSqJatVp3UtORNTfg9toZG51nreJXXk3HIAGXBUhSNI3xdfW2xE09dVgcAgrUxpmZ4b44D1bU9WP3jcEKxFCQ9rCLbtW05BOEAavhI4y3aFBRwey9%2FD9P54afpPXNyTKwQohiPlWiiEhXrqgKPwza5Gzqt%2BsXX%2B4H1els8zxpzDzy9HCBjqkAYE%2BP6nMw1WcXAKa3y3mbfpclqGQ0c5XAA4sATatKw8g1fI3Uxb5KJGv%2BlqsgMmYXEwEjQZY7WImJOBj5s53NMPF1%2FXHE96tjzQQzJcr9q%2BJH2bmHoT5wd5sRJNLIa7EOlm%2BMrkZbKs4kziWdZytuiZu%2BQfte44Ch%2FbNECIuDeTz9EwKemA66eCkGJwAbLQEq9saEV9Fd4iwvKd22ykJhwPyPx7X&X-Amz-Signature=ccd152dfd9cd766f342e39487ef327e7b58a40f483ddf2a1f50943083a79f4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4AQCDW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOjy9aMC1b4o2d5Ea0BgzBvdccmSDDPCf3DN%2F3h%2Bh2DAIhANRMwL6M3%2Fs5ubIl8noLIAsY7K0FQQUFRxBLhxFTm7fKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0cd4B1xbgmb6nUq4q3AMImL%2FuoHFFolRdcRYHxqyG3ngj53aCsh47yrESsnc%2FjqTbHGEbl9F6BXe46PGiRaeCKBbxHBZZZ102demxy75qleNI86p295KoaCWKgPQn2gaK81GLcBAQw7UxeXHlBstw9YDJMYEI7FRTqIjyE1Rzg8t59aU1UCN%2BHfJAfyOa%2BTBsnNRf8ZziVvkUGxwEx6lnNp7ji8Ai8csCX%2BZjUOyftGUDsoVeJ5QoGTa%2BgALgW8i1SfvdZrpqJJCdKbSdiKVNbxk2fGFtUonAjTinaoEan3A6AUYfrOga%2FkgFDHgcYbC0P2T%2Bbdo4W4i1kuCPz6YSZVbnvdIRQZouNXBT6DblmRs%2BMkF59ljX0Kr%2BgAU4M4BgvFYnTszN20PgYWziCy3LQPU7qHWJJ9bcfhCWStnEMbtgQLi6hGkCho2FGz079KGGo3bK2bXxgU0Ts5Jg5mb2%2Fqh6kAc3fQnvZDL9%2BSqJatVp3UtORNTfg9toZG51nreJXXk3HIAGXBUhSNI3xdfW2xE09dVgcAgrUxpmZ4b44D1bU9WP3jcEKxFCQ9rCLbtW05BOEAavhI4y3aFBRwey9%2FD9P54afpPXNyTKwQohiPlWiiEhXrqgKPwza5Gzqt%2BsXX%2B4H1els8zxpzDzy9HCBjqkAYE%2BP6nMw1WcXAKa3y3mbfpclqGQ0c5XAA4sATatKw8g1fI3Uxb5KJGv%2BlqsgMmYXEwEjQZY7WImJOBj5s53NMPF1%2FXHE96tjzQQzJcr9q%2BJH2bmHoT5wd5sRJNLIa7EOlm%2BMrkZbKs4kziWdZytuiZu%2BQfte44Ch%2FbNECIuDeTz9EwKemA66eCkGJwAbLQEq9saEV9Fd4iwvKd22ykJhwPyPx7X&X-Amz-Signature=8bffb73acd53d8d06056abc86e0c5bb186b0fa158ad93ba2da895d0958ae5412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4AQCDW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOjy9aMC1b4o2d5Ea0BgzBvdccmSDDPCf3DN%2F3h%2Bh2DAIhANRMwL6M3%2Fs5ubIl8noLIAsY7K0FQQUFRxBLhxFTm7fKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0cd4B1xbgmb6nUq4q3AMImL%2FuoHFFolRdcRYHxqyG3ngj53aCsh47yrESsnc%2FjqTbHGEbl9F6BXe46PGiRaeCKBbxHBZZZ102demxy75qleNI86p295KoaCWKgPQn2gaK81GLcBAQw7UxeXHlBstw9YDJMYEI7FRTqIjyE1Rzg8t59aU1UCN%2BHfJAfyOa%2BTBsnNRf8ZziVvkUGxwEx6lnNp7ji8Ai8csCX%2BZjUOyftGUDsoVeJ5QoGTa%2BgALgW8i1SfvdZrpqJJCdKbSdiKVNbxk2fGFtUonAjTinaoEan3A6AUYfrOga%2FkgFDHgcYbC0P2T%2Bbdo4W4i1kuCPz6YSZVbnvdIRQZouNXBT6DblmRs%2BMkF59ljX0Kr%2BgAU4M4BgvFYnTszN20PgYWziCy3LQPU7qHWJJ9bcfhCWStnEMbtgQLi6hGkCho2FGz079KGGo3bK2bXxgU0Ts5Jg5mb2%2Fqh6kAc3fQnvZDL9%2BSqJatVp3UtORNTfg9toZG51nreJXXk3HIAGXBUhSNI3xdfW2xE09dVgcAgrUxpmZ4b44D1bU9WP3jcEKxFCQ9rCLbtW05BOEAavhI4y3aFBRwey9%2FD9P54afpPXNyTKwQohiPlWiiEhXrqgKPwza5Gzqt%2BsXX%2B4H1els8zxpzDzy9HCBjqkAYE%2BP6nMw1WcXAKa3y3mbfpclqGQ0c5XAA4sATatKw8g1fI3Uxb5KJGv%2BlqsgMmYXEwEjQZY7WImJOBj5s53NMPF1%2FXHE96tjzQQzJcr9q%2BJH2bmHoT5wd5sRJNLIa7EOlm%2BMrkZbKs4kziWdZytuiZu%2BQfte44Ch%2FbNECIuDeTz9EwKemA66eCkGJwAbLQEq9saEV9Fd4iwvKd22ykJhwPyPx7X&X-Amz-Signature=a08d5a09b9f9dfb31a543f0dad3f0e38740946fea3efa2842cc44524bf5b7674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4AQCDW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOjy9aMC1b4o2d5Ea0BgzBvdccmSDDPCf3DN%2F3h%2Bh2DAIhANRMwL6M3%2Fs5ubIl8noLIAsY7K0FQQUFRxBLhxFTm7fKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0cd4B1xbgmb6nUq4q3AMImL%2FuoHFFolRdcRYHxqyG3ngj53aCsh47yrESsnc%2FjqTbHGEbl9F6BXe46PGiRaeCKBbxHBZZZ102demxy75qleNI86p295KoaCWKgPQn2gaK81GLcBAQw7UxeXHlBstw9YDJMYEI7FRTqIjyE1Rzg8t59aU1UCN%2BHfJAfyOa%2BTBsnNRf8ZziVvkUGxwEx6lnNp7ji8Ai8csCX%2BZjUOyftGUDsoVeJ5QoGTa%2BgALgW8i1SfvdZrpqJJCdKbSdiKVNbxk2fGFtUonAjTinaoEan3A6AUYfrOga%2FkgFDHgcYbC0P2T%2Bbdo4W4i1kuCPz6YSZVbnvdIRQZouNXBT6DblmRs%2BMkF59ljX0Kr%2BgAU4M4BgvFYnTszN20PgYWziCy3LQPU7qHWJJ9bcfhCWStnEMbtgQLi6hGkCho2FGz079KGGo3bK2bXxgU0Ts5Jg5mb2%2Fqh6kAc3fQnvZDL9%2BSqJatVp3UtORNTfg9toZG51nreJXXk3HIAGXBUhSNI3xdfW2xE09dVgcAgrUxpmZ4b44D1bU9WP3jcEKxFCQ9rCLbtW05BOEAavhI4y3aFBRwey9%2FD9P54afpPXNyTKwQohiPlWiiEhXrqgKPwza5Gzqt%2BsXX%2B4H1els8zxpzDzy9HCBjqkAYE%2BP6nMw1WcXAKa3y3mbfpclqGQ0c5XAA4sATatKw8g1fI3Uxb5KJGv%2BlqsgMmYXEwEjQZY7WImJOBj5s53NMPF1%2FXHE96tjzQQzJcr9q%2BJH2bmHoT5wd5sRJNLIa7EOlm%2BMrkZbKs4kziWdZytuiZu%2BQfte44Ch%2FbNECIuDeTz9EwKemA66eCkGJwAbLQEq9saEV9Fd4iwvKd22ykJhwPyPx7X&X-Amz-Signature=0479f3e15f2264c9eb9c6ae1fa8b5735692f06dc34125e70d9c825bd8dfb5a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4AQCDW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOjy9aMC1b4o2d5Ea0BgzBvdccmSDDPCf3DN%2F3h%2Bh2DAIhANRMwL6M3%2Fs5ubIl8noLIAsY7K0FQQUFRxBLhxFTm7fKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0cd4B1xbgmb6nUq4q3AMImL%2FuoHFFolRdcRYHxqyG3ngj53aCsh47yrESsnc%2FjqTbHGEbl9F6BXe46PGiRaeCKBbxHBZZZ102demxy75qleNI86p295KoaCWKgPQn2gaK81GLcBAQw7UxeXHlBstw9YDJMYEI7FRTqIjyE1Rzg8t59aU1UCN%2BHfJAfyOa%2BTBsnNRf8ZziVvkUGxwEx6lnNp7ji8Ai8csCX%2BZjUOyftGUDsoVeJ5QoGTa%2BgALgW8i1SfvdZrpqJJCdKbSdiKVNbxk2fGFtUonAjTinaoEan3A6AUYfrOga%2FkgFDHgcYbC0P2T%2Bbdo4W4i1kuCPz6YSZVbnvdIRQZouNXBT6DblmRs%2BMkF59ljX0Kr%2BgAU4M4BgvFYnTszN20PgYWziCy3LQPU7qHWJJ9bcfhCWStnEMbtgQLi6hGkCho2FGz079KGGo3bK2bXxgU0Ts5Jg5mb2%2Fqh6kAc3fQnvZDL9%2BSqJatVp3UtORNTfg9toZG51nreJXXk3HIAGXBUhSNI3xdfW2xE09dVgcAgrUxpmZ4b44D1bU9WP3jcEKxFCQ9rCLbtW05BOEAavhI4y3aFBRwey9%2FD9P54afpPXNyTKwQohiPlWiiEhXrqgKPwza5Gzqt%2BsXX%2B4H1els8zxpzDzy9HCBjqkAYE%2BP6nMw1WcXAKa3y3mbfpclqGQ0c5XAA4sATatKw8g1fI3Uxb5KJGv%2BlqsgMmYXEwEjQZY7WImJOBj5s53NMPF1%2FXHE96tjzQQzJcr9q%2BJH2bmHoT5wd5sRJNLIa7EOlm%2BMrkZbKs4kziWdZytuiZu%2BQfte44Ch%2FbNECIuDeTz9EwKemA66eCkGJwAbLQEq9saEV9Fd4iwvKd22ykJhwPyPx7X&X-Amz-Signature=61162210b23b1f75739ff2118b9e6d3b1efa2430358c1af013dfacc167215388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4AQCDW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOjy9aMC1b4o2d5Ea0BgzBvdccmSDDPCf3DN%2F3h%2Bh2DAIhANRMwL6M3%2Fs5ubIl8noLIAsY7K0FQQUFRxBLhxFTm7fKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0cd4B1xbgmb6nUq4q3AMImL%2FuoHFFolRdcRYHxqyG3ngj53aCsh47yrESsnc%2FjqTbHGEbl9F6BXe46PGiRaeCKBbxHBZZZ102demxy75qleNI86p295KoaCWKgPQn2gaK81GLcBAQw7UxeXHlBstw9YDJMYEI7FRTqIjyE1Rzg8t59aU1UCN%2BHfJAfyOa%2BTBsnNRf8ZziVvkUGxwEx6lnNp7ji8Ai8csCX%2BZjUOyftGUDsoVeJ5QoGTa%2BgALgW8i1SfvdZrpqJJCdKbSdiKVNbxk2fGFtUonAjTinaoEan3A6AUYfrOga%2FkgFDHgcYbC0P2T%2Bbdo4W4i1kuCPz6YSZVbnvdIRQZouNXBT6DblmRs%2BMkF59ljX0Kr%2BgAU4M4BgvFYnTszN20PgYWziCy3LQPU7qHWJJ9bcfhCWStnEMbtgQLi6hGkCho2FGz079KGGo3bK2bXxgU0Ts5Jg5mb2%2Fqh6kAc3fQnvZDL9%2BSqJatVp3UtORNTfg9toZG51nreJXXk3HIAGXBUhSNI3xdfW2xE09dVgcAgrUxpmZ4b44D1bU9WP3jcEKxFCQ9rCLbtW05BOEAavhI4y3aFBRwey9%2FD9P54afpPXNyTKwQohiPlWiiEhXrqgKPwza5Gzqt%2BsXX%2B4H1els8zxpzDzy9HCBjqkAYE%2BP6nMw1WcXAKa3y3mbfpclqGQ0c5XAA4sATatKw8g1fI3Uxb5KJGv%2BlqsgMmYXEwEjQZY7WImJOBj5s53NMPF1%2FXHE96tjzQQzJcr9q%2BJH2bmHoT5wd5sRJNLIa7EOlm%2BMrkZbKs4kziWdZytuiZu%2BQfte44Ch%2FbNECIuDeTz9EwKemA66eCkGJwAbLQEq9saEV9Fd4iwvKd22ykJhwPyPx7X&X-Amz-Signature=1550c9b5753fcd1ea576399a3cc90b4ff236d7c26ed8b74610fa6a24fa776bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
