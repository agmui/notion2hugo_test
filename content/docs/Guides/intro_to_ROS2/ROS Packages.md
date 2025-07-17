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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRZVSYL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFkEh3Q7UknoAMejvgE2FcdIBE7N5thAJ168%2FXZy5vpgAiAR1yLqJ4Dfu8bycuOWdO5ZW4XaVvWi1UFLHJUjJ%2B6vbir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMkE8Spo4rts%2FcN2Q%2BKtwD%2B%2F5trbzc49PumxcdA2vAwGuKH29vA4SivGQ3OgcUGQs32I9a%2FL7o83o%2FatXUaiPN08sm91tEMv3Sl9NgzozoyxTMDz3%2FPEaO1T7Cw2Q%2FDZYpkD5S6NpaYeUo7dfv9m4XLloO83oXqNQZExm5Jphpfmg%2BlDtbAybym0BDD8MmrZrXpqJvEmYL4vnTsz6xFXpWrcrmBWrB9VFZL%2FWn0zQKLM0%2BX%2FexQiaq13argePzyX9n%2BB1fusJPo%2FQeh1hIbtpMQX4exLsln99PQP40BlaULWewtvijA9W3sS1T8c6nKcH%2BMT%2FgZLRWLLfLEpLWQdPRhwKkUJ4dqDuQQSVLBOwzl6IjKGYu3O5jF8t4GEFKmd3Lm4Pc914WLSgF6b43zpJwPBwtwqGJ7AQf3Cuox%2FuDUWIzDakjbwbzO6sKVZ8Uv25zbKD%2Fux9yWr9SOvJoK%2FXP%2Fpnw48EsnPuEMtrc9dblHi%2BHoZT6Ft9VcLmgmX93cmu2vpbDb%2BXfnsgiUr8OWRs5D7YCgN8W4bBhM7UQTf72a2nVyWHhhu5tQUVNN3pgLzCw6y4S192eKg3Fiz%2BrQpBXYcqAdT79wqiLAxNFU82mx2maYAQ%2F5AUvOJD0Y2Gd720VRPUoxucarxXzZeMwgZXiwwY6pgHvmC%2BWhXiywotMA7dy1EBU%2BvwMCLNgUrXxqFMdQz9QwKnPgfCdn%2FS6iRfFquBqE2MAuXmqA%2BCLc0QDojfnQmwQ0%2BAVTiLkKHadSxMEVLRRLsNTApZ80D1tSS%2BBs1yvCIcRUdaS16zs10vpBvfyxEBq9LUssKQ6s5wV3uq3WvoyG9pYYPZz8WZNnTCas8MEt1HU20c8ezC0WcJ62MTR%2FlSDV3xWsyus&X-Amz-Signature=881232f5b94dd1c4f87a3e4044c38e5b1d00f405a570fedd6a6f2ad1321d1560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRZVSYL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFkEh3Q7UknoAMejvgE2FcdIBE7N5thAJ168%2FXZy5vpgAiAR1yLqJ4Dfu8bycuOWdO5ZW4XaVvWi1UFLHJUjJ%2B6vbir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMkE8Spo4rts%2FcN2Q%2BKtwD%2B%2F5trbzc49PumxcdA2vAwGuKH29vA4SivGQ3OgcUGQs32I9a%2FL7o83o%2FatXUaiPN08sm91tEMv3Sl9NgzozoyxTMDz3%2FPEaO1T7Cw2Q%2FDZYpkD5S6NpaYeUo7dfv9m4XLloO83oXqNQZExm5Jphpfmg%2BlDtbAybym0BDD8MmrZrXpqJvEmYL4vnTsz6xFXpWrcrmBWrB9VFZL%2FWn0zQKLM0%2BX%2FexQiaq13argePzyX9n%2BB1fusJPo%2FQeh1hIbtpMQX4exLsln99PQP40BlaULWewtvijA9W3sS1T8c6nKcH%2BMT%2FgZLRWLLfLEpLWQdPRhwKkUJ4dqDuQQSVLBOwzl6IjKGYu3O5jF8t4GEFKmd3Lm4Pc914WLSgF6b43zpJwPBwtwqGJ7AQf3Cuox%2FuDUWIzDakjbwbzO6sKVZ8Uv25zbKD%2Fux9yWr9SOvJoK%2FXP%2Fpnw48EsnPuEMtrc9dblHi%2BHoZT6Ft9VcLmgmX93cmu2vpbDb%2BXfnsgiUr8OWRs5D7YCgN8W4bBhM7UQTf72a2nVyWHhhu5tQUVNN3pgLzCw6y4S192eKg3Fiz%2BrQpBXYcqAdT79wqiLAxNFU82mx2maYAQ%2F5AUvOJD0Y2Gd720VRPUoxucarxXzZeMwgZXiwwY6pgHvmC%2BWhXiywotMA7dy1EBU%2BvwMCLNgUrXxqFMdQz9QwKnPgfCdn%2FS6iRfFquBqE2MAuXmqA%2BCLc0QDojfnQmwQ0%2BAVTiLkKHadSxMEVLRRLsNTApZ80D1tSS%2BBs1yvCIcRUdaS16zs10vpBvfyxEBq9LUssKQ6s5wV3uq3WvoyG9pYYPZz8WZNnTCas8MEt1HU20c8ezC0WcJ62MTR%2FlSDV3xWsyus&X-Amz-Signature=072afa0679ab3a2c1e9794413db3d8e535b07dad4a8d5e556c77ebbb6f1c1607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRZVSYL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFkEh3Q7UknoAMejvgE2FcdIBE7N5thAJ168%2FXZy5vpgAiAR1yLqJ4Dfu8bycuOWdO5ZW4XaVvWi1UFLHJUjJ%2B6vbir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMkE8Spo4rts%2FcN2Q%2BKtwD%2B%2F5trbzc49PumxcdA2vAwGuKH29vA4SivGQ3OgcUGQs32I9a%2FL7o83o%2FatXUaiPN08sm91tEMv3Sl9NgzozoyxTMDz3%2FPEaO1T7Cw2Q%2FDZYpkD5S6NpaYeUo7dfv9m4XLloO83oXqNQZExm5Jphpfmg%2BlDtbAybym0BDD8MmrZrXpqJvEmYL4vnTsz6xFXpWrcrmBWrB9VFZL%2FWn0zQKLM0%2BX%2FexQiaq13argePzyX9n%2BB1fusJPo%2FQeh1hIbtpMQX4exLsln99PQP40BlaULWewtvijA9W3sS1T8c6nKcH%2BMT%2FgZLRWLLfLEpLWQdPRhwKkUJ4dqDuQQSVLBOwzl6IjKGYu3O5jF8t4GEFKmd3Lm4Pc914WLSgF6b43zpJwPBwtwqGJ7AQf3Cuox%2FuDUWIzDakjbwbzO6sKVZ8Uv25zbKD%2Fux9yWr9SOvJoK%2FXP%2Fpnw48EsnPuEMtrc9dblHi%2BHoZT6Ft9VcLmgmX93cmu2vpbDb%2BXfnsgiUr8OWRs5D7YCgN8W4bBhM7UQTf72a2nVyWHhhu5tQUVNN3pgLzCw6y4S192eKg3Fiz%2BrQpBXYcqAdT79wqiLAxNFU82mx2maYAQ%2F5AUvOJD0Y2Gd720VRPUoxucarxXzZeMwgZXiwwY6pgHvmC%2BWhXiywotMA7dy1EBU%2BvwMCLNgUrXxqFMdQz9QwKnPgfCdn%2FS6iRfFquBqE2MAuXmqA%2BCLc0QDojfnQmwQ0%2BAVTiLkKHadSxMEVLRRLsNTApZ80D1tSS%2BBs1yvCIcRUdaS16zs10vpBvfyxEBq9LUssKQ6s5wV3uq3WvoyG9pYYPZz8WZNnTCas8MEt1HU20c8ezC0WcJ62MTR%2FlSDV3xWsyus&X-Amz-Signature=8847d7ffa26adb4feba31162ec90e2b8235f41949ca285cc85f79fcd11309f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRZVSYL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFkEh3Q7UknoAMejvgE2FcdIBE7N5thAJ168%2FXZy5vpgAiAR1yLqJ4Dfu8bycuOWdO5ZW4XaVvWi1UFLHJUjJ%2B6vbir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMkE8Spo4rts%2FcN2Q%2BKtwD%2B%2F5trbzc49PumxcdA2vAwGuKH29vA4SivGQ3OgcUGQs32I9a%2FL7o83o%2FatXUaiPN08sm91tEMv3Sl9NgzozoyxTMDz3%2FPEaO1T7Cw2Q%2FDZYpkD5S6NpaYeUo7dfv9m4XLloO83oXqNQZExm5Jphpfmg%2BlDtbAybym0BDD8MmrZrXpqJvEmYL4vnTsz6xFXpWrcrmBWrB9VFZL%2FWn0zQKLM0%2BX%2FexQiaq13argePzyX9n%2BB1fusJPo%2FQeh1hIbtpMQX4exLsln99PQP40BlaULWewtvijA9W3sS1T8c6nKcH%2BMT%2FgZLRWLLfLEpLWQdPRhwKkUJ4dqDuQQSVLBOwzl6IjKGYu3O5jF8t4GEFKmd3Lm4Pc914WLSgF6b43zpJwPBwtwqGJ7AQf3Cuox%2FuDUWIzDakjbwbzO6sKVZ8Uv25zbKD%2Fux9yWr9SOvJoK%2FXP%2Fpnw48EsnPuEMtrc9dblHi%2BHoZT6Ft9VcLmgmX93cmu2vpbDb%2BXfnsgiUr8OWRs5D7YCgN8W4bBhM7UQTf72a2nVyWHhhu5tQUVNN3pgLzCw6y4S192eKg3Fiz%2BrQpBXYcqAdT79wqiLAxNFU82mx2maYAQ%2F5AUvOJD0Y2Gd720VRPUoxucarxXzZeMwgZXiwwY6pgHvmC%2BWhXiywotMA7dy1EBU%2BvwMCLNgUrXxqFMdQz9QwKnPgfCdn%2FS6iRfFquBqE2MAuXmqA%2BCLc0QDojfnQmwQ0%2BAVTiLkKHadSxMEVLRRLsNTApZ80D1tSS%2BBs1yvCIcRUdaS16zs10vpBvfyxEBq9LUssKQ6s5wV3uq3WvoyG9pYYPZz8WZNnTCas8MEt1HU20c8ezC0WcJ62MTR%2FlSDV3xWsyus&X-Amz-Signature=42acbf2c6b5c9e509d2783a2eb37bf036dca0290d3ffb4fc7dd06ba424b6d38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRZVSYL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFkEh3Q7UknoAMejvgE2FcdIBE7N5thAJ168%2FXZy5vpgAiAR1yLqJ4Dfu8bycuOWdO5ZW4XaVvWi1UFLHJUjJ%2B6vbir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMkE8Spo4rts%2FcN2Q%2BKtwD%2B%2F5trbzc49PumxcdA2vAwGuKH29vA4SivGQ3OgcUGQs32I9a%2FL7o83o%2FatXUaiPN08sm91tEMv3Sl9NgzozoyxTMDz3%2FPEaO1T7Cw2Q%2FDZYpkD5S6NpaYeUo7dfv9m4XLloO83oXqNQZExm5Jphpfmg%2BlDtbAybym0BDD8MmrZrXpqJvEmYL4vnTsz6xFXpWrcrmBWrB9VFZL%2FWn0zQKLM0%2BX%2FexQiaq13argePzyX9n%2BB1fusJPo%2FQeh1hIbtpMQX4exLsln99PQP40BlaULWewtvijA9W3sS1T8c6nKcH%2BMT%2FgZLRWLLfLEpLWQdPRhwKkUJ4dqDuQQSVLBOwzl6IjKGYu3O5jF8t4GEFKmd3Lm4Pc914WLSgF6b43zpJwPBwtwqGJ7AQf3Cuox%2FuDUWIzDakjbwbzO6sKVZ8Uv25zbKD%2Fux9yWr9SOvJoK%2FXP%2Fpnw48EsnPuEMtrc9dblHi%2BHoZT6Ft9VcLmgmX93cmu2vpbDb%2BXfnsgiUr8OWRs5D7YCgN8W4bBhM7UQTf72a2nVyWHhhu5tQUVNN3pgLzCw6y4S192eKg3Fiz%2BrQpBXYcqAdT79wqiLAxNFU82mx2maYAQ%2F5AUvOJD0Y2Gd720VRPUoxucarxXzZeMwgZXiwwY6pgHvmC%2BWhXiywotMA7dy1EBU%2BvwMCLNgUrXxqFMdQz9QwKnPgfCdn%2FS6iRfFquBqE2MAuXmqA%2BCLc0QDojfnQmwQ0%2BAVTiLkKHadSxMEVLRRLsNTApZ80D1tSS%2BBs1yvCIcRUdaS16zs10vpBvfyxEBq9LUssKQ6s5wV3uq3WvoyG9pYYPZz8WZNnTCas8MEt1HU20c8ezC0WcJ62MTR%2FlSDV3xWsyus&X-Amz-Signature=f89fb4ae7efe1e035dd471fa51f980a63e2d629771bd17fe9f91ca2f70e596e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRZVSYL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFkEh3Q7UknoAMejvgE2FcdIBE7N5thAJ168%2FXZy5vpgAiAR1yLqJ4Dfu8bycuOWdO5ZW4XaVvWi1UFLHJUjJ%2B6vbir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMkE8Spo4rts%2FcN2Q%2BKtwD%2B%2F5trbzc49PumxcdA2vAwGuKH29vA4SivGQ3OgcUGQs32I9a%2FL7o83o%2FatXUaiPN08sm91tEMv3Sl9NgzozoyxTMDz3%2FPEaO1T7Cw2Q%2FDZYpkD5S6NpaYeUo7dfv9m4XLloO83oXqNQZExm5Jphpfmg%2BlDtbAybym0BDD8MmrZrXpqJvEmYL4vnTsz6xFXpWrcrmBWrB9VFZL%2FWn0zQKLM0%2BX%2FexQiaq13argePzyX9n%2BB1fusJPo%2FQeh1hIbtpMQX4exLsln99PQP40BlaULWewtvijA9W3sS1T8c6nKcH%2BMT%2FgZLRWLLfLEpLWQdPRhwKkUJ4dqDuQQSVLBOwzl6IjKGYu3O5jF8t4GEFKmd3Lm4Pc914WLSgF6b43zpJwPBwtwqGJ7AQf3Cuox%2FuDUWIzDakjbwbzO6sKVZ8Uv25zbKD%2Fux9yWr9SOvJoK%2FXP%2Fpnw48EsnPuEMtrc9dblHi%2BHoZT6Ft9VcLmgmX93cmu2vpbDb%2BXfnsgiUr8OWRs5D7YCgN8W4bBhM7UQTf72a2nVyWHhhu5tQUVNN3pgLzCw6y4S192eKg3Fiz%2BrQpBXYcqAdT79wqiLAxNFU82mx2maYAQ%2F5AUvOJD0Y2Gd720VRPUoxucarxXzZeMwgZXiwwY6pgHvmC%2BWhXiywotMA7dy1EBU%2BvwMCLNgUrXxqFMdQz9QwKnPgfCdn%2FS6iRfFquBqE2MAuXmqA%2BCLc0QDojfnQmwQ0%2BAVTiLkKHadSxMEVLRRLsNTApZ80D1tSS%2BBs1yvCIcRUdaS16zs10vpBvfyxEBq9LUssKQ6s5wV3uq3WvoyG9pYYPZz8WZNnTCas8MEt1HU20c8ezC0WcJ62MTR%2FlSDV3xWsyus&X-Amz-Signature=6f6cd0f3431b80408f48f4022058eaa21f560eaa93720707b935a6e14b17e3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRZVSYL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFkEh3Q7UknoAMejvgE2FcdIBE7N5thAJ168%2FXZy5vpgAiAR1yLqJ4Dfu8bycuOWdO5ZW4XaVvWi1UFLHJUjJ%2B6vbir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMkE8Spo4rts%2FcN2Q%2BKtwD%2B%2F5trbzc49PumxcdA2vAwGuKH29vA4SivGQ3OgcUGQs32I9a%2FL7o83o%2FatXUaiPN08sm91tEMv3Sl9NgzozoyxTMDz3%2FPEaO1T7Cw2Q%2FDZYpkD5S6NpaYeUo7dfv9m4XLloO83oXqNQZExm5Jphpfmg%2BlDtbAybym0BDD8MmrZrXpqJvEmYL4vnTsz6xFXpWrcrmBWrB9VFZL%2FWn0zQKLM0%2BX%2FexQiaq13argePzyX9n%2BB1fusJPo%2FQeh1hIbtpMQX4exLsln99PQP40BlaULWewtvijA9W3sS1T8c6nKcH%2BMT%2FgZLRWLLfLEpLWQdPRhwKkUJ4dqDuQQSVLBOwzl6IjKGYu3O5jF8t4GEFKmd3Lm4Pc914WLSgF6b43zpJwPBwtwqGJ7AQf3Cuox%2FuDUWIzDakjbwbzO6sKVZ8Uv25zbKD%2Fux9yWr9SOvJoK%2FXP%2Fpnw48EsnPuEMtrc9dblHi%2BHoZT6Ft9VcLmgmX93cmu2vpbDb%2BXfnsgiUr8OWRs5D7YCgN8W4bBhM7UQTf72a2nVyWHhhu5tQUVNN3pgLzCw6y4S192eKg3Fiz%2BrQpBXYcqAdT79wqiLAxNFU82mx2maYAQ%2F5AUvOJD0Y2Gd720VRPUoxucarxXzZeMwgZXiwwY6pgHvmC%2BWhXiywotMA7dy1EBU%2BvwMCLNgUrXxqFMdQz9QwKnPgfCdn%2FS6iRfFquBqE2MAuXmqA%2BCLc0QDojfnQmwQ0%2BAVTiLkKHadSxMEVLRRLsNTApZ80D1tSS%2BBs1yvCIcRUdaS16zs10vpBvfyxEBq9LUssKQ6s5wV3uq3WvoyG9pYYPZz8WZNnTCas8MEt1HU20c8ezC0WcJ62MTR%2FlSDV3xWsyus&X-Amz-Signature=d4a81f9fe25269d9e238cfd530ee09876794d167f4b2fa73d64e2636d6782d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
