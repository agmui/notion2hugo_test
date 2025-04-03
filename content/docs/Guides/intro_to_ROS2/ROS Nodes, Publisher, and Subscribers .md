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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPIZVOA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXx96DoXRnh6ts%2BREfyzP2dWSlBcX%2FWUG%2FXP2Js9qEywIgBJAVPu86r%2F4L2T20EulFQiJ%2Boi%2FsJU5P6f5QuCq4D6cqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtpPpzuowvEXrfUzSrcAzwpD0ZBU24pmoMqVg5TM5KJWpz%2FOGOFW5H9ofVGkg2CnF2eAtqwLIDeJ%2Fnvj%2FqGrx5SvIA0mStaEq00ybS0aEbmuaZtwBJ1AggyU6kgbjqsCj%2FHPnCB4qkNPSEY%2BISoK7dkhWBeJ1u15vKCsLfs11cN4UTO5F64udqMklBgi8Bsa0foujWgyAJqmmR%2Bcop2mNAbZ4zw6aR7WcBuYQIURYlqMHEsvnsP1KV6UPrYYPmAOTp654DUbAYO%2BAZ9aDDLQDPDPTs3maYRKR4E8%2FpaRBRjAvTqu2v95V07vOcEVm0xnQYj9%2FiJUoklJqEPqrag1C%2FaL6s4%2BS9v3OqOr9vBfwTm1vBHgfVK4DNR6FFrUNPjD8lNXZidEvbEcL5OKTKZXibg121dsCAnc7xI8CiBSEYnepoB80PoG8I2eJ8Xnj4Lf%2BZKJhAiYzw0K93dODNYMkAo15CcrdGGv%2BeOdixQ7dMeYvjNT5dCWLKZuT%2BRwqq6ixQDg7Zu%2Fmeg%2FB6EC8XvLCeyrsSrrUDzr0E43WWgITRj%2FHYRramAvBLZxBjop4zVUEIJWgxETXvdVSAJ8YoWl0e%2BRv3QQykLNzvdb9IHhmaixEDaEJLUaXEyT9ehLmJforWx2yBBKq4Wj5ZnMJjhuL8GOqUB9kAOg4I6MzzVH4WFSWokPEbDLBnWJEArTAf%2B8u%2Fa5P43HmCiVqgCfjtKMnCaKaX%2FzjfLwoZ16aS6N%2BlIL%2BCcj87%2BYkufFUL4849nWldvhlTMvr0cLj0ia%2BgBA04%2Bf6SvDqdp%2FrTGhPXQtoP%2FkCsjzcZbjBTUh4HqcEgnJ5IUZWmSBeR0rzdEeOqjLaYdt9IQrAodNsO3NF7T27H%2Btnqh%2F1Xx9M4R&X-Amz-Signature=7c83b77fdf93e0a97c00a8163b5b0eba17c4db72e18b999d3634a193e36a66b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPIZVOA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXx96DoXRnh6ts%2BREfyzP2dWSlBcX%2FWUG%2FXP2Js9qEywIgBJAVPu86r%2F4L2T20EulFQiJ%2Boi%2FsJU5P6f5QuCq4D6cqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtpPpzuowvEXrfUzSrcAzwpD0ZBU24pmoMqVg5TM5KJWpz%2FOGOFW5H9ofVGkg2CnF2eAtqwLIDeJ%2Fnvj%2FqGrx5SvIA0mStaEq00ybS0aEbmuaZtwBJ1AggyU6kgbjqsCj%2FHPnCB4qkNPSEY%2BISoK7dkhWBeJ1u15vKCsLfs11cN4UTO5F64udqMklBgi8Bsa0foujWgyAJqmmR%2Bcop2mNAbZ4zw6aR7WcBuYQIURYlqMHEsvnsP1KV6UPrYYPmAOTp654DUbAYO%2BAZ9aDDLQDPDPTs3maYRKR4E8%2FpaRBRjAvTqu2v95V07vOcEVm0xnQYj9%2FiJUoklJqEPqrag1C%2FaL6s4%2BS9v3OqOr9vBfwTm1vBHgfVK4DNR6FFrUNPjD8lNXZidEvbEcL5OKTKZXibg121dsCAnc7xI8CiBSEYnepoB80PoG8I2eJ8Xnj4Lf%2BZKJhAiYzw0K93dODNYMkAo15CcrdGGv%2BeOdixQ7dMeYvjNT5dCWLKZuT%2BRwqq6ixQDg7Zu%2Fmeg%2FB6EC8XvLCeyrsSrrUDzr0E43WWgITRj%2FHYRramAvBLZxBjop4zVUEIJWgxETXvdVSAJ8YoWl0e%2BRv3QQykLNzvdb9IHhmaixEDaEJLUaXEyT9ehLmJforWx2yBBKq4Wj5ZnMJjhuL8GOqUB9kAOg4I6MzzVH4WFSWokPEbDLBnWJEArTAf%2B8u%2Fa5P43HmCiVqgCfjtKMnCaKaX%2FzjfLwoZ16aS6N%2BlIL%2BCcj87%2BYkufFUL4849nWldvhlTMvr0cLj0ia%2BgBA04%2Bf6SvDqdp%2FrTGhPXQtoP%2FkCsjzcZbjBTUh4HqcEgnJ5IUZWmSBeR0rzdEeOqjLaYdt9IQrAodNsO3NF7T27H%2Btnqh%2F1Xx9M4R&X-Amz-Signature=8e624635badf0ef3f5c706fd7a18a44345ccc4c4a3ae1862e4d8a1a62a74a036&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPIZVOA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXx96DoXRnh6ts%2BREfyzP2dWSlBcX%2FWUG%2FXP2Js9qEywIgBJAVPu86r%2F4L2T20EulFQiJ%2Boi%2FsJU5P6f5QuCq4D6cqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtpPpzuowvEXrfUzSrcAzwpD0ZBU24pmoMqVg5TM5KJWpz%2FOGOFW5H9ofVGkg2CnF2eAtqwLIDeJ%2Fnvj%2FqGrx5SvIA0mStaEq00ybS0aEbmuaZtwBJ1AggyU6kgbjqsCj%2FHPnCB4qkNPSEY%2BISoK7dkhWBeJ1u15vKCsLfs11cN4UTO5F64udqMklBgi8Bsa0foujWgyAJqmmR%2Bcop2mNAbZ4zw6aR7WcBuYQIURYlqMHEsvnsP1KV6UPrYYPmAOTp654DUbAYO%2BAZ9aDDLQDPDPTs3maYRKR4E8%2FpaRBRjAvTqu2v95V07vOcEVm0xnQYj9%2FiJUoklJqEPqrag1C%2FaL6s4%2BS9v3OqOr9vBfwTm1vBHgfVK4DNR6FFrUNPjD8lNXZidEvbEcL5OKTKZXibg121dsCAnc7xI8CiBSEYnepoB80PoG8I2eJ8Xnj4Lf%2BZKJhAiYzw0K93dODNYMkAo15CcrdGGv%2BeOdixQ7dMeYvjNT5dCWLKZuT%2BRwqq6ixQDg7Zu%2Fmeg%2FB6EC8XvLCeyrsSrrUDzr0E43WWgITRj%2FHYRramAvBLZxBjop4zVUEIJWgxETXvdVSAJ8YoWl0e%2BRv3QQykLNzvdb9IHhmaixEDaEJLUaXEyT9ehLmJforWx2yBBKq4Wj5ZnMJjhuL8GOqUB9kAOg4I6MzzVH4WFSWokPEbDLBnWJEArTAf%2B8u%2Fa5P43HmCiVqgCfjtKMnCaKaX%2FzjfLwoZ16aS6N%2BlIL%2BCcj87%2BYkufFUL4849nWldvhlTMvr0cLj0ia%2BgBA04%2Bf6SvDqdp%2FrTGhPXQtoP%2FkCsjzcZbjBTUh4HqcEgnJ5IUZWmSBeR0rzdEeOqjLaYdt9IQrAodNsO3NF7T27H%2Btnqh%2F1Xx9M4R&X-Amz-Signature=d909cdebef345b5030e0e6925052f498e10e3e5c5b0654f36bc93236a52bb0f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPIZVOA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXx96DoXRnh6ts%2BREfyzP2dWSlBcX%2FWUG%2FXP2Js9qEywIgBJAVPu86r%2F4L2T20EulFQiJ%2Boi%2FsJU5P6f5QuCq4D6cqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtpPpzuowvEXrfUzSrcAzwpD0ZBU24pmoMqVg5TM5KJWpz%2FOGOFW5H9ofVGkg2CnF2eAtqwLIDeJ%2Fnvj%2FqGrx5SvIA0mStaEq00ybS0aEbmuaZtwBJ1AggyU6kgbjqsCj%2FHPnCB4qkNPSEY%2BISoK7dkhWBeJ1u15vKCsLfs11cN4UTO5F64udqMklBgi8Bsa0foujWgyAJqmmR%2Bcop2mNAbZ4zw6aR7WcBuYQIURYlqMHEsvnsP1KV6UPrYYPmAOTp654DUbAYO%2BAZ9aDDLQDPDPTs3maYRKR4E8%2FpaRBRjAvTqu2v95V07vOcEVm0xnQYj9%2FiJUoklJqEPqrag1C%2FaL6s4%2BS9v3OqOr9vBfwTm1vBHgfVK4DNR6FFrUNPjD8lNXZidEvbEcL5OKTKZXibg121dsCAnc7xI8CiBSEYnepoB80PoG8I2eJ8Xnj4Lf%2BZKJhAiYzw0K93dODNYMkAo15CcrdGGv%2BeOdixQ7dMeYvjNT5dCWLKZuT%2BRwqq6ixQDg7Zu%2Fmeg%2FB6EC8XvLCeyrsSrrUDzr0E43WWgITRj%2FHYRramAvBLZxBjop4zVUEIJWgxETXvdVSAJ8YoWl0e%2BRv3QQykLNzvdb9IHhmaixEDaEJLUaXEyT9ehLmJforWx2yBBKq4Wj5ZnMJjhuL8GOqUB9kAOg4I6MzzVH4WFSWokPEbDLBnWJEArTAf%2B8u%2Fa5P43HmCiVqgCfjtKMnCaKaX%2FzjfLwoZ16aS6N%2BlIL%2BCcj87%2BYkufFUL4849nWldvhlTMvr0cLj0ia%2BgBA04%2Bf6SvDqdp%2FrTGhPXQtoP%2FkCsjzcZbjBTUh4HqcEgnJ5IUZWmSBeR0rzdEeOqjLaYdt9IQrAodNsO3NF7T27H%2Btnqh%2F1Xx9M4R&X-Amz-Signature=8b97e44d6d21815e44094ddcadacec34023a8082567defd8d64bdac90f85a904&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPIZVOA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXx96DoXRnh6ts%2BREfyzP2dWSlBcX%2FWUG%2FXP2Js9qEywIgBJAVPu86r%2F4L2T20EulFQiJ%2Boi%2FsJU5P6f5QuCq4D6cqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtpPpzuowvEXrfUzSrcAzwpD0ZBU24pmoMqVg5TM5KJWpz%2FOGOFW5H9ofVGkg2CnF2eAtqwLIDeJ%2Fnvj%2FqGrx5SvIA0mStaEq00ybS0aEbmuaZtwBJ1AggyU6kgbjqsCj%2FHPnCB4qkNPSEY%2BISoK7dkhWBeJ1u15vKCsLfs11cN4UTO5F64udqMklBgi8Bsa0foujWgyAJqmmR%2Bcop2mNAbZ4zw6aR7WcBuYQIURYlqMHEsvnsP1KV6UPrYYPmAOTp654DUbAYO%2BAZ9aDDLQDPDPTs3maYRKR4E8%2FpaRBRjAvTqu2v95V07vOcEVm0xnQYj9%2FiJUoklJqEPqrag1C%2FaL6s4%2BS9v3OqOr9vBfwTm1vBHgfVK4DNR6FFrUNPjD8lNXZidEvbEcL5OKTKZXibg121dsCAnc7xI8CiBSEYnepoB80PoG8I2eJ8Xnj4Lf%2BZKJhAiYzw0K93dODNYMkAo15CcrdGGv%2BeOdixQ7dMeYvjNT5dCWLKZuT%2BRwqq6ixQDg7Zu%2Fmeg%2FB6EC8XvLCeyrsSrrUDzr0E43WWgITRj%2FHYRramAvBLZxBjop4zVUEIJWgxETXvdVSAJ8YoWl0e%2BRv3QQykLNzvdb9IHhmaixEDaEJLUaXEyT9ehLmJforWx2yBBKq4Wj5ZnMJjhuL8GOqUB9kAOg4I6MzzVH4WFSWokPEbDLBnWJEArTAf%2B8u%2Fa5P43HmCiVqgCfjtKMnCaKaX%2FzjfLwoZ16aS6N%2BlIL%2BCcj87%2BYkufFUL4849nWldvhlTMvr0cLj0ia%2BgBA04%2Bf6SvDqdp%2FrTGhPXQtoP%2FkCsjzcZbjBTUh4HqcEgnJ5IUZWmSBeR0rzdEeOqjLaYdt9IQrAodNsO3NF7T27H%2Btnqh%2F1Xx9M4R&X-Amz-Signature=9c4f32f487f5d49141bf69b06dc477002a6ff436c31951d1ff23a8f46abee4a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPIZVOA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXx96DoXRnh6ts%2BREfyzP2dWSlBcX%2FWUG%2FXP2Js9qEywIgBJAVPu86r%2F4L2T20EulFQiJ%2Boi%2FsJU5P6f5QuCq4D6cqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtpPpzuowvEXrfUzSrcAzwpD0ZBU24pmoMqVg5TM5KJWpz%2FOGOFW5H9ofVGkg2CnF2eAtqwLIDeJ%2Fnvj%2FqGrx5SvIA0mStaEq00ybS0aEbmuaZtwBJ1AggyU6kgbjqsCj%2FHPnCB4qkNPSEY%2BISoK7dkhWBeJ1u15vKCsLfs11cN4UTO5F64udqMklBgi8Bsa0foujWgyAJqmmR%2Bcop2mNAbZ4zw6aR7WcBuYQIURYlqMHEsvnsP1KV6UPrYYPmAOTp654DUbAYO%2BAZ9aDDLQDPDPTs3maYRKR4E8%2FpaRBRjAvTqu2v95V07vOcEVm0xnQYj9%2FiJUoklJqEPqrag1C%2FaL6s4%2BS9v3OqOr9vBfwTm1vBHgfVK4DNR6FFrUNPjD8lNXZidEvbEcL5OKTKZXibg121dsCAnc7xI8CiBSEYnepoB80PoG8I2eJ8Xnj4Lf%2BZKJhAiYzw0K93dODNYMkAo15CcrdGGv%2BeOdixQ7dMeYvjNT5dCWLKZuT%2BRwqq6ixQDg7Zu%2Fmeg%2FB6EC8XvLCeyrsSrrUDzr0E43WWgITRj%2FHYRramAvBLZxBjop4zVUEIJWgxETXvdVSAJ8YoWl0e%2BRv3QQykLNzvdb9IHhmaixEDaEJLUaXEyT9ehLmJforWx2yBBKq4Wj5ZnMJjhuL8GOqUB9kAOg4I6MzzVH4WFSWokPEbDLBnWJEArTAf%2B8u%2Fa5P43HmCiVqgCfjtKMnCaKaX%2FzjfLwoZ16aS6N%2BlIL%2BCcj87%2BYkufFUL4849nWldvhlTMvr0cLj0ia%2BgBA04%2Bf6SvDqdp%2FrTGhPXQtoP%2FkCsjzcZbjBTUh4HqcEgnJ5IUZWmSBeR0rzdEeOqjLaYdt9IQrAodNsO3NF7T27H%2Btnqh%2F1Xx9M4R&X-Amz-Signature=372761d5b3c2b3d50ed8ab5b2784cee89e8e05bd242fcef9c143fd92348da328&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPIZVOA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXx96DoXRnh6ts%2BREfyzP2dWSlBcX%2FWUG%2FXP2Js9qEywIgBJAVPu86r%2F4L2T20EulFQiJ%2Boi%2FsJU5P6f5QuCq4D6cqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtpPpzuowvEXrfUzSrcAzwpD0ZBU24pmoMqVg5TM5KJWpz%2FOGOFW5H9ofVGkg2CnF2eAtqwLIDeJ%2Fnvj%2FqGrx5SvIA0mStaEq00ybS0aEbmuaZtwBJ1AggyU6kgbjqsCj%2FHPnCB4qkNPSEY%2BISoK7dkhWBeJ1u15vKCsLfs11cN4UTO5F64udqMklBgi8Bsa0foujWgyAJqmmR%2Bcop2mNAbZ4zw6aR7WcBuYQIURYlqMHEsvnsP1KV6UPrYYPmAOTp654DUbAYO%2BAZ9aDDLQDPDPTs3maYRKR4E8%2FpaRBRjAvTqu2v95V07vOcEVm0xnQYj9%2FiJUoklJqEPqrag1C%2FaL6s4%2BS9v3OqOr9vBfwTm1vBHgfVK4DNR6FFrUNPjD8lNXZidEvbEcL5OKTKZXibg121dsCAnc7xI8CiBSEYnepoB80PoG8I2eJ8Xnj4Lf%2BZKJhAiYzw0K93dODNYMkAo15CcrdGGv%2BeOdixQ7dMeYvjNT5dCWLKZuT%2BRwqq6ixQDg7Zu%2Fmeg%2FB6EC8XvLCeyrsSrrUDzr0E43WWgITRj%2FHYRramAvBLZxBjop4zVUEIJWgxETXvdVSAJ8YoWl0e%2BRv3QQykLNzvdb9IHhmaixEDaEJLUaXEyT9ehLmJforWx2yBBKq4Wj5ZnMJjhuL8GOqUB9kAOg4I6MzzVH4WFSWokPEbDLBnWJEArTAf%2B8u%2Fa5P43HmCiVqgCfjtKMnCaKaX%2FzjfLwoZ16aS6N%2BlIL%2BCcj87%2BYkufFUL4849nWldvhlTMvr0cLj0ia%2BgBA04%2Bf6SvDqdp%2FrTGhPXQtoP%2FkCsjzcZbjBTUh4HqcEgnJ5IUZWmSBeR0rzdEeOqjLaYdt9IQrAodNsO3NF7T27H%2Btnqh%2F1Xx9M4R&X-Amz-Signature=26bc5fdfc428ce6e42a2b6318634fc422f7fde96e2db08c4b6182a37b9d1dcea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPIZVOA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCXx96DoXRnh6ts%2BREfyzP2dWSlBcX%2FWUG%2FXP2Js9qEywIgBJAVPu86r%2F4L2T20EulFQiJ%2Boi%2FsJU5P6f5QuCq4D6cqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtpPpzuowvEXrfUzSrcAzwpD0ZBU24pmoMqVg5TM5KJWpz%2FOGOFW5H9ofVGkg2CnF2eAtqwLIDeJ%2Fnvj%2FqGrx5SvIA0mStaEq00ybS0aEbmuaZtwBJ1AggyU6kgbjqsCj%2FHPnCB4qkNPSEY%2BISoK7dkhWBeJ1u15vKCsLfs11cN4UTO5F64udqMklBgi8Bsa0foujWgyAJqmmR%2Bcop2mNAbZ4zw6aR7WcBuYQIURYlqMHEsvnsP1KV6UPrYYPmAOTp654DUbAYO%2BAZ9aDDLQDPDPTs3maYRKR4E8%2FpaRBRjAvTqu2v95V07vOcEVm0xnQYj9%2FiJUoklJqEPqrag1C%2FaL6s4%2BS9v3OqOr9vBfwTm1vBHgfVK4DNR6FFrUNPjD8lNXZidEvbEcL5OKTKZXibg121dsCAnc7xI8CiBSEYnepoB80PoG8I2eJ8Xnj4Lf%2BZKJhAiYzw0K93dODNYMkAo15CcrdGGv%2BeOdixQ7dMeYvjNT5dCWLKZuT%2BRwqq6ixQDg7Zu%2Fmeg%2FB6EC8XvLCeyrsSrrUDzr0E43WWgITRj%2FHYRramAvBLZxBjop4zVUEIJWgxETXvdVSAJ8YoWl0e%2BRv3QQykLNzvdb9IHhmaixEDaEJLUaXEyT9ehLmJforWx2yBBKq4Wj5ZnMJjhuL8GOqUB9kAOg4I6MzzVH4WFSWokPEbDLBnWJEArTAf%2B8u%2Fa5P43HmCiVqgCfjtKMnCaKaX%2FzjfLwoZ16aS6N%2BlIL%2BCcj87%2BYkufFUL4849nWldvhlTMvr0cLj0ia%2BgBA04%2Bf6SvDqdp%2FrTGhPXQtoP%2FkCsjzcZbjBTUh4HqcEgnJ5IUZWmSBeR0rzdEeOqjLaYdt9IQrAodNsO3NF7T27H%2Btnqh%2F1Xx9M4R&X-Amz-Signature=83e0c6076551e785393acd35a52a42a739f248967c2767547c83bafe36dc2aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
