---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD23B3U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEenk7j00heI2RDXRwjkgShtiY3Y9ndLk2%2FN0W6kEGxAIgX4E6pH9Gc%2FsLdhRVBS8%2F%2FbQU3jHvhC%2BiF7%2B5WEoUDrIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiwcpwqGhIAyRKXKyrcA1vqL6E6Zj%2B%2BSfIwYg4ZzrjkJm2vHmZeYKXPDsr0BmRnobQz3boPe4NEzK1B5LOi3manEvL60RoOCifpMhJLfsdPH8kY1eCbDTI18oe%2BVoQJBUMPvngNlo27eXCPjsx39dRil3vHI0LQxptTTd2cL4ktC2WbNUBbeuVPZ9khdCqZh2sgublCveOTwXPL8vlck24xcXfpqwNEjNpLyfeSPD2VvWnQLi3wnVwCr7wpS%2BH%2FCztyPqO8Wve7KS7zZrdlwRmbK0G8NnIUPEJ17it%2B%2F8YMa1fGVy6evYiDOyfvvsmtoqNSaLtXhdI9poQvu6Id4T6%2Brbm61P7Y9PwtgdJVsi1SopQXNv%2B7cG%2BtPjkF2ssHsrc1irCuxYylUT38R%2BT4Id3fUg%2BAVLzrOELL%2Fwdv0U%2B%2BqhqgHlYnXl7ZH7f7CR8aRqW%2F7L9WsugCuGxhqZt%2FztkiX9hm19MvUzl6rPZLruR99qSSdJw49Q4IV%2Be4wkSV7FiscOExhntM5NaMC7mLvB32kJfenT41%2FkXKyp%2Btu8K5bf3ap3Y0Z0Y%2BnYbu7y1V6fQBjVnWBQ667ZJkyqly6dJhUuhU0drkCn6pewaKX7gGiem6qrCfTMElZYJgNZ9RX%2F%2FliHRfdMTTWAYIMNu58b8GOqUBljZJdC9z9wMqCl4EOpKPYh2dvzUeMHVEWyZYXwDbv0FuKVBUWenv68cNupsEXXWw8LStHESyy%2FZWwVsf%2FgRqd6PzsaOL%2Bcupeax8QLgM0EMn9cyLPWoF4O%2BvE1%2BDmDvmIcPBxJiaF12Kjw38cbH5%2FM%2FKqgyTuLRleD0f4aOgBR31bp7sqT1itPOnCkwx2TMZ90JGrvAJadAIuTMO0BR5H2K3E2qB&X-Amz-Signature=a4ac9d94950ec711c08cef14f800758af28d99db3bb47d796d8c982232cbc0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD23B3U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEenk7j00heI2RDXRwjkgShtiY3Y9ndLk2%2FN0W6kEGxAIgX4E6pH9Gc%2FsLdhRVBS8%2F%2FbQU3jHvhC%2BiF7%2B5WEoUDrIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiwcpwqGhIAyRKXKyrcA1vqL6E6Zj%2B%2BSfIwYg4ZzrjkJm2vHmZeYKXPDsr0BmRnobQz3boPe4NEzK1B5LOi3manEvL60RoOCifpMhJLfsdPH8kY1eCbDTI18oe%2BVoQJBUMPvngNlo27eXCPjsx39dRil3vHI0LQxptTTd2cL4ktC2WbNUBbeuVPZ9khdCqZh2sgublCveOTwXPL8vlck24xcXfpqwNEjNpLyfeSPD2VvWnQLi3wnVwCr7wpS%2BH%2FCztyPqO8Wve7KS7zZrdlwRmbK0G8NnIUPEJ17it%2B%2F8YMa1fGVy6evYiDOyfvvsmtoqNSaLtXhdI9poQvu6Id4T6%2Brbm61P7Y9PwtgdJVsi1SopQXNv%2B7cG%2BtPjkF2ssHsrc1irCuxYylUT38R%2BT4Id3fUg%2BAVLzrOELL%2Fwdv0U%2B%2BqhqgHlYnXl7ZH7f7CR8aRqW%2F7L9WsugCuGxhqZt%2FztkiX9hm19MvUzl6rPZLruR99qSSdJw49Q4IV%2Be4wkSV7FiscOExhntM5NaMC7mLvB32kJfenT41%2FkXKyp%2Btu8K5bf3ap3Y0Z0Y%2BnYbu7y1V6fQBjVnWBQ667ZJkyqly6dJhUuhU0drkCn6pewaKX7gGiem6qrCfTMElZYJgNZ9RX%2F%2FliHRfdMTTWAYIMNu58b8GOqUBljZJdC9z9wMqCl4EOpKPYh2dvzUeMHVEWyZYXwDbv0FuKVBUWenv68cNupsEXXWw8LStHESyy%2FZWwVsf%2FgRqd6PzsaOL%2Bcupeax8QLgM0EMn9cyLPWoF4O%2BvE1%2BDmDvmIcPBxJiaF12Kjw38cbH5%2FM%2FKqgyTuLRleD0f4aOgBR31bp7sqT1itPOnCkwx2TMZ90JGrvAJadAIuTMO0BR5H2K3E2qB&X-Amz-Signature=ded7e3c8be41c87eb470cc679dc11ba5350802f9bf3f6becbfbf18c2ecee7bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD23B3U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEenk7j00heI2RDXRwjkgShtiY3Y9ndLk2%2FN0W6kEGxAIgX4E6pH9Gc%2FsLdhRVBS8%2F%2FbQU3jHvhC%2BiF7%2B5WEoUDrIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiwcpwqGhIAyRKXKyrcA1vqL6E6Zj%2B%2BSfIwYg4ZzrjkJm2vHmZeYKXPDsr0BmRnobQz3boPe4NEzK1B5LOi3manEvL60RoOCifpMhJLfsdPH8kY1eCbDTI18oe%2BVoQJBUMPvngNlo27eXCPjsx39dRil3vHI0LQxptTTd2cL4ktC2WbNUBbeuVPZ9khdCqZh2sgublCveOTwXPL8vlck24xcXfpqwNEjNpLyfeSPD2VvWnQLi3wnVwCr7wpS%2BH%2FCztyPqO8Wve7KS7zZrdlwRmbK0G8NnIUPEJ17it%2B%2F8YMa1fGVy6evYiDOyfvvsmtoqNSaLtXhdI9poQvu6Id4T6%2Brbm61P7Y9PwtgdJVsi1SopQXNv%2B7cG%2BtPjkF2ssHsrc1irCuxYylUT38R%2BT4Id3fUg%2BAVLzrOELL%2Fwdv0U%2B%2BqhqgHlYnXl7ZH7f7CR8aRqW%2F7L9WsugCuGxhqZt%2FztkiX9hm19MvUzl6rPZLruR99qSSdJw49Q4IV%2Be4wkSV7FiscOExhntM5NaMC7mLvB32kJfenT41%2FkXKyp%2Btu8K5bf3ap3Y0Z0Y%2BnYbu7y1V6fQBjVnWBQ667ZJkyqly6dJhUuhU0drkCn6pewaKX7gGiem6qrCfTMElZYJgNZ9RX%2F%2FliHRfdMTTWAYIMNu58b8GOqUBljZJdC9z9wMqCl4EOpKPYh2dvzUeMHVEWyZYXwDbv0FuKVBUWenv68cNupsEXXWw8LStHESyy%2FZWwVsf%2FgRqd6PzsaOL%2Bcupeax8QLgM0EMn9cyLPWoF4O%2BvE1%2BDmDvmIcPBxJiaF12Kjw38cbH5%2FM%2FKqgyTuLRleD0f4aOgBR31bp7sqT1itPOnCkwx2TMZ90JGrvAJadAIuTMO0BR5H2K3E2qB&X-Amz-Signature=7d9d26145a7078132b6bc4ff395df25ae22087d2fea861adca75b025cceaf0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD23B3U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEenk7j00heI2RDXRwjkgShtiY3Y9ndLk2%2FN0W6kEGxAIgX4E6pH9Gc%2FsLdhRVBS8%2F%2FbQU3jHvhC%2BiF7%2B5WEoUDrIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiwcpwqGhIAyRKXKyrcA1vqL6E6Zj%2B%2BSfIwYg4ZzrjkJm2vHmZeYKXPDsr0BmRnobQz3boPe4NEzK1B5LOi3manEvL60RoOCifpMhJLfsdPH8kY1eCbDTI18oe%2BVoQJBUMPvngNlo27eXCPjsx39dRil3vHI0LQxptTTd2cL4ktC2WbNUBbeuVPZ9khdCqZh2sgublCveOTwXPL8vlck24xcXfpqwNEjNpLyfeSPD2VvWnQLi3wnVwCr7wpS%2BH%2FCztyPqO8Wve7KS7zZrdlwRmbK0G8NnIUPEJ17it%2B%2F8YMa1fGVy6evYiDOyfvvsmtoqNSaLtXhdI9poQvu6Id4T6%2Brbm61P7Y9PwtgdJVsi1SopQXNv%2B7cG%2BtPjkF2ssHsrc1irCuxYylUT38R%2BT4Id3fUg%2BAVLzrOELL%2Fwdv0U%2B%2BqhqgHlYnXl7ZH7f7CR8aRqW%2F7L9WsugCuGxhqZt%2FztkiX9hm19MvUzl6rPZLruR99qSSdJw49Q4IV%2Be4wkSV7FiscOExhntM5NaMC7mLvB32kJfenT41%2FkXKyp%2Btu8K5bf3ap3Y0Z0Y%2BnYbu7y1V6fQBjVnWBQ667ZJkyqly6dJhUuhU0drkCn6pewaKX7gGiem6qrCfTMElZYJgNZ9RX%2F%2FliHRfdMTTWAYIMNu58b8GOqUBljZJdC9z9wMqCl4EOpKPYh2dvzUeMHVEWyZYXwDbv0FuKVBUWenv68cNupsEXXWw8LStHESyy%2FZWwVsf%2FgRqd6PzsaOL%2Bcupeax8QLgM0EMn9cyLPWoF4O%2BvE1%2BDmDvmIcPBxJiaF12Kjw38cbH5%2FM%2FKqgyTuLRleD0f4aOgBR31bp7sqT1itPOnCkwx2TMZ90JGrvAJadAIuTMO0BR5H2K3E2qB&X-Amz-Signature=aa26db161295cd10b833ac8b7d5323d804fc1b8d6199f6101eb7b7eac29bf8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD23B3U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEenk7j00heI2RDXRwjkgShtiY3Y9ndLk2%2FN0W6kEGxAIgX4E6pH9Gc%2FsLdhRVBS8%2F%2FbQU3jHvhC%2BiF7%2B5WEoUDrIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiwcpwqGhIAyRKXKyrcA1vqL6E6Zj%2B%2BSfIwYg4ZzrjkJm2vHmZeYKXPDsr0BmRnobQz3boPe4NEzK1B5LOi3manEvL60RoOCifpMhJLfsdPH8kY1eCbDTI18oe%2BVoQJBUMPvngNlo27eXCPjsx39dRil3vHI0LQxptTTd2cL4ktC2WbNUBbeuVPZ9khdCqZh2sgublCveOTwXPL8vlck24xcXfpqwNEjNpLyfeSPD2VvWnQLi3wnVwCr7wpS%2BH%2FCztyPqO8Wve7KS7zZrdlwRmbK0G8NnIUPEJ17it%2B%2F8YMa1fGVy6evYiDOyfvvsmtoqNSaLtXhdI9poQvu6Id4T6%2Brbm61P7Y9PwtgdJVsi1SopQXNv%2B7cG%2BtPjkF2ssHsrc1irCuxYylUT38R%2BT4Id3fUg%2BAVLzrOELL%2Fwdv0U%2B%2BqhqgHlYnXl7ZH7f7CR8aRqW%2F7L9WsugCuGxhqZt%2FztkiX9hm19MvUzl6rPZLruR99qSSdJw49Q4IV%2Be4wkSV7FiscOExhntM5NaMC7mLvB32kJfenT41%2FkXKyp%2Btu8K5bf3ap3Y0Z0Y%2BnYbu7y1V6fQBjVnWBQ667ZJkyqly6dJhUuhU0drkCn6pewaKX7gGiem6qrCfTMElZYJgNZ9RX%2F%2FliHRfdMTTWAYIMNu58b8GOqUBljZJdC9z9wMqCl4EOpKPYh2dvzUeMHVEWyZYXwDbv0FuKVBUWenv68cNupsEXXWw8LStHESyy%2FZWwVsf%2FgRqd6PzsaOL%2Bcupeax8QLgM0EMn9cyLPWoF4O%2BvE1%2BDmDvmIcPBxJiaF12Kjw38cbH5%2FM%2FKqgyTuLRleD0f4aOgBR31bp7sqT1itPOnCkwx2TMZ90JGrvAJadAIuTMO0BR5H2K3E2qB&X-Amz-Signature=16512231e5fe36dc3cfed8818b622d42d4f11add6116510ddce56a6f17822ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD23B3U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEenk7j00heI2RDXRwjkgShtiY3Y9ndLk2%2FN0W6kEGxAIgX4E6pH9Gc%2FsLdhRVBS8%2F%2FbQU3jHvhC%2BiF7%2B5WEoUDrIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiwcpwqGhIAyRKXKyrcA1vqL6E6Zj%2B%2BSfIwYg4ZzrjkJm2vHmZeYKXPDsr0BmRnobQz3boPe4NEzK1B5LOi3manEvL60RoOCifpMhJLfsdPH8kY1eCbDTI18oe%2BVoQJBUMPvngNlo27eXCPjsx39dRil3vHI0LQxptTTd2cL4ktC2WbNUBbeuVPZ9khdCqZh2sgublCveOTwXPL8vlck24xcXfpqwNEjNpLyfeSPD2VvWnQLi3wnVwCr7wpS%2BH%2FCztyPqO8Wve7KS7zZrdlwRmbK0G8NnIUPEJ17it%2B%2F8YMa1fGVy6evYiDOyfvvsmtoqNSaLtXhdI9poQvu6Id4T6%2Brbm61P7Y9PwtgdJVsi1SopQXNv%2B7cG%2BtPjkF2ssHsrc1irCuxYylUT38R%2BT4Id3fUg%2BAVLzrOELL%2Fwdv0U%2B%2BqhqgHlYnXl7ZH7f7CR8aRqW%2F7L9WsugCuGxhqZt%2FztkiX9hm19MvUzl6rPZLruR99qSSdJw49Q4IV%2Be4wkSV7FiscOExhntM5NaMC7mLvB32kJfenT41%2FkXKyp%2Btu8K5bf3ap3Y0Z0Y%2BnYbu7y1V6fQBjVnWBQ667ZJkyqly6dJhUuhU0drkCn6pewaKX7gGiem6qrCfTMElZYJgNZ9RX%2F%2FliHRfdMTTWAYIMNu58b8GOqUBljZJdC9z9wMqCl4EOpKPYh2dvzUeMHVEWyZYXwDbv0FuKVBUWenv68cNupsEXXWw8LStHESyy%2FZWwVsf%2FgRqd6PzsaOL%2Bcupeax8QLgM0EMn9cyLPWoF4O%2BvE1%2BDmDvmIcPBxJiaF12Kjw38cbH5%2FM%2FKqgyTuLRleD0f4aOgBR31bp7sqT1itPOnCkwx2TMZ90JGrvAJadAIuTMO0BR5H2K3E2qB&X-Amz-Signature=ad8d9978e5acf56fd164bb4a189d011589150fc41912ed1880a23df1184d139f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD23B3U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEenk7j00heI2RDXRwjkgShtiY3Y9ndLk2%2FN0W6kEGxAIgX4E6pH9Gc%2FsLdhRVBS8%2F%2FbQU3jHvhC%2BiF7%2B5WEoUDrIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiwcpwqGhIAyRKXKyrcA1vqL6E6Zj%2B%2BSfIwYg4ZzrjkJm2vHmZeYKXPDsr0BmRnobQz3boPe4NEzK1B5LOi3manEvL60RoOCifpMhJLfsdPH8kY1eCbDTI18oe%2BVoQJBUMPvngNlo27eXCPjsx39dRil3vHI0LQxptTTd2cL4ktC2WbNUBbeuVPZ9khdCqZh2sgublCveOTwXPL8vlck24xcXfpqwNEjNpLyfeSPD2VvWnQLi3wnVwCr7wpS%2BH%2FCztyPqO8Wve7KS7zZrdlwRmbK0G8NnIUPEJ17it%2B%2F8YMa1fGVy6evYiDOyfvvsmtoqNSaLtXhdI9poQvu6Id4T6%2Brbm61P7Y9PwtgdJVsi1SopQXNv%2B7cG%2BtPjkF2ssHsrc1irCuxYylUT38R%2BT4Id3fUg%2BAVLzrOELL%2Fwdv0U%2B%2BqhqgHlYnXl7ZH7f7CR8aRqW%2F7L9WsugCuGxhqZt%2FztkiX9hm19MvUzl6rPZLruR99qSSdJw49Q4IV%2Be4wkSV7FiscOExhntM5NaMC7mLvB32kJfenT41%2FkXKyp%2Btu8K5bf3ap3Y0Z0Y%2BnYbu7y1V6fQBjVnWBQ667ZJkyqly6dJhUuhU0drkCn6pewaKX7gGiem6qrCfTMElZYJgNZ9RX%2F%2FliHRfdMTTWAYIMNu58b8GOqUBljZJdC9z9wMqCl4EOpKPYh2dvzUeMHVEWyZYXwDbv0FuKVBUWenv68cNupsEXXWw8LStHESyy%2FZWwVsf%2FgRqd6PzsaOL%2Bcupeax8QLgM0EMn9cyLPWoF4O%2BvE1%2BDmDvmIcPBxJiaF12Kjw38cbH5%2FM%2FKqgyTuLRleD0f4aOgBR31bp7sqT1itPOnCkwx2TMZ90JGrvAJadAIuTMO0BR5H2K3E2qB&X-Amz-Signature=b936ea5ad80bc6f83d4d77671d9e23ab946269c0da6b5d34e25f351e9523cfc9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
