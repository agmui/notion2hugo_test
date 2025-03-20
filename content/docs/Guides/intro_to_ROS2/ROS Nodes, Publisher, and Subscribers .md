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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Q3Q4C5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIATopYf0xY0EB04vIPnINgbzNHcFhjrmne1oiFj28rSzAiA0ptJPkecPAy4u4zg2I%2BFUH4kXM29otDEnFT32oYEd9SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1aXXQNkJUV3YYzXKtwDwkXlPaTN44OmQGpwChME1UmJafpSkDQBZ8Tf0d1Fcrae%2BwJvrcdeUL%2BJbl2eSvbPQsKc21HgurqlTS0Hi9B2HciSAPkrtD7ZQ6rlBbYUB%2BES3QdQqS%2B6ujWgefqb9VjlJiWplt0dcKbtVGCGFCpwCcexrTF3FgA2RdnRk50ncYlsSifQmD4DtuuEmkaDLrxxkdnnUbkbz168AtVAACnGhSwXVGDWYyNPA3p61O%2BCvR6Kq7kl2EM%2F39afqo5Kv4O5O9WeIxItASS5jN%2B4Haghztm4lmNf9atU5cIddfLa5sDV0YfplKO35aEbFrZvUWEuRzI8%2Fce9Yi8zt972CA1wwo5CAUR%2FpN8%2Bm1ujSBkZMWDrUxSGlrCJyzjnWPgocw%2Fqyow52JiqcN663QIbVEThExn1ISZW6eVi7UWssmpACiqyU1m2Nzg1OcvkWMx1lbXG34DtesA7SpMzZ1GYTQiBR4oFscDDQR5bfeJhqKY5EBl787rCCtFhhkZZYxapyv6SOweVVQiE1EeDi%2BuClpR6E6TkAnIxMt9rgduZORnNPl0B1UxqEErlEm3QexKfqVdsHwGtfOn%2F3HFwBULt0f%2FQxSNKMeKHmgC67xuqbN5dZ7%2BtmB4Lqk%2FHBws6Qzkw5eTwvgY6pgGYnnu2MnvhXHMveIYFYoKJ1Jdsmjh0BrhZEkN%2Fzfz03MVwQAvFoLYqMK%2BRocfXj2PuqMDsJzLy2JFybYPRQZTJ6MTMIM4YUgSavRAt8iTY7Qsfm5ribC1yMJa%2Bg5Okd8BMlKPMuiqlhExvp0UfOmSD0%2BXLS%2FnzgxcRVJhXD%2F7Jgz2ct9%2B8A6uSEn8WLc3Uhfqtjee8kAiW8U8qemt3bQpCUAyrC%2B0%2F&X-Amz-Signature=ab79f760274459c956dadfb5461e6277fe6e674e050a728912d73efa2656fc03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Q3Q4C5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIATopYf0xY0EB04vIPnINgbzNHcFhjrmne1oiFj28rSzAiA0ptJPkecPAy4u4zg2I%2BFUH4kXM29otDEnFT32oYEd9SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1aXXQNkJUV3YYzXKtwDwkXlPaTN44OmQGpwChME1UmJafpSkDQBZ8Tf0d1Fcrae%2BwJvrcdeUL%2BJbl2eSvbPQsKc21HgurqlTS0Hi9B2HciSAPkrtD7ZQ6rlBbYUB%2BES3QdQqS%2B6ujWgefqb9VjlJiWplt0dcKbtVGCGFCpwCcexrTF3FgA2RdnRk50ncYlsSifQmD4DtuuEmkaDLrxxkdnnUbkbz168AtVAACnGhSwXVGDWYyNPA3p61O%2BCvR6Kq7kl2EM%2F39afqo5Kv4O5O9WeIxItASS5jN%2B4Haghztm4lmNf9atU5cIddfLa5sDV0YfplKO35aEbFrZvUWEuRzI8%2Fce9Yi8zt972CA1wwo5CAUR%2FpN8%2Bm1ujSBkZMWDrUxSGlrCJyzjnWPgocw%2Fqyow52JiqcN663QIbVEThExn1ISZW6eVi7UWssmpACiqyU1m2Nzg1OcvkWMx1lbXG34DtesA7SpMzZ1GYTQiBR4oFscDDQR5bfeJhqKY5EBl787rCCtFhhkZZYxapyv6SOweVVQiE1EeDi%2BuClpR6E6TkAnIxMt9rgduZORnNPl0B1UxqEErlEm3QexKfqVdsHwGtfOn%2F3HFwBULt0f%2FQxSNKMeKHmgC67xuqbN5dZ7%2BtmB4Lqk%2FHBws6Qzkw5eTwvgY6pgGYnnu2MnvhXHMveIYFYoKJ1Jdsmjh0BrhZEkN%2Fzfz03MVwQAvFoLYqMK%2BRocfXj2PuqMDsJzLy2JFybYPRQZTJ6MTMIM4YUgSavRAt8iTY7Qsfm5ribC1yMJa%2Bg5Okd8BMlKPMuiqlhExvp0UfOmSD0%2BXLS%2FnzgxcRVJhXD%2F7Jgz2ct9%2B8A6uSEn8WLc3Uhfqtjee8kAiW8U8qemt3bQpCUAyrC%2B0%2F&X-Amz-Signature=2a0e5011b59c9f31e0234795b78e3bc8487cc681466dbda5fa87b2381346f05d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Q3Q4C5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIATopYf0xY0EB04vIPnINgbzNHcFhjrmne1oiFj28rSzAiA0ptJPkecPAy4u4zg2I%2BFUH4kXM29otDEnFT32oYEd9SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1aXXQNkJUV3YYzXKtwDwkXlPaTN44OmQGpwChME1UmJafpSkDQBZ8Tf0d1Fcrae%2BwJvrcdeUL%2BJbl2eSvbPQsKc21HgurqlTS0Hi9B2HciSAPkrtD7ZQ6rlBbYUB%2BES3QdQqS%2B6ujWgefqb9VjlJiWplt0dcKbtVGCGFCpwCcexrTF3FgA2RdnRk50ncYlsSifQmD4DtuuEmkaDLrxxkdnnUbkbz168AtVAACnGhSwXVGDWYyNPA3p61O%2BCvR6Kq7kl2EM%2F39afqo5Kv4O5O9WeIxItASS5jN%2B4Haghztm4lmNf9atU5cIddfLa5sDV0YfplKO35aEbFrZvUWEuRzI8%2Fce9Yi8zt972CA1wwo5CAUR%2FpN8%2Bm1ujSBkZMWDrUxSGlrCJyzjnWPgocw%2Fqyow52JiqcN663QIbVEThExn1ISZW6eVi7UWssmpACiqyU1m2Nzg1OcvkWMx1lbXG34DtesA7SpMzZ1GYTQiBR4oFscDDQR5bfeJhqKY5EBl787rCCtFhhkZZYxapyv6SOweVVQiE1EeDi%2BuClpR6E6TkAnIxMt9rgduZORnNPl0B1UxqEErlEm3QexKfqVdsHwGtfOn%2F3HFwBULt0f%2FQxSNKMeKHmgC67xuqbN5dZ7%2BtmB4Lqk%2FHBws6Qzkw5eTwvgY6pgGYnnu2MnvhXHMveIYFYoKJ1Jdsmjh0BrhZEkN%2Fzfz03MVwQAvFoLYqMK%2BRocfXj2PuqMDsJzLy2JFybYPRQZTJ6MTMIM4YUgSavRAt8iTY7Qsfm5ribC1yMJa%2Bg5Okd8BMlKPMuiqlhExvp0UfOmSD0%2BXLS%2FnzgxcRVJhXD%2F7Jgz2ct9%2B8A6uSEn8WLc3Uhfqtjee8kAiW8U8qemt3bQpCUAyrC%2B0%2F&X-Amz-Signature=5e90b07fad7def700438417c9c10e7f87a9ce3b1ff1bd62fae922c312633e356&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Q3Q4C5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIATopYf0xY0EB04vIPnINgbzNHcFhjrmne1oiFj28rSzAiA0ptJPkecPAy4u4zg2I%2BFUH4kXM29otDEnFT32oYEd9SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1aXXQNkJUV3YYzXKtwDwkXlPaTN44OmQGpwChME1UmJafpSkDQBZ8Tf0d1Fcrae%2BwJvrcdeUL%2BJbl2eSvbPQsKc21HgurqlTS0Hi9B2HciSAPkrtD7ZQ6rlBbYUB%2BES3QdQqS%2B6ujWgefqb9VjlJiWplt0dcKbtVGCGFCpwCcexrTF3FgA2RdnRk50ncYlsSifQmD4DtuuEmkaDLrxxkdnnUbkbz168AtVAACnGhSwXVGDWYyNPA3p61O%2BCvR6Kq7kl2EM%2F39afqo5Kv4O5O9WeIxItASS5jN%2B4Haghztm4lmNf9atU5cIddfLa5sDV0YfplKO35aEbFrZvUWEuRzI8%2Fce9Yi8zt972CA1wwo5CAUR%2FpN8%2Bm1ujSBkZMWDrUxSGlrCJyzjnWPgocw%2Fqyow52JiqcN663QIbVEThExn1ISZW6eVi7UWssmpACiqyU1m2Nzg1OcvkWMx1lbXG34DtesA7SpMzZ1GYTQiBR4oFscDDQR5bfeJhqKY5EBl787rCCtFhhkZZYxapyv6SOweVVQiE1EeDi%2BuClpR6E6TkAnIxMt9rgduZORnNPl0B1UxqEErlEm3QexKfqVdsHwGtfOn%2F3HFwBULt0f%2FQxSNKMeKHmgC67xuqbN5dZ7%2BtmB4Lqk%2FHBws6Qzkw5eTwvgY6pgGYnnu2MnvhXHMveIYFYoKJ1Jdsmjh0BrhZEkN%2Fzfz03MVwQAvFoLYqMK%2BRocfXj2PuqMDsJzLy2JFybYPRQZTJ6MTMIM4YUgSavRAt8iTY7Qsfm5ribC1yMJa%2Bg5Okd8BMlKPMuiqlhExvp0UfOmSD0%2BXLS%2FnzgxcRVJhXD%2F7Jgz2ct9%2B8A6uSEn8WLc3Uhfqtjee8kAiW8U8qemt3bQpCUAyrC%2B0%2F&X-Amz-Signature=edea7a0ca64cc0f33fb3d8bc276eb190fa1a23f32cce5d41b31d3dd7d8bb784c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Q3Q4C5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIATopYf0xY0EB04vIPnINgbzNHcFhjrmne1oiFj28rSzAiA0ptJPkecPAy4u4zg2I%2BFUH4kXM29otDEnFT32oYEd9SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1aXXQNkJUV3YYzXKtwDwkXlPaTN44OmQGpwChME1UmJafpSkDQBZ8Tf0d1Fcrae%2BwJvrcdeUL%2BJbl2eSvbPQsKc21HgurqlTS0Hi9B2HciSAPkrtD7ZQ6rlBbYUB%2BES3QdQqS%2B6ujWgefqb9VjlJiWplt0dcKbtVGCGFCpwCcexrTF3FgA2RdnRk50ncYlsSifQmD4DtuuEmkaDLrxxkdnnUbkbz168AtVAACnGhSwXVGDWYyNPA3p61O%2BCvR6Kq7kl2EM%2F39afqo5Kv4O5O9WeIxItASS5jN%2B4Haghztm4lmNf9atU5cIddfLa5sDV0YfplKO35aEbFrZvUWEuRzI8%2Fce9Yi8zt972CA1wwo5CAUR%2FpN8%2Bm1ujSBkZMWDrUxSGlrCJyzjnWPgocw%2Fqyow52JiqcN663QIbVEThExn1ISZW6eVi7UWssmpACiqyU1m2Nzg1OcvkWMx1lbXG34DtesA7SpMzZ1GYTQiBR4oFscDDQR5bfeJhqKY5EBl787rCCtFhhkZZYxapyv6SOweVVQiE1EeDi%2BuClpR6E6TkAnIxMt9rgduZORnNPl0B1UxqEErlEm3QexKfqVdsHwGtfOn%2F3HFwBULt0f%2FQxSNKMeKHmgC67xuqbN5dZ7%2BtmB4Lqk%2FHBws6Qzkw5eTwvgY6pgGYnnu2MnvhXHMveIYFYoKJ1Jdsmjh0BrhZEkN%2Fzfz03MVwQAvFoLYqMK%2BRocfXj2PuqMDsJzLy2JFybYPRQZTJ6MTMIM4YUgSavRAt8iTY7Qsfm5ribC1yMJa%2Bg5Okd8BMlKPMuiqlhExvp0UfOmSD0%2BXLS%2FnzgxcRVJhXD%2F7Jgz2ct9%2B8A6uSEn8WLc3Uhfqtjee8kAiW8U8qemt3bQpCUAyrC%2B0%2F&X-Amz-Signature=e17f1d72abee4bfddc6146f494c855f1292b7aeffaf5e594880b6e14fc6bfd0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Q3Q4C5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIATopYf0xY0EB04vIPnINgbzNHcFhjrmne1oiFj28rSzAiA0ptJPkecPAy4u4zg2I%2BFUH4kXM29otDEnFT32oYEd9SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1aXXQNkJUV3YYzXKtwDwkXlPaTN44OmQGpwChME1UmJafpSkDQBZ8Tf0d1Fcrae%2BwJvrcdeUL%2BJbl2eSvbPQsKc21HgurqlTS0Hi9B2HciSAPkrtD7ZQ6rlBbYUB%2BES3QdQqS%2B6ujWgefqb9VjlJiWplt0dcKbtVGCGFCpwCcexrTF3FgA2RdnRk50ncYlsSifQmD4DtuuEmkaDLrxxkdnnUbkbz168AtVAACnGhSwXVGDWYyNPA3p61O%2BCvR6Kq7kl2EM%2F39afqo5Kv4O5O9WeIxItASS5jN%2B4Haghztm4lmNf9atU5cIddfLa5sDV0YfplKO35aEbFrZvUWEuRzI8%2Fce9Yi8zt972CA1wwo5CAUR%2FpN8%2Bm1ujSBkZMWDrUxSGlrCJyzjnWPgocw%2Fqyow52JiqcN663QIbVEThExn1ISZW6eVi7UWssmpACiqyU1m2Nzg1OcvkWMx1lbXG34DtesA7SpMzZ1GYTQiBR4oFscDDQR5bfeJhqKY5EBl787rCCtFhhkZZYxapyv6SOweVVQiE1EeDi%2BuClpR6E6TkAnIxMt9rgduZORnNPl0B1UxqEErlEm3QexKfqVdsHwGtfOn%2F3HFwBULt0f%2FQxSNKMeKHmgC67xuqbN5dZ7%2BtmB4Lqk%2FHBws6Qzkw5eTwvgY6pgGYnnu2MnvhXHMveIYFYoKJ1Jdsmjh0BrhZEkN%2Fzfz03MVwQAvFoLYqMK%2BRocfXj2PuqMDsJzLy2JFybYPRQZTJ6MTMIM4YUgSavRAt8iTY7Qsfm5ribC1yMJa%2Bg5Okd8BMlKPMuiqlhExvp0UfOmSD0%2BXLS%2FnzgxcRVJhXD%2F7Jgz2ct9%2B8A6uSEn8WLc3Uhfqtjee8kAiW8U8qemt3bQpCUAyrC%2B0%2F&X-Amz-Signature=374a71050f08f73c3915b59708b4c1f5a44612a60c32ae922aacb6fb7e7b4aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Q3Q4C5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIATopYf0xY0EB04vIPnINgbzNHcFhjrmne1oiFj28rSzAiA0ptJPkecPAy4u4zg2I%2BFUH4kXM29otDEnFT32oYEd9SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1aXXQNkJUV3YYzXKtwDwkXlPaTN44OmQGpwChME1UmJafpSkDQBZ8Tf0d1Fcrae%2BwJvrcdeUL%2BJbl2eSvbPQsKc21HgurqlTS0Hi9B2HciSAPkrtD7ZQ6rlBbYUB%2BES3QdQqS%2B6ujWgefqb9VjlJiWplt0dcKbtVGCGFCpwCcexrTF3FgA2RdnRk50ncYlsSifQmD4DtuuEmkaDLrxxkdnnUbkbz168AtVAACnGhSwXVGDWYyNPA3p61O%2BCvR6Kq7kl2EM%2F39afqo5Kv4O5O9WeIxItASS5jN%2B4Haghztm4lmNf9atU5cIddfLa5sDV0YfplKO35aEbFrZvUWEuRzI8%2Fce9Yi8zt972CA1wwo5CAUR%2FpN8%2Bm1ujSBkZMWDrUxSGlrCJyzjnWPgocw%2Fqyow52JiqcN663QIbVEThExn1ISZW6eVi7UWssmpACiqyU1m2Nzg1OcvkWMx1lbXG34DtesA7SpMzZ1GYTQiBR4oFscDDQR5bfeJhqKY5EBl787rCCtFhhkZZYxapyv6SOweVVQiE1EeDi%2BuClpR6E6TkAnIxMt9rgduZORnNPl0B1UxqEErlEm3QexKfqVdsHwGtfOn%2F3HFwBULt0f%2FQxSNKMeKHmgC67xuqbN5dZ7%2BtmB4Lqk%2FHBws6Qzkw5eTwvgY6pgGYnnu2MnvhXHMveIYFYoKJ1Jdsmjh0BrhZEkN%2Fzfz03MVwQAvFoLYqMK%2BRocfXj2PuqMDsJzLy2JFybYPRQZTJ6MTMIM4YUgSavRAt8iTY7Qsfm5ribC1yMJa%2Bg5Okd8BMlKPMuiqlhExvp0UfOmSD0%2BXLS%2FnzgxcRVJhXD%2F7Jgz2ct9%2B8A6uSEn8WLc3Uhfqtjee8kAiW8U8qemt3bQpCUAyrC%2B0%2F&X-Amz-Signature=98636d953e9bd3c3c763e7fff127eddf1f7d04a8f69dcce91751e74ae0ff4d55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6Q3Q4C5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIATopYf0xY0EB04vIPnINgbzNHcFhjrmne1oiFj28rSzAiA0ptJPkecPAy4u4zg2I%2BFUH4kXM29otDEnFT32oYEd9SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1aXXQNkJUV3YYzXKtwDwkXlPaTN44OmQGpwChME1UmJafpSkDQBZ8Tf0d1Fcrae%2BwJvrcdeUL%2BJbl2eSvbPQsKc21HgurqlTS0Hi9B2HciSAPkrtD7ZQ6rlBbYUB%2BES3QdQqS%2B6ujWgefqb9VjlJiWplt0dcKbtVGCGFCpwCcexrTF3FgA2RdnRk50ncYlsSifQmD4DtuuEmkaDLrxxkdnnUbkbz168AtVAACnGhSwXVGDWYyNPA3p61O%2BCvR6Kq7kl2EM%2F39afqo5Kv4O5O9WeIxItASS5jN%2B4Haghztm4lmNf9atU5cIddfLa5sDV0YfplKO35aEbFrZvUWEuRzI8%2Fce9Yi8zt972CA1wwo5CAUR%2FpN8%2Bm1ujSBkZMWDrUxSGlrCJyzjnWPgocw%2Fqyow52JiqcN663QIbVEThExn1ISZW6eVi7UWssmpACiqyU1m2Nzg1OcvkWMx1lbXG34DtesA7SpMzZ1GYTQiBR4oFscDDQR5bfeJhqKY5EBl787rCCtFhhkZZYxapyv6SOweVVQiE1EeDi%2BuClpR6E6TkAnIxMt9rgduZORnNPl0B1UxqEErlEm3QexKfqVdsHwGtfOn%2F3HFwBULt0f%2FQxSNKMeKHmgC67xuqbN5dZ7%2BtmB4Lqk%2FHBws6Qzkw5eTwvgY6pgGYnnu2MnvhXHMveIYFYoKJ1Jdsmjh0BrhZEkN%2Fzfz03MVwQAvFoLYqMK%2BRocfXj2PuqMDsJzLy2JFybYPRQZTJ6MTMIM4YUgSavRAt8iTY7Qsfm5ribC1yMJa%2Bg5Okd8BMlKPMuiqlhExvp0UfOmSD0%2BXLS%2FnzgxcRVJhXD%2F7Jgz2ct9%2B8A6uSEn8WLc3Uhfqtjee8kAiW8U8qemt3bQpCUAyrC%2B0%2F&X-Amz-Signature=eaa3180d4d51a1bad7836acd435601debb6b8fc3403ffed510d470ac0094b808&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
