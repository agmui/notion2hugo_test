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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNZJDGA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52IR4wP7tj7mWNKrBQxRSdL9wtvnky4pk%2BifCwdrwkAIhAPn4bscDQi1PAG23E85St%2F9LKgFcDm5sPsO2sXYJI065KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNNm6al90Zs%2F5VpbQq3AO69fxEgwQBit1o29ovLpVDl4ZASH2r3t2J875PmIjiZSe%2FNq7DTQzanpzbsrGIBaYqy1Su9QtNypLDJDaCW%2FQcT7FpwjtSpcyaB0NuVyBBcC1npvp%2BHC9CipE2K6iVDwfnwWGOX9ho681k9Mcc%2BVZeMNChkEfJkpDoi%2FHXhXkTiyvq83H0RPzWs35NBwVFlaA%2F8DMeWylaXtRf0tQgWfOo0HYkZMSpk7H4PziVGjr833S7vDl%2B5V6BHLa6saC00e%2FD70ThC6ckrfCnpLZuP42Yrx6uQ%2BaZGiLRsEMLRckZTioR9wmqHvNy%2BREkGZUaGakqOra53phZWlZ6I4GPqoomhy8b%2FxblWqjmYAm2x0IEJmlHI%2B6W54BvsI81goOxZG2amihEYJpY6zWK%2Ff8ijkzXP%2Bh5kpWye%2FPHaXdns4dwEQZrSIrhXr9sg3Hb15NJMk2Pe6xSr%2BtUpmIeE%2BxKkMoIQiUxgP7%2Fila3JBPChUaff6PSimfC0FjIfHaqnRcAVsm2G2S900f%2BNkq87jcEFd6mC2Jl%2Fo0c1rjlHeRuDcuj2ofl8thyInECekqaU8vPAyEEW4jz4oEVSvIkFgph13wf1nGIaYzm%2FztnSRlrub8jGNjIDseu4dWHKVaTJDDp0rXEBjqkARtfNnFpeXtGoSZ0pBk%2BT%2FNsVEusq%2BxkbKdx4Agz56hIUq4j0xnXgJstm2L6QFy0WSflk8Eg1LOwpywKVw6Uke3nkwFN9OqvRJeLSEhs1aZ8lSzNS2oh4oxwXkQPxwv9enso%2FmcKQEbMsk8ZsMhhYPsAE7yxWLhL3Vm8TBK0r3FYNInWzD%2FlSRuRtS6JCnF6RkDp%2F0xShHU0i2NQSVHenVsgi1BB&X-Amz-Signature=b9fdbbd76ad007fa91c2a8e470ae566ec4183a45d30052e6fa590af4f7eb7456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNZJDGA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52IR4wP7tj7mWNKrBQxRSdL9wtvnky4pk%2BifCwdrwkAIhAPn4bscDQi1PAG23E85St%2F9LKgFcDm5sPsO2sXYJI065KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNNm6al90Zs%2F5VpbQq3AO69fxEgwQBit1o29ovLpVDl4ZASH2r3t2J875PmIjiZSe%2FNq7DTQzanpzbsrGIBaYqy1Su9QtNypLDJDaCW%2FQcT7FpwjtSpcyaB0NuVyBBcC1npvp%2BHC9CipE2K6iVDwfnwWGOX9ho681k9Mcc%2BVZeMNChkEfJkpDoi%2FHXhXkTiyvq83H0RPzWs35NBwVFlaA%2F8DMeWylaXtRf0tQgWfOo0HYkZMSpk7H4PziVGjr833S7vDl%2B5V6BHLa6saC00e%2FD70ThC6ckrfCnpLZuP42Yrx6uQ%2BaZGiLRsEMLRckZTioR9wmqHvNy%2BREkGZUaGakqOra53phZWlZ6I4GPqoomhy8b%2FxblWqjmYAm2x0IEJmlHI%2B6W54BvsI81goOxZG2amihEYJpY6zWK%2Ff8ijkzXP%2Bh5kpWye%2FPHaXdns4dwEQZrSIrhXr9sg3Hb15NJMk2Pe6xSr%2BtUpmIeE%2BxKkMoIQiUxgP7%2Fila3JBPChUaff6PSimfC0FjIfHaqnRcAVsm2G2S900f%2BNkq87jcEFd6mC2Jl%2Fo0c1rjlHeRuDcuj2ofl8thyInECekqaU8vPAyEEW4jz4oEVSvIkFgph13wf1nGIaYzm%2FztnSRlrub8jGNjIDseu4dWHKVaTJDDp0rXEBjqkARtfNnFpeXtGoSZ0pBk%2BT%2FNsVEusq%2BxkbKdx4Agz56hIUq4j0xnXgJstm2L6QFy0WSflk8Eg1LOwpywKVw6Uke3nkwFN9OqvRJeLSEhs1aZ8lSzNS2oh4oxwXkQPxwv9enso%2FmcKQEbMsk8ZsMhhYPsAE7yxWLhL3Vm8TBK0r3FYNInWzD%2FlSRuRtS6JCnF6RkDp%2F0xShHU0i2NQSVHenVsgi1BB&X-Amz-Signature=f097da228c2c7e82f3b992c91f9071e17e4dcf4f0489e853430b315bb9f30f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNZJDGA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52IR4wP7tj7mWNKrBQxRSdL9wtvnky4pk%2BifCwdrwkAIhAPn4bscDQi1PAG23E85St%2F9LKgFcDm5sPsO2sXYJI065KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNNm6al90Zs%2F5VpbQq3AO69fxEgwQBit1o29ovLpVDl4ZASH2r3t2J875PmIjiZSe%2FNq7DTQzanpzbsrGIBaYqy1Su9QtNypLDJDaCW%2FQcT7FpwjtSpcyaB0NuVyBBcC1npvp%2BHC9CipE2K6iVDwfnwWGOX9ho681k9Mcc%2BVZeMNChkEfJkpDoi%2FHXhXkTiyvq83H0RPzWs35NBwVFlaA%2F8DMeWylaXtRf0tQgWfOo0HYkZMSpk7H4PziVGjr833S7vDl%2B5V6BHLa6saC00e%2FD70ThC6ckrfCnpLZuP42Yrx6uQ%2BaZGiLRsEMLRckZTioR9wmqHvNy%2BREkGZUaGakqOra53phZWlZ6I4GPqoomhy8b%2FxblWqjmYAm2x0IEJmlHI%2B6W54BvsI81goOxZG2amihEYJpY6zWK%2Ff8ijkzXP%2Bh5kpWye%2FPHaXdns4dwEQZrSIrhXr9sg3Hb15NJMk2Pe6xSr%2BtUpmIeE%2BxKkMoIQiUxgP7%2Fila3JBPChUaff6PSimfC0FjIfHaqnRcAVsm2G2S900f%2BNkq87jcEFd6mC2Jl%2Fo0c1rjlHeRuDcuj2ofl8thyInECekqaU8vPAyEEW4jz4oEVSvIkFgph13wf1nGIaYzm%2FztnSRlrub8jGNjIDseu4dWHKVaTJDDp0rXEBjqkARtfNnFpeXtGoSZ0pBk%2BT%2FNsVEusq%2BxkbKdx4Agz56hIUq4j0xnXgJstm2L6QFy0WSflk8Eg1LOwpywKVw6Uke3nkwFN9OqvRJeLSEhs1aZ8lSzNS2oh4oxwXkQPxwv9enso%2FmcKQEbMsk8ZsMhhYPsAE7yxWLhL3Vm8TBK0r3FYNInWzD%2FlSRuRtS6JCnF6RkDp%2F0xShHU0i2NQSVHenVsgi1BB&X-Amz-Signature=fa4dbe62c724da55242e628f0185e9ec5d13c3a53d7794b27f3eca0c0908ab02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNZJDGA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52IR4wP7tj7mWNKrBQxRSdL9wtvnky4pk%2BifCwdrwkAIhAPn4bscDQi1PAG23E85St%2F9LKgFcDm5sPsO2sXYJI065KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNNm6al90Zs%2F5VpbQq3AO69fxEgwQBit1o29ovLpVDl4ZASH2r3t2J875PmIjiZSe%2FNq7DTQzanpzbsrGIBaYqy1Su9QtNypLDJDaCW%2FQcT7FpwjtSpcyaB0NuVyBBcC1npvp%2BHC9CipE2K6iVDwfnwWGOX9ho681k9Mcc%2BVZeMNChkEfJkpDoi%2FHXhXkTiyvq83H0RPzWs35NBwVFlaA%2F8DMeWylaXtRf0tQgWfOo0HYkZMSpk7H4PziVGjr833S7vDl%2B5V6BHLa6saC00e%2FD70ThC6ckrfCnpLZuP42Yrx6uQ%2BaZGiLRsEMLRckZTioR9wmqHvNy%2BREkGZUaGakqOra53phZWlZ6I4GPqoomhy8b%2FxblWqjmYAm2x0IEJmlHI%2B6W54BvsI81goOxZG2amihEYJpY6zWK%2Ff8ijkzXP%2Bh5kpWye%2FPHaXdns4dwEQZrSIrhXr9sg3Hb15NJMk2Pe6xSr%2BtUpmIeE%2BxKkMoIQiUxgP7%2Fila3JBPChUaff6PSimfC0FjIfHaqnRcAVsm2G2S900f%2BNkq87jcEFd6mC2Jl%2Fo0c1rjlHeRuDcuj2ofl8thyInECekqaU8vPAyEEW4jz4oEVSvIkFgph13wf1nGIaYzm%2FztnSRlrub8jGNjIDseu4dWHKVaTJDDp0rXEBjqkARtfNnFpeXtGoSZ0pBk%2BT%2FNsVEusq%2BxkbKdx4Agz56hIUq4j0xnXgJstm2L6QFy0WSflk8Eg1LOwpywKVw6Uke3nkwFN9OqvRJeLSEhs1aZ8lSzNS2oh4oxwXkQPxwv9enso%2FmcKQEbMsk8ZsMhhYPsAE7yxWLhL3Vm8TBK0r3FYNInWzD%2FlSRuRtS6JCnF6RkDp%2F0xShHU0i2NQSVHenVsgi1BB&X-Amz-Signature=701d8a48ca63cd2598a6c0abef09dd024c81752e6cf89c555a44480013bc4953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNZJDGA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52IR4wP7tj7mWNKrBQxRSdL9wtvnky4pk%2BifCwdrwkAIhAPn4bscDQi1PAG23E85St%2F9LKgFcDm5sPsO2sXYJI065KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNNm6al90Zs%2F5VpbQq3AO69fxEgwQBit1o29ovLpVDl4ZASH2r3t2J875PmIjiZSe%2FNq7DTQzanpzbsrGIBaYqy1Su9QtNypLDJDaCW%2FQcT7FpwjtSpcyaB0NuVyBBcC1npvp%2BHC9CipE2K6iVDwfnwWGOX9ho681k9Mcc%2BVZeMNChkEfJkpDoi%2FHXhXkTiyvq83H0RPzWs35NBwVFlaA%2F8DMeWylaXtRf0tQgWfOo0HYkZMSpk7H4PziVGjr833S7vDl%2B5V6BHLa6saC00e%2FD70ThC6ckrfCnpLZuP42Yrx6uQ%2BaZGiLRsEMLRckZTioR9wmqHvNy%2BREkGZUaGakqOra53phZWlZ6I4GPqoomhy8b%2FxblWqjmYAm2x0IEJmlHI%2B6W54BvsI81goOxZG2amihEYJpY6zWK%2Ff8ijkzXP%2Bh5kpWye%2FPHaXdns4dwEQZrSIrhXr9sg3Hb15NJMk2Pe6xSr%2BtUpmIeE%2BxKkMoIQiUxgP7%2Fila3JBPChUaff6PSimfC0FjIfHaqnRcAVsm2G2S900f%2BNkq87jcEFd6mC2Jl%2Fo0c1rjlHeRuDcuj2ofl8thyInECekqaU8vPAyEEW4jz4oEVSvIkFgph13wf1nGIaYzm%2FztnSRlrub8jGNjIDseu4dWHKVaTJDDp0rXEBjqkARtfNnFpeXtGoSZ0pBk%2BT%2FNsVEusq%2BxkbKdx4Agz56hIUq4j0xnXgJstm2L6QFy0WSflk8Eg1LOwpywKVw6Uke3nkwFN9OqvRJeLSEhs1aZ8lSzNS2oh4oxwXkQPxwv9enso%2FmcKQEbMsk8ZsMhhYPsAE7yxWLhL3Vm8TBK0r3FYNInWzD%2FlSRuRtS6JCnF6RkDp%2F0xShHU0i2NQSVHenVsgi1BB&X-Amz-Signature=5ae466c7b667283a7b3a264df2d1314ac3ad8ba3b719380e0d73ae42cd4a0aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNZJDGA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52IR4wP7tj7mWNKrBQxRSdL9wtvnky4pk%2BifCwdrwkAIhAPn4bscDQi1PAG23E85St%2F9LKgFcDm5sPsO2sXYJI065KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNNm6al90Zs%2F5VpbQq3AO69fxEgwQBit1o29ovLpVDl4ZASH2r3t2J875PmIjiZSe%2FNq7DTQzanpzbsrGIBaYqy1Su9QtNypLDJDaCW%2FQcT7FpwjtSpcyaB0NuVyBBcC1npvp%2BHC9CipE2K6iVDwfnwWGOX9ho681k9Mcc%2BVZeMNChkEfJkpDoi%2FHXhXkTiyvq83H0RPzWs35NBwVFlaA%2F8DMeWylaXtRf0tQgWfOo0HYkZMSpk7H4PziVGjr833S7vDl%2B5V6BHLa6saC00e%2FD70ThC6ckrfCnpLZuP42Yrx6uQ%2BaZGiLRsEMLRckZTioR9wmqHvNy%2BREkGZUaGakqOra53phZWlZ6I4GPqoomhy8b%2FxblWqjmYAm2x0IEJmlHI%2B6W54BvsI81goOxZG2amihEYJpY6zWK%2Ff8ijkzXP%2Bh5kpWye%2FPHaXdns4dwEQZrSIrhXr9sg3Hb15NJMk2Pe6xSr%2BtUpmIeE%2BxKkMoIQiUxgP7%2Fila3JBPChUaff6PSimfC0FjIfHaqnRcAVsm2G2S900f%2BNkq87jcEFd6mC2Jl%2Fo0c1rjlHeRuDcuj2ofl8thyInECekqaU8vPAyEEW4jz4oEVSvIkFgph13wf1nGIaYzm%2FztnSRlrub8jGNjIDseu4dWHKVaTJDDp0rXEBjqkARtfNnFpeXtGoSZ0pBk%2BT%2FNsVEusq%2BxkbKdx4Agz56hIUq4j0xnXgJstm2L6QFy0WSflk8Eg1LOwpywKVw6Uke3nkwFN9OqvRJeLSEhs1aZ8lSzNS2oh4oxwXkQPxwv9enso%2FmcKQEbMsk8ZsMhhYPsAE7yxWLhL3Vm8TBK0r3FYNInWzD%2FlSRuRtS6JCnF6RkDp%2F0xShHU0i2NQSVHenVsgi1BB&X-Amz-Signature=ff039c5b6b55373c217504d5a13cf1e2c7629628910ae30a0c62f6f6b4314d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNZJDGA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52IR4wP7tj7mWNKrBQxRSdL9wtvnky4pk%2BifCwdrwkAIhAPn4bscDQi1PAG23E85St%2F9LKgFcDm5sPsO2sXYJI065KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNNm6al90Zs%2F5VpbQq3AO69fxEgwQBit1o29ovLpVDl4ZASH2r3t2J875PmIjiZSe%2FNq7DTQzanpzbsrGIBaYqy1Su9QtNypLDJDaCW%2FQcT7FpwjtSpcyaB0NuVyBBcC1npvp%2BHC9CipE2K6iVDwfnwWGOX9ho681k9Mcc%2BVZeMNChkEfJkpDoi%2FHXhXkTiyvq83H0RPzWs35NBwVFlaA%2F8DMeWylaXtRf0tQgWfOo0HYkZMSpk7H4PziVGjr833S7vDl%2B5V6BHLa6saC00e%2FD70ThC6ckrfCnpLZuP42Yrx6uQ%2BaZGiLRsEMLRckZTioR9wmqHvNy%2BREkGZUaGakqOra53phZWlZ6I4GPqoomhy8b%2FxblWqjmYAm2x0IEJmlHI%2B6W54BvsI81goOxZG2amihEYJpY6zWK%2Ff8ijkzXP%2Bh5kpWye%2FPHaXdns4dwEQZrSIrhXr9sg3Hb15NJMk2Pe6xSr%2BtUpmIeE%2BxKkMoIQiUxgP7%2Fila3JBPChUaff6PSimfC0FjIfHaqnRcAVsm2G2S900f%2BNkq87jcEFd6mC2Jl%2Fo0c1rjlHeRuDcuj2ofl8thyInECekqaU8vPAyEEW4jz4oEVSvIkFgph13wf1nGIaYzm%2FztnSRlrub8jGNjIDseu4dWHKVaTJDDp0rXEBjqkARtfNnFpeXtGoSZ0pBk%2BT%2FNsVEusq%2BxkbKdx4Agz56hIUq4j0xnXgJstm2L6QFy0WSflk8Eg1LOwpywKVw6Uke3nkwFN9OqvRJeLSEhs1aZ8lSzNS2oh4oxwXkQPxwv9enso%2FmcKQEbMsk8ZsMhhYPsAE7yxWLhL3Vm8TBK0r3FYNInWzD%2FlSRuRtS6JCnF6RkDp%2F0xShHU0i2NQSVHenVsgi1BB&X-Amz-Signature=f7c11c731f5be713906a94c8e5060b8130f76a1d13a539ca22a0fd6c8a2af684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
