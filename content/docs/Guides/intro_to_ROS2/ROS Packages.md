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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWQGGAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH1SHgrAxhdsqnw5%2FwqLXk4evsZ%2BVR3V6JwO0lNAn8QrAiEAzKGSOQvDD4h67vT0Uu%2F8xEK3Efpu%2F1wbUsHLHUJKlCUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETFwdwAhWups1bpQSrcA33zwv6HubM2Lq2a6KoNW4SQH9SeuIcDu1Md6e%2BwdZJSupLCAc2Nc6Co7GaqOnhp2CmMvT3IwM%2B5DED0xkrQVssRT%2BmjgTC5u58CYHm6T%2BXgk9114LvLAE7JQNotxbHrl1DNggEKnUIEtgRrmWEsj5QBnaNxqbJngRe2Oli%2F9bfOfFppFnpnKGohP6ClvacDTQtoSBn6rtH%2FQTuxzmCEhFF5EPwQhI2BDuP0Rg%2FjcznFKAAg4cDuQusvt0n8kQFXmuZtw%2ByJbytvDZLCajOpRe2H4khtUqCHWILLPoTdoB0UC2hpQoaJ7iS8hgcsvM44yMXrIDFG3S29kmQsFPKU6VLu7mUkcpCmZC8gYJyVABG7HDjGiGL58S9OJAoyB0JysIBHSpCeL3ADCdFadEYJ3RR%2B54GcCA6MawduGUcTAllnvInAze%2FNadDc4%2FiWeXooeBwzHa4GbB25E3TdyxG%2FxrfrEjyJIKxeLs6hRcaNRQ2WJNlLJBrtLyJmlQNoRftDBUaASCYm3vrv9smG%2FQ8dufeECGtID4mc7wVUjBWGVBtZvPT4Aax%2B86zbvQh7TLy7TEBsfgze%2B6KjqHK3QB4PLqshfvFbRo3%2F808gd72%2BwoZH9Uxtvkfw6asymgCPMLbNoMQGOqUB90pohhw9h3qC7fsEfO3EFPOeRIHxk0n6WB3h0A6ri2PqxeogqA6c6NMymtr57gNPLfcfKh59GYPtYmScrueNG1y3r83LvwaLJk%2Baono0SMvq9mj5CxXBBPsUq3m4ujIYWX6kwfUUD1InwHLAsnfXBQxx50B2XCOrku4c9O38b78HGLlYSJOuGgmCjFJE%2Fp18cdss2x1kYhuNCOaPpdK6%2BQYE8cc7&X-Amz-Signature=972c039e2be2e0c0e987df5137b625cf4b9216086bfbf03dad66f8626172bf34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWQGGAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH1SHgrAxhdsqnw5%2FwqLXk4evsZ%2BVR3V6JwO0lNAn8QrAiEAzKGSOQvDD4h67vT0Uu%2F8xEK3Efpu%2F1wbUsHLHUJKlCUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETFwdwAhWups1bpQSrcA33zwv6HubM2Lq2a6KoNW4SQH9SeuIcDu1Md6e%2BwdZJSupLCAc2Nc6Co7GaqOnhp2CmMvT3IwM%2B5DED0xkrQVssRT%2BmjgTC5u58CYHm6T%2BXgk9114LvLAE7JQNotxbHrl1DNggEKnUIEtgRrmWEsj5QBnaNxqbJngRe2Oli%2F9bfOfFppFnpnKGohP6ClvacDTQtoSBn6rtH%2FQTuxzmCEhFF5EPwQhI2BDuP0Rg%2FjcznFKAAg4cDuQusvt0n8kQFXmuZtw%2ByJbytvDZLCajOpRe2H4khtUqCHWILLPoTdoB0UC2hpQoaJ7iS8hgcsvM44yMXrIDFG3S29kmQsFPKU6VLu7mUkcpCmZC8gYJyVABG7HDjGiGL58S9OJAoyB0JysIBHSpCeL3ADCdFadEYJ3RR%2B54GcCA6MawduGUcTAllnvInAze%2FNadDc4%2FiWeXooeBwzHa4GbB25E3TdyxG%2FxrfrEjyJIKxeLs6hRcaNRQ2WJNlLJBrtLyJmlQNoRftDBUaASCYm3vrv9smG%2FQ8dufeECGtID4mc7wVUjBWGVBtZvPT4Aax%2B86zbvQh7TLy7TEBsfgze%2B6KjqHK3QB4PLqshfvFbRo3%2F808gd72%2BwoZH9Uxtvkfw6asymgCPMLbNoMQGOqUB90pohhw9h3qC7fsEfO3EFPOeRIHxk0n6WB3h0A6ri2PqxeogqA6c6NMymtr57gNPLfcfKh59GYPtYmScrueNG1y3r83LvwaLJk%2Baono0SMvq9mj5CxXBBPsUq3m4ujIYWX6kwfUUD1InwHLAsnfXBQxx50B2XCOrku4c9O38b78HGLlYSJOuGgmCjFJE%2Fp18cdss2x1kYhuNCOaPpdK6%2BQYE8cc7&X-Amz-Signature=893cf67b77b9beeaaf6c08a66b0ae4bbe8870a7bab8a7d7a4da1698f5dc2908d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWQGGAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH1SHgrAxhdsqnw5%2FwqLXk4evsZ%2BVR3V6JwO0lNAn8QrAiEAzKGSOQvDD4h67vT0Uu%2F8xEK3Efpu%2F1wbUsHLHUJKlCUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETFwdwAhWups1bpQSrcA33zwv6HubM2Lq2a6KoNW4SQH9SeuIcDu1Md6e%2BwdZJSupLCAc2Nc6Co7GaqOnhp2CmMvT3IwM%2B5DED0xkrQVssRT%2BmjgTC5u58CYHm6T%2BXgk9114LvLAE7JQNotxbHrl1DNggEKnUIEtgRrmWEsj5QBnaNxqbJngRe2Oli%2F9bfOfFppFnpnKGohP6ClvacDTQtoSBn6rtH%2FQTuxzmCEhFF5EPwQhI2BDuP0Rg%2FjcznFKAAg4cDuQusvt0n8kQFXmuZtw%2ByJbytvDZLCajOpRe2H4khtUqCHWILLPoTdoB0UC2hpQoaJ7iS8hgcsvM44yMXrIDFG3S29kmQsFPKU6VLu7mUkcpCmZC8gYJyVABG7HDjGiGL58S9OJAoyB0JysIBHSpCeL3ADCdFadEYJ3RR%2B54GcCA6MawduGUcTAllnvInAze%2FNadDc4%2FiWeXooeBwzHa4GbB25E3TdyxG%2FxrfrEjyJIKxeLs6hRcaNRQ2WJNlLJBrtLyJmlQNoRftDBUaASCYm3vrv9smG%2FQ8dufeECGtID4mc7wVUjBWGVBtZvPT4Aax%2B86zbvQh7TLy7TEBsfgze%2B6KjqHK3QB4PLqshfvFbRo3%2F808gd72%2BwoZH9Uxtvkfw6asymgCPMLbNoMQGOqUB90pohhw9h3qC7fsEfO3EFPOeRIHxk0n6WB3h0A6ri2PqxeogqA6c6NMymtr57gNPLfcfKh59GYPtYmScrueNG1y3r83LvwaLJk%2Baono0SMvq9mj5CxXBBPsUq3m4ujIYWX6kwfUUD1InwHLAsnfXBQxx50B2XCOrku4c9O38b78HGLlYSJOuGgmCjFJE%2Fp18cdss2x1kYhuNCOaPpdK6%2BQYE8cc7&X-Amz-Signature=6a5735e0e208037d824b1bf292d17661903fab9fb9118de538c37abc3b0c2b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWQGGAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH1SHgrAxhdsqnw5%2FwqLXk4evsZ%2BVR3V6JwO0lNAn8QrAiEAzKGSOQvDD4h67vT0Uu%2F8xEK3Efpu%2F1wbUsHLHUJKlCUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETFwdwAhWups1bpQSrcA33zwv6HubM2Lq2a6KoNW4SQH9SeuIcDu1Md6e%2BwdZJSupLCAc2Nc6Co7GaqOnhp2CmMvT3IwM%2B5DED0xkrQVssRT%2BmjgTC5u58CYHm6T%2BXgk9114LvLAE7JQNotxbHrl1DNggEKnUIEtgRrmWEsj5QBnaNxqbJngRe2Oli%2F9bfOfFppFnpnKGohP6ClvacDTQtoSBn6rtH%2FQTuxzmCEhFF5EPwQhI2BDuP0Rg%2FjcznFKAAg4cDuQusvt0n8kQFXmuZtw%2ByJbytvDZLCajOpRe2H4khtUqCHWILLPoTdoB0UC2hpQoaJ7iS8hgcsvM44yMXrIDFG3S29kmQsFPKU6VLu7mUkcpCmZC8gYJyVABG7HDjGiGL58S9OJAoyB0JysIBHSpCeL3ADCdFadEYJ3RR%2B54GcCA6MawduGUcTAllnvInAze%2FNadDc4%2FiWeXooeBwzHa4GbB25E3TdyxG%2FxrfrEjyJIKxeLs6hRcaNRQ2WJNlLJBrtLyJmlQNoRftDBUaASCYm3vrv9smG%2FQ8dufeECGtID4mc7wVUjBWGVBtZvPT4Aax%2B86zbvQh7TLy7TEBsfgze%2B6KjqHK3QB4PLqshfvFbRo3%2F808gd72%2BwoZH9Uxtvkfw6asymgCPMLbNoMQGOqUB90pohhw9h3qC7fsEfO3EFPOeRIHxk0n6WB3h0A6ri2PqxeogqA6c6NMymtr57gNPLfcfKh59GYPtYmScrueNG1y3r83LvwaLJk%2Baono0SMvq9mj5CxXBBPsUq3m4ujIYWX6kwfUUD1InwHLAsnfXBQxx50B2XCOrku4c9O38b78HGLlYSJOuGgmCjFJE%2Fp18cdss2x1kYhuNCOaPpdK6%2BQYE8cc7&X-Amz-Signature=8a95c823d14ead860d824231798f2ee206abdf38e7fe53efe903d68ea713f939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWQGGAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH1SHgrAxhdsqnw5%2FwqLXk4evsZ%2BVR3V6JwO0lNAn8QrAiEAzKGSOQvDD4h67vT0Uu%2F8xEK3Efpu%2F1wbUsHLHUJKlCUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETFwdwAhWups1bpQSrcA33zwv6HubM2Lq2a6KoNW4SQH9SeuIcDu1Md6e%2BwdZJSupLCAc2Nc6Co7GaqOnhp2CmMvT3IwM%2B5DED0xkrQVssRT%2BmjgTC5u58CYHm6T%2BXgk9114LvLAE7JQNotxbHrl1DNggEKnUIEtgRrmWEsj5QBnaNxqbJngRe2Oli%2F9bfOfFppFnpnKGohP6ClvacDTQtoSBn6rtH%2FQTuxzmCEhFF5EPwQhI2BDuP0Rg%2FjcznFKAAg4cDuQusvt0n8kQFXmuZtw%2ByJbytvDZLCajOpRe2H4khtUqCHWILLPoTdoB0UC2hpQoaJ7iS8hgcsvM44yMXrIDFG3S29kmQsFPKU6VLu7mUkcpCmZC8gYJyVABG7HDjGiGL58S9OJAoyB0JysIBHSpCeL3ADCdFadEYJ3RR%2B54GcCA6MawduGUcTAllnvInAze%2FNadDc4%2FiWeXooeBwzHa4GbB25E3TdyxG%2FxrfrEjyJIKxeLs6hRcaNRQ2WJNlLJBrtLyJmlQNoRftDBUaASCYm3vrv9smG%2FQ8dufeECGtID4mc7wVUjBWGVBtZvPT4Aax%2B86zbvQh7TLy7TEBsfgze%2B6KjqHK3QB4PLqshfvFbRo3%2F808gd72%2BwoZH9Uxtvkfw6asymgCPMLbNoMQGOqUB90pohhw9h3qC7fsEfO3EFPOeRIHxk0n6WB3h0A6ri2PqxeogqA6c6NMymtr57gNPLfcfKh59GYPtYmScrueNG1y3r83LvwaLJk%2Baono0SMvq9mj5CxXBBPsUq3m4ujIYWX6kwfUUD1InwHLAsnfXBQxx50B2XCOrku4c9O38b78HGLlYSJOuGgmCjFJE%2Fp18cdss2x1kYhuNCOaPpdK6%2BQYE8cc7&X-Amz-Signature=28e7e8cce909f8ec969a65f37341c9969511d0f673be9f73b86fa5f8fc6f6545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWQGGAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH1SHgrAxhdsqnw5%2FwqLXk4evsZ%2BVR3V6JwO0lNAn8QrAiEAzKGSOQvDD4h67vT0Uu%2F8xEK3Efpu%2F1wbUsHLHUJKlCUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETFwdwAhWups1bpQSrcA33zwv6HubM2Lq2a6KoNW4SQH9SeuIcDu1Md6e%2BwdZJSupLCAc2Nc6Co7GaqOnhp2CmMvT3IwM%2B5DED0xkrQVssRT%2BmjgTC5u58CYHm6T%2BXgk9114LvLAE7JQNotxbHrl1DNggEKnUIEtgRrmWEsj5QBnaNxqbJngRe2Oli%2F9bfOfFppFnpnKGohP6ClvacDTQtoSBn6rtH%2FQTuxzmCEhFF5EPwQhI2BDuP0Rg%2FjcznFKAAg4cDuQusvt0n8kQFXmuZtw%2ByJbytvDZLCajOpRe2H4khtUqCHWILLPoTdoB0UC2hpQoaJ7iS8hgcsvM44yMXrIDFG3S29kmQsFPKU6VLu7mUkcpCmZC8gYJyVABG7HDjGiGL58S9OJAoyB0JysIBHSpCeL3ADCdFadEYJ3RR%2B54GcCA6MawduGUcTAllnvInAze%2FNadDc4%2FiWeXooeBwzHa4GbB25E3TdyxG%2FxrfrEjyJIKxeLs6hRcaNRQ2WJNlLJBrtLyJmlQNoRftDBUaASCYm3vrv9smG%2FQ8dufeECGtID4mc7wVUjBWGVBtZvPT4Aax%2B86zbvQh7TLy7TEBsfgze%2B6KjqHK3QB4PLqshfvFbRo3%2F808gd72%2BwoZH9Uxtvkfw6asymgCPMLbNoMQGOqUB90pohhw9h3qC7fsEfO3EFPOeRIHxk0n6WB3h0A6ri2PqxeogqA6c6NMymtr57gNPLfcfKh59GYPtYmScrueNG1y3r83LvwaLJk%2Baono0SMvq9mj5CxXBBPsUq3m4ujIYWX6kwfUUD1InwHLAsnfXBQxx50B2XCOrku4c9O38b78HGLlYSJOuGgmCjFJE%2Fp18cdss2x1kYhuNCOaPpdK6%2BQYE8cc7&X-Amz-Signature=b690eae8dbf53a366520c24c392eef5293a1e04201c8ee6c3718c7f4abcfa429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWQGGAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH1SHgrAxhdsqnw5%2FwqLXk4evsZ%2BVR3V6JwO0lNAn8QrAiEAzKGSOQvDD4h67vT0Uu%2F8xEK3Efpu%2F1wbUsHLHUJKlCUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETFwdwAhWups1bpQSrcA33zwv6HubM2Lq2a6KoNW4SQH9SeuIcDu1Md6e%2BwdZJSupLCAc2Nc6Co7GaqOnhp2CmMvT3IwM%2B5DED0xkrQVssRT%2BmjgTC5u58CYHm6T%2BXgk9114LvLAE7JQNotxbHrl1DNggEKnUIEtgRrmWEsj5QBnaNxqbJngRe2Oli%2F9bfOfFppFnpnKGohP6ClvacDTQtoSBn6rtH%2FQTuxzmCEhFF5EPwQhI2BDuP0Rg%2FjcznFKAAg4cDuQusvt0n8kQFXmuZtw%2ByJbytvDZLCajOpRe2H4khtUqCHWILLPoTdoB0UC2hpQoaJ7iS8hgcsvM44yMXrIDFG3S29kmQsFPKU6VLu7mUkcpCmZC8gYJyVABG7HDjGiGL58S9OJAoyB0JysIBHSpCeL3ADCdFadEYJ3RR%2B54GcCA6MawduGUcTAllnvInAze%2FNadDc4%2FiWeXooeBwzHa4GbB25E3TdyxG%2FxrfrEjyJIKxeLs6hRcaNRQ2WJNlLJBrtLyJmlQNoRftDBUaASCYm3vrv9smG%2FQ8dufeECGtID4mc7wVUjBWGVBtZvPT4Aax%2B86zbvQh7TLy7TEBsfgze%2B6KjqHK3QB4PLqshfvFbRo3%2F808gd72%2BwoZH9Uxtvkfw6asymgCPMLbNoMQGOqUB90pohhw9h3qC7fsEfO3EFPOeRIHxk0n6WB3h0A6ri2PqxeogqA6c6NMymtr57gNPLfcfKh59GYPtYmScrueNG1y3r83LvwaLJk%2Baono0SMvq9mj5CxXBBPsUq3m4ujIYWX6kwfUUD1InwHLAsnfXBQxx50B2XCOrku4c9O38b78HGLlYSJOuGgmCjFJE%2Fp18cdss2x1kYhuNCOaPpdK6%2BQYE8cc7&X-Amz-Signature=6d5f95cb8d9cb88759ea36663a26fa02e488d2a8d3de255f40891595cd36f4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
