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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHC7UWZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHjW2VyIlNQqCZDf7tkoY2xWHRgq8D5aIFsWtmGYFG1%2FAiEAsQwV2RJwV%2FP695MGrnCpkTj%2FPMSxbkMtYsBWMMJmcysqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcO5vv109jhJK%2FToCrcA9mKG6KT8xejG7T11bNIuEI3GSrRzWSrL84nsmDGiTXtOm3CA8hZ9LdWH76DHrjveCJiCjAUk44tmNJB93%2BrobOmccwIM5VYrDUxSSGEvUuA4J2pHWvhE5OpAfhBUSsNN37BpxeWaBZGvkgrbNCr7BMPUgN8KzlVXs%2BzjeQ%2FV%2Bj1UgWARwt%2F%2BsTzKQnatZVeHQqH8%2F%2FS0hKwPYUhQMbOTBNBqCgmolTqnU9HJjGjghOO0eQRidPHA7ZXer0vCgCp4bhJjVIFEDylqB03aBadjskEbY6W0TJfkkFTqsLSI2ZWqhXcDcQDLK1pZBp9GEKjYPuX3DtTi2Q759ot%2BbFY%2BDX30ru9rddgHPU3D9Rd1W%2B%2B7ArlaUAM%2F1L%2FIjhQdH9jCjR7P4Ix56Em60%2BdAFufiLGNCU2p%2F0000GnZuKgh9odVultUCXpdC4%2BWJscK%2B%2BXFEiC1NSR6hu0c26GM1LrVKZDoz9yYq7o36fOYGpk4b%2FFPMXwPjzbZn5%2FdvcC548uQRXDYkfKmBViUgRONN3zfSQSKmzd%2Fl%2FRSNUSVNBJFRZVql5EpbsRgTodiMJj7ywXs8NGlG0o4z9vco7ecTbDHp7BH419bG3ubH0SdZe6IVXPdpUIHGWWL%2FBwM4FZUMOnMkMAGOqUBQZnUV%2BLWFMrdaB%2B2vUX7nzjqC8ie%2B6qZ8vKEmdbFNf2J1SlpxZmW7hurttdV4K96IhCzj9NRTZUWmXoV8k5DKxsv%2B7%2FKHtmUVpA3MCdxp%2FXF1oQoRbeaP2%2B81zFt2cyOVpJfLn5vxBCyqQWCHRsYnOM2yxeVne4oQRuyPzRFzcXQd2cO1hJdEIvbAfmPsC64P1Rcho037LhD6SMj%2Bg5AIOgGGR5j&X-Amz-Signature=b57623e458febcbcb413b7e8b7dbd5896f43164c9ab696ed1ea54499a4ce3ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHC7UWZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHjW2VyIlNQqCZDf7tkoY2xWHRgq8D5aIFsWtmGYFG1%2FAiEAsQwV2RJwV%2FP695MGrnCpkTj%2FPMSxbkMtYsBWMMJmcysqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcO5vv109jhJK%2FToCrcA9mKG6KT8xejG7T11bNIuEI3GSrRzWSrL84nsmDGiTXtOm3CA8hZ9LdWH76DHrjveCJiCjAUk44tmNJB93%2BrobOmccwIM5VYrDUxSSGEvUuA4J2pHWvhE5OpAfhBUSsNN37BpxeWaBZGvkgrbNCr7BMPUgN8KzlVXs%2BzjeQ%2FV%2Bj1UgWARwt%2F%2BsTzKQnatZVeHQqH8%2F%2FS0hKwPYUhQMbOTBNBqCgmolTqnU9HJjGjghOO0eQRidPHA7ZXer0vCgCp4bhJjVIFEDylqB03aBadjskEbY6W0TJfkkFTqsLSI2ZWqhXcDcQDLK1pZBp9GEKjYPuX3DtTi2Q759ot%2BbFY%2BDX30ru9rddgHPU3D9Rd1W%2B%2B7ArlaUAM%2F1L%2FIjhQdH9jCjR7P4Ix56Em60%2BdAFufiLGNCU2p%2F0000GnZuKgh9odVultUCXpdC4%2BWJscK%2B%2BXFEiC1NSR6hu0c26GM1LrVKZDoz9yYq7o36fOYGpk4b%2FFPMXwPjzbZn5%2FdvcC548uQRXDYkfKmBViUgRONN3zfSQSKmzd%2Fl%2FRSNUSVNBJFRZVql5EpbsRgTodiMJj7ywXs8NGlG0o4z9vco7ecTbDHp7BH419bG3ubH0SdZe6IVXPdpUIHGWWL%2FBwM4FZUMOnMkMAGOqUBQZnUV%2BLWFMrdaB%2B2vUX7nzjqC8ie%2B6qZ8vKEmdbFNf2J1SlpxZmW7hurttdV4K96IhCzj9NRTZUWmXoV8k5DKxsv%2B7%2FKHtmUVpA3MCdxp%2FXF1oQoRbeaP2%2B81zFt2cyOVpJfLn5vxBCyqQWCHRsYnOM2yxeVne4oQRuyPzRFzcXQd2cO1hJdEIvbAfmPsC64P1Rcho037LhD6SMj%2Bg5AIOgGGR5j&X-Amz-Signature=ee1d4afac7faa149f5df3efcf77ce21b5caa86995be1cb9639c3a638b60e31bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHC7UWZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHjW2VyIlNQqCZDf7tkoY2xWHRgq8D5aIFsWtmGYFG1%2FAiEAsQwV2RJwV%2FP695MGrnCpkTj%2FPMSxbkMtYsBWMMJmcysqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcO5vv109jhJK%2FToCrcA9mKG6KT8xejG7T11bNIuEI3GSrRzWSrL84nsmDGiTXtOm3CA8hZ9LdWH76DHrjveCJiCjAUk44tmNJB93%2BrobOmccwIM5VYrDUxSSGEvUuA4J2pHWvhE5OpAfhBUSsNN37BpxeWaBZGvkgrbNCr7BMPUgN8KzlVXs%2BzjeQ%2FV%2Bj1UgWARwt%2F%2BsTzKQnatZVeHQqH8%2F%2FS0hKwPYUhQMbOTBNBqCgmolTqnU9HJjGjghOO0eQRidPHA7ZXer0vCgCp4bhJjVIFEDylqB03aBadjskEbY6W0TJfkkFTqsLSI2ZWqhXcDcQDLK1pZBp9GEKjYPuX3DtTi2Q759ot%2BbFY%2BDX30ru9rddgHPU3D9Rd1W%2B%2B7ArlaUAM%2F1L%2FIjhQdH9jCjR7P4Ix56Em60%2BdAFufiLGNCU2p%2F0000GnZuKgh9odVultUCXpdC4%2BWJscK%2B%2BXFEiC1NSR6hu0c26GM1LrVKZDoz9yYq7o36fOYGpk4b%2FFPMXwPjzbZn5%2FdvcC548uQRXDYkfKmBViUgRONN3zfSQSKmzd%2Fl%2FRSNUSVNBJFRZVql5EpbsRgTodiMJj7ywXs8NGlG0o4z9vco7ecTbDHp7BH419bG3ubH0SdZe6IVXPdpUIHGWWL%2FBwM4FZUMOnMkMAGOqUBQZnUV%2BLWFMrdaB%2B2vUX7nzjqC8ie%2B6qZ8vKEmdbFNf2J1SlpxZmW7hurttdV4K96IhCzj9NRTZUWmXoV8k5DKxsv%2B7%2FKHtmUVpA3MCdxp%2FXF1oQoRbeaP2%2B81zFt2cyOVpJfLn5vxBCyqQWCHRsYnOM2yxeVne4oQRuyPzRFzcXQd2cO1hJdEIvbAfmPsC64P1Rcho037LhD6SMj%2Bg5AIOgGGR5j&X-Amz-Signature=6ab8de1c390d5f689bf373351ef41347a6143abc844fd3236a3eb005a4bc7725&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHC7UWZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHjW2VyIlNQqCZDf7tkoY2xWHRgq8D5aIFsWtmGYFG1%2FAiEAsQwV2RJwV%2FP695MGrnCpkTj%2FPMSxbkMtYsBWMMJmcysqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcO5vv109jhJK%2FToCrcA9mKG6KT8xejG7T11bNIuEI3GSrRzWSrL84nsmDGiTXtOm3CA8hZ9LdWH76DHrjveCJiCjAUk44tmNJB93%2BrobOmccwIM5VYrDUxSSGEvUuA4J2pHWvhE5OpAfhBUSsNN37BpxeWaBZGvkgrbNCr7BMPUgN8KzlVXs%2BzjeQ%2FV%2Bj1UgWARwt%2F%2BsTzKQnatZVeHQqH8%2F%2FS0hKwPYUhQMbOTBNBqCgmolTqnU9HJjGjghOO0eQRidPHA7ZXer0vCgCp4bhJjVIFEDylqB03aBadjskEbY6W0TJfkkFTqsLSI2ZWqhXcDcQDLK1pZBp9GEKjYPuX3DtTi2Q759ot%2BbFY%2BDX30ru9rddgHPU3D9Rd1W%2B%2B7ArlaUAM%2F1L%2FIjhQdH9jCjR7P4Ix56Em60%2BdAFufiLGNCU2p%2F0000GnZuKgh9odVultUCXpdC4%2BWJscK%2B%2BXFEiC1NSR6hu0c26GM1LrVKZDoz9yYq7o36fOYGpk4b%2FFPMXwPjzbZn5%2FdvcC548uQRXDYkfKmBViUgRONN3zfSQSKmzd%2Fl%2FRSNUSVNBJFRZVql5EpbsRgTodiMJj7ywXs8NGlG0o4z9vco7ecTbDHp7BH419bG3ubH0SdZe6IVXPdpUIHGWWL%2FBwM4FZUMOnMkMAGOqUBQZnUV%2BLWFMrdaB%2B2vUX7nzjqC8ie%2B6qZ8vKEmdbFNf2J1SlpxZmW7hurttdV4K96IhCzj9NRTZUWmXoV8k5DKxsv%2B7%2FKHtmUVpA3MCdxp%2FXF1oQoRbeaP2%2B81zFt2cyOVpJfLn5vxBCyqQWCHRsYnOM2yxeVne4oQRuyPzRFzcXQd2cO1hJdEIvbAfmPsC64P1Rcho037LhD6SMj%2Bg5AIOgGGR5j&X-Amz-Signature=3148e615e3977d7a0693c133806fc1044ddcecc1d0786abe965951e7b3a76d36&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHC7UWZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHjW2VyIlNQqCZDf7tkoY2xWHRgq8D5aIFsWtmGYFG1%2FAiEAsQwV2RJwV%2FP695MGrnCpkTj%2FPMSxbkMtYsBWMMJmcysqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcO5vv109jhJK%2FToCrcA9mKG6KT8xejG7T11bNIuEI3GSrRzWSrL84nsmDGiTXtOm3CA8hZ9LdWH76DHrjveCJiCjAUk44tmNJB93%2BrobOmccwIM5VYrDUxSSGEvUuA4J2pHWvhE5OpAfhBUSsNN37BpxeWaBZGvkgrbNCr7BMPUgN8KzlVXs%2BzjeQ%2FV%2Bj1UgWARwt%2F%2BsTzKQnatZVeHQqH8%2F%2FS0hKwPYUhQMbOTBNBqCgmolTqnU9HJjGjghOO0eQRidPHA7ZXer0vCgCp4bhJjVIFEDylqB03aBadjskEbY6W0TJfkkFTqsLSI2ZWqhXcDcQDLK1pZBp9GEKjYPuX3DtTi2Q759ot%2BbFY%2BDX30ru9rddgHPU3D9Rd1W%2B%2B7ArlaUAM%2F1L%2FIjhQdH9jCjR7P4Ix56Em60%2BdAFufiLGNCU2p%2F0000GnZuKgh9odVultUCXpdC4%2BWJscK%2B%2BXFEiC1NSR6hu0c26GM1LrVKZDoz9yYq7o36fOYGpk4b%2FFPMXwPjzbZn5%2FdvcC548uQRXDYkfKmBViUgRONN3zfSQSKmzd%2Fl%2FRSNUSVNBJFRZVql5EpbsRgTodiMJj7ywXs8NGlG0o4z9vco7ecTbDHp7BH419bG3ubH0SdZe6IVXPdpUIHGWWL%2FBwM4FZUMOnMkMAGOqUBQZnUV%2BLWFMrdaB%2B2vUX7nzjqC8ie%2B6qZ8vKEmdbFNf2J1SlpxZmW7hurttdV4K96IhCzj9NRTZUWmXoV8k5DKxsv%2B7%2FKHtmUVpA3MCdxp%2FXF1oQoRbeaP2%2B81zFt2cyOVpJfLn5vxBCyqQWCHRsYnOM2yxeVne4oQRuyPzRFzcXQd2cO1hJdEIvbAfmPsC64P1Rcho037LhD6SMj%2Bg5AIOgGGR5j&X-Amz-Signature=2b890459bf5bdd5f8d23bb9815a295d021e27f6b885fe38d85b14e0ba4555e41&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHC7UWZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHjW2VyIlNQqCZDf7tkoY2xWHRgq8D5aIFsWtmGYFG1%2FAiEAsQwV2RJwV%2FP695MGrnCpkTj%2FPMSxbkMtYsBWMMJmcysqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcO5vv109jhJK%2FToCrcA9mKG6KT8xejG7T11bNIuEI3GSrRzWSrL84nsmDGiTXtOm3CA8hZ9LdWH76DHrjveCJiCjAUk44tmNJB93%2BrobOmccwIM5VYrDUxSSGEvUuA4J2pHWvhE5OpAfhBUSsNN37BpxeWaBZGvkgrbNCr7BMPUgN8KzlVXs%2BzjeQ%2FV%2Bj1UgWARwt%2F%2BsTzKQnatZVeHQqH8%2F%2FS0hKwPYUhQMbOTBNBqCgmolTqnU9HJjGjghOO0eQRidPHA7ZXer0vCgCp4bhJjVIFEDylqB03aBadjskEbY6W0TJfkkFTqsLSI2ZWqhXcDcQDLK1pZBp9GEKjYPuX3DtTi2Q759ot%2BbFY%2BDX30ru9rddgHPU3D9Rd1W%2B%2B7ArlaUAM%2F1L%2FIjhQdH9jCjR7P4Ix56Em60%2BdAFufiLGNCU2p%2F0000GnZuKgh9odVultUCXpdC4%2BWJscK%2B%2BXFEiC1NSR6hu0c26GM1LrVKZDoz9yYq7o36fOYGpk4b%2FFPMXwPjzbZn5%2FdvcC548uQRXDYkfKmBViUgRONN3zfSQSKmzd%2Fl%2FRSNUSVNBJFRZVql5EpbsRgTodiMJj7ywXs8NGlG0o4z9vco7ecTbDHp7BH419bG3ubH0SdZe6IVXPdpUIHGWWL%2FBwM4FZUMOnMkMAGOqUBQZnUV%2BLWFMrdaB%2B2vUX7nzjqC8ie%2B6qZ8vKEmdbFNf2J1SlpxZmW7hurttdV4K96IhCzj9NRTZUWmXoV8k5DKxsv%2B7%2FKHtmUVpA3MCdxp%2FXF1oQoRbeaP2%2B81zFt2cyOVpJfLn5vxBCyqQWCHRsYnOM2yxeVne4oQRuyPzRFzcXQd2cO1hJdEIvbAfmPsC64P1Rcho037LhD6SMj%2Bg5AIOgGGR5j&X-Amz-Signature=f329b67d89098ce4ba551c684b1a41fc913762b965adbbd20386630e3888b214&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHC7UWZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHjW2VyIlNQqCZDf7tkoY2xWHRgq8D5aIFsWtmGYFG1%2FAiEAsQwV2RJwV%2FP695MGrnCpkTj%2FPMSxbkMtYsBWMMJmcysqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcO5vv109jhJK%2FToCrcA9mKG6KT8xejG7T11bNIuEI3GSrRzWSrL84nsmDGiTXtOm3CA8hZ9LdWH76DHrjveCJiCjAUk44tmNJB93%2BrobOmccwIM5VYrDUxSSGEvUuA4J2pHWvhE5OpAfhBUSsNN37BpxeWaBZGvkgrbNCr7BMPUgN8KzlVXs%2BzjeQ%2FV%2Bj1UgWARwt%2F%2BsTzKQnatZVeHQqH8%2F%2FS0hKwPYUhQMbOTBNBqCgmolTqnU9HJjGjghOO0eQRidPHA7ZXer0vCgCp4bhJjVIFEDylqB03aBadjskEbY6W0TJfkkFTqsLSI2ZWqhXcDcQDLK1pZBp9GEKjYPuX3DtTi2Q759ot%2BbFY%2BDX30ru9rddgHPU3D9Rd1W%2B%2B7ArlaUAM%2F1L%2FIjhQdH9jCjR7P4Ix56Em60%2BdAFufiLGNCU2p%2F0000GnZuKgh9odVultUCXpdC4%2BWJscK%2B%2BXFEiC1NSR6hu0c26GM1LrVKZDoz9yYq7o36fOYGpk4b%2FFPMXwPjzbZn5%2FdvcC548uQRXDYkfKmBViUgRONN3zfSQSKmzd%2Fl%2FRSNUSVNBJFRZVql5EpbsRgTodiMJj7ywXs8NGlG0o4z9vco7ecTbDHp7BH419bG3ubH0SdZe6IVXPdpUIHGWWL%2FBwM4FZUMOnMkMAGOqUBQZnUV%2BLWFMrdaB%2B2vUX7nzjqC8ie%2B6qZ8vKEmdbFNf2J1SlpxZmW7hurttdV4K96IhCzj9NRTZUWmXoV8k5DKxsv%2B7%2FKHtmUVpA3MCdxp%2FXF1oQoRbeaP2%2B81zFt2cyOVpJfLn5vxBCyqQWCHRsYnOM2yxeVne4oQRuyPzRFzcXQd2cO1hJdEIvbAfmPsC64P1Rcho037LhD6SMj%2Bg5AIOgGGR5j&X-Amz-Signature=51696b6fa2b4979449c98fa26af8bdda7ca69212a8ad96cb1abb6203297355de&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
