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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3ZFQQO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZy1wZMFZI0L2AspDz4SnsiS1WtYhbgTFkeIjhLoC3BAIhAMJq0RI4fRTPqEd%2B4%2FFSmffz%2FaIK0noBm2ekTB74VqfPKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp%2FSthgsl702o%2Fg%2BUq3AOZNTCo3gmvk4t8Do2zvpEY6V9yBJ1e7oFqfPhKuEL6JYUrzxyga6l3c6VJrby32zKYZMN9x8SXGAc9p1cw1I5dPME1m1KsGVxe5hbDK8hpjWKTkQ4BFQa2LyZgbZuZwBO2dhk%2FdpwrE1FxmNjxfhucdsR28unfUkhPefkz%2FV2SEJpVKimFTaylv1tCYMR%2FrF02ItKKNHbuj2gYRqfpNF%2FFEXcHNYkXbSB0Dm%2FELCo86gumN5X5ruWBwT%2Bx42uBSyFdUEj0cHKClcRWvI755AXMY%2BxMTX5pK79TQp6KzlMYaCICCBbQ2VHvMggnDs1QrQBMlUWeQTsFlDGcTjOI2nKfJJYpTIUnHYNVBSg4Uu55bM5s1jwqE9%2FHvDIDVj2tvWBIWL4nnhzkFB%2BrbeQGkmufel8B2TVU4IL9haPXH7g1m%2FrrdCtPq0P%2F57lWP80ENop1tYvtclSebo2l%2FJog5IOB5Xr9XfoaW3687%2BP%2F0qQES%2BNXvVfBv6nh2dZkelNb6mBxBxcVW163iKukuMgYDD%2B897vhXagj7jlRJr%2FzCZ8qPSyLSEV2gheRwCtx6%2BDYOkIGIScYsb%2BwK1ouH07%2BRiBeSw4QfZiEpp04jCBywAZG6f33%2BFDpaxWPX%2FPsdTDSnZvCBjqkAYes%2BE5DbsHJpwEKjiXZAGo51gNzg2y5nYl59E%2FS%2B%2BydqK8nrikBNqbO8Ll0Ty3qLDqQQWUePnlDE%2BEJCavPQHzeYjr4IXKT15tPQxWeuyh9R%2Bp5sSOGA60GDDKqeikRdjT9ACEQpxRJo9YvVRzYKdCwyU6FUtGhFQk8BnUYMO11x%2FjKou7N4WtVq9HZ1oo6A8wqWrfrK9%2BVG7%2FaKqoxL8vREs7W&X-Amz-Signature=e5043a0f884a69a9fcf26ffb50df364a8426e3cbd663b8fae3bdabd94dea5765&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3ZFQQO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZy1wZMFZI0L2AspDz4SnsiS1WtYhbgTFkeIjhLoC3BAIhAMJq0RI4fRTPqEd%2B4%2FFSmffz%2FaIK0noBm2ekTB74VqfPKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp%2FSthgsl702o%2Fg%2BUq3AOZNTCo3gmvk4t8Do2zvpEY6V9yBJ1e7oFqfPhKuEL6JYUrzxyga6l3c6VJrby32zKYZMN9x8SXGAc9p1cw1I5dPME1m1KsGVxe5hbDK8hpjWKTkQ4BFQa2LyZgbZuZwBO2dhk%2FdpwrE1FxmNjxfhucdsR28unfUkhPefkz%2FV2SEJpVKimFTaylv1tCYMR%2FrF02ItKKNHbuj2gYRqfpNF%2FFEXcHNYkXbSB0Dm%2FELCo86gumN5X5ruWBwT%2Bx42uBSyFdUEj0cHKClcRWvI755AXMY%2BxMTX5pK79TQp6KzlMYaCICCBbQ2VHvMggnDs1QrQBMlUWeQTsFlDGcTjOI2nKfJJYpTIUnHYNVBSg4Uu55bM5s1jwqE9%2FHvDIDVj2tvWBIWL4nnhzkFB%2BrbeQGkmufel8B2TVU4IL9haPXH7g1m%2FrrdCtPq0P%2F57lWP80ENop1tYvtclSebo2l%2FJog5IOB5Xr9XfoaW3687%2BP%2F0qQES%2BNXvVfBv6nh2dZkelNb6mBxBxcVW163iKukuMgYDD%2B897vhXagj7jlRJr%2FzCZ8qPSyLSEV2gheRwCtx6%2BDYOkIGIScYsb%2BwK1ouH07%2BRiBeSw4QfZiEpp04jCBywAZG6f33%2BFDpaxWPX%2FPsdTDSnZvCBjqkAYes%2BE5DbsHJpwEKjiXZAGo51gNzg2y5nYl59E%2FS%2B%2BydqK8nrikBNqbO8Ll0Ty3qLDqQQWUePnlDE%2BEJCavPQHzeYjr4IXKT15tPQxWeuyh9R%2Bp5sSOGA60GDDKqeikRdjT9ACEQpxRJo9YvVRzYKdCwyU6FUtGhFQk8BnUYMO11x%2FjKou7N4WtVq9HZ1oo6A8wqWrfrK9%2BVG7%2FaKqoxL8vREs7W&X-Amz-Signature=e4acacb5fc66847e9a13f632266c48d403b35fb022746a8b50ddb678b7a30e38&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3ZFQQO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZy1wZMFZI0L2AspDz4SnsiS1WtYhbgTFkeIjhLoC3BAIhAMJq0RI4fRTPqEd%2B4%2FFSmffz%2FaIK0noBm2ekTB74VqfPKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp%2FSthgsl702o%2Fg%2BUq3AOZNTCo3gmvk4t8Do2zvpEY6V9yBJ1e7oFqfPhKuEL6JYUrzxyga6l3c6VJrby32zKYZMN9x8SXGAc9p1cw1I5dPME1m1KsGVxe5hbDK8hpjWKTkQ4BFQa2LyZgbZuZwBO2dhk%2FdpwrE1FxmNjxfhucdsR28unfUkhPefkz%2FV2SEJpVKimFTaylv1tCYMR%2FrF02ItKKNHbuj2gYRqfpNF%2FFEXcHNYkXbSB0Dm%2FELCo86gumN5X5ruWBwT%2Bx42uBSyFdUEj0cHKClcRWvI755AXMY%2BxMTX5pK79TQp6KzlMYaCICCBbQ2VHvMggnDs1QrQBMlUWeQTsFlDGcTjOI2nKfJJYpTIUnHYNVBSg4Uu55bM5s1jwqE9%2FHvDIDVj2tvWBIWL4nnhzkFB%2BrbeQGkmufel8B2TVU4IL9haPXH7g1m%2FrrdCtPq0P%2F57lWP80ENop1tYvtclSebo2l%2FJog5IOB5Xr9XfoaW3687%2BP%2F0qQES%2BNXvVfBv6nh2dZkelNb6mBxBxcVW163iKukuMgYDD%2B897vhXagj7jlRJr%2FzCZ8qPSyLSEV2gheRwCtx6%2BDYOkIGIScYsb%2BwK1ouH07%2BRiBeSw4QfZiEpp04jCBywAZG6f33%2BFDpaxWPX%2FPsdTDSnZvCBjqkAYes%2BE5DbsHJpwEKjiXZAGo51gNzg2y5nYl59E%2FS%2B%2BydqK8nrikBNqbO8Ll0Ty3qLDqQQWUePnlDE%2BEJCavPQHzeYjr4IXKT15tPQxWeuyh9R%2Bp5sSOGA60GDDKqeikRdjT9ACEQpxRJo9YvVRzYKdCwyU6FUtGhFQk8BnUYMO11x%2FjKou7N4WtVq9HZ1oo6A8wqWrfrK9%2BVG7%2FaKqoxL8vREs7W&X-Amz-Signature=9175469a3e50e0660f66d267ff18f33aab9473f7b7e55c052b99855072a79224&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3ZFQQO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZy1wZMFZI0L2AspDz4SnsiS1WtYhbgTFkeIjhLoC3BAIhAMJq0RI4fRTPqEd%2B4%2FFSmffz%2FaIK0noBm2ekTB74VqfPKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp%2FSthgsl702o%2Fg%2BUq3AOZNTCo3gmvk4t8Do2zvpEY6V9yBJ1e7oFqfPhKuEL6JYUrzxyga6l3c6VJrby32zKYZMN9x8SXGAc9p1cw1I5dPME1m1KsGVxe5hbDK8hpjWKTkQ4BFQa2LyZgbZuZwBO2dhk%2FdpwrE1FxmNjxfhucdsR28unfUkhPefkz%2FV2SEJpVKimFTaylv1tCYMR%2FrF02ItKKNHbuj2gYRqfpNF%2FFEXcHNYkXbSB0Dm%2FELCo86gumN5X5ruWBwT%2Bx42uBSyFdUEj0cHKClcRWvI755AXMY%2BxMTX5pK79TQp6KzlMYaCICCBbQ2VHvMggnDs1QrQBMlUWeQTsFlDGcTjOI2nKfJJYpTIUnHYNVBSg4Uu55bM5s1jwqE9%2FHvDIDVj2tvWBIWL4nnhzkFB%2BrbeQGkmufel8B2TVU4IL9haPXH7g1m%2FrrdCtPq0P%2F57lWP80ENop1tYvtclSebo2l%2FJog5IOB5Xr9XfoaW3687%2BP%2F0qQES%2BNXvVfBv6nh2dZkelNb6mBxBxcVW163iKukuMgYDD%2B897vhXagj7jlRJr%2FzCZ8qPSyLSEV2gheRwCtx6%2BDYOkIGIScYsb%2BwK1ouH07%2BRiBeSw4QfZiEpp04jCBywAZG6f33%2BFDpaxWPX%2FPsdTDSnZvCBjqkAYes%2BE5DbsHJpwEKjiXZAGo51gNzg2y5nYl59E%2FS%2B%2BydqK8nrikBNqbO8Ll0Ty3qLDqQQWUePnlDE%2BEJCavPQHzeYjr4IXKT15tPQxWeuyh9R%2Bp5sSOGA60GDDKqeikRdjT9ACEQpxRJo9YvVRzYKdCwyU6FUtGhFQk8BnUYMO11x%2FjKou7N4WtVq9HZ1oo6A8wqWrfrK9%2BVG7%2FaKqoxL8vREs7W&X-Amz-Signature=d442098a27d8dd6509918f228889f777569789206d8ae6579dfe454fc5ad9531&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3ZFQQO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZy1wZMFZI0L2AspDz4SnsiS1WtYhbgTFkeIjhLoC3BAIhAMJq0RI4fRTPqEd%2B4%2FFSmffz%2FaIK0noBm2ekTB74VqfPKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp%2FSthgsl702o%2Fg%2BUq3AOZNTCo3gmvk4t8Do2zvpEY6V9yBJ1e7oFqfPhKuEL6JYUrzxyga6l3c6VJrby32zKYZMN9x8SXGAc9p1cw1I5dPME1m1KsGVxe5hbDK8hpjWKTkQ4BFQa2LyZgbZuZwBO2dhk%2FdpwrE1FxmNjxfhucdsR28unfUkhPefkz%2FV2SEJpVKimFTaylv1tCYMR%2FrF02ItKKNHbuj2gYRqfpNF%2FFEXcHNYkXbSB0Dm%2FELCo86gumN5X5ruWBwT%2Bx42uBSyFdUEj0cHKClcRWvI755AXMY%2BxMTX5pK79TQp6KzlMYaCICCBbQ2VHvMggnDs1QrQBMlUWeQTsFlDGcTjOI2nKfJJYpTIUnHYNVBSg4Uu55bM5s1jwqE9%2FHvDIDVj2tvWBIWL4nnhzkFB%2BrbeQGkmufel8B2TVU4IL9haPXH7g1m%2FrrdCtPq0P%2F57lWP80ENop1tYvtclSebo2l%2FJog5IOB5Xr9XfoaW3687%2BP%2F0qQES%2BNXvVfBv6nh2dZkelNb6mBxBxcVW163iKukuMgYDD%2B897vhXagj7jlRJr%2FzCZ8qPSyLSEV2gheRwCtx6%2BDYOkIGIScYsb%2BwK1ouH07%2BRiBeSw4QfZiEpp04jCBywAZG6f33%2BFDpaxWPX%2FPsdTDSnZvCBjqkAYes%2BE5DbsHJpwEKjiXZAGo51gNzg2y5nYl59E%2FS%2B%2BydqK8nrikBNqbO8Ll0Ty3qLDqQQWUePnlDE%2BEJCavPQHzeYjr4IXKT15tPQxWeuyh9R%2Bp5sSOGA60GDDKqeikRdjT9ACEQpxRJo9YvVRzYKdCwyU6FUtGhFQk8BnUYMO11x%2FjKou7N4WtVq9HZ1oo6A8wqWrfrK9%2BVG7%2FaKqoxL8vREs7W&X-Amz-Signature=c558dc1a037f78ae02e628a919b8a7a9e3f67e40981dd8c84a6422450fc93c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3ZFQQO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZy1wZMFZI0L2AspDz4SnsiS1WtYhbgTFkeIjhLoC3BAIhAMJq0RI4fRTPqEd%2B4%2FFSmffz%2FaIK0noBm2ekTB74VqfPKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp%2FSthgsl702o%2Fg%2BUq3AOZNTCo3gmvk4t8Do2zvpEY6V9yBJ1e7oFqfPhKuEL6JYUrzxyga6l3c6VJrby32zKYZMN9x8SXGAc9p1cw1I5dPME1m1KsGVxe5hbDK8hpjWKTkQ4BFQa2LyZgbZuZwBO2dhk%2FdpwrE1FxmNjxfhucdsR28unfUkhPefkz%2FV2SEJpVKimFTaylv1tCYMR%2FrF02ItKKNHbuj2gYRqfpNF%2FFEXcHNYkXbSB0Dm%2FELCo86gumN5X5ruWBwT%2Bx42uBSyFdUEj0cHKClcRWvI755AXMY%2BxMTX5pK79TQp6KzlMYaCICCBbQ2VHvMggnDs1QrQBMlUWeQTsFlDGcTjOI2nKfJJYpTIUnHYNVBSg4Uu55bM5s1jwqE9%2FHvDIDVj2tvWBIWL4nnhzkFB%2BrbeQGkmufel8B2TVU4IL9haPXH7g1m%2FrrdCtPq0P%2F57lWP80ENop1tYvtclSebo2l%2FJog5IOB5Xr9XfoaW3687%2BP%2F0qQES%2BNXvVfBv6nh2dZkelNb6mBxBxcVW163iKukuMgYDD%2B897vhXagj7jlRJr%2FzCZ8qPSyLSEV2gheRwCtx6%2BDYOkIGIScYsb%2BwK1ouH07%2BRiBeSw4QfZiEpp04jCBywAZG6f33%2BFDpaxWPX%2FPsdTDSnZvCBjqkAYes%2BE5DbsHJpwEKjiXZAGo51gNzg2y5nYl59E%2FS%2B%2BydqK8nrikBNqbO8Ll0Ty3qLDqQQWUePnlDE%2BEJCavPQHzeYjr4IXKT15tPQxWeuyh9R%2Bp5sSOGA60GDDKqeikRdjT9ACEQpxRJo9YvVRzYKdCwyU6FUtGhFQk8BnUYMO11x%2FjKou7N4WtVq9HZ1oo6A8wqWrfrK9%2BVG7%2FaKqoxL8vREs7W&X-Amz-Signature=d0ba7ece2d400188319fb49e94b755772ccbd97f34aa549913d6ed8075a332c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3ZFQQO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZy1wZMFZI0L2AspDz4SnsiS1WtYhbgTFkeIjhLoC3BAIhAMJq0RI4fRTPqEd%2B4%2FFSmffz%2FaIK0noBm2ekTB74VqfPKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp%2FSthgsl702o%2Fg%2BUq3AOZNTCo3gmvk4t8Do2zvpEY6V9yBJ1e7oFqfPhKuEL6JYUrzxyga6l3c6VJrby32zKYZMN9x8SXGAc9p1cw1I5dPME1m1KsGVxe5hbDK8hpjWKTkQ4BFQa2LyZgbZuZwBO2dhk%2FdpwrE1FxmNjxfhucdsR28unfUkhPefkz%2FV2SEJpVKimFTaylv1tCYMR%2FrF02ItKKNHbuj2gYRqfpNF%2FFEXcHNYkXbSB0Dm%2FELCo86gumN5X5ruWBwT%2Bx42uBSyFdUEj0cHKClcRWvI755AXMY%2BxMTX5pK79TQp6KzlMYaCICCBbQ2VHvMggnDs1QrQBMlUWeQTsFlDGcTjOI2nKfJJYpTIUnHYNVBSg4Uu55bM5s1jwqE9%2FHvDIDVj2tvWBIWL4nnhzkFB%2BrbeQGkmufel8B2TVU4IL9haPXH7g1m%2FrrdCtPq0P%2F57lWP80ENop1tYvtclSebo2l%2FJog5IOB5Xr9XfoaW3687%2BP%2F0qQES%2BNXvVfBv6nh2dZkelNb6mBxBxcVW163iKukuMgYDD%2B897vhXagj7jlRJr%2FzCZ8qPSyLSEV2gheRwCtx6%2BDYOkIGIScYsb%2BwK1ouH07%2BRiBeSw4QfZiEpp04jCBywAZG6f33%2BFDpaxWPX%2FPsdTDSnZvCBjqkAYes%2BE5DbsHJpwEKjiXZAGo51gNzg2y5nYl59E%2FS%2B%2BydqK8nrikBNqbO8Ll0Ty3qLDqQQWUePnlDE%2BEJCavPQHzeYjr4IXKT15tPQxWeuyh9R%2Bp5sSOGA60GDDKqeikRdjT9ACEQpxRJo9YvVRzYKdCwyU6FUtGhFQk8BnUYMO11x%2FjKou7N4WtVq9HZ1oo6A8wqWrfrK9%2BVG7%2FaKqoxL8vREs7W&X-Amz-Signature=7deb6c098d80826860bb431ece3f35487acfb689fd7080b5ca410e431015c36e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3ZFQQO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZy1wZMFZI0L2AspDz4SnsiS1WtYhbgTFkeIjhLoC3BAIhAMJq0RI4fRTPqEd%2B4%2FFSmffz%2FaIK0noBm2ekTB74VqfPKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp%2FSthgsl702o%2Fg%2BUq3AOZNTCo3gmvk4t8Do2zvpEY6V9yBJ1e7oFqfPhKuEL6JYUrzxyga6l3c6VJrby32zKYZMN9x8SXGAc9p1cw1I5dPME1m1KsGVxe5hbDK8hpjWKTkQ4BFQa2LyZgbZuZwBO2dhk%2FdpwrE1FxmNjxfhucdsR28unfUkhPefkz%2FV2SEJpVKimFTaylv1tCYMR%2FrF02ItKKNHbuj2gYRqfpNF%2FFEXcHNYkXbSB0Dm%2FELCo86gumN5X5ruWBwT%2Bx42uBSyFdUEj0cHKClcRWvI755AXMY%2BxMTX5pK79TQp6KzlMYaCICCBbQ2VHvMggnDs1QrQBMlUWeQTsFlDGcTjOI2nKfJJYpTIUnHYNVBSg4Uu55bM5s1jwqE9%2FHvDIDVj2tvWBIWL4nnhzkFB%2BrbeQGkmufel8B2TVU4IL9haPXH7g1m%2FrrdCtPq0P%2F57lWP80ENop1tYvtclSebo2l%2FJog5IOB5Xr9XfoaW3687%2BP%2F0qQES%2BNXvVfBv6nh2dZkelNb6mBxBxcVW163iKukuMgYDD%2B897vhXagj7jlRJr%2FzCZ8qPSyLSEV2gheRwCtx6%2BDYOkIGIScYsb%2BwK1ouH07%2BRiBeSw4QfZiEpp04jCBywAZG6f33%2BFDpaxWPX%2FPsdTDSnZvCBjqkAYes%2BE5DbsHJpwEKjiXZAGo51gNzg2y5nYl59E%2FS%2B%2BydqK8nrikBNqbO8Ll0Ty3qLDqQQWUePnlDE%2BEJCavPQHzeYjr4IXKT15tPQxWeuyh9R%2Bp5sSOGA60GDDKqeikRdjT9ACEQpxRJo9YvVRzYKdCwyU6FUtGhFQk8BnUYMO11x%2FjKou7N4WtVq9HZ1oo6A8wqWrfrK9%2BVG7%2FaKqoxL8vREs7W&X-Amz-Signature=9d372ff9edd821181b98aea4aea271e99a9b83e6087f3b36355a582f1b9e521f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
