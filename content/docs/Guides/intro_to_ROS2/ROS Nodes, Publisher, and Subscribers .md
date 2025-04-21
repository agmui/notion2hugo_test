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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCSVNPQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBmKw6SCaQ396RbR%2B9MpTIN1UmHZcYBe52K79So%2B3NkrAiEA28H2dSNUoxhXcKczyZhwx%2FZc%2F%2F6pen%2FAXHA0W4LVeOUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoiYNTHYmBh6qIaqircAz%2FUCU9%2BM%2BnlEfa4HmoG67G%2Fwu8OYTWwY9vrR4EjDRZ%2FfevyOq5Eu2pZz%2FCXxXMMDf1OMn6qqBXbtvZru8P7mOh6%2BEYgcZt89aTPzoZ85NvOI1Zc0Y8JOVyG4sT2K7pQUqYcxTIGIgeaKmZ9FOWlFXzPk8oPUpTVopvgD4t9PzgFMWveZbe7YhvaRjHXuXjV%2FDkoroIbLFIbvPxhvo5dCFMxnPj%2BgytOsZy8Fteve11Y7Qtg8CA4k%2BdzTBisrcLo0U8nZGso9ahAjRAa3WCLUJaC604eGtN%2F6SNlmtq1Hm0cRxQuwCC0LBHchNAZzvVfExTWq4F0HdgWS6%2FgbuI%2B3hv1D9mr3n4EgoqB7sE1Cv6QTt1jnFbpA%2BypzpvUD0shmSVFvOev2jDVhwHEz%2FdYY9yeVzUxgvpHMxi5V8n5C4t1NTT%2BbeHL1%2BtxwZhVvC12hKcV5Ow4p1p8h8af63KTmhQLiaC8YaeEjU%2FJxCHox7Q3FX5IqWDFw2wGeluX0bUDZRvdyLlXvUMNiekFOQIytVIQonuGGg%2FBsAj87Etdx2aPjRkc%2BuysPfJwjDIvyErXIYXjynXgWAnyTUnBxvh2YsMt98cSR4zooR9CQHTEQPVR%2BZQYsIh4DhdT0k9UMOn4lsAGOqUBMrbClQl7RAsVUPVoMosCjRr6ly9xgplQMm8Nw36UTWomeiIJZqdqIBxRkJdGe3SCELDYBJLuKaKDbGmEYN1osn1kvqTFxyeYdhuS9gyWHxsY14soEn%2Bf%2FW3oea4Rb6F3WnW7mqCQKxuxYO4Fj3PjVG%2Fn52seogW9W7J2jiUZAklBYrdvnrngJM3pAjOAokon5sHc2E1QEofWqN3hO4AWECOVhXN8&X-Amz-Signature=b9d5acb38ab409e78e29e530fc3bde2e896f4093b01c89f2bf2beafb47080c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCSVNPQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBmKw6SCaQ396RbR%2B9MpTIN1UmHZcYBe52K79So%2B3NkrAiEA28H2dSNUoxhXcKczyZhwx%2FZc%2F%2F6pen%2FAXHA0W4LVeOUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoiYNTHYmBh6qIaqircAz%2FUCU9%2BM%2BnlEfa4HmoG67G%2Fwu8OYTWwY9vrR4EjDRZ%2FfevyOq5Eu2pZz%2FCXxXMMDf1OMn6qqBXbtvZru8P7mOh6%2BEYgcZt89aTPzoZ85NvOI1Zc0Y8JOVyG4sT2K7pQUqYcxTIGIgeaKmZ9FOWlFXzPk8oPUpTVopvgD4t9PzgFMWveZbe7YhvaRjHXuXjV%2FDkoroIbLFIbvPxhvo5dCFMxnPj%2BgytOsZy8Fteve11Y7Qtg8CA4k%2BdzTBisrcLo0U8nZGso9ahAjRAa3WCLUJaC604eGtN%2F6SNlmtq1Hm0cRxQuwCC0LBHchNAZzvVfExTWq4F0HdgWS6%2FgbuI%2B3hv1D9mr3n4EgoqB7sE1Cv6QTt1jnFbpA%2BypzpvUD0shmSVFvOev2jDVhwHEz%2FdYY9yeVzUxgvpHMxi5V8n5C4t1NTT%2BbeHL1%2BtxwZhVvC12hKcV5Ow4p1p8h8af63KTmhQLiaC8YaeEjU%2FJxCHox7Q3FX5IqWDFw2wGeluX0bUDZRvdyLlXvUMNiekFOQIytVIQonuGGg%2FBsAj87Etdx2aPjRkc%2BuysPfJwjDIvyErXIYXjynXgWAnyTUnBxvh2YsMt98cSR4zooR9CQHTEQPVR%2BZQYsIh4DhdT0k9UMOn4lsAGOqUBMrbClQl7RAsVUPVoMosCjRr6ly9xgplQMm8Nw36UTWomeiIJZqdqIBxRkJdGe3SCELDYBJLuKaKDbGmEYN1osn1kvqTFxyeYdhuS9gyWHxsY14soEn%2Bf%2FW3oea4Rb6F3WnW7mqCQKxuxYO4Fj3PjVG%2Fn52seogW9W7J2jiUZAklBYrdvnrngJM3pAjOAokon5sHc2E1QEofWqN3hO4AWECOVhXN8&X-Amz-Signature=b38feb7aebf0f60411f997d8fd6ed1da3974d1fd55ef282cefae0aae59a262e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCSVNPQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBmKw6SCaQ396RbR%2B9MpTIN1UmHZcYBe52K79So%2B3NkrAiEA28H2dSNUoxhXcKczyZhwx%2FZc%2F%2F6pen%2FAXHA0W4LVeOUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoiYNTHYmBh6qIaqircAz%2FUCU9%2BM%2BnlEfa4HmoG67G%2Fwu8OYTWwY9vrR4EjDRZ%2FfevyOq5Eu2pZz%2FCXxXMMDf1OMn6qqBXbtvZru8P7mOh6%2BEYgcZt89aTPzoZ85NvOI1Zc0Y8JOVyG4sT2K7pQUqYcxTIGIgeaKmZ9FOWlFXzPk8oPUpTVopvgD4t9PzgFMWveZbe7YhvaRjHXuXjV%2FDkoroIbLFIbvPxhvo5dCFMxnPj%2BgytOsZy8Fteve11Y7Qtg8CA4k%2BdzTBisrcLo0U8nZGso9ahAjRAa3WCLUJaC604eGtN%2F6SNlmtq1Hm0cRxQuwCC0LBHchNAZzvVfExTWq4F0HdgWS6%2FgbuI%2B3hv1D9mr3n4EgoqB7sE1Cv6QTt1jnFbpA%2BypzpvUD0shmSVFvOev2jDVhwHEz%2FdYY9yeVzUxgvpHMxi5V8n5C4t1NTT%2BbeHL1%2BtxwZhVvC12hKcV5Ow4p1p8h8af63KTmhQLiaC8YaeEjU%2FJxCHox7Q3FX5IqWDFw2wGeluX0bUDZRvdyLlXvUMNiekFOQIytVIQonuGGg%2FBsAj87Etdx2aPjRkc%2BuysPfJwjDIvyErXIYXjynXgWAnyTUnBxvh2YsMt98cSR4zooR9CQHTEQPVR%2BZQYsIh4DhdT0k9UMOn4lsAGOqUBMrbClQl7RAsVUPVoMosCjRr6ly9xgplQMm8Nw36UTWomeiIJZqdqIBxRkJdGe3SCELDYBJLuKaKDbGmEYN1osn1kvqTFxyeYdhuS9gyWHxsY14soEn%2Bf%2FW3oea4Rb6F3WnW7mqCQKxuxYO4Fj3PjVG%2Fn52seogW9W7J2jiUZAklBYrdvnrngJM3pAjOAokon5sHc2E1QEofWqN3hO4AWECOVhXN8&X-Amz-Signature=3d70eeacc6b8303faceb80d2db3693d15edbb5ea4de258b3933b59d3e013214c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCSVNPQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBmKw6SCaQ396RbR%2B9MpTIN1UmHZcYBe52K79So%2B3NkrAiEA28H2dSNUoxhXcKczyZhwx%2FZc%2F%2F6pen%2FAXHA0W4LVeOUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoiYNTHYmBh6qIaqircAz%2FUCU9%2BM%2BnlEfa4HmoG67G%2Fwu8OYTWwY9vrR4EjDRZ%2FfevyOq5Eu2pZz%2FCXxXMMDf1OMn6qqBXbtvZru8P7mOh6%2BEYgcZt89aTPzoZ85NvOI1Zc0Y8JOVyG4sT2K7pQUqYcxTIGIgeaKmZ9FOWlFXzPk8oPUpTVopvgD4t9PzgFMWveZbe7YhvaRjHXuXjV%2FDkoroIbLFIbvPxhvo5dCFMxnPj%2BgytOsZy8Fteve11Y7Qtg8CA4k%2BdzTBisrcLo0U8nZGso9ahAjRAa3WCLUJaC604eGtN%2F6SNlmtq1Hm0cRxQuwCC0LBHchNAZzvVfExTWq4F0HdgWS6%2FgbuI%2B3hv1D9mr3n4EgoqB7sE1Cv6QTt1jnFbpA%2BypzpvUD0shmSVFvOev2jDVhwHEz%2FdYY9yeVzUxgvpHMxi5V8n5C4t1NTT%2BbeHL1%2BtxwZhVvC12hKcV5Ow4p1p8h8af63KTmhQLiaC8YaeEjU%2FJxCHox7Q3FX5IqWDFw2wGeluX0bUDZRvdyLlXvUMNiekFOQIytVIQonuGGg%2FBsAj87Etdx2aPjRkc%2BuysPfJwjDIvyErXIYXjynXgWAnyTUnBxvh2YsMt98cSR4zooR9CQHTEQPVR%2BZQYsIh4DhdT0k9UMOn4lsAGOqUBMrbClQl7RAsVUPVoMosCjRr6ly9xgplQMm8Nw36UTWomeiIJZqdqIBxRkJdGe3SCELDYBJLuKaKDbGmEYN1osn1kvqTFxyeYdhuS9gyWHxsY14soEn%2Bf%2FW3oea4Rb6F3WnW7mqCQKxuxYO4Fj3PjVG%2Fn52seogW9W7J2jiUZAklBYrdvnrngJM3pAjOAokon5sHc2E1QEofWqN3hO4AWECOVhXN8&X-Amz-Signature=6690eae705f6441af78e3dbc35b1887a18d89f0707c6ae3b90f5b09a260ae104&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCSVNPQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBmKw6SCaQ396RbR%2B9MpTIN1UmHZcYBe52K79So%2B3NkrAiEA28H2dSNUoxhXcKczyZhwx%2FZc%2F%2F6pen%2FAXHA0W4LVeOUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoiYNTHYmBh6qIaqircAz%2FUCU9%2BM%2BnlEfa4HmoG67G%2Fwu8OYTWwY9vrR4EjDRZ%2FfevyOq5Eu2pZz%2FCXxXMMDf1OMn6qqBXbtvZru8P7mOh6%2BEYgcZt89aTPzoZ85NvOI1Zc0Y8JOVyG4sT2K7pQUqYcxTIGIgeaKmZ9FOWlFXzPk8oPUpTVopvgD4t9PzgFMWveZbe7YhvaRjHXuXjV%2FDkoroIbLFIbvPxhvo5dCFMxnPj%2BgytOsZy8Fteve11Y7Qtg8CA4k%2BdzTBisrcLo0U8nZGso9ahAjRAa3WCLUJaC604eGtN%2F6SNlmtq1Hm0cRxQuwCC0LBHchNAZzvVfExTWq4F0HdgWS6%2FgbuI%2B3hv1D9mr3n4EgoqB7sE1Cv6QTt1jnFbpA%2BypzpvUD0shmSVFvOev2jDVhwHEz%2FdYY9yeVzUxgvpHMxi5V8n5C4t1NTT%2BbeHL1%2BtxwZhVvC12hKcV5Ow4p1p8h8af63KTmhQLiaC8YaeEjU%2FJxCHox7Q3FX5IqWDFw2wGeluX0bUDZRvdyLlXvUMNiekFOQIytVIQonuGGg%2FBsAj87Etdx2aPjRkc%2BuysPfJwjDIvyErXIYXjynXgWAnyTUnBxvh2YsMt98cSR4zooR9CQHTEQPVR%2BZQYsIh4DhdT0k9UMOn4lsAGOqUBMrbClQl7RAsVUPVoMosCjRr6ly9xgplQMm8Nw36UTWomeiIJZqdqIBxRkJdGe3SCELDYBJLuKaKDbGmEYN1osn1kvqTFxyeYdhuS9gyWHxsY14soEn%2Bf%2FW3oea4Rb6F3WnW7mqCQKxuxYO4Fj3PjVG%2Fn52seogW9W7J2jiUZAklBYrdvnrngJM3pAjOAokon5sHc2E1QEofWqN3hO4AWECOVhXN8&X-Amz-Signature=8a42dd40ba0ea0d5f951642f1be95a82335a5866792af2f944ea6f95ff483dff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCSVNPQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBmKw6SCaQ396RbR%2B9MpTIN1UmHZcYBe52K79So%2B3NkrAiEA28H2dSNUoxhXcKczyZhwx%2FZc%2F%2F6pen%2FAXHA0W4LVeOUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoiYNTHYmBh6qIaqircAz%2FUCU9%2BM%2BnlEfa4HmoG67G%2Fwu8OYTWwY9vrR4EjDRZ%2FfevyOq5Eu2pZz%2FCXxXMMDf1OMn6qqBXbtvZru8P7mOh6%2BEYgcZt89aTPzoZ85NvOI1Zc0Y8JOVyG4sT2K7pQUqYcxTIGIgeaKmZ9FOWlFXzPk8oPUpTVopvgD4t9PzgFMWveZbe7YhvaRjHXuXjV%2FDkoroIbLFIbvPxhvo5dCFMxnPj%2BgytOsZy8Fteve11Y7Qtg8CA4k%2BdzTBisrcLo0U8nZGso9ahAjRAa3WCLUJaC604eGtN%2F6SNlmtq1Hm0cRxQuwCC0LBHchNAZzvVfExTWq4F0HdgWS6%2FgbuI%2B3hv1D9mr3n4EgoqB7sE1Cv6QTt1jnFbpA%2BypzpvUD0shmSVFvOev2jDVhwHEz%2FdYY9yeVzUxgvpHMxi5V8n5C4t1NTT%2BbeHL1%2BtxwZhVvC12hKcV5Ow4p1p8h8af63KTmhQLiaC8YaeEjU%2FJxCHox7Q3FX5IqWDFw2wGeluX0bUDZRvdyLlXvUMNiekFOQIytVIQonuGGg%2FBsAj87Etdx2aPjRkc%2BuysPfJwjDIvyErXIYXjynXgWAnyTUnBxvh2YsMt98cSR4zooR9CQHTEQPVR%2BZQYsIh4DhdT0k9UMOn4lsAGOqUBMrbClQl7RAsVUPVoMosCjRr6ly9xgplQMm8Nw36UTWomeiIJZqdqIBxRkJdGe3SCELDYBJLuKaKDbGmEYN1osn1kvqTFxyeYdhuS9gyWHxsY14soEn%2Bf%2FW3oea4Rb6F3WnW7mqCQKxuxYO4Fj3PjVG%2Fn52seogW9W7J2jiUZAklBYrdvnrngJM3pAjOAokon5sHc2E1QEofWqN3hO4AWECOVhXN8&X-Amz-Signature=ae3fc64415359f048b1554fa84876ee273539db6a96ff85c899350fca792f3da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCSVNPQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBmKw6SCaQ396RbR%2B9MpTIN1UmHZcYBe52K79So%2B3NkrAiEA28H2dSNUoxhXcKczyZhwx%2FZc%2F%2F6pen%2FAXHA0W4LVeOUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoiYNTHYmBh6qIaqircAz%2FUCU9%2BM%2BnlEfa4HmoG67G%2Fwu8OYTWwY9vrR4EjDRZ%2FfevyOq5Eu2pZz%2FCXxXMMDf1OMn6qqBXbtvZru8P7mOh6%2BEYgcZt89aTPzoZ85NvOI1Zc0Y8JOVyG4sT2K7pQUqYcxTIGIgeaKmZ9FOWlFXzPk8oPUpTVopvgD4t9PzgFMWveZbe7YhvaRjHXuXjV%2FDkoroIbLFIbvPxhvo5dCFMxnPj%2BgytOsZy8Fteve11Y7Qtg8CA4k%2BdzTBisrcLo0U8nZGso9ahAjRAa3WCLUJaC604eGtN%2F6SNlmtq1Hm0cRxQuwCC0LBHchNAZzvVfExTWq4F0HdgWS6%2FgbuI%2B3hv1D9mr3n4EgoqB7sE1Cv6QTt1jnFbpA%2BypzpvUD0shmSVFvOev2jDVhwHEz%2FdYY9yeVzUxgvpHMxi5V8n5C4t1NTT%2BbeHL1%2BtxwZhVvC12hKcV5Ow4p1p8h8af63KTmhQLiaC8YaeEjU%2FJxCHox7Q3FX5IqWDFw2wGeluX0bUDZRvdyLlXvUMNiekFOQIytVIQonuGGg%2FBsAj87Etdx2aPjRkc%2BuysPfJwjDIvyErXIYXjynXgWAnyTUnBxvh2YsMt98cSR4zooR9CQHTEQPVR%2BZQYsIh4DhdT0k9UMOn4lsAGOqUBMrbClQl7RAsVUPVoMosCjRr6ly9xgplQMm8Nw36UTWomeiIJZqdqIBxRkJdGe3SCELDYBJLuKaKDbGmEYN1osn1kvqTFxyeYdhuS9gyWHxsY14soEn%2Bf%2FW3oea4Rb6F3WnW7mqCQKxuxYO4Fj3PjVG%2Fn52seogW9W7J2jiUZAklBYrdvnrngJM3pAjOAokon5sHc2E1QEofWqN3hO4AWECOVhXN8&X-Amz-Signature=0ef5983a0e96afbec89c3c3c15bcdccb4ab9694befa3148173ace91bd2f63dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCSVNPQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBmKw6SCaQ396RbR%2B9MpTIN1UmHZcYBe52K79So%2B3NkrAiEA28H2dSNUoxhXcKczyZhwx%2FZc%2F%2F6pen%2FAXHA0W4LVeOUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoiYNTHYmBh6qIaqircAz%2FUCU9%2BM%2BnlEfa4HmoG67G%2Fwu8OYTWwY9vrR4EjDRZ%2FfevyOq5Eu2pZz%2FCXxXMMDf1OMn6qqBXbtvZru8P7mOh6%2BEYgcZt89aTPzoZ85NvOI1Zc0Y8JOVyG4sT2K7pQUqYcxTIGIgeaKmZ9FOWlFXzPk8oPUpTVopvgD4t9PzgFMWveZbe7YhvaRjHXuXjV%2FDkoroIbLFIbvPxhvo5dCFMxnPj%2BgytOsZy8Fteve11Y7Qtg8CA4k%2BdzTBisrcLo0U8nZGso9ahAjRAa3WCLUJaC604eGtN%2F6SNlmtq1Hm0cRxQuwCC0LBHchNAZzvVfExTWq4F0HdgWS6%2FgbuI%2B3hv1D9mr3n4EgoqB7sE1Cv6QTt1jnFbpA%2BypzpvUD0shmSVFvOev2jDVhwHEz%2FdYY9yeVzUxgvpHMxi5V8n5C4t1NTT%2BbeHL1%2BtxwZhVvC12hKcV5Ow4p1p8h8af63KTmhQLiaC8YaeEjU%2FJxCHox7Q3FX5IqWDFw2wGeluX0bUDZRvdyLlXvUMNiekFOQIytVIQonuGGg%2FBsAj87Etdx2aPjRkc%2BuysPfJwjDIvyErXIYXjynXgWAnyTUnBxvh2YsMt98cSR4zooR9CQHTEQPVR%2BZQYsIh4DhdT0k9UMOn4lsAGOqUBMrbClQl7RAsVUPVoMosCjRr6ly9xgplQMm8Nw36UTWomeiIJZqdqIBxRkJdGe3SCELDYBJLuKaKDbGmEYN1osn1kvqTFxyeYdhuS9gyWHxsY14soEn%2Bf%2FW3oea4Rb6F3WnW7mqCQKxuxYO4Fj3PjVG%2Fn52seogW9W7J2jiUZAklBYrdvnrngJM3pAjOAokon5sHc2E1QEofWqN3hO4AWECOVhXN8&X-Amz-Signature=c1826c5c3c6708e18c4cb40932398aaa661ba01df4379a907efda9b01e42e5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
