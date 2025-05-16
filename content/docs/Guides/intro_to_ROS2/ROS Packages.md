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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIMR7A7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfUYBBELYqI8r%2B7luliYCYYN31yRyAA6ZYppcYeOA22AiEAwDifNyMZAktAtTeB%2BMfqmRIMuEQ1B%2B1gSCBspvzbETYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBkVPhZ5oYJtfPd5%2FyrcA986rbsJG5k9Oh0BLmWOoo9p8wIBeqJDchy1d%2Bj%2FyhzsXWfpiaq9LfIEncfN%2BtEGNB5Lcmz3%2B2dEp%2FHIh7zf1szNsym1%2B%2FHxtO6tIxj7R5Wo6KB9m5gSI1LgRVzcoIteHiy0ONLRdMR3M%2B%2Frx5SVrh1zy0zbCaKyHBc%2BEj14PXrgzniBBGxF76qBlQ0YgAq4r461%2B5RgLxpwm1uWtDnDZOJaFc6bdGFdXJhJlj5ucjef8Quhme52qhiN3XEMRLQ9xRd0q6WK57HfnCmvsxZPOstqCP55x4mVdY%2BR9aMi82KXOXBJgGWK8mqUEIFauFqVYYeC7J3u6ewERkAVOQ9KEx1%2FupztLJaqdG9inKveQKGB%2BBJyFRGvll6gaePia8kNXwukNVLq7CKivo9G32MxxWmPc%2BRfZ8mdSd8w9uE4CRHFO2yTCGa72kbafmUwYVMWw8ra%2BwoZE4c9xUZlFNaXcX81DohbUrVscwp16r8Ste1Te3APH7lokl9MwMcSYcdWvJ40n%2FOVNcxIG4kZnpWo5Um51DsFVbRDLLYmwbbj0rR4oxQiwiaoO06lNJg2wKM9WZRj0TY7%2BRS8HgbyFe4kk9kXpU3ivqrr3rRjQuGP6bqxj3rZewKCgErE88%2FMMMaAncEGOqUB67gIjhcvOVuzDLXOimYNiW%2F4nCsRVJHD9LMqc1wmtmYWSNSwBSNr8tgxmsRBoChUjKnNDd4iSTtxYF36UxB6q5IuHTTdwc4zlsva%2F%2Bm6cHV02h%2Ff0hAYx%2FOzng8sRMvdWAoI69ZWssOTXbBDu6MV7PR%2BZ%2B9o32IUcspWhtrKHQ2PvU3VepWnoovF%2FnVuszTEzJDqSh8SsxRvlwRugdPLPIryLH4R&X-Amz-Signature=89c7421e7545c7c75e06f79a19d899cacb1a6b13e6c8671469efe8698c8eb220&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIMR7A7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfUYBBELYqI8r%2B7luliYCYYN31yRyAA6ZYppcYeOA22AiEAwDifNyMZAktAtTeB%2BMfqmRIMuEQ1B%2B1gSCBspvzbETYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBkVPhZ5oYJtfPd5%2FyrcA986rbsJG5k9Oh0BLmWOoo9p8wIBeqJDchy1d%2Bj%2FyhzsXWfpiaq9LfIEncfN%2BtEGNB5Lcmz3%2B2dEp%2FHIh7zf1szNsym1%2B%2FHxtO6tIxj7R5Wo6KB9m5gSI1LgRVzcoIteHiy0ONLRdMR3M%2B%2Frx5SVrh1zy0zbCaKyHBc%2BEj14PXrgzniBBGxF76qBlQ0YgAq4r461%2B5RgLxpwm1uWtDnDZOJaFc6bdGFdXJhJlj5ucjef8Quhme52qhiN3XEMRLQ9xRd0q6WK57HfnCmvsxZPOstqCP55x4mVdY%2BR9aMi82KXOXBJgGWK8mqUEIFauFqVYYeC7J3u6ewERkAVOQ9KEx1%2FupztLJaqdG9inKveQKGB%2BBJyFRGvll6gaePia8kNXwukNVLq7CKivo9G32MxxWmPc%2BRfZ8mdSd8w9uE4CRHFO2yTCGa72kbafmUwYVMWw8ra%2BwoZE4c9xUZlFNaXcX81DohbUrVscwp16r8Ste1Te3APH7lokl9MwMcSYcdWvJ40n%2FOVNcxIG4kZnpWo5Um51DsFVbRDLLYmwbbj0rR4oxQiwiaoO06lNJg2wKM9WZRj0TY7%2BRS8HgbyFe4kk9kXpU3ivqrr3rRjQuGP6bqxj3rZewKCgErE88%2FMMMaAncEGOqUB67gIjhcvOVuzDLXOimYNiW%2F4nCsRVJHD9LMqc1wmtmYWSNSwBSNr8tgxmsRBoChUjKnNDd4iSTtxYF36UxB6q5IuHTTdwc4zlsva%2F%2Bm6cHV02h%2Ff0hAYx%2FOzng8sRMvdWAoI69ZWssOTXbBDu6MV7PR%2BZ%2B9o32IUcspWhtrKHQ2PvU3VepWnoovF%2FnVuszTEzJDqSh8SsxRvlwRugdPLPIryLH4R&X-Amz-Signature=9a6ca3c91afd00512da905da59ac9635e2ed12ff458ba6379c76b831d027c17b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIMR7A7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfUYBBELYqI8r%2B7luliYCYYN31yRyAA6ZYppcYeOA22AiEAwDifNyMZAktAtTeB%2BMfqmRIMuEQ1B%2B1gSCBspvzbETYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBkVPhZ5oYJtfPd5%2FyrcA986rbsJG5k9Oh0BLmWOoo9p8wIBeqJDchy1d%2Bj%2FyhzsXWfpiaq9LfIEncfN%2BtEGNB5Lcmz3%2B2dEp%2FHIh7zf1szNsym1%2B%2FHxtO6tIxj7R5Wo6KB9m5gSI1LgRVzcoIteHiy0ONLRdMR3M%2B%2Frx5SVrh1zy0zbCaKyHBc%2BEj14PXrgzniBBGxF76qBlQ0YgAq4r461%2B5RgLxpwm1uWtDnDZOJaFc6bdGFdXJhJlj5ucjef8Quhme52qhiN3XEMRLQ9xRd0q6WK57HfnCmvsxZPOstqCP55x4mVdY%2BR9aMi82KXOXBJgGWK8mqUEIFauFqVYYeC7J3u6ewERkAVOQ9KEx1%2FupztLJaqdG9inKveQKGB%2BBJyFRGvll6gaePia8kNXwukNVLq7CKivo9G32MxxWmPc%2BRfZ8mdSd8w9uE4CRHFO2yTCGa72kbafmUwYVMWw8ra%2BwoZE4c9xUZlFNaXcX81DohbUrVscwp16r8Ste1Te3APH7lokl9MwMcSYcdWvJ40n%2FOVNcxIG4kZnpWo5Um51DsFVbRDLLYmwbbj0rR4oxQiwiaoO06lNJg2wKM9WZRj0TY7%2BRS8HgbyFe4kk9kXpU3ivqrr3rRjQuGP6bqxj3rZewKCgErE88%2FMMMaAncEGOqUB67gIjhcvOVuzDLXOimYNiW%2F4nCsRVJHD9LMqc1wmtmYWSNSwBSNr8tgxmsRBoChUjKnNDd4iSTtxYF36UxB6q5IuHTTdwc4zlsva%2F%2Bm6cHV02h%2Ff0hAYx%2FOzng8sRMvdWAoI69ZWssOTXbBDu6MV7PR%2BZ%2B9o32IUcspWhtrKHQ2PvU3VepWnoovF%2FnVuszTEzJDqSh8SsxRvlwRugdPLPIryLH4R&X-Amz-Signature=622f6071ab6e12917aad3c85bc2b92b6d68c0480cda097c8bdd10313772b3886&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIMR7A7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfUYBBELYqI8r%2B7luliYCYYN31yRyAA6ZYppcYeOA22AiEAwDifNyMZAktAtTeB%2BMfqmRIMuEQ1B%2B1gSCBspvzbETYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBkVPhZ5oYJtfPd5%2FyrcA986rbsJG5k9Oh0BLmWOoo9p8wIBeqJDchy1d%2Bj%2FyhzsXWfpiaq9LfIEncfN%2BtEGNB5Lcmz3%2B2dEp%2FHIh7zf1szNsym1%2B%2FHxtO6tIxj7R5Wo6KB9m5gSI1LgRVzcoIteHiy0ONLRdMR3M%2B%2Frx5SVrh1zy0zbCaKyHBc%2BEj14PXrgzniBBGxF76qBlQ0YgAq4r461%2B5RgLxpwm1uWtDnDZOJaFc6bdGFdXJhJlj5ucjef8Quhme52qhiN3XEMRLQ9xRd0q6WK57HfnCmvsxZPOstqCP55x4mVdY%2BR9aMi82KXOXBJgGWK8mqUEIFauFqVYYeC7J3u6ewERkAVOQ9KEx1%2FupztLJaqdG9inKveQKGB%2BBJyFRGvll6gaePia8kNXwukNVLq7CKivo9G32MxxWmPc%2BRfZ8mdSd8w9uE4CRHFO2yTCGa72kbafmUwYVMWw8ra%2BwoZE4c9xUZlFNaXcX81DohbUrVscwp16r8Ste1Te3APH7lokl9MwMcSYcdWvJ40n%2FOVNcxIG4kZnpWo5Um51DsFVbRDLLYmwbbj0rR4oxQiwiaoO06lNJg2wKM9WZRj0TY7%2BRS8HgbyFe4kk9kXpU3ivqrr3rRjQuGP6bqxj3rZewKCgErE88%2FMMMaAncEGOqUB67gIjhcvOVuzDLXOimYNiW%2F4nCsRVJHD9LMqc1wmtmYWSNSwBSNr8tgxmsRBoChUjKnNDd4iSTtxYF36UxB6q5IuHTTdwc4zlsva%2F%2Bm6cHV02h%2Ff0hAYx%2FOzng8sRMvdWAoI69ZWssOTXbBDu6MV7PR%2BZ%2B9o32IUcspWhtrKHQ2PvU3VepWnoovF%2FnVuszTEzJDqSh8SsxRvlwRugdPLPIryLH4R&X-Amz-Signature=8ec69ee170f085853ecc461379b8629a5b4f40f682e4bc60a499eaf313dbaacd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIMR7A7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfUYBBELYqI8r%2B7luliYCYYN31yRyAA6ZYppcYeOA22AiEAwDifNyMZAktAtTeB%2BMfqmRIMuEQ1B%2B1gSCBspvzbETYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBkVPhZ5oYJtfPd5%2FyrcA986rbsJG5k9Oh0BLmWOoo9p8wIBeqJDchy1d%2Bj%2FyhzsXWfpiaq9LfIEncfN%2BtEGNB5Lcmz3%2B2dEp%2FHIh7zf1szNsym1%2B%2FHxtO6tIxj7R5Wo6KB9m5gSI1LgRVzcoIteHiy0ONLRdMR3M%2B%2Frx5SVrh1zy0zbCaKyHBc%2BEj14PXrgzniBBGxF76qBlQ0YgAq4r461%2B5RgLxpwm1uWtDnDZOJaFc6bdGFdXJhJlj5ucjef8Quhme52qhiN3XEMRLQ9xRd0q6WK57HfnCmvsxZPOstqCP55x4mVdY%2BR9aMi82KXOXBJgGWK8mqUEIFauFqVYYeC7J3u6ewERkAVOQ9KEx1%2FupztLJaqdG9inKveQKGB%2BBJyFRGvll6gaePia8kNXwukNVLq7CKivo9G32MxxWmPc%2BRfZ8mdSd8w9uE4CRHFO2yTCGa72kbafmUwYVMWw8ra%2BwoZE4c9xUZlFNaXcX81DohbUrVscwp16r8Ste1Te3APH7lokl9MwMcSYcdWvJ40n%2FOVNcxIG4kZnpWo5Um51DsFVbRDLLYmwbbj0rR4oxQiwiaoO06lNJg2wKM9WZRj0TY7%2BRS8HgbyFe4kk9kXpU3ivqrr3rRjQuGP6bqxj3rZewKCgErE88%2FMMMaAncEGOqUB67gIjhcvOVuzDLXOimYNiW%2F4nCsRVJHD9LMqc1wmtmYWSNSwBSNr8tgxmsRBoChUjKnNDd4iSTtxYF36UxB6q5IuHTTdwc4zlsva%2F%2Bm6cHV02h%2Ff0hAYx%2FOzng8sRMvdWAoI69ZWssOTXbBDu6MV7PR%2BZ%2B9o32IUcspWhtrKHQ2PvU3VepWnoovF%2FnVuszTEzJDqSh8SsxRvlwRugdPLPIryLH4R&X-Amz-Signature=fc8b5e7211c0c7ab7b8cb146f5a5e830b5d415b30a3f2a10cae99ff05d59e3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIMR7A7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfUYBBELYqI8r%2B7luliYCYYN31yRyAA6ZYppcYeOA22AiEAwDifNyMZAktAtTeB%2BMfqmRIMuEQ1B%2B1gSCBspvzbETYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBkVPhZ5oYJtfPd5%2FyrcA986rbsJG5k9Oh0BLmWOoo9p8wIBeqJDchy1d%2Bj%2FyhzsXWfpiaq9LfIEncfN%2BtEGNB5Lcmz3%2B2dEp%2FHIh7zf1szNsym1%2B%2FHxtO6tIxj7R5Wo6KB9m5gSI1LgRVzcoIteHiy0ONLRdMR3M%2B%2Frx5SVrh1zy0zbCaKyHBc%2BEj14PXrgzniBBGxF76qBlQ0YgAq4r461%2B5RgLxpwm1uWtDnDZOJaFc6bdGFdXJhJlj5ucjef8Quhme52qhiN3XEMRLQ9xRd0q6WK57HfnCmvsxZPOstqCP55x4mVdY%2BR9aMi82KXOXBJgGWK8mqUEIFauFqVYYeC7J3u6ewERkAVOQ9KEx1%2FupztLJaqdG9inKveQKGB%2BBJyFRGvll6gaePia8kNXwukNVLq7CKivo9G32MxxWmPc%2BRfZ8mdSd8w9uE4CRHFO2yTCGa72kbafmUwYVMWw8ra%2BwoZE4c9xUZlFNaXcX81DohbUrVscwp16r8Ste1Te3APH7lokl9MwMcSYcdWvJ40n%2FOVNcxIG4kZnpWo5Um51DsFVbRDLLYmwbbj0rR4oxQiwiaoO06lNJg2wKM9WZRj0TY7%2BRS8HgbyFe4kk9kXpU3ivqrr3rRjQuGP6bqxj3rZewKCgErE88%2FMMMaAncEGOqUB67gIjhcvOVuzDLXOimYNiW%2F4nCsRVJHD9LMqc1wmtmYWSNSwBSNr8tgxmsRBoChUjKnNDd4iSTtxYF36UxB6q5IuHTTdwc4zlsva%2F%2Bm6cHV02h%2Ff0hAYx%2FOzng8sRMvdWAoI69ZWssOTXbBDu6MV7PR%2BZ%2B9o32IUcspWhtrKHQ2PvU3VepWnoovF%2FnVuszTEzJDqSh8SsxRvlwRugdPLPIryLH4R&X-Amz-Signature=86cd9839b2cd0902a4a72e4d0f1f5b31c4b68a2633f97fea44c9d3d174b93d49&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIMR7A7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfUYBBELYqI8r%2B7luliYCYYN31yRyAA6ZYppcYeOA22AiEAwDifNyMZAktAtTeB%2BMfqmRIMuEQ1B%2B1gSCBspvzbETYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBkVPhZ5oYJtfPd5%2FyrcA986rbsJG5k9Oh0BLmWOoo9p8wIBeqJDchy1d%2Bj%2FyhzsXWfpiaq9LfIEncfN%2BtEGNB5Lcmz3%2B2dEp%2FHIh7zf1szNsym1%2B%2FHxtO6tIxj7R5Wo6KB9m5gSI1LgRVzcoIteHiy0ONLRdMR3M%2B%2Frx5SVrh1zy0zbCaKyHBc%2BEj14PXrgzniBBGxF76qBlQ0YgAq4r461%2B5RgLxpwm1uWtDnDZOJaFc6bdGFdXJhJlj5ucjef8Quhme52qhiN3XEMRLQ9xRd0q6WK57HfnCmvsxZPOstqCP55x4mVdY%2BR9aMi82KXOXBJgGWK8mqUEIFauFqVYYeC7J3u6ewERkAVOQ9KEx1%2FupztLJaqdG9inKveQKGB%2BBJyFRGvll6gaePia8kNXwukNVLq7CKivo9G32MxxWmPc%2BRfZ8mdSd8w9uE4CRHFO2yTCGa72kbafmUwYVMWw8ra%2BwoZE4c9xUZlFNaXcX81DohbUrVscwp16r8Ste1Te3APH7lokl9MwMcSYcdWvJ40n%2FOVNcxIG4kZnpWo5Um51DsFVbRDLLYmwbbj0rR4oxQiwiaoO06lNJg2wKM9WZRj0TY7%2BRS8HgbyFe4kk9kXpU3ivqrr3rRjQuGP6bqxj3rZewKCgErE88%2FMMMaAncEGOqUB67gIjhcvOVuzDLXOimYNiW%2F4nCsRVJHD9LMqc1wmtmYWSNSwBSNr8tgxmsRBoChUjKnNDd4iSTtxYF36UxB6q5IuHTTdwc4zlsva%2F%2Bm6cHV02h%2Ff0hAYx%2FOzng8sRMvdWAoI69ZWssOTXbBDu6MV7PR%2BZ%2B9o32IUcspWhtrKHQ2PvU3VepWnoovF%2FnVuszTEzJDqSh8SsxRvlwRugdPLPIryLH4R&X-Amz-Signature=78e7b1acbf314f5fbd1ade418b0e26b06112716c7a17b3d03d74a0ee2c144671&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
