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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DFFU54%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2Fxr8Wpv%2BqkpVgztppW29V%2BHVetFx%2BpYcfgB63UIOlZgIgRyy1vsoMs4yAa88Kk4Pn696UHwoAa8fzDt4skA3UAtcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzk5egoAl%2BPJn%2BDkyrcA35%2BpRkeK5fV5om15zOnIWAg%2FyFfBj910cpaAS%2FhizSaOg1kqymHaDU2%2F9InOCwIU9NpP2wVXuBiP4SE35AO%2B0oam1qdXIvL971M8in%2B8VTzXSgGDIqAZvoTHmS8Dxip3a9n2ssNYaiETyrKYqkhb5u7cWhZbHh%2Fa5KT5y7KJHcLd6C4WArKA1Z%2FKQEwV65OiG9aI%2BOJGcnjEuHTWd3j6sZuVnVZcky%2FDOLu2xkcYhnyVp102W6kdjK0z6XL5DvkoqlCIsJPUJ7RbeytbtPro9Od%2BWG4SRGADZA4zPZIp1gxiaq5j1LDnbn6MLjCVqN3QkF3cUxqkX%2B6Y0eM4TgGMSe1C9mPI3TutYMufC4S5ScwGj6mnd9ZQ0R1kYu2ZkOpBg%2FeLsZ%2B%2BrlaMPmwxYQun7IYaZ9ViOJo5rGQidCunMjRus2JgqEMNPmhuhlqZNKbYX2HboFjaaBK01VjnkppZ2uVIECxJf1FiASEm3nS%2Fkh%2BSvuCxWdnc1qjcTgkPPxGher%2Fxq%2FV2XRXiM1SWJfzcrpZTpIybrD6ApWGQsQFAIbX%2Fv465yQ0TdjhT3xrNsmI1zWFB2ID9vEf6VM0HThcYE%2BejV5jM2Aj05%2FRQYhcsW6Uhs0rnUe4lnvA7c0CMI379L4GOqUBfDO4OMKCB4YFhJWip9htxhZwhu2vjWfq%2FFQ7enrTO%2BPeWFcbBV9wmya9CoHbMNq%2B8CI3di2vY7t8ZT3GHFmf4WW%2B2jWxvkTOn%2FKaaMW9u7NfB0hjgzFqOu8oHlpUvduPnHXHw6S9HAD6HQ0wPKRH4eyPNrpFcbw3oIsOai3YoPgmZcU7tBc0CEGvGK%2BuMYHR7lrOOgat3%2B%2BiRVs4%2BQyNZE2z8SfT&X-Amz-Signature=006cba7a86e83306f712c86dd9108e7a71e3594c0a86d04aaa33c9ac7e1dcef4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DFFU54%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2Fxr8Wpv%2BqkpVgztppW29V%2BHVetFx%2BpYcfgB63UIOlZgIgRyy1vsoMs4yAa88Kk4Pn696UHwoAa8fzDt4skA3UAtcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzk5egoAl%2BPJn%2BDkyrcA35%2BpRkeK5fV5om15zOnIWAg%2FyFfBj910cpaAS%2FhizSaOg1kqymHaDU2%2F9InOCwIU9NpP2wVXuBiP4SE35AO%2B0oam1qdXIvL971M8in%2B8VTzXSgGDIqAZvoTHmS8Dxip3a9n2ssNYaiETyrKYqkhb5u7cWhZbHh%2Fa5KT5y7KJHcLd6C4WArKA1Z%2FKQEwV65OiG9aI%2BOJGcnjEuHTWd3j6sZuVnVZcky%2FDOLu2xkcYhnyVp102W6kdjK0z6XL5DvkoqlCIsJPUJ7RbeytbtPro9Od%2BWG4SRGADZA4zPZIp1gxiaq5j1LDnbn6MLjCVqN3QkF3cUxqkX%2B6Y0eM4TgGMSe1C9mPI3TutYMufC4S5ScwGj6mnd9ZQ0R1kYu2ZkOpBg%2FeLsZ%2B%2BrlaMPmwxYQun7IYaZ9ViOJo5rGQidCunMjRus2JgqEMNPmhuhlqZNKbYX2HboFjaaBK01VjnkppZ2uVIECxJf1FiASEm3nS%2Fkh%2BSvuCxWdnc1qjcTgkPPxGher%2Fxq%2FV2XRXiM1SWJfzcrpZTpIybrD6ApWGQsQFAIbX%2Fv465yQ0TdjhT3xrNsmI1zWFB2ID9vEf6VM0HThcYE%2BejV5jM2Aj05%2FRQYhcsW6Uhs0rnUe4lnvA7c0CMI379L4GOqUBfDO4OMKCB4YFhJWip9htxhZwhu2vjWfq%2FFQ7enrTO%2BPeWFcbBV9wmya9CoHbMNq%2B8CI3di2vY7t8ZT3GHFmf4WW%2B2jWxvkTOn%2FKaaMW9u7NfB0hjgzFqOu8oHlpUvduPnHXHw6S9HAD6HQ0wPKRH4eyPNrpFcbw3oIsOai3YoPgmZcU7tBc0CEGvGK%2BuMYHR7lrOOgat3%2B%2BiRVs4%2BQyNZE2z8SfT&X-Amz-Signature=06223f8bc9fa079b5a3eb5dc1c1835b6691657a559b3f2bd490c5c100a943957&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DFFU54%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2Fxr8Wpv%2BqkpVgztppW29V%2BHVetFx%2BpYcfgB63UIOlZgIgRyy1vsoMs4yAa88Kk4Pn696UHwoAa8fzDt4skA3UAtcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzk5egoAl%2BPJn%2BDkyrcA35%2BpRkeK5fV5om15zOnIWAg%2FyFfBj910cpaAS%2FhizSaOg1kqymHaDU2%2F9InOCwIU9NpP2wVXuBiP4SE35AO%2B0oam1qdXIvL971M8in%2B8VTzXSgGDIqAZvoTHmS8Dxip3a9n2ssNYaiETyrKYqkhb5u7cWhZbHh%2Fa5KT5y7KJHcLd6C4WArKA1Z%2FKQEwV65OiG9aI%2BOJGcnjEuHTWd3j6sZuVnVZcky%2FDOLu2xkcYhnyVp102W6kdjK0z6XL5DvkoqlCIsJPUJ7RbeytbtPro9Od%2BWG4SRGADZA4zPZIp1gxiaq5j1LDnbn6MLjCVqN3QkF3cUxqkX%2B6Y0eM4TgGMSe1C9mPI3TutYMufC4S5ScwGj6mnd9ZQ0R1kYu2ZkOpBg%2FeLsZ%2B%2BrlaMPmwxYQun7IYaZ9ViOJo5rGQidCunMjRus2JgqEMNPmhuhlqZNKbYX2HboFjaaBK01VjnkppZ2uVIECxJf1FiASEm3nS%2Fkh%2BSvuCxWdnc1qjcTgkPPxGher%2Fxq%2FV2XRXiM1SWJfzcrpZTpIybrD6ApWGQsQFAIbX%2Fv465yQ0TdjhT3xrNsmI1zWFB2ID9vEf6VM0HThcYE%2BejV5jM2Aj05%2FRQYhcsW6Uhs0rnUe4lnvA7c0CMI379L4GOqUBfDO4OMKCB4YFhJWip9htxhZwhu2vjWfq%2FFQ7enrTO%2BPeWFcbBV9wmya9CoHbMNq%2B8CI3di2vY7t8ZT3GHFmf4WW%2B2jWxvkTOn%2FKaaMW9u7NfB0hjgzFqOu8oHlpUvduPnHXHw6S9HAD6HQ0wPKRH4eyPNrpFcbw3oIsOai3YoPgmZcU7tBc0CEGvGK%2BuMYHR7lrOOgat3%2B%2BiRVs4%2BQyNZE2z8SfT&X-Amz-Signature=d3aa6e21a85b609afd107def90a0134bd9a9f1c788f2e54726d7e1e60def623e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DFFU54%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2Fxr8Wpv%2BqkpVgztppW29V%2BHVetFx%2BpYcfgB63UIOlZgIgRyy1vsoMs4yAa88Kk4Pn696UHwoAa8fzDt4skA3UAtcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzk5egoAl%2BPJn%2BDkyrcA35%2BpRkeK5fV5om15zOnIWAg%2FyFfBj910cpaAS%2FhizSaOg1kqymHaDU2%2F9InOCwIU9NpP2wVXuBiP4SE35AO%2B0oam1qdXIvL971M8in%2B8VTzXSgGDIqAZvoTHmS8Dxip3a9n2ssNYaiETyrKYqkhb5u7cWhZbHh%2Fa5KT5y7KJHcLd6C4WArKA1Z%2FKQEwV65OiG9aI%2BOJGcnjEuHTWd3j6sZuVnVZcky%2FDOLu2xkcYhnyVp102W6kdjK0z6XL5DvkoqlCIsJPUJ7RbeytbtPro9Od%2BWG4SRGADZA4zPZIp1gxiaq5j1LDnbn6MLjCVqN3QkF3cUxqkX%2B6Y0eM4TgGMSe1C9mPI3TutYMufC4S5ScwGj6mnd9ZQ0R1kYu2ZkOpBg%2FeLsZ%2B%2BrlaMPmwxYQun7IYaZ9ViOJo5rGQidCunMjRus2JgqEMNPmhuhlqZNKbYX2HboFjaaBK01VjnkppZ2uVIECxJf1FiASEm3nS%2Fkh%2BSvuCxWdnc1qjcTgkPPxGher%2Fxq%2FV2XRXiM1SWJfzcrpZTpIybrD6ApWGQsQFAIbX%2Fv465yQ0TdjhT3xrNsmI1zWFB2ID9vEf6VM0HThcYE%2BejV5jM2Aj05%2FRQYhcsW6Uhs0rnUe4lnvA7c0CMI379L4GOqUBfDO4OMKCB4YFhJWip9htxhZwhu2vjWfq%2FFQ7enrTO%2BPeWFcbBV9wmya9CoHbMNq%2B8CI3di2vY7t8ZT3GHFmf4WW%2B2jWxvkTOn%2FKaaMW9u7NfB0hjgzFqOu8oHlpUvduPnHXHw6S9HAD6HQ0wPKRH4eyPNrpFcbw3oIsOai3YoPgmZcU7tBc0CEGvGK%2BuMYHR7lrOOgat3%2B%2BiRVs4%2BQyNZE2z8SfT&X-Amz-Signature=592a5aaaf0c1257e7236954abc15eac36bca93219b07190eb93c1dea832bfab1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DFFU54%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2Fxr8Wpv%2BqkpVgztppW29V%2BHVetFx%2BpYcfgB63UIOlZgIgRyy1vsoMs4yAa88Kk4Pn696UHwoAa8fzDt4skA3UAtcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzk5egoAl%2BPJn%2BDkyrcA35%2BpRkeK5fV5om15zOnIWAg%2FyFfBj910cpaAS%2FhizSaOg1kqymHaDU2%2F9InOCwIU9NpP2wVXuBiP4SE35AO%2B0oam1qdXIvL971M8in%2B8VTzXSgGDIqAZvoTHmS8Dxip3a9n2ssNYaiETyrKYqkhb5u7cWhZbHh%2Fa5KT5y7KJHcLd6C4WArKA1Z%2FKQEwV65OiG9aI%2BOJGcnjEuHTWd3j6sZuVnVZcky%2FDOLu2xkcYhnyVp102W6kdjK0z6XL5DvkoqlCIsJPUJ7RbeytbtPro9Od%2BWG4SRGADZA4zPZIp1gxiaq5j1LDnbn6MLjCVqN3QkF3cUxqkX%2B6Y0eM4TgGMSe1C9mPI3TutYMufC4S5ScwGj6mnd9ZQ0R1kYu2ZkOpBg%2FeLsZ%2B%2BrlaMPmwxYQun7IYaZ9ViOJo5rGQidCunMjRus2JgqEMNPmhuhlqZNKbYX2HboFjaaBK01VjnkppZ2uVIECxJf1FiASEm3nS%2Fkh%2BSvuCxWdnc1qjcTgkPPxGher%2Fxq%2FV2XRXiM1SWJfzcrpZTpIybrD6ApWGQsQFAIbX%2Fv465yQ0TdjhT3xrNsmI1zWFB2ID9vEf6VM0HThcYE%2BejV5jM2Aj05%2FRQYhcsW6Uhs0rnUe4lnvA7c0CMI379L4GOqUBfDO4OMKCB4YFhJWip9htxhZwhu2vjWfq%2FFQ7enrTO%2BPeWFcbBV9wmya9CoHbMNq%2B8CI3di2vY7t8ZT3GHFmf4WW%2B2jWxvkTOn%2FKaaMW9u7NfB0hjgzFqOu8oHlpUvduPnHXHw6S9HAD6HQ0wPKRH4eyPNrpFcbw3oIsOai3YoPgmZcU7tBc0CEGvGK%2BuMYHR7lrOOgat3%2B%2BiRVs4%2BQyNZE2z8SfT&X-Amz-Signature=4142f290546d5dba29c270ab436c9f1a2811a205baa3cb97aff1ecfa9e859181&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DFFU54%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2Fxr8Wpv%2BqkpVgztppW29V%2BHVetFx%2BpYcfgB63UIOlZgIgRyy1vsoMs4yAa88Kk4Pn696UHwoAa8fzDt4skA3UAtcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzk5egoAl%2BPJn%2BDkyrcA35%2BpRkeK5fV5om15zOnIWAg%2FyFfBj910cpaAS%2FhizSaOg1kqymHaDU2%2F9InOCwIU9NpP2wVXuBiP4SE35AO%2B0oam1qdXIvL971M8in%2B8VTzXSgGDIqAZvoTHmS8Dxip3a9n2ssNYaiETyrKYqkhb5u7cWhZbHh%2Fa5KT5y7KJHcLd6C4WArKA1Z%2FKQEwV65OiG9aI%2BOJGcnjEuHTWd3j6sZuVnVZcky%2FDOLu2xkcYhnyVp102W6kdjK0z6XL5DvkoqlCIsJPUJ7RbeytbtPro9Od%2BWG4SRGADZA4zPZIp1gxiaq5j1LDnbn6MLjCVqN3QkF3cUxqkX%2B6Y0eM4TgGMSe1C9mPI3TutYMufC4S5ScwGj6mnd9ZQ0R1kYu2ZkOpBg%2FeLsZ%2B%2BrlaMPmwxYQun7IYaZ9ViOJo5rGQidCunMjRus2JgqEMNPmhuhlqZNKbYX2HboFjaaBK01VjnkppZ2uVIECxJf1FiASEm3nS%2Fkh%2BSvuCxWdnc1qjcTgkPPxGher%2Fxq%2FV2XRXiM1SWJfzcrpZTpIybrD6ApWGQsQFAIbX%2Fv465yQ0TdjhT3xrNsmI1zWFB2ID9vEf6VM0HThcYE%2BejV5jM2Aj05%2FRQYhcsW6Uhs0rnUe4lnvA7c0CMI379L4GOqUBfDO4OMKCB4YFhJWip9htxhZwhu2vjWfq%2FFQ7enrTO%2BPeWFcbBV9wmya9CoHbMNq%2B8CI3di2vY7t8ZT3GHFmf4WW%2B2jWxvkTOn%2FKaaMW9u7NfB0hjgzFqOu8oHlpUvduPnHXHw6S9HAD6HQ0wPKRH4eyPNrpFcbw3oIsOai3YoPgmZcU7tBc0CEGvGK%2BuMYHR7lrOOgat3%2B%2BiRVs4%2BQyNZE2z8SfT&X-Amz-Signature=c93a7ff15bad9e96c9c3a3ce6200d26ae0a27e1f5729fc9d1f321da3a331954c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DFFU54%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2Fxr8Wpv%2BqkpVgztppW29V%2BHVetFx%2BpYcfgB63UIOlZgIgRyy1vsoMs4yAa88Kk4Pn696UHwoAa8fzDt4skA3UAtcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzk5egoAl%2BPJn%2BDkyrcA35%2BpRkeK5fV5om15zOnIWAg%2FyFfBj910cpaAS%2FhizSaOg1kqymHaDU2%2F9InOCwIU9NpP2wVXuBiP4SE35AO%2B0oam1qdXIvL971M8in%2B8VTzXSgGDIqAZvoTHmS8Dxip3a9n2ssNYaiETyrKYqkhb5u7cWhZbHh%2Fa5KT5y7KJHcLd6C4WArKA1Z%2FKQEwV65OiG9aI%2BOJGcnjEuHTWd3j6sZuVnVZcky%2FDOLu2xkcYhnyVp102W6kdjK0z6XL5DvkoqlCIsJPUJ7RbeytbtPro9Od%2BWG4SRGADZA4zPZIp1gxiaq5j1LDnbn6MLjCVqN3QkF3cUxqkX%2B6Y0eM4TgGMSe1C9mPI3TutYMufC4S5ScwGj6mnd9ZQ0R1kYu2ZkOpBg%2FeLsZ%2B%2BrlaMPmwxYQun7IYaZ9ViOJo5rGQidCunMjRus2JgqEMNPmhuhlqZNKbYX2HboFjaaBK01VjnkppZ2uVIECxJf1FiASEm3nS%2Fkh%2BSvuCxWdnc1qjcTgkPPxGher%2Fxq%2FV2XRXiM1SWJfzcrpZTpIybrD6ApWGQsQFAIbX%2Fv465yQ0TdjhT3xrNsmI1zWFB2ID9vEf6VM0HThcYE%2BejV5jM2Aj05%2FRQYhcsW6Uhs0rnUe4lnvA7c0CMI379L4GOqUBfDO4OMKCB4YFhJWip9htxhZwhu2vjWfq%2FFQ7enrTO%2BPeWFcbBV9wmya9CoHbMNq%2B8CI3di2vY7t8ZT3GHFmf4WW%2B2jWxvkTOn%2FKaaMW9u7NfB0hjgzFqOu8oHlpUvduPnHXHw6S9HAD6HQ0wPKRH4eyPNrpFcbw3oIsOai3YoPgmZcU7tBc0CEGvGK%2BuMYHR7lrOOgat3%2B%2BiRVs4%2BQyNZE2z8SfT&X-Amz-Signature=8f075ab51aa05882beead47bed7e60b694a8c00a5b637491132ed75a8f588e17&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
