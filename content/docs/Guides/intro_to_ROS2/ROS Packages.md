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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NTYF67%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIER4hAL8ZT9OSs5DMs8bwSRLtUiS5l%2FZFAvr7EJvMDCrAiB%2BiAJV7P%2FKhZcJXjaf%2FTGKhhT6CQmv3lndN2MirBoL5yqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhYdg%2B6kGhQCUxn0KtwD23Tn2Ud6KnlK8IEIHF2AjJ4K9erCEspggUcrg5VntaiNuKaqrAgjEKiYiSsTbFPaAAsQjh5EC5qlGeKVnA2m3mia1gaqK744u4hthMtVBYOyEgSvKXKzVOqa7IU%2BFHQi03DU4hDujNwVxtaNamWoZD7e4kPeP6HoIIla5uvS5SDxhnBLzGCnmrwUQ4TePJ%2BffokyQPBxGwF%2Fdje%2FHwOjYJR4QXIy9vHJagmzxpNNhMyYLCSzAFD1btoI3wzMeuhyHskl%2F2nyPjZzLlnIlkp%2Bj%2BPBlxxmb2gbzBVBYISwtKN0yRx7qdGiAFRvrUliuXC0O0Zwxn9az7WMjsnKFUuC0k7PfGt7efYiAMDZdyF0uoG6uMGDjRGLaSOfYSrTcHIRAyeqi%2FIoKxNTAv8%2BBYg%2FLV6uRihfBWjjmh2iNjZPGk5ZIeYqLdkOKrL5Y4g4C12mmWdSnvrZ8WnFjXjgNnt%2FeMXB7fgkU3YRrMCElk9hRnzSbTreeJrx1X8dYO86NEHI0L7mWpUJlX%2BBkT%2FRx%2B7S0FZk4iThkZPp7m8BQQvm5k2h70RLdKRhHCg2Pe%2BdZgm8S%2FWysTcCGHrHEKcMxoT5vzwMItaCAqCjbCnia5B%2B5cpyDsPNeHkk3PI5GQMw%2F5GnvQY6pgEDh8ALg9m3QWj0iU5lo29zRear0MpExXsShGwdSCkhHjAHDdD%2BL1hRW7AiPysaagSwHo%2Fnz24KMnQB2mqpBbylRnnhso1REzV66hL46DkwgEVDHphudQHUkTOGKXm18lggr4nbmgEzvnYu5ge%2F3JadC%2B7W44EItdWp5iLE9V4Z%2Bv4HA09TGzXOlJ4CGvWm8SAZdVbb5A0diaEyz7J9quw0mi2kUIYn&X-Amz-Signature=7c35a880d681f82a3a7e8d1e2c73ce3e2452bd02030cfddef96a429e03a18bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NTYF67%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIER4hAL8ZT9OSs5DMs8bwSRLtUiS5l%2FZFAvr7EJvMDCrAiB%2BiAJV7P%2FKhZcJXjaf%2FTGKhhT6CQmv3lndN2MirBoL5yqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhYdg%2B6kGhQCUxn0KtwD23Tn2Ud6KnlK8IEIHF2AjJ4K9erCEspggUcrg5VntaiNuKaqrAgjEKiYiSsTbFPaAAsQjh5EC5qlGeKVnA2m3mia1gaqK744u4hthMtVBYOyEgSvKXKzVOqa7IU%2BFHQi03DU4hDujNwVxtaNamWoZD7e4kPeP6HoIIla5uvS5SDxhnBLzGCnmrwUQ4TePJ%2BffokyQPBxGwF%2Fdje%2FHwOjYJR4QXIy9vHJagmzxpNNhMyYLCSzAFD1btoI3wzMeuhyHskl%2F2nyPjZzLlnIlkp%2Bj%2BPBlxxmb2gbzBVBYISwtKN0yRx7qdGiAFRvrUliuXC0O0Zwxn9az7WMjsnKFUuC0k7PfGt7efYiAMDZdyF0uoG6uMGDjRGLaSOfYSrTcHIRAyeqi%2FIoKxNTAv8%2BBYg%2FLV6uRihfBWjjmh2iNjZPGk5ZIeYqLdkOKrL5Y4g4C12mmWdSnvrZ8WnFjXjgNnt%2FeMXB7fgkU3YRrMCElk9hRnzSbTreeJrx1X8dYO86NEHI0L7mWpUJlX%2BBkT%2FRx%2B7S0FZk4iThkZPp7m8BQQvm5k2h70RLdKRhHCg2Pe%2BdZgm8S%2FWysTcCGHrHEKcMxoT5vzwMItaCAqCjbCnia5B%2B5cpyDsPNeHkk3PI5GQMw%2F5GnvQY6pgEDh8ALg9m3QWj0iU5lo29zRear0MpExXsShGwdSCkhHjAHDdD%2BL1hRW7AiPysaagSwHo%2Fnz24KMnQB2mqpBbylRnnhso1REzV66hL46DkwgEVDHphudQHUkTOGKXm18lggr4nbmgEzvnYu5ge%2F3JadC%2B7W44EItdWp5iLE9V4Z%2Bv4HA09TGzXOlJ4CGvWm8SAZdVbb5A0diaEyz7J9quw0mi2kUIYn&X-Amz-Signature=995183d311070b341676de988bb71e81ccb28876e281aa4e01d3e386d11af55f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NTYF67%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIER4hAL8ZT9OSs5DMs8bwSRLtUiS5l%2FZFAvr7EJvMDCrAiB%2BiAJV7P%2FKhZcJXjaf%2FTGKhhT6CQmv3lndN2MirBoL5yqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhYdg%2B6kGhQCUxn0KtwD23Tn2Ud6KnlK8IEIHF2AjJ4K9erCEspggUcrg5VntaiNuKaqrAgjEKiYiSsTbFPaAAsQjh5EC5qlGeKVnA2m3mia1gaqK744u4hthMtVBYOyEgSvKXKzVOqa7IU%2BFHQi03DU4hDujNwVxtaNamWoZD7e4kPeP6HoIIla5uvS5SDxhnBLzGCnmrwUQ4TePJ%2BffokyQPBxGwF%2Fdje%2FHwOjYJR4QXIy9vHJagmzxpNNhMyYLCSzAFD1btoI3wzMeuhyHskl%2F2nyPjZzLlnIlkp%2Bj%2BPBlxxmb2gbzBVBYISwtKN0yRx7qdGiAFRvrUliuXC0O0Zwxn9az7WMjsnKFUuC0k7PfGt7efYiAMDZdyF0uoG6uMGDjRGLaSOfYSrTcHIRAyeqi%2FIoKxNTAv8%2BBYg%2FLV6uRihfBWjjmh2iNjZPGk5ZIeYqLdkOKrL5Y4g4C12mmWdSnvrZ8WnFjXjgNnt%2FeMXB7fgkU3YRrMCElk9hRnzSbTreeJrx1X8dYO86NEHI0L7mWpUJlX%2BBkT%2FRx%2B7S0FZk4iThkZPp7m8BQQvm5k2h70RLdKRhHCg2Pe%2BdZgm8S%2FWysTcCGHrHEKcMxoT5vzwMItaCAqCjbCnia5B%2B5cpyDsPNeHkk3PI5GQMw%2F5GnvQY6pgEDh8ALg9m3QWj0iU5lo29zRear0MpExXsShGwdSCkhHjAHDdD%2BL1hRW7AiPysaagSwHo%2Fnz24KMnQB2mqpBbylRnnhso1REzV66hL46DkwgEVDHphudQHUkTOGKXm18lggr4nbmgEzvnYu5ge%2F3JadC%2B7W44EItdWp5iLE9V4Z%2Bv4HA09TGzXOlJ4CGvWm8SAZdVbb5A0diaEyz7J9quw0mi2kUIYn&X-Amz-Signature=4064c7b8f3e7efb3d9a04aeabe9001dcbc9b3abfae77671d1b4becf9772dc32e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NTYF67%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIER4hAL8ZT9OSs5DMs8bwSRLtUiS5l%2FZFAvr7EJvMDCrAiB%2BiAJV7P%2FKhZcJXjaf%2FTGKhhT6CQmv3lndN2MirBoL5yqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhYdg%2B6kGhQCUxn0KtwD23Tn2Ud6KnlK8IEIHF2AjJ4K9erCEspggUcrg5VntaiNuKaqrAgjEKiYiSsTbFPaAAsQjh5EC5qlGeKVnA2m3mia1gaqK744u4hthMtVBYOyEgSvKXKzVOqa7IU%2BFHQi03DU4hDujNwVxtaNamWoZD7e4kPeP6HoIIla5uvS5SDxhnBLzGCnmrwUQ4TePJ%2BffokyQPBxGwF%2Fdje%2FHwOjYJR4QXIy9vHJagmzxpNNhMyYLCSzAFD1btoI3wzMeuhyHskl%2F2nyPjZzLlnIlkp%2Bj%2BPBlxxmb2gbzBVBYISwtKN0yRx7qdGiAFRvrUliuXC0O0Zwxn9az7WMjsnKFUuC0k7PfGt7efYiAMDZdyF0uoG6uMGDjRGLaSOfYSrTcHIRAyeqi%2FIoKxNTAv8%2BBYg%2FLV6uRihfBWjjmh2iNjZPGk5ZIeYqLdkOKrL5Y4g4C12mmWdSnvrZ8WnFjXjgNnt%2FeMXB7fgkU3YRrMCElk9hRnzSbTreeJrx1X8dYO86NEHI0L7mWpUJlX%2BBkT%2FRx%2B7S0FZk4iThkZPp7m8BQQvm5k2h70RLdKRhHCg2Pe%2BdZgm8S%2FWysTcCGHrHEKcMxoT5vzwMItaCAqCjbCnia5B%2B5cpyDsPNeHkk3PI5GQMw%2F5GnvQY6pgEDh8ALg9m3QWj0iU5lo29zRear0MpExXsShGwdSCkhHjAHDdD%2BL1hRW7AiPysaagSwHo%2Fnz24KMnQB2mqpBbylRnnhso1REzV66hL46DkwgEVDHphudQHUkTOGKXm18lggr4nbmgEzvnYu5ge%2F3JadC%2B7W44EItdWp5iLE9V4Z%2Bv4HA09TGzXOlJ4CGvWm8SAZdVbb5A0diaEyz7J9quw0mi2kUIYn&X-Amz-Signature=feb31936f73db1109f8d575aeb2ed3ec1f85058dbeb1f97cbff9229a250bf893&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NTYF67%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIER4hAL8ZT9OSs5DMs8bwSRLtUiS5l%2FZFAvr7EJvMDCrAiB%2BiAJV7P%2FKhZcJXjaf%2FTGKhhT6CQmv3lndN2MirBoL5yqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhYdg%2B6kGhQCUxn0KtwD23Tn2Ud6KnlK8IEIHF2AjJ4K9erCEspggUcrg5VntaiNuKaqrAgjEKiYiSsTbFPaAAsQjh5EC5qlGeKVnA2m3mia1gaqK744u4hthMtVBYOyEgSvKXKzVOqa7IU%2BFHQi03DU4hDujNwVxtaNamWoZD7e4kPeP6HoIIla5uvS5SDxhnBLzGCnmrwUQ4TePJ%2BffokyQPBxGwF%2Fdje%2FHwOjYJR4QXIy9vHJagmzxpNNhMyYLCSzAFD1btoI3wzMeuhyHskl%2F2nyPjZzLlnIlkp%2Bj%2BPBlxxmb2gbzBVBYISwtKN0yRx7qdGiAFRvrUliuXC0O0Zwxn9az7WMjsnKFUuC0k7PfGt7efYiAMDZdyF0uoG6uMGDjRGLaSOfYSrTcHIRAyeqi%2FIoKxNTAv8%2BBYg%2FLV6uRihfBWjjmh2iNjZPGk5ZIeYqLdkOKrL5Y4g4C12mmWdSnvrZ8WnFjXjgNnt%2FeMXB7fgkU3YRrMCElk9hRnzSbTreeJrx1X8dYO86NEHI0L7mWpUJlX%2BBkT%2FRx%2B7S0FZk4iThkZPp7m8BQQvm5k2h70RLdKRhHCg2Pe%2BdZgm8S%2FWysTcCGHrHEKcMxoT5vzwMItaCAqCjbCnia5B%2B5cpyDsPNeHkk3PI5GQMw%2F5GnvQY6pgEDh8ALg9m3QWj0iU5lo29zRear0MpExXsShGwdSCkhHjAHDdD%2BL1hRW7AiPysaagSwHo%2Fnz24KMnQB2mqpBbylRnnhso1REzV66hL46DkwgEVDHphudQHUkTOGKXm18lggr4nbmgEzvnYu5ge%2F3JadC%2B7W44EItdWp5iLE9V4Z%2Bv4HA09TGzXOlJ4CGvWm8SAZdVbb5A0diaEyz7J9quw0mi2kUIYn&X-Amz-Signature=649045961cea898146d01623d54e18e6eb1d5e06662f204674ff397b2915c665&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NTYF67%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIER4hAL8ZT9OSs5DMs8bwSRLtUiS5l%2FZFAvr7EJvMDCrAiB%2BiAJV7P%2FKhZcJXjaf%2FTGKhhT6CQmv3lndN2MirBoL5yqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhYdg%2B6kGhQCUxn0KtwD23Tn2Ud6KnlK8IEIHF2AjJ4K9erCEspggUcrg5VntaiNuKaqrAgjEKiYiSsTbFPaAAsQjh5EC5qlGeKVnA2m3mia1gaqK744u4hthMtVBYOyEgSvKXKzVOqa7IU%2BFHQi03DU4hDujNwVxtaNamWoZD7e4kPeP6HoIIla5uvS5SDxhnBLzGCnmrwUQ4TePJ%2BffokyQPBxGwF%2Fdje%2FHwOjYJR4QXIy9vHJagmzxpNNhMyYLCSzAFD1btoI3wzMeuhyHskl%2F2nyPjZzLlnIlkp%2Bj%2BPBlxxmb2gbzBVBYISwtKN0yRx7qdGiAFRvrUliuXC0O0Zwxn9az7WMjsnKFUuC0k7PfGt7efYiAMDZdyF0uoG6uMGDjRGLaSOfYSrTcHIRAyeqi%2FIoKxNTAv8%2BBYg%2FLV6uRihfBWjjmh2iNjZPGk5ZIeYqLdkOKrL5Y4g4C12mmWdSnvrZ8WnFjXjgNnt%2FeMXB7fgkU3YRrMCElk9hRnzSbTreeJrx1X8dYO86NEHI0L7mWpUJlX%2BBkT%2FRx%2B7S0FZk4iThkZPp7m8BQQvm5k2h70RLdKRhHCg2Pe%2BdZgm8S%2FWysTcCGHrHEKcMxoT5vzwMItaCAqCjbCnia5B%2B5cpyDsPNeHkk3PI5GQMw%2F5GnvQY6pgEDh8ALg9m3QWj0iU5lo29zRear0MpExXsShGwdSCkhHjAHDdD%2BL1hRW7AiPysaagSwHo%2Fnz24KMnQB2mqpBbylRnnhso1REzV66hL46DkwgEVDHphudQHUkTOGKXm18lggr4nbmgEzvnYu5ge%2F3JadC%2B7W44EItdWp5iLE9V4Z%2Bv4HA09TGzXOlJ4CGvWm8SAZdVbb5A0diaEyz7J9quw0mi2kUIYn&X-Amz-Signature=2bc6578ff2d66c083e757a52f63d65bc93b8f59529292d2c174d8de09b81e8bb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NTYF67%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIER4hAL8ZT9OSs5DMs8bwSRLtUiS5l%2FZFAvr7EJvMDCrAiB%2BiAJV7P%2FKhZcJXjaf%2FTGKhhT6CQmv3lndN2MirBoL5yqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhYdg%2B6kGhQCUxn0KtwD23Tn2Ud6KnlK8IEIHF2AjJ4K9erCEspggUcrg5VntaiNuKaqrAgjEKiYiSsTbFPaAAsQjh5EC5qlGeKVnA2m3mia1gaqK744u4hthMtVBYOyEgSvKXKzVOqa7IU%2BFHQi03DU4hDujNwVxtaNamWoZD7e4kPeP6HoIIla5uvS5SDxhnBLzGCnmrwUQ4TePJ%2BffokyQPBxGwF%2Fdje%2FHwOjYJR4QXIy9vHJagmzxpNNhMyYLCSzAFD1btoI3wzMeuhyHskl%2F2nyPjZzLlnIlkp%2Bj%2BPBlxxmb2gbzBVBYISwtKN0yRx7qdGiAFRvrUliuXC0O0Zwxn9az7WMjsnKFUuC0k7PfGt7efYiAMDZdyF0uoG6uMGDjRGLaSOfYSrTcHIRAyeqi%2FIoKxNTAv8%2BBYg%2FLV6uRihfBWjjmh2iNjZPGk5ZIeYqLdkOKrL5Y4g4C12mmWdSnvrZ8WnFjXjgNnt%2FeMXB7fgkU3YRrMCElk9hRnzSbTreeJrx1X8dYO86NEHI0L7mWpUJlX%2BBkT%2FRx%2B7S0FZk4iThkZPp7m8BQQvm5k2h70RLdKRhHCg2Pe%2BdZgm8S%2FWysTcCGHrHEKcMxoT5vzwMItaCAqCjbCnia5B%2B5cpyDsPNeHkk3PI5GQMw%2F5GnvQY6pgEDh8ALg9m3QWj0iU5lo29zRear0MpExXsShGwdSCkhHjAHDdD%2BL1hRW7AiPysaagSwHo%2Fnz24KMnQB2mqpBbylRnnhso1REzV66hL46DkwgEVDHphudQHUkTOGKXm18lggr4nbmgEzvnYu5ge%2F3JadC%2B7W44EItdWp5iLE9V4Z%2Bv4HA09TGzXOlJ4CGvWm8SAZdVbb5A0diaEyz7J9quw0mi2kUIYn&X-Amz-Signature=70c2ca4c7bc4605e361b7d01f9c5b851e7f54d10cb5e8b4d06e339e336b11e38&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
