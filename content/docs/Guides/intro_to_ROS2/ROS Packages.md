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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4MMUP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9W0SOO4m3zpz5UHH%2BCSd4kHSHInrO1tEGSkx3qYg8wgIgHdEcmNn1vQELZVGU8diMaugOneao1NeXflTaOqbtt4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEq1uaJ1o3GmjZVc3CrcA03f5T3CNvbzIbn3oOyGLu1QefcU1kZc4Ix83IQj%2BC01mEHPsGeSmwhWO8DRlEV1W3Sw9YQIJYFq5TVV%2FoyJA61O5T2WOaoheRkmJ8JZY1R46tjfQiO4MrHafCjSPT%2F%2BBoQ0PS%2B1n14LMzNStjAHXJEayC7Fi2LdvNm%2Featc4HD5GhflU%2BR%2BDfdguM9y03kwcx1kRys440HoJW5h%2F60OKej6ViXj23i%2BIEMsAjon0owCgFC1wHZwM5mqTZ9jUfX0GLigLPhosDPfV7UXFr7fd1EhLtm2yM%2F5zxzXaXpzi5%2Fq%2BMul%2F1ChpRPYwUSWERwgQDV3uCByM7rLuDweNAILzt6juzcAATDHtzta%2F79Ho9uNqUfXw5DgzkK6YEPkbkic4JPxXXMaPo%2Fm4RsJER9vD20XA6vwFSWDNc50vCrok9jleahTrO60%2B9%2BKvU5DEMHnRC1FmpK4vxIPULbsYkDcOfj2pQH29c9xkpXmbJbEBrhDKwO53oSjoHy841UEeYeozSz2BFuiKUg%2BSK4zNlfbrxVL8Q6JUNpJL7vREDbjf2CE2sP6sZr1V33FA07h260T0%2FFXWquCqt%2BmfuIiX6UUCYSkLQi%2FRIXIl3ZJTdRniCERi7zfQvQh0tPze1ZpMNieucQGOqUB%2BD3hNCnyi8Z47s8SRmETRPJJs50ppa4YGNN2aEuFy%2B3hvUnNG9pgKFgXxr1R10e0O%2B%2B%2FgcJqmzWA7wabwpG9pK%2B2LBI0cAf6q04bM4u0guqpJ8PotSYte82EvWwHKvbnG2WH8GaNissMg%2BC%2FwSt7psRFSpdf2Ssw9Rj0orGx0ypqdXmRrcXDvsZrIIvo2D%2FNDoY%2BJQaZICWya7WvCO%2FH2U1nvz9v&X-Amz-Signature=c1d466b2a2ccabcc63d314e8bd3992387bce861761c104aff47119bfd754d442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4MMUP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9W0SOO4m3zpz5UHH%2BCSd4kHSHInrO1tEGSkx3qYg8wgIgHdEcmNn1vQELZVGU8diMaugOneao1NeXflTaOqbtt4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEq1uaJ1o3GmjZVc3CrcA03f5T3CNvbzIbn3oOyGLu1QefcU1kZc4Ix83IQj%2BC01mEHPsGeSmwhWO8DRlEV1W3Sw9YQIJYFq5TVV%2FoyJA61O5T2WOaoheRkmJ8JZY1R46tjfQiO4MrHafCjSPT%2F%2BBoQ0PS%2B1n14LMzNStjAHXJEayC7Fi2LdvNm%2Featc4HD5GhflU%2BR%2BDfdguM9y03kwcx1kRys440HoJW5h%2F60OKej6ViXj23i%2BIEMsAjon0owCgFC1wHZwM5mqTZ9jUfX0GLigLPhosDPfV7UXFr7fd1EhLtm2yM%2F5zxzXaXpzi5%2Fq%2BMul%2F1ChpRPYwUSWERwgQDV3uCByM7rLuDweNAILzt6juzcAATDHtzta%2F79Ho9uNqUfXw5DgzkK6YEPkbkic4JPxXXMaPo%2Fm4RsJER9vD20XA6vwFSWDNc50vCrok9jleahTrO60%2B9%2BKvU5DEMHnRC1FmpK4vxIPULbsYkDcOfj2pQH29c9xkpXmbJbEBrhDKwO53oSjoHy841UEeYeozSz2BFuiKUg%2BSK4zNlfbrxVL8Q6JUNpJL7vREDbjf2CE2sP6sZr1V33FA07h260T0%2FFXWquCqt%2BmfuIiX6UUCYSkLQi%2FRIXIl3ZJTdRniCERi7zfQvQh0tPze1ZpMNieucQGOqUB%2BD3hNCnyi8Z47s8SRmETRPJJs50ppa4YGNN2aEuFy%2B3hvUnNG9pgKFgXxr1R10e0O%2B%2B%2FgcJqmzWA7wabwpG9pK%2B2LBI0cAf6q04bM4u0guqpJ8PotSYte82EvWwHKvbnG2WH8GaNissMg%2BC%2FwSt7psRFSpdf2Ssw9Rj0orGx0ypqdXmRrcXDvsZrIIvo2D%2FNDoY%2BJQaZICWya7WvCO%2FH2U1nvz9v&X-Amz-Signature=ff9f929c26b42d4bff8ad7fe4e07c0c11aa887669a21a13bc34a3eb5032ba0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4MMUP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9W0SOO4m3zpz5UHH%2BCSd4kHSHInrO1tEGSkx3qYg8wgIgHdEcmNn1vQELZVGU8diMaugOneao1NeXflTaOqbtt4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEq1uaJ1o3GmjZVc3CrcA03f5T3CNvbzIbn3oOyGLu1QefcU1kZc4Ix83IQj%2BC01mEHPsGeSmwhWO8DRlEV1W3Sw9YQIJYFq5TVV%2FoyJA61O5T2WOaoheRkmJ8JZY1R46tjfQiO4MrHafCjSPT%2F%2BBoQ0PS%2B1n14LMzNStjAHXJEayC7Fi2LdvNm%2Featc4HD5GhflU%2BR%2BDfdguM9y03kwcx1kRys440HoJW5h%2F60OKej6ViXj23i%2BIEMsAjon0owCgFC1wHZwM5mqTZ9jUfX0GLigLPhosDPfV7UXFr7fd1EhLtm2yM%2F5zxzXaXpzi5%2Fq%2BMul%2F1ChpRPYwUSWERwgQDV3uCByM7rLuDweNAILzt6juzcAATDHtzta%2F79Ho9uNqUfXw5DgzkK6YEPkbkic4JPxXXMaPo%2Fm4RsJER9vD20XA6vwFSWDNc50vCrok9jleahTrO60%2B9%2BKvU5DEMHnRC1FmpK4vxIPULbsYkDcOfj2pQH29c9xkpXmbJbEBrhDKwO53oSjoHy841UEeYeozSz2BFuiKUg%2BSK4zNlfbrxVL8Q6JUNpJL7vREDbjf2CE2sP6sZr1V33FA07h260T0%2FFXWquCqt%2BmfuIiX6UUCYSkLQi%2FRIXIl3ZJTdRniCERi7zfQvQh0tPze1ZpMNieucQGOqUB%2BD3hNCnyi8Z47s8SRmETRPJJs50ppa4YGNN2aEuFy%2B3hvUnNG9pgKFgXxr1R10e0O%2B%2B%2FgcJqmzWA7wabwpG9pK%2B2LBI0cAf6q04bM4u0guqpJ8PotSYte82EvWwHKvbnG2WH8GaNissMg%2BC%2FwSt7psRFSpdf2Ssw9Rj0orGx0ypqdXmRrcXDvsZrIIvo2D%2FNDoY%2BJQaZICWya7WvCO%2FH2U1nvz9v&X-Amz-Signature=cf422b962e9591b357ceb402d698822df548732b923f3d95f45ab6b063346484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4MMUP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9W0SOO4m3zpz5UHH%2BCSd4kHSHInrO1tEGSkx3qYg8wgIgHdEcmNn1vQELZVGU8diMaugOneao1NeXflTaOqbtt4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEq1uaJ1o3GmjZVc3CrcA03f5T3CNvbzIbn3oOyGLu1QefcU1kZc4Ix83IQj%2BC01mEHPsGeSmwhWO8DRlEV1W3Sw9YQIJYFq5TVV%2FoyJA61O5T2WOaoheRkmJ8JZY1R46tjfQiO4MrHafCjSPT%2F%2BBoQ0PS%2B1n14LMzNStjAHXJEayC7Fi2LdvNm%2Featc4HD5GhflU%2BR%2BDfdguM9y03kwcx1kRys440HoJW5h%2F60OKej6ViXj23i%2BIEMsAjon0owCgFC1wHZwM5mqTZ9jUfX0GLigLPhosDPfV7UXFr7fd1EhLtm2yM%2F5zxzXaXpzi5%2Fq%2BMul%2F1ChpRPYwUSWERwgQDV3uCByM7rLuDweNAILzt6juzcAATDHtzta%2F79Ho9uNqUfXw5DgzkK6YEPkbkic4JPxXXMaPo%2Fm4RsJER9vD20XA6vwFSWDNc50vCrok9jleahTrO60%2B9%2BKvU5DEMHnRC1FmpK4vxIPULbsYkDcOfj2pQH29c9xkpXmbJbEBrhDKwO53oSjoHy841UEeYeozSz2BFuiKUg%2BSK4zNlfbrxVL8Q6JUNpJL7vREDbjf2CE2sP6sZr1V33FA07h260T0%2FFXWquCqt%2BmfuIiX6UUCYSkLQi%2FRIXIl3ZJTdRniCERi7zfQvQh0tPze1ZpMNieucQGOqUB%2BD3hNCnyi8Z47s8SRmETRPJJs50ppa4YGNN2aEuFy%2B3hvUnNG9pgKFgXxr1R10e0O%2B%2B%2FgcJqmzWA7wabwpG9pK%2B2LBI0cAf6q04bM4u0guqpJ8PotSYte82EvWwHKvbnG2WH8GaNissMg%2BC%2FwSt7psRFSpdf2Ssw9Rj0orGx0ypqdXmRrcXDvsZrIIvo2D%2FNDoY%2BJQaZICWya7WvCO%2FH2U1nvz9v&X-Amz-Signature=c219b866b42d3b2d61eb88e28b24246b33502ff960d866060d2cecb04e5b1d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4MMUP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9W0SOO4m3zpz5UHH%2BCSd4kHSHInrO1tEGSkx3qYg8wgIgHdEcmNn1vQELZVGU8diMaugOneao1NeXflTaOqbtt4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEq1uaJ1o3GmjZVc3CrcA03f5T3CNvbzIbn3oOyGLu1QefcU1kZc4Ix83IQj%2BC01mEHPsGeSmwhWO8DRlEV1W3Sw9YQIJYFq5TVV%2FoyJA61O5T2WOaoheRkmJ8JZY1R46tjfQiO4MrHafCjSPT%2F%2BBoQ0PS%2B1n14LMzNStjAHXJEayC7Fi2LdvNm%2Featc4HD5GhflU%2BR%2BDfdguM9y03kwcx1kRys440HoJW5h%2F60OKej6ViXj23i%2BIEMsAjon0owCgFC1wHZwM5mqTZ9jUfX0GLigLPhosDPfV7UXFr7fd1EhLtm2yM%2F5zxzXaXpzi5%2Fq%2BMul%2F1ChpRPYwUSWERwgQDV3uCByM7rLuDweNAILzt6juzcAATDHtzta%2F79Ho9uNqUfXw5DgzkK6YEPkbkic4JPxXXMaPo%2Fm4RsJER9vD20XA6vwFSWDNc50vCrok9jleahTrO60%2B9%2BKvU5DEMHnRC1FmpK4vxIPULbsYkDcOfj2pQH29c9xkpXmbJbEBrhDKwO53oSjoHy841UEeYeozSz2BFuiKUg%2BSK4zNlfbrxVL8Q6JUNpJL7vREDbjf2CE2sP6sZr1V33FA07h260T0%2FFXWquCqt%2BmfuIiX6UUCYSkLQi%2FRIXIl3ZJTdRniCERi7zfQvQh0tPze1ZpMNieucQGOqUB%2BD3hNCnyi8Z47s8SRmETRPJJs50ppa4YGNN2aEuFy%2B3hvUnNG9pgKFgXxr1R10e0O%2B%2B%2FgcJqmzWA7wabwpG9pK%2B2LBI0cAf6q04bM4u0guqpJ8PotSYte82EvWwHKvbnG2WH8GaNissMg%2BC%2FwSt7psRFSpdf2Ssw9Rj0orGx0ypqdXmRrcXDvsZrIIvo2D%2FNDoY%2BJQaZICWya7WvCO%2FH2U1nvz9v&X-Amz-Signature=105077fd953f8b325bcfc2656e1bb58b7a4421495f06bec36157a2fd21635d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4MMUP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9W0SOO4m3zpz5UHH%2BCSd4kHSHInrO1tEGSkx3qYg8wgIgHdEcmNn1vQELZVGU8diMaugOneao1NeXflTaOqbtt4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEq1uaJ1o3GmjZVc3CrcA03f5T3CNvbzIbn3oOyGLu1QefcU1kZc4Ix83IQj%2BC01mEHPsGeSmwhWO8DRlEV1W3Sw9YQIJYFq5TVV%2FoyJA61O5T2WOaoheRkmJ8JZY1R46tjfQiO4MrHafCjSPT%2F%2BBoQ0PS%2B1n14LMzNStjAHXJEayC7Fi2LdvNm%2Featc4HD5GhflU%2BR%2BDfdguM9y03kwcx1kRys440HoJW5h%2F60OKej6ViXj23i%2BIEMsAjon0owCgFC1wHZwM5mqTZ9jUfX0GLigLPhosDPfV7UXFr7fd1EhLtm2yM%2F5zxzXaXpzi5%2Fq%2BMul%2F1ChpRPYwUSWERwgQDV3uCByM7rLuDweNAILzt6juzcAATDHtzta%2F79Ho9uNqUfXw5DgzkK6YEPkbkic4JPxXXMaPo%2Fm4RsJER9vD20XA6vwFSWDNc50vCrok9jleahTrO60%2B9%2BKvU5DEMHnRC1FmpK4vxIPULbsYkDcOfj2pQH29c9xkpXmbJbEBrhDKwO53oSjoHy841UEeYeozSz2BFuiKUg%2BSK4zNlfbrxVL8Q6JUNpJL7vREDbjf2CE2sP6sZr1V33FA07h260T0%2FFXWquCqt%2BmfuIiX6UUCYSkLQi%2FRIXIl3ZJTdRniCERi7zfQvQh0tPze1ZpMNieucQGOqUB%2BD3hNCnyi8Z47s8SRmETRPJJs50ppa4YGNN2aEuFy%2B3hvUnNG9pgKFgXxr1R10e0O%2B%2B%2FgcJqmzWA7wabwpG9pK%2B2LBI0cAf6q04bM4u0guqpJ8PotSYte82EvWwHKvbnG2WH8GaNissMg%2BC%2FwSt7psRFSpdf2Ssw9Rj0orGx0ypqdXmRrcXDvsZrIIvo2D%2FNDoY%2BJQaZICWya7WvCO%2FH2U1nvz9v&X-Amz-Signature=4a11d7c6590c74a9b60df883225c550c763916286e61f8f35fca4a8a55c7e62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4MMUP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9W0SOO4m3zpz5UHH%2BCSd4kHSHInrO1tEGSkx3qYg8wgIgHdEcmNn1vQELZVGU8diMaugOneao1NeXflTaOqbtt4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEq1uaJ1o3GmjZVc3CrcA03f5T3CNvbzIbn3oOyGLu1QefcU1kZc4Ix83IQj%2BC01mEHPsGeSmwhWO8DRlEV1W3Sw9YQIJYFq5TVV%2FoyJA61O5T2WOaoheRkmJ8JZY1R46tjfQiO4MrHafCjSPT%2F%2BBoQ0PS%2B1n14LMzNStjAHXJEayC7Fi2LdvNm%2Featc4HD5GhflU%2BR%2BDfdguM9y03kwcx1kRys440HoJW5h%2F60OKej6ViXj23i%2BIEMsAjon0owCgFC1wHZwM5mqTZ9jUfX0GLigLPhosDPfV7UXFr7fd1EhLtm2yM%2F5zxzXaXpzi5%2Fq%2BMul%2F1ChpRPYwUSWERwgQDV3uCByM7rLuDweNAILzt6juzcAATDHtzta%2F79Ho9uNqUfXw5DgzkK6YEPkbkic4JPxXXMaPo%2Fm4RsJER9vD20XA6vwFSWDNc50vCrok9jleahTrO60%2B9%2BKvU5DEMHnRC1FmpK4vxIPULbsYkDcOfj2pQH29c9xkpXmbJbEBrhDKwO53oSjoHy841UEeYeozSz2BFuiKUg%2BSK4zNlfbrxVL8Q6JUNpJL7vREDbjf2CE2sP6sZr1V33FA07h260T0%2FFXWquCqt%2BmfuIiX6UUCYSkLQi%2FRIXIl3ZJTdRniCERi7zfQvQh0tPze1ZpMNieucQGOqUB%2BD3hNCnyi8Z47s8SRmETRPJJs50ppa4YGNN2aEuFy%2B3hvUnNG9pgKFgXxr1R10e0O%2B%2B%2FgcJqmzWA7wabwpG9pK%2B2LBI0cAf6q04bM4u0guqpJ8PotSYte82EvWwHKvbnG2WH8GaNissMg%2BC%2FwSt7psRFSpdf2Ssw9Rj0orGx0ypqdXmRrcXDvsZrIIvo2D%2FNDoY%2BJQaZICWya7WvCO%2FH2U1nvz9v&X-Amz-Signature=2e974297231ddbfc7fae10ea46748033316eb7991e3aca3849f198a113414faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
