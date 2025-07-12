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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI77XD26%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC13I5bJSsCpdITfYYHrYZ0%2BsDgk0oci%2FpXg2Gw%2BfParAiEAznEM9BOHpD5vLlffnhMfPaslXM6MtYMd6ovIpjzo2wkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGedanVUxDTq6HjVDSrcA%2BfjawxpYI5YQfHhs2SbsmO4pD1r8yZ8XwnKQHAJXRXzEvgFhSpC7uFBiW1oayyI7zumeJcDkl09iLjQdtpIANdEi10U%2B1gH79rWzpwY%2F8BJyn%2Fh4%2FtnQjWoiBsVAq6PcxpTRI0LETfxIzVn4jThKolCR1egRwCiHqvC1moeJukijtcgyudkBuTLK%2Fr2VsZV3buXJ4WWnSPH55%2B9ROZ5%2B2tc6qNvzIa%2B6Shfb5yJTo3TAfzzykM5aY5Bm3HsJA%2FYhneH1SGo%2BoafedhvNzZ7V6WxDNc6Z%2FO6Uhj%2Bxt94PmOb3vv90SuIhdKENtQASVq7S00AJikdF0M%2Be1Lzq72y3rAqO4HY8AwuxEvn%2BksvBSlvg0rTZTYYLdLQp7RJWMH2rWvP9j0ppj2EHsCgUFbH3a0pqRyiVPS7pAWBbKbQh%2FHp8fxDAiKucj92J7X5J4Zq3TlYmdmQ8DMpnAjPiZUjT1bC8LUEmtW359OuZb9Xv%2BDmOsKNmgccmYGNTShyUd0os4KBsSjerOvDqRcCdeDZ%2BbqBRoyTH4mUt3tDSqsfHPNkITv5qEhPxhUGlfRs29Ds69OVu2HPWT56dQK1Nu9w7PntuC9iCXjN%2BAHKcn8MiY4WaDTonzTQIpSy86jcMIutysMGOqUBuQS7BPpeQZXynCD7%2B0QVj8PYK%2Fbz6gZhRio7lUHDYXlHN1Q4QIHE4FkjxSvoCryidkaGVLW2RBBRRDeXdR2bLINw0D%2F%2FG1WuEjwf%2BWJjOYSSrFEr32mTWv6A7cXTNi1LYAUWEN2gY2sUCkGTL2lC6PZaJ02AhAiBOsmWyGryFQelJ84WdCwdWA02AUWHimVktq4wwbj11X7rbuyweSqbPw0Hke6o&X-Amz-Signature=43b43d10de5b39e64f196f429992b0e18994eebf958e323622afa82430953692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI77XD26%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC13I5bJSsCpdITfYYHrYZ0%2BsDgk0oci%2FpXg2Gw%2BfParAiEAznEM9BOHpD5vLlffnhMfPaslXM6MtYMd6ovIpjzo2wkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGedanVUxDTq6HjVDSrcA%2BfjawxpYI5YQfHhs2SbsmO4pD1r8yZ8XwnKQHAJXRXzEvgFhSpC7uFBiW1oayyI7zumeJcDkl09iLjQdtpIANdEi10U%2B1gH79rWzpwY%2F8BJyn%2Fh4%2FtnQjWoiBsVAq6PcxpTRI0LETfxIzVn4jThKolCR1egRwCiHqvC1moeJukijtcgyudkBuTLK%2Fr2VsZV3buXJ4WWnSPH55%2B9ROZ5%2B2tc6qNvzIa%2B6Shfb5yJTo3TAfzzykM5aY5Bm3HsJA%2FYhneH1SGo%2BoafedhvNzZ7V6WxDNc6Z%2FO6Uhj%2Bxt94PmOb3vv90SuIhdKENtQASVq7S00AJikdF0M%2Be1Lzq72y3rAqO4HY8AwuxEvn%2BksvBSlvg0rTZTYYLdLQp7RJWMH2rWvP9j0ppj2EHsCgUFbH3a0pqRyiVPS7pAWBbKbQh%2FHp8fxDAiKucj92J7X5J4Zq3TlYmdmQ8DMpnAjPiZUjT1bC8LUEmtW359OuZb9Xv%2BDmOsKNmgccmYGNTShyUd0os4KBsSjerOvDqRcCdeDZ%2BbqBRoyTH4mUt3tDSqsfHPNkITv5qEhPxhUGlfRs29Ds69OVu2HPWT56dQK1Nu9w7PntuC9iCXjN%2BAHKcn8MiY4WaDTonzTQIpSy86jcMIutysMGOqUBuQS7BPpeQZXynCD7%2B0QVj8PYK%2Fbz6gZhRio7lUHDYXlHN1Q4QIHE4FkjxSvoCryidkaGVLW2RBBRRDeXdR2bLINw0D%2F%2FG1WuEjwf%2BWJjOYSSrFEr32mTWv6A7cXTNi1LYAUWEN2gY2sUCkGTL2lC6PZaJ02AhAiBOsmWyGryFQelJ84WdCwdWA02AUWHimVktq4wwbj11X7rbuyweSqbPw0Hke6o&X-Amz-Signature=7be8f94fc6019315f4e32d209150ba5df9d6110ac42eb6dc06d88f27171811d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI77XD26%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC13I5bJSsCpdITfYYHrYZ0%2BsDgk0oci%2FpXg2Gw%2BfParAiEAznEM9BOHpD5vLlffnhMfPaslXM6MtYMd6ovIpjzo2wkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGedanVUxDTq6HjVDSrcA%2BfjawxpYI5YQfHhs2SbsmO4pD1r8yZ8XwnKQHAJXRXzEvgFhSpC7uFBiW1oayyI7zumeJcDkl09iLjQdtpIANdEi10U%2B1gH79rWzpwY%2F8BJyn%2Fh4%2FtnQjWoiBsVAq6PcxpTRI0LETfxIzVn4jThKolCR1egRwCiHqvC1moeJukijtcgyudkBuTLK%2Fr2VsZV3buXJ4WWnSPH55%2B9ROZ5%2B2tc6qNvzIa%2B6Shfb5yJTo3TAfzzykM5aY5Bm3HsJA%2FYhneH1SGo%2BoafedhvNzZ7V6WxDNc6Z%2FO6Uhj%2Bxt94PmOb3vv90SuIhdKENtQASVq7S00AJikdF0M%2Be1Lzq72y3rAqO4HY8AwuxEvn%2BksvBSlvg0rTZTYYLdLQp7RJWMH2rWvP9j0ppj2EHsCgUFbH3a0pqRyiVPS7pAWBbKbQh%2FHp8fxDAiKucj92J7X5J4Zq3TlYmdmQ8DMpnAjPiZUjT1bC8LUEmtW359OuZb9Xv%2BDmOsKNmgccmYGNTShyUd0os4KBsSjerOvDqRcCdeDZ%2BbqBRoyTH4mUt3tDSqsfHPNkITv5qEhPxhUGlfRs29Ds69OVu2HPWT56dQK1Nu9w7PntuC9iCXjN%2BAHKcn8MiY4WaDTonzTQIpSy86jcMIutysMGOqUBuQS7BPpeQZXynCD7%2B0QVj8PYK%2Fbz6gZhRio7lUHDYXlHN1Q4QIHE4FkjxSvoCryidkaGVLW2RBBRRDeXdR2bLINw0D%2F%2FG1WuEjwf%2BWJjOYSSrFEr32mTWv6A7cXTNi1LYAUWEN2gY2sUCkGTL2lC6PZaJ02AhAiBOsmWyGryFQelJ84WdCwdWA02AUWHimVktq4wwbj11X7rbuyweSqbPw0Hke6o&X-Amz-Signature=3b4494b2062100e6d3bb3f8a355caac13724695a9e8ff9a6d6dd2964c144516c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI77XD26%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC13I5bJSsCpdITfYYHrYZ0%2BsDgk0oci%2FpXg2Gw%2BfParAiEAznEM9BOHpD5vLlffnhMfPaslXM6MtYMd6ovIpjzo2wkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGedanVUxDTq6HjVDSrcA%2BfjawxpYI5YQfHhs2SbsmO4pD1r8yZ8XwnKQHAJXRXzEvgFhSpC7uFBiW1oayyI7zumeJcDkl09iLjQdtpIANdEi10U%2B1gH79rWzpwY%2F8BJyn%2Fh4%2FtnQjWoiBsVAq6PcxpTRI0LETfxIzVn4jThKolCR1egRwCiHqvC1moeJukijtcgyudkBuTLK%2Fr2VsZV3buXJ4WWnSPH55%2B9ROZ5%2B2tc6qNvzIa%2B6Shfb5yJTo3TAfzzykM5aY5Bm3HsJA%2FYhneH1SGo%2BoafedhvNzZ7V6WxDNc6Z%2FO6Uhj%2Bxt94PmOb3vv90SuIhdKENtQASVq7S00AJikdF0M%2Be1Lzq72y3rAqO4HY8AwuxEvn%2BksvBSlvg0rTZTYYLdLQp7RJWMH2rWvP9j0ppj2EHsCgUFbH3a0pqRyiVPS7pAWBbKbQh%2FHp8fxDAiKucj92J7X5J4Zq3TlYmdmQ8DMpnAjPiZUjT1bC8LUEmtW359OuZb9Xv%2BDmOsKNmgccmYGNTShyUd0os4KBsSjerOvDqRcCdeDZ%2BbqBRoyTH4mUt3tDSqsfHPNkITv5qEhPxhUGlfRs29Ds69OVu2HPWT56dQK1Nu9w7PntuC9iCXjN%2BAHKcn8MiY4WaDTonzTQIpSy86jcMIutysMGOqUBuQS7BPpeQZXynCD7%2B0QVj8PYK%2Fbz6gZhRio7lUHDYXlHN1Q4QIHE4FkjxSvoCryidkaGVLW2RBBRRDeXdR2bLINw0D%2F%2FG1WuEjwf%2BWJjOYSSrFEr32mTWv6A7cXTNi1LYAUWEN2gY2sUCkGTL2lC6PZaJ02AhAiBOsmWyGryFQelJ84WdCwdWA02AUWHimVktq4wwbj11X7rbuyweSqbPw0Hke6o&X-Amz-Signature=4f68d0ba1eaa5965c21e6b342a1cbd1b08a275fddc2518e65cb140ba1e594d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI77XD26%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC13I5bJSsCpdITfYYHrYZ0%2BsDgk0oci%2FpXg2Gw%2BfParAiEAznEM9BOHpD5vLlffnhMfPaslXM6MtYMd6ovIpjzo2wkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGedanVUxDTq6HjVDSrcA%2BfjawxpYI5YQfHhs2SbsmO4pD1r8yZ8XwnKQHAJXRXzEvgFhSpC7uFBiW1oayyI7zumeJcDkl09iLjQdtpIANdEi10U%2B1gH79rWzpwY%2F8BJyn%2Fh4%2FtnQjWoiBsVAq6PcxpTRI0LETfxIzVn4jThKolCR1egRwCiHqvC1moeJukijtcgyudkBuTLK%2Fr2VsZV3buXJ4WWnSPH55%2B9ROZ5%2B2tc6qNvzIa%2B6Shfb5yJTo3TAfzzykM5aY5Bm3HsJA%2FYhneH1SGo%2BoafedhvNzZ7V6WxDNc6Z%2FO6Uhj%2Bxt94PmOb3vv90SuIhdKENtQASVq7S00AJikdF0M%2Be1Lzq72y3rAqO4HY8AwuxEvn%2BksvBSlvg0rTZTYYLdLQp7RJWMH2rWvP9j0ppj2EHsCgUFbH3a0pqRyiVPS7pAWBbKbQh%2FHp8fxDAiKucj92J7X5J4Zq3TlYmdmQ8DMpnAjPiZUjT1bC8LUEmtW359OuZb9Xv%2BDmOsKNmgccmYGNTShyUd0os4KBsSjerOvDqRcCdeDZ%2BbqBRoyTH4mUt3tDSqsfHPNkITv5qEhPxhUGlfRs29Ds69OVu2HPWT56dQK1Nu9w7PntuC9iCXjN%2BAHKcn8MiY4WaDTonzTQIpSy86jcMIutysMGOqUBuQS7BPpeQZXynCD7%2B0QVj8PYK%2Fbz6gZhRio7lUHDYXlHN1Q4QIHE4FkjxSvoCryidkaGVLW2RBBRRDeXdR2bLINw0D%2F%2FG1WuEjwf%2BWJjOYSSrFEr32mTWv6A7cXTNi1LYAUWEN2gY2sUCkGTL2lC6PZaJ02AhAiBOsmWyGryFQelJ84WdCwdWA02AUWHimVktq4wwbj11X7rbuyweSqbPw0Hke6o&X-Amz-Signature=0f1a3a9ae7feca03662e4e175a307b6322ef2d71d5a83ee3fbad3253e09956d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI77XD26%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC13I5bJSsCpdITfYYHrYZ0%2BsDgk0oci%2FpXg2Gw%2BfParAiEAznEM9BOHpD5vLlffnhMfPaslXM6MtYMd6ovIpjzo2wkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGedanVUxDTq6HjVDSrcA%2BfjawxpYI5YQfHhs2SbsmO4pD1r8yZ8XwnKQHAJXRXzEvgFhSpC7uFBiW1oayyI7zumeJcDkl09iLjQdtpIANdEi10U%2B1gH79rWzpwY%2F8BJyn%2Fh4%2FtnQjWoiBsVAq6PcxpTRI0LETfxIzVn4jThKolCR1egRwCiHqvC1moeJukijtcgyudkBuTLK%2Fr2VsZV3buXJ4WWnSPH55%2B9ROZ5%2B2tc6qNvzIa%2B6Shfb5yJTo3TAfzzykM5aY5Bm3HsJA%2FYhneH1SGo%2BoafedhvNzZ7V6WxDNc6Z%2FO6Uhj%2Bxt94PmOb3vv90SuIhdKENtQASVq7S00AJikdF0M%2Be1Lzq72y3rAqO4HY8AwuxEvn%2BksvBSlvg0rTZTYYLdLQp7RJWMH2rWvP9j0ppj2EHsCgUFbH3a0pqRyiVPS7pAWBbKbQh%2FHp8fxDAiKucj92J7X5J4Zq3TlYmdmQ8DMpnAjPiZUjT1bC8LUEmtW359OuZb9Xv%2BDmOsKNmgccmYGNTShyUd0os4KBsSjerOvDqRcCdeDZ%2BbqBRoyTH4mUt3tDSqsfHPNkITv5qEhPxhUGlfRs29Ds69OVu2HPWT56dQK1Nu9w7PntuC9iCXjN%2BAHKcn8MiY4WaDTonzTQIpSy86jcMIutysMGOqUBuQS7BPpeQZXynCD7%2B0QVj8PYK%2Fbz6gZhRio7lUHDYXlHN1Q4QIHE4FkjxSvoCryidkaGVLW2RBBRRDeXdR2bLINw0D%2F%2FG1WuEjwf%2BWJjOYSSrFEr32mTWv6A7cXTNi1LYAUWEN2gY2sUCkGTL2lC6PZaJ02AhAiBOsmWyGryFQelJ84WdCwdWA02AUWHimVktq4wwbj11X7rbuyweSqbPw0Hke6o&X-Amz-Signature=6f14d05bac187710b34ae4c29cff36b827c2aa28b62ef1849bcb5297f1f7de51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI77XD26%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC13I5bJSsCpdITfYYHrYZ0%2BsDgk0oci%2FpXg2Gw%2BfParAiEAznEM9BOHpD5vLlffnhMfPaslXM6MtYMd6ovIpjzo2wkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGedanVUxDTq6HjVDSrcA%2BfjawxpYI5YQfHhs2SbsmO4pD1r8yZ8XwnKQHAJXRXzEvgFhSpC7uFBiW1oayyI7zumeJcDkl09iLjQdtpIANdEi10U%2B1gH79rWzpwY%2F8BJyn%2Fh4%2FtnQjWoiBsVAq6PcxpTRI0LETfxIzVn4jThKolCR1egRwCiHqvC1moeJukijtcgyudkBuTLK%2Fr2VsZV3buXJ4WWnSPH55%2B9ROZ5%2B2tc6qNvzIa%2B6Shfb5yJTo3TAfzzykM5aY5Bm3HsJA%2FYhneH1SGo%2BoafedhvNzZ7V6WxDNc6Z%2FO6Uhj%2Bxt94PmOb3vv90SuIhdKENtQASVq7S00AJikdF0M%2Be1Lzq72y3rAqO4HY8AwuxEvn%2BksvBSlvg0rTZTYYLdLQp7RJWMH2rWvP9j0ppj2EHsCgUFbH3a0pqRyiVPS7pAWBbKbQh%2FHp8fxDAiKucj92J7X5J4Zq3TlYmdmQ8DMpnAjPiZUjT1bC8LUEmtW359OuZb9Xv%2BDmOsKNmgccmYGNTShyUd0os4KBsSjerOvDqRcCdeDZ%2BbqBRoyTH4mUt3tDSqsfHPNkITv5qEhPxhUGlfRs29Ds69OVu2HPWT56dQK1Nu9w7PntuC9iCXjN%2BAHKcn8MiY4WaDTonzTQIpSy86jcMIutysMGOqUBuQS7BPpeQZXynCD7%2B0QVj8PYK%2Fbz6gZhRio7lUHDYXlHN1Q4QIHE4FkjxSvoCryidkaGVLW2RBBRRDeXdR2bLINw0D%2F%2FG1WuEjwf%2BWJjOYSSrFEr32mTWv6A7cXTNi1LYAUWEN2gY2sUCkGTL2lC6PZaJ02AhAiBOsmWyGryFQelJ84WdCwdWA02AUWHimVktq4wwbj11X7rbuyweSqbPw0Hke6o&X-Amz-Signature=160584acccb9fdc292f3ef9aea949d4485d05000ad03197e277365a53a3e054e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
