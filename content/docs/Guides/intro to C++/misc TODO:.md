---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV55U4RW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZKkmXFXEgp3WtXgwpL%2FMXq7Jb2rJtfgBijVv63SnMxgIgX4EU5F3v6HJA2JFh0fpsaIfQGCx1i9SIH9IWv%2BTaE40qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTDI9oVvPbf4%2BMQTSrcA5ynTPalFo%2BMGwKkm6k9cG7jZmNEaZS2Gsigo293GY4oAJ%2BRSlVYZJ2QFij5%2BSTjXQ2KE9why1aYHjl%2BDcQlhz8SmYhimDnb7KiiPU4OymZe4ZVy7Txu6fQxoGE7XB8bhKDWppG7MqbbzpKrPtGW813XCo8%2BTMg%2F3H5B%2F6prDnl8dkfKfj%2BREopGf8A6gS1pb7djodZKUOqkCcC4n5%2FXxYS64zIE9mamaMzRVom%2BcitKcClnhVJjElv%2FvMIYFMEyCQCNzgkDtGslGfvCiZRF1tClQ9o%2FJmqa2hzT1IkFGJKAUwtlK3RMOKiLxeAqimbiOhUXhYPfMebcukeWwlEzyJCZFZxNt%2BbblX4cWSc4ol06XthtLR9NB%2FmpI9D0RNzH%2BeC1c%2F9uqDOPGdrp72uzHM%2Ftb94FDo1zee13eV4yGMpp88omjARuH5TF4LhgBghCFjKUfMBMOSXdo0xybFIa0RxtRaZbjzgA6V5gTTerDCZsVgJqzoCyCkbgVbYf5LdUq8yAXLtblioQt%2BUqps3HVdwgn%2BlPRiqbAG2Em%2BYFjqxh2ezhRMHY2vh3S7JcaV186%2FiZysUHzEDGYlleqKi0EyQmWnYCwW4q486oCVyuK4WWmuiUJ62x28zZy5kBMMimlcIGOqUBd66rvS01U%2FJdzPT3zhF6p18fFzZVJ77fcJZ3X1P%2BJan0ufwLtTKfIxb0fEHMuOhYpwvX2WYYqXOep7mOkAMQM76SJ9nL%2Fwak9KcOmXm7IYs8XWw%2BBTdmly8Vt9FtVoSk3RLdHFeCNUJQr6eLV0G8vVYOpKzVu6RTqImvmu7oAQnAgu18l5C6edHO1Dbxvl73n4NsjhyNFtQO%2BxFeoF%2FCKQTUuZgz&X-Amz-Signature=28813e29fecaa17121c0d6f988e3aecdb7f5ae73953ec96d7896a2b48b4e939f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV55U4RW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZKkmXFXEgp3WtXgwpL%2FMXq7Jb2rJtfgBijVv63SnMxgIgX4EU5F3v6HJA2JFh0fpsaIfQGCx1i9SIH9IWv%2BTaE40qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTDI9oVvPbf4%2BMQTSrcA5ynTPalFo%2BMGwKkm6k9cG7jZmNEaZS2Gsigo293GY4oAJ%2BRSlVYZJ2QFij5%2BSTjXQ2KE9why1aYHjl%2BDcQlhz8SmYhimDnb7KiiPU4OymZe4ZVy7Txu6fQxoGE7XB8bhKDWppG7MqbbzpKrPtGW813XCo8%2BTMg%2F3H5B%2F6prDnl8dkfKfj%2BREopGf8A6gS1pb7djodZKUOqkCcC4n5%2FXxYS64zIE9mamaMzRVom%2BcitKcClnhVJjElv%2FvMIYFMEyCQCNzgkDtGslGfvCiZRF1tClQ9o%2FJmqa2hzT1IkFGJKAUwtlK3RMOKiLxeAqimbiOhUXhYPfMebcukeWwlEzyJCZFZxNt%2BbblX4cWSc4ol06XthtLR9NB%2FmpI9D0RNzH%2BeC1c%2F9uqDOPGdrp72uzHM%2Ftb94FDo1zee13eV4yGMpp88omjARuH5TF4LhgBghCFjKUfMBMOSXdo0xybFIa0RxtRaZbjzgA6V5gTTerDCZsVgJqzoCyCkbgVbYf5LdUq8yAXLtblioQt%2BUqps3HVdwgn%2BlPRiqbAG2Em%2BYFjqxh2ezhRMHY2vh3S7JcaV186%2FiZysUHzEDGYlleqKi0EyQmWnYCwW4q486oCVyuK4WWmuiUJ62x28zZy5kBMMimlcIGOqUBd66rvS01U%2FJdzPT3zhF6p18fFzZVJ77fcJZ3X1P%2BJan0ufwLtTKfIxb0fEHMuOhYpwvX2WYYqXOep7mOkAMQM76SJ9nL%2Fwak9KcOmXm7IYs8XWw%2BBTdmly8Vt9FtVoSk3RLdHFeCNUJQr6eLV0G8vVYOpKzVu6RTqImvmu7oAQnAgu18l5C6edHO1Dbxvl73n4NsjhyNFtQO%2BxFeoF%2FCKQTUuZgz&X-Amz-Signature=b20da9e41f46ba96f6a0fd622365466e55dd18bdc314fff4fa9f0c7f9e265a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
