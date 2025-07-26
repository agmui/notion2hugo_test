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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXJWREK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG0%2FLlgtePG%2F3KO4Y9%2BI%2BW%2BSQzQ3%2FPSdpXsdv1sHThdOAiAGyJFA77%2FkLEoQguCN3Es%2FD0aYOkMOgkMAKG9ipFAYiCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMSsuOkxHdll928v5QKtwDz%2Fj11KYT8VUsyYiS1huwNg3BI%2F%2Bwf9Y4nM04XfXSdPPyCHRm9d5ee5oMWFY5W9Mo2yp5sQpLvez68DLqkO2rd91OYbYhELKucbYRmoGF3Fnsm6VFvhZDiWIhDR8uq3NsxTZxXyj%2FSHoo0dbx2Oe4pXqF%2F2joI3%2FaeqnARx9G0YxPKg%2FOp8GK9R5UW6hIqPmWsj8YZMJpnEWwJ6Xb7ZdkkB8J4Byb5MwFSLu%2F9PM1bFdg9BtjxW67JwZ3NGt2IDKiryAH40rwTEv3SdG90eUOzIgcP7Ezy5pwCu%2BTk%2B16lA7AwrYiqO9kT9ySpn21C4rmGzBAVl6ioTWpXliPvxZv5Wh0lHZENIIKPN7ieNVuxkPP2MI4g8yydZs%2BZRfPOr0rDRnIyH3EdYp118Quycf%2FRSWIzUg%2FOQs3Mt3%2F8enC0cTX0sW2nB1VPFNT%2FdF7lMbQPB7KeN%2BjQTsjL3hJh0Sv04qrFIJz%2BXL6lntkqJmb29Pxw7lmGuGO0JCjC1fCf48y%2Bw0yVlH9GRTZoJ%2F0VqbFRjHn3hndS44PEPbXxWYMu%2FZEBzUMHFbhu45FaVKFi%2BOB%2BmVZ0gsEr%2FSiHWxk5VSzu%2BZbchszWTNmxTkH%2FDPSlwkHN4fNRRPly9PtVl0w99CPxAY6pgEyJwsE6F9H5mlYhDOXPB%2B4NlDQ7Xta6gtpkMxFnOlophAlO7zTMSZL9rOD%2BY3n%2B7W310wJB%2BPW6t8%2BimocAbp3YjOi6pI5u8nljvbd53P66KfC%2ByCRmobetu47KQLnKTuPEI5dcmRw8okS0%2F7NeoQOTyMsvUlHuYOHkNY0LOfBYydfUB%2BPZGpuHFG0S5Vc2%2BoXwUDrcveWTZ7lEbov6dk%2FvzlSpVnY&X-Amz-Signature=1cac18f08e1ebd787f79aeb2cde6b910308047c679e6f63fb9c1babbbf2949f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXJWREK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG0%2FLlgtePG%2F3KO4Y9%2BI%2BW%2BSQzQ3%2FPSdpXsdv1sHThdOAiAGyJFA77%2FkLEoQguCN3Es%2FD0aYOkMOgkMAKG9ipFAYiCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMSsuOkxHdll928v5QKtwDz%2Fj11KYT8VUsyYiS1huwNg3BI%2F%2Bwf9Y4nM04XfXSdPPyCHRm9d5ee5oMWFY5W9Mo2yp5sQpLvez68DLqkO2rd91OYbYhELKucbYRmoGF3Fnsm6VFvhZDiWIhDR8uq3NsxTZxXyj%2FSHoo0dbx2Oe4pXqF%2F2joI3%2FaeqnARx9G0YxPKg%2FOp8GK9R5UW6hIqPmWsj8YZMJpnEWwJ6Xb7ZdkkB8J4Byb5MwFSLu%2F9PM1bFdg9BtjxW67JwZ3NGt2IDKiryAH40rwTEv3SdG90eUOzIgcP7Ezy5pwCu%2BTk%2B16lA7AwrYiqO9kT9ySpn21C4rmGzBAVl6ioTWpXliPvxZv5Wh0lHZENIIKPN7ieNVuxkPP2MI4g8yydZs%2BZRfPOr0rDRnIyH3EdYp118Quycf%2FRSWIzUg%2FOQs3Mt3%2F8enC0cTX0sW2nB1VPFNT%2FdF7lMbQPB7KeN%2BjQTsjL3hJh0Sv04qrFIJz%2BXL6lntkqJmb29Pxw7lmGuGO0JCjC1fCf48y%2Bw0yVlH9GRTZoJ%2F0VqbFRjHn3hndS44PEPbXxWYMu%2FZEBzUMHFbhu45FaVKFi%2BOB%2BmVZ0gsEr%2FSiHWxk5VSzu%2BZbchszWTNmxTkH%2FDPSlwkHN4fNRRPly9PtVl0w99CPxAY6pgEyJwsE6F9H5mlYhDOXPB%2B4NlDQ7Xta6gtpkMxFnOlophAlO7zTMSZL9rOD%2BY3n%2B7W310wJB%2BPW6t8%2BimocAbp3YjOi6pI5u8nljvbd53P66KfC%2ByCRmobetu47KQLnKTuPEI5dcmRw8okS0%2F7NeoQOTyMsvUlHuYOHkNY0LOfBYydfUB%2BPZGpuHFG0S5Vc2%2BoXwUDrcveWTZ7lEbov6dk%2FvzlSpVnY&X-Amz-Signature=015c0741b4b40f5d12010a406c810cb652272ceeef0cfe2487ebffc3845fc8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXJWREK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG0%2FLlgtePG%2F3KO4Y9%2BI%2BW%2BSQzQ3%2FPSdpXsdv1sHThdOAiAGyJFA77%2FkLEoQguCN3Es%2FD0aYOkMOgkMAKG9ipFAYiCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMSsuOkxHdll928v5QKtwDz%2Fj11KYT8VUsyYiS1huwNg3BI%2F%2Bwf9Y4nM04XfXSdPPyCHRm9d5ee5oMWFY5W9Mo2yp5sQpLvez68DLqkO2rd91OYbYhELKucbYRmoGF3Fnsm6VFvhZDiWIhDR8uq3NsxTZxXyj%2FSHoo0dbx2Oe4pXqF%2F2joI3%2FaeqnARx9G0YxPKg%2FOp8GK9R5UW6hIqPmWsj8YZMJpnEWwJ6Xb7ZdkkB8J4Byb5MwFSLu%2F9PM1bFdg9BtjxW67JwZ3NGt2IDKiryAH40rwTEv3SdG90eUOzIgcP7Ezy5pwCu%2BTk%2B16lA7AwrYiqO9kT9ySpn21C4rmGzBAVl6ioTWpXliPvxZv5Wh0lHZENIIKPN7ieNVuxkPP2MI4g8yydZs%2BZRfPOr0rDRnIyH3EdYp118Quycf%2FRSWIzUg%2FOQs3Mt3%2F8enC0cTX0sW2nB1VPFNT%2FdF7lMbQPB7KeN%2BjQTsjL3hJh0Sv04qrFIJz%2BXL6lntkqJmb29Pxw7lmGuGO0JCjC1fCf48y%2Bw0yVlH9GRTZoJ%2F0VqbFRjHn3hndS44PEPbXxWYMu%2FZEBzUMHFbhu45FaVKFi%2BOB%2BmVZ0gsEr%2FSiHWxk5VSzu%2BZbchszWTNmxTkH%2FDPSlwkHN4fNRRPly9PtVl0w99CPxAY6pgEyJwsE6F9H5mlYhDOXPB%2B4NlDQ7Xta6gtpkMxFnOlophAlO7zTMSZL9rOD%2BY3n%2B7W310wJB%2BPW6t8%2BimocAbp3YjOi6pI5u8nljvbd53P66KfC%2ByCRmobetu47KQLnKTuPEI5dcmRw8okS0%2F7NeoQOTyMsvUlHuYOHkNY0LOfBYydfUB%2BPZGpuHFG0S5Vc2%2BoXwUDrcveWTZ7lEbov6dk%2FvzlSpVnY&X-Amz-Signature=d51c29dfb7f5ff0ca30c23d0706db1a425dc188ca35f0b9d39b8fe3f9bbc6376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXJWREK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG0%2FLlgtePG%2F3KO4Y9%2BI%2BW%2BSQzQ3%2FPSdpXsdv1sHThdOAiAGyJFA77%2FkLEoQguCN3Es%2FD0aYOkMOgkMAKG9ipFAYiCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMSsuOkxHdll928v5QKtwDz%2Fj11KYT8VUsyYiS1huwNg3BI%2F%2Bwf9Y4nM04XfXSdPPyCHRm9d5ee5oMWFY5W9Mo2yp5sQpLvez68DLqkO2rd91OYbYhELKucbYRmoGF3Fnsm6VFvhZDiWIhDR8uq3NsxTZxXyj%2FSHoo0dbx2Oe4pXqF%2F2joI3%2FaeqnARx9G0YxPKg%2FOp8GK9R5UW6hIqPmWsj8YZMJpnEWwJ6Xb7ZdkkB8J4Byb5MwFSLu%2F9PM1bFdg9BtjxW67JwZ3NGt2IDKiryAH40rwTEv3SdG90eUOzIgcP7Ezy5pwCu%2BTk%2B16lA7AwrYiqO9kT9ySpn21C4rmGzBAVl6ioTWpXliPvxZv5Wh0lHZENIIKPN7ieNVuxkPP2MI4g8yydZs%2BZRfPOr0rDRnIyH3EdYp118Quycf%2FRSWIzUg%2FOQs3Mt3%2F8enC0cTX0sW2nB1VPFNT%2FdF7lMbQPB7KeN%2BjQTsjL3hJh0Sv04qrFIJz%2BXL6lntkqJmb29Pxw7lmGuGO0JCjC1fCf48y%2Bw0yVlH9GRTZoJ%2F0VqbFRjHn3hndS44PEPbXxWYMu%2FZEBzUMHFbhu45FaVKFi%2BOB%2BmVZ0gsEr%2FSiHWxk5VSzu%2BZbchszWTNmxTkH%2FDPSlwkHN4fNRRPly9PtVl0w99CPxAY6pgEyJwsE6F9H5mlYhDOXPB%2B4NlDQ7Xta6gtpkMxFnOlophAlO7zTMSZL9rOD%2BY3n%2B7W310wJB%2BPW6t8%2BimocAbp3YjOi6pI5u8nljvbd53P66KfC%2ByCRmobetu47KQLnKTuPEI5dcmRw8okS0%2F7NeoQOTyMsvUlHuYOHkNY0LOfBYydfUB%2BPZGpuHFG0S5Vc2%2BoXwUDrcveWTZ7lEbov6dk%2FvzlSpVnY&X-Amz-Signature=8f744051ac8ba71e064fcb1768b90d5bfa07b93fd7ba5f8ee05365389ce72de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXJWREK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG0%2FLlgtePG%2F3KO4Y9%2BI%2BW%2BSQzQ3%2FPSdpXsdv1sHThdOAiAGyJFA77%2FkLEoQguCN3Es%2FD0aYOkMOgkMAKG9ipFAYiCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMSsuOkxHdll928v5QKtwDz%2Fj11KYT8VUsyYiS1huwNg3BI%2F%2Bwf9Y4nM04XfXSdPPyCHRm9d5ee5oMWFY5W9Mo2yp5sQpLvez68DLqkO2rd91OYbYhELKucbYRmoGF3Fnsm6VFvhZDiWIhDR8uq3NsxTZxXyj%2FSHoo0dbx2Oe4pXqF%2F2joI3%2FaeqnARx9G0YxPKg%2FOp8GK9R5UW6hIqPmWsj8YZMJpnEWwJ6Xb7ZdkkB8J4Byb5MwFSLu%2F9PM1bFdg9BtjxW67JwZ3NGt2IDKiryAH40rwTEv3SdG90eUOzIgcP7Ezy5pwCu%2BTk%2B16lA7AwrYiqO9kT9ySpn21C4rmGzBAVl6ioTWpXliPvxZv5Wh0lHZENIIKPN7ieNVuxkPP2MI4g8yydZs%2BZRfPOr0rDRnIyH3EdYp118Quycf%2FRSWIzUg%2FOQs3Mt3%2F8enC0cTX0sW2nB1VPFNT%2FdF7lMbQPB7KeN%2BjQTsjL3hJh0Sv04qrFIJz%2BXL6lntkqJmb29Pxw7lmGuGO0JCjC1fCf48y%2Bw0yVlH9GRTZoJ%2F0VqbFRjHn3hndS44PEPbXxWYMu%2FZEBzUMHFbhu45FaVKFi%2BOB%2BmVZ0gsEr%2FSiHWxk5VSzu%2BZbchszWTNmxTkH%2FDPSlwkHN4fNRRPly9PtVl0w99CPxAY6pgEyJwsE6F9H5mlYhDOXPB%2B4NlDQ7Xta6gtpkMxFnOlophAlO7zTMSZL9rOD%2BY3n%2B7W310wJB%2BPW6t8%2BimocAbp3YjOi6pI5u8nljvbd53P66KfC%2ByCRmobetu47KQLnKTuPEI5dcmRw8okS0%2F7NeoQOTyMsvUlHuYOHkNY0LOfBYydfUB%2BPZGpuHFG0S5Vc2%2BoXwUDrcveWTZ7lEbov6dk%2FvzlSpVnY&X-Amz-Signature=a0c0a0cb68f3b8ad644f4cc7ffc5a040deaec459b4d5ebdd29d4e0ba84d81240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXJWREK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG0%2FLlgtePG%2F3KO4Y9%2BI%2BW%2BSQzQ3%2FPSdpXsdv1sHThdOAiAGyJFA77%2FkLEoQguCN3Es%2FD0aYOkMOgkMAKG9ipFAYiCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMSsuOkxHdll928v5QKtwDz%2Fj11KYT8VUsyYiS1huwNg3BI%2F%2Bwf9Y4nM04XfXSdPPyCHRm9d5ee5oMWFY5W9Mo2yp5sQpLvez68DLqkO2rd91OYbYhELKucbYRmoGF3Fnsm6VFvhZDiWIhDR8uq3NsxTZxXyj%2FSHoo0dbx2Oe4pXqF%2F2joI3%2FaeqnARx9G0YxPKg%2FOp8GK9R5UW6hIqPmWsj8YZMJpnEWwJ6Xb7ZdkkB8J4Byb5MwFSLu%2F9PM1bFdg9BtjxW67JwZ3NGt2IDKiryAH40rwTEv3SdG90eUOzIgcP7Ezy5pwCu%2BTk%2B16lA7AwrYiqO9kT9ySpn21C4rmGzBAVl6ioTWpXliPvxZv5Wh0lHZENIIKPN7ieNVuxkPP2MI4g8yydZs%2BZRfPOr0rDRnIyH3EdYp118Quycf%2FRSWIzUg%2FOQs3Mt3%2F8enC0cTX0sW2nB1VPFNT%2FdF7lMbQPB7KeN%2BjQTsjL3hJh0Sv04qrFIJz%2BXL6lntkqJmb29Pxw7lmGuGO0JCjC1fCf48y%2Bw0yVlH9GRTZoJ%2F0VqbFRjHn3hndS44PEPbXxWYMu%2FZEBzUMHFbhu45FaVKFi%2BOB%2BmVZ0gsEr%2FSiHWxk5VSzu%2BZbchszWTNmxTkH%2FDPSlwkHN4fNRRPly9PtVl0w99CPxAY6pgEyJwsE6F9H5mlYhDOXPB%2B4NlDQ7Xta6gtpkMxFnOlophAlO7zTMSZL9rOD%2BY3n%2B7W310wJB%2BPW6t8%2BimocAbp3YjOi6pI5u8nljvbd53P66KfC%2ByCRmobetu47KQLnKTuPEI5dcmRw8okS0%2F7NeoQOTyMsvUlHuYOHkNY0LOfBYydfUB%2BPZGpuHFG0S5Vc2%2BoXwUDrcveWTZ7lEbov6dk%2FvzlSpVnY&X-Amz-Signature=c1a0cd9d0236ca329e7d2b3bbdeafb4f142a478211413dd20747d2a417892bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXJWREK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG0%2FLlgtePG%2F3KO4Y9%2BI%2BW%2BSQzQ3%2FPSdpXsdv1sHThdOAiAGyJFA77%2FkLEoQguCN3Es%2FD0aYOkMOgkMAKG9ipFAYiCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMSsuOkxHdll928v5QKtwDz%2Fj11KYT8VUsyYiS1huwNg3BI%2F%2Bwf9Y4nM04XfXSdPPyCHRm9d5ee5oMWFY5W9Mo2yp5sQpLvez68DLqkO2rd91OYbYhELKucbYRmoGF3Fnsm6VFvhZDiWIhDR8uq3NsxTZxXyj%2FSHoo0dbx2Oe4pXqF%2F2joI3%2FaeqnARx9G0YxPKg%2FOp8GK9R5UW6hIqPmWsj8YZMJpnEWwJ6Xb7ZdkkB8J4Byb5MwFSLu%2F9PM1bFdg9BtjxW67JwZ3NGt2IDKiryAH40rwTEv3SdG90eUOzIgcP7Ezy5pwCu%2BTk%2B16lA7AwrYiqO9kT9ySpn21C4rmGzBAVl6ioTWpXliPvxZv5Wh0lHZENIIKPN7ieNVuxkPP2MI4g8yydZs%2BZRfPOr0rDRnIyH3EdYp118Quycf%2FRSWIzUg%2FOQs3Mt3%2F8enC0cTX0sW2nB1VPFNT%2FdF7lMbQPB7KeN%2BjQTsjL3hJh0Sv04qrFIJz%2BXL6lntkqJmb29Pxw7lmGuGO0JCjC1fCf48y%2Bw0yVlH9GRTZoJ%2F0VqbFRjHn3hndS44PEPbXxWYMu%2FZEBzUMHFbhu45FaVKFi%2BOB%2BmVZ0gsEr%2FSiHWxk5VSzu%2BZbchszWTNmxTkH%2FDPSlwkHN4fNRRPly9PtVl0w99CPxAY6pgEyJwsE6F9H5mlYhDOXPB%2B4NlDQ7Xta6gtpkMxFnOlophAlO7zTMSZL9rOD%2BY3n%2B7W310wJB%2BPW6t8%2BimocAbp3YjOi6pI5u8nljvbd53P66KfC%2ByCRmobetu47KQLnKTuPEI5dcmRw8okS0%2F7NeoQOTyMsvUlHuYOHkNY0LOfBYydfUB%2BPZGpuHFG0S5Vc2%2BoXwUDrcveWTZ7lEbov6dk%2FvzlSpVnY&X-Amz-Signature=3291c0d6cf28ec41c657321767cdb07088e157cfe34f968049c23dd822d21be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
