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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMBGMZA2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDYOL5hC7T51K%2FwWtmZzGxqxUtOzvih2Fijg4Vm9b9P5gIgFjyeQVixBxxOi0rN9QJu8YbmvIvgaz%2FXKKpbJLWcXUEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFr32T3UluefqgZfiSrcA%2B8bKkbFOxwmvzM1ETGm00e1dD2ESvFANEwDb44OZADm%2B0AqwWIer20nYqtcd4b1pLidFf1cRZMwiiTs0mQm7Y4HtvUXOFuOZnYut0%2FnGZSt4ijH2A2P%2BmcsyqhPBZLY5iBpmqo%2Fod42wrd7HIsfMg6NcEOfJL5Aa1%2F71SIcgRVExjUYxXvAvE8%2BXep9bJwbqXkLwtcjx%2BK%2BYu1jCdAVSJauRXnuavIS5GG9EXbR9P6DTzNG1VrAXjxFAQgZV2SIZANqFfw3VOkNKVnkrULbe7GEPlStphM7Ctl3949kljr%2BnncHfP8AvuWHUyvdH8k6fljCcdZYvf7ATv9oKXZe3f8zBB2xiUuHNOTe3sh4Buyzr4fH8l3oXjcEd1fUpBeS7GobOa%2BQ5kcbNFGWx%2Bq1nnN5dbChg6mXYEzN9wnZANvIYwBxglFg7Y8o3hEt6vc9Ip7rRiNfBKXfL%2BQVwJK5HktroviXPNQrhIE12%2FQY8BXOzdtZ0cUh2brZDBU9UEoAjHkxnemdJOk56XmE62rOnE1iNbNmQZDgFmYTU5xZ0kTq3TY8Rs6DcRqjZhEQc3XU4PU%2B%2F5%2BHth%2FvX5WcsALSq7%2Bhrn8vhkbrOVAYBrjplrwuZdRvMqRJhmOC0Do8MKKgrb4GOqUB1YFCkzDJgevzJI1ZbMgFNCYfXfudCdJwRSmnBdOPcuQ3a9nTPpn6cwb9RYur0%2B1NXoLZzqmJIWogYvhnHTD7ILCur6oaCiTIbg%2BqgZtVRNm1keYkDj6JiGDH2pYK%2FWAZRa38oQOYY1p202Jle0VX1KRgAz6ON%2BvBW%2Bo3MD3lc60mkDvAxTTaEBHF5T7BhqZ9NnXyoyAZa6FYf9rIrBRl3gew7zmv&X-Amz-Signature=09a887ab7223d021f6f7878b402c3a1e84f6aef767a0a6d7704ad691314ab073&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMBGMZA2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDYOL5hC7T51K%2FwWtmZzGxqxUtOzvih2Fijg4Vm9b9P5gIgFjyeQVixBxxOi0rN9QJu8YbmvIvgaz%2FXKKpbJLWcXUEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFr32T3UluefqgZfiSrcA%2B8bKkbFOxwmvzM1ETGm00e1dD2ESvFANEwDb44OZADm%2B0AqwWIer20nYqtcd4b1pLidFf1cRZMwiiTs0mQm7Y4HtvUXOFuOZnYut0%2FnGZSt4ijH2A2P%2BmcsyqhPBZLY5iBpmqo%2Fod42wrd7HIsfMg6NcEOfJL5Aa1%2F71SIcgRVExjUYxXvAvE8%2BXep9bJwbqXkLwtcjx%2BK%2BYu1jCdAVSJauRXnuavIS5GG9EXbR9P6DTzNG1VrAXjxFAQgZV2SIZANqFfw3VOkNKVnkrULbe7GEPlStphM7Ctl3949kljr%2BnncHfP8AvuWHUyvdH8k6fljCcdZYvf7ATv9oKXZe3f8zBB2xiUuHNOTe3sh4Buyzr4fH8l3oXjcEd1fUpBeS7GobOa%2BQ5kcbNFGWx%2Bq1nnN5dbChg6mXYEzN9wnZANvIYwBxglFg7Y8o3hEt6vc9Ip7rRiNfBKXfL%2BQVwJK5HktroviXPNQrhIE12%2FQY8BXOzdtZ0cUh2brZDBU9UEoAjHkxnemdJOk56XmE62rOnE1iNbNmQZDgFmYTU5xZ0kTq3TY8Rs6DcRqjZhEQc3XU4PU%2B%2F5%2BHth%2FvX5WcsALSq7%2Bhrn8vhkbrOVAYBrjplrwuZdRvMqRJhmOC0Do8MKKgrb4GOqUB1YFCkzDJgevzJI1ZbMgFNCYfXfudCdJwRSmnBdOPcuQ3a9nTPpn6cwb9RYur0%2B1NXoLZzqmJIWogYvhnHTD7ILCur6oaCiTIbg%2BqgZtVRNm1keYkDj6JiGDH2pYK%2FWAZRa38oQOYY1p202Jle0VX1KRgAz6ON%2BvBW%2Bo3MD3lc60mkDvAxTTaEBHF5T7BhqZ9NnXyoyAZa6FYf9rIrBRl3gew7zmv&X-Amz-Signature=993a964fa649a2446d136e4064b60aa3d8502dcc0b914c33fd5cabfe0c683b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMBGMZA2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDYOL5hC7T51K%2FwWtmZzGxqxUtOzvih2Fijg4Vm9b9P5gIgFjyeQVixBxxOi0rN9QJu8YbmvIvgaz%2FXKKpbJLWcXUEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFr32T3UluefqgZfiSrcA%2B8bKkbFOxwmvzM1ETGm00e1dD2ESvFANEwDb44OZADm%2B0AqwWIer20nYqtcd4b1pLidFf1cRZMwiiTs0mQm7Y4HtvUXOFuOZnYut0%2FnGZSt4ijH2A2P%2BmcsyqhPBZLY5iBpmqo%2Fod42wrd7HIsfMg6NcEOfJL5Aa1%2F71SIcgRVExjUYxXvAvE8%2BXep9bJwbqXkLwtcjx%2BK%2BYu1jCdAVSJauRXnuavIS5GG9EXbR9P6DTzNG1VrAXjxFAQgZV2SIZANqFfw3VOkNKVnkrULbe7GEPlStphM7Ctl3949kljr%2BnncHfP8AvuWHUyvdH8k6fljCcdZYvf7ATv9oKXZe3f8zBB2xiUuHNOTe3sh4Buyzr4fH8l3oXjcEd1fUpBeS7GobOa%2BQ5kcbNFGWx%2Bq1nnN5dbChg6mXYEzN9wnZANvIYwBxglFg7Y8o3hEt6vc9Ip7rRiNfBKXfL%2BQVwJK5HktroviXPNQrhIE12%2FQY8BXOzdtZ0cUh2brZDBU9UEoAjHkxnemdJOk56XmE62rOnE1iNbNmQZDgFmYTU5xZ0kTq3TY8Rs6DcRqjZhEQc3XU4PU%2B%2F5%2BHth%2FvX5WcsALSq7%2Bhrn8vhkbrOVAYBrjplrwuZdRvMqRJhmOC0Do8MKKgrb4GOqUB1YFCkzDJgevzJI1ZbMgFNCYfXfudCdJwRSmnBdOPcuQ3a9nTPpn6cwb9RYur0%2B1NXoLZzqmJIWogYvhnHTD7ILCur6oaCiTIbg%2BqgZtVRNm1keYkDj6JiGDH2pYK%2FWAZRa38oQOYY1p202Jle0VX1KRgAz6ON%2BvBW%2Bo3MD3lc60mkDvAxTTaEBHF5T7BhqZ9NnXyoyAZa6FYf9rIrBRl3gew7zmv&X-Amz-Signature=4b73e469969d17876536b725ed153bb05e9ff96ee2823c84c8769329eb9141f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMBGMZA2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDYOL5hC7T51K%2FwWtmZzGxqxUtOzvih2Fijg4Vm9b9P5gIgFjyeQVixBxxOi0rN9QJu8YbmvIvgaz%2FXKKpbJLWcXUEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFr32T3UluefqgZfiSrcA%2B8bKkbFOxwmvzM1ETGm00e1dD2ESvFANEwDb44OZADm%2B0AqwWIer20nYqtcd4b1pLidFf1cRZMwiiTs0mQm7Y4HtvUXOFuOZnYut0%2FnGZSt4ijH2A2P%2BmcsyqhPBZLY5iBpmqo%2Fod42wrd7HIsfMg6NcEOfJL5Aa1%2F71SIcgRVExjUYxXvAvE8%2BXep9bJwbqXkLwtcjx%2BK%2BYu1jCdAVSJauRXnuavIS5GG9EXbR9P6DTzNG1VrAXjxFAQgZV2SIZANqFfw3VOkNKVnkrULbe7GEPlStphM7Ctl3949kljr%2BnncHfP8AvuWHUyvdH8k6fljCcdZYvf7ATv9oKXZe3f8zBB2xiUuHNOTe3sh4Buyzr4fH8l3oXjcEd1fUpBeS7GobOa%2BQ5kcbNFGWx%2Bq1nnN5dbChg6mXYEzN9wnZANvIYwBxglFg7Y8o3hEt6vc9Ip7rRiNfBKXfL%2BQVwJK5HktroviXPNQrhIE12%2FQY8BXOzdtZ0cUh2brZDBU9UEoAjHkxnemdJOk56XmE62rOnE1iNbNmQZDgFmYTU5xZ0kTq3TY8Rs6DcRqjZhEQc3XU4PU%2B%2F5%2BHth%2FvX5WcsALSq7%2Bhrn8vhkbrOVAYBrjplrwuZdRvMqRJhmOC0Do8MKKgrb4GOqUB1YFCkzDJgevzJI1ZbMgFNCYfXfudCdJwRSmnBdOPcuQ3a9nTPpn6cwb9RYur0%2B1NXoLZzqmJIWogYvhnHTD7ILCur6oaCiTIbg%2BqgZtVRNm1keYkDj6JiGDH2pYK%2FWAZRa38oQOYY1p202Jle0VX1KRgAz6ON%2BvBW%2Bo3MD3lc60mkDvAxTTaEBHF5T7BhqZ9NnXyoyAZa6FYf9rIrBRl3gew7zmv&X-Amz-Signature=fd6fb8efaae938a76392696c02ff069781aa5cbf5cb761f4c6686d8a54a375a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMBGMZA2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDYOL5hC7T51K%2FwWtmZzGxqxUtOzvih2Fijg4Vm9b9P5gIgFjyeQVixBxxOi0rN9QJu8YbmvIvgaz%2FXKKpbJLWcXUEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFr32T3UluefqgZfiSrcA%2B8bKkbFOxwmvzM1ETGm00e1dD2ESvFANEwDb44OZADm%2B0AqwWIer20nYqtcd4b1pLidFf1cRZMwiiTs0mQm7Y4HtvUXOFuOZnYut0%2FnGZSt4ijH2A2P%2BmcsyqhPBZLY5iBpmqo%2Fod42wrd7HIsfMg6NcEOfJL5Aa1%2F71SIcgRVExjUYxXvAvE8%2BXep9bJwbqXkLwtcjx%2BK%2BYu1jCdAVSJauRXnuavIS5GG9EXbR9P6DTzNG1VrAXjxFAQgZV2SIZANqFfw3VOkNKVnkrULbe7GEPlStphM7Ctl3949kljr%2BnncHfP8AvuWHUyvdH8k6fljCcdZYvf7ATv9oKXZe3f8zBB2xiUuHNOTe3sh4Buyzr4fH8l3oXjcEd1fUpBeS7GobOa%2BQ5kcbNFGWx%2Bq1nnN5dbChg6mXYEzN9wnZANvIYwBxglFg7Y8o3hEt6vc9Ip7rRiNfBKXfL%2BQVwJK5HktroviXPNQrhIE12%2FQY8BXOzdtZ0cUh2brZDBU9UEoAjHkxnemdJOk56XmE62rOnE1iNbNmQZDgFmYTU5xZ0kTq3TY8Rs6DcRqjZhEQc3XU4PU%2B%2F5%2BHth%2FvX5WcsALSq7%2Bhrn8vhkbrOVAYBrjplrwuZdRvMqRJhmOC0Do8MKKgrb4GOqUB1YFCkzDJgevzJI1ZbMgFNCYfXfudCdJwRSmnBdOPcuQ3a9nTPpn6cwb9RYur0%2B1NXoLZzqmJIWogYvhnHTD7ILCur6oaCiTIbg%2BqgZtVRNm1keYkDj6JiGDH2pYK%2FWAZRa38oQOYY1p202Jle0VX1KRgAz6ON%2BvBW%2Bo3MD3lc60mkDvAxTTaEBHF5T7BhqZ9NnXyoyAZa6FYf9rIrBRl3gew7zmv&X-Amz-Signature=6f23a3e2923e0c5f1ba405e5e213f1ab3df48f8cd15c59af152a922be6f5aed2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMBGMZA2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDYOL5hC7T51K%2FwWtmZzGxqxUtOzvih2Fijg4Vm9b9P5gIgFjyeQVixBxxOi0rN9QJu8YbmvIvgaz%2FXKKpbJLWcXUEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFr32T3UluefqgZfiSrcA%2B8bKkbFOxwmvzM1ETGm00e1dD2ESvFANEwDb44OZADm%2B0AqwWIer20nYqtcd4b1pLidFf1cRZMwiiTs0mQm7Y4HtvUXOFuOZnYut0%2FnGZSt4ijH2A2P%2BmcsyqhPBZLY5iBpmqo%2Fod42wrd7HIsfMg6NcEOfJL5Aa1%2F71SIcgRVExjUYxXvAvE8%2BXep9bJwbqXkLwtcjx%2BK%2BYu1jCdAVSJauRXnuavIS5GG9EXbR9P6DTzNG1VrAXjxFAQgZV2SIZANqFfw3VOkNKVnkrULbe7GEPlStphM7Ctl3949kljr%2BnncHfP8AvuWHUyvdH8k6fljCcdZYvf7ATv9oKXZe3f8zBB2xiUuHNOTe3sh4Buyzr4fH8l3oXjcEd1fUpBeS7GobOa%2BQ5kcbNFGWx%2Bq1nnN5dbChg6mXYEzN9wnZANvIYwBxglFg7Y8o3hEt6vc9Ip7rRiNfBKXfL%2BQVwJK5HktroviXPNQrhIE12%2FQY8BXOzdtZ0cUh2brZDBU9UEoAjHkxnemdJOk56XmE62rOnE1iNbNmQZDgFmYTU5xZ0kTq3TY8Rs6DcRqjZhEQc3XU4PU%2B%2F5%2BHth%2FvX5WcsALSq7%2Bhrn8vhkbrOVAYBrjplrwuZdRvMqRJhmOC0Do8MKKgrb4GOqUB1YFCkzDJgevzJI1ZbMgFNCYfXfudCdJwRSmnBdOPcuQ3a9nTPpn6cwb9RYur0%2B1NXoLZzqmJIWogYvhnHTD7ILCur6oaCiTIbg%2BqgZtVRNm1keYkDj6JiGDH2pYK%2FWAZRa38oQOYY1p202Jle0VX1KRgAz6ON%2BvBW%2Bo3MD3lc60mkDvAxTTaEBHF5T7BhqZ9NnXyoyAZa6FYf9rIrBRl3gew7zmv&X-Amz-Signature=e4f99022f02e56204070dc5ede812c0bade31d1440dee8286f26bbecb0575146&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMBGMZA2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDYOL5hC7T51K%2FwWtmZzGxqxUtOzvih2Fijg4Vm9b9P5gIgFjyeQVixBxxOi0rN9QJu8YbmvIvgaz%2FXKKpbJLWcXUEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFr32T3UluefqgZfiSrcA%2B8bKkbFOxwmvzM1ETGm00e1dD2ESvFANEwDb44OZADm%2B0AqwWIer20nYqtcd4b1pLidFf1cRZMwiiTs0mQm7Y4HtvUXOFuOZnYut0%2FnGZSt4ijH2A2P%2BmcsyqhPBZLY5iBpmqo%2Fod42wrd7HIsfMg6NcEOfJL5Aa1%2F71SIcgRVExjUYxXvAvE8%2BXep9bJwbqXkLwtcjx%2BK%2BYu1jCdAVSJauRXnuavIS5GG9EXbR9P6DTzNG1VrAXjxFAQgZV2SIZANqFfw3VOkNKVnkrULbe7GEPlStphM7Ctl3949kljr%2BnncHfP8AvuWHUyvdH8k6fljCcdZYvf7ATv9oKXZe3f8zBB2xiUuHNOTe3sh4Buyzr4fH8l3oXjcEd1fUpBeS7GobOa%2BQ5kcbNFGWx%2Bq1nnN5dbChg6mXYEzN9wnZANvIYwBxglFg7Y8o3hEt6vc9Ip7rRiNfBKXfL%2BQVwJK5HktroviXPNQrhIE12%2FQY8BXOzdtZ0cUh2brZDBU9UEoAjHkxnemdJOk56XmE62rOnE1iNbNmQZDgFmYTU5xZ0kTq3TY8Rs6DcRqjZhEQc3XU4PU%2B%2F5%2BHth%2FvX5WcsALSq7%2Bhrn8vhkbrOVAYBrjplrwuZdRvMqRJhmOC0Do8MKKgrb4GOqUB1YFCkzDJgevzJI1ZbMgFNCYfXfudCdJwRSmnBdOPcuQ3a9nTPpn6cwb9RYur0%2B1NXoLZzqmJIWogYvhnHTD7ILCur6oaCiTIbg%2BqgZtVRNm1keYkDj6JiGDH2pYK%2FWAZRa38oQOYY1p202Jle0VX1KRgAz6ON%2BvBW%2Bo3MD3lc60mkDvAxTTaEBHF5T7BhqZ9NnXyoyAZa6FYf9rIrBRl3gew7zmv&X-Amz-Signature=1fa17dfe994a4c7972619d7e774e242e705e731031ea18d2b6c1bb4bd44617db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMBGMZA2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDYOL5hC7T51K%2FwWtmZzGxqxUtOzvih2Fijg4Vm9b9P5gIgFjyeQVixBxxOi0rN9QJu8YbmvIvgaz%2FXKKpbJLWcXUEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFr32T3UluefqgZfiSrcA%2B8bKkbFOxwmvzM1ETGm00e1dD2ESvFANEwDb44OZADm%2B0AqwWIer20nYqtcd4b1pLidFf1cRZMwiiTs0mQm7Y4HtvUXOFuOZnYut0%2FnGZSt4ijH2A2P%2BmcsyqhPBZLY5iBpmqo%2Fod42wrd7HIsfMg6NcEOfJL5Aa1%2F71SIcgRVExjUYxXvAvE8%2BXep9bJwbqXkLwtcjx%2BK%2BYu1jCdAVSJauRXnuavIS5GG9EXbR9P6DTzNG1VrAXjxFAQgZV2SIZANqFfw3VOkNKVnkrULbe7GEPlStphM7Ctl3949kljr%2BnncHfP8AvuWHUyvdH8k6fljCcdZYvf7ATv9oKXZe3f8zBB2xiUuHNOTe3sh4Buyzr4fH8l3oXjcEd1fUpBeS7GobOa%2BQ5kcbNFGWx%2Bq1nnN5dbChg6mXYEzN9wnZANvIYwBxglFg7Y8o3hEt6vc9Ip7rRiNfBKXfL%2BQVwJK5HktroviXPNQrhIE12%2FQY8BXOzdtZ0cUh2brZDBU9UEoAjHkxnemdJOk56XmE62rOnE1iNbNmQZDgFmYTU5xZ0kTq3TY8Rs6DcRqjZhEQc3XU4PU%2B%2F5%2BHth%2FvX5WcsALSq7%2Bhrn8vhkbrOVAYBrjplrwuZdRvMqRJhmOC0Do8MKKgrb4GOqUB1YFCkzDJgevzJI1ZbMgFNCYfXfudCdJwRSmnBdOPcuQ3a9nTPpn6cwb9RYur0%2B1NXoLZzqmJIWogYvhnHTD7ILCur6oaCiTIbg%2BqgZtVRNm1keYkDj6JiGDH2pYK%2FWAZRa38oQOYY1p202Jle0VX1KRgAz6ON%2BvBW%2Bo3MD3lc60mkDvAxTTaEBHF5T7BhqZ9NnXyoyAZa6FYf9rIrBRl3gew7zmv&X-Amz-Signature=cead87adca82570fc54a247169baa8a80bbab693a61461863deafce4cac24432&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
