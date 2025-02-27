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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QY3BUOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDSKZhPJ4GpTO6PSc7ohRbl6%2Bg9nVwVIGOxZPCt4uLvwQIhAIftd%2Bjxi7FmRnVl6gPhYCYZiA%2B1uJ%2FXUYDcs4beWfY6Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyC2lqSwPXxwbBul1Iq3AOm51zpn2ajhR5RWwozT8Gmgo5jaz0YkmRU%2Bs4%2B9dWr7e8OCFU3pRVxdpJynaDdcXhGtylLeOhwZRoGCzLrRRCGIrfTEIWXppYp5SYLm4y4VqGQYJiw4pXyDUFnyzXcRDkihoZOqWptKqsVbZIEyE385hFXyVwz46gAchw4w4%2FlR8VH%2FTQNn3I5VuMBMcsAoUepZq9yBSX3O%2BYLDY34M2651HZMwQfOuIlGkI5gRUN1Ot%2BM3lHPJDuc7Dv4pP8o4R%2BQaZMeM469OgBBHjeOXWCszAZpAAnURkzTlbZkGhNoWe%2B9M%2ByY0G4VAGBPQArl5Aeurk9NI8YMs2fRIm0QeCpORWB3Y3VKCJmEk%2BlGQJXqIP9hqeha7WAVoD%2BtuaIEaX%2FwQu%2F0j%2FtTPpuxdE%2BWNqcMv87B1S20m1HI7i%2BN4U3gDucJxUmRvkkXurje%2BerpCrLxhpUIfoojR6ZhelBt9evKP1l%2BqZRa182NdLMELaeyy51FgAcmSOXgL%2BY0Q80cicibGU6MmecD6XE%2FDgaWQgDpBgKMAuIcn%2F3bj%2Fu5JCnz8xGb3Ip8tJPuDcDoXA5Bq8VqLbiKGuLUToYjI5CDzSzbz%2Fa3upcAoHa8DPSBZQkoMIWYGA0yGhHHuVaJFzC6tIK%2BBjqkAdQ0K2sWIauSumkf5ardslJF1TkYmVedar0LQEy%2FzGZnOlh9JkZ1aoT6dCgqB7DlHkL4%2Frc5X5Siw47a42nIGDTT3yT3lNfEN9bOGwCHy9uLw77WkAnUfnH0C59%2BpJ7m4B73CpkJwQJc8MJwWsYGpI%2BpVggxX32tu%2BdQaXdLw2i9C5K64u3dRp3g23%2FPhWpN91Yd1JtHcVkdCHlp09Iwf8N0YkbL&X-Amz-Signature=ca50e025f57af31c40eb49848e73230ad265ee722477e7dd5f04fc18ac245738&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QY3BUOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDSKZhPJ4GpTO6PSc7ohRbl6%2Bg9nVwVIGOxZPCt4uLvwQIhAIftd%2Bjxi7FmRnVl6gPhYCYZiA%2B1uJ%2FXUYDcs4beWfY6Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyC2lqSwPXxwbBul1Iq3AOm51zpn2ajhR5RWwozT8Gmgo5jaz0YkmRU%2Bs4%2B9dWr7e8OCFU3pRVxdpJynaDdcXhGtylLeOhwZRoGCzLrRRCGIrfTEIWXppYp5SYLm4y4VqGQYJiw4pXyDUFnyzXcRDkihoZOqWptKqsVbZIEyE385hFXyVwz46gAchw4w4%2FlR8VH%2FTQNn3I5VuMBMcsAoUepZq9yBSX3O%2BYLDY34M2651HZMwQfOuIlGkI5gRUN1Ot%2BM3lHPJDuc7Dv4pP8o4R%2BQaZMeM469OgBBHjeOXWCszAZpAAnURkzTlbZkGhNoWe%2B9M%2ByY0G4VAGBPQArl5Aeurk9NI8YMs2fRIm0QeCpORWB3Y3VKCJmEk%2BlGQJXqIP9hqeha7WAVoD%2BtuaIEaX%2FwQu%2F0j%2FtTPpuxdE%2BWNqcMv87B1S20m1HI7i%2BN4U3gDucJxUmRvkkXurje%2BerpCrLxhpUIfoojR6ZhelBt9evKP1l%2BqZRa182NdLMELaeyy51FgAcmSOXgL%2BY0Q80cicibGU6MmecD6XE%2FDgaWQgDpBgKMAuIcn%2F3bj%2Fu5JCnz8xGb3Ip8tJPuDcDoXA5Bq8VqLbiKGuLUToYjI5CDzSzbz%2Fa3upcAoHa8DPSBZQkoMIWYGA0yGhHHuVaJFzC6tIK%2BBjqkAdQ0K2sWIauSumkf5ardslJF1TkYmVedar0LQEy%2FzGZnOlh9JkZ1aoT6dCgqB7DlHkL4%2Frc5X5Siw47a42nIGDTT3yT3lNfEN9bOGwCHy9uLw77WkAnUfnH0C59%2BpJ7m4B73CpkJwQJc8MJwWsYGpI%2BpVggxX32tu%2BdQaXdLw2i9C5K64u3dRp3g23%2FPhWpN91Yd1JtHcVkdCHlp09Iwf8N0YkbL&X-Amz-Signature=96fd686846e64aa120597ee0ab5d0763ebe7bbcf85c428820b7fd9b4fa38e972&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QY3BUOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDSKZhPJ4GpTO6PSc7ohRbl6%2Bg9nVwVIGOxZPCt4uLvwQIhAIftd%2Bjxi7FmRnVl6gPhYCYZiA%2B1uJ%2FXUYDcs4beWfY6Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyC2lqSwPXxwbBul1Iq3AOm51zpn2ajhR5RWwozT8Gmgo5jaz0YkmRU%2Bs4%2B9dWr7e8OCFU3pRVxdpJynaDdcXhGtylLeOhwZRoGCzLrRRCGIrfTEIWXppYp5SYLm4y4VqGQYJiw4pXyDUFnyzXcRDkihoZOqWptKqsVbZIEyE385hFXyVwz46gAchw4w4%2FlR8VH%2FTQNn3I5VuMBMcsAoUepZq9yBSX3O%2BYLDY34M2651HZMwQfOuIlGkI5gRUN1Ot%2BM3lHPJDuc7Dv4pP8o4R%2BQaZMeM469OgBBHjeOXWCszAZpAAnURkzTlbZkGhNoWe%2B9M%2ByY0G4VAGBPQArl5Aeurk9NI8YMs2fRIm0QeCpORWB3Y3VKCJmEk%2BlGQJXqIP9hqeha7WAVoD%2BtuaIEaX%2FwQu%2F0j%2FtTPpuxdE%2BWNqcMv87B1S20m1HI7i%2BN4U3gDucJxUmRvkkXurje%2BerpCrLxhpUIfoojR6ZhelBt9evKP1l%2BqZRa182NdLMELaeyy51FgAcmSOXgL%2BY0Q80cicibGU6MmecD6XE%2FDgaWQgDpBgKMAuIcn%2F3bj%2Fu5JCnz8xGb3Ip8tJPuDcDoXA5Bq8VqLbiKGuLUToYjI5CDzSzbz%2Fa3upcAoHa8DPSBZQkoMIWYGA0yGhHHuVaJFzC6tIK%2BBjqkAdQ0K2sWIauSumkf5ardslJF1TkYmVedar0LQEy%2FzGZnOlh9JkZ1aoT6dCgqB7DlHkL4%2Frc5X5Siw47a42nIGDTT3yT3lNfEN9bOGwCHy9uLw77WkAnUfnH0C59%2BpJ7m4B73CpkJwQJc8MJwWsYGpI%2BpVggxX32tu%2BdQaXdLw2i9C5K64u3dRp3g23%2FPhWpN91Yd1JtHcVkdCHlp09Iwf8N0YkbL&X-Amz-Signature=7399ae2abc7bfa915e5ceea9007b20cae7cb11af40898655d5fbb63db95b6eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QY3BUOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDSKZhPJ4GpTO6PSc7ohRbl6%2Bg9nVwVIGOxZPCt4uLvwQIhAIftd%2Bjxi7FmRnVl6gPhYCYZiA%2B1uJ%2FXUYDcs4beWfY6Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyC2lqSwPXxwbBul1Iq3AOm51zpn2ajhR5RWwozT8Gmgo5jaz0YkmRU%2Bs4%2B9dWr7e8OCFU3pRVxdpJynaDdcXhGtylLeOhwZRoGCzLrRRCGIrfTEIWXppYp5SYLm4y4VqGQYJiw4pXyDUFnyzXcRDkihoZOqWptKqsVbZIEyE385hFXyVwz46gAchw4w4%2FlR8VH%2FTQNn3I5VuMBMcsAoUepZq9yBSX3O%2BYLDY34M2651HZMwQfOuIlGkI5gRUN1Ot%2BM3lHPJDuc7Dv4pP8o4R%2BQaZMeM469OgBBHjeOXWCszAZpAAnURkzTlbZkGhNoWe%2B9M%2ByY0G4VAGBPQArl5Aeurk9NI8YMs2fRIm0QeCpORWB3Y3VKCJmEk%2BlGQJXqIP9hqeha7WAVoD%2BtuaIEaX%2FwQu%2F0j%2FtTPpuxdE%2BWNqcMv87B1S20m1HI7i%2BN4U3gDucJxUmRvkkXurje%2BerpCrLxhpUIfoojR6ZhelBt9evKP1l%2BqZRa182NdLMELaeyy51FgAcmSOXgL%2BY0Q80cicibGU6MmecD6XE%2FDgaWQgDpBgKMAuIcn%2F3bj%2Fu5JCnz8xGb3Ip8tJPuDcDoXA5Bq8VqLbiKGuLUToYjI5CDzSzbz%2Fa3upcAoHa8DPSBZQkoMIWYGA0yGhHHuVaJFzC6tIK%2BBjqkAdQ0K2sWIauSumkf5ardslJF1TkYmVedar0LQEy%2FzGZnOlh9JkZ1aoT6dCgqB7DlHkL4%2Frc5X5Siw47a42nIGDTT3yT3lNfEN9bOGwCHy9uLw77WkAnUfnH0C59%2BpJ7m4B73CpkJwQJc8MJwWsYGpI%2BpVggxX32tu%2BdQaXdLw2i9C5K64u3dRp3g23%2FPhWpN91Yd1JtHcVkdCHlp09Iwf8N0YkbL&X-Amz-Signature=1bc31f9224d6c42fcef5480d795ac5fdc1138f051ecde6467a6054ba0903f036&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QY3BUOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDSKZhPJ4GpTO6PSc7ohRbl6%2Bg9nVwVIGOxZPCt4uLvwQIhAIftd%2Bjxi7FmRnVl6gPhYCYZiA%2B1uJ%2FXUYDcs4beWfY6Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyC2lqSwPXxwbBul1Iq3AOm51zpn2ajhR5RWwozT8Gmgo5jaz0YkmRU%2Bs4%2B9dWr7e8OCFU3pRVxdpJynaDdcXhGtylLeOhwZRoGCzLrRRCGIrfTEIWXppYp5SYLm4y4VqGQYJiw4pXyDUFnyzXcRDkihoZOqWptKqsVbZIEyE385hFXyVwz46gAchw4w4%2FlR8VH%2FTQNn3I5VuMBMcsAoUepZq9yBSX3O%2BYLDY34M2651HZMwQfOuIlGkI5gRUN1Ot%2BM3lHPJDuc7Dv4pP8o4R%2BQaZMeM469OgBBHjeOXWCszAZpAAnURkzTlbZkGhNoWe%2B9M%2ByY0G4VAGBPQArl5Aeurk9NI8YMs2fRIm0QeCpORWB3Y3VKCJmEk%2BlGQJXqIP9hqeha7WAVoD%2BtuaIEaX%2FwQu%2F0j%2FtTPpuxdE%2BWNqcMv87B1S20m1HI7i%2BN4U3gDucJxUmRvkkXurje%2BerpCrLxhpUIfoojR6ZhelBt9evKP1l%2BqZRa182NdLMELaeyy51FgAcmSOXgL%2BY0Q80cicibGU6MmecD6XE%2FDgaWQgDpBgKMAuIcn%2F3bj%2Fu5JCnz8xGb3Ip8tJPuDcDoXA5Bq8VqLbiKGuLUToYjI5CDzSzbz%2Fa3upcAoHa8DPSBZQkoMIWYGA0yGhHHuVaJFzC6tIK%2BBjqkAdQ0K2sWIauSumkf5ardslJF1TkYmVedar0LQEy%2FzGZnOlh9JkZ1aoT6dCgqB7DlHkL4%2Frc5X5Siw47a42nIGDTT3yT3lNfEN9bOGwCHy9uLw77WkAnUfnH0C59%2BpJ7m4B73CpkJwQJc8MJwWsYGpI%2BpVggxX32tu%2BdQaXdLw2i9C5K64u3dRp3g23%2FPhWpN91Yd1JtHcVkdCHlp09Iwf8N0YkbL&X-Amz-Signature=a6e3650e4592215465243c6054399f6c3125ac6206f3081a7c59251616426740&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QY3BUOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDSKZhPJ4GpTO6PSc7ohRbl6%2Bg9nVwVIGOxZPCt4uLvwQIhAIftd%2Bjxi7FmRnVl6gPhYCYZiA%2B1uJ%2FXUYDcs4beWfY6Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyC2lqSwPXxwbBul1Iq3AOm51zpn2ajhR5RWwozT8Gmgo5jaz0YkmRU%2Bs4%2B9dWr7e8OCFU3pRVxdpJynaDdcXhGtylLeOhwZRoGCzLrRRCGIrfTEIWXppYp5SYLm4y4VqGQYJiw4pXyDUFnyzXcRDkihoZOqWptKqsVbZIEyE385hFXyVwz46gAchw4w4%2FlR8VH%2FTQNn3I5VuMBMcsAoUepZq9yBSX3O%2BYLDY34M2651HZMwQfOuIlGkI5gRUN1Ot%2BM3lHPJDuc7Dv4pP8o4R%2BQaZMeM469OgBBHjeOXWCszAZpAAnURkzTlbZkGhNoWe%2B9M%2ByY0G4VAGBPQArl5Aeurk9NI8YMs2fRIm0QeCpORWB3Y3VKCJmEk%2BlGQJXqIP9hqeha7WAVoD%2BtuaIEaX%2FwQu%2F0j%2FtTPpuxdE%2BWNqcMv87B1S20m1HI7i%2BN4U3gDucJxUmRvkkXurje%2BerpCrLxhpUIfoojR6ZhelBt9evKP1l%2BqZRa182NdLMELaeyy51FgAcmSOXgL%2BY0Q80cicibGU6MmecD6XE%2FDgaWQgDpBgKMAuIcn%2F3bj%2Fu5JCnz8xGb3Ip8tJPuDcDoXA5Bq8VqLbiKGuLUToYjI5CDzSzbz%2Fa3upcAoHa8DPSBZQkoMIWYGA0yGhHHuVaJFzC6tIK%2BBjqkAdQ0K2sWIauSumkf5ardslJF1TkYmVedar0LQEy%2FzGZnOlh9JkZ1aoT6dCgqB7DlHkL4%2Frc5X5Siw47a42nIGDTT3yT3lNfEN9bOGwCHy9uLw77WkAnUfnH0C59%2BpJ7m4B73CpkJwQJc8MJwWsYGpI%2BpVggxX32tu%2BdQaXdLw2i9C5K64u3dRp3g23%2FPhWpN91Yd1JtHcVkdCHlp09Iwf8N0YkbL&X-Amz-Signature=bdbe4ab41e4e5f12b3f095f8b15fb7e7015c7b9e73a2931ff1d02fc0c30878e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QY3BUOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDSKZhPJ4GpTO6PSc7ohRbl6%2Bg9nVwVIGOxZPCt4uLvwQIhAIftd%2Bjxi7FmRnVl6gPhYCYZiA%2B1uJ%2FXUYDcs4beWfY6Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyC2lqSwPXxwbBul1Iq3AOm51zpn2ajhR5RWwozT8Gmgo5jaz0YkmRU%2Bs4%2B9dWr7e8OCFU3pRVxdpJynaDdcXhGtylLeOhwZRoGCzLrRRCGIrfTEIWXppYp5SYLm4y4VqGQYJiw4pXyDUFnyzXcRDkihoZOqWptKqsVbZIEyE385hFXyVwz46gAchw4w4%2FlR8VH%2FTQNn3I5VuMBMcsAoUepZq9yBSX3O%2BYLDY34M2651HZMwQfOuIlGkI5gRUN1Ot%2BM3lHPJDuc7Dv4pP8o4R%2BQaZMeM469OgBBHjeOXWCszAZpAAnURkzTlbZkGhNoWe%2B9M%2ByY0G4VAGBPQArl5Aeurk9NI8YMs2fRIm0QeCpORWB3Y3VKCJmEk%2BlGQJXqIP9hqeha7WAVoD%2BtuaIEaX%2FwQu%2F0j%2FtTPpuxdE%2BWNqcMv87B1S20m1HI7i%2BN4U3gDucJxUmRvkkXurje%2BerpCrLxhpUIfoojR6ZhelBt9evKP1l%2BqZRa182NdLMELaeyy51FgAcmSOXgL%2BY0Q80cicibGU6MmecD6XE%2FDgaWQgDpBgKMAuIcn%2F3bj%2Fu5JCnz8xGb3Ip8tJPuDcDoXA5Bq8VqLbiKGuLUToYjI5CDzSzbz%2Fa3upcAoHa8DPSBZQkoMIWYGA0yGhHHuVaJFzC6tIK%2BBjqkAdQ0K2sWIauSumkf5ardslJF1TkYmVedar0LQEy%2FzGZnOlh9JkZ1aoT6dCgqB7DlHkL4%2Frc5X5Siw47a42nIGDTT3yT3lNfEN9bOGwCHy9uLw77WkAnUfnH0C59%2BpJ7m4B73CpkJwQJc8MJwWsYGpI%2BpVggxX32tu%2BdQaXdLw2i9C5K64u3dRp3g23%2FPhWpN91Yd1JtHcVkdCHlp09Iwf8N0YkbL&X-Amz-Signature=492376830bce112f84553838de7da40bfebe0476f5237a0757c167df6ca2c0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QY3BUOV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDSKZhPJ4GpTO6PSc7ohRbl6%2Bg9nVwVIGOxZPCt4uLvwQIhAIftd%2Bjxi7FmRnVl6gPhYCYZiA%2B1uJ%2FXUYDcs4beWfY6Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyC2lqSwPXxwbBul1Iq3AOm51zpn2ajhR5RWwozT8Gmgo5jaz0YkmRU%2Bs4%2B9dWr7e8OCFU3pRVxdpJynaDdcXhGtylLeOhwZRoGCzLrRRCGIrfTEIWXppYp5SYLm4y4VqGQYJiw4pXyDUFnyzXcRDkihoZOqWptKqsVbZIEyE385hFXyVwz46gAchw4w4%2FlR8VH%2FTQNn3I5VuMBMcsAoUepZq9yBSX3O%2BYLDY34M2651HZMwQfOuIlGkI5gRUN1Ot%2BM3lHPJDuc7Dv4pP8o4R%2BQaZMeM469OgBBHjeOXWCszAZpAAnURkzTlbZkGhNoWe%2B9M%2ByY0G4VAGBPQArl5Aeurk9NI8YMs2fRIm0QeCpORWB3Y3VKCJmEk%2BlGQJXqIP9hqeha7WAVoD%2BtuaIEaX%2FwQu%2F0j%2FtTPpuxdE%2BWNqcMv87B1S20m1HI7i%2BN4U3gDucJxUmRvkkXurje%2BerpCrLxhpUIfoojR6ZhelBt9evKP1l%2BqZRa182NdLMELaeyy51FgAcmSOXgL%2BY0Q80cicibGU6MmecD6XE%2FDgaWQgDpBgKMAuIcn%2F3bj%2Fu5JCnz8xGb3Ip8tJPuDcDoXA5Bq8VqLbiKGuLUToYjI5CDzSzbz%2Fa3upcAoHa8DPSBZQkoMIWYGA0yGhHHuVaJFzC6tIK%2BBjqkAdQ0K2sWIauSumkf5ardslJF1TkYmVedar0LQEy%2FzGZnOlh9JkZ1aoT6dCgqB7DlHkL4%2Frc5X5Siw47a42nIGDTT3yT3lNfEN9bOGwCHy9uLw77WkAnUfnH0C59%2BpJ7m4B73CpkJwQJc8MJwWsYGpI%2BpVggxX32tu%2BdQaXdLw2i9C5K64u3dRp3g23%2FPhWpN91Yd1JtHcVkdCHlp09Iwf8N0YkbL&X-Amz-Signature=8a12d5b4015536638cd3747cd3e8b4ac68c605b11f605e8ccd166a6901de880a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
