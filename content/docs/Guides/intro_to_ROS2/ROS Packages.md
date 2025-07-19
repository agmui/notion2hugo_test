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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFN74JR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdDkz2FGlgrOsIWAoJgx71pnGP7PjF61ouIv%2F%2BReDLsQIgJmqg2IJN5%2Bbf0jlzsQobmv5Lt5wZyx60%2FopVAHbWa0wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXLbYN6Fv6TBICm5yrcAzHLoKLJRFBiT5Cq9o8y1os0SEBT098W6iUdCRrYlfs3RbcIkJYTo7fswisSRGyiw0%2BVwG%2FsTLN%2BNmp4E9tfwoq2J%2B0jW6kIw7vHG1%2F2Egh3JTW2y9IQeXVbv9Lwwg5KXCQ6dwmphsTS7LQtgMxuT2JDZo0JNMG2MZfysd2en4x7S5ef%2Bit0%2Fp0%2FPWqPavwJfl0AwMwNAPKZqcMNdPZcEiHPXjCULGWONlt5oL5lBfxBb23mSG8CE%2FlNLhWIK79nfWtA6ormS3Ra8cypuPWgG7%2B43%2FF09BpHm87qM7a1oDXviy%2B16EhbN5b3Y%2FpobOoGkj7TAff6tWWefFmrLgETgWfPvVwjVfV0c3HWLu2W%2FCveSB5TeFpH4lTtCY%2BZkg9u7r%2F%2FndxZPwkApMCK8m1xbSZdLKPlpQtqlXLi2yKYUE7jgdERK%2BnYoU7Z%2BqNHfTcpfSoUrSF0QtfejHm4YFc2iX1V8PBSc%2FxWY8Oe%2FM%2ByPiZpOKjcGfCu%2BAoQYM2hK09Q1mKiay%2FkFClJSYyNcjTnU4chEPJ1UqNRHqruqMcmCM8vYHp8lbTGibbxy3tG2ZQO%2FROKmBLIDLKVoDS%2Fkq5xbKC4KDPH4UN73hH62tROyuEDPhdrZnAKY%2Bs1%2FAUJMLOg7MMGOqUBE9YLfW4%2FvfLJTcJqKZ67MwRs%2FDGb3kxf7Ex05R%2F6Qj09IC1tCzVP%2BchGVM2VU9nqbt%2Fpus8qQwE6hG9MkjfFNz7ZdhiSQvkl7VCkGtuvll7uNWvI4JXV6OgJfuMPrJvBgPQrKCpapgokbMjSTnqMEoh1UDLNPmBHamNVjg5XqzqcQ9imeV0Nsd1T5zWColkk0HAWgICUVC1pQxwWbl0crMRZ%2FKCU&X-Amz-Signature=1d61e04715651d1a32142693dc995ce3d8eb1e0eea91ffd0be6a868e19d778d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFN74JR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdDkz2FGlgrOsIWAoJgx71pnGP7PjF61ouIv%2F%2BReDLsQIgJmqg2IJN5%2Bbf0jlzsQobmv5Lt5wZyx60%2FopVAHbWa0wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXLbYN6Fv6TBICm5yrcAzHLoKLJRFBiT5Cq9o8y1os0SEBT098W6iUdCRrYlfs3RbcIkJYTo7fswisSRGyiw0%2BVwG%2FsTLN%2BNmp4E9tfwoq2J%2B0jW6kIw7vHG1%2F2Egh3JTW2y9IQeXVbv9Lwwg5KXCQ6dwmphsTS7LQtgMxuT2JDZo0JNMG2MZfysd2en4x7S5ef%2Bit0%2Fp0%2FPWqPavwJfl0AwMwNAPKZqcMNdPZcEiHPXjCULGWONlt5oL5lBfxBb23mSG8CE%2FlNLhWIK79nfWtA6ormS3Ra8cypuPWgG7%2B43%2FF09BpHm87qM7a1oDXviy%2B16EhbN5b3Y%2FpobOoGkj7TAff6tWWefFmrLgETgWfPvVwjVfV0c3HWLu2W%2FCveSB5TeFpH4lTtCY%2BZkg9u7r%2F%2FndxZPwkApMCK8m1xbSZdLKPlpQtqlXLi2yKYUE7jgdERK%2BnYoU7Z%2BqNHfTcpfSoUrSF0QtfejHm4YFc2iX1V8PBSc%2FxWY8Oe%2FM%2ByPiZpOKjcGfCu%2BAoQYM2hK09Q1mKiay%2FkFClJSYyNcjTnU4chEPJ1UqNRHqruqMcmCM8vYHp8lbTGibbxy3tG2ZQO%2FROKmBLIDLKVoDS%2Fkq5xbKC4KDPH4UN73hH62tROyuEDPhdrZnAKY%2Bs1%2FAUJMLOg7MMGOqUBE9YLfW4%2FvfLJTcJqKZ67MwRs%2FDGb3kxf7Ex05R%2F6Qj09IC1tCzVP%2BchGVM2VU9nqbt%2Fpus8qQwE6hG9MkjfFNz7ZdhiSQvkl7VCkGtuvll7uNWvI4JXV6OgJfuMPrJvBgPQrKCpapgokbMjSTnqMEoh1UDLNPmBHamNVjg5XqzqcQ9imeV0Nsd1T5zWColkk0HAWgICUVC1pQxwWbl0crMRZ%2FKCU&X-Amz-Signature=198c662f379d1394a25ffb01ab4eb340391b9869a10328d068093ef6639bf0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFN74JR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdDkz2FGlgrOsIWAoJgx71pnGP7PjF61ouIv%2F%2BReDLsQIgJmqg2IJN5%2Bbf0jlzsQobmv5Lt5wZyx60%2FopVAHbWa0wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXLbYN6Fv6TBICm5yrcAzHLoKLJRFBiT5Cq9o8y1os0SEBT098W6iUdCRrYlfs3RbcIkJYTo7fswisSRGyiw0%2BVwG%2FsTLN%2BNmp4E9tfwoq2J%2B0jW6kIw7vHG1%2F2Egh3JTW2y9IQeXVbv9Lwwg5KXCQ6dwmphsTS7LQtgMxuT2JDZo0JNMG2MZfysd2en4x7S5ef%2Bit0%2Fp0%2FPWqPavwJfl0AwMwNAPKZqcMNdPZcEiHPXjCULGWONlt5oL5lBfxBb23mSG8CE%2FlNLhWIK79nfWtA6ormS3Ra8cypuPWgG7%2B43%2FF09BpHm87qM7a1oDXviy%2B16EhbN5b3Y%2FpobOoGkj7TAff6tWWefFmrLgETgWfPvVwjVfV0c3HWLu2W%2FCveSB5TeFpH4lTtCY%2BZkg9u7r%2F%2FndxZPwkApMCK8m1xbSZdLKPlpQtqlXLi2yKYUE7jgdERK%2BnYoU7Z%2BqNHfTcpfSoUrSF0QtfejHm4YFc2iX1V8PBSc%2FxWY8Oe%2FM%2ByPiZpOKjcGfCu%2BAoQYM2hK09Q1mKiay%2FkFClJSYyNcjTnU4chEPJ1UqNRHqruqMcmCM8vYHp8lbTGibbxy3tG2ZQO%2FROKmBLIDLKVoDS%2Fkq5xbKC4KDPH4UN73hH62tROyuEDPhdrZnAKY%2Bs1%2FAUJMLOg7MMGOqUBE9YLfW4%2FvfLJTcJqKZ67MwRs%2FDGb3kxf7Ex05R%2F6Qj09IC1tCzVP%2BchGVM2VU9nqbt%2Fpus8qQwE6hG9MkjfFNz7ZdhiSQvkl7VCkGtuvll7uNWvI4JXV6OgJfuMPrJvBgPQrKCpapgokbMjSTnqMEoh1UDLNPmBHamNVjg5XqzqcQ9imeV0Nsd1T5zWColkk0HAWgICUVC1pQxwWbl0crMRZ%2FKCU&X-Amz-Signature=7a3216987565956f5134ab989f581277f6258133b31397a4c1e0d084327830c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFN74JR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdDkz2FGlgrOsIWAoJgx71pnGP7PjF61ouIv%2F%2BReDLsQIgJmqg2IJN5%2Bbf0jlzsQobmv5Lt5wZyx60%2FopVAHbWa0wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXLbYN6Fv6TBICm5yrcAzHLoKLJRFBiT5Cq9o8y1os0SEBT098W6iUdCRrYlfs3RbcIkJYTo7fswisSRGyiw0%2BVwG%2FsTLN%2BNmp4E9tfwoq2J%2B0jW6kIw7vHG1%2F2Egh3JTW2y9IQeXVbv9Lwwg5KXCQ6dwmphsTS7LQtgMxuT2JDZo0JNMG2MZfysd2en4x7S5ef%2Bit0%2Fp0%2FPWqPavwJfl0AwMwNAPKZqcMNdPZcEiHPXjCULGWONlt5oL5lBfxBb23mSG8CE%2FlNLhWIK79nfWtA6ormS3Ra8cypuPWgG7%2B43%2FF09BpHm87qM7a1oDXviy%2B16EhbN5b3Y%2FpobOoGkj7TAff6tWWefFmrLgETgWfPvVwjVfV0c3HWLu2W%2FCveSB5TeFpH4lTtCY%2BZkg9u7r%2F%2FndxZPwkApMCK8m1xbSZdLKPlpQtqlXLi2yKYUE7jgdERK%2BnYoU7Z%2BqNHfTcpfSoUrSF0QtfejHm4YFc2iX1V8PBSc%2FxWY8Oe%2FM%2ByPiZpOKjcGfCu%2BAoQYM2hK09Q1mKiay%2FkFClJSYyNcjTnU4chEPJ1UqNRHqruqMcmCM8vYHp8lbTGibbxy3tG2ZQO%2FROKmBLIDLKVoDS%2Fkq5xbKC4KDPH4UN73hH62tROyuEDPhdrZnAKY%2Bs1%2FAUJMLOg7MMGOqUBE9YLfW4%2FvfLJTcJqKZ67MwRs%2FDGb3kxf7Ex05R%2F6Qj09IC1tCzVP%2BchGVM2VU9nqbt%2Fpus8qQwE6hG9MkjfFNz7ZdhiSQvkl7VCkGtuvll7uNWvI4JXV6OgJfuMPrJvBgPQrKCpapgokbMjSTnqMEoh1UDLNPmBHamNVjg5XqzqcQ9imeV0Nsd1T5zWColkk0HAWgICUVC1pQxwWbl0crMRZ%2FKCU&X-Amz-Signature=7cb28ad13881cbea2ae33590ec5222f261f41238de8d9a3c019ec545540fbc6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFN74JR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdDkz2FGlgrOsIWAoJgx71pnGP7PjF61ouIv%2F%2BReDLsQIgJmqg2IJN5%2Bbf0jlzsQobmv5Lt5wZyx60%2FopVAHbWa0wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXLbYN6Fv6TBICm5yrcAzHLoKLJRFBiT5Cq9o8y1os0SEBT098W6iUdCRrYlfs3RbcIkJYTo7fswisSRGyiw0%2BVwG%2FsTLN%2BNmp4E9tfwoq2J%2B0jW6kIw7vHG1%2F2Egh3JTW2y9IQeXVbv9Lwwg5KXCQ6dwmphsTS7LQtgMxuT2JDZo0JNMG2MZfysd2en4x7S5ef%2Bit0%2Fp0%2FPWqPavwJfl0AwMwNAPKZqcMNdPZcEiHPXjCULGWONlt5oL5lBfxBb23mSG8CE%2FlNLhWIK79nfWtA6ormS3Ra8cypuPWgG7%2B43%2FF09BpHm87qM7a1oDXviy%2B16EhbN5b3Y%2FpobOoGkj7TAff6tWWefFmrLgETgWfPvVwjVfV0c3HWLu2W%2FCveSB5TeFpH4lTtCY%2BZkg9u7r%2F%2FndxZPwkApMCK8m1xbSZdLKPlpQtqlXLi2yKYUE7jgdERK%2BnYoU7Z%2BqNHfTcpfSoUrSF0QtfejHm4YFc2iX1V8PBSc%2FxWY8Oe%2FM%2ByPiZpOKjcGfCu%2BAoQYM2hK09Q1mKiay%2FkFClJSYyNcjTnU4chEPJ1UqNRHqruqMcmCM8vYHp8lbTGibbxy3tG2ZQO%2FROKmBLIDLKVoDS%2Fkq5xbKC4KDPH4UN73hH62tROyuEDPhdrZnAKY%2Bs1%2FAUJMLOg7MMGOqUBE9YLfW4%2FvfLJTcJqKZ67MwRs%2FDGb3kxf7Ex05R%2F6Qj09IC1tCzVP%2BchGVM2VU9nqbt%2Fpus8qQwE6hG9MkjfFNz7ZdhiSQvkl7VCkGtuvll7uNWvI4JXV6OgJfuMPrJvBgPQrKCpapgokbMjSTnqMEoh1UDLNPmBHamNVjg5XqzqcQ9imeV0Nsd1T5zWColkk0HAWgICUVC1pQxwWbl0crMRZ%2FKCU&X-Amz-Signature=610ced003d9f3e5f80c938e08dd865c0601e1f1da44924047171bc8ca15926a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFN74JR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdDkz2FGlgrOsIWAoJgx71pnGP7PjF61ouIv%2F%2BReDLsQIgJmqg2IJN5%2Bbf0jlzsQobmv5Lt5wZyx60%2FopVAHbWa0wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXLbYN6Fv6TBICm5yrcAzHLoKLJRFBiT5Cq9o8y1os0SEBT098W6iUdCRrYlfs3RbcIkJYTo7fswisSRGyiw0%2BVwG%2FsTLN%2BNmp4E9tfwoq2J%2B0jW6kIw7vHG1%2F2Egh3JTW2y9IQeXVbv9Lwwg5KXCQ6dwmphsTS7LQtgMxuT2JDZo0JNMG2MZfysd2en4x7S5ef%2Bit0%2Fp0%2FPWqPavwJfl0AwMwNAPKZqcMNdPZcEiHPXjCULGWONlt5oL5lBfxBb23mSG8CE%2FlNLhWIK79nfWtA6ormS3Ra8cypuPWgG7%2B43%2FF09BpHm87qM7a1oDXviy%2B16EhbN5b3Y%2FpobOoGkj7TAff6tWWefFmrLgETgWfPvVwjVfV0c3HWLu2W%2FCveSB5TeFpH4lTtCY%2BZkg9u7r%2F%2FndxZPwkApMCK8m1xbSZdLKPlpQtqlXLi2yKYUE7jgdERK%2BnYoU7Z%2BqNHfTcpfSoUrSF0QtfejHm4YFc2iX1V8PBSc%2FxWY8Oe%2FM%2ByPiZpOKjcGfCu%2BAoQYM2hK09Q1mKiay%2FkFClJSYyNcjTnU4chEPJ1UqNRHqruqMcmCM8vYHp8lbTGibbxy3tG2ZQO%2FROKmBLIDLKVoDS%2Fkq5xbKC4KDPH4UN73hH62tROyuEDPhdrZnAKY%2Bs1%2FAUJMLOg7MMGOqUBE9YLfW4%2FvfLJTcJqKZ67MwRs%2FDGb3kxf7Ex05R%2F6Qj09IC1tCzVP%2BchGVM2VU9nqbt%2Fpus8qQwE6hG9MkjfFNz7ZdhiSQvkl7VCkGtuvll7uNWvI4JXV6OgJfuMPrJvBgPQrKCpapgokbMjSTnqMEoh1UDLNPmBHamNVjg5XqzqcQ9imeV0Nsd1T5zWColkk0HAWgICUVC1pQxwWbl0crMRZ%2FKCU&X-Amz-Signature=aaa168b0939dbf27d813fdc8629ebc08d634957b04d8c86b27f6d4f14c04b859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFN74JR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdDkz2FGlgrOsIWAoJgx71pnGP7PjF61ouIv%2F%2BReDLsQIgJmqg2IJN5%2Bbf0jlzsQobmv5Lt5wZyx60%2FopVAHbWa0wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXLbYN6Fv6TBICm5yrcAzHLoKLJRFBiT5Cq9o8y1os0SEBT098W6iUdCRrYlfs3RbcIkJYTo7fswisSRGyiw0%2BVwG%2FsTLN%2BNmp4E9tfwoq2J%2B0jW6kIw7vHG1%2F2Egh3JTW2y9IQeXVbv9Lwwg5KXCQ6dwmphsTS7LQtgMxuT2JDZo0JNMG2MZfysd2en4x7S5ef%2Bit0%2Fp0%2FPWqPavwJfl0AwMwNAPKZqcMNdPZcEiHPXjCULGWONlt5oL5lBfxBb23mSG8CE%2FlNLhWIK79nfWtA6ormS3Ra8cypuPWgG7%2B43%2FF09BpHm87qM7a1oDXviy%2B16EhbN5b3Y%2FpobOoGkj7TAff6tWWefFmrLgETgWfPvVwjVfV0c3HWLu2W%2FCveSB5TeFpH4lTtCY%2BZkg9u7r%2F%2FndxZPwkApMCK8m1xbSZdLKPlpQtqlXLi2yKYUE7jgdERK%2BnYoU7Z%2BqNHfTcpfSoUrSF0QtfejHm4YFc2iX1V8PBSc%2FxWY8Oe%2FM%2ByPiZpOKjcGfCu%2BAoQYM2hK09Q1mKiay%2FkFClJSYyNcjTnU4chEPJ1UqNRHqruqMcmCM8vYHp8lbTGibbxy3tG2ZQO%2FROKmBLIDLKVoDS%2Fkq5xbKC4KDPH4UN73hH62tROyuEDPhdrZnAKY%2Bs1%2FAUJMLOg7MMGOqUBE9YLfW4%2FvfLJTcJqKZ67MwRs%2FDGb3kxf7Ex05R%2F6Qj09IC1tCzVP%2BchGVM2VU9nqbt%2Fpus8qQwE6hG9MkjfFNz7ZdhiSQvkl7VCkGtuvll7uNWvI4JXV6OgJfuMPrJvBgPQrKCpapgokbMjSTnqMEoh1UDLNPmBHamNVjg5XqzqcQ9imeV0Nsd1T5zWColkk0HAWgICUVC1pQxwWbl0crMRZ%2FKCU&X-Amz-Signature=6308ef41946f6a2c7d800a0e1f488d9d0daa7369e471bd671d96c62334bebd98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
