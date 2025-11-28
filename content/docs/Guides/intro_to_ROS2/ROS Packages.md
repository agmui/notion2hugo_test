---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYULBIO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEltl0ZOhhlrooFHHAMxge%2Bco4O8JLCaE2gjOLSVFElaAiEA8YRZxFLkE1KJiFY%2BYFq0hhog9yXRIkZrIglv4nRydYUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk86nLbgDtmGUwGUSrcA9JkvQZOVZWyXMbr6T3bxOercpXpT18LwYiaSzbHFiFy0kRZ6sBRMgQDqQAFM5EBCEWGLCrj2VNGKPgp5s6pW%2FDPxgNujvc9JB58o0r0wvXqJ5ZQ2%2BzrdEqk3q%2BoWOwag5xhran8h7fer3Qo%2BAheCM4Qdedb2nRiEsUFGDKd0rLW0djDXJr2Txg8tKivq9NW2wcmkAe8r0FXiTwjaxCxdeFYNFNP0Sb0vCXnTa0o8nAHI97OAOjqlQEKpNMYPMf1LeLxYhxrUAxaXZ%2B9dJgJYn9utToYgAIdcumIykNp%2BwimbB%2B6i1n2EgFZO3D5rOPT7vA1AdFfUpJNwI%2ByJvLWo248rRg0toUUuA76BceuVF6wM3kI6qAcJDZCYeneTdMRzbLl6tzkDp51LjOkUFT0ijz9S4VocJ6lE7NHKeSD%2BC3JmbiBLk0XlT0WDWEZcwtta0supFTXUJ%2F1TfrjyeYYT6ZrCJKH2zPldMBucKHVO2l99xV5QmYmfOpIJChUAvAHU1YXxvrwgNsz3adsWu0Fb%2F1YO%2F9n5gOiBBDKPh65o%2F%2Bi7FERfAjd84CbV6JTs65uVD%2Btxk1tEven5Frp0Sjw%2Bo5K8qUo1SfmlecZCw1drJecTz9shqxG8U4XcmX%2BMOTToskGOqUBtG%2F50xBSWJZYbjsIKv13FKKN83oVuIOdotR69qA3DQwb02%2B0vf5MpXPBoAPO2RNJHLwYF%2FruQQseuJHBR7O670sqZaW72ihsqwkexsLFD17kkPvMAKwHSo0UP1vALFooY2%2FWAIAmYoR%2FYRkNbDleLQS1affUCaBR2Hcd76E%2BsD2DFYuioqJCvTQ%2F5UiPm0X9h7fupaoSFTJllujTkSU%2FFL6F4Vd2&X-Amz-Signature=b01f0b9bb0558f13f6881a722274eaa6b1c2a0e39d86729150d1102e9cadefe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYULBIO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEltl0ZOhhlrooFHHAMxge%2Bco4O8JLCaE2gjOLSVFElaAiEA8YRZxFLkE1KJiFY%2BYFq0hhog9yXRIkZrIglv4nRydYUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk86nLbgDtmGUwGUSrcA9JkvQZOVZWyXMbr6T3bxOercpXpT18LwYiaSzbHFiFy0kRZ6sBRMgQDqQAFM5EBCEWGLCrj2VNGKPgp5s6pW%2FDPxgNujvc9JB58o0r0wvXqJ5ZQ2%2BzrdEqk3q%2BoWOwag5xhran8h7fer3Qo%2BAheCM4Qdedb2nRiEsUFGDKd0rLW0djDXJr2Txg8tKivq9NW2wcmkAe8r0FXiTwjaxCxdeFYNFNP0Sb0vCXnTa0o8nAHI97OAOjqlQEKpNMYPMf1LeLxYhxrUAxaXZ%2B9dJgJYn9utToYgAIdcumIykNp%2BwimbB%2B6i1n2EgFZO3D5rOPT7vA1AdFfUpJNwI%2ByJvLWo248rRg0toUUuA76BceuVF6wM3kI6qAcJDZCYeneTdMRzbLl6tzkDp51LjOkUFT0ijz9S4VocJ6lE7NHKeSD%2BC3JmbiBLk0XlT0WDWEZcwtta0supFTXUJ%2F1TfrjyeYYT6ZrCJKH2zPldMBucKHVO2l99xV5QmYmfOpIJChUAvAHU1YXxvrwgNsz3adsWu0Fb%2F1YO%2F9n5gOiBBDKPh65o%2F%2Bi7FERfAjd84CbV6JTs65uVD%2Btxk1tEven5Frp0Sjw%2Bo5K8qUo1SfmlecZCw1drJecTz9shqxG8U4XcmX%2BMOTToskGOqUBtG%2F50xBSWJZYbjsIKv13FKKN83oVuIOdotR69qA3DQwb02%2B0vf5MpXPBoAPO2RNJHLwYF%2FruQQseuJHBR7O670sqZaW72ihsqwkexsLFD17kkPvMAKwHSo0UP1vALFooY2%2FWAIAmYoR%2FYRkNbDleLQS1affUCaBR2Hcd76E%2BsD2DFYuioqJCvTQ%2F5UiPm0X9h7fupaoSFTJllujTkSU%2FFL6F4Vd2&X-Amz-Signature=5cbfb72d5f6659362a39adf36d26810bbb935089fa7140acdc4f03b79f1fb9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYULBIO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEltl0ZOhhlrooFHHAMxge%2Bco4O8JLCaE2gjOLSVFElaAiEA8YRZxFLkE1KJiFY%2BYFq0hhog9yXRIkZrIglv4nRydYUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk86nLbgDtmGUwGUSrcA9JkvQZOVZWyXMbr6T3bxOercpXpT18LwYiaSzbHFiFy0kRZ6sBRMgQDqQAFM5EBCEWGLCrj2VNGKPgp5s6pW%2FDPxgNujvc9JB58o0r0wvXqJ5ZQ2%2BzrdEqk3q%2BoWOwag5xhran8h7fer3Qo%2BAheCM4Qdedb2nRiEsUFGDKd0rLW0djDXJr2Txg8tKivq9NW2wcmkAe8r0FXiTwjaxCxdeFYNFNP0Sb0vCXnTa0o8nAHI97OAOjqlQEKpNMYPMf1LeLxYhxrUAxaXZ%2B9dJgJYn9utToYgAIdcumIykNp%2BwimbB%2B6i1n2EgFZO3D5rOPT7vA1AdFfUpJNwI%2ByJvLWo248rRg0toUUuA76BceuVF6wM3kI6qAcJDZCYeneTdMRzbLl6tzkDp51LjOkUFT0ijz9S4VocJ6lE7NHKeSD%2BC3JmbiBLk0XlT0WDWEZcwtta0supFTXUJ%2F1TfrjyeYYT6ZrCJKH2zPldMBucKHVO2l99xV5QmYmfOpIJChUAvAHU1YXxvrwgNsz3adsWu0Fb%2F1YO%2F9n5gOiBBDKPh65o%2F%2Bi7FERfAjd84CbV6JTs65uVD%2Btxk1tEven5Frp0Sjw%2Bo5K8qUo1SfmlecZCw1drJecTz9shqxG8U4XcmX%2BMOTToskGOqUBtG%2F50xBSWJZYbjsIKv13FKKN83oVuIOdotR69qA3DQwb02%2B0vf5MpXPBoAPO2RNJHLwYF%2FruQQseuJHBR7O670sqZaW72ihsqwkexsLFD17kkPvMAKwHSo0UP1vALFooY2%2FWAIAmYoR%2FYRkNbDleLQS1affUCaBR2Hcd76E%2BsD2DFYuioqJCvTQ%2F5UiPm0X9h7fupaoSFTJllujTkSU%2FFL6F4Vd2&X-Amz-Signature=ce304e4907d98956ee058301a05e3f5523fb06dfb2246cd9a2142393f0cfd847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYULBIO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEltl0ZOhhlrooFHHAMxge%2Bco4O8JLCaE2gjOLSVFElaAiEA8YRZxFLkE1KJiFY%2BYFq0hhog9yXRIkZrIglv4nRydYUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk86nLbgDtmGUwGUSrcA9JkvQZOVZWyXMbr6T3bxOercpXpT18LwYiaSzbHFiFy0kRZ6sBRMgQDqQAFM5EBCEWGLCrj2VNGKPgp5s6pW%2FDPxgNujvc9JB58o0r0wvXqJ5ZQ2%2BzrdEqk3q%2BoWOwag5xhran8h7fer3Qo%2BAheCM4Qdedb2nRiEsUFGDKd0rLW0djDXJr2Txg8tKivq9NW2wcmkAe8r0FXiTwjaxCxdeFYNFNP0Sb0vCXnTa0o8nAHI97OAOjqlQEKpNMYPMf1LeLxYhxrUAxaXZ%2B9dJgJYn9utToYgAIdcumIykNp%2BwimbB%2B6i1n2EgFZO3D5rOPT7vA1AdFfUpJNwI%2ByJvLWo248rRg0toUUuA76BceuVF6wM3kI6qAcJDZCYeneTdMRzbLl6tzkDp51LjOkUFT0ijz9S4VocJ6lE7NHKeSD%2BC3JmbiBLk0XlT0WDWEZcwtta0supFTXUJ%2F1TfrjyeYYT6ZrCJKH2zPldMBucKHVO2l99xV5QmYmfOpIJChUAvAHU1YXxvrwgNsz3adsWu0Fb%2F1YO%2F9n5gOiBBDKPh65o%2F%2Bi7FERfAjd84CbV6JTs65uVD%2Btxk1tEven5Frp0Sjw%2Bo5K8qUo1SfmlecZCw1drJecTz9shqxG8U4XcmX%2BMOTToskGOqUBtG%2F50xBSWJZYbjsIKv13FKKN83oVuIOdotR69qA3DQwb02%2B0vf5MpXPBoAPO2RNJHLwYF%2FruQQseuJHBR7O670sqZaW72ihsqwkexsLFD17kkPvMAKwHSo0UP1vALFooY2%2FWAIAmYoR%2FYRkNbDleLQS1affUCaBR2Hcd76E%2BsD2DFYuioqJCvTQ%2F5UiPm0X9h7fupaoSFTJllujTkSU%2FFL6F4Vd2&X-Amz-Signature=5aa474ff1fa1801463950ae7393993e35a46428620de6980b79ed5ba9626f5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYULBIO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEltl0ZOhhlrooFHHAMxge%2Bco4O8JLCaE2gjOLSVFElaAiEA8YRZxFLkE1KJiFY%2BYFq0hhog9yXRIkZrIglv4nRydYUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk86nLbgDtmGUwGUSrcA9JkvQZOVZWyXMbr6T3bxOercpXpT18LwYiaSzbHFiFy0kRZ6sBRMgQDqQAFM5EBCEWGLCrj2VNGKPgp5s6pW%2FDPxgNujvc9JB58o0r0wvXqJ5ZQ2%2BzrdEqk3q%2BoWOwag5xhran8h7fer3Qo%2BAheCM4Qdedb2nRiEsUFGDKd0rLW0djDXJr2Txg8tKivq9NW2wcmkAe8r0FXiTwjaxCxdeFYNFNP0Sb0vCXnTa0o8nAHI97OAOjqlQEKpNMYPMf1LeLxYhxrUAxaXZ%2B9dJgJYn9utToYgAIdcumIykNp%2BwimbB%2B6i1n2EgFZO3D5rOPT7vA1AdFfUpJNwI%2ByJvLWo248rRg0toUUuA76BceuVF6wM3kI6qAcJDZCYeneTdMRzbLl6tzkDp51LjOkUFT0ijz9S4VocJ6lE7NHKeSD%2BC3JmbiBLk0XlT0WDWEZcwtta0supFTXUJ%2F1TfrjyeYYT6ZrCJKH2zPldMBucKHVO2l99xV5QmYmfOpIJChUAvAHU1YXxvrwgNsz3adsWu0Fb%2F1YO%2F9n5gOiBBDKPh65o%2F%2Bi7FERfAjd84CbV6JTs65uVD%2Btxk1tEven5Frp0Sjw%2Bo5K8qUo1SfmlecZCw1drJecTz9shqxG8U4XcmX%2BMOTToskGOqUBtG%2F50xBSWJZYbjsIKv13FKKN83oVuIOdotR69qA3DQwb02%2B0vf5MpXPBoAPO2RNJHLwYF%2FruQQseuJHBR7O670sqZaW72ihsqwkexsLFD17kkPvMAKwHSo0UP1vALFooY2%2FWAIAmYoR%2FYRkNbDleLQS1affUCaBR2Hcd76E%2BsD2DFYuioqJCvTQ%2F5UiPm0X9h7fupaoSFTJllujTkSU%2FFL6F4Vd2&X-Amz-Signature=56b3e3bbafa6c33ec78f920ea2ce1cd1bec3f5d6363b78bfa42ba26a8fd365fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYULBIO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEltl0ZOhhlrooFHHAMxge%2Bco4O8JLCaE2gjOLSVFElaAiEA8YRZxFLkE1KJiFY%2BYFq0hhog9yXRIkZrIglv4nRydYUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk86nLbgDtmGUwGUSrcA9JkvQZOVZWyXMbr6T3bxOercpXpT18LwYiaSzbHFiFy0kRZ6sBRMgQDqQAFM5EBCEWGLCrj2VNGKPgp5s6pW%2FDPxgNujvc9JB58o0r0wvXqJ5ZQ2%2BzrdEqk3q%2BoWOwag5xhran8h7fer3Qo%2BAheCM4Qdedb2nRiEsUFGDKd0rLW0djDXJr2Txg8tKivq9NW2wcmkAe8r0FXiTwjaxCxdeFYNFNP0Sb0vCXnTa0o8nAHI97OAOjqlQEKpNMYPMf1LeLxYhxrUAxaXZ%2B9dJgJYn9utToYgAIdcumIykNp%2BwimbB%2B6i1n2EgFZO3D5rOPT7vA1AdFfUpJNwI%2ByJvLWo248rRg0toUUuA76BceuVF6wM3kI6qAcJDZCYeneTdMRzbLl6tzkDp51LjOkUFT0ijz9S4VocJ6lE7NHKeSD%2BC3JmbiBLk0XlT0WDWEZcwtta0supFTXUJ%2F1TfrjyeYYT6ZrCJKH2zPldMBucKHVO2l99xV5QmYmfOpIJChUAvAHU1YXxvrwgNsz3adsWu0Fb%2F1YO%2F9n5gOiBBDKPh65o%2F%2Bi7FERfAjd84CbV6JTs65uVD%2Btxk1tEven5Frp0Sjw%2Bo5K8qUo1SfmlecZCw1drJecTz9shqxG8U4XcmX%2BMOTToskGOqUBtG%2F50xBSWJZYbjsIKv13FKKN83oVuIOdotR69qA3DQwb02%2B0vf5MpXPBoAPO2RNJHLwYF%2FruQQseuJHBR7O670sqZaW72ihsqwkexsLFD17kkPvMAKwHSo0UP1vALFooY2%2FWAIAmYoR%2FYRkNbDleLQS1affUCaBR2Hcd76E%2BsD2DFYuioqJCvTQ%2F5UiPm0X9h7fupaoSFTJllujTkSU%2FFL6F4Vd2&X-Amz-Signature=f09e17b10651c1a94c06c6e3eeea4a6e462ef4ebe1c07fdeb00931c954b46005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYULBIO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEltl0ZOhhlrooFHHAMxge%2Bco4O8JLCaE2gjOLSVFElaAiEA8YRZxFLkE1KJiFY%2BYFq0hhog9yXRIkZrIglv4nRydYUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk86nLbgDtmGUwGUSrcA9JkvQZOVZWyXMbr6T3bxOercpXpT18LwYiaSzbHFiFy0kRZ6sBRMgQDqQAFM5EBCEWGLCrj2VNGKPgp5s6pW%2FDPxgNujvc9JB58o0r0wvXqJ5ZQ2%2BzrdEqk3q%2BoWOwag5xhran8h7fer3Qo%2BAheCM4Qdedb2nRiEsUFGDKd0rLW0djDXJr2Txg8tKivq9NW2wcmkAe8r0FXiTwjaxCxdeFYNFNP0Sb0vCXnTa0o8nAHI97OAOjqlQEKpNMYPMf1LeLxYhxrUAxaXZ%2B9dJgJYn9utToYgAIdcumIykNp%2BwimbB%2B6i1n2EgFZO3D5rOPT7vA1AdFfUpJNwI%2ByJvLWo248rRg0toUUuA76BceuVF6wM3kI6qAcJDZCYeneTdMRzbLl6tzkDp51LjOkUFT0ijz9S4VocJ6lE7NHKeSD%2BC3JmbiBLk0XlT0WDWEZcwtta0supFTXUJ%2F1TfrjyeYYT6ZrCJKH2zPldMBucKHVO2l99xV5QmYmfOpIJChUAvAHU1YXxvrwgNsz3adsWu0Fb%2F1YO%2F9n5gOiBBDKPh65o%2F%2Bi7FERfAjd84CbV6JTs65uVD%2Btxk1tEven5Frp0Sjw%2Bo5K8qUo1SfmlecZCw1drJecTz9shqxG8U4XcmX%2BMOTToskGOqUBtG%2F50xBSWJZYbjsIKv13FKKN83oVuIOdotR69qA3DQwb02%2B0vf5MpXPBoAPO2RNJHLwYF%2FruQQseuJHBR7O670sqZaW72ihsqwkexsLFD17kkPvMAKwHSo0UP1vALFooY2%2FWAIAmYoR%2FYRkNbDleLQS1affUCaBR2Hcd76E%2BsD2DFYuioqJCvTQ%2F5UiPm0X9h7fupaoSFTJllujTkSU%2FFL6F4Vd2&X-Amz-Signature=4cb09096a28bda6a767f8ed705fd66dfb104c58ab8523ec59f4cba0d4a0ba8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
