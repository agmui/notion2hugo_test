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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWK3HDS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwm%2FTleC5c%2BvK%2F5QNsMg2Ufnnq%2Bv96r2v5kWEWWsWvjgIhALCAtJUp1%2F%2FMVikApHscE5h3AELAj58yvISvlGIKgGv6KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhB8XyjUF0HYXF8HUq3APaTwIKeh3cF3nsYDFB6zj54Xtw81A4PRFD2N%2Fui2t16qZ1n4DayoaeQ%2Fx%2FN%2F7I38RvyeKb3JjULLFiWiDUyTakXF32UY8KJHOCNXY6VaeQC8oPO4sgbAVSsbm5whkz90nooWiMl0ggrOIEpAyG0MJU4TPpWh4IgJoRGeSgxDBWTBW6NK3iTlIlWnxiQoADMVrbsvUobxqRhTQGOFg7aFXmi%2Bvz%2BlLwTUGqnDZL7uAIHhBVwg5bAD5gEqy673T1oRgcjB3%2FYGFbV%2FzUTnhoRB0Hs4VY42BDoA%2BZESz16MIrL8g1RktDsXYvZyTH844p0rWH2dbU6UmFOB50qHV1l5xhBqQvGaRkJVvFSpAYvUDPnMN4JJsJ08drPpUMfbDmkjNvKTCerJlPDlFUPCuNvdPkqy0vU%2Bg4ft6ebGEJOQptFeeODm7TKVcnv4FpLa8NBOE2jsz10bn3MI77PEOORTmPyMfMdpu8gv16z9G741LBIbWII%2BHaezr5zrQnxah%2FAfqyEi%2FUYB3SaEU63gIqd%2BMB7pdjz8l%2B2HI1mx5BqMUcbmKdWxOio0FNiSBnrZJ%2FdxjBDmqwNkVAn86tBL2EMgnWKxkcZ6uagtjz3um%2F4jHj%2B06afbNv8%2FpSQTsQATDw1My%2BBjqkAZNa6FLctLxsvS8mMvTjRaotBsAyqx4lTOtKtLSlKrfUXInb0MrMmyDyuspoZgy9Pt90Ux1mxasthQg5X9YHZBY14pwJOYDvKAHAhXnQv6UfgKj04C71CRZwkw2eQfIHoHQ8n8cUniSmkbaDCLwKwZrjzetArbLHUP0XR1pZT2wOw7P339bfvAwFx8WeRcVYEm%2FUnALbBEgUwB%2FL7zKBn7iVKtaQ&X-Amz-Signature=851944ba174824b0dab5b9e0c4e82de5ba21dfffdaf9c40514d1b216d8dd5aff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWK3HDS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwm%2FTleC5c%2BvK%2F5QNsMg2Ufnnq%2Bv96r2v5kWEWWsWvjgIhALCAtJUp1%2F%2FMVikApHscE5h3AELAj58yvISvlGIKgGv6KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhB8XyjUF0HYXF8HUq3APaTwIKeh3cF3nsYDFB6zj54Xtw81A4PRFD2N%2Fui2t16qZ1n4DayoaeQ%2Fx%2FN%2F7I38RvyeKb3JjULLFiWiDUyTakXF32UY8KJHOCNXY6VaeQC8oPO4sgbAVSsbm5whkz90nooWiMl0ggrOIEpAyG0MJU4TPpWh4IgJoRGeSgxDBWTBW6NK3iTlIlWnxiQoADMVrbsvUobxqRhTQGOFg7aFXmi%2Bvz%2BlLwTUGqnDZL7uAIHhBVwg5bAD5gEqy673T1oRgcjB3%2FYGFbV%2FzUTnhoRB0Hs4VY42BDoA%2BZESz16MIrL8g1RktDsXYvZyTH844p0rWH2dbU6UmFOB50qHV1l5xhBqQvGaRkJVvFSpAYvUDPnMN4JJsJ08drPpUMfbDmkjNvKTCerJlPDlFUPCuNvdPkqy0vU%2Bg4ft6ebGEJOQptFeeODm7TKVcnv4FpLa8NBOE2jsz10bn3MI77PEOORTmPyMfMdpu8gv16z9G741LBIbWII%2BHaezr5zrQnxah%2FAfqyEi%2FUYB3SaEU63gIqd%2BMB7pdjz8l%2B2HI1mx5BqMUcbmKdWxOio0FNiSBnrZJ%2FdxjBDmqwNkVAn86tBL2EMgnWKxkcZ6uagtjz3um%2F4jHj%2B06afbNv8%2FpSQTsQATDw1My%2BBjqkAZNa6FLctLxsvS8mMvTjRaotBsAyqx4lTOtKtLSlKrfUXInb0MrMmyDyuspoZgy9Pt90Ux1mxasthQg5X9YHZBY14pwJOYDvKAHAhXnQv6UfgKj04C71CRZwkw2eQfIHoHQ8n8cUniSmkbaDCLwKwZrjzetArbLHUP0XR1pZT2wOw7P339bfvAwFx8WeRcVYEm%2FUnALbBEgUwB%2FL7zKBn7iVKtaQ&X-Amz-Signature=0ffb000c8506d4b6e6ac09b1890b9bbbb6ad3839df6eb2e2dee7b2f7186b95cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWK3HDS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwm%2FTleC5c%2BvK%2F5QNsMg2Ufnnq%2Bv96r2v5kWEWWsWvjgIhALCAtJUp1%2F%2FMVikApHscE5h3AELAj58yvISvlGIKgGv6KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhB8XyjUF0HYXF8HUq3APaTwIKeh3cF3nsYDFB6zj54Xtw81A4PRFD2N%2Fui2t16qZ1n4DayoaeQ%2Fx%2FN%2F7I38RvyeKb3JjULLFiWiDUyTakXF32UY8KJHOCNXY6VaeQC8oPO4sgbAVSsbm5whkz90nooWiMl0ggrOIEpAyG0MJU4TPpWh4IgJoRGeSgxDBWTBW6NK3iTlIlWnxiQoADMVrbsvUobxqRhTQGOFg7aFXmi%2Bvz%2BlLwTUGqnDZL7uAIHhBVwg5bAD5gEqy673T1oRgcjB3%2FYGFbV%2FzUTnhoRB0Hs4VY42BDoA%2BZESz16MIrL8g1RktDsXYvZyTH844p0rWH2dbU6UmFOB50qHV1l5xhBqQvGaRkJVvFSpAYvUDPnMN4JJsJ08drPpUMfbDmkjNvKTCerJlPDlFUPCuNvdPkqy0vU%2Bg4ft6ebGEJOQptFeeODm7TKVcnv4FpLa8NBOE2jsz10bn3MI77PEOORTmPyMfMdpu8gv16z9G741LBIbWII%2BHaezr5zrQnxah%2FAfqyEi%2FUYB3SaEU63gIqd%2BMB7pdjz8l%2B2HI1mx5BqMUcbmKdWxOio0FNiSBnrZJ%2FdxjBDmqwNkVAn86tBL2EMgnWKxkcZ6uagtjz3um%2F4jHj%2B06afbNv8%2FpSQTsQATDw1My%2BBjqkAZNa6FLctLxsvS8mMvTjRaotBsAyqx4lTOtKtLSlKrfUXInb0MrMmyDyuspoZgy9Pt90Ux1mxasthQg5X9YHZBY14pwJOYDvKAHAhXnQv6UfgKj04C71CRZwkw2eQfIHoHQ8n8cUniSmkbaDCLwKwZrjzetArbLHUP0XR1pZT2wOw7P339bfvAwFx8WeRcVYEm%2FUnALbBEgUwB%2FL7zKBn7iVKtaQ&X-Amz-Signature=47603ec8d23326f9637bf727bb3871f748b37470abdea967127c499b40e67d36&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWK3HDS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwm%2FTleC5c%2BvK%2F5QNsMg2Ufnnq%2Bv96r2v5kWEWWsWvjgIhALCAtJUp1%2F%2FMVikApHscE5h3AELAj58yvISvlGIKgGv6KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhB8XyjUF0HYXF8HUq3APaTwIKeh3cF3nsYDFB6zj54Xtw81A4PRFD2N%2Fui2t16qZ1n4DayoaeQ%2Fx%2FN%2F7I38RvyeKb3JjULLFiWiDUyTakXF32UY8KJHOCNXY6VaeQC8oPO4sgbAVSsbm5whkz90nooWiMl0ggrOIEpAyG0MJU4TPpWh4IgJoRGeSgxDBWTBW6NK3iTlIlWnxiQoADMVrbsvUobxqRhTQGOFg7aFXmi%2Bvz%2BlLwTUGqnDZL7uAIHhBVwg5bAD5gEqy673T1oRgcjB3%2FYGFbV%2FzUTnhoRB0Hs4VY42BDoA%2BZESz16MIrL8g1RktDsXYvZyTH844p0rWH2dbU6UmFOB50qHV1l5xhBqQvGaRkJVvFSpAYvUDPnMN4JJsJ08drPpUMfbDmkjNvKTCerJlPDlFUPCuNvdPkqy0vU%2Bg4ft6ebGEJOQptFeeODm7TKVcnv4FpLa8NBOE2jsz10bn3MI77PEOORTmPyMfMdpu8gv16z9G741LBIbWII%2BHaezr5zrQnxah%2FAfqyEi%2FUYB3SaEU63gIqd%2BMB7pdjz8l%2B2HI1mx5BqMUcbmKdWxOio0FNiSBnrZJ%2FdxjBDmqwNkVAn86tBL2EMgnWKxkcZ6uagtjz3um%2F4jHj%2B06afbNv8%2FpSQTsQATDw1My%2BBjqkAZNa6FLctLxsvS8mMvTjRaotBsAyqx4lTOtKtLSlKrfUXInb0MrMmyDyuspoZgy9Pt90Ux1mxasthQg5X9YHZBY14pwJOYDvKAHAhXnQv6UfgKj04C71CRZwkw2eQfIHoHQ8n8cUniSmkbaDCLwKwZrjzetArbLHUP0XR1pZT2wOw7P339bfvAwFx8WeRcVYEm%2FUnALbBEgUwB%2FL7zKBn7iVKtaQ&X-Amz-Signature=43831cd5d9011a2966ec6e5cc9f03ec81354ac46a61caa6fa80ad1ed2f08fced&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWK3HDS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwm%2FTleC5c%2BvK%2F5QNsMg2Ufnnq%2Bv96r2v5kWEWWsWvjgIhALCAtJUp1%2F%2FMVikApHscE5h3AELAj58yvISvlGIKgGv6KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhB8XyjUF0HYXF8HUq3APaTwIKeh3cF3nsYDFB6zj54Xtw81A4PRFD2N%2Fui2t16qZ1n4DayoaeQ%2Fx%2FN%2F7I38RvyeKb3JjULLFiWiDUyTakXF32UY8KJHOCNXY6VaeQC8oPO4sgbAVSsbm5whkz90nooWiMl0ggrOIEpAyG0MJU4TPpWh4IgJoRGeSgxDBWTBW6NK3iTlIlWnxiQoADMVrbsvUobxqRhTQGOFg7aFXmi%2Bvz%2BlLwTUGqnDZL7uAIHhBVwg5bAD5gEqy673T1oRgcjB3%2FYGFbV%2FzUTnhoRB0Hs4VY42BDoA%2BZESz16MIrL8g1RktDsXYvZyTH844p0rWH2dbU6UmFOB50qHV1l5xhBqQvGaRkJVvFSpAYvUDPnMN4JJsJ08drPpUMfbDmkjNvKTCerJlPDlFUPCuNvdPkqy0vU%2Bg4ft6ebGEJOQptFeeODm7TKVcnv4FpLa8NBOE2jsz10bn3MI77PEOORTmPyMfMdpu8gv16z9G741LBIbWII%2BHaezr5zrQnxah%2FAfqyEi%2FUYB3SaEU63gIqd%2BMB7pdjz8l%2B2HI1mx5BqMUcbmKdWxOio0FNiSBnrZJ%2FdxjBDmqwNkVAn86tBL2EMgnWKxkcZ6uagtjz3um%2F4jHj%2B06afbNv8%2FpSQTsQATDw1My%2BBjqkAZNa6FLctLxsvS8mMvTjRaotBsAyqx4lTOtKtLSlKrfUXInb0MrMmyDyuspoZgy9Pt90Ux1mxasthQg5X9YHZBY14pwJOYDvKAHAhXnQv6UfgKj04C71CRZwkw2eQfIHoHQ8n8cUniSmkbaDCLwKwZrjzetArbLHUP0XR1pZT2wOw7P339bfvAwFx8WeRcVYEm%2FUnALbBEgUwB%2FL7zKBn7iVKtaQ&X-Amz-Signature=b4dc80113256d1b9a7635686037a24b6f9f2b8b6a3d4374e33f02b3936d8c788&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWK3HDS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwm%2FTleC5c%2BvK%2F5QNsMg2Ufnnq%2Bv96r2v5kWEWWsWvjgIhALCAtJUp1%2F%2FMVikApHscE5h3AELAj58yvISvlGIKgGv6KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhB8XyjUF0HYXF8HUq3APaTwIKeh3cF3nsYDFB6zj54Xtw81A4PRFD2N%2Fui2t16qZ1n4DayoaeQ%2Fx%2FN%2F7I38RvyeKb3JjULLFiWiDUyTakXF32UY8KJHOCNXY6VaeQC8oPO4sgbAVSsbm5whkz90nooWiMl0ggrOIEpAyG0MJU4TPpWh4IgJoRGeSgxDBWTBW6NK3iTlIlWnxiQoADMVrbsvUobxqRhTQGOFg7aFXmi%2Bvz%2BlLwTUGqnDZL7uAIHhBVwg5bAD5gEqy673T1oRgcjB3%2FYGFbV%2FzUTnhoRB0Hs4VY42BDoA%2BZESz16MIrL8g1RktDsXYvZyTH844p0rWH2dbU6UmFOB50qHV1l5xhBqQvGaRkJVvFSpAYvUDPnMN4JJsJ08drPpUMfbDmkjNvKTCerJlPDlFUPCuNvdPkqy0vU%2Bg4ft6ebGEJOQptFeeODm7TKVcnv4FpLa8NBOE2jsz10bn3MI77PEOORTmPyMfMdpu8gv16z9G741LBIbWII%2BHaezr5zrQnxah%2FAfqyEi%2FUYB3SaEU63gIqd%2BMB7pdjz8l%2B2HI1mx5BqMUcbmKdWxOio0FNiSBnrZJ%2FdxjBDmqwNkVAn86tBL2EMgnWKxkcZ6uagtjz3um%2F4jHj%2B06afbNv8%2FpSQTsQATDw1My%2BBjqkAZNa6FLctLxsvS8mMvTjRaotBsAyqx4lTOtKtLSlKrfUXInb0MrMmyDyuspoZgy9Pt90Ux1mxasthQg5X9YHZBY14pwJOYDvKAHAhXnQv6UfgKj04C71CRZwkw2eQfIHoHQ8n8cUniSmkbaDCLwKwZrjzetArbLHUP0XR1pZT2wOw7P339bfvAwFx8WeRcVYEm%2FUnALbBEgUwB%2FL7zKBn7iVKtaQ&X-Amz-Signature=a448dc4e2460194b78008987405c9da20f08d527003e3d81c90a868a74d1f5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWK3HDS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwm%2FTleC5c%2BvK%2F5QNsMg2Ufnnq%2Bv96r2v5kWEWWsWvjgIhALCAtJUp1%2F%2FMVikApHscE5h3AELAj58yvISvlGIKgGv6KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhB8XyjUF0HYXF8HUq3APaTwIKeh3cF3nsYDFB6zj54Xtw81A4PRFD2N%2Fui2t16qZ1n4DayoaeQ%2Fx%2FN%2F7I38RvyeKb3JjULLFiWiDUyTakXF32UY8KJHOCNXY6VaeQC8oPO4sgbAVSsbm5whkz90nooWiMl0ggrOIEpAyG0MJU4TPpWh4IgJoRGeSgxDBWTBW6NK3iTlIlWnxiQoADMVrbsvUobxqRhTQGOFg7aFXmi%2Bvz%2BlLwTUGqnDZL7uAIHhBVwg5bAD5gEqy673T1oRgcjB3%2FYGFbV%2FzUTnhoRB0Hs4VY42BDoA%2BZESz16MIrL8g1RktDsXYvZyTH844p0rWH2dbU6UmFOB50qHV1l5xhBqQvGaRkJVvFSpAYvUDPnMN4JJsJ08drPpUMfbDmkjNvKTCerJlPDlFUPCuNvdPkqy0vU%2Bg4ft6ebGEJOQptFeeODm7TKVcnv4FpLa8NBOE2jsz10bn3MI77PEOORTmPyMfMdpu8gv16z9G741LBIbWII%2BHaezr5zrQnxah%2FAfqyEi%2FUYB3SaEU63gIqd%2BMB7pdjz8l%2B2HI1mx5BqMUcbmKdWxOio0FNiSBnrZJ%2FdxjBDmqwNkVAn86tBL2EMgnWKxkcZ6uagtjz3um%2F4jHj%2B06afbNv8%2FpSQTsQATDw1My%2BBjqkAZNa6FLctLxsvS8mMvTjRaotBsAyqx4lTOtKtLSlKrfUXInb0MrMmyDyuspoZgy9Pt90Ux1mxasthQg5X9YHZBY14pwJOYDvKAHAhXnQv6UfgKj04C71CRZwkw2eQfIHoHQ8n8cUniSmkbaDCLwKwZrjzetArbLHUP0XR1pZT2wOw7P339bfvAwFx8WeRcVYEm%2FUnALbBEgUwB%2FL7zKBn7iVKtaQ&X-Amz-Signature=e575189bc3dcd67188f0a7958c2ce0081f1562642a2ebd586a24f59165f4c86e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWK3HDS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwm%2FTleC5c%2BvK%2F5QNsMg2Ufnnq%2Bv96r2v5kWEWWsWvjgIhALCAtJUp1%2F%2FMVikApHscE5h3AELAj58yvISvlGIKgGv6KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhB8XyjUF0HYXF8HUq3APaTwIKeh3cF3nsYDFB6zj54Xtw81A4PRFD2N%2Fui2t16qZ1n4DayoaeQ%2Fx%2FN%2F7I38RvyeKb3JjULLFiWiDUyTakXF32UY8KJHOCNXY6VaeQC8oPO4sgbAVSsbm5whkz90nooWiMl0ggrOIEpAyG0MJU4TPpWh4IgJoRGeSgxDBWTBW6NK3iTlIlWnxiQoADMVrbsvUobxqRhTQGOFg7aFXmi%2Bvz%2BlLwTUGqnDZL7uAIHhBVwg5bAD5gEqy673T1oRgcjB3%2FYGFbV%2FzUTnhoRB0Hs4VY42BDoA%2BZESz16MIrL8g1RktDsXYvZyTH844p0rWH2dbU6UmFOB50qHV1l5xhBqQvGaRkJVvFSpAYvUDPnMN4JJsJ08drPpUMfbDmkjNvKTCerJlPDlFUPCuNvdPkqy0vU%2Bg4ft6ebGEJOQptFeeODm7TKVcnv4FpLa8NBOE2jsz10bn3MI77PEOORTmPyMfMdpu8gv16z9G741LBIbWII%2BHaezr5zrQnxah%2FAfqyEi%2FUYB3SaEU63gIqd%2BMB7pdjz8l%2B2HI1mx5BqMUcbmKdWxOio0FNiSBnrZJ%2FdxjBDmqwNkVAn86tBL2EMgnWKxkcZ6uagtjz3um%2F4jHj%2B06afbNv8%2FpSQTsQATDw1My%2BBjqkAZNa6FLctLxsvS8mMvTjRaotBsAyqx4lTOtKtLSlKrfUXInb0MrMmyDyuspoZgy9Pt90Ux1mxasthQg5X9YHZBY14pwJOYDvKAHAhXnQv6UfgKj04C71CRZwkw2eQfIHoHQ8n8cUniSmkbaDCLwKwZrjzetArbLHUP0XR1pZT2wOw7P339bfvAwFx8WeRcVYEm%2FUnALbBEgUwB%2FL7zKBn7iVKtaQ&X-Amz-Signature=9aad6fc65b3bdacf45d3dd0eec48e9cdcebcc4ebf8a9dd91069573660e0834e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
