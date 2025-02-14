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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ASJF2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2Bfs%2Bm%2FTeKLpEcZxMBfmPAzAMO9%2FIlcVwje8m5e2APwIgMFirFa5xXB2IfY1ODHExLuLaUBMEt%2BNxe5xcnHgwUy0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHvw3VEoU2sAjoS7CircA7TEQXwn%2FiLm2o7YkLExgfaStB6ClqHCXsJzq3ChSV7zKxKsdGHxBGQ%2BRWXPkiFdgps0MQEZWcfom%2FcbWseExaw5t%2Bf9qVLmyc5m3sjuQHqViI7kvE7IK5R6MCpWe%2FlbzSwlUrGMjMrdle6sgQeYU5m3OxSLJDEzkkpdgr46l5sH9yp1MfQtBwiIJ%2BYRWT8JvCc0eK5nk7MdzeBD%2Bu%2F%2Fy9ezhqZcFJgUNbwqwxHYihEoiyqLykr3GG7PS40bGw3lltl6ktuSkdzulnwG%2Bj7ntXfdUrr%2Bi%2B%2FoF9yKDql55s1EWPaLQ7x5v5iqDG4%2BHc%2BJcHJuARoDF3gkiBjQVWHxZjuLDEC84ILGv%2BgutZ8zAJgiWle2gnkezZyJnA1HD%2F5%2BHKPhvxXCVSa16yaSGhosmFr6oMJ5LwoJyTOV22FpKmxzB8YX0HQWk8BaioNfPxA1CN0QXznI6jIg8p%2BuVNi3Q9wa8K%2FKICtvtnpGYHX5xfofV0q19OFSIpqOHFj8MzpbOqRplI4N8PDgGIOYdXh1s7T8%2BT4OdW5Yd%2FneOcixLz7jVEIf33zI7HF9K9JsicrAsiCsW0EiGx1Lb6I46ETAdhspM2Iq4BJevYfoicwnNiMoPHjmM%2BVI9Pdka6P0MPDQur0GOqUB8Nbyhn54lm7WaZnh7n9zM6tWqJrP8iJiv2gpDmo3OivuWMgvhgB%2FBHqGBLlwZL5Bir0hJFbdZlNLW6drLMhkCVAWrWhgrevtMPqlhaC4tC6EF%2By17%2BkY1H%2FVnlNaZxa3Dj9xUpsIPbacmwqqv1GNGqYAqEebjEyUmUOzWuxQqsTmdDL4HUiaTsM8Hbs3DXKPJqFXswFNRm9qHugJZWqxuzOHfyJR&X-Amz-Signature=b3c205b1c191e077984d7c9946da83ea5804bdcd5c8cb4cc0799b44942bdb90e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ASJF2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2Bfs%2Bm%2FTeKLpEcZxMBfmPAzAMO9%2FIlcVwje8m5e2APwIgMFirFa5xXB2IfY1ODHExLuLaUBMEt%2BNxe5xcnHgwUy0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHvw3VEoU2sAjoS7CircA7TEQXwn%2FiLm2o7YkLExgfaStB6ClqHCXsJzq3ChSV7zKxKsdGHxBGQ%2BRWXPkiFdgps0MQEZWcfom%2FcbWseExaw5t%2Bf9qVLmyc5m3sjuQHqViI7kvE7IK5R6MCpWe%2FlbzSwlUrGMjMrdle6sgQeYU5m3OxSLJDEzkkpdgr46l5sH9yp1MfQtBwiIJ%2BYRWT8JvCc0eK5nk7MdzeBD%2Bu%2F%2Fy9ezhqZcFJgUNbwqwxHYihEoiyqLykr3GG7PS40bGw3lltl6ktuSkdzulnwG%2Bj7ntXfdUrr%2Bi%2B%2FoF9yKDql55s1EWPaLQ7x5v5iqDG4%2BHc%2BJcHJuARoDF3gkiBjQVWHxZjuLDEC84ILGv%2BgutZ8zAJgiWle2gnkezZyJnA1HD%2F5%2BHKPhvxXCVSa16yaSGhosmFr6oMJ5LwoJyTOV22FpKmxzB8YX0HQWk8BaioNfPxA1CN0QXznI6jIg8p%2BuVNi3Q9wa8K%2FKICtvtnpGYHX5xfofV0q19OFSIpqOHFj8MzpbOqRplI4N8PDgGIOYdXh1s7T8%2BT4OdW5Yd%2FneOcixLz7jVEIf33zI7HF9K9JsicrAsiCsW0EiGx1Lb6I46ETAdhspM2Iq4BJevYfoicwnNiMoPHjmM%2BVI9Pdka6P0MPDQur0GOqUB8Nbyhn54lm7WaZnh7n9zM6tWqJrP8iJiv2gpDmo3OivuWMgvhgB%2FBHqGBLlwZL5Bir0hJFbdZlNLW6drLMhkCVAWrWhgrevtMPqlhaC4tC6EF%2By17%2BkY1H%2FVnlNaZxa3Dj9xUpsIPbacmwqqv1GNGqYAqEebjEyUmUOzWuxQqsTmdDL4HUiaTsM8Hbs3DXKPJqFXswFNRm9qHugJZWqxuzOHfyJR&X-Amz-Signature=a5cd78ef7e50b86bc08e371174e6e4558674ca54a824c70c604c16ba007990c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ASJF2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2Bfs%2Bm%2FTeKLpEcZxMBfmPAzAMO9%2FIlcVwje8m5e2APwIgMFirFa5xXB2IfY1ODHExLuLaUBMEt%2BNxe5xcnHgwUy0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHvw3VEoU2sAjoS7CircA7TEQXwn%2FiLm2o7YkLExgfaStB6ClqHCXsJzq3ChSV7zKxKsdGHxBGQ%2BRWXPkiFdgps0MQEZWcfom%2FcbWseExaw5t%2Bf9qVLmyc5m3sjuQHqViI7kvE7IK5R6MCpWe%2FlbzSwlUrGMjMrdle6sgQeYU5m3OxSLJDEzkkpdgr46l5sH9yp1MfQtBwiIJ%2BYRWT8JvCc0eK5nk7MdzeBD%2Bu%2F%2Fy9ezhqZcFJgUNbwqwxHYihEoiyqLykr3GG7PS40bGw3lltl6ktuSkdzulnwG%2Bj7ntXfdUrr%2Bi%2B%2FoF9yKDql55s1EWPaLQ7x5v5iqDG4%2BHc%2BJcHJuARoDF3gkiBjQVWHxZjuLDEC84ILGv%2BgutZ8zAJgiWle2gnkezZyJnA1HD%2F5%2BHKPhvxXCVSa16yaSGhosmFr6oMJ5LwoJyTOV22FpKmxzB8YX0HQWk8BaioNfPxA1CN0QXznI6jIg8p%2BuVNi3Q9wa8K%2FKICtvtnpGYHX5xfofV0q19OFSIpqOHFj8MzpbOqRplI4N8PDgGIOYdXh1s7T8%2BT4OdW5Yd%2FneOcixLz7jVEIf33zI7HF9K9JsicrAsiCsW0EiGx1Lb6I46ETAdhspM2Iq4BJevYfoicwnNiMoPHjmM%2BVI9Pdka6P0MPDQur0GOqUB8Nbyhn54lm7WaZnh7n9zM6tWqJrP8iJiv2gpDmo3OivuWMgvhgB%2FBHqGBLlwZL5Bir0hJFbdZlNLW6drLMhkCVAWrWhgrevtMPqlhaC4tC6EF%2By17%2BkY1H%2FVnlNaZxa3Dj9xUpsIPbacmwqqv1GNGqYAqEebjEyUmUOzWuxQqsTmdDL4HUiaTsM8Hbs3DXKPJqFXswFNRm9qHugJZWqxuzOHfyJR&X-Amz-Signature=159f505b05de4ad3a43d7d95c4e3d33522ef31e0259c399130e35fc309fc38a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ASJF2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2Bfs%2Bm%2FTeKLpEcZxMBfmPAzAMO9%2FIlcVwje8m5e2APwIgMFirFa5xXB2IfY1ODHExLuLaUBMEt%2BNxe5xcnHgwUy0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHvw3VEoU2sAjoS7CircA7TEQXwn%2FiLm2o7YkLExgfaStB6ClqHCXsJzq3ChSV7zKxKsdGHxBGQ%2BRWXPkiFdgps0MQEZWcfom%2FcbWseExaw5t%2Bf9qVLmyc5m3sjuQHqViI7kvE7IK5R6MCpWe%2FlbzSwlUrGMjMrdle6sgQeYU5m3OxSLJDEzkkpdgr46l5sH9yp1MfQtBwiIJ%2BYRWT8JvCc0eK5nk7MdzeBD%2Bu%2F%2Fy9ezhqZcFJgUNbwqwxHYihEoiyqLykr3GG7PS40bGw3lltl6ktuSkdzulnwG%2Bj7ntXfdUrr%2Bi%2B%2FoF9yKDql55s1EWPaLQ7x5v5iqDG4%2BHc%2BJcHJuARoDF3gkiBjQVWHxZjuLDEC84ILGv%2BgutZ8zAJgiWle2gnkezZyJnA1HD%2F5%2BHKPhvxXCVSa16yaSGhosmFr6oMJ5LwoJyTOV22FpKmxzB8YX0HQWk8BaioNfPxA1CN0QXznI6jIg8p%2BuVNi3Q9wa8K%2FKICtvtnpGYHX5xfofV0q19OFSIpqOHFj8MzpbOqRplI4N8PDgGIOYdXh1s7T8%2BT4OdW5Yd%2FneOcixLz7jVEIf33zI7HF9K9JsicrAsiCsW0EiGx1Lb6I46ETAdhspM2Iq4BJevYfoicwnNiMoPHjmM%2BVI9Pdka6P0MPDQur0GOqUB8Nbyhn54lm7WaZnh7n9zM6tWqJrP8iJiv2gpDmo3OivuWMgvhgB%2FBHqGBLlwZL5Bir0hJFbdZlNLW6drLMhkCVAWrWhgrevtMPqlhaC4tC6EF%2By17%2BkY1H%2FVnlNaZxa3Dj9xUpsIPbacmwqqv1GNGqYAqEebjEyUmUOzWuxQqsTmdDL4HUiaTsM8Hbs3DXKPJqFXswFNRm9qHugJZWqxuzOHfyJR&X-Amz-Signature=5a835090c34a077ba7d514c38ead7a2875e2cb17b04eacbe04831a76e6e38da3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ASJF2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2Bfs%2Bm%2FTeKLpEcZxMBfmPAzAMO9%2FIlcVwje8m5e2APwIgMFirFa5xXB2IfY1ODHExLuLaUBMEt%2BNxe5xcnHgwUy0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHvw3VEoU2sAjoS7CircA7TEQXwn%2FiLm2o7YkLExgfaStB6ClqHCXsJzq3ChSV7zKxKsdGHxBGQ%2BRWXPkiFdgps0MQEZWcfom%2FcbWseExaw5t%2Bf9qVLmyc5m3sjuQHqViI7kvE7IK5R6MCpWe%2FlbzSwlUrGMjMrdle6sgQeYU5m3OxSLJDEzkkpdgr46l5sH9yp1MfQtBwiIJ%2BYRWT8JvCc0eK5nk7MdzeBD%2Bu%2F%2Fy9ezhqZcFJgUNbwqwxHYihEoiyqLykr3GG7PS40bGw3lltl6ktuSkdzulnwG%2Bj7ntXfdUrr%2Bi%2B%2FoF9yKDql55s1EWPaLQ7x5v5iqDG4%2BHc%2BJcHJuARoDF3gkiBjQVWHxZjuLDEC84ILGv%2BgutZ8zAJgiWle2gnkezZyJnA1HD%2F5%2BHKPhvxXCVSa16yaSGhosmFr6oMJ5LwoJyTOV22FpKmxzB8YX0HQWk8BaioNfPxA1CN0QXznI6jIg8p%2BuVNi3Q9wa8K%2FKICtvtnpGYHX5xfofV0q19OFSIpqOHFj8MzpbOqRplI4N8PDgGIOYdXh1s7T8%2BT4OdW5Yd%2FneOcixLz7jVEIf33zI7HF9K9JsicrAsiCsW0EiGx1Lb6I46ETAdhspM2Iq4BJevYfoicwnNiMoPHjmM%2BVI9Pdka6P0MPDQur0GOqUB8Nbyhn54lm7WaZnh7n9zM6tWqJrP8iJiv2gpDmo3OivuWMgvhgB%2FBHqGBLlwZL5Bir0hJFbdZlNLW6drLMhkCVAWrWhgrevtMPqlhaC4tC6EF%2By17%2BkY1H%2FVnlNaZxa3Dj9xUpsIPbacmwqqv1GNGqYAqEebjEyUmUOzWuxQqsTmdDL4HUiaTsM8Hbs3DXKPJqFXswFNRm9qHugJZWqxuzOHfyJR&X-Amz-Signature=9f56d9b319a165a0266ec0bd913cc3b6c053809ef717f12f559c180874ae36f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ASJF2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2Bfs%2Bm%2FTeKLpEcZxMBfmPAzAMO9%2FIlcVwje8m5e2APwIgMFirFa5xXB2IfY1ODHExLuLaUBMEt%2BNxe5xcnHgwUy0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHvw3VEoU2sAjoS7CircA7TEQXwn%2FiLm2o7YkLExgfaStB6ClqHCXsJzq3ChSV7zKxKsdGHxBGQ%2BRWXPkiFdgps0MQEZWcfom%2FcbWseExaw5t%2Bf9qVLmyc5m3sjuQHqViI7kvE7IK5R6MCpWe%2FlbzSwlUrGMjMrdle6sgQeYU5m3OxSLJDEzkkpdgr46l5sH9yp1MfQtBwiIJ%2BYRWT8JvCc0eK5nk7MdzeBD%2Bu%2F%2Fy9ezhqZcFJgUNbwqwxHYihEoiyqLykr3GG7PS40bGw3lltl6ktuSkdzulnwG%2Bj7ntXfdUrr%2Bi%2B%2FoF9yKDql55s1EWPaLQ7x5v5iqDG4%2BHc%2BJcHJuARoDF3gkiBjQVWHxZjuLDEC84ILGv%2BgutZ8zAJgiWle2gnkezZyJnA1HD%2F5%2BHKPhvxXCVSa16yaSGhosmFr6oMJ5LwoJyTOV22FpKmxzB8YX0HQWk8BaioNfPxA1CN0QXznI6jIg8p%2BuVNi3Q9wa8K%2FKICtvtnpGYHX5xfofV0q19OFSIpqOHFj8MzpbOqRplI4N8PDgGIOYdXh1s7T8%2BT4OdW5Yd%2FneOcixLz7jVEIf33zI7HF9K9JsicrAsiCsW0EiGx1Lb6I46ETAdhspM2Iq4BJevYfoicwnNiMoPHjmM%2BVI9Pdka6P0MPDQur0GOqUB8Nbyhn54lm7WaZnh7n9zM6tWqJrP8iJiv2gpDmo3OivuWMgvhgB%2FBHqGBLlwZL5Bir0hJFbdZlNLW6drLMhkCVAWrWhgrevtMPqlhaC4tC6EF%2By17%2BkY1H%2FVnlNaZxa3Dj9xUpsIPbacmwqqv1GNGqYAqEebjEyUmUOzWuxQqsTmdDL4HUiaTsM8Hbs3DXKPJqFXswFNRm9qHugJZWqxuzOHfyJR&X-Amz-Signature=596850f8560f6e8c96f9c16621ff12c5ee9f344ae083a3e81a4f1e76dfdf412d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ASJF2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2Bfs%2Bm%2FTeKLpEcZxMBfmPAzAMO9%2FIlcVwje8m5e2APwIgMFirFa5xXB2IfY1ODHExLuLaUBMEt%2BNxe5xcnHgwUy0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHvw3VEoU2sAjoS7CircA7TEQXwn%2FiLm2o7YkLExgfaStB6ClqHCXsJzq3ChSV7zKxKsdGHxBGQ%2BRWXPkiFdgps0MQEZWcfom%2FcbWseExaw5t%2Bf9qVLmyc5m3sjuQHqViI7kvE7IK5R6MCpWe%2FlbzSwlUrGMjMrdle6sgQeYU5m3OxSLJDEzkkpdgr46l5sH9yp1MfQtBwiIJ%2BYRWT8JvCc0eK5nk7MdzeBD%2Bu%2F%2Fy9ezhqZcFJgUNbwqwxHYihEoiyqLykr3GG7PS40bGw3lltl6ktuSkdzulnwG%2Bj7ntXfdUrr%2Bi%2B%2FoF9yKDql55s1EWPaLQ7x5v5iqDG4%2BHc%2BJcHJuARoDF3gkiBjQVWHxZjuLDEC84ILGv%2BgutZ8zAJgiWle2gnkezZyJnA1HD%2F5%2BHKPhvxXCVSa16yaSGhosmFr6oMJ5LwoJyTOV22FpKmxzB8YX0HQWk8BaioNfPxA1CN0QXznI6jIg8p%2BuVNi3Q9wa8K%2FKICtvtnpGYHX5xfofV0q19OFSIpqOHFj8MzpbOqRplI4N8PDgGIOYdXh1s7T8%2BT4OdW5Yd%2FneOcixLz7jVEIf33zI7HF9K9JsicrAsiCsW0EiGx1Lb6I46ETAdhspM2Iq4BJevYfoicwnNiMoPHjmM%2BVI9Pdka6P0MPDQur0GOqUB8Nbyhn54lm7WaZnh7n9zM6tWqJrP8iJiv2gpDmo3OivuWMgvhgB%2FBHqGBLlwZL5Bir0hJFbdZlNLW6drLMhkCVAWrWhgrevtMPqlhaC4tC6EF%2By17%2BkY1H%2FVnlNaZxa3Dj9xUpsIPbacmwqqv1GNGqYAqEebjEyUmUOzWuxQqsTmdDL4HUiaTsM8Hbs3DXKPJqFXswFNRm9qHugJZWqxuzOHfyJR&X-Amz-Signature=4f430f8f11c2f35d914ea29e2773e4680a4da97e98d27d772279e2561d93983a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ASJF2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2Bfs%2Bm%2FTeKLpEcZxMBfmPAzAMO9%2FIlcVwje8m5e2APwIgMFirFa5xXB2IfY1ODHExLuLaUBMEt%2BNxe5xcnHgwUy0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHvw3VEoU2sAjoS7CircA7TEQXwn%2FiLm2o7YkLExgfaStB6ClqHCXsJzq3ChSV7zKxKsdGHxBGQ%2BRWXPkiFdgps0MQEZWcfom%2FcbWseExaw5t%2Bf9qVLmyc5m3sjuQHqViI7kvE7IK5R6MCpWe%2FlbzSwlUrGMjMrdle6sgQeYU5m3OxSLJDEzkkpdgr46l5sH9yp1MfQtBwiIJ%2BYRWT8JvCc0eK5nk7MdzeBD%2Bu%2F%2Fy9ezhqZcFJgUNbwqwxHYihEoiyqLykr3GG7PS40bGw3lltl6ktuSkdzulnwG%2Bj7ntXfdUrr%2Bi%2B%2FoF9yKDql55s1EWPaLQ7x5v5iqDG4%2BHc%2BJcHJuARoDF3gkiBjQVWHxZjuLDEC84ILGv%2BgutZ8zAJgiWle2gnkezZyJnA1HD%2F5%2BHKPhvxXCVSa16yaSGhosmFr6oMJ5LwoJyTOV22FpKmxzB8YX0HQWk8BaioNfPxA1CN0QXznI6jIg8p%2BuVNi3Q9wa8K%2FKICtvtnpGYHX5xfofV0q19OFSIpqOHFj8MzpbOqRplI4N8PDgGIOYdXh1s7T8%2BT4OdW5Yd%2FneOcixLz7jVEIf33zI7HF9K9JsicrAsiCsW0EiGx1Lb6I46ETAdhspM2Iq4BJevYfoicwnNiMoPHjmM%2BVI9Pdka6P0MPDQur0GOqUB8Nbyhn54lm7WaZnh7n9zM6tWqJrP8iJiv2gpDmo3OivuWMgvhgB%2FBHqGBLlwZL5Bir0hJFbdZlNLW6drLMhkCVAWrWhgrevtMPqlhaC4tC6EF%2By17%2BkY1H%2FVnlNaZxa3Dj9xUpsIPbacmwqqv1GNGqYAqEebjEyUmUOzWuxQqsTmdDL4HUiaTsM8Hbs3DXKPJqFXswFNRm9qHugJZWqxuzOHfyJR&X-Amz-Signature=97dce3fed3f73fc8ad1429cbdd5817379bee78b5054d24fa57a703d24db28286&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
