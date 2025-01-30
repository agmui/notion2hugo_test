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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7KSNTW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMCz0Ab6i1PpG0iPvbJsaYEd9Zf669jtA2LP7zPl4pwIgUNvpMhs6FR34TY0%2BeNXVdN7%2Bi5%2FYbWoj%2Beb4GdP%2Be4IqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FZ%2FPLGsmi7WWkaDCrcA9OeHM7ohIkIwmBPEtk4rmogkoD%2BkhzXUekJehtUiciYE9SM29N9QgMonpxKQ28KaXnN%2BOyWBXbLEDe28d4HKB7QDg6Qq1JzbNa6l5ONSyuZhpLeuWegW1mbXfNUgsQa05UsyIVdkmGKrSpXMZuDRghrkGq37%2BoWQbk78wAv%2BZz6Yhs8VOk%2FsVevfl3n0I0noR8Q%2Bq3zWOXZHXN%2FqRdJY61DSYZtDlDpaPWxeCZouAwNeLKB8oqTisj%2BoAoQqxedpADDRAjTvqqTVwhgEuaw7iFZ3Gfe9vSNYz8AAeRljtDOxsNygKqKQ2sE05Ug90ejR6uvjNxkiLg4xZaxQLqqDUPmJnqC%2BuoPy6gDqH2TmtrGNWt5h49derdeWHwQU6gDujkmNMBg7o7ZJx4twfpLRUkl9SydFTJqkLJgmZP2qm178LOGXJfOHhDK7kXd6yjmbTcDRhyUi5L6J%2F8HvtBFc5biEb366XKVQLJplZEGqedOoPQMssG5pFPlbb4Ydvr1BKPE8SzKopQPtejb%2FjcMCEhTTwg%2FmanPEHAE97cDKnNnoser0kWXWIUlsLyhC%2FUCn3P3GMj8g25qMiJ09LSPHiP%2BXlcjlX6pRNBYLFP6%2F2UP1%2Bqo6gs9vH3m%2BS%2FqMPPi77wGOqUBYN1DqooSSxTeES218A9drtzpab8WGy92aWPn%2FY05wOai39apmKua%2B4gvuCKaJMrhGkSuYa%2FyAWIc5O3a%2FGKkL3v1%2BvMZrMGiQGBof6mfJTuA9360fW%2BguZzwg1PmM36kKvpQZnozIWNt6zUB9ROyXlhvnWVWK2Ile26%2Fh9kKodrHaY9XETc4rEil8HLK5wbqmrr4QSf4WQfor9tJT80iESSquh9Z&X-Amz-Signature=9c0ce7c17d961dde5c54f83bae6333e52c46de0c5fc1846279e7039efb6ffe83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7KSNTW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMCz0Ab6i1PpG0iPvbJsaYEd9Zf669jtA2LP7zPl4pwIgUNvpMhs6FR34TY0%2BeNXVdN7%2Bi5%2FYbWoj%2Beb4GdP%2Be4IqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FZ%2FPLGsmi7WWkaDCrcA9OeHM7ohIkIwmBPEtk4rmogkoD%2BkhzXUekJehtUiciYE9SM29N9QgMonpxKQ28KaXnN%2BOyWBXbLEDe28d4HKB7QDg6Qq1JzbNa6l5ONSyuZhpLeuWegW1mbXfNUgsQa05UsyIVdkmGKrSpXMZuDRghrkGq37%2BoWQbk78wAv%2BZz6Yhs8VOk%2FsVevfl3n0I0noR8Q%2Bq3zWOXZHXN%2FqRdJY61DSYZtDlDpaPWxeCZouAwNeLKB8oqTisj%2BoAoQqxedpADDRAjTvqqTVwhgEuaw7iFZ3Gfe9vSNYz8AAeRljtDOxsNygKqKQ2sE05Ug90ejR6uvjNxkiLg4xZaxQLqqDUPmJnqC%2BuoPy6gDqH2TmtrGNWt5h49derdeWHwQU6gDujkmNMBg7o7ZJx4twfpLRUkl9SydFTJqkLJgmZP2qm178LOGXJfOHhDK7kXd6yjmbTcDRhyUi5L6J%2F8HvtBFc5biEb366XKVQLJplZEGqedOoPQMssG5pFPlbb4Ydvr1BKPE8SzKopQPtejb%2FjcMCEhTTwg%2FmanPEHAE97cDKnNnoser0kWXWIUlsLyhC%2FUCn3P3GMj8g25qMiJ09LSPHiP%2BXlcjlX6pRNBYLFP6%2F2UP1%2Bqo6gs9vH3m%2BS%2FqMPPi77wGOqUBYN1DqooSSxTeES218A9drtzpab8WGy92aWPn%2FY05wOai39apmKua%2B4gvuCKaJMrhGkSuYa%2FyAWIc5O3a%2FGKkL3v1%2BvMZrMGiQGBof6mfJTuA9360fW%2BguZzwg1PmM36kKvpQZnozIWNt6zUB9ROyXlhvnWVWK2Ile26%2Fh9kKodrHaY9XETc4rEil8HLK5wbqmrr4QSf4WQfor9tJT80iESSquh9Z&X-Amz-Signature=2c69aa167888abdefd262c25aac8038d305ae9ea0e28f81edec3776bc6571f47&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7KSNTW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMCz0Ab6i1PpG0iPvbJsaYEd9Zf669jtA2LP7zPl4pwIgUNvpMhs6FR34TY0%2BeNXVdN7%2Bi5%2FYbWoj%2Beb4GdP%2Be4IqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FZ%2FPLGsmi7WWkaDCrcA9OeHM7ohIkIwmBPEtk4rmogkoD%2BkhzXUekJehtUiciYE9SM29N9QgMonpxKQ28KaXnN%2BOyWBXbLEDe28d4HKB7QDg6Qq1JzbNa6l5ONSyuZhpLeuWegW1mbXfNUgsQa05UsyIVdkmGKrSpXMZuDRghrkGq37%2BoWQbk78wAv%2BZz6Yhs8VOk%2FsVevfl3n0I0noR8Q%2Bq3zWOXZHXN%2FqRdJY61DSYZtDlDpaPWxeCZouAwNeLKB8oqTisj%2BoAoQqxedpADDRAjTvqqTVwhgEuaw7iFZ3Gfe9vSNYz8AAeRljtDOxsNygKqKQ2sE05Ug90ejR6uvjNxkiLg4xZaxQLqqDUPmJnqC%2BuoPy6gDqH2TmtrGNWt5h49derdeWHwQU6gDujkmNMBg7o7ZJx4twfpLRUkl9SydFTJqkLJgmZP2qm178LOGXJfOHhDK7kXd6yjmbTcDRhyUi5L6J%2F8HvtBFc5biEb366XKVQLJplZEGqedOoPQMssG5pFPlbb4Ydvr1BKPE8SzKopQPtejb%2FjcMCEhTTwg%2FmanPEHAE97cDKnNnoser0kWXWIUlsLyhC%2FUCn3P3GMj8g25qMiJ09LSPHiP%2BXlcjlX6pRNBYLFP6%2F2UP1%2Bqo6gs9vH3m%2BS%2FqMPPi77wGOqUBYN1DqooSSxTeES218A9drtzpab8WGy92aWPn%2FY05wOai39apmKua%2B4gvuCKaJMrhGkSuYa%2FyAWIc5O3a%2FGKkL3v1%2BvMZrMGiQGBof6mfJTuA9360fW%2BguZzwg1PmM36kKvpQZnozIWNt6zUB9ROyXlhvnWVWK2Ile26%2Fh9kKodrHaY9XETc4rEil8HLK5wbqmrr4QSf4WQfor9tJT80iESSquh9Z&X-Amz-Signature=943616094072d2cf5ee9aa627c612d72886d68e9a90b273968a5534a45372875&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7KSNTW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMCz0Ab6i1PpG0iPvbJsaYEd9Zf669jtA2LP7zPl4pwIgUNvpMhs6FR34TY0%2BeNXVdN7%2Bi5%2FYbWoj%2Beb4GdP%2Be4IqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FZ%2FPLGsmi7WWkaDCrcA9OeHM7ohIkIwmBPEtk4rmogkoD%2BkhzXUekJehtUiciYE9SM29N9QgMonpxKQ28KaXnN%2BOyWBXbLEDe28d4HKB7QDg6Qq1JzbNa6l5ONSyuZhpLeuWegW1mbXfNUgsQa05UsyIVdkmGKrSpXMZuDRghrkGq37%2BoWQbk78wAv%2BZz6Yhs8VOk%2FsVevfl3n0I0noR8Q%2Bq3zWOXZHXN%2FqRdJY61DSYZtDlDpaPWxeCZouAwNeLKB8oqTisj%2BoAoQqxedpADDRAjTvqqTVwhgEuaw7iFZ3Gfe9vSNYz8AAeRljtDOxsNygKqKQ2sE05Ug90ejR6uvjNxkiLg4xZaxQLqqDUPmJnqC%2BuoPy6gDqH2TmtrGNWt5h49derdeWHwQU6gDujkmNMBg7o7ZJx4twfpLRUkl9SydFTJqkLJgmZP2qm178LOGXJfOHhDK7kXd6yjmbTcDRhyUi5L6J%2F8HvtBFc5biEb366XKVQLJplZEGqedOoPQMssG5pFPlbb4Ydvr1BKPE8SzKopQPtejb%2FjcMCEhTTwg%2FmanPEHAE97cDKnNnoser0kWXWIUlsLyhC%2FUCn3P3GMj8g25qMiJ09LSPHiP%2BXlcjlX6pRNBYLFP6%2F2UP1%2Bqo6gs9vH3m%2BS%2FqMPPi77wGOqUBYN1DqooSSxTeES218A9drtzpab8WGy92aWPn%2FY05wOai39apmKua%2B4gvuCKaJMrhGkSuYa%2FyAWIc5O3a%2FGKkL3v1%2BvMZrMGiQGBof6mfJTuA9360fW%2BguZzwg1PmM36kKvpQZnozIWNt6zUB9ROyXlhvnWVWK2Ile26%2Fh9kKodrHaY9XETc4rEil8HLK5wbqmrr4QSf4WQfor9tJT80iESSquh9Z&X-Amz-Signature=1c0a66de36c86c6d4e6811a6273eb685d653ae21c4c982fcb91ea1ec5b88619f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7KSNTW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMCz0Ab6i1PpG0iPvbJsaYEd9Zf669jtA2LP7zPl4pwIgUNvpMhs6FR34TY0%2BeNXVdN7%2Bi5%2FYbWoj%2Beb4GdP%2Be4IqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FZ%2FPLGsmi7WWkaDCrcA9OeHM7ohIkIwmBPEtk4rmogkoD%2BkhzXUekJehtUiciYE9SM29N9QgMonpxKQ28KaXnN%2BOyWBXbLEDe28d4HKB7QDg6Qq1JzbNa6l5ONSyuZhpLeuWegW1mbXfNUgsQa05UsyIVdkmGKrSpXMZuDRghrkGq37%2BoWQbk78wAv%2BZz6Yhs8VOk%2FsVevfl3n0I0noR8Q%2Bq3zWOXZHXN%2FqRdJY61DSYZtDlDpaPWxeCZouAwNeLKB8oqTisj%2BoAoQqxedpADDRAjTvqqTVwhgEuaw7iFZ3Gfe9vSNYz8AAeRljtDOxsNygKqKQ2sE05Ug90ejR6uvjNxkiLg4xZaxQLqqDUPmJnqC%2BuoPy6gDqH2TmtrGNWt5h49derdeWHwQU6gDujkmNMBg7o7ZJx4twfpLRUkl9SydFTJqkLJgmZP2qm178LOGXJfOHhDK7kXd6yjmbTcDRhyUi5L6J%2F8HvtBFc5biEb366XKVQLJplZEGqedOoPQMssG5pFPlbb4Ydvr1BKPE8SzKopQPtejb%2FjcMCEhTTwg%2FmanPEHAE97cDKnNnoser0kWXWIUlsLyhC%2FUCn3P3GMj8g25qMiJ09LSPHiP%2BXlcjlX6pRNBYLFP6%2F2UP1%2Bqo6gs9vH3m%2BS%2FqMPPi77wGOqUBYN1DqooSSxTeES218A9drtzpab8WGy92aWPn%2FY05wOai39apmKua%2B4gvuCKaJMrhGkSuYa%2FyAWIc5O3a%2FGKkL3v1%2BvMZrMGiQGBof6mfJTuA9360fW%2BguZzwg1PmM36kKvpQZnozIWNt6zUB9ROyXlhvnWVWK2Ile26%2Fh9kKodrHaY9XETc4rEil8HLK5wbqmrr4QSf4WQfor9tJT80iESSquh9Z&X-Amz-Signature=d116677fc60c762b7e5177f6e666a6a75e18ae06045b421c8cc479c94aa3cde5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7KSNTW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMCz0Ab6i1PpG0iPvbJsaYEd9Zf669jtA2LP7zPl4pwIgUNvpMhs6FR34TY0%2BeNXVdN7%2Bi5%2FYbWoj%2Beb4GdP%2Be4IqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FZ%2FPLGsmi7WWkaDCrcA9OeHM7ohIkIwmBPEtk4rmogkoD%2BkhzXUekJehtUiciYE9SM29N9QgMonpxKQ28KaXnN%2BOyWBXbLEDe28d4HKB7QDg6Qq1JzbNa6l5ONSyuZhpLeuWegW1mbXfNUgsQa05UsyIVdkmGKrSpXMZuDRghrkGq37%2BoWQbk78wAv%2BZz6Yhs8VOk%2FsVevfl3n0I0noR8Q%2Bq3zWOXZHXN%2FqRdJY61DSYZtDlDpaPWxeCZouAwNeLKB8oqTisj%2BoAoQqxedpADDRAjTvqqTVwhgEuaw7iFZ3Gfe9vSNYz8AAeRljtDOxsNygKqKQ2sE05Ug90ejR6uvjNxkiLg4xZaxQLqqDUPmJnqC%2BuoPy6gDqH2TmtrGNWt5h49derdeWHwQU6gDujkmNMBg7o7ZJx4twfpLRUkl9SydFTJqkLJgmZP2qm178LOGXJfOHhDK7kXd6yjmbTcDRhyUi5L6J%2F8HvtBFc5biEb366XKVQLJplZEGqedOoPQMssG5pFPlbb4Ydvr1BKPE8SzKopQPtejb%2FjcMCEhTTwg%2FmanPEHAE97cDKnNnoser0kWXWIUlsLyhC%2FUCn3P3GMj8g25qMiJ09LSPHiP%2BXlcjlX6pRNBYLFP6%2F2UP1%2Bqo6gs9vH3m%2BS%2FqMPPi77wGOqUBYN1DqooSSxTeES218A9drtzpab8WGy92aWPn%2FY05wOai39apmKua%2B4gvuCKaJMrhGkSuYa%2FyAWIc5O3a%2FGKkL3v1%2BvMZrMGiQGBof6mfJTuA9360fW%2BguZzwg1PmM36kKvpQZnozIWNt6zUB9ROyXlhvnWVWK2Ile26%2Fh9kKodrHaY9XETc4rEil8HLK5wbqmrr4QSf4WQfor9tJT80iESSquh9Z&X-Amz-Signature=585a3fbc19982ca70d9cb591005ff68c3813b6fc4c61c3f62aef73eb4a84029f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7KSNTW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMCz0Ab6i1PpG0iPvbJsaYEd9Zf669jtA2LP7zPl4pwIgUNvpMhs6FR34TY0%2BeNXVdN7%2Bi5%2FYbWoj%2Beb4GdP%2Be4IqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FZ%2FPLGsmi7WWkaDCrcA9OeHM7ohIkIwmBPEtk4rmogkoD%2BkhzXUekJehtUiciYE9SM29N9QgMonpxKQ28KaXnN%2BOyWBXbLEDe28d4HKB7QDg6Qq1JzbNa6l5ONSyuZhpLeuWegW1mbXfNUgsQa05UsyIVdkmGKrSpXMZuDRghrkGq37%2BoWQbk78wAv%2BZz6Yhs8VOk%2FsVevfl3n0I0noR8Q%2Bq3zWOXZHXN%2FqRdJY61DSYZtDlDpaPWxeCZouAwNeLKB8oqTisj%2BoAoQqxedpADDRAjTvqqTVwhgEuaw7iFZ3Gfe9vSNYz8AAeRljtDOxsNygKqKQ2sE05Ug90ejR6uvjNxkiLg4xZaxQLqqDUPmJnqC%2BuoPy6gDqH2TmtrGNWt5h49derdeWHwQU6gDujkmNMBg7o7ZJx4twfpLRUkl9SydFTJqkLJgmZP2qm178LOGXJfOHhDK7kXd6yjmbTcDRhyUi5L6J%2F8HvtBFc5biEb366XKVQLJplZEGqedOoPQMssG5pFPlbb4Ydvr1BKPE8SzKopQPtejb%2FjcMCEhTTwg%2FmanPEHAE97cDKnNnoser0kWXWIUlsLyhC%2FUCn3P3GMj8g25qMiJ09LSPHiP%2BXlcjlX6pRNBYLFP6%2F2UP1%2Bqo6gs9vH3m%2BS%2FqMPPi77wGOqUBYN1DqooSSxTeES218A9drtzpab8WGy92aWPn%2FY05wOai39apmKua%2B4gvuCKaJMrhGkSuYa%2FyAWIc5O3a%2FGKkL3v1%2BvMZrMGiQGBof6mfJTuA9360fW%2BguZzwg1PmM36kKvpQZnozIWNt6zUB9ROyXlhvnWVWK2Ile26%2Fh9kKodrHaY9XETc4rEil8HLK5wbqmrr4QSf4WQfor9tJT80iESSquh9Z&X-Amz-Signature=12a25c3c89b541551f706b47671fabb8ed1fedfd7718bce4585764e9e472047c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
