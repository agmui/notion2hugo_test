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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXA5FHQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBtBIOtslfviw4La6l2Bi0dAoREDjwXa2H%2FbpQF%2BKpNQIhAPHGIEIQ9W%2BrUwFVaIqxr1sfbajYWwMVK8Sh0igcgQMJKv8DCCkQABoMNjM3NDIzMTgzODA1IgxkOJESyDmOIM17xw0q3APz35ciBoB408c6IuXB1HBpQyqczZo2tX0iscnnSce%2F9BasJnmpDF0HqNfIsxxN6iC4ZvpOaJZqU8UIqrL%2BcJDMCnA6o6CT3w8LbXHyZ7kk7OjJvvpeMcYr7GiQw6AJ5umMdr%2FlSLBzUtjnpFGxXG9ogv0j6KchA5%2BGug4O058C0lJnudaOFVY0bf0f1rLvgsefG4GR1w%2Bs3OuXM%2BvM%2BLQKBKnS4muMpCjFk%2B%2BCrpvHBFwA63WdOUjTMIpHkDYogxEYZYYgvAKtox%2B%2Bo1Mo3%2FRiLm5DIIhGKAGnGy5G1NU%2FNkaajC9%2FAHdyQgt7z7kjDHTdXYI1fni%2BcW0XbbKB1pSDKB4U59esPG9mMABdBvHTofAnYddOiO3mdM6wtJmJA7st2XlRO4z1NTgPoJEpYx9u0uA5ITY%2Fk2npOjP%2Bb2jRhdplcgGVrfmrlEIDAfMggCUWCIMNftYNAfRnfGCjW4UMyW8MaQnpcRDYn8IaaTLQLK1cxrvbiFljmqPPdr%2BfPjisclWiEC6kBbzgQMMvvZtNkaokTIPAWkjuPDwJfA96WgZTJhd%2BQkUsYwfJVXBIti0dtLRCQCko%2FRF9ye%2FrAgEjo%2FKgvNmR2lxu44YhnnbsWm0UjAWtMQIcFT8MTTCm646%2FBjqkAakV4ndtovqf%2B%2BXTbD9w1VZnBHy5Flx1tsTKoVXBaO8ounAL6vWw7Mk4Z0hTz5ed5Gk%2BTXa1FIwWxQV1CPWCx%2FIyOGiCyEhtOAOLnahDMjMJ06ECk3mDMpmdeXzkfZGlRBJ0psWbGFTThRtu472Y%2B4Dnmomfb1Lz4nIc5gg4M2uy7E7%2BG43jhhpRRN%2BCLW94wULqJQHQNvPNr7PrFx%2FECBV6PTKd&X-Amz-Signature=29f6c680268d4cb3b2a95743b1483657a70db13fe548f1f1b0385400ea16b23f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXA5FHQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBtBIOtslfviw4La6l2Bi0dAoREDjwXa2H%2FbpQF%2BKpNQIhAPHGIEIQ9W%2BrUwFVaIqxr1sfbajYWwMVK8Sh0igcgQMJKv8DCCkQABoMNjM3NDIzMTgzODA1IgxkOJESyDmOIM17xw0q3APz35ciBoB408c6IuXB1HBpQyqczZo2tX0iscnnSce%2F9BasJnmpDF0HqNfIsxxN6iC4ZvpOaJZqU8UIqrL%2BcJDMCnA6o6CT3w8LbXHyZ7kk7OjJvvpeMcYr7GiQw6AJ5umMdr%2FlSLBzUtjnpFGxXG9ogv0j6KchA5%2BGug4O058C0lJnudaOFVY0bf0f1rLvgsefG4GR1w%2Bs3OuXM%2BvM%2BLQKBKnS4muMpCjFk%2B%2BCrpvHBFwA63WdOUjTMIpHkDYogxEYZYYgvAKtox%2B%2Bo1Mo3%2FRiLm5DIIhGKAGnGy5G1NU%2FNkaajC9%2FAHdyQgt7z7kjDHTdXYI1fni%2BcW0XbbKB1pSDKB4U59esPG9mMABdBvHTofAnYddOiO3mdM6wtJmJA7st2XlRO4z1NTgPoJEpYx9u0uA5ITY%2Fk2npOjP%2Bb2jRhdplcgGVrfmrlEIDAfMggCUWCIMNftYNAfRnfGCjW4UMyW8MaQnpcRDYn8IaaTLQLK1cxrvbiFljmqPPdr%2BfPjisclWiEC6kBbzgQMMvvZtNkaokTIPAWkjuPDwJfA96WgZTJhd%2BQkUsYwfJVXBIti0dtLRCQCko%2FRF9ye%2FrAgEjo%2FKgvNmR2lxu44YhnnbsWm0UjAWtMQIcFT8MTTCm646%2FBjqkAakV4ndtovqf%2B%2BXTbD9w1VZnBHy5Flx1tsTKoVXBaO8ounAL6vWw7Mk4Z0hTz5ed5Gk%2BTXa1FIwWxQV1CPWCx%2FIyOGiCyEhtOAOLnahDMjMJ06ECk3mDMpmdeXzkfZGlRBJ0psWbGFTThRtu472Y%2B4Dnmomfb1Lz4nIc5gg4M2uy7E7%2BG43jhhpRRN%2BCLW94wULqJQHQNvPNr7PrFx%2FECBV6PTKd&X-Amz-Signature=14e694e6286fe903e4403efd740b547674e7c77332569e5dc4f425954ca19c78&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXA5FHQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBtBIOtslfviw4La6l2Bi0dAoREDjwXa2H%2FbpQF%2BKpNQIhAPHGIEIQ9W%2BrUwFVaIqxr1sfbajYWwMVK8Sh0igcgQMJKv8DCCkQABoMNjM3NDIzMTgzODA1IgxkOJESyDmOIM17xw0q3APz35ciBoB408c6IuXB1HBpQyqczZo2tX0iscnnSce%2F9BasJnmpDF0HqNfIsxxN6iC4ZvpOaJZqU8UIqrL%2BcJDMCnA6o6CT3w8LbXHyZ7kk7OjJvvpeMcYr7GiQw6AJ5umMdr%2FlSLBzUtjnpFGxXG9ogv0j6KchA5%2BGug4O058C0lJnudaOFVY0bf0f1rLvgsefG4GR1w%2Bs3OuXM%2BvM%2BLQKBKnS4muMpCjFk%2B%2BCrpvHBFwA63WdOUjTMIpHkDYogxEYZYYgvAKtox%2B%2Bo1Mo3%2FRiLm5DIIhGKAGnGy5G1NU%2FNkaajC9%2FAHdyQgt7z7kjDHTdXYI1fni%2BcW0XbbKB1pSDKB4U59esPG9mMABdBvHTofAnYddOiO3mdM6wtJmJA7st2XlRO4z1NTgPoJEpYx9u0uA5ITY%2Fk2npOjP%2Bb2jRhdplcgGVrfmrlEIDAfMggCUWCIMNftYNAfRnfGCjW4UMyW8MaQnpcRDYn8IaaTLQLK1cxrvbiFljmqPPdr%2BfPjisclWiEC6kBbzgQMMvvZtNkaokTIPAWkjuPDwJfA96WgZTJhd%2BQkUsYwfJVXBIti0dtLRCQCko%2FRF9ye%2FrAgEjo%2FKgvNmR2lxu44YhnnbsWm0UjAWtMQIcFT8MTTCm646%2FBjqkAakV4ndtovqf%2B%2BXTbD9w1VZnBHy5Flx1tsTKoVXBaO8ounAL6vWw7Mk4Z0hTz5ed5Gk%2BTXa1FIwWxQV1CPWCx%2FIyOGiCyEhtOAOLnahDMjMJ06ECk3mDMpmdeXzkfZGlRBJ0psWbGFTThRtu472Y%2B4Dnmomfb1Lz4nIc5gg4M2uy7E7%2BG43jhhpRRN%2BCLW94wULqJQHQNvPNr7PrFx%2FECBV6PTKd&X-Amz-Signature=e4adf9e7796304329f410f4b57d303a8045bf2ad56878918b8ccfc69e533cf3a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXA5FHQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBtBIOtslfviw4La6l2Bi0dAoREDjwXa2H%2FbpQF%2BKpNQIhAPHGIEIQ9W%2BrUwFVaIqxr1sfbajYWwMVK8Sh0igcgQMJKv8DCCkQABoMNjM3NDIzMTgzODA1IgxkOJESyDmOIM17xw0q3APz35ciBoB408c6IuXB1HBpQyqczZo2tX0iscnnSce%2F9BasJnmpDF0HqNfIsxxN6iC4ZvpOaJZqU8UIqrL%2BcJDMCnA6o6CT3w8LbXHyZ7kk7OjJvvpeMcYr7GiQw6AJ5umMdr%2FlSLBzUtjnpFGxXG9ogv0j6KchA5%2BGug4O058C0lJnudaOFVY0bf0f1rLvgsefG4GR1w%2Bs3OuXM%2BvM%2BLQKBKnS4muMpCjFk%2B%2BCrpvHBFwA63WdOUjTMIpHkDYogxEYZYYgvAKtox%2B%2Bo1Mo3%2FRiLm5DIIhGKAGnGy5G1NU%2FNkaajC9%2FAHdyQgt7z7kjDHTdXYI1fni%2BcW0XbbKB1pSDKB4U59esPG9mMABdBvHTofAnYddOiO3mdM6wtJmJA7st2XlRO4z1NTgPoJEpYx9u0uA5ITY%2Fk2npOjP%2Bb2jRhdplcgGVrfmrlEIDAfMggCUWCIMNftYNAfRnfGCjW4UMyW8MaQnpcRDYn8IaaTLQLK1cxrvbiFljmqPPdr%2BfPjisclWiEC6kBbzgQMMvvZtNkaokTIPAWkjuPDwJfA96WgZTJhd%2BQkUsYwfJVXBIti0dtLRCQCko%2FRF9ye%2FrAgEjo%2FKgvNmR2lxu44YhnnbsWm0UjAWtMQIcFT8MTTCm646%2FBjqkAakV4ndtovqf%2B%2BXTbD9w1VZnBHy5Flx1tsTKoVXBaO8ounAL6vWw7Mk4Z0hTz5ed5Gk%2BTXa1FIwWxQV1CPWCx%2FIyOGiCyEhtOAOLnahDMjMJ06ECk3mDMpmdeXzkfZGlRBJ0psWbGFTThRtu472Y%2B4Dnmomfb1Lz4nIc5gg4M2uy7E7%2BG43jhhpRRN%2BCLW94wULqJQHQNvPNr7PrFx%2FECBV6PTKd&X-Amz-Signature=a845a924024e270a3000b4db6867e0b8ab6970764e7aa7690d1cb9a1e7e7a40b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXA5FHQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBtBIOtslfviw4La6l2Bi0dAoREDjwXa2H%2FbpQF%2BKpNQIhAPHGIEIQ9W%2BrUwFVaIqxr1sfbajYWwMVK8Sh0igcgQMJKv8DCCkQABoMNjM3NDIzMTgzODA1IgxkOJESyDmOIM17xw0q3APz35ciBoB408c6IuXB1HBpQyqczZo2tX0iscnnSce%2F9BasJnmpDF0HqNfIsxxN6iC4ZvpOaJZqU8UIqrL%2BcJDMCnA6o6CT3w8LbXHyZ7kk7OjJvvpeMcYr7GiQw6AJ5umMdr%2FlSLBzUtjnpFGxXG9ogv0j6KchA5%2BGug4O058C0lJnudaOFVY0bf0f1rLvgsefG4GR1w%2Bs3OuXM%2BvM%2BLQKBKnS4muMpCjFk%2B%2BCrpvHBFwA63WdOUjTMIpHkDYogxEYZYYgvAKtox%2B%2Bo1Mo3%2FRiLm5DIIhGKAGnGy5G1NU%2FNkaajC9%2FAHdyQgt7z7kjDHTdXYI1fni%2BcW0XbbKB1pSDKB4U59esPG9mMABdBvHTofAnYddOiO3mdM6wtJmJA7st2XlRO4z1NTgPoJEpYx9u0uA5ITY%2Fk2npOjP%2Bb2jRhdplcgGVrfmrlEIDAfMggCUWCIMNftYNAfRnfGCjW4UMyW8MaQnpcRDYn8IaaTLQLK1cxrvbiFljmqPPdr%2BfPjisclWiEC6kBbzgQMMvvZtNkaokTIPAWkjuPDwJfA96WgZTJhd%2BQkUsYwfJVXBIti0dtLRCQCko%2FRF9ye%2FrAgEjo%2FKgvNmR2lxu44YhnnbsWm0UjAWtMQIcFT8MTTCm646%2FBjqkAakV4ndtovqf%2B%2BXTbD9w1VZnBHy5Flx1tsTKoVXBaO8ounAL6vWw7Mk4Z0hTz5ed5Gk%2BTXa1FIwWxQV1CPWCx%2FIyOGiCyEhtOAOLnahDMjMJ06ECk3mDMpmdeXzkfZGlRBJ0psWbGFTThRtu472Y%2B4Dnmomfb1Lz4nIc5gg4M2uy7E7%2BG43jhhpRRN%2BCLW94wULqJQHQNvPNr7PrFx%2FECBV6PTKd&X-Amz-Signature=1ed13a626bf9d37f0fb5cf562d80a09550c3866bb350145b8adde855ab434d24&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXA5FHQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBtBIOtslfviw4La6l2Bi0dAoREDjwXa2H%2FbpQF%2BKpNQIhAPHGIEIQ9W%2BrUwFVaIqxr1sfbajYWwMVK8Sh0igcgQMJKv8DCCkQABoMNjM3NDIzMTgzODA1IgxkOJESyDmOIM17xw0q3APz35ciBoB408c6IuXB1HBpQyqczZo2tX0iscnnSce%2F9BasJnmpDF0HqNfIsxxN6iC4ZvpOaJZqU8UIqrL%2BcJDMCnA6o6CT3w8LbXHyZ7kk7OjJvvpeMcYr7GiQw6AJ5umMdr%2FlSLBzUtjnpFGxXG9ogv0j6KchA5%2BGug4O058C0lJnudaOFVY0bf0f1rLvgsefG4GR1w%2Bs3OuXM%2BvM%2BLQKBKnS4muMpCjFk%2B%2BCrpvHBFwA63WdOUjTMIpHkDYogxEYZYYgvAKtox%2B%2Bo1Mo3%2FRiLm5DIIhGKAGnGy5G1NU%2FNkaajC9%2FAHdyQgt7z7kjDHTdXYI1fni%2BcW0XbbKB1pSDKB4U59esPG9mMABdBvHTofAnYddOiO3mdM6wtJmJA7st2XlRO4z1NTgPoJEpYx9u0uA5ITY%2Fk2npOjP%2Bb2jRhdplcgGVrfmrlEIDAfMggCUWCIMNftYNAfRnfGCjW4UMyW8MaQnpcRDYn8IaaTLQLK1cxrvbiFljmqPPdr%2BfPjisclWiEC6kBbzgQMMvvZtNkaokTIPAWkjuPDwJfA96WgZTJhd%2BQkUsYwfJVXBIti0dtLRCQCko%2FRF9ye%2FrAgEjo%2FKgvNmR2lxu44YhnnbsWm0UjAWtMQIcFT8MTTCm646%2FBjqkAakV4ndtovqf%2B%2BXTbD9w1VZnBHy5Flx1tsTKoVXBaO8ounAL6vWw7Mk4Z0hTz5ed5Gk%2BTXa1FIwWxQV1CPWCx%2FIyOGiCyEhtOAOLnahDMjMJ06ECk3mDMpmdeXzkfZGlRBJ0psWbGFTThRtu472Y%2B4Dnmomfb1Lz4nIc5gg4M2uy7E7%2BG43jhhpRRN%2BCLW94wULqJQHQNvPNr7PrFx%2FECBV6PTKd&X-Amz-Signature=0a5818be6e10d319731d6b4d73d97acc29b930939c39b95dcd3d1da6a1364286&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXA5FHQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBtBIOtslfviw4La6l2Bi0dAoREDjwXa2H%2FbpQF%2BKpNQIhAPHGIEIQ9W%2BrUwFVaIqxr1sfbajYWwMVK8Sh0igcgQMJKv8DCCkQABoMNjM3NDIzMTgzODA1IgxkOJESyDmOIM17xw0q3APz35ciBoB408c6IuXB1HBpQyqczZo2tX0iscnnSce%2F9BasJnmpDF0HqNfIsxxN6iC4ZvpOaJZqU8UIqrL%2BcJDMCnA6o6CT3w8LbXHyZ7kk7OjJvvpeMcYr7GiQw6AJ5umMdr%2FlSLBzUtjnpFGxXG9ogv0j6KchA5%2BGug4O058C0lJnudaOFVY0bf0f1rLvgsefG4GR1w%2Bs3OuXM%2BvM%2BLQKBKnS4muMpCjFk%2B%2BCrpvHBFwA63WdOUjTMIpHkDYogxEYZYYgvAKtox%2B%2Bo1Mo3%2FRiLm5DIIhGKAGnGy5G1NU%2FNkaajC9%2FAHdyQgt7z7kjDHTdXYI1fni%2BcW0XbbKB1pSDKB4U59esPG9mMABdBvHTofAnYddOiO3mdM6wtJmJA7st2XlRO4z1NTgPoJEpYx9u0uA5ITY%2Fk2npOjP%2Bb2jRhdplcgGVrfmrlEIDAfMggCUWCIMNftYNAfRnfGCjW4UMyW8MaQnpcRDYn8IaaTLQLK1cxrvbiFljmqPPdr%2BfPjisclWiEC6kBbzgQMMvvZtNkaokTIPAWkjuPDwJfA96WgZTJhd%2BQkUsYwfJVXBIti0dtLRCQCko%2FRF9ye%2FrAgEjo%2FKgvNmR2lxu44YhnnbsWm0UjAWtMQIcFT8MTTCm646%2FBjqkAakV4ndtovqf%2B%2BXTbD9w1VZnBHy5Flx1tsTKoVXBaO8ounAL6vWw7Mk4Z0hTz5ed5Gk%2BTXa1FIwWxQV1CPWCx%2FIyOGiCyEhtOAOLnahDMjMJ06ECk3mDMpmdeXzkfZGlRBJ0psWbGFTThRtu472Y%2B4Dnmomfb1Lz4nIc5gg4M2uy7E7%2BG43jhhpRRN%2BCLW94wULqJQHQNvPNr7PrFx%2FECBV6PTKd&X-Amz-Signature=310eb6d73ca4b6569fc9243e60fad635914c0cb1441f4f6df8aee69853b07e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
