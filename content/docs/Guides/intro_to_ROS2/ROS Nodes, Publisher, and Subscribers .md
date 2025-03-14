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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3A7LZ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjvARhtd9ZgwtaPo53ELsH7F627xGiibh43Z1KylUMtgIgIxW3I8YU2zfhol0O5Fax0lUqKppdjLbnZgcerWYQcXwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwR259oOi0%2FqkisMCrcA8EMlNqPytw3EYwC8NLeNild%2FN35mTgTzOaJcOXyTMebLNUrfgL5FxWWAPtbuW05M9Qsf8moHoXt40c4Fq3dAAvQ9ss87v3q5fGkoAfYtIvnhUKpQ86gb0CCRSkWVTnx8rBS6xGrtH%2BnrIOVPKsUIyXm54fvnl20Zj1752WGn%2FD9IyQ5jbkjh9cqoeaIFHs%2BbmEpFIVZwlGipZmem5OikbO4wd3OonLF%2BDOYV6C635m8kV9JG59wfdaIz0nrNZFn4OmYTQDpNx24eSvZoWsdQcrzayBoubyD%2F4iGirprsbdJqIFPt5bsGBGCkqUDQIitUyBbEQWl6m4Z8s%2FeDUHkbDT872mbcLVio2hevK4by4rwdlLfjWbaFoBcoPfoa2L0f6ED7M1WjRtXoqPreUjpFK%2F3EpHOeOlSA8gGhOpK4F8KgUcwoGUI4fr2B5YT2OpmyNnjEsL%2FlgegRfI9ivNuUx9TB1UTIMtuXgB0OkR%2BsktufndxOfAjmXz0s7iFBi8FqOFC1B6CIrOXfua2q66qKu2uYNrqMS3%2FTwr%2FjkqYIbEJ1Y%2FDI%2BOLFojAnYQ%2FNit91CvI88IDlX3Jz%2BVZbZ3zEadw%2F1tdgO5zl3lhQvgqChfuH6OkyYkWKa5TL8YYMMi%2F0b4GOqUByvGKmEp2670akYwHpF%2B6SKJWhC5xhsRf4boIu2c7BvUa7X29MnT1CsMiEt9xABq17UgYdXQoL6MhfNVqdup2HKiJG6QizxXirYNhqljySA89YoH%2B%2BNt6lYP81mpEwA%2FN%2FZzbzCRXZJVociw8tza3CZW0XQyAjo2gUxFrVMaG9lCZ73gYJJca0hbQZYjEw%2ByAd4WV36Id%2FHikwfye9KuRZs9cXNHK&X-Amz-Signature=21b3d710155ad23d4115a3e9f36387bf848f59e8d7c8e6166981ed5164199f65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3A7LZ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjvARhtd9ZgwtaPo53ELsH7F627xGiibh43Z1KylUMtgIgIxW3I8YU2zfhol0O5Fax0lUqKppdjLbnZgcerWYQcXwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwR259oOi0%2FqkisMCrcA8EMlNqPytw3EYwC8NLeNild%2FN35mTgTzOaJcOXyTMebLNUrfgL5FxWWAPtbuW05M9Qsf8moHoXt40c4Fq3dAAvQ9ss87v3q5fGkoAfYtIvnhUKpQ86gb0CCRSkWVTnx8rBS6xGrtH%2BnrIOVPKsUIyXm54fvnl20Zj1752WGn%2FD9IyQ5jbkjh9cqoeaIFHs%2BbmEpFIVZwlGipZmem5OikbO4wd3OonLF%2BDOYV6C635m8kV9JG59wfdaIz0nrNZFn4OmYTQDpNx24eSvZoWsdQcrzayBoubyD%2F4iGirprsbdJqIFPt5bsGBGCkqUDQIitUyBbEQWl6m4Z8s%2FeDUHkbDT872mbcLVio2hevK4by4rwdlLfjWbaFoBcoPfoa2L0f6ED7M1WjRtXoqPreUjpFK%2F3EpHOeOlSA8gGhOpK4F8KgUcwoGUI4fr2B5YT2OpmyNnjEsL%2FlgegRfI9ivNuUx9TB1UTIMtuXgB0OkR%2BsktufndxOfAjmXz0s7iFBi8FqOFC1B6CIrOXfua2q66qKu2uYNrqMS3%2FTwr%2FjkqYIbEJ1Y%2FDI%2BOLFojAnYQ%2FNit91CvI88IDlX3Jz%2BVZbZ3zEadw%2F1tdgO5zl3lhQvgqChfuH6OkyYkWKa5TL8YYMMi%2F0b4GOqUByvGKmEp2670akYwHpF%2B6SKJWhC5xhsRf4boIu2c7BvUa7X29MnT1CsMiEt9xABq17UgYdXQoL6MhfNVqdup2HKiJG6QizxXirYNhqljySA89YoH%2B%2BNt6lYP81mpEwA%2FN%2FZzbzCRXZJVociw8tza3CZW0XQyAjo2gUxFrVMaG9lCZ73gYJJca0hbQZYjEw%2ByAd4WV36Id%2FHikwfye9KuRZs9cXNHK&X-Amz-Signature=55a81b82e527d2d5010caed1d7f5a26f4bd25c499c433d2200e0cdaa233e2596&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3A7LZ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjvARhtd9ZgwtaPo53ELsH7F627xGiibh43Z1KylUMtgIgIxW3I8YU2zfhol0O5Fax0lUqKppdjLbnZgcerWYQcXwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwR259oOi0%2FqkisMCrcA8EMlNqPytw3EYwC8NLeNild%2FN35mTgTzOaJcOXyTMebLNUrfgL5FxWWAPtbuW05M9Qsf8moHoXt40c4Fq3dAAvQ9ss87v3q5fGkoAfYtIvnhUKpQ86gb0CCRSkWVTnx8rBS6xGrtH%2BnrIOVPKsUIyXm54fvnl20Zj1752WGn%2FD9IyQ5jbkjh9cqoeaIFHs%2BbmEpFIVZwlGipZmem5OikbO4wd3OonLF%2BDOYV6C635m8kV9JG59wfdaIz0nrNZFn4OmYTQDpNx24eSvZoWsdQcrzayBoubyD%2F4iGirprsbdJqIFPt5bsGBGCkqUDQIitUyBbEQWl6m4Z8s%2FeDUHkbDT872mbcLVio2hevK4by4rwdlLfjWbaFoBcoPfoa2L0f6ED7M1WjRtXoqPreUjpFK%2F3EpHOeOlSA8gGhOpK4F8KgUcwoGUI4fr2B5YT2OpmyNnjEsL%2FlgegRfI9ivNuUx9TB1UTIMtuXgB0OkR%2BsktufndxOfAjmXz0s7iFBi8FqOFC1B6CIrOXfua2q66qKu2uYNrqMS3%2FTwr%2FjkqYIbEJ1Y%2FDI%2BOLFojAnYQ%2FNit91CvI88IDlX3Jz%2BVZbZ3zEadw%2F1tdgO5zl3lhQvgqChfuH6OkyYkWKa5TL8YYMMi%2F0b4GOqUByvGKmEp2670akYwHpF%2B6SKJWhC5xhsRf4boIu2c7BvUa7X29MnT1CsMiEt9xABq17UgYdXQoL6MhfNVqdup2HKiJG6QizxXirYNhqljySA89YoH%2B%2BNt6lYP81mpEwA%2FN%2FZzbzCRXZJVociw8tza3CZW0XQyAjo2gUxFrVMaG9lCZ73gYJJca0hbQZYjEw%2ByAd4WV36Id%2FHikwfye9KuRZs9cXNHK&X-Amz-Signature=e1cd821022249168e45309134e5c3f2af191960cf65fee857cb1268eb7959dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3A7LZ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjvARhtd9ZgwtaPo53ELsH7F627xGiibh43Z1KylUMtgIgIxW3I8YU2zfhol0O5Fax0lUqKppdjLbnZgcerWYQcXwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwR259oOi0%2FqkisMCrcA8EMlNqPytw3EYwC8NLeNild%2FN35mTgTzOaJcOXyTMebLNUrfgL5FxWWAPtbuW05M9Qsf8moHoXt40c4Fq3dAAvQ9ss87v3q5fGkoAfYtIvnhUKpQ86gb0CCRSkWVTnx8rBS6xGrtH%2BnrIOVPKsUIyXm54fvnl20Zj1752WGn%2FD9IyQ5jbkjh9cqoeaIFHs%2BbmEpFIVZwlGipZmem5OikbO4wd3OonLF%2BDOYV6C635m8kV9JG59wfdaIz0nrNZFn4OmYTQDpNx24eSvZoWsdQcrzayBoubyD%2F4iGirprsbdJqIFPt5bsGBGCkqUDQIitUyBbEQWl6m4Z8s%2FeDUHkbDT872mbcLVio2hevK4by4rwdlLfjWbaFoBcoPfoa2L0f6ED7M1WjRtXoqPreUjpFK%2F3EpHOeOlSA8gGhOpK4F8KgUcwoGUI4fr2B5YT2OpmyNnjEsL%2FlgegRfI9ivNuUx9TB1UTIMtuXgB0OkR%2BsktufndxOfAjmXz0s7iFBi8FqOFC1B6CIrOXfua2q66qKu2uYNrqMS3%2FTwr%2FjkqYIbEJ1Y%2FDI%2BOLFojAnYQ%2FNit91CvI88IDlX3Jz%2BVZbZ3zEadw%2F1tdgO5zl3lhQvgqChfuH6OkyYkWKa5TL8YYMMi%2F0b4GOqUByvGKmEp2670akYwHpF%2B6SKJWhC5xhsRf4boIu2c7BvUa7X29MnT1CsMiEt9xABq17UgYdXQoL6MhfNVqdup2HKiJG6QizxXirYNhqljySA89YoH%2B%2BNt6lYP81mpEwA%2FN%2FZzbzCRXZJVociw8tza3CZW0XQyAjo2gUxFrVMaG9lCZ73gYJJca0hbQZYjEw%2ByAd4WV36Id%2FHikwfye9KuRZs9cXNHK&X-Amz-Signature=c335656e14a82d697827354b6990452d44d37cddd40e45e763b84a1b8d44c996&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3A7LZ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjvARhtd9ZgwtaPo53ELsH7F627xGiibh43Z1KylUMtgIgIxW3I8YU2zfhol0O5Fax0lUqKppdjLbnZgcerWYQcXwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwR259oOi0%2FqkisMCrcA8EMlNqPytw3EYwC8NLeNild%2FN35mTgTzOaJcOXyTMebLNUrfgL5FxWWAPtbuW05M9Qsf8moHoXt40c4Fq3dAAvQ9ss87v3q5fGkoAfYtIvnhUKpQ86gb0CCRSkWVTnx8rBS6xGrtH%2BnrIOVPKsUIyXm54fvnl20Zj1752WGn%2FD9IyQ5jbkjh9cqoeaIFHs%2BbmEpFIVZwlGipZmem5OikbO4wd3OonLF%2BDOYV6C635m8kV9JG59wfdaIz0nrNZFn4OmYTQDpNx24eSvZoWsdQcrzayBoubyD%2F4iGirprsbdJqIFPt5bsGBGCkqUDQIitUyBbEQWl6m4Z8s%2FeDUHkbDT872mbcLVio2hevK4by4rwdlLfjWbaFoBcoPfoa2L0f6ED7M1WjRtXoqPreUjpFK%2F3EpHOeOlSA8gGhOpK4F8KgUcwoGUI4fr2B5YT2OpmyNnjEsL%2FlgegRfI9ivNuUx9TB1UTIMtuXgB0OkR%2BsktufndxOfAjmXz0s7iFBi8FqOFC1B6CIrOXfua2q66qKu2uYNrqMS3%2FTwr%2FjkqYIbEJ1Y%2FDI%2BOLFojAnYQ%2FNit91CvI88IDlX3Jz%2BVZbZ3zEadw%2F1tdgO5zl3lhQvgqChfuH6OkyYkWKa5TL8YYMMi%2F0b4GOqUByvGKmEp2670akYwHpF%2B6SKJWhC5xhsRf4boIu2c7BvUa7X29MnT1CsMiEt9xABq17UgYdXQoL6MhfNVqdup2HKiJG6QizxXirYNhqljySA89YoH%2B%2BNt6lYP81mpEwA%2FN%2FZzbzCRXZJVociw8tza3CZW0XQyAjo2gUxFrVMaG9lCZ73gYJJca0hbQZYjEw%2ByAd4WV36Id%2FHikwfye9KuRZs9cXNHK&X-Amz-Signature=e44eac70718b29b60d14163109892a274511a22e99155a4899ac5b7bc2134674&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3A7LZ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjvARhtd9ZgwtaPo53ELsH7F627xGiibh43Z1KylUMtgIgIxW3I8YU2zfhol0O5Fax0lUqKppdjLbnZgcerWYQcXwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwR259oOi0%2FqkisMCrcA8EMlNqPytw3EYwC8NLeNild%2FN35mTgTzOaJcOXyTMebLNUrfgL5FxWWAPtbuW05M9Qsf8moHoXt40c4Fq3dAAvQ9ss87v3q5fGkoAfYtIvnhUKpQ86gb0CCRSkWVTnx8rBS6xGrtH%2BnrIOVPKsUIyXm54fvnl20Zj1752WGn%2FD9IyQ5jbkjh9cqoeaIFHs%2BbmEpFIVZwlGipZmem5OikbO4wd3OonLF%2BDOYV6C635m8kV9JG59wfdaIz0nrNZFn4OmYTQDpNx24eSvZoWsdQcrzayBoubyD%2F4iGirprsbdJqIFPt5bsGBGCkqUDQIitUyBbEQWl6m4Z8s%2FeDUHkbDT872mbcLVio2hevK4by4rwdlLfjWbaFoBcoPfoa2L0f6ED7M1WjRtXoqPreUjpFK%2F3EpHOeOlSA8gGhOpK4F8KgUcwoGUI4fr2B5YT2OpmyNnjEsL%2FlgegRfI9ivNuUx9TB1UTIMtuXgB0OkR%2BsktufndxOfAjmXz0s7iFBi8FqOFC1B6CIrOXfua2q66qKu2uYNrqMS3%2FTwr%2FjkqYIbEJ1Y%2FDI%2BOLFojAnYQ%2FNit91CvI88IDlX3Jz%2BVZbZ3zEadw%2F1tdgO5zl3lhQvgqChfuH6OkyYkWKa5TL8YYMMi%2F0b4GOqUByvGKmEp2670akYwHpF%2B6SKJWhC5xhsRf4boIu2c7BvUa7X29MnT1CsMiEt9xABq17UgYdXQoL6MhfNVqdup2HKiJG6QizxXirYNhqljySA89YoH%2B%2BNt6lYP81mpEwA%2FN%2FZzbzCRXZJVociw8tza3CZW0XQyAjo2gUxFrVMaG9lCZ73gYJJca0hbQZYjEw%2ByAd4WV36Id%2FHikwfye9KuRZs9cXNHK&X-Amz-Signature=339ee9889129f13262f4eb84bd6c32fa5e09b03c694a48e5c872463a2e46b85d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3A7LZ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjvARhtd9ZgwtaPo53ELsH7F627xGiibh43Z1KylUMtgIgIxW3I8YU2zfhol0O5Fax0lUqKppdjLbnZgcerWYQcXwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwR259oOi0%2FqkisMCrcA8EMlNqPytw3EYwC8NLeNild%2FN35mTgTzOaJcOXyTMebLNUrfgL5FxWWAPtbuW05M9Qsf8moHoXt40c4Fq3dAAvQ9ss87v3q5fGkoAfYtIvnhUKpQ86gb0CCRSkWVTnx8rBS6xGrtH%2BnrIOVPKsUIyXm54fvnl20Zj1752WGn%2FD9IyQ5jbkjh9cqoeaIFHs%2BbmEpFIVZwlGipZmem5OikbO4wd3OonLF%2BDOYV6C635m8kV9JG59wfdaIz0nrNZFn4OmYTQDpNx24eSvZoWsdQcrzayBoubyD%2F4iGirprsbdJqIFPt5bsGBGCkqUDQIitUyBbEQWl6m4Z8s%2FeDUHkbDT872mbcLVio2hevK4by4rwdlLfjWbaFoBcoPfoa2L0f6ED7M1WjRtXoqPreUjpFK%2F3EpHOeOlSA8gGhOpK4F8KgUcwoGUI4fr2B5YT2OpmyNnjEsL%2FlgegRfI9ivNuUx9TB1UTIMtuXgB0OkR%2BsktufndxOfAjmXz0s7iFBi8FqOFC1B6CIrOXfua2q66qKu2uYNrqMS3%2FTwr%2FjkqYIbEJ1Y%2FDI%2BOLFojAnYQ%2FNit91CvI88IDlX3Jz%2BVZbZ3zEadw%2F1tdgO5zl3lhQvgqChfuH6OkyYkWKa5TL8YYMMi%2F0b4GOqUByvGKmEp2670akYwHpF%2B6SKJWhC5xhsRf4boIu2c7BvUa7X29MnT1CsMiEt9xABq17UgYdXQoL6MhfNVqdup2HKiJG6QizxXirYNhqljySA89YoH%2B%2BNt6lYP81mpEwA%2FN%2FZzbzCRXZJVociw8tza3CZW0XQyAjo2gUxFrVMaG9lCZ73gYJJca0hbQZYjEw%2ByAd4WV36Id%2FHikwfye9KuRZs9cXNHK&X-Amz-Signature=5ca89916b9eaa7cba8e70a9c7feddefd070987999b11bfd3dbbf32326461b433&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3A7LZ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjvARhtd9ZgwtaPo53ELsH7F627xGiibh43Z1KylUMtgIgIxW3I8YU2zfhol0O5Fax0lUqKppdjLbnZgcerWYQcXwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwR259oOi0%2FqkisMCrcA8EMlNqPytw3EYwC8NLeNild%2FN35mTgTzOaJcOXyTMebLNUrfgL5FxWWAPtbuW05M9Qsf8moHoXt40c4Fq3dAAvQ9ss87v3q5fGkoAfYtIvnhUKpQ86gb0CCRSkWVTnx8rBS6xGrtH%2BnrIOVPKsUIyXm54fvnl20Zj1752WGn%2FD9IyQ5jbkjh9cqoeaIFHs%2BbmEpFIVZwlGipZmem5OikbO4wd3OonLF%2BDOYV6C635m8kV9JG59wfdaIz0nrNZFn4OmYTQDpNx24eSvZoWsdQcrzayBoubyD%2F4iGirprsbdJqIFPt5bsGBGCkqUDQIitUyBbEQWl6m4Z8s%2FeDUHkbDT872mbcLVio2hevK4by4rwdlLfjWbaFoBcoPfoa2L0f6ED7M1WjRtXoqPreUjpFK%2F3EpHOeOlSA8gGhOpK4F8KgUcwoGUI4fr2B5YT2OpmyNnjEsL%2FlgegRfI9ivNuUx9TB1UTIMtuXgB0OkR%2BsktufndxOfAjmXz0s7iFBi8FqOFC1B6CIrOXfua2q66qKu2uYNrqMS3%2FTwr%2FjkqYIbEJ1Y%2FDI%2BOLFojAnYQ%2FNit91CvI88IDlX3Jz%2BVZbZ3zEadw%2F1tdgO5zl3lhQvgqChfuH6OkyYkWKa5TL8YYMMi%2F0b4GOqUByvGKmEp2670akYwHpF%2B6SKJWhC5xhsRf4boIu2c7BvUa7X29MnT1CsMiEt9xABq17UgYdXQoL6MhfNVqdup2HKiJG6QizxXirYNhqljySA89YoH%2B%2BNt6lYP81mpEwA%2FN%2FZzbzCRXZJVociw8tza3CZW0XQyAjo2gUxFrVMaG9lCZ73gYJJca0hbQZYjEw%2ByAd4WV36Id%2FHikwfye9KuRZs9cXNHK&X-Amz-Signature=6c24ccf67c2a823ae7fe1e81680b1c579fa62213ad7556bd3f7bad24a23ba604&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
