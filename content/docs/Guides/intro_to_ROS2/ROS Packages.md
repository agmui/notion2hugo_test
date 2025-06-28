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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHBMPY4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4PouW%2F%2FZ3woL79dGsj8nGMYkd5MJZXdZ2gD%2FZ2RwQgIgd5KxOF8vdbyaXa0%2BwI%2BoUkLPC9Xi%2BJswC1hfq5LeeUEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1c2JAlqFqdAZPxRCrcA%2FHzFycMhZF83qQuUbrWgs9RDTi6QqXNmuBuNj%2FYwvc%2Fq1hgdX%2F0IuMnEGVtgm%2F02k3NDJKvueN8ex%2FPnQIL0fUmP8N4vOUbya3%2FfMeEjhSpVTlNuSf7axkXXTcz7sEFcAS2nlTbi8G2kcEKC4lLCkOJZd8OFLjMyZjG737Pfj6B5uTGxJOF7CtJTJCfUFW%2BuZNVbWncjm0gevPYi8N0FsKsWw8SWcoRtmZ%2BfHe%2Fi0hAngVj5eB%2Bv8DNWI5scXZ8Hl8mYkbE6geP47LLhngJsAJF9HCi2%2FcfBhW8ne6huDFIygOZBIpxAOrvHDcS99T6CUPUVbzI1AVJOq3B5bsnNywRw9kV1h%2Buyq5JLPZ0o%2BlC7HmpPp2%2B2LAA%2Bv%2BM40EoTGsxbGe3%2FQHgAQL2nJlUQcvHMt3cpITjFh%2B45wHTWY1p3tijKpiYtqZaygquNXihWtDW4wbNg4NTRmCWywHQLJ8I9JGagZ2ipBarGtWqjv9GVMkRrDbJlGEmHxyMoH3%2BIwbEKgfb5seTArKLzx6J6ubi5ewGSBYJzaqM3KwhythOqpxTfmngCU6qqeQJlx62xyCizv0mbTj%2BEKjQEPeSV8tRnBvZ9TAXcO6Dr5edbIOjD35aYOZLumhkyBooMPPR%2FcIGOqUB5pEQ3gH4AeigAMX6SCMAkUZC%2Bp5NrGMOvYJvRewEtFB7%2BTdmNR7Y5eRjbLq0TD5lkcO%2FCD%2FUb7XIJrDtpQknSFeTO0L9BVq8s7i%2FAn0d9fz%2FrybhMnkPk67tM%2FPVglU%2FQ9ySprepb%2B7Ix141NQHAV09yG5lrKRaiYNQpTopMiRjAjruUg9lFYFZPQou5usdsumUFjKZQNSsaDOlTfAX4RC7bLcsn&X-Amz-Signature=6269cc8a888bfa99c46303efafea22c1b576d5c602faa50b0cfe743529a505a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHBMPY4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4PouW%2F%2FZ3woL79dGsj8nGMYkd5MJZXdZ2gD%2FZ2RwQgIgd5KxOF8vdbyaXa0%2BwI%2BoUkLPC9Xi%2BJswC1hfq5LeeUEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1c2JAlqFqdAZPxRCrcA%2FHzFycMhZF83qQuUbrWgs9RDTi6QqXNmuBuNj%2FYwvc%2Fq1hgdX%2F0IuMnEGVtgm%2F02k3NDJKvueN8ex%2FPnQIL0fUmP8N4vOUbya3%2FfMeEjhSpVTlNuSf7axkXXTcz7sEFcAS2nlTbi8G2kcEKC4lLCkOJZd8OFLjMyZjG737Pfj6B5uTGxJOF7CtJTJCfUFW%2BuZNVbWncjm0gevPYi8N0FsKsWw8SWcoRtmZ%2BfHe%2Fi0hAngVj5eB%2Bv8DNWI5scXZ8Hl8mYkbE6geP47LLhngJsAJF9HCi2%2FcfBhW8ne6huDFIygOZBIpxAOrvHDcS99T6CUPUVbzI1AVJOq3B5bsnNywRw9kV1h%2Buyq5JLPZ0o%2BlC7HmpPp2%2B2LAA%2Bv%2BM40EoTGsxbGe3%2FQHgAQL2nJlUQcvHMt3cpITjFh%2B45wHTWY1p3tijKpiYtqZaygquNXihWtDW4wbNg4NTRmCWywHQLJ8I9JGagZ2ipBarGtWqjv9GVMkRrDbJlGEmHxyMoH3%2BIwbEKgfb5seTArKLzx6J6ubi5ewGSBYJzaqM3KwhythOqpxTfmngCU6qqeQJlx62xyCizv0mbTj%2BEKjQEPeSV8tRnBvZ9TAXcO6Dr5edbIOjD35aYOZLumhkyBooMPPR%2FcIGOqUB5pEQ3gH4AeigAMX6SCMAkUZC%2Bp5NrGMOvYJvRewEtFB7%2BTdmNR7Y5eRjbLq0TD5lkcO%2FCD%2FUb7XIJrDtpQknSFeTO0L9BVq8s7i%2FAn0d9fz%2FrybhMnkPk67tM%2FPVglU%2FQ9ySprepb%2B7Ix141NQHAV09yG5lrKRaiYNQpTopMiRjAjruUg9lFYFZPQou5usdsumUFjKZQNSsaDOlTfAX4RC7bLcsn&X-Amz-Signature=9d64eb88cf89dbea6b2b6a9cccee128f6e1f22bf0b9d295e6b1055bd312da4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHBMPY4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4PouW%2F%2FZ3woL79dGsj8nGMYkd5MJZXdZ2gD%2FZ2RwQgIgd5KxOF8vdbyaXa0%2BwI%2BoUkLPC9Xi%2BJswC1hfq5LeeUEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1c2JAlqFqdAZPxRCrcA%2FHzFycMhZF83qQuUbrWgs9RDTi6QqXNmuBuNj%2FYwvc%2Fq1hgdX%2F0IuMnEGVtgm%2F02k3NDJKvueN8ex%2FPnQIL0fUmP8N4vOUbya3%2FfMeEjhSpVTlNuSf7axkXXTcz7sEFcAS2nlTbi8G2kcEKC4lLCkOJZd8OFLjMyZjG737Pfj6B5uTGxJOF7CtJTJCfUFW%2BuZNVbWncjm0gevPYi8N0FsKsWw8SWcoRtmZ%2BfHe%2Fi0hAngVj5eB%2Bv8DNWI5scXZ8Hl8mYkbE6geP47LLhngJsAJF9HCi2%2FcfBhW8ne6huDFIygOZBIpxAOrvHDcS99T6CUPUVbzI1AVJOq3B5bsnNywRw9kV1h%2Buyq5JLPZ0o%2BlC7HmpPp2%2B2LAA%2Bv%2BM40EoTGsxbGe3%2FQHgAQL2nJlUQcvHMt3cpITjFh%2B45wHTWY1p3tijKpiYtqZaygquNXihWtDW4wbNg4NTRmCWywHQLJ8I9JGagZ2ipBarGtWqjv9GVMkRrDbJlGEmHxyMoH3%2BIwbEKgfb5seTArKLzx6J6ubi5ewGSBYJzaqM3KwhythOqpxTfmngCU6qqeQJlx62xyCizv0mbTj%2BEKjQEPeSV8tRnBvZ9TAXcO6Dr5edbIOjD35aYOZLumhkyBooMPPR%2FcIGOqUB5pEQ3gH4AeigAMX6SCMAkUZC%2Bp5NrGMOvYJvRewEtFB7%2BTdmNR7Y5eRjbLq0TD5lkcO%2FCD%2FUb7XIJrDtpQknSFeTO0L9BVq8s7i%2FAn0d9fz%2FrybhMnkPk67tM%2FPVglU%2FQ9ySprepb%2B7Ix141NQHAV09yG5lrKRaiYNQpTopMiRjAjruUg9lFYFZPQou5usdsumUFjKZQNSsaDOlTfAX4RC7bLcsn&X-Amz-Signature=efaabae84dc0a8eb65d25f9259f5e8275fc35d494357afbe45a910330d0e9f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHBMPY4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4PouW%2F%2FZ3woL79dGsj8nGMYkd5MJZXdZ2gD%2FZ2RwQgIgd5KxOF8vdbyaXa0%2BwI%2BoUkLPC9Xi%2BJswC1hfq5LeeUEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1c2JAlqFqdAZPxRCrcA%2FHzFycMhZF83qQuUbrWgs9RDTi6QqXNmuBuNj%2FYwvc%2Fq1hgdX%2F0IuMnEGVtgm%2F02k3NDJKvueN8ex%2FPnQIL0fUmP8N4vOUbya3%2FfMeEjhSpVTlNuSf7axkXXTcz7sEFcAS2nlTbi8G2kcEKC4lLCkOJZd8OFLjMyZjG737Pfj6B5uTGxJOF7CtJTJCfUFW%2BuZNVbWncjm0gevPYi8N0FsKsWw8SWcoRtmZ%2BfHe%2Fi0hAngVj5eB%2Bv8DNWI5scXZ8Hl8mYkbE6geP47LLhngJsAJF9HCi2%2FcfBhW8ne6huDFIygOZBIpxAOrvHDcS99T6CUPUVbzI1AVJOq3B5bsnNywRw9kV1h%2Buyq5JLPZ0o%2BlC7HmpPp2%2B2LAA%2Bv%2BM40EoTGsxbGe3%2FQHgAQL2nJlUQcvHMt3cpITjFh%2B45wHTWY1p3tijKpiYtqZaygquNXihWtDW4wbNg4NTRmCWywHQLJ8I9JGagZ2ipBarGtWqjv9GVMkRrDbJlGEmHxyMoH3%2BIwbEKgfb5seTArKLzx6J6ubi5ewGSBYJzaqM3KwhythOqpxTfmngCU6qqeQJlx62xyCizv0mbTj%2BEKjQEPeSV8tRnBvZ9TAXcO6Dr5edbIOjD35aYOZLumhkyBooMPPR%2FcIGOqUB5pEQ3gH4AeigAMX6SCMAkUZC%2Bp5NrGMOvYJvRewEtFB7%2BTdmNR7Y5eRjbLq0TD5lkcO%2FCD%2FUb7XIJrDtpQknSFeTO0L9BVq8s7i%2FAn0d9fz%2FrybhMnkPk67tM%2FPVglU%2FQ9ySprepb%2B7Ix141NQHAV09yG5lrKRaiYNQpTopMiRjAjruUg9lFYFZPQou5usdsumUFjKZQNSsaDOlTfAX4RC7bLcsn&X-Amz-Signature=2909bca9058731cde98efa6e31e6c86d5bca497a5b181eaa3994252f9dab0b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHBMPY4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4PouW%2F%2FZ3woL79dGsj8nGMYkd5MJZXdZ2gD%2FZ2RwQgIgd5KxOF8vdbyaXa0%2BwI%2BoUkLPC9Xi%2BJswC1hfq5LeeUEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1c2JAlqFqdAZPxRCrcA%2FHzFycMhZF83qQuUbrWgs9RDTi6QqXNmuBuNj%2FYwvc%2Fq1hgdX%2F0IuMnEGVtgm%2F02k3NDJKvueN8ex%2FPnQIL0fUmP8N4vOUbya3%2FfMeEjhSpVTlNuSf7axkXXTcz7sEFcAS2nlTbi8G2kcEKC4lLCkOJZd8OFLjMyZjG737Pfj6B5uTGxJOF7CtJTJCfUFW%2BuZNVbWncjm0gevPYi8N0FsKsWw8SWcoRtmZ%2BfHe%2Fi0hAngVj5eB%2Bv8DNWI5scXZ8Hl8mYkbE6geP47LLhngJsAJF9HCi2%2FcfBhW8ne6huDFIygOZBIpxAOrvHDcS99T6CUPUVbzI1AVJOq3B5bsnNywRw9kV1h%2Buyq5JLPZ0o%2BlC7HmpPp2%2B2LAA%2Bv%2BM40EoTGsxbGe3%2FQHgAQL2nJlUQcvHMt3cpITjFh%2B45wHTWY1p3tijKpiYtqZaygquNXihWtDW4wbNg4NTRmCWywHQLJ8I9JGagZ2ipBarGtWqjv9GVMkRrDbJlGEmHxyMoH3%2BIwbEKgfb5seTArKLzx6J6ubi5ewGSBYJzaqM3KwhythOqpxTfmngCU6qqeQJlx62xyCizv0mbTj%2BEKjQEPeSV8tRnBvZ9TAXcO6Dr5edbIOjD35aYOZLumhkyBooMPPR%2FcIGOqUB5pEQ3gH4AeigAMX6SCMAkUZC%2Bp5NrGMOvYJvRewEtFB7%2BTdmNR7Y5eRjbLq0TD5lkcO%2FCD%2FUb7XIJrDtpQknSFeTO0L9BVq8s7i%2FAn0d9fz%2FrybhMnkPk67tM%2FPVglU%2FQ9ySprepb%2B7Ix141NQHAV09yG5lrKRaiYNQpTopMiRjAjruUg9lFYFZPQou5usdsumUFjKZQNSsaDOlTfAX4RC7bLcsn&X-Amz-Signature=c336dba71d57ba582f2a8df878e19ea38044397112c4cc84d123638b9596b602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHBMPY4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4PouW%2F%2FZ3woL79dGsj8nGMYkd5MJZXdZ2gD%2FZ2RwQgIgd5KxOF8vdbyaXa0%2BwI%2BoUkLPC9Xi%2BJswC1hfq5LeeUEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1c2JAlqFqdAZPxRCrcA%2FHzFycMhZF83qQuUbrWgs9RDTi6QqXNmuBuNj%2FYwvc%2Fq1hgdX%2F0IuMnEGVtgm%2F02k3NDJKvueN8ex%2FPnQIL0fUmP8N4vOUbya3%2FfMeEjhSpVTlNuSf7axkXXTcz7sEFcAS2nlTbi8G2kcEKC4lLCkOJZd8OFLjMyZjG737Pfj6B5uTGxJOF7CtJTJCfUFW%2BuZNVbWncjm0gevPYi8N0FsKsWw8SWcoRtmZ%2BfHe%2Fi0hAngVj5eB%2Bv8DNWI5scXZ8Hl8mYkbE6geP47LLhngJsAJF9HCi2%2FcfBhW8ne6huDFIygOZBIpxAOrvHDcS99T6CUPUVbzI1AVJOq3B5bsnNywRw9kV1h%2Buyq5JLPZ0o%2BlC7HmpPp2%2B2LAA%2Bv%2BM40EoTGsxbGe3%2FQHgAQL2nJlUQcvHMt3cpITjFh%2B45wHTWY1p3tijKpiYtqZaygquNXihWtDW4wbNg4NTRmCWywHQLJ8I9JGagZ2ipBarGtWqjv9GVMkRrDbJlGEmHxyMoH3%2BIwbEKgfb5seTArKLzx6J6ubi5ewGSBYJzaqM3KwhythOqpxTfmngCU6qqeQJlx62xyCizv0mbTj%2BEKjQEPeSV8tRnBvZ9TAXcO6Dr5edbIOjD35aYOZLumhkyBooMPPR%2FcIGOqUB5pEQ3gH4AeigAMX6SCMAkUZC%2Bp5NrGMOvYJvRewEtFB7%2BTdmNR7Y5eRjbLq0TD5lkcO%2FCD%2FUb7XIJrDtpQknSFeTO0L9BVq8s7i%2FAn0d9fz%2FrybhMnkPk67tM%2FPVglU%2FQ9ySprepb%2B7Ix141NQHAV09yG5lrKRaiYNQpTopMiRjAjruUg9lFYFZPQou5usdsumUFjKZQNSsaDOlTfAX4RC7bLcsn&X-Amz-Signature=056da691ec36f04e72711ff8e072c6baea31536de6d3d1a9619fd87a8e5cc171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHBMPY4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4PouW%2F%2FZ3woL79dGsj8nGMYkd5MJZXdZ2gD%2FZ2RwQgIgd5KxOF8vdbyaXa0%2BwI%2BoUkLPC9Xi%2BJswC1hfq5LeeUEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1c2JAlqFqdAZPxRCrcA%2FHzFycMhZF83qQuUbrWgs9RDTi6QqXNmuBuNj%2FYwvc%2Fq1hgdX%2F0IuMnEGVtgm%2F02k3NDJKvueN8ex%2FPnQIL0fUmP8N4vOUbya3%2FfMeEjhSpVTlNuSf7axkXXTcz7sEFcAS2nlTbi8G2kcEKC4lLCkOJZd8OFLjMyZjG737Pfj6B5uTGxJOF7CtJTJCfUFW%2BuZNVbWncjm0gevPYi8N0FsKsWw8SWcoRtmZ%2BfHe%2Fi0hAngVj5eB%2Bv8DNWI5scXZ8Hl8mYkbE6geP47LLhngJsAJF9HCi2%2FcfBhW8ne6huDFIygOZBIpxAOrvHDcS99T6CUPUVbzI1AVJOq3B5bsnNywRw9kV1h%2Buyq5JLPZ0o%2BlC7HmpPp2%2B2LAA%2Bv%2BM40EoTGsxbGe3%2FQHgAQL2nJlUQcvHMt3cpITjFh%2B45wHTWY1p3tijKpiYtqZaygquNXihWtDW4wbNg4NTRmCWywHQLJ8I9JGagZ2ipBarGtWqjv9GVMkRrDbJlGEmHxyMoH3%2BIwbEKgfb5seTArKLzx6J6ubi5ewGSBYJzaqM3KwhythOqpxTfmngCU6qqeQJlx62xyCizv0mbTj%2BEKjQEPeSV8tRnBvZ9TAXcO6Dr5edbIOjD35aYOZLumhkyBooMPPR%2FcIGOqUB5pEQ3gH4AeigAMX6SCMAkUZC%2Bp5NrGMOvYJvRewEtFB7%2BTdmNR7Y5eRjbLq0TD5lkcO%2FCD%2FUb7XIJrDtpQknSFeTO0L9BVq8s7i%2FAn0d9fz%2FrybhMnkPk67tM%2FPVglU%2FQ9ySprepb%2B7Ix141NQHAV09yG5lrKRaiYNQpTopMiRjAjruUg9lFYFZPQou5usdsumUFjKZQNSsaDOlTfAX4RC7bLcsn&X-Amz-Signature=0c224b1e36c8aa8508d227fcd511abe9d83a9504f33577764fc672d807f4b6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
