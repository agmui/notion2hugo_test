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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXVYR5F%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFBh%2FebycG%2FEXSbuWL0UAsf%2F2iortIGV8TAWTefDjOwzAiEA8d1U%2FKdvbrg8kX%2FlR3jhZGXA9N%2Bo%2BY4sw2vAKofkNaoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP6%2FcB19lRdEdksG7yrcA2vw%2FAMSjtYTdlxHnaL4mh%2BpuDd50UOBae2Rb258wUSIZHHRWR0RVTKPr0wavGIcE13HrRvgFi7Uu1K9y4W5rmMQOeXxrkRLCUKwrhFWj%2F8%2BS2u67FsQEMANmNqqiHtzXD6J9ryl1ZtIaLFfus0K%2BOpJ3fiHADJD0uQar1AIVRx01cPcIwfK9Fo6UmAaTrc1Qid86xNCG9of8RkwoV7pc3vCn2zgLgxIfgbHej0hW80oUum4TIvNeOvD6IDahh1P8FciR%2FdzjD%2FZiTcpMEoVuageE69jsN0NurICmF9vXYFzaXjnq5HW6UC%2FKRQGDdMjkzcIJa8mNyaHOSR06ixylqrAjj%2FtroiiFLShT3sQsdiwzndCrFEaG8hKE8p7U0wxZePrQ%2BqmISeDnF0YKfubwPqF4Rwy%2BGcyseSS20Qqxvq0%2F346xaqqtIJzvVlMkbjWGhmUjt22CAjAyodubeMNyIQtRpshjEUhWCIz%2Bu4JS7fVJi%2BoqiUoeqrSsXECSGSmX%2FCDCB7Wpd5pZILpCjWXJ9NczB2jXvWfHR3aTQoO3bTOiGXm66d9AzKp85Hi5xTQBjJpIjPMLMDATzIe3hLss%2BJgAXNS%2Fqmgv5a2VkDmN53NZcAC58rJpsVB14MuMJzgr74GOqUBdmd1yFXFqqTZFNJXzv2pzjq3YJQ97koU4uPLIL8g5kW2z28m9%2Bdvh85qU9LyAfq3ise%2F%2Boj5zIXMql0uZxL7sMHnNNPqPGiB39ltMfLMQzudfhrX9Roxnaa01SS9Ee1cb9ybqkilrjaaZkWa3gaLxfDJHN63BM9AZRC2yQl1Go3U68YtaVnaWg8DPxBSpUWfQ9RKdz01mnZBbkA3JGtiBx1aGP5u&X-Amz-Signature=862333f177a95b64d662a3d960903b6744ae23bcecc02770d6d4f9dae02569c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXVYR5F%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFBh%2FebycG%2FEXSbuWL0UAsf%2F2iortIGV8TAWTefDjOwzAiEA8d1U%2FKdvbrg8kX%2FlR3jhZGXA9N%2Bo%2BY4sw2vAKofkNaoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP6%2FcB19lRdEdksG7yrcA2vw%2FAMSjtYTdlxHnaL4mh%2BpuDd50UOBae2Rb258wUSIZHHRWR0RVTKPr0wavGIcE13HrRvgFi7Uu1K9y4W5rmMQOeXxrkRLCUKwrhFWj%2F8%2BS2u67FsQEMANmNqqiHtzXD6J9ryl1ZtIaLFfus0K%2BOpJ3fiHADJD0uQar1AIVRx01cPcIwfK9Fo6UmAaTrc1Qid86xNCG9of8RkwoV7pc3vCn2zgLgxIfgbHej0hW80oUum4TIvNeOvD6IDahh1P8FciR%2FdzjD%2FZiTcpMEoVuageE69jsN0NurICmF9vXYFzaXjnq5HW6UC%2FKRQGDdMjkzcIJa8mNyaHOSR06ixylqrAjj%2FtroiiFLShT3sQsdiwzndCrFEaG8hKE8p7U0wxZePrQ%2BqmISeDnF0YKfubwPqF4Rwy%2BGcyseSS20Qqxvq0%2F346xaqqtIJzvVlMkbjWGhmUjt22CAjAyodubeMNyIQtRpshjEUhWCIz%2Bu4JS7fVJi%2BoqiUoeqrSsXECSGSmX%2FCDCB7Wpd5pZILpCjWXJ9NczB2jXvWfHR3aTQoO3bTOiGXm66d9AzKp85Hi5xTQBjJpIjPMLMDATzIe3hLss%2BJgAXNS%2Fqmgv5a2VkDmN53NZcAC58rJpsVB14MuMJzgr74GOqUBdmd1yFXFqqTZFNJXzv2pzjq3YJQ97koU4uPLIL8g5kW2z28m9%2Bdvh85qU9LyAfq3ise%2F%2Boj5zIXMql0uZxL7sMHnNNPqPGiB39ltMfLMQzudfhrX9Roxnaa01SS9Ee1cb9ybqkilrjaaZkWa3gaLxfDJHN63BM9AZRC2yQl1Go3U68YtaVnaWg8DPxBSpUWfQ9RKdz01mnZBbkA3JGtiBx1aGP5u&X-Amz-Signature=bb07d5938f3cda3ccd1cc7cd9e74f8479d040023fba2a5bda03b3b848b39d0cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
