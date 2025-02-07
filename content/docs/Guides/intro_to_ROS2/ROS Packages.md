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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESTHK6Z%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC6mYDu06VexQYZXmNzjnUmH6ZqrB%2B8xq%2FLwOW9KZovyQIgWQwYx703ba3jrEyjWeXS4%2FKECnox1KmAhnDQUcKBcz0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPfgwv7LoGOD%2FFK9%2FyrcA03uwAJnVyr0JCbO8TpYAmXxHT2h6mo2Ut7CDVEadr3%2BtZCFmQYmI2e2NHL4ETF4ShKLRgCvt66vNqrixY8kFLvYNdLjE0ko2x%2FUtbnWF3p4cHCGNdrg4sg5lVw4o3G9j5tRO3mOBvGJ%2FYSqcaJVXQENK0TNlKyFaOA8tFHomJysjdLib61heMY9N%2FGynFAU2EhaiG3ayMMnbNCRicn%2Br4iFXOmim9xCoVdeu%2BwMZ8v8UNdsCrVs5%2Ft2KSz5Tc6zhRQo9GHHBJfhcpodFGxg5rI0sOwwdgygxunt49cyl7Tn4JymbsAuVy80r3a0rMa5w3Qo0fW79y5gMXYoAapA0%2Fz9NbNhBkIhnRUXG2%2B0TiSLS6e1Qx5vXuvdFslUFnXcAgFz4j2ra2Th37ienBiM6p%2Bnud2nur0tmQ5PojjAlemYDiJGmGp%2F7nfcrquk4EA%2BBvGxMCFDhZfc5bVGmHvJQDNsjOyqxuFpxchqF9LKH4K4GMUgrcn7b3IVujadAK3qbXQqG2u9Yqh1%2BsmQX6ZH%2B81wawRPt8R7vLdLAfwv6FX85je8y9ENJcJf6NbTKuQCqJyqEIFz8XnzesSEha8LuBa4XrAwWwcORLD62s%2BYdJtbPuZ5dwBtfroyLKGQMO38mL0GOqUBK9Q9Z3gX%2BPOal%2F6gFtG19WgDeXq30e9%2BvcL7hFfFyzWbXuJ5VnH8lKHVk4w0i%2Ft%2FXy6Bc5a%2F2a7yNmalBlz9%2BvT31jpmFPiPRdZpPSbIdkS6L61lB4wV2xMlZ904Ws1vIipmrRMYbhsWPfYQjQ4sJBFCJ7sm1SxBrzSQxTsHCAg30cPLVLUAK8%2BUhPtDcXHvu9ks8gWCxd42Bnw6WLkzofgNEkRo&X-Amz-Signature=f42d99377203d06b2907eadaad20e073a54d36bce903e28fe60a9b7bd3c995ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESTHK6Z%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC6mYDu06VexQYZXmNzjnUmH6ZqrB%2B8xq%2FLwOW9KZovyQIgWQwYx703ba3jrEyjWeXS4%2FKECnox1KmAhnDQUcKBcz0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPfgwv7LoGOD%2FFK9%2FyrcA03uwAJnVyr0JCbO8TpYAmXxHT2h6mo2Ut7CDVEadr3%2BtZCFmQYmI2e2NHL4ETF4ShKLRgCvt66vNqrixY8kFLvYNdLjE0ko2x%2FUtbnWF3p4cHCGNdrg4sg5lVw4o3G9j5tRO3mOBvGJ%2FYSqcaJVXQENK0TNlKyFaOA8tFHomJysjdLib61heMY9N%2FGynFAU2EhaiG3ayMMnbNCRicn%2Br4iFXOmim9xCoVdeu%2BwMZ8v8UNdsCrVs5%2Ft2KSz5Tc6zhRQo9GHHBJfhcpodFGxg5rI0sOwwdgygxunt49cyl7Tn4JymbsAuVy80r3a0rMa5w3Qo0fW79y5gMXYoAapA0%2Fz9NbNhBkIhnRUXG2%2B0TiSLS6e1Qx5vXuvdFslUFnXcAgFz4j2ra2Th37ienBiM6p%2Bnud2nur0tmQ5PojjAlemYDiJGmGp%2F7nfcrquk4EA%2BBvGxMCFDhZfc5bVGmHvJQDNsjOyqxuFpxchqF9LKH4K4GMUgrcn7b3IVujadAK3qbXQqG2u9Yqh1%2BsmQX6ZH%2B81wawRPt8R7vLdLAfwv6FX85je8y9ENJcJf6NbTKuQCqJyqEIFz8XnzesSEha8LuBa4XrAwWwcORLD62s%2BYdJtbPuZ5dwBtfroyLKGQMO38mL0GOqUBK9Q9Z3gX%2BPOal%2F6gFtG19WgDeXq30e9%2BvcL7hFfFyzWbXuJ5VnH8lKHVk4w0i%2Ft%2FXy6Bc5a%2F2a7yNmalBlz9%2BvT31jpmFPiPRdZpPSbIdkS6L61lB4wV2xMlZ904Ws1vIipmrRMYbhsWPfYQjQ4sJBFCJ7sm1SxBrzSQxTsHCAg30cPLVLUAK8%2BUhPtDcXHvu9ks8gWCxd42Bnw6WLkzofgNEkRo&X-Amz-Signature=1790efb80462770a227c6b3e25d968d104bcf1ed45941c99e0dfd742c625ae28&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESTHK6Z%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC6mYDu06VexQYZXmNzjnUmH6ZqrB%2B8xq%2FLwOW9KZovyQIgWQwYx703ba3jrEyjWeXS4%2FKECnox1KmAhnDQUcKBcz0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPfgwv7LoGOD%2FFK9%2FyrcA03uwAJnVyr0JCbO8TpYAmXxHT2h6mo2Ut7CDVEadr3%2BtZCFmQYmI2e2NHL4ETF4ShKLRgCvt66vNqrixY8kFLvYNdLjE0ko2x%2FUtbnWF3p4cHCGNdrg4sg5lVw4o3G9j5tRO3mOBvGJ%2FYSqcaJVXQENK0TNlKyFaOA8tFHomJysjdLib61heMY9N%2FGynFAU2EhaiG3ayMMnbNCRicn%2Br4iFXOmim9xCoVdeu%2BwMZ8v8UNdsCrVs5%2Ft2KSz5Tc6zhRQo9GHHBJfhcpodFGxg5rI0sOwwdgygxunt49cyl7Tn4JymbsAuVy80r3a0rMa5w3Qo0fW79y5gMXYoAapA0%2Fz9NbNhBkIhnRUXG2%2B0TiSLS6e1Qx5vXuvdFslUFnXcAgFz4j2ra2Th37ienBiM6p%2Bnud2nur0tmQ5PojjAlemYDiJGmGp%2F7nfcrquk4EA%2BBvGxMCFDhZfc5bVGmHvJQDNsjOyqxuFpxchqF9LKH4K4GMUgrcn7b3IVujadAK3qbXQqG2u9Yqh1%2BsmQX6ZH%2B81wawRPt8R7vLdLAfwv6FX85je8y9ENJcJf6NbTKuQCqJyqEIFz8XnzesSEha8LuBa4XrAwWwcORLD62s%2BYdJtbPuZ5dwBtfroyLKGQMO38mL0GOqUBK9Q9Z3gX%2BPOal%2F6gFtG19WgDeXq30e9%2BvcL7hFfFyzWbXuJ5VnH8lKHVk4w0i%2Ft%2FXy6Bc5a%2F2a7yNmalBlz9%2BvT31jpmFPiPRdZpPSbIdkS6L61lB4wV2xMlZ904Ws1vIipmrRMYbhsWPfYQjQ4sJBFCJ7sm1SxBrzSQxTsHCAg30cPLVLUAK8%2BUhPtDcXHvu9ks8gWCxd42Bnw6WLkzofgNEkRo&X-Amz-Signature=001f561d420db1fe038bcac715396388b4284c6114c531505bc0a1f322c309b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESTHK6Z%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC6mYDu06VexQYZXmNzjnUmH6ZqrB%2B8xq%2FLwOW9KZovyQIgWQwYx703ba3jrEyjWeXS4%2FKECnox1KmAhnDQUcKBcz0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPfgwv7LoGOD%2FFK9%2FyrcA03uwAJnVyr0JCbO8TpYAmXxHT2h6mo2Ut7CDVEadr3%2BtZCFmQYmI2e2NHL4ETF4ShKLRgCvt66vNqrixY8kFLvYNdLjE0ko2x%2FUtbnWF3p4cHCGNdrg4sg5lVw4o3G9j5tRO3mOBvGJ%2FYSqcaJVXQENK0TNlKyFaOA8tFHomJysjdLib61heMY9N%2FGynFAU2EhaiG3ayMMnbNCRicn%2Br4iFXOmim9xCoVdeu%2BwMZ8v8UNdsCrVs5%2Ft2KSz5Tc6zhRQo9GHHBJfhcpodFGxg5rI0sOwwdgygxunt49cyl7Tn4JymbsAuVy80r3a0rMa5w3Qo0fW79y5gMXYoAapA0%2Fz9NbNhBkIhnRUXG2%2B0TiSLS6e1Qx5vXuvdFslUFnXcAgFz4j2ra2Th37ienBiM6p%2Bnud2nur0tmQ5PojjAlemYDiJGmGp%2F7nfcrquk4EA%2BBvGxMCFDhZfc5bVGmHvJQDNsjOyqxuFpxchqF9LKH4K4GMUgrcn7b3IVujadAK3qbXQqG2u9Yqh1%2BsmQX6ZH%2B81wawRPt8R7vLdLAfwv6FX85je8y9ENJcJf6NbTKuQCqJyqEIFz8XnzesSEha8LuBa4XrAwWwcORLD62s%2BYdJtbPuZ5dwBtfroyLKGQMO38mL0GOqUBK9Q9Z3gX%2BPOal%2F6gFtG19WgDeXq30e9%2BvcL7hFfFyzWbXuJ5VnH8lKHVk4w0i%2Ft%2FXy6Bc5a%2F2a7yNmalBlz9%2BvT31jpmFPiPRdZpPSbIdkS6L61lB4wV2xMlZ904Ws1vIipmrRMYbhsWPfYQjQ4sJBFCJ7sm1SxBrzSQxTsHCAg30cPLVLUAK8%2BUhPtDcXHvu9ks8gWCxd42Bnw6WLkzofgNEkRo&X-Amz-Signature=b74974a8aacdc96b3c98124b76ba4fc424d78c8b0e7fbbc6b1535cbb7a25d233&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESTHK6Z%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC6mYDu06VexQYZXmNzjnUmH6ZqrB%2B8xq%2FLwOW9KZovyQIgWQwYx703ba3jrEyjWeXS4%2FKECnox1KmAhnDQUcKBcz0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPfgwv7LoGOD%2FFK9%2FyrcA03uwAJnVyr0JCbO8TpYAmXxHT2h6mo2Ut7CDVEadr3%2BtZCFmQYmI2e2NHL4ETF4ShKLRgCvt66vNqrixY8kFLvYNdLjE0ko2x%2FUtbnWF3p4cHCGNdrg4sg5lVw4o3G9j5tRO3mOBvGJ%2FYSqcaJVXQENK0TNlKyFaOA8tFHomJysjdLib61heMY9N%2FGynFAU2EhaiG3ayMMnbNCRicn%2Br4iFXOmim9xCoVdeu%2BwMZ8v8UNdsCrVs5%2Ft2KSz5Tc6zhRQo9GHHBJfhcpodFGxg5rI0sOwwdgygxunt49cyl7Tn4JymbsAuVy80r3a0rMa5w3Qo0fW79y5gMXYoAapA0%2Fz9NbNhBkIhnRUXG2%2B0TiSLS6e1Qx5vXuvdFslUFnXcAgFz4j2ra2Th37ienBiM6p%2Bnud2nur0tmQ5PojjAlemYDiJGmGp%2F7nfcrquk4EA%2BBvGxMCFDhZfc5bVGmHvJQDNsjOyqxuFpxchqF9LKH4K4GMUgrcn7b3IVujadAK3qbXQqG2u9Yqh1%2BsmQX6ZH%2B81wawRPt8R7vLdLAfwv6FX85je8y9ENJcJf6NbTKuQCqJyqEIFz8XnzesSEha8LuBa4XrAwWwcORLD62s%2BYdJtbPuZ5dwBtfroyLKGQMO38mL0GOqUBK9Q9Z3gX%2BPOal%2F6gFtG19WgDeXq30e9%2BvcL7hFfFyzWbXuJ5VnH8lKHVk4w0i%2Ft%2FXy6Bc5a%2F2a7yNmalBlz9%2BvT31jpmFPiPRdZpPSbIdkS6L61lB4wV2xMlZ904Ws1vIipmrRMYbhsWPfYQjQ4sJBFCJ7sm1SxBrzSQxTsHCAg30cPLVLUAK8%2BUhPtDcXHvu9ks8gWCxd42Bnw6WLkzofgNEkRo&X-Amz-Signature=3456cf3b3a6993bdf9c44663abda34927f0d664c48b32af24236507ae2555385&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESTHK6Z%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC6mYDu06VexQYZXmNzjnUmH6ZqrB%2B8xq%2FLwOW9KZovyQIgWQwYx703ba3jrEyjWeXS4%2FKECnox1KmAhnDQUcKBcz0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPfgwv7LoGOD%2FFK9%2FyrcA03uwAJnVyr0JCbO8TpYAmXxHT2h6mo2Ut7CDVEadr3%2BtZCFmQYmI2e2NHL4ETF4ShKLRgCvt66vNqrixY8kFLvYNdLjE0ko2x%2FUtbnWF3p4cHCGNdrg4sg5lVw4o3G9j5tRO3mOBvGJ%2FYSqcaJVXQENK0TNlKyFaOA8tFHomJysjdLib61heMY9N%2FGynFAU2EhaiG3ayMMnbNCRicn%2Br4iFXOmim9xCoVdeu%2BwMZ8v8UNdsCrVs5%2Ft2KSz5Tc6zhRQo9GHHBJfhcpodFGxg5rI0sOwwdgygxunt49cyl7Tn4JymbsAuVy80r3a0rMa5w3Qo0fW79y5gMXYoAapA0%2Fz9NbNhBkIhnRUXG2%2B0TiSLS6e1Qx5vXuvdFslUFnXcAgFz4j2ra2Th37ienBiM6p%2Bnud2nur0tmQ5PojjAlemYDiJGmGp%2F7nfcrquk4EA%2BBvGxMCFDhZfc5bVGmHvJQDNsjOyqxuFpxchqF9LKH4K4GMUgrcn7b3IVujadAK3qbXQqG2u9Yqh1%2BsmQX6ZH%2B81wawRPt8R7vLdLAfwv6FX85je8y9ENJcJf6NbTKuQCqJyqEIFz8XnzesSEha8LuBa4XrAwWwcORLD62s%2BYdJtbPuZ5dwBtfroyLKGQMO38mL0GOqUBK9Q9Z3gX%2BPOal%2F6gFtG19WgDeXq30e9%2BvcL7hFfFyzWbXuJ5VnH8lKHVk4w0i%2Ft%2FXy6Bc5a%2F2a7yNmalBlz9%2BvT31jpmFPiPRdZpPSbIdkS6L61lB4wV2xMlZ904Ws1vIipmrRMYbhsWPfYQjQ4sJBFCJ7sm1SxBrzSQxTsHCAg30cPLVLUAK8%2BUhPtDcXHvu9ks8gWCxd42Bnw6WLkzofgNEkRo&X-Amz-Signature=e601a9b52fdf4f8a2ce604298ecd91489075a7d2a4d4aef2be809b0651ec492f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESTHK6Z%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC6mYDu06VexQYZXmNzjnUmH6ZqrB%2B8xq%2FLwOW9KZovyQIgWQwYx703ba3jrEyjWeXS4%2FKECnox1KmAhnDQUcKBcz0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPfgwv7LoGOD%2FFK9%2FyrcA03uwAJnVyr0JCbO8TpYAmXxHT2h6mo2Ut7CDVEadr3%2BtZCFmQYmI2e2NHL4ETF4ShKLRgCvt66vNqrixY8kFLvYNdLjE0ko2x%2FUtbnWF3p4cHCGNdrg4sg5lVw4o3G9j5tRO3mOBvGJ%2FYSqcaJVXQENK0TNlKyFaOA8tFHomJysjdLib61heMY9N%2FGynFAU2EhaiG3ayMMnbNCRicn%2Br4iFXOmim9xCoVdeu%2BwMZ8v8UNdsCrVs5%2Ft2KSz5Tc6zhRQo9GHHBJfhcpodFGxg5rI0sOwwdgygxunt49cyl7Tn4JymbsAuVy80r3a0rMa5w3Qo0fW79y5gMXYoAapA0%2Fz9NbNhBkIhnRUXG2%2B0TiSLS6e1Qx5vXuvdFslUFnXcAgFz4j2ra2Th37ienBiM6p%2Bnud2nur0tmQ5PojjAlemYDiJGmGp%2F7nfcrquk4EA%2BBvGxMCFDhZfc5bVGmHvJQDNsjOyqxuFpxchqF9LKH4K4GMUgrcn7b3IVujadAK3qbXQqG2u9Yqh1%2BsmQX6ZH%2B81wawRPt8R7vLdLAfwv6FX85je8y9ENJcJf6NbTKuQCqJyqEIFz8XnzesSEha8LuBa4XrAwWwcORLD62s%2BYdJtbPuZ5dwBtfroyLKGQMO38mL0GOqUBK9Q9Z3gX%2BPOal%2F6gFtG19WgDeXq30e9%2BvcL7hFfFyzWbXuJ5VnH8lKHVk4w0i%2Ft%2FXy6Bc5a%2F2a7yNmalBlz9%2BvT31jpmFPiPRdZpPSbIdkS6L61lB4wV2xMlZ904Ws1vIipmrRMYbhsWPfYQjQ4sJBFCJ7sm1SxBrzSQxTsHCAg30cPLVLUAK8%2BUhPtDcXHvu9ks8gWCxd42Bnw6WLkzofgNEkRo&X-Amz-Signature=897b5802db88c5dd4c0df08c07449b717e9f35afdd5b1f05734ae6846848139c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
