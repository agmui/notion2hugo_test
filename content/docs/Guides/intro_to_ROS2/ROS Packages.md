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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZD657PI%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGweZ4SFehMBfyTOHRW4Q4MzH87arP6dKq5ZAjweL%2FPJAiEAnjZPeW0osQyPN3l6Mo6FWlt4X9%2FwgrXjXan6NkZOHEEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMVEHZrHt%2BqYGWMlzircA8g3kTC1L4gpDZW9lMcOcpqbeiAxBulW8BOUcD7Ruwu47rRGbnmj4GDuRy72xjscrcAT%2BgHPgEs7zfYKDkFrZAN2k4hHld8cjG6JKFQhNiXt%2FLFE7SC4mWUveHCaWu4S47S3HC9QOzhsuV4CP%2Bm%2FrfbhGXy3sF9wDIMLOFXP1qoJBeassAYmye%2Bw3kkqW%2BxpnTlOdwLQyw9uHrE2mLBgwMLZhYKpWNnYyWxcYNIpyONI6x7OZfO7r7amSNnwoaeKilx8gVi7pb5WzXzVFNM8V76MrG3P9sdAPNMBNuadegWt6NUFo2Lpd1Xlpd78JZO%2BlJnDyhrGMLdhSKxQgHL38KhpBPZTgZDZnyFGAjSVtpxsH%2Bi7Y9%2BFpEP3XuRt35CJpPpGWLw51jvnupsi2lh11JqQXCJ9bwXOMBVDvqBCensIa8emYJSIaRUpuOxVRa8Ri%2Fh5j5l4VujBiIEtO%2FdBdsLAeid%2FthyreeyJl45092LrGGjO408TL7DKp9ZhCZ3Ic76T0yBilotqXCrVWVo077sJWtN8PsX30GJZPDVt8NJGkNB56xMVzX4UUASTokXMyjkVP0bkgQiWdAE%2B2GtR0BliZTAkvbFqhcFbC3giYskN9L2nvfFzUL6CrXAyML25q8cGOqUB0Zfu%2FXlcFjYad1QB%2F1TI0%2FGCru26ScmOm%2FCbeBA6K2M11W7mIMXJ%2FOf4Vgu3asnUe8ultxH0mlqxmSd4lGPtoaBLyiS5sWI2okwInzwcNKrWmjA6UCbOmbIAR3NJGAEyofu8bvnCOWBQ%2BGxAz32dTZNiFzLaHFcG5D0%2FQeklfAmNQXvANzmhztdxC4fSMSCbi5zpNPOj%2F5VloMqDQs6kBT7FmL7V&X-Amz-Signature=0e4b8591f44ef1318acd257a04e0ff5d015c78201b2c312a30eeae31456065cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZD657PI%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGweZ4SFehMBfyTOHRW4Q4MzH87arP6dKq5ZAjweL%2FPJAiEAnjZPeW0osQyPN3l6Mo6FWlt4X9%2FwgrXjXan6NkZOHEEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMVEHZrHt%2BqYGWMlzircA8g3kTC1L4gpDZW9lMcOcpqbeiAxBulW8BOUcD7Ruwu47rRGbnmj4GDuRy72xjscrcAT%2BgHPgEs7zfYKDkFrZAN2k4hHld8cjG6JKFQhNiXt%2FLFE7SC4mWUveHCaWu4S47S3HC9QOzhsuV4CP%2Bm%2FrfbhGXy3sF9wDIMLOFXP1qoJBeassAYmye%2Bw3kkqW%2BxpnTlOdwLQyw9uHrE2mLBgwMLZhYKpWNnYyWxcYNIpyONI6x7OZfO7r7amSNnwoaeKilx8gVi7pb5WzXzVFNM8V76MrG3P9sdAPNMBNuadegWt6NUFo2Lpd1Xlpd78JZO%2BlJnDyhrGMLdhSKxQgHL38KhpBPZTgZDZnyFGAjSVtpxsH%2Bi7Y9%2BFpEP3XuRt35CJpPpGWLw51jvnupsi2lh11JqQXCJ9bwXOMBVDvqBCensIa8emYJSIaRUpuOxVRa8Ri%2Fh5j5l4VujBiIEtO%2FdBdsLAeid%2FthyreeyJl45092LrGGjO408TL7DKp9ZhCZ3Ic76T0yBilotqXCrVWVo077sJWtN8PsX30GJZPDVt8NJGkNB56xMVzX4UUASTokXMyjkVP0bkgQiWdAE%2B2GtR0BliZTAkvbFqhcFbC3giYskN9L2nvfFzUL6CrXAyML25q8cGOqUB0Zfu%2FXlcFjYad1QB%2F1TI0%2FGCru26ScmOm%2FCbeBA6K2M11W7mIMXJ%2FOf4Vgu3asnUe8ultxH0mlqxmSd4lGPtoaBLyiS5sWI2okwInzwcNKrWmjA6UCbOmbIAR3NJGAEyofu8bvnCOWBQ%2BGxAz32dTZNiFzLaHFcG5D0%2FQeklfAmNQXvANzmhztdxC4fSMSCbi5zpNPOj%2F5VloMqDQs6kBT7FmL7V&X-Amz-Signature=c9226e5e199c2207224cbf985c164648dd2340cf9ac01f5342c9422c3cea18a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZD657PI%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGweZ4SFehMBfyTOHRW4Q4MzH87arP6dKq5ZAjweL%2FPJAiEAnjZPeW0osQyPN3l6Mo6FWlt4X9%2FwgrXjXan6NkZOHEEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMVEHZrHt%2BqYGWMlzircA8g3kTC1L4gpDZW9lMcOcpqbeiAxBulW8BOUcD7Ruwu47rRGbnmj4GDuRy72xjscrcAT%2BgHPgEs7zfYKDkFrZAN2k4hHld8cjG6JKFQhNiXt%2FLFE7SC4mWUveHCaWu4S47S3HC9QOzhsuV4CP%2Bm%2FrfbhGXy3sF9wDIMLOFXP1qoJBeassAYmye%2Bw3kkqW%2BxpnTlOdwLQyw9uHrE2mLBgwMLZhYKpWNnYyWxcYNIpyONI6x7OZfO7r7amSNnwoaeKilx8gVi7pb5WzXzVFNM8V76MrG3P9sdAPNMBNuadegWt6NUFo2Lpd1Xlpd78JZO%2BlJnDyhrGMLdhSKxQgHL38KhpBPZTgZDZnyFGAjSVtpxsH%2Bi7Y9%2BFpEP3XuRt35CJpPpGWLw51jvnupsi2lh11JqQXCJ9bwXOMBVDvqBCensIa8emYJSIaRUpuOxVRa8Ri%2Fh5j5l4VujBiIEtO%2FdBdsLAeid%2FthyreeyJl45092LrGGjO408TL7DKp9ZhCZ3Ic76T0yBilotqXCrVWVo077sJWtN8PsX30GJZPDVt8NJGkNB56xMVzX4UUASTokXMyjkVP0bkgQiWdAE%2B2GtR0BliZTAkvbFqhcFbC3giYskN9L2nvfFzUL6CrXAyML25q8cGOqUB0Zfu%2FXlcFjYad1QB%2F1TI0%2FGCru26ScmOm%2FCbeBA6K2M11W7mIMXJ%2FOf4Vgu3asnUe8ultxH0mlqxmSd4lGPtoaBLyiS5sWI2okwInzwcNKrWmjA6UCbOmbIAR3NJGAEyofu8bvnCOWBQ%2BGxAz32dTZNiFzLaHFcG5D0%2FQeklfAmNQXvANzmhztdxC4fSMSCbi5zpNPOj%2F5VloMqDQs6kBT7FmL7V&X-Amz-Signature=539ce33c8085dd2af41814e05e7b187f0d7f4c6779c9dd92a15995bd80fd909b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZD657PI%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGweZ4SFehMBfyTOHRW4Q4MzH87arP6dKq5ZAjweL%2FPJAiEAnjZPeW0osQyPN3l6Mo6FWlt4X9%2FwgrXjXan6NkZOHEEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMVEHZrHt%2BqYGWMlzircA8g3kTC1L4gpDZW9lMcOcpqbeiAxBulW8BOUcD7Ruwu47rRGbnmj4GDuRy72xjscrcAT%2BgHPgEs7zfYKDkFrZAN2k4hHld8cjG6JKFQhNiXt%2FLFE7SC4mWUveHCaWu4S47S3HC9QOzhsuV4CP%2Bm%2FrfbhGXy3sF9wDIMLOFXP1qoJBeassAYmye%2Bw3kkqW%2BxpnTlOdwLQyw9uHrE2mLBgwMLZhYKpWNnYyWxcYNIpyONI6x7OZfO7r7amSNnwoaeKilx8gVi7pb5WzXzVFNM8V76MrG3P9sdAPNMBNuadegWt6NUFo2Lpd1Xlpd78JZO%2BlJnDyhrGMLdhSKxQgHL38KhpBPZTgZDZnyFGAjSVtpxsH%2Bi7Y9%2BFpEP3XuRt35CJpPpGWLw51jvnupsi2lh11JqQXCJ9bwXOMBVDvqBCensIa8emYJSIaRUpuOxVRa8Ri%2Fh5j5l4VujBiIEtO%2FdBdsLAeid%2FthyreeyJl45092LrGGjO408TL7DKp9ZhCZ3Ic76T0yBilotqXCrVWVo077sJWtN8PsX30GJZPDVt8NJGkNB56xMVzX4UUASTokXMyjkVP0bkgQiWdAE%2B2GtR0BliZTAkvbFqhcFbC3giYskN9L2nvfFzUL6CrXAyML25q8cGOqUB0Zfu%2FXlcFjYad1QB%2F1TI0%2FGCru26ScmOm%2FCbeBA6K2M11W7mIMXJ%2FOf4Vgu3asnUe8ultxH0mlqxmSd4lGPtoaBLyiS5sWI2okwInzwcNKrWmjA6UCbOmbIAR3NJGAEyofu8bvnCOWBQ%2BGxAz32dTZNiFzLaHFcG5D0%2FQeklfAmNQXvANzmhztdxC4fSMSCbi5zpNPOj%2F5VloMqDQs6kBT7FmL7V&X-Amz-Signature=502ba1305b853dbd1a9a198da54e24c5482339f4cfe1ebbb1e073617bfa5fe78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZD657PI%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGweZ4SFehMBfyTOHRW4Q4MzH87arP6dKq5ZAjweL%2FPJAiEAnjZPeW0osQyPN3l6Mo6FWlt4X9%2FwgrXjXan6NkZOHEEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMVEHZrHt%2BqYGWMlzircA8g3kTC1L4gpDZW9lMcOcpqbeiAxBulW8BOUcD7Ruwu47rRGbnmj4GDuRy72xjscrcAT%2BgHPgEs7zfYKDkFrZAN2k4hHld8cjG6JKFQhNiXt%2FLFE7SC4mWUveHCaWu4S47S3HC9QOzhsuV4CP%2Bm%2FrfbhGXy3sF9wDIMLOFXP1qoJBeassAYmye%2Bw3kkqW%2BxpnTlOdwLQyw9uHrE2mLBgwMLZhYKpWNnYyWxcYNIpyONI6x7OZfO7r7amSNnwoaeKilx8gVi7pb5WzXzVFNM8V76MrG3P9sdAPNMBNuadegWt6NUFo2Lpd1Xlpd78JZO%2BlJnDyhrGMLdhSKxQgHL38KhpBPZTgZDZnyFGAjSVtpxsH%2Bi7Y9%2BFpEP3XuRt35CJpPpGWLw51jvnupsi2lh11JqQXCJ9bwXOMBVDvqBCensIa8emYJSIaRUpuOxVRa8Ri%2Fh5j5l4VujBiIEtO%2FdBdsLAeid%2FthyreeyJl45092LrGGjO408TL7DKp9ZhCZ3Ic76T0yBilotqXCrVWVo077sJWtN8PsX30GJZPDVt8NJGkNB56xMVzX4UUASTokXMyjkVP0bkgQiWdAE%2B2GtR0BliZTAkvbFqhcFbC3giYskN9L2nvfFzUL6CrXAyML25q8cGOqUB0Zfu%2FXlcFjYad1QB%2F1TI0%2FGCru26ScmOm%2FCbeBA6K2M11W7mIMXJ%2FOf4Vgu3asnUe8ultxH0mlqxmSd4lGPtoaBLyiS5sWI2okwInzwcNKrWmjA6UCbOmbIAR3NJGAEyofu8bvnCOWBQ%2BGxAz32dTZNiFzLaHFcG5D0%2FQeklfAmNQXvANzmhztdxC4fSMSCbi5zpNPOj%2F5VloMqDQs6kBT7FmL7V&X-Amz-Signature=280ffdfd0af598a7444ea9b3c570d8cfd17ba99702b3b281fd226396f695765f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZD657PI%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGweZ4SFehMBfyTOHRW4Q4MzH87arP6dKq5ZAjweL%2FPJAiEAnjZPeW0osQyPN3l6Mo6FWlt4X9%2FwgrXjXan6NkZOHEEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMVEHZrHt%2BqYGWMlzircA8g3kTC1L4gpDZW9lMcOcpqbeiAxBulW8BOUcD7Ruwu47rRGbnmj4GDuRy72xjscrcAT%2BgHPgEs7zfYKDkFrZAN2k4hHld8cjG6JKFQhNiXt%2FLFE7SC4mWUveHCaWu4S47S3HC9QOzhsuV4CP%2Bm%2FrfbhGXy3sF9wDIMLOFXP1qoJBeassAYmye%2Bw3kkqW%2BxpnTlOdwLQyw9uHrE2mLBgwMLZhYKpWNnYyWxcYNIpyONI6x7OZfO7r7amSNnwoaeKilx8gVi7pb5WzXzVFNM8V76MrG3P9sdAPNMBNuadegWt6NUFo2Lpd1Xlpd78JZO%2BlJnDyhrGMLdhSKxQgHL38KhpBPZTgZDZnyFGAjSVtpxsH%2Bi7Y9%2BFpEP3XuRt35CJpPpGWLw51jvnupsi2lh11JqQXCJ9bwXOMBVDvqBCensIa8emYJSIaRUpuOxVRa8Ri%2Fh5j5l4VujBiIEtO%2FdBdsLAeid%2FthyreeyJl45092LrGGjO408TL7DKp9ZhCZ3Ic76T0yBilotqXCrVWVo077sJWtN8PsX30GJZPDVt8NJGkNB56xMVzX4UUASTokXMyjkVP0bkgQiWdAE%2B2GtR0BliZTAkvbFqhcFbC3giYskN9L2nvfFzUL6CrXAyML25q8cGOqUB0Zfu%2FXlcFjYad1QB%2F1TI0%2FGCru26ScmOm%2FCbeBA6K2M11W7mIMXJ%2FOf4Vgu3asnUe8ultxH0mlqxmSd4lGPtoaBLyiS5sWI2okwInzwcNKrWmjA6UCbOmbIAR3NJGAEyofu8bvnCOWBQ%2BGxAz32dTZNiFzLaHFcG5D0%2FQeklfAmNQXvANzmhztdxC4fSMSCbi5zpNPOj%2F5VloMqDQs6kBT7FmL7V&X-Amz-Signature=4926ed3867c831f391890c202835b4b984ee9c342aa46100f7622683f908cc79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZD657PI%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGweZ4SFehMBfyTOHRW4Q4MzH87arP6dKq5ZAjweL%2FPJAiEAnjZPeW0osQyPN3l6Mo6FWlt4X9%2FwgrXjXan6NkZOHEEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMVEHZrHt%2BqYGWMlzircA8g3kTC1L4gpDZW9lMcOcpqbeiAxBulW8BOUcD7Ruwu47rRGbnmj4GDuRy72xjscrcAT%2BgHPgEs7zfYKDkFrZAN2k4hHld8cjG6JKFQhNiXt%2FLFE7SC4mWUveHCaWu4S47S3HC9QOzhsuV4CP%2Bm%2FrfbhGXy3sF9wDIMLOFXP1qoJBeassAYmye%2Bw3kkqW%2BxpnTlOdwLQyw9uHrE2mLBgwMLZhYKpWNnYyWxcYNIpyONI6x7OZfO7r7amSNnwoaeKilx8gVi7pb5WzXzVFNM8V76MrG3P9sdAPNMBNuadegWt6NUFo2Lpd1Xlpd78JZO%2BlJnDyhrGMLdhSKxQgHL38KhpBPZTgZDZnyFGAjSVtpxsH%2Bi7Y9%2BFpEP3XuRt35CJpPpGWLw51jvnupsi2lh11JqQXCJ9bwXOMBVDvqBCensIa8emYJSIaRUpuOxVRa8Ri%2Fh5j5l4VujBiIEtO%2FdBdsLAeid%2FthyreeyJl45092LrGGjO408TL7DKp9ZhCZ3Ic76T0yBilotqXCrVWVo077sJWtN8PsX30GJZPDVt8NJGkNB56xMVzX4UUASTokXMyjkVP0bkgQiWdAE%2B2GtR0BliZTAkvbFqhcFbC3giYskN9L2nvfFzUL6CrXAyML25q8cGOqUB0Zfu%2FXlcFjYad1QB%2F1TI0%2FGCru26ScmOm%2FCbeBA6K2M11W7mIMXJ%2FOf4Vgu3asnUe8ultxH0mlqxmSd4lGPtoaBLyiS5sWI2okwInzwcNKrWmjA6UCbOmbIAR3NJGAEyofu8bvnCOWBQ%2BGxAz32dTZNiFzLaHFcG5D0%2FQeklfAmNQXvANzmhztdxC4fSMSCbi5zpNPOj%2F5VloMqDQs6kBT7FmL7V&X-Amz-Signature=5aad2c299cd19703311a547ffae7169b54482abd17efc87fa86399ecdcdde2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
