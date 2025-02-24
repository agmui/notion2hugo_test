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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFRVSGP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9DiQW%2BnLT7S7PQqVdbSb37NL6RSQvtuzu4sPaDfrzwIhALBzndrRpa7hV%2FIzrUXxrl7WoJ10Ch54LjiFTmeJJ1c2Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyR9VQIjsC1WtkI5Ygq3AMe95FE37ByYIfadyKfOLgcfVrpaFmxjceYKiXq2ONESGsHzxpTs8DgD1Rw9B%2FYLyGtNDKyEbxkhM9u2YJJ4eCDhFBvCCBdD0hZon8bUqhLWnTj2a96S9fPsqNFIRihihwmSZ47zoM7%2Fi1ILltHwcTwjBenrOfHqVNRACkxwVdLCcVBGc4xdM4sMgm3HF5%2B4656QQK%2B%2FuzskiU63huhb5fku9SncSVq%2Bh5Ej5Jsl5MyVNHW7PyLifMavssH797HxmBWlxI6Sj4e373W68Jj8i0mn5Ue4qo6zMMeDVbB%2FiwkAql6bfuuHjnZ%2BBfQLi%2BWAbXvAvDvrlPyzjvzFOpyTBW24A84io8AMyYC%2BCvcIt8z%2F71k2%2BdQOUokymTfiZ4NUHJjYVD%2BDi%2FbzYPvhidlFQDVNuMbMU9NRmIa1nH82fFmgiSPRbxnEYRuStYGRVQa9W952cvscAbAKM0rzekBkQGu%2BcbPXq2MKFXGorrvYLCY2Bxtk1gZwDTH0m79qWF9zJIg8jeT7MiYRfM7JEsaCKEra%2F0LmpYL7QaL3%2BlCwiOI0xY7RXTKlj9NETrsCQjmBA3Iz8p%2FngUbyMzNlOlF23CbrTfJgvL90QWDWfQl4DXHWZcNL%2BBVUS1MmTdEHDCJ1vO9BjqkAarCgdMwWTWSC3MGf%2B5sPRUPgaBrTPZCqf8E9SmWlH%2FJ2uz4vmNFyCGLOLatQBrZ7q9J7JzhNg%2FrKfLfLGbhRAHF1B2NJVZgUhWkIMP1%2Br077StdYyHEFMX18hLXyfylMbdwlVociMeVbWM8IcVsq1Ldu3ZFkuBOTC1YwQrM%2FmYr40OGl%2BODGGchipQhk%2Fn7rMvq35IzWVID1p5QA2Lr3hUUO%2FKq&X-Amz-Signature=677075a501e489f7ef45596d4f95caaf822f303d1a4dde38d574885bc8ae9cee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFRVSGP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9DiQW%2BnLT7S7PQqVdbSb37NL6RSQvtuzu4sPaDfrzwIhALBzndrRpa7hV%2FIzrUXxrl7WoJ10Ch54LjiFTmeJJ1c2Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyR9VQIjsC1WtkI5Ygq3AMe95FE37ByYIfadyKfOLgcfVrpaFmxjceYKiXq2ONESGsHzxpTs8DgD1Rw9B%2FYLyGtNDKyEbxkhM9u2YJJ4eCDhFBvCCBdD0hZon8bUqhLWnTj2a96S9fPsqNFIRihihwmSZ47zoM7%2Fi1ILltHwcTwjBenrOfHqVNRACkxwVdLCcVBGc4xdM4sMgm3HF5%2B4656QQK%2B%2FuzskiU63huhb5fku9SncSVq%2Bh5Ej5Jsl5MyVNHW7PyLifMavssH797HxmBWlxI6Sj4e373W68Jj8i0mn5Ue4qo6zMMeDVbB%2FiwkAql6bfuuHjnZ%2BBfQLi%2BWAbXvAvDvrlPyzjvzFOpyTBW24A84io8AMyYC%2BCvcIt8z%2F71k2%2BdQOUokymTfiZ4NUHJjYVD%2BDi%2FbzYPvhidlFQDVNuMbMU9NRmIa1nH82fFmgiSPRbxnEYRuStYGRVQa9W952cvscAbAKM0rzekBkQGu%2BcbPXq2MKFXGorrvYLCY2Bxtk1gZwDTH0m79qWF9zJIg8jeT7MiYRfM7JEsaCKEra%2F0LmpYL7QaL3%2BlCwiOI0xY7RXTKlj9NETrsCQjmBA3Iz8p%2FngUbyMzNlOlF23CbrTfJgvL90QWDWfQl4DXHWZcNL%2BBVUS1MmTdEHDCJ1vO9BjqkAarCgdMwWTWSC3MGf%2B5sPRUPgaBrTPZCqf8E9SmWlH%2FJ2uz4vmNFyCGLOLatQBrZ7q9J7JzhNg%2FrKfLfLGbhRAHF1B2NJVZgUhWkIMP1%2Br077StdYyHEFMX18hLXyfylMbdwlVociMeVbWM8IcVsq1Ldu3ZFkuBOTC1YwQrM%2FmYr40OGl%2BODGGchipQhk%2Fn7rMvq35IzWVID1p5QA2Lr3hUUO%2FKq&X-Amz-Signature=54ee96874f412979e6ff131d14ce503e7dc4f25c2ce88341717345034d9eef40&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFRVSGP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9DiQW%2BnLT7S7PQqVdbSb37NL6RSQvtuzu4sPaDfrzwIhALBzndrRpa7hV%2FIzrUXxrl7WoJ10Ch54LjiFTmeJJ1c2Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyR9VQIjsC1WtkI5Ygq3AMe95FE37ByYIfadyKfOLgcfVrpaFmxjceYKiXq2ONESGsHzxpTs8DgD1Rw9B%2FYLyGtNDKyEbxkhM9u2YJJ4eCDhFBvCCBdD0hZon8bUqhLWnTj2a96S9fPsqNFIRihihwmSZ47zoM7%2Fi1ILltHwcTwjBenrOfHqVNRACkxwVdLCcVBGc4xdM4sMgm3HF5%2B4656QQK%2B%2FuzskiU63huhb5fku9SncSVq%2Bh5Ej5Jsl5MyVNHW7PyLifMavssH797HxmBWlxI6Sj4e373W68Jj8i0mn5Ue4qo6zMMeDVbB%2FiwkAql6bfuuHjnZ%2BBfQLi%2BWAbXvAvDvrlPyzjvzFOpyTBW24A84io8AMyYC%2BCvcIt8z%2F71k2%2BdQOUokymTfiZ4NUHJjYVD%2BDi%2FbzYPvhidlFQDVNuMbMU9NRmIa1nH82fFmgiSPRbxnEYRuStYGRVQa9W952cvscAbAKM0rzekBkQGu%2BcbPXq2MKFXGorrvYLCY2Bxtk1gZwDTH0m79qWF9zJIg8jeT7MiYRfM7JEsaCKEra%2F0LmpYL7QaL3%2BlCwiOI0xY7RXTKlj9NETrsCQjmBA3Iz8p%2FngUbyMzNlOlF23CbrTfJgvL90QWDWfQl4DXHWZcNL%2BBVUS1MmTdEHDCJ1vO9BjqkAarCgdMwWTWSC3MGf%2B5sPRUPgaBrTPZCqf8E9SmWlH%2FJ2uz4vmNFyCGLOLatQBrZ7q9J7JzhNg%2FrKfLfLGbhRAHF1B2NJVZgUhWkIMP1%2Br077StdYyHEFMX18hLXyfylMbdwlVociMeVbWM8IcVsq1Ldu3ZFkuBOTC1YwQrM%2FmYr40OGl%2BODGGchipQhk%2Fn7rMvq35IzWVID1p5QA2Lr3hUUO%2FKq&X-Amz-Signature=7d2aec7301dd7eb0f154b91dff9566bf4666116bd04567fd79fef22fa60866df&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFRVSGP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9DiQW%2BnLT7S7PQqVdbSb37NL6RSQvtuzu4sPaDfrzwIhALBzndrRpa7hV%2FIzrUXxrl7WoJ10Ch54LjiFTmeJJ1c2Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyR9VQIjsC1WtkI5Ygq3AMe95FE37ByYIfadyKfOLgcfVrpaFmxjceYKiXq2ONESGsHzxpTs8DgD1Rw9B%2FYLyGtNDKyEbxkhM9u2YJJ4eCDhFBvCCBdD0hZon8bUqhLWnTj2a96S9fPsqNFIRihihwmSZ47zoM7%2Fi1ILltHwcTwjBenrOfHqVNRACkxwVdLCcVBGc4xdM4sMgm3HF5%2B4656QQK%2B%2FuzskiU63huhb5fku9SncSVq%2Bh5Ej5Jsl5MyVNHW7PyLifMavssH797HxmBWlxI6Sj4e373W68Jj8i0mn5Ue4qo6zMMeDVbB%2FiwkAql6bfuuHjnZ%2BBfQLi%2BWAbXvAvDvrlPyzjvzFOpyTBW24A84io8AMyYC%2BCvcIt8z%2F71k2%2BdQOUokymTfiZ4NUHJjYVD%2BDi%2FbzYPvhidlFQDVNuMbMU9NRmIa1nH82fFmgiSPRbxnEYRuStYGRVQa9W952cvscAbAKM0rzekBkQGu%2BcbPXq2MKFXGorrvYLCY2Bxtk1gZwDTH0m79qWF9zJIg8jeT7MiYRfM7JEsaCKEra%2F0LmpYL7QaL3%2BlCwiOI0xY7RXTKlj9NETrsCQjmBA3Iz8p%2FngUbyMzNlOlF23CbrTfJgvL90QWDWfQl4DXHWZcNL%2BBVUS1MmTdEHDCJ1vO9BjqkAarCgdMwWTWSC3MGf%2B5sPRUPgaBrTPZCqf8E9SmWlH%2FJ2uz4vmNFyCGLOLatQBrZ7q9J7JzhNg%2FrKfLfLGbhRAHF1B2NJVZgUhWkIMP1%2Br077StdYyHEFMX18hLXyfylMbdwlVociMeVbWM8IcVsq1Ldu3ZFkuBOTC1YwQrM%2FmYr40OGl%2BODGGchipQhk%2Fn7rMvq35IzWVID1p5QA2Lr3hUUO%2FKq&X-Amz-Signature=d0d660131abaae4e016755c59e22b94fc102bf5ec8a05d9483cfb5ed8acf0afd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFRVSGP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9DiQW%2BnLT7S7PQqVdbSb37NL6RSQvtuzu4sPaDfrzwIhALBzndrRpa7hV%2FIzrUXxrl7WoJ10Ch54LjiFTmeJJ1c2Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyR9VQIjsC1WtkI5Ygq3AMe95FE37ByYIfadyKfOLgcfVrpaFmxjceYKiXq2ONESGsHzxpTs8DgD1Rw9B%2FYLyGtNDKyEbxkhM9u2YJJ4eCDhFBvCCBdD0hZon8bUqhLWnTj2a96S9fPsqNFIRihihwmSZ47zoM7%2Fi1ILltHwcTwjBenrOfHqVNRACkxwVdLCcVBGc4xdM4sMgm3HF5%2B4656QQK%2B%2FuzskiU63huhb5fku9SncSVq%2Bh5Ej5Jsl5MyVNHW7PyLifMavssH797HxmBWlxI6Sj4e373W68Jj8i0mn5Ue4qo6zMMeDVbB%2FiwkAql6bfuuHjnZ%2BBfQLi%2BWAbXvAvDvrlPyzjvzFOpyTBW24A84io8AMyYC%2BCvcIt8z%2F71k2%2BdQOUokymTfiZ4NUHJjYVD%2BDi%2FbzYPvhidlFQDVNuMbMU9NRmIa1nH82fFmgiSPRbxnEYRuStYGRVQa9W952cvscAbAKM0rzekBkQGu%2BcbPXq2MKFXGorrvYLCY2Bxtk1gZwDTH0m79qWF9zJIg8jeT7MiYRfM7JEsaCKEra%2F0LmpYL7QaL3%2BlCwiOI0xY7RXTKlj9NETrsCQjmBA3Iz8p%2FngUbyMzNlOlF23CbrTfJgvL90QWDWfQl4DXHWZcNL%2BBVUS1MmTdEHDCJ1vO9BjqkAarCgdMwWTWSC3MGf%2B5sPRUPgaBrTPZCqf8E9SmWlH%2FJ2uz4vmNFyCGLOLatQBrZ7q9J7JzhNg%2FrKfLfLGbhRAHF1B2NJVZgUhWkIMP1%2Br077StdYyHEFMX18hLXyfylMbdwlVociMeVbWM8IcVsq1Ldu3ZFkuBOTC1YwQrM%2FmYr40OGl%2BODGGchipQhk%2Fn7rMvq35IzWVID1p5QA2Lr3hUUO%2FKq&X-Amz-Signature=3a1454ca41d95e21440634977bc61be648a0fd37283225728fddf158f75e071e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFRVSGP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9DiQW%2BnLT7S7PQqVdbSb37NL6RSQvtuzu4sPaDfrzwIhALBzndrRpa7hV%2FIzrUXxrl7WoJ10Ch54LjiFTmeJJ1c2Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyR9VQIjsC1WtkI5Ygq3AMe95FE37ByYIfadyKfOLgcfVrpaFmxjceYKiXq2ONESGsHzxpTs8DgD1Rw9B%2FYLyGtNDKyEbxkhM9u2YJJ4eCDhFBvCCBdD0hZon8bUqhLWnTj2a96S9fPsqNFIRihihwmSZ47zoM7%2Fi1ILltHwcTwjBenrOfHqVNRACkxwVdLCcVBGc4xdM4sMgm3HF5%2B4656QQK%2B%2FuzskiU63huhb5fku9SncSVq%2Bh5Ej5Jsl5MyVNHW7PyLifMavssH797HxmBWlxI6Sj4e373W68Jj8i0mn5Ue4qo6zMMeDVbB%2FiwkAql6bfuuHjnZ%2BBfQLi%2BWAbXvAvDvrlPyzjvzFOpyTBW24A84io8AMyYC%2BCvcIt8z%2F71k2%2BdQOUokymTfiZ4NUHJjYVD%2BDi%2FbzYPvhidlFQDVNuMbMU9NRmIa1nH82fFmgiSPRbxnEYRuStYGRVQa9W952cvscAbAKM0rzekBkQGu%2BcbPXq2MKFXGorrvYLCY2Bxtk1gZwDTH0m79qWF9zJIg8jeT7MiYRfM7JEsaCKEra%2F0LmpYL7QaL3%2BlCwiOI0xY7RXTKlj9NETrsCQjmBA3Iz8p%2FngUbyMzNlOlF23CbrTfJgvL90QWDWfQl4DXHWZcNL%2BBVUS1MmTdEHDCJ1vO9BjqkAarCgdMwWTWSC3MGf%2B5sPRUPgaBrTPZCqf8E9SmWlH%2FJ2uz4vmNFyCGLOLatQBrZ7q9J7JzhNg%2FrKfLfLGbhRAHF1B2NJVZgUhWkIMP1%2Br077StdYyHEFMX18hLXyfylMbdwlVociMeVbWM8IcVsq1Ldu3ZFkuBOTC1YwQrM%2FmYr40OGl%2BODGGchipQhk%2Fn7rMvq35IzWVID1p5QA2Lr3hUUO%2FKq&X-Amz-Signature=e1ecf9286f786dacccd8ed34aaf7b91df86afe6b3125347a46ec5f2fb3d71204&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFRVSGP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9DiQW%2BnLT7S7PQqVdbSb37NL6RSQvtuzu4sPaDfrzwIhALBzndrRpa7hV%2FIzrUXxrl7WoJ10Ch54LjiFTmeJJ1c2Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyR9VQIjsC1WtkI5Ygq3AMe95FE37ByYIfadyKfOLgcfVrpaFmxjceYKiXq2ONESGsHzxpTs8DgD1Rw9B%2FYLyGtNDKyEbxkhM9u2YJJ4eCDhFBvCCBdD0hZon8bUqhLWnTj2a96S9fPsqNFIRihihwmSZ47zoM7%2Fi1ILltHwcTwjBenrOfHqVNRACkxwVdLCcVBGc4xdM4sMgm3HF5%2B4656QQK%2B%2FuzskiU63huhb5fku9SncSVq%2Bh5Ej5Jsl5MyVNHW7PyLifMavssH797HxmBWlxI6Sj4e373W68Jj8i0mn5Ue4qo6zMMeDVbB%2FiwkAql6bfuuHjnZ%2BBfQLi%2BWAbXvAvDvrlPyzjvzFOpyTBW24A84io8AMyYC%2BCvcIt8z%2F71k2%2BdQOUokymTfiZ4NUHJjYVD%2BDi%2FbzYPvhidlFQDVNuMbMU9NRmIa1nH82fFmgiSPRbxnEYRuStYGRVQa9W952cvscAbAKM0rzekBkQGu%2BcbPXq2MKFXGorrvYLCY2Bxtk1gZwDTH0m79qWF9zJIg8jeT7MiYRfM7JEsaCKEra%2F0LmpYL7QaL3%2BlCwiOI0xY7RXTKlj9NETrsCQjmBA3Iz8p%2FngUbyMzNlOlF23CbrTfJgvL90QWDWfQl4DXHWZcNL%2BBVUS1MmTdEHDCJ1vO9BjqkAarCgdMwWTWSC3MGf%2B5sPRUPgaBrTPZCqf8E9SmWlH%2FJ2uz4vmNFyCGLOLatQBrZ7q9J7JzhNg%2FrKfLfLGbhRAHF1B2NJVZgUhWkIMP1%2Br077StdYyHEFMX18hLXyfylMbdwlVociMeVbWM8IcVsq1Ldu3ZFkuBOTC1YwQrM%2FmYr40OGl%2BODGGchipQhk%2Fn7rMvq35IzWVID1p5QA2Lr3hUUO%2FKq&X-Amz-Signature=01c166a2495aab7f7a02a5b37d4505bdeb953d2b68eb13e29562021826353c36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFRVSGP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9DiQW%2BnLT7S7PQqVdbSb37NL6RSQvtuzu4sPaDfrzwIhALBzndrRpa7hV%2FIzrUXxrl7WoJ10Ch54LjiFTmeJJ1c2Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyR9VQIjsC1WtkI5Ygq3AMe95FE37ByYIfadyKfOLgcfVrpaFmxjceYKiXq2ONESGsHzxpTs8DgD1Rw9B%2FYLyGtNDKyEbxkhM9u2YJJ4eCDhFBvCCBdD0hZon8bUqhLWnTj2a96S9fPsqNFIRihihwmSZ47zoM7%2Fi1ILltHwcTwjBenrOfHqVNRACkxwVdLCcVBGc4xdM4sMgm3HF5%2B4656QQK%2B%2FuzskiU63huhb5fku9SncSVq%2Bh5Ej5Jsl5MyVNHW7PyLifMavssH797HxmBWlxI6Sj4e373W68Jj8i0mn5Ue4qo6zMMeDVbB%2FiwkAql6bfuuHjnZ%2BBfQLi%2BWAbXvAvDvrlPyzjvzFOpyTBW24A84io8AMyYC%2BCvcIt8z%2F71k2%2BdQOUokymTfiZ4NUHJjYVD%2BDi%2FbzYPvhidlFQDVNuMbMU9NRmIa1nH82fFmgiSPRbxnEYRuStYGRVQa9W952cvscAbAKM0rzekBkQGu%2BcbPXq2MKFXGorrvYLCY2Bxtk1gZwDTH0m79qWF9zJIg8jeT7MiYRfM7JEsaCKEra%2F0LmpYL7QaL3%2BlCwiOI0xY7RXTKlj9NETrsCQjmBA3Iz8p%2FngUbyMzNlOlF23CbrTfJgvL90QWDWfQl4DXHWZcNL%2BBVUS1MmTdEHDCJ1vO9BjqkAarCgdMwWTWSC3MGf%2B5sPRUPgaBrTPZCqf8E9SmWlH%2FJ2uz4vmNFyCGLOLatQBrZ7q9J7JzhNg%2FrKfLfLGbhRAHF1B2NJVZgUhWkIMP1%2Br077StdYyHEFMX18hLXyfylMbdwlVociMeVbWM8IcVsq1Ldu3ZFkuBOTC1YwQrM%2FmYr40OGl%2BODGGchipQhk%2Fn7rMvq35IzWVID1p5QA2Lr3hUUO%2FKq&X-Amz-Signature=b40cd5567950258bf00541ceaf5cf50042b40b29b9f3831bc74da0f18f1428bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
