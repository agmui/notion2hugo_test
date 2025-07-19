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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GENXQC3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXIi21Cc1aOKJj7sr2GgLwEE6dwxSRCeHnZVkBU2vpVAiEAtq2Zb0yR9XYla4Yb%2FGF55kT5oJ0Tz66J096hAid%2FdN4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNTTuwiNpBi3A9wuSrcAxpZGRvAD7XQyF7A47lLKxz7xlsPT6sudu3flyOLL5o6gc34uc70m6kOiAwJLKpSnf1xreVkpHHrEJUskbxFWrogDjkqmsbe55j0alTlFppGsPsohDU1w9YI2PCwLFebbdm%2Fl5nXV%2BbrZjVSR0NDNlOGmdxxcbuUnsHSjPQjr3mc%2FdIHbU63feGBSWLgeK2iG8Ym8fcnlmN53XpQzJ%2FoG%2FGyBjSMfsmOG8bBevZARB4s2LR7xwuY%2BcCFRbAyx1IZzvz%2Fga%2B5rJdGCe7pCUyzrGPR3IghVw2ns0nRpRql%2FVtuu1c4zusQw0x%2By%2FYg9UA5ZizKJbOUiGI27XbmbmnxD4EN9Q540hY%2BEsaZoom2n910K9QG3amBhss2SsyBvw6FXYgB3Slfu8Oa9%2BR3oxs8LUhhZbZgETkxeaR8grUwprmrosh46JwOlVrDqkhU1QGqaIhFN3MOav8dWGRiaBcS93NLknedoA7fGePCghSTplwY22ucvcrG4qLC6Q4MG1PMPhOXK3oGR8aTTE0GPYttYBt2OQgJheN0AzXo4UFMHB1zdMeC5bAEvOGxwCtnSX1Fe4RwzSJw6c3jIumMNzs2Z8wizbcxmz1J0V4HFrZbgIWQE4V2Da8DFoLKG9BkMKzF7MMGOqUBWbJe%2BRch4kb3pLMHNl%2Bj2ifDESIU96lJ73gTqiPLQs6NU%2B6F6db9H3E59dhoXRaUIbbHXQoMI%2FVGyECtBo3CnUoXS10zsR1rKUKZu%2Bn05GVg54BCBjnZ20hV1LiDvG%2Bg5May2RyYsjuEc5TPd5u6cEnvRadd15sCronJ%2FqLSNq%2FgWwFhGkd597%2F0upVsAma%2FVwVlczDHu9lIogqd59jqf7wI8SD6&X-Amz-Signature=893b0eb62f15bef0cf681ac920d1e11bb9b37948abf164509a2f1ad50dc0230c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GENXQC3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXIi21Cc1aOKJj7sr2GgLwEE6dwxSRCeHnZVkBU2vpVAiEAtq2Zb0yR9XYla4Yb%2FGF55kT5oJ0Tz66J096hAid%2FdN4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNTTuwiNpBi3A9wuSrcAxpZGRvAD7XQyF7A47lLKxz7xlsPT6sudu3flyOLL5o6gc34uc70m6kOiAwJLKpSnf1xreVkpHHrEJUskbxFWrogDjkqmsbe55j0alTlFppGsPsohDU1w9YI2PCwLFebbdm%2Fl5nXV%2BbrZjVSR0NDNlOGmdxxcbuUnsHSjPQjr3mc%2FdIHbU63feGBSWLgeK2iG8Ym8fcnlmN53XpQzJ%2FoG%2FGyBjSMfsmOG8bBevZARB4s2LR7xwuY%2BcCFRbAyx1IZzvz%2Fga%2B5rJdGCe7pCUyzrGPR3IghVw2ns0nRpRql%2FVtuu1c4zusQw0x%2By%2FYg9UA5ZizKJbOUiGI27XbmbmnxD4EN9Q540hY%2BEsaZoom2n910K9QG3amBhss2SsyBvw6FXYgB3Slfu8Oa9%2BR3oxs8LUhhZbZgETkxeaR8grUwprmrosh46JwOlVrDqkhU1QGqaIhFN3MOav8dWGRiaBcS93NLknedoA7fGePCghSTplwY22ucvcrG4qLC6Q4MG1PMPhOXK3oGR8aTTE0GPYttYBt2OQgJheN0AzXo4UFMHB1zdMeC5bAEvOGxwCtnSX1Fe4RwzSJw6c3jIumMNzs2Z8wizbcxmz1J0V4HFrZbgIWQE4V2Da8DFoLKG9BkMKzF7MMGOqUBWbJe%2BRch4kb3pLMHNl%2Bj2ifDESIU96lJ73gTqiPLQs6NU%2B6F6db9H3E59dhoXRaUIbbHXQoMI%2FVGyECtBo3CnUoXS10zsR1rKUKZu%2Bn05GVg54BCBjnZ20hV1LiDvG%2Bg5May2RyYsjuEc5TPd5u6cEnvRadd15sCronJ%2FqLSNq%2FgWwFhGkd597%2F0upVsAma%2FVwVlczDHu9lIogqd59jqf7wI8SD6&X-Amz-Signature=26ed121164c34cfb30915485e5a3222db3d9c2c03ddc50360df4d53c896db8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GENXQC3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXIi21Cc1aOKJj7sr2GgLwEE6dwxSRCeHnZVkBU2vpVAiEAtq2Zb0yR9XYla4Yb%2FGF55kT5oJ0Tz66J096hAid%2FdN4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNTTuwiNpBi3A9wuSrcAxpZGRvAD7XQyF7A47lLKxz7xlsPT6sudu3flyOLL5o6gc34uc70m6kOiAwJLKpSnf1xreVkpHHrEJUskbxFWrogDjkqmsbe55j0alTlFppGsPsohDU1w9YI2PCwLFebbdm%2Fl5nXV%2BbrZjVSR0NDNlOGmdxxcbuUnsHSjPQjr3mc%2FdIHbU63feGBSWLgeK2iG8Ym8fcnlmN53XpQzJ%2FoG%2FGyBjSMfsmOG8bBevZARB4s2LR7xwuY%2BcCFRbAyx1IZzvz%2Fga%2B5rJdGCe7pCUyzrGPR3IghVw2ns0nRpRql%2FVtuu1c4zusQw0x%2By%2FYg9UA5ZizKJbOUiGI27XbmbmnxD4EN9Q540hY%2BEsaZoom2n910K9QG3amBhss2SsyBvw6FXYgB3Slfu8Oa9%2BR3oxs8LUhhZbZgETkxeaR8grUwprmrosh46JwOlVrDqkhU1QGqaIhFN3MOav8dWGRiaBcS93NLknedoA7fGePCghSTplwY22ucvcrG4qLC6Q4MG1PMPhOXK3oGR8aTTE0GPYttYBt2OQgJheN0AzXo4UFMHB1zdMeC5bAEvOGxwCtnSX1Fe4RwzSJw6c3jIumMNzs2Z8wizbcxmz1J0V4HFrZbgIWQE4V2Da8DFoLKG9BkMKzF7MMGOqUBWbJe%2BRch4kb3pLMHNl%2Bj2ifDESIU96lJ73gTqiPLQs6NU%2B6F6db9H3E59dhoXRaUIbbHXQoMI%2FVGyECtBo3CnUoXS10zsR1rKUKZu%2Bn05GVg54BCBjnZ20hV1LiDvG%2Bg5May2RyYsjuEc5TPd5u6cEnvRadd15sCronJ%2FqLSNq%2FgWwFhGkd597%2F0upVsAma%2FVwVlczDHu9lIogqd59jqf7wI8SD6&X-Amz-Signature=603e191fa6e9fb7a1cd1728d0732a8b4bdb511c668fff66f1e268e979783c3fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GENXQC3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXIi21Cc1aOKJj7sr2GgLwEE6dwxSRCeHnZVkBU2vpVAiEAtq2Zb0yR9XYla4Yb%2FGF55kT5oJ0Tz66J096hAid%2FdN4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNTTuwiNpBi3A9wuSrcAxpZGRvAD7XQyF7A47lLKxz7xlsPT6sudu3flyOLL5o6gc34uc70m6kOiAwJLKpSnf1xreVkpHHrEJUskbxFWrogDjkqmsbe55j0alTlFppGsPsohDU1w9YI2PCwLFebbdm%2Fl5nXV%2BbrZjVSR0NDNlOGmdxxcbuUnsHSjPQjr3mc%2FdIHbU63feGBSWLgeK2iG8Ym8fcnlmN53XpQzJ%2FoG%2FGyBjSMfsmOG8bBevZARB4s2LR7xwuY%2BcCFRbAyx1IZzvz%2Fga%2B5rJdGCe7pCUyzrGPR3IghVw2ns0nRpRql%2FVtuu1c4zusQw0x%2By%2FYg9UA5ZizKJbOUiGI27XbmbmnxD4EN9Q540hY%2BEsaZoom2n910K9QG3amBhss2SsyBvw6FXYgB3Slfu8Oa9%2BR3oxs8LUhhZbZgETkxeaR8grUwprmrosh46JwOlVrDqkhU1QGqaIhFN3MOav8dWGRiaBcS93NLknedoA7fGePCghSTplwY22ucvcrG4qLC6Q4MG1PMPhOXK3oGR8aTTE0GPYttYBt2OQgJheN0AzXo4UFMHB1zdMeC5bAEvOGxwCtnSX1Fe4RwzSJw6c3jIumMNzs2Z8wizbcxmz1J0V4HFrZbgIWQE4V2Da8DFoLKG9BkMKzF7MMGOqUBWbJe%2BRch4kb3pLMHNl%2Bj2ifDESIU96lJ73gTqiPLQs6NU%2B6F6db9H3E59dhoXRaUIbbHXQoMI%2FVGyECtBo3CnUoXS10zsR1rKUKZu%2Bn05GVg54BCBjnZ20hV1LiDvG%2Bg5May2RyYsjuEc5TPd5u6cEnvRadd15sCronJ%2FqLSNq%2FgWwFhGkd597%2F0upVsAma%2FVwVlczDHu9lIogqd59jqf7wI8SD6&X-Amz-Signature=e6bd35785863bdd0c58dae4f1622b702d7ae132ca31a78abdb1fcc8ed0d88768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GENXQC3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXIi21Cc1aOKJj7sr2GgLwEE6dwxSRCeHnZVkBU2vpVAiEAtq2Zb0yR9XYla4Yb%2FGF55kT5oJ0Tz66J096hAid%2FdN4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNTTuwiNpBi3A9wuSrcAxpZGRvAD7XQyF7A47lLKxz7xlsPT6sudu3flyOLL5o6gc34uc70m6kOiAwJLKpSnf1xreVkpHHrEJUskbxFWrogDjkqmsbe55j0alTlFppGsPsohDU1w9YI2PCwLFebbdm%2Fl5nXV%2BbrZjVSR0NDNlOGmdxxcbuUnsHSjPQjr3mc%2FdIHbU63feGBSWLgeK2iG8Ym8fcnlmN53XpQzJ%2FoG%2FGyBjSMfsmOG8bBevZARB4s2LR7xwuY%2BcCFRbAyx1IZzvz%2Fga%2B5rJdGCe7pCUyzrGPR3IghVw2ns0nRpRql%2FVtuu1c4zusQw0x%2By%2FYg9UA5ZizKJbOUiGI27XbmbmnxD4EN9Q540hY%2BEsaZoom2n910K9QG3amBhss2SsyBvw6FXYgB3Slfu8Oa9%2BR3oxs8LUhhZbZgETkxeaR8grUwprmrosh46JwOlVrDqkhU1QGqaIhFN3MOav8dWGRiaBcS93NLknedoA7fGePCghSTplwY22ucvcrG4qLC6Q4MG1PMPhOXK3oGR8aTTE0GPYttYBt2OQgJheN0AzXo4UFMHB1zdMeC5bAEvOGxwCtnSX1Fe4RwzSJw6c3jIumMNzs2Z8wizbcxmz1J0V4HFrZbgIWQE4V2Da8DFoLKG9BkMKzF7MMGOqUBWbJe%2BRch4kb3pLMHNl%2Bj2ifDESIU96lJ73gTqiPLQs6NU%2B6F6db9H3E59dhoXRaUIbbHXQoMI%2FVGyECtBo3CnUoXS10zsR1rKUKZu%2Bn05GVg54BCBjnZ20hV1LiDvG%2Bg5May2RyYsjuEc5TPd5u6cEnvRadd15sCronJ%2FqLSNq%2FgWwFhGkd597%2F0upVsAma%2FVwVlczDHu9lIogqd59jqf7wI8SD6&X-Amz-Signature=9eec7008e861d91a0c93c0a0574b1b885ad964d764ddae9d3805d87790d3b194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GENXQC3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXIi21Cc1aOKJj7sr2GgLwEE6dwxSRCeHnZVkBU2vpVAiEAtq2Zb0yR9XYla4Yb%2FGF55kT5oJ0Tz66J096hAid%2FdN4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNTTuwiNpBi3A9wuSrcAxpZGRvAD7XQyF7A47lLKxz7xlsPT6sudu3flyOLL5o6gc34uc70m6kOiAwJLKpSnf1xreVkpHHrEJUskbxFWrogDjkqmsbe55j0alTlFppGsPsohDU1w9YI2PCwLFebbdm%2Fl5nXV%2BbrZjVSR0NDNlOGmdxxcbuUnsHSjPQjr3mc%2FdIHbU63feGBSWLgeK2iG8Ym8fcnlmN53XpQzJ%2FoG%2FGyBjSMfsmOG8bBevZARB4s2LR7xwuY%2BcCFRbAyx1IZzvz%2Fga%2B5rJdGCe7pCUyzrGPR3IghVw2ns0nRpRql%2FVtuu1c4zusQw0x%2By%2FYg9UA5ZizKJbOUiGI27XbmbmnxD4EN9Q540hY%2BEsaZoom2n910K9QG3amBhss2SsyBvw6FXYgB3Slfu8Oa9%2BR3oxs8LUhhZbZgETkxeaR8grUwprmrosh46JwOlVrDqkhU1QGqaIhFN3MOav8dWGRiaBcS93NLknedoA7fGePCghSTplwY22ucvcrG4qLC6Q4MG1PMPhOXK3oGR8aTTE0GPYttYBt2OQgJheN0AzXo4UFMHB1zdMeC5bAEvOGxwCtnSX1Fe4RwzSJw6c3jIumMNzs2Z8wizbcxmz1J0V4HFrZbgIWQE4V2Da8DFoLKG9BkMKzF7MMGOqUBWbJe%2BRch4kb3pLMHNl%2Bj2ifDESIU96lJ73gTqiPLQs6NU%2B6F6db9H3E59dhoXRaUIbbHXQoMI%2FVGyECtBo3CnUoXS10zsR1rKUKZu%2Bn05GVg54BCBjnZ20hV1LiDvG%2Bg5May2RyYsjuEc5TPd5u6cEnvRadd15sCronJ%2FqLSNq%2FgWwFhGkd597%2F0upVsAma%2FVwVlczDHu9lIogqd59jqf7wI8SD6&X-Amz-Signature=bb49f45dfe4ea9231d245364cf8438b2819f5fce97175e7f3b0fd855b4a8fc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GENXQC3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXIi21Cc1aOKJj7sr2GgLwEE6dwxSRCeHnZVkBU2vpVAiEAtq2Zb0yR9XYla4Yb%2FGF55kT5oJ0Tz66J096hAid%2FdN4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNTTuwiNpBi3A9wuSrcAxpZGRvAD7XQyF7A47lLKxz7xlsPT6sudu3flyOLL5o6gc34uc70m6kOiAwJLKpSnf1xreVkpHHrEJUskbxFWrogDjkqmsbe55j0alTlFppGsPsohDU1w9YI2PCwLFebbdm%2Fl5nXV%2BbrZjVSR0NDNlOGmdxxcbuUnsHSjPQjr3mc%2FdIHbU63feGBSWLgeK2iG8Ym8fcnlmN53XpQzJ%2FoG%2FGyBjSMfsmOG8bBevZARB4s2LR7xwuY%2BcCFRbAyx1IZzvz%2Fga%2B5rJdGCe7pCUyzrGPR3IghVw2ns0nRpRql%2FVtuu1c4zusQw0x%2By%2FYg9UA5ZizKJbOUiGI27XbmbmnxD4EN9Q540hY%2BEsaZoom2n910K9QG3amBhss2SsyBvw6FXYgB3Slfu8Oa9%2BR3oxs8LUhhZbZgETkxeaR8grUwprmrosh46JwOlVrDqkhU1QGqaIhFN3MOav8dWGRiaBcS93NLknedoA7fGePCghSTplwY22ucvcrG4qLC6Q4MG1PMPhOXK3oGR8aTTE0GPYttYBt2OQgJheN0AzXo4UFMHB1zdMeC5bAEvOGxwCtnSX1Fe4RwzSJw6c3jIumMNzs2Z8wizbcxmz1J0V4HFrZbgIWQE4V2Da8DFoLKG9BkMKzF7MMGOqUBWbJe%2BRch4kb3pLMHNl%2Bj2ifDESIU96lJ73gTqiPLQs6NU%2B6F6db9H3E59dhoXRaUIbbHXQoMI%2FVGyECtBo3CnUoXS10zsR1rKUKZu%2Bn05GVg54BCBjnZ20hV1LiDvG%2Bg5May2RyYsjuEc5TPd5u6cEnvRadd15sCronJ%2FqLSNq%2FgWwFhGkd597%2F0upVsAma%2FVwVlczDHu9lIogqd59jqf7wI8SD6&X-Amz-Signature=9ce8cd52fd36700c40db19a7cb3221795a3dc6dfb040224b1a91086543e85208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
