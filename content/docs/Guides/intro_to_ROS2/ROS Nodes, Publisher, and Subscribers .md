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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCDYYB4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCIA0cHlfrPxtBSOY1iJUtHpweMmvkp7MUwZPQiy%2B8pEgIhAJJjATFzUj8fxDkFRFzjRWgiftwfSBUZnc4TyIoc8g%2F6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfMPi99DeIJsSSBOYq3ANY4n9%2F4RufIa0nI5UuGp%2FbTJzQowhRdTCvCs0wpgUhGZnevXqyBIyx9zTo6MsXSUomAfaOikr9qZXVlwxWWOocRFdprjxMLebkomexBLMNOkBzdEU1eLamdjiyPh%2BfLjdK8vPc4h9kt%2F70KZbG%2F7yVXFKqAPybxCrfg7bG1SooxARp9QzDrWxlLGUmtZ%2BoT9OA%2BvlD5vh1G0BlUhEpRQtqR6tDB1EdbPOQBVevvNZAfSPzaZyEHdrryZNNBHEbI5dQPUyEjplMK2dybD7%2FXM115ZUCMCfd6%2BmcM582174EKJQJQBSYvZa%2B3ccASNXnnP9M5F0jJN3aMa9bqOefd9snTyv%2FKsuhO54qwgtVxLSFpWjouAZkMiG8APyGDJE3ythFzdNRSKMB3MprpR4araSRPBhLAMFPDO81MfNlT4W1YFuH77Qx%2BazXTilXnZUCn98vuafu7IbaojRjvAzkIz376%2Bu3KbUplMzSjXDtO0g%2B2zCK0tIq9Qr74TAeFr%2BAh4V3FqBejIf64h0wovqp2h30qAsKgd4utwk1QwEx6%2FkfWUQ9%2FWwUpNdw4jNSKQRvK8Z8FZVVqOaR14hZ6rrX3i7ERX9NxVOE2VRImj9EPrI8t0armuZ5ZfMJTZ0UPTCT%2B7vBBjqkAbzzbaoQX8UqVe9QeBptUSGinv%2Fzj6%2BvKLWC6v5fb8R4GQFZ1V%2BISc9xuvxSvGVMFJ%2FrgsWMF4YHiR62%2B%2BobWefPxgmRmsJgt2OQf0mC4fOevhuHRUUx6NfVdLcONQ9ay%2BKcnf2lrnHpKs5%2F5LLrcSqv43JfmU4pyldh1iA%2BNhkSHj9QMFUe5CIltpuZVDwZ1vJku7U3R%2F6%2FhaPh%2FhDkwr3kp4eP&X-Amz-Signature=058b36077e101ff9e0a1745a7514fd330ae21703a01957367d1160c4556172bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCDYYB4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCIA0cHlfrPxtBSOY1iJUtHpweMmvkp7MUwZPQiy%2B8pEgIhAJJjATFzUj8fxDkFRFzjRWgiftwfSBUZnc4TyIoc8g%2F6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfMPi99DeIJsSSBOYq3ANY4n9%2F4RufIa0nI5UuGp%2FbTJzQowhRdTCvCs0wpgUhGZnevXqyBIyx9zTo6MsXSUomAfaOikr9qZXVlwxWWOocRFdprjxMLebkomexBLMNOkBzdEU1eLamdjiyPh%2BfLjdK8vPc4h9kt%2F70KZbG%2F7yVXFKqAPybxCrfg7bG1SooxARp9QzDrWxlLGUmtZ%2BoT9OA%2BvlD5vh1G0BlUhEpRQtqR6tDB1EdbPOQBVevvNZAfSPzaZyEHdrryZNNBHEbI5dQPUyEjplMK2dybD7%2FXM115ZUCMCfd6%2BmcM582174EKJQJQBSYvZa%2B3ccASNXnnP9M5F0jJN3aMa9bqOefd9snTyv%2FKsuhO54qwgtVxLSFpWjouAZkMiG8APyGDJE3ythFzdNRSKMB3MprpR4araSRPBhLAMFPDO81MfNlT4W1YFuH77Qx%2BazXTilXnZUCn98vuafu7IbaojRjvAzkIz376%2Bu3KbUplMzSjXDtO0g%2B2zCK0tIq9Qr74TAeFr%2BAh4V3FqBejIf64h0wovqp2h30qAsKgd4utwk1QwEx6%2FkfWUQ9%2FWwUpNdw4jNSKQRvK8Z8FZVVqOaR14hZ6rrX3i7ERX9NxVOE2VRImj9EPrI8t0armuZ5ZfMJTZ0UPTCT%2B7vBBjqkAbzzbaoQX8UqVe9QeBptUSGinv%2Fzj6%2BvKLWC6v5fb8R4GQFZ1V%2BISc9xuvxSvGVMFJ%2FrgsWMF4YHiR62%2B%2BobWefPxgmRmsJgt2OQf0mC4fOevhuHRUUx6NfVdLcONQ9ay%2BKcnf2lrnHpKs5%2F5LLrcSqv43JfmU4pyldh1iA%2BNhkSHj9QMFUe5CIltpuZVDwZ1vJku7U3R%2F6%2FhaPh%2FhDkwr3kp4eP&X-Amz-Signature=413fce353a4b9ccb3b8ea3214699a3302be08b41731f12dabe033df51b350839&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCDYYB4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCIA0cHlfrPxtBSOY1iJUtHpweMmvkp7MUwZPQiy%2B8pEgIhAJJjATFzUj8fxDkFRFzjRWgiftwfSBUZnc4TyIoc8g%2F6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfMPi99DeIJsSSBOYq3ANY4n9%2F4RufIa0nI5UuGp%2FbTJzQowhRdTCvCs0wpgUhGZnevXqyBIyx9zTo6MsXSUomAfaOikr9qZXVlwxWWOocRFdprjxMLebkomexBLMNOkBzdEU1eLamdjiyPh%2BfLjdK8vPc4h9kt%2F70KZbG%2F7yVXFKqAPybxCrfg7bG1SooxARp9QzDrWxlLGUmtZ%2BoT9OA%2BvlD5vh1G0BlUhEpRQtqR6tDB1EdbPOQBVevvNZAfSPzaZyEHdrryZNNBHEbI5dQPUyEjplMK2dybD7%2FXM115ZUCMCfd6%2BmcM582174EKJQJQBSYvZa%2B3ccASNXnnP9M5F0jJN3aMa9bqOefd9snTyv%2FKsuhO54qwgtVxLSFpWjouAZkMiG8APyGDJE3ythFzdNRSKMB3MprpR4araSRPBhLAMFPDO81MfNlT4W1YFuH77Qx%2BazXTilXnZUCn98vuafu7IbaojRjvAzkIz376%2Bu3KbUplMzSjXDtO0g%2B2zCK0tIq9Qr74TAeFr%2BAh4V3FqBejIf64h0wovqp2h30qAsKgd4utwk1QwEx6%2FkfWUQ9%2FWwUpNdw4jNSKQRvK8Z8FZVVqOaR14hZ6rrX3i7ERX9NxVOE2VRImj9EPrI8t0armuZ5ZfMJTZ0UPTCT%2B7vBBjqkAbzzbaoQX8UqVe9QeBptUSGinv%2Fzj6%2BvKLWC6v5fb8R4GQFZ1V%2BISc9xuvxSvGVMFJ%2FrgsWMF4YHiR62%2B%2BobWefPxgmRmsJgt2OQf0mC4fOevhuHRUUx6NfVdLcONQ9ay%2BKcnf2lrnHpKs5%2F5LLrcSqv43JfmU4pyldh1iA%2BNhkSHj9QMFUe5CIltpuZVDwZ1vJku7U3R%2F6%2FhaPh%2FhDkwr3kp4eP&X-Amz-Signature=1e05d7fdb4bb416d96dcea4ffc46e65388bc8310a6c2911552e83dbb19cedb54&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCDYYB4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCIA0cHlfrPxtBSOY1iJUtHpweMmvkp7MUwZPQiy%2B8pEgIhAJJjATFzUj8fxDkFRFzjRWgiftwfSBUZnc4TyIoc8g%2F6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfMPi99DeIJsSSBOYq3ANY4n9%2F4RufIa0nI5UuGp%2FbTJzQowhRdTCvCs0wpgUhGZnevXqyBIyx9zTo6MsXSUomAfaOikr9qZXVlwxWWOocRFdprjxMLebkomexBLMNOkBzdEU1eLamdjiyPh%2BfLjdK8vPc4h9kt%2F70KZbG%2F7yVXFKqAPybxCrfg7bG1SooxARp9QzDrWxlLGUmtZ%2BoT9OA%2BvlD5vh1G0BlUhEpRQtqR6tDB1EdbPOQBVevvNZAfSPzaZyEHdrryZNNBHEbI5dQPUyEjplMK2dybD7%2FXM115ZUCMCfd6%2BmcM582174EKJQJQBSYvZa%2B3ccASNXnnP9M5F0jJN3aMa9bqOefd9snTyv%2FKsuhO54qwgtVxLSFpWjouAZkMiG8APyGDJE3ythFzdNRSKMB3MprpR4araSRPBhLAMFPDO81MfNlT4W1YFuH77Qx%2BazXTilXnZUCn98vuafu7IbaojRjvAzkIz376%2Bu3KbUplMzSjXDtO0g%2B2zCK0tIq9Qr74TAeFr%2BAh4V3FqBejIf64h0wovqp2h30qAsKgd4utwk1QwEx6%2FkfWUQ9%2FWwUpNdw4jNSKQRvK8Z8FZVVqOaR14hZ6rrX3i7ERX9NxVOE2VRImj9EPrI8t0armuZ5ZfMJTZ0UPTCT%2B7vBBjqkAbzzbaoQX8UqVe9QeBptUSGinv%2Fzj6%2BvKLWC6v5fb8R4GQFZ1V%2BISc9xuvxSvGVMFJ%2FrgsWMF4YHiR62%2B%2BobWefPxgmRmsJgt2OQf0mC4fOevhuHRUUx6NfVdLcONQ9ay%2BKcnf2lrnHpKs5%2F5LLrcSqv43JfmU4pyldh1iA%2BNhkSHj9QMFUe5CIltpuZVDwZ1vJku7U3R%2F6%2FhaPh%2FhDkwr3kp4eP&X-Amz-Signature=80ca31476a83eded3f5ee091572f36f766c4ac545bb26eb3ccc903fa7cb8c1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCDYYB4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCIA0cHlfrPxtBSOY1iJUtHpweMmvkp7MUwZPQiy%2B8pEgIhAJJjATFzUj8fxDkFRFzjRWgiftwfSBUZnc4TyIoc8g%2F6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfMPi99DeIJsSSBOYq3ANY4n9%2F4RufIa0nI5UuGp%2FbTJzQowhRdTCvCs0wpgUhGZnevXqyBIyx9zTo6MsXSUomAfaOikr9qZXVlwxWWOocRFdprjxMLebkomexBLMNOkBzdEU1eLamdjiyPh%2BfLjdK8vPc4h9kt%2F70KZbG%2F7yVXFKqAPybxCrfg7bG1SooxARp9QzDrWxlLGUmtZ%2BoT9OA%2BvlD5vh1G0BlUhEpRQtqR6tDB1EdbPOQBVevvNZAfSPzaZyEHdrryZNNBHEbI5dQPUyEjplMK2dybD7%2FXM115ZUCMCfd6%2BmcM582174EKJQJQBSYvZa%2B3ccASNXnnP9M5F0jJN3aMa9bqOefd9snTyv%2FKsuhO54qwgtVxLSFpWjouAZkMiG8APyGDJE3ythFzdNRSKMB3MprpR4araSRPBhLAMFPDO81MfNlT4W1YFuH77Qx%2BazXTilXnZUCn98vuafu7IbaojRjvAzkIz376%2Bu3KbUplMzSjXDtO0g%2B2zCK0tIq9Qr74TAeFr%2BAh4V3FqBejIf64h0wovqp2h30qAsKgd4utwk1QwEx6%2FkfWUQ9%2FWwUpNdw4jNSKQRvK8Z8FZVVqOaR14hZ6rrX3i7ERX9NxVOE2VRImj9EPrI8t0armuZ5ZfMJTZ0UPTCT%2B7vBBjqkAbzzbaoQX8UqVe9QeBptUSGinv%2Fzj6%2BvKLWC6v5fb8R4GQFZ1V%2BISc9xuvxSvGVMFJ%2FrgsWMF4YHiR62%2B%2BobWefPxgmRmsJgt2OQf0mC4fOevhuHRUUx6NfVdLcONQ9ay%2BKcnf2lrnHpKs5%2F5LLrcSqv43JfmU4pyldh1iA%2BNhkSHj9QMFUe5CIltpuZVDwZ1vJku7U3R%2F6%2FhaPh%2FhDkwr3kp4eP&X-Amz-Signature=9ea3f6a904942617f0b93186aa3e0771ea563876141f0575eee4767012ba3b27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCDYYB4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCIA0cHlfrPxtBSOY1iJUtHpweMmvkp7MUwZPQiy%2B8pEgIhAJJjATFzUj8fxDkFRFzjRWgiftwfSBUZnc4TyIoc8g%2F6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfMPi99DeIJsSSBOYq3ANY4n9%2F4RufIa0nI5UuGp%2FbTJzQowhRdTCvCs0wpgUhGZnevXqyBIyx9zTo6MsXSUomAfaOikr9qZXVlwxWWOocRFdprjxMLebkomexBLMNOkBzdEU1eLamdjiyPh%2BfLjdK8vPc4h9kt%2F70KZbG%2F7yVXFKqAPybxCrfg7bG1SooxARp9QzDrWxlLGUmtZ%2BoT9OA%2BvlD5vh1G0BlUhEpRQtqR6tDB1EdbPOQBVevvNZAfSPzaZyEHdrryZNNBHEbI5dQPUyEjplMK2dybD7%2FXM115ZUCMCfd6%2BmcM582174EKJQJQBSYvZa%2B3ccASNXnnP9M5F0jJN3aMa9bqOefd9snTyv%2FKsuhO54qwgtVxLSFpWjouAZkMiG8APyGDJE3ythFzdNRSKMB3MprpR4araSRPBhLAMFPDO81MfNlT4W1YFuH77Qx%2BazXTilXnZUCn98vuafu7IbaojRjvAzkIz376%2Bu3KbUplMzSjXDtO0g%2B2zCK0tIq9Qr74TAeFr%2BAh4V3FqBejIf64h0wovqp2h30qAsKgd4utwk1QwEx6%2FkfWUQ9%2FWwUpNdw4jNSKQRvK8Z8FZVVqOaR14hZ6rrX3i7ERX9NxVOE2VRImj9EPrI8t0armuZ5ZfMJTZ0UPTCT%2B7vBBjqkAbzzbaoQX8UqVe9QeBptUSGinv%2Fzj6%2BvKLWC6v5fb8R4GQFZ1V%2BISc9xuvxSvGVMFJ%2FrgsWMF4YHiR62%2B%2BobWefPxgmRmsJgt2OQf0mC4fOevhuHRUUx6NfVdLcONQ9ay%2BKcnf2lrnHpKs5%2F5LLrcSqv43JfmU4pyldh1iA%2BNhkSHj9QMFUe5CIltpuZVDwZ1vJku7U3R%2F6%2FhaPh%2FhDkwr3kp4eP&X-Amz-Signature=a1ac14322a67fc6351025a6a25489eb3c676c112122f9dcd440af3f9056a4e02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCDYYB4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCIA0cHlfrPxtBSOY1iJUtHpweMmvkp7MUwZPQiy%2B8pEgIhAJJjATFzUj8fxDkFRFzjRWgiftwfSBUZnc4TyIoc8g%2F6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfMPi99DeIJsSSBOYq3ANY4n9%2F4RufIa0nI5UuGp%2FbTJzQowhRdTCvCs0wpgUhGZnevXqyBIyx9zTo6MsXSUomAfaOikr9qZXVlwxWWOocRFdprjxMLebkomexBLMNOkBzdEU1eLamdjiyPh%2BfLjdK8vPc4h9kt%2F70KZbG%2F7yVXFKqAPybxCrfg7bG1SooxARp9QzDrWxlLGUmtZ%2BoT9OA%2BvlD5vh1G0BlUhEpRQtqR6tDB1EdbPOQBVevvNZAfSPzaZyEHdrryZNNBHEbI5dQPUyEjplMK2dybD7%2FXM115ZUCMCfd6%2BmcM582174EKJQJQBSYvZa%2B3ccASNXnnP9M5F0jJN3aMa9bqOefd9snTyv%2FKsuhO54qwgtVxLSFpWjouAZkMiG8APyGDJE3ythFzdNRSKMB3MprpR4araSRPBhLAMFPDO81MfNlT4W1YFuH77Qx%2BazXTilXnZUCn98vuafu7IbaojRjvAzkIz376%2Bu3KbUplMzSjXDtO0g%2B2zCK0tIq9Qr74TAeFr%2BAh4V3FqBejIf64h0wovqp2h30qAsKgd4utwk1QwEx6%2FkfWUQ9%2FWwUpNdw4jNSKQRvK8Z8FZVVqOaR14hZ6rrX3i7ERX9NxVOE2VRImj9EPrI8t0armuZ5ZfMJTZ0UPTCT%2B7vBBjqkAbzzbaoQX8UqVe9QeBptUSGinv%2Fzj6%2BvKLWC6v5fb8R4GQFZ1V%2BISc9xuvxSvGVMFJ%2FrgsWMF4YHiR62%2B%2BobWefPxgmRmsJgt2OQf0mC4fOevhuHRUUx6NfVdLcONQ9ay%2BKcnf2lrnHpKs5%2F5LLrcSqv43JfmU4pyldh1iA%2BNhkSHj9QMFUe5CIltpuZVDwZ1vJku7U3R%2F6%2FhaPh%2FhDkwr3kp4eP&X-Amz-Signature=2d190672e5b8f21964548f1a46fdc6ef0cc715269092fa120e70f9596e2defd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCDYYB4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCIA0cHlfrPxtBSOY1iJUtHpweMmvkp7MUwZPQiy%2B8pEgIhAJJjATFzUj8fxDkFRFzjRWgiftwfSBUZnc4TyIoc8g%2F6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfMPi99DeIJsSSBOYq3ANY4n9%2F4RufIa0nI5UuGp%2FbTJzQowhRdTCvCs0wpgUhGZnevXqyBIyx9zTo6MsXSUomAfaOikr9qZXVlwxWWOocRFdprjxMLebkomexBLMNOkBzdEU1eLamdjiyPh%2BfLjdK8vPc4h9kt%2F70KZbG%2F7yVXFKqAPybxCrfg7bG1SooxARp9QzDrWxlLGUmtZ%2BoT9OA%2BvlD5vh1G0BlUhEpRQtqR6tDB1EdbPOQBVevvNZAfSPzaZyEHdrryZNNBHEbI5dQPUyEjplMK2dybD7%2FXM115ZUCMCfd6%2BmcM582174EKJQJQBSYvZa%2B3ccASNXnnP9M5F0jJN3aMa9bqOefd9snTyv%2FKsuhO54qwgtVxLSFpWjouAZkMiG8APyGDJE3ythFzdNRSKMB3MprpR4araSRPBhLAMFPDO81MfNlT4W1YFuH77Qx%2BazXTilXnZUCn98vuafu7IbaojRjvAzkIz376%2Bu3KbUplMzSjXDtO0g%2B2zCK0tIq9Qr74TAeFr%2BAh4V3FqBejIf64h0wovqp2h30qAsKgd4utwk1QwEx6%2FkfWUQ9%2FWwUpNdw4jNSKQRvK8Z8FZVVqOaR14hZ6rrX3i7ERX9NxVOE2VRImj9EPrI8t0armuZ5ZfMJTZ0UPTCT%2B7vBBjqkAbzzbaoQX8UqVe9QeBptUSGinv%2Fzj6%2BvKLWC6v5fb8R4GQFZ1V%2BISc9xuvxSvGVMFJ%2FrgsWMF4YHiR62%2B%2BobWefPxgmRmsJgt2OQf0mC4fOevhuHRUUx6NfVdLcONQ9ay%2BKcnf2lrnHpKs5%2F5LLrcSqv43JfmU4pyldh1iA%2BNhkSHj9QMFUe5CIltpuZVDwZ1vJku7U3R%2F6%2FhaPh%2FhDkwr3kp4eP&X-Amz-Signature=9d4d188acf2098022afeb82abd201565e0fecfbaf9409424c1dd7a75941d18b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
