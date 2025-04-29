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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIT2KQ47%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClS1AcPxNZIZ7Ku6bF3u3WGtp%2BW41re2V5Uwb7uz2L%2FwIgd82zXGTZdGreKz4JHEYfK2ngFIpcVCBeUhv2wouXPekqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK1V7wXpPkETUXpVircA%2BMgU8to4sZJyVY40U45RGXTBHySCXs3FA5u%2BsvJt2GS4OrO1KqYB1%2FKWTvcPETWjds0jnXNZN4vSX9Tx5mqmbZLQ4TinhyDBHkpD7WoKuFdTWndLxNTVx9XWAcjPDNL5dimkUnZjtOxBK%2FpbOqM5Heb%2Fm1DCJV1Rn%2FdT8iN4YyQqazVqZslSQ8trR83PBb7lE3DXeZaYUaBVOR263si%2BoQu6YmqKaY5DUCaxHqdyszVdKQoxCJzyHc57OJnk4ehl%2Bj%2FKpQHjEAq9UYQ%2B0Mbqpx0dZUf0Y7eyVhOwaohMByR97iiIFWDdk%2BF0JxSy3CM38sP58mG1YjlOVzyPmTOOvisBT38Tz1YCeMMeaV%2F3qgMGMeS7r9Ao7jOfiZQ7TRakH9c8vnd1xAhpBX5FYjefMHLSj9yeeryYlohPEZwCnVCtBuct3PJahgNRDvy3mAOCv864AlMJI0WykLC%2BG2%2BZhD3yIvTOtnrG4YYB%2FdhA5TT0sg2lnu3SrZQNdpr2jq0Hf6fK%2FcMreEt1e7L%2F8UTKpT8ZRfEzfSbOw45sznix7mjTl8NqbIE2Rzh60T3E91rAyTkUNht%2Bx7X8kGilnq6ZraMdOWoV584BJ%2B%2FtbNxcmAadpVxd0MGZQ1FnN4AMJe%2FwMAGOqUBr2hqw4WQg50R3mtFhIwk4VqWgnLIz%2Bli4g35TXP4h9x6SF1POVme1BgRJggbJNViE2JDwPunB1%2BMla6OikPu6nSCR4ztWjDkz26wGprmoI0Vi0JfylKufXYV2V3Ev0v7mC0C4KaBvQKbksjywO1iryNNsJ8%2BPQkeUWDxVbkH8RUTnONvT3STv9FaxQI6TN2cwIOlzwBaHUoALeyFin8D14WWDifF&X-Amz-Signature=d417f94dee4a70c4892c6d399e4384894768d412e0274164ae5beb63c7b05289&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIT2KQ47%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClS1AcPxNZIZ7Ku6bF3u3WGtp%2BW41re2V5Uwb7uz2L%2FwIgd82zXGTZdGreKz4JHEYfK2ngFIpcVCBeUhv2wouXPekqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK1V7wXpPkETUXpVircA%2BMgU8to4sZJyVY40U45RGXTBHySCXs3FA5u%2BsvJt2GS4OrO1KqYB1%2FKWTvcPETWjds0jnXNZN4vSX9Tx5mqmbZLQ4TinhyDBHkpD7WoKuFdTWndLxNTVx9XWAcjPDNL5dimkUnZjtOxBK%2FpbOqM5Heb%2Fm1DCJV1Rn%2FdT8iN4YyQqazVqZslSQ8trR83PBb7lE3DXeZaYUaBVOR263si%2BoQu6YmqKaY5DUCaxHqdyszVdKQoxCJzyHc57OJnk4ehl%2Bj%2FKpQHjEAq9UYQ%2B0Mbqpx0dZUf0Y7eyVhOwaohMByR97iiIFWDdk%2BF0JxSy3CM38sP58mG1YjlOVzyPmTOOvisBT38Tz1YCeMMeaV%2F3qgMGMeS7r9Ao7jOfiZQ7TRakH9c8vnd1xAhpBX5FYjefMHLSj9yeeryYlohPEZwCnVCtBuct3PJahgNRDvy3mAOCv864AlMJI0WykLC%2BG2%2BZhD3yIvTOtnrG4YYB%2FdhA5TT0sg2lnu3SrZQNdpr2jq0Hf6fK%2FcMreEt1e7L%2F8UTKpT8ZRfEzfSbOw45sznix7mjTl8NqbIE2Rzh60T3E91rAyTkUNht%2Bx7X8kGilnq6ZraMdOWoV584BJ%2B%2FtbNxcmAadpVxd0MGZQ1FnN4AMJe%2FwMAGOqUBr2hqw4WQg50R3mtFhIwk4VqWgnLIz%2Bli4g35TXP4h9x6SF1POVme1BgRJggbJNViE2JDwPunB1%2BMla6OikPu6nSCR4ztWjDkz26wGprmoI0Vi0JfylKufXYV2V3Ev0v7mC0C4KaBvQKbksjywO1iryNNsJ8%2BPQkeUWDxVbkH8RUTnONvT3STv9FaxQI6TN2cwIOlzwBaHUoALeyFin8D14WWDifF&X-Amz-Signature=8697880a6adcb0194540d1789abd9017c147f53d002426fe1da92460d319fc4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
