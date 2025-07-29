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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RO3NJ7X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGhr9XQ463uOFldzt9%2BLAh%2B0BeRm6x4xL%2F3HtNBmEmPVAiAkp%2BekGImlvqUNCuWzyxTWZ2Z8CHfZDzbN3y8VmM16SCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNaLVbV0SkOcOtqmvKtwDGMz4tg5V1Ki9eumACdC9qlm6WXex5Egclitin2rF85ekVzT1qDgKeeHSqaBAu8XXO1359xdMvRVjftjirLMWjZLSI5v8AZ%2B7kN2wplrOdRBS0NFSzlqawA4xxv0k1h2ykxUCDVlKjcTh2eVD1LMq91KpqPdBKGxY7zO9RkyeUIBkiITBjFe6UkwXP0TwcOQF1UJOHQYnlN2fjLxaovkR9DJ3T6vEziiw0Dxz0DMKAcQKepc5nwQpOnfsc6CooP1yre7u27LIBl0%2B%2BnJ1yU%2FLXZXGxMWFC0%2B%2F6YhWx69FRMxFWxXlHPzxmMoanTyOvAWjgV0dAhUTe9VGj4S7I5QssHM2J%2FKZDnDnpeCtRmXwy7C%2Bif5mv9%2FD9i97ZmDhARMJtt5ONCQZ7XwaY%2FzE67MQIYjeu3mTWEBv6%2FqPkU21ayUFDFS0OMG3yo1VJc%2Fbc4TGPe4s9DVSaKJvl9rUGkrnXoJh7gXrVns4F0LbUzLfRe7Rpb%2BRllPfm8SB0ggQhlJ2eN%2Bm6Z0t0ITigqcAcxPs4Ou52bbCaEbz0cDHFKZMdG6Z7MPsbxbYUkhu67TooV7SmRyKE6A90IlA1Z03CTt5i5Eeq5GiaMyae1EXKzJHIwiVurU6HYwQaXFPCT8wkbGixAY6pgEEnWXrul1yNc8SUwVxlFNkYi2vx5KjEIF3DLpw6V3w2CXfklC2%2Bp8CdQ7JLm8Hj1bEjGB%2FCvPRF2oluX8eh%2BcGDh4gYyf1c9r4lW73oz3jvGau%2Bm5AHDqJr1OFChsSzD79tbcZJH4jI0UPCIstHhKV0nkaffxhvjvGlGcjFOMEkrm5tBG2GqKOOUMyuQaYuOGzxx3XkUaWo6HVUbRaaU%2BsD%2BeT0Ifm&X-Amz-Signature=e96a9ec44eeaf4111614af175185688db89096a23c9c9b21a81ba0154045055c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RO3NJ7X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGhr9XQ463uOFldzt9%2BLAh%2B0BeRm6x4xL%2F3HtNBmEmPVAiAkp%2BekGImlvqUNCuWzyxTWZ2Z8CHfZDzbN3y8VmM16SCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNaLVbV0SkOcOtqmvKtwDGMz4tg5V1Ki9eumACdC9qlm6WXex5Egclitin2rF85ekVzT1qDgKeeHSqaBAu8XXO1359xdMvRVjftjirLMWjZLSI5v8AZ%2B7kN2wplrOdRBS0NFSzlqawA4xxv0k1h2ykxUCDVlKjcTh2eVD1LMq91KpqPdBKGxY7zO9RkyeUIBkiITBjFe6UkwXP0TwcOQF1UJOHQYnlN2fjLxaovkR9DJ3T6vEziiw0Dxz0DMKAcQKepc5nwQpOnfsc6CooP1yre7u27LIBl0%2B%2BnJ1yU%2FLXZXGxMWFC0%2B%2F6YhWx69FRMxFWxXlHPzxmMoanTyOvAWjgV0dAhUTe9VGj4S7I5QssHM2J%2FKZDnDnpeCtRmXwy7C%2Bif5mv9%2FD9i97ZmDhARMJtt5ONCQZ7XwaY%2FzE67MQIYjeu3mTWEBv6%2FqPkU21ayUFDFS0OMG3yo1VJc%2Fbc4TGPe4s9DVSaKJvl9rUGkrnXoJh7gXrVns4F0LbUzLfRe7Rpb%2BRllPfm8SB0ggQhlJ2eN%2Bm6Z0t0ITigqcAcxPs4Ou52bbCaEbz0cDHFKZMdG6Z7MPsbxbYUkhu67TooV7SmRyKE6A90IlA1Z03CTt5i5Eeq5GiaMyae1EXKzJHIwiVurU6HYwQaXFPCT8wkbGixAY6pgEEnWXrul1yNc8SUwVxlFNkYi2vx5KjEIF3DLpw6V3w2CXfklC2%2Bp8CdQ7JLm8Hj1bEjGB%2FCvPRF2oluX8eh%2BcGDh4gYyf1c9r4lW73oz3jvGau%2Bm5AHDqJr1OFChsSzD79tbcZJH4jI0UPCIstHhKV0nkaffxhvjvGlGcjFOMEkrm5tBG2GqKOOUMyuQaYuOGzxx3XkUaWo6HVUbRaaU%2BsD%2BeT0Ifm&X-Amz-Signature=23ede1998c54049539a452542cd6792dad753664b96d05a98ddfd4e404a62b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RO3NJ7X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGhr9XQ463uOFldzt9%2BLAh%2B0BeRm6x4xL%2F3HtNBmEmPVAiAkp%2BekGImlvqUNCuWzyxTWZ2Z8CHfZDzbN3y8VmM16SCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNaLVbV0SkOcOtqmvKtwDGMz4tg5V1Ki9eumACdC9qlm6WXex5Egclitin2rF85ekVzT1qDgKeeHSqaBAu8XXO1359xdMvRVjftjirLMWjZLSI5v8AZ%2B7kN2wplrOdRBS0NFSzlqawA4xxv0k1h2ykxUCDVlKjcTh2eVD1LMq91KpqPdBKGxY7zO9RkyeUIBkiITBjFe6UkwXP0TwcOQF1UJOHQYnlN2fjLxaovkR9DJ3T6vEziiw0Dxz0DMKAcQKepc5nwQpOnfsc6CooP1yre7u27LIBl0%2B%2BnJ1yU%2FLXZXGxMWFC0%2B%2F6YhWx69FRMxFWxXlHPzxmMoanTyOvAWjgV0dAhUTe9VGj4S7I5QssHM2J%2FKZDnDnpeCtRmXwy7C%2Bif5mv9%2FD9i97ZmDhARMJtt5ONCQZ7XwaY%2FzE67MQIYjeu3mTWEBv6%2FqPkU21ayUFDFS0OMG3yo1VJc%2Fbc4TGPe4s9DVSaKJvl9rUGkrnXoJh7gXrVns4F0LbUzLfRe7Rpb%2BRllPfm8SB0ggQhlJ2eN%2Bm6Z0t0ITigqcAcxPs4Ou52bbCaEbz0cDHFKZMdG6Z7MPsbxbYUkhu67TooV7SmRyKE6A90IlA1Z03CTt5i5Eeq5GiaMyae1EXKzJHIwiVurU6HYwQaXFPCT8wkbGixAY6pgEEnWXrul1yNc8SUwVxlFNkYi2vx5KjEIF3DLpw6V3w2CXfklC2%2Bp8CdQ7JLm8Hj1bEjGB%2FCvPRF2oluX8eh%2BcGDh4gYyf1c9r4lW73oz3jvGau%2Bm5AHDqJr1OFChsSzD79tbcZJH4jI0UPCIstHhKV0nkaffxhvjvGlGcjFOMEkrm5tBG2GqKOOUMyuQaYuOGzxx3XkUaWo6HVUbRaaU%2BsD%2BeT0Ifm&X-Amz-Signature=072d5b5ab4955a1ef73048b9696b3e02c0c9b5192411a371828f0b1f49a633ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RO3NJ7X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGhr9XQ463uOFldzt9%2BLAh%2B0BeRm6x4xL%2F3HtNBmEmPVAiAkp%2BekGImlvqUNCuWzyxTWZ2Z8CHfZDzbN3y8VmM16SCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNaLVbV0SkOcOtqmvKtwDGMz4tg5V1Ki9eumACdC9qlm6WXex5Egclitin2rF85ekVzT1qDgKeeHSqaBAu8XXO1359xdMvRVjftjirLMWjZLSI5v8AZ%2B7kN2wplrOdRBS0NFSzlqawA4xxv0k1h2ykxUCDVlKjcTh2eVD1LMq91KpqPdBKGxY7zO9RkyeUIBkiITBjFe6UkwXP0TwcOQF1UJOHQYnlN2fjLxaovkR9DJ3T6vEziiw0Dxz0DMKAcQKepc5nwQpOnfsc6CooP1yre7u27LIBl0%2B%2BnJ1yU%2FLXZXGxMWFC0%2B%2F6YhWx69FRMxFWxXlHPzxmMoanTyOvAWjgV0dAhUTe9VGj4S7I5QssHM2J%2FKZDnDnpeCtRmXwy7C%2Bif5mv9%2FD9i97ZmDhARMJtt5ONCQZ7XwaY%2FzE67MQIYjeu3mTWEBv6%2FqPkU21ayUFDFS0OMG3yo1VJc%2Fbc4TGPe4s9DVSaKJvl9rUGkrnXoJh7gXrVns4F0LbUzLfRe7Rpb%2BRllPfm8SB0ggQhlJ2eN%2Bm6Z0t0ITigqcAcxPs4Ou52bbCaEbz0cDHFKZMdG6Z7MPsbxbYUkhu67TooV7SmRyKE6A90IlA1Z03CTt5i5Eeq5GiaMyae1EXKzJHIwiVurU6HYwQaXFPCT8wkbGixAY6pgEEnWXrul1yNc8SUwVxlFNkYi2vx5KjEIF3DLpw6V3w2CXfklC2%2Bp8CdQ7JLm8Hj1bEjGB%2FCvPRF2oluX8eh%2BcGDh4gYyf1c9r4lW73oz3jvGau%2Bm5AHDqJr1OFChsSzD79tbcZJH4jI0UPCIstHhKV0nkaffxhvjvGlGcjFOMEkrm5tBG2GqKOOUMyuQaYuOGzxx3XkUaWo6HVUbRaaU%2BsD%2BeT0Ifm&X-Amz-Signature=7db714603713999f1b08513fb94e99837b695acc066c710607388fd24120a637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RO3NJ7X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGhr9XQ463uOFldzt9%2BLAh%2B0BeRm6x4xL%2F3HtNBmEmPVAiAkp%2BekGImlvqUNCuWzyxTWZ2Z8CHfZDzbN3y8VmM16SCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNaLVbV0SkOcOtqmvKtwDGMz4tg5V1Ki9eumACdC9qlm6WXex5Egclitin2rF85ekVzT1qDgKeeHSqaBAu8XXO1359xdMvRVjftjirLMWjZLSI5v8AZ%2B7kN2wplrOdRBS0NFSzlqawA4xxv0k1h2ykxUCDVlKjcTh2eVD1LMq91KpqPdBKGxY7zO9RkyeUIBkiITBjFe6UkwXP0TwcOQF1UJOHQYnlN2fjLxaovkR9DJ3T6vEziiw0Dxz0DMKAcQKepc5nwQpOnfsc6CooP1yre7u27LIBl0%2B%2BnJ1yU%2FLXZXGxMWFC0%2B%2F6YhWx69FRMxFWxXlHPzxmMoanTyOvAWjgV0dAhUTe9VGj4S7I5QssHM2J%2FKZDnDnpeCtRmXwy7C%2Bif5mv9%2FD9i97ZmDhARMJtt5ONCQZ7XwaY%2FzE67MQIYjeu3mTWEBv6%2FqPkU21ayUFDFS0OMG3yo1VJc%2Fbc4TGPe4s9DVSaKJvl9rUGkrnXoJh7gXrVns4F0LbUzLfRe7Rpb%2BRllPfm8SB0ggQhlJ2eN%2Bm6Z0t0ITigqcAcxPs4Ou52bbCaEbz0cDHFKZMdG6Z7MPsbxbYUkhu67TooV7SmRyKE6A90IlA1Z03CTt5i5Eeq5GiaMyae1EXKzJHIwiVurU6HYwQaXFPCT8wkbGixAY6pgEEnWXrul1yNc8SUwVxlFNkYi2vx5KjEIF3DLpw6V3w2CXfklC2%2Bp8CdQ7JLm8Hj1bEjGB%2FCvPRF2oluX8eh%2BcGDh4gYyf1c9r4lW73oz3jvGau%2Bm5AHDqJr1OFChsSzD79tbcZJH4jI0UPCIstHhKV0nkaffxhvjvGlGcjFOMEkrm5tBG2GqKOOUMyuQaYuOGzxx3XkUaWo6HVUbRaaU%2BsD%2BeT0Ifm&X-Amz-Signature=41e240abb03c102b0c9d4c58df4eaba71a1501b8deaf0f5cf782176474bc1281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RO3NJ7X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGhr9XQ463uOFldzt9%2BLAh%2B0BeRm6x4xL%2F3HtNBmEmPVAiAkp%2BekGImlvqUNCuWzyxTWZ2Z8CHfZDzbN3y8VmM16SCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNaLVbV0SkOcOtqmvKtwDGMz4tg5V1Ki9eumACdC9qlm6WXex5Egclitin2rF85ekVzT1qDgKeeHSqaBAu8XXO1359xdMvRVjftjirLMWjZLSI5v8AZ%2B7kN2wplrOdRBS0NFSzlqawA4xxv0k1h2ykxUCDVlKjcTh2eVD1LMq91KpqPdBKGxY7zO9RkyeUIBkiITBjFe6UkwXP0TwcOQF1UJOHQYnlN2fjLxaovkR9DJ3T6vEziiw0Dxz0DMKAcQKepc5nwQpOnfsc6CooP1yre7u27LIBl0%2B%2BnJ1yU%2FLXZXGxMWFC0%2B%2F6YhWx69FRMxFWxXlHPzxmMoanTyOvAWjgV0dAhUTe9VGj4S7I5QssHM2J%2FKZDnDnpeCtRmXwy7C%2Bif5mv9%2FD9i97ZmDhARMJtt5ONCQZ7XwaY%2FzE67MQIYjeu3mTWEBv6%2FqPkU21ayUFDFS0OMG3yo1VJc%2Fbc4TGPe4s9DVSaKJvl9rUGkrnXoJh7gXrVns4F0LbUzLfRe7Rpb%2BRllPfm8SB0ggQhlJ2eN%2Bm6Z0t0ITigqcAcxPs4Ou52bbCaEbz0cDHFKZMdG6Z7MPsbxbYUkhu67TooV7SmRyKE6A90IlA1Z03CTt5i5Eeq5GiaMyae1EXKzJHIwiVurU6HYwQaXFPCT8wkbGixAY6pgEEnWXrul1yNc8SUwVxlFNkYi2vx5KjEIF3DLpw6V3w2CXfklC2%2Bp8CdQ7JLm8Hj1bEjGB%2FCvPRF2oluX8eh%2BcGDh4gYyf1c9r4lW73oz3jvGau%2Bm5AHDqJr1OFChsSzD79tbcZJH4jI0UPCIstHhKV0nkaffxhvjvGlGcjFOMEkrm5tBG2GqKOOUMyuQaYuOGzxx3XkUaWo6HVUbRaaU%2BsD%2BeT0Ifm&X-Amz-Signature=a3fad4f1939c23d329d54b452233b4146ce7677a1c0a7ef362a56bf8698b5a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RO3NJ7X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGhr9XQ463uOFldzt9%2BLAh%2B0BeRm6x4xL%2F3HtNBmEmPVAiAkp%2BekGImlvqUNCuWzyxTWZ2Z8CHfZDzbN3y8VmM16SCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNaLVbV0SkOcOtqmvKtwDGMz4tg5V1Ki9eumACdC9qlm6WXex5Egclitin2rF85ekVzT1qDgKeeHSqaBAu8XXO1359xdMvRVjftjirLMWjZLSI5v8AZ%2B7kN2wplrOdRBS0NFSzlqawA4xxv0k1h2ykxUCDVlKjcTh2eVD1LMq91KpqPdBKGxY7zO9RkyeUIBkiITBjFe6UkwXP0TwcOQF1UJOHQYnlN2fjLxaovkR9DJ3T6vEziiw0Dxz0DMKAcQKepc5nwQpOnfsc6CooP1yre7u27LIBl0%2B%2BnJ1yU%2FLXZXGxMWFC0%2B%2F6YhWx69FRMxFWxXlHPzxmMoanTyOvAWjgV0dAhUTe9VGj4S7I5QssHM2J%2FKZDnDnpeCtRmXwy7C%2Bif5mv9%2FD9i97ZmDhARMJtt5ONCQZ7XwaY%2FzE67MQIYjeu3mTWEBv6%2FqPkU21ayUFDFS0OMG3yo1VJc%2Fbc4TGPe4s9DVSaKJvl9rUGkrnXoJh7gXrVns4F0LbUzLfRe7Rpb%2BRllPfm8SB0ggQhlJ2eN%2Bm6Z0t0ITigqcAcxPs4Ou52bbCaEbz0cDHFKZMdG6Z7MPsbxbYUkhu67TooV7SmRyKE6A90IlA1Z03CTt5i5Eeq5GiaMyae1EXKzJHIwiVurU6HYwQaXFPCT8wkbGixAY6pgEEnWXrul1yNc8SUwVxlFNkYi2vx5KjEIF3DLpw6V3w2CXfklC2%2Bp8CdQ7JLm8Hj1bEjGB%2FCvPRF2oluX8eh%2BcGDh4gYyf1c9r4lW73oz3jvGau%2Bm5AHDqJr1OFChsSzD79tbcZJH4jI0UPCIstHhKV0nkaffxhvjvGlGcjFOMEkrm5tBG2GqKOOUMyuQaYuOGzxx3XkUaWo6HVUbRaaU%2BsD%2BeT0Ifm&X-Amz-Signature=cdffb5089dd1666ed89a31e92fe4795074220836f0ac69c0a030000c6440dafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
