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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646I5JPHE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sycuQEPqOhUHRCMLDBbaIbzBPMEglJGegGePc3jnCwIhAP%2B759cIFDhM5QJgxADdMN1%2F%2ByAM94qLMCS18SX1unUuKv8DCGUQABoMNjM3NDIzMTgzODA1IgyxhH8DMoGn7PuvXv0q3AMBuhsZyxTFeJ0ZcmcvRa0mPWf76PvFTUHJA7F9XYtLbj0jiQlnm%2B1NC%2B4G8HBvQkzc6w%2FOD3Rq4Xb4cHW8zH8aOgQlc42798paTUvKRxLspuMxlVkzqwMsZd23kaurvSCzBxmE8oGt5ObpKKDS5LtjKM0j0dqLD3UsFJm%2FIfVE9vZgc3kkMgLo0l5AJQwtSxZWzVhpr06zXlbZhercGNx92yEsKeqEBSHJN4Q4g2e%2BW7PfRSDFvCwrwQtuODvhcmMDV%2BD0zdrS03E%2BUVaQ0mFIfhd%2FGCLj1rWChyJoza77b%2FZXCSdMdtykzS6fhoudHHRl8mOJ4lv7HNsIwFEST9%2F7Y%2B6KMq997%2FoqzO9v7c%2FpWl8hxHQLG0rCF%2BFwFdGNi95jlL9wNMVK8Yaus9zBRQywEgybb%2BZzcwVOVB8yQnUX80Y0l6bopG18lx%2FNEiFys%2BkHoO%2B8j37hXrPXxBy7NQSedbUdURSwOvt9tN2M2bE5r%2BhrtS5vZdKiHWn1J5JcY7JArCAss4ch2PoGzwkSlzvrmpLUW8BOtksMcj%2FZQSZ4N01ndgHticShYwxmX7ZfSybKCJ2wHMk6klCgYNlfbVIGTRGCsApX7bPwGMt7ai5nZ0QLRA0J4t7r%2Bt9ElTD%2Fy6PBBjqkAQProQ1x0QaAtkxrdLm15Vcd7UViCdpkzKm9zztDWkC5n2Zg0Pnq5Huce0CX%2Fg62AqAD6nGf%2FHPmzGEXJAAnVg4cSgpybGzGpP%2FvN0L9PABTgRVzn3mKEuYM2dVIbNU31CG8YbFg9tr8NkGzV7WHig4iEiyZNX%2FQ0CO2cIHN4Qx2VpOKvHPq0f5NGKLj1wHl7zW0XTylBmYhFRiwErv3wvwSz3ME&X-Amz-Signature=1dcad3059586d2808bce483c25383295734bde2646b17afe520560654b72d240&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646I5JPHE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sycuQEPqOhUHRCMLDBbaIbzBPMEglJGegGePc3jnCwIhAP%2B759cIFDhM5QJgxADdMN1%2F%2ByAM94qLMCS18SX1unUuKv8DCGUQABoMNjM3NDIzMTgzODA1IgyxhH8DMoGn7PuvXv0q3AMBuhsZyxTFeJ0ZcmcvRa0mPWf76PvFTUHJA7F9XYtLbj0jiQlnm%2B1NC%2B4G8HBvQkzc6w%2FOD3Rq4Xb4cHW8zH8aOgQlc42798paTUvKRxLspuMxlVkzqwMsZd23kaurvSCzBxmE8oGt5ObpKKDS5LtjKM0j0dqLD3UsFJm%2FIfVE9vZgc3kkMgLo0l5AJQwtSxZWzVhpr06zXlbZhercGNx92yEsKeqEBSHJN4Q4g2e%2BW7PfRSDFvCwrwQtuODvhcmMDV%2BD0zdrS03E%2BUVaQ0mFIfhd%2FGCLj1rWChyJoza77b%2FZXCSdMdtykzS6fhoudHHRl8mOJ4lv7HNsIwFEST9%2F7Y%2B6KMq997%2FoqzO9v7c%2FpWl8hxHQLG0rCF%2BFwFdGNi95jlL9wNMVK8Yaus9zBRQywEgybb%2BZzcwVOVB8yQnUX80Y0l6bopG18lx%2FNEiFys%2BkHoO%2B8j37hXrPXxBy7NQSedbUdURSwOvt9tN2M2bE5r%2BhrtS5vZdKiHWn1J5JcY7JArCAss4ch2PoGzwkSlzvrmpLUW8BOtksMcj%2FZQSZ4N01ndgHticShYwxmX7ZfSybKCJ2wHMk6klCgYNlfbVIGTRGCsApX7bPwGMt7ai5nZ0QLRA0J4t7r%2Bt9ElTD%2Fy6PBBjqkAQProQ1x0QaAtkxrdLm15Vcd7UViCdpkzKm9zztDWkC5n2Zg0Pnq5Huce0CX%2Fg62AqAD6nGf%2FHPmzGEXJAAnVg4cSgpybGzGpP%2FvN0L9PABTgRVzn3mKEuYM2dVIbNU31CG8YbFg9tr8NkGzV7WHig4iEiyZNX%2FQ0CO2cIHN4Qx2VpOKvHPq0f5NGKLj1wHl7zW0XTylBmYhFRiwErv3wvwSz3ME&X-Amz-Signature=a60bbd89e09a9c99214b8ea0c1a001532c72ab15cbcd9f8a4520ce7a6f6ae102&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646I5JPHE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sycuQEPqOhUHRCMLDBbaIbzBPMEglJGegGePc3jnCwIhAP%2B759cIFDhM5QJgxADdMN1%2F%2ByAM94qLMCS18SX1unUuKv8DCGUQABoMNjM3NDIzMTgzODA1IgyxhH8DMoGn7PuvXv0q3AMBuhsZyxTFeJ0ZcmcvRa0mPWf76PvFTUHJA7F9XYtLbj0jiQlnm%2B1NC%2B4G8HBvQkzc6w%2FOD3Rq4Xb4cHW8zH8aOgQlc42798paTUvKRxLspuMxlVkzqwMsZd23kaurvSCzBxmE8oGt5ObpKKDS5LtjKM0j0dqLD3UsFJm%2FIfVE9vZgc3kkMgLo0l5AJQwtSxZWzVhpr06zXlbZhercGNx92yEsKeqEBSHJN4Q4g2e%2BW7PfRSDFvCwrwQtuODvhcmMDV%2BD0zdrS03E%2BUVaQ0mFIfhd%2FGCLj1rWChyJoza77b%2FZXCSdMdtykzS6fhoudHHRl8mOJ4lv7HNsIwFEST9%2F7Y%2B6KMq997%2FoqzO9v7c%2FpWl8hxHQLG0rCF%2BFwFdGNi95jlL9wNMVK8Yaus9zBRQywEgybb%2BZzcwVOVB8yQnUX80Y0l6bopG18lx%2FNEiFys%2BkHoO%2B8j37hXrPXxBy7NQSedbUdURSwOvt9tN2M2bE5r%2BhrtS5vZdKiHWn1J5JcY7JArCAss4ch2PoGzwkSlzvrmpLUW8BOtksMcj%2FZQSZ4N01ndgHticShYwxmX7ZfSybKCJ2wHMk6klCgYNlfbVIGTRGCsApX7bPwGMt7ai5nZ0QLRA0J4t7r%2Bt9ElTD%2Fy6PBBjqkAQProQ1x0QaAtkxrdLm15Vcd7UViCdpkzKm9zztDWkC5n2Zg0Pnq5Huce0CX%2Fg62AqAD6nGf%2FHPmzGEXJAAnVg4cSgpybGzGpP%2FvN0L9PABTgRVzn3mKEuYM2dVIbNU31CG8YbFg9tr8NkGzV7WHig4iEiyZNX%2FQ0CO2cIHN4Qx2VpOKvHPq0f5NGKLj1wHl7zW0XTylBmYhFRiwErv3wvwSz3ME&X-Amz-Signature=73bde4bffe724cbe17ef69880c1e081ac48b98d33e5ebe11a66e1839eba41e73&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646I5JPHE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sycuQEPqOhUHRCMLDBbaIbzBPMEglJGegGePc3jnCwIhAP%2B759cIFDhM5QJgxADdMN1%2F%2ByAM94qLMCS18SX1unUuKv8DCGUQABoMNjM3NDIzMTgzODA1IgyxhH8DMoGn7PuvXv0q3AMBuhsZyxTFeJ0ZcmcvRa0mPWf76PvFTUHJA7F9XYtLbj0jiQlnm%2B1NC%2B4G8HBvQkzc6w%2FOD3Rq4Xb4cHW8zH8aOgQlc42798paTUvKRxLspuMxlVkzqwMsZd23kaurvSCzBxmE8oGt5ObpKKDS5LtjKM0j0dqLD3UsFJm%2FIfVE9vZgc3kkMgLo0l5AJQwtSxZWzVhpr06zXlbZhercGNx92yEsKeqEBSHJN4Q4g2e%2BW7PfRSDFvCwrwQtuODvhcmMDV%2BD0zdrS03E%2BUVaQ0mFIfhd%2FGCLj1rWChyJoza77b%2FZXCSdMdtykzS6fhoudHHRl8mOJ4lv7HNsIwFEST9%2F7Y%2B6KMq997%2FoqzO9v7c%2FpWl8hxHQLG0rCF%2BFwFdGNi95jlL9wNMVK8Yaus9zBRQywEgybb%2BZzcwVOVB8yQnUX80Y0l6bopG18lx%2FNEiFys%2BkHoO%2B8j37hXrPXxBy7NQSedbUdURSwOvt9tN2M2bE5r%2BhrtS5vZdKiHWn1J5JcY7JArCAss4ch2PoGzwkSlzvrmpLUW8BOtksMcj%2FZQSZ4N01ndgHticShYwxmX7ZfSybKCJ2wHMk6klCgYNlfbVIGTRGCsApX7bPwGMt7ai5nZ0QLRA0J4t7r%2Bt9ElTD%2Fy6PBBjqkAQProQ1x0QaAtkxrdLm15Vcd7UViCdpkzKm9zztDWkC5n2Zg0Pnq5Huce0CX%2Fg62AqAD6nGf%2FHPmzGEXJAAnVg4cSgpybGzGpP%2FvN0L9PABTgRVzn3mKEuYM2dVIbNU31CG8YbFg9tr8NkGzV7WHig4iEiyZNX%2FQ0CO2cIHN4Qx2VpOKvHPq0f5NGKLj1wHl7zW0XTylBmYhFRiwErv3wvwSz3ME&X-Amz-Signature=a4b870c459b0b9f968c29d05f36373e4efa79b7063d7b5279b8714d02af4cc34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646I5JPHE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sycuQEPqOhUHRCMLDBbaIbzBPMEglJGegGePc3jnCwIhAP%2B759cIFDhM5QJgxADdMN1%2F%2ByAM94qLMCS18SX1unUuKv8DCGUQABoMNjM3NDIzMTgzODA1IgyxhH8DMoGn7PuvXv0q3AMBuhsZyxTFeJ0ZcmcvRa0mPWf76PvFTUHJA7F9XYtLbj0jiQlnm%2B1NC%2B4G8HBvQkzc6w%2FOD3Rq4Xb4cHW8zH8aOgQlc42798paTUvKRxLspuMxlVkzqwMsZd23kaurvSCzBxmE8oGt5ObpKKDS5LtjKM0j0dqLD3UsFJm%2FIfVE9vZgc3kkMgLo0l5AJQwtSxZWzVhpr06zXlbZhercGNx92yEsKeqEBSHJN4Q4g2e%2BW7PfRSDFvCwrwQtuODvhcmMDV%2BD0zdrS03E%2BUVaQ0mFIfhd%2FGCLj1rWChyJoza77b%2FZXCSdMdtykzS6fhoudHHRl8mOJ4lv7HNsIwFEST9%2F7Y%2B6KMq997%2FoqzO9v7c%2FpWl8hxHQLG0rCF%2BFwFdGNi95jlL9wNMVK8Yaus9zBRQywEgybb%2BZzcwVOVB8yQnUX80Y0l6bopG18lx%2FNEiFys%2BkHoO%2B8j37hXrPXxBy7NQSedbUdURSwOvt9tN2M2bE5r%2BhrtS5vZdKiHWn1J5JcY7JArCAss4ch2PoGzwkSlzvrmpLUW8BOtksMcj%2FZQSZ4N01ndgHticShYwxmX7ZfSybKCJ2wHMk6klCgYNlfbVIGTRGCsApX7bPwGMt7ai5nZ0QLRA0J4t7r%2Bt9ElTD%2Fy6PBBjqkAQProQ1x0QaAtkxrdLm15Vcd7UViCdpkzKm9zztDWkC5n2Zg0Pnq5Huce0CX%2Fg62AqAD6nGf%2FHPmzGEXJAAnVg4cSgpybGzGpP%2FvN0L9PABTgRVzn3mKEuYM2dVIbNU31CG8YbFg9tr8NkGzV7WHig4iEiyZNX%2FQ0CO2cIHN4Qx2VpOKvHPq0f5NGKLj1wHl7zW0XTylBmYhFRiwErv3wvwSz3ME&X-Amz-Signature=76dee2e2e843f7a38cf3b59f7b5f8349fe4ec4e75fff70bbf594f05d37e31e77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646I5JPHE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sycuQEPqOhUHRCMLDBbaIbzBPMEglJGegGePc3jnCwIhAP%2B759cIFDhM5QJgxADdMN1%2F%2ByAM94qLMCS18SX1unUuKv8DCGUQABoMNjM3NDIzMTgzODA1IgyxhH8DMoGn7PuvXv0q3AMBuhsZyxTFeJ0ZcmcvRa0mPWf76PvFTUHJA7F9XYtLbj0jiQlnm%2B1NC%2B4G8HBvQkzc6w%2FOD3Rq4Xb4cHW8zH8aOgQlc42798paTUvKRxLspuMxlVkzqwMsZd23kaurvSCzBxmE8oGt5ObpKKDS5LtjKM0j0dqLD3UsFJm%2FIfVE9vZgc3kkMgLo0l5AJQwtSxZWzVhpr06zXlbZhercGNx92yEsKeqEBSHJN4Q4g2e%2BW7PfRSDFvCwrwQtuODvhcmMDV%2BD0zdrS03E%2BUVaQ0mFIfhd%2FGCLj1rWChyJoza77b%2FZXCSdMdtykzS6fhoudHHRl8mOJ4lv7HNsIwFEST9%2F7Y%2B6KMq997%2FoqzO9v7c%2FpWl8hxHQLG0rCF%2BFwFdGNi95jlL9wNMVK8Yaus9zBRQywEgybb%2BZzcwVOVB8yQnUX80Y0l6bopG18lx%2FNEiFys%2BkHoO%2B8j37hXrPXxBy7NQSedbUdURSwOvt9tN2M2bE5r%2BhrtS5vZdKiHWn1J5JcY7JArCAss4ch2PoGzwkSlzvrmpLUW8BOtksMcj%2FZQSZ4N01ndgHticShYwxmX7ZfSybKCJ2wHMk6klCgYNlfbVIGTRGCsApX7bPwGMt7ai5nZ0QLRA0J4t7r%2Bt9ElTD%2Fy6PBBjqkAQProQ1x0QaAtkxrdLm15Vcd7UViCdpkzKm9zztDWkC5n2Zg0Pnq5Huce0CX%2Fg62AqAD6nGf%2FHPmzGEXJAAnVg4cSgpybGzGpP%2FvN0L9PABTgRVzn3mKEuYM2dVIbNU31CG8YbFg9tr8NkGzV7WHig4iEiyZNX%2FQ0CO2cIHN4Qx2VpOKvHPq0f5NGKLj1wHl7zW0XTylBmYhFRiwErv3wvwSz3ME&X-Amz-Signature=f8462612825d9ab9d0f134f377cbfb1923da173898bd5e191ea15ffbaf11392a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646I5JPHE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sycuQEPqOhUHRCMLDBbaIbzBPMEglJGegGePc3jnCwIhAP%2B759cIFDhM5QJgxADdMN1%2F%2ByAM94qLMCS18SX1unUuKv8DCGUQABoMNjM3NDIzMTgzODA1IgyxhH8DMoGn7PuvXv0q3AMBuhsZyxTFeJ0ZcmcvRa0mPWf76PvFTUHJA7F9XYtLbj0jiQlnm%2B1NC%2B4G8HBvQkzc6w%2FOD3Rq4Xb4cHW8zH8aOgQlc42798paTUvKRxLspuMxlVkzqwMsZd23kaurvSCzBxmE8oGt5ObpKKDS5LtjKM0j0dqLD3UsFJm%2FIfVE9vZgc3kkMgLo0l5AJQwtSxZWzVhpr06zXlbZhercGNx92yEsKeqEBSHJN4Q4g2e%2BW7PfRSDFvCwrwQtuODvhcmMDV%2BD0zdrS03E%2BUVaQ0mFIfhd%2FGCLj1rWChyJoza77b%2FZXCSdMdtykzS6fhoudHHRl8mOJ4lv7HNsIwFEST9%2F7Y%2B6KMq997%2FoqzO9v7c%2FpWl8hxHQLG0rCF%2BFwFdGNi95jlL9wNMVK8Yaus9zBRQywEgybb%2BZzcwVOVB8yQnUX80Y0l6bopG18lx%2FNEiFys%2BkHoO%2B8j37hXrPXxBy7NQSedbUdURSwOvt9tN2M2bE5r%2BhrtS5vZdKiHWn1J5JcY7JArCAss4ch2PoGzwkSlzvrmpLUW8BOtksMcj%2FZQSZ4N01ndgHticShYwxmX7ZfSybKCJ2wHMk6klCgYNlfbVIGTRGCsApX7bPwGMt7ai5nZ0QLRA0J4t7r%2Bt9ElTD%2Fy6PBBjqkAQProQ1x0QaAtkxrdLm15Vcd7UViCdpkzKm9zztDWkC5n2Zg0Pnq5Huce0CX%2Fg62AqAD6nGf%2FHPmzGEXJAAnVg4cSgpybGzGpP%2FvN0L9PABTgRVzn3mKEuYM2dVIbNU31CG8YbFg9tr8NkGzV7WHig4iEiyZNX%2FQ0CO2cIHN4Qx2VpOKvHPq0f5NGKLj1wHl7zW0XTylBmYhFRiwErv3wvwSz3ME&X-Amz-Signature=bdb13a4d150bba95c2951d77d4971b77103e9ac2148d5bf3a9892acf9581c211&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646I5JPHE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sycuQEPqOhUHRCMLDBbaIbzBPMEglJGegGePc3jnCwIhAP%2B759cIFDhM5QJgxADdMN1%2F%2ByAM94qLMCS18SX1unUuKv8DCGUQABoMNjM3NDIzMTgzODA1IgyxhH8DMoGn7PuvXv0q3AMBuhsZyxTFeJ0ZcmcvRa0mPWf76PvFTUHJA7F9XYtLbj0jiQlnm%2B1NC%2B4G8HBvQkzc6w%2FOD3Rq4Xb4cHW8zH8aOgQlc42798paTUvKRxLspuMxlVkzqwMsZd23kaurvSCzBxmE8oGt5ObpKKDS5LtjKM0j0dqLD3UsFJm%2FIfVE9vZgc3kkMgLo0l5AJQwtSxZWzVhpr06zXlbZhercGNx92yEsKeqEBSHJN4Q4g2e%2BW7PfRSDFvCwrwQtuODvhcmMDV%2BD0zdrS03E%2BUVaQ0mFIfhd%2FGCLj1rWChyJoza77b%2FZXCSdMdtykzS6fhoudHHRl8mOJ4lv7HNsIwFEST9%2F7Y%2B6KMq997%2FoqzO9v7c%2FpWl8hxHQLG0rCF%2BFwFdGNi95jlL9wNMVK8Yaus9zBRQywEgybb%2BZzcwVOVB8yQnUX80Y0l6bopG18lx%2FNEiFys%2BkHoO%2B8j37hXrPXxBy7NQSedbUdURSwOvt9tN2M2bE5r%2BhrtS5vZdKiHWn1J5JcY7JArCAss4ch2PoGzwkSlzvrmpLUW8BOtksMcj%2FZQSZ4N01ndgHticShYwxmX7ZfSybKCJ2wHMk6klCgYNlfbVIGTRGCsApX7bPwGMt7ai5nZ0QLRA0J4t7r%2Bt9ElTD%2Fy6PBBjqkAQProQ1x0QaAtkxrdLm15Vcd7UViCdpkzKm9zztDWkC5n2Zg0Pnq5Huce0CX%2Fg62AqAD6nGf%2FHPmzGEXJAAnVg4cSgpybGzGpP%2FvN0L9PABTgRVzn3mKEuYM2dVIbNU31CG8YbFg9tr8NkGzV7WHig4iEiyZNX%2FQ0CO2cIHN4Qx2VpOKvHPq0f5NGKLj1wHl7zW0XTylBmYhFRiwErv3wvwSz3ME&X-Amz-Signature=3f4750564b38463f1b4d61bd256f83ededca29d0c0bfc9ffee46e6cc963dd2db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
