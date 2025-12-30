---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R6JLAC%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPtVTn5PY95i%2B4%2FrJUqUvquUJqL%2Fjv%2FVR3whjAi%2BlR9QIhAOvqDJOYgUlr6MXplFwfdEqhVEX9ao%2FYje2pyxJ6AG8MKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYHMmODQqg7bCHaUMq3AN3ZxPkbFv5NcHO1iYs2iCxV8OBH7OJF2BliTyL24v2PmyMsJIPM%2Brcnx9yxpKSkY8b3eBDqJJrIP8BL9rXaWwhCE%2BkqonSLMXfYKBNjMP72E8kxVFDg3X9HmkxAZc0u0PpvPVclVFkkIdkYAfE6J%2F7kS5ozwDC3qAuPzziJNyACicgsjpwmwW3WXS%2BMJtOmDAgM3v1NL01yq%2F3MWS4aAouyr%2FIyzeeCnYbjw8di%2BQ9W7kAkE3QUkMEV66Mqz%2Bvh%2FXwkBxlhNtOG4JjxDmmrun7c%2FTMoCgX%2Bu0Jf968i718FoHZvElD5IujCE3BU2WyZjn2RHnbLxtT4%2F3%2BaXVe03Z76F6JBW02NvXL7DI1xxznpY5%2BmSowxO7S%2BP8mjGwbJKHQE0KzW16zERFdAxZIA726MINJ5IUyWUDK%2BNEsJJtYMzbyV3BJBw2pgvkTP2T3d2kfqjpikfKkZJNhTMxcUvY%2FBaZH5rnQhHGeFu7Pn%2FBY0hVoFfvwW2xAfYeL75jmw3ENMDktQcFhJeqkSGxSEi44tLLCQpQHCojXv%2FuxNZTaE3RoCBAFhwNLM%2FrJuZIEAxL%2FLNHfMbGevHdjWCN4x5Qn%2BH%2BJM8Uju7SVEWxqonBWLnu%2BkxoOo80%2BaqMO6DDj1czKBjqkAZT6asKoimQew%2BWa6ZV14tar2rQHLH%2F9fsH04Mj6ahLxk6YKWuHVxUZ%2BQ2yy67WBzFboGYP283QnRWP%2BuIHE7mYdkWAc3R%2BHxJen0SrOD5BMib%2FXUTBEfpeucy2JcK9ucUVw%2FksltNj8q%2Fuq5uCxwZlf%2FsclCoTe%2BAQcdFJRrYxylC7xEgYmVVfhul9pPvX%2B0TZliUXZZuEJe26y32sqMcvLu%2FDX&X-Amz-Signature=e7a54fc132d654bbbb70eecd3743b1319c4bb49f32e3640a75021e41f37b01b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R6JLAC%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPtVTn5PY95i%2B4%2FrJUqUvquUJqL%2Fjv%2FVR3whjAi%2BlR9QIhAOvqDJOYgUlr6MXplFwfdEqhVEX9ao%2FYje2pyxJ6AG8MKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYHMmODQqg7bCHaUMq3AN3ZxPkbFv5NcHO1iYs2iCxV8OBH7OJF2BliTyL24v2PmyMsJIPM%2Brcnx9yxpKSkY8b3eBDqJJrIP8BL9rXaWwhCE%2BkqonSLMXfYKBNjMP72E8kxVFDg3X9HmkxAZc0u0PpvPVclVFkkIdkYAfE6J%2F7kS5ozwDC3qAuPzziJNyACicgsjpwmwW3WXS%2BMJtOmDAgM3v1NL01yq%2F3MWS4aAouyr%2FIyzeeCnYbjw8di%2BQ9W7kAkE3QUkMEV66Mqz%2Bvh%2FXwkBxlhNtOG4JjxDmmrun7c%2FTMoCgX%2Bu0Jf968i718FoHZvElD5IujCE3BU2WyZjn2RHnbLxtT4%2F3%2BaXVe03Z76F6JBW02NvXL7DI1xxznpY5%2BmSowxO7S%2BP8mjGwbJKHQE0KzW16zERFdAxZIA726MINJ5IUyWUDK%2BNEsJJtYMzbyV3BJBw2pgvkTP2T3d2kfqjpikfKkZJNhTMxcUvY%2FBaZH5rnQhHGeFu7Pn%2FBY0hVoFfvwW2xAfYeL75jmw3ENMDktQcFhJeqkSGxSEi44tLLCQpQHCojXv%2FuxNZTaE3RoCBAFhwNLM%2FrJuZIEAxL%2FLNHfMbGevHdjWCN4x5Qn%2BH%2BJM8Uju7SVEWxqonBWLnu%2BkxoOo80%2BaqMO6DDj1czKBjqkAZT6asKoimQew%2BWa6ZV14tar2rQHLH%2F9fsH04Mj6ahLxk6YKWuHVxUZ%2BQ2yy67WBzFboGYP283QnRWP%2BuIHE7mYdkWAc3R%2BHxJen0SrOD5BMib%2FXUTBEfpeucy2JcK9ucUVw%2FksltNj8q%2Fuq5uCxwZlf%2FsclCoTe%2BAQcdFJRrYxylC7xEgYmVVfhul9pPvX%2B0TZliUXZZuEJe26y32sqMcvLu%2FDX&X-Amz-Signature=344c26f0181a5ce7557566870a4ef7ca6d9a28a16a1f29df1f3d7c58a23b59eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R6JLAC%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPtVTn5PY95i%2B4%2FrJUqUvquUJqL%2Fjv%2FVR3whjAi%2BlR9QIhAOvqDJOYgUlr6MXplFwfdEqhVEX9ao%2FYje2pyxJ6AG8MKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYHMmODQqg7bCHaUMq3AN3ZxPkbFv5NcHO1iYs2iCxV8OBH7OJF2BliTyL24v2PmyMsJIPM%2Brcnx9yxpKSkY8b3eBDqJJrIP8BL9rXaWwhCE%2BkqonSLMXfYKBNjMP72E8kxVFDg3X9HmkxAZc0u0PpvPVclVFkkIdkYAfE6J%2F7kS5ozwDC3qAuPzziJNyACicgsjpwmwW3WXS%2BMJtOmDAgM3v1NL01yq%2F3MWS4aAouyr%2FIyzeeCnYbjw8di%2BQ9W7kAkE3QUkMEV66Mqz%2Bvh%2FXwkBxlhNtOG4JjxDmmrun7c%2FTMoCgX%2Bu0Jf968i718FoHZvElD5IujCE3BU2WyZjn2RHnbLxtT4%2F3%2BaXVe03Z76F6JBW02NvXL7DI1xxznpY5%2BmSowxO7S%2BP8mjGwbJKHQE0KzW16zERFdAxZIA726MINJ5IUyWUDK%2BNEsJJtYMzbyV3BJBw2pgvkTP2T3d2kfqjpikfKkZJNhTMxcUvY%2FBaZH5rnQhHGeFu7Pn%2FBY0hVoFfvwW2xAfYeL75jmw3ENMDktQcFhJeqkSGxSEi44tLLCQpQHCojXv%2FuxNZTaE3RoCBAFhwNLM%2FrJuZIEAxL%2FLNHfMbGevHdjWCN4x5Qn%2BH%2BJM8Uju7SVEWxqonBWLnu%2BkxoOo80%2BaqMO6DDj1czKBjqkAZT6asKoimQew%2BWa6ZV14tar2rQHLH%2F9fsH04Mj6ahLxk6YKWuHVxUZ%2BQ2yy67WBzFboGYP283QnRWP%2BuIHE7mYdkWAc3R%2BHxJen0SrOD5BMib%2FXUTBEfpeucy2JcK9ucUVw%2FksltNj8q%2Fuq5uCxwZlf%2FsclCoTe%2BAQcdFJRrYxylC7xEgYmVVfhul9pPvX%2B0TZliUXZZuEJe26y32sqMcvLu%2FDX&X-Amz-Signature=5fc27b6e119d7cfe12711fd14c601010f50e591f990be08a4e647a4b6dd72ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R6JLAC%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPtVTn5PY95i%2B4%2FrJUqUvquUJqL%2Fjv%2FVR3whjAi%2BlR9QIhAOvqDJOYgUlr6MXplFwfdEqhVEX9ao%2FYje2pyxJ6AG8MKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYHMmODQqg7bCHaUMq3AN3ZxPkbFv5NcHO1iYs2iCxV8OBH7OJF2BliTyL24v2PmyMsJIPM%2Brcnx9yxpKSkY8b3eBDqJJrIP8BL9rXaWwhCE%2BkqonSLMXfYKBNjMP72E8kxVFDg3X9HmkxAZc0u0PpvPVclVFkkIdkYAfE6J%2F7kS5ozwDC3qAuPzziJNyACicgsjpwmwW3WXS%2BMJtOmDAgM3v1NL01yq%2F3MWS4aAouyr%2FIyzeeCnYbjw8di%2BQ9W7kAkE3QUkMEV66Mqz%2Bvh%2FXwkBxlhNtOG4JjxDmmrun7c%2FTMoCgX%2Bu0Jf968i718FoHZvElD5IujCE3BU2WyZjn2RHnbLxtT4%2F3%2BaXVe03Z76F6JBW02NvXL7DI1xxznpY5%2BmSowxO7S%2BP8mjGwbJKHQE0KzW16zERFdAxZIA726MINJ5IUyWUDK%2BNEsJJtYMzbyV3BJBw2pgvkTP2T3d2kfqjpikfKkZJNhTMxcUvY%2FBaZH5rnQhHGeFu7Pn%2FBY0hVoFfvwW2xAfYeL75jmw3ENMDktQcFhJeqkSGxSEi44tLLCQpQHCojXv%2FuxNZTaE3RoCBAFhwNLM%2FrJuZIEAxL%2FLNHfMbGevHdjWCN4x5Qn%2BH%2BJM8Uju7SVEWxqonBWLnu%2BkxoOo80%2BaqMO6DDj1czKBjqkAZT6asKoimQew%2BWa6ZV14tar2rQHLH%2F9fsH04Mj6ahLxk6YKWuHVxUZ%2BQ2yy67WBzFboGYP283QnRWP%2BuIHE7mYdkWAc3R%2BHxJen0SrOD5BMib%2FXUTBEfpeucy2JcK9ucUVw%2FksltNj8q%2Fuq5uCxwZlf%2FsclCoTe%2BAQcdFJRrYxylC7xEgYmVVfhul9pPvX%2B0TZliUXZZuEJe26y32sqMcvLu%2FDX&X-Amz-Signature=0f8ce5bf93bb8dc38f558325ab26fa98527ca6e582d0e696d7be1c9d0a2acf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R6JLAC%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPtVTn5PY95i%2B4%2FrJUqUvquUJqL%2Fjv%2FVR3whjAi%2BlR9QIhAOvqDJOYgUlr6MXplFwfdEqhVEX9ao%2FYje2pyxJ6AG8MKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYHMmODQqg7bCHaUMq3AN3ZxPkbFv5NcHO1iYs2iCxV8OBH7OJF2BliTyL24v2PmyMsJIPM%2Brcnx9yxpKSkY8b3eBDqJJrIP8BL9rXaWwhCE%2BkqonSLMXfYKBNjMP72E8kxVFDg3X9HmkxAZc0u0PpvPVclVFkkIdkYAfE6J%2F7kS5ozwDC3qAuPzziJNyACicgsjpwmwW3WXS%2BMJtOmDAgM3v1NL01yq%2F3MWS4aAouyr%2FIyzeeCnYbjw8di%2BQ9W7kAkE3QUkMEV66Mqz%2Bvh%2FXwkBxlhNtOG4JjxDmmrun7c%2FTMoCgX%2Bu0Jf968i718FoHZvElD5IujCE3BU2WyZjn2RHnbLxtT4%2F3%2BaXVe03Z76F6JBW02NvXL7DI1xxznpY5%2BmSowxO7S%2BP8mjGwbJKHQE0KzW16zERFdAxZIA726MINJ5IUyWUDK%2BNEsJJtYMzbyV3BJBw2pgvkTP2T3d2kfqjpikfKkZJNhTMxcUvY%2FBaZH5rnQhHGeFu7Pn%2FBY0hVoFfvwW2xAfYeL75jmw3ENMDktQcFhJeqkSGxSEi44tLLCQpQHCojXv%2FuxNZTaE3RoCBAFhwNLM%2FrJuZIEAxL%2FLNHfMbGevHdjWCN4x5Qn%2BH%2BJM8Uju7SVEWxqonBWLnu%2BkxoOo80%2BaqMO6DDj1czKBjqkAZT6asKoimQew%2BWa6ZV14tar2rQHLH%2F9fsH04Mj6ahLxk6YKWuHVxUZ%2BQ2yy67WBzFboGYP283QnRWP%2BuIHE7mYdkWAc3R%2BHxJen0SrOD5BMib%2FXUTBEfpeucy2JcK9ucUVw%2FksltNj8q%2Fuq5uCxwZlf%2FsclCoTe%2BAQcdFJRrYxylC7xEgYmVVfhul9pPvX%2B0TZliUXZZuEJe26y32sqMcvLu%2FDX&X-Amz-Signature=9ecd57ea1a0d8f68e044815dccf4493f5100cf2c71c5f7cf13c566374fede2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R6JLAC%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPtVTn5PY95i%2B4%2FrJUqUvquUJqL%2Fjv%2FVR3whjAi%2BlR9QIhAOvqDJOYgUlr6MXplFwfdEqhVEX9ao%2FYje2pyxJ6AG8MKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYHMmODQqg7bCHaUMq3AN3ZxPkbFv5NcHO1iYs2iCxV8OBH7OJF2BliTyL24v2PmyMsJIPM%2Brcnx9yxpKSkY8b3eBDqJJrIP8BL9rXaWwhCE%2BkqonSLMXfYKBNjMP72E8kxVFDg3X9HmkxAZc0u0PpvPVclVFkkIdkYAfE6J%2F7kS5ozwDC3qAuPzziJNyACicgsjpwmwW3WXS%2BMJtOmDAgM3v1NL01yq%2F3MWS4aAouyr%2FIyzeeCnYbjw8di%2BQ9W7kAkE3QUkMEV66Mqz%2Bvh%2FXwkBxlhNtOG4JjxDmmrun7c%2FTMoCgX%2Bu0Jf968i718FoHZvElD5IujCE3BU2WyZjn2RHnbLxtT4%2F3%2BaXVe03Z76F6JBW02NvXL7DI1xxznpY5%2BmSowxO7S%2BP8mjGwbJKHQE0KzW16zERFdAxZIA726MINJ5IUyWUDK%2BNEsJJtYMzbyV3BJBw2pgvkTP2T3d2kfqjpikfKkZJNhTMxcUvY%2FBaZH5rnQhHGeFu7Pn%2FBY0hVoFfvwW2xAfYeL75jmw3ENMDktQcFhJeqkSGxSEi44tLLCQpQHCojXv%2FuxNZTaE3RoCBAFhwNLM%2FrJuZIEAxL%2FLNHfMbGevHdjWCN4x5Qn%2BH%2BJM8Uju7SVEWxqonBWLnu%2BkxoOo80%2BaqMO6DDj1czKBjqkAZT6asKoimQew%2BWa6ZV14tar2rQHLH%2F9fsH04Mj6ahLxk6YKWuHVxUZ%2BQ2yy67WBzFboGYP283QnRWP%2BuIHE7mYdkWAc3R%2BHxJen0SrOD5BMib%2FXUTBEfpeucy2JcK9ucUVw%2FksltNj8q%2Fuq5uCxwZlf%2FsclCoTe%2BAQcdFJRrYxylC7xEgYmVVfhul9pPvX%2B0TZliUXZZuEJe26y32sqMcvLu%2FDX&X-Amz-Signature=97f0213a2cbff00eb816b6f50a74d6483a7e340378b556b6cbbd1380bc089658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R6JLAC%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPtVTn5PY95i%2B4%2FrJUqUvquUJqL%2Fjv%2FVR3whjAi%2BlR9QIhAOvqDJOYgUlr6MXplFwfdEqhVEX9ao%2FYje2pyxJ6AG8MKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYHMmODQqg7bCHaUMq3AN3ZxPkbFv5NcHO1iYs2iCxV8OBH7OJF2BliTyL24v2PmyMsJIPM%2Brcnx9yxpKSkY8b3eBDqJJrIP8BL9rXaWwhCE%2BkqonSLMXfYKBNjMP72E8kxVFDg3X9HmkxAZc0u0PpvPVclVFkkIdkYAfE6J%2F7kS5ozwDC3qAuPzziJNyACicgsjpwmwW3WXS%2BMJtOmDAgM3v1NL01yq%2F3MWS4aAouyr%2FIyzeeCnYbjw8di%2BQ9W7kAkE3QUkMEV66Mqz%2Bvh%2FXwkBxlhNtOG4JjxDmmrun7c%2FTMoCgX%2Bu0Jf968i718FoHZvElD5IujCE3BU2WyZjn2RHnbLxtT4%2F3%2BaXVe03Z76F6JBW02NvXL7DI1xxznpY5%2BmSowxO7S%2BP8mjGwbJKHQE0KzW16zERFdAxZIA726MINJ5IUyWUDK%2BNEsJJtYMzbyV3BJBw2pgvkTP2T3d2kfqjpikfKkZJNhTMxcUvY%2FBaZH5rnQhHGeFu7Pn%2FBY0hVoFfvwW2xAfYeL75jmw3ENMDktQcFhJeqkSGxSEi44tLLCQpQHCojXv%2FuxNZTaE3RoCBAFhwNLM%2FrJuZIEAxL%2FLNHfMbGevHdjWCN4x5Qn%2BH%2BJM8Uju7SVEWxqonBWLnu%2BkxoOo80%2BaqMO6DDj1czKBjqkAZT6asKoimQew%2BWa6ZV14tar2rQHLH%2F9fsH04Mj6ahLxk6YKWuHVxUZ%2BQ2yy67WBzFboGYP283QnRWP%2BuIHE7mYdkWAc3R%2BHxJen0SrOD5BMib%2FXUTBEfpeucy2JcK9ucUVw%2FksltNj8q%2Fuq5uCxwZlf%2FsclCoTe%2BAQcdFJRrYxylC7xEgYmVVfhul9pPvX%2B0TZliUXZZuEJe26y32sqMcvLu%2FDX&X-Amz-Signature=65000763754b04a50b15476c832b90365dfdb3fce94c6739092b6f02087ee12c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R6JLAC%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPtVTn5PY95i%2B4%2FrJUqUvquUJqL%2Fjv%2FVR3whjAi%2BlR9QIhAOvqDJOYgUlr6MXplFwfdEqhVEX9ao%2FYje2pyxJ6AG8MKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYHMmODQqg7bCHaUMq3AN3ZxPkbFv5NcHO1iYs2iCxV8OBH7OJF2BliTyL24v2PmyMsJIPM%2Brcnx9yxpKSkY8b3eBDqJJrIP8BL9rXaWwhCE%2BkqonSLMXfYKBNjMP72E8kxVFDg3X9HmkxAZc0u0PpvPVclVFkkIdkYAfE6J%2F7kS5ozwDC3qAuPzziJNyACicgsjpwmwW3WXS%2BMJtOmDAgM3v1NL01yq%2F3MWS4aAouyr%2FIyzeeCnYbjw8di%2BQ9W7kAkE3QUkMEV66Mqz%2Bvh%2FXwkBxlhNtOG4JjxDmmrun7c%2FTMoCgX%2Bu0Jf968i718FoHZvElD5IujCE3BU2WyZjn2RHnbLxtT4%2F3%2BaXVe03Z76F6JBW02NvXL7DI1xxznpY5%2BmSowxO7S%2BP8mjGwbJKHQE0KzW16zERFdAxZIA726MINJ5IUyWUDK%2BNEsJJtYMzbyV3BJBw2pgvkTP2T3d2kfqjpikfKkZJNhTMxcUvY%2FBaZH5rnQhHGeFu7Pn%2FBY0hVoFfvwW2xAfYeL75jmw3ENMDktQcFhJeqkSGxSEi44tLLCQpQHCojXv%2FuxNZTaE3RoCBAFhwNLM%2FrJuZIEAxL%2FLNHfMbGevHdjWCN4x5Qn%2BH%2BJM8Uju7SVEWxqonBWLnu%2BkxoOo80%2BaqMO6DDj1czKBjqkAZT6asKoimQew%2BWa6ZV14tar2rQHLH%2F9fsH04Mj6ahLxk6YKWuHVxUZ%2BQ2yy67WBzFboGYP283QnRWP%2BuIHE7mYdkWAc3R%2BHxJen0SrOD5BMib%2FXUTBEfpeucy2JcK9ucUVw%2FksltNj8q%2Fuq5uCxwZlf%2FsclCoTe%2BAQcdFJRrYxylC7xEgYmVVfhul9pPvX%2B0TZliUXZZuEJe26y32sqMcvLu%2FDX&X-Amz-Signature=088b1bb46e17919444dc5fb99f8b7f13931da2d75b23a72019dc552756045d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
