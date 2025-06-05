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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZJCWIH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBppp%2BL0zQZTo9aQA7O8YE7zbZFZYP1ypnr9FAhVFETsAiA2iz3MHrKpfAZPBr2STeAB6QSC69FWmkEsLPcv3Qjcyyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZZ9DQicx0i94OxH4KtwDOIzebRbsdt%2FYDPb0a8YQ8dnXjT3gtmHfRmG8tFUF2%2BvKJ40eDmvpk%2Bnj%2Fr4I7iTxcvk5hcwpzoEkEmJ5BMSYLMKoI3Zn5HDGfkURctBldlZ5Y%2FO8m0XvzIwUBZmVIaC4tZ%2BPxI%2Bd4tBE53bKDXGXPBBjIP9%2Bx%2F6fDpH7riWUI%2FKaMIs014ESw2ALGJYRtnBkoaeICEsloE9htfImvO2Dh5wM4ogx6lStOEeIe%2BmfYr660IwIQxKApD9XWIzgXidL2gEG5S%2B2KXGMCGFMy1hJBRM3oJcYEz1h3D271jrTJ%2FHD2vNSCDrecuf8zwCLK%2FcxMyirDUMHW2r1lx7CbtYhv6aojzy8R0cXsFAnUT1v5U387dTCybg3Gu0zk1nvTBe9%2Fsm6fZZX86v30seG6HvfxttmzD38LK2JL8fQsaOeYocqD0ldSmJs2YLb4aAFH9M9sDt26IqPFxe0DTrsgO6WTZ%2FoWFTACyZ%2F3CEGn9MQ9bbwJFG4swDxmWoghwjA3Ga3F4x4v2qLUQHJLqkNmDa8qsTZ8h7%2FOkuEpZlBiSeX5nxyDjEN4jdMhAHqFIduVVT%2BKUBXRjAX88u3PQxchGTGXrfWeWt1q%2F3p5pagWfEcLvTR0eMmW2Ffz37Hmn8w7MSGwgY6pgGNY64ZMOe9n%2BU356qTk5h4iA62ElB77B%2FqUo%2FUDXncHpGWesJYo7q1WqEBCfPRxhc6YwUROQIGfrG1qJqsXZ76989J8D2gzs%2BO1ZyUue4jkk21O65vVeM%2F7kHeb1cM6Dl%2BIETSaV2UsJMLFD5THSgQzrzVqUBjG1LtVjcMRVOl2chAenqNoHlc8x87YA3aUz%2Bdtw%2FzSVzGRZQYj7PF7vqdv%2BKUq1JE&X-Amz-Signature=f23ffcb04fd10ab65979164584802656e03ed6b97fe0969e4563c31cad90e14f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZJCWIH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBppp%2BL0zQZTo9aQA7O8YE7zbZFZYP1ypnr9FAhVFETsAiA2iz3MHrKpfAZPBr2STeAB6QSC69FWmkEsLPcv3Qjcyyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZZ9DQicx0i94OxH4KtwDOIzebRbsdt%2FYDPb0a8YQ8dnXjT3gtmHfRmG8tFUF2%2BvKJ40eDmvpk%2Bnj%2Fr4I7iTxcvk5hcwpzoEkEmJ5BMSYLMKoI3Zn5HDGfkURctBldlZ5Y%2FO8m0XvzIwUBZmVIaC4tZ%2BPxI%2Bd4tBE53bKDXGXPBBjIP9%2Bx%2F6fDpH7riWUI%2FKaMIs014ESw2ALGJYRtnBkoaeICEsloE9htfImvO2Dh5wM4ogx6lStOEeIe%2BmfYr660IwIQxKApD9XWIzgXidL2gEG5S%2B2KXGMCGFMy1hJBRM3oJcYEz1h3D271jrTJ%2FHD2vNSCDrecuf8zwCLK%2FcxMyirDUMHW2r1lx7CbtYhv6aojzy8R0cXsFAnUT1v5U387dTCybg3Gu0zk1nvTBe9%2Fsm6fZZX86v30seG6HvfxttmzD38LK2JL8fQsaOeYocqD0ldSmJs2YLb4aAFH9M9sDt26IqPFxe0DTrsgO6WTZ%2FoWFTACyZ%2F3CEGn9MQ9bbwJFG4swDxmWoghwjA3Ga3F4x4v2qLUQHJLqkNmDa8qsTZ8h7%2FOkuEpZlBiSeX5nxyDjEN4jdMhAHqFIduVVT%2BKUBXRjAX88u3PQxchGTGXrfWeWt1q%2F3p5pagWfEcLvTR0eMmW2Ffz37Hmn8w7MSGwgY6pgGNY64ZMOe9n%2BU356qTk5h4iA62ElB77B%2FqUo%2FUDXncHpGWesJYo7q1WqEBCfPRxhc6YwUROQIGfrG1qJqsXZ76989J8D2gzs%2BO1ZyUue4jkk21O65vVeM%2F7kHeb1cM6Dl%2BIETSaV2UsJMLFD5THSgQzrzVqUBjG1LtVjcMRVOl2chAenqNoHlc8x87YA3aUz%2Bdtw%2FzSVzGRZQYj7PF7vqdv%2BKUq1JE&X-Amz-Signature=4334ab4342b62b3696809c0616f87d7e36c7872286d26594c5551d608f38f088&X-Amz-SignedHeaders=host&x-id=GetObject)

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
