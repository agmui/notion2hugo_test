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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N5WGFA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFQ0V5o3yF8%2BP8gDN9J7W6sBLBQJG8J3z%2BqP5772YzAKAiBgI8v6NXPMNaYReCAwogqwR%2FXa2sb3%2FWMq%2BoYItggtbyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYL%2FE%2B62%2FwO3dXZhhKtwDuimOiXvISKUwj7Ub3FZJb9MLvxM7S%2FFVrK19E0YWR0wATifUMaRTktrNTRh8rQz9GKkKXFMqxS7R%2FpiTdqjuQJHKwSY7fvE5dJ55PmtRIuTn%2BNFigThIQ35AvA%2F1%2FudHkCFZLSvpXg2g%2Bfg%2FHxBbrD8ClJ%2B4q1ggLAoeaDdnXhZeVHi%2FLoNg4%2BMV17uk%2F%2BvY946dOshUmUcsuQHVsbVVb8oPGtUeOPdWH3XdmcsKVGNAVgF8cmr5PDWJNy1RM48dujt4ZYvi40MnRhb3jqOlNEQl670lpnNlOcy9XChDIpDAqUZYFvvoxJGemBnIH8y8DNIV9UtN0QtLIVv2AxS3HeEe1BvXraBnhbTG98AVniDao07nDnKtAXfwFF044ThMohdRQJj%2BfowXc%2FzdwOepXniwyBK7PSa%2BL0eCzeKmy5uCNKKBDV%2FQhXqt417snCbmS6zw2V5tURGRcASdihTusyNMLX7Q6K6FNeezmgtnW1BPpCfFO1E9OvNwsAUnfMtb%2BrnrAi8BAx6UW5h0dpsTCadbghut6VqSLaEf4I82KvdkZGNo6ZQNy1UWJYd2KvKbVc7y%2BQ5TGXy9OytP9WMud7wFnS74QsbdZxwaFaUcTzwtfeqF8N7sm9PrImswgqGQwQY6pgFTBymQ5CNgraNvmPFzEvHExve5bp6ugNp1jIwo5fINqzbnvw1UfTSVKktSnN43FNCHxz1xGrvt9Fx2%2BzUXtO%2FlZiY6pCQIefylElPRtJdbRCnnilFsIkAq2r6PN33pvcuZD2YA7T8dPsMQxla1T9zXLvvwX2SaWn5nJfjSBDTvdSyfgrNuQL3PJTUok9mlY%2BIxwkEwEXSEXMa93pRaVoYekcJ0S1qW&X-Amz-Signature=70a07c4825da5cbaf0b1720e0156ca5b82b9f71081445f8bb54f39193fff4609&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N5WGFA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFQ0V5o3yF8%2BP8gDN9J7W6sBLBQJG8J3z%2BqP5772YzAKAiBgI8v6NXPMNaYReCAwogqwR%2FXa2sb3%2FWMq%2BoYItggtbyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYL%2FE%2B62%2FwO3dXZhhKtwDuimOiXvISKUwj7Ub3FZJb9MLvxM7S%2FFVrK19E0YWR0wATifUMaRTktrNTRh8rQz9GKkKXFMqxS7R%2FpiTdqjuQJHKwSY7fvE5dJ55PmtRIuTn%2BNFigThIQ35AvA%2F1%2FudHkCFZLSvpXg2g%2Bfg%2FHxBbrD8ClJ%2B4q1ggLAoeaDdnXhZeVHi%2FLoNg4%2BMV17uk%2F%2BvY946dOshUmUcsuQHVsbVVb8oPGtUeOPdWH3XdmcsKVGNAVgF8cmr5PDWJNy1RM48dujt4ZYvi40MnRhb3jqOlNEQl670lpnNlOcy9XChDIpDAqUZYFvvoxJGemBnIH8y8DNIV9UtN0QtLIVv2AxS3HeEe1BvXraBnhbTG98AVniDao07nDnKtAXfwFF044ThMohdRQJj%2BfowXc%2FzdwOepXniwyBK7PSa%2BL0eCzeKmy5uCNKKBDV%2FQhXqt417snCbmS6zw2V5tURGRcASdihTusyNMLX7Q6K6FNeezmgtnW1BPpCfFO1E9OvNwsAUnfMtb%2BrnrAi8BAx6UW5h0dpsTCadbghut6VqSLaEf4I82KvdkZGNo6ZQNy1UWJYd2KvKbVc7y%2BQ5TGXy9OytP9WMud7wFnS74QsbdZxwaFaUcTzwtfeqF8N7sm9PrImswgqGQwQY6pgFTBymQ5CNgraNvmPFzEvHExve5bp6ugNp1jIwo5fINqzbnvw1UfTSVKktSnN43FNCHxz1xGrvt9Fx2%2BzUXtO%2FlZiY6pCQIefylElPRtJdbRCnnilFsIkAq2r6PN33pvcuZD2YA7T8dPsMQxla1T9zXLvvwX2SaWn5nJfjSBDTvdSyfgrNuQL3PJTUok9mlY%2BIxwkEwEXSEXMa93pRaVoYekcJ0S1qW&X-Amz-Signature=7b0f71c49b91c1e8c829fc5f5cf14c65f7bc92a59fce108bca1b025a0cbb9981&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N5WGFA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFQ0V5o3yF8%2BP8gDN9J7W6sBLBQJG8J3z%2BqP5772YzAKAiBgI8v6NXPMNaYReCAwogqwR%2FXa2sb3%2FWMq%2BoYItggtbyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYL%2FE%2B62%2FwO3dXZhhKtwDuimOiXvISKUwj7Ub3FZJb9MLvxM7S%2FFVrK19E0YWR0wATifUMaRTktrNTRh8rQz9GKkKXFMqxS7R%2FpiTdqjuQJHKwSY7fvE5dJ55PmtRIuTn%2BNFigThIQ35AvA%2F1%2FudHkCFZLSvpXg2g%2Bfg%2FHxBbrD8ClJ%2B4q1ggLAoeaDdnXhZeVHi%2FLoNg4%2BMV17uk%2F%2BvY946dOshUmUcsuQHVsbVVb8oPGtUeOPdWH3XdmcsKVGNAVgF8cmr5PDWJNy1RM48dujt4ZYvi40MnRhb3jqOlNEQl670lpnNlOcy9XChDIpDAqUZYFvvoxJGemBnIH8y8DNIV9UtN0QtLIVv2AxS3HeEe1BvXraBnhbTG98AVniDao07nDnKtAXfwFF044ThMohdRQJj%2BfowXc%2FzdwOepXniwyBK7PSa%2BL0eCzeKmy5uCNKKBDV%2FQhXqt417snCbmS6zw2V5tURGRcASdihTusyNMLX7Q6K6FNeezmgtnW1BPpCfFO1E9OvNwsAUnfMtb%2BrnrAi8BAx6UW5h0dpsTCadbghut6VqSLaEf4I82KvdkZGNo6ZQNy1UWJYd2KvKbVc7y%2BQ5TGXy9OytP9WMud7wFnS74QsbdZxwaFaUcTzwtfeqF8N7sm9PrImswgqGQwQY6pgFTBymQ5CNgraNvmPFzEvHExve5bp6ugNp1jIwo5fINqzbnvw1UfTSVKktSnN43FNCHxz1xGrvt9Fx2%2BzUXtO%2FlZiY6pCQIefylElPRtJdbRCnnilFsIkAq2r6PN33pvcuZD2YA7T8dPsMQxla1T9zXLvvwX2SaWn5nJfjSBDTvdSyfgrNuQL3PJTUok9mlY%2BIxwkEwEXSEXMa93pRaVoYekcJ0S1qW&X-Amz-Signature=c96bef0bce09182b5739b66f2d73510e58df5d45b36bfdc909a7e4afa667aa5b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N5WGFA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFQ0V5o3yF8%2BP8gDN9J7W6sBLBQJG8J3z%2BqP5772YzAKAiBgI8v6NXPMNaYReCAwogqwR%2FXa2sb3%2FWMq%2BoYItggtbyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYL%2FE%2B62%2FwO3dXZhhKtwDuimOiXvISKUwj7Ub3FZJb9MLvxM7S%2FFVrK19E0YWR0wATifUMaRTktrNTRh8rQz9GKkKXFMqxS7R%2FpiTdqjuQJHKwSY7fvE5dJ55PmtRIuTn%2BNFigThIQ35AvA%2F1%2FudHkCFZLSvpXg2g%2Bfg%2FHxBbrD8ClJ%2B4q1ggLAoeaDdnXhZeVHi%2FLoNg4%2BMV17uk%2F%2BvY946dOshUmUcsuQHVsbVVb8oPGtUeOPdWH3XdmcsKVGNAVgF8cmr5PDWJNy1RM48dujt4ZYvi40MnRhb3jqOlNEQl670lpnNlOcy9XChDIpDAqUZYFvvoxJGemBnIH8y8DNIV9UtN0QtLIVv2AxS3HeEe1BvXraBnhbTG98AVniDao07nDnKtAXfwFF044ThMohdRQJj%2BfowXc%2FzdwOepXniwyBK7PSa%2BL0eCzeKmy5uCNKKBDV%2FQhXqt417snCbmS6zw2V5tURGRcASdihTusyNMLX7Q6K6FNeezmgtnW1BPpCfFO1E9OvNwsAUnfMtb%2BrnrAi8BAx6UW5h0dpsTCadbghut6VqSLaEf4I82KvdkZGNo6ZQNy1UWJYd2KvKbVc7y%2BQ5TGXy9OytP9WMud7wFnS74QsbdZxwaFaUcTzwtfeqF8N7sm9PrImswgqGQwQY6pgFTBymQ5CNgraNvmPFzEvHExve5bp6ugNp1jIwo5fINqzbnvw1UfTSVKktSnN43FNCHxz1xGrvt9Fx2%2BzUXtO%2FlZiY6pCQIefylElPRtJdbRCnnilFsIkAq2r6PN33pvcuZD2YA7T8dPsMQxla1T9zXLvvwX2SaWn5nJfjSBDTvdSyfgrNuQL3PJTUok9mlY%2BIxwkEwEXSEXMa93pRaVoYekcJ0S1qW&X-Amz-Signature=1db27be57c0a0761527d92e9864ccd93fbbb048328747a00f09b57ba195a4072&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N5WGFA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFQ0V5o3yF8%2BP8gDN9J7W6sBLBQJG8J3z%2BqP5772YzAKAiBgI8v6NXPMNaYReCAwogqwR%2FXa2sb3%2FWMq%2BoYItggtbyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYL%2FE%2B62%2FwO3dXZhhKtwDuimOiXvISKUwj7Ub3FZJb9MLvxM7S%2FFVrK19E0YWR0wATifUMaRTktrNTRh8rQz9GKkKXFMqxS7R%2FpiTdqjuQJHKwSY7fvE5dJ55PmtRIuTn%2BNFigThIQ35AvA%2F1%2FudHkCFZLSvpXg2g%2Bfg%2FHxBbrD8ClJ%2B4q1ggLAoeaDdnXhZeVHi%2FLoNg4%2BMV17uk%2F%2BvY946dOshUmUcsuQHVsbVVb8oPGtUeOPdWH3XdmcsKVGNAVgF8cmr5PDWJNy1RM48dujt4ZYvi40MnRhb3jqOlNEQl670lpnNlOcy9XChDIpDAqUZYFvvoxJGemBnIH8y8DNIV9UtN0QtLIVv2AxS3HeEe1BvXraBnhbTG98AVniDao07nDnKtAXfwFF044ThMohdRQJj%2BfowXc%2FzdwOepXniwyBK7PSa%2BL0eCzeKmy5uCNKKBDV%2FQhXqt417snCbmS6zw2V5tURGRcASdihTusyNMLX7Q6K6FNeezmgtnW1BPpCfFO1E9OvNwsAUnfMtb%2BrnrAi8BAx6UW5h0dpsTCadbghut6VqSLaEf4I82KvdkZGNo6ZQNy1UWJYd2KvKbVc7y%2BQ5TGXy9OytP9WMud7wFnS74QsbdZxwaFaUcTzwtfeqF8N7sm9PrImswgqGQwQY6pgFTBymQ5CNgraNvmPFzEvHExve5bp6ugNp1jIwo5fINqzbnvw1UfTSVKktSnN43FNCHxz1xGrvt9Fx2%2BzUXtO%2FlZiY6pCQIefylElPRtJdbRCnnilFsIkAq2r6PN33pvcuZD2YA7T8dPsMQxla1T9zXLvvwX2SaWn5nJfjSBDTvdSyfgrNuQL3PJTUok9mlY%2BIxwkEwEXSEXMa93pRaVoYekcJ0S1qW&X-Amz-Signature=c002f10997ec13fd35433a23e17f6c8f04a10227a93c8aec749e52d5a4759014&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N5WGFA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFQ0V5o3yF8%2BP8gDN9J7W6sBLBQJG8J3z%2BqP5772YzAKAiBgI8v6NXPMNaYReCAwogqwR%2FXa2sb3%2FWMq%2BoYItggtbyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYL%2FE%2B62%2FwO3dXZhhKtwDuimOiXvISKUwj7Ub3FZJb9MLvxM7S%2FFVrK19E0YWR0wATifUMaRTktrNTRh8rQz9GKkKXFMqxS7R%2FpiTdqjuQJHKwSY7fvE5dJ55PmtRIuTn%2BNFigThIQ35AvA%2F1%2FudHkCFZLSvpXg2g%2Bfg%2FHxBbrD8ClJ%2B4q1ggLAoeaDdnXhZeVHi%2FLoNg4%2BMV17uk%2F%2BvY946dOshUmUcsuQHVsbVVb8oPGtUeOPdWH3XdmcsKVGNAVgF8cmr5PDWJNy1RM48dujt4ZYvi40MnRhb3jqOlNEQl670lpnNlOcy9XChDIpDAqUZYFvvoxJGemBnIH8y8DNIV9UtN0QtLIVv2AxS3HeEe1BvXraBnhbTG98AVniDao07nDnKtAXfwFF044ThMohdRQJj%2BfowXc%2FzdwOepXniwyBK7PSa%2BL0eCzeKmy5uCNKKBDV%2FQhXqt417snCbmS6zw2V5tURGRcASdihTusyNMLX7Q6K6FNeezmgtnW1BPpCfFO1E9OvNwsAUnfMtb%2BrnrAi8BAx6UW5h0dpsTCadbghut6VqSLaEf4I82KvdkZGNo6ZQNy1UWJYd2KvKbVc7y%2BQ5TGXy9OytP9WMud7wFnS74QsbdZxwaFaUcTzwtfeqF8N7sm9PrImswgqGQwQY6pgFTBymQ5CNgraNvmPFzEvHExve5bp6ugNp1jIwo5fINqzbnvw1UfTSVKktSnN43FNCHxz1xGrvt9Fx2%2BzUXtO%2FlZiY6pCQIefylElPRtJdbRCnnilFsIkAq2r6PN33pvcuZD2YA7T8dPsMQxla1T9zXLvvwX2SaWn5nJfjSBDTvdSyfgrNuQL3PJTUok9mlY%2BIxwkEwEXSEXMa93pRaVoYekcJ0S1qW&X-Amz-Signature=5a4b1219f5e0054b0eaa4273de3538895d8ec71e21c67e85878441abf7dff8db&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N5WGFA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFQ0V5o3yF8%2BP8gDN9J7W6sBLBQJG8J3z%2BqP5772YzAKAiBgI8v6NXPMNaYReCAwogqwR%2FXa2sb3%2FWMq%2BoYItggtbyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYL%2FE%2B62%2FwO3dXZhhKtwDuimOiXvISKUwj7Ub3FZJb9MLvxM7S%2FFVrK19E0YWR0wATifUMaRTktrNTRh8rQz9GKkKXFMqxS7R%2FpiTdqjuQJHKwSY7fvE5dJ55PmtRIuTn%2BNFigThIQ35AvA%2F1%2FudHkCFZLSvpXg2g%2Bfg%2FHxBbrD8ClJ%2B4q1ggLAoeaDdnXhZeVHi%2FLoNg4%2BMV17uk%2F%2BvY946dOshUmUcsuQHVsbVVb8oPGtUeOPdWH3XdmcsKVGNAVgF8cmr5PDWJNy1RM48dujt4ZYvi40MnRhb3jqOlNEQl670lpnNlOcy9XChDIpDAqUZYFvvoxJGemBnIH8y8DNIV9UtN0QtLIVv2AxS3HeEe1BvXraBnhbTG98AVniDao07nDnKtAXfwFF044ThMohdRQJj%2BfowXc%2FzdwOepXniwyBK7PSa%2BL0eCzeKmy5uCNKKBDV%2FQhXqt417snCbmS6zw2V5tURGRcASdihTusyNMLX7Q6K6FNeezmgtnW1BPpCfFO1E9OvNwsAUnfMtb%2BrnrAi8BAx6UW5h0dpsTCadbghut6VqSLaEf4I82KvdkZGNo6ZQNy1UWJYd2KvKbVc7y%2BQ5TGXy9OytP9WMud7wFnS74QsbdZxwaFaUcTzwtfeqF8N7sm9PrImswgqGQwQY6pgFTBymQ5CNgraNvmPFzEvHExve5bp6ugNp1jIwo5fINqzbnvw1UfTSVKktSnN43FNCHxz1xGrvt9Fx2%2BzUXtO%2FlZiY6pCQIefylElPRtJdbRCnnilFsIkAq2r6PN33pvcuZD2YA7T8dPsMQxla1T9zXLvvwX2SaWn5nJfjSBDTvdSyfgrNuQL3PJTUok9mlY%2BIxwkEwEXSEXMa93pRaVoYekcJ0S1qW&X-Amz-Signature=00f5786830cb11428471f40586fea8d60a43c5a1878f870f7d43f57c74466027&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
