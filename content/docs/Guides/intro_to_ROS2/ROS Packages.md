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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRVWOXB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDUle%2BnwsIjPa7VG3KvRFHnyguhNQcE2BAux4D7qwB0nQIhANKbpKVwl1VakUemfsxDrRnXUh8Iyh%2B9rkrnUadTwADdKv8DCFoQABoMNjM3NDIzMTgzODA1IgyAuD2Ws4ev7Rd0oSYq3AOmTKJpgijFPIeGaX8amQENdFTjdj7hPwF7XOj66iRRg2HZxm2vV2CJ9gzSAs11eBWXZ2Pyd8mmbRYUx6%2BkLwB1o3jHXoixVc1Ltt7JIOFzlulhMvVEzcDM0w5m79FlUCkxwMlkn1pU386pLlB%2F6xkuN45QTEhOR9QZCDV3cZCmHKIW9jJxYdQB5CoPXtgc8t3%2FBy4qcjJqZ3f6WytvUbimioKx3c8wkvdf7YqiokpssKPEgVeaD91sIFa5FMzwzDwRX2uAwmUVRYjdpcHqNt7HeXeFCvu5cGG4icQt0amLBAIDXuyTKiqW583UuMDhQuPTQ843b2X%2Ff6%2Fl1JoKnkIpzOv27hfz%2BJX0Te3BCJkq6ddwY%2FIJ1YgFqOQQUr57OgIyMxqIJyCeP2RVP%2F4%2Fzajx3lhfNX1X2XZYrD8sOhzIhIA3mfk9OVV39H2KwqfSh8%2FIBM0XjKu7fS3K1Wb%2Biji8L8ocDOzB8oKOpAQcuHKlcYqJ8Xq5OujTxFqt3KPSNLPFtIuPpybZ9KerIe6WBabkvwC0Hl0tlzdz1nUknoEsKhZ09ZqPUlNzIq9eS5F8wNkrzqBnBwnFqxbXEXiggeHFvU1LwlzPp5P1Y%2FL52VGFB7mdKKpR4x7JMhWVCTD19eS%2BBjqkAQQGI6afaJDa9W1%2Fr1bK9xBu%2FCytzCvPJ7WhjkhS3hleG7sIVOip57znMrwxGZtrLrjbSoFQh7QGJkx5uvmLdmOGKHSGpfqVxiHFnAoILYh6DDuc1vud2gwsarbs6jPvSi%2BTD5dw%2FsHZMqDb8zDaKCzqqfici5qkxIuzb8Bl%2Fx1y495FcVIpS3hRsuxm5aG1z9OAuKY4Zv72uRztaKZCJwSsTk5n&X-Amz-Signature=73cf5631ed5078c135f9da09d9399de5e424fcd07ff176929593307194d988fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRVWOXB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDUle%2BnwsIjPa7VG3KvRFHnyguhNQcE2BAux4D7qwB0nQIhANKbpKVwl1VakUemfsxDrRnXUh8Iyh%2B9rkrnUadTwADdKv8DCFoQABoMNjM3NDIzMTgzODA1IgyAuD2Ws4ev7Rd0oSYq3AOmTKJpgijFPIeGaX8amQENdFTjdj7hPwF7XOj66iRRg2HZxm2vV2CJ9gzSAs11eBWXZ2Pyd8mmbRYUx6%2BkLwB1o3jHXoixVc1Ltt7JIOFzlulhMvVEzcDM0w5m79FlUCkxwMlkn1pU386pLlB%2F6xkuN45QTEhOR9QZCDV3cZCmHKIW9jJxYdQB5CoPXtgc8t3%2FBy4qcjJqZ3f6WytvUbimioKx3c8wkvdf7YqiokpssKPEgVeaD91sIFa5FMzwzDwRX2uAwmUVRYjdpcHqNt7HeXeFCvu5cGG4icQt0amLBAIDXuyTKiqW583UuMDhQuPTQ843b2X%2Ff6%2Fl1JoKnkIpzOv27hfz%2BJX0Te3BCJkq6ddwY%2FIJ1YgFqOQQUr57OgIyMxqIJyCeP2RVP%2F4%2Fzajx3lhfNX1X2XZYrD8sOhzIhIA3mfk9OVV39H2KwqfSh8%2FIBM0XjKu7fS3K1Wb%2Biji8L8ocDOzB8oKOpAQcuHKlcYqJ8Xq5OujTxFqt3KPSNLPFtIuPpybZ9KerIe6WBabkvwC0Hl0tlzdz1nUknoEsKhZ09ZqPUlNzIq9eS5F8wNkrzqBnBwnFqxbXEXiggeHFvU1LwlzPp5P1Y%2FL52VGFB7mdKKpR4x7JMhWVCTD19eS%2BBjqkAQQGI6afaJDa9W1%2Fr1bK9xBu%2FCytzCvPJ7WhjkhS3hleG7sIVOip57znMrwxGZtrLrjbSoFQh7QGJkx5uvmLdmOGKHSGpfqVxiHFnAoILYh6DDuc1vud2gwsarbs6jPvSi%2BTD5dw%2FsHZMqDb8zDaKCzqqfici5qkxIuzb8Bl%2Fx1y495FcVIpS3hRsuxm5aG1z9OAuKY4Zv72uRztaKZCJwSsTk5n&X-Amz-Signature=89861387eef55f685c7f0662a2db12cd6888c69dcec5f58352bc3aaf0f2502dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRVWOXB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDUle%2BnwsIjPa7VG3KvRFHnyguhNQcE2BAux4D7qwB0nQIhANKbpKVwl1VakUemfsxDrRnXUh8Iyh%2B9rkrnUadTwADdKv8DCFoQABoMNjM3NDIzMTgzODA1IgyAuD2Ws4ev7Rd0oSYq3AOmTKJpgijFPIeGaX8amQENdFTjdj7hPwF7XOj66iRRg2HZxm2vV2CJ9gzSAs11eBWXZ2Pyd8mmbRYUx6%2BkLwB1o3jHXoixVc1Ltt7JIOFzlulhMvVEzcDM0w5m79FlUCkxwMlkn1pU386pLlB%2F6xkuN45QTEhOR9QZCDV3cZCmHKIW9jJxYdQB5CoPXtgc8t3%2FBy4qcjJqZ3f6WytvUbimioKx3c8wkvdf7YqiokpssKPEgVeaD91sIFa5FMzwzDwRX2uAwmUVRYjdpcHqNt7HeXeFCvu5cGG4icQt0amLBAIDXuyTKiqW583UuMDhQuPTQ843b2X%2Ff6%2Fl1JoKnkIpzOv27hfz%2BJX0Te3BCJkq6ddwY%2FIJ1YgFqOQQUr57OgIyMxqIJyCeP2RVP%2F4%2Fzajx3lhfNX1X2XZYrD8sOhzIhIA3mfk9OVV39H2KwqfSh8%2FIBM0XjKu7fS3K1Wb%2Biji8L8ocDOzB8oKOpAQcuHKlcYqJ8Xq5OujTxFqt3KPSNLPFtIuPpybZ9KerIe6WBabkvwC0Hl0tlzdz1nUknoEsKhZ09ZqPUlNzIq9eS5F8wNkrzqBnBwnFqxbXEXiggeHFvU1LwlzPp5P1Y%2FL52VGFB7mdKKpR4x7JMhWVCTD19eS%2BBjqkAQQGI6afaJDa9W1%2Fr1bK9xBu%2FCytzCvPJ7WhjkhS3hleG7sIVOip57znMrwxGZtrLrjbSoFQh7QGJkx5uvmLdmOGKHSGpfqVxiHFnAoILYh6DDuc1vud2gwsarbs6jPvSi%2BTD5dw%2FsHZMqDb8zDaKCzqqfici5qkxIuzb8Bl%2Fx1y495FcVIpS3hRsuxm5aG1z9OAuKY4Zv72uRztaKZCJwSsTk5n&X-Amz-Signature=78e89c57959065419ba88cba67384d191d0879fc7a92ccb8c23bf787ddb555f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRVWOXB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDUle%2BnwsIjPa7VG3KvRFHnyguhNQcE2BAux4D7qwB0nQIhANKbpKVwl1VakUemfsxDrRnXUh8Iyh%2B9rkrnUadTwADdKv8DCFoQABoMNjM3NDIzMTgzODA1IgyAuD2Ws4ev7Rd0oSYq3AOmTKJpgijFPIeGaX8amQENdFTjdj7hPwF7XOj66iRRg2HZxm2vV2CJ9gzSAs11eBWXZ2Pyd8mmbRYUx6%2BkLwB1o3jHXoixVc1Ltt7JIOFzlulhMvVEzcDM0w5m79FlUCkxwMlkn1pU386pLlB%2F6xkuN45QTEhOR9QZCDV3cZCmHKIW9jJxYdQB5CoPXtgc8t3%2FBy4qcjJqZ3f6WytvUbimioKx3c8wkvdf7YqiokpssKPEgVeaD91sIFa5FMzwzDwRX2uAwmUVRYjdpcHqNt7HeXeFCvu5cGG4icQt0amLBAIDXuyTKiqW583UuMDhQuPTQ843b2X%2Ff6%2Fl1JoKnkIpzOv27hfz%2BJX0Te3BCJkq6ddwY%2FIJ1YgFqOQQUr57OgIyMxqIJyCeP2RVP%2F4%2Fzajx3lhfNX1X2XZYrD8sOhzIhIA3mfk9OVV39H2KwqfSh8%2FIBM0XjKu7fS3K1Wb%2Biji8L8ocDOzB8oKOpAQcuHKlcYqJ8Xq5OujTxFqt3KPSNLPFtIuPpybZ9KerIe6WBabkvwC0Hl0tlzdz1nUknoEsKhZ09ZqPUlNzIq9eS5F8wNkrzqBnBwnFqxbXEXiggeHFvU1LwlzPp5P1Y%2FL52VGFB7mdKKpR4x7JMhWVCTD19eS%2BBjqkAQQGI6afaJDa9W1%2Fr1bK9xBu%2FCytzCvPJ7WhjkhS3hleG7sIVOip57znMrwxGZtrLrjbSoFQh7QGJkx5uvmLdmOGKHSGpfqVxiHFnAoILYh6DDuc1vud2gwsarbs6jPvSi%2BTD5dw%2FsHZMqDb8zDaKCzqqfici5qkxIuzb8Bl%2Fx1y495FcVIpS3hRsuxm5aG1z9OAuKY4Zv72uRztaKZCJwSsTk5n&X-Amz-Signature=3ab186aea8a774a80a8c82533b194492cdca312e6b6eb68ac4508687f984452c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRVWOXB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDUle%2BnwsIjPa7VG3KvRFHnyguhNQcE2BAux4D7qwB0nQIhANKbpKVwl1VakUemfsxDrRnXUh8Iyh%2B9rkrnUadTwADdKv8DCFoQABoMNjM3NDIzMTgzODA1IgyAuD2Ws4ev7Rd0oSYq3AOmTKJpgijFPIeGaX8amQENdFTjdj7hPwF7XOj66iRRg2HZxm2vV2CJ9gzSAs11eBWXZ2Pyd8mmbRYUx6%2BkLwB1o3jHXoixVc1Ltt7JIOFzlulhMvVEzcDM0w5m79FlUCkxwMlkn1pU386pLlB%2F6xkuN45QTEhOR9QZCDV3cZCmHKIW9jJxYdQB5CoPXtgc8t3%2FBy4qcjJqZ3f6WytvUbimioKx3c8wkvdf7YqiokpssKPEgVeaD91sIFa5FMzwzDwRX2uAwmUVRYjdpcHqNt7HeXeFCvu5cGG4icQt0amLBAIDXuyTKiqW583UuMDhQuPTQ843b2X%2Ff6%2Fl1JoKnkIpzOv27hfz%2BJX0Te3BCJkq6ddwY%2FIJ1YgFqOQQUr57OgIyMxqIJyCeP2RVP%2F4%2Fzajx3lhfNX1X2XZYrD8sOhzIhIA3mfk9OVV39H2KwqfSh8%2FIBM0XjKu7fS3K1Wb%2Biji8L8ocDOzB8oKOpAQcuHKlcYqJ8Xq5OujTxFqt3KPSNLPFtIuPpybZ9KerIe6WBabkvwC0Hl0tlzdz1nUknoEsKhZ09ZqPUlNzIq9eS5F8wNkrzqBnBwnFqxbXEXiggeHFvU1LwlzPp5P1Y%2FL52VGFB7mdKKpR4x7JMhWVCTD19eS%2BBjqkAQQGI6afaJDa9W1%2Fr1bK9xBu%2FCytzCvPJ7WhjkhS3hleG7sIVOip57znMrwxGZtrLrjbSoFQh7QGJkx5uvmLdmOGKHSGpfqVxiHFnAoILYh6DDuc1vud2gwsarbs6jPvSi%2BTD5dw%2FsHZMqDb8zDaKCzqqfici5qkxIuzb8Bl%2Fx1y495FcVIpS3hRsuxm5aG1z9OAuKY4Zv72uRztaKZCJwSsTk5n&X-Amz-Signature=c3667dd728a08b6e7755cb7d5e3a887befc984dd7ba30c0f16c4dcbd558eeee2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRVWOXB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDUle%2BnwsIjPa7VG3KvRFHnyguhNQcE2BAux4D7qwB0nQIhANKbpKVwl1VakUemfsxDrRnXUh8Iyh%2B9rkrnUadTwADdKv8DCFoQABoMNjM3NDIzMTgzODA1IgyAuD2Ws4ev7Rd0oSYq3AOmTKJpgijFPIeGaX8amQENdFTjdj7hPwF7XOj66iRRg2HZxm2vV2CJ9gzSAs11eBWXZ2Pyd8mmbRYUx6%2BkLwB1o3jHXoixVc1Ltt7JIOFzlulhMvVEzcDM0w5m79FlUCkxwMlkn1pU386pLlB%2F6xkuN45QTEhOR9QZCDV3cZCmHKIW9jJxYdQB5CoPXtgc8t3%2FBy4qcjJqZ3f6WytvUbimioKx3c8wkvdf7YqiokpssKPEgVeaD91sIFa5FMzwzDwRX2uAwmUVRYjdpcHqNt7HeXeFCvu5cGG4icQt0amLBAIDXuyTKiqW583UuMDhQuPTQ843b2X%2Ff6%2Fl1JoKnkIpzOv27hfz%2BJX0Te3BCJkq6ddwY%2FIJ1YgFqOQQUr57OgIyMxqIJyCeP2RVP%2F4%2Fzajx3lhfNX1X2XZYrD8sOhzIhIA3mfk9OVV39H2KwqfSh8%2FIBM0XjKu7fS3K1Wb%2Biji8L8ocDOzB8oKOpAQcuHKlcYqJ8Xq5OujTxFqt3KPSNLPFtIuPpybZ9KerIe6WBabkvwC0Hl0tlzdz1nUknoEsKhZ09ZqPUlNzIq9eS5F8wNkrzqBnBwnFqxbXEXiggeHFvU1LwlzPp5P1Y%2FL52VGFB7mdKKpR4x7JMhWVCTD19eS%2BBjqkAQQGI6afaJDa9W1%2Fr1bK9xBu%2FCytzCvPJ7WhjkhS3hleG7sIVOip57znMrwxGZtrLrjbSoFQh7QGJkx5uvmLdmOGKHSGpfqVxiHFnAoILYh6DDuc1vud2gwsarbs6jPvSi%2BTD5dw%2FsHZMqDb8zDaKCzqqfici5qkxIuzb8Bl%2Fx1y495FcVIpS3hRsuxm5aG1z9OAuKY4Zv72uRztaKZCJwSsTk5n&X-Amz-Signature=dae0a4711df6ba4cbb2f70ba3fe37c50b2a89bebb8edcf428430f0795f7546eb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRVWOXB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDUle%2BnwsIjPa7VG3KvRFHnyguhNQcE2BAux4D7qwB0nQIhANKbpKVwl1VakUemfsxDrRnXUh8Iyh%2B9rkrnUadTwADdKv8DCFoQABoMNjM3NDIzMTgzODA1IgyAuD2Ws4ev7Rd0oSYq3AOmTKJpgijFPIeGaX8amQENdFTjdj7hPwF7XOj66iRRg2HZxm2vV2CJ9gzSAs11eBWXZ2Pyd8mmbRYUx6%2BkLwB1o3jHXoixVc1Ltt7JIOFzlulhMvVEzcDM0w5m79FlUCkxwMlkn1pU386pLlB%2F6xkuN45QTEhOR9QZCDV3cZCmHKIW9jJxYdQB5CoPXtgc8t3%2FBy4qcjJqZ3f6WytvUbimioKx3c8wkvdf7YqiokpssKPEgVeaD91sIFa5FMzwzDwRX2uAwmUVRYjdpcHqNt7HeXeFCvu5cGG4icQt0amLBAIDXuyTKiqW583UuMDhQuPTQ843b2X%2Ff6%2Fl1JoKnkIpzOv27hfz%2BJX0Te3BCJkq6ddwY%2FIJ1YgFqOQQUr57OgIyMxqIJyCeP2RVP%2F4%2Fzajx3lhfNX1X2XZYrD8sOhzIhIA3mfk9OVV39H2KwqfSh8%2FIBM0XjKu7fS3K1Wb%2Biji8L8ocDOzB8oKOpAQcuHKlcYqJ8Xq5OujTxFqt3KPSNLPFtIuPpybZ9KerIe6WBabkvwC0Hl0tlzdz1nUknoEsKhZ09ZqPUlNzIq9eS5F8wNkrzqBnBwnFqxbXEXiggeHFvU1LwlzPp5P1Y%2FL52VGFB7mdKKpR4x7JMhWVCTD19eS%2BBjqkAQQGI6afaJDa9W1%2Fr1bK9xBu%2FCytzCvPJ7WhjkhS3hleG7sIVOip57znMrwxGZtrLrjbSoFQh7QGJkx5uvmLdmOGKHSGpfqVxiHFnAoILYh6DDuc1vud2gwsarbs6jPvSi%2BTD5dw%2FsHZMqDb8zDaKCzqqfici5qkxIuzb8Bl%2Fx1y495FcVIpS3hRsuxm5aG1z9OAuKY4Zv72uRztaKZCJwSsTk5n&X-Amz-Signature=22a57cac6f4f80b232403abce4592e77ebcc66b06859f03ce5dd9fcbc3a19a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
