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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYXB2N3B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxiO19FUx5Kr6nB0dnRyGyCxjYKUX723MqYJ4cb1NA5gIhAPO2ljONtrTDmQ85XMRdRMwPe%2Bvung2JhCjdrud%2FhUt1KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2BpAl8dO0IDFbfOkq3APHHqApsWtwVQuC%2BPAOviULgGS91rKDIPDcjs7l1MqvXRcdXkhripJAF3VQqguc7wr%2Bv4oo0OOi4BfBZBsi0mH8rwSoAmguPymxhHB1cwC8xVYgjIi00uuydoNEC6DhFam0mg3RyQ5kcX%2BQi9dbjaqAfsc3qzGFUWR2xvzXBPyUYi4n5uJ2qCx612JkmVADIXG8gUqsIr6E%2FDwyX6cNQAh46%2FpgOoJkk5%2BWRA7MPyftN8%2FVS9lRYnqjaGMp5TAx6xlt7HKy0ntGE8OBEH9ltOvo8%2FnrFs8FmljCS9AIvjaj7hjdkTNN0rHAJnZ%2FPj%2FE7gk99QXzZK8oBAOpPaBTRoa5JV5SFUaJara0oG3tuq%2BoxkZwRoSmGU2CX2Ljuua1BS5RWdsQ6eCDvpita71znqgiYZimJugz%2BhMUMfuyrwseE8q1JnxZcarpb3f7KOG5xxtcZwyivdutJuhlE1DRLV6CeZhz%2BQJb3w5ZDSkbtt%2FJ6c7qovbAhs8rcE9dLrZK5%2FA3c%2FafRKsRyBIF%2BHNgRFosCCQmx6wH9Z2otwZrj6SHrbGSeKXrekCGvj8v8qSJVXS2yRX1fwwn3sbdT2ieiaSQtwQ2yquFXR%2FByPUnEp2hhKPSbum2sLpFFMIfSzDzg8bDBjqkAUTuYxKfsSoc3pgC1mkZet%2BbHJxf28Pag1gsrrxCRaCIIM8pAMz0MIfjLFcHhNdlD9zv%2FVyZZ8R0Q%2FUmxH77Jww8uyy3%2B4wijzSQz4ftZ6MrHn7NIxjZifzc%2BWWMV6n6AcFCWEDVW2qqGU7yz79jeSz0RE5rtHC1ElG%2B8WlsH6TmeHlQqeZHtL%2B%2FrV3WCMfxFSUi28Im5ho79rGJFpXN%2FSrYr6oC&X-Amz-Signature=4a3276f41b55622100bee1da895515d65ab4bc42a7feef7275c9def279c39997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYXB2N3B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxiO19FUx5Kr6nB0dnRyGyCxjYKUX723MqYJ4cb1NA5gIhAPO2ljONtrTDmQ85XMRdRMwPe%2Bvung2JhCjdrud%2FhUt1KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2BpAl8dO0IDFbfOkq3APHHqApsWtwVQuC%2BPAOviULgGS91rKDIPDcjs7l1MqvXRcdXkhripJAF3VQqguc7wr%2Bv4oo0OOi4BfBZBsi0mH8rwSoAmguPymxhHB1cwC8xVYgjIi00uuydoNEC6DhFam0mg3RyQ5kcX%2BQi9dbjaqAfsc3qzGFUWR2xvzXBPyUYi4n5uJ2qCx612JkmVADIXG8gUqsIr6E%2FDwyX6cNQAh46%2FpgOoJkk5%2BWRA7MPyftN8%2FVS9lRYnqjaGMp5TAx6xlt7HKy0ntGE8OBEH9ltOvo8%2FnrFs8FmljCS9AIvjaj7hjdkTNN0rHAJnZ%2FPj%2FE7gk99QXzZK8oBAOpPaBTRoa5JV5SFUaJara0oG3tuq%2BoxkZwRoSmGU2CX2Ljuua1BS5RWdsQ6eCDvpita71znqgiYZimJugz%2BhMUMfuyrwseE8q1JnxZcarpb3f7KOG5xxtcZwyivdutJuhlE1DRLV6CeZhz%2BQJb3w5ZDSkbtt%2FJ6c7qovbAhs8rcE9dLrZK5%2FA3c%2FafRKsRyBIF%2BHNgRFosCCQmx6wH9Z2otwZrj6SHrbGSeKXrekCGvj8v8qSJVXS2yRX1fwwn3sbdT2ieiaSQtwQ2yquFXR%2FByPUnEp2hhKPSbum2sLpFFMIfSzDzg8bDBjqkAUTuYxKfsSoc3pgC1mkZet%2BbHJxf28Pag1gsrrxCRaCIIM8pAMz0MIfjLFcHhNdlD9zv%2FVyZZ8R0Q%2FUmxH77Jww8uyy3%2B4wijzSQz4ftZ6MrHn7NIxjZifzc%2BWWMV6n6AcFCWEDVW2qqGU7yz79jeSz0RE5rtHC1ElG%2B8WlsH6TmeHlQqeZHtL%2B%2FrV3WCMfxFSUi28Im5ho79rGJFpXN%2FSrYr6oC&X-Amz-Signature=403e88a9cbea7a0143bb914bc4bde6ee3ae9b9f9da15ce37d35c1c190e6ec25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYXB2N3B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxiO19FUx5Kr6nB0dnRyGyCxjYKUX723MqYJ4cb1NA5gIhAPO2ljONtrTDmQ85XMRdRMwPe%2Bvung2JhCjdrud%2FhUt1KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2BpAl8dO0IDFbfOkq3APHHqApsWtwVQuC%2BPAOviULgGS91rKDIPDcjs7l1MqvXRcdXkhripJAF3VQqguc7wr%2Bv4oo0OOi4BfBZBsi0mH8rwSoAmguPymxhHB1cwC8xVYgjIi00uuydoNEC6DhFam0mg3RyQ5kcX%2BQi9dbjaqAfsc3qzGFUWR2xvzXBPyUYi4n5uJ2qCx612JkmVADIXG8gUqsIr6E%2FDwyX6cNQAh46%2FpgOoJkk5%2BWRA7MPyftN8%2FVS9lRYnqjaGMp5TAx6xlt7HKy0ntGE8OBEH9ltOvo8%2FnrFs8FmljCS9AIvjaj7hjdkTNN0rHAJnZ%2FPj%2FE7gk99QXzZK8oBAOpPaBTRoa5JV5SFUaJara0oG3tuq%2BoxkZwRoSmGU2CX2Ljuua1BS5RWdsQ6eCDvpita71znqgiYZimJugz%2BhMUMfuyrwseE8q1JnxZcarpb3f7KOG5xxtcZwyivdutJuhlE1DRLV6CeZhz%2BQJb3w5ZDSkbtt%2FJ6c7qovbAhs8rcE9dLrZK5%2FA3c%2FafRKsRyBIF%2BHNgRFosCCQmx6wH9Z2otwZrj6SHrbGSeKXrekCGvj8v8qSJVXS2yRX1fwwn3sbdT2ieiaSQtwQ2yquFXR%2FByPUnEp2hhKPSbum2sLpFFMIfSzDzg8bDBjqkAUTuYxKfsSoc3pgC1mkZet%2BbHJxf28Pag1gsrrxCRaCIIM8pAMz0MIfjLFcHhNdlD9zv%2FVyZZ8R0Q%2FUmxH77Jww8uyy3%2B4wijzSQz4ftZ6MrHn7NIxjZifzc%2BWWMV6n6AcFCWEDVW2qqGU7yz79jeSz0RE5rtHC1ElG%2B8WlsH6TmeHlQqeZHtL%2B%2FrV3WCMfxFSUi28Im5ho79rGJFpXN%2FSrYr6oC&X-Amz-Signature=d0feb332661d07c662fc12b888dbb1d1cb6d879a6881b279fd28369526922485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYXB2N3B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxiO19FUx5Kr6nB0dnRyGyCxjYKUX723MqYJ4cb1NA5gIhAPO2ljONtrTDmQ85XMRdRMwPe%2Bvung2JhCjdrud%2FhUt1KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2BpAl8dO0IDFbfOkq3APHHqApsWtwVQuC%2BPAOviULgGS91rKDIPDcjs7l1MqvXRcdXkhripJAF3VQqguc7wr%2Bv4oo0OOi4BfBZBsi0mH8rwSoAmguPymxhHB1cwC8xVYgjIi00uuydoNEC6DhFam0mg3RyQ5kcX%2BQi9dbjaqAfsc3qzGFUWR2xvzXBPyUYi4n5uJ2qCx612JkmVADIXG8gUqsIr6E%2FDwyX6cNQAh46%2FpgOoJkk5%2BWRA7MPyftN8%2FVS9lRYnqjaGMp5TAx6xlt7HKy0ntGE8OBEH9ltOvo8%2FnrFs8FmljCS9AIvjaj7hjdkTNN0rHAJnZ%2FPj%2FE7gk99QXzZK8oBAOpPaBTRoa5JV5SFUaJara0oG3tuq%2BoxkZwRoSmGU2CX2Ljuua1BS5RWdsQ6eCDvpita71znqgiYZimJugz%2BhMUMfuyrwseE8q1JnxZcarpb3f7KOG5xxtcZwyivdutJuhlE1DRLV6CeZhz%2BQJb3w5ZDSkbtt%2FJ6c7qovbAhs8rcE9dLrZK5%2FA3c%2FafRKsRyBIF%2BHNgRFosCCQmx6wH9Z2otwZrj6SHrbGSeKXrekCGvj8v8qSJVXS2yRX1fwwn3sbdT2ieiaSQtwQ2yquFXR%2FByPUnEp2hhKPSbum2sLpFFMIfSzDzg8bDBjqkAUTuYxKfsSoc3pgC1mkZet%2BbHJxf28Pag1gsrrxCRaCIIM8pAMz0MIfjLFcHhNdlD9zv%2FVyZZ8R0Q%2FUmxH77Jww8uyy3%2B4wijzSQz4ftZ6MrHn7NIxjZifzc%2BWWMV6n6AcFCWEDVW2qqGU7yz79jeSz0RE5rtHC1ElG%2B8WlsH6TmeHlQqeZHtL%2B%2FrV3WCMfxFSUi28Im5ho79rGJFpXN%2FSrYr6oC&X-Amz-Signature=e37ba28303ff445c7afc89ba432d2c458ac57c8096c4c2f471e38e03df96f934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYXB2N3B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxiO19FUx5Kr6nB0dnRyGyCxjYKUX723MqYJ4cb1NA5gIhAPO2ljONtrTDmQ85XMRdRMwPe%2Bvung2JhCjdrud%2FhUt1KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2BpAl8dO0IDFbfOkq3APHHqApsWtwVQuC%2BPAOviULgGS91rKDIPDcjs7l1MqvXRcdXkhripJAF3VQqguc7wr%2Bv4oo0OOi4BfBZBsi0mH8rwSoAmguPymxhHB1cwC8xVYgjIi00uuydoNEC6DhFam0mg3RyQ5kcX%2BQi9dbjaqAfsc3qzGFUWR2xvzXBPyUYi4n5uJ2qCx612JkmVADIXG8gUqsIr6E%2FDwyX6cNQAh46%2FpgOoJkk5%2BWRA7MPyftN8%2FVS9lRYnqjaGMp5TAx6xlt7HKy0ntGE8OBEH9ltOvo8%2FnrFs8FmljCS9AIvjaj7hjdkTNN0rHAJnZ%2FPj%2FE7gk99QXzZK8oBAOpPaBTRoa5JV5SFUaJara0oG3tuq%2BoxkZwRoSmGU2CX2Ljuua1BS5RWdsQ6eCDvpita71znqgiYZimJugz%2BhMUMfuyrwseE8q1JnxZcarpb3f7KOG5xxtcZwyivdutJuhlE1DRLV6CeZhz%2BQJb3w5ZDSkbtt%2FJ6c7qovbAhs8rcE9dLrZK5%2FA3c%2FafRKsRyBIF%2BHNgRFosCCQmx6wH9Z2otwZrj6SHrbGSeKXrekCGvj8v8qSJVXS2yRX1fwwn3sbdT2ieiaSQtwQ2yquFXR%2FByPUnEp2hhKPSbum2sLpFFMIfSzDzg8bDBjqkAUTuYxKfsSoc3pgC1mkZet%2BbHJxf28Pag1gsrrxCRaCIIM8pAMz0MIfjLFcHhNdlD9zv%2FVyZZ8R0Q%2FUmxH77Jww8uyy3%2B4wijzSQz4ftZ6MrHn7NIxjZifzc%2BWWMV6n6AcFCWEDVW2qqGU7yz79jeSz0RE5rtHC1ElG%2B8WlsH6TmeHlQqeZHtL%2B%2FrV3WCMfxFSUi28Im5ho79rGJFpXN%2FSrYr6oC&X-Amz-Signature=022155c1a702a3c7eb68343dabb8e5967491e9cb62f4904de8107246906d8b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYXB2N3B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxiO19FUx5Kr6nB0dnRyGyCxjYKUX723MqYJ4cb1NA5gIhAPO2ljONtrTDmQ85XMRdRMwPe%2Bvung2JhCjdrud%2FhUt1KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2BpAl8dO0IDFbfOkq3APHHqApsWtwVQuC%2BPAOviULgGS91rKDIPDcjs7l1MqvXRcdXkhripJAF3VQqguc7wr%2Bv4oo0OOi4BfBZBsi0mH8rwSoAmguPymxhHB1cwC8xVYgjIi00uuydoNEC6DhFam0mg3RyQ5kcX%2BQi9dbjaqAfsc3qzGFUWR2xvzXBPyUYi4n5uJ2qCx612JkmVADIXG8gUqsIr6E%2FDwyX6cNQAh46%2FpgOoJkk5%2BWRA7MPyftN8%2FVS9lRYnqjaGMp5TAx6xlt7HKy0ntGE8OBEH9ltOvo8%2FnrFs8FmljCS9AIvjaj7hjdkTNN0rHAJnZ%2FPj%2FE7gk99QXzZK8oBAOpPaBTRoa5JV5SFUaJara0oG3tuq%2BoxkZwRoSmGU2CX2Ljuua1BS5RWdsQ6eCDvpita71znqgiYZimJugz%2BhMUMfuyrwseE8q1JnxZcarpb3f7KOG5xxtcZwyivdutJuhlE1DRLV6CeZhz%2BQJb3w5ZDSkbtt%2FJ6c7qovbAhs8rcE9dLrZK5%2FA3c%2FafRKsRyBIF%2BHNgRFosCCQmx6wH9Z2otwZrj6SHrbGSeKXrekCGvj8v8qSJVXS2yRX1fwwn3sbdT2ieiaSQtwQ2yquFXR%2FByPUnEp2hhKPSbum2sLpFFMIfSzDzg8bDBjqkAUTuYxKfsSoc3pgC1mkZet%2BbHJxf28Pag1gsrrxCRaCIIM8pAMz0MIfjLFcHhNdlD9zv%2FVyZZ8R0Q%2FUmxH77Jww8uyy3%2B4wijzSQz4ftZ6MrHn7NIxjZifzc%2BWWMV6n6AcFCWEDVW2qqGU7yz79jeSz0RE5rtHC1ElG%2B8WlsH6TmeHlQqeZHtL%2B%2FrV3WCMfxFSUi28Im5ho79rGJFpXN%2FSrYr6oC&X-Amz-Signature=28f583404011b2b58a56ef253d0df3d486193da729e4d7c6be93cc5ff928dbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYXB2N3B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxiO19FUx5Kr6nB0dnRyGyCxjYKUX723MqYJ4cb1NA5gIhAPO2ljONtrTDmQ85XMRdRMwPe%2Bvung2JhCjdrud%2FhUt1KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2BpAl8dO0IDFbfOkq3APHHqApsWtwVQuC%2BPAOviULgGS91rKDIPDcjs7l1MqvXRcdXkhripJAF3VQqguc7wr%2Bv4oo0OOi4BfBZBsi0mH8rwSoAmguPymxhHB1cwC8xVYgjIi00uuydoNEC6DhFam0mg3RyQ5kcX%2BQi9dbjaqAfsc3qzGFUWR2xvzXBPyUYi4n5uJ2qCx612JkmVADIXG8gUqsIr6E%2FDwyX6cNQAh46%2FpgOoJkk5%2BWRA7MPyftN8%2FVS9lRYnqjaGMp5TAx6xlt7HKy0ntGE8OBEH9ltOvo8%2FnrFs8FmljCS9AIvjaj7hjdkTNN0rHAJnZ%2FPj%2FE7gk99QXzZK8oBAOpPaBTRoa5JV5SFUaJara0oG3tuq%2BoxkZwRoSmGU2CX2Ljuua1BS5RWdsQ6eCDvpita71znqgiYZimJugz%2BhMUMfuyrwseE8q1JnxZcarpb3f7KOG5xxtcZwyivdutJuhlE1DRLV6CeZhz%2BQJb3w5ZDSkbtt%2FJ6c7qovbAhs8rcE9dLrZK5%2FA3c%2FafRKsRyBIF%2BHNgRFosCCQmx6wH9Z2otwZrj6SHrbGSeKXrekCGvj8v8qSJVXS2yRX1fwwn3sbdT2ieiaSQtwQ2yquFXR%2FByPUnEp2hhKPSbum2sLpFFMIfSzDzg8bDBjqkAUTuYxKfsSoc3pgC1mkZet%2BbHJxf28Pag1gsrrxCRaCIIM8pAMz0MIfjLFcHhNdlD9zv%2FVyZZ8R0Q%2FUmxH77Jww8uyy3%2B4wijzSQz4ftZ6MrHn7NIxjZifzc%2BWWMV6n6AcFCWEDVW2qqGU7yz79jeSz0RE5rtHC1ElG%2B8WlsH6TmeHlQqeZHtL%2B%2FrV3WCMfxFSUi28Im5ho79rGJFpXN%2FSrYr6oC&X-Amz-Signature=706e06d429f6e8629db7a8fa3416475b4aa2792b99b590cf809c8c7b2d8a1309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
