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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMO6OT4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4crzo3I9abgyv68MpqjR2JjS6JSjZqr9Tr0CO%2FUVJAiBnm83459CIVtLn375Es7CTU%2BRf0DzBXAaspMj2IoeW9yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM38CfTZZKNRKMmMU2KtwDebERQ3B9ZJggXnybR%2Fa0Xy%2BvMlO6OGE2bv8WGC1p%2BDCb1x0nte5I%2BE7%2FQr4915ZLrojZzShWYCKqWWB9GDtLfKIzcoh7OVWQism4kMYsie57EpfLSgWGw0%2BdbeYjor6XbLOC%2F4JPru%2F95tKNs2IV5c6Rrr8jMPlyRGXB%2BGbgvO%2FAzX%2ByZgn6m2%2BPTCaSKbJ9efxSLdJZluMtw26sIdg%2F7h8TlYEG3TwWovAm0dT%2FPy811pOx7vt%2BRQyLAdU5YON97caRrplWcgauX7gxxotd4si8DJpSXRgijpgfxOpgWbSzy3eeGDhi9nFN4ieCwvksDOgR%2BT4JkEtIf04NmdjecQzXgORcVAVrf6I38%2Bc6wBepjthUF9P8Rh3pQCMjoMfLW1dMZ7PdATIGq%2BBhQYrInZDihtA%2FgRusBZIKipIW2HVjh6%2FIcT%2BlEzpWkhYqNI1qFFfup7qAlsxvp21tU8kcNLYNTRPtXhR%2BlkCiPvdC6DtTQLEU4%2FIaN9Wyu%2FMIW3tzo9T6jRObB6SKIJ55xD7CFBzLqUFuQk64sx%2FqZofzEBAmKa6Xq13CK1%2FMlu1gY6%2FUNbBOWnLb3i4Ux8kdy09KjHn9cvnrE5D%2BcyaUMQ3QEd%2FBz0JA%2FjYBOhZjIjsw6MGowQY6pgEsPNK9Ya0GFV8g%2BcdvpQ2ZZH36UJR19CA0QkDaFMNGMUKhjTeWdRZoi0BxAg%2FRkHsTdndSBhwrISSpcPcpxwviPxUq67lP9I09AivvRUAu1bhEK4bCNnjsUIXtTqSAsT916fr2jcZW%2BTrrHu%2BDf7hbXkgEa5thLgxRsnSnnaZfPnQ54WG1ll2vXFWFbUU2BBH9vQh8KTGx2q5m6qf8U3xoWyBHKz44&X-Amz-Signature=1c30d490283088b9c7523442f46ef12b896532f0fa560dcda739ee1fa27bbbd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMO6OT4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4crzo3I9abgyv68MpqjR2JjS6JSjZqr9Tr0CO%2FUVJAiBnm83459CIVtLn375Es7CTU%2BRf0DzBXAaspMj2IoeW9yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM38CfTZZKNRKMmMU2KtwDebERQ3B9ZJggXnybR%2Fa0Xy%2BvMlO6OGE2bv8WGC1p%2BDCb1x0nte5I%2BE7%2FQr4915ZLrojZzShWYCKqWWB9GDtLfKIzcoh7OVWQism4kMYsie57EpfLSgWGw0%2BdbeYjor6XbLOC%2F4JPru%2F95tKNs2IV5c6Rrr8jMPlyRGXB%2BGbgvO%2FAzX%2ByZgn6m2%2BPTCaSKbJ9efxSLdJZluMtw26sIdg%2F7h8TlYEG3TwWovAm0dT%2FPy811pOx7vt%2BRQyLAdU5YON97caRrplWcgauX7gxxotd4si8DJpSXRgijpgfxOpgWbSzy3eeGDhi9nFN4ieCwvksDOgR%2BT4JkEtIf04NmdjecQzXgORcVAVrf6I38%2Bc6wBepjthUF9P8Rh3pQCMjoMfLW1dMZ7PdATIGq%2BBhQYrInZDihtA%2FgRusBZIKipIW2HVjh6%2FIcT%2BlEzpWkhYqNI1qFFfup7qAlsxvp21tU8kcNLYNTRPtXhR%2BlkCiPvdC6DtTQLEU4%2FIaN9Wyu%2FMIW3tzo9T6jRObB6SKIJ55xD7CFBzLqUFuQk64sx%2FqZofzEBAmKa6Xq13CK1%2FMlu1gY6%2FUNbBOWnLb3i4Ux8kdy09KjHn9cvnrE5D%2BcyaUMQ3QEd%2FBz0JA%2FjYBOhZjIjsw6MGowQY6pgEsPNK9Ya0GFV8g%2BcdvpQ2ZZH36UJR19CA0QkDaFMNGMUKhjTeWdRZoi0BxAg%2FRkHsTdndSBhwrISSpcPcpxwviPxUq67lP9I09AivvRUAu1bhEK4bCNnjsUIXtTqSAsT916fr2jcZW%2BTrrHu%2BDf7hbXkgEa5thLgxRsnSnnaZfPnQ54WG1ll2vXFWFbUU2BBH9vQh8KTGx2q5m6qf8U3xoWyBHKz44&X-Amz-Signature=cf7878fdc65917fea650ce6d4ba5c377e5439584bb52bdb3fae31debf3f6536a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMO6OT4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4crzo3I9abgyv68MpqjR2JjS6JSjZqr9Tr0CO%2FUVJAiBnm83459CIVtLn375Es7CTU%2BRf0DzBXAaspMj2IoeW9yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM38CfTZZKNRKMmMU2KtwDebERQ3B9ZJggXnybR%2Fa0Xy%2BvMlO6OGE2bv8WGC1p%2BDCb1x0nte5I%2BE7%2FQr4915ZLrojZzShWYCKqWWB9GDtLfKIzcoh7OVWQism4kMYsie57EpfLSgWGw0%2BdbeYjor6XbLOC%2F4JPru%2F95tKNs2IV5c6Rrr8jMPlyRGXB%2BGbgvO%2FAzX%2ByZgn6m2%2BPTCaSKbJ9efxSLdJZluMtw26sIdg%2F7h8TlYEG3TwWovAm0dT%2FPy811pOx7vt%2BRQyLAdU5YON97caRrplWcgauX7gxxotd4si8DJpSXRgijpgfxOpgWbSzy3eeGDhi9nFN4ieCwvksDOgR%2BT4JkEtIf04NmdjecQzXgORcVAVrf6I38%2Bc6wBepjthUF9P8Rh3pQCMjoMfLW1dMZ7PdATIGq%2BBhQYrInZDihtA%2FgRusBZIKipIW2HVjh6%2FIcT%2BlEzpWkhYqNI1qFFfup7qAlsxvp21tU8kcNLYNTRPtXhR%2BlkCiPvdC6DtTQLEU4%2FIaN9Wyu%2FMIW3tzo9T6jRObB6SKIJ55xD7CFBzLqUFuQk64sx%2FqZofzEBAmKa6Xq13CK1%2FMlu1gY6%2FUNbBOWnLb3i4Ux8kdy09KjHn9cvnrE5D%2BcyaUMQ3QEd%2FBz0JA%2FjYBOhZjIjsw6MGowQY6pgEsPNK9Ya0GFV8g%2BcdvpQ2ZZH36UJR19CA0QkDaFMNGMUKhjTeWdRZoi0BxAg%2FRkHsTdndSBhwrISSpcPcpxwviPxUq67lP9I09AivvRUAu1bhEK4bCNnjsUIXtTqSAsT916fr2jcZW%2BTrrHu%2BDf7hbXkgEa5thLgxRsnSnnaZfPnQ54WG1ll2vXFWFbUU2BBH9vQh8KTGx2q5m6qf8U3xoWyBHKz44&X-Amz-Signature=2a84137ce29db9a82483c391bdf9d851cd7f438a358c24abbd3da66c388bc381&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMO6OT4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4crzo3I9abgyv68MpqjR2JjS6JSjZqr9Tr0CO%2FUVJAiBnm83459CIVtLn375Es7CTU%2BRf0DzBXAaspMj2IoeW9yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM38CfTZZKNRKMmMU2KtwDebERQ3B9ZJggXnybR%2Fa0Xy%2BvMlO6OGE2bv8WGC1p%2BDCb1x0nte5I%2BE7%2FQr4915ZLrojZzShWYCKqWWB9GDtLfKIzcoh7OVWQism4kMYsie57EpfLSgWGw0%2BdbeYjor6XbLOC%2F4JPru%2F95tKNs2IV5c6Rrr8jMPlyRGXB%2BGbgvO%2FAzX%2ByZgn6m2%2BPTCaSKbJ9efxSLdJZluMtw26sIdg%2F7h8TlYEG3TwWovAm0dT%2FPy811pOx7vt%2BRQyLAdU5YON97caRrplWcgauX7gxxotd4si8DJpSXRgijpgfxOpgWbSzy3eeGDhi9nFN4ieCwvksDOgR%2BT4JkEtIf04NmdjecQzXgORcVAVrf6I38%2Bc6wBepjthUF9P8Rh3pQCMjoMfLW1dMZ7PdATIGq%2BBhQYrInZDihtA%2FgRusBZIKipIW2HVjh6%2FIcT%2BlEzpWkhYqNI1qFFfup7qAlsxvp21tU8kcNLYNTRPtXhR%2BlkCiPvdC6DtTQLEU4%2FIaN9Wyu%2FMIW3tzo9T6jRObB6SKIJ55xD7CFBzLqUFuQk64sx%2FqZofzEBAmKa6Xq13CK1%2FMlu1gY6%2FUNbBOWnLb3i4Ux8kdy09KjHn9cvnrE5D%2BcyaUMQ3QEd%2FBz0JA%2FjYBOhZjIjsw6MGowQY6pgEsPNK9Ya0GFV8g%2BcdvpQ2ZZH36UJR19CA0QkDaFMNGMUKhjTeWdRZoi0BxAg%2FRkHsTdndSBhwrISSpcPcpxwviPxUq67lP9I09AivvRUAu1bhEK4bCNnjsUIXtTqSAsT916fr2jcZW%2BTrrHu%2BDf7hbXkgEa5thLgxRsnSnnaZfPnQ54WG1ll2vXFWFbUU2BBH9vQh8KTGx2q5m6qf8U3xoWyBHKz44&X-Amz-Signature=98cad2177ce0035c070d09c556552ce95411bcde654dd9f755835a293bcc79d9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMO6OT4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4crzo3I9abgyv68MpqjR2JjS6JSjZqr9Tr0CO%2FUVJAiBnm83459CIVtLn375Es7CTU%2BRf0DzBXAaspMj2IoeW9yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM38CfTZZKNRKMmMU2KtwDebERQ3B9ZJggXnybR%2Fa0Xy%2BvMlO6OGE2bv8WGC1p%2BDCb1x0nte5I%2BE7%2FQr4915ZLrojZzShWYCKqWWB9GDtLfKIzcoh7OVWQism4kMYsie57EpfLSgWGw0%2BdbeYjor6XbLOC%2F4JPru%2F95tKNs2IV5c6Rrr8jMPlyRGXB%2BGbgvO%2FAzX%2ByZgn6m2%2BPTCaSKbJ9efxSLdJZluMtw26sIdg%2F7h8TlYEG3TwWovAm0dT%2FPy811pOx7vt%2BRQyLAdU5YON97caRrplWcgauX7gxxotd4si8DJpSXRgijpgfxOpgWbSzy3eeGDhi9nFN4ieCwvksDOgR%2BT4JkEtIf04NmdjecQzXgORcVAVrf6I38%2Bc6wBepjthUF9P8Rh3pQCMjoMfLW1dMZ7PdATIGq%2BBhQYrInZDihtA%2FgRusBZIKipIW2HVjh6%2FIcT%2BlEzpWkhYqNI1qFFfup7qAlsxvp21tU8kcNLYNTRPtXhR%2BlkCiPvdC6DtTQLEU4%2FIaN9Wyu%2FMIW3tzo9T6jRObB6SKIJ55xD7CFBzLqUFuQk64sx%2FqZofzEBAmKa6Xq13CK1%2FMlu1gY6%2FUNbBOWnLb3i4Ux8kdy09KjHn9cvnrE5D%2BcyaUMQ3QEd%2FBz0JA%2FjYBOhZjIjsw6MGowQY6pgEsPNK9Ya0GFV8g%2BcdvpQ2ZZH36UJR19CA0QkDaFMNGMUKhjTeWdRZoi0BxAg%2FRkHsTdndSBhwrISSpcPcpxwviPxUq67lP9I09AivvRUAu1bhEK4bCNnjsUIXtTqSAsT916fr2jcZW%2BTrrHu%2BDf7hbXkgEa5thLgxRsnSnnaZfPnQ54WG1ll2vXFWFbUU2BBH9vQh8KTGx2q5m6qf8U3xoWyBHKz44&X-Amz-Signature=65985d6927c5781a2977a922a57c3f4b100a33ceb8563fc1b18e2737438da8b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMO6OT4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4crzo3I9abgyv68MpqjR2JjS6JSjZqr9Tr0CO%2FUVJAiBnm83459CIVtLn375Es7CTU%2BRf0DzBXAaspMj2IoeW9yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM38CfTZZKNRKMmMU2KtwDebERQ3B9ZJggXnybR%2Fa0Xy%2BvMlO6OGE2bv8WGC1p%2BDCb1x0nte5I%2BE7%2FQr4915ZLrojZzShWYCKqWWB9GDtLfKIzcoh7OVWQism4kMYsie57EpfLSgWGw0%2BdbeYjor6XbLOC%2F4JPru%2F95tKNs2IV5c6Rrr8jMPlyRGXB%2BGbgvO%2FAzX%2ByZgn6m2%2BPTCaSKbJ9efxSLdJZluMtw26sIdg%2F7h8TlYEG3TwWovAm0dT%2FPy811pOx7vt%2BRQyLAdU5YON97caRrplWcgauX7gxxotd4si8DJpSXRgijpgfxOpgWbSzy3eeGDhi9nFN4ieCwvksDOgR%2BT4JkEtIf04NmdjecQzXgORcVAVrf6I38%2Bc6wBepjthUF9P8Rh3pQCMjoMfLW1dMZ7PdATIGq%2BBhQYrInZDihtA%2FgRusBZIKipIW2HVjh6%2FIcT%2BlEzpWkhYqNI1qFFfup7qAlsxvp21tU8kcNLYNTRPtXhR%2BlkCiPvdC6DtTQLEU4%2FIaN9Wyu%2FMIW3tzo9T6jRObB6SKIJ55xD7CFBzLqUFuQk64sx%2FqZofzEBAmKa6Xq13CK1%2FMlu1gY6%2FUNbBOWnLb3i4Ux8kdy09KjHn9cvnrE5D%2BcyaUMQ3QEd%2FBz0JA%2FjYBOhZjIjsw6MGowQY6pgEsPNK9Ya0GFV8g%2BcdvpQ2ZZH36UJR19CA0QkDaFMNGMUKhjTeWdRZoi0BxAg%2FRkHsTdndSBhwrISSpcPcpxwviPxUq67lP9I09AivvRUAu1bhEK4bCNnjsUIXtTqSAsT916fr2jcZW%2BTrrHu%2BDf7hbXkgEa5thLgxRsnSnnaZfPnQ54WG1ll2vXFWFbUU2BBH9vQh8KTGx2q5m6qf8U3xoWyBHKz44&X-Amz-Signature=5755e6ea2bed145ff57719fabbd0b8a8fe7c525123055033f0f7acae82e5d409&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMO6OT4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4crzo3I9abgyv68MpqjR2JjS6JSjZqr9Tr0CO%2FUVJAiBnm83459CIVtLn375Es7CTU%2BRf0DzBXAaspMj2IoeW9yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM38CfTZZKNRKMmMU2KtwDebERQ3B9ZJggXnybR%2Fa0Xy%2BvMlO6OGE2bv8WGC1p%2BDCb1x0nte5I%2BE7%2FQr4915ZLrojZzShWYCKqWWB9GDtLfKIzcoh7OVWQism4kMYsie57EpfLSgWGw0%2BdbeYjor6XbLOC%2F4JPru%2F95tKNs2IV5c6Rrr8jMPlyRGXB%2BGbgvO%2FAzX%2ByZgn6m2%2BPTCaSKbJ9efxSLdJZluMtw26sIdg%2F7h8TlYEG3TwWovAm0dT%2FPy811pOx7vt%2BRQyLAdU5YON97caRrplWcgauX7gxxotd4si8DJpSXRgijpgfxOpgWbSzy3eeGDhi9nFN4ieCwvksDOgR%2BT4JkEtIf04NmdjecQzXgORcVAVrf6I38%2Bc6wBepjthUF9P8Rh3pQCMjoMfLW1dMZ7PdATIGq%2BBhQYrInZDihtA%2FgRusBZIKipIW2HVjh6%2FIcT%2BlEzpWkhYqNI1qFFfup7qAlsxvp21tU8kcNLYNTRPtXhR%2BlkCiPvdC6DtTQLEU4%2FIaN9Wyu%2FMIW3tzo9T6jRObB6SKIJ55xD7CFBzLqUFuQk64sx%2FqZofzEBAmKa6Xq13CK1%2FMlu1gY6%2FUNbBOWnLb3i4Ux8kdy09KjHn9cvnrE5D%2BcyaUMQ3QEd%2FBz0JA%2FjYBOhZjIjsw6MGowQY6pgEsPNK9Ya0GFV8g%2BcdvpQ2ZZH36UJR19CA0QkDaFMNGMUKhjTeWdRZoi0BxAg%2FRkHsTdndSBhwrISSpcPcpxwviPxUq67lP9I09AivvRUAu1bhEK4bCNnjsUIXtTqSAsT916fr2jcZW%2BTrrHu%2BDf7hbXkgEa5thLgxRsnSnnaZfPnQ54WG1ll2vXFWFbUU2BBH9vQh8KTGx2q5m6qf8U3xoWyBHKz44&X-Amz-Signature=6e8f36b14315691e2b403609c5eb718c8f1f9f87c54db1f267ff0cc77c47c0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
