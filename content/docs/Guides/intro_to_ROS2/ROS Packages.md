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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4I3CM4U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBNZrceQZkOlL4m5KItH8UYHN6cs5sYk4AkhV9EtsYAIhAL0Usr5dkUNEMmEfu4aiWuQgq0jPcI6iV4ptIj%2BgsACZKv8DCGUQABoMNjM3NDIzMTgzODA1Igz7F3otYU4Q3u8%2FciAq3AMZg2EkhrKcGEPzOiHb8Wfk0IfBdx9Tv45gl%2B42%2BYg4SSV8cA46iNQe2YuSSsvDrTJ14J745BqI25BOqp089UZDmApc6vvFP3ICS7ge9qx%2BYY0nlSH%2BuZuEg%2FP%2BNLERtlzIQU%2BYsSkRlPkyMDNDDDp8qUzicAMMf%2BOlBgq8asUT%2BVyzQZe5xoEr%2B2pfFn8cpmStvbbaJjX9OpEQOuGUeUISk%2FI8lGt3AS%2FBx6E%2FMpEToqs2d8J%2BzXhvIznD3lGZil%2BFOYn4t3wOi%2FxaYdPsvC93sKRLNkZhFRrOoT1FQ8h7JRVm%2FMWPum8oqPfKNP6y65d2yOrD9eijohRuSl3BNQRX%2B37CzGYFVbIOE7lTtKah%2F3%2FYwCrPal4qv2Qonkccw09HXCPHIg%2B5wGabMvfPP2hci1H5BSRf0jtnrgFAXVMo5BFUth27APUOHiDEiGSFyEsHugcIpUieZmkbRVaDFba6DaLsIEaItsQPMJElpLLX71XFugJSNhQbsbJ6VgTsKHs1u9nKYggHCuPc%2BUnaEmgSgt9tkSRCvXqhVWwvv6s1ZH7Nliry8BowdgVbLfFnnBh5qvdx78CohGUBxZQpt1YI1erxOt5bnVjC8yk6Iz6n8z%2Ffuu38armxs%2F10bTCm9Zu%2FBjqkAZlMWsmZ4kNou6Yv4N2u%2B9xb4Efd5ZqD2xAgnWYW%2FOKZMraJnAFVuAZa1AWFvZ%2F7K2dpE6OB9dvDfbDWkU88QyIGh1AY9vRU7HZJzYEkLs3IHSlSxIlD2M0yH3RocT6xfzb0R%2FkVHlUhe0Zq6O5CKK76a%2Fgxu6WB8p%2FJWuh%2FGdvLbjdz8QyWiARz8oOqEpUBQtHC9IWqwV6T%2FepY46punbeGINGs&X-Amz-Signature=f22d680f297772be038b7ff13bdd04798777e08fea6b3ab98a29c78e0d14ba6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4I3CM4U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBNZrceQZkOlL4m5KItH8UYHN6cs5sYk4AkhV9EtsYAIhAL0Usr5dkUNEMmEfu4aiWuQgq0jPcI6iV4ptIj%2BgsACZKv8DCGUQABoMNjM3NDIzMTgzODA1Igz7F3otYU4Q3u8%2FciAq3AMZg2EkhrKcGEPzOiHb8Wfk0IfBdx9Tv45gl%2B42%2BYg4SSV8cA46iNQe2YuSSsvDrTJ14J745BqI25BOqp089UZDmApc6vvFP3ICS7ge9qx%2BYY0nlSH%2BuZuEg%2FP%2BNLERtlzIQU%2BYsSkRlPkyMDNDDDp8qUzicAMMf%2BOlBgq8asUT%2BVyzQZe5xoEr%2B2pfFn8cpmStvbbaJjX9OpEQOuGUeUISk%2FI8lGt3AS%2FBx6E%2FMpEToqs2d8J%2BzXhvIznD3lGZil%2BFOYn4t3wOi%2FxaYdPsvC93sKRLNkZhFRrOoT1FQ8h7JRVm%2FMWPum8oqPfKNP6y65d2yOrD9eijohRuSl3BNQRX%2B37CzGYFVbIOE7lTtKah%2F3%2FYwCrPal4qv2Qonkccw09HXCPHIg%2B5wGabMvfPP2hci1H5BSRf0jtnrgFAXVMo5BFUth27APUOHiDEiGSFyEsHugcIpUieZmkbRVaDFba6DaLsIEaItsQPMJElpLLX71XFugJSNhQbsbJ6VgTsKHs1u9nKYggHCuPc%2BUnaEmgSgt9tkSRCvXqhVWwvv6s1ZH7Nliry8BowdgVbLfFnnBh5qvdx78CohGUBxZQpt1YI1erxOt5bnVjC8yk6Iz6n8z%2Ffuu38armxs%2F10bTCm9Zu%2FBjqkAZlMWsmZ4kNou6Yv4N2u%2B9xb4Efd5ZqD2xAgnWYW%2FOKZMraJnAFVuAZa1AWFvZ%2F7K2dpE6OB9dvDfbDWkU88QyIGh1AY9vRU7HZJzYEkLs3IHSlSxIlD2M0yH3RocT6xfzb0R%2FkVHlUhe0Zq6O5CKK76a%2Fgxu6WB8p%2FJWuh%2FGdvLbjdz8QyWiARz8oOqEpUBQtHC9IWqwV6T%2FepY46punbeGINGs&X-Amz-Signature=8dc75b87aa353cf54b7be76261de4e3e5a1b2199cbd7e50d1213681f55746d88&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4I3CM4U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBNZrceQZkOlL4m5KItH8UYHN6cs5sYk4AkhV9EtsYAIhAL0Usr5dkUNEMmEfu4aiWuQgq0jPcI6iV4ptIj%2BgsACZKv8DCGUQABoMNjM3NDIzMTgzODA1Igz7F3otYU4Q3u8%2FciAq3AMZg2EkhrKcGEPzOiHb8Wfk0IfBdx9Tv45gl%2B42%2BYg4SSV8cA46iNQe2YuSSsvDrTJ14J745BqI25BOqp089UZDmApc6vvFP3ICS7ge9qx%2BYY0nlSH%2BuZuEg%2FP%2BNLERtlzIQU%2BYsSkRlPkyMDNDDDp8qUzicAMMf%2BOlBgq8asUT%2BVyzQZe5xoEr%2B2pfFn8cpmStvbbaJjX9OpEQOuGUeUISk%2FI8lGt3AS%2FBx6E%2FMpEToqs2d8J%2BzXhvIznD3lGZil%2BFOYn4t3wOi%2FxaYdPsvC93sKRLNkZhFRrOoT1FQ8h7JRVm%2FMWPum8oqPfKNP6y65d2yOrD9eijohRuSl3BNQRX%2B37CzGYFVbIOE7lTtKah%2F3%2FYwCrPal4qv2Qonkccw09HXCPHIg%2B5wGabMvfPP2hci1H5BSRf0jtnrgFAXVMo5BFUth27APUOHiDEiGSFyEsHugcIpUieZmkbRVaDFba6DaLsIEaItsQPMJElpLLX71XFugJSNhQbsbJ6VgTsKHs1u9nKYggHCuPc%2BUnaEmgSgt9tkSRCvXqhVWwvv6s1ZH7Nliry8BowdgVbLfFnnBh5qvdx78CohGUBxZQpt1YI1erxOt5bnVjC8yk6Iz6n8z%2Ffuu38armxs%2F10bTCm9Zu%2FBjqkAZlMWsmZ4kNou6Yv4N2u%2B9xb4Efd5ZqD2xAgnWYW%2FOKZMraJnAFVuAZa1AWFvZ%2F7K2dpE6OB9dvDfbDWkU88QyIGh1AY9vRU7HZJzYEkLs3IHSlSxIlD2M0yH3RocT6xfzb0R%2FkVHlUhe0Zq6O5CKK76a%2Fgxu6WB8p%2FJWuh%2FGdvLbjdz8QyWiARz8oOqEpUBQtHC9IWqwV6T%2FepY46punbeGINGs&X-Amz-Signature=11bfce8ea9e0c482f4c63cf3e894d5b07c697260004c4065c4503d6a41dd74c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4I3CM4U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBNZrceQZkOlL4m5KItH8UYHN6cs5sYk4AkhV9EtsYAIhAL0Usr5dkUNEMmEfu4aiWuQgq0jPcI6iV4ptIj%2BgsACZKv8DCGUQABoMNjM3NDIzMTgzODA1Igz7F3otYU4Q3u8%2FciAq3AMZg2EkhrKcGEPzOiHb8Wfk0IfBdx9Tv45gl%2B42%2BYg4SSV8cA46iNQe2YuSSsvDrTJ14J745BqI25BOqp089UZDmApc6vvFP3ICS7ge9qx%2BYY0nlSH%2BuZuEg%2FP%2BNLERtlzIQU%2BYsSkRlPkyMDNDDDp8qUzicAMMf%2BOlBgq8asUT%2BVyzQZe5xoEr%2B2pfFn8cpmStvbbaJjX9OpEQOuGUeUISk%2FI8lGt3AS%2FBx6E%2FMpEToqs2d8J%2BzXhvIznD3lGZil%2BFOYn4t3wOi%2FxaYdPsvC93sKRLNkZhFRrOoT1FQ8h7JRVm%2FMWPum8oqPfKNP6y65d2yOrD9eijohRuSl3BNQRX%2B37CzGYFVbIOE7lTtKah%2F3%2FYwCrPal4qv2Qonkccw09HXCPHIg%2B5wGabMvfPP2hci1H5BSRf0jtnrgFAXVMo5BFUth27APUOHiDEiGSFyEsHugcIpUieZmkbRVaDFba6DaLsIEaItsQPMJElpLLX71XFugJSNhQbsbJ6VgTsKHs1u9nKYggHCuPc%2BUnaEmgSgt9tkSRCvXqhVWwvv6s1ZH7Nliry8BowdgVbLfFnnBh5qvdx78CohGUBxZQpt1YI1erxOt5bnVjC8yk6Iz6n8z%2Ffuu38armxs%2F10bTCm9Zu%2FBjqkAZlMWsmZ4kNou6Yv4N2u%2B9xb4Efd5ZqD2xAgnWYW%2FOKZMraJnAFVuAZa1AWFvZ%2F7K2dpE6OB9dvDfbDWkU88QyIGh1AY9vRU7HZJzYEkLs3IHSlSxIlD2M0yH3RocT6xfzb0R%2FkVHlUhe0Zq6O5CKK76a%2Fgxu6WB8p%2FJWuh%2FGdvLbjdz8QyWiARz8oOqEpUBQtHC9IWqwV6T%2FepY46punbeGINGs&X-Amz-Signature=2b4146ec9c9d39154c1bab248748bb84a3d30d445b7374806b15ea8decf02c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4I3CM4U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBNZrceQZkOlL4m5KItH8UYHN6cs5sYk4AkhV9EtsYAIhAL0Usr5dkUNEMmEfu4aiWuQgq0jPcI6iV4ptIj%2BgsACZKv8DCGUQABoMNjM3NDIzMTgzODA1Igz7F3otYU4Q3u8%2FciAq3AMZg2EkhrKcGEPzOiHb8Wfk0IfBdx9Tv45gl%2B42%2BYg4SSV8cA46iNQe2YuSSsvDrTJ14J745BqI25BOqp089UZDmApc6vvFP3ICS7ge9qx%2BYY0nlSH%2BuZuEg%2FP%2BNLERtlzIQU%2BYsSkRlPkyMDNDDDp8qUzicAMMf%2BOlBgq8asUT%2BVyzQZe5xoEr%2B2pfFn8cpmStvbbaJjX9OpEQOuGUeUISk%2FI8lGt3AS%2FBx6E%2FMpEToqs2d8J%2BzXhvIznD3lGZil%2BFOYn4t3wOi%2FxaYdPsvC93sKRLNkZhFRrOoT1FQ8h7JRVm%2FMWPum8oqPfKNP6y65d2yOrD9eijohRuSl3BNQRX%2B37CzGYFVbIOE7lTtKah%2F3%2FYwCrPal4qv2Qonkccw09HXCPHIg%2B5wGabMvfPP2hci1H5BSRf0jtnrgFAXVMo5BFUth27APUOHiDEiGSFyEsHugcIpUieZmkbRVaDFba6DaLsIEaItsQPMJElpLLX71XFugJSNhQbsbJ6VgTsKHs1u9nKYggHCuPc%2BUnaEmgSgt9tkSRCvXqhVWwvv6s1ZH7Nliry8BowdgVbLfFnnBh5qvdx78CohGUBxZQpt1YI1erxOt5bnVjC8yk6Iz6n8z%2Ffuu38armxs%2F10bTCm9Zu%2FBjqkAZlMWsmZ4kNou6Yv4N2u%2B9xb4Efd5ZqD2xAgnWYW%2FOKZMraJnAFVuAZa1AWFvZ%2F7K2dpE6OB9dvDfbDWkU88QyIGh1AY9vRU7HZJzYEkLs3IHSlSxIlD2M0yH3RocT6xfzb0R%2FkVHlUhe0Zq6O5CKK76a%2Fgxu6WB8p%2FJWuh%2FGdvLbjdz8QyWiARz8oOqEpUBQtHC9IWqwV6T%2FepY46punbeGINGs&X-Amz-Signature=5cc4ce3e17e64acaacf5b1a9df970b69a6cc326bd95566cc2bc5609e9cc38c74&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4I3CM4U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBNZrceQZkOlL4m5KItH8UYHN6cs5sYk4AkhV9EtsYAIhAL0Usr5dkUNEMmEfu4aiWuQgq0jPcI6iV4ptIj%2BgsACZKv8DCGUQABoMNjM3NDIzMTgzODA1Igz7F3otYU4Q3u8%2FciAq3AMZg2EkhrKcGEPzOiHb8Wfk0IfBdx9Tv45gl%2B42%2BYg4SSV8cA46iNQe2YuSSsvDrTJ14J745BqI25BOqp089UZDmApc6vvFP3ICS7ge9qx%2BYY0nlSH%2BuZuEg%2FP%2BNLERtlzIQU%2BYsSkRlPkyMDNDDDp8qUzicAMMf%2BOlBgq8asUT%2BVyzQZe5xoEr%2B2pfFn8cpmStvbbaJjX9OpEQOuGUeUISk%2FI8lGt3AS%2FBx6E%2FMpEToqs2d8J%2BzXhvIznD3lGZil%2BFOYn4t3wOi%2FxaYdPsvC93sKRLNkZhFRrOoT1FQ8h7JRVm%2FMWPum8oqPfKNP6y65d2yOrD9eijohRuSl3BNQRX%2B37CzGYFVbIOE7lTtKah%2F3%2FYwCrPal4qv2Qonkccw09HXCPHIg%2B5wGabMvfPP2hci1H5BSRf0jtnrgFAXVMo5BFUth27APUOHiDEiGSFyEsHugcIpUieZmkbRVaDFba6DaLsIEaItsQPMJElpLLX71XFugJSNhQbsbJ6VgTsKHs1u9nKYggHCuPc%2BUnaEmgSgt9tkSRCvXqhVWwvv6s1ZH7Nliry8BowdgVbLfFnnBh5qvdx78CohGUBxZQpt1YI1erxOt5bnVjC8yk6Iz6n8z%2Ffuu38armxs%2F10bTCm9Zu%2FBjqkAZlMWsmZ4kNou6Yv4N2u%2B9xb4Efd5ZqD2xAgnWYW%2FOKZMraJnAFVuAZa1AWFvZ%2F7K2dpE6OB9dvDfbDWkU88QyIGh1AY9vRU7HZJzYEkLs3IHSlSxIlD2M0yH3RocT6xfzb0R%2FkVHlUhe0Zq6O5CKK76a%2Fgxu6WB8p%2FJWuh%2FGdvLbjdz8QyWiARz8oOqEpUBQtHC9IWqwV6T%2FepY46punbeGINGs&X-Amz-Signature=7d0a637d337e792f65f859cd1f6e4ab238b51cdd2261ff593b611e88903ea8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4I3CM4U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSBNZrceQZkOlL4m5KItH8UYHN6cs5sYk4AkhV9EtsYAIhAL0Usr5dkUNEMmEfu4aiWuQgq0jPcI6iV4ptIj%2BgsACZKv8DCGUQABoMNjM3NDIzMTgzODA1Igz7F3otYU4Q3u8%2FciAq3AMZg2EkhrKcGEPzOiHb8Wfk0IfBdx9Tv45gl%2B42%2BYg4SSV8cA46iNQe2YuSSsvDrTJ14J745BqI25BOqp089UZDmApc6vvFP3ICS7ge9qx%2BYY0nlSH%2BuZuEg%2FP%2BNLERtlzIQU%2BYsSkRlPkyMDNDDDp8qUzicAMMf%2BOlBgq8asUT%2BVyzQZe5xoEr%2B2pfFn8cpmStvbbaJjX9OpEQOuGUeUISk%2FI8lGt3AS%2FBx6E%2FMpEToqs2d8J%2BzXhvIznD3lGZil%2BFOYn4t3wOi%2FxaYdPsvC93sKRLNkZhFRrOoT1FQ8h7JRVm%2FMWPum8oqPfKNP6y65d2yOrD9eijohRuSl3BNQRX%2B37CzGYFVbIOE7lTtKah%2F3%2FYwCrPal4qv2Qonkccw09HXCPHIg%2B5wGabMvfPP2hci1H5BSRf0jtnrgFAXVMo5BFUth27APUOHiDEiGSFyEsHugcIpUieZmkbRVaDFba6DaLsIEaItsQPMJElpLLX71XFugJSNhQbsbJ6VgTsKHs1u9nKYggHCuPc%2BUnaEmgSgt9tkSRCvXqhVWwvv6s1ZH7Nliry8BowdgVbLfFnnBh5qvdx78CohGUBxZQpt1YI1erxOt5bnVjC8yk6Iz6n8z%2Ffuu38armxs%2F10bTCm9Zu%2FBjqkAZlMWsmZ4kNou6Yv4N2u%2B9xb4Efd5ZqD2xAgnWYW%2FOKZMraJnAFVuAZa1AWFvZ%2F7K2dpE6OB9dvDfbDWkU88QyIGh1AY9vRU7HZJzYEkLs3IHSlSxIlD2M0yH3RocT6xfzb0R%2FkVHlUhe0Zq6O5CKK76a%2Fgxu6WB8p%2FJWuh%2FGdvLbjdz8QyWiARz8oOqEpUBQtHC9IWqwV6T%2FepY46punbeGINGs&X-Amz-Signature=a2b294f00ab15e874ea27385d3da29af241d7f10f12ba6b140283cf4f1968f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
