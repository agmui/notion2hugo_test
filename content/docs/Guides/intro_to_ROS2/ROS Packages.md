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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC4H5UU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsMT86e1KnZThKILCa9Q7X7185caiHE%2F4u33x9JAVAIgXnBZ8dnn3x54dDD4XBP7ZKP7xpxb4FUh%2FB3FGzPQQ2Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPupZ%2FBTQuLviKuXUircAwaquNEEcD112Mz5086j5aZJ8luMjaUA7js2KMzKYsuINnNucJ%2BMQGdXRsaLjgExUfxLIi3hXYUuhUR0dkN9leiJB7ypjRd8BXE65cnMKEDQXpv74GG8kH0ELDy40BQubSiJ4qYezoFlolJSG9hoSp0yhpk8VJ%2F0dY8Dae0VkLWO8TELEdPPba07QFfRxbV09DWapNPvRci0Dm%2FaD1jaVYAaB2%2FKmOQxbsJfPuaj%2BXMOEJ2m6h3fWwKiznPrzF2zijvhvCv179UQmj%2F98ClEWiicoO4kgWxTrTi6jpWaQTKiyp0NboJKTegvZW8%2BxpTYtD1qY7SA6pJeaqf5VqwaHAH8Dzw8MtUxpc2VarWqm9Y3Z1cjh4hF7ErYmi%2B%2B6%2FDrY6XE%2FBfgeIWtD1hLjgqbm48ISkoErT82pMhmosBsFPnTV9Ah%2FNPprlFlyIPw%2FUU1Bf%2F1mLb%2FSj8an288E%2BajOkeRe8M9YdTZesUlLfQNshPKpPO021CLR5v%2FA%2F1EKNz7SndOm61nUC4RfyfevgRKrgidQJkxhd0qf3p2YbcijLR6hytYEC%2FqlVjAwb53m07hc36YAMZAxkhkV97DJcVqXuG2S5X%2BmREtWjfY8XlKZYcdCF9EKmMoN7iFB8SIMMDZvsQGOqUBPW2CFwoAMPqnmkaMef%2BENJOnuPU7kEEhWc3O8LK%2Bsfl68S4DT5K0aGhlEY2cUxRhgzYwyY3HkOL%2B%2Fx64MUeqxGqG1OfsfNtpDftKXDOmIpbTRhIDou7b12P0MLvYsUo8tHt9PLTNhQ%2BOV7Kb2KjvcIKM6%2ByMYtCbizPZ99zW%2BpASP8NJEqXxPWBFvzjSSI1mX52uAaI3Cg%2FeO6o3DlsDZGk8MPfo&X-Amz-Signature=57fddfce5bec0f3aa8029f5f44fb40d512c15b7e973dfa7665d67d74db401bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC4H5UU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsMT86e1KnZThKILCa9Q7X7185caiHE%2F4u33x9JAVAIgXnBZ8dnn3x54dDD4XBP7ZKP7xpxb4FUh%2FB3FGzPQQ2Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPupZ%2FBTQuLviKuXUircAwaquNEEcD112Mz5086j5aZJ8luMjaUA7js2KMzKYsuINnNucJ%2BMQGdXRsaLjgExUfxLIi3hXYUuhUR0dkN9leiJB7ypjRd8BXE65cnMKEDQXpv74GG8kH0ELDy40BQubSiJ4qYezoFlolJSG9hoSp0yhpk8VJ%2F0dY8Dae0VkLWO8TELEdPPba07QFfRxbV09DWapNPvRci0Dm%2FaD1jaVYAaB2%2FKmOQxbsJfPuaj%2BXMOEJ2m6h3fWwKiznPrzF2zijvhvCv179UQmj%2F98ClEWiicoO4kgWxTrTi6jpWaQTKiyp0NboJKTegvZW8%2BxpTYtD1qY7SA6pJeaqf5VqwaHAH8Dzw8MtUxpc2VarWqm9Y3Z1cjh4hF7ErYmi%2B%2B6%2FDrY6XE%2FBfgeIWtD1hLjgqbm48ISkoErT82pMhmosBsFPnTV9Ah%2FNPprlFlyIPw%2FUU1Bf%2F1mLb%2FSj8an288E%2BajOkeRe8M9YdTZesUlLfQNshPKpPO021CLR5v%2FA%2F1EKNz7SndOm61nUC4RfyfevgRKrgidQJkxhd0qf3p2YbcijLR6hytYEC%2FqlVjAwb53m07hc36YAMZAxkhkV97DJcVqXuG2S5X%2BmREtWjfY8XlKZYcdCF9EKmMoN7iFB8SIMMDZvsQGOqUBPW2CFwoAMPqnmkaMef%2BENJOnuPU7kEEhWc3O8LK%2Bsfl68S4DT5K0aGhlEY2cUxRhgzYwyY3HkOL%2B%2Fx64MUeqxGqG1OfsfNtpDftKXDOmIpbTRhIDou7b12P0MLvYsUo8tHt9PLTNhQ%2BOV7Kb2KjvcIKM6%2ByMYtCbizPZ99zW%2BpASP8NJEqXxPWBFvzjSSI1mX52uAaI3Cg%2FeO6o3DlsDZGk8MPfo&X-Amz-Signature=8b76e4ef32426c6ed547f1909ab14ec7348bc7fb0e9593bda4d0d368383ed45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC4H5UU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsMT86e1KnZThKILCa9Q7X7185caiHE%2F4u33x9JAVAIgXnBZ8dnn3x54dDD4XBP7ZKP7xpxb4FUh%2FB3FGzPQQ2Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPupZ%2FBTQuLviKuXUircAwaquNEEcD112Mz5086j5aZJ8luMjaUA7js2KMzKYsuINnNucJ%2BMQGdXRsaLjgExUfxLIi3hXYUuhUR0dkN9leiJB7ypjRd8BXE65cnMKEDQXpv74GG8kH0ELDy40BQubSiJ4qYezoFlolJSG9hoSp0yhpk8VJ%2F0dY8Dae0VkLWO8TELEdPPba07QFfRxbV09DWapNPvRci0Dm%2FaD1jaVYAaB2%2FKmOQxbsJfPuaj%2BXMOEJ2m6h3fWwKiznPrzF2zijvhvCv179UQmj%2F98ClEWiicoO4kgWxTrTi6jpWaQTKiyp0NboJKTegvZW8%2BxpTYtD1qY7SA6pJeaqf5VqwaHAH8Dzw8MtUxpc2VarWqm9Y3Z1cjh4hF7ErYmi%2B%2B6%2FDrY6XE%2FBfgeIWtD1hLjgqbm48ISkoErT82pMhmosBsFPnTV9Ah%2FNPprlFlyIPw%2FUU1Bf%2F1mLb%2FSj8an288E%2BajOkeRe8M9YdTZesUlLfQNshPKpPO021CLR5v%2FA%2F1EKNz7SndOm61nUC4RfyfevgRKrgidQJkxhd0qf3p2YbcijLR6hytYEC%2FqlVjAwb53m07hc36YAMZAxkhkV97DJcVqXuG2S5X%2BmREtWjfY8XlKZYcdCF9EKmMoN7iFB8SIMMDZvsQGOqUBPW2CFwoAMPqnmkaMef%2BENJOnuPU7kEEhWc3O8LK%2Bsfl68S4DT5K0aGhlEY2cUxRhgzYwyY3HkOL%2B%2Fx64MUeqxGqG1OfsfNtpDftKXDOmIpbTRhIDou7b12P0MLvYsUo8tHt9PLTNhQ%2BOV7Kb2KjvcIKM6%2ByMYtCbizPZ99zW%2BpASP8NJEqXxPWBFvzjSSI1mX52uAaI3Cg%2FeO6o3DlsDZGk8MPfo&X-Amz-Signature=65b27ecbeab81b94de058f65a0e6a5b6fe4910e87f14bba4cee125be963f467b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC4H5UU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsMT86e1KnZThKILCa9Q7X7185caiHE%2F4u33x9JAVAIgXnBZ8dnn3x54dDD4XBP7ZKP7xpxb4FUh%2FB3FGzPQQ2Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPupZ%2FBTQuLviKuXUircAwaquNEEcD112Mz5086j5aZJ8luMjaUA7js2KMzKYsuINnNucJ%2BMQGdXRsaLjgExUfxLIi3hXYUuhUR0dkN9leiJB7ypjRd8BXE65cnMKEDQXpv74GG8kH0ELDy40BQubSiJ4qYezoFlolJSG9hoSp0yhpk8VJ%2F0dY8Dae0VkLWO8TELEdPPba07QFfRxbV09DWapNPvRci0Dm%2FaD1jaVYAaB2%2FKmOQxbsJfPuaj%2BXMOEJ2m6h3fWwKiznPrzF2zijvhvCv179UQmj%2F98ClEWiicoO4kgWxTrTi6jpWaQTKiyp0NboJKTegvZW8%2BxpTYtD1qY7SA6pJeaqf5VqwaHAH8Dzw8MtUxpc2VarWqm9Y3Z1cjh4hF7ErYmi%2B%2B6%2FDrY6XE%2FBfgeIWtD1hLjgqbm48ISkoErT82pMhmosBsFPnTV9Ah%2FNPprlFlyIPw%2FUU1Bf%2F1mLb%2FSj8an288E%2BajOkeRe8M9YdTZesUlLfQNshPKpPO021CLR5v%2FA%2F1EKNz7SndOm61nUC4RfyfevgRKrgidQJkxhd0qf3p2YbcijLR6hytYEC%2FqlVjAwb53m07hc36YAMZAxkhkV97DJcVqXuG2S5X%2BmREtWjfY8XlKZYcdCF9EKmMoN7iFB8SIMMDZvsQGOqUBPW2CFwoAMPqnmkaMef%2BENJOnuPU7kEEhWc3O8LK%2Bsfl68S4DT5K0aGhlEY2cUxRhgzYwyY3HkOL%2B%2Fx64MUeqxGqG1OfsfNtpDftKXDOmIpbTRhIDou7b12P0MLvYsUo8tHt9PLTNhQ%2BOV7Kb2KjvcIKM6%2ByMYtCbizPZ99zW%2BpASP8NJEqXxPWBFvzjSSI1mX52uAaI3Cg%2FeO6o3DlsDZGk8MPfo&X-Amz-Signature=c7280862a41ba9bf8091bed86e395985db1cc8245b4fb1f7cefae8bd72c2b3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC4H5UU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsMT86e1KnZThKILCa9Q7X7185caiHE%2F4u33x9JAVAIgXnBZ8dnn3x54dDD4XBP7ZKP7xpxb4FUh%2FB3FGzPQQ2Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPupZ%2FBTQuLviKuXUircAwaquNEEcD112Mz5086j5aZJ8luMjaUA7js2KMzKYsuINnNucJ%2BMQGdXRsaLjgExUfxLIi3hXYUuhUR0dkN9leiJB7ypjRd8BXE65cnMKEDQXpv74GG8kH0ELDy40BQubSiJ4qYezoFlolJSG9hoSp0yhpk8VJ%2F0dY8Dae0VkLWO8TELEdPPba07QFfRxbV09DWapNPvRci0Dm%2FaD1jaVYAaB2%2FKmOQxbsJfPuaj%2BXMOEJ2m6h3fWwKiznPrzF2zijvhvCv179UQmj%2F98ClEWiicoO4kgWxTrTi6jpWaQTKiyp0NboJKTegvZW8%2BxpTYtD1qY7SA6pJeaqf5VqwaHAH8Dzw8MtUxpc2VarWqm9Y3Z1cjh4hF7ErYmi%2B%2B6%2FDrY6XE%2FBfgeIWtD1hLjgqbm48ISkoErT82pMhmosBsFPnTV9Ah%2FNPprlFlyIPw%2FUU1Bf%2F1mLb%2FSj8an288E%2BajOkeRe8M9YdTZesUlLfQNshPKpPO021CLR5v%2FA%2F1EKNz7SndOm61nUC4RfyfevgRKrgidQJkxhd0qf3p2YbcijLR6hytYEC%2FqlVjAwb53m07hc36YAMZAxkhkV97DJcVqXuG2S5X%2BmREtWjfY8XlKZYcdCF9EKmMoN7iFB8SIMMDZvsQGOqUBPW2CFwoAMPqnmkaMef%2BENJOnuPU7kEEhWc3O8LK%2Bsfl68S4DT5K0aGhlEY2cUxRhgzYwyY3HkOL%2B%2Fx64MUeqxGqG1OfsfNtpDftKXDOmIpbTRhIDou7b12P0MLvYsUo8tHt9PLTNhQ%2BOV7Kb2KjvcIKM6%2ByMYtCbizPZ99zW%2BpASP8NJEqXxPWBFvzjSSI1mX52uAaI3Cg%2FeO6o3DlsDZGk8MPfo&X-Amz-Signature=35a831e981f85c58e1204fc146fba75a82e88848e399acba6d359d02f42349fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC4H5UU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsMT86e1KnZThKILCa9Q7X7185caiHE%2F4u33x9JAVAIgXnBZ8dnn3x54dDD4XBP7ZKP7xpxb4FUh%2FB3FGzPQQ2Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPupZ%2FBTQuLviKuXUircAwaquNEEcD112Mz5086j5aZJ8luMjaUA7js2KMzKYsuINnNucJ%2BMQGdXRsaLjgExUfxLIi3hXYUuhUR0dkN9leiJB7ypjRd8BXE65cnMKEDQXpv74GG8kH0ELDy40BQubSiJ4qYezoFlolJSG9hoSp0yhpk8VJ%2F0dY8Dae0VkLWO8TELEdPPba07QFfRxbV09DWapNPvRci0Dm%2FaD1jaVYAaB2%2FKmOQxbsJfPuaj%2BXMOEJ2m6h3fWwKiznPrzF2zijvhvCv179UQmj%2F98ClEWiicoO4kgWxTrTi6jpWaQTKiyp0NboJKTegvZW8%2BxpTYtD1qY7SA6pJeaqf5VqwaHAH8Dzw8MtUxpc2VarWqm9Y3Z1cjh4hF7ErYmi%2B%2B6%2FDrY6XE%2FBfgeIWtD1hLjgqbm48ISkoErT82pMhmosBsFPnTV9Ah%2FNPprlFlyIPw%2FUU1Bf%2F1mLb%2FSj8an288E%2BajOkeRe8M9YdTZesUlLfQNshPKpPO021CLR5v%2FA%2F1EKNz7SndOm61nUC4RfyfevgRKrgidQJkxhd0qf3p2YbcijLR6hytYEC%2FqlVjAwb53m07hc36YAMZAxkhkV97DJcVqXuG2S5X%2BmREtWjfY8XlKZYcdCF9EKmMoN7iFB8SIMMDZvsQGOqUBPW2CFwoAMPqnmkaMef%2BENJOnuPU7kEEhWc3O8LK%2Bsfl68S4DT5K0aGhlEY2cUxRhgzYwyY3HkOL%2B%2Fx64MUeqxGqG1OfsfNtpDftKXDOmIpbTRhIDou7b12P0MLvYsUo8tHt9PLTNhQ%2BOV7Kb2KjvcIKM6%2ByMYtCbizPZ99zW%2BpASP8NJEqXxPWBFvzjSSI1mX52uAaI3Cg%2FeO6o3DlsDZGk8MPfo&X-Amz-Signature=c3ad55a4f3b96ae85c32b021486c55703452dcc0b43023e33ba7b037fa5f5d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZC4H5UU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsMT86e1KnZThKILCa9Q7X7185caiHE%2F4u33x9JAVAIgXnBZ8dnn3x54dDD4XBP7ZKP7xpxb4FUh%2FB3FGzPQQ2Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPupZ%2FBTQuLviKuXUircAwaquNEEcD112Mz5086j5aZJ8luMjaUA7js2KMzKYsuINnNucJ%2BMQGdXRsaLjgExUfxLIi3hXYUuhUR0dkN9leiJB7ypjRd8BXE65cnMKEDQXpv74GG8kH0ELDy40BQubSiJ4qYezoFlolJSG9hoSp0yhpk8VJ%2F0dY8Dae0VkLWO8TELEdPPba07QFfRxbV09DWapNPvRci0Dm%2FaD1jaVYAaB2%2FKmOQxbsJfPuaj%2BXMOEJ2m6h3fWwKiznPrzF2zijvhvCv179UQmj%2F98ClEWiicoO4kgWxTrTi6jpWaQTKiyp0NboJKTegvZW8%2BxpTYtD1qY7SA6pJeaqf5VqwaHAH8Dzw8MtUxpc2VarWqm9Y3Z1cjh4hF7ErYmi%2B%2B6%2FDrY6XE%2FBfgeIWtD1hLjgqbm48ISkoErT82pMhmosBsFPnTV9Ah%2FNPprlFlyIPw%2FUU1Bf%2F1mLb%2FSj8an288E%2BajOkeRe8M9YdTZesUlLfQNshPKpPO021CLR5v%2FA%2F1EKNz7SndOm61nUC4RfyfevgRKrgidQJkxhd0qf3p2YbcijLR6hytYEC%2FqlVjAwb53m07hc36YAMZAxkhkV97DJcVqXuG2S5X%2BmREtWjfY8XlKZYcdCF9EKmMoN7iFB8SIMMDZvsQGOqUBPW2CFwoAMPqnmkaMef%2BENJOnuPU7kEEhWc3O8LK%2Bsfl68S4DT5K0aGhlEY2cUxRhgzYwyY3HkOL%2B%2Fx64MUeqxGqG1OfsfNtpDftKXDOmIpbTRhIDou7b12P0MLvYsUo8tHt9PLTNhQ%2BOV7Kb2KjvcIKM6%2ByMYtCbizPZ99zW%2BpASP8NJEqXxPWBFvzjSSI1mX52uAaI3Cg%2FeO6o3DlsDZGk8MPfo&X-Amz-Signature=2ae33edab2fea37433e1b6b609789acf5aeb85cc8ef752cbff1595bb85f44faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
