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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PX4SVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCGFkFy49BXJDfHN%2BFrhPFeb4HqgRoMQJhHxMzKvxRhhAIhAKjyjkNkJR27WWRFrZbMAmH6uz4nSXNt4CY9IJdI3McoKv8DCEkQABoMNjM3NDIzMTgzODA1IgwJwMItYWREZUJDwiAq3APvkTE8pD3OvUnG%2B9Qe5DmrQV%2Fdvg9zEsgatQkP5IAsTCmK5Y1EWHbadmxtQo5nq65XffwX9E5xjBPSfgQb%2FGsiZHsFcCzuIPuwdty%2FFV361kduKSlCGoKmr3uz6vdp%2BfBPhNsm7OsXHsvnzEGBImm8%2Fwx1XfyWz7YmBHwjHUisRf%2BzPhFaye5CXBLrm4zLDE0JIvTTXsP8ErnkCURyLItz%2FU%2Bgaqu5gr6a4JKxRlo5UmWDldSbVXC4o8fsvtXgQzm2OQku%2FaejBWqM%2Fue04ZsgrIvI7SHjTpzLOM9ra%2F00rruqfKnCMHGh5ChaH%2FdaXvydg7nZ2C7Qqq0M0xl2%2FfQCYlqtFRicsFn1W4DIIGAhrH92X%2Bny%2Fi1ipSxjPt09hLTyZ7JJaoGqvqSaoxBBnTjw1rQh7DZzA28tGbSa5K9SfADyzI6M%2BOil8Hmhulj5MV%2F6YCP2MNlHUJ9mlnRGvu73zn8RIy9E2dmikD%2FGAym44kKopBzZeGVRlY4B%2BSxctMmqNuZd%2F3ZrAsPfUY%2BAIg%2F7pmGaGWRXCAbdvTob2I8YPBNlpyzppcV3jW0%2BfEkwp5EPDUKLV2npLiAQmHzm2VCD8zQxYxlG2HcBvqL3zCSpK0cyn7j88H0R8Veo%2FzD3hIfCBjqkAXWk94Mh0AZjVZbzsnFj2TK5ql5HJuTFZJdfk44J%2B49tMNnEsC%2By8iA0PgXF4UJHPZ3Gzd6c0Y2yVOFfrGOWBMVtFK%2BnLe34SzfGajjt30ZWR8KrKEY6ZAep8iSnHNH6kZUhFme6FjEzxpHDu3oE3mMYTLDlnjbQ31dmIkU6teo88%2FqrIN8Lsn5XqiFhbHJ4%2FqCp%2Fj%2F89kPNIuFt0nSsiCgsUWVq&X-Amz-Signature=f237a7374a81b9c0f8078a94ff1b0d16160feee2d4326509732f1722643f2126&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PX4SVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCGFkFy49BXJDfHN%2BFrhPFeb4HqgRoMQJhHxMzKvxRhhAIhAKjyjkNkJR27WWRFrZbMAmH6uz4nSXNt4CY9IJdI3McoKv8DCEkQABoMNjM3NDIzMTgzODA1IgwJwMItYWREZUJDwiAq3APvkTE8pD3OvUnG%2B9Qe5DmrQV%2Fdvg9zEsgatQkP5IAsTCmK5Y1EWHbadmxtQo5nq65XffwX9E5xjBPSfgQb%2FGsiZHsFcCzuIPuwdty%2FFV361kduKSlCGoKmr3uz6vdp%2BfBPhNsm7OsXHsvnzEGBImm8%2Fwx1XfyWz7YmBHwjHUisRf%2BzPhFaye5CXBLrm4zLDE0JIvTTXsP8ErnkCURyLItz%2FU%2Bgaqu5gr6a4JKxRlo5UmWDldSbVXC4o8fsvtXgQzm2OQku%2FaejBWqM%2Fue04ZsgrIvI7SHjTpzLOM9ra%2F00rruqfKnCMHGh5ChaH%2FdaXvydg7nZ2C7Qqq0M0xl2%2FfQCYlqtFRicsFn1W4DIIGAhrH92X%2Bny%2Fi1ipSxjPt09hLTyZ7JJaoGqvqSaoxBBnTjw1rQh7DZzA28tGbSa5K9SfADyzI6M%2BOil8Hmhulj5MV%2F6YCP2MNlHUJ9mlnRGvu73zn8RIy9E2dmikD%2FGAym44kKopBzZeGVRlY4B%2BSxctMmqNuZd%2F3ZrAsPfUY%2BAIg%2F7pmGaGWRXCAbdvTob2I8YPBNlpyzppcV3jW0%2BfEkwp5EPDUKLV2npLiAQmHzm2VCD8zQxYxlG2HcBvqL3zCSpK0cyn7j88H0R8Veo%2FzD3hIfCBjqkAXWk94Mh0AZjVZbzsnFj2TK5ql5HJuTFZJdfk44J%2B49tMNnEsC%2By8iA0PgXF4UJHPZ3Gzd6c0Y2yVOFfrGOWBMVtFK%2BnLe34SzfGajjt30ZWR8KrKEY6ZAep8iSnHNH6kZUhFme6FjEzxpHDu3oE3mMYTLDlnjbQ31dmIkU6teo88%2FqrIN8Lsn5XqiFhbHJ4%2FqCp%2Fj%2F89kPNIuFt0nSsiCgsUWVq&X-Amz-Signature=ee6c21b99a92a96f178e56fdfdcef357db6bc8ae773e3a16985a4715a8bfad19&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PX4SVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCGFkFy49BXJDfHN%2BFrhPFeb4HqgRoMQJhHxMzKvxRhhAIhAKjyjkNkJR27WWRFrZbMAmH6uz4nSXNt4CY9IJdI3McoKv8DCEkQABoMNjM3NDIzMTgzODA1IgwJwMItYWREZUJDwiAq3APvkTE8pD3OvUnG%2B9Qe5DmrQV%2Fdvg9zEsgatQkP5IAsTCmK5Y1EWHbadmxtQo5nq65XffwX9E5xjBPSfgQb%2FGsiZHsFcCzuIPuwdty%2FFV361kduKSlCGoKmr3uz6vdp%2BfBPhNsm7OsXHsvnzEGBImm8%2Fwx1XfyWz7YmBHwjHUisRf%2BzPhFaye5CXBLrm4zLDE0JIvTTXsP8ErnkCURyLItz%2FU%2Bgaqu5gr6a4JKxRlo5UmWDldSbVXC4o8fsvtXgQzm2OQku%2FaejBWqM%2Fue04ZsgrIvI7SHjTpzLOM9ra%2F00rruqfKnCMHGh5ChaH%2FdaXvydg7nZ2C7Qqq0M0xl2%2FfQCYlqtFRicsFn1W4DIIGAhrH92X%2Bny%2Fi1ipSxjPt09hLTyZ7JJaoGqvqSaoxBBnTjw1rQh7DZzA28tGbSa5K9SfADyzI6M%2BOil8Hmhulj5MV%2F6YCP2MNlHUJ9mlnRGvu73zn8RIy9E2dmikD%2FGAym44kKopBzZeGVRlY4B%2BSxctMmqNuZd%2F3ZrAsPfUY%2BAIg%2F7pmGaGWRXCAbdvTob2I8YPBNlpyzppcV3jW0%2BfEkwp5EPDUKLV2npLiAQmHzm2VCD8zQxYxlG2HcBvqL3zCSpK0cyn7j88H0R8Veo%2FzD3hIfCBjqkAXWk94Mh0AZjVZbzsnFj2TK5ql5HJuTFZJdfk44J%2B49tMNnEsC%2By8iA0PgXF4UJHPZ3Gzd6c0Y2yVOFfrGOWBMVtFK%2BnLe34SzfGajjt30ZWR8KrKEY6ZAep8iSnHNH6kZUhFme6FjEzxpHDu3oE3mMYTLDlnjbQ31dmIkU6teo88%2FqrIN8Lsn5XqiFhbHJ4%2FqCp%2Fj%2F89kPNIuFt0nSsiCgsUWVq&X-Amz-Signature=ac94f412e9f14502bc042eee350c86e452c77ca28eda8dcdeffaf4a467779ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PX4SVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCGFkFy49BXJDfHN%2BFrhPFeb4HqgRoMQJhHxMzKvxRhhAIhAKjyjkNkJR27WWRFrZbMAmH6uz4nSXNt4CY9IJdI3McoKv8DCEkQABoMNjM3NDIzMTgzODA1IgwJwMItYWREZUJDwiAq3APvkTE8pD3OvUnG%2B9Qe5DmrQV%2Fdvg9zEsgatQkP5IAsTCmK5Y1EWHbadmxtQo5nq65XffwX9E5xjBPSfgQb%2FGsiZHsFcCzuIPuwdty%2FFV361kduKSlCGoKmr3uz6vdp%2BfBPhNsm7OsXHsvnzEGBImm8%2Fwx1XfyWz7YmBHwjHUisRf%2BzPhFaye5CXBLrm4zLDE0JIvTTXsP8ErnkCURyLItz%2FU%2Bgaqu5gr6a4JKxRlo5UmWDldSbVXC4o8fsvtXgQzm2OQku%2FaejBWqM%2Fue04ZsgrIvI7SHjTpzLOM9ra%2F00rruqfKnCMHGh5ChaH%2FdaXvydg7nZ2C7Qqq0M0xl2%2FfQCYlqtFRicsFn1W4DIIGAhrH92X%2Bny%2Fi1ipSxjPt09hLTyZ7JJaoGqvqSaoxBBnTjw1rQh7DZzA28tGbSa5K9SfADyzI6M%2BOil8Hmhulj5MV%2F6YCP2MNlHUJ9mlnRGvu73zn8RIy9E2dmikD%2FGAym44kKopBzZeGVRlY4B%2BSxctMmqNuZd%2F3ZrAsPfUY%2BAIg%2F7pmGaGWRXCAbdvTob2I8YPBNlpyzppcV3jW0%2BfEkwp5EPDUKLV2npLiAQmHzm2VCD8zQxYxlG2HcBvqL3zCSpK0cyn7j88H0R8Veo%2FzD3hIfCBjqkAXWk94Mh0AZjVZbzsnFj2TK5ql5HJuTFZJdfk44J%2B49tMNnEsC%2By8iA0PgXF4UJHPZ3Gzd6c0Y2yVOFfrGOWBMVtFK%2BnLe34SzfGajjt30ZWR8KrKEY6ZAep8iSnHNH6kZUhFme6FjEzxpHDu3oE3mMYTLDlnjbQ31dmIkU6teo88%2FqrIN8Lsn5XqiFhbHJ4%2FqCp%2Fj%2F89kPNIuFt0nSsiCgsUWVq&X-Amz-Signature=39bbc65026cbb5ee1af8e354de55c0e4efa2bc27532f9c22241e22647271d3e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PX4SVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCGFkFy49BXJDfHN%2BFrhPFeb4HqgRoMQJhHxMzKvxRhhAIhAKjyjkNkJR27WWRFrZbMAmH6uz4nSXNt4CY9IJdI3McoKv8DCEkQABoMNjM3NDIzMTgzODA1IgwJwMItYWREZUJDwiAq3APvkTE8pD3OvUnG%2B9Qe5DmrQV%2Fdvg9zEsgatQkP5IAsTCmK5Y1EWHbadmxtQo5nq65XffwX9E5xjBPSfgQb%2FGsiZHsFcCzuIPuwdty%2FFV361kduKSlCGoKmr3uz6vdp%2BfBPhNsm7OsXHsvnzEGBImm8%2Fwx1XfyWz7YmBHwjHUisRf%2BzPhFaye5CXBLrm4zLDE0JIvTTXsP8ErnkCURyLItz%2FU%2Bgaqu5gr6a4JKxRlo5UmWDldSbVXC4o8fsvtXgQzm2OQku%2FaejBWqM%2Fue04ZsgrIvI7SHjTpzLOM9ra%2F00rruqfKnCMHGh5ChaH%2FdaXvydg7nZ2C7Qqq0M0xl2%2FfQCYlqtFRicsFn1W4DIIGAhrH92X%2Bny%2Fi1ipSxjPt09hLTyZ7JJaoGqvqSaoxBBnTjw1rQh7DZzA28tGbSa5K9SfADyzI6M%2BOil8Hmhulj5MV%2F6YCP2MNlHUJ9mlnRGvu73zn8RIy9E2dmikD%2FGAym44kKopBzZeGVRlY4B%2BSxctMmqNuZd%2F3ZrAsPfUY%2BAIg%2F7pmGaGWRXCAbdvTob2I8YPBNlpyzppcV3jW0%2BfEkwp5EPDUKLV2npLiAQmHzm2VCD8zQxYxlG2HcBvqL3zCSpK0cyn7j88H0R8Veo%2FzD3hIfCBjqkAXWk94Mh0AZjVZbzsnFj2TK5ql5HJuTFZJdfk44J%2B49tMNnEsC%2By8iA0PgXF4UJHPZ3Gzd6c0Y2yVOFfrGOWBMVtFK%2BnLe34SzfGajjt30ZWR8KrKEY6ZAep8iSnHNH6kZUhFme6FjEzxpHDu3oE3mMYTLDlnjbQ31dmIkU6teo88%2FqrIN8Lsn5XqiFhbHJ4%2FqCp%2Fj%2F89kPNIuFt0nSsiCgsUWVq&X-Amz-Signature=d1eb78e13df8a78c6984ea62b5fbc7d44c2d7706f2c5766f0b2973cbea160029&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PX4SVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCGFkFy49BXJDfHN%2BFrhPFeb4HqgRoMQJhHxMzKvxRhhAIhAKjyjkNkJR27WWRFrZbMAmH6uz4nSXNt4CY9IJdI3McoKv8DCEkQABoMNjM3NDIzMTgzODA1IgwJwMItYWREZUJDwiAq3APvkTE8pD3OvUnG%2B9Qe5DmrQV%2Fdvg9zEsgatQkP5IAsTCmK5Y1EWHbadmxtQo5nq65XffwX9E5xjBPSfgQb%2FGsiZHsFcCzuIPuwdty%2FFV361kduKSlCGoKmr3uz6vdp%2BfBPhNsm7OsXHsvnzEGBImm8%2Fwx1XfyWz7YmBHwjHUisRf%2BzPhFaye5CXBLrm4zLDE0JIvTTXsP8ErnkCURyLItz%2FU%2Bgaqu5gr6a4JKxRlo5UmWDldSbVXC4o8fsvtXgQzm2OQku%2FaejBWqM%2Fue04ZsgrIvI7SHjTpzLOM9ra%2F00rruqfKnCMHGh5ChaH%2FdaXvydg7nZ2C7Qqq0M0xl2%2FfQCYlqtFRicsFn1W4DIIGAhrH92X%2Bny%2Fi1ipSxjPt09hLTyZ7JJaoGqvqSaoxBBnTjw1rQh7DZzA28tGbSa5K9SfADyzI6M%2BOil8Hmhulj5MV%2F6YCP2MNlHUJ9mlnRGvu73zn8RIy9E2dmikD%2FGAym44kKopBzZeGVRlY4B%2BSxctMmqNuZd%2F3ZrAsPfUY%2BAIg%2F7pmGaGWRXCAbdvTob2I8YPBNlpyzppcV3jW0%2BfEkwp5EPDUKLV2npLiAQmHzm2VCD8zQxYxlG2HcBvqL3zCSpK0cyn7j88H0R8Veo%2FzD3hIfCBjqkAXWk94Mh0AZjVZbzsnFj2TK5ql5HJuTFZJdfk44J%2B49tMNnEsC%2By8iA0PgXF4UJHPZ3Gzd6c0Y2yVOFfrGOWBMVtFK%2BnLe34SzfGajjt30ZWR8KrKEY6ZAep8iSnHNH6kZUhFme6FjEzxpHDu3oE3mMYTLDlnjbQ31dmIkU6teo88%2FqrIN8Lsn5XqiFhbHJ4%2FqCp%2Fj%2F89kPNIuFt0nSsiCgsUWVq&X-Amz-Signature=3f2857598feb6bc2c32020de0e1f889a8b736a7bde5aa3eb22fc5e17851072a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PX4SVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCGFkFy49BXJDfHN%2BFrhPFeb4HqgRoMQJhHxMzKvxRhhAIhAKjyjkNkJR27WWRFrZbMAmH6uz4nSXNt4CY9IJdI3McoKv8DCEkQABoMNjM3NDIzMTgzODA1IgwJwMItYWREZUJDwiAq3APvkTE8pD3OvUnG%2B9Qe5DmrQV%2Fdvg9zEsgatQkP5IAsTCmK5Y1EWHbadmxtQo5nq65XffwX9E5xjBPSfgQb%2FGsiZHsFcCzuIPuwdty%2FFV361kduKSlCGoKmr3uz6vdp%2BfBPhNsm7OsXHsvnzEGBImm8%2Fwx1XfyWz7YmBHwjHUisRf%2BzPhFaye5CXBLrm4zLDE0JIvTTXsP8ErnkCURyLItz%2FU%2Bgaqu5gr6a4JKxRlo5UmWDldSbVXC4o8fsvtXgQzm2OQku%2FaejBWqM%2Fue04ZsgrIvI7SHjTpzLOM9ra%2F00rruqfKnCMHGh5ChaH%2FdaXvydg7nZ2C7Qqq0M0xl2%2FfQCYlqtFRicsFn1W4DIIGAhrH92X%2Bny%2Fi1ipSxjPt09hLTyZ7JJaoGqvqSaoxBBnTjw1rQh7DZzA28tGbSa5K9SfADyzI6M%2BOil8Hmhulj5MV%2F6YCP2MNlHUJ9mlnRGvu73zn8RIy9E2dmikD%2FGAym44kKopBzZeGVRlY4B%2BSxctMmqNuZd%2F3ZrAsPfUY%2BAIg%2F7pmGaGWRXCAbdvTob2I8YPBNlpyzppcV3jW0%2BfEkwp5EPDUKLV2npLiAQmHzm2VCD8zQxYxlG2HcBvqL3zCSpK0cyn7j88H0R8Veo%2FzD3hIfCBjqkAXWk94Mh0AZjVZbzsnFj2TK5ql5HJuTFZJdfk44J%2B49tMNnEsC%2By8iA0PgXF4UJHPZ3Gzd6c0Y2yVOFfrGOWBMVtFK%2BnLe34SzfGajjt30ZWR8KrKEY6ZAep8iSnHNH6kZUhFme6FjEzxpHDu3oE3mMYTLDlnjbQ31dmIkU6teo88%2FqrIN8Lsn5XqiFhbHJ4%2FqCp%2Fj%2F89kPNIuFt0nSsiCgsUWVq&X-Amz-Signature=7b1bb5a06f45160710e82c77ae452fa0f07cbc0b549f42fdfb89d7addf26bedb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PX4SVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCGFkFy49BXJDfHN%2BFrhPFeb4HqgRoMQJhHxMzKvxRhhAIhAKjyjkNkJR27WWRFrZbMAmH6uz4nSXNt4CY9IJdI3McoKv8DCEkQABoMNjM3NDIzMTgzODA1IgwJwMItYWREZUJDwiAq3APvkTE8pD3OvUnG%2B9Qe5DmrQV%2Fdvg9zEsgatQkP5IAsTCmK5Y1EWHbadmxtQo5nq65XffwX9E5xjBPSfgQb%2FGsiZHsFcCzuIPuwdty%2FFV361kduKSlCGoKmr3uz6vdp%2BfBPhNsm7OsXHsvnzEGBImm8%2Fwx1XfyWz7YmBHwjHUisRf%2BzPhFaye5CXBLrm4zLDE0JIvTTXsP8ErnkCURyLItz%2FU%2Bgaqu5gr6a4JKxRlo5UmWDldSbVXC4o8fsvtXgQzm2OQku%2FaejBWqM%2Fue04ZsgrIvI7SHjTpzLOM9ra%2F00rruqfKnCMHGh5ChaH%2FdaXvydg7nZ2C7Qqq0M0xl2%2FfQCYlqtFRicsFn1W4DIIGAhrH92X%2Bny%2Fi1ipSxjPt09hLTyZ7JJaoGqvqSaoxBBnTjw1rQh7DZzA28tGbSa5K9SfADyzI6M%2BOil8Hmhulj5MV%2F6YCP2MNlHUJ9mlnRGvu73zn8RIy9E2dmikD%2FGAym44kKopBzZeGVRlY4B%2BSxctMmqNuZd%2F3ZrAsPfUY%2BAIg%2F7pmGaGWRXCAbdvTob2I8YPBNlpyzppcV3jW0%2BfEkwp5EPDUKLV2npLiAQmHzm2VCD8zQxYxlG2HcBvqL3zCSpK0cyn7j88H0R8Veo%2FzD3hIfCBjqkAXWk94Mh0AZjVZbzsnFj2TK5ql5HJuTFZJdfk44J%2B49tMNnEsC%2By8iA0PgXF4UJHPZ3Gzd6c0Y2yVOFfrGOWBMVtFK%2BnLe34SzfGajjt30ZWR8KrKEY6ZAep8iSnHNH6kZUhFme6FjEzxpHDu3oE3mMYTLDlnjbQ31dmIkU6teo88%2FqrIN8Lsn5XqiFhbHJ4%2FqCp%2Fj%2F89kPNIuFt0nSsiCgsUWVq&X-Amz-Signature=7c679d7126875e0fba412faac8f4bad118101c8c699ff5474887e4be236d4d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
