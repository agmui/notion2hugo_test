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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7HSDQQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45UPOfxGrZJ9fVyD2aYJn4aWdverWNix%2FAboa%2Bns%2F%2BwIgP9de0dFdLauucAXwPQE8ioH%2FT%2BlZYYH9Ho2zpwYDId4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgf9X7BoU4IENBmoSrcA3rXt8m8C2oAXYIk6X9zHyDcSDCgjCmHrFzFDFL0G4f31QuZ%2F6KrtXltvPOSM2TxV91ZeJ5Z%2F4cKN0jM9%2BbWmSmy1mNX3nhumg%2B8hFdHtXp2f9LCcpZxpA0so7VaRgjyH%2FvAJGzH0KQtrz4ENfr4LYt4UyVqULrhDYIkaS5g%2B1LNGqcpueCE%2BWuEOjYviOJR7gsF%2FVZ7U%2FCEjZuHTbb%2F7HDWvW2blBCZMOri7PVduJmpClhc4K8MOxrzwBVEPFI0E7MueeD00D1GmviTMEsP8wg1jDVBpP%2B5dtJmlp08WZBjQqI0TuDfr3kMaj%2BIMRtwIQn75TumN%2B8VrX39i2y4idR6dTrpxx8LRZyBqNqxeaLxfTQAGQvI8fVrGoYtbTaBhJdK185zw0WshGn2fM1t07LC%2FNAXecZBaEKWlWge5oiWS6jGCN9yDemxuDU0SbXHoIBPDGpgvZCzG2RPwapV3xm6h%2F5rHtnpPnPGqzRu%2FbFOMCdBO7cE6tuF6cKZxuMRz5kQpRSYGGyOZKSPMdMI1mHr6zDuSrd2hiB5EbgFagh7YLilCBkZvBEokx89Ej%2BWWecug9p3UYj6vSL4B0osw37BTY3GrBV1%2FhQRGAQ%2BeAqsieKinwpnURaYEBCFMJ%2FA0b4GOqUBwlHEN9dYkwfJigJOe47TwC5dVXpW4sK8GgQ%2FK7L2ZOm5stoy73uwaDTQNZaaeJfmiwp%2FaQMn5nSG%2FtAOUt1Hl8cdK4UdTPK7hZB0euB%2BSZ3%2B8vW9jCugUHuZpaMH5QpCxAWv%2F%2FQUWYdSoR6gLSVGtaYg48vVYyL62BcntnIK%2B26fFycDkwoE3%2BUt32GwiDKbqIgeWNqtyC3%2FQILSzlzroi0r9mY1&X-Amz-Signature=ec12c0d50ae20a775b8da05f3606baa7237bb0e69d46ab526182483f72f3b0a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7HSDQQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45UPOfxGrZJ9fVyD2aYJn4aWdverWNix%2FAboa%2Bns%2F%2BwIgP9de0dFdLauucAXwPQE8ioH%2FT%2BlZYYH9Ho2zpwYDId4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgf9X7BoU4IENBmoSrcA3rXt8m8C2oAXYIk6X9zHyDcSDCgjCmHrFzFDFL0G4f31QuZ%2F6KrtXltvPOSM2TxV91ZeJ5Z%2F4cKN0jM9%2BbWmSmy1mNX3nhumg%2B8hFdHtXp2f9LCcpZxpA0so7VaRgjyH%2FvAJGzH0KQtrz4ENfr4LYt4UyVqULrhDYIkaS5g%2B1LNGqcpueCE%2BWuEOjYviOJR7gsF%2FVZ7U%2FCEjZuHTbb%2F7HDWvW2blBCZMOri7PVduJmpClhc4K8MOxrzwBVEPFI0E7MueeD00D1GmviTMEsP8wg1jDVBpP%2B5dtJmlp08WZBjQqI0TuDfr3kMaj%2BIMRtwIQn75TumN%2B8VrX39i2y4idR6dTrpxx8LRZyBqNqxeaLxfTQAGQvI8fVrGoYtbTaBhJdK185zw0WshGn2fM1t07LC%2FNAXecZBaEKWlWge5oiWS6jGCN9yDemxuDU0SbXHoIBPDGpgvZCzG2RPwapV3xm6h%2F5rHtnpPnPGqzRu%2FbFOMCdBO7cE6tuF6cKZxuMRz5kQpRSYGGyOZKSPMdMI1mHr6zDuSrd2hiB5EbgFagh7YLilCBkZvBEokx89Ej%2BWWecug9p3UYj6vSL4B0osw37BTY3GrBV1%2FhQRGAQ%2BeAqsieKinwpnURaYEBCFMJ%2FA0b4GOqUBwlHEN9dYkwfJigJOe47TwC5dVXpW4sK8GgQ%2FK7L2ZOm5stoy73uwaDTQNZaaeJfmiwp%2FaQMn5nSG%2FtAOUt1Hl8cdK4UdTPK7hZB0euB%2BSZ3%2B8vW9jCugUHuZpaMH5QpCxAWv%2F%2FQUWYdSoR6gLSVGtaYg48vVYyL62BcntnIK%2B26fFycDkwoE3%2BUt32GwiDKbqIgeWNqtyC3%2FQILSzlzroi0r9mY1&X-Amz-Signature=719979be8de1b08e21220ae46686ae02240bd98f841a67b1771209dc6d16b178&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7HSDQQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45UPOfxGrZJ9fVyD2aYJn4aWdverWNix%2FAboa%2Bns%2F%2BwIgP9de0dFdLauucAXwPQE8ioH%2FT%2BlZYYH9Ho2zpwYDId4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgf9X7BoU4IENBmoSrcA3rXt8m8C2oAXYIk6X9zHyDcSDCgjCmHrFzFDFL0G4f31QuZ%2F6KrtXltvPOSM2TxV91ZeJ5Z%2F4cKN0jM9%2BbWmSmy1mNX3nhumg%2B8hFdHtXp2f9LCcpZxpA0so7VaRgjyH%2FvAJGzH0KQtrz4ENfr4LYt4UyVqULrhDYIkaS5g%2B1LNGqcpueCE%2BWuEOjYviOJR7gsF%2FVZ7U%2FCEjZuHTbb%2F7HDWvW2blBCZMOri7PVduJmpClhc4K8MOxrzwBVEPFI0E7MueeD00D1GmviTMEsP8wg1jDVBpP%2B5dtJmlp08WZBjQqI0TuDfr3kMaj%2BIMRtwIQn75TumN%2B8VrX39i2y4idR6dTrpxx8LRZyBqNqxeaLxfTQAGQvI8fVrGoYtbTaBhJdK185zw0WshGn2fM1t07LC%2FNAXecZBaEKWlWge5oiWS6jGCN9yDemxuDU0SbXHoIBPDGpgvZCzG2RPwapV3xm6h%2F5rHtnpPnPGqzRu%2FbFOMCdBO7cE6tuF6cKZxuMRz5kQpRSYGGyOZKSPMdMI1mHr6zDuSrd2hiB5EbgFagh7YLilCBkZvBEokx89Ej%2BWWecug9p3UYj6vSL4B0osw37BTY3GrBV1%2FhQRGAQ%2BeAqsieKinwpnURaYEBCFMJ%2FA0b4GOqUBwlHEN9dYkwfJigJOe47TwC5dVXpW4sK8GgQ%2FK7L2ZOm5stoy73uwaDTQNZaaeJfmiwp%2FaQMn5nSG%2FtAOUt1Hl8cdK4UdTPK7hZB0euB%2BSZ3%2B8vW9jCugUHuZpaMH5QpCxAWv%2F%2FQUWYdSoR6gLSVGtaYg48vVYyL62BcntnIK%2B26fFycDkwoE3%2BUt32GwiDKbqIgeWNqtyC3%2FQILSzlzroi0r9mY1&X-Amz-Signature=d6e231c77b022b468730a39c2ff4a65acbf67a169a2bb623524a975554adb0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7HSDQQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45UPOfxGrZJ9fVyD2aYJn4aWdverWNix%2FAboa%2Bns%2F%2BwIgP9de0dFdLauucAXwPQE8ioH%2FT%2BlZYYH9Ho2zpwYDId4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgf9X7BoU4IENBmoSrcA3rXt8m8C2oAXYIk6X9zHyDcSDCgjCmHrFzFDFL0G4f31QuZ%2F6KrtXltvPOSM2TxV91ZeJ5Z%2F4cKN0jM9%2BbWmSmy1mNX3nhumg%2B8hFdHtXp2f9LCcpZxpA0so7VaRgjyH%2FvAJGzH0KQtrz4ENfr4LYt4UyVqULrhDYIkaS5g%2B1LNGqcpueCE%2BWuEOjYviOJR7gsF%2FVZ7U%2FCEjZuHTbb%2F7HDWvW2blBCZMOri7PVduJmpClhc4K8MOxrzwBVEPFI0E7MueeD00D1GmviTMEsP8wg1jDVBpP%2B5dtJmlp08WZBjQqI0TuDfr3kMaj%2BIMRtwIQn75TumN%2B8VrX39i2y4idR6dTrpxx8LRZyBqNqxeaLxfTQAGQvI8fVrGoYtbTaBhJdK185zw0WshGn2fM1t07LC%2FNAXecZBaEKWlWge5oiWS6jGCN9yDemxuDU0SbXHoIBPDGpgvZCzG2RPwapV3xm6h%2F5rHtnpPnPGqzRu%2FbFOMCdBO7cE6tuF6cKZxuMRz5kQpRSYGGyOZKSPMdMI1mHr6zDuSrd2hiB5EbgFagh7YLilCBkZvBEokx89Ej%2BWWecug9p3UYj6vSL4B0osw37BTY3GrBV1%2FhQRGAQ%2BeAqsieKinwpnURaYEBCFMJ%2FA0b4GOqUBwlHEN9dYkwfJigJOe47TwC5dVXpW4sK8GgQ%2FK7L2ZOm5stoy73uwaDTQNZaaeJfmiwp%2FaQMn5nSG%2FtAOUt1Hl8cdK4UdTPK7hZB0euB%2BSZ3%2B8vW9jCugUHuZpaMH5QpCxAWv%2F%2FQUWYdSoR6gLSVGtaYg48vVYyL62BcntnIK%2B26fFycDkwoE3%2BUt32GwiDKbqIgeWNqtyC3%2FQILSzlzroi0r9mY1&X-Amz-Signature=a525437597ce9e38ffe9ad9b309648dc28baa9f0d2f263aa3a699d579ca49d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7HSDQQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45UPOfxGrZJ9fVyD2aYJn4aWdverWNix%2FAboa%2Bns%2F%2BwIgP9de0dFdLauucAXwPQE8ioH%2FT%2BlZYYH9Ho2zpwYDId4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgf9X7BoU4IENBmoSrcA3rXt8m8C2oAXYIk6X9zHyDcSDCgjCmHrFzFDFL0G4f31QuZ%2F6KrtXltvPOSM2TxV91ZeJ5Z%2F4cKN0jM9%2BbWmSmy1mNX3nhumg%2B8hFdHtXp2f9LCcpZxpA0so7VaRgjyH%2FvAJGzH0KQtrz4ENfr4LYt4UyVqULrhDYIkaS5g%2B1LNGqcpueCE%2BWuEOjYviOJR7gsF%2FVZ7U%2FCEjZuHTbb%2F7HDWvW2blBCZMOri7PVduJmpClhc4K8MOxrzwBVEPFI0E7MueeD00D1GmviTMEsP8wg1jDVBpP%2B5dtJmlp08WZBjQqI0TuDfr3kMaj%2BIMRtwIQn75TumN%2B8VrX39i2y4idR6dTrpxx8LRZyBqNqxeaLxfTQAGQvI8fVrGoYtbTaBhJdK185zw0WshGn2fM1t07LC%2FNAXecZBaEKWlWge5oiWS6jGCN9yDemxuDU0SbXHoIBPDGpgvZCzG2RPwapV3xm6h%2F5rHtnpPnPGqzRu%2FbFOMCdBO7cE6tuF6cKZxuMRz5kQpRSYGGyOZKSPMdMI1mHr6zDuSrd2hiB5EbgFagh7YLilCBkZvBEokx89Ej%2BWWecug9p3UYj6vSL4B0osw37BTY3GrBV1%2FhQRGAQ%2BeAqsieKinwpnURaYEBCFMJ%2FA0b4GOqUBwlHEN9dYkwfJigJOe47TwC5dVXpW4sK8GgQ%2FK7L2ZOm5stoy73uwaDTQNZaaeJfmiwp%2FaQMn5nSG%2FtAOUt1Hl8cdK4UdTPK7hZB0euB%2BSZ3%2B8vW9jCugUHuZpaMH5QpCxAWv%2F%2FQUWYdSoR6gLSVGtaYg48vVYyL62BcntnIK%2B26fFycDkwoE3%2BUt32GwiDKbqIgeWNqtyC3%2FQILSzlzroi0r9mY1&X-Amz-Signature=1fb7863b8a7f9fb4118b5ae753c674a9460120bb5720a801e2ed724d58f9e2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7HSDQQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45UPOfxGrZJ9fVyD2aYJn4aWdverWNix%2FAboa%2Bns%2F%2BwIgP9de0dFdLauucAXwPQE8ioH%2FT%2BlZYYH9Ho2zpwYDId4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgf9X7BoU4IENBmoSrcA3rXt8m8C2oAXYIk6X9zHyDcSDCgjCmHrFzFDFL0G4f31QuZ%2F6KrtXltvPOSM2TxV91ZeJ5Z%2F4cKN0jM9%2BbWmSmy1mNX3nhumg%2B8hFdHtXp2f9LCcpZxpA0so7VaRgjyH%2FvAJGzH0KQtrz4ENfr4LYt4UyVqULrhDYIkaS5g%2B1LNGqcpueCE%2BWuEOjYviOJR7gsF%2FVZ7U%2FCEjZuHTbb%2F7HDWvW2blBCZMOri7PVduJmpClhc4K8MOxrzwBVEPFI0E7MueeD00D1GmviTMEsP8wg1jDVBpP%2B5dtJmlp08WZBjQqI0TuDfr3kMaj%2BIMRtwIQn75TumN%2B8VrX39i2y4idR6dTrpxx8LRZyBqNqxeaLxfTQAGQvI8fVrGoYtbTaBhJdK185zw0WshGn2fM1t07LC%2FNAXecZBaEKWlWge5oiWS6jGCN9yDemxuDU0SbXHoIBPDGpgvZCzG2RPwapV3xm6h%2F5rHtnpPnPGqzRu%2FbFOMCdBO7cE6tuF6cKZxuMRz5kQpRSYGGyOZKSPMdMI1mHr6zDuSrd2hiB5EbgFagh7YLilCBkZvBEokx89Ej%2BWWecug9p3UYj6vSL4B0osw37BTY3GrBV1%2FhQRGAQ%2BeAqsieKinwpnURaYEBCFMJ%2FA0b4GOqUBwlHEN9dYkwfJigJOe47TwC5dVXpW4sK8GgQ%2FK7L2ZOm5stoy73uwaDTQNZaaeJfmiwp%2FaQMn5nSG%2FtAOUt1Hl8cdK4UdTPK7hZB0euB%2BSZ3%2B8vW9jCugUHuZpaMH5QpCxAWv%2F%2FQUWYdSoR6gLSVGtaYg48vVYyL62BcntnIK%2B26fFycDkwoE3%2BUt32GwiDKbqIgeWNqtyC3%2FQILSzlzroi0r9mY1&X-Amz-Signature=899c1645431ce3837cd4cd02aa3181f9ba653fd87f73f05cad4f8d8c9c524957&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7HSDQQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45UPOfxGrZJ9fVyD2aYJn4aWdverWNix%2FAboa%2Bns%2F%2BwIgP9de0dFdLauucAXwPQE8ioH%2FT%2BlZYYH9Ho2zpwYDId4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgf9X7BoU4IENBmoSrcA3rXt8m8C2oAXYIk6X9zHyDcSDCgjCmHrFzFDFL0G4f31QuZ%2F6KrtXltvPOSM2TxV91ZeJ5Z%2F4cKN0jM9%2BbWmSmy1mNX3nhumg%2B8hFdHtXp2f9LCcpZxpA0so7VaRgjyH%2FvAJGzH0KQtrz4ENfr4LYt4UyVqULrhDYIkaS5g%2B1LNGqcpueCE%2BWuEOjYviOJR7gsF%2FVZ7U%2FCEjZuHTbb%2F7HDWvW2blBCZMOri7PVduJmpClhc4K8MOxrzwBVEPFI0E7MueeD00D1GmviTMEsP8wg1jDVBpP%2B5dtJmlp08WZBjQqI0TuDfr3kMaj%2BIMRtwIQn75TumN%2B8VrX39i2y4idR6dTrpxx8LRZyBqNqxeaLxfTQAGQvI8fVrGoYtbTaBhJdK185zw0WshGn2fM1t07LC%2FNAXecZBaEKWlWge5oiWS6jGCN9yDemxuDU0SbXHoIBPDGpgvZCzG2RPwapV3xm6h%2F5rHtnpPnPGqzRu%2FbFOMCdBO7cE6tuF6cKZxuMRz5kQpRSYGGyOZKSPMdMI1mHr6zDuSrd2hiB5EbgFagh7YLilCBkZvBEokx89Ej%2BWWecug9p3UYj6vSL4B0osw37BTY3GrBV1%2FhQRGAQ%2BeAqsieKinwpnURaYEBCFMJ%2FA0b4GOqUBwlHEN9dYkwfJigJOe47TwC5dVXpW4sK8GgQ%2FK7L2ZOm5stoy73uwaDTQNZaaeJfmiwp%2FaQMn5nSG%2FtAOUt1Hl8cdK4UdTPK7hZB0euB%2BSZ3%2B8vW9jCugUHuZpaMH5QpCxAWv%2F%2FQUWYdSoR6gLSVGtaYg48vVYyL62BcntnIK%2B26fFycDkwoE3%2BUt32GwiDKbqIgeWNqtyC3%2FQILSzlzroi0r9mY1&X-Amz-Signature=e1a4bd2ebf1d4b94cb415f495824347b951c4bf70dc3e4194e7885e5645d7b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
