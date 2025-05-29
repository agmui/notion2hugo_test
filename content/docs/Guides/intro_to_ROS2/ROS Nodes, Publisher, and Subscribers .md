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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXGTH3L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoq7qTyM565O6%2FgX9i9IgXYcVp3WZqgVhb%2FcLIFXrK7gIhALQCu%2FNBp7JAmqmbEhy6ICQ7hAy00wj2X%2FUO1b%2BmzjIqKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1IWwNyLezqey943Yq3APU1qMo1LUiORRBU80qZQnfGNu%2FLm2hnBGrzELt1ngVdu9d3D1%2FB4264IQsX3hSG1xnGvIBQRcGRgUSQ8zqWJs6RdrEmGjoexDEt7B3QOzY59BncJhAjIOSQ1vVQv7y9n047jze6cpTvR%2BzxLxwxDGDK0WCgTVVWnhANXrWiUghFnh4Forqo8HhSKWBcEgMJF7rZWtaSibHgU86%2FlPnfFUb3DyLTYXrccB5trdC9Dx8sMCsiTsjd8qYaDVIiycLavkdScOPq0ezdLlAzQ%2BuOv%2B3WPXR%2FirFzCCClBIlXnwSTuIXT%2F%2BGQofgGlBxA%2BO1Sg5CFXwOG2pbZh2PPoPiAKQvRBnLisafHLiV9Q6PpNg7Ui0poVkoDGrPTkxMretbwYm%2BeGjnELbyyzfyHX%2Fqq7Vk8eu5pZotkVBtOexoYy6epz%2FwNQ7JYspPM9Gj90gXVTFvO9uYaE%2FERmBkVi5dEXpKY%2FO7nCvXG4bc6%2FR84mpjIMkdN0S9jXAuPKMbttAxtwvWXiPtipfBKlyOF8MqtIrWvYAksgigej5UjGXA8lyhdxXet1ggJ4Zu5KnNITih28Td7qAzvhKG4DbRDoEagxUlMiKqOb2uHK50rzzXlhR5ANKRnkPDic9hnQsqgjCksuPBBjqkAQ%2Bh4ABkskbc6AeGrzn1161D6fu1Io9pzejL3B2DLXwkp%2FMyKyCaJ%2FYcFMcIWsXUauFSSR8e1cjQsncp0FqtWBxhqpPn7qtTyFpp7pJXh35ej9i4kHCnPBJ4sgRd654ti87Kf5IXHorUXr%2FsX9l5FXmjuvJCXR3L%2Bb%2BdYIYuyFOZgbsIfahX6HvDKYS4X%2BBg7F%2BeEG9N%2BEZJFcY55ENdPOlAAnl%2B&X-Amz-Signature=19e3ebc77a9ce02e32edea321c4e20e5647dde7b59a90434a202eb0846cf08de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXGTH3L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoq7qTyM565O6%2FgX9i9IgXYcVp3WZqgVhb%2FcLIFXrK7gIhALQCu%2FNBp7JAmqmbEhy6ICQ7hAy00wj2X%2FUO1b%2BmzjIqKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1IWwNyLezqey943Yq3APU1qMo1LUiORRBU80qZQnfGNu%2FLm2hnBGrzELt1ngVdu9d3D1%2FB4264IQsX3hSG1xnGvIBQRcGRgUSQ8zqWJs6RdrEmGjoexDEt7B3QOzY59BncJhAjIOSQ1vVQv7y9n047jze6cpTvR%2BzxLxwxDGDK0WCgTVVWnhANXrWiUghFnh4Forqo8HhSKWBcEgMJF7rZWtaSibHgU86%2FlPnfFUb3DyLTYXrccB5trdC9Dx8sMCsiTsjd8qYaDVIiycLavkdScOPq0ezdLlAzQ%2BuOv%2B3WPXR%2FirFzCCClBIlXnwSTuIXT%2F%2BGQofgGlBxA%2BO1Sg5CFXwOG2pbZh2PPoPiAKQvRBnLisafHLiV9Q6PpNg7Ui0poVkoDGrPTkxMretbwYm%2BeGjnELbyyzfyHX%2Fqq7Vk8eu5pZotkVBtOexoYy6epz%2FwNQ7JYspPM9Gj90gXVTFvO9uYaE%2FERmBkVi5dEXpKY%2FO7nCvXG4bc6%2FR84mpjIMkdN0S9jXAuPKMbttAxtwvWXiPtipfBKlyOF8MqtIrWvYAksgigej5UjGXA8lyhdxXet1ggJ4Zu5KnNITih28Td7qAzvhKG4DbRDoEagxUlMiKqOb2uHK50rzzXlhR5ANKRnkPDic9hnQsqgjCksuPBBjqkAQ%2Bh4ABkskbc6AeGrzn1161D6fu1Io9pzejL3B2DLXwkp%2FMyKyCaJ%2FYcFMcIWsXUauFSSR8e1cjQsncp0FqtWBxhqpPn7qtTyFpp7pJXh35ej9i4kHCnPBJ4sgRd654ti87Kf5IXHorUXr%2FsX9l5FXmjuvJCXR3L%2Bb%2BdYIYuyFOZgbsIfahX6HvDKYS4X%2BBg7F%2BeEG9N%2BEZJFcY55ENdPOlAAnl%2B&X-Amz-Signature=71736b7fc5b54e0e11373d640f128553b86be6af33d8295a07f547cba6d1425a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXGTH3L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoq7qTyM565O6%2FgX9i9IgXYcVp3WZqgVhb%2FcLIFXrK7gIhALQCu%2FNBp7JAmqmbEhy6ICQ7hAy00wj2X%2FUO1b%2BmzjIqKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1IWwNyLezqey943Yq3APU1qMo1LUiORRBU80qZQnfGNu%2FLm2hnBGrzELt1ngVdu9d3D1%2FB4264IQsX3hSG1xnGvIBQRcGRgUSQ8zqWJs6RdrEmGjoexDEt7B3QOzY59BncJhAjIOSQ1vVQv7y9n047jze6cpTvR%2BzxLxwxDGDK0WCgTVVWnhANXrWiUghFnh4Forqo8HhSKWBcEgMJF7rZWtaSibHgU86%2FlPnfFUb3DyLTYXrccB5trdC9Dx8sMCsiTsjd8qYaDVIiycLavkdScOPq0ezdLlAzQ%2BuOv%2B3WPXR%2FirFzCCClBIlXnwSTuIXT%2F%2BGQofgGlBxA%2BO1Sg5CFXwOG2pbZh2PPoPiAKQvRBnLisafHLiV9Q6PpNg7Ui0poVkoDGrPTkxMretbwYm%2BeGjnELbyyzfyHX%2Fqq7Vk8eu5pZotkVBtOexoYy6epz%2FwNQ7JYspPM9Gj90gXVTFvO9uYaE%2FERmBkVi5dEXpKY%2FO7nCvXG4bc6%2FR84mpjIMkdN0S9jXAuPKMbttAxtwvWXiPtipfBKlyOF8MqtIrWvYAksgigej5UjGXA8lyhdxXet1ggJ4Zu5KnNITih28Td7qAzvhKG4DbRDoEagxUlMiKqOb2uHK50rzzXlhR5ANKRnkPDic9hnQsqgjCksuPBBjqkAQ%2Bh4ABkskbc6AeGrzn1161D6fu1Io9pzejL3B2DLXwkp%2FMyKyCaJ%2FYcFMcIWsXUauFSSR8e1cjQsncp0FqtWBxhqpPn7qtTyFpp7pJXh35ej9i4kHCnPBJ4sgRd654ti87Kf5IXHorUXr%2FsX9l5FXmjuvJCXR3L%2Bb%2BdYIYuyFOZgbsIfahX6HvDKYS4X%2BBg7F%2BeEG9N%2BEZJFcY55ENdPOlAAnl%2B&X-Amz-Signature=c4e33de5992efeb4e85b806ce6b0bc815df6c72fa2bcf77234584d65ba2de8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXGTH3L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoq7qTyM565O6%2FgX9i9IgXYcVp3WZqgVhb%2FcLIFXrK7gIhALQCu%2FNBp7JAmqmbEhy6ICQ7hAy00wj2X%2FUO1b%2BmzjIqKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1IWwNyLezqey943Yq3APU1qMo1LUiORRBU80qZQnfGNu%2FLm2hnBGrzELt1ngVdu9d3D1%2FB4264IQsX3hSG1xnGvIBQRcGRgUSQ8zqWJs6RdrEmGjoexDEt7B3QOzY59BncJhAjIOSQ1vVQv7y9n047jze6cpTvR%2BzxLxwxDGDK0WCgTVVWnhANXrWiUghFnh4Forqo8HhSKWBcEgMJF7rZWtaSibHgU86%2FlPnfFUb3DyLTYXrccB5trdC9Dx8sMCsiTsjd8qYaDVIiycLavkdScOPq0ezdLlAzQ%2BuOv%2B3WPXR%2FirFzCCClBIlXnwSTuIXT%2F%2BGQofgGlBxA%2BO1Sg5CFXwOG2pbZh2PPoPiAKQvRBnLisafHLiV9Q6PpNg7Ui0poVkoDGrPTkxMretbwYm%2BeGjnELbyyzfyHX%2Fqq7Vk8eu5pZotkVBtOexoYy6epz%2FwNQ7JYspPM9Gj90gXVTFvO9uYaE%2FERmBkVi5dEXpKY%2FO7nCvXG4bc6%2FR84mpjIMkdN0S9jXAuPKMbttAxtwvWXiPtipfBKlyOF8MqtIrWvYAksgigej5UjGXA8lyhdxXet1ggJ4Zu5KnNITih28Td7qAzvhKG4DbRDoEagxUlMiKqOb2uHK50rzzXlhR5ANKRnkPDic9hnQsqgjCksuPBBjqkAQ%2Bh4ABkskbc6AeGrzn1161D6fu1Io9pzejL3B2DLXwkp%2FMyKyCaJ%2FYcFMcIWsXUauFSSR8e1cjQsncp0FqtWBxhqpPn7qtTyFpp7pJXh35ej9i4kHCnPBJ4sgRd654ti87Kf5IXHorUXr%2FsX9l5FXmjuvJCXR3L%2Bb%2BdYIYuyFOZgbsIfahX6HvDKYS4X%2BBg7F%2BeEG9N%2BEZJFcY55ENdPOlAAnl%2B&X-Amz-Signature=c57fa32bd84d4e31c18f18aa23a35eee60e2f6ecc159d9698f7746472ed5bc53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXGTH3L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoq7qTyM565O6%2FgX9i9IgXYcVp3WZqgVhb%2FcLIFXrK7gIhALQCu%2FNBp7JAmqmbEhy6ICQ7hAy00wj2X%2FUO1b%2BmzjIqKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1IWwNyLezqey943Yq3APU1qMo1LUiORRBU80qZQnfGNu%2FLm2hnBGrzELt1ngVdu9d3D1%2FB4264IQsX3hSG1xnGvIBQRcGRgUSQ8zqWJs6RdrEmGjoexDEt7B3QOzY59BncJhAjIOSQ1vVQv7y9n047jze6cpTvR%2BzxLxwxDGDK0WCgTVVWnhANXrWiUghFnh4Forqo8HhSKWBcEgMJF7rZWtaSibHgU86%2FlPnfFUb3DyLTYXrccB5trdC9Dx8sMCsiTsjd8qYaDVIiycLavkdScOPq0ezdLlAzQ%2BuOv%2B3WPXR%2FirFzCCClBIlXnwSTuIXT%2F%2BGQofgGlBxA%2BO1Sg5CFXwOG2pbZh2PPoPiAKQvRBnLisafHLiV9Q6PpNg7Ui0poVkoDGrPTkxMretbwYm%2BeGjnELbyyzfyHX%2Fqq7Vk8eu5pZotkVBtOexoYy6epz%2FwNQ7JYspPM9Gj90gXVTFvO9uYaE%2FERmBkVi5dEXpKY%2FO7nCvXG4bc6%2FR84mpjIMkdN0S9jXAuPKMbttAxtwvWXiPtipfBKlyOF8MqtIrWvYAksgigej5UjGXA8lyhdxXet1ggJ4Zu5KnNITih28Td7qAzvhKG4DbRDoEagxUlMiKqOb2uHK50rzzXlhR5ANKRnkPDic9hnQsqgjCksuPBBjqkAQ%2Bh4ABkskbc6AeGrzn1161D6fu1Io9pzejL3B2DLXwkp%2FMyKyCaJ%2FYcFMcIWsXUauFSSR8e1cjQsncp0FqtWBxhqpPn7qtTyFpp7pJXh35ej9i4kHCnPBJ4sgRd654ti87Kf5IXHorUXr%2FsX9l5FXmjuvJCXR3L%2Bb%2BdYIYuyFOZgbsIfahX6HvDKYS4X%2BBg7F%2BeEG9N%2BEZJFcY55ENdPOlAAnl%2B&X-Amz-Signature=2ae3cb943ef64cd797090c6de1834ad768e2cfccd4e24ebafc55c821ace0ff02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXGTH3L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoq7qTyM565O6%2FgX9i9IgXYcVp3WZqgVhb%2FcLIFXrK7gIhALQCu%2FNBp7JAmqmbEhy6ICQ7hAy00wj2X%2FUO1b%2BmzjIqKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1IWwNyLezqey943Yq3APU1qMo1LUiORRBU80qZQnfGNu%2FLm2hnBGrzELt1ngVdu9d3D1%2FB4264IQsX3hSG1xnGvIBQRcGRgUSQ8zqWJs6RdrEmGjoexDEt7B3QOzY59BncJhAjIOSQ1vVQv7y9n047jze6cpTvR%2BzxLxwxDGDK0WCgTVVWnhANXrWiUghFnh4Forqo8HhSKWBcEgMJF7rZWtaSibHgU86%2FlPnfFUb3DyLTYXrccB5trdC9Dx8sMCsiTsjd8qYaDVIiycLavkdScOPq0ezdLlAzQ%2BuOv%2B3WPXR%2FirFzCCClBIlXnwSTuIXT%2F%2BGQofgGlBxA%2BO1Sg5CFXwOG2pbZh2PPoPiAKQvRBnLisafHLiV9Q6PpNg7Ui0poVkoDGrPTkxMretbwYm%2BeGjnELbyyzfyHX%2Fqq7Vk8eu5pZotkVBtOexoYy6epz%2FwNQ7JYspPM9Gj90gXVTFvO9uYaE%2FERmBkVi5dEXpKY%2FO7nCvXG4bc6%2FR84mpjIMkdN0S9jXAuPKMbttAxtwvWXiPtipfBKlyOF8MqtIrWvYAksgigej5UjGXA8lyhdxXet1ggJ4Zu5KnNITih28Td7qAzvhKG4DbRDoEagxUlMiKqOb2uHK50rzzXlhR5ANKRnkPDic9hnQsqgjCksuPBBjqkAQ%2Bh4ABkskbc6AeGrzn1161D6fu1Io9pzejL3B2DLXwkp%2FMyKyCaJ%2FYcFMcIWsXUauFSSR8e1cjQsncp0FqtWBxhqpPn7qtTyFpp7pJXh35ej9i4kHCnPBJ4sgRd654ti87Kf5IXHorUXr%2FsX9l5FXmjuvJCXR3L%2Bb%2BdYIYuyFOZgbsIfahX6HvDKYS4X%2BBg7F%2BeEG9N%2BEZJFcY55ENdPOlAAnl%2B&X-Amz-Signature=1ed2c79574b56ddeed8cc226537c8d2d7202987330388b83e72efe60484f7d1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXGTH3L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoq7qTyM565O6%2FgX9i9IgXYcVp3WZqgVhb%2FcLIFXrK7gIhALQCu%2FNBp7JAmqmbEhy6ICQ7hAy00wj2X%2FUO1b%2BmzjIqKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1IWwNyLezqey943Yq3APU1qMo1LUiORRBU80qZQnfGNu%2FLm2hnBGrzELt1ngVdu9d3D1%2FB4264IQsX3hSG1xnGvIBQRcGRgUSQ8zqWJs6RdrEmGjoexDEt7B3QOzY59BncJhAjIOSQ1vVQv7y9n047jze6cpTvR%2BzxLxwxDGDK0WCgTVVWnhANXrWiUghFnh4Forqo8HhSKWBcEgMJF7rZWtaSibHgU86%2FlPnfFUb3DyLTYXrccB5trdC9Dx8sMCsiTsjd8qYaDVIiycLavkdScOPq0ezdLlAzQ%2BuOv%2B3WPXR%2FirFzCCClBIlXnwSTuIXT%2F%2BGQofgGlBxA%2BO1Sg5CFXwOG2pbZh2PPoPiAKQvRBnLisafHLiV9Q6PpNg7Ui0poVkoDGrPTkxMretbwYm%2BeGjnELbyyzfyHX%2Fqq7Vk8eu5pZotkVBtOexoYy6epz%2FwNQ7JYspPM9Gj90gXVTFvO9uYaE%2FERmBkVi5dEXpKY%2FO7nCvXG4bc6%2FR84mpjIMkdN0S9jXAuPKMbttAxtwvWXiPtipfBKlyOF8MqtIrWvYAksgigej5UjGXA8lyhdxXet1ggJ4Zu5KnNITih28Td7qAzvhKG4DbRDoEagxUlMiKqOb2uHK50rzzXlhR5ANKRnkPDic9hnQsqgjCksuPBBjqkAQ%2Bh4ABkskbc6AeGrzn1161D6fu1Io9pzejL3B2DLXwkp%2FMyKyCaJ%2FYcFMcIWsXUauFSSR8e1cjQsncp0FqtWBxhqpPn7qtTyFpp7pJXh35ej9i4kHCnPBJ4sgRd654ti87Kf5IXHorUXr%2FsX9l5FXmjuvJCXR3L%2Bb%2BdYIYuyFOZgbsIfahX6HvDKYS4X%2BBg7F%2BeEG9N%2BEZJFcY55ENdPOlAAnl%2B&X-Amz-Signature=e772f3c7a0ac8c03ce30a1e125ffeec15f0f424bcc5d0232bdbc033ab14bfcbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXGTH3L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoq7qTyM565O6%2FgX9i9IgXYcVp3WZqgVhb%2FcLIFXrK7gIhALQCu%2FNBp7JAmqmbEhy6ICQ7hAy00wj2X%2FUO1b%2BmzjIqKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1IWwNyLezqey943Yq3APU1qMo1LUiORRBU80qZQnfGNu%2FLm2hnBGrzELt1ngVdu9d3D1%2FB4264IQsX3hSG1xnGvIBQRcGRgUSQ8zqWJs6RdrEmGjoexDEt7B3QOzY59BncJhAjIOSQ1vVQv7y9n047jze6cpTvR%2BzxLxwxDGDK0WCgTVVWnhANXrWiUghFnh4Forqo8HhSKWBcEgMJF7rZWtaSibHgU86%2FlPnfFUb3DyLTYXrccB5trdC9Dx8sMCsiTsjd8qYaDVIiycLavkdScOPq0ezdLlAzQ%2BuOv%2B3WPXR%2FirFzCCClBIlXnwSTuIXT%2F%2BGQofgGlBxA%2BO1Sg5CFXwOG2pbZh2PPoPiAKQvRBnLisafHLiV9Q6PpNg7Ui0poVkoDGrPTkxMretbwYm%2BeGjnELbyyzfyHX%2Fqq7Vk8eu5pZotkVBtOexoYy6epz%2FwNQ7JYspPM9Gj90gXVTFvO9uYaE%2FERmBkVi5dEXpKY%2FO7nCvXG4bc6%2FR84mpjIMkdN0S9jXAuPKMbttAxtwvWXiPtipfBKlyOF8MqtIrWvYAksgigej5UjGXA8lyhdxXet1ggJ4Zu5KnNITih28Td7qAzvhKG4DbRDoEagxUlMiKqOb2uHK50rzzXlhR5ANKRnkPDic9hnQsqgjCksuPBBjqkAQ%2Bh4ABkskbc6AeGrzn1161D6fu1Io9pzejL3B2DLXwkp%2FMyKyCaJ%2FYcFMcIWsXUauFSSR8e1cjQsncp0FqtWBxhqpPn7qtTyFpp7pJXh35ej9i4kHCnPBJ4sgRd654ti87Kf5IXHorUXr%2FsX9l5FXmjuvJCXR3L%2Bb%2BdYIYuyFOZgbsIfahX6HvDKYS4X%2BBg7F%2BeEG9N%2BEZJFcY55ENdPOlAAnl%2B&X-Amz-Signature=c56461681a32cbf4bdc7727219561270735ed2e7b411a65aa8201a58dde900b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
