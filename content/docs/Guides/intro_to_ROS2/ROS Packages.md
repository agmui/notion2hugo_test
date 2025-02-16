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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OMMK53%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD4i2iQFaypbPlqb75EvbejkUaCbRYG6z7XoGnSWBwa4AIgSRn190tS9eqAkO6Kjj1J9mFNfL42ogX7FmrUgF1xlnIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLCHfkliZgWqZqPynCrcA3yerISu51W%2B2uhroeu4SRLZfJw8n7Q0LQl%2FMP4P%2BAhql0Arjbn0bT%2Fyg3JAz2%2FvpBlVajvBxvb4oURjPrvrhxvjCJ6ekimGqiQE1hGz9%2BL6zzj7StBcIDeq8h3ky6cipSrMpERgf2siLMiCJWOn7%2FVKkqM7u3M%2FGMOMPho24XzBpPzwTD4c3dlqMaNIOWtLjdr1B%2B9Q4a7linmsq9TnTjZv6XuQQedlrTYcV2RZFOAIiyMWFQmaqOsFQNzqeSIh3w0AALTniurnI3BP1v0HCZiM%2FWnnMhDKpCLmb4r3Cb1gsyBAqw9O1y4n3irrSPjoOr5jvUc%2B8%2FyecHQsWPVQYHts2oP%2BGDAsCB5qycEMjZyKhLMC0XOUiA2r0vQJne7gIILF4%2FFx3RSuzt49I5MdrOY9yMcAu8yhC8D6zpE81YjLsx4%2F%2BHn5QYPV7%2FgqSNHlM9E5S4tfJ4VSEHgmLAdIKB2EFN%2Fc7Tn1I09H7PQLf3PBmut5eQa88qTlPDt0Qj37FXmZ4xbkLuSKefUdS0dTRFqWZcBzi9gqSj9JsbKVO0q4Mq1ViIADdWIxCOS2VSW1sunig0j5QkEENITaDp5Kv4SXV15s7lCDnIryA%2FbpWVcFDJsXlY2izgsef5f4MKTIyb0GOqUBwJF2%2FRG2LtOpRmMWg7ONZzi3s0WFN6a%2FW71FNCCiyYlkLVvHyeoVqeFC4%2FqgYoZ1pc7cNWTvTcgQ4n9EJ%2FDNF8IDTqXBSDjNQSZ5c4fZxmfkBATE46Kp5ihROfmzR2whRqU5%2FcVWCPuHHn95gJcdbHxNSjYPM4hdrQicPv7qAz%2FzK4aXkEEeDUlpqiC4jf2IHoMCEh51IFLd7WsY9N2EEtwoBR83&X-Amz-Signature=4cfc29d057f481a8c762ac9034dd286746ff2bf5dd86b05f2d45f7657da2a345&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OMMK53%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD4i2iQFaypbPlqb75EvbejkUaCbRYG6z7XoGnSWBwa4AIgSRn190tS9eqAkO6Kjj1J9mFNfL42ogX7FmrUgF1xlnIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLCHfkliZgWqZqPynCrcA3yerISu51W%2B2uhroeu4SRLZfJw8n7Q0LQl%2FMP4P%2BAhql0Arjbn0bT%2Fyg3JAz2%2FvpBlVajvBxvb4oURjPrvrhxvjCJ6ekimGqiQE1hGz9%2BL6zzj7StBcIDeq8h3ky6cipSrMpERgf2siLMiCJWOn7%2FVKkqM7u3M%2FGMOMPho24XzBpPzwTD4c3dlqMaNIOWtLjdr1B%2B9Q4a7linmsq9TnTjZv6XuQQedlrTYcV2RZFOAIiyMWFQmaqOsFQNzqeSIh3w0AALTniurnI3BP1v0HCZiM%2FWnnMhDKpCLmb4r3Cb1gsyBAqw9O1y4n3irrSPjoOr5jvUc%2B8%2FyecHQsWPVQYHts2oP%2BGDAsCB5qycEMjZyKhLMC0XOUiA2r0vQJne7gIILF4%2FFx3RSuzt49I5MdrOY9yMcAu8yhC8D6zpE81YjLsx4%2F%2BHn5QYPV7%2FgqSNHlM9E5S4tfJ4VSEHgmLAdIKB2EFN%2Fc7Tn1I09H7PQLf3PBmut5eQa88qTlPDt0Qj37FXmZ4xbkLuSKefUdS0dTRFqWZcBzi9gqSj9JsbKVO0q4Mq1ViIADdWIxCOS2VSW1sunig0j5QkEENITaDp5Kv4SXV15s7lCDnIryA%2FbpWVcFDJsXlY2izgsef5f4MKTIyb0GOqUBwJF2%2FRG2LtOpRmMWg7ONZzi3s0WFN6a%2FW71FNCCiyYlkLVvHyeoVqeFC4%2FqgYoZ1pc7cNWTvTcgQ4n9EJ%2FDNF8IDTqXBSDjNQSZ5c4fZxmfkBATE46Kp5ihROfmzR2whRqU5%2FcVWCPuHHn95gJcdbHxNSjYPM4hdrQicPv7qAz%2FzK4aXkEEeDUlpqiC4jf2IHoMCEh51IFLd7WsY9N2EEtwoBR83&X-Amz-Signature=5b1141ee1a36d92a3d0d8beaf0ce866388d9f8b6bd5cc3a0d25678857af56b35&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OMMK53%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD4i2iQFaypbPlqb75EvbejkUaCbRYG6z7XoGnSWBwa4AIgSRn190tS9eqAkO6Kjj1J9mFNfL42ogX7FmrUgF1xlnIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLCHfkliZgWqZqPynCrcA3yerISu51W%2B2uhroeu4SRLZfJw8n7Q0LQl%2FMP4P%2BAhql0Arjbn0bT%2Fyg3JAz2%2FvpBlVajvBxvb4oURjPrvrhxvjCJ6ekimGqiQE1hGz9%2BL6zzj7StBcIDeq8h3ky6cipSrMpERgf2siLMiCJWOn7%2FVKkqM7u3M%2FGMOMPho24XzBpPzwTD4c3dlqMaNIOWtLjdr1B%2B9Q4a7linmsq9TnTjZv6XuQQedlrTYcV2RZFOAIiyMWFQmaqOsFQNzqeSIh3w0AALTniurnI3BP1v0HCZiM%2FWnnMhDKpCLmb4r3Cb1gsyBAqw9O1y4n3irrSPjoOr5jvUc%2B8%2FyecHQsWPVQYHts2oP%2BGDAsCB5qycEMjZyKhLMC0XOUiA2r0vQJne7gIILF4%2FFx3RSuzt49I5MdrOY9yMcAu8yhC8D6zpE81YjLsx4%2F%2BHn5QYPV7%2FgqSNHlM9E5S4tfJ4VSEHgmLAdIKB2EFN%2Fc7Tn1I09H7PQLf3PBmut5eQa88qTlPDt0Qj37FXmZ4xbkLuSKefUdS0dTRFqWZcBzi9gqSj9JsbKVO0q4Mq1ViIADdWIxCOS2VSW1sunig0j5QkEENITaDp5Kv4SXV15s7lCDnIryA%2FbpWVcFDJsXlY2izgsef5f4MKTIyb0GOqUBwJF2%2FRG2LtOpRmMWg7ONZzi3s0WFN6a%2FW71FNCCiyYlkLVvHyeoVqeFC4%2FqgYoZ1pc7cNWTvTcgQ4n9EJ%2FDNF8IDTqXBSDjNQSZ5c4fZxmfkBATE46Kp5ihROfmzR2whRqU5%2FcVWCPuHHn95gJcdbHxNSjYPM4hdrQicPv7qAz%2FzK4aXkEEeDUlpqiC4jf2IHoMCEh51IFLd7WsY9N2EEtwoBR83&X-Amz-Signature=5f496664e2d8e730cee90a151f19ee35a506b10328faa2d9f6b08c1047a9a950&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OMMK53%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD4i2iQFaypbPlqb75EvbejkUaCbRYG6z7XoGnSWBwa4AIgSRn190tS9eqAkO6Kjj1J9mFNfL42ogX7FmrUgF1xlnIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLCHfkliZgWqZqPynCrcA3yerISu51W%2B2uhroeu4SRLZfJw8n7Q0LQl%2FMP4P%2BAhql0Arjbn0bT%2Fyg3JAz2%2FvpBlVajvBxvb4oURjPrvrhxvjCJ6ekimGqiQE1hGz9%2BL6zzj7StBcIDeq8h3ky6cipSrMpERgf2siLMiCJWOn7%2FVKkqM7u3M%2FGMOMPho24XzBpPzwTD4c3dlqMaNIOWtLjdr1B%2B9Q4a7linmsq9TnTjZv6XuQQedlrTYcV2RZFOAIiyMWFQmaqOsFQNzqeSIh3w0AALTniurnI3BP1v0HCZiM%2FWnnMhDKpCLmb4r3Cb1gsyBAqw9O1y4n3irrSPjoOr5jvUc%2B8%2FyecHQsWPVQYHts2oP%2BGDAsCB5qycEMjZyKhLMC0XOUiA2r0vQJne7gIILF4%2FFx3RSuzt49I5MdrOY9yMcAu8yhC8D6zpE81YjLsx4%2F%2BHn5QYPV7%2FgqSNHlM9E5S4tfJ4VSEHgmLAdIKB2EFN%2Fc7Tn1I09H7PQLf3PBmut5eQa88qTlPDt0Qj37FXmZ4xbkLuSKefUdS0dTRFqWZcBzi9gqSj9JsbKVO0q4Mq1ViIADdWIxCOS2VSW1sunig0j5QkEENITaDp5Kv4SXV15s7lCDnIryA%2FbpWVcFDJsXlY2izgsef5f4MKTIyb0GOqUBwJF2%2FRG2LtOpRmMWg7ONZzi3s0WFN6a%2FW71FNCCiyYlkLVvHyeoVqeFC4%2FqgYoZ1pc7cNWTvTcgQ4n9EJ%2FDNF8IDTqXBSDjNQSZ5c4fZxmfkBATE46Kp5ihROfmzR2whRqU5%2FcVWCPuHHn95gJcdbHxNSjYPM4hdrQicPv7qAz%2FzK4aXkEEeDUlpqiC4jf2IHoMCEh51IFLd7WsY9N2EEtwoBR83&X-Amz-Signature=68fdd797a6e44b91d6c37737ec5dbe59d94bab421208998ee41c999da383701b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OMMK53%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD4i2iQFaypbPlqb75EvbejkUaCbRYG6z7XoGnSWBwa4AIgSRn190tS9eqAkO6Kjj1J9mFNfL42ogX7FmrUgF1xlnIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLCHfkliZgWqZqPynCrcA3yerISu51W%2B2uhroeu4SRLZfJw8n7Q0LQl%2FMP4P%2BAhql0Arjbn0bT%2Fyg3JAz2%2FvpBlVajvBxvb4oURjPrvrhxvjCJ6ekimGqiQE1hGz9%2BL6zzj7StBcIDeq8h3ky6cipSrMpERgf2siLMiCJWOn7%2FVKkqM7u3M%2FGMOMPho24XzBpPzwTD4c3dlqMaNIOWtLjdr1B%2B9Q4a7linmsq9TnTjZv6XuQQedlrTYcV2RZFOAIiyMWFQmaqOsFQNzqeSIh3w0AALTniurnI3BP1v0HCZiM%2FWnnMhDKpCLmb4r3Cb1gsyBAqw9O1y4n3irrSPjoOr5jvUc%2B8%2FyecHQsWPVQYHts2oP%2BGDAsCB5qycEMjZyKhLMC0XOUiA2r0vQJne7gIILF4%2FFx3RSuzt49I5MdrOY9yMcAu8yhC8D6zpE81YjLsx4%2F%2BHn5QYPV7%2FgqSNHlM9E5S4tfJ4VSEHgmLAdIKB2EFN%2Fc7Tn1I09H7PQLf3PBmut5eQa88qTlPDt0Qj37FXmZ4xbkLuSKefUdS0dTRFqWZcBzi9gqSj9JsbKVO0q4Mq1ViIADdWIxCOS2VSW1sunig0j5QkEENITaDp5Kv4SXV15s7lCDnIryA%2FbpWVcFDJsXlY2izgsef5f4MKTIyb0GOqUBwJF2%2FRG2LtOpRmMWg7ONZzi3s0WFN6a%2FW71FNCCiyYlkLVvHyeoVqeFC4%2FqgYoZ1pc7cNWTvTcgQ4n9EJ%2FDNF8IDTqXBSDjNQSZ5c4fZxmfkBATE46Kp5ihROfmzR2whRqU5%2FcVWCPuHHn95gJcdbHxNSjYPM4hdrQicPv7qAz%2FzK4aXkEEeDUlpqiC4jf2IHoMCEh51IFLd7WsY9N2EEtwoBR83&X-Amz-Signature=ae3c01b4bf38b462b984102373855085940f5a11fda37122415ef1e0d6044191&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OMMK53%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD4i2iQFaypbPlqb75EvbejkUaCbRYG6z7XoGnSWBwa4AIgSRn190tS9eqAkO6Kjj1J9mFNfL42ogX7FmrUgF1xlnIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLCHfkliZgWqZqPynCrcA3yerISu51W%2B2uhroeu4SRLZfJw8n7Q0LQl%2FMP4P%2BAhql0Arjbn0bT%2Fyg3JAz2%2FvpBlVajvBxvb4oURjPrvrhxvjCJ6ekimGqiQE1hGz9%2BL6zzj7StBcIDeq8h3ky6cipSrMpERgf2siLMiCJWOn7%2FVKkqM7u3M%2FGMOMPho24XzBpPzwTD4c3dlqMaNIOWtLjdr1B%2B9Q4a7linmsq9TnTjZv6XuQQedlrTYcV2RZFOAIiyMWFQmaqOsFQNzqeSIh3w0AALTniurnI3BP1v0HCZiM%2FWnnMhDKpCLmb4r3Cb1gsyBAqw9O1y4n3irrSPjoOr5jvUc%2B8%2FyecHQsWPVQYHts2oP%2BGDAsCB5qycEMjZyKhLMC0XOUiA2r0vQJne7gIILF4%2FFx3RSuzt49I5MdrOY9yMcAu8yhC8D6zpE81YjLsx4%2F%2BHn5QYPV7%2FgqSNHlM9E5S4tfJ4VSEHgmLAdIKB2EFN%2Fc7Tn1I09H7PQLf3PBmut5eQa88qTlPDt0Qj37FXmZ4xbkLuSKefUdS0dTRFqWZcBzi9gqSj9JsbKVO0q4Mq1ViIADdWIxCOS2VSW1sunig0j5QkEENITaDp5Kv4SXV15s7lCDnIryA%2FbpWVcFDJsXlY2izgsef5f4MKTIyb0GOqUBwJF2%2FRG2LtOpRmMWg7ONZzi3s0WFN6a%2FW71FNCCiyYlkLVvHyeoVqeFC4%2FqgYoZ1pc7cNWTvTcgQ4n9EJ%2FDNF8IDTqXBSDjNQSZ5c4fZxmfkBATE46Kp5ihROfmzR2whRqU5%2FcVWCPuHHn95gJcdbHxNSjYPM4hdrQicPv7qAz%2FzK4aXkEEeDUlpqiC4jf2IHoMCEh51IFLd7WsY9N2EEtwoBR83&X-Amz-Signature=218a99c6bf276753ad8974261d2eb91f5eb566bd42e5608cc090b419dbd282ad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OMMK53%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD4i2iQFaypbPlqb75EvbejkUaCbRYG6z7XoGnSWBwa4AIgSRn190tS9eqAkO6Kjj1J9mFNfL42ogX7FmrUgF1xlnIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLCHfkliZgWqZqPynCrcA3yerISu51W%2B2uhroeu4SRLZfJw8n7Q0LQl%2FMP4P%2BAhql0Arjbn0bT%2Fyg3JAz2%2FvpBlVajvBxvb4oURjPrvrhxvjCJ6ekimGqiQE1hGz9%2BL6zzj7StBcIDeq8h3ky6cipSrMpERgf2siLMiCJWOn7%2FVKkqM7u3M%2FGMOMPho24XzBpPzwTD4c3dlqMaNIOWtLjdr1B%2B9Q4a7linmsq9TnTjZv6XuQQedlrTYcV2RZFOAIiyMWFQmaqOsFQNzqeSIh3w0AALTniurnI3BP1v0HCZiM%2FWnnMhDKpCLmb4r3Cb1gsyBAqw9O1y4n3irrSPjoOr5jvUc%2B8%2FyecHQsWPVQYHts2oP%2BGDAsCB5qycEMjZyKhLMC0XOUiA2r0vQJne7gIILF4%2FFx3RSuzt49I5MdrOY9yMcAu8yhC8D6zpE81YjLsx4%2F%2BHn5QYPV7%2FgqSNHlM9E5S4tfJ4VSEHgmLAdIKB2EFN%2Fc7Tn1I09H7PQLf3PBmut5eQa88qTlPDt0Qj37FXmZ4xbkLuSKefUdS0dTRFqWZcBzi9gqSj9JsbKVO0q4Mq1ViIADdWIxCOS2VSW1sunig0j5QkEENITaDp5Kv4SXV15s7lCDnIryA%2FbpWVcFDJsXlY2izgsef5f4MKTIyb0GOqUBwJF2%2FRG2LtOpRmMWg7ONZzi3s0WFN6a%2FW71FNCCiyYlkLVvHyeoVqeFC4%2FqgYoZ1pc7cNWTvTcgQ4n9EJ%2FDNF8IDTqXBSDjNQSZ5c4fZxmfkBATE46Kp5ihROfmzR2whRqU5%2FcVWCPuHHn95gJcdbHxNSjYPM4hdrQicPv7qAz%2FzK4aXkEEeDUlpqiC4jf2IHoMCEh51IFLd7WsY9N2EEtwoBR83&X-Amz-Signature=a21dc34ba69442c996654cfe607a095150f2ea230e64cbd013fbbadde91f7956&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
