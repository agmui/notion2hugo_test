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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG364X2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD69DTDRN0nbs2bpBReSbSqb5y23dj9Egf%2B5eORbUx3MgIhAKyMbP1Aur9475bSWUT8B2rnQd8ULk8VWENpKdvsJT1BKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZucFPCjTOoVoc65wq3AOGp1aBXLUwVPeK5OEE4c%2BNqFdIA5mcBxKKkePqsvfSV5%2F5dAfEimYP%2BGoTy3efO5fUJp%2BPxz4zBH%2BTtxABHhAhXD2K3U9BWp%2BcFUfbxhuPZbijzp%2FFWm%2BW1RKxxNRfn5hD2AGDxKQrXjwuxR85ZxlQE76T37L5poEcUCtvVDQxsB1Q7exPhiBogLWi7RBHxCW4w%2BJGbIRCXniBdvRZ%2FRR7zECQlKy1CP8yGzA0%2F%2B2n3t6bCEKLml6MwUGtbjGSVQWo00ksKvR8hx5Z46645PSQZuX9YQUL0y88pN7jtetokHZFKA7cXWC2v%2F3cZrWGfYWAHG2taHt54FfslHLsNvOGwCA1i2OwQDkACP1jCBSBaWYZLWxsPZkkLJqFpAfnjSRPEzXPPiK%2BTPgRZizzqvi%2BxAcY7ci0T4XLibZrY7Ni4FPEHgiQsf8Svgx5SmfIB3K4%2B1FfRPewjPSBbCMmJG%2FpLg39NBV7iYRoImUmPYgLai%2FirfSd5s%2BqjNr65ykcodR1y1eu4JE91qF0fbKYdGvM2sYMjyNk7LuY4SqDTnebE%2FdOZ5fMYwmTvfvsJwJs1Bt5n5aALiokOKh%2B8G%2FhidIbE0%2B2rND40qdG20x2dSQ9u0gMO5Xeo0fa2UlUbjDBltq%2FBjqkAe2WeEofHyqGfNGY5370vY4ByWSvUjhEojsjCSPlqXMNq%2BdGHeCmoXovEqiw9haq2jsK%2BBOAVKi69CG8uDdOObPxz2n6eySKXW4cTA7NotTbWswqLo4CIp67X%2FoGSn2MqWa92kYcyj891a8yJiqaGBAhas5I4O3BBdT0yH6Q%2FzAhZQlcKer43i78LwcGsXuYacPcEayZpniwrD8idhodYR3kOOEP&X-Amz-Signature=4700b603ff90062ead7ccce25d5fd7a6f102ab7b6da8006645a8b074da3f8916&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG364X2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD69DTDRN0nbs2bpBReSbSqb5y23dj9Egf%2B5eORbUx3MgIhAKyMbP1Aur9475bSWUT8B2rnQd8ULk8VWENpKdvsJT1BKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZucFPCjTOoVoc65wq3AOGp1aBXLUwVPeK5OEE4c%2BNqFdIA5mcBxKKkePqsvfSV5%2F5dAfEimYP%2BGoTy3efO5fUJp%2BPxz4zBH%2BTtxABHhAhXD2K3U9BWp%2BcFUfbxhuPZbijzp%2FFWm%2BW1RKxxNRfn5hD2AGDxKQrXjwuxR85ZxlQE76T37L5poEcUCtvVDQxsB1Q7exPhiBogLWi7RBHxCW4w%2BJGbIRCXniBdvRZ%2FRR7zECQlKy1CP8yGzA0%2F%2B2n3t6bCEKLml6MwUGtbjGSVQWo00ksKvR8hx5Z46645PSQZuX9YQUL0y88pN7jtetokHZFKA7cXWC2v%2F3cZrWGfYWAHG2taHt54FfslHLsNvOGwCA1i2OwQDkACP1jCBSBaWYZLWxsPZkkLJqFpAfnjSRPEzXPPiK%2BTPgRZizzqvi%2BxAcY7ci0T4XLibZrY7Ni4FPEHgiQsf8Svgx5SmfIB3K4%2B1FfRPewjPSBbCMmJG%2FpLg39NBV7iYRoImUmPYgLai%2FirfSd5s%2BqjNr65ykcodR1y1eu4JE91qF0fbKYdGvM2sYMjyNk7LuY4SqDTnebE%2FdOZ5fMYwmTvfvsJwJs1Bt5n5aALiokOKh%2B8G%2FhidIbE0%2B2rND40qdG20x2dSQ9u0gMO5Xeo0fa2UlUbjDBltq%2FBjqkAe2WeEofHyqGfNGY5370vY4ByWSvUjhEojsjCSPlqXMNq%2BdGHeCmoXovEqiw9haq2jsK%2BBOAVKi69CG8uDdOObPxz2n6eySKXW4cTA7NotTbWswqLo4CIp67X%2FoGSn2MqWa92kYcyj891a8yJiqaGBAhas5I4O3BBdT0yH6Q%2FzAhZQlcKer43i78LwcGsXuYacPcEayZpniwrD8idhodYR3kOOEP&X-Amz-Signature=5028a884288cb04520e1c3aa677c3c903a9d542f3f1fdeea20bbb9fd12b487e5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG364X2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD69DTDRN0nbs2bpBReSbSqb5y23dj9Egf%2B5eORbUx3MgIhAKyMbP1Aur9475bSWUT8B2rnQd8ULk8VWENpKdvsJT1BKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZucFPCjTOoVoc65wq3AOGp1aBXLUwVPeK5OEE4c%2BNqFdIA5mcBxKKkePqsvfSV5%2F5dAfEimYP%2BGoTy3efO5fUJp%2BPxz4zBH%2BTtxABHhAhXD2K3U9BWp%2BcFUfbxhuPZbijzp%2FFWm%2BW1RKxxNRfn5hD2AGDxKQrXjwuxR85ZxlQE76T37L5poEcUCtvVDQxsB1Q7exPhiBogLWi7RBHxCW4w%2BJGbIRCXniBdvRZ%2FRR7zECQlKy1CP8yGzA0%2F%2B2n3t6bCEKLml6MwUGtbjGSVQWo00ksKvR8hx5Z46645PSQZuX9YQUL0y88pN7jtetokHZFKA7cXWC2v%2F3cZrWGfYWAHG2taHt54FfslHLsNvOGwCA1i2OwQDkACP1jCBSBaWYZLWxsPZkkLJqFpAfnjSRPEzXPPiK%2BTPgRZizzqvi%2BxAcY7ci0T4XLibZrY7Ni4FPEHgiQsf8Svgx5SmfIB3K4%2B1FfRPewjPSBbCMmJG%2FpLg39NBV7iYRoImUmPYgLai%2FirfSd5s%2BqjNr65ykcodR1y1eu4JE91qF0fbKYdGvM2sYMjyNk7LuY4SqDTnebE%2FdOZ5fMYwmTvfvsJwJs1Bt5n5aALiokOKh%2B8G%2FhidIbE0%2B2rND40qdG20x2dSQ9u0gMO5Xeo0fa2UlUbjDBltq%2FBjqkAe2WeEofHyqGfNGY5370vY4ByWSvUjhEojsjCSPlqXMNq%2BdGHeCmoXovEqiw9haq2jsK%2BBOAVKi69CG8uDdOObPxz2n6eySKXW4cTA7NotTbWswqLo4CIp67X%2FoGSn2MqWa92kYcyj891a8yJiqaGBAhas5I4O3BBdT0yH6Q%2FzAhZQlcKer43i78LwcGsXuYacPcEayZpniwrD8idhodYR3kOOEP&X-Amz-Signature=50b4049940a5d8bdf87966c1f7977a27f283d3a8a8c704f5de2505fe9cbd8e19&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG364X2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD69DTDRN0nbs2bpBReSbSqb5y23dj9Egf%2B5eORbUx3MgIhAKyMbP1Aur9475bSWUT8B2rnQd8ULk8VWENpKdvsJT1BKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZucFPCjTOoVoc65wq3AOGp1aBXLUwVPeK5OEE4c%2BNqFdIA5mcBxKKkePqsvfSV5%2F5dAfEimYP%2BGoTy3efO5fUJp%2BPxz4zBH%2BTtxABHhAhXD2K3U9BWp%2BcFUfbxhuPZbijzp%2FFWm%2BW1RKxxNRfn5hD2AGDxKQrXjwuxR85ZxlQE76T37L5poEcUCtvVDQxsB1Q7exPhiBogLWi7RBHxCW4w%2BJGbIRCXniBdvRZ%2FRR7zECQlKy1CP8yGzA0%2F%2B2n3t6bCEKLml6MwUGtbjGSVQWo00ksKvR8hx5Z46645PSQZuX9YQUL0y88pN7jtetokHZFKA7cXWC2v%2F3cZrWGfYWAHG2taHt54FfslHLsNvOGwCA1i2OwQDkACP1jCBSBaWYZLWxsPZkkLJqFpAfnjSRPEzXPPiK%2BTPgRZizzqvi%2BxAcY7ci0T4XLibZrY7Ni4FPEHgiQsf8Svgx5SmfIB3K4%2B1FfRPewjPSBbCMmJG%2FpLg39NBV7iYRoImUmPYgLai%2FirfSd5s%2BqjNr65ykcodR1y1eu4JE91qF0fbKYdGvM2sYMjyNk7LuY4SqDTnebE%2FdOZ5fMYwmTvfvsJwJs1Bt5n5aALiokOKh%2B8G%2FhidIbE0%2B2rND40qdG20x2dSQ9u0gMO5Xeo0fa2UlUbjDBltq%2FBjqkAe2WeEofHyqGfNGY5370vY4ByWSvUjhEojsjCSPlqXMNq%2BdGHeCmoXovEqiw9haq2jsK%2BBOAVKi69CG8uDdOObPxz2n6eySKXW4cTA7NotTbWswqLo4CIp67X%2FoGSn2MqWa92kYcyj891a8yJiqaGBAhas5I4O3BBdT0yH6Q%2FzAhZQlcKer43i78LwcGsXuYacPcEayZpniwrD8idhodYR3kOOEP&X-Amz-Signature=722d73f8b0032acd68807fabb6bf7715320e0e3d361f4bded91d49e9725f0907&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG364X2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD69DTDRN0nbs2bpBReSbSqb5y23dj9Egf%2B5eORbUx3MgIhAKyMbP1Aur9475bSWUT8B2rnQd8ULk8VWENpKdvsJT1BKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZucFPCjTOoVoc65wq3AOGp1aBXLUwVPeK5OEE4c%2BNqFdIA5mcBxKKkePqsvfSV5%2F5dAfEimYP%2BGoTy3efO5fUJp%2BPxz4zBH%2BTtxABHhAhXD2K3U9BWp%2BcFUfbxhuPZbijzp%2FFWm%2BW1RKxxNRfn5hD2AGDxKQrXjwuxR85ZxlQE76T37L5poEcUCtvVDQxsB1Q7exPhiBogLWi7RBHxCW4w%2BJGbIRCXniBdvRZ%2FRR7zECQlKy1CP8yGzA0%2F%2B2n3t6bCEKLml6MwUGtbjGSVQWo00ksKvR8hx5Z46645PSQZuX9YQUL0y88pN7jtetokHZFKA7cXWC2v%2F3cZrWGfYWAHG2taHt54FfslHLsNvOGwCA1i2OwQDkACP1jCBSBaWYZLWxsPZkkLJqFpAfnjSRPEzXPPiK%2BTPgRZizzqvi%2BxAcY7ci0T4XLibZrY7Ni4FPEHgiQsf8Svgx5SmfIB3K4%2B1FfRPewjPSBbCMmJG%2FpLg39NBV7iYRoImUmPYgLai%2FirfSd5s%2BqjNr65ykcodR1y1eu4JE91qF0fbKYdGvM2sYMjyNk7LuY4SqDTnebE%2FdOZ5fMYwmTvfvsJwJs1Bt5n5aALiokOKh%2B8G%2FhidIbE0%2B2rND40qdG20x2dSQ9u0gMO5Xeo0fa2UlUbjDBltq%2FBjqkAe2WeEofHyqGfNGY5370vY4ByWSvUjhEojsjCSPlqXMNq%2BdGHeCmoXovEqiw9haq2jsK%2BBOAVKi69CG8uDdOObPxz2n6eySKXW4cTA7NotTbWswqLo4CIp67X%2FoGSn2MqWa92kYcyj891a8yJiqaGBAhas5I4O3BBdT0yH6Q%2FzAhZQlcKer43i78LwcGsXuYacPcEayZpniwrD8idhodYR3kOOEP&X-Amz-Signature=7f8bb93b246afa6ac4848379180d344cafdc35dc896e1e4070f6949f064b5ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG364X2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD69DTDRN0nbs2bpBReSbSqb5y23dj9Egf%2B5eORbUx3MgIhAKyMbP1Aur9475bSWUT8B2rnQd8ULk8VWENpKdvsJT1BKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZucFPCjTOoVoc65wq3AOGp1aBXLUwVPeK5OEE4c%2BNqFdIA5mcBxKKkePqsvfSV5%2F5dAfEimYP%2BGoTy3efO5fUJp%2BPxz4zBH%2BTtxABHhAhXD2K3U9BWp%2BcFUfbxhuPZbijzp%2FFWm%2BW1RKxxNRfn5hD2AGDxKQrXjwuxR85ZxlQE76T37L5poEcUCtvVDQxsB1Q7exPhiBogLWi7RBHxCW4w%2BJGbIRCXniBdvRZ%2FRR7zECQlKy1CP8yGzA0%2F%2B2n3t6bCEKLml6MwUGtbjGSVQWo00ksKvR8hx5Z46645PSQZuX9YQUL0y88pN7jtetokHZFKA7cXWC2v%2F3cZrWGfYWAHG2taHt54FfslHLsNvOGwCA1i2OwQDkACP1jCBSBaWYZLWxsPZkkLJqFpAfnjSRPEzXPPiK%2BTPgRZizzqvi%2BxAcY7ci0T4XLibZrY7Ni4FPEHgiQsf8Svgx5SmfIB3K4%2B1FfRPewjPSBbCMmJG%2FpLg39NBV7iYRoImUmPYgLai%2FirfSd5s%2BqjNr65ykcodR1y1eu4JE91qF0fbKYdGvM2sYMjyNk7LuY4SqDTnebE%2FdOZ5fMYwmTvfvsJwJs1Bt5n5aALiokOKh%2B8G%2FhidIbE0%2B2rND40qdG20x2dSQ9u0gMO5Xeo0fa2UlUbjDBltq%2FBjqkAe2WeEofHyqGfNGY5370vY4ByWSvUjhEojsjCSPlqXMNq%2BdGHeCmoXovEqiw9haq2jsK%2BBOAVKi69CG8uDdOObPxz2n6eySKXW4cTA7NotTbWswqLo4CIp67X%2FoGSn2MqWa92kYcyj891a8yJiqaGBAhas5I4O3BBdT0yH6Q%2FzAhZQlcKer43i78LwcGsXuYacPcEayZpniwrD8idhodYR3kOOEP&X-Amz-Signature=59e76f717e05b172f360743f90d1665b465332164de15cca5261fd58d3e6f313&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG364X2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD69DTDRN0nbs2bpBReSbSqb5y23dj9Egf%2B5eORbUx3MgIhAKyMbP1Aur9475bSWUT8B2rnQd8ULk8VWENpKdvsJT1BKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZucFPCjTOoVoc65wq3AOGp1aBXLUwVPeK5OEE4c%2BNqFdIA5mcBxKKkePqsvfSV5%2F5dAfEimYP%2BGoTy3efO5fUJp%2BPxz4zBH%2BTtxABHhAhXD2K3U9BWp%2BcFUfbxhuPZbijzp%2FFWm%2BW1RKxxNRfn5hD2AGDxKQrXjwuxR85ZxlQE76T37L5poEcUCtvVDQxsB1Q7exPhiBogLWi7RBHxCW4w%2BJGbIRCXniBdvRZ%2FRR7zECQlKy1CP8yGzA0%2F%2B2n3t6bCEKLml6MwUGtbjGSVQWo00ksKvR8hx5Z46645PSQZuX9YQUL0y88pN7jtetokHZFKA7cXWC2v%2F3cZrWGfYWAHG2taHt54FfslHLsNvOGwCA1i2OwQDkACP1jCBSBaWYZLWxsPZkkLJqFpAfnjSRPEzXPPiK%2BTPgRZizzqvi%2BxAcY7ci0T4XLibZrY7Ni4FPEHgiQsf8Svgx5SmfIB3K4%2B1FfRPewjPSBbCMmJG%2FpLg39NBV7iYRoImUmPYgLai%2FirfSd5s%2BqjNr65ykcodR1y1eu4JE91qF0fbKYdGvM2sYMjyNk7LuY4SqDTnebE%2FdOZ5fMYwmTvfvsJwJs1Bt5n5aALiokOKh%2B8G%2FhidIbE0%2B2rND40qdG20x2dSQ9u0gMO5Xeo0fa2UlUbjDBltq%2FBjqkAe2WeEofHyqGfNGY5370vY4ByWSvUjhEojsjCSPlqXMNq%2BdGHeCmoXovEqiw9haq2jsK%2BBOAVKi69CG8uDdOObPxz2n6eySKXW4cTA7NotTbWswqLo4CIp67X%2FoGSn2MqWa92kYcyj891a8yJiqaGBAhas5I4O3BBdT0yH6Q%2FzAhZQlcKer43i78LwcGsXuYacPcEayZpniwrD8idhodYR3kOOEP&X-Amz-Signature=19bf8a5587a45ee9030eb3ee1c6f41f45a0179bbe8c6c85f42bba5af03007534&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG364X2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD69DTDRN0nbs2bpBReSbSqb5y23dj9Egf%2B5eORbUx3MgIhAKyMbP1Aur9475bSWUT8B2rnQd8ULk8VWENpKdvsJT1BKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZucFPCjTOoVoc65wq3AOGp1aBXLUwVPeK5OEE4c%2BNqFdIA5mcBxKKkePqsvfSV5%2F5dAfEimYP%2BGoTy3efO5fUJp%2BPxz4zBH%2BTtxABHhAhXD2K3U9BWp%2BcFUfbxhuPZbijzp%2FFWm%2BW1RKxxNRfn5hD2AGDxKQrXjwuxR85ZxlQE76T37L5poEcUCtvVDQxsB1Q7exPhiBogLWi7RBHxCW4w%2BJGbIRCXniBdvRZ%2FRR7zECQlKy1CP8yGzA0%2F%2B2n3t6bCEKLml6MwUGtbjGSVQWo00ksKvR8hx5Z46645PSQZuX9YQUL0y88pN7jtetokHZFKA7cXWC2v%2F3cZrWGfYWAHG2taHt54FfslHLsNvOGwCA1i2OwQDkACP1jCBSBaWYZLWxsPZkkLJqFpAfnjSRPEzXPPiK%2BTPgRZizzqvi%2BxAcY7ci0T4XLibZrY7Ni4FPEHgiQsf8Svgx5SmfIB3K4%2B1FfRPewjPSBbCMmJG%2FpLg39NBV7iYRoImUmPYgLai%2FirfSd5s%2BqjNr65ykcodR1y1eu4JE91qF0fbKYdGvM2sYMjyNk7LuY4SqDTnebE%2FdOZ5fMYwmTvfvsJwJs1Bt5n5aALiokOKh%2B8G%2FhidIbE0%2B2rND40qdG20x2dSQ9u0gMO5Xeo0fa2UlUbjDBltq%2FBjqkAe2WeEofHyqGfNGY5370vY4ByWSvUjhEojsjCSPlqXMNq%2BdGHeCmoXovEqiw9haq2jsK%2BBOAVKi69CG8uDdOObPxz2n6eySKXW4cTA7NotTbWswqLo4CIp67X%2FoGSn2MqWa92kYcyj891a8yJiqaGBAhas5I4O3BBdT0yH6Q%2FzAhZQlcKer43i78LwcGsXuYacPcEayZpniwrD8idhodYR3kOOEP&X-Amz-Signature=f7b448126a66aa24ae9084a1c4db06ba6c10920b90ae92dc50bf36e2c1742cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
