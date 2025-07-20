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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKV4CFLZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8pYgl5FGilkTO%2BNfeXFfLWzw0SpTKh4KMGLce7XNjrAiEA5s0zROXMaIVbvbv0a9CAtI9OM5kuAt%2Bcasm5hFhmgzQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvkeDejqEAdJYMfWSrcA72UZMhNu%2FFCqS1Q9D5YSRxrkSLmXE2GZjlO7%2FHosCENN0XblbnuRyjD%2F7DO9G%2BelB9%2FDmcsTJJd9AL4a0kex8nmXtwSNWmZNgEyL0P%2FXDJ2yM6HFNZeZvbFIq9LNZni%2Bj9VUXCHxmV2cCYR1T2AggGrbWmStU8fuZo8To7DG%2F6v2SP8tUQHnagXDiaaowPUx3RYNzR4fGZrzUQKyZ7NEWrJ2r76bmyW%2FH0SOG0wuF9w46kw%2F12245bZO1f4udD4vFOg%2FvswhMLVserA36rkEx8WoWoynv%2BzcW3Z2dbtEhgxrWuEo1pylZSbzP%2BsvcoMeWW7p9rO5lqJ%2FKaUPRpZrdYbsTReHUwyrkWUZmZ2HPAuPg7wpfubeNFEbE33B81qxH84M34Kas%2Fabe5UuDlKPLhv646%2FSW%2BiQhQOF8tm8ek4C4U8CI8pyGcrALVtf5ralBQITPHSthkDVap6a4cWN%2FZ%2FPpD893%2BEIS2jf3cGnne%2BPJFxuApONxfE4uN%2BaUCPvPlUX2gWFCPV5LxuvmXKNlqkzP7pz4DGGtIbT9tygYo7%2BwxD4DZQsDin9nVAuJ8%2Bmm2LrYJYldI010x9leCtNkX06qcYVceLCjV9MdBrEhZDhiOMy43%2F7LP3NaLXMMHA8sMGOqUBcUwpoDkAjwVPXWh1J74bDb3PSlOAse1cl3pv6CoXR0wXTj7ZVoOSXyG0UtMZ9iQbbvQ%2BTRYNFoQmhJ7XG1iB9lORFeqETxej7RswpGLy6wEzVcNNW4ebXrYvKRd1UlSwjpXgWiTmOlouQvs1E%2BH12PljXewZ0fApMP6MRbwqtE0iBZwSrIcXW1FgnmyG%2F1aJODKB7X5XOsCtku3eDTsreno8uQX%2B&X-Amz-Signature=7c73675d0f2095c6d1e7c1c77219e518d80b833b664779f3c16832c91bf1db37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKV4CFLZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8pYgl5FGilkTO%2BNfeXFfLWzw0SpTKh4KMGLce7XNjrAiEA5s0zROXMaIVbvbv0a9CAtI9OM5kuAt%2Bcasm5hFhmgzQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvkeDejqEAdJYMfWSrcA72UZMhNu%2FFCqS1Q9D5YSRxrkSLmXE2GZjlO7%2FHosCENN0XblbnuRyjD%2F7DO9G%2BelB9%2FDmcsTJJd9AL4a0kex8nmXtwSNWmZNgEyL0P%2FXDJ2yM6HFNZeZvbFIq9LNZni%2Bj9VUXCHxmV2cCYR1T2AggGrbWmStU8fuZo8To7DG%2F6v2SP8tUQHnagXDiaaowPUx3RYNzR4fGZrzUQKyZ7NEWrJ2r76bmyW%2FH0SOG0wuF9w46kw%2F12245bZO1f4udD4vFOg%2FvswhMLVserA36rkEx8WoWoynv%2BzcW3Z2dbtEhgxrWuEo1pylZSbzP%2BsvcoMeWW7p9rO5lqJ%2FKaUPRpZrdYbsTReHUwyrkWUZmZ2HPAuPg7wpfubeNFEbE33B81qxH84M34Kas%2Fabe5UuDlKPLhv646%2FSW%2BiQhQOF8tm8ek4C4U8CI8pyGcrALVtf5ralBQITPHSthkDVap6a4cWN%2FZ%2FPpD893%2BEIS2jf3cGnne%2BPJFxuApONxfE4uN%2BaUCPvPlUX2gWFCPV5LxuvmXKNlqkzP7pz4DGGtIbT9tygYo7%2BwxD4DZQsDin9nVAuJ8%2Bmm2LrYJYldI010x9leCtNkX06qcYVceLCjV9MdBrEhZDhiOMy43%2F7LP3NaLXMMHA8sMGOqUBcUwpoDkAjwVPXWh1J74bDb3PSlOAse1cl3pv6CoXR0wXTj7ZVoOSXyG0UtMZ9iQbbvQ%2BTRYNFoQmhJ7XG1iB9lORFeqETxej7RswpGLy6wEzVcNNW4ebXrYvKRd1UlSwjpXgWiTmOlouQvs1E%2BH12PljXewZ0fApMP6MRbwqtE0iBZwSrIcXW1FgnmyG%2F1aJODKB7X5XOsCtku3eDTsreno8uQX%2B&X-Amz-Signature=75199edb93ae0a4ef1aac94755802c36c2c1153f49e21dbd415246954f9813f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKV4CFLZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8pYgl5FGilkTO%2BNfeXFfLWzw0SpTKh4KMGLce7XNjrAiEA5s0zROXMaIVbvbv0a9CAtI9OM5kuAt%2Bcasm5hFhmgzQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvkeDejqEAdJYMfWSrcA72UZMhNu%2FFCqS1Q9D5YSRxrkSLmXE2GZjlO7%2FHosCENN0XblbnuRyjD%2F7DO9G%2BelB9%2FDmcsTJJd9AL4a0kex8nmXtwSNWmZNgEyL0P%2FXDJ2yM6HFNZeZvbFIq9LNZni%2Bj9VUXCHxmV2cCYR1T2AggGrbWmStU8fuZo8To7DG%2F6v2SP8tUQHnagXDiaaowPUx3RYNzR4fGZrzUQKyZ7NEWrJ2r76bmyW%2FH0SOG0wuF9w46kw%2F12245bZO1f4udD4vFOg%2FvswhMLVserA36rkEx8WoWoynv%2BzcW3Z2dbtEhgxrWuEo1pylZSbzP%2BsvcoMeWW7p9rO5lqJ%2FKaUPRpZrdYbsTReHUwyrkWUZmZ2HPAuPg7wpfubeNFEbE33B81qxH84M34Kas%2Fabe5UuDlKPLhv646%2FSW%2BiQhQOF8tm8ek4C4U8CI8pyGcrALVtf5ralBQITPHSthkDVap6a4cWN%2FZ%2FPpD893%2BEIS2jf3cGnne%2BPJFxuApONxfE4uN%2BaUCPvPlUX2gWFCPV5LxuvmXKNlqkzP7pz4DGGtIbT9tygYo7%2BwxD4DZQsDin9nVAuJ8%2Bmm2LrYJYldI010x9leCtNkX06qcYVceLCjV9MdBrEhZDhiOMy43%2F7LP3NaLXMMHA8sMGOqUBcUwpoDkAjwVPXWh1J74bDb3PSlOAse1cl3pv6CoXR0wXTj7ZVoOSXyG0UtMZ9iQbbvQ%2BTRYNFoQmhJ7XG1iB9lORFeqETxej7RswpGLy6wEzVcNNW4ebXrYvKRd1UlSwjpXgWiTmOlouQvs1E%2BH12PljXewZ0fApMP6MRbwqtE0iBZwSrIcXW1FgnmyG%2F1aJODKB7X5XOsCtku3eDTsreno8uQX%2B&X-Amz-Signature=da0b6b8d31f11668956157fa89876c6893468981f8589f98475cfc2236a6d4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKV4CFLZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8pYgl5FGilkTO%2BNfeXFfLWzw0SpTKh4KMGLce7XNjrAiEA5s0zROXMaIVbvbv0a9CAtI9OM5kuAt%2Bcasm5hFhmgzQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvkeDejqEAdJYMfWSrcA72UZMhNu%2FFCqS1Q9D5YSRxrkSLmXE2GZjlO7%2FHosCENN0XblbnuRyjD%2F7DO9G%2BelB9%2FDmcsTJJd9AL4a0kex8nmXtwSNWmZNgEyL0P%2FXDJ2yM6HFNZeZvbFIq9LNZni%2Bj9VUXCHxmV2cCYR1T2AggGrbWmStU8fuZo8To7DG%2F6v2SP8tUQHnagXDiaaowPUx3RYNzR4fGZrzUQKyZ7NEWrJ2r76bmyW%2FH0SOG0wuF9w46kw%2F12245bZO1f4udD4vFOg%2FvswhMLVserA36rkEx8WoWoynv%2BzcW3Z2dbtEhgxrWuEo1pylZSbzP%2BsvcoMeWW7p9rO5lqJ%2FKaUPRpZrdYbsTReHUwyrkWUZmZ2HPAuPg7wpfubeNFEbE33B81qxH84M34Kas%2Fabe5UuDlKPLhv646%2FSW%2BiQhQOF8tm8ek4C4U8CI8pyGcrALVtf5ralBQITPHSthkDVap6a4cWN%2FZ%2FPpD893%2BEIS2jf3cGnne%2BPJFxuApONxfE4uN%2BaUCPvPlUX2gWFCPV5LxuvmXKNlqkzP7pz4DGGtIbT9tygYo7%2BwxD4DZQsDin9nVAuJ8%2Bmm2LrYJYldI010x9leCtNkX06qcYVceLCjV9MdBrEhZDhiOMy43%2F7LP3NaLXMMHA8sMGOqUBcUwpoDkAjwVPXWh1J74bDb3PSlOAse1cl3pv6CoXR0wXTj7ZVoOSXyG0UtMZ9iQbbvQ%2BTRYNFoQmhJ7XG1iB9lORFeqETxej7RswpGLy6wEzVcNNW4ebXrYvKRd1UlSwjpXgWiTmOlouQvs1E%2BH12PljXewZ0fApMP6MRbwqtE0iBZwSrIcXW1FgnmyG%2F1aJODKB7X5XOsCtku3eDTsreno8uQX%2B&X-Amz-Signature=e3edaa0cd451530a714703013f9bef7c4b19563291736cbdf7efb0ed94d6f873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKV4CFLZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8pYgl5FGilkTO%2BNfeXFfLWzw0SpTKh4KMGLce7XNjrAiEA5s0zROXMaIVbvbv0a9CAtI9OM5kuAt%2Bcasm5hFhmgzQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvkeDejqEAdJYMfWSrcA72UZMhNu%2FFCqS1Q9D5YSRxrkSLmXE2GZjlO7%2FHosCENN0XblbnuRyjD%2F7DO9G%2BelB9%2FDmcsTJJd9AL4a0kex8nmXtwSNWmZNgEyL0P%2FXDJ2yM6HFNZeZvbFIq9LNZni%2Bj9VUXCHxmV2cCYR1T2AggGrbWmStU8fuZo8To7DG%2F6v2SP8tUQHnagXDiaaowPUx3RYNzR4fGZrzUQKyZ7NEWrJ2r76bmyW%2FH0SOG0wuF9w46kw%2F12245bZO1f4udD4vFOg%2FvswhMLVserA36rkEx8WoWoynv%2BzcW3Z2dbtEhgxrWuEo1pylZSbzP%2BsvcoMeWW7p9rO5lqJ%2FKaUPRpZrdYbsTReHUwyrkWUZmZ2HPAuPg7wpfubeNFEbE33B81qxH84M34Kas%2Fabe5UuDlKPLhv646%2FSW%2BiQhQOF8tm8ek4C4U8CI8pyGcrALVtf5ralBQITPHSthkDVap6a4cWN%2FZ%2FPpD893%2BEIS2jf3cGnne%2BPJFxuApONxfE4uN%2BaUCPvPlUX2gWFCPV5LxuvmXKNlqkzP7pz4DGGtIbT9tygYo7%2BwxD4DZQsDin9nVAuJ8%2Bmm2LrYJYldI010x9leCtNkX06qcYVceLCjV9MdBrEhZDhiOMy43%2F7LP3NaLXMMHA8sMGOqUBcUwpoDkAjwVPXWh1J74bDb3PSlOAse1cl3pv6CoXR0wXTj7ZVoOSXyG0UtMZ9iQbbvQ%2BTRYNFoQmhJ7XG1iB9lORFeqETxej7RswpGLy6wEzVcNNW4ebXrYvKRd1UlSwjpXgWiTmOlouQvs1E%2BH12PljXewZ0fApMP6MRbwqtE0iBZwSrIcXW1FgnmyG%2F1aJODKB7X5XOsCtku3eDTsreno8uQX%2B&X-Amz-Signature=7061d63a447bca5da06e74dd5506fb73a09fcdb8a5b319673410ac957e57b485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKV4CFLZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8pYgl5FGilkTO%2BNfeXFfLWzw0SpTKh4KMGLce7XNjrAiEA5s0zROXMaIVbvbv0a9CAtI9OM5kuAt%2Bcasm5hFhmgzQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvkeDejqEAdJYMfWSrcA72UZMhNu%2FFCqS1Q9D5YSRxrkSLmXE2GZjlO7%2FHosCENN0XblbnuRyjD%2F7DO9G%2BelB9%2FDmcsTJJd9AL4a0kex8nmXtwSNWmZNgEyL0P%2FXDJ2yM6HFNZeZvbFIq9LNZni%2Bj9VUXCHxmV2cCYR1T2AggGrbWmStU8fuZo8To7DG%2F6v2SP8tUQHnagXDiaaowPUx3RYNzR4fGZrzUQKyZ7NEWrJ2r76bmyW%2FH0SOG0wuF9w46kw%2F12245bZO1f4udD4vFOg%2FvswhMLVserA36rkEx8WoWoynv%2BzcW3Z2dbtEhgxrWuEo1pylZSbzP%2BsvcoMeWW7p9rO5lqJ%2FKaUPRpZrdYbsTReHUwyrkWUZmZ2HPAuPg7wpfubeNFEbE33B81qxH84M34Kas%2Fabe5UuDlKPLhv646%2FSW%2BiQhQOF8tm8ek4C4U8CI8pyGcrALVtf5ralBQITPHSthkDVap6a4cWN%2FZ%2FPpD893%2BEIS2jf3cGnne%2BPJFxuApONxfE4uN%2BaUCPvPlUX2gWFCPV5LxuvmXKNlqkzP7pz4DGGtIbT9tygYo7%2BwxD4DZQsDin9nVAuJ8%2Bmm2LrYJYldI010x9leCtNkX06qcYVceLCjV9MdBrEhZDhiOMy43%2F7LP3NaLXMMHA8sMGOqUBcUwpoDkAjwVPXWh1J74bDb3PSlOAse1cl3pv6CoXR0wXTj7ZVoOSXyG0UtMZ9iQbbvQ%2BTRYNFoQmhJ7XG1iB9lORFeqETxej7RswpGLy6wEzVcNNW4ebXrYvKRd1UlSwjpXgWiTmOlouQvs1E%2BH12PljXewZ0fApMP6MRbwqtE0iBZwSrIcXW1FgnmyG%2F1aJODKB7X5XOsCtku3eDTsreno8uQX%2B&X-Amz-Signature=d517d8bb9dceae01c787d8fba0fce63b92d3cdb3946295a9e2a8166b18e9a89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKV4CFLZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8pYgl5FGilkTO%2BNfeXFfLWzw0SpTKh4KMGLce7XNjrAiEA5s0zROXMaIVbvbv0a9CAtI9OM5kuAt%2Bcasm5hFhmgzQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvkeDejqEAdJYMfWSrcA72UZMhNu%2FFCqS1Q9D5YSRxrkSLmXE2GZjlO7%2FHosCENN0XblbnuRyjD%2F7DO9G%2BelB9%2FDmcsTJJd9AL4a0kex8nmXtwSNWmZNgEyL0P%2FXDJ2yM6HFNZeZvbFIq9LNZni%2Bj9VUXCHxmV2cCYR1T2AggGrbWmStU8fuZo8To7DG%2F6v2SP8tUQHnagXDiaaowPUx3RYNzR4fGZrzUQKyZ7NEWrJ2r76bmyW%2FH0SOG0wuF9w46kw%2F12245bZO1f4udD4vFOg%2FvswhMLVserA36rkEx8WoWoynv%2BzcW3Z2dbtEhgxrWuEo1pylZSbzP%2BsvcoMeWW7p9rO5lqJ%2FKaUPRpZrdYbsTReHUwyrkWUZmZ2HPAuPg7wpfubeNFEbE33B81qxH84M34Kas%2Fabe5UuDlKPLhv646%2FSW%2BiQhQOF8tm8ek4C4U8CI8pyGcrALVtf5ralBQITPHSthkDVap6a4cWN%2FZ%2FPpD893%2BEIS2jf3cGnne%2BPJFxuApONxfE4uN%2BaUCPvPlUX2gWFCPV5LxuvmXKNlqkzP7pz4DGGtIbT9tygYo7%2BwxD4DZQsDin9nVAuJ8%2Bmm2LrYJYldI010x9leCtNkX06qcYVceLCjV9MdBrEhZDhiOMy43%2F7LP3NaLXMMHA8sMGOqUBcUwpoDkAjwVPXWh1J74bDb3PSlOAse1cl3pv6CoXR0wXTj7ZVoOSXyG0UtMZ9iQbbvQ%2BTRYNFoQmhJ7XG1iB9lORFeqETxej7RswpGLy6wEzVcNNW4ebXrYvKRd1UlSwjpXgWiTmOlouQvs1E%2BH12PljXewZ0fApMP6MRbwqtE0iBZwSrIcXW1FgnmyG%2F1aJODKB7X5XOsCtku3eDTsreno8uQX%2B&X-Amz-Signature=576bd6b3c879c9a0b35ca76894a6eec0fbcc9e777c49a3e8c2461e91b0425327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKV4CFLZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8pYgl5FGilkTO%2BNfeXFfLWzw0SpTKh4KMGLce7XNjrAiEA5s0zROXMaIVbvbv0a9CAtI9OM5kuAt%2Bcasm5hFhmgzQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvkeDejqEAdJYMfWSrcA72UZMhNu%2FFCqS1Q9D5YSRxrkSLmXE2GZjlO7%2FHosCENN0XblbnuRyjD%2F7DO9G%2BelB9%2FDmcsTJJd9AL4a0kex8nmXtwSNWmZNgEyL0P%2FXDJ2yM6HFNZeZvbFIq9LNZni%2Bj9VUXCHxmV2cCYR1T2AggGrbWmStU8fuZo8To7DG%2F6v2SP8tUQHnagXDiaaowPUx3RYNzR4fGZrzUQKyZ7NEWrJ2r76bmyW%2FH0SOG0wuF9w46kw%2F12245bZO1f4udD4vFOg%2FvswhMLVserA36rkEx8WoWoynv%2BzcW3Z2dbtEhgxrWuEo1pylZSbzP%2BsvcoMeWW7p9rO5lqJ%2FKaUPRpZrdYbsTReHUwyrkWUZmZ2HPAuPg7wpfubeNFEbE33B81qxH84M34Kas%2Fabe5UuDlKPLhv646%2FSW%2BiQhQOF8tm8ek4C4U8CI8pyGcrALVtf5ralBQITPHSthkDVap6a4cWN%2FZ%2FPpD893%2BEIS2jf3cGnne%2BPJFxuApONxfE4uN%2BaUCPvPlUX2gWFCPV5LxuvmXKNlqkzP7pz4DGGtIbT9tygYo7%2BwxD4DZQsDin9nVAuJ8%2Bmm2LrYJYldI010x9leCtNkX06qcYVceLCjV9MdBrEhZDhiOMy43%2F7LP3NaLXMMHA8sMGOqUBcUwpoDkAjwVPXWh1J74bDb3PSlOAse1cl3pv6CoXR0wXTj7ZVoOSXyG0UtMZ9iQbbvQ%2BTRYNFoQmhJ7XG1iB9lORFeqETxej7RswpGLy6wEzVcNNW4ebXrYvKRd1UlSwjpXgWiTmOlouQvs1E%2BH12PljXewZ0fApMP6MRbwqtE0iBZwSrIcXW1FgnmyG%2F1aJODKB7X5XOsCtku3eDTsreno8uQX%2B&X-Amz-Signature=760a81912db83533ff7206955935f522ee04fff8e9c2158b7c55fdbc652881f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
