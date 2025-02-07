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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FRBC2W%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDxmzN2KBmf8fE6Ype9lkyOPxzddwXF4mYB8RiSKH8PowIgEsHpMbhSrBJIe2Faw1BH4MJ7UjkVr0okG%2BZsSnA%2F3tAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHPA%2FUUVks1ZosBBxircA50hroEtPaliJfnSZu%2FCICByjeovwzT6N78qj9iYjpGddXPKJaBDpNi7beWPNOqY7msGW9HGoRQQ2zXdfSGtBMA2M26f92ZMj8tynw7h5BUi%2BAiFSGkh%2BmPcLAny%2BLVAZv2pXgEKpN8xsBiyfwmaVow31S7OrSWZQD8aanNj%2FO7XLO7AtbRj7K2JzwgdvfxUghGCmx3iJK2fHYwLOVWWPLKA049W0QjF7A8uhderklNXepxrf90M4sbKCgxVDPSqBkI0IDGl%2BHi7HJUfkWiYAuIkOPa4f%2FHbXwYSW9wNXIPXrktxYWE8okMBn1C7z9w5t7%2Bg6yzCXT45YbbrSSMvcUk7OjyOSm%2FcNMkVlkpPaocfNHb3vnhgTEDN3bGY0pRH8Mr4pkfJWLr%2Bm%2BapefKOhPJdTHn%2FgBMdbDUkcxgrOltxOw8qs8OCStG9CECXH9MdJ%2F4lq4Tn1oK5gAduhZQ%2B7JLiCRufZB2AMPBiyfoDIfMlsUqlNiIuSAz%2BbQNcsZVd1YX8XKK9pUMGxD2tEimdEzvGZapH1WF%2FCkMIq0zRS8UgTAcCMrsgryfI4UOzdVa46090gCkXrOfSpeLluMyeN2%2BjoxGaZOzPzrJfVtQw6UrgimHThcTS2IYDsq9VMPKMmL0GOqUB4hB6%2F2k5fLaJudNnlkQenXd2hvmJzjUma%2BTUdSoga%2B6OUNwPzZ25IloESXExFC2C5dDvIJXkFDNZfC9Ba71z0MlS%2FuQHT3Jk5ZRXhA0L5P5Dp3CDpcg0aa3VbGedXSZL8AUiC7CrtXvvPKLlzpn%2FTfW4pEq1REaI3SMiHnRR%2F4ihl9AEuhA%2F0uCdz0rvalH330dTfNJf0b8KLeXFWw%2BOE1E6nR08&X-Amz-Signature=f6793cda3c69def78ba3818ce6b580b96274d0bdb01e8f53163fd4dd7f9f9de5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FRBC2W%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDxmzN2KBmf8fE6Ype9lkyOPxzddwXF4mYB8RiSKH8PowIgEsHpMbhSrBJIe2Faw1BH4MJ7UjkVr0okG%2BZsSnA%2F3tAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHPA%2FUUVks1ZosBBxircA50hroEtPaliJfnSZu%2FCICByjeovwzT6N78qj9iYjpGddXPKJaBDpNi7beWPNOqY7msGW9HGoRQQ2zXdfSGtBMA2M26f92ZMj8tynw7h5BUi%2BAiFSGkh%2BmPcLAny%2BLVAZv2pXgEKpN8xsBiyfwmaVow31S7OrSWZQD8aanNj%2FO7XLO7AtbRj7K2JzwgdvfxUghGCmx3iJK2fHYwLOVWWPLKA049W0QjF7A8uhderklNXepxrf90M4sbKCgxVDPSqBkI0IDGl%2BHi7HJUfkWiYAuIkOPa4f%2FHbXwYSW9wNXIPXrktxYWE8okMBn1C7z9w5t7%2Bg6yzCXT45YbbrSSMvcUk7OjyOSm%2FcNMkVlkpPaocfNHb3vnhgTEDN3bGY0pRH8Mr4pkfJWLr%2Bm%2BapefKOhPJdTHn%2FgBMdbDUkcxgrOltxOw8qs8OCStG9CECXH9MdJ%2F4lq4Tn1oK5gAduhZQ%2B7JLiCRufZB2AMPBiyfoDIfMlsUqlNiIuSAz%2BbQNcsZVd1YX8XKK9pUMGxD2tEimdEzvGZapH1WF%2FCkMIq0zRS8UgTAcCMrsgryfI4UOzdVa46090gCkXrOfSpeLluMyeN2%2BjoxGaZOzPzrJfVtQw6UrgimHThcTS2IYDsq9VMPKMmL0GOqUB4hB6%2F2k5fLaJudNnlkQenXd2hvmJzjUma%2BTUdSoga%2B6OUNwPzZ25IloESXExFC2C5dDvIJXkFDNZfC9Ba71z0MlS%2FuQHT3Jk5ZRXhA0L5P5Dp3CDpcg0aa3VbGedXSZL8AUiC7CrtXvvPKLlzpn%2FTfW4pEq1REaI3SMiHnRR%2F4ihl9AEuhA%2F0uCdz0rvalH330dTfNJf0b8KLeXFWw%2BOE1E6nR08&X-Amz-Signature=f60c7019bca038877dddbc38647d6798b3f73bebbcd024ec89fc297444cc85b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FRBC2W%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDxmzN2KBmf8fE6Ype9lkyOPxzddwXF4mYB8RiSKH8PowIgEsHpMbhSrBJIe2Faw1BH4MJ7UjkVr0okG%2BZsSnA%2F3tAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHPA%2FUUVks1ZosBBxircA50hroEtPaliJfnSZu%2FCICByjeovwzT6N78qj9iYjpGddXPKJaBDpNi7beWPNOqY7msGW9HGoRQQ2zXdfSGtBMA2M26f92ZMj8tynw7h5BUi%2BAiFSGkh%2BmPcLAny%2BLVAZv2pXgEKpN8xsBiyfwmaVow31S7OrSWZQD8aanNj%2FO7XLO7AtbRj7K2JzwgdvfxUghGCmx3iJK2fHYwLOVWWPLKA049W0QjF7A8uhderklNXepxrf90M4sbKCgxVDPSqBkI0IDGl%2BHi7HJUfkWiYAuIkOPa4f%2FHbXwYSW9wNXIPXrktxYWE8okMBn1C7z9w5t7%2Bg6yzCXT45YbbrSSMvcUk7OjyOSm%2FcNMkVlkpPaocfNHb3vnhgTEDN3bGY0pRH8Mr4pkfJWLr%2Bm%2BapefKOhPJdTHn%2FgBMdbDUkcxgrOltxOw8qs8OCStG9CECXH9MdJ%2F4lq4Tn1oK5gAduhZQ%2B7JLiCRufZB2AMPBiyfoDIfMlsUqlNiIuSAz%2BbQNcsZVd1YX8XKK9pUMGxD2tEimdEzvGZapH1WF%2FCkMIq0zRS8UgTAcCMrsgryfI4UOzdVa46090gCkXrOfSpeLluMyeN2%2BjoxGaZOzPzrJfVtQw6UrgimHThcTS2IYDsq9VMPKMmL0GOqUB4hB6%2F2k5fLaJudNnlkQenXd2hvmJzjUma%2BTUdSoga%2B6OUNwPzZ25IloESXExFC2C5dDvIJXkFDNZfC9Ba71z0MlS%2FuQHT3Jk5ZRXhA0L5P5Dp3CDpcg0aa3VbGedXSZL8AUiC7CrtXvvPKLlzpn%2FTfW4pEq1REaI3SMiHnRR%2F4ihl9AEuhA%2F0uCdz0rvalH330dTfNJf0b8KLeXFWw%2BOE1E6nR08&X-Amz-Signature=b6974c65c7535cadffe37197ad26bf1b4089d68ff005a2bff37dc9cab0459aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FRBC2W%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDxmzN2KBmf8fE6Ype9lkyOPxzddwXF4mYB8RiSKH8PowIgEsHpMbhSrBJIe2Faw1BH4MJ7UjkVr0okG%2BZsSnA%2F3tAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHPA%2FUUVks1ZosBBxircA50hroEtPaliJfnSZu%2FCICByjeovwzT6N78qj9iYjpGddXPKJaBDpNi7beWPNOqY7msGW9HGoRQQ2zXdfSGtBMA2M26f92ZMj8tynw7h5BUi%2BAiFSGkh%2BmPcLAny%2BLVAZv2pXgEKpN8xsBiyfwmaVow31S7OrSWZQD8aanNj%2FO7XLO7AtbRj7K2JzwgdvfxUghGCmx3iJK2fHYwLOVWWPLKA049W0QjF7A8uhderklNXepxrf90M4sbKCgxVDPSqBkI0IDGl%2BHi7HJUfkWiYAuIkOPa4f%2FHbXwYSW9wNXIPXrktxYWE8okMBn1C7z9w5t7%2Bg6yzCXT45YbbrSSMvcUk7OjyOSm%2FcNMkVlkpPaocfNHb3vnhgTEDN3bGY0pRH8Mr4pkfJWLr%2Bm%2BapefKOhPJdTHn%2FgBMdbDUkcxgrOltxOw8qs8OCStG9CECXH9MdJ%2F4lq4Tn1oK5gAduhZQ%2B7JLiCRufZB2AMPBiyfoDIfMlsUqlNiIuSAz%2BbQNcsZVd1YX8XKK9pUMGxD2tEimdEzvGZapH1WF%2FCkMIq0zRS8UgTAcCMrsgryfI4UOzdVa46090gCkXrOfSpeLluMyeN2%2BjoxGaZOzPzrJfVtQw6UrgimHThcTS2IYDsq9VMPKMmL0GOqUB4hB6%2F2k5fLaJudNnlkQenXd2hvmJzjUma%2BTUdSoga%2B6OUNwPzZ25IloESXExFC2C5dDvIJXkFDNZfC9Ba71z0MlS%2FuQHT3Jk5ZRXhA0L5P5Dp3CDpcg0aa3VbGedXSZL8AUiC7CrtXvvPKLlzpn%2FTfW4pEq1REaI3SMiHnRR%2F4ihl9AEuhA%2F0uCdz0rvalH330dTfNJf0b8KLeXFWw%2BOE1E6nR08&X-Amz-Signature=eb468ff8b281b44aea8fe6644bb573713b6430cb97c939af216c5ce16d8cc68f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FRBC2W%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDxmzN2KBmf8fE6Ype9lkyOPxzddwXF4mYB8RiSKH8PowIgEsHpMbhSrBJIe2Faw1BH4MJ7UjkVr0okG%2BZsSnA%2F3tAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHPA%2FUUVks1ZosBBxircA50hroEtPaliJfnSZu%2FCICByjeovwzT6N78qj9iYjpGddXPKJaBDpNi7beWPNOqY7msGW9HGoRQQ2zXdfSGtBMA2M26f92ZMj8tynw7h5BUi%2BAiFSGkh%2BmPcLAny%2BLVAZv2pXgEKpN8xsBiyfwmaVow31S7OrSWZQD8aanNj%2FO7XLO7AtbRj7K2JzwgdvfxUghGCmx3iJK2fHYwLOVWWPLKA049W0QjF7A8uhderklNXepxrf90M4sbKCgxVDPSqBkI0IDGl%2BHi7HJUfkWiYAuIkOPa4f%2FHbXwYSW9wNXIPXrktxYWE8okMBn1C7z9w5t7%2Bg6yzCXT45YbbrSSMvcUk7OjyOSm%2FcNMkVlkpPaocfNHb3vnhgTEDN3bGY0pRH8Mr4pkfJWLr%2Bm%2BapefKOhPJdTHn%2FgBMdbDUkcxgrOltxOw8qs8OCStG9CECXH9MdJ%2F4lq4Tn1oK5gAduhZQ%2B7JLiCRufZB2AMPBiyfoDIfMlsUqlNiIuSAz%2BbQNcsZVd1YX8XKK9pUMGxD2tEimdEzvGZapH1WF%2FCkMIq0zRS8UgTAcCMrsgryfI4UOzdVa46090gCkXrOfSpeLluMyeN2%2BjoxGaZOzPzrJfVtQw6UrgimHThcTS2IYDsq9VMPKMmL0GOqUB4hB6%2F2k5fLaJudNnlkQenXd2hvmJzjUma%2BTUdSoga%2B6OUNwPzZ25IloESXExFC2C5dDvIJXkFDNZfC9Ba71z0MlS%2FuQHT3Jk5ZRXhA0L5P5Dp3CDpcg0aa3VbGedXSZL8AUiC7CrtXvvPKLlzpn%2FTfW4pEq1REaI3SMiHnRR%2F4ihl9AEuhA%2F0uCdz0rvalH330dTfNJf0b8KLeXFWw%2BOE1E6nR08&X-Amz-Signature=ea1d8ff24716670b1574311bf69ca20f70df4a5c673af8470f6c7148fe5e178e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FRBC2W%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDxmzN2KBmf8fE6Ype9lkyOPxzddwXF4mYB8RiSKH8PowIgEsHpMbhSrBJIe2Faw1BH4MJ7UjkVr0okG%2BZsSnA%2F3tAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHPA%2FUUVks1ZosBBxircA50hroEtPaliJfnSZu%2FCICByjeovwzT6N78qj9iYjpGddXPKJaBDpNi7beWPNOqY7msGW9HGoRQQ2zXdfSGtBMA2M26f92ZMj8tynw7h5BUi%2BAiFSGkh%2BmPcLAny%2BLVAZv2pXgEKpN8xsBiyfwmaVow31S7OrSWZQD8aanNj%2FO7XLO7AtbRj7K2JzwgdvfxUghGCmx3iJK2fHYwLOVWWPLKA049W0QjF7A8uhderklNXepxrf90M4sbKCgxVDPSqBkI0IDGl%2BHi7HJUfkWiYAuIkOPa4f%2FHbXwYSW9wNXIPXrktxYWE8okMBn1C7z9w5t7%2Bg6yzCXT45YbbrSSMvcUk7OjyOSm%2FcNMkVlkpPaocfNHb3vnhgTEDN3bGY0pRH8Mr4pkfJWLr%2Bm%2BapefKOhPJdTHn%2FgBMdbDUkcxgrOltxOw8qs8OCStG9CECXH9MdJ%2F4lq4Tn1oK5gAduhZQ%2B7JLiCRufZB2AMPBiyfoDIfMlsUqlNiIuSAz%2BbQNcsZVd1YX8XKK9pUMGxD2tEimdEzvGZapH1WF%2FCkMIq0zRS8UgTAcCMrsgryfI4UOzdVa46090gCkXrOfSpeLluMyeN2%2BjoxGaZOzPzrJfVtQw6UrgimHThcTS2IYDsq9VMPKMmL0GOqUB4hB6%2F2k5fLaJudNnlkQenXd2hvmJzjUma%2BTUdSoga%2B6OUNwPzZ25IloESXExFC2C5dDvIJXkFDNZfC9Ba71z0MlS%2FuQHT3Jk5ZRXhA0L5P5Dp3CDpcg0aa3VbGedXSZL8AUiC7CrtXvvPKLlzpn%2FTfW4pEq1REaI3SMiHnRR%2F4ihl9AEuhA%2F0uCdz0rvalH330dTfNJf0b8KLeXFWw%2BOE1E6nR08&X-Amz-Signature=25b6676c508c429f5c100cf11cc6a133fe87e141e9b534c5e65ebb558dc85cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FRBC2W%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDxmzN2KBmf8fE6Ype9lkyOPxzddwXF4mYB8RiSKH8PowIgEsHpMbhSrBJIe2Faw1BH4MJ7UjkVr0okG%2BZsSnA%2F3tAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHPA%2FUUVks1ZosBBxircA50hroEtPaliJfnSZu%2FCICByjeovwzT6N78qj9iYjpGddXPKJaBDpNi7beWPNOqY7msGW9HGoRQQ2zXdfSGtBMA2M26f92ZMj8tynw7h5BUi%2BAiFSGkh%2BmPcLAny%2BLVAZv2pXgEKpN8xsBiyfwmaVow31S7OrSWZQD8aanNj%2FO7XLO7AtbRj7K2JzwgdvfxUghGCmx3iJK2fHYwLOVWWPLKA049W0QjF7A8uhderklNXepxrf90M4sbKCgxVDPSqBkI0IDGl%2BHi7HJUfkWiYAuIkOPa4f%2FHbXwYSW9wNXIPXrktxYWE8okMBn1C7z9w5t7%2Bg6yzCXT45YbbrSSMvcUk7OjyOSm%2FcNMkVlkpPaocfNHb3vnhgTEDN3bGY0pRH8Mr4pkfJWLr%2Bm%2BapefKOhPJdTHn%2FgBMdbDUkcxgrOltxOw8qs8OCStG9CECXH9MdJ%2F4lq4Tn1oK5gAduhZQ%2B7JLiCRufZB2AMPBiyfoDIfMlsUqlNiIuSAz%2BbQNcsZVd1YX8XKK9pUMGxD2tEimdEzvGZapH1WF%2FCkMIq0zRS8UgTAcCMrsgryfI4UOzdVa46090gCkXrOfSpeLluMyeN2%2BjoxGaZOzPzrJfVtQw6UrgimHThcTS2IYDsq9VMPKMmL0GOqUB4hB6%2F2k5fLaJudNnlkQenXd2hvmJzjUma%2BTUdSoga%2B6OUNwPzZ25IloESXExFC2C5dDvIJXkFDNZfC9Ba71z0MlS%2FuQHT3Jk5ZRXhA0L5P5Dp3CDpcg0aa3VbGedXSZL8AUiC7CrtXvvPKLlzpn%2FTfW4pEq1REaI3SMiHnRR%2F4ihl9AEuhA%2F0uCdz0rvalH330dTfNJf0b8KLeXFWw%2BOE1E6nR08&X-Amz-Signature=4edbd7ddf2d7b21474bb9e561c3f477446639c0eac3bd26efeaf7556e43cdda4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
