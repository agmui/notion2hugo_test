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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3U7FWS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCwZN8bhjfPAaG77hePPjgfsDhrAfRcS%2Bc0pKM9DPyrSwIgeCFvXZt%2BjEghGeiJq5jErlBYEqKYzpS5kDWTIJPB3g8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDES5sqr6sV4hRzAa%2FSrcA1RLqF1aL%2BLck%2F3sGb7Zju5YYh5F82rvSj%2BSnWwvpPMUW52vT%2FjYlsglxC7amO7LGU2jkhs1ynFT3VCsxZMjHc6ED%2F9htyCC5EnMGYuOFPQKtHFtbun7Z7upXlzPxzozZ8WNZwD4xZnT34y7MbavKIxp0RLfcZsR8CGeFArc%2FfUkUeOZlJBZJj6KewEgUb8nhDp7e2VRjW3aUPvGcEif1GRH5PauWMcpSgyd3bpgENGT5oPnTY5ntUb3W%2F0OGV2uodlm6QrgBH2Y%2BQUh85JjynLgqjRgHyM4FnLOqFZUUW50C7EOnIUbeGPSuLYsXgmWMQhKbOwQDuAv9lalc%2BiAFDK0jsxVgnAgic1Fyh9uztketsOvxKTGGk4pPnt2JQvTsnMXQExcqtPLF%2B31CxOvDfciqSFjCX2UuZFzFaof1wr75%2FQ%2FToHpiitOhiPdhDoyJyCZESO8ou%2BWjUSjKY8EZ6810zZZgfEYwB06JAgWd7GLTpX5%2FHUc2fXhMFXcycx1PbRhy6vWIAYP8iL911bkEHlu1KNdeULTSnRCg3g85w352H7zKneX99tfowix7DIjJ78j0J409yxZh70MJel6y99oiiakvOgC%2F5FYKlvWI8RfHZ7R0HN5puYw0IbzMJW8kcQGOqUB9xVIbniFD7MFmU4xrVRQpG%2Fj3NuWdfSoAe%2BWSRDuSIAqOhBuLCz1Lz%2FuYMeOQRuH9Q5xzATt7mvFmVjEe3ZBKqH4DSilCi8y5A8erNeC7hwV3DSMDrx2M0BLfyBpVIvDvp4fngiSOejp60O2BeHFTR0SNwD%2FtK%2BB2vsVWe60G13BE9Bq8bKi2Qznwb3vozIL9%2FL8JLpC5IlDDrw8RMqyV1bMaFp5&X-Amz-Signature=6cddc8dadce61b17cb880769f70c554409cd0be03353b6da7db4de53b3da887d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3U7FWS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCwZN8bhjfPAaG77hePPjgfsDhrAfRcS%2Bc0pKM9DPyrSwIgeCFvXZt%2BjEghGeiJq5jErlBYEqKYzpS5kDWTIJPB3g8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDES5sqr6sV4hRzAa%2FSrcA1RLqF1aL%2BLck%2F3sGb7Zju5YYh5F82rvSj%2BSnWwvpPMUW52vT%2FjYlsglxC7amO7LGU2jkhs1ynFT3VCsxZMjHc6ED%2F9htyCC5EnMGYuOFPQKtHFtbun7Z7upXlzPxzozZ8WNZwD4xZnT34y7MbavKIxp0RLfcZsR8CGeFArc%2FfUkUeOZlJBZJj6KewEgUb8nhDp7e2VRjW3aUPvGcEif1GRH5PauWMcpSgyd3bpgENGT5oPnTY5ntUb3W%2F0OGV2uodlm6QrgBH2Y%2BQUh85JjynLgqjRgHyM4FnLOqFZUUW50C7EOnIUbeGPSuLYsXgmWMQhKbOwQDuAv9lalc%2BiAFDK0jsxVgnAgic1Fyh9uztketsOvxKTGGk4pPnt2JQvTsnMXQExcqtPLF%2B31CxOvDfciqSFjCX2UuZFzFaof1wr75%2FQ%2FToHpiitOhiPdhDoyJyCZESO8ou%2BWjUSjKY8EZ6810zZZgfEYwB06JAgWd7GLTpX5%2FHUc2fXhMFXcycx1PbRhy6vWIAYP8iL911bkEHlu1KNdeULTSnRCg3g85w352H7zKneX99tfowix7DIjJ78j0J409yxZh70MJel6y99oiiakvOgC%2F5FYKlvWI8RfHZ7R0HN5puYw0IbzMJW8kcQGOqUB9xVIbniFD7MFmU4xrVRQpG%2Fj3NuWdfSoAe%2BWSRDuSIAqOhBuLCz1Lz%2FuYMeOQRuH9Q5xzATt7mvFmVjEe3ZBKqH4DSilCi8y5A8erNeC7hwV3DSMDrx2M0BLfyBpVIvDvp4fngiSOejp60O2BeHFTR0SNwD%2FtK%2BB2vsVWe60G13BE9Bq8bKi2Qznwb3vozIL9%2FL8JLpC5IlDDrw8RMqyV1bMaFp5&X-Amz-Signature=4c1e55cfe194437a1a92054b06359180c4b73ba4f533250dc99ea4808105eedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3U7FWS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCwZN8bhjfPAaG77hePPjgfsDhrAfRcS%2Bc0pKM9DPyrSwIgeCFvXZt%2BjEghGeiJq5jErlBYEqKYzpS5kDWTIJPB3g8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDES5sqr6sV4hRzAa%2FSrcA1RLqF1aL%2BLck%2F3sGb7Zju5YYh5F82rvSj%2BSnWwvpPMUW52vT%2FjYlsglxC7amO7LGU2jkhs1ynFT3VCsxZMjHc6ED%2F9htyCC5EnMGYuOFPQKtHFtbun7Z7upXlzPxzozZ8WNZwD4xZnT34y7MbavKIxp0RLfcZsR8CGeFArc%2FfUkUeOZlJBZJj6KewEgUb8nhDp7e2VRjW3aUPvGcEif1GRH5PauWMcpSgyd3bpgENGT5oPnTY5ntUb3W%2F0OGV2uodlm6QrgBH2Y%2BQUh85JjynLgqjRgHyM4FnLOqFZUUW50C7EOnIUbeGPSuLYsXgmWMQhKbOwQDuAv9lalc%2BiAFDK0jsxVgnAgic1Fyh9uztketsOvxKTGGk4pPnt2JQvTsnMXQExcqtPLF%2B31CxOvDfciqSFjCX2UuZFzFaof1wr75%2FQ%2FToHpiitOhiPdhDoyJyCZESO8ou%2BWjUSjKY8EZ6810zZZgfEYwB06JAgWd7GLTpX5%2FHUc2fXhMFXcycx1PbRhy6vWIAYP8iL911bkEHlu1KNdeULTSnRCg3g85w352H7zKneX99tfowix7DIjJ78j0J409yxZh70MJel6y99oiiakvOgC%2F5FYKlvWI8RfHZ7R0HN5puYw0IbzMJW8kcQGOqUB9xVIbniFD7MFmU4xrVRQpG%2Fj3NuWdfSoAe%2BWSRDuSIAqOhBuLCz1Lz%2FuYMeOQRuH9Q5xzATt7mvFmVjEe3ZBKqH4DSilCi8y5A8erNeC7hwV3DSMDrx2M0BLfyBpVIvDvp4fngiSOejp60O2BeHFTR0SNwD%2FtK%2BB2vsVWe60G13BE9Bq8bKi2Qznwb3vozIL9%2FL8JLpC5IlDDrw8RMqyV1bMaFp5&X-Amz-Signature=da5dd169671c1c64b49e770557af44af441f3ccdb6fea99039c56b53d3f1f9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3U7FWS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCwZN8bhjfPAaG77hePPjgfsDhrAfRcS%2Bc0pKM9DPyrSwIgeCFvXZt%2BjEghGeiJq5jErlBYEqKYzpS5kDWTIJPB3g8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDES5sqr6sV4hRzAa%2FSrcA1RLqF1aL%2BLck%2F3sGb7Zju5YYh5F82rvSj%2BSnWwvpPMUW52vT%2FjYlsglxC7amO7LGU2jkhs1ynFT3VCsxZMjHc6ED%2F9htyCC5EnMGYuOFPQKtHFtbun7Z7upXlzPxzozZ8WNZwD4xZnT34y7MbavKIxp0RLfcZsR8CGeFArc%2FfUkUeOZlJBZJj6KewEgUb8nhDp7e2VRjW3aUPvGcEif1GRH5PauWMcpSgyd3bpgENGT5oPnTY5ntUb3W%2F0OGV2uodlm6QrgBH2Y%2BQUh85JjynLgqjRgHyM4FnLOqFZUUW50C7EOnIUbeGPSuLYsXgmWMQhKbOwQDuAv9lalc%2BiAFDK0jsxVgnAgic1Fyh9uztketsOvxKTGGk4pPnt2JQvTsnMXQExcqtPLF%2B31CxOvDfciqSFjCX2UuZFzFaof1wr75%2FQ%2FToHpiitOhiPdhDoyJyCZESO8ou%2BWjUSjKY8EZ6810zZZgfEYwB06JAgWd7GLTpX5%2FHUc2fXhMFXcycx1PbRhy6vWIAYP8iL911bkEHlu1KNdeULTSnRCg3g85w352H7zKneX99tfowix7DIjJ78j0J409yxZh70MJel6y99oiiakvOgC%2F5FYKlvWI8RfHZ7R0HN5puYw0IbzMJW8kcQGOqUB9xVIbniFD7MFmU4xrVRQpG%2Fj3NuWdfSoAe%2BWSRDuSIAqOhBuLCz1Lz%2FuYMeOQRuH9Q5xzATt7mvFmVjEe3ZBKqH4DSilCi8y5A8erNeC7hwV3DSMDrx2M0BLfyBpVIvDvp4fngiSOejp60O2BeHFTR0SNwD%2FtK%2BB2vsVWe60G13BE9Bq8bKi2Qznwb3vozIL9%2FL8JLpC5IlDDrw8RMqyV1bMaFp5&X-Amz-Signature=3012a56092dbd9ee9fca81039f3c6812ba6f69efee6f9463e4db4fed450cf52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3U7FWS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCwZN8bhjfPAaG77hePPjgfsDhrAfRcS%2Bc0pKM9DPyrSwIgeCFvXZt%2BjEghGeiJq5jErlBYEqKYzpS5kDWTIJPB3g8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDES5sqr6sV4hRzAa%2FSrcA1RLqF1aL%2BLck%2F3sGb7Zju5YYh5F82rvSj%2BSnWwvpPMUW52vT%2FjYlsglxC7amO7LGU2jkhs1ynFT3VCsxZMjHc6ED%2F9htyCC5EnMGYuOFPQKtHFtbun7Z7upXlzPxzozZ8WNZwD4xZnT34y7MbavKIxp0RLfcZsR8CGeFArc%2FfUkUeOZlJBZJj6KewEgUb8nhDp7e2VRjW3aUPvGcEif1GRH5PauWMcpSgyd3bpgENGT5oPnTY5ntUb3W%2F0OGV2uodlm6QrgBH2Y%2BQUh85JjynLgqjRgHyM4FnLOqFZUUW50C7EOnIUbeGPSuLYsXgmWMQhKbOwQDuAv9lalc%2BiAFDK0jsxVgnAgic1Fyh9uztketsOvxKTGGk4pPnt2JQvTsnMXQExcqtPLF%2B31CxOvDfciqSFjCX2UuZFzFaof1wr75%2FQ%2FToHpiitOhiPdhDoyJyCZESO8ou%2BWjUSjKY8EZ6810zZZgfEYwB06JAgWd7GLTpX5%2FHUc2fXhMFXcycx1PbRhy6vWIAYP8iL911bkEHlu1KNdeULTSnRCg3g85w352H7zKneX99tfowix7DIjJ78j0J409yxZh70MJel6y99oiiakvOgC%2F5FYKlvWI8RfHZ7R0HN5puYw0IbzMJW8kcQGOqUB9xVIbniFD7MFmU4xrVRQpG%2Fj3NuWdfSoAe%2BWSRDuSIAqOhBuLCz1Lz%2FuYMeOQRuH9Q5xzATt7mvFmVjEe3ZBKqH4DSilCi8y5A8erNeC7hwV3DSMDrx2M0BLfyBpVIvDvp4fngiSOejp60O2BeHFTR0SNwD%2FtK%2BB2vsVWe60G13BE9Bq8bKi2Qznwb3vozIL9%2FL8JLpC5IlDDrw8RMqyV1bMaFp5&X-Amz-Signature=8f2a0df88e3f3ccbe5c06f013efbad86da1eb6745a57ebb2349833317d07434b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3U7FWS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCwZN8bhjfPAaG77hePPjgfsDhrAfRcS%2Bc0pKM9DPyrSwIgeCFvXZt%2BjEghGeiJq5jErlBYEqKYzpS5kDWTIJPB3g8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDES5sqr6sV4hRzAa%2FSrcA1RLqF1aL%2BLck%2F3sGb7Zju5YYh5F82rvSj%2BSnWwvpPMUW52vT%2FjYlsglxC7amO7LGU2jkhs1ynFT3VCsxZMjHc6ED%2F9htyCC5EnMGYuOFPQKtHFtbun7Z7upXlzPxzozZ8WNZwD4xZnT34y7MbavKIxp0RLfcZsR8CGeFArc%2FfUkUeOZlJBZJj6KewEgUb8nhDp7e2VRjW3aUPvGcEif1GRH5PauWMcpSgyd3bpgENGT5oPnTY5ntUb3W%2F0OGV2uodlm6QrgBH2Y%2BQUh85JjynLgqjRgHyM4FnLOqFZUUW50C7EOnIUbeGPSuLYsXgmWMQhKbOwQDuAv9lalc%2BiAFDK0jsxVgnAgic1Fyh9uztketsOvxKTGGk4pPnt2JQvTsnMXQExcqtPLF%2B31CxOvDfciqSFjCX2UuZFzFaof1wr75%2FQ%2FToHpiitOhiPdhDoyJyCZESO8ou%2BWjUSjKY8EZ6810zZZgfEYwB06JAgWd7GLTpX5%2FHUc2fXhMFXcycx1PbRhy6vWIAYP8iL911bkEHlu1KNdeULTSnRCg3g85w352H7zKneX99tfowix7DIjJ78j0J409yxZh70MJel6y99oiiakvOgC%2F5FYKlvWI8RfHZ7R0HN5puYw0IbzMJW8kcQGOqUB9xVIbniFD7MFmU4xrVRQpG%2Fj3NuWdfSoAe%2BWSRDuSIAqOhBuLCz1Lz%2FuYMeOQRuH9Q5xzATt7mvFmVjEe3ZBKqH4DSilCi8y5A8erNeC7hwV3DSMDrx2M0BLfyBpVIvDvp4fngiSOejp60O2BeHFTR0SNwD%2FtK%2BB2vsVWe60G13BE9Bq8bKi2Qznwb3vozIL9%2FL8JLpC5IlDDrw8RMqyV1bMaFp5&X-Amz-Signature=e139104c2a6cf2be5d87774a5000e8d793da26398a126033eb802675e5cb6d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3U7FWS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCwZN8bhjfPAaG77hePPjgfsDhrAfRcS%2Bc0pKM9DPyrSwIgeCFvXZt%2BjEghGeiJq5jErlBYEqKYzpS5kDWTIJPB3g8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDES5sqr6sV4hRzAa%2FSrcA1RLqF1aL%2BLck%2F3sGb7Zju5YYh5F82rvSj%2BSnWwvpPMUW52vT%2FjYlsglxC7amO7LGU2jkhs1ynFT3VCsxZMjHc6ED%2F9htyCC5EnMGYuOFPQKtHFtbun7Z7upXlzPxzozZ8WNZwD4xZnT34y7MbavKIxp0RLfcZsR8CGeFArc%2FfUkUeOZlJBZJj6KewEgUb8nhDp7e2VRjW3aUPvGcEif1GRH5PauWMcpSgyd3bpgENGT5oPnTY5ntUb3W%2F0OGV2uodlm6QrgBH2Y%2BQUh85JjynLgqjRgHyM4FnLOqFZUUW50C7EOnIUbeGPSuLYsXgmWMQhKbOwQDuAv9lalc%2BiAFDK0jsxVgnAgic1Fyh9uztketsOvxKTGGk4pPnt2JQvTsnMXQExcqtPLF%2B31CxOvDfciqSFjCX2UuZFzFaof1wr75%2FQ%2FToHpiitOhiPdhDoyJyCZESO8ou%2BWjUSjKY8EZ6810zZZgfEYwB06JAgWd7GLTpX5%2FHUc2fXhMFXcycx1PbRhy6vWIAYP8iL911bkEHlu1KNdeULTSnRCg3g85w352H7zKneX99tfowix7DIjJ78j0J409yxZh70MJel6y99oiiakvOgC%2F5FYKlvWI8RfHZ7R0HN5puYw0IbzMJW8kcQGOqUB9xVIbniFD7MFmU4xrVRQpG%2Fj3NuWdfSoAe%2BWSRDuSIAqOhBuLCz1Lz%2FuYMeOQRuH9Q5xzATt7mvFmVjEe3ZBKqH4DSilCi8y5A8erNeC7hwV3DSMDrx2M0BLfyBpVIvDvp4fngiSOejp60O2BeHFTR0SNwD%2FtK%2BB2vsVWe60G13BE9Bq8bKi2Qznwb3vozIL9%2FL8JLpC5IlDDrw8RMqyV1bMaFp5&X-Amz-Signature=46fc173f649b7864b9113b11b24140df614a3ee5308528ee61c22f5cba1f1cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3U7FWS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCwZN8bhjfPAaG77hePPjgfsDhrAfRcS%2Bc0pKM9DPyrSwIgeCFvXZt%2BjEghGeiJq5jErlBYEqKYzpS5kDWTIJPB3g8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDES5sqr6sV4hRzAa%2FSrcA1RLqF1aL%2BLck%2F3sGb7Zju5YYh5F82rvSj%2BSnWwvpPMUW52vT%2FjYlsglxC7amO7LGU2jkhs1ynFT3VCsxZMjHc6ED%2F9htyCC5EnMGYuOFPQKtHFtbun7Z7upXlzPxzozZ8WNZwD4xZnT34y7MbavKIxp0RLfcZsR8CGeFArc%2FfUkUeOZlJBZJj6KewEgUb8nhDp7e2VRjW3aUPvGcEif1GRH5PauWMcpSgyd3bpgENGT5oPnTY5ntUb3W%2F0OGV2uodlm6QrgBH2Y%2BQUh85JjynLgqjRgHyM4FnLOqFZUUW50C7EOnIUbeGPSuLYsXgmWMQhKbOwQDuAv9lalc%2BiAFDK0jsxVgnAgic1Fyh9uztketsOvxKTGGk4pPnt2JQvTsnMXQExcqtPLF%2B31CxOvDfciqSFjCX2UuZFzFaof1wr75%2FQ%2FToHpiitOhiPdhDoyJyCZESO8ou%2BWjUSjKY8EZ6810zZZgfEYwB06JAgWd7GLTpX5%2FHUc2fXhMFXcycx1PbRhy6vWIAYP8iL911bkEHlu1KNdeULTSnRCg3g85w352H7zKneX99tfowix7DIjJ78j0J409yxZh70MJel6y99oiiakvOgC%2F5FYKlvWI8RfHZ7R0HN5puYw0IbzMJW8kcQGOqUB9xVIbniFD7MFmU4xrVRQpG%2Fj3NuWdfSoAe%2BWSRDuSIAqOhBuLCz1Lz%2FuYMeOQRuH9Q5xzATt7mvFmVjEe3ZBKqH4DSilCi8y5A8erNeC7hwV3DSMDrx2M0BLfyBpVIvDvp4fngiSOejp60O2BeHFTR0SNwD%2FtK%2BB2vsVWe60G13BE9Bq8bKi2Qznwb3vozIL9%2FL8JLpC5IlDDrw8RMqyV1bMaFp5&X-Amz-Signature=184c7114f96565b71cca11fe7113242811cf1d52aff141c432a7eaa5b150420c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
