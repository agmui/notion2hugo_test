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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64VRQPY%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICnG2rKAiKSfSbRxmRco%2B1Ou4mjLQYgT2NiFBJRpRy5fAiEA%2Fp%2BzUW6yQa9PA1JiwLFr6tvbaPb%2FVZ%2BmJ64xpq06tY0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSNbaoeatxHXj3OVCrcAwfcvrcK239sj%2BTyp2rGEn%2FD8Y3UFsTXTrulyQaADP8N97pk67HzWjUxi8ikfe4qqxFQc9yv7qRXPiEj0F78KadwaIf0WXiu%2BWbCLQktPNiUPxpk2NezJ%2F1Ys2s%2BskZBH1zlIceEaWA0S9%2BNfofs8PuUu1zuzLuk7VCtjCZ%2FvMq9V%2Fpax8SmkTjSqjo4soRrJTirzeuq%2FS2xrPSE2yMPLuqcAVh7J6CQDNQdw0rrPqfwfsjg4tqueJpkwswOuJC%2Bh5vkPe9dakqA9vxMUhI4CucI27uuW0kgTPo7geyxmavBdXQ%2F08ZtUFTERo9i3Ha%2F1avFpLnB1G%2FTVQvJaWaW9G%2B2jdJYfzNy6E2XWoG6rPLTadakVFhUauGS%2FujZeqklai%2F3DAypIjxjP7%2B%2BFm8k5qcsBzL%2FQqbJrwYm3ynN2SuFYwJwLaQA58PWFgfEdCARy4gDZ9kw%2FDNTlHly2283voDVM%2B%2BUj%2BWQzF17AkAgoCrcjGeczhhZfz6%2FaI8MFPLOb7evIqPNgCfaqSXFYXsiv%2F%2FlTC9zFlVWegS10%2B905Rb77jgwthQIlSLl3xT5xKOEu07Fqcmg2f4HpfOwAWuA5S1SgloqH1g67nxNsXf27UQCYAnAyaJDYlMupbWxMPP6u8EGOqUBkZmu7%2BmfS1tesqlVSx0%2ByTPy8LVGYilrpCdvk5RQkt4MroQRO9%2FJCkh11MhL3yWq1J54SMBJ%2FBD31gwgc79p0cHFNzjYYeu9xODUnjcuw10t1NtVjjfNb7EHeeoIZa%2BDHY%2FiwIbmf4GUpw33T8I8sXs%2BZOMK524BXUzr%2F%2B5qYPh0so3TWqUdMdKKa7GLx7%2BHRN1gQVXhfeDhktlboiQih3bg0gIc&X-Amz-Signature=1c0aa6265211bdfed5d8c3ec12554eb99102a6216737eb57a270421a7d6bbf9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64VRQPY%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICnG2rKAiKSfSbRxmRco%2B1Ou4mjLQYgT2NiFBJRpRy5fAiEA%2Fp%2BzUW6yQa9PA1JiwLFr6tvbaPb%2FVZ%2BmJ64xpq06tY0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSNbaoeatxHXj3OVCrcAwfcvrcK239sj%2BTyp2rGEn%2FD8Y3UFsTXTrulyQaADP8N97pk67HzWjUxi8ikfe4qqxFQc9yv7qRXPiEj0F78KadwaIf0WXiu%2BWbCLQktPNiUPxpk2NezJ%2F1Ys2s%2BskZBH1zlIceEaWA0S9%2BNfofs8PuUu1zuzLuk7VCtjCZ%2FvMq9V%2Fpax8SmkTjSqjo4soRrJTirzeuq%2FS2xrPSE2yMPLuqcAVh7J6CQDNQdw0rrPqfwfsjg4tqueJpkwswOuJC%2Bh5vkPe9dakqA9vxMUhI4CucI27uuW0kgTPo7geyxmavBdXQ%2F08ZtUFTERo9i3Ha%2F1avFpLnB1G%2FTVQvJaWaW9G%2B2jdJYfzNy6E2XWoG6rPLTadakVFhUauGS%2FujZeqklai%2F3DAypIjxjP7%2B%2BFm8k5qcsBzL%2FQqbJrwYm3ynN2SuFYwJwLaQA58PWFgfEdCARy4gDZ9kw%2FDNTlHly2283voDVM%2B%2BUj%2BWQzF17AkAgoCrcjGeczhhZfz6%2FaI8MFPLOb7evIqPNgCfaqSXFYXsiv%2F%2FlTC9zFlVWegS10%2B905Rb77jgwthQIlSLl3xT5xKOEu07Fqcmg2f4HpfOwAWuA5S1SgloqH1g67nxNsXf27UQCYAnAyaJDYlMupbWxMPP6u8EGOqUBkZmu7%2BmfS1tesqlVSx0%2ByTPy8LVGYilrpCdvk5RQkt4MroQRO9%2FJCkh11MhL3yWq1J54SMBJ%2FBD31gwgc79p0cHFNzjYYeu9xODUnjcuw10t1NtVjjfNb7EHeeoIZa%2BDHY%2FiwIbmf4GUpw33T8I8sXs%2BZOMK524BXUzr%2F%2B5qYPh0so3TWqUdMdKKa7GLx7%2BHRN1gQVXhfeDhktlboiQih3bg0gIc&X-Amz-Signature=e2f38a307ae713113704a560d5ee0901ff97013cd631e0a8af2db189cff84260&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64VRQPY%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICnG2rKAiKSfSbRxmRco%2B1Ou4mjLQYgT2NiFBJRpRy5fAiEA%2Fp%2BzUW6yQa9PA1JiwLFr6tvbaPb%2FVZ%2BmJ64xpq06tY0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSNbaoeatxHXj3OVCrcAwfcvrcK239sj%2BTyp2rGEn%2FD8Y3UFsTXTrulyQaADP8N97pk67HzWjUxi8ikfe4qqxFQc9yv7qRXPiEj0F78KadwaIf0WXiu%2BWbCLQktPNiUPxpk2NezJ%2F1Ys2s%2BskZBH1zlIceEaWA0S9%2BNfofs8PuUu1zuzLuk7VCtjCZ%2FvMq9V%2Fpax8SmkTjSqjo4soRrJTirzeuq%2FS2xrPSE2yMPLuqcAVh7J6CQDNQdw0rrPqfwfsjg4tqueJpkwswOuJC%2Bh5vkPe9dakqA9vxMUhI4CucI27uuW0kgTPo7geyxmavBdXQ%2F08ZtUFTERo9i3Ha%2F1avFpLnB1G%2FTVQvJaWaW9G%2B2jdJYfzNy6E2XWoG6rPLTadakVFhUauGS%2FujZeqklai%2F3DAypIjxjP7%2B%2BFm8k5qcsBzL%2FQqbJrwYm3ynN2SuFYwJwLaQA58PWFgfEdCARy4gDZ9kw%2FDNTlHly2283voDVM%2B%2BUj%2BWQzF17AkAgoCrcjGeczhhZfz6%2FaI8MFPLOb7evIqPNgCfaqSXFYXsiv%2F%2FlTC9zFlVWegS10%2B905Rb77jgwthQIlSLl3xT5xKOEu07Fqcmg2f4HpfOwAWuA5S1SgloqH1g67nxNsXf27UQCYAnAyaJDYlMupbWxMPP6u8EGOqUBkZmu7%2BmfS1tesqlVSx0%2ByTPy8LVGYilrpCdvk5RQkt4MroQRO9%2FJCkh11MhL3yWq1J54SMBJ%2FBD31gwgc79p0cHFNzjYYeu9xODUnjcuw10t1NtVjjfNb7EHeeoIZa%2BDHY%2FiwIbmf4GUpw33T8I8sXs%2BZOMK524BXUzr%2F%2B5qYPh0so3TWqUdMdKKa7GLx7%2BHRN1gQVXhfeDhktlboiQih3bg0gIc&X-Amz-Signature=408fa9be212057e40b09fd34d3f1b77e47d02482d37dad44aeda99f8d5b8e5da&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64VRQPY%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICnG2rKAiKSfSbRxmRco%2B1Ou4mjLQYgT2NiFBJRpRy5fAiEA%2Fp%2BzUW6yQa9PA1JiwLFr6tvbaPb%2FVZ%2BmJ64xpq06tY0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSNbaoeatxHXj3OVCrcAwfcvrcK239sj%2BTyp2rGEn%2FD8Y3UFsTXTrulyQaADP8N97pk67HzWjUxi8ikfe4qqxFQc9yv7qRXPiEj0F78KadwaIf0WXiu%2BWbCLQktPNiUPxpk2NezJ%2F1Ys2s%2BskZBH1zlIceEaWA0S9%2BNfofs8PuUu1zuzLuk7VCtjCZ%2FvMq9V%2Fpax8SmkTjSqjo4soRrJTirzeuq%2FS2xrPSE2yMPLuqcAVh7J6CQDNQdw0rrPqfwfsjg4tqueJpkwswOuJC%2Bh5vkPe9dakqA9vxMUhI4CucI27uuW0kgTPo7geyxmavBdXQ%2F08ZtUFTERo9i3Ha%2F1avFpLnB1G%2FTVQvJaWaW9G%2B2jdJYfzNy6E2XWoG6rPLTadakVFhUauGS%2FujZeqklai%2F3DAypIjxjP7%2B%2BFm8k5qcsBzL%2FQqbJrwYm3ynN2SuFYwJwLaQA58PWFgfEdCARy4gDZ9kw%2FDNTlHly2283voDVM%2B%2BUj%2BWQzF17AkAgoCrcjGeczhhZfz6%2FaI8MFPLOb7evIqPNgCfaqSXFYXsiv%2F%2FlTC9zFlVWegS10%2B905Rb77jgwthQIlSLl3xT5xKOEu07Fqcmg2f4HpfOwAWuA5S1SgloqH1g67nxNsXf27UQCYAnAyaJDYlMupbWxMPP6u8EGOqUBkZmu7%2BmfS1tesqlVSx0%2ByTPy8LVGYilrpCdvk5RQkt4MroQRO9%2FJCkh11MhL3yWq1J54SMBJ%2FBD31gwgc79p0cHFNzjYYeu9xODUnjcuw10t1NtVjjfNb7EHeeoIZa%2BDHY%2FiwIbmf4GUpw33T8I8sXs%2BZOMK524BXUzr%2F%2B5qYPh0so3TWqUdMdKKa7GLx7%2BHRN1gQVXhfeDhktlboiQih3bg0gIc&X-Amz-Signature=eb53bbc49be47c59afab6bbd52c4d58b98300a0cf5737931e83d2e8612f64857&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64VRQPY%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICnG2rKAiKSfSbRxmRco%2B1Ou4mjLQYgT2NiFBJRpRy5fAiEA%2Fp%2BzUW6yQa9PA1JiwLFr6tvbaPb%2FVZ%2BmJ64xpq06tY0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSNbaoeatxHXj3OVCrcAwfcvrcK239sj%2BTyp2rGEn%2FD8Y3UFsTXTrulyQaADP8N97pk67HzWjUxi8ikfe4qqxFQc9yv7qRXPiEj0F78KadwaIf0WXiu%2BWbCLQktPNiUPxpk2NezJ%2F1Ys2s%2BskZBH1zlIceEaWA0S9%2BNfofs8PuUu1zuzLuk7VCtjCZ%2FvMq9V%2Fpax8SmkTjSqjo4soRrJTirzeuq%2FS2xrPSE2yMPLuqcAVh7J6CQDNQdw0rrPqfwfsjg4tqueJpkwswOuJC%2Bh5vkPe9dakqA9vxMUhI4CucI27uuW0kgTPo7geyxmavBdXQ%2F08ZtUFTERo9i3Ha%2F1avFpLnB1G%2FTVQvJaWaW9G%2B2jdJYfzNy6E2XWoG6rPLTadakVFhUauGS%2FujZeqklai%2F3DAypIjxjP7%2B%2BFm8k5qcsBzL%2FQqbJrwYm3ynN2SuFYwJwLaQA58PWFgfEdCARy4gDZ9kw%2FDNTlHly2283voDVM%2B%2BUj%2BWQzF17AkAgoCrcjGeczhhZfz6%2FaI8MFPLOb7evIqPNgCfaqSXFYXsiv%2F%2FlTC9zFlVWegS10%2B905Rb77jgwthQIlSLl3xT5xKOEu07Fqcmg2f4HpfOwAWuA5S1SgloqH1g67nxNsXf27UQCYAnAyaJDYlMupbWxMPP6u8EGOqUBkZmu7%2BmfS1tesqlVSx0%2ByTPy8LVGYilrpCdvk5RQkt4MroQRO9%2FJCkh11MhL3yWq1J54SMBJ%2FBD31gwgc79p0cHFNzjYYeu9xODUnjcuw10t1NtVjjfNb7EHeeoIZa%2BDHY%2FiwIbmf4GUpw33T8I8sXs%2BZOMK524BXUzr%2F%2B5qYPh0so3TWqUdMdKKa7GLx7%2BHRN1gQVXhfeDhktlboiQih3bg0gIc&X-Amz-Signature=8eac47614c63a27e0007d40fa4338195083eb2218d847236a1aab7ca3d61d829&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64VRQPY%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICnG2rKAiKSfSbRxmRco%2B1Ou4mjLQYgT2NiFBJRpRy5fAiEA%2Fp%2BzUW6yQa9PA1JiwLFr6tvbaPb%2FVZ%2BmJ64xpq06tY0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSNbaoeatxHXj3OVCrcAwfcvrcK239sj%2BTyp2rGEn%2FD8Y3UFsTXTrulyQaADP8N97pk67HzWjUxi8ikfe4qqxFQc9yv7qRXPiEj0F78KadwaIf0WXiu%2BWbCLQktPNiUPxpk2NezJ%2F1Ys2s%2BskZBH1zlIceEaWA0S9%2BNfofs8PuUu1zuzLuk7VCtjCZ%2FvMq9V%2Fpax8SmkTjSqjo4soRrJTirzeuq%2FS2xrPSE2yMPLuqcAVh7J6CQDNQdw0rrPqfwfsjg4tqueJpkwswOuJC%2Bh5vkPe9dakqA9vxMUhI4CucI27uuW0kgTPo7geyxmavBdXQ%2F08ZtUFTERo9i3Ha%2F1avFpLnB1G%2FTVQvJaWaW9G%2B2jdJYfzNy6E2XWoG6rPLTadakVFhUauGS%2FujZeqklai%2F3DAypIjxjP7%2B%2BFm8k5qcsBzL%2FQqbJrwYm3ynN2SuFYwJwLaQA58PWFgfEdCARy4gDZ9kw%2FDNTlHly2283voDVM%2B%2BUj%2BWQzF17AkAgoCrcjGeczhhZfz6%2FaI8MFPLOb7evIqPNgCfaqSXFYXsiv%2F%2FlTC9zFlVWegS10%2B905Rb77jgwthQIlSLl3xT5xKOEu07Fqcmg2f4HpfOwAWuA5S1SgloqH1g67nxNsXf27UQCYAnAyaJDYlMupbWxMPP6u8EGOqUBkZmu7%2BmfS1tesqlVSx0%2ByTPy8LVGYilrpCdvk5RQkt4MroQRO9%2FJCkh11MhL3yWq1J54SMBJ%2FBD31gwgc79p0cHFNzjYYeu9xODUnjcuw10t1NtVjjfNb7EHeeoIZa%2BDHY%2FiwIbmf4GUpw33T8I8sXs%2BZOMK524BXUzr%2F%2B5qYPh0so3TWqUdMdKKa7GLx7%2BHRN1gQVXhfeDhktlboiQih3bg0gIc&X-Amz-Signature=6d6de763f0adee3cf84554633e61cea4d0071b4a611323ed7134f7a58842d3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64VRQPY%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICnG2rKAiKSfSbRxmRco%2B1Ou4mjLQYgT2NiFBJRpRy5fAiEA%2Fp%2BzUW6yQa9PA1JiwLFr6tvbaPb%2FVZ%2BmJ64xpq06tY0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSNbaoeatxHXj3OVCrcAwfcvrcK239sj%2BTyp2rGEn%2FD8Y3UFsTXTrulyQaADP8N97pk67HzWjUxi8ikfe4qqxFQc9yv7qRXPiEj0F78KadwaIf0WXiu%2BWbCLQktPNiUPxpk2NezJ%2F1Ys2s%2BskZBH1zlIceEaWA0S9%2BNfofs8PuUu1zuzLuk7VCtjCZ%2FvMq9V%2Fpax8SmkTjSqjo4soRrJTirzeuq%2FS2xrPSE2yMPLuqcAVh7J6CQDNQdw0rrPqfwfsjg4tqueJpkwswOuJC%2Bh5vkPe9dakqA9vxMUhI4CucI27uuW0kgTPo7geyxmavBdXQ%2F08ZtUFTERo9i3Ha%2F1avFpLnB1G%2FTVQvJaWaW9G%2B2jdJYfzNy6E2XWoG6rPLTadakVFhUauGS%2FujZeqklai%2F3DAypIjxjP7%2B%2BFm8k5qcsBzL%2FQqbJrwYm3ynN2SuFYwJwLaQA58PWFgfEdCARy4gDZ9kw%2FDNTlHly2283voDVM%2B%2BUj%2BWQzF17AkAgoCrcjGeczhhZfz6%2FaI8MFPLOb7evIqPNgCfaqSXFYXsiv%2F%2FlTC9zFlVWegS10%2B905Rb77jgwthQIlSLl3xT5xKOEu07Fqcmg2f4HpfOwAWuA5S1SgloqH1g67nxNsXf27UQCYAnAyaJDYlMupbWxMPP6u8EGOqUBkZmu7%2BmfS1tesqlVSx0%2ByTPy8LVGYilrpCdvk5RQkt4MroQRO9%2FJCkh11MhL3yWq1J54SMBJ%2FBD31gwgc79p0cHFNzjYYeu9xODUnjcuw10t1NtVjjfNb7EHeeoIZa%2BDHY%2FiwIbmf4GUpw33T8I8sXs%2BZOMK524BXUzr%2F%2B5qYPh0so3TWqUdMdKKa7GLx7%2BHRN1gQVXhfeDhktlboiQih3bg0gIc&X-Amz-Signature=789c4cff91d8e855f2afbec2fb16ff11c8b50502d7c1e39237223702c6b3ff7a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
