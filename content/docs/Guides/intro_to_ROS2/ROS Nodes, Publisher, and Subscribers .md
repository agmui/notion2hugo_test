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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKVC4RR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEx1fyuK8bhRIvoBksDiA0oXFxo%2BDdrfDPXlI3tFQtHBAiEAv5RPkm8YBMfYiwhg9GFcKBOP90LZLUk2V%2F9D%2B%2FI1e6cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZAgQOovBCAI7ikCrcA8a%2BjPoL2fv9oQeoMfGHrCROybYm77KrQqzfl3Q%2BCZev9dhjBhKjSTMoikp22hmDKPKuRCy19DhhUsTQsqbVqUto%2BfcnxN3mbpbjmd0%2B8kDAO0xFnbG%2Ba8CTE0cVGGAyGS3o0YvnqYueWU%2F%2Fe4P%2BxRY5So1Ly1qtW3WV8gERhzwSLiuKp7M3ELJWbFC8DYc0MAgomOaZlgFypQBhO4HLJ6JvDZs9APuj6gnnNqA349wD9U7sy1yBc60DiXdt4H87thbMOsANFTEDUVT7oRgDTj6JS%2FPt4FbRJIOQda1JJHKry%2FcreJP1aW8x%2FutZvkdlXdJSg79fcIjupW%2FD04jlD4SFA08RLFsifcOnlU8H0tmAj3t%2BrHC5pM80y6jXWGtKpywx4kBgXl4JdNVNk8UGu7WXMKeQzMr2ydQ5yp3w8MTCYrs0nrLgGqJZ0a5s1fnCPmhg1V79tA7tqvfs7I9EQFFuZCgA9r5chKGsj9Z4KquCPF%2BjDYUcSvo8fQaMz0HKvLilFpsVckms4BaHQg8ApyiiB5Uhh65SuRQbpAiyp32hiy2kWOj6QOxeGmQbIggL2ieb9ogGiUkkEwq4qOhGploSP4LChQ4NCJB25d4%2BUgX7ztwSDi5A5TOzwVPNMM7i1b0GOqUBv2nXMIRKoh0wJ%2BU9Tvjhu0OpZYeaPOQ0vgSWAGWbFtVSkVtpPqTXOZHqcfVS5MBi5C95hc67XCsC2DQphDnyqGW%2BeguhqxXKVi6SyV1EmnEfNYZfKG4rKrJOToNfAgcEsfFkG2WkAMtDmtQrnS22ZZ2c4rZkKBlYSisRVK1jG6U9Oaaal9JIPZ87xUXp%2BmPYjay2jyl78C%2BltaMSXzpbFW7Nf4gk&X-Amz-Signature=ae22d0efa8fa66a0b585a8219ad3d2c3c0852ec0f246d73635339b95ef65e663&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKVC4RR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEx1fyuK8bhRIvoBksDiA0oXFxo%2BDdrfDPXlI3tFQtHBAiEAv5RPkm8YBMfYiwhg9GFcKBOP90LZLUk2V%2F9D%2B%2FI1e6cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZAgQOovBCAI7ikCrcA8a%2BjPoL2fv9oQeoMfGHrCROybYm77KrQqzfl3Q%2BCZev9dhjBhKjSTMoikp22hmDKPKuRCy19DhhUsTQsqbVqUto%2BfcnxN3mbpbjmd0%2B8kDAO0xFnbG%2Ba8CTE0cVGGAyGS3o0YvnqYueWU%2F%2Fe4P%2BxRY5So1Ly1qtW3WV8gERhzwSLiuKp7M3ELJWbFC8DYc0MAgomOaZlgFypQBhO4HLJ6JvDZs9APuj6gnnNqA349wD9U7sy1yBc60DiXdt4H87thbMOsANFTEDUVT7oRgDTj6JS%2FPt4FbRJIOQda1JJHKry%2FcreJP1aW8x%2FutZvkdlXdJSg79fcIjupW%2FD04jlD4SFA08RLFsifcOnlU8H0tmAj3t%2BrHC5pM80y6jXWGtKpywx4kBgXl4JdNVNk8UGu7WXMKeQzMr2ydQ5yp3w8MTCYrs0nrLgGqJZ0a5s1fnCPmhg1V79tA7tqvfs7I9EQFFuZCgA9r5chKGsj9Z4KquCPF%2BjDYUcSvo8fQaMz0HKvLilFpsVckms4BaHQg8ApyiiB5Uhh65SuRQbpAiyp32hiy2kWOj6QOxeGmQbIggL2ieb9ogGiUkkEwq4qOhGploSP4LChQ4NCJB25d4%2BUgX7ztwSDi5A5TOzwVPNMM7i1b0GOqUBv2nXMIRKoh0wJ%2BU9Tvjhu0OpZYeaPOQ0vgSWAGWbFtVSkVtpPqTXOZHqcfVS5MBi5C95hc67XCsC2DQphDnyqGW%2BeguhqxXKVi6SyV1EmnEfNYZfKG4rKrJOToNfAgcEsfFkG2WkAMtDmtQrnS22ZZ2c4rZkKBlYSisRVK1jG6U9Oaaal9JIPZ87xUXp%2BmPYjay2jyl78C%2BltaMSXzpbFW7Nf4gk&X-Amz-Signature=571d3c54f2ea0cfe6864901c7023fb12f5c5458cf8dea143a95e5b5f7ae9650a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKVC4RR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEx1fyuK8bhRIvoBksDiA0oXFxo%2BDdrfDPXlI3tFQtHBAiEAv5RPkm8YBMfYiwhg9GFcKBOP90LZLUk2V%2F9D%2B%2FI1e6cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZAgQOovBCAI7ikCrcA8a%2BjPoL2fv9oQeoMfGHrCROybYm77KrQqzfl3Q%2BCZev9dhjBhKjSTMoikp22hmDKPKuRCy19DhhUsTQsqbVqUto%2BfcnxN3mbpbjmd0%2B8kDAO0xFnbG%2Ba8CTE0cVGGAyGS3o0YvnqYueWU%2F%2Fe4P%2BxRY5So1Ly1qtW3WV8gERhzwSLiuKp7M3ELJWbFC8DYc0MAgomOaZlgFypQBhO4HLJ6JvDZs9APuj6gnnNqA349wD9U7sy1yBc60DiXdt4H87thbMOsANFTEDUVT7oRgDTj6JS%2FPt4FbRJIOQda1JJHKry%2FcreJP1aW8x%2FutZvkdlXdJSg79fcIjupW%2FD04jlD4SFA08RLFsifcOnlU8H0tmAj3t%2BrHC5pM80y6jXWGtKpywx4kBgXl4JdNVNk8UGu7WXMKeQzMr2ydQ5yp3w8MTCYrs0nrLgGqJZ0a5s1fnCPmhg1V79tA7tqvfs7I9EQFFuZCgA9r5chKGsj9Z4KquCPF%2BjDYUcSvo8fQaMz0HKvLilFpsVckms4BaHQg8ApyiiB5Uhh65SuRQbpAiyp32hiy2kWOj6QOxeGmQbIggL2ieb9ogGiUkkEwq4qOhGploSP4LChQ4NCJB25d4%2BUgX7ztwSDi5A5TOzwVPNMM7i1b0GOqUBv2nXMIRKoh0wJ%2BU9Tvjhu0OpZYeaPOQ0vgSWAGWbFtVSkVtpPqTXOZHqcfVS5MBi5C95hc67XCsC2DQphDnyqGW%2BeguhqxXKVi6SyV1EmnEfNYZfKG4rKrJOToNfAgcEsfFkG2WkAMtDmtQrnS22ZZ2c4rZkKBlYSisRVK1jG6U9Oaaal9JIPZ87xUXp%2BmPYjay2jyl78C%2BltaMSXzpbFW7Nf4gk&X-Amz-Signature=30a0f3e36ed0b25f9d07c7e9d5c703eec28ea4b140c203c709219f260f49cb43&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKVC4RR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEx1fyuK8bhRIvoBksDiA0oXFxo%2BDdrfDPXlI3tFQtHBAiEAv5RPkm8YBMfYiwhg9GFcKBOP90LZLUk2V%2F9D%2B%2FI1e6cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZAgQOovBCAI7ikCrcA8a%2BjPoL2fv9oQeoMfGHrCROybYm77KrQqzfl3Q%2BCZev9dhjBhKjSTMoikp22hmDKPKuRCy19DhhUsTQsqbVqUto%2BfcnxN3mbpbjmd0%2B8kDAO0xFnbG%2Ba8CTE0cVGGAyGS3o0YvnqYueWU%2F%2Fe4P%2BxRY5So1Ly1qtW3WV8gERhzwSLiuKp7M3ELJWbFC8DYc0MAgomOaZlgFypQBhO4HLJ6JvDZs9APuj6gnnNqA349wD9U7sy1yBc60DiXdt4H87thbMOsANFTEDUVT7oRgDTj6JS%2FPt4FbRJIOQda1JJHKry%2FcreJP1aW8x%2FutZvkdlXdJSg79fcIjupW%2FD04jlD4SFA08RLFsifcOnlU8H0tmAj3t%2BrHC5pM80y6jXWGtKpywx4kBgXl4JdNVNk8UGu7WXMKeQzMr2ydQ5yp3w8MTCYrs0nrLgGqJZ0a5s1fnCPmhg1V79tA7tqvfs7I9EQFFuZCgA9r5chKGsj9Z4KquCPF%2BjDYUcSvo8fQaMz0HKvLilFpsVckms4BaHQg8ApyiiB5Uhh65SuRQbpAiyp32hiy2kWOj6QOxeGmQbIggL2ieb9ogGiUkkEwq4qOhGploSP4LChQ4NCJB25d4%2BUgX7ztwSDi5A5TOzwVPNMM7i1b0GOqUBv2nXMIRKoh0wJ%2BU9Tvjhu0OpZYeaPOQ0vgSWAGWbFtVSkVtpPqTXOZHqcfVS5MBi5C95hc67XCsC2DQphDnyqGW%2BeguhqxXKVi6SyV1EmnEfNYZfKG4rKrJOToNfAgcEsfFkG2WkAMtDmtQrnS22ZZ2c4rZkKBlYSisRVK1jG6U9Oaaal9JIPZ87xUXp%2BmPYjay2jyl78C%2BltaMSXzpbFW7Nf4gk&X-Amz-Signature=ed91dcd1068dbae9aa964ae7eaaaf14183a7b7de9d4999455e2bc810bb40bbee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKVC4RR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEx1fyuK8bhRIvoBksDiA0oXFxo%2BDdrfDPXlI3tFQtHBAiEAv5RPkm8YBMfYiwhg9GFcKBOP90LZLUk2V%2F9D%2B%2FI1e6cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZAgQOovBCAI7ikCrcA8a%2BjPoL2fv9oQeoMfGHrCROybYm77KrQqzfl3Q%2BCZev9dhjBhKjSTMoikp22hmDKPKuRCy19DhhUsTQsqbVqUto%2BfcnxN3mbpbjmd0%2B8kDAO0xFnbG%2Ba8CTE0cVGGAyGS3o0YvnqYueWU%2F%2Fe4P%2BxRY5So1Ly1qtW3WV8gERhzwSLiuKp7M3ELJWbFC8DYc0MAgomOaZlgFypQBhO4HLJ6JvDZs9APuj6gnnNqA349wD9U7sy1yBc60DiXdt4H87thbMOsANFTEDUVT7oRgDTj6JS%2FPt4FbRJIOQda1JJHKry%2FcreJP1aW8x%2FutZvkdlXdJSg79fcIjupW%2FD04jlD4SFA08RLFsifcOnlU8H0tmAj3t%2BrHC5pM80y6jXWGtKpywx4kBgXl4JdNVNk8UGu7WXMKeQzMr2ydQ5yp3w8MTCYrs0nrLgGqJZ0a5s1fnCPmhg1V79tA7tqvfs7I9EQFFuZCgA9r5chKGsj9Z4KquCPF%2BjDYUcSvo8fQaMz0HKvLilFpsVckms4BaHQg8ApyiiB5Uhh65SuRQbpAiyp32hiy2kWOj6QOxeGmQbIggL2ieb9ogGiUkkEwq4qOhGploSP4LChQ4NCJB25d4%2BUgX7ztwSDi5A5TOzwVPNMM7i1b0GOqUBv2nXMIRKoh0wJ%2BU9Tvjhu0OpZYeaPOQ0vgSWAGWbFtVSkVtpPqTXOZHqcfVS5MBi5C95hc67XCsC2DQphDnyqGW%2BeguhqxXKVi6SyV1EmnEfNYZfKG4rKrJOToNfAgcEsfFkG2WkAMtDmtQrnS22ZZ2c4rZkKBlYSisRVK1jG6U9Oaaal9JIPZ87xUXp%2BmPYjay2jyl78C%2BltaMSXzpbFW7Nf4gk&X-Amz-Signature=41ab7da00d3e89ee8a685b299ec5e8e07a787b4d429f4cff524889c8b9b6413b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKVC4RR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEx1fyuK8bhRIvoBksDiA0oXFxo%2BDdrfDPXlI3tFQtHBAiEAv5RPkm8YBMfYiwhg9GFcKBOP90LZLUk2V%2F9D%2B%2FI1e6cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZAgQOovBCAI7ikCrcA8a%2BjPoL2fv9oQeoMfGHrCROybYm77KrQqzfl3Q%2BCZev9dhjBhKjSTMoikp22hmDKPKuRCy19DhhUsTQsqbVqUto%2BfcnxN3mbpbjmd0%2B8kDAO0xFnbG%2Ba8CTE0cVGGAyGS3o0YvnqYueWU%2F%2Fe4P%2BxRY5So1Ly1qtW3WV8gERhzwSLiuKp7M3ELJWbFC8DYc0MAgomOaZlgFypQBhO4HLJ6JvDZs9APuj6gnnNqA349wD9U7sy1yBc60DiXdt4H87thbMOsANFTEDUVT7oRgDTj6JS%2FPt4FbRJIOQda1JJHKry%2FcreJP1aW8x%2FutZvkdlXdJSg79fcIjupW%2FD04jlD4SFA08RLFsifcOnlU8H0tmAj3t%2BrHC5pM80y6jXWGtKpywx4kBgXl4JdNVNk8UGu7WXMKeQzMr2ydQ5yp3w8MTCYrs0nrLgGqJZ0a5s1fnCPmhg1V79tA7tqvfs7I9EQFFuZCgA9r5chKGsj9Z4KquCPF%2BjDYUcSvo8fQaMz0HKvLilFpsVckms4BaHQg8ApyiiB5Uhh65SuRQbpAiyp32hiy2kWOj6QOxeGmQbIggL2ieb9ogGiUkkEwq4qOhGploSP4LChQ4NCJB25d4%2BUgX7ztwSDi5A5TOzwVPNMM7i1b0GOqUBv2nXMIRKoh0wJ%2BU9Tvjhu0OpZYeaPOQ0vgSWAGWbFtVSkVtpPqTXOZHqcfVS5MBi5C95hc67XCsC2DQphDnyqGW%2BeguhqxXKVi6SyV1EmnEfNYZfKG4rKrJOToNfAgcEsfFkG2WkAMtDmtQrnS22ZZ2c4rZkKBlYSisRVK1jG6U9Oaaal9JIPZ87xUXp%2BmPYjay2jyl78C%2BltaMSXzpbFW7Nf4gk&X-Amz-Signature=c2b2aedf680c1abd9dd19e30be35a7c8387bf4776ba89a8bdc7fc87b51b2959a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKVC4RR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEx1fyuK8bhRIvoBksDiA0oXFxo%2BDdrfDPXlI3tFQtHBAiEAv5RPkm8YBMfYiwhg9GFcKBOP90LZLUk2V%2F9D%2B%2FI1e6cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZAgQOovBCAI7ikCrcA8a%2BjPoL2fv9oQeoMfGHrCROybYm77KrQqzfl3Q%2BCZev9dhjBhKjSTMoikp22hmDKPKuRCy19DhhUsTQsqbVqUto%2BfcnxN3mbpbjmd0%2B8kDAO0xFnbG%2Ba8CTE0cVGGAyGS3o0YvnqYueWU%2F%2Fe4P%2BxRY5So1Ly1qtW3WV8gERhzwSLiuKp7M3ELJWbFC8DYc0MAgomOaZlgFypQBhO4HLJ6JvDZs9APuj6gnnNqA349wD9U7sy1yBc60DiXdt4H87thbMOsANFTEDUVT7oRgDTj6JS%2FPt4FbRJIOQda1JJHKry%2FcreJP1aW8x%2FutZvkdlXdJSg79fcIjupW%2FD04jlD4SFA08RLFsifcOnlU8H0tmAj3t%2BrHC5pM80y6jXWGtKpywx4kBgXl4JdNVNk8UGu7WXMKeQzMr2ydQ5yp3w8MTCYrs0nrLgGqJZ0a5s1fnCPmhg1V79tA7tqvfs7I9EQFFuZCgA9r5chKGsj9Z4KquCPF%2BjDYUcSvo8fQaMz0HKvLilFpsVckms4BaHQg8ApyiiB5Uhh65SuRQbpAiyp32hiy2kWOj6QOxeGmQbIggL2ieb9ogGiUkkEwq4qOhGploSP4LChQ4NCJB25d4%2BUgX7ztwSDi5A5TOzwVPNMM7i1b0GOqUBv2nXMIRKoh0wJ%2BU9Tvjhu0OpZYeaPOQ0vgSWAGWbFtVSkVtpPqTXOZHqcfVS5MBi5C95hc67XCsC2DQphDnyqGW%2BeguhqxXKVi6SyV1EmnEfNYZfKG4rKrJOToNfAgcEsfFkG2WkAMtDmtQrnS22ZZ2c4rZkKBlYSisRVK1jG6U9Oaaal9JIPZ87xUXp%2BmPYjay2jyl78C%2BltaMSXzpbFW7Nf4gk&X-Amz-Signature=4a8442d7038ea0b2bfb8ff53cb686e7ccf6ce37ad1b213878595ac032567a727&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKVC4RR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEx1fyuK8bhRIvoBksDiA0oXFxo%2BDdrfDPXlI3tFQtHBAiEAv5RPkm8YBMfYiwhg9GFcKBOP90LZLUk2V%2F9D%2B%2FI1e6cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZAgQOovBCAI7ikCrcA8a%2BjPoL2fv9oQeoMfGHrCROybYm77KrQqzfl3Q%2BCZev9dhjBhKjSTMoikp22hmDKPKuRCy19DhhUsTQsqbVqUto%2BfcnxN3mbpbjmd0%2B8kDAO0xFnbG%2Ba8CTE0cVGGAyGS3o0YvnqYueWU%2F%2Fe4P%2BxRY5So1Ly1qtW3WV8gERhzwSLiuKp7M3ELJWbFC8DYc0MAgomOaZlgFypQBhO4HLJ6JvDZs9APuj6gnnNqA349wD9U7sy1yBc60DiXdt4H87thbMOsANFTEDUVT7oRgDTj6JS%2FPt4FbRJIOQda1JJHKry%2FcreJP1aW8x%2FutZvkdlXdJSg79fcIjupW%2FD04jlD4SFA08RLFsifcOnlU8H0tmAj3t%2BrHC5pM80y6jXWGtKpywx4kBgXl4JdNVNk8UGu7WXMKeQzMr2ydQ5yp3w8MTCYrs0nrLgGqJZ0a5s1fnCPmhg1V79tA7tqvfs7I9EQFFuZCgA9r5chKGsj9Z4KquCPF%2BjDYUcSvo8fQaMz0HKvLilFpsVckms4BaHQg8ApyiiB5Uhh65SuRQbpAiyp32hiy2kWOj6QOxeGmQbIggL2ieb9ogGiUkkEwq4qOhGploSP4LChQ4NCJB25d4%2BUgX7ztwSDi5A5TOzwVPNMM7i1b0GOqUBv2nXMIRKoh0wJ%2BU9Tvjhu0OpZYeaPOQ0vgSWAGWbFtVSkVtpPqTXOZHqcfVS5MBi5C95hc67XCsC2DQphDnyqGW%2BeguhqxXKVi6SyV1EmnEfNYZfKG4rKrJOToNfAgcEsfFkG2WkAMtDmtQrnS22ZZ2c4rZkKBlYSisRVK1jG6U9Oaaal9JIPZ87xUXp%2BmPYjay2jyl78C%2BltaMSXzpbFW7Nf4gk&X-Amz-Signature=c88cdeeb356eac4e6b43e127de5e99bf28cba3b3a01f98d08acdddb8f1326646&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
