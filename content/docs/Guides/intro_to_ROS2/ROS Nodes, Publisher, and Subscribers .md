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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDD4ZS3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlH%2Bt2XOsOUMiulodbieIgoUqnUskyxwF%2BMc%2FOzGPxvwIgSGmf9ZEyf3K25l%2BHsrE1Meau1zSNc1lRn%2Bwa5Q5cQJ8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPhMrwn8YFa6srNLoircA4M2uVfOORPV5mLbWOpAFyCq1l8WWrU8XvWzKKumgFOw%2BRuvOfq9aCd0IKJ4zXyvDfNtMqc5rOiprY2p5Lw5NC%2F7EXtK1%2Frh%2FjnE7kB8l3cB92umtq01RRFLY5yiZF73wNk7yUIKZQsw9qhKG9%2F4sCiphCKG1sJla8LYCeeuH4bKrWALfK5xJBs47qjjFozHixcc%2B3E9emDAJMj3r7oBeJaS6dlhD5piNCgZ4jkaG%2Fq0UudqFzlgNQMVN%2B5hijN0CR6%2B6o8eC%2F9qNB1yJ203Taeze1d%2Bm0R383s2SoiTjUYnCivNMtbzOgzLkNIIMWjap6m4WQvL9ty9PhXeoSe1pIzC5Kc8SNkGS8fGdRFdLJOUG4%2FN7SAbCFWzg4qWiMMD6imZYLH7cl8si2YFHPEInftxY%2BuVwXEgvQvH%2BUhT3tjFcyA2Im8RLWqfNFonSA8uZdfK1LFQ6oIm9lJ%2BUVLfHFLZzWB%2BQGDvCMH75buX0M87WFNnM6fp1SyyYzmPUY7HPAWiyiHsIbp3sApvUvb6aeiR9Fn3AxxJOjqf53C9fobZJytqyxRrs0Qu%2Faxcrv6MKNVJMBvcQyTihb3k7hy1YP1%2BHcaDPz1DEh1BigOYcZBK4j%2BGoclUERfNT%2FDwMOSQnsEGOqUB2sENfX9kMmLXzGpfLFg2PjYdtJhhWUY9GXd9wPcJrsa2B9FlCm6XgaKUOR9aW7HyU49G2V%2B4hh2nj3xq4ssHajzea47uOYycd3vu9mFpAvNscllrkhNvUg60z64XseLlchCdgrE18pbRJPVasC2eJdr2UnGuvsVXmOaZAbDbtcUfk5oBKNw6ai31UVvsdPsyVawBeTvq7mL4%2FDKH13yDggPk64FG&X-Amz-Signature=6510f790f8c69e714e9dffc901aa15ae8a3a608ecc95a61483b0a721b3f33c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDD4ZS3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlH%2Bt2XOsOUMiulodbieIgoUqnUskyxwF%2BMc%2FOzGPxvwIgSGmf9ZEyf3K25l%2BHsrE1Meau1zSNc1lRn%2Bwa5Q5cQJ8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPhMrwn8YFa6srNLoircA4M2uVfOORPV5mLbWOpAFyCq1l8WWrU8XvWzKKumgFOw%2BRuvOfq9aCd0IKJ4zXyvDfNtMqc5rOiprY2p5Lw5NC%2F7EXtK1%2Frh%2FjnE7kB8l3cB92umtq01RRFLY5yiZF73wNk7yUIKZQsw9qhKG9%2F4sCiphCKG1sJla8LYCeeuH4bKrWALfK5xJBs47qjjFozHixcc%2B3E9emDAJMj3r7oBeJaS6dlhD5piNCgZ4jkaG%2Fq0UudqFzlgNQMVN%2B5hijN0CR6%2B6o8eC%2F9qNB1yJ203Taeze1d%2Bm0R383s2SoiTjUYnCivNMtbzOgzLkNIIMWjap6m4WQvL9ty9PhXeoSe1pIzC5Kc8SNkGS8fGdRFdLJOUG4%2FN7SAbCFWzg4qWiMMD6imZYLH7cl8si2YFHPEInftxY%2BuVwXEgvQvH%2BUhT3tjFcyA2Im8RLWqfNFonSA8uZdfK1LFQ6oIm9lJ%2BUVLfHFLZzWB%2BQGDvCMH75buX0M87WFNnM6fp1SyyYzmPUY7HPAWiyiHsIbp3sApvUvb6aeiR9Fn3AxxJOjqf53C9fobZJytqyxRrs0Qu%2Faxcrv6MKNVJMBvcQyTihb3k7hy1YP1%2BHcaDPz1DEh1BigOYcZBK4j%2BGoclUERfNT%2FDwMOSQnsEGOqUB2sENfX9kMmLXzGpfLFg2PjYdtJhhWUY9GXd9wPcJrsa2B9FlCm6XgaKUOR9aW7HyU49G2V%2B4hh2nj3xq4ssHajzea47uOYycd3vu9mFpAvNscllrkhNvUg60z64XseLlchCdgrE18pbRJPVasC2eJdr2UnGuvsVXmOaZAbDbtcUfk5oBKNw6ai31UVvsdPsyVawBeTvq7mL4%2FDKH13yDggPk64FG&X-Amz-Signature=d093dd9508193eb001b412c23ce284c427d3f0b5368a9c910df262f44274811e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDD4ZS3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlH%2Bt2XOsOUMiulodbieIgoUqnUskyxwF%2BMc%2FOzGPxvwIgSGmf9ZEyf3K25l%2BHsrE1Meau1zSNc1lRn%2Bwa5Q5cQJ8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPhMrwn8YFa6srNLoircA4M2uVfOORPV5mLbWOpAFyCq1l8WWrU8XvWzKKumgFOw%2BRuvOfq9aCd0IKJ4zXyvDfNtMqc5rOiprY2p5Lw5NC%2F7EXtK1%2Frh%2FjnE7kB8l3cB92umtq01RRFLY5yiZF73wNk7yUIKZQsw9qhKG9%2F4sCiphCKG1sJla8LYCeeuH4bKrWALfK5xJBs47qjjFozHixcc%2B3E9emDAJMj3r7oBeJaS6dlhD5piNCgZ4jkaG%2Fq0UudqFzlgNQMVN%2B5hijN0CR6%2B6o8eC%2F9qNB1yJ203Taeze1d%2Bm0R383s2SoiTjUYnCivNMtbzOgzLkNIIMWjap6m4WQvL9ty9PhXeoSe1pIzC5Kc8SNkGS8fGdRFdLJOUG4%2FN7SAbCFWzg4qWiMMD6imZYLH7cl8si2YFHPEInftxY%2BuVwXEgvQvH%2BUhT3tjFcyA2Im8RLWqfNFonSA8uZdfK1LFQ6oIm9lJ%2BUVLfHFLZzWB%2BQGDvCMH75buX0M87WFNnM6fp1SyyYzmPUY7HPAWiyiHsIbp3sApvUvb6aeiR9Fn3AxxJOjqf53C9fobZJytqyxRrs0Qu%2Faxcrv6MKNVJMBvcQyTihb3k7hy1YP1%2BHcaDPz1DEh1BigOYcZBK4j%2BGoclUERfNT%2FDwMOSQnsEGOqUB2sENfX9kMmLXzGpfLFg2PjYdtJhhWUY9GXd9wPcJrsa2B9FlCm6XgaKUOR9aW7HyU49G2V%2B4hh2nj3xq4ssHajzea47uOYycd3vu9mFpAvNscllrkhNvUg60z64XseLlchCdgrE18pbRJPVasC2eJdr2UnGuvsVXmOaZAbDbtcUfk5oBKNw6ai31UVvsdPsyVawBeTvq7mL4%2FDKH13yDggPk64FG&X-Amz-Signature=07ed69ce21cde8ea9ea235ba253b7f61a0374e404039c7ea2b5ff7aa6f661ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDD4ZS3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlH%2Bt2XOsOUMiulodbieIgoUqnUskyxwF%2BMc%2FOzGPxvwIgSGmf9ZEyf3K25l%2BHsrE1Meau1zSNc1lRn%2Bwa5Q5cQJ8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPhMrwn8YFa6srNLoircA4M2uVfOORPV5mLbWOpAFyCq1l8WWrU8XvWzKKumgFOw%2BRuvOfq9aCd0IKJ4zXyvDfNtMqc5rOiprY2p5Lw5NC%2F7EXtK1%2Frh%2FjnE7kB8l3cB92umtq01RRFLY5yiZF73wNk7yUIKZQsw9qhKG9%2F4sCiphCKG1sJla8LYCeeuH4bKrWALfK5xJBs47qjjFozHixcc%2B3E9emDAJMj3r7oBeJaS6dlhD5piNCgZ4jkaG%2Fq0UudqFzlgNQMVN%2B5hijN0CR6%2B6o8eC%2F9qNB1yJ203Taeze1d%2Bm0R383s2SoiTjUYnCivNMtbzOgzLkNIIMWjap6m4WQvL9ty9PhXeoSe1pIzC5Kc8SNkGS8fGdRFdLJOUG4%2FN7SAbCFWzg4qWiMMD6imZYLH7cl8si2YFHPEInftxY%2BuVwXEgvQvH%2BUhT3tjFcyA2Im8RLWqfNFonSA8uZdfK1LFQ6oIm9lJ%2BUVLfHFLZzWB%2BQGDvCMH75buX0M87WFNnM6fp1SyyYzmPUY7HPAWiyiHsIbp3sApvUvb6aeiR9Fn3AxxJOjqf53C9fobZJytqyxRrs0Qu%2Faxcrv6MKNVJMBvcQyTihb3k7hy1YP1%2BHcaDPz1DEh1BigOYcZBK4j%2BGoclUERfNT%2FDwMOSQnsEGOqUB2sENfX9kMmLXzGpfLFg2PjYdtJhhWUY9GXd9wPcJrsa2B9FlCm6XgaKUOR9aW7HyU49G2V%2B4hh2nj3xq4ssHajzea47uOYycd3vu9mFpAvNscllrkhNvUg60z64XseLlchCdgrE18pbRJPVasC2eJdr2UnGuvsVXmOaZAbDbtcUfk5oBKNw6ai31UVvsdPsyVawBeTvq7mL4%2FDKH13yDggPk64FG&X-Amz-Signature=24f9f175bf64c9b6c8242889de7af8ea9d717120bc365ea0308ec57254189d52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDD4ZS3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlH%2Bt2XOsOUMiulodbieIgoUqnUskyxwF%2BMc%2FOzGPxvwIgSGmf9ZEyf3K25l%2BHsrE1Meau1zSNc1lRn%2Bwa5Q5cQJ8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPhMrwn8YFa6srNLoircA4M2uVfOORPV5mLbWOpAFyCq1l8WWrU8XvWzKKumgFOw%2BRuvOfq9aCd0IKJ4zXyvDfNtMqc5rOiprY2p5Lw5NC%2F7EXtK1%2Frh%2FjnE7kB8l3cB92umtq01RRFLY5yiZF73wNk7yUIKZQsw9qhKG9%2F4sCiphCKG1sJla8LYCeeuH4bKrWALfK5xJBs47qjjFozHixcc%2B3E9emDAJMj3r7oBeJaS6dlhD5piNCgZ4jkaG%2Fq0UudqFzlgNQMVN%2B5hijN0CR6%2B6o8eC%2F9qNB1yJ203Taeze1d%2Bm0R383s2SoiTjUYnCivNMtbzOgzLkNIIMWjap6m4WQvL9ty9PhXeoSe1pIzC5Kc8SNkGS8fGdRFdLJOUG4%2FN7SAbCFWzg4qWiMMD6imZYLH7cl8si2YFHPEInftxY%2BuVwXEgvQvH%2BUhT3tjFcyA2Im8RLWqfNFonSA8uZdfK1LFQ6oIm9lJ%2BUVLfHFLZzWB%2BQGDvCMH75buX0M87WFNnM6fp1SyyYzmPUY7HPAWiyiHsIbp3sApvUvb6aeiR9Fn3AxxJOjqf53C9fobZJytqyxRrs0Qu%2Faxcrv6MKNVJMBvcQyTihb3k7hy1YP1%2BHcaDPz1DEh1BigOYcZBK4j%2BGoclUERfNT%2FDwMOSQnsEGOqUB2sENfX9kMmLXzGpfLFg2PjYdtJhhWUY9GXd9wPcJrsa2B9FlCm6XgaKUOR9aW7HyU49G2V%2B4hh2nj3xq4ssHajzea47uOYycd3vu9mFpAvNscllrkhNvUg60z64XseLlchCdgrE18pbRJPVasC2eJdr2UnGuvsVXmOaZAbDbtcUfk5oBKNw6ai31UVvsdPsyVawBeTvq7mL4%2FDKH13yDggPk64FG&X-Amz-Signature=80ce30ee10af19211d3c63853cb126c04fa57f5254ebb0d4d0eca3938f71f7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDD4ZS3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlH%2Bt2XOsOUMiulodbieIgoUqnUskyxwF%2BMc%2FOzGPxvwIgSGmf9ZEyf3K25l%2BHsrE1Meau1zSNc1lRn%2Bwa5Q5cQJ8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPhMrwn8YFa6srNLoircA4M2uVfOORPV5mLbWOpAFyCq1l8WWrU8XvWzKKumgFOw%2BRuvOfq9aCd0IKJ4zXyvDfNtMqc5rOiprY2p5Lw5NC%2F7EXtK1%2Frh%2FjnE7kB8l3cB92umtq01RRFLY5yiZF73wNk7yUIKZQsw9qhKG9%2F4sCiphCKG1sJla8LYCeeuH4bKrWALfK5xJBs47qjjFozHixcc%2B3E9emDAJMj3r7oBeJaS6dlhD5piNCgZ4jkaG%2Fq0UudqFzlgNQMVN%2B5hijN0CR6%2B6o8eC%2F9qNB1yJ203Taeze1d%2Bm0R383s2SoiTjUYnCivNMtbzOgzLkNIIMWjap6m4WQvL9ty9PhXeoSe1pIzC5Kc8SNkGS8fGdRFdLJOUG4%2FN7SAbCFWzg4qWiMMD6imZYLH7cl8si2YFHPEInftxY%2BuVwXEgvQvH%2BUhT3tjFcyA2Im8RLWqfNFonSA8uZdfK1LFQ6oIm9lJ%2BUVLfHFLZzWB%2BQGDvCMH75buX0M87WFNnM6fp1SyyYzmPUY7HPAWiyiHsIbp3sApvUvb6aeiR9Fn3AxxJOjqf53C9fobZJytqyxRrs0Qu%2Faxcrv6MKNVJMBvcQyTihb3k7hy1YP1%2BHcaDPz1DEh1BigOYcZBK4j%2BGoclUERfNT%2FDwMOSQnsEGOqUB2sENfX9kMmLXzGpfLFg2PjYdtJhhWUY9GXd9wPcJrsa2B9FlCm6XgaKUOR9aW7HyU49G2V%2B4hh2nj3xq4ssHajzea47uOYycd3vu9mFpAvNscllrkhNvUg60z64XseLlchCdgrE18pbRJPVasC2eJdr2UnGuvsVXmOaZAbDbtcUfk5oBKNw6ai31UVvsdPsyVawBeTvq7mL4%2FDKH13yDggPk64FG&X-Amz-Signature=b17f69e98a864fe9c5745a7a1e667f9972f9e90d3d8a9eaa14b645aa7c63d9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDD4ZS3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlH%2Bt2XOsOUMiulodbieIgoUqnUskyxwF%2BMc%2FOzGPxvwIgSGmf9ZEyf3K25l%2BHsrE1Meau1zSNc1lRn%2Bwa5Q5cQJ8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPhMrwn8YFa6srNLoircA4M2uVfOORPV5mLbWOpAFyCq1l8WWrU8XvWzKKumgFOw%2BRuvOfq9aCd0IKJ4zXyvDfNtMqc5rOiprY2p5Lw5NC%2F7EXtK1%2Frh%2FjnE7kB8l3cB92umtq01RRFLY5yiZF73wNk7yUIKZQsw9qhKG9%2F4sCiphCKG1sJla8LYCeeuH4bKrWALfK5xJBs47qjjFozHixcc%2B3E9emDAJMj3r7oBeJaS6dlhD5piNCgZ4jkaG%2Fq0UudqFzlgNQMVN%2B5hijN0CR6%2B6o8eC%2F9qNB1yJ203Taeze1d%2Bm0R383s2SoiTjUYnCivNMtbzOgzLkNIIMWjap6m4WQvL9ty9PhXeoSe1pIzC5Kc8SNkGS8fGdRFdLJOUG4%2FN7SAbCFWzg4qWiMMD6imZYLH7cl8si2YFHPEInftxY%2BuVwXEgvQvH%2BUhT3tjFcyA2Im8RLWqfNFonSA8uZdfK1LFQ6oIm9lJ%2BUVLfHFLZzWB%2BQGDvCMH75buX0M87WFNnM6fp1SyyYzmPUY7HPAWiyiHsIbp3sApvUvb6aeiR9Fn3AxxJOjqf53C9fobZJytqyxRrs0Qu%2Faxcrv6MKNVJMBvcQyTihb3k7hy1YP1%2BHcaDPz1DEh1BigOYcZBK4j%2BGoclUERfNT%2FDwMOSQnsEGOqUB2sENfX9kMmLXzGpfLFg2PjYdtJhhWUY9GXd9wPcJrsa2B9FlCm6XgaKUOR9aW7HyU49G2V%2B4hh2nj3xq4ssHajzea47uOYycd3vu9mFpAvNscllrkhNvUg60z64XseLlchCdgrE18pbRJPVasC2eJdr2UnGuvsVXmOaZAbDbtcUfk5oBKNw6ai31UVvsdPsyVawBeTvq7mL4%2FDKH13yDggPk64FG&X-Amz-Signature=cc95298ce6a19f75431b6e9231384bbcbf24ea9faf86f60eb0a83639f92f0d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDD4ZS3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlH%2Bt2XOsOUMiulodbieIgoUqnUskyxwF%2BMc%2FOzGPxvwIgSGmf9ZEyf3K25l%2BHsrE1Meau1zSNc1lRn%2Bwa5Q5cQJ8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPhMrwn8YFa6srNLoircA4M2uVfOORPV5mLbWOpAFyCq1l8WWrU8XvWzKKumgFOw%2BRuvOfq9aCd0IKJ4zXyvDfNtMqc5rOiprY2p5Lw5NC%2F7EXtK1%2Frh%2FjnE7kB8l3cB92umtq01RRFLY5yiZF73wNk7yUIKZQsw9qhKG9%2F4sCiphCKG1sJla8LYCeeuH4bKrWALfK5xJBs47qjjFozHixcc%2B3E9emDAJMj3r7oBeJaS6dlhD5piNCgZ4jkaG%2Fq0UudqFzlgNQMVN%2B5hijN0CR6%2B6o8eC%2F9qNB1yJ203Taeze1d%2Bm0R383s2SoiTjUYnCivNMtbzOgzLkNIIMWjap6m4WQvL9ty9PhXeoSe1pIzC5Kc8SNkGS8fGdRFdLJOUG4%2FN7SAbCFWzg4qWiMMD6imZYLH7cl8si2YFHPEInftxY%2BuVwXEgvQvH%2BUhT3tjFcyA2Im8RLWqfNFonSA8uZdfK1LFQ6oIm9lJ%2BUVLfHFLZzWB%2BQGDvCMH75buX0M87WFNnM6fp1SyyYzmPUY7HPAWiyiHsIbp3sApvUvb6aeiR9Fn3AxxJOjqf53C9fobZJytqyxRrs0Qu%2Faxcrv6MKNVJMBvcQyTihb3k7hy1YP1%2BHcaDPz1DEh1BigOYcZBK4j%2BGoclUERfNT%2FDwMOSQnsEGOqUB2sENfX9kMmLXzGpfLFg2PjYdtJhhWUY9GXd9wPcJrsa2B9FlCm6XgaKUOR9aW7HyU49G2V%2B4hh2nj3xq4ssHajzea47uOYycd3vu9mFpAvNscllrkhNvUg60z64XseLlchCdgrE18pbRJPVasC2eJdr2UnGuvsVXmOaZAbDbtcUfk5oBKNw6ai31UVvsdPsyVawBeTvq7mL4%2FDKH13yDggPk64FG&X-Amz-Signature=8c85185515841f0ed22c1c95879d1394c16f6d938c2c9cbfcf1398eef1705f58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
