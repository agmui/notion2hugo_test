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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCFEHIW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmO1rYg1NTLJmOmiotkkqzfsELfO%2FG%2BdhK4HLLL6WyWgIhAKRAVW7gH4Wpq4gJi%2FnQK7J3focQAOw1LDWI2OdXNTOpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYlRXAq6RPA4Ugj%2BQq3AOTO6HBZPQBqd92zaUyhgYxwlp1xho%2Fb5uLYCq%2BimdWvbPneoCRpweNgy41SUGheF8Pa0YMvFtLyZ3DH5aET8IR787ckqTb2j29Q8OwO15bFbaanACZF%2B70GPha%2Bt1tVvy%2FRZ0%2BuymJjOZhvyekuGIuYqJUBo9UfN8OXSHS2IKjjWlsWGeuKfjvnUXQ7S3r%2FnUfOfAyPECBX372ED32shFzj%2FE0T3mfMyQpUPZVOyXXJQyrJ706ACpQq0bz%2FVP8xr7vXAYcu79BWcHt04zx5UjtjQEFjj8fXzPZaVHvXuZeS%2BdOEwX9aIsLa78iMsK8i2U5inMAIvZItM2aHqVksicrvB3WrfbZ0Vt3OxfE9Ty%2FF%2B4focZkE0pAkttTnGAa2qtU%2BKC%2Ff%2FPAU13pQM607avvFCKShqWv9SGiKNN4MPdRn6Vq10ATOE9h2Zs0AMIQ2DipscBTkk2MSTDsEN9KeJc%2BJP4tWSsqoXsQXPiEJ3bUXToDOY2opv8lMKNmuAcgFFwqpybK0P2zGRwmL2EMr2blDBbsNaCAaUr8yQhnrIGF2EHn8gTMXiFIVksJJNTqBoRRp%2BOA3XLB0cmZYDK%2BelEk17fSsgYgdAJX7UTgJjBXJ3v58OWvszAIBpqQPDCJ2fK8BjqkAd0k6tWWu%2FNhj7JvRsP7sZdXrANY%2FLjSqLYAQYYCiMf5dWoEyN2JEPeTPEfFQGopCzH1Ra7%2Few6eaVC90gc6uvnp2%2Fb9FYIVO1rsfqMS6d5H9zv3pVx2U26%2FEVfULny6FNnlX65wZedwTMHhkBm%2BJE2P5AFirRmzbh%2BSCrgmfLLLw%2Bf%2BJ55pqLkewiVvZZoCmnJo6CRWuohfISXDIk4wagOimDrW&X-Amz-Signature=67886db125ae4bc212b84b79037b252f60cc4795e97ed9d4db180ee6286da33b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCFEHIW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmO1rYg1NTLJmOmiotkkqzfsELfO%2FG%2BdhK4HLLL6WyWgIhAKRAVW7gH4Wpq4gJi%2FnQK7J3focQAOw1LDWI2OdXNTOpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYlRXAq6RPA4Ugj%2BQq3AOTO6HBZPQBqd92zaUyhgYxwlp1xho%2Fb5uLYCq%2BimdWvbPneoCRpweNgy41SUGheF8Pa0YMvFtLyZ3DH5aET8IR787ckqTb2j29Q8OwO15bFbaanACZF%2B70GPha%2Bt1tVvy%2FRZ0%2BuymJjOZhvyekuGIuYqJUBo9UfN8OXSHS2IKjjWlsWGeuKfjvnUXQ7S3r%2FnUfOfAyPECBX372ED32shFzj%2FE0T3mfMyQpUPZVOyXXJQyrJ706ACpQq0bz%2FVP8xr7vXAYcu79BWcHt04zx5UjtjQEFjj8fXzPZaVHvXuZeS%2BdOEwX9aIsLa78iMsK8i2U5inMAIvZItM2aHqVksicrvB3WrfbZ0Vt3OxfE9Ty%2FF%2B4focZkE0pAkttTnGAa2qtU%2BKC%2Ff%2FPAU13pQM607avvFCKShqWv9SGiKNN4MPdRn6Vq10ATOE9h2Zs0AMIQ2DipscBTkk2MSTDsEN9KeJc%2BJP4tWSsqoXsQXPiEJ3bUXToDOY2opv8lMKNmuAcgFFwqpybK0P2zGRwmL2EMr2blDBbsNaCAaUr8yQhnrIGF2EHn8gTMXiFIVksJJNTqBoRRp%2BOA3XLB0cmZYDK%2BelEk17fSsgYgdAJX7UTgJjBXJ3v58OWvszAIBpqQPDCJ2fK8BjqkAd0k6tWWu%2FNhj7JvRsP7sZdXrANY%2FLjSqLYAQYYCiMf5dWoEyN2JEPeTPEfFQGopCzH1Ra7%2Few6eaVC90gc6uvnp2%2Fb9FYIVO1rsfqMS6d5H9zv3pVx2U26%2FEVfULny6FNnlX65wZedwTMHhkBm%2BJE2P5AFirRmzbh%2BSCrgmfLLLw%2Bf%2BJ55pqLkewiVvZZoCmnJo6CRWuohfISXDIk4wagOimDrW&X-Amz-Signature=e3eb87caca9ea04c70f4ebfbe082456dca60b1c60ee44641c3dd6776e2df4ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCFEHIW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmO1rYg1NTLJmOmiotkkqzfsELfO%2FG%2BdhK4HLLL6WyWgIhAKRAVW7gH4Wpq4gJi%2FnQK7J3focQAOw1LDWI2OdXNTOpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYlRXAq6RPA4Ugj%2BQq3AOTO6HBZPQBqd92zaUyhgYxwlp1xho%2Fb5uLYCq%2BimdWvbPneoCRpweNgy41SUGheF8Pa0YMvFtLyZ3DH5aET8IR787ckqTb2j29Q8OwO15bFbaanACZF%2B70GPha%2Bt1tVvy%2FRZ0%2BuymJjOZhvyekuGIuYqJUBo9UfN8OXSHS2IKjjWlsWGeuKfjvnUXQ7S3r%2FnUfOfAyPECBX372ED32shFzj%2FE0T3mfMyQpUPZVOyXXJQyrJ706ACpQq0bz%2FVP8xr7vXAYcu79BWcHt04zx5UjtjQEFjj8fXzPZaVHvXuZeS%2BdOEwX9aIsLa78iMsK8i2U5inMAIvZItM2aHqVksicrvB3WrfbZ0Vt3OxfE9Ty%2FF%2B4focZkE0pAkttTnGAa2qtU%2BKC%2Ff%2FPAU13pQM607avvFCKShqWv9SGiKNN4MPdRn6Vq10ATOE9h2Zs0AMIQ2DipscBTkk2MSTDsEN9KeJc%2BJP4tWSsqoXsQXPiEJ3bUXToDOY2opv8lMKNmuAcgFFwqpybK0P2zGRwmL2EMr2blDBbsNaCAaUr8yQhnrIGF2EHn8gTMXiFIVksJJNTqBoRRp%2BOA3XLB0cmZYDK%2BelEk17fSsgYgdAJX7UTgJjBXJ3v58OWvszAIBpqQPDCJ2fK8BjqkAd0k6tWWu%2FNhj7JvRsP7sZdXrANY%2FLjSqLYAQYYCiMf5dWoEyN2JEPeTPEfFQGopCzH1Ra7%2Few6eaVC90gc6uvnp2%2Fb9FYIVO1rsfqMS6d5H9zv3pVx2U26%2FEVfULny6FNnlX65wZedwTMHhkBm%2BJE2P5AFirRmzbh%2BSCrgmfLLLw%2Bf%2BJ55pqLkewiVvZZoCmnJo6CRWuohfISXDIk4wagOimDrW&X-Amz-Signature=a2b0d44d00e8ebce32e67d644130e64346f0f2ec1392f728c587fcb739a3d931&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCFEHIW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmO1rYg1NTLJmOmiotkkqzfsELfO%2FG%2BdhK4HLLL6WyWgIhAKRAVW7gH4Wpq4gJi%2FnQK7J3focQAOw1LDWI2OdXNTOpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYlRXAq6RPA4Ugj%2BQq3AOTO6HBZPQBqd92zaUyhgYxwlp1xho%2Fb5uLYCq%2BimdWvbPneoCRpweNgy41SUGheF8Pa0YMvFtLyZ3DH5aET8IR787ckqTb2j29Q8OwO15bFbaanACZF%2B70GPha%2Bt1tVvy%2FRZ0%2BuymJjOZhvyekuGIuYqJUBo9UfN8OXSHS2IKjjWlsWGeuKfjvnUXQ7S3r%2FnUfOfAyPECBX372ED32shFzj%2FE0T3mfMyQpUPZVOyXXJQyrJ706ACpQq0bz%2FVP8xr7vXAYcu79BWcHt04zx5UjtjQEFjj8fXzPZaVHvXuZeS%2BdOEwX9aIsLa78iMsK8i2U5inMAIvZItM2aHqVksicrvB3WrfbZ0Vt3OxfE9Ty%2FF%2B4focZkE0pAkttTnGAa2qtU%2BKC%2Ff%2FPAU13pQM607avvFCKShqWv9SGiKNN4MPdRn6Vq10ATOE9h2Zs0AMIQ2DipscBTkk2MSTDsEN9KeJc%2BJP4tWSsqoXsQXPiEJ3bUXToDOY2opv8lMKNmuAcgFFwqpybK0P2zGRwmL2EMr2blDBbsNaCAaUr8yQhnrIGF2EHn8gTMXiFIVksJJNTqBoRRp%2BOA3XLB0cmZYDK%2BelEk17fSsgYgdAJX7UTgJjBXJ3v58OWvszAIBpqQPDCJ2fK8BjqkAd0k6tWWu%2FNhj7JvRsP7sZdXrANY%2FLjSqLYAQYYCiMf5dWoEyN2JEPeTPEfFQGopCzH1Ra7%2Few6eaVC90gc6uvnp2%2Fb9FYIVO1rsfqMS6d5H9zv3pVx2U26%2FEVfULny6FNnlX65wZedwTMHhkBm%2BJE2P5AFirRmzbh%2BSCrgmfLLLw%2Bf%2BJ55pqLkewiVvZZoCmnJo6CRWuohfISXDIk4wagOimDrW&X-Amz-Signature=35e4e3dd5fbebfe12a691a244e40b05ebea0c413931396763e23f5cd004a1173&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCFEHIW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmO1rYg1NTLJmOmiotkkqzfsELfO%2FG%2BdhK4HLLL6WyWgIhAKRAVW7gH4Wpq4gJi%2FnQK7J3focQAOw1LDWI2OdXNTOpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYlRXAq6RPA4Ugj%2BQq3AOTO6HBZPQBqd92zaUyhgYxwlp1xho%2Fb5uLYCq%2BimdWvbPneoCRpweNgy41SUGheF8Pa0YMvFtLyZ3DH5aET8IR787ckqTb2j29Q8OwO15bFbaanACZF%2B70GPha%2Bt1tVvy%2FRZ0%2BuymJjOZhvyekuGIuYqJUBo9UfN8OXSHS2IKjjWlsWGeuKfjvnUXQ7S3r%2FnUfOfAyPECBX372ED32shFzj%2FE0T3mfMyQpUPZVOyXXJQyrJ706ACpQq0bz%2FVP8xr7vXAYcu79BWcHt04zx5UjtjQEFjj8fXzPZaVHvXuZeS%2BdOEwX9aIsLa78iMsK8i2U5inMAIvZItM2aHqVksicrvB3WrfbZ0Vt3OxfE9Ty%2FF%2B4focZkE0pAkttTnGAa2qtU%2BKC%2Ff%2FPAU13pQM607avvFCKShqWv9SGiKNN4MPdRn6Vq10ATOE9h2Zs0AMIQ2DipscBTkk2MSTDsEN9KeJc%2BJP4tWSsqoXsQXPiEJ3bUXToDOY2opv8lMKNmuAcgFFwqpybK0P2zGRwmL2EMr2blDBbsNaCAaUr8yQhnrIGF2EHn8gTMXiFIVksJJNTqBoRRp%2BOA3XLB0cmZYDK%2BelEk17fSsgYgdAJX7UTgJjBXJ3v58OWvszAIBpqQPDCJ2fK8BjqkAd0k6tWWu%2FNhj7JvRsP7sZdXrANY%2FLjSqLYAQYYCiMf5dWoEyN2JEPeTPEfFQGopCzH1Ra7%2Few6eaVC90gc6uvnp2%2Fb9FYIVO1rsfqMS6d5H9zv3pVx2U26%2FEVfULny6FNnlX65wZedwTMHhkBm%2BJE2P5AFirRmzbh%2BSCrgmfLLLw%2Bf%2BJ55pqLkewiVvZZoCmnJo6CRWuohfISXDIk4wagOimDrW&X-Amz-Signature=25de83a4ff1f5e4dc0996c2ef911133208f9807a78001e26dbee0dd6bbf30148&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCFEHIW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmO1rYg1NTLJmOmiotkkqzfsELfO%2FG%2BdhK4HLLL6WyWgIhAKRAVW7gH4Wpq4gJi%2FnQK7J3focQAOw1LDWI2OdXNTOpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYlRXAq6RPA4Ugj%2BQq3AOTO6HBZPQBqd92zaUyhgYxwlp1xho%2Fb5uLYCq%2BimdWvbPneoCRpweNgy41SUGheF8Pa0YMvFtLyZ3DH5aET8IR787ckqTb2j29Q8OwO15bFbaanACZF%2B70GPha%2Bt1tVvy%2FRZ0%2BuymJjOZhvyekuGIuYqJUBo9UfN8OXSHS2IKjjWlsWGeuKfjvnUXQ7S3r%2FnUfOfAyPECBX372ED32shFzj%2FE0T3mfMyQpUPZVOyXXJQyrJ706ACpQq0bz%2FVP8xr7vXAYcu79BWcHt04zx5UjtjQEFjj8fXzPZaVHvXuZeS%2BdOEwX9aIsLa78iMsK8i2U5inMAIvZItM2aHqVksicrvB3WrfbZ0Vt3OxfE9Ty%2FF%2B4focZkE0pAkttTnGAa2qtU%2BKC%2Ff%2FPAU13pQM607avvFCKShqWv9SGiKNN4MPdRn6Vq10ATOE9h2Zs0AMIQ2DipscBTkk2MSTDsEN9KeJc%2BJP4tWSsqoXsQXPiEJ3bUXToDOY2opv8lMKNmuAcgFFwqpybK0P2zGRwmL2EMr2blDBbsNaCAaUr8yQhnrIGF2EHn8gTMXiFIVksJJNTqBoRRp%2BOA3XLB0cmZYDK%2BelEk17fSsgYgdAJX7UTgJjBXJ3v58OWvszAIBpqQPDCJ2fK8BjqkAd0k6tWWu%2FNhj7JvRsP7sZdXrANY%2FLjSqLYAQYYCiMf5dWoEyN2JEPeTPEfFQGopCzH1Ra7%2Few6eaVC90gc6uvnp2%2Fb9FYIVO1rsfqMS6d5H9zv3pVx2U26%2FEVfULny6FNnlX65wZedwTMHhkBm%2BJE2P5AFirRmzbh%2BSCrgmfLLLw%2Bf%2BJ55pqLkewiVvZZoCmnJo6CRWuohfISXDIk4wagOimDrW&X-Amz-Signature=b36a47d38623839a94f7ce372998c81620294a5ac382d2ca1f0acb486dbba62e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCFEHIW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmO1rYg1NTLJmOmiotkkqzfsELfO%2FG%2BdhK4HLLL6WyWgIhAKRAVW7gH4Wpq4gJi%2FnQK7J3focQAOw1LDWI2OdXNTOpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYlRXAq6RPA4Ugj%2BQq3AOTO6HBZPQBqd92zaUyhgYxwlp1xho%2Fb5uLYCq%2BimdWvbPneoCRpweNgy41SUGheF8Pa0YMvFtLyZ3DH5aET8IR787ckqTb2j29Q8OwO15bFbaanACZF%2B70GPha%2Bt1tVvy%2FRZ0%2BuymJjOZhvyekuGIuYqJUBo9UfN8OXSHS2IKjjWlsWGeuKfjvnUXQ7S3r%2FnUfOfAyPECBX372ED32shFzj%2FE0T3mfMyQpUPZVOyXXJQyrJ706ACpQq0bz%2FVP8xr7vXAYcu79BWcHt04zx5UjtjQEFjj8fXzPZaVHvXuZeS%2BdOEwX9aIsLa78iMsK8i2U5inMAIvZItM2aHqVksicrvB3WrfbZ0Vt3OxfE9Ty%2FF%2B4focZkE0pAkttTnGAa2qtU%2BKC%2Ff%2FPAU13pQM607avvFCKShqWv9SGiKNN4MPdRn6Vq10ATOE9h2Zs0AMIQ2DipscBTkk2MSTDsEN9KeJc%2BJP4tWSsqoXsQXPiEJ3bUXToDOY2opv8lMKNmuAcgFFwqpybK0P2zGRwmL2EMr2blDBbsNaCAaUr8yQhnrIGF2EHn8gTMXiFIVksJJNTqBoRRp%2BOA3XLB0cmZYDK%2BelEk17fSsgYgdAJX7UTgJjBXJ3v58OWvszAIBpqQPDCJ2fK8BjqkAd0k6tWWu%2FNhj7JvRsP7sZdXrANY%2FLjSqLYAQYYCiMf5dWoEyN2JEPeTPEfFQGopCzH1Ra7%2Few6eaVC90gc6uvnp2%2Fb9FYIVO1rsfqMS6d5H9zv3pVx2U26%2FEVfULny6FNnlX65wZedwTMHhkBm%2BJE2P5AFirRmzbh%2BSCrgmfLLLw%2Bf%2BJ55pqLkewiVvZZoCmnJo6CRWuohfISXDIk4wagOimDrW&X-Amz-Signature=94461f1c02b70afe0810daf7ed842d3234f8cbc7238c15dbf766289dbdc24a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCFEHIW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmO1rYg1NTLJmOmiotkkqzfsELfO%2FG%2BdhK4HLLL6WyWgIhAKRAVW7gH4Wpq4gJi%2FnQK7J3focQAOw1LDWI2OdXNTOpKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYlRXAq6RPA4Ugj%2BQq3AOTO6HBZPQBqd92zaUyhgYxwlp1xho%2Fb5uLYCq%2BimdWvbPneoCRpweNgy41SUGheF8Pa0YMvFtLyZ3DH5aET8IR787ckqTb2j29Q8OwO15bFbaanACZF%2B70GPha%2Bt1tVvy%2FRZ0%2BuymJjOZhvyekuGIuYqJUBo9UfN8OXSHS2IKjjWlsWGeuKfjvnUXQ7S3r%2FnUfOfAyPECBX372ED32shFzj%2FE0T3mfMyQpUPZVOyXXJQyrJ706ACpQq0bz%2FVP8xr7vXAYcu79BWcHt04zx5UjtjQEFjj8fXzPZaVHvXuZeS%2BdOEwX9aIsLa78iMsK8i2U5inMAIvZItM2aHqVksicrvB3WrfbZ0Vt3OxfE9Ty%2FF%2B4focZkE0pAkttTnGAa2qtU%2BKC%2Ff%2FPAU13pQM607avvFCKShqWv9SGiKNN4MPdRn6Vq10ATOE9h2Zs0AMIQ2DipscBTkk2MSTDsEN9KeJc%2BJP4tWSsqoXsQXPiEJ3bUXToDOY2opv8lMKNmuAcgFFwqpybK0P2zGRwmL2EMr2blDBbsNaCAaUr8yQhnrIGF2EHn8gTMXiFIVksJJNTqBoRRp%2BOA3XLB0cmZYDK%2BelEk17fSsgYgdAJX7UTgJjBXJ3v58OWvszAIBpqQPDCJ2fK8BjqkAd0k6tWWu%2FNhj7JvRsP7sZdXrANY%2FLjSqLYAQYYCiMf5dWoEyN2JEPeTPEfFQGopCzH1Ra7%2Few6eaVC90gc6uvnp2%2Fb9FYIVO1rsfqMS6d5H9zv3pVx2U26%2FEVfULny6FNnlX65wZedwTMHhkBm%2BJE2P5AFirRmzbh%2BSCrgmfLLLw%2Bf%2BJ55pqLkewiVvZZoCmnJo6CRWuohfISXDIk4wagOimDrW&X-Amz-Signature=af351d9a9fd48d59b87332628036b68d9ed14d0566ae7984a1072ab4c182c176&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
