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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSPSO2C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCw9751E7IieuU6ocDNukzFCzB%2FjELO1e2VTt4%2BGligowIhAJBb4X9j1AzkIVfbqhB1DYfT21maxIcme8w2OFh65xsWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7O6OhvFKWj4iq%2BYq3AMpLUA%2BQWLPFOXBHeeyj0lJnDna4PAAZtujYqWtqXyFxd9qKxVi0gWxAYbHVMpbMk%2BvDiGFXj6Zoo8Cf5%2BhX2KckmVaS7LOA1%2BWQ3WX3xz6VCbpBZSy%2Fc1KIvw5FYEDW%2Ba%2FYsZmWEIrpLr8LmJ7742Ab8wgukz9ZRaB4%2F2RvxUNmZ%2FD46piJjSHwBVZ5AiukQdjm42%2FCbmKatlYu0pb9%2BZvWbz34ecBS9R5n2%2Bw%2F%2FYcyUIhW39iDQEcc9cfc%2BFKlVdQ%2BG%2FAOUCWnyrAAjEYLIcjdB%2B9Vb%2FbSwZZ2CaAmmnddsglDzPmZPfpCFkGv%2FU%2Fh%2BnzxpCwJWtHr2zPtABy6VT0IhHjRaCZiJbd%2BxQtcEoYM9uIhEKQ4yS640nkdxfPtHjbbyvxvmiHYKGRAAOc4M8shaqxrXtP0kZw8u2%2Fkftl0T1u0oeu%2FMxJVPNVJkdd0OT3cmBP0kGO7m3Vf4xvuR2JW370VUm7XKrzTGDKzvnnYUSDR12eWW%2B%2FKupgL%2Fj3xGIT5bpt1BshP6WgHry2FdaX9LphGOWbPalFng5PWloDB8BSRTi7tf%2BGq4HfMkWehP0tJ5nRBq9qRgs4SAEKKALHkLUn0v0OdWFWBxLs8VgRAsmenomFm2TBrA2kiDCcpJLABjqkAQcOAWNUpvcyrbRwQB1ZybLXWx295qhuYFZh%2FsfYZ9ojEY5wqjSVVZlsn0jZhuF93jYuHWx0d662l%2FuH%2BY%2FDiJ%2BMcBbBgK6fn6tkzxw003WI%2FGzWEdBBGWr2VKOyWe6%2FVszdHIMZnYn8JK6pcZKfL%2Fp7eOQkZWf%2Frdww0d%2BprSkSdCg3Nk9zNHllJaTC2iI34l21qy5%2FuSxe9KgkfYt8L84NOawA&X-Amz-Signature=5d9819eed46d761d03b70230729ab303035f3b8cbca9b7092fcc1b75a668a6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSPSO2C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCw9751E7IieuU6ocDNukzFCzB%2FjELO1e2VTt4%2BGligowIhAJBb4X9j1AzkIVfbqhB1DYfT21maxIcme8w2OFh65xsWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7O6OhvFKWj4iq%2BYq3AMpLUA%2BQWLPFOXBHeeyj0lJnDna4PAAZtujYqWtqXyFxd9qKxVi0gWxAYbHVMpbMk%2BvDiGFXj6Zoo8Cf5%2BhX2KckmVaS7LOA1%2BWQ3WX3xz6VCbpBZSy%2Fc1KIvw5FYEDW%2Ba%2FYsZmWEIrpLr8LmJ7742Ab8wgukz9ZRaB4%2F2RvxUNmZ%2FD46piJjSHwBVZ5AiukQdjm42%2FCbmKatlYu0pb9%2BZvWbz34ecBS9R5n2%2Bw%2F%2FYcyUIhW39iDQEcc9cfc%2BFKlVdQ%2BG%2FAOUCWnyrAAjEYLIcjdB%2B9Vb%2FbSwZZ2CaAmmnddsglDzPmZPfpCFkGv%2FU%2Fh%2BnzxpCwJWtHr2zPtABy6VT0IhHjRaCZiJbd%2BxQtcEoYM9uIhEKQ4yS640nkdxfPtHjbbyvxvmiHYKGRAAOc4M8shaqxrXtP0kZw8u2%2Fkftl0T1u0oeu%2FMxJVPNVJkdd0OT3cmBP0kGO7m3Vf4xvuR2JW370VUm7XKrzTGDKzvnnYUSDR12eWW%2B%2FKupgL%2Fj3xGIT5bpt1BshP6WgHry2FdaX9LphGOWbPalFng5PWloDB8BSRTi7tf%2BGq4HfMkWehP0tJ5nRBq9qRgs4SAEKKALHkLUn0v0OdWFWBxLs8VgRAsmenomFm2TBrA2kiDCcpJLABjqkAQcOAWNUpvcyrbRwQB1ZybLXWx295qhuYFZh%2FsfYZ9ojEY5wqjSVVZlsn0jZhuF93jYuHWx0d662l%2FuH%2BY%2FDiJ%2BMcBbBgK6fn6tkzxw003WI%2FGzWEdBBGWr2VKOyWe6%2FVszdHIMZnYn8JK6pcZKfL%2Fp7eOQkZWf%2Frdww0d%2BprSkSdCg3Nk9zNHllJaTC2iI34l21qy5%2FuSxe9KgkfYt8L84NOawA&X-Amz-Signature=206c59146cece505c3b9fb162652671f94f28320971d602965a969be1c031d03&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSPSO2C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCw9751E7IieuU6ocDNukzFCzB%2FjELO1e2VTt4%2BGligowIhAJBb4X9j1AzkIVfbqhB1DYfT21maxIcme8w2OFh65xsWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7O6OhvFKWj4iq%2BYq3AMpLUA%2BQWLPFOXBHeeyj0lJnDna4PAAZtujYqWtqXyFxd9qKxVi0gWxAYbHVMpbMk%2BvDiGFXj6Zoo8Cf5%2BhX2KckmVaS7LOA1%2BWQ3WX3xz6VCbpBZSy%2Fc1KIvw5FYEDW%2Ba%2FYsZmWEIrpLr8LmJ7742Ab8wgukz9ZRaB4%2F2RvxUNmZ%2FD46piJjSHwBVZ5AiukQdjm42%2FCbmKatlYu0pb9%2BZvWbz34ecBS9R5n2%2Bw%2F%2FYcyUIhW39iDQEcc9cfc%2BFKlVdQ%2BG%2FAOUCWnyrAAjEYLIcjdB%2B9Vb%2FbSwZZ2CaAmmnddsglDzPmZPfpCFkGv%2FU%2Fh%2BnzxpCwJWtHr2zPtABy6VT0IhHjRaCZiJbd%2BxQtcEoYM9uIhEKQ4yS640nkdxfPtHjbbyvxvmiHYKGRAAOc4M8shaqxrXtP0kZw8u2%2Fkftl0T1u0oeu%2FMxJVPNVJkdd0OT3cmBP0kGO7m3Vf4xvuR2JW370VUm7XKrzTGDKzvnnYUSDR12eWW%2B%2FKupgL%2Fj3xGIT5bpt1BshP6WgHry2FdaX9LphGOWbPalFng5PWloDB8BSRTi7tf%2BGq4HfMkWehP0tJ5nRBq9qRgs4SAEKKALHkLUn0v0OdWFWBxLs8VgRAsmenomFm2TBrA2kiDCcpJLABjqkAQcOAWNUpvcyrbRwQB1ZybLXWx295qhuYFZh%2FsfYZ9ojEY5wqjSVVZlsn0jZhuF93jYuHWx0d662l%2FuH%2BY%2FDiJ%2BMcBbBgK6fn6tkzxw003WI%2FGzWEdBBGWr2VKOyWe6%2FVszdHIMZnYn8JK6pcZKfL%2Fp7eOQkZWf%2Frdww0d%2BprSkSdCg3Nk9zNHllJaTC2iI34l21qy5%2FuSxe9KgkfYt8L84NOawA&X-Amz-Signature=9cde2f4897b25c5a9bd934a134a16c70f4e972612044b9312b2c5e6bb26d75dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSPSO2C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCw9751E7IieuU6ocDNukzFCzB%2FjELO1e2VTt4%2BGligowIhAJBb4X9j1AzkIVfbqhB1DYfT21maxIcme8w2OFh65xsWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7O6OhvFKWj4iq%2BYq3AMpLUA%2BQWLPFOXBHeeyj0lJnDna4PAAZtujYqWtqXyFxd9qKxVi0gWxAYbHVMpbMk%2BvDiGFXj6Zoo8Cf5%2BhX2KckmVaS7LOA1%2BWQ3WX3xz6VCbpBZSy%2Fc1KIvw5FYEDW%2Ba%2FYsZmWEIrpLr8LmJ7742Ab8wgukz9ZRaB4%2F2RvxUNmZ%2FD46piJjSHwBVZ5AiukQdjm42%2FCbmKatlYu0pb9%2BZvWbz34ecBS9R5n2%2Bw%2F%2FYcyUIhW39iDQEcc9cfc%2BFKlVdQ%2BG%2FAOUCWnyrAAjEYLIcjdB%2B9Vb%2FbSwZZ2CaAmmnddsglDzPmZPfpCFkGv%2FU%2Fh%2BnzxpCwJWtHr2zPtABy6VT0IhHjRaCZiJbd%2BxQtcEoYM9uIhEKQ4yS640nkdxfPtHjbbyvxvmiHYKGRAAOc4M8shaqxrXtP0kZw8u2%2Fkftl0T1u0oeu%2FMxJVPNVJkdd0OT3cmBP0kGO7m3Vf4xvuR2JW370VUm7XKrzTGDKzvnnYUSDR12eWW%2B%2FKupgL%2Fj3xGIT5bpt1BshP6WgHry2FdaX9LphGOWbPalFng5PWloDB8BSRTi7tf%2BGq4HfMkWehP0tJ5nRBq9qRgs4SAEKKALHkLUn0v0OdWFWBxLs8VgRAsmenomFm2TBrA2kiDCcpJLABjqkAQcOAWNUpvcyrbRwQB1ZybLXWx295qhuYFZh%2FsfYZ9ojEY5wqjSVVZlsn0jZhuF93jYuHWx0d662l%2FuH%2BY%2FDiJ%2BMcBbBgK6fn6tkzxw003WI%2FGzWEdBBGWr2VKOyWe6%2FVszdHIMZnYn8JK6pcZKfL%2Fp7eOQkZWf%2Frdww0d%2BprSkSdCg3Nk9zNHllJaTC2iI34l21qy5%2FuSxe9KgkfYt8L84NOawA&X-Amz-Signature=da9c20e6449fbe4ef354a15a1a1e076cecee32e7e438bfba63377abba854d966&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSPSO2C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCw9751E7IieuU6ocDNukzFCzB%2FjELO1e2VTt4%2BGligowIhAJBb4X9j1AzkIVfbqhB1DYfT21maxIcme8w2OFh65xsWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7O6OhvFKWj4iq%2BYq3AMpLUA%2BQWLPFOXBHeeyj0lJnDna4PAAZtujYqWtqXyFxd9qKxVi0gWxAYbHVMpbMk%2BvDiGFXj6Zoo8Cf5%2BhX2KckmVaS7LOA1%2BWQ3WX3xz6VCbpBZSy%2Fc1KIvw5FYEDW%2Ba%2FYsZmWEIrpLr8LmJ7742Ab8wgukz9ZRaB4%2F2RvxUNmZ%2FD46piJjSHwBVZ5AiukQdjm42%2FCbmKatlYu0pb9%2BZvWbz34ecBS9R5n2%2Bw%2F%2FYcyUIhW39iDQEcc9cfc%2BFKlVdQ%2BG%2FAOUCWnyrAAjEYLIcjdB%2B9Vb%2FbSwZZ2CaAmmnddsglDzPmZPfpCFkGv%2FU%2Fh%2BnzxpCwJWtHr2zPtABy6VT0IhHjRaCZiJbd%2BxQtcEoYM9uIhEKQ4yS640nkdxfPtHjbbyvxvmiHYKGRAAOc4M8shaqxrXtP0kZw8u2%2Fkftl0T1u0oeu%2FMxJVPNVJkdd0OT3cmBP0kGO7m3Vf4xvuR2JW370VUm7XKrzTGDKzvnnYUSDR12eWW%2B%2FKupgL%2Fj3xGIT5bpt1BshP6WgHry2FdaX9LphGOWbPalFng5PWloDB8BSRTi7tf%2BGq4HfMkWehP0tJ5nRBq9qRgs4SAEKKALHkLUn0v0OdWFWBxLs8VgRAsmenomFm2TBrA2kiDCcpJLABjqkAQcOAWNUpvcyrbRwQB1ZybLXWx295qhuYFZh%2FsfYZ9ojEY5wqjSVVZlsn0jZhuF93jYuHWx0d662l%2FuH%2BY%2FDiJ%2BMcBbBgK6fn6tkzxw003WI%2FGzWEdBBGWr2VKOyWe6%2FVszdHIMZnYn8JK6pcZKfL%2Fp7eOQkZWf%2Frdww0d%2BprSkSdCg3Nk9zNHllJaTC2iI34l21qy5%2FuSxe9KgkfYt8L84NOawA&X-Amz-Signature=d0ef8639475a81696e787c32dc80a5a4148f7ead47e1be830ecbdc007b6914db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSPSO2C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCw9751E7IieuU6ocDNukzFCzB%2FjELO1e2VTt4%2BGligowIhAJBb4X9j1AzkIVfbqhB1DYfT21maxIcme8w2OFh65xsWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7O6OhvFKWj4iq%2BYq3AMpLUA%2BQWLPFOXBHeeyj0lJnDna4PAAZtujYqWtqXyFxd9qKxVi0gWxAYbHVMpbMk%2BvDiGFXj6Zoo8Cf5%2BhX2KckmVaS7LOA1%2BWQ3WX3xz6VCbpBZSy%2Fc1KIvw5FYEDW%2Ba%2FYsZmWEIrpLr8LmJ7742Ab8wgukz9ZRaB4%2F2RvxUNmZ%2FD46piJjSHwBVZ5AiukQdjm42%2FCbmKatlYu0pb9%2BZvWbz34ecBS9R5n2%2Bw%2F%2FYcyUIhW39iDQEcc9cfc%2BFKlVdQ%2BG%2FAOUCWnyrAAjEYLIcjdB%2B9Vb%2FbSwZZ2CaAmmnddsglDzPmZPfpCFkGv%2FU%2Fh%2BnzxpCwJWtHr2zPtABy6VT0IhHjRaCZiJbd%2BxQtcEoYM9uIhEKQ4yS640nkdxfPtHjbbyvxvmiHYKGRAAOc4M8shaqxrXtP0kZw8u2%2Fkftl0T1u0oeu%2FMxJVPNVJkdd0OT3cmBP0kGO7m3Vf4xvuR2JW370VUm7XKrzTGDKzvnnYUSDR12eWW%2B%2FKupgL%2Fj3xGIT5bpt1BshP6WgHry2FdaX9LphGOWbPalFng5PWloDB8BSRTi7tf%2BGq4HfMkWehP0tJ5nRBq9qRgs4SAEKKALHkLUn0v0OdWFWBxLs8VgRAsmenomFm2TBrA2kiDCcpJLABjqkAQcOAWNUpvcyrbRwQB1ZybLXWx295qhuYFZh%2FsfYZ9ojEY5wqjSVVZlsn0jZhuF93jYuHWx0d662l%2FuH%2BY%2FDiJ%2BMcBbBgK6fn6tkzxw003WI%2FGzWEdBBGWr2VKOyWe6%2FVszdHIMZnYn8JK6pcZKfL%2Fp7eOQkZWf%2Frdww0d%2BprSkSdCg3Nk9zNHllJaTC2iI34l21qy5%2FuSxe9KgkfYt8L84NOawA&X-Amz-Signature=fa932b2f842e2da2805f6a985993ef5ad1db2a55f6930a5ef71d43e232a2e97c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSPSO2C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCw9751E7IieuU6ocDNukzFCzB%2FjELO1e2VTt4%2BGligowIhAJBb4X9j1AzkIVfbqhB1DYfT21maxIcme8w2OFh65xsWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7O6OhvFKWj4iq%2BYq3AMpLUA%2BQWLPFOXBHeeyj0lJnDna4PAAZtujYqWtqXyFxd9qKxVi0gWxAYbHVMpbMk%2BvDiGFXj6Zoo8Cf5%2BhX2KckmVaS7LOA1%2BWQ3WX3xz6VCbpBZSy%2Fc1KIvw5FYEDW%2Ba%2FYsZmWEIrpLr8LmJ7742Ab8wgukz9ZRaB4%2F2RvxUNmZ%2FD46piJjSHwBVZ5AiukQdjm42%2FCbmKatlYu0pb9%2BZvWbz34ecBS9R5n2%2Bw%2F%2FYcyUIhW39iDQEcc9cfc%2BFKlVdQ%2BG%2FAOUCWnyrAAjEYLIcjdB%2B9Vb%2FbSwZZ2CaAmmnddsglDzPmZPfpCFkGv%2FU%2Fh%2BnzxpCwJWtHr2zPtABy6VT0IhHjRaCZiJbd%2BxQtcEoYM9uIhEKQ4yS640nkdxfPtHjbbyvxvmiHYKGRAAOc4M8shaqxrXtP0kZw8u2%2Fkftl0T1u0oeu%2FMxJVPNVJkdd0OT3cmBP0kGO7m3Vf4xvuR2JW370VUm7XKrzTGDKzvnnYUSDR12eWW%2B%2FKupgL%2Fj3xGIT5bpt1BshP6WgHry2FdaX9LphGOWbPalFng5PWloDB8BSRTi7tf%2BGq4HfMkWehP0tJ5nRBq9qRgs4SAEKKALHkLUn0v0OdWFWBxLs8VgRAsmenomFm2TBrA2kiDCcpJLABjqkAQcOAWNUpvcyrbRwQB1ZybLXWx295qhuYFZh%2FsfYZ9ojEY5wqjSVVZlsn0jZhuF93jYuHWx0d662l%2FuH%2BY%2FDiJ%2BMcBbBgK6fn6tkzxw003WI%2FGzWEdBBGWr2VKOyWe6%2FVszdHIMZnYn8JK6pcZKfL%2Fp7eOQkZWf%2Frdww0d%2BprSkSdCg3Nk9zNHllJaTC2iI34l21qy5%2FuSxe9KgkfYt8L84NOawA&X-Amz-Signature=965d35aae462e7a8f7bb1db78f64f05b01d50f155d9d482e2e34b881e4f51c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSPSO2C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCw9751E7IieuU6ocDNukzFCzB%2FjELO1e2VTt4%2BGligowIhAJBb4X9j1AzkIVfbqhB1DYfT21maxIcme8w2OFh65xsWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7O6OhvFKWj4iq%2BYq3AMpLUA%2BQWLPFOXBHeeyj0lJnDna4PAAZtujYqWtqXyFxd9qKxVi0gWxAYbHVMpbMk%2BvDiGFXj6Zoo8Cf5%2BhX2KckmVaS7LOA1%2BWQ3WX3xz6VCbpBZSy%2Fc1KIvw5FYEDW%2Ba%2FYsZmWEIrpLr8LmJ7742Ab8wgukz9ZRaB4%2F2RvxUNmZ%2FD46piJjSHwBVZ5AiukQdjm42%2FCbmKatlYu0pb9%2BZvWbz34ecBS9R5n2%2Bw%2F%2FYcyUIhW39iDQEcc9cfc%2BFKlVdQ%2BG%2FAOUCWnyrAAjEYLIcjdB%2B9Vb%2FbSwZZ2CaAmmnddsglDzPmZPfpCFkGv%2FU%2Fh%2BnzxpCwJWtHr2zPtABy6VT0IhHjRaCZiJbd%2BxQtcEoYM9uIhEKQ4yS640nkdxfPtHjbbyvxvmiHYKGRAAOc4M8shaqxrXtP0kZw8u2%2Fkftl0T1u0oeu%2FMxJVPNVJkdd0OT3cmBP0kGO7m3Vf4xvuR2JW370VUm7XKrzTGDKzvnnYUSDR12eWW%2B%2FKupgL%2Fj3xGIT5bpt1BshP6WgHry2FdaX9LphGOWbPalFng5PWloDB8BSRTi7tf%2BGq4HfMkWehP0tJ5nRBq9qRgs4SAEKKALHkLUn0v0OdWFWBxLs8VgRAsmenomFm2TBrA2kiDCcpJLABjqkAQcOAWNUpvcyrbRwQB1ZybLXWx295qhuYFZh%2FsfYZ9ojEY5wqjSVVZlsn0jZhuF93jYuHWx0d662l%2FuH%2BY%2FDiJ%2BMcBbBgK6fn6tkzxw003WI%2FGzWEdBBGWr2VKOyWe6%2FVszdHIMZnYn8JK6pcZKfL%2Fp7eOQkZWf%2Frdww0d%2BprSkSdCg3Nk9zNHllJaTC2iI34l21qy5%2FuSxe9KgkfYt8L84NOawA&X-Amz-Signature=c87c0c06818d7ea85d2bf451884c0cc3b0148b25c8b3598016cfb51ebbc0b3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
