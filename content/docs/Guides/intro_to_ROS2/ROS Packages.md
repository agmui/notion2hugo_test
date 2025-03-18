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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SC2LRWW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP983eUKiL34I9PeGYgxEoTBws5rVFJuEAWApZzfIgJAiEA%2FZ1KLX3B6UxyGvfwepER8kFDraV5RXKTLCZ8PKkU9Kwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDhZm%2BVZR1u6RtyH4SrcAxlKWe4uFlDEb4kiPrUFntRvCCze92893ZAhxFOe4EJStgJCBlwG41pJrEBDtKLHL4hvo9bCj8VPMGcPKQIRMLqJ0TOtrAQcSkeBCgOHLTuRqUP%2BqD9SsT2rZx%2F7UYAwjJIN%2B7GqCFwQA3zefDQy4D%2BF9oAkC%2FiA2zIa3u7pTwZOg2NCf%2Bz9kJ4qTtaTsb5Oum4uBSQeH55C9omwXmbeOlavjZVDFt8J4x5jWt57VcYyO1Gh594ejAP7d54CGonzpjTi%2BEmZK8oL3PsbT0tyjuHZQW59Mp1QzcQBeSuZbuAs1QGE1RgsrW41d44qons4CJ7A7Vzop8XdG%2Fa1Kkygqr04u0jznW9HgCERPYXyZBBxjl7bryNQda2VXb3FW6ao2IkopG2GjskNliDYqRR1bdWki4Vlv6LkYO4AQzqFRaXyvhdhCyv3TQnJm1fn1Z8c7j07Wafnf9asMgUFg55MIDFvTdCmMBqQ6YCk7J%2FGVkc11bGzIeZUM%2BfRYFmMCid6C5U8dB39IDEGPnJ4k3ZJsk%2B3sEyWQxOLKf5NpkX0xzld9Y9CfCAaUCzSdBkmPiyGf%2F545OdfcVQwo08EhqhwAJM%2B3SapUgd%2Fn0p3PBRL9ntPqPMcKD1XfWaOI0GiMIjs4r4GOqUB1Hw%2FHwKVXJbKhN2UOj8kWkYnOoEBa%2Fv90ghQx48l%2BZev56ktsNLVtDvqQ2MKUg8RreuvQ0%2BO1R%2FkMz3ANwmB5EJr%2FxLw8eJ1jboIWEYpfGtfjq%2B9iwZhONUfDVLIrOLw3yFJzupOncn6cC0tc7JKdLD%2BkaYqMAGyVxZFFy1PTnbxAOq0v1VIbiL4lvdEUI4ldYvEfopPpRr%2F6WgUskp3IXiz3%2BIB&X-Amz-Signature=c1a729b761085b670ea17ebf5039e464d41c1417babce2b9d9a32b88e645f680&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SC2LRWW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP983eUKiL34I9PeGYgxEoTBws5rVFJuEAWApZzfIgJAiEA%2FZ1KLX3B6UxyGvfwepER8kFDraV5RXKTLCZ8PKkU9Kwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDhZm%2BVZR1u6RtyH4SrcAxlKWe4uFlDEb4kiPrUFntRvCCze92893ZAhxFOe4EJStgJCBlwG41pJrEBDtKLHL4hvo9bCj8VPMGcPKQIRMLqJ0TOtrAQcSkeBCgOHLTuRqUP%2BqD9SsT2rZx%2F7UYAwjJIN%2B7GqCFwQA3zefDQy4D%2BF9oAkC%2FiA2zIa3u7pTwZOg2NCf%2Bz9kJ4qTtaTsb5Oum4uBSQeH55C9omwXmbeOlavjZVDFt8J4x5jWt57VcYyO1Gh594ejAP7d54CGonzpjTi%2BEmZK8oL3PsbT0tyjuHZQW59Mp1QzcQBeSuZbuAs1QGE1RgsrW41d44qons4CJ7A7Vzop8XdG%2Fa1Kkygqr04u0jznW9HgCERPYXyZBBxjl7bryNQda2VXb3FW6ao2IkopG2GjskNliDYqRR1bdWki4Vlv6LkYO4AQzqFRaXyvhdhCyv3TQnJm1fn1Z8c7j07Wafnf9asMgUFg55MIDFvTdCmMBqQ6YCk7J%2FGVkc11bGzIeZUM%2BfRYFmMCid6C5U8dB39IDEGPnJ4k3ZJsk%2B3sEyWQxOLKf5NpkX0xzld9Y9CfCAaUCzSdBkmPiyGf%2F545OdfcVQwo08EhqhwAJM%2B3SapUgd%2Fn0p3PBRL9ntPqPMcKD1XfWaOI0GiMIjs4r4GOqUB1Hw%2FHwKVXJbKhN2UOj8kWkYnOoEBa%2Fv90ghQx48l%2BZev56ktsNLVtDvqQ2MKUg8RreuvQ0%2BO1R%2FkMz3ANwmB5EJr%2FxLw8eJ1jboIWEYpfGtfjq%2B9iwZhONUfDVLIrOLw3yFJzupOncn6cC0tc7JKdLD%2BkaYqMAGyVxZFFy1PTnbxAOq0v1VIbiL4lvdEUI4ldYvEfopPpRr%2F6WgUskp3IXiz3%2BIB&X-Amz-Signature=1cdb124be4e41b7167b0942ae738a31d67b1663ff80d218ca5dd5e50f703fe2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SC2LRWW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP983eUKiL34I9PeGYgxEoTBws5rVFJuEAWApZzfIgJAiEA%2FZ1KLX3B6UxyGvfwepER8kFDraV5RXKTLCZ8PKkU9Kwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDhZm%2BVZR1u6RtyH4SrcAxlKWe4uFlDEb4kiPrUFntRvCCze92893ZAhxFOe4EJStgJCBlwG41pJrEBDtKLHL4hvo9bCj8VPMGcPKQIRMLqJ0TOtrAQcSkeBCgOHLTuRqUP%2BqD9SsT2rZx%2F7UYAwjJIN%2B7GqCFwQA3zefDQy4D%2BF9oAkC%2FiA2zIa3u7pTwZOg2NCf%2Bz9kJ4qTtaTsb5Oum4uBSQeH55C9omwXmbeOlavjZVDFt8J4x5jWt57VcYyO1Gh594ejAP7d54CGonzpjTi%2BEmZK8oL3PsbT0tyjuHZQW59Mp1QzcQBeSuZbuAs1QGE1RgsrW41d44qons4CJ7A7Vzop8XdG%2Fa1Kkygqr04u0jznW9HgCERPYXyZBBxjl7bryNQda2VXb3FW6ao2IkopG2GjskNliDYqRR1bdWki4Vlv6LkYO4AQzqFRaXyvhdhCyv3TQnJm1fn1Z8c7j07Wafnf9asMgUFg55MIDFvTdCmMBqQ6YCk7J%2FGVkc11bGzIeZUM%2BfRYFmMCid6C5U8dB39IDEGPnJ4k3ZJsk%2B3sEyWQxOLKf5NpkX0xzld9Y9CfCAaUCzSdBkmPiyGf%2F545OdfcVQwo08EhqhwAJM%2B3SapUgd%2Fn0p3PBRL9ntPqPMcKD1XfWaOI0GiMIjs4r4GOqUB1Hw%2FHwKVXJbKhN2UOj8kWkYnOoEBa%2Fv90ghQx48l%2BZev56ktsNLVtDvqQ2MKUg8RreuvQ0%2BO1R%2FkMz3ANwmB5EJr%2FxLw8eJ1jboIWEYpfGtfjq%2B9iwZhONUfDVLIrOLw3yFJzupOncn6cC0tc7JKdLD%2BkaYqMAGyVxZFFy1PTnbxAOq0v1VIbiL4lvdEUI4ldYvEfopPpRr%2F6WgUskp3IXiz3%2BIB&X-Amz-Signature=554d6bc3e5f9d528e5df23f50866083b9b34bac455f813f94e1a056b22e63277&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SC2LRWW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP983eUKiL34I9PeGYgxEoTBws5rVFJuEAWApZzfIgJAiEA%2FZ1KLX3B6UxyGvfwepER8kFDraV5RXKTLCZ8PKkU9Kwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDhZm%2BVZR1u6RtyH4SrcAxlKWe4uFlDEb4kiPrUFntRvCCze92893ZAhxFOe4EJStgJCBlwG41pJrEBDtKLHL4hvo9bCj8VPMGcPKQIRMLqJ0TOtrAQcSkeBCgOHLTuRqUP%2BqD9SsT2rZx%2F7UYAwjJIN%2B7GqCFwQA3zefDQy4D%2BF9oAkC%2FiA2zIa3u7pTwZOg2NCf%2Bz9kJ4qTtaTsb5Oum4uBSQeH55C9omwXmbeOlavjZVDFt8J4x5jWt57VcYyO1Gh594ejAP7d54CGonzpjTi%2BEmZK8oL3PsbT0tyjuHZQW59Mp1QzcQBeSuZbuAs1QGE1RgsrW41d44qons4CJ7A7Vzop8XdG%2Fa1Kkygqr04u0jznW9HgCERPYXyZBBxjl7bryNQda2VXb3FW6ao2IkopG2GjskNliDYqRR1bdWki4Vlv6LkYO4AQzqFRaXyvhdhCyv3TQnJm1fn1Z8c7j07Wafnf9asMgUFg55MIDFvTdCmMBqQ6YCk7J%2FGVkc11bGzIeZUM%2BfRYFmMCid6C5U8dB39IDEGPnJ4k3ZJsk%2B3sEyWQxOLKf5NpkX0xzld9Y9CfCAaUCzSdBkmPiyGf%2F545OdfcVQwo08EhqhwAJM%2B3SapUgd%2Fn0p3PBRL9ntPqPMcKD1XfWaOI0GiMIjs4r4GOqUB1Hw%2FHwKVXJbKhN2UOj8kWkYnOoEBa%2Fv90ghQx48l%2BZev56ktsNLVtDvqQ2MKUg8RreuvQ0%2BO1R%2FkMz3ANwmB5EJr%2FxLw8eJ1jboIWEYpfGtfjq%2B9iwZhONUfDVLIrOLw3yFJzupOncn6cC0tc7JKdLD%2BkaYqMAGyVxZFFy1PTnbxAOq0v1VIbiL4lvdEUI4ldYvEfopPpRr%2F6WgUskp3IXiz3%2BIB&X-Amz-Signature=5a67eee2bad6afdaeb3c059617e8c01c3b89c689e5d52d3f91682435cb095a35&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SC2LRWW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP983eUKiL34I9PeGYgxEoTBws5rVFJuEAWApZzfIgJAiEA%2FZ1KLX3B6UxyGvfwepER8kFDraV5RXKTLCZ8PKkU9Kwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDhZm%2BVZR1u6RtyH4SrcAxlKWe4uFlDEb4kiPrUFntRvCCze92893ZAhxFOe4EJStgJCBlwG41pJrEBDtKLHL4hvo9bCj8VPMGcPKQIRMLqJ0TOtrAQcSkeBCgOHLTuRqUP%2BqD9SsT2rZx%2F7UYAwjJIN%2B7GqCFwQA3zefDQy4D%2BF9oAkC%2FiA2zIa3u7pTwZOg2NCf%2Bz9kJ4qTtaTsb5Oum4uBSQeH55C9omwXmbeOlavjZVDFt8J4x5jWt57VcYyO1Gh594ejAP7d54CGonzpjTi%2BEmZK8oL3PsbT0tyjuHZQW59Mp1QzcQBeSuZbuAs1QGE1RgsrW41d44qons4CJ7A7Vzop8XdG%2Fa1Kkygqr04u0jznW9HgCERPYXyZBBxjl7bryNQda2VXb3FW6ao2IkopG2GjskNliDYqRR1bdWki4Vlv6LkYO4AQzqFRaXyvhdhCyv3TQnJm1fn1Z8c7j07Wafnf9asMgUFg55MIDFvTdCmMBqQ6YCk7J%2FGVkc11bGzIeZUM%2BfRYFmMCid6C5U8dB39IDEGPnJ4k3ZJsk%2B3sEyWQxOLKf5NpkX0xzld9Y9CfCAaUCzSdBkmPiyGf%2F545OdfcVQwo08EhqhwAJM%2B3SapUgd%2Fn0p3PBRL9ntPqPMcKD1XfWaOI0GiMIjs4r4GOqUB1Hw%2FHwKVXJbKhN2UOj8kWkYnOoEBa%2Fv90ghQx48l%2BZev56ktsNLVtDvqQ2MKUg8RreuvQ0%2BO1R%2FkMz3ANwmB5EJr%2FxLw8eJ1jboIWEYpfGtfjq%2B9iwZhONUfDVLIrOLw3yFJzupOncn6cC0tc7JKdLD%2BkaYqMAGyVxZFFy1PTnbxAOq0v1VIbiL4lvdEUI4ldYvEfopPpRr%2F6WgUskp3IXiz3%2BIB&X-Amz-Signature=14288fa9f669a13eedd1ea4f60d19bdff12d8b1bc6f0ad7be714569d94e6f2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SC2LRWW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP983eUKiL34I9PeGYgxEoTBws5rVFJuEAWApZzfIgJAiEA%2FZ1KLX3B6UxyGvfwepER8kFDraV5RXKTLCZ8PKkU9Kwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDhZm%2BVZR1u6RtyH4SrcAxlKWe4uFlDEb4kiPrUFntRvCCze92893ZAhxFOe4EJStgJCBlwG41pJrEBDtKLHL4hvo9bCj8VPMGcPKQIRMLqJ0TOtrAQcSkeBCgOHLTuRqUP%2BqD9SsT2rZx%2F7UYAwjJIN%2B7GqCFwQA3zefDQy4D%2BF9oAkC%2FiA2zIa3u7pTwZOg2NCf%2Bz9kJ4qTtaTsb5Oum4uBSQeH55C9omwXmbeOlavjZVDFt8J4x5jWt57VcYyO1Gh594ejAP7d54CGonzpjTi%2BEmZK8oL3PsbT0tyjuHZQW59Mp1QzcQBeSuZbuAs1QGE1RgsrW41d44qons4CJ7A7Vzop8XdG%2Fa1Kkygqr04u0jznW9HgCERPYXyZBBxjl7bryNQda2VXb3FW6ao2IkopG2GjskNliDYqRR1bdWki4Vlv6LkYO4AQzqFRaXyvhdhCyv3TQnJm1fn1Z8c7j07Wafnf9asMgUFg55MIDFvTdCmMBqQ6YCk7J%2FGVkc11bGzIeZUM%2BfRYFmMCid6C5U8dB39IDEGPnJ4k3ZJsk%2B3sEyWQxOLKf5NpkX0xzld9Y9CfCAaUCzSdBkmPiyGf%2F545OdfcVQwo08EhqhwAJM%2B3SapUgd%2Fn0p3PBRL9ntPqPMcKD1XfWaOI0GiMIjs4r4GOqUB1Hw%2FHwKVXJbKhN2UOj8kWkYnOoEBa%2Fv90ghQx48l%2BZev56ktsNLVtDvqQ2MKUg8RreuvQ0%2BO1R%2FkMz3ANwmB5EJr%2FxLw8eJ1jboIWEYpfGtfjq%2B9iwZhONUfDVLIrOLw3yFJzupOncn6cC0tc7JKdLD%2BkaYqMAGyVxZFFy1PTnbxAOq0v1VIbiL4lvdEUI4ldYvEfopPpRr%2F6WgUskp3IXiz3%2BIB&X-Amz-Signature=3a8f9afd3c5c8eec3953aa25574ac6b6d76dc95c2d7b29ef35f086ba22884d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SC2LRWW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP983eUKiL34I9PeGYgxEoTBws5rVFJuEAWApZzfIgJAiEA%2FZ1KLX3B6UxyGvfwepER8kFDraV5RXKTLCZ8PKkU9Kwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDhZm%2BVZR1u6RtyH4SrcAxlKWe4uFlDEb4kiPrUFntRvCCze92893ZAhxFOe4EJStgJCBlwG41pJrEBDtKLHL4hvo9bCj8VPMGcPKQIRMLqJ0TOtrAQcSkeBCgOHLTuRqUP%2BqD9SsT2rZx%2F7UYAwjJIN%2B7GqCFwQA3zefDQy4D%2BF9oAkC%2FiA2zIa3u7pTwZOg2NCf%2Bz9kJ4qTtaTsb5Oum4uBSQeH55C9omwXmbeOlavjZVDFt8J4x5jWt57VcYyO1Gh594ejAP7d54CGonzpjTi%2BEmZK8oL3PsbT0tyjuHZQW59Mp1QzcQBeSuZbuAs1QGE1RgsrW41d44qons4CJ7A7Vzop8XdG%2Fa1Kkygqr04u0jznW9HgCERPYXyZBBxjl7bryNQda2VXb3FW6ao2IkopG2GjskNliDYqRR1bdWki4Vlv6LkYO4AQzqFRaXyvhdhCyv3TQnJm1fn1Z8c7j07Wafnf9asMgUFg55MIDFvTdCmMBqQ6YCk7J%2FGVkc11bGzIeZUM%2BfRYFmMCid6C5U8dB39IDEGPnJ4k3ZJsk%2B3sEyWQxOLKf5NpkX0xzld9Y9CfCAaUCzSdBkmPiyGf%2F545OdfcVQwo08EhqhwAJM%2B3SapUgd%2Fn0p3PBRL9ntPqPMcKD1XfWaOI0GiMIjs4r4GOqUB1Hw%2FHwKVXJbKhN2UOj8kWkYnOoEBa%2Fv90ghQx48l%2BZev56ktsNLVtDvqQ2MKUg8RreuvQ0%2BO1R%2FkMz3ANwmB5EJr%2FxLw8eJ1jboIWEYpfGtfjq%2B9iwZhONUfDVLIrOLw3yFJzupOncn6cC0tc7JKdLD%2BkaYqMAGyVxZFFy1PTnbxAOq0v1VIbiL4lvdEUI4ldYvEfopPpRr%2F6WgUskp3IXiz3%2BIB&X-Amz-Signature=9f32a640b0a3acb06fc6ddb2abaa876751ff81592a1bdcbddfdc03e2adbe083f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
