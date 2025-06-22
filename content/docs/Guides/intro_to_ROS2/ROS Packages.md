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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDNUMAN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDhYm1Z2uv52BEMYadbxSltRdvSM1%2Byg3C%2Bs2ja7kFhgQIgRDKN9bHt6lo7ldRgF2U6k5QPRTTfK088%2B8u5eT2%2BbhwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1BSk%2BrvDojiJ8ZjSrcA0QZ1f8kf33dWP724FXRppRjMFDcEv1PxLKvOG3nA4fOAxkexzKLQr9AF9SMaoGbkw5w8sTy38Zc5HlMQCB4BcCn9pkvYjuQUFK9upRc6c0ZqV7tbvvoe6LWp4k02hAp%2FGPi8qNkrXlcaM%2FnRlMdJ%2FNinO%2BAM3pGXqOeczNTjNSrQcmB8O9SVVIh%2B%2Bfn1kdMBG7WKqdxJ40%2FVrDoRmws%2Be4nFReZqZ72NQvMQqTfLbA1YUjJ1fNAWNoRwCDYTR662URJUK6LQYb3sAz%2FvENodcmxJehOntA%2BZnjNQ1OHpiIXJAnQcZXcvofrhS8fPQyfVTa4PgCSQXHMvrizt0ecz720%2BWuXMH7bjGju5N3tHOb18Yv1u2CWP8KkLK6zfiSQBQ2Mb1q75cg8hZFcFkswxLxbsyidjfO3Ex9m1AqEg9n%2BFkIwu%2Fu8bqj72fz8Z%2BKrXVxzRCtMNs0A%2FX8X0t9274UChSiXSC%2B8zVQa0%2BS4GrKkv7Q3k3FjvwFR0kVlUhTovWU%2FawYT3P8b1UhQ3n3OU8L8XLbKwtWlUUA1hYuakiyR0cswj%2FMaKHgesBZrBRONwm8NltosKIzJvGGrEJd1LpQY5dOLnWDFuBoqp%2FXNoeC%2F8hf4hvRdb8A%2FcHouMIiU4cIGOqUBVdnPh%2F32CykEU9%2BQWYkX3%2BzLTfv8T3gBe86wmRcOn6PUF%2BV6WZZTxErd0FsqVaeKnd%2FSuRkl%2Fr8KRsFQiNp%2Fyxxf%2BoNKHHZzpM0HDbzlAxVIcxBeM6fCArhuaGAnZRZbU7PGwb4VaJIRB59XT5Fp0rJrbf8TYGHwwdWLakzjqH3%2FZYF74znejvDOVrpcqI3J6yAGk23bHVb8KJTe%2FmQ20bGSyFec&X-Amz-Signature=6f20ab1ad183c2e19f7d824d4cebb5328da2dafd921bba42427828df07b0d5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDNUMAN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDhYm1Z2uv52BEMYadbxSltRdvSM1%2Byg3C%2Bs2ja7kFhgQIgRDKN9bHt6lo7ldRgF2U6k5QPRTTfK088%2B8u5eT2%2BbhwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1BSk%2BrvDojiJ8ZjSrcA0QZ1f8kf33dWP724FXRppRjMFDcEv1PxLKvOG3nA4fOAxkexzKLQr9AF9SMaoGbkw5w8sTy38Zc5HlMQCB4BcCn9pkvYjuQUFK9upRc6c0ZqV7tbvvoe6LWp4k02hAp%2FGPi8qNkrXlcaM%2FnRlMdJ%2FNinO%2BAM3pGXqOeczNTjNSrQcmB8O9SVVIh%2B%2Bfn1kdMBG7WKqdxJ40%2FVrDoRmws%2Be4nFReZqZ72NQvMQqTfLbA1YUjJ1fNAWNoRwCDYTR662URJUK6LQYb3sAz%2FvENodcmxJehOntA%2BZnjNQ1OHpiIXJAnQcZXcvofrhS8fPQyfVTa4PgCSQXHMvrizt0ecz720%2BWuXMH7bjGju5N3tHOb18Yv1u2CWP8KkLK6zfiSQBQ2Mb1q75cg8hZFcFkswxLxbsyidjfO3Ex9m1AqEg9n%2BFkIwu%2Fu8bqj72fz8Z%2BKrXVxzRCtMNs0A%2FX8X0t9274UChSiXSC%2B8zVQa0%2BS4GrKkv7Q3k3FjvwFR0kVlUhTovWU%2FawYT3P8b1UhQ3n3OU8L8XLbKwtWlUUA1hYuakiyR0cswj%2FMaKHgesBZrBRONwm8NltosKIzJvGGrEJd1LpQY5dOLnWDFuBoqp%2FXNoeC%2F8hf4hvRdb8A%2FcHouMIiU4cIGOqUBVdnPh%2F32CykEU9%2BQWYkX3%2BzLTfv8T3gBe86wmRcOn6PUF%2BV6WZZTxErd0FsqVaeKnd%2FSuRkl%2Fr8KRsFQiNp%2Fyxxf%2BoNKHHZzpM0HDbzlAxVIcxBeM6fCArhuaGAnZRZbU7PGwb4VaJIRB59XT5Fp0rJrbf8TYGHwwdWLakzjqH3%2FZYF74znejvDOVrpcqI3J6yAGk23bHVb8KJTe%2FmQ20bGSyFec&X-Amz-Signature=db650df5343676a5c742397dbafa8ba02404bb21ddf406fdbd793ca0fc0485a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDNUMAN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDhYm1Z2uv52BEMYadbxSltRdvSM1%2Byg3C%2Bs2ja7kFhgQIgRDKN9bHt6lo7ldRgF2U6k5QPRTTfK088%2B8u5eT2%2BbhwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1BSk%2BrvDojiJ8ZjSrcA0QZ1f8kf33dWP724FXRppRjMFDcEv1PxLKvOG3nA4fOAxkexzKLQr9AF9SMaoGbkw5w8sTy38Zc5HlMQCB4BcCn9pkvYjuQUFK9upRc6c0ZqV7tbvvoe6LWp4k02hAp%2FGPi8qNkrXlcaM%2FnRlMdJ%2FNinO%2BAM3pGXqOeczNTjNSrQcmB8O9SVVIh%2B%2Bfn1kdMBG7WKqdxJ40%2FVrDoRmws%2Be4nFReZqZ72NQvMQqTfLbA1YUjJ1fNAWNoRwCDYTR662URJUK6LQYb3sAz%2FvENodcmxJehOntA%2BZnjNQ1OHpiIXJAnQcZXcvofrhS8fPQyfVTa4PgCSQXHMvrizt0ecz720%2BWuXMH7bjGju5N3tHOb18Yv1u2CWP8KkLK6zfiSQBQ2Mb1q75cg8hZFcFkswxLxbsyidjfO3Ex9m1AqEg9n%2BFkIwu%2Fu8bqj72fz8Z%2BKrXVxzRCtMNs0A%2FX8X0t9274UChSiXSC%2B8zVQa0%2BS4GrKkv7Q3k3FjvwFR0kVlUhTovWU%2FawYT3P8b1UhQ3n3OU8L8XLbKwtWlUUA1hYuakiyR0cswj%2FMaKHgesBZrBRONwm8NltosKIzJvGGrEJd1LpQY5dOLnWDFuBoqp%2FXNoeC%2F8hf4hvRdb8A%2FcHouMIiU4cIGOqUBVdnPh%2F32CykEU9%2BQWYkX3%2BzLTfv8T3gBe86wmRcOn6PUF%2BV6WZZTxErd0FsqVaeKnd%2FSuRkl%2Fr8KRsFQiNp%2Fyxxf%2BoNKHHZzpM0HDbzlAxVIcxBeM6fCArhuaGAnZRZbU7PGwb4VaJIRB59XT5Fp0rJrbf8TYGHwwdWLakzjqH3%2FZYF74znejvDOVrpcqI3J6yAGk23bHVb8KJTe%2FmQ20bGSyFec&X-Amz-Signature=ca0be69dec97dbcd7b039e0ebf80ae594ad43a2bb77fd09cc3eb7239e70468e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDNUMAN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDhYm1Z2uv52BEMYadbxSltRdvSM1%2Byg3C%2Bs2ja7kFhgQIgRDKN9bHt6lo7ldRgF2U6k5QPRTTfK088%2B8u5eT2%2BbhwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1BSk%2BrvDojiJ8ZjSrcA0QZ1f8kf33dWP724FXRppRjMFDcEv1PxLKvOG3nA4fOAxkexzKLQr9AF9SMaoGbkw5w8sTy38Zc5HlMQCB4BcCn9pkvYjuQUFK9upRc6c0ZqV7tbvvoe6LWp4k02hAp%2FGPi8qNkrXlcaM%2FnRlMdJ%2FNinO%2BAM3pGXqOeczNTjNSrQcmB8O9SVVIh%2B%2Bfn1kdMBG7WKqdxJ40%2FVrDoRmws%2Be4nFReZqZ72NQvMQqTfLbA1YUjJ1fNAWNoRwCDYTR662URJUK6LQYb3sAz%2FvENodcmxJehOntA%2BZnjNQ1OHpiIXJAnQcZXcvofrhS8fPQyfVTa4PgCSQXHMvrizt0ecz720%2BWuXMH7bjGju5N3tHOb18Yv1u2CWP8KkLK6zfiSQBQ2Mb1q75cg8hZFcFkswxLxbsyidjfO3Ex9m1AqEg9n%2BFkIwu%2Fu8bqj72fz8Z%2BKrXVxzRCtMNs0A%2FX8X0t9274UChSiXSC%2B8zVQa0%2BS4GrKkv7Q3k3FjvwFR0kVlUhTovWU%2FawYT3P8b1UhQ3n3OU8L8XLbKwtWlUUA1hYuakiyR0cswj%2FMaKHgesBZrBRONwm8NltosKIzJvGGrEJd1LpQY5dOLnWDFuBoqp%2FXNoeC%2F8hf4hvRdb8A%2FcHouMIiU4cIGOqUBVdnPh%2F32CykEU9%2BQWYkX3%2BzLTfv8T3gBe86wmRcOn6PUF%2BV6WZZTxErd0FsqVaeKnd%2FSuRkl%2Fr8KRsFQiNp%2Fyxxf%2BoNKHHZzpM0HDbzlAxVIcxBeM6fCArhuaGAnZRZbU7PGwb4VaJIRB59XT5Fp0rJrbf8TYGHwwdWLakzjqH3%2FZYF74znejvDOVrpcqI3J6yAGk23bHVb8KJTe%2FmQ20bGSyFec&X-Amz-Signature=ab5a08794502e44d31f264ffc6bf5b8c9e8e36010336b9d47fc38daf86c4dac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDNUMAN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDhYm1Z2uv52BEMYadbxSltRdvSM1%2Byg3C%2Bs2ja7kFhgQIgRDKN9bHt6lo7ldRgF2U6k5QPRTTfK088%2B8u5eT2%2BbhwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1BSk%2BrvDojiJ8ZjSrcA0QZ1f8kf33dWP724FXRppRjMFDcEv1PxLKvOG3nA4fOAxkexzKLQr9AF9SMaoGbkw5w8sTy38Zc5HlMQCB4BcCn9pkvYjuQUFK9upRc6c0ZqV7tbvvoe6LWp4k02hAp%2FGPi8qNkrXlcaM%2FnRlMdJ%2FNinO%2BAM3pGXqOeczNTjNSrQcmB8O9SVVIh%2B%2Bfn1kdMBG7WKqdxJ40%2FVrDoRmws%2Be4nFReZqZ72NQvMQqTfLbA1YUjJ1fNAWNoRwCDYTR662URJUK6LQYb3sAz%2FvENodcmxJehOntA%2BZnjNQ1OHpiIXJAnQcZXcvofrhS8fPQyfVTa4PgCSQXHMvrizt0ecz720%2BWuXMH7bjGju5N3tHOb18Yv1u2CWP8KkLK6zfiSQBQ2Mb1q75cg8hZFcFkswxLxbsyidjfO3Ex9m1AqEg9n%2BFkIwu%2Fu8bqj72fz8Z%2BKrXVxzRCtMNs0A%2FX8X0t9274UChSiXSC%2B8zVQa0%2BS4GrKkv7Q3k3FjvwFR0kVlUhTovWU%2FawYT3P8b1UhQ3n3OU8L8XLbKwtWlUUA1hYuakiyR0cswj%2FMaKHgesBZrBRONwm8NltosKIzJvGGrEJd1LpQY5dOLnWDFuBoqp%2FXNoeC%2F8hf4hvRdb8A%2FcHouMIiU4cIGOqUBVdnPh%2F32CykEU9%2BQWYkX3%2BzLTfv8T3gBe86wmRcOn6PUF%2BV6WZZTxErd0FsqVaeKnd%2FSuRkl%2Fr8KRsFQiNp%2Fyxxf%2BoNKHHZzpM0HDbzlAxVIcxBeM6fCArhuaGAnZRZbU7PGwb4VaJIRB59XT5Fp0rJrbf8TYGHwwdWLakzjqH3%2FZYF74znejvDOVrpcqI3J6yAGk23bHVb8KJTe%2FmQ20bGSyFec&X-Amz-Signature=dcf632e9dce4c3edf0b620f3d32ffbe86c9aa69259ec3cbaea7ac6e98823e2c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDNUMAN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDhYm1Z2uv52BEMYadbxSltRdvSM1%2Byg3C%2Bs2ja7kFhgQIgRDKN9bHt6lo7ldRgF2U6k5QPRTTfK088%2B8u5eT2%2BbhwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1BSk%2BrvDojiJ8ZjSrcA0QZ1f8kf33dWP724FXRppRjMFDcEv1PxLKvOG3nA4fOAxkexzKLQr9AF9SMaoGbkw5w8sTy38Zc5HlMQCB4BcCn9pkvYjuQUFK9upRc6c0ZqV7tbvvoe6LWp4k02hAp%2FGPi8qNkrXlcaM%2FnRlMdJ%2FNinO%2BAM3pGXqOeczNTjNSrQcmB8O9SVVIh%2B%2Bfn1kdMBG7WKqdxJ40%2FVrDoRmws%2Be4nFReZqZ72NQvMQqTfLbA1YUjJ1fNAWNoRwCDYTR662URJUK6LQYb3sAz%2FvENodcmxJehOntA%2BZnjNQ1OHpiIXJAnQcZXcvofrhS8fPQyfVTa4PgCSQXHMvrizt0ecz720%2BWuXMH7bjGju5N3tHOb18Yv1u2CWP8KkLK6zfiSQBQ2Mb1q75cg8hZFcFkswxLxbsyidjfO3Ex9m1AqEg9n%2BFkIwu%2Fu8bqj72fz8Z%2BKrXVxzRCtMNs0A%2FX8X0t9274UChSiXSC%2B8zVQa0%2BS4GrKkv7Q3k3FjvwFR0kVlUhTovWU%2FawYT3P8b1UhQ3n3OU8L8XLbKwtWlUUA1hYuakiyR0cswj%2FMaKHgesBZrBRONwm8NltosKIzJvGGrEJd1LpQY5dOLnWDFuBoqp%2FXNoeC%2F8hf4hvRdb8A%2FcHouMIiU4cIGOqUBVdnPh%2F32CykEU9%2BQWYkX3%2BzLTfv8T3gBe86wmRcOn6PUF%2BV6WZZTxErd0FsqVaeKnd%2FSuRkl%2Fr8KRsFQiNp%2Fyxxf%2BoNKHHZzpM0HDbzlAxVIcxBeM6fCArhuaGAnZRZbU7PGwb4VaJIRB59XT5Fp0rJrbf8TYGHwwdWLakzjqH3%2FZYF74znejvDOVrpcqI3J6yAGk23bHVb8KJTe%2FmQ20bGSyFec&X-Amz-Signature=2c6af9dbee1446fc5fc40acc6d32557720c9fd75bb6cf749f8ac6c467e8b0f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDNUMAN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDhYm1Z2uv52BEMYadbxSltRdvSM1%2Byg3C%2Bs2ja7kFhgQIgRDKN9bHt6lo7ldRgF2U6k5QPRTTfK088%2B8u5eT2%2BbhwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1BSk%2BrvDojiJ8ZjSrcA0QZ1f8kf33dWP724FXRppRjMFDcEv1PxLKvOG3nA4fOAxkexzKLQr9AF9SMaoGbkw5w8sTy38Zc5HlMQCB4BcCn9pkvYjuQUFK9upRc6c0ZqV7tbvvoe6LWp4k02hAp%2FGPi8qNkrXlcaM%2FnRlMdJ%2FNinO%2BAM3pGXqOeczNTjNSrQcmB8O9SVVIh%2B%2Bfn1kdMBG7WKqdxJ40%2FVrDoRmws%2Be4nFReZqZ72NQvMQqTfLbA1YUjJ1fNAWNoRwCDYTR662URJUK6LQYb3sAz%2FvENodcmxJehOntA%2BZnjNQ1OHpiIXJAnQcZXcvofrhS8fPQyfVTa4PgCSQXHMvrizt0ecz720%2BWuXMH7bjGju5N3tHOb18Yv1u2CWP8KkLK6zfiSQBQ2Mb1q75cg8hZFcFkswxLxbsyidjfO3Ex9m1AqEg9n%2BFkIwu%2Fu8bqj72fz8Z%2BKrXVxzRCtMNs0A%2FX8X0t9274UChSiXSC%2B8zVQa0%2BS4GrKkv7Q3k3FjvwFR0kVlUhTovWU%2FawYT3P8b1UhQ3n3OU8L8XLbKwtWlUUA1hYuakiyR0cswj%2FMaKHgesBZrBRONwm8NltosKIzJvGGrEJd1LpQY5dOLnWDFuBoqp%2FXNoeC%2F8hf4hvRdb8A%2FcHouMIiU4cIGOqUBVdnPh%2F32CykEU9%2BQWYkX3%2BzLTfv8T3gBe86wmRcOn6PUF%2BV6WZZTxErd0FsqVaeKnd%2FSuRkl%2Fr8KRsFQiNp%2Fyxxf%2BoNKHHZzpM0HDbzlAxVIcxBeM6fCArhuaGAnZRZbU7PGwb4VaJIRB59XT5Fp0rJrbf8TYGHwwdWLakzjqH3%2FZYF74znejvDOVrpcqI3J6yAGk23bHVb8KJTe%2FmQ20bGSyFec&X-Amz-Signature=0628faaafe598f7a7ad5516f21adf45e1d9aae65b96aefd52741519b24ec00ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
