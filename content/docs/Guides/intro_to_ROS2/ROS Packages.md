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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHNIF77%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHqv6rSE6S5LcCo247P7dOKbr30%2BYQrYEsQzw5gNfvCAAiEAkN%2BorC1vdrq4vhVlDExqV2DFQHL%2FGUT5Vg7VNzUwTxUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEOu2POf9v1MPOre7CrcA7DrkIJ8udk4tTyT4NU9qXxsEHXdeInd2JFKVGlZ9mI3YyYRFbHAWluhHCGGHUd%2FYWb1MZO%2F4ItKV3t6VlkZpkQSKfcBmGLIuDoCp83DugREtL5tvlJmbPkitcQrNCpv5wOBVUkIgToLjT8OG%2Bz5J4q12dFz17RaUyLvsKMoagleS3H2k5oseP21OM7ygbWul0VWoeabtQZefV8KJ33yc3I0QWvSoWX9Dupt9EOuva54qoZY%2FLHRuMMZwsGq4yCGrybxuipTzP%2B7xl6jwqbQMw2DGp9lOzwFI9F%2FS3h5PvXHy4ABs15AstdYkLD%2BO7WPrT69wTM8uMNsAQh%2FvQ9v3R49Y29y48NVMEh48RzJ%2Bkz6NQe8NxkY%2Flyt0atCMyJ43B3pwNIuCAbMrfq%2BRVbjGxtyjl0MyReqckqYo8jtIZ4tJllN6jN7eJLBybFMwgh%2BeWK4evgMhmEnrhZMNQnctHTLeW99eYNll%2Bh7mHPZJ8AOUBiEPDX8fngY6hGoGiF07hGLrTHjXXgjtK8T7w0fI6%2FCFYPFoRtG4e261AXaJ3j2PBHenpJEcQzB7xSANAbljwgy5w8yV2%2BLQDGiw%2BlyXj%2BoqClAX53rypRa4mZQmVoxaohuxDHAmxwERi2PMNrLy8QGOqUBnr%2Fh90Ginn2%2Fz93%2BR2NdXlakKbwgcxgPaubH1htyBf4%2BT7IsI3%2BVeQ4jZZqBIfwjwbGSXu0gOgREotUlQmWbPjuiuE%2BaQurnhPSQDlyCo9NWvt5RjDdZCqYYkdH6kC%2BAhlyRtnfLnwjqDI9igvyBVCpVnBE6FZVOs8zc2dsUcTNwj50nV81ytPDaXC06pTyS%2BuSGtkLHkPXrw3qvwob0BNI7XNva&X-Amz-Signature=dfca8d5f91fb6700957d68ae429d1fc8e4652c1d06c989db0f8179562a62f125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHNIF77%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHqv6rSE6S5LcCo247P7dOKbr30%2BYQrYEsQzw5gNfvCAAiEAkN%2BorC1vdrq4vhVlDExqV2DFQHL%2FGUT5Vg7VNzUwTxUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEOu2POf9v1MPOre7CrcA7DrkIJ8udk4tTyT4NU9qXxsEHXdeInd2JFKVGlZ9mI3YyYRFbHAWluhHCGGHUd%2FYWb1MZO%2F4ItKV3t6VlkZpkQSKfcBmGLIuDoCp83DugREtL5tvlJmbPkitcQrNCpv5wOBVUkIgToLjT8OG%2Bz5J4q12dFz17RaUyLvsKMoagleS3H2k5oseP21OM7ygbWul0VWoeabtQZefV8KJ33yc3I0QWvSoWX9Dupt9EOuva54qoZY%2FLHRuMMZwsGq4yCGrybxuipTzP%2B7xl6jwqbQMw2DGp9lOzwFI9F%2FS3h5PvXHy4ABs15AstdYkLD%2BO7WPrT69wTM8uMNsAQh%2FvQ9v3R49Y29y48NVMEh48RzJ%2Bkz6NQe8NxkY%2Flyt0atCMyJ43B3pwNIuCAbMrfq%2BRVbjGxtyjl0MyReqckqYo8jtIZ4tJllN6jN7eJLBybFMwgh%2BeWK4evgMhmEnrhZMNQnctHTLeW99eYNll%2Bh7mHPZJ8AOUBiEPDX8fngY6hGoGiF07hGLrTHjXXgjtK8T7w0fI6%2FCFYPFoRtG4e261AXaJ3j2PBHenpJEcQzB7xSANAbljwgy5w8yV2%2BLQDGiw%2BlyXj%2BoqClAX53rypRa4mZQmVoxaohuxDHAmxwERi2PMNrLy8QGOqUBnr%2Fh90Ginn2%2Fz93%2BR2NdXlakKbwgcxgPaubH1htyBf4%2BT7IsI3%2BVeQ4jZZqBIfwjwbGSXu0gOgREotUlQmWbPjuiuE%2BaQurnhPSQDlyCo9NWvt5RjDdZCqYYkdH6kC%2BAhlyRtnfLnwjqDI9igvyBVCpVnBE6FZVOs8zc2dsUcTNwj50nV81ytPDaXC06pTyS%2BuSGtkLHkPXrw3qvwob0BNI7XNva&X-Amz-Signature=bf8fc266cc57190f400df9453aee1f508db0899590285f5776dbcb7694ca0f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHNIF77%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHqv6rSE6S5LcCo247P7dOKbr30%2BYQrYEsQzw5gNfvCAAiEAkN%2BorC1vdrq4vhVlDExqV2DFQHL%2FGUT5Vg7VNzUwTxUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEOu2POf9v1MPOre7CrcA7DrkIJ8udk4tTyT4NU9qXxsEHXdeInd2JFKVGlZ9mI3YyYRFbHAWluhHCGGHUd%2FYWb1MZO%2F4ItKV3t6VlkZpkQSKfcBmGLIuDoCp83DugREtL5tvlJmbPkitcQrNCpv5wOBVUkIgToLjT8OG%2Bz5J4q12dFz17RaUyLvsKMoagleS3H2k5oseP21OM7ygbWul0VWoeabtQZefV8KJ33yc3I0QWvSoWX9Dupt9EOuva54qoZY%2FLHRuMMZwsGq4yCGrybxuipTzP%2B7xl6jwqbQMw2DGp9lOzwFI9F%2FS3h5PvXHy4ABs15AstdYkLD%2BO7WPrT69wTM8uMNsAQh%2FvQ9v3R49Y29y48NVMEh48RzJ%2Bkz6NQe8NxkY%2Flyt0atCMyJ43B3pwNIuCAbMrfq%2BRVbjGxtyjl0MyReqckqYo8jtIZ4tJllN6jN7eJLBybFMwgh%2BeWK4evgMhmEnrhZMNQnctHTLeW99eYNll%2Bh7mHPZJ8AOUBiEPDX8fngY6hGoGiF07hGLrTHjXXgjtK8T7w0fI6%2FCFYPFoRtG4e261AXaJ3j2PBHenpJEcQzB7xSANAbljwgy5w8yV2%2BLQDGiw%2BlyXj%2BoqClAX53rypRa4mZQmVoxaohuxDHAmxwERi2PMNrLy8QGOqUBnr%2Fh90Ginn2%2Fz93%2BR2NdXlakKbwgcxgPaubH1htyBf4%2BT7IsI3%2BVeQ4jZZqBIfwjwbGSXu0gOgREotUlQmWbPjuiuE%2BaQurnhPSQDlyCo9NWvt5RjDdZCqYYkdH6kC%2BAhlyRtnfLnwjqDI9igvyBVCpVnBE6FZVOs8zc2dsUcTNwj50nV81ytPDaXC06pTyS%2BuSGtkLHkPXrw3qvwob0BNI7XNva&X-Amz-Signature=d92352c724404caa0b1637252dc6181fad28f227e222774ee7b88eee72f0c149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHNIF77%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHqv6rSE6S5LcCo247P7dOKbr30%2BYQrYEsQzw5gNfvCAAiEAkN%2BorC1vdrq4vhVlDExqV2DFQHL%2FGUT5Vg7VNzUwTxUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEOu2POf9v1MPOre7CrcA7DrkIJ8udk4tTyT4NU9qXxsEHXdeInd2JFKVGlZ9mI3YyYRFbHAWluhHCGGHUd%2FYWb1MZO%2F4ItKV3t6VlkZpkQSKfcBmGLIuDoCp83DugREtL5tvlJmbPkitcQrNCpv5wOBVUkIgToLjT8OG%2Bz5J4q12dFz17RaUyLvsKMoagleS3H2k5oseP21OM7ygbWul0VWoeabtQZefV8KJ33yc3I0QWvSoWX9Dupt9EOuva54qoZY%2FLHRuMMZwsGq4yCGrybxuipTzP%2B7xl6jwqbQMw2DGp9lOzwFI9F%2FS3h5PvXHy4ABs15AstdYkLD%2BO7WPrT69wTM8uMNsAQh%2FvQ9v3R49Y29y48NVMEh48RzJ%2Bkz6NQe8NxkY%2Flyt0atCMyJ43B3pwNIuCAbMrfq%2BRVbjGxtyjl0MyReqckqYo8jtIZ4tJllN6jN7eJLBybFMwgh%2BeWK4evgMhmEnrhZMNQnctHTLeW99eYNll%2Bh7mHPZJ8AOUBiEPDX8fngY6hGoGiF07hGLrTHjXXgjtK8T7w0fI6%2FCFYPFoRtG4e261AXaJ3j2PBHenpJEcQzB7xSANAbljwgy5w8yV2%2BLQDGiw%2BlyXj%2BoqClAX53rypRa4mZQmVoxaohuxDHAmxwERi2PMNrLy8QGOqUBnr%2Fh90Ginn2%2Fz93%2BR2NdXlakKbwgcxgPaubH1htyBf4%2BT7IsI3%2BVeQ4jZZqBIfwjwbGSXu0gOgREotUlQmWbPjuiuE%2BaQurnhPSQDlyCo9NWvt5RjDdZCqYYkdH6kC%2BAhlyRtnfLnwjqDI9igvyBVCpVnBE6FZVOs8zc2dsUcTNwj50nV81ytPDaXC06pTyS%2BuSGtkLHkPXrw3qvwob0BNI7XNva&X-Amz-Signature=a494b6e921c77ed5f85f3efb776fa317bb83d4a718206742b27d5027e6fccd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHNIF77%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHqv6rSE6S5LcCo247P7dOKbr30%2BYQrYEsQzw5gNfvCAAiEAkN%2BorC1vdrq4vhVlDExqV2DFQHL%2FGUT5Vg7VNzUwTxUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEOu2POf9v1MPOre7CrcA7DrkIJ8udk4tTyT4NU9qXxsEHXdeInd2JFKVGlZ9mI3YyYRFbHAWluhHCGGHUd%2FYWb1MZO%2F4ItKV3t6VlkZpkQSKfcBmGLIuDoCp83DugREtL5tvlJmbPkitcQrNCpv5wOBVUkIgToLjT8OG%2Bz5J4q12dFz17RaUyLvsKMoagleS3H2k5oseP21OM7ygbWul0VWoeabtQZefV8KJ33yc3I0QWvSoWX9Dupt9EOuva54qoZY%2FLHRuMMZwsGq4yCGrybxuipTzP%2B7xl6jwqbQMw2DGp9lOzwFI9F%2FS3h5PvXHy4ABs15AstdYkLD%2BO7WPrT69wTM8uMNsAQh%2FvQ9v3R49Y29y48NVMEh48RzJ%2Bkz6NQe8NxkY%2Flyt0atCMyJ43B3pwNIuCAbMrfq%2BRVbjGxtyjl0MyReqckqYo8jtIZ4tJllN6jN7eJLBybFMwgh%2BeWK4evgMhmEnrhZMNQnctHTLeW99eYNll%2Bh7mHPZJ8AOUBiEPDX8fngY6hGoGiF07hGLrTHjXXgjtK8T7w0fI6%2FCFYPFoRtG4e261AXaJ3j2PBHenpJEcQzB7xSANAbljwgy5w8yV2%2BLQDGiw%2BlyXj%2BoqClAX53rypRa4mZQmVoxaohuxDHAmxwERi2PMNrLy8QGOqUBnr%2Fh90Ginn2%2Fz93%2BR2NdXlakKbwgcxgPaubH1htyBf4%2BT7IsI3%2BVeQ4jZZqBIfwjwbGSXu0gOgREotUlQmWbPjuiuE%2BaQurnhPSQDlyCo9NWvt5RjDdZCqYYkdH6kC%2BAhlyRtnfLnwjqDI9igvyBVCpVnBE6FZVOs8zc2dsUcTNwj50nV81ytPDaXC06pTyS%2BuSGtkLHkPXrw3qvwob0BNI7XNva&X-Amz-Signature=ce10510d6f9046c9919fb0385e80266cc5e9e4ad9f33e63e1268e5311a9aed56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHNIF77%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHqv6rSE6S5LcCo247P7dOKbr30%2BYQrYEsQzw5gNfvCAAiEAkN%2BorC1vdrq4vhVlDExqV2DFQHL%2FGUT5Vg7VNzUwTxUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEOu2POf9v1MPOre7CrcA7DrkIJ8udk4tTyT4NU9qXxsEHXdeInd2JFKVGlZ9mI3YyYRFbHAWluhHCGGHUd%2FYWb1MZO%2F4ItKV3t6VlkZpkQSKfcBmGLIuDoCp83DugREtL5tvlJmbPkitcQrNCpv5wOBVUkIgToLjT8OG%2Bz5J4q12dFz17RaUyLvsKMoagleS3H2k5oseP21OM7ygbWul0VWoeabtQZefV8KJ33yc3I0QWvSoWX9Dupt9EOuva54qoZY%2FLHRuMMZwsGq4yCGrybxuipTzP%2B7xl6jwqbQMw2DGp9lOzwFI9F%2FS3h5PvXHy4ABs15AstdYkLD%2BO7WPrT69wTM8uMNsAQh%2FvQ9v3R49Y29y48NVMEh48RzJ%2Bkz6NQe8NxkY%2Flyt0atCMyJ43B3pwNIuCAbMrfq%2BRVbjGxtyjl0MyReqckqYo8jtIZ4tJllN6jN7eJLBybFMwgh%2BeWK4evgMhmEnrhZMNQnctHTLeW99eYNll%2Bh7mHPZJ8AOUBiEPDX8fngY6hGoGiF07hGLrTHjXXgjtK8T7w0fI6%2FCFYPFoRtG4e261AXaJ3j2PBHenpJEcQzB7xSANAbljwgy5w8yV2%2BLQDGiw%2BlyXj%2BoqClAX53rypRa4mZQmVoxaohuxDHAmxwERi2PMNrLy8QGOqUBnr%2Fh90Ginn2%2Fz93%2BR2NdXlakKbwgcxgPaubH1htyBf4%2BT7IsI3%2BVeQ4jZZqBIfwjwbGSXu0gOgREotUlQmWbPjuiuE%2BaQurnhPSQDlyCo9NWvt5RjDdZCqYYkdH6kC%2BAhlyRtnfLnwjqDI9igvyBVCpVnBE6FZVOs8zc2dsUcTNwj50nV81ytPDaXC06pTyS%2BuSGtkLHkPXrw3qvwob0BNI7XNva&X-Amz-Signature=be05096b8660ed8cec844f3ca1fb1937b9aa16b19034db62aaaf439374868a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHNIF77%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHqv6rSE6S5LcCo247P7dOKbr30%2BYQrYEsQzw5gNfvCAAiEAkN%2BorC1vdrq4vhVlDExqV2DFQHL%2FGUT5Vg7VNzUwTxUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEOu2POf9v1MPOre7CrcA7DrkIJ8udk4tTyT4NU9qXxsEHXdeInd2JFKVGlZ9mI3YyYRFbHAWluhHCGGHUd%2FYWb1MZO%2F4ItKV3t6VlkZpkQSKfcBmGLIuDoCp83DugREtL5tvlJmbPkitcQrNCpv5wOBVUkIgToLjT8OG%2Bz5J4q12dFz17RaUyLvsKMoagleS3H2k5oseP21OM7ygbWul0VWoeabtQZefV8KJ33yc3I0QWvSoWX9Dupt9EOuva54qoZY%2FLHRuMMZwsGq4yCGrybxuipTzP%2B7xl6jwqbQMw2DGp9lOzwFI9F%2FS3h5PvXHy4ABs15AstdYkLD%2BO7WPrT69wTM8uMNsAQh%2FvQ9v3R49Y29y48NVMEh48RzJ%2Bkz6NQe8NxkY%2Flyt0atCMyJ43B3pwNIuCAbMrfq%2BRVbjGxtyjl0MyReqckqYo8jtIZ4tJllN6jN7eJLBybFMwgh%2BeWK4evgMhmEnrhZMNQnctHTLeW99eYNll%2Bh7mHPZJ8AOUBiEPDX8fngY6hGoGiF07hGLrTHjXXgjtK8T7w0fI6%2FCFYPFoRtG4e261AXaJ3j2PBHenpJEcQzB7xSANAbljwgy5w8yV2%2BLQDGiw%2BlyXj%2BoqClAX53rypRa4mZQmVoxaohuxDHAmxwERi2PMNrLy8QGOqUBnr%2Fh90Ginn2%2Fz93%2BR2NdXlakKbwgcxgPaubH1htyBf4%2BT7IsI3%2BVeQ4jZZqBIfwjwbGSXu0gOgREotUlQmWbPjuiuE%2BaQurnhPSQDlyCo9NWvt5RjDdZCqYYkdH6kC%2BAhlyRtnfLnwjqDI9igvyBVCpVnBE6FZVOs8zc2dsUcTNwj50nV81ytPDaXC06pTyS%2BuSGtkLHkPXrw3qvwob0BNI7XNva&X-Amz-Signature=58de044688544374c1bc5313ad6bd1650b3b5cc14709a2423a2101c20f7ba31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
