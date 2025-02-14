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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFNGDRJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAxJhiCeZavksQAHMnUKt3lyS6kBJ2oFyUA%2Bw6h%2BKY82AiB9McYh5sGiGlXKThbidCJ7RADhrBru5siAzFoGW%2BZJaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz%2FNhtVDapP8LJkNmKtwDFz9CHUNW4GNQ9rXGmHXXDr%2FQ97Nslk58mZm%2BNRlZEGKUxu%2BrICofSR9PktcxORXh35fSG6pKM0HJm6UElKWMLGm8%2FEjgqcX041WUAlRI0RQ2OdhBIKBD2C7OX67DS9YjnQvbHnx%2FWromdfl%2F9otcwxyjgrGqhr5I%2F2qBb2KtpvFKGmtTXA9AixyOgDKDfWknAoq51KNtWwIX6I4HQRDeN%2BGBfGQetUYfQoQhgRc5vaiC4%2Fg2cxlPXdq2AYTdk%2B%2FKG5jU%2FhDrk871s2S4w3RfvhOsvCxSGevv%2FDBKMV%2F4GpOXhR7w1%2FgvCtUtjvdkF0jVfMY%2FCeOiC48DlcnaaHM8yXuPRJFaspAq0JsNWnuDQekZ%2FLWfS1F3Hwd0fXDTHaFsKmJzKgw2%2B0%2Bur1cryEp6NO%2BHEUYKNu4rtHpLkPi%2B0%2FUxNfSRYZNWvK31DnUus1n%2F0%2FOizE3U%2BvQsclBPesV7IQMVWVxdjKjCpvafIzsT%2FIc8WI%2BjMHStuzOiYMXjDJ91tdxlR%2FxyFn1JQkTo3H8si1ucYfiNn4USltJ4A5hPM%2BQfMMDxEZrbRCfyotTzxf6%2BXP%2FubKC5ExhdFhpi%2BzqA4amgPaR%2F%2FGN%2FNdBsukHbediPToZxH3YM0rqnG9ww9eq8vQY6pgEajzhh%2B%2F7dwL7PfnNRQ5akhqb8DBQcWApwh1%2Fo242ghHOFEpmbPH3PjeldNICdZWvDrzkWjipk8jPICiMj%2Bg98MuBawt4dbF7nUVgp9qY9ofqKf5jSu5lAlzFzKC1mNi1tY6Sz9LvisoOkF%2B9JdGj7%2FHKwHAn6Xccqq2mVnYAxuFleIfLqVNCEyv9yUTfwyrpZQmsvifA6EWDHunb%2FfczHrMJEnmW7&X-Amz-Signature=a169faacda48afe9fead0e660e5e4c97a55c045e40d7bd93941b63c813250a35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFNGDRJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAxJhiCeZavksQAHMnUKt3lyS6kBJ2oFyUA%2Bw6h%2BKY82AiB9McYh5sGiGlXKThbidCJ7RADhrBru5siAzFoGW%2BZJaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz%2FNhtVDapP8LJkNmKtwDFz9CHUNW4GNQ9rXGmHXXDr%2FQ97Nslk58mZm%2BNRlZEGKUxu%2BrICofSR9PktcxORXh35fSG6pKM0HJm6UElKWMLGm8%2FEjgqcX041WUAlRI0RQ2OdhBIKBD2C7OX67DS9YjnQvbHnx%2FWromdfl%2F9otcwxyjgrGqhr5I%2F2qBb2KtpvFKGmtTXA9AixyOgDKDfWknAoq51KNtWwIX6I4HQRDeN%2BGBfGQetUYfQoQhgRc5vaiC4%2Fg2cxlPXdq2AYTdk%2B%2FKG5jU%2FhDrk871s2S4w3RfvhOsvCxSGevv%2FDBKMV%2F4GpOXhR7w1%2FgvCtUtjvdkF0jVfMY%2FCeOiC48DlcnaaHM8yXuPRJFaspAq0JsNWnuDQekZ%2FLWfS1F3Hwd0fXDTHaFsKmJzKgw2%2B0%2Bur1cryEp6NO%2BHEUYKNu4rtHpLkPi%2B0%2FUxNfSRYZNWvK31DnUus1n%2F0%2FOizE3U%2BvQsclBPesV7IQMVWVxdjKjCpvafIzsT%2FIc8WI%2BjMHStuzOiYMXjDJ91tdxlR%2FxyFn1JQkTo3H8si1ucYfiNn4USltJ4A5hPM%2BQfMMDxEZrbRCfyotTzxf6%2BXP%2FubKC5ExhdFhpi%2BzqA4amgPaR%2F%2FGN%2FNdBsukHbediPToZxH3YM0rqnG9ww9eq8vQY6pgEajzhh%2B%2F7dwL7PfnNRQ5akhqb8DBQcWApwh1%2Fo242ghHOFEpmbPH3PjeldNICdZWvDrzkWjipk8jPICiMj%2Bg98MuBawt4dbF7nUVgp9qY9ofqKf5jSu5lAlzFzKC1mNi1tY6Sz9LvisoOkF%2B9JdGj7%2FHKwHAn6Xccqq2mVnYAxuFleIfLqVNCEyv9yUTfwyrpZQmsvifA6EWDHunb%2FfczHrMJEnmW7&X-Amz-Signature=758cca73a3e895b89109864fc213047782e4378274ac184f56dc3683a8c716d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFNGDRJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAxJhiCeZavksQAHMnUKt3lyS6kBJ2oFyUA%2Bw6h%2BKY82AiB9McYh5sGiGlXKThbidCJ7RADhrBru5siAzFoGW%2BZJaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz%2FNhtVDapP8LJkNmKtwDFz9CHUNW4GNQ9rXGmHXXDr%2FQ97Nslk58mZm%2BNRlZEGKUxu%2BrICofSR9PktcxORXh35fSG6pKM0HJm6UElKWMLGm8%2FEjgqcX041WUAlRI0RQ2OdhBIKBD2C7OX67DS9YjnQvbHnx%2FWromdfl%2F9otcwxyjgrGqhr5I%2F2qBb2KtpvFKGmtTXA9AixyOgDKDfWknAoq51KNtWwIX6I4HQRDeN%2BGBfGQetUYfQoQhgRc5vaiC4%2Fg2cxlPXdq2AYTdk%2B%2FKG5jU%2FhDrk871s2S4w3RfvhOsvCxSGevv%2FDBKMV%2F4GpOXhR7w1%2FgvCtUtjvdkF0jVfMY%2FCeOiC48DlcnaaHM8yXuPRJFaspAq0JsNWnuDQekZ%2FLWfS1F3Hwd0fXDTHaFsKmJzKgw2%2B0%2Bur1cryEp6NO%2BHEUYKNu4rtHpLkPi%2B0%2FUxNfSRYZNWvK31DnUus1n%2F0%2FOizE3U%2BvQsclBPesV7IQMVWVxdjKjCpvafIzsT%2FIc8WI%2BjMHStuzOiYMXjDJ91tdxlR%2FxyFn1JQkTo3H8si1ucYfiNn4USltJ4A5hPM%2BQfMMDxEZrbRCfyotTzxf6%2BXP%2FubKC5ExhdFhpi%2BzqA4amgPaR%2F%2FGN%2FNdBsukHbediPToZxH3YM0rqnG9ww9eq8vQY6pgEajzhh%2B%2F7dwL7PfnNRQ5akhqb8DBQcWApwh1%2Fo242ghHOFEpmbPH3PjeldNICdZWvDrzkWjipk8jPICiMj%2Bg98MuBawt4dbF7nUVgp9qY9ofqKf5jSu5lAlzFzKC1mNi1tY6Sz9LvisoOkF%2B9JdGj7%2FHKwHAn6Xccqq2mVnYAxuFleIfLqVNCEyv9yUTfwyrpZQmsvifA6EWDHunb%2FfczHrMJEnmW7&X-Amz-Signature=881e64458d444d65d0354eff4c495fbd41f34e4135fe9b293c9bb173d08c9436&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFNGDRJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAxJhiCeZavksQAHMnUKt3lyS6kBJ2oFyUA%2Bw6h%2BKY82AiB9McYh5sGiGlXKThbidCJ7RADhrBru5siAzFoGW%2BZJaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz%2FNhtVDapP8LJkNmKtwDFz9CHUNW4GNQ9rXGmHXXDr%2FQ97Nslk58mZm%2BNRlZEGKUxu%2BrICofSR9PktcxORXh35fSG6pKM0HJm6UElKWMLGm8%2FEjgqcX041WUAlRI0RQ2OdhBIKBD2C7OX67DS9YjnQvbHnx%2FWromdfl%2F9otcwxyjgrGqhr5I%2F2qBb2KtpvFKGmtTXA9AixyOgDKDfWknAoq51KNtWwIX6I4HQRDeN%2BGBfGQetUYfQoQhgRc5vaiC4%2Fg2cxlPXdq2AYTdk%2B%2FKG5jU%2FhDrk871s2S4w3RfvhOsvCxSGevv%2FDBKMV%2F4GpOXhR7w1%2FgvCtUtjvdkF0jVfMY%2FCeOiC48DlcnaaHM8yXuPRJFaspAq0JsNWnuDQekZ%2FLWfS1F3Hwd0fXDTHaFsKmJzKgw2%2B0%2Bur1cryEp6NO%2BHEUYKNu4rtHpLkPi%2B0%2FUxNfSRYZNWvK31DnUus1n%2F0%2FOizE3U%2BvQsclBPesV7IQMVWVxdjKjCpvafIzsT%2FIc8WI%2BjMHStuzOiYMXjDJ91tdxlR%2FxyFn1JQkTo3H8si1ucYfiNn4USltJ4A5hPM%2BQfMMDxEZrbRCfyotTzxf6%2BXP%2FubKC5ExhdFhpi%2BzqA4amgPaR%2F%2FGN%2FNdBsukHbediPToZxH3YM0rqnG9ww9eq8vQY6pgEajzhh%2B%2F7dwL7PfnNRQ5akhqb8DBQcWApwh1%2Fo242ghHOFEpmbPH3PjeldNICdZWvDrzkWjipk8jPICiMj%2Bg98MuBawt4dbF7nUVgp9qY9ofqKf5jSu5lAlzFzKC1mNi1tY6Sz9LvisoOkF%2B9JdGj7%2FHKwHAn6Xccqq2mVnYAxuFleIfLqVNCEyv9yUTfwyrpZQmsvifA6EWDHunb%2FfczHrMJEnmW7&X-Amz-Signature=0c5114897d74c05916341a8f8784426195944103aff33e60058d18912395c648&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFNGDRJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAxJhiCeZavksQAHMnUKt3lyS6kBJ2oFyUA%2Bw6h%2BKY82AiB9McYh5sGiGlXKThbidCJ7RADhrBru5siAzFoGW%2BZJaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz%2FNhtVDapP8LJkNmKtwDFz9CHUNW4GNQ9rXGmHXXDr%2FQ97Nslk58mZm%2BNRlZEGKUxu%2BrICofSR9PktcxORXh35fSG6pKM0HJm6UElKWMLGm8%2FEjgqcX041WUAlRI0RQ2OdhBIKBD2C7OX67DS9YjnQvbHnx%2FWromdfl%2F9otcwxyjgrGqhr5I%2F2qBb2KtpvFKGmtTXA9AixyOgDKDfWknAoq51KNtWwIX6I4HQRDeN%2BGBfGQetUYfQoQhgRc5vaiC4%2Fg2cxlPXdq2AYTdk%2B%2FKG5jU%2FhDrk871s2S4w3RfvhOsvCxSGevv%2FDBKMV%2F4GpOXhR7w1%2FgvCtUtjvdkF0jVfMY%2FCeOiC48DlcnaaHM8yXuPRJFaspAq0JsNWnuDQekZ%2FLWfS1F3Hwd0fXDTHaFsKmJzKgw2%2B0%2Bur1cryEp6NO%2BHEUYKNu4rtHpLkPi%2B0%2FUxNfSRYZNWvK31DnUus1n%2F0%2FOizE3U%2BvQsclBPesV7IQMVWVxdjKjCpvafIzsT%2FIc8WI%2BjMHStuzOiYMXjDJ91tdxlR%2FxyFn1JQkTo3H8si1ucYfiNn4USltJ4A5hPM%2BQfMMDxEZrbRCfyotTzxf6%2BXP%2FubKC5ExhdFhpi%2BzqA4amgPaR%2F%2FGN%2FNdBsukHbediPToZxH3YM0rqnG9ww9eq8vQY6pgEajzhh%2B%2F7dwL7PfnNRQ5akhqb8DBQcWApwh1%2Fo242ghHOFEpmbPH3PjeldNICdZWvDrzkWjipk8jPICiMj%2Bg98MuBawt4dbF7nUVgp9qY9ofqKf5jSu5lAlzFzKC1mNi1tY6Sz9LvisoOkF%2B9JdGj7%2FHKwHAn6Xccqq2mVnYAxuFleIfLqVNCEyv9yUTfwyrpZQmsvifA6EWDHunb%2FfczHrMJEnmW7&X-Amz-Signature=352c5918b6442a2b9f36a33ce063721240ecc11bcdc7f9c718403f6412a25ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFNGDRJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAxJhiCeZavksQAHMnUKt3lyS6kBJ2oFyUA%2Bw6h%2BKY82AiB9McYh5sGiGlXKThbidCJ7RADhrBru5siAzFoGW%2BZJaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz%2FNhtVDapP8LJkNmKtwDFz9CHUNW4GNQ9rXGmHXXDr%2FQ97Nslk58mZm%2BNRlZEGKUxu%2BrICofSR9PktcxORXh35fSG6pKM0HJm6UElKWMLGm8%2FEjgqcX041WUAlRI0RQ2OdhBIKBD2C7OX67DS9YjnQvbHnx%2FWromdfl%2F9otcwxyjgrGqhr5I%2F2qBb2KtpvFKGmtTXA9AixyOgDKDfWknAoq51KNtWwIX6I4HQRDeN%2BGBfGQetUYfQoQhgRc5vaiC4%2Fg2cxlPXdq2AYTdk%2B%2FKG5jU%2FhDrk871s2S4w3RfvhOsvCxSGevv%2FDBKMV%2F4GpOXhR7w1%2FgvCtUtjvdkF0jVfMY%2FCeOiC48DlcnaaHM8yXuPRJFaspAq0JsNWnuDQekZ%2FLWfS1F3Hwd0fXDTHaFsKmJzKgw2%2B0%2Bur1cryEp6NO%2BHEUYKNu4rtHpLkPi%2B0%2FUxNfSRYZNWvK31DnUus1n%2F0%2FOizE3U%2BvQsclBPesV7IQMVWVxdjKjCpvafIzsT%2FIc8WI%2BjMHStuzOiYMXjDJ91tdxlR%2FxyFn1JQkTo3H8si1ucYfiNn4USltJ4A5hPM%2BQfMMDxEZrbRCfyotTzxf6%2BXP%2FubKC5ExhdFhpi%2BzqA4amgPaR%2F%2FGN%2FNdBsukHbediPToZxH3YM0rqnG9ww9eq8vQY6pgEajzhh%2B%2F7dwL7PfnNRQ5akhqb8DBQcWApwh1%2Fo242ghHOFEpmbPH3PjeldNICdZWvDrzkWjipk8jPICiMj%2Bg98MuBawt4dbF7nUVgp9qY9ofqKf5jSu5lAlzFzKC1mNi1tY6Sz9LvisoOkF%2B9JdGj7%2FHKwHAn6Xccqq2mVnYAxuFleIfLqVNCEyv9yUTfwyrpZQmsvifA6EWDHunb%2FfczHrMJEnmW7&X-Amz-Signature=adb5fd0f1645e338e6dab67cd7306c478ac7d8251173b9db98a98bf1310348a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFNGDRJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAxJhiCeZavksQAHMnUKt3lyS6kBJ2oFyUA%2Bw6h%2BKY82AiB9McYh5sGiGlXKThbidCJ7RADhrBru5siAzFoGW%2BZJaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz%2FNhtVDapP8LJkNmKtwDFz9CHUNW4GNQ9rXGmHXXDr%2FQ97Nslk58mZm%2BNRlZEGKUxu%2BrICofSR9PktcxORXh35fSG6pKM0HJm6UElKWMLGm8%2FEjgqcX041WUAlRI0RQ2OdhBIKBD2C7OX67DS9YjnQvbHnx%2FWromdfl%2F9otcwxyjgrGqhr5I%2F2qBb2KtpvFKGmtTXA9AixyOgDKDfWknAoq51KNtWwIX6I4HQRDeN%2BGBfGQetUYfQoQhgRc5vaiC4%2Fg2cxlPXdq2AYTdk%2B%2FKG5jU%2FhDrk871s2S4w3RfvhOsvCxSGevv%2FDBKMV%2F4GpOXhR7w1%2FgvCtUtjvdkF0jVfMY%2FCeOiC48DlcnaaHM8yXuPRJFaspAq0JsNWnuDQekZ%2FLWfS1F3Hwd0fXDTHaFsKmJzKgw2%2B0%2Bur1cryEp6NO%2BHEUYKNu4rtHpLkPi%2B0%2FUxNfSRYZNWvK31DnUus1n%2F0%2FOizE3U%2BvQsclBPesV7IQMVWVxdjKjCpvafIzsT%2FIc8WI%2BjMHStuzOiYMXjDJ91tdxlR%2FxyFn1JQkTo3H8si1ucYfiNn4USltJ4A5hPM%2BQfMMDxEZrbRCfyotTzxf6%2BXP%2FubKC5ExhdFhpi%2BzqA4amgPaR%2F%2FGN%2FNdBsukHbediPToZxH3YM0rqnG9ww9eq8vQY6pgEajzhh%2B%2F7dwL7PfnNRQ5akhqb8DBQcWApwh1%2Fo242ghHOFEpmbPH3PjeldNICdZWvDrzkWjipk8jPICiMj%2Bg98MuBawt4dbF7nUVgp9qY9ofqKf5jSu5lAlzFzKC1mNi1tY6Sz9LvisoOkF%2B9JdGj7%2FHKwHAn6Xccqq2mVnYAxuFleIfLqVNCEyv9yUTfwyrpZQmsvifA6EWDHunb%2FfczHrMJEnmW7&X-Amz-Signature=6b1c69c1f5b4711b3f803a9478d626d14d4491e8aa96a1e809e565b9518952a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFNGDRJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAxJhiCeZavksQAHMnUKt3lyS6kBJ2oFyUA%2Bw6h%2BKY82AiB9McYh5sGiGlXKThbidCJ7RADhrBru5siAzFoGW%2BZJaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz%2FNhtVDapP8LJkNmKtwDFz9CHUNW4GNQ9rXGmHXXDr%2FQ97Nslk58mZm%2BNRlZEGKUxu%2BrICofSR9PktcxORXh35fSG6pKM0HJm6UElKWMLGm8%2FEjgqcX041WUAlRI0RQ2OdhBIKBD2C7OX67DS9YjnQvbHnx%2FWromdfl%2F9otcwxyjgrGqhr5I%2F2qBb2KtpvFKGmtTXA9AixyOgDKDfWknAoq51KNtWwIX6I4HQRDeN%2BGBfGQetUYfQoQhgRc5vaiC4%2Fg2cxlPXdq2AYTdk%2B%2FKG5jU%2FhDrk871s2S4w3RfvhOsvCxSGevv%2FDBKMV%2F4GpOXhR7w1%2FgvCtUtjvdkF0jVfMY%2FCeOiC48DlcnaaHM8yXuPRJFaspAq0JsNWnuDQekZ%2FLWfS1F3Hwd0fXDTHaFsKmJzKgw2%2B0%2Bur1cryEp6NO%2BHEUYKNu4rtHpLkPi%2B0%2FUxNfSRYZNWvK31DnUus1n%2F0%2FOizE3U%2BvQsclBPesV7IQMVWVxdjKjCpvafIzsT%2FIc8WI%2BjMHStuzOiYMXjDJ91tdxlR%2FxyFn1JQkTo3H8si1ucYfiNn4USltJ4A5hPM%2BQfMMDxEZrbRCfyotTzxf6%2BXP%2FubKC5ExhdFhpi%2BzqA4amgPaR%2F%2FGN%2FNdBsukHbediPToZxH3YM0rqnG9ww9eq8vQY6pgEajzhh%2B%2F7dwL7PfnNRQ5akhqb8DBQcWApwh1%2Fo242ghHOFEpmbPH3PjeldNICdZWvDrzkWjipk8jPICiMj%2Bg98MuBawt4dbF7nUVgp9qY9ofqKf5jSu5lAlzFzKC1mNi1tY6Sz9LvisoOkF%2B9JdGj7%2FHKwHAn6Xccqq2mVnYAxuFleIfLqVNCEyv9yUTfwyrpZQmsvifA6EWDHunb%2FfczHrMJEnmW7&X-Amz-Signature=3be0f5cfd4fb2e84a30bdaa882a449e9ea6f12b71d1341c05a8ff5e17db80d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
