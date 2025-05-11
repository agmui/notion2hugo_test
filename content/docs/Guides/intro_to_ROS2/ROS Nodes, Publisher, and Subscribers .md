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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXW3J6M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvpQZipt3kyxdsVdNNAKKyveJ6zDvVUz9KrEHGPDFDVAIgFuySfzg8rz69iaBoJpon%2BLDiREokuu2GSd4P3YtgHK4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGyHUnJOUA4UsVF0yrcA6zGeDHVlu2ZBAntbgo4MGN5iD7VfX%2BwIFPDhFqMkr%2FtvGfbKnHTVWRdaeOi%2B17DG2eMu2bmIJV4JaapHY%2F%2B703FkaXUtksoeXkN7NHWirpN9TIDm6airFOw%2By2ZRIGrLhcS7C8XlwKCgc1wvgAMcxzaEKNlr8bC18GZ2hrYXqJe32hlzueTBDw4fppW00ABeeUsfD8PW3xAlTgNmMZzSUsEKP5iBbe7kiQ2iTTQCdJkErFUylCZAiRSgne17pqs0QQ3pmPXAE%2BARRQQU0VUMLsVWG6NTE9KtkBDij%2FdeyQ%2B%2Fltrswu4PUahRvmYS1xSWR2XFWkO%2FDTX%2Bg8SJeP7Z6X1klrro8Vzf3AnPtdNX5Vd3OGzWTysRYHfj6EH5OlnW9ebrOStOFRLYia%2FOhZhZg%2F77FMd21Ck4PRNlh%2BZjgkhZBT7rNUWk%2BoW6bqHdnL1mV7JNZOoI6FQK3WHXX1PMX%2BIcNXsmqV5N%2F7bO3bQw%2B16nu7B%2FJUBho8dMOmTKw0QJ5shu0jH8uicYlQW4PKBNPUZctPCjzcZhKBosEfvzsniJvA1yw%2FfNA07K7kz8J2KEaAEw32FqT%2BnZ5KHL9atpB7UkRuUYJA3boPiz4wgQl2jwgdJxCzPe7lDw8tzML%2B7hMEGOqUBNCbRfhLX6kEOQp9X3IRNdIxyjNmhhH%2Be70mH%2FgvdGigmoGmd9NmjUUJ9dso0bJHVl5ZeRsvAr76%2F7iqPFsP5KfFJTi5BL%2BK%2F9AtnS5WgfRaoy7bwJjdKIbUhoLaP87Qv%2FWg%2B%2F7HBFkZ%2FN%2FBDiw%2Falu%2BzjxBIdWt9zmCt34eGiGDsz9lgTyj7T9h45mIxJnuGh%2B3WAN4rq8UFurS1sX2UwZsMmi0L&X-Amz-Signature=d35cbe17034f541f46a15cd5906199b85a6a6a61ba626ce16ae0896f24cc07fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXW3J6M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvpQZipt3kyxdsVdNNAKKyveJ6zDvVUz9KrEHGPDFDVAIgFuySfzg8rz69iaBoJpon%2BLDiREokuu2GSd4P3YtgHK4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGyHUnJOUA4UsVF0yrcA6zGeDHVlu2ZBAntbgo4MGN5iD7VfX%2BwIFPDhFqMkr%2FtvGfbKnHTVWRdaeOi%2B17DG2eMu2bmIJV4JaapHY%2F%2B703FkaXUtksoeXkN7NHWirpN9TIDm6airFOw%2By2ZRIGrLhcS7C8XlwKCgc1wvgAMcxzaEKNlr8bC18GZ2hrYXqJe32hlzueTBDw4fppW00ABeeUsfD8PW3xAlTgNmMZzSUsEKP5iBbe7kiQ2iTTQCdJkErFUylCZAiRSgne17pqs0QQ3pmPXAE%2BARRQQU0VUMLsVWG6NTE9KtkBDij%2FdeyQ%2B%2Fltrswu4PUahRvmYS1xSWR2XFWkO%2FDTX%2Bg8SJeP7Z6X1klrro8Vzf3AnPtdNX5Vd3OGzWTysRYHfj6EH5OlnW9ebrOStOFRLYia%2FOhZhZg%2F77FMd21Ck4PRNlh%2BZjgkhZBT7rNUWk%2BoW6bqHdnL1mV7JNZOoI6FQK3WHXX1PMX%2BIcNXsmqV5N%2F7bO3bQw%2B16nu7B%2FJUBho8dMOmTKw0QJ5shu0jH8uicYlQW4PKBNPUZctPCjzcZhKBosEfvzsniJvA1yw%2FfNA07K7kz8J2KEaAEw32FqT%2BnZ5KHL9atpB7UkRuUYJA3boPiz4wgQl2jwgdJxCzPe7lDw8tzML%2B7hMEGOqUBNCbRfhLX6kEOQp9X3IRNdIxyjNmhhH%2Be70mH%2FgvdGigmoGmd9NmjUUJ9dso0bJHVl5ZeRsvAr76%2F7iqPFsP5KfFJTi5BL%2BK%2F9AtnS5WgfRaoy7bwJjdKIbUhoLaP87Qv%2FWg%2B%2F7HBFkZ%2FN%2FBDiw%2Falu%2BzjxBIdWt9zmCt34eGiGDsz9lgTyj7T9h45mIxJnuGh%2B3WAN4rq8UFurS1sX2UwZsMmi0L&X-Amz-Signature=d639c898b1a1f4445b5f0eb5eaebae6a1f01de7a373656fd43cb33d6379e194b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXW3J6M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvpQZipt3kyxdsVdNNAKKyveJ6zDvVUz9KrEHGPDFDVAIgFuySfzg8rz69iaBoJpon%2BLDiREokuu2GSd4P3YtgHK4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGyHUnJOUA4UsVF0yrcA6zGeDHVlu2ZBAntbgo4MGN5iD7VfX%2BwIFPDhFqMkr%2FtvGfbKnHTVWRdaeOi%2B17DG2eMu2bmIJV4JaapHY%2F%2B703FkaXUtksoeXkN7NHWirpN9TIDm6airFOw%2By2ZRIGrLhcS7C8XlwKCgc1wvgAMcxzaEKNlr8bC18GZ2hrYXqJe32hlzueTBDw4fppW00ABeeUsfD8PW3xAlTgNmMZzSUsEKP5iBbe7kiQ2iTTQCdJkErFUylCZAiRSgne17pqs0QQ3pmPXAE%2BARRQQU0VUMLsVWG6NTE9KtkBDij%2FdeyQ%2B%2Fltrswu4PUahRvmYS1xSWR2XFWkO%2FDTX%2Bg8SJeP7Z6X1klrro8Vzf3AnPtdNX5Vd3OGzWTysRYHfj6EH5OlnW9ebrOStOFRLYia%2FOhZhZg%2F77FMd21Ck4PRNlh%2BZjgkhZBT7rNUWk%2BoW6bqHdnL1mV7JNZOoI6FQK3WHXX1PMX%2BIcNXsmqV5N%2F7bO3bQw%2B16nu7B%2FJUBho8dMOmTKw0QJ5shu0jH8uicYlQW4PKBNPUZctPCjzcZhKBosEfvzsniJvA1yw%2FfNA07K7kz8J2KEaAEw32FqT%2BnZ5KHL9atpB7UkRuUYJA3boPiz4wgQl2jwgdJxCzPe7lDw8tzML%2B7hMEGOqUBNCbRfhLX6kEOQp9X3IRNdIxyjNmhhH%2Be70mH%2FgvdGigmoGmd9NmjUUJ9dso0bJHVl5ZeRsvAr76%2F7iqPFsP5KfFJTi5BL%2BK%2F9AtnS5WgfRaoy7bwJjdKIbUhoLaP87Qv%2FWg%2B%2F7HBFkZ%2FN%2FBDiw%2Falu%2BzjxBIdWt9zmCt34eGiGDsz9lgTyj7T9h45mIxJnuGh%2B3WAN4rq8UFurS1sX2UwZsMmi0L&X-Amz-Signature=e46cba7399b835c6a050bd69197f0f29dd1a82d60e9c1ae74b9ca66a676594f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXW3J6M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvpQZipt3kyxdsVdNNAKKyveJ6zDvVUz9KrEHGPDFDVAIgFuySfzg8rz69iaBoJpon%2BLDiREokuu2GSd4P3YtgHK4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGyHUnJOUA4UsVF0yrcA6zGeDHVlu2ZBAntbgo4MGN5iD7VfX%2BwIFPDhFqMkr%2FtvGfbKnHTVWRdaeOi%2B17DG2eMu2bmIJV4JaapHY%2F%2B703FkaXUtksoeXkN7NHWirpN9TIDm6airFOw%2By2ZRIGrLhcS7C8XlwKCgc1wvgAMcxzaEKNlr8bC18GZ2hrYXqJe32hlzueTBDw4fppW00ABeeUsfD8PW3xAlTgNmMZzSUsEKP5iBbe7kiQ2iTTQCdJkErFUylCZAiRSgne17pqs0QQ3pmPXAE%2BARRQQU0VUMLsVWG6NTE9KtkBDij%2FdeyQ%2B%2Fltrswu4PUahRvmYS1xSWR2XFWkO%2FDTX%2Bg8SJeP7Z6X1klrro8Vzf3AnPtdNX5Vd3OGzWTysRYHfj6EH5OlnW9ebrOStOFRLYia%2FOhZhZg%2F77FMd21Ck4PRNlh%2BZjgkhZBT7rNUWk%2BoW6bqHdnL1mV7JNZOoI6FQK3WHXX1PMX%2BIcNXsmqV5N%2F7bO3bQw%2B16nu7B%2FJUBho8dMOmTKw0QJ5shu0jH8uicYlQW4PKBNPUZctPCjzcZhKBosEfvzsniJvA1yw%2FfNA07K7kz8J2KEaAEw32FqT%2BnZ5KHL9atpB7UkRuUYJA3boPiz4wgQl2jwgdJxCzPe7lDw8tzML%2B7hMEGOqUBNCbRfhLX6kEOQp9X3IRNdIxyjNmhhH%2Be70mH%2FgvdGigmoGmd9NmjUUJ9dso0bJHVl5ZeRsvAr76%2F7iqPFsP5KfFJTi5BL%2BK%2F9AtnS5WgfRaoy7bwJjdKIbUhoLaP87Qv%2FWg%2B%2F7HBFkZ%2FN%2FBDiw%2Falu%2BzjxBIdWt9zmCt34eGiGDsz9lgTyj7T9h45mIxJnuGh%2B3WAN4rq8UFurS1sX2UwZsMmi0L&X-Amz-Signature=199e9fd2329494f07191629b05f837385730c9ff41b95efef66ebbad4dcbd187&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXW3J6M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvpQZipt3kyxdsVdNNAKKyveJ6zDvVUz9KrEHGPDFDVAIgFuySfzg8rz69iaBoJpon%2BLDiREokuu2GSd4P3YtgHK4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGyHUnJOUA4UsVF0yrcA6zGeDHVlu2ZBAntbgo4MGN5iD7VfX%2BwIFPDhFqMkr%2FtvGfbKnHTVWRdaeOi%2B17DG2eMu2bmIJV4JaapHY%2F%2B703FkaXUtksoeXkN7NHWirpN9TIDm6airFOw%2By2ZRIGrLhcS7C8XlwKCgc1wvgAMcxzaEKNlr8bC18GZ2hrYXqJe32hlzueTBDw4fppW00ABeeUsfD8PW3xAlTgNmMZzSUsEKP5iBbe7kiQ2iTTQCdJkErFUylCZAiRSgne17pqs0QQ3pmPXAE%2BARRQQU0VUMLsVWG6NTE9KtkBDij%2FdeyQ%2B%2Fltrswu4PUahRvmYS1xSWR2XFWkO%2FDTX%2Bg8SJeP7Z6X1klrro8Vzf3AnPtdNX5Vd3OGzWTysRYHfj6EH5OlnW9ebrOStOFRLYia%2FOhZhZg%2F77FMd21Ck4PRNlh%2BZjgkhZBT7rNUWk%2BoW6bqHdnL1mV7JNZOoI6FQK3WHXX1PMX%2BIcNXsmqV5N%2F7bO3bQw%2B16nu7B%2FJUBho8dMOmTKw0QJ5shu0jH8uicYlQW4PKBNPUZctPCjzcZhKBosEfvzsniJvA1yw%2FfNA07K7kz8J2KEaAEw32FqT%2BnZ5KHL9atpB7UkRuUYJA3boPiz4wgQl2jwgdJxCzPe7lDw8tzML%2B7hMEGOqUBNCbRfhLX6kEOQp9X3IRNdIxyjNmhhH%2Be70mH%2FgvdGigmoGmd9NmjUUJ9dso0bJHVl5ZeRsvAr76%2F7iqPFsP5KfFJTi5BL%2BK%2F9AtnS5WgfRaoy7bwJjdKIbUhoLaP87Qv%2FWg%2B%2F7HBFkZ%2FN%2FBDiw%2Falu%2BzjxBIdWt9zmCt34eGiGDsz9lgTyj7T9h45mIxJnuGh%2B3WAN4rq8UFurS1sX2UwZsMmi0L&X-Amz-Signature=955a7d2f9d3cf352413e825bc33ad47ca05a09399744fbd205caa03e6d0998a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXW3J6M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvpQZipt3kyxdsVdNNAKKyveJ6zDvVUz9KrEHGPDFDVAIgFuySfzg8rz69iaBoJpon%2BLDiREokuu2GSd4P3YtgHK4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGyHUnJOUA4UsVF0yrcA6zGeDHVlu2ZBAntbgo4MGN5iD7VfX%2BwIFPDhFqMkr%2FtvGfbKnHTVWRdaeOi%2B17DG2eMu2bmIJV4JaapHY%2F%2B703FkaXUtksoeXkN7NHWirpN9TIDm6airFOw%2By2ZRIGrLhcS7C8XlwKCgc1wvgAMcxzaEKNlr8bC18GZ2hrYXqJe32hlzueTBDw4fppW00ABeeUsfD8PW3xAlTgNmMZzSUsEKP5iBbe7kiQ2iTTQCdJkErFUylCZAiRSgne17pqs0QQ3pmPXAE%2BARRQQU0VUMLsVWG6NTE9KtkBDij%2FdeyQ%2B%2Fltrswu4PUahRvmYS1xSWR2XFWkO%2FDTX%2Bg8SJeP7Z6X1klrro8Vzf3AnPtdNX5Vd3OGzWTysRYHfj6EH5OlnW9ebrOStOFRLYia%2FOhZhZg%2F77FMd21Ck4PRNlh%2BZjgkhZBT7rNUWk%2BoW6bqHdnL1mV7JNZOoI6FQK3WHXX1PMX%2BIcNXsmqV5N%2F7bO3bQw%2B16nu7B%2FJUBho8dMOmTKw0QJ5shu0jH8uicYlQW4PKBNPUZctPCjzcZhKBosEfvzsniJvA1yw%2FfNA07K7kz8J2KEaAEw32FqT%2BnZ5KHL9atpB7UkRuUYJA3boPiz4wgQl2jwgdJxCzPe7lDw8tzML%2B7hMEGOqUBNCbRfhLX6kEOQp9X3IRNdIxyjNmhhH%2Be70mH%2FgvdGigmoGmd9NmjUUJ9dso0bJHVl5ZeRsvAr76%2F7iqPFsP5KfFJTi5BL%2BK%2F9AtnS5WgfRaoy7bwJjdKIbUhoLaP87Qv%2FWg%2B%2F7HBFkZ%2FN%2FBDiw%2Falu%2BzjxBIdWt9zmCt34eGiGDsz9lgTyj7T9h45mIxJnuGh%2B3WAN4rq8UFurS1sX2UwZsMmi0L&X-Amz-Signature=96bdd89ec1961c5179562fbf22316e47d44a3d5e127b21db9f0dc1fd9cdaa3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXW3J6M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvpQZipt3kyxdsVdNNAKKyveJ6zDvVUz9KrEHGPDFDVAIgFuySfzg8rz69iaBoJpon%2BLDiREokuu2GSd4P3YtgHK4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGyHUnJOUA4UsVF0yrcA6zGeDHVlu2ZBAntbgo4MGN5iD7VfX%2BwIFPDhFqMkr%2FtvGfbKnHTVWRdaeOi%2B17DG2eMu2bmIJV4JaapHY%2F%2B703FkaXUtksoeXkN7NHWirpN9TIDm6airFOw%2By2ZRIGrLhcS7C8XlwKCgc1wvgAMcxzaEKNlr8bC18GZ2hrYXqJe32hlzueTBDw4fppW00ABeeUsfD8PW3xAlTgNmMZzSUsEKP5iBbe7kiQ2iTTQCdJkErFUylCZAiRSgne17pqs0QQ3pmPXAE%2BARRQQU0VUMLsVWG6NTE9KtkBDij%2FdeyQ%2B%2Fltrswu4PUahRvmYS1xSWR2XFWkO%2FDTX%2Bg8SJeP7Z6X1klrro8Vzf3AnPtdNX5Vd3OGzWTysRYHfj6EH5OlnW9ebrOStOFRLYia%2FOhZhZg%2F77FMd21Ck4PRNlh%2BZjgkhZBT7rNUWk%2BoW6bqHdnL1mV7JNZOoI6FQK3WHXX1PMX%2BIcNXsmqV5N%2F7bO3bQw%2B16nu7B%2FJUBho8dMOmTKw0QJ5shu0jH8uicYlQW4PKBNPUZctPCjzcZhKBosEfvzsniJvA1yw%2FfNA07K7kz8J2KEaAEw32FqT%2BnZ5KHL9atpB7UkRuUYJA3boPiz4wgQl2jwgdJxCzPe7lDw8tzML%2B7hMEGOqUBNCbRfhLX6kEOQp9X3IRNdIxyjNmhhH%2Be70mH%2FgvdGigmoGmd9NmjUUJ9dso0bJHVl5ZeRsvAr76%2F7iqPFsP5KfFJTi5BL%2BK%2F9AtnS5WgfRaoy7bwJjdKIbUhoLaP87Qv%2FWg%2B%2F7HBFkZ%2FN%2FBDiw%2Falu%2BzjxBIdWt9zmCt34eGiGDsz9lgTyj7T9h45mIxJnuGh%2B3WAN4rq8UFurS1sX2UwZsMmi0L&X-Amz-Signature=ccf8769ed9059c0681908a53da7b586c7a0fb9087524536ba0aeb9fe25e0b15e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXW3J6M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvpQZipt3kyxdsVdNNAKKyveJ6zDvVUz9KrEHGPDFDVAIgFuySfzg8rz69iaBoJpon%2BLDiREokuu2GSd4P3YtgHK4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGyHUnJOUA4UsVF0yrcA6zGeDHVlu2ZBAntbgo4MGN5iD7VfX%2BwIFPDhFqMkr%2FtvGfbKnHTVWRdaeOi%2B17DG2eMu2bmIJV4JaapHY%2F%2B703FkaXUtksoeXkN7NHWirpN9TIDm6airFOw%2By2ZRIGrLhcS7C8XlwKCgc1wvgAMcxzaEKNlr8bC18GZ2hrYXqJe32hlzueTBDw4fppW00ABeeUsfD8PW3xAlTgNmMZzSUsEKP5iBbe7kiQ2iTTQCdJkErFUylCZAiRSgne17pqs0QQ3pmPXAE%2BARRQQU0VUMLsVWG6NTE9KtkBDij%2FdeyQ%2B%2Fltrswu4PUahRvmYS1xSWR2XFWkO%2FDTX%2Bg8SJeP7Z6X1klrro8Vzf3AnPtdNX5Vd3OGzWTysRYHfj6EH5OlnW9ebrOStOFRLYia%2FOhZhZg%2F77FMd21Ck4PRNlh%2BZjgkhZBT7rNUWk%2BoW6bqHdnL1mV7JNZOoI6FQK3WHXX1PMX%2BIcNXsmqV5N%2F7bO3bQw%2B16nu7B%2FJUBho8dMOmTKw0QJ5shu0jH8uicYlQW4PKBNPUZctPCjzcZhKBosEfvzsniJvA1yw%2FfNA07K7kz8J2KEaAEw32FqT%2BnZ5KHL9atpB7UkRuUYJA3boPiz4wgQl2jwgdJxCzPe7lDw8tzML%2B7hMEGOqUBNCbRfhLX6kEOQp9X3IRNdIxyjNmhhH%2Be70mH%2FgvdGigmoGmd9NmjUUJ9dso0bJHVl5ZeRsvAr76%2F7iqPFsP5KfFJTi5BL%2BK%2F9AtnS5WgfRaoy7bwJjdKIbUhoLaP87Qv%2FWg%2B%2F7HBFkZ%2FN%2FBDiw%2Falu%2BzjxBIdWt9zmCt34eGiGDsz9lgTyj7T9h45mIxJnuGh%2B3WAN4rq8UFurS1sX2UwZsMmi0L&X-Amz-Signature=1be62d6f2eff716d9677dfe4e1166172ac48fd9b582e2900a45d6d085b686f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
