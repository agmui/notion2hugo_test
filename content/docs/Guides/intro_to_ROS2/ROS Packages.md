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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSZ6YI3H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeI2qENxpuM3dB6vf5vu8YqRZSuARpLZTpMyoyKFYV8AiEA%2FfTG4IVuUTBZZ%2F6fJSjwPQAiVOkH%2BaBSRj2HcdppSIYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9UMIEwqFkccpCTQircA2XWn%2B7ZK9RpDRjsUgPOOxwyvFN%2F5SCMnAPO%2B3XwI6kzZecTTzfGqdSdwCE2nuqCz7TnL5KjL%2BxlUcnt5Avta16TOKHtsT4zKuvnCEFvRmIVZY22yr1SKFIN5mkJWpCxGi0HSal%2FFF8PXzSLb%2FR49hgKJWVlX%2FOggCd8kdAORZri84JTlcfVAr%2ByOSVL%2BeQS4xTySXeiA2r6gfN1CBZ%2BWY4ymU%2FvPAxabBVoJYml9LsxrIuyCSgCjddicVGjEm90ilVIwnAuTzxLcFZycAzHGDvtl2Hl4aHOlEbPSKUxgKFPb%2FrX3Zlmi5RR7fBS94MmYP7nSQwMr0%2Fhf3rq%2FVVVH%2FbA8hM1mj4DhYZeukRrHQkWU5kF0OTom9ktODkeIhYedaLiI1GUu9EHBvvkbTg5H3t5571et8PvkkMALCWFFjVmUXp9pNSlRERYOf8c04HIet0k8zLVHsae8EGjKWZCjXFI8kVHNw4sWfAvgHD%2FRv0jaUY495Qo0wWd9QwMye0PqhH22qaramM0%2BXDp9mOwHmhMhryG%2BjPwKLBovBOOJ1xjCmXwUPqYr51yeEalPVLMtAxuKIYxJ%2FPTE0feBfTtErLEahdEKATMyGG%2FxxietF4eyJhIdBbnVyYo3IgwMLvy58QGOqUBVjJ%2FDKe4OOvPh6Gsd%2F0x4cHl9MqdSBj0ZxohL18n98M0xxZ%2B1m8RwGKsJHWYxRSUh4DUFvvHoogAT27PWICzLBuVvoxne62DrRZRfmyDWMB5Q5b9on2zHQJGCIBKIYcp4sS77v0jbwJR89EuTAcdK2q8IFRpz38B8fkUzZ0tRvAXEak9JNAJ87lqgenZq2PsRmKhWSTYExP51DbtlCWts3%2BUbJzx&X-Amz-Signature=1d96ae01e974374e4466f8164cb8172d1696e65ca0d8f8a633b6c8b131db280b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSZ6YI3H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeI2qENxpuM3dB6vf5vu8YqRZSuARpLZTpMyoyKFYV8AiEA%2FfTG4IVuUTBZZ%2F6fJSjwPQAiVOkH%2BaBSRj2HcdppSIYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9UMIEwqFkccpCTQircA2XWn%2B7ZK9RpDRjsUgPOOxwyvFN%2F5SCMnAPO%2B3XwI6kzZecTTzfGqdSdwCE2nuqCz7TnL5KjL%2BxlUcnt5Avta16TOKHtsT4zKuvnCEFvRmIVZY22yr1SKFIN5mkJWpCxGi0HSal%2FFF8PXzSLb%2FR49hgKJWVlX%2FOggCd8kdAORZri84JTlcfVAr%2ByOSVL%2BeQS4xTySXeiA2r6gfN1CBZ%2BWY4ymU%2FvPAxabBVoJYml9LsxrIuyCSgCjddicVGjEm90ilVIwnAuTzxLcFZycAzHGDvtl2Hl4aHOlEbPSKUxgKFPb%2FrX3Zlmi5RR7fBS94MmYP7nSQwMr0%2Fhf3rq%2FVVVH%2FbA8hM1mj4DhYZeukRrHQkWU5kF0OTom9ktODkeIhYedaLiI1GUu9EHBvvkbTg5H3t5571et8PvkkMALCWFFjVmUXp9pNSlRERYOf8c04HIet0k8zLVHsae8EGjKWZCjXFI8kVHNw4sWfAvgHD%2FRv0jaUY495Qo0wWd9QwMye0PqhH22qaramM0%2BXDp9mOwHmhMhryG%2BjPwKLBovBOOJ1xjCmXwUPqYr51yeEalPVLMtAxuKIYxJ%2FPTE0feBfTtErLEahdEKATMyGG%2FxxietF4eyJhIdBbnVyYo3IgwMLvy58QGOqUBVjJ%2FDKe4OOvPh6Gsd%2F0x4cHl9MqdSBj0ZxohL18n98M0xxZ%2B1m8RwGKsJHWYxRSUh4DUFvvHoogAT27PWICzLBuVvoxne62DrRZRfmyDWMB5Q5b9on2zHQJGCIBKIYcp4sS77v0jbwJR89EuTAcdK2q8IFRpz38B8fkUzZ0tRvAXEak9JNAJ87lqgenZq2PsRmKhWSTYExP51DbtlCWts3%2BUbJzx&X-Amz-Signature=633d8461b193e6460b04319db0246db77cea6d46bc428b6448c0eecd442d043c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSZ6YI3H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeI2qENxpuM3dB6vf5vu8YqRZSuARpLZTpMyoyKFYV8AiEA%2FfTG4IVuUTBZZ%2F6fJSjwPQAiVOkH%2BaBSRj2HcdppSIYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9UMIEwqFkccpCTQircA2XWn%2B7ZK9RpDRjsUgPOOxwyvFN%2F5SCMnAPO%2B3XwI6kzZecTTzfGqdSdwCE2nuqCz7TnL5KjL%2BxlUcnt5Avta16TOKHtsT4zKuvnCEFvRmIVZY22yr1SKFIN5mkJWpCxGi0HSal%2FFF8PXzSLb%2FR49hgKJWVlX%2FOggCd8kdAORZri84JTlcfVAr%2ByOSVL%2BeQS4xTySXeiA2r6gfN1CBZ%2BWY4ymU%2FvPAxabBVoJYml9LsxrIuyCSgCjddicVGjEm90ilVIwnAuTzxLcFZycAzHGDvtl2Hl4aHOlEbPSKUxgKFPb%2FrX3Zlmi5RR7fBS94MmYP7nSQwMr0%2Fhf3rq%2FVVVH%2FbA8hM1mj4DhYZeukRrHQkWU5kF0OTom9ktODkeIhYedaLiI1GUu9EHBvvkbTg5H3t5571et8PvkkMALCWFFjVmUXp9pNSlRERYOf8c04HIet0k8zLVHsae8EGjKWZCjXFI8kVHNw4sWfAvgHD%2FRv0jaUY495Qo0wWd9QwMye0PqhH22qaramM0%2BXDp9mOwHmhMhryG%2BjPwKLBovBOOJ1xjCmXwUPqYr51yeEalPVLMtAxuKIYxJ%2FPTE0feBfTtErLEahdEKATMyGG%2FxxietF4eyJhIdBbnVyYo3IgwMLvy58QGOqUBVjJ%2FDKe4OOvPh6Gsd%2F0x4cHl9MqdSBj0ZxohL18n98M0xxZ%2B1m8RwGKsJHWYxRSUh4DUFvvHoogAT27PWICzLBuVvoxne62DrRZRfmyDWMB5Q5b9on2zHQJGCIBKIYcp4sS77v0jbwJR89EuTAcdK2q8IFRpz38B8fkUzZ0tRvAXEak9JNAJ87lqgenZq2PsRmKhWSTYExP51DbtlCWts3%2BUbJzx&X-Amz-Signature=8be4c40f30712250d0adf603c0fbe67791ef343f969d192f27690ed5994e740e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSZ6YI3H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeI2qENxpuM3dB6vf5vu8YqRZSuARpLZTpMyoyKFYV8AiEA%2FfTG4IVuUTBZZ%2F6fJSjwPQAiVOkH%2BaBSRj2HcdppSIYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9UMIEwqFkccpCTQircA2XWn%2B7ZK9RpDRjsUgPOOxwyvFN%2F5SCMnAPO%2B3XwI6kzZecTTzfGqdSdwCE2nuqCz7TnL5KjL%2BxlUcnt5Avta16TOKHtsT4zKuvnCEFvRmIVZY22yr1SKFIN5mkJWpCxGi0HSal%2FFF8PXzSLb%2FR49hgKJWVlX%2FOggCd8kdAORZri84JTlcfVAr%2ByOSVL%2BeQS4xTySXeiA2r6gfN1CBZ%2BWY4ymU%2FvPAxabBVoJYml9LsxrIuyCSgCjddicVGjEm90ilVIwnAuTzxLcFZycAzHGDvtl2Hl4aHOlEbPSKUxgKFPb%2FrX3Zlmi5RR7fBS94MmYP7nSQwMr0%2Fhf3rq%2FVVVH%2FbA8hM1mj4DhYZeukRrHQkWU5kF0OTom9ktODkeIhYedaLiI1GUu9EHBvvkbTg5H3t5571et8PvkkMALCWFFjVmUXp9pNSlRERYOf8c04HIet0k8zLVHsae8EGjKWZCjXFI8kVHNw4sWfAvgHD%2FRv0jaUY495Qo0wWd9QwMye0PqhH22qaramM0%2BXDp9mOwHmhMhryG%2BjPwKLBovBOOJ1xjCmXwUPqYr51yeEalPVLMtAxuKIYxJ%2FPTE0feBfTtErLEahdEKATMyGG%2FxxietF4eyJhIdBbnVyYo3IgwMLvy58QGOqUBVjJ%2FDKe4OOvPh6Gsd%2F0x4cHl9MqdSBj0ZxohL18n98M0xxZ%2B1m8RwGKsJHWYxRSUh4DUFvvHoogAT27PWICzLBuVvoxne62DrRZRfmyDWMB5Q5b9on2zHQJGCIBKIYcp4sS77v0jbwJR89EuTAcdK2q8IFRpz38B8fkUzZ0tRvAXEak9JNAJ87lqgenZq2PsRmKhWSTYExP51DbtlCWts3%2BUbJzx&X-Amz-Signature=0a699ef0ddd1ed56d62eebd7bef0c430d44ac7987f1ee6b9e6b731c175ae0e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSZ6YI3H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeI2qENxpuM3dB6vf5vu8YqRZSuARpLZTpMyoyKFYV8AiEA%2FfTG4IVuUTBZZ%2F6fJSjwPQAiVOkH%2BaBSRj2HcdppSIYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9UMIEwqFkccpCTQircA2XWn%2B7ZK9RpDRjsUgPOOxwyvFN%2F5SCMnAPO%2B3XwI6kzZecTTzfGqdSdwCE2nuqCz7TnL5KjL%2BxlUcnt5Avta16TOKHtsT4zKuvnCEFvRmIVZY22yr1SKFIN5mkJWpCxGi0HSal%2FFF8PXzSLb%2FR49hgKJWVlX%2FOggCd8kdAORZri84JTlcfVAr%2ByOSVL%2BeQS4xTySXeiA2r6gfN1CBZ%2BWY4ymU%2FvPAxabBVoJYml9LsxrIuyCSgCjddicVGjEm90ilVIwnAuTzxLcFZycAzHGDvtl2Hl4aHOlEbPSKUxgKFPb%2FrX3Zlmi5RR7fBS94MmYP7nSQwMr0%2Fhf3rq%2FVVVH%2FbA8hM1mj4DhYZeukRrHQkWU5kF0OTom9ktODkeIhYedaLiI1GUu9EHBvvkbTg5H3t5571et8PvkkMALCWFFjVmUXp9pNSlRERYOf8c04HIet0k8zLVHsae8EGjKWZCjXFI8kVHNw4sWfAvgHD%2FRv0jaUY495Qo0wWd9QwMye0PqhH22qaramM0%2BXDp9mOwHmhMhryG%2BjPwKLBovBOOJ1xjCmXwUPqYr51yeEalPVLMtAxuKIYxJ%2FPTE0feBfTtErLEahdEKATMyGG%2FxxietF4eyJhIdBbnVyYo3IgwMLvy58QGOqUBVjJ%2FDKe4OOvPh6Gsd%2F0x4cHl9MqdSBj0ZxohL18n98M0xxZ%2B1m8RwGKsJHWYxRSUh4DUFvvHoogAT27PWICzLBuVvoxne62DrRZRfmyDWMB5Q5b9on2zHQJGCIBKIYcp4sS77v0jbwJR89EuTAcdK2q8IFRpz38B8fkUzZ0tRvAXEak9JNAJ87lqgenZq2PsRmKhWSTYExP51DbtlCWts3%2BUbJzx&X-Amz-Signature=ad06b3a83b355401cd05fe504a68d007048cbcbadb3c1d0f1a355afbb3564353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSZ6YI3H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeI2qENxpuM3dB6vf5vu8YqRZSuARpLZTpMyoyKFYV8AiEA%2FfTG4IVuUTBZZ%2F6fJSjwPQAiVOkH%2BaBSRj2HcdppSIYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9UMIEwqFkccpCTQircA2XWn%2B7ZK9RpDRjsUgPOOxwyvFN%2F5SCMnAPO%2B3XwI6kzZecTTzfGqdSdwCE2nuqCz7TnL5KjL%2BxlUcnt5Avta16TOKHtsT4zKuvnCEFvRmIVZY22yr1SKFIN5mkJWpCxGi0HSal%2FFF8PXzSLb%2FR49hgKJWVlX%2FOggCd8kdAORZri84JTlcfVAr%2ByOSVL%2BeQS4xTySXeiA2r6gfN1CBZ%2BWY4ymU%2FvPAxabBVoJYml9LsxrIuyCSgCjddicVGjEm90ilVIwnAuTzxLcFZycAzHGDvtl2Hl4aHOlEbPSKUxgKFPb%2FrX3Zlmi5RR7fBS94MmYP7nSQwMr0%2Fhf3rq%2FVVVH%2FbA8hM1mj4DhYZeukRrHQkWU5kF0OTom9ktODkeIhYedaLiI1GUu9EHBvvkbTg5H3t5571et8PvkkMALCWFFjVmUXp9pNSlRERYOf8c04HIet0k8zLVHsae8EGjKWZCjXFI8kVHNw4sWfAvgHD%2FRv0jaUY495Qo0wWd9QwMye0PqhH22qaramM0%2BXDp9mOwHmhMhryG%2BjPwKLBovBOOJ1xjCmXwUPqYr51yeEalPVLMtAxuKIYxJ%2FPTE0feBfTtErLEahdEKATMyGG%2FxxietF4eyJhIdBbnVyYo3IgwMLvy58QGOqUBVjJ%2FDKe4OOvPh6Gsd%2F0x4cHl9MqdSBj0ZxohL18n98M0xxZ%2B1m8RwGKsJHWYxRSUh4DUFvvHoogAT27PWICzLBuVvoxne62DrRZRfmyDWMB5Q5b9on2zHQJGCIBKIYcp4sS77v0jbwJR89EuTAcdK2q8IFRpz38B8fkUzZ0tRvAXEak9JNAJ87lqgenZq2PsRmKhWSTYExP51DbtlCWts3%2BUbJzx&X-Amz-Signature=678188a10c4a04a2624a3c3c076c92a41c0075f816fc4d85d9253a3b760ab224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSZ6YI3H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeI2qENxpuM3dB6vf5vu8YqRZSuARpLZTpMyoyKFYV8AiEA%2FfTG4IVuUTBZZ%2F6fJSjwPQAiVOkH%2BaBSRj2HcdppSIYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9UMIEwqFkccpCTQircA2XWn%2B7ZK9RpDRjsUgPOOxwyvFN%2F5SCMnAPO%2B3XwI6kzZecTTzfGqdSdwCE2nuqCz7TnL5KjL%2BxlUcnt5Avta16TOKHtsT4zKuvnCEFvRmIVZY22yr1SKFIN5mkJWpCxGi0HSal%2FFF8PXzSLb%2FR49hgKJWVlX%2FOggCd8kdAORZri84JTlcfVAr%2ByOSVL%2BeQS4xTySXeiA2r6gfN1CBZ%2BWY4ymU%2FvPAxabBVoJYml9LsxrIuyCSgCjddicVGjEm90ilVIwnAuTzxLcFZycAzHGDvtl2Hl4aHOlEbPSKUxgKFPb%2FrX3Zlmi5RR7fBS94MmYP7nSQwMr0%2Fhf3rq%2FVVVH%2FbA8hM1mj4DhYZeukRrHQkWU5kF0OTom9ktODkeIhYedaLiI1GUu9EHBvvkbTg5H3t5571et8PvkkMALCWFFjVmUXp9pNSlRERYOf8c04HIet0k8zLVHsae8EGjKWZCjXFI8kVHNw4sWfAvgHD%2FRv0jaUY495Qo0wWd9QwMye0PqhH22qaramM0%2BXDp9mOwHmhMhryG%2BjPwKLBovBOOJ1xjCmXwUPqYr51yeEalPVLMtAxuKIYxJ%2FPTE0feBfTtErLEahdEKATMyGG%2FxxietF4eyJhIdBbnVyYo3IgwMLvy58QGOqUBVjJ%2FDKe4OOvPh6Gsd%2F0x4cHl9MqdSBj0ZxohL18n98M0xxZ%2B1m8RwGKsJHWYxRSUh4DUFvvHoogAT27PWICzLBuVvoxne62DrRZRfmyDWMB5Q5b9on2zHQJGCIBKIYcp4sS77v0jbwJR89EuTAcdK2q8IFRpz38B8fkUzZ0tRvAXEak9JNAJ87lqgenZq2PsRmKhWSTYExP51DbtlCWts3%2BUbJzx&X-Amz-Signature=37909aeca46d6d19ef7df648f1c000d0d482a9f8550623a800caa5c3b664daa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
