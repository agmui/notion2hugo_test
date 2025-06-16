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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQVW542%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDSVMrROn9srrGYm3Xr4hty5AdautXjABeXY0PKJ0FBdwIhANElcMzfbPKlpYf0VMCFfqcqLTAGr21omrVk5Jacd7eoKv8DCF8QABoMNjM3NDIzMTgzODA1IgxG%2BzYUatq4U1f5md4q3ANGKIiiiHLtIdIVQvpbb7xaCqiL6st0yGGtwYsN58oySNMggdX%2FvpywXtsK0epsdN%2BXHYpiPiNdbaV8LCukCf2weGUTYiAAbmOpr5BHOv7QOChVgvififDsft8O5s%2BmGOr3d4XxIDrU8XHxyp9o2Rl7XelGp4dO%2Be%2FDlZ4Iua0HLJYnq%2FMSPzsHzKdL0o0AYWXD9fniegver3ObUyLCzCNSK6yzdMY0mGg1QI8CFDzurXnn5M7DU8SINkSbEviv2XQeTBfM54ePOPcIFR3lTW5J0GbnMiJYhFDGonaga7aXm2UXrM6tykFuH9XnoGjp7WvxYpBUH099B67HAeEmE6oClU%2FfO3rk0C%2B5234p%2BlV4y77j%2BqJ9LFamQN%2FnkMvr3gD%2B%2FCHXvp6XujJ4PY43KlqQwUnX7Gf3svWUUrihq%2BOJPBnxZ80eisKm1eVIaOieTRaESpR3Pm0OPFonRopmt%2Bs18JHYlKQHlh47bW4XZ6Vhx7qB5Eu4AT3H2G2XVA9dQ9s%2Bu8c6zEkzLqiSY1aWKBXIB8ef9bq5cK4MPfFqPVDghOEPeEr%2BzA7rp4mK5tTpi0XK6EKGSKH%2F2zhA33zG1jmo%2FjMjD3Z1FUKy8zeRGXmIUGx9Oo5PkD5qCDgSkTDfyMDCBjqkAefxOryTzWbO1Kt13J5Jt7C6gZg52FhSUpKrBHdZ5mM6V7D%2FUBnzQHL2G%2BjiiOJYA%2FOlZRZDC13OK1sqYkkJw0sYe1aMMzlK2RQR7j%2FkiZTRhFA3SGyci6jNpwU4jhzPlNTIN8K7CIMPhJbSaGb%2BqRJL%2FercfLR0og8ra8Vdd4sbPs4lMg3qAPh28JZzwf9c4XrL%2FySCj85cLhKw4Oqu46t49%2Bnp&X-Amz-Signature=c39609ad534e5ab17688e95919561426950c5b2a6a9a1cd0f97f810c2242788d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQVW542%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDSVMrROn9srrGYm3Xr4hty5AdautXjABeXY0PKJ0FBdwIhANElcMzfbPKlpYf0VMCFfqcqLTAGr21omrVk5Jacd7eoKv8DCF8QABoMNjM3NDIzMTgzODA1IgxG%2BzYUatq4U1f5md4q3ANGKIiiiHLtIdIVQvpbb7xaCqiL6st0yGGtwYsN58oySNMggdX%2FvpywXtsK0epsdN%2BXHYpiPiNdbaV8LCukCf2weGUTYiAAbmOpr5BHOv7QOChVgvififDsft8O5s%2BmGOr3d4XxIDrU8XHxyp9o2Rl7XelGp4dO%2Be%2FDlZ4Iua0HLJYnq%2FMSPzsHzKdL0o0AYWXD9fniegver3ObUyLCzCNSK6yzdMY0mGg1QI8CFDzurXnn5M7DU8SINkSbEviv2XQeTBfM54ePOPcIFR3lTW5J0GbnMiJYhFDGonaga7aXm2UXrM6tykFuH9XnoGjp7WvxYpBUH099B67HAeEmE6oClU%2FfO3rk0C%2B5234p%2BlV4y77j%2BqJ9LFamQN%2FnkMvr3gD%2B%2FCHXvp6XujJ4PY43KlqQwUnX7Gf3svWUUrihq%2BOJPBnxZ80eisKm1eVIaOieTRaESpR3Pm0OPFonRopmt%2Bs18JHYlKQHlh47bW4XZ6Vhx7qB5Eu4AT3H2G2XVA9dQ9s%2Bu8c6zEkzLqiSY1aWKBXIB8ef9bq5cK4MPfFqPVDghOEPeEr%2BzA7rp4mK5tTpi0XK6EKGSKH%2F2zhA33zG1jmo%2FjMjD3Z1FUKy8zeRGXmIUGx9Oo5PkD5qCDgSkTDfyMDCBjqkAefxOryTzWbO1Kt13J5Jt7C6gZg52FhSUpKrBHdZ5mM6V7D%2FUBnzQHL2G%2BjiiOJYA%2FOlZRZDC13OK1sqYkkJw0sYe1aMMzlK2RQR7j%2FkiZTRhFA3SGyci6jNpwU4jhzPlNTIN8K7CIMPhJbSaGb%2BqRJL%2FercfLR0og8ra8Vdd4sbPs4lMg3qAPh28JZzwf9c4XrL%2FySCj85cLhKw4Oqu46t49%2Bnp&X-Amz-Signature=b30b07d46c93b581eba3d45638aca3640b926a2141d236ae3abc0d4902470a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQVW542%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDSVMrROn9srrGYm3Xr4hty5AdautXjABeXY0PKJ0FBdwIhANElcMzfbPKlpYf0VMCFfqcqLTAGr21omrVk5Jacd7eoKv8DCF8QABoMNjM3NDIzMTgzODA1IgxG%2BzYUatq4U1f5md4q3ANGKIiiiHLtIdIVQvpbb7xaCqiL6st0yGGtwYsN58oySNMggdX%2FvpywXtsK0epsdN%2BXHYpiPiNdbaV8LCukCf2weGUTYiAAbmOpr5BHOv7QOChVgvififDsft8O5s%2BmGOr3d4XxIDrU8XHxyp9o2Rl7XelGp4dO%2Be%2FDlZ4Iua0HLJYnq%2FMSPzsHzKdL0o0AYWXD9fniegver3ObUyLCzCNSK6yzdMY0mGg1QI8CFDzurXnn5M7DU8SINkSbEviv2XQeTBfM54ePOPcIFR3lTW5J0GbnMiJYhFDGonaga7aXm2UXrM6tykFuH9XnoGjp7WvxYpBUH099B67HAeEmE6oClU%2FfO3rk0C%2B5234p%2BlV4y77j%2BqJ9LFamQN%2FnkMvr3gD%2B%2FCHXvp6XujJ4PY43KlqQwUnX7Gf3svWUUrihq%2BOJPBnxZ80eisKm1eVIaOieTRaESpR3Pm0OPFonRopmt%2Bs18JHYlKQHlh47bW4XZ6Vhx7qB5Eu4AT3H2G2XVA9dQ9s%2Bu8c6zEkzLqiSY1aWKBXIB8ef9bq5cK4MPfFqPVDghOEPeEr%2BzA7rp4mK5tTpi0XK6EKGSKH%2F2zhA33zG1jmo%2FjMjD3Z1FUKy8zeRGXmIUGx9Oo5PkD5qCDgSkTDfyMDCBjqkAefxOryTzWbO1Kt13J5Jt7C6gZg52FhSUpKrBHdZ5mM6V7D%2FUBnzQHL2G%2BjiiOJYA%2FOlZRZDC13OK1sqYkkJw0sYe1aMMzlK2RQR7j%2FkiZTRhFA3SGyci6jNpwU4jhzPlNTIN8K7CIMPhJbSaGb%2BqRJL%2FercfLR0og8ra8Vdd4sbPs4lMg3qAPh28JZzwf9c4XrL%2FySCj85cLhKw4Oqu46t49%2Bnp&X-Amz-Signature=c24db6e55c81b80b4fcf4b3efc8758d538a3b964336953d3fc367993d0d35b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQVW542%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDSVMrROn9srrGYm3Xr4hty5AdautXjABeXY0PKJ0FBdwIhANElcMzfbPKlpYf0VMCFfqcqLTAGr21omrVk5Jacd7eoKv8DCF8QABoMNjM3NDIzMTgzODA1IgxG%2BzYUatq4U1f5md4q3ANGKIiiiHLtIdIVQvpbb7xaCqiL6st0yGGtwYsN58oySNMggdX%2FvpywXtsK0epsdN%2BXHYpiPiNdbaV8LCukCf2weGUTYiAAbmOpr5BHOv7QOChVgvififDsft8O5s%2BmGOr3d4XxIDrU8XHxyp9o2Rl7XelGp4dO%2Be%2FDlZ4Iua0HLJYnq%2FMSPzsHzKdL0o0AYWXD9fniegver3ObUyLCzCNSK6yzdMY0mGg1QI8CFDzurXnn5M7DU8SINkSbEviv2XQeTBfM54ePOPcIFR3lTW5J0GbnMiJYhFDGonaga7aXm2UXrM6tykFuH9XnoGjp7WvxYpBUH099B67HAeEmE6oClU%2FfO3rk0C%2B5234p%2BlV4y77j%2BqJ9LFamQN%2FnkMvr3gD%2B%2FCHXvp6XujJ4PY43KlqQwUnX7Gf3svWUUrihq%2BOJPBnxZ80eisKm1eVIaOieTRaESpR3Pm0OPFonRopmt%2Bs18JHYlKQHlh47bW4XZ6Vhx7qB5Eu4AT3H2G2XVA9dQ9s%2Bu8c6zEkzLqiSY1aWKBXIB8ef9bq5cK4MPfFqPVDghOEPeEr%2BzA7rp4mK5tTpi0XK6EKGSKH%2F2zhA33zG1jmo%2FjMjD3Z1FUKy8zeRGXmIUGx9Oo5PkD5qCDgSkTDfyMDCBjqkAefxOryTzWbO1Kt13J5Jt7C6gZg52FhSUpKrBHdZ5mM6V7D%2FUBnzQHL2G%2BjiiOJYA%2FOlZRZDC13OK1sqYkkJw0sYe1aMMzlK2RQR7j%2FkiZTRhFA3SGyci6jNpwU4jhzPlNTIN8K7CIMPhJbSaGb%2BqRJL%2FercfLR0og8ra8Vdd4sbPs4lMg3qAPh28JZzwf9c4XrL%2FySCj85cLhKw4Oqu46t49%2Bnp&X-Amz-Signature=6c1102f5823f007ccde80b45742b99d212914f0ffb53dfab6309587a4d37c4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQVW542%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDSVMrROn9srrGYm3Xr4hty5AdautXjABeXY0PKJ0FBdwIhANElcMzfbPKlpYf0VMCFfqcqLTAGr21omrVk5Jacd7eoKv8DCF8QABoMNjM3NDIzMTgzODA1IgxG%2BzYUatq4U1f5md4q3ANGKIiiiHLtIdIVQvpbb7xaCqiL6st0yGGtwYsN58oySNMggdX%2FvpywXtsK0epsdN%2BXHYpiPiNdbaV8LCukCf2weGUTYiAAbmOpr5BHOv7QOChVgvififDsft8O5s%2BmGOr3d4XxIDrU8XHxyp9o2Rl7XelGp4dO%2Be%2FDlZ4Iua0HLJYnq%2FMSPzsHzKdL0o0AYWXD9fniegver3ObUyLCzCNSK6yzdMY0mGg1QI8CFDzurXnn5M7DU8SINkSbEviv2XQeTBfM54ePOPcIFR3lTW5J0GbnMiJYhFDGonaga7aXm2UXrM6tykFuH9XnoGjp7WvxYpBUH099B67HAeEmE6oClU%2FfO3rk0C%2B5234p%2BlV4y77j%2BqJ9LFamQN%2FnkMvr3gD%2B%2FCHXvp6XujJ4PY43KlqQwUnX7Gf3svWUUrihq%2BOJPBnxZ80eisKm1eVIaOieTRaESpR3Pm0OPFonRopmt%2Bs18JHYlKQHlh47bW4XZ6Vhx7qB5Eu4AT3H2G2XVA9dQ9s%2Bu8c6zEkzLqiSY1aWKBXIB8ef9bq5cK4MPfFqPVDghOEPeEr%2BzA7rp4mK5tTpi0XK6EKGSKH%2F2zhA33zG1jmo%2FjMjD3Z1FUKy8zeRGXmIUGx9Oo5PkD5qCDgSkTDfyMDCBjqkAefxOryTzWbO1Kt13J5Jt7C6gZg52FhSUpKrBHdZ5mM6V7D%2FUBnzQHL2G%2BjiiOJYA%2FOlZRZDC13OK1sqYkkJw0sYe1aMMzlK2RQR7j%2FkiZTRhFA3SGyci6jNpwU4jhzPlNTIN8K7CIMPhJbSaGb%2BqRJL%2FercfLR0og8ra8Vdd4sbPs4lMg3qAPh28JZzwf9c4XrL%2FySCj85cLhKw4Oqu46t49%2Bnp&X-Amz-Signature=8e98ec5c886853aef11f7a304777d1175c954907bd0326095ad4726ee9f328fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQVW542%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDSVMrROn9srrGYm3Xr4hty5AdautXjABeXY0PKJ0FBdwIhANElcMzfbPKlpYf0VMCFfqcqLTAGr21omrVk5Jacd7eoKv8DCF8QABoMNjM3NDIzMTgzODA1IgxG%2BzYUatq4U1f5md4q3ANGKIiiiHLtIdIVQvpbb7xaCqiL6st0yGGtwYsN58oySNMggdX%2FvpywXtsK0epsdN%2BXHYpiPiNdbaV8LCukCf2weGUTYiAAbmOpr5BHOv7QOChVgvififDsft8O5s%2BmGOr3d4XxIDrU8XHxyp9o2Rl7XelGp4dO%2Be%2FDlZ4Iua0HLJYnq%2FMSPzsHzKdL0o0AYWXD9fniegver3ObUyLCzCNSK6yzdMY0mGg1QI8CFDzurXnn5M7DU8SINkSbEviv2XQeTBfM54ePOPcIFR3lTW5J0GbnMiJYhFDGonaga7aXm2UXrM6tykFuH9XnoGjp7WvxYpBUH099B67HAeEmE6oClU%2FfO3rk0C%2B5234p%2BlV4y77j%2BqJ9LFamQN%2FnkMvr3gD%2B%2FCHXvp6XujJ4PY43KlqQwUnX7Gf3svWUUrihq%2BOJPBnxZ80eisKm1eVIaOieTRaESpR3Pm0OPFonRopmt%2Bs18JHYlKQHlh47bW4XZ6Vhx7qB5Eu4AT3H2G2XVA9dQ9s%2Bu8c6zEkzLqiSY1aWKBXIB8ef9bq5cK4MPfFqPVDghOEPeEr%2BzA7rp4mK5tTpi0XK6EKGSKH%2F2zhA33zG1jmo%2FjMjD3Z1FUKy8zeRGXmIUGx9Oo5PkD5qCDgSkTDfyMDCBjqkAefxOryTzWbO1Kt13J5Jt7C6gZg52FhSUpKrBHdZ5mM6V7D%2FUBnzQHL2G%2BjiiOJYA%2FOlZRZDC13OK1sqYkkJw0sYe1aMMzlK2RQR7j%2FkiZTRhFA3SGyci6jNpwU4jhzPlNTIN8K7CIMPhJbSaGb%2BqRJL%2FercfLR0og8ra8Vdd4sbPs4lMg3qAPh28JZzwf9c4XrL%2FySCj85cLhKw4Oqu46t49%2Bnp&X-Amz-Signature=546d4a835ffaadf0140e51b16d75aaa8a676e700dbe2c352d44cb9344e1e7d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQVW542%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDSVMrROn9srrGYm3Xr4hty5AdautXjABeXY0PKJ0FBdwIhANElcMzfbPKlpYf0VMCFfqcqLTAGr21omrVk5Jacd7eoKv8DCF8QABoMNjM3NDIzMTgzODA1IgxG%2BzYUatq4U1f5md4q3ANGKIiiiHLtIdIVQvpbb7xaCqiL6st0yGGtwYsN58oySNMggdX%2FvpywXtsK0epsdN%2BXHYpiPiNdbaV8LCukCf2weGUTYiAAbmOpr5BHOv7QOChVgvififDsft8O5s%2BmGOr3d4XxIDrU8XHxyp9o2Rl7XelGp4dO%2Be%2FDlZ4Iua0HLJYnq%2FMSPzsHzKdL0o0AYWXD9fniegver3ObUyLCzCNSK6yzdMY0mGg1QI8CFDzurXnn5M7DU8SINkSbEviv2XQeTBfM54ePOPcIFR3lTW5J0GbnMiJYhFDGonaga7aXm2UXrM6tykFuH9XnoGjp7WvxYpBUH099B67HAeEmE6oClU%2FfO3rk0C%2B5234p%2BlV4y77j%2BqJ9LFamQN%2FnkMvr3gD%2B%2FCHXvp6XujJ4PY43KlqQwUnX7Gf3svWUUrihq%2BOJPBnxZ80eisKm1eVIaOieTRaESpR3Pm0OPFonRopmt%2Bs18JHYlKQHlh47bW4XZ6Vhx7qB5Eu4AT3H2G2XVA9dQ9s%2Bu8c6zEkzLqiSY1aWKBXIB8ef9bq5cK4MPfFqPVDghOEPeEr%2BzA7rp4mK5tTpi0XK6EKGSKH%2F2zhA33zG1jmo%2FjMjD3Z1FUKy8zeRGXmIUGx9Oo5PkD5qCDgSkTDfyMDCBjqkAefxOryTzWbO1Kt13J5Jt7C6gZg52FhSUpKrBHdZ5mM6V7D%2FUBnzQHL2G%2BjiiOJYA%2FOlZRZDC13OK1sqYkkJw0sYe1aMMzlK2RQR7j%2FkiZTRhFA3SGyci6jNpwU4jhzPlNTIN8K7CIMPhJbSaGb%2BqRJL%2FercfLR0og8ra8Vdd4sbPs4lMg3qAPh28JZzwf9c4XrL%2FySCj85cLhKw4Oqu46t49%2Bnp&X-Amz-Signature=1d3598499b7bc0069c82dc149e360d6e6b3ec2fa86761d43dad91df00bcf7c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQVW542%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDSVMrROn9srrGYm3Xr4hty5AdautXjABeXY0PKJ0FBdwIhANElcMzfbPKlpYf0VMCFfqcqLTAGr21omrVk5Jacd7eoKv8DCF8QABoMNjM3NDIzMTgzODA1IgxG%2BzYUatq4U1f5md4q3ANGKIiiiHLtIdIVQvpbb7xaCqiL6st0yGGtwYsN58oySNMggdX%2FvpywXtsK0epsdN%2BXHYpiPiNdbaV8LCukCf2weGUTYiAAbmOpr5BHOv7QOChVgvififDsft8O5s%2BmGOr3d4XxIDrU8XHxyp9o2Rl7XelGp4dO%2Be%2FDlZ4Iua0HLJYnq%2FMSPzsHzKdL0o0AYWXD9fniegver3ObUyLCzCNSK6yzdMY0mGg1QI8CFDzurXnn5M7DU8SINkSbEviv2XQeTBfM54ePOPcIFR3lTW5J0GbnMiJYhFDGonaga7aXm2UXrM6tykFuH9XnoGjp7WvxYpBUH099B67HAeEmE6oClU%2FfO3rk0C%2B5234p%2BlV4y77j%2BqJ9LFamQN%2FnkMvr3gD%2B%2FCHXvp6XujJ4PY43KlqQwUnX7Gf3svWUUrihq%2BOJPBnxZ80eisKm1eVIaOieTRaESpR3Pm0OPFonRopmt%2Bs18JHYlKQHlh47bW4XZ6Vhx7qB5Eu4AT3H2G2XVA9dQ9s%2Bu8c6zEkzLqiSY1aWKBXIB8ef9bq5cK4MPfFqPVDghOEPeEr%2BzA7rp4mK5tTpi0XK6EKGSKH%2F2zhA33zG1jmo%2FjMjD3Z1FUKy8zeRGXmIUGx9Oo5PkD5qCDgSkTDfyMDCBjqkAefxOryTzWbO1Kt13J5Jt7C6gZg52FhSUpKrBHdZ5mM6V7D%2FUBnzQHL2G%2BjiiOJYA%2FOlZRZDC13OK1sqYkkJw0sYe1aMMzlK2RQR7j%2FkiZTRhFA3SGyci6jNpwU4jhzPlNTIN8K7CIMPhJbSaGb%2BqRJL%2FercfLR0og8ra8Vdd4sbPs4lMg3qAPh28JZzwf9c4XrL%2FySCj85cLhKw4Oqu46t49%2Bnp&X-Amz-Signature=ec973ac9f360022e667a10c4397b36bb319a122d827838c77bb0c2cfbd3ac4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
