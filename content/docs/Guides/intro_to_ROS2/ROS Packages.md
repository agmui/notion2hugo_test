---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEKDHTD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz8ovVnJZGi3dBngFr%2FGrtMQk1QBjTjZE%2FgGQdRoUSDAiAQyKmgmGgaRxPLr2KAQ7pEpQlrvI3QXv3tLfMdnenPLCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnQvzS7BU5bsyRhYCKtwDVJwwwWzRaso5cED3Ha4OBRCceZ8gFVIBY3r8VUVN8nc8rNROwnIp4lyJHrf6%2FN5CHEkEt8voVSXSZH4zK%2FVXgJoWftQlwonOtw3iQvavRRcfynT20e6H7dd5ynGf6ul3g2KKpEl8DP6yc5ZcXDw4jBoA3E%2BbVCt0OXSGlsNI3STzSjJtfn70mxn708F%2Be2mFQwA9LVUzYF4z%2FfyN5m%2Bfth1tc0tgA9XSNx8%2BCTJuAE9u%2FRJOB3p67NbIN%2F7wm4ZNkqv4IJfsZX3SDFdSXQy6JwtwL8vdijz73OHcfoBrrYmyJHIzAG%2FJMXajSfxFxU%2BBb3eHsvaMkRy2z1gzOWrSP5RmJgRiNFbCxqHb6X8eDvpVnypUVlEi9vyDLbDy11EqEDVofLh4VLcefSgq3ifFJQbsh0Q%2BEcgyQMa8kcQNdPMV0ZwtyArb6q%2BuSmaqpuhgpVgPqZ7yImUwyn%2B09k%2Bb1ZEZafIIZKlDLxxq985DH6TiSoxCwEnrNyDZMZX4U5g3CE0EfEP6jGtWZ8694lqMR5TnhTEgfclV%2BSab3jFXE%2Frs%2Ftz5vM3XQb1kWEDu8q%2FekY3VWDkTLxARIdX%2Fw247fIz9FLX9qVpWm5nWimkYqRmTpR1R3w%2BPnUiyOiIw24T3xAY6pgF66Bw%2F5PIqL9v5pdBNBpabU0jGnnnxZcpwK3sqEqFf7Sxjo9gSpcF%2BFc3hBajF0kKulOCcONWjn51AMfVDDWEEEoUA%2FyzR3zqijdlZs2FTofdIE72lY%2BtKCUhuc8%2FrhMQL4lhpf%2FHliHW%2B9gKUVQqkNUsJQp7A1uO5QmRN1Dc%2B4E6Xaxpy4G6SmLcA9aU8LCZ1%2F2L8SN6m8UwAwMQ8xaJu2bXptSg2&X-Amz-Signature=7dec4defab961c0058cd66ef245b0d2edbaa03ffb52f21b6269bdd2fda608cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEKDHTD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz8ovVnJZGi3dBngFr%2FGrtMQk1QBjTjZE%2FgGQdRoUSDAiAQyKmgmGgaRxPLr2KAQ7pEpQlrvI3QXv3tLfMdnenPLCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnQvzS7BU5bsyRhYCKtwDVJwwwWzRaso5cED3Ha4OBRCceZ8gFVIBY3r8VUVN8nc8rNROwnIp4lyJHrf6%2FN5CHEkEt8voVSXSZH4zK%2FVXgJoWftQlwonOtw3iQvavRRcfynT20e6H7dd5ynGf6ul3g2KKpEl8DP6yc5ZcXDw4jBoA3E%2BbVCt0OXSGlsNI3STzSjJtfn70mxn708F%2Be2mFQwA9LVUzYF4z%2FfyN5m%2Bfth1tc0tgA9XSNx8%2BCTJuAE9u%2FRJOB3p67NbIN%2F7wm4ZNkqv4IJfsZX3SDFdSXQy6JwtwL8vdijz73OHcfoBrrYmyJHIzAG%2FJMXajSfxFxU%2BBb3eHsvaMkRy2z1gzOWrSP5RmJgRiNFbCxqHb6X8eDvpVnypUVlEi9vyDLbDy11EqEDVofLh4VLcefSgq3ifFJQbsh0Q%2BEcgyQMa8kcQNdPMV0ZwtyArb6q%2BuSmaqpuhgpVgPqZ7yImUwyn%2B09k%2Bb1ZEZafIIZKlDLxxq985DH6TiSoxCwEnrNyDZMZX4U5g3CE0EfEP6jGtWZ8694lqMR5TnhTEgfclV%2BSab3jFXE%2Frs%2Ftz5vM3XQb1kWEDu8q%2FekY3VWDkTLxARIdX%2Fw247fIz9FLX9qVpWm5nWimkYqRmTpR1R3w%2BPnUiyOiIw24T3xAY6pgF66Bw%2F5PIqL9v5pdBNBpabU0jGnnnxZcpwK3sqEqFf7Sxjo9gSpcF%2BFc3hBajF0kKulOCcONWjn51AMfVDDWEEEoUA%2FyzR3zqijdlZs2FTofdIE72lY%2BtKCUhuc8%2FrhMQL4lhpf%2FHliHW%2B9gKUVQqkNUsJQp7A1uO5QmRN1Dc%2B4E6Xaxpy4G6SmLcA9aU8LCZ1%2F2L8SN6m8UwAwMQ8xaJu2bXptSg2&X-Amz-Signature=f31d985486447dfb4a1c2c144270567a53d2e880755121d5b3300dbb83f03956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEKDHTD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz8ovVnJZGi3dBngFr%2FGrtMQk1QBjTjZE%2FgGQdRoUSDAiAQyKmgmGgaRxPLr2KAQ7pEpQlrvI3QXv3tLfMdnenPLCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnQvzS7BU5bsyRhYCKtwDVJwwwWzRaso5cED3Ha4OBRCceZ8gFVIBY3r8VUVN8nc8rNROwnIp4lyJHrf6%2FN5CHEkEt8voVSXSZH4zK%2FVXgJoWftQlwonOtw3iQvavRRcfynT20e6H7dd5ynGf6ul3g2KKpEl8DP6yc5ZcXDw4jBoA3E%2BbVCt0OXSGlsNI3STzSjJtfn70mxn708F%2Be2mFQwA9LVUzYF4z%2FfyN5m%2Bfth1tc0tgA9XSNx8%2BCTJuAE9u%2FRJOB3p67NbIN%2F7wm4ZNkqv4IJfsZX3SDFdSXQy6JwtwL8vdijz73OHcfoBrrYmyJHIzAG%2FJMXajSfxFxU%2BBb3eHsvaMkRy2z1gzOWrSP5RmJgRiNFbCxqHb6X8eDvpVnypUVlEi9vyDLbDy11EqEDVofLh4VLcefSgq3ifFJQbsh0Q%2BEcgyQMa8kcQNdPMV0ZwtyArb6q%2BuSmaqpuhgpVgPqZ7yImUwyn%2B09k%2Bb1ZEZafIIZKlDLxxq985DH6TiSoxCwEnrNyDZMZX4U5g3CE0EfEP6jGtWZ8694lqMR5TnhTEgfclV%2BSab3jFXE%2Frs%2Ftz5vM3XQb1kWEDu8q%2FekY3VWDkTLxARIdX%2Fw247fIz9FLX9qVpWm5nWimkYqRmTpR1R3w%2BPnUiyOiIw24T3xAY6pgF66Bw%2F5PIqL9v5pdBNBpabU0jGnnnxZcpwK3sqEqFf7Sxjo9gSpcF%2BFc3hBajF0kKulOCcONWjn51AMfVDDWEEEoUA%2FyzR3zqijdlZs2FTofdIE72lY%2BtKCUhuc8%2FrhMQL4lhpf%2FHliHW%2B9gKUVQqkNUsJQp7A1uO5QmRN1Dc%2B4E6Xaxpy4G6SmLcA9aU8LCZ1%2F2L8SN6m8UwAwMQ8xaJu2bXptSg2&X-Amz-Signature=eb43af4dc2d4720ad243978499ce03e8cb69093d2387ff3396df46c9ed9599a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEKDHTD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz8ovVnJZGi3dBngFr%2FGrtMQk1QBjTjZE%2FgGQdRoUSDAiAQyKmgmGgaRxPLr2KAQ7pEpQlrvI3QXv3tLfMdnenPLCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnQvzS7BU5bsyRhYCKtwDVJwwwWzRaso5cED3Ha4OBRCceZ8gFVIBY3r8VUVN8nc8rNROwnIp4lyJHrf6%2FN5CHEkEt8voVSXSZH4zK%2FVXgJoWftQlwonOtw3iQvavRRcfynT20e6H7dd5ynGf6ul3g2KKpEl8DP6yc5ZcXDw4jBoA3E%2BbVCt0OXSGlsNI3STzSjJtfn70mxn708F%2Be2mFQwA9LVUzYF4z%2FfyN5m%2Bfth1tc0tgA9XSNx8%2BCTJuAE9u%2FRJOB3p67NbIN%2F7wm4ZNkqv4IJfsZX3SDFdSXQy6JwtwL8vdijz73OHcfoBrrYmyJHIzAG%2FJMXajSfxFxU%2BBb3eHsvaMkRy2z1gzOWrSP5RmJgRiNFbCxqHb6X8eDvpVnypUVlEi9vyDLbDy11EqEDVofLh4VLcefSgq3ifFJQbsh0Q%2BEcgyQMa8kcQNdPMV0ZwtyArb6q%2BuSmaqpuhgpVgPqZ7yImUwyn%2B09k%2Bb1ZEZafIIZKlDLxxq985DH6TiSoxCwEnrNyDZMZX4U5g3CE0EfEP6jGtWZ8694lqMR5TnhTEgfclV%2BSab3jFXE%2Frs%2Ftz5vM3XQb1kWEDu8q%2FekY3VWDkTLxARIdX%2Fw247fIz9FLX9qVpWm5nWimkYqRmTpR1R3w%2BPnUiyOiIw24T3xAY6pgF66Bw%2F5PIqL9v5pdBNBpabU0jGnnnxZcpwK3sqEqFf7Sxjo9gSpcF%2BFc3hBajF0kKulOCcONWjn51AMfVDDWEEEoUA%2FyzR3zqijdlZs2FTofdIE72lY%2BtKCUhuc8%2FrhMQL4lhpf%2FHliHW%2B9gKUVQqkNUsJQp7A1uO5QmRN1Dc%2B4E6Xaxpy4G6SmLcA9aU8LCZ1%2F2L8SN6m8UwAwMQ8xaJu2bXptSg2&X-Amz-Signature=fe5cc6f3a0dadb1c5b210d67bceba85fb0d156a0160301bd22676c2a6d77cb42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEKDHTD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz8ovVnJZGi3dBngFr%2FGrtMQk1QBjTjZE%2FgGQdRoUSDAiAQyKmgmGgaRxPLr2KAQ7pEpQlrvI3QXv3tLfMdnenPLCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnQvzS7BU5bsyRhYCKtwDVJwwwWzRaso5cED3Ha4OBRCceZ8gFVIBY3r8VUVN8nc8rNROwnIp4lyJHrf6%2FN5CHEkEt8voVSXSZH4zK%2FVXgJoWftQlwonOtw3iQvavRRcfynT20e6H7dd5ynGf6ul3g2KKpEl8DP6yc5ZcXDw4jBoA3E%2BbVCt0OXSGlsNI3STzSjJtfn70mxn708F%2Be2mFQwA9LVUzYF4z%2FfyN5m%2Bfth1tc0tgA9XSNx8%2BCTJuAE9u%2FRJOB3p67NbIN%2F7wm4ZNkqv4IJfsZX3SDFdSXQy6JwtwL8vdijz73OHcfoBrrYmyJHIzAG%2FJMXajSfxFxU%2BBb3eHsvaMkRy2z1gzOWrSP5RmJgRiNFbCxqHb6X8eDvpVnypUVlEi9vyDLbDy11EqEDVofLh4VLcefSgq3ifFJQbsh0Q%2BEcgyQMa8kcQNdPMV0ZwtyArb6q%2BuSmaqpuhgpVgPqZ7yImUwyn%2B09k%2Bb1ZEZafIIZKlDLxxq985DH6TiSoxCwEnrNyDZMZX4U5g3CE0EfEP6jGtWZ8694lqMR5TnhTEgfclV%2BSab3jFXE%2Frs%2Ftz5vM3XQb1kWEDu8q%2FekY3VWDkTLxARIdX%2Fw247fIz9FLX9qVpWm5nWimkYqRmTpR1R3w%2BPnUiyOiIw24T3xAY6pgF66Bw%2F5PIqL9v5pdBNBpabU0jGnnnxZcpwK3sqEqFf7Sxjo9gSpcF%2BFc3hBajF0kKulOCcONWjn51AMfVDDWEEEoUA%2FyzR3zqijdlZs2FTofdIE72lY%2BtKCUhuc8%2FrhMQL4lhpf%2FHliHW%2B9gKUVQqkNUsJQp7A1uO5QmRN1Dc%2B4E6Xaxpy4G6SmLcA9aU8LCZ1%2F2L8SN6m8UwAwMQ8xaJu2bXptSg2&X-Amz-Signature=6cfdb7d1b0a1198a51d590e65d46be9ffde9772f2759a3b155bc669ce4b98c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEKDHTD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz8ovVnJZGi3dBngFr%2FGrtMQk1QBjTjZE%2FgGQdRoUSDAiAQyKmgmGgaRxPLr2KAQ7pEpQlrvI3QXv3tLfMdnenPLCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnQvzS7BU5bsyRhYCKtwDVJwwwWzRaso5cED3Ha4OBRCceZ8gFVIBY3r8VUVN8nc8rNROwnIp4lyJHrf6%2FN5CHEkEt8voVSXSZH4zK%2FVXgJoWftQlwonOtw3iQvavRRcfynT20e6H7dd5ynGf6ul3g2KKpEl8DP6yc5ZcXDw4jBoA3E%2BbVCt0OXSGlsNI3STzSjJtfn70mxn708F%2Be2mFQwA9LVUzYF4z%2FfyN5m%2Bfth1tc0tgA9XSNx8%2BCTJuAE9u%2FRJOB3p67NbIN%2F7wm4ZNkqv4IJfsZX3SDFdSXQy6JwtwL8vdijz73OHcfoBrrYmyJHIzAG%2FJMXajSfxFxU%2BBb3eHsvaMkRy2z1gzOWrSP5RmJgRiNFbCxqHb6X8eDvpVnypUVlEi9vyDLbDy11EqEDVofLh4VLcefSgq3ifFJQbsh0Q%2BEcgyQMa8kcQNdPMV0ZwtyArb6q%2BuSmaqpuhgpVgPqZ7yImUwyn%2B09k%2Bb1ZEZafIIZKlDLxxq985DH6TiSoxCwEnrNyDZMZX4U5g3CE0EfEP6jGtWZ8694lqMR5TnhTEgfclV%2BSab3jFXE%2Frs%2Ftz5vM3XQb1kWEDu8q%2FekY3VWDkTLxARIdX%2Fw247fIz9FLX9qVpWm5nWimkYqRmTpR1R3w%2BPnUiyOiIw24T3xAY6pgF66Bw%2F5PIqL9v5pdBNBpabU0jGnnnxZcpwK3sqEqFf7Sxjo9gSpcF%2BFc3hBajF0kKulOCcONWjn51AMfVDDWEEEoUA%2FyzR3zqijdlZs2FTofdIE72lY%2BtKCUhuc8%2FrhMQL4lhpf%2FHliHW%2B9gKUVQqkNUsJQp7A1uO5QmRN1Dc%2B4E6Xaxpy4G6SmLcA9aU8LCZ1%2F2L8SN6m8UwAwMQ8xaJu2bXptSg2&X-Amz-Signature=ce3cbd9387ac672cc88e67572189707b3035d543c501dc822e98100ae2a72714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEKDHTD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz8ovVnJZGi3dBngFr%2FGrtMQk1QBjTjZE%2FgGQdRoUSDAiAQyKmgmGgaRxPLr2KAQ7pEpQlrvI3QXv3tLfMdnenPLCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnQvzS7BU5bsyRhYCKtwDVJwwwWzRaso5cED3Ha4OBRCceZ8gFVIBY3r8VUVN8nc8rNROwnIp4lyJHrf6%2FN5CHEkEt8voVSXSZH4zK%2FVXgJoWftQlwonOtw3iQvavRRcfynT20e6H7dd5ynGf6ul3g2KKpEl8DP6yc5ZcXDw4jBoA3E%2BbVCt0OXSGlsNI3STzSjJtfn70mxn708F%2Be2mFQwA9LVUzYF4z%2FfyN5m%2Bfth1tc0tgA9XSNx8%2BCTJuAE9u%2FRJOB3p67NbIN%2F7wm4ZNkqv4IJfsZX3SDFdSXQy6JwtwL8vdijz73OHcfoBrrYmyJHIzAG%2FJMXajSfxFxU%2BBb3eHsvaMkRy2z1gzOWrSP5RmJgRiNFbCxqHb6X8eDvpVnypUVlEi9vyDLbDy11EqEDVofLh4VLcefSgq3ifFJQbsh0Q%2BEcgyQMa8kcQNdPMV0ZwtyArb6q%2BuSmaqpuhgpVgPqZ7yImUwyn%2B09k%2Bb1ZEZafIIZKlDLxxq985DH6TiSoxCwEnrNyDZMZX4U5g3CE0EfEP6jGtWZ8694lqMR5TnhTEgfclV%2BSab3jFXE%2Frs%2Ftz5vM3XQb1kWEDu8q%2FekY3VWDkTLxARIdX%2Fw247fIz9FLX9qVpWm5nWimkYqRmTpR1R3w%2BPnUiyOiIw24T3xAY6pgF66Bw%2F5PIqL9v5pdBNBpabU0jGnnnxZcpwK3sqEqFf7Sxjo9gSpcF%2BFc3hBajF0kKulOCcONWjn51AMfVDDWEEEoUA%2FyzR3zqijdlZs2FTofdIE72lY%2BtKCUhuc8%2FrhMQL4lhpf%2FHliHW%2B9gKUVQqkNUsJQp7A1uO5QmRN1Dc%2B4E6Xaxpy4G6SmLcA9aU8LCZ1%2F2L8SN6m8UwAwMQ8xaJu2bXptSg2&X-Amz-Signature=0a2c0cd351094107131c393f7830450b3f61d8697a3abb8efb26913ea87040c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
