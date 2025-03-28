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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJBC34N%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYIxHGVzDIS%2F0yCLrU7KWqdsx%2BqY%2BlrrMgFrwdyZQPjAiEAiAEvJsWlUnQWlA17iXb8%2FxlVkAxs5TmgOrF41UPPnx0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKSwXU00z2mJo4VaHSrcAzEnDnM8WM0HGPeD6CQC0UWGgLnUIyINpFR59A6VTlsSLXTgYHdMNkBhIDQCdWqwhE7rXLtxXEiZ%2FlcqC2BwxQp2tW4INeJwBeCCEVXd9tIBS29IRsrzE51RDEYJaFZaGhz665uxfR9AcmBjiUmnv02uoNFIYaTqK99FS4kBrTUhCAP1GnVPAHXtCir2xb%2BmAHGOXILdSxYY6uqG%2FEZEiCKGmW1DWOxlWGOFyCAdh1DsFmdPVRok7E7p3%2BsWQc7%2Fh%2BI8cZu7y8OOBSguR5wDP8EmWJN7O%2FYwvHQp4G4yWyB9JJ4I2GcsMseoy%2BYkAoYnGeyxUBQhw7V2GlFJs11xAWOpryuH2IFgkUkPiBGUy1sOawQNoHzmAkOLdr9qmS8BCNQ1n%2BqrIWGyJbr8psi2IxENfybxmNgShpo2hsfFihhyHQo2SVBm%2B%2Fl2JCy4R5puz82PZyXnsRLL0%2FQviBnuR7YRmTBDZgjOqMJnbNFE9Yto830RpkQ9f52INKlx1DCTO3gVQEm6uQxdS7f%2Bbt%2BJ6a%2FGey0%2BEhOOCe%2FY%2FizR75b2UGkcq%2BzHysFYMDGzqs2guGH3SpPYend6thTeUNvkXNWlmNOl70gsKgd1EMKWXnEgriVD53Cvw88CFMqvMJGjmb8GOqUBFe%2FzFNJS1a2wUkvXULWMlDMakPKo%2BJIWVURil1D0%2BYWtw1bRiNIzbhP4PTRZEoLymBKa5hN5ALiQSOyt63YrLsygfLLtA64ZB6mqTmoSwQv%2FqJzObMVmck4A0YVfv7RshcEVGqMsQ72out8lvwrpoyqimvubxA6jHOWuli9MijV3S0DyS5L1zRjzFgiHLdRROVsMNWMC06GN8vwBZ7O9lQUSEs2l&X-Amz-Signature=4604dc2896cd48aa80fef7f9f6021e7b19bfce46e66b60953e70254ac881be42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJBC34N%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYIxHGVzDIS%2F0yCLrU7KWqdsx%2BqY%2BlrrMgFrwdyZQPjAiEAiAEvJsWlUnQWlA17iXb8%2FxlVkAxs5TmgOrF41UPPnx0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKSwXU00z2mJo4VaHSrcAzEnDnM8WM0HGPeD6CQC0UWGgLnUIyINpFR59A6VTlsSLXTgYHdMNkBhIDQCdWqwhE7rXLtxXEiZ%2FlcqC2BwxQp2tW4INeJwBeCCEVXd9tIBS29IRsrzE51RDEYJaFZaGhz665uxfR9AcmBjiUmnv02uoNFIYaTqK99FS4kBrTUhCAP1GnVPAHXtCir2xb%2BmAHGOXILdSxYY6uqG%2FEZEiCKGmW1DWOxlWGOFyCAdh1DsFmdPVRok7E7p3%2BsWQc7%2Fh%2BI8cZu7y8OOBSguR5wDP8EmWJN7O%2FYwvHQp4G4yWyB9JJ4I2GcsMseoy%2BYkAoYnGeyxUBQhw7V2GlFJs11xAWOpryuH2IFgkUkPiBGUy1sOawQNoHzmAkOLdr9qmS8BCNQ1n%2BqrIWGyJbr8psi2IxENfybxmNgShpo2hsfFihhyHQo2SVBm%2B%2Fl2JCy4R5puz82PZyXnsRLL0%2FQviBnuR7YRmTBDZgjOqMJnbNFE9Yto830RpkQ9f52INKlx1DCTO3gVQEm6uQxdS7f%2Bbt%2BJ6a%2FGey0%2BEhOOCe%2FY%2FizR75b2UGkcq%2BzHysFYMDGzqs2guGH3SpPYend6thTeUNvkXNWlmNOl70gsKgd1EMKWXnEgriVD53Cvw88CFMqvMJGjmb8GOqUBFe%2FzFNJS1a2wUkvXULWMlDMakPKo%2BJIWVURil1D0%2BYWtw1bRiNIzbhP4PTRZEoLymBKa5hN5ALiQSOyt63YrLsygfLLtA64ZB6mqTmoSwQv%2FqJzObMVmck4A0YVfv7RshcEVGqMsQ72out8lvwrpoyqimvubxA6jHOWuli9MijV3S0DyS5L1zRjzFgiHLdRROVsMNWMC06GN8vwBZ7O9lQUSEs2l&X-Amz-Signature=3a0bc16b5e578f1899c48d728951b5bcf37f3a4890e674860f8e6dab6c040147&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJBC34N%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYIxHGVzDIS%2F0yCLrU7KWqdsx%2BqY%2BlrrMgFrwdyZQPjAiEAiAEvJsWlUnQWlA17iXb8%2FxlVkAxs5TmgOrF41UPPnx0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKSwXU00z2mJo4VaHSrcAzEnDnM8WM0HGPeD6CQC0UWGgLnUIyINpFR59A6VTlsSLXTgYHdMNkBhIDQCdWqwhE7rXLtxXEiZ%2FlcqC2BwxQp2tW4INeJwBeCCEVXd9tIBS29IRsrzE51RDEYJaFZaGhz665uxfR9AcmBjiUmnv02uoNFIYaTqK99FS4kBrTUhCAP1GnVPAHXtCir2xb%2BmAHGOXILdSxYY6uqG%2FEZEiCKGmW1DWOxlWGOFyCAdh1DsFmdPVRok7E7p3%2BsWQc7%2Fh%2BI8cZu7y8OOBSguR5wDP8EmWJN7O%2FYwvHQp4G4yWyB9JJ4I2GcsMseoy%2BYkAoYnGeyxUBQhw7V2GlFJs11xAWOpryuH2IFgkUkPiBGUy1sOawQNoHzmAkOLdr9qmS8BCNQ1n%2BqrIWGyJbr8psi2IxENfybxmNgShpo2hsfFihhyHQo2SVBm%2B%2Fl2JCy4R5puz82PZyXnsRLL0%2FQviBnuR7YRmTBDZgjOqMJnbNFE9Yto830RpkQ9f52INKlx1DCTO3gVQEm6uQxdS7f%2Bbt%2BJ6a%2FGey0%2BEhOOCe%2FY%2FizR75b2UGkcq%2BzHysFYMDGzqs2guGH3SpPYend6thTeUNvkXNWlmNOl70gsKgd1EMKWXnEgriVD53Cvw88CFMqvMJGjmb8GOqUBFe%2FzFNJS1a2wUkvXULWMlDMakPKo%2BJIWVURil1D0%2BYWtw1bRiNIzbhP4PTRZEoLymBKa5hN5ALiQSOyt63YrLsygfLLtA64ZB6mqTmoSwQv%2FqJzObMVmck4A0YVfv7RshcEVGqMsQ72out8lvwrpoyqimvubxA6jHOWuli9MijV3S0DyS5L1zRjzFgiHLdRROVsMNWMC06GN8vwBZ7O9lQUSEs2l&X-Amz-Signature=198ad704ac428f03374399eec015fd8225ca0a6ec390558dc38735c6232f246e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJBC34N%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYIxHGVzDIS%2F0yCLrU7KWqdsx%2BqY%2BlrrMgFrwdyZQPjAiEAiAEvJsWlUnQWlA17iXb8%2FxlVkAxs5TmgOrF41UPPnx0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKSwXU00z2mJo4VaHSrcAzEnDnM8WM0HGPeD6CQC0UWGgLnUIyINpFR59A6VTlsSLXTgYHdMNkBhIDQCdWqwhE7rXLtxXEiZ%2FlcqC2BwxQp2tW4INeJwBeCCEVXd9tIBS29IRsrzE51RDEYJaFZaGhz665uxfR9AcmBjiUmnv02uoNFIYaTqK99FS4kBrTUhCAP1GnVPAHXtCir2xb%2BmAHGOXILdSxYY6uqG%2FEZEiCKGmW1DWOxlWGOFyCAdh1DsFmdPVRok7E7p3%2BsWQc7%2Fh%2BI8cZu7y8OOBSguR5wDP8EmWJN7O%2FYwvHQp4G4yWyB9JJ4I2GcsMseoy%2BYkAoYnGeyxUBQhw7V2GlFJs11xAWOpryuH2IFgkUkPiBGUy1sOawQNoHzmAkOLdr9qmS8BCNQ1n%2BqrIWGyJbr8psi2IxENfybxmNgShpo2hsfFihhyHQo2SVBm%2B%2Fl2JCy4R5puz82PZyXnsRLL0%2FQviBnuR7YRmTBDZgjOqMJnbNFE9Yto830RpkQ9f52INKlx1DCTO3gVQEm6uQxdS7f%2Bbt%2BJ6a%2FGey0%2BEhOOCe%2FY%2FizR75b2UGkcq%2BzHysFYMDGzqs2guGH3SpPYend6thTeUNvkXNWlmNOl70gsKgd1EMKWXnEgriVD53Cvw88CFMqvMJGjmb8GOqUBFe%2FzFNJS1a2wUkvXULWMlDMakPKo%2BJIWVURil1D0%2BYWtw1bRiNIzbhP4PTRZEoLymBKa5hN5ALiQSOyt63YrLsygfLLtA64ZB6mqTmoSwQv%2FqJzObMVmck4A0YVfv7RshcEVGqMsQ72out8lvwrpoyqimvubxA6jHOWuli9MijV3S0DyS5L1zRjzFgiHLdRROVsMNWMC06GN8vwBZ7O9lQUSEs2l&X-Amz-Signature=e3658fd531a37b280eeeea8e6ed73ddf7bd228db4320a9c88f77dbd64c3be597&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJBC34N%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYIxHGVzDIS%2F0yCLrU7KWqdsx%2BqY%2BlrrMgFrwdyZQPjAiEAiAEvJsWlUnQWlA17iXb8%2FxlVkAxs5TmgOrF41UPPnx0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKSwXU00z2mJo4VaHSrcAzEnDnM8WM0HGPeD6CQC0UWGgLnUIyINpFR59A6VTlsSLXTgYHdMNkBhIDQCdWqwhE7rXLtxXEiZ%2FlcqC2BwxQp2tW4INeJwBeCCEVXd9tIBS29IRsrzE51RDEYJaFZaGhz665uxfR9AcmBjiUmnv02uoNFIYaTqK99FS4kBrTUhCAP1GnVPAHXtCir2xb%2BmAHGOXILdSxYY6uqG%2FEZEiCKGmW1DWOxlWGOFyCAdh1DsFmdPVRok7E7p3%2BsWQc7%2Fh%2BI8cZu7y8OOBSguR5wDP8EmWJN7O%2FYwvHQp4G4yWyB9JJ4I2GcsMseoy%2BYkAoYnGeyxUBQhw7V2GlFJs11xAWOpryuH2IFgkUkPiBGUy1sOawQNoHzmAkOLdr9qmS8BCNQ1n%2BqrIWGyJbr8psi2IxENfybxmNgShpo2hsfFihhyHQo2SVBm%2B%2Fl2JCy4R5puz82PZyXnsRLL0%2FQviBnuR7YRmTBDZgjOqMJnbNFE9Yto830RpkQ9f52INKlx1DCTO3gVQEm6uQxdS7f%2Bbt%2BJ6a%2FGey0%2BEhOOCe%2FY%2FizR75b2UGkcq%2BzHysFYMDGzqs2guGH3SpPYend6thTeUNvkXNWlmNOl70gsKgd1EMKWXnEgriVD53Cvw88CFMqvMJGjmb8GOqUBFe%2FzFNJS1a2wUkvXULWMlDMakPKo%2BJIWVURil1D0%2BYWtw1bRiNIzbhP4PTRZEoLymBKa5hN5ALiQSOyt63YrLsygfLLtA64ZB6mqTmoSwQv%2FqJzObMVmck4A0YVfv7RshcEVGqMsQ72out8lvwrpoyqimvubxA6jHOWuli9MijV3S0DyS5L1zRjzFgiHLdRROVsMNWMC06GN8vwBZ7O9lQUSEs2l&X-Amz-Signature=fcf65b70a619c20a5417cc600c965909ee11ded72608876c30f6b8b0d12d5006&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJBC34N%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYIxHGVzDIS%2F0yCLrU7KWqdsx%2BqY%2BlrrMgFrwdyZQPjAiEAiAEvJsWlUnQWlA17iXb8%2FxlVkAxs5TmgOrF41UPPnx0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKSwXU00z2mJo4VaHSrcAzEnDnM8WM0HGPeD6CQC0UWGgLnUIyINpFR59A6VTlsSLXTgYHdMNkBhIDQCdWqwhE7rXLtxXEiZ%2FlcqC2BwxQp2tW4INeJwBeCCEVXd9tIBS29IRsrzE51RDEYJaFZaGhz665uxfR9AcmBjiUmnv02uoNFIYaTqK99FS4kBrTUhCAP1GnVPAHXtCir2xb%2BmAHGOXILdSxYY6uqG%2FEZEiCKGmW1DWOxlWGOFyCAdh1DsFmdPVRok7E7p3%2BsWQc7%2Fh%2BI8cZu7y8OOBSguR5wDP8EmWJN7O%2FYwvHQp4G4yWyB9JJ4I2GcsMseoy%2BYkAoYnGeyxUBQhw7V2GlFJs11xAWOpryuH2IFgkUkPiBGUy1sOawQNoHzmAkOLdr9qmS8BCNQ1n%2BqrIWGyJbr8psi2IxENfybxmNgShpo2hsfFihhyHQo2SVBm%2B%2Fl2JCy4R5puz82PZyXnsRLL0%2FQviBnuR7YRmTBDZgjOqMJnbNFE9Yto830RpkQ9f52INKlx1DCTO3gVQEm6uQxdS7f%2Bbt%2BJ6a%2FGey0%2BEhOOCe%2FY%2FizR75b2UGkcq%2BzHysFYMDGzqs2guGH3SpPYend6thTeUNvkXNWlmNOl70gsKgd1EMKWXnEgriVD53Cvw88CFMqvMJGjmb8GOqUBFe%2FzFNJS1a2wUkvXULWMlDMakPKo%2BJIWVURil1D0%2BYWtw1bRiNIzbhP4PTRZEoLymBKa5hN5ALiQSOyt63YrLsygfLLtA64ZB6mqTmoSwQv%2FqJzObMVmck4A0YVfv7RshcEVGqMsQ72out8lvwrpoyqimvubxA6jHOWuli9MijV3S0DyS5L1zRjzFgiHLdRROVsMNWMC06GN8vwBZ7O9lQUSEs2l&X-Amz-Signature=a43fac0a877459aa8ebf61a8fe71a90d51fbe60fa31658f7969a92c68c3989cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJBC34N%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYIxHGVzDIS%2F0yCLrU7KWqdsx%2BqY%2BlrrMgFrwdyZQPjAiEAiAEvJsWlUnQWlA17iXb8%2FxlVkAxs5TmgOrF41UPPnx0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKSwXU00z2mJo4VaHSrcAzEnDnM8WM0HGPeD6CQC0UWGgLnUIyINpFR59A6VTlsSLXTgYHdMNkBhIDQCdWqwhE7rXLtxXEiZ%2FlcqC2BwxQp2tW4INeJwBeCCEVXd9tIBS29IRsrzE51RDEYJaFZaGhz665uxfR9AcmBjiUmnv02uoNFIYaTqK99FS4kBrTUhCAP1GnVPAHXtCir2xb%2BmAHGOXILdSxYY6uqG%2FEZEiCKGmW1DWOxlWGOFyCAdh1DsFmdPVRok7E7p3%2BsWQc7%2Fh%2BI8cZu7y8OOBSguR5wDP8EmWJN7O%2FYwvHQp4G4yWyB9JJ4I2GcsMseoy%2BYkAoYnGeyxUBQhw7V2GlFJs11xAWOpryuH2IFgkUkPiBGUy1sOawQNoHzmAkOLdr9qmS8BCNQ1n%2BqrIWGyJbr8psi2IxENfybxmNgShpo2hsfFihhyHQo2SVBm%2B%2Fl2JCy4R5puz82PZyXnsRLL0%2FQviBnuR7YRmTBDZgjOqMJnbNFE9Yto830RpkQ9f52INKlx1DCTO3gVQEm6uQxdS7f%2Bbt%2BJ6a%2FGey0%2BEhOOCe%2FY%2FizR75b2UGkcq%2BzHysFYMDGzqs2guGH3SpPYend6thTeUNvkXNWlmNOl70gsKgd1EMKWXnEgriVD53Cvw88CFMqvMJGjmb8GOqUBFe%2FzFNJS1a2wUkvXULWMlDMakPKo%2BJIWVURil1D0%2BYWtw1bRiNIzbhP4PTRZEoLymBKa5hN5ALiQSOyt63YrLsygfLLtA64ZB6mqTmoSwQv%2FqJzObMVmck4A0YVfv7RshcEVGqMsQ72out8lvwrpoyqimvubxA6jHOWuli9MijV3S0DyS5L1zRjzFgiHLdRROVsMNWMC06GN8vwBZ7O9lQUSEs2l&X-Amz-Signature=3e13077648bfca2010c24d040afa2b6a1230d38b968b6283cdb527df1a912a50&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
