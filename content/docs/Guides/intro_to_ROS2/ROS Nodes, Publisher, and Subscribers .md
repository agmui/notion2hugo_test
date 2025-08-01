---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJ5V55C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsk%2BfLxABhr8uYFQmZsIl6dukapn0TQZvqUEZTeHVHkgIgJWdl7aksAT69z1mrTfVzHRM2Tu2vYqzsYugwKIR1Qy0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBHOBWIlk5u%2FoQjCrcAyV%2FxfstUF%2FRP9E6ulvFy1ZGF%2FBnDkNahQbRXGyogzP4dSTF9n3ryScXknqMMFW%2FrttL%2B7ruSzZCcq57dtwfANIunfVYI3dYu7r1IH97k2HaABaLds0zZKdz7f4x%2F8CQAaM41bXRezfZJrX%2F8xcqNjnOauwKDV%2BFoNaDRKLIqMRYWBUHA4uqlp8tyKLkvbU4zBmXL7b4a3k1G%2FNKSo0xGwp46T3jfPLLkLItmvTVtE%2BpyOKX1LwZjef1ogHwsU6n2ec7enDN9ucRhBbM%2FQkPi5edv41%2FmIo05y2olxlvsZ%2F8UWsnKTewSraE95qicBtCMuRQ5IZdWKo0rmtLmdsSFH2pX%2FSZBJH9U53FnYiwK88ntAiMRK9rUv9MAtbFT2KPL2BcB8pzwwZna%2F7i2zUXnMY9KEbtsVwbPei1ykrIwp7EW0PjTEYgi8lFez2yjT4iUGRMWbM5Ey2GS3m%2F4o3%2F0c%2Fja0UEBbSmperyZuaOCq6wZ%2BqqXFipp5hE5mk8mQOH0axTe9WulExoFKadcyQOhrXSNbCRXj9GWU%2FwWuiWP7U%2BvFS3YVtxB1mazAmziRwFEdYtKP2Ksq1%2BOHcXrrgES4TN%2FATQ2FBFM3o63uAwI7oufjZuhZZN0GKQbBMzMPm1ssQGOqUB0wxaVtBBKq8hR1P6NSlBE0ks55qh%2FOl6oJaEi0ooDCo21fA%2BKQEviYSQAcOSsO9m5l2mQixU3av1F%2FF96%2BmzDCg%2FoWsMIOfrzEBXy8mqqzBY7dhHpgOh8W6Kixcofu%2BZkgZmNA0tbQa1g8WG8S1gymzJ1BdpcTQjxDswltcO4r6TxqzPf1Qa4lgWn0UtvGU56dYQsIMgkaKO9FvPky0VYfA0Q1Ye&X-Amz-Signature=a30d920a1f3c00d3b6ca93acc0c3e5dc3c3013ec78168c30438803deebc4729c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJ5V55C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsk%2BfLxABhr8uYFQmZsIl6dukapn0TQZvqUEZTeHVHkgIgJWdl7aksAT69z1mrTfVzHRM2Tu2vYqzsYugwKIR1Qy0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBHOBWIlk5u%2FoQjCrcAyV%2FxfstUF%2FRP9E6ulvFy1ZGF%2FBnDkNahQbRXGyogzP4dSTF9n3ryScXknqMMFW%2FrttL%2B7ruSzZCcq57dtwfANIunfVYI3dYu7r1IH97k2HaABaLds0zZKdz7f4x%2F8CQAaM41bXRezfZJrX%2F8xcqNjnOauwKDV%2BFoNaDRKLIqMRYWBUHA4uqlp8tyKLkvbU4zBmXL7b4a3k1G%2FNKSo0xGwp46T3jfPLLkLItmvTVtE%2BpyOKX1LwZjef1ogHwsU6n2ec7enDN9ucRhBbM%2FQkPi5edv41%2FmIo05y2olxlvsZ%2F8UWsnKTewSraE95qicBtCMuRQ5IZdWKo0rmtLmdsSFH2pX%2FSZBJH9U53FnYiwK88ntAiMRK9rUv9MAtbFT2KPL2BcB8pzwwZna%2F7i2zUXnMY9KEbtsVwbPei1ykrIwp7EW0PjTEYgi8lFez2yjT4iUGRMWbM5Ey2GS3m%2F4o3%2F0c%2Fja0UEBbSmperyZuaOCq6wZ%2BqqXFipp5hE5mk8mQOH0axTe9WulExoFKadcyQOhrXSNbCRXj9GWU%2FwWuiWP7U%2BvFS3YVtxB1mazAmziRwFEdYtKP2Ksq1%2BOHcXrrgES4TN%2FATQ2FBFM3o63uAwI7oufjZuhZZN0GKQbBMzMPm1ssQGOqUB0wxaVtBBKq8hR1P6NSlBE0ks55qh%2FOl6oJaEi0ooDCo21fA%2BKQEviYSQAcOSsO9m5l2mQixU3av1F%2FF96%2BmzDCg%2FoWsMIOfrzEBXy8mqqzBY7dhHpgOh8W6Kixcofu%2BZkgZmNA0tbQa1g8WG8S1gymzJ1BdpcTQjxDswltcO4r6TxqzPf1Qa4lgWn0UtvGU56dYQsIMgkaKO9FvPky0VYfA0Q1Ye&X-Amz-Signature=7df0bbe9ae2590abf93b3633871b2eb7b4f6f3759de7fef145033817b09d4827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJ5V55C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsk%2BfLxABhr8uYFQmZsIl6dukapn0TQZvqUEZTeHVHkgIgJWdl7aksAT69z1mrTfVzHRM2Tu2vYqzsYugwKIR1Qy0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBHOBWIlk5u%2FoQjCrcAyV%2FxfstUF%2FRP9E6ulvFy1ZGF%2FBnDkNahQbRXGyogzP4dSTF9n3ryScXknqMMFW%2FrttL%2B7ruSzZCcq57dtwfANIunfVYI3dYu7r1IH97k2HaABaLds0zZKdz7f4x%2F8CQAaM41bXRezfZJrX%2F8xcqNjnOauwKDV%2BFoNaDRKLIqMRYWBUHA4uqlp8tyKLkvbU4zBmXL7b4a3k1G%2FNKSo0xGwp46T3jfPLLkLItmvTVtE%2BpyOKX1LwZjef1ogHwsU6n2ec7enDN9ucRhBbM%2FQkPi5edv41%2FmIo05y2olxlvsZ%2F8UWsnKTewSraE95qicBtCMuRQ5IZdWKo0rmtLmdsSFH2pX%2FSZBJH9U53FnYiwK88ntAiMRK9rUv9MAtbFT2KPL2BcB8pzwwZna%2F7i2zUXnMY9KEbtsVwbPei1ykrIwp7EW0PjTEYgi8lFez2yjT4iUGRMWbM5Ey2GS3m%2F4o3%2F0c%2Fja0UEBbSmperyZuaOCq6wZ%2BqqXFipp5hE5mk8mQOH0axTe9WulExoFKadcyQOhrXSNbCRXj9GWU%2FwWuiWP7U%2BvFS3YVtxB1mazAmziRwFEdYtKP2Ksq1%2BOHcXrrgES4TN%2FATQ2FBFM3o63uAwI7oufjZuhZZN0GKQbBMzMPm1ssQGOqUB0wxaVtBBKq8hR1P6NSlBE0ks55qh%2FOl6oJaEi0ooDCo21fA%2BKQEviYSQAcOSsO9m5l2mQixU3av1F%2FF96%2BmzDCg%2FoWsMIOfrzEBXy8mqqzBY7dhHpgOh8W6Kixcofu%2BZkgZmNA0tbQa1g8WG8S1gymzJ1BdpcTQjxDswltcO4r6TxqzPf1Qa4lgWn0UtvGU56dYQsIMgkaKO9FvPky0VYfA0Q1Ye&X-Amz-Signature=275cfaae5ae97038a4f4fb46ea4f2de0f68733df68e1531e0497bf8e1d1be693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJ5V55C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsk%2BfLxABhr8uYFQmZsIl6dukapn0TQZvqUEZTeHVHkgIgJWdl7aksAT69z1mrTfVzHRM2Tu2vYqzsYugwKIR1Qy0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBHOBWIlk5u%2FoQjCrcAyV%2FxfstUF%2FRP9E6ulvFy1ZGF%2FBnDkNahQbRXGyogzP4dSTF9n3ryScXknqMMFW%2FrttL%2B7ruSzZCcq57dtwfANIunfVYI3dYu7r1IH97k2HaABaLds0zZKdz7f4x%2F8CQAaM41bXRezfZJrX%2F8xcqNjnOauwKDV%2BFoNaDRKLIqMRYWBUHA4uqlp8tyKLkvbU4zBmXL7b4a3k1G%2FNKSo0xGwp46T3jfPLLkLItmvTVtE%2BpyOKX1LwZjef1ogHwsU6n2ec7enDN9ucRhBbM%2FQkPi5edv41%2FmIo05y2olxlvsZ%2F8UWsnKTewSraE95qicBtCMuRQ5IZdWKo0rmtLmdsSFH2pX%2FSZBJH9U53FnYiwK88ntAiMRK9rUv9MAtbFT2KPL2BcB8pzwwZna%2F7i2zUXnMY9KEbtsVwbPei1ykrIwp7EW0PjTEYgi8lFez2yjT4iUGRMWbM5Ey2GS3m%2F4o3%2F0c%2Fja0UEBbSmperyZuaOCq6wZ%2BqqXFipp5hE5mk8mQOH0axTe9WulExoFKadcyQOhrXSNbCRXj9GWU%2FwWuiWP7U%2BvFS3YVtxB1mazAmziRwFEdYtKP2Ksq1%2BOHcXrrgES4TN%2FATQ2FBFM3o63uAwI7oufjZuhZZN0GKQbBMzMPm1ssQGOqUB0wxaVtBBKq8hR1P6NSlBE0ks55qh%2FOl6oJaEi0ooDCo21fA%2BKQEviYSQAcOSsO9m5l2mQixU3av1F%2FF96%2BmzDCg%2FoWsMIOfrzEBXy8mqqzBY7dhHpgOh8W6Kixcofu%2BZkgZmNA0tbQa1g8WG8S1gymzJ1BdpcTQjxDswltcO4r6TxqzPf1Qa4lgWn0UtvGU56dYQsIMgkaKO9FvPky0VYfA0Q1Ye&X-Amz-Signature=c63048145f72dcdfa8027798fa73d1834be74b86745918cb54c7b1abaa96fb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJ5V55C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsk%2BfLxABhr8uYFQmZsIl6dukapn0TQZvqUEZTeHVHkgIgJWdl7aksAT69z1mrTfVzHRM2Tu2vYqzsYugwKIR1Qy0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBHOBWIlk5u%2FoQjCrcAyV%2FxfstUF%2FRP9E6ulvFy1ZGF%2FBnDkNahQbRXGyogzP4dSTF9n3ryScXknqMMFW%2FrttL%2B7ruSzZCcq57dtwfANIunfVYI3dYu7r1IH97k2HaABaLds0zZKdz7f4x%2F8CQAaM41bXRezfZJrX%2F8xcqNjnOauwKDV%2BFoNaDRKLIqMRYWBUHA4uqlp8tyKLkvbU4zBmXL7b4a3k1G%2FNKSo0xGwp46T3jfPLLkLItmvTVtE%2BpyOKX1LwZjef1ogHwsU6n2ec7enDN9ucRhBbM%2FQkPi5edv41%2FmIo05y2olxlvsZ%2F8UWsnKTewSraE95qicBtCMuRQ5IZdWKo0rmtLmdsSFH2pX%2FSZBJH9U53FnYiwK88ntAiMRK9rUv9MAtbFT2KPL2BcB8pzwwZna%2F7i2zUXnMY9KEbtsVwbPei1ykrIwp7EW0PjTEYgi8lFez2yjT4iUGRMWbM5Ey2GS3m%2F4o3%2F0c%2Fja0UEBbSmperyZuaOCq6wZ%2BqqXFipp5hE5mk8mQOH0axTe9WulExoFKadcyQOhrXSNbCRXj9GWU%2FwWuiWP7U%2BvFS3YVtxB1mazAmziRwFEdYtKP2Ksq1%2BOHcXrrgES4TN%2FATQ2FBFM3o63uAwI7oufjZuhZZN0GKQbBMzMPm1ssQGOqUB0wxaVtBBKq8hR1P6NSlBE0ks55qh%2FOl6oJaEi0ooDCo21fA%2BKQEviYSQAcOSsO9m5l2mQixU3av1F%2FF96%2BmzDCg%2FoWsMIOfrzEBXy8mqqzBY7dhHpgOh8W6Kixcofu%2BZkgZmNA0tbQa1g8WG8S1gymzJ1BdpcTQjxDswltcO4r6TxqzPf1Qa4lgWn0UtvGU56dYQsIMgkaKO9FvPky0VYfA0Q1Ye&X-Amz-Signature=16238b1b99b56e7151b7daaf0808797aef569ae0e388a54695dea19eed8ea2f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJ5V55C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsk%2BfLxABhr8uYFQmZsIl6dukapn0TQZvqUEZTeHVHkgIgJWdl7aksAT69z1mrTfVzHRM2Tu2vYqzsYugwKIR1Qy0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBHOBWIlk5u%2FoQjCrcAyV%2FxfstUF%2FRP9E6ulvFy1ZGF%2FBnDkNahQbRXGyogzP4dSTF9n3ryScXknqMMFW%2FrttL%2B7ruSzZCcq57dtwfANIunfVYI3dYu7r1IH97k2HaABaLds0zZKdz7f4x%2F8CQAaM41bXRezfZJrX%2F8xcqNjnOauwKDV%2BFoNaDRKLIqMRYWBUHA4uqlp8tyKLkvbU4zBmXL7b4a3k1G%2FNKSo0xGwp46T3jfPLLkLItmvTVtE%2BpyOKX1LwZjef1ogHwsU6n2ec7enDN9ucRhBbM%2FQkPi5edv41%2FmIo05y2olxlvsZ%2F8UWsnKTewSraE95qicBtCMuRQ5IZdWKo0rmtLmdsSFH2pX%2FSZBJH9U53FnYiwK88ntAiMRK9rUv9MAtbFT2KPL2BcB8pzwwZna%2F7i2zUXnMY9KEbtsVwbPei1ykrIwp7EW0PjTEYgi8lFez2yjT4iUGRMWbM5Ey2GS3m%2F4o3%2F0c%2Fja0UEBbSmperyZuaOCq6wZ%2BqqXFipp5hE5mk8mQOH0axTe9WulExoFKadcyQOhrXSNbCRXj9GWU%2FwWuiWP7U%2BvFS3YVtxB1mazAmziRwFEdYtKP2Ksq1%2BOHcXrrgES4TN%2FATQ2FBFM3o63uAwI7oufjZuhZZN0GKQbBMzMPm1ssQGOqUB0wxaVtBBKq8hR1P6NSlBE0ks55qh%2FOl6oJaEi0ooDCo21fA%2BKQEviYSQAcOSsO9m5l2mQixU3av1F%2FF96%2BmzDCg%2FoWsMIOfrzEBXy8mqqzBY7dhHpgOh8W6Kixcofu%2BZkgZmNA0tbQa1g8WG8S1gymzJ1BdpcTQjxDswltcO4r6TxqzPf1Qa4lgWn0UtvGU56dYQsIMgkaKO9FvPky0VYfA0Q1Ye&X-Amz-Signature=a1effcd6cd07ff555699d3a65a4f094a0e0be1341eb0d377e4f7645dc0486a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJ5V55C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsk%2BfLxABhr8uYFQmZsIl6dukapn0TQZvqUEZTeHVHkgIgJWdl7aksAT69z1mrTfVzHRM2Tu2vYqzsYugwKIR1Qy0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBHOBWIlk5u%2FoQjCrcAyV%2FxfstUF%2FRP9E6ulvFy1ZGF%2FBnDkNahQbRXGyogzP4dSTF9n3ryScXknqMMFW%2FrttL%2B7ruSzZCcq57dtwfANIunfVYI3dYu7r1IH97k2HaABaLds0zZKdz7f4x%2F8CQAaM41bXRezfZJrX%2F8xcqNjnOauwKDV%2BFoNaDRKLIqMRYWBUHA4uqlp8tyKLkvbU4zBmXL7b4a3k1G%2FNKSo0xGwp46T3jfPLLkLItmvTVtE%2BpyOKX1LwZjef1ogHwsU6n2ec7enDN9ucRhBbM%2FQkPi5edv41%2FmIo05y2olxlvsZ%2F8UWsnKTewSraE95qicBtCMuRQ5IZdWKo0rmtLmdsSFH2pX%2FSZBJH9U53FnYiwK88ntAiMRK9rUv9MAtbFT2KPL2BcB8pzwwZna%2F7i2zUXnMY9KEbtsVwbPei1ykrIwp7EW0PjTEYgi8lFez2yjT4iUGRMWbM5Ey2GS3m%2F4o3%2F0c%2Fja0UEBbSmperyZuaOCq6wZ%2BqqXFipp5hE5mk8mQOH0axTe9WulExoFKadcyQOhrXSNbCRXj9GWU%2FwWuiWP7U%2BvFS3YVtxB1mazAmziRwFEdYtKP2Ksq1%2BOHcXrrgES4TN%2FATQ2FBFM3o63uAwI7oufjZuhZZN0GKQbBMzMPm1ssQGOqUB0wxaVtBBKq8hR1P6NSlBE0ks55qh%2FOl6oJaEi0ooDCo21fA%2BKQEviYSQAcOSsO9m5l2mQixU3av1F%2FF96%2BmzDCg%2FoWsMIOfrzEBXy8mqqzBY7dhHpgOh8W6Kixcofu%2BZkgZmNA0tbQa1g8WG8S1gymzJ1BdpcTQjxDswltcO4r6TxqzPf1Qa4lgWn0UtvGU56dYQsIMgkaKO9FvPky0VYfA0Q1Ye&X-Amz-Signature=45dc680e80222236633facc04a3318fc4fa46d46a2b59bc1009e6326eeb206d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJ5V55C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsk%2BfLxABhr8uYFQmZsIl6dukapn0TQZvqUEZTeHVHkgIgJWdl7aksAT69z1mrTfVzHRM2Tu2vYqzsYugwKIR1Qy0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBHOBWIlk5u%2FoQjCrcAyV%2FxfstUF%2FRP9E6ulvFy1ZGF%2FBnDkNahQbRXGyogzP4dSTF9n3ryScXknqMMFW%2FrttL%2B7ruSzZCcq57dtwfANIunfVYI3dYu7r1IH97k2HaABaLds0zZKdz7f4x%2F8CQAaM41bXRezfZJrX%2F8xcqNjnOauwKDV%2BFoNaDRKLIqMRYWBUHA4uqlp8tyKLkvbU4zBmXL7b4a3k1G%2FNKSo0xGwp46T3jfPLLkLItmvTVtE%2BpyOKX1LwZjef1ogHwsU6n2ec7enDN9ucRhBbM%2FQkPi5edv41%2FmIo05y2olxlvsZ%2F8UWsnKTewSraE95qicBtCMuRQ5IZdWKo0rmtLmdsSFH2pX%2FSZBJH9U53FnYiwK88ntAiMRK9rUv9MAtbFT2KPL2BcB8pzwwZna%2F7i2zUXnMY9KEbtsVwbPei1ykrIwp7EW0PjTEYgi8lFez2yjT4iUGRMWbM5Ey2GS3m%2F4o3%2F0c%2Fja0UEBbSmperyZuaOCq6wZ%2BqqXFipp5hE5mk8mQOH0axTe9WulExoFKadcyQOhrXSNbCRXj9GWU%2FwWuiWP7U%2BvFS3YVtxB1mazAmziRwFEdYtKP2Ksq1%2BOHcXrrgES4TN%2FATQ2FBFM3o63uAwI7oufjZuhZZN0GKQbBMzMPm1ssQGOqUB0wxaVtBBKq8hR1P6NSlBE0ks55qh%2FOl6oJaEi0ooDCo21fA%2BKQEviYSQAcOSsO9m5l2mQixU3av1F%2FF96%2BmzDCg%2FoWsMIOfrzEBXy8mqqzBY7dhHpgOh8W6Kixcofu%2BZkgZmNA0tbQa1g8WG8S1gymzJ1BdpcTQjxDswltcO4r6TxqzPf1Qa4lgWn0UtvGU56dYQsIMgkaKO9FvPky0VYfA0Q1Ye&X-Amz-Signature=26b81a41726c6f829cbe54431a0e5dded18b2c1a9a58dcfa5de672bb09758aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
