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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4HXJKS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAjmpor73w7jSCaaGt2A0unjzrSBcmCSy1mMMlEXxz0jAiEAk%2FORcion3Y2ZzYi28HG9YIiGEUXSpeAiYXLWrlmqv54q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDM6EBSzHromLd%2B3DBSrcAzKDauH45edggLKjFMyWe17Aj8MHgqQRe9KhTK4u7Tw3Ck8zlubKkkfG5WC45dQPkSFvlg2iFwEI7AoG2CEIqPbEkpMhUag9KMh908Cv0fgq99OCf4I6jBUEf0pUUDsx1n%2FhvjBZdoFQ3jb7sVX1PWeaPZMPMJs0e3lR3RpUnZE%2BxGn8v20nxat0731zyXzocdewMgvFrcgD38NsJGBgpX%2F%2BGn9GsFsHgciTsis6jE000wLAzVeAUmIZYDwXnhSwR%2FfSVE3infOzzAtgIcdXNVrXbscuuOkqnFLXUHNtsbkq5AMJmuGidi%2B0XUNvaNin%2FWYAZTsLFdj0hLUUpn3K8m0PWLmNWWKOKpaIh%2Bh6uk5iELuVPVjVQyWQ7D7JLiwiaXLOA6ofqoXQMrXZtKNHF3%2F7Neyy4GgOeI2bQwCq807NzGk68Tm95od0dek%2FQVjNnZRNzwpSV13UBZ28hCy5fyk42fAQtHdw8k9FrLVboavC%2Bb4M3GvDT4tjf0aDdFwrzpTarjwvr88cei5AA5%2FjVsJsy27f1rufv3hOtfzz6OFaNEZxJpIkEwrP5DZGNuVU9V2Neh7svFS4K16eOtsGLzi4qC1jksuGHZ8N0bISeb1cMtGxlxlFrm%2FAHlSdMOLz5MIGOqUBfvmz1HX1FDax2OqagLnrDrzXy2CIT5E1iTHliLTkUev814D9Lt5hGych6qER507szYbivy4qKV%2B69Gf%2F5Qm%2FoNVdfL%2FYfSsBzUCz0MW5Wv3ZWy%2F9XG9EoOtFeyBGN9cK%2FnK2yvaOSmKHi8QOhuLXXjVwi%2F4erHH8TN4lZSerHs5yfRJqZSGC7Jh85WDDV4oXxyhXVO0MW8JbYUfR3mT0Pt%2BvvKiZ&X-Amz-Signature=0a21fe1ad90fe7c2208d1369a1d7ef18c0313d40bf6db8d603a2d78e4d40aabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4HXJKS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAjmpor73w7jSCaaGt2A0unjzrSBcmCSy1mMMlEXxz0jAiEAk%2FORcion3Y2ZzYi28HG9YIiGEUXSpeAiYXLWrlmqv54q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDM6EBSzHromLd%2B3DBSrcAzKDauH45edggLKjFMyWe17Aj8MHgqQRe9KhTK4u7Tw3Ck8zlubKkkfG5WC45dQPkSFvlg2iFwEI7AoG2CEIqPbEkpMhUag9KMh908Cv0fgq99OCf4I6jBUEf0pUUDsx1n%2FhvjBZdoFQ3jb7sVX1PWeaPZMPMJs0e3lR3RpUnZE%2BxGn8v20nxat0731zyXzocdewMgvFrcgD38NsJGBgpX%2F%2BGn9GsFsHgciTsis6jE000wLAzVeAUmIZYDwXnhSwR%2FfSVE3infOzzAtgIcdXNVrXbscuuOkqnFLXUHNtsbkq5AMJmuGidi%2B0XUNvaNin%2FWYAZTsLFdj0hLUUpn3K8m0PWLmNWWKOKpaIh%2Bh6uk5iELuVPVjVQyWQ7D7JLiwiaXLOA6ofqoXQMrXZtKNHF3%2F7Neyy4GgOeI2bQwCq807NzGk68Tm95od0dek%2FQVjNnZRNzwpSV13UBZ28hCy5fyk42fAQtHdw8k9FrLVboavC%2Bb4M3GvDT4tjf0aDdFwrzpTarjwvr88cei5AA5%2FjVsJsy27f1rufv3hOtfzz6OFaNEZxJpIkEwrP5DZGNuVU9V2Neh7svFS4K16eOtsGLzi4qC1jksuGHZ8N0bISeb1cMtGxlxlFrm%2FAHlSdMOLz5MIGOqUBfvmz1HX1FDax2OqagLnrDrzXy2CIT5E1iTHliLTkUev814D9Lt5hGych6qER507szYbivy4qKV%2B69Gf%2F5Qm%2FoNVdfL%2FYfSsBzUCz0MW5Wv3ZWy%2F9XG9EoOtFeyBGN9cK%2FnK2yvaOSmKHi8QOhuLXXjVwi%2F4erHH8TN4lZSerHs5yfRJqZSGC7Jh85WDDV4oXxyhXVO0MW8JbYUfR3mT0Pt%2BvvKiZ&X-Amz-Signature=5095afa809c9a1fc9446b7ac0940e9f0f4e6aa13b87bcd26890d848045016acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4HXJKS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAjmpor73w7jSCaaGt2A0unjzrSBcmCSy1mMMlEXxz0jAiEAk%2FORcion3Y2ZzYi28HG9YIiGEUXSpeAiYXLWrlmqv54q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDM6EBSzHromLd%2B3DBSrcAzKDauH45edggLKjFMyWe17Aj8MHgqQRe9KhTK4u7Tw3Ck8zlubKkkfG5WC45dQPkSFvlg2iFwEI7AoG2CEIqPbEkpMhUag9KMh908Cv0fgq99OCf4I6jBUEf0pUUDsx1n%2FhvjBZdoFQ3jb7sVX1PWeaPZMPMJs0e3lR3RpUnZE%2BxGn8v20nxat0731zyXzocdewMgvFrcgD38NsJGBgpX%2F%2BGn9GsFsHgciTsis6jE000wLAzVeAUmIZYDwXnhSwR%2FfSVE3infOzzAtgIcdXNVrXbscuuOkqnFLXUHNtsbkq5AMJmuGidi%2B0XUNvaNin%2FWYAZTsLFdj0hLUUpn3K8m0PWLmNWWKOKpaIh%2Bh6uk5iELuVPVjVQyWQ7D7JLiwiaXLOA6ofqoXQMrXZtKNHF3%2F7Neyy4GgOeI2bQwCq807NzGk68Tm95od0dek%2FQVjNnZRNzwpSV13UBZ28hCy5fyk42fAQtHdw8k9FrLVboavC%2Bb4M3GvDT4tjf0aDdFwrzpTarjwvr88cei5AA5%2FjVsJsy27f1rufv3hOtfzz6OFaNEZxJpIkEwrP5DZGNuVU9V2Neh7svFS4K16eOtsGLzi4qC1jksuGHZ8N0bISeb1cMtGxlxlFrm%2FAHlSdMOLz5MIGOqUBfvmz1HX1FDax2OqagLnrDrzXy2CIT5E1iTHliLTkUev814D9Lt5hGych6qER507szYbivy4qKV%2B69Gf%2F5Qm%2FoNVdfL%2FYfSsBzUCz0MW5Wv3ZWy%2F9XG9EoOtFeyBGN9cK%2FnK2yvaOSmKHi8QOhuLXXjVwi%2F4erHH8TN4lZSerHs5yfRJqZSGC7Jh85WDDV4oXxyhXVO0MW8JbYUfR3mT0Pt%2BvvKiZ&X-Amz-Signature=aaaa2dbc2359910fb4924fcc2ca318263d074c9ae3f80949e7c88c56a8bee51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4HXJKS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAjmpor73w7jSCaaGt2A0unjzrSBcmCSy1mMMlEXxz0jAiEAk%2FORcion3Y2ZzYi28HG9YIiGEUXSpeAiYXLWrlmqv54q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDM6EBSzHromLd%2B3DBSrcAzKDauH45edggLKjFMyWe17Aj8MHgqQRe9KhTK4u7Tw3Ck8zlubKkkfG5WC45dQPkSFvlg2iFwEI7AoG2CEIqPbEkpMhUag9KMh908Cv0fgq99OCf4I6jBUEf0pUUDsx1n%2FhvjBZdoFQ3jb7sVX1PWeaPZMPMJs0e3lR3RpUnZE%2BxGn8v20nxat0731zyXzocdewMgvFrcgD38NsJGBgpX%2F%2BGn9GsFsHgciTsis6jE000wLAzVeAUmIZYDwXnhSwR%2FfSVE3infOzzAtgIcdXNVrXbscuuOkqnFLXUHNtsbkq5AMJmuGidi%2B0XUNvaNin%2FWYAZTsLFdj0hLUUpn3K8m0PWLmNWWKOKpaIh%2Bh6uk5iELuVPVjVQyWQ7D7JLiwiaXLOA6ofqoXQMrXZtKNHF3%2F7Neyy4GgOeI2bQwCq807NzGk68Tm95od0dek%2FQVjNnZRNzwpSV13UBZ28hCy5fyk42fAQtHdw8k9FrLVboavC%2Bb4M3GvDT4tjf0aDdFwrzpTarjwvr88cei5AA5%2FjVsJsy27f1rufv3hOtfzz6OFaNEZxJpIkEwrP5DZGNuVU9V2Neh7svFS4K16eOtsGLzi4qC1jksuGHZ8N0bISeb1cMtGxlxlFrm%2FAHlSdMOLz5MIGOqUBfvmz1HX1FDax2OqagLnrDrzXy2CIT5E1iTHliLTkUev814D9Lt5hGych6qER507szYbivy4qKV%2B69Gf%2F5Qm%2FoNVdfL%2FYfSsBzUCz0MW5Wv3ZWy%2F9XG9EoOtFeyBGN9cK%2FnK2yvaOSmKHi8QOhuLXXjVwi%2F4erHH8TN4lZSerHs5yfRJqZSGC7Jh85WDDV4oXxyhXVO0MW8JbYUfR3mT0Pt%2BvvKiZ&X-Amz-Signature=d2ee4322ea5724c85366ee5c58d0a525912bf71f53e6451dd721f6d73e3691fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4HXJKS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAjmpor73w7jSCaaGt2A0unjzrSBcmCSy1mMMlEXxz0jAiEAk%2FORcion3Y2ZzYi28HG9YIiGEUXSpeAiYXLWrlmqv54q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDM6EBSzHromLd%2B3DBSrcAzKDauH45edggLKjFMyWe17Aj8MHgqQRe9KhTK4u7Tw3Ck8zlubKkkfG5WC45dQPkSFvlg2iFwEI7AoG2CEIqPbEkpMhUag9KMh908Cv0fgq99OCf4I6jBUEf0pUUDsx1n%2FhvjBZdoFQ3jb7sVX1PWeaPZMPMJs0e3lR3RpUnZE%2BxGn8v20nxat0731zyXzocdewMgvFrcgD38NsJGBgpX%2F%2BGn9GsFsHgciTsis6jE000wLAzVeAUmIZYDwXnhSwR%2FfSVE3infOzzAtgIcdXNVrXbscuuOkqnFLXUHNtsbkq5AMJmuGidi%2B0XUNvaNin%2FWYAZTsLFdj0hLUUpn3K8m0PWLmNWWKOKpaIh%2Bh6uk5iELuVPVjVQyWQ7D7JLiwiaXLOA6ofqoXQMrXZtKNHF3%2F7Neyy4GgOeI2bQwCq807NzGk68Tm95od0dek%2FQVjNnZRNzwpSV13UBZ28hCy5fyk42fAQtHdw8k9FrLVboavC%2Bb4M3GvDT4tjf0aDdFwrzpTarjwvr88cei5AA5%2FjVsJsy27f1rufv3hOtfzz6OFaNEZxJpIkEwrP5DZGNuVU9V2Neh7svFS4K16eOtsGLzi4qC1jksuGHZ8N0bISeb1cMtGxlxlFrm%2FAHlSdMOLz5MIGOqUBfvmz1HX1FDax2OqagLnrDrzXy2CIT5E1iTHliLTkUev814D9Lt5hGych6qER507szYbivy4qKV%2B69Gf%2F5Qm%2FoNVdfL%2FYfSsBzUCz0MW5Wv3ZWy%2F9XG9EoOtFeyBGN9cK%2FnK2yvaOSmKHi8QOhuLXXjVwi%2F4erHH8TN4lZSerHs5yfRJqZSGC7Jh85WDDV4oXxyhXVO0MW8JbYUfR3mT0Pt%2BvvKiZ&X-Amz-Signature=6c97c106fcf693a0d244256263f0b21d42c5d8ae6d039faafbeab584506ce525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4HXJKS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAjmpor73w7jSCaaGt2A0unjzrSBcmCSy1mMMlEXxz0jAiEAk%2FORcion3Y2ZzYi28HG9YIiGEUXSpeAiYXLWrlmqv54q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDM6EBSzHromLd%2B3DBSrcAzKDauH45edggLKjFMyWe17Aj8MHgqQRe9KhTK4u7Tw3Ck8zlubKkkfG5WC45dQPkSFvlg2iFwEI7AoG2CEIqPbEkpMhUag9KMh908Cv0fgq99OCf4I6jBUEf0pUUDsx1n%2FhvjBZdoFQ3jb7sVX1PWeaPZMPMJs0e3lR3RpUnZE%2BxGn8v20nxat0731zyXzocdewMgvFrcgD38NsJGBgpX%2F%2BGn9GsFsHgciTsis6jE000wLAzVeAUmIZYDwXnhSwR%2FfSVE3infOzzAtgIcdXNVrXbscuuOkqnFLXUHNtsbkq5AMJmuGidi%2B0XUNvaNin%2FWYAZTsLFdj0hLUUpn3K8m0PWLmNWWKOKpaIh%2Bh6uk5iELuVPVjVQyWQ7D7JLiwiaXLOA6ofqoXQMrXZtKNHF3%2F7Neyy4GgOeI2bQwCq807NzGk68Tm95od0dek%2FQVjNnZRNzwpSV13UBZ28hCy5fyk42fAQtHdw8k9FrLVboavC%2Bb4M3GvDT4tjf0aDdFwrzpTarjwvr88cei5AA5%2FjVsJsy27f1rufv3hOtfzz6OFaNEZxJpIkEwrP5DZGNuVU9V2Neh7svFS4K16eOtsGLzi4qC1jksuGHZ8N0bISeb1cMtGxlxlFrm%2FAHlSdMOLz5MIGOqUBfvmz1HX1FDax2OqagLnrDrzXy2CIT5E1iTHliLTkUev814D9Lt5hGych6qER507szYbivy4qKV%2B69Gf%2F5Qm%2FoNVdfL%2FYfSsBzUCz0MW5Wv3ZWy%2F9XG9EoOtFeyBGN9cK%2FnK2yvaOSmKHi8QOhuLXXjVwi%2F4erHH8TN4lZSerHs5yfRJqZSGC7Jh85WDDV4oXxyhXVO0MW8JbYUfR3mT0Pt%2BvvKiZ&X-Amz-Signature=4f6155327a4b17d2b60c21724bfb16820eaa6586ddb5ee4be0957e8a34c80e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4HXJKS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAjmpor73w7jSCaaGt2A0unjzrSBcmCSy1mMMlEXxz0jAiEAk%2FORcion3Y2ZzYi28HG9YIiGEUXSpeAiYXLWrlmqv54q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDM6EBSzHromLd%2B3DBSrcAzKDauH45edggLKjFMyWe17Aj8MHgqQRe9KhTK4u7Tw3Ck8zlubKkkfG5WC45dQPkSFvlg2iFwEI7AoG2CEIqPbEkpMhUag9KMh908Cv0fgq99OCf4I6jBUEf0pUUDsx1n%2FhvjBZdoFQ3jb7sVX1PWeaPZMPMJs0e3lR3RpUnZE%2BxGn8v20nxat0731zyXzocdewMgvFrcgD38NsJGBgpX%2F%2BGn9GsFsHgciTsis6jE000wLAzVeAUmIZYDwXnhSwR%2FfSVE3infOzzAtgIcdXNVrXbscuuOkqnFLXUHNtsbkq5AMJmuGidi%2B0XUNvaNin%2FWYAZTsLFdj0hLUUpn3K8m0PWLmNWWKOKpaIh%2Bh6uk5iELuVPVjVQyWQ7D7JLiwiaXLOA6ofqoXQMrXZtKNHF3%2F7Neyy4GgOeI2bQwCq807NzGk68Tm95od0dek%2FQVjNnZRNzwpSV13UBZ28hCy5fyk42fAQtHdw8k9FrLVboavC%2Bb4M3GvDT4tjf0aDdFwrzpTarjwvr88cei5AA5%2FjVsJsy27f1rufv3hOtfzz6OFaNEZxJpIkEwrP5DZGNuVU9V2Neh7svFS4K16eOtsGLzi4qC1jksuGHZ8N0bISeb1cMtGxlxlFrm%2FAHlSdMOLz5MIGOqUBfvmz1HX1FDax2OqagLnrDrzXy2CIT5E1iTHliLTkUev814D9Lt5hGych6qER507szYbivy4qKV%2B69Gf%2F5Qm%2FoNVdfL%2FYfSsBzUCz0MW5Wv3ZWy%2F9XG9EoOtFeyBGN9cK%2FnK2yvaOSmKHi8QOhuLXXjVwi%2F4erHH8TN4lZSerHs5yfRJqZSGC7Jh85WDDV4oXxyhXVO0MW8JbYUfR3mT0Pt%2BvvKiZ&X-Amz-Signature=1d82a50c0dc822ec5676d562cf2d0d191398b8d20263aaca4a921668d427be6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4HXJKS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAjmpor73w7jSCaaGt2A0unjzrSBcmCSy1mMMlEXxz0jAiEAk%2FORcion3Y2ZzYi28HG9YIiGEUXSpeAiYXLWrlmqv54q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDM6EBSzHromLd%2B3DBSrcAzKDauH45edggLKjFMyWe17Aj8MHgqQRe9KhTK4u7Tw3Ck8zlubKkkfG5WC45dQPkSFvlg2iFwEI7AoG2CEIqPbEkpMhUag9KMh908Cv0fgq99OCf4I6jBUEf0pUUDsx1n%2FhvjBZdoFQ3jb7sVX1PWeaPZMPMJs0e3lR3RpUnZE%2BxGn8v20nxat0731zyXzocdewMgvFrcgD38NsJGBgpX%2F%2BGn9GsFsHgciTsis6jE000wLAzVeAUmIZYDwXnhSwR%2FfSVE3infOzzAtgIcdXNVrXbscuuOkqnFLXUHNtsbkq5AMJmuGidi%2B0XUNvaNin%2FWYAZTsLFdj0hLUUpn3K8m0PWLmNWWKOKpaIh%2Bh6uk5iELuVPVjVQyWQ7D7JLiwiaXLOA6ofqoXQMrXZtKNHF3%2F7Neyy4GgOeI2bQwCq807NzGk68Tm95od0dek%2FQVjNnZRNzwpSV13UBZ28hCy5fyk42fAQtHdw8k9FrLVboavC%2Bb4M3GvDT4tjf0aDdFwrzpTarjwvr88cei5AA5%2FjVsJsy27f1rufv3hOtfzz6OFaNEZxJpIkEwrP5DZGNuVU9V2Neh7svFS4K16eOtsGLzi4qC1jksuGHZ8N0bISeb1cMtGxlxlFrm%2FAHlSdMOLz5MIGOqUBfvmz1HX1FDax2OqagLnrDrzXy2CIT5E1iTHliLTkUev814D9Lt5hGych6qER507szYbivy4qKV%2B69Gf%2F5Qm%2FoNVdfL%2FYfSsBzUCz0MW5Wv3ZWy%2F9XG9EoOtFeyBGN9cK%2FnK2yvaOSmKHi8QOhuLXXjVwi%2F4erHH8TN4lZSerHs5yfRJqZSGC7Jh85WDDV4oXxyhXVO0MW8JbYUfR3mT0Pt%2BvvKiZ&X-Amz-Signature=f226e7a6cbd18cbe8f3a632ec373a6c0157984c38075832135eb16e5e834168f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
