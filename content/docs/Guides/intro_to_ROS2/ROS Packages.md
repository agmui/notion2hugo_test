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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U35IDN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDDwACdVshWBedMb6krdy35Gkb6PyspdqNQTjcPIoXIAiEA6l1hl9FpxPFRJYIE3N6Wm0qS8r5Zfm9m%2BEiudGHO4qgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9JgD558kIKiMYICrcA5J8BArIazqt9S74LaK1OlYlhBn89HQhTLcUiG8FpPJHbxpCwlBgadxOwgbY5ZZEpNoQFiMvGPcDqVz1ykcf2796QcJudrIlcmu%2F6pV95Ex9pVSOQOgTOnLXspqYnLzdrXwZ68rOj9byS%2FCMXrcolD2LPV64WuhZ7g7lnmXvSjkVHnVSJ5ithd2N6Pdu0fx%2FKQqU6hIPKOHpOFa5BpazS0L%2BwOMl7JB5WHTdgszn5kLzxPXVTXd6AdaY2ZPOgRFqpBh5PO5TiJcsqs38kyD8ebSYvgFQwWRg%2BEUSriRbaO1eRYZT7qZ23igESHXi%2FHsr7AHE9C6qTnzR7rsNdLGiQTMcY6Ol%2FPpVIrnRWir5EOo%2F1J8C1hxR0IbiYt%2B2ysBtiy8NP93w2xza20Ct1RMEVCFaaX1uoic79ZeUYNBKHYRiL8%2F5vAC2Rnjliz3odq9UfPl5Du1tB3uZqW646%2FxLhxXeOqG7ZfGcZc1ImQJwTluPdwMQkoHMtF5tPC621z4lcUv%2Fd0lSlamV8OCNKhGQTgyq9EMEFtkIB%2FLGUSt611PMIq31cLWBMtmdd8Dl4FN7r4sy68j0XaznH0abYowb97u%2FgiE%2FX3Lhih9mmccz6jgBNzSsxpSqVTA8rJfhMJe5vL8GOqUBCGdErntSRLTEEjXeNpVf2lQLeOrE6fYu3goKvgbjkWWUv2Ydtlm4UIe%2B3ldE6UD%2BsrDPLl8wA2qXmsFbx8tc0sIJ4SR%2BSEwRD56A0upS1lFRvVEm%2FhZkieLrDPWNwQKAZWMCb8FkS4j9YxOwO6rVuIHTV3HOtUWX12u2jtz4hwcvSL5NRH%2FO8VFSPqfY%2FMXA2GEWMF58OOiol3OhCJoS%2B6a6CNnB&X-Amz-Signature=57a99b362c27bd7622d717deb55293174dac0b18eac67280bf138f772fe499f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U35IDN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDDwACdVshWBedMb6krdy35Gkb6PyspdqNQTjcPIoXIAiEA6l1hl9FpxPFRJYIE3N6Wm0qS8r5Zfm9m%2BEiudGHO4qgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9JgD558kIKiMYICrcA5J8BArIazqt9S74LaK1OlYlhBn89HQhTLcUiG8FpPJHbxpCwlBgadxOwgbY5ZZEpNoQFiMvGPcDqVz1ykcf2796QcJudrIlcmu%2F6pV95Ex9pVSOQOgTOnLXspqYnLzdrXwZ68rOj9byS%2FCMXrcolD2LPV64WuhZ7g7lnmXvSjkVHnVSJ5ithd2N6Pdu0fx%2FKQqU6hIPKOHpOFa5BpazS0L%2BwOMl7JB5WHTdgszn5kLzxPXVTXd6AdaY2ZPOgRFqpBh5PO5TiJcsqs38kyD8ebSYvgFQwWRg%2BEUSriRbaO1eRYZT7qZ23igESHXi%2FHsr7AHE9C6qTnzR7rsNdLGiQTMcY6Ol%2FPpVIrnRWir5EOo%2F1J8C1hxR0IbiYt%2B2ysBtiy8NP93w2xza20Ct1RMEVCFaaX1uoic79ZeUYNBKHYRiL8%2F5vAC2Rnjliz3odq9UfPl5Du1tB3uZqW646%2FxLhxXeOqG7ZfGcZc1ImQJwTluPdwMQkoHMtF5tPC621z4lcUv%2Fd0lSlamV8OCNKhGQTgyq9EMEFtkIB%2FLGUSt611PMIq31cLWBMtmdd8Dl4FN7r4sy68j0XaznH0abYowb97u%2FgiE%2FX3Lhih9mmccz6jgBNzSsxpSqVTA8rJfhMJe5vL8GOqUBCGdErntSRLTEEjXeNpVf2lQLeOrE6fYu3goKvgbjkWWUv2Ydtlm4UIe%2B3ldE6UD%2BsrDPLl8wA2qXmsFbx8tc0sIJ4SR%2BSEwRD56A0upS1lFRvVEm%2FhZkieLrDPWNwQKAZWMCb8FkS4j9YxOwO6rVuIHTV3HOtUWX12u2jtz4hwcvSL5NRH%2FO8VFSPqfY%2FMXA2GEWMF58OOiol3OhCJoS%2B6a6CNnB&X-Amz-Signature=5f8e9b8fe30e540eaf5788529d36df30f96d20f44a0afa2e2520b221dd38b609&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U35IDN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDDwACdVshWBedMb6krdy35Gkb6PyspdqNQTjcPIoXIAiEA6l1hl9FpxPFRJYIE3N6Wm0qS8r5Zfm9m%2BEiudGHO4qgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9JgD558kIKiMYICrcA5J8BArIazqt9S74LaK1OlYlhBn89HQhTLcUiG8FpPJHbxpCwlBgadxOwgbY5ZZEpNoQFiMvGPcDqVz1ykcf2796QcJudrIlcmu%2F6pV95Ex9pVSOQOgTOnLXspqYnLzdrXwZ68rOj9byS%2FCMXrcolD2LPV64WuhZ7g7lnmXvSjkVHnVSJ5ithd2N6Pdu0fx%2FKQqU6hIPKOHpOFa5BpazS0L%2BwOMl7JB5WHTdgszn5kLzxPXVTXd6AdaY2ZPOgRFqpBh5PO5TiJcsqs38kyD8ebSYvgFQwWRg%2BEUSriRbaO1eRYZT7qZ23igESHXi%2FHsr7AHE9C6qTnzR7rsNdLGiQTMcY6Ol%2FPpVIrnRWir5EOo%2F1J8C1hxR0IbiYt%2B2ysBtiy8NP93w2xza20Ct1RMEVCFaaX1uoic79ZeUYNBKHYRiL8%2F5vAC2Rnjliz3odq9UfPl5Du1tB3uZqW646%2FxLhxXeOqG7ZfGcZc1ImQJwTluPdwMQkoHMtF5tPC621z4lcUv%2Fd0lSlamV8OCNKhGQTgyq9EMEFtkIB%2FLGUSt611PMIq31cLWBMtmdd8Dl4FN7r4sy68j0XaznH0abYowb97u%2FgiE%2FX3Lhih9mmccz6jgBNzSsxpSqVTA8rJfhMJe5vL8GOqUBCGdErntSRLTEEjXeNpVf2lQLeOrE6fYu3goKvgbjkWWUv2Ydtlm4UIe%2B3ldE6UD%2BsrDPLl8wA2qXmsFbx8tc0sIJ4SR%2BSEwRD56A0upS1lFRvVEm%2FhZkieLrDPWNwQKAZWMCb8FkS4j9YxOwO6rVuIHTV3HOtUWX12u2jtz4hwcvSL5NRH%2FO8VFSPqfY%2FMXA2GEWMF58OOiol3OhCJoS%2B6a6CNnB&X-Amz-Signature=3b01886dd909b7f482299d773d709d690846f4bb411c724f7b8671bb931478ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U35IDN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDDwACdVshWBedMb6krdy35Gkb6PyspdqNQTjcPIoXIAiEA6l1hl9FpxPFRJYIE3N6Wm0qS8r5Zfm9m%2BEiudGHO4qgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9JgD558kIKiMYICrcA5J8BArIazqt9S74LaK1OlYlhBn89HQhTLcUiG8FpPJHbxpCwlBgadxOwgbY5ZZEpNoQFiMvGPcDqVz1ykcf2796QcJudrIlcmu%2F6pV95Ex9pVSOQOgTOnLXspqYnLzdrXwZ68rOj9byS%2FCMXrcolD2LPV64WuhZ7g7lnmXvSjkVHnVSJ5ithd2N6Pdu0fx%2FKQqU6hIPKOHpOFa5BpazS0L%2BwOMl7JB5WHTdgszn5kLzxPXVTXd6AdaY2ZPOgRFqpBh5PO5TiJcsqs38kyD8ebSYvgFQwWRg%2BEUSriRbaO1eRYZT7qZ23igESHXi%2FHsr7AHE9C6qTnzR7rsNdLGiQTMcY6Ol%2FPpVIrnRWir5EOo%2F1J8C1hxR0IbiYt%2B2ysBtiy8NP93w2xza20Ct1RMEVCFaaX1uoic79ZeUYNBKHYRiL8%2F5vAC2Rnjliz3odq9UfPl5Du1tB3uZqW646%2FxLhxXeOqG7ZfGcZc1ImQJwTluPdwMQkoHMtF5tPC621z4lcUv%2Fd0lSlamV8OCNKhGQTgyq9EMEFtkIB%2FLGUSt611PMIq31cLWBMtmdd8Dl4FN7r4sy68j0XaznH0abYowb97u%2FgiE%2FX3Lhih9mmccz6jgBNzSsxpSqVTA8rJfhMJe5vL8GOqUBCGdErntSRLTEEjXeNpVf2lQLeOrE6fYu3goKvgbjkWWUv2Ydtlm4UIe%2B3ldE6UD%2BsrDPLl8wA2qXmsFbx8tc0sIJ4SR%2BSEwRD56A0upS1lFRvVEm%2FhZkieLrDPWNwQKAZWMCb8FkS4j9YxOwO6rVuIHTV3HOtUWX12u2jtz4hwcvSL5NRH%2FO8VFSPqfY%2FMXA2GEWMF58OOiol3OhCJoS%2B6a6CNnB&X-Amz-Signature=d3c38ae919faf556fe4398062564fb1ff122fe704857668fdb740e9eabf9b7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U35IDN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDDwACdVshWBedMb6krdy35Gkb6PyspdqNQTjcPIoXIAiEA6l1hl9FpxPFRJYIE3N6Wm0qS8r5Zfm9m%2BEiudGHO4qgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9JgD558kIKiMYICrcA5J8BArIazqt9S74LaK1OlYlhBn89HQhTLcUiG8FpPJHbxpCwlBgadxOwgbY5ZZEpNoQFiMvGPcDqVz1ykcf2796QcJudrIlcmu%2F6pV95Ex9pVSOQOgTOnLXspqYnLzdrXwZ68rOj9byS%2FCMXrcolD2LPV64WuhZ7g7lnmXvSjkVHnVSJ5ithd2N6Pdu0fx%2FKQqU6hIPKOHpOFa5BpazS0L%2BwOMl7JB5WHTdgszn5kLzxPXVTXd6AdaY2ZPOgRFqpBh5PO5TiJcsqs38kyD8ebSYvgFQwWRg%2BEUSriRbaO1eRYZT7qZ23igESHXi%2FHsr7AHE9C6qTnzR7rsNdLGiQTMcY6Ol%2FPpVIrnRWir5EOo%2F1J8C1hxR0IbiYt%2B2ysBtiy8NP93w2xza20Ct1RMEVCFaaX1uoic79ZeUYNBKHYRiL8%2F5vAC2Rnjliz3odq9UfPl5Du1tB3uZqW646%2FxLhxXeOqG7ZfGcZc1ImQJwTluPdwMQkoHMtF5tPC621z4lcUv%2Fd0lSlamV8OCNKhGQTgyq9EMEFtkIB%2FLGUSt611PMIq31cLWBMtmdd8Dl4FN7r4sy68j0XaznH0abYowb97u%2FgiE%2FX3Lhih9mmccz6jgBNzSsxpSqVTA8rJfhMJe5vL8GOqUBCGdErntSRLTEEjXeNpVf2lQLeOrE6fYu3goKvgbjkWWUv2Ydtlm4UIe%2B3ldE6UD%2BsrDPLl8wA2qXmsFbx8tc0sIJ4SR%2BSEwRD56A0upS1lFRvVEm%2FhZkieLrDPWNwQKAZWMCb8FkS4j9YxOwO6rVuIHTV3HOtUWX12u2jtz4hwcvSL5NRH%2FO8VFSPqfY%2FMXA2GEWMF58OOiol3OhCJoS%2B6a6CNnB&X-Amz-Signature=5961681d4a3b798c606748dc97ef096debcc6bcac3158499bf4e5022609920cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U35IDN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDDwACdVshWBedMb6krdy35Gkb6PyspdqNQTjcPIoXIAiEA6l1hl9FpxPFRJYIE3N6Wm0qS8r5Zfm9m%2BEiudGHO4qgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9JgD558kIKiMYICrcA5J8BArIazqt9S74LaK1OlYlhBn89HQhTLcUiG8FpPJHbxpCwlBgadxOwgbY5ZZEpNoQFiMvGPcDqVz1ykcf2796QcJudrIlcmu%2F6pV95Ex9pVSOQOgTOnLXspqYnLzdrXwZ68rOj9byS%2FCMXrcolD2LPV64WuhZ7g7lnmXvSjkVHnVSJ5ithd2N6Pdu0fx%2FKQqU6hIPKOHpOFa5BpazS0L%2BwOMl7JB5WHTdgszn5kLzxPXVTXd6AdaY2ZPOgRFqpBh5PO5TiJcsqs38kyD8ebSYvgFQwWRg%2BEUSriRbaO1eRYZT7qZ23igESHXi%2FHsr7AHE9C6qTnzR7rsNdLGiQTMcY6Ol%2FPpVIrnRWir5EOo%2F1J8C1hxR0IbiYt%2B2ysBtiy8NP93w2xza20Ct1RMEVCFaaX1uoic79ZeUYNBKHYRiL8%2F5vAC2Rnjliz3odq9UfPl5Du1tB3uZqW646%2FxLhxXeOqG7ZfGcZc1ImQJwTluPdwMQkoHMtF5tPC621z4lcUv%2Fd0lSlamV8OCNKhGQTgyq9EMEFtkIB%2FLGUSt611PMIq31cLWBMtmdd8Dl4FN7r4sy68j0XaznH0abYowb97u%2FgiE%2FX3Lhih9mmccz6jgBNzSsxpSqVTA8rJfhMJe5vL8GOqUBCGdErntSRLTEEjXeNpVf2lQLeOrE6fYu3goKvgbjkWWUv2Ydtlm4UIe%2B3ldE6UD%2BsrDPLl8wA2qXmsFbx8tc0sIJ4SR%2BSEwRD56A0upS1lFRvVEm%2FhZkieLrDPWNwQKAZWMCb8FkS4j9YxOwO6rVuIHTV3HOtUWX12u2jtz4hwcvSL5NRH%2FO8VFSPqfY%2FMXA2GEWMF58OOiol3OhCJoS%2B6a6CNnB&X-Amz-Signature=84d5d148ae9d0270a9b7e3e3cd1cdb85d4619138adf5ca942bbc2e7ea48ea1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U35IDN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDDwACdVshWBedMb6krdy35Gkb6PyspdqNQTjcPIoXIAiEA6l1hl9FpxPFRJYIE3N6Wm0qS8r5Zfm9m%2BEiudGHO4qgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9JgD558kIKiMYICrcA5J8BArIazqt9S74LaK1OlYlhBn89HQhTLcUiG8FpPJHbxpCwlBgadxOwgbY5ZZEpNoQFiMvGPcDqVz1ykcf2796QcJudrIlcmu%2F6pV95Ex9pVSOQOgTOnLXspqYnLzdrXwZ68rOj9byS%2FCMXrcolD2LPV64WuhZ7g7lnmXvSjkVHnVSJ5ithd2N6Pdu0fx%2FKQqU6hIPKOHpOFa5BpazS0L%2BwOMl7JB5WHTdgszn5kLzxPXVTXd6AdaY2ZPOgRFqpBh5PO5TiJcsqs38kyD8ebSYvgFQwWRg%2BEUSriRbaO1eRYZT7qZ23igESHXi%2FHsr7AHE9C6qTnzR7rsNdLGiQTMcY6Ol%2FPpVIrnRWir5EOo%2F1J8C1hxR0IbiYt%2B2ysBtiy8NP93w2xza20Ct1RMEVCFaaX1uoic79ZeUYNBKHYRiL8%2F5vAC2Rnjliz3odq9UfPl5Du1tB3uZqW646%2FxLhxXeOqG7ZfGcZc1ImQJwTluPdwMQkoHMtF5tPC621z4lcUv%2Fd0lSlamV8OCNKhGQTgyq9EMEFtkIB%2FLGUSt611PMIq31cLWBMtmdd8Dl4FN7r4sy68j0XaznH0abYowb97u%2FgiE%2FX3Lhih9mmccz6jgBNzSsxpSqVTA8rJfhMJe5vL8GOqUBCGdErntSRLTEEjXeNpVf2lQLeOrE6fYu3goKvgbjkWWUv2Ydtlm4UIe%2B3ldE6UD%2BsrDPLl8wA2qXmsFbx8tc0sIJ4SR%2BSEwRD56A0upS1lFRvVEm%2FhZkieLrDPWNwQKAZWMCb8FkS4j9YxOwO6rVuIHTV3HOtUWX12u2jtz4hwcvSL5NRH%2FO8VFSPqfY%2FMXA2GEWMF58OOiol3OhCJoS%2B6a6CNnB&X-Amz-Signature=564b44f5bced3d3dbb0a3567b3480a44d695eb7561c13d4152eb44258f6752a5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
