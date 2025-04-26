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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR65B4K%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNPiY7eWT5IgH8hfP2s%2FQoeBGPctR7CPTIKYR7tWlypAIgef5J79IxPthWBoyWt%2BMrewt3%2F8pnji1SwB%2FHUDAWNEcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOQkEbsUv679hY%2FpwyrcA%2FD6HhWIMZWjfYzlWY%2BZ8loIQ%2Fg8GxxDlcJBoE8yg6lPqeyasQDuxgWYW7KmyQK4tZ2i0AJ5QBTMi1HAV%2FV6WWfGBcpkwzh5suNpKk42AUX55JmRzjNwhGYNK0razSmphHVEWP18Sz2nZrRAyBJs6cGshaUt%2FRWYKpCMxGPSCRkgB0i6Z5TmmydN%2By6CMOBnfLtRn%2BtJ1yqLX2jsQvQDuGjOMitin9qxEa4Da4sN%2BHNL1W%2Fuo7eSq%2Fy4KV%2B4FATuaKf1%2BSElni3%2BzuA0uiXQ9ZJZZR4gOADZTDZH0eNqKq%2Fg5f7Vyx2Wg9kCVvmCC6taYYuBQEI3ueoTAVhVaFUII4Q2B2o%2FW8HWM%2FvjC5mRWsZze9wCICfBYfcKQw6zj8phvFPOYYX6P%2BixqZId28kgm8AViB87nOteIaLegpm%2BExoQsVuoyvwY4p2IvC%2FAHa5bPY7rk%2FVdQh%2BrWsEux6IQKoeXpMZgRCM5aveoG8M5bL7xdC4Zmws1hU%2BftStEHxGX3XqBX%2F1YxQ1qzWnu1sFgDuCYEscKsoqQUyixpeGC4tPQsgjrT9t2HgtMOd0rNZzu5Gb3Fih%2FuF8gtUgljptHnZs6UKtDBNKJbKCp8Ah%2FPCXH5JfvlHr7sHzUHFo%2BMKKqscAGOqUBQkNR%2FZwzQzfWxexBABTkf%2B7HSoUtD5%2F6zrOsQbVS1KN6e3NrePk7j7EcmQ%2FuzIDyXiwPOPXAQzvbPY0qzhkGcs%2FFvhwp5A1m1kd0d%2BWShqLgKRWyg4fx4pMh2v0wIrTIxhVE%2FF7xkhLn56i%2FxUlw3ihqvvbDKPhjBakzm3GAh8yBxwEd8W309LOUEH%2FoSzAJd9GGE355ZWSzhTiketKsBjyxCMzB&X-Amz-Signature=35747c6a8e8c4c819e413698d5544a0331b0f2765022150f0a482f340dc4169c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR65B4K%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNPiY7eWT5IgH8hfP2s%2FQoeBGPctR7CPTIKYR7tWlypAIgef5J79IxPthWBoyWt%2BMrewt3%2F8pnji1SwB%2FHUDAWNEcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOQkEbsUv679hY%2FpwyrcA%2FD6HhWIMZWjfYzlWY%2BZ8loIQ%2Fg8GxxDlcJBoE8yg6lPqeyasQDuxgWYW7KmyQK4tZ2i0AJ5QBTMi1HAV%2FV6WWfGBcpkwzh5suNpKk42AUX55JmRzjNwhGYNK0razSmphHVEWP18Sz2nZrRAyBJs6cGshaUt%2FRWYKpCMxGPSCRkgB0i6Z5TmmydN%2By6CMOBnfLtRn%2BtJ1yqLX2jsQvQDuGjOMitin9qxEa4Da4sN%2BHNL1W%2Fuo7eSq%2Fy4KV%2B4FATuaKf1%2BSElni3%2BzuA0uiXQ9ZJZZR4gOADZTDZH0eNqKq%2Fg5f7Vyx2Wg9kCVvmCC6taYYuBQEI3ueoTAVhVaFUII4Q2B2o%2FW8HWM%2FvjC5mRWsZze9wCICfBYfcKQw6zj8phvFPOYYX6P%2BixqZId28kgm8AViB87nOteIaLegpm%2BExoQsVuoyvwY4p2IvC%2FAHa5bPY7rk%2FVdQh%2BrWsEux6IQKoeXpMZgRCM5aveoG8M5bL7xdC4Zmws1hU%2BftStEHxGX3XqBX%2F1YxQ1qzWnu1sFgDuCYEscKsoqQUyixpeGC4tPQsgjrT9t2HgtMOd0rNZzu5Gb3Fih%2FuF8gtUgljptHnZs6UKtDBNKJbKCp8Ah%2FPCXH5JfvlHr7sHzUHFo%2BMKKqscAGOqUBQkNR%2FZwzQzfWxexBABTkf%2B7HSoUtD5%2F6zrOsQbVS1KN6e3NrePk7j7EcmQ%2FuzIDyXiwPOPXAQzvbPY0qzhkGcs%2FFvhwp5A1m1kd0d%2BWShqLgKRWyg4fx4pMh2v0wIrTIxhVE%2FF7xkhLn56i%2FxUlw3ihqvvbDKPhjBakzm3GAh8yBxwEd8W309LOUEH%2FoSzAJd9GGE355ZWSzhTiketKsBjyxCMzB&X-Amz-Signature=27cd634e6326f1f7442ba0ed7d4caece8f17c44b955b30fa163cf05a787f3667&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR65B4K%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNPiY7eWT5IgH8hfP2s%2FQoeBGPctR7CPTIKYR7tWlypAIgef5J79IxPthWBoyWt%2BMrewt3%2F8pnji1SwB%2FHUDAWNEcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOQkEbsUv679hY%2FpwyrcA%2FD6HhWIMZWjfYzlWY%2BZ8loIQ%2Fg8GxxDlcJBoE8yg6lPqeyasQDuxgWYW7KmyQK4tZ2i0AJ5QBTMi1HAV%2FV6WWfGBcpkwzh5suNpKk42AUX55JmRzjNwhGYNK0razSmphHVEWP18Sz2nZrRAyBJs6cGshaUt%2FRWYKpCMxGPSCRkgB0i6Z5TmmydN%2By6CMOBnfLtRn%2BtJ1yqLX2jsQvQDuGjOMitin9qxEa4Da4sN%2BHNL1W%2Fuo7eSq%2Fy4KV%2B4FATuaKf1%2BSElni3%2BzuA0uiXQ9ZJZZR4gOADZTDZH0eNqKq%2Fg5f7Vyx2Wg9kCVvmCC6taYYuBQEI3ueoTAVhVaFUII4Q2B2o%2FW8HWM%2FvjC5mRWsZze9wCICfBYfcKQw6zj8phvFPOYYX6P%2BixqZId28kgm8AViB87nOteIaLegpm%2BExoQsVuoyvwY4p2IvC%2FAHa5bPY7rk%2FVdQh%2BrWsEux6IQKoeXpMZgRCM5aveoG8M5bL7xdC4Zmws1hU%2BftStEHxGX3XqBX%2F1YxQ1qzWnu1sFgDuCYEscKsoqQUyixpeGC4tPQsgjrT9t2HgtMOd0rNZzu5Gb3Fih%2FuF8gtUgljptHnZs6UKtDBNKJbKCp8Ah%2FPCXH5JfvlHr7sHzUHFo%2BMKKqscAGOqUBQkNR%2FZwzQzfWxexBABTkf%2B7HSoUtD5%2F6zrOsQbVS1KN6e3NrePk7j7EcmQ%2FuzIDyXiwPOPXAQzvbPY0qzhkGcs%2FFvhwp5A1m1kd0d%2BWShqLgKRWyg4fx4pMh2v0wIrTIxhVE%2FF7xkhLn56i%2FxUlw3ihqvvbDKPhjBakzm3GAh8yBxwEd8W309LOUEH%2FoSzAJd9GGE355ZWSzhTiketKsBjyxCMzB&X-Amz-Signature=bac2ecb6f077e6e316815773d1f8de0d7d606e52a19ed50bec6e98ebb11c8a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR65B4K%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNPiY7eWT5IgH8hfP2s%2FQoeBGPctR7CPTIKYR7tWlypAIgef5J79IxPthWBoyWt%2BMrewt3%2F8pnji1SwB%2FHUDAWNEcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOQkEbsUv679hY%2FpwyrcA%2FD6HhWIMZWjfYzlWY%2BZ8loIQ%2Fg8GxxDlcJBoE8yg6lPqeyasQDuxgWYW7KmyQK4tZ2i0AJ5QBTMi1HAV%2FV6WWfGBcpkwzh5suNpKk42AUX55JmRzjNwhGYNK0razSmphHVEWP18Sz2nZrRAyBJs6cGshaUt%2FRWYKpCMxGPSCRkgB0i6Z5TmmydN%2By6CMOBnfLtRn%2BtJ1yqLX2jsQvQDuGjOMitin9qxEa4Da4sN%2BHNL1W%2Fuo7eSq%2Fy4KV%2B4FATuaKf1%2BSElni3%2BzuA0uiXQ9ZJZZR4gOADZTDZH0eNqKq%2Fg5f7Vyx2Wg9kCVvmCC6taYYuBQEI3ueoTAVhVaFUII4Q2B2o%2FW8HWM%2FvjC5mRWsZze9wCICfBYfcKQw6zj8phvFPOYYX6P%2BixqZId28kgm8AViB87nOteIaLegpm%2BExoQsVuoyvwY4p2IvC%2FAHa5bPY7rk%2FVdQh%2BrWsEux6IQKoeXpMZgRCM5aveoG8M5bL7xdC4Zmws1hU%2BftStEHxGX3XqBX%2F1YxQ1qzWnu1sFgDuCYEscKsoqQUyixpeGC4tPQsgjrT9t2HgtMOd0rNZzu5Gb3Fih%2FuF8gtUgljptHnZs6UKtDBNKJbKCp8Ah%2FPCXH5JfvlHr7sHzUHFo%2BMKKqscAGOqUBQkNR%2FZwzQzfWxexBABTkf%2B7HSoUtD5%2F6zrOsQbVS1KN6e3NrePk7j7EcmQ%2FuzIDyXiwPOPXAQzvbPY0qzhkGcs%2FFvhwp5A1m1kd0d%2BWShqLgKRWyg4fx4pMh2v0wIrTIxhVE%2FF7xkhLn56i%2FxUlw3ihqvvbDKPhjBakzm3GAh8yBxwEd8W309LOUEH%2FoSzAJd9GGE355ZWSzhTiketKsBjyxCMzB&X-Amz-Signature=1ec67520ad7fcccdf39c0f276f998a0326b89527af3dcf966f831c21753f4c17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR65B4K%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNPiY7eWT5IgH8hfP2s%2FQoeBGPctR7CPTIKYR7tWlypAIgef5J79IxPthWBoyWt%2BMrewt3%2F8pnji1SwB%2FHUDAWNEcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOQkEbsUv679hY%2FpwyrcA%2FD6HhWIMZWjfYzlWY%2BZ8loIQ%2Fg8GxxDlcJBoE8yg6lPqeyasQDuxgWYW7KmyQK4tZ2i0AJ5QBTMi1HAV%2FV6WWfGBcpkwzh5suNpKk42AUX55JmRzjNwhGYNK0razSmphHVEWP18Sz2nZrRAyBJs6cGshaUt%2FRWYKpCMxGPSCRkgB0i6Z5TmmydN%2By6CMOBnfLtRn%2BtJ1yqLX2jsQvQDuGjOMitin9qxEa4Da4sN%2BHNL1W%2Fuo7eSq%2Fy4KV%2B4FATuaKf1%2BSElni3%2BzuA0uiXQ9ZJZZR4gOADZTDZH0eNqKq%2Fg5f7Vyx2Wg9kCVvmCC6taYYuBQEI3ueoTAVhVaFUII4Q2B2o%2FW8HWM%2FvjC5mRWsZze9wCICfBYfcKQw6zj8phvFPOYYX6P%2BixqZId28kgm8AViB87nOteIaLegpm%2BExoQsVuoyvwY4p2IvC%2FAHa5bPY7rk%2FVdQh%2BrWsEux6IQKoeXpMZgRCM5aveoG8M5bL7xdC4Zmws1hU%2BftStEHxGX3XqBX%2F1YxQ1qzWnu1sFgDuCYEscKsoqQUyixpeGC4tPQsgjrT9t2HgtMOd0rNZzu5Gb3Fih%2FuF8gtUgljptHnZs6UKtDBNKJbKCp8Ah%2FPCXH5JfvlHr7sHzUHFo%2BMKKqscAGOqUBQkNR%2FZwzQzfWxexBABTkf%2B7HSoUtD5%2F6zrOsQbVS1KN6e3NrePk7j7EcmQ%2FuzIDyXiwPOPXAQzvbPY0qzhkGcs%2FFvhwp5A1m1kd0d%2BWShqLgKRWyg4fx4pMh2v0wIrTIxhVE%2FF7xkhLn56i%2FxUlw3ihqvvbDKPhjBakzm3GAh8yBxwEd8W309LOUEH%2FoSzAJd9GGE355ZWSzhTiketKsBjyxCMzB&X-Amz-Signature=d94efc1e42a7e79adae49f17cffab79d2dcf9bd7f9eef3f39fc53cefb22510d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR65B4K%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNPiY7eWT5IgH8hfP2s%2FQoeBGPctR7CPTIKYR7tWlypAIgef5J79IxPthWBoyWt%2BMrewt3%2F8pnji1SwB%2FHUDAWNEcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOQkEbsUv679hY%2FpwyrcA%2FD6HhWIMZWjfYzlWY%2BZ8loIQ%2Fg8GxxDlcJBoE8yg6lPqeyasQDuxgWYW7KmyQK4tZ2i0AJ5QBTMi1HAV%2FV6WWfGBcpkwzh5suNpKk42AUX55JmRzjNwhGYNK0razSmphHVEWP18Sz2nZrRAyBJs6cGshaUt%2FRWYKpCMxGPSCRkgB0i6Z5TmmydN%2By6CMOBnfLtRn%2BtJ1yqLX2jsQvQDuGjOMitin9qxEa4Da4sN%2BHNL1W%2Fuo7eSq%2Fy4KV%2B4FATuaKf1%2BSElni3%2BzuA0uiXQ9ZJZZR4gOADZTDZH0eNqKq%2Fg5f7Vyx2Wg9kCVvmCC6taYYuBQEI3ueoTAVhVaFUII4Q2B2o%2FW8HWM%2FvjC5mRWsZze9wCICfBYfcKQw6zj8phvFPOYYX6P%2BixqZId28kgm8AViB87nOteIaLegpm%2BExoQsVuoyvwY4p2IvC%2FAHa5bPY7rk%2FVdQh%2BrWsEux6IQKoeXpMZgRCM5aveoG8M5bL7xdC4Zmws1hU%2BftStEHxGX3XqBX%2F1YxQ1qzWnu1sFgDuCYEscKsoqQUyixpeGC4tPQsgjrT9t2HgtMOd0rNZzu5Gb3Fih%2FuF8gtUgljptHnZs6UKtDBNKJbKCp8Ah%2FPCXH5JfvlHr7sHzUHFo%2BMKKqscAGOqUBQkNR%2FZwzQzfWxexBABTkf%2B7HSoUtD5%2F6zrOsQbVS1KN6e3NrePk7j7EcmQ%2FuzIDyXiwPOPXAQzvbPY0qzhkGcs%2FFvhwp5A1m1kd0d%2BWShqLgKRWyg4fx4pMh2v0wIrTIxhVE%2FF7xkhLn56i%2FxUlw3ihqvvbDKPhjBakzm3GAh8yBxwEd8W309LOUEH%2FoSzAJd9GGE355ZWSzhTiketKsBjyxCMzB&X-Amz-Signature=be01c38d4ff7ae4b049bd843b41460f01dad2366190858c2e52434850f2b6a01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR65B4K%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNPiY7eWT5IgH8hfP2s%2FQoeBGPctR7CPTIKYR7tWlypAIgef5J79IxPthWBoyWt%2BMrewt3%2F8pnji1SwB%2FHUDAWNEcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOQkEbsUv679hY%2FpwyrcA%2FD6HhWIMZWjfYzlWY%2BZ8loIQ%2Fg8GxxDlcJBoE8yg6lPqeyasQDuxgWYW7KmyQK4tZ2i0AJ5QBTMi1HAV%2FV6WWfGBcpkwzh5suNpKk42AUX55JmRzjNwhGYNK0razSmphHVEWP18Sz2nZrRAyBJs6cGshaUt%2FRWYKpCMxGPSCRkgB0i6Z5TmmydN%2By6CMOBnfLtRn%2BtJ1yqLX2jsQvQDuGjOMitin9qxEa4Da4sN%2BHNL1W%2Fuo7eSq%2Fy4KV%2B4FATuaKf1%2BSElni3%2BzuA0uiXQ9ZJZZR4gOADZTDZH0eNqKq%2Fg5f7Vyx2Wg9kCVvmCC6taYYuBQEI3ueoTAVhVaFUII4Q2B2o%2FW8HWM%2FvjC5mRWsZze9wCICfBYfcKQw6zj8phvFPOYYX6P%2BixqZId28kgm8AViB87nOteIaLegpm%2BExoQsVuoyvwY4p2IvC%2FAHa5bPY7rk%2FVdQh%2BrWsEux6IQKoeXpMZgRCM5aveoG8M5bL7xdC4Zmws1hU%2BftStEHxGX3XqBX%2F1YxQ1qzWnu1sFgDuCYEscKsoqQUyixpeGC4tPQsgjrT9t2HgtMOd0rNZzu5Gb3Fih%2FuF8gtUgljptHnZs6UKtDBNKJbKCp8Ah%2FPCXH5JfvlHr7sHzUHFo%2BMKKqscAGOqUBQkNR%2FZwzQzfWxexBABTkf%2B7HSoUtD5%2F6zrOsQbVS1KN6e3NrePk7j7EcmQ%2FuzIDyXiwPOPXAQzvbPY0qzhkGcs%2FFvhwp5A1m1kd0d%2BWShqLgKRWyg4fx4pMh2v0wIrTIxhVE%2FF7xkhLn56i%2FxUlw3ihqvvbDKPhjBakzm3GAh8yBxwEd8W309LOUEH%2FoSzAJd9GGE355ZWSzhTiketKsBjyxCMzB&X-Amz-Signature=9fd4608a9cff8806b9eab2b9d9a5f7952fbe313bc7313f55738196402c28819a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHR65B4K%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNPiY7eWT5IgH8hfP2s%2FQoeBGPctR7CPTIKYR7tWlypAIgef5J79IxPthWBoyWt%2BMrewt3%2F8pnji1SwB%2FHUDAWNEcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOQkEbsUv679hY%2FpwyrcA%2FD6HhWIMZWjfYzlWY%2BZ8loIQ%2Fg8GxxDlcJBoE8yg6lPqeyasQDuxgWYW7KmyQK4tZ2i0AJ5QBTMi1HAV%2FV6WWfGBcpkwzh5suNpKk42AUX55JmRzjNwhGYNK0razSmphHVEWP18Sz2nZrRAyBJs6cGshaUt%2FRWYKpCMxGPSCRkgB0i6Z5TmmydN%2By6CMOBnfLtRn%2BtJ1yqLX2jsQvQDuGjOMitin9qxEa4Da4sN%2BHNL1W%2Fuo7eSq%2Fy4KV%2B4FATuaKf1%2BSElni3%2BzuA0uiXQ9ZJZZR4gOADZTDZH0eNqKq%2Fg5f7Vyx2Wg9kCVvmCC6taYYuBQEI3ueoTAVhVaFUII4Q2B2o%2FW8HWM%2FvjC5mRWsZze9wCICfBYfcKQw6zj8phvFPOYYX6P%2BixqZId28kgm8AViB87nOteIaLegpm%2BExoQsVuoyvwY4p2IvC%2FAHa5bPY7rk%2FVdQh%2BrWsEux6IQKoeXpMZgRCM5aveoG8M5bL7xdC4Zmws1hU%2BftStEHxGX3XqBX%2F1YxQ1qzWnu1sFgDuCYEscKsoqQUyixpeGC4tPQsgjrT9t2HgtMOd0rNZzu5Gb3Fih%2FuF8gtUgljptHnZs6UKtDBNKJbKCp8Ah%2FPCXH5JfvlHr7sHzUHFo%2BMKKqscAGOqUBQkNR%2FZwzQzfWxexBABTkf%2B7HSoUtD5%2F6zrOsQbVS1KN6e3NrePk7j7EcmQ%2FuzIDyXiwPOPXAQzvbPY0qzhkGcs%2FFvhwp5A1m1kd0d%2BWShqLgKRWyg4fx4pMh2v0wIrTIxhVE%2FF7xkhLn56i%2FxUlw3ihqvvbDKPhjBakzm3GAh8yBxwEd8W309LOUEH%2FoSzAJd9GGE355ZWSzhTiketKsBjyxCMzB&X-Amz-Signature=66c352cc11cef3b8134abadd2421590dc0a63e50d5fb80ea661f262f8617af4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
