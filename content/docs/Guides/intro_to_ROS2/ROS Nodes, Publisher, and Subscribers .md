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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC7AJPA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDSBTUPGkd7RhoXj8rfmde427DkEbDQTtmKRe2WHY%2F4%2BQIgYVtt9cNtAsW2WaNwupp0MJpab7FjshEeWvS2dTYG2yoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdKL%2BQCOrf1XhqU2CrcAzbxdYhoO7Qgm%2B%2BYoREvH7w4gOHjhaPuuDHPTk45%2FJPFJwJK6NWo%2B74EhZVU%2F5ytysux2Xg2nR0MMVydnGJLZYWg5hRNTW0CkQjDRoQNriB4LJy2um3NgQLajUPSEJdy%2FnKSJKI3bSXzU3jonSLwkMzEIACpi9FuqAtVL3962yjJGvQdPyTMBsHZSYdmcZ4FHec1cMa8aRCDb8nQD7zL%2BWsF2tuHx8itUCa44apZCxClVKFxg1RlH4fYafmXbBzss2hwCZEY52wvL6z4zb%2Fjh800HYyxZVHEwyvMlOlC1odS9kWEC3HxFJg3OgQXHtldAoY2CkprjaZc9HdP%2FS%2Bm2%2BJtcX7lHc1YFrywo%2FHA98CivssfhfsoxdqaCCQFEfCMfAekQAKVpMqIjRJ9M6yJuuaEKpUaV1masT0kDZ79d5wgHMpD4xWUMKHbLoD0vFt945Ij5CaWHIb2ldq%2FhDOKpNoZkgMUdGwq2hSzolz2cl1aUjjY6wJr9ZZf3sceq4CKmU4shXWkAl9KfOlzx4BpSnX%2Bm6v%2FVSCVxLoa3zxKbqESnkNe0Y1QcI7JIb70bs%2FZ8PGyUI1OWeg0PcsFn%2FaUqEMoFLWTaP8iBDj%2FjuHA7d%2Fdr297Sa2E6hOTfOFFMKDKqL8GOqUBwGZu6Fv5K0ygFHFNy53cFkebRXr1lyJIO2sBItkM3gIzm7haOsmRH%2Bd6nCpgdgzl4on7DR4DFrIOxzJ%2FFXCZiu3uzQ5pB7rfdRu3MQXqXYGNCIF9byYEliY%2BTkHUxsyn74%2F%2FHg8BJAeF4RadIb8rTKqZ6CWYH1GmM6lTG3mrlvmdddeYwjEK6%2FbHZKe2HDRE46w%2BCNJipD7VrNsu1Te%2FYxf8b9K%2B&X-Amz-Signature=5a45213bc04f6a3c66bd460ede6564020f7da190daf719e1e08770b0e889355b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC7AJPA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDSBTUPGkd7RhoXj8rfmde427DkEbDQTtmKRe2WHY%2F4%2BQIgYVtt9cNtAsW2WaNwupp0MJpab7FjshEeWvS2dTYG2yoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdKL%2BQCOrf1XhqU2CrcAzbxdYhoO7Qgm%2B%2BYoREvH7w4gOHjhaPuuDHPTk45%2FJPFJwJK6NWo%2B74EhZVU%2F5ytysux2Xg2nR0MMVydnGJLZYWg5hRNTW0CkQjDRoQNriB4LJy2um3NgQLajUPSEJdy%2FnKSJKI3bSXzU3jonSLwkMzEIACpi9FuqAtVL3962yjJGvQdPyTMBsHZSYdmcZ4FHec1cMa8aRCDb8nQD7zL%2BWsF2tuHx8itUCa44apZCxClVKFxg1RlH4fYafmXbBzss2hwCZEY52wvL6z4zb%2Fjh800HYyxZVHEwyvMlOlC1odS9kWEC3HxFJg3OgQXHtldAoY2CkprjaZc9HdP%2FS%2Bm2%2BJtcX7lHc1YFrywo%2FHA98CivssfhfsoxdqaCCQFEfCMfAekQAKVpMqIjRJ9M6yJuuaEKpUaV1masT0kDZ79d5wgHMpD4xWUMKHbLoD0vFt945Ij5CaWHIb2ldq%2FhDOKpNoZkgMUdGwq2hSzolz2cl1aUjjY6wJr9ZZf3sceq4CKmU4shXWkAl9KfOlzx4BpSnX%2Bm6v%2FVSCVxLoa3zxKbqESnkNe0Y1QcI7JIb70bs%2FZ8PGyUI1OWeg0PcsFn%2FaUqEMoFLWTaP8iBDj%2FjuHA7d%2Fdr297Sa2E6hOTfOFFMKDKqL8GOqUBwGZu6Fv5K0ygFHFNy53cFkebRXr1lyJIO2sBItkM3gIzm7haOsmRH%2Bd6nCpgdgzl4on7DR4DFrIOxzJ%2FFXCZiu3uzQ5pB7rfdRu3MQXqXYGNCIF9byYEliY%2BTkHUxsyn74%2F%2FHg8BJAeF4RadIb8rTKqZ6CWYH1GmM6lTG3mrlvmdddeYwjEK6%2FbHZKe2HDRE46w%2BCNJipD7VrNsu1Te%2FYxf8b9K%2B&X-Amz-Signature=4cd0c3d2f8be0987d7910f184bd6f8f85327938adbe4d6b27ab48d611d52d7a6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC7AJPA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDSBTUPGkd7RhoXj8rfmde427DkEbDQTtmKRe2WHY%2F4%2BQIgYVtt9cNtAsW2WaNwupp0MJpab7FjshEeWvS2dTYG2yoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdKL%2BQCOrf1XhqU2CrcAzbxdYhoO7Qgm%2B%2BYoREvH7w4gOHjhaPuuDHPTk45%2FJPFJwJK6NWo%2B74EhZVU%2F5ytysux2Xg2nR0MMVydnGJLZYWg5hRNTW0CkQjDRoQNriB4LJy2um3NgQLajUPSEJdy%2FnKSJKI3bSXzU3jonSLwkMzEIACpi9FuqAtVL3962yjJGvQdPyTMBsHZSYdmcZ4FHec1cMa8aRCDb8nQD7zL%2BWsF2tuHx8itUCa44apZCxClVKFxg1RlH4fYafmXbBzss2hwCZEY52wvL6z4zb%2Fjh800HYyxZVHEwyvMlOlC1odS9kWEC3HxFJg3OgQXHtldAoY2CkprjaZc9HdP%2FS%2Bm2%2BJtcX7lHc1YFrywo%2FHA98CivssfhfsoxdqaCCQFEfCMfAekQAKVpMqIjRJ9M6yJuuaEKpUaV1masT0kDZ79d5wgHMpD4xWUMKHbLoD0vFt945Ij5CaWHIb2ldq%2FhDOKpNoZkgMUdGwq2hSzolz2cl1aUjjY6wJr9ZZf3sceq4CKmU4shXWkAl9KfOlzx4BpSnX%2Bm6v%2FVSCVxLoa3zxKbqESnkNe0Y1QcI7JIb70bs%2FZ8PGyUI1OWeg0PcsFn%2FaUqEMoFLWTaP8iBDj%2FjuHA7d%2Fdr297Sa2E6hOTfOFFMKDKqL8GOqUBwGZu6Fv5K0ygFHFNy53cFkebRXr1lyJIO2sBItkM3gIzm7haOsmRH%2Bd6nCpgdgzl4on7DR4DFrIOxzJ%2FFXCZiu3uzQ5pB7rfdRu3MQXqXYGNCIF9byYEliY%2BTkHUxsyn74%2F%2FHg8BJAeF4RadIb8rTKqZ6CWYH1GmM6lTG3mrlvmdddeYwjEK6%2FbHZKe2HDRE46w%2BCNJipD7VrNsu1Te%2FYxf8b9K%2B&X-Amz-Signature=323e332fe63e7bf5fade550c91208926fc70442c8ab24eac431c08018335d392&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC7AJPA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDSBTUPGkd7RhoXj8rfmde427DkEbDQTtmKRe2WHY%2F4%2BQIgYVtt9cNtAsW2WaNwupp0MJpab7FjshEeWvS2dTYG2yoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdKL%2BQCOrf1XhqU2CrcAzbxdYhoO7Qgm%2B%2BYoREvH7w4gOHjhaPuuDHPTk45%2FJPFJwJK6NWo%2B74EhZVU%2F5ytysux2Xg2nR0MMVydnGJLZYWg5hRNTW0CkQjDRoQNriB4LJy2um3NgQLajUPSEJdy%2FnKSJKI3bSXzU3jonSLwkMzEIACpi9FuqAtVL3962yjJGvQdPyTMBsHZSYdmcZ4FHec1cMa8aRCDb8nQD7zL%2BWsF2tuHx8itUCa44apZCxClVKFxg1RlH4fYafmXbBzss2hwCZEY52wvL6z4zb%2Fjh800HYyxZVHEwyvMlOlC1odS9kWEC3HxFJg3OgQXHtldAoY2CkprjaZc9HdP%2FS%2Bm2%2BJtcX7lHc1YFrywo%2FHA98CivssfhfsoxdqaCCQFEfCMfAekQAKVpMqIjRJ9M6yJuuaEKpUaV1masT0kDZ79d5wgHMpD4xWUMKHbLoD0vFt945Ij5CaWHIb2ldq%2FhDOKpNoZkgMUdGwq2hSzolz2cl1aUjjY6wJr9ZZf3sceq4CKmU4shXWkAl9KfOlzx4BpSnX%2Bm6v%2FVSCVxLoa3zxKbqESnkNe0Y1QcI7JIb70bs%2FZ8PGyUI1OWeg0PcsFn%2FaUqEMoFLWTaP8iBDj%2FjuHA7d%2Fdr297Sa2E6hOTfOFFMKDKqL8GOqUBwGZu6Fv5K0ygFHFNy53cFkebRXr1lyJIO2sBItkM3gIzm7haOsmRH%2Bd6nCpgdgzl4on7DR4DFrIOxzJ%2FFXCZiu3uzQ5pB7rfdRu3MQXqXYGNCIF9byYEliY%2BTkHUxsyn74%2F%2FHg8BJAeF4RadIb8rTKqZ6CWYH1GmM6lTG3mrlvmdddeYwjEK6%2FbHZKe2HDRE46w%2BCNJipD7VrNsu1Te%2FYxf8b9K%2B&X-Amz-Signature=ff2643b01a1c33a9ad243cb2c2298ed6640b65d35f45b4e6cd31f9533c9bd30f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC7AJPA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDSBTUPGkd7RhoXj8rfmde427DkEbDQTtmKRe2WHY%2F4%2BQIgYVtt9cNtAsW2WaNwupp0MJpab7FjshEeWvS2dTYG2yoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdKL%2BQCOrf1XhqU2CrcAzbxdYhoO7Qgm%2B%2BYoREvH7w4gOHjhaPuuDHPTk45%2FJPFJwJK6NWo%2B74EhZVU%2F5ytysux2Xg2nR0MMVydnGJLZYWg5hRNTW0CkQjDRoQNriB4LJy2um3NgQLajUPSEJdy%2FnKSJKI3bSXzU3jonSLwkMzEIACpi9FuqAtVL3962yjJGvQdPyTMBsHZSYdmcZ4FHec1cMa8aRCDb8nQD7zL%2BWsF2tuHx8itUCa44apZCxClVKFxg1RlH4fYafmXbBzss2hwCZEY52wvL6z4zb%2Fjh800HYyxZVHEwyvMlOlC1odS9kWEC3HxFJg3OgQXHtldAoY2CkprjaZc9HdP%2FS%2Bm2%2BJtcX7lHc1YFrywo%2FHA98CivssfhfsoxdqaCCQFEfCMfAekQAKVpMqIjRJ9M6yJuuaEKpUaV1masT0kDZ79d5wgHMpD4xWUMKHbLoD0vFt945Ij5CaWHIb2ldq%2FhDOKpNoZkgMUdGwq2hSzolz2cl1aUjjY6wJr9ZZf3sceq4CKmU4shXWkAl9KfOlzx4BpSnX%2Bm6v%2FVSCVxLoa3zxKbqESnkNe0Y1QcI7JIb70bs%2FZ8PGyUI1OWeg0PcsFn%2FaUqEMoFLWTaP8iBDj%2FjuHA7d%2Fdr297Sa2E6hOTfOFFMKDKqL8GOqUBwGZu6Fv5K0ygFHFNy53cFkebRXr1lyJIO2sBItkM3gIzm7haOsmRH%2Bd6nCpgdgzl4on7DR4DFrIOxzJ%2FFXCZiu3uzQ5pB7rfdRu3MQXqXYGNCIF9byYEliY%2BTkHUxsyn74%2F%2FHg8BJAeF4RadIb8rTKqZ6CWYH1GmM6lTG3mrlvmdddeYwjEK6%2FbHZKe2HDRE46w%2BCNJipD7VrNsu1Te%2FYxf8b9K%2B&X-Amz-Signature=344902372ecb3b890d2aa27bb054e155730d3ee702badd6194346e30ad2468fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC7AJPA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDSBTUPGkd7RhoXj8rfmde427DkEbDQTtmKRe2WHY%2F4%2BQIgYVtt9cNtAsW2WaNwupp0MJpab7FjshEeWvS2dTYG2yoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdKL%2BQCOrf1XhqU2CrcAzbxdYhoO7Qgm%2B%2BYoREvH7w4gOHjhaPuuDHPTk45%2FJPFJwJK6NWo%2B74EhZVU%2F5ytysux2Xg2nR0MMVydnGJLZYWg5hRNTW0CkQjDRoQNriB4LJy2um3NgQLajUPSEJdy%2FnKSJKI3bSXzU3jonSLwkMzEIACpi9FuqAtVL3962yjJGvQdPyTMBsHZSYdmcZ4FHec1cMa8aRCDb8nQD7zL%2BWsF2tuHx8itUCa44apZCxClVKFxg1RlH4fYafmXbBzss2hwCZEY52wvL6z4zb%2Fjh800HYyxZVHEwyvMlOlC1odS9kWEC3HxFJg3OgQXHtldAoY2CkprjaZc9HdP%2FS%2Bm2%2BJtcX7lHc1YFrywo%2FHA98CivssfhfsoxdqaCCQFEfCMfAekQAKVpMqIjRJ9M6yJuuaEKpUaV1masT0kDZ79d5wgHMpD4xWUMKHbLoD0vFt945Ij5CaWHIb2ldq%2FhDOKpNoZkgMUdGwq2hSzolz2cl1aUjjY6wJr9ZZf3sceq4CKmU4shXWkAl9KfOlzx4BpSnX%2Bm6v%2FVSCVxLoa3zxKbqESnkNe0Y1QcI7JIb70bs%2FZ8PGyUI1OWeg0PcsFn%2FaUqEMoFLWTaP8iBDj%2FjuHA7d%2Fdr297Sa2E6hOTfOFFMKDKqL8GOqUBwGZu6Fv5K0ygFHFNy53cFkebRXr1lyJIO2sBItkM3gIzm7haOsmRH%2Bd6nCpgdgzl4on7DR4DFrIOxzJ%2FFXCZiu3uzQ5pB7rfdRu3MQXqXYGNCIF9byYEliY%2BTkHUxsyn74%2F%2FHg8BJAeF4RadIb8rTKqZ6CWYH1GmM6lTG3mrlvmdddeYwjEK6%2FbHZKe2HDRE46w%2BCNJipD7VrNsu1Te%2FYxf8b9K%2B&X-Amz-Signature=a375be981b8a1afcfb719c542c3a597cb8a6eb86c219557bafc824e9f5f663a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC7AJPA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDSBTUPGkd7RhoXj8rfmde427DkEbDQTtmKRe2WHY%2F4%2BQIgYVtt9cNtAsW2WaNwupp0MJpab7FjshEeWvS2dTYG2yoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdKL%2BQCOrf1XhqU2CrcAzbxdYhoO7Qgm%2B%2BYoREvH7w4gOHjhaPuuDHPTk45%2FJPFJwJK6NWo%2B74EhZVU%2F5ytysux2Xg2nR0MMVydnGJLZYWg5hRNTW0CkQjDRoQNriB4LJy2um3NgQLajUPSEJdy%2FnKSJKI3bSXzU3jonSLwkMzEIACpi9FuqAtVL3962yjJGvQdPyTMBsHZSYdmcZ4FHec1cMa8aRCDb8nQD7zL%2BWsF2tuHx8itUCa44apZCxClVKFxg1RlH4fYafmXbBzss2hwCZEY52wvL6z4zb%2Fjh800HYyxZVHEwyvMlOlC1odS9kWEC3HxFJg3OgQXHtldAoY2CkprjaZc9HdP%2FS%2Bm2%2BJtcX7lHc1YFrywo%2FHA98CivssfhfsoxdqaCCQFEfCMfAekQAKVpMqIjRJ9M6yJuuaEKpUaV1masT0kDZ79d5wgHMpD4xWUMKHbLoD0vFt945Ij5CaWHIb2ldq%2FhDOKpNoZkgMUdGwq2hSzolz2cl1aUjjY6wJr9ZZf3sceq4CKmU4shXWkAl9KfOlzx4BpSnX%2Bm6v%2FVSCVxLoa3zxKbqESnkNe0Y1QcI7JIb70bs%2FZ8PGyUI1OWeg0PcsFn%2FaUqEMoFLWTaP8iBDj%2FjuHA7d%2Fdr297Sa2E6hOTfOFFMKDKqL8GOqUBwGZu6Fv5K0ygFHFNy53cFkebRXr1lyJIO2sBItkM3gIzm7haOsmRH%2Bd6nCpgdgzl4on7DR4DFrIOxzJ%2FFXCZiu3uzQ5pB7rfdRu3MQXqXYGNCIF9byYEliY%2BTkHUxsyn74%2F%2FHg8BJAeF4RadIb8rTKqZ6CWYH1GmM6lTG3mrlvmdddeYwjEK6%2FbHZKe2HDRE46w%2BCNJipD7VrNsu1Te%2FYxf8b9K%2B&X-Amz-Signature=f6f1b7eee8f7696323d807f1d4415be1bf5bead7b63b33fcb2d483b48e3ac822&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC7AJPA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDSBTUPGkd7RhoXj8rfmde427DkEbDQTtmKRe2WHY%2F4%2BQIgYVtt9cNtAsW2WaNwupp0MJpab7FjshEeWvS2dTYG2yoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdKL%2BQCOrf1XhqU2CrcAzbxdYhoO7Qgm%2B%2BYoREvH7w4gOHjhaPuuDHPTk45%2FJPFJwJK6NWo%2B74EhZVU%2F5ytysux2Xg2nR0MMVydnGJLZYWg5hRNTW0CkQjDRoQNriB4LJy2um3NgQLajUPSEJdy%2FnKSJKI3bSXzU3jonSLwkMzEIACpi9FuqAtVL3962yjJGvQdPyTMBsHZSYdmcZ4FHec1cMa8aRCDb8nQD7zL%2BWsF2tuHx8itUCa44apZCxClVKFxg1RlH4fYafmXbBzss2hwCZEY52wvL6z4zb%2Fjh800HYyxZVHEwyvMlOlC1odS9kWEC3HxFJg3OgQXHtldAoY2CkprjaZc9HdP%2FS%2Bm2%2BJtcX7lHc1YFrywo%2FHA98CivssfhfsoxdqaCCQFEfCMfAekQAKVpMqIjRJ9M6yJuuaEKpUaV1masT0kDZ79d5wgHMpD4xWUMKHbLoD0vFt945Ij5CaWHIb2ldq%2FhDOKpNoZkgMUdGwq2hSzolz2cl1aUjjY6wJr9ZZf3sceq4CKmU4shXWkAl9KfOlzx4BpSnX%2Bm6v%2FVSCVxLoa3zxKbqESnkNe0Y1QcI7JIb70bs%2FZ8PGyUI1OWeg0PcsFn%2FaUqEMoFLWTaP8iBDj%2FjuHA7d%2Fdr297Sa2E6hOTfOFFMKDKqL8GOqUBwGZu6Fv5K0ygFHFNy53cFkebRXr1lyJIO2sBItkM3gIzm7haOsmRH%2Bd6nCpgdgzl4on7DR4DFrIOxzJ%2FFXCZiu3uzQ5pB7rfdRu3MQXqXYGNCIF9byYEliY%2BTkHUxsyn74%2F%2FHg8BJAeF4RadIb8rTKqZ6CWYH1GmM6lTG3mrlvmdddeYwjEK6%2FbHZKe2HDRE46w%2BCNJipD7VrNsu1Te%2FYxf8b9K%2B&X-Amz-Signature=fbe90442fd6314e40ed9d86a319a8e2be7291a55a605f0a9592b7e32fd4d07a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
