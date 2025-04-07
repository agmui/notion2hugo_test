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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TUYKJ5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FIrYmB8biR6b7X71aBKVFZMr3vNjwc9XnSx6fb18eGgIhAJmihOxJF44GoM1X9C3d%2B1uSswWEpbW7Yv9gZlbmgza0Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzkhWEhklnvmK4iqzsq3AObPEpCf%2BYEc0rUI%2FM0YoXXQ%2FYKtVNaOMEa04L%2BhoTmqumbYK5fMYFdhLOMlTZ0gA5K6LxcacABupq71LXYX%2BVwvBpzEVZSloMvpYUelDDpfTDw5sG8FiowGX3GRx58DK4HF1Bw5KjGysTAmDx6rc8yMvFHESRYwRm%2Ba5KH3kb3O6u89N%2F8oxR4x131fT7uJe%2Fu%2Fh1qbdAG%2FR4BPeHeg4Ic9kvJJ%2Buyj4oTH4R%2BJA6RAOkO6e8Zb9nmUQRIi7Ep3lFcbM8GCpD%2FwwZH%2B0rCjF2ZTzdps0Q9vmjoBwrTsrngdW1Ohv%2BJuxmXtTnpv7h6QwPbYmYED6WKzl56nZ0G%2B9PBpO4%2FvTh989V5HYcs76K0dP6xIeqdHmiILS%2Bzusp4eciaIMhiLx2qUEsQbu8gIs3H3rk0B8jCokdE%2FkpdK6j00T47vlLzvZu9A4Jmza4kJ5QVM6m4dUeEnPVfF5lJM9%2FpISQ%2Fl%2FRbvlI7JlNIoe0E6qdLYuVN6KcWhVtKluZ4Eg4frow96OWU67XwyIsbYZNGOZi%2FbQyItQr4NBqv2HGCrvtMjvuK2iZLy2keAPfKdF1eJpzbVCRdt8L1wCuHS9Gm5RjLq1DrA5msLxX%2B3pwGt26vz973dsKFmykPdzCy6cy%2FBjqkAUzRz%2FK%2Frsn7lP6dPbqhF%2FWb0Rnjm1wEOvuBjxP%2Fj6493WNzGdi4uCR427H17AxfPp%2FoYyaPq7V3jpgZ%2B94KxIhueMamFhP%2B9FUCkKVWr0OXalMvHPdSVAJpUBA262sPi8tLJXPuy8pTlxpNVF%2BiCMqhLHvyjkCbBgvvvIYShZQM7VnGQwGYbJoGpNZ9eyH94Dnk9VbHHo2SA%2Fnki7M7NerM229o&X-Amz-Signature=c43f64cf5f14c9352cb36f92154c66ec3186e533ff11329d92f639451d9037bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TUYKJ5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FIrYmB8biR6b7X71aBKVFZMr3vNjwc9XnSx6fb18eGgIhAJmihOxJF44GoM1X9C3d%2B1uSswWEpbW7Yv9gZlbmgza0Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzkhWEhklnvmK4iqzsq3AObPEpCf%2BYEc0rUI%2FM0YoXXQ%2FYKtVNaOMEa04L%2BhoTmqumbYK5fMYFdhLOMlTZ0gA5K6LxcacABupq71LXYX%2BVwvBpzEVZSloMvpYUelDDpfTDw5sG8FiowGX3GRx58DK4HF1Bw5KjGysTAmDx6rc8yMvFHESRYwRm%2Ba5KH3kb3O6u89N%2F8oxR4x131fT7uJe%2Fu%2Fh1qbdAG%2FR4BPeHeg4Ic9kvJJ%2Buyj4oTH4R%2BJA6RAOkO6e8Zb9nmUQRIi7Ep3lFcbM8GCpD%2FwwZH%2B0rCjF2ZTzdps0Q9vmjoBwrTsrngdW1Ohv%2BJuxmXtTnpv7h6QwPbYmYED6WKzl56nZ0G%2B9PBpO4%2FvTh989V5HYcs76K0dP6xIeqdHmiILS%2Bzusp4eciaIMhiLx2qUEsQbu8gIs3H3rk0B8jCokdE%2FkpdK6j00T47vlLzvZu9A4Jmza4kJ5QVM6m4dUeEnPVfF5lJM9%2FpISQ%2Fl%2FRbvlI7JlNIoe0E6qdLYuVN6KcWhVtKluZ4Eg4frow96OWU67XwyIsbYZNGOZi%2FbQyItQr4NBqv2HGCrvtMjvuK2iZLy2keAPfKdF1eJpzbVCRdt8L1wCuHS9Gm5RjLq1DrA5msLxX%2B3pwGt26vz973dsKFmykPdzCy6cy%2FBjqkAUzRz%2FK%2Frsn7lP6dPbqhF%2FWb0Rnjm1wEOvuBjxP%2Fj6493WNzGdi4uCR427H17AxfPp%2FoYyaPq7V3jpgZ%2B94KxIhueMamFhP%2B9FUCkKVWr0OXalMvHPdSVAJpUBA262sPi8tLJXPuy8pTlxpNVF%2BiCMqhLHvyjkCbBgvvvIYShZQM7VnGQwGYbJoGpNZ9eyH94Dnk9VbHHo2SA%2Fnki7M7NerM229o&X-Amz-Signature=1fbd74f7dde389113511015cb840fa6dbc5075c2aa80bdabc712910519450bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TUYKJ5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FIrYmB8biR6b7X71aBKVFZMr3vNjwc9XnSx6fb18eGgIhAJmihOxJF44GoM1X9C3d%2B1uSswWEpbW7Yv9gZlbmgza0Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzkhWEhklnvmK4iqzsq3AObPEpCf%2BYEc0rUI%2FM0YoXXQ%2FYKtVNaOMEa04L%2BhoTmqumbYK5fMYFdhLOMlTZ0gA5K6LxcacABupq71LXYX%2BVwvBpzEVZSloMvpYUelDDpfTDw5sG8FiowGX3GRx58DK4HF1Bw5KjGysTAmDx6rc8yMvFHESRYwRm%2Ba5KH3kb3O6u89N%2F8oxR4x131fT7uJe%2Fu%2Fh1qbdAG%2FR4BPeHeg4Ic9kvJJ%2Buyj4oTH4R%2BJA6RAOkO6e8Zb9nmUQRIi7Ep3lFcbM8GCpD%2FwwZH%2B0rCjF2ZTzdps0Q9vmjoBwrTsrngdW1Ohv%2BJuxmXtTnpv7h6QwPbYmYED6WKzl56nZ0G%2B9PBpO4%2FvTh989V5HYcs76K0dP6xIeqdHmiILS%2Bzusp4eciaIMhiLx2qUEsQbu8gIs3H3rk0B8jCokdE%2FkpdK6j00T47vlLzvZu9A4Jmza4kJ5QVM6m4dUeEnPVfF5lJM9%2FpISQ%2Fl%2FRbvlI7JlNIoe0E6qdLYuVN6KcWhVtKluZ4Eg4frow96OWU67XwyIsbYZNGOZi%2FbQyItQr4NBqv2HGCrvtMjvuK2iZLy2keAPfKdF1eJpzbVCRdt8L1wCuHS9Gm5RjLq1DrA5msLxX%2B3pwGt26vz973dsKFmykPdzCy6cy%2FBjqkAUzRz%2FK%2Frsn7lP6dPbqhF%2FWb0Rnjm1wEOvuBjxP%2Fj6493WNzGdi4uCR427H17AxfPp%2FoYyaPq7V3jpgZ%2B94KxIhueMamFhP%2B9FUCkKVWr0OXalMvHPdSVAJpUBA262sPi8tLJXPuy8pTlxpNVF%2BiCMqhLHvyjkCbBgvvvIYShZQM7VnGQwGYbJoGpNZ9eyH94Dnk9VbHHo2SA%2Fnki7M7NerM229o&X-Amz-Signature=a2474d25c3d4e3e5b2227c7c0c6cb85b2d2e5102c0308a1ee32cb81cf4bb8265&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TUYKJ5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FIrYmB8biR6b7X71aBKVFZMr3vNjwc9XnSx6fb18eGgIhAJmihOxJF44GoM1X9C3d%2B1uSswWEpbW7Yv9gZlbmgza0Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzkhWEhklnvmK4iqzsq3AObPEpCf%2BYEc0rUI%2FM0YoXXQ%2FYKtVNaOMEa04L%2BhoTmqumbYK5fMYFdhLOMlTZ0gA5K6LxcacABupq71LXYX%2BVwvBpzEVZSloMvpYUelDDpfTDw5sG8FiowGX3GRx58DK4HF1Bw5KjGysTAmDx6rc8yMvFHESRYwRm%2Ba5KH3kb3O6u89N%2F8oxR4x131fT7uJe%2Fu%2Fh1qbdAG%2FR4BPeHeg4Ic9kvJJ%2Buyj4oTH4R%2BJA6RAOkO6e8Zb9nmUQRIi7Ep3lFcbM8GCpD%2FwwZH%2B0rCjF2ZTzdps0Q9vmjoBwrTsrngdW1Ohv%2BJuxmXtTnpv7h6QwPbYmYED6WKzl56nZ0G%2B9PBpO4%2FvTh989V5HYcs76K0dP6xIeqdHmiILS%2Bzusp4eciaIMhiLx2qUEsQbu8gIs3H3rk0B8jCokdE%2FkpdK6j00T47vlLzvZu9A4Jmza4kJ5QVM6m4dUeEnPVfF5lJM9%2FpISQ%2Fl%2FRbvlI7JlNIoe0E6qdLYuVN6KcWhVtKluZ4Eg4frow96OWU67XwyIsbYZNGOZi%2FbQyItQr4NBqv2HGCrvtMjvuK2iZLy2keAPfKdF1eJpzbVCRdt8L1wCuHS9Gm5RjLq1DrA5msLxX%2B3pwGt26vz973dsKFmykPdzCy6cy%2FBjqkAUzRz%2FK%2Frsn7lP6dPbqhF%2FWb0Rnjm1wEOvuBjxP%2Fj6493WNzGdi4uCR427H17AxfPp%2FoYyaPq7V3jpgZ%2B94KxIhueMamFhP%2B9FUCkKVWr0OXalMvHPdSVAJpUBA262sPi8tLJXPuy8pTlxpNVF%2BiCMqhLHvyjkCbBgvvvIYShZQM7VnGQwGYbJoGpNZ9eyH94Dnk9VbHHo2SA%2Fnki7M7NerM229o&X-Amz-Signature=9c024ef9dac25e1289e5d4c58e5acd1b78bce01c66d92be8179a2fa69a4f3419&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TUYKJ5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FIrYmB8biR6b7X71aBKVFZMr3vNjwc9XnSx6fb18eGgIhAJmihOxJF44GoM1X9C3d%2B1uSswWEpbW7Yv9gZlbmgza0Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzkhWEhklnvmK4iqzsq3AObPEpCf%2BYEc0rUI%2FM0YoXXQ%2FYKtVNaOMEa04L%2BhoTmqumbYK5fMYFdhLOMlTZ0gA5K6LxcacABupq71LXYX%2BVwvBpzEVZSloMvpYUelDDpfTDw5sG8FiowGX3GRx58DK4HF1Bw5KjGysTAmDx6rc8yMvFHESRYwRm%2Ba5KH3kb3O6u89N%2F8oxR4x131fT7uJe%2Fu%2Fh1qbdAG%2FR4BPeHeg4Ic9kvJJ%2Buyj4oTH4R%2BJA6RAOkO6e8Zb9nmUQRIi7Ep3lFcbM8GCpD%2FwwZH%2B0rCjF2ZTzdps0Q9vmjoBwrTsrngdW1Ohv%2BJuxmXtTnpv7h6QwPbYmYED6WKzl56nZ0G%2B9PBpO4%2FvTh989V5HYcs76K0dP6xIeqdHmiILS%2Bzusp4eciaIMhiLx2qUEsQbu8gIs3H3rk0B8jCokdE%2FkpdK6j00T47vlLzvZu9A4Jmza4kJ5QVM6m4dUeEnPVfF5lJM9%2FpISQ%2Fl%2FRbvlI7JlNIoe0E6qdLYuVN6KcWhVtKluZ4Eg4frow96OWU67XwyIsbYZNGOZi%2FbQyItQr4NBqv2HGCrvtMjvuK2iZLy2keAPfKdF1eJpzbVCRdt8L1wCuHS9Gm5RjLq1DrA5msLxX%2B3pwGt26vz973dsKFmykPdzCy6cy%2FBjqkAUzRz%2FK%2Frsn7lP6dPbqhF%2FWb0Rnjm1wEOvuBjxP%2Fj6493WNzGdi4uCR427H17AxfPp%2FoYyaPq7V3jpgZ%2B94KxIhueMamFhP%2B9FUCkKVWr0OXalMvHPdSVAJpUBA262sPi8tLJXPuy8pTlxpNVF%2BiCMqhLHvyjkCbBgvvvIYShZQM7VnGQwGYbJoGpNZ9eyH94Dnk9VbHHo2SA%2Fnki7M7NerM229o&X-Amz-Signature=878ccbf6121bc0ccb20c1f7dfc2722b5a67e053f085c554864d6aaa6ee490e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TUYKJ5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FIrYmB8biR6b7X71aBKVFZMr3vNjwc9XnSx6fb18eGgIhAJmihOxJF44GoM1X9C3d%2B1uSswWEpbW7Yv9gZlbmgza0Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzkhWEhklnvmK4iqzsq3AObPEpCf%2BYEc0rUI%2FM0YoXXQ%2FYKtVNaOMEa04L%2BhoTmqumbYK5fMYFdhLOMlTZ0gA5K6LxcacABupq71LXYX%2BVwvBpzEVZSloMvpYUelDDpfTDw5sG8FiowGX3GRx58DK4HF1Bw5KjGysTAmDx6rc8yMvFHESRYwRm%2Ba5KH3kb3O6u89N%2F8oxR4x131fT7uJe%2Fu%2Fh1qbdAG%2FR4BPeHeg4Ic9kvJJ%2Buyj4oTH4R%2BJA6RAOkO6e8Zb9nmUQRIi7Ep3lFcbM8GCpD%2FwwZH%2B0rCjF2ZTzdps0Q9vmjoBwrTsrngdW1Ohv%2BJuxmXtTnpv7h6QwPbYmYED6WKzl56nZ0G%2B9PBpO4%2FvTh989V5HYcs76K0dP6xIeqdHmiILS%2Bzusp4eciaIMhiLx2qUEsQbu8gIs3H3rk0B8jCokdE%2FkpdK6j00T47vlLzvZu9A4Jmza4kJ5QVM6m4dUeEnPVfF5lJM9%2FpISQ%2Fl%2FRbvlI7JlNIoe0E6qdLYuVN6KcWhVtKluZ4Eg4frow96OWU67XwyIsbYZNGOZi%2FbQyItQr4NBqv2HGCrvtMjvuK2iZLy2keAPfKdF1eJpzbVCRdt8L1wCuHS9Gm5RjLq1DrA5msLxX%2B3pwGt26vz973dsKFmykPdzCy6cy%2FBjqkAUzRz%2FK%2Frsn7lP6dPbqhF%2FWb0Rnjm1wEOvuBjxP%2Fj6493WNzGdi4uCR427H17AxfPp%2FoYyaPq7V3jpgZ%2B94KxIhueMamFhP%2B9FUCkKVWr0OXalMvHPdSVAJpUBA262sPi8tLJXPuy8pTlxpNVF%2BiCMqhLHvyjkCbBgvvvIYShZQM7VnGQwGYbJoGpNZ9eyH94Dnk9VbHHo2SA%2Fnki7M7NerM229o&X-Amz-Signature=074948ea06957416fbd2ad60c81c4ee736f4934991e022322b27dbf1081d3613&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TUYKJ5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FIrYmB8biR6b7X71aBKVFZMr3vNjwc9XnSx6fb18eGgIhAJmihOxJF44GoM1X9C3d%2B1uSswWEpbW7Yv9gZlbmgza0Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzkhWEhklnvmK4iqzsq3AObPEpCf%2BYEc0rUI%2FM0YoXXQ%2FYKtVNaOMEa04L%2BhoTmqumbYK5fMYFdhLOMlTZ0gA5K6LxcacABupq71LXYX%2BVwvBpzEVZSloMvpYUelDDpfTDw5sG8FiowGX3GRx58DK4HF1Bw5KjGysTAmDx6rc8yMvFHESRYwRm%2Ba5KH3kb3O6u89N%2F8oxR4x131fT7uJe%2Fu%2Fh1qbdAG%2FR4BPeHeg4Ic9kvJJ%2Buyj4oTH4R%2BJA6RAOkO6e8Zb9nmUQRIi7Ep3lFcbM8GCpD%2FwwZH%2B0rCjF2ZTzdps0Q9vmjoBwrTsrngdW1Ohv%2BJuxmXtTnpv7h6QwPbYmYED6WKzl56nZ0G%2B9PBpO4%2FvTh989V5HYcs76K0dP6xIeqdHmiILS%2Bzusp4eciaIMhiLx2qUEsQbu8gIs3H3rk0B8jCokdE%2FkpdK6j00T47vlLzvZu9A4Jmza4kJ5QVM6m4dUeEnPVfF5lJM9%2FpISQ%2Fl%2FRbvlI7JlNIoe0E6qdLYuVN6KcWhVtKluZ4Eg4frow96OWU67XwyIsbYZNGOZi%2FbQyItQr4NBqv2HGCrvtMjvuK2iZLy2keAPfKdF1eJpzbVCRdt8L1wCuHS9Gm5RjLq1DrA5msLxX%2B3pwGt26vz973dsKFmykPdzCy6cy%2FBjqkAUzRz%2FK%2Frsn7lP6dPbqhF%2FWb0Rnjm1wEOvuBjxP%2Fj6493WNzGdi4uCR427H17AxfPp%2FoYyaPq7V3jpgZ%2B94KxIhueMamFhP%2B9FUCkKVWr0OXalMvHPdSVAJpUBA262sPi8tLJXPuy8pTlxpNVF%2BiCMqhLHvyjkCbBgvvvIYShZQM7VnGQwGYbJoGpNZ9eyH94Dnk9VbHHo2SA%2Fnki7M7NerM229o&X-Amz-Signature=661cf73190549a09c7a17f54824980e07d9e0a925296243f7b26b025b9a4a75e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TUYKJ5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FIrYmB8biR6b7X71aBKVFZMr3vNjwc9XnSx6fb18eGgIhAJmihOxJF44GoM1X9C3d%2B1uSswWEpbW7Yv9gZlbmgza0Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzkhWEhklnvmK4iqzsq3AObPEpCf%2BYEc0rUI%2FM0YoXXQ%2FYKtVNaOMEa04L%2BhoTmqumbYK5fMYFdhLOMlTZ0gA5K6LxcacABupq71LXYX%2BVwvBpzEVZSloMvpYUelDDpfTDw5sG8FiowGX3GRx58DK4HF1Bw5KjGysTAmDx6rc8yMvFHESRYwRm%2Ba5KH3kb3O6u89N%2F8oxR4x131fT7uJe%2Fu%2Fh1qbdAG%2FR4BPeHeg4Ic9kvJJ%2Buyj4oTH4R%2BJA6RAOkO6e8Zb9nmUQRIi7Ep3lFcbM8GCpD%2FwwZH%2B0rCjF2ZTzdps0Q9vmjoBwrTsrngdW1Ohv%2BJuxmXtTnpv7h6QwPbYmYED6WKzl56nZ0G%2B9PBpO4%2FvTh989V5HYcs76K0dP6xIeqdHmiILS%2Bzusp4eciaIMhiLx2qUEsQbu8gIs3H3rk0B8jCokdE%2FkpdK6j00T47vlLzvZu9A4Jmza4kJ5QVM6m4dUeEnPVfF5lJM9%2FpISQ%2Fl%2FRbvlI7JlNIoe0E6qdLYuVN6KcWhVtKluZ4Eg4frow96OWU67XwyIsbYZNGOZi%2FbQyItQr4NBqv2HGCrvtMjvuK2iZLy2keAPfKdF1eJpzbVCRdt8L1wCuHS9Gm5RjLq1DrA5msLxX%2B3pwGt26vz973dsKFmykPdzCy6cy%2FBjqkAUzRz%2FK%2Frsn7lP6dPbqhF%2FWb0Rnjm1wEOvuBjxP%2Fj6493WNzGdi4uCR427H17AxfPp%2FoYyaPq7V3jpgZ%2B94KxIhueMamFhP%2B9FUCkKVWr0OXalMvHPdSVAJpUBA262sPi8tLJXPuy8pTlxpNVF%2BiCMqhLHvyjkCbBgvvvIYShZQM7VnGQwGYbJoGpNZ9eyH94Dnk9VbHHo2SA%2Fnki7M7NerM229o&X-Amz-Signature=e5cafcc339bdce5599494081503a68bb30bc55f7b2bcb6c52d839e649f55c83d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
