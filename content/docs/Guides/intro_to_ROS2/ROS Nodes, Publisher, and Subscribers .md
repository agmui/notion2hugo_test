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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJSOQZO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDgPtazb5oec%2B81AA5Wmg98DCAz6zi8YNYetoNlRipYsAiAUUkQMz0j348hDdjBtHdgXCdJdk%2Bl3FAB2G4qakyXvOyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNe9raOAOHRXXxDC%2BKtwDT%2Bo6LK7RsWQz3x3GWwFl%2F5ol5LFRJaRuOXJZAQvjsIXqNpwOuySR2CMdvzMwT6D8w5ncE29wt%2FjCCrHUTVIjWY%2FT%2FmPvI4FmJHKg0%2BkWt22UcFbjYoH0Ek85uKWV%2Bh7yR1Xo3b8t2QgvCrZoKd3iz9VnVKjGq2aGpDNWsmXlAMdQGA%2BuSEDt8lfAF%2Fg7J9yyf66HwN2HSIda39jAhcTPnt12EjrLWNOoLHMQSmhrtxYNRajYwSKNmVb9anILGkf%2F3%2BPySultz%2B49uyWrnY%2FJFT0h4nKQKpDGUhUGdCJDoU%2BHvhXCL9ul70tGBmi9b%2FnS5w5VyC0XzpxDCMAIRHVCLteAnk%2FikufNz15otuBMYmYhsWVlX5HnryPU7xSAYn04l2Rw0G0ZPL3Ns5DI0jNa3mm3AywWGO%2F0igQh6FhsKh30Jhqf%2BXMgZ3WExGLJQdWhcctfidu1nTSRKBy%2FnYeyYOT91wXJjhpn0wvOV7EA1i%2BhNaTtOWpwaApn3j%2FvJTUiaDemTRnnA9KWFCKdKIMBfs2DBvS59F%2FU9dfCqAxqAJOKEKcyHP%2FNXtb3rbs3x9eMgay56oxyZ%2Bi3Xh36qPnealURdQsjflxFz%2FOQBM%2FFi8Xwyexc%2FPAhHIKQbt4wgOCcvwY6pgHN5zfQyzVARYcDiTpaLYMEMXNiCz8%2FuvpYRTEYu3FTajm5OktKbvGLCb%2B2OGXMj6CW%2B0JHvacSFdM3bT%2FY1vVSJyGKepp1qyWTtAXrdVr%2BHPWhJZ82PqM%2F%2Fb3SOFB%2B1jNuDtcU8VVNLzZ6TsoxTNwLFH6wgagpOmFxL4fpOPr16uQa2momso%2FVEPFwF4iHLGVPJs%2FvLJew%2BHVT8G%2FhSryFsSq%2B%2FhjF&X-Amz-Signature=efcc92288c4af9dee611cea9b137bd4d5202391b04512f50de212c4d9a252e27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJSOQZO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDgPtazb5oec%2B81AA5Wmg98DCAz6zi8YNYetoNlRipYsAiAUUkQMz0j348hDdjBtHdgXCdJdk%2Bl3FAB2G4qakyXvOyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNe9raOAOHRXXxDC%2BKtwDT%2Bo6LK7RsWQz3x3GWwFl%2F5ol5LFRJaRuOXJZAQvjsIXqNpwOuySR2CMdvzMwT6D8w5ncE29wt%2FjCCrHUTVIjWY%2FT%2FmPvI4FmJHKg0%2BkWt22UcFbjYoH0Ek85uKWV%2Bh7yR1Xo3b8t2QgvCrZoKd3iz9VnVKjGq2aGpDNWsmXlAMdQGA%2BuSEDt8lfAF%2Fg7J9yyf66HwN2HSIda39jAhcTPnt12EjrLWNOoLHMQSmhrtxYNRajYwSKNmVb9anILGkf%2F3%2BPySultz%2B49uyWrnY%2FJFT0h4nKQKpDGUhUGdCJDoU%2BHvhXCL9ul70tGBmi9b%2FnS5w5VyC0XzpxDCMAIRHVCLteAnk%2FikufNz15otuBMYmYhsWVlX5HnryPU7xSAYn04l2Rw0G0ZPL3Ns5DI0jNa3mm3AywWGO%2F0igQh6FhsKh30Jhqf%2BXMgZ3WExGLJQdWhcctfidu1nTSRKBy%2FnYeyYOT91wXJjhpn0wvOV7EA1i%2BhNaTtOWpwaApn3j%2FvJTUiaDemTRnnA9KWFCKdKIMBfs2DBvS59F%2FU9dfCqAxqAJOKEKcyHP%2FNXtb3rbs3x9eMgay56oxyZ%2Bi3Xh36qPnealURdQsjflxFz%2FOQBM%2FFi8Xwyexc%2FPAhHIKQbt4wgOCcvwY6pgHN5zfQyzVARYcDiTpaLYMEMXNiCz8%2FuvpYRTEYu3FTajm5OktKbvGLCb%2B2OGXMj6CW%2B0JHvacSFdM3bT%2FY1vVSJyGKepp1qyWTtAXrdVr%2BHPWhJZ82PqM%2F%2Fb3SOFB%2B1jNuDtcU8VVNLzZ6TsoxTNwLFH6wgagpOmFxL4fpOPr16uQa2momso%2FVEPFwF4iHLGVPJs%2FvLJew%2BHVT8G%2FhSryFsSq%2B%2FhjF&X-Amz-Signature=606e7e1d12aaa98de6286d182751b88acda8cbf31e42d848223e9f0f6f467c75&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJSOQZO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDgPtazb5oec%2B81AA5Wmg98DCAz6zi8YNYetoNlRipYsAiAUUkQMz0j348hDdjBtHdgXCdJdk%2Bl3FAB2G4qakyXvOyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNe9raOAOHRXXxDC%2BKtwDT%2Bo6LK7RsWQz3x3GWwFl%2F5ol5LFRJaRuOXJZAQvjsIXqNpwOuySR2CMdvzMwT6D8w5ncE29wt%2FjCCrHUTVIjWY%2FT%2FmPvI4FmJHKg0%2BkWt22UcFbjYoH0Ek85uKWV%2Bh7yR1Xo3b8t2QgvCrZoKd3iz9VnVKjGq2aGpDNWsmXlAMdQGA%2BuSEDt8lfAF%2Fg7J9yyf66HwN2HSIda39jAhcTPnt12EjrLWNOoLHMQSmhrtxYNRajYwSKNmVb9anILGkf%2F3%2BPySultz%2B49uyWrnY%2FJFT0h4nKQKpDGUhUGdCJDoU%2BHvhXCL9ul70tGBmi9b%2FnS5w5VyC0XzpxDCMAIRHVCLteAnk%2FikufNz15otuBMYmYhsWVlX5HnryPU7xSAYn04l2Rw0G0ZPL3Ns5DI0jNa3mm3AywWGO%2F0igQh6FhsKh30Jhqf%2BXMgZ3WExGLJQdWhcctfidu1nTSRKBy%2FnYeyYOT91wXJjhpn0wvOV7EA1i%2BhNaTtOWpwaApn3j%2FvJTUiaDemTRnnA9KWFCKdKIMBfs2DBvS59F%2FU9dfCqAxqAJOKEKcyHP%2FNXtb3rbs3x9eMgay56oxyZ%2Bi3Xh36qPnealURdQsjflxFz%2FOQBM%2FFi8Xwyexc%2FPAhHIKQbt4wgOCcvwY6pgHN5zfQyzVARYcDiTpaLYMEMXNiCz8%2FuvpYRTEYu3FTajm5OktKbvGLCb%2B2OGXMj6CW%2B0JHvacSFdM3bT%2FY1vVSJyGKepp1qyWTtAXrdVr%2BHPWhJZ82PqM%2F%2Fb3SOFB%2B1jNuDtcU8VVNLzZ6TsoxTNwLFH6wgagpOmFxL4fpOPr16uQa2momso%2FVEPFwF4iHLGVPJs%2FvLJew%2BHVT8G%2FhSryFsSq%2B%2FhjF&X-Amz-Signature=d877c4a4b41dc3be70e212c9679a63d9eb5ab544a39ac2362e428189dfd1c69b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJSOQZO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDgPtazb5oec%2B81AA5Wmg98DCAz6zi8YNYetoNlRipYsAiAUUkQMz0j348hDdjBtHdgXCdJdk%2Bl3FAB2G4qakyXvOyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNe9raOAOHRXXxDC%2BKtwDT%2Bo6LK7RsWQz3x3GWwFl%2F5ol5LFRJaRuOXJZAQvjsIXqNpwOuySR2CMdvzMwT6D8w5ncE29wt%2FjCCrHUTVIjWY%2FT%2FmPvI4FmJHKg0%2BkWt22UcFbjYoH0Ek85uKWV%2Bh7yR1Xo3b8t2QgvCrZoKd3iz9VnVKjGq2aGpDNWsmXlAMdQGA%2BuSEDt8lfAF%2Fg7J9yyf66HwN2HSIda39jAhcTPnt12EjrLWNOoLHMQSmhrtxYNRajYwSKNmVb9anILGkf%2F3%2BPySultz%2B49uyWrnY%2FJFT0h4nKQKpDGUhUGdCJDoU%2BHvhXCL9ul70tGBmi9b%2FnS5w5VyC0XzpxDCMAIRHVCLteAnk%2FikufNz15otuBMYmYhsWVlX5HnryPU7xSAYn04l2Rw0G0ZPL3Ns5DI0jNa3mm3AywWGO%2F0igQh6FhsKh30Jhqf%2BXMgZ3WExGLJQdWhcctfidu1nTSRKBy%2FnYeyYOT91wXJjhpn0wvOV7EA1i%2BhNaTtOWpwaApn3j%2FvJTUiaDemTRnnA9KWFCKdKIMBfs2DBvS59F%2FU9dfCqAxqAJOKEKcyHP%2FNXtb3rbs3x9eMgay56oxyZ%2Bi3Xh36qPnealURdQsjflxFz%2FOQBM%2FFi8Xwyexc%2FPAhHIKQbt4wgOCcvwY6pgHN5zfQyzVARYcDiTpaLYMEMXNiCz8%2FuvpYRTEYu3FTajm5OktKbvGLCb%2B2OGXMj6CW%2B0JHvacSFdM3bT%2FY1vVSJyGKepp1qyWTtAXrdVr%2BHPWhJZ82PqM%2F%2Fb3SOFB%2B1jNuDtcU8VVNLzZ6TsoxTNwLFH6wgagpOmFxL4fpOPr16uQa2momso%2FVEPFwF4iHLGVPJs%2FvLJew%2BHVT8G%2FhSryFsSq%2B%2FhjF&X-Amz-Signature=d39702212caab8242b2197f86ba035f24399a5eda1e26766a05c2cd62f3d2b82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJSOQZO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDgPtazb5oec%2B81AA5Wmg98DCAz6zi8YNYetoNlRipYsAiAUUkQMz0j348hDdjBtHdgXCdJdk%2Bl3FAB2G4qakyXvOyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNe9raOAOHRXXxDC%2BKtwDT%2Bo6LK7RsWQz3x3GWwFl%2F5ol5LFRJaRuOXJZAQvjsIXqNpwOuySR2CMdvzMwT6D8w5ncE29wt%2FjCCrHUTVIjWY%2FT%2FmPvI4FmJHKg0%2BkWt22UcFbjYoH0Ek85uKWV%2Bh7yR1Xo3b8t2QgvCrZoKd3iz9VnVKjGq2aGpDNWsmXlAMdQGA%2BuSEDt8lfAF%2Fg7J9yyf66HwN2HSIda39jAhcTPnt12EjrLWNOoLHMQSmhrtxYNRajYwSKNmVb9anILGkf%2F3%2BPySultz%2B49uyWrnY%2FJFT0h4nKQKpDGUhUGdCJDoU%2BHvhXCL9ul70tGBmi9b%2FnS5w5VyC0XzpxDCMAIRHVCLteAnk%2FikufNz15otuBMYmYhsWVlX5HnryPU7xSAYn04l2Rw0G0ZPL3Ns5DI0jNa3mm3AywWGO%2F0igQh6FhsKh30Jhqf%2BXMgZ3WExGLJQdWhcctfidu1nTSRKBy%2FnYeyYOT91wXJjhpn0wvOV7EA1i%2BhNaTtOWpwaApn3j%2FvJTUiaDemTRnnA9KWFCKdKIMBfs2DBvS59F%2FU9dfCqAxqAJOKEKcyHP%2FNXtb3rbs3x9eMgay56oxyZ%2Bi3Xh36qPnealURdQsjflxFz%2FOQBM%2FFi8Xwyexc%2FPAhHIKQbt4wgOCcvwY6pgHN5zfQyzVARYcDiTpaLYMEMXNiCz8%2FuvpYRTEYu3FTajm5OktKbvGLCb%2B2OGXMj6CW%2B0JHvacSFdM3bT%2FY1vVSJyGKepp1qyWTtAXrdVr%2BHPWhJZ82PqM%2F%2Fb3SOFB%2B1jNuDtcU8VVNLzZ6TsoxTNwLFH6wgagpOmFxL4fpOPr16uQa2momso%2FVEPFwF4iHLGVPJs%2FvLJew%2BHVT8G%2FhSryFsSq%2B%2FhjF&X-Amz-Signature=28a2790f68f82cabe3d314ac4260ca06d54895c694bafc4ca9865b15771f15b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJSOQZO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDgPtazb5oec%2B81AA5Wmg98DCAz6zi8YNYetoNlRipYsAiAUUkQMz0j348hDdjBtHdgXCdJdk%2Bl3FAB2G4qakyXvOyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNe9raOAOHRXXxDC%2BKtwDT%2Bo6LK7RsWQz3x3GWwFl%2F5ol5LFRJaRuOXJZAQvjsIXqNpwOuySR2CMdvzMwT6D8w5ncE29wt%2FjCCrHUTVIjWY%2FT%2FmPvI4FmJHKg0%2BkWt22UcFbjYoH0Ek85uKWV%2Bh7yR1Xo3b8t2QgvCrZoKd3iz9VnVKjGq2aGpDNWsmXlAMdQGA%2BuSEDt8lfAF%2Fg7J9yyf66HwN2HSIda39jAhcTPnt12EjrLWNOoLHMQSmhrtxYNRajYwSKNmVb9anILGkf%2F3%2BPySultz%2B49uyWrnY%2FJFT0h4nKQKpDGUhUGdCJDoU%2BHvhXCL9ul70tGBmi9b%2FnS5w5VyC0XzpxDCMAIRHVCLteAnk%2FikufNz15otuBMYmYhsWVlX5HnryPU7xSAYn04l2Rw0G0ZPL3Ns5DI0jNa3mm3AywWGO%2F0igQh6FhsKh30Jhqf%2BXMgZ3WExGLJQdWhcctfidu1nTSRKBy%2FnYeyYOT91wXJjhpn0wvOV7EA1i%2BhNaTtOWpwaApn3j%2FvJTUiaDemTRnnA9KWFCKdKIMBfs2DBvS59F%2FU9dfCqAxqAJOKEKcyHP%2FNXtb3rbs3x9eMgay56oxyZ%2Bi3Xh36qPnealURdQsjflxFz%2FOQBM%2FFi8Xwyexc%2FPAhHIKQbt4wgOCcvwY6pgHN5zfQyzVARYcDiTpaLYMEMXNiCz8%2FuvpYRTEYu3FTajm5OktKbvGLCb%2B2OGXMj6CW%2B0JHvacSFdM3bT%2FY1vVSJyGKepp1qyWTtAXrdVr%2BHPWhJZ82PqM%2F%2Fb3SOFB%2B1jNuDtcU8VVNLzZ6TsoxTNwLFH6wgagpOmFxL4fpOPr16uQa2momso%2FVEPFwF4iHLGVPJs%2FvLJew%2BHVT8G%2FhSryFsSq%2B%2FhjF&X-Amz-Signature=9de8996b51989aa0bfb36027a35c040b90ae7baa6356f176668ac12561d04248&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJSOQZO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDgPtazb5oec%2B81AA5Wmg98DCAz6zi8YNYetoNlRipYsAiAUUkQMz0j348hDdjBtHdgXCdJdk%2Bl3FAB2G4qakyXvOyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNe9raOAOHRXXxDC%2BKtwDT%2Bo6LK7RsWQz3x3GWwFl%2F5ol5LFRJaRuOXJZAQvjsIXqNpwOuySR2CMdvzMwT6D8w5ncE29wt%2FjCCrHUTVIjWY%2FT%2FmPvI4FmJHKg0%2BkWt22UcFbjYoH0Ek85uKWV%2Bh7yR1Xo3b8t2QgvCrZoKd3iz9VnVKjGq2aGpDNWsmXlAMdQGA%2BuSEDt8lfAF%2Fg7J9yyf66HwN2HSIda39jAhcTPnt12EjrLWNOoLHMQSmhrtxYNRajYwSKNmVb9anILGkf%2F3%2BPySultz%2B49uyWrnY%2FJFT0h4nKQKpDGUhUGdCJDoU%2BHvhXCL9ul70tGBmi9b%2FnS5w5VyC0XzpxDCMAIRHVCLteAnk%2FikufNz15otuBMYmYhsWVlX5HnryPU7xSAYn04l2Rw0G0ZPL3Ns5DI0jNa3mm3AywWGO%2F0igQh6FhsKh30Jhqf%2BXMgZ3WExGLJQdWhcctfidu1nTSRKBy%2FnYeyYOT91wXJjhpn0wvOV7EA1i%2BhNaTtOWpwaApn3j%2FvJTUiaDemTRnnA9KWFCKdKIMBfs2DBvS59F%2FU9dfCqAxqAJOKEKcyHP%2FNXtb3rbs3x9eMgay56oxyZ%2Bi3Xh36qPnealURdQsjflxFz%2FOQBM%2FFi8Xwyexc%2FPAhHIKQbt4wgOCcvwY6pgHN5zfQyzVARYcDiTpaLYMEMXNiCz8%2FuvpYRTEYu3FTajm5OktKbvGLCb%2B2OGXMj6CW%2B0JHvacSFdM3bT%2FY1vVSJyGKepp1qyWTtAXrdVr%2BHPWhJZ82PqM%2F%2Fb3SOFB%2B1jNuDtcU8VVNLzZ6TsoxTNwLFH6wgagpOmFxL4fpOPr16uQa2momso%2FVEPFwF4iHLGVPJs%2FvLJew%2BHVT8G%2FhSryFsSq%2B%2FhjF&X-Amz-Signature=e26dc7529433bea946da6e5cfa5610242898995dad7cd20a9c8f14bfd9253c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJSOQZO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDgPtazb5oec%2B81AA5Wmg98DCAz6zi8YNYetoNlRipYsAiAUUkQMz0j348hDdjBtHdgXCdJdk%2Bl3FAB2G4qakyXvOyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMNe9raOAOHRXXxDC%2BKtwDT%2Bo6LK7RsWQz3x3GWwFl%2F5ol5LFRJaRuOXJZAQvjsIXqNpwOuySR2CMdvzMwT6D8w5ncE29wt%2FjCCrHUTVIjWY%2FT%2FmPvI4FmJHKg0%2BkWt22UcFbjYoH0Ek85uKWV%2Bh7yR1Xo3b8t2QgvCrZoKd3iz9VnVKjGq2aGpDNWsmXlAMdQGA%2BuSEDt8lfAF%2Fg7J9yyf66HwN2HSIda39jAhcTPnt12EjrLWNOoLHMQSmhrtxYNRajYwSKNmVb9anILGkf%2F3%2BPySultz%2B49uyWrnY%2FJFT0h4nKQKpDGUhUGdCJDoU%2BHvhXCL9ul70tGBmi9b%2FnS5w5VyC0XzpxDCMAIRHVCLteAnk%2FikufNz15otuBMYmYhsWVlX5HnryPU7xSAYn04l2Rw0G0ZPL3Ns5DI0jNa3mm3AywWGO%2F0igQh6FhsKh30Jhqf%2BXMgZ3WExGLJQdWhcctfidu1nTSRKBy%2FnYeyYOT91wXJjhpn0wvOV7EA1i%2BhNaTtOWpwaApn3j%2FvJTUiaDemTRnnA9KWFCKdKIMBfs2DBvS59F%2FU9dfCqAxqAJOKEKcyHP%2FNXtb3rbs3x9eMgay56oxyZ%2Bi3Xh36qPnealURdQsjflxFz%2FOQBM%2FFi8Xwyexc%2FPAhHIKQbt4wgOCcvwY6pgHN5zfQyzVARYcDiTpaLYMEMXNiCz8%2FuvpYRTEYu3FTajm5OktKbvGLCb%2B2OGXMj6CW%2B0JHvacSFdM3bT%2FY1vVSJyGKepp1qyWTtAXrdVr%2BHPWhJZ82PqM%2F%2Fb3SOFB%2B1jNuDtcU8VVNLzZ6TsoxTNwLFH6wgagpOmFxL4fpOPr16uQa2momso%2FVEPFwF4iHLGVPJs%2FvLJew%2BHVT8G%2FhSryFsSq%2B%2FhjF&X-Amz-Signature=82dc69177280cdbfec2e43db034357029457e22650b5f7b7b9a772f0d4a0327f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
