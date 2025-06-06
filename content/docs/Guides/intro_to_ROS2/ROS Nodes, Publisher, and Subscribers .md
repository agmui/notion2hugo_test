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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSMVZHO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXBrsqHDdDFZ4UNNDelhyVmQFx8PCm6FZlRNy3CkLRJAIhAMHBJ1D%2FSc5FoiNjzULiTtep7PAUfrOzw8uZijbNxZZCKv8DCF0QABoMNjM3NDIzMTgzODA1IgwxAzjz%2BYfBvdUTKPMq3AOUcSMdhbyDtrjoTIl4ZbSoCe6MYIiwrdzpEFHpg52pXcK8Wyv11KhZJnFaf94HohqfIgJr%2FuXmlup7P2aCFiaBMlVGPWfnBznwXIPC%2FmS61OPW1K%2B%2BEpwdyQkWZBzcsl1Anq66L3EPDX5rFltuQFM26%2BjutcdgVjdUR1fujYtbhwoUfMBGzL6k0dGa%2F28S2gVzo%2B3khARD6ksOs%2Bir%2Bp%2BSUQHsK3QT3zrLBh1UnC%2BW6eIfyVwoDsGsgI6f8RMr%2B3uOnUg1lS3IU%2B7EGzQL9I%2F3P4RJs6SRCy%2BAMffx69ldYEEhXwznpy7ZA7AnUOxsa2SsPL8Gg%2Br5fw%2BxpZqTC4i8yMLNvGRo0no4rOSRKACqCKI8jp0X9X8%2Bq6y0SPrHbAabW0P1b4jBfE8beT0i1ep4GFbJNxKr3PJrHat6%2BETKEHAZl%2Bs%2FWogsvzK87l9GrH7P2MjnMGWtZyvpYPFlmGu5GXcM5LLvL9VJvoqMUsQf4aEzNbHsUkraWr7cRddMfYItZbOy1qUL009AoFIx%2BmS0VN4ap2q9XplOSv%2Bc%2B9NzomDUfnTs65%2B46Qxz9ZBCB9e%2BL3%2FUloEs3cRN4vAw2v2XvhBBFa1A3ykxoDZm%2BzaP72OHBfUr7ikfCcMjuDDfvYvCBjqkAezmc0TmQMcoaUjMXRfsbCdUl9X1pHCnAvAaZX5FvwW0LLXz78%2B0MUxrQs5naYewjO%2BaI4BofQNPZ4JodO64nRVBpeGkIlVQdt9Mv85clwfupyYxOnK%2FBFYEd1OlDHCE%2F3WkqvKTPKfop75SdVhTdVfXHPaMwSb7YbU%2Bc1FlUE0BProKXqzxv5zCV0bv4nt6SPHCAlGl4jqCZTV0sAIP0LCOXOLp&X-Amz-Signature=052d35de5efa155e07870a34fafeef904abfbeb0df0db534798b2651f09880f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSMVZHO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXBrsqHDdDFZ4UNNDelhyVmQFx8PCm6FZlRNy3CkLRJAIhAMHBJ1D%2FSc5FoiNjzULiTtep7PAUfrOzw8uZijbNxZZCKv8DCF0QABoMNjM3NDIzMTgzODA1IgwxAzjz%2BYfBvdUTKPMq3AOUcSMdhbyDtrjoTIl4ZbSoCe6MYIiwrdzpEFHpg52pXcK8Wyv11KhZJnFaf94HohqfIgJr%2FuXmlup7P2aCFiaBMlVGPWfnBznwXIPC%2FmS61OPW1K%2B%2BEpwdyQkWZBzcsl1Anq66L3EPDX5rFltuQFM26%2BjutcdgVjdUR1fujYtbhwoUfMBGzL6k0dGa%2F28S2gVzo%2B3khARD6ksOs%2Bir%2Bp%2BSUQHsK3QT3zrLBh1UnC%2BW6eIfyVwoDsGsgI6f8RMr%2B3uOnUg1lS3IU%2B7EGzQL9I%2F3P4RJs6SRCy%2BAMffx69ldYEEhXwznpy7ZA7AnUOxsa2SsPL8Gg%2Br5fw%2BxpZqTC4i8yMLNvGRo0no4rOSRKACqCKI8jp0X9X8%2Bq6y0SPrHbAabW0P1b4jBfE8beT0i1ep4GFbJNxKr3PJrHat6%2BETKEHAZl%2Bs%2FWogsvzK87l9GrH7P2MjnMGWtZyvpYPFlmGu5GXcM5LLvL9VJvoqMUsQf4aEzNbHsUkraWr7cRddMfYItZbOy1qUL009AoFIx%2BmS0VN4ap2q9XplOSv%2Bc%2B9NzomDUfnTs65%2B46Qxz9ZBCB9e%2BL3%2FUloEs3cRN4vAw2v2XvhBBFa1A3ykxoDZm%2BzaP72OHBfUr7ikfCcMjuDDfvYvCBjqkAezmc0TmQMcoaUjMXRfsbCdUl9X1pHCnAvAaZX5FvwW0LLXz78%2B0MUxrQs5naYewjO%2BaI4BofQNPZ4JodO64nRVBpeGkIlVQdt9Mv85clwfupyYxOnK%2FBFYEd1OlDHCE%2F3WkqvKTPKfop75SdVhTdVfXHPaMwSb7YbU%2Bc1FlUE0BProKXqzxv5zCV0bv4nt6SPHCAlGl4jqCZTV0sAIP0LCOXOLp&X-Amz-Signature=51df1ad79bccd70719d60c451d5f250a0e33322bad7e1731f520242d6fb15200&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSMVZHO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXBrsqHDdDFZ4UNNDelhyVmQFx8PCm6FZlRNy3CkLRJAIhAMHBJ1D%2FSc5FoiNjzULiTtep7PAUfrOzw8uZijbNxZZCKv8DCF0QABoMNjM3NDIzMTgzODA1IgwxAzjz%2BYfBvdUTKPMq3AOUcSMdhbyDtrjoTIl4ZbSoCe6MYIiwrdzpEFHpg52pXcK8Wyv11KhZJnFaf94HohqfIgJr%2FuXmlup7P2aCFiaBMlVGPWfnBznwXIPC%2FmS61OPW1K%2B%2BEpwdyQkWZBzcsl1Anq66L3EPDX5rFltuQFM26%2BjutcdgVjdUR1fujYtbhwoUfMBGzL6k0dGa%2F28S2gVzo%2B3khARD6ksOs%2Bir%2Bp%2BSUQHsK3QT3zrLBh1UnC%2BW6eIfyVwoDsGsgI6f8RMr%2B3uOnUg1lS3IU%2B7EGzQL9I%2F3P4RJs6SRCy%2BAMffx69ldYEEhXwznpy7ZA7AnUOxsa2SsPL8Gg%2Br5fw%2BxpZqTC4i8yMLNvGRo0no4rOSRKACqCKI8jp0X9X8%2Bq6y0SPrHbAabW0P1b4jBfE8beT0i1ep4GFbJNxKr3PJrHat6%2BETKEHAZl%2Bs%2FWogsvzK87l9GrH7P2MjnMGWtZyvpYPFlmGu5GXcM5LLvL9VJvoqMUsQf4aEzNbHsUkraWr7cRddMfYItZbOy1qUL009AoFIx%2BmS0VN4ap2q9XplOSv%2Bc%2B9NzomDUfnTs65%2B46Qxz9ZBCB9e%2BL3%2FUloEs3cRN4vAw2v2XvhBBFa1A3ykxoDZm%2BzaP72OHBfUr7ikfCcMjuDDfvYvCBjqkAezmc0TmQMcoaUjMXRfsbCdUl9X1pHCnAvAaZX5FvwW0LLXz78%2B0MUxrQs5naYewjO%2BaI4BofQNPZ4JodO64nRVBpeGkIlVQdt9Mv85clwfupyYxOnK%2FBFYEd1OlDHCE%2F3WkqvKTPKfop75SdVhTdVfXHPaMwSb7YbU%2Bc1FlUE0BProKXqzxv5zCV0bv4nt6SPHCAlGl4jqCZTV0sAIP0LCOXOLp&X-Amz-Signature=a34a08b418d26b52f812f6718e3c2351f03707a8cd33fa497a5b0f6818e4f68a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSMVZHO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXBrsqHDdDFZ4UNNDelhyVmQFx8PCm6FZlRNy3CkLRJAIhAMHBJ1D%2FSc5FoiNjzULiTtep7PAUfrOzw8uZijbNxZZCKv8DCF0QABoMNjM3NDIzMTgzODA1IgwxAzjz%2BYfBvdUTKPMq3AOUcSMdhbyDtrjoTIl4ZbSoCe6MYIiwrdzpEFHpg52pXcK8Wyv11KhZJnFaf94HohqfIgJr%2FuXmlup7P2aCFiaBMlVGPWfnBznwXIPC%2FmS61OPW1K%2B%2BEpwdyQkWZBzcsl1Anq66L3EPDX5rFltuQFM26%2BjutcdgVjdUR1fujYtbhwoUfMBGzL6k0dGa%2F28S2gVzo%2B3khARD6ksOs%2Bir%2Bp%2BSUQHsK3QT3zrLBh1UnC%2BW6eIfyVwoDsGsgI6f8RMr%2B3uOnUg1lS3IU%2B7EGzQL9I%2F3P4RJs6SRCy%2BAMffx69ldYEEhXwznpy7ZA7AnUOxsa2SsPL8Gg%2Br5fw%2BxpZqTC4i8yMLNvGRo0no4rOSRKACqCKI8jp0X9X8%2Bq6y0SPrHbAabW0P1b4jBfE8beT0i1ep4GFbJNxKr3PJrHat6%2BETKEHAZl%2Bs%2FWogsvzK87l9GrH7P2MjnMGWtZyvpYPFlmGu5GXcM5LLvL9VJvoqMUsQf4aEzNbHsUkraWr7cRddMfYItZbOy1qUL009AoFIx%2BmS0VN4ap2q9XplOSv%2Bc%2B9NzomDUfnTs65%2B46Qxz9ZBCB9e%2BL3%2FUloEs3cRN4vAw2v2XvhBBFa1A3ykxoDZm%2BzaP72OHBfUr7ikfCcMjuDDfvYvCBjqkAezmc0TmQMcoaUjMXRfsbCdUl9X1pHCnAvAaZX5FvwW0LLXz78%2B0MUxrQs5naYewjO%2BaI4BofQNPZ4JodO64nRVBpeGkIlVQdt9Mv85clwfupyYxOnK%2FBFYEd1OlDHCE%2F3WkqvKTPKfop75SdVhTdVfXHPaMwSb7YbU%2Bc1FlUE0BProKXqzxv5zCV0bv4nt6SPHCAlGl4jqCZTV0sAIP0LCOXOLp&X-Amz-Signature=b7e708fe644417e566f55709acfc6345e5ab09969119d761bb6277411260cf1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSMVZHO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXBrsqHDdDFZ4UNNDelhyVmQFx8PCm6FZlRNy3CkLRJAIhAMHBJ1D%2FSc5FoiNjzULiTtep7PAUfrOzw8uZijbNxZZCKv8DCF0QABoMNjM3NDIzMTgzODA1IgwxAzjz%2BYfBvdUTKPMq3AOUcSMdhbyDtrjoTIl4ZbSoCe6MYIiwrdzpEFHpg52pXcK8Wyv11KhZJnFaf94HohqfIgJr%2FuXmlup7P2aCFiaBMlVGPWfnBznwXIPC%2FmS61OPW1K%2B%2BEpwdyQkWZBzcsl1Anq66L3EPDX5rFltuQFM26%2BjutcdgVjdUR1fujYtbhwoUfMBGzL6k0dGa%2F28S2gVzo%2B3khARD6ksOs%2Bir%2Bp%2BSUQHsK3QT3zrLBh1UnC%2BW6eIfyVwoDsGsgI6f8RMr%2B3uOnUg1lS3IU%2B7EGzQL9I%2F3P4RJs6SRCy%2BAMffx69ldYEEhXwznpy7ZA7AnUOxsa2SsPL8Gg%2Br5fw%2BxpZqTC4i8yMLNvGRo0no4rOSRKACqCKI8jp0X9X8%2Bq6y0SPrHbAabW0P1b4jBfE8beT0i1ep4GFbJNxKr3PJrHat6%2BETKEHAZl%2Bs%2FWogsvzK87l9GrH7P2MjnMGWtZyvpYPFlmGu5GXcM5LLvL9VJvoqMUsQf4aEzNbHsUkraWr7cRddMfYItZbOy1qUL009AoFIx%2BmS0VN4ap2q9XplOSv%2Bc%2B9NzomDUfnTs65%2B46Qxz9ZBCB9e%2BL3%2FUloEs3cRN4vAw2v2XvhBBFa1A3ykxoDZm%2BzaP72OHBfUr7ikfCcMjuDDfvYvCBjqkAezmc0TmQMcoaUjMXRfsbCdUl9X1pHCnAvAaZX5FvwW0LLXz78%2B0MUxrQs5naYewjO%2BaI4BofQNPZ4JodO64nRVBpeGkIlVQdt9Mv85clwfupyYxOnK%2FBFYEd1OlDHCE%2F3WkqvKTPKfop75SdVhTdVfXHPaMwSb7YbU%2Bc1FlUE0BProKXqzxv5zCV0bv4nt6SPHCAlGl4jqCZTV0sAIP0LCOXOLp&X-Amz-Signature=047157b714ba2dfce56c24bbff816277bf39515902a924ff70bc14f97f495fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSMVZHO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXBrsqHDdDFZ4UNNDelhyVmQFx8PCm6FZlRNy3CkLRJAIhAMHBJ1D%2FSc5FoiNjzULiTtep7PAUfrOzw8uZijbNxZZCKv8DCF0QABoMNjM3NDIzMTgzODA1IgwxAzjz%2BYfBvdUTKPMq3AOUcSMdhbyDtrjoTIl4ZbSoCe6MYIiwrdzpEFHpg52pXcK8Wyv11KhZJnFaf94HohqfIgJr%2FuXmlup7P2aCFiaBMlVGPWfnBznwXIPC%2FmS61OPW1K%2B%2BEpwdyQkWZBzcsl1Anq66L3EPDX5rFltuQFM26%2BjutcdgVjdUR1fujYtbhwoUfMBGzL6k0dGa%2F28S2gVzo%2B3khARD6ksOs%2Bir%2Bp%2BSUQHsK3QT3zrLBh1UnC%2BW6eIfyVwoDsGsgI6f8RMr%2B3uOnUg1lS3IU%2B7EGzQL9I%2F3P4RJs6SRCy%2BAMffx69ldYEEhXwznpy7ZA7AnUOxsa2SsPL8Gg%2Br5fw%2BxpZqTC4i8yMLNvGRo0no4rOSRKACqCKI8jp0X9X8%2Bq6y0SPrHbAabW0P1b4jBfE8beT0i1ep4GFbJNxKr3PJrHat6%2BETKEHAZl%2Bs%2FWogsvzK87l9GrH7P2MjnMGWtZyvpYPFlmGu5GXcM5LLvL9VJvoqMUsQf4aEzNbHsUkraWr7cRddMfYItZbOy1qUL009AoFIx%2BmS0VN4ap2q9XplOSv%2Bc%2B9NzomDUfnTs65%2B46Qxz9ZBCB9e%2BL3%2FUloEs3cRN4vAw2v2XvhBBFa1A3ykxoDZm%2BzaP72OHBfUr7ikfCcMjuDDfvYvCBjqkAezmc0TmQMcoaUjMXRfsbCdUl9X1pHCnAvAaZX5FvwW0LLXz78%2B0MUxrQs5naYewjO%2BaI4BofQNPZ4JodO64nRVBpeGkIlVQdt9Mv85clwfupyYxOnK%2FBFYEd1OlDHCE%2F3WkqvKTPKfop75SdVhTdVfXHPaMwSb7YbU%2Bc1FlUE0BProKXqzxv5zCV0bv4nt6SPHCAlGl4jqCZTV0sAIP0LCOXOLp&X-Amz-Signature=6cdcd99d12944c51f2155643cc988710b992025262836ce385ac70a0c49d12a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSMVZHO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXBrsqHDdDFZ4UNNDelhyVmQFx8PCm6FZlRNy3CkLRJAIhAMHBJ1D%2FSc5FoiNjzULiTtep7PAUfrOzw8uZijbNxZZCKv8DCF0QABoMNjM3NDIzMTgzODA1IgwxAzjz%2BYfBvdUTKPMq3AOUcSMdhbyDtrjoTIl4ZbSoCe6MYIiwrdzpEFHpg52pXcK8Wyv11KhZJnFaf94HohqfIgJr%2FuXmlup7P2aCFiaBMlVGPWfnBznwXIPC%2FmS61OPW1K%2B%2BEpwdyQkWZBzcsl1Anq66L3EPDX5rFltuQFM26%2BjutcdgVjdUR1fujYtbhwoUfMBGzL6k0dGa%2F28S2gVzo%2B3khARD6ksOs%2Bir%2Bp%2BSUQHsK3QT3zrLBh1UnC%2BW6eIfyVwoDsGsgI6f8RMr%2B3uOnUg1lS3IU%2B7EGzQL9I%2F3P4RJs6SRCy%2BAMffx69ldYEEhXwznpy7ZA7AnUOxsa2SsPL8Gg%2Br5fw%2BxpZqTC4i8yMLNvGRo0no4rOSRKACqCKI8jp0X9X8%2Bq6y0SPrHbAabW0P1b4jBfE8beT0i1ep4GFbJNxKr3PJrHat6%2BETKEHAZl%2Bs%2FWogsvzK87l9GrH7P2MjnMGWtZyvpYPFlmGu5GXcM5LLvL9VJvoqMUsQf4aEzNbHsUkraWr7cRddMfYItZbOy1qUL009AoFIx%2BmS0VN4ap2q9XplOSv%2Bc%2B9NzomDUfnTs65%2B46Qxz9ZBCB9e%2BL3%2FUloEs3cRN4vAw2v2XvhBBFa1A3ykxoDZm%2BzaP72OHBfUr7ikfCcMjuDDfvYvCBjqkAezmc0TmQMcoaUjMXRfsbCdUl9X1pHCnAvAaZX5FvwW0LLXz78%2B0MUxrQs5naYewjO%2BaI4BofQNPZ4JodO64nRVBpeGkIlVQdt9Mv85clwfupyYxOnK%2FBFYEd1OlDHCE%2F3WkqvKTPKfop75SdVhTdVfXHPaMwSb7YbU%2Bc1FlUE0BProKXqzxv5zCV0bv4nt6SPHCAlGl4jqCZTV0sAIP0LCOXOLp&X-Amz-Signature=7c613f3b8921a4da2d985b9cf5d58b1e84f4c46044608468d0feae37662c92cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSMVZHO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXBrsqHDdDFZ4UNNDelhyVmQFx8PCm6FZlRNy3CkLRJAIhAMHBJ1D%2FSc5FoiNjzULiTtep7PAUfrOzw8uZijbNxZZCKv8DCF0QABoMNjM3NDIzMTgzODA1IgwxAzjz%2BYfBvdUTKPMq3AOUcSMdhbyDtrjoTIl4ZbSoCe6MYIiwrdzpEFHpg52pXcK8Wyv11KhZJnFaf94HohqfIgJr%2FuXmlup7P2aCFiaBMlVGPWfnBznwXIPC%2FmS61OPW1K%2B%2BEpwdyQkWZBzcsl1Anq66L3EPDX5rFltuQFM26%2BjutcdgVjdUR1fujYtbhwoUfMBGzL6k0dGa%2F28S2gVzo%2B3khARD6ksOs%2Bir%2Bp%2BSUQHsK3QT3zrLBh1UnC%2BW6eIfyVwoDsGsgI6f8RMr%2B3uOnUg1lS3IU%2B7EGzQL9I%2F3P4RJs6SRCy%2BAMffx69ldYEEhXwznpy7ZA7AnUOxsa2SsPL8Gg%2Br5fw%2BxpZqTC4i8yMLNvGRo0no4rOSRKACqCKI8jp0X9X8%2Bq6y0SPrHbAabW0P1b4jBfE8beT0i1ep4GFbJNxKr3PJrHat6%2BETKEHAZl%2Bs%2FWogsvzK87l9GrH7P2MjnMGWtZyvpYPFlmGu5GXcM5LLvL9VJvoqMUsQf4aEzNbHsUkraWr7cRddMfYItZbOy1qUL009AoFIx%2BmS0VN4ap2q9XplOSv%2Bc%2B9NzomDUfnTs65%2B46Qxz9ZBCB9e%2BL3%2FUloEs3cRN4vAw2v2XvhBBFa1A3ykxoDZm%2BzaP72OHBfUr7ikfCcMjuDDfvYvCBjqkAezmc0TmQMcoaUjMXRfsbCdUl9X1pHCnAvAaZX5FvwW0LLXz78%2B0MUxrQs5naYewjO%2BaI4BofQNPZ4JodO64nRVBpeGkIlVQdt9Mv85clwfupyYxOnK%2FBFYEd1OlDHCE%2F3WkqvKTPKfop75SdVhTdVfXHPaMwSb7YbU%2Bc1FlUE0BProKXqzxv5zCV0bv4nt6SPHCAlGl4jqCZTV0sAIP0LCOXOLp&X-Amz-Signature=250545aef44ecd3c566993c821402ada29e73a174098fb69f9553800a4644a95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
