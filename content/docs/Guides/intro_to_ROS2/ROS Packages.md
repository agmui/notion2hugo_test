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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDEEOS5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4WIkj1BPOlxB7kwF%2FjGt9aGVdhuYf5LZV%2FDu5A%2Bt8wIhAKr7INnJ9W8lTREY%2FiUiEFhoiOBOdvDgZpCqlk3PXVU5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvnlZNiLybatKmki0q3AObdMlty%2FlZ7J76159nmo1gpAIcEm84W8kwWJcguRXaGxVHWpycbHt3NUufZeEYPGr2h144HalnFu2SY8m8q9lm4umZ2KDl4bNin6rc4mkMZmCRkadwj%2F9T6xA4U1tQ83SkdIhkVB64tOfdwtiSLysg54nHNdMZap8r89LQr0qbGSJmsTpK5Lfm6yglr%2BIwG%2FIWZ%2BjrpfW%2FNebLQdEldsPGeBXFa0n6PD4zdlupXnMmLcbD4hVNKvNYFeayRXT%2Fx5eNQn3zxCZC9JIY%2BeiFZ3S7Ijr2wrjiEYQaN%2F4qJfCa6Fx8gdXdeSWzp9moSQmHn0G39cz0qLF5iOgd1lcX5dUGVqvozeyXlGN5TMH%2BGrihvbtxt0Zf6PqfNATY9IbygVuOkXJZUu%2F%2FFAMiOXcGtzSsUthC9AYgKW27bspB%2Bql2vYCd6fEA%2FewgtTLpr6KM%2Fo6uokcH1x21nvrAJqRWthVTbLR%2FyBbTCenMj2U8O64D4VpvqJyXLRpw9e8oOPf5U0xmieAmZeEvb%2BzalIlSBO90CY9%2FocGMjJURxOZ5A%2BcNqi7XnKvWaMLqaKwbIJ6sxgBk6otOk8AaC6dZfpTdwuzhLrLcuzM3jjNi9%2BqpTC2h6dQTLyDSj83Oj4u3mzCH4%2FTABjqkAc5HbyyuGT4rXzd84pLFxrfAq4mVAnvBkZRbbSYb8ssswP2%2B%2BZ0QfA9qT8ANOlUiK0q6oUV8gUMquMsWTcKLaRRHFpAT1GcMsh848aF2tIt3hF%2BCqVMnNr9zZuVhyCktZfd1nLC7jMslxnEngTjJ35pSY8Xakx8ZpfMe86aGLkL53ANxp%2FMPChX92iETHokXGtpDfrQQLw9owBrDtrcOpHOVAnrE&X-Amz-Signature=4f0d301dcdb1539ed96e482bfd15701304f6160579dc756949a12f96f0a70d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDEEOS5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4WIkj1BPOlxB7kwF%2FjGt9aGVdhuYf5LZV%2FDu5A%2Bt8wIhAKr7INnJ9W8lTREY%2FiUiEFhoiOBOdvDgZpCqlk3PXVU5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvnlZNiLybatKmki0q3AObdMlty%2FlZ7J76159nmo1gpAIcEm84W8kwWJcguRXaGxVHWpycbHt3NUufZeEYPGr2h144HalnFu2SY8m8q9lm4umZ2KDl4bNin6rc4mkMZmCRkadwj%2F9T6xA4U1tQ83SkdIhkVB64tOfdwtiSLysg54nHNdMZap8r89LQr0qbGSJmsTpK5Lfm6yglr%2BIwG%2FIWZ%2BjrpfW%2FNebLQdEldsPGeBXFa0n6PD4zdlupXnMmLcbD4hVNKvNYFeayRXT%2Fx5eNQn3zxCZC9JIY%2BeiFZ3S7Ijr2wrjiEYQaN%2F4qJfCa6Fx8gdXdeSWzp9moSQmHn0G39cz0qLF5iOgd1lcX5dUGVqvozeyXlGN5TMH%2BGrihvbtxt0Zf6PqfNATY9IbygVuOkXJZUu%2F%2FFAMiOXcGtzSsUthC9AYgKW27bspB%2Bql2vYCd6fEA%2FewgtTLpr6KM%2Fo6uokcH1x21nvrAJqRWthVTbLR%2FyBbTCenMj2U8O64D4VpvqJyXLRpw9e8oOPf5U0xmieAmZeEvb%2BzalIlSBO90CY9%2FocGMjJURxOZ5A%2BcNqi7XnKvWaMLqaKwbIJ6sxgBk6otOk8AaC6dZfpTdwuzhLrLcuzM3jjNi9%2BqpTC2h6dQTLyDSj83Oj4u3mzCH4%2FTABjqkAc5HbyyuGT4rXzd84pLFxrfAq4mVAnvBkZRbbSYb8ssswP2%2B%2BZ0QfA9qT8ANOlUiK0q6oUV8gUMquMsWTcKLaRRHFpAT1GcMsh848aF2tIt3hF%2BCqVMnNr9zZuVhyCktZfd1nLC7jMslxnEngTjJ35pSY8Xakx8ZpfMe86aGLkL53ANxp%2FMPChX92iETHokXGtpDfrQQLw9owBrDtrcOpHOVAnrE&X-Amz-Signature=69b9e287021b440f0df0aeae07d88b0be1f7b94e39786949d45156292a25a485&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDEEOS5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4WIkj1BPOlxB7kwF%2FjGt9aGVdhuYf5LZV%2FDu5A%2Bt8wIhAKr7INnJ9W8lTREY%2FiUiEFhoiOBOdvDgZpCqlk3PXVU5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvnlZNiLybatKmki0q3AObdMlty%2FlZ7J76159nmo1gpAIcEm84W8kwWJcguRXaGxVHWpycbHt3NUufZeEYPGr2h144HalnFu2SY8m8q9lm4umZ2KDl4bNin6rc4mkMZmCRkadwj%2F9T6xA4U1tQ83SkdIhkVB64tOfdwtiSLysg54nHNdMZap8r89LQr0qbGSJmsTpK5Lfm6yglr%2BIwG%2FIWZ%2BjrpfW%2FNebLQdEldsPGeBXFa0n6PD4zdlupXnMmLcbD4hVNKvNYFeayRXT%2Fx5eNQn3zxCZC9JIY%2BeiFZ3S7Ijr2wrjiEYQaN%2F4qJfCa6Fx8gdXdeSWzp9moSQmHn0G39cz0qLF5iOgd1lcX5dUGVqvozeyXlGN5TMH%2BGrihvbtxt0Zf6PqfNATY9IbygVuOkXJZUu%2F%2FFAMiOXcGtzSsUthC9AYgKW27bspB%2Bql2vYCd6fEA%2FewgtTLpr6KM%2Fo6uokcH1x21nvrAJqRWthVTbLR%2FyBbTCenMj2U8O64D4VpvqJyXLRpw9e8oOPf5U0xmieAmZeEvb%2BzalIlSBO90CY9%2FocGMjJURxOZ5A%2BcNqi7XnKvWaMLqaKwbIJ6sxgBk6otOk8AaC6dZfpTdwuzhLrLcuzM3jjNi9%2BqpTC2h6dQTLyDSj83Oj4u3mzCH4%2FTABjqkAc5HbyyuGT4rXzd84pLFxrfAq4mVAnvBkZRbbSYb8ssswP2%2B%2BZ0QfA9qT8ANOlUiK0q6oUV8gUMquMsWTcKLaRRHFpAT1GcMsh848aF2tIt3hF%2BCqVMnNr9zZuVhyCktZfd1nLC7jMslxnEngTjJ35pSY8Xakx8ZpfMe86aGLkL53ANxp%2FMPChX92iETHokXGtpDfrQQLw9owBrDtrcOpHOVAnrE&X-Amz-Signature=8039d07db173b4fe4cb9e9f73efb1c4dd11ce29bf34833fb967f8c8bea137970&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDEEOS5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4WIkj1BPOlxB7kwF%2FjGt9aGVdhuYf5LZV%2FDu5A%2Bt8wIhAKr7INnJ9W8lTREY%2FiUiEFhoiOBOdvDgZpCqlk3PXVU5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvnlZNiLybatKmki0q3AObdMlty%2FlZ7J76159nmo1gpAIcEm84W8kwWJcguRXaGxVHWpycbHt3NUufZeEYPGr2h144HalnFu2SY8m8q9lm4umZ2KDl4bNin6rc4mkMZmCRkadwj%2F9T6xA4U1tQ83SkdIhkVB64tOfdwtiSLysg54nHNdMZap8r89LQr0qbGSJmsTpK5Lfm6yglr%2BIwG%2FIWZ%2BjrpfW%2FNebLQdEldsPGeBXFa0n6PD4zdlupXnMmLcbD4hVNKvNYFeayRXT%2Fx5eNQn3zxCZC9JIY%2BeiFZ3S7Ijr2wrjiEYQaN%2F4qJfCa6Fx8gdXdeSWzp9moSQmHn0G39cz0qLF5iOgd1lcX5dUGVqvozeyXlGN5TMH%2BGrihvbtxt0Zf6PqfNATY9IbygVuOkXJZUu%2F%2FFAMiOXcGtzSsUthC9AYgKW27bspB%2Bql2vYCd6fEA%2FewgtTLpr6KM%2Fo6uokcH1x21nvrAJqRWthVTbLR%2FyBbTCenMj2U8O64D4VpvqJyXLRpw9e8oOPf5U0xmieAmZeEvb%2BzalIlSBO90CY9%2FocGMjJURxOZ5A%2BcNqi7XnKvWaMLqaKwbIJ6sxgBk6otOk8AaC6dZfpTdwuzhLrLcuzM3jjNi9%2BqpTC2h6dQTLyDSj83Oj4u3mzCH4%2FTABjqkAc5HbyyuGT4rXzd84pLFxrfAq4mVAnvBkZRbbSYb8ssswP2%2B%2BZ0QfA9qT8ANOlUiK0q6oUV8gUMquMsWTcKLaRRHFpAT1GcMsh848aF2tIt3hF%2BCqVMnNr9zZuVhyCktZfd1nLC7jMslxnEngTjJ35pSY8Xakx8ZpfMe86aGLkL53ANxp%2FMPChX92iETHokXGtpDfrQQLw9owBrDtrcOpHOVAnrE&X-Amz-Signature=ee2bc71209aecb49b54f904ff814cff866532b61e666a06ed09a6df18bfc88f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDEEOS5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4WIkj1BPOlxB7kwF%2FjGt9aGVdhuYf5LZV%2FDu5A%2Bt8wIhAKr7INnJ9W8lTREY%2FiUiEFhoiOBOdvDgZpCqlk3PXVU5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvnlZNiLybatKmki0q3AObdMlty%2FlZ7J76159nmo1gpAIcEm84W8kwWJcguRXaGxVHWpycbHt3NUufZeEYPGr2h144HalnFu2SY8m8q9lm4umZ2KDl4bNin6rc4mkMZmCRkadwj%2F9T6xA4U1tQ83SkdIhkVB64tOfdwtiSLysg54nHNdMZap8r89LQr0qbGSJmsTpK5Lfm6yglr%2BIwG%2FIWZ%2BjrpfW%2FNebLQdEldsPGeBXFa0n6PD4zdlupXnMmLcbD4hVNKvNYFeayRXT%2Fx5eNQn3zxCZC9JIY%2BeiFZ3S7Ijr2wrjiEYQaN%2F4qJfCa6Fx8gdXdeSWzp9moSQmHn0G39cz0qLF5iOgd1lcX5dUGVqvozeyXlGN5TMH%2BGrihvbtxt0Zf6PqfNATY9IbygVuOkXJZUu%2F%2FFAMiOXcGtzSsUthC9AYgKW27bspB%2Bql2vYCd6fEA%2FewgtTLpr6KM%2Fo6uokcH1x21nvrAJqRWthVTbLR%2FyBbTCenMj2U8O64D4VpvqJyXLRpw9e8oOPf5U0xmieAmZeEvb%2BzalIlSBO90CY9%2FocGMjJURxOZ5A%2BcNqi7XnKvWaMLqaKwbIJ6sxgBk6otOk8AaC6dZfpTdwuzhLrLcuzM3jjNi9%2BqpTC2h6dQTLyDSj83Oj4u3mzCH4%2FTABjqkAc5HbyyuGT4rXzd84pLFxrfAq4mVAnvBkZRbbSYb8ssswP2%2B%2BZ0QfA9qT8ANOlUiK0q6oUV8gUMquMsWTcKLaRRHFpAT1GcMsh848aF2tIt3hF%2BCqVMnNr9zZuVhyCktZfd1nLC7jMslxnEngTjJ35pSY8Xakx8ZpfMe86aGLkL53ANxp%2FMPChX92iETHokXGtpDfrQQLw9owBrDtrcOpHOVAnrE&X-Amz-Signature=a988b39f3e8fcc0c3337eef2ad5c5b024788b99f9c86272ef40a740982562f97&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDEEOS5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4WIkj1BPOlxB7kwF%2FjGt9aGVdhuYf5LZV%2FDu5A%2Bt8wIhAKr7INnJ9W8lTREY%2FiUiEFhoiOBOdvDgZpCqlk3PXVU5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvnlZNiLybatKmki0q3AObdMlty%2FlZ7J76159nmo1gpAIcEm84W8kwWJcguRXaGxVHWpycbHt3NUufZeEYPGr2h144HalnFu2SY8m8q9lm4umZ2KDl4bNin6rc4mkMZmCRkadwj%2F9T6xA4U1tQ83SkdIhkVB64tOfdwtiSLysg54nHNdMZap8r89LQr0qbGSJmsTpK5Lfm6yglr%2BIwG%2FIWZ%2BjrpfW%2FNebLQdEldsPGeBXFa0n6PD4zdlupXnMmLcbD4hVNKvNYFeayRXT%2Fx5eNQn3zxCZC9JIY%2BeiFZ3S7Ijr2wrjiEYQaN%2F4qJfCa6Fx8gdXdeSWzp9moSQmHn0G39cz0qLF5iOgd1lcX5dUGVqvozeyXlGN5TMH%2BGrihvbtxt0Zf6PqfNATY9IbygVuOkXJZUu%2F%2FFAMiOXcGtzSsUthC9AYgKW27bspB%2Bql2vYCd6fEA%2FewgtTLpr6KM%2Fo6uokcH1x21nvrAJqRWthVTbLR%2FyBbTCenMj2U8O64D4VpvqJyXLRpw9e8oOPf5U0xmieAmZeEvb%2BzalIlSBO90CY9%2FocGMjJURxOZ5A%2BcNqi7XnKvWaMLqaKwbIJ6sxgBk6otOk8AaC6dZfpTdwuzhLrLcuzM3jjNi9%2BqpTC2h6dQTLyDSj83Oj4u3mzCH4%2FTABjqkAc5HbyyuGT4rXzd84pLFxrfAq4mVAnvBkZRbbSYb8ssswP2%2B%2BZ0QfA9qT8ANOlUiK0q6oUV8gUMquMsWTcKLaRRHFpAT1GcMsh848aF2tIt3hF%2BCqVMnNr9zZuVhyCktZfd1nLC7jMslxnEngTjJ35pSY8Xakx8ZpfMe86aGLkL53ANxp%2FMPChX92iETHokXGtpDfrQQLw9owBrDtrcOpHOVAnrE&X-Amz-Signature=68f979cb9e29ce1a08415e4c5739fadc21c2260840c584180a098e9d743a093b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDEEOS5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4WIkj1BPOlxB7kwF%2FjGt9aGVdhuYf5LZV%2FDu5A%2Bt8wIhAKr7INnJ9W8lTREY%2FiUiEFhoiOBOdvDgZpCqlk3PXVU5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvnlZNiLybatKmki0q3AObdMlty%2FlZ7J76159nmo1gpAIcEm84W8kwWJcguRXaGxVHWpycbHt3NUufZeEYPGr2h144HalnFu2SY8m8q9lm4umZ2KDl4bNin6rc4mkMZmCRkadwj%2F9T6xA4U1tQ83SkdIhkVB64tOfdwtiSLysg54nHNdMZap8r89LQr0qbGSJmsTpK5Lfm6yglr%2BIwG%2FIWZ%2BjrpfW%2FNebLQdEldsPGeBXFa0n6PD4zdlupXnMmLcbD4hVNKvNYFeayRXT%2Fx5eNQn3zxCZC9JIY%2BeiFZ3S7Ijr2wrjiEYQaN%2F4qJfCa6Fx8gdXdeSWzp9moSQmHn0G39cz0qLF5iOgd1lcX5dUGVqvozeyXlGN5TMH%2BGrihvbtxt0Zf6PqfNATY9IbygVuOkXJZUu%2F%2FFAMiOXcGtzSsUthC9AYgKW27bspB%2Bql2vYCd6fEA%2FewgtTLpr6KM%2Fo6uokcH1x21nvrAJqRWthVTbLR%2FyBbTCenMj2U8O64D4VpvqJyXLRpw9e8oOPf5U0xmieAmZeEvb%2BzalIlSBO90CY9%2FocGMjJURxOZ5A%2BcNqi7XnKvWaMLqaKwbIJ6sxgBk6otOk8AaC6dZfpTdwuzhLrLcuzM3jjNi9%2BqpTC2h6dQTLyDSj83Oj4u3mzCH4%2FTABjqkAc5HbyyuGT4rXzd84pLFxrfAq4mVAnvBkZRbbSYb8ssswP2%2B%2BZ0QfA9qT8ANOlUiK0q6oUV8gUMquMsWTcKLaRRHFpAT1GcMsh848aF2tIt3hF%2BCqVMnNr9zZuVhyCktZfd1nLC7jMslxnEngTjJ35pSY8Xakx8ZpfMe86aGLkL53ANxp%2FMPChX92iETHokXGtpDfrQQLw9owBrDtrcOpHOVAnrE&X-Amz-Signature=d444ba1e2c1420663d9fa21fc071d374b79f3cd9cd52cbd08425fecce7da7fee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
