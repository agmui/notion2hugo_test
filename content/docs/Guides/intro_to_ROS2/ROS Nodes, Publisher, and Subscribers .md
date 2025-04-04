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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4IBQRD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMqc3iCTxqzpRhk2QxmNtxCzMjAQNKlIqO%2Bcg5zrajYAiBp52G%2FDeMECcBBDCiXPnPVv34ebryL%2B%2FP6%2BwpUMCPNXyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGefHOHwqtVUNWKHKtwDhmP7sVHDh5fRNH1HSbCBB41WY6QhteD40cruQh0mkpTU7cdbBt5Vpky6FffKQ1fIjDy65oPpfSq5XzzRHXUhMU45L4c8%2FMHjQo%2BiILS%2BIIIX6ZkFXmF2wrPNKaCtPqtaiHw2rv8VW%2F1gKV7Erd1D7wvOKIgK%2BM6S%2FuDT912RjXtZgQMtYqG8731KLgeGSjXvpBDWCTD6lLMzp3z%2FsmLZUVJu8Y9jilyHtw%2Ffp8WpbBugb3x8vB7glf2GtGcaM4SsKx%2F%2FURTbqEMwNX7CnNsiCJXTKoc0y7LdfVB%2BhKZC5%2BwLk7jhTdgTr3ti4JvWq7pRgWwP%2Bl%2FdxFq0vxbv99gp6m2DT%2FUiEjN6WEKYEiN7omxLzUTZAmefCV7MMJFZBynE8Dan%2B6yuj7%2BflSOIfqFlv4CzMlXjUh7cR6mxjbsf0zSc1q9HQgwmrldv0MDky%2BHRa3anzd1WH1flLVHC%2BBVxPnDrIbtG3NtGjEL9%2BXUOYbjurjldU7rkhNDsUSDqimjnY%2FYWbD9jfuhuo4I8PqY7e88c%2FSPdiAUUmLQxDnuCsccUYksz7p7HBB6zfJFeiqdL2ZiLN81J75rFZsG16c9l%2FQztS1d0i0CaNOubIJWdzxrqq%2BA3pFpCEfRz6gowyK29vwY6pgHYI0iCaW8fvZ5gHVmfkePykG806NIOzZTpr3swFTn4911MUI%2FPmL5mrMW6Hp7DmgdJmA2vovmoQBL0KxrXoTXtGP4oQBIdGruMbJRnVd75zuFEvYFjj6a4rwivxMpE388BYZsnTQfv1nKUmoW0UmK1mBhLRyXsSg6Z1M7gPY4HQU4oJp12h%2FJDX3d1g5rsZd74nHPq1kEINbxez7EbNfKlUpvyJOp4&X-Amz-Signature=1363e611fe57a185dbe5494b2316d339bd570575435fad91bca53b7b061110ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4IBQRD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMqc3iCTxqzpRhk2QxmNtxCzMjAQNKlIqO%2Bcg5zrajYAiBp52G%2FDeMECcBBDCiXPnPVv34ebryL%2B%2FP6%2BwpUMCPNXyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGefHOHwqtVUNWKHKtwDhmP7sVHDh5fRNH1HSbCBB41WY6QhteD40cruQh0mkpTU7cdbBt5Vpky6FffKQ1fIjDy65oPpfSq5XzzRHXUhMU45L4c8%2FMHjQo%2BiILS%2BIIIX6ZkFXmF2wrPNKaCtPqtaiHw2rv8VW%2F1gKV7Erd1D7wvOKIgK%2BM6S%2FuDT912RjXtZgQMtYqG8731KLgeGSjXvpBDWCTD6lLMzp3z%2FsmLZUVJu8Y9jilyHtw%2Ffp8WpbBugb3x8vB7glf2GtGcaM4SsKx%2F%2FURTbqEMwNX7CnNsiCJXTKoc0y7LdfVB%2BhKZC5%2BwLk7jhTdgTr3ti4JvWq7pRgWwP%2Bl%2FdxFq0vxbv99gp6m2DT%2FUiEjN6WEKYEiN7omxLzUTZAmefCV7MMJFZBynE8Dan%2B6yuj7%2BflSOIfqFlv4CzMlXjUh7cR6mxjbsf0zSc1q9HQgwmrldv0MDky%2BHRa3anzd1WH1flLVHC%2BBVxPnDrIbtG3NtGjEL9%2BXUOYbjurjldU7rkhNDsUSDqimjnY%2FYWbD9jfuhuo4I8PqY7e88c%2FSPdiAUUmLQxDnuCsccUYksz7p7HBB6zfJFeiqdL2ZiLN81J75rFZsG16c9l%2FQztS1d0i0CaNOubIJWdzxrqq%2BA3pFpCEfRz6gowyK29vwY6pgHYI0iCaW8fvZ5gHVmfkePykG806NIOzZTpr3swFTn4911MUI%2FPmL5mrMW6Hp7DmgdJmA2vovmoQBL0KxrXoTXtGP4oQBIdGruMbJRnVd75zuFEvYFjj6a4rwivxMpE388BYZsnTQfv1nKUmoW0UmK1mBhLRyXsSg6Z1M7gPY4HQU4oJp12h%2FJDX3d1g5rsZd74nHPq1kEINbxez7EbNfKlUpvyJOp4&X-Amz-Signature=14e8f47244cf3e6f51388b9470542398b5d6b4989068f8d7997a5a64f78d945b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4IBQRD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMqc3iCTxqzpRhk2QxmNtxCzMjAQNKlIqO%2Bcg5zrajYAiBp52G%2FDeMECcBBDCiXPnPVv34ebryL%2B%2FP6%2BwpUMCPNXyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGefHOHwqtVUNWKHKtwDhmP7sVHDh5fRNH1HSbCBB41WY6QhteD40cruQh0mkpTU7cdbBt5Vpky6FffKQ1fIjDy65oPpfSq5XzzRHXUhMU45L4c8%2FMHjQo%2BiILS%2BIIIX6ZkFXmF2wrPNKaCtPqtaiHw2rv8VW%2F1gKV7Erd1D7wvOKIgK%2BM6S%2FuDT912RjXtZgQMtYqG8731KLgeGSjXvpBDWCTD6lLMzp3z%2FsmLZUVJu8Y9jilyHtw%2Ffp8WpbBugb3x8vB7glf2GtGcaM4SsKx%2F%2FURTbqEMwNX7CnNsiCJXTKoc0y7LdfVB%2BhKZC5%2BwLk7jhTdgTr3ti4JvWq7pRgWwP%2Bl%2FdxFq0vxbv99gp6m2DT%2FUiEjN6WEKYEiN7omxLzUTZAmefCV7MMJFZBynE8Dan%2B6yuj7%2BflSOIfqFlv4CzMlXjUh7cR6mxjbsf0zSc1q9HQgwmrldv0MDky%2BHRa3anzd1WH1flLVHC%2BBVxPnDrIbtG3NtGjEL9%2BXUOYbjurjldU7rkhNDsUSDqimjnY%2FYWbD9jfuhuo4I8PqY7e88c%2FSPdiAUUmLQxDnuCsccUYksz7p7HBB6zfJFeiqdL2ZiLN81J75rFZsG16c9l%2FQztS1d0i0CaNOubIJWdzxrqq%2BA3pFpCEfRz6gowyK29vwY6pgHYI0iCaW8fvZ5gHVmfkePykG806NIOzZTpr3swFTn4911MUI%2FPmL5mrMW6Hp7DmgdJmA2vovmoQBL0KxrXoTXtGP4oQBIdGruMbJRnVd75zuFEvYFjj6a4rwivxMpE388BYZsnTQfv1nKUmoW0UmK1mBhLRyXsSg6Z1M7gPY4HQU4oJp12h%2FJDX3d1g5rsZd74nHPq1kEINbxez7EbNfKlUpvyJOp4&X-Amz-Signature=6800ade7ac556d0a3d172ffa7f7161e38b2c2a0acbc46dd0dc77421c2287f573&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4IBQRD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMqc3iCTxqzpRhk2QxmNtxCzMjAQNKlIqO%2Bcg5zrajYAiBp52G%2FDeMECcBBDCiXPnPVv34ebryL%2B%2FP6%2BwpUMCPNXyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGefHOHwqtVUNWKHKtwDhmP7sVHDh5fRNH1HSbCBB41WY6QhteD40cruQh0mkpTU7cdbBt5Vpky6FffKQ1fIjDy65oPpfSq5XzzRHXUhMU45L4c8%2FMHjQo%2BiILS%2BIIIX6ZkFXmF2wrPNKaCtPqtaiHw2rv8VW%2F1gKV7Erd1D7wvOKIgK%2BM6S%2FuDT912RjXtZgQMtYqG8731KLgeGSjXvpBDWCTD6lLMzp3z%2FsmLZUVJu8Y9jilyHtw%2Ffp8WpbBugb3x8vB7glf2GtGcaM4SsKx%2F%2FURTbqEMwNX7CnNsiCJXTKoc0y7LdfVB%2BhKZC5%2BwLk7jhTdgTr3ti4JvWq7pRgWwP%2Bl%2FdxFq0vxbv99gp6m2DT%2FUiEjN6WEKYEiN7omxLzUTZAmefCV7MMJFZBynE8Dan%2B6yuj7%2BflSOIfqFlv4CzMlXjUh7cR6mxjbsf0zSc1q9HQgwmrldv0MDky%2BHRa3anzd1WH1flLVHC%2BBVxPnDrIbtG3NtGjEL9%2BXUOYbjurjldU7rkhNDsUSDqimjnY%2FYWbD9jfuhuo4I8PqY7e88c%2FSPdiAUUmLQxDnuCsccUYksz7p7HBB6zfJFeiqdL2ZiLN81J75rFZsG16c9l%2FQztS1d0i0CaNOubIJWdzxrqq%2BA3pFpCEfRz6gowyK29vwY6pgHYI0iCaW8fvZ5gHVmfkePykG806NIOzZTpr3swFTn4911MUI%2FPmL5mrMW6Hp7DmgdJmA2vovmoQBL0KxrXoTXtGP4oQBIdGruMbJRnVd75zuFEvYFjj6a4rwivxMpE388BYZsnTQfv1nKUmoW0UmK1mBhLRyXsSg6Z1M7gPY4HQU4oJp12h%2FJDX3d1g5rsZd74nHPq1kEINbxez7EbNfKlUpvyJOp4&X-Amz-Signature=32fb5ae1c05ae9268ab39483d4bd149d8bb156433d2a0275160af2856d01b965&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4IBQRD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMqc3iCTxqzpRhk2QxmNtxCzMjAQNKlIqO%2Bcg5zrajYAiBp52G%2FDeMECcBBDCiXPnPVv34ebryL%2B%2FP6%2BwpUMCPNXyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGefHOHwqtVUNWKHKtwDhmP7sVHDh5fRNH1HSbCBB41WY6QhteD40cruQh0mkpTU7cdbBt5Vpky6FffKQ1fIjDy65oPpfSq5XzzRHXUhMU45L4c8%2FMHjQo%2BiILS%2BIIIX6ZkFXmF2wrPNKaCtPqtaiHw2rv8VW%2F1gKV7Erd1D7wvOKIgK%2BM6S%2FuDT912RjXtZgQMtYqG8731KLgeGSjXvpBDWCTD6lLMzp3z%2FsmLZUVJu8Y9jilyHtw%2Ffp8WpbBugb3x8vB7glf2GtGcaM4SsKx%2F%2FURTbqEMwNX7CnNsiCJXTKoc0y7LdfVB%2BhKZC5%2BwLk7jhTdgTr3ti4JvWq7pRgWwP%2Bl%2FdxFq0vxbv99gp6m2DT%2FUiEjN6WEKYEiN7omxLzUTZAmefCV7MMJFZBynE8Dan%2B6yuj7%2BflSOIfqFlv4CzMlXjUh7cR6mxjbsf0zSc1q9HQgwmrldv0MDky%2BHRa3anzd1WH1flLVHC%2BBVxPnDrIbtG3NtGjEL9%2BXUOYbjurjldU7rkhNDsUSDqimjnY%2FYWbD9jfuhuo4I8PqY7e88c%2FSPdiAUUmLQxDnuCsccUYksz7p7HBB6zfJFeiqdL2ZiLN81J75rFZsG16c9l%2FQztS1d0i0CaNOubIJWdzxrqq%2BA3pFpCEfRz6gowyK29vwY6pgHYI0iCaW8fvZ5gHVmfkePykG806NIOzZTpr3swFTn4911MUI%2FPmL5mrMW6Hp7DmgdJmA2vovmoQBL0KxrXoTXtGP4oQBIdGruMbJRnVd75zuFEvYFjj6a4rwivxMpE388BYZsnTQfv1nKUmoW0UmK1mBhLRyXsSg6Z1M7gPY4HQU4oJp12h%2FJDX3d1g5rsZd74nHPq1kEINbxez7EbNfKlUpvyJOp4&X-Amz-Signature=2441770c41cc94c2e27994f196dc11ed1d279e2d54c5ae2cc62f04af381c7b31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4IBQRD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMqc3iCTxqzpRhk2QxmNtxCzMjAQNKlIqO%2Bcg5zrajYAiBp52G%2FDeMECcBBDCiXPnPVv34ebryL%2B%2FP6%2BwpUMCPNXyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGefHOHwqtVUNWKHKtwDhmP7sVHDh5fRNH1HSbCBB41WY6QhteD40cruQh0mkpTU7cdbBt5Vpky6FffKQ1fIjDy65oPpfSq5XzzRHXUhMU45L4c8%2FMHjQo%2BiILS%2BIIIX6ZkFXmF2wrPNKaCtPqtaiHw2rv8VW%2F1gKV7Erd1D7wvOKIgK%2BM6S%2FuDT912RjXtZgQMtYqG8731KLgeGSjXvpBDWCTD6lLMzp3z%2FsmLZUVJu8Y9jilyHtw%2Ffp8WpbBugb3x8vB7glf2GtGcaM4SsKx%2F%2FURTbqEMwNX7CnNsiCJXTKoc0y7LdfVB%2BhKZC5%2BwLk7jhTdgTr3ti4JvWq7pRgWwP%2Bl%2FdxFq0vxbv99gp6m2DT%2FUiEjN6WEKYEiN7omxLzUTZAmefCV7MMJFZBynE8Dan%2B6yuj7%2BflSOIfqFlv4CzMlXjUh7cR6mxjbsf0zSc1q9HQgwmrldv0MDky%2BHRa3anzd1WH1flLVHC%2BBVxPnDrIbtG3NtGjEL9%2BXUOYbjurjldU7rkhNDsUSDqimjnY%2FYWbD9jfuhuo4I8PqY7e88c%2FSPdiAUUmLQxDnuCsccUYksz7p7HBB6zfJFeiqdL2ZiLN81J75rFZsG16c9l%2FQztS1d0i0CaNOubIJWdzxrqq%2BA3pFpCEfRz6gowyK29vwY6pgHYI0iCaW8fvZ5gHVmfkePykG806NIOzZTpr3swFTn4911MUI%2FPmL5mrMW6Hp7DmgdJmA2vovmoQBL0KxrXoTXtGP4oQBIdGruMbJRnVd75zuFEvYFjj6a4rwivxMpE388BYZsnTQfv1nKUmoW0UmK1mBhLRyXsSg6Z1M7gPY4HQU4oJp12h%2FJDX3d1g5rsZd74nHPq1kEINbxez7EbNfKlUpvyJOp4&X-Amz-Signature=52ccd72d8dcbfae25d8b159049cc987eed8aae6b545d7aa7a04a55c331a5671c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4IBQRD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMqc3iCTxqzpRhk2QxmNtxCzMjAQNKlIqO%2Bcg5zrajYAiBp52G%2FDeMECcBBDCiXPnPVv34ebryL%2B%2FP6%2BwpUMCPNXyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGefHOHwqtVUNWKHKtwDhmP7sVHDh5fRNH1HSbCBB41WY6QhteD40cruQh0mkpTU7cdbBt5Vpky6FffKQ1fIjDy65oPpfSq5XzzRHXUhMU45L4c8%2FMHjQo%2BiILS%2BIIIX6ZkFXmF2wrPNKaCtPqtaiHw2rv8VW%2F1gKV7Erd1D7wvOKIgK%2BM6S%2FuDT912RjXtZgQMtYqG8731KLgeGSjXvpBDWCTD6lLMzp3z%2FsmLZUVJu8Y9jilyHtw%2Ffp8WpbBugb3x8vB7glf2GtGcaM4SsKx%2F%2FURTbqEMwNX7CnNsiCJXTKoc0y7LdfVB%2BhKZC5%2BwLk7jhTdgTr3ti4JvWq7pRgWwP%2Bl%2FdxFq0vxbv99gp6m2DT%2FUiEjN6WEKYEiN7omxLzUTZAmefCV7MMJFZBynE8Dan%2B6yuj7%2BflSOIfqFlv4CzMlXjUh7cR6mxjbsf0zSc1q9HQgwmrldv0MDky%2BHRa3anzd1WH1flLVHC%2BBVxPnDrIbtG3NtGjEL9%2BXUOYbjurjldU7rkhNDsUSDqimjnY%2FYWbD9jfuhuo4I8PqY7e88c%2FSPdiAUUmLQxDnuCsccUYksz7p7HBB6zfJFeiqdL2ZiLN81J75rFZsG16c9l%2FQztS1d0i0CaNOubIJWdzxrqq%2BA3pFpCEfRz6gowyK29vwY6pgHYI0iCaW8fvZ5gHVmfkePykG806NIOzZTpr3swFTn4911MUI%2FPmL5mrMW6Hp7DmgdJmA2vovmoQBL0KxrXoTXtGP4oQBIdGruMbJRnVd75zuFEvYFjj6a4rwivxMpE388BYZsnTQfv1nKUmoW0UmK1mBhLRyXsSg6Z1M7gPY4HQU4oJp12h%2FJDX3d1g5rsZd74nHPq1kEINbxez7EbNfKlUpvyJOp4&X-Amz-Signature=58c0894bf3d40287f9a09ebe87c64727c076f294ce849d9e62c1acbef4414f49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4IBQRD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMqc3iCTxqzpRhk2QxmNtxCzMjAQNKlIqO%2Bcg5zrajYAiBp52G%2FDeMECcBBDCiXPnPVv34ebryL%2B%2FP6%2BwpUMCPNXyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGefHOHwqtVUNWKHKtwDhmP7sVHDh5fRNH1HSbCBB41WY6QhteD40cruQh0mkpTU7cdbBt5Vpky6FffKQ1fIjDy65oPpfSq5XzzRHXUhMU45L4c8%2FMHjQo%2BiILS%2BIIIX6ZkFXmF2wrPNKaCtPqtaiHw2rv8VW%2F1gKV7Erd1D7wvOKIgK%2BM6S%2FuDT912RjXtZgQMtYqG8731KLgeGSjXvpBDWCTD6lLMzp3z%2FsmLZUVJu8Y9jilyHtw%2Ffp8WpbBugb3x8vB7glf2GtGcaM4SsKx%2F%2FURTbqEMwNX7CnNsiCJXTKoc0y7LdfVB%2BhKZC5%2BwLk7jhTdgTr3ti4JvWq7pRgWwP%2Bl%2FdxFq0vxbv99gp6m2DT%2FUiEjN6WEKYEiN7omxLzUTZAmefCV7MMJFZBynE8Dan%2B6yuj7%2BflSOIfqFlv4CzMlXjUh7cR6mxjbsf0zSc1q9HQgwmrldv0MDky%2BHRa3anzd1WH1flLVHC%2BBVxPnDrIbtG3NtGjEL9%2BXUOYbjurjldU7rkhNDsUSDqimjnY%2FYWbD9jfuhuo4I8PqY7e88c%2FSPdiAUUmLQxDnuCsccUYksz7p7HBB6zfJFeiqdL2ZiLN81J75rFZsG16c9l%2FQztS1d0i0CaNOubIJWdzxrqq%2BA3pFpCEfRz6gowyK29vwY6pgHYI0iCaW8fvZ5gHVmfkePykG806NIOzZTpr3swFTn4911MUI%2FPmL5mrMW6Hp7DmgdJmA2vovmoQBL0KxrXoTXtGP4oQBIdGruMbJRnVd75zuFEvYFjj6a4rwivxMpE388BYZsnTQfv1nKUmoW0UmK1mBhLRyXsSg6Z1M7gPY4HQU4oJp12h%2FJDX3d1g5rsZd74nHPq1kEINbxez7EbNfKlUpvyJOp4&X-Amz-Signature=5cf87f5cef4059125e19502b6873f8fd10fa4ec4d2ddf9175b69c4e1e4618cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
