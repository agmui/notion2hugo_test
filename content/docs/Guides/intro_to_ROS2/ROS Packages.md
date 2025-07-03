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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RRMTKF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGhaHQE9Bu23pqaX6D9GJR7bSKp7SvUXvZCLncDQ%2B%2BMgIhAOJR0lfqZ8jXWx7e%2Fye1%2B9aOBOZRHTBXK8KL0L96MsloKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFtWLfPsWrgbsMLlAq3APkYUAa%2B1BV8KLDhFZ%2F0%2Bh55AWzugzfdvXPI7otCx6ezIFX9O0LpUHjFyz7sJvxPeRJO7dotxzO9SdOccQodlKBra%2Fg3igEmJGtnIrMxHeGw9%2F0V7u8pjWmTeCZjVpG%2B9uCh4YQbx0ETmnEfoLhFyN61zcI9xDecxoCKpLQSu5i7pjJZDJpLPefm7KFkduCPZQwHz%2B5bBfpJCaRQvvtYxpmkdUfCTEqoVnemGFjU0mohqwuumWWbJMYEFfdriTz2raTQ5ggmH02LkeXFwMW7XeM%2Fh2Bj%2FsVn66CvqMK5XQIKXT8bywp4BNVsQ7psDQIWZVGbo%2Fp1xkjfWurlTOo18QjdosQxJlaXdswIGxcmpdARQJQnzZ%2FvVG%2F1BorUItm43Ci8qf6BXcEf6nVJEF%2FbRi1JWiaZyRuAjRuHSjxQij0%2Bz8suvXKhzg6BgspOCWs5073t0WCSGv2dTfhz4hySqcOOZTXl%2ByfrP%2BglrONjIT2mz%2Fwr0amCt2daUY8juxeB72j7thPWrWDtua5so8LaeqXqCeBJBI5HuDwIO%2FTEf1%2BSLIo%2FdmPxFRWFUcIGgvx3XfKqqK5EKtw7dyxVqfrPigBB8Hh4SPesImB%2FUWDHa7gsdRbdaLzQ9QkT%2BdxiTDYvZbDBjqkAWXcKR33j79Oo%2F27sBBsyHc8hom3KXmsMbpfWX8sUiJ26pWqDC4n%2BqBYosmLiQw9QVnLSZG7zsrzu8WWiFqyt4g%2F7393YHXX3FXz2RUvo1W9tgFZeP%2B%2F2YD5U8gKQAMcwQ%2BsNA5vkoUUV814tjcE1%2BSBN1TPUIKau4vhv4VfzEETyqrWIWdBsHyW7DmAukpzAw8lpT5HOgRoUcgoNREAn1TkJdiF&X-Amz-Signature=613344bb81f3233f37bf24972ebf686ee48b10ff7f43bedc199d409d04d49378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RRMTKF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGhaHQE9Bu23pqaX6D9GJR7bSKp7SvUXvZCLncDQ%2B%2BMgIhAOJR0lfqZ8jXWx7e%2Fye1%2B9aOBOZRHTBXK8KL0L96MsloKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFtWLfPsWrgbsMLlAq3APkYUAa%2B1BV8KLDhFZ%2F0%2Bh55AWzugzfdvXPI7otCx6ezIFX9O0LpUHjFyz7sJvxPeRJO7dotxzO9SdOccQodlKBra%2Fg3igEmJGtnIrMxHeGw9%2F0V7u8pjWmTeCZjVpG%2B9uCh4YQbx0ETmnEfoLhFyN61zcI9xDecxoCKpLQSu5i7pjJZDJpLPefm7KFkduCPZQwHz%2B5bBfpJCaRQvvtYxpmkdUfCTEqoVnemGFjU0mohqwuumWWbJMYEFfdriTz2raTQ5ggmH02LkeXFwMW7XeM%2Fh2Bj%2FsVn66CvqMK5XQIKXT8bywp4BNVsQ7psDQIWZVGbo%2Fp1xkjfWurlTOo18QjdosQxJlaXdswIGxcmpdARQJQnzZ%2FvVG%2F1BorUItm43Ci8qf6BXcEf6nVJEF%2FbRi1JWiaZyRuAjRuHSjxQij0%2Bz8suvXKhzg6BgspOCWs5073t0WCSGv2dTfhz4hySqcOOZTXl%2ByfrP%2BglrONjIT2mz%2Fwr0amCt2daUY8juxeB72j7thPWrWDtua5so8LaeqXqCeBJBI5HuDwIO%2FTEf1%2BSLIo%2FdmPxFRWFUcIGgvx3XfKqqK5EKtw7dyxVqfrPigBB8Hh4SPesImB%2FUWDHa7gsdRbdaLzQ9QkT%2BdxiTDYvZbDBjqkAWXcKR33j79Oo%2F27sBBsyHc8hom3KXmsMbpfWX8sUiJ26pWqDC4n%2BqBYosmLiQw9QVnLSZG7zsrzu8WWiFqyt4g%2F7393YHXX3FXz2RUvo1W9tgFZeP%2B%2F2YD5U8gKQAMcwQ%2BsNA5vkoUUV814tjcE1%2BSBN1TPUIKau4vhv4VfzEETyqrWIWdBsHyW7DmAukpzAw8lpT5HOgRoUcgoNREAn1TkJdiF&X-Amz-Signature=3d6f4f0fbc4562dfcb9e681abf49f6e5b6cbbb2537ed5f19ff488fe6d3baea60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RRMTKF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGhaHQE9Bu23pqaX6D9GJR7bSKp7SvUXvZCLncDQ%2B%2BMgIhAOJR0lfqZ8jXWx7e%2Fye1%2B9aOBOZRHTBXK8KL0L96MsloKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFtWLfPsWrgbsMLlAq3APkYUAa%2B1BV8KLDhFZ%2F0%2Bh55AWzugzfdvXPI7otCx6ezIFX9O0LpUHjFyz7sJvxPeRJO7dotxzO9SdOccQodlKBra%2Fg3igEmJGtnIrMxHeGw9%2F0V7u8pjWmTeCZjVpG%2B9uCh4YQbx0ETmnEfoLhFyN61zcI9xDecxoCKpLQSu5i7pjJZDJpLPefm7KFkduCPZQwHz%2B5bBfpJCaRQvvtYxpmkdUfCTEqoVnemGFjU0mohqwuumWWbJMYEFfdriTz2raTQ5ggmH02LkeXFwMW7XeM%2Fh2Bj%2FsVn66CvqMK5XQIKXT8bywp4BNVsQ7psDQIWZVGbo%2Fp1xkjfWurlTOo18QjdosQxJlaXdswIGxcmpdARQJQnzZ%2FvVG%2F1BorUItm43Ci8qf6BXcEf6nVJEF%2FbRi1JWiaZyRuAjRuHSjxQij0%2Bz8suvXKhzg6BgspOCWs5073t0WCSGv2dTfhz4hySqcOOZTXl%2ByfrP%2BglrONjIT2mz%2Fwr0amCt2daUY8juxeB72j7thPWrWDtua5so8LaeqXqCeBJBI5HuDwIO%2FTEf1%2BSLIo%2FdmPxFRWFUcIGgvx3XfKqqK5EKtw7dyxVqfrPigBB8Hh4SPesImB%2FUWDHa7gsdRbdaLzQ9QkT%2BdxiTDYvZbDBjqkAWXcKR33j79Oo%2F27sBBsyHc8hom3KXmsMbpfWX8sUiJ26pWqDC4n%2BqBYosmLiQw9QVnLSZG7zsrzu8WWiFqyt4g%2F7393YHXX3FXz2RUvo1W9tgFZeP%2B%2F2YD5U8gKQAMcwQ%2BsNA5vkoUUV814tjcE1%2BSBN1TPUIKau4vhv4VfzEETyqrWIWdBsHyW7DmAukpzAw8lpT5HOgRoUcgoNREAn1TkJdiF&X-Amz-Signature=ea26a410a758ac0ab44c90f41942e9b05beb76a005b192c3af3c0f31569eea1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RRMTKF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGhaHQE9Bu23pqaX6D9GJR7bSKp7SvUXvZCLncDQ%2B%2BMgIhAOJR0lfqZ8jXWx7e%2Fye1%2B9aOBOZRHTBXK8KL0L96MsloKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFtWLfPsWrgbsMLlAq3APkYUAa%2B1BV8KLDhFZ%2F0%2Bh55AWzugzfdvXPI7otCx6ezIFX9O0LpUHjFyz7sJvxPeRJO7dotxzO9SdOccQodlKBra%2Fg3igEmJGtnIrMxHeGw9%2F0V7u8pjWmTeCZjVpG%2B9uCh4YQbx0ETmnEfoLhFyN61zcI9xDecxoCKpLQSu5i7pjJZDJpLPefm7KFkduCPZQwHz%2B5bBfpJCaRQvvtYxpmkdUfCTEqoVnemGFjU0mohqwuumWWbJMYEFfdriTz2raTQ5ggmH02LkeXFwMW7XeM%2Fh2Bj%2FsVn66CvqMK5XQIKXT8bywp4BNVsQ7psDQIWZVGbo%2Fp1xkjfWurlTOo18QjdosQxJlaXdswIGxcmpdARQJQnzZ%2FvVG%2F1BorUItm43Ci8qf6BXcEf6nVJEF%2FbRi1JWiaZyRuAjRuHSjxQij0%2Bz8suvXKhzg6BgspOCWs5073t0WCSGv2dTfhz4hySqcOOZTXl%2ByfrP%2BglrONjIT2mz%2Fwr0amCt2daUY8juxeB72j7thPWrWDtua5so8LaeqXqCeBJBI5HuDwIO%2FTEf1%2BSLIo%2FdmPxFRWFUcIGgvx3XfKqqK5EKtw7dyxVqfrPigBB8Hh4SPesImB%2FUWDHa7gsdRbdaLzQ9QkT%2BdxiTDYvZbDBjqkAWXcKR33j79Oo%2F27sBBsyHc8hom3KXmsMbpfWX8sUiJ26pWqDC4n%2BqBYosmLiQw9QVnLSZG7zsrzu8WWiFqyt4g%2F7393YHXX3FXz2RUvo1W9tgFZeP%2B%2F2YD5U8gKQAMcwQ%2BsNA5vkoUUV814tjcE1%2BSBN1TPUIKau4vhv4VfzEETyqrWIWdBsHyW7DmAukpzAw8lpT5HOgRoUcgoNREAn1TkJdiF&X-Amz-Signature=75fa525998db6d91bf3fb715936d506b111a290b83b0b0d00b6c3c63a98b8274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RRMTKF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGhaHQE9Bu23pqaX6D9GJR7bSKp7SvUXvZCLncDQ%2B%2BMgIhAOJR0lfqZ8jXWx7e%2Fye1%2B9aOBOZRHTBXK8KL0L96MsloKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFtWLfPsWrgbsMLlAq3APkYUAa%2B1BV8KLDhFZ%2F0%2Bh55AWzugzfdvXPI7otCx6ezIFX9O0LpUHjFyz7sJvxPeRJO7dotxzO9SdOccQodlKBra%2Fg3igEmJGtnIrMxHeGw9%2F0V7u8pjWmTeCZjVpG%2B9uCh4YQbx0ETmnEfoLhFyN61zcI9xDecxoCKpLQSu5i7pjJZDJpLPefm7KFkduCPZQwHz%2B5bBfpJCaRQvvtYxpmkdUfCTEqoVnemGFjU0mohqwuumWWbJMYEFfdriTz2raTQ5ggmH02LkeXFwMW7XeM%2Fh2Bj%2FsVn66CvqMK5XQIKXT8bywp4BNVsQ7psDQIWZVGbo%2Fp1xkjfWurlTOo18QjdosQxJlaXdswIGxcmpdARQJQnzZ%2FvVG%2F1BorUItm43Ci8qf6BXcEf6nVJEF%2FbRi1JWiaZyRuAjRuHSjxQij0%2Bz8suvXKhzg6BgspOCWs5073t0WCSGv2dTfhz4hySqcOOZTXl%2ByfrP%2BglrONjIT2mz%2Fwr0amCt2daUY8juxeB72j7thPWrWDtua5so8LaeqXqCeBJBI5HuDwIO%2FTEf1%2BSLIo%2FdmPxFRWFUcIGgvx3XfKqqK5EKtw7dyxVqfrPigBB8Hh4SPesImB%2FUWDHa7gsdRbdaLzQ9QkT%2BdxiTDYvZbDBjqkAWXcKR33j79Oo%2F27sBBsyHc8hom3KXmsMbpfWX8sUiJ26pWqDC4n%2BqBYosmLiQw9QVnLSZG7zsrzu8WWiFqyt4g%2F7393YHXX3FXz2RUvo1W9tgFZeP%2B%2F2YD5U8gKQAMcwQ%2BsNA5vkoUUV814tjcE1%2BSBN1TPUIKau4vhv4VfzEETyqrWIWdBsHyW7DmAukpzAw8lpT5HOgRoUcgoNREAn1TkJdiF&X-Amz-Signature=5aa777e839c76bab21cb16f8cddf7da1896fc3aa113244e2edf7d7608a5a0a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RRMTKF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGhaHQE9Bu23pqaX6D9GJR7bSKp7SvUXvZCLncDQ%2B%2BMgIhAOJR0lfqZ8jXWx7e%2Fye1%2B9aOBOZRHTBXK8KL0L96MsloKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFtWLfPsWrgbsMLlAq3APkYUAa%2B1BV8KLDhFZ%2F0%2Bh55AWzugzfdvXPI7otCx6ezIFX9O0LpUHjFyz7sJvxPeRJO7dotxzO9SdOccQodlKBra%2Fg3igEmJGtnIrMxHeGw9%2F0V7u8pjWmTeCZjVpG%2B9uCh4YQbx0ETmnEfoLhFyN61zcI9xDecxoCKpLQSu5i7pjJZDJpLPefm7KFkduCPZQwHz%2B5bBfpJCaRQvvtYxpmkdUfCTEqoVnemGFjU0mohqwuumWWbJMYEFfdriTz2raTQ5ggmH02LkeXFwMW7XeM%2Fh2Bj%2FsVn66CvqMK5XQIKXT8bywp4BNVsQ7psDQIWZVGbo%2Fp1xkjfWurlTOo18QjdosQxJlaXdswIGxcmpdARQJQnzZ%2FvVG%2F1BorUItm43Ci8qf6BXcEf6nVJEF%2FbRi1JWiaZyRuAjRuHSjxQij0%2Bz8suvXKhzg6BgspOCWs5073t0WCSGv2dTfhz4hySqcOOZTXl%2ByfrP%2BglrONjIT2mz%2Fwr0amCt2daUY8juxeB72j7thPWrWDtua5so8LaeqXqCeBJBI5HuDwIO%2FTEf1%2BSLIo%2FdmPxFRWFUcIGgvx3XfKqqK5EKtw7dyxVqfrPigBB8Hh4SPesImB%2FUWDHa7gsdRbdaLzQ9QkT%2BdxiTDYvZbDBjqkAWXcKR33j79Oo%2F27sBBsyHc8hom3KXmsMbpfWX8sUiJ26pWqDC4n%2BqBYosmLiQw9QVnLSZG7zsrzu8WWiFqyt4g%2F7393YHXX3FXz2RUvo1W9tgFZeP%2B%2F2YD5U8gKQAMcwQ%2BsNA5vkoUUV814tjcE1%2BSBN1TPUIKau4vhv4VfzEETyqrWIWdBsHyW7DmAukpzAw8lpT5HOgRoUcgoNREAn1TkJdiF&X-Amz-Signature=b0e9147978537bd3c63269cc782bb530891ddbde2a8471bba4de973b9234934b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RRMTKF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGhaHQE9Bu23pqaX6D9GJR7bSKp7SvUXvZCLncDQ%2B%2BMgIhAOJR0lfqZ8jXWx7e%2Fye1%2B9aOBOZRHTBXK8KL0L96MsloKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFtWLfPsWrgbsMLlAq3APkYUAa%2B1BV8KLDhFZ%2F0%2Bh55AWzugzfdvXPI7otCx6ezIFX9O0LpUHjFyz7sJvxPeRJO7dotxzO9SdOccQodlKBra%2Fg3igEmJGtnIrMxHeGw9%2F0V7u8pjWmTeCZjVpG%2B9uCh4YQbx0ETmnEfoLhFyN61zcI9xDecxoCKpLQSu5i7pjJZDJpLPefm7KFkduCPZQwHz%2B5bBfpJCaRQvvtYxpmkdUfCTEqoVnemGFjU0mohqwuumWWbJMYEFfdriTz2raTQ5ggmH02LkeXFwMW7XeM%2Fh2Bj%2FsVn66CvqMK5XQIKXT8bywp4BNVsQ7psDQIWZVGbo%2Fp1xkjfWurlTOo18QjdosQxJlaXdswIGxcmpdARQJQnzZ%2FvVG%2F1BorUItm43Ci8qf6BXcEf6nVJEF%2FbRi1JWiaZyRuAjRuHSjxQij0%2Bz8suvXKhzg6BgspOCWs5073t0WCSGv2dTfhz4hySqcOOZTXl%2ByfrP%2BglrONjIT2mz%2Fwr0amCt2daUY8juxeB72j7thPWrWDtua5so8LaeqXqCeBJBI5HuDwIO%2FTEf1%2BSLIo%2FdmPxFRWFUcIGgvx3XfKqqK5EKtw7dyxVqfrPigBB8Hh4SPesImB%2FUWDHa7gsdRbdaLzQ9QkT%2BdxiTDYvZbDBjqkAWXcKR33j79Oo%2F27sBBsyHc8hom3KXmsMbpfWX8sUiJ26pWqDC4n%2BqBYosmLiQw9QVnLSZG7zsrzu8WWiFqyt4g%2F7393YHXX3FXz2RUvo1W9tgFZeP%2B%2F2YD5U8gKQAMcwQ%2BsNA5vkoUUV814tjcE1%2BSBN1TPUIKau4vhv4VfzEETyqrWIWdBsHyW7DmAukpzAw8lpT5HOgRoUcgoNREAn1TkJdiF&X-Amz-Signature=807bb842426f1b82cfa5fc6e60ceee4969ac46e853dd62bace601fb728e9bf5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
