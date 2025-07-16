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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJ67PT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF%2FyzkMGx1S9gy5ONLr9M6y%2Fv1D9camXiB4bmS59G%2Bf7AiEAuA875SjVrnlcxvMYGNrYg5EnwtCKl4vB08iriQEKG94q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEcsginkq1tLyWYxXyrcA0iNg6WtkIztr%2Bg%2BWIrHMyfUo2rvTR%2Bdbb0u6vZ8wkFHKLtd7jGjTXokTgu1JdeXAK%2FhbmTK6DqnpZAyYAt%2BDUyKXS8QlTD3PCvwWwNI5GZzY2fJmR13ZvGtnz6roctGm%2BiRvkW5i9BGSd0Y8068jrZK72WNttNKMvn6qOIROGNDq8Jatf59Yc7OIQzDhyIftCpgTCVadzaOJhNt%2BmMR52itYScbxe679DkEuupalZBdoKsn5Ls5bIrkkDzjeef%2Fe0t4knbpfV3hy7jbtnMDcNScXYMdmdAf6Xzaol0Id7rEzZc%2FSTkv%2FmevW8BydJHC9VOik5j6EUw%2FPQSeibUdB0z25zDcAKkAPzI2hm%2FjKbsFyaC3aR3B1exzR7caP%2FbeXT25H%2BjIuLljVY7p8gBMETQXpk94snjliuzNelvSelaXtPXIMnGfLYSbAAfllsCkJJ06Ms%2FF0MppkXsQHw2GEZTOfqvt2EF0nL4%2FhCvE50mRtdnsOlDQjYo9KDVKe%2F0l89PyP8fK15jjrd0QhzoOSoRmZnLbBY3QHxiqHoDmMoHQojFYd09Y9%2FZnZANhQVZqaG5iYn39cBInNFQdvFj%2BuLX6h7M4rXC%2Fom8NR%2BnGwvNI3x9YZZwALtExhpQVMLS038MGOqUBtqr6jV1FSMekj8mxOJWPBjI0tyELW77RCxALiRnvmxTSYdcPmHNC4AUaLjeM9QIBgQwsnGoP91XgSKdy46MbCt8oCQZxbAy1teVlC5e0MIqIM65BOAtcbtfsul07JVzvXFd1TRIH4ZpckeAXaQat5Ok67ggOB%2BjOTvizAulYUJmL1lzh%2FRcl8pvLJxKd8TNmYLotL19NKbCIrbIS8cx7VLditFIg&X-Amz-Signature=1876f04ba702d694a639849eef6443d890038f623ffb764cdf39739213d7c5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJ67PT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF%2FyzkMGx1S9gy5ONLr9M6y%2Fv1D9camXiB4bmS59G%2Bf7AiEAuA875SjVrnlcxvMYGNrYg5EnwtCKl4vB08iriQEKG94q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEcsginkq1tLyWYxXyrcA0iNg6WtkIztr%2Bg%2BWIrHMyfUo2rvTR%2Bdbb0u6vZ8wkFHKLtd7jGjTXokTgu1JdeXAK%2FhbmTK6DqnpZAyYAt%2BDUyKXS8QlTD3PCvwWwNI5GZzY2fJmR13ZvGtnz6roctGm%2BiRvkW5i9BGSd0Y8068jrZK72WNttNKMvn6qOIROGNDq8Jatf59Yc7OIQzDhyIftCpgTCVadzaOJhNt%2BmMR52itYScbxe679DkEuupalZBdoKsn5Ls5bIrkkDzjeef%2Fe0t4knbpfV3hy7jbtnMDcNScXYMdmdAf6Xzaol0Id7rEzZc%2FSTkv%2FmevW8BydJHC9VOik5j6EUw%2FPQSeibUdB0z25zDcAKkAPzI2hm%2FjKbsFyaC3aR3B1exzR7caP%2FbeXT25H%2BjIuLljVY7p8gBMETQXpk94snjliuzNelvSelaXtPXIMnGfLYSbAAfllsCkJJ06Ms%2FF0MppkXsQHw2GEZTOfqvt2EF0nL4%2FhCvE50mRtdnsOlDQjYo9KDVKe%2F0l89PyP8fK15jjrd0QhzoOSoRmZnLbBY3QHxiqHoDmMoHQojFYd09Y9%2FZnZANhQVZqaG5iYn39cBInNFQdvFj%2BuLX6h7M4rXC%2Fom8NR%2BnGwvNI3x9YZZwALtExhpQVMLS038MGOqUBtqr6jV1FSMekj8mxOJWPBjI0tyELW77RCxALiRnvmxTSYdcPmHNC4AUaLjeM9QIBgQwsnGoP91XgSKdy46MbCt8oCQZxbAy1teVlC5e0MIqIM65BOAtcbtfsul07JVzvXFd1TRIH4ZpckeAXaQat5Ok67ggOB%2BjOTvizAulYUJmL1lzh%2FRcl8pvLJxKd8TNmYLotL19NKbCIrbIS8cx7VLditFIg&X-Amz-Signature=7317474827da67535a3382e27fab131f1c42271aed73942c821a1fd9e06e5d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJ67PT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF%2FyzkMGx1S9gy5ONLr9M6y%2Fv1D9camXiB4bmS59G%2Bf7AiEAuA875SjVrnlcxvMYGNrYg5EnwtCKl4vB08iriQEKG94q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEcsginkq1tLyWYxXyrcA0iNg6WtkIztr%2Bg%2BWIrHMyfUo2rvTR%2Bdbb0u6vZ8wkFHKLtd7jGjTXokTgu1JdeXAK%2FhbmTK6DqnpZAyYAt%2BDUyKXS8QlTD3PCvwWwNI5GZzY2fJmR13ZvGtnz6roctGm%2BiRvkW5i9BGSd0Y8068jrZK72WNttNKMvn6qOIROGNDq8Jatf59Yc7OIQzDhyIftCpgTCVadzaOJhNt%2BmMR52itYScbxe679DkEuupalZBdoKsn5Ls5bIrkkDzjeef%2Fe0t4knbpfV3hy7jbtnMDcNScXYMdmdAf6Xzaol0Id7rEzZc%2FSTkv%2FmevW8BydJHC9VOik5j6EUw%2FPQSeibUdB0z25zDcAKkAPzI2hm%2FjKbsFyaC3aR3B1exzR7caP%2FbeXT25H%2BjIuLljVY7p8gBMETQXpk94snjliuzNelvSelaXtPXIMnGfLYSbAAfllsCkJJ06Ms%2FF0MppkXsQHw2GEZTOfqvt2EF0nL4%2FhCvE50mRtdnsOlDQjYo9KDVKe%2F0l89PyP8fK15jjrd0QhzoOSoRmZnLbBY3QHxiqHoDmMoHQojFYd09Y9%2FZnZANhQVZqaG5iYn39cBInNFQdvFj%2BuLX6h7M4rXC%2Fom8NR%2BnGwvNI3x9YZZwALtExhpQVMLS038MGOqUBtqr6jV1FSMekj8mxOJWPBjI0tyELW77RCxALiRnvmxTSYdcPmHNC4AUaLjeM9QIBgQwsnGoP91XgSKdy46MbCt8oCQZxbAy1teVlC5e0MIqIM65BOAtcbtfsul07JVzvXFd1TRIH4ZpckeAXaQat5Ok67ggOB%2BjOTvizAulYUJmL1lzh%2FRcl8pvLJxKd8TNmYLotL19NKbCIrbIS8cx7VLditFIg&X-Amz-Signature=13a896d138237107778daa46f7a665ebfd86aa6c394d9540412d083643c850d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJ67PT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF%2FyzkMGx1S9gy5ONLr9M6y%2Fv1D9camXiB4bmS59G%2Bf7AiEAuA875SjVrnlcxvMYGNrYg5EnwtCKl4vB08iriQEKG94q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEcsginkq1tLyWYxXyrcA0iNg6WtkIztr%2Bg%2BWIrHMyfUo2rvTR%2Bdbb0u6vZ8wkFHKLtd7jGjTXokTgu1JdeXAK%2FhbmTK6DqnpZAyYAt%2BDUyKXS8QlTD3PCvwWwNI5GZzY2fJmR13ZvGtnz6roctGm%2BiRvkW5i9BGSd0Y8068jrZK72WNttNKMvn6qOIROGNDq8Jatf59Yc7OIQzDhyIftCpgTCVadzaOJhNt%2BmMR52itYScbxe679DkEuupalZBdoKsn5Ls5bIrkkDzjeef%2Fe0t4knbpfV3hy7jbtnMDcNScXYMdmdAf6Xzaol0Id7rEzZc%2FSTkv%2FmevW8BydJHC9VOik5j6EUw%2FPQSeibUdB0z25zDcAKkAPzI2hm%2FjKbsFyaC3aR3B1exzR7caP%2FbeXT25H%2BjIuLljVY7p8gBMETQXpk94snjliuzNelvSelaXtPXIMnGfLYSbAAfllsCkJJ06Ms%2FF0MppkXsQHw2GEZTOfqvt2EF0nL4%2FhCvE50mRtdnsOlDQjYo9KDVKe%2F0l89PyP8fK15jjrd0QhzoOSoRmZnLbBY3QHxiqHoDmMoHQojFYd09Y9%2FZnZANhQVZqaG5iYn39cBInNFQdvFj%2BuLX6h7M4rXC%2Fom8NR%2BnGwvNI3x9YZZwALtExhpQVMLS038MGOqUBtqr6jV1FSMekj8mxOJWPBjI0tyELW77RCxALiRnvmxTSYdcPmHNC4AUaLjeM9QIBgQwsnGoP91XgSKdy46MbCt8oCQZxbAy1teVlC5e0MIqIM65BOAtcbtfsul07JVzvXFd1TRIH4ZpckeAXaQat5Ok67ggOB%2BjOTvizAulYUJmL1lzh%2FRcl8pvLJxKd8TNmYLotL19NKbCIrbIS8cx7VLditFIg&X-Amz-Signature=76c97d00fe74eabf42a3f2c9fab0e7b77c3be2262d9e305c08e8b000d8e0b1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJ67PT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF%2FyzkMGx1S9gy5ONLr9M6y%2Fv1D9camXiB4bmS59G%2Bf7AiEAuA875SjVrnlcxvMYGNrYg5EnwtCKl4vB08iriQEKG94q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEcsginkq1tLyWYxXyrcA0iNg6WtkIztr%2Bg%2BWIrHMyfUo2rvTR%2Bdbb0u6vZ8wkFHKLtd7jGjTXokTgu1JdeXAK%2FhbmTK6DqnpZAyYAt%2BDUyKXS8QlTD3PCvwWwNI5GZzY2fJmR13ZvGtnz6roctGm%2BiRvkW5i9BGSd0Y8068jrZK72WNttNKMvn6qOIROGNDq8Jatf59Yc7OIQzDhyIftCpgTCVadzaOJhNt%2BmMR52itYScbxe679DkEuupalZBdoKsn5Ls5bIrkkDzjeef%2Fe0t4knbpfV3hy7jbtnMDcNScXYMdmdAf6Xzaol0Id7rEzZc%2FSTkv%2FmevW8BydJHC9VOik5j6EUw%2FPQSeibUdB0z25zDcAKkAPzI2hm%2FjKbsFyaC3aR3B1exzR7caP%2FbeXT25H%2BjIuLljVY7p8gBMETQXpk94snjliuzNelvSelaXtPXIMnGfLYSbAAfllsCkJJ06Ms%2FF0MppkXsQHw2GEZTOfqvt2EF0nL4%2FhCvE50mRtdnsOlDQjYo9KDVKe%2F0l89PyP8fK15jjrd0QhzoOSoRmZnLbBY3QHxiqHoDmMoHQojFYd09Y9%2FZnZANhQVZqaG5iYn39cBInNFQdvFj%2BuLX6h7M4rXC%2Fom8NR%2BnGwvNI3x9YZZwALtExhpQVMLS038MGOqUBtqr6jV1FSMekj8mxOJWPBjI0tyELW77RCxALiRnvmxTSYdcPmHNC4AUaLjeM9QIBgQwsnGoP91XgSKdy46MbCt8oCQZxbAy1teVlC5e0MIqIM65BOAtcbtfsul07JVzvXFd1TRIH4ZpckeAXaQat5Ok67ggOB%2BjOTvizAulYUJmL1lzh%2FRcl8pvLJxKd8TNmYLotL19NKbCIrbIS8cx7VLditFIg&X-Amz-Signature=f0237fc9527a7d09b8ada1f967676ae3130b1d7b80b29402e2b28cd00e45697c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJ67PT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF%2FyzkMGx1S9gy5ONLr9M6y%2Fv1D9camXiB4bmS59G%2Bf7AiEAuA875SjVrnlcxvMYGNrYg5EnwtCKl4vB08iriQEKG94q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEcsginkq1tLyWYxXyrcA0iNg6WtkIztr%2Bg%2BWIrHMyfUo2rvTR%2Bdbb0u6vZ8wkFHKLtd7jGjTXokTgu1JdeXAK%2FhbmTK6DqnpZAyYAt%2BDUyKXS8QlTD3PCvwWwNI5GZzY2fJmR13ZvGtnz6roctGm%2BiRvkW5i9BGSd0Y8068jrZK72WNttNKMvn6qOIROGNDq8Jatf59Yc7OIQzDhyIftCpgTCVadzaOJhNt%2BmMR52itYScbxe679DkEuupalZBdoKsn5Ls5bIrkkDzjeef%2Fe0t4knbpfV3hy7jbtnMDcNScXYMdmdAf6Xzaol0Id7rEzZc%2FSTkv%2FmevW8BydJHC9VOik5j6EUw%2FPQSeibUdB0z25zDcAKkAPzI2hm%2FjKbsFyaC3aR3B1exzR7caP%2FbeXT25H%2BjIuLljVY7p8gBMETQXpk94snjliuzNelvSelaXtPXIMnGfLYSbAAfllsCkJJ06Ms%2FF0MppkXsQHw2GEZTOfqvt2EF0nL4%2FhCvE50mRtdnsOlDQjYo9KDVKe%2F0l89PyP8fK15jjrd0QhzoOSoRmZnLbBY3QHxiqHoDmMoHQojFYd09Y9%2FZnZANhQVZqaG5iYn39cBInNFQdvFj%2BuLX6h7M4rXC%2Fom8NR%2BnGwvNI3x9YZZwALtExhpQVMLS038MGOqUBtqr6jV1FSMekj8mxOJWPBjI0tyELW77RCxALiRnvmxTSYdcPmHNC4AUaLjeM9QIBgQwsnGoP91XgSKdy46MbCt8oCQZxbAy1teVlC5e0MIqIM65BOAtcbtfsul07JVzvXFd1TRIH4ZpckeAXaQat5Ok67ggOB%2BjOTvizAulYUJmL1lzh%2FRcl8pvLJxKd8TNmYLotL19NKbCIrbIS8cx7VLditFIg&X-Amz-Signature=b5e97339f4bbb582b4da54196d097dd614b03a19bb27fbe28ac288a8e59e8464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJ67PT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF%2FyzkMGx1S9gy5ONLr9M6y%2Fv1D9camXiB4bmS59G%2Bf7AiEAuA875SjVrnlcxvMYGNrYg5EnwtCKl4vB08iriQEKG94q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEcsginkq1tLyWYxXyrcA0iNg6WtkIztr%2Bg%2BWIrHMyfUo2rvTR%2Bdbb0u6vZ8wkFHKLtd7jGjTXokTgu1JdeXAK%2FhbmTK6DqnpZAyYAt%2BDUyKXS8QlTD3PCvwWwNI5GZzY2fJmR13ZvGtnz6roctGm%2BiRvkW5i9BGSd0Y8068jrZK72WNttNKMvn6qOIROGNDq8Jatf59Yc7OIQzDhyIftCpgTCVadzaOJhNt%2BmMR52itYScbxe679DkEuupalZBdoKsn5Ls5bIrkkDzjeef%2Fe0t4knbpfV3hy7jbtnMDcNScXYMdmdAf6Xzaol0Id7rEzZc%2FSTkv%2FmevW8BydJHC9VOik5j6EUw%2FPQSeibUdB0z25zDcAKkAPzI2hm%2FjKbsFyaC3aR3B1exzR7caP%2FbeXT25H%2BjIuLljVY7p8gBMETQXpk94snjliuzNelvSelaXtPXIMnGfLYSbAAfllsCkJJ06Ms%2FF0MppkXsQHw2GEZTOfqvt2EF0nL4%2FhCvE50mRtdnsOlDQjYo9KDVKe%2F0l89PyP8fK15jjrd0QhzoOSoRmZnLbBY3QHxiqHoDmMoHQojFYd09Y9%2FZnZANhQVZqaG5iYn39cBInNFQdvFj%2BuLX6h7M4rXC%2Fom8NR%2BnGwvNI3x9YZZwALtExhpQVMLS038MGOqUBtqr6jV1FSMekj8mxOJWPBjI0tyELW77RCxALiRnvmxTSYdcPmHNC4AUaLjeM9QIBgQwsnGoP91XgSKdy46MbCt8oCQZxbAy1teVlC5e0MIqIM65BOAtcbtfsul07JVzvXFd1TRIH4ZpckeAXaQat5Ok67ggOB%2BjOTvizAulYUJmL1lzh%2FRcl8pvLJxKd8TNmYLotL19NKbCIrbIS8cx7VLditFIg&X-Amz-Signature=ebe88789d71401cc6d970cdd1c1ea5d5d9ace4da867b06c01397b9bd1d0b3909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
