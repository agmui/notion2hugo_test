---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX55YUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyyyK5%2FCyWOqkcWW%2Fw2Wztc80O7I%2BJCgG8ZolKQta2jAiB1rbW96lkrG2mgx8W1VpQkjKWFvKpLXPHVb%2FtMxLt9%2ByqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXmQWJFUdILEc5NuuKtwDiNoj1SZuGpisJ%2F%2BcMVkTZaBGsdZ99LL1v4K5nK%2Bo2zGXw9tor1UKWUMZqZPnFAy4biLIxAdQqGQjMb06yA6CC32RQOElT5N9TzAkSEG5MTT8N6kTZ1BTLtkodHTOw9ThEWW3pI%2FtvdCyeclWJ9w9%2BalVZcdD0JcSqqRUNRL0XpDvA34Wam9Sil22yjxxIhL9lfTZLFX7P9mspMvnx2FdTW6W2blCy60vCz7FUYcF%2Bi3xMMd5iWya0wxr%2Fw1YE7EGnzWeYyPo9CguRdFdGeWdLHlbVkDUIu0%2FVrIOIk0DycaU6ZPEN%2BG5yGXzOO99G56l1%2BNz8EsRdv8LEHkihB21TsHrTxzVT8dDFSTPrCVH99nIFOmjexobaMwzvjuEj9dJYs2OmIjvS3z%2Bs%2FjxloD00Whrr6ISSmZAOhYJs3I9KzQTqvXFGx%2Bh7kuC%2Bvk6t2Ohs4%2B1ff9Z3UyW%2BxQ4vOjpmsWDUQ94cj5tbSozDJccLHjs0%2FQnRw1latrXtrlsU6tVHmRsWIW1Qp%2BHVXEGb6hLV8f%2BYuJhdFEzmgUQLHcfKullH0uaLf5zQM%2FoHSjLKYq1HOgxM1P9EWiR58O%2BDlNecAREISX%2BWlhW6od5FsfLmjrRAUkjV6%2BYRNPFFaAwzbLfxAY6pgFkIkdVMvo7kh31u5QgNO%2BzwZvmhvWhoPT8UIeAKkexWfpIjFYkrIWqUNpSw0nr6lHIc8kQ3HqMeNdo1WTblD3iPzjhp6Zz8z22bzpVfs2c23Smg873d404KzRK0J0ZylUEGPIK%2F9nsrnHqYBzlTHmrQNVJyw5%2FIsmhCwKCmctFZBnox7SnlMGB83KMY7NHJYq0Pamoz6YNLGl7OFJI2r1fKbfCUuoS&X-Amz-Signature=62e412f060916cc6dfc1b5eb152ef3bebf32ce7a227a408d5d5c12e6edc141f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

the intern file structure is different for each but for this guide we will stick to creating python packages

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX55YUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyyyK5%2FCyWOqkcWW%2Fw2Wztc80O7I%2BJCgG8ZolKQta2jAiB1rbW96lkrG2mgx8W1VpQkjKWFvKpLXPHVb%2FtMxLt9%2ByqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXmQWJFUdILEc5NuuKtwDiNoj1SZuGpisJ%2F%2BcMVkTZaBGsdZ99LL1v4K5nK%2Bo2zGXw9tor1UKWUMZqZPnFAy4biLIxAdQqGQjMb06yA6CC32RQOElT5N9TzAkSEG5MTT8N6kTZ1BTLtkodHTOw9ThEWW3pI%2FtvdCyeclWJ9w9%2BalVZcdD0JcSqqRUNRL0XpDvA34Wam9Sil22yjxxIhL9lfTZLFX7P9mspMvnx2FdTW6W2blCy60vCz7FUYcF%2Bi3xMMd5iWya0wxr%2Fw1YE7EGnzWeYyPo9CguRdFdGeWdLHlbVkDUIu0%2FVrIOIk0DycaU6ZPEN%2BG5yGXzOO99G56l1%2BNz8EsRdv8LEHkihB21TsHrTxzVT8dDFSTPrCVH99nIFOmjexobaMwzvjuEj9dJYs2OmIjvS3z%2Bs%2FjxloD00Whrr6ISSmZAOhYJs3I9KzQTqvXFGx%2Bh7kuC%2Bvk6t2Ohs4%2B1ff9Z3UyW%2BxQ4vOjpmsWDUQ94cj5tbSozDJccLHjs0%2FQnRw1latrXtrlsU6tVHmRsWIW1Qp%2BHVXEGb6hLV8f%2BYuJhdFEzmgUQLHcfKullH0uaLf5zQM%2FoHSjLKYq1HOgxM1P9EWiR58O%2BDlNecAREISX%2BWlhW6od5FsfLmjrRAUkjV6%2BYRNPFFaAwzbLfxAY6pgFkIkdVMvo7kh31u5QgNO%2BzwZvmhvWhoPT8UIeAKkexWfpIjFYkrIWqUNpSw0nr6lHIc8kQ3HqMeNdo1WTblD3iPzjhp6Zz8z22bzpVfs2c23Smg873d404KzRK0J0ZylUEGPIK%2F9nsrnHqYBzlTHmrQNVJyw5%2FIsmhCwKCmctFZBnox7SnlMGB83KMY7NHJYq0Pamoz6YNLGl7OFJI2r1fKbfCUuoS&X-Amz-Signature=c651ea9a9c151225d358f899472b8e5aebfabe018586a8220d76cc16bb8c0c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX55YUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyyyK5%2FCyWOqkcWW%2Fw2Wztc80O7I%2BJCgG8ZolKQta2jAiB1rbW96lkrG2mgx8W1VpQkjKWFvKpLXPHVb%2FtMxLt9%2ByqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXmQWJFUdILEc5NuuKtwDiNoj1SZuGpisJ%2F%2BcMVkTZaBGsdZ99LL1v4K5nK%2Bo2zGXw9tor1UKWUMZqZPnFAy4biLIxAdQqGQjMb06yA6CC32RQOElT5N9TzAkSEG5MTT8N6kTZ1BTLtkodHTOw9ThEWW3pI%2FtvdCyeclWJ9w9%2BalVZcdD0JcSqqRUNRL0XpDvA34Wam9Sil22yjxxIhL9lfTZLFX7P9mspMvnx2FdTW6W2blCy60vCz7FUYcF%2Bi3xMMd5iWya0wxr%2Fw1YE7EGnzWeYyPo9CguRdFdGeWdLHlbVkDUIu0%2FVrIOIk0DycaU6ZPEN%2BG5yGXzOO99G56l1%2BNz8EsRdv8LEHkihB21TsHrTxzVT8dDFSTPrCVH99nIFOmjexobaMwzvjuEj9dJYs2OmIjvS3z%2Bs%2FjxloD00Whrr6ISSmZAOhYJs3I9KzQTqvXFGx%2Bh7kuC%2Bvk6t2Ohs4%2B1ff9Z3UyW%2BxQ4vOjpmsWDUQ94cj5tbSozDJccLHjs0%2FQnRw1latrXtrlsU6tVHmRsWIW1Qp%2BHVXEGb6hLV8f%2BYuJhdFEzmgUQLHcfKullH0uaLf5zQM%2FoHSjLKYq1HOgxM1P9EWiR58O%2BDlNecAREISX%2BWlhW6od5FsfLmjrRAUkjV6%2BYRNPFFaAwzbLfxAY6pgFkIkdVMvo7kh31u5QgNO%2BzwZvmhvWhoPT8UIeAKkexWfpIjFYkrIWqUNpSw0nr6lHIc8kQ3HqMeNdo1WTblD3iPzjhp6Zz8z22bzpVfs2c23Smg873d404KzRK0J0ZylUEGPIK%2F9nsrnHqYBzlTHmrQNVJyw5%2FIsmhCwKCmctFZBnox7SnlMGB83KMY7NHJYq0Pamoz6YNLGl7OFJI2r1fKbfCUuoS&X-Amz-Signature=d15abca865fa01f664c4b3a353e79644b2366f5fc7275d32e8dd23564614bf32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX55YUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyyyK5%2FCyWOqkcWW%2Fw2Wztc80O7I%2BJCgG8ZolKQta2jAiB1rbW96lkrG2mgx8W1VpQkjKWFvKpLXPHVb%2FtMxLt9%2ByqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXmQWJFUdILEc5NuuKtwDiNoj1SZuGpisJ%2F%2BcMVkTZaBGsdZ99LL1v4K5nK%2Bo2zGXw9tor1UKWUMZqZPnFAy4biLIxAdQqGQjMb06yA6CC32RQOElT5N9TzAkSEG5MTT8N6kTZ1BTLtkodHTOw9ThEWW3pI%2FtvdCyeclWJ9w9%2BalVZcdD0JcSqqRUNRL0XpDvA34Wam9Sil22yjxxIhL9lfTZLFX7P9mspMvnx2FdTW6W2blCy60vCz7FUYcF%2Bi3xMMd5iWya0wxr%2Fw1YE7EGnzWeYyPo9CguRdFdGeWdLHlbVkDUIu0%2FVrIOIk0DycaU6ZPEN%2BG5yGXzOO99G56l1%2BNz8EsRdv8LEHkihB21TsHrTxzVT8dDFSTPrCVH99nIFOmjexobaMwzvjuEj9dJYs2OmIjvS3z%2Bs%2FjxloD00Whrr6ISSmZAOhYJs3I9KzQTqvXFGx%2Bh7kuC%2Bvk6t2Ohs4%2B1ff9Z3UyW%2BxQ4vOjpmsWDUQ94cj5tbSozDJccLHjs0%2FQnRw1latrXtrlsU6tVHmRsWIW1Qp%2BHVXEGb6hLV8f%2BYuJhdFEzmgUQLHcfKullH0uaLf5zQM%2FoHSjLKYq1HOgxM1P9EWiR58O%2BDlNecAREISX%2BWlhW6od5FsfLmjrRAUkjV6%2BYRNPFFaAwzbLfxAY6pgFkIkdVMvo7kh31u5QgNO%2BzwZvmhvWhoPT8UIeAKkexWfpIjFYkrIWqUNpSw0nr6lHIc8kQ3HqMeNdo1WTblD3iPzjhp6Zz8z22bzpVfs2c23Smg873d404KzRK0J0ZylUEGPIK%2F9nsrnHqYBzlTHmrQNVJyw5%2FIsmhCwKCmctFZBnox7SnlMGB83KMY7NHJYq0Pamoz6YNLGl7OFJI2r1fKbfCUuoS&X-Amz-Signature=d252c175e318ceb1fb5e8e253e7d19ca1715390abbcecb457e54d2a4edcc289b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX55YUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyyyK5%2FCyWOqkcWW%2Fw2Wztc80O7I%2BJCgG8ZolKQta2jAiB1rbW96lkrG2mgx8W1VpQkjKWFvKpLXPHVb%2FtMxLt9%2ByqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXmQWJFUdILEc5NuuKtwDiNoj1SZuGpisJ%2F%2BcMVkTZaBGsdZ99LL1v4K5nK%2Bo2zGXw9tor1UKWUMZqZPnFAy4biLIxAdQqGQjMb06yA6CC32RQOElT5N9TzAkSEG5MTT8N6kTZ1BTLtkodHTOw9ThEWW3pI%2FtvdCyeclWJ9w9%2BalVZcdD0JcSqqRUNRL0XpDvA34Wam9Sil22yjxxIhL9lfTZLFX7P9mspMvnx2FdTW6W2blCy60vCz7FUYcF%2Bi3xMMd5iWya0wxr%2Fw1YE7EGnzWeYyPo9CguRdFdGeWdLHlbVkDUIu0%2FVrIOIk0DycaU6ZPEN%2BG5yGXzOO99G56l1%2BNz8EsRdv8LEHkihB21TsHrTxzVT8dDFSTPrCVH99nIFOmjexobaMwzvjuEj9dJYs2OmIjvS3z%2Bs%2FjxloD00Whrr6ISSmZAOhYJs3I9KzQTqvXFGx%2Bh7kuC%2Bvk6t2Ohs4%2B1ff9Z3UyW%2BxQ4vOjpmsWDUQ94cj5tbSozDJccLHjs0%2FQnRw1latrXtrlsU6tVHmRsWIW1Qp%2BHVXEGb6hLV8f%2BYuJhdFEzmgUQLHcfKullH0uaLf5zQM%2FoHSjLKYq1HOgxM1P9EWiR58O%2BDlNecAREISX%2BWlhW6od5FsfLmjrRAUkjV6%2BYRNPFFaAwzbLfxAY6pgFkIkdVMvo7kh31u5QgNO%2BzwZvmhvWhoPT8UIeAKkexWfpIjFYkrIWqUNpSw0nr6lHIc8kQ3HqMeNdo1WTblD3iPzjhp6Zz8z22bzpVfs2c23Smg873d404KzRK0J0ZylUEGPIK%2F9nsrnHqYBzlTHmrQNVJyw5%2FIsmhCwKCmctFZBnox7SnlMGB83KMY7NHJYq0Pamoz6YNLGl7OFJI2r1fKbfCUuoS&X-Amz-Signature=324df0afd0cd3a833c7be38fc7db91ee7b6a1a78e33cf01f0090515baf35fa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX55YUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyyyK5%2FCyWOqkcWW%2Fw2Wztc80O7I%2BJCgG8ZolKQta2jAiB1rbW96lkrG2mgx8W1VpQkjKWFvKpLXPHVb%2FtMxLt9%2ByqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXmQWJFUdILEc5NuuKtwDiNoj1SZuGpisJ%2F%2BcMVkTZaBGsdZ99LL1v4K5nK%2Bo2zGXw9tor1UKWUMZqZPnFAy4biLIxAdQqGQjMb06yA6CC32RQOElT5N9TzAkSEG5MTT8N6kTZ1BTLtkodHTOw9ThEWW3pI%2FtvdCyeclWJ9w9%2BalVZcdD0JcSqqRUNRL0XpDvA34Wam9Sil22yjxxIhL9lfTZLFX7P9mspMvnx2FdTW6W2blCy60vCz7FUYcF%2Bi3xMMd5iWya0wxr%2Fw1YE7EGnzWeYyPo9CguRdFdGeWdLHlbVkDUIu0%2FVrIOIk0DycaU6ZPEN%2BG5yGXzOO99G56l1%2BNz8EsRdv8LEHkihB21TsHrTxzVT8dDFSTPrCVH99nIFOmjexobaMwzvjuEj9dJYs2OmIjvS3z%2Bs%2FjxloD00Whrr6ISSmZAOhYJs3I9KzQTqvXFGx%2Bh7kuC%2Bvk6t2Ohs4%2B1ff9Z3UyW%2BxQ4vOjpmsWDUQ94cj5tbSozDJccLHjs0%2FQnRw1latrXtrlsU6tVHmRsWIW1Qp%2BHVXEGb6hLV8f%2BYuJhdFEzmgUQLHcfKullH0uaLf5zQM%2FoHSjLKYq1HOgxM1P9EWiR58O%2BDlNecAREISX%2BWlhW6od5FsfLmjrRAUkjV6%2BYRNPFFaAwzbLfxAY6pgFkIkdVMvo7kh31u5QgNO%2BzwZvmhvWhoPT8UIeAKkexWfpIjFYkrIWqUNpSw0nr6lHIc8kQ3HqMeNdo1WTblD3iPzjhp6Zz8z22bzpVfs2c23Smg873d404KzRK0J0ZylUEGPIK%2F9nsrnHqYBzlTHmrQNVJyw5%2FIsmhCwKCmctFZBnox7SnlMGB83KMY7NHJYq0Pamoz6YNLGl7OFJI2r1fKbfCUuoS&X-Amz-Signature=b1bcd0dbdc327c2478eb67eda7b19e4850fe8b4d3a3c1bcc181ef00f7a97e96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CX55YUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyyyK5%2FCyWOqkcWW%2Fw2Wztc80O7I%2BJCgG8ZolKQta2jAiB1rbW96lkrG2mgx8W1VpQkjKWFvKpLXPHVb%2FtMxLt9%2ByqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXmQWJFUdILEc5NuuKtwDiNoj1SZuGpisJ%2F%2BcMVkTZaBGsdZ99LL1v4K5nK%2Bo2zGXw9tor1UKWUMZqZPnFAy4biLIxAdQqGQjMb06yA6CC32RQOElT5N9TzAkSEG5MTT8N6kTZ1BTLtkodHTOw9ThEWW3pI%2FtvdCyeclWJ9w9%2BalVZcdD0JcSqqRUNRL0XpDvA34Wam9Sil22yjxxIhL9lfTZLFX7P9mspMvnx2FdTW6W2blCy60vCz7FUYcF%2Bi3xMMd5iWya0wxr%2Fw1YE7EGnzWeYyPo9CguRdFdGeWdLHlbVkDUIu0%2FVrIOIk0DycaU6ZPEN%2BG5yGXzOO99G56l1%2BNz8EsRdv8LEHkihB21TsHrTxzVT8dDFSTPrCVH99nIFOmjexobaMwzvjuEj9dJYs2OmIjvS3z%2Bs%2FjxloD00Whrr6ISSmZAOhYJs3I9KzQTqvXFGx%2Bh7kuC%2Bvk6t2Ohs4%2B1ff9Z3UyW%2BxQ4vOjpmsWDUQ94cj5tbSozDJccLHjs0%2FQnRw1latrXtrlsU6tVHmRsWIW1Qp%2BHVXEGb6hLV8f%2BYuJhdFEzmgUQLHcfKullH0uaLf5zQM%2FoHSjLKYq1HOgxM1P9EWiR58O%2BDlNecAREISX%2BWlhW6od5FsfLmjrRAUkjV6%2BYRNPFFaAwzbLfxAY6pgFkIkdVMvo7kh31u5QgNO%2BzwZvmhvWhoPT8UIeAKkexWfpIjFYkrIWqUNpSw0nr6lHIc8kQ3HqMeNdo1WTblD3iPzjhp6Zz8z22bzpVfs2c23Smg873d404KzRK0J0ZylUEGPIK%2F9nsrnHqYBzlTHmrQNVJyw5%2FIsmhCwKCmctFZBnox7SnlMGB83KMY7NHJYq0Pamoz6YNLGl7OFJI2r1fKbfCUuoS&X-Amz-Signature=33c7485c74b20331c5239a656ce94f043e1cae5f5840c9e61fd492bc55820306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
