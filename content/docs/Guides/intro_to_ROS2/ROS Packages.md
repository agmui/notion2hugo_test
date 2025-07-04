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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4RBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICtP57iru959469oAy3YhADvbijWvcGbN%2BUQpAF49ZCzAiBJ3yGaN1DmXg8L1a%2B0QHXGEnX%2FZXMEjaxTHcIdhJAvQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMFRgctDxg6ybhYXLUKtwDi7o7wrbqlGkjrE2iolBJK3wXYp3DJ1D%2FuhFgeo0GjdH5CUp0BBCtDIQUXLvsYu%2F3kxrTTxa0B2EB579bQ4mF439xmJJy2v36dQf86VvekpBjhwGAhsumWRPF71LfldZKTyaO6TJ4%2FhEu%2BB38FGNhamk6gyquvMbDXKuecyBDIwALXv6GxLsC6KP6EU5Q5X0D2PUq6czmvVglR%2FcVoz%2F1FhmKGCQD%2BiUEYBI7D%2BlwPnkyRRj75jAvQ02XJDgmoJPd13bxgICzb18wl5tt8qErdB79TEbQHR63rO1ojB9491dPrSNkqKTY3pCwoYOx7PW72nYjvn92OTAwR3QHw4ZZVcRbBQFOhnf469UrrBJE1g5%2ByMvWxTwzFToUGy48SiArcsDBbkqbBkD%2FGXpXKLm%2F0n8T38gYKIUxAW0sGc7xGZz2HsPp%2FB4GCAHtq3w3zUX1IaYX9dCY2M7KF2PfsJ5lsj62P50ApcpwINz8QSMu5LT%2FrYEyWaL08tbzJ63uPY65HfYNNsGbgLLW%2Fxej5DI8lmyySEVnv%2BDNAZfvdrm%2BTWRj72k%2FZZp59rP9i72EXVYEdN7X8unx845LvgEzQyw7NpnoiefBITgZ1oY06HzlAnbY2GYwjiERl3J4Ly0w7uCdwwY6pgEtFvcbY3FCMsQuknJr7uo3aLgGTZon0zjCDQAZsG7XUTFwZavjot55Fvmzfi2ZzoHJQnEG9asF8Ps%2FQNI76waqTOQWb5JowbL%2FcutfUsNEvMivD4MCSCarr824rkz%2F3%2BLAay%2FKdxeY13QERKEATjeKzxiy8iic1wDfHY1c0PJ%2B9glnvQqRpbUXFerWiHfXulY1f94J7izOMcYcFgNP48zx8Ysb2NoD&X-Amz-Signature=daa6f0faa439ae0769ea0b26f9d2afade0dab769f71e507ce6ae13e4882de342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4RBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICtP57iru959469oAy3YhADvbijWvcGbN%2BUQpAF49ZCzAiBJ3yGaN1DmXg8L1a%2B0QHXGEnX%2FZXMEjaxTHcIdhJAvQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMFRgctDxg6ybhYXLUKtwDi7o7wrbqlGkjrE2iolBJK3wXYp3DJ1D%2FuhFgeo0GjdH5CUp0BBCtDIQUXLvsYu%2F3kxrTTxa0B2EB579bQ4mF439xmJJy2v36dQf86VvekpBjhwGAhsumWRPF71LfldZKTyaO6TJ4%2FhEu%2BB38FGNhamk6gyquvMbDXKuecyBDIwALXv6GxLsC6KP6EU5Q5X0D2PUq6czmvVglR%2FcVoz%2F1FhmKGCQD%2BiUEYBI7D%2BlwPnkyRRj75jAvQ02XJDgmoJPd13bxgICzb18wl5tt8qErdB79TEbQHR63rO1ojB9491dPrSNkqKTY3pCwoYOx7PW72nYjvn92OTAwR3QHw4ZZVcRbBQFOhnf469UrrBJE1g5%2ByMvWxTwzFToUGy48SiArcsDBbkqbBkD%2FGXpXKLm%2F0n8T38gYKIUxAW0sGc7xGZz2HsPp%2FB4GCAHtq3w3zUX1IaYX9dCY2M7KF2PfsJ5lsj62P50ApcpwINz8QSMu5LT%2FrYEyWaL08tbzJ63uPY65HfYNNsGbgLLW%2Fxej5DI8lmyySEVnv%2BDNAZfvdrm%2BTWRj72k%2FZZp59rP9i72EXVYEdN7X8unx845LvgEzQyw7NpnoiefBITgZ1oY06HzlAnbY2GYwjiERl3J4Ly0w7uCdwwY6pgEtFvcbY3FCMsQuknJr7uo3aLgGTZon0zjCDQAZsG7XUTFwZavjot55Fvmzfi2ZzoHJQnEG9asF8Ps%2FQNI76waqTOQWb5JowbL%2FcutfUsNEvMivD4MCSCarr824rkz%2F3%2BLAay%2FKdxeY13QERKEATjeKzxiy8iic1wDfHY1c0PJ%2B9glnvQqRpbUXFerWiHfXulY1f94J7izOMcYcFgNP48zx8Ysb2NoD&X-Amz-Signature=4eb30507ee2518e32cbe4fc957352d59c4eac2a27d02ec90a33bfdaad4de674b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4RBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICtP57iru959469oAy3YhADvbijWvcGbN%2BUQpAF49ZCzAiBJ3yGaN1DmXg8L1a%2B0QHXGEnX%2FZXMEjaxTHcIdhJAvQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMFRgctDxg6ybhYXLUKtwDi7o7wrbqlGkjrE2iolBJK3wXYp3DJ1D%2FuhFgeo0GjdH5CUp0BBCtDIQUXLvsYu%2F3kxrTTxa0B2EB579bQ4mF439xmJJy2v36dQf86VvekpBjhwGAhsumWRPF71LfldZKTyaO6TJ4%2FhEu%2BB38FGNhamk6gyquvMbDXKuecyBDIwALXv6GxLsC6KP6EU5Q5X0D2PUq6czmvVglR%2FcVoz%2F1FhmKGCQD%2BiUEYBI7D%2BlwPnkyRRj75jAvQ02XJDgmoJPd13bxgICzb18wl5tt8qErdB79TEbQHR63rO1ojB9491dPrSNkqKTY3pCwoYOx7PW72nYjvn92OTAwR3QHw4ZZVcRbBQFOhnf469UrrBJE1g5%2ByMvWxTwzFToUGy48SiArcsDBbkqbBkD%2FGXpXKLm%2F0n8T38gYKIUxAW0sGc7xGZz2HsPp%2FB4GCAHtq3w3zUX1IaYX9dCY2M7KF2PfsJ5lsj62P50ApcpwINz8QSMu5LT%2FrYEyWaL08tbzJ63uPY65HfYNNsGbgLLW%2Fxej5DI8lmyySEVnv%2BDNAZfvdrm%2BTWRj72k%2FZZp59rP9i72EXVYEdN7X8unx845LvgEzQyw7NpnoiefBITgZ1oY06HzlAnbY2GYwjiERl3J4Ly0w7uCdwwY6pgEtFvcbY3FCMsQuknJr7uo3aLgGTZon0zjCDQAZsG7XUTFwZavjot55Fvmzfi2ZzoHJQnEG9asF8Ps%2FQNI76waqTOQWb5JowbL%2FcutfUsNEvMivD4MCSCarr824rkz%2F3%2BLAay%2FKdxeY13QERKEATjeKzxiy8iic1wDfHY1c0PJ%2B9glnvQqRpbUXFerWiHfXulY1f94J7izOMcYcFgNP48zx8Ysb2NoD&X-Amz-Signature=8d4ed14833a7d431049ba9f513e0cc15788a5eac5cfb1c320a219c622ccc6da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4RBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICtP57iru959469oAy3YhADvbijWvcGbN%2BUQpAF49ZCzAiBJ3yGaN1DmXg8L1a%2B0QHXGEnX%2FZXMEjaxTHcIdhJAvQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMFRgctDxg6ybhYXLUKtwDi7o7wrbqlGkjrE2iolBJK3wXYp3DJ1D%2FuhFgeo0GjdH5CUp0BBCtDIQUXLvsYu%2F3kxrTTxa0B2EB579bQ4mF439xmJJy2v36dQf86VvekpBjhwGAhsumWRPF71LfldZKTyaO6TJ4%2FhEu%2BB38FGNhamk6gyquvMbDXKuecyBDIwALXv6GxLsC6KP6EU5Q5X0D2PUq6czmvVglR%2FcVoz%2F1FhmKGCQD%2BiUEYBI7D%2BlwPnkyRRj75jAvQ02XJDgmoJPd13bxgICzb18wl5tt8qErdB79TEbQHR63rO1ojB9491dPrSNkqKTY3pCwoYOx7PW72nYjvn92OTAwR3QHw4ZZVcRbBQFOhnf469UrrBJE1g5%2ByMvWxTwzFToUGy48SiArcsDBbkqbBkD%2FGXpXKLm%2F0n8T38gYKIUxAW0sGc7xGZz2HsPp%2FB4GCAHtq3w3zUX1IaYX9dCY2M7KF2PfsJ5lsj62P50ApcpwINz8QSMu5LT%2FrYEyWaL08tbzJ63uPY65HfYNNsGbgLLW%2Fxej5DI8lmyySEVnv%2BDNAZfvdrm%2BTWRj72k%2FZZp59rP9i72EXVYEdN7X8unx845LvgEzQyw7NpnoiefBITgZ1oY06HzlAnbY2GYwjiERl3J4Ly0w7uCdwwY6pgEtFvcbY3FCMsQuknJr7uo3aLgGTZon0zjCDQAZsG7XUTFwZavjot55Fvmzfi2ZzoHJQnEG9asF8Ps%2FQNI76waqTOQWb5JowbL%2FcutfUsNEvMivD4MCSCarr824rkz%2F3%2BLAay%2FKdxeY13QERKEATjeKzxiy8iic1wDfHY1c0PJ%2B9glnvQqRpbUXFerWiHfXulY1f94J7izOMcYcFgNP48zx8Ysb2NoD&X-Amz-Signature=383429970a31929676f68bedaf05d05c3dd2f9d8a58d4cdd50ac8f2e480e16f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4RBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICtP57iru959469oAy3YhADvbijWvcGbN%2BUQpAF49ZCzAiBJ3yGaN1DmXg8L1a%2B0QHXGEnX%2FZXMEjaxTHcIdhJAvQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMFRgctDxg6ybhYXLUKtwDi7o7wrbqlGkjrE2iolBJK3wXYp3DJ1D%2FuhFgeo0GjdH5CUp0BBCtDIQUXLvsYu%2F3kxrTTxa0B2EB579bQ4mF439xmJJy2v36dQf86VvekpBjhwGAhsumWRPF71LfldZKTyaO6TJ4%2FhEu%2BB38FGNhamk6gyquvMbDXKuecyBDIwALXv6GxLsC6KP6EU5Q5X0D2PUq6czmvVglR%2FcVoz%2F1FhmKGCQD%2BiUEYBI7D%2BlwPnkyRRj75jAvQ02XJDgmoJPd13bxgICzb18wl5tt8qErdB79TEbQHR63rO1ojB9491dPrSNkqKTY3pCwoYOx7PW72nYjvn92OTAwR3QHw4ZZVcRbBQFOhnf469UrrBJE1g5%2ByMvWxTwzFToUGy48SiArcsDBbkqbBkD%2FGXpXKLm%2F0n8T38gYKIUxAW0sGc7xGZz2HsPp%2FB4GCAHtq3w3zUX1IaYX9dCY2M7KF2PfsJ5lsj62P50ApcpwINz8QSMu5LT%2FrYEyWaL08tbzJ63uPY65HfYNNsGbgLLW%2Fxej5DI8lmyySEVnv%2BDNAZfvdrm%2BTWRj72k%2FZZp59rP9i72EXVYEdN7X8unx845LvgEzQyw7NpnoiefBITgZ1oY06HzlAnbY2GYwjiERl3J4Ly0w7uCdwwY6pgEtFvcbY3FCMsQuknJr7uo3aLgGTZon0zjCDQAZsG7XUTFwZavjot55Fvmzfi2ZzoHJQnEG9asF8Ps%2FQNI76waqTOQWb5JowbL%2FcutfUsNEvMivD4MCSCarr824rkz%2F3%2BLAay%2FKdxeY13QERKEATjeKzxiy8iic1wDfHY1c0PJ%2B9glnvQqRpbUXFerWiHfXulY1f94J7izOMcYcFgNP48zx8Ysb2NoD&X-Amz-Signature=bc2a04f1a90c4fb90b2f318b217cc7e77aa8cc4f034e1226b37c4e938b3a96dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4RBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICtP57iru959469oAy3YhADvbijWvcGbN%2BUQpAF49ZCzAiBJ3yGaN1DmXg8L1a%2B0QHXGEnX%2FZXMEjaxTHcIdhJAvQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMFRgctDxg6ybhYXLUKtwDi7o7wrbqlGkjrE2iolBJK3wXYp3DJ1D%2FuhFgeo0GjdH5CUp0BBCtDIQUXLvsYu%2F3kxrTTxa0B2EB579bQ4mF439xmJJy2v36dQf86VvekpBjhwGAhsumWRPF71LfldZKTyaO6TJ4%2FhEu%2BB38FGNhamk6gyquvMbDXKuecyBDIwALXv6GxLsC6KP6EU5Q5X0D2PUq6czmvVglR%2FcVoz%2F1FhmKGCQD%2BiUEYBI7D%2BlwPnkyRRj75jAvQ02XJDgmoJPd13bxgICzb18wl5tt8qErdB79TEbQHR63rO1ojB9491dPrSNkqKTY3pCwoYOx7PW72nYjvn92OTAwR3QHw4ZZVcRbBQFOhnf469UrrBJE1g5%2ByMvWxTwzFToUGy48SiArcsDBbkqbBkD%2FGXpXKLm%2F0n8T38gYKIUxAW0sGc7xGZz2HsPp%2FB4GCAHtq3w3zUX1IaYX9dCY2M7KF2PfsJ5lsj62P50ApcpwINz8QSMu5LT%2FrYEyWaL08tbzJ63uPY65HfYNNsGbgLLW%2Fxej5DI8lmyySEVnv%2BDNAZfvdrm%2BTWRj72k%2FZZp59rP9i72EXVYEdN7X8unx845LvgEzQyw7NpnoiefBITgZ1oY06HzlAnbY2GYwjiERl3J4Ly0w7uCdwwY6pgEtFvcbY3FCMsQuknJr7uo3aLgGTZon0zjCDQAZsG7XUTFwZavjot55Fvmzfi2ZzoHJQnEG9asF8Ps%2FQNI76waqTOQWb5JowbL%2FcutfUsNEvMivD4MCSCarr824rkz%2F3%2BLAay%2FKdxeY13QERKEATjeKzxiy8iic1wDfHY1c0PJ%2B9glnvQqRpbUXFerWiHfXulY1f94J7izOMcYcFgNP48zx8Ysb2NoD&X-Amz-Signature=862708369891705d6810e97feaf4fba6f8e347b8fc5762ed30e00a75c5e67385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4RBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICtP57iru959469oAy3YhADvbijWvcGbN%2BUQpAF49ZCzAiBJ3yGaN1DmXg8L1a%2B0QHXGEnX%2FZXMEjaxTHcIdhJAvQSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMFRgctDxg6ybhYXLUKtwDi7o7wrbqlGkjrE2iolBJK3wXYp3DJ1D%2FuhFgeo0GjdH5CUp0BBCtDIQUXLvsYu%2F3kxrTTxa0B2EB579bQ4mF439xmJJy2v36dQf86VvekpBjhwGAhsumWRPF71LfldZKTyaO6TJ4%2FhEu%2BB38FGNhamk6gyquvMbDXKuecyBDIwALXv6GxLsC6KP6EU5Q5X0D2PUq6czmvVglR%2FcVoz%2F1FhmKGCQD%2BiUEYBI7D%2BlwPnkyRRj75jAvQ02XJDgmoJPd13bxgICzb18wl5tt8qErdB79TEbQHR63rO1ojB9491dPrSNkqKTY3pCwoYOx7PW72nYjvn92OTAwR3QHw4ZZVcRbBQFOhnf469UrrBJE1g5%2ByMvWxTwzFToUGy48SiArcsDBbkqbBkD%2FGXpXKLm%2F0n8T38gYKIUxAW0sGc7xGZz2HsPp%2FB4GCAHtq3w3zUX1IaYX9dCY2M7KF2PfsJ5lsj62P50ApcpwINz8QSMu5LT%2FrYEyWaL08tbzJ63uPY65HfYNNsGbgLLW%2Fxej5DI8lmyySEVnv%2BDNAZfvdrm%2BTWRj72k%2FZZp59rP9i72EXVYEdN7X8unx845LvgEzQyw7NpnoiefBITgZ1oY06HzlAnbY2GYwjiERl3J4Ly0w7uCdwwY6pgEtFvcbY3FCMsQuknJr7uo3aLgGTZon0zjCDQAZsG7XUTFwZavjot55Fvmzfi2ZzoHJQnEG9asF8Ps%2FQNI76waqTOQWb5JowbL%2FcutfUsNEvMivD4MCSCarr824rkz%2F3%2BLAay%2FKdxeY13QERKEATjeKzxiy8iic1wDfHY1c0PJ%2B9glnvQqRpbUXFerWiHfXulY1f94J7izOMcYcFgNP48zx8Ysb2NoD&X-Amz-Signature=83723b1c2eac16e57455d4e350afe7eeb9c999b015922afebf9223437bb6586f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
