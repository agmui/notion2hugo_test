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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEXN42IP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9cp7AzrwLFWAAuQM2qBfO6L2m5E4rro%2F3mX5IoZWaQwIhAKafgXS3inlAxzMJt9iuDEH8I6GNa3JdG3iXPNiicc6oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSIhTCe6D3AWOLInwq3AMzNzqkpI2O5nbkx7JCT8wqPRMMnrbpecRoL5LTn7N5%2BSdjdKFsME3C1KY7G3m%2F2wXdLBAfnriOgYnCsCSOWF%2BT94GptNkqKcuJ%2FFunSvEZtGexN9CL0AJBVc1OtWosdA0hVTAxR0nXCfs7G6lbX37PTSQyUrOx%2FByqYg8gG8ft4mFJmu5dmAbXc4dMUUVTzZHl3Md2rDYrbh5s%2FENNNgoODlzq0O9UW%2FhwuXzLKkChXfLtpfr2BO5qD9CWNZZD331dCjz4fJFhNhN68wlXe5qgngw9L3RLmAf5imrczH4WjHtfnuAcO8fH3x70OGPCGLAsia%2BBs8OnpBbgKglsAVWCxy9Z%2BtrG6ryNXahRMtVHjHQ8tMzEtgBdlMGfBivWVGgxdLwNHvoUlDswxSd8U8Tyg%2BMolimy2mQ%2BWvcu3cwb4vHQ1DEDCxSbzT1cRe2k11tyhsqr4OkSM2FMjRi%2BOYrmmVaOP6rmHfIorAEdpsI%2FfJEPZbm%2FCJLrZx5u6itfmpFLbou90FNx3WkZJpfB6z02wMFqWgAH2yEkhwqpShEQ%2BD9QDhxQPCaggPe8GNs%2FLbKS5Z6VH%2FYhPa6cfa9LqD5dYQQfZPsk%2F1Ezg7LiK4ShGHevuJJVWUQAyHV6%2FTCFnJrCBjqkAbizM1Ulnhk1gxBws8ZdLY4JLXqLjuxmQ27jKzWdfiGs1ogV0nn8R2TMq1Jrg4RPP6WfpnEZubTdxxQFphbNvfg8r2Tohx0YMMckA0P9Q1LfbLkN1YPK6gfafgtNFUZX8AEjeAcf3ZOvrYwpooFzIK4czMJ3M4imAiQbZ%2FfNXhQbjrOHu%2BizaHafanJjJfmThEOoSLP5oKYVZDJfohWRp0O%2BkuRk&X-Amz-Signature=4f377cb294860251d4e68f6b07e470fdee2d569e74f31fab1c012818e3a48850&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEXN42IP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9cp7AzrwLFWAAuQM2qBfO6L2m5E4rro%2F3mX5IoZWaQwIhAKafgXS3inlAxzMJt9iuDEH8I6GNa3JdG3iXPNiicc6oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSIhTCe6D3AWOLInwq3AMzNzqkpI2O5nbkx7JCT8wqPRMMnrbpecRoL5LTn7N5%2BSdjdKFsME3C1KY7G3m%2F2wXdLBAfnriOgYnCsCSOWF%2BT94GptNkqKcuJ%2FFunSvEZtGexN9CL0AJBVc1OtWosdA0hVTAxR0nXCfs7G6lbX37PTSQyUrOx%2FByqYg8gG8ft4mFJmu5dmAbXc4dMUUVTzZHl3Md2rDYrbh5s%2FENNNgoODlzq0O9UW%2FhwuXzLKkChXfLtpfr2BO5qD9CWNZZD331dCjz4fJFhNhN68wlXe5qgngw9L3RLmAf5imrczH4WjHtfnuAcO8fH3x70OGPCGLAsia%2BBs8OnpBbgKglsAVWCxy9Z%2BtrG6ryNXahRMtVHjHQ8tMzEtgBdlMGfBivWVGgxdLwNHvoUlDswxSd8U8Tyg%2BMolimy2mQ%2BWvcu3cwb4vHQ1DEDCxSbzT1cRe2k11tyhsqr4OkSM2FMjRi%2BOYrmmVaOP6rmHfIorAEdpsI%2FfJEPZbm%2FCJLrZx5u6itfmpFLbou90FNx3WkZJpfB6z02wMFqWgAH2yEkhwqpShEQ%2BD9QDhxQPCaggPe8GNs%2FLbKS5Z6VH%2FYhPa6cfa9LqD5dYQQfZPsk%2F1Ezg7LiK4ShGHevuJJVWUQAyHV6%2FTCFnJrCBjqkAbizM1Ulnhk1gxBws8ZdLY4JLXqLjuxmQ27jKzWdfiGs1ogV0nn8R2TMq1Jrg4RPP6WfpnEZubTdxxQFphbNvfg8r2Tohx0YMMckA0P9Q1LfbLkN1YPK6gfafgtNFUZX8AEjeAcf3ZOvrYwpooFzIK4czMJ3M4imAiQbZ%2FfNXhQbjrOHu%2BizaHafanJjJfmThEOoSLP5oKYVZDJfohWRp0O%2BkuRk&X-Amz-Signature=e06c0cc6c147725d7b1ef7364a7dfd99d6eeae909f5dff10dcd77cb0f91bcd03&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEXN42IP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9cp7AzrwLFWAAuQM2qBfO6L2m5E4rro%2F3mX5IoZWaQwIhAKafgXS3inlAxzMJt9iuDEH8I6GNa3JdG3iXPNiicc6oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSIhTCe6D3AWOLInwq3AMzNzqkpI2O5nbkx7JCT8wqPRMMnrbpecRoL5LTn7N5%2BSdjdKFsME3C1KY7G3m%2F2wXdLBAfnriOgYnCsCSOWF%2BT94GptNkqKcuJ%2FFunSvEZtGexN9CL0AJBVc1OtWosdA0hVTAxR0nXCfs7G6lbX37PTSQyUrOx%2FByqYg8gG8ft4mFJmu5dmAbXc4dMUUVTzZHl3Md2rDYrbh5s%2FENNNgoODlzq0O9UW%2FhwuXzLKkChXfLtpfr2BO5qD9CWNZZD331dCjz4fJFhNhN68wlXe5qgngw9L3RLmAf5imrczH4WjHtfnuAcO8fH3x70OGPCGLAsia%2BBs8OnpBbgKglsAVWCxy9Z%2BtrG6ryNXahRMtVHjHQ8tMzEtgBdlMGfBivWVGgxdLwNHvoUlDswxSd8U8Tyg%2BMolimy2mQ%2BWvcu3cwb4vHQ1DEDCxSbzT1cRe2k11tyhsqr4OkSM2FMjRi%2BOYrmmVaOP6rmHfIorAEdpsI%2FfJEPZbm%2FCJLrZx5u6itfmpFLbou90FNx3WkZJpfB6z02wMFqWgAH2yEkhwqpShEQ%2BD9QDhxQPCaggPe8GNs%2FLbKS5Z6VH%2FYhPa6cfa9LqD5dYQQfZPsk%2F1Ezg7LiK4ShGHevuJJVWUQAyHV6%2FTCFnJrCBjqkAbizM1Ulnhk1gxBws8ZdLY4JLXqLjuxmQ27jKzWdfiGs1ogV0nn8R2TMq1Jrg4RPP6WfpnEZubTdxxQFphbNvfg8r2Tohx0YMMckA0P9Q1LfbLkN1YPK6gfafgtNFUZX8AEjeAcf3ZOvrYwpooFzIK4czMJ3M4imAiQbZ%2FfNXhQbjrOHu%2BizaHafanJjJfmThEOoSLP5oKYVZDJfohWRp0O%2BkuRk&X-Amz-Signature=718fa540d6f02ee76352e7054d0c3d05888787eb6ff6853294c69724ffb362ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEXN42IP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9cp7AzrwLFWAAuQM2qBfO6L2m5E4rro%2F3mX5IoZWaQwIhAKafgXS3inlAxzMJt9iuDEH8I6GNa3JdG3iXPNiicc6oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSIhTCe6D3AWOLInwq3AMzNzqkpI2O5nbkx7JCT8wqPRMMnrbpecRoL5LTn7N5%2BSdjdKFsME3C1KY7G3m%2F2wXdLBAfnriOgYnCsCSOWF%2BT94GptNkqKcuJ%2FFunSvEZtGexN9CL0AJBVc1OtWosdA0hVTAxR0nXCfs7G6lbX37PTSQyUrOx%2FByqYg8gG8ft4mFJmu5dmAbXc4dMUUVTzZHl3Md2rDYrbh5s%2FENNNgoODlzq0O9UW%2FhwuXzLKkChXfLtpfr2BO5qD9CWNZZD331dCjz4fJFhNhN68wlXe5qgngw9L3RLmAf5imrczH4WjHtfnuAcO8fH3x70OGPCGLAsia%2BBs8OnpBbgKglsAVWCxy9Z%2BtrG6ryNXahRMtVHjHQ8tMzEtgBdlMGfBivWVGgxdLwNHvoUlDswxSd8U8Tyg%2BMolimy2mQ%2BWvcu3cwb4vHQ1DEDCxSbzT1cRe2k11tyhsqr4OkSM2FMjRi%2BOYrmmVaOP6rmHfIorAEdpsI%2FfJEPZbm%2FCJLrZx5u6itfmpFLbou90FNx3WkZJpfB6z02wMFqWgAH2yEkhwqpShEQ%2BD9QDhxQPCaggPe8GNs%2FLbKS5Z6VH%2FYhPa6cfa9LqD5dYQQfZPsk%2F1Ezg7LiK4ShGHevuJJVWUQAyHV6%2FTCFnJrCBjqkAbizM1Ulnhk1gxBws8ZdLY4JLXqLjuxmQ27jKzWdfiGs1ogV0nn8R2TMq1Jrg4RPP6WfpnEZubTdxxQFphbNvfg8r2Tohx0YMMckA0P9Q1LfbLkN1YPK6gfafgtNFUZX8AEjeAcf3ZOvrYwpooFzIK4czMJ3M4imAiQbZ%2FfNXhQbjrOHu%2BizaHafanJjJfmThEOoSLP5oKYVZDJfohWRp0O%2BkuRk&X-Amz-Signature=4db573852976aff948eca935129821cbc56af6ea37ffb68e97925890d4564ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEXN42IP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9cp7AzrwLFWAAuQM2qBfO6L2m5E4rro%2F3mX5IoZWaQwIhAKafgXS3inlAxzMJt9iuDEH8I6GNa3JdG3iXPNiicc6oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSIhTCe6D3AWOLInwq3AMzNzqkpI2O5nbkx7JCT8wqPRMMnrbpecRoL5LTn7N5%2BSdjdKFsME3C1KY7G3m%2F2wXdLBAfnriOgYnCsCSOWF%2BT94GptNkqKcuJ%2FFunSvEZtGexN9CL0AJBVc1OtWosdA0hVTAxR0nXCfs7G6lbX37PTSQyUrOx%2FByqYg8gG8ft4mFJmu5dmAbXc4dMUUVTzZHl3Md2rDYrbh5s%2FENNNgoODlzq0O9UW%2FhwuXzLKkChXfLtpfr2BO5qD9CWNZZD331dCjz4fJFhNhN68wlXe5qgngw9L3RLmAf5imrczH4WjHtfnuAcO8fH3x70OGPCGLAsia%2BBs8OnpBbgKglsAVWCxy9Z%2BtrG6ryNXahRMtVHjHQ8tMzEtgBdlMGfBivWVGgxdLwNHvoUlDswxSd8U8Tyg%2BMolimy2mQ%2BWvcu3cwb4vHQ1DEDCxSbzT1cRe2k11tyhsqr4OkSM2FMjRi%2BOYrmmVaOP6rmHfIorAEdpsI%2FfJEPZbm%2FCJLrZx5u6itfmpFLbou90FNx3WkZJpfB6z02wMFqWgAH2yEkhwqpShEQ%2BD9QDhxQPCaggPe8GNs%2FLbKS5Z6VH%2FYhPa6cfa9LqD5dYQQfZPsk%2F1Ezg7LiK4ShGHevuJJVWUQAyHV6%2FTCFnJrCBjqkAbizM1Ulnhk1gxBws8ZdLY4JLXqLjuxmQ27jKzWdfiGs1ogV0nn8R2TMq1Jrg4RPP6WfpnEZubTdxxQFphbNvfg8r2Tohx0YMMckA0P9Q1LfbLkN1YPK6gfafgtNFUZX8AEjeAcf3ZOvrYwpooFzIK4czMJ3M4imAiQbZ%2FfNXhQbjrOHu%2BizaHafanJjJfmThEOoSLP5oKYVZDJfohWRp0O%2BkuRk&X-Amz-Signature=32c15d6e0575e4bc632054bebeeb535f8a2e44192e62fcc115c5b08d5e4248f4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEXN42IP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9cp7AzrwLFWAAuQM2qBfO6L2m5E4rro%2F3mX5IoZWaQwIhAKafgXS3inlAxzMJt9iuDEH8I6GNa3JdG3iXPNiicc6oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSIhTCe6D3AWOLInwq3AMzNzqkpI2O5nbkx7JCT8wqPRMMnrbpecRoL5LTn7N5%2BSdjdKFsME3C1KY7G3m%2F2wXdLBAfnriOgYnCsCSOWF%2BT94GptNkqKcuJ%2FFunSvEZtGexN9CL0AJBVc1OtWosdA0hVTAxR0nXCfs7G6lbX37PTSQyUrOx%2FByqYg8gG8ft4mFJmu5dmAbXc4dMUUVTzZHl3Md2rDYrbh5s%2FENNNgoODlzq0O9UW%2FhwuXzLKkChXfLtpfr2BO5qD9CWNZZD331dCjz4fJFhNhN68wlXe5qgngw9L3RLmAf5imrczH4WjHtfnuAcO8fH3x70OGPCGLAsia%2BBs8OnpBbgKglsAVWCxy9Z%2BtrG6ryNXahRMtVHjHQ8tMzEtgBdlMGfBivWVGgxdLwNHvoUlDswxSd8U8Tyg%2BMolimy2mQ%2BWvcu3cwb4vHQ1DEDCxSbzT1cRe2k11tyhsqr4OkSM2FMjRi%2BOYrmmVaOP6rmHfIorAEdpsI%2FfJEPZbm%2FCJLrZx5u6itfmpFLbou90FNx3WkZJpfB6z02wMFqWgAH2yEkhwqpShEQ%2BD9QDhxQPCaggPe8GNs%2FLbKS5Z6VH%2FYhPa6cfa9LqD5dYQQfZPsk%2F1Ezg7LiK4ShGHevuJJVWUQAyHV6%2FTCFnJrCBjqkAbizM1Ulnhk1gxBws8ZdLY4JLXqLjuxmQ27jKzWdfiGs1ogV0nn8R2TMq1Jrg4RPP6WfpnEZubTdxxQFphbNvfg8r2Tohx0YMMckA0P9Q1LfbLkN1YPK6gfafgtNFUZX8AEjeAcf3ZOvrYwpooFzIK4czMJ3M4imAiQbZ%2FfNXhQbjrOHu%2BizaHafanJjJfmThEOoSLP5oKYVZDJfohWRp0O%2BkuRk&X-Amz-Signature=cfd71f7232aa64e6a0877b1a9b3c284a184e21ef2b34b4d9bdd6eed1dd64f500&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEXN42IP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9cp7AzrwLFWAAuQM2qBfO6L2m5E4rro%2F3mX5IoZWaQwIhAKafgXS3inlAxzMJt9iuDEH8I6GNa3JdG3iXPNiicc6oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSIhTCe6D3AWOLInwq3AMzNzqkpI2O5nbkx7JCT8wqPRMMnrbpecRoL5LTn7N5%2BSdjdKFsME3C1KY7G3m%2F2wXdLBAfnriOgYnCsCSOWF%2BT94GptNkqKcuJ%2FFunSvEZtGexN9CL0AJBVc1OtWosdA0hVTAxR0nXCfs7G6lbX37PTSQyUrOx%2FByqYg8gG8ft4mFJmu5dmAbXc4dMUUVTzZHl3Md2rDYrbh5s%2FENNNgoODlzq0O9UW%2FhwuXzLKkChXfLtpfr2BO5qD9CWNZZD331dCjz4fJFhNhN68wlXe5qgngw9L3RLmAf5imrczH4WjHtfnuAcO8fH3x70OGPCGLAsia%2BBs8OnpBbgKglsAVWCxy9Z%2BtrG6ryNXahRMtVHjHQ8tMzEtgBdlMGfBivWVGgxdLwNHvoUlDswxSd8U8Tyg%2BMolimy2mQ%2BWvcu3cwb4vHQ1DEDCxSbzT1cRe2k11tyhsqr4OkSM2FMjRi%2BOYrmmVaOP6rmHfIorAEdpsI%2FfJEPZbm%2FCJLrZx5u6itfmpFLbou90FNx3WkZJpfB6z02wMFqWgAH2yEkhwqpShEQ%2BD9QDhxQPCaggPe8GNs%2FLbKS5Z6VH%2FYhPa6cfa9LqD5dYQQfZPsk%2F1Ezg7LiK4ShGHevuJJVWUQAyHV6%2FTCFnJrCBjqkAbizM1Ulnhk1gxBws8ZdLY4JLXqLjuxmQ27jKzWdfiGs1ogV0nn8R2TMq1Jrg4RPP6WfpnEZubTdxxQFphbNvfg8r2Tohx0YMMckA0P9Q1LfbLkN1YPK6gfafgtNFUZX8AEjeAcf3ZOvrYwpooFzIK4czMJ3M4imAiQbZ%2FfNXhQbjrOHu%2BizaHafanJjJfmThEOoSLP5oKYVZDJfohWRp0O%2BkuRk&X-Amz-Signature=d4564ed4b94a3d5b60d75e5d328f9b9d94baa0693a321c09ba91b72bf5b0d10b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
