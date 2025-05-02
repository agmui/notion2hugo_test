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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSRGEJ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDt2KGTznyFzpB99P7%2Bl3UW58KAHQJbm6fCygtzbIgUsAIgINj9IJo0VAnRlJoxL5WnnEbPZrZPgNAJkj5yQWX%2FIB0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4BbEe3HivTbWLkircA%2BSQ88r2Ybg9LRPcZb3Hf9qZFtgadSF4Ky2PI5G39%2FuSs49J%2BKwDiKyL%2FRCWnjf%2BkG6wq3EbATIFKArlDxY%2BqKVJf3cFUrbkXx4gW%2FoYCfjj0jdjxqbRBSPffQGnWGp7I%2F%2BODrEcBQVJMtWc22O40HseTfYJIatghhM4PtqrV%2FxBNBRwEfTqsyrNI2Wdr5FHXhlBCWagctMC5e2FZ76x3iKKMf6swKAIwSacls0PWF5zFds4IVzXjTwM0xA2LRoDDswFN%2FTKZTZaV27LwwtSp3ecXPeAWDJy9uDlVWTBnD6x6t5dKYWRt4KiVZfdd8IMZXCHzJ5SY558LpmJpe2SFGXsgy1cSfxzQeObZ8e60KFIYZx5CjvcivvpG6ljKKZ6dGwHdEbWb8HthAEmMk0a35deXPvoOLKVKHji8RSF1n2SSiCJ1PG%2BwhaD32gEYLaJaTGkeLhjEDP9BKirdNv1dDoRpgDqAaiE4Li05%2F%2BM3DGa23r4evHCaCI7kjyOvg7MRIw1nBzL5nJWs9KwE8mnr7wHWPzmyXoH8Rx27QLtXKEPQowZXrSI558OR3XwwsSSRtLLfzhyj9E1ABROe6OUri8mUdBtT485pFg%2BBi%2BWUpGNzleCCRbHuTjKPM5CMKrk08AGOqUBRnQHt7btiAsl3zEFp0ExkclEKWWUmUvIY%2F3RlNi8gRfsZU6d0zD6VIH0Rx8r%2BJ489jhPnkrLtvRSj%2FerBp3QZ8E4craR7oYB7oBj4tvq7fwe4pN7lIhrK6kuVeHctdW4ZcKAN6cdiuCTbleldNZedoYRaVC58xffikeTbBNlyxcEuejmdxDC8MaQprVZcqHFOpZ%2BVKmRn9kfHy3js4NS%2ByXSbyJ%2F&X-Amz-Signature=57e0868097b2ca87ded80c7213a43ef558571051041125345d51bae13aec46f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSRGEJ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDt2KGTznyFzpB99P7%2Bl3UW58KAHQJbm6fCygtzbIgUsAIgINj9IJo0VAnRlJoxL5WnnEbPZrZPgNAJkj5yQWX%2FIB0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4BbEe3HivTbWLkircA%2BSQ88r2Ybg9LRPcZb3Hf9qZFtgadSF4Ky2PI5G39%2FuSs49J%2BKwDiKyL%2FRCWnjf%2BkG6wq3EbATIFKArlDxY%2BqKVJf3cFUrbkXx4gW%2FoYCfjj0jdjxqbRBSPffQGnWGp7I%2F%2BODrEcBQVJMtWc22O40HseTfYJIatghhM4PtqrV%2FxBNBRwEfTqsyrNI2Wdr5FHXhlBCWagctMC5e2FZ76x3iKKMf6swKAIwSacls0PWF5zFds4IVzXjTwM0xA2LRoDDswFN%2FTKZTZaV27LwwtSp3ecXPeAWDJy9uDlVWTBnD6x6t5dKYWRt4KiVZfdd8IMZXCHzJ5SY558LpmJpe2SFGXsgy1cSfxzQeObZ8e60KFIYZx5CjvcivvpG6ljKKZ6dGwHdEbWb8HthAEmMk0a35deXPvoOLKVKHji8RSF1n2SSiCJ1PG%2BwhaD32gEYLaJaTGkeLhjEDP9BKirdNv1dDoRpgDqAaiE4Li05%2F%2BM3DGa23r4evHCaCI7kjyOvg7MRIw1nBzL5nJWs9KwE8mnr7wHWPzmyXoH8Rx27QLtXKEPQowZXrSI558OR3XwwsSSRtLLfzhyj9E1ABROe6OUri8mUdBtT485pFg%2BBi%2BWUpGNzleCCRbHuTjKPM5CMKrk08AGOqUBRnQHt7btiAsl3zEFp0ExkclEKWWUmUvIY%2F3RlNi8gRfsZU6d0zD6VIH0Rx8r%2BJ489jhPnkrLtvRSj%2FerBp3QZ8E4craR7oYB7oBj4tvq7fwe4pN7lIhrK6kuVeHctdW4ZcKAN6cdiuCTbleldNZedoYRaVC58xffikeTbBNlyxcEuejmdxDC8MaQprVZcqHFOpZ%2BVKmRn9kfHy3js4NS%2ByXSbyJ%2F&X-Amz-Signature=a2517b2d08a3277fc4d22bd49a49d899a6add755cb20b8f05a5868daf15b6d28&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSRGEJ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDt2KGTznyFzpB99P7%2Bl3UW58KAHQJbm6fCygtzbIgUsAIgINj9IJo0VAnRlJoxL5WnnEbPZrZPgNAJkj5yQWX%2FIB0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4BbEe3HivTbWLkircA%2BSQ88r2Ybg9LRPcZb3Hf9qZFtgadSF4Ky2PI5G39%2FuSs49J%2BKwDiKyL%2FRCWnjf%2BkG6wq3EbATIFKArlDxY%2BqKVJf3cFUrbkXx4gW%2FoYCfjj0jdjxqbRBSPffQGnWGp7I%2F%2BODrEcBQVJMtWc22O40HseTfYJIatghhM4PtqrV%2FxBNBRwEfTqsyrNI2Wdr5FHXhlBCWagctMC5e2FZ76x3iKKMf6swKAIwSacls0PWF5zFds4IVzXjTwM0xA2LRoDDswFN%2FTKZTZaV27LwwtSp3ecXPeAWDJy9uDlVWTBnD6x6t5dKYWRt4KiVZfdd8IMZXCHzJ5SY558LpmJpe2SFGXsgy1cSfxzQeObZ8e60KFIYZx5CjvcivvpG6ljKKZ6dGwHdEbWb8HthAEmMk0a35deXPvoOLKVKHji8RSF1n2SSiCJ1PG%2BwhaD32gEYLaJaTGkeLhjEDP9BKirdNv1dDoRpgDqAaiE4Li05%2F%2BM3DGa23r4evHCaCI7kjyOvg7MRIw1nBzL5nJWs9KwE8mnr7wHWPzmyXoH8Rx27QLtXKEPQowZXrSI558OR3XwwsSSRtLLfzhyj9E1ABROe6OUri8mUdBtT485pFg%2BBi%2BWUpGNzleCCRbHuTjKPM5CMKrk08AGOqUBRnQHt7btiAsl3zEFp0ExkclEKWWUmUvIY%2F3RlNi8gRfsZU6d0zD6VIH0Rx8r%2BJ489jhPnkrLtvRSj%2FerBp3QZ8E4craR7oYB7oBj4tvq7fwe4pN7lIhrK6kuVeHctdW4ZcKAN6cdiuCTbleldNZedoYRaVC58xffikeTbBNlyxcEuejmdxDC8MaQprVZcqHFOpZ%2BVKmRn9kfHy3js4NS%2ByXSbyJ%2F&X-Amz-Signature=d1f56d1306ec97556e76e221de2b1982ef7ff0f516d34d4791448a8efeadeaef&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSRGEJ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDt2KGTznyFzpB99P7%2Bl3UW58KAHQJbm6fCygtzbIgUsAIgINj9IJo0VAnRlJoxL5WnnEbPZrZPgNAJkj5yQWX%2FIB0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4BbEe3HivTbWLkircA%2BSQ88r2Ybg9LRPcZb3Hf9qZFtgadSF4Ky2PI5G39%2FuSs49J%2BKwDiKyL%2FRCWnjf%2BkG6wq3EbATIFKArlDxY%2BqKVJf3cFUrbkXx4gW%2FoYCfjj0jdjxqbRBSPffQGnWGp7I%2F%2BODrEcBQVJMtWc22O40HseTfYJIatghhM4PtqrV%2FxBNBRwEfTqsyrNI2Wdr5FHXhlBCWagctMC5e2FZ76x3iKKMf6swKAIwSacls0PWF5zFds4IVzXjTwM0xA2LRoDDswFN%2FTKZTZaV27LwwtSp3ecXPeAWDJy9uDlVWTBnD6x6t5dKYWRt4KiVZfdd8IMZXCHzJ5SY558LpmJpe2SFGXsgy1cSfxzQeObZ8e60KFIYZx5CjvcivvpG6ljKKZ6dGwHdEbWb8HthAEmMk0a35deXPvoOLKVKHji8RSF1n2SSiCJ1PG%2BwhaD32gEYLaJaTGkeLhjEDP9BKirdNv1dDoRpgDqAaiE4Li05%2F%2BM3DGa23r4evHCaCI7kjyOvg7MRIw1nBzL5nJWs9KwE8mnr7wHWPzmyXoH8Rx27QLtXKEPQowZXrSI558OR3XwwsSSRtLLfzhyj9E1ABROe6OUri8mUdBtT485pFg%2BBi%2BWUpGNzleCCRbHuTjKPM5CMKrk08AGOqUBRnQHt7btiAsl3zEFp0ExkclEKWWUmUvIY%2F3RlNi8gRfsZU6d0zD6VIH0Rx8r%2BJ489jhPnkrLtvRSj%2FerBp3QZ8E4craR7oYB7oBj4tvq7fwe4pN7lIhrK6kuVeHctdW4ZcKAN6cdiuCTbleldNZedoYRaVC58xffikeTbBNlyxcEuejmdxDC8MaQprVZcqHFOpZ%2BVKmRn9kfHy3js4NS%2ByXSbyJ%2F&X-Amz-Signature=b273612a141942e65510f24073f68012a0c65cf9288d1407dc9287d6b782dc18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSRGEJ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDt2KGTznyFzpB99P7%2Bl3UW58KAHQJbm6fCygtzbIgUsAIgINj9IJo0VAnRlJoxL5WnnEbPZrZPgNAJkj5yQWX%2FIB0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4BbEe3HivTbWLkircA%2BSQ88r2Ybg9LRPcZb3Hf9qZFtgadSF4Ky2PI5G39%2FuSs49J%2BKwDiKyL%2FRCWnjf%2BkG6wq3EbATIFKArlDxY%2BqKVJf3cFUrbkXx4gW%2FoYCfjj0jdjxqbRBSPffQGnWGp7I%2F%2BODrEcBQVJMtWc22O40HseTfYJIatghhM4PtqrV%2FxBNBRwEfTqsyrNI2Wdr5FHXhlBCWagctMC5e2FZ76x3iKKMf6swKAIwSacls0PWF5zFds4IVzXjTwM0xA2LRoDDswFN%2FTKZTZaV27LwwtSp3ecXPeAWDJy9uDlVWTBnD6x6t5dKYWRt4KiVZfdd8IMZXCHzJ5SY558LpmJpe2SFGXsgy1cSfxzQeObZ8e60KFIYZx5CjvcivvpG6ljKKZ6dGwHdEbWb8HthAEmMk0a35deXPvoOLKVKHji8RSF1n2SSiCJ1PG%2BwhaD32gEYLaJaTGkeLhjEDP9BKirdNv1dDoRpgDqAaiE4Li05%2F%2BM3DGa23r4evHCaCI7kjyOvg7MRIw1nBzL5nJWs9KwE8mnr7wHWPzmyXoH8Rx27QLtXKEPQowZXrSI558OR3XwwsSSRtLLfzhyj9E1ABROe6OUri8mUdBtT485pFg%2BBi%2BWUpGNzleCCRbHuTjKPM5CMKrk08AGOqUBRnQHt7btiAsl3zEFp0ExkclEKWWUmUvIY%2F3RlNi8gRfsZU6d0zD6VIH0Rx8r%2BJ489jhPnkrLtvRSj%2FerBp3QZ8E4craR7oYB7oBj4tvq7fwe4pN7lIhrK6kuVeHctdW4ZcKAN6cdiuCTbleldNZedoYRaVC58xffikeTbBNlyxcEuejmdxDC8MaQprVZcqHFOpZ%2BVKmRn9kfHy3js4NS%2ByXSbyJ%2F&X-Amz-Signature=91c45e334895f7d96e71f004fa28b28338ec002295d641f099477188ea1cd855&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSRGEJ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDt2KGTznyFzpB99P7%2Bl3UW58KAHQJbm6fCygtzbIgUsAIgINj9IJo0VAnRlJoxL5WnnEbPZrZPgNAJkj5yQWX%2FIB0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4BbEe3HivTbWLkircA%2BSQ88r2Ybg9LRPcZb3Hf9qZFtgadSF4Ky2PI5G39%2FuSs49J%2BKwDiKyL%2FRCWnjf%2BkG6wq3EbATIFKArlDxY%2BqKVJf3cFUrbkXx4gW%2FoYCfjj0jdjxqbRBSPffQGnWGp7I%2F%2BODrEcBQVJMtWc22O40HseTfYJIatghhM4PtqrV%2FxBNBRwEfTqsyrNI2Wdr5FHXhlBCWagctMC5e2FZ76x3iKKMf6swKAIwSacls0PWF5zFds4IVzXjTwM0xA2LRoDDswFN%2FTKZTZaV27LwwtSp3ecXPeAWDJy9uDlVWTBnD6x6t5dKYWRt4KiVZfdd8IMZXCHzJ5SY558LpmJpe2SFGXsgy1cSfxzQeObZ8e60KFIYZx5CjvcivvpG6ljKKZ6dGwHdEbWb8HthAEmMk0a35deXPvoOLKVKHji8RSF1n2SSiCJ1PG%2BwhaD32gEYLaJaTGkeLhjEDP9BKirdNv1dDoRpgDqAaiE4Li05%2F%2BM3DGa23r4evHCaCI7kjyOvg7MRIw1nBzL5nJWs9KwE8mnr7wHWPzmyXoH8Rx27QLtXKEPQowZXrSI558OR3XwwsSSRtLLfzhyj9E1ABROe6OUri8mUdBtT485pFg%2BBi%2BWUpGNzleCCRbHuTjKPM5CMKrk08AGOqUBRnQHt7btiAsl3zEFp0ExkclEKWWUmUvIY%2F3RlNi8gRfsZU6d0zD6VIH0Rx8r%2BJ489jhPnkrLtvRSj%2FerBp3QZ8E4craR7oYB7oBj4tvq7fwe4pN7lIhrK6kuVeHctdW4ZcKAN6cdiuCTbleldNZedoYRaVC58xffikeTbBNlyxcEuejmdxDC8MaQprVZcqHFOpZ%2BVKmRn9kfHy3js4NS%2ByXSbyJ%2F&X-Amz-Signature=6984b92b5a9fd91c420143caa4bb43353a3277adad4448a12b31840e220b5801&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSRGEJ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDt2KGTznyFzpB99P7%2Bl3UW58KAHQJbm6fCygtzbIgUsAIgINj9IJo0VAnRlJoxL5WnnEbPZrZPgNAJkj5yQWX%2FIB0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4BbEe3HivTbWLkircA%2BSQ88r2Ybg9LRPcZb3Hf9qZFtgadSF4Ky2PI5G39%2FuSs49J%2BKwDiKyL%2FRCWnjf%2BkG6wq3EbATIFKArlDxY%2BqKVJf3cFUrbkXx4gW%2FoYCfjj0jdjxqbRBSPffQGnWGp7I%2F%2BODrEcBQVJMtWc22O40HseTfYJIatghhM4PtqrV%2FxBNBRwEfTqsyrNI2Wdr5FHXhlBCWagctMC5e2FZ76x3iKKMf6swKAIwSacls0PWF5zFds4IVzXjTwM0xA2LRoDDswFN%2FTKZTZaV27LwwtSp3ecXPeAWDJy9uDlVWTBnD6x6t5dKYWRt4KiVZfdd8IMZXCHzJ5SY558LpmJpe2SFGXsgy1cSfxzQeObZ8e60KFIYZx5CjvcivvpG6ljKKZ6dGwHdEbWb8HthAEmMk0a35deXPvoOLKVKHji8RSF1n2SSiCJ1PG%2BwhaD32gEYLaJaTGkeLhjEDP9BKirdNv1dDoRpgDqAaiE4Li05%2F%2BM3DGa23r4evHCaCI7kjyOvg7MRIw1nBzL5nJWs9KwE8mnr7wHWPzmyXoH8Rx27QLtXKEPQowZXrSI558OR3XwwsSSRtLLfzhyj9E1ABROe6OUri8mUdBtT485pFg%2BBi%2BWUpGNzleCCRbHuTjKPM5CMKrk08AGOqUBRnQHt7btiAsl3zEFp0ExkclEKWWUmUvIY%2F3RlNi8gRfsZU6d0zD6VIH0Rx8r%2BJ489jhPnkrLtvRSj%2FerBp3QZ8E4craR7oYB7oBj4tvq7fwe4pN7lIhrK6kuVeHctdW4ZcKAN6cdiuCTbleldNZedoYRaVC58xffikeTbBNlyxcEuejmdxDC8MaQprVZcqHFOpZ%2BVKmRn9kfHy3js4NS%2ByXSbyJ%2F&X-Amz-Signature=23a9a9af3f67cea00aef4cece49b498c90d5a8e8ccf325722562b5fd9b4c23c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSRGEJ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDt2KGTznyFzpB99P7%2Bl3UW58KAHQJbm6fCygtzbIgUsAIgINj9IJo0VAnRlJoxL5WnnEbPZrZPgNAJkj5yQWX%2FIB0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4BbEe3HivTbWLkircA%2BSQ88r2Ybg9LRPcZb3Hf9qZFtgadSF4Ky2PI5G39%2FuSs49J%2BKwDiKyL%2FRCWnjf%2BkG6wq3EbATIFKArlDxY%2BqKVJf3cFUrbkXx4gW%2FoYCfjj0jdjxqbRBSPffQGnWGp7I%2F%2BODrEcBQVJMtWc22O40HseTfYJIatghhM4PtqrV%2FxBNBRwEfTqsyrNI2Wdr5FHXhlBCWagctMC5e2FZ76x3iKKMf6swKAIwSacls0PWF5zFds4IVzXjTwM0xA2LRoDDswFN%2FTKZTZaV27LwwtSp3ecXPeAWDJy9uDlVWTBnD6x6t5dKYWRt4KiVZfdd8IMZXCHzJ5SY558LpmJpe2SFGXsgy1cSfxzQeObZ8e60KFIYZx5CjvcivvpG6ljKKZ6dGwHdEbWb8HthAEmMk0a35deXPvoOLKVKHji8RSF1n2SSiCJ1PG%2BwhaD32gEYLaJaTGkeLhjEDP9BKirdNv1dDoRpgDqAaiE4Li05%2F%2BM3DGa23r4evHCaCI7kjyOvg7MRIw1nBzL5nJWs9KwE8mnr7wHWPzmyXoH8Rx27QLtXKEPQowZXrSI558OR3XwwsSSRtLLfzhyj9E1ABROe6OUri8mUdBtT485pFg%2BBi%2BWUpGNzleCCRbHuTjKPM5CMKrk08AGOqUBRnQHt7btiAsl3zEFp0ExkclEKWWUmUvIY%2F3RlNi8gRfsZU6d0zD6VIH0Rx8r%2BJ489jhPnkrLtvRSj%2FerBp3QZ8E4craR7oYB7oBj4tvq7fwe4pN7lIhrK6kuVeHctdW4ZcKAN6cdiuCTbleldNZedoYRaVC58xffikeTbBNlyxcEuejmdxDC8MaQprVZcqHFOpZ%2BVKmRn9kfHy3js4NS%2ByXSbyJ%2F&X-Amz-Signature=233bb25bb831ae648ab9b138dd3a28f398c92906a75aa66a89b853fa4147389d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
