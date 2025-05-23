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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDN3MAK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBs3ypWTz5d8GYyZX841SH9yY7CrTOrBM%2B1i%2BRa9JjpNAiEAp4I3TYqgX3esAWq60ahhanl6ItrxaFcEvd6VTFroRz4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmqyAwGttrCts59cSrcA3SwfFxBpZMO2JLNJgPu2HVezu%2B5U%2F%2Fs0tjHAyNq5EuBj0RFTcG4PIRbrwlsAktwIpGOcfATypyK74kZ79ZGjCiRg%2BoNonSsGdycKvOTEWVTZp3ghORILdFg4sqnJPUvFK4t57fQbMnUXK5GsIOwl9gCANGEbmSwpDX8qAvmKiJUtdwejuO8QzBpWru9yFr1PD2K9cvrD8B8IBFjVdOXJwNh%2FgpD%2FdrNFaViaHpCBqMbwHbrW6OduM3eeUHiXqD%2FnxH%2Bmb4HhW3PezKhbqWflyfq70TySD5bnPabjbUc10E8rFCxUkykBjuIZIJ1IEEqP971xNjRWQLbqJMPMyRjNMwRkd5VsQERZbHcfveo6NGsyG8b%2BqQ4U1RFnOrWPQd%2FmhiZh0eKdpOMl2lNnbDihrlnfFbKLjeooEj3VPPEfxu08PBL1NEQK9bP6cJxJTcXRxk2MUtokOaqvgJpkGIvdYIWzUdQrJAkez%2FUx30pQkeos9nmQwgo7fPbQ5%2FX05PbxpZT2jN%2FZnd1wXEagr%2Bdx5G%2BEZxmp0J%2F1y9wXckDTI7N83pkM3icr%2Ble9Lx02XFmY0%2B4DFQHdfWxLkNNsxlNqNtLPeMLAZjOTDHVrEbPJJ29HQouJ2J%2FVjpJJ3C%2FMLXEwcEGOqUB4nCHx13vCkvMqLhrFomSXAhibnCIES06EoKEsAkJ8aQnn3cfisP9jLMHMTnNpvZtlw%2BCnHvO2QPqjZL9Of9bRyEUVZONMOeVNPMTi042fAFXqGqkJsghZnK%2FC%2BBR7kZXSWwaIcD0QSDaKoe5sH9M%2BJz%2BBGjOhPSid9%2B%2B6itNO9PbK923uy5xj94x2FHnPnY1vDlMRdOgxhvt4NebtwdTxr8n%2B0qB&X-Amz-Signature=415371845a84913fa7ad992e448ebaec175dec63a68d0fcb1c8fef6523bbb077&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDN3MAK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBs3ypWTz5d8GYyZX841SH9yY7CrTOrBM%2B1i%2BRa9JjpNAiEAp4I3TYqgX3esAWq60ahhanl6ItrxaFcEvd6VTFroRz4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmqyAwGttrCts59cSrcA3SwfFxBpZMO2JLNJgPu2HVezu%2B5U%2F%2Fs0tjHAyNq5EuBj0RFTcG4PIRbrwlsAktwIpGOcfATypyK74kZ79ZGjCiRg%2BoNonSsGdycKvOTEWVTZp3ghORILdFg4sqnJPUvFK4t57fQbMnUXK5GsIOwl9gCANGEbmSwpDX8qAvmKiJUtdwejuO8QzBpWru9yFr1PD2K9cvrD8B8IBFjVdOXJwNh%2FgpD%2FdrNFaViaHpCBqMbwHbrW6OduM3eeUHiXqD%2FnxH%2Bmb4HhW3PezKhbqWflyfq70TySD5bnPabjbUc10E8rFCxUkykBjuIZIJ1IEEqP971xNjRWQLbqJMPMyRjNMwRkd5VsQERZbHcfveo6NGsyG8b%2BqQ4U1RFnOrWPQd%2FmhiZh0eKdpOMl2lNnbDihrlnfFbKLjeooEj3VPPEfxu08PBL1NEQK9bP6cJxJTcXRxk2MUtokOaqvgJpkGIvdYIWzUdQrJAkez%2FUx30pQkeos9nmQwgo7fPbQ5%2FX05PbxpZT2jN%2FZnd1wXEagr%2Bdx5G%2BEZxmp0J%2F1y9wXckDTI7N83pkM3icr%2Ble9Lx02XFmY0%2B4DFQHdfWxLkNNsxlNqNtLPeMLAZjOTDHVrEbPJJ29HQouJ2J%2FVjpJJ3C%2FMLXEwcEGOqUB4nCHx13vCkvMqLhrFomSXAhibnCIES06EoKEsAkJ8aQnn3cfisP9jLMHMTnNpvZtlw%2BCnHvO2QPqjZL9Of9bRyEUVZONMOeVNPMTi042fAFXqGqkJsghZnK%2FC%2BBR7kZXSWwaIcD0QSDaKoe5sH9M%2BJz%2BBGjOhPSid9%2B%2B6itNO9PbK923uy5xj94x2FHnPnY1vDlMRdOgxhvt4NebtwdTxr8n%2B0qB&X-Amz-Signature=e349283528bf2f8fffed678b9d7fb6c06121754b405b4f58a4af15c80885f07c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDN3MAK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBs3ypWTz5d8GYyZX841SH9yY7CrTOrBM%2B1i%2BRa9JjpNAiEAp4I3TYqgX3esAWq60ahhanl6ItrxaFcEvd6VTFroRz4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmqyAwGttrCts59cSrcA3SwfFxBpZMO2JLNJgPu2HVezu%2B5U%2F%2Fs0tjHAyNq5EuBj0RFTcG4PIRbrwlsAktwIpGOcfATypyK74kZ79ZGjCiRg%2BoNonSsGdycKvOTEWVTZp3ghORILdFg4sqnJPUvFK4t57fQbMnUXK5GsIOwl9gCANGEbmSwpDX8qAvmKiJUtdwejuO8QzBpWru9yFr1PD2K9cvrD8B8IBFjVdOXJwNh%2FgpD%2FdrNFaViaHpCBqMbwHbrW6OduM3eeUHiXqD%2FnxH%2Bmb4HhW3PezKhbqWflyfq70TySD5bnPabjbUc10E8rFCxUkykBjuIZIJ1IEEqP971xNjRWQLbqJMPMyRjNMwRkd5VsQERZbHcfveo6NGsyG8b%2BqQ4U1RFnOrWPQd%2FmhiZh0eKdpOMl2lNnbDihrlnfFbKLjeooEj3VPPEfxu08PBL1NEQK9bP6cJxJTcXRxk2MUtokOaqvgJpkGIvdYIWzUdQrJAkez%2FUx30pQkeos9nmQwgo7fPbQ5%2FX05PbxpZT2jN%2FZnd1wXEagr%2Bdx5G%2BEZxmp0J%2F1y9wXckDTI7N83pkM3icr%2Ble9Lx02XFmY0%2B4DFQHdfWxLkNNsxlNqNtLPeMLAZjOTDHVrEbPJJ29HQouJ2J%2FVjpJJ3C%2FMLXEwcEGOqUB4nCHx13vCkvMqLhrFomSXAhibnCIES06EoKEsAkJ8aQnn3cfisP9jLMHMTnNpvZtlw%2BCnHvO2QPqjZL9Of9bRyEUVZONMOeVNPMTi042fAFXqGqkJsghZnK%2FC%2BBR7kZXSWwaIcD0QSDaKoe5sH9M%2BJz%2BBGjOhPSid9%2B%2B6itNO9PbK923uy5xj94x2FHnPnY1vDlMRdOgxhvt4NebtwdTxr8n%2B0qB&X-Amz-Signature=e52511df663740f51f695d15773242ade06075f0999885e6ef8d36a5799fe93a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDN3MAK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBs3ypWTz5d8GYyZX841SH9yY7CrTOrBM%2B1i%2BRa9JjpNAiEAp4I3TYqgX3esAWq60ahhanl6ItrxaFcEvd6VTFroRz4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmqyAwGttrCts59cSrcA3SwfFxBpZMO2JLNJgPu2HVezu%2B5U%2F%2Fs0tjHAyNq5EuBj0RFTcG4PIRbrwlsAktwIpGOcfATypyK74kZ79ZGjCiRg%2BoNonSsGdycKvOTEWVTZp3ghORILdFg4sqnJPUvFK4t57fQbMnUXK5GsIOwl9gCANGEbmSwpDX8qAvmKiJUtdwejuO8QzBpWru9yFr1PD2K9cvrD8B8IBFjVdOXJwNh%2FgpD%2FdrNFaViaHpCBqMbwHbrW6OduM3eeUHiXqD%2FnxH%2Bmb4HhW3PezKhbqWflyfq70TySD5bnPabjbUc10E8rFCxUkykBjuIZIJ1IEEqP971xNjRWQLbqJMPMyRjNMwRkd5VsQERZbHcfveo6NGsyG8b%2BqQ4U1RFnOrWPQd%2FmhiZh0eKdpOMl2lNnbDihrlnfFbKLjeooEj3VPPEfxu08PBL1NEQK9bP6cJxJTcXRxk2MUtokOaqvgJpkGIvdYIWzUdQrJAkez%2FUx30pQkeos9nmQwgo7fPbQ5%2FX05PbxpZT2jN%2FZnd1wXEagr%2Bdx5G%2BEZxmp0J%2F1y9wXckDTI7N83pkM3icr%2Ble9Lx02XFmY0%2B4DFQHdfWxLkNNsxlNqNtLPeMLAZjOTDHVrEbPJJ29HQouJ2J%2FVjpJJ3C%2FMLXEwcEGOqUB4nCHx13vCkvMqLhrFomSXAhibnCIES06EoKEsAkJ8aQnn3cfisP9jLMHMTnNpvZtlw%2BCnHvO2QPqjZL9Of9bRyEUVZONMOeVNPMTi042fAFXqGqkJsghZnK%2FC%2BBR7kZXSWwaIcD0QSDaKoe5sH9M%2BJz%2BBGjOhPSid9%2B%2B6itNO9PbK923uy5xj94x2FHnPnY1vDlMRdOgxhvt4NebtwdTxr8n%2B0qB&X-Amz-Signature=f915594fe6f8ecc487696457a00ef32cdaf4ae6eaaa40abae9a9582bdda9c981&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDN3MAK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBs3ypWTz5d8GYyZX841SH9yY7CrTOrBM%2B1i%2BRa9JjpNAiEAp4I3TYqgX3esAWq60ahhanl6ItrxaFcEvd6VTFroRz4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmqyAwGttrCts59cSrcA3SwfFxBpZMO2JLNJgPu2HVezu%2B5U%2F%2Fs0tjHAyNq5EuBj0RFTcG4PIRbrwlsAktwIpGOcfATypyK74kZ79ZGjCiRg%2BoNonSsGdycKvOTEWVTZp3ghORILdFg4sqnJPUvFK4t57fQbMnUXK5GsIOwl9gCANGEbmSwpDX8qAvmKiJUtdwejuO8QzBpWru9yFr1PD2K9cvrD8B8IBFjVdOXJwNh%2FgpD%2FdrNFaViaHpCBqMbwHbrW6OduM3eeUHiXqD%2FnxH%2Bmb4HhW3PezKhbqWflyfq70TySD5bnPabjbUc10E8rFCxUkykBjuIZIJ1IEEqP971xNjRWQLbqJMPMyRjNMwRkd5VsQERZbHcfveo6NGsyG8b%2BqQ4U1RFnOrWPQd%2FmhiZh0eKdpOMl2lNnbDihrlnfFbKLjeooEj3VPPEfxu08PBL1NEQK9bP6cJxJTcXRxk2MUtokOaqvgJpkGIvdYIWzUdQrJAkez%2FUx30pQkeos9nmQwgo7fPbQ5%2FX05PbxpZT2jN%2FZnd1wXEagr%2Bdx5G%2BEZxmp0J%2F1y9wXckDTI7N83pkM3icr%2Ble9Lx02XFmY0%2B4DFQHdfWxLkNNsxlNqNtLPeMLAZjOTDHVrEbPJJ29HQouJ2J%2FVjpJJ3C%2FMLXEwcEGOqUB4nCHx13vCkvMqLhrFomSXAhibnCIES06EoKEsAkJ8aQnn3cfisP9jLMHMTnNpvZtlw%2BCnHvO2QPqjZL9Of9bRyEUVZONMOeVNPMTi042fAFXqGqkJsghZnK%2FC%2BBR7kZXSWwaIcD0QSDaKoe5sH9M%2BJz%2BBGjOhPSid9%2B%2B6itNO9PbK923uy5xj94x2FHnPnY1vDlMRdOgxhvt4NebtwdTxr8n%2B0qB&X-Amz-Signature=910f838f8c2b19e1103d155ef685cc1ea280a88746ac944ed7bcefbdeb4e9c40&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDN3MAK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBs3ypWTz5d8GYyZX841SH9yY7CrTOrBM%2B1i%2BRa9JjpNAiEAp4I3TYqgX3esAWq60ahhanl6ItrxaFcEvd6VTFroRz4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmqyAwGttrCts59cSrcA3SwfFxBpZMO2JLNJgPu2HVezu%2B5U%2F%2Fs0tjHAyNq5EuBj0RFTcG4PIRbrwlsAktwIpGOcfATypyK74kZ79ZGjCiRg%2BoNonSsGdycKvOTEWVTZp3ghORILdFg4sqnJPUvFK4t57fQbMnUXK5GsIOwl9gCANGEbmSwpDX8qAvmKiJUtdwejuO8QzBpWru9yFr1PD2K9cvrD8B8IBFjVdOXJwNh%2FgpD%2FdrNFaViaHpCBqMbwHbrW6OduM3eeUHiXqD%2FnxH%2Bmb4HhW3PezKhbqWflyfq70TySD5bnPabjbUc10E8rFCxUkykBjuIZIJ1IEEqP971xNjRWQLbqJMPMyRjNMwRkd5VsQERZbHcfveo6NGsyG8b%2BqQ4U1RFnOrWPQd%2FmhiZh0eKdpOMl2lNnbDihrlnfFbKLjeooEj3VPPEfxu08PBL1NEQK9bP6cJxJTcXRxk2MUtokOaqvgJpkGIvdYIWzUdQrJAkez%2FUx30pQkeos9nmQwgo7fPbQ5%2FX05PbxpZT2jN%2FZnd1wXEagr%2Bdx5G%2BEZxmp0J%2F1y9wXckDTI7N83pkM3icr%2Ble9Lx02XFmY0%2B4DFQHdfWxLkNNsxlNqNtLPeMLAZjOTDHVrEbPJJ29HQouJ2J%2FVjpJJ3C%2FMLXEwcEGOqUB4nCHx13vCkvMqLhrFomSXAhibnCIES06EoKEsAkJ8aQnn3cfisP9jLMHMTnNpvZtlw%2BCnHvO2QPqjZL9Of9bRyEUVZONMOeVNPMTi042fAFXqGqkJsghZnK%2FC%2BBR7kZXSWwaIcD0QSDaKoe5sH9M%2BJz%2BBGjOhPSid9%2B%2B6itNO9PbK923uy5xj94x2FHnPnY1vDlMRdOgxhvt4NebtwdTxr8n%2B0qB&X-Amz-Signature=3a556e852fde57bb1a50f1997fa16da9a85dd46716563ea1334264b617f13e97&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDN3MAK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBs3ypWTz5d8GYyZX841SH9yY7CrTOrBM%2B1i%2BRa9JjpNAiEAp4I3TYqgX3esAWq60ahhanl6ItrxaFcEvd6VTFroRz4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmqyAwGttrCts59cSrcA3SwfFxBpZMO2JLNJgPu2HVezu%2B5U%2F%2Fs0tjHAyNq5EuBj0RFTcG4PIRbrwlsAktwIpGOcfATypyK74kZ79ZGjCiRg%2BoNonSsGdycKvOTEWVTZp3ghORILdFg4sqnJPUvFK4t57fQbMnUXK5GsIOwl9gCANGEbmSwpDX8qAvmKiJUtdwejuO8QzBpWru9yFr1PD2K9cvrD8B8IBFjVdOXJwNh%2FgpD%2FdrNFaViaHpCBqMbwHbrW6OduM3eeUHiXqD%2FnxH%2Bmb4HhW3PezKhbqWflyfq70TySD5bnPabjbUc10E8rFCxUkykBjuIZIJ1IEEqP971xNjRWQLbqJMPMyRjNMwRkd5VsQERZbHcfveo6NGsyG8b%2BqQ4U1RFnOrWPQd%2FmhiZh0eKdpOMl2lNnbDihrlnfFbKLjeooEj3VPPEfxu08PBL1NEQK9bP6cJxJTcXRxk2MUtokOaqvgJpkGIvdYIWzUdQrJAkez%2FUx30pQkeos9nmQwgo7fPbQ5%2FX05PbxpZT2jN%2FZnd1wXEagr%2Bdx5G%2BEZxmp0J%2F1y9wXckDTI7N83pkM3icr%2Ble9Lx02XFmY0%2B4DFQHdfWxLkNNsxlNqNtLPeMLAZjOTDHVrEbPJJ29HQouJ2J%2FVjpJJ3C%2FMLXEwcEGOqUB4nCHx13vCkvMqLhrFomSXAhibnCIES06EoKEsAkJ8aQnn3cfisP9jLMHMTnNpvZtlw%2BCnHvO2QPqjZL9Of9bRyEUVZONMOeVNPMTi042fAFXqGqkJsghZnK%2FC%2BBR7kZXSWwaIcD0QSDaKoe5sH9M%2BJz%2BBGjOhPSid9%2B%2B6itNO9PbK923uy5xj94x2FHnPnY1vDlMRdOgxhvt4NebtwdTxr8n%2B0qB&X-Amz-Signature=88fcdbf4d33a3c18afa7c2c780aebdb4fd196e7f2f7bede899263e32d49c2c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
