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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JDXFOV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICo4Yqs2bhtwUjodzrWS0U9lNby%2F3d39hIz%2B0ZAvtYdNAiAvTQbO2xq6OW5tnn%2B90YPUqZw2WBkFhagrqYSAP1m4uyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMGToS7ujjZywRUK%2BnKtwDgYB5%2B53Zrm%2Bh2Ug7900QABiEi1B7lb10HeD%2BbBS3f%2Bw8l2EhDCT0jUGEmz9L0K6g8SHqmss74PH%2Fn%2FNE96JfzjeyamCpfoB3az%2BZUjKtAPLvu870xu0xq1mBYMwgoPcal38mBMqkSX%2FoLSyezjdS0jkePxTmLqO4V6Wap0KB29zP9GDVeKhALey6pXyQytdC3PsABapQGOtO3qGrwfgo8mFsvGBFVdCJ%2BdoysF8xBn4UY050KkxCT4nIsb9EBkypwiRiXobCdPTTYMpK7Z7LL3xfDUbbgQncKoxik0sDSY1aexv5rA2qIbB5bniOZWpr9riTLGPtWocHB6Db9ODO4JISOiRR5gC4Y9WA61JKZ5hnzAA55ihznx4xaH%2Bnp%2FOIUJm0%2Fp2NvcnBZY7Nof9SaZLwzfq5GaF5l9K%2FlI9lYrLbDnmylEGjYgl2PttiRtYOb7XYxdMACpqwlfljTRo%2FDzitPuY%2FmD3t1hgHtPSfiOAY5aenEU9GFvCfnh1pBrfIYcun3vWzwaIW3tJxtyEeD3p3yPFxGd81emNMS2mu5mHsUfC48cbY7UpWkuijxo7A%2BZB6bKidsCvxQsWWGrTA6pqYf6s3FNvLefkHz%2FbhLt0ydPJFv8s1yKCFI9cwyv%2FMwQY6pgGma4FCnnSoeXAO5z1mBG8m%2BRmo%2F95FJPjMriVTW%2BiluhbhklqAI0DU22uoiSn0vi18Ez3y2vTbE4oPt8sg4DZnCZ78trNDlshEKB0dlg4qS%2FH1IoW4cVwFsciSt%2BGKFoGZJ%2FN8GvoyQ1e4SmGHXYWu4NZROa4tD%2FHIqbQvKk9jtpz06ZTUez44FQf5kRVo%2BsRq%2BU3%2BWkvrOkBhr3xXC3unbfzJExpx&X-Amz-Signature=121edd1a1f079a32c1c188b845ea1e9c3b93c3d059a920d924fd77aea1adf70e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JDXFOV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICo4Yqs2bhtwUjodzrWS0U9lNby%2F3d39hIz%2B0ZAvtYdNAiAvTQbO2xq6OW5tnn%2B90YPUqZw2WBkFhagrqYSAP1m4uyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMGToS7ujjZywRUK%2BnKtwDgYB5%2B53Zrm%2Bh2Ug7900QABiEi1B7lb10HeD%2BbBS3f%2Bw8l2EhDCT0jUGEmz9L0K6g8SHqmss74PH%2Fn%2FNE96JfzjeyamCpfoB3az%2BZUjKtAPLvu870xu0xq1mBYMwgoPcal38mBMqkSX%2FoLSyezjdS0jkePxTmLqO4V6Wap0KB29zP9GDVeKhALey6pXyQytdC3PsABapQGOtO3qGrwfgo8mFsvGBFVdCJ%2BdoysF8xBn4UY050KkxCT4nIsb9EBkypwiRiXobCdPTTYMpK7Z7LL3xfDUbbgQncKoxik0sDSY1aexv5rA2qIbB5bniOZWpr9riTLGPtWocHB6Db9ODO4JISOiRR5gC4Y9WA61JKZ5hnzAA55ihznx4xaH%2Bnp%2FOIUJm0%2Fp2NvcnBZY7Nof9SaZLwzfq5GaF5l9K%2FlI9lYrLbDnmylEGjYgl2PttiRtYOb7XYxdMACpqwlfljTRo%2FDzitPuY%2FmD3t1hgHtPSfiOAY5aenEU9GFvCfnh1pBrfIYcun3vWzwaIW3tJxtyEeD3p3yPFxGd81emNMS2mu5mHsUfC48cbY7UpWkuijxo7A%2BZB6bKidsCvxQsWWGrTA6pqYf6s3FNvLefkHz%2FbhLt0ydPJFv8s1yKCFI9cwyv%2FMwQY6pgGma4FCnnSoeXAO5z1mBG8m%2BRmo%2F95FJPjMriVTW%2BiluhbhklqAI0DU22uoiSn0vi18Ez3y2vTbE4oPt8sg4DZnCZ78trNDlshEKB0dlg4qS%2FH1IoW4cVwFsciSt%2BGKFoGZJ%2FN8GvoyQ1e4SmGHXYWu4NZROa4tD%2FHIqbQvKk9jtpz06ZTUez44FQf5kRVo%2BsRq%2BU3%2BWkvrOkBhr3xXC3unbfzJExpx&X-Amz-Signature=a6c6400ccefa3acf68662228adaf2ad52ed110b1b3cda7585a652e7c1f1c510c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
