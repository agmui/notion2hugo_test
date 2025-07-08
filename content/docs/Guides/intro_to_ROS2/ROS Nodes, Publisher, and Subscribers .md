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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDD5WIV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDneHNqpIwIqWSkzGWTB940bmDkLC5G4jBxF7NvKIpKAQIhAJ5Ffom9KA2fsnfQuTAFVq9rxAnVNsW2STW49PZXXLVZKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Br8pdslhWZTcoxfQq3AMbSQVZji3riBN0XgZsiFirOae4wG7klaC99jviFsExKwBQlIg9qhn5aT926H4Sag3sI3SiaNdySlCBAJNWySbt%2BG%2BzIceAzcgENBPUIop14GtAA4WQ%2FQH88ufdz3jgXX64UTKQEiIJKkpMUvM%2BcmEU1%2FIk8OyWigzPfNsBQWhsfHUglr8vu1IeP4ofZpA2mhJwnFHESYefD5TmqkAfGr3BD0Ch2BgdUJh%2FI4exTsbzpXnXONDBQaX933Gc6Fa136wiZsaoGDoe5wapJ8TbmNC1TFy%2F2rJqmLyZxtonF2HWRBvGDfmMcdUZ2rgoUb6rG7FyyNvg36AjRX6ezJBju9buslgOPGyhBZdXtSsaV%2BMrhfM6s78xN8XacqJCOYAUjr0oQXKHudsEHNJdJ9BeYRtO1bQO76Hgfe14QVSBE50dvQkx681eIZxaMRZloA1uYzGEmUv0XnHq%2B1k5OLh0GPq97G50t9X6aWMwoIavJjNntvA1vQB%2FuxMswnEBwjtsZPUXPR5lToyJbAggo%2FG2oqIDLgfVSMDuXcdFPe%2B8KZXbyUEKb1%2BOGGc81KjdoJ5koMXNsAK8A3pS9RqF641kzwNXMh%2B4cE9Llj6OlAL2b7azibK%2BZ%2Bn0R2HkEh%2FiVzCQhLLDBjqkATzJHow6yU3Up78CmMsaMoDUXv0Mue%2FVI2%2FRKeQt3QQsVxMYw0d8c5oDwW%2FLiYHTaS6UGd5tMe7VXDh2Sfx9CaD0k7ktCK6Fb7wNfnQY1TjLHLo0hGRAHB006ymUl%2BsVcBMp7KBjBcSpm%2Bsz81%2F7X0nQwjMhgucrP9ojHHeyd00q0EDeFdyS%2BoaJfxcUHEKy5bN8B%2B1lHZY5G%2BmUbabL3%2B%2B6niw%2B&X-Amz-Signature=99e81fcc683b937bc309367dc6eb7a523db787a4d688d172e3b4c14975639ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDD5WIV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDneHNqpIwIqWSkzGWTB940bmDkLC5G4jBxF7NvKIpKAQIhAJ5Ffom9KA2fsnfQuTAFVq9rxAnVNsW2STW49PZXXLVZKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Br8pdslhWZTcoxfQq3AMbSQVZji3riBN0XgZsiFirOae4wG7klaC99jviFsExKwBQlIg9qhn5aT926H4Sag3sI3SiaNdySlCBAJNWySbt%2BG%2BzIceAzcgENBPUIop14GtAA4WQ%2FQH88ufdz3jgXX64UTKQEiIJKkpMUvM%2BcmEU1%2FIk8OyWigzPfNsBQWhsfHUglr8vu1IeP4ofZpA2mhJwnFHESYefD5TmqkAfGr3BD0Ch2BgdUJh%2FI4exTsbzpXnXONDBQaX933Gc6Fa136wiZsaoGDoe5wapJ8TbmNC1TFy%2F2rJqmLyZxtonF2HWRBvGDfmMcdUZ2rgoUb6rG7FyyNvg36AjRX6ezJBju9buslgOPGyhBZdXtSsaV%2BMrhfM6s78xN8XacqJCOYAUjr0oQXKHudsEHNJdJ9BeYRtO1bQO76Hgfe14QVSBE50dvQkx681eIZxaMRZloA1uYzGEmUv0XnHq%2B1k5OLh0GPq97G50t9X6aWMwoIavJjNntvA1vQB%2FuxMswnEBwjtsZPUXPR5lToyJbAggo%2FG2oqIDLgfVSMDuXcdFPe%2B8KZXbyUEKb1%2BOGGc81KjdoJ5koMXNsAK8A3pS9RqF641kzwNXMh%2B4cE9Llj6OlAL2b7azibK%2BZ%2Bn0R2HkEh%2FiVzCQhLLDBjqkATzJHow6yU3Up78CmMsaMoDUXv0Mue%2FVI2%2FRKeQt3QQsVxMYw0d8c5oDwW%2FLiYHTaS6UGd5tMe7VXDh2Sfx9CaD0k7ktCK6Fb7wNfnQY1TjLHLo0hGRAHB006ymUl%2BsVcBMp7KBjBcSpm%2Bsz81%2F7X0nQwjMhgucrP9ojHHeyd00q0EDeFdyS%2BoaJfxcUHEKy5bN8B%2B1lHZY5G%2BmUbabL3%2B%2B6niw%2B&X-Amz-Signature=388e14c167bab2224f9f5bb1759be90c064edb11faef2ae9c6034c74945ceaf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDD5WIV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDneHNqpIwIqWSkzGWTB940bmDkLC5G4jBxF7NvKIpKAQIhAJ5Ffom9KA2fsnfQuTAFVq9rxAnVNsW2STW49PZXXLVZKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Br8pdslhWZTcoxfQq3AMbSQVZji3riBN0XgZsiFirOae4wG7klaC99jviFsExKwBQlIg9qhn5aT926H4Sag3sI3SiaNdySlCBAJNWySbt%2BG%2BzIceAzcgENBPUIop14GtAA4WQ%2FQH88ufdz3jgXX64UTKQEiIJKkpMUvM%2BcmEU1%2FIk8OyWigzPfNsBQWhsfHUglr8vu1IeP4ofZpA2mhJwnFHESYefD5TmqkAfGr3BD0Ch2BgdUJh%2FI4exTsbzpXnXONDBQaX933Gc6Fa136wiZsaoGDoe5wapJ8TbmNC1TFy%2F2rJqmLyZxtonF2HWRBvGDfmMcdUZ2rgoUb6rG7FyyNvg36AjRX6ezJBju9buslgOPGyhBZdXtSsaV%2BMrhfM6s78xN8XacqJCOYAUjr0oQXKHudsEHNJdJ9BeYRtO1bQO76Hgfe14QVSBE50dvQkx681eIZxaMRZloA1uYzGEmUv0XnHq%2B1k5OLh0GPq97G50t9X6aWMwoIavJjNntvA1vQB%2FuxMswnEBwjtsZPUXPR5lToyJbAggo%2FG2oqIDLgfVSMDuXcdFPe%2B8KZXbyUEKb1%2BOGGc81KjdoJ5koMXNsAK8A3pS9RqF641kzwNXMh%2B4cE9Llj6OlAL2b7azibK%2BZ%2Bn0R2HkEh%2FiVzCQhLLDBjqkATzJHow6yU3Up78CmMsaMoDUXv0Mue%2FVI2%2FRKeQt3QQsVxMYw0d8c5oDwW%2FLiYHTaS6UGd5tMe7VXDh2Sfx9CaD0k7ktCK6Fb7wNfnQY1TjLHLo0hGRAHB006ymUl%2BsVcBMp7KBjBcSpm%2Bsz81%2F7X0nQwjMhgucrP9ojHHeyd00q0EDeFdyS%2BoaJfxcUHEKy5bN8B%2B1lHZY5G%2BmUbabL3%2B%2B6niw%2B&X-Amz-Signature=ddfd07c4f4f8ae24ae8c43764b709f33ccf4ef07d750cb0a943d26e7033015ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDD5WIV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDneHNqpIwIqWSkzGWTB940bmDkLC5G4jBxF7NvKIpKAQIhAJ5Ffom9KA2fsnfQuTAFVq9rxAnVNsW2STW49PZXXLVZKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Br8pdslhWZTcoxfQq3AMbSQVZji3riBN0XgZsiFirOae4wG7klaC99jviFsExKwBQlIg9qhn5aT926H4Sag3sI3SiaNdySlCBAJNWySbt%2BG%2BzIceAzcgENBPUIop14GtAA4WQ%2FQH88ufdz3jgXX64UTKQEiIJKkpMUvM%2BcmEU1%2FIk8OyWigzPfNsBQWhsfHUglr8vu1IeP4ofZpA2mhJwnFHESYefD5TmqkAfGr3BD0Ch2BgdUJh%2FI4exTsbzpXnXONDBQaX933Gc6Fa136wiZsaoGDoe5wapJ8TbmNC1TFy%2F2rJqmLyZxtonF2HWRBvGDfmMcdUZ2rgoUb6rG7FyyNvg36AjRX6ezJBju9buslgOPGyhBZdXtSsaV%2BMrhfM6s78xN8XacqJCOYAUjr0oQXKHudsEHNJdJ9BeYRtO1bQO76Hgfe14QVSBE50dvQkx681eIZxaMRZloA1uYzGEmUv0XnHq%2B1k5OLh0GPq97G50t9X6aWMwoIavJjNntvA1vQB%2FuxMswnEBwjtsZPUXPR5lToyJbAggo%2FG2oqIDLgfVSMDuXcdFPe%2B8KZXbyUEKb1%2BOGGc81KjdoJ5koMXNsAK8A3pS9RqF641kzwNXMh%2B4cE9Llj6OlAL2b7azibK%2BZ%2Bn0R2HkEh%2FiVzCQhLLDBjqkATzJHow6yU3Up78CmMsaMoDUXv0Mue%2FVI2%2FRKeQt3QQsVxMYw0d8c5oDwW%2FLiYHTaS6UGd5tMe7VXDh2Sfx9CaD0k7ktCK6Fb7wNfnQY1TjLHLo0hGRAHB006ymUl%2BsVcBMp7KBjBcSpm%2Bsz81%2F7X0nQwjMhgucrP9ojHHeyd00q0EDeFdyS%2BoaJfxcUHEKy5bN8B%2B1lHZY5G%2BmUbabL3%2B%2B6niw%2B&X-Amz-Signature=5c9a43d62f299201edb0c70a7630055f00cdf93a6e0730261503cbaa3b39cba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDD5WIV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDneHNqpIwIqWSkzGWTB940bmDkLC5G4jBxF7NvKIpKAQIhAJ5Ffom9KA2fsnfQuTAFVq9rxAnVNsW2STW49PZXXLVZKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Br8pdslhWZTcoxfQq3AMbSQVZji3riBN0XgZsiFirOae4wG7klaC99jviFsExKwBQlIg9qhn5aT926H4Sag3sI3SiaNdySlCBAJNWySbt%2BG%2BzIceAzcgENBPUIop14GtAA4WQ%2FQH88ufdz3jgXX64UTKQEiIJKkpMUvM%2BcmEU1%2FIk8OyWigzPfNsBQWhsfHUglr8vu1IeP4ofZpA2mhJwnFHESYefD5TmqkAfGr3BD0Ch2BgdUJh%2FI4exTsbzpXnXONDBQaX933Gc6Fa136wiZsaoGDoe5wapJ8TbmNC1TFy%2F2rJqmLyZxtonF2HWRBvGDfmMcdUZ2rgoUb6rG7FyyNvg36AjRX6ezJBju9buslgOPGyhBZdXtSsaV%2BMrhfM6s78xN8XacqJCOYAUjr0oQXKHudsEHNJdJ9BeYRtO1bQO76Hgfe14QVSBE50dvQkx681eIZxaMRZloA1uYzGEmUv0XnHq%2B1k5OLh0GPq97G50t9X6aWMwoIavJjNntvA1vQB%2FuxMswnEBwjtsZPUXPR5lToyJbAggo%2FG2oqIDLgfVSMDuXcdFPe%2B8KZXbyUEKb1%2BOGGc81KjdoJ5koMXNsAK8A3pS9RqF641kzwNXMh%2B4cE9Llj6OlAL2b7azibK%2BZ%2Bn0R2HkEh%2FiVzCQhLLDBjqkATzJHow6yU3Up78CmMsaMoDUXv0Mue%2FVI2%2FRKeQt3QQsVxMYw0d8c5oDwW%2FLiYHTaS6UGd5tMe7VXDh2Sfx9CaD0k7ktCK6Fb7wNfnQY1TjLHLo0hGRAHB006ymUl%2BsVcBMp7KBjBcSpm%2Bsz81%2F7X0nQwjMhgucrP9ojHHeyd00q0EDeFdyS%2BoaJfxcUHEKy5bN8B%2B1lHZY5G%2BmUbabL3%2B%2B6niw%2B&X-Amz-Signature=0918f6225599fe05e113cbabb61f013a36a9e0642f073bf118a8e5dca8d1aa5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDD5WIV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDneHNqpIwIqWSkzGWTB940bmDkLC5G4jBxF7NvKIpKAQIhAJ5Ffom9KA2fsnfQuTAFVq9rxAnVNsW2STW49PZXXLVZKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Br8pdslhWZTcoxfQq3AMbSQVZji3riBN0XgZsiFirOae4wG7klaC99jviFsExKwBQlIg9qhn5aT926H4Sag3sI3SiaNdySlCBAJNWySbt%2BG%2BzIceAzcgENBPUIop14GtAA4WQ%2FQH88ufdz3jgXX64UTKQEiIJKkpMUvM%2BcmEU1%2FIk8OyWigzPfNsBQWhsfHUglr8vu1IeP4ofZpA2mhJwnFHESYefD5TmqkAfGr3BD0Ch2BgdUJh%2FI4exTsbzpXnXONDBQaX933Gc6Fa136wiZsaoGDoe5wapJ8TbmNC1TFy%2F2rJqmLyZxtonF2HWRBvGDfmMcdUZ2rgoUb6rG7FyyNvg36AjRX6ezJBju9buslgOPGyhBZdXtSsaV%2BMrhfM6s78xN8XacqJCOYAUjr0oQXKHudsEHNJdJ9BeYRtO1bQO76Hgfe14QVSBE50dvQkx681eIZxaMRZloA1uYzGEmUv0XnHq%2B1k5OLh0GPq97G50t9X6aWMwoIavJjNntvA1vQB%2FuxMswnEBwjtsZPUXPR5lToyJbAggo%2FG2oqIDLgfVSMDuXcdFPe%2B8KZXbyUEKb1%2BOGGc81KjdoJ5koMXNsAK8A3pS9RqF641kzwNXMh%2B4cE9Llj6OlAL2b7azibK%2BZ%2Bn0R2HkEh%2FiVzCQhLLDBjqkATzJHow6yU3Up78CmMsaMoDUXv0Mue%2FVI2%2FRKeQt3QQsVxMYw0d8c5oDwW%2FLiYHTaS6UGd5tMe7VXDh2Sfx9CaD0k7ktCK6Fb7wNfnQY1TjLHLo0hGRAHB006ymUl%2BsVcBMp7KBjBcSpm%2Bsz81%2F7X0nQwjMhgucrP9ojHHeyd00q0EDeFdyS%2BoaJfxcUHEKy5bN8B%2B1lHZY5G%2BmUbabL3%2B%2B6niw%2B&X-Amz-Signature=711661f15cc9700d2b12805d6d1c8dcdc674a5382c782acfba816645b50db7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDD5WIV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDneHNqpIwIqWSkzGWTB940bmDkLC5G4jBxF7NvKIpKAQIhAJ5Ffom9KA2fsnfQuTAFVq9rxAnVNsW2STW49PZXXLVZKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Br8pdslhWZTcoxfQq3AMbSQVZji3riBN0XgZsiFirOae4wG7klaC99jviFsExKwBQlIg9qhn5aT926H4Sag3sI3SiaNdySlCBAJNWySbt%2BG%2BzIceAzcgENBPUIop14GtAA4WQ%2FQH88ufdz3jgXX64UTKQEiIJKkpMUvM%2BcmEU1%2FIk8OyWigzPfNsBQWhsfHUglr8vu1IeP4ofZpA2mhJwnFHESYefD5TmqkAfGr3BD0Ch2BgdUJh%2FI4exTsbzpXnXONDBQaX933Gc6Fa136wiZsaoGDoe5wapJ8TbmNC1TFy%2F2rJqmLyZxtonF2HWRBvGDfmMcdUZ2rgoUb6rG7FyyNvg36AjRX6ezJBju9buslgOPGyhBZdXtSsaV%2BMrhfM6s78xN8XacqJCOYAUjr0oQXKHudsEHNJdJ9BeYRtO1bQO76Hgfe14QVSBE50dvQkx681eIZxaMRZloA1uYzGEmUv0XnHq%2B1k5OLh0GPq97G50t9X6aWMwoIavJjNntvA1vQB%2FuxMswnEBwjtsZPUXPR5lToyJbAggo%2FG2oqIDLgfVSMDuXcdFPe%2B8KZXbyUEKb1%2BOGGc81KjdoJ5koMXNsAK8A3pS9RqF641kzwNXMh%2B4cE9Llj6OlAL2b7azibK%2BZ%2Bn0R2HkEh%2FiVzCQhLLDBjqkATzJHow6yU3Up78CmMsaMoDUXv0Mue%2FVI2%2FRKeQt3QQsVxMYw0d8c5oDwW%2FLiYHTaS6UGd5tMe7VXDh2Sfx9CaD0k7ktCK6Fb7wNfnQY1TjLHLo0hGRAHB006ymUl%2BsVcBMp7KBjBcSpm%2Bsz81%2F7X0nQwjMhgucrP9ojHHeyd00q0EDeFdyS%2BoaJfxcUHEKy5bN8B%2B1lHZY5G%2BmUbabL3%2B%2B6niw%2B&X-Amz-Signature=c39c6e12ad8c706925f7bd2fb5f21d94f95ff70025a9b16d6913f52281994ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDD5WIV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDneHNqpIwIqWSkzGWTB940bmDkLC5G4jBxF7NvKIpKAQIhAJ5Ffom9KA2fsnfQuTAFVq9rxAnVNsW2STW49PZXXLVZKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Br8pdslhWZTcoxfQq3AMbSQVZji3riBN0XgZsiFirOae4wG7klaC99jviFsExKwBQlIg9qhn5aT926H4Sag3sI3SiaNdySlCBAJNWySbt%2BG%2BzIceAzcgENBPUIop14GtAA4WQ%2FQH88ufdz3jgXX64UTKQEiIJKkpMUvM%2BcmEU1%2FIk8OyWigzPfNsBQWhsfHUglr8vu1IeP4ofZpA2mhJwnFHESYefD5TmqkAfGr3BD0Ch2BgdUJh%2FI4exTsbzpXnXONDBQaX933Gc6Fa136wiZsaoGDoe5wapJ8TbmNC1TFy%2F2rJqmLyZxtonF2HWRBvGDfmMcdUZ2rgoUb6rG7FyyNvg36AjRX6ezJBju9buslgOPGyhBZdXtSsaV%2BMrhfM6s78xN8XacqJCOYAUjr0oQXKHudsEHNJdJ9BeYRtO1bQO76Hgfe14QVSBE50dvQkx681eIZxaMRZloA1uYzGEmUv0XnHq%2B1k5OLh0GPq97G50t9X6aWMwoIavJjNntvA1vQB%2FuxMswnEBwjtsZPUXPR5lToyJbAggo%2FG2oqIDLgfVSMDuXcdFPe%2B8KZXbyUEKb1%2BOGGc81KjdoJ5koMXNsAK8A3pS9RqF641kzwNXMh%2B4cE9Llj6OlAL2b7azibK%2BZ%2Bn0R2HkEh%2FiVzCQhLLDBjqkATzJHow6yU3Up78CmMsaMoDUXv0Mue%2FVI2%2FRKeQt3QQsVxMYw0d8c5oDwW%2FLiYHTaS6UGd5tMe7VXDh2Sfx9CaD0k7ktCK6Fb7wNfnQY1TjLHLo0hGRAHB006ymUl%2BsVcBMp7KBjBcSpm%2Bsz81%2F7X0nQwjMhgucrP9ojHHeyd00q0EDeFdyS%2BoaJfxcUHEKy5bN8B%2B1lHZY5G%2BmUbabL3%2B%2B6niw%2B&X-Amz-Signature=bc71cab40493537f848a535ea31cb10427839e6fabaedceca00b6b5477d368ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
