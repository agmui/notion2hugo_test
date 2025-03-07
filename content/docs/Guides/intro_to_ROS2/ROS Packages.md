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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFPFCDF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4nDMFXzna%2BNFT8i%2BIeRpbPAhMs%2F%2B%2BwZ%2FA%2FiJfujgeGAiB4HX4Ocjx7AbnDMVPO3MAeiI9QDUEmrQnAhX9uD7rZbyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR46G3OY%2FNhvG9GqsKtwDtGZMQMCZpAzAKiqT1UKv8Xm5Cn%2Fr8r3t3bG56vs7gDw%2FeKNMvhAECC7juMn1hr8jkncRDkTCYTCZj09s9P2tLTZ0cg%2BqHvAjpYJoIE09CHwwP6mo4GF4ogVpxDi%2BMZuXIUWsEuMy%2FrOtW24qBQ6ZBDWwH0Kxp7HT184RwcvcrpBGCye%2FuwrrChZtI4PAlCDK3x8Xw8Ux9m5lOflN1nOEhLsMj95SIZ0di4RWVpNwByyFJRd7D65eznwSMEcOqJfeTJW5OstR8PX2ANFYHrNVG0QdO%2BmzHHXZXXmCPUbI7vh2mQm6WSbIM0%2B2NwxOZ%2BiWZ%2BDLnfWZ7UviDt19M3KqAj6wp8%2BFoDcQJtKvwHulOS26DmSx0nrHB7cTpkQged%2FQo3rkpuvGD90K%2FnVn9KhmGxH211A4Co1YwvqreSYVE7eu4I4YyTkD4CeSSFfXXLokCF3HbMAOoFYqNLppMhOWDMidpgpBf0cIJwbOBWFjmNy5yduqPRQxMWiVQrR3K5Rzhg9zi%2BbczpOI1x7INpC9lHD9QxpBQD%2BR7NIe7t7YijhU8eswVgg994s4atzRjq7o29C6%2B1XZYv5gw0ehAWwQh%2BONqZnI0OTW6Zm2gFNr9YZqdPgjqNHYk7pnFgUwyamrvgY6pgGlnUATTK1nfUQuu3V7ONP4zsTBhcD5bOYF%2F%2F2QTJfHlwPEW9UgOFN%2FG2RRHMiwaK2EIrSvaZ%2FZfPsFy%2B6F3iyZSRrt0KkHtM7hO%2BpkrGK3Hb197sj0KqlTG2rzAS%2FDHBGGqzDgqWMJ6TyoiFgRf9mFJkAUfn9EQcEHJiTfFfe1Chn3%2BSxKWnvH89%2BjKyjnklC1%2BWDBEKRpd43OwwIfZ11d3k830v8D&X-Amz-Signature=496036758169542d551b70ecb15401d956a716bb6e5392b005de308dfa8725d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFPFCDF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4nDMFXzna%2BNFT8i%2BIeRpbPAhMs%2F%2B%2BwZ%2FA%2FiJfujgeGAiB4HX4Ocjx7AbnDMVPO3MAeiI9QDUEmrQnAhX9uD7rZbyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR46G3OY%2FNhvG9GqsKtwDtGZMQMCZpAzAKiqT1UKv8Xm5Cn%2Fr8r3t3bG56vs7gDw%2FeKNMvhAECC7juMn1hr8jkncRDkTCYTCZj09s9P2tLTZ0cg%2BqHvAjpYJoIE09CHwwP6mo4GF4ogVpxDi%2BMZuXIUWsEuMy%2FrOtW24qBQ6ZBDWwH0Kxp7HT184RwcvcrpBGCye%2FuwrrChZtI4PAlCDK3x8Xw8Ux9m5lOflN1nOEhLsMj95SIZ0di4RWVpNwByyFJRd7D65eznwSMEcOqJfeTJW5OstR8PX2ANFYHrNVG0QdO%2BmzHHXZXXmCPUbI7vh2mQm6WSbIM0%2B2NwxOZ%2BiWZ%2BDLnfWZ7UviDt19M3KqAj6wp8%2BFoDcQJtKvwHulOS26DmSx0nrHB7cTpkQged%2FQo3rkpuvGD90K%2FnVn9KhmGxH211A4Co1YwvqreSYVE7eu4I4YyTkD4CeSSFfXXLokCF3HbMAOoFYqNLppMhOWDMidpgpBf0cIJwbOBWFjmNy5yduqPRQxMWiVQrR3K5Rzhg9zi%2BbczpOI1x7INpC9lHD9QxpBQD%2BR7NIe7t7YijhU8eswVgg994s4atzRjq7o29C6%2B1XZYv5gw0ehAWwQh%2BONqZnI0OTW6Zm2gFNr9YZqdPgjqNHYk7pnFgUwyamrvgY6pgGlnUATTK1nfUQuu3V7ONP4zsTBhcD5bOYF%2F%2F2QTJfHlwPEW9UgOFN%2FG2RRHMiwaK2EIrSvaZ%2FZfPsFy%2B6F3iyZSRrt0KkHtM7hO%2BpkrGK3Hb197sj0KqlTG2rzAS%2FDHBGGqzDgqWMJ6TyoiFgRf9mFJkAUfn9EQcEHJiTfFfe1Chn3%2BSxKWnvH89%2BjKyjnklC1%2BWDBEKRpd43OwwIfZ11d3k830v8D&X-Amz-Signature=d0f9c65a23702be98493fb29e7eb45c3e64f12e43f895a7d2868510da3dd1c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFPFCDF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4nDMFXzna%2BNFT8i%2BIeRpbPAhMs%2F%2B%2BwZ%2FA%2FiJfujgeGAiB4HX4Ocjx7AbnDMVPO3MAeiI9QDUEmrQnAhX9uD7rZbyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR46G3OY%2FNhvG9GqsKtwDtGZMQMCZpAzAKiqT1UKv8Xm5Cn%2Fr8r3t3bG56vs7gDw%2FeKNMvhAECC7juMn1hr8jkncRDkTCYTCZj09s9P2tLTZ0cg%2BqHvAjpYJoIE09CHwwP6mo4GF4ogVpxDi%2BMZuXIUWsEuMy%2FrOtW24qBQ6ZBDWwH0Kxp7HT184RwcvcrpBGCye%2FuwrrChZtI4PAlCDK3x8Xw8Ux9m5lOflN1nOEhLsMj95SIZ0di4RWVpNwByyFJRd7D65eznwSMEcOqJfeTJW5OstR8PX2ANFYHrNVG0QdO%2BmzHHXZXXmCPUbI7vh2mQm6WSbIM0%2B2NwxOZ%2BiWZ%2BDLnfWZ7UviDt19M3KqAj6wp8%2BFoDcQJtKvwHulOS26DmSx0nrHB7cTpkQged%2FQo3rkpuvGD90K%2FnVn9KhmGxH211A4Co1YwvqreSYVE7eu4I4YyTkD4CeSSFfXXLokCF3HbMAOoFYqNLppMhOWDMidpgpBf0cIJwbOBWFjmNy5yduqPRQxMWiVQrR3K5Rzhg9zi%2BbczpOI1x7INpC9lHD9QxpBQD%2BR7NIe7t7YijhU8eswVgg994s4atzRjq7o29C6%2B1XZYv5gw0ehAWwQh%2BONqZnI0OTW6Zm2gFNr9YZqdPgjqNHYk7pnFgUwyamrvgY6pgGlnUATTK1nfUQuu3V7ONP4zsTBhcD5bOYF%2F%2F2QTJfHlwPEW9UgOFN%2FG2RRHMiwaK2EIrSvaZ%2FZfPsFy%2B6F3iyZSRrt0KkHtM7hO%2BpkrGK3Hb197sj0KqlTG2rzAS%2FDHBGGqzDgqWMJ6TyoiFgRf9mFJkAUfn9EQcEHJiTfFfe1Chn3%2BSxKWnvH89%2BjKyjnklC1%2BWDBEKRpd43OwwIfZ11d3k830v8D&X-Amz-Signature=35b58f0473886624ca8cba729036339b40b575b991da58474347d4d5a88acdfe&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFPFCDF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4nDMFXzna%2BNFT8i%2BIeRpbPAhMs%2F%2B%2BwZ%2FA%2FiJfujgeGAiB4HX4Ocjx7AbnDMVPO3MAeiI9QDUEmrQnAhX9uD7rZbyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR46G3OY%2FNhvG9GqsKtwDtGZMQMCZpAzAKiqT1UKv8Xm5Cn%2Fr8r3t3bG56vs7gDw%2FeKNMvhAECC7juMn1hr8jkncRDkTCYTCZj09s9P2tLTZ0cg%2BqHvAjpYJoIE09CHwwP6mo4GF4ogVpxDi%2BMZuXIUWsEuMy%2FrOtW24qBQ6ZBDWwH0Kxp7HT184RwcvcrpBGCye%2FuwrrChZtI4PAlCDK3x8Xw8Ux9m5lOflN1nOEhLsMj95SIZ0di4RWVpNwByyFJRd7D65eznwSMEcOqJfeTJW5OstR8PX2ANFYHrNVG0QdO%2BmzHHXZXXmCPUbI7vh2mQm6WSbIM0%2B2NwxOZ%2BiWZ%2BDLnfWZ7UviDt19M3KqAj6wp8%2BFoDcQJtKvwHulOS26DmSx0nrHB7cTpkQged%2FQo3rkpuvGD90K%2FnVn9KhmGxH211A4Co1YwvqreSYVE7eu4I4YyTkD4CeSSFfXXLokCF3HbMAOoFYqNLppMhOWDMidpgpBf0cIJwbOBWFjmNy5yduqPRQxMWiVQrR3K5Rzhg9zi%2BbczpOI1x7INpC9lHD9QxpBQD%2BR7NIe7t7YijhU8eswVgg994s4atzRjq7o29C6%2B1XZYv5gw0ehAWwQh%2BONqZnI0OTW6Zm2gFNr9YZqdPgjqNHYk7pnFgUwyamrvgY6pgGlnUATTK1nfUQuu3V7ONP4zsTBhcD5bOYF%2F%2F2QTJfHlwPEW9UgOFN%2FG2RRHMiwaK2EIrSvaZ%2FZfPsFy%2B6F3iyZSRrt0KkHtM7hO%2BpkrGK3Hb197sj0KqlTG2rzAS%2FDHBGGqzDgqWMJ6TyoiFgRf9mFJkAUfn9EQcEHJiTfFfe1Chn3%2BSxKWnvH89%2BjKyjnklC1%2BWDBEKRpd43OwwIfZ11d3k830v8D&X-Amz-Signature=cfacf72785e48c0385154568ad2aa82f6702821cbb9fef15c3072753fce5e9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFPFCDF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4nDMFXzna%2BNFT8i%2BIeRpbPAhMs%2F%2B%2BwZ%2FA%2FiJfujgeGAiB4HX4Ocjx7AbnDMVPO3MAeiI9QDUEmrQnAhX9uD7rZbyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR46G3OY%2FNhvG9GqsKtwDtGZMQMCZpAzAKiqT1UKv8Xm5Cn%2Fr8r3t3bG56vs7gDw%2FeKNMvhAECC7juMn1hr8jkncRDkTCYTCZj09s9P2tLTZ0cg%2BqHvAjpYJoIE09CHwwP6mo4GF4ogVpxDi%2BMZuXIUWsEuMy%2FrOtW24qBQ6ZBDWwH0Kxp7HT184RwcvcrpBGCye%2FuwrrChZtI4PAlCDK3x8Xw8Ux9m5lOflN1nOEhLsMj95SIZ0di4RWVpNwByyFJRd7D65eznwSMEcOqJfeTJW5OstR8PX2ANFYHrNVG0QdO%2BmzHHXZXXmCPUbI7vh2mQm6WSbIM0%2B2NwxOZ%2BiWZ%2BDLnfWZ7UviDt19M3KqAj6wp8%2BFoDcQJtKvwHulOS26DmSx0nrHB7cTpkQged%2FQo3rkpuvGD90K%2FnVn9KhmGxH211A4Co1YwvqreSYVE7eu4I4YyTkD4CeSSFfXXLokCF3HbMAOoFYqNLppMhOWDMidpgpBf0cIJwbOBWFjmNy5yduqPRQxMWiVQrR3K5Rzhg9zi%2BbczpOI1x7INpC9lHD9QxpBQD%2BR7NIe7t7YijhU8eswVgg994s4atzRjq7o29C6%2B1XZYv5gw0ehAWwQh%2BONqZnI0OTW6Zm2gFNr9YZqdPgjqNHYk7pnFgUwyamrvgY6pgGlnUATTK1nfUQuu3V7ONP4zsTBhcD5bOYF%2F%2F2QTJfHlwPEW9UgOFN%2FG2RRHMiwaK2EIrSvaZ%2FZfPsFy%2B6F3iyZSRrt0KkHtM7hO%2BpkrGK3Hb197sj0KqlTG2rzAS%2FDHBGGqzDgqWMJ6TyoiFgRf9mFJkAUfn9EQcEHJiTfFfe1Chn3%2BSxKWnvH89%2BjKyjnklC1%2BWDBEKRpd43OwwIfZ11d3k830v8D&X-Amz-Signature=c3ea7b34e96b999a9108b191c868b1500d0e449963fdea16760052fc101fbe5d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFPFCDF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4nDMFXzna%2BNFT8i%2BIeRpbPAhMs%2F%2B%2BwZ%2FA%2FiJfujgeGAiB4HX4Ocjx7AbnDMVPO3MAeiI9QDUEmrQnAhX9uD7rZbyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR46G3OY%2FNhvG9GqsKtwDtGZMQMCZpAzAKiqT1UKv8Xm5Cn%2Fr8r3t3bG56vs7gDw%2FeKNMvhAECC7juMn1hr8jkncRDkTCYTCZj09s9P2tLTZ0cg%2BqHvAjpYJoIE09CHwwP6mo4GF4ogVpxDi%2BMZuXIUWsEuMy%2FrOtW24qBQ6ZBDWwH0Kxp7HT184RwcvcrpBGCye%2FuwrrChZtI4PAlCDK3x8Xw8Ux9m5lOflN1nOEhLsMj95SIZ0di4RWVpNwByyFJRd7D65eznwSMEcOqJfeTJW5OstR8PX2ANFYHrNVG0QdO%2BmzHHXZXXmCPUbI7vh2mQm6WSbIM0%2B2NwxOZ%2BiWZ%2BDLnfWZ7UviDt19M3KqAj6wp8%2BFoDcQJtKvwHulOS26DmSx0nrHB7cTpkQged%2FQo3rkpuvGD90K%2FnVn9KhmGxH211A4Co1YwvqreSYVE7eu4I4YyTkD4CeSSFfXXLokCF3HbMAOoFYqNLppMhOWDMidpgpBf0cIJwbOBWFjmNy5yduqPRQxMWiVQrR3K5Rzhg9zi%2BbczpOI1x7INpC9lHD9QxpBQD%2BR7NIe7t7YijhU8eswVgg994s4atzRjq7o29C6%2B1XZYv5gw0ehAWwQh%2BONqZnI0OTW6Zm2gFNr9YZqdPgjqNHYk7pnFgUwyamrvgY6pgGlnUATTK1nfUQuu3V7ONP4zsTBhcD5bOYF%2F%2F2QTJfHlwPEW9UgOFN%2FG2RRHMiwaK2EIrSvaZ%2FZfPsFy%2B6F3iyZSRrt0KkHtM7hO%2BpkrGK3Hb197sj0KqlTG2rzAS%2FDHBGGqzDgqWMJ6TyoiFgRf9mFJkAUfn9EQcEHJiTfFfe1Chn3%2BSxKWnvH89%2BjKyjnklC1%2BWDBEKRpd43OwwIfZ11d3k830v8D&X-Amz-Signature=3820556e3b63b9a207c74703517bf5c5303f56df6892a4f874d4f346a447067f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFPFCDF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4nDMFXzna%2BNFT8i%2BIeRpbPAhMs%2F%2B%2BwZ%2FA%2FiJfujgeGAiB4HX4Ocjx7AbnDMVPO3MAeiI9QDUEmrQnAhX9uD7rZbyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR46G3OY%2FNhvG9GqsKtwDtGZMQMCZpAzAKiqT1UKv8Xm5Cn%2Fr8r3t3bG56vs7gDw%2FeKNMvhAECC7juMn1hr8jkncRDkTCYTCZj09s9P2tLTZ0cg%2BqHvAjpYJoIE09CHwwP6mo4GF4ogVpxDi%2BMZuXIUWsEuMy%2FrOtW24qBQ6ZBDWwH0Kxp7HT184RwcvcrpBGCye%2FuwrrChZtI4PAlCDK3x8Xw8Ux9m5lOflN1nOEhLsMj95SIZ0di4RWVpNwByyFJRd7D65eznwSMEcOqJfeTJW5OstR8PX2ANFYHrNVG0QdO%2BmzHHXZXXmCPUbI7vh2mQm6WSbIM0%2B2NwxOZ%2BiWZ%2BDLnfWZ7UviDt19M3KqAj6wp8%2BFoDcQJtKvwHulOS26DmSx0nrHB7cTpkQged%2FQo3rkpuvGD90K%2FnVn9KhmGxH211A4Co1YwvqreSYVE7eu4I4YyTkD4CeSSFfXXLokCF3HbMAOoFYqNLppMhOWDMidpgpBf0cIJwbOBWFjmNy5yduqPRQxMWiVQrR3K5Rzhg9zi%2BbczpOI1x7INpC9lHD9QxpBQD%2BR7NIe7t7YijhU8eswVgg994s4atzRjq7o29C6%2B1XZYv5gw0ehAWwQh%2BONqZnI0OTW6Zm2gFNr9YZqdPgjqNHYk7pnFgUwyamrvgY6pgGlnUATTK1nfUQuu3V7ONP4zsTBhcD5bOYF%2F%2F2QTJfHlwPEW9UgOFN%2FG2RRHMiwaK2EIrSvaZ%2FZfPsFy%2B6F3iyZSRrt0KkHtM7hO%2BpkrGK3Hb197sj0KqlTG2rzAS%2FDHBGGqzDgqWMJ6TyoiFgRf9mFJkAUfn9EQcEHJiTfFfe1Chn3%2BSxKWnvH89%2BjKyjnklC1%2BWDBEKRpd43OwwIfZ11d3k830v8D&X-Amz-Signature=25c39e1488fb84914eaf5f90e98dd88c9d26f693867d416e513b2e010b3043e2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
