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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELO5ZKB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz62%2BXD%2FoyRtEYy5voG8FEkgLuGcp4Plc%2BkzuOFbHszAiEAp%2B8%2F%2BpYApLYLOrAwqdRgA4om0kYN0spKdaQR7GJCIZAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBy%2BqiGBxA%2F8yfOozircA0uU7vCrm6gHr5DcrnSDmGFocQmVb33G6RnzVHaF2m40QdjkTzFGsanD6KwEOGN2UjT8RSxPXbpqY8e6bU7iUnpGe7H7AYXFYBDqERXoTjdWiPO3T0KHbTmslBZmSs1R5vnx3UdKeDzV8XwtxXp44DOz336MolUs2RtM%2BHiqV9A5pwQbifjnFM%2Bx9JTRzq2yodJ7HQAVRYYJLTdnP4XtJOVp6yvRKxd9R%2FKcgUs6vM8L1T0gjn8dTqFJpf7JfyGN5gJDabeGgjugQhs%2BOz%2BvQ7uqAsOgUoo7LcktRjysGGSAKWqNLhKj%2FW7QCXc5umGYy19gfL22Qdbf%2B6qTYrBd4z1sSutNuGvAx7rbwlU2fCwK5s8CTsT2qoN0hCaZZhyCrAyYCnLDZjmw%2FF%2Fr6YHMfP4tLhYCgYH%2F0D2OrinfKNRQk9eJndz4VDuLPdK3xl5to2Nuj5EEJ4dAu1%2FEyDOrky0aVczBXERLHTNRkZo4GwJAbmoj15noJPRON3fJTbKgMvGyoR95i1x0YWy%2F0jVK2Cn5qQ3atmPM61mq6bASiZ13hrXTnehE%2BDjrxw6UademrZParkNOmbBbl8dqLkG1YcoPbNQ5vYcaKHqfj30CCiwf1e1S5YUooaYS1DALMODlnMEGOqUBljjFV5MzqiEqFww5iWMtnLd%2Byvtwz8BdwXBVdbQQXr56OXRgjr9UAV60UXbDIxm4UN%2BiQUaxWBWHyI2qs7pOquZtJkcVlHc%2BSS17eRVOS9hGC%2BQTqjAV6oybyB%2Fn%2B3rRrU98W%2F06R2nzXlHJYI%2FoIKCgHGSk60OtmNCGxc1cT34Gpyns455BpD3QJK6o47s3GTAdyMpjuPyecs8qqOyM0MU8f22h&X-Amz-Signature=13d8458d07eb3335d6a8c03fd7520924d083c538ed3c3c6fa17685ca43fe87ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELO5ZKB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz62%2BXD%2FoyRtEYy5voG8FEkgLuGcp4Plc%2BkzuOFbHszAiEAp%2B8%2F%2BpYApLYLOrAwqdRgA4om0kYN0spKdaQR7GJCIZAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBy%2BqiGBxA%2F8yfOozircA0uU7vCrm6gHr5DcrnSDmGFocQmVb33G6RnzVHaF2m40QdjkTzFGsanD6KwEOGN2UjT8RSxPXbpqY8e6bU7iUnpGe7H7AYXFYBDqERXoTjdWiPO3T0KHbTmslBZmSs1R5vnx3UdKeDzV8XwtxXp44DOz336MolUs2RtM%2BHiqV9A5pwQbifjnFM%2Bx9JTRzq2yodJ7HQAVRYYJLTdnP4XtJOVp6yvRKxd9R%2FKcgUs6vM8L1T0gjn8dTqFJpf7JfyGN5gJDabeGgjugQhs%2BOz%2BvQ7uqAsOgUoo7LcktRjysGGSAKWqNLhKj%2FW7QCXc5umGYy19gfL22Qdbf%2B6qTYrBd4z1sSutNuGvAx7rbwlU2fCwK5s8CTsT2qoN0hCaZZhyCrAyYCnLDZjmw%2FF%2Fr6YHMfP4tLhYCgYH%2F0D2OrinfKNRQk9eJndz4VDuLPdK3xl5to2Nuj5EEJ4dAu1%2FEyDOrky0aVczBXERLHTNRkZo4GwJAbmoj15noJPRON3fJTbKgMvGyoR95i1x0YWy%2F0jVK2Cn5qQ3atmPM61mq6bASiZ13hrXTnehE%2BDjrxw6UademrZParkNOmbBbl8dqLkG1YcoPbNQ5vYcaKHqfj30CCiwf1e1S5YUooaYS1DALMODlnMEGOqUBljjFV5MzqiEqFww5iWMtnLd%2Byvtwz8BdwXBVdbQQXr56OXRgjr9UAV60UXbDIxm4UN%2BiQUaxWBWHyI2qs7pOquZtJkcVlHc%2BSS17eRVOS9hGC%2BQTqjAV6oybyB%2Fn%2B3rRrU98W%2F06R2nzXlHJYI%2FoIKCgHGSk60OtmNCGxc1cT34Gpyns455BpD3QJK6o47s3GTAdyMpjuPyecs8qqOyM0MU8f22h&X-Amz-Signature=c2677af645b798be3c716a47bcb31f57e536b83ccc17cfd20862f01b94d71692&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELO5ZKB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz62%2BXD%2FoyRtEYy5voG8FEkgLuGcp4Plc%2BkzuOFbHszAiEAp%2B8%2F%2BpYApLYLOrAwqdRgA4om0kYN0spKdaQR7GJCIZAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBy%2BqiGBxA%2F8yfOozircA0uU7vCrm6gHr5DcrnSDmGFocQmVb33G6RnzVHaF2m40QdjkTzFGsanD6KwEOGN2UjT8RSxPXbpqY8e6bU7iUnpGe7H7AYXFYBDqERXoTjdWiPO3T0KHbTmslBZmSs1R5vnx3UdKeDzV8XwtxXp44DOz336MolUs2RtM%2BHiqV9A5pwQbifjnFM%2Bx9JTRzq2yodJ7HQAVRYYJLTdnP4XtJOVp6yvRKxd9R%2FKcgUs6vM8L1T0gjn8dTqFJpf7JfyGN5gJDabeGgjugQhs%2BOz%2BvQ7uqAsOgUoo7LcktRjysGGSAKWqNLhKj%2FW7QCXc5umGYy19gfL22Qdbf%2B6qTYrBd4z1sSutNuGvAx7rbwlU2fCwK5s8CTsT2qoN0hCaZZhyCrAyYCnLDZjmw%2FF%2Fr6YHMfP4tLhYCgYH%2F0D2OrinfKNRQk9eJndz4VDuLPdK3xl5to2Nuj5EEJ4dAu1%2FEyDOrky0aVczBXERLHTNRkZo4GwJAbmoj15noJPRON3fJTbKgMvGyoR95i1x0YWy%2F0jVK2Cn5qQ3atmPM61mq6bASiZ13hrXTnehE%2BDjrxw6UademrZParkNOmbBbl8dqLkG1YcoPbNQ5vYcaKHqfj30CCiwf1e1S5YUooaYS1DALMODlnMEGOqUBljjFV5MzqiEqFww5iWMtnLd%2Byvtwz8BdwXBVdbQQXr56OXRgjr9UAV60UXbDIxm4UN%2BiQUaxWBWHyI2qs7pOquZtJkcVlHc%2BSS17eRVOS9hGC%2BQTqjAV6oybyB%2Fn%2B3rRrU98W%2F06R2nzXlHJYI%2FoIKCgHGSk60OtmNCGxc1cT34Gpyns455BpD3QJK6o47s3GTAdyMpjuPyecs8qqOyM0MU8f22h&X-Amz-Signature=9cafd6176c4df39b9ffc1766fc81ab7ebd3f47a3049c7c112491153916f4981b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELO5ZKB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz62%2BXD%2FoyRtEYy5voG8FEkgLuGcp4Plc%2BkzuOFbHszAiEAp%2B8%2F%2BpYApLYLOrAwqdRgA4om0kYN0spKdaQR7GJCIZAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBy%2BqiGBxA%2F8yfOozircA0uU7vCrm6gHr5DcrnSDmGFocQmVb33G6RnzVHaF2m40QdjkTzFGsanD6KwEOGN2UjT8RSxPXbpqY8e6bU7iUnpGe7H7AYXFYBDqERXoTjdWiPO3T0KHbTmslBZmSs1R5vnx3UdKeDzV8XwtxXp44DOz336MolUs2RtM%2BHiqV9A5pwQbifjnFM%2Bx9JTRzq2yodJ7HQAVRYYJLTdnP4XtJOVp6yvRKxd9R%2FKcgUs6vM8L1T0gjn8dTqFJpf7JfyGN5gJDabeGgjugQhs%2BOz%2BvQ7uqAsOgUoo7LcktRjysGGSAKWqNLhKj%2FW7QCXc5umGYy19gfL22Qdbf%2B6qTYrBd4z1sSutNuGvAx7rbwlU2fCwK5s8CTsT2qoN0hCaZZhyCrAyYCnLDZjmw%2FF%2Fr6YHMfP4tLhYCgYH%2F0D2OrinfKNRQk9eJndz4VDuLPdK3xl5to2Nuj5EEJ4dAu1%2FEyDOrky0aVczBXERLHTNRkZo4GwJAbmoj15noJPRON3fJTbKgMvGyoR95i1x0YWy%2F0jVK2Cn5qQ3atmPM61mq6bASiZ13hrXTnehE%2BDjrxw6UademrZParkNOmbBbl8dqLkG1YcoPbNQ5vYcaKHqfj30CCiwf1e1S5YUooaYS1DALMODlnMEGOqUBljjFV5MzqiEqFww5iWMtnLd%2Byvtwz8BdwXBVdbQQXr56OXRgjr9UAV60UXbDIxm4UN%2BiQUaxWBWHyI2qs7pOquZtJkcVlHc%2BSS17eRVOS9hGC%2BQTqjAV6oybyB%2Fn%2B3rRrU98W%2F06R2nzXlHJYI%2FoIKCgHGSk60OtmNCGxc1cT34Gpyns455BpD3QJK6o47s3GTAdyMpjuPyecs8qqOyM0MU8f22h&X-Amz-Signature=9ccdeda2b0f26f55de9e85db54b164024cf458ed45f201a7072d4562cdc69993&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELO5ZKB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz62%2BXD%2FoyRtEYy5voG8FEkgLuGcp4Plc%2BkzuOFbHszAiEAp%2B8%2F%2BpYApLYLOrAwqdRgA4om0kYN0spKdaQR7GJCIZAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBy%2BqiGBxA%2F8yfOozircA0uU7vCrm6gHr5DcrnSDmGFocQmVb33G6RnzVHaF2m40QdjkTzFGsanD6KwEOGN2UjT8RSxPXbpqY8e6bU7iUnpGe7H7AYXFYBDqERXoTjdWiPO3T0KHbTmslBZmSs1R5vnx3UdKeDzV8XwtxXp44DOz336MolUs2RtM%2BHiqV9A5pwQbifjnFM%2Bx9JTRzq2yodJ7HQAVRYYJLTdnP4XtJOVp6yvRKxd9R%2FKcgUs6vM8L1T0gjn8dTqFJpf7JfyGN5gJDabeGgjugQhs%2BOz%2BvQ7uqAsOgUoo7LcktRjysGGSAKWqNLhKj%2FW7QCXc5umGYy19gfL22Qdbf%2B6qTYrBd4z1sSutNuGvAx7rbwlU2fCwK5s8CTsT2qoN0hCaZZhyCrAyYCnLDZjmw%2FF%2Fr6YHMfP4tLhYCgYH%2F0D2OrinfKNRQk9eJndz4VDuLPdK3xl5to2Nuj5EEJ4dAu1%2FEyDOrky0aVczBXERLHTNRkZo4GwJAbmoj15noJPRON3fJTbKgMvGyoR95i1x0YWy%2F0jVK2Cn5qQ3atmPM61mq6bASiZ13hrXTnehE%2BDjrxw6UademrZParkNOmbBbl8dqLkG1YcoPbNQ5vYcaKHqfj30CCiwf1e1S5YUooaYS1DALMODlnMEGOqUBljjFV5MzqiEqFww5iWMtnLd%2Byvtwz8BdwXBVdbQQXr56OXRgjr9UAV60UXbDIxm4UN%2BiQUaxWBWHyI2qs7pOquZtJkcVlHc%2BSS17eRVOS9hGC%2BQTqjAV6oybyB%2Fn%2B3rRrU98W%2F06R2nzXlHJYI%2FoIKCgHGSk60OtmNCGxc1cT34Gpyns455BpD3QJK6o47s3GTAdyMpjuPyecs8qqOyM0MU8f22h&X-Amz-Signature=9563d68659f4da585bc514ebc16e4dc9b7fbbab351f402a8fa91dad3eb08d454&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELO5ZKB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz62%2BXD%2FoyRtEYy5voG8FEkgLuGcp4Plc%2BkzuOFbHszAiEAp%2B8%2F%2BpYApLYLOrAwqdRgA4om0kYN0spKdaQR7GJCIZAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBy%2BqiGBxA%2F8yfOozircA0uU7vCrm6gHr5DcrnSDmGFocQmVb33G6RnzVHaF2m40QdjkTzFGsanD6KwEOGN2UjT8RSxPXbpqY8e6bU7iUnpGe7H7AYXFYBDqERXoTjdWiPO3T0KHbTmslBZmSs1R5vnx3UdKeDzV8XwtxXp44DOz336MolUs2RtM%2BHiqV9A5pwQbifjnFM%2Bx9JTRzq2yodJ7HQAVRYYJLTdnP4XtJOVp6yvRKxd9R%2FKcgUs6vM8L1T0gjn8dTqFJpf7JfyGN5gJDabeGgjugQhs%2BOz%2BvQ7uqAsOgUoo7LcktRjysGGSAKWqNLhKj%2FW7QCXc5umGYy19gfL22Qdbf%2B6qTYrBd4z1sSutNuGvAx7rbwlU2fCwK5s8CTsT2qoN0hCaZZhyCrAyYCnLDZjmw%2FF%2Fr6YHMfP4tLhYCgYH%2F0D2OrinfKNRQk9eJndz4VDuLPdK3xl5to2Nuj5EEJ4dAu1%2FEyDOrky0aVczBXERLHTNRkZo4GwJAbmoj15noJPRON3fJTbKgMvGyoR95i1x0YWy%2F0jVK2Cn5qQ3atmPM61mq6bASiZ13hrXTnehE%2BDjrxw6UademrZParkNOmbBbl8dqLkG1YcoPbNQ5vYcaKHqfj30CCiwf1e1S5YUooaYS1DALMODlnMEGOqUBljjFV5MzqiEqFww5iWMtnLd%2Byvtwz8BdwXBVdbQQXr56OXRgjr9UAV60UXbDIxm4UN%2BiQUaxWBWHyI2qs7pOquZtJkcVlHc%2BSS17eRVOS9hGC%2BQTqjAV6oybyB%2Fn%2B3rRrU98W%2F06R2nzXlHJYI%2FoIKCgHGSk60OtmNCGxc1cT34Gpyns455BpD3QJK6o47s3GTAdyMpjuPyecs8qqOyM0MU8f22h&X-Amz-Signature=ad06bac9d0ff988ab17df32c4d74a415b99417dcc7725708bb40b5f8ece7fc9c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELO5ZKB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz62%2BXD%2FoyRtEYy5voG8FEkgLuGcp4Plc%2BkzuOFbHszAiEAp%2B8%2F%2BpYApLYLOrAwqdRgA4om0kYN0spKdaQR7GJCIZAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBy%2BqiGBxA%2F8yfOozircA0uU7vCrm6gHr5DcrnSDmGFocQmVb33G6RnzVHaF2m40QdjkTzFGsanD6KwEOGN2UjT8RSxPXbpqY8e6bU7iUnpGe7H7AYXFYBDqERXoTjdWiPO3T0KHbTmslBZmSs1R5vnx3UdKeDzV8XwtxXp44DOz336MolUs2RtM%2BHiqV9A5pwQbifjnFM%2Bx9JTRzq2yodJ7HQAVRYYJLTdnP4XtJOVp6yvRKxd9R%2FKcgUs6vM8L1T0gjn8dTqFJpf7JfyGN5gJDabeGgjugQhs%2BOz%2BvQ7uqAsOgUoo7LcktRjysGGSAKWqNLhKj%2FW7QCXc5umGYy19gfL22Qdbf%2B6qTYrBd4z1sSutNuGvAx7rbwlU2fCwK5s8CTsT2qoN0hCaZZhyCrAyYCnLDZjmw%2FF%2Fr6YHMfP4tLhYCgYH%2F0D2OrinfKNRQk9eJndz4VDuLPdK3xl5to2Nuj5EEJ4dAu1%2FEyDOrky0aVczBXERLHTNRkZo4GwJAbmoj15noJPRON3fJTbKgMvGyoR95i1x0YWy%2F0jVK2Cn5qQ3atmPM61mq6bASiZ13hrXTnehE%2BDjrxw6UademrZParkNOmbBbl8dqLkG1YcoPbNQ5vYcaKHqfj30CCiwf1e1S5YUooaYS1DALMODlnMEGOqUBljjFV5MzqiEqFww5iWMtnLd%2Byvtwz8BdwXBVdbQQXr56OXRgjr9UAV60UXbDIxm4UN%2BiQUaxWBWHyI2qs7pOquZtJkcVlHc%2BSS17eRVOS9hGC%2BQTqjAV6oybyB%2Fn%2B3rRrU98W%2F06R2nzXlHJYI%2FoIKCgHGSk60OtmNCGxc1cT34Gpyns455BpD3QJK6o47s3GTAdyMpjuPyecs8qqOyM0MU8f22h&X-Amz-Signature=8eba295aecd49eab5eb22ffb4b90ae9484e542639cc3c6e9d97b05d9f3af3225&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
