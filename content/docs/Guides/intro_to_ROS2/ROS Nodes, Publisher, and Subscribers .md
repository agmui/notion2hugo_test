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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXXJOHA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD6Vy9N1D93k5xraF512pxVf0wAKyWkwpF7E1BP%2BRr4CQIgJZoaCimUdzTnuVcpBlPIFeuTQ0KBnH%2BmV%2FcOXfnLM2kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNwOcsImFTm6p93z%2BCrcA2eQtUDpcJQAeGzIRVJrCjMvcxI%2FG1%2B3pQ9JZ0BQGArAjG7rSBZqAcpy9HBEsF%2Fa25kAWjep4U8Tvcp5UjVaXE4OWkG3667dwSQGUpCNlJmT2xleMWzJNTYmnnAdeOz1emthvphTpqx6WJ9kvEHJGJGbyOxIAAZ4uQGV3AsK1cLEsODw3JxTyUrpHu5pzj9aUOwNd61PSF%2BaLIdKczfCAS4dA6XetSkzLlFBMQyUfi3le7kAS22D30x%2B3RKLU2B%2FvTwd3xo4yJs0fMgFErw3qApi0l4sqVaGhz4hhKK2YvFos5rLR1hfomJTgden4scDOJyl7wjWqEJK9f3KGre9f0c%2FNBga7sf4MmlHQo7l5r904ukd8qNUxu7h0Tef8zq8WGtwI4kDRDcnH3DWC3cNw6ybi1NnLu10YR4UVRwJUsrqoOQw0xbiUtsgQVRefjicb%2FMH9qP8FwofGgAjDjQKQUD2InDqwGiMFaxzdiXxM2bqlerE5HB1MChGrlSiEf%2Bkp5sRHEIJLuUtl%2FYiEVmqw%2BRarTz0%2BT79sdK3WbLn0yK0pMbYpbBe2qiSHFTkEozhazsmLusBgbqYg1L3gdPH1b20kMOMuLz37Qzv%2F31HH8%2FmMvFGDYpFNk4Qfs43MOqWsMMGOqUBXCL13pWUXhgXGGgyAasuTz9LA%2BKaaZDZSGcAgci4EdR776s3RZumfAU%2FSryvvwUGG8cj12SR0gVJJ30jpfTih5BwC5AgAoqtU9FlqNde7A10NCUQ%2Bc7QAbcv4SEpDeLYkIVSkcjwT%2BurQpaAn5dd6VvWTUuUlozjlaOiQFnD2k9rNfdoIaFLYuPN4qkMq65raNCHhHEHshk7AzR3N2e1HN6J3JVS&X-Amz-Signature=a9f5dfc52a29a96d4bae4f8d137303833d521cf7f850d37a5ac174e5fd792a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXXJOHA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD6Vy9N1D93k5xraF512pxVf0wAKyWkwpF7E1BP%2BRr4CQIgJZoaCimUdzTnuVcpBlPIFeuTQ0KBnH%2BmV%2FcOXfnLM2kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNwOcsImFTm6p93z%2BCrcA2eQtUDpcJQAeGzIRVJrCjMvcxI%2FG1%2B3pQ9JZ0BQGArAjG7rSBZqAcpy9HBEsF%2Fa25kAWjep4U8Tvcp5UjVaXE4OWkG3667dwSQGUpCNlJmT2xleMWzJNTYmnnAdeOz1emthvphTpqx6WJ9kvEHJGJGbyOxIAAZ4uQGV3AsK1cLEsODw3JxTyUrpHu5pzj9aUOwNd61PSF%2BaLIdKczfCAS4dA6XetSkzLlFBMQyUfi3le7kAS22D30x%2B3RKLU2B%2FvTwd3xo4yJs0fMgFErw3qApi0l4sqVaGhz4hhKK2YvFos5rLR1hfomJTgden4scDOJyl7wjWqEJK9f3KGre9f0c%2FNBga7sf4MmlHQo7l5r904ukd8qNUxu7h0Tef8zq8WGtwI4kDRDcnH3DWC3cNw6ybi1NnLu10YR4UVRwJUsrqoOQw0xbiUtsgQVRefjicb%2FMH9qP8FwofGgAjDjQKQUD2InDqwGiMFaxzdiXxM2bqlerE5HB1MChGrlSiEf%2Bkp5sRHEIJLuUtl%2FYiEVmqw%2BRarTz0%2BT79sdK3WbLn0yK0pMbYpbBe2qiSHFTkEozhazsmLusBgbqYg1L3gdPH1b20kMOMuLz37Qzv%2F31HH8%2FmMvFGDYpFNk4Qfs43MOqWsMMGOqUBXCL13pWUXhgXGGgyAasuTz9LA%2BKaaZDZSGcAgci4EdR776s3RZumfAU%2FSryvvwUGG8cj12SR0gVJJ30jpfTih5BwC5AgAoqtU9FlqNde7A10NCUQ%2Bc7QAbcv4SEpDeLYkIVSkcjwT%2BurQpaAn5dd6VvWTUuUlozjlaOiQFnD2k9rNfdoIaFLYuPN4qkMq65raNCHhHEHshk7AzR3N2e1HN6J3JVS&X-Amz-Signature=04281e154eeed5365f19e0b24b506716a864fcdc090b975c29370baa6d25182e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXXJOHA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD6Vy9N1D93k5xraF512pxVf0wAKyWkwpF7E1BP%2BRr4CQIgJZoaCimUdzTnuVcpBlPIFeuTQ0KBnH%2BmV%2FcOXfnLM2kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNwOcsImFTm6p93z%2BCrcA2eQtUDpcJQAeGzIRVJrCjMvcxI%2FG1%2B3pQ9JZ0BQGArAjG7rSBZqAcpy9HBEsF%2Fa25kAWjep4U8Tvcp5UjVaXE4OWkG3667dwSQGUpCNlJmT2xleMWzJNTYmnnAdeOz1emthvphTpqx6WJ9kvEHJGJGbyOxIAAZ4uQGV3AsK1cLEsODw3JxTyUrpHu5pzj9aUOwNd61PSF%2BaLIdKczfCAS4dA6XetSkzLlFBMQyUfi3le7kAS22D30x%2B3RKLU2B%2FvTwd3xo4yJs0fMgFErw3qApi0l4sqVaGhz4hhKK2YvFos5rLR1hfomJTgden4scDOJyl7wjWqEJK9f3KGre9f0c%2FNBga7sf4MmlHQo7l5r904ukd8qNUxu7h0Tef8zq8WGtwI4kDRDcnH3DWC3cNw6ybi1NnLu10YR4UVRwJUsrqoOQw0xbiUtsgQVRefjicb%2FMH9qP8FwofGgAjDjQKQUD2InDqwGiMFaxzdiXxM2bqlerE5HB1MChGrlSiEf%2Bkp5sRHEIJLuUtl%2FYiEVmqw%2BRarTz0%2BT79sdK3WbLn0yK0pMbYpbBe2qiSHFTkEozhazsmLusBgbqYg1L3gdPH1b20kMOMuLz37Qzv%2F31HH8%2FmMvFGDYpFNk4Qfs43MOqWsMMGOqUBXCL13pWUXhgXGGgyAasuTz9LA%2BKaaZDZSGcAgci4EdR776s3RZumfAU%2FSryvvwUGG8cj12SR0gVJJ30jpfTih5BwC5AgAoqtU9FlqNde7A10NCUQ%2Bc7QAbcv4SEpDeLYkIVSkcjwT%2BurQpaAn5dd6VvWTUuUlozjlaOiQFnD2k9rNfdoIaFLYuPN4qkMq65raNCHhHEHshk7AzR3N2e1HN6J3JVS&X-Amz-Signature=4f625047866bd82b010f9fe931d6ed9e76d972a904468d29381fe7a6d37fabe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXXJOHA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD6Vy9N1D93k5xraF512pxVf0wAKyWkwpF7E1BP%2BRr4CQIgJZoaCimUdzTnuVcpBlPIFeuTQ0KBnH%2BmV%2FcOXfnLM2kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNwOcsImFTm6p93z%2BCrcA2eQtUDpcJQAeGzIRVJrCjMvcxI%2FG1%2B3pQ9JZ0BQGArAjG7rSBZqAcpy9HBEsF%2Fa25kAWjep4U8Tvcp5UjVaXE4OWkG3667dwSQGUpCNlJmT2xleMWzJNTYmnnAdeOz1emthvphTpqx6WJ9kvEHJGJGbyOxIAAZ4uQGV3AsK1cLEsODw3JxTyUrpHu5pzj9aUOwNd61PSF%2BaLIdKczfCAS4dA6XetSkzLlFBMQyUfi3le7kAS22D30x%2B3RKLU2B%2FvTwd3xo4yJs0fMgFErw3qApi0l4sqVaGhz4hhKK2YvFos5rLR1hfomJTgden4scDOJyl7wjWqEJK9f3KGre9f0c%2FNBga7sf4MmlHQo7l5r904ukd8qNUxu7h0Tef8zq8WGtwI4kDRDcnH3DWC3cNw6ybi1NnLu10YR4UVRwJUsrqoOQw0xbiUtsgQVRefjicb%2FMH9qP8FwofGgAjDjQKQUD2InDqwGiMFaxzdiXxM2bqlerE5HB1MChGrlSiEf%2Bkp5sRHEIJLuUtl%2FYiEVmqw%2BRarTz0%2BT79sdK3WbLn0yK0pMbYpbBe2qiSHFTkEozhazsmLusBgbqYg1L3gdPH1b20kMOMuLz37Qzv%2F31HH8%2FmMvFGDYpFNk4Qfs43MOqWsMMGOqUBXCL13pWUXhgXGGgyAasuTz9LA%2BKaaZDZSGcAgci4EdR776s3RZumfAU%2FSryvvwUGG8cj12SR0gVJJ30jpfTih5BwC5AgAoqtU9FlqNde7A10NCUQ%2Bc7QAbcv4SEpDeLYkIVSkcjwT%2BurQpaAn5dd6VvWTUuUlozjlaOiQFnD2k9rNfdoIaFLYuPN4qkMq65raNCHhHEHshk7AzR3N2e1HN6J3JVS&X-Amz-Signature=117e6ccb3ede256a1e8a25493da98afa10adc1a5535f3c4a178c3c70bda7b2c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXXJOHA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD6Vy9N1D93k5xraF512pxVf0wAKyWkwpF7E1BP%2BRr4CQIgJZoaCimUdzTnuVcpBlPIFeuTQ0KBnH%2BmV%2FcOXfnLM2kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNwOcsImFTm6p93z%2BCrcA2eQtUDpcJQAeGzIRVJrCjMvcxI%2FG1%2B3pQ9JZ0BQGArAjG7rSBZqAcpy9HBEsF%2Fa25kAWjep4U8Tvcp5UjVaXE4OWkG3667dwSQGUpCNlJmT2xleMWzJNTYmnnAdeOz1emthvphTpqx6WJ9kvEHJGJGbyOxIAAZ4uQGV3AsK1cLEsODw3JxTyUrpHu5pzj9aUOwNd61PSF%2BaLIdKczfCAS4dA6XetSkzLlFBMQyUfi3le7kAS22D30x%2B3RKLU2B%2FvTwd3xo4yJs0fMgFErw3qApi0l4sqVaGhz4hhKK2YvFos5rLR1hfomJTgden4scDOJyl7wjWqEJK9f3KGre9f0c%2FNBga7sf4MmlHQo7l5r904ukd8qNUxu7h0Tef8zq8WGtwI4kDRDcnH3DWC3cNw6ybi1NnLu10YR4UVRwJUsrqoOQw0xbiUtsgQVRefjicb%2FMH9qP8FwofGgAjDjQKQUD2InDqwGiMFaxzdiXxM2bqlerE5HB1MChGrlSiEf%2Bkp5sRHEIJLuUtl%2FYiEVmqw%2BRarTz0%2BT79sdK3WbLn0yK0pMbYpbBe2qiSHFTkEozhazsmLusBgbqYg1L3gdPH1b20kMOMuLz37Qzv%2F31HH8%2FmMvFGDYpFNk4Qfs43MOqWsMMGOqUBXCL13pWUXhgXGGgyAasuTz9LA%2BKaaZDZSGcAgci4EdR776s3RZumfAU%2FSryvvwUGG8cj12SR0gVJJ30jpfTih5BwC5AgAoqtU9FlqNde7A10NCUQ%2Bc7QAbcv4SEpDeLYkIVSkcjwT%2BurQpaAn5dd6VvWTUuUlozjlaOiQFnD2k9rNfdoIaFLYuPN4qkMq65raNCHhHEHshk7AzR3N2e1HN6J3JVS&X-Amz-Signature=dc0b03dbcb5f7b5380d3e115968ed711d9615cf8239aff9979ae3594010fdf74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXXJOHA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD6Vy9N1D93k5xraF512pxVf0wAKyWkwpF7E1BP%2BRr4CQIgJZoaCimUdzTnuVcpBlPIFeuTQ0KBnH%2BmV%2FcOXfnLM2kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNwOcsImFTm6p93z%2BCrcA2eQtUDpcJQAeGzIRVJrCjMvcxI%2FG1%2B3pQ9JZ0BQGArAjG7rSBZqAcpy9HBEsF%2Fa25kAWjep4U8Tvcp5UjVaXE4OWkG3667dwSQGUpCNlJmT2xleMWzJNTYmnnAdeOz1emthvphTpqx6WJ9kvEHJGJGbyOxIAAZ4uQGV3AsK1cLEsODw3JxTyUrpHu5pzj9aUOwNd61PSF%2BaLIdKczfCAS4dA6XetSkzLlFBMQyUfi3le7kAS22D30x%2B3RKLU2B%2FvTwd3xo4yJs0fMgFErw3qApi0l4sqVaGhz4hhKK2YvFos5rLR1hfomJTgden4scDOJyl7wjWqEJK9f3KGre9f0c%2FNBga7sf4MmlHQo7l5r904ukd8qNUxu7h0Tef8zq8WGtwI4kDRDcnH3DWC3cNw6ybi1NnLu10YR4UVRwJUsrqoOQw0xbiUtsgQVRefjicb%2FMH9qP8FwofGgAjDjQKQUD2InDqwGiMFaxzdiXxM2bqlerE5HB1MChGrlSiEf%2Bkp5sRHEIJLuUtl%2FYiEVmqw%2BRarTz0%2BT79sdK3WbLn0yK0pMbYpbBe2qiSHFTkEozhazsmLusBgbqYg1L3gdPH1b20kMOMuLz37Qzv%2F31HH8%2FmMvFGDYpFNk4Qfs43MOqWsMMGOqUBXCL13pWUXhgXGGgyAasuTz9LA%2BKaaZDZSGcAgci4EdR776s3RZumfAU%2FSryvvwUGG8cj12SR0gVJJ30jpfTih5BwC5AgAoqtU9FlqNde7A10NCUQ%2Bc7QAbcv4SEpDeLYkIVSkcjwT%2BurQpaAn5dd6VvWTUuUlozjlaOiQFnD2k9rNfdoIaFLYuPN4qkMq65raNCHhHEHshk7AzR3N2e1HN6J3JVS&X-Amz-Signature=a104322e98ad69397e494b4e74e1cafad78cdd0f6b8a0220b1e5db0029ed5905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXXJOHA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD6Vy9N1D93k5xraF512pxVf0wAKyWkwpF7E1BP%2BRr4CQIgJZoaCimUdzTnuVcpBlPIFeuTQ0KBnH%2BmV%2FcOXfnLM2kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNwOcsImFTm6p93z%2BCrcA2eQtUDpcJQAeGzIRVJrCjMvcxI%2FG1%2B3pQ9JZ0BQGArAjG7rSBZqAcpy9HBEsF%2Fa25kAWjep4U8Tvcp5UjVaXE4OWkG3667dwSQGUpCNlJmT2xleMWzJNTYmnnAdeOz1emthvphTpqx6WJ9kvEHJGJGbyOxIAAZ4uQGV3AsK1cLEsODw3JxTyUrpHu5pzj9aUOwNd61PSF%2BaLIdKczfCAS4dA6XetSkzLlFBMQyUfi3le7kAS22D30x%2B3RKLU2B%2FvTwd3xo4yJs0fMgFErw3qApi0l4sqVaGhz4hhKK2YvFos5rLR1hfomJTgden4scDOJyl7wjWqEJK9f3KGre9f0c%2FNBga7sf4MmlHQo7l5r904ukd8qNUxu7h0Tef8zq8WGtwI4kDRDcnH3DWC3cNw6ybi1NnLu10YR4UVRwJUsrqoOQw0xbiUtsgQVRefjicb%2FMH9qP8FwofGgAjDjQKQUD2InDqwGiMFaxzdiXxM2bqlerE5HB1MChGrlSiEf%2Bkp5sRHEIJLuUtl%2FYiEVmqw%2BRarTz0%2BT79sdK3WbLn0yK0pMbYpbBe2qiSHFTkEozhazsmLusBgbqYg1L3gdPH1b20kMOMuLz37Qzv%2F31HH8%2FmMvFGDYpFNk4Qfs43MOqWsMMGOqUBXCL13pWUXhgXGGgyAasuTz9LA%2BKaaZDZSGcAgci4EdR776s3RZumfAU%2FSryvvwUGG8cj12SR0gVJJ30jpfTih5BwC5AgAoqtU9FlqNde7A10NCUQ%2Bc7QAbcv4SEpDeLYkIVSkcjwT%2BurQpaAn5dd6VvWTUuUlozjlaOiQFnD2k9rNfdoIaFLYuPN4qkMq65raNCHhHEHshk7AzR3N2e1HN6J3JVS&X-Amz-Signature=8595839426b04b5e7182da37ea3536fa40e28bdc2e20552034feb7811ce69886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXXJOHA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD6Vy9N1D93k5xraF512pxVf0wAKyWkwpF7E1BP%2BRr4CQIgJZoaCimUdzTnuVcpBlPIFeuTQ0KBnH%2BmV%2FcOXfnLM2kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNwOcsImFTm6p93z%2BCrcA2eQtUDpcJQAeGzIRVJrCjMvcxI%2FG1%2B3pQ9JZ0BQGArAjG7rSBZqAcpy9HBEsF%2Fa25kAWjep4U8Tvcp5UjVaXE4OWkG3667dwSQGUpCNlJmT2xleMWzJNTYmnnAdeOz1emthvphTpqx6WJ9kvEHJGJGbyOxIAAZ4uQGV3AsK1cLEsODw3JxTyUrpHu5pzj9aUOwNd61PSF%2BaLIdKczfCAS4dA6XetSkzLlFBMQyUfi3le7kAS22D30x%2B3RKLU2B%2FvTwd3xo4yJs0fMgFErw3qApi0l4sqVaGhz4hhKK2YvFos5rLR1hfomJTgden4scDOJyl7wjWqEJK9f3KGre9f0c%2FNBga7sf4MmlHQo7l5r904ukd8qNUxu7h0Tef8zq8WGtwI4kDRDcnH3DWC3cNw6ybi1NnLu10YR4UVRwJUsrqoOQw0xbiUtsgQVRefjicb%2FMH9qP8FwofGgAjDjQKQUD2InDqwGiMFaxzdiXxM2bqlerE5HB1MChGrlSiEf%2Bkp5sRHEIJLuUtl%2FYiEVmqw%2BRarTz0%2BT79sdK3WbLn0yK0pMbYpbBe2qiSHFTkEozhazsmLusBgbqYg1L3gdPH1b20kMOMuLz37Qzv%2F31HH8%2FmMvFGDYpFNk4Qfs43MOqWsMMGOqUBXCL13pWUXhgXGGgyAasuTz9LA%2BKaaZDZSGcAgci4EdR776s3RZumfAU%2FSryvvwUGG8cj12SR0gVJJ30jpfTih5BwC5AgAoqtU9FlqNde7A10NCUQ%2Bc7QAbcv4SEpDeLYkIVSkcjwT%2BurQpaAn5dd6VvWTUuUlozjlaOiQFnD2k9rNfdoIaFLYuPN4qkMq65raNCHhHEHshk7AzR3N2e1HN6J3JVS&X-Amz-Signature=f20abce4186f87faef7a833380f17f4559985d4ae4bc6baec54b3e690c5d7c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
