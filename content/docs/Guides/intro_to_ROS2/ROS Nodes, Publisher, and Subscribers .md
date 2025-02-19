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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDYIY4F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhRwlUIiA8aQ7kMlzRqxr2cuzZpCcQeXWNnZXsB2VJ%2FAiB3RMAMeOov7jIK32kaeroTJ6CdfHF8lB%2B3CxiBxtjztyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9pnlmOL%2BjxZNEvbVKtwDeSsq667iBpiVFf3uauCGwibLQHPLllCpqUoT2fAFiwn46op5Hu6TwW45MRikMlW%2BudTQ4PVXuRwdaZCLVztJVeElfAeqxUCe9ZzMmHulwe3Mu6%2BPLN4tGXwg%2Byw3eNYmp0mPmLmVX0QGc%2FBCARqoZpfzpLTAypToyvoZ2asRMg4gT2r%2FatfcE9MoE3wKcHFucmNkk6cH94XkCC3vcCESZecTXNz4HW6e27h0KLJ0918GbBdWk%2FftJCYCeuHKrViUEjTDIyXFwT5ezA0UratBLns8yCOD3g3aHdt0nDaBmimBhAYASF4opcOD%2Bt5mRRYCM2cmeFExoQmrxUfmHJpz%2FeqWE%2Bs6f0QebrMz8Uxq4TUSAMemumCRCLG6OAtJni17bFHqG15vBd08jh87liaW6v7L8IgLwIuI4F%2BhkAbynOSgsTgnEdyXXTjNMMc%2FNxhmLwcw07KGxUvPE4k8%2FXUXcx2D26UhUdHmWxZsz1qIJcl5Q0m7kpMd3PHvCkkXV%2FB%2BUX%2FuSibZzf7vf7rUcG6sGG%2Fih2Wywm%2BlVNWA9Cd4h8QmDfGK6fCa%2BqGRVM6p%2FfybeUjkSxDPmJ4zn%2ForkTpml3utV%2B63VS07YhuphdHJBV%2F%2BMi%2B03jStoQIzk5kwgqPVvQY6pgEs6Sc9TDW5kNny3ilWkTYQba%2FA2P7ND5mbD%2FQdvrEMeFK3AvayKbQsJ%2FS6Lp3wCOXlvnwJVIYQk9wqqBOrmvCvV1uXTHzShbyW0vblR0NR8gYqUa%2BqJVzNqFJHgkVnVRhI1Zt%2B3GWEINUyC4CWiBjyig1WkTLUY%2F1iaH9A6LsPt1lynOHDG9x7jbEBfnlZUA6Rz2aznnssd3ch2yglOdxCIhgglmv5&X-Amz-Signature=a2b629e4362f4fabe0ff2604be2a7c40a9314cd28c23989042d680c45420a498&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDYIY4F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhRwlUIiA8aQ7kMlzRqxr2cuzZpCcQeXWNnZXsB2VJ%2FAiB3RMAMeOov7jIK32kaeroTJ6CdfHF8lB%2B3CxiBxtjztyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9pnlmOL%2BjxZNEvbVKtwDeSsq667iBpiVFf3uauCGwibLQHPLllCpqUoT2fAFiwn46op5Hu6TwW45MRikMlW%2BudTQ4PVXuRwdaZCLVztJVeElfAeqxUCe9ZzMmHulwe3Mu6%2BPLN4tGXwg%2Byw3eNYmp0mPmLmVX0QGc%2FBCARqoZpfzpLTAypToyvoZ2asRMg4gT2r%2FatfcE9MoE3wKcHFucmNkk6cH94XkCC3vcCESZecTXNz4HW6e27h0KLJ0918GbBdWk%2FftJCYCeuHKrViUEjTDIyXFwT5ezA0UratBLns8yCOD3g3aHdt0nDaBmimBhAYASF4opcOD%2Bt5mRRYCM2cmeFExoQmrxUfmHJpz%2FeqWE%2Bs6f0QebrMz8Uxq4TUSAMemumCRCLG6OAtJni17bFHqG15vBd08jh87liaW6v7L8IgLwIuI4F%2BhkAbynOSgsTgnEdyXXTjNMMc%2FNxhmLwcw07KGxUvPE4k8%2FXUXcx2D26UhUdHmWxZsz1qIJcl5Q0m7kpMd3PHvCkkXV%2FB%2BUX%2FuSibZzf7vf7rUcG6sGG%2Fih2Wywm%2BlVNWA9Cd4h8QmDfGK6fCa%2BqGRVM6p%2FfybeUjkSxDPmJ4zn%2ForkTpml3utV%2B63VS07YhuphdHJBV%2F%2BMi%2B03jStoQIzk5kwgqPVvQY6pgEs6Sc9TDW5kNny3ilWkTYQba%2FA2P7ND5mbD%2FQdvrEMeFK3AvayKbQsJ%2FS6Lp3wCOXlvnwJVIYQk9wqqBOrmvCvV1uXTHzShbyW0vblR0NR8gYqUa%2BqJVzNqFJHgkVnVRhI1Zt%2B3GWEINUyC4CWiBjyig1WkTLUY%2F1iaH9A6LsPt1lynOHDG9x7jbEBfnlZUA6Rz2aznnssd3ch2yglOdxCIhgglmv5&X-Amz-Signature=ace4e098c5ec3b7ca557d1e563891238f1a2a31f31c819c3ff7f53787ee7ca05&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDYIY4F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhRwlUIiA8aQ7kMlzRqxr2cuzZpCcQeXWNnZXsB2VJ%2FAiB3RMAMeOov7jIK32kaeroTJ6CdfHF8lB%2B3CxiBxtjztyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9pnlmOL%2BjxZNEvbVKtwDeSsq667iBpiVFf3uauCGwibLQHPLllCpqUoT2fAFiwn46op5Hu6TwW45MRikMlW%2BudTQ4PVXuRwdaZCLVztJVeElfAeqxUCe9ZzMmHulwe3Mu6%2BPLN4tGXwg%2Byw3eNYmp0mPmLmVX0QGc%2FBCARqoZpfzpLTAypToyvoZ2asRMg4gT2r%2FatfcE9MoE3wKcHFucmNkk6cH94XkCC3vcCESZecTXNz4HW6e27h0KLJ0918GbBdWk%2FftJCYCeuHKrViUEjTDIyXFwT5ezA0UratBLns8yCOD3g3aHdt0nDaBmimBhAYASF4opcOD%2Bt5mRRYCM2cmeFExoQmrxUfmHJpz%2FeqWE%2Bs6f0QebrMz8Uxq4TUSAMemumCRCLG6OAtJni17bFHqG15vBd08jh87liaW6v7L8IgLwIuI4F%2BhkAbynOSgsTgnEdyXXTjNMMc%2FNxhmLwcw07KGxUvPE4k8%2FXUXcx2D26UhUdHmWxZsz1qIJcl5Q0m7kpMd3PHvCkkXV%2FB%2BUX%2FuSibZzf7vf7rUcG6sGG%2Fih2Wywm%2BlVNWA9Cd4h8QmDfGK6fCa%2BqGRVM6p%2FfybeUjkSxDPmJ4zn%2ForkTpml3utV%2B63VS07YhuphdHJBV%2F%2BMi%2B03jStoQIzk5kwgqPVvQY6pgEs6Sc9TDW5kNny3ilWkTYQba%2FA2P7ND5mbD%2FQdvrEMeFK3AvayKbQsJ%2FS6Lp3wCOXlvnwJVIYQk9wqqBOrmvCvV1uXTHzShbyW0vblR0NR8gYqUa%2BqJVzNqFJHgkVnVRhI1Zt%2B3GWEINUyC4CWiBjyig1WkTLUY%2F1iaH9A6LsPt1lynOHDG9x7jbEBfnlZUA6Rz2aznnssd3ch2yglOdxCIhgglmv5&X-Amz-Signature=24f8d29407dc6a308636e1944cb281db2dbd323a1308806538b34b1a988b0a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDYIY4F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhRwlUIiA8aQ7kMlzRqxr2cuzZpCcQeXWNnZXsB2VJ%2FAiB3RMAMeOov7jIK32kaeroTJ6CdfHF8lB%2B3CxiBxtjztyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9pnlmOL%2BjxZNEvbVKtwDeSsq667iBpiVFf3uauCGwibLQHPLllCpqUoT2fAFiwn46op5Hu6TwW45MRikMlW%2BudTQ4PVXuRwdaZCLVztJVeElfAeqxUCe9ZzMmHulwe3Mu6%2BPLN4tGXwg%2Byw3eNYmp0mPmLmVX0QGc%2FBCARqoZpfzpLTAypToyvoZ2asRMg4gT2r%2FatfcE9MoE3wKcHFucmNkk6cH94XkCC3vcCESZecTXNz4HW6e27h0KLJ0918GbBdWk%2FftJCYCeuHKrViUEjTDIyXFwT5ezA0UratBLns8yCOD3g3aHdt0nDaBmimBhAYASF4opcOD%2Bt5mRRYCM2cmeFExoQmrxUfmHJpz%2FeqWE%2Bs6f0QebrMz8Uxq4TUSAMemumCRCLG6OAtJni17bFHqG15vBd08jh87liaW6v7L8IgLwIuI4F%2BhkAbynOSgsTgnEdyXXTjNMMc%2FNxhmLwcw07KGxUvPE4k8%2FXUXcx2D26UhUdHmWxZsz1qIJcl5Q0m7kpMd3PHvCkkXV%2FB%2BUX%2FuSibZzf7vf7rUcG6sGG%2Fih2Wywm%2BlVNWA9Cd4h8QmDfGK6fCa%2BqGRVM6p%2FfybeUjkSxDPmJ4zn%2ForkTpml3utV%2B63VS07YhuphdHJBV%2F%2BMi%2B03jStoQIzk5kwgqPVvQY6pgEs6Sc9TDW5kNny3ilWkTYQba%2FA2P7ND5mbD%2FQdvrEMeFK3AvayKbQsJ%2FS6Lp3wCOXlvnwJVIYQk9wqqBOrmvCvV1uXTHzShbyW0vblR0NR8gYqUa%2BqJVzNqFJHgkVnVRhI1Zt%2B3GWEINUyC4CWiBjyig1WkTLUY%2F1iaH9A6LsPt1lynOHDG9x7jbEBfnlZUA6Rz2aznnssd3ch2yglOdxCIhgglmv5&X-Amz-Signature=46ebaca73113aee6cce45fd7f571412eaa394bf7cdaf62e1a15b2dcf4c42b618&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDYIY4F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhRwlUIiA8aQ7kMlzRqxr2cuzZpCcQeXWNnZXsB2VJ%2FAiB3RMAMeOov7jIK32kaeroTJ6CdfHF8lB%2B3CxiBxtjztyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9pnlmOL%2BjxZNEvbVKtwDeSsq667iBpiVFf3uauCGwibLQHPLllCpqUoT2fAFiwn46op5Hu6TwW45MRikMlW%2BudTQ4PVXuRwdaZCLVztJVeElfAeqxUCe9ZzMmHulwe3Mu6%2BPLN4tGXwg%2Byw3eNYmp0mPmLmVX0QGc%2FBCARqoZpfzpLTAypToyvoZ2asRMg4gT2r%2FatfcE9MoE3wKcHFucmNkk6cH94XkCC3vcCESZecTXNz4HW6e27h0KLJ0918GbBdWk%2FftJCYCeuHKrViUEjTDIyXFwT5ezA0UratBLns8yCOD3g3aHdt0nDaBmimBhAYASF4opcOD%2Bt5mRRYCM2cmeFExoQmrxUfmHJpz%2FeqWE%2Bs6f0QebrMz8Uxq4TUSAMemumCRCLG6OAtJni17bFHqG15vBd08jh87liaW6v7L8IgLwIuI4F%2BhkAbynOSgsTgnEdyXXTjNMMc%2FNxhmLwcw07KGxUvPE4k8%2FXUXcx2D26UhUdHmWxZsz1qIJcl5Q0m7kpMd3PHvCkkXV%2FB%2BUX%2FuSibZzf7vf7rUcG6sGG%2Fih2Wywm%2BlVNWA9Cd4h8QmDfGK6fCa%2BqGRVM6p%2FfybeUjkSxDPmJ4zn%2ForkTpml3utV%2B63VS07YhuphdHJBV%2F%2BMi%2B03jStoQIzk5kwgqPVvQY6pgEs6Sc9TDW5kNny3ilWkTYQba%2FA2P7ND5mbD%2FQdvrEMeFK3AvayKbQsJ%2FS6Lp3wCOXlvnwJVIYQk9wqqBOrmvCvV1uXTHzShbyW0vblR0NR8gYqUa%2BqJVzNqFJHgkVnVRhI1Zt%2B3GWEINUyC4CWiBjyig1WkTLUY%2F1iaH9A6LsPt1lynOHDG9x7jbEBfnlZUA6Rz2aznnssd3ch2yglOdxCIhgglmv5&X-Amz-Signature=9d22e3cbec97bb82406768b5ad3db98899ae4bbb033468b2b370727b655cf801&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDYIY4F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhRwlUIiA8aQ7kMlzRqxr2cuzZpCcQeXWNnZXsB2VJ%2FAiB3RMAMeOov7jIK32kaeroTJ6CdfHF8lB%2B3CxiBxtjztyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9pnlmOL%2BjxZNEvbVKtwDeSsq667iBpiVFf3uauCGwibLQHPLllCpqUoT2fAFiwn46op5Hu6TwW45MRikMlW%2BudTQ4PVXuRwdaZCLVztJVeElfAeqxUCe9ZzMmHulwe3Mu6%2BPLN4tGXwg%2Byw3eNYmp0mPmLmVX0QGc%2FBCARqoZpfzpLTAypToyvoZ2asRMg4gT2r%2FatfcE9MoE3wKcHFucmNkk6cH94XkCC3vcCESZecTXNz4HW6e27h0KLJ0918GbBdWk%2FftJCYCeuHKrViUEjTDIyXFwT5ezA0UratBLns8yCOD3g3aHdt0nDaBmimBhAYASF4opcOD%2Bt5mRRYCM2cmeFExoQmrxUfmHJpz%2FeqWE%2Bs6f0QebrMz8Uxq4TUSAMemumCRCLG6OAtJni17bFHqG15vBd08jh87liaW6v7L8IgLwIuI4F%2BhkAbynOSgsTgnEdyXXTjNMMc%2FNxhmLwcw07KGxUvPE4k8%2FXUXcx2D26UhUdHmWxZsz1qIJcl5Q0m7kpMd3PHvCkkXV%2FB%2BUX%2FuSibZzf7vf7rUcG6sGG%2Fih2Wywm%2BlVNWA9Cd4h8QmDfGK6fCa%2BqGRVM6p%2FfybeUjkSxDPmJ4zn%2ForkTpml3utV%2B63VS07YhuphdHJBV%2F%2BMi%2B03jStoQIzk5kwgqPVvQY6pgEs6Sc9TDW5kNny3ilWkTYQba%2FA2P7ND5mbD%2FQdvrEMeFK3AvayKbQsJ%2FS6Lp3wCOXlvnwJVIYQk9wqqBOrmvCvV1uXTHzShbyW0vblR0NR8gYqUa%2BqJVzNqFJHgkVnVRhI1Zt%2B3GWEINUyC4CWiBjyig1WkTLUY%2F1iaH9A6LsPt1lynOHDG9x7jbEBfnlZUA6Rz2aznnssd3ch2yglOdxCIhgglmv5&X-Amz-Signature=749a393c5ae75e2f230413f73d6aa2e6cf3602da8d2d42a177e95db32a092e32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDYIY4F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhRwlUIiA8aQ7kMlzRqxr2cuzZpCcQeXWNnZXsB2VJ%2FAiB3RMAMeOov7jIK32kaeroTJ6CdfHF8lB%2B3CxiBxtjztyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9pnlmOL%2BjxZNEvbVKtwDeSsq667iBpiVFf3uauCGwibLQHPLllCpqUoT2fAFiwn46op5Hu6TwW45MRikMlW%2BudTQ4PVXuRwdaZCLVztJVeElfAeqxUCe9ZzMmHulwe3Mu6%2BPLN4tGXwg%2Byw3eNYmp0mPmLmVX0QGc%2FBCARqoZpfzpLTAypToyvoZ2asRMg4gT2r%2FatfcE9MoE3wKcHFucmNkk6cH94XkCC3vcCESZecTXNz4HW6e27h0KLJ0918GbBdWk%2FftJCYCeuHKrViUEjTDIyXFwT5ezA0UratBLns8yCOD3g3aHdt0nDaBmimBhAYASF4opcOD%2Bt5mRRYCM2cmeFExoQmrxUfmHJpz%2FeqWE%2Bs6f0QebrMz8Uxq4TUSAMemumCRCLG6OAtJni17bFHqG15vBd08jh87liaW6v7L8IgLwIuI4F%2BhkAbynOSgsTgnEdyXXTjNMMc%2FNxhmLwcw07KGxUvPE4k8%2FXUXcx2D26UhUdHmWxZsz1qIJcl5Q0m7kpMd3PHvCkkXV%2FB%2BUX%2FuSibZzf7vf7rUcG6sGG%2Fih2Wywm%2BlVNWA9Cd4h8QmDfGK6fCa%2BqGRVM6p%2FfybeUjkSxDPmJ4zn%2ForkTpml3utV%2B63VS07YhuphdHJBV%2F%2BMi%2B03jStoQIzk5kwgqPVvQY6pgEs6Sc9TDW5kNny3ilWkTYQba%2FA2P7ND5mbD%2FQdvrEMeFK3AvayKbQsJ%2FS6Lp3wCOXlvnwJVIYQk9wqqBOrmvCvV1uXTHzShbyW0vblR0NR8gYqUa%2BqJVzNqFJHgkVnVRhI1Zt%2B3GWEINUyC4CWiBjyig1WkTLUY%2F1iaH9A6LsPt1lynOHDG9x7jbEBfnlZUA6Rz2aznnssd3ch2yglOdxCIhgglmv5&X-Amz-Signature=a086f75add7d36b858b4b7e476c1364814035ce5c9959cf86805e3d614cac800&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDYIY4F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhRwlUIiA8aQ7kMlzRqxr2cuzZpCcQeXWNnZXsB2VJ%2FAiB3RMAMeOov7jIK32kaeroTJ6CdfHF8lB%2B3CxiBxtjztyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9pnlmOL%2BjxZNEvbVKtwDeSsq667iBpiVFf3uauCGwibLQHPLllCpqUoT2fAFiwn46op5Hu6TwW45MRikMlW%2BudTQ4PVXuRwdaZCLVztJVeElfAeqxUCe9ZzMmHulwe3Mu6%2BPLN4tGXwg%2Byw3eNYmp0mPmLmVX0QGc%2FBCARqoZpfzpLTAypToyvoZ2asRMg4gT2r%2FatfcE9MoE3wKcHFucmNkk6cH94XkCC3vcCESZecTXNz4HW6e27h0KLJ0918GbBdWk%2FftJCYCeuHKrViUEjTDIyXFwT5ezA0UratBLns8yCOD3g3aHdt0nDaBmimBhAYASF4opcOD%2Bt5mRRYCM2cmeFExoQmrxUfmHJpz%2FeqWE%2Bs6f0QebrMz8Uxq4TUSAMemumCRCLG6OAtJni17bFHqG15vBd08jh87liaW6v7L8IgLwIuI4F%2BhkAbynOSgsTgnEdyXXTjNMMc%2FNxhmLwcw07KGxUvPE4k8%2FXUXcx2D26UhUdHmWxZsz1qIJcl5Q0m7kpMd3PHvCkkXV%2FB%2BUX%2FuSibZzf7vf7rUcG6sGG%2Fih2Wywm%2BlVNWA9Cd4h8QmDfGK6fCa%2BqGRVM6p%2FfybeUjkSxDPmJ4zn%2ForkTpml3utV%2B63VS07YhuphdHJBV%2F%2BMi%2B03jStoQIzk5kwgqPVvQY6pgEs6Sc9TDW5kNny3ilWkTYQba%2FA2P7ND5mbD%2FQdvrEMeFK3AvayKbQsJ%2FS6Lp3wCOXlvnwJVIYQk9wqqBOrmvCvV1uXTHzShbyW0vblR0NR8gYqUa%2BqJVzNqFJHgkVnVRhI1Zt%2B3GWEINUyC4CWiBjyig1WkTLUY%2F1iaH9A6LsPt1lynOHDG9x7jbEBfnlZUA6Rz2aznnssd3ch2yglOdxCIhgglmv5&X-Amz-Signature=e15be43774ebf5bb97debffa51ec846fe3d44db38ff120497cf153fad971a324&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
