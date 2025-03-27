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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2KOIW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzX6AqdV1nwBvKe0VRCjRdJ6t7Uhd5vlMlZ7M0UUjVAIhAJuJ3H8IpuFcZgy1smc%2B7yGFnSCPk2xvXz5Q88DK8DYLKv8DCE0QABoMNjM3NDIzMTgzODA1IgxRuEdz2ys8aOMuAIYq3AMnrrMoYU3CrG8PzrpTACmm4oFU8mmMuBeWKGM78vXmlwZsEYEGahbdhVlJrO%2FSRQql3MQXDC1wtqpUv%2FZQvbfnKFguPF%2F8MrVMo%2BMljpdpLh4qwRC7Ntz56yajOlUiLuC4M0xdJOrDxItru267um3QkYR59UK3p3l30O05TDlbaQl5Ht57%2F%2Fu8YlpAtG0UJP3ALikBSwSYAvMLwSxJF6Gm9%2FTugTLUnSvCS63jhkdhguahTecdZEskgHWxwmCHIZkIcwUDwbOW7VsSs%2BNeEBdZ9vXBSL%2BdA6HuAIvrqrUJf4plcnEXcsPJ2I3qeIu5grRHIWZZG24l0Ol14eAAiMAHOjJcYMgOqrm1%2BWQrVH0Aw43lJOvERmyjn12OgKEZ1gS%2FZHldNqhDiGft35ogThQ62sP%2BZs3raaZ9KJZD6GbnpBpZngydFa42ZnEMC3HVDsw7KtFyfeW6tCs6TvZrSlSK1kk6pSG8tJKysiVK32z5ks3VoDftR8C%2BAmJTcZjwH9iobrTv5MonRUQirRL%2FBud6Uh%2BcGFnoQsPorepu9bRM4fJaUtZWksdpTv13eoALwcomBqzNIpi9s2pHKvGuqYHS8N4Zt0qzLvejIOu9IZbR20kXsgBBFLQcTnRASjDD3Za%2FBjqkAcJ77MRBO3Py%2F2tKGg0yID4qDn%2BIC82n4oaTWiAduW8idlI4o%2F0RY1PA%2FkZW45p5pPVY%2BsjqNEm70TGab%2FPu9kG3f%2FPOnsOznFQoTMTY1cQfuu9lGbeyQfFcX4ioQeuETEQDp601%2FD27Voq0%2FyscB6StH%2B1UjKQw%2FR3jLgUcicmL4KI%2FKDRiXwNchjyRe3fpBCD6Gm%2FIXBdi1sPBmZLX6h0vkyu3&X-Amz-Signature=23cd43731d80170cffa24cf85600b167bf53759355accb8e2c0e4c679e965dee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2KOIW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzX6AqdV1nwBvKe0VRCjRdJ6t7Uhd5vlMlZ7M0UUjVAIhAJuJ3H8IpuFcZgy1smc%2B7yGFnSCPk2xvXz5Q88DK8DYLKv8DCE0QABoMNjM3NDIzMTgzODA1IgxRuEdz2ys8aOMuAIYq3AMnrrMoYU3CrG8PzrpTACmm4oFU8mmMuBeWKGM78vXmlwZsEYEGahbdhVlJrO%2FSRQql3MQXDC1wtqpUv%2FZQvbfnKFguPF%2F8MrVMo%2BMljpdpLh4qwRC7Ntz56yajOlUiLuC4M0xdJOrDxItru267um3QkYR59UK3p3l30O05TDlbaQl5Ht57%2F%2Fu8YlpAtG0UJP3ALikBSwSYAvMLwSxJF6Gm9%2FTugTLUnSvCS63jhkdhguahTecdZEskgHWxwmCHIZkIcwUDwbOW7VsSs%2BNeEBdZ9vXBSL%2BdA6HuAIvrqrUJf4plcnEXcsPJ2I3qeIu5grRHIWZZG24l0Ol14eAAiMAHOjJcYMgOqrm1%2BWQrVH0Aw43lJOvERmyjn12OgKEZ1gS%2FZHldNqhDiGft35ogThQ62sP%2BZs3raaZ9KJZD6GbnpBpZngydFa42ZnEMC3HVDsw7KtFyfeW6tCs6TvZrSlSK1kk6pSG8tJKysiVK32z5ks3VoDftR8C%2BAmJTcZjwH9iobrTv5MonRUQirRL%2FBud6Uh%2BcGFnoQsPorepu9bRM4fJaUtZWksdpTv13eoALwcomBqzNIpi9s2pHKvGuqYHS8N4Zt0qzLvejIOu9IZbR20kXsgBBFLQcTnRASjDD3Za%2FBjqkAcJ77MRBO3Py%2F2tKGg0yID4qDn%2BIC82n4oaTWiAduW8idlI4o%2F0RY1PA%2FkZW45p5pPVY%2BsjqNEm70TGab%2FPu9kG3f%2FPOnsOznFQoTMTY1cQfuu9lGbeyQfFcX4ioQeuETEQDp601%2FD27Voq0%2FyscB6StH%2B1UjKQw%2FR3jLgUcicmL4KI%2FKDRiXwNchjyRe3fpBCD6Gm%2FIXBdi1sPBmZLX6h0vkyu3&X-Amz-Signature=6e6d37fd341b01670287034a6f860a57e41b727ff6b0832c91e60e3fd734155c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2KOIW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzX6AqdV1nwBvKe0VRCjRdJ6t7Uhd5vlMlZ7M0UUjVAIhAJuJ3H8IpuFcZgy1smc%2B7yGFnSCPk2xvXz5Q88DK8DYLKv8DCE0QABoMNjM3NDIzMTgzODA1IgxRuEdz2ys8aOMuAIYq3AMnrrMoYU3CrG8PzrpTACmm4oFU8mmMuBeWKGM78vXmlwZsEYEGahbdhVlJrO%2FSRQql3MQXDC1wtqpUv%2FZQvbfnKFguPF%2F8MrVMo%2BMljpdpLh4qwRC7Ntz56yajOlUiLuC4M0xdJOrDxItru267um3QkYR59UK3p3l30O05TDlbaQl5Ht57%2F%2Fu8YlpAtG0UJP3ALikBSwSYAvMLwSxJF6Gm9%2FTugTLUnSvCS63jhkdhguahTecdZEskgHWxwmCHIZkIcwUDwbOW7VsSs%2BNeEBdZ9vXBSL%2BdA6HuAIvrqrUJf4plcnEXcsPJ2I3qeIu5grRHIWZZG24l0Ol14eAAiMAHOjJcYMgOqrm1%2BWQrVH0Aw43lJOvERmyjn12OgKEZ1gS%2FZHldNqhDiGft35ogThQ62sP%2BZs3raaZ9KJZD6GbnpBpZngydFa42ZnEMC3HVDsw7KtFyfeW6tCs6TvZrSlSK1kk6pSG8tJKysiVK32z5ks3VoDftR8C%2BAmJTcZjwH9iobrTv5MonRUQirRL%2FBud6Uh%2BcGFnoQsPorepu9bRM4fJaUtZWksdpTv13eoALwcomBqzNIpi9s2pHKvGuqYHS8N4Zt0qzLvejIOu9IZbR20kXsgBBFLQcTnRASjDD3Za%2FBjqkAcJ77MRBO3Py%2F2tKGg0yID4qDn%2BIC82n4oaTWiAduW8idlI4o%2F0RY1PA%2FkZW45p5pPVY%2BsjqNEm70TGab%2FPu9kG3f%2FPOnsOznFQoTMTY1cQfuu9lGbeyQfFcX4ioQeuETEQDp601%2FD27Voq0%2FyscB6StH%2B1UjKQw%2FR3jLgUcicmL4KI%2FKDRiXwNchjyRe3fpBCD6Gm%2FIXBdi1sPBmZLX6h0vkyu3&X-Amz-Signature=f87a67438a1347ff8a62addff58c36938ce17857bdb482122023a8d74902f967&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2KOIW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzX6AqdV1nwBvKe0VRCjRdJ6t7Uhd5vlMlZ7M0UUjVAIhAJuJ3H8IpuFcZgy1smc%2B7yGFnSCPk2xvXz5Q88DK8DYLKv8DCE0QABoMNjM3NDIzMTgzODA1IgxRuEdz2ys8aOMuAIYq3AMnrrMoYU3CrG8PzrpTACmm4oFU8mmMuBeWKGM78vXmlwZsEYEGahbdhVlJrO%2FSRQql3MQXDC1wtqpUv%2FZQvbfnKFguPF%2F8MrVMo%2BMljpdpLh4qwRC7Ntz56yajOlUiLuC4M0xdJOrDxItru267um3QkYR59UK3p3l30O05TDlbaQl5Ht57%2F%2Fu8YlpAtG0UJP3ALikBSwSYAvMLwSxJF6Gm9%2FTugTLUnSvCS63jhkdhguahTecdZEskgHWxwmCHIZkIcwUDwbOW7VsSs%2BNeEBdZ9vXBSL%2BdA6HuAIvrqrUJf4plcnEXcsPJ2I3qeIu5grRHIWZZG24l0Ol14eAAiMAHOjJcYMgOqrm1%2BWQrVH0Aw43lJOvERmyjn12OgKEZ1gS%2FZHldNqhDiGft35ogThQ62sP%2BZs3raaZ9KJZD6GbnpBpZngydFa42ZnEMC3HVDsw7KtFyfeW6tCs6TvZrSlSK1kk6pSG8tJKysiVK32z5ks3VoDftR8C%2BAmJTcZjwH9iobrTv5MonRUQirRL%2FBud6Uh%2BcGFnoQsPorepu9bRM4fJaUtZWksdpTv13eoALwcomBqzNIpi9s2pHKvGuqYHS8N4Zt0qzLvejIOu9IZbR20kXsgBBFLQcTnRASjDD3Za%2FBjqkAcJ77MRBO3Py%2F2tKGg0yID4qDn%2BIC82n4oaTWiAduW8idlI4o%2F0RY1PA%2FkZW45p5pPVY%2BsjqNEm70TGab%2FPu9kG3f%2FPOnsOznFQoTMTY1cQfuu9lGbeyQfFcX4ioQeuETEQDp601%2FD27Voq0%2FyscB6StH%2B1UjKQw%2FR3jLgUcicmL4KI%2FKDRiXwNchjyRe3fpBCD6Gm%2FIXBdi1sPBmZLX6h0vkyu3&X-Amz-Signature=85207f9f1863adacaf104f1c7ecaba3c88646a87b55cc5e720cfc3b1237c56a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2KOIW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzX6AqdV1nwBvKe0VRCjRdJ6t7Uhd5vlMlZ7M0UUjVAIhAJuJ3H8IpuFcZgy1smc%2B7yGFnSCPk2xvXz5Q88DK8DYLKv8DCE0QABoMNjM3NDIzMTgzODA1IgxRuEdz2ys8aOMuAIYq3AMnrrMoYU3CrG8PzrpTACmm4oFU8mmMuBeWKGM78vXmlwZsEYEGahbdhVlJrO%2FSRQql3MQXDC1wtqpUv%2FZQvbfnKFguPF%2F8MrVMo%2BMljpdpLh4qwRC7Ntz56yajOlUiLuC4M0xdJOrDxItru267um3QkYR59UK3p3l30O05TDlbaQl5Ht57%2F%2Fu8YlpAtG0UJP3ALikBSwSYAvMLwSxJF6Gm9%2FTugTLUnSvCS63jhkdhguahTecdZEskgHWxwmCHIZkIcwUDwbOW7VsSs%2BNeEBdZ9vXBSL%2BdA6HuAIvrqrUJf4plcnEXcsPJ2I3qeIu5grRHIWZZG24l0Ol14eAAiMAHOjJcYMgOqrm1%2BWQrVH0Aw43lJOvERmyjn12OgKEZ1gS%2FZHldNqhDiGft35ogThQ62sP%2BZs3raaZ9KJZD6GbnpBpZngydFa42ZnEMC3HVDsw7KtFyfeW6tCs6TvZrSlSK1kk6pSG8tJKysiVK32z5ks3VoDftR8C%2BAmJTcZjwH9iobrTv5MonRUQirRL%2FBud6Uh%2BcGFnoQsPorepu9bRM4fJaUtZWksdpTv13eoALwcomBqzNIpi9s2pHKvGuqYHS8N4Zt0qzLvejIOu9IZbR20kXsgBBFLQcTnRASjDD3Za%2FBjqkAcJ77MRBO3Py%2F2tKGg0yID4qDn%2BIC82n4oaTWiAduW8idlI4o%2F0RY1PA%2FkZW45p5pPVY%2BsjqNEm70TGab%2FPu9kG3f%2FPOnsOznFQoTMTY1cQfuu9lGbeyQfFcX4ioQeuETEQDp601%2FD27Voq0%2FyscB6StH%2B1UjKQw%2FR3jLgUcicmL4KI%2FKDRiXwNchjyRe3fpBCD6Gm%2FIXBdi1sPBmZLX6h0vkyu3&X-Amz-Signature=7efa740b65ef8555ad19758591af8ee1843ade55c073c25034d0478913b6354a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2KOIW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzX6AqdV1nwBvKe0VRCjRdJ6t7Uhd5vlMlZ7M0UUjVAIhAJuJ3H8IpuFcZgy1smc%2B7yGFnSCPk2xvXz5Q88DK8DYLKv8DCE0QABoMNjM3NDIzMTgzODA1IgxRuEdz2ys8aOMuAIYq3AMnrrMoYU3CrG8PzrpTACmm4oFU8mmMuBeWKGM78vXmlwZsEYEGahbdhVlJrO%2FSRQql3MQXDC1wtqpUv%2FZQvbfnKFguPF%2F8MrVMo%2BMljpdpLh4qwRC7Ntz56yajOlUiLuC4M0xdJOrDxItru267um3QkYR59UK3p3l30O05TDlbaQl5Ht57%2F%2Fu8YlpAtG0UJP3ALikBSwSYAvMLwSxJF6Gm9%2FTugTLUnSvCS63jhkdhguahTecdZEskgHWxwmCHIZkIcwUDwbOW7VsSs%2BNeEBdZ9vXBSL%2BdA6HuAIvrqrUJf4plcnEXcsPJ2I3qeIu5grRHIWZZG24l0Ol14eAAiMAHOjJcYMgOqrm1%2BWQrVH0Aw43lJOvERmyjn12OgKEZ1gS%2FZHldNqhDiGft35ogThQ62sP%2BZs3raaZ9KJZD6GbnpBpZngydFa42ZnEMC3HVDsw7KtFyfeW6tCs6TvZrSlSK1kk6pSG8tJKysiVK32z5ks3VoDftR8C%2BAmJTcZjwH9iobrTv5MonRUQirRL%2FBud6Uh%2BcGFnoQsPorepu9bRM4fJaUtZWksdpTv13eoALwcomBqzNIpi9s2pHKvGuqYHS8N4Zt0qzLvejIOu9IZbR20kXsgBBFLQcTnRASjDD3Za%2FBjqkAcJ77MRBO3Py%2F2tKGg0yID4qDn%2BIC82n4oaTWiAduW8idlI4o%2F0RY1PA%2FkZW45p5pPVY%2BsjqNEm70TGab%2FPu9kG3f%2FPOnsOznFQoTMTY1cQfuu9lGbeyQfFcX4ioQeuETEQDp601%2FD27Voq0%2FyscB6StH%2B1UjKQw%2FR3jLgUcicmL4KI%2FKDRiXwNchjyRe3fpBCD6Gm%2FIXBdi1sPBmZLX6h0vkyu3&X-Amz-Signature=5a1fddb9ca2d9c2fd3584d0275e92584530addb5164760a3c305228c857c1d05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2KOIW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzX6AqdV1nwBvKe0VRCjRdJ6t7Uhd5vlMlZ7M0UUjVAIhAJuJ3H8IpuFcZgy1smc%2B7yGFnSCPk2xvXz5Q88DK8DYLKv8DCE0QABoMNjM3NDIzMTgzODA1IgxRuEdz2ys8aOMuAIYq3AMnrrMoYU3CrG8PzrpTACmm4oFU8mmMuBeWKGM78vXmlwZsEYEGahbdhVlJrO%2FSRQql3MQXDC1wtqpUv%2FZQvbfnKFguPF%2F8MrVMo%2BMljpdpLh4qwRC7Ntz56yajOlUiLuC4M0xdJOrDxItru267um3QkYR59UK3p3l30O05TDlbaQl5Ht57%2F%2Fu8YlpAtG0UJP3ALikBSwSYAvMLwSxJF6Gm9%2FTugTLUnSvCS63jhkdhguahTecdZEskgHWxwmCHIZkIcwUDwbOW7VsSs%2BNeEBdZ9vXBSL%2BdA6HuAIvrqrUJf4plcnEXcsPJ2I3qeIu5grRHIWZZG24l0Ol14eAAiMAHOjJcYMgOqrm1%2BWQrVH0Aw43lJOvERmyjn12OgKEZ1gS%2FZHldNqhDiGft35ogThQ62sP%2BZs3raaZ9KJZD6GbnpBpZngydFa42ZnEMC3HVDsw7KtFyfeW6tCs6TvZrSlSK1kk6pSG8tJKysiVK32z5ks3VoDftR8C%2BAmJTcZjwH9iobrTv5MonRUQirRL%2FBud6Uh%2BcGFnoQsPorepu9bRM4fJaUtZWksdpTv13eoALwcomBqzNIpi9s2pHKvGuqYHS8N4Zt0qzLvejIOu9IZbR20kXsgBBFLQcTnRASjDD3Za%2FBjqkAcJ77MRBO3Py%2F2tKGg0yID4qDn%2BIC82n4oaTWiAduW8idlI4o%2F0RY1PA%2FkZW45p5pPVY%2BsjqNEm70TGab%2FPu9kG3f%2FPOnsOznFQoTMTY1cQfuu9lGbeyQfFcX4ioQeuETEQDp601%2FD27Voq0%2FyscB6StH%2B1UjKQw%2FR3jLgUcicmL4KI%2FKDRiXwNchjyRe3fpBCD6Gm%2FIXBdi1sPBmZLX6h0vkyu3&X-Amz-Signature=7f8eed76cecc684ae768bc6ecb47175edb91e601be298f18cc87c2c51f83320b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2KOIW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzX6AqdV1nwBvKe0VRCjRdJ6t7Uhd5vlMlZ7M0UUjVAIhAJuJ3H8IpuFcZgy1smc%2B7yGFnSCPk2xvXz5Q88DK8DYLKv8DCE0QABoMNjM3NDIzMTgzODA1IgxRuEdz2ys8aOMuAIYq3AMnrrMoYU3CrG8PzrpTACmm4oFU8mmMuBeWKGM78vXmlwZsEYEGahbdhVlJrO%2FSRQql3MQXDC1wtqpUv%2FZQvbfnKFguPF%2F8MrVMo%2BMljpdpLh4qwRC7Ntz56yajOlUiLuC4M0xdJOrDxItru267um3QkYR59UK3p3l30O05TDlbaQl5Ht57%2F%2Fu8YlpAtG0UJP3ALikBSwSYAvMLwSxJF6Gm9%2FTugTLUnSvCS63jhkdhguahTecdZEskgHWxwmCHIZkIcwUDwbOW7VsSs%2BNeEBdZ9vXBSL%2BdA6HuAIvrqrUJf4plcnEXcsPJ2I3qeIu5grRHIWZZG24l0Ol14eAAiMAHOjJcYMgOqrm1%2BWQrVH0Aw43lJOvERmyjn12OgKEZ1gS%2FZHldNqhDiGft35ogThQ62sP%2BZs3raaZ9KJZD6GbnpBpZngydFa42ZnEMC3HVDsw7KtFyfeW6tCs6TvZrSlSK1kk6pSG8tJKysiVK32z5ks3VoDftR8C%2BAmJTcZjwH9iobrTv5MonRUQirRL%2FBud6Uh%2BcGFnoQsPorepu9bRM4fJaUtZWksdpTv13eoALwcomBqzNIpi9s2pHKvGuqYHS8N4Zt0qzLvejIOu9IZbR20kXsgBBFLQcTnRASjDD3Za%2FBjqkAcJ77MRBO3Py%2F2tKGg0yID4qDn%2BIC82n4oaTWiAduW8idlI4o%2F0RY1PA%2FkZW45p5pPVY%2BsjqNEm70TGab%2FPu9kG3f%2FPOnsOznFQoTMTY1cQfuu9lGbeyQfFcX4ioQeuETEQDp601%2FD27Voq0%2FyscB6StH%2B1UjKQw%2FR3jLgUcicmL4KI%2FKDRiXwNchjyRe3fpBCD6Gm%2FIXBdi1sPBmZLX6h0vkyu3&X-Amz-Signature=fc6ebbf6c326a7bbbce62e28cc46e583210a3bad23b23c0a65fc0091fcae33c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
