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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAVA72X%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbRnZJ6qN5TX%2BqFab5FihKflF7XvMGGxwhvzg86V8YRgIhAJk%2BhzJjDEbc%2BryteetmZA%2FZm4HdT9xDI3jxdpcordnpKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi3qHHX%2BEhsHsSaEQq3AObuytsNk3K1I9OsohCKHlEW7k4wxywvQV%2FfJm0RML0Zp9IShdU4WrjTgqW%2BPnV9hC%2Bz9MRYOMuYMV7jrzjpyGgyuKwmL%2Fo8J6U6MOmhLi9oupHXcRqNdveVEhYjSXZBC%2F%2BYPE0Fs4v9gUW59BVSEEbPUKYN9UNwYx6NEyhIU0HcfpOPJmRv22Dyz6mZpPwLAGwTOd0peep9tizYGABa%2FywISngHbmkl%2FKHsQvQAslJpgbUuLG6SkhAhD%2BM%2BAvUGwLPNgS9lyso%2FBYQCyYYhKrTd%2FP91LXAOCqfmr%2BYu63Lcv8NQri9d7CuNycvr1Vy2bal9klpNWunYP%2BRSJC3Ok3wP7xb%2Brj5hiWDALbHtUDtUKnn272zQEtpnO0A9i1T1DVkuwv6AwwcXk5t1CNmAV%2Fne%2FeRu36qqQab0ozHLdmtjQJJfVNyW2A7RVGv5aAtydyWGJRCXOB%2B9J9jiE1ZA5h%2FeJ1D7%2FhxMYFS1R28%2B6rtbaGa33cWksZ9ej%2FjA2BRtotta4AUTjMt1LKNLVHb0kf9FKc4kXFn174a6AYKhrXCyDkBHZa4CPfUWCZCLZEvWGWEsFZuVFiLEMc4%2FlMkfkgCLFyfhsud1l48lGnciM3ZXRKH491sTCiYZWQTFjDKi4DDBjqkAdWAg8J3gyTRe7Sh2OVL0pkBo8LdnhwPzSymNQE0nq6qPpBxwsjW3ZNo2J4dlY1FrVn8qIFxB5JcUN4vsM9%2F5FA3wmk650q4zSDAh%2F5S1OxxE8Tog6mTGTqCDdgcryn29Ui6DU2wa2F1BR2LclmgKe13U3fOIFh68fflTiSqjzeHRvZTgrwIBMtzFUgJnD%2BXZieRTbLL%2BzNTqstwHKWzcWhtyG%2B4&X-Amz-Signature=56fdf805533e457821c021de44b281a3346f7d8fa1f6fde94d2c48c86546829f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAVA72X%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbRnZJ6qN5TX%2BqFab5FihKflF7XvMGGxwhvzg86V8YRgIhAJk%2BhzJjDEbc%2BryteetmZA%2FZm4HdT9xDI3jxdpcordnpKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi3qHHX%2BEhsHsSaEQq3AObuytsNk3K1I9OsohCKHlEW7k4wxywvQV%2FfJm0RML0Zp9IShdU4WrjTgqW%2BPnV9hC%2Bz9MRYOMuYMV7jrzjpyGgyuKwmL%2Fo8J6U6MOmhLi9oupHXcRqNdveVEhYjSXZBC%2F%2BYPE0Fs4v9gUW59BVSEEbPUKYN9UNwYx6NEyhIU0HcfpOPJmRv22Dyz6mZpPwLAGwTOd0peep9tizYGABa%2FywISngHbmkl%2FKHsQvQAslJpgbUuLG6SkhAhD%2BM%2BAvUGwLPNgS9lyso%2FBYQCyYYhKrTd%2FP91LXAOCqfmr%2BYu63Lcv8NQri9d7CuNycvr1Vy2bal9klpNWunYP%2BRSJC3Ok3wP7xb%2Brj5hiWDALbHtUDtUKnn272zQEtpnO0A9i1T1DVkuwv6AwwcXk5t1CNmAV%2Fne%2FeRu36qqQab0ozHLdmtjQJJfVNyW2A7RVGv5aAtydyWGJRCXOB%2B9J9jiE1ZA5h%2FeJ1D7%2FhxMYFS1R28%2B6rtbaGa33cWksZ9ej%2FjA2BRtotta4AUTjMt1LKNLVHb0kf9FKc4kXFn174a6AYKhrXCyDkBHZa4CPfUWCZCLZEvWGWEsFZuVFiLEMc4%2FlMkfkgCLFyfhsud1l48lGnciM3ZXRKH491sTCiYZWQTFjDKi4DDBjqkAdWAg8J3gyTRe7Sh2OVL0pkBo8LdnhwPzSymNQE0nq6qPpBxwsjW3ZNo2J4dlY1FrVn8qIFxB5JcUN4vsM9%2F5FA3wmk650q4zSDAh%2F5S1OxxE8Tog6mTGTqCDdgcryn29Ui6DU2wa2F1BR2LclmgKe13U3fOIFh68fflTiSqjzeHRvZTgrwIBMtzFUgJnD%2BXZieRTbLL%2BzNTqstwHKWzcWhtyG%2B4&X-Amz-Signature=d0b2e5f3b3bb0372ec672f1be931f2e94769948f2e1b03b4359619e84cca6519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAVA72X%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbRnZJ6qN5TX%2BqFab5FihKflF7XvMGGxwhvzg86V8YRgIhAJk%2BhzJjDEbc%2BryteetmZA%2FZm4HdT9xDI3jxdpcordnpKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi3qHHX%2BEhsHsSaEQq3AObuytsNk3K1I9OsohCKHlEW7k4wxywvQV%2FfJm0RML0Zp9IShdU4WrjTgqW%2BPnV9hC%2Bz9MRYOMuYMV7jrzjpyGgyuKwmL%2Fo8J6U6MOmhLi9oupHXcRqNdveVEhYjSXZBC%2F%2BYPE0Fs4v9gUW59BVSEEbPUKYN9UNwYx6NEyhIU0HcfpOPJmRv22Dyz6mZpPwLAGwTOd0peep9tizYGABa%2FywISngHbmkl%2FKHsQvQAslJpgbUuLG6SkhAhD%2BM%2BAvUGwLPNgS9lyso%2FBYQCyYYhKrTd%2FP91LXAOCqfmr%2BYu63Lcv8NQri9d7CuNycvr1Vy2bal9klpNWunYP%2BRSJC3Ok3wP7xb%2Brj5hiWDALbHtUDtUKnn272zQEtpnO0A9i1T1DVkuwv6AwwcXk5t1CNmAV%2Fne%2FeRu36qqQab0ozHLdmtjQJJfVNyW2A7RVGv5aAtydyWGJRCXOB%2B9J9jiE1ZA5h%2FeJ1D7%2FhxMYFS1R28%2B6rtbaGa33cWksZ9ej%2FjA2BRtotta4AUTjMt1LKNLVHb0kf9FKc4kXFn174a6AYKhrXCyDkBHZa4CPfUWCZCLZEvWGWEsFZuVFiLEMc4%2FlMkfkgCLFyfhsud1l48lGnciM3ZXRKH491sTCiYZWQTFjDKi4DDBjqkAdWAg8J3gyTRe7Sh2OVL0pkBo8LdnhwPzSymNQE0nq6qPpBxwsjW3ZNo2J4dlY1FrVn8qIFxB5JcUN4vsM9%2F5FA3wmk650q4zSDAh%2F5S1OxxE8Tog6mTGTqCDdgcryn29Ui6DU2wa2F1BR2LclmgKe13U3fOIFh68fflTiSqjzeHRvZTgrwIBMtzFUgJnD%2BXZieRTbLL%2BzNTqstwHKWzcWhtyG%2B4&X-Amz-Signature=91c188758507495702cc03bf8f4f2b6739cafcf129f83798a8db9145ba41fbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAVA72X%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbRnZJ6qN5TX%2BqFab5FihKflF7XvMGGxwhvzg86V8YRgIhAJk%2BhzJjDEbc%2BryteetmZA%2FZm4HdT9xDI3jxdpcordnpKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi3qHHX%2BEhsHsSaEQq3AObuytsNk3K1I9OsohCKHlEW7k4wxywvQV%2FfJm0RML0Zp9IShdU4WrjTgqW%2BPnV9hC%2Bz9MRYOMuYMV7jrzjpyGgyuKwmL%2Fo8J6U6MOmhLi9oupHXcRqNdveVEhYjSXZBC%2F%2BYPE0Fs4v9gUW59BVSEEbPUKYN9UNwYx6NEyhIU0HcfpOPJmRv22Dyz6mZpPwLAGwTOd0peep9tizYGABa%2FywISngHbmkl%2FKHsQvQAslJpgbUuLG6SkhAhD%2BM%2BAvUGwLPNgS9lyso%2FBYQCyYYhKrTd%2FP91LXAOCqfmr%2BYu63Lcv8NQri9d7CuNycvr1Vy2bal9klpNWunYP%2BRSJC3Ok3wP7xb%2Brj5hiWDALbHtUDtUKnn272zQEtpnO0A9i1T1DVkuwv6AwwcXk5t1CNmAV%2Fne%2FeRu36qqQab0ozHLdmtjQJJfVNyW2A7RVGv5aAtydyWGJRCXOB%2B9J9jiE1ZA5h%2FeJ1D7%2FhxMYFS1R28%2B6rtbaGa33cWksZ9ej%2FjA2BRtotta4AUTjMt1LKNLVHb0kf9FKc4kXFn174a6AYKhrXCyDkBHZa4CPfUWCZCLZEvWGWEsFZuVFiLEMc4%2FlMkfkgCLFyfhsud1l48lGnciM3ZXRKH491sTCiYZWQTFjDKi4DDBjqkAdWAg8J3gyTRe7Sh2OVL0pkBo8LdnhwPzSymNQE0nq6qPpBxwsjW3ZNo2J4dlY1FrVn8qIFxB5JcUN4vsM9%2F5FA3wmk650q4zSDAh%2F5S1OxxE8Tog6mTGTqCDdgcryn29Ui6DU2wa2F1BR2LclmgKe13U3fOIFh68fflTiSqjzeHRvZTgrwIBMtzFUgJnD%2BXZieRTbLL%2BzNTqstwHKWzcWhtyG%2B4&X-Amz-Signature=cb431374316bc2b6af92868d3396e5e4c8dde13bedaa3a9279749a522a145916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAVA72X%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbRnZJ6qN5TX%2BqFab5FihKflF7XvMGGxwhvzg86V8YRgIhAJk%2BhzJjDEbc%2BryteetmZA%2FZm4HdT9xDI3jxdpcordnpKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi3qHHX%2BEhsHsSaEQq3AObuytsNk3K1I9OsohCKHlEW7k4wxywvQV%2FfJm0RML0Zp9IShdU4WrjTgqW%2BPnV9hC%2Bz9MRYOMuYMV7jrzjpyGgyuKwmL%2Fo8J6U6MOmhLi9oupHXcRqNdveVEhYjSXZBC%2F%2BYPE0Fs4v9gUW59BVSEEbPUKYN9UNwYx6NEyhIU0HcfpOPJmRv22Dyz6mZpPwLAGwTOd0peep9tizYGABa%2FywISngHbmkl%2FKHsQvQAslJpgbUuLG6SkhAhD%2BM%2BAvUGwLPNgS9lyso%2FBYQCyYYhKrTd%2FP91LXAOCqfmr%2BYu63Lcv8NQri9d7CuNycvr1Vy2bal9klpNWunYP%2BRSJC3Ok3wP7xb%2Brj5hiWDALbHtUDtUKnn272zQEtpnO0A9i1T1DVkuwv6AwwcXk5t1CNmAV%2Fne%2FeRu36qqQab0ozHLdmtjQJJfVNyW2A7RVGv5aAtydyWGJRCXOB%2B9J9jiE1ZA5h%2FeJ1D7%2FhxMYFS1R28%2B6rtbaGa33cWksZ9ej%2FjA2BRtotta4AUTjMt1LKNLVHb0kf9FKc4kXFn174a6AYKhrXCyDkBHZa4CPfUWCZCLZEvWGWEsFZuVFiLEMc4%2FlMkfkgCLFyfhsud1l48lGnciM3ZXRKH491sTCiYZWQTFjDKi4DDBjqkAdWAg8J3gyTRe7Sh2OVL0pkBo8LdnhwPzSymNQE0nq6qPpBxwsjW3ZNo2J4dlY1FrVn8qIFxB5JcUN4vsM9%2F5FA3wmk650q4zSDAh%2F5S1OxxE8Tog6mTGTqCDdgcryn29Ui6DU2wa2F1BR2LclmgKe13U3fOIFh68fflTiSqjzeHRvZTgrwIBMtzFUgJnD%2BXZieRTbLL%2BzNTqstwHKWzcWhtyG%2B4&X-Amz-Signature=089be1dfa62e7c3b6aeb1fb2ba3585a75471369e0128e818f05554ada60cc2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAVA72X%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbRnZJ6qN5TX%2BqFab5FihKflF7XvMGGxwhvzg86V8YRgIhAJk%2BhzJjDEbc%2BryteetmZA%2FZm4HdT9xDI3jxdpcordnpKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi3qHHX%2BEhsHsSaEQq3AObuytsNk3K1I9OsohCKHlEW7k4wxywvQV%2FfJm0RML0Zp9IShdU4WrjTgqW%2BPnV9hC%2Bz9MRYOMuYMV7jrzjpyGgyuKwmL%2Fo8J6U6MOmhLi9oupHXcRqNdveVEhYjSXZBC%2F%2BYPE0Fs4v9gUW59BVSEEbPUKYN9UNwYx6NEyhIU0HcfpOPJmRv22Dyz6mZpPwLAGwTOd0peep9tizYGABa%2FywISngHbmkl%2FKHsQvQAslJpgbUuLG6SkhAhD%2BM%2BAvUGwLPNgS9lyso%2FBYQCyYYhKrTd%2FP91LXAOCqfmr%2BYu63Lcv8NQri9d7CuNycvr1Vy2bal9klpNWunYP%2BRSJC3Ok3wP7xb%2Brj5hiWDALbHtUDtUKnn272zQEtpnO0A9i1T1DVkuwv6AwwcXk5t1CNmAV%2Fne%2FeRu36qqQab0ozHLdmtjQJJfVNyW2A7RVGv5aAtydyWGJRCXOB%2B9J9jiE1ZA5h%2FeJ1D7%2FhxMYFS1R28%2B6rtbaGa33cWksZ9ej%2FjA2BRtotta4AUTjMt1LKNLVHb0kf9FKc4kXFn174a6AYKhrXCyDkBHZa4CPfUWCZCLZEvWGWEsFZuVFiLEMc4%2FlMkfkgCLFyfhsud1l48lGnciM3ZXRKH491sTCiYZWQTFjDKi4DDBjqkAdWAg8J3gyTRe7Sh2OVL0pkBo8LdnhwPzSymNQE0nq6qPpBxwsjW3ZNo2J4dlY1FrVn8qIFxB5JcUN4vsM9%2F5FA3wmk650q4zSDAh%2F5S1OxxE8Tog6mTGTqCDdgcryn29Ui6DU2wa2F1BR2LclmgKe13U3fOIFh68fflTiSqjzeHRvZTgrwIBMtzFUgJnD%2BXZieRTbLL%2BzNTqstwHKWzcWhtyG%2B4&X-Amz-Signature=bd7eb0baee6bd4b542109de8ce8d748e1f37009120079a569e98becc28e278a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAVA72X%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbRnZJ6qN5TX%2BqFab5FihKflF7XvMGGxwhvzg86V8YRgIhAJk%2BhzJjDEbc%2BryteetmZA%2FZm4HdT9xDI3jxdpcordnpKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi3qHHX%2BEhsHsSaEQq3AObuytsNk3K1I9OsohCKHlEW7k4wxywvQV%2FfJm0RML0Zp9IShdU4WrjTgqW%2BPnV9hC%2Bz9MRYOMuYMV7jrzjpyGgyuKwmL%2Fo8J6U6MOmhLi9oupHXcRqNdveVEhYjSXZBC%2F%2BYPE0Fs4v9gUW59BVSEEbPUKYN9UNwYx6NEyhIU0HcfpOPJmRv22Dyz6mZpPwLAGwTOd0peep9tizYGABa%2FywISngHbmkl%2FKHsQvQAslJpgbUuLG6SkhAhD%2BM%2BAvUGwLPNgS9lyso%2FBYQCyYYhKrTd%2FP91LXAOCqfmr%2BYu63Lcv8NQri9d7CuNycvr1Vy2bal9klpNWunYP%2BRSJC3Ok3wP7xb%2Brj5hiWDALbHtUDtUKnn272zQEtpnO0A9i1T1DVkuwv6AwwcXk5t1CNmAV%2Fne%2FeRu36qqQab0ozHLdmtjQJJfVNyW2A7RVGv5aAtydyWGJRCXOB%2B9J9jiE1ZA5h%2FeJ1D7%2FhxMYFS1R28%2B6rtbaGa33cWksZ9ej%2FjA2BRtotta4AUTjMt1LKNLVHb0kf9FKc4kXFn174a6AYKhrXCyDkBHZa4CPfUWCZCLZEvWGWEsFZuVFiLEMc4%2FlMkfkgCLFyfhsud1l48lGnciM3ZXRKH491sTCiYZWQTFjDKi4DDBjqkAdWAg8J3gyTRe7Sh2OVL0pkBo8LdnhwPzSymNQE0nq6qPpBxwsjW3ZNo2J4dlY1FrVn8qIFxB5JcUN4vsM9%2F5FA3wmk650q4zSDAh%2F5S1OxxE8Tog6mTGTqCDdgcryn29Ui6DU2wa2F1BR2LclmgKe13U3fOIFh68fflTiSqjzeHRvZTgrwIBMtzFUgJnD%2BXZieRTbLL%2BzNTqstwHKWzcWhtyG%2B4&X-Amz-Signature=326a75711140332bcd8d5aec48de5591c7b9ea31cb092c9f4aa20d920e64979b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
