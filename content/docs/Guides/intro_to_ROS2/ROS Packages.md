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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5XKXYE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHBzz34DGKh%2F9of1FIppAwa%2FiTsrBFkLGEGoOVH%2FKnwIgd4IWTF%2BtiGoeEAWrSo7j54Ivfh8CWbR7k4hNOGL6UQMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPCWjfbKnMxre2IuhyrcAz8rp49hBCm5B%2F7CHN%2FhkoFRvc5g5UdUf1liTJqjUiuJkPRP8mA9PGoJBITBdMgVFv70KAOV4uR5mb0pIqt8TE9lZSUcPbECQLib06A8LZFFCeTEED2DIu0g8%2BmLEQlNmJJhcMFx83JI%2BEkXYai%2BHWsW9p%2FUwnEblfyBTgP%2BwDKdNuv%2BGqc%2Fx3xONvI5W0bkjpQlO5E%2BKDMCtdokhdGbCOfcdRAM4ERdkLvUynCJ4lHai1jDDDHcBsFKvcosT88xKttsBlZcy9QXh%2BfFgLFVErUka3Z%2FGQeNQKHPRkqa3hiHnpjvvRDEcrsG4zJXfMfREb%2BupwMq7RtiaV2LFu8E99YJUo0bOUG91cgqtEGNqB3JChw7CxPiICgUcLTFbVDUQmbh4KGYv5IECrYHtVMmcKLLcvkwGvEyztAj18kJgllvGmnpqlOCuyGSlx1sZu19pH8DClhE%2B0lwjK8BDglBLyAmwORe1sUJyrTOzIWhETMyQ8fxLnSswjQxmnBUM91M4tQ7ErjhA01EyX5teRDaxfhBaYi9qCHQ3lxz8Jv8rOwAX%2BxxI1uJMQs3g1ADo2SUozLTjknojuceJC4z%2B8Tbl29oMQXUQpAEaKq6bKpvUGR5K3krbiOAoahXY5s%2FMI6m2b4GOqUBLBhkzEGQbwvmzcX9XRL3%2F6aSjb83PLw6R9eE84mW8PYmocqs8Jgmt2QZgNWMeGhnVqOomR8fFjk%2Fpv77ASU9m3twAUDckAbHzRLMKj7%2FKUQz8UBS8EUbJgjUOkp%2F3GaJXweuaHbjoLtl7BbZi3Iv%2BuB%2BNiGvF4OTjNWT65xJZj5%2FqR99%2FOsdifiJ8YNiiWdfDzUpt%2B37Fu5%2BsDxr1tpf%2FP9Cadfx&X-Amz-Signature=28ffd45e45cfff9a8a6e5fdf371d2a0f64412d99ebd156effb007d37fa7ed580&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5XKXYE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHBzz34DGKh%2F9of1FIppAwa%2FiTsrBFkLGEGoOVH%2FKnwIgd4IWTF%2BtiGoeEAWrSo7j54Ivfh8CWbR7k4hNOGL6UQMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPCWjfbKnMxre2IuhyrcAz8rp49hBCm5B%2F7CHN%2FhkoFRvc5g5UdUf1liTJqjUiuJkPRP8mA9PGoJBITBdMgVFv70KAOV4uR5mb0pIqt8TE9lZSUcPbECQLib06A8LZFFCeTEED2DIu0g8%2BmLEQlNmJJhcMFx83JI%2BEkXYai%2BHWsW9p%2FUwnEblfyBTgP%2BwDKdNuv%2BGqc%2Fx3xONvI5W0bkjpQlO5E%2BKDMCtdokhdGbCOfcdRAM4ERdkLvUynCJ4lHai1jDDDHcBsFKvcosT88xKttsBlZcy9QXh%2BfFgLFVErUka3Z%2FGQeNQKHPRkqa3hiHnpjvvRDEcrsG4zJXfMfREb%2BupwMq7RtiaV2LFu8E99YJUo0bOUG91cgqtEGNqB3JChw7CxPiICgUcLTFbVDUQmbh4KGYv5IECrYHtVMmcKLLcvkwGvEyztAj18kJgllvGmnpqlOCuyGSlx1sZu19pH8DClhE%2B0lwjK8BDglBLyAmwORe1sUJyrTOzIWhETMyQ8fxLnSswjQxmnBUM91M4tQ7ErjhA01EyX5teRDaxfhBaYi9qCHQ3lxz8Jv8rOwAX%2BxxI1uJMQs3g1ADo2SUozLTjknojuceJC4z%2B8Tbl29oMQXUQpAEaKq6bKpvUGR5K3krbiOAoahXY5s%2FMI6m2b4GOqUBLBhkzEGQbwvmzcX9XRL3%2F6aSjb83PLw6R9eE84mW8PYmocqs8Jgmt2QZgNWMeGhnVqOomR8fFjk%2Fpv77ASU9m3twAUDckAbHzRLMKj7%2FKUQz8UBS8EUbJgjUOkp%2F3GaJXweuaHbjoLtl7BbZi3Iv%2BuB%2BNiGvF4OTjNWT65xJZj5%2FqR99%2FOsdifiJ8YNiiWdfDzUpt%2B37Fu5%2BsDxr1tpf%2FP9Cadfx&X-Amz-Signature=fc40f31dfc4ec0605217dd81f97944a458c221c405a25113c494877a8ac0451d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5XKXYE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHBzz34DGKh%2F9of1FIppAwa%2FiTsrBFkLGEGoOVH%2FKnwIgd4IWTF%2BtiGoeEAWrSo7j54Ivfh8CWbR7k4hNOGL6UQMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPCWjfbKnMxre2IuhyrcAz8rp49hBCm5B%2F7CHN%2FhkoFRvc5g5UdUf1liTJqjUiuJkPRP8mA9PGoJBITBdMgVFv70KAOV4uR5mb0pIqt8TE9lZSUcPbECQLib06A8LZFFCeTEED2DIu0g8%2BmLEQlNmJJhcMFx83JI%2BEkXYai%2BHWsW9p%2FUwnEblfyBTgP%2BwDKdNuv%2BGqc%2Fx3xONvI5W0bkjpQlO5E%2BKDMCtdokhdGbCOfcdRAM4ERdkLvUynCJ4lHai1jDDDHcBsFKvcosT88xKttsBlZcy9QXh%2BfFgLFVErUka3Z%2FGQeNQKHPRkqa3hiHnpjvvRDEcrsG4zJXfMfREb%2BupwMq7RtiaV2LFu8E99YJUo0bOUG91cgqtEGNqB3JChw7CxPiICgUcLTFbVDUQmbh4KGYv5IECrYHtVMmcKLLcvkwGvEyztAj18kJgllvGmnpqlOCuyGSlx1sZu19pH8DClhE%2B0lwjK8BDglBLyAmwORe1sUJyrTOzIWhETMyQ8fxLnSswjQxmnBUM91M4tQ7ErjhA01EyX5teRDaxfhBaYi9qCHQ3lxz8Jv8rOwAX%2BxxI1uJMQs3g1ADo2SUozLTjknojuceJC4z%2B8Tbl29oMQXUQpAEaKq6bKpvUGR5K3krbiOAoahXY5s%2FMI6m2b4GOqUBLBhkzEGQbwvmzcX9XRL3%2F6aSjb83PLw6R9eE84mW8PYmocqs8Jgmt2QZgNWMeGhnVqOomR8fFjk%2Fpv77ASU9m3twAUDckAbHzRLMKj7%2FKUQz8UBS8EUbJgjUOkp%2F3GaJXweuaHbjoLtl7BbZi3Iv%2BuB%2BNiGvF4OTjNWT65xJZj5%2FqR99%2FOsdifiJ8YNiiWdfDzUpt%2B37Fu5%2BsDxr1tpf%2FP9Cadfx&X-Amz-Signature=6221baed9ced54829e658f4832effce78df9effd8ffa50eb4ec99f25ce309cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5XKXYE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHBzz34DGKh%2F9of1FIppAwa%2FiTsrBFkLGEGoOVH%2FKnwIgd4IWTF%2BtiGoeEAWrSo7j54Ivfh8CWbR7k4hNOGL6UQMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPCWjfbKnMxre2IuhyrcAz8rp49hBCm5B%2F7CHN%2FhkoFRvc5g5UdUf1liTJqjUiuJkPRP8mA9PGoJBITBdMgVFv70KAOV4uR5mb0pIqt8TE9lZSUcPbECQLib06A8LZFFCeTEED2DIu0g8%2BmLEQlNmJJhcMFx83JI%2BEkXYai%2BHWsW9p%2FUwnEblfyBTgP%2BwDKdNuv%2BGqc%2Fx3xONvI5W0bkjpQlO5E%2BKDMCtdokhdGbCOfcdRAM4ERdkLvUynCJ4lHai1jDDDHcBsFKvcosT88xKttsBlZcy9QXh%2BfFgLFVErUka3Z%2FGQeNQKHPRkqa3hiHnpjvvRDEcrsG4zJXfMfREb%2BupwMq7RtiaV2LFu8E99YJUo0bOUG91cgqtEGNqB3JChw7CxPiICgUcLTFbVDUQmbh4KGYv5IECrYHtVMmcKLLcvkwGvEyztAj18kJgllvGmnpqlOCuyGSlx1sZu19pH8DClhE%2B0lwjK8BDglBLyAmwORe1sUJyrTOzIWhETMyQ8fxLnSswjQxmnBUM91M4tQ7ErjhA01EyX5teRDaxfhBaYi9qCHQ3lxz8Jv8rOwAX%2BxxI1uJMQs3g1ADo2SUozLTjknojuceJC4z%2B8Tbl29oMQXUQpAEaKq6bKpvUGR5K3krbiOAoahXY5s%2FMI6m2b4GOqUBLBhkzEGQbwvmzcX9XRL3%2F6aSjb83PLw6R9eE84mW8PYmocqs8Jgmt2QZgNWMeGhnVqOomR8fFjk%2Fpv77ASU9m3twAUDckAbHzRLMKj7%2FKUQz8UBS8EUbJgjUOkp%2F3GaJXweuaHbjoLtl7BbZi3Iv%2BuB%2BNiGvF4OTjNWT65xJZj5%2FqR99%2FOsdifiJ8YNiiWdfDzUpt%2B37Fu5%2BsDxr1tpf%2FP9Cadfx&X-Amz-Signature=5d04208a0018e2f23a53f86d5b27581ea136f60c8af1d6996f0d02b5ac274233&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5XKXYE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHBzz34DGKh%2F9of1FIppAwa%2FiTsrBFkLGEGoOVH%2FKnwIgd4IWTF%2BtiGoeEAWrSo7j54Ivfh8CWbR7k4hNOGL6UQMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPCWjfbKnMxre2IuhyrcAz8rp49hBCm5B%2F7CHN%2FhkoFRvc5g5UdUf1liTJqjUiuJkPRP8mA9PGoJBITBdMgVFv70KAOV4uR5mb0pIqt8TE9lZSUcPbECQLib06A8LZFFCeTEED2DIu0g8%2BmLEQlNmJJhcMFx83JI%2BEkXYai%2BHWsW9p%2FUwnEblfyBTgP%2BwDKdNuv%2BGqc%2Fx3xONvI5W0bkjpQlO5E%2BKDMCtdokhdGbCOfcdRAM4ERdkLvUynCJ4lHai1jDDDHcBsFKvcosT88xKttsBlZcy9QXh%2BfFgLFVErUka3Z%2FGQeNQKHPRkqa3hiHnpjvvRDEcrsG4zJXfMfREb%2BupwMq7RtiaV2LFu8E99YJUo0bOUG91cgqtEGNqB3JChw7CxPiICgUcLTFbVDUQmbh4KGYv5IECrYHtVMmcKLLcvkwGvEyztAj18kJgllvGmnpqlOCuyGSlx1sZu19pH8DClhE%2B0lwjK8BDglBLyAmwORe1sUJyrTOzIWhETMyQ8fxLnSswjQxmnBUM91M4tQ7ErjhA01EyX5teRDaxfhBaYi9qCHQ3lxz8Jv8rOwAX%2BxxI1uJMQs3g1ADo2SUozLTjknojuceJC4z%2B8Tbl29oMQXUQpAEaKq6bKpvUGR5K3krbiOAoahXY5s%2FMI6m2b4GOqUBLBhkzEGQbwvmzcX9XRL3%2F6aSjb83PLw6R9eE84mW8PYmocqs8Jgmt2QZgNWMeGhnVqOomR8fFjk%2Fpv77ASU9m3twAUDckAbHzRLMKj7%2FKUQz8UBS8EUbJgjUOkp%2F3GaJXweuaHbjoLtl7BbZi3Iv%2BuB%2BNiGvF4OTjNWT65xJZj5%2FqR99%2FOsdifiJ8YNiiWdfDzUpt%2B37Fu5%2BsDxr1tpf%2FP9Cadfx&X-Amz-Signature=df9fab5a9b336462895a1498b2ea6263bcf235ff380fb6a7ed29995a513c3724&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5XKXYE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHBzz34DGKh%2F9of1FIppAwa%2FiTsrBFkLGEGoOVH%2FKnwIgd4IWTF%2BtiGoeEAWrSo7j54Ivfh8CWbR7k4hNOGL6UQMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPCWjfbKnMxre2IuhyrcAz8rp49hBCm5B%2F7CHN%2FhkoFRvc5g5UdUf1liTJqjUiuJkPRP8mA9PGoJBITBdMgVFv70KAOV4uR5mb0pIqt8TE9lZSUcPbECQLib06A8LZFFCeTEED2DIu0g8%2BmLEQlNmJJhcMFx83JI%2BEkXYai%2BHWsW9p%2FUwnEblfyBTgP%2BwDKdNuv%2BGqc%2Fx3xONvI5W0bkjpQlO5E%2BKDMCtdokhdGbCOfcdRAM4ERdkLvUynCJ4lHai1jDDDHcBsFKvcosT88xKttsBlZcy9QXh%2BfFgLFVErUka3Z%2FGQeNQKHPRkqa3hiHnpjvvRDEcrsG4zJXfMfREb%2BupwMq7RtiaV2LFu8E99YJUo0bOUG91cgqtEGNqB3JChw7CxPiICgUcLTFbVDUQmbh4KGYv5IECrYHtVMmcKLLcvkwGvEyztAj18kJgllvGmnpqlOCuyGSlx1sZu19pH8DClhE%2B0lwjK8BDglBLyAmwORe1sUJyrTOzIWhETMyQ8fxLnSswjQxmnBUM91M4tQ7ErjhA01EyX5teRDaxfhBaYi9qCHQ3lxz8Jv8rOwAX%2BxxI1uJMQs3g1ADo2SUozLTjknojuceJC4z%2B8Tbl29oMQXUQpAEaKq6bKpvUGR5K3krbiOAoahXY5s%2FMI6m2b4GOqUBLBhkzEGQbwvmzcX9XRL3%2F6aSjb83PLw6R9eE84mW8PYmocqs8Jgmt2QZgNWMeGhnVqOomR8fFjk%2Fpv77ASU9m3twAUDckAbHzRLMKj7%2FKUQz8UBS8EUbJgjUOkp%2F3GaJXweuaHbjoLtl7BbZi3Iv%2BuB%2BNiGvF4OTjNWT65xJZj5%2FqR99%2FOsdifiJ8YNiiWdfDzUpt%2B37Fu5%2BsDxr1tpf%2FP9Cadfx&X-Amz-Signature=b1d19b8bee40a1fc5520e718bf307cedb9562b8facbc45a59b3ce1521ef86292&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5XKXYE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHBzz34DGKh%2F9of1FIppAwa%2FiTsrBFkLGEGoOVH%2FKnwIgd4IWTF%2BtiGoeEAWrSo7j54Ivfh8CWbR7k4hNOGL6UQMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPCWjfbKnMxre2IuhyrcAz8rp49hBCm5B%2F7CHN%2FhkoFRvc5g5UdUf1liTJqjUiuJkPRP8mA9PGoJBITBdMgVFv70KAOV4uR5mb0pIqt8TE9lZSUcPbECQLib06A8LZFFCeTEED2DIu0g8%2BmLEQlNmJJhcMFx83JI%2BEkXYai%2BHWsW9p%2FUwnEblfyBTgP%2BwDKdNuv%2BGqc%2Fx3xONvI5W0bkjpQlO5E%2BKDMCtdokhdGbCOfcdRAM4ERdkLvUynCJ4lHai1jDDDHcBsFKvcosT88xKttsBlZcy9QXh%2BfFgLFVErUka3Z%2FGQeNQKHPRkqa3hiHnpjvvRDEcrsG4zJXfMfREb%2BupwMq7RtiaV2LFu8E99YJUo0bOUG91cgqtEGNqB3JChw7CxPiICgUcLTFbVDUQmbh4KGYv5IECrYHtVMmcKLLcvkwGvEyztAj18kJgllvGmnpqlOCuyGSlx1sZu19pH8DClhE%2B0lwjK8BDglBLyAmwORe1sUJyrTOzIWhETMyQ8fxLnSswjQxmnBUM91M4tQ7ErjhA01EyX5teRDaxfhBaYi9qCHQ3lxz8Jv8rOwAX%2BxxI1uJMQs3g1ADo2SUozLTjknojuceJC4z%2B8Tbl29oMQXUQpAEaKq6bKpvUGR5K3krbiOAoahXY5s%2FMI6m2b4GOqUBLBhkzEGQbwvmzcX9XRL3%2F6aSjb83PLw6R9eE84mW8PYmocqs8Jgmt2QZgNWMeGhnVqOomR8fFjk%2Fpv77ASU9m3twAUDckAbHzRLMKj7%2FKUQz8UBS8EUbJgjUOkp%2F3GaJXweuaHbjoLtl7BbZi3Iv%2BuB%2BNiGvF4OTjNWT65xJZj5%2FqR99%2FOsdifiJ8YNiiWdfDzUpt%2B37Fu5%2BsDxr1tpf%2FP9Cadfx&X-Amz-Signature=731004ef2e3be86d897aec7570bfb33100e9ae4f9d72bfa5942cb49402259c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
