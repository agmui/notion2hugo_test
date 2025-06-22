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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJA6YNW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNocuiufuhA5P%2F%2FMT367eOs%2BCv2klvvxJK1KWPK8NdcwIhALrpiFGfWlPtrA1rwG%2BFLzuJVOaejHXyxiPQlz%2BQKDt%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbhYqqr2oZTNFLMS4q3AOtWBIgo%2FgooQMiT9MQ7nKQaQQyXHcXncMDUbQdLC1cliTYPYTqHZXFqgA8yMKDaBvHHwky5%2FihHFQutdsq%2Fhnyd2NAbRHiFo1RD86HTqILkGdfx1pBwY5h5b0FGvvTO4hVTizFHPGh5%2BHx5TaOJQvfFZo026FL1KP0avNuuvM3hci1zrylk0kAIAtPeaZ7Wlod9zMUJKMPQXODMWYuqhkzS%2B6tZDlNv32LvYHdKzq5dnWYNAE1zV%2FEBQ%2F1KRtlvf1gXaJAoScnMVTqpT%2FVdckLLYQLXoFQyC8YEgrokpb1pdZJieQjO8WdwcrKPY3UNleodFsAZ4UJ4zdCxnnLAD5hQoLXka6lmamQEhTkJLr5rF9hvMB1nmA%2F3U4mM%2Ftm8l54hD3xd8Vm8HB7a75g0LnnRMgTRZB51GsCq0djO4GD%2FuHuahNH5CpgRpQvYKrnESHAjDvKsLL3p6EphDBccFXkvJNoL2kXhok2%2Brc62RJZwrispXrI%2FBTauAc1iIR1%2Fnrxb%2FhPNlKjlQZIxVxTb4trqfnUl4HfZ7rQXIivd2WMCpD98Nnm87CkgRUOKQBTJdI55JGieCOqZDfPt%2BhD%2F3AfC%2FftpHIsGVn4zSsdLJVoI0ENKdLKX4iGLZDsfTCKiN3CBjqkARNoT7lY27LRZ3ED8QFC5HBYVuUuVVbSNIVlMwLlNMaZx5WwVEbG7lT0SciZpNowNk33DB8Ca9rF09BzqmOR0OWUjnglY7YeFuByoobJjBdoSR%2FJeF5tD%2Bl6rYYIjQTbTqg95sA8i72WXzwVdncF%2BPM0%2Bdnqo3nIuM4UroWklOWituJEe50TyvSbo%2FjtDyPmLfqealX3aIxyDqQwOSgUP5yIoCwo&X-Amz-Signature=5c19fe2af8a385243189ed144b2d1cf9101b8957715039e4d2da8b3d21725354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJA6YNW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNocuiufuhA5P%2F%2FMT367eOs%2BCv2klvvxJK1KWPK8NdcwIhALrpiFGfWlPtrA1rwG%2BFLzuJVOaejHXyxiPQlz%2BQKDt%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbhYqqr2oZTNFLMS4q3AOtWBIgo%2FgooQMiT9MQ7nKQaQQyXHcXncMDUbQdLC1cliTYPYTqHZXFqgA8yMKDaBvHHwky5%2FihHFQutdsq%2Fhnyd2NAbRHiFo1RD86HTqILkGdfx1pBwY5h5b0FGvvTO4hVTizFHPGh5%2BHx5TaOJQvfFZo026FL1KP0avNuuvM3hci1zrylk0kAIAtPeaZ7Wlod9zMUJKMPQXODMWYuqhkzS%2B6tZDlNv32LvYHdKzq5dnWYNAE1zV%2FEBQ%2F1KRtlvf1gXaJAoScnMVTqpT%2FVdckLLYQLXoFQyC8YEgrokpb1pdZJieQjO8WdwcrKPY3UNleodFsAZ4UJ4zdCxnnLAD5hQoLXka6lmamQEhTkJLr5rF9hvMB1nmA%2F3U4mM%2Ftm8l54hD3xd8Vm8HB7a75g0LnnRMgTRZB51GsCq0djO4GD%2FuHuahNH5CpgRpQvYKrnESHAjDvKsLL3p6EphDBccFXkvJNoL2kXhok2%2Brc62RJZwrispXrI%2FBTauAc1iIR1%2Fnrxb%2FhPNlKjlQZIxVxTb4trqfnUl4HfZ7rQXIivd2WMCpD98Nnm87CkgRUOKQBTJdI55JGieCOqZDfPt%2BhD%2F3AfC%2FftpHIsGVn4zSsdLJVoI0ENKdLKX4iGLZDsfTCKiN3CBjqkARNoT7lY27LRZ3ED8QFC5HBYVuUuVVbSNIVlMwLlNMaZx5WwVEbG7lT0SciZpNowNk33DB8Ca9rF09BzqmOR0OWUjnglY7YeFuByoobJjBdoSR%2FJeF5tD%2Bl6rYYIjQTbTqg95sA8i72WXzwVdncF%2BPM0%2Bdnqo3nIuM4UroWklOWituJEe50TyvSbo%2FjtDyPmLfqealX3aIxyDqQwOSgUP5yIoCwo&X-Amz-Signature=bc74d690d75c439dde6f150b6b85520659eb4f6e690a24c1d4d3d77d1fa71d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJA6YNW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNocuiufuhA5P%2F%2FMT367eOs%2BCv2klvvxJK1KWPK8NdcwIhALrpiFGfWlPtrA1rwG%2BFLzuJVOaejHXyxiPQlz%2BQKDt%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbhYqqr2oZTNFLMS4q3AOtWBIgo%2FgooQMiT9MQ7nKQaQQyXHcXncMDUbQdLC1cliTYPYTqHZXFqgA8yMKDaBvHHwky5%2FihHFQutdsq%2Fhnyd2NAbRHiFo1RD86HTqILkGdfx1pBwY5h5b0FGvvTO4hVTizFHPGh5%2BHx5TaOJQvfFZo026FL1KP0avNuuvM3hci1zrylk0kAIAtPeaZ7Wlod9zMUJKMPQXODMWYuqhkzS%2B6tZDlNv32LvYHdKzq5dnWYNAE1zV%2FEBQ%2F1KRtlvf1gXaJAoScnMVTqpT%2FVdckLLYQLXoFQyC8YEgrokpb1pdZJieQjO8WdwcrKPY3UNleodFsAZ4UJ4zdCxnnLAD5hQoLXka6lmamQEhTkJLr5rF9hvMB1nmA%2F3U4mM%2Ftm8l54hD3xd8Vm8HB7a75g0LnnRMgTRZB51GsCq0djO4GD%2FuHuahNH5CpgRpQvYKrnESHAjDvKsLL3p6EphDBccFXkvJNoL2kXhok2%2Brc62RJZwrispXrI%2FBTauAc1iIR1%2Fnrxb%2FhPNlKjlQZIxVxTb4trqfnUl4HfZ7rQXIivd2WMCpD98Nnm87CkgRUOKQBTJdI55JGieCOqZDfPt%2BhD%2F3AfC%2FftpHIsGVn4zSsdLJVoI0ENKdLKX4iGLZDsfTCKiN3CBjqkARNoT7lY27LRZ3ED8QFC5HBYVuUuVVbSNIVlMwLlNMaZx5WwVEbG7lT0SciZpNowNk33DB8Ca9rF09BzqmOR0OWUjnglY7YeFuByoobJjBdoSR%2FJeF5tD%2Bl6rYYIjQTbTqg95sA8i72WXzwVdncF%2BPM0%2Bdnqo3nIuM4UroWklOWituJEe50TyvSbo%2FjtDyPmLfqealX3aIxyDqQwOSgUP5yIoCwo&X-Amz-Signature=25f370cf6c82496d55e7a3f02fff4876633f68d7cac8a2e900c005f82baf6748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJA6YNW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNocuiufuhA5P%2F%2FMT367eOs%2BCv2klvvxJK1KWPK8NdcwIhALrpiFGfWlPtrA1rwG%2BFLzuJVOaejHXyxiPQlz%2BQKDt%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbhYqqr2oZTNFLMS4q3AOtWBIgo%2FgooQMiT9MQ7nKQaQQyXHcXncMDUbQdLC1cliTYPYTqHZXFqgA8yMKDaBvHHwky5%2FihHFQutdsq%2Fhnyd2NAbRHiFo1RD86HTqILkGdfx1pBwY5h5b0FGvvTO4hVTizFHPGh5%2BHx5TaOJQvfFZo026FL1KP0avNuuvM3hci1zrylk0kAIAtPeaZ7Wlod9zMUJKMPQXODMWYuqhkzS%2B6tZDlNv32LvYHdKzq5dnWYNAE1zV%2FEBQ%2F1KRtlvf1gXaJAoScnMVTqpT%2FVdckLLYQLXoFQyC8YEgrokpb1pdZJieQjO8WdwcrKPY3UNleodFsAZ4UJ4zdCxnnLAD5hQoLXka6lmamQEhTkJLr5rF9hvMB1nmA%2F3U4mM%2Ftm8l54hD3xd8Vm8HB7a75g0LnnRMgTRZB51GsCq0djO4GD%2FuHuahNH5CpgRpQvYKrnESHAjDvKsLL3p6EphDBccFXkvJNoL2kXhok2%2Brc62RJZwrispXrI%2FBTauAc1iIR1%2Fnrxb%2FhPNlKjlQZIxVxTb4trqfnUl4HfZ7rQXIivd2WMCpD98Nnm87CkgRUOKQBTJdI55JGieCOqZDfPt%2BhD%2F3AfC%2FftpHIsGVn4zSsdLJVoI0ENKdLKX4iGLZDsfTCKiN3CBjqkARNoT7lY27LRZ3ED8QFC5HBYVuUuVVbSNIVlMwLlNMaZx5WwVEbG7lT0SciZpNowNk33DB8Ca9rF09BzqmOR0OWUjnglY7YeFuByoobJjBdoSR%2FJeF5tD%2Bl6rYYIjQTbTqg95sA8i72WXzwVdncF%2BPM0%2Bdnqo3nIuM4UroWklOWituJEe50TyvSbo%2FjtDyPmLfqealX3aIxyDqQwOSgUP5yIoCwo&X-Amz-Signature=e7b07f55c554fb0d2b93646fe329ecf787dabb577e01ef51ecffad9c1ad92c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJA6YNW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNocuiufuhA5P%2F%2FMT367eOs%2BCv2klvvxJK1KWPK8NdcwIhALrpiFGfWlPtrA1rwG%2BFLzuJVOaejHXyxiPQlz%2BQKDt%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbhYqqr2oZTNFLMS4q3AOtWBIgo%2FgooQMiT9MQ7nKQaQQyXHcXncMDUbQdLC1cliTYPYTqHZXFqgA8yMKDaBvHHwky5%2FihHFQutdsq%2Fhnyd2NAbRHiFo1RD86HTqILkGdfx1pBwY5h5b0FGvvTO4hVTizFHPGh5%2BHx5TaOJQvfFZo026FL1KP0avNuuvM3hci1zrylk0kAIAtPeaZ7Wlod9zMUJKMPQXODMWYuqhkzS%2B6tZDlNv32LvYHdKzq5dnWYNAE1zV%2FEBQ%2F1KRtlvf1gXaJAoScnMVTqpT%2FVdckLLYQLXoFQyC8YEgrokpb1pdZJieQjO8WdwcrKPY3UNleodFsAZ4UJ4zdCxnnLAD5hQoLXka6lmamQEhTkJLr5rF9hvMB1nmA%2F3U4mM%2Ftm8l54hD3xd8Vm8HB7a75g0LnnRMgTRZB51GsCq0djO4GD%2FuHuahNH5CpgRpQvYKrnESHAjDvKsLL3p6EphDBccFXkvJNoL2kXhok2%2Brc62RJZwrispXrI%2FBTauAc1iIR1%2Fnrxb%2FhPNlKjlQZIxVxTb4trqfnUl4HfZ7rQXIivd2WMCpD98Nnm87CkgRUOKQBTJdI55JGieCOqZDfPt%2BhD%2F3AfC%2FftpHIsGVn4zSsdLJVoI0ENKdLKX4iGLZDsfTCKiN3CBjqkARNoT7lY27LRZ3ED8QFC5HBYVuUuVVbSNIVlMwLlNMaZx5WwVEbG7lT0SciZpNowNk33DB8Ca9rF09BzqmOR0OWUjnglY7YeFuByoobJjBdoSR%2FJeF5tD%2Bl6rYYIjQTbTqg95sA8i72WXzwVdncF%2BPM0%2Bdnqo3nIuM4UroWklOWituJEe50TyvSbo%2FjtDyPmLfqealX3aIxyDqQwOSgUP5yIoCwo&X-Amz-Signature=ce42e87ad19611208819630868ca337f594c17abec6896122b1bccc90302b6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJA6YNW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNocuiufuhA5P%2F%2FMT367eOs%2BCv2klvvxJK1KWPK8NdcwIhALrpiFGfWlPtrA1rwG%2BFLzuJVOaejHXyxiPQlz%2BQKDt%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbhYqqr2oZTNFLMS4q3AOtWBIgo%2FgooQMiT9MQ7nKQaQQyXHcXncMDUbQdLC1cliTYPYTqHZXFqgA8yMKDaBvHHwky5%2FihHFQutdsq%2Fhnyd2NAbRHiFo1RD86HTqILkGdfx1pBwY5h5b0FGvvTO4hVTizFHPGh5%2BHx5TaOJQvfFZo026FL1KP0avNuuvM3hci1zrylk0kAIAtPeaZ7Wlod9zMUJKMPQXODMWYuqhkzS%2B6tZDlNv32LvYHdKzq5dnWYNAE1zV%2FEBQ%2F1KRtlvf1gXaJAoScnMVTqpT%2FVdckLLYQLXoFQyC8YEgrokpb1pdZJieQjO8WdwcrKPY3UNleodFsAZ4UJ4zdCxnnLAD5hQoLXka6lmamQEhTkJLr5rF9hvMB1nmA%2F3U4mM%2Ftm8l54hD3xd8Vm8HB7a75g0LnnRMgTRZB51GsCq0djO4GD%2FuHuahNH5CpgRpQvYKrnESHAjDvKsLL3p6EphDBccFXkvJNoL2kXhok2%2Brc62RJZwrispXrI%2FBTauAc1iIR1%2Fnrxb%2FhPNlKjlQZIxVxTb4trqfnUl4HfZ7rQXIivd2WMCpD98Nnm87CkgRUOKQBTJdI55JGieCOqZDfPt%2BhD%2F3AfC%2FftpHIsGVn4zSsdLJVoI0ENKdLKX4iGLZDsfTCKiN3CBjqkARNoT7lY27LRZ3ED8QFC5HBYVuUuVVbSNIVlMwLlNMaZx5WwVEbG7lT0SciZpNowNk33DB8Ca9rF09BzqmOR0OWUjnglY7YeFuByoobJjBdoSR%2FJeF5tD%2Bl6rYYIjQTbTqg95sA8i72WXzwVdncF%2BPM0%2Bdnqo3nIuM4UroWklOWituJEe50TyvSbo%2FjtDyPmLfqealX3aIxyDqQwOSgUP5yIoCwo&X-Amz-Signature=61d95c0a7625891a5574469ed684088e41012906187ec08d3e08749ac6339629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJA6YNW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNocuiufuhA5P%2F%2FMT367eOs%2BCv2klvvxJK1KWPK8NdcwIhALrpiFGfWlPtrA1rwG%2BFLzuJVOaejHXyxiPQlz%2BQKDt%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbhYqqr2oZTNFLMS4q3AOtWBIgo%2FgooQMiT9MQ7nKQaQQyXHcXncMDUbQdLC1cliTYPYTqHZXFqgA8yMKDaBvHHwky5%2FihHFQutdsq%2Fhnyd2NAbRHiFo1RD86HTqILkGdfx1pBwY5h5b0FGvvTO4hVTizFHPGh5%2BHx5TaOJQvfFZo026FL1KP0avNuuvM3hci1zrylk0kAIAtPeaZ7Wlod9zMUJKMPQXODMWYuqhkzS%2B6tZDlNv32LvYHdKzq5dnWYNAE1zV%2FEBQ%2F1KRtlvf1gXaJAoScnMVTqpT%2FVdckLLYQLXoFQyC8YEgrokpb1pdZJieQjO8WdwcrKPY3UNleodFsAZ4UJ4zdCxnnLAD5hQoLXka6lmamQEhTkJLr5rF9hvMB1nmA%2F3U4mM%2Ftm8l54hD3xd8Vm8HB7a75g0LnnRMgTRZB51GsCq0djO4GD%2FuHuahNH5CpgRpQvYKrnESHAjDvKsLL3p6EphDBccFXkvJNoL2kXhok2%2Brc62RJZwrispXrI%2FBTauAc1iIR1%2Fnrxb%2FhPNlKjlQZIxVxTb4trqfnUl4HfZ7rQXIivd2WMCpD98Nnm87CkgRUOKQBTJdI55JGieCOqZDfPt%2BhD%2F3AfC%2FftpHIsGVn4zSsdLJVoI0ENKdLKX4iGLZDsfTCKiN3CBjqkARNoT7lY27LRZ3ED8QFC5HBYVuUuVVbSNIVlMwLlNMaZx5WwVEbG7lT0SciZpNowNk33DB8Ca9rF09BzqmOR0OWUjnglY7YeFuByoobJjBdoSR%2FJeF5tD%2Bl6rYYIjQTbTqg95sA8i72WXzwVdncF%2BPM0%2Bdnqo3nIuM4UroWklOWituJEe50TyvSbo%2FjtDyPmLfqealX3aIxyDqQwOSgUP5yIoCwo&X-Amz-Signature=e2bcf3719e46285e4a8b29aac25cff20948f094e27b3e487f0cb4a6add6440ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJA6YNW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNocuiufuhA5P%2F%2FMT367eOs%2BCv2klvvxJK1KWPK8NdcwIhALrpiFGfWlPtrA1rwG%2BFLzuJVOaejHXyxiPQlz%2BQKDt%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbhYqqr2oZTNFLMS4q3AOtWBIgo%2FgooQMiT9MQ7nKQaQQyXHcXncMDUbQdLC1cliTYPYTqHZXFqgA8yMKDaBvHHwky5%2FihHFQutdsq%2Fhnyd2NAbRHiFo1RD86HTqILkGdfx1pBwY5h5b0FGvvTO4hVTizFHPGh5%2BHx5TaOJQvfFZo026FL1KP0avNuuvM3hci1zrylk0kAIAtPeaZ7Wlod9zMUJKMPQXODMWYuqhkzS%2B6tZDlNv32LvYHdKzq5dnWYNAE1zV%2FEBQ%2F1KRtlvf1gXaJAoScnMVTqpT%2FVdckLLYQLXoFQyC8YEgrokpb1pdZJieQjO8WdwcrKPY3UNleodFsAZ4UJ4zdCxnnLAD5hQoLXka6lmamQEhTkJLr5rF9hvMB1nmA%2F3U4mM%2Ftm8l54hD3xd8Vm8HB7a75g0LnnRMgTRZB51GsCq0djO4GD%2FuHuahNH5CpgRpQvYKrnESHAjDvKsLL3p6EphDBccFXkvJNoL2kXhok2%2Brc62RJZwrispXrI%2FBTauAc1iIR1%2Fnrxb%2FhPNlKjlQZIxVxTb4trqfnUl4HfZ7rQXIivd2WMCpD98Nnm87CkgRUOKQBTJdI55JGieCOqZDfPt%2BhD%2F3AfC%2FftpHIsGVn4zSsdLJVoI0ENKdLKX4iGLZDsfTCKiN3CBjqkARNoT7lY27LRZ3ED8QFC5HBYVuUuVVbSNIVlMwLlNMaZx5WwVEbG7lT0SciZpNowNk33DB8Ca9rF09BzqmOR0OWUjnglY7YeFuByoobJjBdoSR%2FJeF5tD%2Bl6rYYIjQTbTqg95sA8i72WXzwVdncF%2BPM0%2Bdnqo3nIuM4UroWklOWituJEe50TyvSbo%2FjtDyPmLfqealX3aIxyDqQwOSgUP5yIoCwo&X-Amz-Signature=8cdba3b4da1b27b0eefc631ea2f19577b3513d7b560b73dae60d38796b4239fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
