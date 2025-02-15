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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6Y2JUI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC2CaB0tAGJIF2JK0lQnk3SqLj%2FjPWb2KwSznV8rGi6BgIhAJXiEyhQO0r79CDN01zwtdPWg0141V%2BGKx75lVf09NeeKv8DCEQQABoMNjM3NDIzMTgzODA1IgwhmuIYsu1CbadTQHYq3AMh%2Fs3qrWjCrgxYflflMCsn2eFMNp0z3HOa3DDyqaKV5HYIpMfLfisq6lI%2B02LS2m%2B8hfZkbczqo5VSdwVa5JqgaL8s7CUz67Dr0rQLwXwYcbieuNCPkhQCyfBOmTrvveWic2J%2FBLb4C%2FD4QgzCZCi6%2FtVO0DqLvoJ9uCes7XBEl9FBzZzVe4MLiHjAiWOcldZryaW77N2zk%2FZzIc9mpTg69iz8mAiLiByoC38zI%2F51DuWDLF0QH6SyjoTjVaMlz4WYUl76hOciao1oOVtQv4fLFWNOCBc97tNj5ToEvZMk%2FBB%2FHM%2B3Sa2bzc%2FomgQxyEN53bKjbWrWvsI2ocyPq69bi2V8nEnsEE6Fl47wk2fvd0XXQlq0wc3vrbdda3TQjW%2BmfPeQ15LPnpfoVq5feEZantZW9TpPvVnTbUeE%2FxqXdJuBhnRM8s8oJZpGjkzwNtdAxRHTDzhwPtXhNLif%2Fko1zxNkLpRuuqYgVrTzTUkib0NA0oxx7nl3hgSKL2iyjhN56OTiCICHMfxr%2B6Cw3ZhuFF7UuwpIX53Le%2BpLwWrazMUA07InqSxx9TilIxfBgWDb4eYcL%2FGFb%2FOBBdbK%2FNOLTWKO8VD%2FCmAdR6B7i3BhjBBK8j5GkcPAr0e8XTDz7cG9BjqkAVI%2FFkCXfrBs6hDyRPs%2FwoH4Ca6LUgdqf73UPsDlY8JJ8%2BWfUIAKvhjL81bfQ%2BFmiYp3MsByuM1NPWXNwnGRojLKXpHsj%2FZ%2FGujl4KqMSoUpJA2bmoxTE8gEs3NHrxiqd9dyR9YyZWauw5ONpmG6qM2retGdli59YAyjCpX6mBHiuyH5XVwmqp%2Fe5bOQwGfaHDG9B4kqSsQSAso82GkpBYE8Umu%2F&X-Amz-Signature=f52c53e63466b8f1bfa3a27abadf9835d4a4102dc9dca03ea8e1b7f5ff53ee7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6Y2JUI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC2CaB0tAGJIF2JK0lQnk3SqLj%2FjPWb2KwSznV8rGi6BgIhAJXiEyhQO0r79CDN01zwtdPWg0141V%2BGKx75lVf09NeeKv8DCEQQABoMNjM3NDIzMTgzODA1IgwhmuIYsu1CbadTQHYq3AMh%2Fs3qrWjCrgxYflflMCsn2eFMNp0z3HOa3DDyqaKV5HYIpMfLfisq6lI%2B02LS2m%2B8hfZkbczqo5VSdwVa5JqgaL8s7CUz67Dr0rQLwXwYcbieuNCPkhQCyfBOmTrvveWic2J%2FBLb4C%2FD4QgzCZCi6%2FtVO0DqLvoJ9uCes7XBEl9FBzZzVe4MLiHjAiWOcldZryaW77N2zk%2FZzIc9mpTg69iz8mAiLiByoC38zI%2F51DuWDLF0QH6SyjoTjVaMlz4WYUl76hOciao1oOVtQv4fLFWNOCBc97tNj5ToEvZMk%2FBB%2FHM%2B3Sa2bzc%2FomgQxyEN53bKjbWrWvsI2ocyPq69bi2V8nEnsEE6Fl47wk2fvd0XXQlq0wc3vrbdda3TQjW%2BmfPeQ15LPnpfoVq5feEZantZW9TpPvVnTbUeE%2FxqXdJuBhnRM8s8oJZpGjkzwNtdAxRHTDzhwPtXhNLif%2Fko1zxNkLpRuuqYgVrTzTUkib0NA0oxx7nl3hgSKL2iyjhN56OTiCICHMfxr%2B6Cw3ZhuFF7UuwpIX53Le%2BpLwWrazMUA07InqSxx9TilIxfBgWDb4eYcL%2FGFb%2FOBBdbK%2FNOLTWKO8VD%2FCmAdR6B7i3BhjBBK8j5GkcPAr0e8XTDz7cG9BjqkAVI%2FFkCXfrBs6hDyRPs%2FwoH4Ca6LUgdqf73UPsDlY8JJ8%2BWfUIAKvhjL81bfQ%2BFmiYp3MsByuM1NPWXNwnGRojLKXpHsj%2FZ%2FGujl4KqMSoUpJA2bmoxTE8gEs3NHrxiqd9dyR9YyZWauw5ONpmG6qM2retGdli59YAyjCpX6mBHiuyH5XVwmqp%2Fe5bOQwGfaHDG9B4kqSsQSAso82GkpBYE8Umu%2F&X-Amz-Signature=127b88f4f650c69c0d4da687d86bb0a35e8716f2e1f09773540ad11163a7b0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6Y2JUI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC2CaB0tAGJIF2JK0lQnk3SqLj%2FjPWb2KwSznV8rGi6BgIhAJXiEyhQO0r79CDN01zwtdPWg0141V%2BGKx75lVf09NeeKv8DCEQQABoMNjM3NDIzMTgzODA1IgwhmuIYsu1CbadTQHYq3AMh%2Fs3qrWjCrgxYflflMCsn2eFMNp0z3HOa3DDyqaKV5HYIpMfLfisq6lI%2B02LS2m%2B8hfZkbczqo5VSdwVa5JqgaL8s7CUz67Dr0rQLwXwYcbieuNCPkhQCyfBOmTrvveWic2J%2FBLb4C%2FD4QgzCZCi6%2FtVO0DqLvoJ9uCes7XBEl9FBzZzVe4MLiHjAiWOcldZryaW77N2zk%2FZzIc9mpTg69iz8mAiLiByoC38zI%2F51DuWDLF0QH6SyjoTjVaMlz4WYUl76hOciao1oOVtQv4fLFWNOCBc97tNj5ToEvZMk%2FBB%2FHM%2B3Sa2bzc%2FomgQxyEN53bKjbWrWvsI2ocyPq69bi2V8nEnsEE6Fl47wk2fvd0XXQlq0wc3vrbdda3TQjW%2BmfPeQ15LPnpfoVq5feEZantZW9TpPvVnTbUeE%2FxqXdJuBhnRM8s8oJZpGjkzwNtdAxRHTDzhwPtXhNLif%2Fko1zxNkLpRuuqYgVrTzTUkib0NA0oxx7nl3hgSKL2iyjhN56OTiCICHMfxr%2B6Cw3ZhuFF7UuwpIX53Le%2BpLwWrazMUA07InqSxx9TilIxfBgWDb4eYcL%2FGFb%2FOBBdbK%2FNOLTWKO8VD%2FCmAdR6B7i3BhjBBK8j5GkcPAr0e8XTDz7cG9BjqkAVI%2FFkCXfrBs6hDyRPs%2FwoH4Ca6LUgdqf73UPsDlY8JJ8%2BWfUIAKvhjL81bfQ%2BFmiYp3MsByuM1NPWXNwnGRojLKXpHsj%2FZ%2FGujl4KqMSoUpJA2bmoxTE8gEs3NHrxiqd9dyR9YyZWauw5ONpmG6qM2retGdli59YAyjCpX6mBHiuyH5XVwmqp%2Fe5bOQwGfaHDG9B4kqSsQSAso82GkpBYE8Umu%2F&X-Amz-Signature=15339271942baa66c9fa0039fafa33894c4d4612bdaef224be3f20cc31583386&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6Y2JUI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC2CaB0tAGJIF2JK0lQnk3SqLj%2FjPWb2KwSznV8rGi6BgIhAJXiEyhQO0r79CDN01zwtdPWg0141V%2BGKx75lVf09NeeKv8DCEQQABoMNjM3NDIzMTgzODA1IgwhmuIYsu1CbadTQHYq3AMh%2Fs3qrWjCrgxYflflMCsn2eFMNp0z3HOa3DDyqaKV5HYIpMfLfisq6lI%2B02LS2m%2B8hfZkbczqo5VSdwVa5JqgaL8s7CUz67Dr0rQLwXwYcbieuNCPkhQCyfBOmTrvveWic2J%2FBLb4C%2FD4QgzCZCi6%2FtVO0DqLvoJ9uCes7XBEl9FBzZzVe4MLiHjAiWOcldZryaW77N2zk%2FZzIc9mpTg69iz8mAiLiByoC38zI%2F51DuWDLF0QH6SyjoTjVaMlz4WYUl76hOciao1oOVtQv4fLFWNOCBc97tNj5ToEvZMk%2FBB%2FHM%2B3Sa2bzc%2FomgQxyEN53bKjbWrWvsI2ocyPq69bi2V8nEnsEE6Fl47wk2fvd0XXQlq0wc3vrbdda3TQjW%2BmfPeQ15LPnpfoVq5feEZantZW9TpPvVnTbUeE%2FxqXdJuBhnRM8s8oJZpGjkzwNtdAxRHTDzhwPtXhNLif%2Fko1zxNkLpRuuqYgVrTzTUkib0NA0oxx7nl3hgSKL2iyjhN56OTiCICHMfxr%2B6Cw3ZhuFF7UuwpIX53Le%2BpLwWrazMUA07InqSxx9TilIxfBgWDb4eYcL%2FGFb%2FOBBdbK%2FNOLTWKO8VD%2FCmAdR6B7i3BhjBBK8j5GkcPAr0e8XTDz7cG9BjqkAVI%2FFkCXfrBs6hDyRPs%2FwoH4Ca6LUgdqf73UPsDlY8JJ8%2BWfUIAKvhjL81bfQ%2BFmiYp3MsByuM1NPWXNwnGRojLKXpHsj%2FZ%2FGujl4KqMSoUpJA2bmoxTE8gEs3NHrxiqd9dyR9YyZWauw5ONpmG6qM2retGdli59YAyjCpX6mBHiuyH5XVwmqp%2Fe5bOQwGfaHDG9B4kqSsQSAso82GkpBYE8Umu%2F&X-Amz-Signature=55d82f29a0b451b33f080e4a5bc7e75b6c9ef61d30d71114d35a3e0fe57aff15&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6Y2JUI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC2CaB0tAGJIF2JK0lQnk3SqLj%2FjPWb2KwSznV8rGi6BgIhAJXiEyhQO0r79CDN01zwtdPWg0141V%2BGKx75lVf09NeeKv8DCEQQABoMNjM3NDIzMTgzODA1IgwhmuIYsu1CbadTQHYq3AMh%2Fs3qrWjCrgxYflflMCsn2eFMNp0z3HOa3DDyqaKV5HYIpMfLfisq6lI%2B02LS2m%2B8hfZkbczqo5VSdwVa5JqgaL8s7CUz67Dr0rQLwXwYcbieuNCPkhQCyfBOmTrvveWic2J%2FBLb4C%2FD4QgzCZCi6%2FtVO0DqLvoJ9uCes7XBEl9FBzZzVe4MLiHjAiWOcldZryaW77N2zk%2FZzIc9mpTg69iz8mAiLiByoC38zI%2F51DuWDLF0QH6SyjoTjVaMlz4WYUl76hOciao1oOVtQv4fLFWNOCBc97tNj5ToEvZMk%2FBB%2FHM%2B3Sa2bzc%2FomgQxyEN53bKjbWrWvsI2ocyPq69bi2V8nEnsEE6Fl47wk2fvd0XXQlq0wc3vrbdda3TQjW%2BmfPeQ15LPnpfoVq5feEZantZW9TpPvVnTbUeE%2FxqXdJuBhnRM8s8oJZpGjkzwNtdAxRHTDzhwPtXhNLif%2Fko1zxNkLpRuuqYgVrTzTUkib0NA0oxx7nl3hgSKL2iyjhN56OTiCICHMfxr%2B6Cw3ZhuFF7UuwpIX53Le%2BpLwWrazMUA07InqSxx9TilIxfBgWDb4eYcL%2FGFb%2FOBBdbK%2FNOLTWKO8VD%2FCmAdR6B7i3BhjBBK8j5GkcPAr0e8XTDz7cG9BjqkAVI%2FFkCXfrBs6hDyRPs%2FwoH4Ca6LUgdqf73UPsDlY8JJ8%2BWfUIAKvhjL81bfQ%2BFmiYp3MsByuM1NPWXNwnGRojLKXpHsj%2FZ%2FGujl4KqMSoUpJA2bmoxTE8gEs3NHrxiqd9dyR9YyZWauw5ONpmG6qM2retGdli59YAyjCpX6mBHiuyH5XVwmqp%2Fe5bOQwGfaHDG9B4kqSsQSAso82GkpBYE8Umu%2F&X-Amz-Signature=cb392ed87d1281afca6c3b5c4754899e5645b69ec25640acff2d80726aba0d32&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6Y2JUI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC2CaB0tAGJIF2JK0lQnk3SqLj%2FjPWb2KwSznV8rGi6BgIhAJXiEyhQO0r79CDN01zwtdPWg0141V%2BGKx75lVf09NeeKv8DCEQQABoMNjM3NDIzMTgzODA1IgwhmuIYsu1CbadTQHYq3AMh%2Fs3qrWjCrgxYflflMCsn2eFMNp0z3HOa3DDyqaKV5HYIpMfLfisq6lI%2B02LS2m%2B8hfZkbczqo5VSdwVa5JqgaL8s7CUz67Dr0rQLwXwYcbieuNCPkhQCyfBOmTrvveWic2J%2FBLb4C%2FD4QgzCZCi6%2FtVO0DqLvoJ9uCes7XBEl9FBzZzVe4MLiHjAiWOcldZryaW77N2zk%2FZzIc9mpTg69iz8mAiLiByoC38zI%2F51DuWDLF0QH6SyjoTjVaMlz4WYUl76hOciao1oOVtQv4fLFWNOCBc97tNj5ToEvZMk%2FBB%2FHM%2B3Sa2bzc%2FomgQxyEN53bKjbWrWvsI2ocyPq69bi2V8nEnsEE6Fl47wk2fvd0XXQlq0wc3vrbdda3TQjW%2BmfPeQ15LPnpfoVq5feEZantZW9TpPvVnTbUeE%2FxqXdJuBhnRM8s8oJZpGjkzwNtdAxRHTDzhwPtXhNLif%2Fko1zxNkLpRuuqYgVrTzTUkib0NA0oxx7nl3hgSKL2iyjhN56OTiCICHMfxr%2B6Cw3ZhuFF7UuwpIX53Le%2BpLwWrazMUA07InqSxx9TilIxfBgWDb4eYcL%2FGFb%2FOBBdbK%2FNOLTWKO8VD%2FCmAdR6B7i3BhjBBK8j5GkcPAr0e8XTDz7cG9BjqkAVI%2FFkCXfrBs6hDyRPs%2FwoH4Ca6LUgdqf73UPsDlY8JJ8%2BWfUIAKvhjL81bfQ%2BFmiYp3MsByuM1NPWXNwnGRojLKXpHsj%2FZ%2FGujl4KqMSoUpJA2bmoxTE8gEs3NHrxiqd9dyR9YyZWauw5ONpmG6qM2retGdli59YAyjCpX6mBHiuyH5XVwmqp%2Fe5bOQwGfaHDG9B4kqSsQSAso82GkpBYE8Umu%2F&X-Amz-Signature=3ce97c90a5f2c3c5910d0295ef63929838131729e96634a738e597b478a6f690&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6Y2JUI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC2CaB0tAGJIF2JK0lQnk3SqLj%2FjPWb2KwSznV8rGi6BgIhAJXiEyhQO0r79CDN01zwtdPWg0141V%2BGKx75lVf09NeeKv8DCEQQABoMNjM3NDIzMTgzODA1IgwhmuIYsu1CbadTQHYq3AMh%2Fs3qrWjCrgxYflflMCsn2eFMNp0z3HOa3DDyqaKV5HYIpMfLfisq6lI%2B02LS2m%2B8hfZkbczqo5VSdwVa5JqgaL8s7CUz67Dr0rQLwXwYcbieuNCPkhQCyfBOmTrvveWic2J%2FBLb4C%2FD4QgzCZCi6%2FtVO0DqLvoJ9uCes7XBEl9FBzZzVe4MLiHjAiWOcldZryaW77N2zk%2FZzIc9mpTg69iz8mAiLiByoC38zI%2F51DuWDLF0QH6SyjoTjVaMlz4WYUl76hOciao1oOVtQv4fLFWNOCBc97tNj5ToEvZMk%2FBB%2FHM%2B3Sa2bzc%2FomgQxyEN53bKjbWrWvsI2ocyPq69bi2V8nEnsEE6Fl47wk2fvd0XXQlq0wc3vrbdda3TQjW%2BmfPeQ15LPnpfoVq5feEZantZW9TpPvVnTbUeE%2FxqXdJuBhnRM8s8oJZpGjkzwNtdAxRHTDzhwPtXhNLif%2Fko1zxNkLpRuuqYgVrTzTUkib0NA0oxx7nl3hgSKL2iyjhN56OTiCICHMfxr%2B6Cw3ZhuFF7UuwpIX53Le%2BpLwWrazMUA07InqSxx9TilIxfBgWDb4eYcL%2FGFb%2FOBBdbK%2FNOLTWKO8VD%2FCmAdR6B7i3BhjBBK8j5GkcPAr0e8XTDz7cG9BjqkAVI%2FFkCXfrBs6hDyRPs%2FwoH4Ca6LUgdqf73UPsDlY8JJ8%2BWfUIAKvhjL81bfQ%2BFmiYp3MsByuM1NPWXNwnGRojLKXpHsj%2FZ%2FGujl4KqMSoUpJA2bmoxTE8gEs3NHrxiqd9dyR9YyZWauw5ONpmG6qM2retGdli59YAyjCpX6mBHiuyH5XVwmqp%2Fe5bOQwGfaHDG9B4kqSsQSAso82GkpBYE8Umu%2F&X-Amz-Signature=b0a6c445805f44ea81f3a6339a0581a19bc4f8cdb799413d3690ad32222325d5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
