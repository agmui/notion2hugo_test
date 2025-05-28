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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUPJFRO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDtg5QNI9y0tqdOB4lN%2Fc4KUPP2SzQWd3iAk28IW7TDgIhAK%2BO5tfgb%2FfJd2HTo53rK%2BT7A4BHReSMpQRa%2BMb0q6IoKv8DCHoQABoMNjM3NDIzMTgzODA1Igx%2FkT8aNQlamSDuoCAq3ANwkyZXfbH99AD1YhTbc2%2BSX9tY3AtdQ5fL3OMOrDf1BvZL90v5dVlF7GmxX9A4EWJ7JCq%2B0PzNrCw2UzILBhQaVqawXQMOhBnZAmE%2BkGrN7Ogh9ik%2BbFDNxyybDZ8nQ8EYEQ0Z8WLykIVvl%2Bs%2BKTOVH%2BRyJirDsQAxV%2BNCbpmXIznVPtOkU%2BZKloChvg7thpuF%2B5O%2Fm8eqO3eoKSgOWfnA6Nl1PI5E7k9a01DOG0wME25shpgfX2y2q6v333Tnim0Cg%2FaDT97PbUJ2naIy%2F%2FmJ5aR1Ru7PStNH%2Bnb1HEMGFAdwDik0JmsyPLsosBdRitNdfDBgTbDCuAUkjnimtHjAVmEb1WgLBI2BsZdDpjLGf%2FkQJhDOIPKqYt063esYue7iZhGv3I4ypY1E4o4w801Q3Wxqarqze0A7jVD7B%2BTJ24stOvhlpba13MZLORjQ89EuHd%2FclH9q7sBlZECJF3QoS%2BYEgO8cNySelIkyZX7%2BRQcPEfOdJhE6kf73K7Thr1dFlqI7t3RMPNuQYvtmb94XfAU73MQq6k6Y8abfOOReL%2B3TnUDoj2WRzHzqf0uEyElotvc%2BJHOGUzMDWxCJ4fCEYkfHzB90EAYBy2e3vJbLnQO1x%2BhSqLu1mkgq%2FjCT%2BNzBBjqkAXiYgjv94r8vUH%2BSqcT%2BeRMOtrF8gCAWvuVmt1CeEinqMWUh1lbgwR8IIBEQKXE73tkLqV%2FnexvZBGMu%2F73Bkq9qIlCBoXE1%2Fm876bnHxlZ7f1%2F9f3KwqmzRnuHWSLMZ1v5owxRH4kh%2F9u8kulZOObZYXycByJYMkmQ3dl%2BWQY7%2FVb4uLL%2Fne9b%2F%2BAnR8AvQayN%2FfG3iwEq7c2S%2BO2UG8709w%2Bho&X-Amz-Signature=4a8298e82ae0c99de40b18befe6e4f678b6f4f066b1bd4e613228440d97e33f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUPJFRO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDtg5QNI9y0tqdOB4lN%2Fc4KUPP2SzQWd3iAk28IW7TDgIhAK%2BO5tfgb%2FfJd2HTo53rK%2BT7A4BHReSMpQRa%2BMb0q6IoKv8DCHoQABoMNjM3NDIzMTgzODA1Igx%2FkT8aNQlamSDuoCAq3ANwkyZXfbH99AD1YhTbc2%2BSX9tY3AtdQ5fL3OMOrDf1BvZL90v5dVlF7GmxX9A4EWJ7JCq%2B0PzNrCw2UzILBhQaVqawXQMOhBnZAmE%2BkGrN7Ogh9ik%2BbFDNxyybDZ8nQ8EYEQ0Z8WLykIVvl%2Bs%2BKTOVH%2BRyJirDsQAxV%2BNCbpmXIznVPtOkU%2BZKloChvg7thpuF%2B5O%2Fm8eqO3eoKSgOWfnA6Nl1PI5E7k9a01DOG0wME25shpgfX2y2q6v333Tnim0Cg%2FaDT97PbUJ2naIy%2F%2FmJ5aR1Ru7PStNH%2Bnb1HEMGFAdwDik0JmsyPLsosBdRitNdfDBgTbDCuAUkjnimtHjAVmEb1WgLBI2BsZdDpjLGf%2FkQJhDOIPKqYt063esYue7iZhGv3I4ypY1E4o4w801Q3Wxqarqze0A7jVD7B%2BTJ24stOvhlpba13MZLORjQ89EuHd%2FclH9q7sBlZECJF3QoS%2BYEgO8cNySelIkyZX7%2BRQcPEfOdJhE6kf73K7Thr1dFlqI7t3RMPNuQYvtmb94XfAU73MQq6k6Y8abfOOReL%2B3TnUDoj2WRzHzqf0uEyElotvc%2BJHOGUzMDWxCJ4fCEYkfHzB90EAYBy2e3vJbLnQO1x%2BhSqLu1mkgq%2FjCT%2BNzBBjqkAXiYgjv94r8vUH%2BSqcT%2BeRMOtrF8gCAWvuVmt1CeEinqMWUh1lbgwR8IIBEQKXE73tkLqV%2FnexvZBGMu%2F73Bkq9qIlCBoXE1%2Fm876bnHxlZ7f1%2F9f3KwqmzRnuHWSLMZ1v5owxRH4kh%2F9u8kulZOObZYXycByJYMkmQ3dl%2BWQY7%2FVb4uLL%2Fne9b%2F%2BAnR8AvQayN%2FfG3iwEq7c2S%2BO2UG8709w%2Bho&X-Amz-Signature=926c9c71867f75ded8f2d5e63d4eb826e048323612b63620d67a85b24d14a1d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
