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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LZKWN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD%2FoXQ072YjM07ENPyqJV5773MbnoHusKQXnMuFSxFFPQIgT8lB36ao%2BG%2FRR4Z8qLEdbOmYF43XDCf%2FIinhXEL5FToqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1zxt9avPWBF9NljircA5dHRHzZkB7aNltrjY86N318FwHsfhWsVcbTgBtFY1v%2Bx%2Bgk4neg8l9RLS62R%2FhZ77k8ZCtqhoNZc48zo%2FQ419NJBvRkMEtj%2FSkRDqRNTeONeb5JWBJwNKusG%2F8d5g3pMA3x7DuO9eFLeMEGZxsbB3w%2BsUlFTnHjWugi31oVCwofj5OIv2vtfQmOwPWzl8RcQo63Kku9neKyQjqZUzgPjldUImrN46bORuXQU%2FeZErH1FOOH6j%2F2xanCocnhNMAib507FzAwfMRAS%2FWMAEAezu1Xlw2LCFjTyLIki4nFSQJu%2FlL8d%2FaN%2BSR%2FqWFILEDIBXqn%2FwcSY0eRPzZ9CeKWrpiedsc5kLsrqODmGtKoZ6CryN7axOglmaYloz6oyu9NAZPlyAeQFbN2eFg7Pb6etaJHyWmJ612bvikUFtjDf%2FaYiUyrIrVCCuKcUG804VqYt3LmVAFrTT81fMnoqdkkfbSFPU0jyaFIkuX0LpRF200FVxsDQ0CBGLt50HxMM7%2FOIaex82DfT4dGrHAj4LC7o4a7ReJQrl80UFh%2BJovNmWxUZ5O1tKMPuIQj5qanPQv5wfRWS7ZYLiC9gi5nqCw7KRoSfW0LwbQFt5aOcPPUa4zTIOe9GMzA5rj05F4vMN63h8EGOqUB%2FXjBaxGqZUnEFzhqDdFs0GHqK3uxk6c%2FGHcHwc1VwUkNJ24AaCtKuiwBtbThhIHX1Xxn3RcEj8btvK5aQMbFD%2Btqk%2FVycHCV%2BaHvac23prd9uLHvX73RmbyVoPPAzs6UnscxoA3W7TeOx2CW%2Fhbiynm6XjSAdJvX00czwIXEiIAw1Mplx5ENxjjrkm7DKKBBv%2BQqjmfck1h3lY7v4aKo3oCb%2BQOD&X-Amz-Signature=85af421a005ffa0a3723ac0a75c29c77b8c850274ebedd5e3d8a9c9affd757e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LZKWN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD%2FoXQ072YjM07ENPyqJV5773MbnoHusKQXnMuFSxFFPQIgT8lB36ao%2BG%2FRR4Z8qLEdbOmYF43XDCf%2FIinhXEL5FToqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1zxt9avPWBF9NljircA5dHRHzZkB7aNltrjY86N318FwHsfhWsVcbTgBtFY1v%2Bx%2Bgk4neg8l9RLS62R%2FhZ77k8ZCtqhoNZc48zo%2FQ419NJBvRkMEtj%2FSkRDqRNTeONeb5JWBJwNKusG%2F8d5g3pMA3x7DuO9eFLeMEGZxsbB3w%2BsUlFTnHjWugi31oVCwofj5OIv2vtfQmOwPWzl8RcQo63Kku9neKyQjqZUzgPjldUImrN46bORuXQU%2FeZErH1FOOH6j%2F2xanCocnhNMAib507FzAwfMRAS%2FWMAEAezu1Xlw2LCFjTyLIki4nFSQJu%2FlL8d%2FaN%2BSR%2FqWFILEDIBXqn%2FwcSY0eRPzZ9CeKWrpiedsc5kLsrqODmGtKoZ6CryN7axOglmaYloz6oyu9NAZPlyAeQFbN2eFg7Pb6etaJHyWmJ612bvikUFtjDf%2FaYiUyrIrVCCuKcUG804VqYt3LmVAFrTT81fMnoqdkkfbSFPU0jyaFIkuX0LpRF200FVxsDQ0CBGLt50HxMM7%2FOIaex82DfT4dGrHAj4LC7o4a7ReJQrl80UFh%2BJovNmWxUZ5O1tKMPuIQj5qanPQv5wfRWS7ZYLiC9gi5nqCw7KRoSfW0LwbQFt5aOcPPUa4zTIOe9GMzA5rj05F4vMN63h8EGOqUB%2FXjBaxGqZUnEFzhqDdFs0GHqK3uxk6c%2FGHcHwc1VwUkNJ24AaCtKuiwBtbThhIHX1Xxn3RcEj8btvK5aQMbFD%2Btqk%2FVycHCV%2BaHvac23prd9uLHvX73RmbyVoPPAzs6UnscxoA3W7TeOx2CW%2Fhbiynm6XjSAdJvX00czwIXEiIAw1Mplx5ENxjjrkm7DKKBBv%2BQqjmfck1h3lY7v4aKo3oCb%2BQOD&X-Amz-Signature=acf6aeaa7d6ad38f67ccb953eb0d50d7e16c21580c08e101dacdcc041bb10598&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LZKWN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD%2FoXQ072YjM07ENPyqJV5773MbnoHusKQXnMuFSxFFPQIgT8lB36ao%2BG%2FRR4Z8qLEdbOmYF43XDCf%2FIinhXEL5FToqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1zxt9avPWBF9NljircA5dHRHzZkB7aNltrjY86N318FwHsfhWsVcbTgBtFY1v%2Bx%2Bgk4neg8l9RLS62R%2FhZ77k8ZCtqhoNZc48zo%2FQ419NJBvRkMEtj%2FSkRDqRNTeONeb5JWBJwNKusG%2F8d5g3pMA3x7DuO9eFLeMEGZxsbB3w%2BsUlFTnHjWugi31oVCwofj5OIv2vtfQmOwPWzl8RcQo63Kku9neKyQjqZUzgPjldUImrN46bORuXQU%2FeZErH1FOOH6j%2F2xanCocnhNMAib507FzAwfMRAS%2FWMAEAezu1Xlw2LCFjTyLIki4nFSQJu%2FlL8d%2FaN%2BSR%2FqWFILEDIBXqn%2FwcSY0eRPzZ9CeKWrpiedsc5kLsrqODmGtKoZ6CryN7axOglmaYloz6oyu9NAZPlyAeQFbN2eFg7Pb6etaJHyWmJ612bvikUFtjDf%2FaYiUyrIrVCCuKcUG804VqYt3LmVAFrTT81fMnoqdkkfbSFPU0jyaFIkuX0LpRF200FVxsDQ0CBGLt50HxMM7%2FOIaex82DfT4dGrHAj4LC7o4a7ReJQrl80UFh%2BJovNmWxUZ5O1tKMPuIQj5qanPQv5wfRWS7ZYLiC9gi5nqCw7KRoSfW0LwbQFt5aOcPPUa4zTIOe9GMzA5rj05F4vMN63h8EGOqUB%2FXjBaxGqZUnEFzhqDdFs0GHqK3uxk6c%2FGHcHwc1VwUkNJ24AaCtKuiwBtbThhIHX1Xxn3RcEj8btvK5aQMbFD%2Btqk%2FVycHCV%2BaHvac23prd9uLHvX73RmbyVoPPAzs6UnscxoA3W7TeOx2CW%2Fhbiynm6XjSAdJvX00czwIXEiIAw1Mplx5ENxjjrkm7DKKBBv%2BQqjmfck1h3lY7v4aKo3oCb%2BQOD&X-Amz-Signature=215b63b7813f19ed0714cba4d9f7f2e5ba3436704f8279af0f55ffaa0b0d3873&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LZKWN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD%2FoXQ072YjM07ENPyqJV5773MbnoHusKQXnMuFSxFFPQIgT8lB36ao%2BG%2FRR4Z8qLEdbOmYF43XDCf%2FIinhXEL5FToqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1zxt9avPWBF9NljircA5dHRHzZkB7aNltrjY86N318FwHsfhWsVcbTgBtFY1v%2Bx%2Bgk4neg8l9RLS62R%2FhZ77k8ZCtqhoNZc48zo%2FQ419NJBvRkMEtj%2FSkRDqRNTeONeb5JWBJwNKusG%2F8d5g3pMA3x7DuO9eFLeMEGZxsbB3w%2BsUlFTnHjWugi31oVCwofj5OIv2vtfQmOwPWzl8RcQo63Kku9neKyQjqZUzgPjldUImrN46bORuXQU%2FeZErH1FOOH6j%2F2xanCocnhNMAib507FzAwfMRAS%2FWMAEAezu1Xlw2LCFjTyLIki4nFSQJu%2FlL8d%2FaN%2BSR%2FqWFILEDIBXqn%2FwcSY0eRPzZ9CeKWrpiedsc5kLsrqODmGtKoZ6CryN7axOglmaYloz6oyu9NAZPlyAeQFbN2eFg7Pb6etaJHyWmJ612bvikUFtjDf%2FaYiUyrIrVCCuKcUG804VqYt3LmVAFrTT81fMnoqdkkfbSFPU0jyaFIkuX0LpRF200FVxsDQ0CBGLt50HxMM7%2FOIaex82DfT4dGrHAj4LC7o4a7ReJQrl80UFh%2BJovNmWxUZ5O1tKMPuIQj5qanPQv5wfRWS7ZYLiC9gi5nqCw7KRoSfW0LwbQFt5aOcPPUa4zTIOe9GMzA5rj05F4vMN63h8EGOqUB%2FXjBaxGqZUnEFzhqDdFs0GHqK3uxk6c%2FGHcHwc1VwUkNJ24AaCtKuiwBtbThhIHX1Xxn3RcEj8btvK5aQMbFD%2Btqk%2FVycHCV%2BaHvac23prd9uLHvX73RmbyVoPPAzs6UnscxoA3W7TeOx2CW%2Fhbiynm6XjSAdJvX00czwIXEiIAw1Mplx5ENxjjrkm7DKKBBv%2BQqjmfck1h3lY7v4aKo3oCb%2BQOD&X-Amz-Signature=326620c0899f6e2602af67ea79f536f226eba20d47fca6e5c9f3faa1dca3cd84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LZKWN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD%2FoXQ072YjM07ENPyqJV5773MbnoHusKQXnMuFSxFFPQIgT8lB36ao%2BG%2FRR4Z8qLEdbOmYF43XDCf%2FIinhXEL5FToqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1zxt9avPWBF9NljircA5dHRHzZkB7aNltrjY86N318FwHsfhWsVcbTgBtFY1v%2Bx%2Bgk4neg8l9RLS62R%2FhZ77k8ZCtqhoNZc48zo%2FQ419NJBvRkMEtj%2FSkRDqRNTeONeb5JWBJwNKusG%2F8d5g3pMA3x7DuO9eFLeMEGZxsbB3w%2BsUlFTnHjWugi31oVCwofj5OIv2vtfQmOwPWzl8RcQo63Kku9neKyQjqZUzgPjldUImrN46bORuXQU%2FeZErH1FOOH6j%2F2xanCocnhNMAib507FzAwfMRAS%2FWMAEAezu1Xlw2LCFjTyLIki4nFSQJu%2FlL8d%2FaN%2BSR%2FqWFILEDIBXqn%2FwcSY0eRPzZ9CeKWrpiedsc5kLsrqODmGtKoZ6CryN7axOglmaYloz6oyu9NAZPlyAeQFbN2eFg7Pb6etaJHyWmJ612bvikUFtjDf%2FaYiUyrIrVCCuKcUG804VqYt3LmVAFrTT81fMnoqdkkfbSFPU0jyaFIkuX0LpRF200FVxsDQ0CBGLt50HxMM7%2FOIaex82DfT4dGrHAj4LC7o4a7ReJQrl80UFh%2BJovNmWxUZ5O1tKMPuIQj5qanPQv5wfRWS7ZYLiC9gi5nqCw7KRoSfW0LwbQFt5aOcPPUa4zTIOe9GMzA5rj05F4vMN63h8EGOqUB%2FXjBaxGqZUnEFzhqDdFs0GHqK3uxk6c%2FGHcHwc1VwUkNJ24AaCtKuiwBtbThhIHX1Xxn3RcEj8btvK5aQMbFD%2Btqk%2FVycHCV%2BaHvac23prd9uLHvX73RmbyVoPPAzs6UnscxoA3W7TeOx2CW%2Fhbiynm6XjSAdJvX00czwIXEiIAw1Mplx5ENxjjrkm7DKKBBv%2BQqjmfck1h3lY7v4aKo3oCb%2BQOD&X-Amz-Signature=23d944c6d9fb767ec9473fc349cb6f9f54a3b70ae23b0feefdc6eb2e41f8e65f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LZKWN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD%2FoXQ072YjM07ENPyqJV5773MbnoHusKQXnMuFSxFFPQIgT8lB36ao%2BG%2FRR4Z8qLEdbOmYF43XDCf%2FIinhXEL5FToqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1zxt9avPWBF9NljircA5dHRHzZkB7aNltrjY86N318FwHsfhWsVcbTgBtFY1v%2Bx%2Bgk4neg8l9RLS62R%2FhZ77k8ZCtqhoNZc48zo%2FQ419NJBvRkMEtj%2FSkRDqRNTeONeb5JWBJwNKusG%2F8d5g3pMA3x7DuO9eFLeMEGZxsbB3w%2BsUlFTnHjWugi31oVCwofj5OIv2vtfQmOwPWzl8RcQo63Kku9neKyQjqZUzgPjldUImrN46bORuXQU%2FeZErH1FOOH6j%2F2xanCocnhNMAib507FzAwfMRAS%2FWMAEAezu1Xlw2LCFjTyLIki4nFSQJu%2FlL8d%2FaN%2BSR%2FqWFILEDIBXqn%2FwcSY0eRPzZ9CeKWrpiedsc5kLsrqODmGtKoZ6CryN7axOglmaYloz6oyu9NAZPlyAeQFbN2eFg7Pb6etaJHyWmJ612bvikUFtjDf%2FaYiUyrIrVCCuKcUG804VqYt3LmVAFrTT81fMnoqdkkfbSFPU0jyaFIkuX0LpRF200FVxsDQ0CBGLt50HxMM7%2FOIaex82DfT4dGrHAj4LC7o4a7ReJQrl80UFh%2BJovNmWxUZ5O1tKMPuIQj5qanPQv5wfRWS7ZYLiC9gi5nqCw7KRoSfW0LwbQFt5aOcPPUa4zTIOe9GMzA5rj05F4vMN63h8EGOqUB%2FXjBaxGqZUnEFzhqDdFs0GHqK3uxk6c%2FGHcHwc1VwUkNJ24AaCtKuiwBtbThhIHX1Xxn3RcEj8btvK5aQMbFD%2Btqk%2FVycHCV%2BaHvac23prd9uLHvX73RmbyVoPPAzs6UnscxoA3W7TeOx2CW%2Fhbiynm6XjSAdJvX00czwIXEiIAw1Mplx5ENxjjrkm7DKKBBv%2BQqjmfck1h3lY7v4aKo3oCb%2BQOD&X-Amz-Signature=8f6a35252e54d7ecdeeb63863931e7af7da6789c5adb7c1c8dab7b2f034f14b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LZKWN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD%2FoXQ072YjM07ENPyqJV5773MbnoHusKQXnMuFSxFFPQIgT8lB36ao%2BG%2FRR4Z8qLEdbOmYF43XDCf%2FIinhXEL5FToqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1zxt9avPWBF9NljircA5dHRHzZkB7aNltrjY86N318FwHsfhWsVcbTgBtFY1v%2Bx%2Bgk4neg8l9RLS62R%2FhZ77k8ZCtqhoNZc48zo%2FQ419NJBvRkMEtj%2FSkRDqRNTeONeb5JWBJwNKusG%2F8d5g3pMA3x7DuO9eFLeMEGZxsbB3w%2BsUlFTnHjWugi31oVCwofj5OIv2vtfQmOwPWzl8RcQo63Kku9neKyQjqZUzgPjldUImrN46bORuXQU%2FeZErH1FOOH6j%2F2xanCocnhNMAib507FzAwfMRAS%2FWMAEAezu1Xlw2LCFjTyLIki4nFSQJu%2FlL8d%2FaN%2BSR%2FqWFILEDIBXqn%2FwcSY0eRPzZ9CeKWrpiedsc5kLsrqODmGtKoZ6CryN7axOglmaYloz6oyu9NAZPlyAeQFbN2eFg7Pb6etaJHyWmJ612bvikUFtjDf%2FaYiUyrIrVCCuKcUG804VqYt3LmVAFrTT81fMnoqdkkfbSFPU0jyaFIkuX0LpRF200FVxsDQ0CBGLt50HxMM7%2FOIaex82DfT4dGrHAj4LC7o4a7ReJQrl80UFh%2BJovNmWxUZ5O1tKMPuIQj5qanPQv5wfRWS7ZYLiC9gi5nqCw7KRoSfW0LwbQFt5aOcPPUa4zTIOe9GMzA5rj05F4vMN63h8EGOqUB%2FXjBaxGqZUnEFzhqDdFs0GHqK3uxk6c%2FGHcHwc1VwUkNJ24AaCtKuiwBtbThhIHX1Xxn3RcEj8btvK5aQMbFD%2Btqk%2FVycHCV%2BaHvac23prd9uLHvX73RmbyVoPPAzs6UnscxoA3W7TeOx2CW%2Fhbiynm6XjSAdJvX00czwIXEiIAw1Mplx5ENxjjrkm7DKKBBv%2BQqjmfck1h3lY7v4aKo3oCb%2BQOD&X-Amz-Signature=c07fb3056153565e3e3569a514b23eabd702a77e8c963aea7b7ae4c4c1e74462&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LZKWN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD%2FoXQ072YjM07ENPyqJV5773MbnoHusKQXnMuFSxFFPQIgT8lB36ao%2BG%2FRR4Z8qLEdbOmYF43XDCf%2FIinhXEL5FToqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1zxt9avPWBF9NljircA5dHRHzZkB7aNltrjY86N318FwHsfhWsVcbTgBtFY1v%2Bx%2Bgk4neg8l9RLS62R%2FhZ77k8ZCtqhoNZc48zo%2FQ419NJBvRkMEtj%2FSkRDqRNTeONeb5JWBJwNKusG%2F8d5g3pMA3x7DuO9eFLeMEGZxsbB3w%2BsUlFTnHjWugi31oVCwofj5OIv2vtfQmOwPWzl8RcQo63Kku9neKyQjqZUzgPjldUImrN46bORuXQU%2FeZErH1FOOH6j%2F2xanCocnhNMAib507FzAwfMRAS%2FWMAEAezu1Xlw2LCFjTyLIki4nFSQJu%2FlL8d%2FaN%2BSR%2FqWFILEDIBXqn%2FwcSY0eRPzZ9CeKWrpiedsc5kLsrqODmGtKoZ6CryN7axOglmaYloz6oyu9NAZPlyAeQFbN2eFg7Pb6etaJHyWmJ612bvikUFtjDf%2FaYiUyrIrVCCuKcUG804VqYt3LmVAFrTT81fMnoqdkkfbSFPU0jyaFIkuX0LpRF200FVxsDQ0CBGLt50HxMM7%2FOIaex82DfT4dGrHAj4LC7o4a7ReJQrl80UFh%2BJovNmWxUZ5O1tKMPuIQj5qanPQv5wfRWS7ZYLiC9gi5nqCw7KRoSfW0LwbQFt5aOcPPUa4zTIOe9GMzA5rj05F4vMN63h8EGOqUB%2FXjBaxGqZUnEFzhqDdFs0GHqK3uxk6c%2FGHcHwc1VwUkNJ24AaCtKuiwBtbThhIHX1Xxn3RcEj8btvK5aQMbFD%2Btqk%2FVycHCV%2BaHvac23prd9uLHvX73RmbyVoPPAzs6UnscxoA3W7TeOx2CW%2Fhbiynm6XjSAdJvX00czwIXEiIAw1Mplx5ENxjjrkm7DKKBBv%2BQqjmfck1h3lY7v4aKo3oCb%2BQOD&X-Amz-Signature=352acc4d25ef91855b3fe41a68b3b44f0ec522be990a4a7dcb6a92dff85738c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
