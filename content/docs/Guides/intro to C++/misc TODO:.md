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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZJ3VHT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Ogz7X36s0cmsGDQ1xTMccEowAj9sKiaM40kSs5kRaQIhAJn7%2FUF5ScPF1e%2Ba%2FlfjgaD%2B93vZ4MrQjTZVQ8XqPiNCKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2i1tycC1biY5nA%2BIq3AN2opOsjiw4ArnKRhAAd1Wtb6YofXP35L3y9WpveWDvj0VWrCAz6E33kJuuvriAPiaL8fvB5N%2BsxDLVC5u0ed1dyS9LtVlo5h8EcerFM4CxCuVu7743XTXwIUPBz3T%2BDsE0DrDR8%2F1p2sBviXEquCH7eEfL0V6GqQ2tXZykTZhkn1dPO99BTS9YUsD1eFjPN5IwaQxNkaoDqvjV1cDCV4Loz0aPPscEMjKRefKptRN8N9bavG1G0nXdnHARc0K0IroA9%2B%2Bo6bszCuWVRqTM8oPXZ5jYyvUoGRNyZrkdY%2Fzb3Fu31qo3L2WRr8IGrpow5kf3IgdZMA%2BjNghA7CYf3Vg%2FeeaT8Ndy9kM7MFuo5xvyliLPxxXOhpwMRxBr6lbqd6w0amEktWNSelot3fGA2I8BhxV6J02weVvN9AwcCPkLWHFPRpKVjz8HQeZbwVmf%2FvBh5xdkZANzWdq4mtbKvyVR7WAqVftNVfkbj5ZExA9YcRWISHgdBpWTgABih8M9ZUGfVw1Pq6LXFMgcLbnCcIG129QKvY7G0T5dSHERxYCZ1I5Fg6Mk8dmPUAjn1WbZAMjcGAJArqX5VKc94Y1dkjsLQ6UiAveoek5lbrQts5ByLUUwWDx4bo58Rq1bADDu7ZjCBjqkAYdqxpcboHbKDtbAlEKXq08M52XnY3I%2FxdKMurQS6c84uuAZNufgWI4xbg4y608PNH5nb995QyYtnBqmvxN9IYvk2SJ3Sw6MG5B%2FljQ66S32%2Ft6IxxkOaz%2FK4GGZtA8xJfJLRDkYK8VpbXeMAwEhPAdTp7zhPHPg8wsyFRt207eDj5iAXk7NFWwctOZlFY8weYPnpalVQwCawgD7B10Mlo2HhEJ1&X-Amz-Signature=974032cfb59d20386dac526fabd297cd438a45bc06f0ec098bacbaabd9ecc7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZJ3VHT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Ogz7X36s0cmsGDQ1xTMccEowAj9sKiaM40kSs5kRaQIhAJn7%2FUF5ScPF1e%2Ba%2FlfjgaD%2B93vZ4MrQjTZVQ8XqPiNCKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2i1tycC1biY5nA%2BIq3AN2opOsjiw4ArnKRhAAd1Wtb6YofXP35L3y9WpveWDvj0VWrCAz6E33kJuuvriAPiaL8fvB5N%2BsxDLVC5u0ed1dyS9LtVlo5h8EcerFM4CxCuVu7743XTXwIUPBz3T%2BDsE0DrDR8%2F1p2sBviXEquCH7eEfL0V6GqQ2tXZykTZhkn1dPO99BTS9YUsD1eFjPN5IwaQxNkaoDqvjV1cDCV4Loz0aPPscEMjKRefKptRN8N9bavG1G0nXdnHARc0K0IroA9%2B%2Bo6bszCuWVRqTM8oPXZ5jYyvUoGRNyZrkdY%2Fzb3Fu31qo3L2WRr8IGrpow5kf3IgdZMA%2BjNghA7CYf3Vg%2FeeaT8Ndy9kM7MFuo5xvyliLPxxXOhpwMRxBr6lbqd6w0amEktWNSelot3fGA2I8BhxV6J02weVvN9AwcCPkLWHFPRpKVjz8HQeZbwVmf%2FvBh5xdkZANzWdq4mtbKvyVR7WAqVftNVfkbj5ZExA9YcRWISHgdBpWTgABih8M9ZUGfVw1Pq6LXFMgcLbnCcIG129QKvY7G0T5dSHERxYCZ1I5Fg6Mk8dmPUAjn1WbZAMjcGAJArqX5VKc94Y1dkjsLQ6UiAveoek5lbrQts5ByLUUwWDx4bo58Rq1bADDu7ZjCBjqkAYdqxpcboHbKDtbAlEKXq08M52XnY3I%2FxdKMurQS6c84uuAZNufgWI4xbg4y608PNH5nb995QyYtnBqmvxN9IYvk2SJ3Sw6MG5B%2FljQ66S32%2Ft6IxxkOaz%2FK4GGZtA8xJfJLRDkYK8VpbXeMAwEhPAdTp7zhPHPg8wsyFRt207eDj5iAXk7NFWwctOZlFY8weYPnpalVQwCawgD7B10Mlo2HhEJ1&X-Amz-Signature=6d4216f51ea1eae6de24a3e440a7bf27c413b9585475b050937ac7c7d7dd5ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
