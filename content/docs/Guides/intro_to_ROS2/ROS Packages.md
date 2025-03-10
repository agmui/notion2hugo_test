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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIBEC2G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICRo6E4SdHt3Mck%2BwUnxwTLSX2NJqTdLOTNMfqgebsCJAiBiyxAlg6ys3%2BTO8MoRcXFk1ZwhTOm5OeJGlQ2aCC2B1SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMAP%2B9xqfIre%2BAj4yKtwDtSoTDgOPo6skNFZbK3TZ1uQNJr6CAGn0lYlAQANr8%2Bs9opB6zrkAFJy0%2BUwj3E8TCZvao8i1W%2FAuIhhaM%2BtvdSRe1FGXVQqemEUsA%2BXi7FmN9g5TDaa9Cn4FAaInrXQ0TC44QXYfwESzjQczxTUu2eaeAngCdsuV81a0Mw2lAyjni531vAfIuSsh%2FliMdn4Vz%2FPT1oKgjEXkVfA3l3w5XUhbQ3YLZo5rWpW6iYZTe7a0fyG9DnjpPxUxYkM2XBE5MUKS2s5MU3Uky4wSpUoEpmWW%2F4O5Ji4LVGAWujwFMCHABe3j07YPaD2uc%2BP2j9gE3OHqku%2BgsuFjEvld2vcapwwYienyFO9KgdH6i80rscKtoeKBPxMK7Wsi3NV8w3I%2BVZwQJ%2BCWHPif2uoWiBqtdLwD0g%2Ffl3dqMJO%2F6b7pjaLpjPm%2Bwp5schUzioVOs5mRrK3xqqwnpyn%2Fu7oVmNdEoaqjRnuBxMRXY3KKSuzUzfOaJbNM1%2F%2Fa5FxZHqbTU4W2cvZC8yxtAcsgZuSqa66DH7iegvBHzjm5p%2F%2FTJZasjsX91G6M%2BOpGqEuxHtZgU53QbmNmGsJlzeVYoD%2FSiBDLkdCSdiJlzhPb6eT7uSnod1ZNWlebgljplJWv3rQwo8i6vgY6pgGc9Da1g5cwKdKfIUaS%2B%2FdV9xbUPjpuPQwT94uyM%2FmAdmv9rSJW0iPJBzi47600x27CGXfZHaCGkIcVYnTwtUIC8WsXNma%2BG0ZDPNBNsvh6Z0lYCIuL1yjG4e37pUrF5HkKMfoBkxhEOcyqJH8gOnmwS9X42TED9giTvF6gkzhwb05N6IlNdbgIYBoc9DPj75kbqjaefMJ%2BrhEu9CEr8n16Rm%2B1goA1&X-Amz-Signature=1a418948e6b7f856dfa5ec120a5e21c9792ff4b26c962e16b08b45be4e2ccdc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIBEC2G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICRo6E4SdHt3Mck%2BwUnxwTLSX2NJqTdLOTNMfqgebsCJAiBiyxAlg6ys3%2BTO8MoRcXFk1ZwhTOm5OeJGlQ2aCC2B1SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMAP%2B9xqfIre%2BAj4yKtwDtSoTDgOPo6skNFZbK3TZ1uQNJr6CAGn0lYlAQANr8%2Bs9opB6zrkAFJy0%2BUwj3E8TCZvao8i1W%2FAuIhhaM%2BtvdSRe1FGXVQqemEUsA%2BXi7FmN9g5TDaa9Cn4FAaInrXQ0TC44QXYfwESzjQczxTUu2eaeAngCdsuV81a0Mw2lAyjni531vAfIuSsh%2FliMdn4Vz%2FPT1oKgjEXkVfA3l3w5XUhbQ3YLZo5rWpW6iYZTe7a0fyG9DnjpPxUxYkM2XBE5MUKS2s5MU3Uky4wSpUoEpmWW%2F4O5Ji4LVGAWujwFMCHABe3j07YPaD2uc%2BP2j9gE3OHqku%2BgsuFjEvld2vcapwwYienyFO9KgdH6i80rscKtoeKBPxMK7Wsi3NV8w3I%2BVZwQJ%2BCWHPif2uoWiBqtdLwD0g%2Ffl3dqMJO%2F6b7pjaLpjPm%2Bwp5schUzioVOs5mRrK3xqqwnpyn%2Fu7oVmNdEoaqjRnuBxMRXY3KKSuzUzfOaJbNM1%2F%2Fa5FxZHqbTU4W2cvZC8yxtAcsgZuSqa66DH7iegvBHzjm5p%2F%2FTJZasjsX91G6M%2BOpGqEuxHtZgU53QbmNmGsJlzeVYoD%2FSiBDLkdCSdiJlzhPb6eT7uSnod1ZNWlebgljplJWv3rQwo8i6vgY6pgGc9Da1g5cwKdKfIUaS%2B%2FdV9xbUPjpuPQwT94uyM%2FmAdmv9rSJW0iPJBzi47600x27CGXfZHaCGkIcVYnTwtUIC8WsXNma%2BG0ZDPNBNsvh6Z0lYCIuL1yjG4e37pUrF5HkKMfoBkxhEOcyqJH8gOnmwS9X42TED9giTvF6gkzhwb05N6IlNdbgIYBoc9DPj75kbqjaefMJ%2BrhEu9CEr8n16Rm%2B1goA1&X-Amz-Signature=a8eadc0895ee9ee739c683c0b0a6552487ffe8d3040429358c698a915f7c9a37&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIBEC2G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICRo6E4SdHt3Mck%2BwUnxwTLSX2NJqTdLOTNMfqgebsCJAiBiyxAlg6ys3%2BTO8MoRcXFk1ZwhTOm5OeJGlQ2aCC2B1SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMAP%2B9xqfIre%2BAj4yKtwDtSoTDgOPo6skNFZbK3TZ1uQNJr6CAGn0lYlAQANr8%2Bs9opB6zrkAFJy0%2BUwj3E8TCZvao8i1W%2FAuIhhaM%2BtvdSRe1FGXVQqemEUsA%2BXi7FmN9g5TDaa9Cn4FAaInrXQ0TC44QXYfwESzjQczxTUu2eaeAngCdsuV81a0Mw2lAyjni531vAfIuSsh%2FliMdn4Vz%2FPT1oKgjEXkVfA3l3w5XUhbQ3YLZo5rWpW6iYZTe7a0fyG9DnjpPxUxYkM2XBE5MUKS2s5MU3Uky4wSpUoEpmWW%2F4O5Ji4LVGAWujwFMCHABe3j07YPaD2uc%2BP2j9gE3OHqku%2BgsuFjEvld2vcapwwYienyFO9KgdH6i80rscKtoeKBPxMK7Wsi3NV8w3I%2BVZwQJ%2BCWHPif2uoWiBqtdLwD0g%2Ffl3dqMJO%2F6b7pjaLpjPm%2Bwp5schUzioVOs5mRrK3xqqwnpyn%2Fu7oVmNdEoaqjRnuBxMRXY3KKSuzUzfOaJbNM1%2F%2Fa5FxZHqbTU4W2cvZC8yxtAcsgZuSqa66DH7iegvBHzjm5p%2F%2FTJZasjsX91G6M%2BOpGqEuxHtZgU53QbmNmGsJlzeVYoD%2FSiBDLkdCSdiJlzhPb6eT7uSnod1ZNWlebgljplJWv3rQwo8i6vgY6pgGc9Da1g5cwKdKfIUaS%2B%2FdV9xbUPjpuPQwT94uyM%2FmAdmv9rSJW0iPJBzi47600x27CGXfZHaCGkIcVYnTwtUIC8WsXNma%2BG0ZDPNBNsvh6Z0lYCIuL1yjG4e37pUrF5HkKMfoBkxhEOcyqJH8gOnmwS9X42TED9giTvF6gkzhwb05N6IlNdbgIYBoc9DPj75kbqjaefMJ%2BrhEu9CEr8n16Rm%2B1goA1&X-Amz-Signature=9f67ba29a7e4c1c46e60aac500e206235eeeedea9a367336a8588398b880d489&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIBEC2G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICRo6E4SdHt3Mck%2BwUnxwTLSX2NJqTdLOTNMfqgebsCJAiBiyxAlg6ys3%2BTO8MoRcXFk1ZwhTOm5OeJGlQ2aCC2B1SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMAP%2B9xqfIre%2BAj4yKtwDtSoTDgOPo6skNFZbK3TZ1uQNJr6CAGn0lYlAQANr8%2Bs9opB6zrkAFJy0%2BUwj3E8TCZvao8i1W%2FAuIhhaM%2BtvdSRe1FGXVQqemEUsA%2BXi7FmN9g5TDaa9Cn4FAaInrXQ0TC44QXYfwESzjQczxTUu2eaeAngCdsuV81a0Mw2lAyjni531vAfIuSsh%2FliMdn4Vz%2FPT1oKgjEXkVfA3l3w5XUhbQ3YLZo5rWpW6iYZTe7a0fyG9DnjpPxUxYkM2XBE5MUKS2s5MU3Uky4wSpUoEpmWW%2F4O5Ji4LVGAWujwFMCHABe3j07YPaD2uc%2BP2j9gE3OHqku%2BgsuFjEvld2vcapwwYienyFO9KgdH6i80rscKtoeKBPxMK7Wsi3NV8w3I%2BVZwQJ%2BCWHPif2uoWiBqtdLwD0g%2Ffl3dqMJO%2F6b7pjaLpjPm%2Bwp5schUzioVOs5mRrK3xqqwnpyn%2Fu7oVmNdEoaqjRnuBxMRXY3KKSuzUzfOaJbNM1%2F%2Fa5FxZHqbTU4W2cvZC8yxtAcsgZuSqa66DH7iegvBHzjm5p%2F%2FTJZasjsX91G6M%2BOpGqEuxHtZgU53QbmNmGsJlzeVYoD%2FSiBDLkdCSdiJlzhPb6eT7uSnod1ZNWlebgljplJWv3rQwo8i6vgY6pgGc9Da1g5cwKdKfIUaS%2B%2FdV9xbUPjpuPQwT94uyM%2FmAdmv9rSJW0iPJBzi47600x27CGXfZHaCGkIcVYnTwtUIC8WsXNma%2BG0ZDPNBNsvh6Z0lYCIuL1yjG4e37pUrF5HkKMfoBkxhEOcyqJH8gOnmwS9X42TED9giTvF6gkzhwb05N6IlNdbgIYBoc9DPj75kbqjaefMJ%2BrhEu9CEr8n16Rm%2B1goA1&X-Amz-Signature=dbe3bb7a2c78c4a2751a138b5252002d636e9cf483e06d6e4b43e21201254149&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIBEC2G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICRo6E4SdHt3Mck%2BwUnxwTLSX2NJqTdLOTNMfqgebsCJAiBiyxAlg6ys3%2BTO8MoRcXFk1ZwhTOm5OeJGlQ2aCC2B1SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMAP%2B9xqfIre%2BAj4yKtwDtSoTDgOPo6skNFZbK3TZ1uQNJr6CAGn0lYlAQANr8%2Bs9opB6zrkAFJy0%2BUwj3E8TCZvao8i1W%2FAuIhhaM%2BtvdSRe1FGXVQqemEUsA%2BXi7FmN9g5TDaa9Cn4FAaInrXQ0TC44QXYfwESzjQczxTUu2eaeAngCdsuV81a0Mw2lAyjni531vAfIuSsh%2FliMdn4Vz%2FPT1oKgjEXkVfA3l3w5XUhbQ3YLZo5rWpW6iYZTe7a0fyG9DnjpPxUxYkM2XBE5MUKS2s5MU3Uky4wSpUoEpmWW%2F4O5Ji4LVGAWujwFMCHABe3j07YPaD2uc%2BP2j9gE3OHqku%2BgsuFjEvld2vcapwwYienyFO9KgdH6i80rscKtoeKBPxMK7Wsi3NV8w3I%2BVZwQJ%2BCWHPif2uoWiBqtdLwD0g%2Ffl3dqMJO%2F6b7pjaLpjPm%2Bwp5schUzioVOs5mRrK3xqqwnpyn%2Fu7oVmNdEoaqjRnuBxMRXY3KKSuzUzfOaJbNM1%2F%2Fa5FxZHqbTU4W2cvZC8yxtAcsgZuSqa66DH7iegvBHzjm5p%2F%2FTJZasjsX91G6M%2BOpGqEuxHtZgU53QbmNmGsJlzeVYoD%2FSiBDLkdCSdiJlzhPb6eT7uSnod1ZNWlebgljplJWv3rQwo8i6vgY6pgGc9Da1g5cwKdKfIUaS%2B%2FdV9xbUPjpuPQwT94uyM%2FmAdmv9rSJW0iPJBzi47600x27CGXfZHaCGkIcVYnTwtUIC8WsXNma%2BG0ZDPNBNsvh6Z0lYCIuL1yjG4e37pUrF5HkKMfoBkxhEOcyqJH8gOnmwS9X42TED9giTvF6gkzhwb05N6IlNdbgIYBoc9DPj75kbqjaefMJ%2BrhEu9CEr8n16Rm%2B1goA1&X-Amz-Signature=750c1441351fe49d605cbdd4ed8a68d3442b61b4cc3f5eb712e3c6a35f94b00b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIBEC2G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICRo6E4SdHt3Mck%2BwUnxwTLSX2NJqTdLOTNMfqgebsCJAiBiyxAlg6ys3%2BTO8MoRcXFk1ZwhTOm5OeJGlQ2aCC2B1SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMAP%2B9xqfIre%2BAj4yKtwDtSoTDgOPo6skNFZbK3TZ1uQNJr6CAGn0lYlAQANr8%2Bs9opB6zrkAFJy0%2BUwj3E8TCZvao8i1W%2FAuIhhaM%2BtvdSRe1FGXVQqemEUsA%2BXi7FmN9g5TDaa9Cn4FAaInrXQ0TC44QXYfwESzjQczxTUu2eaeAngCdsuV81a0Mw2lAyjni531vAfIuSsh%2FliMdn4Vz%2FPT1oKgjEXkVfA3l3w5XUhbQ3YLZo5rWpW6iYZTe7a0fyG9DnjpPxUxYkM2XBE5MUKS2s5MU3Uky4wSpUoEpmWW%2F4O5Ji4LVGAWujwFMCHABe3j07YPaD2uc%2BP2j9gE3OHqku%2BgsuFjEvld2vcapwwYienyFO9KgdH6i80rscKtoeKBPxMK7Wsi3NV8w3I%2BVZwQJ%2BCWHPif2uoWiBqtdLwD0g%2Ffl3dqMJO%2F6b7pjaLpjPm%2Bwp5schUzioVOs5mRrK3xqqwnpyn%2Fu7oVmNdEoaqjRnuBxMRXY3KKSuzUzfOaJbNM1%2F%2Fa5FxZHqbTU4W2cvZC8yxtAcsgZuSqa66DH7iegvBHzjm5p%2F%2FTJZasjsX91G6M%2BOpGqEuxHtZgU53QbmNmGsJlzeVYoD%2FSiBDLkdCSdiJlzhPb6eT7uSnod1ZNWlebgljplJWv3rQwo8i6vgY6pgGc9Da1g5cwKdKfIUaS%2B%2FdV9xbUPjpuPQwT94uyM%2FmAdmv9rSJW0iPJBzi47600x27CGXfZHaCGkIcVYnTwtUIC8WsXNma%2BG0ZDPNBNsvh6Z0lYCIuL1yjG4e37pUrF5HkKMfoBkxhEOcyqJH8gOnmwS9X42TED9giTvF6gkzhwb05N6IlNdbgIYBoc9DPj75kbqjaefMJ%2BrhEu9CEr8n16Rm%2B1goA1&X-Amz-Signature=ffc04ce2aa47520e7d7e1760ce7870bae0ac17aa055aa3a10d752f94b4245479&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIBEC2G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICRo6E4SdHt3Mck%2BwUnxwTLSX2NJqTdLOTNMfqgebsCJAiBiyxAlg6ys3%2BTO8MoRcXFk1ZwhTOm5OeJGlQ2aCC2B1SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMAP%2B9xqfIre%2BAj4yKtwDtSoTDgOPo6skNFZbK3TZ1uQNJr6CAGn0lYlAQANr8%2Bs9opB6zrkAFJy0%2BUwj3E8TCZvao8i1W%2FAuIhhaM%2BtvdSRe1FGXVQqemEUsA%2BXi7FmN9g5TDaa9Cn4FAaInrXQ0TC44QXYfwESzjQczxTUu2eaeAngCdsuV81a0Mw2lAyjni531vAfIuSsh%2FliMdn4Vz%2FPT1oKgjEXkVfA3l3w5XUhbQ3YLZo5rWpW6iYZTe7a0fyG9DnjpPxUxYkM2XBE5MUKS2s5MU3Uky4wSpUoEpmWW%2F4O5Ji4LVGAWujwFMCHABe3j07YPaD2uc%2BP2j9gE3OHqku%2BgsuFjEvld2vcapwwYienyFO9KgdH6i80rscKtoeKBPxMK7Wsi3NV8w3I%2BVZwQJ%2BCWHPif2uoWiBqtdLwD0g%2Ffl3dqMJO%2F6b7pjaLpjPm%2Bwp5schUzioVOs5mRrK3xqqwnpyn%2Fu7oVmNdEoaqjRnuBxMRXY3KKSuzUzfOaJbNM1%2F%2Fa5FxZHqbTU4W2cvZC8yxtAcsgZuSqa66DH7iegvBHzjm5p%2F%2FTJZasjsX91G6M%2BOpGqEuxHtZgU53QbmNmGsJlzeVYoD%2FSiBDLkdCSdiJlzhPb6eT7uSnod1ZNWlebgljplJWv3rQwo8i6vgY6pgGc9Da1g5cwKdKfIUaS%2B%2FdV9xbUPjpuPQwT94uyM%2FmAdmv9rSJW0iPJBzi47600x27CGXfZHaCGkIcVYnTwtUIC8WsXNma%2BG0ZDPNBNsvh6Z0lYCIuL1yjG4e37pUrF5HkKMfoBkxhEOcyqJH8gOnmwS9X42TED9giTvF6gkzhwb05N6IlNdbgIYBoc9DPj75kbqjaefMJ%2BrhEu9CEr8n16Rm%2B1goA1&X-Amz-Signature=03ab0988269d5f9432a7e006d8b4d0bc53e6e8bb01a9dfa358f56ba0e44a7d30&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
