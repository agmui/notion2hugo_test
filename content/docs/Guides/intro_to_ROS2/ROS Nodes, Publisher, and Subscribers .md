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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYSIS3J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDY%2B223Vzpl6XQY0MFK2dr5lQ%2FfY6ktUkdPZccxnMUk0AiEA2hPUFiQaMUhK0gKkak23Lwsu94M6ejFGG4yagRMMeLcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLEPMNIuyANROlb3ryrcA%2Bvudf8RpxpaLlvZiSluDOdSFC4mtID2fVumVJh5oFQGcLV55sGQEDF8EGr%2BjfDeGjfwG8T7RRheKXnTatcQUQ%2BiXxDYCu7QnsLtlcLq%2B0I8BX01NLXD9adtecMtt%2Fh2dQCtk1uvsQZIFsmBvzROLZwd54zbxIoYywsnk3KooIoM67%2B%2BAmgrnqWsZdY6QkHlJiTMPFlSmTTZq5eug%2BP5waCPsmBSa%2BSJVjQbLm%2BUHNC4GIpqNboim59izoXoRrmOvU29rFo2%2BfW7qbHg3PXMcNyKiAFGH9pYlZZl%2FtD223Rh4DU7dZFfFfwBYXFK9T2l0mAqpaWEOW8Xj83QQSDwuFeINa68labhTD8x2UWIgEjFcSqI2%2B1DyraxMNutzc5%2Bti5FvlDmrgLUAwi3hIMcUsCj0O4FVQQO3rPd7eE293DZFQzIjQlI0kqksQMOl2GeXqUZSD%2B6MhvvXXxxMpbo%2B2WZx4gmLzJ%2B5dfqwrQocH814K0Pqdh6zqXZSi0plby014RgMZCx%2BnbLxczevy2D5cwUYXnOPmhBNdUZb06P3M14CWvsiX6GH4G4l75cP7%2F%2FyC7XSsbzn%2FCRUpQLUdS0WSm6vAfQjCSJX%2BuB9oAowZmXlVFiJpnUli%2FTm5Y3MMqs%2B8EGOqUBFwu2xO4IxOopq7B%2FXBsPkicxd6jFERy9b5NUd0lI0TEksMWzLIUBu2HWubcfVO1zc385bmwisrTCD0eXZpIV7jCC7TcNB%2F667whe2houdEX3wQV9T7cnk1Yj%2BHBaBBEUnEYH2W6DiBXN3lmo4RmffLsmMrFSlOf1IkNpNG6HywPPzETD0OjDrsnQgb54lVlbS6kI%2F5LFmi71tntjdqs58YF6ZxaA&X-Amz-Signature=9db09252a09a27fe7132cbe24d870d7a3dbf554d7c92fd4a6c73b98caf8ed96f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYSIS3J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDY%2B223Vzpl6XQY0MFK2dr5lQ%2FfY6ktUkdPZccxnMUk0AiEA2hPUFiQaMUhK0gKkak23Lwsu94M6ejFGG4yagRMMeLcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLEPMNIuyANROlb3ryrcA%2Bvudf8RpxpaLlvZiSluDOdSFC4mtID2fVumVJh5oFQGcLV55sGQEDF8EGr%2BjfDeGjfwG8T7RRheKXnTatcQUQ%2BiXxDYCu7QnsLtlcLq%2B0I8BX01NLXD9adtecMtt%2Fh2dQCtk1uvsQZIFsmBvzROLZwd54zbxIoYywsnk3KooIoM67%2B%2BAmgrnqWsZdY6QkHlJiTMPFlSmTTZq5eug%2BP5waCPsmBSa%2BSJVjQbLm%2BUHNC4GIpqNboim59izoXoRrmOvU29rFo2%2BfW7qbHg3PXMcNyKiAFGH9pYlZZl%2FtD223Rh4DU7dZFfFfwBYXFK9T2l0mAqpaWEOW8Xj83QQSDwuFeINa68labhTD8x2UWIgEjFcSqI2%2B1DyraxMNutzc5%2Bti5FvlDmrgLUAwi3hIMcUsCj0O4FVQQO3rPd7eE293DZFQzIjQlI0kqksQMOl2GeXqUZSD%2B6MhvvXXxxMpbo%2B2WZx4gmLzJ%2B5dfqwrQocH814K0Pqdh6zqXZSi0plby014RgMZCx%2BnbLxczevy2D5cwUYXnOPmhBNdUZb06P3M14CWvsiX6GH4G4l75cP7%2F%2FyC7XSsbzn%2FCRUpQLUdS0WSm6vAfQjCSJX%2BuB9oAowZmXlVFiJpnUli%2FTm5Y3MMqs%2B8EGOqUBFwu2xO4IxOopq7B%2FXBsPkicxd6jFERy9b5NUd0lI0TEksMWzLIUBu2HWubcfVO1zc385bmwisrTCD0eXZpIV7jCC7TcNB%2F667whe2houdEX3wQV9T7cnk1Yj%2BHBaBBEUnEYH2W6DiBXN3lmo4RmffLsmMrFSlOf1IkNpNG6HywPPzETD0OjDrsnQgb54lVlbS6kI%2F5LFmi71tntjdqs58YF6ZxaA&X-Amz-Signature=a2992e38f9855aa99a5d72120307285567fa3aba50ffddadf52aba35e087bce3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYSIS3J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDY%2B223Vzpl6XQY0MFK2dr5lQ%2FfY6ktUkdPZccxnMUk0AiEA2hPUFiQaMUhK0gKkak23Lwsu94M6ejFGG4yagRMMeLcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLEPMNIuyANROlb3ryrcA%2Bvudf8RpxpaLlvZiSluDOdSFC4mtID2fVumVJh5oFQGcLV55sGQEDF8EGr%2BjfDeGjfwG8T7RRheKXnTatcQUQ%2BiXxDYCu7QnsLtlcLq%2B0I8BX01NLXD9adtecMtt%2Fh2dQCtk1uvsQZIFsmBvzROLZwd54zbxIoYywsnk3KooIoM67%2B%2BAmgrnqWsZdY6QkHlJiTMPFlSmTTZq5eug%2BP5waCPsmBSa%2BSJVjQbLm%2BUHNC4GIpqNboim59izoXoRrmOvU29rFo2%2BfW7qbHg3PXMcNyKiAFGH9pYlZZl%2FtD223Rh4DU7dZFfFfwBYXFK9T2l0mAqpaWEOW8Xj83QQSDwuFeINa68labhTD8x2UWIgEjFcSqI2%2B1DyraxMNutzc5%2Bti5FvlDmrgLUAwi3hIMcUsCj0O4FVQQO3rPd7eE293DZFQzIjQlI0kqksQMOl2GeXqUZSD%2B6MhvvXXxxMpbo%2B2WZx4gmLzJ%2B5dfqwrQocH814K0Pqdh6zqXZSi0plby014RgMZCx%2BnbLxczevy2D5cwUYXnOPmhBNdUZb06P3M14CWvsiX6GH4G4l75cP7%2F%2FyC7XSsbzn%2FCRUpQLUdS0WSm6vAfQjCSJX%2BuB9oAowZmXlVFiJpnUli%2FTm5Y3MMqs%2B8EGOqUBFwu2xO4IxOopq7B%2FXBsPkicxd6jFERy9b5NUd0lI0TEksMWzLIUBu2HWubcfVO1zc385bmwisrTCD0eXZpIV7jCC7TcNB%2F667whe2houdEX3wQV9T7cnk1Yj%2BHBaBBEUnEYH2W6DiBXN3lmo4RmffLsmMrFSlOf1IkNpNG6HywPPzETD0OjDrsnQgb54lVlbS6kI%2F5LFmi71tntjdqs58YF6ZxaA&X-Amz-Signature=3bc7d91ca015b9e744e87f60530db15ce5836dcc4013cf8f48d4a58dfaa2a1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYSIS3J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDY%2B223Vzpl6XQY0MFK2dr5lQ%2FfY6ktUkdPZccxnMUk0AiEA2hPUFiQaMUhK0gKkak23Lwsu94M6ejFGG4yagRMMeLcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLEPMNIuyANROlb3ryrcA%2Bvudf8RpxpaLlvZiSluDOdSFC4mtID2fVumVJh5oFQGcLV55sGQEDF8EGr%2BjfDeGjfwG8T7RRheKXnTatcQUQ%2BiXxDYCu7QnsLtlcLq%2B0I8BX01NLXD9adtecMtt%2Fh2dQCtk1uvsQZIFsmBvzROLZwd54zbxIoYywsnk3KooIoM67%2B%2BAmgrnqWsZdY6QkHlJiTMPFlSmTTZq5eug%2BP5waCPsmBSa%2BSJVjQbLm%2BUHNC4GIpqNboim59izoXoRrmOvU29rFo2%2BfW7qbHg3PXMcNyKiAFGH9pYlZZl%2FtD223Rh4DU7dZFfFfwBYXFK9T2l0mAqpaWEOW8Xj83QQSDwuFeINa68labhTD8x2UWIgEjFcSqI2%2B1DyraxMNutzc5%2Bti5FvlDmrgLUAwi3hIMcUsCj0O4FVQQO3rPd7eE293DZFQzIjQlI0kqksQMOl2GeXqUZSD%2B6MhvvXXxxMpbo%2B2WZx4gmLzJ%2B5dfqwrQocH814K0Pqdh6zqXZSi0plby014RgMZCx%2BnbLxczevy2D5cwUYXnOPmhBNdUZb06P3M14CWvsiX6GH4G4l75cP7%2F%2FyC7XSsbzn%2FCRUpQLUdS0WSm6vAfQjCSJX%2BuB9oAowZmXlVFiJpnUli%2FTm5Y3MMqs%2B8EGOqUBFwu2xO4IxOopq7B%2FXBsPkicxd6jFERy9b5NUd0lI0TEksMWzLIUBu2HWubcfVO1zc385bmwisrTCD0eXZpIV7jCC7TcNB%2F667whe2houdEX3wQV9T7cnk1Yj%2BHBaBBEUnEYH2W6DiBXN3lmo4RmffLsmMrFSlOf1IkNpNG6HywPPzETD0OjDrsnQgb54lVlbS6kI%2F5LFmi71tntjdqs58YF6ZxaA&X-Amz-Signature=99cdfa6fca9ba5358aa4e9243ae0f7088c5b8e68f5fbf7e8960705c945a42bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYSIS3J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDY%2B223Vzpl6XQY0MFK2dr5lQ%2FfY6ktUkdPZccxnMUk0AiEA2hPUFiQaMUhK0gKkak23Lwsu94M6ejFGG4yagRMMeLcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLEPMNIuyANROlb3ryrcA%2Bvudf8RpxpaLlvZiSluDOdSFC4mtID2fVumVJh5oFQGcLV55sGQEDF8EGr%2BjfDeGjfwG8T7RRheKXnTatcQUQ%2BiXxDYCu7QnsLtlcLq%2B0I8BX01NLXD9adtecMtt%2Fh2dQCtk1uvsQZIFsmBvzROLZwd54zbxIoYywsnk3KooIoM67%2B%2BAmgrnqWsZdY6QkHlJiTMPFlSmTTZq5eug%2BP5waCPsmBSa%2BSJVjQbLm%2BUHNC4GIpqNboim59izoXoRrmOvU29rFo2%2BfW7qbHg3PXMcNyKiAFGH9pYlZZl%2FtD223Rh4DU7dZFfFfwBYXFK9T2l0mAqpaWEOW8Xj83QQSDwuFeINa68labhTD8x2UWIgEjFcSqI2%2B1DyraxMNutzc5%2Bti5FvlDmrgLUAwi3hIMcUsCj0O4FVQQO3rPd7eE293DZFQzIjQlI0kqksQMOl2GeXqUZSD%2B6MhvvXXxxMpbo%2B2WZx4gmLzJ%2B5dfqwrQocH814K0Pqdh6zqXZSi0plby014RgMZCx%2BnbLxczevy2D5cwUYXnOPmhBNdUZb06P3M14CWvsiX6GH4G4l75cP7%2F%2FyC7XSsbzn%2FCRUpQLUdS0WSm6vAfQjCSJX%2BuB9oAowZmXlVFiJpnUli%2FTm5Y3MMqs%2B8EGOqUBFwu2xO4IxOopq7B%2FXBsPkicxd6jFERy9b5NUd0lI0TEksMWzLIUBu2HWubcfVO1zc385bmwisrTCD0eXZpIV7jCC7TcNB%2F667whe2houdEX3wQV9T7cnk1Yj%2BHBaBBEUnEYH2W6DiBXN3lmo4RmffLsmMrFSlOf1IkNpNG6HywPPzETD0OjDrsnQgb54lVlbS6kI%2F5LFmi71tntjdqs58YF6ZxaA&X-Amz-Signature=4037d1f3e8b4606bc1016e9d4df90af11dbe6b81330f05f670c4034c01fbda02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYSIS3J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDY%2B223Vzpl6XQY0MFK2dr5lQ%2FfY6ktUkdPZccxnMUk0AiEA2hPUFiQaMUhK0gKkak23Lwsu94M6ejFGG4yagRMMeLcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLEPMNIuyANROlb3ryrcA%2Bvudf8RpxpaLlvZiSluDOdSFC4mtID2fVumVJh5oFQGcLV55sGQEDF8EGr%2BjfDeGjfwG8T7RRheKXnTatcQUQ%2BiXxDYCu7QnsLtlcLq%2B0I8BX01NLXD9adtecMtt%2Fh2dQCtk1uvsQZIFsmBvzROLZwd54zbxIoYywsnk3KooIoM67%2B%2BAmgrnqWsZdY6QkHlJiTMPFlSmTTZq5eug%2BP5waCPsmBSa%2BSJVjQbLm%2BUHNC4GIpqNboim59izoXoRrmOvU29rFo2%2BfW7qbHg3PXMcNyKiAFGH9pYlZZl%2FtD223Rh4DU7dZFfFfwBYXFK9T2l0mAqpaWEOW8Xj83QQSDwuFeINa68labhTD8x2UWIgEjFcSqI2%2B1DyraxMNutzc5%2Bti5FvlDmrgLUAwi3hIMcUsCj0O4FVQQO3rPd7eE293DZFQzIjQlI0kqksQMOl2GeXqUZSD%2B6MhvvXXxxMpbo%2B2WZx4gmLzJ%2B5dfqwrQocH814K0Pqdh6zqXZSi0plby014RgMZCx%2BnbLxczevy2D5cwUYXnOPmhBNdUZb06P3M14CWvsiX6GH4G4l75cP7%2F%2FyC7XSsbzn%2FCRUpQLUdS0WSm6vAfQjCSJX%2BuB9oAowZmXlVFiJpnUli%2FTm5Y3MMqs%2B8EGOqUBFwu2xO4IxOopq7B%2FXBsPkicxd6jFERy9b5NUd0lI0TEksMWzLIUBu2HWubcfVO1zc385bmwisrTCD0eXZpIV7jCC7TcNB%2F667whe2houdEX3wQV9T7cnk1Yj%2BHBaBBEUnEYH2W6DiBXN3lmo4RmffLsmMrFSlOf1IkNpNG6HywPPzETD0OjDrsnQgb54lVlbS6kI%2F5LFmi71tntjdqs58YF6ZxaA&X-Amz-Signature=d9b55e238cc6827e3f5796b768e48a0c7a4c8b383925dcf6d76dd75456656523&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYSIS3J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDY%2B223Vzpl6XQY0MFK2dr5lQ%2FfY6ktUkdPZccxnMUk0AiEA2hPUFiQaMUhK0gKkak23Lwsu94M6ejFGG4yagRMMeLcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLEPMNIuyANROlb3ryrcA%2Bvudf8RpxpaLlvZiSluDOdSFC4mtID2fVumVJh5oFQGcLV55sGQEDF8EGr%2BjfDeGjfwG8T7RRheKXnTatcQUQ%2BiXxDYCu7QnsLtlcLq%2B0I8BX01NLXD9adtecMtt%2Fh2dQCtk1uvsQZIFsmBvzROLZwd54zbxIoYywsnk3KooIoM67%2B%2BAmgrnqWsZdY6QkHlJiTMPFlSmTTZq5eug%2BP5waCPsmBSa%2BSJVjQbLm%2BUHNC4GIpqNboim59izoXoRrmOvU29rFo2%2BfW7qbHg3PXMcNyKiAFGH9pYlZZl%2FtD223Rh4DU7dZFfFfwBYXFK9T2l0mAqpaWEOW8Xj83QQSDwuFeINa68labhTD8x2UWIgEjFcSqI2%2B1DyraxMNutzc5%2Bti5FvlDmrgLUAwi3hIMcUsCj0O4FVQQO3rPd7eE293DZFQzIjQlI0kqksQMOl2GeXqUZSD%2B6MhvvXXxxMpbo%2B2WZx4gmLzJ%2B5dfqwrQocH814K0Pqdh6zqXZSi0plby014RgMZCx%2BnbLxczevy2D5cwUYXnOPmhBNdUZb06P3M14CWvsiX6GH4G4l75cP7%2F%2FyC7XSsbzn%2FCRUpQLUdS0WSm6vAfQjCSJX%2BuB9oAowZmXlVFiJpnUli%2FTm5Y3MMqs%2B8EGOqUBFwu2xO4IxOopq7B%2FXBsPkicxd6jFERy9b5NUd0lI0TEksMWzLIUBu2HWubcfVO1zc385bmwisrTCD0eXZpIV7jCC7TcNB%2F667whe2houdEX3wQV9T7cnk1Yj%2BHBaBBEUnEYH2W6DiBXN3lmo4RmffLsmMrFSlOf1IkNpNG6HywPPzETD0OjDrsnQgb54lVlbS6kI%2F5LFmi71tntjdqs58YF6ZxaA&X-Amz-Signature=37914104fcfdcf12ff0e84efb961723e2d7f2ce41afbaa08f7007c6db2e03c79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYSIS3J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDY%2B223Vzpl6XQY0MFK2dr5lQ%2FfY6ktUkdPZccxnMUk0AiEA2hPUFiQaMUhK0gKkak23Lwsu94M6ejFGG4yagRMMeLcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLEPMNIuyANROlb3ryrcA%2Bvudf8RpxpaLlvZiSluDOdSFC4mtID2fVumVJh5oFQGcLV55sGQEDF8EGr%2BjfDeGjfwG8T7RRheKXnTatcQUQ%2BiXxDYCu7QnsLtlcLq%2B0I8BX01NLXD9adtecMtt%2Fh2dQCtk1uvsQZIFsmBvzROLZwd54zbxIoYywsnk3KooIoM67%2B%2BAmgrnqWsZdY6QkHlJiTMPFlSmTTZq5eug%2BP5waCPsmBSa%2BSJVjQbLm%2BUHNC4GIpqNboim59izoXoRrmOvU29rFo2%2BfW7qbHg3PXMcNyKiAFGH9pYlZZl%2FtD223Rh4DU7dZFfFfwBYXFK9T2l0mAqpaWEOW8Xj83QQSDwuFeINa68labhTD8x2UWIgEjFcSqI2%2B1DyraxMNutzc5%2Bti5FvlDmrgLUAwi3hIMcUsCj0O4FVQQO3rPd7eE293DZFQzIjQlI0kqksQMOl2GeXqUZSD%2B6MhvvXXxxMpbo%2B2WZx4gmLzJ%2B5dfqwrQocH814K0Pqdh6zqXZSi0plby014RgMZCx%2BnbLxczevy2D5cwUYXnOPmhBNdUZb06P3M14CWvsiX6GH4G4l75cP7%2F%2FyC7XSsbzn%2FCRUpQLUdS0WSm6vAfQjCSJX%2BuB9oAowZmXlVFiJpnUli%2FTm5Y3MMqs%2B8EGOqUBFwu2xO4IxOopq7B%2FXBsPkicxd6jFERy9b5NUd0lI0TEksMWzLIUBu2HWubcfVO1zc385bmwisrTCD0eXZpIV7jCC7TcNB%2F667whe2houdEX3wQV9T7cnk1Yj%2BHBaBBEUnEYH2W6DiBXN3lmo4RmffLsmMrFSlOf1IkNpNG6HywPPzETD0OjDrsnQgb54lVlbS6kI%2F5LFmi71tntjdqs58YF6ZxaA&X-Amz-Signature=1de6a4d74a907f5f03b249c56ddbaa6abcac2085f858095ae513e25405bc2536&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
