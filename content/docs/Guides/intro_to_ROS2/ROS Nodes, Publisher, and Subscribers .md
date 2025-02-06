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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IFISA6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICGfyqs6UBB0X1E0XijpVTuGafMbHms6xoQnnitcUjY5AiEApWm62rf89tUIaDx3zHU0fcknUCIAbdxJwAw5y0AgjJwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK0r%2FjNHO2XqfJ9%2FRCrcA22UPXj4wfeYnK5BnjH9neLpZ%2BgGsT3A5B1ozn%2B7ytswz6maj80GSuucmNXE0ArLtoTpQp8loUiaz%2FCVWeU%2B%2FK0hXSKBF%2Fx4Nm1W2SI7ni6AeQp0ieFc7FsbxTSKKrwkewkhTNyGc2JKKt5ly5rwUYj%2FS589gEgbEGtEkElUzxod85%2Bg6s3O9fCmbuQvLZvB%2BRpGUuDNzT4Czn%2F5JRZWoyPU8uD9sK%2BVt8dmR%2F92xt93VQARBT1viQTelDgosnEpiGNnJOnf3jLypykIcOPsYKe2BGcjeim7hlO1UCTtBXL9yja77I0RXEUXuPUtFNr5QKcjkGEKPIX%2BhSwHzzl%2FspK5F2MmDzzH%2FqBF1EF%2FbZVQctBe0q%2B15v%2FnbAw6f9pbc6uqau8jdqDiikjfjoxKAkSxjQ3mDNE76qZ5RcdjZTxl6zP5BbOxv4LEwFivDDPY97C3cmhjGB3ILKR48BzECdi1n7tNzmYRibdo5wnGbxKtCtO8YadVG8XWT2%2F4xWQNKOd2SPwA8usSSg%2BWCiyH8yEBr5uA4fVpfhm19D79UWWHZw0Z1KR%2F7QK%2ByNiTavSGzckZVzKce3qmJSFlXYcz%2Bj8%2B464LRlhg83FqeaCGT2%2Bb7aEemKI1VbbDqYkPMPTgkL0GOqUBSPhDIhi6hDqsuLOLHXodLeNYBXSYRx%2FOVQdyWSldXH6hD4brAkLxu9Apa7PkyEOK8mKQRUu%2FIL6mdoc%2BUaBarkaTTwwqGyCCSPU365dGf1A9UsjYye5fZIUsAIoPiWOlW1iZ5Ku14uG7YTsXLReKNk5tcd3XFQO0ChqQuSQY8WXR3AcrZQlgi13hhzt%2B3lLYFlxa8gEFjnAAsGtqGbj6RyQYCau0&X-Amz-Signature=d137fea7d43d85add830bb26d73f2608e7315e80625136c518d2e26f25394d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IFISA6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICGfyqs6UBB0X1E0XijpVTuGafMbHms6xoQnnitcUjY5AiEApWm62rf89tUIaDx3zHU0fcknUCIAbdxJwAw5y0AgjJwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK0r%2FjNHO2XqfJ9%2FRCrcA22UPXj4wfeYnK5BnjH9neLpZ%2BgGsT3A5B1ozn%2B7ytswz6maj80GSuucmNXE0ArLtoTpQp8loUiaz%2FCVWeU%2B%2FK0hXSKBF%2Fx4Nm1W2SI7ni6AeQp0ieFc7FsbxTSKKrwkewkhTNyGc2JKKt5ly5rwUYj%2FS589gEgbEGtEkElUzxod85%2Bg6s3O9fCmbuQvLZvB%2BRpGUuDNzT4Czn%2F5JRZWoyPU8uD9sK%2BVt8dmR%2F92xt93VQARBT1viQTelDgosnEpiGNnJOnf3jLypykIcOPsYKe2BGcjeim7hlO1UCTtBXL9yja77I0RXEUXuPUtFNr5QKcjkGEKPIX%2BhSwHzzl%2FspK5F2MmDzzH%2FqBF1EF%2FbZVQctBe0q%2B15v%2FnbAw6f9pbc6uqau8jdqDiikjfjoxKAkSxjQ3mDNE76qZ5RcdjZTxl6zP5BbOxv4LEwFivDDPY97C3cmhjGB3ILKR48BzECdi1n7tNzmYRibdo5wnGbxKtCtO8YadVG8XWT2%2F4xWQNKOd2SPwA8usSSg%2BWCiyH8yEBr5uA4fVpfhm19D79UWWHZw0Z1KR%2F7QK%2ByNiTavSGzckZVzKce3qmJSFlXYcz%2Bj8%2B464LRlhg83FqeaCGT2%2Bb7aEemKI1VbbDqYkPMPTgkL0GOqUBSPhDIhi6hDqsuLOLHXodLeNYBXSYRx%2FOVQdyWSldXH6hD4brAkLxu9Apa7PkyEOK8mKQRUu%2FIL6mdoc%2BUaBarkaTTwwqGyCCSPU365dGf1A9UsjYye5fZIUsAIoPiWOlW1iZ5Ku14uG7YTsXLReKNk5tcd3XFQO0ChqQuSQY8WXR3AcrZQlgi13hhzt%2B3lLYFlxa8gEFjnAAsGtqGbj6RyQYCau0&X-Amz-Signature=c76a66bc822811991237426d310cf65f29f96a85566b0004258fc77019436bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IFISA6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICGfyqs6UBB0X1E0XijpVTuGafMbHms6xoQnnitcUjY5AiEApWm62rf89tUIaDx3zHU0fcknUCIAbdxJwAw5y0AgjJwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK0r%2FjNHO2XqfJ9%2FRCrcA22UPXj4wfeYnK5BnjH9neLpZ%2BgGsT3A5B1ozn%2B7ytswz6maj80GSuucmNXE0ArLtoTpQp8loUiaz%2FCVWeU%2B%2FK0hXSKBF%2Fx4Nm1W2SI7ni6AeQp0ieFc7FsbxTSKKrwkewkhTNyGc2JKKt5ly5rwUYj%2FS589gEgbEGtEkElUzxod85%2Bg6s3O9fCmbuQvLZvB%2BRpGUuDNzT4Czn%2F5JRZWoyPU8uD9sK%2BVt8dmR%2F92xt93VQARBT1viQTelDgosnEpiGNnJOnf3jLypykIcOPsYKe2BGcjeim7hlO1UCTtBXL9yja77I0RXEUXuPUtFNr5QKcjkGEKPIX%2BhSwHzzl%2FspK5F2MmDzzH%2FqBF1EF%2FbZVQctBe0q%2B15v%2FnbAw6f9pbc6uqau8jdqDiikjfjoxKAkSxjQ3mDNE76qZ5RcdjZTxl6zP5BbOxv4LEwFivDDPY97C3cmhjGB3ILKR48BzECdi1n7tNzmYRibdo5wnGbxKtCtO8YadVG8XWT2%2F4xWQNKOd2SPwA8usSSg%2BWCiyH8yEBr5uA4fVpfhm19D79UWWHZw0Z1KR%2F7QK%2ByNiTavSGzckZVzKce3qmJSFlXYcz%2Bj8%2B464LRlhg83FqeaCGT2%2Bb7aEemKI1VbbDqYkPMPTgkL0GOqUBSPhDIhi6hDqsuLOLHXodLeNYBXSYRx%2FOVQdyWSldXH6hD4brAkLxu9Apa7PkyEOK8mKQRUu%2FIL6mdoc%2BUaBarkaTTwwqGyCCSPU365dGf1A9UsjYye5fZIUsAIoPiWOlW1iZ5Ku14uG7YTsXLReKNk5tcd3XFQO0ChqQuSQY8WXR3AcrZQlgi13hhzt%2B3lLYFlxa8gEFjnAAsGtqGbj6RyQYCau0&X-Amz-Signature=2317cbcea35b726e89e83e89edb521bc2b86b1821b89ca88b9b753b5a093b6d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IFISA6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICGfyqs6UBB0X1E0XijpVTuGafMbHms6xoQnnitcUjY5AiEApWm62rf89tUIaDx3zHU0fcknUCIAbdxJwAw5y0AgjJwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK0r%2FjNHO2XqfJ9%2FRCrcA22UPXj4wfeYnK5BnjH9neLpZ%2BgGsT3A5B1ozn%2B7ytswz6maj80GSuucmNXE0ArLtoTpQp8loUiaz%2FCVWeU%2B%2FK0hXSKBF%2Fx4Nm1W2SI7ni6AeQp0ieFc7FsbxTSKKrwkewkhTNyGc2JKKt5ly5rwUYj%2FS589gEgbEGtEkElUzxod85%2Bg6s3O9fCmbuQvLZvB%2BRpGUuDNzT4Czn%2F5JRZWoyPU8uD9sK%2BVt8dmR%2F92xt93VQARBT1viQTelDgosnEpiGNnJOnf3jLypykIcOPsYKe2BGcjeim7hlO1UCTtBXL9yja77I0RXEUXuPUtFNr5QKcjkGEKPIX%2BhSwHzzl%2FspK5F2MmDzzH%2FqBF1EF%2FbZVQctBe0q%2B15v%2FnbAw6f9pbc6uqau8jdqDiikjfjoxKAkSxjQ3mDNE76qZ5RcdjZTxl6zP5BbOxv4LEwFivDDPY97C3cmhjGB3ILKR48BzECdi1n7tNzmYRibdo5wnGbxKtCtO8YadVG8XWT2%2F4xWQNKOd2SPwA8usSSg%2BWCiyH8yEBr5uA4fVpfhm19D79UWWHZw0Z1KR%2F7QK%2ByNiTavSGzckZVzKce3qmJSFlXYcz%2Bj8%2B464LRlhg83FqeaCGT2%2Bb7aEemKI1VbbDqYkPMPTgkL0GOqUBSPhDIhi6hDqsuLOLHXodLeNYBXSYRx%2FOVQdyWSldXH6hD4brAkLxu9Apa7PkyEOK8mKQRUu%2FIL6mdoc%2BUaBarkaTTwwqGyCCSPU365dGf1A9UsjYye5fZIUsAIoPiWOlW1iZ5Ku14uG7YTsXLReKNk5tcd3XFQO0ChqQuSQY8WXR3AcrZQlgi13hhzt%2B3lLYFlxa8gEFjnAAsGtqGbj6RyQYCau0&X-Amz-Signature=b0c4e9a3fc500cda4cb25ad8c16949ce56442830855b5fee19f2c16dbcfb43cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IFISA6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICGfyqs6UBB0X1E0XijpVTuGafMbHms6xoQnnitcUjY5AiEApWm62rf89tUIaDx3zHU0fcknUCIAbdxJwAw5y0AgjJwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK0r%2FjNHO2XqfJ9%2FRCrcA22UPXj4wfeYnK5BnjH9neLpZ%2BgGsT3A5B1ozn%2B7ytswz6maj80GSuucmNXE0ArLtoTpQp8loUiaz%2FCVWeU%2B%2FK0hXSKBF%2Fx4Nm1W2SI7ni6AeQp0ieFc7FsbxTSKKrwkewkhTNyGc2JKKt5ly5rwUYj%2FS589gEgbEGtEkElUzxod85%2Bg6s3O9fCmbuQvLZvB%2BRpGUuDNzT4Czn%2F5JRZWoyPU8uD9sK%2BVt8dmR%2F92xt93VQARBT1viQTelDgosnEpiGNnJOnf3jLypykIcOPsYKe2BGcjeim7hlO1UCTtBXL9yja77I0RXEUXuPUtFNr5QKcjkGEKPIX%2BhSwHzzl%2FspK5F2MmDzzH%2FqBF1EF%2FbZVQctBe0q%2B15v%2FnbAw6f9pbc6uqau8jdqDiikjfjoxKAkSxjQ3mDNE76qZ5RcdjZTxl6zP5BbOxv4LEwFivDDPY97C3cmhjGB3ILKR48BzECdi1n7tNzmYRibdo5wnGbxKtCtO8YadVG8XWT2%2F4xWQNKOd2SPwA8usSSg%2BWCiyH8yEBr5uA4fVpfhm19D79UWWHZw0Z1KR%2F7QK%2ByNiTavSGzckZVzKce3qmJSFlXYcz%2Bj8%2B464LRlhg83FqeaCGT2%2Bb7aEemKI1VbbDqYkPMPTgkL0GOqUBSPhDIhi6hDqsuLOLHXodLeNYBXSYRx%2FOVQdyWSldXH6hD4brAkLxu9Apa7PkyEOK8mKQRUu%2FIL6mdoc%2BUaBarkaTTwwqGyCCSPU365dGf1A9UsjYye5fZIUsAIoPiWOlW1iZ5Ku14uG7YTsXLReKNk5tcd3XFQO0ChqQuSQY8WXR3AcrZQlgi13hhzt%2B3lLYFlxa8gEFjnAAsGtqGbj6RyQYCau0&X-Amz-Signature=76cacf0292a38db656dc798bbec16fbce0ce08b049bfc0a6f30922ebf75678a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IFISA6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICGfyqs6UBB0X1E0XijpVTuGafMbHms6xoQnnitcUjY5AiEApWm62rf89tUIaDx3zHU0fcknUCIAbdxJwAw5y0AgjJwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK0r%2FjNHO2XqfJ9%2FRCrcA22UPXj4wfeYnK5BnjH9neLpZ%2BgGsT3A5B1ozn%2B7ytswz6maj80GSuucmNXE0ArLtoTpQp8loUiaz%2FCVWeU%2B%2FK0hXSKBF%2Fx4Nm1W2SI7ni6AeQp0ieFc7FsbxTSKKrwkewkhTNyGc2JKKt5ly5rwUYj%2FS589gEgbEGtEkElUzxod85%2Bg6s3O9fCmbuQvLZvB%2BRpGUuDNzT4Czn%2F5JRZWoyPU8uD9sK%2BVt8dmR%2F92xt93VQARBT1viQTelDgosnEpiGNnJOnf3jLypykIcOPsYKe2BGcjeim7hlO1UCTtBXL9yja77I0RXEUXuPUtFNr5QKcjkGEKPIX%2BhSwHzzl%2FspK5F2MmDzzH%2FqBF1EF%2FbZVQctBe0q%2B15v%2FnbAw6f9pbc6uqau8jdqDiikjfjoxKAkSxjQ3mDNE76qZ5RcdjZTxl6zP5BbOxv4LEwFivDDPY97C3cmhjGB3ILKR48BzECdi1n7tNzmYRibdo5wnGbxKtCtO8YadVG8XWT2%2F4xWQNKOd2SPwA8usSSg%2BWCiyH8yEBr5uA4fVpfhm19D79UWWHZw0Z1KR%2F7QK%2ByNiTavSGzckZVzKce3qmJSFlXYcz%2Bj8%2B464LRlhg83FqeaCGT2%2Bb7aEemKI1VbbDqYkPMPTgkL0GOqUBSPhDIhi6hDqsuLOLHXodLeNYBXSYRx%2FOVQdyWSldXH6hD4brAkLxu9Apa7PkyEOK8mKQRUu%2FIL6mdoc%2BUaBarkaTTwwqGyCCSPU365dGf1A9UsjYye5fZIUsAIoPiWOlW1iZ5Ku14uG7YTsXLReKNk5tcd3XFQO0ChqQuSQY8WXR3AcrZQlgi13hhzt%2B3lLYFlxa8gEFjnAAsGtqGbj6RyQYCau0&X-Amz-Signature=18f441cb867fe6c09f2195287d627818419efb84f74cf2c4687e8419cb9e67e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IFISA6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICGfyqs6UBB0X1E0XijpVTuGafMbHms6xoQnnitcUjY5AiEApWm62rf89tUIaDx3zHU0fcknUCIAbdxJwAw5y0AgjJwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK0r%2FjNHO2XqfJ9%2FRCrcA22UPXj4wfeYnK5BnjH9neLpZ%2BgGsT3A5B1ozn%2B7ytswz6maj80GSuucmNXE0ArLtoTpQp8loUiaz%2FCVWeU%2B%2FK0hXSKBF%2Fx4Nm1W2SI7ni6AeQp0ieFc7FsbxTSKKrwkewkhTNyGc2JKKt5ly5rwUYj%2FS589gEgbEGtEkElUzxod85%2Bg6s3O9fCmbuQvLZvB%2BRpGUuDNzT4Czn%2F5JRZWoyPU8uD9sK%2BVt8dmR%2F92xt93VQARBT1viQTelDgosnEpiGNnJOnf3jLypykIcOPsYKe2BGcjeim7hlO1UCTtBXL9yja77I0RXEUXuPUtFNr5QKcjkGEKPIX%2BhSwHzzl%2FspK5F2MmDzzH%2FqBF1EF%2FbZVQctBe0q%2B15v%2FnbAw6f9pbc6uqau8jdqDiikjfjoxKAkSxjQ3mDNE76qZ5RcdjZTxl6zP5BbOxv4LEwFivDDPY97C3cmhjGB3ILKR48BzECdi1n7tNzmYRibdo5wnGbxKtCtO8YadVG8XWT2%2F4xWQNKOd2SPwA8usSSg%2BWCiyH8yEBr5uA4fVpfhm19D79UWWHZw0Z1KR%2F7QK%2ByNiTavSGzckZVzKce3qmJSFlXYcz%2Bj8%2B464LRlhg83FqeaCGT2%2Bb7aEemKI1VbbDqYkPMPTgkL0GOqUBSPhDIhi6hDqsuLOLHXodLeNYBXSYRx%2FOVQdyWSldXH6hD4brAkLxu9Apa7PkyEOK8mKQRUu%2FIL6mdoc%2BUaBarkaTTwwqGyCCSPU365dGf1A9UsjYye5fZIUsAIoPiWOlW1iZ5Ku14uG7YTsXLReKNk5tcd3XFQO0ChqQuSQY8WXR3AcrZQlgi13hhzt%2B3lLYFlxa8gEFjnAAsGtqGbj6RyQYCau0&X-Amz-Signature=d678d271bf331eb93bfa6947a8719e446c43d9cbac9010f3fabf11ed9839b1b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IFISA6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICGfyqs6UBB0X1E0XijpVTuGafMbHms6xoQnnitcUjY5AiEApWm62rf89tUIaDx3zHU0fcknUCIAbdxJwAw5y0AgjJwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK0r%2FjNHO2XqfJ9%2FRCrcA22UPXj4wfeYnK5BnjH9neLpZ%2BgGsT3A5B1ozn%2B7ytswz6maj80GSuucmNXE0ArLtoTpQp8loUiaz%2FCVWeU%2B%2FK0hXSKBF%2Fx4Nm1W2SI7ni6AeQp0ieFc7FsbxTSKKrwkewkhTNyGc2JKKt5ly5rwUYj%2FS589gEgbEGtEkElUzxod85%2Bg6s3O9fCmbuQvLZvB%2BRpGUuDNzT4Czn%2F5JRZWoyPU8uD9sK%2BVt8dmR%2F92xt93VQARBT1viQTelDgosnEpiGNnJOnf3jLypykIcOPsYKe2BGcjeim7hlO1UCTtBXL9yja77I0RXEUXuPUtFNr5QKcjkGEKPIX%2BhSwHzzl%2FspK5F2MmDzzH%2FqBF1EF%2FbZVQctBe0q%2B15v%2FnbAw6f9pbc6uqau8jdqDiikjfjoxKAkSxjQ3mDNE76qZ5RcdjZTxl6zP5BbOxv4LEwFivDDPY97C3cmhjGB3ILKR48BzECdi1n7tNzmYRibdo5wnGbxKtCtO8YadVG8XWT2%2F4xWQNKOd2SPwA8usSSg%2BWCiyH8yEBr5uA4fVpfhm19D79UWWHZw0Z1KR%2F7QK%2ByNiTavSGzckZVzKce3qmJSFlXYcz%2Bj8%2B464LRlhg83FqeaCGT2%2Bb7aEemKI1VbbDqYkPMPTgkL0GOqUBSPhDIhi6hDqsuLOLHXodLeNYBXSYRx%2FOVQdyWSldXH6hD4brAkLxu9Apa7PkyEOK8mKQRUu%2FIL6mdoc%2BUaBarkaTTwwqGyCCSPU365dGf1A9UsjYye5fZIUsAIoPiWOlW1iZ5Ku14uG7YTsXLReKNk5tcd3XFQO0ChqQuSQY8WXR3AcrZQlgi13hhzt%2B3lLYFlxa8gEFjnAAsGtqGbj6RyQYCau0&X-Amz-Signature=11ef274b9a83f2ab986aba6d69e9bb62ee2446a294c8c0a1ee37f5e192792045&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
