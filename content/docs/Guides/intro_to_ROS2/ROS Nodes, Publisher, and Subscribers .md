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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6I6RF5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtkAzwXRefWsFRWvyf4gUzeSz9b8fPUXNOK9EFnNfYOgIgU1oYhWWyrALLyJpi%2Fqnjci37erIykunb2Vo8ewL62AUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaCo7wgQ58bWGZmvyrcA%2Fs3AvD04pzRSTk48hVq9liRrrGYheeF8A25RB0XPM6HVCkF4Wvgy%2FlnDXYqlkvYlryVWE4atFSSp2r%2F15DO0evP57ErO63VTSRWf%2B5VE%2FKaZ%2B62%2BDiabK0239GIXE10RP%2BsegUTHNk8pi3awBJGkjxErs53zVtDMYtqNxXYHiJMsqA1wA3RHq2rS7VVXhr4Xuwhl0bQDGwVTo4021QBt0UhdDM5zcWs%2B0QVSLzCyWbqZ0fx5N3563FRgq6B1lg3CvZryY%2Ft%2BbOaWGQRGMLHasWCq%2F9U3xNWYVyqRWHkSqsbmw50UiJrGxvzD3E9Ot5VHVoQ2dBBTfECk8hInkxWetotlARsoJyZkdobzsKtZkzSZ6STvcOqAi0zDxuGbfpVauezHC5IwBndrw%2B7rnO0%2Fglg7e%2BM6VCutnpgDnBKXj4xx6TDrc6lmVPQ38Cs3nLHSnWJcjzXEYewTij6rI8jOhtvpiqv6y1ASilo6gOYpyJ5l%2FvcprYKqNqHexVj8Z7CXAu9QW44TL1RDqAeNTqAbIXd98rUTEhXT2OhgpUANNv4MQs7HDbmqCML1ZOx9nJqI3pyPiqWaG%2BWpSoB3jGIuIdxIL20XBRXQ6LONOyaCidCtAxGRwyxDKpoybjbMIzhtL0GOqUBytF4TC5KQe22wrvPFXYNH5UJt4eKNk2IuzBrDhIMJUQuN1aTLLj6zfn71vARY3PZ4vHoP2EP9jhAnXv8szI8KWhoTimIE9NCv8YCA9zTtWsX5%2BE9QcnIKvrEfxJ6GFLDMGgS4v7W4uth7yh0HRk4Z2u1p36McEFL%2B668xO%2Fbb5%2FliLz0HGhr5GLTRqacqYjwVWOiUWumtVaxQGZn8IxWEEOSDjWH&X-Amz-Signature=0809fbe963ef28ade9d30a3c207774a5f9295fc1f9eed52533b1fea0d33a1b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6I6RF5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtkAzwXRefWsFRWvyf4gUzeSz9b8fPUXNOK9EFnNfYOgIgU1oYhWWyrALLyJpi%2Fqnjci37erIykunb2Vo8ewL62AUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaCo7wgQ58bWGZmvyrcA%2Fs3AvD04pzRSTk48hVq9liRrrGYheeF8A25RB0XPM6HVCkF4Wvgy%2FlnDXYqlkvYlryVWE4atFSSp2r%2F15DO0evP57ErO63VTSRWf%2B5VE%2FKaZ%2B62%2BDiabK0239GIXE10RP%2BsegUTHNk8pi3awBJGkjxErs53zVtDMYtqNxXYHiJMsqA1wA3RHq2rS7VVXhr4Xuwhl0bQDGwVTo4021QBt0UhdDM5zcWs%2B0QVSLzCyWbqZ0fx5N3563FRgq6B1lg3CvZryY%2Ft%2BbOaWGQRGMLHasWCq%2F9U3xNWYVyqRWHkSqsbmw50UiJrGxvzD3E9Ot5VHVoQ2dBBTfECk8hInkxWetotlARsoJyZkdobzsKtZkzSZ6STvcOqAi0zDxuGbfpVauezHC5IwBndrw%2B7rnO0%2Fglg7e%2BM6VCutnpgDnBKXj4xx6TDrc6lmVPQ38Cs3nLHSnWJcjzXEYewTij6rI8jOhtvpiqv6y1ASilo6gOYpyJ5l%2FvcprYKqNqHexVj8Z7CXAu9QW44TL1RDqAeNTqAbIXd98rUTEhXT2OhgpUANNv4MQs7HDbmqCML1ZOx9nJqI3pyPiqWaG%2BWpSoB3jGIuIdxIL20XBRXQ6LONOyaCidCtAxGRwyxDKpoybjbMIzhtL0GOqUBytF4TC5KQe22wrvPFXYNH5UJt4eKNk2IuzBrDhIMJUQuN1aTLLj6zfn71vARY3PZ4vHoP2EP9jhAnXv8szI8KWhoTimIE9NCv8YCA9zTtWsX5%2BE9QcnIKvrEfxJ6GFLDMGgS4v7W4uth7yh0HRk4Z2u1p36McEFL%2B668xO%2Fbb5%2FliLz0HGhr5GLTRqacqYjwVWOiUWumtVaxQGZn8IxWEEOSDjWH&X-Amz-Signature=dada978436ed0b36212865dba82c96e4ffc19593c7d1a07e359ad563be83d9c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6I6RF5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtkAzwXRefWsFRWvyf4gUzeSz9b8fPUXNOK9EFnNfYOgIgU1oYhWWyrALLyJpi%2Fqnjci37erIykunb2Vo8ewL62AUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaCo7wgQ58bWGZmvyrcA%2Fs3AvD04pzRSTk48hVq9liRrrGYheeF8A25RB0XPM6HVCkF4Wvgy%2FlnDXYqlkvYlryVWE4atFSSp2r%2F15DO0evP57ErO63VTSRWf%2B5VE%2FKaZ%2B62%2BDiabK0239GIXE10RP%2BsegUTHNk8pi3awBJGkjxErs53zVtDMYtqNxXYHiJMsqA1wA3RHq2rS7VVXhr4Xuwhl0bQDGwVTo4021QBt0UhdDM5zcWs%2B0QVSLzCyWbqZ0fx5N3563FRgq6B1lg3CvZryY%2Ft%2BbOaWGQRGMLHasWCq%2F9U3xNWYVyqRWHkSqsbmw50UiJrGxvzD3E9Ot5VHVoQ2dBBTfECk8hInkxWetotlARsoJyZkdobzsKtZkzSZ6STvcOqAi0zDxuGbfpVauezHC5IwBndrw%2B7rnO0%2Fglg7e%2BM6VCutnpgDnBKXj4xx6TDrc6lmVPQ38Cs3nLHSnWJcjzXEYewTij6rI8jOhtvpiqv6y1ASilo6gOYpyJ5l%2FvcprYKqNqHexVj8Z7CXAu9QW44TL1RDqAeNTqAbIXd98rUTEhXT2OhgpUANNv4MQs7HDbmqCML1ZOx9nJqI3pyPiqWaG%2BWpSoB3jGIuIdxIL20XBRXQ6LONOyaCidCtAxGRwyxDKpoybjbMIzhtL0GOqUBytF4TC5KQe22wrvPFXYNH5UJt4eKNk2IuzBrDhIMJUQuN1aTLLj6zfn71vARY3PZ4vHoP2EP9jhAnXv8szI8KWhoTimIE9NCv8YCA9zTtWsX5%2BE9QcnIKvrEfxJ6GFLDMGgS4v7W4uth7yh0HRk4Z2u1p36McEFL%2B668xO%2Fbb5%2FliLz0HGhr5GLTRqacqYjwVWOiUWumtVaxQGZn8IxWEEOSDjWH&X-Amz-Signature=6645453c3ee0454d3667e805baec429fdb0ad90b385dc8404452e3733c4fb0c7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6I6RF5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtkAzwXRefWsFRWvyf4gUzeSz9b8fPUXNOK9EFnNfYOgIgU1oYhWWyrALLyJpi%2Fqnjci37erIykunb2Vo8ewL62AUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaCo7wgQ58bWGZmvyrcA%2Fs3AvD04pzRSTk48hVq9liRrrGYheeF8A25RB0XPM6HVCkF4Wvgy%2FlnDXYqlkvYlryVWE4atFSSp2r%2F15DO0evP57ErO63VTSRWf%2B5VE%2FKaZ%2B62%2BDiabK0239GIXE10RP%2BsegUTHNk8pi3awBJGkjxErs53zVtDMYtqNxXYHiJMsqA1wA3RHq2rS7VVXhr4Xuwhl0bQDGwVTo4021QBt0UhdDM5zcWs%2B0QVSLzCyWbqZ0fx5N3563FRgq6B1lg3CvZryY%2Ft%2BbOaWGQRGMLHasWCq%2F9U3xNWYVyqRWHkSqsbmw50UiJrGxvzD3E9Ot5VHVoQ2dBBTfECk8hInkxWetotlARsoJyZkdobzsKtZkzSZ6STvcOqAi0zDxuGbfpVauezHC5IwBndrw%2B7rnO0%2Fglg7e%2BM6VCutnpgDnBKXj4xx6TDrc6lmVPQ38Cs3nLHSnWJcjzXEYewTij6rI8jOhtvpiqv6y1ASilo6gOYpyJ5l%2FvcprYKqNqHexVj8Z7CXAu9QW44TL1RDqAeNTqAbIXd98rUTEhXT2OhgpUANNv4MQs7HDbmqCML1ZOx9nJqI3pyPiqWaG%2BWpSoB3jGIuIdxIL20XBRXQ6LONOyaCidCtAxGRwyxDKpoybjbMIzhtL0GOqUBytF4TC5KQe22wrvPFXYNH5UJt4eKNk2IuzBrDhIMJUQuN1aTLLj6zfn71vARY3PZ4vHoP2EP9jhAnXv8szI8KWhoTimIE9NCv8YCA9zTtWsX5%2BE9QcnIKvrEfxJ6GFLDMGgS4v7W4uth7yh0HRk4Z2u1p36McEFL%2B668xO%2Fbb5%2FliLz0HGhr5GLTRqacqYjwVWOiUWumtVaxQGZn8IxWEEOSDjWH&X-Amz-Signature=b5d0945bb2031685b47e8b2527d88ab8caa777facff3dc9ba9a2240aa269338d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6I6RF5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtkAzwXRefWsFRWvyf4gUzeSz9b8fPUXNOK9EFnNfYOgIgU1oYhWWyrALLyJpi%2Fqnjci37erIykunb2Vo8ewL62AUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaCo7wgQ58bWGZmvyrcA%2Fs3AvD04pzRSTk48hVq9liRrrGYheeF8A25RB0XPM6HVCkF4Wvgy%2FlnDXYqlkvYlryVWE4atFSSp2r%2F15DO0evP57ErO63VTSRWf%2B5VE%2FKaZ%2B62%2BDiabK0239GIXE10RP%2BsegUTHNk8pi3awBJGkjxErs53zVtDMYtqNxXYHiJMsqA1wA3RHq2rS7VVXhr4Xuwhl0bQDGwVTo4021QBt0UhdDM5zcWs%2B0QVSLzCyWbqZ0fx5N3563FRgq6B1lg3CvZryY%2Ft%2BbOaWGQRGMLHasWCq%2F9U3xNWYVyqRWHkSqsbmw50UiJrGxvzD3E9Ot5VHVoQ2dBBTfECk8hInkxWetotlARsoJyZkdobzsKtZkzSZ6STvcOqAi0zDxuGbfpVauezHC5IwBndrw%2B7rnO0%2Fglg7e%2BM6VCutnpgDnBKXj4xx6TDrc6lmVPQ38Cs3nLHSnWJcjzXEYewTij6rI8jOhtvpiqv6y1ASilo6gOYpyJ5l%2FvcprYKqNqHexVj8Z7CXAu9QW44TL1RDqAeNTqAbIXd98rUTEhXT2OhgpUANNv4MQs7HDbmqCML1ZOx9nJqI3pyPiqWaG%2BWpSoB3jGIuIdxIL20XBRXQ6LONOyaCidCtAxGRwyxDKpoybjbMIzhtL0GOqUBytF4TC5KQe22wrvPFXYNH5UJt4eKNk2IuzBrDhIMJUQuN1aTLLj6zfn71vARY3PZ4vHoP2EP9jhAnXv8szI8KWhoTimIE9NCv8YCA9zTtWsX5%2BE9QcnIKvrEfxJ6GFLDMGgS4v7W4uth7yh0HRk4Z2u1p36McEFL%2B668xO%2Fbb5%2FliLz0HGhr5GLTRqacqYjwVWOiUWumtVaxQGZn8IxWEEOSDjWH&X-Amz-Signature=0e92f5bf05912b4f43fd97b4f3b5c525177811ffe282f75fe3b2dc76ea3633f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6I6RF5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtkAzwXRefWsFRWvyf4gUzeSz9b8fPUXNOK9EFnNfYOgIgU1oYhWWyrALLyJpi%2Fqnjci37erIykunb2Vo8ewL62AUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaCo7wgQ58bWGZmvyrcA%2Fs3AvD04pzRSTk48hVq9liRrrGYheeF8A25RB0XPM6HVCkF4Wvgy%2FlnDXYqlkvYlryVWE4atFSSp2r%2F15DO0evP57ErO63VTSRWf%2B5VE%2FKaZ%2B62%2BDiabK0239GIXE10RP%2BsegUTHNk8pi3awBJGkjxErs53zVtDMYtqNxXYHiJMsqA1wA3RHq2rS7VVXhr4Xuwhl0bQDGwVTo4021QBt0UhdDM5zcWs%2B0QVSLzCyWbqZ0fx5N3563FRgq6B1lg3CvZryY%2Ft%2BbOaWGQRGMLHasWCq%2F9U3xNWYVyqRWHkSqsbmw50UiJrGxvzD3E9Ot5VHVoQ2dBBTfECk8hInkxWetotlARsoJyZkdobzsKtZkzSZ6STvcOqAi0zDxuGbfpVauezHC5IwBndrw%2B7rnO0%2Fglg7e%2BM6VCutnpgDnBKXj4xx6TDrc6lmVPQ38Cs3nLHSnWJcjzXEYewTij6rI8jOhtvpiqv6y1ASilo6gOYpyJ5l%2FvcprYKqNqHexVj8Z7CXAu9QW44TL1RDqAeNTqAbIXd98rUTEhXT2OhgpUANNv4MQs7HDbmqCML1ZOx9nJqI3pyPiqWaG%2BWpSoB3jGIuIdxIL20XBRXQ6LONOyaCidCtAxGRwyxDKpoybjbMIzhtL0GOqUBytF4TC5KQe22wrvPFXYNH5UJt4eKNk2IuzBrDhIMJUQuN1aTLLj6zfn71vARY3PZ4vHoP2EP9jhAnXv8szI8KWhoTimIE9NCv8YCA9zTtWsX5%2BE9QcnIKvrEfxJ6GFLDMGgS4v7W4uth7yh0HRk4Z2u1p36McEFL%2B668xO%2Fbb5%2FliLz0HGhr5GLTRqacqYjwVWOiUWumtVaxQGZn8IxWEEOSDjWH&X-Amz-Signature=1f6c0baf8b95a989bd0e010a0e03fbc83f665286a71a70305a384772d9ebff89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6I6RF5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtkAzwXRefWsFRWvyf4gUzeSz9b8fPUXNOK9EFnNfYOgIgU1oYhWWyrALLyJpi%2Fqnjci37erIykunb2Vo8ewL62AUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaCo7wgQ58bWGZmvyrcA%2Fs3AvD04pzRSTk48hVq9liRrrGYheeF8A25RB0XPM6HVCkF4Wvgy%2FlnDXYqlkvYlryVWE4atFSSp2r%2F15DO0evP57ErO63VTSRWf%2B5VE%2FKaZ%2B62%2BDiabK0239GIXE10RP%2BsegUTHNk8pi3awBJGkjxErs53zVtDMYtqNxXYHiJMsqA1wA3RHq2rS7VVXhr4Xuwhl0bQDGwVTo4021QBt0UhdDM5zcWs%2B0QVSLzCyWbqZ0fx5N3563FRgq6B1lg3CvZryY%2Ft%2BbOaWGQRGMLHasWCq%2F9U3xNWYVyqRWHkSqsbmw50UiJrGxvzD3E9Ot5VHVoQ2dBBTfECk8hInkxWetotlARsoJyZkdobzsKtZkzSZ6STvcOqAi0zDxuGbfpVauezHC5IwBndrw%2B7rnO0%2Fglg7e%2BM6VCutnpgDnBKXj4xx6TDrc6lmVPQ38Cs3nLHSnWJcjzXEYewTij6rI8jOhtvpiqv6y1ASilo6gOYpyJ5l%2FvcprYKqNqHexVj8Z7CXAu9QW44TL1RDqAeNTqAbIXd98rUTEhXT2OhgpUANNv4MQs7HDbmqCML1ZOx9nJqI3pyPiqWaG%2BWpSoB3jGIuIdxIL20XBRXQ6LONOyaCidCtAxGRwyxDKpoybjbMIzhtL0GOqUBytF4TC5KQe22wrvPFXYNH5UJt4eKNk2IuzBrDhIMJUQuN1aTLLj6zfn71vARY3PZ4vHoP2EP9jhAnXv8szI8KWhoTimIE9NCv8YCA9zTtWsX5%2BE9QcnIKvrEfxJ6GFLDMGgS4v7W4uth7yh0HRk4Z2u1p36McEFL%2B668xO%2Fbb5%2FliLz0HGhr5GLTRqacqYjwVWOiUWumtVaxQGZn8IxWEEOSDjWH&X-Amz-Signature=10d66ba89c0d2017e4d3e28d315609dc1f2d41e1174fcbe8bc305857e929b1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6I6RF5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtkAzwXRefWsFRWvyf4gUzeSz9b8fPUXNOK9EFnNfYOgIgU1oYhWWyrALLyJpi%2Fqnjci37erIykunb2Vo8ewL62AUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaCo7wgQ58bWGZmvyrcA%2Fs3AvD04pzRSTk48hVq9liRrrGYheeF8A25RB0XPM6HVCkF4Wvgy%2FlnDXYqlkvYlryVWE4atFSSp2r%2F15DO0evP57ErO63VTSRWf%2B5VE%2FKaZ%2B62%2BDiabK0239GIXE10RP%2BsegUTHNk8pi3awBJGkjxErs53zVtDMYtqNxXYHiJMsqA1wA3RHq2rS7VVXhr4Xuwhl0bQDGwVTo4021QBt0UhdDM5zcWs%2B0QVSLzCyWbqZ0fx5N3563FRgq6B1lg3CvZryY%2Ft%2BbOaWGQRGMLHasWCq%2F9U3xNWYVyqRWHkSqsbmw50UiJrGxvzD3E9Ot5VHVoQ2dBBTfECk8hInkxWetotlARsoJyZkdobzsKtZkzSZ6STvcOqAi0zDxuGbfpVauezHC5IwBndrw%2B7rnO0%2Fglg7e%2BM6VCutnpgDnBKXj4xx6TDrc6lmVPQ38Cs3nLHSnWJcjzXEYewTij6rI8jOhtvpiqv6y1ASilo6gOYpyJ5l%2FvcprYKqNqHexVj8Z7CXAu9QW44TL1RDqAeNTqAbIXd98rUTEhXT2OhgpUANNv4MQs7HDbmqCML1ZOx9nJqI3pyPiqWaG%2BWpSoB3jGIuIdxIL20XBRXQ6LONOyaCidCtAxGRwyxDKpoybjbMIzhtL0GOqUBytF4TC5KQe22wrvPFXYNH5UJt4eKNk2IuzBrDhIMJUQuN1aTLLj6zfn71vARY3PZ4vHoP2EP9jhAnXv8szI8KWhoTimIE9NCv8YCA9zTtWsX5%2BE9QcnIKvrEfxJ6GFLDMGgS4v7W4uth7yh0HRk4Z2u1p36McEFL%2B668xO%2Fbb5%2FliLz0HGhr5GLTRqacqYjwVWOiUWumtVaxQGZn8IxWEEOSDjWH&X-Amz-Signature=a1d0f7c0ee34bd83dbd0179cea03fb3bf7f8e443554f3b6f20b3d4f73925c850&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
