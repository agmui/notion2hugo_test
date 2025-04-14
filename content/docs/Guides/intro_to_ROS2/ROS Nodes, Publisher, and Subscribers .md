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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25L6MJE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcvgePHTgPDVc%2FYC3TG3Fjj3QQ78Qb5ffuXt41lkrQuAiEA8yHp2M%2BUbNsEdYoP7G5lhX%2FNcOIJHnzfbnJEL5lVmiAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA%2FgkcLYYQIU3D7OPyrcA9ePSsGKZ5QFQbm0dVRmIJI4ZM5xaerPjSS5QjeIsiB4UsdX1sXF%2FnMyvBA42cR30RBt60E0I5XwkdluX0OEU5T45olc%2B269LszhQ7EgIQCI%2FFTroL9cjCR9UL82husRBPlUHYrS9ULHRJ8XVlQngVLejrniKOIXzGzslwin%2B6272WQRw88vuEBRo1tmZVChvtEpU%2BtS%2BaGWpD%2BOTLatEmo4QW0BbTHbQtu0%2BSbOaBNKiNOaniuAJz9As25PH2jbkEyTZTxo%2FqHYgPhmJBlXJrfmB23eb1LMKwl3A4nTQ0JnJ7bVWaly8zACW1ZYXJymWzgMWH%2F8QIMvQmNtOjHgXcRm5MhBxWl766njSBeRwomI2d4kAEG%2FrEEPxdZl3ntmVgDvGJQxNwMJ4Upe6J43mrRktSfRX3HVVr%2F9WQOdn3e3IR1QJHKu%2Fh%2BjU4v%2B%2BBKImbomYXIhNXDTtLjmXsTh1LK2HzMCRv01Mq8HHNJ0BWowcN1fd09XHcbaTF32cE4TNCyWBzXGptmWrl4uBnsc%2F2jtntpJPhIBjLd2ltbUFp3Lve8TvVgEAV9zYgClFosJsVgTpPnSzX6iogH2LbMbWbLxyAZP94VT7fzUf58vGmn%2F7SvEweQHq3taiwqcMJWU9b8GOqUBjDBGDlgxBXWN3CoEXtkWM940lh1U6rBSC0BIulksmXa5DM%2FvqkLoSs9GLtHmvBw8tf0RytbpPgrQIuFI3IxH9Lr5GeAghKpWFCSncb5UtbKHrZYsowgoUepgU3w15urUQg26o3LFxznoBJWn5YhsoO075AXvk5T5PyOYq%2FCTJRLOboO6fFzvGWkxTDrUpv5j04EgUpNP1zGVU4%2BFsJsCXYpvSQo4&X-Amz-Signature=8d6e07955c13829003d6fba1a348f203c9fe6f3295afe485a232ce9e590ecef1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25L6MJE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcvgePHTgPDVc%2FYC3TG3Fjj3QQ78Qb5ffuXt41lkrQuAiEA8yHp2M%2BUbNsEdYoP7G5lhX%2FNcOIJHnzfbnJEL5lVmiAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA%2FgkcLYYQIU3D7OPyrcA9ePSsGKZ5QFQbm0dVRmIJI4ZM5xaerPjSS5QjeIsiB4UsdX1sXF%2FnMyvBA42cR30RBt60E0I5XwkdluX0OEU5T45olc%2B269LszhQ7EgIQCI%2FFTroL9cjCR9UL82husRBPlUHYrS9ULHRJ8XVlQngVLejrniKOIXzGzslwin%2B6272WQRw88vuEBRo1tmZVChvtEpU%2BtS%2BaGWpD%2BOTLatEmo4QW0BbTHbQtu0%2BSbOaBNKiNOaniuAJz9As25PH2jbkEyTZTxo%2FqHYgPhmJBlXJrfmB23eb1LMKwl3A4nTQ0JnJ7bVWaly8zACW1ZYXJymWzgMWH%2F8QIMvQmNtOjHgXcRm5MhBxWl766njSBeRwomI2d4kAEG%2FrEEPxdZl3ntmVgDvGJQxNwMJ4Upe6J43mrRktSfRX3HVVr%2F9WQOdn3e3IR1QJHKu%2Fh%2BjU4v%2B%2BBKImbomYXIhNXDTtLjmXsTh1LK2HzMCRv01Mq8HHNJ0BWowcN1fd09XHcbaTF32cE4TNCyWBzXGptmWrl4uBnsc%2F2jtntpJPhIBjLd2ltbUFp3Lve8TvVgEAV9zYgClFosJsVgTpPnSzX6iogH2LbMbWbLxyAZP94VT7fzUf58vGmn%2F7SvEweQHq3taiwqcMJWU9b8GOqUBjDBGDlgxBXWN3CoEXtkWM940lh1U6rBSC0BIulksmXa5DM%2FvqkLoSs9GLtHmvBw8tf0RytbpPgrQIuFI3IxH9Lr5GeAghKpWFCSncb5UtbKHrZYsowgoUepgU3w15urUQg26o3LFxznoBJWn5YhsoO075AXvk5T5PyOYq%2FCTJRLOboO6fFzvGWkxTDrUpv5j04EgUpNP1zGVU4%2BFsJsCXYpvSQo4&X-Amz-Signature=b86c3643b73cb23ecde70ae823985a33552fa6046868d137085bd7e564299eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25L6MJE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcvgePHTgPDVc%2FYC3TG3Fjj3QQ78Qb5ffuXt41lkrQuAiEA8yHp2M%2BUbNsEdYoP7G5lhX%2FNcOIJHnzfbnJEL5lVmiAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA%2FgkcLYYQIU3D7OPyrcA9ePSsGKZ5QFQbm0dVRmIJI4ZM5xaerPjSS5QjeIsiB4UsdX1sXF%2FnMyvBA42cR30RBt60E0I5XwkdluX0OEU5T45olc%2B269LszhQ7EgIQCI%2FFTroL9cjCR9UL82husRBPlUHYrS9ULHRJ8XVlQngVLejrniKOIXzGzslwin%2B6272WQRw88vuEBRo1tmZVChvtEpU%2BtS%2BaGWpD%2BOTLatEmo4QW0BbTHbQtu0%2BSbOaBNKiNOaniuAJz9As25PH2jbkEyTZTxo%2FqHYgPhmJBlXJrfmB23eb1LMKwl3A4nTQ0JnJ7bVWaly8zACW1ZYXJymWzgMWH%2F8QIMvQmNtOjHgXcRm5MhBxWl766njSBeRwomI2d4kAEG%2FrEEPxdZl3ntmVgDvGJQxNwMJ4Upe6J43mrRktSfRX3HVVr%2F9WQOdn3e3IR1QJHKu%2Fh%2BjU4v%2B%2BBKImbomYXIhNXDTtLjmXsTh1LK2HzMCRv01Mq8HHNJ0BWowcN1fd09XHcbaTF32cE4TNCyWBzXGptmWrl4uBnsc%2F2jtntpJPhIBjLd2ltbUFp3Lve8TvVgEAV9zYgClFosJsVgTpPnSzX6iogH2LbMbWbLxyAZP94VT7fzUf58vGmn%2F7SvEweQHq3taiwqcMJWU9b8GOqUBjDBGDlgxBXWN3CoEXtkWM940lh1U6rBSC0BIulksmXa5DM%2FvqkLoSs9GLtHmvBw8tf0RytbpPgrQIuFI3IxH9Lr5GeAghKpWFCSncb5UtbKHrZYsowgoUepgU3w15urUQg26o3LFxznoBJWn5YhsoO075AXvk5T5PyOYq%2FCTJRLOboO6fFzvGWkxTDrUpv5j04EgUpNP1zGVU4%2BFsJsCXYpvSQo4&X-Amz-Signature=25dbc5548c957c5709353a8d060430f37caf76167e453c22476946f93902438a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25L6MJE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcvgePHTgPDVc%2FYC3TG3Fjj3QQ78Qb5ffuXt41lkrQuAiEA8yHp2M%2BUbNsEdYoP7G5lhX%2FNcOIJHnzfbnJEL5lVmiAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA%2FgkcLYYQIU3D7OPyrcA9ePSsGKZ5QFQbm0dVRmIJI4ZM5xaerPjSS5QjeIsiB4UsdX1sXF%2FnMyvBA42cR30RBt60E0I5XwkdluX0OEU5T45olc%2B269LszhQ7EgIQCI%2FFTroL9cjCR9UL82husRBPlUHYrS9ULHRJ8XVlQngVLejrniKOIXzGzslwin%2B6272WQRw88vuEBRo1tmZVChvtEpU%2BtS%2BaGWpD%2BOTLatEmo4QW0BbTHbQtu0%2BSbOaBNKiNOaniuAJz9As25PH2jbkEyTZTxo%2FqHYgPhmJBlXJrfmB23eb1LMKwl3A4nTQ0JnJ7bVWaly8zACW1ZYXJymWzgMWH%2F8QIMvQmNtOjHgXcRm5MhBxWl766njSBeRwomI2d4kAEG%2FrEEPxdZl3ntmVgDvGJQxNwMJ4Upe6J43mrRktSfRX3HVVr%2F9WQOdn3e3IR1QJHKu%2Fh%2BjU4v%2B%2BBKImbomYXIhNXDTtLjmXsTh1LK2HzMCRv01Mq8HHNJ0BWowcN1fd09XHcbaTF32cE4TNCyWBzXGptmWrl4uBnsc%2F2jtntpJPhIBjLd2ltbUFp3Lve8TvVgEAV9zYgClFosJsVgTpPnSzX6iogH2LbMbWbLxyAZP94VT7fzUf58vGmn%2F7SvEweQHq3taiwqcMJWU9b8GOqUBjDBGDlgxBXWN3CoEXtkWM940lh1U6rBSC0BIulksmXa5DM%2FvqkLoSs9GLtHmvBw8tf0RytbpPgrQIuFI3IxH9Lr5GeAghKpWFCSncb5UtbKHrZYsowgoUepgU3w15urUQg26o3LFxznoBJWn5YhsoO075AXvk5T5PyOYq%2FCTJRLOboO6fFzvGWkxTDrUpv5j04EgUpNP1zGVU4%2BFsJsCXYpvSQo4&X-Amz-Signature=d41ed876a939fbbbaf94aad814f2d10d964c8d4ed61af5e2a9ba2649f16077d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25L6MJE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcvgePHTgPDVc%2FYC3TG3Fjj3QQ78Qb5ffuXt41lkrQuAiEA8yHp2M%2BUbNsEdYoP7G5lhX%2FNcOIJHnzfbnJEL5lVmiAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA%2FgkcLYYQIU3D7OPyrcA9ePSsGKZ5QFQbm0dVRmIJI4ZM5xaerPjSS5QjeIsiB4UsdX1sXF%2FnMyvBA42cR30RBt60E0I5XwkdluX0OEU5T45olc%2B269LszhQ7EgIQCI%2FFTroL9cjCR9UL82husRBPlUHYrS9ULHRJ8XVlQngVLejrniKOIXzGzslwin%2B6272WQRw88vuEBRo1tmZVChvtEpU%2BtS%2BaGWpD%2BOTLatEmo4QW0BbTHbQtu0%2BSbOaBNKiNOaniuAJz9As25PH2jbkEyTZTxo%2FqHYgPhmJBlXJrfmB23eb1LMKwl3A4nTQ0JnJ7bVWaly8zACW1ZYXJymWzgMWH%2F8QIMvQmNtOjHgXcRm5MhBxWl766njSBeRwomI2d4kAEG%2FrEEPxdZl3ntmVgDvGJQxNwMJ4Upe6J43mrRktSfRX3HVVr%2F9WQOdn3e3IR1QJHKu%2Fh%2BjU4v%2B%2BBKImbomYXIhNXDTtLjmXsTh1LK2HzMCRv01Mq8HHNJ0BWowcN1fd09XHcbaTF32cE4TNCyWBzXGptmWrl4uBnsc%2F2jtntpJPhIBjLd2ltbUFp3Lve8TvVgEAV9zYgClFosJsVgTpPnSzX6iogH2LbMbWbLxyAZP94VT7fzUf58vGmn%2F7SvEweQHq3taiwqcMJWU9b8GOqUBjDBGDlgxBXWN3CoEXtkWM940lh1U6rBSC0BIulksmXa5DM%2FvqkLoSs9GLtHmvBw8tf0RytbpPgrQIuFI3IxH9Lr5GeAghKpWFCSncb5UtbKHrZYsowgoUepgU3w15urUQg26o3LFxznoBJWn5YhsoO075AXvk5T5PyOYq%2FCTJRLOboO6fFzvGWkxTDrUpv5j04EgUpNP1zGVU4%2BFsJsCXYpvSQo4&X-Amz-Signature=b325e8c6b6e49f12c5708bdce2b2d79142fe755e06c01d2a8ccc6133bf0f92d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25L6MJE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcvgePHTgPDVc%2FYC3TG3Fjj3QQ78Qb5ffuXt41lkrQuAiEA8yHp2M%2BUbNsEdYoP7G5lhX%2FNcOIJHnzfbnJEL5lVmiAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA%2FgkcLYYQIU3D7OPyrcA9ePSsGKZ5QFQbm0dVRmIJI4ZM5xaerPjSS5QjeIsiB4UsdX1sXF%2FnMyvBA42cR30RBt60E0I5XwkdluX0OEU5T45olc%2B269LszhQ7EgIQCI%2FFTroL9cjCR9UL82husRBPlUHYrS9ULHRJ8XVlQngVLejrniKOIXzGzslwin%2B6272WQRw88vuEBRo1tmZVChvtEpU%2BtS%2BaGWpD%2BOTLatEmo4QW0BbTHbQtu0%2BSbOaBNKiNOaniuAJz9As25PH2jbkEyTZTxo%2FqHYgPhmJBlXJrfmB23eb1LMKwl3A4nTQ0JnJ7bVWaly8zACW1ZYXJymWzgMWH%2F8QIMvQmNtOjHgXcRm5MhBxWl766njSBeRwomI2d4kAEG%2FrEEPxdZl3ntmVgDvGJQxNwMJ4Upe6J43mrRktSfRX3HVVr%2F9WQOdn3e3IR1QJHKu%2Fh%2BjU4v%2B%2BBKImbomYXIhNXDTtLjmXsTh1LK2HzMCRv01Mq8HHNJ0BWowcN1fd09XHcbaTF32cE4TNCyWBzXGptmWrl4uBnsc%2F2jtntpJPhIBjLd2ltbUFp3Lve8TvVgEAV9zYgClFosJsVgTpPnSzX6iogH2LbMbWbLxyAZP94VT7fzUf58vGmn%2F7SvEweQHq3taiwqcMJWU9b8GOqUBjDBGDlgxBXWN3CoEXtkWM940lh1U6rBSC0BIulksmXa5DM%2FvqkLoSs9GLtHmvBw8tf0RytbpPgrQIuFI3IxH9Lr5GeAghKpWFCSncb5UtbKHrZYsowgoUepgU3w15urUQg26o3LFxznoBJWn5YhsoO075AXvk5T5PyOYq%2FCTJRLOboO6fFzvGWkxTDrUpv5j04EgUpNP1zGVU4%2BFsJsCXYpvSQo4&X-Amz-Signature=676f578792b2aa39c16069d46c5408c9c14f03086864e064ceffc20fd31a8aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25L6MJE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcvgePHTgPDVc%2FYC3TG3Fjj3QQ78Qb5ffuXt41lkrQuAiEA8yHp2M%2BUbNsEdYoP7G5lhX%2FNcOIJHnzfbnJEL5lVmiAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA%2FgkcLYYQIU3D7OPyrcA9ePSsGKZ5QFQbm0dVRmIJI4ZM5xaerPjSS5QjeIsiB4UsdX1sXF%2FnMyvBA42cR30RBt60E0I5XwkdluX0OEU5T45olc%2B269LszhQ7EgIQCI%2FFTroL9cjCR9UL82husRBPlUHYrS9ULHRJ8XVlQngVLejrniKOIXzGzslwin%2B6272WQRw88vuEBRo1tmZVChvtEpU%2BtS%2BaGWpD%2BOTLatEmo4QW0BbTHbQtu0%2BSbOaBNKiNOaniuAJz9As25PH2jbkEyTZTxo%2FqHYgPhmJBlXJrfmB23eb1LMKwl3A4nTQ0JnJ7bVWaly8zACW1ZYXJymWzgMWH%2F8QIMvQmNtOjHgXcRm5MhBxWl766njSBeRwomI2d4kAEG%2FrEEPxdZl3ntmVgDvGJQxNwMJ4Upe6J43mrRktSfRX3HVVr%2F9WQOdn3e3IR1QJHKu%2Fh%2BjU4v%2B%2BBKImbomYXIhNXDTtLjmXsTh1LK2HzMCRv01Mq8HHNJ0BWowcN1fd09XHcbaTF32cE4TNCyWBzXGptmWrl4uBnsc%2F2jtntpJPhIBjLd2ltbUFp3Lve8TvVgEAV9zYgClFosJsVgTpPnSzX6iogH2LbMbWbLxyAZP94VT7fzUf58vGmn%2F7SvEweQHq3taiwqcMJWU9b8GOqUBjDBGDlgxBXWN3CoEXtkWM940lh1U6rBSC0BIulksmXa5DM%2FvqkLoSs9GLtHmvBw8tf0RytbpPgrQIuFI3IxH9Lr5GeAghKpWFCSncb5UtbKHrZYsowgoUepgU3w15urUQg26o3LFxznoBJWn5YhsoO075AXvk5T5PyOYq%2FCTJRLOboO6fFzvGWkxTDrUpv5j04EgUpNP1zGVU4%2BFsJsCXYpvSQo4&X-Amz-Signature=aac637c25af616d5c58595d2174a84986aad5682c714e92ab2ae51c3da3d604f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25L6MJE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcvgePHTgPDVc%2FYC3TG3Fjj3QQ78Qb5ffuXt41lkrQuAiEA8yHp2M%2BUbNsEdYoP7G5lhX%2FNcOIJHnzfbnJEL5lVmiAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA%2FgkcLYYQIU3D7OPyrcA9ePSsGKZ5QFQbm0dVRmIJI4ZM5xaerPjSS5QjeIsiB4UsdX1sXF%2FnMyvBA42cR30RBt60E0I5XwkdluX0OEU5T45olc%2B269LszhQ7EgIQCI%2FFTroL9cjCR9UL82husRBPlUHYrS9ULHRJ8XVlQngVLejrniKOIXzGzslwin%2B6272WQRw88vuEBRo1tmZVChvtEpU%2BtS%2BaGWpD%2BOTLatEmo4QW0BbTHbQtu0%2BSbOaBNKiNOaniuAJz9As25PH2jbkEyTZTxo%2FqHYgPhmJBlXJrfmB23eb1LMKwl3A4nTQ0JnJ7bVWaly8zACW1ZYXJymWzgMWH%2F8QIMvQmNtOjHgXcRm5MhBxWl766njSBeRwomI2d4kAEG%2FrEEPxdZl3ntmVgDvGJQxNwMJ4Upe6J43mrRktSfRX3HVVr%2F9WQOdn3e3IR1QJHKu%2Fh%2BjU4v%2B%2BBKImbomYXIhNXDTtLjmXsTh1LK2HzMCRv01Mq8HHNJ0BWowcN1fd09XHcbaTF32cE4TNCyWBzXGptmWrl4uBnsc%2F2jtntpJPhIBjLd2ltbUFp3Lve8TvVgEAV9zYgClFosJsVgTpPnSzX6iogH2LbMbWbLxyAZP94VT7fzUf58vGmn%2F7SvEweQHq3taiwqcMJWU9b8GOqUBjDBGDlgxBXWN3CoEXtkWM940lh1U6rBSC0BIulksmXa5DM%2FvqkLoSs9GLtHmvBw8tf0RytbpPgrQIuFI3IxH9Lr5GeAghKpWFCSncb5UtbKHrZYsowgoUepgU3w15urUQg26o3LFxznoBJWn5YhsoO075AXvk5T5PyOYq%2FCTJRLOboO6fFzvGWkxTDrUpv5j04EgUpNP1zGVU4%2BFsJsCXYpvSQo4&X-Amz-Signature=bd7b25d05c4f9c74ff87b88957ec82a7d636f51f76b3e8738a8ce98932ebc832&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
