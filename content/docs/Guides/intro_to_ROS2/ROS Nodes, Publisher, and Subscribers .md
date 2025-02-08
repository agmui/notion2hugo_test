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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIL6VTC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICqn%2BEwT%2FpCVAOFIaftKgfbbQYV%2BjkZaGTcHq%2BJgvUB4AiEAsYwIJfOn0vd80%2F7hURvvrERVf2%2Ftg9r0lZ5oKE0EBZYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5aqHVd33CtppHuZCrcA0mY%2BiB%2FPvKz6MM8%2F%2F4fhWwpf%2FfmuskvmRM74Kn4G%2B4GyZCXoW%2F5j81BVp5kVVIReBzbRqo1fwi2OWc0gIz6an9MouvqMnsKy7%2B468wjL1V1s1zSglLH54J834YCgUoZFaacS9KxNGhygukODT6wTafzgTjzvCFP3midEg27IxroYc7neBWp71xpPDIG1ceRECyEUWo507GCnLdxHYPxMhTx0YTmW2tz56jEgf%2Fs%2BLEfNJ%2FnjfX%2BMO%2FYUUs0TGFdpL%2BCXImD%2F62prEPh%2BmZw7wlP9Xlrm%2FkHw3uKuUivfZ8oGPo48npKDvR9Xuz6rNP9yQy7FokcJsDHCs0vd%2B67BVHXF9WQryxIoH%2FDxl7abXLGugbH2k%2BTBUvhxbPI3nxS6hMQekgRJdYoQT6ANQ2ytoG7k8lI%2B4Y6YxJ23URRAFTVzJjINbqVzKoMG6E7rAvJJma%2B0uf7PIhwOgX9mzk6ctMOconh6mfGmQh6YvQ8k6CHJoT4axy6Viz9zIGmwlthgEdurLhuCPYd504gJ4i79Ty%2BI4qTdTS4YtT3p0f0HJxeeWOcfiRjglmZvnS6tnsBRyVAD3FSNl68bqcRfbsapLm%2FATm4yXG0CZ0yqV3592tcxOR1x6Oetg%2Bhtz3fMIrxm70GOqUBfmIwanY5UvcQU7pbPjs%2B8sQL6tzp%2FgwMf6RM7GSHLV0gVWaLJQZyKiJHEHT7XY%2F0tPIPUKC%2FqeRoMM4NFtmPT9OH802bhBShoTvg0XtLO%2Birz63tsJCE193jOE%2BCY0r5dE%2BbOwsASdL7Qs%2FC8r7LVjNwGCvh4UPioI7lvKAA8Rx7Ui9NycF8s5YPEiVZzef%2Bj%2BRsVPXFQYz6RkchR9%2Ft1z1r4y4N&X-Amz-Signature=5cfbcbe9d2f7d2604a799135a035a00127d273081edef6043f5675285ff56f09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIL6VTC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICqn%2BEwT%2FpCVAOFIaftKgfbbQYV%2BjkZaGTcHq%2BJgvUB4AiEAsYwIJfOn0vd80%2F7hURvvrERVf2%2Ftg9r0lZ5oKE0EBZYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5aqHVd33CtppHuZCrcA0mY%2BiB%2FPvKz6MM8%2F%2F4fhWwpf%2FfmuskvmRM74Kn4G%2B4GyZCXoW%2F5j81BVp5kVVIReBzbRqo1fwi2OWc0gIz6an9MouvqMnsKy7%2B468wjL1V1s1zSglLH54J834YCgUoZFaacS9KxNGhygukODT6wTafzgTjzvCFP3midEg27IxroYc7neBWp71xpPDIG1ceRECyEUWo507GCnLdxHYPxMhTx0YTmW2tz56jEgf%2Fs%2BLEfNJ%2FnjfX%2BMO%2FYUUs0TGFdpL%2BCXImD%2F62prEPh%2BmZw7wlP9Xlrm%2FkHw3uKuUivfZ8oGPo48npKDvR9Xuz6rNP9yQy7FokcJsDHCs0vd%2B67BVHXF9WQryxIoH%2FDxl7abXLGugbH2k%2BTBUvhxbPI3nxS6hMQekgRJdYoQT6ANQ2ytoG7k8lI%2B4Y6YxJ23URRAFTVzJjINbqVzKoMG6E7rAvJJma%2B0uf7PIhwOgX9mzk6ctMOconh6mfGmQh6YvQ8k6CHJoT4axy6Viz9zIGmwlthgEdurLhuCPYd504gJ4i79Ty%2BI4qTdTS4YtT3p0f0HJxeeWOcfiRjglmZvnS6tnsBRyVAD3FSNl68bqcRfbsapLm%2FATm4yXG0CZ0yqV3592tcxOR1x6Oetg%2Bhtz3fMIrxm70GOqUBfmIwanY5UvcQU7pbPjs%2B8sQL6tzp%2FgwMf6RM7GSHLV0gVWaLJQZyKiJHEHT7XY%2F0tPIPUKC%2FqeRoMM4NFtmPT9OH802bhBShoTvg0XtLO%2Birz63tsJCE193jOE%2BCY0r5dE%2BbOwsASdL7Qs%2FC8r7LVjNwGCvh4UPioI7lvKAA8Rx7Ui9NycF8s5YPEiVZzef%2Bj%2BRsVPXFQYz6RkchR9%2Ft1z1r4y4N&X-Amz-Signature=e0187c94032dc306dc827b16f5df5ed9361d1aa4842a8ad3bfbb7bd72b0a77b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIL6VTC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICqn%2BEwT%2FpCVAOFIaftKgfbbQYV%2BjkZaGTcHq%2BJgvUB4AiEAsYwIJfOn0vd80%2F7hURvvrERVf2%2Ftg9r0lZ5oKE0EBZYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5aqHVd33CtppHuZCrcA0mY%2BiB%2FPvKz6MM8%2F%2F4fhWwpf%2FfmuskvmRM74Kn4G%2B4GyZCXoW%2F5j81BVp5kVVIReBzbRqo1fwi2OWc0gIz6an9MouvqMnsKy7%2B468wjL1V1s1zSglLH54J834YCgUoZFaacS9KxNGhygukODT6wTafzgTjzvCFP3midEg27IxroYc7neBWp71xpPDIG1ceRECyEUWo507GCnLdxHYPxMhTx0YTmW2tz56jEgf%2Fs%2BLEfNJ%2FnjfX%2BMO%2FYUUs0TGFdpL%2BCXImD%2F62prEPh%2BmZw7wlP9Xlrm%2FkHw3uKuUivfZ8oGPo48npKDvR9Xuz6rNP9yQy7FokcJsDHCs0vd%2B67BVHXF9WQryxIoH%2FDxl7abXLGugbH2k%2BTBUvhxbPI3nxS6hMQekgRJdYoQT6ANQ2ytoG7k8lI%2B4Y6YxJ23URRAFTVzJjINbqVzKoMG6E7rAvJJma%2B0uf7PIhwOgX9mzk6ctMOconh6mfGmQh6YvQ8k6CHJoT4axy6Viz9zIGmwlthgEdurLhuCPYd504gJ4i79Ty%2BI4qTdTS4YtT3p0f0HJxeeWOcfiRjglmZvnS6tnsBRyVAD3FSNl68bqcRfbsapLm%2FATm4yXG0CZ0yqV3592tcxOR1x6Oetg%2Bhtz3fMIrxm70GOqUBfmIwanY5UvcQU7pbPjs%2B8sQL6tzp%2FgwMf6RM7GSHLV0gVWaLJQZyKiJHEHT7XY%2F0tPIPUKC%2FqeRoMM4NFtmPT9OH802bhBShoTvg0XtLO%2Birz63tsJCE193jOE%2BCY0r5dE%2BbOwsASdL7Qs%2FC8r7LVjNwGCvh4UPioI7lvKAA8Rx7Ui9NycF8s5YPEiVZzef%2Bj%2BRsVPXFQYz6RkchR9%2Ft1z1r4y4N&X-Amz-Signature=cf6fce0156ec2499a9fd55dc0363d6b50f8de703c3f2af248be2f1e82af65add&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIL6VTC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICqn%2BEwT%2FpCVAOFIaftKgfbbQYV%2BjkZaGTcHq%2BJgvUB4AiEAsYwIJfOn0vd80%2F7hURvvrERVf2%2Ftg9r0lZ5oKE0EBZYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5aqHVd33CtppHuZCrcA0mY%2BiB%2FPvKz6MM8%2F%2F4fhWwpf%2FfmuskvmRM74Kn4G%2B4GyZCXoW%2F5j81BVp5kVVIReBzbRqo1fwi2OWc0gIz6an9MouvqMnsKy7%2B468wjL1V1s1zSglLH54J834YCgUoZFaacS9KxNGhygukODT6wTafzgTjzvCFP3midEg27IxroYc7neBWp71xpPDIG1ceRECyEUWo507GCnLdxHYPxMhTx0YTmW2tz56jEgf%2Fs%2BLEfNJ%2FnjfX%2BMO%2FYUUs0TGFdpL%2BCXImD%2F62prEPh%2BmZw7wlP9Xlrm%2FkHw3uKuUivfZ8oGPo48npKDvR9Xuz6rNP9yQy7FokcJsDHCs0vd%2B67BVHXF9WQryxIoH%2FDxl7abXLGugbH2k%2BTBUvhxbPI3nxS6hMQekgRJdYoQT6ANQ2ytoG7k8lI%2B4Y6YxJ23URRAFTVzJjINbqVzKoMG6E7rAvJJma%2B0uf7PIhwOgX9mzk6ctMOconh6mfGmQh6YvQ8k6CHJoT4axy6Viz9zIGmwlthgEdurLhuCPYd504gJ4i79Ty%2BI4qTdTS4YtT3p0f0HJxeeWOcfiRjglmZvnS6tnsBRyVAD3FSNl68bqcRfbsapLm%2FATm4yXG0CZ0yqV3592tcxOR1x6Oetg%2Bhtz3fMIrxm70GOqUBfmIwanY5UvcQU7pbPjs%2B8sQL6tzp%2FgwMf6RM7GSHLV0gVWaLJQZyKiJHEHT7XY%2F0tPIPUKC%2FqeRoMM4NFtmPT9OH802bhBShoTvg0XtLO%2Birz63tsJCE193jOE%2BCY0r5dE%2BbOwsASdL7Qs%2FC8r7LVjNwGCvh4UPioI7lvKAA8Rx7Ui9NycF8s5YPEiVZzef%2Bj%2BRsVPXFQYz6RkchR9%2Ft1z1r4y4N&X-Amz-Signature=f230f06d1d51124187f0092819f436c7f689f9cf17cf459a596737a1b12f9475&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIL6VTC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICqn%2BEwT%2FpCVAOFIaftKgfbbQYV%2BjkZaGTcHq%2BJgvUB4AiEAsYwIJfOn0vd80%2F7hURvvrERVf2%2Ftg9r0lZ5oKE0EBZYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5aqHVd33CtppHuZCrcA0mY%2BiB%2FPvKz6MM8%2F%2F4fhWwpf%2FfmuskvmRM74Kn4G%2B4GyZCXoW%2F5j81BVp5kVVIReBzbRqo1fwi2OWc0gIz6an9MouvqMnsKy7%2B468wjL1V1s1zSglLH54J834YCgUoZFaacS9KxNGhygukODT6wTafzgTjzvCFP3midEg27IxroYc7neBWp71xpPDIG1ceRECyEUWo507GCnLdxHYPxMhTx0YTmW2tz56jEgf%2Fs%2BLEfNJ%2FnjfX%2BMO%2FYUUs0TGFdpL%2BCXImD%2F62prEPh%2BmZw7wlP9Xlrm%2FkHw3uKuUivfZ8oGPo48npKDvR9Xuz6rNP9yQy7FokcJsDHCs0vd%2B67BVHXF9WQryxIoH%2FDxl7abXLGugbH2k%2BTBUvhxbPI3nxS6hMQekgRJdYoQT6ANQ2ytoG7k8lI%2B4Y6YxJ23URRAFTVzJjINbqVzKoMG6E7rAvJJma%2B0uf7PIhwOgX9mzk6ctMOconh6mfGmQh6YvQ8k6CHJoT4axy6Viz9zIGmwlthgEdurLhuCPYd504gJ4i79Ty%2BI4qTdTS4YtT3p0f0HJxeeWOcfiRjglmZvnS6tnsBRyVAD3FSNl68bqcRfbsapLm%2FATm4yXG0CZ0yqV3592tcxOR1x6Oetg%2Bhtz3fMIrxm70GOqUBfmIwanY5UvcQU7pbPjs%2B8sQL6tzp%2FgwMf6RM7GSHLV0gVWaLJQZyKiJHEHT7XY%2F0tPIPUKC%2FqeRoMM4NFtmPT9OH802bhBShoTvg0XtLO%2Birz63tsJCE193jOE%2BCY0r5dE%2BbOwsASdL7Qs%2FC8r7LVjNwGCvh4UPioI7lvKAA8Rx7Ui9NycF8s5YPEiVZzef%2Bj%2BRsVPXFQYz6RkchR9%2Ft1z1r4y4N&X-Amz-Signature=cb55668dcabd9703edeb8e83629fe93ace3e16a6fca1fe4cffd8a56c60fc1eec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIL6VTC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICqn%2BEwT%2FpCVAOFIaftKgfbbQYV%2BjkZaGTcHq%2BJgvUB4AiEAsYwIJfOn0vd80%2F7hURvvrERVf2%2Ftg9r0lZ5oKE0EBZYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5aqHVd33CtppHuZCrcA0mY%2BiB%2FPvKz6MM8%2F%2F4fhWwpf%2FfmuskvmRM74Kn4G%2B4GyZCXoW%2F5j81BVp5kVVIReBzbRqo1fwi2OWc0gIz6an9MouvqMnsKy7%2B468wjL1V1s1zSglLH54J834YCgUoZFaacS9KxNGhygukODT6wTafzgTjzvCFP3midEg27IxroYc7neBWp71xpPDIG1ceRECyEUWo507GCnLdxHYPxMhTx0YTmW2tz56jEgf%2Fs%2BLEfNJ%2FnjfX%2BMO%2FYUUs0TGFdpL%2BCXImD%2F62prEPh%2BmZw7wlP9Xlrm%2FkHw3uKuUivfZ8oGPo48npKDvR9Xuz6rNP9yQy7FokcJsDHCs0vd%2B67BVHXF9WQryxIoH%2FDxl7abXLGugbH2k%2BTBUvhxbPI3nxS6hMQekgRJdYoQT6ANQ2ytoG7k8lI%2B4Y6YxJ23URRAFTVzJjINbqVzKoMG6E7rAvJJma%2B0uf7PIhwOgX9mzk6ctMOconh6mfGmQh6YvQ8k6CHJoT4axy6Viz9zIGmwlthgEdurLhuCPYd504gJ4i79Ty%2BI4qTdTS4YtT3p0f0HJxeeWOcfiRjglmZvnS6tnsBRyVAD3FSNl68bqcRfbsapLm%2FATm4yXG0CZ0yqV3592tcxOR1x6Oetg%2Bhtz3fMIrxm70GOqUBfmIwanY5UvcQU7pbPjs%2B8sQL6tzp%2FgwMf6RM7GSHLV0gVWaLJQZyKiJHEHT7XY%2F0tPIPUKC%2FqeRoMM4NFtmPT9OH802bhBShoTvg0XtLO%2Birz63tsJCE193jOE%2BCY0r5dE%2BbOwsASdL7Qs%2FC8r7LVjNwGCvh4UPioI7lvKAA8Rx7Ui9NycF8s5YPEiVZzef%2Bj%2BRsVPXFQYz6RkchR9%2Ft1z1r4y4N&X-Amz-Signature=1195b157d441859455b4f264a19ef31945959aae688b5597161ab2c685c76dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIL6VTC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICqn%2BEwT%2FpCVAOFIaftKgfbbQYV%2BjkZaGTcHq%2BJgvUB4AiEAsYwIJfOn0vd80%2F7hURvvrERVf2%2Ftg9r0lZ5oKE0EBZYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5aqHVd33CtppHuZCrcA0mY%2BiB%2FPvKz6MM8%2F%2F4fhWwpf%2FfmuskvmRM74Kn4G%2B4GyZCXoW%2F5j81BVp5kVVIReBzbRqo1fwi2OWc0gIz6an9MouvqMnsKy7%2B468wjL1V1s1zSglLH54J834YCgUoZFaacS9KxNGhygukODT6wTafzgTjzvCFP3midEg27IxroYc7neBWp71xpPDIG1ceRECyEUWo507GCnLdxHYPxMhTx0YTmW2tz56jEgf%2Fs%2BLEfNJ%2FnjfX%2BMO%2FYUUs0TGFdpL%2BCXImD%2F62prEPh%2BmZw7wlP9Xlrm%2FkHw3uKuUivfZ8oGPo48npKDvR9Xuz6rNP9yQy7FokcJsDHCs0vd%2B67BVHXF9WQryxIoH%2FDxl7abXLGugbH2k%2BTBUvhxbPI3nxS6hMQekgRJdYoQT6ANQ2ytoG7k8lI%2B4Y6YxJ23URRAFTVzJjINbqVzKoMG6E7rAvJJma%2B0uf7PIhwOgX9mzk6ctMOconh6mfGmQh6YvQ8k6CHJoT4axy6Viz9zIGmwlthgEdurLhuCPYd504gJ4i79Ty%2BI4qTdTS4YtT3p0f0HJxeeWOcfiRjglmZvnS6tnsBRyVAD3FSNl68bqcRfbsapLm%2FATm4yXG0CZ0yqV3592tcxOR1x6Oetg%2Bhtz3fMIrxm70GOqUBfmIwanY5UvcQU7pbPjs%2B8sQL6tzp%2FgwMf6RM7GSHLV0gVWaLJQZyKiJHEHT7XY%2F0tPIPUKC%2FqeRoMM4NFtmPT9OH802bhBShoTvg0XtLO%2Birz63tsJCE193jOE%2BCY0r5dE%2BbOwsASdL7Qs%2FC8r7LVjNwGCvh4UPioI7lvKAA8Rx7Ui9NycF8s5YPEiVZzef%2Bj%2BRsVPXFQYz6RkchR9%2Ft1z1r4y4N&X-Amz-Signature=ccb069f79c34ae38a15ba827b3f4d6ee5ff56411dcad87663403de3a20107d14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIL6VTC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICqn%2BEwT%2FpCVAOFIaftKgfbbQYV%2BjkZaGTcHq%2BJgvUB4AiEAsYwIJfOn0vd80%2F7hURvvrERVf2%2Ftg9r0lZ5oKE0EBZYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5aqHVd33CtppHuZCrcA0mY%2BiB%2FPvKz6MM8%2F%2F4fhWwpf%2FfmuskvmRM74Kn4G%2B4GyZCXoW%2F5j81BVp5kVVIReBzbRqo1fwi2OWc0gIz6an9MouvqMnsKy7%2B468wjL1V1s1zSglLH54J834YCgUoZFaacS9KxNGhygukODT6wTafzgTjzvCFP3midEg27IxroYc7neBWp71xpPDIG1ceRECyEUWo507GCnLdxHYPxMhTx0YTmW2tz56jEgf%2Fs%2BLEfNJ%2FnjfX%2BMO%2FYUUs0TGFdpL%2BCXImD%2F62prEPh%2BmZw7wlP9Xlrm%2FkHw3uKuUivfZ8oGPo48npKDvR9Xuz6rNP9yQy7FokcJsDHCs0vd%2B67BVHXF9WQryxIoH%2FDxl7abXLGugbH2k%2BTBUvhxbPI3nxS6hMQekgRJdYoQT6ANQ2ytoG7k8lI%2B4Y6YxJ23URRAFTVzJjINbqVzKoMG6E7rAvJJma%2B0uf7PIhwOgX9mzk6ctMOconh6mfGmQh6YvQ8k6CHJoT4axy6Viz9zIGmwlthgEdurLhuCPYd504gJ4i79Ty%2BI4qTdTS4YtT3p0f0HJxeeWOcfiRjglmZvnS6tnsBRyVAD3FSNl68bqcRfbsapLm%2FATm4yXG0CZ0yqV3592tcxOR1x6Oetg%2Bhtz3fMIrxm70GOqUBfmIwanY5UvcQU7pbPjs%2B8sQL6tzp%2FgwMf6RM7GSHLV0gVWaLJQZyKiJHEHT7XY%2F0tPIPUKC%2FqeRoMM4NFtmPT9OH802bhBShoTvg0XtLO%2Birz63tsJCE193jOE%2BCY0r5dE%2BbOwsASdL7Qs%2FC8r7LVjNwGCvh4UPioI7lvKAA8Rx7Ui9NycF8s5YPEiVZzef%2Bj%2BRsVPXFQYz6RkchR9%2Ft1z1r4y4N&X-Amz-Signature=c82bf6d7a469a109b6dc3de9fe8f4e59298eb0e464cd12fcef43d58bc2908054&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
