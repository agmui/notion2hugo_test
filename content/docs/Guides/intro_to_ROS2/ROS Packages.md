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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TAHF7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHBfVOpn5mQwz6ndItXIbfY2XFhq8cBQDci6UKc%2BMMYqAiEAxEDPzE%2Fx6JTGNreJhiBqGgPzaZ8tUmo0mXO0r0KkbDUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJMV6D2mXjaoX86wyCrcA0rKI1LR9KGTR%2FiakWjzE6pWMCqeRjiLKvw0LxdCYejaoF1DHT8o2oFfkODqW6CAJSnUuroLVxneVONwIs6DzhNrJC08ZbiotGe%2FxhpGJG415bFIaJKimmRKNKw4b9mzLnbEtSznhaWfh1FtlwUwV%2FzU%2F5h%2F9wMrTkWjvmQ5swQTyCVwfD4DGDiOoTJMfe%2BYfWBbArt2LSVEKDffmiqydUj%2FwRFar%2BarjNKeoeH%2F3ikplnJqfVTiBZa2%2BhAGsONXtbt5vTEFRph%2BGgIAqZX8sR9BfddFQxJIN5K6lNuHxuAXiy7JaBHei%2BK8D0MFi6Hme9m7eQNxvxxzFc9RKJE3X75uNsdwmiXDCYbNfEj5gCM115ktFWILb0NCzLdbkdf5gCdWcfhZnXdoQ0M%2FWkswWxqShh6GMemNqFxTBuMA0GLzVgA0Qtj%2BNnZ0SrQHcjq%2BwRLym680dPv71EkgUV7d2teH6RavfJxoM0uuP78kQ7s0AzWQmSpy2yIMgmr1nEWdde74h2CyAUcvRBetw9Pu9yrxyLaLVATUdg7pbxsz3jMsy7AOvNzlvAfLmZ9jmd%2F23M%2Fv%2FdXKEcnsiYHMiTwaKGM4U2TxawgM8s9r8kvokWR7OF%2B63q5E3pIojkeoMOrIwMIGOqUB%2F%2FWKfza5v64zUB%2FztJI%2BqwmxXnGdcjTZzzcUtrc9SbqYebqHiTWbCTqgW8OwNqDOYPgzRpt%2F5YEnqfZ0VG9DWG6WKtiIBdZBLR8R%2BuDhIQOJfFCzc6%2B26KJWMqndM%2FXnh1nogeEFBaXiyVmrR8XDzLx816cbVHEGq3%2F3jCOLyGfECiim23%2FEq7iWfugMgMdpr8omNQ6AFB9v5JCV3GmgyUwVfiCf&X-Amz-Signature=bafea4f6207ad1326071de5760a8ea30264f29fc4927ece62a564de0cbdf308a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TAHF7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHBfVOpn5mQwz6ndItXIbfY2XFhq8cBQDci6UKc%2BMMYqAiEAxEDPzE%2Fx6JTGNreJhiBqGgPzaZ8tUmo0mXO0r0KkbDUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJMV6D2mXjaoX86wyCrcA0rKI1LR9KGTR%2FiakWjzE6pWMCqeRjiLKvw0LxdCYejaoF1DHT8o2oFfkODqW6CAJSnUuroLVxneVONwIs6DzhNrJC08ZbiotGe%2FxhpGJG415bFIaJKimmRKNKw4b9mzLnbEtSznhaWfh1FtlwUwV%2FzU%2F5h%2F9wMrTkWjvmQ5swQTyCVwfD4DGDiOoTJMfe%2BYfWBbArt2LSVEKDffmiqydUj%2FwRFar%2BarjNKeoeH%2F3ikplnJqfVTiBZa2%2BhAGsONXtbt5vTEFRph%2BGgIAqZX8sR9BfddFQxJIN5K6lNuHxuAXiy7JaBHei%2BK8D0MFi6Hme9m7eQNxvxxzFc9RKJE3X75uNsdwmiXDCYbNfEj5gCM115ktFWILb0NCzLdbkdf5gCdWcfhZnXdoQ0M%2FWkswWxqShh6GMemNqFxTBuMA0GLzVgA0Qtj%2BNnZ0SrQHcjq%2BwRLym680dPv71EkgUV7d2teH6RavfJxoM0uuP78kQ7s0AzWQmSpy2yIMgmr1nEWdde74h2CyAUcvRBetw9Pu9yrxyLaLVATUdg7pbxsz3jMsy7AOvNzlvAfLmZ9jmd%2F23M%2Fv%2FdXKEcnsiYHMiTwaKGM4U2TxawgM8s9r8kvokWR7OF%2B63q5E3pIojkeoMOrIwMIGOqUB%2F%2FWKfza5v64zUB%2FztJI%2BqwmxXnGdcjTZzzcUtrc9SbqYebqHiTWbCTqgW8OwNqDOYPgzRpt%2F5YEnqfZ0VG9DWG6WKtiIBdZBLR8R%2BuDhIQOJfFCzc6%2B26KJWMqndM%2FXnh1nogeEFBaXiyVmrR8XDzLx816cbVHEGq3%2F3jCOLyGfECiim23%2FEq7iWfugMgMdpr8omNQ6AFB9v5JCV3GmgyUwVfiCf&X-Amz-Signature=79b2086c7c49d2d288bb444d2715027f76cac9cb95a2775d21714479aabc6405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TAHF7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHBfVOpn5mQwz6ndItXIbfY2XFhq8cBQDci6UKc%2BMMYqAiEAxEDPzE%2Fx6JTGNreJhiBqGgPzaZ8tUmo0mXO0r0KkbDUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJMV6D2mXjaoX86wyCrcA0rKI1LR9KGTR%2FiakWjzE6pWMCqeRjiLKvw0LxdCYejaoF1DHT8o2oFfkODqW6CAJSnUuroLVxneVONwIs6DzhNrJC08ZbiotGe%2FxhpGJG415bFIaJKimmRKNKw4b9mzLnbEtSznhaWfh1FtlwUwV%2FzU%2F5h%2F9wMrTkWjvmQ5swQTyCVwfD4DGDiOoTJMfe%2BYfWBbArt2LSVEKDffmiqydUj%2FwRFar%2BarjNKeoeH%2F3ikplnJqfVTiBZa2%2BhAGsONXtbt5vTEFRph%2BGgIAqZX8sR9BfddFQxJIN5K6lNuHxuAXiy7JaBHei%2BK8D0MFi6Hme9m7eQNxvxxzFc9RKJE3X75uNsdwmiXDCYbNfEj5gCM115ktFWILb0NCzLdbkdf5gCdWcfhZnXdoQ0M%2FWkswWxqShh6GMemNqFxTBuMA0GLzVgA0Qtj%2BNnZ0SrQHcjq%2BwRLym680dPv71EkgUV7d2teH6RavfJxoM0uuP78kQ7s0AzWQmSpy2yIMgmr1nEWdde74h2CyAUcvRBetw9Pu9yrxyLaLVATUdg7pbxsz3jMsy7AOvNzlvAfLmZ9jmd%2F23M%2Fv%2FdXKEcnsiYHMiTwaKGM4U2TxawgM8s9r8kvokWR7OF%2B63q5E3pIojkeoMOrIwMIGOqUB%2F%2FWKfza5v64zUB%2FztJI%2BqwmxXnGdcjTZzzcUtrc9SbqYebqHiTWbCTqgW8OwNqDOYPgzRpt%2F5YEnqfZ0VG9DWG6WKtiIBdZBLR8R%2BuDhIQOJfFCzc6%2B26KJWMqndM%2FXnh1nogeEFBaXiyVmrR8XDzLx816cbVHEGq3%2F3jCOLyGfECiim23%2FEq7iWfugMgMdpr8omNQ6AFB9v5JCV3GmgyUwVfiCf&X-Amz-Signature=71ac2fe5809d14c439039d1f6bcb8401924bb1f654a1bb02cde4a090a2a611dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TAHF7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHBfVOpn5mQwz6ndItXIbfY2XFhq8cBQDci6UKc%2BMMYqAiEAxEDPzE%2Fx6JTGNreJhiBqGgPzaZ8tUmo0mXO0r0KkbDUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJMV6D2mXjaoX86wyCrcA0rKI1LR9KGTR%2FiakWjzE6pWMCqeRjiLKvw0LxdCYejaoF1DHT8o2oFfkODqW6CAJSnUuroLVxneVONwIs6DzhNrJC08ZbiotGe%2FxhpGJG415bFIaJKimmRKNKw4b9mzLnbEtSznhaWfh1FtlwUwV%2FzU%2F5h%2F9wMrTkWjvmQ5swQTyCVwfD4DGDiOoTJMfe%2BYfWBbArt2LSVEKDffmiqydUj%2FwRFar%2BarjNKeoeH%2F3ikplnJqfVTiBZa2%2BhAGsONXtbt5vTEFRph%2BGgIAqZX8sR9BfddFQxJIN5K6lNuHxuAXiy7JaBHei%2BK8D0MFi6Hme9m7eQNxvxxzFc9RKJE3X75uNsdwmiXDCYbNfEj5gCM115ktFWILb0NCzLdbkdf5gCdWcfhZnXdoQ0M%2FWkswWxqShh6GMemNqFxTBuMA0GLzVgA0Qtj%2BNnZ0SrQHcjq%2BwRLym680dPv71EkgUV7d2teH6RavfJxoM0uuP78kQ7s0AzWQmSpy2yIMgmr1nEWdde74h2CyAUcvRBetw9Pu9yrxyLaLVATUdg7pbxsz3jMsy7AOvNzlvAfLmZ9jmd%2F23M%2Fv%2FdXKEcnsiYHMiTwaKGM4U2TxawgM8s9r8kvokWR7OF%2B63q5E3pIojkeoMOrIwMIGOqUB%2F%2FWKfza5v64zUB%2FztJI%2BqwmxXnGdcjTZzzcUtrc9SbqYebqHiTWbCTqgW8OwNqDOYPgzRpt%2F5YEnqfZ0VG9DWG6WKtiIBdZBLR8R%2BuDhIQOJfFCzc6%2B26KJWMqndM%2FXnh1nogeEFBaXiyVmrR8XDzLx816cbVHEGq3%2F3jCOLyGfECiim23%2FEq7iWfugMgMdpr8omNQ6AFB9v5JCV3GmgyUwVfiCf&X-Amz-Signature=bdeb17ce000f09fadbeadb09804e82c61c287d0439f6129240a4c87492272c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TAHF7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHBfVOpn5mQwz6ndItXIbfY2XFhq8cBQDci6UKc%2BMMYqAiEAxEDPzE%2Fx6JTGNreJhiBqGgPzaZ8tUmo0mXO0r0KkbDUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJMV6D2mXjaoX86wyCrcA0rKI1LR9KGTR%2FiakWjzE6pWMCqeRjiLKvw0LxdCYejaoF1DHT8o2oFfkODqW6CAJSnUuroLVxneVONwIs6DzhNrJC08ZbiotGe%2FxhpGJG415bFIaJKimmRKNKw4b9mzLnbEtSznhaWfh1FtlwUwV%2FzU%2F5h%2F9wMrTkWjvmQ5swQTyCVwfD4DGDiOoTJMfe%2BYfWBbArt2LSVEKDffmiqydUj%2FwRFar%2BarjNKeoeH%2F3ikplnJqfVTiBZa2%2BhAGsONXtbt5vTEFRph%2BGgIAqZX8sR9BfddFQxJIN5K6lNuHxuAXiy7JaBHei%2BK8D0MFi6Hme9m7eQNxvxxzFc9RKJE3X75uNsdwmiXDCYbNfEj5gCM115ktFWILb0NCzLdbkdf5gCdWcfhZnXdoQ0M%2FWkswWxqShh6GMemNqFxTBuMA0GLzVgA0Qtj%2BNnZ0SrQHcjq%2BwRLym680dPv71EkgUV7d2teH6RavfJxoM0uuP78kQ7s0AzWQmSpy2yIMgmr1nEWdde74h2CyAUcvRBetw9Pu9yrxyLaLVATUdg7pbxsz3jMsy7AOvNzlvAfLmZ9jmd%2F23M%2Fv%2FdXKEcnsiYHMiTwaKGM4U2TxawgM8s9r8kvokWR7OF%2B63q5E3pIojkeoMOrIwMIGOqUB%2F%2FWKfza5v64zUB%2FztJI%2BqwmxXnGdcjTZzzcUtrc9SbqYebqHiTWbCTqgW8OwNqDOYPgzRpt%2F5YEnqfZ0VG9DWG6WKtiIBdZBLR8R%2BuDhIQOJfFCzc6%2B26KJWMqndM%2FXnh1nogeEFBaXiyVmrR8XDzLx816cbVHEGq3%2F3jCOLyGfECiim23%2FEq7iWfugMgMdpr8omNQ6AFB9v5JCV3GmgyUwVfiCf&X-Amz-Signature=72d98a39468c79c6afa051e1deb8eb37ac69f3795f31e6cb5c29eee7c24113f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TAHF7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHBfVOpn5mQwz6ndItXIbfY2XFhq8cBQDci6UKc%2BMMYqAiEAxEDPzE%2Fx6JTGNreJhiBqGgPzaZ8tUmo0mXO0r0KkbDUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJMV6D2mXjaoX86wyCrcA0rKI1LR9KGTR%2FiakWjzE6pWMCqeRjiLKvw0LxdCYejaoF1DHT8o2oFfkODqW6CAJSnUuroLVxneVONwIs6DzhNrJC08ZbiotGe%2FxhpGJG415bFIaJKimmRKNKw4b9mzLnbEtSznhaWfh1FtlwUwV%2FzU%2F5h%2F9wMrTkWjvmQ5swQTyCVwfD4DGDiOoTJMfe%2BYfWBbArt2LSVEKDffmiqydUj%2FwRFar%2BarjNKeoeH%2F3ikplnJqfVTiBZa2%2BhAGsONXtbt5vTEFRph%2BGgIAqZX8sR9BfddFQxJIN5K6lNuHxuAXiy7JaBHei%2BK8D0MFi6Hme9m7eQNxvxxzFc9RKJE3X75uNsdwmiXDCYbNfEj5gCM115ktFWILb0NCzLdbkdf5gCdWcfhZnXdoQ0M%2FWkswWxqShh6GMemNqFxTBuMA0GLzVgA0Qtj%2BNnZ0SrQHcjq%2BwRLym680dPv71EkgUV7d2teH6RavfJxoM0uuP78kQ7s0AzWQmSpy2yIMgmr1nEWdde74h2CyAUcvRBetw9Pu9yrxyLaLVATUdg7pbxsz3jMsy7AOvNzlvAfLmZ9jmd%2F23M%2Fv%2FdXKEcnsiYHMiTwaKGM4U2TxawgM8s9r8kvokWR7OF%2B63q5E3pIojkeoMOrIwMIGOqUB%2F%2FWKfza5v64zUB%2FztJI%2BqwmxXnGdcjTZzzcUtrc9SbqYebqHiTWbCTqgW8OwNqDOYPgzRpt%2F5YEnqfZ0VG9DWG6WKtiIBdZBLR8R%2BuDhIQOJfFCzc6%2B26KJWMqndM%2FXnh1nogeEFBaXiyVmrR8XDzLx816cbVHEGq3%2F3jCOLyGfECiim23%2FEq7iWfugMgMdpr8omNQ6AFB9v5JCV3GmgyUwVfiCf&X-Amz-Signature=cf369e0ece92db06d079ab153b112ba831fbc2da10958abe983dc807985954f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TAHF7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHBfVOpn5mQwz6ndItXIbfY2XFhq8cBQDci6UKc%2BMMYqAiEAxEDPzE%2Fx6JTGNreJhiBqGgPzaZ8tUmo0mXO0r0KkbDUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJMV6D2mXjaoX86wyCrcA0rKI1LR9KGTR%2FiakWjzE6pWMCqeRjiLKvw0LxdCYejaoF1DHT8o2oFfkODqW6CAJSnUuroLVxneVONwIs6DzhNrJC08ZbiotGe%2FxhpGJG415bFIaJKimmRKNKw4b9mzLnbEtSznhaWfh1FtlwUwV%2FzU%2F5h%2F9wMrTkWjvmQ5swQTyCVwfD4DGDiOoTJMfe%2BYfWBbArt2LSVEKDffmiqydUj%2FwRFar%2BarjNKeoeH%2F3ikplnJqfVTiBZa2%2BhAGsONXtbt5vTEFRph%2BGgIAqZX8sR9BfddFQxJIN5K6lNuHxuAXiy7JaBHei%2BK8D0MFi6Hme9m7eQNxvxxzFc9RKJE3X75uNsdwmiXDCYbNfEj5gCM115ktFWILb0NCzLdbkdf5gCdWcfhZnXdoQ0M%2FWkswWxqShh6GMemNqFxTBuMA0GLzVgA0Qtj%2BNnZ0SrQHcjq%2BwRLym680dPv71EkgUV7d2teH6RavfJxoM0uuP78kQ7s0AzWQmSpy2yIMgmr1nEWdde74h2CyAUcvRBetw9Pu9yrxyLaLVATUdg7pbxsz3jMsy7AOvNzlvAfLmZ9jmd%2F23M%2Fv%2FdXKEcnsiYHMiTwaKGM4U2TxawgM8s9r8kvokWR7OF%2B63q5E3pIojkeoMOrIwMIGOqUB%2F%2FWKfza5v64zUB%2FztJI%2BqwmxXnGdcjTZzzcUtrc9SbqYebqHiTWbCTqgW8OwNqDOYPgzRpt%2F5YEnqfZ0VG9DWG6WKtiIBdZBLR8R%2BuDhIQOJfFCzc6%2B26KJWMqndM%2FXnh1nogeEFBaXiyVmrR8XDzLx816cbVHEGq3%2F3jCOLyGfECiim23%2FEq7iWfugMgMdpr8omNQ6AFB9v5JCV3GmgyUwVfiCf&X-Amz-Signature=2f3d23afd8872ed57c2f0c51b52b3d700543833a75b64954f68a07e31b0f0221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
