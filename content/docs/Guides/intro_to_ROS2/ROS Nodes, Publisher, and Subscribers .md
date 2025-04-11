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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGH2AGI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCvI29560Uq7ai7zF%2F88HA4zwJu%2Ftoqv4n3%2FYGvP8JaXgIgY9dnmYgt9dkM7lGEE6sX6Xp3ISitOtRc8QJzsGDU9CkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXz8Lc%2FKQ0ZaU9i8ircAwrmi80BMCgO6iKI40rqTWH9%2Fu2Yaecfed1nugWhXeXxfodiKC8E4W%2FqbDsP2Nfyc%2BfbpTqJ4oOHOoXAgC7yULrUK56V3qhkfD68q9MP37f2ixnqMzMSLvKJJjEOvpwhSkAl2aID2iL6zTpCK4x1MCiP4o4sOpndhJDJ%2FkXmpbifiLp%2BmLx93%2FjmEwXqKCHzAANyOGjY%2BOiIYvG4rQjn67hcgO5Ua%2Fe%2BAFy2QVufncSv6ZpU4VrrJHpf6%2BpxZox71EEhfL%2FbGimJ0xrDwbzJvyQQP3fa%2FjQvg13GYAmzLp%2F%2FBRbkH1DF4eUQWql58unGFjDPI8yZPZbg8Sr6ziDASLqwL%2FVEHn9m7bNRNGk1i8UlRAO9CnPR3%2BiEBzDc7DyVltsLCkBe1GMrL1CHkgli2zeSVQiqeFeeIaOKiUzoQEk85C6zOpIeYUwcsxsAtSdJ%2FavPAw2xSp1r4hkJEDklPtWKTbx3oQhT%2BLuk1UNRD%2FSMQb2FBlYWZ%2B3tHZ1OPZHRPWy2uIzdJ5JdKFBZPP68cFH0tSlKPY7xZvcUvL4fsjvTxKTPOxeJDfzcxhB0i28Hu3RPwYLJCv7Zw6mDQAk732Nd5zKElZEIonrfGiJrGcpwmBB9q%2FqY%2BSlxMJ9CMMCk5r8GOqUBAikN%2Fcmp00JGW9QGw3ggrLIGz8DAeSmJUirEeRf36MVl7KO%2B0BEwnyv2jZdSKMrVIDrIRd5kYd4a9mrP5JCGeuOSG95tiXhm8%2FyNEo3ZepNmoa7apta5%2BFbFFPM23b0WfwNq8IdzRn2yciQ1m4adZR0Wg3gMJTSJrbI98do9JKd9Kya2atwua5N9IlK7Qb7d7iZqP4qjEtqGVkHuoBAbW%2BZJ%2FAQ8&X-Amz-Signature=36a280cd07ad212094ada1463102ec8655633bdeb83e774a25e8dedc6245ff0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGH2AGI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCvI29560Uq7ai7zF%2F88HA4zwJu%2Ftoqv4n3%2FYGvP8JaXgIgY9dnmYgt9dkM7lGEE6sX6Xp3ISitOtRc8QJzsGDU9CkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXz8Lc%2FKQ0ZaU9i8ircAwrmi80BMCgO6iKI40rqTWH9%2Fu2Yaecfed1nugWhXeXxfodiKC8E4W%2FqbDsP2Nfyc%2BfbpTqJ4oOHOoXAgC7yULrUK56V3qhkfD68q9MP37f2ixnqMzMSLvKJJjEOvpwhSkAl2aID2iL6zTpCK4x1MCiP4o4sOpndhJDJ%2FkXmpbifiLp%2BmLx93%2FjmEwXqKCHzAANyOGjY%2BOiIYvG4rQjn67hcgO5Ua%2Fe%2BAFy2QVufncSv6ZpU4VrrJHpf6%2BpxZox71EEhfL%2FbGimJ0xrDwbzJvyQQP3fa%2FjQvg13GYAmzLp%2F%2FBRbkH1DF4eUQWql58unGFjDPI8yZPZbg8Sr6ziDASLqwL%2FVEHn9m7bNRNGk1i8UlRAO9CnPR3%2BiEBzDc7DyVltsLCkBe1GMrL1CHkgli2zeSVQiqeFeeIaOKiUzoQEk85C6zOpIeYUwcsxsAtSdJ%2FavPAw2xSp1r4hkJEDklPtWKTbx3oQhT%2BLuk1UNRD%2FSMQb2FBlYWZ%2B3tHZ1OPZHRPWy2uIzdJ5JdKFBZPP68cFH0tSlKPY7xZvcUvL4fsjvTxKTPOxeJDfzcxhB0i28Hu3RPwYLJCv7Zw6mDQAk732Nd5zKElZEIonrfGiJrGcpwmBB9q%2FqY%2BSlxMJ9CMMCk5r8GOqUBAikN%2Fcmp00JGW9QGw3ggrLIGz8DAeSmJUirEeRf36MVl7KO%2B0BEwnyv2jZdSKMrVIDrIRd5kYd4a9mrP5JCGeuOSG95tiXhm8%2FyNEo3ZepNmoa7apta5%2BFbFFPM23b0WfwNq8IdzRn2yciQ1m4adZR0Wg3gMJTSJrbI98do9JKd9Kya2atwua5N9IlK7Qb7d7iZqP4qjEtqGVkHuoBAbW%2BZJ%2FAQ8&X-Amz-Signature=88c731213861ff2b2cf978382f0804e365a12d578611ce43a9a24fa32a0d1f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGH2AGI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCvI29560Uq7ai7zF%2F88HA4zwJu%2Ftoqv4n3%2FYGvP8JaXgIgY9dnmYgt9dkM7lGEE6sX6Xp3ISitOtRc8QJzsGDU9CkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXz8Lc%2FKQ0ZaU9i8ircAwrmi80BMCgO6iKI40rqTWH9%2Fu2Yaecfed1nugWhXeXxfodiKC8E4W%2FqbDsP2Nfyc%2BfbpTqJ4oOHOoXAgC7yULrUK56V3qhkfD68q9MP37f2ixnqMzMSLvKJJjEOvpwhSkAl2aID2iL6zTpCK4x1MCiP4o4sOpndhJDJ%2FkXmpbifiLp%2BmLx93%2FjmEwXqKCHzAANyOGjY%2BOiIYvG4rQjn67hcgO5Ua%2Fe%2BAFy2QVufncSv6ZpU4VrrJHpf6%2BpxZox71EEhfL%2FbGimJ0xrDwbzJvyQQP3fa%2FjQvg13GYAmzLp%2F%2FBRbkH1DF4eUQWql58unGFjDPI8yZPZbg8Sr6ziDASLqwL%2FVEHn9m7bNRNGk1i8UlRAO9CnPR3%2BiEBzDc7DyVltsLCkBe1GMrL1CHkgli2zeSVQiqeFeeIaOKiUzoQEk85C6zOpIeYUwcsxsAtSdJ%2FavPAw2xSp1r4hkJEDklPtWKTbx3oQhT%2BLuk1UNRD%2FSMQb2FBlYWZ%2B3tHZ1OPZHRPWy2uIzdJ5JdKFBZPP68cFH0tSlKPY7xZvcUvL4fsjvTxKTPOxeJDfzcxhB0i28Hu3RPwYLJCv7Zw6mDQAk732Nd5zKElZEIonrfGiJrGcpwmBB9q%2FqY%2BSlxMJ9CMMCk5r8GOqUBAikN%2Fcmp00JGW9QGw3ggrLIGz8DAeSmJUirEeRf36MVl7KO%2B0BEwnyv2jZdSKMrVIDrIRd5kYd4a9mrP5JCGeuOSG95tiXhm8%2FyNEo3ZepNmoa7apta5%2BFbFFPM23b0WfwNq8IdzRn2yciQ1m4adZR0Wg3gMJTSJrbI98do9JKd9Kya2atwua5N9IlK7Qb7d7iZqP4qjEtqGVkHuoBAbW%2BZJ%2FAQ8&X-Amz-Signature=51354326c49a0af9ba4e60720e7901cd259f603c0216cbcc8526ea72a20d9348&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGH2AGI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCvI29560Uq7ai7zF%2F88HA4zwJu%2Ftoqv4n3%2FYGvP8JaXgIgY9dnmYgt9dkM7lGEE6sX6Xp3ISitOtRc8QJzsGDU9CkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXz8Lc%2FKQ0ZaU9i8ircAwrmi80BMCgO6iKI40rqTWH9%2Fu2Yaecfed1nugWhXeXxfodiKC8E4W%2FqbDsP2Nfyc%2BfbpTqJ4oOHOoXAgC7yULrUK56V3qhkfD68q9MP37f2ixnqMzMSLvKJJjEOvpwhSkAl2aID2iL6zTpCK4x1MCiP4o4sOpndhJDJ%2FkXmpbifiLp%2BmLx93%2FjmEwXqKCHzAANyOGjY%2BOiIYvG4rQjn67hcgO5Ua%2Fe%2BAFy2QVufncSv6ZpU4VrrJHpf6%2BpxZox71EEhfL%2FbGimJ0xrDwbzJvyQQP3fa%2FjQvg13GYAmzLp%2F%2FBRbkH1DF4eUQWql58unGFjDPI8yZPZbg8Sr6ziDASLqwL%2FVEHn9m7bNRNGk1i8UlRAO9CnPR3%2BiEBzDc7DyVltsLCkBe1GMrL1CHkgli2zeSVQiqeFeeIaOKiUzoQEk85C6zOpIeYUwcsxsAtSdJ%2FavPAw2xSp1r4hkJEDklPtWKTbx3oQhT%2BLuk1UNRD%2FSMQb2FBlYWZ%2B3tHZ1OPZHRPWy2uIzdJ5JdKFBZPP68cFH0tSlKPY7xZvcUvL4fsjvTxKTPOxeJDfzcxhB0i28Hu3RPwYLJCv7Zw6mDQAk732Nd5zKElZEIonrfGiJrGcpwmBB9q%2FqY%2BSlxMJ9CMMCk5r8GOqUBAikN%2Fcmp00JGW9QGw3ggrLIGz8DAeSmJUirEeRf36MVl7KO%2B0BEwnyv2jZdSKMrVIDrIRd5kYd4a9mrP5JCGeuOSG95tiXhm8%2FyNEo3ZepNmoa7apta5%2BFbFFPM23b0WfwNq8IdzRn2yciQ1m4adZR0Wg3gMJTSJrbI98do9JKd9Kya2atwua5N9IlK7Qb7d7iZqP4qjEtqGVkHuoBAbW%2BZJ%2FAQ8&X-Amz-Signature=5c311645b78f9b41d7aad11d14d5e668bc21847423d5dcd9e4beb8652cc3cd7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGH2AGI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCvI29560Uq7ai7zF%2F88HA4zwJu%2Ftoqv4n3%2FYGvP8JaXgIgY9dnmYgt9dkM7lGEE6sX6Xp3ISitOtRc8QJzsGDU9CkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXz8Lc%2FKQ0ZaU9i8ircAwrmi80BMCgO6iKI40rqTWH9%2Fu2Yaecfed1nugWhXeXxfodiKC8E4W%2FqbDsP2Nfyc%2BfbpTqJ4oOHOoXAgC7yULrUK56V3qhkfD68q9MP37f2ixnqMzMSLvKJJjEOvpwhSkAl2aID2iL6zTpCK4x1MCiP4o4sOpndhJDJ%2FkXmpbifiLp%2BmLx93%2FjmEwXqKCHzAANyOGjY%2BOiIYvG4rQjn67hcgO5Ua%2Fe%2BAFy2QVufncSv6ZpU4VrrJHpf6%2BpxZox71EEhfL%2FbGimJ0xrDwbzJvyQQP3fa%2FjQvg13GYAmzLp%2F%2FBRbkH1DF4eUQWql58unGFjDPI8yZPZbg8Sr6ziDASLqwL%2FVEHn9m7bNRNGk1i8UlRAO9CnPR3%2BiEBzDc7DyVltsLCkBe1GMrL1CHkgli2zeSVQiqeFeeIaOKiUzoQEk85C6zOpIeYUwcsxsAtSdJ%2FavPAw2xSp1r4hkJEDklPtWKTbx3oQhT%2BLuk1UNRD%2FSMQb2FBlYWZ%2B3tHZ1OPZHRPWy2uIzdJ5JdKFBZPP68cFH0tSlKPY7xZvcUvL4fsjvTxKTPOxeJDfzcxhB0i28Hu3RPwYLJCv7Zw6mDQAk732Nd5zKElZEIonrfGiJrGcpwmBB9q%2FqY%2BSlxMJ9CMMCk5r8GOqUBAikN%2Fcmp00JGW9QGw3ggrLIGz8DAeSmJUirEeRf36MVl7KO%2B0BEwnyv2jZdSKMrVIDrIRd5kYd4a9mrP5JCGeuOSG95tiXhm8%2FyNEo3ZepNmoa7apta5%2BFbFFPM23b0WfwNq8IdzRn2yciQ1m4adZR0Wg3gMJTSJrbI98do9JKd9Kya2atwua5N9IlK7Qb7d7iZqP4qjEtqGVkHuoBAbW%2BZJ%2FAQ8&X-Amz-Signature=1f1d9265d0f06c294e9c95d269ba016b642fa29f3067c74f1bd1bedbf2f9af16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGH2AGI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCvI29560Uq7ai7zF%2F88HA4zwJu%2Ftoqv4n3%2FYGvP8JaXgIgY9dnmYgt9dkM7lGEE6sX6Xp3ISitOtRc8QJzsGDU9CkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXz8Lc%2FKQ0ZaU9i8ircAwrmi80BMCgO6iKI40rqTWH9%2Fu2Yaecfed1nugWhXeXxfodiKC8E4W%2FqbDsP2Nfyc%2BfbpTqJ4oOHOoXAgC7yULrUK56V3qhkfD68q9MP37f2ixnqMzMSLvKJJjEOvpwhSkAl2aID2iL6zTpCK4x1MCiP4o4sOpndhJDJ%2FkXmpbifiLp%2BmLx93%2FjmEwXqKCHzAANyOGjY%2BOiIYvG4rQjn67hcgO5Ua%2Fe%2BAFy2QVufncSv6ZpU4VrrJHpf6%2BpxZox71EEhfL%2FbGimJ0xrDwbzJvyQQP3fa%2FjQvg13GYAmzLp%2F%2FBRbkH1DF4eUQWql58unGFjDPI8yZPZbg8Sr6ziDASLqwL%2FVEHn9m7bNRNGk1i8UlRAO9CnPR3%2BiEBzDc7DyVltsLCkBe1GMrL1CHkgli2zeSVQiqeFeeIaOKiUzoQEk85C6zOpIeYUwcsxsAtSdJ%2FavPAw2xSp1r4hkJEDklPtWKTbx3oQhT%2BLuk1UNRD%2FSMQb2FBlYWZ%2B3tHZ1OPZHRPWy2uIzdJ5JdKFBZPP68cFH0tSlKPY7xZvcUvL4fsjvTxKTPOxeJDfzcxhB0i28Hu3RPwYLJCv7Zw6mDQAk732Nd5zKElZEIonrfGiJrGcpwmBB9q%2FqY%2BSlxMJ9CMMCk5r8GOqUBAikN%2Fcmp00JGW9QGw3ggrLIGz8DAeSmJUirEeRf36MVl7KO%2B0BEwnyv2jZdSKMrVIDrIRd5kYd4a9mrP5JCGeuOSG95tiXhm8%2FyNEo3ZepNmoa7apta5%2BFbFFPM23b0WfwNq8IdzRn2yciQ1m4adZR0Wg3gMJTSJrbI98do9JKd9Kya2atwua5N9IlK7Qb7d7iZqP4qjEtqGVkHuoBAbW%2BZJ%2FAQ8&X-Amz-Signature=d451670a499c8ded489c2b748451334e2e2b8e4601f8c258ce5628213b1dc256&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGH2AGI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCvI29560Uq7ai7zF%2F88HA4zwJu%2Ftoqv4n3%2FYGvP8JaXgIgY9dnmYgt9dkM7lGEE6sX6Xp3ISitOtRc8QJzsGDU9CkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXz8Lc%2FKQ0ZaU9i8ircAwrmi80BMCgO6iKI40rqTWH9%2Fu2Yaecfed1nugWhXeXxfodiKC8E4W%2FqbDsP2Nfyc%2BfbpTqJ4oOHOoXAgC7yULrUK56V3qhkfD68q9MP37f2ixnqMzMSLvKJJjEOvpwhSkAl2aID2iL6zTpCK4x1MCiP4o4sOpndhJDJ%2FkXmpbifiLp%2BmLx93%2FjmEwXqKCHzAANyOGjY%2BOiIYvG4rQjn67hcgO5Ua%2Fe%2BAFy2QVufncSv6ZpU4VrrJHpf6%2BpxZox71EEhfL%2FbGimJ0xrDwbzJvyQQP3fa%2FjQvg13GYAmzLp%2F%2FBRbkH1DF4eUQWql58unGFjDPI8yZPZbg8Sr6ziDASLqwL%2FVEHn9m7bNRNGk1i8UlRAO9CnPR3%2BiEBzDc7DyVltsLCkBe1GMrL1CHkgli2zeSVQiqeFeeIaOKiUzoQEk85C6zOpIeYUwcsxsAtSdJ%2FavPAw2xSp1r4hkJEDklPtWKTbx3oQhT%2BLuk1UNRD%2FSMQb2FBlYWZ%2B3tHZ1OPZHRPWy2uIzdJ5JdKFBZPP68cFH0tSlKPY7xZvcUvL4fsjvTxKTPOxeJDfzcxhB0i28Hu3RPwYLJCv7Zw6mDQAk732Nd5zKElZEIonrfGiJrGcpwmBB9q%2FqY%2BSlxMJ9CMMCk5r8GOqUBAikN%2Fcmp00JGW9QGw3ggrLIGz8DAeSmJUirEeRf36MVl7KO%2B0BEwnyv2jZdSKMrVIDrIRd5kYd4a9mrP5JCGeuOSG95tiXhm8%2FyNEo3ZepNmoa7apta5%2BFbFFPM23b0WfwNq8IdzRn2yciQ1m4adZR0Wg3gMJTSJrbI98do9JKd9Kya2atwua5N9IlK7Qb7d7iZqP4qjEtqGVkHuoBAbW%2BZJ%2FAQ8&X-Amz-Signature=198630085a73b6a3a04c25cd39f8d5827772f120c4e9528330e1d8416b8c9c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGH2AGI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCvI29560Uq7ai7zF%2F88HA4zwJu%2Ftoqv4n3%2FYGvP8JaXgIgY9dnmYgt9dkM7lGEE6sX6Xp3ISitOtRc8QJzsGDU9CkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXz8Lc%2FKQ0ZaU9i8ircAwrmi80BMCgO6iKI40rqTWH9%2Fu2Yaecfed1nugWhXeXxfodiKC8E4W%2FqbDsP2Nfyc%2BfbpTqJ4oOHOoXAgC7yULrUK56V3qhkfD68q9MP37f2ixnqMzMSLvKJJjEOvpwhSkAl2aID2iL6zTpCK4x1MCiP4o4sOpndhJDJ%2FkXmpbifiLp%2BmLx93%2FjmEwXqKCHzAANyOGjY%2BOiIYvG4rQjn67hcgO5Ua%2Fe%2BAFy2QVufncSv6ZpU4VrrJHpf6%2BpxZox71EEhfL%2FbGimJ0xrDwbzJvyQQP3fa%2FjQvg13GYAmzLp%2F%2FBRbkH1DF4eUQWql58unGFjDPI8yZPZbg8Sr6ziDASLqwL%2FVEHn9m7bNRNGk1i8UlRAO9CnPR3%2BiEBzDc7DyVltsLCkBe1GMrL1CHkgli2zeSVQiqeFeeIaOKiUzoQEk85C6zOpIeYUwcsxsAtSdJ%2FavPAw2xSp1r4hkJEDklPtWKTbx3oQhT%2BLuk1UNRD%2FSMQb2FBlYWZ%2B3tHZ1OPZHRPWy2uIzdJ5JdKFBZPP68cFH0tSlKPY7xZvcUvL4fsjvTxKTPOxeJDfzcxhB0i28Hu3RPwYLJCv7Zw6mDQAk732Nd5zKElZEIonrfGiJrGcpwmBB9q%2FqY%2BSlxMJ9CMMCk5r8GOqUBAikN%2Fcmp00JGW9QGw3ggrLIGz8DAeSmJUirEeRf36MVl7KO%2B0BEwnyv2jZdSKMrVIDrIRd5kYd4a9mrP5JCGeuOSG95tiXhm8%2FyNEo3ZepNmoa7apta5%2BFbFFPM23b0WfwNq8IdzRn2yciQ1m4adZR0Wg3gMJTSJrbI98do9JKd9Kya2atwua5N9IlK7Qb7d7iZqP4qjEtqGVkHuoBAbW%2BZJ%2FAQ8&X-Amz-Signature=ca71f21b41ad8652d934557902cbbf885de69de610f9a6faca6bac8d62f0ef15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
