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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZN3XMXU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33qWMnDcPgzuDBhcPno5H7N%2BdM3NKgwQjM37LwIUnbwIgTaoACS7PzwZSWlTU9tdRt5wdpIcBH%2F08h5xL2K1zoqkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPv9sGlstOetGFS%2ByircA5yUGu2pVHzqW5ZSCH9mEYbN7Ur25t9FBZY3jkCWw%2BCoW%2FRV3Dfa5rcxtnSBNo7cbYn3HBqp%2F3iWPqPJMAEQN9PeaYBf0vphi32A0xtY9DvY4t1K8tZeU8GLfJ6FYV5wzXQ31aWLbQdEQCqI5U8cZ5G6XQVrmC2hydkkHZD5tk%2B4TS8SDMCHiZwHGkpMXRmUnoXtnh5Ru4kpIiB3dLaaF0f5czIzTxYyRLV%2F63khHEeRvTJssyaeZKnMqSJnPCpQnuPGcbutnkNeJ2ikDMYn%2BjkTOfGkER4kvTWTtQTdOc2Ph7rrHGxcQVRcKqPaVwrhsF9qJI1pPdgOMQNs2AQmpQLO%2BN7E4i1MVRHvODEiDMqyMwl76pRP4zBVIvwNNfyEC0K5vdkvKcc6ZcYuockIQkcnAfMawhKiI37JreS1Oo1a2cBPjLorRk%2BNDa1j8J02fSMjQX9le4RDen7MSJq7eQ9zSeWfpFbRowheM%2Fk8QCEQffpBcVw3etSwCM91RKt186Ricr%2BCbdrLTCqTVckdn483d9fydzJO0I0ELBLaGx0wvjTQoZOD8sWVfVfP%2FcWrdXDNiXLMdkhugLhsxPVYSdWTDWIkP2RMBD6nrR%2BV0MIvNGhqJq%2BRijjsTdvZMMbFkMIGOqUB41tDo0ojs3kn6YNo%2B9eJ2617dnrnZ5V1BlqUQ8qS%2BcbjcWRusrrWGGHUXj3iFVcFUo%2Fw0nvZb8hnH%2FJj1Q9EksVh0%2Fu%2BOvLCftgjHneMNitGDkUNduA51Av9ilGxmvKsmIitWCwjz2DiLGGs%2BA7IfDh%2Fqm3aHxYCtGpZqWOh9dH7qaEMGqoGKw%2FfDfOrea0iC4aTKLveFRDVsjNqJzBYZwzwVUhQ&X-Amz-Signature=172ba6f64bfd56cd27aec03f1b129654dc0eb444dda69c83d48410878025c653&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZN3XMXU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33qWMnDcPgzuDBhcPno5H7N%2BdM3NKgwQjM37LwIUnbwIgTaoACS7PzwZSWlTU9tdRt5wdpIcBH%2F08h5xL2K1zoqkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPv9sGlstOetGFS%2ByircA5yUGu2pVHzqW5ZSCH9mEYbN7Ur25t9FBZY3jkCWw%2BCoW%2FRV3Dfa5rcxtnSBNo7cbYn3HBqp%2F3iWPqPJMAEQN9PeaYBf0vphi32A0xtY9DvY4t1K8tZeU8GLfJ6FYV5wzXQ31aWLbQdEQCqI5U8cZ5G6XQVrmC2hydkkHZD5tk%2B4TS8SDMCHiZwHGkpMXRmUnoXtnh5Ru4kpIiB3dLaaF0f5czIzTxYyRLV%2F63khHEeRvTJssyaeZKnMqSJnPCpQnuPGcbutnkNeJ2ikDMYn%2BjkTOfGkER4kvTWTtQTdOc2Ph7rrHGxcQVRcKqPaVwrhsF9qJI1pPdgOMQNs2AQmpQLO%2BN7E4i1MVRHvODEiDMqyMwl76pRP4zBVIvwNNfyEC0K5vdkvKcc6ZcYuockIQkcnAfMawhKiI37JreS1Oo1a2cBPjLorRk%2BNDa1j8J02fSMjQX9le4RDen7MSJq7eQ9zSeWfpFbRowheM%2Fk8QCEQffpBcVw3etSwCM91RKt186Ricr%2BCbdrLTCqTVckdn483d9fydzJO0I0ELBLaGx0wvjTQoZOD8sWVfVfP%2FcWrdXDNiXLMdkhugLhsxPVYSdWTDWIkP2RMBD6nrR%2BV0MIvNGhqJq%2BRijjsTdvZMMbFkMIGOqUB41tDo0ojs3kn6YNo%2B9eJ2617dnrnZ5V1BlqUQ8qS%2BcbjcWRusrrWGGHUXj3iFVcFUo%2Fw0nvZb8hnH%2FJj1Q9EksVh0%2Fu%2BOvLCftgjHneMNitGDkUNduA51Av9ilGxmvKsmIitWCwjz2DiLGGs%2BA7IfDh%2Fqm3aHxYCtGpZqWOh9dH7qaEMGqoGKw%2FfDfOrea0iC4aTKLveFRDVsjNqJzBYZwzwVUhQ&X-Amz-Signature=6c40854294473b9b05e7f5037cc21ef028981ddd70a1d334abbc491c8743b44d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZN3XMXU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33qWMnDcPgzuDBhcPno5H7N%2BdM3NKgwQjM37LwIUnbwIgTaoACS7PzwZSWlTU9tdRt5wdpIcBH%2F08h5xL2K1zoqkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPv9sGlstOetGFS%2ByircA5yUGu2pVHzqW5ZSCH9mEYbN7Ur25t9FBZY3jkCWw%2BCoW%2FRV3Dfa5rcxtnSBNo7cbYn3HBqp%2F3iWPqPJMAEQN9PeaYBf0vphi32A0xtY9DvY4t1K8tZeU8GLfJ6FYV5wzXQ31aWLbQdEQCqI5U8cZ5G6XQVrmC2hydkkHZD5tk%2B4TS8SDMCHiZwHGkpMXRmUnoXtnh5Ru4kpIiB3dLaaF0f5czIzTxYyRLV%2F63khHEeRvTJssyaeZKnMqSJnPCpQnuPGcbutnkNeJ2ikDMYn%2BjkTOfGkER4kvTWTtQTdOc2Ph7rrHGxcQVRcKqPaVwrhsF9qJI1pPdgOMQNs2AQmpQLO%2BN7E4i1MVRHvODEiDMqyMwl76pRP4zBVIvwNNfyEC0K5vdkvKcc6ZcYuockIQkcnAfMawhKiI37JreS1Oo1a2cBPjLorRk%2BNDa1j8J02fSMjQX9le4RDen7MSJq7eQ9zSeWfpFbRowheM%2Fk8QCEQffpBcVw3etSwCM91RKt186Ricr%2BCbdrLTCqTVckdn483d9fydzJO0I0ELBLaGx0wvjTQoZOD8sWVfVfP%2FcWrdXDNiXLMdkhugLhsxPVYSdWTDWIkP2RMBD6nrR%2BV0MIvNGhqJq%2BRijjsTdvZMMbFkMIGOqUB41tDo0ojs3kn6YNo%2B9eJ2617dnrnZ5V1BlqUQ8qS%2BcbjcWRusrrWGGHUXj3iFVcFUo%2Fw0nvZb8hnH%2FJj1Q9EksVh0%2Fu%2BOvLCftgjHneMNitGDkUNduA51Av9ilGxmvKsmIitWCwjz2DiLGGs%2BA7IfDh%2Fqm3aHxYCtGpZqWOh9dH7qaEMGqoGKw%2FfDfOrea0iC4aTKLveFRDVsjNqJzBYZwzwVUhQ&X-Amz-Signature=8d10a85be2bd9b17c5faee665d6d16c564bfa2a7f8621ee8bd0aa7b07e63e6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZN3XMXU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33qWMnDcPgzuDBhcPno5H7N%2BdM3NKgwQjM37LwIUnbwIgTaoACS7PzwZSWlTU9tdRt5wdpIcBH%2F08h5xL2K1zoqkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPv9sGlstOetGFS%2ByircA5yUGu2pVHzqW5ZSCH9mEYbN7Ur25t9FBZY3jkCWw%2BCoW%2FRV3Dfa5rcxtnSBNo7cbYn3HBqp%2F3iWPqPJMAEQN9PeaYBf0vphi32A0xtY9DvY4t1K8tZeU8GLfJ6FYV5wzXQ31aWLbQdEQCqI5U8cZ5G6XQVrmC2hydkkHZD5tk%2B4TS8SDMCHiZwHGkpMXRmUnoXtnh5Ru4kpIiB3dLaaF0f5czIzTxYyRLV%2F63khHEeRvTJssyaeZKnMqSJnPCpQnuPGcbutnkNeJ2ikDMYn%2BjkTOfGkER4kvTWTtQTdOc2Ph7rrHGxcQVRcKqPaVwrhsF9qJI1pPdgOMQNs2AQmpQLO%2BN7E4i1MVRHvODEiDMqyMwl76pRP4zBVIvwNNfyEC0K5vdkvKcc6ZcYuockIQkcnAfMawhKiI37JreS1Oo1a2cBPjLorRk%2BNDa1j8J02fSMjQX9le4RDen7MSJq7eQ9zSeWfpFbRowheM%2Fk8QCEQffpBcVw3etSwCM91RKt186Ricr%2BCbdrLTCqTVckdn483d9fydzJO0I0ELBLaGx0wvjTQoZOD8sWVfVfP%2FcWrdXDNiXLMdkhugLhsxPVYSdWTDWIkP2RMBD6nrR%2BV0MIvNGhqJq%2BRijjsTdvZMMbFkMIGOqUB41tDo0ojs3kn6YNo%2B9eJ2617dnrnZ5V1BlqUQ8qS%2BcbjcWRusrrWGGHUXj3iFVcFUo%2Fw0nvZb8hnH%2FJj1Q9EksVh0%2Fu%2BOvLCftgjHneMNitGDkUNduA51Av9ilGxmvKsmIitWCwjz2DiLGGs%2BA7IfDh%2Fqm3aHxYCtGpZqWOh9dH7qaEMGqoGKw%2FfDfOrea0iC4aTKLveFRDVsjNqJzBYZwzwVUhQ&X-Amz-Signature=85a2a348b5bce85dcd84b19c7e2ff3714d39b5c7e2501a1091c16ecf8d39d5da&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZN3XMXU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33qWMnDcPgzuDBhcPno5H7N%2BdM3NKgwQjM37LwIUnbwIgTaoACS7PzwZSWlTU9tdRt5wdpIcBH%2F08h5xL2K1zoqkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPv9sGlstOetGFS%2ByircA5yUGu2pVHzqW5ZSCH9mEYbN7Ur25t9FBZY3jkCWw%2BCoW%2FRV3Dfa5rcxtnSBNo7cbYn3HBqp%2F3iWPqPJMAEQN9PeaYBf0vphi32A0xtY9DvY4t1K8tZeU8GLfJ6FYV5wzXQ31aWLbQdEQCqI5U8cZ5G6XQVrmC2hydkkHZD5tk%2B4TS8SDMCHiZwHGkpMXRmUnoXtnh5Ru4kpIiB3dLaaF0f5czIzTxYyRLV%2F63khHEeRvTJssyaeZKnMqSJnPCpQnuPGcbutnkNeJ2ikDMYn%2BjkTOfGkER4kvTWTtQTdOc2Ph7rrHGxcQVRcKqPaVwrhsF9qJI1pPdgOMQNs2AQmpQLO%2BN7E4i1MVRHvODEiDMqyMwl76pRP4zBVIvwNNfyEC0K5vdkvKcc6ZcYuockIQkcnAfMawhKiI37JreS1Oo1a2cBPjLorRk%2BNDa1j8J02fSMjQX9le4RDen7MSJq7eQ9zSeWfpFbRowheM%2Fk8QCEQffpBcVw3etSwCM91RKt186Ricr%2BCbdrLTCqTVckdn483d9fydzJO0I0ELBLaGx0wvjTQoZOD8sWVfVfP%2FcWrdXDNiXLMdkhugLhsxPVYSdWTDWIkP2RMBD6nrR%2BV0MIvNGhqJq%2BRijjsTdvZMMbFkMIGOqUB41tDo0ojs3kn6YNo%2B9eJ2617dnrnZ5V1BlqUQ8qS%2BcbjcWRusrrWGGHUXj3iFVcFUo%2Fw0nvZb8hnH%2FJj1Q9EksVh0%2Fu%2BOvLCftgjHneMNitGDkUNduA51Av9ilGxmvKsmIitWCwjz2DiLGGs%2BA7IfDh%2Fqm3aHxYCtGpZqWOh9dH7qaEMGqoGKw%2FfDfOrea0iC4aTKLveFRDVsjNqJzBYZwzwVUhQ&X-Amz-Signature=94bdd79587823d9e32dc0501e2c1f0a6dc12f05e6212ff8ab9db4fff76cc68da&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZN3XMXU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33qWMnDcPgzuDBhcPno5H7N%2BdM3NKgwQjM37LwIUnbwIgTaoACS7PzwZSWlTU9tdRt5wdpIcBH%2F08h5xL2K1zoqkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPv9sGlstOetGFS%2ByircA5yUGu2pVHzqW5ZSCH9mEYbN7Ur25t9FBZY3jkCWw%2BCoW%2FRV3Dfa5rcxtnSBNo7cbYn3HBqp%2F3iWPqPJMAEQN9PeaYBf0vphi32A0xtY9DvY4t1K8tZeU8GLfJ6FYV5wzXQ31aWLbQdEQCqI5U8cZ5G6XQVrmC2hydkkHZD5tk%2B4TS8SDMCHiZwHGkpMXRmUnoXtnh5Ru4kpIiB3dLaaF0f5czIzTxYyRLV%2F63khHEeRvTJssyaeZKnMqSJnPCpQnuPGcbutnkNeJ2ikDMYn%2BjkTOfGkER4kvTWTtQTdOc2Ph7rrHGxcQVRcKqPaVwrhsF9qJI1pPdgOMQNs2AQmpQLO%2BN7E4i1MVRHvODEiDMqyMwl76pRP4zBVIvwNNfyEC0K5vdkvKcc6ZcYuockIQkcnAfMawhKiI37JreS1Oo1a2cBPjLorRk%2BNDa1j8J02fSMjQX9le4RDen7MSJq7eQ9zSeWfpFbRowheM%2Fk8QCEQffpBcVw3etSwCM91RKt186Ricr%2BCbdrLTCqTVckdn483d9fydzJO0I0ELBLaGx0wvjTQoZOD8sWVfVfP%2FcWrdXDNiXLMdkhugLhsxPVYSdWTDWIkP2RMBD6nrR%2BV0MIvNGhqJq%2BRijjsTdvZMMbFkMIGOqUB41tDo0ojs3kn6YNo%2B9eJ2617dnrnZ5V1BlqUQ8qS%2BcbjcWRusrrWGGHUXj3iFVcFUo%2Fw0nvZb8hnH%2FJj1Q9EksVh0%2Fu%2BOvLCftgjHneMNitGDkUNduA51Av9ilGxmvKsmIitWCwjz2DiLGGs%2BA7IfDh%2Fqm3aHxYCtGpZqWOh9dH7qaEMGqoGKw%2FfDfOrea0iC4aTKLveFRDVsjNqJzBYZwzwVUhQ&X-Amz-Signature=3864903ca1c3241fe65a188fc76e633ebc1a34bc212487ae5274bfdabe76b191&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZN3XMXU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33qWMnDcPgzuDBhcPno5H7N%2BdM3NKgwQjM37LwIUnbwIgTaoACS7PzwZSWlTU9tdRt5wdpIcBH%2F08h5xL2K1zoqkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPv9sGlstOetGFS%2ByircA5yUGu2pVHzqW5ZSCH9mEYbN7Ur25t9FBZY3jkCWw%2BCoW%2FRV3Dfa5rcxtnSBNo7cbYn3HBqp%2F3iWPqPJMAEQN9PeaYBf0vphi32A0xtY9DvY4t1K8tZeU8GLfJ6FYV5wzXQ31aWLbQdEQCqI5U8cZ5G6XQVrmC2hydkkHZD5tk%2B4TS8SDMCHiZwHGkpMXRmUnoXtnh5Ru4kpIiB3dLaaF0f5czIzTxYyRLV%2F63khHEeRvTJssyaeZKnMqSJnPCpQnuPGcbutnkNeJ2ikDMYn%2BjkTOfGkER4kvTWTtQTdOc2Ph7rrHGxcQVRcKqPaVwrhsF9qJI1pPdgOMQNs2AQmpQLO%2BN7E4i1MVRHvODEiDMqyMwl76pRP4zBVIvwNNfyEC0K5vdkvKcc6ZcYuockIQkcnAfMawhKiI37JreS1Oo1a2cBPjLorRk%2BNDa1j8J02fSMjQX9le4RDen7MSJq7eQ9zSeWfpFbRowheM%2Fk8QCEQffpBcVw3etSwCM91RKt186Ricr%2BCbdrLTCqTVckdn483d9fydzJO0I0ELBLaGx0wvjTQoZOD8sWVfVfP%2FcWrdXDNiXLMdkhugLhsxPVYSdWTDWIkP2RMBD6nrR%2BV0MIvNGhqJq%2BRijjsTdvZMMbFkMIGOqUB41tDo0ojs3kn6YNo%2B9eJ2617dnrnZ5V1BlqUQ8qS%2BcbjcWRusrrWGGHUXj3iFVcFUo%2Fw0nvZb8hnH%2FJj1Q9EksVh0%2Fu%2BOvLCftgjHneMNitGDkUNduA51Av9ilGxmvKsmIitWCwjz2DiLGGs%2BA7IfDh%2Fqm3aHxYCtGpZqWOh9dH7qaEMGqoGKw%2FfDfOrea0iC4aTKLveFRDVsjNqJzBYZwzwVUhQ&X-Amz-Signature=208c951d0fe9c6cd86273b1875aa34c6b4ef24cabf7fc4e7c888c72a978a93d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
