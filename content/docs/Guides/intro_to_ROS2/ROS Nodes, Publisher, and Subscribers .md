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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRR2HZF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F86TGeYfhnbey2yMSDs31y%2B2aAOAjAqw%2B6mGVfRf7HAiEAly0VKF3LBhuhjcYokaYfATyeD4ZjTFC8ZV0gYTDBwjcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGeselT9a4SF9NsjrSrcAyYF%2B6hTFxApul8xDfr3cKIUI9C%2FkN28EYcSMXBTXOeF2Ee7i9m1i5NDqSSXG%2Bb6WLEF0bL4%2BO9YUWZGy%2B4RIpVOVkIdXGHmfIBUNxEs6HROj4jx2zgnn9RLZ9wm6l84bVhosXRqlL05fbK6DVMdHsWYxtDJx8QSMl173NpOuyitgbBXxmaEfOs%2FjvW4KH0fCrPixoUA5bWhOcj%2B5FD1dqZqaX%2FrzXPqoSJ9M7H74AvTsdFidbx3w%2FoTrPBwHfet2KN3h%2Bi9b%2FupxNN5xXKMnNSGZiJllZNG%2FAfDkks5KeEFsg7fB8MY8UBD2YEHY%2B%2BDq6x6iUHORRwK6Qtsj3JJKA1cQRpKL0j80jmXzIb0teJi41LH0F%2FI8c3ekxiNE%2BOgiRGebI33EdRVMKBtbNjTMgz%2BXPtXHYYKrc%2FQUNe3WOsUCjtnDRlAh2WJ7MW9AkDM2suWvsYMn%2FKitxMdOvM1h8Ku8%2B8guQapbhhyvs3bryb8b%2B4htF2uFutFUqH8RpOHtij9OLfnIjLtUU4VTomeEv2%2BXjb4Pck5kQUsmHNVmXy3llUtB87seovQPc2q%2Bav8n62QtNhDmzp3ZeStD6qabLuIUs8lScKcdSyfLnAd8ovNH1UTZbAyRbPbJxnGMNKE%2Br8GOqUBo23cOvsWUInBolaX%2F%2B4wX6yMYnRrCdl%2Fejf443fobjPXeCnOmwfM0l6J0zi5JxALXYXTa%2F2MAqJczzN4tciVj9LbjK63tXo0AZIDDEgJssn%2BDA3Ys2MHsU2uaQSYf6I0EYqELe0BPcs4MYz1gj5mfJK%2FMnKjmfKQM2zZAYuCitXrVfvjdBxz3IWLet3W0SdP5sJ0kIWErrCwxtvPuLta5bd8CRNJ&X-Amz-Signature=6409f2df5059fe75cd6b02ed05e8ffd6b633f932d9d0b2d7c4d06fe83ef81d67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRR2HZF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F86TGeYfhnbey2yMSDs31y%2B2aAOAjAqw%2B6mGVfRf7HAiEAly0VKF3LBhuhjcYokaYfATyeD4ZjTFC8ZV0gYTDBwjcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGeselT9a4SF9NsjrSrcAyYF%2B6hTFxApul8xDfr3cKIUI9C%2FkN28EYcSMXBTXOeF2Ee7i9m1i5NDqSSXG%2Bb6WLEF0bL4%2BO9YUWZGy%2B4RIpVOVkIdXGHmfIBUNxEs6HROj4jx2zgnn9RLZ9wm6l84bVhosXRqlL05fbK6DVMdHsWYxtDJx8QSMl173NpOuyitgbBXxmaEfOs%2FjvW4KH0fCrPixoUA5bWhOcj%2B5FD1dqZqaX%2FrzXPqoSJ9M7H74AvTsdFidbx3w%2FoTrPBwHfet2KN3h%2Bi9b%2FupxNN5xXKMnNSGZiJllZNG%2FAfDkks5KeEFsg7fB8MY8UBD2YEHY%2B%2BDq6x6iUHORRwK6Qtsj3JJKA1cQRpKL0j80jmXzIb0teJi41LH0F%2FI8c3ekxiNE%2BOgiRGebI33EdRVMKBtbNjTMgz%2BXPtXHYYKrc%2FQUNe3WOsUCjtnDRlAh2WJ7MW9AkDM2suWvsYMn%2FKitxMdOvM1h8Ku8%2B8guQapbhhyvs3bryb8b%2B4htF2uFutFUqH8RpOHtij9OLfnIjLtUU4VTomeEv2%2BXjb4Pck5kQUsmHNVmXy3llUtB87seovQPc2q%2Bav8n62QtNhDmzp3ZeStD6qabLuIUs8lScKcdSyfLnAd8ovNH1UTZbAyRbPbJxnGMNKE%2Br8GOqUBo23cOvsWUInBolaX%2F%2B4wX6yMYnRrCdl%2Fejf443fobjPXeCnOmwfM0l6J0zi5JxALXYXTa%2F2MAqJczzN4tciVj9LbjK63tXo0AZIDDEgJssn%2BDA3Ys2MHsU2uaQSYf6I0EYqELe0BPcs4MYz1gj5mfJK%2FMnKjmfKQM2zZAYuCitXrVfvjdBxz3IWLet3W0SdP5sJ0kIWErrCwxtvPuLta5bd8CRNJ&X-Amz-Signature=a6b3596458ac38d651dfa8b2d79d18d226ae45317ea1caa252a5ac35cb8422c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRR2HZF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F86TGeYfhnbey2yMSDs31y%2B2aAOAjAqw%2B6mGVfRf7HAiEAly0VKF3LBhuhjcYokaYfATyeD4ZjTFC8ZV0gYTDBwjcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGeselT9a4SF9NsjrSrcAyYF%2B6hTFxApul8xDfr3cKIUI9C%2FkN28EYcSMXBTXOeF2Ee7i9m1i5NDqSSXG%2Bb6WLEF0bL4%2BO9YUWZGy%2B4RIpVOVkIdXGHmfIBUNxEs6HROj4jx2zgnn9RLZ9wm6l84bVhosXRqlL05fbK6DVMdHsWYxtDJx8QSMl173NpOuyitgbBXxmaEfOs%2FjvW4KH0fCrPixoUA5bWhOcj%2B5FD1dqZqaX%2FrzXPqoSJ9M7H74AvTsdFidbx3w%2FoTrPBwHfet2KN3h%2Bi9b%2FupxNN5xXKMnNSGZiJllZNG%2FAfDkks5KeEFsg7fB8MY8UBD2YEHY%2B%2BDq6x6iUHORRwK6Qtsj3JJKA1cQRpKL0j80jmXzIb0teJi41LH0F%2FI8c3ekxiNE%2BOgiRGebI33EdRVMKBtbNjTMgz%2BXPtXHYYKrc%2FQUNe3WOsUCjtnDRlAh2WJ7MW9AkDM2suWvsYMn%2FKitxMdOvM1h8Ku8%2B8guQapbhhyvs3bryb8b%2B4htF2uFutFUqH8RpOHtij9OLfnIjLtUU4VTomeEv2%2BXjb4Pck5kQUsmHNVmXy3llUtB87seovQPc2q%2Bav8n62QtNhDmzp3ZeStD6qabLuIUs8lScKcdSyfLnAd8ovNH1UTZbAyRbPbJxnGMNKE%2Br8GOqUBo23cOvsWUInBolaX%2F%2B4wX6yMYnRrCdl%2Fejf443fobjPXeCnOmwfM0l6J0zi5JxALXYXTa%2F2MAqJczzN4tciVj9LbjK63tXo0AZIDDEgJssn%2BDA3Ys2MHsU2uaQSYf6I0EYqELe0BPcs4MYz1gj5mfJK%2FMnKjmfKQM2zZAYuCitXrVfvjdBxz3IWLet3W0SdP5sJ0kIWErrCwxtvPuLta5bd8CRNJ&X-Amz-Signature=7086bb354bc89b114ddf9fc943690c7796cd5e7ea72add6c57b7259715a68464&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRR2HZF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F86TGeYfhnbey2yMSDs31y%2B2aAOAjAqw%2B6mGVfRf7HAiEAly0VKF3LBhuhjcYokaYfATyeD4ZjTFC8ZV0gYTDBwjcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGeselT9a4SF9NsjrSrcAyYF%2B6hTFxApul8xDfr3cKIUI9C%2FkN28EYcSMXBTXOeF2Ee7i9m1i5NDqSSXG%2Bb6WLEF0bL4%2BO9YUWZGy%2B4RIpVOVkIdXGHmfIBUNxEs6HROj4jx2zgnn9RLZ9wm6l84bVhosXRqlL05fbK6DVMdHsWYxtDJx8QSMl173NpOuyitgbBXxmaEfOs%2FjvW4KH0fCrPixoUA5bWhOcj%2B5FD1dqZqaX%2FrzXPqoSJ9M7H74AvTsdFidbx3w%2FoTrPBwHfet2KN3h%2Bi9b%2FupxNN5xXKMnNSGZiJllZNG%2FAfDkks5KeEFsg7fB8MY8UBD2YEHY%2B%2BDq6x6iUHORRwK6Qtsj3JJKA1cQRpKL0j80jmXzIb0teJi41LH0F%2FI8c3ekxiNE%2BOgiRGebI33EdRVMKBtbNjTMgz%2BXPtXHYYKrc%2FQUNe3WOsUCjtnDRlAh2WJ7MW9AkDM2suWvsYMn%2FKitxMdOvM1h8Ku8%2B8guQapbhhyvs3bryb8b%2B4htF2uFutFUqH8RpOHtij9OLfnIjLtUU4VTomeEv2%2BXjb4Pck5kQUsmHNVmXy3llUtB87seovQPc2q%2Bav8n62QtNhDmzp3ZeStD6qabLuIUs8lScKcdSyfLnAd8ovNH1UTZbAyRbPbJxnGMNKE%2Br8GOqUBo23cOvsWUInBolaX%2F%2B4wX6yMYnRrCdl%2Fejf443fobjPXeCnOmwfM0l6J0zi5JxALXYXTa%2F2MAqJczzN4tciVj9LbjK63tXo0AZIDDEgJssn%2BDA3Ys2MHsU2uaQSYf6I0EYqELe0BPcs4MYz1gj5mfJK%2FMnKjmfKQM2zZAYuCitXrVfvjdBxz3IWLet3W0SdP5sJ0kIWErrCwxtvPuLta5bd8CRNJ&X-Amz-Signature=f9c887d51b9e4fd1f7269e510fc1293cda9cbe66c78359fb20d7a22e9dd62766&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRR2HZF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F86TGeYfhnbey2yMSDs31y%2B2aAOAjAqw%2B6mGVfRf7HAiEAly0VKF3LBhuhjcYokaYfATyeD4ZjTFC8ZV0gYTDBwjcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGeselT9a4SF9NsjrSrcAyYF%2B6hTFxApul8xDfr3cKIUI9C%2FkN28EYcSMXBTXOeF2Ee7i9m1i5NDqSSXG%2Bb6WLEF0bL4%2BO9YUWZGy%2B4RIpVOVkIdXGHmfIBUNxEs6HROj4jx2zgnn9RLZ9wm6l84bVhosXRqlL05fbK6DVMdHsWYxtDJx8QSMl173NpOuyitgbBXxmaEfOs%2FjvW4KH0fCrPixoUA5bWhOcj%2B5FD1dqZqaX%2FrzXPqoSJ9M7H74AvTsdFidbx3w%2FoTrPBwHfet2KN3h%2Bi9b%2FupxNN5xXKMnNSGZiJllZNG%2FAfDkks5KeEFsg7fB8MY8UBD2YEHY%2B%2BDq6x6iUHORRwK6Qtsj3JJKA1cQRpKL0j80jmXzIb0teJi41LH0F%2FI8c3ekxiNE%2BOgiRGebI33EdRVMKBtbNjTMgz%2BXPtXHYYKrc%2FQUNe3WOsUCjtnDRlAh2WJ7MW9AkDM2suWvsYMn%2FKitxMdOvM1h8Ku8%2B8guQapbhhyvs3bryb8b%2B4htF2uFutFUqH8RpOHtij9OLfnIjLtUU4VTomeEv2%2BXjb4Pck5kQUsmHNVmXy3llUtB87seovQPc2q%2Bav8n62QtNhDmzp3ZeStD6qabLuIUs8lScKcdSyfLnAd8ovNH1UTZbAyRbPbJxnGMNKE%2Br8GOqUBo23cOvsWUInBolaX%2F%2B4wX6yMYnRrCdl%2Fejf443fobjPXeCnOmwfM0l6J0zi5JxALXYXTa%2F2MAqJczzN4tciVj9LbjK63tXo0AZIDDEgJssn%2BDA3Ys2MHsU2uaQSYf6I0EYqELe0BPcs4MYz1gj5mfJK%2FMnKjmfKQM2zZAYuCitXrVfvjdBxz3IWLet3W0SdP5sJ0kIWErrCwxtvPuLta5bd8CRNJ&X-Amz-Signature=443835e2b44bfffd33ff16a6bbd9213f3c3f18c6d785b219079b3adc7e570c75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRR2HZF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F86TGeYfhnbey2yMSDs31y%2B2aAOAjAqw%2B6mGVfRf7HAiEAly0VKF3LBhuhjcYokaYfATyeD4ZjTFC8ZV0gYTDBwjcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGeselT9a4SF9NsjrSrcAyYF%2B6hTFxApul8xDfr3cKIUI9C%2FkN28EYcSMXBTXOeF2Ee7i9m1i5NDqSSXG%2Bb6WLEF0bL4%2BO9YUWZGy%2B4RIpVOVkIdXGHmfIBUNxEs6HROj4jx2zgnn9RLZ9wm6l84bVhosXRqlL05fbK6DVMdHsWYxtDJx8QSMl173NpOuyitgbBXxmaEfOs%2FjvW4KH0fCrPixoUA5bWhOcj%2B5FD1dqZqaX%2FrzXPqoSJ9M7H74AvTsdFidbx3w%2FoTrPBwHfet2KN3h%2Bi9b%2FupxNN5xXKMnNSGZiJllZNG%2FAfDkks5KeEFsg7fB8MY8UBD2YEHY%2B%2BDq6x6iUHORRwK6Qtsj3JJKA1cQRpKL0j80jmXzIb0teJi41LH0F%2FI8c3ekxiNE%2BOgiRGebI33EdRVMKBtbNjTMgz%2BXPtXHYYKrc%2FQUNe3WOsUCjtnDRlAh2WJ7MW9AkDM2suWvsYMn%2FKitxMdOvM1h8Ku8%2B8guQapbhhyvs3bryb8b%2B4htF2uFutFUqH8RpOHtij9OLfnIjLtUU4VTomeEv2%2BXjb4Pck5kQUsmHNVmXy3llUtB87seovQPc2q%2Bav8n62QtNhDmzp3ZeStD6qabLuIUs8lScKcdSyfLnAd8ovNH1UTZbAyRbPbJxnGMNKE%2Br8GOqUBo23cOvsWUInBolaX%2F%2B4wX6yMYnRrCdl%2Fejf443fobjPXeCnOmwfM0l6J0zi5JxALXYXTa%2F2MAqJczzN4tciVj9LbjK63tXo0AZIDDEgJssn%2BDA3Ys2MHsU2uaQSYf6I0EYqELe0BPcs4MYz1gj5mfJK%2FMnKjmfKQM2zZAYuCitXrVfvjdBxz3IWLet3W0SdP5sJ0kIWErrCwxtvPuLta5bd8CRNJ&X-Amz-Signature=559efaf33b24a61f501393a94cf6991e8f50ea7b3c348eb9d0c5fedc6c4a599c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRR2HZF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F86TGeYfhnbey2yMSDs31y%2B2aAOAjAqw%2B6mGVfRf7HAiEAly0VKF3LBhuhjcYokaYfATyeD4ZjTFC8ZV0gYTDBwjcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGeselT9a4SF9NsjrSrcAyYF%2B6hTFxApul8xDfr3cKIUI9C%2FkN28EYcSMXBTXOeF2Ee7i9m1i5NDqSSXG%2Bb6WLEF0bL4%2BO9YUWZGy%2B4RIpVOVkIdXGHmfIBUNxEs6HROj4jx2zgnn9RLZ9wm6l84bVhosXRqlL05fbK6DVMdHsWYxtDJx8QSMl173NpOuyitgbBXxmaEfOs%2FjvW4KH0fCrPixoUA5bWhOcj%2B5FD1dqZqaX%2FrzXPqoSJ9M7H74AvTsdFidbx3w%2FoTrPBwHfet2KN3h%2Bi9b%2FupxNN5xXKMnNSGZiJllZNG%2FAfDkks5KeEFsg7fB8MY8UBD2YEHY%2B%2BDq6x6iUHORRwK6Qtsj3JJKA1cQRpKL0j80jmXzIb0teJi41LH0F%2FI8c3ekxiNE%2BOgiRGebI33EdRVMKBtbNjTMgz%2BXPtXHYYKrc%2FQUNe3WOsUCjtnDRlAh2WJ7MW9AkDM2suWvsYMn%2FKitxMdOvM1h8Ku8%2B8guQapbhhyvs3bryb8b%2B4htF2uFutFUqH8RpOHtij9OLfnIjLtUU4VTomeEv2%2BXjb4Pck5kQUsmHNVmXy3llUtB87seovQPc2q%2Bav8n62QtNhDmzp3ZeStD6qabLuIUs8lScKcdSyfLnAd8ovNH1UTZbAyRbPbJxnGMNKE%2Br8GOqUBo23cOvsWUInBolaX%2F%2B4wX6yMYnRrCdl%2Fejf443fobjPXeCnOmwfM0l6J0zi5JxALXYXTa%2F2MAqJczzN4tciVj9LbjK63tXo0AZIDDEgJssn%2BDA3Ys2MHsU2uaQSYf6I0EYqELe0BPcs4MYz1gj5mfJK%2FMnKjmfKQM2zZAYuCitXrVfvjdBxz3IWLet3W0SdP5sJ0kIWErrCwxtvPuLta5bd8CRNJ&X-Amz-Signature=2b8ab69f35e4743747ca8c0aed56a18665d5122a15b2bc68fdd186d826d96703&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRR2HZF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F86TGeYfhnbey2yMSDs31y%2B2aAOAjAqw%2B6mGVfRf7HAiEAly0VKF3LBhuhjcYokaYfATyeD4ZjTFC8ZV0gYTDBwjcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGeselT9a4SF9NsjrSrcAyYF%2B6hTFxApul8xDfr3cKIUI9C%2FkN28EYcSMXBTXOeF2Ee7i9m1i5NDqSSXG%2Bb6WLEF0bL4%2BO9YUWZGy%2B4RIpVOVkIdXGHmfIBUNxEs6HROj4jx2zgnn9RLZ9wm6l84bVhosXRqlL05fbK6DVMdHsWYxtDJx8QSMl173NpOuyitgbBXxmaEfOs%2FjvW4KH0fCrPixoUA5bWhOcj%2B5FD1dqZqaX%2FrzXPqoSJ9M7H74AvTsdFidbx3w%2FoTrPBwHfet2KN3h%2Bi9b%2FupxNN5xXKMnNSGZiJllZNG%2FAfDkks5KeEFsg7fB8MY8UBD2YEHY%2B%2BDq6x6iUHORRwK6Qtsj3JJKA1cQRpKL0j80jmXzIb0teJi41LH0F%2FI8c3ekxiNE%2BOgiRGebI33EdRVMKBtbNjTMgz%2BXPtXHYYKrc%2FQUNe3WOsUCjtnDRlAh2WJ7MW9AkDM2suWvsYMn%2FKitxMdOvM1h8Ku8%2B8guQapbhhyvs3bryb8b%2B4htF2uFutFUqH8RpOHtij9OLfnIjLtUU4VTomeEv2%2BXjb4Pck5kQUsmHNVmXy3llUtB87seovQPc2q%2Bav8n62QtNhDmzp3ZeStD6qabLuIUs8lScKcdSyfLnAd8ovNH1UTZbAyRbPbJxnGMNKE%2Br8GOqUBo23cOvsWUInBolaX%2F%2B4wX6yMYnRrCdl%2Fejf443fobjPXeCnOmwfM0l6J0zi5JxALXYXTa%2F2MAqJczzN4tciVj9LbjK63tXo0AZIDDEgJssn%2BDA3Ys2MHsU2uaQSYf6I0EYqELe0BPcs4MYz1gj5mfJK%2FMnKjmfKQM2zZAYuCitXrVfvjdBxz3IWLet3W0SdP5sJ0kIWErrCwxtvPuLta5bd8CRNJ&X-Amz-Signature=680881b2edde8fcce63272e28ffe8467529cfa7be7b0177a7a9a6efc4b1f3042&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
