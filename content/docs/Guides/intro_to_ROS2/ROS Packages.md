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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLOXXDP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCSz%2BHAyu3jTxgOV1LnzDAxoXqoTJZXKWzL6H5njBg%2FNQIgdkX%2BHUOto1SC14bMiIdQNKC%2FJu5WCy8TM3rj4qOSeoQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDE6bLaEb2%2BOyzWD9sircAwYqpdNJF4fLEeETs2XnPSKWhEwl8O2MjOBvmpV%2FcbshrgA6vJFJ65ZGRCf3o4Rdfdy4rmY2y91CzftTMIgmn8NUl3k8dvq00V7l%2BMVulpxEOVe4by9KH7VczoM3AHmrWRE9bwHJ9WLl5hevk%2FniUuDrJGQ4C3hI8dqfRdqywMF4B6B%2B6PbjAd17AuR%2F3Yka8nJiLBrxzbZEWKeRc6LCbczC%2BjldqoA69WOqyJVuH3jERCWy8F6biBrO0u3vC8j5jROYkNPZ69I2txqHhwoR2Xje2FVcOWc5zIeA4r5VJfWdOq0LCt40ALpJ4Ll1iK89jkV6M%2BoY2WhOxwSr%2FwUAmNMbincJ0Jrz2e%2B%2FcULW4hphMSULcoesI%2BHsch5GyhQc5D2QenttjxnZLWzuP2Jlei%2Bj5GGhGM2%2BfCoRCY7ao5IexFen23PlBRsbqpV9rEZP7FxDr0pvGFQfKU%2FZpR8piddIVwFG1w%2FJYLA%2FGaXBxacO%2BS13zyBZru8wPLDEtaJCO3vGRefL6SOiTmF%2BJsUZrh8xQw%2FluEisObQwYy8m6C%2F35YuruYs0SHMkqZM2b04mAn%2BPigNnh1PeXpZOZ1mPffy4VzEnLDOI8Ge6sJdm2JTILgYQx84%2Br%2BP6IQgbMK2q8sIGOqUBMcBQCIs3mzq%2F8dW6PLdMLjNbhTC4FDzEEBSHF9o0Y66rO%2BNFnolDrAqU22dRBAAd8Ls%2FOXdq5Mbp92o4v%2FeLdxIFAlziepGZvsylwEPX6jISW7DqDV%2FSowneecGiCllUYST7CDV233Vjsqi%2BTSj69zldKyACCeEGOuZfndbP%2Byi7u3YOjXFQ42B4e7jEaruQ0u01q4%2FHfVHZWGiVFC9G05pnh0%2BB&X-Amz-Signature=cf9e50f4eca8f8fbcaddde4e103f1e22d521b7bfaae5c7dc08663e61d9008510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLOXXDP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCSz%2BHAyu3jTxgOV1LnzDAxoXqoTJZXKWzL6H5njBg%2FNQIgdkX%2BHUOto1SC14bMiIdQNKC%2FJu5WCy8TM3rj4qOSeoQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDE6bLaEb2%2BOyzWD9sircAwYqpdNJF4fLEeETs2XnPSKWhEwl8O2MjOBvmpV%2FcbshrgA6vJFJ65ZGRCf3o4Rdfdy4rmY2y91CzftTMIgmn8NUl3k8dvq00V7l%2BMVulpxEOVe4by9KH7VczoM3AHmrWRE9bwHJ9WLl5hevk%2FniUuDrJGQ4C3hI8dqfRdqywMF4B6B%2B6PbjAd17AuR%2F3Yka8nJiLBrxzbZEWKeRc6LCbczC%2BjldqoA69WOqyJVuH3jERCWy8F6biBrO0u3vC8j5jROYkNPZ69I2txqHhwoR2Xje2FVcOWc5zIeA4r5VJfWdOq0LCt40ALpJ4Ll1iK89jkV6M%2BoY2WhOxwSr%2FwUAmNMbincJ0Jrz2e%2B%2FcULW4hphMSULcoesI%2BHsch5GyhQc5D2QenttjxnZLWzuP2Jlei%2Bj5GGhGM2%2BfCoRCY7ao5IexFen23PlBRsbqpV9rEZP7FxDr0pvGFQfKU%2FZpR8piddIVwFG1w%2FJYLA%2FGaXBxacO%2BS13zyBZru8wPLDEtaJCO3vGRefL6SOiTmF%2BJsUZrh8xQw%2FluEisObQwYy8m6C%2F35YuruYs0SHMkqZM2b04mAn%2BPigNnh1PeXpZOZ1mPffy4VzEnLDOI8Ge6sJdm2JTILgYQx84%2Br%2BP6IQgbMK2q8sIGOqUBMcBQCIs3mzq%2F8dW6PLdMLjNbhTC4FDzEEBSHF9o0Y66rO%2BNFnolDrAqU22dRBAAd8Ls%2FOXdq5Mbp92o4v%2FeLdxIFAlziepGZvsylwEPX6jISW7DqDV%2FSowneecGiCllUYST7CDV233Vjsqi%2BTSj69zldKyACCeEGOuZfndbP%2Byi7u3YOjXFQ42B4e7jEaruQ0u01q4%2FHfVHZWGiVFC9G05pnh0%2BB&X-Amz-Signature=92e5cc78bef93b49796d3269d9797e24937777362ae6bd077b1d86759d110102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLOXXDP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCSz%2BHAyu3jTxgOV1LnzDAxoXqoTJZXKWzL6H5njBg%2FNQIgdkX%2BHUOto1SC14bMiIdQNKC%2FJu5WCy8TM3rj4qOSeoQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDE6bLaEb2%2BOyzWD9sircAwYqpdNJF4fLEeETs2XnPSKWhEwl8O2MjOBvmpV%2FcbshrgA6vJFJ65ZGRCf3o4Rdfdy4rmY2y91CzftTMIgmn8NUl3k8dvq00V7l%2BMVulpxEOVe4by9KH7VczoM3AHmrWRE9bwHJ9WLl5hevk%2FniUuDrJGQ4C3hI8dqfRdqywMF4B6B%2B6PbjAd17AuR%2F3Yka8nJiLBrxzbZEWKeRc6LCbczC%2BjldqoA69WOqyJVuH3jERCWy8F6biBrO0u3vC8j5jROYkNPZ69I2txqHhwoR2Xje2FVcOWc5zIeA4r5VJfWdOq0LCt40ALpJ4Ll1iK89jkV6M%2BoY2WhOxwSr%2FwUAmNMbincJ0Jrz2e%2B%2FcULW4hphMSULcoesI%2BHsch5GyhQc5D2QenttjxnZLWzuP2Jlei%2Bj5GGhGM2%2BfCoRCY7ao5IexFen23PlBRsbqpV9rEZP7FxDr0pvGFQfKU%2FZpR8piddIVwFG1w%2FJYLA%2FGaXBxacO%2BS13zyBZru8wPLDEtaJCO3vGRefL6SOiTmF%2BJsUZrh8xQw%2FluEisObQwYy8m6C%2F35YuruYs0SHMkqZM2b04mAn%2BPigNnh1PeXpZOZ1mPffy4VzEnLDOI8Ge6sJdm2JTILgYQx84%2Br%2BP6IQgbMK2q8sIGOqUBMcBQCIs3mzq%2F8dW6PLdMLjNbhTC4FDzEEBSHF9o0Y66rO%2BNFnolDrAqU22dRBAAd8Ls%2FOXdq5Mbp92o4v%2FeLdxIFAlziepGZvsylwEPX6jISW7DqDV%2FSowneecGiCllUYST7CDV233Vjsqi%2BTSj69zldKyACCeEGOuZfndbP%2Byi7u3YOjXFQ42B4e7jEaruQ0u01q4%2FHfVHZWGiVFC9G05pnh0%2BB&X-Amz-Signature=dc417af19cc2fef2fc1d5ca4841b4a0ea6cbaf0a18c1a8880085c19a3e9825f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLOXXDP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCSz%2BHAyu3jTxgOV1LnzDAxoXqoTJZXKWzL6H5njBg%2FNQIgdkX%2BHUOto1SC14bMiIdQNKC%2FJu5WCy8TM3rj4qOSeoQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDE6bLaEb2%2BOyzWD9sircAwYqpdNJF4fLEeETs2XnPSKWhEwl8O2MjOBvmpV%2FcbshrgA6vJFJ65ZGRCf3o4Rdfdy4rmY2y91CzftTMIgmn8NUl3k8dvq00V7l%2BMVulpxEOVe4by9KH7VczoM3AHmrWRE9bwHJ9WLl5hevk%2FniUuDrJGQ4C3hI8dqfRdqywMF4B6B%2B6PbjAd17AuR%2F3Yka8nJiLBrxzbZEWKeRc6LCbczC%2BjldqoA69WOqyJVuH3jERCWy8F6biBrO0u3vC8j5jROYkNPZ69I2txqHhwoR2Xje2FVcOWc5zIeA4r5VJfWdOq0LCt40ALpJ4Ll1iK89jkV6M%2BoY2WhOxwSr%2FwUAmNMbincJ0Jrz2e%2B%2FcULW4hphMSULcoesI%2BHsch5GyhQc5D2QenttjxnZLWzuP2Jlei%2Bj5GGhGM2%2BfCoRCY7ao5IexFen23PlBRsbqpV9rEZP7FxDr0pvGFQfKU%2FZpR8piddIVwFG1w%2FJYLA%2FGaXBxacO%2BS13zyBZru8wPLDEtaJCO3vGRefL6SOiTmF%2BJsUZrh8xQw%2FluEisObQwYy8m6C%2F35YuruYs0SHMkqZM2b04mAn%2BPigNnh1PeXpZOZ1mPffy4VzEnLDOI8Ge6sJdm2JTILgYQx84%2Br%2BP6IQgbMK2q8sIGOqUBMcBQCIs3mzq%2F8dW6PLdMLjNbhTC4FDzEEBSHF9o0Y66rO%2BNFnolDrAqU22dRBAAd8Ls%2FOXdq5Mbp92o4v%2FeLdxIFAlziepGZvsylwEPX6jISW7DqDV%2FSowneecGiCllUYST7CDV233Vjsqi%2BTSj69zldKyACCeEGOuZfndbP%2Byi7u3YOjXFQ42B4e7jEaruQ0u01q4%2FHfVHZWGiVFC9G05pnh0%2BB&X-Amz-Signature=054a7fcfd3563ca231aa0041f834ebbe3b93f37dc124d531bafc52b25fa37ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLOXXDP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCSz%2BHAyu3jTxgOV1LnzDAxoXqoTJZXKWzL6H5njBg%2FNQIgdkX%2BHUOto1SC14bMiIdQNKC%2FJu5WCy8TM3rj4qOSeoQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDE6bLaEb2%2BOyzWD9sircAwYqpdNJF4fLEeETs2XnPSKWhEwl8O2MjOBvmpV%2FcbshrgA6vJFJ65ZGRCf3o4Rdfdy4rmY2y91CzftTMIgmn8NUl3k8dvq00V7l%2BMVulpxEOVe4by9KH7VczoM3AHmrWRE9bwHJ9WLl5hevk%2FniUuDrJGQ4C3hI8dqfRdqywMF4B6B%2B6PbjAd17AuR%2F3Yka8nJiLBrxzbZEWKeRc6LCbczC%2BjldqoA69WOqyJVuH3jERCWy8F6biBrO0u3vC8j5jROYkNPZ69I2txqHhwoR2Xje2FVcOWc5zIeA4r5VJfWdOq0LCt40ALpJ4Ll1iK89jkV6M%2BoY2WhOxwSr%2FwUAmNMbincJ0Jrz2e%2B%2FcULW4hphMSULcoesI%2BHsch5GyhQc5D2QenttjxnZLWzuP2Jlei%2Bj5GGhGM2%2BfCoRCY7ao5IexFen23PlBRsbqpV9rEZP7FxDr0pvGFQfKU%2FZpR8piddIVwFG1w%2FJYLA%2FGaXBxacO%2BS13zyBZru8wPLDEtaJCO3vGRefL6SOiTmF%2BJsUZrh8xQw%2FluEisObQwYy8m6C%2F35YuruYs0SHMkqZM2b04mAn%2BPigNnh1PeXpZOZ1mPffy4VzEnLDOI8Ge6sJdm2JTILgYQx84%2Br%2BP6IQgbMK2q8sIGOqUBMcBQCIs3mzq%2F8dW6PLdMLjNbhTC4FDzEEBSHF9o0Y66rO%2BNFnolDrAqU22dRBAAd8Ls%2FOXdq5Mbp92o4v%2FeLdxIFAlziepGZvsylwEPX6jISW7DqDV%2FSowneecGiCllUYST7CDV233Vjsqi%2BTSj69zldKyACCeEGOuZfndbP%2Byi7u3YOjXFQ42B4e7jEaruQ0u01q4%2FHfVHZWGiVFC9G05pnh0%2BB&X-Amz-Signature=a8cd0bb8881c49eb103472ada23b3f407b050482994685b5f8d20b47b3b82177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLOXXDP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCSz%2BHAyu3jTxgOV1LnzDAxoXqoTJZXKWzL6H5njBg%2FNQIgdkX%2BHUOto1SC14bMiIdQNKC%2FJu5WCy8TM3rj4qOSeoQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDE6bLaEb2%2BOyzWD9sircAwYqpdNJF4fLEeETs2XnPSKWhEwl8O2MjOBvmpV%2FcbshrgA6vJFJ65ZGRCf3o4Rdfdy4rmY2y91CzftTMIgmn8NUl3k8dvq00V7l%2BMVulpxEOVe4by9KH7VczoM3AHmrWRE9bwHJ9WLl5hevk%2FniUuDrJGQ4C3hI8dqfRdqywMF4B6B%2B6PbjAd17AuR%2F3Yka8nJiLBrxzbZEWKeRc6LCbczC%2BjldqoA69WOqyJVuH3jERCWy8F6biBrO0u3vC8j5jROYkNPZ69I2txqHhwoR2Xje2FVcOWc5zIeA4r5VJfWdOq0LCt40ALpJ4Ll1iK89jkV6M%2BoY2WhOxwSr%2FwUAmNMbincJ0Jrz2e%2B%2FcULW4hphMSULcoesI%2BHsch5GyhQc5D2QenttjxnZLWzuP2Jlei%2Bj5GGhGM2%2BfCoRCY7ao5IexFen23PlBRsbqpV9rEZP7FxDr0pvGFQfKU%2FZpR8piddIVwFG1w%2FJYLA%2FGaXBxacO%2BS13zyBZru8wPLDEtaJCO3vGRefL6SOiTmF%2BJsUZrh8xQw%2FluEisObQwYy8m6C%2F35YuruYs0SHMkqZM2b04mAn%2BPigNnh1PeXpZOZ1mPffy4VzEnLDOI8Ge6sJdm2JTILgYQx84%2Br%2BP6IQgbMK2q8sIGOqUBMcBQCIs3mzq%2F8dW6PLdMLjNbhTC4FDzEEBSHF9o0Y66rO%2BNFnolDrAqU22dRBAAd8Ls%2FOXdq5Mbp92o4v%2FeLdxIFAlziepGZvsylwEPX6jISW7DqDV%2FSowneecGiCllUYST7CDV233Vjsqi%2BTSj69zldKyACCeEGOuZfndbP%2Byi7u3YOjXFQ42B4e7jEaruQ0u01q4%2FHfVHZWGiVFC9G05pnh0%2BB&X-Amz-Signature=f839e52733bfd2eb9a88ba33f74456a058c4d215cf18b247fe262956cf5002f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLOXXDP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCSz%2BHAyu3jTxgOV1LnzDAxoXqoTJZXKWzL6H5njBg%2FNQIgdkX%2BHUOto1SC14bMiIdQNKC%2FJu5WCy8TM3rj4qOSeoQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDE6bLaEb2%2BOyzWD9sircAwYqpdNJF4fLEeETs2XnPSKWhEwl8O2MjOBvmpV%2FcbshrgA6vJFJ65ZGRCf3o4Rdfdy4rmY2y91CzftTMIgmn8NUl3k8dvq00V7l%2BMVulpxEOVe4by9KH7VczoM3AHmrWRE9bwHJ9WLl5hevk%2FniUuDrJGQ4C3hI8dqfRdqywMF4B6B%2B6PbjAd17AuR%2F3Yka8nJiLBrxzbZEWKeRc6LCbczC%2BjldqoA69WOqyJVuH3jERCWy8F6biBrO0u3vC8j5jROYkNPZ69I2txqHhwoR2Xje2FVcOWc5zIeA4r5VJfWdOq0LCt40ALpJ4Ll1iK89jkV6M%2BoY2WhOxwSr%2FwUAmNMbincJ0Jrz2e%2B%2FcULW4hphMSULcoesI%2BHsch5GyhQc5D2QenttjxnZLWzuP2Jlei%2Bj5GGhGM2%2BfCoRCY7ao5IexFen23PlBRsbqpV9rEZP7FxDr0pvGFQfKU%2FZpR8piddIVwFG1w%2FJYLA%2FGaXBxacO%2BS13zyBZru8wPLDEtaJCO3vGRefL6SOiTmF%2BJsUZrh8xQw%2FluEisObQwYy8m6C%2F35YuruYs0SHMkqZM2b04mAn%2BPigNnh1PeXpZOZ1mPffy4VzEnLDOI8Ge6sJdm2JTILgYQx84%2Br%2BP6IQgbMK2q8sIGOqUBMcBQCIs3mzq%2F8dW6PLdMLjNbhTC4FDzEEBSHF9o0Y66rO%2BNFnolDrAqU22dRBAAd8Ls%2FOXdq5Mbp92o4v%2FeLdxIFAlziepGZvsylwEPX6jISW7DqDV%2FSowneecGiCllUYST7CDV233Vjsqi%2BTSj69zldKyACCeEGOuZfndbP%2Byi7u3YOjXFQ42B4e7jEaruQ0u01q4%2FHfVHZWGiVFC9G05pnh0%2BB&X-Amz-Signature=c7e1c5cf6a623d4a34fdec7aabeeaa2cb20acbc32304106220723e4aad6c8424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
