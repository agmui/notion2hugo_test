---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4NXGS4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGAGw1qhB%2FOh3T8h%2F3FrxyUlFG0EAwwk6187WK4HcMmeAiBhKa3Vtt0u%2BDD5FMgcisSAst7hjUD6Ce8ev7fTS22uVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmuPtVml44GxMbW%2F9KtwD%2FkDwbUv%2FhekdjGIUgDP8%2F2x39sL8U1ZCarg2rZKacBftwElAG3ryLw0zjA%2BtvHF%2BVeVzBWH9JgZPtP5O4l%2FjHmOqYqXkrZUDMuRJKs74PNQC5mD4%2Flbh2U48cMa0XrDHolXgDEvoN2QhBVn9P5qABeWTAzHZOo8b0F54RTOn8dy%2Fgz5W3u9Sv9B84ZBR56jMmWKz2S04s%2BvbJwuUg3S%2FHeuLfb8OSuOCA84CBRlPdGPS%2BPuWbCMYDYBLR5oEf2sU8SLAFUQ6T9J5lBmR7aCnUkhqGaZ0TJBiZgEW0tHQwtigqLTECGHgykrNzihzeTQcAeaNzdkMGpOoEFLBOlSCAsDlgtwDKaEuEGUHph%2FmrD1r%2BG3gGaMYMh4CL%2BBIEiG5n8onM4Vn%2Bm%2FZ7kzSt08wz8WzFxhnuN9Kj6qKxYxv5WZ4OMz3E7htCZ04qnG7fuTZgIrWzrMXCwu2oFr%2FsoHTUOHs1%2BGV8Pj0Vk2BluV0I51zcBlpmodOXu82lWeP7rTZO6LLlVeUe%2BLjyBCTYNssXDEci1C6uDxpaBxHc2O9epJmLH%2B3lPLbf%2FuqlsNx4ExEgfqG9ILEU50kk61KZuuRi4LS8mtJms0H3xhZPY%2Bz1rrxMjdRb6SjLe2ON8QwpM%2FMxAY6pgE6Vvd7Ldx15VK2ULDrcErr9hq35wwwYt%2FtvJyyCEgYmR63s2qt43qgNuVutQGhXPrOVFHk1%2BcCEncqWRJodHIssXbQM%2B2AbMHLNCmsYo%2FJCeKrwcDNGMIwUsQt%2FBlMD610aOGb1qMeNsQR9q56SciU8bUhRmsKTAKBmahIJx9c77foOcTTPanV2%2B7wpq8I9DFd%2F6OhBYpVMZ8q5Xk1TZc3%2F%2BFuPQLf&X-Amz-Signature=fb7148e51891e0bfdeb65c639e0491e2aa219e8881e5b5c8acc5883708bc864b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4NXGS4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGAGw1qhB%2FOh3T8h%2F3FrxyUlFG0EAwwk6187WK4HcMmeAiBhKa3Vtt0u%2BDD5FMgcisSAst7hjUD6Ce8ev7fTS22uVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmuPtVml44GxMbW%2F9KtwD%2FkDwbUv%2FhekdjGIUgDP8%2F2x39sL8U1ZCarg2rZKacBftwElAG3ryLw0zjA%2BtvHF%2BVeVzBWH9JgZPtP5O4l%2FjHmOqYqXkrZUDMuRJKs74PNQC5mD4%2Flbh2U48cMa0XrDHolXgDEvoN2QhBVn9P5qABeWTAzHZOo8b0F54RTOn8dy%2Fgz5W3u9Sv9B84ZBR56jMmWKz2S04s%2BvbJwuUg3S%2FHeuLfb8OSuOCA84CBRlPdGPS%2BPuWbCMYDYBLR5oEf2sU8SLAFUQ6T9J5lBmR7aCnUkhqGaZ0TJBiZgEW0tHQwtigqLTECGHgykrNzihzeTQcAeaNzdkMGpOoEFLBOlSCAsDlgtwDKaEuEGUHph%2FmrD1r%2BG3gGaMYMh4CL%2BBIEiG5n8onM4Vn%2Bm%2FZ7kzSt08wz8WzFxhnuN9Kj6qKxYxv5WZ4OMz3E7htCZ04qnG7fuTZgIrWzrMXCwu2oFr%2FsoHTUOHs1%2BGV8Pj0Vk2BluV0I51zcBlpmodOXu82lWeP7rTZO6LLlVeUe%2BLjyBCTYNssXDEci1C6uDxpaBxHc2O9epJmLH%2B3lPLbf%2FuqlsNx4ExEgfqG9ILEU50kk61KZuuRi4LS8mtJms0H3xhZPY%2Bz1rrxMjdRb6SjLe2ON8QwpM%2FMxAY6pgE6Vvd7Ldx15VK2ULDrcErr9hq35wwwYt%2FtvJyyCEgYmR63s2qt43qgNuVutQGhXPrOVFHk1%2BcCEncqWRJodHIssXbQM%2B2AbMHLNCmsYo%2FJCeKrwcDNGMIwUsQt%2FBlMD610aOGb1qMeNsQR9q56SciU8bUhRmsKTAKBmahIJx9c77foOcTTPanV2%2B7wpq8I9DFd%2F6OhBYpVMZ8q5Xk1TZc3%2F%2BFuPQLf&X-Amz-Signature=e7bdf177759848d600fd9bdc782dcc80b7d5dda002c454e97b060f2d961447f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4NXGS4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGAGw1qhB%2FOh3T8h%2F3FrxyUlFG0EAwwk6187WK4HcMmeAiBhKa3Vtt0u%2BDD5FMgcisSAst7hjUD6Ce8ev7fTS22uVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmuPtVml44GxMbW%2F9KtwD%2FkDwbUv%2FhekdjGIUgDP8%2F2x39sL8U1ZCarg2rZKacBftwElAG3ryLw0zjA%2BtvHF%2BVeVzBWH9JgZPtP5O4l%2FjHmOqYqXkrZUDMuRJKs74PNQC5mD4%2Flbh2U48cMa0XrDHolXgDEvoN2QhBVn9P5qABeWTAzHZOo8b0F54RTOn8dy%2Fgz5W3u9Sv9B84ZBR56jMmWKz2S04s%2BvbJwuUg3S%2FHeuLfb8OSuOCA84CBRlPdGPS%2BPuWbCMYDYBLR5oEf2sU8SLAFUQ6T9J5lBmR7aCnUkhqGaZ0TJBiZgEW0tHQwtigqLTECGHgykrNzihzeTQcAeaNzdkMGpOoEFLBOlSCAsDlgtwDKaEuEGUHph%2FmrD1r%2BG3gGaMYMh4CL%2BBIEiG5n8onM4Vn%2Bm%2FZ7kzSt08wz8WzFxhnuN9Kj6qKxYxv5WZ4OMz3E7htCZ04qnG7fuTZgIrWzrMXCwu2oFr%2FsoHTUOHs1%2BGV8Pj0Vk2BluV0I51zcBlpmodOXu82lWeP7rTZO6LLlVeUe%2BLjyBCTYNssXDEci1C6uDxpaBxHc2O9epJmLH%2B3lPLbf%2FuqlsNx4ExEgfqG9ILEU50kk61KZuuRi4LS8mtJms0H3xhZPY%2Bz1rrxMjdRb6SjLe2ON8QwpM%2FMxAY6pgE6Vvd7Ldx15VK2ULDrcErr9hq35wwwYt%2FtvJyyCEgYmR63s2qt43qgNuVutQGhXPrOVFHk1%2BcCEncqWRJodHIssXbQM%2B2AbMHLNCmsYo%2FJCeKrwcDNGMIwUsQt%2FBlMD610aOGb1qMeNsQR9q56SciU8bUhRmsKTAKBmahIJx9c77foOcTTPanV2%2B7wpq8I9DFd%2F6OhBYpVMZ8q5Xk1TZc3%2F%2BFuPQLf&X-Amz-Signature=7fe6267ca5ed46e19683810b09ba440ecc9c1c2803cd42ee8088d3381e08095b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4NXGS4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGAGw1qhB%2FOh3T8h%2F3FrxyUlFG0EAwwk6187WK4HcMmeAiBhKa3Vtt0u%2BDD5FMgcisSAst7hjUD6Ce8ev7fTS22uVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmuPtVml44GxMbW%2F9KtwD%2FkDwbUv%2FhekdjGIUgDP8%2F2x39sL8U1ZCarg2rZKacBftwElAG3ryLw0zjA%2BtvHF%2BVeVzBWH9JgZPtP5O4l%2FjHmOqYqXkrZUDMuRJKs74PNQC5mD4%2Flbh2U48cMa0XrDHolXgDEvoN2QhBVn9P5qABeWTAzHZOo8b0F54RTOn8dy%2Fgz5W3u9Sv9B84ZBR56jMmWKz2S04s%2BvbJwuUg3S%2FHeuLfb8OSuOCA84CBRlPdGPS%2BPuWbCMYDYBLR5oEf2sU8SLAFUQ6T9J5lBmR7aCnUkhqGaZ0TJBiZgEW0tHQwtigqLTECGHgykrNzihzeTQcAeaNzdkMGpOoEFLBOlSCAsDlgtwDKaEuEGUHph%2FmrD1r%2BG3gGaMYMh4CL%2BBIEiG5n8onM4Vn%2Bm%2FZ7kzSt08wz8WzFxhnuN9Kj6qKxYxv5WZ4OMz3E7htCZ04qnG7fuTZgIrWzrMXCwu2oFr%2FsoHTUOHs1%2BGV8Pj0Vk2BluV0I51zcBlpmodOXu82lWeP7rTZO6LLlVeUe%2BLjyBCTYNssXDEci1C6uDxpaBxHc2O9epJmLH%2B3lPLbf%2FuqlsNx4ExEgfqG9ILEU50kk61KZuuRi4LS8mtJms0H3xhZPY%2Bz1rrxMjdRb6SjLe2ON8QwpM%2FMxAY6pgE6Vvd7Ldx15VK2ULDrcErr9hq35wwwYt%2FtvJyyCEgYmR63s2qt43qgNuVutQGhXPrOVFHk1%2BcCEncqWRJodHIssXbQM%2B2AbMHLNCmsYo%2FJCeKrwcDNGMIwUsQt%2FBlMD610aOGb1qMeNsQR9q56SciU8bUhRmsKTAKBmahIJx9c77foOcTTPanV2%2B7wpq8I9DFd%2F6OhBYpVMZ8q5Xk1TZc3%2F%2BFuPQLf&X-Amz-Signature=196c463ef4c55c0825ac874b72bb25f6cfdfdf1fbe84bd0e0a762c9bf8cbffc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4NXGS4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGAGw1qhB%2FOh3T8h%2F3FrxyUlFG0EAwwk6187WK4HcMmeAiBhKa3Vtt0u%2BDD5FMgcisSAst7hjUD6Ce8ev7fTS22uVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmuPtVml44GxMbW%2F9KtwD%2FkDwbUv%2FhekdjGIUgDP8%2F2x39sL8U1ZCarg2rZKacBftwElAG3ryLw0zjA%2BtvHF%2BVeVzBWH9JgZPtP5O4l%2FjHmOqYqXkrZUDMuRJKs74PNQC5mD4%2Flbh2U48cMa0XrDHolXgDEvoN2QhBVn9P5qABeWTAzHZOo8b0F54RTOn8dy%2Fgz5W3u9Sv9B84ZBR56jMmWKz2S04s%2BvbJwuUg3S%2FHeuLfb8OSuOCA84CBRlPdGPS%2BPuWbCMYDYBLR5oEf2sU8SLAFUQ6T9J5lBmR7aCnUkhqGaZ0TJBiZgEW0tHQwtigqLTECGHgykrNzihzeTQcAeaNzdkMGpOoEFLBOlSCAsDlgtwDKaEuEGUHph%2FmrD1r%2BG3gGaMYMh4CL%2BBIEiG5n8onM4Vn%2Bm%2FZ7kzSt08wz8WzFxhnuN9Kj6qKxYxv5WZ4OMz3E7htCZ04qnG7fuTZgIrWzrMXCwu2oFr%2FsoHTUOHs1%2BGV8Pj0Vk2BluV0I51zcBlpmodOXu82lWeP7rTZO6LLlVeUe%2BLjyBCTYNssXDEci1C6uDxpaBxHc2O9epJmLH%2B3lPLbf%2FuqlsNx4ExEgfqG9ILEU50kk61KZuuRi4LS8mtJms0H3xhZPY%2Bz1rrxMjdRb6SjLe2ON8QwpM%2FMxAY6pgE6Vvd7Ldx15VK2ULDrcErr9hq35wwwYt%2FtvJyyCEgYmR63s2qt43qgNuVutQGhXPrOVFHk1%2BcCEncqWRJodHIssXbQM%2B2AbMHLNCmsYo%2FJCeKrwcDNGMIwUsQt%2FBlMD610aOGb1qMeNsQR9q56SciU8bUhRmsKTAKBmahIJx9c77foOcTTPanV2%2B7wpq8I9DFd%2F6OhBYpVMZ8q5Xk1TZc3%2F%2BFuPQLf&X-Amz-Signature=64012feaa3c342468ddeeeb52b11ad48923d64ce18d90d3aa3279c3397c3364b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4NXGS4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGAGw1qhB%2FOh3T8h%2F3FrxyUlFG0EAwwk6187WK4HcMmeAiBhKa3Vtt0u%2BDD5FMgcisSAst7hjUD6Ce8ev7fTS22uVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmuPtVml44GxMbW%2F9KtwD%2FkDwbUv%2FhekdjGIUgDP8%2F2x39sL8U1ZCarg2rZKacBftwElAG3ryLw0zjA%2BtvHF%2BVeVzBWH9JgZPtP5O4l%2FjHmOqYqXkrZUDMuRJKs74PNQC5mD4%2Flbh2U48cMa0XrDHolXgDEvoN2QhBVn9P5qABeWTAzHZOo8b0F54RTOn8dy%2Fgz5W3u9Sv9B84ZBR56jMmWKz2S04s%2BvbJwuUg3S%2FHeuLfb8OSuOCA84CBRlPdGPS%2BPuWbCMYDYBLR5oEf2sU8SLAFUQ6T9J5lBmR7aCnUkhqGaZ0TJBiZgEW0tHQwtigqLTECGHgykrNzihzeTQcAeaNzdkMGpOoEFLBOlSCAsDlgtwDKaEuEGUHph%2FmrD1r%2BG3gGaMYMh4CL%2BBIEiG5n8onM4Vn%2Bm%2FZ7kzSt08wz8WzFxhnuN9Kj6qKxYxv5WZ4OMz3E7htCZ04qnG7fuTZgIrWzrMXCwu2oFr%2FsoHTUOHs1%2BGV8Pj0Vk2BluV0I51zcBlpmodOXu82lWeP7rTZO6LLlVeUe%2BLjyBCTYNssXDEci1C6uDxpaBxHc2O9epJmLH%2B3lPLbf%2FuqlsNx4ExEgfqG9ILEU50kk61KZuuRi4LS8mtJms0H3xhZPY%2Bz1rrxMjdRb6SjLe2ON8QwpM%2FMxAY6pgE6Vvd7Ldx15VK2ULDrcErr9hq35wwwYt%2FtvJyyCEgYmR63s2qt43qgNuVutQGhXPrOVFHk1%2BcCEncqWRJodHIssXbQM%2B2AbMHLNCmsYo%2FJCeKrwcDNGMIwUsQt%2FBlMD610aOGb1qMeNsQR9q56SciU8bUhRmsKTAKBmahIJx9c77foOcTTPanV2%2B7wpq8I9DFd%2F6OhBYpVMZ8q5Xk1TZc3%2F%2BFuPQLf&X-Amz-Signature=3bdef5d1ef16320efc06298fe62a7734520fde6ec602a9ad3e49001f322f4d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4NXGS4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGAGw1qhB%2FOh3T8h%2F3FrxyUlFG0EAwwk6187WK4HcMmeAiBhKa3Vtt0u%2BDD5FMgcisSAst7hjUD6Ce8ev7fTS22uVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmuPtVml44GxMbW%2F9KtwD%2FkDwbUv%2FhekdjGIUgDP8%2F2x39sL8U1ZCarg2rZKacBftwElAG3ryLw0zjA%2BtvHF%2BVeVzBWH9JgZPtP5O4l%2FjHmOqYqXkrZUDMuRJKs74PNQC5mD4%2Flbh2U48cMa0XrDHolXgDEvoN2QhBVn9P5qABeWTAzHZOo8b0F54RTOn8dy%2Fgz5W3u9Sv9B84ZBR56jMmWKz2S04s%2BvbJwuUg3S%2FHeuLfb8OSuOCA84CBRlPdGPS%2BPuWbCMYDYBLR5oEf2sU8SLAFUQ6T9J5lBmR7aCnUkhqGaZ0TJBiZgEW0tHQwtigqLTECGHgykrNzihzeTQcAeaNzdkMGpOoEFLBOlSCAsDlgtwDKaEuEGUHph%2FmrD1r%2BG3gGaMYMh4CL%2BBIEiG5n8onM4Vn%2Bm%2FZ7kzSt08wz8WzFxhnuN9Kj6qKxYxv5WZ4OMz3E7htCZ04qnG7fuTZgIrWzrMXCwu2oFr%2FsoHTUOHs1%2BGV8Pj0Vk2BluV0I51zcBlpmodOXu82lWeP7rTZO6LLlVeUe%2BLjyBCTYNssXDEci1C6uDxpaBxHc2O9epJmLH%2B3lPLbf%2FuqlsNx4ExEgfqG9ILEU50kk61KZuuRi4LS8mtJms0H3xhZPY%2Bz1rrxMjdRb6SjLe2ON8QwpM%2FMxAY6pgE6Vvd7Ldx15VK2ULDrcErr9hq35wwwYt%2FtvJyyCEgYmR63s2qt43qgNuVutQGhXPrOVFHk1%2BcCEncqWRJodHIssXbQM%2B2AbMHLNCmsYo%2FJCeKrwcDNGMIwUsQt%2FBlMD610aOGb1qMeNsQR9q56SciU8bUhRmsKTAKBmahIJx9c77foOcTTPanV2%2B7wpq8I9DFd%2F6OhBYpVMZ8q5Xk1TZc3%2F%2BFuPQLf&X-Amz-Signature=aa6685f7cedece6eef0ef6183da5a19cc81218cdc8a6f9ba149d7268740c3f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4NXGS4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGAGw1qhB%2FOh3T8h%2F3FrxyUlFG0EAwwk6187WK4HcMmeAiBhKa3Vtt0u%2BDD5FMgcisSAst7hjUD6Ce8ev7fTS22uVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmuPtVml44GxMbW%2F9KtwD%2FkDwbUv%2FhekdjGIUgDP8%2F2x39sL8U1ZCarg2rZKacBftwElAG3ryLw0zjA%2BtvHF%2BVeVzBWH9JgZPtP5O4l%2FjHmOqYqXkrZUDMuRJKs74PNQC5mD4%2Flbh2U48cMa0XrDHolXgDEvoN2QhBVn9P5qABeWTAzHZOo8b0F54RTOn8dy%2Fgz5W3u9Sv9B84ZBR56jMmWKz2S04s%2BvbJwuUg3S%2FHeuLfb8OSuOCA84CBRlPdGPS%2BPuWbCMYDYBLR5oEf2sU8SLAFUQ6T9J5lBmR7aCnUkhqGaZ0TJBiZgEW0tHQwtigqLTECGHgykrNzihzeTQcAeaNzdkMGpOoEFLBOlSCAsDlgtwDKaEuEGUHph%2FmrD1r%2BG3gGaMYMh4CL%2BBIEiG5n8onM4Vn%2Bm%2FZ7kzSt08wz8WzFxhnuN9Kj6qKxYxv5WZ4OMz3E7htCZ04qnG7fuTZgIrWzrMXCwu2oFr%2FsoHTUOHs1%2BGV8Pj0Vk2BluV0I51zcBlpmodOXu82lWeP7rTZO6LLlVeUe%2BLjyBCTYNssXDEci1C6uDxpaBxHc2O9epJmLH%2B3lPLbf%2FuqlsNx4ExEgfqG9ILEU50kk61KZuuRi4LS8mtJms0H3xhZPY%2Bz1rrxMjdRb6SjLe2ON8QwpM%2FMxAY6pgE6Vvd7Ldx15VK2ULDrcErr9hq35wwwYt%2FtvJyyCEgYmR63s2qt43qgNuVutQGhXPrOVFHk1%2BcCEncqWRJodHIssXbQM%2B2AbMHLNCmsYo%2FJCeKrwcDNGMIwUsQt%2FBlMD610aOGb1qMeNsQR9q56SciU8bUhRmsKTAKBmahIJx9c77foOcTTPanV2%2B7wpq8I9DFd%2F6OhBYpVMZ8q5Xk1TZc3%2F%2BFuPQLf&X-Amz-Signature=46e2abe763979b7f8c0739e3a6dcb06e095153486ade3c228c18e59736627a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
