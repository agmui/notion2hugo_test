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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTG6MVY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECtb%2BcKqnOftIFVEZ%2FPFrawZQB%2BUwD1pGocEnifh33SAiEA9jRVr4MUVC2Wefmmnkkb0hBuy5%2Bkaa71E7bdwx19zDkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGIPkHJUiHcPQGK2CrcA8%2FoDSJvpIMOH4GntbdokYiY26BwP0eU3E9d8dIKhOkLh615THZ7kQ0b7hr35hRs8BE8vLrCH8kzXzDJRMy7Up%2BdIHYzAbFAF%2FTU%2Ft37yY81QhccLXMf%2FAnT%2F6uCSDPaMXotWwoDKop8JPXdeOg8g9kEqvUDE%2Fzg80ugxc%2BrL8IDsnJPpSoL%2FM3Gp2cfofh5lYOgd4Q5IPc%2FY7TLs0FmZwMn%2Bi3UkEBYnTickKcivpd8VDrDOHPECDydr360m1gvKN%2Fjb66LxAaCU3uXqn%2FBZDraTgfvuQpRaAdW%2FKCF8cK9Wd9jn9ZOh65mGmxs8seXZ0%2Fnt1vandtts1eLKN1gHEpbgey9nVdjesPRRv4IklEdUsRM6KTo6b%2BkjbnZ%2B%2FNOuhVvqWwrgQ5vMRbT9ldmcgu%2FZvZYirODyZB6bEQkVvNbdqljCNHiXzVEFkUbR2pnMAd4hyUf2w9D9p7SU59hFFUOGYYjR6GMREwEr90N4%2BIS6TJk6mgFmq3R7Ab3DeR%2FtsnvRe8o7To0mUyi8dBhLzC6RakTCNWzuPUPxdc63s6NnMNW3AbTnMw0HIYpBwqAEBPXGXgeO93PR54%2B32jEy5N3R41nVaSsZZdiLWx7CPzP6jOIRU0w4ZJcaxKxMJXD%2BLwGOqUB5m9YqtncFH9v3KLtuUDhhUW3aVxBlgQjOvxTAkpcIp6dphhlu8RQHQiIKLomJmWyx8NSmbDoCOuBIeWeIeS%2FluVZD%2FvCX7Q3f4rYunu0hrtqKwORSITBl%2BdPGA%2BB2hUil17qMeaXF5Vb3u5Ei8sYSrooxco4YkkqpOT%2FSsW5gK%2FaUYMhY%2BdWFxSm1E4I4i%2BZQX619ALZrnxwLp%2BC9bxt93mVkKZu&X-Amz-Signature=99c82a4f2257a807da7858072dcdfc2d41ef9c771ce7ec08e61b4deac28b3eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTG6MVY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECtb%2BcKqnOftIFVEZ%2FPFrawZQB%2BUwD1pGocEnifh33SAiEA9jRVr4MUVC2Wefmmnkkb0hBuy5%2Bkaa71E7bdwx19zDkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGIPkHJUiHcPQGK2CrcA8%2FoDSJvpIMOH4GntbdokYiY26BwP0eU3E9d8dIKhOkLh615THZ7kQ0b7hr35hRs8BE8vLrCH8kzXzDJRMy7Up%2BdIHYzAbFAF%2FTU%2Ft37yY81QhccLXMf%2FAnT%2F6uCSDPaMXotWwoDKop8JPXdeOg8g9kEqvUDE%2Fzg80ugxc%2BrL8IDsnJPpSoL%2FM3Gp2cfofh5lYOgd4Q5IPc%2FY7TLs0FmZwMn%2Bi3UkEBYnTickKcivpd8VDrDOHPECDydr360m1gvKN%2Fjb66LxAaCU3uXqn%2FBZDraTgfvuQpRaAdW%2FKCF8cK9Wd9jn9ZOh65mGmxs8seXZ0%2Fnt1vandtts1eLKN1gHEpbgey9nVdjesPRRv4IklEdUsRM6KTo6b%2BkjbnZ%2B%2FNOuhVvqWwrgQ5vMRbT9ldmcgu%2FZvZYirODyZB6bEQkVvNbdqljCNHiXzVEFkUbR2pnMAd4hyUf2w9D9p7SU59hFFUOGYYjR6GMREwEr90N4%2BIS6TJk6mgFmq3R7Ab3DeR%2FtsnvRe8o7To0mUyi8dBhLzC6RakTCNWzuPUPxdc63s6NnMNW3AbTnMw0HIYpBwqAEBPXGXgeO93PR54%2B32jEy5N3R41nVaSsZZdiLWx7CPzP6jOIRU0w4ZJcaxKxMJXD%2BLwGOqUB5m9YqtncFH9v3KLtuUDhhUW3aVxBlgQjOvxTAkpcIp6dphhlu8RQHQiIKLomJmWyx8NSmbDoCOuBIeWeIeS%2FluVZD%2FvCX7Q3f4rYunu0hrtqKwORSITBl%2BdPGA%2BB2hUil17qMeaXF5Vb3u5Ei8sYSrooxco4YkkqpOT%2FSsW5gK%2FaUYMhY%2BdWFxSm1E4I4i%2BZQX619ALZrnxwLp%2BC9bxt93mVkKZu&X-Amz-Signature=eb45c3b5a5284728d0515f387883cf82b2a633647e552c1af737846cf8ac7e64&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTG6MVY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECtb%2BcKqnOftIFVEZ%2FPFrawZQB%2BUwD1pGocEnifh33SAiEA9jRVr4MUVC2Wefmmnkkb0hBuy5%2Bkaa71E7bdwx19zDkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGIPkHJUiHcPQGK2CrcA8%2FoDSJvpIMOH4GntbdokYiY26BwP0eU3E9d8dIKhOkLh615THZ7kQ0b7hr35hRs8BE8vLrCH8kzXzDJRMy7Up%2BdIHYzAbFAF%2FTU%2Ft37yY81QhccLXMf%2FAnT%2F6uCSDPaMXotWwoDKop8JPXdeOg8g9kEqvUDE%2Fzg80ugxc%2BrL8IDsnJPpSoL%2FM3Gp2cfofh5lYOgd4Q5IPc%2FY7TLs0FmZwMn%2Bi3UkEBYnTickKcivpd8VDrDOHPECDydr360m1gvKN%2Fjb66LxAaCU3uXqn%2FBZDraTgfvuQpRaAdW%2FKCF8cK9Wd9jn9ZOh65mGmxs8seXZ0%2Fnt1vandtts1eLKN1gHEpbgey9nVdjesPRRv4IklEdUsRM6KTo6b%2BkjbnZ%2B%2FNOuhVvqWwrgQ5vMRbT9ldmcgu%2FZvZYirODyZB6bEQkVvNbdqljCNHiXzVEFkUbR2pnMAd4hyUf2w9D9p7SU59hFFUOGYYjR6GMREwEr90N4%2BIS6TJk6mgFmq3R7Ab3DeR%2FtsnvRe8o7To0mUyi8dBhLzC6RakTCNWzuPUPxdc63s6NnMNW3AbTnMw0HIYpBwqAEBPXGXgeO93PR54%2B32jEy5N3R41nVaSsZZdiLWx7CPzP6jOIRU0w4ZJcaxKxMJXD%2BLwGOqUB5m9YqtncFH9v3KLtuUDhhUW3aVxBlgQjOvxTAkpcIp6dphhlu8RQHQiIKLomJmWyx8NSmbDoCOuBIeWeIeS%2FluVZD%2FvCX7Q3f4rYunu0hrtqKwORSITBl%2BdPGA%2BB2hUil17qMeaXF5Vb3u5Ei8sYSrooxco4YkkqpOT%2FSsW5gK%2FaUYMhY%2BdWFxSm1E4I4i%2BZQX619ALZrnxwLp%2BC9bxt93mVkKZu&X-Amz-Signature=6c9266a7cb02f6102be2dbefc654e2844b67e4ab30805dc784dd5cbdb16e0274&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTG6MVY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECtb%2BcKqnOftIFVEZ%2FPFrawZQB%2BUwD1pGocEnifh33SAiEA9jRVr4MUVC2Wefmmnkkb0hBuy5%2Bkaa71E7bdwx19zDkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGIPkHJUiHcPQGK2CrcA8%2FoDSJvpIMOH4GntbdokYiY26BwP0eU3E9d8dIKhOkLh615THZ7kQ0b7hr35hRs8BE8vLrCH8kzXzDJRMy7Up%2BdIHYzAbFAF%2FTU%2Ft37yY81QhccLXMf%2FAnT%2F6uCSDPaMXotWwoDKop8JPXdeOg8g9kEqvUDE%2Fzg80ugxc%2BrL8IDsnJPpSoL%2FM3Gp2cfofh5lYOgd4Q5IPc%2FY7TLs0FmZwMn%2Bi3UkEBYnTickKcivpd8VDrDOHPECDydr360m1gvKN%2Fjb66LxAaCU3uXqn%2FBZDraTgfvuQpRaAdW%2FKCF8cK9Wd9jn9ZOh65mGmxs8seXZ0%2Fnt1vandtts1eLKN1gHEpbgey9nVdjesPRRv4IklEdUsRM6KTo6b%2BkjbnZ%2B%2FNOuhVvqWwrgQ5vMRbT9ldmcgu%2FZvZYirODyZB6bEQkVvNbdqljCNHiXzVEFkUbR2pnMAd4hyUf2w9D9p7SU59hFFUOGYYjR6GMREwEr90N4%2BIS6TJk6mgFmq3R7Ab3DeR%2FtsnvRe8o7To0mUyi8dBhLzC6RakTCNWzuPUPxdc63s6NnMNW3AbTnMw0HIYpBwqAEBPXGXgeO93PR54%2B32jEy5N3R41nVaSsZZdiLWx7CPzP6jOIRU0w4ZJcaxKxMJXD%2BLwGOqUB5m9YqtncFH9v3KLtuUDhhUW3aVxBlgQjOvxTAkpcIp6dphhlu8RQHQiIKLomJmWyx8NSmbDoCOuBIeWeIeS%2FluVZD%2FvCX7Q3f4rYunu0hrtqKwORSITBl%2BdPGA%2BB2hUil17qMeaXF5Vb3u5Ei8sYSrooxco4YkkqpOT%2FSsW5gK%2FaUYMhY%2BdWFxSm1E4I4i%2BZQX619ALZrnxwLp%2BC9bxt93mVkKZu&X-Amz-Signature=d3ac9043ec9d0b804fd51ff1c5521d87235d14f27959e9730368c00218bf2b78&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTG6MVY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECtb%2BcKqnOftIFVEZ%2FPFrawZQB%2BUwD1pGocEnifh33SAiEA9jRVr4MUVC2Wefmmnkkb0hBuy5%2Bkaa71E7bdwx19zDkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGIPkHJUiHcPQGK2CrcA8%2FoDSJvpIMOH4GntbdokYiY26BwP0eU3E9d8dIKhOkLh615THZ7kQ0b7hr35hRs8BE8vLrCH8kzXzDJRMy7Up%2BdIHYzAbFAF%2FTU%2Ft37yY81QhccLXMf%2FAnT%2F6uCSDPaMXotWwoDKop8JPXdeOg8g9kEqvUDE%2Fzg80ugxc%2BrL8IDsnJPpSoL%2FM3Gp2cfofh5lYOgd4Q5IPc%2FY7TLs0FmZwMn%2Bi3UkEBYnTickKcivpd8VDrDOHPECDydr360m1gvKN%2Fjb66LxAaCU3uXqn%2FBZDraTgfvuQpRaAdW%2FKCF8cK9Wd9jn9ZOh65mGmxs8seXZ0%2Fnt1vandtts1eLKN1gHEpbgey9nVdjesPRRv4IklEdUsRM6KTo6b%2BkjbnZ%2B%2FNOuhVvqWwrgQ5vMRbT9ldmcgu%2FZvZYirODyZB6bEQkVvNbdqljCNHiXzVEFkUbR2pnMAd4hyUf2w9D9p7SU59hFFUOGYYjR6GMREwEr90N4%2BIS6TJk6mgFmq3R7Ab3DeR%2FtsnvRe8o7To0mUyi8dBhLzC6RakTCNWzuPUPxdc63s6NnMNW3AbTnMw0HIYpBwqAEBPXGXgeO93PR54%2B32jEy5N3R41nVaSsZZdiLWx7CPzP6jOIRU0w4ZJcaxKxMJXD%2BLwGOqUB5m9YqtncFH9v3KLtuUDhhUW3aVxBlgQjOvxTAkpcIp6dphhlu8RQHQiIKLomJmWyx8NSmbDoCOuBIeWeIeS%2FluVZD%2FvCX7Q3f4rYunu0hrtqKwORSITBl%2BdPGA%2BB2hUil17qMeaXF5Vb3u5Ei8sYSrooxco4YkkqpOT%2FSsW5gK%2FaUYMhY%2BdWFxSm1E4I4i%2BZQX619ALZrnxwLp%2BC9bxt93mVkKZu&X-Amz-Signature=f541b414be0b82509b9cd5ab15e114ecccbfd5c654eb0d5a7b36703d253c21c4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTG6MVY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECtb%2BcKqnOftIFVEZ%2FPFrawZQB%2BUwD1pGocEnifh33SAiEA9jRVr4MUVC2Wefmmnkkb0hBuy5%2Bkaa71E7bdwx19zDkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGIPkHJUiHcPQGK2CrcA8%2FoDSJvpIMOH4GntbdokYiY26BwP0eU3E9d8dIKhOkLh615THZ7kQ0b7hr35hRs8BE8vLrCH8kzXzDJRMy7Up%2BdIHYzAbFAF%2FTU%2Ft37yY81QhccLXMf%2FAnT%2F6uCSDPaMXotWwoDKop8JPXdeOg8g9kEqvUDE%2Fzg80ugxc%2BrL8IDsnJPpSoL%2FM3Gp2cfofh5lYOgd4Q5IPc%2FY7TLs0FmZwMn%2Bi3UkEBYnTickKcivpd8VDrDOHPECDydr360m1gvKN%2Fjb66LxAaCU3uXqn%2FBZDraTgfvuQpRaAdW%2FKCF8cK9Wd9jn9ZOh65mGmxs8seXZ0%2Fnt1vandtts1eLKN1gHEpbgey9nVdjesPRRv4IklEdUsRM6KTo6b%2BkjbnZ%2B%2FNOuhVvqWwrgQ5vMRbT9ldmcgu%2FZvZYirODyZB6bEQkVvNbdqljCNHiXzVEFkUbR2pnMAd4hyUf2w9D9p7SU59hFFUOGYYjR6GMREwEr90N4%2BIS6TJk6mgFmq3R7Ab3DeR%2FtsnvRe8o7To0mUyi8dBhLzC6RakTCNWzuPUPxdc63s6NnMNW3AbTnMw0HIYpBwqAEBPXGXgeO93PR54%2B32jEy5N3R41nVaSsZZdiLWx7CPzP6jOIRU0w4ZJcaxKxMJXD%2BLwGOqUB5m9YqtncFH9v3KLtuUDhhUW3aVxBlgQjOvxTAkpcIp6dphhlu8RQHQiIKLomJmWyx8NSmbDoCOuBIeWeIeS%2FluVZD%2FvCX7Q3f4rYunu0hrtqKwORSITBl%2BdPGA%2BB2hUil17qMeaXF5Vb3u5Ei8sYSrooxco4YkkqpOT%2FSsW5gK%2FaUYMhY%2BdWFxSm1E4I4i%2BZQX619ALZrnxwLp%2BC9bxt93mVkKZu&X-Amz-Signature=a572d015f957c59a682f1e75efc760195216eade9fd2cc310b8b65324e7a517a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTG6MVY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECtb%2BcKqnOftIFVEZ%2FPFrawZQB%2BUwD1pGocEnifh33SAiEA9jRVr4MUVC2Wefmmnkkb0hBuy5%2Bkaa71E7bdwx19zDkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGIPkHJUiHcPQGK2CrcA8%2FoDSJvpIMOH4GntbdokYiY26BwP0eU3E9d8dIKhOkLh615THZ7kQ0b7hr35hRs8BE8vLrCH8kzXzDJRMy7Up%2BdIHYzAbFAF%2FTU%2Ft37yY81QhccLXMf%2FAnT%2F6uCSDPaMXotWwoDKop8JPXdeOg8g9kEqvUDE%2Fzg80ugxc%2BrL8IDsnJPpSoL%2FM3Gp2cfofh5lYOgd4Q5IPc%2FY7TLs0FmZwMn%2Bi3UkEBYnTickKcivpd8VDrDOHPECDydr360m1gvKN%2Fjb66LxAaCU3uXqn%2FBZDraTgfvuQpRaAdW%2FKCF8cK9Wd9jn9ZOh65mGmxs8seXZ0%2Fnt1vandtts1eLKN1gHEpbgey9nVdjesPRRv4IklEdUsRM6KTo6b%2BkjbnZ%2B%2FNOuhVvqWwrgQ5vMRbT9ldmcgu%2FZvZYirODyZB6bEQkVvNbdqljCNHiXzVEFkUbR2pnMAd4hyUf2w9D9p7SU59hFFUOGYYjR6GMREwEr90N4%2BIS6TJk6mgFmq3R7Ab3DeR%2FtsnvRe8o7To0mUyi8dBhLzC6RakTCNWzuPUPxdc63s6NnMNW3AbTnMw0HIYpBwqAEBPXGXgeO93PR54%2B32jEy5N3R41nVaSsZZdiLWx7CPzP6jOIRU0w4ZJcaxKxMJXD%2BLwGOqUB5m9YqtncFH9v3KLtuUDhhUW3aVxBlgQjOvxTAkpcIp6dphhlu8RQHQiIKLomJmWyx8NSmbDoCOuBIeWeIeS%2FluVZD%2FvCX7Q3f4rYunu0hrtqKwORSITBl%2BdPGA%2BB2hUil17qMeaXF5Vb3u5Ei8sYSrooxco4YkkqpOT%2FSsW5gK%2FaUYMhY%2BdWFxSm1E4I4i%2BZQX619ALZrnxwLp%2BC9bxt93mVkKZu&X-Amz-Signature=758adef35ebf4c5431d3b4ada0bc64b8375e3e0e688075625c80b85f0ecf6361&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
