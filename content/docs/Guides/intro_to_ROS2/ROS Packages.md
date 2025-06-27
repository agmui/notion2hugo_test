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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3653DE3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA8hEnEwkDzIayvWUa5U5fXju5bMV2bMjrT0AZEndGVXAiEA0x%2ButHO2S37CaKf6sRBAvRhvtbXabPGxLYFYe0XxxSMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGsN%2BrQAtLeuSwdIHircA6jKciikDT8IcmfiZo5OAk0f2VQJLn0ee4l3fm1e2kd30%2FMRJBcJgCQlu0tDQ%2FlhPX85y90T8LyVyVC1QCusfB5uOWta3aoZOMLq2mVwxtluxlUCG1PisQBOAHF68dSTVamKIj7F86OB9j1Wqjir8u0EYa%2FIfJhcJ9WFQImRI9v9bwWRa92vGlXY5wdUG9kn6SbVJhKrwoReqIfiDu7wFOiUGAwNHWKpQh3mnL%2Fn6JNCxGzO7%2BsJHF8O1peGqkybEg9r3s5UtW87KFaZPT9eULycO%2Bg50wGo7oz%2Bor8BqtX0E30x1GceAOgbRsho7AT%2BWkynkv2bu2PG8IdwTA7Hsjvf4tHlh6kelOfwYZ%2ByKRCzzPM1yAUuka9hyfRlPXA50Zk7nGjyaVup0Jt%2FZtlS9yJra%2BpIYkGKe9Oe8%2BK2GFyUdEJ5%2B17heoX8WCQN57cMlLCU39t85%2FzwtQY8ZLE9qiV0%2Fi1m%2FAX5R204XDhOMrz4LnXIOAQHymSLDaKb2VoA%2FwlTfsTYokmSIRyJ678BxkyihG6TgwjJ8pyqNcftJ1ysmUY4c4%2FK9ZS7aLnVIT9ucSHldLVl%2BptmJCcFrLgDRrUDqvdfH4Mp1yVKVXyVE7MxlvdWauGMz8AuFFBjMPvL%2BsIGOqUBmtz9FD0FIZ62lkvJnCNZtLDWlr4LGPf2I8%2BGioHR5NGKLCXjB87V3hMS%2BHSlF6feJBf8IdBNiZuq0t38fqu0UZpwyqftUBWToJNXIR4xTfTFX%2BxKOUKsn7TFG8OYUiaEbSlMNPhSv30uY6CfS0ts%2BUA3Tlo1K806JOupSCxYl%2BjflyE1kyuh%2FjpAenUqWzaNOS1QR%2Bk%2F1hwEDz7vy4Nu5XEJ%2BUSO&X-Amz-Signature=c6c89ebfd300bb8f0e421cdbe073834eaae76f4b2399c001bc95cbaf41201b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3653DE3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA8hEnEwkDzIayvWUa5U5fXju5bMV2bMjrT0AZEndGVXAiEA0x%2ButHO2S37CaKf6sRBAvRhvtbXabPGxLYFYe0XxxSMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGsN%2BrQAtLeuSwdIHircA6jKciikDT8IcmfiZo5OAk0f2VQJLn0ee4l3fm1e2kd30%2FMRJBcJgCQlu0tDQ%2FlhPX85y90T8LyVyVC1QCusfB5uOWta3aoZOMLq2mVwxtluxlUCG1PisQBOAHF68dSTVamKIj7F86OB9j1Wqjir8u0EYa%2FIfJhcJ9WFQImRI9v9bwWRa92vGlXY5wdUG9kn6SbVJhKrwoReqIfiDu7wFOiUGAwNHWKpQh3mnL%2Fn6JNCxGzO7%2BsJHF8O1peGqkybEg9r3s5UtW87KFaZPT9eULycO%2Bg50wGo7oz%2Bor8BqtX0E30x1GceAOgbRsho7AT%2BWkynkv2bu2PG8IdwTA7Hsjvf4tHlh6kelOfwYZ%2ByKRCzzPM1yAUuka9hyfRlPXA50Zk7nGjyaVup0Jt%2FZtlS9yJra%2BpIYkGKe9Oe8%2BK2GFyUdEJ5%2B17heoX8WCQN57cMlLCU39t85%2FzwtQY8ZLE9qiV0%2Fi1m%2FAX5R204XDhOMrz4LnXIOAQHymSLDaKb2VoA%2FwlTfsTYokmSIRyJ678BxkyihG6TgwjJ8pyqNcftJ1ysmUY4c4%2FK9ZS7aLnVIT9ucSHldLVl%2BptmJCcFrLgDRrUDqvdfH4Mp1yVKVXyVE7MxlvdWauGMz8AuFFBjMPvL%2BsIGOqUBmtz9FD0FIZ62lkvJnCNZtLDWlr4LGPf2I8%2BGioHR5NGKLCXjB87V3hMS%2BHSlF6feJBf8IdBNiZuq0t38fqu0UZpwyqftUBWToJNXIR4xTfTFX%2BxKOUKsn7TFG8OYUiaEbSlMNPhSv30uY6CfS0ts%2BUA3Tlo1K806JOupSCxYl%2BjflyE1kyuh%2FjpAenUqWzaNOS1QR%2Bk%2F1hwEDz7vy4Nu5XEJ%2BUSO&X-Amz-Signature=91445e54d7c7a23fdee74af707401d4e88b88528299df9ae38ce071865c9aa46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3653DE3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA8hEnEwkDzIayvWUa5U5fXju5bMV2bMjrT0AZEndGVXAiEA0x%2ButHO2S37CaKf6sRBAvRhvtbXabPGxLYFYe0XxxSMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGsN%2BrQAtLeuSwdIHircA6jKciikDT8IcmfiZo5OAk0f2VQJLn0ee4l3fm1e2kd30%2FMRJBcJgCQlu0tDQ%2FlhPX85y90T8LyVyVC1QCusfB5uOWta3aoZOMLq2mVwxtluxlUCG1PisQBOAHF68dSTVamKIj7F86OB9j1Wqjir8u0EYa%2FIfJhcJ9WFQImRI9v9bwWRa92vGlXY5wdUG9kn6SbVJhKrwoReqIfiDu7wFOiUGAwNHWKpQh3mnL%2Fn6JNCxGzO7%2BsJHF8O1peGqkybEg9r3s5UtW87KFaZPT9eULycO%2Bg50wGo7oz%2Bor8BqtX0E30x1GceAOgbRsho7AT%2BWkynkv2bu2PG8IdwTA7Hsjvf4tHlh6kelOfwYZ%2ByKRCzzPM1yAUuka9hyfRlPXA50Zk7nGjyaVup0Jt%2FZtlS9yJra%2BpIYkGKe9Oe8%2BK2GFyUdEJ5%2B17heoX8WCQN57cMlLCU39t85%2FzwtQY8ZLE9qiV0%2Fi1m%2FAX5R204XDhOMrz4LnXIOAQHymSLDaKb2VoA%2FwlTfsTYokmSIRyJ678BxkyihG6TgwjJ8pyqNcftJ1ysmUY4c4%2FK9ZS7aLnVIT9ucSHldLVl%2BptmJCcFrLgDRrUDqvdfH4Mp1yVKVXyVE7MxlvdWauGMz8AuFFBjMPvL%2BsIGOqUBmtz9FD0FIZ62lkvJnCNZtLDWlr4LGPf2I8%2BGioHR5NGKLCXjB87V3hMS%2BHSlF6feJBf8IdBNiZuq0t38fqu0UZpwyqftUBWToJNXIR4xTfTFX%2BxKOUKsn7TFG8OYUiaEbSlMNPhSv30uY6CfS0ts%2BUA3Tlo1K806JOupSCxYl%2BjflyE1kyuh%2FjpAenUqWzaNOS1QR%2Bk%2F1hwEDz7vy4Nu5XEJ%2BUSO&X-Amz-Signature=3e1da9478240de8d45b4090c045a6e8f93b8bd92f66fc6e889d771a7113bbf64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3653DE3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA8hEnEwkDzIayvWUa5U5fXju5bMV2bMjrT0AZEndGVXAiEA0x%2ButHO2S37CaKf6sRBAvRhvtbXabPGxLYFYe0XxxSMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGsN%2BrQAtLeuSwdIHircA6jKciikDT8IcmfiZo5OAk0f2VQJLn0ee4l3fm1e2kd30%2FMRJBcJgCQlu0tDQ%2FlhPX85y90T8LyVyVC1QCusfB5uOWta3aoZOMLq2mVwxtluxlUCG1PisQBOAHF68dSTVamKIj7F86OB9j1Wqjir8u0EYa%2FIfJhcJ9WFQImRI9v9bwWRa92vGlXY5wdUG9kn6SbVJhKrwoReqIfiDu7wFOiUGAwNHWKpQh3mnL%2Fn6JNCxGzO7%2BsJHF8O1peGqkybEg9r3s5UtW87KFaZPT9eULycO%2Bg50wGo7oz%2Bor8BqtX0E30x1GceAOgbRsho7AT%2BWkynkv2bu2PG8IdwTA7Hsjvf4tHlh6kelOfwYZ%2ByKRCzzPM1yAUuka9hyfRlPXA50Zk7nGjyaVup0Jt%2FZtlS9yJra%2BpIYkGKe9Oe8%2BK2GFyUdEJ5%2B17heoX8WCQN57cMlLCU39t85%2FzwtQY8ZLE9qiV0%2Fi1m%2FAX5R204XDhOMrz4LnXIOAQHymSLDaKb2VoA%2FwlTfsTYokmSIRyJ678BxkyihG6TgwjJ8pyqNcftJ1ysmUY4c4%2FK9ZS7aLnVIT9ucSHldLVl%2BptmJCcFrLgDRrUDqvdfH4Mp1yVKVXyVE7MxlvdWauGMz8AuFFBjMPvL%2BsIGOqUBmtz9FD0FIZ62lkvJnCNZtLDWlr4LGPf2I8%2BGioHR5NGKLCXjB87V3hMS%2BHSlF6feJBf8IdBNiZuq0t38fqu0UZpwyqftUBWToJNXIR4xTfTFX%2BxKOUKsn7TFG8OYUiaEbSlMNPhSv30uY6CfS0ts%2BUA3Tlo1K806JOupSCxYl%2BjflyE1kyuh%2FjpAenUqWzaNOS1QR%2Bk%2F1hwEDz7vy4Nu5XEJ%2BUSO&X-Amz-Signature=941ac764d815679988066ac2d222f9f3fab8cbc148a51085454f9cdc641711fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3653DE3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA8hEnEwkDzIayvWUa5U5fXju5bMV2bMjrT0AZEndGVXAiEA0x%2ButHO2S37CaKf6sRBAvRhvtbXabPGxLYFYe0XxxSMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGsN%2BrQAtLeuSwdIHircA6jKciikDT8IcmfiZo5OAk0f2VQJLn0ee4l3fm1e2kd30%2FMRJBcJgCQlu0tDQ%2FlhPX85y90T8LyVyVC1QCusfB5uOWta3aoZOMLq2mVwxtluxlUCG1PisQBOAHF68dSTVamKIj7F86OB9j1Wqjir8u0EYa%2FIfJhcJ9WFQImRI9v9bwWRa92vGlXY5wdUG9kn6SbVJhKrwoReqIfiDu7wFOiUGAwNHWKpQh3mnL%2Fn6JNCxGzO7%2BsJHF8O1peGqkybEg9r3s5UtW87KFaZPT9eULycO%2Bg50wGo7oz%2Bor8BqtX0E30x1GceAOgbRsho7AT%2BWkynkv2bu2PG8IdwTA7Hsjvf4tHlh6kelOfwYZ%2ByKRCzzPM1yAUuka9hyfRlPXA50Zk7nGjyaVup0Jt%2FZtlS9yJra%2BpIYkGKe9Oe8%2BK2GFyUdEJ5%2B17heoX8WCQN57cMlLCU39t85%2FzwtQY8ZLE9qiV0%2Fi1m%2FAX5R204XDhOMrz4LnXIOAQHymSLDaKb2VoA%2FwlTfsTYokmSIRyJ678BxkyihG6TgwjJ8pyqNcftJ1ysmUY4c4%2FK9ZS7aLnVIT9ucSHldLVl%2BptmJCcFrLgDRrUDqvdfH4Mp1yVKVXyVE7MxlvdWauGMz8AuFFBjMPvL%2BsIGOqUBmtz9FD0FIZ62lkvJnCNZtLDWlr4LGPf2I8%2BGioHR5NGKLCXjB87V3hMS%2BHSlF6feJBf8IdBNiZuq0t38fqu0UZpwyqftUBWToJNXIR4xTfTFX%2BxKOUKsn7TFG8OYUiaEbSlMNPhSv30uY6CfS0ts%2BUA3Tlo1K806JOupSCxYl%2BjflyE1kyuh%2FjpAenUqWzaNOS1QR%2Bk%2F1hwEDz7vy4Nu5XEJ%2BUSO&X-Amz-Signature=971639f4dff2ce650994db9604c6e95a32d3a2ddea553ab90df1931a914d3654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3653DE3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA8hEnEwkDzIayvWUa5U5fXju5bMV2bMjrT0AZEndGVXAiEA0x%2ButHO2S37CaKf6sRBAvRhvtbXabPGxLYFYe0XxxSMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGsN%2BrQAtLeuSwdIHircA6jKciikDT8IcmfiZo5OAk0f2VQJLn0ee4l3fm1e2kd30%2FMRJBcJgCQlu0tDQ%2FlhPX85y90T8LyVyVC1QCusfB5uOWta3aoZOMLq2mVwxtluxlUCG1PisQBOAHF68dSTVamKIj7F86OB9j1Wqjir8u0EYa%2FIfJhcJ9WFQImRI9v9bwWRa92vGlXY5wdUG9kn6SbVJhKrwoReqIfiDu7wFOiUGAwNHWKpQh3mnL%2Fn6JNCxGzO7%2BsJHF8O1peGqkybEg9r3s5UtW87KFaZPT9eULycO%2Bg50wGo7oz%2Bor8BqtX0E30x1GceAOgbRsho7AT%2BWkynkv2bu2PG8IdwTA7Hsjvf4tHlh6kelOfwYZ%2ByKRCzzPM1yAUuka9hyfRlPXA50Zk7nGjyaVup0Jt%2FZtlS9yJra%2BpIYkGKe9Oe8%2BK2GFyUdEJ5%2B17heoX8WCQN57cMlLCU39t85%2FzwtQY8ZLE9qiV0%2Fi1m%2FAX5R204XDhOMrz4LnXIOAQHymSLDaKb2VoA%2FwlTfsTYokmSIRyJ678BxkyihG6TgwjJ8pyqNcftJ1ysmUY4c4%2FK9ZS7aLnVIT9ucSHldLVl%2BptmJCcFrLgDRrUDqvdfH4Mp1yVKVXyVE7MxlvdWauGMz8AuFFBjMPvL%2BsIGOqUBmtz9FD0FIZ62lkvJnCNZtLDWlr4LGPf2I8%2BGioHR5NGKLCXjB87V3hMS%2BHSlF6feJBf8IdBNiZuq0t38fqu0UZpwyqftUBWToJNXIR4xTfTFX%2BxKOUKsn7TFG8OYUiaEbSlMNPhSv30uY6CfS0ts%2BUA3Tlo1K806JOupSCxYl%2BjflyE1kyuh%2FjpAenUqWzaNOS1QR%2Bk%2F1hwEDz7vy4Nu5XEJ%2BUSO&X-Amz-Signature=f61ddbd50a69234d435fc79bf37f34ae11e1477e4f43d95892297aeaee57b5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3653DE3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA8hEnEwkDzIayvWUa5U5fXju5bMV2bMjrT0AZEndGVXAiEA0x%2ButHO2S37CaKf6sRBAvRhvtbXabPGxLYFYe0XxxSMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGsN%2BrQAtLeuSwdIHircA6jKciikDT8IcmfiZo5OAk0f2VQJLn0ee4l3fm1e2kd30%2FMRJBcJgCQlu0tDQ%2FlhPX85y90T8LyVyVC1QCusfB5uOWta3aoZOMLq2mVwxtluxlUCG1PisQBOAHF68dSTVamKIj7F86OB9j1Wqjir8u0EYa%2FIfJhcJ9WFQImRI9v9bwWRa92vGlXY5wdUG9kn6SbVJhKrwoReqIfiDu7wFOiUGAwNHWKpQh3mnL%2Fn6JNCxGzO7%2BsJHF8O1peGqkybEg9r3s5UtW87KFaZPT9eULycO%2Bg50wGo7oz%2Bor8BqtX0E30x1GceAOgbRsho7AT%2BWkynkv2bu2PG8IdwTA7Hsjvf4tHlh6kelOfwYZ%2ByKRCzzPM1yAUuka9hyfRlPXA50Zk7nGjyaVup0Jt%2FZtlS9yJra%2BpIYkGKe9Oe8%2BK2GFyUdEJ5%2B17heoX8WCQN57cMlLCU39t85%2FzwtQY8ZLE9qiV0%2Fi1m%2FAX5R204XDhOMrz4LnXIOAQHymSLDaKb2VoA%2FwlTfsTYokmSIRyJ678BxkyihG6TgwjJ8pyqNcftJ1ysmUY4c4%2FK9ZS7aLnVIT9ucSHldLVl%2BptmJCcFrLgDRrUDqvdfH4Mp1yVKVXyVE7MxlvdWauGMz8AuFFBjMPvL%2BsIGOqUBmtz9FD0FIZ62lkvJnCNZtLDWlr4LGPf2I8%2BGioHR5NGKLCXjB87V3hMS%2BHSlF6feJBf8IdBNiZuq0t38fqu0UZpwyqftUBWToJNXIR4xTfTFX%2BxKOUKsn7TFG8OYUiaEbSlMNPhSv30uY6CfS0ts%2BUA3Tlo1K806JOupSCxYl%2BjflyE1kyuh%2FjpAenUqWzaNOS1QR%2Bk%2F1hwEDz7vy4Nu5XEJ%2BUSO&X-Amz-Signature=6e5cdbd39f02301f514b48ad1f23e5814c830f904c45137d9c2c096b30d1cdcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
