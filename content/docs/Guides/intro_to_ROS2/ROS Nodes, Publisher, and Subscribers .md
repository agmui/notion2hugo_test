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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJVFJY6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDk8w6zRlbqsrv4dXPfGXfuqjq0YLsrFHPODJ22QbpZOAIhAOlZhWbPnPiC7YN51pmgPYZIxnzUvEWUQXzoAE%2BkiUiTKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRx9zOxsjl8kcxT2kq3AN27EBnFW1W8fqrEv11oF%2FHd94hq6PlaDTH%2FX2au%2B0L1vomEyVvD3H6O6mDnnZ6Kn%2BfyUQcWV7jhEzzaNOAHAQdGxMNhCGrznovURf6KFsFbBUJKRqrriIB2A8NImBFaPUrJrAJwMktjC%2B1aYg7hKrrJ8jmv%2FvglhqFtpXdCdkAPoqFKtP1SQ7Xj38%2FK5RmfRnkAcXgZ4IvwOJKNO%2FFjFmu79UsURumQtsQHXb3tyIPN7PHV7J%2F2c4aWZwOuDRI1vkXpuT1J7uA%2B1jy1mmH6PlARUA%2BFIWR5vDF9xbprVkEIeilXciT5jAxnQNzdbr%2BroZGXrBz71xTSdG7t0T2SDnvdOespmFXzpq%2FpmA08w3Z4AHDjKiOD1Sw2%2BwhElmK4IVBspyY1%2BW83ISosfgw6FG0jjFBUr8HyV%2B%2BD5mAKztGxp1ZomYFAGHkfnFRN%2BdrQ4CqK5fGs%2FC55kj6FyiOUClc65g9VPHgCoYCQvlOiHkrqtdb%2B19oxAyb7UuWE99EIgKZaqt6yfRigdeEIr5tBdml%2FL7EVGCmbkGJXgpmKLFzEBCAF1FqwRJR0KFWPfusWxPY5ljHy13erH3jXR1xrwPhL94gL0wUNGcjrCUR73AoDay1eT7z%2BEX%2BHDS8ADDg14%2B%2BBjqkAdtNWQAC4I0wvDJneKPzItIn%2BGeg7HFl%2BuGb49UYqEScFp%2F0KGVawREXK03NjTwLc%2FVJFsreSZjiKqj15NksjhjoTuc9DOXit7YOHngT80PFgUv4oX0xMHdl8%2B11kLU1N4mg1cWmWJVxx8Tm6iu7RB8Gpt5LLkiTlSeajGcXZa6qRJjlLS4F14Q7w70%2FW05gmY%2BHdA%2BnSH4mGtDMD%2BoQQKUMWMw8&X-Amz-Signature=2c96dafa4bef5a82c6db9c3e47fed2a079489a2781ee8b371bc49667953ab751&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJVFJY6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDk8w6zRlbqsrv4dXPfGXfuqjq0YLsrFHPODJ22QbpZOAIhAOlZhWbPnPiC7YN51pmgPYZIxnzUvEWUQXzoAE%2BkiUiTKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRx9zOxsjl8kcxT2kq3AN27EBnFW1W8fqrEv11oF%2FHd94hq6PlaDTH%2FX2au%2B0L1vomEyVvD3H6O6mDnnZ6Kn%2BfyUQcWV7jhEzzaNOAHAQdGxMNhCGrznovURf6KFsFbBUJKRqrriIB2A8NImBFaPUrJrAJwMktjC%2B1aYg7hKrrJ8jmv%2FvglhqFtpXdCdkAPoqFKtP1SQ7Xj38%2FK5RmfRnkAcXgZ4IvwOJKNO%2FFjFmu79UsURumQtsQHXb3tyIPN7PHV7J%2F2c4aWZwOuDRI1vkXpuT1J7uA%2B1jy1mmH6PlARUA%2BFIWR5vDF9xbprVkEIeilXciT5jAxnQNzdbr%2BroZGXrBz71xTSdG7t0T2SDnvdOespmFXzpq%2FpmA08w3Z4AHDjKiOD1Sw2%2BwhElmK4IVBspyY1%2BW83ISosfgw6FG0jjFBUr8HyV%2B%2BD5mAKztGxp1ZomYFAGHkfnFRN%2BdrQ4CqK5fGs%2FC55kj6FyiOUClc65g9VPHgCoYCQvlOiHkrqtdb%2B19oxAyb7UuWE99EIgKZaqt6yfRigdeEIr5tBdml%2FL7EVGCmbkGJXgpmKLFzEBCAF1FqwRJR0KFWPfusWxPY5ljHy13erH3jXR1xrwPhL94gL0wUNGcjrCUR73AoDay1eT7z%2BEX%2BHDS8ADDg14%2B%2BBjqkAdtNWQAC4I0wvDJneKPzItIn%2BGeg7HFl%2BuGb49UYqEScFp%2F0KGVawREXK03NjTwLc%2FVJFsreSZjiKqj15NksjhjoTuc9DOXit7YOHngT80PFgUv4oX0xMHdl8%2B11kLU1N4mg1cWmWJVxx8Tm6iu7RB8Gpt5LLkiTlSeajGcXZa6qRJjlLS4F14Q7w70%2FW05gmY%2BHdA%2BnSH4mGtDMD%2BoQQKUMWMw8&X-Amz-Signature=0535c2b320633cf089483fa2d1f2849ff3f395a664fa044775583b86ae9b109a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJVFJY6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDk8w6zRlbqsrv4dXPfGXfuqjq0YLsrFHPODJ22QbpZOAIhAOlZhWbPnPiC7YN51pmgPYZIxnzUvEWUQXzoAE%2BkiUiTKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRx9zOxsjl8kcxT2kq3AN27EBnFW1W8fqrEv11oF%2FHd94hq6PlaDTH%2FX2au%2B0L1vomEyVvD3H6O6mDnnZ6Kn%2BfyUQcWV7jhEzzaNOAHAQdGxMNhCGrznovURf6KFsFbBUJKRqrriIB2A8NImBFaPUrJrAJwMktjC%2B1aYg7hKrrJ8jmv%2FvglhqFtpXdCdkAPoqFKtP1SQ7Xj38%2FK5RmfRnkAcXgZ4IvwOJKNO%2FFjFmu79UsURumQtsQHXb3tyIPN7PHV7J%2F2c4aWZwOuDRI1vkXpuT1J7uA%2B1jy1mmH6PlARUA%2BFIWR5vDF9xbprVkEIeilXciT5jAxnQNzdbr%2BroZGXrBz71xTSdG7t0T2SDnvdOespmFXzpq%2FpmA08w3Z4AHDjKiOD1Sw2%2BwhElmK4IVBspyY1%2BW83ISosfgw6FG0jjFBUr8HyV%2B%2BD5mAKztGxp1ZomYFAGHkfnFRN%2BdrQ4CqK5fGs%2FC55kj6FyiOUClc65g9VPHgCoYCQvlOiHkrqtdb%2B19oxAyb7UuWE99EIgKZaqt6yfRigdeEIr5tBdml%2FL7EVGCmbkGJXgpmKLFzEBCAF1FqwRJR0KFWPfusWxPY5ljHy13erH3jXR1xrwPhL94gL0wUNGcjrCUR73AoDay1eT7z%2BEX%2BHDS8ADDg14%2B%2BBjqkAdtNWQAC4I0wvDJneKPzItIn%2BGeg7HFl%2BuGb49UYqEScFp%2F0KGVawREXK03NjTwLc%2FVJFsreSZjiKqj15NksjhjoTuc9DOXit7YOHngT80PFgUv4oX0xMHdl8%2B11kLU1N4mg1cWmWJVxx8Tm6iu7RB8Gpt5LLkiTlSeajGcXZa6qRJjlLS4F14Q7w70%2FW05gmY%2BHdA%2BnSH4mGtDMD%2BoQQKUMWMw8&X-Amz-Signature=50a276d4bff7447681d4012e2a64be42ca87295297bb5fe25575f7e6f57aa33e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJVFJY6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDk8w6zRlbqsrv4dXPfGXfuqjq0YLsrFHPODJ22QbpZOAIhAOlZhWbPnPiC7YN51pmgPYZIxnzUvEWUQXzoAE%2BkiUiTKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRx9zOxsjl8kcxT2kq3AN27EBnFW1W8fqrEv11oF%2FHd94hq6PlaDTH%2FX2au%2B0L1vomEyVvD3H6O6mDnnZ6Kn%2BfyUQcWV7jhEzzaNOAHAQdGxMNhCGrznovURf6KFsFbBUJKRqrriIB2A8NImBFaPUrJrAJwMktjC%2B1aYg7hKrrJ8jmv%2FvglhqFtpXdCdkAPoqFKtP1SQ7Xj38%2FK5RmfRnkAcXgZ4IvwOJKNO%2FFjFmu79UsURumQtsQHXb3tyIPN7PHV7J%2F2c4aWZwOuDRI1vkXpuT1J7uA%2B1jy1mmH6PlARUA%2BFIWR5vDF9xbprVkEIeilXciT5jAxnQNzdbr%2BroZGXrBz71xTSdG7t0T2SDnvdOespmFXzpq%2FpmA08w3Z4AHDjKiOD1Sw2%2BwhElmK4IVBspyY1%2BW83ISosfgw6FG0jjFBUr8HyV%2B%2BD5mAKztGxp1ZomYFAGHkfnFRN%2BdrQ4CqK5fGs%2FC55kj6FyiOUClc65g9VPHgCoYCQvlOiHkrqtdb%2B19oxAyb7UuWE99EIgKZaqt6yfRigdeEIr5tBdml%2FL7EVGCmbkGJXgpmKLFzEBCAF1FqwRJR0KFWPfusWxPY5ljHy13erH3jXR1xrwPhL94gL0wUNGcjrCUR73AoDay1eT7z%2BEX%2BHDS8ADDg14%2B%2BBjqkAdtNWQAC4I0wvDJneKPzItIn%2BGeg7HFl%2BuGb49UYqEScFp%2F0KGVawREXK03NjTwLc%2FVJFsreSZjiKqj15NksjhjoTuc9DOXit7YOHngT80PFgUv4oX0xMHdl8%2B11kLU1N4mg1cWmWJVxx8Tm6iu7RB8Gpt5LLkiTlSeajGcXZa6qRJjlLS4F14Q7w70%2FW05gmY%2BHdA%2BnSH4mGtDMD%2BoQQKUMWMw8&X-Amz-Signature=46a2ac97167f2f2f4363e49af9254624d1c3fe4a8258519f870ebbdb8b0361de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJVFJY6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDk8w6zRlbqsrv4dXPfGXfuqjq0YLsrFHPODJ22QbpZOAIhAOlZhWbPnPiC7YN51pmgPYZIxnzUvEWUQXzoAE%2BkiUiTKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRx9zOxsjl8kcxT2kq3AN27EBnFW1W8fqrEv11oF%2FHd94hq6PlaDTH%2FX2au%2B0L1vomEyVvD3H6O6mDnnZ6Kn%2BfyUQcWV7jhEzzaNOAHAQdGxMNhCGrznovURf6KFsFbBUJKRqrriIB2A8NImBFaPUrJrAJwMktjC%2B1aYg7hKrrJ8jmv%2FvglhqFtpXdCdkAPoqFKtP1SQ7Xj38%2FK5RmfRnkAcXgZ4IvwOJKNO%2FFjFmu79UsURumQtsQHXb3tyIPN7PHV7J%2F2c4aWZwOuDRI1vkXpuT1J7uA%2B1jy1mmH6PlARUA%2BFIWR5vDF9xbprVkEIeilXciT5jAxnQNzdbr%2BroZGXrBz71xTSdG7t0T2SDnvdOespmFXzpq%2FpmA08w3Z4AHDjKiOD1Sw2%2BwhElmK4IVBspyY1%2BW83ISosfgw6FG0jjFBUr8HyV%2B%2BD5mAKztGxp1ZomYFAGHkfnFRN%2BdrQ4CqK5fGs%2FC55kj6FyiOUClc65g9VPHgCoYCQvlOiHkrqtdb%2B19oxAyb7UuWE99EIgKZaqt6yfRigdeEIr5tBdml%2FL7EVGCmbkGJXgpmKLFzEBCAF1FqwRJR0KFWPfusWxPY5ljHy13erH3jXR1xrwPhL94gL0wUNGcjrCUR73AoDay1eT7z%2BEX%2BHDS8ADDg14%2B%2BBjqkAdtNWQAC4I0wvDJneKPzItIn%2BGeg7HFl%2BuGb49UYqEScFp%2F0KGVawREXK03NjTwLc%2FVJFsreSZjiKqj15NksjhjoTuc9DOXit7YOHngT80PFgUv4oX0xMHdl8%2B11kLU1N4mg1cWmWJVxx8Tm6iu7RB8Gpt5LLkiTlSeajGcXZa6qRJjlLS4F14Q7w70%2FW05gmY%2BHdA%2BnSH4mGtDMD%2BoQQKUMWMw8&X-Amz-Signature=f073bbc6ce0290acd6203141a529b4e106982361ef436b97847763da4a6edb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJVFJY6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDk8w6zRlbqsrv4dXPfGXfuqjq0YLsrFHPODJ22QbpZOAIhAOlZhWbPnPiC7YN51pmgPYZIxnzUvEWUQXzoAE%2BkiUiTKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRx9zOxsjl8kcxT2kq3AN27EBnFW1W8fqrEv11oF%2FHd94hq6PlaDTH%2FX2au%2B0L1vomEyVvD3H6O6mDnnZ6Kn%2BfyUQcWV7jhEzzaNOAHAQdGxMNhCGrznovURf6KFsFbBUJKRqrriIB2A8NImBFaPUrJrAJwMktjC%2B1aYg7hKrrJ8jmv%2FvglhqFtpXdCdkAPoqFKtP1SQ7Xj38%2FK5RmfRnkAcXgZ4IvwOJKNO%2FFjFmu79UsURumQtsQHXb3tyIPN7PHV7J%2F2c4aWZwOuDRI1vkXpuT1J7uA%2B1jy1mmH6PlARUA%2BFIWR5vDF9xbprVkEIeilXciT5jAxnQNzdbr%2BroZGXrBz71xTSdG7t0T2SDnvdOespmFXzpq%2FpmA08w3Z4AHDjKiOD1Sw2%2BwhElmK4IVBspyY1%2BW83ISosfgw6FG0jjFBUr8HyV%2B%2BD5mAKztGxp1ZomYFAGHkfnFRN%2BdrQ4CqK5fGs%2FC55kj6FyiOUClc65g9VPHgCoYCQvlOiHkrqtdb%2B19oxAyb7UuWE99EIgKZaqt6yfRigdeEIr5tBdml%2FL7EVGCmbkGJXgpmKLFzEBCAF1FqwRJR0KFWPfusWxPY5ljHy13erH3jXR1xrwPhL94gL0wUNGcjrCUR73AoDay1eT7z%2BEX%2BHDS8ADDg14%2B%2BBjqkAdtNWQAC4I0wvDJneKPzItIn%2BGeg7HFl%2BuGb49UYqEScFp%2F0KGVawREXK03NjTwLc%2FVJFsreSZjiKqj15NksjhjoTuc9DOXit7YOHngT80PFgUv4oX0xMHdl8%2B11kLU1N4mg1cWmWJVxx8Tm6iu7RB8Gpt5LLkiTlSeajGcXZa6qRJjlLS4F14Q7w70%2FW05gmY%2BHdA%2BnSH4mGtDMD%2BoQQKUMWMw8&X-Amz-Signature=1c6dd95c5b5421101581a02c9925c9ce80a42adff35a5743da4cbe9e57a3eb45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJVFJY6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDk8w6zRlbqsrv4dXPfGXfuqjq0YLsrFHPODJ22QbpZOAIhAOlZhWbPnPiC7YN51pmgPYZIxnzUvEWUQXzoAE%2BkiUiTKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRx9zOxsjl8kcxT2kq3AN27EBnFW1W8fqrEv11oF%2FHd94hq6PlaDTH%2FX2au%2B0L1vomEyVvD3H6O6mDnnZ6Kn%2BfyUQcWV7jhEzzaNOAHAQdGxMNhCGrznovURf6KFsFbBUJKRqrriIB2A8NImBFaPUrJrAJwMktjC%2B1aYg7hKrrJ8jmv%2FvglhqFtpXdCdkAPoqFKtP1SQ7Xj38%2FK5RmfRnkAcXgZ4IvwOJKNO%2FFjFmu79UsURumQtsQHXb3tyIPN7PHV7J%2F2c4aWZwOuDRI1vkXpuT1J7uA%2B1jy1mmH6PlARUA%2BFIWR5vDF9xbprVkEIeilXciT5jAxnQNzdbr%2BroZGXrBz71xTSdG7t0T2SDnvdOespmFXzpq%2FpmA08w3Z4AHDjKiOD1Sw2%2BwhElmK4IVBspyY1%2BW83ISosfgw6FG0jjFBUr8HyV%2B%2BD5mAKztGxp1ZomYFAGHkfnFRN%2BdrQ4CqK5fGs%2FC55kj6FyiOUClc65g9VPHgCoYCQvlOiHkrqtdb%2B19oxAyb7UuWE99EIgKZaqt6yfRigdeEIr5tBdml%2FL7EVGCmbkGJXgpmKLFzEBCAF1FqwRJR0KFWPfusWxPY5ljHy13erH3jXR1xrwPhL94gL0wUNGcjrCUR73AoDay1eT7z%2BEX%2BHDS8ADDg14%2B%2BBjqkAdtNWQAC4I0wvDJneKPzItIn%2BGeg7HFl%2BuGb49UYqEScFp%2F0KGVawREXK03NjTwLc%2FVJFsreSZjiKqj15NksjhjoTuc9DOXit7YOHngT80PFgUv4oX0xMHdl8%2B11kLU1N4mg1cWmWJVxx8Tm6iu7RB8Gpt5LLkiTlSeajGcXZa6qRJjlLS4F14Q7w70%2FW05gmY%2BHdA%2BnSH4mGtDMD%2BoQQKUMWMw8&X-Amz-Signature=a4a643310501c70bd9388913f6773b4584e6878f761c767f4e9c8cf34edbf1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJVFJY6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDk8w6zRlbqsrv4dXPfGXfuqjq0YLsrFHPODJ22QbpZOAIhAOlZhWbPnPiC7YN51pmgPYZIxnzUvEWUQXzoAE%2BkiUiTKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRx9zOxsjl8kcxT2kq3AN27EBnFW1W8fqrEv11oF%2FHd94hq6PlaDTH%2FX2au%2B0L1vomEyVvD3H6O6mDnnZ6Kn%2BfyUQcWV7jhEzzaNOAHAQdGxMNhCGrznovURf6KFsFbBUJKRqrriIB2A8NImBFaPUrJrAJwMktjC%2B1aYg7hKrrJ8jmv%2FvglhqFtpXdCdkAPoqFKtP1SQ7Xj38%2FK5RmfRnkAcXgZ4IvwOJKNO%2FFjFmu79UsURumQtsQHXb3tyIPN7PHV7J%2F2c4aWZwOuDRI1vkXpuT1J7uA%2B1jy1mmH6PlARUA%2BFIWR5vDF9xbprVkEIeilXciT5jAxnQNzdbr%2BroZGXrBz71xTSdG7t0T2SDnvdOespmFXzpq%2FpmA08w3Z4AHDjKiOD1Sw2%2BwhElmK4IVBspyY1%2BW83ISosfgw6FG0jjFBUr8HyV%2B%2BD5mAKztGxp1ZomYFAGHkfnFRN%2BdrQ4CqK5fGs%2FC55kj6FyiOUClc65g9VPHgCoYCQvlOiHkrqtdb%2B19oxAyb7UuWE99EIgKZaqt6yfRigdeEIr5tBdml%2FL7EVGCmbkGJXgpmKLFzEBCAF1FqwRJR0KFWPfusWxPY5ljHy13erH3jXR1xrwPhL94gL0wUNGcjrCUR73AoDay1eT7z%2BEX%2BHDS8ADDg14%2B%2BBjqkAdtNWQAC4I0wvDJneKPzItIn%2BGeg7HFl%2BuGb49UYqEScFp%2F0KGVawREXK03NjTwLc%2FVJFsreSZjiKqj15NksjhjoTuc9DOXit7YOHngT80PFgUv4oX0xMHdl8%2B11kLU1N4mg1cWmWJVxx8Tm6iu7RB8Gpt5LLkiTlSeajGcXZa6qRJjlLS4F14Q7w70%2FW05gmY%2BHdA%2BnSH4mGtDMD%2BoQQKUMWMw8&X-Amz-Signature=188b1c835530c8cab25fd0638f58c6799f255a26ee31b84b0bd547d31e03c0b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
