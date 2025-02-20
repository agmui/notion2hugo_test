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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RACJTUB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmoEFcs%2Br27mAckmOorjEKv%2Bo0c4nVFfo8qSnUWcnjagIgBoS8ynnfIKV8Ye2HbfXsQD8xeaed2h1NL4t0CSWkBOMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz5Cx3nIdfwWtQ%2BRSrcA%2F7aXnk9VRSeiDZUOf2GY7SKXibNbwLA1n9W0EchOj9xnw%2FY0Q08cgcN%2B7lBtGxoCnWu7QSh612hj0CwcRv9y2ztMQs8r7DA0THbVmfeuTQf64o5GkGTOBj4WAFUNCsRV6d%2FG7LV3Y4pQW4LtDVHqJQvuv30vx5stYd%2Fv8%2F3cgDo55cKd5L2RksmSz6KD%2F%2B8HzWsQQtt27VAIQUu5bzFAGoFKigcAkeqqjIYZJp3kMfkbly9I%2B7jgbIC0NSVwRMiPf2fJIoWg%2BzYJNGiuP7%2BAf1IWCQm%2B7nsY1UyyMVPpOHvu4Sjf2rB56n2K%2F5XkX8A%2BXfH%2BotLXVGp0V%2BKfI05bDZF7Ns6YBvM9IgeheixR9cZ8bMDyjDotX1czt3viwVIsRHvf1UfSGCetmwkoAwsLvrXCsiJ%2FgtoQI%2FWy6GIPZ4dX4v2BvaC7AxrvAK0iG0hHJZE%2B%2BM%2FoxTptDvfV5u3dN7Z4qfngVzRX4OA2fm8CDk2L8Mrm67azRp6bfLhvjZ%2FTke0r3yxKeqDJ4AgBKrm7C%2FwWtpmWgAaGQdstwsfgScSZN%2BfW4%2FYX%2F9YuUhg8xQtNweI2CKmrN50pPEk5HT9soTGwdB143aXcs%2Fl3mIBG63WaLO6voUoGyh9q1%2BCMKfx3b0GOqUBUlsEAOcg6asiQpFNyReN7mKiAsf6Ag5TkjxoHQNTBlNy7DEc635L3AKx713neyuW6nJ0UO4GQQwGRvRqUl0GasNRCejbeQUGCB%2BWsLciwwn0An%2BRjeMnkDTCrMY22DZJHB05RLvxMPdFZ%2FWgyi%2FgeMNyoqBOxpVbKUie%2BQ0mk1mAhDUmqLLNDbRVnN49lZKrJmYbHS4sf%2Fj90t7MEUG%2BkkOuXGnO&X-Amz-Signature=bffc87939c8de5017e65969293c4292d1e5724d023d279fbfefb0de08a63764a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RACJTUB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmoEFcs%2Br27mAckmOorjEKv%2Bo0c4nVFfo8qSnUWcnjagIgBoS8ynnfIKV8Ye2HbfXsQD8xeaed2h1NL4t0CSWkBOMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz5Cx3nIdfwWtQ%2BRSrcA%2F7aXnk9VRSeiDZUOf2GY7SKXibNbwLA1n9W0EchOj9xnw%2FY0Q08cgcN%2B7lBtGxoCnWu7QSh612hj0CwcRv9y2ztMQs8r7DA0THbVmfeuTQf64o5GkGTOBj4WAFUNCsRV6d%2FG7LV3Y4pQW4LtDVHqJQvuv30vx5stYd%2Fv8%2F3cgDo55cKd5L2RksmSz6KD%2F%2B8HzWsQQtt27VAIQUu5bzFAGoFKigcAkeqqjIYZJp3kMfkbly9I%2B7jgbIC0NSVwRMiPf2fJIoWg%2BzYJNGiuP7%2BAf1IWCQm%2B7nsY1UyyMVPpOHvu4Sjf2rB56n2K%2F5XkX8A%2BXfH%2BotLXVGp0V%2BKfI05bDZF7Ns6YBvM9IgeheixR9cZ8bMDyjDotX1czt3viwVIsRHvf1UfSGCetmwkoAwsLvrXCsiJ%2FgtoQI%2FWy6GIPZ4dX4v2BvaC7AxrvAK0iG0hHJZE%2B%2BM%2FoxTptDvfV5u3dN7Z4qfngVzRX4OA2fm8CDk2L8Mrm67azRp6bfLhvjZ%2FTke0r3yxKeqDJ4AgBKrm7C%2FwWtpmWgAaGQdstwsfgScSZN%2BfW4%2FYX%2F9YuUhg8xQtNweI2CKmrN50pPEk5HT9soTGwdB143aXcs%2Fl3mIBG63WaLO6voUoGyh9q1%2BCMKfx3b0GOqUBUlsEAOcg6asiQpFNyReN7mKiAsf6Ag5TkjxoHQNTBlNy7DEc635L3AKx713neyuW6nJ0UO4GQQwGRvRqUl0GasNRCejbeQUGCB%2BWsLciwwn0An%2BRjeMnkDTCrMY22DZJHB05RLvxMPdFZ%2FWgyi%2FgeMNyoqBOxpVbKUie%2BQ0mk1mAhDUmqLLNDbRVnN49lZKrJmYbHS4sf%2Fj90t7MEUG%2BkkOuXGnO&X-Amz-Signature=93f183d63266f5977000acf8b51aae834a656cc73e182c8d6a8d92f91669e472&X-Amz-SignedHeaders=host&x-id=GetObject)

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
