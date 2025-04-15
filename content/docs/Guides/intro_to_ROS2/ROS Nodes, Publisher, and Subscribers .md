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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIP34OM2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBsC8gwovLvXrKJiSsfFKxe1ZAoq9XkN1YT%2B%2Fq%2FXfS5AIhAISOOxJFsKIX25drZp4OFeTsifHYaTBm56zGsHcTBoEpKv8DCC4QABoMNjM3NDIzMTgzODA1IgwiEbz5D0c6j1RkBEIq3AMBMtBMgWPLM%2BMM2ZvbtMvf9JD6XNxRbsAweMva92HNFnrLFo56ijehM7lpboY5nsGiPjVJH%2BSkKf9qlXyUj%2BNNRS4NFIRrk4dAiBGK%2FOUX9BuLXskgRc7IDSUiUVIaM0hnagX4WyhmtmRru%2FoW7Na%2FhLodMEBODt%2F4uSHsN6De0jp6KqOPxmUNrHSSnOaVaiN3o8EMzHx8pvDh7o7zQZPP8NBTwM2qhY0lS5tVHl9RlRbKLb3rehrCRESClVQmLCjfFAg5BaVULB4AL6yIyFM7X%2FfPxNdiELZe55TzcLFPhvsgnKAuQxdxJeDXdzW5DUglXp1d4PUmK9164B1jCRXXh3l%2B%2Fd0b7ijuZpfC0t8LoKQZl0Ets%2BIJN6zeuBuI%2FfoH3xXPwve8e5GUneD0ffXkKteAF4OcnZ0IwbQtSB4UOKExughPmeihnn3pqSs59nY0xnkBfhBYCIdA6j90cpeHZTnPR6bdEyGTdhDWODbaRYxYQJ4OG60DxmObTfO9ZE0A7qm5eKsepjsaDiu09NkU%2FkPbry1ZsFCqFVAzt68GWiNtVhkhTcVt8XHgMgXqgsBmkjQ7VR%2F%2B0CspP%2FLLsQqdaHyYYmX0ejGB26NG4IIVvyBo57eK1%2B8m%2BDZBwzDGpfm%2FBjqkAaXQY66Wnp7R%2BHVPS2Rs9xTp6V0T7Wzh5rRgdWxHg5UQyoJEkdnoVSEMfejFmdqpqpiZ8atYlN1VVx8cB8xZAcISUghp7mWBpIyB%2Bijic8MxJHiqt7eZadbo3IWsDdsl9qGD9Nlk7PTR%2FuypB8hIPLXhP3gEiVcMr5iGRYiJC2vz3xI2vtkiV1ydy%2BvjP3snqGJq%2BGGWZJyOZP9tEBWG7zK67Ko9&X-Amz-Signature=9e66b92a2ddaf85b50687956d3a2f518982446a58d3e200a8539ef020c5df2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIP34OM2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBsC8gwovLvXrKJiSsfFKxe1ZAoq9XkN1YT%2B%2Fq%2FXfS5AIhAISOOxJFsKIX25drZp4OFeTsifHYaTBm56zGsHcTBoEpKv8DCC4QABoMNjM3NDIzMTgzODA1IgwiEbz5D0c6j1RkBEIq3AMBMtBMgWPLM%2BMM2ZvbtMvf9JD6XNxRbsAweMva92HNFnrLFo56ijehM7lpboY5nsGiPjVJH%2BSkKf9qlXyUj%2BNNRS4NFIRrk4dAiBGK%2FOUX9BuLXskgRc7IDSUiUVIaM0hnagX4WyhmtmRru%2FoW7Na%2FhLodMEBODt%2F4uSHsN6De0jp6KqOPxmUNrHSSnOaVaiN3o8EMzHx8pvDh7o7zQZPP8NBTwM2qhY0lS5tVHl9RlRbKLb3rehrCRESClVQmLCjfFAg5BaVULB4AL6yIyFM7X%2FfPxNdiELZe55TzcLFPhvsgnKAuQxdxJeDXdzW5DUglXp1d4PUmK9164B1jCRXXh3l%2B%2Fd0b7ijuZpfC0t8LoKQZl0Ets%2BIJN6zeuBuI%2FfoH3xXPwve8e5GUneD0ffXkKteAF4OcnZ0IwbQtSB4UOKExughPmeihnn3pqSs59nY0xnkBfhBYCIdA6j90cpeHZTnPR6bdEyGTdhDWODbaRYxYQJ4OG60DxmObTfO9ZE0A7qm5eKsepjsaDiu09NkU%2FkPbry1ZsFCqFVAzt68GWiNtVhkhTcVt8XHgMgXqgsBmkjQ7VR%2F%2B0CspP%2FLLsQqdaHyYYmX0ejGB26NG4IIVvyBo57eK1%2B8m%2BDZBwzDGpfm%2FBjqkAaXQY66Wnp7R%2BHVPS2Rs9xTp6V0T7Wzh5rRgdWxHg5UQyoJEkdnoVSEMfejFmdqpqpiZ8atYlN1VVx8cB8xZAcISUghp7mWBpIyB%2Bijic8MxJHiqt7eZadbo3IWsDdsl9qGD9Nlk7PTR%2FuypB8hIPLXhP3gEiVcMr5iGRYiJC2vz3xI2vtkiV1ydy%2BvjP3snqGJq%2BGGWZJyOZP9tEBWG7zK67Ko9&X-Amz-Signature=a0998b4efcda33e743bf0d085449a43ccffaea5dd2ceeee5e5042339dc4add7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIP34OM2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBsC8gwovLvXrKJiSsfFKxe1ZAoq9XkN1YT%2B%2Fq%2FXfS5AIhAISOOxJFsKIX25drZp4OFeTsifHYaTBm56zGsHcTBoEpKv8DCC4QABoMNjM3NDIzMTgzODA1IgwiEbz5D0c6j1RkBEIq3AMBMtBMgWPLM%2BMM2ZvbtMvf9JD6XNxRbsAweMva92HNFnrLFo56ijehM7lpboY5nsGiPjVJH%2BSkKf9qlXyUj%2BNNRS4NFIRrk4dAiBGK%2FOUX9BuLXskgRc7IDSUiUVIaM0hnagX4WyhmtmRru%2FoW7Na%2FhLodMEBODt%2F4uSHsN6De0jp6KqOPxmUNrHSSnOaVaiN3o8EMzHx8pvDh7o7zQZPP8NBTwM2qhY0lS5tVHl9RlRbKLb3rehrCRESClVQmLCjfFAg5BaVULB4AL6yIyFM7X%2FfPxNdiELZe55TzcLFPhvsgnKAuQxdxJeDXdzW5DUglXp1d4PUmK9164B1jCRXXh3l%2B%2Fd0b7ijuZpfC0t8LoKQZl0Ets%2BIJN6zeuBuI%2FfoH3xXPwve8e5GUneD0ffXkKteAF4OcnZ0IwbQtSB4UOKExughPmeihnn3pqSs59nY0xnkBfhBYCIdA6j90cpeHZTnPR6bdEyGTdhDWODbaRYxYQJ4OG60DxmObTfO9ZE0A7qm5eKsepjsaDiu09NkU%2FkPbry1ZsFCqFVAzt68GWiNtVhkhTcVt8XHgMgXqgsBmkjQ7VR%2F%2B0CspP%2FLLsQqdaHyYYmX0ejGB26NG4IIVvyBo57eK1%2B8m%2BDZBwzDGpfm%2FBjqkAaXQY66Wnp7R%2BHVPS2Rs9xTp6V0T7Wzh5rRgdWxHg5UQyoJEkdnoVSEMfejFmdqpqpiZ8atYlN1VVx8cB8xZAcISUghp7mWBpIyB%2Bijic8MxJHiqt7eZadbo3IWsDdsl9qGD9Nlk7PTR%2FuypB8hIPLXhP3gEiVcMr5iGRYiJC2vz3xI2vtkiV1ydy%2BvjP3snqGJq%2BGGWZJyOZP9tEBWG7zK67Ko9&X-Amz-Signature=0e506029dc3e4f83ce63bb5a0e2e89549809f0eb66e6096cf44a89a941b23a37&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIP34OM2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBsC8gwovLvXrKJiSsfFKxe1ZAoq9XkN1YT%2B%2Fq%2FXfS5AIhAISOOxJFsKIX25drZp4OFeTsifHYaTBm56zGsHcTBoEpKv8DCC4QABoMNjM3NDIzMTgzODA1IgwiEbz5D0c6j1RkBEIq3AMBMtBMgWPLM%2BMM2ZvbtMvf9JD6XNxRbsAweMva92HNFnrLFo56ijehM7lpboY5nsGiPjVJH%2BSkKf9qlXyUj%2BNNRS4NFIRrk4dAiBGK%2FOUX9BuLXskgRc7IDSUiUVIaM0hnagX4WyhmtmRru%2FoW7Na%2FhLodMEBODt%2F4uSHsN6De0jp6KqOPxmUNrHSSnOaVaiN3o8EMzHx8pvDh7o7zQZPP8NBTwM2qhY0lS5tVHl9RlRbKLb3rehrCRESClVQmLCjfFAg5BaVULB4AL6yIyFM7X%2FfPxNdiELZe55TzcLFPhvsgnKAuQxdxJeDXdzW5DUglXp1d4PUmK9164B1jCRXXh3l%2B%2Fd0b7ijuZpfC0t8LoKQZl0Ets%2BIJN6zeuBuI%2FfoH3xXPwve8e5GUneD0ffXkKteAF4OcnZ0IwbQtSB4UOKExughPmeihnn3pqSs59nY0xnkBfhBYCIdA6j90cpeHZTnPR6bdEyGTdhDWODbaRYxYQJ4OG60DxmObTfO9ZE0A7qm5eKsepjsaDiu09NkU%2FkPbry1ZsFCqFVAzt68GWiNtVhkhTcVt8XHgMgXqgsBmkjQ7VR%2F%2B0CspP%2FLLsQqdaHyYYmX0ejGB26NG4IIVvyBo57eK1%2B8m%2BDZBwzDGpfm%2FBjqkAaXQY66Wnp7R%2BHVPS2Rs9xTp6V0T7Wzh5rRgdWxHg5UQyoJEkdnoVSEMfejFmdqpqpiZ8atYlN1VVx8cB8xZAcISUghp7mWBpIyB%2Bijic8MxJHiqt7eZadbo3IWsDdsl9qGD9Nlk7PTR%2FuypB8hIPLXhP3gEiVcMr5iGRYiJC2vz3xI2vtkiV1ydy%2BvjP3snqGJq%2BGGWZJyOZP9tEBWG7zK67Ko9&X-Amz-Signature=dd48c5016c7ddc80b27e94c7871058a27e03368184176969a3f0f5822ea03241&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIP34OM2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBsC8gwovLvXrKJiSsfFKxe1ZAoq9XkN1YT%2B%2Fq%2FXfS5AIhAISOOxJFsKIX25drZp4OFeTsifHYaTBm56zGsHcTBoEpKv8DCC4QABoMNjM3NDIzMTgzODA1IgwiEbz5D0c6j1RkBEIq3AMBMtBMgWPLM%2BMM2ZvbtMvf9JD6XNxRbsAweMva92HNFnrLFo56ijehM7lpboY5nsGiPjVJH%2BSkKf9qlXyUj%2BNNRS4NFIRrk4dAiBGK%2FOUX9BuLXskgRc7IDSUiUVIaM0hnagX4WyhmtmRru%2FoW7Na%2FhLodMEBODt%2F4uSHsN6De0jp6KqOPxmUNrHSSnOaVaiN3o8EMzHx8pvDh7o7zQZPP8NBTwM2qhY0lS5tVHl9RlRbKLb3rehrCRESClVQmLCjfFAg5BaVULB4AL6yIyFM7X%2FfPxNdiELZe55TzcLFPhvsgnKAuQxdxJeDXdzW5DUglXp1d4PUmK9164B1jCRXXh3l%2B%2Fd0b7ijuZpfC0t8LoKQZl0Ets%2BIJN6zeuBuI%2FfoH3xXPwve8e5GUneD0ffXkKteAF4OcnZ0IwbQtSB4UOKExughPmeihnn3pqSs59nY0xnkBfhBYCIdA6j90cpeHZTnPR6bdEyGTdhDWODbaRYxYQJ4OG60DxmObTfO9ZE0A7qm5eKsepjsaDiu09NkU%2FkPbry1ZsFCqFVAzt68GWiNtVhkhTcVt8XHgMgXqgsBmkjQ7VR%2F%2B0CspP%2FLLsQqdaHyYYmX0ejGB26NG4IIVvyBo57eK1%2B8m%2BDZBwzDGpfm%2FBjqkAaXQY66Wnp7R%2BHVPS2Rs9xTp6V0T7Wzh5rRgdWxHg5UQyoJEkdnoVSEMfejFmdqpqpiZ8atYlN1VVx8cB8xZAcISUghp7mWBpIyB%2Bijic8MxJHiqt7eZadbo3IWsDdsl9qGD9Nlk7PTR%2FuypB8hIPLXhP3gEiVcMr5iGRYiJC2vz3xI2vtkiV1ydy%2BvjP3snqGJq%2BGGWZJyOZP9tEBWG7zK67Ko9&X-Amz-Signature=d73ebf78e12761af0e7cce08caef1ae817396aa4fede554d09082256c666cece&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIP34OM2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBsC8gwovLvXrKJiSsfFKxe1ZAoq9XkN1YT%2B%2Fq%2FXfS5AIhAISOOxJFsKIX25drZp4OFeTsifHYaTBm56zGsHcTBoEpKv8DCC4QABoMNjM3NDIzMTgzODA1IgwiEbz5D0c6j1RkBEIq3AMBMtBMgWPLM%2BMM2ZvbtMvf9JD6XNxRbsAweMva92HNFnrLFo56ijehM7lpboY5nsGiPjVJH%2BSkKf9qlXyUj%2BNNRS4NFIRrk4dAiBGK%2FOUX9BuLXskgRc7IDSUiUVIaM0hnagX4WyhmtmRru%2FoW7Na%2FhLodMEBODt%2F4uSHsN6De0jp6KqOPxmUNrHSSnOaVaiN3o8EMzHx8pvDh7o7zQZPP8NBTwM2qhY0lS5tVHl9RlRbKLb3rehrCRESClVQmLCjfFAg5BaVULB4AL6yIyFM7X%2FfPxNdiELZe55TzcLFPhvsgnKAuQxdxJeDXdzW5DUglXp1d4PUmK9164B1jCRXXh3l%2B%2Fd0b7ijuZpfC0t8LoKQZl0Ets%2BIJN6zeuBuI%2FfoH3xXPwve8e5GUneD0ffXkKteAF4OcnZ0IwbQtSB4UOKExughPmeihnn3pqSs59nY0xnkBfhBYCIdA6j90cpeHZTnPR6bdEyGTdhDWODbaRYxYQJ4OG60DxmObTfO9ZE0A7qm5eKsepjsaDiu09NkU%2FkPbry1ZsFCqFVAzt68GWiNtVhkhTcVt8XHgMgXqgsBmkjQ7VR%2F%2B0CspP%2FLLsQqdaHyYYmX0ejGB26NG4IIVvyBo57eK1%2B8m%2BDZBwzDGpfm%2FBjqkAaXQY66Wnp7R%2BHVPS2Rs9xTp6V0T7Wzh5rRgdWxHg5UQyoJEkdnoVSEMfejFmdqpqpiZ8atYlN1VVx8cB8xZAcISUghp7mWBpIyB%2Bijic8MxJHiqt7eZadbo3IWsDdsl9qGD9Nlk7PTR%2FuypB8hIPLXhP3gEiVcMr5iGRYiJC2vz3xI2vtkiV1ydy%2BvjP3snqGJq%2BGGWZJyOZP9tEBWG7zK67Ko9&X-Amz-Signature=bd42f55b7b28c3710c4f27f7fa2f1e2595e1f3e4071d80c7c13b7c48bbffb50f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIP34OM2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBsC8gwovLvXrKJiSsfFKxe1ZAoq9XkN1YT%2B%2Fq%2FXfS5AIhAISOOxJFsKIX25drZp4OFeTsifHYaTBm56zGsHcTBoEpKv8DCC4QABoMNjM3NDIzMTgzODA1IgwiEbz5D0c6j1RkBEIq3AMBMtBMgWPLM%2BMM2ZvbtMvf9JD6XNxRbsAweMva92HNFnrLFo56ijehM7lpboY5nsGiPjVJH%2BSkKf9qlXyUj%2BNNRS4NFIRrk4dAiBGK%2FOUX9BuLXskgRc7IDSUiUVIaM0hnagX4WyhmtmRru%2FoW7Na%2FhLodMEBODt%2F4uSHsN6De0jp6KqOPxmUNrHSSnOaVaiN3o8EMzHx8pvDh7o7zQZPP8NBTwM2qhY0lS5tVHl9RlRbKLb3rehrCRESClVQmLCjfFAg5BaVULB4AL6yIyFM7X%2FfPxNdiELZe55TzcLFPhvsgnKAuQxdxJeDXdzW5DUglXp1d4PUmK9164B1jCRXXh3l%2B%2Fd0b7ijuZpfC0t8LoKQZl0Ets%2BIJN6zeuBuI%2FfoH3xXPwve8e5GUneD0ffXkKteAF4OcnZ0IwbQtSB4UOKExughPmeihnn3pqSs59nY0xnkBfhBYCIdA6j90cpeHZTnPR6bdEyGTdhDWODbaRYxYQJ4OG60DxmObTfO9ZE0A7qm5eKsepjsaDiu09NkU%2FkPbry1ZsFCqFVAzt68GWiNtVhkhTcVt8XHgMgXqgsBmkjQ7VR%2F%2B0CspP%2FLLsQqdaHyYYmX0ejGB26NG4IIVvyBo57eK1%2B8m%2BDZBwzDGpfm%2FBjqkAaXQY66Wnp7R%2BHVPS2Rs9xTp6V0T7Wzh5rRgdWxHg5UQyoJEkdnoVSEMfejFmdqpqpiZ8atYlN1VVx8cB8xZAcISUghp7mWBpIyB%2Bijic8MxJHiqt7eZadbo3IWsDdsl9qGD9Nlk7PTR%2FuypB8hIPLXhP3gEiVcMr5iGRYiJC2vz3xI2vtkiV1ydy%2BvjP3snqGJq%2BGGWZJyOZP9tEBWG7zK67Ko9&X-Amz-Signature=b8057d9122fdabb20eed6917882a7f0c90b8c1ceee8e0dd52bf75afe00b26d30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIP34OM2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBsC8gwovLvXrKJiSsfFKxe1ZAoq9XkN1YT%2B%2Fq%2FXfS5AIhAISOOxJFsKIX25drZp4OFeTsifHYaTBm56zGsHcTBoEpKv8DCC4QABoMNjM3NDIzMTgzODA1IgwiEbz5D0c6j1RkBEIq3AMBMtBMgWPLM%2BMM2ZvbtMvf9JD6XNxRbsAweMva92HNFnrLFo56ijehM7lpboY5nsGiPjVJH%2BSkKf9qlXyUj%2BNNRS4NFIRrk4dAiBGK%2FOUX9BuLXskgRc7IDSUiUVIaM0hnagX4WyhmtmRru%2FoW7Na%2FhLodMEBODt%2F4uSHsN6De0jp6KqOPxmUNrHSSnOaVaiN3o8EMzHx8pvDh7o7zQZPP8NBTwM2qhY0lS5tVHl9RlRbKLb3rehrCRESClVQmLCjfFAg5BaVULB4AL6yIyFM7X%2FfPxNdiELZe55TzcLFPhvsgnKAuQxdxJeDXdzW5DUglXp1d4PUmK9164B1jCRXXh3l%2B%2Fd0b7ijuZpfC0t8LoKQZl0Ets%2BIJN6zeuBuI%2FfoH3xXPwve8e5GUneD0ffXkKteAF4OcnZ0IwbQtSB4UOKExughPmeihnn3pqSs59nY0xnkBfhBYCIdA6j90cpeHZTnPR6bdEyGTdhDWODbaRYxYQJ4OG60DxmObTfO9ZE0A7qm5eKsepjsaDiu09NkU%2FkPbry1ZsFCqFVAzt68GWiNtVhkhTcVt8XHgMgXqgsBmkjQ7VR%2F%2B0CspP%2FLLsQqdaHyYYmX0ejGB26NG4IIVvyBo57eK1%2B8m%2BDZBwzDGpfm%2FBjqkAaXQY66Wnp7R%2BHVPS2Rs9xTp6V0T7Wzh5rRgdWxHg5UQyoJEkdnoVSEMfejFmdqpqpiZ8atYlN1VVx8cB8xZAcISUghp7mWBpIyB%2Bijic8MxJHiqt7eZadbo3IWsDdsl9qGD9Nlk7PTR%2FuypB8hIPLXhP3gEiVcMr5iGRYiJC2vz3xI2vtkiV1ydy%2BvjP3snqGJq%2BGGWZJyOZP9tEBWG7zK67Ko9&X-Amz-Signature=f1b44ba111cc2a78239c9f3dd6cacd0c7de099df29187141e698807e8900487c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
