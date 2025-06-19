---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SXLBBB3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MWqTF5UAGs3B3YpRS6le75ZGammUwi6TqezCbswcjwIhAKfyeDt0v8NWGNv6v7voJO4bV3Bh7bDFfRBtj4V%2FAP1jKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjxuelPRDPt%2F08HGAq3AOzk8F3XnO7HAmmVpTZe%2BUX4riizsE%2FDyxrRWb4HgQRD52nAARDem2yn2u%2FHVcCjyhTLEjQ%2Bg%2F6oIkE%2FursmIOc6gkpLQVnapQh0lmKR%2F6YmdE5vThvRXuRxEdGfGFAJ1qVrJg%2F3UWE1R5jiQjcehTiZrrncHNEY288NCpOg979V9OxMNVoEfR%2FwEjqQCYuaTsEDrDQEtEcJgxnzFeiopZBgbZFfnJgje7P5pj7RtBPBi1rZ29TCspmLTPGaPYm7cJZhlYQjxPDObR3cJc7ls3zGDkt1Lm9S3L9Y5onEqnXOQSjKNT9%2FxNFt60UE7cQNLC%2BWIAa5qprEZ9YV2ou2yG2iTHLoUfqq%2Bo71RdiKvQ8Irv%2BdRbFRvNAYvc%2FQyeq79a9us0iVNgwwuP8W%2FYUKTW6RzYp4XQoFtS0G5UIK32gNMYkLUN7ZyEU4q6EgJCfxGOMWq6Sif8rTGNtFDBLmHKU5Un6KFUdtj5viyFjU1%2B9WDgj85Z9a4lk6mb2dDOoCO7XWm%2F9pLlfkScqK%2FwbM3H6y9bWO83LsVXOkrh05kcAkzkZswT44TrfSrCF4Jqh%2BvrQY3k1xcXDkIts9VeBkc5r%2FtbVDKSauBrFU6nTX5rb06q%2B8AFtqNG2c8110TCfotLCBjqkARnRLUbYrikS42%2B9WgRwYAbIne%2BeazuYUr1mq5Y9tVktZqB9a0VcwKJ8bACuWjpPVs%2Bs5i3cH7nPPMH4J5uLNLiCWLrdJzkODOoKdcp8Y1TZZn7nLahISs%2FGIBOBmaFsm2upypD%2FDarVQ1W7rikIXKN6tXkblPd3h5%2B7SV6sSy%2BIjiDt0hHNM9ZISmAvqTExFgCsDQ%2FzJkjQlvCFoVNa8pvifsha&X-Amz-Signature=475746bdbf0b47ab9a067ad99309003d1c9c68e0a65fdfc2793f70924f329524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SXLBBB3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8MWqTF5UAGs3B3YpRS6le75ZGammUwi6TqezCbswcjwIhAKfyeDt0v8NWGNv6v7voJO4bV3Bh7bDFfRBtj4V%2FAP1jKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjxuelPRDPt%2F08HGAq3AOzk8F3XnO7HAmmVpTZe%2BUX4riizsE%2FDyxrRWb4HgQRD52nAARDem2yn2u%2FHVcCjyhTLEjQ%2Bg%2F6oIkE%2FursmIOc6gkpLQVnapQh0lmKR%2F6YmdE5vThvRXuRxEdGfGFAJ1qVrJg%2F3UWE1R5jiQjcehTiZrrncHNEY288NCpOg979V9OxMNVoEfR%2FwEjqQCYuaTsEDrDQEtEcJgxnzFeiopZBgbZFfnJgje7P5pj7RtBPBi1rZ29TCspmLTPGaPYm7cJZhlYQjxPDObR3cJc7ls3zGDkt1Lm9S3L9Y5onEqnXOQSjKNT9%2FxNFt60UE7cQNLC%2BWIAa5qprEZ9YV2ou2yG2iTHLoUfqq%2Bo71RdiKvQ8Irv%2BdRbFRvNAYvc%2FQyeq79a9us0iVNgwwuP8W%2FYUKTW6RzYp4XQoFtS0G5UIK32gNMYkLUN7ZyEU4q6EgJCfxGOMWq6Sif8rTGNtFDBLmHKU5Un6KFUdtj5viyFjU1%2B9WDgj85Z9a4lk6mb2dDOoCO7XWm%2F9pLlfkScqK%2FwbM3H6y9bWO83LsVXOkrh05kcAkzkZswT44TrfSrCF4Jqh%2BvrQY3k1xcXDkIts9VeBkc5r%2FtbVDKSauBrFU6nTX5rb06q%2B8AFtqNG2c8110TCfotLCBjqkARnRLUbYrikS42%2B9WgRwYAbIne%2BeazuYUr1mq5Y9tVktZqB9a0VcwKJ8bACuWjpPVs%2Bs5i3cH7nPPMH4J5uLNLiCWLrdJzkODOoKdcp8Y1TZZn7nLahISs%2FGIBOBmaFsm2upypD%2FDarVQ1W7rikIXKN6tXkblPd3h5%2B7SV6sSy%2BIjiDt0hHNM9ZISmAvqTExFgCsDQ%2FzJkjQlvCFoVNa8pvifsha&X-Amz-Signature=854ee4328b94961aa65025ac85296d282ddb8633d35ec5c9cdd96ca53220d2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
