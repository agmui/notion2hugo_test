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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJEFF23%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGS8GBgnykxhDlBavPZknSxUn%2F3tlp%2F6lVOarnCNFEy4AiEAi1SS1ZTU8dltQqZLKTsz4Zpll0O9Pz7t7FX4cGYNkA8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtEYCAGGJCjQM9jNyrcA0T2zUvtTmQPyei7MHmQYazB%2FSy%2BZbmFQ1gwjCp4WOB7XoC0p2dWxQrm1KrE104egEcvrSLWq7GBIr23n7jNuZIy5yfEy1hcNbATZzwCFi3IKFy0ODlNDsbfOJiw1EAPiVD2NUyFiP9PyOsf8I0ni3l5i%2F72wILlzavklVHeC7VWNdQJCS5eLGjN4BlpfitnD7wKY3Y420iTewJbX%2BuGyCjxCbl7ViK3swjkZvk3J7H3CpX0Fb%2FWM5sot%2BlVy64fzrUQ%2BqNog%2FN1GLXZqicwQ0NsXWngw8aHPIp3GbvNALA%2B%2Bw23%2BOVl%2FJVISlmWnbgjTiXmCTiy%2FnqRWr0VfzWUhq6oyXYYPm9%2Fjul7oJNCmVALPVON4zMzZJFg%2BjQxsURIDFiUnChl7dE2rVuV6uf1eLpJ95cdzthKqRF12Bj86zw4Bg2XNoIrFNxCtS%2FVSDqvOOnliqIfMZQoY5xy8bM4lG7aTz5eqATkCayywc6Pw95WmRznGgN2EVNYxUL5tbUTwku6X297N1mrt%2FahzPbt9z0OKse7sDS0NjGRYkkTStZyvJIiK9SXwhAJQ5xBejXp1XCelZ0uMTWkroH%2BgL0cAzgVzbV8qNBOIJuRHnT%2Fyq19p1hFLQ1cy3FE5u3vML%2Fj%2Fb4GOqUB%2FcvplBEC5tKnrt%2BezblCYRd7Y13VC%2F9ATAXSJIa710TJ8moNWtj4%2FY9MENsXKuHx2g%2FvdK9zoJoQKZ1Xcl6S3%2FYNwnqF%2BjxnX87KFkaI6lLlOomQFpbMUnYSQ4bRKfN0O%2FJ2dKvAQJNwqlOHQoykuse8ewXO9PKKiZ9Mb2bmDguO3MiK1PFl0yDLlzszrETjL3ouc0YwAZhY%2Fh80JDcrnZWUcT8f&X-Amz-Signature=19d04e861d1f7d2dbe02b240996910c549a8417c786ab2476cd8bf4b05730a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJEFF23%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGS8GBgnykxhDlBavPZknSxUn%2F3tlp%2F6lVOarnCNFEy4AiEAi1SS1ZTU8dltQqZLKTsz4Zpll0O9Pz7t7FX4cGYNkA8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtEYCAGGJCjQM9jNyrcA0T2zUvtTmQPyei7MHmQYazB%2FSy%2BZbmFQ1gwjCp4WOB7XoC0p2dWxQrm1KrE104egEcvrSLWq7GBIr23n7jNuZIy5yfEy1hcNbATZzwCFi3IKFy0ODlNDsbfOJiw1EAPiVD2NUyFiP9PyOsf8I0ni3l5i%2F72wILlzavklVHeC7VWNdQJCS5eLGjN4BlpfitnD7wKY3Y420iTewJbX%2BuGyCjxCbl7ViK3swjkZvk3J7H3CpX0Fb%2FWM5sot%2BlVy64fzrUQ%2BqNog%2FN1GLXZqicwQ0NsXWngw8aHPIp3GbvNALA%2B%2Bw23%2BOVl%2FJVISlmWnbgjTiXmCTiy%2FnqRWr0VfzWUhq6oyXYYPm9%2Fjul7oJNCmVALPVON4zMzZJFg%2BjQxsURIDFiUnChl7dE2rVuV6uf1eLpJ95cdzthKqRF12Bj86zw4Bg2XNoIrFNxCtS%2FVSDqvOOnliqIfMZQoY5xy8bM4lG7aTz5eqATkCayywc6Pw95WmRznGgN2EVNYxUL5tbUTwku6X297N1mrt%2FahzPbt9z0OKse7sDS0NjGRYkkTStZyvJIiK9SXwhAJQ5xBejXp1XCelZ0uMTWkroH%2BgL0cAzgVzbV8qNBOIJuRHnT%2Fyq19p1hFLQ1cy3FE5u3vML%2Fj%2Fb4GOqUB%2FcvplBEC5tKnrt%2BezblCYRd7Y13VC%2F9ATAXSJIa710TJ8moNWtj4%2FY9MENsXKuHx2g%2FvdK9zoJoQKZ1Xcl6S3%2FYNwnqF%2BjxnX87KFkaI6lLlOomQFpbMUnYSQ4bRKfN0O%2FJ2dKvAQJNwqlOHQoykuse8ewXO9PKKiZ9Mb2bmDguO3MiK1PFl0yDLlzszrETjL3ouc0YwAZhY%2Fh80JDcrnZWUcT8f&X-Amz-Signature=f4d3eac1561ac2223d5b104536e8048eee9896d1244ef91cae9c240082007ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJEFF23%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGS8GBgnykxhDlBavPZknSxUn%2F3tlp%2F6lVOarnCNFEy4AiEAi1SS1ZTU8dltQqZLKTsz4Zpll0O9Pz7t7FX4cGYNkA8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtEYCAGGJCjQM9jNyrcA0T2zUvtTmQPyei7MHmQYazB%2FSy%2BZbmFQ1gwjCp4WOB7XoC0p2dWxQrm1KrE104egEcvrSLWq7GBIr23n7jNuZIy5yfEy1hcNbATZzwCFi3IKFy0ODlNDsbfOJiw1EAPiVD2NUyFiP9PyOsf8I0ni3l5i%2F72wILlzavklVHeC7VWNdQJCS5eLGjN4BlpfitnD7wKY3Y420iTewJbX%2BuGyCjxCbl7ViK3swjkZvk3J7H3CpX0Fb%2FWM5sot%2BlVy64fzrUQ%2BqNog%2FN1GLXZqicwQ0NsXWngw8aHPIp3GbvNALA%2B%2Bw23%2BOVl%2FJVISlmWnbgjTiXmCTiy%2FnqRWr0VfzWUhq6oyXYYPm9%2Fjul7oJNCmVALPVON4zMzZJFg%2BjQxsURIDFiUnChl7dE2rVuV6uf1eLpJ95cdzthKqRF12Bj86zw4Bg2XNoIrFNxCtS%2FVSDqvOOnliqIfMZQoY5xy8bM4lG7aTz5eqATkCayywc6Pw95WmRznGgN2EVNYxUL5tbUTwku6X297N1mrt%2FahzPbt9z0OKse7sDS0NjGRYkkTStZyvJIiK9SXwhAJQ5xBejXp1XCelZ0uMTWkroH%2BgL0cAzgVzbV8qNBOIJuRHnT%2Fyq19p1hFLQ1cy3FE5u3vML%2Fj%2Fb4GOqUB%2FcvplBEC5tKnrt%2BezblCYRd7Y13VC%2F9ATAXSJIa710TJ8moNWtj4%2FY9MENsXKuHx2g%2FvdK9zoJoQKZ1Xcl6S3%2FYNwnqF%2BjxnX87KFkaI6lLlOomQFpbMUnYSQ4bRKfN0O%2FJ2dKvAQJNwqlOHQoykuse8ewXO9PKKiZ9Mb2bmDguO3MiK1PFl0yDLlzszrETjL3ouc0YwAZhY%2Fh80JDcrnZWUcT8f&X-Amz-Signature=760c08e083ed2ef60f821b51fe93915476cb71b0d58f10680c1266140caa05d3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJEFF23%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGS8GBgnykxhDlBavPZknSxUn%2F3tlp%2F6lVOarnCNFEy4AiEAi1SS1ZTU8dltQqZLKTsz4Zpll0O9Pz7t7FX4cGYNkA8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtEYCAGGJCjQM9jNyrcA0T2zUvtTmQPyei7MHmQYazB%2FSy%2BZbmFQ1gwjCp4WOB7XoC0p2dWxQrm1KrE104egEcvrSLWq7GBIr23n7jNuZIy5yfEy1hcNbATZzwCFi3IKFy0ODlNDsbfOJiw1EAPiVD2NUyFiP9PyOsf8I0ni3l5i%2F72wILlzavklVHeC7VWNdQJCS5eLGjN4BlpfitnD7wKY3Y420iTewJbX%2BuGyCjxCbl7ViK3swjkZvk3J7H3CpX0Fb%2FWM5sot%2BlVy64fzrUQ%2BqNog%2FN1GLXZqicwQ0NsXWngw8aHPIp3GbvNALA%2B%2Bw23%2BOVl%2FJVISlmWnbgjTiXmCTiy%2FnqRWr0VfzWUhq6oyXYYPm9%2Fjul7oJNCmVALPVON4zMzZJFg%2BjQxsURIDFiUnChl7dE2rVuV6uf1eLpJ95cdzthKqRF12Bj86zw4Bg2XNoIrFNxCtS%2FVSDqvOOnliqIfMZQoY5xy8bM4lG7aTz5eqATkCayywc6Pw95WmRznGgN2EVNYxUL5tbUTwku6X297N1mrt%2FahzPbt9z0OKse7sDS0NjGRYkkTStZyvJIiK9SXwhAJQ5xBejXp1XCelZ0uMTWkroH%2BgL0cAzgVzbV8qNBOIJuRHnT%2Fyq19p1hFLQ1cy3FE5u3vML%2Fj%2Fb4GOqUB%2FcvplBEC5tKnrt%2BezblCYRd7Y13VC%2F9ATAXSJIa710TJ8moNWtj4%2FY9MENsXKuHx2g%2FvdK9zoJoQKZ1Xcl6S3%2FYNwnqF%2BjxnX87KFkaI6lLlOomQFpbMUnYSQ4bRKfN0O%2FJ2dKvAQJNwqlOHQoykuse8ewXO9PKKiZ9Mb2bmDguO3MiK1PFl0yDLlzszrETjL3ouc0YwAZhY%2Fh80JDcrnZWUcT8f&X-Amz-Signature=8f868bed87b183ea86a2db042745ff2ba81c52a8263ddc9fb7ec6792767ec06d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJEFF23%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGS8GBgnykxhDlBavPZknSxUn%2F3tlp%2F6lVOarnCNFEy4AiEAi1SS1ZTU8dltQqZLKTsz4Zpll0O9Pz7t7FX4cGYNkA8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtEYCAGGJCjQM9jNyrcA0T2zUvtTmQPyei7MHmQYazB%2FSy%2BZbmFQ1gwjCp4WOB7XoC0p2dWxQrm1KrE104egEcvrSLWq7GBIr23n7jNuZIy5yfEy1hcNbATZzwCFi3IKFy0ODlNDsbfOJiw1EAPiVD2NUyFiP9PyOsf8I0ni3l5i%2F72wILlzavklVHeC7VWNdQJCS5eLGjN4BlpfitnD7wKY3Y420iTewJbX%2BuGyCjxCbl7ViK3swjkZvk3J7H3CpX0Fb%2FWM5sot%2BlVy64fzrUQ%2BqNog%2FN1GLXZqicwQ0NsXWngw8aHPIp3GbvNALA%2B%2Bw23%2BOVl%2FJVISlmWnbgjTiXmCTiy%2FnqRWr0VfzWUhq6oyXYYPm9%2Fjul7oJNCmVALPVON4zMzZJFg%2BjQxsURIDFiUnChl7dE2rVuV6uf1eLpJ95cdzthKqRF12Bj86zw4Bg2XNoIrFNxCtS%2FVSDqvOOnliqIfMZQoY5xy8bM4lG7aTz5eqATkCayywc6Pw95WmRznGgN2EVNYxUL5tbUTwku6X297N1mrt%2FahzPbt9z0OKse7sDS0NjGRYkkTStZyvJIiK9SXwhAJQ5xBejXp1XCelZ0uMTWkroH%2BgL0cAzgVzbV8qNBOIJuRHnT%2Fyq19p1hFLQ1cy3FE5u3vML%2Fj%2Fb4GOqUB%2FcvplBEC5tKnrt%2BezblCYRd7Y13VC%2F9ATAXSJIa710TJ8moNWtj4%2FY9MENsXKuHx2g%2FvdK9zoJoQKZ1Xcl6S3%2FYNwnqF%2BjxnX87KFkaI6lLlOomQFpbMUnYSQ4bRKfN0O%2FJ2dKvAQJNwqlOHQoykuse8ewXO9PKKiZ9Mb2bmDguO3MiK1PFl0yDLlzszrETjL3ouc0YwAZhY%2Fh80JDcrnZWUcT8f&X-Amz-Signature=5dc084879185c0b35934a878a6cf3be71014cd5204bf5c837236536e0d3e90d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJEFF23%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGS8GBgnykxhDlBavPZknSxUn%2F3tlp%2F6lVOarnCNFEy4AiEAi1SS1ZTU8dltQqZLKTsz4Zpll0O9Pz7t7FX4cGYNkA8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtEYCAGGJCjQM9jNyrcA0T2zUvtTmQPyei7MHmQYazB%2FSy%2BZbmFQ1gwjCp4WOB7XoC0p2dWxQrm1KrE104egEcvrSLWq7GBIr23n7jNuZIy5yfEy1hcNbATZzwCFi3IKFy0ODlNDsbfOJiw1EAPiVD2NUyFiP9PyOsf8I0ni3l5i%2F72wILlzavklVHeC7VWNdQJCS5eLGjN4BlpfitnD7wKY3Y420iTewJbX%2BuGyCjxCbl7ViK3swjkZvk3J7H3CpX0Fb%2FWM5sot%2BlVy64fzrUQ%2BqNog%2FN1GLXZqicwQ0NsXWngw8aHPIp3GbvNALA%2B%2Bw23%2BOVl%2FJVISlmWnbgjTiXmCTiy%2FnqRWr0VfzWUhq6oyXYYPm9%2Fjul7oJNCmVALPVON4zMzZJFg%2BjQxsURIDFiUnChl7dE2rVuV6uf1eLpJ95cdzthKqRF12Bj86zw4Bg2XNoIrFNxCtS%2FVSDqvOOnliqIfMZQoY5xy8bM4lG7aTz5eqATkCayywc6Pw95WmRznGgN2EVNYxUL5tbUTwku6X297N1mrt%2FahzPbt9z0OKse7sDS0NjGRYkkTStZyvJIiK9SXwhAJQ5xBejXp1XCelZ0uMTWkroH%2BgL0cAzgVzbV8qNBOIJuRHnT%2Fyq19p1hFLQ1cy3FE5u3vML%2Fj%2Fb4GOqUB%2FcvplBEC5tKnrt%2BezblCYRd7Y13VC%2F9ATAXSJIa710TJ8moNWtj4%2FY9MENsXKuHx2g%2FvdK9zoJoQKZ1Xcl6S3%2FYNwnqF%2BjxnX87KFkaI6lLlOomQFpbMUnYSQ4bRKfN0O%2FJ2dKvAQJNwqlOHQoykuse8ewXO9PKKiZ9Mb2bmDguO3MiK1PFl0yDLlzszrETjL3ouc0YwAZhY%2Fh80JDcrnZWUcT8f&X-Amz-Signature=50f12ab5d1a44d04a999336d5fe187330984ee2b78e053cb9c70b1ce992b2122&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJEFF23%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGS8GBgnykxhDlBavPZknSxUn%2F3tlp%2F6lVOarnCNFEy4AiEAi1SS1ZTU8dltQqZLKTsz4Zpll0O9Pz7t7FX4cGYNkA8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtEYCAGGJCjQM9jNyrcA0T2zUvtTmQPyei7MHmQYazB%2FSy%2BZbmFQ1gwjCp4WOB7XoC0p2dWxQrm1KrE104egEcvrSLWq7GBIr23n7jNuZIy5yfEy1hcNbATZzwCFi3IKFy0ODlNDsbfOJiw1EAPiVD2NUyFiP9PyOsf8I0ni3l5i%2F72wILlzavklVHeC7VWNdQJCS5eLGjN4BlpfitnD7wKY3Y420iTewJbX%2BuGyCjxCbl7ViK3swjkZvk3J7H3CpX0Fb%2FWM5sot%2BlVy64fzrUQ%2BqNog%2FN1GLXZqicwQ0NsXWngw8aHPIp3GbvNALA%2B%2Bw23%2BOVl%2FJVISlmWnbgjTiXmCTiy%2FnqRWr0VfzWUhq6oyXYYPm9%2Fjul7oJNCmVALPVON4zMzZJFg%2BjQxsURIDFiUnChl7dE2rVuV6uf1eLpJ95cdzthKqRF12Bj86zw4Bg2XNoIrFNxCtS%2FVSDqvOOnliqIfMZQoY5xy8bM4lG7aTz5eqATkCayywc6Pw95WmRznGgN2EVNYxUL5tbUTwku6X297N1mrt%2FahzPbt9z0OKse7sDS0NjGRYkkTStZyvJIiK9SXwhAJQ5xBejXp1XCelZ0uMTWkroH%2BgL0cAzgVzbV8qNBOIJuRHnT%2Fyq19p1hFLQ1cy3FE5u3vML%2Fj%2Fb4GOqUB%2FcvplBEC5tKnrt%2BezblCYRd7Y13VC%2F9ATAXSJIa710TJ8moNWtj4%2FY9MENsXKuHx2g%2FvdK9zoJoQKZ1Xcl6S3%2FYNwnqF%2BjxnX87KFkaI6lLlOomQFpbMUnYSQ4bRKfN0O%2FJ2dKvAQJNwqlOHQoykuse8ewXO9PKKiZ9Mb2bmDguO3MiK1PFl0yDLlzszrETjL3ouc0YwAZhY%2Fh80JDcrnZWUcT8f&X-Amz-Signature=8cd8860bed78eabcef5064ecadd991a597a9b5fa6c9e56d45c1fc32e7a72d792&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJEFF23%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGS8GBgnykxhDlBavPZknSxUn%2F3tlp%2F6lVOarnCNFEy4AiEAi1SS1ZTU8dltQqZLKTsz4Zpll0O9Pz7t7FX4cGYNkA8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtEYCAGGJCjQM9jNyrcA0T2zUvtTmQPyei7MHmQYazB%2FSy%2BZbmFQ1gwjCp4WOB7XoC0p2dWxQrm1KrE104egEcvrSLWq7GBIr23n7jNuZIy5yfEy1hcNbATZzwCFi3IKFy0ODlNDsbfOJiw1EAPiVD2NUyFiP9PyOsf8I0ni3l5i%2F72wILlzavklVHeC7VWNdQJCS5eLGjN4BlpfitnD7wKY3Y420iTewJbX%2BuGyCjxCbl7ViK3swjkZvk3J7H3CpX0Fb%2FWM5sot%2BlVy64fzrUQ%2BqNog%2FN1GLXZqicwQ0NsXWngw8aHPIp3GbvNALA%2B%2Bw23%2BOVl%2FJVISlmWnbgjTiXmCTiy%2FnqRWr0VfzWUhq6oyXYYPm9%2Fjul7oJNCmVALPVON4zMzZJFg%2BjQxsURIDFiUnChl7dE2rVuV6uf1eLpJ95cdzthKqRF12Bj86zw4Bg2XNoIrFNxCtS%2FVSDqvOOnliqIfMZQoY5xy8bM4lG7aTz5eqATkCayywc6Pw95WmRznGgN2EVNYxUL5tbUTwku6X297N1mrt%2FahzPbt9z0OKse7sDS0NjGRYkkTStZyvJIiK9SXwhAJQ5xBejXp1XCelZ0uMTWkroH%2BgL0cAzgVzbV8qNBOIJuRHnT%2Fyq19p1hFLQ1cy3FE5u3vML%2Fj%2Fb4GOqUB%2FcvplBEC5tKnrt%2BezblCYRd7Y13VC%2F9ATAXSJIa710TJ8moNWtj4%2FY9MENsXKuHx2g%2FvdK9zoJoQKZ1Xcl6S3%2FYNwnqF%2BjxnX87KFkaI6lLlOomQFpbMUnYSQ4bRKfN0O%2FJ2dKvAQJNwqlOHQoykuse8ewXO9PKKiZ9Mb2bmDguO3MiK1PFl0yDLlzszrETjL3ouc0YwAZhY%2Fh80JDcrnZWUcT8f&X-Amz-Signature=1a85d2e8c62dbdc1987603701f6bf783761a0488e8d4b150838bd1d61174de2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
