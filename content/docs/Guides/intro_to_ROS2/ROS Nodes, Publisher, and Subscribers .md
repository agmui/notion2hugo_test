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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR5MQU2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtjkqF6B6z0JzNOfrtmX6Xm7tcEhCSf9uKMJwe3xHxTAIhALVC%2BlHhJ3hgh0hKQvgcEDgvMDQemwAHQshvICtDG%2FhKKv8DCH0QABoMNjM3NDIzMTgzODA1IgxAgGAhfC8yiLrpTgwq3AOXHtcCTtGWiSTW%2BeYtJp0ZPxo2DNh4tX8vHLA%2FOMKztW2hfRHCCVH3%2B%2Fg8nGU3D%2BNkJU94%2Fp7BK4Z6jh6tsY1ySDC4OzdosmdvwvHaSfBFuffgZTS5SXmp21jpEQEubhnVPMmUUdk3Wnw5IkEoZ43H8UhrSX4Y3zxTvCs3Aqw3GKTsmt7lqThwzfVrIlhiuoIBLWXqezPExlvl%2FT3IlQdqFwFKzW0hBqBRCAZHfqk3yF9INbvEwBmeNuRo3aG7%2Bm%2FN0f1WJYEHKgyXZ69lfhh41NkwzhxPkNyMGcTcnA3XuPaYo7VtrzQhC%2BneBdcpCroUyn1Fobw9cPFlKzOxOb9JkvHdDfNwP7jH0lGGezzdL9AxLeXUe6pK%2FlWGWvIfFznI0z8U4xmLY3W6oEI9DbjWGb6OaNCGk1kqxy8AMPlC6ZiXoElDov9OR4rgd8foGtNFuODwsq4aOB0ZoS3yGryZcDAfQqMkCIgqFQt8MYWSLwNDAlW1cFCLX7zLiQAjvgDQFkt3O%2FL2d9MEWHkLZS1jsjmwLvBPoc2XWlbRMT14IRhtzUxX6gAh5SFE0IWbjHzBjir62p1qxUqecIcRBxSgSN2t8eHAgFQbJPd1vQFILlL%2BDsnHa08FYxR%2BYzDUt7%2FABjqkAZriML5gebowQGqk2U%2Br9jETRg5zpc9P9W6Y3S08zkZ%2BAdcv1p1k6X0Jp38vRJTxdw6slqaN6WmwCjTS56lJHpUEZ%2FMNucCNfzQM1Z7EvzNRzjowd4nxetOM%2F77wVXSaC5B0dkmbJjdDiKMR3WvWnj6DhFHmOpVswd9XwvLhSXQq3U6GHDK64Wu366ffLZ88xR%2B%2Fm1IQEvWuyvTZzytzWspekvA9&X-Amz-Signature=4d8ac90fc5d957a80b89e5345ebc541455a682dabc8c62bdf4ec004772437492&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR5MQU2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtjkqF6B6z0JzNOfrtmX6Xm7tcEhCSf9uKMJwe3xHxTAIhALVC%2BlHhJ3hgh0hKQvgcEDgvMDQemwAHQshvICtDG%2FhKKv8DCH0QABoMNjM3NDIzMTgzODA1IgxAgGAhfC8yiLrpTgwq3AOXHtcCTtGWiSTW%2BeYtJp0ZPxo2DNh4tX8vHLA%2FOMKztW2hfRHCCVH3%2B%2Fg8nGU3D%2BNkJU94%2Fp7BK4Z6jh6tsY1ySDC4OzdosmdvwvHaSfBFuffgZTS5SXmp21jpEQEubhnVPMmUUdk3Wnw5IkEoZ43H8UhrSX4Y3zxTvCs3Aqw3GKTsmt7lqThwzfVrIlhiuoIBLWXqezPExlvl%2FT3IlQdqFwFKzW0hBqBRCAZHfqk3yF9INbvEwBmeNuRo3aG7%2Bm%2FN0f1WJYEHKgyXZ69lfhh41NkwzhxPkNyMGcTcnA3XuPaYo7VtrzQhC%2BneBdcpCroUyn1Fobw9cPFlKzOxOb9JkvHdDfNwP7jH0lGGezzdL9AxLeXUe6pK%2FlWGWvIfFznI0z8U4xmLY3W6oEI9DbjWGb6OaNCGk1kqxy8AMPlC6ZiXoElDov9OR4rgd8foGtNFuODwsq4aOB0ZoS3yGryZcDAfQqMkCIgqFQt8MYWSLwNDAlW1cFCLX7zLiQAjvgDQFkt3O%2FL2d9MEWHkLZS1jsjmwLvBPoc2XWlbRMT14IRhtzUxX6gAh5SFE0IWbjHzBjir62p1qxUqecIcRBxSgSN2t8eHAgFQbJPd1vQFILlL%2BDsnHa08FYxR%2BYzDUt7%2FABjqkAZriML5gebowQGqk2U%2Br9jETRg5zpc9P9W6Y3S08zkZ%2BAdcv1p1k6X0Jp38vRJTxdw6slqaN6WmwCjTS56lJHpUEZ%2FMNucCNfzQM1Z7EvzNRzjowd4nxetOM%2F77wVXSaC5B0dkmbJjdDiKMR3WvWnj6DhFHmOpVswd9XwvLhSXQq3U6GHDK64Wu366ffLZ88xR%2B%2Fm1IQEvWuyvTZzytzWspekvA9&X-Amz-Signature=06047fde6f6f72bd08a731236e4d409e3b9155cd3fbde94b624781356958e20e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR5MQU2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtjkqF6B6z0JzNOfrtmX6Xm7tcEhCSf9uKMJwe3xHxTAIhALVC%2BlHhJ3hgh0hKQvgcEDgvMDQemwAHQshvICtDG%2FhKKv8DCH0QABoMNjM3NDIzMTgzODA1IgxAgGAhfC8yiLrpTgwq3AOXHtcCTtGWiSTW%2BeYtJp0ZPxo2DNh4tX8vHLA%2FOMKztW2hfRHCCVH3%2B%2Fg8nGU3D%2BNkJU94%2Fp7BK4Z6jh6tsY1ySDC4OzdosmdvwvHaSfBFuffgZTS5SXmp21jpEQEubhnVPMmUUdk3Wnw5IkEoZ43H8UhrSX4Y3zxTvCs3Aqw3GKTsmt7lqThwzfVrIlhiuoIBLWXqezPExlvl%2FT3IlQdqFwFKzW0hBqBRCAZHfqk3yF9INbvEwBmeNuRo3aG7%2Bm%2FN0f1WJYEHKgyXZ69lfhh41NkwzhxPkNyMGcTcnA3XuPaYo7VtrzQhC%2BneBdcpCroUyn1Fobw9cPFlKzOxOb9JkvHdDfNwP7jH0lGGezzdL9AxLeXUe6pK%2FlWGWvIfFznI0z8U4xmLY3W6oEI9DbjWGb6OaNCGk1kqxy8AMPlC6ZiXoElDov9OR4rgd8foGtNFuODwsq4aOB0ZoS3yGryZcDAfQqMkCIgqFQt8MYWSLwNDAlW1cFCLX7zLiQAjvgDQFkt3O%2FL2d9MEWHkLZS1jsjmwLvBPoc2XWlbRMT14IRhtzUxX6gAh5SFE0IWbjHzBjir62p1qxUqecIcRBxSgSN2t8eHAgFQbJPd1vQFILlL%2BDsnHa08FYxR%2BYzDUt7%2FABjqkAZriML5gebowQGqk2U%2Br9jETRg5zpc9P9W6Y3S08zkZ%2BAdcv1p1k6X0Jp38vRJTxdw6slqaN6WmwCjTS56lJHpUEZ%2FMNucCNfzQM1Z7EvzNRzjowd4nxetOM%2F77wVXSaC5B0dkmbJjdDiKMR3WvWnj6DhFHmOpVswd9XwvLhSXQq3U6GHDK64Wu366ffLZ88xR%2B%2Fm1IQEvWuyvTZzytzWspekvA9&X-Amz-Signature=652bece569f39e8e5f7f4c66428835672e2024452b32ba7cd803d956f3281c03&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR5MQU2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtjkqF6B6z0JzNOfrtmX6Xm7tcEhCSf9uKMJwe3xHxTAIhALVC%2BlHhJ3hgh0hKQvgcEDgvMDQemwAHQshvICtDG%2FhKKv8DCH0QABoMNjM3NDIzMTgzODA1IgxAgGAhfC8yiLrpTgwq3AOXHtcCTtGWiSTW%2BeYtJp0ZPxo2DNh4tX8vHLA%2FOMKztW2hfRHCCVH3%2B%2Fg8nGU3D%2BNkJU94%2Fp7BK4Z6jh6tsY1ySDC4OzdosmdvwvHaSfBFuffgZTS5SXmp21jpEQEubhnVPMmUUdk3Wnw5IkEoZ43H8UhrSX4Y3zxTvCs3Aqw3GKTsmt7lqThwzfVrIlhiuoIBLWXqezPExlvl%2FT3IlQdqFwFKzW0hBqBRCAZHfqk3yF9INbvEwBmeNuRo3aG7%2Bm%2FN0f1WJYEHKgyXZ69lfhh41NkwzhxPkNyMGcTcnA3XuPaYo7VtrzQhC%2BneBdcpCroUyn1Fobw9cPFlKzOxOb9JkvHdDfNwP7jH0lGGezzdL9AxLeXUe6pK%2FlWGWvIfFznI0z8U4xmLY3W6oEI9DbjWGb6OaNCGk1kqxy8AMPlC6ZiXoElDov9OR4rgd8foGtNFuODwsq4aOB0ZoS3yGryZcDAfQqMkCIgqFQt8MYWSLwNDAlW1cFCLX7zLiQAjvgDQFkt3O%2FL2d9MEWHkLZS1jsjmwLvBPoc2XWlbRMT14IRhtzUxX6gAh5SFE0IWbjHzBjir62p1qxUqecIcRBxSgSN2t8eHAgFQbJPd1vQFILlL%2BDsnHa08FYxR%2BYzDUt7%2FABjqkAZriML5gebowQGqk2U%2Br9jETRg5zpc9P9W6Y3S08zkZ%2BAdcv1p1k6X0Jp38vRJTxdw6slqaN6WmwCjTS56lJHpUEZ%2FMNucCNfzQM1Z7EvzNRzjowd4nxetOM%2F77wVXSaC5B0dkmbJjdDiKMR3WvWnj6DhFHmOpVswd9XwvLhSXQq3U6GHDK64Wu366ffLZ88xR%2B%2Fm1IQEvWuyvTZzytzWspekvA9&X-Amz-Signature=3c40a22a9f99cb5dadd500c3607adc173c8f359e99df7097fe3b1b1654ef008d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR5MQU2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtjkqF6B6z0JzNOfrtmX6Xm7tcEhCSf9uKMJwe3xHxTAIhALVC%2BlHhJ3hgh0hKQvgcEDgvMDQemwAHQshvICtDG%2FhKKv8DCH0QABoMNjM3NDIzMTgzODA1IgxAgGAhfC8yiLrpTgwq3AOXHtcCTtGWiSTW%2BeYtJp0ZPxo2DNh4tX8vHLA%2FOMKztW2hfRHCCVH3%2B%2Fg8nGU3D%2BNkJU94%2Fp7BK4Z6jh6tsY1ySDC4OzdosmdvwvHaSfBFuffgZTS5SXmp21jpEQEubhnVPMmUUdk3Wnw5IkEoZ43H8UhrSX4Y3zxTvCs3Aqw3GKTsmt7lqThwzfVrIlhiuoIBLWXqezPExlvl%2FT3IlQdqFwFKzW0hBqBRCAZHfqk3yF9INbvEwBmeNuRo3aG7%2Bm%2FN0f1WJYEHKgyXZ69lfhh41NkwzhxPkNyMGcTcnA3XuPaYo7VtrzQhC%2BneBdcpCroUyn1Fobw9cPFlKzOxOb9JkvHdDfNwP7jH0lGGezzdL9AxLeXUe6pK%2FlWGWvIfFznI0z8U4xmLY3W6oEI9DbjWGb6OaNCGk1kqxy8AMPlC6ZiXoElDov9OR4rgd8foGtNFuODwsq4aOB0ZoS3yGryZcDAfQqMkCIgqFQt8MYWSLwNDAlW1cFCLX7zLiQAjvgDQFkt3O%2FL2d9MEWHkLZS1jsjmwLvBPoc2XWlbRMT14IRhtzUxX6gAh5SFE0IWbjHzBjir62p1qxUqecIcRBxSgSN2t8eHAgFQbJPd1vQFILlL%2BDsnHa08FYxR%2BYzDUt7%2FABjqkAZriML5gebowQGqk2U%2Br9jETRg5zpc9P9W6Y3S08zkZ%2BAdcv1p1k6X0Jp38vRJTxdw6slqaN6WmwCjTS56lJHpUEZ%2FMNucCNfzQM1Z7EvzNRzjowd4nxetOM%2F77wVXSaC5B0dkmbJjdDiKMR3WvWnj6DhFHmOpVswd9XwvLhSXQq3U6GHDK64Wu366ffLZ88xR%2B%2Fm1IQEvWuyvTZzytzWspekvA9&X-Amz-Signature=769c30ad7b965d283a5f7e2a424bddee020060d478c0bd72a2cca427e9b476ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR5MQU2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtjkqF6B6z0JzNOfrtmX6Xm7tcEhCSf9uKMJwe3xHxTAIhALVC%2BlHhJ3hgh0hKQvgcEDgvMDQemwAHQshvICtDG%2FhKKv8DCH0QABoMNjM3NDIzMTgzODA1IgxAgGAhfC8yiLrpTgwq3AOXHtcCTtGWiSTW%2BeYtJp0ZPxo2DNh4tX8vHLA%2FOMKztW2hfRHCCVH3%2B%2Fg8nGU3D%2BNkJU94%2Fp7BK4Z6jh6tsY1ySDC4OzdosmdvwvHaSfBFuffgZTS5SXmp21jpEQEubhnVPMmUUdk3Wnw5IkEoZ43H8UhrSX4Y3zxTvCs3Aqw3GKTsmt7lqThwzfVrIlhiuoIBLWXqezPExlvl%2FT3IlQdqFwFKzW0hBqBRCAZHfqk3yF9INbvEwBmeNuRo3aG7%2Bm%2FN0f1WJYEHKgyXZ69lfhh41NkwzhxPkNyMGcTcnA3XuPaYo7VtrzQhC%2BneBdcpCroUyn1Fobw9cPFlKzOxOb9JkvHdDfNwP7jH0lGGezzdL9AxLeXUe6pK%2FlWGWvIfFznI0z8U4xmLY3W6oEI9DbjWGb6OaNCGk1kqxy8AMPlC6ZiXoElDov9OR4rgd8foGtNFuODwsq4aOB0ZoS3yGryZcDAfQqMkCIgqFQt8MYWSLwNDAlW1cFCLX7zLiQAjvgDQFkt3O%2FL2d9MEWHkLZS1jsjmwLvBPoc2XWlbRMT14IRhtzUxX6gAh5SFE0IWbjHzBjir62p1qxUqecIcRBxSgSN2t8eHAgFQbJPd1vQFILlL%2BDsnHa08FYxR%2BYzDUt7%2FABjqkAZriML5gebowQGqk2U%2Br9jETRg5zpc9P9W6Y3S08zkZ%2BAdcv1p1k6X0Jp38vRJTxdw6slqaN6WmwCjTS56lJHpUEZ%2FMNucCNfzQM1Z7EvzNRzjowd4nxetOM%2F77wVXSaC5B0dkmbJjdDiKMR3WvWnj6DhFHmOpVswd9XwvLhSXQq3U6GHDK64Wu366ffLZ88xR%2B%2Fm1IQEvWuyvTZzytzWspekvA9&X-Amz-Signature=3bf27fcdaeb71d77934c2ab32cc9f2bbf5915ca3b2b03511342915a9330f3de3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR5MQU2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtjkqF6B6z0JzNOfrtmX6Xm7tcEhCSf9uKMJwe3xHxTAIhALVC%2BlHhJ3hgh0hKQvgcEDgvMDQemwAHQshvICtDG%2FhKKv8DCH0QABoMNjM3NDIzMTgzODA1IgxAgGAhfC8yiLrpTgwq3AOXHtcCTtGWiSTW%2BeYtJp0ZPxo2DNh4tX8vHLA%2FOMKztW2hfRHCCVH3%2B%2Fg8nGU3D%2BNkJU94%2Fp7BK4Z6jh6tsY1ySDC4OzdosmdvwvHaSfBFuffgZTS5SXmp21jpEQEubhnVPMmUUdk3Wnw5IkEoZ43H8UhrSX4Y3zxTvCs3Aqw3GKTsmt7lqThwzfVrIlhiuoIBLWXqezPExlvl%2FT3IlQdqFwFKzW0hBqBRCAZHfqk3yF9INbvEwBmeNuRo3aG7%2Bm%2FN0f1WJYEHKgyXZ69lfhh41NkwzhxPkNyMGcTcnA3XuPaYo7VtrzQhC%2BneBdcpCroUyn1Fobw9cPFlKzOxOb9JkvHdDfNwP7jH0lGGezzdL9AxLeXUe6pK%2FlWGWvIfFznI0z8U4xmLY3W6oEI9DbjWGb6OaNCGk1kqxy8AMPlC6ZiXoElDov9OR4rgd8foGtNFuODwsq4aOB0ZoS3yGryZcDAfQqMkCIgqFQt8MYWSLwNDAlW1cFCLX7zLiQAjvgDQFkt3O%2FL2d9MEWHkLZS1jsjmwLvBPoc2XWlbRMT14IRhtzUxX6gAh5SFE0IWbjHzBjir62p1qxUqecIcRBxSgSN2t8eHAgFQbJPd1vQFILlL%2BDsnHa08FYxR%2BYzDUt7%2FABjqkAZriML5gebowQGqk2U%2Br9jETRg5zpc9P9W6Y3S08zkZ%2BAdcv1p1k6X0Jp38vRJTxdw6slqaN6WmwCjTS56lJHpUEZ%2FMNucCNfzQM1Z7EvzNRzjowd4nxetOM%2F77wVXSaC5B0dkmbJjdDiKMR3WvWnj6DhFHmOpVswd9XwvLhSXQq3U6GHDK64Wu366ffLZ88xR%2B%2Fm1IQEvWuyvTZzytzWspekvA9&X-Amz-Signature=347188d191f327cf112039109aeb6ff5e73494186a65fba73aa75143d176312e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR5MQU2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtjkqF6B6z0JzNOfrtmX6Xm7tcEhCSf9uKMJwe3xHxTAIhALVC%2BlHhJ3hgh0hKQvgcEDgvMDQemwAHQshvICtDG%2FhKKv8DCH0QABoMNjM3NDIzMTgzODA1IgxAgGAhfC8yiLrpTgwq3AOXHtcCTtGWiSTW%2BeYtJp0ZPxo2DNh4tX8vHLA%2FOMKztW2hfRHCCVH3%2B%2Fg8nGU3D%2BNkJU94%2Fp7BK4Z6jh6tsY1ySDC4OzdosmdvwvHaSfBFuffgZTS5SXmp21jpEQEubhnVPMmUUdk3Wnw5IkEoZ43H8UhrSX4Y3zxTvCs3Aqw3GKTsmt7lqThwzfVrIlhiuoIBLWXqezPExlvl%2FT3IlQdqFwFKzW0hBqBRCAZHfqk3yF9INbvEwBmeNuRo3aG7%2Bm%2FN0f1WJYEHKgyXZ69lfhh41NkwzhxPkNyMGcTcnA3XuPaYo7VtrzQhC%2BneBdcpCroUyn1Fobw9cPFlKzOxOb9JkvHdDfNwP7jH0lGGezzdL9AxLeXUe6pK%2FlWGWvIfFznI0z8U4xmLY3W6oEI9DbjWGb6OaNCGk1kqxy8AMPlC6ZiXoElDov9OR4rgd8foGtNFuODwsq4aOB0ZoS3yGryZcDAfQqMkCIgqFQt8MYWSLwNDAlW1cFCLX7zLiQAjvgDQFkt3O%2FL2d9MEWHkLZS1jsjmwLvBPoc2XWlbRMT14IRhtzUxX6gAh5SFE0IWbjHzBjir62p1qxUqecIcRBxSgSN2t8eHAgFQbJPd1vQFILlL%2BDsnHa08FYxR%2BYzDUt7%2FABjqkAZriML5gebowQGqk2U%2Br9jETRg5zpc9P9W6Y3S08zkZ%2BAdcv1p1k6X0Jp38vRJTxdw6slqaN6WmwCjTS56lJHpUEZ%2FMNucCNfzQM1Z7EvzNRzjowd4nxetOM%2F77wVXSaC5B0dkmbJjdDiKMR3WvWnj6DhFHmOpVswd9XwvLhSXQq3U6GHDK64Wu366ffLZ88xR%2B%2Fm1IQEvWuyvTZzytzWspekvA9&X-Amz-Signature=28dc2206ce353f7be62aeb465c103dd2aa75a823f49874c15e8a569750574d54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
