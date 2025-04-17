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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNW4JCN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwbu8yQy%2FK5fPgpJDulazXTEj%2BWRagq5Lw37sXCKKjrAiEAiqYfY%2BfltUt%2F%2FHvKB98gL8Yt%2BcTNkQx4IKJuX%2BYSVQQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJyQgzUi%2BD1brgmEXyrcA5h704nzltxaIyG%2FmoDftSmpKWizHNgKeD3EUxGslTfW%2FGoe9EJeXGbQiLQsoqiKIDNBlqAvodG%2BGNhlbax4nnEkwPcbIV0oGgo29ktgzVM0FHZZ2QPo%2F0Yz1svgN0vecFbqf6jHQaWVj3%2BwgtQewnET9g9GHpiF%2B1zY%2Bgp0tbXpTmIcd4tlmWxcimZb7cE0F9w6qBChjYfW%2FUSRpSKaNKRX%2BQx8Xguhew1S52ONj2ew99tTUUdHKgRbeqoznT3qpj7QXlqkKRJ%2F%2FvSHbL7c1bOE7uYn3eF%2Btj9b8mZMKn6%2Fz5gckuglFqbmUw53aF2XVGlNIy6SkAMunfTPP7TSH9fQV0CMJ5YA66VY1Nfru%2BvL10CEltn07eft3fNKaIYxRaucEP5mQ0dwVCc00obAbC8qbJvzHePAqbHCDtQaSso0%2F9omK0Xwiiq7bFPtMtsfgYSt%2BEoXb8Pqm6EbJPHX%2FWV8odqsK%2FKT%2FRHk94s1XmEPIAjO1RB%2F14xQW30KtSAOn0Ml4AVG%2BvHaVjH2vbsCFJcnKQPius5Edx4fyx5Q3Azp2xujA%2B0QP5FXaaznRhhCfax619Hru1EYfBgX2HTXfydre95egG4j03HsnSTaLV7H5khAZ2eH1v%2B2BN3kMLaug8AGOqUBMzK5rI%2F6po3Y0ZlQipsVY3Vn8ZxlgDys8WbIq7XauWcXlk%2F%2BOHI%2BAm58UG4Lrem5vc7g1wJ%2BSgz7SwPtj6eoG9rWQgrudTGowwsEGRQc1EBRYMBD8ORTdNejFDEdXMgI%2BZtSpHDGu75xWAJiVNApSBeAuCm6nI1jlRhDQQOBufrjN4Hl5eJRj8lXVi3jU58W%2F1n5O%2BbH76JweFRAVYGzNDzIl84z&X-Amz-Signature=c06422d62db607ce5a338feda0c8408cd01b097ed3738d20359a94e76ef9c865&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNW4JCN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwbu8yQy%2FK5fPgpJDulazXTEj%2BWRagq5Lw37sXCKKjrAiEAiqYfY%2BfltUt%2F%2FHvKB98gL8Yt%2BcTNkQx4IKJuX%2BYSVQQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJyQgzUi%2BD1brgmEXyrcA5h704nzltxaIyG%2FmoDftSmpKWizHNgKeD3EUxGslTfW%2FGoe9EJeXGbQiLQsoqiKIDNBlqAvodG%2BGNhlbax4nnEkwPcbIV0oGgo29ktgzVM0FHZZ2QPo%2F0Yz1svgN0vecFbqf6jHQaWVj3%2BwgtQewnET9g9GHpiF%2B1zY%2Bgp0tbXpTmIcd4tlmWxcimZb7cE0F9w6qBChjYfW%2FUSRpSKaNKRX%2BQx8Xguhew1S52ONj2ew99tTUUdHKgRbeqoznT3qpj7QXlqkKRJ%2F%2FvSHbL7c1bOE7uYn3eF%2Btj9b8mZMKn6%2Fz5gckuglFqbmUw53aF2XVGlNIy6SkAMunfTPP7TSH9fQV0CMJ5YA66VY1Nfru%2BvL10CEltn07eft3fNKaIYxRaucEP5mQ0dwVCc00obAbC8qbJvzHePAqbHCDtQaSso0%2F9omK0Xwiiq7bFPtMtsfgYSt%2BEoXb8Pqm6EbJPHX%2FWV8odqsK%2FKT%2FRHk94s1XmEPIAjO1RB%2F14xQW30KtSAOn0Ml4AVG%2BvHaVjH2vbsCFJcnKQPius5Edx4fyx5Q3Azp2xujA%2B0QP5FXaaznRhhCfax619Hru1EYfBgX2HTXfydre95egG4j03HsnSTaLV7H5khAZ2eH1v%2B2BN3kMLaug8AGOqUBMzK5rI%2F6po3Y0ZlQipsVY3Vn8ZxlgDys8WbIq7XauWcXlk%2F%2BOHI%2BAm58UG4Lrem5vc7g1wJ%2BSgz7SwPtj6eoG9rWQgrudTGowwsEGRQc1EBRYMBD8ORTdNejFDEdXMgI%2BZtSpHDGu75xWAJiVNApSBeAuCm6nI1jlRhDQQOBufrjN4Hl5eJRj8lXVi3jU58W%2F1n5O%2BbH76JweFRAVYGzNDzIl84z&X-Amz-Signature=0d9b0e30d0c23d012168e1b488f6a20fb4ce6ac1d01a649f457b33430226dda1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNW4JCN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwbu8yQy%2FK5fPgpJDulazXTEj%2BWRagq5Lw37sXCKKjrAiEAiqYfY%2BfltUt%2F%2FHvKB98gL8Yt%2BcTNkQx4IKJuX%2BYSVQQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJyQgzUi%2BD1brgmEXyrcA5h704nzltxaIyG%2FmoDftSmpKWizHNgKeD3EUxGslTfW%2FGoe9EJeXGbQiLQsoqiKIDNBlqAvodG%2BGNhlbax4nnEkwPcbIV0oGgo29ktgzVM0FHZZ2QPo%2F0Yz1svgN0vecFbqf6jHQaWVj3%2BwgtQewnET9g9GHpiF%2B1zY%2Bgp0tbXpTmIcd4tlmWxcimZb7cE0F9w6qBChjYfW%2FUSRpSKaNKRX%2BQx8Xguhew1S52ONj2ew99tTUUdHKgRbeqoznT3qpj7QXlqkKRJ%2F%2FvSHbL7c1bOE7uYn3eF%2Btj9b8mZMKn6%2Fz5gckuglFqbmUw53aF2XVGlNIy6SkAMunfTPP7TSH9fQV0CMJ5YA66VY1Nfru%2BvL10CEltn07eft3fNKaIYxRaucEP5mQ0dwVCc00obAbC8qbJvzHePAqbHCDtQaSso0%2F9omK0Xwiiq7bFPtMtsfgYSt%2BEoXb8Pqm6EbJPHX%2FWV8odqsK%2FKT%2FRHk94s1XmEPIAjO1RB%2F14xQW30KtSAOn0Ml4AVG%2BvHaVjH2vbsCFJcnKQPius5Edx4fyx5Q3Azp2xujA%2B0QP5FXaaznRhhCfax619Hru1EYfBgX2HTXfydre95egG4j03HsnSTaLV7H5khAZ2eH1v%2B2BN3kMLaug8AGOqUBMzK5rI%2F6po3Y0ZlQipsVY3Vn8ZxlgDys8WbIq7XauWcXlk%2F%2BOHI%2BAm58UG4Lrem5vc7g1wJ%2BSgz7SwPtj6eoG9rWQgrudTGowwsEGRQc1EBRYMBD8ORTdNejFDEdXMgI%2BZtSpHDGu75xWAJiVNApSBeAuCm6nI1jlRhDQQOBufrjN4Hl5eJRj8lXVi3jU58W%2F1n5O%2BbH76JweFRAVYGzNDzIl84z&X-Amz-Signature=3de53a694af8225b3231b48917394be82d7f97aac6833f4d790ca5cb0c210979&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNW4JCN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwbu8yQy%2FK5fPgpJDulazXTEj%2BWRagq5Lw37sXCKKjrAiEAiqYfY%2BfltUt%2F%2FHvKB98gL8Yt%2BcTNkQx4IKJuX%2BYSVQQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJyQgzUi%2BD1brgmEXyrcA5h704nzltxaIyG%2FmoDftSmpKWizHNgKeD3EUxGslTfW%2FGoe9EJeXGbQiLQsoqiKIDNBlqAvodG%2BGNhlbax4nnEkwPcbIV0oGgo29ktgzVM0FHZZ2QPo%2F0Yz1svgN0vecFbqf6jHQaWVj3%2BwgtQewnET9g9GHpiF%2B1zY%2Bgp0tbXpTmIcd4tlmWxcimZb7cE0F9w6qBChjYfW%2FUSRpSKaNKRX%2BQx8Xguhew1S52ONj2ew99tTUUdHKgRbeqoznT3qpj7QXlqkKRJ%2F%2FvSHbL7c1bOE7uYn3eF%2Btj9b8mZMKn6%2Fz5gckuglFqbmUw53aF2XVGlNIy6SkAMunfTPP7TSH9fQV0CMJ5YA66VY1Nfru%2BvL10CEltn07eft3fNKaIYxRaucEP5mQ0dwVCc00obAbC8qbJvzHePAqbHCDtQaSso0%2F9omK0Xwiiq7bFPtMtsfgYSt%2BEoXb8Pqm6EbJPHX%2FWV8odqsK%2FKT%2FRHk94s1XmEPIAjO1RB%2F14xQW30KtSAOn0Ml4AVG%2BvHaVjH2vbsCFJcnKQPius5Edx4fyx5Q3Azp2xujA%2B0QP5FXaaznRhhCfax619Hru1EYfBgX2HTXfydre95egG4j03HsnSTaLV7H5khAZ2eH1v%2B2BN3kMLaug8AGOqUBMzK5rI%2F6po3Y0ZlQipsVY3Vn8ZxlgDys8WbIq7XauWcXlk%2F%2BOHI%2BAm58UG4Lrem5vc7g1wJ%2BSgz7SwPtj6eoG9rWQgrudTGowwsEGRQc1EBRYMBD8ORTdNejFDEdXMgI%2BZtSpHDGu75xWAJiVNApSBeAuCm6nI1jlRhDQQOBufrjN4Hl5eJRj8lXVi3jU58W%2F1n5O%2BbH76JweFRAVYGzNDzIl84z&X-Amz-Signature=c44a9d8f0815d3ce28e605ff2dd493ea2451ae70355c7c64f024e2ca6ca703f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNW4JCN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwbu8yQy%2FK5fPgpJDulazXTEj%2BWRagq5Lw37sXCKKjrAiEAiqYfY%2BfltUt%2F%2FHvKB98gL8Yt%2BcTNkQx4IKJuX%2BYSVQQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJyQgzUi%2BD1brgmEXyrcA5h704nzltxaIyG%2FmoDftSmpKWizHNgKeD3EUxGslTfW%2FGoe9EJeXGbQiLQsoqiKIDNBlqAvodG%2BGNhlbax4nnEkwPcbIV0oGgo29ktgzVM0FHZZ2QPo%2F0Yz1svgN0vecFbqf6jHQaWVj3%2BwgtQewnET9g9GHpiF%2B1zY%2Bgp0tbXpTmIcd4tlmWxcimZb7cE0F9w6qBChjYfW%2FUSRpSKaNKRX%2BQx8Xguhew1S52ONj2ew99tTUUdHKgRbeqoznT3qpj7QXlqkKRJ%2F%2FvSHbL7c1bOE7uYn3eF%2Btj9b8mZMKn6%2Fz5gckuglFqbmUw53aF2XVGlNIy6SkAMunfTPP7TSH9fQV0CMJ5YA66VY1Nfru%2BvL10CEltn07eft3fNKaIYxRaucEP5mQ0dwVCc00obAbC8qbJvzHePAqbHCDtQaSso0%2F9omK0Xwiiq7bFPtMtsfgYSt%2BEoXb8Pqm6EbJPHX%2FWV8odqsK%2FKT%2FRHk94s1XmEPIAjO1RB%2F14xQW30KtSAOn0Ml4AVG%2BvHaVjH2vbsCFJcnKQPius5Edx4fyx5Q3Azp2xujA%2B0QP5FXaaznRhhCfax619Hru1EYfBgX2HTXfydre95egG4j03HsnSTaLV7H5khAZ2eH1v%2B2BN3kMLaug8AGOqUBMzK5rI%2F6po3Y0ZlQipsVY3Vn8ZxlgDys8WbIq7XauWcXlk%2F%2BOHI%2BAm58UG4Lrem5vc7g1wJ%2BSgz7SwPtj6eoG9rWQgrudTGowwsEGRQc1EBRYMBD8ORTdNejFDEdXMgI%2BZtSpHDGu75xWAJiVNApSBeAuCm6nI1jlRhDQQOBufrjN4Hl5eJRj8lXVi3jU58W%2F1n5O%2BbH76JweFRAVYGzNDzIl84z&X-Amz-Signature=72405c9b46cafb4a79982a706af353a3e2ac10f0a9c997b9d2a4b16e38ccfc87&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNW4JCN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwbu8yQy%2FK5fPgpJDulazXTEj%2BWRagq5Lw37sXCKKjrAiEAiqYfY%2BfltUt%2F%2FHvKB98gL8Yt%2BcTNkQx4IKJuX%2BYSVQQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJyQgzUi%2BD1brgmEXyrcA5h704nzltxaIyG%2FmoDftSmpKWizHNgKeD3EUxGslTfW%2FGoe9EJeXGbQiLQsoqiKIDNBlqAvodG%2BGNhlbax4nnEkwPcbIV0oGgo29ktgzVM0FHZZ2QPo%2F0Yz1svgN0vecFbqf6jHQaWVj3%2BwgtQewnET9g9GHpiF%2B1zY%2Bgp0tbXpTmIcd4tlmWxcimZb7cE0F9w6qBChjYfW%2FUSRpSKaNKRX%2BQx8Xguhew1S52ONj2ew99tTUUdHKgRbeqoznT3qpj7QXlqkKRJ%2F%2FvSHbL7c1bOE7uYn3eF%2Btj9b8mZMKn6%2Fz5gckuglFqbmUw53aF2XVGlNIy6SkAMunfTPP7TSH9fQV0CMJ5YA66VY1Nfru%2BvL10CEltn07eft3fNKaIYxRaucEP5mQ0dwVCc00obAbC8qbJvzHePAqbHCDtQaSso0%2F9omK0Xwiiq7bFPtMtsfgYSt%2BEoXb8Pqm6EbJPHX%2FWV8odqsK%2FKT%2FRHk94s1XmEPIAjO1RB%2F14xQW30KtSAOn0Ml4AVG%2BvHaVjH2vbsCFJcnKQPius5Edx4fyx5Q3Azp2xujA%2B0QP5FXaaznRhhCfax619Hru1EYfBgX2HTXfydre95egG4j03HsnSTaLV7H5khAZ2eH1v%2B2BN3kMLaug8AGOqUBMzK5rI%2F6po3Y0ZlQipsVY3Vn8ZxlgDys8WbIq7XauWcXlk%2F%2BOHI%2BAm58UG4Lrem5vc7g1wJ%2BSgz7SwPtj6eoG9rWQgrudTGowwsEGRQc1EBRYMBD8ORTdNejFDEdXMgI%2BZtSpHDGu75xWAJiVNApSBeAuCm6nI1jlRhDQQOBufrjN4Hl5eJRj8lXVi3jU58W%2F1n5O%2BbH76JweFRAVYGzNDzIl84z&X-Amz-Signature=f0f7f61616059f14c2d654869169116af2a6252e11c629d4b8c38f9e7a467ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNW4JCN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwbu8yQy%2FK5fPgpJDulazXTEj%2BWRagq5Lw37sXCKKjrAiEAiqYfY%2BfltUt%2F%2FHvKB98gL8Yt%2BcTNkQx4IKJuX%2BYSVQQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJyQgzUi%2BD1brgmEXyrcA5h704nzltxaIyG%2FmoDftSmpKWizHNgKeD3EUxGslTfW%2FGoe9EJeXGbQiLQsoqiKIDNBlqAvodG%2BGNhlbax4nnEkwPcbIV0oGgo29ktgzVM0FHZZ2QPo%2F0Yz1svgN0vecFbqf6jHQaWVj3%2BwgtQewnET9g9GHpiF%2B1zY%2Bgp0tbXpTmIcd4tlmWxcimZb7cE0F9w6qBChjYfW%2FUSRpSKaNKRX%2BQx8Xguhew1S52ONj2ew99tTUUdHKgRbeqoznT3qpj7QXlqkKRJ%2F%2FvSHbL7c1bOE7uYn3eF%2Btj9b8mZMKn6%2Fz5gckuglFqbmUw53aF2XVGlNIy6SkAMunfTPP7TSH9fQV0CMJ5YA66VY1Nfru%2BvL10CEltn07eft3fNKaIYxRaucEP5mQ0dwVCc00obAbC8qbJvzHePAqbHCDtQaSso0%2F9omK0Xwiiq7bFPtMtsfgYSt%2BEoXb8Pqm6EbJPHX%2FWV8odqsK%2FKT%2FRHk94s1XmEPIAjO1RB%2F14xQW30KtSAOn0Ml4AVG%2BvHaVjH2vbsCFJcnKQPius5Edx4fyx5Q3Azp2xujA%2B0QP5FXaaznRhhCfax619Hru1EYfBgX2HTXfydre95egG4j03HsnSTaLV7H5khAZ2eH1v%2B2BN3kMLaug8AGOqUBMzK5rI%2F6po3Y0ZlQipsVY3Vn8ZxlgDys8WbIq7XauWcXlk%2F%2BOHI%2BAm58UG4Lrem5vc7g1wJ%2BSgz7SwPtj6eoG9rWQgrudTGowwsEGRQc1EBRYMBD8ORTdNejFDEdXMgI%2BZtSpHDGu75xWAJiVNApSBeAuCm6nI1jlRhDQQOBufrjN4Hl5eJRj8lXVi3jU58W%2F1n5O%2BbH76JweFRAVYGzNDzIl84z&X-Amz-Signature=b0bfee0af88daba715e9eb6dbfda23509c5758b025c28363ac9ace8d10d9bfba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
