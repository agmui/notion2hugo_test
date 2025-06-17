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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFZKYUR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAwWA4XrFoptfC3MZXHvwYy5iVaJ3B1kUg3JK%2BOiOMAAiBn%2FuWl%2BAfL8b%2BUbr382HNZCEhmNzr61SHPxKYjTu6kvyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpBE8tIqGbP%2FmN5XRKtwDep4XN3NAINxx9a71MVsJPd6p31Ei33baiyyAkYhlZhcPOKe6qtaqix9jUUKoS6uIU0rfCh3jcSEFbiGtPxTi0khTFEaM%2BXB1JGiRIo%2BUNPY5MlgPGkdSXa%2BX4ALkw1cCEBBQcpGozJYXK%2BA8GfSzoisC7k6nH%2BhiutX1tl7ruPCseXpBeP%2FBMQuXAhm5slntTdID5URk5LvAP2XyOh5j6ZoaaB72pLEW6UgNEB58XgkJTp1ujMk193FaV9o5FsMxT3Zr5EFPtVsZHW%2BA1FpHt7oqV4%2BA8BCZonQi2bm55Am4zjNBWP7Leh6bEq7QKRvL5HhTafDeUy%2BZpAhIU4TivSuRfWA6wLeeQPX3WBRK6szexozZgbeZEIakyAKXr%2BZqK49lDOP5qZK0vRcW6mUTGTjpkdNn%2BSo%2BdYE%2BZa8tt4iGO0XoV21u%2Bu5Bx0p00jaSoCfKeipMeKF%2F5s1OAKIm%2BBiDaarT23Bg%2BOF9ECBMazIDRQ4cJQYZTrtFQESITdkFB7yAkKc6y%2BlIgOIYTQJaOCxLQEFNzZ5wm2WUovwVjHL6c1Uh6Zt8C%2B7kENcK%2B4JTjt9urbiJLWxtRbNkU%2BmLpvB3F%2BFFLp5vgqimC%2BFgHzKKOa44a5VrRHpHcl8w4ufFwgY6pgFexunHLndfAk30od%2FRNi5UpqggIbaukeWIa2HYJk2i5FwUrmOH7P6PQa3yW0xDuEB2mDsvtXU34Pr0eycWXG8zZJhtK8mnIQf8qHpqGJSSThLa0a9gMQj8tBVrxevLJaVdYPkzOneWoc0GJTZTovLyeseW36iBcs%2BM0tTSiipsE9qves3d2wZPgzPfhS%2BmcId8XC41SwpQSvYLs63sILWj1tj5AoMw&X-Amz-Signature=47ff8805e458c530cc3a96f44a16741a6930a76f5b56801469adfdfaef354e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFZKYUR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAwWA4XrFoptfC3MZXHvwYy5iVaJ3B1kUg3JK%2BOiOMAAiBn%2FuWl%2BAfL8b%2BUbr382HNZCEhmNzr61SHPxKYjTu6kvyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpBE8tIqGbP%2FmN5XRKtwDep4XN3NAINxx9a71MVsJPd6p31Ei33baiyyAkYhlZhcPOKe6qtaqix9jUUKoS6uIU0rfCh3jcSEFbiGtPxTi0khTFEaM%2BXB1JGiRIo%2BUNPY5MlgPGkdSXa%2BX4ALkw1cCEBBQcpGozJYXK%2BA8GfSzoisC7k6nH%2BhiutX1tl7ruPCseXpBeP%2FBMQuXAhm5slntTdID5URk5LvAP2XyOh5j6ZoaaB72pLEW6UgNEB58XgkJTp1ujMk193FaV9o5FsMxT3Zr5EFPtVsZHW%2BA1FpHt7oqV4%2BA8BCZonQi2bm55Am4zjNBWP7Leh6bEq7QKRvL5HhTafDeUy%2BZpAhIU4TivSuRfWA6wLeeQPX3WBRK6szexozZgbeZEIakyAKXr%2BZqK49lDOP5qZK0vRcW6mUTGTjpkdNn%2BSo%2BdYE%2BZa8tt4iGO0XoV21u%2Bu5Bx0p00jaSoCfKeipMeKF%2F5s1OAKIm%2BBiDaarT23Bg%2BOF9ECBMazIDRQ4cJQYZTrtFQESITdkFB7yAkKc6y%2BlIgOIYTQJaOCxLQEFNzZ5wm2WUovwVjHL6c1Uh6Zt8C%2B7kENcK%2B4JTjt9urbiJLWxtRbNkU%2BmLpvB3F%2BFFLp5vgqimC%2BFgHzKKOa44a5VrRHpHcl8w4ufFwgY6pgFexunHLndfAk30od%2FRNi5UpqggIbaukeWIa2HYJk2i5FwUrmOH7P6PQa3yW0xDuEB2mDsvtXU34Pr0eycWXG8zZJhtK8mnIQf8qHpqGJSSThLa0a9gMQj8tBVrxevLJaVdYPkzOneWoc0GJTZTovLyeseW36iBcs%2BM0tTSiipsE9qves3d2wZPgzPfhS%2BmcId8XC41SwpQSvYLs63sILWj1tj5AoMw&X-Amz-Signature=8d3a3b3c6c16e1d49005a605a714e54fe3eb62f78d5779a357bd08b5d670fc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFZKYUR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAwWA4XrFoptfC3MZXHvwYy5iVaJ3B1kUg3JK%2BOiOMAAiBn%2FuWl%2BAfL8b%2BUbr382HNZCEhmNzr61SHPxKYjTu6kvyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpBE8tIqGbP%2FmN5XRKtwDep4XN3NAINxx9a71MVsJPd6p31Ei33baiyyAkYhlZhcPOKe6qtaqix9jUUKoS6uIU0rfCh3jcSEFbiGtPxTi0khTFEaM%2BXB1JGiRIo%2BUNPY5MlgPGkdSXa%2BX4ALkw1cCEBBQcpGozJYXK%2BA8GfSzoisC7k6nH%2BhiutX1tl7ruPCseXpBeP%2FBMQuXAhm5slntTdID5URk5LvAP2XyOh5j6ZoaaB72pLEW6UgNEB58XgkJTp1ujMk193FaV9o5FsMxT3Zr5EFPtVsZHW%2BA1FpHt7oqV4%2BA8BCZonQi2bm55Am4zjNBWP7Leh6bEq7QKRvL5HhTafDeUy%2BZpAhIU4TivSuRfWA6wLeeQPX3WBRK6szexozZgbeZEIakyAKXr%2BZqK49lDOP5qZK0vRcW6mUTGTjpkdNn%2BSo%2BdYE%2BZa8tt4iGO0XoV21u%2Bu5Bx0p00jaSoCfKeipMeKF%2F5s1OAKIm%2BBiDaarT23Bg%2BOF9ECBMazIDRQ4cJQYZTrtFQESITdkFB7yAkKc6y%2BlIgOIYTQJaOCxLQEFNzZ5wm2WUovwVjHL6c1Uh6Zt8C%2B7kENcK%2B4JTjt9urbiJLWxtRbNkU%2BmLpvB3F%2BFFLp5vgqimC%2BFgHzKKOa44a5VrRHpHcl8w4ufFwgY6pgFexunHLndfAk30od%2FRNi5UpqggIbaukeWIa2HYJk2i5FwUrmOH7P6PQa3yW0xDuEB2mDsvtXU34Pr0eycWXG8zZJhtK8mnIQf8qHpqGJSSThLa0a9gMQj8tBVrxevLJaVdYPkzOneWoc0GJTZTovLyeseW36iBcs%2BM0tTSiipsE9qves3d2wZPgzPfhS%2BmcId8XC41SwpQSvYLs63sILWj1tj5AoMw&X-Amz-Signature=3722c8cb089d60b038250a3aee2583cf66da20877bffc5dd55057b76999480f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFZKYUR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAwWA4XrFoptfC3MZXHvwYy5iVaJ3B1kUg3JK%2BOiOMAAiBn%2FuWl%2BAfL8b%2BUbr382HNZCEhmNzr61SHPxKYjTu6kvyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpBE8tIqGbP%2FmN5XRKtwDep4XN3NAINxx9a71MVsJPd6p31Ei33baiyyAkYhlZhcPOKe6qtaqix9jUUKoS6uIU0rfCh3jcSEFbiGtPxTi0khTFEaM%2BXB1JGiRIo%2BUNPY5MlgPGkdSXa%2BX4ALkw1cCEBBQcpGozJYXK%2BA8GfSzoisC7k6nH%2BhiutX1tl7ruPCseXpBeP%2FBMQuXAhm5slntTdID5URk5LvAP2XyOh5j6ZoaaB72pLEW6UgNEB58XgkJTp1ujMk193FaV9o5FsMxT3Zr5EFPtVsZHW%2BA1FpHt7oqV4%2BA8BCZonQi2bm55Am4zjNBWP7Leh6bEq7QKRvL5HhTafDeUy%2BZpAhIU4TivSuRfWA6wLeeQPX3WBRK6szexozZgbeZEIakyAKXr%2BZqK49lDOP5qZK0vRcW6mUTGTjpkdNn%2BSo%2BdYE%2BZa8tt4iGO0XoV21u%2Bu5Bx0p00jaSoCfKeipMeKF%2F5s1OAKIm%2BBiDaarT23Bg%2BOF9ECBMazIDRQ4cJQYZTrtFQESITdkFB7yAkKc6y%2BlIgOIYTQJaOCxLQEFNzZ5wm2WUovwVjHL6c1Uh6Zt8C%2B7kENcK%2B4JTjt9urbiJLWxtRbNkU%2BmLpvB3F%2BFFLp5vgqimC%2BFgHzKKOa44a5VrRHpHcl8w4ufFwgY6pgFexunHLndfAk30od%2FRNi5UpqggIbaukeWIa2HYJk2i5FwUrmOH7P6PQa3yW0xDuEB2mDsvtXU34Pr0eycWXG8zZJhtK8mnIQf8qHpqGJSSThLa0a9gMQj8tBVrxevLJaVdYPkzOneWoc0GJTZTovLyeseW36iBcs%2BM0tTSiipsE9qves3d2wZPgzPfhS%2BmcId8XC41SwpQSvYLs63sILWj1tj5AoMw&X-Amz-Signature=588e0880644fc3464d12f677acd72afe186ae24c03bb0ed0ab3053077a8312a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFZKYUR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAwWA4XrFoptfC3MZXHvwYy5iVaJ3B1kUg3JK%2BOiOMAAiBn%2FuWl%2BAfL8b%2BUbr382HNZCEhmNzr61SHPxKYjTu6kvyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpBE8tIqGbP%2FmN5XRKtwDep4XN3NAINxx9a71MVsJPd6p31Ei33baiyyAkYhlZhcPOKe6qtaqix9jUUKoS6uIU0rfCh3jcSEFbiGtPxTi0khTFEaM%2BXB1JGiRIo%2BUNPY5MlgPGkdSXa%2BX4ALkw1cCEBBQcpGozJYXK%2BA8GfSzoisC7k6nH%2BhiutX1tl7ruPCseXpBeP%2FBMQuXAhm5slntTdID5URk5LvAP2XyOh5j6ZoaaB72pLEW6UgNEB58XgkJTp1ujMk193FaV9o5FsMxT3Zr5EFPtVsZHW%2BA1FpHt7oqV4%2BA8BCZonQi2bm55Am4zjNBWP7Leh6bEq7QKRvL5HhTafDeUy%2BZpAhIU4TivSuRfWA6wLeeQPX3WBRK6szexozZgbeZEIakyAKXr%2BZqK49lDOP5qZK0vRcW6mUTGTjpkdNn%2BSo%2BdYE%2BZa8tt4iGO0XoV21u%2Bu5Bx0p00jaSoCfKeipMeKF%2F5s1OAKIm%2BBiDaarT23Bg%2BOF9ECBMazIDRQ4cJQYZTrtFQESITdkFB7yAkKc6y%2BlIgOIYTQJaOCxLQEFNzZ5wm2WUovwVjHL6c1Uh6Zt8C%2B7kENcK%2B4JTjt9urbiJLWxtRbNkU%2BmLpvB3F%2BFFLp5vgqimC%2BFgHzKKOa44a5VrRHpHcl8w4ufFwgY6pgFexunHLndfAk30od%2FRNi5UpqggIbaukeWIa2HYJk2i5FwUrmOH7P6PQa3yW0xDuEB2mDsvtXU34Pr0eycWXG8zZJhtK8mnIQf8qHpqGJSSThLa0a9gMQj8tBVrxevLJaVdYPkzOneWoc0GJTZTovLyeseW36iBcs%2BM0tTSiipsE9qves3d2wZPgzPfhS%2BmcId8XC41SwpQSvYLs63sILWj1tj5AoMw&X-Amz-Signature=41f84de1610c4fe999187cae92fc8183b13629d0001a9ba2a73ffc30ad4804fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFZKYUR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAwWA4XrFoptfC3MZXHvwYy5iVaJ3B1kUg3JK%2BOiOMAAiBn%2FuWl%2BAfL8b%2BUbr382HNZCEhmNzr61SHPxKYjTu6kvyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpBE8tIqGbP%2FmN5XRKtwDep4XN3NAINxx9a71MVsJPd6p31Ei33baiyyAkYhlZhcPOKe6qtaqix9jUUKoS6uIU0rfCh3jcSEFbiGtPxTi0khTFEaM%2BXB1JGiRIo%2BUNPY5MlgPGkdSXa%2BX4ALkw1cCEBBQcpGozJYXK%2BA8GfSzoisC7k6nH%2BhiutX1tl7ruPCseXpBeP%2FBMQuXAhm5slntTdID5URk5LvAP2XyOh5j6ZoaaB72pLEW6UgNEB58XgkJTp1ujMk193FaV9o5FsMxT3Zr5EFPtVsZHW%2BA1FpHt7oqV4%2BA8BCZonQi2bm55Am4zjNBWP7Leh6bEq7QKRvL5HhTafDeUy%2BZpAhIU4TivSuRfWA6wLeeQPX3WBRK6szexozZgbeZEIakyAKXr%2BZqK49lDOP5qZK0vRcW6mUTGTjpkdNn%2BSo%2BdYE%2BZa8tt4iGO0XoV21u%2Bu5Bx0p00jaSoCfKeipMeKF%2F5s1OAKIm%2BBiDaarT23Bg%2BOF9ECBMazIDRQ4cJQYZTrtFQESITdkFB7yAkKc6y%2BlIgOIYTQJaOCxLQEFNzZ5wm2WUovwVjHL6c1Uh6Zt8C%2B7kENcK%2B4JTjt9urbiJLWxtRbNkU%2BmLpvB3F%2BFFLp5vgqimC%2BFgHzKKOa44a5VrRHpHcl8w4ufFwgY6pgFexunHLndfAk30od%2FRNi5UpqggIbaukeWIa2HYJk2i5FwUrmOH7P6PQa3yW0xDuEB2mDsvtXU34Pr0eycWXG8zZJhtK8mnIQf8qHpqGJSSThLa0a9gMQj8tBVrxevLJaVdYPkzOneWoc0GJTZTovLyeseW36iBcs%2BM0tTSiipsE9qves3d2wZPgzPfhS%2BmcId8XC41SwpQSvYLs63sILWj1tj5AoMw&X-Amz-Signature=4c3a410d38dfca2d8e792771c8b5f936e2f8ad2b3c15edce3a4e8fb61a74fedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFZKYUR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAwWA4XrFoptfC3MZXHvwYy5iVaJ3B1kUg3JK%2BOiOMAAiBn%2FuWl%2BAfL8b%2BUbr382HNZCEhmNzr61SHPxKYjTu6kvyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpBE8tIqGbP%2FmN5XRKtwDep4XN3NAINxx9a71MVsJPd6p31Ei33baiyyAkYhlZhcPOKe6qtaqix9jUUKoS6uIU0rfCh3jcSEFbiGtPxTi0khTFEaM%2BXB1JGiRIo%2BUNPY5MlgPGkdSXa%2BX4ALkw1cCEBBQcpGozJYXK%2BA8GfSzoisC7k6nH%2BhiutX1tl7ruPCseXpBeP%2FBMQuXAhm5slntTdID5URk5LvAP2XyOh5j6ZoaaB72pLEW6UgNEB58XgkJTp1ujMk193FaV9o5FsMxT3Zr5EFPtVsZHW%2BA1FpHt7oqV4%2BA8BCZonQi2bm55Am4zjNBWP7Leh6bEq7QKRvL5HhTafDeUy%2BZpAhIU4TivSuRfWA6wLeeQPX3WBRK6szexozZgbeZEIakyAKXr%2BZqK49lDOP5qZK0vRcW6mUTGTjpkdNn%2BSo%2BdYE%2BZa8tt4iGO0XoV21u%2Bu5Bx0p00jaSoCfKeipMeKF%2F5s1OAKIm%2BBiDaarT23Bg%2BOF9ECBMazIDRQ4cJQYZTrtFQESITdkFB7yAkKc6y%2BlIgOIYTQJaOCxLQEFNzZ5wm2WUovwVjHL6c1Uh6Zt8C%2B7kENcK%2B4JTjt9urbiJLWxtRbNkU%2BmLpvB3F%2BFFLp5vgqimC%2BFgHzKKOa44a5VrRHpHcl8w4ufFwgY6pgFexunHLndfAk30od%2FRNi5UpqggIbaukeWIa2HYJk2i5FwUrmOH7P6PQa3yW0xDuEB2mDsvtXU34Pr0eycWXG8zZJhtK8mnIQf8qHpqGJSSThLa0a9gMQj8tBVrxevLJaVdYPkzOneWoc0GJTZTovLyeseW36iBcs%2BM0tTSiipsE9qves3d2wZPgzPfhS%2BmcId8XC41SwpQSvYLs63sILWj1tj5AoMw&X-Amz-Signature=0d9c42c655aecd8991532a1b18a12cd1979c322152c858d4cc78833e0650dde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFZKYUR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAwWA4XrFoptfC3MZXHvwYy5iVaJ3B1kUg3JK%2BOiOMAAiBn%2FuWl%2BAfL8b%2BUbr382HNZCEhmNzr61SHPxKYjTu6kvyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpBE8tIqGbP%2FmN5XRKtwDep4XN3NAINxx9a71MVsJPd6p31Ei33baiyyAkYhlZhcPOKe6qtaqix9jUUKoS6uIU0rfCh3jcSEFbiGtPxTi0khTFEaM%2BXB1JGiRIo%2BUNPY5MlgPGkdSXa%2BX4ALkw1cCEBBQcpGozJYXK%2BA8GfSzoisC7k6nH%2BhiutX1tl7ruPCseXpBeP%2FBMQuXAhm5slntTdID5URk5LvAP2XyOh5j6ZoaaB72pLEW6UgNEB58XgkJTp1ujMk193FaV9o5FsMxT3Zr5EFPtVsZHW%2BA1FpHt7oqV4%2BA8BCZonQi2bm55Am4zjNBWP7Leh6bEq7QKRvL5HhTafDeUy%2BZpAhIU4TivSuRfWA6wLeeQPX3WBRK6szexozZgbeZEIakyAKXr%2BZqK49lDOP5qZK0vRcW6mUTGTjpkdNn%2BSo%2BdYE%2BZa8tt4iGO0XoV21u%2Bu5Bx0p00jaSoCfKeipMeKF%2F5s1OAKIm%2BBiDaarT23Bg%2BOF9ECBMazIDRQ4cJQYZTrtFQESITdkFB7yAkKc6y%2BlIgOIYTQJaOCxLQEFNzZ5wm2WUovwVjHL6c1Uh6Zt8C%2B7kENcK%2B4JTjt9urbiJLWxtRbNkU%2BmLpvB3F%2BFFLp5vgqimC%2BFgHzKKOa44a5VrRHpHcl8w4ufFwgY6pgFexunHLndfAk30od%2FRNi5UpqggIbaukeWIa2HYJk2i5FwUrmOH7P6PQa3yW0xDuEB2mDsvtXU34Pr0eycWXG8zZJhtK8mnIQf8qHpqGJSSThLa0a9gMQj8tBVrxevLJaVdYPkzOneWoc0GJTZTovLyeseW36iBcs%2BM0tTSiipsE9qves3d2wZPgzPfhS%2BmcId8XC41SwpQSvYLs63sILWj1tj5AoMw&X-Amz-Signature=dba431921fe7354d55b62220bcbc4f47d6bd1bf1552844b6f9decea4790ef9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
