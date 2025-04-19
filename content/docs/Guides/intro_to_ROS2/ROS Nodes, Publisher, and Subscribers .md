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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2NWMQBK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCXwjE0UcK0JTW4HZsZNSx0VMlHBx2C7BLtH0XbUAL6eQIgFWAGawcCAQwQ1eN%2BsL%2FyWexkBOEqK2OBBW3PkBaXZU8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiGEGE%2F17qSCYXlxircA6CZjCAQv1dpkHnVA3zYjR11CDKVjQr5CFZsVgLDAWwzT6GxU%2BZgEev6E%2FR6RDl2ym7DGpuAJNBd4QD04%2BFndIN5zViBQzbewE2XZoal%2FB1fw8LdFHik5t0OdUxVcrutcwpiwFcdJBdWMoSnsF%2FBYV7itllhcuY0LXu75TGmIa1eb0XKG9S%2BprLG8UtMTVCHMEQQ83IJrro6WaNtzKF7U%2Bz0biLP3Pl%2BO0C7Ni2VLFiBERlSDdPNieTHYv8p8TLJX%2F6uDrmr%2BP8Gdym%2BVtiaN9Ro%2F6eDoKoywNrYK0tAHU%2BtR6BHh97U8id1zcyhIbptxfOT5UEdi9cC0tjkSkUn%2Be2%2BXLK4FrRt8sPJNd0WCWeMGNOB0W9%2BrIyEjbNxgI7WSMb%2F1s%2FjO1caW5hwN0PQ2%2BSViEWdmFdhwnTUelWoXnrUIeUapULebEZySiV0XKAm%2F5MEQJn0b%2BRCPJcwGFZ6dRQyEY5KQ%2BUHMkBbcQwhH0C8vD62VieqCjjuHGqUvt3PcHxKndbHKdlfaqMGxkY6%2F1ZlXDv8DMM77IupPEa2O7amrXFl5nPLoVyTuZlsOaH%2FuuL5Lkrh%2BCnXpaQ6FKN3UtVjx9oG%2FbUE3QExgQB%2BzZ0rcprs0%2FMxtEMkmfjTMJCgj8AGOqUBYRCs3vbvx%2BDZTO1DwXyzQiL67EDVWUpCZZAEX9KpZ%2FKqorD5FsBGIPyTAZG%2B%2B3mZe%2FX6GTmTlSagQdrtqWGc4bw5NOaeomwEGPlLvXVkaqmzqNbKntstOR%2BnHqbTkyIRlenwcTYe8%2Fwe3ywlNbuFhMt49OH%2BnXoeAWeQ5QEa955XOcRvsv1y8qCWsiDdnDXirruxaK1qz0VsPzRYovhOrkKKxB%2BT&X-Amz-Signature=b789b08b5080e0f9d3ace7e2cb954706c767fb5e5a89c363b56149757ebd431f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2NWMQBK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCXwjE0UcK0JTW4HZsZNSx0VMlHBx2C7BLtH0XbUAL6eQIgFWAGawcCAQwQ1eN%2BsL%2FyWexkBOEqK2OBBW3PkBaXZU8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiGEGE%2F17qSCYXlxircA6CZjCAQv1dpkHnVA3zYjR11CDKVjQr5CFZsVgLDAWwzT6GxU%2BZgEev6E%2FR6RDl2ym7DGpuAJNBd4QD04%2BFndIN5zViBQzbewE2XZoal%2FB1fw8LdFHik5t0OdUxVcrutcwpiwFcdJBdWMoSnsF%2FBYV7itllhcuY0LXu75TGmIa1eb0XKG9S%2BprLG8UtMTVCHMEQQ83IJrro6WaNtzKF7U%2Bz0biLP3Pl%2BO0C7Ni2VLFiBERlSDdPNieTHYv8p8TLJX%2F6uDrmr%2BP8Gdym%2BVtiaN9Ro%2F6eDoKoywNrYK0tAHU%2BtR6BHh97U8id1zcyhIbptxfOT5UEdi9cC0tjkSkUn%2Be2%2BXLK4FrRt8sPJNd0WCWeMGNOB0W9%2BrIyEjbNxgI7WSMb%2F1s%2FjO1caW5hwN0PQ2%2BSViEWdmFdhwnTUelWoXnrUIeUapULebEZySiV0XKAm%2F5MEQJn0b%2BRCPJcwGFZ6dRQyEY5KQ%2BUHMkBbcQwhH0C8vD62VieqCjjuHGqUvt3PcHxKndbHKdlfaqMGxkY6%2F1ZlXDv8DMM77IupPEa2O7amrXFl5nPLoVyTuZlsOaH%2FuuL5Lkrh%2BCnXpaQ6FKN3UtVjx9oG%2FbUE3QExgQB%2BzZ0rcprs0%2FMxtEMkmfjTMJCgj8AGOqUBYRCs3vbvx%2BDZTO1DwXyzQiL67EDVWUpCZZAEX9KpZ%2FKqorD5FsBGIPyTAZG%2B%2B3mZe%2FX6GTmTlSagQdrtqWGc4bw5NOaeomwEGPlLvXVkaqmzqNbKntstOR%2BnHqbTkyIRlenwcTYe8%2Fwe3ywlNbuFhMt49OH%2BnXoeAWeQ5QEa955XOcRvsv1y8qCWsiDdnDXirruxaK1qz0VsPzRYovhOrkKKxB%2BT&X-Amz-Signature=1fe834e36ade717d83d20d3be6f281d78a394055966588e8f4a74858057f9dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2NWMQBK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCXwjE0UcK0JTW4HZsZNSx0VMlHBx2C7BLtH0XbUAL6eQIgFWAGawcCAQwQ1eN%2BsL%2FyWexkBOEqK2OBBW3PkBaXZU8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiGEGE%2F17qSCYXlxircA6CZjCAQv1dpkHnVA3zYjR11CDKVjQr5CFZsVgLDAWwzT6GxU%2BZgEev6E%2FR6RDl2ym7DGpuAJNBd4QD04%2BFndIN5zViBQzbewE2XZoal%2FB1fw8LdFHik5t0OdUxVcrutcwpiwFcdJBdWMoSnsF%2FBYV7itllhcuY0LXu75TGmIa1eb0XKG9S%2BprLG8UtMTVCHMEQQ83IJrro6WaNtzKF7U%2Bz0biLP3Pl%2BO0C7Ni2VLFiBERlSDdPNieTHYv8p8TLJX%2F6uDrmr%2BP8Gdym%2BVtiaN9Ro%2F6eDoKoywNrYK0tAHU%2BtR6BHh97U8id1zcyhIbptxfOT5UEdi9cC0tjkSkUn%2Be2%2BXLK4FrRt8sPJNd0WCWeMGNOB0W9%2BrIyEjbNxgI7WSMb%2F1s%2FjO1caW5hwN0PQ2%2BSViEWdmFdhwnTUelWoXnrUIeUapULebEZySiV0XKAm%2F5MEQJn0b%2BRCPJcwGFZ6dRQyEY5KQ%2BUHMkBbcQwhH0C8vD62VieqCjjuHGqUvt3PcHxKndbHKdlfaqMGxkY6%2F1ZlXDv8DMM77IupPEa2O7amrXFl5nPLoVyTuZlsOaH%2FuuL5Lkrh%2BCnXpaQ6FKN3UtVjx9oG%2FbUE3QExgQB%2BzZ0rcprs0%2FMxtEMkmfjTMJCgj8AGOqUBYRCs3vbvx%2BDZTO1DwXyzQiL67EDVWUpCZZAEX9KpZ%2FKqorD5FsBGIPyTAZG%2B%2B3mZe%2FX6GTmTlSagQdrtqWGc4bw5NOaeomwEGPlLvXVkaqmzqNbKntstOR%2BnHqbTkyIRlenwcTYe8%2Fwe3ywlNbuFhMt49OH%2BnXoeAWeQ5QEa955XOcRvsv1y8qCWsiDdnDXirruxaK1qz0VsPzRYovhOrkKKxB%2BT&X-Amz-Signature=5f68425c62a2bc0b3a36daa88081cad0ed4e5f9f022378a738ef5b8530bd23e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2NWMQBK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCXwjE0UcK0JTW4HZsZNSx0VMlHBx2C7BLtH0XbUAL6eQIgFWAGawcCAQwQ1eN%2BsL%2FyWexkBOEqK2OBBW3PkBaXZU8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiGEGE%2F17qSCYXlxircA6CZjCAQv1dpkHnVA3zYjR11CDKVjQr5CFZsVgLDAWwzT6GxU%2BZgEev6E%2FR6RDl2ym7DGpuAJNBd4QD04%2BFndIN5zViBQzbewE2XZoal%2FB1fw8LdFHik5t0OdUxVcrutcwpiwFcdJBdWMoSnsF%2FBYV7itllhcuY0LXu75TGmIa1eb0XKG9S%2BprLG8UtMTVCHMEQQ83IJrro6WaNtzKF7U%2Bz0biLP3Pl%2BO0C7Ni2VLFiBERlSDdPNieTHYv8p8TLJX%2F6uDrmr%2BP8Gdym%2BVtiaN9Ro%2F6eDoKoywNrYK0tAHU%2BtR6BHh97U8id1zcyhIbptxfOT5UEdi9cC0tjkSkUn%2Be2%2BXLK4FrRt8sPJNd0WCWeMGNOB0W9%2BrIyEjbNxgI7WSMb%2F1s%2FjO1caW5hwN0PQ2%2BSViEWdmFdhwnTUelWoXnrUIeUapULebEZySiV0XKAm%2F5MEQJn0b%2BRCPJcwGFZ6dRQyEY5KQ%2BUHMkBbcQwhH0C8vD62VieqCjjuHGqUvt3PcHxKndbHKdlfaqMGxkY6%2F1ZlXDv8DMM77IupPEa2O7amrXFl5nPLoVyTuZlsOaH%2FuuL5Lkrh%2BCnXpaQ6FKN3UtVjx9oG%2FbUE3QExgQB%2BzZ0rcprs0%2FMxtEMkmfjTMJCgj8AGOqUBYRCs3vbvx%2BDZTO1DwXyzQiL67EDVWUpCZZAEX9KpZ%2FKqorD5FsBGIPyTAZG%2B%2B3mZe%2FX6GTmTlSagQdrtqWGc4bw5NOaeomwEGPlLvXVkaqmzqNbKntstOR%2BnHqbTkyIRlenwcTYe8%2Fwe3ywlNbuFhMt49OH%2BnXoeAWeQ5QEa955XOcRvsv1y8qCWsiDdnDXirruxaK1qz0VsPzRYovhOrkKKxB%2BT&X-Amz-Signature=85d8e555cbaf8536117e5bb82360cc5e9e01d87137eaa41623f8d67197618d66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2NWMQBK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCXwjE0UcK0JTW4HZsZNSx0VMlHBx2C7BLtH0XbUAL6eQIgFWAGawcCAQwQ1eN%2BsL%2FyWexkBOEqK2OBBW3PkBaXZU8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiGEGE%2F17qSCYXlxircA6CZjCAQv1dpkHnVA3zYjR11CDKVjQr5CFZsVgLDAWwzT6GxU%2BZgEev6E%2FR6RDl2ym7DGpuAJNBd4QD04%2BFndIN5zViBQzbewE2XZoal%2FB1fw8LdFHik5t0OdUxVcrutcwpiwFcdJBdWMoSnsF%2FBYV7itllhcuY0LXu75TGmIa1eb0XKG9S%2BprLG8UtMTVCHMEQQ83IJrro6WaNtzKF7U%2Bz0biLP3Pl%2BO0C7Ni2VLFiBERlSDdPNieTHYv8p8TLJX%2F6uDrmr%2BP8Gdym%2BVtiaN9Ro%2F6eDoKoywNrYK0tAHU%2BtR6BHh97U8id1zcyhIbptxfOT5UEdi9cC0tjkSkUn%2Be2%2BXLK4FrRt8sPJNd0WCWeMGNOB0W9%2BrIyEjbNxgI7WSMb%2F1s%2FjO1caW5hwN0PQ2%2BSViEWdmFdhwnTUelWoXnrUIeUapULebEZySiV0XKAm%2F5MEQJn0b%2BRCPJcwGFZ6dRQyEY5KQ%2BUHMkBbcQwhH0C8vD62VieqCjjuHGqUvt3PcHxKndbHKdlfaqMGxkY6%2F1ZlXDv8DMM77IupPEa2O7amrXFl5nPLoVyTuZlsOaH%2FuuL5Lkrh%2BCnXpaQ6FKN3UtVjx9oG%2FbUE3QExgQB%2BzZ0rcprs0%2FMxtEMkmfjTMJCgj8AGOqUBYRCs3vbvx%2BDZTO1DwXyzQiL67EDVWUpCZZAEX9KpZ%2FKqorD5FsBGIPyTAZG%2B%2B3mZe%2FX6GTmTlSagQdrtqWGc4bw5NOaeomwEGPlLvXVkaqmzqNbKntstOR%2BnHqbTkyIRlenwcTYe8%2Fwe3ywlNbuFhMt49OH%2BnXoeAWeQ5QEa955XOcRvsv1y8qCWsiDdnDXirruxaK1qz0VsPzRYovhOrkKKxB%2BT&X-Amz-Signature=f4e18a118cb40f10d44f0b6af2cca8894e9c6a858e4855431395b0093c87627e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2NWMQBK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCXwjE0UcK0JTW4HZsZNSx0VMlHBx2C7BLtH0XbUAL6eQIgFWAGawcCAQwQ1eN%2BsL%2FyWexkBOEqK2OBBW3PkBaXZU8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiGEGE%2F17qSCYXlxircA6CZjCAQv1dpkHnVA3zYjR11CDKVjQr5CFZsVgLDAWwzT6GxU%2BZgEev6E%2FR6RDl2ym7DGpuAJNBd4QD04%2BFndIN5zViBQzbewE2XZoal%2FB1fw8LdFHik5t0OdUxVcrutcwpiwFcdJBdWMoSnsF%2FBYV7itllhcuY0LXu75TGmIa1eb0XKG9S%2BprLG8UtMTVCHMEQQ83IJrro6WaNtzKF7U%2Bz0biLP3Pl%2BO0C7Ni2VLFiBERlSDdPNieTHYv8p8TLJX%2F6uDrmr%2BP8Gdym%2BVtiaN9Ro%2F6eDoKoywNrYK0tAHU%2BtR6BHh97U8id1zcyhIbptxfOT5UEdi9cC0tjkSkUn%2Be2%2BXLK4FrRt8sPJNd0WCWeMGNOB0W9%2BrIyEjbNxgI7WSMb%2F1s%2FjO1caW5hwN0PQ2%2BSViEWdmFdhwnTUelWoXnrUIeUapULebEZySiV0XKAm%2F5MEQJn0b%2BRCPJcwGFZ6dRQyEY5KQ%2BUHMkBbcQwhH0C8vD62VieqCjjuHGqUvt3PcHxKndbHKdlfaqMGxkY6%2F1ZlXDv8DMM77IupPEa2O7amrXFl5nPLoVyTuZlsOaH%2FuuL5Lkrh%2BCnXpaQ6FKN3UtVjx9oG%2FbUE3QExgQB%2BzZ0rcprs0%2FMxtEMkmfjTMJCgj8AGOqUBYRCs3vbvx%2BDZTO1DwXyzQiL67EDVWUpCZZAEX9KpZ%2FKqorD5FsBGIPyTAZG%2B%2B3mZe%2FX6GTmTlSagQdrtqWGc4bw5NOaeomwEGPlLvXVkaqmzqNbKntstOR%2BnHqbTkyIRlenwcTYe8%2Fwe3ywlNbuFhMt49OH%2BnXoeAWeQ5QEa955XOcRvsv1y8qCWsiDdnDXirruxaK1qz0VsPzRYovhOrkKKxB%2BT&X-Amz-Signature=429f7bfcd77c1fe52ab4b8ac1e9b2fe9b0ff2f15e55dc79a8a31027cc0ee3db3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2NWMQBK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCXwjE0UcK0JTW4HZsZNSx0VMlHBx2C7BLtH0XbUAL6eQIgFWAGawcCAQwQ1eN%2BsL%2FyWexkBOEqK2OBBW3PkBaXZU8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiGEGE%2F17qSCYXlxircA6CZjCAQv1dpkHnVA3zYjR11CDKVjQr5CFZsVgLDAWwzT6GxU%2BZgEev6E%2FR6RDl2ym7DGpuAJNBd4QD04%2BFndIN5zViBQzbewE2XZoal%2FB1fw8LdFHik5t0OdUxVcrutcwpiwFcdJBdWMoSnsF%2FBYV7itllhcuY0LXu75TGmIa1eb0XKG9S%2BprLG8UtMTVCHMEQQ83IJrro6WaNtzKF7U%2Bz0biLP3Pl%2BO0C7Ni2VLFiBERlSDdPNieTHYv8p8TLJX%2F6uDrmr%2BP8Gdym%2BVtiaN9Ro%2F6eDoKoywNrYK0tAHU%2BtR6BHh97U8id1zcyhIbptxfOT5UEdi9cC0tjkSkUn%2Be2%2BXLK4FrRt8sPJNd0WCWeMGNOB0W9%2BrIyEjbNxgI7WSMb%2F1s%2FjO1caW5hwN0PQ2%2BSViEWdmFdhwnTUelWoXnrUIeUapULebEZySiV0XKAm%2F5MEQJn0b%2BRCPJcwGFZ6dRQyEY5KQ%2BUHMkBbcQwhH0C8vD62VieqCjjuHGqUvt3PcHxKndbHKdlfaqMGxkY6%2F1ZlXDv8DMM77IupPEa2O7amrXFl5nPLoVyTuZlsOaH%2FuuL5Lkrh%2BCnXpaQ6FKN3UtVjx9oG%2FbUE3QExgQB%2BzZ0rcprs0%2FMxtEMkmfjTMJCgj8AGOqUBYRCs3vbvx%2BDZTO1DwXyzQiL67EDVWUpCZZAEX9KpZ%2FKqorD5FsBGIPyTAZG%2B%2B3mZe%2FX6GTmTlSagQdrtqWGc4bw5NOaeomwEGPlLvXVkaqmzqNbKntstOR%2BnHqbTkyIRlenwcTYe8%2Fwe3ywlNbuFhMt49OH%2BnXoeAWeQ5QEa955XOcRvsv1y8qCWsiDdnDXirruxaK1qz0VsPzRYovhOrkKKxB%2BT&X-Amz-Signature=fd44eee00c49b0967a1b31c0ff7c368f81ab5f3fcc1a6c9bc5910607485d38bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2NWMQBK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCXwjE0UcK0JTW4HZsZNSx0VMlHBx2C7BLtH0XbUAL6eQIgFWAGawcCAQwQ1eN%2BsL%2FyWexkBOEqK2OBBW3PkBaXZU8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiGEGE%2F17qSCYXlxircA6CZjCAQv1dpkHnVA3zYjR11CDKVjQr5CFZsVgLDAWwzT6GxU%2BZgEev6E%2FR6RDl2ym7DGpuAJNBd4QD04%2BFndIN5zViBQzbewE2XZoal%2FB1fw8LdFHik5t0OdUxVcrutcwpiwFcdJBdWMoSnsF%2FBYV7itllhcuY0LXu75TGmIa1eb0XKG9S%2BprLG8UtMTVCHMEQQ83IJrro6WaNtzKF7U%2Bz0biLP3Pl%2BO0C7Ni2VLFiBERlSDdPNieTHYv8p8TLJX%2F6uDrmr%2BP8Gdym%2BVtiaN9Ro%2F6eDoKoywNrYK0tAHU%2BtR6BHh97U8id1zcyhIbptxfOT5UEdi9cC0tjkSkUn%2Be2%2BXLK4FrRt8sPJNd0WCWeMGNOB0W9%2BrIyEjbNxgI7WSMb%2F1s%2FjO1caW5hwN0PQ2%2BSViEWdmFdhwnTUelWoXnrUIeUapULebEZySiV0XKAm%2F5MEQJn0b%2BRCPJcwGFZ6dRQyEY5KQ%2BUHMkBbcQwhH0C8vD62VieqCjjuHGqUvt3PcHxKndbHKdlfaqMGxkY6%2F1ZlXDv8DMM77IupPEa2O7amrXFl5nPLoVyTuZlsOaH%2FuuL5Lkrh%2BCnXpaQ6FKN3UtVjx9oG%2FbUE3QExgQB%2BzZ0rcprs0%2FMxtEMkmfjTMJCgj8AGOqUBYRCs3vbvx%2BDZTO1DwXyzQiL67EDVWUpCZZAEX9KpZ%2FKqorD5FsBGIPyTAZG%2B%2B3mZe%2FX6GTmTlSagQdrtqWGc4bw5NOaeomwEGPlLvXVkaqmzqNbKntstOR%2BnHqbTkyIRlenwcTYe8%2Fwe3ywlNbuFhMt49OH%2BnXoeAWeQ5QEa955XOcRvsv1y8qCWsiDdnDXirruxaK1qz0VsPzRYovhOrkKKxB%2BT&X-Amz-Signature=7aff4f0898950bb6f570cfa3ac2b4196873903908f15e63b48a201770ea34caf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
