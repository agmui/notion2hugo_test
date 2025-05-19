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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN624YPD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ERvnoEiKZmuy2y7UH0epzdLnWXn14QK9fI%2Fh4NPuxgIhAKdOUapG0FfSdPbwYWaPwZM1z%2Fsv%2F48StYdx%2Br7hUjw2KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynhuLTFvwEtZVQqVkq3APKBrrkY9PeBozBWdFHgM8yZkhJmGNCqzcQE%2BL6n%2F3AxyZbOSpRkvT3gZn32VYCBuEerNMLQFBVzNHATRPjczCZfUvipV21ZWjNn3yuaE%2BuAdEixZPc0b3qD75R8PjcibA5SYcQBjUB3DwV%2FudK%2BGVBfs4x9vMe231X4%2BGxLaObZXGFmpwfhdVk%2FYe59BZ3%2FMao0Cl9viy5hDjMFTtjAIKLoxd9lxqRc1MEpwpRV63HxLKe6EKy%2FA8ieCv1j95nG4Bt4dn3QDUrnTXUiWkD7ms%2Bp0MOArQaJYPz3aH790yt4TCNDbnThmkTt0dzjd6ppu0jX2pK3bGiX0tVns1v%2FjXkcwESqlsB%2BVVZKbym1EZq1JwP1KyikTc2x5FfS9bSwWJZBXD2z%2Fu89J4TbpjHN2vhegC7qnqYpWSzTli9wTGpwCdmL73oXnmY3sw7MiBWZXIXdYv3dV09oRh75ABKXWPtwI8vnXwpLJNC75QSsZ7Zm6vaqTiq7f6a6RXhC%2FFrcDm%2FR6%2BvoOt%2B3s8kMXPtLclGdkVPJ%2FSLtiwZwIPfV87dI7ekIH1%2F1gKNvF2PrbXg4aXh9nnU3Y4rV6zPrsafEU4uVbcyj7FyaW7%2BTkUiJO6Qs41g0niLTOf2Qu9YpDDT%2FazBBjqkAVjcwP9PjKTC9OJ3NVftSbUfw4VVX6xvqA7pIbj1ZahMvpfF%2BM2lJ5e5fKNcOfaKWjpiz8jZp78NWeCp9uNpCVI4XmPOl2AS%2FtIM5SWt0oGBsPu8nYgEOox8ZdIEeIAmw%2BtfFXb4E2xJ%2Br8vskH%2Fo%2Fjh8hggTuawOcVXhc7HaEmoVwrtxloNfmCJcbyWSW%2BYA8VWz4eSVfLVaG8BOgKgREbKy0Lp&X-Amz-Signature=f1c52768c2a20ca41fe4fea31469970618b8575ade355cc7ea169f1c8a5816bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN624YPD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ERvnoEiKZmuy2y7UH0epzdLnWXn14QK9fI%2Fh4NPuxgIhAKdOUapG0FfSdPbwYWaPwZM1z%2Fsv%2F48StYdx%2Br7hUjw2KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynhuLTFvwEtZVQqVkq3APKBrrkY9PeBozBWdFHgM8yZkhJmGNCqzcQE%2BL6n%2F3AxyZbOSpRkvT3gZn32VYCBuEerNMLQFBVzNHATRPjczCZfUvipV21ZWjNn3yuaE%2BuAdEixZPc0b3qD75R8PjcibA5SYcQBjUB3DwV%2FudK%2BGVBfs4x9vMe231X4%2BGxLaObZXGFmpwfhdVk%2FYe59BZ3%2FMao0Cl9viy5hDjMFTtjAIKLoxd9lxqRc1MEpwpRV63HxLKe6EKy%2FA8ieCv1j95nG4Bt4dn3QDUrnTXUiWkD7ms%2Bp0MOArQaJYPz3aH790yt4TCNDbnThmkTt0dzjd6ppu0jX2pK3bGiX0tVns1v%2FjXkcwESqlsB%2BVVZKbym1EZq1JwP1KyikTc2x5FfS9bSwWJZBXD2z%2Fu89J4TbpjHN2vhegC7qnqYpWSzTli9wTGpwCdmL73oXnmY3sw7MiBWZXIXdYv3dV09oRh75ABKXWPtwI8vnXwpLJNC75QSsZ7Zm6vaqTiq7f6a6RXhC%2FFrcDm%2FR6%2BvoOt%2B3s8kMXPtLclGdkVPJ%2FSLtiwZwIPfV87dI7ekIH1%2F1gKNvF2PrbXg4aXh9nnU3Y4rV6zPrsafEU4uVbcyj7FyaW7%2BTkUiJO6Qs41g0niLTOf2Qu9YpDDT%2FazBBjqkAVjcwP9PjKTC9OJ3NVftSbUfw4VVX6xvqA7pIbj1ZahMvpfF%2BM2lJ5e5fKNcOfaKWjpiz8jZp78NWeCp9uNpCVI4XmPOl2AS%2FtIM5SWt0oGBsPu8nYgEOox8ZdIEeIAmw%2BtfFXb4E2xJ%2Br8vskH%2Fo%2Fjh8hggTuawOcVXhc7HaEmoVwrtxloNfmCJcbyWSW%2BYA8VWz4eSVfLVaG8BOgKgREbKy0Lp&X-Amz-Signature=d176e53163e6808031e6208d464f5a8254cb72e0be12218b9dac4c50e64d19d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN624YPD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ERvnoEiKZmuy2y7UH0epzdLnWXn14QK9fI%2Fh4NPuxgIhAKdOUapG0FfSdPbwYWaPwZM1z%2Fsv%2F48StYdx%2Br7hUjw2KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynhuLTFvwEtZVQqVkq3APKBrrkY9PeBozBWdFHgM8yZkhJmGNCqzcQE%2BL6n%2F3AxyZbOSpRkvT3gZn32VYCBuEerNMLQFBVzNHATRPjczCZfUvipV21ZWjNn3yuaE%2BuAdEixZPc0b3qD75R8PjcibA5SYcQBjUB3DwV%2FudK%2BGVBfs4x9vMe231X4%2BGxLaObZXGFmpwfhdVk%2FYe59BZ3%2FMao0Cl9viy5hDjMFTtjAIKLoxd9lxqRc1MEpwpRV63HxLKe6EKy%2FA8ieCv1j95nG4Bt4dn3QDUrnTXUiWkD7ms%2Bp0MOArQaJYPz3aH790yt4TCNDbnThmkTt0dzjd6ppu0jX2pK3bGiX0tVns1v%2FjXkcwESqlsB%2BVVZKbym1EZq1JwP1KyikTc2x5FfS9bSwWJZBXD2z%2Fu89J4TbpjHN2vhegC7qnqYpWSzTli9wTGpwCdmL73oXnmY3sw7MiBWZXIXdYv3dV09oRh75ABKXWPtwI8vnXwpLJNC75QSsZ7Zm6vaqTiq7f6a6RXhC%2FFrcDm%2FR6%2BvoOt%2B3s8kMXPtLclGdkVPJ%2FSLtiwZwIPfV87dI7ekIH1%2F1gKNvF2PrbXg4aXh9nnU3Y4rV6zPrsafEU4uVbcyj7FyaW7%2BTkUiJO6Qs41g0niLTOf2Qu9YpDDT%2FazBBjqkAVjcwP9PjKTC9OJ3NVftSbUfw4VVX6xvqA7pIbj1ZahMvpfF%2BM2lJ5e5fKNcOfaKWjpiz8jZp78NWeCp9uNpCVI4XmPOl2AS%2FtIM5SWt0oGBsPu8nYgEOox8ZdIEeIAmw%2BtfFXb4E2xJ%2Br8vskH%2Fo%2Fjh8hggTuawOcVXhc7HaEmoVwrtxloNfmCJcbyWSW%2BYA8VWz4eSVfLVaG8BOgKgREbKy0Lp&X-Amz-Signature=8a1b899b2fc100ff8fdacc9c2620c80a90b897f1fea09f8639f938684382fbe1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN624YPD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ERvnoEiKZmuy2y7UH0epzdLnWXn14QK9fI%2Fh4NPuxgIhAKdOUapG0FfSdPbwYWaPwZM1z%2Fsv%2F48StYdx%2Br7hUjw2KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynhuLTFvwEtZVQqVkq3APKBrrkY9PeBozBWdFHgM8yZkhJmGNCqzcQE%2BL6n%2F3AxyZbOSpRkvT3gZn32VYCBuEerNMLQFBVzNHATRPjczCZfUvipV21ZWjNn3yuaE%2BuAdEixZPc0b3qD75R8PjcibA5SYcQBjUB3DwV%2FudK%2BGVBfs4x9vMe231X4%2BGxLaObZXGFmpwfhdVk%2FYe59BZ3%2FMao0Cl9viy5hDjMFTtjAIKLoxd9lxqRc1MEpwpRV63HxLKe6EKy%2FA8ieCv1j95nG4Bt4dn3QDUrnTXUiWkD7ms%2Bp0MOArQaJYPz3aH790yt4TCNDbnThmkTt0dzjd6ppu0jX2pK3bGiX0tVns1v%2FjXkcwESqlsB%2BVVZKbym1EZq1JwP1KyikTc2x5FfS9bSwWJZBXD2z%2Fu89J4TbpjHN2vhegC7qnqYpWSzTli9wTGpwCdmL73oXnmY3sw7MiBWZXIXdYv3dV09oRh75ABKXWPtwI8vnXwpLJNC75QSsZ7Zm6vaqTiq7f6a6RXhC%2FFrcDm%2FR6%2BvoOt%2B3s8kMXPtLclGdkVPJ%2FSLtiwZwIPfV87dI7ekIH1%2F1gKNvF2PrbXg4aXh9nnU3Y4rV6zPrsafEU4uVbcyj7FyaW7%2BTkUiJO6Qs41g0niLTOf2Qu9YpDDT%2FazBBjqkAVjcwP9PjKTC9OJ3NVftSbUfw4VVX6xvqA7pIbj1ZahMvpfF%2BM2lJ5e5fKNcOfaKWjpiz8jZp78NWeCp9uNpCVI4XmPOl2AS%2FtIM5SWt0oGBsPu8nYgEOox8ZdIEeIAmw%2BtfFXb4E2xJ%2Br8vskH%2Fo%2Fjh8hggTuawOcVXhc7HaEmoVwrtxloNfmCJcbyWSW%2BYA8VWz4eSVfLVaG8BOgKgREbKy0Lp&X-Amz-Signature=31d3344c61f6470e42f1be6ca38b3565912067f50d980ea33b23e9609bec0eca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN624YPD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ERvnoEiKZmuy2y7UH0epzdLnWXn14QK9fI%2Fh4NPuxgIhAKdOUapG0FfSdPbwYWaPwZM1z%2Fsv%2F48StYdx%2Br7hUjw2KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynhuLTFvwEtZVQqVkq3APKBrrkY9PeBozBWdFHgM8yZkhJmGNCqzcQE%2BL6n%2F3AxyZbOSpRkvT3gZn32VYCBuEerNMLQFBVzNHATRPjczCZfUvipV21ZWjNn3yuaE%2BuAdEixZPc0b3qD75R8PjcibA5SYcQBjUB3DwV%2FudK%2BGVBfs4x9vMe231X4%2BGxLaObZXGFmpwfhdVk%2FYe59BZ3%2FMao0Cl9viy5hDjMFTtjAIKLoxd9lxqRc1MEpwpRV63HxLKe6EKy%2FA8ieCv1j95nG4Bt4dn3QDUrnTXUiWkD7ms%2Bp0MOArQaJYPz3aH790yt4TCNDbnThmkTt0dzjd6ppu0jX2pK3bGiX0tVns1v%2FjXkcwESqlsB%2BVVZKbym1EZq1JwP1KyikTc2x5FfS9bSwWJZBXD2z%2Fu89J4TbpjHN2vhegC7qnqYpWSzTli9wTGpwCdmL73oXnmY3sw7MiBWZXIXdYv3dV09oRh75ABKXWPtwI8vnXwpLJNC75QSsZ7Zm6vaqTiq7f6a6RXhC%2FFrcDm%2FR6%2BvoOt%2B3s8kMXPtLclGdkVPJ%2FSLtiwZwIPfV87dI7ekIH1%2F1gKNvF2PrbXg4aXh9nnU3Y4rV6zPrsafEU4uVbcyj7FyaW7%2BTkUiJO6Qs41g0niLTOf2Qu9YpDDT%2FazBBjqkAVjcwP9PjKTC9OJ3NVftSbUfw4VVX6xvqA7pIbj1ZahMvpfF%2BM2lJ5e5fKNcOfaKWjpiz8jZp78NWeCp9uNpCVI4XmPOl2AS%2FtIM5SWt0oGBsPu8nYgEOox8ZdIEeIAmw%2BtfFXb4E2xJ%2Br8vskH%2Fo%2Fjh8hggTuawOcVXhc7HaEmoVwrtxloNfmCJcbyWSW%2BYA8VWz4eSVfLVaG8BOgKgREbKy0Lp&X-Amz-Signature=a29e11b1dc059b54dd4ad07ce04f2cd54cd5c845e9cf92afd889f4b85ab0d310&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN624YPD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ERvnoEiKZmuy2y7UH0epzdLnWXn14QK9fI%2Fh4NPuxgIhAKdOUapG0FfSdPbwYWaPwZM1z%2Fsv%2F48StYdx%2Br7hUjw2KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynhuLTFvwEtZVQqVkq3APKBrrkY9PeBozBWdFHgM8yZkhJmGNCqzcQE%2BL6n%2F3AxyZbOSpRkvT3gZn32VYCBuEerNMLQFBVzNHATRPjczCZfUvipV21ZWjNn3yuaE%2BuAdEixZPc0b3qD75R8PjcibA5SYcQBjUB3DwV%2FudK%2BGVBfs4x9vMe231X4%2BGxLaObZXGFmpwfhdVk%2FYe59BZ3%2FMao0Cl9viy5hDjMFTtjAIKLoxd9lxqRc1MEpwpRV63HxLKe6EKy%2FA8ieCv1j95nG4Bt4dn3QDUrnTXUiWkD7ms%2Bp0MOArQaJYPz3aH790yt4TCNDbnThmkTt0dzjd6ppu0jX2pK3bGiX0tVns1v%2FjXkcwESqlsB%2BVVZKbym1EZq1JwP1KyikTc2x5FfS9bSwWJZBXD2z%2Fu89J4TbpjHN2vhegC7qnqYpWSzTli9wTGpwCdmL73oXnmY3sw7MiBWZXIXdYv3dV09oRh75ABKXWPtwI8vnXwpLJNC75QSsZ7Zm6vaqTiq7f6a6RXhC%2FFrcDm%2FR6%2BvoOt%2B3s8kMXPtLclGdkVPJ%2FSLtiwZwIPfV87dI7ekIH1%2F1gKNvF2PrbXg4aXh9nnU3Y4rV6zPrsafEU4uVbcyj7FyaW7%2BTkUiJO6Qs41g0niLTOf2Qu9YpDDT%2FazBBjqkAVjcwP9PjKTC9OJ3NVftSbUfw4VVX6xvqA7pIbj1ZahMvpfF%2BM2lJ5e5fKNcOfaKWjpiz8jZp78NWeCp9uNpCVI4XmPOl2AS%2FtIM5SWt0oGBsPu8nYgEOox8ZdIEeIAmw%2BtfFXb4E2xJ%2Br8vskH%2Fo%2Fjh8hggTuawOcVXhc7HaEmoVwrtxloNfmCJcbyWSW%2BYA8VWz4eSVfLVaG8BOgKgREbKy0Lp&X-Amz-Signature=c818746fb4336873256c0ad3080b3de618fa43a97d849616a8b28dfb08b8f652&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN624YPD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ERvnoEiKZmuy2y7UH0epzdLnWXn14QK9fI%2Fh4NPuxgIhAKdOUapG0FfSdPbwYWaPwZM1z%2Fsv%2F48StYdx%2Br7hUjw2KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynhuLTFvwEtZVQqVkq3APKBrrkY9PeBozBWdFHgM8yZkhJmGNCqzcQE%2BL6n%2F3AxyZbOSpRkvT3gZn32VYCBuEerNMLQFBVzNHATRPjczCZfUvipV21ZWjNn3yuaE%2BuAdEixZPc0b3qD75R8PjcibA5SYcQBjUB3DwV%2FudK%2BGVBfs4x9vMe231X4%2BGxLaObZXGFmpwfhdVk%2FYe59BZ3%2FMao0Cl9viy5hDjMFTtjAIKLoxd9lxqRc1MEpwpRV63HxLKe6EKy%2FA8ieCv1j95nG4Bt4dn3QDUrnTXUiWkD7ms%2Bp0MOArQaJYPz3aH790yt4TCNDbnThmkTt0dzjd6ppu0jX2pK3bGiX0tVns1v%2FjXkcwESqlsB%2BVVZKbym1EZq1JwP1KyikTc2x5FfS9bSwWJZBXD2z%2Fu89J4TbpjHN2vhegC7qnqYpWSzTli9wTGpwCdmL73oXnmY3sw7MiBWZXIXdYv3dV09oRh75ABKXWPtwI8vnXwpLJNC75QSsZ7Zm6vaqTiq7f6a6RXhC%2FFrcDm%2FR6%2BvoOt%2B3s8kMXPtLclGdkVPJ%2FSLtiwZwIPfV87dI7ekIH1%2F1gKNvF2PrbXg4aXh9nnU3Y4rV6zPrsafEU4uVbcyj7FyaW7%2BTkUiJO6Qs41g0niLTOf2Qu9YpDDT%2FazBBjqkAVjcwP9PjKTC9OJ3NVftSbUfw4VVX6xvqA7pIbj1ZahMvpfF%2BM2lJ5e5fKNcOfaKWjpiz8jZp78NWeCp9uNpCVI4XmPOl2AS%2FtIM5SWt0oGBsPu8nYgEOox8ZdIEeIAmw%2BtfFXb4E2xJ%2Br8vskH%2Fo%2Fjh8hggTuawOcVXhc7HaEmoVwrtxloNfmCJcbyWSW%2BYA8VWz4eSVfLVaG8BOgKgREbKy0Lp&X-Amz-Signature=3e5b8440e28964b5e23655f4ce5023a3cd307348179f97e4e04a596c100c3fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN624YPD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ERvnoEiKZmuy2y7UH0epzdLnWXn14QK9fI%2Fh4NPuxgIhAKdOUapG0FfSdPbwYWaPwZM1z%2Fsv%2F48StYdx%2Br7hUjw2KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynhuLTFvwEtZVQqVkq3APKBrrkY9PeBozBWdFHgM8yZkhJmGNCqzcQE%2BL6n%2F3AxyZbOSpRkvT3gZn32VYCBuEerNMLQFBVzNHATRPjczCZfUvipV21ZWjNn3yuaE%2BuAdEixZPc0b3qD75R8PjcibA5SYcQBjUB3DwV%2FudK%2BGVBfs4x9vMe231X4%2BGxLaObZXGFmpwfhdVk%2FYe59BZ3%2FMao0Cl9viy5hDjMFTtjAIKLoxd9lxqRc1MEpwpRV63HxLKe6EKy%2FA8ieCv1j95nG4Bt4dn3QDUrnTXUiWkD7ms%2Bp0MOArQaJYPz3aH790yt4TCNDbnThmkTt0dzjd6ppu0jX2pK3bGiX0tVns1v%2FjXkcwESqlsB%2BVVZKbym1EZq1JwP1KyikTc2x5FfS9bSwWJZBXD2z%2Fu89J4TbpjHN2vhegC7qnqYpWSzTli9wTGpwCdmL73oXnmY3sw7MiBWZXIXdYv3dV09oRh75ABKXWPtwI8vnXwpLJNC75QSsZ7Zm6vaqTiq7f6a6RXhC%2FFrcDm%2FR6%2BvoOt%2B3s8kMXPtLclGdkVPJ%2FSLtiwZwIPfV87dI7ekIH1%2F1gKNvF2PrbXg4aXh9nnU3Y4rV6zPrsafEU4uVbcyj7FyaW7%2BTkUiJO6Qs41g0niLTOf2Qu9YpDDT%2FazBBjqkAVjcwP9PjKTC9OJ3NVftSbUfw4VVX6xvqA7pIbj1ZahMvpfF%2BM2lJ5e5fKNcOfaKWjpiz8jZp78NWeCp9uNpCVI4XmPOl2AS%2FtIM5SWt0oGBsPu8nYgEOox8ZdIEeIAmw%2BtfFXb4E2xJ%2Br8vskH%2Fo%2Fjh8hggTuawOcVXhc7HaEmoVwrtxloNfmCJcbyWSW%2BYA8VWz4eSVfLVaG8BOgKgREbKy0Lp&X-Amz-Signature=eef5ca61ba8ab225d2615966e1dd5ee94e9973280a531bc5739c223e7536c5e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
