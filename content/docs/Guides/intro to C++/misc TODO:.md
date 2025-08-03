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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUN34OAL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtLZQZ0leLWyZ49kgec2xazKjeZaCXjUvfMqj%2BZb0KvAiEAgVZHvoCw3nYUc0jk9ZtmFgpBJV7CzSzZfDGsFRFarogq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMMIM7JrLEF7iAsz4yrcA%2FprF%2F94dVY3yovoQsxG5Y9kBtWo2RzkFdNenjwOijIH86JHzmPl5DHRQ93JiWOUde4PNW4TDuCcUKz3HOaqIat36ZSA7de7NbljNChlHRZBq9VXyWwXeDgdYoO%2BXtWzQTun9P7qfC%2FUc0BygkJqRWp9lE9YO65cbVkK6NrM0KQ99hmngQ%2FVUKd6uRP8fnOt6z7e8zMyyLNk%2Bv3doreoRK0QSSBrQ4AFU1oNML04%2BGZGJWw3LETRfEZkNrftuLxGVuCoMSGvuuglR4jBX0DlCKj%2BRayTgjLJsHj5t4lr5T57sjdNlLpYbUsZD%2FnszFwHc%2Br7MmdFUfTZSxjKoUiMTY4pwwGjdhHJ%2BX%2Fmj5jKE7OxdhM0H8BMRSt5HN3TqwIKQ1zjonuBmDdClCNe9FVvG3LJbtl1hyCRW3xQvYQNBSYmqy1jeGqoNn8Pydso%2B5%2Fa8rSkuZraaUFFjNnkeFMe9ANMgKt89fkAbPjIvmRZdQTC7KPhht%2FEU5v5kEeaBbxQHmLXvkxvuICOdm5B2ynf6cbQXzxVPor9ZecfCA%2Bt0ts2DahmcpsX03ChtGHSAcfRQ4C%2FO2kXEK6yjUO2fmgGIesrOZdYSSjsYdFMVGS03JFIEx2kQoN6JXtdRGmNMP6qvsQGOqUB7pxMPfjM%2Far3nYQTyKpjcLSnqV4BEYhksNEgmvTeAWeHs4G1%2Be%2BprZ1CmhG3xWj2ubuXFhPGy2yhbQEcGVcEsEtYSXy%2Buw3GBubLPVTAPg5YYJcm0WWSmP9D4M8GxgY3R8tAIEQOyociCmq1heNWTVOnGvtZNn1dD1YSY2iQimX6E74ZF6oOsyLOixsr8vvIED6KeuXBOqtvAba5IMt0YZatocSk&X-Amz-Signature=8a963955db66776836f7e82eb3125dd20583086090da44076624f673958e1cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUN34OAL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtLZQZ0leLWyZ49kgec2xazKjeZaCXjUvfMqj%2BZb0KvAiEAgVZHvoCw3nYUc0jk9ZtmFgpBJV7CzSzZfDGsFRFarogq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMMIM7JrLEF7iAsz4yrcA%2FprF%2F94dVY3yovoQsxG5Y9kBtWo2RzkFdNenjwOijIH86JHzmPl5DHRQ93JiWOUde4PNW4TDuCcUKz3HOaqIat36ZSA7de7NbljNChlHRZBq9VXyWwXeDgdYoO%2BXtWzQTun9P7qfC%2FUc0BygkJqRWp9lE9YO65cbVkK6NrM0KQ99hmngQ%2FVUKd6uRP8fnOt6z7e8zMyyLNk%2Bv3doreoRK0QSSBrQ4AFU1oNML04%2BGZGJWw3LETRfEZkNrftuLxGVuCoMSGvuuglR4jBX0DlCKj%2BRayTgjLJsHj5t4lr5T57sjdNlLpYbUsZD%2FnszFwHc%2Br7MmdFUfTZSxjKoUiMTY4pwwGjdhHJ%2BX%2Fmj5jKE7OxdhM0H8BMRSt5HN3TqwIKQ1zjonuBmDdClCNe9FVvG3LJbtl1hyCRW3xQvYQNBSYmqy1jeGqoNn8Pydso%2B5%2Fa8rSkuZraaUFFjNnkeFMe9ANMgKt89fkAbPjIvmRZdQTC7KPhht%2FEU5v5kEeaBbxQHmLXvkxvuICOdm5B2ynf6cbQXzxVPor9ZecfCA%2Bt0ts2DahmcpsX03ChtGHSAcfRQ4C%2FO2kXEK6yjUO2fmgGIesrOZdYSSjsYdFMVGS03JFIEx2kQoN6JXtdRGmNMP6qvsQGOqUB7pxMPfjM%2Far3nYQTyKpjcLSnqV4BEYhksNEgmvTeAWeHs4G1%2Be%2BprZ1CmhG3xWj2ubuXFhPGy2yhbQEcGVcEsEtYSXy%2Buw3GBubLPVTAPg5YYJcm0WWSmP9D4M8GxgY3R8tAIEQOyociCmq1heNWTVOnGvtZNn1dD1YSY2iQimX6E74ZF6oOsyLOixsr8vvIED6KeuXBOqtvAba5IMt0YZatocSk&X-Amz-Signature=28117b2e1ea82725bd8ef1b9c109d80102e182fc748e22ae2e4b5bd42dea8b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
