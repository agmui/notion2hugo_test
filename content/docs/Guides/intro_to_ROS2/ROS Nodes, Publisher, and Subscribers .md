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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTZ42NW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7wmya6XuNQXGlLLY1dlTNWnn3JoSxRX2DFNwgxtUXigIgdnWj7ZpEluUH3fUoQtHrsnUs3vCHXmTHxYbB3pArehAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjD98zTkNBVGd7KiCrcAxK1o5dCBDDJeE%2Fb5qK8K35Ytze01Ubgswuf%2F7ALV3%2B6pquBHH9CK%2FM3ugDF6wXJaAYyVEl1R6i10WaajAnStu28ptnN3GRX9e%2FQHgM%2BXZrGC1m85yJjP7hyfLXwJqsk9z80Iji6Bq21kfOAGDxNSe7YR7QGZTmbg6vUkMDtBE8NLnUuZ6b4QON6tXjqPSxE3983%2B7CvyMpDf4%2BNz3DSsQZVi9p27XqzLAhaGHVVL2cFIhK1RiBLThpDmUvE3bgMaTUiCHdzREXjBBb%2FEO4sDkC8W9T1IYYo09gb88wI3%2Fysej%2BBIdF4ShKTUdLKycQnaLNbi9ncP7Mphv8g3olIVroxgkTjdqZ6o%2FHG6IFKqHD0YTjWKSfZrMdLrpv4VOeZqUXGu3GEzxwKmKt07pLyX01kUUAxQE4eOFnp0JEJ8RKId%2FCxcXlwbDYuUHfIXJEwCh1%2Fr9E%2BC8CNlAdOPOFPBBVxQHcjDiWjLzmjOUq8yW0FYvaXNYNH6jR9zfjl5pIb7F1ffvHPOoALg0Wd5O3212vREQFSdLIStTv2cb4nIn2rZ4ft42U4ADX3MPmofeW92MBiz0WHE2s%2BusBvDAgsh7jBXA%2FpJgappB4RpHBtq5zM7Pa%2Fe%2BVaRWp9TwCyMPT%2BvsMGOqUBjlEGJGurG1FU4h6YyTwGFt0cIU5JWc1TXq67NrJlwrvoJ5j6u%2FoKWS3%2BI2KPatqphr%2Fdq0TK24p73plzV4Gf30tfjOYf2X6z7lDdTfoRTTYCaGvwzlh%2BVDje%2FjqUZJ4p3e4aujPy%2FApr9qrpMBUJgjMkYICM52Jeig5uXQuGNJI1CQ8kvua5jUCOmhqpS5Vh8lTHaflB5vtOI7XIEChi0BK%2BHabH&X-Amz-Signature=1817fa7de525993ae5db7f3bd7a8f03eb8633c7283de4c23920e9f36ce4d0031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTZ42NW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7wmya6XuNQXGlLLY1dlTNWnn3JoSxRX2DFNwgxtUXigIgdnWj7ZpEluUH3fUoQtHrsnUs3vCHXmTHxYbB3pArehAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjD98zTkNBVGd7KiCrcAxK1o5dCBDDJeE%2Fb5qK8K35Ytze01Ubgswuf%2F7ALV3%2B6pquBHH9CK%2FM3ugDF6wXJaAYyVEl1R6i10WaajAnStu28ptnN3GRX9e%2FQHgM%2BXZrGC1m85yJjP7hyfLXwJqsk9z80Iji6Bq21kfOAGDxNSe7YR7QGZTmbg6vUkMDtBE8NLnUuZ6b4QON6tXjqPSxE3983%2B7CvyMpDf4%2BNz3DSsQZVi9p27XqzLAhaGHVVL2cFIhK1RiBLThpDmUvE3bgMaTUiCHdzREXjBBb%2FEO4sDkC8W9T1IYYo09gb88wI3%2Fysej%2BBIdF4ShKTUdLKycQnaLNbi9ncP7Mphv8g3olIVroxgkTjdqZ6o%2FHG6IFKqHD0YTjWKSfZrMdLrpv4VOeZqUXGu3GEzxwKmKt07pLyX01kUUAxQE4eOFnp0JEJ8RKId%2FCxcXlwbDYuUHfIXJEwCh1%2Fr9E%2BC8CNlAdOPOFPBBVxQHcjDiWjLzmjOUq8yW0FYvaXNYNH6jR9zfjl5pIb7F1ffvHPOoALg0Wd5O3212vREQFSdLIStTv2cb4nIn2rZ4ft42U4ADX3MPmofeW92MBiz0WHE2s%2BusBvDAgsh7jBXA%2FpJgappB4RpHBtq5zM7Pa%2Fe%2BVaRWp9TwCyMPT%2BvsMGOqUBjlEGJGurG1FU4h6YyTwGFt0cIU5JWc1TXq67NrJlwrvoJ5j6u%2FoKWS3%2BI2KPatqphr%2Fdq0TK24p73plzV4Gf30tfjOYf2X6z7lDdTfoRTTYCaGvwzlh%2BVDje%2FjqUZJ4p3e4aujPy%2FApr9qrpMBUJgjMkYICM52Jeig5uXQuGNJI1CQ8kvua5jUCOmhqpS5Vh8lTHaflB5vtOI7XIEChi0BK%2BHabH&X-Amz-Signature=b560bf350d17b7d29ec500873b57642bc9e87e5e6d8670347a981a81d585b975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTZ42NW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7wmya6XuNQXGlLLY1dlTNWnn3JoSxRX2DFNwgxtUXigIgdnWj7ZpEluUH3fUoQtHrsnUs3vCHXmTHxYbB3pArehAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjD98zTkNBVGd7KiCrcAxK1o5dCBDDJeE%2Fb5qK8K35Ytze01Ubgswuf%2F7ALV3%2B6pquBHH9CK%2FM3ugDF6wXJaAYyVEl1R6i10WaajAnStu28ptnN3GRX9e%2FQHgM%2BXZrGC1m85yJjP7hyfLXwJqsk9z80Iji6Bq21kfOAGDxNSe7YR7QGZTmbg6vUkMDtBE8NLnUuZ6b4QON6tXjqPSxE3983%2B7CvyMpDf4%2BNz3DSsQZVi9p27XqzLAhaGHVVL2cFIhK1RiBLThpDmUvE3bgMaTUiCHdzREXjBBb%2FEO4sDkC8W9T1IYYo09gb88wI3%2Fysej%2BBIdF4ShKTUdLKycQnaLNbi9ncP7Mphv8g3olIVroxgkTjdqZ6o%2FHG6IFKqHD0YTjWKSfZrMdLrpv4VOeZqUXGu3GEzxwKmKt07pLyX01kUUAxQE4eOFnp0JEJ8RKId%2FCxcXlwbDYuUHfIXJEwCh1%2Fr9E%2BC8CNlAdOPOFPBBVxQHcjDiWjLzmjOUq8yW0FYvaXNYNH6jR9zfjl5pIb7F1ffvHPOoALg0Wd5O3212vREQFSdLIStTv2cb4nIn2rZ4ft42U4ADX3MPmofeW92MBiz0WHE2s%2BusBvDAgsh7jBXA%2FpJgappB4RpHBtq5zM7Pa%2Fe%2BVaRWp9TwCyMPT%2BvsMGOqUBjlEGJGurG1FU4h6YyTwGFt0cIU5JWc1TXq67NrJlwrvoJ5j6u%2FoKWS3%2BI2KPatqphr%2Fdq0TK24p73plzV4Gf30tfjOYf2X6z7lDdTfoRTTYCaGvwzlh%2BVDje%2FjqUZJ4p3e4aujPy%2FApr9qrpMBUJgjMkYICM52Jeig5uXQuGNJI1CQ8kvua5jUCOmhqpS5Vh8lTHaflB5vtOI7XIEChi0BK%2BHabH&X-Amz-Signature=6d029bff72465d3bf6047bf8dd970c2af357cec3275695f167349e0abaf079e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTZ42NW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7wmya6XuNQXGlLLY1dlTNWnn3JoSxRX2DFNwgxtUXigIgdnWj7ZpEluUH3fUoQtHrsnUs3vCHXmTHxYbB3pArehAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjD98zTkNBVGd7KiCrcAxK1o5dCBDDJeE%2Fb5qK8K35Ytze01Ubgswuf%2F7ALV3%2B6pquBHH9CK%2FM3ugDF6wXJaAYyVEl1R6i10WaajAnStu28ptnN3GRX9e%2FQHgM%2BXZrGC1m85yJjP7hyfLXwJqsk9z80Iji6Bq21kfOAGDxNSe7YR7QGZTmbg6vUkMDtBE8NLnUuZ6b4QON6tXjqPSxE3983%2B7CvyMpDf4%2BNz3DSsQZVi9p27XqzLAhaGHVVL2cFIhK1RiBLThpDmUvE3bgMaTUiCHdzREXjBBb%2FEO4sDkC8W9T1IYYo09gb88wI3%2Fysej%2BBIdF4ShKTUdLKycQnaLNbi9ncP7Mphv8g3olIVroxgkTjdqZ6o%2FHG6IFKqHD0YTjWKSfZrMdLrpv4VOeZqUXGu3GEzxwKmKt07pLyX01kUUAxQE4eOFnp0JEJ8RKId%2FCxcXlwbDYuUHfIXJEwCh1%2Fr9E%2BC8CNlAdOPOFPBBVxQHcjDiWjLzmjOUq8yW0FYvaXNYNH6jR9zfjl5pIb7F1ffvHPOoALg0Wd5O3212vREQFSdLIStTv2cb4nIn2rZ4ft42U4ADX3MPmofeW92MBiz0WHE2s%2BusBvDAgsh7jBXA%2FpJgappB4RpHBtq5zM7Pa%2Fe%2BVaRWp9TwCyMPT%2BvsMGOqUBjlEGJGurG1FU4h6YyTwGFt0cIU5JWc1TXq67NrJlwrvoJ5j6u%2FoKWS3%2BI2KPatqphr%2Fdq0TK24p73plzV4Gf30tfjOYf2X6z7lDdTfoRTTYCaGvwzlh%2BVDje%2FjqUZJ4p3e4aujPy%2FApr9qrpMBUJgjMkYICM52Jeig5uXQuGNJI1CQ8kvua5jUCOmhqpS5Vh8lTHaflB5vtOI7XIEChi0BK%2BHabH&X-Amz-Signature=3d775cebcf6c2f2237d0e79df43d2971222eb25d2883e4279d03cc680362dd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTZ42NW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7wmya6XuNQXGlLLY1dlTNWnn3JoSxRX2DFNwgxtUXigIgdnWj7ZpEluUH3fUoQtHrsnUs3vCHXmTHxYbB3pArehAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjD98zTkNBVGd7KiCrcAxK1o5dCBDDJeE%2Fb5qK8K35Ytze01Ubgswuf%2F7ALV3%2B6pquBHH9CK%2FM3ugDF6wXJaAYyVEl1R6i10WaajAnStu28ptnN3GRX9e%2FQHgM%2BXZrGC1m85yJjP7hyfLXwJqsk9z80Iji6Bq21kfOAGDxNSe7YR7QGZTmbg6vUkMDtBE8NLnUuZ6b4QON6tXjqPSxE3983%2B7CvyMpDf4%2BNz3DSsQZVi9p27XqzLAhaGHVVL2cFIhK1RiBLThpDmUvE3bgMaTUiCHdzREXjBBb%2FEO4sDkC8W9T1IYYo09gb88wI3%2Fysej%2BBIdF4ShKTUdLKycQnaLNbi9ncP7Mphv8g3olIVroxgkTjdqZ6o%2FHG6IFKqHD0YTjWKSfZrMdLrpv4VOeZqUXGu3GEzxwKmKt07pLyX01kUUAxQE4eOFnp0JEJ8RKId%2FCxcXlwbDYuUHfIXJEwCh1%2Fr9E%2BC8CNlAdOPOFPBBVxQHcjDiWjLzmjOUq8yW0FYvaXNYNH6jR9zfjl5pIb7F1ffvHPOoALg0Wd5O3212vREQFSdLIStTv2cb4nIn2rZ4ft42U4ADX3MPmofeW92MBiz0WHE2s%2BusBvDAgsh7jBXA%2FpJgappB4RpHBtq5zM7Pa%2Fe%2BVaRWp9TwCyMPT%2BvsMGOqUBjlEGJGurG1FU4h6YyTwGFt0cIU5JWc1TXq67NrJlwrvoJ5j6u%2FoKWS3%2BI2KPatqphr%2Fdq0TK24p73plzV4Gf30tfjOYf2X6z7lDdTfoRTTYCaGvwzlh%2BVDje%2FjqUZJ4p3e4aujPy%2FApr9qrpMBUJgjMkYICM52Jeig5uXQuGNJI1CQ8kvua5jUCOmhqpS5Vh8lTHaflB5vtOI7XIEChi0BK%2BHabH&X-Amz-Signature=fc42ce8e52a0f851ad5977b09f35b3724d9752def089d57c4fa1ed6a3181f595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTZ42NW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7wmya6XuNQXGlLLY1dlTNWnn3JoSxRX2DFNwgxtUXigIgdnWj7ZpEluUH3fUoQtHrsnUs3vCHXmTHxYbB3pArehAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjD98zTkNBVGd7KiCrcAxK1o5dCBDDJeE%2Fb5qK8K35Ytze01Ubgswuf%2F7ALV3%2B6pquBHH9CK%2FM3ugDF6wXJaAYyVEl1R6i10WaajAnStu28ptnN3GRX9e%2FQHgM%2BXZrGC1m85yJjP7hyfLXwJqsk9z80Iji6Bq21kfOAGDxNSe7YR7QGZTmbg6vUkMDtBE8NLnUuZ6b4QON6tXjqPSxE3983%2B7CvyMpDf4%2BNz3DSsQZVi9p27XqzLAhaGHVVL2cFIhK1RiBLThpDmUvE3bgMaTUiCHdzREXjBBb%2FEO4sDkC8W9T1IYYo09gb88wI3%2Fysej%2BBIdF4ShKTUdLKycQnaLNbi9ncP7Mphv8g3olIVroxgkTjdqZ6o%2FHG6IFKqHD0YTjWKSfZrMdLrpv4VOeZqUXGu3GEzxwKmKt07pLyX01kUUAxQE4eOFnp0JEJ8RKId%2FCxcXlwbDYuUHfIXJEwCh1%2Fr9E%2BC8CNlAdOPOFPBBVxQHcjDiWjLzmjOUq8yW0FYvaXNYNH6jR9zfjl5pIb7F1ffvHPOoALg0Wd5O3212vREQFSdLIStTv2cb4nIn2rZ4ft42U4ADX3MPmofeW92MBiz0WHE2s%2BusBvDAgsh7jBXA%2FpJgappB4RpHBtq5zM7Pa%2Fe%2BVaRWp9TwCyMPT%2BvsMGOqUBjlEGJGurG1FU4h6YyTwGFt0cIU5JWc1TXq67NrJlwrvoJ5j6u%2FoKWS3%2BI2KPatqphr%2Fdq0TK24p73plzV4Gf30tfjOYf2X6z7lDdTfoRTTYCaGvwzlh%2BVDje%2FjqUZJ4p3e4aujPy%2FApr9qrpMBUJgjMkYICM52Jeig5uXQuGNJI1CQ8kvua5jUCOmhqpS5Vh8lTHaflB5vtOI7XIEChi0BK%2BHabH&X-Amz-Signature=d7ae02ba39763742f19618415087ebf9df0f84725279f5ef69fd05135fb55a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTZ42NW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7wmya6XuNQXGlLLY1dlTNWnn3JoSxRX2DFNwgxtUXigIgdnWj7ZpEluUH3fUoQtHrsnUs3vCHXmTHxYbB3pArehAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjD98zTkNBVGd7KiCrcAxK1o5dCBDDJeE%2Fb5qK8K35Ytze01Ubgswuf%2F7ALV3%2B6pquBHH9CK%2FM3ugDF6wXJaAYyVEl1R6i10WaajAnStu28ptnN3GRX9e%2FQHgM%2BXZrGC1m85yJjP7hyfLXwJqsk9z80Iji6Bq21kfOAGDxNSe7YR7QGZTmbg6vUkMDtBE8NLnUuZ6b4QON6tXjqPSxE3983%2B7CvyMpDf4%2BNz3DSsQZVi9p27XqzLAhaGHVVL2cFIhK1RiBLThpDmUvE3bgMaTUiCHdzREXjBBb%2FEO4sDkC8W9T1IYYo09gb88wI3%2Fysej%2BBIdF4ShKTUdLKycQnaLNbi9ncP7Mphv8g3olIVroxgkTjdqZ6o%2FHG6IFKqHD0YTjWKSfZrMdLrpv4VOeZqUXGu3GEzxwKmKt07pLyX01kUUAxQE4eOFnp0JEJ8RKId%2FCxcXlwbDYuUHfIXJEwCh1%2Fr9E%2BC8CNlAdOPOFPBBVxQHcjDiWjLzmjOUq8yW0FYvaXNYNH6jR9zfjl5pIb7F1ffvHPOoALg0Wd5O3212vREQFSdLIStTv2cb4nIn2rZ4ft42U4ADX3MPmofeW92MBiz0WHE2s%2BusBvDAgsh7jBXA%2FpJgappB4RpHBtq5zM7Pa%2Fe%2BVaRWp9TwCyMPT%2BvsMGOqUBjlEGJGurG1FU4h6YyTwGFt0cIU5JWc1TXq67NrJlwrvoJ5j6u%2FoKWS3%2BI2KPatqphr%2Fdq0TK24p73plzV4Gf30tfjOYf2X6z7lDdTfoRTTYCaGvwzlh%2BVDje%2FjqUZJ4p3e4aujPy%2FApr9qrpMBUJgjMkYICM52Jeig5uXQuGNJI1CQ8kvua5jUCOmhqpS5Vh8lTHaflB5vtOI7XIEChi0BK%2BHabH&X-Amz-Signature=ce5d1a638442f2c2c99a9d0573737d39118b1990d88f2f6db26b734c7dc7a735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTZ42NW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7wmya6XuNQXGlLLY1dlTNWnn3JoSxRX2DFNwgxtUXigIgdnWj7ZpEluUH3fUoQtHrsnUs3vCHXmTHxYbB3pArehAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjD98zTkNBVGd7KiCrcAxK1o5dCBDDJeE%2Fb5qK8K35Ytze01Ubgswuf%2F7ALV3%2B6pquBHH9CK%2FM3ugDF6wXJaAYyVEl1R6i10WaajAnStu28ptnN3GRX9e%2FQHgM%2BXZrGC1m85yJjP7hyfLXwJqsk9z80Iji6Bq21kfOAGDxNSe7YR7QGZTmbg6vUkMDtBE8NLnUuZ6b4QON6tXjqPSxE3983%2B7CvyMpDf4%2BNz3DSsQZVi9p27XqzLAhaGHVVL2cFIhK1RiBLThpDmUvE3bgMaTUiCHdzREXjBBb%2FEO4sDkC8W9T1IYYo09gb88wI3%2Fysej%2BBIdF4ShKTUdLKycQnaLNbi9ncP7Mphv8g3olIVroxgkTjdqZ6o%2FHG6IFKqHD0YTjWKSfZrMdLrpv4VOeZqUXGu3GEzxwKmKt07pLyX01kUUAxQE4eOFnp0JEJ8RKId%2FCxcXlwbDYuUHfIXJEwCh1%2Fr9E%2BC8CNlAdOPOFPBBVxQHcjDiWjLzmjOUq8yW0FYvaXNYNH6jR9zfjl5pIb7F1ffvHPOoALg0Wd5O3212vREQFSdLIStTv2cb4nIn2rZ4ft42U4ADX3MPmofeW92MBiz0WHE2s%2BusBvDAgsh7jBXA%2FpJgappB4RpHBtq5zM7Pa%2Fe%2BVaRWp9TwCyMPT%2BvsMGOqUBjlEGJGurG1FU4h6YyTwGFt0cIU5JWc1TXq67NrJlwrvoJ5j6u%2FoKWS3%2BI2KPatqphr%2Fdq0TK24p73plzV4Gf30tfjOYf2X6z7lDdTfoRTTYCaGvwzlh%2BVDje%2FjqUZJ4p3e4aujPy%2FApr9qrpMBUJgjMkYICM52Jeig5uXQuGNJI1CQ8kvua5jUCOmhqpS5Vh8lTHaflB5vtOI7XIEChi0BK%2BHabH&X-Amz-Signature=cb9d605616424ddf3b546ddf9094e5ce51d9dfd5f0b964cfe18f9543724eb1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
