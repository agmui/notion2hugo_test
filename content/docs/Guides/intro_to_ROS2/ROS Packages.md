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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YMVVTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0M9QQPQS2fxMQRYYF9gsYYAmSEhIP6iNEIF5pwuqE%2BgIgInX%2FKktVPVLt4hjpeDCHqWS%2BBuYcqj1clXzsJ%2BFKVdcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGlyMORRhoQPafuxqCrcA5Ni2TbJ8VpClKGOrvmMdDvw4wVGB0VyG%2BaLdykafMOkX7TyqOgqJ6XwosfDRO7BtwVYAOVBgRNuIpvnKbwWrUl81hGPZBlL7SESkIcWXgiwExwL07XZv1iVE0SNOKyy7KM6%2FdemwsqdvU6FJ%2FWrM0nNeguLgOYKmYHp%2FSdA%2FUml1LQCPPiOFdY6YF%2F2dUBJEV9C2iWCKoa%2Fi%2B1mkk%2BB8wm1MZrmzlpdHzr89q5t7YBCchwRLnzUL3Hcm2mK33KUdyuTrTmWJ4kIwPUhCbruIY%2BQGXqWkVih4WqrgBjdC0gYon40BgVUBOj8N6%2BENjISz8DCERwbBdyi5QUM%2BA9B6Z1a6in1diLB5EA%2B%2FG6iEP2EwGQX%2B33iGyLgv%2FaMvXczEBW%2BCQ4zKJnU824fB7DztRVIsciFbbaOYB57gm2AuT6vsmdgh04NLiz2RCtb%2BdhzMYswRakKkDRP%2Bgp%2B%2BWj4cG63Bq%2FdYQ73mEa2GAPbJo9389WwtV3eieGRXNmLQDmrQOTiVBQ52rknw2mnX%2BozNQinM7EcbJo017gQ6INcIrwwsfWCT5K6nF0F%2BeLlmmLxfiJt3k4bsvVvt7QtrxdK%2B9YXDT4cvLsVLSx%2FRRXE9RqZSdabx5FaZQXSPqqlMMS9i8IGOqUBI6LOkNAXmNaz8YYh3UW3uMLuJJrD%2Bw9VZA%2BZB1IpYz2b0%2B3zpF4CJtGXl7QJsK3BPF%2BbCxSR85ZaGTAwYLNDPEPPLtGN7R8eAKAd8WluRvGA1MKAa4JjfgaG4Ux3oHTU%2BB%2BbafU%2FdmeefQnS5faj9dzo%2BRjszCSZPpvD3lIVEm%2BCzQXzvoInGFnMVMln7I8FBUNOPvcLHdCNE3T1brw5zh70OmIO&X-Amz-Signature=e15a42dab811b8cd73cdab3d8518054d3f91db4e4b83ef4f0911e94211abf393&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YMVVTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0M9QQPQS2fxMQRYYF9gsYYAmSEhIP6iNEIF5pwuqE%2BgIgInX%2FKktVPVLt4hjpeDCHqWS%2BBuYcqj1clXzsJ%2BFKVdcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGlyMORRhoQPafuxqCrcA5Ni2TbJ8VpClKGOrvmMdDvw4wVGB0VyG%2BaLdykafMOkX7TyqOgqJ6XwosfDRO7BtwVYAOVBgRNuIpvnKbwWrUl81hGPZBlL7SESkIcWXgiwExwL07XZv1iVE0SNOKyy7KM6%2FdemwsqdvU6FJ%2FWrM0nNeguLgOYKmYHp%2FSdA%2FUml1LQCPPiOFdY6YF%2F2dUBJEV9C2iWCKoa%2Fi%2B1mkk%2BB8wm1MZrmzlpdHzr89q5t7YBCchwRLnzUL3Hcm2mK33KUdyuTrTmWJ4kIwPUhCbruIY%2BQGXqWkVih4WqrgBjdC0gYon40BgVUBOj8N6%2BENjISz8DCERwbBdyi5QUM%2BA9B6Z1a6in1diLB5EA%2B%2FG6iEP2EwGQX%2B33iGyLgv%2FaMvXczEBW%2BCQ4zKJnU824fB7DztRVIsciFbbaOYB57gm2AuT6vsmdgh04NLiz2RCtb%2BdhzMYswRakKkDRP%2Bgp%2B%2BWj4cG63Bq%2FdYQ73mEa2GAPbJo9389WwtV3eieGRXNmLQDmrQOTiVBQ52rknw2mnX%2BozNQinM7EcbJo017gQ6INcIrwwsfWCT5K6nF0F%2BeLlmmLxfiJt3k4bsvVvt7QtrxdK%2B9YXDT4cvLsVLSx%2FRRXE9RqZSdabx5FaZQXSPqqlMMS9i8IGOqUBI6LOkNAXmNaz8YYh3UW3uMLuJJrD%2Bw9VZA%2BZB1IpYz2b0%2B3zpF4CJtGXl7QJsK3BPF%2BbCxSR85ZaGTAwYLNDPEPPLtGN7R8eAKAd8WluRvGA1MKAa4JjfgaG4Ux3oHTU%2BB%2BbafU%2FdmeefQnS5faj9dzo%2BRjszCSZPpvD3lIVEm%2BCzQXzvoInGFnMVMln7I8FBUNOPvcLHdCNE3T1brw5zh70OmIO&X-Amz-Signature=89e09ec701221eeda775421f3b488a0f0a5b5e539e337a98cefe07b09ed75cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YMVVTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0M9QQPQS2fxMQRYYF9gsYYAmSEhIP6iNEIF5pwuqE%2BgIgInX%2FKktVPVLt4hjpeDCHqWS%2BBuYcqj1clXzsJ%2BFKVdcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGlyMORRhoQPafuxqCrcA5Ni2TbJ8VpClKGOrvmMdDvw4wVGB0VyG%2BaLdykafMOkX7TyqOgqJ6XwosfDRO7BtwVYAOVBgRNuIpvnKbwWrUl81hGPZBlL7SESkIcWXgiwExwL07XZv1iVE0SNOKyy7KM6%2FdemwsqdvU6FJ%2FWrM0nNeguLgOYKmYHp%2FSdA%2FUml1LQCPPiOFdY6YF%2F2dUBJEV9C2iWCKoa%2Fi%2B1mkk%2BB8wm1MZrmzlpdHzr89q5t7YBCchwRLnzUL3Hcm2mK33KUdyuTrTmWJ4kIwPUhCbruIY%2BQGXqWkVih4WqrgBjdC0gYon40BgVUBOj8N6%2BENjISz8DCERwbBdyi5QUM%2BA9B6Z1a6in1diLB5EA%2B%2FG6iEP2EwGQX%2B33iGyLgv%2FaMvXczEBW%2BCQ4zKJnU824fB7DztRVIsciFbbaOYB57gm2AuT6vsmdgh04NLiz2RCtb%2BdhzMYswRakKkDRP%2Bgp%2B%2BWj4cG63Bq%2FdYQ73mEa2GAPbJo9389WwtV3eieGRXNmLQDmrQOTiVBQ52rknw2mnX%2BozNQinM7EcbJo017gQ6INcIrwwsfWCT5K6nF0F%2BeLlmmLxfiJt3k4bsvVvt7QtrxdK%2B9YXDT4cvLsVLSx%2FRRXE9RqZSdabx5FaZQXSPqqlMMS9i8IGOqUBI6LOkNAXmNaz8YYh3UW3uMLuJJrD%2Bw9VZA%2BZB1IpYz2b0%2B3zpF4CJtGXl7QJsK3BPF%2BbCxSR85ZaGTAwYLNDPEPPLtGN7R8eAKAd8WluRvGA1MKAa4JjfgaG4Ux3oHTU%2BB%2BbafU%2FdmeefQnS5faj9dzo%2BRjszCSZPpvD3lIVEm%2BCzQXzvoInGFnMVMln7I8FBUNOPvcLHdCNE3T1brw5zh70OmIO&X-Amz-Signature=693cc2c2b34d12036a7e38d40889b084036a7efd49e84111af61aba0b2b187a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YMVVTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0M9QQPQS2fxMQRYYF9gsYYAmSEhIP6iNEIF5pwuqE%2BgIgInX%2FKktVPVLt4hjpeDCHqWS%2BBuYcqj1clXzsJ%2BFKVdcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGlyMORRhoQPafuxqCrcA5Ni2TbJ8VpClKGOrvmMdDvw4wVGB0VyG%2BaLdykafMOkX7TyqOgqJ6XwosfDRO7BtwVYAOVBgRNuIpvnKbwWrUl81hGPZBlL7SESkIcWXgiwExwL07XZv1iVE0SNOKyy7KM6%2FdemwsqdvU6FJ%2FWrM0nNeguLgOYKmYHp%2FSdA%2FUml1LQCPPiOFdY6YF%2F2dUBJEV9C2iWCKoa%2Fi%2B1mkk%2BB8wm1MZrmzlpdHzr89q5t7YBCchwRLnzUL3Hcm2mK33KUdyuTrTmWJ4kIwPUhCbruIY%2BQGXqWkVih4WqrgBjdC0gYon40BgVUBOj8N6%2BENjISz8DCERwbBdyi5QUM%2BA9B6Z1a6in1diLB5EA%2B%2FG6iEP2EwGQX%2B33iGyLgv%2FaMvXczEBW%2BCQ4zKJnU824fB7DztRVIsciFbbaOYB57gm2AuT6vsmdgh04NLiz2RCtb%2BdhzMYswRakKkDRP%2Bgp%2B%2BWj4cG63Bq%2FdYQ73mEa2GAPbJo9389WwtV3eieGRXNmLQDmrQOTiVBQ52rknw2mnX%2BozNQinM7EcbJo017gQ6INcIrwwsfWCT5K6nF0F%2BeLlmmLxfiJt3k4bsvVvt7QtrxdK%2B9YXDT4cvLsVLSx%2FRRXE9RqZSdabx5FaZQXSPqqlMMS9i8IGOqUBI6LOkNAXmNaz8YYh3UW3uMLuJJrD%2Bw9VZA%2BZB1IpYz2b0%2B3zpF4CJtGXl7QJsK3BPF%2BbCxSR85ZaGTAwYLNDPEPPLtGN7R8eAKAd8WluRvGA1MKAa4JjfgaG4Ux3oHTU%2BB%2BbafU%2FdmeefQnS5faj9dzo%2BRjszCSZPpvD3lIVEm%2BCzQXzvoInGFnMVMln7I8FBUNOPvcLHdCNE3T1brw5zh70OmIO&X-Amz-Signature=687c092e40d79606d7ab9c6e1847f09da57fc000091c7dc0d5e574bb70a1a384&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YMVVTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0M9QQPQS2fxMQRYYF9gsYYAmSEhIP6iNEIF5pwuqE%2BgIgInX%2FKktVPVLt4hjpeDCHqWS%2BBuYcqj1clXzsJ%2BFKVdcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGlyMORRhoQPafuxqCrcA5Ni2TbJ8VpClKGOrvmMdDvw4wVGB0VyG%2BaLdykafMOkX7TyqOgqJ6XwosfDRO7BtwVYAOVBgRNuIpvnKbwWrUl81hGPZBlL7SESkIcWXgiwExwL07XZv1iVE0SNOKyy7KM6%2FdemwsqdvU6FJ%2FWrM0nNeguLgOYKmYHp%2FSdA%2FUml1LQCPPiOFdY6YF%2F2dUBJEV9C2iWCKoa%2Fi%2B1mkk%2BB8wm1MZrmzlpdHzr89q5t7YBCchwRLnzUL3Hcm2mK33KUdyuTrTmWJ4kIwPUhCbruIY%2BQGXqWkVih4WqrgBjdC0gYon40BgVUBOj8N6%2BENjISz8DCERwbBdyi5QUM%2BA9B6Z1a6in1diLB5EA%2B%2FG6iEP2EwGQX%2B33iGyLgv%2FaMvXczEBW%2BCQ4zKJnU824fB7DztRVIsciFbbaOYB57gm2AuT6vsmdgh04NLiz2RCtb%2BdhzMYswRakKkDRP%2Bgp%2B%2BWj4cG63Bq%2FdYQ73mEa2GAPbJo9389WwtV3eieGRXNmLQDmrQOTiVBQ52rknw2mnX%2BozNQinM7EcbJo017gQ6INcIrwwsfWCT5K6nF0F%2BeLlmmLxfiJt3k4bsvVvt7QtrxdK%2B9YXDT4cvLsVLSx%2FRRXE9RqZSdabx5FaZQXSPqqlMMS9i8IGOqUBI6LOkNAXmNaz8YYh3UW3uMLuJJrD%2Bw9VZA%2BZB1IpYz2b0%2B3zpF4CJtGXl7QJsK3BPF%2BbCxSR85ZaGTAwYLNDPEPPLtGN7R8eAKAd8WluRvGA1MKAa4JjfgaG4Ux3oHTU%2BB%2BbafU%2FdmeefQnS5faj9dzo%2BRjszCSZPpvD3lIVEm%2BCzQXzvoInGFnMVMln7I8FBUNOPvcLHdCNE3T1brw5zh70OmIO&X-Amz-Signature=10d6a4cfb5554454e8303280d3a58ed48ebae06a40a41ed7d7786a43940f0fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YMVVTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0M9QQPQS2fxMQRYYF9gsYYAmSEhIP6iNEIF5pwuqE%2BgIgInX%2FKktVPVLt4hjpeDCHqWS%2BBuYcqj1clXzsJ%2BFKVdcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGlyMORRhoQPafuxqCrcA5Ni2TbJ8VpClKGOrvmMdDvw4wVGB0VyG%2BaLdykafMOkX7TyqOgqJ6XwosfDRO7BtwVYAOVBgRNuIpvnKbwWrUl81hGPZBlL7SESkIcWXgiwExwL07XZv1iVE0SNOKyy7KM6%2FdemwsqdvU6FJ%2FWrM0nNeguLgOYKmYHp%2FSdA%2FUml1LQCPPiOFdY6YF%2F2dUBJEV9C2iWCKoa%2Fi%2B1mkk%2BB8wm1MZrmzlpdHzr89q5t7YBCchwRLnzUL3Hcm2mK33KUdyuTrTmWJ4kIwPUhCbruIY%2BQGXqWkVih4WqrgBjdC0gYon40BgVUBOj8N6%2BENjISz8DCERwbBdyi5QUM%2BA9B6Z1a6in1diLB5EA%2B%2FG6iEP2EwGQX%2B33iGyLgv%2FaMvXczEBW%2BCQ4zKJnU824fB7DztRVIsciFbbaOYB57gm2AuT6vsmdgh04NLiz2RCtb%2BdhzMYswRakKkDRP%2Bgp%2B%2BWj4cG63Bq%2FdYQ73mEa2GAPbJo9389WwtV3eieGRXNmLQDmrQOTiVBQ52rknw2mnX%2BozNQinM7EcbJo017gQ6INcIrwwsfWCT5K6nF0F%2BeLlmmLxfiJt3k4bsvVvt7QtrxdK%2B9YXDT4cvLsVLSx%2FRRXE9RqZSdabx5FaZQXSPqqlMMS9i8IGOqUBI6LOkNAXmNaz8YYh3UW3uMLuJJrD%2Bw9VZA%2BZB1IpYz2b0%2B3zpF4CJtGXl7QJsK3BPF%2BbCxSR85ZaGTAwYLNDPEPPLtGN7R8eAKAd8WluRvGA1MKAa4JjfgaG4Ux3oHTU%2BB%2BbafU%2FdmeefQnS5faj9dzo%2BRjszCSZPpvD3lIVEm%2BCzQXzvoInGFnMVMln7I8FBUNOPvcLHdCNE3T1brw5zh70OmIO&X-Amz-Signature=d37413879cfd11bf9d8e885ab528984f6ca0ff3b1262f0951a96b06a10cc901b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YMVVTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0M9QQPQS2fxMQRYYF9gsYYAmSEhIP6iNEIF5pwuqE%2BgIgInX%2FKktVPVLt4hjpeDCHqWS%2BBuYcqj1clXzsJ%2BFKVdcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGlyMORRhoQPafuxqCrcA5Ni2TbJ8VpClKGOrvmMdDvw4wVGB0VyG%2BaLdykafMOkX7TyqOgqJ6XwosfDRO7BtwVYAOVBgRNuIpvnKbwWrUl81hGPZBlL7SESkIcWXgiwExwL07XZv1iVE0SNOKyy7KM6%2FdemwsqdvU6FJ%2FWrM0nNeguLgOYKmYHp%2FSdA%2FUml1LQCPPiOFdY6YF%2F2dUBJEV9C2iWCKoa%2Fi%2B1mkk%2BB8wm1MZrmzlpdHzr89q5t7YBCchwRLnzUL3Hcm2mK33KUdyuTrTmWJ4kIwPUhCbruIY%2BQGXqWkVih4WqrgBjdC0gYon40BgVUBOj8N6%2BENjISz8DCERwbBdyi5QUM%2BA9B6Z1a6in1diLB5EA%2B%2FG6iEP2EwGQX%2B33iGyLgv%2FaMvXczEBW%2BCQ4zKJnU824fB7DztRVIsciFbbaOYB57gm2AuT6vsmdgh04NLiz2RCtb%2BdhzMYswRakKkDRP%2Bgp%2B%2BWj4cG63Bq%2FdYQ73mEa2GAPbJo9389WwtV3eieGRXNmLQDmrQOTiVBQ52rknw2mnX%2BozNQinM7EcbJo017gQ6INcIrwwsfWCT5K6nF0F%2BeLlmmLxfiJt3k4bsvVvt7QtrxdK%2B9YXDT4cvLsVLSx%2FRRXE9RqZSdabx5FaZQXSPqqlMMS9i8IGOqUBI6LOkNAXmNaz8YYh3UW3uMLuJJrD%2Bw9VZA%2BZB1IpYz2b0%2B3zpF4CJtGXl7QJsK3BPF%2BbCxSR85ZaGTAwYLNDPEPPLtGN7R8eAKAd8WluRvGA1MKAa4JjfgaG4Ux3oHTU%2BB%2BbafU%2FdmeefQnS5faj9dzo%2BRjszCSZPpvD3lIVEm%2BCzQXzvoInGFnMVMln7I8FBUNOPvcLHdCNE3T1brw5zh70OmIO&X-Amz-Signature=6ef3f501423f008a2529e118695ef84108b5613cb5a3dfb51ba0fef65648df1b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
