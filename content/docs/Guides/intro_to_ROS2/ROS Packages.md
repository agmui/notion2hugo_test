---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPD4DTS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDf%2FuXr9tjftbb0RgPxEbVcs1KsFk%2F7hPf68vHws9RkEAIgOHSSFYEaoQcv%2Fkf5AMeAXSuZIz2G7IHQUegKBvahwi0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDNtC8R4Y4s%2BuXq%2BPCrcA5P%2BVH8LzdrDIAHJWUwBYaQOUHaa9F6ccs3rGgbFamGuR%2B6SXjDEDrCldbdXIVlRr25lV5Gwr63sKcuH6Si4Giv4ZXBxaivzcIQ1E2cs8x09EQyrU8SKWxWBdxBZu4aE5j7or9L%2FDT0tqaWX%2BYosUyvqAtE%2FubYT8gBQqaCYoB6ajogGjcCCOlUMOOgXv5nWdZyVvPKaxMS2bKVsP7Jvo%2Bt4PYY97wuxFrGLUUWRQrAObCKjkKdtHqLVr9m1SQtHNTc7R%2FMtGgXgxdKI9ksxUz29cnP4oH8G4huVaaMdJi4nVMw6bIhpzdhF1mAs7edQkpF2krvqGQDz2j58hILzVBz7Oj%2FskAHuqtSRV2iTd6tTy556WSfj3cxHk0l4qYprHQOtphBUp58gAv3P%2BXoJdmpJBInFIiNoBLModc0rX%2BN3FRYuPCUe%2FTCxtYe8c7b%2FW5GBLP5%2FcQiurLtME83tynZy3LZMgrTwvhZKRhYbf8Za0XNxOpCQgeAYm0%2FraDmS1Y4rZ%2BhoX25vjVGFRS0ELLDQqvyY7CV9EBtCwPifqmQDTqJaoHjbM8xUzAwR4%2BVdQdjgE9u5xip4BpjwsYqhK2RWNjo6oj1ImfbrwqVRHG7o1Qiw%2FKuqpTKmEPIuMPii%2BsQGOqUBw6fwjfd8mnMgYb5WxCGYos3oAWusIx2ZksDUGaqjwwXvyS%2F9Pzf3zwl2vCDGCSYRzso4XFnLMZO9Lmqjbhrs8mXGO%2B7XOY7Lhr7aXIrN%2B5gik0%2FGhgwdlyYgowtIRUDW%2BbpOZbUe%2FJVObk4gRkZesHC4ipEn10DFxMfBvn3zpCMN%2FuJv0tPiY%2BdrLw7vw8cYiKyI9KKaLQ42gHjFpI5U003CFBG9&X-Amz-Signature=3fc640d719c7262ceca2535d7ee58aa99d7f5a963e1834cfda193a89d6284346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>
      <summary>package types</summary>
      packages can be either `C++` or python.
  </details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPD4DTS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDf%2FuXr9tjftbb0RgPxEbVcs1KsFk%2F7hPf68vHws9RkEAIgOHSSFYEaoQcv%2Fkf5AMeAXSuZIz2G7IHQUegKBvahwi0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDNtC8R4Y4s%2BuXq%2BPCrcA5P%2BVH8LzdrDIAHJWUwBYaQOUHaa9F6ccs3rGgbFamGuR%2B6SXjDEDrCldbdXIVlRr25lV5Gwr63sKcuH6Si4Giv4ZXBxaivzcIQ1E2cs8x09EQyrU8SKWxWBdxBZu4aE5j7or9L%2FDT0tqaWX%2BYosUyvqAtE%2FubYT8gBQqaCYoB6ajogGjcCCOlUMOOgXv5nWdZyVvPKaxMS2bKVsP7Jvo%2Bt4PYY97wuxFrGLUUWRQrAObCKjkKdtHqLVr9m1SQtHNTc7R%2FMtGgXgxdKI9ksxUz29cnP4oH8G4huVaaMdJi4nVMw6bIhpzdhF1mAs7edQkpF2krvqGQDz2j58hILzVBz7Oj%2FskAHuqtSRV2iTd6tTy556WSfj3cxHk0l4qYprHQOtphBUp58gAv3P%2BXoJdmpJBInFIiNoBLModc0rX%2BN3FRYuPCUe%2FTCxtYe8c7b%2FW5GBLP5%2FcQiurLtME83tynZy3LZMgrTwvhZKRhYbf8Za0XNxOpCQgeAYm0%2FraDmS1Y4rZ%2BhoX25vjVGFRS0ELLDQqvyY7CV9EBtCwPifqmQDTqJaoHjbM8xUzAwR4%2BVdQdjgE9u5xip4BpjwsYqhK2RWNjo6oj1ImfbrwqVRHG7o1Qiw%2FKuqpTKmEPIuMPii%2BsQGOqUBw6fwjfd8mnMgYb5WxCGYos3oAWusIx2ZksDUGaqjwwXvyS%2F9Pzf3zwl2vCDGCSYRzso4XFnLMZO9Lmqjbhrs8mXGO%2B7XOY7Lhr7aXIrN%2B5gik0%2FGhgwdlyYgowtIRUDW%2BbpOZbUe%2FJVObk4gRkZesHC4ipEn10DFxMfBvn3zpCMN%2FuJv0tPiY%2BdrLw7vw8cYiKyI9KKaLQ42gHjFpI5U003CFBG9&X-Amz-Signature=34616cc8316d3595756b77255d7bc6d00251e70384ed367a85aa10bb254e9d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPD4DTS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDf%2FuXr9tjftbb0RgPxEbVcs1KsFk%2F7hPf68vHws9RkEAIgOHSSFYEaoQcv%2Fkf5AMeAXSuZIz2G7IHQUegKBvahwi0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDNtC8R4Y4s%2BuXq%2BPCrcA5P%2BVH8LzdrDIAHJWUwBYaQOUHaa9F6ccs3rGgbFamGuR%2B6SXjDEDrCldbdXIVlRr25lV5Gwr63sKcuH6Si4Giv4ZXBxaivzcIQ1E2cs8x09EQyrU8SKWxWBdxBZu4aE5j7or9L%2FDT0tqaWX%2BYosUyvqAtE%2FubYT8gBQqaCYoB6ajogGjcCCOlUMOOgXv5nWdZyVvPKaxMS2bKVsP7Jvo%2Bt4PYY97wuxFrGLUUWRQrAObCKjkKdtHqLVr9m1SQtHNTc7R%2FMtGgXgxdKI9ksxUz29cnP4oH8G4huVaaMdJi4nVMw6bIhpzdhF1mAs7edQkpF2krvqGQDz2j58hILzVBz7Oj%2FskAHuqtSRV2iTd6tTy556WSfj3cxHk0l4qYprHQOtphBUp58gAv3P%2BXoJdmpJBInFIiNoBLModc0rX%2BN3FRYuPCUe%2FTCxtYe8c7b%2FW5GBLP5%2FcQiurLtME83tynZy3LZMgrTwvhZKRhYbf8Za0XNxOpCQgeAYm0%2FraDmS1Y4rZ%2BhoX25vjVGFRS0ELLDQqvyY7CV9EBtCwPifqmQDTqJaoHjbM8xUzAwR4%2BVdQdjgE9u5xip4BpjwsYqhK2RWNjo6oj1ImfbrwqVRHG7o1Qiw%2FKuqpTKmEPIuMPii%2BsQGOqUBw6fwjfd8mnMgYb5WxCGYos3oAWusIx2ZksDUGaqjwwXvyS%2F9Pzf3zwl2vCDGCSYRzso4XFnLMZO9Lmqjbhrs8mXGO%2B7XOY7Lhr7aXIrN%2B5gik0%2FGhgwdlyYgowtIRUDW%2BbpOZbUe%2FJVObk4gRkZesHC4ipEn10DFxMfBvn3zpCMN%2FuJv0tPiY%2BdrLw7vw8cYiKyI9KKaLQ42gHjFpI5U003CFBG9&X-Amz-Signature=52eac37ab88c5fb37f96320bfcb7b91f15dc1bc5af2dd0e30d80948e5f5151ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPD4DTS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDf%2FuXr9tjftbb0RgPxEbVcs1KsFk%2F7hPf68vHws9RkEAIgOHSSFYEaoQcv%2Fkf5AMeAXSuZIz2G7IHQUegKBvahwi0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDNtC8R4Y4s%2BuXq%2BPCrcA5P%2BVH8LzdrDIAHJWUwBYaQOUHaa9F6ccs3rGgbFamGuR%2B6SXjDEDrCldbdXIVlRr25lV5Gwr63sKcuH6Si4Giv4ZXBxaivzcIQ1E2cs8x09EQyrU8SKWxWBdxBZu4aE5j7or9L%2FDT0tqaWX%2BYosUyvqAtE%2FubYT8gBQqaCYoB6ajogGjcCCOlUMOOgXv5nWdZyVvPKaxMS2bKVsP7Jvo%2Bt4PYY97wuxFrGLUUWRQrAObCKjkKdtHqLVr9m1SQtHNTc7R%2FMtGgXgxdKI9ksxUz29cnP4oH8G4huVaaMdJi4nVMw6bIhpzdhF1mAs7edQkpF2krvqGQDz2j58hILzVBz7Oj%2FskAHuqtSRV2iTd6tTy556WSfj3cxHk0l4qYprHQOtphBUp58gAv3P%2BXoJdmpJBInFIiNoBLModc0rX%2BN3FRYuPCUe%2FTCxtYe8c7b%2FW5GBLP5%2FcQiurLtME83tynZy3LZMgrTwvhZKRhYbf8Za0XNxOpCQgeAYm0%2FraDmS1Y4rZ%2BhoX25vjVGFRS0ELLDQqvyY7CV9EBtCwPifqmQDTqJaoHjbM8xUzAwR4%2BVdQdjgE9u5xip4BpjwsYqhK2RWNjo6oj1ImfbrwqVRHG7o1Qiw%2FKuqpTKmEPIuMPii%2BsQGOqUBw6fwjfd8mnMgYb5WxCGYos3oAWusIx2ZksDUGaqjwwXvyS%2F9Pzf3zwl2vCDGCSYRzso4XFnLMZO9Lmqjbhrs8mXGO%2B7XOY7Lhr7aXIrN%2B5gik0%2FGhgwdlyYgowtIRUDW%2BbpOZbUe%2FJVObk4gRkZesHC4ipEn10DFxMfBvn3zpCMN%2FuJv0tPiY%2BdrLw7vw8cYiKyI9KKaLQ42gHjFpI5U003CFBG9&X-Amz-Signature=480583b883979f41fc325b27f2cb0df4dde878d5a670aeb1484fc402c5426085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPD4DTS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDf%2FuXr9tjftbb0RgPxEbVcs1KsFk%2F7hPf68vHws9RkEAIgOHSSFYEaoQcv%2Fkf5AMeAXSuZIz2G7IHQUegKBvahwi0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDNtC8R4Y4s%2BuXq%2BPCrcA5P%2BVH8LzdrDIAHJWUwBYaQOUHaa9F6ccs3rGgbFamGuR%2B6SXjDEDrCldbdXIVlRr25lV5Gwr63sKcuH6Si4Giv4ZXBxaivzcIQ1E2cs8x09EQyrU8SKWxWBdxBZu4aE5j7or9L%2FDT0tqaWX%2BYosUyvqAtE%2FubYT8gBQqaCYoB6ajogGjcCCOlUMOOgXv5nWdZyVvPKaxMS2bKVsP7Jvo%2Bt4PYY97wuxFrGLUUWRQrAObCKjkKdtHqLVr9m1SQtHNTc7R%2FMtGgXgxdKI9ksxUz29cnP4oH8G4huVaaMdJi4nVMw6bIhpzdhF1mAs7edQkpF2krvqGQDz2j58hILzVBz7Oj%2FskAHuqtSRV2iTd6tTy556WSfj3cxHk0l4qYprHQOtphBUp58gAv3P%2BXoJdmpJBInFIiNoBLModc0rX%2BN3FRYuPCUe%2FTCxtYe8c7b%2FW5GBLP5%2FcQiurLtME83tynZy3LZMgrTwvhZKRhYbf8Za0XNxOpCQgeAYm0%2FraDmS1Y4rZ%2BhoX25vjVGFRS0ELLDQqvyY7CV9EBtCwPifqmQDTqJaoHjbM8xUzAwR4%2BVdQdjgE9u5xip4BpjwsYqhK2RWNjo6oj1ImfbrwqVRHG7o1Qiw%2FKuqpTKmEPIuMPii%2BsQGOqUBw6fwjfd8mnMgYb5WxCGYos3oAWusIx2ZksDUGaqjwwXvyS%2F9Pzf3zwl2vCDGCSYRzso4XFnLMZO9Lmqjbhrs8mXGO%2B7XOY7Lhr7aXIrN%2B5gik0%2FGhgwdlyYgowtIRUDW%2BbpOZbUe%2FJVObk4gRkZesHC4ipEn10DFxMfBvn3zpCMN%2FuJv0tPiY%2BdrLw7vw8cYiKyI9KKaLQ42gHjFpI5U003CFBG9&X-Amz-Signature=c3bd094c0d0740d8bf494864d903fa648a8fd48bc5d0e06e830df4633283cbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPD4DTS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDf%2FuXr9tjftbb0RgPxEbVcs1KsFk%2F7hPf68vHws9RkEAIgOHSSFYEaoQcv%2Fkf5AMeAXSuZIz2G7IHQUegKBvahwi0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDNtC8R4Y4s%2BuXq%2BPCrcA5P%2BVH8LzdrDIAHJWUwBYaQOUHaa9F6ccs3rGgbFamGuR%2B6SXjDEDrCldbdXIVlRr25lV5Gwr63sKcuH6Si4Giv4ZXBxaivzcIQ1E2cs8x09EQyrU8SKWxWBdxBZu4aE5j7or9L%2FDT0tqaWX%2BYosUyvqAtE%2FubYT8gBQqaCYoB6ajogGjcCCOlUMOOgXv5nWdZyVvPKaxMS2bKVsP7Jvo%2Bt4PYY97wuxFrGLUUWRQrAObCKjkKdtHqLVr9m1SQtHNTc7R%2FMtGgXgxdKI9ksxUz29cnP4oH8G4huVaaMdJi4nVMw6bIhpzdhF1mAs7edQkpF2krvqGQDz2j58hILzVBz7Oj%2FskAHuqtSRV2iTd6tTy556WSfj3cxHk0l4qYprHQOtphBUp58gAv3P%2BXoJdmpJBInFIiNoBLModc0rX%2BN3FRYuPCUe%2FTCxtYe8c7b%2FW5GBLP5%2FcQiurLtME83tynZy3LZMgrTwvhZKRhYbf8Za0XNxOpCQgeAYm0%2FraDmS1Y4rZ%2BhoX25vjVGFRS0ELLDQqvyY7CV9EBtCwPifqmQDTqJaoHjbM8xUzAwR4%2BVdQdjgE9u5xip4BpjwsYqhK2RWNjo6oj1ImfbrwqVRHG7o1Qiw%2FKuqpTKmEPIuMPii%2BsQGOqUBw6fwjfd8mnMgYb5WxCGYos3oAWusIx2ZksDUGaqjwwXvyS%2F9Pzf3zwl2vCDGCSYRzso4XFnLMZO9Lmqjbhrs8mXGO%2B7XOY7Lhr7aXIrN%2B5gik0%2FGhgwdlyYgowtIRUDW%2BbpOZbUe%2FJVObk4gRkZesHC4ipEn10DFxMfBvn3zpCMN%2FuJv0tPiY%2BdrLw7vw8cYiKyI9KKaLQ42gHjFpI5U003CFBG9&X-Amz-Signature=4a7a283bb23fd598fe274902ec87170740ed0e18670e835611ad05d09c40c077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPD4DTS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDf%2FuXr9tjftbb0RgPxEbVcs1KsFk%2F7hPf68vHws9RkEAIgOHSSFYEaoQcv%2Fkf5AMeAXSuZIz2G7IHQUegKBvahwi0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDNtC8R4Y4s%2BuXq%2BPCrcA5P%2BVH8LzdrDIAHJWUwBYaQOUHaa9F6ccs3rGgbFamGuR%2B6SXjDEDrCldbdXIVlRr25lV5Gwr63sKcuH6Si4Giv4ZXBxaivzcIQ1E2cs8x09EQyrU8SKWxWBdxBZu4aE5j7or9L%2FDT0tqaWX%2BYosUyvqAtE%2FubYT8gBQqaCYoB6ajogGjcCCOlUMOOgXv5nWdZyVvPKaxMS2bKVsP7Jvo%2Bt4PYY97wuxFrGLUUWRQrAObCKjkKdtHqLVr9m1SQtHNTc7R%2FMtGgXgxdKI9ksxUz29cnP4oH8G4huVaaMdJi4nVMw6bIhpzdhF1mAs7edQkpF2krvqGQDz2j58hILzVBz7Oj%2FskAHuqtSRV2iTd6tTy556WSfj3cxHk0l4qYprHQOtphBUp58gAv3P%2BXoJdmpJBInFIiNoBLModc0rX%2BN3FRYuPCUe%2FTCxtYe8c7b%2FW5GBLP5%2FcQiurLtME83tynZy3LZMgrTwvhZKRhYbf8Za0XNxOpCQgeAYm0%2FraDmS1Y4rZ%2BhoX25vjVGFRS0ELLDQqvyY7CV9EBtCwPifqmQDTqJaoHjbM8xUzAwR4%2BVdQdjgE9u5xip4BpjwsYqhK2RWNjo6oj1ImfbrwqVRHG7o1Qiw%2FKuqpTKmEPIuMPii%2BsQGOqUBw6fwjfd8mnMgYb5WxCGYos3oAWusIx2ZksDUGaqjwwXvyS%2F9Pzf3zwl2vCDGCSYRzso4XFnLMZO9Lmqjbhrs8mXGO%2B7XOY7Lhr7aXIrN%2B5gik0%2FGhgwdlyYgowtIRUDW%2BbpOZbUe%2FJVObk4gRkZesHC4ipEn10DFxMfBvn3zpCMN%2FuJv0tPiY%2BdrLw7vw8cYiKyI9KKaLQ42gHjFpI5U003CFBG9&X-Amz-Signature=cad1dacc61b6b3d0b19463d32fc2dc010326eece3c8b893662de63896f0c645c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
