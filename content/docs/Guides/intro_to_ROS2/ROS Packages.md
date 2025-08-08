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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLDBJGY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH%2BE0gP%2FGSunpp8KwdB%2FmFJoSpVa3MzOFZf68qEfoOkpAiEAtIbjzSroaI4WxO4GfpDcXACEwVW9OLsO5yxhbNvKWJMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaJsHsDsLilASuVryrcA7O%2BNgIcAdyns94K2dgtQC6BIlA%2ByFKFYdkydleTSjo5dB6cHsBA2alPntqW2Chh45ML4x7uE6ZvCmDVJKEzK99rzTM7F%2BdT%2FQ0HYuaw0OQIP1DziPDJ7YMAw9eMJA0DO2c%2F2y5Kf%2FD%2Bnd35J5whRHm2ngruwyLlFmiRqGYTRhPwsQ7yyKj5XPjotIdb6QTu5d9ioiaNGsQfSa%2BFmTSZ2T4lZfAAno0YNxPGUjBrD45RTNFxNu6ljPn9MjzLUFWGVWqK9RvLp8%2Bs%2FZUO96vrv39ZIezhpzNhOWInU2c6x%2BXxNZA2q7Th0K7IGRPOn%2FwqUezrmetBEnWj4%2B%2FH6q6lCsfTRdBHo06vbe0LOKgVfu%2FJ492PnImwEKgaaonoULWU3Hsd4gMXlemg0ax1zcNYFr82tPHh5wcX1stPAJnK2NW6nhmpSwmF1grvJV7u8vsJ6ZPOHNv2NwmUOuESMBs%2BebIc9K9An29YtgwFSfZSsSIxXmESVLb6cSnDdo9Q29wZlX6wyHbVNNmBIC89nehtMK5L607Ca%2BfqKu5H3jCNlTOSs1fW1toQQSk0VAW8JhhIwxHDI1oADxYdRlI%2FUAG71d61jLFH7sKLSRVvi66lpnlszuB525FZSao6nmC9MLSf1sQGOqUBDDwsAjxmuJlMteXBH96s5AKLtktfZmBqeVWKUuYwPYF%2BjpwpXnHae5OzuOwWy1y9lukEqGWCq%2FKuolnu8Ck8OVPNM1iktr1%2FV118pHjUP516fafHhBuhUcnAPj8b6VBlEAyuC%2FNJFeDEQuH%2F9acwvyWiaaQTuuy1xyHFiH7vpMyQvzhj1ZsWCOjM9Pa%2BiV0K0WDlLomNpDIgc72BQSzD0qX4cCzD&X-Amz-Signature=583835eef488c0c6a711f523f714b1975f3e139ef1b3c6e96f23f57c6e60d79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLDBJGY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH%2BE0gP%2FGSunpp8KwdB%2FmFJoSpVa3MzOFZf68qEfoOkpAiEAtIbjzSroaI4WxO4GfpDcXACEwVW9OLsO5yxhbNvKWJMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaJsHsDsLilASuVryrcA7O%2BNgIcAdyns94K2dgtQC6BIlA%2ByFKFYdkydleTSjo5dB6cHsBA2alPntqW2Chh45ML4x7uE6ZvCmDVJKEzK99rzTM7F%2BdT%2FQ0HYuaw0OQIP1DziPDJ7YMAw9eMJA0DO2c%2F2y5Kf%2FD%2Bnd35J5whRHm2ngruwyLlFmiRqGYTRhPwsQ7yyKj5XPjotIdb6QTu5d9ioiaNGsQfSa%2BFmTSZ2T4lZfAAno0YNxPGUjBrD45RTNFxNu6ljPn9MjzLUFWGVWqK9RvLp8%2Bs%2FZUO96vrv39ZIezhpzNhOWInU2c6x%2BXxNZA2q7Th0K7IGRPOn%2FwqUezrmetBEnWj4%2B%2FH6q6lCsfTRdBHo06vbe0LOKgVfu%2FJ492PnImwEKgaaonoULWU3Hsd4gMXlemg0ax1zcNYFr82tPHh5wcX1stPAJnK2NW6nhmpSwmF1grvJV7u8vsJ6ZPOHNv2NwmUOuESMBs%2BebIc9K9An29YtgwFSfZSsSIxXmESVLb6cSnDdo9Q29wZlX6wyHbVNNmBIC89nehtMK5L607Ca%2BfqKu5H3jCNlTOSs1fW1toQQSk0VAW8JhhIwxHDI1oADxYdRlI%2FUAG71d61jLFH7sKLSRVvi66lpnlszuB525FZSao6nmC9MLSf1sQGOqUBDDwsAjxmuJlMteXBH96s5AKLtktfZmBqeVWKUuYwPYF%2BjpwpXnHae5OzuOwWy1y9lukEqGWCq%2FKuolnu8Ck8OVPNM1iktr1%2FV118pHjUP516fafHhBuhUcnAPj8b6VBlEAyuC%2FNJFeDEQuH%2F9acwvyWiaaQTuuy1xyHFiH7vpMyQvzhj1ZsWCOjM9Pa%2BiV0K0WDlLomNpDIgc72BQSzD0qX4cCzD&X-Amz-Signature=fc5828989b1e710d73bc02138d5fe3264a036e30bf340034f51dfaf4d1109579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLDBJGY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH%2BE0gP%2FGSunpp8KwdB%2FmFJoSpVa3MzOFZf68qEfoOkpAiEAtIbjzSroaI4WxO4GfpDcXACEwVW9OLsO5yxhbNvKWJMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaJsHsDsLilASuVryrcA7O%2BNgIcAdyns94K2dgtQC6BIlA%2ByFKFYdkydleTSjo5dB6cHsBA2alPntqW2Chh45ML4x7uE6ZvCmDVJKEzK99rzTM7F%2BdT%2FQ0HYuaw0OQIP1DziPDJ7YMAw9eMJA0DO2c%2F2y5Kf%2FD%2Bnd35J5whRHm2ngruwyLlFmiRqGYTRhPwsQ7yyKj5XPjotIdb6QTu5d9ioiaNGsQfSa%2BFmTSZ2T4lZfAAno0YNxPGUjBrD45RTNFxNu6ljPn9MjzLUFWGVWqK9RvLp8%2Bs%2FZUO96vrv39ZIezhpzNhOWInU2c6x%2BXxNZA2q7Th0K7IGRPOn%2FwqUezrmetBEnWj4%2B%2FH6q6lCsfTRdBHo06vbe0LOKgVfu%2FJ492PnImwEKgaaonoULWU3Hsd4gMXlemg0ax1zcNYFr82tPHh5wcX1stPAJnK2NW6nhmpSwmF1grvJV7u8vsJ6ZPOHNv2NwmUOuESMBs%2BebIc9K9An29YtgwFSfZSsSIxXmESVLb6cSnDdo9Q29wZlX6wyHbVNNmBIC89nehtMK5L607Ca%2BfqKu5H3jCNlTOSs1fW1toQQSk0VAW8JhhIwxHDI1oADxYdRlI%2FUAG71d61jLFH7sKLSRVvi66lpnlszuB525FZSao6nmC9MLSf1sQGOqUBDDwsAjxmuJlMteXBH96s5AKLtktfZmBqeVWKUuYwPYF%2BjpwpXnHae5OzuOwWy1y9lukEqGWCq%2FKuolnu8Ck8OVPNM1iktr1%2FV118pHjUP516fafHhBuhUcnAPj8b6VBlEAyuC%2FNJFeDEQuH%2F9acwvyWiaaQTuuy1xyHFiH7vpMyQvzhj1ZsWCOjM9Pa%2BiV0K0WDlLomNpDIgc72BQSzD0qX4cCzD&X-Amz-Signature=ce41b1088353a60e44bcea67dd915f9ce12df261c51869e246df084c5108500d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLDBJGY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH%2BE0gP%2FGSunpp8KwdB%2FmFJoSpVa3MzOFZf68qEfoOkpAiEAtIbjzSroaI4WxO4GfpDcXACEwVW9OLsO5yxhbNvKWJMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaJsHsDsLilASuVryrcA7O%2BNgIcAdyns94K2dgtQC6BIlA%2ByFKFYdkydleTSjo5dB6cHsBA2alPntqW2Chh45ML4x7uE6ZvCmDVJKEzK99rzTM7F%2BdT%2FQ0HYuaw0OQIP1DziPDJ7YMAw9eMJA0DO2c%2F2y5Kf%2FD%2Bnd35J5whRHm2ngruwyLlFmiRqGYTRhPwsQ7yyKj5XPjotIdb6QTu5d9ioiaNGsQfSa%2BFmTSZ2T4lZfAAno0YNxPGUjBrD45RTNFxNu6ljPn9MjzLUFWGVWqK9RvLp8%2Bs%2FZUO96vrv39ZIezhpzNhOWInU2c6x%2BXxNZA2q7Th0K7IGRPOn%2FwqUezrmetBEnWj4%2B%2FH6q6lCsfTRdBHo06vbe0LOKgVfu%2FJ492PnImwEKgaaonoULWU3Hsd4gMXlemg0ax1zcNYFr82tPHh5wcX1stPAJnK2NW6nhmpSwmF1grvJV7u8vsJ6ZPOHNv2NwmUOuESMBs%2BebIc9K9An29YtgwFSfZSsSIxXmESVLb6cSnDdo9Q29wZlX6wyHbVNNmBIC89nehtMK5L607Ca%2BfqKu5H3jCNlTOSs1fW1toQQSk0VAW8JhhIwxHDI1oADxYdRlI%2FUAG71d61jLFH7sKLSRVvi66lpnlszuB525FZSao6nmC9MLSf1sQGOqUBDDwsAjxmuJlMteXBH96s5AKLtktfZmBqeVWKUuYwPYF%2BjpwpXnHae5OzuOwWy1y9lukEqGWCq%2FKuolnu8Ck8OVPNM1iktr1%2FV118pHjUP516fafHhBuhUcnAPj8b6VBlEAyuC%2FNJFeDEQuH%2F9acwvyWiaaQTuuy1xyHFiH7vpMyQvzhj1ZsWCOjM9Pa%2BiV0K0WDlLomNpDIgc72BQSzD0qX4cCzD&X-Amz-Signature=c33331752cbd16380561046bb9dc1f6de065447073cb885fe3634ee969cee84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLDBJGY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH%2BE0gP%2FGSunpp8KwdB%2FmFJoSpVa3MzOFZf68qEfoOkpAiEAtIbjzSroaI4WxO4GfpDcXACEwVW9OLsO5yxhbNvKWJMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaJsHsDsLilASuVryrcA7O%2BNgIcAdyns94K2dgtQC6BIlA%2ByFKFYdkydleTSjo5dB6cHsBA2alPntqW2Chh45ML4x7uE6ZvCmDVJKEzK99rzTM7F%2BdT%2FQ0HYuaw0OQIP1DziPDJ7YMAw9eMJA0DO2c%2F2y5Kf%2FD%2Bnd35J5whRHm2ngruwyLlFmiRqGYTRhPwsQ7yyKj5XPjotIdb6QTu5d9ioiaNGsQfSa%2BFmTSZ2T4lZfAAno0YNxPGUjBrD45RTNFxNu6ljPn9MjzLUFWGVWqK9RvLp8%2Bs%2FZUO96vrv39ZIezhpzNhOWInU2c6x%2BXxNZA2q7Th0K7IGRPOn%2FwqUezrmetBEnWj4%2B%2FH6q6lCsfTRdBHo06vbe0LOKgVfu%2FJ492PnImwEKgaaonoULWU3Hsd4gMXlemg0ax1zcNYFr82tPHh5wcX1stPAJnK2NW6nhmpSwmF1grvJV7u8vsJ6ZPOHNv2NwmUOuESMBs%2BebIc9K9An29YtgwFSfZSsSIxXmESVLb6cSnDdo9Q29wZlX6wyHbVNNmBIC89nehtMK5L607Ca%2BfqKu5H3jCNlTOSs1fW1toQQSk0VAW8JhhIwxHDI1oADxYdRlI%2FUAG71d61jLFH7sKLSRVvi66lpnlszuB525FZSao6nmC9MLSf1sQGOqUBDDwsAjxmuJlMteXBH96s5AKLtktfZmBqeVWKUuYwPYF%2BjpwpXnHae5OzuOwWy1y9lukEqGWCq%2FKuolnu8Ck8OVPNM1iktr1%2FV118pHjUP516fafHhBuhUcnAPj8b6VBlEAyuC%2FNJFeDEQuH%2F9acwvyWiaaQTuuy1xyHFiH7vpMyQvzhj1ZsWCOjM9Pa%2BiV0K0WDlLomNpDIgc72BQSzD0qX4cCzD&X-Amz-Signature=2c1fc5d35f6fad91f6d05d2588259a6b4e66f324ec37ae5326fae4fb0262bcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLDBJGY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH%2BE0gP%2FGSunpp8KwdB%2FmFJoSpVa3MzOFZf68qEfoOkpAiEAtIbjzSroaI4WxO4GfpDcXACEwVW9OLsO5yxhbNvKWJMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaJsHsDsLilASuVryrcA7O%2BNgIcAdyns94K2dgtQC6BIlA%2ByFKFYdkydleTSjo5dB6cHsBA2alPntqW2Chh45ML4x7uE6ZvCmDVJKEzK99rzTM7F%2BdT%2FQ0HYuaw0OQIP1DziPDJ7YMAw9eMJA0DO2c%2F2y5Kf%2FD%2Bnd35J5whRHm2ngruwyLlFmiRqGYTRhPwsQ7yyKj5XPjotIdb6QTu5d9ioiaNGsQfSa%2BFmTSZ2T4lZfAAno0YNxPGUjBrD45RTNFxNu6ljPn9MjzLUFWGVWqK9RvLp8%2Bs%2FZUO96vrv39ZIezhpzNhOWInU2c6x%2BXxNZA2q7Th0K7IGRPOn%2FwqUezrmetBEnWj4%2B%2FH6q6lCsfTRdBHo06vbe0LOKgVfu%2FJ492PnImwEKgaaonoULWU3Hsd4gMXlemg0ax1zcNYFr82tPHh5wcX1stPAJnK2NW6nhmpSwmF1grvJV7u8vsJ6ZPOHNv2NwmUOuESMBs%2BebIc9K9An29YtgwFSfZSsSIxXmESVLb6cSnDdo9Q29wZlX6wyHbVNNmBIC89nehtMK5L607Ca%2BfqKu5H3jCNlTOSs1fW1toQQSk0VAW8JhhIwxHDI1oADxYdRlI%2FUAG71d61jLFH7sKLSRVvi66lpnlszuB525FZSao6nmC9MLSf1sQGOqUBDDwsAjxmuJlMteXBH96s5AKLtktfZmBqeVWKUuYwPYF%2BjpwpXnHae5OzuOwWy1y9lukEqGWCq%2FKuolnu8Ck8OVPNM1iktr1%2FV118pHjUP516fafHhBuhUcnAPj8b6VBlEAyuC%2FNJFeDEQuH%2F9acwvyWiaaQTuuy1xyHFiH7vpMyQvzhj1ZsWCOjM9Pa%2BiV0K0WDlLomNpDIgc72BQSzD0qX4cCzD&X-Amz-Signature=e47535c3be47c9957f6caa7e055b5d3be8da0464682a950d1851f0d3e6127f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLDBJGY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH%2BE0gP%2FGSunpp8KwdB%2FmFJoSpVa3MzOFZf68qEfoOkpAiEAtIbjzSroaI4WxO4GfpDcXACEwVW9OLsO5yxhbNvKWJMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaJsHsDsLilASuVryrcA7O%2BNgIcAdyns94K2dgtQC6BIlA%2ByFKFYdkydleTSjo5dB6cHsBA2alPntqW2Chh45ML4x7uE6ZvCmDVJKEzK99rzTM7F%2BdT%2FQ0HYuaw0OQIP1DziPDJ7YMAw9eMJA0DO2c%2F2y5Kf%2FD%2Bnd35J5whRHm2ngruwyLlFmiRqGYTRhPwsQ7yyKj5XPjotIdb6QTu5d9ioiaNGsQfSa%2BFmTSZ2T4lZfAAno0YNxPGUjBrD45RTNFxNu6ljPn9MjzLUFWGVWqK9RvLp8%2Bs%2FZUO96vrv39ZIezhpzNhOWInU2c6x%2BXxNZA2q7Th0K7IGRPOn%2FwqUezrmetBEnWj4%2B%2FH6q6lCsfTRdBHo06vbe0LOKgVfu%2FJ492PnImwEKgaaonoULWU3Hsd4gMXlemg0ax1zcNYFr82tPHh5wcX1stPAJnK2NW6nhmpSwmF1grvJV7u8vsJ6ZPOHNv2NwmUOuESMBs%2BebIc9K9An29YtgwFSfZSsSIxXmESVLb6cSnDdo9Q29wZlX6wyHbVNNmBIC89nehtMK5L607Ca%2BfqKu5H3jCNlTOSs1fW1toQQSk0VAW8JhhIwxHDI1oADxYdRlI%2FUAG71d61jLFH7sKLSRVvi66lpnlszuB525FZSao6nmC9MLSf1sQGOqUBDDwsAjxmuJlMteXBH96s5AKLtktfZmBqeVWKUuYwPYF%2BjpwpXnHae5OzuOwWy1y9lukEqGWCq%2FKuolnu8Ck8OVPNM1iktr1%2FV118pHjUP516fafHhBuhUcnAPj8b6VBlEAyuC%2FNJFeDEQuH%2F9acwvyWiaaQTuuy1xyHFiH7vpMyQvzhj1ZsWCOjM9Pa%2BiV0K0WDlLomNpDIgc72BQSzD0qX4cCzD&X-Amz-Signature=ccb6af9e1eb614a845d1b96d05a7c19af58fb40f9f7a2ceff79361dadc63cc6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
